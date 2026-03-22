---
name: generate-lesson
description: >
  Generate complete 5-layer lesson content for a given MBBS topic. Creates all 5 layers
  (Foundation, Mechanism, Clinical, Exam Prep, Active Recall) with mnemonics, key points,
  textbook references, and summaries. Outputs as structured content ready for database.
  Examples: /generate-lesson "Brachial Plexus", /generate-lesson "Thyroid Physiology",
  /generate-lesson "Beta Blockers" PH, /generate-lesson AN-MOD-03-TOP-02
---

# Generate 5-Layer Lesson Content

## Task
Create complete educational content for a topic using the 5-Layer Teaching Model.

## Arguments
- `$1` = Topic name or topic code
- `$2` = Subject code (optional, for context)

## Instructions

1. **Invoke the `medical-content-author` agent** to generate all 5 layers:

   **Layer 1 - Foundation (20 min):**
   - Basic definitions and structure
   - Simple analogies and diagrams
   - Key terminology explained
   - Prerequisites linked

   **Layer 2 - Mechanism (30 min):**
   - Detailed how-it-works explanation
   - Physiological/biochemical basis
   - Cross-subject connections
   - Flowcharts and process descriptions

   **Layer 3 - Clinical Application (20 min):**
   - Disease correlations
   - Clinical presentations and signs
   - Diagnosis and treatment overview
   - Case snippets

   **Layer 4 - Exam Preparation (15 min):**
   - High-yield one-liners
   - Pattern recognition tips
   - Comparison tables
   - Previous year question themes
   - Mnemonics

   **Layer 5 - Active Recall (10 min):**
   - 10+ Q&A flashcard pairs
   - Self-test mini quiz
   - Quick revision bullets

2. **Output format** - Write to `prisma/seeds/lessons/{topic-slug}/`:
   - `layer-1-foundation.json`
   - `layer-2-mechanism.json`
   - `layer-3-clinical.json`
   - `layer-4-exam-prep.json`
   - `layer-5-active-recall.json`

   Each file:
   ```json
   {
     "layer": 1,
     "title": "Brachial Plexus - Foundation",
     "slug": "brachial-plexus-foundation",
     "estimatedMinutes": 20,
     "contentMd": "# Full markdown content...",
     "summary": "2-3 sentence summary",
     "mnemonics": [{"text": "...", "explanation": "..."}],
     "keyPoints": ["...", "..."],
     "textbookRefs": [{"book": "BDC", "chapter": "...", "page": "...", "edition": "8th"}],
     "examTags": ["NEXT_STEP1", "NEET_PG"]
   }
   ```

3. **Quality check** each layer:
   - Content is medically accurate
   - Markdown renders correctly in MarkdownRenderer
   - KaTeX formulas are valid (if any)
   - At least 2 mnemonics per topic
   - At least 5 key points per topic
   - At least 1 textbook reference per layer
   - All 5 layers present and complete

4. **Create seed script** to load lessons into the Lesson table.

5. **Report**: Print summary of content created (word count per layer, mnemonic count, key point count).
