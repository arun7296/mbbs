---
name: deploy-preview
description: >
  Deploy the MBBS platform to a preview environment and verify it works correctly.
  Runs build, deploys to Vercel preview, checks health endpoints, and verifies
  key pages load. Use before merging PRs or after significant changes.
  Examples: /deploy-preview, /deploy-preview --check-only
---

# Deploy Preview

## Task
Build, deploy, and verify the MBBS platform in a preview environment.

## Arguments
- `$ARGUMENTS` = "--check-only" to skip deploy and just verify current preview

## Steps

1. **Pre-deploy checks:**
   - `npm run build` - must succeed
   - `npx prisma generate` - must succeed
   - Run quick unit tests: `npm test`

2. **Deploy to Vercel preview:**
   - `npx vercel --yes` (if Vercel CLI configured)
   - Or push to a preview branch: `git push origin HEAD:preview`
   - Capture the preview URL

3. **Health checks on preview:**
   - GET `/` → should redirect to `/dashboard`
   - GET `/dashboard` → should return 200
   - GET `/learn` → should return 200
   - GET `/learn/AN` → should return 200
   - GET `/practice` → should return 200
   - GET `/api/trpc/curriculum.getPhases` → should return valid JSON
   - Check response times (all < 3 seconds)

4. **Visual verification:**
   - Take screenshot of dashboard (mobile + desktop)
   - Take screenshot of learn page
   - Take screenshot of lesson viewer
   - Verify no console errors

5. **Report:**
   - Preview URL
   - All health check results (pass/fail)
   - Build time
   - Any warnings or issues found

## Rollback
If critical issues found:
- Revert the deploy: `npx vercel rollback`
- Report the issue for investigation
