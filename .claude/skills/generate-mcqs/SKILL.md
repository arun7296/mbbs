---
name: generate-mcqs
description: >
  Generate NEXT-pattern MCQs for a given topic or subject. Creates questions with clinical
  vignettes, explanations for all options, difficulty tagging, Bloom's taxonomy levels,
  and textbook references. Outputs as JSON ready for database insertion.
  Examples: /generate-mcqs "Brachial Plexus" 20, /generate-mcqs AN-MOD-01 50,
  /generate-mcqs "Pharmacology - Antihypertensives" 30
---

# Generate NEXT-Pattern MCQs

## Task
Create high-quality MCQs aligned with NEXT/NEET PG exam patterns.

## Arguments
- `$1` = Topic name, topic code, or subject area
- `$2` = Number of questions (default: 20)

## Instructions

1. **Invoke the `assessment-engine-architect` agent** with this prompt:
   > Create $2 NEXT-pattern MCQs for "$1" following these requirements:
   > - Bloom's distribution: 60% ProblemSolving, 30% Analysis, 10% Recall
   > - Difficulty distribution: 25% EASY, 40% MEDIUM, 25% HARD, 10% EXPERT
   > - Each question must have 4 options with exactly 1 correct answer
   > - Include clinical vignettes for ProblemSolving questions
   > - Every option must have an explanation (why correct/incorrect)
   > - Tag with: subject, topic, competency, difficulty, bloomsLevel, examTags
   > - Include textbook references from standard Indian MBBS books

2. **Output format** - Write to `prisma/seeds/questions-{topic-slug}.json`:
```json
[
  {
    "type": "MCQ_SINGLE",
    "stem": "...",
    "clinicalVignette": "...",
    "options": [
      {"id": "a", "text": "...", "isCorrect": false, "explanation": "..."},
      {"id": "b", "text": "...", "isCorrect": true, "explanation": "..."},
      {"id": "c", "text": "...", "isCorrect": false, "explanation": "..."},
      {"id": "d", "text": "...", "isCorrect": false, "explanation": "..."}
    ],
    "explanation": "Detailed teaching explanation...",
    "difficulty": "MEDIUM",
    "bloomsLevel": "ProblemSolving",
    "examTags": ["NEXT_STEP1", "NEET_PG"],
    "textbookRefs": [{"book": "...", "chapter": "...", "edition": "..."}],
    "subjectCode": "AN",
    "topicCode": "AN-MOD-01-TOP-05"
  }
]
```

3. **Validate** each question:
   - Exactly one correct option per MCQ_SINGLE
   - No duplicate stems
   - All explanations present
   - Valid difficulty and bloomsLevel values
   - Medically accurate content

4. **Create a seed script** to load these questions into the database.

5. **Report**: Print summary of questions created by difficulty, Bloom's level, and exam tag distribution.
