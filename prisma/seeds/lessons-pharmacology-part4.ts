import type { TopicLessons } from "./content-loader";

export const pharmacologyPart4Lessons: TopicLessons[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODULE 7 — ENDOCRINE PHARMACOLOGY (Topics 2-4)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ─── Topic 2: Thyroid & Antithyroid Drugs ──────────────────
  {
    topicCode: "PH-MOD-07-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "thyroid-antithyroid-foundation",
        title: "Thyroid & Antithyroid Drugs - Foundation",
        estimatedMinutes: 20,
        summary:
          "Thyroid hormones (T3, T4) regulate metabolism, growth, and development. Hypothyroidism is treated with levothyroxine (T4 replacement). Hyperthyroidism is treated with antithyroid drugs (carbimazole/methimazole, propylthiouracil), radioactive iodine, or surgery.",
        contentMd: `# Thyroid & Antithyroid Drugs

## Thyroid Hormone Physiology
- **T4 (Thyroxine)**: Major secretory product, long half-life (7 days), converted to T3 peripherally
- **T3 (Triiodothyronine)**: Active form, 5x more potent than T4, short half-life (1 day)
- Conversion: T4 -> T3 by **deiodinase** enzymes (D1, D2)
- Regulation: TRH -> TSH -> T3/T4 (negative feedback)

## Drugs for Hypothyroidism

| Drug | Use | Notes |
|------|-----|-------|
| **Levothyroxine (L-T4)** | DOC for hypothyroidism | Synthetic T4, oral, long half-life |
| **Liothyronine (L-T3)** | Myxedema coma | Faster onset, IV available |
| **Desiccated thyroid** | Historical | Animal-derived, not recommended |

### Levothyroxine Key Points
- Take on **empty stomach** (30-60 min before breakfast)
- Narrow therapeutic index - requires dose titration with TSH monitoring
- Start low in elderly and cardiac patients (risk of angina, arrhythmia)

## Drugs for Hyperthyroidism

### Antithyroid Drugs (Thionamides)
| Drug | Mechanism | Notes |
|------|-----------|-------|
| **Carbimazole** (prodrug -> Methimazole) | Inhibits TPO (thyroid peroxidase) | DOC in India, once daily dosing |
| **Propylthiouracil (PTU)** | Inhibits TPO + peripheral T4->T3 conversion | Preferred in 1st trimester pregnancy, thyroid storm |

### Other Treatments
| Treatment | Mechanism | Use |
|-----------|-----------|-----|
| **Radioactive Iodine (I-131)** | Destroys thyroid tissue | Definitive treatment for Graves |
| **Beta-blockers (Propranolol)** | Symptomatic relief + blocks T4->T3 | Rapid symptom control |
| **Lugol's Iodine** | Wolff-Chaikoff effect (inhibits thyroid) | Preoperative preparation |
| **Surgery** | Thyroidectomy | Large goiter, suspicious nodules |

> **Clinical Pearl**: In India, iodine deficiency is the commonest cause of hypothyroidism (goitrous). Universal salt iodization has reduced prevalence significantly but hypothyroidism from Hashimoto's thyroiditis is increasing in urban areas.`,
        mnemonics: [
          {
            text: "PTU does TWO things: blocks Peroxidase (TPO) AND Peripheral T4->T3 conversion",
            explanation:
              "Propylthiouracil has dual action: inhibits thyroid peroxidase (like methimazole) AND blocks peripheral conversion of T4 to T3 by deiodinase. This dual action makes it useful in thyroid storm.",
          },
          {
            text: "Carbimazole = Car before Meals: take carbimazole, and levothyroxine on empty stomach before meals",
            explanation:
              "Both thyroid and antithyroid drugs have absorption considerations. Levothyroxine must be taken on an empty stomach 30-60 min before food.",
          },
        ],
        keyPoints: [
          "T4 is the major thyroid secretion; T3 is the active form (5x more potent)",
          "Levothyroxine (T4): DOC for hypothyroidism, take on empty stomach",
          "Carbimazole/Methimazole: DOC for hyperthyroidism, inhibits TPO",
          "PTU: preferred in 1st trimester pregnancy and thyroid storm (dual action)",
          "Radioactive iodine (I-131): definitive treatment for Graves disease",
          "Propranolol: rapid symptom control in thyrotoxicosis + blocks T4->T3 conversion",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 20 - Thyroid Drugs", page: "286-300", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 43 - Thyroid", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "thyroid-antithyroid-mechanism",
        title: "Thyroid & Antithyroid Drugs - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms of thyroid hormone synthesis, thionamide action on TPO, Wolff-Chaikoff effect, and thyroid storm management.",
        contentMd: `# Detailed Mechanisms

## Thyroid Hormone Synthesis Steps
1. **Iodide trapping**: NIS (Na+/I- symporter) transports I- into thyroid follicular cell
2. **Oxidation**: Thyroid peroxidase (TPO) oxidizes I- to I2
3. **Organification**: TPO iodinates tyrosine residues on thyroglobulin (MIT, DIT)
4. **Coupling**: TPO couples DIT + DIT = T4; DIT + MIT = T3
5. **Storage**: Thyroglobulin stored in colloid
6. **Secretion**: Endocytosis, proteolysis, release of T3/T4 into blood

### Drug Targets in Synthesis
| Step | Drug | Effect |
|------|------|--------|
| Iodide trapping | Perchlorate, Thiocyanate | Competitive NIS inhibition |
| Oxidation + Organification | Carbimazole, PTU | Inhibit TPO |
| Coupling | Carbimazole, PTU | Also inhibit coupling |
| Peripheral T4->T3 | PTU, Propranolol, Corticosteroids | Inhibit deiodinase |
| Hormone release | Lugol's Iodine | Wolff-Chaikoff effect |
| Tissue destruction | Radioactive Iodine (I-131) | Beta radiation destroys follicles |

## Thionamide Mechanism (Detail)
- Carbimazole is a **prodrug** converted to **methimazole** in vivo
- Methimazole/PTU inhibit **TPO** (thyroid peroxidase)
- Block: oxidation of iodide, organification of tyrosine, coupling of iodotyrosines
- Do NOT block release of preformed hormone -> **therapeutic effect delayed 3-4 weeks** (until stored hormone depleted)

## Wolff-Chaikoff Effect
- **High iodide levels** paradoxically inhibit thyroid hormone synthesis
- Mechanism: excess iodide inhibits TPO and organification
- **Temporary** (thyroid escapes in 2-4 weeks)
- Clinical use: **Lugol's iodine** (KI + I2) given 10 days before thyroidectomy to reduce vascularity and hormone levels

## Thyroid Storm (Thyrotoxic Crisis) Management
| Drug | Role | Order |
|------|------|-------|
| **PTU** (large doses) | Block synthesis + peripheral conversion | First |
| **Lugol's Iodine** | Block release (give 1 hr AFTER PTU) | Second |
| **Propranolol** | Symptomatic relief, block T4->T3 | Immediate |
| **Hydrocortisone** | Block T4->T3, adrenal support | Concurrent |
| **Cooling, fluids** | Supportive | Concurrent |

> **Key**: Give PTU BEFORE iodine. If iodine given first, it provides substrate for more hormone synthesis. PTU first blocks utilization of iodine.`,
        mnemonics: [
          {
            text: "Thyroid Storm = PTU-I-P-H: PTU first, then Iodine (1 hr later), Propranolol, Hydrocortisone",
            explanation:
              "Order of drug administration in thyroid storm: PTU first (blocks synthesis + conversion), then Lugol's iodine 1 hour later (blocks release), with propranolol (symptoms) and hydrocortisone (blocks conversion + adrenal support).",
          },
        ],
        keyPoints: [
          "Thyroid synthesis: NIS trapping -> TPO oxidation -> organification -> coupling -> storage -> release",
          "Thionamides (carbimazole/PTU) inhibit TPO - effect delayed 3-4 weeks",
          "PTU additionally blocks peripheral T4->T3 conversion (unlike methimazole)",
          "Wolff-Chaikoff effect: excess iodide temporarily inhibits thyroid synthesis",
          "Thyroid storm: PTU first, then iodine 1 hour later (never iodine alone first)",
          "Propranolol and corticosteroids both inhibit peripheral T4->T3 conversion",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 20 - Thyroid Drugs", page: "290-298", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 43", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "thyroid-antithyroid-clinical",
        title: "Thyroid & Antithyroid Drugs - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical management of hypothyroidism and hyperthyroidism, pregnancy considerations, adverse effects, and monitoring.",
        contentMd: `# Clinical Applications

## Hypothyroidism Management
- **Levothyroxine**: 1.6 mcg/kg/day (adult), start lower in elderly (25-50 mcg/day)
- Monitor: TSH every 6-8 weeks until stable, then annually
- **Drug interactions**: calcium, iron, antacids reduce absorption (separate by 4 hours)
- **Myxedema coma**: IV liothyronine (T3) + IV hydrocortisone (rule out adrenal crisis)

## Hyperthyroidism Management

### Graves Disease
1. **Antithyroid drugs**: Carbimazole 20-40 mg/day for 12-18 months (titration or block-replace)
2. **Radioactive iodine (I-131)**: Single oral dose, definitive; causes hypothyroidism in ~80%
3. **Surgery**: Subtotal thyroidectomy for large goiter or failed medical therapy

### Adverse Effects of Antithyroid Drugs
| ADR | Carbimazole/Methimazole | PTU |
|-----|----------------------|-----|
| Agranulocytosis | 0.1-0.5% (dose-dependent) | 0.1-0.5% |
| Hepatotoxicity | Cholestatic (milder) | Fulminant hepatic necrosis (severe) |
| Skin rash | Common | Common |
| Teratogenicity | Aplasia cutis (1st trimester) | Less teratogenic |

### Pregnancy and Thyroid
| Trimester | Hyperthyroidism | Hypothyroidism |
|-----------|----------------|----------------|
| 1st | **PTU** (less teratogenic) | Levothyroxine (increase dose 30-50%) |
| 2nd/3rd | **Methimazole** (switch from PTU to avoid hepatotoxicity) | Levothyroxine |
| All | Radioactive iodine CONTRAINDICATED | TSH monitoring every 4 weeks |

> **Clinical Pearl**: Subclinical hypothyroidism (elevated TSH, normal T4) is very common in India, especially in women. Treatment with levothyroxine is indicated when TSH >10 mIU/L or if symptomatic/pregnant.

## Monitoring
| Drug | Monitor |
|------|---------|
| Levothyroxine | TSH every 6-8 weeks initially |
| Carbimazole | CBC (agranulocytosis), LFTs |
| PTU | LFTs (fulminant hepatitis risk), CBC |
| I-131 | Annual TSH (eventual hypothyroidism) |`,
        mnemonics: [
          {
            text: "PTU in Pregnancy Trimester 1, then switch to Methimazole: P for Pregnancy first trimester",
            explanation:
              "PTU is preferred in the first trimester of pregnancy (less teratogenic than methimazole which causes aplasia cutis). Switch to methimazole in 2nd/3rd trimester to avoid PTU-related hepatotoxicity.",
          },
        ],
        keyPoints: [
          "Levothyroxine: 1.6 mcg/kg/day, take empty stomach, separate from calcium/iron by 4 hours",
          "Carbimazole: DOC for Graves, 12-18 month course, monitor CBC for agranulocytosis",
          "PTU: preferred in 1st trimester pregnancy and thyroid storm",
          "Methimazole: switch to in 2nd/3rd trimester (PTU hepatotoxicity risk)",
          "I-131: definitive, contraindicated in pregnancy, causes eventual hypothyroidism",
          "Myxedema coma: IV T3 + IV hydrocortisone",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 20", edition: "8th" },
          { book: "Harrison's", chapter: "Thyroid Disorders", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "thyroid-antithyroid-exam",
        title: "Thyroid & Antithyroid Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts for thyroid pharmacology.",
        contentMd: `# Exam High Yield

## One-Liners
- DOC for hypothyroidism: **Levothyroxine (T4)**
- Active thyroid hormone: **T3 (5x more potent than T4)**
- T4 to T3 conversion enzyme: **Deiodinase (D1, D2)**
- Drugs blocking T4->T3: **PTU, Propranolol, Corticosteroids**
- DOC for hyperthyroidism: **Carbimazole (prodrug of methimazole)**
- Antithyroid drug with dual mechanism: **PTU (TPO + deiodinase inhibition)**
- Antithyroid drug in 1st trimester: **PTU**
- Methimazole teratogenic effect: **Aplasia cutis**
- Most serious ADR of antithyroid drugs: **Agranulocytosis**
- PTU-specific serious ADR: **Fulminant hepatic necrosis**
- Wolff-Chaikoff effect: **Excess iodide inhibits thyroid synthesis**
- Jod-Basedow phenomenon: **Iodide-induced hyperthyroidism (in iodine-deficient patients)**
- Thyroid storm drug order: **PTU first, then iodine (1 hr later)**
- Definitive treatment for Graves: **I-131 (radioactive iodine)**
- Drug for myxedema coma: **IV Liothyronine (T3) + IV Hydrocortisone**

## Comparison: Methimazole vs PTU

| Feature | Methimazole/Carbimazole | PTU |
|---------|----------------------|-----|
| Potency | 10x more potent | Lower |
| Dosing | Once daily | TDS (short half-life) |
| Blocks T4->T3 | No | Yes |
| Pregnancy (1st tri) | Avoid (aplasia cutis) | Preferred |
| Hepatotoxicity | Cholestatic (mild) | Fulminant necrosis |
| Preferred for | Long-term treatment | Thyroid storm, 1st trimester |

## Previous Year Themes
- Steps of thyroid hormone synthesis and drug targets
- PTU vs methimazole comparison
- Thyroid storm management order
- Wolff-Chaikoff effect
- Thyroid drugs in pregnancy`,
        mnemonics: [
          {
            text: "Wolff-Chaikoff = WOLF stops CHAInsaw: excess iodide STOPS thyroid synthesis (like a wolf stopping a chainsaw)",
            explanation:
              "The Wolff-Chaikoff effect: high iodide levels paradoxically inhibit organification and thyroid hormone synthesis. Temporary effect, thyroid escapes in 2-4 weeks.",
          },
        ],
        keyPoints: [
          "T3: active form, 5x potent; T4: major secretion, long half-life",
          "PTU: dual action (TPO + peripheral conversion), preferred 1st trimester and thyroid storm",
          "Methimazole: more potent, once daily, but teratogenic (aplasia cutis)",
          "Thyroid storm: PTU first, then iodine 1 hour later",
          "Agranulocytosis: most serious ADR of thionamides, monitor CBC",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 20", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "thyroid-antithyroid-recall",
        title: "Thyroid & Antithyroid Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for thyroid pharmacology.",
        contentMd: `# Active Recall

**Q1:** What is the DOC for hypothyroidism and how should it be taken?
> Levothyroxine (synthetic T4), taken on empty stomach 30-60 min before breakfast. Separate from calcium/iron by 4 hours.

**Q2:** What is the mechanism of carbimazole?
> Prodrug converted to methimazole, which inhibits thyroid peroxidase (TPO), blocking iodide oxidation, organification, and coupling steps of thyroid hormone synthesis.

**Q3:** How does PTU differ from methimazole?
> PTU has dual action: inhibits TPO (like methimazole) AND blocks peripheral T4 to T3 conversion by inhibiting deiodinase. Methimazole does not block peripheral conversion.

**Q4:** What is the Wolff-Chaikoff effect?
> High iodide levels paradoxically inhibit thyroid hormone synthesis by blocking organification. Used clinically: Lugol's iodine before thyroid surgery. Effect is temporary (thyroid escapes in 2-4 weeks).

**Q5:** What is the correct drug order in thyroid storm?
> PTU first (blocks synthesis + conversion), then Lugol's iodine 1 hour later (blocks release). Also: propranolol (symptom control + blocks T4->T3) and hydrocortisone (adrenal support + blocks conversion).

**Q6:** Why is PTU preferred in the first trimester of pregnancy?
> Methimazole crosses placenta more readily and is associated with aplasia cutis and choanal atresia. PTU is considered less teratogenic in the first trimester.

**Q7:** What is the most serious ADR of antithyroid drugs?
> Agranulocytosis (0.1-0.5%) - patients must be warned to report sore throat, fever, or mouth ulcers immediately.

**Q8:** What is the definitive treatment for Graves disease?
> Radioactive iodine (I-131) - destroys thyroid tissue by beta radiation. Causes hypothyroidism in ~80% of patients (requires lifelong levothyroxine).

**Q9:** What drugs inhibit peripheral T4 to T3 conversion?
> PTU, Propranolol, and Corticosteroids (all three inhibit type 1 deiodinase).

**Q10:** How is myxedema coma treated?
> IV liothyronine (T3) for rapid onset + IV hydrocortisone (to prevent adrenal crisis, which may coexist). Supportive care with warming, fluids, ventilation.`,
        mnemonics: [],
        keyPoints: [
          "10 recall questions covering thyroid synthesis, drug mechanisms, clinical management, and emergency treatment",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 20", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 3: Corticosteroids ──────────────────────────────
  {
    topicCode: "PH-MOD-07-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "corticosteroids-foundation",
        title: "Corticosteroids - Foundation",
        estimatedMinutes: 20,
        summary:
          "Corticosteroids include glucocorticoids (cortisol) and mineralocorticoids (aldosterone). Synthetic glucocorticoids (prednisolone, dexamethasone, hydrocortisone) are widely used for anti-inflammatory and immunosuppressive effects. Chronic use causes HPA axis suppression and Cushing syndrome.",
        contentMd: `# Corticosteroids

## Classification

| Type | Natural | Synthetic | Function |
|------|---------|-----------|----------|
| **Glucocorticoid** | Cortisol (Hydrocortisone) | Prednisolone, Dexamethasone, Methylprednisolone, Betamethasone | Anti-inflammatory, immunosuppressive, metabolic |
| **Mineralocorticoid** | Aldosterone | Fludrocortisone | Na+ retention, K+ excretion |

## Comparison of Synthetic Glucocorticoids

| Drug | Anti-inflammatory Potency | Mineralocorticoid Potency | Equivalent Dose | Half-life |
|------|--------------------------|--------------------------|----------------|-----------|
| Hydrocortisone | 1 | 1 | 20 mg | Short (8 hr) |
| Prednisolone | 4 | 0.8 | 5 mg | Intermediate (12-36 hr) |
| Methylprednisolone | 5 | 0.5 | 4 mg | Intermediate |
| Dexamethasone | 25 | 0 | 0.75 mg | Long (36-72 hr) |
| Betamethasone | 25 | 0 | 0.75 mg | Long (36-72 hr) |

## Mechanism of Action
1. Glucocorticoids cross cell membrane (lipophilic)
2. Bind **intracellular glucocorticoid receptor (GR)** in cytoplasm
3. GR-steroid complex translocates to **nucleus**
4. Binds **GRE (Glucocorticoid Response Elements)** on DNA
5. **Transactivation**: induces anti-inflammatory proteins (lipocortin-1, annexin A1)
6. **Transrepression**: inhibits pro-inflammatory transcription factors (NF-kB, AP-1)

## Key Physiological Effects
- **Anti-inflammatory**: inhibit phospholipase A2 (via lipocortin), reduce prostaglandins AND leukotrienes
- **Immunosuppressive**: reduce T-cell activation, cytokine production
- **Metabolic**: increase gluconeogenesis, protein catabolism, fat redistribution
- **HPA axis**: suppress CRH and ACTH (negative feedback)

> **Clinical Pearl**: Dexamethasone and betamethasone have ZERO mineralocorticoid activity, making them ideal when sodium retention must be avoided (e.g., cerebral edema, fetal lung maturation).`,
        mnemonics: [
          {
            text: "DEXA = 25x potent, ZERO salt: Dexamethasone is 25x anti-inflammatory, 0 mineralocorticoid activity",
            explanation:
              "Dexamethasone has 25x the anti-inflammatory potency of hydrocortisone but no mineralocorticoid (salt-retaining) activity.",
          },
          {
            text: "Steroid equivalence: Hydro-20, Pred-5, Dexa-0.75 (think H20, P5, D0.75)",
            explanation:
              "Equivalent anti-inflammatory doses: Hydrocortisone 20 mg = Prednisolone 5 mg = Dexamethasone 0.75 mg.",
          },
        ],
        keyPoints: [
          "Glucocorticoids act via intracellular GR -> nucleus -> transactivation/transrepression",
          "Inhibit phospholipase A2 (via lipocortin) - block BOTH prostaglandin AND leukotriene pathways",
          "Dexamethasone: 25x potency, zero mineralocorticoid, used for cerebral edema",
          "Equivalent doses: hydrocortisone 20 mg = prednisolone 5 mg = dexamethasone 0.75 mg",
          "Chronic use causes HPA axis suppression - must taper gradually",
          "Fludrocortisone: synthetic mineralocorticoid for adrenal insufficiency",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 21 - Corticosteroids", page: "301-320", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 44 - ACTH and Corticosteroids", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "corticosteroids-mechanism",
        title: "Corticosteroids - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed molecular mechanism, HPA axis suppression, metabolic effects, and pharmacokinetics.",
        contentMd: `# Detailed Mechanisms

## Molecular Mechanism
### Genomic (slow, hours)
1. GC binds cytoplasmic GR (displaces HSP90 chaperone)
2. GR dimerizes and enters nucleus
3. **Transactivation**: GR binds GRE, upregulates anti-inflammatory genes
   - Lipocortin-1 (annexin A1): inhibits PLA2
   - IkB-alpha: inhibits NF-kB
   - IL-10: anti-inflammatory cytokine
4. **Transrepression**: GR interacts with NF-kB and AP-1, inhibiting pro-inflammatory gene transcription
   - Reduces: IL-1, IL-2, IL-6, TNF-alpha, COX-2, iNOS, adhesion molecules

### Non-Genomic (rapid, minutes)
- Membrane-bound GR activation
- Rapid vasoconstriction, reduced vascular permeability
- Important in acute situations (anaphylaxis, cerebral edema)

## HPA Axis Suppression
- Exogenous GC suppresses CRH (hypothalamus) and ACTH (pituitary)
- Adrenal cortex **atrophies** with prolonged use
- **Recovery**: takes weeks to months after stopping
- Risk of **adrenal crisis** if steroids stopped abruptly
- Rule: If steroids used >2 weeks at supraphysiological dose, TAPER gradually

## Metabolic Effects

| System | Effect | Clinical Consequence |
|--------|--------|---------------------|
| Carbohydrate | Increase gluconeogenesis, decrease glucose uptake | Steroid diabetes |
| Protein | Increase catabolism | Muscle wasting, skin thinning |
| Fat | Redistribute (central) | Moon face, buffalo hump |
| Bone | Decrease osteoblast activity, increase osteoclast | Osteoporosis |
| Immune | Suppress T cells, neutrophilia, lymphopenia | Increased infection risk |
| Electrolyte | Na+ retention, K+ loss (if MC activity present) | Hypertension, hypokalemia |

## Pharmacokinetics
- Oral absorption: excellent (prednisolone, dexamethasone)
- Protein binding: **transcortin (CBG)** for cortisol; albumin for synthetic GCs
- Metabolism: hepatic (11-beta-HSD converts cortisone <-> cortisol)
- Alternate-day therapy: minimizes HPA suppression (use intermediate-acting: prednisolone)`,
        mnemonics: [
          {
            text: "Steroids cause CUSHINGOID features: Central obesity, Ulcers, Striae, Hyperglycemia, Infections, Necrosis (avascular), Growth suppression, Osteoporosis, Immunosuppression, Depression",
            explanation:
              "Chronic steroid ADRs mirror Cushing syndrome: central fat redistribution, peptic ulcers, skin striae, diabetes, increased infections, avascular necrosis, growth retardation in children, osteoporosis, immune suppression, and psychiatric effects.",
          },
        ],
        keyPoints: [
          "Genomic: GR translocates to nucleus, transactivation (lipocortin-1) and transrepression (NF-kB)",
          "Non-genomic: rapid effects via membrane GR (vasoconstriction, stabilization)",
          "HPA suppression: adrenal atrophy with chronic use, must taper to avoid adrenal crisis",
          "Metabolic: hyperglycemia, protein catabolism, fat redistribution, osteoporosis",
          "Alternate-day therapy with prednisolone minimizes HPA suppression",
          "11-beta-HSD: converts cortisone to cortisol (topical steroids exploit this)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 21", page: "305-315", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 44", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "corticosteroids-clinical",
        title: "Corticosteroids - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical indications, adverse effects, tapering strategies, and Indian prescribing context.",
        contentMd: `# Clinical Applications

## Indication-Based Drug Selection

| Indication | Drug | Route |
|-----------|------|-------|
| Acute asthma exacerbation | Prednisolone / IV Hydrocortisone | Oral / IV |
| Anaphylaxis (adjunct) | Hydrocortisone 200 mg IV | IV |
| Cerebral edema | Dexamethasone (no MC activity) | IV |
| Fetal lung maturation | Betamethasone 12 mg IM x 2 doses | IM |
| Rheumatoid arthritis | Prednisolone low dose | Oral |
| Nephrotic syndrome (children) | Prednisolone | Oral |
| Organ transplant | Methylprednisolone pulse then prednisolone | IV then Oral |
| Adrenal insufficiency | Hydrocortisone + Fludrocortisone | Oral |
| Inflammatory bowel disease | Prednisolone / Budesonide | Oral |
| Contact dermatitis | Topical betamethasone | Topical |

## Topical Steroid Classification (Indian Practice)

| Potency | Example | Use |
|---------|---------|-----|
| Mild | Hydrocortisone 1% | Face, intertriginous areas |
| Moderate | Betamethasone valerate 0.1% | Eczema, dermatitis |
| Potent | Clobetasol propionate 0.05% | Psoriasis (limited duration) |

> **Clinical Pearl**: Topical steroid misuse is rampant in India, leading to steroid-dependent face (topical steroid damaged face - TSDF). Fairness creams often contain undisclosed clobetasol. CDSCO has issued warnings against OTC steroid sales.

## Adverse Effects with Management

| ADR | Management |
|-----|-----------|
| HPA suppression | Gradual taper, stress-dose steroids during illness/surgery |
| Osteoporosis | Calcium + Vitamin D, bisphosphonates (alendronate) |
| Steroid diabetes | Monitor blood glucose, insulin/OHA if needed |
| Peptic ulcer | Co-prescribe PPI |
| Growth retardation (children) | Alternate-day therapy, monitor height |
| Avascular necrosis (femoral head) | Early detection, orthopedic referral |
| Posterior subcapsular cataract | Ophthalmology screening |
| Infections (TB reactivation, fungal) | Screen for TB, monitor for opportunistic infections |

## Steroid Tapering
- **When to taper**: after >2 weeks of supraphysiological dose
- **Method**: reduce by 10-20% every 1-2 weeks
- **Risk of abrupt withdrawal**: adrenal crisis (hypotension, shock, death)
- **Sick-day rules**: double/triple dose during acute illness/surgery`,
        mnemonics: [
          {
            text: "Never STOP steroids suddenly: Suppress HPA, Taper Obligatory, Problems if Precipitous withdrawal",
            explanation:
              "After chronic steroid use (>2 weeks), abrupt withdrawal causes adrenal crisis due to HPA axis suppression and adrenal atrophy. Always taper gradually.",
          },
        ],
        keyPoints: [
          "Dexamethasone: cerebral edema and fetal lung maturation (no salt retention)",
          "Hydrocortisone: adrenal insufficiency replacement, acute asthma, anaphylaxis adjunct",
          "Topical steroid misuse (TSDF) is a major problem in India",
          "Must taper steroids after >2 weeks of use to prevent adrenal crisis",
          "Osteoporosis prevention: calcium + vitamin D + bisphosphonate for chronic steroid users",
          "Sick-day rules: increase steroid dose during stress/surgery",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 21", edition: "8th" },
          { book: "Harrison's", chapter: "Adrenal Disorders", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "corticosteroids-exam",
        title: "Corticosteroids - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts for corticosteroid pharmacology.",
        contentMd: `# Exam High Yield

## One-Liners
- Most potent anti-inflammatory GC: **Dexamethasone/Betamethasone (25x)**
- GC with zero mineralocorticoid activity: **Dexamethasone, Betamethasone**
- GC equivalent dose chart: **Hydrocortisone 20 = Prednisolone 5 = Dexa 0.75 mg**
- Steroid for fetal lung maturation: **Betamethasone IM (crosses placenta)**
- Steroid for cerebral edema: **Dexamethasone IV**
- Replacement steroid for adrenal insufficiency: **Hydrocortisone + Fludrocortisone**
- GC inhibiting PLA2 via: **Lipocortin-1 (annexin A1)**
- Steroid causing avascular necrosis: **Any chronic GC (femoral head most common)**
- Anti-inflammatory mechanism: **Transrepression of NF-kB**
- Alternate-day therapy drug: **Prednisolone (intermediate-acting)**
- Topical steroid most misused in India: **Clobetasol (in fairness creams)**
- HPA axis recovery time after chronic steroids: **Weeks to months**

## Previous Year Themes
- Glucocorticoid receptor signaling (genomic vs non-genomic)
- Equivalent dose comparisons
- Adverse effects of chronic steroids (Cushing features)
- HPA axis suppression and tapering
- Steroid use in specific conditions (fetal lung, cerebral edema)`,
        mnemonics: [
          {
            text: "GC equivalence: 20-5-4-0.75 (Hydro-Pred-MethylPred-Dexa): decreasing dose = increasing potency",
            explanation:
              "Dose equivalence: Hydrocortisone 20 mg = Prednisolone 5 mg = Methylprednisolone 4 mg = Dexamethasone 0.75 mg. Lower number = higher potency.",
          },
        ],
        keyPoints: [
          "Dexa/Beta: 25x potency, no MC activity, long-acting",
          "Lipocortin-1 inhibits PLA2 (blocks prostaglandins AND leukotrienes)",
          "GR transrepression of NF-kB: key anti-inflammatory mechanism",
          "Taper after >2 weeks; adrenal crisis if stopped abruptly",
          "Betamethasone for fetal lung maturation (crosses placenta efficiently)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 21", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "corticosteroids-recall",
        title: "Corticosteroids - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for corticosteroids.",
        contentMd: `# Active Recall

**Q1:** How do glucocorticoids exert anti-inflammatory effects?
> Bind intracellular GR, translocate to nucleus. Transactivation: upregulate lipocortin-1 (inhibits PLA2). Transrepression: inhibit NF-kB and AP-1, reducing pro-inflammatory cytokines, COX-2, iNOS.

**Q2:** Why are glucocorticoids more broadly anti-inflammatory than NSAIDs?
> GCs inhibit phospholipase A2 (via lipocortin), blocking BOTH prostaglandin and leukotriene synthesis. NSAIDs only block COX (prostaglandins), not leukotrienes.

**Q3:** What is the equivalent dose of prednisolone to 20 mg hydrocortisone?
> 5 mg prednisolone = 20 mg hydrocortisone.

**Q4:** Why is dexamethasone used for cerebral edema?
> Dexamethasone has 25x anti-inflammatory potency with ZERO mineralocorticoid activity, so it reduces brain edema without causing sodium/water retention.

**Q5:** Why must chronic steroids be tapered?
> Chronic exogenous steroids suppress the HPA axis. Adrenal glands atrophy. Abrupt withdrawal causes adrenal crisis (hypotension, shock, death) because the adrenals cannot produce cortisol quickly.

**Q6:** What steroid is used for fetal lung maturation?
> Betamethasone 12 mg IM, 2 doses 24 hours apart. Crosses placenta and stimulates fetal surfactant production in premature labor (24-34 weeks).

**Q7:** Name three metabolic adverse effects of chronic steroids.
> Hyperglycemia (steroid diabetes), protein catabolism (muscle wasting, skin thinning), and fat redistribution (central obesity, moon face, buffalo hump).

**Q8:** What is topical steroid damaged face (TSDF)?
> Skin damage from chronic topical steroid misuse on the face - redness, thinning, telangiectasia, steroid-dependent dermatitis. Major problem in India due to OTC steroid misuse.

**Q9:** What is alternate-day therapy and why is it used?
> Giving prednisolone on alternate days allows HPA axis recovery on off-days, minimizing adrenal suppression while maintaining therapeutic effect.

**Q10:** What replacement therapy is used for Addison disease?
> Hydrocortisone (glucocorticoid) + Fludrocortisone (mineralocorticoid). Hydrocortisone mimics the natural diurnal cortisol secretion pattern.`,
        mnemonics: [],
        keyPoints: [
          "10 recall questions covering mechanism, equivalence, clinical use, ADRs, and tapering",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 21", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 4: Sex Hormones & Contraceptives ────────────────
  {
    topicCode: "PH-MOD-07-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "sex-hormones-contraceptives-foundation",
        title: "Sex Hormones & Contraceptives - Foundation",
        estimatedMinutes: 20,
        summary: "Estrogens, progestins, and androgens have therapeutic and contraceptive uses. Combined oral contraceptives (COC) prevent ovulation. Progestin-only methods, emergency contraception, and India's National Family Planning Programme are covered.",
        contentMd: `# Sex Hormones & Contraceptives

## Estrogens
| Type | Drug | Use |
|------|------|-----|
| Natural | Estradiol | HRT |
| Synthetic | Ethinylestradiol | OCP |
| SERM | Tamoxifen, Raloxifene | Breast cancer, osteoporosis |
| Aromatase inhibitor | Letrozole, Anastrozole | Breast cancer, ovulation induction |

## Progestins
| Type | Drug | Use |
|------|------|-----|
| Natural | Progesterone | Luteal support, threatened abortion |
| Synthetic | Levonorgestrel, Desogestrel, Drospirenone | OCP, emergency contraception |
| Anti-progestin | Mifepristone (RU-486) | Medical abortion, emergency contraception |

## Androgens
| Drug | Use |
|------|-----|
| Testosterone | Hypogonadism replacement |
| Danazol | Endometriosis, fibrocystic breast (androgen + weak progestin) |
| Anti-androgens (Flutamide, Bicalutamide, Cyproterone) | Prostate cancer, hirsutism, PCOS |
| 5-alpha reductase inhibitors (Finasteride) | BPH, male pattern baldness |

## Hormonal Contraception

### Combined Oral Contraceptives (COC)
- **Estrogen** (ethinylestradiol) + **Progestin** (levonorgestrel/desogestrel)
- Mechanism: suppress **ovulation** (inhibit GnRH -> LH surge), thicken cervical mucus, thin endometrium
- Taken 21 days on, 7 days off (withdrawal bleed)

### Emergency Contraception
| Method | Drug | Timing |
|--------|------|--------|
| Levonorgestrel | 1.5 mg single dose | Within 72 hours |
| Ulipristal acetate | 30 mg single dose | Within 120 hours (5 days) |
| Copper IUD | Non-hormonal | Within 5 days (most effective) |

> **Clinical Pearl**: Under India's National Family Planning Programme (NFPP), Mala-D (COC) and Mala-N are provided free. Centchroman (Ormeloxifene/Saheli) is a unique SERM contraceptive developed in India, taken once weekly.`,
        mnemonics: [
          {
            text: "COC blocks OVULation: Combined OC prevents OVULation by suppressing LH surge",
            explanation:
              "The primary mechanism of combined oral contraceptives is suppression of the LH surge (via estrogen + progestin feedback on hypothalamus/pituitary), preventing ovulation.",
          },
          {
            text: "Emergency = LNG 72 or Copper 120: Levonorgestrel within 72 hrs, Copper IUD within 120 hrs (5 days)",
            explanation:
              "Emergency contraception timing: levonorgestrel within 72 hours, ulipristal within 120 hours, copper IUD within 120 hours (most effective method).",
          },
        ],
        keyPoints: [
          "COC: ethinylestradiol + progestin, primary mechanism is ovulation suppression",
          "Emergency: levonorgestrel 1.5 mg within 72 hr; Cu-IUD within 5 days (most effective)",
          "Mifepristone (RU-486): anti-progestin for medical abortion",
          "Tamoxifen: SERM - anti-estrogenic in breast, estrogenic in bone/uterus",
          "Centchroman (Saheli): Indian-developed weekly non-steroidal contraceptive (SERM)",
          "India NFPP: free Mala-D, condoms, IUDs, sterilization services",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 22-23 - Sex Hormones, Contraceptives", page: "321-350", edition: "8th" },
          { book: "DC Dutta", chapter: "Contraception", edition: "9th" },
        ],
      },
      {
        layer: 2,
        slug: "sex-hormones-contraceptives-mechanism",
        title: "Sex Hormones & Contraceptives - Mechanism",
        estimatedMinutes: 30,
        summary: "Mechanisms of SERMs, aromatase inhibitors, anti-androgens, and contraceptive physiology.",
        contentMd: `# Detailed Mechanisms

## SERMs (Selective Estrogen Receptor Modulators)
- Act as agonists or antagonists depending on tissue
| SERM | Breast | Bone | Uterus | Use |
|------|--------|------|--------|-----|
| **Tamoxifen** | Antagonist | Agonist | Agonist (risk) | ER+ breast cancer |
| **Raloxifene** | Antagonist | Agonist | Antagonist | Osteoporosis, breast cancer prevention |
| **Clomiphene** | Antagonist (hypothalamus) | - | - | Ovulation induction |

### Clomiphene for Ovulation Induction
1. Blocks estrogen receptors in hypothalamus
2. Hypothalamus perceives low estrogen (removes negative feedback)
3. Increased GnRH -> FSH -> follicular development -> ovulation
4. Used for PCOS-related anovulatory infertility

## Aromatase Inhibitors
- Block **aromatase** (CYP19) enzyme that converts androgens to estrogens
- Reduce estrogen levels in postmenopausal women
- **Letrozole**: also used for ovulation induction (off-label, now preferred over clomiphene)
- **Anastrozole, Exemestane**: adjuvant therapy for postmenopausal ER+ breast cancer

## Anti-Androgens

### Mechanism
| Drug | Mechanism | Use |
|------|-----------|-----|
| **Flutamide/Bicalutamide** | Androgen receptor antagonist | Prostate cancer |
| **Cyproterone acetate** | AR antagonist + progestin (suppresses gonadotropins) | Hirsutism, PCOS, prostate cancer |
| **Finasteride** | 5-alpha reductase inhibitor (blocks testosterone -> DHT) | BPH, male pattern baldness |
| **Spironolactone** | Aldosterone + androgen receptor antagonist | Hirsutism, PCOS (off-label) |

## Contraceptive Mechanisms

### Combined OC (Triple Action)
1. **Suppress ovulation**: estrogen + progestin suppress GnRH, FSH, LH surge
2. **Thicken cervical mucus**: progestin effect, impedes sperm penetration
3. **Thin endometrium**: hostile for implantation

### Progestin-Only Methods
- Progestin-only pill (POP/minipill): primarily thickens mucus (does not always suppress ovulation)
- Depot medroxyprogesterone acetate (DMPA): IM every 3 months, suppresses ovulation
- Levonorgestrel IUD: local endometrial effect + thick mucus
- Implant (etonogestrel): subdermal, 3 years, suppresses ovulation

## Mifepristone (RU-486)
- **Progesterone receptor antagonist** (also weak anti-glucocorticoid)
- Used for medical abortion (with misoprostol)
- Blocks progesterone support of endometrium -> decidual necrosis -> abortion
- Also used as emergency contraception in some countries`,
        mnemonics: [
          {
            text: "Clomiphene FOOLS the hypothalamus: blocks estrogen receptors, hypothalamus thinks estrogen is low, releases more GnRH/FSH",
            explanation:
              "Clomiphene blocks estrogen feedback at the hypothalamus, tricking it into increasing GnRH and FSH secretion, which stimulates follicular development and ovulation.",
          },
        ],
        keyPoints: [
          "SERMs: tissue-selective ER modulators; tamoxifen anti-estrogen in breast but agonist in uterus/bone",
          "Clomiphene: blocks hypothalamic ER, induces ovulation via increased FSH",
          "Aromatase inhibitors: block androgen to estrogen conversion, used in breast cancer and ovulation induction",
          "COC triple action: suppress ovulation + thicken mucus + thin endometrium",
          "Mifepristone: progesterone receptor antagonist, used for medical abortion with misoprostol",
          "Finasteride: blocks 5-alpha reductase (testosterone to DHT), used for BPH",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 22-23", page: "325-345", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 45-46", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "sex-hormones-contraceptives-clinical",
        title: "Sex Hormones & Contraceptives - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical prescribing of contraceptives, HRT, medical abortion, and India's family planning programs.",
        contentMd: `# Clinical Applications

## COC Prescribing
- **Absolute contraindications**: history of DVT/PE, stroke, MI, breast cancer, smoker >35 years, uncontrolled HTN, migraine with aura
- **Common ADR**: nausea, breast tenderness, breakthrough bleeding, headache
- **Serious ADR**: DVT/PE (estrogen-related thromboembolic risk), stroke, MI

## India's National Family Planning Programme

| Method | Details | Pearl |
|--------|---------|-------|
| **Mala-D** | COC (Levonorgestrel + Ethinylestradiol) | Free under NFPP |
| **Mala-N** | Newer COC formulation | Free |
| **Centchroman (Saheli)** | Non-steroidal weekly SERM | Indian innovation |
| **Cu-T 380A** | Copper IUD, 10 years | Most popular LARC in India |
| **DMPA (Antara)** | Injectable, 3 months | Recently introduced under NFPP |
| **Condoms** | Barrier | Free at PHCs (Nirodh) |
| **Sterilization** | Tubectomy (F), Vasectomy (M) | Most common method in India |

## Medical Abortion
- **Mifepristone** 200 mg oral + **Misoprostol** 800 mcg vaginal (24-48 hr later)
- Effective up to 9 weeks gestation
- Legal in India under MTP Act (up to 24 weeks with specific indications, 2021 amendment)

## Hormone Replacement Therapy (HRT)
- **Indication**: menopausal symptoms (hot flushes, vaginal atrophy, osteoporosis prevention)
- **Regimen**: Estrogen + Progestin (women with uterus) or Estrogen alone (post-hysterectomy)
- **WHI trial findings**: increased breast cancer, CVD risk with long-term combined HRT
- **Current recommendation**: lowest effective dose for shortest duration

> **Clinical Pearl**: Tamoxifen (anti-estrogen in breast) is used for ER+ breast cancer but increases endometrial cancer risk (estrogenic in uterus). Raloxifene lacks this uterine risk.`,
        mnemonics: [
          {
            text: "COC contraindicated in SMASH: Smoker >35, Migraine with aura, Active DVT/PE, Stroke history, Hepatic disease/breast cancer",
            explanation:
              "Absolute contraindications for combined oral contraceptives: smoking over 35, migraine with aura, active or history of thromboembolic disease, stroke, liver disease, and breast cancer.",
          },
        ],
        keyPoints: [
          "COC contraindicated: smoker >35, migraine with aura, DVT/PE, breast cancer",
          "Medical abortion: mifepristone + misoprostol, legal in India under MTP Act",
          "Centchroman (Saheli): Indian-developed non-steroidal weekly OC (SERM)",
          "Tamoxifen: anti-estrogen in breast but increases endometrial cancer risk",
          "HRT: lowest dose, shortest duration; WHI showed increased breast CA and CVD",
          "Cu-T 380A: most popular LARC in India, effective for 10 years",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 22-23", edition: "8th" },
          { book: "DC Dutta", chapter: "Contraception", edition: "9th" },
        ],
      },
      {
        layer: 4,
        slug: "sex-hormones-contraceptives-exam",
        title: "Sex Hormones & Contraceptives - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts for sex hormones and contraceptive pharmacology.",
        contentMd: `# Exam High Yield

## One-Liners
- SERM anti-estrogenic in breast: **Tamoxifen, Raloxifene**
- SERM used for ovulation induction: **Clomiphene**
- Anti-progestin for medical abortion: **Mifepristone (RU-486)**
- Prostaglandin for medical abortion: **Misoprostol (PGE1)**
- Indian weekly contraceptive (SERM): **Centchroman (Ormeloxifene/Saheli)**
- Estrogen component in most COCs: **Ethinylestradiol**
- Emergency contraception within 72 hours: **Levonorgestrel 1.5 mg**
- Most effective emergency contraception: **Copper IUD (within 5 days)**
- 5-alpha reductase inhibitor for BPH: **Finasteride**
- SERM with no uterine stimulation: **Raloxifene (unlike tamoxifen)**
- Aromatase inhibitor now preferred for ovulation induction: **Letrozole**
- Drug causing hot flushes as ADR: **Tamoxifen (anti-estrogen effect)**
- Danazol mechanism: **Weak androgen + antigonadotropin**
- Most common family planning method in India: **Female sterilization**

## Previous Year Themes
- SERM tissue-selective actions (tamoxifen vs raloxifene)
- COC contraindications
- Emergency contraception methods and timing
- Clomiphene ovulation induction mechanism
- Medical abortion protocol
- Aromatase inhibitors in breast cancer`,
        mnemonics: [
          {
            text: "Tamoxifen = Breast Blocker, Bone Builder, But Bothers uterus: anti-estrogen in breast, agonist in bone and uterus",
            explanation:
              "Tamoxifen's tissue-selective effects: blocks estrogen in breast (therapeutic), stimulates bone (protects from osteoporosis), but stimulates uterus (increases endometrial cancer risk).",
          },
        ],
        keyPoints: [
          "Tamoxifen: anti-breast, pro-bone, pro-uterus (endometrial cancer risk)",
          "Clomiphene: hypothalamic ER antagonist, increases GnRH/FSH, induces ovulation",
          "Mifepristone + Misoprostol: medical abortion (legal in India under MTP Act)",
          "LNG 1.5 mg within 72 hr; Cu-IUD within 5 days (most effective EC)",
          "Letrozole now preferred over clomiphene for ovulation induction",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 22-23", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "sex-hormones-contraceptives-recall",
        title: "Sex Hormones & Contraceptives - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for sex hormones and contraceptives.",
        contentMd: `# Active Recall

**Q1:** What are the three mechanisms of combined oral contraceptives?
> 1) Suppress ovulation (block LH surge), 2) Thicken cervical mucus (block sperm), 3) Thin endometrium (hostile for implantation).

**Q2:** How does clomiphene induce ovulation?
> Blocks estrogen receptors in hypothalamus, removing negative feedback. Hypothalamus increases GnRH, pituitary increases FSH, stimulating follicular development and ovulation.

**Q3:** What is the difference between tamoxifen and raloxifene?
> Both are SERMs, anti-estrogenic in breast and estrogenic in bone. Key difference: tamoxifen is estrogenic in uterus (endometrial cancer risk), raloxifene is not.

**Q4:** What is the medical abortion protocol?
> Mifepristone 200 mg oral (progesterone antagonist), followed 24-48 hours later by misoprostol 800 mcg vaginal (prostaglandin, causes uterine contractions). Effective up to 9 weeks.

**Q5:** What is the most effective method of emergency contraception?
> Copper IUD insertion within 5 days (120 hours) - most effective EC method with added benefit of long-term contraception.

**Q6:** What is Centchroman (Saheli)?
> India-developed non-steroidal oral contraceptive (SERM), taken once weekly. Anti-estrogenic on endometrium, prevents implantation. Available free under NFPP.

**Q7:** How does finasteride work?
> Inhibits 5-alpha reductase, blocking conversion of testosterone to dihydrotestosterone (DHT). Used for BPH (reduces prostate size) and male pattern baldness.

**Q8:** What are the major contraindications for combined OCs?
> Smoker >35 years, migraine with aura, history of DVT/PE/stroke/MI, breast cancer, uncontrolled hypertension, active liver disease.

**Q9:** How do aromatase inhibitors work?
> Block aromatase (CYP19) enzyme that converts androgens to estrogens. Reduce estrogen in postmenopausal women. Used for ER+ breast cancer and ovulation induction.

**Q10:** What finding from the WHI trial changed HRT practice?
> Combined HRT (estrogen + progestin) was associated with increased breast cancer and cardiovascular disease risk. Led to recommendation of lowest dose for shortest duration.`,
        mnemonics: [],
        keyPoints: [
          "10 recall questions covering SERMs, contraceptive mechanisms, medical abortion, and Indian family planning",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 22-23", edition: "8th" },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODULE 8 — MISCELLANEOUS & APPLIED (Topics 1-4)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ─── Topic 1: GI Pharmacology ──────────────────────────────
  {
    topicCode: "PH-MOD-08-TOP-01",
    layers: [
      { layer: 1, slug: "gi-pharmacology-foundation", title: "GI Pharmacology - Foundation", estimatedMinutes: 20, summary: "GI drugs include antiulcer agents (PPIs, H2 blockers, antacids, sucralfate), antiemetics (ondansetron, metoclopramide, domperidone), laxatives, and antidiarrheals (loperamide, ORS). PPIs are the most potent acid suppressants.", contentMd: `# GI Pharmacology\n\n## Antiulcer Drugs\n\n| Class | Drug | Mechanism |\n|-------|------|-----------|\n| **PPIs** | Omeprazole, Pantoprazole, Esomeprazole | Irreversible H+/K+ ATPase inhibition |\n| **H2 Blockers** | Famotidine, Ranitidine | H2 receptor blockade |\n| **Antacids** | Al(OH)3, Mg(OH)2 | Neutralize gastric acid |\n| **Sucralfate** | Sucralfate | Forms protective barrier over ulcer |\n| **Misoprostol** | PGE1 analogue | Cytoprotective, NSAID-induced ulcer |\n| **Bismuth** | Colloidal bismuth subcitrate | Cytoprotective + H. pylori activity |\n\n### PPIs - Most Important Antiulcer Class\n- **Prodrugs**: activated in acidic canaliculi of parietal cells\n- Form **covalent disulfide bond** with H+/K+ ATPase (proton pump)\n- **Irreversible** inhibition - new enzyme synthesis needed for recovery\n- Reduce acid secretion by ~90% (more potent than H2 blockers)\n- Take **30 min before meals** (need acid for activation)\n\n## H. pylori Eradication (Triple Therapy)\n- PPI + Amoxicillin + Clarithromycin (14 days)\n- Alternative: PPI + Amoxicillin + Metronidazole\n- Quadruple therapy: PPI + Bismuth + Metronidazole + Tetracycline\n\n## Antiemetics\n\n| Class | Drug | Receptor | Use |\n|-------|------|----------|-----|\n| **5-HT3 antagonists** | Ondansetron | 5-HT3 | Chemo-induced vomiting (CINV) |\n| **D2 antagonists** | Metoclopramide, Domperidone | D2 | Gastroparesis, nausea |\n| **NK1 antagonist** | Aprepitant | NK1 | Delayed CINV |\n| **Antihistamines** | Promethazine | H1 | Motion sickness |\n| **Anticholinergics** | Hyoscine | M | Motion sickness |\n\n> **Clinical Pearl**: Domperidone does not cross the BBB (unlike metoclopramide), so it lacks extrapyramidal side effects. Preferred antiemetic in India for nausea/gastroparesis.`, mnemonics: [{ text: "PPI = Proton Pump Irreversible: PPIs irreversibly block H+/K+ ATPase", explanation: "PPIs form a covalent disulfide bond with the proton pump (H+/K+ ATPase), causing irreversible inhibition. New enzyme synthesis is needed for acid secretion to resume (takes 3-5 days)." }, { text: "H. pylori Triple = PPI-A-C: PPI + Amoxicillin + Clarithromycin for 14 days", explanation: "Standard first-line H. pylori eradication: PPI twice daily + Amoxicillin 1g BD + Clarithromycin 500 mg BD for 14 days." }], keyPoints: ["PPIs: irreversible H+/K+ ATPase inhibition, most potent acid suppression (~90%)", "Take PPIs 30 min before meals (need acidic parietal cell for activation)", "H. pylori triple therapy: PPI + amoxicillin + clarithromycin x 14 days", "Ondansetron: 5-HT3 antagonist, DOC for chemo-induced vomiting", "Domperidone: preferred over metoclopramide (no CNS side effects)", "ORS: most important intervention for diarrheal dehydration"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 46-48 - GI Drugs", page: "650-690", edition: "8th" }] },
      { layer: 2, slug: "gi-pharmacology-mechanism", title: "GI Pharmacology - Mechanism", estimatedMinutes: 30, summary: "PPI activation mechanism, antiemetic receptor targets at CTZ and vomiting center, laxative classification, and antidiarrheal mechanisms.", contentMd: `# Detailed Mechanisms\n\n## PPI Activation\n1. PPIs are **weakly basic prodrugs** (pKa ~4)\n2. Absorbed from intestine, reach parietal cells via blood\n3. Concentrate in **acidic secretory canaliculi** (pH ~1)\n4. Acid-catalyzed conversion to **sulfenamide** (active form)\n5. Forms **covalent disulfide bond** with cysteine residues on H+/K+ ATPase\n6. Irreversible enzyme inactivation\n7. Acid secretion only resumes when new pump proteins are synthesized (18-24 hr half-life of pump)\n\n## Antiemetic Targets\n- **CTZ (Chemoreceptor Trigger Zone)**: area postrema, outside BBB\n  - Receptors: D2, 5-HT3, NK1, opioid\n- **Vomiting Center** (nucleus tractus solitarius): inside BBB\n  - Receives input from CTZ, GI tract, vestibular system, cortex\n- **GI tract**: 5-HT3 on vagal afferents (chemo-induced vomiting)\n\n### Metoclopramide\n- **D2 antagonist** (CTZ + GI tract)\n- **5-HT4 agonist** (prokinetic - enhances gastric motility)\n- **5-HT3 antagonist** (at high doses - antiemetic)\n- Crosses BBB -> extrapyramidal side effects (dystonia, tardive dyskinesia)\n- Increases prolactin (galactorrhea, amenorrhea)\n\n## Laxatives\n| Type | Drug | Mechanism |\n|------|------|-----------|\n| Bulk-forming | Ispaghula (psyllium) | Absorbs water, increases stool bulk |\n| Osmotic | Lactulose, PEG | Retain water in gut lumen |\n| Stimulant | Bisacodyl, Senna | Stimulate myenteric plexus |\n| Stool softener | Docusate | Surfactant, allows water into stool |\n| Lubricant | Liquid paraffin | Lubricates stool |\n\n## Antidiarrheals\n- **Loperamide**: mu-opioid agonist in GI (does NOT cross BBB - no CNS effects)\n- **ORS (Oral Rehydration Solution)**: glucose-sodium co-transport mechanism\n  - WHO-ORS: Na+ 75, Glucose 75, K+ 20, Citrate 10 (mOsm/L: 245)\n- **Racecadotril**: enkephalinase inhibitor (anti-secretory, reduces fluid loss)`, mnemonics: [{ text: "Metoclopramide does FOUR things: D2 block (antiemetic), 5-HT4 agonist (prokinetic), 5-HT3 block (antiemetic), crosses BBB (EPS risk)", explanation: "Metoclopramide has multiple mechanisms making it both antiemetic and prokinetic, but CNS penetration causes extrapyramidal side effects." }], keyPoints: ["PPIs: acid-activated prodrugs, covalent disulfide bond with proton pump", "CTZ receptors: D2, 5-HT3, NK1 (targeted by different antiemetics)", "Metoclopramide: D2 antagonist + 5-HT4 agonist, crosses BBB (EPS risk)", "Loperamide: mu-opioid agonist in gut, does NOT cross BBB (no CNS effects)", "ORS: glucose-sodium co-transport in intestine drives water absorption", "Lactulose: osmotic laxative, also used for hepatic encephalopathy"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 46-48", page: "655-685", edition: "8th" }] },
      { layer: 3, slug: "gi-pharmacology-clinical", title: "GI Pharmacology - Clinical Application", estimatedMinutes: 20, summary: "GERD management, peptic ulcer treatment, CINV protocols, constipation management, and ORS in Indian diarrheal disease.", contentMd: `# Clinical Applications\n\n## GERD Management\n- **Step-up**: Antacids -> H2 blocker -> PPI\n- **Standard**: PPI (omeprazole 20 mg OD) for 4-8 weeks\n- Long-term PPI concerns: osteoporosis, C. difficile, hypomagnesemia, B12 deficiency\n\n## Peptic Ulcer Treatment\n- **H. pylori positive**: Triple therapy (PPI + Amoxicillin + Clarithromycin x 14 days)\n- **NSAID-induced**: Stop NSAID + PPI (or switch to COX-2 inhibitor + PPI)\n- **Stress ulcer prophylaxis**: IV pantoprazole in ICU patients\n\n## CINV Protocol\n- **Highly emetogenic chemo** (cisplatin): Ondansetron + Dexamethasone + Aprepitant\n- **Moderately emetogenic**: Ondansetron + Dexamethasone\n- **Delayed CINV**: Aprepitant (NK1 antagonist) days 2-3\n\n## Indian Diarrheal Disease Context\n- Diarrhea is leading cause of under-5 mortality in India\n- **ORS + Zinc** (20 mg x 14 days): WHO/UNICEF recommended for all childhood diarrhea\n- ORS available at Rs 5 per packet at all PHCs and Jan Aushadhi stores\n- Antibiotics only for dysentery (blood in stool): ciprofloxacin or ceftriaxone\n\n> **Clinical Pearl**: Zinc supplementation with ORS reduces diarrhea duration by 25% and prevents recurrence for 2-3 months. This is a key IMNCI (Integrated Management of Neonatal and Childhood Illness) recommendation.`, mnemonics: [{ text: "ORS + ZINC = Gold Standard for childhood diarrhea (not antibiotics)", explanation: "ORS rehydrates via glucose-sodium co-transport. Zinc (20 mg x 14 days) reduces duration and prevents recurrence. Antibiotics only for dysentery." }], keyPoints: ["PPIs for GERD: omeprazole 20 mg OD x 4-8 weeks", "H. pylori: PPI + amoxicillin + clarithromycin x 14 days", "CINV: ondansetron + dexamethasone + aprepitant for highly emetogenic chemo", "ORS + Zinc: gold standard for childhood diarrhea in India", "Long-term PPI risks: osteoporosis, C. difficile, hypomagnesemia", "Domperidone preferred over metoclopramide (no EPS)"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 46-48", edition: "8th" }, { book: "Park's Textbook", chapter: "Diarrheal Diseases", edition: "26th" }] },
      { layer: 4, slug: "gi-pharmacology-exam", title: "GI Pharmacology - Exam Prep", estimatedMinutes: 15, summary: "High-yield GI pharmacology facts.", contentMd: `# Exam High Yield\n\n## One-Liners\n- Most potent acid suppressant: **PPI (H+/K+ ATPase inhibitor)**\n- PPI mechanism: **Irreversible covalent disulfide bond with proton pump**\n- Take PPI: **30 min before meals (needs acid for activation)**\n- DOC for CINV: **Ondansetron (5-HT3 antagonist)**\n- NK1 antagonist for delayed CINV: **Aprepitant**\n- Prokinetic + antiemetic: **Metoclopramide (D2 blocker + 5-HT4 agonist)**\n- Antiemetic without EPS: **Domperidone (does not cross BBB)**\n- Antidiarrheal opioid: **Loperamide (peripheral mu-agonist, no CNS effects)**\n- Osmotic laxative for hepatic encephalopathy: **Lactulose**\n- Cytoprotective PGE1 analogue: **Misoprostol**\n- H. pylori first-line: **PPI + Amoxicillin + Clarithromycin**\n- Childhood diarrhea treatment: **ORS + Zinc (20 mg x 14 days)**\n\n## Previous Year Themes\n- PPI activation mechanism\n- H. pylori eradication regimens\n- Antiemetic receptor pharmacology\n- Metoclopramide mechanism and ADRs\n- ORS composition and zinc supplementation`, mnemonics: [{ text: "PPI before meals, H2 blocker before bed: timing of acid suppressants for optimal efficacy", explanation: "PPIs need acid in parietal cell canaliculi for activation (take before meals). H2 blockers are effective for nocturnal acid (can be taken at bedtime)." }], keyPoints: ["PPIs: most potent, irreversible, take before meals", "Ondansetron: 5-HT3 antagonist, DOC for CINV", "Metoclopramide: EPS risk; domperidone does not cross BBB", "ORS + Zinc: standard childhood diarrhea treatment", "Loperamide: peripheral mu-agonist, no CNS effects"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 46-48", edition: "8th" }] },
      { layer: 5, slug: "gi-pharmacology-recall", title: "GI Pharmacology - Active Recall", estimatedMinutes: 10, summary: "Flashcard-style Q&A for GI pharmacology.", contentMd: `# Active Recall\n\n**Q1:** How do PPIs work?\n> PPIs are acid-activated prodrugs that form covalent disulfide bonds with H+/K+ ATPase (proton pump) in parietal cell canaliculi, causing irreversible inhibition.\n\n**Q2:** What is the first-line H. pylori eradication regimen?\n> PPI (BD) + Amoxicillin 1g BD + Clarithromycin 500 mg BD for 14 days.\n\n**Q3:** Why does metoclopramide cause extrapyramidal side effects but domperidone does not?\n> Metoclopramide crosses the BBB and blocks D2 receptors in the basal ganglia. Domperidone does not cross the BBB.\n\n**Q4:** What is the mechanism of ondansetron?\n> 5-HT3 receptor antagonist. Blocks serotonin at vagal afferents in GI tract and CTZ. DOC for chemotherapy-induced nausea.\n\n**Q5:** How does ORS work?\n> Glucose-sodium co-transport (SGLT1) in small intestine: glucose absorption drives sodium and water absorption even during secretory diarrhea.\n\n**Q6:** Why is zinc given with ORS in childhood diarrhea?\n> Zinc reduces diarrhea duration by ~25%, decreases stool output, and prevents recurrence for 2-3 months (immune modulation).\n\n**Q7:** What is loperamide's mechanism?\n> Peripheral mu-opioid receptor agonist in GI tract - reduces peristalsis and secretions. Does not cross BBB (no CNS/analgesic effects).\n\n**Q8:** What are the long-term risks of PPI use?\n> Osteoporosis (reduced Ca absorption), C. difficile infection, hypomagnesemia, vitamin B12 deficiency, possible renal interstitial nephritis.\n\n**Q9:** What is misoprostol used for?\n> PGE1 analogue: cytoprotective for NSAID-induced ulcers (replaces PGE2 inhibited by NSAIDs). Also used for medical abortion with mifepristone.\n\n**Q10:** What antiemetic is used for delayed CINV?\n> Aprepitant (NK1/substance P receptor antagonist) - given on days 1-3 of chemo cycle.`, mnemonics: [], keyPoints: ["10 recall questions covering acid suppression, H. pylori, antiemetics, and diarrhea management"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 46-48", edition: "8th" }] },
    ],
  },

  // ─── Topic 2: Respiratory Pharmacology ─────────────────────
  {
    topicCode: "PH-MOD-08-TOP-02",
    layers: [
      { layer: 1, slug: "respiratory-pharmacology-foundation", title: "Respiratory Pharmacology - Foundation", estimatedMinutes: 20, summary: "Drugs for asthma and COPD: bronchodilators (beta-2 agonists, anticholinergics, theophylline), anti-inflammatory (inhaled corticosteroids, leukotriene antagonists, mast cell stabilizers), and antitussives.", contentMd: `# Respiratory Pharmacology\n\n## Bronchodilators\n\n| Class | Drug | Onset | Duration | Use |\n|-------|------|-------|----------|-----|\n| **SABA** | Salbutamol (Albuterol) | 5 min | 4-6 hr | Acute relief (rescue) |\n| **LABA** | Salmeterol, Formoterol | 15-30 min | 12 hr | Maintenance (with ICS) |\n| **Ultra-LABA** | Indacaterol, Vilanterol | 5 min | 24 hr | COPD maintenance |\n| **SAMA** | Ipratropium | 15-30 min | 6-8 hr | Acute COPD/asthma |\n| **LAMA** | Tiotropium | 30 min | 24 hr | COPD maintenance |\n| **Methylxanthine** | Theophylline | 30-60 min | 12-24 hr | Add-on (narrow TI) |\n\n## Anti-Inflammatory Agents\n\n| Class | Drug | Mechanism |\n|-------|------|-----------|\n| **ICS** | Budesonide, Fluticasone, Beclomethasone | GR-mediated anti-inflammatory |\n| **LTRA** | Montelukast, Zafirlukast | CysLT1 receptor antagonist |\n| **Mast cell stabilizer** | Sodium cromoglycate, Nedocromil | Prevent mast cell degranulation |\n| **Anti-IgE** | Omalizumab | Monoclonal Ab against IgE |\n| **Anti-IL-5** | Mepolizumab, Benralizumab | For severe eosinophilic asthma |\n\n## Stepwise Asthma Management (GINA)\n1. **Step 1**: PRN low-dose ICS-formoterol (or SABA)\n2. **Step 2**: Low-dose ICS maintenance + PRN SABA\n3. **Step 3**: Low-dose ICS + LABA\n4. **Step 4**: Medium/high-dose ICS + LABA\n5. **Step 5**: Add-on (tiotropium, anti-IgE, anti-IL-5, OCS)\n\n> **Clinical Pearl**: ICS is the cornerstone of asthma management. SABA monotherapy increases mortality risk (GINA 2019 change). In India, inhaler technique education is critical - spacer devices improve drug delivery.`, mnemonics: [{ text: "SABA = Short Acting Beta Agonist = RESCUE inhaler (salbutamol): acts in 5 min for acute relief", explanation: "Salbutamol (SABA) is the rescue bronchodilator for acute asthma, acting within 5 minutes via beta-2 receptor stimulation on airway smooth muscle." }, { text: "ICS is the CORNERSTONE of asthma: Inhaled Corticosteroids reduce inflammation, prevent exacerbations, save lives", explanation: "Inhaled corticosteroids are the most effective anti-inflammatory drugs for asthma. GINA guidelines no longer recommend SABA-only treatment." }], keyPoints: ["SABA (salbutamol): rescue bronchodilator, beta-2 agonist, onset 5 min", "ICS (budesonide): cornerstone of asthma management, reduces inflammation", "LABA (salmeterol): always with ICS, never alone (increased mortality risk)", "Tiotropium (LAMA): preferred bronchodilator for COPD maintenance", "Montelukast: leukotriene receptor antagonist, oral, add-on therapy", "GINA steps: ICS is foundation, add LABA/tiotropium/biologics as needed"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 17-18 - Bronchodilators, Asthma Drugs", page: "231-255", edition: "8th" }] },
      { layer: 2, slug: "respiratory-pharmacology-mechanism", title: "Respiratory Pharmacology - Mechanism", estimatedMinutes: 30, summary: "Beta-2 receptor signaling, ICS molecular mechanism, leukotriene pathway, and theophylline pharmacology.", contentMd: `# Detailed Mechanisms\n\n## Beta-2 Agonist Mechanism\n1. Bind **beta-2 adrenergic receptors** on airway smooth muscle\n2. Gs protein activation -> **adenylyl cyclase** -> increased **cAMP**\n3. cAMP activates **PKA** (protein kinase A)\n4. PKA phosphorylates MLCK (myosin light chain kinase) -> inactivation\n5. **Smooth muscle relaxation** (bronchodilation)\n6. Also: inhibit mast cell degranulation, increase mucociliary clearance\n\n## ICS Mechanism in Asthma\n- Same genomic mechanism as systemic GCs but **local** delivery\n- Reduce eosinophils, mast cells, T cells in airways\n- Decrease cytokines (IL-4, IL-5, IL-13), mucus secretion\n- Restore beta-2 receptor sensitivity (prevent downregulation)\n- **ADR**: oral candidiasis (rinse mouth after use), dysphonia\n\n## Leukotriene Pathway\n$$\\text{Arachidonic acid} \\xrightarrow{\\text{5-LOX}} \\text{LTA4} \\rightarrow \\text{LTC4, LTD4, LTE4 (cysteinyl LTs)}$$\n- Cysteinyl LTs cause bronchoconstriction (1000x more potent than histamine), mucus secretion, eosinophil chemotaxis\n- **Montelukast**: blocks CysLT1 receptor\n- **Zileuton**: inhibits 5-lipoxygenase (blocks LT synthesis)\n\n## Theophylline\n- **PDE inhibitor**: inhibits phosphodiesterase (increases cAMP)\n- **Adenosine receptor antagonist**: prevents adenosine-induced bronchoconstriction\n- Also: anti-inflammatory, respiratory stimulant\n- **Narrow therapeutic index** (10-20 mcg/mL)\n- CYP1A2 metabolized: smoking induces (lower levels), erythromycin inhibits (toxicity)\n- Toxicity: seizures, arrhythmias, GI effects`, mnemonics: [{ text: "Theophylline therapeutic window is NARROW: 10-20 mcg/mL; too high = seizures and arrhythmias", explanation: "Theophylline has a very narrow therapeutic index. Levels must be monitored (10-20 mcg/mL). Toxicity causes seizures, cardiac arrhythmias, and GI symptoms." }], keyPoints: ["Beta-2 agonists: Gs-cAMP-PKA pathway -> smooth muscle relaxation", "ICS: local anti-inflammatory, restore beta-2 receptor sensitivity, prevent exacerbations", "Leukotrienes: 1000x more potent bronchoconstrictors than histamine", "Montelukast: CysLT1 receptor antagonist; Zileuton: 5-LOX inhibitor", "Theophylline: PDE inhibitor + adenosine antagonist, narrow TI (10-20 mcg/mL)", "ICS ADR: oral candidiasis (rinse mouth), dysphonia"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 17-18", page: "235-250", edition: "8th" }] },
      { layer: 3, slug: "respiratory-pharmacology-clinical", title: "Respiratory Pharmacology - Clinical Application", estimatedMinutes: 20, summary: "Acute asthma management, COPD treatment, status asthmaticus, and Indian inhaler device context.", contentMd: `# Clinical Applications\n\n## Acute Severe Asthma\n1. **Nebulized salbutamol** (5 mg) every 20 min x 3 doses\n2. **Nebulized ipratropium** added for severe cases\n3. **IV hydrocortisone** 200 mg or oral prednisolone 40 mg\n4. **Oxygen** to maintain SpO2 >94%\n5. If refractory: IV magnesium sulfate (2g over 20 min)\n6. Consider IV aminophylline if no theophylline taken\n\n## COPD Management (GOLD)\n- **Group A**: SAMA or SABA PRN\n- **Group B**: LABA or LAMA\n- **Group E**: LABA + LAMA (+ ICS if eosinophils >300)\n- **Tiotropium** (LAMA): preferred maintenance bronchodilator for COPD\n- ICS role limited in COPD (only if frequent exacerbations + eosinophilia)\n\n## Inhaler Devices in India\n| Device | Drug Form | Technique |\n|--------|-----------|----------|\n| MDI (Metered Dose Inhaler) | Pressurized aerosol | Requires coordination (use spacer) |\n| DPI (Dry Powder Inhaler) | Powder (Rotacaps/Revolizer) | Effort-dependent, no coordination needed |\n| Nebulizer | Solution | For acute attacks, children, elderly |\n\n> **Clinical Pearl**: In India, many patients refuse inhalers due to stigma ("pump" = severe disease). Patient education about inhaler benefits over oral medications is critical. Spacer devices improve MDI delivery by 40-50%.`, mnemonics: [{ text: "COPD = LAMA first (Tiotropium), Asthma = ICS first: different cornerstone drugs", explanation: "COPD maintenance cornerstone is LAMA (tiotropium). Asthma cornerstone is ICS (budesonide). LABA should never be used alone in asthma (but can be monotherapy in COPD)." }], keyPoints: ["Acute asthma: nebulized salbutamol + ipratropium + IV hydrocortisone + O2", "COPD: tiotropium (LAMA) is preferred maintenance; ICS only if eosinophilic", "LABA never alone in asthma (increased mortality); always with ICS", "Spacer improves MDI delivery by 40-50%", "Rinse mouth after ICS to prevent oral candidiasis", "Status asthmaticus: IV MgSO4 for refractory cases"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 17-18", edition: "8th" }] },
      { layer: 4, slug: "respiratory-pharmacology-exam", title: "Respiratory Pharmacology - Exam Prep", estimatedMinutes: 15, summary: "High-yield respiratory pharmacology facts.", contentMd: `# Exam High Yield\n\n## One-Liners\n- Rescue inhaler for acute asthma: **Salbutamol (SABA)**\n- Cornerstone of asthma maintenance: **Inhaled corticosteroids**\n- LABA never given alone in asthma due to: **Increased mortality risk (SMART trial)**\n- Preferred COPD maintenance: **Tiotropium (LAMA)**\n- Leukotriene receptor antagonist: **Montelukast (CysLT1 blocker)**\n- Drug with narrow therapeutic index (10-20): **Theophylline**\n- Biologic for severe allergic asthma: **Omalizumab (anti-IgE)**\n- ADR of ICS: **Oral candidiasis, dysphonia**\n- IV drug for refractory status asthmaticus: **MgSO4**\n- Mast cell stabilizer: **Sodium cromoglycate**\n- SABA mechanism: **Beta-2 -> Gs -> cAMP -> PKA -> bronchodilation**\n\n## Previous Year Themes\n- GINA stepwise asthma management\n- Beta-2 agonist signaling pathway\n- Leukotriene pathway and drug targets\n- Theophylline toxicity and drug interactions\n- ICS vs systemic steroids in asthma`, mnemonics: [{ text: "LABA alone in asthma = ALARM: Always combine with ICS, Lone LABA Aggravates Risk of Mortality", explanation: "LABA monotherapy in asthma increases mortality risk. Always combine with ICS (e.g., budesonide-formoterol, fluticasone-salmeterol)." }], keyPoints: ["SABA: rescue; ICS: maintenance cornerstone for asthma", "LABA always with ICS in asthma; LAMA preferred for COPD", "Theophylline: narrow TI (10-20 mcg/mL), CYP1A2 metabolized", "Montelukast: CysLT1 blocker, add-on for asthma", "Omalizumab: anti-IgE for severe allergic asthma"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 17-18", edition: "8th" }] },
      { layer: 5, slug: "respiratory-pharmacology-recall", title: "Respiratory Pharmacology - Active Recall", estimatedMinutes: 10, summary: "Flashcard-style Q&A for respiratory pharmacology.", contentMd: `# Active Recall\n\n**Q1:** What is the mechanism of salbutamol?\n> Beta-2 agonist: binds beta-2 receptors on airway smooth muscle -> Gs -> adenylyl cyclase -> cAMP -> PKA -> MLCK inactivation -> smooth muscle relaxation (bronchodilation).\n\n**Q2:** Why should LABA never be used alone in asthma?\n> LABA monotherapy in asthma increases mortality risk (SMART trial). LABAs do not address underlying inflammation. Always combine with ICS.\n\n**Q3:** What is the cornerstone drug for asthma vs COPD?\n> Asthma: ICS (inhaled corticosteroids). COPD: LAMA (tiotropium). Different pathophysiology drives different first-line choices.\n\n**Q4:** How does montelukast work?\n> Blocks CysLT1 (cysteinyl leukotriene type 1) receptors, preventing LTD4-induced bronchoconstriction, mucus secretion, and eosinophil chemotaxis.\n\n**Q5:** What is the therapeutic range of theophylline?\n> 10-20 mcg/mL. Very narrow therapeutic index. Above 20: nausea, vomiting. Above 40: seizures, arrhythmias.\n\n**Q6:** How do you manage acute severe asthma?\n> Nebulized salbutamol (every 20 min) + nebulized ipratropium + IV hydrocortisone/oral prednisolone + oxygen. If refractory: IV MgSO4.\n\n**Q7:** What ADR should patients be counseled about with ICS?\n> Oral candidiasis (thrush) - prevented by rinsing mouth with water after each use. Also dysphonia (hoarse voice).\n\n**Q8:** What is omalizumab?\n> Monoclonal antibody against IgE (anti-IgE). Used for severe persistent allergic asthma uncontrolled by high-dose ICS + LABA.\n\n**Q9:** What role does ICS play in COPD?\n> Limited role - only recommended if frequent exacerbations AND blood eosinophils >300/mcL. LAMA/LABA are the mainstay.\n\n**Q10:** Why is a spacer recommended with MDI?\n> Spacer improves drug delivery by 40-50%, reduces oropharyngeal deposition, reduces need for hand-breath coordination, and reduces systemic absorption (fewer ADRs).`, mnemonics: [], keyPoints: ["10 recall questions covering bronchodilator mechanisms, asthma management, COPD differences, and device counseling"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 17-18", edition: "8th" }] },
    ],
  },

  // ─── Topic 3: Anticancer Drugs ─────────────────────────────
  {
    topicCode: "PH-MOD-08-TOP-03",
    layers: [
      { layer: 1, slug: "anticancer-drugs-foundation", title: "Anticancer Drugs - Foundation", estimatedMinutes: 20, summary: "Anticancer drugs are classified by mechanism: alkylating agents, antimetabolites, plant alkaloids, antibiotics, hormonal agents, and targeted/immunotherapy. Understanding cell cycle specificity and common toxicities is essential.", contentMd: `# Anticancer Drugs\n\n## Classification\n\n| Class | Drugs | Mechanism |\n|-------|------|-----------|\n| **Alkylating agents** | Cyclophosphamide, Cisplatin, Chlorambucil | Cross-link DNA |\n| **Antimetabolites** | Methotrexate, 5-FU, Cytarabine, 6-MP | Mimic metabolites, block DNA/RNA synthesis |\n| **Vinca alkaloids** | Vincristine, Vinblastine | Inhibit microtubule polymerization (M phase) |\n| **Taxanes** | Paclitaxel, Docetaxel | Stabilize microtubules (prevent depolymerization) |\n| **Topoisomerase inhibitors** | Etoposide (Topo II), Irinotecan (Topo I) | DNA strand breaks |\n| **Antitumor antibiotics** | Doxorubicin, Bleomycin, Dactinomycin | DNA intercalation, free radicals |\n| **Hormonal** | Tamoxifen, Letrozole, Flutamide, GnRH agonists | Hormone-dependent cancers |\n| **Targeted therapy** | Imatinib, Trastuzumab, Rituximab, Bevacizumab | Specific molecular targets |\n| **Immunotherapy** | Nivolumab, Pembrolizumab | PD-1 checkpoint inhibitors |\n\n## Cell Cycle Specificity\n- **Phase-specific**: Antimetabolites (S phase), Vincas/Taxanes (M phase)\n- **Phase-nonspecific**: Alkylating agents, antitumor antibiotics (act on all phases)\n\n## Common Toxicities\n| Toxicity | Common Agents | Prevention |\n|----------|--------------|------------|\n| Myelosuppression | Most cytotoxics (NOT vincristine, bleomycin) | G-CSF (filgrastim) |\n| Cardiotoxicity | Doxorubicin | Dexrazoxane (iron chelator) |\n| Pulmonary fibrosis | Bleomycin | Dose limit |\n| Hemorrhagic cystitis | Cyclophosphamide | Mesna |\n| Nephrotoxicity | Cisplatin | Aggressive hydration |\n| Neurotoxicity | Vincristine, Cisplatin, Oxaliplatin | Dose reduction |\n\n> **Clinical Pearl**: Imatinib (Gleevec) revolutionized CML treatment by targeting BCR-ABL tyrosine kinase. Indian generic imatinib made treatment affordable globally. This is a landmark in targeted therapy.`, mnemonics: [{ text: "VINcristine = VIN-NERVE (neurotoxic): vincristine causes peripheral neuropathy but minimal myelosuppression", explanation: "Vincristine's dose-limiting toxicity is neurotoxicity (peripheral neuropathy, foot drop), NOT myelosuppression. One of the few anticancer drugs that spares the bone marrow." }, { text: "DOXOrubicin = TOXIC to heart: dose-limiting cardiotoxicity (dilated cardiomyopathy), prevented by dexrazoxane", explanation: "Doxorubicin generates free radicals via iron that damage cardiac myocytes. Cumulative dose-dependent cardiotoxicity. Dexrazoxane chelates iron, preventing free radical formation." }], keyPoints: ["Alkylating agents: cross-link DNA, phase-nonspecific, myelosuppression", "Antimetabolites: S-phase specific, mimic normal metabolites", "Vincristine: neurotoxic (NOT myelosuppressive); Doxorubicin: cardiotoxic", "Cyclophosphamide: hemorrhagic cystitis prevented by mesna", "Cisplatin: nephrotoxic, prevented by aggressive hydration", "Imatinib: BCR-ABL TK inhibitor, revolutionary for CML"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 62 - Anticancer Drugs", page: "890-925", edition: "8th" }] },
      { layer: 2, slug: "anticancer-drugs-mechanism", title: "Anticancer Drugs - Mechanism", estimatedMinutes: 30, summary: "Detailed mechanisms of key anticancer drugs: methotrexate folate antagonism, 5-FU thymidylate synthase inhibition, platinum DNA cross-linking, and targeted therapy molecular targets.", contentMd: `# Detailed Mechanisms\n\n## Methotrexate\n- Structural analogue of **folic acid**\n- Inhibits **dihydrofolate reductase (DHFR)** (high affinity)\n- Blocks conversion of dihydrofolate to tetrahydrofolate\n- Depletes **thymidylate and purine** synthesis\n- S-phase specific\n- **Leucovorin rescue**: folinic acid bypasses DHFR block, rescuing normal cells\n\n## 5-Fluorouracil (5-FU)\n- Pyrimidine analogue converted to **5-FdUMP**\n- Inhibits **thymidylate synthase** (blocks dTMP synthesis)\n- Also incorporated into RNA (disrupts RNA processing)\n- Used for: colorectal cancer, breast cancer, head/neck cancers\n\n## Cisplatin\n- Forms **intrastrand and interstrand DNA cross-links**\n- Primarily cross-links guanine residues\n- Prevents DNA replication and transcription\n- Phase-nonspecific\n- **Dose-limiting toxicity**: nephrotoxicity (prevented by hydration + mannitol)\n- Also: ototoxicity, severe emetogenicity\n\n## Imatinib (Targeted Therapy)\n- Inhibits **BCR-ABL tyrosine kinase** (Philadelphia chromosome fusion protein)\n- Also inhibits c-KIT and PDGFR\n- DOC for **CML** (chronic myeloid leukemia) and **GIST** (GI stromal tumors)\n- Oral, well-tolerated compared to cytotoxic chemo\n\n## Immune Checkpoint Inhibitors\n- **PD-1 inhibitors** (Nivolumab, Pembrolizumab): block PD-1 on T cells\n- PD-L1 on tumor cells normally binds PD-1, sending "don't attack" signal\n- Blocking PD-1 unleashes T-cell anti-tumor immunity\n- ADRs: immune-related (autoimmune thyroiditis, colitis, pneumonitis, hepatitis)`, mnemonics: [{ text: "Methotrexate blocks DHFR; Leucovorin RESCUES: folinic acid bypasses the block to save normal cells", explanation: "Methotrexate inhibits DHFR, blocking folate metabolism. Leucovorin (folinic acid) is the reduced folate that bypasses the DHFR step, rescuing normal cells from methotrexate toxicity." }], keyPoints: ["Methotrexate: DHFR inhibitor, S-phase, leucovorin rescue for toxicity", "5-FU: thymidylate synthase inhibitor, used in colorectal cancer", "Cisplatin: DNA cross-links (guanine), nephrotoxic, highly emetogenic", "Imatinib: BCR-ABL TK inhibitor for CML, also inhibits c-KIT (GIST)", "PD-1 inhibitors: unleash T-cell anti-tumor immunity, immune-related ADRs", "Taxanes: stabilize microtubules (opposite of vincas which destabilize)"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 62", page: "895-920", edition: "8th" }] },
      { layer: 3, slug: "anticancer-drugs-clinical", title: "Anticancer Drugs - Clinical Application", estimatedMinutes: 20, summary: "Clinical use of anticancer drugs, management of toxicities, and Indian oncology context.", contentMd: `# Clinical Applications\n\n## Common Regimens\n| Cancer | Regimen | Drugs |\n|--------|---------|-------|\n| Breast (ER+) | Tamoxifen/Aromatase inhibitor | Hormonal |\n| Breast (HER2+) | Trastuzumab + Chemo | Targeted + Cytotoxic |\n| CML | Imatinib | Targeted TKI |\n| Hodgkin lymphoma | ABVD | Doxorubicin, Bleomycin, Vinblastine, Dacarbazine |\n| NHL | R-CHOP | Rituximab, Cyclophosphamide, Doxorubicin, Vincristine, Prednisone |\n| Testicular | BEP | Bleomycin, Etoposide, Cisplatin |\n| Colorectal | FOLFOX | 5-FU, Leucovorin, Oxaliplatin |\n\n## Toxicity Management\n| Toxicity | Agent | Management |\n|----------|-------|-----------|\n| Doxorubicin cardiotoxicity | Dexrazoxane | Iron chelator, limits free radicals |\n| Cyclophosphamide cystitis | Mesna | Inactivates acrolein |\n| Cisplatin nephrotoxicity | IV saline + mannitol | Forced diuresis |\n| Methotrexate toxicity | Leucovorin rescue | Bypasses DHFR block |\n| Neutropenia | G-CSF (Filgrastim) | Stimulates neutrophil production |\n| CINV | Ondansetron + Dexa + Aprepitant | Triple antiemetic |\n\n## Indian Oncology Context\n- India's generic pharmaceutical industry produces affordable anticancer drugs\n- Generic imatinib: Rs 8000/month vs original Rs 1,20,000/month\n- **Ayushman Bharat-PMJAY**: covers cancer treatment up to Rs 5 lakh\n- **Cervical cancer**: HPV vaccination (Cervavac - India's first quadrivalent) introduced under NIP\n- Tobacco-related cancers (oral, lung): leading cause - ban on gutka in many states\n\n> **Clinical Pearl**: India launched Cervavac (indigenously developed quadrivalent HPV vaccine) in 2023 at Rs 2000 per dose (vs Rs 4000 for Gardasil), making cervical cancer prevention more accessible.`, mnemonics: [{ text: "ABVD for Hodgkin: Adriamycin (doxorubicin), Bleomycin, Vinblastine, Dacarbazine", explanation: "Standard first-line chemotherapy regimen for Hodgkin lymphoma. Monitor for doxorubicin cardiotoxicity and bleomycin pulmonary fibrosis." }], keyPoints: ["Doxorubicin cardiotoxicity: dexrazoxane prevention, cumulative dose limit", "Cyclophosphamide cystitis: mesna inactivates acrolein", "Cisplatin nephrotoxicity: IV hydration + mannitol diuresis", "Methotrexate rescue: leucovorin (folinic acid)", "Generic imatinib: Indian pharma makes CML treatment affordable globally", "Cervavac: India's first indigenous HPV vaccine"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 62", edition: "8th" }] },
      { layer: 4, slug: "anticancer-drugs-exam", title: "Anticancer Drugs - Exam Prep", estimatedMinutes: 15, summary: "High-yield anticancer pharmacology facts.", contentMd: `# Exam High Yield\n\n## One-Liners\n- Anticancer drug causing hemorrhagic cystitis: **Cyclophosphamide (prevent with mesna)**\n- Anticancer drug causing cardiotoxicity: **Doxorubicin (prevent with dexrazoxane)**\n- Anticancer drug causing pulmonary fibrosis: **Bleomycin**\n- Anticancer drug NOT causing myelosuppression: **Vincristine, Bleomycin, Asparaginase**\n- Vincristine dose-limiting toxicity: **Peripheral neuropathy (neurotoxicity)**\n- DOC for CML: **Imatinib (BCR-ABL TK inhibitor)**\n- Antimetabolite antifolate: **Methotrexate (DHFR inhibitor)**\n- Leucovorin rescues toxicity of: **Methotrexate**\n- Most emetogenic anticancer drug: **Cisplatin**\n- Taxane mechanism: **Stabilize microtubules (prevent depolymerization)**\n- Vinca alkaloid mechanism: **Inhibit microtubule polymerization**\n- PD-1 checkpoint inhibitors: **Nivolumab, Pembrolizumab**\n- Anti-HER2 antibody: **Trastuzumab**\n\n## Previous Year Themes\n- Cell cycle phase specificity\n- Drug-specific toxicities and their prevention\n- Methotrexate mechanism and leucovorin rescue\n- Targeted therapy molecular targets\n- Chemotherapy regimen identification`, mnemonics: [{ text: "Anticancer drugs WITHOUT myelosuppression: VBA = Vincristine, Bleomycin, Asparaginase", explanation: "Most anticancer drugs cause myelosuppression. Three notable exceptions: Vincristine (neurotoxic instead), Bleomycin (pulmonary toxic instead), and Asparaginase (pancreatitis instead)." }], keyPoints: ["Vincristine: neurotoxic, NOT myelosuppressive", "Doxorubicin: cardiotoxic, dexrazoxane prevents", "Cyclophosphamide: hemorrhagic cystitis, mesna prevents", "Cisplatin: nephrotoxic + most emetogenic", "Imatinib: BCR-ABL for CML, c-KIT for GIST"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 62", edition: "8th" }] },
      { layer: 5, slug: "anticancer-drugs-recall", title: "Anticancer Drugs - Active Recall", estimatedMinutes: 10, summary: "Flashcard-style Q&A for anticancer drugs.", contentMd: `# Active Recall\n\n**Q1:** What is the mechanism of methotrexate?\n> Inhibits dihydrofolate reductase (DHFR), blocking conversion of dihydrofolate to tetrahydrofolate, depleting thymidylate and purines needed for DNA synthesis. S-phase specific.\n\n**Q2:** How is methotrexate toxicity rescued?\n> Leucovorin (folinic acid) - provides reduced folate that bypasses the DHFR block, rescuing normal cells.\n\n**Q3:** What is the dose-limiting toxicity of doxorubicin?\n> Cumulative dose-dependent cardiotoxicity (dilated cardiomyopathy). Due to free radical generation via iron. Prevented by dexrazoxane (iron chelator).\n\n**Q4:** Why is mesna given with cyclophosphamide?\n> Cyclophosphamide's metabolite acrolein damages bladder urothelium causing hemorrhagic cystitis. Mesna (2-mercaptoethane sulfonate) binds and inactivates acrolein.\n\n**Q5:** How do vinca alkaloids and taxanes differ in mechanism?\n> Vincas (vincristine, vinblastine): INHIBIT microtubule polymerization (prevent assembly). Taxanes (paclitaxel): STABILIZE microtubules (prevent disassembly). Both arrest at M phase.\n\n**Q6:** What is imatinib's target?\n> BCR-ABL tyrosine kinase (Philadelphia chromosome fusion protein in CML). Also inhibits c-KIT (GIST) and PDGFR.\n\n**Q7:** Name three anticancer drugs that do NOT cause myelosuppression.\n> Vincristine (neurotoxic instead), Bleomycin (pulmonary fibrosis instead), Asparaginase (pancreatitis instead).\n\n**Q8:** How do PD-1 inhibitors work?\n> Block PD-1 receptor on T cells. Normally, tumor PD-L1 binds PD-1 to suppress T-cell activity. Blocking this interaction unleashes T-cell anti-tumor immunity.\n\n**Q9:** What makes cisplatin highly emetogenic?\n> Cisplatin triggers massive 5-HT3 release from enterochromaffin cells in the GI tract, stimulating vagal afferents and the CTZ. Requires triple antiemetic regimen.\n\n**Q10:** What is the significance of Indian generic anticancer drugs?\n> India produces affordable generics (e.g., imatinib at 1/15th cost), making cancer treatment accessible globally. Cervavac is India's first indigenous HPV vaccine for cervical cancer prevention.`, mnemonics: [], keyPoints: ["10 recall questions covering mechanisms, toxicities, prevention strategies, and targeted therapy"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 62", edition: "8th" }] },
    ],
  },

  // ─── Topic 4: Drugs Acting on Uterus & Blood ──────────────
  {
    topicCode: "PH-MOD-08-TOP-04",
    layers: [
      { layer: 1, slug: "uterus-blood-drugs-foundation", title: "Drugs Acting on Uterus & Blood - Foundation", estimatedMinutes: 20, summary: "Oxytocics (oxytocin, ergometrine, PGE2/PGF2-alpha, misoprostol) and tocolytics for uterine pharmacology. Hematinics (iron, folic acid, B12) and plasma expanders for blood pharmacology. Key for obstetric and anemia management in India.", contentMd: `# Drugs Acting on Uterus & Blood\n\n## Oxytocics (Uterine Stimulants)\n\n| Drug | Mechanism | Use |\n|------|-----------|-----|\n| **Oxytocin** | Oxytocin receptor agonist | Induction of labor, PPH prevention |\n| **Ergometrine (Methylergometrine)** | 5-HT, alpha receptor agonist | PPH treatment (tetanic contraction) |\n| **PGE2 (Dinoprostone)** | PG receptor agonist | Cervical ripening |\n| **PGF2-alpha (Carboprost)** | PG receptor agonist | Refractory PPH |\n| **Misoprostol (PGE1)** | PG receptor agonist | PPH prevention, medical abortion |\n\n### Key Differences\n- **Oxytocin**: rhythmic contractions (physiological), IV drip for induction\n- **Ergometrine**: sustained tetanic contraction (non-physiological), IM for PPH\n- Ergometrine is CONTRAINDICATED in hypertension and heart disease\n\n## Tocolytics (Uterine Relaxants)\n| Drug | Mechanism | Use |\n|------|-----------|-----|\n| **Ritodrine, Isoxsuprine** | Beta-2 agonists | Preterm labor (less used now) |\n| **Nifedipine** | CCB | Preferred tocolytic |\n| **Atosiban** | Oxytocin receptor antagonist | Preterm labor |\n| **MgSO4** | Ca2+ antagonism | Eclampsia + mild tocolytic |\n\n## Hematinics\n| Drug | Indication | Notes |\n|------|-----------|-------|\n| **Ferrous sulfate** | Iron deficiency anemia | Take on empty stomach with vitamin C |\n| **IV Iron (sucrose/carboxymaltose)** | Severe IDA, oral intolerance | Hospital setting |\n| **Folic acid** | Megaloblastic anemia, pregnancy | 5 mg/day; 0.4 mg/day for NTD prevention |\n| **Vitamin B12 (Cyanocobalamin)** | Pernicious anemia | IM injection (oral if dietary deficiency) |\n| **Erythropoietin (EPO)** | CKD-related anemia | SC injection |\n\n## Plasma Expanders\n- **Crystalloids**: Normal saline, Ringer's lactate (first-line for volume resuscitation)\n- **Colloids**: Dextran, Hydroxyethyl starch (HES), Albumin\n\n> **Clinical Pearl**: India has one of the highest rates of iron deficiency anemia globally, especially in women and children. Under Anemia Mukt Bharat (AMB), weekly IFA (Iron + Folic Acid) tablets are distributed to adolescent girls.`, mnemonics: [{ text: "Oxytocin for RHYTHMIC, Ergometrine for TETANIC contractions: different contraction patterns", explanation: "Oxytocin produces rhythmic contractions (suitable for labor induction). Ergometrine produces sustained tetanic contractions (better for PPH control but not for induction)." }, { text: "IFA for AMB: Iron + Folic Acid under Anemia Mukt Bharat program", explanation: "India's Anemia Mukt Bharat provides weekly IFA supplementation to adolescent girls and pregnant women to address the high prevalence of iron deficiency anemia." }], keyPoints: ["Oxytocin: rhythmic contractions for labor induction; PPH prevention", "Ergometrine: tetanic contractions for PPH; contraindicated in hypertension", "Misoprostol: PPH prevention + medical abortion (with mifepristone)", "Nifedipine: preferred tocolytic for preterm labor", "Iron deficiency anemia: ferrous sulfate oral; IV iron for severe cases", "Anemia Mukt Bharat: weekly IFA for adolescent girls"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 24, Ch 43 - Oxytocics, Hematinics", edition: "8th" }, { book: "DC Dutta", chapter: "Drugs in Obstetrics", edition: "9th" }] },
      { layer: 2, slug: "uterus-blood-drugs-mechanism", title: "Drugs Acting on Uterus & Blood - Mechanism", estimatedMinutes: 30, summary: "Oxytocin receptor signaling, ergot alkaloid pharmacology, iron absorption and metabolism, and B12/folate pathways.", contentMd: `# Detailed Mechanisms\n\n## Oxytocin Receptor Signaling\n1. Oxytocin binds **OT receptor** (Gq-coupled) on myometrium\n2. Activates **PLC -> IP3 -> Ca2+ release** from SR\n3. Ca2+-calmodulin activates **MLCK** -> myosin phosphorylation\n4. **Rhythmic uterine contractions**\n5. Sensitivity increases through pregnancy (receptor upregulation near term)\n6. At term: ~100x more oxytocin receptors than non-pregnant state\n\n### Oxytocin ADRs\n- Water intoxication (ADH-like effect at high doses)\n- Uterine hyperstimulation -> fetal distress\n- Uterine rupture (if used with scarred uterus without caution)\n\n## Ergometrine\n- Acts on **5-HT2, alpha-adrenergic** receptors on uterine smooth muscle\n- Produces **sustained tetanic contraction** (unlike oxytocin's rhythmic)\n- Onset: IM 2-5 min, oral 10-15 min\n- Duration: 3-4 hours\n- Contraindicated: hypertension, heart disease, hepatic disease, 1st/2nd stage of labor\n\n## Iron Pharmacology\n### Absorption\n- Absorbed in **duodenum and upper jejunum**\n- **Fe2+ (ferrous)** absorbed better than Fe3+ (ferric)\n- **Vitamin C** enhances absorption (reduces Fe3+ to Fe2+)\n- **Tea, milk, antacids** reduce absorption\n\n### Metabolism\n- Transported by **transferrin** in blood\n- Stored as **ferritin** (soluble) and **hemosiderin** (insoluble)\n- Regulated by **hepcidin** (master iron regulator from liver)\n- No significant excretory mechanism (iron balance by absorption regulation)\n\n### Iron Preparations\n| Preparation | Fe content | Route |\n|------------|-----------|-------|\n| Ferrous sulfate | 20% elemental Fe | Oral |\n| Ferrous fumarate | 33% elemental Fe | Oral |\n| Iron sucrose | 20 mg/mL | IV |\n| Ferric carboxymaltose | 50 mg/mL | IV (single large dose) |\n\n## Folate & B12 Pathways\n- **Folic acid** -> dihydrofolate -> tetrahydrofolate (active form)\n- THF needed for **thymidylate synthesis** (DNA) and **purine synthesis**\n- **Vitamin B12** needed for **methionine synthase** reaction\n  - Converts homocysteine to methionine\n  - Regenerates THF from methyl-THF ("folate trap")\n- B12 deficiency: megaloblastic anemia + **neurological damage** (subacute combined degeneration)\n- Folate deficiency: megaloblastic anemia WITHOUT neurological damage`, mnemonics: [{ text: "B12 deficiency = Blood (megaloblastic) + Brain (neuropathy): folate deficiency = Blood only", explanation: "B12 deficiency causes both megaloblastic anemia and neurological damage (subacute combined degeneration of spinal cord). Folate deficiency causes megaloblastic anemia without neurological involvement." }], keyPoints: ["Oxytocin: Gq-PLC-IP3-Ca2+ pathway, rhythmic contractions, water intoxication risk", "Ergometrine: tetanic contractions via 5-HT/alpha receptors, CI in hypertension", "Iron: absorbed as Fe2+ in duodenum, enhanced by vitamin C, regulated by hepcidin", "B12 deficiency: megaloblastic anemia + neurological damage (folate trap)", "Folate deficiency: megaloblastic anemia only, no neuropathy", "Hepcidin: master regulator of iron homeostasis"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 24, Ch 43", edition: "8th" }] },
      { layer: 3, slug: "uterus-blood-drugs-clinical", title: "Drugs Acting on Uterus & Blood - Clinical Application", estimatedMinutes: 20, summary: "Management of PPH, preterm labor, iron deficiency anemia, and megaloblastic anemia in Indian context.", contentMd: `# Clinical Applications\n\n## PPH Management (AMTSL)\n**Active Management of Third Stage of Labor:**\n1. **Oxytocin 10 IU IM** immediately after delivery of baby\n2. Controlled cord traction\n3. Uterine massage\n\n### If PPH Occurs:\n- **Oxytocin** infusion (20 IU in 500 mL NS)\n- **Methylergometrine** 0.2 mg IM (if no hypertension)\n- **Misoprostol** 600-800 mcg sublingual/rectal\n- **Carboprost (PGF2-alpha)** 250 mcg IM (refractory PPH)\n- If all drugs fail: surgical intervention (B-Lynch suture, hysterectomy)\n\n## Preterm Labor\n- **Nifedipine** (oral): preferred tocolytic (fewest side effects)\n- **Betamethasone** 12 mg IM x 2 (24 hr apart): fetal lung maturity (24-34 weeks)\n- **MgSO4**: for fetal neuroprotection + eclampsia prevention\n\n## Iron Deficiency Anemia (Indian Context)\n- **Oral iron**: Ferrous sulfate 200 mg TDS (65 mg elemental Fe per tab) for 3-6 months\n- Take on empty stomach with vitamin C; continue 3 months after Hb normalizes\n- **IV iron**: ferric carboxymaltose (single dose 1000 mg) for rapid correction\n- **National programs**: Anemia Mukt Bharat, weekly IFA for adolescents\n\n## Megaloblastic Anemia\n- **Folic acid deficiency**: folic acid 5 mg/day oral\n- **B12 deficiency**: cyanocobalamin 1000 mcg IM daily x 7, then weekly x 4, then monthly\n- **CRITICAL**: Never give folic acid alone in B12 deficiency (corrects anemia but worsens neuropathy - masks B12 deficiency)\n\n> **Clinical Pearl**: Misoprostol (PGE1 analogue) is WHO-recommended for PPH prevention in resource-limited settings where oxytocin cold chain is unavailable. It is heat-stable and can be given sublingually.`, mnemonics: [{ text: "AMTSL = Active Management Third Stage of Labor: Oxytocin 10 IU IM after baby delivery", explanation: "AMTSL prevents PPH: oxytocin 10 IU IM within 1 minute of delivery, controlled cord traction, and uterine massage. Reduces PPH by 60%." }, { text: "Never FOLD alone in B12 deficiency: Folic acid without B12 = masks anemia but Lets neuropathy worsen Dangerously", explanation: "Giving folic acid alone in B12 deficiency corrects the megaloblastic anemia (masking the diagnosis) but allows irreversible neurological damage to progress." }], keyPoints: ["AMTSL: oxytocin 10 IU IM after delivery prevents PPH", "PPH drugs (escalation): oxytocin -> methylergometrine -> misoprostol -> carboprost", "Nifedipine: preferred tocolytic; betamethasone for fetal lung maturity", "Iron: oral ferrous sulfate 3-6 months; IV ferric carboxymaltose for rapid correction", "Never give folate alone in B12 deficiency (masks anemia, worsens neuropathy)", "Misoprostol: heat-stable, useful where oxytocin cold chain unavailable"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 24, Ch 43", edition: "8th" }, { book: "DC Dutta", chapter: "PPH Management", edition: "9th" }] },
      { layer: 4, slug: "uterus-blood-drugs-exam", title: "Drugs Acting on Uterus & Blood - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts for uterine and blood pharmacology.", contentMd: `# Exam High Yield\n\n## One-Liners\n- DOC for labor induction: **Oxytocin IV infusion**\n- DOC for PPH prevention: **Oxytocin 10 IU IM (AMTSL)**\n- Oxytocic contraindicated in hypertension: **Ergometrine**\n- PGF2-alpha for refractory PPH: **Carboprost (15-methyl PGF2-alpha)**\n- Heat-stable oxytocic for resource-limited settings: **Misoprostol**\n- Preferred tocolytic: **Nifedipine (CCB)**\n- DOC for eclampsia: **MgSO4 (Pritchard/Zuspan regimen)**\n- Iron absorption site: **Duodenum and upper jejunum**\n- Enhances iron absorption: **Vitamin C (ascorbic acid)**\n- Master iron regulator: **Hepcidin**\n- B12 deficiency unique feature vs folate: **Neurological damage (SACD)**\n- Never give folate alone in: **B12 deficiency (masks anemia, worsens neuropathy)**\n- EPO used for: **CKD-related anemia**\n- India's anemia program: **Anemia Mukt Bharat (weekly IFA)**\n\n## Previous Year Themes\n- Oxytocin vs ergometrine comparison\n- PPH management stepwise\n- Iron absorption factors\n- B12 vs folate deficiency distinction\n- Tocolytic drug selection`, mnemonics: [{ text: "Ergometrine = ERGOT = constricts Everything (uterus, vessels): avoid in Hypertension", explanation: "Ergometrine, an ergot alkaloid, causes vasoconstriction and uterine tetanic contraction. Contraindicated in hypertension, heart disease, and pre-eclampsia due to dangerous vasoconstriction." }], keyPoints: ["Oxytocin: rhythmic contractions, labor induction, PPH prevention", "Ergometrine: tetanic contractions, CI in hypertension", "Misoprostol: heat-stable, WHO-recommended where cold chain unavailable", "Iron: duodenal absorption, vitamin C enhances, hepcidin regulates", "B12 deficiency: megaloblastic anemia + SACD; folate: anemia only", "Never give folate without B12 if B12 deficiency suspected"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 24, Ch 43", edition: "8th" }] },
      { layer: 5, slug: "uterus-blood-drugs-recall", title: "Drugs Acting on Uterus & Blood - Active Recall", estimatedMinutes: 10, summary: "Flashcard-style Q&A for uterine and blood drugs.", contentMd: `# Active Recall\n\n**Q1:** What is the mechanism of oxytocin on the uterus?\n> Binds Gq-coupled oxytocin receptors on myometrium -> PLC -> IP3 -> Ca2+ release -> calmodulin-MLCK activation -> rhythmic contractions.\n\n**Q2:** Why is ergometrine contraindicated in hypertension?\n> Ergometrine acts on alpha-adrenergic and 5-HT receptors, causing vasoconstriction and sustained hypertension. Dangerous in pre-eclampsia and cardiac disease.\n\n**Q3:** What is AMTSL and what drug is central to it?\n> Active Management of Third Stage of Labor: Oxytocin 10 IU IM given within 1 minute of baby delivery, plus controlled cord traction and uterine massage. Reduces PPH by 60%.\n\n**Q4:** Why is misoprostol valuable in resource-limited settings?\n> Misoprostol is heat-stable (no cold chain needed unlike oxytocin), can be given sublingually/rectally, and is effective for PPH prevention and treatment.\n\n**Q5:** What form of iron is best absorbed?\n> Ferrous (Fe2+) form, absorbed in the duodenum. Vitamin C enhances absorption by reducing Fe3+ to Fe2+.\n\n**Q6:** What is hepcidin and its role?\n> Hepcidin is a peptide hormone produced by the liver that is the master regulator of iron homeostasis. It degrades ferroportin (iron exporter), reducing iron absorption and release.\n\n**Q7:** What is the "folate trap" in B12 deficiency?\n> B12 is needed for methionine synthase, which converts methyl-THF to THF. Without B12, folate is trapped as methyl-THF and cannot participate in DNA synthesis, causing megaloblastic anemia.\n\n**Q8:** Why should folate never be given alone in B12 deficiency?\n> Folate corrects the megaloblastic anemia (masking the B12 deficiency) but does NOT address the neurological damage, which progresses to irreversible SACD.\n\n**Q9:** What is the preferred tocolytic for preterm labor?\n> Nifedipine (calcium channel blocker) - oral, effective, fewer side effects than beta-2 agonists (ritodrine).\n\n**Q10:** What drug is used for fetal neuroprotection in preterm delivery?\n> Magnesium sulfate (MgSO4) - reduces risk of cerebral palsy when given before preterm delivery at <32 weeks.`, mnemonics: [], keyPoints: ["10 recall questions covering oxytocics, tocolytics, iron pharmacology, and B12/folate deficiency"], textbookRefs: [{ book: "KD Tripathi", chapter: "Ch 24, Ch 43", edition: "8th" }] },
    ],
  },
];
