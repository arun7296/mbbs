import type { TopicLessons } from "./content-loader";

export const obgPart1Lessons: TopicLessons[] = [
  {
    topicCode: "OG-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "pregnancy-diagnosis-foundation",
        title: "Diagnosis & Duration of Pregnancy - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of signs of pregnancy, hormonal and clinical markers, and methods for dating pregnancy accurately.",
        contentMd: `# Diagnosis & Duration of Pregnancy - Foundation

## Signs of Pregnancy

### Presumptive Signs (Patient-Reported)
- **Amenorrhea**: Most reliable early sign; first sign in 99% of pregnant women
- **Nausea & vomiting**: Usually 4-6 weeks, worse mornings (morning sickness)
- **Fatigue**: From progesterone elevation
- **Breast tenderness**: From hormonal stimulation of breast tissue
- **Urinary frequency**: From increased GFR and pelvic congestion
- **Constipation**: From progesterone effect on GI motility

### Probable Signs (Clinical Examination)
- **Goodell's sign**: Softening of cervix
- **Chadwick's sign**: Bluish discoloration of vagina
- **Hegar's sign**: Softening of isthmus between cervix and fundus
- **Braxton Hicks**: Irregular uterine contractions
- **Abdominal enlargement**: Visible from 12-14 weeks
- **Linea nigra**: Dark line on abdomen from umbilicus downward

### Positive Signs (Confirm Pregnancy)
- **Fetal heart sounds**: By Doppler from 10-12 weeks
- **Fetal movements felt by examiner**: From 20 weeks
- **Fetal parts visible on ultrasound**: From 8-10 weeks

## Laboratory Diagnosis

### Human Chorionic Gonadotropin (hCG)
- **Urine hCG**: Detectable by 3-4 weeks (LMP)
- **Serum beta-hCG**: More sensitive; quantifiable
- **Doubling every 48-72 hours**: In normal intrauterine pregnancy

## Ultrasonography (Gold Standard)

### Timeline of Findings
- **4-5 weeks**: Gestational sac visible (2-3 mm)
- **5 weeks**: Yolk sac visible (confirms intrauterine pregnancy)
- **6-7 weeks**: Fetal pole and cardiac activity visible
- **Accuracy**: ±3 days in first trimester

## Duration of Pregnancy

### Naegele's Rule
- Add 7 days to first day of LMP
- Subtract 3 months
- Expected gestational period: 40 weeks (280 days) from LMP

### Trimester Divisions
- **First trimester**: 0-13 weeks + 6 days
- **Second trimester**: 14-27 weeks + 6 days
- **Third trimester**: 28-42 weeks

### Term Definitions
- **Term**: 37-40 weeks
- **Early term**: 37-39 weeks
- **Full term**: 39-40 weeks
- **Post-term**: >42 weeks`,
        mnemonics: [
          {
            text: "PRESUMPTIVE = Amenorrhea, Nausea, Fatigue, Breast tenderness, urinary frequency, Vomiting",
            explanation: "Patient-reported signs of pregnancy"
          },
          {
            text: "PROBABLE = Goodell (softening), Chadwick (coloration), Hegar (softness), Braxton Hicks",
            explanation: "Clinical examination signs of pregnancy"
          },
          {
            text: "NAEGELE'S RULE = +7 days, -3 months from LMP first day",
            explanation: "Quick calculation for estimated due date"
          },
          {
            text: "hCG DOUBLING = Every 48-72 hours in early pregnancy indicates viability",
            explanation: "Key marker of viable intrauterine pregnancy"
          }
        ],
        keyPoints: [
          "Amenorrhea is the earliest and most reliable presumptive sign of pregnancy",
          "Positive signs (fetal heart, movements, ultrasound visualization) confirm pregnancy",
          "hCG levels double every 48-72 hours in normal early intrauterine pregnancy",
          "First trimester ultrasound is most accurate for dating (±3 days)",
          "Naegele's rule is simple and reliable if LMP known and cycles regular",
          "Transvaginal ultrasound detects pregnancy 1-2 weeks earlier than transabdominal"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Diagnosis of Pregnancy", edition: "9th" },
          { book: "Sheila Balakrishnan Textbook of Obstetrics", chapter: "Signs & Diagnosis of Pregnancy", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "pregnancy-diagnosis-mechanism",
        title: "Diagnosis & Duration of Pregnancy - Mechanism",
        estimatedMinutes: 25,
        summary: "Physiological mechanisms of pregnancy signs, hormonal basis, and molecular basis of pregnancy tests.",
        contentMd: `# Diagnosis & Duration of Pregnancy - Mechanism

## Physiological Basis of Pregnancy Signs

### Amenorrhea Mechanism
- Ovulation day 14; conception within 24 hours
- hCG from trophoblast reaches detectable levels 6-8 days post-conception
- hCG sustains corpus luteum beyond normal 14-day lifespan
- Progesterone suppresses FSH/LH → No new follicular development → No menstrual cycle

### Nausea and Vomiting
- **hCG role**: Peak hCG correlates with peak nausea (8-10 weeks)
- **Thyroid involvement**: Transient increase in free T4
- **Gastric dysmotility**: Progesterone reduces gastric motility

### Breast Changes
- **Estrogen**: Stimulates ductal development
- **Progesterone**: Stimulates alveolar proliferation
- **Increased blood flow**: Causes engorgement

### Urinary Frequency
- **Increased GFR**: By 50% from increased renal plasma flow
- **Pelvic congestion**: Engorgement of bladder from increased blood flow
- **Compression**: As uterus enlarges, bladder capacity decreases

## Hormonal Markers

### Human Chorionic Gonadotropin (hCG)
- **Source**: Syncytiotrophoblast within trophoblast
- **Begins**: Within 24-48 hours of conception
- **Serum detection**: 6-8 days after conception
- **Urine detection**: 10-14 days after conception
- **Peak**: 8-10 weeks (100,000-200,000 mIU/mL)

### Progesterone
- **Source**: Corpus luteum first 8 weeks, then placenta (8+ weeks)
- **Role**: Suppresses contractions, maintains endometrium, immunomodulatory

## Dating by Ultrasound Accuracy

| Gestation | Measurement | Accuracy |
|-----------|-------------|----------|
| <13 weeks | Crown-rump length | ±3 days |
| 13-20 weeks | Femur length, biparietal diameter | ±1 week |
| 20-30 weeks | Femur length, abdominal circumference | ±2-3 weeks |
| >30 weeks | Estimated fetal weight | ±3-4 weeks |`,
        mnemonics: [
          {
            text: "hCG TIMELINE = Conceived day 0 → detectable serum day 6-8 → urine test positive day 10-14",
            explanation: "Timeline of hCG detection after conception"
          },
          {
            text: "hCG ROLE = Maintains corpus luteum → Progesterone production → Endometrial support",
            explanation: "Mechanism by which hCG sustains early pregnancy"
          },
          {
            text: "CRL ACCURACY = ±3 days in first trimester, ±1 week in second, ±3-4 weeks in third",
            explanation: "Decreasing accuracy of ultrasound dating by trimester"
          },
          {
            text: "PROGESTERONE SOURCES = Corpus luteum first 8 weeks, then Placenta (8+ weeks)",
            explanation: "Transition in progesterone production during pregnancy"
          }
        ],
        keyPoints: [
          "hCG production begins within 24-48 hours of conception from trophoblast",
          "hCG maintains corpus luteum beyond its normal 14-day lifespan via stimulation of progesterone",
          "Peak hCG at 8-10 weeks correlates with peak morning sickness",
          "Progesterone from corpus luteum transitions to placental production at 8-10 weeks",
          "First trimester ultrasound is most accurate dating method (±3 days)",
          "Fetal cardiac activity on ultrasound is first definitive sign of viable intrauterine pregnancy"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Diagnosis of Pregnancy", edition: "9th" },
          { book: "Robbins & Kumar Pathologic Basis of Disease", chapter: "Female Genital Tract", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "pregnancy-diagnosis-clinical",
        title: "Diagnosis & Duration of Pregnancy - Clinical Application",
        estimatedMinutes: 25,
        summary: "Clinical assessment of pregnancy dating accuracy, management of dating discrepancies, and dating in special scenarios.",
        contentMd: `# Diagnosis & Duration of Pregnancy - Clinical Application

## Clinical Dating Assessment

### History Taking
- **First day of LMP**: Most important historical element
- **Cycle length & regularity**: Regular cycles most reliable
- **Certainty of LMP**: Scale from certain to uncertain
- **Contraceptive use**: Recent hormonal use affects dating reliability

### Clinical Examination for Dating

**Expected fundal height**:
- 8 weeks: Uterus just palpable above symphysis
- 12 weeks: Fundus at symphysis-pubic junction
- 20 weeks: Fundus at umbilicus
- 32 weeks: 3 fingerbreadths above umbilicus

**Biometric assessment**:
- Symphysis-fundal distance (SFD) in cm = weeks of gestation (from 20 weeks, ±2-3 cm)
- Most accurate clinically: ±4 weeks in third trimester

### Ultrasound Dating in Clinical Practice

**First trimester (0-13 weeks)**:
- Method: Crown-rump length (CRL) measurement
- Accuracy: ±3 days
- Best timing: 11-13 weeks
- Use for: Confirming EDD, ruling out ectopic

**Second trimester (14-27 weeks)**:
- Measurements: Femur length (FL), biparietal diameter (BPD)
- Accuracy: ±1-2 weeks
- Best performed: 13-20 weeks

**Third trimester (28+ weeks)**:
- Accuracy: ±3-4 weeks (much less accurate)
- Value: Limited for dating; better for growth assessment

## Management of Dating Discrepancies

### Discrepancy Thresholds
- **First trimester**: LMP vs ultrasound differs by >2 weeks = significant
- **Second trimester**: LMP vs ultrasound differs by >3 weeks = significant
- **Third trimester**: LMP vs ultrasound differs by >4 weeks = significant

### Management Algorithm
If LMP reliable and ultrasound confirms: Use ultrasound (most accurate)
If LMP unreliable: Use ultrasound exclusively, preferably first trimester`,
        mnemonics: [
          {
            text: "SFD RULE = SFD (cm) = weeks of gestation (from 20 weeks); ±2-3 cm accuracy",
            explanation: "Quick clinical assessment of gestational age by fundal height"
          },
          {
            text: "DISCREPANCY THRESHOLDS = 1st trim: >2 weeks | 2nd trim: >3 weeks | 3rd trim: >4 weeks",
            explanation: "When LMP-ultrasound discrepancy is significant"
          },
          {
            text: "CRL BEST DATING = First trimester; ±3 days accuracy (most accurate period)",
            explanation: "Optimal timing and method for ultrasound dating"
          },
          {
            text: "TERM DEFINITION = ≥37 weeks; Full term ≥39 weeks; Post-date >42 weeks",
            explanation: "Key gestational age thresholds for clinical management"
          }
        ],
        keyPoints: [
          "First trimester ultrasound dating is most accurate (±3 days); use preferentially when available",
          "Symphysis-fundal distance in cm approximates weeks from 20 weeks onward (±2-3 cm)",
          "Significant dating discrepancies require reassessment and may indicate growth restriction",
          "Accurate dating is essential for antenatal screening test interpretation",
          "Term pregnancy begins at 37 weeks; full term at 39 weeks",
          "Post-date pregnancy (>42 weeks) requires induction; accurate dating prevents unnecessary intervention"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Diagnosis of Pregnancy", edition: "9th" },
          { book: "Williams Obstetrics", chapter: "Diagnosis of Pregnancy", edition: "25th" }
        ]
      },
      {
        layer: 4,
        slug: "pregnancy-diagnosis-exam-prep",
        title: "Diagnosis & Duration of Pregnancy - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Key facts, tables, and scenarios for board exams on pregnancy diagnosis and dating.",
        contentMd: `# Diagnosis & Duration of Pregnancy - Exam Preparation

## High-Yield Facts

### hCG Levels and Clinical Significance
| hCG Level | Clinical Status |
|-----------|----------------|
| <5 | Non-pregnant |
| 5-25 | Very early pregnancy or non-viable |
| 25-100 | Early pregnancy (ectopic vs IUP unclear) |
| >100 | Likely viable intrauterine pregnancy |

### Ultrasound Timeline
| Gestation | Finding | Method |
|-----------|---------|--------|
| 4-5 weeks | Gestational sac (2-3 mm) | TVS |
| 5-6 weeks | Yolk sac | TVS |
| 6-7 weeks | Fetal pole, cardiac activity | TVS |

### Naegele's Rule Examples
- LMP May 15 → EDD: February 22
- LMP Dec 1 → EDD: September 8 (next year)

## Common Exam Questions

1. **What is the first positive sign of pregnancy?** Fetal cardiac activity on ultrasound (from 6-6.5 weeks)

2. **When is first trimester ultrasound dating most accurate?** 11-13 weeks (±3 days)

3. **How often should hCG double?** Every 48-72 hours in normal pregnancy

4. **Define "term" pregnancy:** ≥37 weeks; full term ≥39 weeks`,
        mnemonics: [
          {
            text: "GOODELL-CHADWICK-HEGAR = GCH signs (clinical signs of pregnancy)",
            explanation: "Acronym for probable signs"
          },
          {
            text: "hCG DOUBLING = Every 48-72 hours in normal early pregnancy",
            explanation: "Key marker of viability"
          },
          {
            text: "CRL ACCURACY = First trim ±3 days, Second ±1-2 weeks, Third ±3-4 weeks",
            explanation: "Decreasing accuracy of ultrasound dating by trimester"
          },
          {
            text: "DISCREPANCY THRESHOLDS = 1st trim >2 wks | 2nd trim >3 wks | 3rd trim >4 wks",
            explanation: "When LMP-ultrasound discrepancy is significant by trimester"
          }
        ],
        keyPoints: [
          "Presumptive, probable, and positive signs progress in specificity for pregnancy diagnosis",
          "hCG doubling every 48-72 hours is hallmark of viable intrauterine pregnancy",
          "First trimester ultrasound dating is most accurate (±3 days)",
          "Naegele's rule adds 7 days to LMP, subtracts 3 months for EDD",
          "Significant dating discrepancies must be resolved using most reliable method (ultrasound if <13 weeks)",
          "Accurate dating is essential for: screening test interpretation, preterm intervention decisions, post-date pregnancy management"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Diagnosis & Dating of Pregnancy", edition: "9th" },
          { book: "NEET-PG Previous Years", chapter: "Pregnancy Diagnosis & Dating", edition: "2023" }
        ]
      },
      {
        layer: 5,
        slug: "pregnancy-diagnosis-active-recall",
        title: "Diagnosis & Duration of Pregnancy - Active Recall",
        estimatedMinutes: 15,
        summary: "Q&A on pregnancy diagnosis, dating methods, and clinical interpretation.",
        contentMd: `# Diagnosis & Duration of Pregnancy - Active Recall

## Q&A for Self-Assessment

**Q1: Explain the difference between presumptive, probable, and positive signs of pregnancy.**

A: Presumptive signs are patient-reported symptoms: amenorrhea (most reliable), nausea, fatigue, breast tenderness, urinary frequency. Low specificity. Probable signs found on examination: Goodell's sign (cervical softening), Chadwick's sign (vaginal cyanosis), Hegar's sign (isthmus softening), Braxton Hicks contractions, abdominal enlargement. Moderate specificity. Positive signs definitively confirm pregnancy: fetal cardiac activity on ultrasound (6-6.5 weeks), fetal movements palpated by examiner, fetal parts visible on imaging. 100% specific.

**Q2: Describe the timeline of hCG appearance and its role in pregnancy maintenance.**

A: Conception occurs 12-24 hours after ovulation. hCG first detectable in serum 6-8 days after conception (7 days before missed period). Urine hCG becomes positive 10-14 days after conception (around missed period). hCG rises exponentially, doubling every 48-72 hours, reaching peak at 8-10 weeks (100,000-200,000 mIU/mL), then declining. Role: hCG stimulates corpus luteum to continue progesterone production beyond normal 14-day lifespan. Progesterone maintains endometrial changes necessary for pregnancy.

**Q3: What is the most accurate method for dating pregnancy and why is accuracy important?**

A: First trimester transvaginal ultrasound measuring crown-rump length (CRL) is most accurate (±3 days), best performed 11-13 weeks. Accuracy important for: antenatal screening interpretation, timing of anomaly scan, GDM screening, preterm intervention decisions, post-date pregnancy management.

**Q4: How would you manage a 3-week dating discrepancy between LMP and second trimester ultrasound?**

A: In second trimester, >3 weeks is significant. Assess LMP reliability and clinical findings. Use ultrasound dating. Investigate reason: anovulation, variable follicular phase. Assess for growth restriction or macrosomia. Proceed with appropriate management based on revised dating.

**Q5: A woman has missed period but home pregnancy test negative. What is your approach?**

A: Differential: test too early, dilute urine, technical error, anovulation, ectopic, pregnancy loss. Obtain serum β-hCG. If positive: ultrasound to confirm location. If negative: investigate amenorrhea cause (TSH, prolactin, PCOS screening), repeat test in 1-2 weeks.

**Q6: Explain importance of accurate dating for post-date pregnancy management.**

A: Post-date pregnancy (>42 weeks) has increased stillbirth risk. Induction indicated at 42 weeks. However, induction only appropriate if dating accurate/reliable. Incorrect dating with induction when truly <42 weeks causes unnecessary maternal morbidity and potential neonatal prematurity complications. This is why induction requires confident dating: certain LMP OR first/second trimester ultrasound confirmation. Uncertain dating requires dating ultrasound before considering induction.`,
        mnemonics: [
          {
            text: "PRESUMPTIVE-PROBABLE-POSITIVE = Low specificity → Moderate → High (definitive)",
            explanation: "Progressive specificity of pregnancy signs"
          },
          {
            text: "hCG DOUBLING = Every 48-72 hours; slower rise = non-viable or ectopic",
            explanation: "Key interpretation of serial hCG values"
          },
          {
            text: "FIRST TRIM ULTRASOUND = Most accurate dating (±3 days); CRL at 11-13 weeks",
            explanation: "Optimal method and timing for pregnancy dating"
          },
          {
            text: "NAEGELE'S RULE = +7 days to LMP first day, -3 months for EDD",
            explanation: "Quick calculation for estimated due date"
          }
        ],
        keyPoints: [
          "Amenorrhea is earliest presumptive sign; correlates with pregnancy in reproductive-age woman",
          "hCG produced by trophoblast; maintains corpus luteum by stimulating progesterone",
          "First trimester ultrasound (CRL) is most accurate dating method (±3 days)",
          "Naegele's rule accurate ±2 weeks in women with regular 28-day cycles",
          "Dating discrepancies must be resolved to avoid harmful interventions",
          "Accurate dating essential for antenatal screening interpretation and post-date pregnancy management"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Diagnosis of Pregnancy", edition: "9th" },
          { book: "Williams Obstetrics", chapter: "Diagnosis of Pregnancy", edition: "25th" }
        ]
      }
    ]
  }
];
