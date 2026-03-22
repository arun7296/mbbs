@AGENTS.md

# MedLearn - MBBS Learning Platform

## Project Overview
Interactive MBBS learning website aligned with Indian NMC CBME standards. Built with Next.js 15, TypeScript, Prisma, tRPC, and Tailwind CSS.

## Tech Stack
- **Frontend**: Next.js 15 (App Router, RSC), TypeScript, Tailwind CSS, shadcn/ui, Zustand, TanStack Query
- **Backend**: tRPC routers, Prisma ORM, PostgreSQL (via Prisma Accelerate)
- **AI**: Claude API for study planning, clinical tutoring, explanation generation
- **Auth**: NextAuth.js (JWT strategy, email + Google)

## Architecture
- `src/app/` - Next.js pages (App Router with route groups)
- `src/server/trpc/` - tRPC routers and context
- `src/components/` - React components organized by domain (layout, lesson, quiz, clinical, dashboard, shared)
- `src/lib/` - Utilities, constants, auth, database, AI, tRPC client
- `src/types/` - TypeScript type definitions
- `prisma/` - Prisma schema and seed data

## Key Patterns
- **5-Layer Teaching Model**: Every topic has 5 lesson layers (Foundation → Mechanism → Clinical → Exam Prep → Active Recall)
- **5 Learning Modes**: Learn (blue), Practice (green), Revise (orange), Test (red), Clinical Sim (purple)
- **Curriculum Hierarchy**: Phase → Subject → Module → Topic → NMC Competency
- **Assessment**: NEXT-pattern MCQs with IRT adaptive testing, Bloom's taxonomy tagging
- **Progress**: SM-2 spaced repetition, composite weak area detection

## Custom Agents (in .claude/agents/)
- `medical-content-author` - Write lesson content, mnemonics, textbook references
- `curriculum-architect` - NMC CBME curriculum structure, seed data generation
- `clinical-sim-designer` - Virtual patient cases, OSCE stations
- `assessment-engine-architect` - MCQs, adaptive testing, mock exams
- `ai-tutor-engineer` - AI study planner, weak area detection, spaced repetition
- `medical-ui-specialist` - Medical-specific UI components
- `mbbs-orchestrator` - Coordinate multi-agent workflows

## Custom Skills (in .claude/skills/)
- `/seed-curriculum` - Generate curriculum seed data for a subject
- `/generate-mcqs` - Create NEXT-pattern MCQs for a topic
- `/generate-case` - Create clinical simulation cases
- `/generate-lesson` - Generate 5-layer lesson content
- `/validate-content` - Validate content quality and completeness
- `/run-medical-tests` - Run the full test suite
- `/deploy-preview` - Deploy to preview and verify

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npx prisma generate` - Generate Prisma client
- `npx prisma dev` - Start local Postgres + run migrations
- `npx prisma db seed` - Seed database

## Content Standards
- All medical content must be accurate per current Indian guidelines
- Every lesson needs textbook references (BDC, Guyton, Robbins, etc.)
- MCQs follow NEXT pattern: 60% ProblemSolving, 30% Analysis, 10% Recall
- Clinical cases must reflect Indian healthcare context
- NMC competency codes must be mapped for every topic
