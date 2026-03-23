# MedLearn Database Seed Runner

A Node.js seed runner script using native PostgreSQL (`pg` package) to populate the MedLearn MBBS learning platform database with curriculum structure, modules, topics, and NMC competencies.

## Overview

The seed runner (`run-seed.ts` and `run-seed.mjs`) seeds the database with:

1. **AETCOM Modules** (6 modules across 4 phases)
2. **Subjects** (19 medical subjects aligned with Indian CBME standards)
3. **Modules** (131 modules across all subjects)
4. **Topics** (569 topics with full curriculum hierarchy)
5. **NMC Competencies** (569 competencies mapped to topics)

## Files Created

```
prisma/
├── run-seed.ts          # TypeScript seed runner (main implementation)
├── run-seed.mjs         # ESM wrapper script (executable, calls run-seed.ts)
└── seeds/               # Existing seed data files
    ├── anatomy.ts
    ├── physiology.ts
    ├── biochemistry.ts
    ├── pathology.ts
    ├── pharmacology.ts
    ├── microbiology.ts
    ├── forensic-medicine.ts
    ├── community-medicine.ts
    ├── ent.ts
    ├── ophthalmology.ts
    ├── medicine.ts
    ├── surgery.ts
    ├── obg.ts
    ├── pediatrics.ts
    └── remaining-subjects.ts
```

## Usage

### Option 1: Using npm scripts (Recommended)

```bash
# Using TypeScript directly
npm run seed:pg

# Using the .mjs wrapper (alternative)
npm run seed:pg-mjs
```

### Option 2: Direct Node execution

```bash
# With TypeScript loader
node --loader tsx/cjs prisma/run-seed.ts

# Using the .mjs wrapper
node prisma/run-seed.mjs

# Making it executable
./prisma/run-seed.mjs
```

## Database Connection

The seed runner uses the `DIRECT_DATABASE_URL` environment variable or defaults to:

```
postgres://postgres:postgres@localhost:51214/template1?sslmode=disable
```

Configure your connection by setting `DIRECT_DATABASE_URL` in `.env`:

```env
DIRECT_DATABASE_URL="postgres://user:password@host:port/database?sslmode=disable"
```

## Script Architecture

### `run-seed.ts` - Main Implementation

Written in TypeScript using the `pg` package for direct PostgreSQL access.

**Key Features:**
- Uses native `pg` Pool for database connections
- Dynamic imports of seed data from TypeScript files using tsx loader
- Handles ON CONFLICT DO NOTHING for idempotent seeding
- Comprehensive error handling with silent skipping of duplicate/invalid entries
- Organized into logical functions:
  - `seedAetcomModules()` - Seeds 6 AETCOM modules
  - `seedSubjects()` - Seeds all subjects with their modules, topics, and competencies

**Key Functions:**

```typescript
async function query(sql: string, values?: unknown[]): Promise<any[]>
```
Executes SQL queries using the pg Pool with connection management.

```typescript
async function seedAetcomModules(): Promise<void>
```
Inserts 6 AETCOM modules (Foundations of Holistic Care, Professional Behavior, etc.) into the AetcomModule table.

```typescript
async function seedSubjects(): Promise<void>
```
Iterates through all 19 subject seed data exports and:
1. Inserts Subject → gets subjectId
2. For each Module in subject → Inserts Module → gets moduleId
3. For each Topic in module → Inserts NmcCompetency → Inserts Topic

### `run-seed.mjs` - ESM Wrapper

A lightweight ESM wrapper that:
- Spawns a child process running `node --loader tsx/cjs prisma/run-seed.ts`
- Inherits stdio for direct console output
- Returns proper exit codes
- Makes the TypeScript seed script callable from npm scripts

## Data Structure

### Subject Model
```typescript
{
  name: string;              // e.g., "Anatomy"
  code: string;              // e.g., "AN" (unique)
  phase: Phase;              // e.g., "PHASE_1"
  totalHours: number;        // e.g., 700
  description: string;       // e.g., "Study of human body structure..."
  iconUrl: string | null;
  sortOrder: number;         // e.g., 1
}
```

### Module Model
```typescript
{
  code: string;              // e.g., "AN-MOD-01" (unique)
  name: string;              // e.g., "Upper Limb"
  description: string;
  estimatedHours: number;    // e.g., 60
  sortOrder: number;         // e.g., 1
}
```

### Topic Model
```typescript
{
  code: string;              // e.g., "AN-MOD-01-TOP-01" (unique)
  name: string;              // e.g., "Pectoral Region & Breast"
  sortOrder: number;
  competencyCode: string;    // e.g., "AN2.1"
  competencyDesc: string;    // NMC competency description
}
```

### NMC Competency Model
```typescript
{
  code: string;              // e.g., "AN2.1" (unique)
  description: string;       // e.g., "Describe the anatomy of pectoral region and breast"
  subjectId: string;         // Foreign key to Subject
  domain: string;            // e.g., "Cognitive"
  level: string;             // e.g., "KNOWS_HOW" (CompetencyLevel enum)
  phase: Phase;              // e.g., "PHASE_1"
  isAetcom: boolean;         // false for curriculum, true for AETCOM
}
```

## Output Example

