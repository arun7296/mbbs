#!/usr/bin/env tsx
/**
 * Master orchestrator: Run all medical image seeders in priority order.
 *
 * Executes 5 source-specific seeders sequentially to fill Layer 7 visuals
 * from 43% to ~94% coverage using only free, properly-licensed images.
 *
 * Source priority order:
 * 1. Servier Medical Art (CC-BY 4.0) — professional vector medical illustrations
 * 2. Gray's Anatomy 1918 (Public Domain) — classic anatomical plates
 * 3. OpenStax/Blausen (CC-BY 4.0) — modern textbook illustrations
 * 4. CDC/WHO/Radiopaedia (Public Domain/CC) — clinical & public health images
 * 5. Wikimedia Final Sweep (Various CC) — broad search for remaining gaps
 *
 * Each step only targets topics that DON'T already have visuals, so they
 * build on each other without duplicates.
 *
 * Usage:
 *   npx tsx scripts/seed-all-images.ts                   # Run all 5 steps
 *   npx tsx scripts/seed-all-images.ts --step 1          # Only Servier
 *   npx tsx scripts/seed-all-images.ts --step 3          # Only OpenStax
 *   npx tsx scripts/seed-all-images.ts --dry-run         # Preview all
 *   npx tsx scripts/seed-all-images.ts --subject AN      # Anatomy only
 */

import { execSync } from "child_process";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const subjectFilter = args.includes("--subject")
  ? args[args.indexOf("--subject") + 1]
  : null;
const stepOnly = args.includes("--step")
  ? parseInt(args[args.indexOf("--step") + 1])
  : null;

interface Step {
  num: number;
  name: string;
  script: string;
  description: string;
}

const STEPS: Step[] = [
  {
    num: 1,
    name: "Servier Medical Art",
    script: "scripts/seed-servier-full.ts",
    description: "Professional CC-BY 4.0 vector illustrations (~200 topics)",
  },
  {
    num: 2,
    name: "Gray's Anatomy 1918",
    script: "scripts/seed-grays-anatomy.ts",
    description: "Public domain anatomical plates (~100 topics)",
  },
  {
    num: 3,
    name: "OpenStax & Blausen",
    script: "scripts/seed-openstax-images.ts",
    description: "CC-BY textbook figures & 3D illustrations (~80 topics)",
  },
  {
    num: 4,
    name: "CDC / WHO / Clinical",
    script: "scripts/seed-clinical-images.ts",
    description: "Public health & clinical images (~100 topics)",
  },
  {
    num: 5,
    name: "Wikimedia Final Sweep",
    script: "scripts/seed-wikimedia-final.ts",
    description: "Broad search for remaining gaps (~150 topics)",
  },
];

console.log("╔══════════════════════════════════════════════════╗");
console.log("║  Medical Image Seeder — Multi-Source Pipeline    ║");
console.log("╚══════════════════════════════════════════════════╝\n");

if (dryRun) console.log("MODE: DRY RUN (preview only)\n");
if (subjectFilter) console.log(`FILTER: Subject ${subjectFilter} only\n`);

const stepsToRun = stepOnly
  ? STEPS.filter((s) => s.num === stepOnly)
  : STEPS;

if (stepsToRun.length === 0) {
  console.error(`Invalid step number: ${stepOnly}. Valid: 1-5.`);
  process.exit(1);
}

console.log("Steps to run:");
for (const step of stepsToRun) {
  console.log(`  ${step.num}. ${step.name} — ${step.description}`);
}
console.log();

let totalAdded = 0;

for (const step of stepsToRun) {
  console.log(`\n${"═".repeat(60)}`);
  console.log(`Step ${step.num}: ${step.name}`);
  console.log(`${"═".repeat(60)}\n`);

  const flags: string[] = [];
  if (dryRun) flags.push("--dry-run");
  if (subjectFilter) flags.push("--subject", subjectFilter);

  const cmd = `npx tsx ${step.script} ${flags.join(" ")}`;

  try {
    console.log(`Running: ${cmd}\n`);
    execSync(cmd, {
      stdio: "inherit",
      env: { ...process.env },
      cwd: process.cwd(),
      timeout: 30 * 60 * 1000, // 30 min per step
    });
    console.log(`\n✅ Step ${step.num} complete.`);
  } catch (err: any) {
    console.error(`\n❌ Step ${step.num} failed: ${err.message?.substring(0, 200)}`);
    console.error("Continuing to next step...\n");
  }
}

console.log(`\n${"═".repeat(60)}`);
console.log("All steps complete!");
console.log(`${"═".repeat(60)}`);
console.log("\nRun 'npx tsx scripts/seed-wikimedia-final.ts --dry-run' to check remaining gaps.");
console.log("Use '--resume' flag on any individual script to continue from where it left off.");
