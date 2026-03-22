---
name: validate-content
description: >
  Validate medical content quality, completeness, and accuracy across the MBBS platform.
  Checks that all published lessons have all 5 layers, all topics have MCQs, clinical
  cases are medically accurate, NMC competency mapping is complete, and content formatting
  is correct. Use for content audits and pre-deployment validation.
  Examples: /validate-content AN (validate Anatomy), /validate-content lessons,
  /validate-content questions, /validate-content all
---

# Validate Medical Content

## Task
Run comprehensive validation checks on the platform's medical content.

## Arguments
- `$ARGUMENTS` = Scope: subject code (e.g., "AN"), content type ("lessons", "questions", "cases"), or "all"

## Validation Checks

### 1. Curriculum Completeness
- [ ] All NMC-prescribed subjects exist in database
- [ ] Every subject has modules with proper codes
- [ ] Every module has topics with proper codes
- [ ] NMC competency codes are mapped to topics
- [ ] No orphaned topics (topics without modules)
- [ ] Hour allocations match NMC guidelines
- [ ] AETCOM modules are present for all phases

### 2. Lesson Content Validation
- [ ] Every published topic has all 5 layers (Foundation through Active Recall)
- [ ] No empty contentMd fields
- [ ] Markdown renders without errors (valid syntax)
- [ ] KaTeX formulas are valid (if present)
- [ ] At least 2 mnemonics per topic
- [ ] At least 5 key points per topic
- [ ] At least 1 textbook reference per layer
- [ ] Exam tags are present
- [ ] Estimated minutes are realistic (15-30 min per layer)
- [ ] No broken image URLs

### 3. Question Bank Validation
- [ ] Every published topic has minimum 20 MCQs
- [ ] Every MCQ_SINGLE has exactly 1 correct option
- [ ] All options have explanations
- [ ] Bloom's level distribution: ~60% ProblemSolving, ~30% Analysis, ~10% Recall
- [ ] Difficulty distribution: ~25% EASY, ~40% MEDIUM, ~25% HARD, ~10% EXPERT
- [ ] No duplicate stems (fuzzy match)
- [ ] Explanations are non-empty and informative
- [ ] Textbook references present
- [ ] Exam tags present

### 4. Clinical Case Validation
- [ ] Every case has all 6 stages (HISTORY through FOLLOWUP)
- [ ] Every stage has at least 5 available actions
- [ ] At least 3 optimal actions per stage
- [ ] Score deltas sum to reasonable total
- [ ] Patient profile is complete (age, sex, occupation)
- [ ] Case type is valid (OPD, Emergency, Ward, ICU)
- [ ] Drug dosages are medically accurate
- [ ] Lab values are realistic

### 5. Cross-Reference Validation
- [ ] All topicIds in questions reference existing topics
- [ ] All subjectIds in cases reference existing subjects
- [ ] All competencyIds are valid NMC codes
- [ ] Textbook references use standard abbreviations

## Output
Print a validation report with:
- Total items checked
- Pass/fail counts per category
- List of specific failures with location (file/record)
- Suggested fixes for each failure
- Overall health score (percentage passing)

## How to Run
Read the database (or seed files) and perform all checks programmatically. For content quality checks that require medical knowledge, invoke the `medical-content-author` agent for review.
