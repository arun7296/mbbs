import type { TopicLessons } from "./content-loader";

export const orthopedicspart5Lessons: TopicLessons[] = [
  {
    topicCode: "OR-MOD-05-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "osteoarthritis-layer-1-foundation",
        title: "Osteoarthritis - Foundation",
        estimatedMinutes: 20,
        summary: "Epidemiology, pathophysiology, and classification of osteoarthritis including joint involvement patterns.",
        contentMd: `# Osteoarthritis - Foundation

## Epidemiology
- **Prevalence**: 10-15% of population >60 years (India: estimated 20%)
- **Gender**: Female > Male (3:1 at hips/knees)
- **Most common sites**: Knee (50%), hip (20%), hand (20%), spine (15%)
- **Incidence**: Increases with age; rare <40 years unless secondary

## Pathophysiology
- **Articular cartilage loss**: Progressive degradation of hyaline cartilage
- **Bone response**: Subchondral sclerosis, osteophyte formation (marginal bone spurs)
- **Joint space narrowing**: Due to cartilage loss; appears on X-ray
- **Meniscal changes**: Degeneration, fibrillation (in knee OA)

## Classification by Location
- **Primary OA**: Idiopathic, no underlying joint disease
- **Secondary OA**: From joint injury, malalignment, prior arthritis
- **Generalized OA**: Multiple joint involvement (polyarticular)

## Risk Factors
### Non-modifiable
- Age (strongest risk factor)
- Female gender
- Genetic predisposition (family history)
- Anatomical variations

### Modifiable
- Obesity (each 1 kg excess weight = 4 kg pressure on knee)
- Joint trauma or prior fractures
- Occupational stress (repetitive motion)
- Malalignment (varus, valgus deformities)
- Muscle weakness (quadriceps weakness = increased OA risk)

### Secondary Causes
- Rheumatoid arthritis
- Septic arthritis (post-septic OA)
- Hemochromatosis (deposition arthropathy)
- Charcot joint (neuropathic)

## Hand Joints and Clinical Signs
- **Heberden's nodes**: DIP joint involvement (distal interphalangeal)
- **Bouchard's nodes**: PIP joint involvement (proximal interphalangeal)
- Bony enlargement; painless or mildly tender`,
        mnemonics: [
          { text: "OA Risk: AFOOT", explanation: "Age, Female, Obesity, Old injuries, Trauma" },
          { text: "Hand nodes: HB", explanation: "Heberden (DIP), Bouchard (PIP)" }
        ],
        keyPoints: [
          "Most common joint disease; 10-15% prevalence in elderly",
          "Pathophysiology: cartilage loss + bone response + joint space narrowing",
          "Risk factors: age, female, obesity, joint injury, malalignment, muscle weakness",
          "Female > male (3:1); knee most common site",
          "Heberden's nodes (DIP) classic sign; can be painless"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Osteoarthritis", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Degenerative Disease of Joints", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "osteoarthritis-layer-2-mechanism",
        title: "Osteoarthritis - Pathophysiological Mechanism",
        estimatedMinutes: 25,
        summary: "Cellular and molecular mechanisms of cartilage degeneration and bone remodeling in osteoarthritis.",
        contentMd: `# Osteoarthritis - Pathophysiological Mechanism

## Cartilage Degeneration
### Phases of Cartilage Loss
1. **Phase 1: Swelling (early)**
   - Increased water content in cartilage matrix
   - Cartilage appears softer, less resilient
   - No gross destruction yet

2. **Phase 2: Fibrillation (progressing)**
   - Disruption of collagen network
   - Surface fibrillations develop (cracks in surface)
   - Cartilage thickness decreases
   - Collagen type II breakdown

3. **Phase 3: Erosion (advanced)**
   - Full-thickness cartilage loss
   - Exposed subchondral bone
   - Cracks extend to subchondral region

### Biochemical Changes
- **Protease release**: Cartilage proteases break down proteoglycans
- **Reduced proteoglycan content**: Water-binding capacity decreases
- **Collagen network disruption**: Type II collagen fractured and cross-linked abnormally
- **Inflammatory mediators**: IL-1, TNF-alpha promote cartilage breakdown

## Bone Remodeling Response
### Subchondral Bone Changes
- **Subchondral sclerosis**: Increased bone density (hardening)
- **Osteoblast activation**: Bone formation response to cartilage loss
- **Subchondral cysts**: Fluid-filled spaces in bone (juxta-articular cysts)
- **Thickening**: Subchondral plate becomes thicker

### Osteophyte Formation (Bone Spurs)
- **Location**: Marginal (edge of joint, non-load-bearing initially)
- **Mechanism**: Endochondral ossification at cartilage-bone junction
- **Effect**: Increases surface area; attempts load distribution
- **Clinical significance**: Osteophytes contribute to stiffness, deformity

## Molecular Pathways
### Cartilage Breakdown Cascade
1. Injury or stress → Inflammatory response
2. Release of IL-1, TNF-alpha
3. Upregulation of matrix metalloproteinases (MMPs)
4. Degradation of proteoglycans and collagen
5. Loss of mechanical properties
6. Vicious cycle of further breakdown

### Role of Cytokines
- **IL-1β**: Increases protease activity, decreases protease inhibitors
- **TNF-α**: Promotes inflammation, inhibits cartilage synthesis
- **IL-6**: Systemic inflammation
- **PGE2**: Increased prostaglandin-mediated inflammation

## Biomechanical Factors
### Load Distribution Changes
- Normal cartilage: Distributes load evenly
- OA cartilage: Stiffness increases, elasticity decreases
- Result: Focal loading increases → Further cartilage damage
- Vicious cycle: Increased stress → More damage → More stress

### Meniscal and Ligamentous Changes (Knee)
- **Meniscal degeneration**: Tears, degeneration compromise load distribution
- **ACL/MCL laxity**: If present, increases shear forces
- **Ligamentous laxity**: Allows abnormal joint motion

## Repair Mechanisms (Limited)
- **Chondrocyte response**: Limited ability to repair cartilage
- **Fibrocartilage formation**: At erosion margins; not true cartilage
- **Ineffective repair**: Cannot restore normal cartilage structure`,
        mnemonics: [
          { text: "OA Cartilage Phases: SFEF", explanation: "Swelling, Fibrillation, Erosion, Fissuring" },
          { text: "Inflammatory mediators: ITP", explanation: "IL-1, TNF-alpha, PGE2" }
        ],
        keyPoints: [
          "Cartilage degeneration: swelling → fibrillation → erosion",
          "Bone remodeling: subchondral sclerosis, osteophyte formation",
          "IL-1 and TNF-α drive cartilage breakdown via MMP activation",
          "Meniscal and ligament degenerations compound cartilage loss",
          "Repair mechanisms limited; fibrocartilage cannot replicate hyaline cartilage"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Osteoarthritis", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Degenerative Disease", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "osteoarthritis-layer-3-clinical",
        title: "Osteoarthritis - Clinical Features and Diagnosis",
        estimatedMinutes: 25,
        summary: "Presentation, clinical examination findings, and diagnostic imaging in osteoarthritis.",
        contentMd: `# Osteoarthritis - Clinical Features and Diagnosis

## Clinical Presentation
### Symptoms
- **Pain**: Activity-related (worse with use, improves with rest); later pain at rest
- **Stiffness**: Morning stiffness <30 minutes (vs RA >1 hour); improves with activity
- **Swelling**: Mild bony swelling (vs RA soft tissue swelling)
- **Crepitus**: Audible/palpable grinding with movement
- **Functional limitation**: Difficulty climbing stairs, walking, rising from chair
- **Deformity**: Varus (bowleg) or valgus (knock-knee) with severe disease

### Joint-Specific Features
**Knee OA**:
- Pain with prolonged walking, stair climbing
- Swelling, crepitus
- Varus/valgus deformity in advanced cases

**Hip OA**:
- Groin pain, referred to medial thigh or knee
- Limited internal rotation, extension
- Antalgic gait (limp)

**Hand OA**:
- Heberden's nodes (DIP), Bouchard's nodes (PIP)
- Reduced grip strength
- Stiffness worse in morning

## Physical Examination
### Inspection
- Bony swelling, joint deformity
- Muscle atrophy (disuse from pain)
- Gait abnormality (antalgic, limp)
- Malalignment (varus/valgus)

### Palpation
- Bony hard swelling (vs RA soft tissue)
- Joint margin tenderness
- Crepitus with movement
- Warmth (mild, less than inflammatory arthritis)

### Range of Motion
- Restricted ROM (especially end-range)
- Pain at extremes of motion
- Crepitus during ROM testing

## Investigations
### X-ray (First-line)
**Technique**: Weight-bearing views (standing knee AP, lateral, skyline for patellofemoral)

**Findings**:
- Joint space narrowing (central: medial/lateral compartment)
- Osteophytes (marginal, bony spurs)
- Subchondral sclerosis (increased bone density)
- Subchondral cysts (juxta-articular lucencies)
- Deformity (varus/valgus collapse in advanced)

### Kellgren-Lawrence Grading Scale
- **Grade 0**: Normal
- **Grade 1**: Doubtful narrowing, possible osteophytes
- **Grade 2**: Definite narrowing, definite osteophytes
- **Grade 3**: Moderate narrowing, moderate osteophytes
- **Grade 4**: Severe narrowing, severe osteophytes, bone deformity

### MRI
**Advantages**:
- Early cartilage damage detection
- T2 cartilage mapping (quantifies cartilage loss)
- Meniscal pathology (tears, degeneration)
- Ligamentous injuries
- Subchondral bone changes

## Differential Diagnosis
| Feature | OA | RA | Gout |
|---------|----|----|------|
| **Onset** | Insidious | Insidious | Acute |
| **Joints** | Asymmetric | Symmetric | First MTP, others |
| **Morning stiffness** | <30 min | >1 hour | None |
| **Serology** | Negative | Positive (RF, CCP) | Elevated uric acid |`,
        mnemonics: [
          { text: "OA vs RA: ABS vs ARS", explanation: "OA: Asymmetric, Bony hard, Short stiffness; RA: different pattern" },
          { text: "KL grades: 0-4 Normal to Severe", explanation: "Grade 0 normal, 1 doubtful, 2 definite, 3 moderate, 4 severe" }
        ],
        keyPoints: [
          "Pain worse with activity, improves with rest; morning stiffness <30 min",
          "Examination: bony hard swelling, crepitus, restricted ROM",
          "X-ray findings: joint space narrowing, osteophytes, sclerosis",
          "Kellgren-Lawrence grading: 0-4 severity scale",
          "Lab normal in primary OA (vs inflammatory arthritis)"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Osteoarthritis", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Degenerative Disease", edition: "10th" }
        ]
      },
      {
        layer: 4,
        slug: "osteoarthritis-layer-4-exam",
        title: "Osteoarthritis - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Management algorithms and case-based approach to osteoarthritis treatment decisions.",
        contentMd: `# Osteoarthritis - Exam Preparation

## Management Algorithm

### Mild-Moderate OA (KL 1-2)
**Conservative Management** (First-line):
1. Weight reduction (target 5-10% body weight loss)
2. Exercise program
   - Strengthening: Quadriceps (for knee), hip abductors
   - Stretching: ROM maintenance
   - Low-impact: Swimming, cycling, walking
3. Activity modification: Avoid high-impact sports, heavy lifting
4. Topical therapy: Diclofenac 1% gel, capsaicin cream
5. Assistive devices: Crutch, cane (reduces joint loading)

**Pharmacotherapy**:
- Acetaminophen: 500-1000 mg TID (first-line analgesic)
- NSAIDs (oral): Ibuprofen, naproxen (if acetaminophen fails)
- NSAIDs (topical): Diclofenac 1% gel (first-line topical)
- Gastroprotection: Add PPI if GI risk factors

**Intra-articular Injections** (if fails conservative):
- Corticosteroid: Triamcinolone 40-80 mg, efficacy 40-60%, duration 2-6 weeks
- Frequency: Max 3-4/year (risk of cartilage damage if more frequent)
- Hyaluronic acid: Modest efficacy, variable evidence
- PRP: Emerging therapy, limited evidence

### Severe OA (KL 3-4) + Failed Conservative Management
**Surgical Management**:
- Total Joint Arthroplasty (TJA)

**Indications for TJA**:
1. Severe radiographic OA (KL 3-4)
2. Failed conservative management ≥6-12 months
3. Significant functional impairment affecting quality of life
4. Patient age typically >60 years

**Outcomes**:
- Pain relief: 80-90%
- Satisfaction: 85-90%
- Complication rates: DVT/PE 1-2%, infection 1%, loosening 5-10% at 10 years
- Implant life: 15-20 years
- Revision: ~10% at 10-15 years

## High-Yield Case Scenarios

### Case 1: Mild-Moderate Knee OA
**Patient**: 65-year-old female, BMI 32, knee OA KL-2, pain with stairs

**Management**:
1. Counseling: Weight reduction 10 kg target
2. Exercise: Quadriceps strengthening, low-impact activities
3. Topical: Diclofenac 1% gel TID
4. Oral: Acetaminophen 1000 mg TID if needed
5. Activity: Modify high-impact sports
6. Follow-up: Reassess in 3-6 months

### Case 2: Severe Knee OA Candidate for TKA
**Patient**: 72-year-old female, KL-4 knee OA, constant pain, failed conservative therapy 1 year

**Pre-operative**:
1. Optimize comorbidities: Pulmonary function, cardiac clearance
2. Counsel: TKA expectations, pain relief 80-90%, rehab 8-12 weeks
3. Medical clearance: Cardiology, anesthesia clearance
4. DVT prophylaxis plan: Chemical + mechanical prophylaxis post-op

**Post-operative**:
1. DVT prophylaxis: Enoxaparin or rivaroxaban
2. PT/OT: Begin POD #1, aggressive ROM and strengthening
3. Mobilization: Weight-bearing as tolerated
4. Follow-up: Clinical assessment at 2, 6, 12 weeks`,
        mnemonics: [
          { text: "OA Management: WEEPIN", explanation: "Weight reduction, Exercise, Ergonomics, Pharmacotherapy, Injections, (then) Total joint if Necessary" },
          { text: "TJA Indications: SSF", explanation: "Severe OA (KL 3-4), Severe functional impairment, Failed conservative management" }
        ],
        keyPoints: [
          "Mild OA: Conservative (weight, exercise, NSAIDs), then steroid injections",
          "Severe OA: TJA if failed conservative >6-12 months",
          "TJA outcomes: 80-90% pain relief, 85-90% satisfaction, revision ~10% at 10 years",
          "Post-op critical: DVT prophylaxis, early mobilization, PT",
          "Patient selection: Age >60, motivation, compliance crucial for outcomes"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Osteoarthritis Management", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Degenerative Disease Treatment", edition: "10th" }
        ]
      },
      {
        layer: 5,
        slug: "osteoarthritis-layer-5-active-recall",
        title: "Osteoarthritis - Active Recall",
        estimatedMinutes: 15,
        summary: "Key questions and answers to reinforce osteoarthritis knowledge.",
        contentMd: `# Active Recall - Osteoarthritis

**Q1**: What is the pathophysiology of osteoarthritis? Describe the cascade from joint stress to cartilage loss.

**A1**: OA pathophysiology: Joint stress → inflammatory response (IL-1, TNF-α released) → protease activation (MMPs) → cartilage degeneration (swelling → fibrillation → erosion) → bone remodeling (subchondral sclerosis, osteophyte formation) → vicious cycle of further stress and damage.

**Q2**: A 70-year-old woman presents with knee pain worse with activity, improves with rest. Morning stiffness 20 minutes. How would you distinguish this from rheumatoid arthritis?

**A2**: OA: Pain worse with activity (improves with rest), morning stiffness <30 min, bony hard swelling, normal labs. RA: Activity-independent pain, morning stiffness >1 hour, soft tissue swelling, positive RF/CCP, elevated inflammatory markers.

**Q3**: Explain the Kellgren-Lawrence grading scale and its clinical significance.

**A3**: KL Grade 0-4: (0) Normal, (1) Doubtful narrowing/osteophytes, (2) Definite changes (mild), (3) Moderate narrowing/osteophytes, (4) Severe changes. Guides treatment: KL 1-2 conservative; KL 3-4 consider TJA if symptomatic.

**Q4**: When should total knee arthroplasty be considered? What are expected outcomes?

**A4**: Indications: Severe OA (KL 3-4), failed conservative ≥6-12 months, significant functional impairment, age >60. Outcomes: Pain relief 80-90%, satisfaction 85-90%, revision ~10% at 10 years.

**Q5**: How are intra-articular corticosteroid injections used? What are frequency limits and why?

**A5**: Protocol: Triamcinolone 40-80 mg, efficacy 40-60%, duration 2-6 weeks. Max 3-4/year (at least 3-month intervals) to prevent accelerated cartilage damage (chondrotoxicity).

**Q6**: Why are NSAIDs beneficial but also have risks in OA management?

**A6**: Benefits: Reduce PGE2-mediated inflammation, modest pain reduction 20-30%. Risks: GI ulcers (add PPI), renal dysfunction, cardiovascular events. Do NOT address underlying pathophysiology.

**Q7**: A patient on 4 intra-articular steroid injections per year develops progressive cartilage loss on MRI. What's the next step?

**A7**: Reduce injection frequency (<3-4/year), reassess conservative management, ensure adequate weight reduction and exercise, consider alternatives (PRP), discuss TJA if disease rapidly progressive.

**Q8**: Compare conservative management (mild OA) with surgical management (severe OA). What's the treatment threshold?

**A8**: Mild (KL 1-2): Conservative (weight, exercise, NSAIDs, injections), review 3-6 months. Severe (KL 3-4): TJA if failed conservative ≥6-12 months. Threshold based on severity + symptoms + failed conservative duration.

**Q9**: What pre-operative assessment is needed before TKA in elderly patients with comorbidities?

**A9**: Cardiac (ECG, troponin, echo if indicated), Pulmonary (PFTs if indicated), Renal (creatinine, eGFR), Diabetes (HbA1c, glucose control), Anesthesia consult (ASA score), Medical optimization, DVT prophylaxis plan.

**Q10**: A 62-year-old with medial compartment knee OA and varus malalignment considers knee osteotomy vs TKA. Discuss pros and cons.

**A10**: Osteotomy: Preserves native joint, delays TKA 5-10 years, higher activity possible, but complex surgery, longer recovery. TKA: Immediate pain relief 80-90%, simpler, but limited implant lifespan (15-20 years). Choice: Young, motivated → osteotomy; significant symptoms → TKA.`,
        mnemonics: [
          { text: "OA Grading: 0-4 Normal to Severe", explanation: "0=normal, 1=doubtful, 2=definite, 3=moderate, 4=severe" },
          { text: "NSAID Risks: GRB", explanation: "GI ulcer, Renal dysfunction, Bleeding/Cardiovascular" }
        ],
        keyPoints: [
          "OA: Joint stress → inflammatory cascade → cartilage loss → bone remodeling",
          "Pain worse with activity, morning stiffness <30 min, bony hard swelling",
          "KL grades 0-4; guides treatment but symptoms equally important",
          "Mild: Conservative; Severe + failed: TJA",
          "TJA: 80-90% pain relief, 85-90% satisfaction; revision ~10% at 10-15 years"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Osteoarthritis", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Degenerative Disease", edition: "10th" }
        ]
      }
    ]
  }
];
