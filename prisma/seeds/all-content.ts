// Aggregated content loader - imports all lessons, MCQs, and clinical cases
import type { TopicLessons } from "./content-loader";

// ============================================================================
// LESSONS IMPORTS - All lessons-*.ts files
// ============================================================================

// Anatomy lessons
import { abdomenLessons } from "./lessons-anatomy-abdomen";
import { embryologyLessons } from "./lessons-anatomy-embryology";
import { generalAnatomyLessons } from "./lessons-anatomy-general";
import { headNeckLessons } from "./lessons-anatomy-head-neck";
import { histologyLessons } from "./lessons-anatomy-histology";
import { lowerLimbLessons } from "./lessons-anatomy-lower-limb";
import { neuroLessons } from "./lessons-anatomy-neuro";
import { pelvisLessons } from "./lessons-anatomy-pelvis";
import { anatomyRemainingLessons } from "./lessons-anatomy-remaining";
import { thoraxLessons } from "./lessons-anatomy-thorax";
import { upperLimbRemainingLessons } from "./lessons-anatomy-upper-limb-remaining";
import { upperLimbLessons } from "./lessons-anatomy-upper-limb";

// Anesthesiology lessons
import { anesthesiologyLessons } from "./lessons-anesthesiology";
import { anesthesiologyPart2Lessons } from "./lessons-anesthesiology-part2";
import { anesthesiologyPart3Lessons } from "./lessons-anesthesiology-part3";
import { anesthesiologyPart4Lessons } from "./lessons-anesthesiology-part4";
import { anesthesiologyPart5Lessons } from "./lessons-anesthesiology-part5";
import { anesthesiologyLessonsPart8 } from "./lessons-anesthesiology-part8";
import { anesthesiologyLessonsPart9 } from "./lessons-anesthesiology-part9";

// Batch lessons
import { newBatch5Lessons2 } from "./lessons-batch5-cont";
import { newBatch5Lessons3 } from "./lessons-batch5-final";
import { finalTopics6 } from "./lessons-batch6-final6";
import { batch6Remaining } from "./lessons-batch6-part2";
import { remainingTopics9 } from "./lessons-batch6-remaining";

// Biochemistry lessons
import { biochemistryPart1Lessons } from "./lessons-biochemistry-part1";
import { biochemistryPart2Lessons } from "./lessons-biochemistry-part2";

// Community Medicine lessons
import { communityMedicineLessonsPartOne } from "./lessons-community-medicine-part1";
import { communityMedicineLessonsPartX } from "./lessons-community-medicine-part10";
import { communityMedicineLessonsPartXI } from "./lessons-community-medicine-part11";
import { communityMedicineLessonsPartXIB } from "./lessons-community-medicine-part11b";
import { communityMedicineLessonsPartXII } from "./lessons-community-medicine-part12";
import { communityMedicineLessonsPartXIIB } from "./lessons-community-medicine-part12b";
import { communityMedicineLessonsPartXIII } from "./lessons-community-medicine-part13";
import { communityMedicineLessonsPartXIV } from "./lessons-community-medicine-part14-15";
import { cmLessonsPart15 } from "./lessons-community-medicine-part15";
import { communityMedicinePart2Lessons } from "./lessons-community-medicine-part2";
import { communityMedicinePart3Lessons } from "./lessons-community-medicine-part3";
import { communityMedicinePart4Lessons } from "./lessons-community-medicine-part4";
import { communityMedicinePart5Lessons } from "./lessons-community-medicine-part5";
import { communityMedicinePart8Lessons } from "./lessons-community-medicine-part8";
import { communityMedicinePart9Lessons } from "./lessons-community-medicine-part9";

// Dermatology lessons
import { dermatologyLessons } from "./lessons-dermatology";
import { dermatologyPart2Lessons } from "./lessons-dermatology-part2";
import { dermatologyPart3Lessons } from "./lessons-dermatology-part3";
import { dermatologyPart4Lessons } from "./lessons-dermatology-part4";
import { dermatologyPart5Lessons } from "./lessons-dermatology-part5";
import { dermatologyLessonsPartSix } from "./lessons-dermatology-part6";
import { dermatologyLessonsPartSeven } from "./lessons-dermatology-part7";

// ENT lessons
import { entLessons } from "./lessons-ent";
import { entPart2Lessons } from "./lessons-ent-part2";
import { entPart3Lessons } from "./lessons-ent-part3";