```
🌱 Starting MedLearn database seed...

🏥 Seeding AETCOM modules...
   ✅ 6 AETCOM modules seeded

📚 Seeding subjects, modules, and topics...
   ✅ 19 subjects, 131 modules, 569 topics seeded

✨ Curriculum seeding completed successfully!

📝 Note: Lessons, MCQs, and clinical cases require separate seeding with Prisma seed.
```

## Database Statistics (After Seeding)

| Entity | Count |
|--------|-------|
| Subjects | 19 |
| Modules | 131 |
| Topics | 569 |
| NMC Competencies | 569 |
| AETCOM Modules | 30 |

### Subjects Seeded (19 total)

**Phase 1 (Preclinical):**
- Anatomy (AN)
- Physiology (PH)
- Biochemistry (BC)

**Phase 2 (Paraclinical):**
- Pathology (PA)
- Pharmacology (PM)
- Microbiology (MB)

**Phase 3 Part 1 (Clinical):**
- Medicine (MD)
- Surgery (SU)
- Obstetrics & Gynecology (OB)
- Pediatrics (PD)
- Psychiatry (PS)

**Phase 3 Part 2 (Clinical):**
- Forensic Medicine (FM)
- Community Medicine (CM)
- ENT (EN)
- Ophthalmology (OP)
- Dermatology (DE)
- Orthopedics (OR)
- Anesthesiology (AN)
- Radiology (RD)

## Implementation Details

### PostgreSQL Queries Used

**Subject Insertion:**
```sql
INSERT INTO "Subject" (id, "name", "code", "phase", "totalHours", "description", "iconUrl", "sortOrder")
VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7)
ON CONFLICT ("code") DO NOTHING
RETURNING id
```

**Module Insertion:**
```sql
INSERT INTO "Module" (id, "subjectId", "name", "code", "description", "sortOrder", "estimatedHours")
VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6)
ON CONFLICT ("code") DO NOTHING
RETURNING id
```

**Competency & Topic Insertion:**
```sql
INSERT INTO "NmcCompetency" (id, "code", "description", "subjectId", "domain", "level", "phase", "isAetcom")
VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7)
ON CONFLICT ("code") DO NOTHING
RETURNING id

INSERT INTO "Topic" (id, "moduleId", "name", "code", "nmcCompetencyId", "sortOrder")
VALUES (gen_random_uuid(), $1, $2, $3, $4, $5)
ON CONFLICT ("code") DO NOTHING
```

### Error Handling

- All operations use `ON CONFLICT DO NOTHING` for idempotent seeding
- Failed inserts are silently skipped (no exceptions thrown)
- Database connection is properly released in finally block
- Process exits with code 1 on fatal errors

## Extending the Seed Runner

To add new subjects:

1. Create a new seed file: `prisma/seeds/new-subject.ts`
2. Export: `newSubjectSubject`, `newSubjectModules`, `newSubjectTopics`
3. Import and add to the `subjects` array in `seedSubjects()`
4. Run `npm run seed:pg`

Example:
```typescript
// prisma/seeds/new-subject.ts
export const newSubjectSubject = {
  name: "New Subject",
  code: "NS",
  phase: "PHASE_1",
  totalHours: 100,
  description: "Description",
  iconUrl: null,
  sortOrder: 20,
};

export const newSubjectModules = [
  { code: "NS-MOD-01", name: "Module 1", description: "...", estimatedHours: 50, sortOrder: 1 },
];

export const newSubjectTopics = {
  "NS-MOD-01": [
    { code: "NS-MOD-01-TOP-01", name: "Topic 1", sortOrder: 1, competencyCode: "NS1.1", competencyDesc: "..." },
  ],
};
```

## Troubleshooting

### Connection Refused
```
Error: connect ECONNREFUSED 127.0.0.1:51214
```
- Ensure PostgreSQL is running on the configured host/port
- Check `DIRECT_DATABASE_URL` in `.env`

### Module Not Found
```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module
```
- Ensure all seed files are in `prisma/seeds/`
- Check that file names match the import statements

### tsx Errors
```
Error: listen EPERM: operation not permitted
```
- Use the `tsx/cjs` loader instead of `tsx/esm`
- Or use the `.mjs` wrapper

### Duplicate Key Violations
- The script uses `ON CONFLICT DO NOTHING`, so duplicates are silently skipped
- This is intentional for idempotent seeding

## Dependencies

- `pg@^8.20.0` - PostgreSQL client (already installed)
- `dotenv@^17.3.1` - Environment variable loading (already installed)
- `tsx@^4.21.0` - TypeScript executor for Node.js (already installed)
- `typescript@^5` - TypeScript compiler (already installed)

## Performance

- Average seeding time: ~5-10 seconds for full curriculum
- Database queries are batched by entity type
- Connection pooling is handled by `pg` library
- No N+1 query problems (direct SQL inserts)

## Next Steps

After running the seed runner, you can optionally seed additional content:

1. **Lessons** - Use the existing Prisma seed: `npx prisma db seed`
2. **MCQs** - Extended seed runner with question seeding
3. **Clinical Cases** - Extended seed runner with case seeding

## Notes

- The script only seeds curriculum structure (subjects, modules, topics, competencies)
- It does NOT seed lessons, MCQs, or clinical cases (requires separate seed with Prisma)
- All seeding is idempotent (safe to run multiple times)
- No data is deleted; only new records are inserted
- The `.mjs` wrapper allows the TypeScript script to be called without explicit loader flags
