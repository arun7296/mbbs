import type { TopicLessons } from "./content-loader";

export const communityMedicinePart4Lessons: TopicLessons[] = [
  {
    topicCode: "CM-MOD-03-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "cm-cvd-diabetes-layer-1-foundation",
        title: "Cardiovascular Diseases & Diabetes - Foundation",
        estimatedMinutes: 20,
        summary: "Epidemiology and burden of cardiovascular disease and diabetes in India.",
        contentMd: `# Cardiovascular Disease and Diabetes - Foundation

## Global and Indian Burden

### Cardiovascular Disease (CVD)
- **Global deaths**: 17.9 million/year (WHO 2023)
- **India burden**: 28% of deaths (3 million/year) - leading cause
- **DALYs**: 69 million globally; India significant contributor
- **Economic cost**: India loses 2-5% GDP to CVD annually

### Diabetes Mellitus
- **Global prevalence**: 537 million people (2021)
- **India prevalence**: 10.1% (135 million diabetics) - second highest globally
- **Type 1 vs Type 2**: 90-95% Type 2
- **Urban vs rural**: Urban 10-12%, rural 3-5%
- **Undiagnosed**: 50% unaware of diabetes status

## CVD Risk Factors in India

### Modifiable Risk Factors
- **Hypertension**: 25-30% urban, 10-15% rural (leading risk factor)
- **Smoking**: 35% men, 3% women
- **Sedentary lifestyle**: Urban 45%, rural 30%
- **Obesity**: Urban 25-30%, rural 10%; BMI cutoff for Asian Indians >23
- **Dyslipidemia**: 40% urban population
- **Diabetes**: 10.1% prevalence (2-3x CVD risk)

### Non-modifiable Risk Factors
- **Age**: >45 years (men), >55 years (women)
- **Sex**: Men at higher risk (especially pre-menopausal women protected)
- **Family history**: Premature CVD in parents/siblings

## Metabolic Syndrome

### Definition
Waist circumference (central obesity) + hypertension + fasting glucose + dyslipidemia

### Indian Cutoffs (NCEP ATP III modified)
- **Waist circumference**: >90 cm (men), >80 cm (women)
- **Triglycerides**: >150 mg/dl
- **HDL cholesterol**: <40 mg/dl (men), <50 mg/dl (women)
- **Blood pressure**: >130/>85 mmHg
- **Fasting glucose**: >100 mg/dl

### Prevalence and Risk
- **Indian prevalence**: 20-25% urban adults
- **CVD risk**: 3x higher with metabolic syndrome
- **T2DM risk**: 5x higher with metabolic syndrome

## Diabetes Types and Characteristics

### Type 1 Diabetes
- **Mechanism**: Autoimmune destruction of beta cells
- **Presentation**: Acute (DKA), usually <30 years
- **Insulin requirement**: Absolute (100%)
- **India prevalence**: ~5% of diabetes cases

### Type 2 Diabetes
- **Mechanism**: Insulin resistance + beta cell dysfunction
- **Presentation**: Gradual, usually >40 years (increasingly younger)
- **Insulin requirement**: Not initially (oral agents), may need later
- **India prevalence**: ~95% of diabetes cases

## Diabetes Complications

### Microvascular
- **Retinopathy**: Leading cause of blindness in working-age adults
- **Nephropathy**: Progresses to end-stage renal disease
- **Neuropathy**: Peripheral and autonomic

### Macrovascular
- **MI**: 2-4x higher risk in diabetics
- **Stroke**: 2-3x higher risk
- **Peripheral arterial disease**: Ulcers, amputations
`,
        mnemonics: [
          {
            text: "India disease burden = CVD (28% deaths), Diabetes (10.1% prevalence, 135M people)",
            explanation: "Leading NCD burden in India"
          },
          {
            text: "CVD risk = Smoking, Sedentary, Hypertension, High cholesterol, Diabetes",
            explanation: "Major modifiable CVD risk factors"
          },
          {
            text: "T2DM complications = Micro (Retinopathy, Nephropathy, Neuropathy), Macro (MI, Stroke, PAD)",
            explanation: "Vascular complications classification"
          }
        ],
        keyPoints: [
          "CVD: Leading cause of death in India (28% of deaths)",
          "Diabetes: 10.1% prevalence in India (~135 million people)",
          "50% of diabetics undiagnosed (subclinical disease burden)",
          "Hypertension: Most common CVD risk factor (25-30% urban)",
          "Metabolic syndrome: 20-25% urban prevalence; 3x CVD risk",
          "Type 2 diabetes: 95% of diabetes; insulin resistance + beta cell dysfunction",
          "Asian Indians: Higher metabolic risk at lower BMI (cutoff >23)",
          "Diabetes complications: Micro (retinopathy, nephropathy, neuropathy) and macro (MI, stroke, PAD)"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "CVD and Diabetes in India", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Non-Communicable Diseases", edition: "5th" }
        ]
      },
      {
        layer: 2,
        slug: "cm-cvd-diabetes-layer-2-mechanism",
        title: "Cardiovascular Diseases & Diabetes - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathophysiology of atherosclerosis, hypertension, and diabetes mechanisms.",
        contentMd: `# Cardiovascular Diseases & Diabetes - Mechanism

## Atherosclerosis Pathophysiology

### Stages of Atherosclerotic Plaque Formation
1. **Endothelial dysfunction**: LDL oxidation, monocyte infiltration
2. **Fatty streak formation**: Lipid accumulation in intima
3. **Intermediate lesion**: Smooth muscle migration, collagen deposition
4. **Fibrous plaque**: Necrotic lipid core with fibrous cap
5. **Complex lesion**: Cap rupture, thrombosis, plaque hemorrhage

### Risk Factor Mechanisms
**LDL cholesterol:** Oxidized LDL → scavenger receptor uptake → foam cell formation
**Hypertension:** Shear stress → endothelial damage, smooth muscle proliferation
**Smoking:** Oxidative stress, endothelial dysfunction, platelet activation
**Diabetes:** Hyperglycemia → AGE formation, insulin resistance, vascular inflammation

## Hypertension Pathophysiology

### Mechanisms of BP Elevation
- **Sodium sensitivity**: Salt retention → fluid volume expansion
- **Renin-angiotensin system**: ACE overactivity → vasoconstriction
- **Sympathetic overactivity**: Catecholamine excess
- **Endothelial dysfunction**: Reduced nitric oxide, increased endothelin
- **Vascular stiffness**: Arterial wall thickening, reduced compliance

### Target Organ Damage
**Heart:** LVH, heart failure, diastolic dysfunction
**Brain:** Microinfarcts, white matter changes, vascular dementia
**Kidneys:** Glomerulosclerosis, proteinuria, CKD progression
**Eyes:** Hypertensive retinopathy

## Type 2 Diabetes Pathophysiology

### Insulin Resistance Development
1. **Genetic predisposition**: Family history, ethnic risk (South Asian)
2. **Environmental factors**: Obesity, sedentary lifestyle, dietary factors (refined carbs)
3. **Insulin signaling defects**: IRS-1 phosphorylation impaired, GLUT4 translocation reduced
4. **Peripheral IR**: Muscle, fat, liver insulin resistance
5. **Beta cell compensation**: Hyperinsulinemia attempts to maintain glucose homeostasis

### Beta Cell Dysfunction
- **Loss of first-phase insulin secretion**: Glucose-stimulated response impaired
- **Beta cell apoptosis**: Amyloid deposition, oxidative stress
- **ER stress**: Unfolded protein response activation
- **Progressive failure**: Eventually overt hyperglycemia develops

### Metabolic Consequences
- **Impaired glucose uptake**: GLUT4 dysfunction in muscle/fat
- **Increased hepatic glucose output**: Impaired suppression of gluconeogenesis
- **Dyslipidemia**: Increased VLDL, low HDL (very common)
- **Inflammation**: Elevated TNF-alpha, IL-6, CRP (proinflammatory state)

## Microvascular Complications Mechanism

### Hyperglycemia Effects
- **Polyol pathway**: Glucose → sorbitol (accumulates) → osmotic damage
- **AGE formation**: Non-enzymatic glycosylation of proteins
- **Protein kinase C activation**: Diacylglycerol activation
- **Oxidative stress**: Superoxide generation, antioxidant depletion

### Diabetic Retinopathy
- **Basement membrane thickening**: Increased permeability
- **Pericyte loss**: Capillary fragility, microaneurysm formation
- **Neovascularization**: Hypoxia-induced VEGF expression
- **Macular edema**: Fluid accumulation from increased vascular permeability

### Diabetic Nephropathy
- **Mesangial expansion**: Glomerular basement membrane thickening
- **Proteinuria**: Increased glomerular permeability
- **Sclerosis**: Progressive glomerulosclerosis
- **CKD progression**: Eventually end-stage renal disease

### Diabetic Neuropathy
- **Demyelination**: Myelin loss from Schwann cells
- **Axonal loss**: Neuronal apoptosis
- **Microvascular ischemia**: Vasa nervorum dysfunction
- **Autonomic dysfunction**: Parasympathetic and sympathetic nerve damage

## Asian Indian Paradox

### Metabolic Vulnerability
- **Lower BMI, higher body fat**: Central obesity at lower BMI
- **Insulin resistance**: 3-5x higher at same BMI vs Caucasians
- **Dyslipidemia**: Small dense LDL particles (more atherogenic)
- **Earlier CVD onset**: 10-20 years earlier than Western populations
- **Genetic factors**: Specific genetic polymorphisms increase metabolic risk

### Environmental Factors Contributing
- **Rapid urbanization**: Dietary changes (processed foods)
- **Socioeconomic transition**: Lifestyle changes (reduced physical activity)
- **Nutritional programming**: Fetal/early childhood malnutrition → increased metabolic risk later
`,
        mnemonics: [
          {
            text: "Atherosclerosis stages = Dysfunction → Fatty streak → Intermediate → Fibrous → Complex",
            explanation: "Plaque formation progression"
          },
          {
            text: "T2DM mechanism = Insulin resistance + Beta cell dysfunction (dual defect)",
            explanation: "Two-pronged pathophysiology"
          },
          {
            text: "Hyperglycemia damage = Polyol, AGE, PKC, Oxidative stress (4 pathways)",
            explanation: "Four mechanisms of glucose-induced damage"
          }
        ],
        keyPoints: [
          "Atherosclerosis: Progressive endothelial damage → foam cell → plaque formation",
          "Hypertension: Sodium sensitivity, RAS overactivity, sympathetic overactivity",
          "Target organ damage: Heart (LVH), brain (microinfarcts), kidneys (glomerulosclerosis)",
          "T2DM: Peripheral insulin resistance + progressive beta cell dysfunction",
          "Beta cell dysfunction: Loss of first-phase insulin secretion, apoptosis, ER stress",
          "Microvascular complications: Polyol pathway, AGE, PKC activation, oxidative stress",
          "Retinopathy: Capillary fragility, pericyte loss, neovascularization",
          "Nephropathy: Mesangial expansion, proteinuria, progressive sclerosis",
          "Asian Indian paradox: High insulin resistance at lower BMI; higher atherogenic risk",
          "Lipid profile: Small dense LDL (more atherogenic), low HDL, elevated triglycerides"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Pathophysiology of CVD and Diabetes", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Mechanisms of NCD Development", edition: "5th" }
        ]
      },
      {
        layer: 3,
        slug: "cm-cvd-diabetes-layer-3-clinical",
        title: "Cardiovascular Diseases & Diabetes - Clinical Application",
        estimatedMinutes: 25,
        summary: "Risk stratification, diagnosis, and management programs in India.",
        contentMd: `# Cardiovascular Diseases & Diabetes - Clinical Application

## Risk Stratification in CVD

### Framingham Risk Score (modified for Indian population)
**Factors included:**
- Age
- Smoking status
- Systolic BP
- Total cholesterol
- HDL cholesterol

**Risk categories:**
- Low risk: <10% 10-year CVD probability
- Intermediate: 10-20% probability
- High risk: >20% probability

### Indian Risk Scores
- **AUSRISK**: Australian risk calculator adapted for India
- **ICMR guidelines**: Recommend risk stratification for all adults >30 years
- **Metabolic syndrome**: Presence = automatic intermediate/high risk

## Diabetes Diagnosis and Classification

### Diagnostic Criteria
- **Fasting glucose**: ≥126 mg/dl (or ≥7.0 mmol/L)
- **2-hour glucose (OGTT)**: ≥200 mg/dl
- **Random glucose**: ≥200 mg/dl with symptoms
- **HbA1c**: ≥6.5% (new criterion; requires confirmation)

### Pre-diabetes (Prediabetic state)
- **Fasting glucose**: 100-125 mg/dl
- **2-hour glucose**: 140-199 mg/dl
- **HbA1c**: 5.7-6.4%
- **Significance**: 30-50% progress to diabetes over 3-5 years

## Management Programs in India

### CVD Prevention (NCDAP)
**Primary prevention:**
- Screening in clinics, workplaces, community
- BP control targets: <140/90 (or <130/80 if high-risk)
- Lipid management: LDL <100 mg/dl (or <70 if CAD)
- Lifestyle modification (exercise, diet, smoking cessation)

**Secondary prevention (post-MI/stroke):**
- Antiplatelet therapy (aspirin)
- ACE inhibitors/ARBs
- Beta-blockers
- Statins (high-intensity)
- Cardiac rehabilitation

### Diabetes Management Programs
**Screening and early detection:**
- Random glucose/HbA1c in high-risk groups
- School screening (prevent childhood obesity)
- Occupational screening

**Treatment targets:**
- HbA1c: 7% for most (individualized based on age, comorbidities)
- BP: <130/80 mmHg (stricter for diabetes)
- Lipids: LDL <100 mg/dl

**Lifestyle intervention:**
- Weight reduction: 7% loss reduces T2DM incidence by 58%
- Exercise: 150 minutes/week moderate activity
- Dietary changes: Low glycemic index, high fiber

**Pharmacotherapy:**
- First-line: Metformin (if tolerated)
- Add-on agents: DPP-4i, GLP-1RA, SGLT-2i, sulfonylurea, TZD
- Insulin: If needed for glycemic control

## Complication Screening and Management

### Diabetes Complication Screening
**Annual assessments:**
- **Retinopathy**: Dilated fundoscopy, OCT if abnormal
- **Nephropathy**: Urine microalbumin, serum creatinine, eGFR
- **Neuropathy**: Monofilament testing, vibration sense
- **Foot**: Visual inspection, assess sensation, check pulses

**Management:**
- **Retinopathy**: Tight glucose/BP control; laser photocoagulation if needed
- **Nephropathy**: ACE-I/ARB (protective); dialysis if ESRD
- **Neuropathy**: Symptom management, gabapentin; prevent ulcers
- **Foot**: Education, regular cleaning, proper footwear, early ulcer treatment

### CVD Secondary Prevention
- **ACE-I/ARBs**: Cardio/renoprotective
- **Statins**: Reduce CVD events by 30%
- **Antiplatelet**: Reduce recurrent MI/stroke
- **Beta-blockers**: Post-MI survival benefit
- **Lifestyle**: Exercise-based cardiac rehabilitation

## Indian Policy Framework

### NPCDCS (National Program for Control of Cancer, Diabetes, CVD & Stroke)
- Screen and manage risk factors in community
- Training health workers
- Strengthening health systems

### Integrated NCD Screening
- Screen in clinics and outreach
- Common risk factors (smoking, BP, obesity, glucose)
- Opportunistic screening + population screening

### Targets
- Reduce premature NCD mortality by 30% by 2030
- Increase physical activity prevalence
- Reduce obesity (BMI ≥25)
- Improve CVD risk factor control (BP, lipids, glucose)
`,
        mnemonics: [
          {
            text: "CVD risk categories = Low (<10%), Intermediate (10-20%), High (>20%) 10-year probability",
            explanation: "Framingham risk stratification"
          },
          {
            text: "Diabetes diagnosis = Fasting ≥126 OR 2h ≥200 OR Random ≥200 (with symptoms) OR HbA1c ≥6.5%",
            explanation: "Diagnostic criteria for diabetes"
          },
          {
            text: "Diabetes treatment = Lifestyle (exercise, diet, weight loss) + Pharmacotherapy (metformin first)",
            explanation: "Two-pronged management approach"
          }
        ],
        keyPoints: [
          "Framingham risk score: Age, smoking, BP, total cholesterol, HDL cholesterol",
          "Risk categories: Low <10%, Intermediate 10-20%, High >20% (10-year CVD)",
          "Diabetes diagnosis: Fasting ≥126 mg/dl or 2-hour ≥200 mg/dl or HbA1c ≥6.5%",
          "Pre-diabetes: Fasting 100-125 mg/dl; 30-50% progress to diabetes",
          "Weight reduction: 7% loss reduces diabetes incidence by 58%",
          "Exercise: 150 minutes/week moderate activity for prevention",
          "BP targets: <140/90 mmHg (or <130/80 for high-risk/diabetes)",
          "HbA1c targets: 7% for most (individualized based on age/comorbidities)",
          "Complication screening: Annual retinopathy, nephropathy, neuropathy, foot assessment",
          "Secondary prevention: Antiplatelets, ACE-I/ARB, statins, beta-blockers post-CVD event"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "CVD and Diabetes Management in India", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "NCD Prevention and Control Programs", edition: "5th" }
        ]
      },
      {
        layer: 4,
        slug: "cm-cvd-diabetes-layer-4-exam",
        title: "Cardiovascular Diseases & Diabetes - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Quick reference and commonly tested concepts.",
        contentMd: `# Cardiovascular Diseases & Diabetes - Exam Preparation

## Quick CVD Risk Factor Summary

| Factor | Urban India | Rural India | Threshold |
|--------|------------|-------------|-----------|
| Hypertension | 25-30% | 10-15% | ≥140/90 mmHg |
| Smoking | 35% (men) | 25% (men) | Any amount |
| Obesity | 25-30% | 10% | BMI >25 (or >23 Asian) |
| Sedentary | 45% | 30% | <150 min/week |
| Dyslipidemia | 40% | 20% | LDL >100 mg/dl |
| Diabetes | 10.1% | ~5% | Fasting ≥126 mg/dl |

## Diabetes Diagnosis and Classification

| Measure | Normal | Pre-diabetes | Diabetes |
|---------|--------|-------------|----------|
| Fasting glucose | <100 | 100-125 | ≥126 mg/dl |
| 2-hour glucose (OGTT) | <140 | 140-199 | ≥200 mg/dl |
| Random glucose | <140 | - | ≥200 (with symptoms) |
| HbA1c | <5.7% | 5.7-6.4% | ≥6.5% |

## Diabetes Complications Management

| Complication | Pathophysiology | Screening | Management |
|--------------|----------------|-----------|-----------|
| Retinopathy | Vascular damage, neovascularization | Dilated fundus exam | Glucose/BP control, laser |
| Nephropathy | Glomerulosclerosis, proteinuria | Microalbumin, creatinine | ACE-I/ARB, dialysis |
| Neuropathy | Demyelination, ischemia | Monofilament, vibration | Gabapentin, pain management |
| Foot ulcer | Neuropathy + vascular disease | Visual inspection | Prevention, early treatment |

## Common Exam Questions

**Q1: Epidemiology of CVD and Diabetes in India.**
A: CVD: 28% of deaths (leading cause), 3 million/year. Diabetes: 10.1% prevalence (~135 million people), 50% undiagnosed.

**Q2: What are the major CVD risk factors in India and their prevalence?**
A: Hypertension (25-30% urban), smoking (35% men), sedentary (45%), obesity (25-30% urban), dyslipidemia (40%).

**Q3: Metabolic syndrome definition and Indian cutoffs.**
A: Central obesity + HTN + dyslipidemia + high fasting glucose. Indian cutoffs: WC >90cm (M), >80cm (F); SBP >130/85; FG >100; TG >150; HDL <40M/<50F.

**Q4: Type 1 vs Type 2 diabetes - differences.**
A: T1DM: Autoimmune, acute onset, <30y, requires insulin. T2DM: Insulin resistance, gradual onset, >40y, 95% of diabetes, oral agents initially.

**Q5: Pathophysiology of Type 2 Diabetes - two key defects.**
A: (1) Insulin resistance (peripheral IR + hepatic IR), (2) Beta cell dysfunction (loss of first-phase secretion, apoptosis, progressive failure).

**Q6: Diabetes diagnostic criteria.**
A: Fasting ≥126 mg/dl OR 2-hour glucose (OGTT) ≥200 mg/dl OR Random ≥200 with symptoms OR HbA1c ≥6.5% (requires confirmation).

**Q7: Pre-diabetes definition and progression risk.**
A: Fasting 100-125 mg/dl or 2-hour 140-199 mg/dl. 30-50% progress to diabetes in 3-5 years; 58% reduction with lifestyle intervention.

**Q8: What is the Asian Indian paradox?**
A: Higher insulin resistance at lower BMI; increased CVD risk at lower obesity levels; higher metabolic vulnerability to lifestyle/environmental changes.

**Q9: Framingham risk score components and categories.**
A: Age, smoking, SBP, total cholesterol, HDL. Risk: <10% (low), 10-20% (intermediate), >20% (high) 10-year CVD probability.

**Q10: Diabetes complication screening - what to screen annually?**
A: Retinopathy (dilated fundus), nephropathy (microalbumin, creatinine), neuropathy (monofilament test), foot (inspection, pulses, sensation).
`,
        mnemonics: [
          {
            text: "India burden = CVD 28% deaths, Diabetes 10.1% (~135M), 50% undiagnosed",
            explanation: "Epidemiological figures"
          },
          {
            text: "T2DM defects = IR (insulin resistance) + BCF (beta cell failure)",
            explanation: "Two-pronged pathophysiology"
          },
          {
            text: "Diabetes diagnosis = F≥126 or 2H≥200 or R≥200(sx) or HbA1c≥6.5%",
            explanation: "Diagnostic criteria abbreviations"
          }
        ],
        keyPoints: [
          "CVD: Leading cause of death in India; 25-30% have hypertension (urban)",
          "Diabetes: 10.1% prevalence (~135M); 50% unaware; mostly Type 2 (95%)",
          "Metabolic syndrome: 20-25% prevalence; 3x CVD risk, 5x diabetes risk",
          "Pre-diabetes: Fasting 100-125 mg/dl; 30-50% progress to diabetes",
          "Weight reduction: 7% loss reduces T2DM incidence by 58%",
          "Framingham score: <10% low, 10-20% intermediate, >20% high risk",
          "HbA1c targets: 7% for most (individualized)",
          "BP targets: <140/90 (or <130/80 for high-risk/diabetes)",
          "Complications: Micro (retinopathy, nephropathy, neuropathy), Macro (MI, stroke, PAD)",
          "Asian Indians: Higher metabolic risk at lower BMI; earlier CVD onset"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "NCD Prevention", edition: "26th" }
        ]
      },
      {
        layer: 5,
        slug: "cm-cvd-diabetes-layer-5-active-recall",
        title: "Cardiovascular Diseases & Diabetes - Active Recall",
        estimatedMinutes: 15,
        summary: "Self-assessment on CVD and diabetes.",
        contentMd: `# Cardiovascular Diseases & Diabetes - Active Recall

## Q&A for Self-Assessment

**Q1: Describe epidemiology of CVD in India - mortality, disability, economic impact.**
A: CVD accounts for 28% of deaths in India (~3 million/year), leading cause of NCD mortality. DALYs significant. Economic impact: India loses 2-5% GDP annually to CVD. Urban burden higher than rural.

**Q2: What is the Asian Indian paradox and its public health significance?**
A: Asian Indians develop insulin resistance and CVD at lower BMI compared to Caucasians. Higher metabolic vulnerability. Earlier CVD onset (10-20 years earlier). BMI cutoff >23 (vs >25 Western). Public health significance: different screening/intervention thresholds needed.

**Q3: Explain metabolic syndrome - definition, criteria, prevalence, CVD risk.**
A: Metabolic syndrome = central obesity + hypertension + dyslipidemia + hyperglycemia. Indian criteria: WC >90cm (M), >80cm (F); HTN >130/85; FG >100; TG >150; HDL <40 (M)/<50 (F). Prevalence 20-25% urban. 3x CVD risk, 5x diabetes risk with metabolic syndrome.

**Q4: Describe pathophysiology of atherosclerosis - from endothelial dysfunction to plaque rupture.**
A: (1) Endothelial dysfunction: LDL oxidation, monocyte infiltration. (2) Fatty streak: Lipid accumulation. (3) Intermediate lesion: Smooth muscle migration. (4) Fibrous plaque: Necrotic lipid core. (5) Complex lesion: Cap rupture, thrombosis.

**Q5: Explain Type 2 Diabetes pathophysiology - insulin resistance and beta cell dysfunction.**
A: Insulin resistance: Genetic + environmental (obesity, sedentary). Defects in IRS-1 signaling, GLUT4 translocation. Causes hyperinsulinemia initially (compensatory). Beta cell dysfunction: Loss of first-phase secretion, apoptosis, ER stress, progressive failure. Combined defect leads to overt hyperglycemia.

**Q6: What are the four mechanisms by which hyperglycemia causes vascular complications?**
A: (1) Polyol pathway: Glucose → sorbitol accumulates → osmotic damage. (2) AGE formation: Non-enzymatic glycosylation. (3) PKC activation: Diacylglycerol. (4) Oxidative stress: Superoxide generation, antioxidant depletion.

**Q7: Describe diabetic retinopathy pathophysiology - from early changes to neovascularization.**
A: Basement membrane thickening → increased permeability. Pericyte loss → capillary fragility, microaneurysm formation. Hemorrhage and hard exudates. Hypoxia-induced VEGF → neovascularization. Macular edema from fluid accumulation. Neovascular glaucoma risk.

**Q8: What is the role of risk stratification in CVD prevention?**
A: Identifies high-risk individuals for intensive management. Framingham score: Age, smoking, SBP, total cholesterol, HDL. Categorizes: <10% low, 10-20% intermediate, >20% high risk. Guides treatment intensity (BP targets, lipid targets, lifestyle intensity).

**Q9: Diabetes diagnosis - explain each criterion and when to use.**
A: Fasting ≥126 mg/dl (preferred, convenient). 2-hour glucose OGTT ≥200 (gold standard). Random ≥200 with symptoms (practical). HbA1c ≥6.5% (convenient, reflects 3-month average, but requires confirmation). Any ONE positive = diabetes.

**Q10: What is pre-diabetes and what is its significance for public health?**
A: Pre-diabetes = Fasting 100-125 mg/dl or 2-hour 140-199 mg/dl. Significance: Identifies at-risk individuals. 30-50% progress to diabetes over 3-5 years. Lifestyle intervention (7% weight loss) reduces progression by 58% (DPP study concept).

**Q11: Explain diabetes management targets and why individualization is important.**
A: HbA1c targets: 7% for most adults. Individualization: <7% in young, newly diagnosed; >8% in elderly, multiple comorbidities, polypharmacy. BP: <130/80 for diabetics (stricter than non-diabetics). Lipids: LDL <100 mg/dl. Individualization based on age, comorbidities, life expectancy.

**Q12: Describe the diabetes complication screening protocol.**
A: Annual screening: (1) Retinopathy = dilated fundoscopy, OCT if abnormal. (2) Nephropathy = urine microalbumin, serum creatinine, eGFR. (3) Neuropathy = monofilament (10g), vibration sense, reflex testing. (4) Foot = visual inspection, sensation, pulses, assess risk.

**Q13: What is the mechanism of hypertensive target organ damage?**
A: Heart: Shear stress → LVH, diastolic dysfunction, HF. Brain: Microinfarcts from arteriolar disease → vascular dementia. Kidneys: Afferent arteriole hyalinosis → glomerulosclerosis, proteinuria, CKD. Eyes: Arteriolar narrowing → hypertensive retinopathy.

**Q14: Explain secondary prevention post-CVD event - what drugs and why?**
A: Antiplatelets (aspirin): Reduce recurrent MI/stroke by 25%. ACE-I/ARB: Cardioprotective, prevent remodeling. Statins: Reduce cholesterol, plaque stabilization. Beta-blockers: Post-MI mortality benefit. Cardiac rehab: Exercise improves function.

**Q15: What is the public health impact of undiagnosed diabetes in India?**
A: 50% of diabetics unaware. Already have 30% microvascular complications at diagnosis. Miss opportunity for early intervention. Higher complications at diagnosis. Screening programs (camps, workplace) identify new cases early, enabling prevention of complications.

**Q16: Discuss lipid management in CVD prevention - target lipid profiles.**
A: LDL <100 mg/dl (optimal). HDL >40 (M), >50 (F) (desirable). Triglycerides <150 mg/dl. Total cholesterol <200 mg/dl. Small dense LDL particles (atherogenic, need lower target). Statins first-line, high-intensity if CAD/diabetes.

**Q17: Explain why lifestyle modification is emphasized in diabetes prevention.**
A: Weight reduction: 7% loss reduces T2DM incidence by 58% (DPP study). Exercise: 150 min/week improves insulin sensitivity. Diet: Low GI, high fiber reduces glucose load. Smoking cessation: Reduces CVD by 50%. Cost-effective, no medications, additional health benefits.

**Q18: What are the barriers to CVD/Diabetes control in India and how are they addressed?**
A: Barriers: Lack of awareness (50% unaware of diagnosis), poor adherence (long duration, side effects), costs (medications, monitoring). Addressed through: NPCDCS program, community screening, ASHA/ANM involvement, subsidized medications, simplified regimens, patient education.
`,
        mnemonics: [
          {
            text: "Metabolic syndrome = Central obesity + HTN + Dyslipidemia + Hyperglycemia",
            explanation: "Definition combining 4 risk factors"
          },
          {
            text: "T2DM pathophysiology = IR + BCF (dual defect progression)",
            explanation: "Two mechanisms at play"
          },
          {
            text: "Diabetes diagnosis = F≥126 or 2H≥200 or R≥200 or HbA1c≥6.5%",
            explanation: "Any ONE criterion sufficient"
          }
        ],
        keyPoints: [
          "CVD: Leading NCD cause of death in India (28% of deaths)",
          "Diabetes: 10.1% prevalence (~135M people); 50% undiagnosed",
          "Asian Indian paradox: Higher metabolic risk at lower BMI; earlier CVD onset",
          "Metabolic syndrome: 20-25% urban; 3x CVD risk, 5x diabetes risk",
          "Pre-diabetes: 30-50% progress to diabetes; 58% reduction with lifestyle",
          "T2DM pathophysiology: Insulin resistance + beta cell dysfunction (dual defect)",
          "Hyperglycemia damage: Four pathways (polyol, AGE, PKC, oxidative stress)",
          "Complications: Retinopathy (leading blindness cause), nephropathy, neuropathy, foot ulcers",
          "Framingham score: <10% low, 10-20% intermediate, >20% high risk (10-year CVD)",
          "HbA1c targets: 7% for most (individualized); BP <130/80 for diabetics"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "CVD and Diabetes Control Programs", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "NCD Prevention and Management", edition: "5th" }
        ]
      }
    ]
  }
];
