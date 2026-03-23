import type { TopicLessons } from "./content-loader";

export const obgLessonsPartTwelve: TopicLessons[] = [
  {
    topicCode: "OG-MOD-06-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "cervical-cancer-layer-1-foundation",
        title: "Cervical Cancer & Screening - Foundation",
        estimatedMinutes: 20,
        summary: "Cervical cancer is the second most common cancer in women globally. HPV infection is the primary cause. Screening (Pap smear, HPV testing) and vaccination prevent most cases. Understanding screening guidelines and abnormal cytology is essential.",
        contentMd: `# Cervical Cancer & Screening - Foundation

## Epidemiology
- **Global incidence**: 570,000 new cases/year, 311,000 deaths
- **India**: High incidence (27-30 per 100,000 women)
- **Age**: Peak incidence 50-60 years (but can occur at younger ages)
- **Risk factors**: HPV infection, multiple sexual partners, early sexual debut, smoking, immunosuppression

## HPV and Cervical Cancer

### HPV (Human Papillomavirus)
- **DNA virus**, >100 types identified
- **High-risk types**: 16, 18, 31, 33, 35, 39, 45, 51, 52, 56, 58, 59, 66, 68
- **Low-risk types**: 6, 11, 42, 43, 44 (cause genital warts, rarely cancer)
- **Most common carcinogenic**: HPV 16 (50-55% of cervical cancers), HPV 18 (15-20%)

### Infection and Persistence
- **Transmission**: Sexual contact (genital-genital)
- **Clearance**: 90% of infections spontaneously clear within 2 years
- **Persistent infection**: HPV 16/18 → Increased malignant transformation risk
- **Latency**: Virus can persist dormantly in basal layer

### Carcinogenic Pathway (HPV 16/18)
1. **E6 and E7 oncoproteins**:
   - E6: Inactivates p53 (tumor suppressor)
   - E7: Inactivates Rb (retinoblastoma protein)
   - **Result**: Loss of cell cycle control → Unchecked proliferation

2. **Cervical epithelium changes**:
   - **CIN I** (Cervical Intraepithelial Neoplasia): Dysplasia confined to lower 1/3 epithelium
   - **CIN II**: Dysplasia in lower 2/3
   - **CIN III**: Full-thickness dysplasia, carcinoma in situ
   - **Invasive cancer**: Invasion through basement membrane into stroma

## Cervical Cancer Types

### Squamous Cell Carcinoma
- **Frequency**: 80-85% of cases
- **Origin**: Transformation zone (squamous-columnar junction)
- **Prognosis**: Better than adenocarcinoma

### Adenocarcinoma
- **Frequency**: 10-15% of cases
- **Origin**: Glandular epithelium
- **Risk**: HPV 18-related
- **Screening difficulty**: Pap smear less sensitive for glandular lesions
- **Prognosis**: Worse than squamous

## Cervical Screening Methods

### Pap Smear (Papanicolaou Test)
- **Method**: Cervical cytology brushing from transformation zone
- **Preparation**: Conventional or liquid-based
- **Sensitivity**: 70-90% (depends on adequate sampling)
- **Specificity**: 95-98%
- **Advantage**: Low cost, accessible, reduces cancer incidence 70%

### HPV Testing
- **Method**: HPV nucleic acid detection (PCR, Hybrid Capture, etc.)
- **Types tested**: High-risk types 16, 18, or reflex testing for other high-risk types
- **Sensitivity**: 95%+ for HPV 16/18, 90%+ for all high-risk HPV
- **Specificity**: 85-95%
- **Advantage**: Earlier detection of precancer, better negative predictive value
- **Disadvantage**: Higher cost, more positive results from benign infections

### Co-testing
- **Pap + HPV**: Most sensitive combination
- **Advantage**: Best detection of high-grade disease
- **Disadvantage**: More colposcopies, cost

### Colposcopy
- **Colposcopy**: Magnified visual inspection with acetic acid (reveals abnormalities)
- **Sensitivity**: 75-85% for CIN
- **Biopsy**: Definitive diagnosis

## Screening Guidelines (Varies by Country)

### WHO Recommendations
- **One-time screening**: HPV testing ages 35-45 (high-resource settings)
- **Regular screening**: Every 3-5 years with Pap or HPV
- **Ages 25-65**: Target age range (or 21-65 in resource-limited)

### India (NCCN adapted)
- **Age 21-65**: Screening initiation after first sexual encounter (or age 21)
- **Frequency**: Every 3-5 years if negative Pap
- **High-risk populations**: More frequent screening
- **Barriers**: Limited access, poor compliance, cost

## HPV Vaccination

### Vaccine Types
1. **Bivalent** (Cervarix): HPV 16, 18
2. **Quadrivalent** (Gardasil): HPV 6, 11, 16, 18
3. **9-valent** (Gardasil 9): HPV 6, 11, 16, 18, 31, 33, 45, 52, 58

### Efficacy
- **>95% protection** against targeted HPV types if given before sexual debut
- **Significantly reduces** cervical cancer risk
- **Duration**: Likely lifelong (>10 years follow-up)

### Schedule
- **Age 9-13 years**: Preferred (before sexual activity)
- **Age 14-26 years**: Catchup vaccination
- **Dosing**: 2 or 3 doses depending on age (2-dose if <15 years)

### Impact in India
- Not yet universally available in government programs
- Private sector: Available but expensive
- Potential to reduce cervical cancer burden significantly if implemented`,
        mnemonics: [
          {
            text: "HPV Carcinogenic Types: 1618",
            explanation: "HPV 16 and 18 cause 70% of cervical cancers; 16 = 50-55%, 18 = 15-20%"
          },
          {
            text: "CIN Progression: 123C",
            explanation: "CIN I (1/3 dysplasia), CIN II (2/3), CIN III (full thickness), Cancer (invasion)"
          },
          {
            text: "E6 and E7 Functions: PB",
            explanation: "E6 = inactivates p53 (P), E7 = inactivates Rb (B)"
          }
        ],
        keyPoints: [
          "HPV 16/18 cause 70% of cervical cancers via E6/E7 inactivating p53/Rb",
          "90% of HPV infections clear spontaneously; persistent infection increases cancer risk",
          "Pap smear reduces cervical cancer incidence 70%; HPV testing has higher sensitivity",
          "CIN (cervical intraepithelial neoplasia) graded I-III based on dysplasia depth",
          "HPV vaccination >95% effective if given before sexual debut"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 21", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 31", edition: "17th" }
        ]
      },
      {
        layer: 2,
        slug: "cervical-cancer-layer-2-mechanism",
        title: "Cervical Cancer & Screening - Mechanism",
        estimatedMinutes: 30,
        summary: "HPV-mediated carcinogenesis involves E6/E7 oncoproteins disrupting cell cycle control, chronic inflammation, angiogenesis, and progressive genetic instability. Cytological changes progress from normal to CIN to cancer.",
        contentMd: `# Cervical Cancer & Screening - Mechanism

## HPV Infection and Persistence

### Acquisition and Initial Response
1. **Entry**: HPV binds to heparan sulfate receptors on basal epithelial cells
2. **Infection**: Virus replicates in basal layer (where stem cells reside)
3. **Immune response**:
   - **Innate immunity**: IFN-α/β activation
   - **Adaptive immunity**: CD4+ T cells, CD8+ T cells develop HPV-specific response
4. **Clearance**: 80-90% of infections spontaneously clear within 1-2 years

### Persistent Infection (High-Risk Types)
- **Failure of immune clearance**: HPV 16/18 evade immune response better than low-risk types
- **Mechanisms**:
  - E5 protein inhibits interferon signaling
  - E6/E7 suppress antigen presentation (reduced MHC)
  - Local immunosuppression

### Molecular Integration
- **Episomal vs Integrated**: High-risk HPV often integrates into host genome
- **Integration consequences**:
  - Increased E6/E7 expression
  - Viral genome disruption → Loss of viral replication control genes
  - Activation of adjacent oncogenes

## E6 and E7 Oncoprotein Functions

### E6 Oncoprotein Mechanisms
1. **p53 pathway disruption**:
   - **Normal p53**: Tumor suppressor, initiates apoptosis if DNA damage
   - **E6 effect**: Binds p53, recruits ubiquitin ligase → p53 degradation
   - **Result**: Loss of apoptosis trigger, cells survive despite DNA damage

2. **p16 activation** (paradoxical):
   - **Loss of p53 function** → Cells override Rb-E2F checkpoint
   - **p16 upregulation** in CIN (as cell-cycle override response)
   - **Clinical use**: p16 overexpression marker of CIN/cancer

3. **Immortalization**:
   - **Telomerase reactivation**: hTERT activation
   - **Result**: Cells achieve unlimited replicative potential

### E7 Oncoprotein Mechanisms
1. **Rb pathway disruption**:
   - **Normal Rb**: Binds E2F transcription factor, suppresses S-phase genes
   - **E7 effect**: Binds Rb, displaces E2F
   - **Result**: S-phase genes activated despite Rb presence

2. **Cell cycle dysregulation**:
   - G1/S checkpoint loss
   - Constitutive cyclin E-Cdk2 activation
   - Uncontrolled cell cycle progression

3. **p21 and p27 inactivation**:
   - CDK inhibitors normally halt cell cycle
   - E7 suppresses p21/p27
   - **Result**: Loss of checkpoint control

## Cervical Carcinogenesis: Stepwise Progression

### Step 1: Normal Epithelium
- Single layer of basal columnar cells
- Organized differentiation, normal maturation
- p16/Ki-67 negative (low proliferation)
- HPV absent or cleared

### Step 2: HPV Infection (Transient)
- HPV detected (viral DNA positive)
- Cytologically normal or koilocytosis (HPV effect cells)
- **Koilocyte**: Perinuclear halo, hyperkeratotic appearance
- Most regress at this stage

### Step 3: CIN I (Cervical Intraepithelial Neoplasia Grade 1)
- **Dysplasia extent**: Lower 1/3 of epithelium
- **Cytological features**:
  - Increased nuclear-cytoplasmic (N:C) ratio
  - Coarse chromatin, irregular nuclear membrane
  - Abnormal mitoses
- **p16/Ki-67**: Diffuse positivity in lower 1/3
- **Persistence rate**: 40% regress, 40% persist, 20% progress to CIN II

### Step 4: CIN II
- **Dysplasia extent**: Lower 2/3 of epithelium
- **p16/Ki-67**: Positive in lower 2/3
- **Progression**: 40% regress, 40% persist, 30% progress to CIN III

### Step 5: CIN III
- **Dysplasia extent**: Full thickness of epithelium
- **p16/Ki-67**: Positive throughout thickness
- **Abnormal keratinization**: Loss of surface maturation
- **Progression**: 20% persist, 30% regress (rare), 50% progress to invasive cancer

### Step 6: Invasive Cervical Cancer
- **Invasion**: Breaks through basement membrane into stroma
- **Pathology**: Irregular nests of malignant cells infiltrating stroma
- **Metaplasia obscured**: Loss of normal tissue architecture
- **Spread**: Local (parametria, fornices), lymphatic (pelvic lymph nodes), hematogenous

## Biomarkers of Cervical Dysplasia/Cancer

### p16 (CDKN2A)
- **Normal**: Absent in normal epithelium, low in CIN I
- **Dysplasia**: Upregulated in CIN II, CIN III (p53 pathway loss)
- **Cancer**: Diffusely positive
- **Clinical utility**: p16 overexpression identifies HPV-related high-grade dysplasia

### Ki-67 (Proliferation Marker)
- **Normal epithelium**: Basal cells only (~5-10% positive)
- **CIN I**: Limited proliferation (lower 1/3)
- **CIN II/III**: Extensive proliferation (2/3 or full thickness)
- **Combined p16/Ki-67**: Better specificity than either alone

## Cytological Changes (Pap Smear)

### Normal Cytology
- Mature squamous cells, orderly arrangement
- Low N:C ratio
- Fine chromatin, round nuclei
- Normal mitoses

### ASCUS (Atypical Squamous Cells of Undetermined Significance)
- Slight N:C ratio elevation
- Fine/slightly coarse chromatin
- **Implications**: HPV+ in 30-40%, CIN+ in 10% of ASCUS
- **Management**: HPV reflex test or repeat cytology

### LSIL (Low-Grade Squamous Intraepithelial Lesion)
- **Cytological**: Koilocytes, hyperkeratosis, mildly abnormal nuclei
- **Pathological**: CIN I
- **HPV status**: 90%+ HPV+
- **Progression**: 60% regress, 30% persist, 10% progress to HSIL

### HSIL (High-Grade Squamous Intraepithelial Lesion)
- **Cytological**: Increased N:C ratio, coarse chromatin, irregular nuclear membranes
- **Pathological**: CIN II or CIN III
- **HPV status**: Nearly 100% HPV 16/18+
- **Progression**: 20-30% regress (if age <25), 50%+ progress to cancer if untreated

### ASC-H (Atypical Squamous Cells Cannot Exclude HSIL)
- **Significance**: Risk of HSIL similar to LSIL
- **Management**: Colposcopy

### Adenocarcinoma in Situ (AIS)
- **Origin**: Glandular epithelium
- **Cytology**: Mucin-producing cells, irregular chromatin, high N:C ratio
- **Risk**: Closely associated with invasive adenocarcinoma
- **Management**: Colposcopy with endocervical biopsy`,
        mnemonics: [
          {
            text: "E6 Effect: P53",
            explanation: "E6 = degradates p53 (thus p53 cannot trigger apoptosis)"
          },
          {
            text: "E7 Effect: RB",
            explanation: "E7 = inactivates Rb (thus E2F activated, S-phase proceeds)"
          },
          {
            text: "CIN Progression: 1→2→3→Cancer",
            explanation: "CIN I (1/3 dysplasia) may regress; CIN II (2/3) may progress; CIN III (full) → 50% become cancer if untreated"
          }
        ],
        keyPoints: [
          "E6 inactivates p53; E7 inactivates Rb → Loss of cell cycle checkpoints",
          "Persistent HPV 16/18 infection → CIN progression → Invasive cancer",
          "CIN grading by dysplasia depth: I (lower 1/3), II (lower 2/3), III (full thickness)",
          "p16/Ki-67 dual staining identifies high-grade dysplasia more accurately than either alone",
          "LSIL often regresses; HSIL has 50%+ progression risk if untreated"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 21", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 31", edition: "17th" }
        ]
      },
      {
        layer: 3,
        slug: "cervical-cancer-layer-3-clinical",
        title: "Cervical Cancer & Screening - Clinical",
        estimatedMinutes: 20,
        summary: "Screening strategies, interpretation of abnormal cytology, colposcopy management, staging of cervical cancer, and treatment approaches. Early detection through screening enables prevention of invasive disease.",
        contentMd: `# Cervical Cancer & Screening - Clinical

## Screening Strategies in India

### WHO Recommendations (Adapted for India)
1. **Ages 21-65** (or first sexual encounter + 3 years): Target screening population
2. **Frequency**: Every 3-5 years if negative
3. **Method**: Pap smear or HPV testing
4. **High-incidence areas**: More frequent screening, community outreach

### Pap Smear Screening Protocol
1. **Setting**: Outpatient clinic
2. **Technique**:
   - Patient supine with legs in lithotomy
   - Speculum inserted
   - **Cervix visualized**
   - **Ectocervix**: Wooden spatula (scrapes lower 2/3 of cervix)
   - **Endocervix**: Cytobrush (rotated 5-10 times in cervical canal)
   - Both transferred to slide (conventional) or vial (liquid-based)
3. **Adequacy**: Must have endocervical component, metaplastic cells

### HPV-Based Screening
1. **Testing**: HPV nucleic acid detection from cervical sample
2. **Reflex testing**: If HPV positive and high-risk types → Pap reflex
3. **Advantages**: Better sensitivity (95%+), fewer follow-ups for HPV-negative women
4. **Disadvantages**: Cost, more colposcopies from benign infections

## Management of Abnormal Cytology

### ASCUS Management
1. **Option 1**: HPV reflex testing
   - HPV negative → Routine screening
   - HPV positive → Colposcopy
2. **Option 2**: Repeat cytology at 12 months
3. **Option 3**: Colposcopy (if needed)

### LSIL Management
1. **Age <25 years**: Close follow-up (cytology or HPV testing at 6-12 months)
   - High spontaneous regression rate (60%) in this age group
   - Avoid unnecessary colposcopy/treatment (fertility impact)
2. **Age ≥25 years**: Colposcopy
   - CIN I confirmed on colposcopy and biopsy
   - Options: Observation, ablation (if CIN I), excision (if cannot exclude CIN II)

### HSIL Management
1. **Colposcopy MANDATORY** (within 2 weeks)
2. **Biopsy** of abnormal areas
3. **Findings**:
   - **CIN II**: Excision or ablation (ablation preferred if patient reliable for follow-up)
   - **CIN III**: Excision (required because of increased cancer risk)
   - **Cancer**: Staging and treatment planning

### ASC-H Management
1. **Colposcopy** (within 2 weeks)
2. **Similar to HSIL** (30% have CIN II or worse)

### AIS (Adenocarcinoma in Situ)
1. **Colposcopy + Endocervical biopsy** (AIS often extends high into canal)
2. **Excisional procedure** (cone biopsy or LEEP)
3. **Close follow-up**: High recurrence/persistence rate

## Colposcopy Technique

### Procedure
1. **Preparation**: Acetic acid (3-5%) applied to cervix (causes white epithelium)
2. **Magnification**: Magnifying scope (x6-40)
3. **Visualization**:
   - **Normal epithelium**: Pink, vascular pattern regular
   - **Abnormal**: Whitish areas (acetowhitening), irregular vasculature
4. **Terminology** (Reid Colposcopic Index):
   - **Minor abnormalities**: Thin acetowhite epithelium, fine vasculature
   - **Major abnormalities**: Thick acetowhite epithelium, coarse/irregular vasculature
5. **Biopsy**: Of most abnormal areas (2-4 biopsies)

### Sensitivity and Specificity
- **Sensitivity**: 75-85% for CIN
- **Specificity**: 85-90%
- **Negative colposcopy**: HPV persistence still requires follow-up

## Management of CIN

### CIN I (Low-Grade Dysplasia)
1. **Age <25 years**: Observation (60% spontaneous regression)
   - Cytology or HPV at 6, 12 months
   - Colposcopy repeat at 12 months if persistent
2. **Age ≥25 years**:
   - **Ablation**: Cryotherapy, laser ablation, cold coagulation
   - **Excision**: LEEP (Loop Electrosurgical Excision Procedure) if large area
3. **Follow-up**: Cytology/HPV at 6, 12, 24 months (surveillance for 25 years)

### CIN II-III
1. **Excision** (LEEP, cold knife conization, laser):
   - **Advantage**: Specimen for pathology, assess margins
   - **Indications**: CIN II, CIN III, HSIL with any glandular involvement
2. **Margins**:
   - **Negative margins**: 90% cure rate with observation
   - **Positive margins**: 40-50% persistent/recurrent disease → Repeat excision or hysterectomy
   - **ECC (Endocervical curettage)**: Assess endocervical margins
3. **Follow-up**: Cytology/HPV at 6-month intervals for at least 3 years

## Staging and Treatment of Invasive Cervical Cancer

### FIGO Staging (2018)
- **Stage I**: Confined to cervix
- **Stage II**: Beyond cervix, not to pelvic wall/lower vagina
- **Stage III**: To pelvic wall and/or hydronephrosis
- **Stage IV**: Beyond true pelvis or bladder/rectal involvement
- **Stage V**: Distant metastases

### Treatment by Stage
1. **Stage I**: Radical hysterectomy + pelvic lymphadenectomy OR brachytherapy + external beam radiation
2. **Stage II-III**: Chemoradiation (platinum-based chemotherapy + brachytherapy + external beam)
3. **Stage IV**: Palliative chemoradiation
4. **Metastatic**: Systemic chemotherapy

### Prognosis
- **Stage I**: 90%+ 5-year survival
- **Stage II**: 60-70% 5-year survival
- **Stage III**: 30-40% 5-year survival
- **Stage IV+**: 10-20% 5-year survival

## Prevention Through Vaccination

### Impact of HPV Vaccination
- **Coverage**: 9-13 year-olds ideally (before sexual activity)
- **Efficacy**: >95% protection against covered types if given pre-infection
- **Population-level impact**: Predicted 70-90% reduction in cervical cancer incidence over 30 years
- **Herd immunity**: Reduced HPV transmission even in unvaccinated population

### Implementation in India
- **Challenge**: Not yet in routine immunization schedule nationally
- **Opportunity**: Large burden of disease, young population, HPV vaccination could prevent hundreds of thousands of cancers
- **Cost**: Primary barrier, but long-term health gain substantial`,
        mnemonics: [
          {
            text: "ASCUS Management: HRCs",
            explanation: "HPV reflex (if neg, routine screen; if pos, colp), Repeat cytology at 12m, Colposcopy (option)"
          },
          {
            text: "CIN Treatment: Age 25 Matters",
            explanation: "Age <25 (observe CIN I, high regression), Age ≥25 (treat CIN I)"
          },
          {
            text: "LEEP/Excision: NME",
            explanation: "Negative margins = 90% cure, positive = 40-50% recurrence, ECC assess endocervical"
          }
        ],
        keyPoints: [
          "Pap smear every 3-5 years reduces cervical cancer by 70%",
          "ASCUS: HPV reflex testing (if positive → colposcopy, if negative → routine screen)",
          "LSIL age <25: Observe (60% regress); age ≥25: Colposcopy",
          "HSIL: Mandatory colposcopy; CIN II/III require excision",
          "HPV vaccination >95% effective before sexual debut; could prevent 70-90% of cervical cancers"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 21", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 31", edition: "17th" }
        ]
      },
      {
        layer: 4,
        slug: "cervical-cancer-layer-4-exam",
        title: "Cervical Cancer & Screening - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points: HPV and cancer causation, Pap smear interpretation, colposcopy findings, CIN classification, and management algorithms for abnormal cytology.",
        contentMd: `# Cervical Cancer & Screening - Exam Prep

## High-Yield Facts

### 1. HPV and Cervical Cancer (MUST KNOW)
- **Causation**: HPV 16/18 cause 70% of cervical cancers
- **HPV 16**: 50-55% of cancers
- **HPV 18**: 15-20% of cancers
- **Oncoproteins**: E6 (inactivates p53), E7 (inactivates Rb)
- **Persistent infection**: 10% of infections → Increased malignant transformation

### 2. Pap Smear Classification (Bethesda System)
| Result | Findings | Next Step |
|--------|----------|-----------|
| **Normal** | No abnormality | Routine screening |
| **ASCUS** | Mild atypia | HPV reflex or repeat Pap |
| **LSIL** | Koilocytes, CIN I | Colposcopy (age ≥25) or observe (age <25) |
| **HSIL** | Increased N:C, CIN II/III | Colposcopy ASAP |
| **ASC-H** | Possible HSIL | Colposcopy |
| **AIS** | Adenocarcinoma in situ | Colposcopy + endocervical biopsy |

### 3. CIN Grading and Regression Rates
| Grade | Dysplasia Extent | Regression | Persistence | Progression |
|-------|------------------|-----------|------------|------------|
| **CIN I** | Lower 1/3 | 40% | 40% | 20% |
| **CIN II** | Lower 2/3 | 40% | 30% | 30% |
| **CIN III** | Full thickness | Rare | 20% | 50% |

**Key exam point**: CIN I often regresses (40%); CIN III has 50% progression risk

### 4. E6 and E7 Mechanisms
- **E6**: Binds p53 → p53 degradation → **Loss of apoptosis**
- **E7**: Binds Rb → E2F freed → **Uncontrolled S-phase entry**
- **Result**: Cells survive despite DNA damage → Malignant transformation

### 5. p16 and Ki-67 in Dysplasia
- **Normal epithelium**: p16 negative/low
- **CIN I**: p16 limited (lower 1/3)
- **CIN II-III**: p16 extensive (2/3 or full thickness), Ki-67 throughout
- **Cancer**: p16 strongly positive
- **Clinical use**: p16/Ki-67 dual staining better than either alone

### 6. ASCUS Management Algorithm
```
ASCUS (Mild atypia)
    ↓
Option 1: HPV reflex testing
    ├─ HPV negative → Routine screening
    └─ HPV positive → Colposcopy
    ↓
Option 2: Repeat cytology at 12 months
    ├─ Normal → Routine screening
    └─ Abnormal → Colposcopy
```

### 7. Colposcopy Findings and Interpretation
**Normal**: Pink epithelium, regular vascular pattern, negative for acetowhitening

**Abnormal** (Reid Index):
- **Minor changes**: Thin acetowhite epithelium, fine regular vasculature (often CIN I)
- **Major changes**: Thick acetowhite epithelium, coarse/punctate vasculature (CIN II/III)

### 8. Management by Age (CIN I Special Emphasis)
**Age <25 with CIN I**:
- Observe (high spontaneous regression in young women)
- Cytology/HPV at 6, 12 months
- Avoid unnecessary treatment (risk to future fertility)

**Age ≥25 with CIN I**:
- Treat (lower regression rate)
- Ablation or excision options

### 9. CIN II vs CIN III (Treatment Different)
- **CIN II**: Can observe OR treat (if reliable for follow-up), ablation acceptable
- **CIN III**: MUST TREAT (excise, not ablate)
  - Higher cancer risk (50% if untreated)
  - Cannot ablate (need to exclude underlying invasion)
  - Excisional procedure required

### 10. LEEP/Excision Margins
- **Negative margins**: 90% cure (may observe carefully)
- **Positive margins**: 40-50% persistent/recurrent disease (repeat excision or hysterectomy)
- **Inadequate margins**: Recommend excision over ablation for CIN II/III

### 11. Exam Scenario

**Scenario 1**: 28-year-old with LSIL on Pap. Colposcopy shows mild acetowhitening, fine vasculature. Biopsy = CIN I. Management?
- **Answer**: Treat (age ≥25). Options: Cryotherapy, laser, cold coagulation, or LEEP. If LEEP, assess margins. Follow-up Pap/HPV at 6-month intervals × 3 years.

**Scenario 2**: 24-year-old with HSIL on Pap. Colposcopy shows thick acetowhitening, coarse vasculature. Biopsy = CIN III. Management?
- **Answer**: Excise (not ablate). LEEP or cone biopsy. Assess margins (negative good, positive → repeat excision). Close follow-up.`,
        mnemonics: [
          {
            text: "Pap Results: ALH",
            explanation: "ASCUS (reflex HPV), LSIL (colp if age ≥25), HSIL (colp ASAP)"
          },
          {
            text: "CIN I Age Rule: <25 Observe, ≥25 Treat",
            explanation: "Young women: high regression (40%), older: lower regression, treat"
          },
          {
            text: "HPV Types: 1618-others",
            explanation: "HPV 16, 18 = 70% cancers; 31,33,35,39,45,51,52,56,58,59,66,68 also high-risk"
          }
        ],
        keyPoints: [
          "HPV 16/18 cause 70% of cervical cancers via E6/E7 inactivating p53/Rb",
          "ASCUS: HPV reflex test (if negative → routine screen; if positive → colposcopy)",
          "LSIL age <25: observe (60% regress); age ≥25: colposcopy",
          "HSIL: colposcopy mandatory; CIN II-III require excision",
          "HPV vaccination >95% effective before sexual debut; prevents 70-90% of cancers"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 21", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 31", edition: "17th" }
        ]
      },
      {
        layer: 5,
        slug: "cervical-cancer-layer-5-active-recall",
        title: "Cervical Cancer & Screening - Active Recall",
        estimatedMinutes: 10,
        contentMd: `# Active Recall - Cervical Cancer & Screening

**Q1**: Explain the mechanism by which HPV E6 and E7 oncoproteins lead to malignant transformation.
> **A**: **E6 oncoprotein**: Binds p53 (tumor suppressor protein), recruits ubiquitin ligase complex, causes proteasomal degradation of p53. **Result**: p53 cannot trigger apoptosis when DNA damage detected, allowing cells with mutations to survive. **E7 oncoprotein**: Binds retinoblastoma (Rb) protein, displaces E2F transcription factor. **Result**: E2F drives S-phase genes (cyclins, DNA polymerase, etc.), forcing cell cycle progression despite Rb presence. **Combined effect**: Loss of two key checkpoints (G1/S via Rb-E2F, apoptosis via p53) → Uncontrolled cell division with damaged DNA → Malignant transformation.

**Q2**: A 32-year-old presents with LSIL on Pap smear. Colposcopy shows area of thin acetowhitening with fine, regular vasculature. Biopsy = CIN I. Management?
> **A**: **Diagnosis**: CIN I (low-grade dysplasia). **Age ≥25**: MUST TREAT (lower spontaneous regression rate compared to age <25). **Treatment options**: (1) **Ablation** (cryotherapy, laser, cold coagulation) - destroys lesion, good outcomes, cannot assess margins, (2) **Excision** (LEEP, cold knife conization) - removes specimen, allows pathology assessment, better margins evaluation. **Either acceptable for CIN I.** **Recommended**: LEEP for better margin assessment. **Follow-up**: Cytology or HPV testing at 6, 12, 24 months (extended surveillance 25 years).

**Q3**: Differentiate between CIN I, CIN II, and CIN III in terms of dysplasia depth, regression rates, and management.
> **A**: **CIN I**: Dysplasia in **lower 1/3 of epithelium**, 40% regress (especially age <25), 40% persist, 20% progress. **Management**: Age <25 observe, age ≥25 treat. **CIN II**: Dysplasia in **lower 2/3**, 40% regress, 30% persist, 30% progress. **Management**: Can treat or observe (if compliant for follow-up), ablation acceptable. **CIN III**: Dysplasia in **full thickness (carcinoma in situ)**, rarely regresses, 20% persist, 50% progress to cancer if untreated. **Management**: MUST excise (not ablate), cannot afford to miss invasion, higher cancer risk. **Key**: Progression risk increases with grade; CIN III has 50% cancer progression.

**Q4**: What is the significance of HPV 16/18 in cervical cancer etiology? What are the clinical implications?
> **A**: **Prevalence**: HPV 16 causes 50-55% of cervical cancers, HPV 18 causes 15-20%, together account for 70% of cancers. **Mechanism**: E6/E7 oncoproteins more potent at disrupting p53/Rb pathways than low-risk types. **Clinical implications**: (1) **Screening**: HPV 16/18 testing more specific (if HPV 16/18 positive, higher risk of CIN), (2) **Vaccination**: 2-valent vaccine covers 16/18 (prevents 70% of cancers), 4-valent and 9-valent provide broader coverage, (3) **Prognosis**: HPV 16+ cancers often worse prognosis than HPV 18+, (4) **Molecular testing**: HPV 16/18 reflex testing helps triage borderline cytology.

**Q5**: A 35-year-old with ASC-H on Pap is HPV 16 positive. Colposcopy appears normal (no visible lesion). What is the next step?
> **A**: **Risk**: ASC-H with HPV 16 indicates 30%+ risk of CIN II or worse (cervical intraepithelial neoplasia not visible on colposcopy is "occult"). **Management**: (1) **Excisional procedure** (LEEP, cold knife conization) to remove tissue and obtain pathology, (2) Assess for occult CIN/AIS, (3) Even if normal on excision, need strict follow-up. **Rationale**: HPV 16+ with cytologic atypia (ASC-H) indicates persistent infection with transformative potential. **Alternative** (less preferred): Repeat colposcopy in 3 months, but excision often preferred.

**Q6**: Explain the Bethesda System cytology classification for Pap smear. What is the clinical significance of each category?
> **A**: **NEGATIVE (Normal)**: No findings → Routine screening. **ASCUS**: Mild atypia, unclear significance → 30-40% HPV+, 10% have CIN+. **Management**: HPV reflex (if negative → routine; if positive → colposcopy) or repeat cytology. **LSIL**: CIN I, ~90% HPV+. **Management**: Age <25 observe (60% regress), age ≥25 colposcopy. **HSIL**: CIN II/III, nearly 100% HPV 16/18+. **Management**: **Colposcopy mandatory within 2 weeks** (50%+ have CIN if untreated). **ASC-H**: Possible HSIL → 20-30% CIN II+. **Management**: Colposcopy. **AIS**: Glandular dysplasia → **High cancer progression risk**. **Management**: Colposcopy + endocervical biopsy, excisional procedure.

**Q7**: What are the indications for LEEP (Loop Electrosurgical Excision Procedure) vs ablation in CIN management?
> **A**: **LEEP** (excision): (1) **Indications**: CIN II, CIN III (MUST for CIN III), any CIN if margins need assessment, if cannot exclude invasion. (2) **Advantages**: Specimen available for pathology, margins assessed, allows exclusion of invasion. (3) **Disadvantages**: Slightly higher infection risk, more expensive. **Ablation** (cryotherapy, laser): (1) **Indications**: CIN I (good option), possibly CIN II if compliant for follow-up. (2) **Advantages**: Faster, cheaper, lower infection risk. (3) **Disadvantages**: No specimen, cannot assess margins, cannot use if glandular component. **Key exam point**: CIN III requires LEEP (not ablation).

**Q8**: Describe the cervical carcinogenesis progression from normal epithelium through CIN to invasive cancer.
> **A**: **(1) Normal**: Single-layer basal columnar epithelium, p16/Ki-67 negative, HPV absent/cleared. **(2) HPV infection**: HPV integrated into genome, viral E6/E7 expressed, p53/Rb pathways disrupted, cells begin proliferating. **(3) CIN I**: Dysplasia in lower 1/3, koilocytes visible, p16/Ki-67 in lower 1/3. **(4) CIN II**: Dysplasia in lower 2/3, increased N:C ratio, abnormal mitoses, p16/Ki-67 in lower 2/3. **(5) CIN III**: Full-thickness dysplasia, carcinoma in situ, p16/Ki-67 throughout, basement membrane still intact. **(6) Invasive cancer**: Breaks basement membrane, infiltrates stroma in nests/glands, lymphovascular invasion possible. **Timeline**: Usually takes 10-20 years from HPV infection to invasive cancer.

**Q9**: What is the role of HPV vaccination in cervical cancer prevention? What is the current status in India?
> **A**: **Mechanism**: Vaccines (2-, 4-, or 9-valent) contain VLP (virus-like particles) from HPV L1 capsid protein. Induce strong antibody response → Neutralize virus → Prevent initial infection. **Efficacy**: >95% if given before sexual debut (before HPV exposure). **Population impact**: With high coverage, predicted 70-90% reduction in cervical cancer incidence over 30 years (targets 70% of cancers caused by HPV 16/18). **Current status in India**: (1) Not yet in routine national immunization program, (2) Available in private sector (expensive), (3) Some states trialing in government programs, (4) **Opportunity**: Large burden of cervical cancer in India, young population, vaccination could prevent hundreds of thousands of cancers.

**Q10**: A 26-year-old has HSIL on Pap. Colposcopy shows coarse, thick acetowhite epithelium with irregular vasculature. Biopsy = CIN II. Should she undergo excision or ablation? Explain.
> **A**: **Management**: **Excision (LEEP) is preferred** even though CIN II can technically be treated with ablation. **Reasons**: (1) Specimen obtained → pathology assessment, (2) Can assess margins (negative margins = 90% cure), (3) Can exclude microinvasion (especially important with HSIL cytology), (4) Can assess endocervical margins (ECC). **If ablation used**: Cannot assess margins or rule out invasion, 10-15% risk of recurrence. **Follow-up**: Cytology/HPV at 6, 12, 24 months minimum.`,
        mnemonics: [],
        keyPoints: [
          "E6 degrades p53; E7 inactivates Rb → Loss of cell cycle control",
          "Persistent HPV 16/18 infection → 10-20 year progression to invasive cancer",
          "ASCUS: HPV reflex (neg→routine, pos→colposcopy)",
          "LSIL age <25: observe (60% regress); age ≥25: colposcopy",
          "HSIL and CIN II/III: excision (LEEP) for specimen/margin assessment"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 21", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 31", edition: "17th" }
        ]
      }
    ]
  }
];
`,
