import type { TopicLessons } from "./content-loader";

export const obgPart6Lessons: TopicLessons[] = [
  {
    topicCode: "OG-MOD-02-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "gestational-diabetes-layer-1-foundation",
        title: "Gestational Diabetes - Foundation",
        estimatedMinutes: 25,
        summary: "Definition, epidemiology, risk factors for GDM, glucose metabolism changes in pregnancy, and screening approach per ICMR guidelines.",
        contentMd: `# Gestational Diabetes - Foundation

## Definition & Epidemiology
**GDM**: Carbohydrate intolerance of variable severity with onset/recognition during pregnancy (excludes pre-existing diabetes)
**Prevalence in India**: 16-18% (varies by region, higher in urban populations)
**Age of onset**: Usually 24-28 weeks
**Risk after GDM**: 25-30% develop T2DM within 5 years

## Glucose Metabolism in Pregnancy
**Normal changes** (physiologic):
- Fasting glucose: ↓ 5-10 mg/dL (increased fetal uptake, nausea/reduced intake)
- Postprandial glucose: ↑ 15-20 mg/dL (↓ insulin sensitivity, ↑ anti-insulin hormones)
- Insulin resistance increases 30% by 3rd trimester (Human Placental Lactogen, cortisol)

**Insulin requirements**:
- Pre-existing diabetics: Insulin needs ↑ 50-100% during pregnancy
- Non-diabetics: Compensate with ↑ insulin secretion (pancreatic β-cells increase)
- GDM: Insufficient β-cell response to pregnancy-induced insulin resistance

## Risk Factors (ICMR Criteria)
**Universal screening** (all pregnant women):
- All pregnant women screened using Oral Glucose Tolerance Test (OGTT)

**High-risk factors** (earlier screening at first visit):
- Pre-GDM history
- Obesity (BMI >25 kg/m²)
- Family history of T2DM
- Maternal age >25 years
- Polycystic ovary syndrome (PCOS)
- Previous macrosomic baby (birth weight >4 kg)
- Glycosuria or hyperglycemia in first trimester

## Screening & Diagnosis (ICMR 2024)

**75g OGTT** (2-hour, single step):
- Timing: 24-28 weeks gestation
- Fasting glucose: <95 mg/dL (5.3 mmol/L) = normal
- 2-hour glucose: <140 mg/dL (7.8 mmol/L) = normal
- Any value ≥ threshold = GDM diagnosis (single abnormal value sufficient)

**Alternative if OGTT unavailable**:
- Fasting glucose >100 mg/dL or random glucose >140 mg/dL in 2nd trimester = GDM

**Indian values** (ICMR) differ from international standards:
- ICMR recommends lower thresholds than WHO (more sensitive for Indian population)
- Fasting: 95 mg/dL (vs WHO 100)
- 2-hr: 140 mg/dL (WHO 140—same)`,
        mnemonics: [
          { text: "GDM in India: 16-18% prevalence, ↑ in urban areas", explanation: "Epidemiology context" },
          { text: "OGTT: Fasting <95, 2-hr <140 (ICMR values)", explanation: "Screening thresholds" },
          { text: "HPL ↑ → insulin resistance ↑ → GDM risk", explanation: "Physiology of pregnancy-induced insulin resistance" },
          { text: "GDM risk: Age, obesity, PCOS, family history, previous macrosomic baby", explanation: "Risk factors" }
        ],
        keyPoints: [
          "Insulin resistance peaks in 3rd trimester (physiologic, normal)",
          "GDM is due to insufficient insulin secretion response to pregnancy",
          "All pregnant women in India screened at 24-28 weeks per ICMR",
          "Single abnormal OGTT value = GDM diagnosis (not 2/3 needed)",
          "Fasting hyperglycemia >100 mg/dL in pregnancy = GDM",
          "Previous macrosomic baby is strong risk factor for recurrent GDM"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Diabetes in Pregnancy", edition: "9th" },
          { book: "ICMR Guidelines for Gestational Diabetes", chapter: "Screening & Diagnosis", edition: "2024" }
        ]
      },
      {
        layer: 2,
        slug: "gestational-diabetes-layer-2-mechanism",
        title: "Gestational Diabetes - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of GDM, hormonal changes, β-cell dysfunction, and fetal metabolic effects.",
        contentMd: `# Gestational Diabetes - Mechanism

## Hormonal Basis of GDM
**Counter-insulin hormones** ↑ in pregnancy:
- **HPL** (human placental lactogen): ↑ 2-fold by 3rd trimester, ↓ insulin sensitivity
- **Cortisol**: ↑ 2-3 fold, anti-insulin effect
- **Glucagon**: ↑ slightly, increases lipolysis
- **Progesterone**: ↓ insulin secretion, ↑ insulin degradation
- **Growth hormone**: ↑ in 3rd trimester (diabetogenic)

**Insulin resistance mechanism**:
- Target cell insulin receptor defects: Reduced phosphorylation cascade
- Post-receptor signaling: PI3K/Akt pathway impaired
- ↓ GLUT-4 translocation → ↓ glucose uptake by muscle/fat
- Hepatic insulin resistance: Increased hepatic glucose output

## β-Cell Dysfunction in GDM
**Normal pregnancy response**:
- β-cell mass increases 2-3 fold
- Insulin secretion increases 2-3 fold
- Fasting insulin levels ↑ 50-100%
- Glucose homeostasis maintained

**GDM physiopathology**:
- Inadequate β-cell expansion (genetic/epigenetic limitation)
- Defective insulin secretion response to glucose (↓ first-phase response)
- β-cell apoptosis: Excess lipid (lipotoxicity), ER stress (glucotoxicity)
- Genetic predisposition: MODY genes, TCF7L2 variants

**Recovery postpartum**:
- Most β-cells normalize after delivery
- 10-30% women have persistent impaired glucose tolerance (IGT) or T2DM
- Annual conversion: 2-3% to T2DM

## Fetal Metabolic Effects
**Maternal hyperglycemia** → Fetal hyperglycemia:
- Glucose freely crosses placenta (GLUT-1, GLUT-3 transporters)
- Fetal blood glucose 10-20 mg/dL higher than maternal (transplacental gradient reversed)

**Fetal hyperinsulinemia cascade**:
1. Hyperglycemia → Pancreatic β-cell stimulation
2. ↑ Fetal insulin → Anabolic effects (fat deposition, protein synthesis)
3. Macrosomia: Birth weight >4 kg (BMI >85th percentile for gestation)
4. Organomegaly: Hepatomegaly, splenomegaly, cardiomegaly

**Associated risks**:
- **Shoulder dystocia**: Due to large shoulders (impacted after head delivery)
- **Neonatal hypoglycemia**: Loss of maternal glucose source post-delivery
- **Polycythemia**: Fetal compensation for placental insufficiency
- **Hyperbilirubinemia**: From hemolysis of polycythemia
- **Respiratory distress**: Delayed lung maturity (hyperinsulinemia ↓ cortisol production)
- **Congenital anomalies**: Rare in GDM (caudal regression syndrome in pre-gestational DM)

## Placental Changes in GDM
- Placental weight ↑ 10-15% (due to villous hypertrophy)
- Villous structure: Thickened syncytium, reduced vascularity
- ↓ Placental perfusion → relative fetal hypoxia → ↑ erythropoietin
- Calcifications: Earlier/more extensive than normal pregnancy`,
        mnemonics: [
          { text: "HPL + cortisol ↑ → Insulin resistance ↑", explanation: "Main hormonal drivers" },
          { text: "GDM = Inadequate β-cell response to ↑ insulin demand", explanation: "Pathophysiology" },
          { text: "Fetal hyperglycemia → hyperinsulinemia → macrosomia → hypoglycemia (cascade)", explanation: "Fetal effects chain" },
          { text: "Macrosomia risk: Shoulders, dystocia, respiratory distress, polycythemia", explanation: "Neonatal complications" }
        ],
        keyPoints: [
          "Pregnancy-induced insulin resistance is normal; GDM occurs when β-cells cannot compensate",
          "Fetal hyperglycemia drives insulin secretion and excessive growth",
          "Macrosomia increases shoulder dystocia and birth trauma risk",
          "Neonatal hypoglycemia common 30-60 min after birth (loss of maternal glucose)",
          "Intrauterine hypoxia in GDM leads to polycythemia and hyperbilirubinemia",
          "Placental insufficiency mechanisms contribute to IUGR paradoxically in some GDM cases"
        ],
        textbookRefs: [
          { book: "Gynecology by Ten Teachers", chapter: "Diabetes in Pregnancy: Mechanisms", edition: "21st" },
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Fetal Effects of GDM", edition: "9th" }
        ]
      },
      {
        layer: 3,
        slug: "gestational-diabetes-layer-3-clinical",
        title: "Gestational Diabetes - Clinical",
        estimatedMinutes: 35,
        summary: "Management of GDM (diet, exercise, insulin), monitoring of mother and fetus, and delivery planning.",
        contentMd: `# Gestational Diabetes - Clinical

## Management Overview (ICMR)
**Goal**: Maintain normoglycemia to prevent macrosomia and fetal complications
**Approach**: Step-wise (diet → exercise → pharmacotherapy)

## Lifestyle Modification (First-Line)
**Medical nutrition therapy** (MNT):
- **Carbohydrate**: 45-50% of calories, complex carbs (low glycemic index)
- **Protein**: 20-25% of calories (increases with pregnancy)
- **Fat**: 30-35% of calories, limit saturated fat
- **Fiber**: 25-30 g/day (slow glucose absorption)
- **Distribution**: 3 meals + 2-3 snacks (avoid long fasting periods)
- **Total calories**: 2000-2200 kcal/day (individual based on pre-pregnancy BMI)

**Physical activity**:
- 150 minutes moderate exercise/week (brisk walking, swimming)
- Supervised resistance training 2-3x/week (safe in pregnancy)
- Reduces insulin resistance 15-25%, controls weight gain
- Contraindication: Severe anemia, incompetent cervix, placental abruption

**Weight management**:
- Target gain: 11-15 kg (pre-pregnancy BMI 18.5-24.9)
- 5-9 kg for overweight (BMI 25-29.9)
- 5-9 kg for obese (BMI ≥30)
- Excessive gain worsens insulin resistance

**Dietary counseling response**:
- 70-80% women achieve euglycemia with diet/exercise alone
- Monitor with home glucose logging (6-point profile: fasting, pre-meals, 2-hr post-meals)

## Pharmacotherapy (If Lifestyle Fails)
**Insulin** (preferred, especially in India):
- **NPH (Neutral Protamine Hagedorn)**:
  - Onset: 3-4 hours
  - Peak: 8-12 hours
  - Duration: 18-24 hours
  - Dose: 0.3-1 unit/kg/day divided (2/3 morning, 1/3 evening)

**Regimen**:
- **Basal-bolus**:
  - Morning: NPH (70%) + Regular insulin (30%)
  - Evening: NPH only or NPH + Regular
  - Adjust by 2-4 units weekly based on SMBG readings

- **Twice-daily regimen**:
  - Before breakfast + before dinner
  - Most common in pregnancy (simpler)

**Oral agents** (variable adoption in India):
- **Metformin**: 1500-2500 mg/day (safe, limited placental transfer)
  - Effect: ↓ hepatic glucose production, ↑ insulin sensitivity
  - GI side effects: 30% (diarrhea, nausea)

- **Glyburide**: 5-20 mg/day (minimal placental transfer)
  - Effect: Stimulates β-cell insulin secretion
  - Hypoglycemia risk: 10-15%

- **Acarbose**: 150-300 mg/day (delays glucose absorption)
  - Effect: ↓ postprandial glucose spikes
  - GI side effects: Flatulence, diarrhea

## Glucose Monitoring

**Home self-monitoring** (SMBG):
- Fasting: 70-95 mg/dL (prior to pharmacotherapy); <95 mg/dL on treatment
- Postprandial (2-hr after meals): <140 mg/dL (7.8 mmol/L)
- Frequency: 4-6 times/day initially, can reduce if stable
- Method: Glucometer (available free under RSBY scheme in India)

**Laboratory monitoring**:
- HbA1c: Every 4-6 weeks (reflects 2-3 month average)
- Goal: <6.5% in GDM (stricter than pre-gestational DM)
- Fructosamine: Every 2-3 weeks (reflects 2-3 week average, more sensitive to acute changes)

## Fetal Monitoring
**Biophysical monitoring**:
- NST (non-stress test): 2-3 times/week from 28 weeks (assess fetal well-being)
- AFI (amniotic fluid index): At each visit (polyhydramnios common in GDM)
- Growth scan: At 28-30 weeks, then 34-36 weeks (screen for macrosomia, IUGR paradox)
- Estimated fetal weight: If EFW >4000-4500 g → consider earlier delivery

**Doppler studies**:
- Umbilical artery Doppler: If IUGR suspected (paradoxical in some GDM)
- Middle cerebral artery Doppler: For severe polyhydramnios

## Intrapartum Management
**Insulin infusion during labor**:
- Maternal hyperglycemia during labor worsens fetal hyperglycemia
- Target: 100-140 mg/dL intrapartum
- Use insulin infusion + dextrose-free IV fluids
- Check glucose hourly during labor

**Delivery timing**:
- Delivery at 38-39 weeks if good glycemic control (prevent stillbirth, polyhydramnios)
- Vaginal delivery preferred if estimated fetal weight <4500 g and normal pelvis
- LSCS if: EFW >4500 g, cephalopelvic disproportion, non-reassuring FHR, prior shoulder dystocia

**Neonatal management**:
- Feed infant within 30 min of birth (prevent hypoglycemia)
- Neonatal glucose screening: 30, 60, 120 min; then 4-6 hourly
- Separate infant and mother if mother unstable (hyperglycemia, DKA)

## Postpartum
**Discontinue insulin** immediately postpartum (most women revert to normal glucose)
**Glucose tolerance test**: 6-12 weeks postpartum (fasting glucose, OGTT)
- Normal: 75% of GDM women
- IGT: 15-20%
- T2DM: 5-10%

**Long-term monitoring**:
- Annual fasting glucose/HbA1c
- Lifestyle modification continues (weight loss, exercise)
- Breastfeeding protects against T2DM development
- Preconception counseling before next pregnancy`,
        mnemonics: [
          { text: "GDM diet: Complex carbs 45-50%, protein 20-25%, fiber 25-30g", explanation: "MNT composition" },
          { text: "70-80% achieve euglycemia with diet/exercise alone", explanation: "Success rate" },
          { text: "Insulin: NPH 0.3-1 unit/kg/day, 2/3 AM + 1/3 PM", explanation: "Starting dose" },
          { text: "SMBG target: Fasting <95, post-meal <140 mg/dL", explanation: "Glucose targets" },
          { text: "GDM delivery: 38-39 weeks, EFW <4500g vaginal, >4500g LSCS", explanation: "Delivery plan" }
        ],
        keyPoints: [
          "Lifestyle modification (diet + exercise) first-line; 70-80% respond",
          "Insulin preferred over oral agents in pregnancy in India (safety profile)",
          "Home glucose monitoring essential (6-point profile daily)",
          "Fetal monitoring from 28 weeks: NST 2-3x/week, growth scans at 28-30 and 34-36 weeks",
          "Macrosomia risk increases with poor glycemic control",
          "Neonatal hypoglycemia risk requires early feeding and glucose monitoring",
          "Postpartum: Most revert to normal glucose; 25-30% develop T2DM in 5 years"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Management of GDM", edition: "9th" },
          { book: "ICMR Guidelines", chapter: "GDM Management Protocol", edition: "2024" }
        ]
      },
      {
        layer: 4,
        slug: "gestational-diabetes-layer-4-exam",
        title: "Gestational Diabetes - Exam Prep",
        estimatedMinutes: 25,
        summary: "NEET/NMC exam patterns: Screening thresholds, management algorithms, fetal complications, and Indian guidelines.",
        contentMd: `# Gestational Diabetes - Exam Prep

## Screening Algorithm (ICMR)
**All pregnant women at 24-28 weeks**:
- **75g OGTT** (single-step):
  - Fasting ≥95 mg/dL OR
  - 2-hr ≥140 mg/dL = GDM diagnosis

**Alternative if OGTT unavailable**:
- Random glucose ≥140 mg/dL or
- Fasting ≥100 mg/dL in 2nd trimester = GDM

**NOT recommended in India**:
- Two-step approach (50g glucose challenge, then 75g OGTT if >140) = lower sensitivity for Indian population

## Management Algorithm
| Diagnosis | 1st Line | 2nd Line | 3rd Line |
|-----------|----------|----------|----------|
| GDM | Diet + Exercise | Metformin/Glyburide | Insulin |
| Success rate | 70-80% | 10-20% additional | <5% need insulin |
| Monitoring | SMBG 4-6x/day, HbA1c q4-6 weeks | NST 2-3x/week, Growth scans | Insulin infusion in labor |

## Exam-Focus Complications

**Maternal**:
- Preeclampsia: 2-3 fold higher risk (with GDM)
- Polyhydramnios: 5-10% of GDM (vs 1% general pop)
- Urinary tract infection: ↑ risk (hyperglycemia ↓ immune function)
- Subsequent T2DM: 25-30% in 5 years

**Fetal/Neonatal**:
- Macrosomia: Birth weight >4 kg (10-25% of GDM vs 5% general)
- Shoulder dystocia: 2-3 fold risk (large shoulders impacted after head)
- Neonatal hypoglycemia: 5-15% (immediate post-delivery)
- Polycythemia: Fetal erythropoietin response to placental insufficiency
- Hyperbilirubinemia: From hemolysis of RBCs
- Respiratory distress: Transient tachypnea (hyperinsulinemia ↓ cortisol → delayed lung maturation)
- Perinatal loss: ↑ stillbirth risk if uncontrolled GDM

## Key Differences: GDM vs Pre-Gestational DM

| Feature | GDM | Pre-gestational DM |
|---------|-----|-------------------|
| Onset | During pregnancy | Pre-pregnancy |
| Diagnosis | OGTT 24-28 wks | Pre-pregnancy glucose/HbA1c |
| Congenital anomalies | Rare | 10% (caudal regression) |
| Macrosomia | 10-25% | 25-35% |
| Maternal complications | Preeclampsia, polyhydramnios | DKA, retinopathy, nephropathy |
| Postpartum | 70-75% normalize | Continue insulin/drugs |
| Long-term risk | 25-30% T2DM in 5y | Continued T2DM |

## Delivery Planning
**Vaginal delivery** if:
- Good glycemic control
- EFW <4500 g
- Normal pelvis
- No contraindications

**LSCS** if:
- EFW >4500 g
- Cephalopelvic disproportion
- Non-reassuring FHR
- Prior shoulder dystocia

**Labor management**:
- Insulin infusion: Target glucose 100-140 mg/dL
- Dextrose-free IV (avoid hyperglycemia)
- Check glucose hourly
- Neonatal team present for delivery

## Public Health Aspect (India)
- GDM prevalence: 16-18% (variable by region)
- Economic burden: Increased perinatal costs (NICU admission, prolonged stay)
- Prevention: Weight loss programs pre-conception, breastfeeding post-delivery (↓ T2DM risk)
- Screening: Universal per ICMR (ensures early detection, prevents complications)`,
        mnemonics: [
          { text: "ICMR 75g OGTT: Fasting ≥95 OR 2-hr ≥140 = GDM", explanation: "Single abnormal value sufficient" },
          { text: "GDM management: Diet (70-80%), then oral agents, then insulin", explanation: "Step-wise approach" },
          { text: "Macrosomia risks: Birth trauma, shoulder dystocia, neonatal hypoglycemia", explanation: "Main fetal complications" },
          { text: "25-30% GDM → T2DM in 5 years postpartum", explanation: "Long-term prognosis" }
        ],
        keyPoints: [
          "ICMR uses single-step OGTT (more sensitive for Indian population than two-step)",
          "Any one abnormal OGTT value = GDM diagnosis (not two required)",
          "Lifestyle modification successful in 70-80% (no pharmacotherapy needed)",
          "Macrosomia occurs in 10-25% of GDM (vs 5% in general population)",
          "Neonatal hypoglycemia risk requires early feeding within 30 min of birth",
          "Postpartum: Discontinue insulin immediately; most revert to normal glucose",
          "Annual screening recommended for all post-GDM women (prevent T2DM)"
        ],
        textbookRefs: [
          { book: "NMC Standard Textbook", chapter: "GDM: Screening, Diagnosis, Management", edition: "2024" },
          { book: "ICMR Guidelines", chapter: "Gestational Diabetes Mellitus", edition: "2024" }
        ]
      },
      {
        layer: 5,
        slug: "gestational-diabetes-layer-5-active-recall",
        title: "Gestational Diabetes - Active Recall",
        estimatedMinutes: 15,
        summary: "8 targeted Q&A covering GDM screening, diagnosis, management, fetal complications, and delivery planning.",
        contentMd: `# Gestational Diabetes - Active Recall

## Questions & Answers

**Q1: A 26-year-old primigravida at 24 weeks gestation is brought for routine antenatal care. She is asymptomatic with pre-pregnancy BMI 23. What is the next step?**
A: Perform 75g oral glucose tolerance test (OGTT) per ICMR guidelines (universal screening). All pregnant women are screened at 24-28 weeks regardless of risk factors or symptoms. OGTT fasting <95 mg/dL and 2-hour <140 mg/dL = normal; any value above these = GDM diagnosis (single abnormal value sufficient, not two required).

**Q2: OGTT results: Fasting 92 mg/dL, 2-hour 148 mg/dL. What is the diagnosis and first-line management?**
A: GDM diagnosed (2-hour glucose 148 mg/dL ≥140 mg/dL threshold). First-line management: Medical nutrition therapy (45-50% carbs, 20-25% protein, 25-30g fiber, 2000-2200 kcal/day) and exercise (150 min/week moderate activity). Home glucose monitoring: 6-point SMBG daily (fasting, pre-meals, 2-hr post-meals; targets: fasting <95, post-meal <140 mg/dL). Dietary counseling response: 70-80% achieve euglycemia; reassess in 2 weeks.

**Q3: After 2 weeks of diet and exercise, SMBG fasting still 105-110 mg/dL, post-meal 160-170 mg/dL. What is the next step?**
A: Pharmacotherapy indicated (failed lifestyle modification). Options: Metformin 1500-2500 mg/day (increases insulin sensitivity) or Glyburide 5-20 mg/day (stimulates β-cells). Metformin preferred in India if available (safety profile, lower GI side effects). Start with lower dose and titrate. Continue diet and exercise. Reassess SMBG after 1 week; HbA1c every 4-6 weeks.

**Q4: A mother with GDM at 28 weeks asks about fetal complications. What should you counsel?**
A: Main fetal risks: (1) Macrosomia (birth weight >4 kg, 10-25% incidence) → increased shoulder dystocia and birth trauma; (2) Neonatal hypoglycemia (loss of maternal glucose post-delivery, requires early feeding within 30 min); (3) Polycythemia and hyperbilirubinemia (fetal compensation for placental insufficiency); (4) Respiratory distress (transient tachypnea from delayed lung maturity); (5) Intrauterine death (rare, with very poor glycemic control). Risk reduction: Tight glycemic control during pregnancy normalizes most risks.

**Q5: At 36 weeks, the patient has achieved good glycemic control (SMBG fasting 85-95, post-meal 110-130 mg/dL). USG shows EFW 4.2 kg. When and how should she deliver?**
A: Deliver at 38-39 weeks (standard for GDM with good control). Vaginal delivery preferred (EFW 4.2 kg <4500 g threshold, reasonable pelvis expected). Indications for LSCS: EFW >4500 g, cephalopelvic disproportion, non-reassuring FHR, or prior shoulder dystocia. During labor: Insulin infusion to maintain glucose 100-140 mg/dL (prevent fetal hyperglycemia). Neonatal team present (risk of hypoglycemia, polycythemia).

**Q6: Immediately after vaginal delivery (normal labor), a healthy-appearing neonate is delivered. What is the most common neonatal complication to screen for?**
A: Neonatal hypoglycemia (5-15% of GDM births). Management: (1) Feed baby within 30 minutes of birth (breast or formula); (2) Check capillary glucose at 30 min, 60 min, 120 min post-delivery using glucometer; (3) Target glucose >45 mg/dL (<45 = symptomatic hypoglycemia risk); (4) If repeated low readings, start dextrose infusion. Other complications to monitor: Polycythemia (hematocrit >65%), hyperbilirubinemia, respiratory distress (transient tachypnea).

**Q7: After vaginal delivery, the mother experienced prolonged labor (18 hours, no complications). She previously required insulin for glycemic control. What about insulin postpartum?**
A: Discontinue insulin immediately postpartum (most women revert to euglycemia after placenta removal). Insulin requirements drop from pregnancy levels (0.5-1 unit/kg) back to pre-pregnancy levels or zero. No insulin needed during immediate puerperium unless she has pre-gestational diabetes. Perform glucose tolerance test at 6-12 weeks postpartum: fasting glucose, HbA1c, or OGTT. 75% revert to normal; 15-20% have impaired glucose tolerance; 5-10% develop T2DM.

**Q8: What is the long-term follow-up plan for a woman after GDM?**
A: Lifelong metabolic surveillance: (1) Annual fasting glucose or HbA1c; (2) OGTT every 3 years if HbA1c normal; (3) Preconception counseling (weight loss, exercise) before next pregnancy; (4) Lifestyle modification continues (weight loss targets, 150 min/week exercise, high-fiber diet); (5) Breastfeeding encouraged (reduces T2DM risk by 50%); (6) Risk: 25-30% develop T2DM within 5 years. Counsel about signs of diabetes (polyuria, polydipsia, blurred vision).`,
        mnemonics: [],
        keyPoints: [
          "ICMR recommends universal 75g OGTT at 24-28 weeks for all pregnant women",
          "Single abnormal OGTT value diagnostic of GDM (fasting ≥95 or 2-hr ≥140 mg/dL)",
          "Diet + exercise successful in 70-80%; only 20-30% need pharmacotherapy",
          "Macrosomia main fetal complication; linked to poor glycemic control",
          "Neonatal hypoglycemia requires feeding within 30 minutes; frequent glucose checks",
          "Postpartum: insulin discontinue immediately; 75% revert to normal glucose",
          "25-30% post-GDM women develop T2DM within 5 years; lifetime monitoring needed"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "GDM Management & Outcomes", edition: "9th" },
          { book: "ICMR Guidelines", chapter: "Gestational Diabetes: Complete Management", edition: "2024" }
        ]
      }
    ]
  }
];
