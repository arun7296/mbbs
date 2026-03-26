#!/usr/bin/env ts-node
/**
 * Create demo users for the MedLearn platform.
 *
 * Usage:
 *   npx tsx scripts/create-demo-user.ts
 *
 * Login credentials after running:
 *   Email: demo@medlearn.in  Password: demo1234
 *   Email: admin@medlearn.in Password: admin1234
 */

import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const directUrl =
  process.env.DIRECT_DATABASE_URL ||
  "postgres://postgres:postgres@localhost:51214/template1?sslmode=disable";
const adapter = new PrismaPg({ connectionString: directUrl });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("👤 Creating demo users...\n");

  const demoHash = await bcrypt.hash("demo1234", 12);
  const adminHash = await bcrypt.hash("admin1234", 12);

  // Create demo student
  const demo = await prisma.user.upsert({
    where: { email: "demo@medlearn.in" },
    update: { passwordHash: demoHash, name: "Demo Student" },
    create: {
      email: "demo@medlearn.in",
      name: "Demo Student",
      passwordHash: demoHash,
      currentPhase: "PHASE_1",
      dailyStudyHours: 6,
      targetExams: ["NEXT_STEP1", "NEET_PG"],
      onboardingComplete: true,
    },
  });
  console.log(`✅ Demo student: ${demo.email} (password: demo1234)`);

  // Create admin user
  const admin = await prisma.user.upsert({
    where: { email: "admin@medlearn.in" },
    update: { passwordHash: adminHash, name: "Admin" },
    create: {
      email: "admin@medlearn.in",
      name: "Admin",
      passwordHash: adminHash,
      currentPhase: "PHASE_1",
      dailyStudyHours: 8,
      targetExams: ["NEXT_STEP1"],
      onboardingComplete: true,
    },
  });
  console.log(`✅ Admin: ${admin.email} (password: admin1234)`);

  console.log("\n📧 Login at http://localhost:3000/login");
  console.log("   Email: demo@medlearn.in");
  console.log("   Password: demo1234");
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await (
      prisma as unknown as { $disconnect: () => Promise<void> }
    ).$disconnect();
  });
