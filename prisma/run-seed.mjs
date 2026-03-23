#!/usr/bin/env node

/**
 * MedLearn Database Seed Runner
 *
 * Runs the TypeScript seed script using tsx loader.
 * Usage: npx node --loader tsx/cjs prisma/run-seed.ts
 *
 * Or simply: npm run seed:pg
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Run the TypeScript seed script with tsx loader
const proc = spawn('node', [
  '--loader', 'tsx/cjs',
  `${__dirname}/run-seed.ts`
], {
  stdio: 'inherit',
  cwd: `${__dirname}/..`
});

proc.on('error', (err) => {
  console.error('Failed to start seed process:', err);
  process.exit(1);
});

proc.on('exit', (code) => {
  process.exit(code);
});
