-- CreateEnum
CREATE TYPE "Phase" AS ENUM ('PHASE_1', 'PHASE_2', 'PHASE_3_PART1', 'PHASE_3_PART2');

-- CreateEnum
CREATE TYPE "CompetencyLevel" AS ENUM ('KNOWS', 'KNOWS_HOW', 'SHOWS_HOW', 'DOES');

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('MCQ_SINGLE', 'MCQ_MULTI', 'CASE_BASED_MCQ', 'ASSERTION_REASON', 'MATCH_THE_FOLLOWING', 'SHORT_ANSWER', 'LONG_ANSWER', 'IMAGE_BASED');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD', 'EXPERT');

-- CreateEnum
CREATE TYPE "ExamTag" AS ENUM ('NEXT_STEP1', 'NEXT_STEP2', 'NEET_PG', 'UNIVERSITY');

-- CreateEnum
CREATE TYPE "ContentStatus" AS ENUM ('DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "LearningMode" AS ENUM ('LEARN', 'PRACTICE', 'REVISE', 'TEST', 'CLINICAL_SIM');

-- CreateEnum
CREATE TYPE "CaseStageType" AS ENUM ('HISTORY', 'EXAMINATION', 'INVESTIGATION', 'DIAGNOSIS', 'TREATMENT', 'FOLLOWUP');

-- CreateTable "College"
CREATE TABLE "College" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "nmcCode" TEXT,
    "state" TEXT NOT NULL
);

-- CreateTable "User"
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "avatarUrl" TEXT,
    "passwordHash" TEXT,
    "currentPhase" "Phase" NOT NULL DEFAULT 'PHASE_1',
    "mbbsStartYear" INTEGER,
    "collegeId" TEXT,
    "dailyStudyHours" DOUBLE PRECISION NOT NULL DEFAULT 6.0,
    "targetExams" "ExamTag"[],
    "onboardingComplete" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable "Account"
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT
);

-- CreateTable "Session"
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable "VerificationToken"
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable "Subject"
CREATE TABLE "Subject" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "phase" "Phase" NOT NULL,
    "totalHours" INTEGER NOT NULL,
    "description" TEXT,
    "iconUrl" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable "Module"
CREATE TABLE "Module" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subjectId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "estimatedHours" DOUBLE PRECISION NOT NULL DEFAULT 0
);

-- CreateTable "Topic"
CREATE TABLE "Topic" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "moduleId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "nmcCompetencyId" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable "NmcCompetency"
CREATE TABLE "NmcCompetency" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "level" "CompetencyLevel" NOT NULL,
    "phase" "Phase" NOT NULL,
    "isAetcom" BOOLEAN NOT NULL DEFAULT false,
    "aetcomModuleId" TEXT
);

-- CreateTable "AetcomModule"
CREATE TABLE "AetcomModule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "moduleNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "phase" "Phase" NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable "Lesson"
CREATE TABLE "Lesson" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "topicId" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "layer" INTEGER NOT NULL,
    "contentMd" TEXT NOT NULL,
    "summary" TEXT,
    "mnemonics" JSONB,
    "keyPoints" JSONB,
    "textbookRefs" JSONB,
    "diagramUrls" JSONB,
    "videoUrl" TEXT,
    "estimatedMinutes" INTEGER NOT NULL DEFAULT 20,
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "version" INTEGER NOT NULL DEFAULT 1,
    "examTags" "ExamTag"[],
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "publishedAt" TIMESTAMP(3)
);

-- CreateTable "LessonRevision"
CREATE TABLE "LessonRevision" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lessonId" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "contentMd" TEXT NOT NULL,
    "changedBy" TEXT NOT NULL,
    "changeNote" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable "VideoResource"
CREATE TABLE "VideoResource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lessonId" TEXT NOT NULL,
    "youtubeVideoId" TEXT NOT NULL,
    "youtubeUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "channelName" TEXT NOT NULL,
    "channelUrl" TEXT,
    "durationSeconds" INTEGER NOT NULL,
    "description" TEXT,
    "startTimestamp" INTEGER,
    "endTimestamp" INTEGER,
    "quality" TEXT NOT NULL DEFAULT 'RECOMMENDED',
    "language" TEXT NOT NULL DEFAULT 'en',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "thumbnailUrl" TEXT,
    "viewCount" INTEGER,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable "VisualResource"
