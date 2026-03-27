/**
 * Seed clinical decision scenarios for Layer 8
 *
 * Usage:
 *   npx tsx scripts/seed-scenarios.ts          # Seed all subjects
 *   npx tsx scripts/seed-scenarios.ts IM       # Seed only Internal Medicine
 */
import { PrismaClient } from "../src/generated/prisma/client";
import { medicineScenarios } from "../prisma/seeds/scenarios-medicine";

const prisma = new PrismaClient();

const SCENARIO_MAP: Record<string, typeof medicineScenarios> = {
  IM: medicineScenarios,
  // Add more subjects here as seed files are created:
  // SU: surgeryScenarios,
  // PE: pediatricsScenarios,
  // OG: obgynScenarios,
  // AN: anatomyScenarios,
};

async function seedScenarios(subjectFilter?: string) {
  const subjects = subjectFilter ? [subjectFilter] : Object.keys(SCENARIO_MAP);

  for (const subjectCode of subjects) {
    const scenarios = SCENARIO_MAP[subjectCode];
    if (!scenarios) {
      console.log(`⚠️  No scenarios found for subject: ${subjectCode}`);
      continue;
    }

    console.log(`\n📋 Seeding ${scenarios.length} scenarios for ${subjectCode}...`);

    for (const { topicCode, scenario } of scenarios) {
      // Find the topic by code
      const topic = await prisma.topic.findUnique({
        where: { code: topicCode },
        include: { module: true },
      });

      if (!topic) {
        console.log(`  ❌ Topic not found: ${topicCode} — skipping`);
        continue;
      }

      // Check if scenario already exists for this topic
      const existing = await prisma.clinicalScenario.findFirst({
        where: { topicId: topic.id },
      });

      if (existing) {
        console.log(`  ⏭️  Scenario already exists for ${topicCode} — skipping`);
        continue;
      }

      // Find or create Layer 8 lesson for this topic
      let lesson = await prisma.lesson.findUnique({
        where: {
          topicId_layer: {
            topicId: topic.id,
            layer: 8,
          },
        },
      });

      if (!lesson) {
        lesson = await prisma.lesson.create({
          data: {
            topicId: topic.id,
            moduleId: topic.moduleId,
            title: `Clinical Sim: ${topic.name}`,
            slug: `${topicCode.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-clinical-sim`,
            layer: 8,
            contentMd: `# Clinical Decision Simulator\n\n⚠️ EDUCATIONAL SIMULATION ONLY — Not for real patient care.\n\nThis layer presents a realistic patient encounter for **${topic.name}**. Work through the case step by step as the attending doctor.`,
            estimatedMinutes: scenario.estimatedMinutes,
            status: "PUBLISHED",
          },
        });
        console.log(`  📝 Created Layer 8 lesson for ${topicCode}`);
      }

      // Create the scenario
      await prisma.clinicalScenario.create({
        data: {
          topicId: topic.id,
          lessonId: lesson.id,
          patientAge: scenario.patientAge,
          patientSex: scenario.patientSex,
          patientOccupation: scenario.patientOccupation || null,
          patientLocation: scenario.patientLocation || null,
          chiefComplaint: scenario.chiefComplaint,
          historyOfPresent: scenario.historyOfPresent,
          pastHistory: scenario.pastHistory || null,
          familyHistory: scenario.familyHistory || null,
          socialHistory: scenario.socialHistory || null,
          drugHistory: scenario.drugHistory || null,
          vitals: scenario.vitals,
          generalExam: scenario.generalExam || null,
          systemicExam: scenario.systemicExam,
          availableInvestigations: scenario.availableInvestigations,
          correctDiagnosis: scenario.correctDiagnosis,
          differentials: scenario.differentials,
          diagnosticReasoning: scenario.diagnosticReasoning,
          managementPlan: scenario.managementPlan,
          redFlags: scenario.redFlags,
          keyLearningPoints: scenario.keyLearningPoints,
          commonMistakes: scenario.commonMistakes,
          relevantHistoryQs: scenario.relevantHistoryQs,
          relevantExamIds: scenario.relevantExamIds,
          difficulty: scenario.difficulty,
          estimatedMinutes: scenario.estimatedMinutes,
          subjectTags: scenario.subjectTags,
          examRelevance: scenario.examRelevance,
          nmcCompetencyCode: scenario.nmcCompetencyCode || null,
          maxScore: scenario.maxScore,
          passingScore: scenario.passingScore,
        },
      });

      console.log(`  ✅ Created scenario for ${topicCode}: "${scenario.chiefComplaint}"`);
    }
  }

  console.log("\n🎉 Scenario seeding complete!");
}

const subjectFilter = process.argv[2];
seedScenarios(subjectFilter)
  .catch(console.error)
  .finally(() => prisma.$disconnect());