// Final batch lessons
import { finalBatch1Lessons } from "./lessons-final-batch-1";
import { finalBatch2Lessons } from "./lessons-final-batch-2";
import { finalBatch3Lessons } from "./lessons-final-batch-3";
import { finalBatch4Lessons } from "./lessons-final-batch-4";

// Forensic Medicine lessons
import { forensicMedicineLessons } from "./lessons-forensic-medicine";
import { forensicMedicinePart2Lessons } from "./lessons-forensic-medicine-part2";
import { forensicMedicinePart3Lessons } from "./lessons-forensic-medicine-part3";
import { forensicMedicinePart4Lessons } from "./lessons-forensic-medicine-part4";
import { forensicMedicinePart7Lessons } from "./lessons-forensic-medicine-part7";
import { forensicMedicinePart8Lessons } from "./lessons-forensic-medicine-part8";
import { forensicMedicineLessonsPartXX } from "./lessons-forensic-medicine-part9";
import { forensicMedicineLessonsPartXXI } from "./lessons-forensic-medicine-part10";
import { forensicMedicineLessonsPartXXII } from "./lessons-forensic-medicine-part11";
import { forensicMedicineLessonsPartXXIII } from "./lessons-forensic-medicine-part12-13";
import { fmLessonsPart13 } from "./lessons-forensic-medicine-part13";

// Immunology lessons
import { immunologyPart1Lessons } from "./lessons-immunology-part1";

// Medicine lessons
import { medicinePart1Lessons } from "./lessons-medicine-part1";
import { medicinePart2Lessons } from "./lessons-medicine-part2";
import { medicinePart3Lessons } from "./lessons-medicine-part3";
import { medicinePart4Lessons } from "./lessons-medicine-part4";
import { medicinePart5Lessons } from "./lessons-medicine-part5";
import { medicinePart6Lessons } from "./lessons-medicine-part6";
import { medicinePart7Lessons } from "./lessons-medicine-part7";
import { medicinePart8Lessons } from "./lessons-medicine-part8";
import { medicinePart10Lessons } from "./lessons-medicine-part10";
import { medicinePart11Lessons } from "./lessons-medicine-part11";
import { medicineLessonsPart13 } from "./lessons-medicine-part13";
import { medicineLessonsPart14 } from "./lessons-medicine-part14";
import { medicineLessonsPart15 } from "./lessons-medicine-part15";
import { medicineLessonsPart16 } from "./lessons-medicine-part16";
import { medicineLessonsPart17 } from "./lessons-medicine-part17";
import { medicineLessonsPart18 } from "./lessons-medicine-part18";
import { medicineLessonsPart19 } from "./lessons-medicine-part19";
import { medicineGapLessons } from "./lessons-medicine-gap";
import { medicineGapLessonsPart2 } from "./lessons-medicine-gap-part2";
import { medicineGapInfectiousLessons } from "./lessons-medicine-gap-infectious";
import { medicineGapToxicologyLessons } from "./lessons-medicine-gap-toxicology";
import { medicineGapCriticalLessons } from "./lessons-medicine-gap-critical";

// Microbiology lessons
import { microbiologyBacteriologyLessons } from "./lessons-microbiology-bacteriology";
import { microbiologyMycologyLessons } from "./lessons-microbiology-mycology";
import { microbiologyParasitologyLessons } from "./lessons-microbiology-parasitology";
import { microbiologyPart1Lessons } from "./lessons-microbiology-part1";
import { microbiologyPart1LessonsContinued } from "./lessons-microbiology-part1-continued";
import { microbiologyLessonsPart16 } from "./lessons-microbiology-part16";
import { microbiologyImmunologyLessons } from "./lessons-microbiology-immunology";
import { microbiologyImmunologyLessonsPart2 } from "./lessons-microbiology-immunology-part2";
import { microbiologyImmunologyLessonsPart3 } from "./lessons-microbiology-immunology-part3";
import { microbiologyVirologyLessons } from "./lessons-microbiology-virology";
import { microbiologyVirologyLessons2 } from "./lessons-microbiology-virology-2";
import { microbiologyVirologyLessons3 } from "./lessons-microbiology-virology-3";
import { microbiologyVirologyLessons4 } from "./lessons-microbiology-virology-4";
import { microbiologyVirologyLessons5 } from "./lessons-microbiology-virology-5";

