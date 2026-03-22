---
name: seed-curriculum
description: >
  Generate and load NMC CBME curriculum seed data into Prisma database. Creates subjects,
  modules, topics, NMC competency codes, and AETCOM modules. Use when adding new subjects
  or restructuring the curriculum database. Accepts a subject code or "all" as argument.
  Examples: /seed-curriculum AN (Anatomy), /seed-curriculum PY (Physiology), /seed-curriculum all
---

# Seed Curriculum Data

## Task
Generate Prisma-compatible seed data for the MBBS curriculum and insert it into the database.

## Arguments
- `$ARGUMENTS` = Subject code (e.g., "AN", "PY", "BI") or "all" for complete curriculum

## Instructions

1. **Invoke the `curriculum-architect` agent** to generate the subject structure:
   - All modules with proper codes (e.g., AN-MOD-01)
   - All topics with proper codes (e.g., AN-MOD-01-TOP-05)
   - NMC competency code mappings
   - Hour allocations per NMC guidelines
   - Sort orders

2. **Generate a TypeScript seed file** at `prisma/seeds/seed-{subjectCode}.ts`:
```typescript
import { PrismaClient } from "@/generated/prisma/client";

export async function seedSubject(prisma: PrismaClient) {
  const subject = await prisma.subject.upsert({
    where: { code: "AN" },
    update: {},
    create: {
      name: "Anatomy",
      code: "AN",
      phase: "PHASE_1",
      totalHours: 700,
      description: "...",
      sortOrder: 1,
    },
  });
  // ... modules, topics, competencies
}
```

3. **Update `prisma/seed.ts`** to import and call the new seed function.

4. **Run the seed**: `npx prisma db seed`

5. **Verify** by querying: count subjects, modules, topics, competencies.

## Subject Codes Reference
| Code | Subject | Phase |
|------|---------|-------|
| AN | Anatomy | PHASE_1 |
| PY | Physiology | PHASE_1 |
| BI | Biochemistry | PHASE_1 |
| PA | Pathology | PHASE_2 |
| PH | Pharmacology | PHASE_2 |
| MI | Microbiology | PHASE_2 |
| FM | Forensic Medicine | PHASE_3_PART1 |
| CM | Community Medicine | PHASE_3_PART1 |
| EN | ENT | PHASE_3_PART1 |
| OP | Ophthalmology | PHASE_3_PART1 |
| IM | Medicine | PHASE_3_PART2 |
| SU | Surgery | PHASE_3_PART2 |
| OG | Obstetrics & Gynecology | PHASE_3_PART2 |
| PE | Pediatrics | PHASE_3_PART2 |
| DR | Dermatology | PHASE_3_PART2 |
| PS | Psychiatry | PHASE_3_PART2 |
| OR | Orthopedics | PHASE_3_PART2 |
| AS | Anesthesiology | PHASE_3_PART2 |
| RD | Radiology | PHASE_3_PART2 |