CREATE TABLE "VisualResource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lessonId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "componentName" TEXT,
    "imageUrl" TEXT,
    "imageAlt" TEXT,
    "attribution" TEXT,
    "license" TEXT,
    "category" TEXT NOT NULL DEFAULT 'ANATOMY',
    "tags" TEXT[],
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "svgContent" TEXT,
    "annotations" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable "Question"
CREATE TABLE "Question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" "QuestionType" NOT NULL,
    "subjectId" TEXT NOT NULL,
    "topicId" TEXT,
    "competencyId" TEXT,
    "stem" TEXT NOT NULL,
    "options" JSONB,
    "correctAnswer" TEXT,
    "explanation" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL DEFAULT 'MEDIUM',
    "examTags" "ExamTag"[],
    "bloomsLevel" TEXT NOT NULL DEFAULT 'Recall',
    "discriminationIdx" DOUBLE PRECISION,
    "difficultyParam" DOUBLE PRECISION,
    "guessingParam" DOUBLE PRECISION,
    "imageUrls" JSONB,
    "clinicalVignette" TEXT,
    "textbookRefs" JSONB,
    "status" "ContentStatus" NOT NULL DEFAULT 'PUBLISHED',
    "usageCount" INTEGER NOT NULL DEFAULT 0,
    "avgCorrectRate" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable "Quiz"
CREATE TABLE "Quiz" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "subjectIds" TEXT[],
    "topicIds" TEXT[],
    "totalQs" INTEGER NOT NULL,
    "timeLimitMin" INTEGER,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "score" DOUBLE PRECISION,
    "percentile" DOUBLE PRECISION,
    "abilityEst" DOUBLE PRECISION
);

-- CreateTable "QuizQuestion"
CREATE TABLE "QuizQuestion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quizId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "sequenceNum" INTEGER NOT NULL,
    "selectedAnswer" TEXT,
    "isCorrect" BOOLEAN,
    "timeSpentSec" INTEGER,
    "markedForReview" BOOLEAN NOT NULL DEFAULT false,
    "abilityAtPoint" DOUBLE PRECISION
);

-- CreateTable "MockExam"
CREATE TABLE "MockExam" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "examTag" "ExamTag" NOT NULL,
    "totalQs" INTEGER NOT NULL,
    "timeLimitMin" INTEGER NOT NULL,
    "sections" JSONB NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "availableFrom" TIMESTAMP(3),
    "availableTo" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable "ClinicalCase"
CREATE TABLE "ClinicalCase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "presentingComplaint" TEXT NOT NULL,
    "subjectIds" TEXT[],
    "topicIds" TEXT[],
    "competencyIds" TEXT[],
    "difficulty" "Difficulty" NOT NULL DEFAULT 'MEDIUM',
    "caseType" TEXT NOT NULL,
    "patientProfile" JSONB NOT NULL,
    "examTags" "ExamTag"[],
    "estimatedMinutes" INTEGER NOT NULL DEFAULT 30,
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable "CaseStage"
CREATE TABLE "CaseStage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "caseId" TEXT NOT NULL,
    "stage" "CaseStageType" NOT NULL,
    "stageOrder" INTEGER NOT NULL,
    "prompt" TEXT NOT NULL,
    "availableActions" JSONB NOT NULL,
    "findings" JSONB,
    "timeoutSec" INTEGER
);

-- CreateTable "CaseAttempt"
CREATE TABLE "CaseAttempt" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "decisions" JSONB NOT NULL,
    "totalScore" DOUBLE PRECISION,
    "maxScore" DOUBLE PRECISION,
    "feedback" TEXT
);

-- CreateTable "OsceStation"
CREATE TABLE "OsceStation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "competencyIds" TEXT[],
    "scenario" TEXT NOT NULL,
    "checklistItems" JSONB NOT NULL,
    "timeLimitMin" INTEGER NOT NULL DEFAULT 10,
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable "UserProgress"
CREATE TABLE "UserProgress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "lessonId" TEXT,
    "topicId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "completionPct" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lastAccessedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "timeSpentMin" INTEGER NOT NULL DEFAULT 0,
    "masteryLevel" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "nextReviewAt" TIMESTAMP(3),
    "easeFactor" DOUBLE PRECISION NOT NULL DEFAULT 2.5,
    "interval" INTEGER NOT NULL DEFAULT 1,
    "repetitions" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable "StudyPlan"