// New batch lessons
import { newBatch1Lessons } from "./lessons-new-batch1";
import { newBatch2Lessons } from "./lessons-new-batch2";
import { newBatch3Lessons } from "./lessons-new-batch3";
import { newBatch4Lessons } from "./lessons-new-batch4";
import { newBatch5Lessons } from "./lessons-new-batch5";
import { newBatch6Lessons } from "./lessons-new-batch6";
import { newBatch7Lessons } from "./lessons-new-batch7";
import { newBatch8Lessons } from "./lessons-new-batch8";

// Obstetrics & Gynecology lessons
import { obgPart1Lessons } from "./lessons-obg-part1";
import { obgPart2Lessons } from "./lessons-obg-part2";
import { obgPart3Lessons } from "./lessons-obg-part3";
import { obgPart4Lessons } from "./lessons-obg-part4";
import { obgPart5Lessons } from "./lessons-obg-part5";
import { obgPart6Lessons } from "./lessons-obg-part6";
import { obgPart7Lessons } from "./lessons-obg-part7";
import { obgPart8Lessons } from "./lessons-obg-part8";
import { obgLessonsPartNine } from "./lessons-obg-part9";
import { obgLessonsPartTen } from "./lessons-obg-part10";
import { obgLessonsPartTenContinued } from "./lessons-obg-part10-continued";
import { obgLessonsPartEleven } from "./lessons-obg-part11";
import { obgLessonsPartElevenContinued } from "./lessons-obg-part11-continued";
import { obgLessonsPartTwelve } from "./lessons-obg-part12";
import { obgLessonsPart14 } from "./lessons-obg-part14";
import { obgLessonsPart15 } from "./lessons-obg-part15";

// Ophthalmology lessons
import { ophthalmologyLessons } from "./lessons-ophthalmology";
import { ophthalmologyPart2Lessons } from "./lessons-ophthalmology-part2";
import { ophthalmologyPart3Lessons } from "./lessons-ophthalmology-part3";
import { ophthalmologyPart4Lessons } from "./lessons-ophthalmology-part4";
import { ophthalmologyPart5Lessons } from "./lessons-ophthalmology-part5";
import { ophthalmologyPart6Lessons } from "./lessons-ophthalmology-part6";
import { ophthalmologyPart7Lessons } from "./lessons-ophthalmology-part7";
import { ophthalmologyPart8Lessons } from "./lessons-ophthalmology-part8";
import { ophthalmologyPart9Lessons } from "./lessons-ophthalmology-part9";

// Orthopedics lessons
import { orthopedicsLessons } from "./lessons-orthopedics-part1";
import { orthopedicsPart2Lessons } from "./lessons-orthopedics-part2";
import { orthopedicsPart3Lessons } from "./lessons-orthopedics-part3";
import { orthopedicsPart4Lessons } from "./lessons-orthopedics-part4";
import { orthopedicspart5Lessons } from "./lessons-orthopedics-part5";
import { orthopedicsPart6Lessons } from "./lessons-orthopedics-part6";
import { orthopedicsPart7Lessons } from "./lessons-orthopedics-part7";
import { orthopedicsLessonsPartEight } from "./lessons-orthopedics-part8";
import { orthopedicsLessonsPart9 } from "./lessons-orthopedics-part9";
import { orthopedicsLessonsPart10 } from "./lessons-orthopedics-part10";
import { orthopedicsLessonsPart11 } from "./lessons-orthopedics-part11";
import { orthopedicsLessonsPart12 } from "./lessons-orthopedics-part12";
import { orthopedicsLessonsPart13 } from "./lessons-orthopedics-part13";

// Pathology lessons
import { pathologyPart1Lessons } from "./lessons-pathology-part1";
import { pathologyPart2Lessons } from "./lessons-pathology-part2";
import { pathologyPart3Lessons } from "./lessons-pathology-part3";
import { pathologyPart4Lessons } from "./lessons-pathology-part4";
import { pathologyPart5Lessons } from "./lessons-pathology-part5";

