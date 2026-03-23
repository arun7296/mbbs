import type { TopicLessons } from "./content-loader";

export const obgPart3Lessons: TopicLessons[] = [
  {
    topicCode: "OG-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "antenatal-care-layer-1-foundation",
        title: "Antenatal Care - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of antenatal care principles, ANC schedule, and basic examinations in pregnancy.",
        contentMd: `# Antenatal Care - Foundation

## Definition and Goals

**Antenatal Care (ANC)**: Systematic clinical assessment, investigations, and counseling for pregnant women to optimize maternal and fetal health outcomes.

**Goals**: Identify high-risk pregnancies early, manage complications, prepare for delivery and newborn care, reduce MMR and infant mortality.

## WHO-Recommended ANC Schedule in India

- **First trimester**: 2 visits (before 13 weeks)
- **Second trimester**: 2 visits (13-28 weeks, one at 16-19 weeks)
- **Third trimester**: 3 visits (28-36 weeks fortnightly, then weekly)
- **Total minimum**: 7-8 visits for uncomplicated pregnancy

## Content of ANC Visits

**First visit (Booking)**:
- Complete obstetric and medical history
- General physical examination (BP, weight, height, pallor, edema)
- Obstetric examination
- Investigations: Blood group, Hb, RBS, serology (HIV, VDRL, HBsAg, HCV), urine

**Routine examinations**:
- First trimester: Confirm IUP, dating scan, Down syndrome screening
- Second trimester: Anomaly scan (18-22 weeks), GDM screening (24-28 weeks)
- Third trimester: Fetal well-being, Doppler if indicated

## Clinical Examination in Pregnancy

**Abdominal examination**:
- Fundal height measurement (symphysis-fundal distance)
- SFD = 9 cm + weeks of gestation (from 20 weeks)
- Palpation for contractions, tenderness

**Vital signs**: BP (baseline for pre-eclampsia detection), temperature, pulse

**Investigations at each visit**:
- BP and weight (screen for hypertension, excessive weight gain)
- Urine dipstick (protein, glucose, ketones)
- Fetal heart rate (Doppler from 10-12 weeks)

## Antenatal Screening Tests

**First trimester (11-13 weeks)**:
- Combined screening: PAPP-A, β-hCG, nuchal translucency
- Detection rate Down syndrome: 85-90%

**Second trimester (15-20 weeks)**:
- Quad screen: AFP, hCG, uE3, Inhibin-A
- Detection rate: 80%

**Detailed anomaly scan (18-22 weeks)**:
- Detects 80-90% of major structural anomalies

**GDM screening (24-28 weeks)**:
- 75g OGTT (fasting + 2 hour)
- Diagnosis if any value abnormal (fasting ≥92 mg/dL or 2-hour ≥153 mg/dL)`,
        mnemonics: [
          {
            text: "ANC SCHEDULE = 2-2-3 (first trimester 2 visits, second 2, third 3)",
            explanation: "WHO-recommended visit schedule"
          },
          {
            text: "SFD FORMULA = 9 + weeks from 20 weeks onward",
            explanation: "Quick fundal height estimation"
          },
          {
            text: "COMBINED SCREENING = PAPP-A, hCG, Nuchal translucency (11-13 weeks)",
            explanation: "First trimester screening components"
          },
          {
            text: "GDM DIAGNOSIS = Fasting ≥92 or 2-hr ≥153 mg/dL (≥1 abnormal = GDM)",
            explanation: "Diagnostic cutoffs in India (75g OGTT)"
          }
        ],
        keyPoints: [
          "Minimum 7-8 ANC visits for uncomplicated pregnancy per Indian guidelines",
          "Early first visit enables accurate dating and baseline assessment",
          "Anomaly screening at 18-22 weeks critical for detection of major defects",
          "GDM screening at 24-28 weeks identifies gestational diabetes requiring management",
          "Regular BP and urine checks detect pre-eclampsia and proteinuria",
          "Fundal height assessment is non-invasive screening for fetal growth"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Antenatal Care", edition: "9th" },
          { book: "Sheila Balakrishnan Textbook of Obstetrics", chapter: "Pregnancy Care", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "antenatal-care-layer-2-mechanism",
        title: "Antenatal Care - Mechanism",
        estimatedMinutes: 25,
        summary: "Physiological mechanisms of screening tests and risk stratification in pregnancy.",
        contentMd: `# Antenatal Care - Mechanism

## Risk Stratification

**Low-risk pregnancies**:
- Age 20-35, BMI 18.5-24.9
- No significant medical/obstetric history
- Singleton, cephalic presentation
- Normal antenatal course

**High-risk** (require specialist):
- Age <20 or >35
- BMI <18.5 or >30
- Prior complications (miscarriage, stillbirth)
- Medical conditions (diabetes, hypertension)
- Current pregnancy complications

## Screening Tests Mechanisms

**First Trimester Combined Screening**:
- PAPP-A (pregnancy-associated plasma protein A): Produced by placenta; increases in pregnancy
- β-hCG: Higher in Down syndrome pregnancies
- Nuchal translucency (NT): Fluid collection behind fetal neck; increased in Down syndrome
- Detection rate: 85-90% for Down syndrome

**Quad Screen (Second Trimester)**:
- AFP (alpha-fetoprotein): From fetus; increased in Down syndrome
- hCG: Elevated in Down syndrome
- uE3 (unconjugated estriol): Decreased in Down syndrome
- Inhibin-A: Elevated in Down syndrome
- Detection: 80% for Down syndrome

**Glucose Tolerance Test for GDM**:
- 75g OGTT at 24-28 weeks
- Measures maternal blood glucose response
- Diagnosis if fasting ≥92 mg/dL or 2-hour ≥153 mg/dL`,
        mnemonics: [
          {
            text: "COMBINED SCREENING = PAPP-A ↑, hCG ↑, NT ↑ in Down syndrome",
            explanation: "Marker patterns in aneuploidy"
          },
          {
            text: "QUAD SCREEN = AFP↑, hCG↑, uE3↓, Inhibin-A↑ in Down syndrome",
            explanation: "Second trimester marker pattern"
          },
          {
            text: "GDM = 75g OGTT; fasting ≥92 or 2-hr ≥153 mg/dL = diagnosis",
            explanation: "Indian diagnostic criteria"
          }
        ],
        keyPoints: [
          "First trimester screening most accurate for aneuploidy detection",
          "Risk assessment depends on maternal age, baseline risk, and test results",
          "Detailed anomaly scan at 18-22 weeks detects 80-90% of major anomalies",
          "GDM screening universal; affects 15-20% of Indian pregnancies",
          "Doppler studies assess placental function in high-risk cases"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Antenatal Investigations", edition: "9th" }
        ]
      },
      {
        layer: 3,
        slug: "antenatal-care-layer-3-clinical",
        title: "Antenatal Care - Clinical Management",
        estimatedMinutes: 30,
        summary: "Clinical management of specific issues: infections, counseling, nutrition, complications.",
        contentMd: `# Antenatal Care - Clinical Management

## Management of Infections

**Syphilis**: Penicillin G IM prevents congenital transmission
**HIV**: ART reduces vertical transmission to <2%
**Hepatitis B**: HBsAg+: Give HBIg and vaccine to neonate
**TB**: Continue TB drugs throughout (first-line agents safe)
**Asymptomatic bacteriuria**: Antibiotics reduce pyelonephritis risk from 20% to 1%

## Nutritional Counseling

**Micronutrient supplementation**:
- **Iron**: 400 mg (100 mg elemental) daily from 14 weeks
- **Folic acid**: 500 mcg daily (prevents neural tube defects)
- **Calcium**: 1200 mg daily
- **Iodine**: 150 mcg daily

**Dietary recommendations**:
- Energy: +250 kcal/day in second/third trimester
- Protein: 1.3 g/kg/day
- Iron-rich foods: Fortified foods, leafy greens, meat
- Avoid: Raw/undercooked meat, unpasteurized dairy, high-mercury fish

## Counseling

**Danger signs**: Vaginal bleeding, headache, epigastric pain, decreased movements
**Safe practices**: Avoid heavy lifting, maintain hygiene
**Harmful practices**: Smoking, alcohol, illicit drugs
**TT booster**: If due
**Institutional delivery**: Promote and plan

## Common ANC Issues

**Physiological edema**: Dependent areas; reassure if no associated features
**Varicose veins**: Support stockings, leg elevation
**Hemorrhoids**: Fiber-rich diet, stool softeners`,
        mnemonics: [
          {
            text: "DANGER SIGNS = Vaginal bleeding, Abdominal pain, Reduced fetal movement, headache, epigastric pain, Nausea/vomiting, swelling",
            explanation: "Red flag symptoms in pregnancy"
          },
          {
            text: "IRON + FOLIC ACID = Standard supplementation from first visit",
            explanation: "Universal micronutrient supplementation"
          }
        ],
        keyPoints: [
          "All pregnant women need iron and folic acid supplementation",
          "Folic acid 500 mcg reduces neural tube defects by 70%",
          "Institutional delivery with trained attendant is critical",
          "Mother must know danger signs and when to seek care",
          "BP and urine testing at each visit detect pre-eclampsia"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "General Management of Pregnancy", edition: "9th" }
        ]
      },
      {
        layer: 4,
        slug: "antenatal-care-layer-4-exam",
        title: "Antenatal Care - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Key facts and scenarios for ANC assessment in exams.",
        contentMd: `# Antenatal Care - Exam Preparation

## Key Facts

**ANC Schedule**: 2 first trimester, 2 second trimester (one 16-19 weeks), 3 third trimester = 7 minimum
**SFD at 28 weeks**: 9 + 28 = 37 cm
**Anomaly scan**: 18-22 weeks
**GDM screening**: 24-28 weeks, 75g OGTT
**Normal values**: SFD = 9 + weeks (±2-3 cm), AFI 5-25 cm

## Scenarios

1. **Woman at 10 weeks requesting dating**: Offer transvaginal ultrasound (±3 days accuracy)
2. **GDM suspicion**: Perform 75g OGTT; fasting ≥92 or 2-hour ≥153 = diagnosis
3. **Asymptomatic bacteriuria**: Treat with antibiotics to prevent pyelonephritis`,
        mnemonics: [
          {
            text: "UTZ SCANS = 11-13 (dating, NT), 18-22 (anatomy), 28 (growth, Doppler)",
            explanation: "Key ultrasound scan timings"
          }
        ],
        keyPoints: [
          "Minimum 7 ANC visits required for uncomplicated pregnancies",
          "First trimester screening most accurate for aneuploidy",
          "GDM affects 15-20% of Indian pregnancies; early detection crucial",
          "Asymptomatic bacteriuria must be treated",
          "ANC provides opportunity to promote institutional delivery"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Antenatal Care", edition: "9th" }
        ]
      },
      {
        layer: 5,
        slug: "antenatal-care-layer-5-recall",
        title: "Antenatal Care - Active Recall",
        estimatedMinutes: 15,
        summary: "Self-assessment Q&A on ANC concepts, investigations, and management.",
        contentMd: `# Antenatal Care - Active Recall

**Q1: What are components of first trimester combined screening?**

A: (1) Maternal serum PAPP-A and hCG, (2) Nuchal translucency on ultrasound, (3) Maternal age. Detects 85-90% of Down syndrome.

**Q2: Recommended ANC schedule in India?**

A: 2 visits first trimester (before 13 weeks), 2 in second trimester (one at 16-19 weeks), 3 in third trimester = 7-8 visits total.

**Q3: When is 75g OGTT performed for GDM? Diagnostic cutoffs?**

A: 24-28 weeks. Diagnosis if fasting ≥92 mg/dL OR 2-hour ≥153 mg/dL (only ONE abnormal value needed).

**Q4: What is expected SFD at 28 weeks?**

A: SFD = 9 + weeks = 9 + 28 = 37 cm.

**Q5: Investigations mandatory at first ANC visit?**

A: Blood group, Hb, blood glucose, serology (VDRL, HIV, HBsAg, HCV), urine routine and culture.

**Q6: How does treatment of asymptomatic bacteriuria reduce pyelonephritis?**

A: Asymptomatic bacteriuria increases pyelonephritis risk from 1% to 20-30%. Antibiotic treatment reduces back to <1%.

**Q7: Timing and significance of anomaly scan?**

A: 18-22 weeks; allows visualization of fetal anatomy; detects 80-90% of major anomalies.

**Q8: Danger signs in pregnancy requiring urgent evaluation?**

A: Vaginal bleeding, severe abdominal/epigastric pain, reduced fetal movements, severe headache, visual disturbances, swelling, seizures.

**Q9: NST (non-stress test) role in ANC?**

A: Assesses fetal heart rate variability and response to movements, indicating fetal well-being. Used from 32 weeks in high-risk pregnancies.

**Q10: What are key micronutrient supplements in pregnancy?**

A: Iron 400 mg (100 mg elemental), Folic acid 500 mcg, Calcium 1200 mg, Iodine 150 mcg daily.`,
        mnemonics: [
          {
            text: "ANC SCHEDULE = 2-2-3 visits",
            explanation: "Total 7-8 visits minimum"
          },
          {
            text: "GDM CUTOFFS = Fasting ≥92, 2-hr ≥153 mg/dL (75g OGTT)",
            explanation: "Indian diagnostic criteria"
          }
        ],
        keyPoints: [
          "Minimum 7 ANC visits recommended",
          "Booking visit includes full assessment and baseline investigations",
          "First trimester screening most accurate",
          "GDM screening mandatory at 24-28 weeks",
          "Regular monitoring detects complications early"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Antenatal Care", edition: "9th" }
        ]
      }
    ]
  }
];
