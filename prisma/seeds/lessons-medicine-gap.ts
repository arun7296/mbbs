import type { TopicLessons } from "./content-loader";

export const medicineGapLessons: TopicLessons[] = [
  {
    topicCode: "IM-MOD-05-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "geriatric-medicine-foundation",
        title: "Geriatric Medicine - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of age-related physiological changes, frailty syndrome, comprehensive geriatric assessment, and principles of managing elderly patients.",
        contentMd: `# Geriatric Medicine - Foundation

## Definition & Demographics
- **Geriatric medicine**: Care of older adults (typically >65 years)
- **Oldest-old**: >75 years; **super-olds**: >85 years
- India: 138 million elderly (2021), projected 319 million by 2050
- Gender: Female predominance in older age groups

## Age-Related Physiological Changes

### Cardiovascular
- Decreased cardiac output (5-8% per decade after 30 years)
- Increased systolic BP, decreased diastolic BP (widened pulse pressure)
- Left ventricular hypertrophy, diastolic dysfunction
- Decreased baroreceptor sensitivity → orthostatic hypotension
- Increased arterial stiffness

### Respiratory
- Decreased FEV1 (30 mL/year decline), FVC (14 mL/year)
- Increased residual volume and functional residual capacity
- Decreased exercise capacity
- Blunted cough and gag reflexes

### Renal
- GFR decline: 1 mL/min/year after age 40
- Decreased tubular function
- Impaired water conservation → dehydration risk
- Reduced drug clearance

### Gastrointestinal
- Decreased saliva production, swallowing difficulties
- Reduced gastric acid secretion
- Constipation from decreased motility
- Malnutrition risk

### Nervous System
- Brain weight loss (5-10%)
- Neurotransmitter decline
- Increased sleep fragmentation
- Slowed reaction time
- Impaired thermoregulation

### Musculoskeletal
- Loss of lean body mass (sarcopenia): 3-8% per decade after 30
- Bone mineral density loss: 1% per year (accelerated in women post-menopause)
- Decreased muscle strength: 1.5% per year after 50
- Joint cartilage loss

### Metabolic
- Decreased basal metabolic rate
- Insulin resistance increases
- Impaired glucose tolerance
- Body composition shift (increased fat, decreased muscle/water)

## Frailty Syndrome

### Definition
- Clinical syndrome of decreased reserves and vulnerability to adverse outcomes
- Not simply "old age" - many elderly are robust

### Fried Criteria (5 components; ≥3 = frail)
1. **Unintentional weight loss**: ≥5% in past year
2. **Exhaustion**: Reported fatigue
3. **Decreased grip strength**: <10th percentile for age/sex
4. **Slow gait speed**: >7 seconds to walk 15 feet
5. **Low physical activity**: <1-2 hours/week

### Consequences of Frailty
- Falls, fractures
- Disability, loss of independence
- Hospitalization, ICU admission
- Mortality (10-15% per year)

## Comprehensive Geriatric Assessment (CGA)

### Components
1. **Medical history & comorbidities** - polypharmacy assessment
2. **Functional status** - ADL (bathing, dressing, toileting, feeding) vs IADL (cooking, cleaning, finances)
3. **Cognitive status** - MMSE, MoCA screening
4. **Mood assessment** - GDS for depression
5. **Social assessment** - support systems, living situation
6. **Nutritional status** - BMI, MNA screening
7. **Medication review** - potentially inappropriate medications (Beers criteria)
8. **Fall risk assessment** - environment, gait, balance, medications

## Polypharmacy in Elderly
- Average elderly patient takes 4-5 medications
- Prevalence of inappropriate prescribing: 25-50%
- Beers Criteria: medications to avoid or use cautiously in elderly

## Key Differences in Disease Presentation

### Atypical Presentations
- **MI**: Silent ischemia, dyspnea without chest pain
- **Infection**: No fever, subtle signs of sepsis
- **Thyroid disease**: Weight loss rather than other symptoms
- **Depression**: Somatic complaints more than sadness

### Increased Vulnerability
- To infections (impaired immunity)
- To medications (altered pharmacokinetics/dynamics)
- To dehydration (reduced thirst mechanism)
- To heat and cold

## Indian Context
- Social structure: Joint families declining in urban areas
- Financial constraints: Limited access to healthcare
- Malnutrition: Protein-calorie malnutrition common
- Common conditions: Hypertension, diabetes, arthritis, cataract`,
        mnemonics: [
          { text: "FRAILTY: Weight loss, Exhaustion, Grip strength, gait speed, Low activity", explanation: "Fried criteria (≥3 components = frail)" },
          { text: "CGA COMPASS: Comorbidities, Cognition, Mood | Physical, ADL/IADL | Meds, Nutrition, Social", explanation: "Core domains of comprehensive geriatric assessment" },
          { text: "ATYPICAL: MI-silent, Infection-no fever, Depression-somatic", explanation: "Elderly often present atypically" },
          { text: "POLYPHARMACY: Average 4-5 meds, Beers criteria for inappropriate drugs", explanation: "Major concern in geriatric prescribing" }
        ],
        keyPoints: [
          "Aging involves progressive decline in organ system reserve and homeostatic capacity",
          "Frailty is not chronological age but biological vulnerability with 5 measurable components",
          "Comprehensive geriatric assessment addresses medical, functional, cognitive, social, and nutritional domains",
          "Elderly present atypically: MI without chest pain, infection without fever, depression with somatic symptoms",
          "Polypharmacy is common; Beers Criteria guide safe prescribing in elderly"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "340: Geriatric Medicine", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Geriatric Medicine", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "geriatric-medicine-mechanism",
        title: "Geriatric Medicine - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of age-related changes including cellular senescence, telomere shortening, mitochondrial dysfunction, and hallmarks of aging.",
        contentMd: `# Geriatric Medicine - Mechanisms of Aging

## Cellular & Molecular Aging Mechanisms

### DNA Damage & Telomeres
- **Telomere shortening**: 50-200 bp/year (limit: 50-70 divisions = Hayflick limit)
- **Accumulated DNA damage**: Oxidative stress, radiation, errors in replication
- **p16 and p21 expression**: Increased with age, drive senescence

### Mitochondrial Dysfunction
- Decreased ATP production (30-40% decline)
- Increased reactive oxygen species (ROS)
- Impaired calcium handling
- Reduced antioxidant capacity

### Epigenetic Changes
- DNA methylation alterations (epigenetic clock)
- Histone modifications change
- Altered gene expression patterns

### Cellular Senescence
- Cells enter growth arrest
- Senescence-associated secretory phenotype (SASP)
- Increased pro-inflammatory cytokines
- Accumulates with age

## Hallmarks of Aging (12 mechanisms)

1. **Genomic instability**: DNA damage accumulation
2. **Telomere attrition**: Shortened telomeres
3. **Epigenetic alterations**: Gene expression changes
4. **Loss of proteostasis**: Protein misfolding, aggregation
5. **Mitochondrial dysfunction**: Energy decline, ROS increase
6. **Cellular senescence**: Growth arrest, SASP
7. **Stem cell exhaustion**: Reduced regenerative capacity
8. **Altered intercellular communication**: Cytokine-driven inflammation
9. **Disabled macroautophagy**: Impaired protein/organelle clearance
10. **Dysbiosis**: Altered microbiome composition
11. **Altered nutrient sensing**: mTOR, SIRT1 dysregulation
12. **Compromised autophagy**: Reduced cellular cleaning

## Inflammation in Aging

### Inflammaging
- Chronic low-grade inflammation
- Elevated IL-6, TNF-alpha, IL-1beta, CRP
- Drives age-related diseases (cardiovascular, neurodegenerative)
- Immunosenescence: impaired adaptive immunity

### SASP (Senescence-Associated Secretory Phenotype)
- Senescent cells produce IL-6, IL-8, TNF-alpha
- Promote inflammation and tissue remodeling
- Accumulate with age

## Organ System Pathophysiology

### Cardiovascular Aging
- **Arterial stiffness**: Collagen cross-linking, elastin loss
- **Endothelial dysfunction**: ↓NO production, ↑oxidative stress
- **Diastolic dysfunction**: LV stiffness increases
- **Arrhythmia susceptibility**: Fibrosis, altered conduction

### Immune Aging
- **T-cell decline**: Thymic involution, reduced naive T cells
- **Impaired response**: To vaccines, infections
- **Autoimmunity increase**: Loss of immune tolerance
- **Innate immunity**: Neutrophil dysfunction, impaired phagocytosis

### Nervous System Aging
- **Neurodegeneration**: Amyloid-beta, tau pathology
- **Synaptic loss**: Dendritic spine reduction
- **Neuroinflammation**: Microglial activation
- **Reduced neuroplasticity**: Decreased BDNF, NGF

### Musculoskeletal Aging (Sarcopenia)
- **Mitochondrial dysfunction**: ↓ATP for muscle contraction
- **Protein breakdown**: Increased proteolysis by ubiquitin-proteasome
- **Denervation**: Loss of motor neurons
- **Impaired regeneration**: Reduced myogenic progenitor cells

## Pharmacokinetic & Pharmacodynamic Changes

### Absorption
- ↓Gastric acid, GI motility
- ↓Splanchnic blood flow
- Increased drug binding to food

### Distribution
- ↓Total body water (↓distribution of water-soluble drugs)
- ↑Body fat (↑Vd of lipophilic drugs)
- ↑Protein binding (competitive binding)

### Metabolism
- ↓Liver mass (20-30% reduction)
- ↓Hepatic blood flow (30-40%)
- ↓Cytochrome P450 activity
- ↓Phase II metabolism

### Elimination
- ↓GFR (creatinine clearance formula: (140-age) × weight ÷ 72 × Cr)
- ↓Tubular secretion
- ↓Renal metabolism

### Pharmacodynamics
- Increased sensitivity to CNS drugs (benzodiazepines, opioids)
- Altered drug-receptor interaction
- Impaired compensatory mechanisms`,
        mnemonics: [
          { text: "HALLMARKS: Genomic, Telomeres, Epigenetic, Proteostasis, Mitochondria, Senescence, Stem cells, Inflammation, Autophagy, Dysbiosis, Nutrient sensing, Autophagy (12 total)", explanation: "12 hallmarks of aging mechanisms" },
          { text: "INFLAMMAGING: IL-6, TNF-alpha, CRP ↑ | Immunosenescence: T-cells ↓, vaccines fail", explanation: "Chronic inflammation and immune decline" },
          { text: "PK CHANGES: Absorption ↓, Distribution ↑VD (fat drugs), Metabolism ↓CYP450, Elimination ↓GFR", explanation: "All processes altered in elderly" },
          { text: "SARCOPENIA: Mitochondria ↓, Proteolysis ↑, Denervation, Regeneration ↓", explanation: "Causes of age-related muscle loss" }
        ],
        keyPoints: [
          "Aging results from accumulated cellular damage (DNA, mitochondria, proteins, organelles)",
          "12 hallmarks of aging include genomic instability, telomere attrition, epigenetic changes, and cellular senescence",
          "Inflammaging (chronic low-grade inflammation) is a key driver of age-related diseases",
          "All drug pharmacokinetic processes are altered: absorption ↓, distribution changed (↑Vd lipophilic), metabolism ↓, elimination ↓",
          "Immunosenescence reduces vaccine response and increases infection/cancer risk in elderly"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "340: Geriatric Medicine", edition: "21st" },
          { book: "Nature Medicine Review: Hallmarks of Aging", chapter: "Lopez-Lluch et al", edition: "2023" }
        ]
      },
      {
        layer: 3,
        slug: "geriatric-medicine-clinical",
        title: "Geriatric Medicine - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical approach to elderly patients including falls, incontinence, delirium, dementia, and practical management strategies in Indian healthcare setting.",
        contentMd: `# Geriatric Medicine - Clinical Presentation & Management

## Geriatric Syndromes

### Falls in Elderly
**Epidemiology:**
- 1 in 3 adults >65 fall annually; 1 in 4 >75
- Leading cause of injury deaths in elderly

**Intrinsic Factors:**
- Sarcopenia, muscle weakness
- Gait disorders, balance impairment
- Vision loss (cataract, macular degeneration)
- Medication effects (sedatives, antihypertensives)
- Cognitive impairment

**Extrinsic Factors:**
- Environmental hazards (poor lighting, loose rugs)
- Assistive device misuse
- Inappropriate footwear

**Management:**
1. Fall risk assessment and stratification
2. Environmental modification
3. Exercise (strength, balance, flexibility)
4. Vision correction
5. Medication review (reduce sedatives, optimize HTN control)
6. Home safety assessment
7. Assistive devices (cane, walker)

### Incontinence (Urinary & Fecal)

**Urinary Incontinence Types:**
1. **Stress**: Loss with cough, sneeze, exercise (pelvic floor weakness)
2. **Urgency**: Urge to void with involuntary loss (OAB)
3. **Overflow**: Incomplete emptying with dribbling
4. **Functional**: Normal urinary system but inability to reach toilet

**Assessment:**
- Frequency-volume chart (3-day diary)
- Post-void residual (US or catheterization)
- Urinalysis, urine culture
- Pelvic exam (pelvic floor strength, pelvic masses)

**Management:**
- Toileting schedule
- Pelvic floor exercises (Kegel)
- Medications: Anticholinergics (oxybutynin) for urgency, alpha-agonists for stress
- Absorbent products, catheterization if needed

### Delirium

**Definition**: Acute, fluctuating change in mental status with inattention

**Common in Hospitalized Elderly:**
- Prevalence: 20-40% of hospitalized elderly

**Risk Factors:**
- Infections (UTI, pneumonia)
- Medications (anticholinergics, benzodiazepines, opioids)
- Metabolic derangements (hypoxia, hypoglycemia, hyponatremia)
- Immobility, sleep deprivation
- Constipation, urinary retention

**Management (Acute & Preventive):**
1. Identify and treat underlying cause
2. Optimize medications
3. Early mobilization
4. Cognitive stimulation
5. Sleep hygiene
6. Avoid physical restraints
7. Reorientation strategies

### Cognitive Impairment & Dementia

**Mild Cognitive Impairment (MCI):**
- Subjective or objective memory loss
- No functional impairment in ADL
- Risk of progression to dementia: 10-15% per year

**Dementia Types:**
1. **Alzheimer's Disease (60-80%)**: Amyloid-beta, tau pathology, memory loss first
2. **Vascular Dementia (15-25%)**: Post-stroke cognitive decline, stepwise progression
3. **Lewy Body Dementia**: Visual hallucinations, parkinsonism, REM behavior disorder
4. **Frontotemporal Dementia**: Behavior/language changes first, memory preserved early

**Screening:**
- MMSE (Mini-Mental State Exam)
- MoCA (Montreal Cognitive Assessment)
- Clock Drawing Test

**Management:**
- Cholinesterase inhibitors (donepezil, rivastigmine) - slow decline
- Memantine - NMDA antagonist
- Behavioral interventions
- Caregiver education and support
- Advance care planning

## Polypharmacy & Medication Management

**Beers Criteria (Avoid in Elderly >65):**
- **Anticholinergics**: Diphenhydramine, oxybutynin (delirium, falls, constipation)
- **NSAIDs**: Chronic use (GI, renal, cardiovascular)
- **Benzodiazepines**: All (delirium, falls, dependence)
- **Tricyclic antidepressants**: Amitriptyline (anticholinergic)
- **Sulfonylureas**: Long-acting (hypoglycemia risk)
- **Barbiturates**: Phenobarbital (sedation, falls)

**Medication Optimization:**
1. Regular medication review (deprescribing)
2. Use lowest effective dose
3. Monitor for interactions
4. Assess adherence
5. Simplify regimens (once daily if possible)

## Management of Specific Conditions

### Hypertension in Elderly
- **SBP goal**: 130-140 mmHg for most (higher targets if frail or heart failure)
- **Avoid rapid BP drops** (orthostatic hypotension)
- **Home BP monitoring** important
- Drug choice: ACE-I/ARB, thiazides preferred; avoid alpha-blockers

### Diabetes in Elderly
- **HbA1c goal**: 7-8% for most (higher if frail, polypharmacy)
- **Avoid hypoglycemia**: Reduce sulfonylureas, increase glucose monitoring
- **GFR-adjusted dosing**: Adjust metformin if eGFR <30

### Heart Failure in Elderly
- Often diastolic dysfunction
- Diuretics for congestion
- ACE-I/ARBs, beta-blockers for systolic dysfunction
- Avoid NSAIDs

## End-of-Life Care & Advance Planning

**Advance Care Planning:**
- Goals of care discussion
- Living will, healthcare proxy designation
- CPR preferences
- Organ donation

**Palliative Care:**
- Focus on comfort, not cure
- Pain management (opioids appropriate for terminal care)
- Symptom control (dyspnea, agitation, nausea)
- Psychosocial and spiritual support

## Indian Context Specific Management

### Healthcare Access
- Limited geriatric specialists
- Informal caregiving system (family)
- Financial constraints on medications
- Use generic, affordable drugs

### Common Issues in India
- Malnutrition (protein-energy)
- Elder abuse (financial, physical, emotional)
- Tuberculosis in elderly
- Cataracts, vision impairment
- Traditional medicine use (drug interactions)

### Community Resources
- ASHA (Accredited Social Health Activists) for home care
- Anganwadis for nutritional support
- Government schemes: Ayushman Bharat, PMJAY
- NGOs for elderly care`,
        mnemonics: [
          { text: "FALLS: Weakness, Vision, Medications, Home hazards, Cognitive", explanation: "Common fall risk factors" },
          { text: "DELIRIUM: Infections, Medications, Metabolic, Immobility, Sleep, Constipation", explanation: "Causes to rule out in acute mental status change" },
          { text: "BEERS AVOID: Anticholinergics, NSAIDs, Benzodiazepines, Tricyclic ADs, Long-acting sulfonylureas", explanation: "Drug classes to avoid in elderly" },
          { text: "DEMENTIA TYPES: AD (amyloid), Vascular (stroke), Lewy (hallucinations), FTD (behavior)", explanation: "Main dementia subtypes" }
        ],
        keyPoints: [
          "Falls are common (1 in 3 >65) and preventable through multifactorial intervention",
          "Delirium is acute and fluctuating; always search for underlying cause (infection, medication, metabolic)",
          "Beers Criteria guide medication avoidance in elderly: anticholinergics, benzodiazepines, NSAIDs",
          "Cognitive impairment ranges from mild (MCI) to dementia; Alzheimer's most common",
          "Polypharmacy is major issue; regular medication review and deprescribing essential"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "340: Geriatric Medicine", edition: "21st" },
          { book: "Beers Criteria for Potentially Inappropriate Medication Use in Older Adults", edition: "2023" }
        ]
      },
      {
        layer: 4,
        slug: "geriatric-medicine-exam",
        title: "Geriatric Medicine - Exam Prep",
        estimatedMinutes: 25,
        summary: "Comprehensive exam-focused review with high-yield facts, common exam scenarios, and key differentials in geriatric conditions.",
        contentMd: `# Geriatric Medicine - Exam Preparation

## High-Yield Facts

### Aging Physiology
- **Cardiac output**: ↓5-8% per decade after 30 years
- **GFR decline**: 1 mL/min/year after 40 (use Cockcroft-Gault formula)
- **Lean body mass**: ↓3-8% per decade after 30
- **TBW (total body water)**: ↓50 years: 60%, 80 years: 45%
- **Body fat**: ↑ (30% at 60 vs 18% at 30)

### Frailty Criteria (Fried)
- ≥3 of: weight loss, exhaustion, low grip strength, slow gait, low activity
- 10-15% annual mortality if frail
- Reversible if addressed early

### Pharmacokinetics in Elderly
- **Volume of distribution**: ↑ lipophilic (accumulation), ↓ hydrophilic
- **Half-life**: ↑ (due to ↓ metabolism and ↓ clearance)
- **Protein binding**: Changed (competition with endogenous substances)
- **GFR-adjusted dosing**: Essential for renally cleared drugs

### Atypical Presentations
| Condition | Typical Young | Atypical Elderly |
|-----------|---------------|------------------|
| MI | Chest pain | Dyspnea, fatigue, syncope, no pain |
| Infection | Fever, WBC ↑ | Hypothermia, normal WBC |
| Thyroid | Symptoms | Weight loss only (apathetic hyperthyroid) |
| Depression | Sadness | Somatic complaints, cognitive impairment |
| Pneumonia | Fever, cough | Confusion, falls, hypothermia |

### Beers Criteria - Avoid These
- **Anticholinergics**: Cause cognitive impairment, urinary retention
- **Benzodiazepines**: Respiratory depression, falls, dependence
- **Aspirin**: For primary prevention (increased bleeding risk)
- **NSAIDs**: GI and cardiovascular risk
- **Sedating antihistamines**: Diphenhydramine contraindicated
- **Tricyclic antidepressants**: SSRIs preferred

### Common Fall Causes (Mnemonic)
- **Medications**: Diuretics, sedatives, antihypertensives
- **Vestibular**: BPPV, labyrinthitis
- **Vision**: Cataracts, macular degeneration
- **Muscle**: Sarcopenia, weakness
- **Joints**: Arthritis, stiffness
- **Cardiopulmonary**: Arrhythmia, syncope

### Geriatric Depression
- **GDS (Geriatric Depression Scale)**: 15-item screening tool
- **Presents as**: Somatic complaints, cognitive impairment (pseudodementia)
- **Suicidality**: Higher in elderly (especially men >75)
- **Treatment**: SSRIs preferred (sertraline, citalopram)

## Common Exam Questions

**Q1: 75-year-old on metformin with Cr 1.5, eGFR 28. Management?**
A: Adjust metformin dose if eGFR 30-45 (max 1000 mg BD), CONTRAINDICATED if <30. Check thyroid, B12.

**Q2: 80-year-old with confusion after starting diphenhydramine. What's the issue?**
A: Anticholinergic toxicity (Beers criteria violation). D/C drug, reorient, treat underlying cause.

**Q3: 70-year-old with "failure to thrive", weight loss, irritability. Most likely?**
A: Apathetic hyperthyroidism (TSH low, normal T4). Elderly atypical presentation. Check TSH.

**Q4: 72-year-old recurrent UTI, confused yesterday. Management?**
A: Treat UTI with antibiotics (avoid nitrofurantoin if eGFR <30). Delirium likely from infection, resolves with treatment.

**Q5: 78-year-old on amlodipine, atenolol, HCTZ with recent syncope. Most likely?**
A: Orthostatic hypotension (antihypertensives). Check lying/standing BP, reduce doses, fluid challenge.

**Q6: Patient on clopidogrel, aspirin, amiodarone, metformin (5 medications). What's missing?**
A: Medication reconciliation and deprescribing review. High polypharmacy risk.

**Q7: 75-year-old with MMSE 24/30, normal ADL. Diagnosis?**
A: Mild Cognitive Impairment (MCI). 10-15% progress to dementia/year. Monitor, check reversible causes (B12, thyroid, HTN).

## Differential Diagnosis Approaches

### Delirium vs Dementia vs Depression

| Feature | Delirium | Dementia | Depression |
|---------|----------|----------|-----------|
| Onset | Acute (hours-days) | Insidious (months) | Gradual (weeks-months) |
| Awareness | Fluctuating, reduced | Clear early, reduced late | Alert |
| Attention | Impaired | Normal early | Poor effort |
| Reversibility | Often reversible | Irreversible (mostly) | Often reversible |
| Cause | Dehydration, infection, drugs, metabolic | Neurodegenerative | Mood disorder |
| Treatment | Treat cause | Symptom management, slow decline | Antidepressants |

### Syncope Workup in Elderly
1. **History**: Prodrome, fall, injury
2. **Vitals**: Orthostatic BP check (drop >20 SBP or >10 DBP)
3. **ECG**: Arrhythmia, MI, conduction defect
4. **Echocardiogram**: HF, AS, HCM
5. **Tilt table**: If recurrent, diagnosis unclear
6. **Medication review**: Diuretics, antihypertensives, antiarrhythmics

### Urinary Incontinence Differentiation

| Type | Mechanism | Presentation | Treatment |
|------|-----------|--------------|-----------|
| Stress | Pelvic floor weakness | Loss with exertion, sneezing | Kegel exercises, alpha-agonists |
| Urgency | Overactive bladder | Sudden urge, frequent | Anticholinergics (oxybutynin), timed voiding |
| Overflow | Incomplete emptying | Dribbling, elevated PVR | Treat obstruction, CIC if needed |
| Functional | Can't reach toilet | Full bladder, mobility issues | Toileting schedule, accessibility |

## Medication Management Strategy

**STOPP Criteria (Things to Stop):**
- Stop sedative-hypnotics in >65 (benzodiazepines, Z-drugs)
- Stop NSAIDs with GI risk factors
- Stop anticholinergics with cognitive impairment

**START Criteria (Things to Start):**
- Start ACE-I/ARB post-MI
- Start beta-blockers in HF with reduced EF
- Start calcium + vitamin D in osteoporosis risk

**Dosing in Elderly:**
- "Start low, go slow"
- Adjust for renal function (eGFR-based dosing)
- Monitor regularly for toxicity
- Deprescribe when possible`,
        mnemonics: [
          { text: "FRAILTY: Weight loss, Exhaustion, Grip strength ↓, Gait speed ↓, Low activity", explanation: "≥3 = frail, high mortality risk" },
          { text: "ATYPICAL MI: Dyspnea > chest pain, Syncope, Fatigue, No pain common", explanation: "Elderly MI presents without typical chest pain" },
          { text: "BEERS: Anticholinergics (confusion), Benzodiazepines (falls), NSAIDs (GI/CV), Aspirin (primary prevention)", explanation: "Drugs to avoid in elderly >65" },
          { text: "DELIRIUM vs DEMENTIA: Delirium=acute/fluctuating/reversible, Dementia=insidious/gradual/irreversible", explanation: "Key diagnostic features" },
          { text: "INCONTINENCE: Stress=Kegels, Urgency=anticholinergics, Overflow=catheterize, Functional=schedule", explanation: "Type-specific management" },
          { text: "DOSING: Start low go slow | Adjust eGFR | Monitor toxicity | Deprescribe when able", explanation: "Golden principles of drug use in elderly" }
        ],
        keyPoints: [
          "Frailty criteria: ≥3 of weight loss, exhaustion, weak grip, slow gait, low activity; 10-15% annual mortality",
          "Atypical presentations common: MI without chest pain, infection without fever, depression with somatic complaints",
          "Beers Criteria: Avoid anticholinergics, benzodiazepines, NSAIDs in elderly",
          "Medication dose adjustment essential: Use GFR-based dosing; half-life increased in elderly",
          "Delirium is acute/fluctuating and often reversible; dementia is insidious and progressive"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "340: Geriatric Medicine", edition: "21st" },
          { book: "Beers Criteria for Potentially Inappropriate Medication Use", edition: "2023" }
        ]
      },
      {
        layer: 5,
        slug: "geriatric-medicine-active-recall",
        title: "Geriatric Medicine - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard-based active recall for rapid retention of geriatric medicine key concepts and clinical management.",
        contentMd: `# Geriatric Medicine - Active Recall Flashcards

**Q1: List the 5 components of Fried Frailty Criteria.**
A: 1) Unintentional weight loss (≥5% in past year) 2) Exhaustion 3) Weak grip strength (<10th percentile) 4) Slow gait speed (>7 sec for 15 feet) 5) Low physical activity (<1-2 hrs/week). ≥3 = frail.

**Q2: What is the expected decline in GFR with aging and how do you calculate creatinine clearance?**
A: GFR declines ~1 mL/min/year after age 40. Cockcroft-Gault: [(140-age) × weight(kg)] ÷ 72 × Cr]. Females: × 0.85.

**Q3: Define and distinguish delirium, dementia, and depression.**
A: Delirium=acute/fluctuating/reversible (causes: infection, meds, metabolic); Dementia=insidious/irreversible/progressive (Alzheimer's, vascular); Depression=mood disorder/pseudodementia, often reversible with treatment.

**Q4: What are the core domains of Comprehensive Geriatric Assessment?**
A: Medical (comorbidities), Functional (ADL/IADL), Cognitive (MMSE, MoCA), Mood (GDS), Social (support), Nutritional (MNA), Medication (drug review, Beers), Physical (strength, gait, balance).

**Q5: List 5 medications to AVOID in elderly per Beers Criteria.**
A: 1) Anticholinergics (diphenhydramine, oxybutynin) 2) Benzodiazepines (lorazepam, diazepam) 3) NSAIDs (chronic use) 4) Tricyclic antidepressants (amitriptyline) 5) Long-acting sulfonylureas (glibenclamide).

**Q6: How do pharmacokinetics change in elderly for each ADME process?**
A: Absorption ↓ (↓gastric acid, motility), Distribution ↑ Vd lipophilic (↓TBW, ↑fat), Metabolism ↓ (↓CYP450), Elimination ↓ (↓GFR, tubular secretion).

**Q7: What is the pathophysiology of sarcopenia in elderly?**
A: Mitochondrial dysfunction (↓ATP), increased proteolysis (ubiquitin-proteasome), denervation (loss of motor neurons), reduced growth factors (IGF-1, testosterone).

**Q8: Describe the 12 Hallmarks of Aging.**
A: 1) Genomic instability 2) Telomere attrition 3) Epigenetic alterations 4) Loss of proteostasis 5) Mitochondrial dysfunction 6) Cellular senescence 7) Stem cell exhaustion 8) Altered intercellular communication (inflammaging) 9) Disabled autophagy 10) Dysbiosis 11) Altered nutrient sensing 12) Compromised autophagy.

**Q9: What is inflammaging and its clinical significance?**
A: Chronic low-grade inflammation with elevated IL-6, TNF-alpha, CRP, IL-1beta. Drives cardiovascular disease, dementia, frailty. Results from cellular senescence and SASP.

**Q10: List common fall risk factors and prevention strategies.**
A: Risk factors: sarcopenia, vision loss, medications (diuretics, sedatives), cognitive impairment, home hazards. Prevention: strength/balance exercises, vision correction, meds review, environmental modification, assistive devices.

**Q11: How does presentation of common diseases differ in elderly?**
A: MI: dyspnea/fatigue instead of chest pain; Infection: hypothermia/no fever instead of fever; Thyroid: weight loss without symptoms; Depression: somatic complaints instead of sadness; Pneumonia: confusion/falls instead of fever/cough.

**Q12: Differentiate stress incontinence from urgency incontinence.**
A: Stress: pelvic floor weakness, loss with cough/sneeze/exercise, Kegel exercises + alpha-agonists. Urgency: overactive bladder, sudden urge + frequency, anticholinergics (oxybutynin) + timed voiding.

**Q13: What is Mild Cognitive Impairment and its prognosis?**
A: MCI = subjective or objective memory loss without ADL impairment. Progresses to dementia 10-15% per year. Reversible causes (thyroid, B12, HTN, depression) must be excluded.

**Q14: Describe the 4 main types of dementia and their distinguishing features.**
A: 1) Alzheimer's (60-80%, amyloid-beta/tau, memory first) 2) Vascular (15-25%, post-stroke, stepwise) 3) Lewy Body (visual hallucinations, parkinsonism, RBD) 4) Frontotemporal (behavior/language first, memory spared early).

**Q15: What are the treatment options for dementia and their mechanisms?**
A: Cholinesterase inhibitors (donepezil, rivastigmine) slow cognitive decline by increasing acetylcholine. Memantine = NMDA antagonist, protects neurons. Behavioral interventions + caregiver support essential.

**Q16: How do hypertension targets differ in elderly?**
A: SBP goal 130-140 mmHg for robust elderly; higher targets (150) if frail, polypharmacy, or multiple comorbidities. Avoid rapid BP drops (orthostatic hypotension risk). Home BP monitoring important.

**Q17: What is the HbA1c target in elderly with diabetes?**
A: 7-8% for most; higher (8-9%) if frail, polypharmacy, hypoglycemia risk. Avoid sulfonylureas (hypoglycemia). Adjust metformin if eGFR 30-45 (reduce dose), contraindicated <30.

**Q18: Describe the approach to orthostatic hypotension in elderly.**
A: Check lying/standing BP (drop >20 mmHg SBP or >10 mmHg DBP = orthostatic). Causes: medications (diuretics, antihypertensives), dehydration, autonomic dysfunction. Treatment: fluid challenge, medication adjustment/discontinuation, compression stockings.

**Q19: What is apathetic hyperthyroidism and how does it present in elderly?**
A: Atypical thyroid disease in elderly presenting as weight loss, fatigue, depression, cognitive decline without typical hyperthyroid symptoms. TSH low, T4 normal (subclinical) or elevated. High mortality if untreated.

**Q20: Summarize the principles of deprescribing in elderly.**
A: Regular medication review, assess need for each drug, use lowest effective dose, simplify regimens, monitor for interactions/toxicity, avoid polypharmacy. "Start low, go slow." Discontinue Beers criteria drugs and long-term benzodiazepines.`,
        mnemonics: [
          { text: "FRAILTY: Weight loss, Exhaustion, Grip ↓, Gait ↓, Low activity = ≥3 frail", explanation: "Fried criteria; 10-15% annual mortality if frail" },
          { text: "ATYPICAL PRESENTATIONS: MI (dyspnea), Infection (fever absent), Thyroid (weight loss), Depression (somatic), Pneumonia (confusion)", explanation: "Elderly often present atypically" },
          { text: "BEERS AVOID: Anticholinergics, Benzodiazepines, NSAIDs, Tricyclics, Aspirin (primary prevention)", explanation: "Drug classes to avoid in elderly >65" },
          { text: "12 HALLMARKS: Genomic, Telomeres, Epigenetics, Proteostasis, Mito dysfunction, Senescence, Stem cells, Inflammation, Autophagy, Dysbiosis, Nutrient sensing, Autophagy", explanation: "Aging mechanisms" },
          { text: "COMPREHENSIVE GERIATRIC ASSESSMENT: Medical, Cognitive, Mood | Physical/Functional | Medications, Nutrition, Social", explanation: "CGA COMPASS framework" },
          { text: "INCONTINENCE TYPES: Stress (exercise/cough), Urgency (overactive bladder), Overflow (incomplete empty), Functional (can't reach toilet)", explanation: "Type-specific management essential" },
          { text: "DEMENTIA TYPES: AD (amyloid/memory), Vascular (stroke), Lewy (hallucinations), FTD (behavior/language)", explanation: "4 main subtypes with distinct features" },
          { text: "PHARMACOKINETICS: Absorption ↓, Distribution ↑VD lipophilic, Metabolism ↓CYP450, Elimination ↓GFR", explanation: "All ADME altered in elderly" },
          { text: "FALL PREVENTION: Strength/balance exercise, Vision correction, Med review, Home modification, Assistive devices", explanation: "Multifactorial intervention approach" },
          { text: "DELIRIUM CAUSES: Infections, Medications, Metabolic, Immobility, Sleep, Constipation = IMISC mnemonic", explanation: "Always search for reversible cause in acute confusion" }
        ],
        keyPoints: [
          "Frailty affects 10-15% of elderly >65 with 10-15% annual mortality; 5 measurable components (Fried criteria)",
          "Pharmacokinetics altered in elderly: absorption ↓, Vd ↑ for lipophilic drugs, metabolism ↓, elimination ↓ GFR",
          "Beers Criteria identify inappropriate medications: anticholinergics, benzodiazepines, NSAIDs, tricyclics contraindicated",
          "Atypical presentations common: MI without chest pain, infection without fever, depression with somatic complaints",
          "Comprehensive geriatric assessment includes medical, functional, cognitive, mood, social, nutritional, and medication domains",
          "Delirium is acute/fluctuating and reversible; always search for cause (infection, medication, metabolic, immobility)",
          "Cognitive impairment ranges from MCI (10-15% progress to dementia/year) to dementia (Alzheimer's 60%, vascular 25%)",
          "Polypharmacy management essential: deprescribe, use lowest dose, monitor interactions, follow Beers Criteria"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "340: Geriatric Medicine", edition: "21st" },
          { book: "Beers Criteria for Potentially Inappropriate Medication Use in Older Adults", edition: "2023" },
          { book: "API Textbook of Medicine", chapter: "Geriatric Medicine", edition: "11th" }
        ]
      }
    ]
  },
  {
    topicCode: "IM-MOD-08-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "sle-aps-foundation",
        title: "SLE & Antiphospholipid Syndrome - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of SLE classification, ACR/EULAR criteria, clinical manifestations, and antiphospholipid syndrome pathophysiology.",
        contentMd: `# SLE & Antiphospholipid Syndrome - Foundation

## Systemic Lupus Erythematosus (SLE)

### Epidemiology
- Female predominance: 9:1 (reproductive age)
- Prevalence: 40-60 per 100,000 (varies by ethnicity)
- Higher in African, Hispanic, Asian populations
- Peak incidence: 15-44 years

### Pathophysiology Overview
- Autoimmune disorder with loss of immune tolerance
- Antinuclear antibodies (ANA) and immune complexes
- Complement consumption (C3, C4 low)
- Type III hypersensitivity reaction
- Genetic + environmental triggers

### Classification Criteria (ACR/EULAR 2019)
**Requires ANA ≥1:80 at some point AND cumulative score ≥10**

**Systemic Criteria (score if present):**
1. Constitutional symptoms (fever, fatigue, hair loss) = 1
2. Hematologic (anemia, leukopenia, thrombocytopenia, lymphocytopenia) = 3
3. Neuropsychiatric (seizures, psychosis, confusion, severe headache, stroke, peripheral neuropathy, acute confusion) = 2
4. Mucocutaneous (non-scarring alopecia, oral ulcers, photosensitive rash) = 2
5. Serosal (pleuritis, pericarditis) = 2
6. Renal (protein >0.5 g/day, RBC casts) = 4

**Immunologic Criteria:**
1. ANA (≥1:80 by IIF) = 1
2. Anti-dsDNA OR anti-SM = 3
3. Lupus anticoagulant = 2
4. Anti-beta2 GPI OR anticardiolipin (moderate/high) = 2
5. Low complement (C3 or C4) = 2
6. Coombs test positive (without hemolysis) = 1

## Antiphospholipid Syndrome (APS)

### Definition
- Thrombophilia with recurrent thrombotic events and/or obstetric complications
- Caused by antibodies against phospholipid-binding proteins

### Antibodies
1. **Lupus anticoagulant** (LA) - paradoxically prolonged PTT
2. **Anticardiolipin** (aCL) - IgG, IgM, IgA
3. **Anti-beta2 glycoprotein-I** (aβ2GPI)

### Classification Criteria (Sydney)
**Primary APS:** No underlying autoimmune disease
**Secondary APS:** Associated with SLE or other disease (30-40% of SLE)
**Obstetric APS:** Recurrent miscarriage or severe preeclampsia

**Requires Positive Test Twice (≥12 weeks apart):**
- Lupus anticoagulant, OR
- Anticardiolipin (IgG or IgM), OR
- Anti-beta2 GPI

## Clinical Manifestations

### SLE Manifestations

**Mucocutaneous (40-60%):**
- Photosensitive malar rash (classic "butterfly")
- Discoid rash
- Oral ulcers (painless, non-scarring)
- Hair loss (non-scarring alopecia)
- Photosensitivity

**Musculoskeletal (80%):**
- Non-erosive arthritis (hands, knees, wrists)
- Avascular necrosis (femoral head, humeral head)

**Renal (50-70%):**
- Lupus nephritis (WHO Classes I-VI)
- Class IV (diffuse proliferative) most common, most severe

**Hematologic (75%):**
- Anemia (hemolytic most specific)
- Leukopenia (<4000)
- Thrombocytopenia
- Coombs positive (may be asymptomatic)

**Pulmonary (30-60%):**
- Pleuritis (pleurisy)
- Pulmonary hemorrhage
- Shrinking lung syndrome
- Pulmonary hypertension

**Cardiac (25%):**
- Pericarditis
- Myocarditis
- Valvulitis (Libman-Sacks, non-bacterial)

**Neuropsychiatric (40-60%):**
- Seizures
- Psychosis
- Cognitive dysfunction
- Migraine
- Peripheral neuropathy
- Transverse myelitis
- Stroke (due to APS)

### APS Manifestations

**Thrombotic:**
- Venous: DVT, PE, splenic infarction
- Arterial: Stroke, MI, limb ischemia
- Recurrent thrombosis (20% annually if untreated)

**Obstetric:**
- Recurrent pregnancy loss (>3 consecutive or >1 after 10 weeks)
- Severe preeclampsia, placental insufficiency
- HELLP syndrome
- Intrauterine growth restriction (IUGR)

**Hematologic:**
- Thrombocytopenia (usually mild)
- Hemolytic anemia

**Other:**
- Cardiac valve disease
- Superficial thrombophlebitis
- Cognitive impairment`,
        mnemonics: [
          { text: "SLE CRITERIA: ANA required, 10+ points from systemic, hematologic, neuro, mucocutaneous, serosal, renal, immunologic", explanation: "ACR/EULAR 2019 classification" },
          { text: "MALAR RASH: Spares nasolabial folds | DISCOID RASH: Follicular plugging | PHOTOSENSITIVITY: UV exposure triggers", explanation: "SLE skin manifestations" },
          { text: "APS ANTIBODIES: LA (paradoxical PTT ↑), aCL, aβ2GPI | Must be positive ≥2x, ≥12 weeks apart", explanation: "Diagnostic criteria" },
          { text: "SLE SEROLOGY: ANA positive (>95%) | Anti-dsDNA/anti-SM specific | Complement ↓ (C3, C4) | Coombs +", explanation: "Laboratory findings" }
        ],
        keyPoints: [
          "SLE is autoimmune disease of reproductive-age women with multisystem involvement (malar rash, arthritis, nephritis classic)",
          "ACR/EULAR 2019 criteria requires ANA ≥1:80 PLUS cumulative score ≥10 from clinical and immunologic domains",
          "Anti-dsDNA and anti-SM antibodies are specific for SLE (high specificity); complement (C3, C4) low during active disease",
          "APS presents with thrombotic events (venous/arterial) or obstetric complications with positive antiphospholipid antibodies",
          "APS antibodies (LA, aCL, aβ2GPI) must be positive ≥12 weeks apart for diagnosis; LA causes paradoxical PTT prolongation"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "326: Systemic Lupus Erythematosus", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "sle-aps-mechanism",
        title: "SLE & Antiphospholipid Syndrome - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of lupus, immune complex disease, complement activation, and APS thrombotic mechanisms.",
        contentMd: `# SLE & APS - Pathophysiology

## SLE Pathogenic Mechanisms

### Loss of Immune Tolerance

**Genetic Factors:**
- HLA-DR2, HLA-DR3 association
- Complement deficiency (C4, C2) → impaired clearance of apoptotic cells
- TREX1 mutations (DNase)
- Tyrosine phosphatase (PTPN22) variants

**Environmental Triggers:**
- UV radiation (photosensitivity)
- Infections (EBV, parvovirus B19)
- Medications (hydralazine, procainamide, minocycline)
- Estrogens (oral contraceptives, HRT)

### Abnormal Apoptosis

**Increased Apoptosis:**
- Defective clearance of apoptotic cells
- Exposed intracellular antigens (DNA, histones)
- Activation of B cells to autoreactive clones

**Impaired Apoptosis Clearance:**
- Complement C1q, C4 deficiency
- Macrophage dysfunction
- Accumulation of apoptotic material

### B and T Cell Abnormalities

**B Cell Dysregulation:**
- Impaired T regulatory cell (Treg) function
- Loss of B cell tolerance
- Intrinsic B cell hyperresponsiveness
- Increased survival of autoreactive B cells

**T Cell Dysfunction:**
- Reduced Treg numbers/function
- T helper (Th17) expansion
- Impaired T cell suppression

**B Cell Activation:**
- Multiple autoantibodies produced
- Plasma cell expansion
- Germinal center hyperplasia

## Immune Complex Disease

### Formation
- Antigen (DNA, histone, RNA) binds antibody
- Immune complexes form in circulation

### Deposition Sites
1. **Glomeruli** → glomerulonephritis
2. **Skin** → lupus nephritis + vasculitis
3. **Joints** → arthritis
4. **Blood vessel walls** → vasculitis
5. **Serosae** → pleuritis, pericarditis

### Pathogenic Consequences
- Complement activation (C1 → C3 → C5)
- C3a, C5a generation (inflammation)
- C4b, C3b deposition
- Neutrophil recruitment
- Tissue damage, inflammation

## Complement Activation

### Classical Pathway (SLE-specific)
- Immune complexes bind C1q
- C1 → C4 → C2 → C3 → C5 → MAC
- C3a, C5a anaphylatoxins (chemotaxis)
- C4b, C3b opsonization

### Complement Consumption
- Persistent immune complexes
- Continuous classical pathway activation
- **Low C3, C4** (diagnostic of active SLE)
- Elevated C3a, C5a fragments

### Regulatory Abnormalities
- Reduced complement regulatory proteins (Factor H)
- Impaired clearance of complement components
- Abnormal C5a generation

## Antiphospholipid Syndrome Mechanisms

### Antibody Types & Mechanisms

**Lupus Anticoagulant (LA):**
- IgG/IgM antibodies against beta2GPI-phospholipid complex
- Binds to phosphatidylserine on cell membranes
- Paradoxically prolongs PTT (in vitro)
- Highly thrombogenic (in vivo)

**Anticardiolipin (aCL):**
- IgG, IgM, IgA antibodies
- Target: cardiolipin phospholipid
- Most common aPL antibody
- IgG > IgM in thrombosis risk

**Anti-beta2 GPI (aβ2GPI):**
- Antibodies against beta2-glycoprotein-I
- Highest thrombotic potential
- Often associated with arterial thrombosis

### Prothrombotic Mechanisms

**Platelet Activation:**
- Direct antibody binding to platelet phospholipids
- P-selectin exposure
- Platelet microparticle release
- Enhanced aggregation

**Endothelial Dysfunction:**
- Increased tissue factor expression
- Reduced thrombomodulin and protein C activation
- Increased von Willebrand factor (vWF)
- Enhanced adhesion molecule expression

**Tissue Factor Pathway:**
- Tissue factor overexpression on monocytes/endothelium
- Enhanced Factor VIIa activation
- Downstream thrombin generation

**Complement Activation:**
- aPL-immune complex deposition
- C5a generation
- Recruitment of tissue factor-bearing cells

**Thrombosis Risk Factors:**
- Triple-positive (LA + aCL + aβ2GPI) = highest risk
- IgG > IgM
- Moderate/high titers
- Persistent positivity
- Presence of lupus

## Lupus Nephritis Pathogenesis

### WHO Classification
1. **Class I**: Minimal mesangial
2. **Class II**: Mesangial proliferative
3. **Class III**: Focal proliferative (<50% glomeruli)
4. **Class IV**: Diffuse proliferative (>50% glomeruli) - most severe
5. **Class V**: Membranous
6. **Class VI**: Advanced sclerosing

### Pathogenic Process
- Immune complex deposition (subendothelial, subepithelial)
- Complement activation → C3, C4 deposition
- Glomerular inflammation
- Wire-loop lesions (subendothelial IgG/IgM/C3)
- Crescent formation
- Glomerulosclerosis`,
        mnemonics: [
          { text: "SLE PATHOGENESIS: Loss of tolerance → B/T cell dysregulation → Autoantibodies → Immune complex deposition → Complement activation → Tissue damage", explanation: "Sequential pathogenic cascade" },
          { text: "IMMUNE COMPLEX DISEASE: Ag + Ab → IC deposition → C1q binding → Classical pathway → C3a, C5a inflammation → Tissue damage", explanation: "Mechanism of organ involvement" },
          { text: "APS THROMBOSIS: aPL antibodies → Platelets ↑ activation | Endothelium TF ↑, thrombomodulin ↓ | Complement C5a ↑ | Tissue factor pathway ↑", explanation: "Multiple mechanisms driving thrombosis" },
          { text: "COMPLEMENT IN SLE: IC → C1q → C3a, C5a ↑ | C3, C4 ↓ (consumed) | Low complement = active disease", explanation: "Diagnostic and disease activity marker" }
        ],
        keyPoints: [
          "SLE results from loss of immune tolerance with B cell autoantibody production and T cell dysregulation",
          "Immune complexes deposit in glomeruli, skin, joints causing inflammation via complement activation",
          "Complement consumption (low C3, C4) is marker of active disease and immune complex-mediated pathology",
          "APS thrombosis driven by multiple mechanisms: platelet activation, endothelial TF expression, tissue factor pathway, complement activation",
          "LA antibodies paradoxically prolong PTT in vitro but cause thrombosis in vivo via beta2GPI-phospholipid binding"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "326: SLE", edition: "21st" },
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "Rheumatologic Diseases", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "sle-aps-clinical",
        title: "SLE & Antiphospholipid Syndrome - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical presentation, diagnosis, risk stratification, and management of SLE and APS with Indian healthcare context.",
        contentMd: `# SLE & APS - Clinical Presentation & Management

## SLE Clinical Presentation

### Typical Presentation
- Young woman (15-44 years) with photosensitive rash, joint pain, fever
- Insidious onset with periods of remission/exacerbation
- Constitutional symptoms: fatigue, fever, malaise, weight loss

### Severe/Life-Threatening Presentations
- Lupus nephritis (proteinuria, hematuria, RBC casts)
- CNS lupus (seizures, psychosis, stroke)
- Pulmonary hemorrhage (hemoptysis, respiratory failure)
- Cardiac involvement (myocarditis, pericarditis, valvulitis)
- Hematologic crisis (thrombocytopenia <20K, hemolytic anemia, thrombotic microangiopathy)

## Diagnosis & Investigation

### Clinical Assessment
- ACR/EULAR 2019 criteria (requires ANA + ≥10 points)
- Assess disease severity and organ involvement
- Screen for active disease

### Serological Tests

**ANA (Antinuclear Antibody):**
- Present in >95% of SLE
- Most sensitive test (negative ANA rules out SLE)
- Patterns: homogeneous, speckled, nucleolar
- Titers don't correlate with activity

**ANA-Related Antibodies (Specific):**
- **Anti-dsDNA**: 70% of SLE, correlates with disease activity and nephritis
- **Anti-SM**: 20-30%, highly specific for SLE
- **Anti-Ro/SSA, Anti-La/SSB**: Cutaneous lupus, photosensitivity
- **Anti-histone**: Drug-induced lupus

**Complement Levels:**
- C3, C4 consumed in active disease (low)
- Normalize with treatment
- Useful for disease activity monitoring

**Coagulation Studies (if APS suspected):**
- PTT (LA causes prolongation)
- Anticardiolipin (IgG, IgM, IgA)
- Anti-beta2 GPI (IgG, IgM)
- Dilute PTT to distinguish LA from other PTT prolongation causes

### Other Tests
- CBC (anemia, leukopenia, thrombocytopenia)
- Urinalysis (proteinuria, RBC, casts → nephritis)
- BUN, Cr (renal function)
- Coombs test (hemolysis)
- 24-hour urine protein

## APS Clinical Presentation

### Thrombotic APS
**Venous:**
- DVT (most common)
- PE, splenic/hepatic infarction
- Thrombophlebitis

**Arterial:**
- Stroke (younger age)
- MI
- Peripheral artery thrombosis

**Clinical Pattern:**
- Recurrent thrombosis (unprovoked)
- Multiple thrombotic sites
- Thrombosis despite anticoagulation ("catastrophic APS" - rare)

### Obstetric APS
**Pregnancy Complications:**
- Recurrent pregnancy loss (>3 consecutive or >1 after 10 weeks gestation)
- Severe preeclampsia (before 34 weeks or with systemic features)
- HELLP syndrome (hemolysis, elevated LFTs, low platelets)
- Placental insufficiency, IUGR
- Fetal heart abnormalities (bradycardia from AV block - anti-Ro/La)

**Post-Partum:**
- Increased VTE risk
- Maternal thrombosis

### Secondary APS (30-40% of SLE)
- SLE + thrombotic events or obstetric complications
- Requires treatment of both conditions

## APS Diagnosis

### Classification Criteria (Sydney)
**Requires Positive Serology + Thrombotic/Obstetric Event**

**Serology (2+ tests, ≥12 weeks apart):**
- Lupus anticoagulant (prolonged PTT), OR
- Anticardiolipin (IgG or IgM ≥40 IgM/G phospholipid units OR >99th percentile), OR
- Anti-beta2 GPI (IgG or IgM ≥>99th percentile)

**Clinical Events:**
- Thrombosis (arterial, venous, or microvascular), OR
- Obstetric complications (3+ consecutive miscarriages OR >10-week loss OR severe preeclampsia <34 weeks)

## Management

### SLE Management

**First-Line Medications:**
1. **NSAIDs/Acetaminophen**: For arthralgia, pleuritis, pericarditis
2. **Hydroxychloroquine**: 200-400 mg daily - all SLE patients
   - Reduces exacerbations by 50%
   - Renal protective
   - Skin/joint manifestations
3. **Topical/Intralesional corticosteroids**: For cutaneous lupus

**Moderate Disease:**
- Low-dose corticosteroids (0.5-1 mg/kg) + hydroxychloroquine
- Plus mycophenolate mofetil (MMF) or azathioprine (AZA)

**Severe/Lupus Nephritis:**
- **Induction**: Corticosteroids (IV methylprednisolone 500 mg-1 g × 3 days, then oral taper) + MMF (1-3 g daily) or IV cyclophosphamide (0.5-1 g/m² monthly)
- **Maintenance**: Low-dose corticosteroids + MMF or AZA + hydroxychloroquine
- **Newer agents**: Belimumab (anti-BAFF), mycophenolate preferred over cyclophosphamide (reduces fertility risk in women)

**CNS Lupus:**
- High-dose corticosteroids ± cyclophosphamide
- Anticonvulsants for seizures
- Anticoagulation/antiplatelet if thrombotic stroke

**Hematologic Manifestations:**
- Thrombocytopenia: Corticosteroids, splenectomy if refractory
- Hemolytic anemia: Corticosteroids, rituximab if refractory
- MAHA: Plasma exchange if severe

### APS Management

**Thrombotic APS:**
- **Acute thrombosis**: Anticoagulation (UFH, LMWH, then warfarin or DOAC)
- **Long-term**: Warfarin (INR 2-3 for venous, INR 2-3 or higher for arterial)
- **Recurrent thrombosis on anticoagulation**: Increase INR target or add antiplatelet agent
- **Triple-positive** (LA + aCL + aβ2GPI): Higher thrombotic risk, higher INR targets

**Obstetric APS:**
- **Pregnancy planning**: Aspirin 75 mg daily + LMWH (therapeutic dose)
- **During pregnancy**: Continue aspirin + LMWH
- **Post-partum**: Anticoagulation if delivery-related VTE risk factors
- **Prednisone**: Not recommended unless SLE coexists
- **Anticoagulation post-delivery**: Warfarin for 6 weeks post-partum if thrombotic event

**Catastrophic APS (rare):**
- Plasma exchange + corticosteroids + anticoagulation
- High mortality (50%)

## SLE in Indian Context

**Epidemiology:**
- Similar prevalence but often diagnosed late
- More severe at presentation (advanced nephritis)
- Genetic factors (HLA association)
- Environmental triggers (UV in tropical regions)

**Challenges:**
- Limited access to immunosuppressants
- Cost of biologics (belimumab expensive)
- Limited monitoring infrastructure
- Drug compliance issues

**Management Adaptations:**
- Use generic hydroxychloroquine, prednisolone
- MMF or AZA for severe disease (more available than biologics)
- IV methylprednisolone for severe flares (hospital-based)
- Regular monitoring of renal function essential (high nephritis prevalence)`,
        mnemonics: [
          { text: "SLE DIAGNOSIS: ANA (>95%) + ACR/EULAR ≥10 points from clinical + immunologic domains", explanation: "Classification criteria" },
          { text: "SLE SEROLOGY: Anti-dsDNA (disease activity), Anti-SM (specific), Low C3/C4 (active disease), Coombs + (hemolysis risk)", explanation: "Key antibodies and markers" },
          { text: "APS DIAGNOSIS: Serology (LA/aCL/aβ2GPI positive ≥2x, ≥12 weeks) + Thrombosis/Obstetric event", explanation: "Requires both serology and clinical event" },
          { text: "SLE TREATMENT: HCQ (all) + NSAIDs (mild) | Corticosteroids + MMF/AZA (moderate) | IV methylpred + MMF/CYC (severe/nephritis)", explanation: "Stepwise approach" },
          { text: "APS TREATMENT: Thrombosis → Warfarin INR 2-3 (venous) or higher (arterial) | Obstetric → Aspirin + LMWH in pregnancy", explanation: "Anticoagulation targets differ" }
        ],
        keyPoints: [
          "SLE diagnosis requires ANA positivity (>95% sensitive) plus ACR/EULAR criteria ≥10 points from clinical and immunologic domains",
          "Anti-dsDNA specific for SLE and correlates with disease activity and nephritis risk",
          "Complement (C3, C4) low in active disease; rising levels indicate remission",
          "APS diagnosis requires serology (LA/aCL/aβ2GPI) PLUS thrombotic event or obstetric complication",
          "SLE treatment: hydroxychloroquine (all patients) + NSAIDs (mild) or corticosteroids + immunosuppressants (severe/nephritis)",
          "APS thrombosis management: warfarin long-term; APS obstetric: aspirin + LMWH throughout pregnancy"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "326: SLE, 327: APS", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "sle-aps-exam",
        title: "SLE & Antiphospholipid Syndrome - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield exam facts, common clinical scenarios, diagnostic approach, and differential diagnosis in SLE and APS.",
        contentMd: `# SLE & APS - Exam Preparation

## High-Yield Facts

### SLE Classification (ACR/EULAR 2019)
**MUST HAVE: ANA ≥1:80 (by IIF) at some point AND score ≥10**

**Clinical Domains (points):**
- Constitutional (fever, fatigue, hair loss) = 1
- Hematologic (anemia, leukopenia, thrombocytopenia, lymphocytopenia) = 3
- Neuropsychiatric (seizures, psychosis, confusion, severe headache, stroke, neuropathy, acute confusion) = 2
- Mucocutaneous (non-scarring alopecia, oral ulcers, photosensitive rash) = 2
- Serosal (pleuritis, pericarditis) = 2
- Renal (protein >0.5 g/day, RBC casts) = 4

**Immunologic Domains:**
- ANA ≥1:80 = 1
- Anti-dsDNA OR Anti-SM = 3
- LA = 2
- Anti-beta2 GPI OR aCL (mod/high) = 2
- Low C3 OR C4 = 2
- Coombs + = 1

### SLE Serologies
| Antibody | Prevalence | Specificity | Clinical Correlation |
|----------|-----------|-------------|----------------------|
| ANA | >95% | Low (positive in many conditions) | Required; negative rules out SLE |
| Anti-dsDNA | 70% | High | Correlates with activity, nephritis |
| Anti-SM | 20-30% | Very high | Highly specific for SLE |
| Anti-Ro/SSA | 40% | Moderate | Photosensitivity, neonatal lupus |
| Anti-La/SSB | 40% | High | Sjögren's, Sjögren's + SLE |
| Anti-histone | 95% | Specific for drug-induced lupus | Drug-induced (hydralazine, procainamide) |

### Complement
- **C3, C4 low** → active disease, immune complexes
- **C2, C1q deficiency** → increased SLE risk
- Normalize with treatment response

### APS Antibodies & Thrombotic Risk
| Antibody | Prevalence | Thrombotic Risk |
|----------|-----------|-----------------|
| LA | 20-30% | High (2-5-fold increased) |
| aCL IgG | 20% | Moderate-high |
| aCL IgM | 20% | Low |
| aβ2GPI IgG | 10-20% | High |
| Triple-positive | 5-15% | Very high (5-10-fold) |

### LA Detection
- Prolonged PTT (not corrected by normal plasma addition)
- Dilute PTT confirms (corrects when diluted)
- NOT detected by PT (though may be prolonged)
- Paradox: Prolongs PTT in vitro but causes thrombosis in vivo

## Common Exam Questions

**Q1: 28-year-old woman with malar rash, arthritis, positive ANA. What's next?**
A: Check anti-dsDNA, anti-SM, complement (C3, C4), CBC for cytopenias. If ACR/EULAR score ≥10, diagnose SLE. Start hydroxychloroquine + NSAIDs.

**Q2: SLE patient on methotrexate found to be pregnant. Management?**
A: Discontinue MTX (teratogenic). Switch to hydroxychloroquine (safe in pregnancy) + sulfasalazine. Increase monitoring (pregnancy-related lupus flare risk).

**Q3: SLE with WBC 2500, RBC 2.8, Plt 50K, positive Coombs. What happened?**
A: Lupus hematologic manifestations: anemia (hemolytic), leukopenia, thrombocytopenia. Treat with corticosteroids; rituximab if severe/refractory.

**Q4: Young woman with recurrent DVT + miscarriage. Negative for LA/aCL. Most likely?**
A: Check aβ2GPI (Anti-beta2 GPI) - may be the only positive antibody. If negative, consider thrombophilia (protein C/S deficiency, Factor V Leiden).

**Q5: Woman with SLE + severe preeclampsia at 22 weeks gestation. Management?**
A: Check APS serology (LA, aCL, aβ2GPI). If positive + severe preeclampsia <34 weeks = APS in pregnancy. High-risk, may need delivery despite prematurity.

**Q6: Patient on warfarin for thrombotic APS recurrent thrombosis on INR 2.3. What to do?**
A: Increase INR target to 3-4 (higher for APS) OR add antiplatelet (aspirin + clopidogrel). Consider triple-positive status.

**Q7: Lupus nephritis Class IV diffuse proliferative. Induction regimen?**
A: IV methylprednisolone 500 mg-1 g × 3 days, then oral prednisolone taper + Mycophenolate mofetil 1-3 g daily (preferred) or IV cyclophosphamide.

## Differential Diagnosis

### ANA Positive Conditions
| Condition | Pattern | Antibodies | Clinical Clue |
|-----------|---------|-----------|--------------|
| SLE | Homogeneous, speckled | Anti-dsDNA, anti-SM | Malar rash, nephritis, serositis |
| Drug-induced lupus | Diffuse | Anti-histone | Hydralazine, procainamide; lung involvement |
| Sjögren's | Speckled | Anti-Ro, anti-La | Dry eyes/mouth, salivary gland enlargement |
| Scleroderma | Centromere | Anti-centromere | Sclerodactyl, limited cutaneous SSc |
| MCTD | Speckled | Anti-RNP | Raynaud's, hand edema, esophageal dysmotility |

### Malar Rash Differential
- **SLE**: Photosensitive, spares nasolabial fold, doesn't scar
- **Rosacea**: Worse with sun, hot drinks, alcohol; papulopustules; facial flushing
- **Lupus erythematosus tumidus**: Urticarial plaques, photosensitive
- **Systemic sclerosis**: Indurated, bound-down skin
- **Dermatomyositis**: Associated with muscle weakness, gottron papules

### Nephritis Differential (Positive Anti-dsDNA/Low C3)
- **Lupus nephritis**: Active urinary sediment (RBC casts), proteinuria, may be heavy
- **Post-infectious GN**: Recent strep, normal complement quickly normalizes
- **MPGN**: Absence of ANA, anti-dsDNA

## Drug-Induced Lupus (DIL)

### Medications Associated
- **Common**: Hydralazine, procainamide, isoniazid, minocycline
- **Less common**: Chlorpromazine, quinidine, propranolol, TNF-alpha inhibitors

### Features vs Idiopathic SLE
| Feature | Drug-Induced | Idiopathic |
|---------|-------------|----------|
| ANA | Positive | Positive |
| Anti-histone | 95% | 70% |
| Anti-dsDNA | Rare | 70% |
| Renal | Rare | 50% |
| CNS | Rare | 40% |
| Serositis | Common | Common |
| Rash | Rare | 60% |
| Onset | Weeks-months | Months-years |
| After drug D/C | Resolves | Persists |

## APS-Related Conditions

### Catastrophic APS
- Simultaneous multi-organ thrombosis
- Mortality 50% even with treatment
- Triggers: Surgery, infection, medication change
- Treatment: Plasma exchange + corticosteroids + anticoagulation

### APS with SLE (Secondary APS)
- 30-40% of SLE develop APS features
- Worse prognosis (higher thrombotic rate)
- Requires treatment of both conditions

### Obstetric Manifestations
- Recurrent 1st trimester loss (>3 consecutive or immune-mediated)
- Late pregnancy loss (>10 weeks, typically 2nd-3rd trimester)
- Severe preeclampsia (<34 weeks)
- HELLP syndrome
- Treatment: Aspirin + LMWH (therapeutic) throughout pregnancy`,
        mnemonics: [
          { text: "ACR/EULAR SLE: ANA required + ≥10 points from Constitutional (1), Hematologic (3), Neuro (2), Mucocutaneous (2), Serosal (2), Renal (4), Immunologic", explanation: "Classification algorithm" },
          { text: "SLE SEROLOGY: ANA sensitive, Anti-dsDNA/SM specific, Low C3/C4 = active, Coombs + = hemolysis", explanation: "Antibody interpretation" },
          { text: "APS DIAGNOSIS: (LA/aCL/aβ2GPI positive ≥2x, ≥12 weeks) + (Thrombosis OR obstetric event)", explanation: "Both serology and clinical required" },
          { text: "LA PARADOX: Prolonged PTT in vitro (anticoagulant effect) BUT causes thrombosis in vivo", explanation: "Counterintuitive finding" },
          { text: "DRUG-INDUCED LUPUS: Anti-histone 95%, Anti-dsDNA rare, No renal/CNS, Resolves after D/C drug", explanation: "Distinguished from idiopathic SLE" },
          { text: "SLE NEPHRITIS CLASS IV: Diffuse proliferative (>50% glomeruli), most severe, IV methylpred + MMF/CYC", explanation: "Worst prognosis, requires aggressive treatment" }
        ],
        keyPoints: [
          "ACR/EULAR 2019 criteria: ANA ≥1:80 REQUIRED + clinical/immunologic score ≥10",
          "Anti-dsDNA 70% sensitive/specific for SLE and correlates with nephritis activity",
          "Complement (C3, C4) low in active SLE; normal complement helps exclude SLE",
          "APS diagnosis requires positive serology (≥12 weeks apart) PLUS thrombotic/obstetric event; cannot diagnose on serology alone",
          "LA paradoxically prolongs PTT in vitro (anticoagulant) but causes thrombosis in vivo (prothrombotic)",
          "SLE nephritis Class IV (diffuse proliferative) has worst prognosis; requires IV methylprednisolone + MMF (preferred) or CYC"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "326: SLE, 327: APS", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "sle-aps-active-recall",
        title: "SLE & Antiphospholipid Syndrome - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard-based active recall for SLE and APS diagnostic criteria, management, and clinical scenarios.",
        contentMd: `# SLE & APS - Active Recall Flashcards

**Q1: List the ACR/EULAR 2019 SLE criteria requirements.**
A: Must have ANA ≥1:80 at some point. Then score ≥10 from: Constitutional (1), Hematologic (3), Neuro (2), Mucocutaneous (2), Serosal (2), Renal (4), ANA (1), Anti-dsDNA/SM (3), LA/aCL/aβ2GPI (2), Low C3/C4 (2), Coombs+ (1).

**Q2: What antibodies are specific for SLE and what do they mean?**
A: Anti-dsDNA (70%, correlates with activity/nephritis), Anti-SM (20-30%, very specific), Anti-Ro/SSA (40%, photosensitivity/neonatal lupus), Anti-La/SSB (40%, high specificity).

**Q3: Explain the paradox of lupus anticoagulant.**
A: LA antibodies bind phosphatidylserine on cell membranes. In vitro: prolongs PTT (anticoagulant effect). In vivo: causes thrombosis (prothrombotic). Diagnosis: Prolonged PTT not corrected by normal plasma; corrects when diluted.

**Q4: What are the 3 antiphospholipid antibodies and their relative thrombotic risk?**
A: 1) LA (20-30%, highest risk) 2) aCL IgG (20%, moderate-high) 3) aβ2GPI IgG (10-20%, high). Triple-positive has 5-10-fold increased thrombotic risk.

**Q5: Define APS and its diagnostic criteria.**
A: APS = thrombophilia with recurrent thrombotic events (arterial, venous) or obstetric complications. Requires positive aPL serology (≥2 tests, ≥12 weeks apart) PLUS thrombotic/obstetric event.

**Q6: What are the obstetric complications of APS?**
A: Recurrent pregnancy loss (>3 consecutive or >1 after 10 weeks), severe preeclampsia (<34 weeks), HELLP syndrome, placental insufficiency, IUGR, fetal heart block (anti-Ro/La).

**Q7: Describe management of obstetric APS during pregnancy.**
A: Aspirin 75 mg daily + LMWH therapeutic dose (not prophylactic) throughout pregnancy. Avoid corticosteroids unless SLE coexists. Continue anticoagulation post-partum 6 weeks if delivery-related VTE risk.

**Q8: List the clinical manifestations of SLE by system.**
A: Skin (malar rash, discoid, photosensitivity, alopecia), Joint (non-erosive arthritis), Kidney (lupus nephritis, Classes I-VI), Blood (anemia, leukopenia, thrombocytopenia), Lung (pleuritis, hemorrhage, PAH), Heart (pericarditis, myocarditis, valvulitis), Neuro (seizures, psychosis, stroke).

**Q9: What is the WHO classification of lupus nephritis?**
A: I (minimal mesangial), II (mesangial proliferative), III (focal proliferative <50%), IV (diffuse proliferative >50%, worst prognosis), V (membranous), VI (advanced sclerosing). Class IV requires aggressive treatment.

**Q10: Describe the stepwise management of SLE based on disease severity.**
A: Mild (arthralgia, rash): NSAIDs + hydroxychloroquine. Moderate (fever, serositis, cytopenias): Low-dose corticosteroids + HCQ ± MMF/AZA. Severe/Nephritis: IV methylprednisolone 500-1000 mg × 3 days, then oral taper + MMF 1-3 g daily (preferred over CYC).

**Q11: What is drug-induced lupus and how does it differ from idiopathic SLE?**
A: DIL caused by medications (hydralazine, procainamide, isoniazid, minocycline). Features: Anti-histone 95% (vs 70%), Anti-dsDNA rare (vs 70%), No renal/CNS involvement (vs 50%/40%), Resolves after drug discontinuation.

**Q12: How do you distinguish LA from other causes of PTT prolongation?**
A: LA causes abnormal PTT that does NOT correct with normal plasma (specific). Dilute PTT corrects (pathognomonic for LA). Contrast with Factor deficiency (corrects with normal plasma) or inhibitor (doesn't correct with dilution).

**Q13: What are the secondary causes of APS?**
A: SLE (30-40% develop APS), other autoimmune diseases (Sjögren's, RA, SSc), infections (HIV, syphilis), malignancies (lymphoma, solid tumors), medications. SLE + APS = worst prognosis.

**Q14: Explain the pathophysiology of thrombosis in APS.**
A: Multiple mechanisms: 1) Platelets activated → P-selectin, TF-bearing microparticles 2) Endothelium: ↑TF, ↓thrombomodulin, ↑vWF 3) Tissue factor pathway activation → thrombin generation 4) Complement C5a amplification.

**Q15: What is catastrophic APS and how is it managed?**
A: Rare (1-5% of APS), simultaneous multi-organ thrombosis, high mortality (50%). Triggers: surgery, infection, medication. Treatment: Plasma exchange (removes aPL) + high-dose corticosteroids + anticoagulation (UFH).

**Q16: List the serology and clinical features required to diagnose APS.**
A: Serology: LA positive OR aCL (IgG/IgM ≥40 units OR >99th%) OR aβ2GPI (IgG/IgM >99th percentile). Must be positive ≥2x, ≥12 weeks apart. Clinical: Arterial/venous thrombosis OR obstetric complication (recurrent loss, severe PE, preeclampsia).

**Q17: How do complement levels change in SLE and what do they mean?**
A: C3, C4 low (consumed) during active disease from immune complex deposition and classical pathway activation. Rising complement (normalization) indicates remission/treatment response. Low complement at diagnosis = active SLE.

**Q18: What is the role of hydroxychloroquine in SLE management?**
A: Hydroxychloroquine 200-400 mg daily given to ALL SLE patients. Reduces exacerbations by 50%, renal protective (reduces nephritis progression), improves skin/joint symptoms. Takes 6-12 weeks for full effect.

**Q19: Describe the management of SLE-related thrombotic microangiopathy (TMA).**
A: Presents as thrombocytopenia + hemolytic anemia + renal disease + hypertension + CNS involvement. Distinguish from TTP (Coombs negative, ADAMTS13 absent). Treat with high-dose corticosteroids + plasma exchange if severe + rituximab.

**Q20: What is neonatal lupus and how does it occur?**
A: Newborn of mother with anti-Ro/SSA or anti-La/SSB antibodies develops transient lupus (rash, cytopenias) and/or congenital heart block. Antibodies cross placenta. Heart block often permanent (pacing needed). Screen at-risk pregnancies.`,
        mnemonics: [
          { text: "ACR/EULAR SLE: ANA ≥1:80 required + ≥10 points from Constitutional, Hematologic, Neuro, Mucocutaneous, Serosal, Renal, ANA, Anti-dsDNA/SM, LA/aCL/aβ2GPI, Low C3/C4, Coombs", explanation: "Complete classification algorithm" },
          { text: "SLE SEROLOGY: ANA (sensitive >95%), Anti-dsDNA (70%, activity marker), Anti-SM (20-30%, specific), Low C3/C4 (active disease), Coombs+ (hemolysis)", explanation: "Key antibodies interpretation" },
          { text: "APS DIAGNOSIS: Serology (LA/aCL/aβ2GPI positive ≥2x, ≥12 weeks) PLUS Clinical (thrombosis OR obstetric event)", explanation: "Both required; cannot diagnose on serology alone" },
          { text: "LA PARADOX: Prolongs PTT in vitro (anticoagulant) | Causes thrombosis in vivo (prothrombotic) | Doesn't correct with normal plasma", explanation: "Diagnostic peculiarity" },
          { text: "SLE TREATMENT LADDER: Mild (HCQ + NSAIDs) → Moderate (Corticosteroids + HCQ ± MMF/AZA) → Severe (IV methylpred + MMF/CYC)", explanation: "Disease severity guides therapy" },
          { text: "OBSTETRIC APS: Recurrent loss >3 OR late loss >10wks OR severe PE <34wks → Treatment: Aspirin + therapeutic LMWH throughout pregnancy", explanation: "Pregnancy management differs from thrombotic APS" },
          { text: "LUPUS NEPHRITIS CLASS IV: Diffuse proliferative (>50% glomeruli), worst prognosis | IV methylpred 500-1g × 3 + MMF 1-3g daily", explanation: "Most severe, aggressive treatment needed" },
          { text: "COMPLEMENT IN SLE: Low C3/C4 = active disease | Normal complement = less likely SLE | Rising = remission/treatment response", explanation: "Disease activity biomarker" },
          { text: "DRUG-INDUCED LUPUS: Anti-histone 95% | Anti-dsDNA rare | No renal/neuro | Resolves after D/C | Most common: hydralazine, procainamide", explanation: "Distinguish from idiopathic SLE" },
          { text: "APS THROMBOTIC RISK: Single positive = 2-5x | Triple-positive (LA + aCL + aβ2GPI) = 5-10x | IgG > IgM in risk", explanation: "Serology correlates with risk" }
        ],
        keyPoints: [
          "SLE diagnosis requires ANA ≥1:80 PLUS ACR/EULAR score ≥10 from clinical and immunologic domains",
          "Anti-dsDNA is both specific for SLE and a marker of disease activity; correlates with nephritis risk",
          "APS diagnosis requires positive serology (LA, aCL, or aβ2GPI on ≥2 occasions ≥12 weeks apart) PLUS thrombotic or obstetric event",
          "LA paradoxically prolongates PTT in vitro but causes thrombosis in vivo; dilute PTT distinguishes LA from other PTT prolongation",
          "SLE management stepwise: hydroxychloroquine (all patients) + NSAIDs (mild) or corticosteroids + immunosuppressants (moderate/severe)",
          "APS obstetric management: aspirin + therapeutic-dose LMWH (not prophylactic) throughout pregnancy",
          "Complement (C3, C4) low in active SLE; normalization indicates remission and guides therapy response",
          "Lupus nephritis Class IV (diffuse proliferative) has worst prognosis; requires IV methylprednisolone + MMF induction"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "326: SLE, 327: APS", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology", edition: "11th" },
          { book: "ACR/EULAR Classification Criteria for SLE", edition: "2019" }
        ]
      }
    ]
  },
  {
    topicCode: "IM-MOD-08-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "vasculitis-foundation",
        title: "Vasculitis - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of systemic vasculitis classification, pathophysiology, and major subtypes including large-vessel, medium-vessel, and small-vessel vasculitis.",
        contentMd: `# Vasculitis - Foundation

## Classification by Vessel Size

### Large-Vessel Vasculitis
1. **Takayasu Arteritis** (TAK)
2. **Giant Cell Arteritis** (GCA/Temporal Arteritis)

### Medium-Vessel Vasculitis
1. **Polyarteritis Nodosa** (PAN)
2. **Kawasaki Disease**

### Small-Vessel Vasculitis
1. **ANCA-associated**: GPA (Granulomatosis with Polyangiitis, formerly Wegener's), MPA (Microscopic Polyangiitis), EGPA (Eosinophilic Granulomatosis with Polyangiitis, formerly Churg-Strauss)
2. **Immune complex**: IgA Vasculitis (IgAN), Anti-GBM disease
3. **Cryoglobulinemia**: Hepatitis C-associated

### Other
1. **Behcet's Disease**
2. **Buerger's Disease** (Thromboangiitis obliterans)

## Takayasu Arteritis (TAK)

### Epidemiology
- Young women (15-40 years), female predominance (9:1)
- More common in Asia, India (2-8 per million)
- Large-vessel vasculitis of aorta and branches

### Pathophysiology
- T-cell mediated inflammation
- Aorta and major vessel involvement
- Segmental granulomatous inflammation with giant cells

### Clinical Presentation
- **"Pulseless disease"**: Absent pulses in upper extremities
- Constitutional: Fever, fatigue, weight loss
- Vascular: Claudication, angina, syncope
- Progressive: Can lead to severe disability

### Diagnosis
- Clinical + imaging (angiography, MRI, PET)
- ESR/CRP elevation
- No specific antibodies

## Polyarteritis Nodosa (PAN)

### Definition
- Systemic medium-vessel vasculitis
- Necrotizing inflammation without glomerulonephritis

### Associations
- Hepatitis B (10-20% in endemic areas)
- Hepatitis C, HIV (less common)

### Manifestations
- Systemic: Fever, weight loss, malaise
- Vascular: Multisystem involvement
- Peripheral neuropathy, muscle infarction
- Renal (vasculitis, not glomerulonephritis)
- GI: Mesenteric ischemia, infarction
- Testicular pain

### Diagnosis
- Elevated inflammatory markers (ESR, CRP)
- Tissue biopsy: Necrotizing vasculitis of medium arteries
- No ANCA, normal complement

## Wegener's Granulomatosis (Now GPA)

### Classification Change
- **GPA (Granulomatosis with Polyangiitis)**: Necrotizing vasculitis with necrotizing granulomas
- Upper respiratory tract (sinusitis, nasal necrosis)
- Lower respiratory tract (pneumonitis, pulmonary nodules)
- Glomerulonephritis (RPGN - rapidly progressive)

### Associated ANCA
- **c-ANCA** (cytoplasmic): Anti-PR3 (proteinase-3)
- Associated with GPA

### Manifestations
- Classic triad: Respiratory + Renal + Systemic
- Upper respiratory: Sinusitis, nasal necrosis, saddle nose deformity
- Lower respiratory: Cough, hemoptysis, nodules
- Renal: RPGN, hematuria, proteinuria, rapid progression

## Behcet's Disease

### Definition
- Recurrent oral/genital ulceration + ocular involvement
- Systemic vasculitis
- More common in Middle East, Mediterranean, Asia

### Pathophysiology
- T-cell mediated vasculitis
- Genetic factors (HLA-B51)

### Manifestations
- **Oral ulcers**: Recurrent, painful, central criteria
- **Genital ulcers**: Painful, scarring
- **Ocular**: Uveitis (anterior, posterior, pan-), most serious
- **Skin**: Erythema nodosum, pseudofolliculitis
- **Vascular**: Thrombosis, aneurysm
- **Neuro**: CNS involvement (meningoencephalitis)
- **GI**: Ulceration, bleeding

## Pathophysiology Overview

### Common Features
1. Autoimmune activation
2. Endothelial inflammation
3. Vessel wall necrosis
4. Tissue ischemia/infarction

### ANCA Mechanisms (Small-Vessel)
- ANCA-positive antibodies (c-ANCA, p-ANCA)
- Activate neutrophils
- Release proteases → endothelial damage
- Crescentic glomerulonephritis

### Immune Complex (IgA Vasculitis)
- IgA immune complex deposition
- Glomerulonephritis
- Most common vasculitis in children

### Indian Context
- Takayasu more common (Asian prevalence)
- Behcet's in endemic areas
- PAN associated with hepatitis B in high-prevalence regions
- IgA vasculitis common in post-streptococcal infection`,
        mnemonics: [
          { text: "VESSEL SIZE: Large (TAK, GCA), Medium (PAN, Kawasaki), Small (GPA, MPA, EGPA, IgA)", explanation: "Classification framework" },
          { text: "TAK: Young women, Asian, Pulseless, Aorta/branches | GCA: Elderly, temporal artery, scalp claudication", explanation: "Large-vessel vasculitis" },
          { text: "GPA TRIAD: Respiratory (sinusitis, nodules) + Renal (RPGN) + Systemic | c-ANCA/Anti-PR3", explanation: "Classic presentation" },
          { text: "BEHCET: Oral ulcers + Genital ulcers + Ocular (uveitis) ± Vascular/Neuro | HLA-B51", explanation: "Recurrent mucocutaneous inflammation" }
        ],
        keyPoints: [
          "Vasculitis classified by vessel size: large (TAK, GCA), medium (PAN), small (ANCA-associated, IgA)",
          "Takayasu: Young women, aortic and branch involvement, 'pulseless disease', more common in Asia including India",
          "GPA (Wegener's): Necrotizing vasculitis + granulomas; presents with upper respiratory (sinusitis), lung (nodules), renal (RPGN); c-ANCA/PR3 positive",
          "PAN: Medium-vessel, necrotizing vasculitis without glomerulonephritis; associated with hepatitis B",
          "Behcet's: Recurrent oral/genital ulcers + ocular uveitis (most serious); HLA-B51 associated"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "342: Vasculitis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "vasculitis-mechanism",
        title: "Vasculitis - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiologic mechanisms of ANCA-associated and immune complex vasculitis, immune activation, and vascular injury.",
        contentMd: `# Vasculitis - Mechanisms

## ANCA-Associated Vasculitis Pathogenesis

### ANCA Antibodies

**c-ANCA (Cytoplasmic):**
- Antibodies against PR3 (proteinase-3)
- Associated with GPA (Wegener's)
- More specific for systemic vasculitis

**p-ANCA (Perinuclear):**
- Antibodies against MPO (myeloperoxidase)
- Associated with MPA, EGPA
- Can occur in other conditions (SLE, PAN)

### Neutrophil Activation Cascade
1. ANCA binds neutrophil surface antigen (PR3, MPO)
2. Cross-linking of ANCA receptors
3. Activation via Fc-gamma receptor engagement
4. Respiratory burst activation
5. Azurophil/specific granule release
6. Serine protease release (elastase, cathepsin G)
7. Endothelial cell damage

### Mechanisms of Endothelial Injury
- **Direct**: Protease damage to basement membrane
- **Oxidative**: ROS generation from respiratory burst
- **Inflammatory**: C3a, C5a recruitment of additional neutrophils
- **Complement**: Activation of alternative pathway
- **Apoptosis**: Neutrophil apoptotic material → more inflammation

### Glomerular Crescents (RPGN)
- Fibrinoid necrosis of glomerular basement membrane
- Cellular proliferation (epithelial crescent formation)
- Parietal epithelial cell proliferation
- Rapidly progressive glomerulonephritis

## Immune Complex Vasculitis

### Formation & Deposition
- Antigen (exogenous or autologous)
- Antibody binding (IgA in IgA vasculitis)
- Circulating immune complex formation
- Deposition in small vessels

### Sites of Deposition
- Glomeruli (hematuria, proteinuria)
- Skin (palpable purpura)
- GI tract (abdominal pain, bleeding)
- Joints (arthralgia/arthritis)

### IgA Vasculitis (IgAN)
- IgA immune complexes
- Mesangial IgA deposition
- Associated with post-streptococcal infection
- Most common vasculitis in children

## Large-Vessel Vasculitis Pathogenesis

### Takayasu Arteritis
- T-cell mediated (CD4+, CD8+ infiltration)
- Giant cell granulomas in vessel wall
- Smooth muscle cell proliferation
- Intimal thickening, media necrosis
- Results in stenosis, aneurysm, dissection

### Pathologic Features
- **Acute phase**: Inflammation of all layers
- **Chronic phase**: Fibrous thickening, scarring
- **Complications**: Aortic regurgitation, coronary ostial stenosis

## Behcet's Disease Pathogenesis

### Immune Mechanisms
- T-cell mediated vasculitis (CD4+, CD8+)
- Neutrophilic infiltration
- Endothelial activation
- Increased TNF-alpha, IL-6

### Genetic Factors
- **HLA-B51**: Strong association (60-80% of Behcet's)
- More common in populations with high HLA-B51 prevalence (Mediterranean, Middle East, Asia)

### Pathologic Findings
- Leukocytoclastic vasculitis
- Panniculitis
- Venulitis`,
        mnemonics: [
          { text: "ANCA MECHANISM: c-ANCA/PR3 (GPA) vs p-ANCA/MPO (MPA, EGPA) → Neutrophil activation → Protease release → Endothelial damage → RPGN", explanation: "Cascade of ANCA-associated injury" },
          { text: "IMMUNE COMPLEX: Ag + Ab → IC deposition → Complement C1q → C3a, C5a → Inflammation → Tissue damage", explanation: "Traditional immune complex mechanism" },
          { text: "LARGE-VESSEL (TAK): T-cell infiltration → Giant cell granulomas → Media necrosis → Intimal thickening → Stenosis/aneurysm", explanation: "Takayasu pathophysiology" },
          { text: "BEHCET: T-cell vasculitis + HLA-B51 (60-80%) → TNF-alpha, IL-6 ↑ → Endothelial activation → Ulceration, thrombosis", explanation: "Autoinflammatory features" }
        ],
        keyPoints: [
          "ANCA-associated vasculitis: Neutrophil activation via ANCA-PR3/MPO binding leads to protease release and endothelial damage",
          "c-ANCA/PR3 specific for GPA; p-ANCA/MPO for MPA and EGPA",
          "Crescentic glomerulonephritis results from fibrinoid necrosis and epithelial crescent formation",
          "Immune complex vasculitis: Antigen-antibody complexes deposit in small vessels causing complement-mediated inflammation",
          "Takayasu: T-cell and giant cell infiltration causing granulomatous aortitis with potential for stenosis and aneurysm formation",
          "Behcet's: HLA-B51 associated T-cell vasculitis with TNF-alpha-mediated pathology"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "342: Vasculitis", edition: "21st" },
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "Vasculitis", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "vasculitis-clinical",
        title: "Vasculitis - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical presentation, diagnosis, and management of major vasculitis types with emphasis on Indian epidemiology and treatment.",
        contentMd: `# Vasculitis - Clinical Presentation & Management

## Takayasu Arteritis (TAK)

### Clinical Presentation
- **Early phase**: Constitutional symptoms (fever, malaise, weight loss)
- **Vascular phase**: Progressive stenosis/occlusion of aorta and branches
  - Absent/weak pulses in upper extremities ("pulseless disease")
  - Claudication (arm or leg)
  - Angina pectoris (coronary involvement)
  - Syncope (carotid stenosis)
  - Stroke (vertebral artery stenosis)
  - Aortic regurgitation (aortic root dilatation)

### Diagnosis
- **Angiography/MRI**: Segmental stenosis of aorta and major branches
- **PET**: Inflammation of affected vessels
- **ESR/CRP**: Elevated (not always)
- **Biopsy**: Granulomatous inflammation

### Management
- **Corticosteroids**: Prednisolone 1 mg/kg initially, taper slowly
- **Immunosuppressants**: Methotrexate, azathioprine, mycophenolate
- **Biologics**: TNF-alpha inhibitors (infliximab), IL-6 inhibitor (tocilizumab)
- **Vascular intervention**: Angioplasty/stenting for critical stenosis
- **Antiplatelet/anticoagulation**: If vascular intervention

## Polyarteritis Nodosa (PAN)

### Clinical Presentation
- **Systemic**: Fever, malaise, weight loss
- **Neurologic**: Peripheral neuropathy (40%), CNS involvement (10%)
- **Musculoskeletal**: Myalgia, arthralgia (rare true arthritis)
- **Renal**: Hypertension, elevated creatinine (vasculitis, NOT glomerulonephritis)
- **GI**: Abdominal pain, GI bleeding, mesenteric ischemia
- **Testicular**: Painful testicular infarction (pathognomonic)
- **Skin**: Palpable purpura, nodules

### Diagnosis
- **Elevated inflammatory markers**: ESR, CRP, platelets
- **Tissue biopsy**: Necrotizing vasculitis of medium-sized arteries
- **Angiography**: Microaneurysms, stenosis
- **No ANCA, normal complement** (distinguishes from ANCA-associated, immune complex)
- **Hepatitis B testing**: 10-20% positive

### Management
- **Corticosteroids**: Initial high-dose (1 mg/kg), taper based on response
- **Immunosuppressants**: Cyclophosphamide (severe), azathioprine (milder)
- **Antivirals**: If hepatitis B-associated (interferon, lamivudine)

## Granulomatosis with Polyangiitis (GPA, formerly Wegener's)

### Clinical Presentation
- **Upper respiratory**: Sinusitis, nasal crusting, nasal necrosis, saddle nose deformity
- **Lower respiratory**: Cough, hemoptysis, dyspnea, pulmonary nodules
- **Renal**: Hematuria (RBC, casts), proteinuria, rapid progression to renal failure
- **Systemic**: Fever, malaise, weight loss, arthralgia
- **Other**: Ocular (episcleritis, uveitis), skin rash, neuropathy

### Diagnosis
- **c-ANCA/PR3 positive** (90% of generalized GPA)
- **Elevated ESR, CRP**
- **Urinalysis**: Dysmorphic RBCs, RBC casts
- **Tissue biopsy**: Necrotizing vasculitis + granulomatous inflammation

### Management
- **Induction (if severe/RPGN)**:
  - Corticosteroids: IV methylprednisolone 1 g/day × 3 days, then oral prednisolone
  - Immunosuppression: Cyclophosphamide 0.5-1 g/m² IV monthly OR rituximab 375 mg/m² weekly
- **Maintenance**: Low-dose corticosteroids + azathioprine OR mycophenolate + trimethoprim-sulfamethoxazole (prophylaxis)
- **Plasma exchange**: If pulmonary hemorrhage, severe renal involvement

## Microscopic Polyangiitis (MPA)

### Features
- Small-vessel vasculitis
- **p-ANCA/MPO** positive (80%)
- Similar to GPA but:
  - Lacks upper respiratory involvement
  - Lacks granulomas on biopsy
  - Pulmonary hemorrhage more prominent
  - Rapidly progressive glomerulonephritis

### Management
- Similar to GPA: Corticosteroids + cyclophosphamide/rituximab

## EGPA (formerly Churg-Strauss)

### Classic Triad
1. Severe asthma
2. Eosinophilia (>1500)
3. Systemic vasculitis

### Features
- **p-ANCA/MPO** positive (40%)
- Pulmonary infiltrates
- Peripheral neuropathy
- Cardiac involvement (myocarditis)

### Management
- Corticosteroids (often responsive)
- Cyclophosphamide/azathioprine if severe

## Behcet's Disease

### Clinical Presentation
- **Oral ulcers**: Recurrent, aphthous, painful, central feature
- **Genital ulcers**: Painful, scarring
- **Ocular**: Uveitis (anterior, posterior, pan-), most serious (can cause blindness)
- **Skin**: Erythema nodosum, pseudofolliculitis, nodules
- **Vascular**: Thrombosis (DVT, PE), aneurysm
- **GI**: Ulceration, bleeding, perforation
- **Neuro**: Meningoencephalitis, cognitive dysfunction

### Diagnosis
- **Clinical**: Recurrent oral ulcers + 2 of: genital ulcers, ocular involvement, skin lesions
- **Pathergy test**: Hyperreactivity to needle puncture (papule >2 mm at 24-48 hours)
- **HLA-B51**: Associated but not diagnostic
- **No specific antibodies**

### Management
- **Topical**: Corticosteroid ointment for mucocutaneous ulcers
- **Systemic**: Corticosteroids for systemic involvement
- **Immunosuppressants**: Azathioprine (first-line), methotrexate, cyclophosphamide
- **Biologics**: TNF-alpha inhibitors (infliximab), IL-6 inhibitor (tocilizumab)
- **Ocular involvement**: Aggressive immunosuppression to prevent blindness
- **Vascular**: Anticoagulation if thrombosis; cyclophosphamide for major vessel involvement

## General Vasculitis Management Principles
1. **Confirm diagnosis**: Tissue biopsy, imaging, serology
2. **Assess severity**: Organ involvement, renal function, pulmonary involvement
3. **Induction therapy**: High-dose corticosteroids + immunosuppression for severe disease
4. **Maintenance**: Lower doses, minimize steroid dependence
5. **Monitor response**: ESR/CRP, urinalysis, renal function, imaging
6. **Manage complications**: Monitor for infection (due to immunosuppression), drug toxicity`,
        mnemonics: [
          { text: "TAK: Young woman, Asian, Pulseless, Aortic stenosis → Corticosteroids + TNF-alpha inhibitor/tocilizumab", explanation: "Large-vessel vasculitis management" },
          { text: "GPA TRIAD: Upper respiratory (sinusitis) + Lung (nodules) + Kidney (RPGN) | c-ANCA/PR3 | Treat: steroids + CYC/rituximab", explanation: "Classic Wegener's presentation and management" },
          { text: "BEHCET: Oral + Genital ulcers + Ocular uveitis + HLA-B51 | Treat: Steroids + AZA/biologics", explanation: "Diagnostic triad" },
          { text: "PAN: Medium-vessel, testicular pain (pathognomonic), GI involvement, Normal complement | NO glomerulonephritis", explanation: "Distinguished from ANCA-associated" }
        ],
        keyPoints: [
          "Takayasu: Large-vessel vasculitis in young women, Asian predominance, aortic involvement causing stenosis/regurgitation; treat with corticosteroids + TNF-alpha inhibitors",
          "GPA: Necrotizing vasculitis with granulomas; classic triad of respiratory, renal, systemic; c-ANCA/PR3 positive; treat with corticosteroids + cyclophosphamide or rituximab",
          "PAN: Medium-vessel vasculitis with testicular pain, GI involvement, but NO glomerulonephritis; ANCA-negative, normal complement",
          "MPA and EGPA: ANCA-associated small-vessel vasculitis; p-ANCA/MPO positive; RPGN present",
          "Behcet's: HLA-B51 associated; recurrent oral/genital ulcers + ocular uveitis most serious; treat with corticosteroids + azathioprine/biologics"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "342: Vasculitis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "vasculitis-exam",
        title: "Vasculitis - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield exam facts, diagnostic algorithms, and management strategies for major vasculitis types.",
        contentMd: `# Vasculitis - Exam Preparation

## Classification Quick Reference

### By Size & ANCA
| Type | Vessel | ANCA | Classic Features |
|------|--------|------|-----------------|
| TAK | Large | Negative | Young female, Asian, pulseless aorta |
| GPA | Small | c-ANCA/PR3 | Upper resp, lung nodules, RPGN |
| MPA | Small | p-ANCA/MPO | No upper resp, lung hemorrhage, RPGN |
| EGPA | Small | p-ANCA/MPO | Asthma, eosinophilia, neuropathy |
| PAN | Medium | Negative | Testicular pain, GI bleeding, NO GN |
| IgA | Small | Negative | Post-strep, palpable purpura, IgA in glomeruli |

## High-Yield Facts

### Takayasu Arteritis
- **Demographics**: Young women, 9:1 female:male, Asian, 2-8 per million in India
- **"Pulseless disease"**: Absent radial/brachial pulses
- **Complications**: Aortic regurgitation, coronary stenosis, stroke
- **Diagnosis**: Angiography/MRI showing segmental stenosis
- **Treatment**: Corticosteroids + TNF-alpha inhibitors (infliximab, adalimumab)

### GPA (Wegener's)
- **Classic triad**: Respiratory (sinusitis, nodules) + Renal (RPGN) + Systemic
- **c-ANCA/PR3**: Positive in 90% of generalized GPA
- **Pathognomonic sign**: Saddle nose deformity (nasal septal perforation)
- **Renal crisis**: Can progress to ESRD within weeks if untreated
- **Treatment**: Corticosteroids + cyclophosphamide (or rituximab now preferred for lower toxicity)

### PAN Red Flags
- **Testicular pain**: Highly specific for PAN (pathognomonic)
- **GI involvement**: Mesenteric ischemia, perforation
- **NO glomerulonephritis**: Unlike other vasculitis
- **ANCA-negative**: Distinguished from GPA, MPA, EGPA
- **Hepatitis B positive**: 10-20% (endemic areas higher)

### Behcet's Disease
- **Oral ulcers**: Central to diagnosis (recurrent, painful)
- **Ocular involvement**: Serious (can cause blindness), uveitis most common
- **HLA-B51**: 60-80% of Behcet's (not diagnostic)
- **Pathergy test**: Hyperreactivity to skin trauma (diagnostic clue)
- **Vascular involvement**: Thrombosis, aneurysm (pulmonary artery rupture can be fatal)

## Common Exam Questions

**Q1: 28-year-old woman with absent bilateral radial pulses, hypertension, aortic regurgitation. Diagnosis?**
A: Takayasu arteritis. Confirm with angiography/MRI showing aortic stenosis. Treat with prednisolone 1 mg/kg + infliximab.

**Q2: Sinusitis + hemoptysis + hematuria with RBC casts. ANCA profile?**
A: c-ANCA/PR3 positive = GPA (Wegener's granulomatosis). Treat with corticosteroids + cyclophosphamide/rituximab.

**Q3: Testicular pain + mesenteric ischemia + elevated BP, ANCA negative. Diagnosis?**
A: Polyarteritis nodosa (PAN). Check hepatitis B serology. Treat with corticosteroids + cyclophosphamide ± antivirals if HBV positive.

**Q4: Asthma, eosinophilia 2500, p-ANCA positive, neuropathy. Diagnosis?**
A: EGPA (Churg-Strauss syndrome). Usually responsive to corticosteroids ± cyclophosphamide.

**Q5: Recurrent mouth ulcers + eye inflammation + genital ulcers. HLA-B51 positive. Diagnosis?**
A: Behcet's disease. Treat oral/genital ulcers topically; use corticosteroids + azathioprine for ocular involvement.

## Differential Diagnosis: Vasculitis vs Mimics

### "Looks like vasculitis but isn't"
- **Infection**: Bacterial endocarditis (fever, emboli, vasculitis-like picture)
- **Malignancy**: Lymphoma, leukemia (can present with vasculitis-like picture)
- **Drug reaction**: Medications can cause drug-induced lupus, vasculitis mimics
- **Atherosclerosis**: Can mimic large-vessel vasculitis but no inflammation on imaging

## Diagnostic Workup Algorithm

**1. Clinical Suspicion of Vasculitis**
- ↓
**2. Laboratory: ESR, CRP, CBC, chemistries, urinalysis**
- ↓
**3. ANCA (c-ANCA, p-ANCA, anti-GBM) + ANA**
- ↓
**4. Imaging: Angiography, MRI, ultrasound based on suspicion**
- ↓
**5. Tissue Biopsy: Gold standard if imaging unclear**
- ↓
**6. Diagnosis & Classification by vessel size + serology**

## Management Severity-Based

### Severe (Organ-threatening: RPGN, pulmonary hemorrhage, CNS)
- IV methylprednisolone 1 g/day × 3 days
- Cyclophosphamide 0.5-1 g/m² IV monthly OR rituximab 375 mg/m² weekly
- Consider plasma exchange if severe renal/pulmonary

### Moderate
- Oral corticosteroids 0.5-1 mg/kg/day
- Azathioprine or mycophenolate

### Mild
- Corticosteroids ± methotrexate or azathioprine`,
        mnemonics: [
          { text: "VESSEL SIZE VASCULITIS: Large (TAK, GCA), Medium (PAN), Small (GPA, MPA, EGPA, IgA)", explanation: "Classification framework" },
          { text: "TAK: Young woman, Asian, Pulseless, Aorta → Steroids + TNF-inhibitor", explanation: "Large-vessel vasculitis" },
          { text: "GPA: c-ANCA/PR3, Resp (sinusitis/nodules) + Renal (RPGN) + Systemic | Saddle nose → Steroids + CYC/rituximab", explanation: "Small-vessel ANCA-associated" },
          { text: "PAN: Testicular pain (pathognomonic), GI bleeding, NO GN, ANCA negative, Normal C3/C4", explanation: "Medium-vessel, ANCA-negative" },
          { text: "BEHCET: Oral ulcers + Genital + Ocular (uveitis) + HLA-B51 | Pathergy test | Steroids + AZA", explanation: "Mucocutaneous vasculitis" },
          { text: "ANCA-POSITIVE VASCULITIS: c-ANCA/PR3 (GPA) vs p-ANCA/MPO (MPA, EGPA) → Treat: Steroids + CYC/rituximab", explanation: "Serology guides diagnosis and treatment" }
        ],
        keyPoints: [
          "Vasculitis classification: Large (TAK), medium (PAN), small (ANCA-associated, IgA) vessel based on pathology",
          "Takayasu: Aortic vasculitis in young women, Asian predominance; 'pulseless disease' from aortic stenosis",
          "GPA: c-ANCA/PR3, necrotizing vasculitis + granulomas, respiratory + renal involvement (RPGN)",
          "PAN: Medium-vessel, testicular pain (pathognomonic), GI involvement, but NO glomerulonephritis or ANCA",
          "EGPA: Asthma + eosinophilia + p-ANCA/MPO vasculitis",
          "Behcet's: Recurrent oral/genital ulcers + ocular uveitis; HLA-B51 associated; manage with corticosteroids + immunosuppression"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "342: Vasculitis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "vasculitis-active-recall",
        title: "Vasculitis - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard-based active recall for vasculitis classification, diagnosis, and management.",
        contentMd: `# Vasculitis - Active Recall Flashcards

**Q1: Classify vasculitis by vessel size with examples.**
A: Large-vessel: TAK, GCA. Medium-vessel: PAN, Kawasaki. Small-vessel: ANCA-associated (GPA, MPA, EGPA), immune complex (IgA), cryoglobulinemia.

**Q2: Describe Takayasu arteritis epidemiology and classic presentation.**
A: Young women (15-40), female predominance 9:1, Asian (2-8 per million in India). Pulseless disease with absent/weak pulses in upper extremities, claudication, angina, aortic regurgitation.

**Q3: What distinguishes c-ANCA/PR3 from p-ANCA/MPO vasculitis?**
A: c-ANCA/PR3 = GPA (cytoplasmic, generalized vasculitis). p-ANCA/MPO = MPA, EGPA (perinuclear, often more limited). Both cause RPGN but GPA has granulomas and upper respiratory involvement.

**Q4: What makes testicular pain pathognomonic for PAN?**
A: Testicular infarction from vasculitis of testicular artery. Highly specific for PAN (not seen in other vasculitis). Usually painful, can have hematuria if semen affected.

**Q5: Describe the classic presentation of GPA (Wegener's granulomatosis).**
A: Upper respiratory (sinusitis, nasal crusting, saddle nose from septal perforation), lower respiratory (hemoptysis, nodules), renal (RPGN with RBC casts). c-ANCA/PR3 positive 90%.

**Q6: Why doesn't PAN have glomerulonephritis unlike other vasculitis?**
A: PAN is medium-vessel vasculitis affecting renal arteries but not glomeruli. Causes hypertension, elevated creatinine from vascular disease (not glomerulonephritis).

**Q7: What are the diagnostic criteria for Behcet's disease?**
A: Recurrent oral ulcers (central) + ≥2 of: recurrent genital ulcers, ocular involvement (uveitis), skin lesions (erythema nodosum, pseudofolliculitis). Pathergy test positive.

**Q8: Why is HLA-B51 associated with Behcet's disease?**
A: Strong genetic association (60-80% of Behcet's), more common in populations with high HLA-B51 prevalence (Mediterranean, Middle East, Asia). Not diagnostic but supports diagnosis.

**Q9: Which vasculitis characteristically causes pulmonary hemorrhage?**
A: ANCA-associated vasculitis (GPA, MPA, EGPA) due to necrotizing small-vessel vasculitis in lungs. GPA also has granulomas; MPA doesn't. Both present with hemoptysis, dyspnea.

**Q10: What is the pathogenic mechanism of ANCA-associated vasculitis?**
A: ANCA (anti-PR3 or anti-MPO) binds neutrophil surface antigens → cross-links receptors → neutrophil activation → release of serine proteases (elastase, cathepsin G) → endothelial cell damage.

**Q11: Describe the difference between IgA vasculitis (IgAN) and ANCA-associated vasculitis.**
A: IgA: Small-vessel, IgA immune complex deposition in glomeruli, ANCA negative, post-streptococcal, common in children. ANCA-associated: Pauci-immune RPGN, ANCA positive, granulomatous (GPA).

**Q12: Why is plasma exchange used in severe ANCA-associated vasculitis?**
A: Removes circulating ANCA antibodies, immune complexes, and complement-activating factors. Used in severe pulmonary hemorrhage or RPGN with creatinine >500-600 to reduce progression to ESRD.

**Q13: What are the complications of Behcet's disease related to vascular involvement?**
A: Thrombosis (DVT, PE), aneurysm formation (especially pulmonary artery, can rupture fatally), vasculitis of major vessels, stroke (due to thrombosis or vasculitis).

**Q14: How does induction therapy for severe GPA differ from maintenance therapy?**
A: Induction: High-dose prednisolone (1 mg/kg/day) + cyclophosphamide 0.5-1 g/m² monthly for 3-6 months. Maintenance: Low-dose prednisolone (taper) + azathioprine or mycophenolate to prevent relapse.

**Q15: What is EGPA (Churg-Strauss syndrome) and its classic triad?**
A: Small-vessel p-ANCA/MPO vasculitis with: 1) Severe asthma 2) Eosinophilia (usually >1500) 3) Systemic vasculitis (neuropathy, cardiac involvement). Often corticosteroid responsive.

**Q16: Why do some PAN patients require antivirals in addition to immunosuppression?**
A: 10-20% of PAN associated with hepatitis B (higher in endemic areas). Treat with antivirals (interferon-alpha, lamivudine) + immunosuppression to control HBV replication and reduce vasculitis burden.

**Q17: What is the significance of saddle nose deformity in vasculitis?**
A: Pathognomonic sign of GPA (Wegener's granulomatosis). Results from granulomatous destruction of nasal septum causing nasal bridge collapse. Indicates severe upper respiratory involvement.

**Q18: Describe the management of ocular involvement in Behcet's disease.**
A: Uveitis (anterior, posterior, pan-) most common. Treat aggressively with topical/systemic corticosteroids, azathioprine, infliximab to prevent blindness. Close ophthalmology follow-up essential.

**Q19: What imaging findings distinguish Takayasu arteritis from atherosclerotic disease?**
A: TAK: Smooth tapering stenosis of aorta and branches, skip lesions (areas of normal between stenosis). Atherosclerosis: Eccentric, irregular plaques. PET shows inflammation in TAK. Young age of patient also distinguishes.

**Q20: How do you differentiate vasculitis from other causes of elevated inflammatory markers and multisystem disease?**
A: Check ANCA, ANA, immune complexes (C3, C4). Tissue biopsy gold standard. ANCA-positive, pauci-immune RPGN = vasculitis. Normal complement (except IgA) helps exclude immune complex disease (lupus).`,
        mnemonics: [
          { text: "VASCULITIS CLASSIFICATION: Large (TAK, GCA), Medium (PAN), Small (ANCA-associated, IgA) | ANCA-negative/pauci-immune", explanation: "By vessel size" },
          { text: "TAK vs GCA: TAK (young woman, aorta, Asian), GCA (elderly, temporal, scalp claudication) | Both large-vessel", explanation: "Age and ethnicity distinguish" },
          { text: "GPA DIAGNOSIS: c-ANCA/PR3 + Respiratory (sinusitis, nodules) + Renal (RPGN, RBC casts) + Granulomas on biopsy", explanation: "Triad of involvement" },
          { text: "PAN RED FLAGS: Testicular pain (pathognomonic), GI bleeding/perforation, NO GN, ANCA negative, HBV association", explanation: "Medium-vessel distinguished from small" },
          { text: "BEHCET DIAGNOSIS: Oral ulcers (recurrent, mandatory) + ≥2 of: Genital ulcers, Ocular (uveitis), Skin | HLA-B51, Pathergy +", explanation: "Diagnostic criteria" },
          { text: "SEVERE VASCULITIS TREATMENT: IV methylpred 1g/day × 3 + CYC 0.5-1 g/m² monthly OR rituximab + Plasma exchange if pulm hemorrhage/severe renal", explanation: "Induction regimen" },
          { text: "ANCA MECHANISM: c-ANCA/PR3 or p-ANCA/MPO bind neutrophil → Activation → Protease release → Endothelial damage → RPGN", explanation: "Pathogenic cascade" },
          { text: "VASCULITIS MIMICS: Endocarditis (fever, emboli), Lymphoma (constitutional, multisystem), Atherosclerosis (elderly, calcified)", explanation: "Differential diagnosis" },
          { text: "IgA VASCULITIS: IgA immune complex, post-strep, children, palpable purpura, IgA in glomeruli, ANCA negative", explanation: "Immune complex, not ANCA-associated" },
          { text: "ANCA-ASSOCIATED ARDS: GPA (c-ANCA/PR3) = Granulomatous + ANCA-vasculitis | MPA (p-ANCA/MPO) = No granulomas, no upper resp", explanation: "GPA vs MPA distinction" }
        ],
        keyPoints: [
          "Vasculitis classified by vessel size: large (Takayasu, GCA), medium (PAN), small (ANCA-associated, IgA)",
          "Takayasu: Aortic vasculitis in young women, Asian; aortic stenosis ('pulseless'), aortic regurgitation",
          "GPA: Necrotizing vasculitis + granulomas; c-ANCA/PR3; respiratory + renal; saddle nose deformity",
          "PAN: Medium-vessel, testicular pain (pathognomonic), GI involvement, NO glomerulonephritis, ANCA-negative",
          "EGPA: Asthma + eosinophilia + p-ANCA/MPO small-vessel vasculitis",
          "Behcet's: Recurrent oral/genital ulcers + ocular uveitis (serious); HLA-B51 associated; treat with corticosteroids + azathioprine",
          "Severe vasculitis: IV methylprednisolone + cyclophosphamide or rituximab + plasma exchange for pulmonary hemorrhage"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "342: Vasculitis", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Rheumatology", edition: "11th" }
        ]
      }
    ]
  }
];

