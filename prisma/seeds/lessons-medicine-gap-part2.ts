import type { TopicLessons } from "./content-loader";

export const medicineGapLessonsPart2: TopicLessons[] = [
  {
    topicCode: "IM-MOD-08-TOP-07",
    layers: [
      {
        layer: 1,
        slug: "scleroderma-polymyositis-foundation",
        title: "Scleroderma & Polymyositis - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of systemic sclerosis, inflammatory myopathies, and their classification and pathophysiology.",
        contentMd: `# Scleroderma & Polymyositis - Foundation

## Systemic Sclerosis (Scleroderma)

### Definition
- Progressive fibrotic and vascular disease of skin and internal organs
- Characterized by excessive collagen deposition

### Subtypes
1. **Limited Cutaneous SSc (lcSSc)**: Skin involvement limited to hands, face, feet, forearms
2. **Diffuse Cutaneous SSc (dcSSc)**: Extensive skin involvement including trunk and proximal limbs
3. **Sine Scleroderma**: Internal organ involvement without skin sclerosis (rare)

### Epidemiology
- Female predominance (4:1)
- Onset: 30-50 years
- More severe in African Americans

### Autoantibodies
- **Anti-centromere (ACA)**: 50%, associated with lcSSc, better prognosis
- **Anti-topoisomerase I (anti-Scl-70)**: 30%, associated with dcSSc, worse prognosis (lung fibrosis)
- **Anti-RNA polymerase III**: Acute onset, renal crisis

### Pathophysiology
- Abnormal fibroblast function → excessive collagen synthesis
- Endothelial dysfunction → vascular injury
- Microvascular disease
- Immune activation (autoantibodies)

## Inflammatory Myopathies

### Classification
1. **Polymyositis (PM)**
2. **Dermatomyositis (DM)**
3. **Inclusion Body Myositis (IBM)**
4. **Immune-Mediated Necrotizing Myopathy (IMNM)**

### Dermatomyositis
- Myositis + distinctive rash
- Female predominance (2:1)
- Can be associated with malignancy (10-15%)

### Polymyositis
- Pure myositis without rash
- Adults >18 years
- Rare in children (more common: DM in children)

### Inclusion Body Myositis
- Most common acquired myositis >50 years
- Often misdiagnosed as PM
- Distinctive vacuolar inclusions on biopsy
- More aggressive, steroid-resistant

### Pathophysiology
- T-cell mediated (CD8+) → myocyte destruction
- Autoantibodies to muscle-associated antigens
- Complement-mediated capillary injury (especially DM)

## Myositis-Associated Autoantibodies

### Myositis-Specific Antibodies
- **Anti-Jo-1** (anti-histidyl-tRNA): 30-40%, anti-synthetase, associated with interstitial lung disease
- **Anti-PL-7, Anti-EJ** (other anti-synthetases)
- **Anti-Mi-2**: 10-20%, associated with DM, good prognosis
- **Anti-signal recognition particle (SRP)**: IMNM, severe myositis

### Myositis-Associated Antibodies
- **Anti-Ro/SSA, Anti-La/SSB**: Overlap with Sjögren's
- **Anti-PM-Scl**: Overlap with scleroderma
- **Anti-RNP**: Overlap with mixed connective tissue disease

## Clinical Manifestations

### Systemic Sclerosis
**Skin (100%):**
- Raynaud's phenomenon (often first symptom)
- Skin thickening (induration, non-pitting edema)
- Sclerodactyl (tapered fingers)
- Facial tightening, microstomia (small mouth)

**Pulmonary (70%):**
- Interstitial lung disease (ILD)
- Pulmonary hypertension
- Leading cause of death in SSc

**Renal (10-15%, but serious):**
- Scleroderma renal crisis (SRC)
- Acute hypertension, acute renal failure
- Microangiopathic hemolytic anemia
- Proteinuria

**GI (75%):**
- Esophageal dysmotility (reflux, stricture)
- Malabsorption, pseudo-obstruction
- Colonic hypomotility

**Musculoskeletal:**
- Arthralgia/arthritis
- Myositis (rare)
- Bone resorption at fingertips

**Cardiac:**
- Myocarditis
- Arrhythmias
- Conduction defects

### Inflammatory Myopathies
**Muscle Involvement:**
- Proximal muscle weakness (shoulders, hips) → difficulty climbing stairs, rising from chair
- Dysphagia (pharyngeal weakness)
- Respiratory muscle weakness
- Elevated CK, aldolase

**Dermatologic (Dermatomyositis):**
- **Heliotrope rash**: Purple/violet erythema of eyelids
- **Gottron papules**: Scaly erythema over knuckles, elbows, knees
- **Photosensitive rash**: V-neck, shawl sign
- **Mechanic's hands**: Hyperkeratosis with cracking

**Systemic:**
- Constitutional symptoms (fever, malaise)
- Arthralgia/arthritis
- Interstitial lung disease (especially anti-synthetase)
- Cardiac involvement (myocarditis, conduction)
- Malignancy association (DM > PM)`,
        mnemonics: [
          { text: "SSc SUBTYPES: Limited (hands/face/feet) vs Diffuse (trunk/proximal) | ACA (lcSSc) vs Anti-Scl-70 (dcSSc)", explanation: "Extent and prognosis" },
          { text: "MYOSITIS: PM (muscle only), DM (muscle + rash), IBM (inclusion bodies, steroid-resistant), IMNM (necrotizing)", explanation: "Classification" },
          { text: "GOTTRON PAPULES: Scaly erythema over knuckles (DM) | HELIOTROPE: Purple eyelids (DM) | MECHANIC'S HANDS: Cracks on fingertips (myositis)", explanation: "Skin findings" },
          { text: "SSc RENAL CRISIS: Acute HTN + AKI + MAHA | Risk: dcSSc, Anti-RNA Pol III | Treat: ACE-I urgently", explanation: "Life-threatening complication" }
        ],
        keyPoints: [
          "Systemic sclerosis: Progressive fibrotic disease with excessive collagen deposition; limited (lcSSc) vs diffuse (dcSSc) subtypes",
          "Anti-centromere associated with lcSSc and better prognosis; anti-Scl-70 with dcSSc and worse prognosis",
          "Scleroderma renal crisis: Acute hypertension + acute renal failure + microangiopathic hemolysis; treat urgently with ACE-I",
          "Dermatomyositis: Myositis + distinctive rash (heliotrope, Gottron papules); associated with malignancy (10-15%)",
          "Anti-Jo-1 myositis: Anti-synthetase associated with interstitial lung disease"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "328: Systemic Sclerosis, 329: Myositis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "scleroderma-polymyositis-mechanism",
        title: "Scleroderma & Polymyositis - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of fibrosis, endothelial dysfunction, and immune-mediated myositis mechanisms.",
        contentMd: `# Scleroderma & Polymyositis - Mechanisms

## Systemic Sclerosis Pathogenesis

### Three-Pathway Model

**1. Vascular Injury & Endothelial Dysfunction**
- Endothelial cell damage (initial event)
- Increased vascular permeability
- Microvascular disease (capillary loss)
- Raynaud's phenomenon (vasospasm of small arteries)

**2. Fibroblast Dysfunction & Fibrosis**
- TGF-beta pathway hyperactivation
- Fibroblasts differentiate to myofibroblasts
- Excessive collagen I and III synthesis
- Reduced collagen breakdown
- Extracellular matrix accumulation

**3. Immune Activation**
- Autoantibodies (anti-centromere, anti-Scl-70, anti-RNA Pol III)
- T-cell infiltration
- B-cell activation
- Cytokine production (IL-4, IL-6, TGF-beta)

### Scleroderma Renal Crisis Mechanism
- Renin-angiotensin system hyperactivation
- Endothelial injury with microthrombi
- Arterial intimal hyperplasia
- Progressive renal ischemia
- Acute tubular necrosis
- Microangiopathic hemolytic anemia

### Pulmonary Involvement
- Progressive fibrosis (ILD)
- Reduced DLCO
- Vasculopathy → pulmonary hypertension
- Vascular obliteration of precapillary arterioles

## Inflammatory Myopathies Pathogenesis

### Dermatomyositis Mechanism
- **Capillary injury**: Complement-mediated (C5b-9 deposition on capillary endothelium)
- Capillary loss → muscle fiber ischemia
- Myonecrosis (particularly in perimysial regions)
- Perivascular B-cell and CD4+ T-cell infiltration
- Produces cytokines (TNF-alpha, IFN-gamma)

### Polymyositis Mechanism
- **Direct T-cell attack**: CD8+ cytotoxic T cells predominate
- Invade and destroy non-necrotic myofibers
- Express MHC-I on myofibers (abnormal)
- Autoantigen recognition
- Myonecrosis (endomysial pattern)

### Inclusion Body Myositis Mechanism
- T-cell mediated (CD8+ infiltration)
- **Protein accumulation**: Tau, ubiquitin, beta-amyloid (like neurodegenerative disease)
- Rimmed vacuoles (pathognomonic)
- Progressive myonecrosis
- More severe, steroid-resistant

### Immune-Mediated Necrotizing Myopathy (IMNM)
- Complement-mediated myonecrosis (similar to DM)
- Antibodies against signal recognition particle (SRP) or HMGCR (statin-induced)
- Extensive myonecrosis
- Limited inflammation on biopsy (paradoxically)

## Autoantigen Recognition

### Anti-synthetase Antibodies
- Aminoacyl-tRNA synthetases (Jo-1, PL-7, EJ)
- Associated with myositis + ILD
- May trigger anti-synthetase syndrome

### Anti-Mi-2
- Nuclear helicase
- Associated with DM
- Good prognosis, steroid-responsive

## Muscle Histopathology

| Feature | PM | DM | IBM |
|---------|----|----|-----|
| Fiber necrosis | Endomysial | Perimysial | Endomysial |
| Inflammation | CD8 dominant | B-cell, CD4 dominant | Modest CD8 infiltrate |
| Vacuoles | Absent | Absent | **Rimmed vacuoles** |
| Capillary loss | No | **Yes** | No |
| Response to steroids | Good | Good | **Poor** |`,
        mnemonics: [
          { text: "SSc PATHOGENESIS: Vascular injury (endothelial) → Fibrosis (TGF-beta, collagen ↑) → Immune activation (autoAb, T cells)", explanation: "Three-pathway model" },
          { text: "SRC MECHANISM: Renin-angiotensin activation → Endothelial injury → Microthrombi → Arterial intimal hyperplasia → Renal ischemia → Acute KI", explanation: "Pathogenic cascade" },
          { text: "DM vs PM: DM (capillary injury, complement, perimysial, B-cell) vs PM (CD8+ T-cell, endomysial, direct attack)", explanation: "Distinct mechanisms" },
          { text: "IBM FEATURES: Rimmed vacuoles (Tau, amyloid), CD8 infiltrate, Steroid-resistant, Like neurodegeneration", explanation: "Unique pathology" }
        ],
        keyPoints: [
          "SSc: Three mechanisms—vascular injury (endothelial dysfunction), fibroblast activation (TGF-beta), and immune activation (autoantibodies)",
          "Scleroderma renal crisis: Renin-angiotensin hyperactivation causing endothelial injury, microthrombi, and acute renal failure",
          "Dermatomyositis: Complement-mediated capillary injury with perimysial inflammation and myonecrosis",
          "Polymyositis: CD8+ T-cell mediated attack on myofibers with endomysial inflammation",
          "IBM: Protein accumulation (tau, amyloid) with rimmed vacuoles; steroid-resistant, progressive"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "328: SSc, 329: Myositis", edition: "21st" },
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "Connective Tissue Diseases", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "scleroderma-polymyositis-clinical",
        title: "Scleroderma & Polymyositis - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical presentation, diagnosis, and management of systemic sclerosis and inflammatory myopathies.",
        contentMd: `# Scleroderma & Polymyositis - Clinical Presentation & Management

## Systemic Sclerosis Clinical Presentation

### Early Features
- **Raynaud's phenomenon**: Often first symptom (years before other features)
- Symmetric finger swelling (puffy hand phase)
- Skin thickening of hands/forearms

### Progressive Features (Limited Cutaneous)
- Sclerodactyl (tapered fingers)
- Telangiectasia
- Facial tightening, microstomia
- CREST syndrome: Calcinosis, Raynaud's, Esophageal dysmotility, Sclerodactyl, Telangiectasia

### Progressive Features (Diffuse Cutaneous)
- More extensive skin involvement
- Faster progression
- Higher risk of visceral involvement
- Scleroderma renal crisis (10-15% of dcSSc)

### Pulmonary Involvement
- Dyspnea, dry cough
- ILD progression (50-60% of SSc)
- Pulmonary hypertension (10-15%)
- Both ILD and PH contribute to mortality

### Renal Involvement (Scleroderma Renal Crisis)
- Occurs in 10-15% dcSSc, rare in lcSSc
- **Acute hypertension** (SBP >160)
- **Acute renal failure** (doubling of creatinine)
- Microangiopathic hemolytic anemia (schistocytes on blood smear)
- **Medical emergency**: Untreated mortality 50-90%, but ACE-I can reverse if early

### GI Involvement
- Esophageal dysmotility → reflux, Barrett's, stricture, adenocarcinoma risk
- Gastroparesis
- Intestinal pseudo-obstruction
- Bacterial overgrowth, malabsorption

## Diagnosis of SSc
- **Clinical**: Skin thickening proximal to MCPs, Raynaud's + nailfold capillary changes
- **ANA**: Positive in 95%
- **Specific antibodies**: Anti-centromere, anti-Scl-70, anti-RNA Pol III
- **Nailfold capillaroscopy**: Helps differentiate Raynaud's from SSc
- **DLCO, PFTs**: Assess pulmonary involvement
- **Echocardiography**: Assess pulmonary hypertension

## Management of SSc
- **Vasodilators**: CCBs (nifedipine) for Raynaud's, endothelin antagonists (bosentan) for PAH
- **ACE-I**: Essential for SRC (captopril preferred for faster onset)
- **PPI**: Reflux management
- **ILD**: Mycophenolate mofetil (MMF), cyclophosphamide, nintedanib
- **PAH**: Bosentan, sildenafil, epoprostenol
- **General**: Physical therapy, moisturizers, smoking cessation

## Inflammatory Myopathy Clinical Presentation

### Weakness Pattern
- **Proximal**: Shoulders (deltoids), hips (hip flexors, gluteus)
- Symmetric distribution
- Develops over weeks-months
- Difficulty rising from chair, climbing stairs, raising arms overhead

### Systemic Symptoms
- Fever, malaise
- Arthralgia/arthritis (non-erosive)
- Constitutional symptoms

### Specific to Dermatomyositis
- **Heliotrope rash**: Purple/violet erythema of upper eyelids
- **Gottron papules**: Raised, scaly erythema over knuckles, elbows, knees
- **Photosensitive rash**: V-neck (chest), shawl area (shoulders)
- **Mechanic's hands**: Cracking, hyperkeratosis of fingertips
- **Periungual erythema**: Around nail beds

### Associated Features
- Dysphagia (pharyngeal weakness)
- Respiratory muscle weakness → dyspnea
- Interstitial lung disease (especially anti-synthetase)
- Malignancy (DM > PM): Screen with age-appropriate cancer screening, consider further workup if atypical features

## Diagnosis of Myositis
- **CK elevation**: >1000 IU/L (often much higher in PM/DM)
- **Aldolase**: Sensitive, helpful when CK borderline
- **Myositis-specific antibodies**: Anti-Jo-1, anti-Mi-2, etc.
- **EMG**: Myopathic pattern (short, small, polyphasic action potentials)
- **MRI**: Muscle edema, inflammation
- **Muscle biopsy**: Gold standard (inflammatory infiltration, myonecrosis, vacuoles in IBM)

## Management of Myositis

### Dermatomyositis & Polymyositis
- **Corticosteroids**: Prednisolone 1 mg/kg/day initially, slow taper over months-years
- **Steroid-sparing agents**: Methotrexate, azathioprine, mycophenolate (start early with steroids)
- **Immunoglobulin (IVIG)**: For steroid-refractory cases
- **Rituximab**: Anti-B cell monoclonal, particularly for anti-synthetase syndrome with ILD

### Inclusion Body Myositis
- **Poor response to steroids**: Often progressive despite therapy
- **IVIG**: Modest benefit in some
- **Physical therapy**: Adaptive strategies

### General Management
- Avoid statins (can exacerbate myositis, may cause statin-induced IMNM)
- Photoprotection (DM photosensitivity)
- Calcium + vitamin D (steroid-induced osteoporosis)
- Monitoring for malignancy (DM 10-15% risk within 5 years)
- ILD monitoring if anti-synthetase positive`,
        mnemonics: [
          { text: "CREST: Calcinosis, Raynaud's, Esophageal dysmotility, Sclerodactyl, Telangiectasia | lcSSc", explanation: "Classic limited cutaneous SSc" },
          { text: "SRC EMERGENCY: Acute HTN + Acute renal failure + MAHA | Treat: ACE-I URGENTLY", explanation: "Medical emergency" },
          { text: "MYOSITIS RASHES: Heliotrope (purple eyelids), Gottron (knuckles), Mechanic's hands (cracks), Photosensitive", explanation: "DM skin findings" },
          { text: "MYOSITIS LABS: CK ↑↑ (>1000), Aldolase ↑, Anti-Jo-1 (ILD risk), Anti-Mi-2 (good prognosis)", explanation: "Diagnostic markers" }
        ],
        keyPoints: [
          "Systemic sclerosis: Progressive fibrotic disease with Raynaud's often first symptom; limited vs diffuse subtypes",
          "Scleroderma renal crisis: Acute hypertension + acute renal failure; medical emergency; treat with ACE-I urgently",
          "Dermatomyositis: Proximal weakness + rashes (heliotrope, Gottron papules); associated with malignancy",
          "Polymyositis: Pure myositis without rash; CD8+ T-cell mediated",
          "Inclusion body myositis: Steroid-resistant, progressive; rimmed vacuoles on biopsy",
          "Management: Corticosteroids + steroid-sparing agents (methotrexate, azathioprine); rituximab for anti-synthetase with ILD"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "328: SSc, 329: Myositis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "scleroderma-polymyositis-exam",
        title: "Scleroderma & Polymyositis - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield exam facts, diagnostic approach, and management of scleroderma and myositis.",
        contentMd: `# Scleroderma & Polymyositis - Exam Preparation

## High-Yield Facts

### Systemic Sclerosis
- **Female predominance**: 4:1 female:male
- **Two subtypes**: Limited (lcSSc, 70%, better prognosis) vs Diffuse (dcSSc, 30%, worse)
- **Raynaud's**: Often precedes other features by years
- **Anti-centromere**: lcSSc, better prognosis (longer survival)
- **Anti-Scl-70 (anti-topoisomerase I)**: dcSSc, worse prognosis, lung fibrosis
- **Anti-RNA Pol III**: Acute onset, renal crisis risk
- **Scleroderma renal crisis**: 10-15% dcSSc, medical emergency, ACE-I reverses if early
- **Mortality**: Pulmonary (ILD 50-60%, PH 10-15%) and renal (SRC) major causes

### Inflammatory Myopathies
- **Female predominance**: 2:1 for DM and PM
- **Age of onset**: DM and PM typically 40-60 years; IBM >50 years
- **CK elevation**: >1000 IU/L in PM/DM; may be normal in IBM early
- **Steroid-responsive**: DM, PM good response; IBM poor response
- **Malignancy association**: DM 10-15% (higher in adults >50); PM 5%; IBM rare
- **Anti-Jo-1**: 30-40%, associated with ILD, "anti-synthetase syndrome"
- **Anti-Mi-2**: DM, good prognosis

## Common Exam Questions

**Q1: Woman with Raynaud's + sclerodactyl + telangiectasia + esophageal dysmotility. Diagnosis?**
A: Limited cutaneous systemic sclerosis (CREST syndrome). Check anti-centromere (likely positive, better prognosis). Monitor for ILD, PAH.

**Q2: Acute hypertension (SBP 180) + creatinine doubled + schistocytes on smear in dcSSc patient. Management?**
A: Scleroderma renal crisis. Start ACE-I immediately (captopril preferred). Monitor renal function, can reverse if early. Avoid NSAIDs.

**Q3: Middle-aged woman with proximal weakness, CK 2000, heliotrope rash, Gottron papules. Diagnosis?**
A: Dermatomyositis. Check anti-Mi-2, anti-Jo-1. Screen for malignancy. Treat with prednisolone + methotrexate.

**Q4: Weakness for 6 months, CK 800, rimmed vacuoles on biopsy, poor steroid response. Diagnosis?**
A: Inclusion body myositis. Steroid-resistant. Offer IVIG, physical therapy. Progressive course expected.

**Q5: Anti-Jo-1 positive myositis. What major system complication expected?**
A: Interstitial lung disease (anti-synthetase syndrome). Monitor with PFTs, DLCO. May need immunosuppressants (MMF, cyclophosphamide).

**Q6: Patient on statin for 6 months, now with myositis, elevated CK, anti-HMGCR positive. Diagnosis?**
A: Statin-induced immune-mediated necrotizing myopathy (IMNM). D/C statin. Treat with steroids + immunosuppression.

## Differential Diagnosis

### Raynaud's Phenomenon Differential
- **Primary Raynaud's**: No SSc, normal nailfold capillaroscopy, normal ESR, negative ANA
- **Secondary (SSc-associated)**: Nailfold capillary loss, abnormal capillaroscopy, positive ANA/specific Ab

### CK Elevation Causes
- **Myositis**: >1000, positive myositis Ab, EMG myopathic
- **Statin-induced**: Myositis, elevated CK, anti-HMGCR
- **Thyroid disease**: Hypothyroidism can cause CK elevation
- **Malignancy**: Rhabdomyosarcoma, paraneoplastic myositis
- **Infections**: Viral (enterovirus, HIV), bacterial

### Myositis vs Polymyalgia Rheumatica (PMR)
| Feature | Myositis | PMR |
|---------|----------|-----|
| CK | Elevated >1000 | Normal |
| Weakness | True proximal weakness | Stiffness, pain (no weakness initially) |
| Age | 40-60 | >50 years |
| EMG | Myopathic | Normal |
| Steroid response | Weeks-months | Days-weeks |

## Diagnostic Workup Algorithm

**1. Clinical Suspicion**
- Raynaud's + skin findings (SSc) or proximal weakness + rash (myositis)
- ↓
**2. Laboratory: ANA, ESR, CRP, CK, aldolase**
- ↓
**3. Specific Antibodies**
- SSc: Anti-centromere, anti-Scl-70, anti-RNA Pol III
- Myositis: Anti-Jo-1, anti-Mi-2, anti-SRP, anti-HMGCR
- ↓
**4. Imaging/Functional Tests**
- SSc: Nailfold capillaroscopy, DLCO, PFTs, echocardiography
- Myositis: EMG, MRI, muscle biopsy
- ↓
**5. Diagnosis based on clinical + serologic + histologic findings**`,
        mnemonics: [
          { text: "SYSTEMIC SCLEROSIS: Limited (70%, ACA, better) vs Diffuse (30%, Anti-Scl-70, worse) | Raynaud's first", explanation: "Classification and prognosis" },
          { text: "CREST: Calcinosis, Raynaud's, Esophageal dysmotility, Sclerodactyl, Telangiectasia | lcSSc", explanation: "Limited cutaneous features" },
          { text: "SRC: Acute HTN + Acute KI + MAHA | ACE-I STAT | Risk: dcSSc, Anti-RNA Pol III", explanation: "Medical emergency" },
          { text: "MYOSITIS: DM (rash + weakness, steroid-responsive) vs PM (weakness only) vs IBM (steroid-resistant, vacuoles)", explanation: "Classification" },
          { text: "MYOSITIS ANTIBODIES: Anti-Jo-1 (ILD), Anti-Mi-2 (DM, good prognosis), Anti-SRP (severe IMNM), Anti-HMGCR (statin-induced)", explanation: "Serology guides diagnosis and prognosis" },
          { text: "MALIGNANCY RISK: DM 10-15% within 5 years (especially >50yo) > PM 5% > IBM rare | Screen age-appropriate", explanation: "DM highest risk" }
        ],
        keyPoints: [
          "SSc subtypes: Limited (70%, anti-centromere, better prognosis) vs diffuse (30%, anti-Scl-70, worse)",
          "Scleroderma renal crisis: Acute hypertension + acute renal failure + MAHA; ACE-I reverses if caught early",
          "DM: Myositis + rashes (heliotrope, Gottron); associated with malignancy (10-15%)",
          "PM: Pure myositis without rash; CD8+ T-cell mediated",
          "IBM: Steroid-resistant; rimmed vacuoles; progressive",
          "Anti-synthetase syndrome (anti-Jo-1): Myositis + ILD; requires aggressive immunosuppression"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "328: SSc, 329: Myositis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "scleroderma-polymyositis-active-recall",
        title: "Scleroderma & Polymyositis - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard-based active recall for scleroderma and myositis diagnosis and management.",
        contentMd: `# Scleroderma & Polymyositis - Active Recall Flashcards

**Q1: Describe the CREST syndrome and its association with SSc subtype.**
A: CREST = Calcinosis, Raynaud's, Esophageal dysmotility, Sclerodactyl, Telangiectasia. Associated with limited cutaneous SSc (lcSSc), better prognosis than diffuse.

**Q2: What is scleroderma renal crisis and how is it managed?**
A: Scleroderma renal crisis = acute hypertension (SBP >160) + acute renal failure (doubling Cr) + microangiopathic hemolytic anemia. Medical emergency. Treat with ACE-I (captopril preferred) urgently. Can reverse if caught early. Untreated mortality 50-90%.

**Q3: How do you distinguish limited from diffuse cutaneous SSc?**
A: Limited (lcSSc, 70%): Skin involvement distal to elbows/knees (hands, face, feet, forearms). Raynaud's first, slower progression, anti-centromere positive, longer survival. Diffuse (dcSSc, 30%): Proximal + trunk involvement, rapid progression, anti-Scl-70 positive, worse prognosis (ILD, SRC).

**Q4: What are the three major pathogenic mechanisms in SSc?**
A: 1) Vascular injury (endothelial dysfunction, capillary loss) 2) Fibroblast activation (TGF-beta, excessive collagen) 3) Immune activation (autoantibodies, T cells).

**Q5: Describe the heliotrope rash and Gottron papules in dermatomyositis.**
A: Heliotrope = purple/violet erythema of upper eyelids (distinctive for DM). Gottron papules = scaly, raised erythematous plaques over knuckles, elbows, knees. Both pathognomonic for DM.

**Q6: What is the difference between polymyositis and dermatomyositis?**
A: Polymyositis = myositis only, no rash. Dermatomyositis = myositis + rash (heliotrope, Gottron, photosensitive). DM more common, associated with malignancy (10-15%) vs PM (5%).

**Q7: What are the defining features of inclusion body myositis?**
A: IBM = most common acquired myositis >50 years. Histology: CD8+ T-cell infiltration + rimmed vacuoles containing tau, ubiquitin, amyloid. Steroid-resistant. Progressive despite therapy.

**Q8: Explain the pathogenesis difference between dermatomyositis and polymyositis.**
A: DM = complement-mediated capillary injury (C5b-9 deposition) → capillary loss → muscle ischemia → perimysial myonecrosis + B-cell infiltration. PM = CD8+ T-cell mediated direct attack on myofibers → endomysial myonecrosis.

**Q9: What is the anti-synthetase syndrome?**
A: Myositis associated with anti-synthetase antibodies (anti-Jo-1 most common, 30-40%). Features: myositis, ILD (most important), Raynaud's, arthritis, fever. Interstitial lung disease common (50-70%). Requires aggressive immunosuppression.

**Q10: How do myositis-specific and myositis-associated antibodies differ?**
A: Specific antibodies = unique to myositis (Anti-Jo-1, anti-Mi-2, anti-SRP, anti-HMGCR). Associated antibodies = seen in myositis but also other conditions (anti-Ro/SSA, anti-La, anti-PM-Scl, anti-RNP).

**Q11: What is the relationship between malignancy and dermatomyositis?**
A: DM associated with malignancy in 10-15% within 5 years (higher in adults >50). PM associated in 5%. IBM rarely associated. Screen with age-appropriate cancer screening. Consider additional workup if atypical features or treatment-resistant.

**Q12: Describe the pathophysiology of pulmonary hypertension in SSc.**
A: Endothelial dysfunction and vasculopathy cause precapillary arterial obliteration. Increased pulmonary vascular resistance → RV strain. Combined with ILD worsens prognosis. Leading cause of death in SSc.

**Q13: What are the mechanisms of esophageal involvement in SSc?**
A: Loss of smooth muscle innervation → dysmotility (upper and lower esophagus). Reduced lower esophageal sphincter tone → reflux. Chronic reflux → Barrett's esophagus → adenocarcinoma risk. Stricture formation.

**Q14: Explain statin-induced immune-mediated necrotizing myopathy (IMNM).**
A: Statin use triggers necrotizing myopathy with anti-HMGCR antibodies. Presents as proximal myositis with CK elevation. D/C statin (can persist even after stopping). Treat with corticosteroids + immunosuppression. Often severe.

**Q15: What is the role of IVIG in myositis treatment?**
A: IVIG (immune globulin IV) useful for steroid-refractory DM and PM. Blocks complement activation, reduces T-cell activation. Particularly helpful for anti-synthetase syndrome with ILD. Requires repeated infusions.

**Q16: How do you interpret elevated CK in the context of SSc?**
A: Elevated CK in SSc patient suggests myositis (DM or PM overlap with SSc). Can occur in 5-10% of SSc patients. Requires EMG, antibody testing, possible biopsy. Treat with corticosteroids + immunosuppression.

**Q17: Describe the nailfold capillaroscopy findings in SSc vs normal.**
A: Normal = regular capillary loops, no enlargement. SSc = dilated/giant capillaries, capillary loss (fewer capillaries), hemorrhage. Pattern helpful in distinguishing primary Raynaud's (normal) from SSc-associated (abnormal).

**Q18: What are the treatment options for scleroderma renal crisis?**
A: ACE-I is cornerstone (captopril preferred for faster onset). Avoid NSAIDs (worsen renal function). Monitor closely: BP, creatinine, proteinuria. May need dialysis initially but can recover if caught early. Long-term ACE-I continuation may be needed.

**Q19: How do you manage interstitial lung disease in myositis?**
A: Particularly important in anti-synthetase syndrome. Use mycophenolate mofetil (MMF) or cyclophosphamide + corticosteroids. Monitor with PFTs, DLCO. Rituximab effective. Nintedanib (antifibrotic) may help. Oxygen if needed.

**Q20: Summarize the management approach to newly diagnosed polymyositis.**
A: 1) Confirm diagnosis with EMG, muscle biopsy, antibodies 2) Check malignancy (age-appropriate) 3) Screen for ILD (PFTs, DLCO, CT chest) 4) Start prednisolone 1 mg/kg/day 5) Add steroid-sparing (methotrexate, azathioprine) early 6) Monitor CK, clinical strength 7) Taper steroids slowly over months-years.`,
        mnemonics: [
          { text: "CREST: Calcinosis, Raynaud's, Esophageal dysmotility, Sclerodactyl, Telangiectasia | lcSSc, better prognosis", explanation: "Limited cutaneous features" },
          { text: "SRC: Acute HTN + Acute KI + MAHA | ACE-I immediately | Risk: dcSSc, Anti-RNA Pol III", explanation: "Medical emergency management" },
          { text: "DM vs PM: DM (rash + weakness, steroid-responsive) vs PM (weakness only, steroid-responsive) vs IBM (steroid-resistant, vacuoles)", explanation: "Classification and treatment response" },
          { text: "ANTI-SYNTHETASE SYNDROME: Anti-Jo-1 (Jo-1) + Myositis + ILD + Raynaud's | Needs aggressive immunosuppression", explanation: "Serology predicts ILD risk" },
          { text: "MALIGNANCY RISK: DM 10-15% (especially >50yo) > PM 5% > IBM rare | Screen age-appropriate cancers", explanation: "DM highest risk" },
          { text: "MYOSITIS PATHOGENESIS: DM (complement capillary injury) vs PM (CD8+ attack) vs IBM (protein accumulation + T cells)", explanation: "Distinct mechanisms" },
          { text: "STATIN-INDUCED MYOSITIS: Anti-HMGCR + Necrotizing myopathy | D/C statin | Steroids + immunosuppression | Often severe, persistent", explanation: "IMNM type" },
          { text: "TREATMENT LADDER: Corticosteroids (prednisolone 1 mg/kg) + Steroid-sparing (MTX, AZA) + IVIG (refractory) + Rituximab (resistant ILD)", explanation: "Stepwise approach" },
          { text: "IBM: Steroid-RESISTANT | Rimmed vacuoles | Progressive | Offer IVIG, PT | Poor prognosis", explanation: "Different from DM/PM" },
          { text: "SSc ANTIBODIES: Anti-centromere (lcSSc, good), Anti-Scl-70 (dcSSc, ILD), Anti-RNA Pol III (acute, SRC risk)", explanation: "Serology predicts subtype and complications" }
        ],
        keyPoints: [
          "Limited SSc (70%, anti-centromere): Better prognosis, slower progression, CREST features",
          "Diffuse SSc (30%, anti-Scl-70): Worse prognosis, rapid ILD, renal crisis risk",
          "Scleroderma renal crisis: Acute hypertension + renal failure + hemolytic anemia; ACE-I reverses if early",
          "Dermatomyositis: Myositis + rashes (heliotrope, Gottron); malignancy risk 10-15%",
          "Anti-synthetase syndrome: Myositis + ILD + Raynaud's; requires aggressive immunosuppression",
          "Inclusion body myositis: Steroid-resistant, progressive; rimmed vacuoles with protein accumulation",
          "Management: Corticosteroids + steroid-sparing agents; rituximab for ILD or refractory disease"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "328: SSc, 329: Myositis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology", edition: "11th" }
        ]
      }
    ]
  }
];
