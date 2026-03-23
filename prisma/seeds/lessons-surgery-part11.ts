import type { TopicLessons } from "./content-loader";

export const surgeryPart11Lessons: TopicLessons[] = [
  {
    topicCode: "SU-MOD-08-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "bph-prostate-ca-layer-1-foundation",
        title: "BPH & Prostate Carcinoma - Foundation",
        estimatedMinutes: 22,
        summary: "Anatomy of prostate, BPH pathology, prostate carcinoma epidemiology, and clinical features.",
        contentMd: `# BPH & Prostate Carcinoma - Foundation

## Prostate Anatomy
- Walnut-sized gland surrounding prostatic urethra below bladder
- Zones (McNeal): Peripheral (70%, cancer origin), Central (25%), Transition (5%, BPH origin), Anterior fibromuscular stroma
- Weight: Normal 20g; BPH can reach 100-200g
- Blood supply: Inferior vesical artery
- Venous drainage: Prostatic venous plexus (Batson plexus) → vertebral veins (route for bony metastases)
- Lymphatic drainage: Obturator and internal iliac nodes

## Benign Prostatic Hyperplasia (BPH)
### Definition
- Non-malignant enlargement of prostate from transition zone hyperplasia
- Affects 50% of men by age 50; 80% by age 80
- Both stromal and glandular hyperplasia (not hypertrophy)

### Clinical Features (LUTS - Lower Urinary Tract Symptoms)
**Storage (Irritative) Symptoms:**
- Frequency, urgency, nocturia, urge incontinence

**Voiding (Obstructive) Symptoms:**
- Hesitancy, poor stream, intermittency, straining, terminal dribbling, incomplete emptying

### IPSS (International Prostate Symptom Score)
- 7 questions scored 0-5 each; total 0-35
- Mild: 0-7; Moderate: 8-19; Severe: 20-35
- Guides treatment decisions

## Prostate Carcinoma
### Epidemiology
- Most common male cancer in many countries; second most common cancer death
- Incidence rising in India (especially urban; PSA screening effect)
- Peak age: >65 years; rare before 50
- Risk factors: Age, family history, African descent, high-fat diet, BRCA2 mutation

### Pathology
- 95% adenocarcinoma; arises from peripheral zone (hence palpable on DRE)
- Gleason grading: Pattern 1-5 (most common + second most common); score 2-10
- Grade Group (ISUP): 1 (Gleason 6) to 5 (Gleason 9-10)
- Multifocal in 85% of cases

### Clinical Presentation
- **Early**: Often asymptomatic; detected by elevated PSA or DRE
- **Local**: LUTS (similar to BPH), hematuria, hemospermia
- **Advanced**: Bone pain (especially lower back, pelvis), pathological fractures
- **Metastatic**: Osteoblastic (sclerotic) bony metastases (unlike most cancers which are osteolytic)`,
        mnemonics: [
          { text: "BPH = Transition zone; Cancer = Peripheral zone", explanation: "BPH arises from transition zone (periurethral); cancer from peripheral zone (palpable on DRE)" },
          { text: "Prostate cancer: Osteoblastic (sclerotic) mets, NOT osteolytic", explanation: "Unlike most cancers, prostate cancer causes bone-forming metastases" },
        ],
        keyPoints: [
          "BPH: transition zone hyperplasia; 50% by age 50, 80% by age 80",
          "Prostate cancer: peripheral zone adenocarcinoma; Gleason grading system",
          "LUTS: storage (frequency, urgency) and voiding (hesitancy, poor stream) symptoms",
          "Prostate cancer metastases: osteoblastic (sclerotic) bone lesions via Batson plexus",
          "IPSS score guides BPH treatment: mild (0-7), moderate (8-19), severe (20-35)",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 32: Prostate", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 78: The Prostate", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "bph-prostate-ca-layer-2-mechanism",
        title: "BPH & Prostate Carcinoma - Mechanism",
        estimatedMinutes: 22,
        summary: "Hormonal pathophysiology of BPH, DHT role, and prostate cancer molecular biology and staging.",
        contentMd: `# BPH & Prostate Carcinoma - Mechanism

## BPH Pathophysiology
### Hormonal Basis
- Testosterone → 5-alpha reductase → Dihydrotestosterone (DHT)
- DHT is the primary androgen responsible for prostatic growth
- DHT binds androgen receptors → stimulates stromal and glandular proliferation
- Estrogen may play permissive role (increases androgen receptor expression)
- 5-alpha reductase inhibitors (finasteride, dutasteride) block this conversion

### Bladder Response to Obstruction
1. **Compensatory phase**: Detrusor hypertrophy → increased contractility → maintains flow
2. **Decompensation**: Detrusor fatigue → incomplete emptying → residual urine
3. **Failure**: Chronic retention → overflow incontinence → back-pressure on kidneys

### Complications of BPH
- Acute urinary retention (AUR): Complete inability to void; painful
- Chronic retention: Painless, large residual volumes, overflow incontinence
- Recurrent UTI (stagnant urine), bladder stones
- Obstructive uropathy: Bilateral hydroureteronephrosis → renal failure
- Hematuria (dilated prostatic veins)

## Prostate Carcinoma Molecular Biology
### Androgen Dependence
- Prostate cancer is androgen-dependent (initially)
- Testosterone → DHT → stimulates cancer growth
- Androgen deprivation therapy (ADT) is first-line for metastatic disease
- Castration-resistant prostate cancer (CRPC): Eventually develops despite low testosterone

### Key Molecular Pathways
- TMPRSS2-ERG fusion: Most common genetic alteration (50%); androgen-regulated
- PTEN loss: Tumor suppressor; associated with aggressive disease
- BRCA2 mutation: Increased risk; more aggressive course
- AR amplification: Mechanism of castration resistance

## Staging (TNM)
- T1: Clinically inapparent (incidental on TURP or biopsy for elevated PSA)
- T2: Confined to prostate (a: one lobe <50%, b: one lobe >50%, c: both lobes)
- T3: Extracapsular extension (a) or seminal vesicle invasion (b)
- T4: Invasion of adjacent structures (bladder, rectum, pelvic wall)
- N1: Regional lymph node metastases
- M1: Distant metastases (M1a: non-regional nodes, M1b: bone, M1c: other sites)

## Gleason Grading
- Two most common patterns scored 1-5 each; added together
- Gleason 6 (3+3): Low grade; excellent prognosis
- Gleason 7 (3+4 or 4+3): Intermediate; 4+3 more aggressive than 3+4
- Gleason 8-10: High grade; poor prognosis
- Grade Group: 1 (Gleason ≤6), 2 (3+4), 3 (4+3), 4 (8), 5 (9-10)`,
        mnemonics: [
          { text: "DHT = Driver of BPH; 5-alpha reductase = enzyme; Finasteride = blocker", explanation: "DHT is the active androgen in prostate; blocking its formation shrinks the gland" },
          { text: "Gleason 3+4 < 4+3: Primary pattern matters more", explanation: "4+3=7 is more aggressive than 3+4=7 despite same total score" },
        ],
        keyPoints: [
          "DHT (via 5-alpha reductase) drives BPH; finasteride/dutasteride block this",
          "BPH complications: AUR, chronic retention, UTI, bladder stones, obstructive nephropathy",
          "Prostate cancer: androgen-dependent initially; becomes castration-resistant",
          "Gleason grading: sum of two most common patterns; Grade Group 1-5",
          "T staging: T1 incidental, T2 confined, T3 extracapsular, T4 adjacent invasion",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 32", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 78", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "bph-prostate-ca-layer-3-clinical",
        title: "BPH & Prostate Carcinoma - Clinical",
        estimatedMinutes: 25,
        summary: "DRE findings, PSA interpretation, TURP, and prostate cancer treatment by stage.",
        contentMd: `# BPH & Prostate Carcinoma - Clinical Management

## Digital Rectal Examination (DRE)
### BPH
- Smooth, firm, enlarged prostate; median sulcus preserved
- Rubbery consistency; non-tender
- Cannot assess anterior portion (only posterior)

### Prostate Cancer
- Hard, nodular, irregular prostate; median sulcus may be obliterated
- Fixed (T4) suggests local invasion
- 30-50% of cancers not palpable (anterior/small tumors)

## PSA (Prostate-Specific Antigen)
- Normal: <4 ng/mL (age-adjusted cutoffs exist)
- PSA 4-10 ng/mL: Gray zone; 25% chance of cancer
- PSA >10 ng/mL: High suspicion; >50% chance of cancer
- PSA density (PSA/prostate volume): >0.15 suspicious
- PSA velocity: Rise >0.75 ng/mL/year suspicious
- Free-to-total PSA ratio: <10% suggests cancer; >25% suggests BPH
- PSA is organ-specific, NOT cancer-specific (elevated in BPH, prostatitis, UTI, catheterization)

## BPH Management
### Medical (First-line for Moderate Symptoms)
- **Alpha-blockers** (tamsulosin, prazosin): Relax smooth muscle; rapid symptom relief
- **5-alpha reductase inhibitors** (finasteride, dutasteride): Shrink gland; takes 3-6 months
- **Combination therapy**: Alpha-blocker + 5-ARI for large prostates (>40g)
- **PDE5 inhibitors** (tadalafil): For concurrent LUTS + erectile dysfunction

### Surgical
- **TURP (Transurethral Resection of Prostate)**: Gold standard surgical treatment
  - For moderate-severe symptoms failing medical therapy or complications
  - Prostate <80g; complications: TUR syndrome (dilutional hyponatremia from glycine absorption), retrograde ejaculation (75%), bleeding
- **Open prostatectomy** (Millin retropubic or Freyer suprapubic): Prostate >80g
- **Laser procedures**: HoLEP (Holmium Laser Enucleation); becoming new gold standard; any size prostate
- **UroLift/Rezum**: Minimally invasive options for smaller prostates

## Prostate Cancer Management
### Localized Disease (T1-T2)
- **Active surveillance**: Low-risk (Gleason 6, PSA <10, T1-T2a); monitor with PSA/DRE/biopsy
- **Radical prostatectomy**: Curative; open, laparoscopic, or robotic; remove prostate + seminal vesicles
- **Radical radiotherapy**: External beam or brachytherapy; alternative to surgery
- Complications: Erectile dysfunction, urinary incontinence

### Locally Advanced (T3-T4)
- Radical radiotherapy + androgen deprivation therapy (ADT) for 2-3 years
- Radical prostatectomy in selected cases

### Metastatic Disease
- **ADT** (androgen deprivation therapy): First-line
  - Bilateral orchidectomy (surgical castration): Simple, cheap, immediate
  - LHRH agonists (leuprolide, goserelin): Medical castration; initial testosterone flare
  - LHRH antagonists (degarelix): No flare
  - Anti-androgens (bicalutamide): Block androgen receptor
- **CRPC (Castration-Resistant)**: Abiraterone, enzalutamide, docetaxel chemotherapy
- **Bone metastases**: Zoledronic acid or denosumab; palliative radiotherapy for pain`,
        mnemonics: [
          { text: "PSA: organ-Specific, NOT cancer-Specific", explanation: "Elevated in BPH, prostatitis, UTI, catheterization - not just cancer" },
          { text: "TURP = Gold standard for BPH <80g; HoLEP = any size", explanation: "Surgical options based on prostate volume" },
        ],
        keyPoints: [
          "DRE: BPH = smooth, firm, sulcus preserved; Cancer = hard, nodular, irregular",
          "PSA is organ-specific not cancer-specific; free/total ratio helps differentiate",
          "BPH: alpha-blockers (quick relief) + 5-ARI (shrink gland); TURP if medical fails",
          "Localized prostate cancer: active surveillance (low risk) or radical prostatectomy/RT",
          "Metastatic: ADT first-line (orchidectomy or LHRH agonists); CRPC: abiraterone/enzalutamide",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 32", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 78", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "bph-prostate-ca-layer-4-exam",
        title: "BPH & Prostate Carcinoma - Exam Prep",
        estimatedMinutes: 18,
        summary: "High-yield exam facts on BPH and prostate cancer for NEXT pattern questions.",
        contentMd: `# BPH & Prostate Carcinoma - Exam Prep

## Must-Know Facts
- BPH: Transition zone; Cancer: Peripheral zone
- BPH: 50% by 50 years; 80% by 80 years
- Most common presentation of prostate cancer: Elevated PSA (asymptomatic)
- Prostate cancer mets: Osteoblastic (sclerotic) bone lesions
- Gleason score: Sum of two patterns; primary pattern matters more
- TURP: Gold standard for BPH <80g; TUR syndrome = dilutional hyponatremia

## Common Exam Traps
- "Elderly male with back pain + raised PSA + sclerotic bone lesions" = Prostate cancer with bony mets
- "Hard nodular prostate on DRE" = Suspect cancer; needs biopsy
- "Smooth enlarged prostate + LUTS" = BPH
- "PSA 6 ng/mL" = Gray zone; needs free/total ratio and possible biopsy
- "Acute urinary retention in BPH" = Catheterize → alpha-blocker → consider surgery
- "LHRH agonist causing initial worsening" = Testosterone flare; use anti-androgen cover

## Treatment Decision Tree
### BPH
- Mild (IPSS 0-7): Watchful waiting + lifestyle
- Moderate (8-19): Alpha-blocker ± 5-ARI
- Severe (20-35) or complications: TURP/HoLEP

### Prostate Cancer
- Low risk (Gleason 6, PSA <10, T1-2a): Active surveillance
- Intermediate/High risk localized: Radical prostatectomy or radical RT
- Locally advanced: RT + ADT (2-3 years)
- Metastatic: ADT (orchidectomy/LHRH agonist)
- CRPC: Abiraterone/Enzalutamide/Docetaxel

## High-Yield Questions
- Drug causing testosterone flare = LHRH agonists (leuprolide)
- No flare agent = LHRH antagonist (degarelix)
- Most common complication of TURP = Retrograde ejaculation (75%)
- TUR syndrome = Dilutional hyponatremia from glycine irrigation absorption
- Raised ALP + PSA + sclerotic mets = Prostate cancer until proven otherwise`,
        mnemonics: [
          { text: "BPH Treatment: Alpha (quick) + 5-ARI (shrink) → TURP if fails", explanation: "Stepwise BPH management from medical to surgical" },
          { text: "LHRH Agonist = Flare first; Antagonist = No flare", explanation: "Critical pharmacology distinction for prostate cancer treatment" },
        ],
        keyPoints: [
          "BPH = transition zone, smooth on DRE; Cancer = peripheral zone, hard nodular",
          "PSA gray zone 4-10: use free/total ratio; <10% = suspect cancer",
          "TURP: gold standard BPH surgery; retrograde ejaculation most common complication",
          "Prostate cancer: active surveillance for low risk; ADT for metastatic",
          "Osteoblastic mets + raised PSA + raised ALP = prostate cancer",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 32", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "bph-prostate-ca-layer-5-active-recall",
        title: "BPH & Prostate Carcinoma - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on BPH and prostate cancer.",
        contentMd: `# Active Recall - BPH & Prostate Carcinoma

**Q1:** Which zone does BPH arise from vs prostate cancer?
**A1:** BPH: Transition zone (periurethral, 5% of gland). Cancer: Peripheral zone (70% of gland, palpable on DRE).

**Q2:** What is the role of DHT in BPH?
**A2:** DHT (converted from testosterone by 5-alpha reductase) binds androgen receptors and drives prostatic stromal and glandular hyperplasia. Finasteride/dutasteride block this enzyme.

**Q3:** What are the complications of untreated BPH?
**A3:** Acute urinary retention, chronic retention with overflow incontinence, recurrent UTIs, bladder stones, bilateral hydroureteronephrosis, and obstructive renal failure.

**Q4:** How do you interpret PSA values?
**A4:** <4: normal; 4-10: gray zone (25% cancer risk, check free/total ratio); >10: high suspicion (>50% cancer). PSA is organ-specific not cancer-specific; elevated in BPH, prostatitis, UTI.

**Q5:** What is TUR syndrome?
**A5:** Dilutional hyponatremia from absorption of hypotonic glycine irrigation fluid during TURP. Symptoms: confusion, nausea, visual disturbance, seizures. Treatment: IV hypertonic saline.

**Q6:** What is the Gleason grading system?
**A6:** Sum of two most common histological patterns (each 1-5). Score ranges 2-10. Gleason 6 = low risk; 7 = intermediate (3+4 better than 4+3); 8-10 = high risk.

**Q7:** Why are prostate cancer bone metastases osteoblastic?
**A7:** Prostate cancer cells secrete factors (endothelin-1, BMPs) that stimulate osteoblast activity, causing sclerotic (bone-forming) metastases. Appear as dense white areas on X-ray/CT.

**Q8:** What is the first-line treatment for metastatic prostate cancer?
**A8:** Androgen deprivation therapy (ADT): Bilateral orchidectomy (surgical castration) or LHRH agonists (leuprolide/goserelin) with anti-androgen cover to prevent flare.

**Q9:** What is castration-resistant prostate cancer (CRPC)?
**A9:** Cancer progresses despite castrate testosterone levels (<50 ng/dL). Mechanisms: AR amplification, mutations, intratumoral androgen synthesis. Treatment: abiraterone, enzalutamide, docetaxel.

**Q10:** What is active surveillance in prostate cancer?
**A10:** Monitoring low-risk cancer (Gleason 6, PSA <10, T1-2a) with regular PSA, DRE, and repeat biopsies. Avoids treatment side effects. Intervention if disease progresses.

**Q11:** What are the surgical options for BPH by prostate size?
**A11:** <80g: TURP (gold standard). >80g: Open prostatectomy (Millin/Freyer). Any size: HoLEP (Holmium laser enucleation, becoming new gold standard).

**Q12:** What is the role of MRI in prostate cancer?
**A12:** Multiparametric MRI (mpMRI): Detects clinically significant cancer, guides targeted biopsy (MRI-TRUS fusion), and stages local disease (T staging, extracapsular extension, seminal vesicle invasion).`,
        mnemonics: [
          { text: "Prostate Cancer Mets: Bone (osteoblastic) + Raised PSA + Raised ALP", explanation: "Classic triad suggesting metastatic prostate cancer" },
          { text: "ADT options: Orchidectomy (surgical) or LHRH agonist (medical) + anti-androgen cover", explanation: "First-line for metastatic prostate cancer" },
        ],
        keyPoints: [
          "BPH: transition zone, DHT-driven, 5-ARI treatment; Cancer: peripheral zone, Gleason graded",
          "PSA: organ-specific not cancer-specific; gray zone 4-10 needs free/total ratio",
          "TURP gold standard for BPH <80g; TUR syndrome = dilutional hyponatremia",
          "Prostate cancer: active surveillance for low risk; ADT for metastatic; CRPC needs newer agents",
          "Osteoblastic mets via Batson venous plexus; raised ALP + PSA diagnostic",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 32", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 78", edition: "28th" },
        ],
      },
    ],
  },
];
