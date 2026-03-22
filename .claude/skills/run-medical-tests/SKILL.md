---
name: run-medical-tests
description: >
  Run the complete test suite for the MBBS learning platform. Executes unit tests,
  integration tests, and optionally E2E tests. Validates that all tRPC routers work,
  Prisma queries succeed, scoring algorithms are correct, and UI components render.
  Examples: /run-medical-tests, /run-medical-tests unit, /run-medical-tests integration,
  /run-medical-tests e2e, /run-medical-tests coverage
---

# Run MBBS Platform Test Suite

## Task
Execute the test suite and report results with actionable feedback.

## Arguments
- `$ARGUMENTS` = Test scope: "all" (default), "unit", "integration", "e2e", "coverage"

## Test Categories

### Unit Tests
- **Scoring algorithms**: SM-2 spaced repetition, quiz scoring, IRT calculations
- **Utility functions**: time formatting, weakness score calculation, progress computation
- **Constants**: curriculum mappings, exam weights, layer configurations
- **Type validation**: Zod schemas for tRPC inputs

### Integration Tests
- **tRPC routers**: All CRUD operations for curriculum, content, assessment, progress, clinical
- **Quiz flow**: startQuiz → submitAnswer → completeQuiz → getResults
- **Clinical flow**: startCase → submitDecision → completeCase
- **Progress tracking**: updateProgress → getWeakAreas → updateStreak
- **Study plan**: generate → getToday → completeTask

### E2E Tests (Playwright)
- **Auth flow**: signup → onboarding → dashboard
- **Learn flow**: dashboard → subject → module → topic → all 5 layers
- **Practice flow**: configure quiz → answer questions → view results
- **Test flow**: start mock exam → answer → submit → review
- **Clinical flow**: select case → play through stages → view feedback
- **Mobile**: all critical flows at 375px viewport

### Coverage Targets
- Statements: > 70%
- Branches: > 60%
- Functions: > 75%
- Lines: > 70%

## Execution

1. Run: `npm test` (unit + integration)
2. If "e2e" specified: `npx playwright test`
3. If "coverage" specified: `npm test -- --coverage`
4. Parse results and report:
   - Total tests: passed / failed / skipped
   - Failed test details with error messages
   - Coverage percentages (if requested)
   - Performance: total execution time
5. If failures found, invoke `debugger-specialist` to diagnose top 3 failures.

## Quick Checks (Always Run)
- `npm run build` compiles without TypeScript errors
- `npx prisma generate` succeeds
- All tRPC router files import correctly
- No circular dependencies detected