CREATE TABLE "StudyPlan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "generatedByAi" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable "StudyPlanDay"
CREATE TABLE "StudyPlanDay" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "planId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "tasks" JSONB NOT NULL,
    "completedPct" DOUBLE PRECISION NOT NULL DEFAULT 0
);

-- CreateTable "UserStreak"
CREATE TABLE "UserStreak" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "currentStreak" INTEGER NOT NULL DEFAULT 0,
    "longestStreak" INTEGER NOT NULL DEFAULT 0,
    "lastActiveDate" TIMESTAMP(3) NOT NULL
);

-- CreateTable "SubjectAbility"
CREATE TABLE "SubjectAbility" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "theta" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "confidence" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "College_nmcCode_key" ON "College"("nmcCode");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE INDEX "User_collegeId_idx" ON "User"("collegeId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE INDEX "Account_userId_idx" ON "Account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_code_key" ON "Subject"("code");

-- CreateIndex
CREATE INDEX "Subject_phase_idx" ON "Subject"("phase");

-- CreateIndex
CREATE UNIQUE INDEX "Module_code_key" ON "Module"("code");

-- CreateIndex
CREATE INDEX "Module_subjectId_idx" ON "Module"("subjectId");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_code_key" ON "Topic"("code");

-- CreateIndex
CREATE INDEX "Topic_moduleId_idx" ON "Topic"("moduleId");

-- CreateIndex
CREATE INDEX "Topic_nmcCompetencyId_idx" ON "Topic"("nmcCompetencyId");

-- CreateIndex
CREATE UNIQUE INDEX "NmcCompetency_code_key" ON "NmcCompetency"("code");

-- CreateIndex
CREATE INDEX "NmcCompetency_subjectId_idx" ON "NmcCompetency"("subjectId");

-- CreateIndex
CREATE INDEX "NmcCompetency_aetcomModuleId_idx" ON "NmcCompetency"("aetcomModuleId");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_slug_key" ON "Lesson"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_topicId_layer_key" ON "Lesson"("topicId", "layer");

-- CreateIndex
CREATE INDEX "Lesson_topicId_idx" ON "Lesson"("topicId");

-- CreateIndex
CREATE INDEX "Lesson_moduleId_idx" ON "Lesson"("moduleId");

-- CreateIndex
CREATE INDEX "Lesson_status_idx" ON "Lesson"("status");

-- CreateIndex
CREATE INDEX "LessonRevision_lessonId_idx" ON "LessonRevision"("lessonId");

-- CreateIndex
CREATE INDEX "VideoResource_lessonId_idx" ON "VideoResource"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "VideoResource_lessonId_youtubeVideoId_key" ON "VideoResource"("lessonId", "youtubeVideoId");

-- CreateIndex
CREATE INDEX "VisualResource_lessonId_idx" ON "VisualResource"("lessonId");

-- CreateIndex
CREATE INDEX "VisualResource_category_idx" ON "VisualResource"("category");

-- CreateIndex
CREATE INDEX "Question_subjectId_idx" ON "Question"("subjectId");

-- CreateIndex
CREATE INDEX "Question_topicId_idx" ON "Question"("topicId");

-- CreateIndex
CREATE INDEX "Question_competencyId_idx" ON "Question"("competencyId");

-- CreateIndex
CREATE INDEX "Question_type_idx" ON "Question"("type");

-- CreateIndex
CREATE INDEX "Question_difficulty_idx" ON "Question"("difficulty");

-- CreateIndex
CREATE INDEX "Question_status_idx" ON "Question"("status");

-- CreateIndex
CREATE INDEX "Quiz_userId_idx" ON "Quiz"("userId");

-- CreateIndex
CREATE INDEX "Quiz_startedAt_idx" ON "Quiz"("startedAt");

-- CreateIndex
CREATE INDEX "QuizQuestion_quizId_idx" ON "QuizQuestion"("quizId");

-- CreateIndex
CREATE INDEX "QuizQuestion_questionId_idx" ON "QuizQuestion"("questionId");

-- CreateIndex
CREATE INDEX "ClinicalCase_difficulty_idx" ON "ClinicalCase"("difficulty");

-- CreateIndex
CREATE INDEX "ClinicalCase_status_idx" ON "ClinicalCase"("status");

-- CreateIndex
CREATE UNIQUE INDEX "CaseStage_caseId_stageOrder_key" ON "CaseStage"("caseId", "stageOrder");

-- CreateIndex
CREATE INDEX "CaseStage_caseId_idx" ON "CaseStage"("caseId");

-- CreateIndex
CREATE INDEX "CaseAttempt_userId_idx" ON "CaseAttempt"("userId");

-- CreateIndex
CREATE INDEX "CaseAttempt_caseId_idx" ON "CaseAttempt"("caseId");

-- CreateIndex
CREATE INDEX "OsceStation_subjectId_idx" ON "OsceStation"("subjectId");

-- CreateIndex
CREATE INDEX "OsceStation_status_idx" ON "OsceStation"("status");

-- CreateIndex
CREATE UNIQUE INDEX "UserProgress_userId_topicId_key" ON "UserProgress"("userId", "topicId");

-- CreateIndex
CREATE INDEX "UserProgress_userId_idx" ON "UserProgress"("userId");

-- CreateIndex
CREATE INDEX "UserProgress_topicId_idx" ON "UserProgress"("topicId");

-- CreateIndex
CREATE INDEX "UserProgress_subjectId_idx" ON "UserProgress"("subjectId");

-- CreateIndex
CREATE INDEX "StudyPlan_userId_idx" ON "StudyPlan"("userId");

-- CreateIndex
CREATE INDEX "StudyPlan_isActive_idx" ON "StudyPlan"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "StudyPlanDay_planId_date_key" ON "StudyPlanDay"("planId", "date");

-- CreateIndex
CREATE INDEX "StudyPlanDay_planId_idx" ON "StudyPlanDay"("planId");

-- CreateIndex
CREATE UNIQUE INDEX "UserStreak_userId_key" ON "UserStreak"("userId");

-- CreateIndex
CREATE INDEX "UserStreak_userId_idx" ON "UserStreak"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SubjectAbility_userId_subjectId_key" ON "SubjectAbility"("userId", "subjectId");

-- CreateIndex
CREATE INDEX "SubjectAbility_userId_idx" ON "SubjectAbility"("userId");

-- CreateIndex
CREATE INDEX "SubjectAbility_subjectId_idx" ON "SubjectAbility"("subjectId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_nmcCompetencyId_fkey" FOREIGN KEY ("nmcCompetencyId") REFERENCES "NmcCompetency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NmcCompetency" ADD CONSTRAINT "NmcCompetency_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NmcCompetency" ADD CONSTRAINT "NmcCompetency_aetcomModuleId_fkey" FOREIGN KEY ("aetcomModuleId") REFERENCES "AetcomModule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonRevision" ADD CONSTRAINT "LessonRevision_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoResource" ADD CONSTRAINT "VideoResource_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisualResource" ADD CONSTRAINT "VisualResource_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_competencyId_fkey" FOREIGN KEY ("competencyId") REFERENCES "NmcCompetency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizQuestion" ADD CONSTRAINT "QuizQuestion_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizQuestion" ADD CONSTRAINT "QuizQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseStage" ADD CONSTRAINT "CaseStage_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "ClinicalCase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseAttempt" ADD CONSTRAINT "CaseAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseAttempt" ADD CONSTRAINT "CaseAttempt_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "ClinicalCase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyPlan" ADD CONSTRAINT "StudyPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyPlanDay" ADD CONSTRAINT "StudyPlanDay_planId_fkey" FOREIGN KEY ("planId") REFERENCES "StudyPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStreak" ADD CONSTRAINT "UserStreak_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectAbility" ADD CONSTRAINT "SubjectAbility_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectAbility" ADD CONSTRAINT "SubjectAbility_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
