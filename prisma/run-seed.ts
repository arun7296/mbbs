import "dotenv/config";
import { Pool } from "pg";

// Database configuration
const directUrl =
  process.env.DIRECT_DATABASE_URL ||
  "postgres://postgres:postgres@localhost:51214/template1?sslmode=disable";

const pool = new Pool({
  connectionString: directUrl,
});

// Helper to execute SQL queries
async function query(sql: string, values?: unknown[]) {
  const client = await pool.connect();
  try {
    const result = await client.query(sql, values);
    return result.rows;
  } finally {
    client.release();
  }
}

// Seed AETCOM modules
async function seedAetcomModules() {
  console.log("\n🏥 Seeding AETCOM modules...");

  const aetcomModules = [
    {
      moduleNumber: 1,
      title: "Foundations of Holistic Care",
      phase: "PHASE_1",
      description:
        "Understanding the principles of holistic, patient-centered care",
    },
    {
      moduleNumber: 2,
      title: "Professional Behavior and Communication",
      phase: "PHASE_1",
      description:
        "Developing professional attitudes, values, and communication skills",
    },
    {
      moduleNumber: 3,
      title: "Understanding Self",
      phase: "PHASE_2",
      description: "Self-awareness and personal development",
    },
    {
      moduleNumber: 4,
      title: "Applied Ethics",
      phase: "PHASE_2",
      description: "Ethical principles in medical practice",
    },
    {
      moduleNumber: 5,
      title: "Social Accountability in Practice",
      phase: "PHASE_3_PART1",
      description: "Healthcare delivery systems and social responsibility",
    },
    {
      moduleNumber: 6,
      title: "Evidence-Based and Reflective Practice",
      phase: "PHASE_3_PART2",
      description:
        "Using evidence for clinical decision-making and continuous improvement",
    },
  ];

  let count = 0;
  for (const mod of aetcomModules) {
    try {
      await query(
        `INSERT INTO "AetcomModule" ("moduleNumber", "title", "phase", "description")
         VALUES ($1, $2, $3, $4)
         ON CONFLICT DO NOTHING`,
        [mod.moduleNumber, mod.title, mod.phase, mod.description]
      );
      count++;
    } catch (e) {
      console.warn(`   ⚠️  Failed to seed AETCOM module ${mod.moduleNumber}`);
    }
  }

  console.log(`   ✅ ${count} AETCOM modules seeded`);
}