// Pediatrics lessons
import { pediatricsPart1Lessons } from "./lessons-pediatrics-part1";
import { pediatricsPart2Lessons } from "./lessons-pediatrics-part2";
import { pediatricsPart3Lessons } from "./lessons-pediatrics-part3";
import { pediatricsPart4Lessons } from "./lessons-pediatrics-part4";
import { pediatricsPart5Lessons } from "./lessons-pediatrics-part5";
import { pediatricsPart6Lessons } from "./lessons-pediatrics-part6";
import { pediatricsPart7Lessons } from "./lessons-pediatrics-part7";
import { pediatricsPart8Lessons } from "./lessons-pediatrics-part8";
import { pediatricsPart9Lessons } from "./lessons-pediatrics-part9";
import { pediatricsLessonsPartTen } from "./lessons-pediatrics-part10";
import { pediatricsLessonsPart15 } from "./lessons-pediatrics-part15";
import { pediatricsLessonsPart16 } from "./lessons-pediatrics-part16";
import { pediatricsLessonsPart18 } from "./lessons-pediatrics-part18";
import { pediatricsLessonsPart19 } from "./lessons-pediatrics-part19";
import { pediatricsLessonsPart19b } from "./lessons-pediatrics-part19b";
import { pediatricsLessonsPartEleven } from "./lessons-pediatrics-part11";
import { pediatricsLessonsPartTwelve } from "./lessons-pediatrics-part12";
import { pediatricsLessonsPartThirteen } from "./lessons-pediatrics-part13";
import { pediatricsLessonsPartFourteen } from "./lessons-pediatrics-part14";
import { pediatricsGapLessons } from "./lessons-pediatrics-gap";

// Pharmacology lessons
import { pharmacologyPart1Lessons } from "./lessons-pharmacology-part1";
import { pharmacologyPart2Lessons } from "./lessons-pharmacology-part2";
import { pharmacologyPart3Lessons } from "./lessons-pharmacology-part3";
import { pharmacologyPart4Lessons } from "./lessons-pharmacology-part4";

// Physiology lessons
import { physiologyLessons } from "./lessons-physiology";
import { physiologyPart2Lessons } from "./lessons-physiology-part2";
import { physiologyPart3Lessons } from "./lessons-physiology-part3";
import { physiologyCvsPart1Lessons } from "./lessons-physiology-cvs-part1";
import { physiologyCvsPart2Lessons } from "./lessons-physiology-cvs-part2";
import { physiologyGeneralHematologyLessons } from "./lessons-physiology-general-hematology";
import { physiologyGapLessons } from "./lessons-physiology-gap";
import { physiologyReproductiveLessons } from "./lessons-physiology-reproductive";

// Psychiatry lessons
import { psychiatryLessons } from "./lessons-psychiatry";
import { psychiatryPart2Lessons } from "./lessons-psychiatry-part2";
import { psychiatryPart3Lessons } from "./lessons-psychiatry-part3";
import { psychiatryPart4Lessons } from "./lessons-psychiatry-part4";
import { psychiatryPart5Lessons } from "./lessons-psychiatry-part5";
import { psychiatryPart6Lessons } from "./lessons-psychiatry-part6";
import { psychiatryLessonsPart7 } from "./lessons-psychiatry-part7";
import { psychiatryLessonsPart8 } from "./lessons-psychiatry-part8";

// Radiology lessons
import { radiologyLessons } from "./lessons-radiology";
import { radiologyPart2Lessons } from "./lessons-radiology-part2";
import { radiologyPart3Lessons } from "./lessons-radiology-part3";
import { radiologyPart4Lessons } from "./lessons-radiology-part4";
import { radiologyPart5Lessons } from "./lessons-radiology-part5";
import { radiologyLessonsPart8 } from "./lessons-radiology-part8";
import { radiologyLessonsPart9 } from "./lessons-radiology-part9";

// Regen batch lessons
import { regenBatch1Lessons } from "./lessons-regen-batch1";
import { regenBatch2Lessons } from "./lessons-regen-batch2";
import { regenBatch2LessonsPart1 } from "./lessons-regen-batch2-part1";
import { regenBatch2LessonsPart2 } from "./lessons-regen-batch2-part2";
import { regenBatch2LessonsPart3 } from "./lessons-regen-batch2-part3";
import { regenBatch2LessonsPart4 } from "./lessons-regen-batch2-part4";
import { regenBatch2LessonsPart5 } from "./lessons-regen-batch2-part5";
import { regenBatch2LessonsPart6 } from "./lessons-regen-batch2-part6";
import { regenBatch3Lessons } from "./lessons-regen-batch3";
import { regenBatch4Lessons } from "./lessons-regen-batch4";
import { regenBatch5Lessons } from "./lessons-regen-batch5";
import { regenBatch6Lessons } from "./lessons-regen-batch6";
import { regenBatch7Lessons } from "./lessons-regen-batch7";
import { regenBatch8Lessons } from "./lessons-regen-batch8";
import { regenBatch8LessonsContinued } from "./lessons-regen-batch8-continued";
import { regenBatch8LessonsFinal } from "./lessons-regen-batch8-final";
import { regenBatch8AppendixLessons } from "./lessons-regen-batch8-appendix";
import { regenBatch9Lessons } from "./lessons-regen-batch9";

