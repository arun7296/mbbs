import type { TopicLessons } from "./content-loader";

/**
 * 5-layer lessons for Pathology module PA-MOD-06.
 * Covers Renal & Male Reproductive Pathology.
 * Primary ref: Robbins Pathologic Basis of Disease 10th ed.
 * Secondary ref: Harsh Mohan Textbook of Pathology 8th ed.
 */
export const pathologyPart3Lessons: TopicLessons[] = [
  // ═══════════════════════════════════════════════════════════════
  // PA-MOD-06: RENAL & MALE REPRODUCTIVE PATHOLOGY
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: Glomerular Diseases ─────────────────────────────
  {
    topicCode: "PA-MOD-06-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "glomerular-diseases-foundation",
        title: "Glomerular Diseases - Foundation",
        estimatedMinutes: 20,
        summary:
          "Glomerular diseases present as nephrotic or nephritic syndromes. Understanding glomerular structure and the two clinical syndromes is fundamental to nephropathology.",
        contentMd: `# Glomerular Diseases

## Glomerular Structure
- **Capillary wall layers** (filtration barrier):
  1. Fenestrated endothelium (size barrier)
  2. Glomerular basement membrane (GBM) - charge and size barrier
  3. Podocytes (visceral epithelial cells) - slit diaphragm (final barrier)
- **Mesangium**: Mesangial cells + matrix (structural support, phagocytic function)

## Two Major Clinical Syndromes
| Feature | Nephrotic Syndrome | Nephritic Syndrome |
|---------|-------------------|-------------------|
| Proteinuria | >3.5 g/day (massive) | <3.5 g/day (subnephrotic) |
| Edema | Generalized (anasarca) | Periorbital (morning) |
| Hematuria | Minimal/absent | Prominent (RBC casts) |
| Hypertension | Absent/mild | Present |
| Serum albumin | Markedly decreased | Normal/mildly decreased |
| Lipids | Elevated (hyperlipidemia) | Normal |
| Complement | Usually normal | Often decreased |
| Mechanism | Podocyte injury -> protein leak | GBM/endothelial damage -> blood leak |

## Major Glomerulonephropathies
### Nephrotic Syndrome Causes
| Disease | Age Group | Light Microscopy | IF | EM |
|---------|----------|-----------------|-----|-----|
| Minimal Change Disease | Children (most common) | Normal | Negative | Foot process effacement |
| FSGS | Adults (most common primary) | Segmental sclerosis | IgM, C3 (focal) | Foot process effacement |
| Membranous Nephropathy | Adults | Thickened GBM (spike and dome) | Granular IgG, C3 | Subepithelial deposits |
| Diabetic Nephropathy | Diabetics | Kimmelstiel-Wilson nodules | Linear IgG, albumin | GBM thickening |

### Nephritic Syndrome Causes
| Disease | Key Feature |
|---------|------------|
| Post-streptococcal GN | Subepithelial humps, low C3 |
| IgA Nephropathy (Berger) | Mesangial IgA, most common GN worldwide |
| Rapidly Progressive GN | Crescents from parietal epithelial cells |
| Lupus Nephritis | Wire-loop lesion (Class IV) |
| Goodpasture Syndrome | Anti-GBM antibodies (linear IF) |

> **Clinical Pearl**: In India, post-infectious GN remains common in children due to streptococcal skin infections in tropical regions. IgA nephropathy is the most common primary GN in adults.`,
        mnemonics: [
          {
            text: "MiN-FoG-MeM for nephrotic causes",
            explanation:
              "Mi-Minimal Change (children), Fo-Focal Segmental GS (adults), Me-Membranous nephropathy",
          },
          {
            text: "Nephrotic = prOtein (pOdocyte); Nephritic = blOOd (RBC casts)",
            explanation:
              "Nephrotic is podocyte injury with massive proteinuria; Nephritic is GBM damage with hematuria and RBC casts",
          },
        ],
        keyPoints: [
          "Nephrotic = massive proteinuria (>3.5g/day), edema, hypoalbuminemia, hyperlipidemia",
          "Nephritic = hematuria (RBC casts), mild proteinuria, hypertension, oliguria",
          "Minimal Change Disease is the most common nephrotic syndrome in children",
          "FSGS is the most common primary nephrotic syndrome in adults and HIV patients",
          "IgA nephropathy is the most common GN worldwide",
          "Crescentic GN (RPGN) indicates parietal epithelial cell proliferation",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 20: Glomerular Diseases",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 23: Glomerular Diseases",
            edition: "8th",
          },
        ],
      },
      {
        layer: 2,
        slug: "glomerular-diseases-mechanism",
        title: "Glomerular Diseases - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Immune-mediated mechanisms including in situ immune complex formation, circulating immune complex deposition, anti-GBM antibody disease, and podocyte injury in nephrotic syndrome.",
        contentMd: `# Mechanisms of Glomerular Disease

## Immune Mechanisms
### 1. In Situ Immune Complex Formation
- Anti-GBM disease (Goodpasture): Antibodies to collagen IV alpha-3 chain -> **linear IF**
- Membranous nephropathy: **Anti-PLA2R** antibodies on podocytes -> subepithelial deposits

### 2. Circulating Immune Complex Deposition
- **Granular (lumpy-bumpy) IF pattern**
- Examples: PSGN, Lupus nephritis, HBV-associated GN

### 3. Cell-Mediated Injury
- T cells directly damage glomerular cells in some crescentic GN forms

## Mechanism of Key Diseases

### Minimal Change Disease
- T-cell derived cytokine (permeability factor) -> podocyte charge barrier damage
- **Foot process effacement** on EM only; LM and IF normal
- Selective albumin leak (selective proteinuria)

### Membranous Nephropathy
- **Anti-PLA2R antibodies** (70% primary) -> C5b-9 MAC -> podocyte injury
- Subepithelial deposits -> "spike and dome" on silver stain
- Secondary: SLE, HBV, drugs (penicillamine, gold), malignancy

### Post-Streptococcal GN
- Nephritogenic Group A strep -> subepithelial humps
- Complement activation -> C3 consumption -> low C3
- Self-limiting in children (weeks); worse in adults

### IgA Nephropathy
- Defective glycosylation of IgA1 -> galactose-deficient IgA1 -> autoantibodies -> IC
- **Mesangial IgA deposits** -> mesangial proliferation
- Synpharyngitic hematuria (1-2 days after URI, not 2-3 weeks like PSGN)

### RPGN (Crescentic GN)
| Type | Mechanism | IF | Example |
|------|-----------|-----|---------|
| I | Anti-GBM | Linear IgG | Goodpasture |
| II | Immune complex | Granular | Lupus, PSGN |
| III | Pauci-immune (ANCA) | Negative | GPA, MPA |

> **Clinical Pearl**: In India, RPGN Type II and III are the most common causes of rapidly progressive renal failure requiring urgent biopsy.`,
        mnemonics: [
          {
            text: "Linear = anti-GBM; Granular = immune complex; Negative = ANCA",
            explanation:
              "IF pattern identifies RPGN type: I (linear/anti-GBM), II (granular/IC), III (negative/ANCA)",
          },
          {
            text: "PLA2R = Primary Membranous (70%)",
            explanation:
              "Anti-PLA2R antibodies cause ~70% of primary membranous nephropathy via complement activation on podocytes",
          },
        ],
        keyPoints: [
          "Anti-GBM = linear IF; immune complex = granular IF; ANCA = negative IF",
          "Anti-PLA2R antibodies cause 70% of primary membranous nephropathy",
          "MCD: normal LM/IF, foot process effacement on EM only",
          "IgA: synpharyngitic (with infection); PSGN: post-infectious (2-3 weeks after)",
          "Crescents = parietal epithelial proliferation + fibrin + macrophages in Bowman space",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 20: Pathogenesis of Glomerular Disease",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 23: Immunopathology of GN",
            edition: "8th",
          },
        ],
      },
      {
        layer: 3,
        slug: "glomerular-diseases-clinical",
        title: "Glomerular Diseases - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical presentations, diagnostic workup, biopsy interpretation, and management of nephrotic and nephritic syndromes in Indian practice.",
        contentMd: `# Clinical Applications

## Case 1: Nephrotic Child (MCD)
- 4-year-old boy, generalized edema, frothy urine
- Urine protein 4+, no RBCs; 24h protein 4.2g; Albumin 1.8, cholesterol 380
- **Diagnosis**: Minimal Change Disease (most likely)
- Treatment: Empiric steroids (prednisolone 2mg/kg/day), >90% respond
- Biopsy only if steroid-resistant or atypical

## Case 2: PSGN
- 8-year-old, 2 weeks after impetigo, cola-colored urine, periorbital edema, HTN
- RBC casts, low C3, elevated ASO; Self-limiting >95% in children

## Case 3: Goodpasture Syndrome (RPGN Type I)
- 55-year-old male, oliguria, rising creatinine, hemoptysis
- Anti-GBM positive; Biopsy: crescents + linear IgG
- Treatment: Plasmapheresis + cyclophosphamide + steroids

## Diagnostic Algorithm
| Finding | Likely Diagnosis |
|---------|-----------------|
| Nephrotic child (2-6yr) | MCD (trial steroids) |
| Nephrotic adult | Biopsy essential |
| Nephritic + low C3 | PSGN, MPGN, lupus |
| Nephritic + normal C3 | IgA nephropathy, ANCA vasculitis |
| RPGN | Urgent biopsy |
| Hematuria WITH URI | IgA nephropathy |
| Hematuria 2wk AFTER strep | PSGN |

> **Clinical Pearl**: In Indian pediatric practice, MCD accounts for >75% of childhood nephrotic syndrome. Empiric steroid therapy without biopsy is standard.`,
        mnemonics: [
          {
            text: "SynPharyngitic = Same time = IgA; Post-infectious = 2 weeks = PSGN",
            explanation:
              "IgA: hematuria with URI; PSGN: hematuria 1-3 weeks after streptococcal infection",
          },
        ],
        keyPoints: [
          "MCD responds to steroids in >90% of children - no biopsy needed initially",
          "PSGN is self-limiting in >95% of children",
          "Goodpasture: anti-GBM + pulmonary hemorrhage + crescentic GN",
          "Low C3 in nephritic: PSGN, MPGN, or lupus",
          "IgA = synpharyngitic; PSGN = post-infectious (latency period)",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 20: Clinical Features",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 23: Clinicopathologic Correlations",
            edition: "8th",
          },
        ],
      },
      {
        layer: 4,
        slug: "glomerular-diseases-exam",
        title: "Glomerular Diseases - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield exam points on glomerular diseases for NEXT/NEET PG.",
        contentMd: `# Exam Preparation - High Yield

## One-Liners
- Most common nephrotic in children: **MCD**
- Most common nephrotic in adults (primary): **FSGS**
- Most common secondary nephrotic: **Diabetic nephropathy**
- Most common GN worldwide: **IgA nephropathy**
- Wire-loop lesion: **Lupus Class IV**
- Kimmelstiel-Wilson nodules: **Diabetic nephropathy**
- Spike and dome: **Membranous nephropathy**
- Tram-track/double contour: **MPGN**
- Subepithelial humps: **PSGN**
- Anti-PLA2R: **Primary membranous (70%)**
- Basket-weave GBM: **Alport syndrome** (COL4A5)
- Full house IF: **Lupus nephritis**

## IF Patterns
| Pattern | Disease |
|---------|---------|
| Linear IgG | Anti-GBM (Goodpasture) |
| Granular IgG, C3 | Membranous, PSGN, Lupus |
| Mesangial IgA | IgA nephropathy, HSP |
| Full house | Lupus nephritis |
| Negative | ANCA vasculitis |

## Pattern Recognition
- Child + edema + selective proteinuria + normal C3 = **MCD**
- Cola urine 2wk after strep + low C3 = **PSGN**
- Hematuria during URI + mesangial IgA = **IgA nephropathy**
- Rising creatinine + crescents = **RPGN**
- Hemoptysis + hematuria + linear IgG = **Goodpasture**
- Full house IF + wire-loop = **Lupus Class IV**`,
        mnemonics: [
          {
            text: "FULL HOUSE = Lupus (IgG, IgA, IgM, C3, C1q)",
            explanation:
              "Lupus nephritis shows all immunoglobulin classes and complement on IF",
          },
        ],
        keyPoints: [
          "MCD: foot process effacement on EM, normal LM/IF, steroid-responsive",
          "IgA: mesangial IgA, synpharyngitic, most common GN worldwide",
          "Lupus IV: most severe, wire-loop, full house IF",
          "Membranous: spike and dome, subepithelial, anti-PLA2R",
          "RPGN I (linear), II (granular), III (pauci-immune/ANCA)",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 20",
            edition: "10th",
          },
          {
            book: "Harsh Mohan Textbook of Pathology",
            chapter: "Chapter 23",
            edition: "8th",
          },
        ],
      },
      {
        layer: 5,
        slug: "glomerular-diseases-recall",
        title: "Glomerular Diseases - Active Recall",
        estimatedMinutes: 10,
        summary:
          "Flashcard-style Q&A for self-testing on glomerular diseases.",
        contentMd: `# Active Recall

**Q1:** Most common nephrotic syndrome in children?
> Minimal Change Disease (>90% respond to steroids)

**Q2:** EM finding in MCD?
> Foot process effacement; LM and IF are normal

**Q3:** IF pattern in Goodpasture syndrome?
> Linear IgG along GBM

**Q4:** Most common GN worldwide?
> IgA nephropathy (Berger disease)

**Q5:** How to differentiate IgA from PSGN timing?
> IgA: hematuria WITH URI (synpharyngitic); PSGN: 1-3 weeks AFTER strep

**Q6:** Antibodies in primary membranous nephropathy?
> Anti-PLA2R (~70%)

**Q7:** Three types of RPGN and IF patterns?
> I: Anti-GBM (linear); II: Immune complex (granular); III: ANCA (negative)

**Q8:** Full house pattern on IF?
> IgG, IgA, IgM, C3, C1q all positive = lupus nephritis

**Q9:** Kimmelstiel-Wilson nodules?
> Nodular glomerulosclerosis in diabetic nephropathy

**Q10:** Spike and dome pattern?
> Membranous nephropathy - subepithelial deposits with GBM spikes between them

**Q11:** Alport syndrome?
> X-linked COL4A5 mutation; hematuria, deafness, eye abnormalities; basket-weave GBM on EM

**Q12:** Complement abnormality in PSGN?
> Low C3 (consumption), normalizes in 6-8 weeks`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering nephrotic/nephritic syndromes and glomerulonephropathies",
        ],
        textbookRefs: [
          {
            book: "Robbins Pathologic Basis of Disease",
            chapter: "Chapter 20",
            edition: "10th",
          },
        ],
      },
    ],
  },

  // ─── Topic 2: Tubular & Interstitial Diseases ─────────────────
  {
    topicCode: "PA-MOD-06-TOP-02",
    layers: [
      { layer: 1, slug: "tubular-interstitial-diseases-foundation", title: "Tubular & Interstitial Diseases - Foundation", estimatedMinutes: 20, summary: "ATN is the most common cause of AKI. Pyelonephritis, drug-induced AIN, and analgesic nephropathy are key tubulointerstitial diseases.", contentMd: `# Tubular & Interstitial Diseases\n\n## ATN\n- Most common cause of **AKI** in hospitalized patients\n- Ischemic (shock, sepsis): patchy necrosis in PCT and thick ascending limb\n- Nephrotoxic (aminoglycosides, contrast, myoglobin): PCT predominantly\n- **Muddy brown granular casts** in urine\n- Reversible if basement membrane intact\n\n## Pyelonephritis\n### Acute\n- E. coli most common (ascending infection)\n- Risk: obstruction, VUR, catheter, pregnancy, DM\n- **WBC casts** (pathognomonic)\n\n### Chronic\n- Reflux nephropathy (VUR in children) or obstructive\n- **Thyroidization**: dilated tubules with eosinophilic casts resembling thyroid follicles\n\n## Acute Interstitial Nephritis (AIN)\n- Drug-induced Type IV hypersensitivity (NSAIDs, penicillin, PPIs, rifampicin)\n- Triad: **Fever + rash + eosinophilia** + AKI\n- Eosinophiluria (Hansel stain)\n\n## Analgesic Nephropathy\n- Chronic NSAID/phenacetin -> papillary necrosis\n- **POSTCARDS**: Pyelonephritis, Obstruction, Sickle cell, TB, Chronic analgesics, Alcohol, Renal vein thrombosis, Diabetes, Systemic vasculitis\n\n> **Clinical Pearl**: In India, Russell viper snakebite causes ATN + DIC and is an important AKI cause in rural areas.`, mnemonics: [{ text: "POSTCARDS for papillary necrosis", explanation: "P-Pyelonephritis, O-Obstruction, S-Sickle cell, T-TB, C-Chronic analgesics, A-Alcohol, R-Renal vein thrombosis, D-Diabetes, S-Systemic vasculitis" }, { text: "Muddy Brown = ATN; WBC casts = Pyelonephritis; Eosinophils = AIN", explanation: "Urinary sediment distinguishes: muddy brown casts in ATN, WBC casts in pyelonephritis, eosinophiluria in AIN" }], keyPoints: ["ATN is the most common cause of AKI in hospitalized patients", "E. coli is the most common pyelonephritis organism", "AIN triad: fever + rash + eosinophilia after new drug", "WBC casts are pathognomonic of pyelonephritis", "Thyroidization = chronic pyelonephritis", "Papillary necrosis: POSTCARDS mnemonic"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 20: Tubular and Interstitial Diseases", edition: "10th" }, { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 23: Tubulointerstitial Diseases", edition: "8th" }] },
      { layer: 2, slug: "tubular-interstitial-diseases-mechanism", title: "Tubular & Interstitial Diseases - Mechanism", estimatedMinutes: 30, summary: "ATN pathogenesis involves initiation-maintenance-recovery phases. Drug-induced AIN is Type IV hypersensitivity.", contentMd: `# Mechanisms\n\n## ATN - Three Phases\n1. **Initiation**: ischemia/toxin -> GFR decrease, oliguria, tubular detachment -> cast formation\n2. **Maintenance** (1-2 wk): sustained oliguria, hyperkalemia, acidosis, uremia\n3. **Recovery** (polyuric): tubular regeneration (if BM intact), hypokalemia risk\n\n## Ischemic vs Nephrotoxic ATN\n| Feature | Ischemic | Nephrotoxic |\n|---------|----------|-------------|\n| Necrosis | Patchy | Continuous |\n| BM | Often disrupted | Usually intact |\n| Recovery | Slower | Faster |\n\n## Nephrotoxin Mechanisms\n- **Aminoglycosides**: PCT accumulation via megalin -> lysosomal damage\n- **Contrast**: Vasoconstriction + direct toxicity + ROS\n- **Myoglobin**: Obstruction + oxidative injury + vasoconstriction\n\n## VUR Mechanism\n- Short intramural ureter -> loss of flap-valve -> reflux at poles (compound papillae)\n\n## Drug-Induced AIN\n- Type IV hypersensitivity; drug as hapten -> T cell activation\n- NOT dose-dependent (idiosyncratic)\n- Eosinophil recruitment via IL-5\n\n> **Clinical Pearl**: Aminoglycoside nephrotoxicity is significant in India due to empiric gentamicin use without drug monitoring.`, mnemonics: [{ text: "IMR = Initiation-Maintenance-Recovery for ATN phases", explanation: "Initiation (injury/oliguria), Maintenance (sustained oliguria), Recovery (polyuria/regeneration)" }, { text: "Nephrotoxic = Nice BM = Nicer recovery", explanation: "Intact basement membrane in nephrotoxic ATN allows faster tubular regeneration" }], keyPoints: ["ATN: 3 phases (initiation, maintenance, recovery)", "Intact BM in nephrotoxic ATN = better recovery", "Aminoglycosides accumulate in PCT via megalin", "VUR reflux at poles (compound papillae)", "Drug AIN = Type IV hypersensitivity, not dose-dependent"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 20: ATN Pathogenesis", edition: "10th" }, { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 23: Tubulointerstitial Mechanisms", edition: "8th" }] },
      { layer: 3, slug: "tubular-interstitial-diseases-clinical", title: "Tubular & Interstitial Diseases - Clinical Application", estimatedMinutes: 20, summary: "Clinical differentiation of pre-renal vs ATN using FENa, pyelonephritis management, and AIN diagnosis.", contentMd: `# Clinical Applications\n\n## Case 1: Ischemic ATN\n- Post-op patient, oliguria, Cr 4.5 (baseline 1.0), K+ 6.2\n- Muddy brown casts, FENa >2%\n\n## Pre-renal vs ATN\n| Parameter | Pre-renal | ATN |\n|-----------|----------|-----|\n| FENa | <1% | >2% |\n| Urine osm | >500 | <350 |\n| BUN:Cr | >20:1 | <15:1 |\n| Urine Na | <20 | >40 |\n| Casts | Hyaline | Muddy brown |\n\n## Case 2: Acute Pyelonephritis\n- 25yr pregnant female, fever, flank pain, WBC casts, E. coli\n- IV antibiotics, monitor for preterm labor\n\n## Case 3: Drug-Induced AIN\n- On amoxicillin 10 days: fever, rash, rising Cr, eosinophiluria\n- Stop drug, consider steroids\n\n## Urinalysis Guide\n| Finding | Disease |\n|---------|---------|\n| RBC casts | GN |\n| WBC casts | Pyelonephritis |\n| Muddy brown | ATN |\n| Fatty casts | Nephrotic |\n| Eosinophiluria | AIN |\n| Waxy casts | CKD |\n\n> **Clinical Pearl**: FENa <1% = pre-renal; >2% = ATN. Exception: contrast and myoglobin ATN may have FENa <1%.`, mnemonics: [{ text: "FENa <1 = Function OK (pre-renal); FENa >2 = Failure (ATN)", explanation: "FENa differentiates pre-renal (intact tubular reabsorption) from ATN (damaged tubules)" }], keyPoints: ["FENa: pre-renal <1%, ATN >2%", "WBC casts = pyelonephritis", "AIN triad: fever + rash + eosinophilia", "Muddy brown casts = ATN hallmark", "E. coli causes >80% community UTIs"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 20: Clinical Features", edition: "10th" }, { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 23: Clinicopathologic Correlations", edition: "8th" }] },
      { layer: 4, slug: "tubular-interstitial-diseases-exam", title: "Tubular & Interstitial Diseases - Exam Prep", estimatedMinutes: 15, summary: "High-yield points on tubulointerstitial diseases for NEXT/NEET PG.", contentMd: `# Exam Preparation\n\n## One-Liners\n- Most common AKI cause in hospitals: **ATN**\n- Muddy brown casts: **ATN**\n- WBC casts: **Pyelonephritis**\n- Most common UTI organism: **E. coli**\n- FENa >2%: **ATN**\n- AIN triad: **Fever + rash + eosinophilia**\n- Eosinophiluria stain: **Hansel stain**\n- Thyroidization: **Chronic pyelonephritis**\n- Russell viper: **ATN + DIC**\n- Papillary necrosis: **POSTCARDS**\n\n## Pre-renal vs ATN vs Post-renal\n| Feature | Pre-renal | ATN | Post-renal |\n|---------|----------|-----|------------|\n| FENa | <1% | >2% | Variable |\n| Urine Na | <20 | >40 | Variable |\n| BUN:Cr | >20:1 | <15:1 | Variable |\n| Casts | Hyaline | Muddy brown | None |\n| Fluids | Improves | No | Needs decompression |\n\n## Pattern Recognition\n- Post-op oliguria + muddy brown + FENa >2% = **Ischemic ATN**\n- New drug + fever + rash + eosinophilia = **AIN**\n- Fever + flank pain + WBC casts = **Pyelonephritis**\n- Chronic analgesics + papillary necrosis = **Analgesic nephropathy**\n- Child + recurrent UTI + polar scars = **Reflux nephropathy**`, mnemonics: [{ text: "HANSEL = Has Allergic Nephritis, Search EosinophiLs", explanation: "Hansel stain detects eosinophils in urine confirming AIN" }], keyPoints: ["ATN: muddy brown, FENa >2%, urine Na >40", "Pre-renal: FENa <1%, responds to fluids", "AIN: fever, rash, eosinophilia - Hansel stain", "E. coli = most common UTI/pyelonephritis organism", "Thyroidization = chronic pyelonephritis"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 20", edition: "10th" }, { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 23", edition: "8th" }] },
      { layer: 5, slug: "tubular-interstitial-diseases-recall", title: "Tubular & Interstitial Diseases - Active Recall", estimatedMinutes: 10, summary: "Flashcard Q&A for tubulointerstitial diseases.", contentMd: `# Active Recall\n\n**Q1:** Most common cause of AKI in hospitals?\n> ATN (ischemic or nephrotoxic)\n\n**Q2:** Casts in ATN?\n> Muddy brown granular casts\n\n**Q3:** FENa in pre-renal vs ATN?\n> Pre-renal <1%; ATN >2%\n\n**Q4:** Three phases of ATN?\n> Initiation (oliguria) -> Maintenance (sustained oliguria) -> Recovery (polyuria)\n\n**Q5:** Stain for urinary eosinophils?\n> Hansel stain\n\n**Q6:** Most common pyelonephritis organism?\n> E. coli\n\n**Q7:** What is thyroidization?\n> Chronic pyelonephritis - tubules with eosinophilic casts resembling thyroid follicles\n\n**Q8:** Papillary necrosis causes (POSTCARDS)?\n> Pyelonephritis, Obstruction, Sickle cell, TB, Chronic analgesics, Alcohol, Renal vein thrombosis, Diabetes, Systemic vasculitis\n\n**Q9:** Why does nephrotoxic ATN recover better?\n> Intact BM allows tubular epithelial regeneration\n\n**Q10:** AIN classic triad?\n> Fever + rash + eosinophilia with AKI after new drug\n\n**Q11:** Pathognomonic cast for pyelonephritis?\n> WBC casts\n\n**Q12:** Aminoglycoside nephrotoxicity mechanism?\n> PCT accumulation via megalin receptor -> lysosomal damage -> necrosis`, mnemonics: [], keyPoints: ["12 recall questions covering ATN, pyelonephritis, AIN, papillary necrosis"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 20", edition: "10th" }] },
    ],
  },

  // ─── Topic 3: Renal Tumors ────────────────────────────────────
  {
    topicCode: "PA-MOD-06-TOP-03",
    layers: [
      { layer: 1, slug: "renal-tumors-foundation", title: "Renal Tumors - Foundation", estimatedMinutes: 20, summary: "RCC is the most common adult renal cancer. Wilms tumor is the most common childhood renal cancer. Both have distinct genetics and presentations.", contentMd: `# Renal Tumors\n\n## RCC\n- Most common primary malignant kidney tumor in adults (50-70 yr, M:F 2:1)\n- **Clear cell** (70-80%): VHL gene loss (3p25), golden yellow cut surface\n- Subtypes: Clear cell (VHL), Papillary (MET), Chromophobe, Collecting duct\n- Classic triad (10%): Hematuria + flank pain + mass\n- **Paraneoplastic**: Polycythemia (EPO), Hypercalcemia (PTHrP), Hypertension (renin), Cushing (ACTH), Stauffer syndrome\n\n## Wilms Tumor\n- Peak 2-5 years; **Triphasic**: blastema + stroma + epithelium\n- WT1 (11p13): WAGR (deletion), Denys-Drash (point mutation)\n- WT2 (11p15.5): Beckwith-Wiedemann (LOI, IGF-2 overexpression)\n\n## Angiomyolipoma\n- Benign: vessels + muscle + fat; associated with **tuberous sclerosis**\n\n## Oncocytoma\n- Benign; mahogany brown, central scar, packed mitochondria\n\n> **Clinical Pearl**: In India, RCC often presents late. Wilms tumor is the most common abdominal malignancy in Indian children.`, mnemonics: [{ text: "WAGR = Wilms, Aniridia, GU, Retardation (WT1 deletion 11p13)", explanation: "Contiguous gene deletion including WT1 and PAX6 (aniridia gene)" }, { text: "RCC = Really Creates Confusion (paraneoplastic syndromes)", explanation: "RCC produces EPO, PTHrP, renin, ACTH - the internist's tumor" }], keyPoints: ["Clear cell RCC: most common (70-80%), VHL gene (3p25)", "Classic triad occurs in only 10%", "Wilms: triphasic, peak 2-5 years", "WAGR = WT1 deletion; Denys-Drash = WT1 point mutation; Beckwith-Wiedemann = WT2 LOI", "RCC = internist's tumor (paraneoplastic syndromes)", "Angiomyolipoma = tuberous sclerosis"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 20: Renal Tumors", edition: "10th" }, { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 23: Renal Tumors", edition: "8th" }] },
      { layer: 2, slug: "renal-tumors-mechanism", title: "Renal Tumors - Mechanism", estimatedMinutes: 30, summary: "VHL-HIF-VEGF pathway in RCC, Wilms tumor WT1/WT2 genetics, and Von Hippel-Lindau syndrome.", contentMd: `# Mechanisms\n\n## VHL-HIF Pathway\n1. VHL gene (3p25) = tumor suppressor\n2. Normal: VHL protein degrades HIF\n3. VHL loss -> HIF accumulation -> VEGF, PDGF, EPO, TGF-alpha\n4. Highly vascular tumor + paraneoplastic syndromes\n\n## VHL Syndrome (AD)\n- Bilateral RCC + cerebellar hemangioblastoma + retinal angioma + pheochromocytoma\n\n## Targeted Therapy\n| Target | Drug |\n|--------|------|\n| VEGF | Bevacizumab |\n| VEGFR | Sunitinib |\n| mTOR | Everolimus |\n| PD-1 | Nivolumab |\n\n## WT1 (11p13)\n- TF for kidney/gonad development\n- Deletion: WAGR (with PAX6)\n- Point mutation: Denys-Drash (dominant negative)\n\n## WT2 (11p15.5)\n- Imprinted region; LOI -> Beckwith-Wiedemann\n- IGF-2 biallelic expression -> overgrowth\n\n## RCC Spread\n- **Renal vein invasion** -> IVC -> right atrium (unique)\n- Hematogenous: lung (cannonball mets), bone, liver\n- Late recurrence characteristic\n\n> **Clinical Pearl**: VHL-HIF-VEGF pathway understanding led to TKI therapy (sunitinib) for metastatic RCC.`, mnemonics: [{ text: "VHL = VEGF, HIF, Loss of tumor suppression", explanation: "VHL loss -> HIF accumulation -> VEGF/EPO/PDGF overexpression" }, { text: "WT1 at p13, WT2 at p15.5 (both chromosome 11)", explanation: "WT1: WAGR (deletion)/Denys-Drash (point mutation); WT2: Beckwith-Wiedemann (LOI)" }], keyPoints: ["VHL loss -> HIF -> VEGF, EPO, PDGF", "VHL syndrome: bilateral RCC + hemangioblastoma + pheochromocytoma", "WAGR = deletion; Denys-Drash = point mutation; Beckwith-Wiedemann = LOI", "RCC invades renal vein -> IVC -> right atrium", "TKIs exploit VHL-HIF-VEGF pathway"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 20: Molecular Pathology", edition: "10th" }, { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 23: Genetics of Renal Tumors", edition: "8th" }] },
      { layer: 3, slug: "renal-tumors-clinical", title: "Renal Tumors - Clinical Application", estimatedMinutes: 20, summary: "Clinical presentations, staging, and management of RCC and Wilms tumor.", contentMd: `# Clinical Applications\n\n## Case 1: RCC\n- 58-year-old male, painless hematuria, new left varicocele\n- Labs: Hb 18 (polycythemia), elevated Ca2+\n- CT: Enhancing renal mass with renal vein involvement\n- Left varicocele not decompressing on lying down = renal vein invasion\n- Rx: Radical nephrectomy; metastatic: TKIs, immunotherapy\n\n## Case 2: Wilms Tumor\n- 3-year-old, abdominal mass found during bathing\n- Do NOT biopsy (spillage risk)\n- Favorable (triphasic) vs unfavorable (anaplasia)\n\n## Case 3: VHL Syndrome\n- 35-year-old, bilateral renal masses + cerebellar hemangioblastoma\n- Nephron-sparing surgery + annual screening\n\n## RCC Staging\n| Stage | Extent | 5yr |\n|-------|--------|-----|\n| T1 | <7cm confined | ~95% |\n| T2 | >7cm confined | ~85% |\n| T3 | Vein/perinephric | ~60% |\n| T4 | Beyond Gerota | ~20% |\n\n> **Clinical Pearl**: New-onset left varicocele in adult male that does not decompress = suspect left RCC with renal vein invasion.`, mnemonics: [{ text: "Left Varicocele = Look for Left Renal Vein tumor", explanation: "Non-decompressing left varicocele in older male = suspect RCC renal vein invasion" }], keyPoints: ["New left varicocele in older male = suspect RCC", "Wilms: do NOT biopsy (spillage)", "RCC T3 (vein invasion) is still resectable", "Stauffer syndrome: hepatic dysfunction without liver mets", "VHL: bilateral RCC + hemangioblastoma + pheochromocytoma"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 20: Clinical Features", edition: "10th" }, { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 23: Clinical Oncology", edition: "8th" }] },
      { layer: 4, slug: "renal-tumors-exam", title: "Renal Tumors - Exam Prep", estimatedMinutes: 15, summary: "High-yield exam points on renal tumors.", contentMd: `# Exam Preparation\n\n## One-Liners\n- Most common malignant renal tumor adults: **RCC (clear cell)**\n- Most common renal tumor children: **Wilms**\n- Most common benign: **Oncocytoma** (central scar, mitochondria)\n- VHL: **3p25**; WT1: **11p13**; WT2: **11p15.5**\n- RCC cut surface: **Golden yellow**\n- Most common presentation: **Hematuria (60%)**\n- Classic triad: **10% only**\n- Cannonball mets: **RCC** or choriocarcinoma\n- Wilms: **Triphasic**; unfavorable = **anaplasia**\n\n## RCC vs Wilms\n| Feature | RCC | Wilms |\n|---------|-----|-------|\n| Age | 50-70 | 2-5 |\n| Genetics | VHL | WT1/WT2 |\n| Histology | Clear cells | Triphasic |\n| Paraneoplastic | Common | Rare |\n\n## Pattern Recognition\n- Adult + hematuria + polycythemia + hypercalcemia = **RCC**\n- Child + abdominal mass + triphasic = **Wilms**\n- Bilateral RCC + hemangioblastoma = **VHL**\n- Wilms + aniridia + GU = **WAGR**\n- Mahogany brown + central scar = **Oncocytoma**`, mnemonics: [{ text: "WAGR = Deletion; Denys-Drash = Point mutation (both WT1)", explanation: "Both involve WT1 at 11p13 but different mutation types" }], keyPoints: ["Clear cell RCC: VHL loss, golden yellow", "Wilms: triphasic; anaplasia = unfavorable", "Classic triad only 10%", "RCC invades renal vein/IVC uniquely", "WAGR = deletion; DD = point mutation; BW = LOI"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 20", edition: "10th" }, { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 23", edition: "8th" }] },
      { layer: 5, slug: "renal-tumors-recall", title: "Renal Tumors - Active Recall", estimatedMinutes: 10, summary: "Flashcard Q&A on renal tumors.", contentMd: `# Active Recall\n\n**Q1:** Most common malignant renal tumor in adults?\n> RCC, clear cell type (70-80%)\n\n**Q2:** Gene mutated in clear cell RCC?\n> VHL (3p25) - HIF accumulation\n\n**Q3:** Classic triad of RCC and frequency?\n> Hematuria + pain + mass; only 10%\n\n**Q4:** Name 4 paraneoplastic syndromes of RCC.\n> Polycythemia (EPO), hypercalcemia (PTHrP), hypertension (renin), Cushing (ACTH)\n\n**Q5:** Wilms tumor histology components?\n> Blastema + stroma + epithelium (triphasic)\n\n**Q6:** WAGR vs Denys-Drash?\n> WAGR: WT1 deletion (Wilms+aniridia+GU+retardation); DD: WT1 point mutation (Wilms+mesangial sclerosis+pseudohermaphroditism)\n\n**Q7:** Unique vascular invasion of RCC?\n> Renal vein -> IVC -> right atrium\n\n**Q8:** VHL syndrome features?\n> AD; bilateral RCC + cerebellar hemangioblastoma + pheochromocytoma\n\n**Q9:** New left varicocele significance?\n> Left renal vein compression by RCC\n\n**Q10:** Most common benign renal tumor?\n> Oncocytoma (mahogany brown, central scar)\n\n**Q11:** Tumor associated with tuberous sclerosis?\n> Angiomyolipoma\n\n**Q12:** Beckwith-Wiedemann genetic defect?\n> LOI at WT2 (11p15.5) -> biallelic IGF-2`, mnemonics: [], keyPoints: ["12 recall questions on RCC, Wilms, and genetic syndromes"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 20", edition: "10th" }] },
    ],
  },

  // ─── Topic 4: Male Reproductive Pathology ─────────────────────
  {
    topicCode: "PA-MOD-06-TOP-04",
    layers: [
      { layer: 1, slug: "male-reproductive-pathology-foundation", title: "Male Reproductive Pathology - Foundation", estimatedMinutes: 20, summary: "Prostate diseases (BPH, carcinoma), testicular tumors (GCTs, sex cord-stromal), and penile carcinoma.", contentMd: `# Male Reproductive Pathology\n\n## Prostate\n### BPH\n- Transition zone hyperplasia; 50% at 50yr, 80% at 80yr\n- DHT-driven (5-alpha reductase type 2)\n- LUTS: frequency, hesitancy, nocturia, weak stream\n- Rx: Alpha-blockers (tamsulosin), 5-ARI (finasteride), TURP\n\n### Carcinoma\n- **Peripheral zone** (palpable on DRE)\n- Adenocarcinoma; Gleason score grading\n- PSA: organ-specific, NOT cancer-specific\n- Bone mets: **osteoblastic** (elevated ALP)\n\n## Testicular Tumors\n| Type | Age | Marker |\n|------|-----|--------|\n| Seminoma | 30-40 | PLAP, hCG (10%) |\n| Embryonal | 20-30 | AFP, hCG |\n| Yolk sac | Infants | AFP (always) |\n| Choriocarcinoma | 20-30 | hCG (very high) |\n| Leydig cell | Any | Androgens |\n| Lymphoma | >60 | Most common in elderly |\n\n- Cryptorchidism: 4-10x cancer risk\n- Seminoma: radiosensitive, best prognosis\n\n## Penile Carcinoma\n- SCC; HPV 16/18, phimosis\n\n> **Clinical Pearl**: Indian prostate cancer incidence is rising with aging population and PSA screening adoption.`, mnemonics: [{ text: "BPH = Central (transition); Cancer = Peripheral", explanation: "BPH: transition zone; Cancer: peripheral zone (DRE palpable)" }, { text: "Seminoma = Safe; Choriocarcinoma = Catastrophic", explanation: "Seminoma: radiosensitive, excellent prognosis; Choriocarcinoma: worst, hemorrhagic mets" }], keyPoints: ["BPH: transition zone; Cancer: peripheral zone", "PSA is organ-specific, not cancer-specific", "Gleason: sum of two most common patterns", "Seminoma: most common single GCT, radiosensitive", "Cryptorchidism: 4-10x cancer risk", "Yolk sac: most common testicular tumor in children, AFP+"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 21: Male Genital", edition: "10th" }, { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 24: Male Reproductive", edition: "8th" }] },
      { layer: 2, slug: "male-reproductive-pathology-mechanism", title: "Male Reproductive Pathology - Mechanism", estimatedMinutes: 30, summary: "DHT/5-alpha reductase in BPH, TMPRSS2-ERG fusion and AR signaling in prostate cancer, isochromosome 12p in GCTs.", contentMd: `# Mechanisms\n\n## BPH\n- 5-alpha reductase type 2: T -> DHT (most potent prostatic androgen)\n- DHT -> AR -> growth factors (FGF, TGF-beta, IGF) -> hyperplasia\n\n## Prostate Cancer\n| Alteration | Frequency | Effect |\n|-----------|-----------|--------|\n| TMPRSS2-ERG | 50% | Androgen-regulated fusion |\n| PTEN loss | 40% | PI3K/AKT activation |\n| AR amplification | CRPC | Low-androgen growth |\n| TP53 | 20% | TSG loss |\n| BRCA2 | 5-10% | DNA repair deficiency |\n- PIN: precursor; CRPC: AR splice variants\n\n## Testicular GCTs\n- **GCNIS**: precursor of all GCTs\n- **i(12p)**: virtually ALL GCTs (KRAS, CCND2)\n- Embryonal carcinoma: totipotent stem cell\n- KIT mutations in some seminomas\n\n## Gleason System\n- Pattern 3: small infiltrating glands\n- Pattern 4: fused/cribriform\n- Pattern 5: sheets/single cells\n- Grade Groups: 1(GS6), 2(3+4), 3(4+3), 4(8), 5(9-10)\n\n> **Clinical Pearl**: TMPRSS2-ERG is androgen-driven -> ADT effective initially; CRPC develops through AR mutations.`, mnemonics: [{ text: "5-AR: T -> DHT; finasteride blocks 5-AR", explanation: "5-alpha reductase type 2 in prostate; finasteride inhibits it" }, { text: "i(12p) = GCT; TMPRSS2-ERG = Prostate cancer", explanation: "Key genetic markers for testicular and prostate tumors respectively" }], keyPoints: ["DHT via 5-alpha reductase type 2 drives BPH", "TMPRSS2-ERG: most common prostate cancer fusion (50%)", "i(12p) in virtually all GCTs", "Embryonal carcinoma = totipotent GCT stem cell", "CRPC: AR amplification and splice variants"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 21: Molecular Pathology", edition: "10th" }, { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 24: Pathogenesis", edition: "8th" }] },
      { layer: 3, slug: "male-reproductive-pathology-clinical", title: "Male Reproductive Pathology - Clinical Application", estimatedMinutes: 20, summary: "Clinical presentations and management of BPH, prostate cancer, and testicular tumors.", contentMd: `# Clinical Applications\n\n## Case 1: BPH\n- 65yr, LUTS, DRE: smooth symmetric rubbery prostate, PSA 4.5\n- Rx: Tamsulosin + dutasteride; TURP if fails\n\n## Case 2: Prostate Cancer\n- 70yr, back pain, PSA 85, DRE: hard irregular nodular\n- Gleason 4+5=9, osteoblastic mets on bone scan\n- Rx: ADT (GnRH agonist + anti-androgen)\n\n## Case 3: Seminoma\n- 32yr, painless testicular mass, LDH elevated, AFP normal\n- Radical inguinal orchiectomy (NOT transscrotal)\n- AFP elevated = non-seminomatous component\n\n## Tumor Markers\n| Marker | Tumors |\n|--------|--------|\n| AFP | Yolk sac, embryonal |\n| hCG | Choriocarcinoma (high), seminoma (10%) |\n| PSA | Prostate |\n| PLAP | Seminoma |\n\n> **Clinical Pearl**: In India, many prostate cancer patients present with metastatic bone disease as initial symptom.`, mnemonics: [{ text: "AFP up = NOT pure seminoma", explanation: "Pure seminoma never makes AFP; elevated AFP = non-seminomatous component" }], keyPoints: ["BPH: smooth rubbery; Cancer: hard irregular on DRE", "PSA is organ-specific not cancer-specific", "Elevated AFP rules out pure seminoma", "Orchiectomy: inguinal not transscrotal", "Prostate mets = osteoblastic (elevated ALP)"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 21: Clinical Features", edition: "10th" }, { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 24: Clinicopathologic Correlations", edition: "8th" }] },
      { layer: 4, slug: "male-reproductive-pathology-exam", title: "Male Reproductive Pathology - Exam Prep", estimatedMinutes: 15, summary: "High-yield exam points on male reproductive pathology.", contentMd: `# Exam Preparation\n\n## One-Liners\n- BPH zone: **Transition**; Cancer: **Peripheral**\n- BPH driver: **DHT** (5-alpha reductase type 2)\n- Most common prostate fusion: **TMPRSS2-ERG (50%)**\n- Prostate bone mets: **Osteoblastic**\n- Most common single GCT: **Seminoma**\n- Children testicular: **Yolk sac** (AFP+)\n- Elderly testicular: **Lymphoma (DLBCL)**\n- Worst GCT prognosis: **Choriocarcinoma**\n- Schiller-Duval bodies: **Yolk sac**\n- Fried egg cells: **Seminoma**\n- Reinke crystals: **Leydig cell tumor**\n- i(12p): **All GCTs**\n\n## Seminoma vs NSGCT\n| | Seminoma | NSGCT |\n|--|----------|-------|\n| AFP | Never | May be elevated |\n| Radio | Sensitive | Less |\n| Prognosis | Excellent | Variable |\n\n## Pattern Recognition\n- LUTS + smooth prostate = **BPH**\n- Back pain + hard prostate + very high PSA = **Prostate cancer mets**\n- Painless testicular mass + AFP normal = **Seminoma**\n- Infant + testicular + AFP = **Yolk sac**\n- Hemorrhagic mets + very high hCG = **Choriocarcinoma**`, mnemonics: [{ text: "Seminoma = Safe; Choriocarcinoma = Catastrophic", explanation: "Best vs worst prognosis among GCTs" }], keyPoints: ["BPH = transition; Cancer = peripheral", "Seminoma: fried egg, radiosensitive, AFP normal", "Yolk sac: children, Schiller-Duval, AFP+", "Choriocarcinoma: worst, high hCG, hemorrhagic", "Lymphoma = most common testicular tumor >60"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 21", edition: "10th" }, { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 24", edition: "8th" }] },
      { layer: 5, slug: "male-reproductive-pathology-recall", title: "Male Reproductive Pathology - Active Recall", estimatedMinutes: 10, summary: "Flashcard Q&A on male reproductive pathology.", contentMd: `# Active Recall\n\n**Q1:** BPH zone vs cancer zone?\n> BPH: Transition; Cancer: Peripheral\n\n**Q2:** What converts T to DHT?\n> 5-alpha reductase type 2\n\n**Q3:** Gleason score definition?\n> Sum of two most common architectural patterns (1-5 each)\n\n**Q4:** Prostate bone mets type?\n> Osteoblastic (elevated ALP)\n\n**Q5:** Most common testicular tumor in children?\n> Yolk sac (AFP+, Schiller-Duval bodies)\n\n**Q6:** Genetic marker in all GCTs?\n> Isochromosome 12p [i(12p)]\n\n**Q7:** Why does AFP up rule out pure seminoma?\n> Seminoma never makes AFP; elevation = non-seminomatous component\n\n**Q8:** Seminoma histology?\n> Large uniform cells, clear cytoplasm, lymphocytic infiltrate (fried egg)\n\n**Q9:** Reinke crystals?\n> Leydig cell tumor\n\n**Q10:** Why inguinal orchiectomy?\n> Transscrotal risks seeding and alters lymphatic drainage\n\n**Q11:** Most common prostate cancer gene fusion?\n> TMPRSS2-ERG (~50%)\n\n**Q12:** Most common testicular tumor in >60 years?\n> Lymphoma (DLBCL)`, mnemonics: [], keyPoints: ["12 recall questions on prostate and testicular pathology"], textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 21", edition: "10th" }] },
    ],
  },
];
