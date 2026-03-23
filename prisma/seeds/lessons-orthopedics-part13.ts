import type { TopicLessons } from "./content-loader";

export const orthopedicsLessonsPart13: TopicLessons[] = [
  {
    topicCode: "OR-MOD-06-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "osteoporosis-layer-1-foundation",
        title: "Osteoporosis & Metabolic Bone Disease - Foundation",
        estimatedMinutes: 20,
        summary: "Osteoporosis is reduced bone mineral density (BMD) with microarchitectural deterioration increasing fracture risk. DEXA T-score ≥-2.5 confirms diagnosis. Risk factors: age, female, low calcium/vitamin D, sedentary lifestyle, smoking, corticosteroids. Rickets is defective bone mineralization (vitamin D deficiency most common). Treatment: calcium, vitamin D, bisphosphonates, HRT. Prevention critical through exercise, adequate nutrition.",
        contentMd: `# Osteoporosis & Metabolic Bone Disease - Foundation

## Definition & Classification

### Osteoporosis
- Low bone mineral density (BMD) with microarchitectural deterioration
- Affects 1 in 3 women, 1 in 5 men >50 years
- DEXA T-score: <-2.5 SD = osteoporosis
  - Normal: >-1.0
  - Osteopenia: -1.0 to -2.5
  - Osteoporosis: <-2.5

### Types
1. Primary osteoporosis
   - Postmenopausal (Type 1): estrogen loss
   - Age-related (Type 2): >70 years

2. Secondary osteoporosis
   - Corticosteroids (most common)
   - Endocrine (hyperthyroidism, hyperparathyroidism, diabetes)
   - GI (malabsorption, liver disease)
   - Renal (CKD, RTA)

### Rickets
- Defective mineralization during growth
- Types: Nutritional (vitamin D deficiency, most common), Hypophosphatemic, Renal, Hypophosphatasia

## Pathophysiology Basics

### Bone Remodeling
- **Osteoclasts**: Bone resorption → lacunae
- **Osteoblasts**: Bone formation → new matrix
- Osteoporosis: resorption >formation

## Risk Factors

### Non-modifiable
- Age, female, small frame, family history

### Modifiable
- Low calcium/vitamin D, smoking, alcohol, sedentary

### Medical
- Corticosteroids, thyroid disorder, malabsorption

## Clinical Presentation

### Osteoporosis
- Usually asymptomatic until fracture
- Fractures: hip, spine, wrist
- Height loss, kyphosis ("Dowager's hump")

### Rickets
- Skeletal: bowing, frontal bossing, rachitic rosary
- Growth stunting, delayed milestones
- Muscle weakness, hypocalcemia symptoms
- Dental delayed eruption

## Diagnostic Approach

### DEXA Scan (Gold Standard)
- T-score interpretation
- Sites: lumbar spine, hip (femoral neck)
- Frequency: every 1-2 years if abnormal
- Indications: women >65, men >70, risk factors

### Biochemical Markers
- Calcium (normal or low)
- Phosphate (low in rickets)
- Alkaline phosphatase (high, bone turnover)
- Vitamin D 25-OH: <20 ng/mL = deficiency

### Other Tests
- PTH (high if secondary hyperparathyroidism)
- Thyroid function, renal function
- X-rays (decreased density in osteoporosis)`,
        mnemonics: [
          {
            text: "DEXA T-SCORE: >-1 Normal, -1 to -2.5 Osteopenia, <-2.5 Osteoporosis",
            explanation: "DEXA score interpretation"
          },
          {
            text: "RICKETY: Rickets=Restricted mineralization, Inadequate vitamin D, Clinical bowing, Kyphosis, Elevated phosphatase, Tetany (hypocalcemia)",
            explanation: "Rickets features"
          }
        ],
        keyPoints: [
          "Osteoporosis: DEXA T-score <-2.5; asymptomatic until fracture",
          "Risk factors: postmenopause, corticosteroids, low calcium/vitamin D, smoking, sedentary",
          "Rickets: defective mineralization; vitamin D deficiency most common",
          "Management: calcium, vitamin D supplementation, bisphosphonates, weight-bearing exercise",
          "Prevention critical through exercise, adequate nutrition"
        ],
        textbookRefs: [
          { book: "Maheshwari's Orthopedics", chapter: "Metabolic Bone Disease", edition: "9th" },
          { book: "OP Ghai - Essential Pediatrics", chapter: "Ch 20", edition: "9th" }
        ]
      },
      {
        layer: 2,
        slug: "osteoporosis-layer-2-mechanism",
        title: "Osteoporosis & Metabolic Bone Disease - Mechanism",
        estimatedMinutes: 25,
        summary: "Osteoporosis results from imbalance in bone remodeling: osteoclast hyperactivity > osteoblast function. Estrogen deficiency (postmenopause) increases RANKL → osteoclast activation → accelerated resorption. Vitamin D deficiency impairs calcium absorption → secondary hyperparathyroidism → bone loss. Rickets involves defective osteoid mineralization due to insufficient calcium-phosphate product. Corticosteroids suppress osteoblasts, increase resorption, decrease calcium absorption.",
        contentMd: `# Osteoporosis & Metabolic Bone Disease - Mechanism

## Bone Remodeling in Osteoporosis

### Normal Balanced Remodeling
1. Osteoclast recruitment via RANKL
2. Resorption phase
3. Reversal phase
4. Formation phase (osteoblasts deposit osteoid)
5. Mineralization (hydroxyapatite formation)
6. Net zero bone loss (resorption = formation)

### Uncoupled Remodeling in Osteoporosis
1. Osteoclast hyperactivity → increased resorption
2. Osteoblast hypoactivity → decreased formation
3. Result: resorption >formation → net bone loss
4. Architecture deteriorates (trabecular plates thin, perforate)
5. Fracture risk increases

## Estrogen Deficiency Mechanism (Postmenopausal)

### Estrogen's Role
- Suppresses RANKL production → controls osteoclasts
- Supports vitamin D responsiveness
- Reduces overall bone turnover

### Withdrawal Effects
1. RANKL ↑ (reduced estrogen suppression)
2. Osteoclast activation ↑
3. Bone resorption ↑↑ (2-3% annually initially)
4. Osteoblast lag (formation cannot keep pace)
5. Rapid bone loss (first 5-10 years postmenopause)

## Vitamin D Deficiency Mechanism

### Calcium-Vitamin D Axis Dysfunction
1. Vitamin D <20 ng/mL
2. Intestinal calcium absorption ↓
3. Serum calcium ↓ → PTH ↑↑ (secondary hyperparathyroidism)
4. PTH increases osteoclast activity → resorption ↑↑
5. Net bone loss from PTH-mediated resorption

### Rickets - Mineralization Failure
1. Vitamin D ↓ (inadequate intake/sun/malabsorption)
2. 1,25-OH vitamin D ↓
3. Calcium & phosphate absorption ↓
4. Calcium-phosphate product <25 (below threshold)
5. Osteoid mineralization fails
6. Result: defective bone with retained osteoid

## Corticosteroid-Induced Osteoporosis (CTIOP)

### Mechanisms
1. Osteoblast suppression (inhibits proliferation)
2. Increased osteoclast activity
3. Calcium malabsorption (decreased intestinal absorption)
4. Increased renal calcium loss
5. Hypogonadism (suppressed sex hormones)
6. PTH resistance (kidneys less responsive)

### Timeframe
- Rapid bone loss first 3-6 months
- Stabilization at lower level
- Fracture risk even at normal DEXA (architecture damaged)

## Bisphosphonate Mechanism

### How They Work
1. Osteoclast uptake (endocytosed)
2. Pyrophosphate analog (resist degradation)
3. ATP depletion (inhibit ATP-dependent pumps)
4. Apoptosis (osteoclast programmed cell death)
5. Result: reduced osteoclast number/function

### Effect on Bone Remodeling
- Resorption ↓↓ (osteoclasts inactive)
- Formation continues (osteoblasts still active)
- Net effect: temporary net formation
- Reversal takes years`,
        mnemonics: [
          {
            text: "ESTROGEN OUT: ESTROGEN OUT → RANKL UP → OSTEOCLASTS UP → RESORPTION UP → BONE LOSS",
            explanation: "Postmenopausal osteoporosis cascade"
          },
          {
            text: "VITAMIN D LOW: VITAMIN D LOW → CALCIUM LOW → PTH HIGH → RESORPTION UP → BONE LOSS",
            explanation: "Vitamin D deficiency bone loss"
          }
        ],
        keyPoints: [
          "Osteoporosis: osteoclast hyperactivity + osteoblast hypoactivity",
          "Estrogen deficiency: ↑ RANKL → ↑ osteoclasts → accelerated resorption",
          "Vitamin D deficiency: ↓ calcium → ↑ PTH → ↑ resorption",
          "Rickets: ↓ calcium-phosphate product → failed osteoid mineralization",
          "Bisphosphonates: osteoclast apoptosis → reduced resorption"
        ],
        textbookRefs: [
          { book: "Maheshwari's Orthopedics", chapter: "Metabolic Bone Disease", edition: "9th" },
          { book: "Apley & Solomon's System of Orthopaedics", chapter: "Metabolic Disorders", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "osteoporosis-layer-3-clinical",
        title: "Osteoporosis & Metabolic Bone Disease - Clinical Management",
        estimatedMinutes: 25,
        summary: "Management includes DEXA screening, calcium (1000-1200 mg/day) + vitamin D (800-2000 IU/day) supplementation, bisphosphonates (first-line), lifestyle modifications (exercise, smoking cessation). Rickets treatment: vitamin D supplementation (dose-dependent), calcium supplementation, phosphate binders for renal rickets. Fracture prevention through weight-bearing exercise and fall prevention critical.",
        contentMd: `# Osteoporosis & Metabolic Bone Disease - Clinical Management

## Osteoporosis Management

### Screening & Diagnosis
- DEXA indicated: Women >65, postmenopausal <65 with risk factors, men >70
- Baseline labs: calcium, phosphate, alkaline phosphatase, vitamin D, PTH
- FRAX tool: estimates 10-year fracture probability

### Pharmacologic Treatment

**First-Line: Bisphosphonates**
- Alendronate: 70 mg weekly or 10 mg daily
- Risedronate: 35 mg weekly or 5 mg daily
- Zoledronic acid: 5 mg IV annually
- Combination with calcium/vitamin D essential

**Other Options**
- HRT: Only for symptom relief (increased CV/breast cancer risk)
- SERMs (raloxifene): Estrogenic on bone
- Denosumab: RANKL inhibitor
- Teriparatide: PTH analog (bone formation)

### Supportive Therapy
- Calcium: 1000-1200 mg/day
- Vitamin D: 800-2000 IU/day
- Magnesium: 300-400 mg/day

### Lifestyle Modifications
- Weight-bearing exercise: 30 min, 3-4 days/week
- Resistance training: 2-3 days/week
- Smoking cessation (critical)
- Alcohol moderation (≤2 drinks/day)
- Fall prevention (remove hazards, lighting, assistive devices)

### Monitoring
- DEXA repeat every 1-2 years
- Serum calcium/vitamin D annually
- Fracture occurrence monitoring

## Rickets Management

### Nutritional Rickets (Vitamin D Deficiency)

**Investigation**
- 25-OH vitamin D <20 ng/mL
- Calcium (low), phosphate (low), ALP (high)
- PTH high (secondary hyperparathyroidism)

**Treatment**
- Vitamin D3: 2000-4000 IU daily (mild); 100,000-600,000 IU weekly (severe)
- Calcium: 1000-1500 mg daily
- Duration: Until biochemical normalization (6-12 weeks)
- Maintenance: 800-2000 IU daily

**Monitoring**
- Biochemistry Q4-6 weeks
- Radiographs show healing over weeks-months

### Renal Rickets (CKD-Mineral Bone Disorder)

**Treatment**
- Phosphate binders: calcium carbonate, sevelamer
- Active vitamin D (calcitriol): 0.25-0.5 mcg BID
- PTH suppression if needed
- Monitor: calcium, phosphate, PTH, vitamin D

### Hypophosphatemic Rickets

**Treatment**
- High-dose vitamin D: 50,000-100,000 IU daily
- Phosphate supplementation (high-dose)
- Close monitoring for hypercalcemia

## Fracture Management in Osteoporosis

### Common Sites & Treatment
- **Hip**: ORIF or hemiarthroplasty
- **Vertebral**: Conservative (rest, analgesia) unless neurologic
- **Wrist**: Cast immobilization or ORIF

### Post-Fracture
- Start bisphosphonate if not on treatment
- PT/OT: balance, gait, home modifications
- Adequate protein (healing)
- Monitor for depression (increases mortality)

## Prevention (Primary)

### For All Adults
- Calcium: 1000-1200 mg/day
- Vitamin D: 800-2000 IU daily
- Weight-bearing exercise: 30 min, 3-5 days/week
- Smoking cessation
- Limit alcohol: ≤2 drinks/day

### For High-Risk Groups
- **Corticosteroid users** (>3 months): DEXA baseline, calcium+vitamin D, consider bisphosphonate
- **Postmenopausal**: Early screening if risk factors, counseling on HRT`,
        mnemonics: [
          {
            text: "BISPHOSPHONATE: Blocks osteoclasts, Inhibits resorption, Strengthens bone, Prolongs therapy duration",
            explanation: "Bisphosphonate action"
          },
          {
            text: "RICKETS TREATMENT: Vitamin D (high-dose), Investigate cause, Check calcium, Kidney assessment, Educate family",
            explanation: "Rickets management"
          }
        ],
        keyPoints: [
          "Osteoporosis: DEXA T-score <-2.5; bisphosphonates first-line + calcium + vitamin D + exercise",
          "Rickets: vitamin D supplementation (dose-dependent), calcium, phosphate binders for renal",
          "Fracture prevention: weight-bearing exercise, smoking cessation, fall prevention",
          "Corticosteroid users: DEXA baseline, calcium+vitamin D, consider bisphosphonate",
          "Monitoring: DEXA Q1-2 years, biochemistry regularly"
        ],
        textbookRefs: [
          { book: "Maheshwari's Orthopedics", chapter: "Metabolic Bone Disease", edition: "9th" },
          { book: "OP Ghai - Essential Pediatrics", chapter: "Ch 20", edition: "9th" }
        ]
      },
      {
        layer: 4,
        slug: "osteoporosis-layer-4-exam",
        title: "Osteoporosis & Metabolic Bone Disease - Exam Prep",
        estimatedMinutes: 20,
        summary: "Key facts: DEXA T-score <-2.5 diagnosis; postmenopausal women highest risk; bisphosphonates first-line; calcium 1000-1200 mg + vitamin D 800-2000 IU standard. Rickets: vitamin D deficiency most common; supplementation dose-dependent. Common errors: forgetting vitamin D in osteoporosis prevention, missing bisphosphonate contraindications (osteonecrosis jaw, atypical fractures with prolonged use).",
        contentMd: `# Osteoporosis & Metabolic Bone Disease - Exam Prep

## Critical Diagnostic Cutoffs
- DEXA T-score >-1: Normal
- DEXA T-score -1 to -2.5: Osteopenia
- DEXA T-score <-2.5: Osteoporosis

## Vitamin D Status
- <12 ng/mL: Severe deficiency
- 12-20 ng/mL: Deficiency
- 20-30 ng/mL: Insufficiency
- >30 ng/mL: Sufficient

## High-Yield MCQ Concepts

**Q: 65-year-old postmenopausal, DEXA -2.8. Management?**
A: Osteoporosis. Bisphosphonate (alendronate 70 mg weekly). Add calcium 1200 mg + vitamin D 1000-2000 IU daily. Weight-bearing exercise 30 min 3-4 days/week.

**Q: Vitamin D deficiency rickets in child. 25-OH vitamin D 8 ng/mL. Treatment?**
A: High-dose vitamin D (100,000-200,000 IU weekly × 6-8 weeks). Calcium 1000-1500 mg/day. Reassess Q4-6 weeks. Maintenance vitamin D 800-2000 IU daily.

**Q: Bisphosphonate contraindications?**
A: Esophageal stricture, active ONJ, Cr Cl <30 mL/min. Caution: atypical fractures >5 years (consider drug holiday).

**Q: 60-year-old on prednisone 10 mg × 8 months. Prevention?**
A: DEXA baseline (>7.5 mg × 3 months). Calcium 1200 mg + vitamin D 800-2000 IU daily. Consider bisphosphonate.

## Common Mistakes
- Forget calcium/vitamin D with bisphosphonate (ESSENTIAL)
- Start estrogen for all postmenopausal (only if symptomatic)
- DEXA every year (repeat Q1-2 years)
- Miss vitamin D in rickets workup (ALWAYS check)
- Miss secondary causes (PTH, calcium, phosphate, renal function)

## Critical Pearls
1. Postmenopausal women = highest risk
2. Calcium 1000-1200 mg + Vitamin D 800-2000 IU = foundation
3. DEXA T-score <-2.5 = osteoporosis diagnosis
4. Bisphosphonates = first-line
5. Exercise critical (30 min weight-bearing 3-4x/week)`,
        mnemonics: [
          {
            text: "DEXA-OST: DEXA <-2.5, Estrogen deficiency, X-ray shows low density, Adequate calcium+vitamin D, Osteoporosis management",
            explanation: "Osteoporosis diagnosis & management"
          }
        ],
        keyPoints: [
          "DEXA T-score <-2.5 = osteoporosis; >-1.0 = normal; -1 to -2.5 = osteopenia",
          "Bisphosphonate first-line; always with calcium 1200 mg + vitamin D 800-2000 IU/day",
          "Weight-bearing exercise 30 min 3-4 days/week; smoking cessation critical",
          "Rickets: vitamin D supplementation (100,000-600,000 IU/week initially), calcium",
          "Corticosteroids: DEXA baseline + bisphosphonate if >7.5 mg × 3 months"
        ],
        textbookRefs: [
          { book: "Maheshwari's Orthopedics", chapter: "Metabolic Bone Disease", edition: "9th" },
          { book: "NEET/DNB Orthopedics - Metabolic Disorders", chapter: "Quick Reference", edition: "2024" }
        ]
      },
      {
        layer: 5,
        slug: "osteoporosis-layer-5-active-recall",
        title: "Osteoporosis & Metabolic Bone Disease - Active Recall",
        estimatedMinutes: 15,
        summary: "Active recall on DEXA interpretation, management decisions, rickets diagnosis and treatment. Clinical scenarios requiring specific drug selection, dosing, monitoring.",
        contentMd: `# Active Recall - Osteoporosis & Metabolic Bone Disease

**Q1: 70-year-old woman, DEXA -3.2, prior vertebral fracture. Diagnosis and management?**
> Osteoporosis with prior fragility fracture. Bisphosphonate (alendronate 70 mg weekly), calcium 1200 mg, vitamin D 1000-2000 IU daily. Weight-bearing exercise. Annual DEXA monitoring.

**Q2: Newborn with rickets, calcium 6.8 (low), phosphate 3.0 (low), ALP 800, 25-OH vitamin D 10. Diagnosis?**
> Vitamin D deficiency rickets (most common). Vitamin D3 100,000-200,000 IU weekly × 6-8 weeks. Calcium 1000-1500 mg daily. Monitor biochemistry Q4-6 weeks.

**Q3: Is estrogen therapy recommended for osteoporosis in postmenopausal women?**
> Only if symptomatic (hot flashes, vaginal atrophy). Not for asymptomatic osteoporosis (increased CV & breast cancer risk). Bisphosphonates preferred.

**Q4: Bisphosphonate user develops jaw osteonecrosis. What caused this?**
> Osteonecrosis of jaw (ONJ) rare but serious. Risk increases >5 years therapy. More common with IV agents. Discontinue bisphosphonate, refer maxillofacial surgery.

**Q5: 55-year-old on prednisone 8 mg × 6 months. DEXA recommendation?**
> DEXA baseline (prednisone >7.5 mg × 3 months). Calcium 1000-1200 mg + vitamin D 800-2000 IU daily. Consider bisphosphonate if T-score abnormal.

**Q6: Rickets patient develops hypercalcemia during vitamin D therapy?**
> Risk of vitamin D overdose. Occurs in granulomatous diseases (sarcoidosis). Monitor calcium closely. Reduce vitamin D if hypercalcemia develops.

**Q7: Child with renal rickets (CKD stage 4). Treatment differs how?**
> Requires active vitamin D (calcitriol 0.25-0.5 mcg BID) because kidneys cannot activate vitamin D. Also add phosphate binders.

**Q8: How long should bisphosphonate therapy continue?**
> Generally 5 years. Beyond 5 years, atypical fracture risk increases. Consider drug holiday after 5 years, reassess with DEXA.

**Q9: Osteoporosis patient refuses medications. Non-pharmacologic alternatives?**
> Weight-bearing exercise (proven effective: 30 min 3-5 days/week), adequate calcium (1000-1200 mg), vitamin D (800-2000 IU), smoking cessation.

**Q10: What indicates need for DEXA screening in men?**
> Men >70 years (universal). Men <70 with risk factors (corticosteroids >3 months, hypogonadism, malabsorption, alcohol, smoking, family history).`,
        mnemonics: [
          {
            text: "OSTEO-MANAGE: Osteoporosis diagnosis, Screen with DEXA, Treatment bisphosphonates, Exercise weight-bearing, Optimize calcium+vitamin D",
            explanation: "Osteoporosis comprehensive management"
          }
        ],
        keyPoints: [
          "DEXA T-score <-2.5 = osteoporosis; bisphosphonate + calcium + vitamin D + exercise",
          "Calcium 1200 mg + vitamin D 800-2000 IU/day standard",
          "Weight-bearing exercise 30 min 3-4x/week; smoking cessation critical",
          "Rickets: vitamin D supplementation (100,000-600,000 IU/week initially), calcium",
          "Bisphosphonate: 5-year max typical; consider drug holiday after"
        ],
        textbookRefs: [
          { book: "Maheshwari's Orthopedics", chapter: "Metabolic Bone Disease", edition: "9th" }
        ]
      }
    ]
  }
];
