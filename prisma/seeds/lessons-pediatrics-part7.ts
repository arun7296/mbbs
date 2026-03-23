import type { TopicLessons } from "./content-loader";

export const pediatricsPart7Lessons: TopicLessons[] = [
  {
    topicCode: "PE-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "short-stature-layer-1-foundation",
        title: "Short Stature & Failure to Thrive - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of growth failure in children including failure to thrive and short stature evaluation framework.",
        contentMd: `# Short Stature & Failure to Thrive - Foundation

## Definitions

### Failure to Thrive (FTT)
- Inadequate growth and/or weight gain
- Criteria: Weight <5th percentile OR loses 2 percentile lines OR growth velocity <5th percentile
- Prevalence: 5-10% primary care, 35% hospital settings

### Short Stature
- Height <2 SD below mean for age (approximately <3rd-5th percentile)
- Pathologic: requires investigation
- Normal variants: constitutional delay of growth (CDGA), familial short stature

## Classification of Failure to Thrive

### Organic (15-25%)
- **GI**: Malabsorption, reflux, cleft palate, chronic liver disease
- **Cardiac/Pulmonary**: Congenital heart disease, chronic lung disease
- **Neurological**: Cerebral palsy, developmental delay
- **Metabolic/Endocrine**: Hypothyroidism, GH deficiency
- **Renal/Genetic**: Chronic kidney disease, syndromic short stature

### Non-Organic (75-85%)
- **Inadequate intake**: Poverty, improper feeding
- **Maternal/Social**: Neglect, abuse, maternal depression, inadequate knowledge

## Red Flags for FTT
- Dramatic weight loss or plateauing
- Developmental delay
- Significant weight-length discrepancy
- Signs of abuse/neglect
- Persistent diarrhea or vomiting
- Facial dysmorphism

## Initial Assessment Framework

### Key History
1. Birth weight, gestational age, neonatal events
2. Feeding history: Type, frequency, quantity
3. Developmental milestones
4. Family history of short stature
5. Socioeconomic status, parental education`,
        mnemonics: [
          { text: "FTT = weight <5th percentile or loses 2 percentile lines", explanation: "Diagnostic criteria" },
          { text: "Organic 15-25%, Non-organic 75-85%", explanation: "Most FTT is non-organic (psychosocial)" },
          { text: "Short stature = height <-2 SD from mean", explanation: "Pathologic threshold" },
        ],
        keyPoints: [
          "FTT: inadequate growth/weight gain, <5th percentile or loses percentile lines",
          "75-85% of FTT is non-organic (psychosocial/inadequate intake)",
          "15-25% organic causes: GI, cardiac, neurological, endocrine, genetic",
          "Red flags: weight loss, developmental delay, abuse signs, diarrhea",
          "Short stature <-2 SD from mean for age (requires investigation)",
          "CDGA and familial short stature are normal variants",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Growth Failure", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Failure to Thrive", edition: "21st" },
        ],
      },
      {
        layer: 2,
        slug: "short-stature-layer-2-mechanism",
        title: "Short Stature & Failure to Thrive - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of growth failure, hormonal regulation (growth hormone, thyroid, insulin), nutritional deficiencies, and impacts on organ systems.",
        contentMd: `# Short Stature & Failure to Thrive - Pathophysiology

## Normal Growth Physiology

**Infancy (0-3 years)**:
- Rapid growth: 20-25 cm/year (first year)
- Growth factors: Nutrition, parental genes, thyroid hormone, growth hormone

**Childhood (3-12 years)**:
- Linear growth: 5-6 cm/year
- Steady, predictable growth velocity

**Puberty (12-18 years)**:
- Growth acceleration: up to 10 cm/year
- Sexual dimorphism: boys taller, girls mature earlier

## Growth Hormone Physiology

**GH secretion**:
- Pulsatile release from anterior pituitary
- Stimulated by: GHRH (hypothalamus), sleep, exercise, hypoglycemia
- Inhibited by: somatostatin, hyperglycemia
- Peaks at night (anabolic phase)

**GH effects**:
- Increases IGF-1 production (hepatic, local)
- Increases amino acid uptake
- Increases protein synthesis
- Increases lipolysis (energy for growth)

## Thyroid Hormone Role

- Essential for growth velocity
- Deficiency (hypothyroidism): slow growth, developmental delay, poor bone growth
- Excess: accelerated growth but premature fusion (tall then short)

## Malnutrition Effects on Growth

**Acute malnutrition (wasting)**:
- Weight loss, rapid
- Growth hormone may be elevated (try to compensate) but ineffective
- Reversible with nutrition

**Chronic malnutrition (stunting)**:
- Slow linear growth velocity
- May have adequate weight initially (proportional shortness)
- GH resistance: high GH levels but low IGF-1
- Often irreversible if prolonged

## Metabolic Consequences of FTT

**Protein-calorie effects**:
- ↓ Protein synthesis (including muscle, organ proteins)
- ↓ IGF-1 production (impairs growth)
- ↓ Immune function (↓ T-cells, antibodies)
- ↓ Enzyme production (malabsorption worsens)

**Specific nutrient deficiencies**:
- Iron: anemia, reduced oxygen transport
- Zinc: immune dysfunction, reduced growth rate
- Calcium: impaired bone mineralization
- Vitamin A: infections, blindness risk
- Vitamin D: rickets`,
        mnemonics: [
          { text: "GH = pulsatile, peaks at night, stimulated by GHRH/sleep", explanation: "Hormonal secretion pattern" },
          { text: "Acute malnutrition = weight loss, reversible", explanation: "Wasting pathophysiology" },
          { text: "Chronic malnutrition = stunting, GH resistance (high GH, low IGF-1)", explanation: "Stunting mechanism" },
        ],
        keyPoints: [
          "Growth velocity infancy 20-25 cm/year, childhood 5-6 cm/year",
          "GH: pulsatile secretion, peaks at night, stimulated by sleep",
          "GH acts via IGF-1 (hepatic and local production)",
          "Thyroid hormone essential for growth velocity",
          "Acute malnutrition: wasting, reversible with nutrition",
          "Chronic malnutrition: stunting, GH resistance develops",
          "Protein deficiency: ↓ muscle, ↓ organ proteins, ↓ IGF-1",
          "Nutrient deficiencies: iron, zinc, calcium, vitamins all impact growth",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Growth Mechanisms", edition: "9th" },
          { book: "Guyton Textbook of Medical Physiology", chapter: "Growth Hormone", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "short-stature-layer-3-clinical",
        title: "Short Stature & Failure to Thrive - Clinical Assessment",
        estimatedMinutes: 25,
        summary: "Clinical evaluation of growth failure, anthropometric assessment, growth charts interpretation, and diagnostic workup.",
        contentMd: `# Short Stature & Failure to Thrive - Clinical Assessment

## Anthropometric Assessment

**Growth Parameters**:
- Weight: measure on calibrated scale
- Height/Length: measure on stadiometer (>2 years) or infantometer (<2 years)
- Head circumference (until 3 years)
- Compare to WHO/Indian growth standards

**Growth Velocity**:
- Plot weight and height over time
- Normal velocity: 0-3 years (5-8 cm/year), 3-12 years (5-6 cm/year)
- Deceleration indicates problem

**Weight-for-Height**:
- Detects wasting (acute malnutrition)
- <90% expected = MAM, <80% = SAM

**Height-for-Age**:
- Detects stunting (chronic malnutrition)
- <95% expected = stunted

**BMI**:
- Weight (kg) / Height (m²)
- Overweight (>85th percentile), Obese (>95th percentile)

## Clinical History

**Feeding History**:
- Breastfeeding: duration, exclusive or mixed
- Formula: type, quantity, preparation (dilution)
- Complementary foods: age started, types, amounts
- Current diet: 24-hour recall

**Family History**:
- Parental heights (calculate mid-parental height)
- Age of parental puberty
- Family genetic short stature

**Developmental Milestones**:
- Delays suggest organic cause
- Appropriate milestones with poor growth: likely non-organic

**Social History**:
- Socioeconomic status, food security
- Maternal depression, stress
- Parental education level
- Abuse/neglect signs

## Physical Examination

**General**:
- Appearance: wasted vs proportionate shortness
- Dysmorphism: syndromic short stature
- Skin: dry, poor healing (malnutrition)

**Organ-Specific**:
- Abdomen: hepatomegaly, distension (malabsorption)
- Thyroid: size, nodules
- Neurological: developmental delay, hypotonia

**Growth Pattern**:
- Proportionate (equal weight and height affected) vs disproportionate
- Symmetric vs asymmetric`,
        mnemonics: [
          { text: "Growth velocity deceleration = always investigate", explanation: "Indicates pathology" },
          { text: "Wasting = weight-for-height <90%, Stunting = height-for-age <95%", explanation: "Anthropometric definitions" },
          { text: "Proportionate short stature = genetic; disproportionate = endocrine/metabolic", explanation: "Pattern interpretation" },
        ],
        keyPoints: [
          "Normal growth velocity: infancy 5-8 cm/year, childhood 5-6 cm/year",
          "Growth deceleration always warrants investigation",
          "Weight-for-height detects acute malnutrition (wasting)",
          "Height-for-age detects chronic malnutrition (stunting)",
          "Proportionate shortness suggests genetic/endocrine cause",
          "Disproportionate shortness suggests metabolic/chromosomal cause",
          "Developmental delay suggests organic cause",
          "Normal development with poor growth suggests non-organic (psychosocial)",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Clinical Assessment of Growth", edition: "9th" },
          { book: "WHO Child Growth Standards", chapter: "Anthropometry", edition: "2006" },
        ],
      },
      {
        layer: 4,
        slug: "short-stature-layer-4-exam",
        title: "Short Stature & Failure to Thrive - Exam Prep",
        estimatedMinutes: 25,
        summary: "Diagnostic approach to FTT, investigations (labs, imaging), differential diagnosis, and management strategy.",
        contentMd: `# Short Stature & Failure to Thrive - Diagnostic Approach

## Diagnostic Algorithm

**Step 1: Assess Growth Pattern**
- Proportionate vs disproportionate
- Deceleration of growth velocity
- Compare to growth standard and family height

**Step 2: History & Exam**
- Adequate or inadequate nutritional intake?
- Vomiting, diarrhea, steatorrhea (malabsorption)?
- Developmental delay (organic vs normal)?
- Signs of neglect/abuse?

**Step 3: Categorize (Organic vs Non-Organic)**
- Non-organic (psychosocial): history of neglect, normal exam/development, responds to increased nutrition
- Organic: systemic symptoms, abnormal exam, persistent despite adequate intake

## Investigations (If Indicated)

**First-Line Labs** (if FTT or growth failure):
- Hemoglobin (anemia from malnutrition/malabsorption)
- Blood glucose (hypoglycemia in severe malnutrition)
- Albumin, total protein (nutrition status)
- Liver function, kidney function (chronic disease)
- Celiac serology (tissue transglutaminase)
- TSH, free T4 (hypothyroidism)
- Stool examination (parasites, steatorrhea)

**Second-Line Labs** (if abnormality found):
- GH stimulation test (if GH deficiency suspected)
- IGF-1 level
- Bone age X-ray (assess maturation)
- Comprehensive metabolic panel
- Tissue transglutaminase, anti-endomysial antibodies (celiac)

**Imaging**:
- Chest X-ray (chronic heart/lung disease, TB)
- Abdominal ultrasound (hepatomegaly, malabsorption)
- Bone age X-ray (compare to chronological age)

## Management Strategy

**Non-Organic FTT (Psychosocial)**:
- Nutritional counseling (mother education)
- Increase caloric density, feeding frequency
- Monitor closely (fortnightly visits)
- Address social issues: poverty, education, maternal depression
- Home visits, community health worker involvement

**Organic FTT** (depends on cause):
- **Malabsorption**: Treat underlying cause, supplement calories/nutrients
- **Cardiac/Pulmonary**: Manage primary disease, increase calories (high-energy diet)
- **Endocrine** (GH deficiency, hypothyroidism): Hormone replacement
- **Renal disease**: Manage uremia, nutritional support

## Nutritional Rehabilitation

**Energy**: 120-150 kcal/kg/day (catch-up growth)
**Protein**: 3-4 g/kg/day (tissue repair)
**Micronutrients**: Iron, zinc, multivitamins (supplement if deficient)
**Monitoring**: Weekly weight (until catching up), then monthly`,
        mnemonics: [
          { text: "Proportionate = genetic/endocrine, Disproportionate = metabolic/skeletal", explanation: "Pattern guides diagnosis" },
          { text: "Non-organic 75%: respond to increased nutrition", explanation: "Psychosocial FTT" },
          { text: "First labs: CBC, albumin, TSH, celiac serology, stool", explanation: "Organic screening" },
        ],
        keyPoints: [
          "Growth deceleration is the key finding in FTT",
          "Non-organic (75%): history of neglect/inadequate intake, normal development",
          "Organic (25%): systemic symptoms, abnormal exam, persistent despite good intake",
          "First labs: hemoglobin, albumin, TSH, celiac serology, stool exam",
          "GH deficiency: GH stimulation test + IGF-1 level",
          "Bone age X-ray: assess skeletal maturation vs chronological age",
          "Non-organic FTT: nutrition counseling, mother education, social support",
          "Catch-up nutrition: 120-150 kcal/kg/day, 3-4 g/kg protein",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Management of FTT", edition: "9th" },
          { book: "IAP Guidelines on Childhood Growth", chapter: "FTT Evaluation", edition: "2023" },
        ],
      },
      {
        layer: 5,
        slug: "short-stature-layer-5-active-recall",
        title: "Short Stature & Failure to Thrive - Active Recall",
        estimatedMinutes: 15,
        summary: "Clinical scenarios for evaluating growth failure, decision-making in diagnostic approach, and management planning.",
        contentMd: `# Active Recall: Short Stature & Failure to Thrive

**Q1:** 18-month-old, weight 9 kg (3rd percentile), length 75 cm (10th percentile). Growth velocity last 3 months: 2 cm, 0.5 kg. Mother reports "not eating much." Development normal. Most likely diagnosis?
> **Answer:** Non-organic FTT (psychosocial). Proportionate shortness (both weight and height affected equally), normal development, history of inadequate intake. Growth deceleration (<5 cm/year velocity). Management: nutrition counseling, increase feeding frequency/calorie density, maternal education, monitor weekly weights.

**Q2:** 3-year-old, height 85 cm (2nd percentile), weight 12 kg (5th percentile). Proportionate shortness. Parents both short (father 160 cm, mother 155 cm). Normal development. What's the diagnosis?
> **Answer:** Likely familial short stature (normal variant). Both parents short, child following similar growth trajectory. No growth deceleration (stable percentile). No investigation needed. Reassure parents, monitor growth, no treatment needed.

**Q3:** 4-year-old, height 95 cm (15th percentile), weight 14 kg (40th percentile). Height-for-weight low. Recent hospitalization for diarrhea. Stool occult blood positive. Hb 9 g/dL. What to investigate?
> **Answer:** Disproportionate growth pattern (weight preserved, height low) + diarrhea + anemia suggests malabsorption (celiac disease likely). Investigations: tissue transglutaminase (tTG), anti-endomysial antibodies, stool exam (parasites), iron studies. If celiac positive, gluten-free diet.

**Q4:** 5-year-old, height 105 cm (5th percentile), weight 16 kg (10th percentile). Growth velocity slowing (3 cm/year). Delayed puberty signs. Abnormally high GH by random test (8 mIU/mL, normal <3). What's suggested?
> **Answer:** GH deficiency suspected (high GH often seen in deficiency as pituitary tries to compensate, but IGF-1 low). Confirmed by: (1) low IGF-1, (2) GH stimulation test (arginine or insulin hypoglycemia), (3) normal TSH/T4 rule out hypothyroidism. Management: GH replacement therapy.

**Q5:** 2-year-old, weight 9 kg (5th percentile), wasting appearance. Abdomen distended, stool bulky. Mother reports "loose stools" for 6 months. Recent measles infection. Hemoglobin 7 g/dL. Most likely diagnosis?
> **Answer:** Protein-energy malnutrition (PEM) with malabsorption (from diarrhea, post-measles immunodeficiency). Investigations: stool exam (parasites), celiac serology, blood cultures (concomitant infections). Management: treat diarrhea cause, antibiotics (if infection), nutritional rehabilitation, micronutrients (vitamin A, zinc, iron after stabilization).

**Q6:** 3-year-old with Down syndrome, height 88 cm (5th percentile for age, normal for Down syndrome), weight 13 kg. Proportionate shortness, normal growth velocity for syndrome. Parents ask if short stature is concerning.
> **Answer:** This is proportionate shortness expected with Down syndrome (genetics). Height appropriate for condition, normal velocity. No investigation needed if healthy. Monitor for thyroid dysfunction (common in Down syndrome), cardiac disease. No GH therapy needed.

**Q7:** 6-year-old, height 105 cm (3rd percentile), weight 16 kg (5th percentile). Growth deceleration over 6 months. Creatinine 1.2 mg/dL (elevated for age). BP 110/70 (elevated). Pale appearance. Most likely diagnosis?
> **Answer:** Chronic kidney disease (CKD) causing growth failure. Elevated creatinine, hypertension, anemia (pale). Management: control BP, manage uremia, nutritional support (phosphate restriction, adequate calories), monitor GFR, consider growth hormone therapy (approved for CKD-related short stature).

**Q8:** 12-month-old, exclusively breastfed until 6 months, complementary feeding started late (9 months). Weight 7 kg (5th percentile), length 71 cm (10th percentile). Wasting appearance (weight-for-length <85%). Development normal. What's the cause?
> **Answer:** Inadequate complementary feeding introduction (delayed, poor quality). Malnutrition from delayed/inadequate nutrition transition. Management: start iron-fortified foods immediately, increase calorie density, counseling on complementary feeding, continue breastfeeding. No organic workup needed if development normal.

**Q9:** 4-year-old with history of severe burns at age 2 (covered 30% body surface). Height 95 cm (10th percentile), weight 14 kg (5th percentile). Growth normal in first 2 years, then slowed. Proportionate shortness. Minimal scarring. Likely cause?
> **Answer:** Hypermetabolism from healing/scarring may have contributed initially, but now likely nutritional insufficiency (diet quality may be poor). Assess current diet, nutritional intake. Consider post-traumatic growth hormone insufficiency (rare but possible). Management: optimize nutrition, monitor growth velocity, investigate if deceleration continues.

**Q10:** Newborn, length 48 cm (normal), weight 2.8 kg (normal). At 6 months, weight 5 kg (normal), length 63 cm (normal). At 12 months, weight 8 kg (10th percentile), length 71 cm (10th percentile). At 18 months, weight 9 kg (5th percentile), length 74 cm (5th percentile). Growth deceleration noted. Most likely timing of insult?
> **Answer:** Growth deceleration evident between 6-18 months. Likely nutritional insult around 6-9 months (complementary feeding period). Could be: inadequate complementary feeding, infection (diarrhea, malaria), malabsorption onset. Assess current nutrition, growth velocity, investigate for ongoing causes (malabsorption, chronic infection).`,
        mnemonics: [
          { text: "Proportionate = genetic/familial, Disproportionate = organic", explanation: "Pattern guides differential" },
          { text: "Normal development + poor growth = non-organic (75%)", explanation: "Psychosocial FTT" },
          { text: "Abnormal development + poor growth = organic (25%)", explanation: "Systemic disease" },
          { text: "Growth deceleration = always investigate", explanation: "Key red flag" },
        ],
        keyPoints: [
          "Proportionate shortness: likely genetic/endocrine (normal variant vs GH deficiency)",
          "Disproportionate shortness: suggests malabsorption/metabolic disease",
          "Growth deceleration is key finding (deviating from percentile)",
          "Non-organic FTT 75%: normal development, history of inadequate intake",
          "Organic FTT 25%: abnormal development or systemic symptoms",
          "First labs: hemoglobin, albumin, TSH, celiac serology",
          "GH deficiency: low IGF-1 + abnormal GH stimulation test",
          "Management: nutrition counseling, address social issues, treat organic causes",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Case Studies in Growth Failure", edition: "9th" },
        ],
      },
    ],
  },
];

export default pediatricsPart7Lessons;