// Surgery lessons
import { surgeryPart1Lessons } from "./lessons-surgery-part1";
import { surgeryPart2Lessons } from "./lessons-surgery-part2";
import { surgeryPart3Lessons } from "./lessons-surgery-part3";
import { surgeryPart4Lessons } from "./lessons-surgery-part4";
import { surgeryPart5Lessons } from "./lessons-surgery-part5";
import { surgeryPart6Lessons } from "./lessons-surgery-part6";
import { surgeryPart7Lessons } from "./lessons-surgery-part7";
import { surgeryPart8Lessons } from "./lessons-surgery-part8";
import { surgeryPart9Lessons } from "./lessons-surgery-part9";
import { surgeryPart10Lessons } from "./lessons-surgery-part10";
import { surgeryPart11Lessons } from "./lessons-surgery-part11";
import { surgeryLessonsPart14 } from "./lessons-surgery-part14";
import { surgeryLessonsPartXXI } from "./lessons-surgery-part13";

// Remaining lessons
import { lessonsRemainingCondensed } from "./lessons-remaining-condensed";

// Missing content batches
import { missingBatch1Lessons } from "./lessons-missing-batch1";
import { missingBatch2Lessons } from "./lessons-missing-batch2";

// ============================================================================
// MCQ IMPORTS - All mcqs-*.ts files
// ============================================================================

import { anatomyFullMcqs } from "./mcqs-anatomy-full";
import { anatomyMcqs2 } from "./mcqs-anatomy-full2";
import { anesthesiologyMcqs } from "./mcqs-anesthesiology-full";
import { biochemistryFullMcqs } from "./mcqs-biochemistry-full";
import { biochemistryMcqs2 } from "./mcqs-biochemistry-full2";
import { communityMedicineFullMcqs } from "./mcqs-community-medicine-full";
import { cmMcqs2 } from "./mcqs-community-medicine-full2";
import { crossSubjectMcqs1 } from "./mcqs-cross-subject-1";
import { crossSubjectMcqs2 } from "./mcqs-cross-subject-2";
import { crossSubjectMcqs3 } from "./mcqs-cross-subject-3";
import { dermatologyFullMcqs } from "./mcqs-dermatology-full";
import { dermatologyMcqs2 } from "./mcqs-dermatology-full2";
import { entFullMcqs } from "./mcqs-ent-full";
import { entOphthMcqs2 } from "./mcqs-ent-ophthalmology-full2";
import { forensicMedicineFullMcqs } from "./mcqs-forensic-medicine-full";
import { fmMcqs2 } from "./mcqs-forensic-medicine-full2";
import { medicineFullMcqs } from "./mcqs-medicine-full";
import { medicineMcqs2 } from "./mcqs-medicine-full2";
import { microbiologyFullMcqs } from "./mcqs-microbiology-full";
import { microMcqs2 } from "./mcqs-microbiology-full2";
import { obgFullMcqs } from "./mcqs-obg-full";
import { obgMcqs2 } from "./mcqs-obg-full2";
import { ophthalmologyFullMcqs } from "./mcqs-ophthalmology-full";
import { orthopedicsFullMcqs } from "./mcqs-orthopedics-full";
import { orthopedicsMcqs2 } from "./mcqs-orthopedics-full2";
import { pathologyFullMcqs } from "./mcqs-pathology-full";
import { pathologyMcqs2 } from "./mcqs-pathology-full2";
import { pathologyMcqs } from "./mcqs-pathology";
import { pediatricsFullMcqs } from "./mcqs-pediatrics-full";
import { pediatricsMcqs2 } from "./mcqs-pediatrics-full2";
import { pharmacologyFullMcqs } from "./mcqs-pharmacology-full";
import { pharmacologyMcqs2 } from "./mcqs-pharmacology-full2";
import { physiologyFullMcqs } from "./mcqs-physiology-full";
import { physiologyMcqs2 } from "./mcqs-physiology-full2";
import { physiologyMcqs } from "./mcqs-physiology";
import { psychiatryMcqs } from "./mcqs-psychiatry-full";
import { radiologyMcqs } from "./mcqs-radiology-full";
import { surgeryFullMcqs } from "./mcqs-surgery-full";
import { surgeryMcqs2 } from "./mcqs-surgery-full2";

// ============================================================================
// CLINICAL CASE IMPORTS - All clinical-case*.ts files
// ============================================================================

