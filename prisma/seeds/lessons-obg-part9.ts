import type { TopicLessons } from "./content-loader";

export const obgLessonsPartNine: TopicLessons[] = [
  {
    topicCode: "OG-MOD-02-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "rh-iugr-layer-1-foundation",
        title: "Rh Incompatibility & IUGR - Foundation",
        estimatedMinutes: 20,
        summary: "Rh incompatibility occurs when Rh-negative mother develops antibodies against fetal Rh-positive blood, causing hemolysis and growth restriction. IUGR involves inadequate placental perfusion with multiple etiologies.",
        contentMd: `# Rh Incompatibility & IUGR - Foundation

## Rh Incompatibility (Hemolytic Disease of Newborn)

### Definition
**Rh disease**: Occurs when Rh-negative mother develops anti-D antibodies against fetal Rh-positive blood
- Mother: Rh-negative (lacks D antigen on RBCs)
- Fetus: Rh-positive (has D antigen inherited from father)

### Incidence
- **In India**: 5-10% of unbooked pregnancies (higher than developed countries due to lack of prophylaxis)
- **Neonatal mortality**: If untreated, 5-15% of severely affected infants die

### Primary vs Subsequent Sensitization
**First Pregnancy** (Primary Sensitization):
- Fetal-maternal hemorrhage (FMH) during delivery or placental separation
- Rarely causes significant hemolysis in first baby
- Mother develops IgG anti-D antibodies over weeks to months

**Subsequent Pregnancies** (Secondary Sensitization):
- Existing IgG antibodies cross placenta from early weeks
- Causes hemolysis of fetal RBCs
- Severity increases with each pregnancy
- Can lead to hydrops fetalis and fetal death

## IUGR Definition

**Intrauterine Growth Restriction (IUGR)**:
- **Estimated fetal weight <10th percentile** for gestational age
- **Severe IUGR**: <3rd percentile
- Birth weight <2.5 kg regardless of gestational age

### Classification
**Symmetric IUGR** (proportionate):
- All organs proportionally small
- Crown-rump length reduced
- Birth weight, length, head circumference all reduced
- Causes: Chromosomal abnormalities, infections (TORCH), genetic

**Asymmetric IUGR** (disproportionate):
- Brain-sparing phenomenon (preferential blood flow to brain)
- Normal head size, small body (low birth weight relative to length)
- Abdominal circumference markedly reduced
- Causes: Placental insufficiency, maternal hypertension, preeclampsia

## Risk Factors for IUGR
- Maternal: Age >35, smoking, hypertension, diabetes, preeclampsia, malnutrition
- Placental: Placental infarcts, abruption, previa
- Fetal: Chromosomal abnormalities, infections (CMV, toxoplasma), congenital anomalies
- Cord: Single umbilical artery, velamentous insertion`,
        mnemonics: [
          { text: "Rh sensitization: Primary (1st baby usually spared), Secondary (subsequent babies at risk)", explanation: "Pattern of disease severity" },
          { text: "IUGR types: Symmetric (proportionate, genetic/infection), Asymmetric (disproportionate, placental)", explanation: "Based on body proportions" },
          { text: "Anti-D prophylaxis 500 IU <12wks, 1,500 IU >12wks post-delivery in Rh-negative women", explanation: "Prevention of sensitization" }
        ],
        keyPoints: [
          "Rh disease mainly affects subsequent pregnancies after sensitization",
          "IUGR defined as EFW <10th percentile for gestation",
          "Symmetric IUGR from early insult (genetic, infection); asymmetric from late placental insufficiency",
          "Rh prophylaxis within 72 hours of delivery prevents 90-95% sensitization",
          "IUGR associated with increased fetal mortality and neonatal morbidity"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Rh Incompatibility and IUGR", edition: "9th" },
          { book: "Sheila Balakrishnan", chapter: "Complications of Pregnancy", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "rh-iugr-layer-2-mechanism",
        title: "Rh Incompatibility & IUGR - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of hemolysis in Rh disease and mechanisms of placental insufficiency leading to IUGR.",
        contentMd: `# Rh Incompatibility & IUGR - Mechanism

## Mechanism of Rh Sensitization

**Fetal-Maternal Hemorrhage** (FMH):
- Occurs during delivery, placental separation (up to 15 mL whole blood)
- Also after abortion, ectopic rupture, amniocentesis
- Fetal RBCs enter maternal circulation

**Maternal Immune Response**:
- Fetal D antigen → Maternal immune system recognizes as foreign
- **IgM antibodies** formed first (don't cross placenta)
- **IgG antibodies** develop over weeks-months (cross placenta)
- IgG crosses placenta in subsequent pregnancies

**Hemolysis Mechanism**:
- Maternal IgG binds fetal RBC D antigen
- Complement fixation + macrophage phagocytosis
- RBC lysis → hemoglobin release
- Unconjugated bilirubin accumulates (crosses fetal blood-brain barrier)

## Fetal Effects of Hemolysis

**Anemia**:
- RBC destruction faster than bone marrow replacement
- Fetal hemoglobin drops progressively
- Fetal hypoxia from reduced oxygen-carrying capacity

**Hydrops Fetalis** (if severe):
1. Anemia → Fetal hypoxia
2. Cardiac compensation → Increased cardiac output (tachycardia)
3. High-output cardiac failure → Edema, ascites, pleural effusion
4. Hepatosplenomegaly from extramedullary hematopoiesis
5. Hypoproteinemia (liver dysfunction) → Generalized edema
6. Death if untreated

**Kernicterus Risk**:
- Unconjugated hyperbilirubinemia crosses blood-brain barrier
- Bilirubin deposits in basal ganglia
- Permanent neurological damage (deafness, cerebral palsy, intellectual disability)

## Placental Insufficiency & IUGR

### Placental Causes of Insufficiency
- **Reduced placental area**: Infarction, abruption, previa
- **Reduced uteroplacental perfusion**: Maternal hypertension, preeclampsia, vasculitis
- **Impaired diffusion**: Placental thickening, edema (infection)
- **Reduced fetal perfusion**: Oligohydramnios, cord compression

### Fetal Response to Hypoxia
**Acute hypoxia** → Fetal reflex response:
- Peripheral vasoconstriction → Decreased skin/limb perfusion
- **Brain-sparing**: Vasodilation of cerebral vessels
- Continued high blood flow to brain, heart, adrenals

**Chronic hypoxia** → Metabolic adaptation:
- Reduced fetal movement (conserve oxygen)
- Growth restriction (reduced anabolic processes)
- Oligohydramnios (reduced urine production)

### Umbilical Artery Doppler Changes
**Normal**: Diastolic flow present throughout cardiac cycle

**Abnormal patterns** (worsen progressively):
1. **Increased pulsatility index (PI)**: Increased resistance (early finding)
2. **Reduced diastolic flow**: Further resistance increase
3. **Absent end-diastolic flow** (AEDF): Severe placental dysfunction
4. **Reversed end-diastolic flow** (REDF): Critical; fetal death imminent

## Umbilical Vein Flow Changes
- **Normal**: Continuous forward flow
- **Pulsatile umbilical vein flow**: Suggests cardiac failure, fetal hydrops
- **Reversed flow**: Severe decompensation

## Cerebral Artery Doppler
- **Normal**: High resistance (low diastolic flow)
- **Increased diastolic flow** (brain-sparing): Fetal response to hypoxia
- Cerebral artery PI falls while umbilical artery PI rises
- **Cerebroplacental ratio**: Ratio of cerebral PI to umbilical PI
  - Ratio <1 suggests brain-sparing (ominous sign)`,
        mnemonics: [
          { text: "Rh hemolysis: IgM first (no placenta cross), then IgG (crosses placenta in next pregnancy)", explanation: "Timeline of antibody response" },
          { text: "Hydrops cascade: Anemia → Hypoxia → Heart failure → Edema → Death", explanation: "Pathophysiology chain" },
          { text: "Umbilical Doppler worsening: PI↑, Diastolic↓, AEDF (absent), REDF (reversed)", explanation: "Progressive placental insufficiency" }
        ],
        keyPoints: [
          "IgG antibodies cross placenta; IgM does not (explains sparing of first baby)",
          "Hemolysis causes anemia, hyperbilirubinemia, and risk of kernicterus",
          "Hydrops fetalis = severe anemia causing heart failure with edema, ascites, effusions",
          "Brain-sparing is fetal compensation but sign of severe hypoxia",
          "REDF on umbilical artery Doppler indicates critical fetal condition"
        ],
        textbookRefs: [
          { book: "Williams Obstetrics", chapter: "Hemolytic Disease of Newborn and IUGR", edition: "26th" },
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Pathophysiology", edition: "9th" }
        ]
      },
      {
        layer: 3,
        slug: "rh-iugr-layer-3-clinical",
        title: "Rh Incompatibility & IUGR - Clinical Management",
        estimatedMinutes: 35,
        summary: "Management of Rh disease, fetal monitoring, intrauterine transfusion, and management of IUGR with delivery planning.",
        contentMd: `# Rh Incompatibility & IUGR - Clinical Management

## Management of Rh Incompatibility

### Prevention: Anti-D Prophylaxis
**Timing of FMH**:
- Most common: Delivery (80% occur at delivery)
- Sensitizing events: Abortion, amniocentesis, ectopic rupture, abruption, trauma

**Anti-D prophylaxis regimens**:
- **<12 weeks**: 100-120 IU/kg (usually 500 IU IM or IV)
- **≥12 weeks**: 100-120 IU/kg (usually 1,000-1,500 IU IM or IV)
- **Massive FMH**: Kleihauer-Betke test estimates FMH volume; 1 mL fetal RBCs = 500 IU anti-D needed
- **Timing**: Within 72 hours of sensitizing event (efficacy decreases after 72 hours)

### Monitoring Sensitized (Rh-negative) Pregnant Women
**Already sensitized** (has anti-D antibodies):
- Indirect Coombs test (antibody screening): Quantify anti-D titer
- **Titers >1:16**: Increased risk of severe fetal hemolysis
- Serial titers every 4 weeks if low risk, every 2 weeks if titer >1:16

**Fetal monitoring** (if antibody positive):
- Ultrasound: Weekly if titer >1:16 (assess for hydrops, AFI, growth)
- **Hydrops signs**: Ascites, pericardial effusion, pleural effusion, skin edema, polyhydramnios
- **Growth**: Monitor for IUGR (but growth usually normal until decompensation)
- Umbilical artery Doppler: If hydrops suspected

### Intrauterine Transfusion (IUT)
**Indication**: Hydrops fetalis or severe anemia (Hb <70 g/L) with risk of cardiac failure

**Method**:
- **Intravascular transfusion** (IVT): Direct transfusion into fetal umbilical vein (percutaneous umbilical blood sampling - PUBS)
- **Intraperitoneal transfusion** (IPT): Less common now; transfusion into fetal peritoneal cavity

**Procedure**:
- Ultrasound-guided, fetal anesthesia (local + systemic)
- Type O, Rh-negative blood (low hemoglobin, albumin to prevent volume overload)
- Target Hb: 140-180 g/L (compensate for ongoing hemolysis)
- Success rate: 90-95% survive if done appropriately
- Repeat transfusions every 2-3 weeks as needed until viability/delivery

**Complications**: Infection, fetal bradycardia, fetal death (1-2% procedure-related mortality)

## Management of IUGR

### Diagnosis
**Ultrasound findings**:
- Estimated fetal weight <10th percentile for gestation
- Severe IUGR: <3rd percentile
- Abdominal circumference reduced (brain-sparing pattern)
- Oligohydramnios (AFI <5 cm)

**Doppler assessment**:
- Umbilical artery: Normal, increased PI, AEDF, or REDF
- Middle cerebral artery: PI (low = brain-sparing)
- Cerebroplacental ratio: <1 suggests brain-sparing

### Management by Gestational Age

**<28 weeks**:
- Counsel about extremely high mortality/morbidity
- Option for termination (if lethal anomaly confirmed)
- If continuing: Weekly ultrasound, Doppler assessment
- Plan delivery if Doppler worseningly critical (REDF) or at viability (28 weeks)

**28-32 weeks**:
- Weekly ultrasound + Doppler
- Corticosteroids for fetal lung maturity
- Delivery if: REDF develops, hydrops appears, oligohydramnios severe, or abnormal CTG
- Otherwise continue pregnancy if Doppler stable

**32-37 weeks**:
- Twice-weekly ultrasound + Doppler, NST
- Delivery if: Abnormal Doppler (especially REDF), oligohydramnios, abnormal CTG
- Consider delivery at 37 weeks if persistently abnormal Doppler

**≥37 weeks**:
- Deliver (continue pregnancy risk exceeds benefit at term)

### Intrapartum Management of IUGR
- Continuous CTG monitoring (IUGR fetuses have poor reserve)
- Prepare for operative delivery (cesarean section) if FHR abnormalities
- Pediatric team present at delivery (risk of depression, need for resuscitation)

### Neonatal Management of Rh Disease
**Phototherapy**:
- Start if bilirubin >phototherapy threshold for postnatal age
- Intensive phototherapy for higher bilirubin levels

**Exchange transfusion**:
- Indicated if bilirubin threatens neurological damage (kernicterus risk)
- Type O, Rh-negative blood (or crossmatched with infant serum)

**Monitoring**:
- Serial bilirubin levels every 3-6 hours initially
- Hematocrit (anemia may require transfusion)
- Reticulocyte count (marrow response to hemolysis)`,
        mnemonics: [
          { text: "Anti-D dosing: 500 IU <12wks, 1,500 IU >12wks, within 72 hours", explanation: "Prophylaxis timing and dose" },
          { text: "IUT indication: Hydrops OR Hb <70 g/L (critical anemia)", explanation: "When to transfuse fetus" },
          { text: "IUGR delivery: <28wks counsel/terminate, 28-32wks if stable, 32-37wks if Doppler abnormal, ≥37wks deliver", explanation: "Gestational age-based management" }
        ],
        keyPoints: [
          "Anti-D prevents sensitization if given within 72 hours of sensitizing event",
          "Antibody titers >1:16 indicate risk of severe fetal hemolysis",
          "Intrauterine transfusion 90-95% successful if done appropriately",
          "IUGR management depends on gestational age and Doppler findings",
          "REDF on umbilical artery is critical finding; delivery typically indicated",
          "Phototherapy and exchange transfusion prevent kernicterus in affected newborns"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Management of Rh Disease and IUGR", edition: "9th" },
          { book: "FOGSI Clinical Guidelines", chapter: "Intrauterine Growth Restriction", edition: "2024" }
        ]
      },
      {
        layer: 4,
        slug: "rh-iugr-layer-4-exam",
        title: "Rh Incompatibility & IUGR - Exam Prep",
        estimatedMinutes: 25,
        summary: "Exam-focus topics: Prevention, diagnosis, fetal monitoring, management algorithms, and complications.",
        contentMd: `# Rh Incompatibility & IUGR - Exam Prep

## Prevention of Rh Sensitization

**Anti-D Dosing by Gestation**:
- **<12 weeks**: 100-120 IU/kg (usually 500 IU)
- **≥12 weeks**: 100-120 IU/kg (usually 1,000-1,500 IU)
- **Massive FMH**: Kleihauer-Betke test; 1 mL fetal blood = 500 IU anti-D

**Timing**: Within 72 hours of sensitizing event (efficacy decreases after 72 hours)

**Sensitizing events**:
- Delivery, abortion, amniocentesis, ectopic rupture, placental abruption, abdominal trauma

## Monitoring Sensitized Pregnancies

| Finding | Action |
|---------|--------|
| Anti-D titer <1:16 | Routine antenatal care, repeat serology at 28 weeks |
| Anti-D titer 1:16-1:32 | Weekly ultrasound from 28 weeks |
| Anti-D titer >1:32 | Weekly ultrasound + Doppler from 20-24 weeks |
| Ultrasound: Hydrops | IUT or delivery, depending on gestation |
| Ultrasound: Normal | Continue pregnancy if Doppler normal |

## Fetal Assessment in Rh Disease

**Ultrasound Signs of Severe Disease**:
- Ascites (earliest sign of hydrops)
- Pericardial effusion
- Pleural effusion
- Skin edema (>6 mm)
- Hepatomegaly, splenomegaly
- Polyhydramnios

**Doppler Findings** (if IUT needed):
- Elevated middle cerebral artery peak systolic velocity (MCA-PSV >1.5 multiples of median) suggests moderate-severe anemia

## IUGR Classification & Management

**Symmetric vs Asymmetric**:
| Type | Features | Causes |
|------|----------|--------|
| **Symmetric** | Proportionate small, normal head | Chromosomal, infections, genetic |
| **Asymmetric** | Small body, normal head (brain-sparing) | Placental insufficiency, HTN, preeclampsia |

**Delivery Timing by Doppler**:
- **Normal Doppler**: Continue pregnancy
- **Abnormal (increased PI)**: Ultrasound 1-2x/week, consider delivery at 37 weeks
- **AEDF (absent end-diastolic flow)**: Delivery at 32-34 weeks if steroids given
- **REDF (reversed end-diastolic flow)**: Delivery as soon as feasible (usually <30 weeks)

## Complications of IUGR

**In utero**:
- Stillbirth (5-10x higher risk than appropriate for gestational age)
- Oligohydramnios (adverse sign)

**Neonatal**:
- Hypoglycemia (poor glycogen stores)
- Polycythemia (from chronic fetal hypoxia)
- Meconium aspiration (stress in utero)
- Hypothermia (poor fat stores)
- Pulmonary hemorrhage (severe cases)

**Long-term**:
- Neurodevelopmental impairment (if severe/prolonged hypoxia)
- Growth catch-up usually by 2-3 years if mild-moderate

## India-Specific Points

- **Rh incidence**: 5-10% of unbooked pregnancies (higher than developed countries)
- **Anti-D availability**: Ensure stock at delivery units
- **IUT availability**: Limited to tertiary centers in India
- **Prevention emphasis**: Awareness campaigns for early booking, anti-D prophylaxis
- **High-risk populations**: Previous pregnancy loss, repeat sensitization in multipara`,
        mnemonics: [
          { text: "Anti-D timing: <72 hours from sensitizing event", explanation: "Window for prophylaxis" },
          { text: "Doppler worsening: Normal → ↑PI → AEDF → REDF (critical)", explanation: "Progression of insufficiency" },
          { text: "IUT needed: Hydrops OR MCA-PSV >1.5 multiples median (severe anemia)", explanation: "Indications" },
          { text: "REDF = deliver ASAP (usually <30 weeks if present)", explanation: "Most critical finding" }
        ],
        keyPoints: [
          "Anti-D prophylaxis 500 IU <12 weeks, 1,500 IU >12 weeks, within 72 hours",
          "First baby with Rh disease usually spared; subsequent babies at risk",
          "Antibody titer >1:16 indicates risk of fetal hemolysis",
          "IUGR diagnosed as EFW <10th percentile; brain-sparing suggests placental insufficiency",
          "REDF on umbilical artery is critical finding; urgent delivery needed",
          "IUT 90-95% successful; phototherapy/exchange transfusion prevent kernicterus"
        ],
        textbookRefs: [
          { book: "NMC Standard Textbook", chapter: "Rh Disease & IUGR Management", edition: "2024" },
          { book: "FOGSI Clinical Guidelines", chapter: "Hemolytic Disease and Growth Restriction", edition: "2024" }
        ]
      },
      {
        layer: 5,
        slug: "rh-iugr-layer-5-active-recall",
        title: "Rh Incompatibility & IUGR - Active Recall",
        estimatedMinutes: 15,
        summary: "8 key Q&A on Rh disease prevention, monitoring, IUGR management, and complications.",
        contentMd: `# Rh Incompatibility & IUGR - Active Recall

## Questions & Answers

**Q1: A 28-year-old Rh-negative multiparous woman at 32 weeks presents with no symptoms. Indirect Coombs test shows anti-D antibody titer 1:32. What is the management?**
A: **Interpretation**: Titer 1:32 indicates moderate risk of fetal hemolysis. **Management**: (1) Weekly ultrasound + Doppler from now until delivery, (2) Assess for hydrops (ascites, pericardial/pleural effusion, skin edema, hepatomegaly), (3) Measure middle cerebral artery peak systolic velocity (MCA-PSV) to screen for anemia (>1.5 multiples median suggests moderate-severe anemia), (4) If MCA-PSV elevated or hydrops present → Consider intrauterine transfusion, (5) Plan for neonatal team at delivery and prepare for phototherapy/exchange transfusion, (6) Deliver at 37 weeks if pregnancy goes uncomplicated (don't continue beyond term with sensitization).

**Q2: During routine antenatal visit, a 24-year-old at 28 weeks is found to be Rh-negative. Partner is Rh-positive. Previous pregnancy history: miscarriage at 8 weeks (spontaneous) 2 years ago, no anti-D given. What is her risk?**
A: **High risk of sensitization from previous pregnancy loss**. Without anti-D prophylaxis after miscarriage, she likely developed antibodies. **Assessment**: (1) Obtain indirect Coombs test (likely positive given history), (2) If positive: Quantify titer (predict fetal risk), (3) Begin weekly ultrasound + Doppler monitoring (if titer >1:16), (4) Manage as sensitized pregnancy. **Counseling**: "Your previous loss put you at risk for developing antibodies. We need to monitor this pregnancy carefully. Fortunately, if we catch any problems, we have treatments available (transfusion into the baby)."

**Q3: On routine ultrasound, a fetus with known anti-D positive mother is found to have ascites and pericardial effusion at 24 weeks. What does this indicate and what is management?**
A: **Diagnosis**: **Hydrops fetalis** (severe hemolytic disease). Ascites and pericardial effusion indicate severe anemia causing cardiac failure. **Management**: (1) Assess severity with MCA-PSV or cordocentesis (fetal blood sample to measure Hb), (2) If severe anemia (Hb <70 g/L): **Intrauterine transfusion** (IUT) indicated → Percutaneous umbilical blood sampling (PUBS), transfuse type O Rh-negative blood into umbilical vein, (3) Target Hb 140-180 g/L, (4) Counsel parents about risks (1-2% IUT mortality) vs benefits (prevents fetal death), (5) Repeat IUT every 2-3 weeks as fetal hemolysis continues.

**Q4: Explain why the first baby with Rh incompatibility is usually spared while subsequent babies are severely affected.**
A: **First baby usually spared**: During first pregnancy, mother has NOT yet developed anti-D antibodies (sensitization occurs at delivery). IgM antibodies (first immune response) do NOT cross placenta. By term of first pregnancy, some IgG may be developing but usually insufficient to cause severe disease. **Subsequent babies at risk**: IgG antibodies from sensitized mother cross placenta early in pregnancy. IgG causes hemolysis (binds fetal D antigen → complement fixation → RBC destruction). Disease progressively worse with each subsequent affected pregnancy (increasing IgG titers, secondary immune response).

**Q5: An Rh-negative woman delivers an Rh-positive baby. Mother has no anti-D antibodies. When and how should anti-D be given?**
A: **Anti-D should be given within 72 hours of delivery** (efficacy decreases after 72 hours). **Dosing**: (1) Standard dose for delivery 1,000-1,500 IU IM (or IV), (2) **BUT first check for massive fetal-maternal hemorrhage**: Kleihauer-Betke test (estimates FMH volume), (3) If FMH >4 mL fetal RBCs (8 mL whole blood): Calculate additional anti-D needed (1 mL fetal RBCs requires 500 IU anti-D). **Example**: If Kleihauer shows 1% fetal cells = ~5 mL fetal RBCs = 2,500 IU anti-D needed (standard 1,500 + extra 1,000), (4) Verify **direct antiglobulin test (DAT) negative** in baby (confirms no hemolysis), (5) Document anti-D prophylaxis in notes.

**Q6: A 34-year-old at 30 weeks with IUGR (EFW 1,200 g, <3rd percentile) has umbilical artery Doppler showing absent end-diastolic flow (AEDF). When should she deliver?**
A: **AEDF = significant placental insufficiency; fetus at high risk**. **Delivery timing**: (1) **At 30 weeks with AEDF**: Weigh risks: (a) Continue pregnancy = risk of stillbirth (10-15% with AEDF), (b) Deliver now = neonatal risks from prematurity (respiratory distress ~90%, BPD, IVH, NEC risk), (2) **Recommended**: Administer corticosteroids (betamethasone/dexamethasone) to accelerate fetal lung maturity, (3) Deliver at **32-34 weeks** if Doppler stable or slightly worsens, earlier if **REDF** develops or oligohydramnios severe, (4) Counsel about neonatal risks and survival rates (80-90% survive at 30 weeks with NICU care).

**Q7: Define "brain-sparing" pattern on Doppler. Why does it occur and what does it mean?**
A: **Brain-sparing pattern**: Middle cerebral artery (MCA) Doppler shows low pulsatility index (high diastolic flow), while umbilical artery shows high pulsatility index (low diastolic flow). **Why it occurs**: Fetal response to chronic hypoxia → preferential blood flow redistribution to vital organs (brain, heart, adrenals) at expense of peripheral organs, gut, kidneys. **What it means**: (1) Fetus is compensating for placental insufficiency, (2) **Ominous sign**: Indicates fetal stress, (3) **Cerebroplacental ratio** <1 (brain PI / umbilical PI) strongly suggests significant fetal compromise, (4) Delivery usually advised, (5) Risk of stillbirth and neonatal morbidity increased.

**Q8: What are the neonatal complications of IUGR and how are they prevented/managed?**
A: **Neonatal complications of IUGR**: (1) **Hypoglycemia**: From poor glycogen stores; prevented by early feeding (breast or formula), frequent glucose monitoring, (2) **Polycythemia**: Fetal compensation for chronic hypoxia; managed by controlled volume dilution (phlebotomy or transfusion), (3) **Meconium aspiration**: From intrauterine stress; prevented by delivery room suctioning, may need intubation/mechanical ventilation, (4) **Hypothermia**: From poor fat stores; managed by skin-to-skin contact, maintaining temperature, (5) **Pulmonary hemorrhage**: Severe cases; supportive care, (6) **Intellectual/neurodevelopmental impairment**: If severe prolonged hypoxia; early intervention, developmental assessment at 18-24 months. **Prevention**: Appropriate timing of delivery, avoiding prolonged hypoxia.`,
        mnemonics: [],
        keyPoints: [
          "Anti-D prophylaxis 500 IU <12 weeks, 1,500 IU >12 weeks, within 72 hours of delivery",
          "First Rh disease baby usually spared (IgM doesn't cross placenta); subsequent babies at risk",
          "Titer >1:16 indicates risk of fetal hemolysis; requires monitoring",
          "IUGR = EFW <10th percentile; management depends on Doppler findings",
          "REDF most critical finding; deliver as soon as feasible (usually <30 weeks)",
          "Brain-sparing = fetal compensation for hypoxia; high risk of adverse outcome",
          "IUT 90-95% successful for severe fetal anemia; prevents fetal death",
          "Neonatal hypoglycemia and polycythemia common in IUGR; manage with early feeding and monitoring"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Rh Disease & IUGR", edition: "9th" },
          { book: "FOGSI Clinical Guidelines", chapter: "Intrauterine Growth Restriction Management", edition: "2024" }
        ]
      }
    ]
  }
];
