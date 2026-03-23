import type { TopicLessons } from "./content-loader";

export const pediatricsPart9Lessons: TopicLessons[] = [
  {
    topicCode: "PE-MOD-03-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "malnutrition-layer-1-foundation",
        title: "Protein-Energy Malnutrition - Foundation",
        estimatedMinutes: 20,
        summary: "PEM classification (SAM, MAM, underweight), kwashiorkor vs marasmus distinction, and prevalence in India.",
        contentMd: `# Protein-Energy Malnutrition - Foundation

## Classification of Malnutrition (WHO)

**By weight-for-age (WFA)**:
- >80% WFA: Mild malnutrition
- 70-80% WFA: Moderate malnutrition
- <70% WFA: Severe malnutrition

**Severe Acute Malnutrition (SAM)**:
- Weight-for-height Z-score <-3 (wasting)
- OR MUAC <11.5 cm (6-59 months)
- OR Bilateral pedal edema (kwashiorkor)
- Medical complications: VERY HIGH

**Kwashiorkor vs Marasmus**:
- **Kwashiorkor**: Protein deficiency, edema, hair changes, liver enlargement
- **Marasmus**: Energy deficiency, severe wasting, no edema, "old man appearance"
- **Marasmic-kwashiorkor**: Both features, most severe

## Prevalence in India

- Overall malnutrition: 35-45% children <5 years
- SAM: 5-7% children <5 years
- Stunting: 35-40% (chronic malnutrition)
- Higher in rural areas, lower SES

## Age of Presentation

- Peak: 6-24 months (weaning period)
- Rarer in exclusively breastfed infants`,
        mnemonics: [
          { text: "SAM = MUAC <11.5 or WFH <-3", explanation: "Quick field assessment" },
          { text: "Kwashiorkor: edema + hair changes", explanation: "Protein deficiency" },
          { text: "Marasmus: 'old man appearance'", explanation: "Energy deficiency, no edema" },
        ],
        keyPoints: [
          "SAM: acute wasting, MUAC <11.5, medical complications",
          "Kwashiorkor: protein deficiency, edema, liver enlargement",
          "Marasmus: energy deficiency, wasting, no edema",
          "35% Indian children <5 malnourished",
          "Peak 6-24 months (weaning period)",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Protein-Energy Malnutrition", edition: "9th" },
          { book: "WHO Guidelines", chapter: "Management of SAM in Children", edition: "2013" },
        ],
      },
      {
        layer: 2,
        slug: "malnutrition-layer-2-mechanism",
        title: "Protein-Energy Malnutrition - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of SAM, metabolic adaptation, immune dysfunction, and organ-specific changes.",
        contentMd: `# Protein-Energy Malnutrition - Pathophysiology

## Metabolic Adaptation in Starvation

**Phase 1 (4-6 weeks)**:
- ↓ Gluconeogenesis (maintain blood glucose)
- ↓ Protein catabolism (conserve muscle)
- ↑ Lipolysis (energy from fat)
- ↓ Metabolic rate

**Phase 2 (Weeks 6-12)**:
- Protein catabolism ↑↑ (muscle wasting accelerates)
- Fat stores depleted
- Immune system deteriorates
- Organ perfusion maintained (brain, heart, kidney prioritized)

## Protein-Specific Changes in Kwashiorkor

**Hepatic protein synthesis impaired**:
- ↓ Albumin (colloid oncotic pressure ↓ → edema)
- ↓ Clotting factors (coagulopathy)
- Fatty liver (lipid accumulation)

**Intestinal dysfunction**:
- Reduced mucosal thickness
- ↓ Brush border enzymes
- ↑ Intestinal permeability
- Secondary lactose intolerance

## Immune System Changes

**Innate immunity impaired**:
- ↓ Neutrophil count, chemotaxis
- ↓ Complement
- ↓ Lysozyme, lactoferrin

**Adaptive immunity devastated**:
- ↓↓ T-lymphocytes (CD4 cells)
- ↓ B-lymphocytes
- Thymic atrophy
- ↓ Antibody titers

## Infections in PEM

- Diarrhea (70-80%)
- Respiratory infections
- TB (increased reactivation)
- Sepsis/bacteremia
- Measles (often severe/fatal)`,
        mnemonics: [
          { text: "Kwashiorkor: fatty liver", explanation: "Impaired protein synthesis and lipid export" },
          { text: "SAM immune: T-cells devastated", explanation: "CD4 lymphopenia, thymic atrophy" },
          { text: "Refeeding syndrome: hypophosphatemia", explanation: "Low despite total body depletion" },
        ],
        keyPoints: [
          "Kwashiorkor: ↓ albumin → edema, fatty liver, diarrhea",
          "Marasmus: muscle wasting, preserved liver protein",
          "Immune: T-cells devastated, thymic atrophy, ↓ antibodies",
          "Infections common: diarrhea, pneumonia, TB, sepsis",
          "Metabolic risks: hypoglycemia, refeeding syndrome",
          "Diarrhea 70-80%, secondary to intestinal dysfunction",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Metabolic Consequences of PEM", edition: "9th" },
          { book: "Pediatric Gastroenterology", chapter: "Malnutrition Effects on GI", edition: "2023" },
        ],
      },
      {
        layer: 3,
        slug: "malnutrition-layer-3-clinical",
        title: "Protein-Energy Malnutrition - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical presentation by type, IMCI classification, MUAC assessment, and diagnostic workup.",
        contentMd: `# Protein-Energy Malnutrition - Clinical Assessment

## Clinical Features

**Kwashiorkor**:
- Edema: Bilateral, pitting (feet, legs, face)
- Hair changes: Thin, color change (reddish)
- Skin: Dermatosis (flaky paint appearance)
- Hepatomegaly: Smooth, tender
- Moon face (edema)
- Diarrhea: Often severe (80%)
- Anemia: Moderate to severe
- Behavioral: Irritable, then apathetic

**Marasmus**:
- Thin, skeletal, "old man appearance"
- Subcutaneous fat completely gone
- Skin: Dry, loose (saggy)
- Edema: ABSENT
- Hepatomegaly: Absent or minimal
- Behavior: Hungry, alert
- Vital signs: Bradycardia, hypothermia

**Marasmic-kwashiorkor**:
- Severe wasting + edema
- Dermatosis + loose skin
- Highest mortality

## IMCI Classification

**Severe Acute Malnutrition (SAM) - Red flag**:
- Bilateral pitting edema (feet)
- OR Weight-for-height <70%
- OR MUAC <11.5 cm (6-59 months)
- Requires hospitalization

**Moderate Acute Malnutrition (MAM)**:
- Weight-for-height 70-80%
- OR MUAC 11.5-12.5 cm
- Outpatient supplementation

## Anthropometric Assessment

**Weight-for-height (WFH)**: Detects acute malnutrition
**MUAC**: Field measurement, quick, reliable (<11.5 cm = SAM)
**Height-for-age**: Detects chronic malnutrition
**Weight-for-age**: Both acute and chronic, affected by edema`,
        mnemonics: [
          { text: "Kwashiorkor = edema + hair changes", explanation: "Protein deficiency hallmark" },
          { text: "Marasmus = wasting only, no edema", explanation: "Energy deficiency" },
          { text: "MUAC <11.5 = SAM", explanation: "Field assessment tool" },
        ],
        keyPoints: [
          "Kwashiorkor: edema, hair change, dermatosis, hepatomegaly",
          "Marasmus: wasting, skeletal, no edema, hungry",
          "Marasmic-kwashiorkor: both, worst prognosis",
          "MUAC <11.5 cm = SAM requiring hospitalization",
          "Anemia, low albumin, electrolyte derangement common",
          "Blood culture positive in 10-15%",
          "TB/parasites must be ruled out",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Clinical Features of PEM", edition: "9th" },
          { book: "WHO IMCI Pocket Book", chapter: "Malnutrition Assessment", edition: "2014" },
        ],
      },
      {
        layer: 4,
        slug: "malnutrition-layer-4-exam",
        title: "Protein-Energy Malnutrition - Exam Prep",
        estimatedMinutes: 25,
        summary: "Management of SAM (stabilization vs rehabilitation), micronutrient supplementation, refeeding syndrome prevention.",
        contentMd: `# Protein-Energy Malnutrition - Management

## Phases of SAM Management

**Phase 1: Stabilization (1-2 weeks)**:
- Treat life-threatening complications
- NO rapid weight gain (avoid refeeding syndrome)
- Modest initial feeds
- Focus: Infections, metabolic abnormalities

**Phase 2: Rehabilitation (4-6 weeks)**:
- Gradual increase in energy/protein
- Target weight gain: 10-15 g/kg/day
- Micronutrient repletion
- Transition to community management

## Stabilization Phase

**Infections**:
- Broad-spectrum antibiotics: Ampicillin 50 mg/kg/day + Gentamicin 7.5 mg/kg/day
- Treat presumptively (70%+ have bacteremia)

**Micronutrients (MUST GIVE)**:
- Vitamin A: 200,000 IU day 1, repeat day 2 & day 15
- Folic acid: 1 mg daily x 2 weeks
- Zinc: 2 mg/kg/day
- Iron: DELAYED (risk of oxidative stress)

**Initial Feeding**:
- 100-120 kcal/kg/day (slow start)
- F-100 (WHO therapeutic milk)
- 4-hourly feeds (small, frequent)

## Refeeding Syndrome Prevention

**Critical days 3-7**:
- Slow feeding initiation
- Slow increase: 20 kcal/kg every 3-5 days
- Monitor electrolytes closely
- Risk: Hypokalemia, hypophosphatemia, cardiac arrhythmias

## Rehabilitation Phase

**Increased feeding**:
- 150-220 kcal/kg/day
- 10-15 g/kg/day weight gain
- Transition from F-100 to local foods

**Micronutrients**:
- Vitamin A: Weeks 1-2 only
- Iron: NOW introduced (2-3 mg/kg/day)
- Continue zinc, copper, vitamins`,
        mnemonics: [
          { text: "Vitamin A BEFORE feeds", explanation: "Prevent Wernicke encephalopathy" },
          { text: "F-100 therapeutic milk", explanation: "WHO formula for malnourished" },
          { text: "SLOW feeding prevents refeeding syndrome", explanation: "Start 100-120 kcal/kg" },
          { text: "Refeeding danger: days 3-7", explanation: "Sudden cardiac death" },
        ],
        keyPoints: [
          "SAM: 2-phase (stabilization 1-2 weeks, rehabilitation 4-6 weeks)",
          "Phase 1: modest feeds (100-120 kcal/kg), antibiotics, micronutrients",
          "Vitamin A days 1, 2, 15; Zinc; NO iron yet",
          "Refeeding syndrome risk days 3-7",
          "Slow feeding: increase 20 kcal/kg every 3-5 days",
          "Phase 2: increase to 150-220 kcal/kg/day, add iron",
          "Discharge at 80% weight-for-height",
          "Infection/TB/parasites treated concurrently",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Management of SAM", edition: "9th" },
          { book: "WHO Guidelines", chapter: "Inpatient and Outpatient Treatment", edition: "2013" },
        ],
      },
      {
        layer: 5,
        slug: "malnutrition-layer-5-active-recall",
        title: "Protein-Energy Malnutrition - Active Recall",
        estimatedMinutes: 15,
        summary: "Clinical scenarios for PEM assessment, management decisions, and complication handling.",
        contentMd: `# Active Recall: Protein-Energy Malnutrition

**Q1:** 18-month-old with bilateral leg edema, red thin hair, dermatosis, diarrhea. WFH 65%, MUAC 10 cm. Diagnosis?
> **Answer:** Severe Acute Malnutrition - Kwashiorkor. SAM diagnosis (MUAC <11.5, WFH <70%, edema). IMMEDIATE HOSPITALIZATION. High mortality risk without treatment.

**Q2:** 20-month-old, severely thin, no edema, WFH 60%, MUAC 9 cm. Alert, asking for food. Type?
> **Answer:** Marasmus (energy deficiency). SAM diagnosis. Despite alert/hungry (vs kwashiorkor apathy), requires hospitalization. Hidden metabolic derangement.

**Q3:** Malnourished child on day 4 treatment. On F-100, suddenly weak, poor sucking, irregular HR. K+ 2.8 mEq/L. What happened?
> **Answer:** Refeeding syndrome (hypokalemia). Metabolism shifted catabolic → anabolic. Despite total body K+ depletion, cells take up K+ rapidly → serum K+ drops. STOP feeds, supplement K+, slow protocol.

**Q4:** SAM child, day 1, febrile (T 39°C), no documented infection. Antibiotics?
> **Answer:** YES, empirically. Ampicillin 50 mg/kg + Gentamicin 7.5 mg/kg. 70%+ have bacteremia. Early antibiotics reduce mortality. Assess TB, parasites.

**Q5:** 12-month-old SAM, Hb 6.5 g/dL. When iron supplementation?
> **Answer:** NOT now (stabilization risk). Iron worsens sepsis during acute phase. Start week 2 at 2-3 mg/kg/day AFTER stabilization. Give vitamin A, zinc, folic acid NOW.

**Q6:** SAM recovery (day 10), weight gaining, MUAC improving, loose stools. Feeding strategy?
> **Answer:** Lactose-free formula initially. Gradually reintroduce lactose. Continue 150-220 kcal/kg/day, increase 20 kcal/kg every 3-5 days. Deworming NOW (safe). Continue micronutrients.

**Q7:** Kwashiorkor, hepatomegaly, yellowing, bilirubin 3.5, AST 120. Acute liver failure?
> **Answer:** Likely cholestatic (fatty infiltration, impaired synthetic function). Continue nutrition (best treatment). Monitor PT, albumin. Usually resolves with nutrition.

**Q8:** SAM discharge at 80% WFH. Prevent relapse?
> **Answer:** Mother education (local nutrient-dense foods, feeding frequency), micronutrient supplementation, breastfeeding if possible. Community follow-up, prevent infections, address causes (poverty, food insecurity).

**Q9:** Marasmic-kwashiorkor, acute respiratory distress. Cause?
> **Answer:** Cardiac compromise (myocardial atrophy) + aggressive fluid → pulmonary edema. Restrict fluids (ORS not IV). Future: careful fluid management.

**Q10:** Vitamin A day 1, why repeat day 2 & day 15?
> **Answer:** Multiple doses optimize tissue stores. Day 1 corrects acute deficiency. Day 2 addresses continued losses. Day 15 maintains stores during early recovery.`,
        mnemonics: [
          { text: "Kwashiorkor: edema + hair + dermatosis", explanation: "Protein deficiency" },
          { text: "Marasmus: wasting only, no edema", explanation: "Energy deficiency" },
          { text: "MUAC <11.5 = SAM hospitalization", explanation: "Field assessment" },
        ],
        keyPoints: [
          "Kwashiorkor: edema, hair changes, dermatosis, diarrhea",
          "Marasmus: wasting, skeletal, no edema",
          "MUAC <11.5 cm = SAM requiring hospitalization",
          "Stabilization: slow feeds, antibiotics, micronutrients",
          "Refeeding syndrome: hypokalemia/hypophosphatemia days 3-7",
          "Iron delayed until stabilization",
          "Rehabilitation: 150-220 kcal/kg/day, gradual increase",
          "Discharge at 80% WFH, continue community supplementation",
          "Prevent relapse: address underlying causes",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Case Studies in SAM", edition: "9th" },
        ],
      },
    ],
  },
];

export default pediatricsPart9Lessons;
