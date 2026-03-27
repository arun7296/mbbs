-- CreateTable
CREATE TABLE "ClinicalScenario" (
    "id" TEXT NOT NULL,
    "topicId" TEXT NOT NULL,
    "lessonId" TEXT,
    "patientAge" INTEGER NOT NULL,
    "patientSex" TEXT NOT NULL,
    "patientOccupation" TEXT,
    "patientLocation" TEXT,
    "chiefComplaint" TEXT NOT NULL,
    "historyOfPresent" TEXT NOT NULL,
    "pastHistory" TEXT,
    "familyHistory" TEXT,
    "socialHistory" TEXT,
    "drugHistory" TEXT,
    "vitals" JSONB NOT NULL,
    "generalExam" TEXT,
    "systemicExam" JSONB NOT NULL,
    "availableInvestigations" JSONB NOT NULL,
    "correctDiagnosis" TEXT NOT NULL,
    "differentials" JSONB NOT NULL,
    "diagnosticReasoning" TEXT NOT NULL,
    "managementPlan" JSONB NOT NULL,
    "redFlags" JSONB NOT NULL,
    "keyLearningPoints" TEXT[],
    "commonMistakes" TEXT[],
    "relevantHistoryQs" TEXT[],
    "relevantExamIds" TEXT[],
    "difficulty" TEXT NOT NULL DEFAULT 'MODERATE',
    "estimatedMinutes" INTEGER NOT NULL DEFAULT 15,
    "subjectTags" TEXT[],
    "examRelevance" TEXT[],
    "nmcCompetencyCode" TEXT,
    "disclaimer" TEXT NOT NULL DEFAULT '⚠️ EDUCATIONAL SIMULATION ONLY. Do NOT use for real patient care.',
    "maxScore" INTEGER NOT NULL DEFAULT 100,
    "passingScore" INTEGER NOT NULL DEFAULT 60,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClinicalScenario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClinicalAttempt" (
    "id" TEXT NOT NULL,
    "scenarioId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "historyQuestions" JSONB NOT NULL,
    "examinations" JSONB NOT NULL,
    "investigationsOrdered" JSONB NOT NULL,
    "differentialsMade" JSONB NOT NULL,
    "finalDiagnosis" TEXT,
    "treatmentPlan" JSONB,
    "historyScore" INTEGER NOT NULL DEFAULT 0,
    "examScore" INTEGER NOT NULL DEFAULT 0,
    "investigationScore" INTEGER NOT NULL DEFAULT 0,
    "diagnosisScore" INTEGER NOT NULL DEFAULT 0,
    "treatmentScore" INTEGER NOT NULL DEFAULT 0,
    "totalScore" INTEGER NOT NULL DEFAULT 0,
    "feedback" JSONB,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "timeSpentSeconds" INTEGER,

    CONSTRAINT "ClinicalAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ClinicalScenario_topicId_idx" ON "ClinicalScenario"("topicId");

-- CreateIndex
CREATE INDEX "ClinicalScenario_difficulty_idx" ON "ClinicalScenario"("difficulty");

-- CreateIndex
CREATE INDEX "ClinicalAttempt_userId_idx" ON "ClinicalAttempt"("userId");

-- CreateIndex
CREATE INDEX "ClinicalAttempt_scenarioId_idx" ON "ClinicalAttempt"("scenarioId");

-- CreateIndex
CREATE UNIQUE INDEX "ClinicalAttempt_userId_scenarioId_startedAt_key" ON "ClinicalAttempt"("userId", "scenarioId", "startedAt");

-- AddForeignKey
ALTER TABLE "ClinicalScenario" ADD CONSTRAINT "ClinicalScenario_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicalScenario" ADD CONSTRAINT "ClinicalScenario_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicalAttempt" ADD CONSTRAINT "ClinicalAttempt_scenarioId_fkey" FOREIGN KEY ("scenarioId") REFERENCES "ClinicalScenario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicalAttempt" ADD CONSTRAINT "ClinicalAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