import { clinicalCases } from "./clinical-cases";
import { clinicalCasesEntOphth } from "./clinical-cases-ent-ophth";
import { clinicalCasesFmCmAnesthesiaIndia } from "./clinical-cases-fm-cm-anesthesia-india";
import { clinicalCasesFull } from "./clinical-cases-full";
import { clinicalCasesIndiaTropical } from "./clinical-cases-india-tropical";
import { clinicalCasesIndiaTropical2 } from "./clinical-cases-india-tropical2";
import { clinicalCasesMedicineEmergency } from "./clinical-cases-medicine-emergency";
import { clinicalCasesOrthoDermPsych } from "./clinical-cases-ortho-derm-psych";
import { clinicalCasesPart2 } from "./clinical-cases-part2";
import { clinicalCasesPart3 } from "./clinical-cases-part3";
import { clinicalCasesPart3Continued } from "./clinical-cases-part3-continued";
import { clinicalCasesSurgeryObgPeds } from "./clinical-cases-surgery-obg-peds";
import { medicineCases } from "./clinical-case-medicine";

// ============================================================================
// AGGREGATE EXPORTS
// ============================================================================

export const allLessons: TopicLessons[] = [
  // Anatomy
  ...abdomenLessons,
  ...embryologyLessons,
  ...generalAnatomyLessons,
  ...headNeckLessons,
  ...histologyLessons,
  ...lowerLimbLessons,
  ...neuroLessons,
  ...pelvisLessons,
  ...anatomyRemainingLessons,
  ...thoraxLessons,
  ...upperLimbRemainingLessons,
  ...upperLimbLessons,

  // Anesthesiology
  ...anesthesiologyLessons,
  ...anesthesiologyPart2Lessons,
  ...anesthesiologyPart3Lessons,
  ...anesthesiologyPart4Lessons,
  ...anesthesiologyPart5Lessons,
  ...anesthesiologyLessonsPart8,
  ...anesthesiologyLessonsPart9,

  // Batch lessons
  ...newBatch5Lessons2,
  ...newBatch5Lessons3,
  ...finalTopics6,
  ...batch6Remaining,
  ...remainingTopics9,

  // Biochemistry
  ...biochemistryPart1Lessons,
  ...biochemistryPart2Lessons,

  // Community Medicine
  ...communityMedicineLessonsPartOne,
  ...communityMedicineLessonsPartX,
  ...communityMedicineLessonsPartXI,
  ...communityMedicineLessonsPartXIB,
  ...communityMedicineLessonsPartXII,
  ...communityMedicineLessonsPartXIIB,
  ...communityMedicineLessonsPartXIII,
  ...communityMedicineLessonsPartXIV,
  ...cmLessonsPart15,
  ...communityMedicinePart2Lessons,
  ...communityMedicinePart3Lessons,
  ...communityMedicinePart4Lessons,
  ...communityMedicinePart5Lessons,
  ...communityMedicinePart8Lessons,
  ...communityMedicinePart9Lessons,

  // Dermatology
  ...dermatologyLessons,
  ...dermatologyPart2Lessons,
  ...dermatologyPart3Lessons,
  ...dermatologyPart4Lessons,
  ...dermatologyPart5Lessons,
  ...dermatologyLessonsPartSix,
  ...dermatologyLessonsPartSeven,

  // ENT
  ...entLessons,
  ...entPart2Lessons,
  ...entPart3Lessons,

  // Final batch
  ...finalBatch1Lessons,
  ...finalBatch2Lessons,
  ...finalBatch3Lessons,
  ...finalBatch4Lessons,

  // Forensic Medicine
  ...forensicMedicineLessons,
  ...forensicMedicinePart2Lessons,
  ...forensicMedicinePart3Lessons,
  ...forensicMedicinePart4Lessons,
  ...forensicMedicinePart7Lessons,
  ...forensicMedicinePart8Lessons,
  ...forensicMedicineLessonsPartXX,
  ...forensicMedicineLessonsPartXXI,
  ...forensicMedicineLessonsPartXXII,
  ...forensicMedicineLessonsPartXXIII,
  ...fmLessonsPart13,

  // Immunology
  ...immunologyPart1Lessons,

  // Medicine
  ...medicinePart1Lessons,
  ...medicinePart2Lessons,
  ...medicinePart3Lessons,
  ...medicinePart4Lessons,
  ...medicinePart5Lessons,
  ...medicinePart6Lessons,
  ...medicinePart7Lessons,
  ...medicinePart8Lessons,
  ...medicinePart10Lessons,
  medicinePart11Lessons,
  ...medicineLessonsPart13,
  ...medicineLessonsPart14,
  ...medicineLessonsPart15,
  ...medicineLessonsPart16,
  ...medicineLessonsPart17,
  ...medicineLessonsPart18,
  ...medicineLessonsPart19,
  ...medicineGapLessons,
  ...medicineGapLessonsPart2,
  ...medicineGapInfectiousLessons,
  ...medicineGapToxicologyLessons,
  ...medicineGapCriticalLessons,

  // Microbiology
  ...microbiologyBacteriologyLessons,
  ...microbiologyMycologyLessons,
  ...microbiologyParasitologyLessons,
  ...microbiologyPart1Lessons,
  ...microbiologyPart1LessonsContinued,
  ...microbiologyLessonsPart16,
  ...microbiologyImmunologyLessons,
  ...microbiologyImmunologyLessonsPart2,
  ...microbiologyImmunologyLessonsPart3,
  ...microbiologyVirologyLessons,
  ...microbiologyVirologyLessons2,
  ...microbiologyVirologyLessons3,
  ...microbiologyVirologyLessons4,
  ...microbiologyVirologyLessons5,

  // New batch
  ...newBatch1Lessons,
  ...newBatch2Lessons,
  ...newBatch3Lessons,
  ...newBatch4Lessons,
  ...newBatch5Lessons,
  ...newBatch6Lessons,
  ...newBatch7Lessons,
  ...newBatch8Lessons,

  // Obstetrics & Gynecology
  ...obgPart1Lessons,
  ...obgPart2Lessons,
  ...obgPart3Lessons,
  ...obgPart4Lessons,
  ...obgPart5Lessons,
  ...obgPart6Lessons,
  ...obgPart7Lessons,
  ...obgPart8Lessons,
  ...obgLessonsPartNine,
  ...obgLessonsPartTen,
  ...obgLessonsPartTenContinued,
  ...obgLessonsPartEleven,
  ...obgLessonsPartElevenContinued,
  ...obgLessonsPartTwelve,
  ...obgLessonsPart14,
  ...obgLessonsPart15,

  // Ophthalmology
  ...ophthalmologyLessons,
  ...ophthalmologyPart2Lessons,
  ...ophthalmologyPart3Lessons,
  ...ophthalmologyPart4Lessons,
  ...ophthalmologyPart5Lessons,
  ...ophthalmologyPart6Lessons,
  ...ophthalmologyPart7Lessons,
  ...ophthalmologyPart8Lessons,
  ...ophthalmologyPart9Lessons,

  // Orthopedics
  ...orthopedicsLessons,
  ...orthopedicsPart2Lessons,
  ...orthopedicsPart3Lessons,
  ...orthopedicsPart4Lessons,
  ...orthopedicspart5Lessons,
  ...orthopedicsPart6Lessons,
  ...orthopedicsPart7Lessons,
  ...orthopedicsLessonsPartEight,
  ...orthopedicsLessonsPart9,
  ...orthopedicsLessonsPart10,
  ...orthopedicsLessonsPart11,
  ...orthopedicsLessonsPart12,
  ...orthopedicsLessonsPart13,

  // Pathology
  ...pathologyPart1Lessons,
  ...pathologyPart2Lessons,
  ...pathologyPart3Lessons,
  ...pathologyPart4Lessons,
  ...pathologyPart5Lessons,

  // Pediatrics
  ...pediatricsPart1Lessons,
  ...pediatricsPart2Lessons,
  ...pediatricsPart3Lessons,
  ...pediatricsPart4Lessons,
  ...pediatricsPart5Lessons,
  ...pediatricsPart6Lessons,
  ...pediatricsPart7Lessons,
  ...pediatricsPart8Lessons,
  ...pediatricsPart9Lessons,
  ...pediatricsLessonsPartTen,
  ...pediatricsLessonsPart15,
  ...pediatricsLessonsPart16,
  ...pediatricsLessonsPart18,
  ...pediatricsLessonsPart19,
  ...pediatricsLessonsPart19b,
  ...pediatricsLessonsPartEleven,
  ...pediatricsLessonsPartTwelve,
  ...pediatricsLessonsPartThirteen,
  ...pediatricsLessonsPartFourteen,
  ...pediatricsGapLessons,

  // Pharmacology
  ...pharmacologyPart1Lessons,
  ...pharmacologyPart2Lessons,
  ...pharmacologyPart3Lessons,
  ...pharmacologyPart4Lessons,

  // Physiology
  ...physiologyLessons,
  ...physiologyPart2Lessons,
  ...physiologyPart3Lessons,
  ...physiologyCvsPart1Lessons,
  ...physiologyCvsPart2Lessons,
  ...physiologyGeneralHematologyLessons,
  ...physiologyGapLessons,
  ...physiologyReproductiveLessons,

  // Psychiatry
  ...psychiatryLessons,
  ...psychiatryPart2Lessons,
  ...psychiatryPart3Lessons,
  ...psychiatryPart4Lessons,
  ...psychiatryPart5Lessons,
  ...psychiatryPart6Lessons,
  ...psychiatryLessonsPart7,
  ...psychiatryLessonsPart8,

  // Radiology
  ...radiologyLessons,
  ...radiologyPart2Lessons,
  ...radiologyPart3Lessons,
  ...radiologyPart4Lessons,
  ...radiologyPart5Lessons,
  ...radiologyLessonsPart8,
  ...radiologyLessonsPart9,

  // Regen batch
  ...regenBatch1Lessons,
  ...regenBatch2Lessons,
  ...regenBatch2LessonsPart1,
  ...regenBatch2LessonsPart2,
  ...regenBatch2LessonsPart3,
  ...regenBatch2LessonsPart4,
  ...regenBatch2LessonsPart5,
  ...regenBatch2LessonsPart6,
  ...regenBatch3Lessons,
  ...regenBatch4Lessons,
  ...regenBatch5Lessons,
  ...regenBatch6Lessons,
  ...regenBatch7Lessons,
  ...regenBatch8Lessons,
  ...regenBatch8LessonsContinued,
  ...regenBatch8LessonsFinal,
  ...regenBatch8AppendixLessons,
  ...regenBatch9Lessons,

  // Surgery
  ...surgeryPart1Lessons,
  ...surgeryPart2Lessons,
  ...surgeryPart3Lessons,
  ...surgeryPart4Lessons,
  ...surgeryPart5Lessons,
  ...surgeryPart6Lessons,
  ...surgeryPart7Lessons,
  ...surgeryPart8Lessons,
  ...surgeryPart9Lessons,
  ...surgeryPart10Lessons,
  ...surgeryPart11Lessons,
  ...surgeryLessonsPart14,
  ...surgeryLessonsPartXXI,

  // Remaining
  ...lessonsRemainingCondensed,

  // Missing content batches (filling gaps)
  ...missingBatch1Lessons,
  ...missingBatch2Lessons,
];

