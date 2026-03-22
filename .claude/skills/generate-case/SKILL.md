---
name: generate-case
description: >
  Create a complete virtual clinical simulation case for the MBBS platform. Generates
  a multi-stage patient encounter with history, examination, investigation, diagnosis,
  treatment, and follow-up stages. Each stage has available actions with findings and
  scoring. Use for building the clinical simulation library.
  Examples: /generate-case "Acute MI" Emergency, /generate-case "Pneumonia" Ward,
  /generate-case "Snake Bite" Emergency, /generate-case "Thyroid Nodule" OPD
---

# Generate Clinical Simulation Case

## Task
Create a complete virtual patient case with 6 stages and interactive decision points.

## Arguments
- `$1` = Case title or clinical condition
- `$2` = Setting (Emergency / OPD / Ward / ICU) - default: OPD

## Instructions

1. **Invoke the `clinical-sim-designer` agent** with this prompt:
   > Design a complete clinical case for "$1" in a $2 setting.
   > The case must include all 6 stages with realistic clinical content.
   > Follow Indian clinical practice guidelines and drug formulary.

2. **Output** the case as JSON to `prisma/seeds/cases/{case-slug}.json`:
   - Patient profile (age, sex, occupation, relevant history)
   - 6 stages (HISTORY, EXAMINATION, INVESTIGATION, DIAGNOSIS, TREATMENT, FOLLOWUP)
   - 10-15 actions per history stage, 6-10 per other stages
   - Each action: id, text, isOptimal, findings, scoreDelta
   - Realistic lab values and investigation results
   - Correct differential diagnoses
   - Evidence-based treatment protocol

3. **Have `medical-content-author` review** the case for:
   - Medical accuracy
   - Appropriate difficulty level
   - Complete clinical information
   - Realistic patient profile for Indian context

4. **Create seed script** to load the case into ClinicalCase + CaseStage tables.

5. **Verify** the case can be loaded and played through the CasePlayer UI.

## Case Difficulty Guidelines
- **EASY**: Common presentation, straightforward diagnosis (e.g., URTI, UTI)
- **MEDIUM**: Requires systematic approach (e.g., Chest pain DDx, Jaundice workup)
- **HARD**: Complex presentation or rare condition (e.g., SLE, Addisonian crisis)
- **EXPERT**: Multi-system involvement, time-critical (e.g., DIC, Septic shock)