// Seed subjects, modules, and topics
async function seedSubjects() {
  console.log("\n📚 Seeding subjects, modules, and topics...");

  // Dynamic imports of seed data with proper .ts extension
  const anatomy = await import("./seeds/anatomy.ts");
  const physiology = await import("./seeds/physiology.ts");
  const biochemistry = await import("./seeds/biochemistry.ts");
  const pathology = await import("./seeds/pathology.ts");
  const pharmacology = await import("./seeds/pharmacology.ts");
  const microbiology = await import("./seeds/microbiology.ts");
  const forensicMedicine = await import("./seeds/forensic-medicine.ts");
  const communityMedicine = await import("./seeds/community-medicine.ts");
  const ent = await import("./seeds/ent.ts");
  const ophthalmology = await import("./seeds/ophthalmology.ts");
  const medicine = await import("./seeds/medicine.ts");
  const surgery = await import("./seeds/surgery.ts");
  const obg = await import("./seeds/obg.ts");
  const pediatrics = await import("./seeds/pediatrics.ts");
  const remaining = await import("./seeds/remaining-subjects.ts");

  const subjects = [
    {
      data: anatomy.anatomySubject,
      modules: anatomy.anatomyModules,
      topics: anatomy.anatomyTopics,
    },
    {
      data: physiology.physiologySubject,
      modules: physiology.physiologyModules,
      topics: physiology.physiologyTopics,
    },
    {
      data: biochemistry.biochemistrySubject,
      modules: biochemistry.biochemistryModules,
      topics: biochemistry.biochemistryTopics,
    },
    {
      data: pathology.pathologySubject,
      modules: pathology.pathologyModules,
      topics: pathology.pathologyTopics,
    },
    {
      data: pharmacology.pharmacologySubject,
      modules: pharmacology.pharmacologyModules,
      topics: pharmacology.pharmacologyTopics,
    },
    {
      data: microbiology.microbiologySubject,
      modules: microbiology.microbiologyModules,
      topics: microbiology.microbiologyTopics,
    },
    {
      data: forensicMedicine.forensicMedicineSubject,
      modules: forensicMedicine.forensicMedicineModules,
      topics: forensicMedicine.forensicMedicineTopics,
    },
    {
      data: communityMedicine.communityMedicineSubject,
      modules: communityMedicine.communityMedicineModules,
      topics: communityMedicine.communityMedicineTopics,
    },
    {
      data: ent.entSubject,
      modules: ent.entModules,
      topics: ent.entTopics,
    },
    {
      data: ophthalmology.ophthalmologySubject,
      modules: ophthalmology.ophthalmologyModules,
      topics: ophthalmology.ophthalmologyTopics,
    },
    {
      data: medicine.medicineSubject,
      modules: medicine.medicineModules,
      topics: medicine.medicineTopics,
    },
    {
      data: surgery.surgerySubject,
      modules: surgery.surgeryModules,
      topics: surgery.surgeryTopics,
    },
    {
      data: obg.obgSubject,
      modules: obg.obgModules,
      topics: obg.obgTopics,
    },
    {
      data: pediatrics.pediatricsSubject,
      modules: pediatrics.pediatricsModules,
      topics: pediatrics.pediatricsTopics,
    },
    {
      data: remaining.dermatologySubject,
      modules: remaining.dermatologyModules,
      topics: remaining.dermatologyTopics,
    },
    {
      data: remaining.psychiatrySubject,
      modules: remaining.psychiatryModules,
      topics: remaining.psychiatryTopics,
    },
    {
      data: remaining.orthopedicsSubject,
      modules: remaining.orthopedicsModules,
      topics: remaining.orthopedicsTopics,
    },
    {
      data: remaining.anesthesiologySubject,
      modules: remaining.anesthesiologyModules,
      topics: remaining.anesthesiologyTopics,
    },
    {
      data: remaining.radiologySubject,
      modules: remaining.radiologyModules,
      topics: remaining.radiologyTopics,
    },
  ];

  let subjectCount = 0;
  let moduleCount = 0;
  let topicCount = 0;

  for (const { data, modules, topics } of subjects) {
    try {
      // Insert subject
      const subjectRes = await query(
        `INSERT INTO "Subject" (id, "name", "code", "phase", "totalHours", "description", "iconUrl", "sortOrder")
         VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT ("code") DO NOTHING
         RETURNING id`,
        [
          data.name,
          data.code,
          data.phase,
          data.totalHours,
          data.description || null,
          data.iconUrl || null,
          data.sortOrder,
        ]
      );

      let subjectId: string;
      if (subjectRes.length > 0) {
        subjectId = subjectRes[0].id;
        subjectCount++;
      } else {
        // Subject already exists, fetch its ID
        const existing = await query(
          `SELECT id FROM "Subject" WHERE "code" = $1`,
          [data.code]
        );
        if (existing.length === 0) {
          console.warn(`   ⚠️  Failed to find subject ${data.code}`);
          continue;
        }
        subjectId = existing[0].id;
      }

      // Insert modules
      for (const mod of modules) {
        try {
          const modRes = await query(
            `INSERT INTO "Module" (id, "subjectId", "name", "code", "description", "sortOrder", "estimatedHours")
             VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6)
             ON CONFLICT ("code") DO NOTHING
             RETURNING id`,
            [
              subjectId,
              mod.name,
              mod.code,
              mod.description || null,
              mod.sortOrder,
              mod.estimatedHours,
            ]
          );

          let moduleId: string;
          if (modRes.length > 0) {
            moduleId = modRes[0].id;
            moduleCount++;
          } else {
            const existing = await query(
              `SELECT id FROM "Module" WHERE "code" = $1`,
              [mod.code]
            );
            if (existing.length === 0) continue;
            moduleId = existing[0].id;
          }

          // Insert topics and competencies
          const modTopics = topics[mod.code] || [];
          for (const t of modTopics) {
            try {
              // Insert competency
              const compRes = await query(
                `INSERT INTO "NmcCompetency" (id, "code", "description", "subjectId", "domain", "level", "phase", "isAetcom")
                 VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7)
                 ON CONFLICT ("code") DO NOTHING
                 RETURNING id`,
                [
                  t.competencyCode,
                  t.competencyDesc,
                  subjectId,
                  "Cognitive",
                  "KNOWS_HOW",
                  data.phase,
                  false,
                ]
              );

              let compId: string | null = null;
              if (compRes.length > 0) {
                compId = compRes[0].id;
              } else {
                const existing = await query(
                  `SELECT id FROM "NmcCompetency" WHERE "code" = $1`,
                  [t.competencyCode]
                );
                if (existing.length > 0) {
                  compId = existing[0].id;
                }
              }

              // Insert topic
              await query(
                `INSERT INTO "Topic" (id, "moduleId", "name", "code", "nmcCompetencyId", "sortOrder")
                 VALUES (gen_random_uuid(), $1, $2, $3, $4, $5)
                 ON CONFLICT ("code") DO NOTHING`,
                [moduleId, t.name, t.code, compId || null, t.sortOrder]
              );
              topicCount++;
            } catch (e) {
              // Silently skip on errors
            }
          }
        } catch (e) {
          // Silently skip module errors
        }
      }
    } catch (e) {
      console.warn(
        `   ⚠️  Failed to seed subject ${data.code}: ${(e as Error).message}`
      );
    }
  }

  console.log(
    `   ✅ ${subjectCount} subjects, ${moduleCount} modules, ${topicCount} topics seeded`
  );
}

// Main seed function
async function main() {
  try {
    console.log("🌱 Starting MedLearn database seed...");

    await seedAetcomModules();
    await seedSubjects();

    console.log("\n✨ Curriculum seeding completed successfully!");
    console.log("\n📝 Note: Lessons, MCQs, and clinical cases require separate seeding with Prisma seed.");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

main();