export const allMcqs = [
  ...anatomyFullMcqs,
  ...anatomyMcqs2,
  ...anesthesiologyMcqs,
  ...biochemistryFullMcqs,
  ...biochemistryMcqs2,
  ...communityMedicineFullMcqs,
  ...cmMcqs2,
  ...crossSubjectMcqs1,
  ...crossSubjectMcqs2,
  ...crossSubjectMcqs3,
  ...dermatologyFullMcqs,
  ...dermatologyMcqs2,
  ...entFullMcqs,
  ...entOphthMcqs2,
  ...forensicMedicineFullMcqs,
  ...fmMcqs2,
  ...medicineFullMcqs,
  ...medicineMcqs2,
  ...microbiologyFullMcqs,
  ...microMcqs2,
  ...obgFullMcqs,
  ...obgMcqs2,
  ...ophthalmologyFullMcqs,
  ...orthopedicsFullMcqs,
  ...orthopedicsMcqs2,
  ...pathologyFullMcqs,
  ...pathologyMcqs2,
  ...pathologyMcqs,
  ...pediatricsFullMcqs,
  ...pediatricsMcqs2,
  ...pharmacologyFullMcqs,
  ...pharmacologyMcqs2,
  ...physiologyFullMcqs,
  ...physiologyMcqs2,
  ...physiologyMcqs,
  ...psychiatryMcqs,
  ...radiologyMcqs,
  ...surgeryFullMcqs,
  ...surgeryMcqs2,
];

export const allClinicalCases = [
  ...clinicalCases,
  ...clinicalCasesEntOphth,
  ...clinicalCasesFmCmAnesthesiaIndia,
  ...clinicalCasesFull,
  ...clinicalCasesIndiaTropical,
  ...clinicalCasesIndiaTropical2,
  ...clinicalCasesMedicineEmergency,
  ...clinicalCasesOrthoDermPsych,
  ...clinicalCasesPart2,
  ...clinicalCasesPart3,
  ...clinicalCasesPart3Continued,
  ...clinicalCasesSurgeryObgPeds,
  ...medicineCases,
];
