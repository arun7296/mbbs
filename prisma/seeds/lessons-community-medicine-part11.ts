import type { TopicLessons } from "./content-loader";

export const communityMedicineLessonsPartXI: TopicLessons[] = [
  {
    topicCode: "CM-MOD-04-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "child-health-imr-layer-1-foundation",
        title: "Child Health & IMR - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of child health indicators including IMR, NMR, U5MR, and their determinants in India.",
        contentMd: `# Child Health & IMR - Foundation

## Key Indicators
- **Infant Mortality Rate (IMR)**: Deaths <1 year per 1000 live births. India IMR: ~28 (SRS 2020)
- **Neonatal Mortality Rate (NMR)**: Deaths <28 days per 1000 live births
- **Under-5 Mortality Rate (U5MR)**: Deaths <5 years per 1000 live births
- **Perinatal Mortality Rate**: Stillbirths + early neonatal deaths per 1000 total births

## Causes of Infant Mortality in India
- Prematurity and low birth weight (35%)
- Neonatal infections/sepsis (20%)
- Birth asphyxia (15%)
- Pneumonia (15%)
- Diarrheal diseases (10%)

## IMNCI Strategy
Integrated Management of Neonatal and Childhood Illness covers children 0-5 years with assessment, classification, and treatment protocols for common illnesses.

## National Programs
- **ICDS**: Integrated Child Development Services (Anganwadi)
- **RBSK**: Rashtriya Bal Swasthya Karyakram (child health screening)
- **MAA**: Mothers Absolute Affection (breastfeeding promotion)
- **HBNC**: Home Based Newborn Care by ASHAs`,
        mnemonics: [
          { text: "IMR components: NMR + PNMR", explanation: "Infant Mortality = Neonatal (0-28d) + Post-neonatal (28d-1yr) mortality" },
          { text: "IMNCI age groups: 0-2m, 2m-5y", explanation: "Young infant (0-2 months) assessed separately from child (2 months-5 years)" },
        ],
        keyPoints: [
          "IMR is the most sensitive indicator of health status of a country",
          "India's IMR ~28/1000 live births (SRS 2020), target SDG: <12 by 2030",
          "Neonatal mortality contributes >60% of infant mortality in India",
          "Leading cause of neonatal death: prematurity and LBW",
          "IMNCI integrates management of pneumonia, diarrhea, malaria, measles, malnutrition",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Chapter 10: Preventive Medicine in Obstetrics, Paediatrics & Geriatrics", edition: "26th" },
        ],
      },
      {
        layer: 2,
        slug: "child-health-imr-layer-2-mechanism",
        title: "Child Health & IMR - Mechanism",
        estimatedMinutes: 25,
        summary: "Determinants of child mortality, epidemiological transition, and biological basis of childhood vulnerability.",
        contentMd: `# Child Health & IMR - Mechanism

## Determinants of Child Mortality
### Proximate Determinants (Mosley-Chen Framework)
- Maternal factors: Age, parity, birth interval
- Environmental contamination: Water, food, air, vectors
- Nutrient deficiency: Protein-energy, micronutrients
- Injury: Accidental, intentional
- Personal illness control: Preventive, curative measures

## Biological Vulnerability
- Immature immune system at birth (passive immunity from mother wanes by 6 months)
- Rapid growth demands high nutritional intake
- High surface area to volume ratio increases fluid and heat losses
- Developmental milestones create injury risk windows

## Epidemiological Transition in India
- Shift from communicable to non-communicable causes
- Persistent malnutrition as underlying cause in 45% of under-5 deaths
- Urban-rural disparity: Rural IMR 1.5-2x urban
- Gender disparity: Female child mortality higher in several states

## Risk Factors for Neonatal Death
| Factor | Mechanism |
|--------|-----------|
| LBW (<2500g) | Hypothermia, hypoglycemia, infection susceptibility |
| Prematurity | Surfactant deficiency, intraventricular hemorrhage |
| Birth asphyxia | Hypoxic ischemic encephalopathy |
| Sepsis | Poor innate immunity, nosocomial infections |`,
        mnemonics: [
          { text: "MOSLEY for determinants", explanation: "Maternal, Obstetric, Sanitation, Lactation, Environment, Youth (child factors)" },
          { text: "LBW complications: HHI", explanation: "Hypothermia, Hypoglycemia, Infection" },
        ],
        keyPoints: [
          "Mosley-Chen framework classifies proximate determinants of child mortality",
          "Malnutrition underlies ~45% of all under-5 deaths globally",
          "Neonatal period (first 28 days) carries highest mortality risk",
          "Birth interval <24 months doubles risk of infant death",
          "Low birth weight is single strongest predictor of neonatal mortality",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Chapter 10", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Chapter 14", edition: "5th" },
        ],
      },
      {
        layer: 3,
        slug: "child-health-imr-layer-3-clinical",
        title: "Child Health & IMR - Clinical Application",
        estimatedMinutes: 25,
        summary: "IMNCI protocol, growth monitoring, childhood immunization, and integrated child health interventions in India.",
        contentMd: `# Child Health & IMR - Clinical Application

## IMNCI Protocol
### Assessment of Sick Young Infant (0-2 months)
- Check for possible serious bacterial infection
- Assess for jaundice, diarrhea, feeding problems
- Classify: Pink (refer urgently), Yellow (treat), Green (home care)

### Assessment of Sick Child (2 months - 5 years)
- Check for danger signs: unable to drink, vomiting, convulsions, lethargy
- Assess: Cough/breathing, diarrhea, fever, ear problems, malnutrition, anemia
- Color-coded classification and treatment

## Growth Monitoring (WHO Growth Charts)
- Weight-for-age: Underweight detection
- Height-for-age: Stunting (chronic malnutrition)
- Weight-for-height: Wasting (acute malnutrition)
- MUAC: <11.5 cm = SAM in 6-59 months

## Key Interventions
| Intervention | Impact on Mortality |
|-------------|-------------------|
| Exclusive breastfeeding 6m | 13% reduction in U5MR |
| Complementary feeding | 6% reduction |
| Vitamin A supplementation | 23% reduction in measles mortality |
| Zinc for diarrhea | 23% reduction in diarrhea deaths |
| ORS for diarrhea | Major reduction in dehydration deaths |
| Immunization | Prevents 2-3 million deaths/year globally |

## RBSK (Rashtriya Bal Swasthya Karyakram)
- Screening at birth, 6w, 6m, 9m, 1y, then annually up to 18 years
- 4 Ds: Defects at birth, Diseases, Deficiencies, Developmental delays`,
        mnemonics: [
          { text: "IMNCI colors: PYG", explanation: "Pink = refer urgently, Yellow = treat at facility, Green = home care" },
          { text: "4D of RBSK", explanation: "Defects at birth, Diseases, Deficiencies, Developmental delays" },
        ],
        keyPoints: [
          "IMNCI uses color-coded classification: Pink (urgent), Yellow (treat), Green (home care)",
          "MUAC <11.5 cm in 6-59 month child = Severe Acute Malnutrition",
          "Exclusive breastfeeding for 6 months can reduce U5MR by 13%",
          "RBSK screens for 4Ds: Defects, Diseases, Deficiencies, Developmental delays",
          "WHO growth charts replaced NCHS charts; use Z-scores for classification",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Chapter 10", edition: "26th" },
        ],
      },
      {
        layer: 4,
        slug: "child-health-imr-layer-4-exam",
        title: "Child Health & IMR - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts on child health indicators, IMNCI, growth monitoring, and national programs for NEXT exam.",
        contentMd: `# Child Health & IMR - Exam Prep

## High-Yield Quick Facts
- IMR India (SRS 2020): ~28/1000 live births
- NMR India: ~20/1000 live births
- U5MR India: ~36/1000 live births
- SDG target for NMR: <12 by 2030
- SDG target for U5MR: <25 by 2030
- Kerala has lowest IMR (~6), MP/UP have highest (~40+)

## IMNCI Exam Pearls
- Developed by WHO/UNICEF, adapted for India (added neonatal component = IMNCI)
- Danger signs in child: Cannot drink, persistent vomiting, convulsions, lethargic/unconscious
- Fast breathing cut-offs: <2m: ≥60/min; 2-12m: ≥50/min; 1-5y: ≥40/min
- Chest indrawing = severe pneumonia in IMNCI

## Growth Monitoring Exam Tips
- Z-score <-2 SD = Moderate malnutrition
- Z-score <-3 SD = Severe malnutrition
- MUAC 11.5-12.5 cm = MAM; <11.5 cm = SAM
- Bilateral pitting edema = Kwashiorkor regardless of weight

## Common MCQ Topics
- Most sensitive health indicator = IMR
- Best indicator of protein status in community = prevalence of LBW
- Most common cause of neonatal death in India = prematurity/LBW
- Vaccine preventable disease with highest case fatality = measles`,
        mnemonics: [
          { text: "Fast breathing: 60-50-40 rule", explanation: "<2m: ≥60, 2-12m: ≥50, 1-5y: ≥40 breaths/min" },
          { text: "SAM criteria: MUAC-WH-Edema", explanation: "MUAC <11.5, W/H <-3SD, bilateral pitting edema (any one = SAM)" },
        ],
        keyPoints: [
          "IMR is the most frequently asked indicator in community medicine exams",
          "Fast breathing thresholds: 60/50/40 by age group is a must-know",
          "SAM diagnosis: MUAC <11.5 OR W/H <-3 SD OR bilateral pitting edema",
          "IMNCI danger signs: cannot drink, persistent vomiting, convulsions, lethargy",
          "Kerala lowest IMR, Madhya Pradesh among highest - state-wise comparison is high-yield",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Chapter 10", edition: "26th" },
        ],
      },
      {
        layer: 5,
        slug: "child-health-imr-layer-5-active-recall",
        title: "Child Health & IMR - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-style Q&A covering child health indicators, IMNCI, growth monitoring, and national programs.",
        contentMd: `# Child Health & IMR - Active Recall

**Q1:** What is the most sensitive indicator of the health status of a community?
**A1:** Infant Mortality Rate (IMR) - deaths under 1 year per 1000 live births.

**Q2:** What percentage of infant mortality in India is contributed by neonatal mortality?
**A2:** >60% of infant deaths occur in the neonatal period (first 28 days).

**Q3:** What is the fast breathing threshold for a 4-month-old in IMNCI?
**A3:** ≥50 breaths/min (age 2-12 months threshold).

**Q4:** What MUAC cut-off defines SAM in a 2-year-old?
**A4:** MUAC <11.5 cm = Severe Acute Malnutrition in children 6-59 months.

**Q5:** Name the 4 Ds screened under RBSK.
**A5:** Defects at birth, Diseases, Deficiencies, Developmental delays.

**Q6:** What is the leading cause of neonatal death in India?
**A6:** Prematurity and low birth weight (~35% of neonatal deaths).

**Q7:** What color classification in IMNCI requires urgent referral?
**A7:** Pink classification = urgent referral to higher facility.

**Q8:** What is the Z-score cut-off for severe wasting?
**A8:** Weight-for-height Z-score < -3 SD.

**Q9:** Name 3 key child health programs under NHM in India.
**A9:** ICDS (Anganwadi services), RBSK (child screening), MAA (breastfeeding promotion).

**Q10:** What is the SDG 2030 target for neonatal mortality rate?
**A10:** NMR should be reduced to less than 12 per 1000 live births by 2030.

**Q11:** In IMNCI, what are the danger signs in a sick child?
**A11:** Cannot drink/breastfeed, persistent vomiting, convulsions, lethargic or unconscious.

**Q12:** How does exclusive breastfeeding impact child mortality?
**A12:** Exclusive breastfeeding for 6 months reduces under-5 mortality by approximately 13%.`,
        mnemonics: [
          { text: "IMR = NMR + PNMR", explanation: "Infant Mortality = Neonatal Mortality (0-28d) + Post-Neonatal Mortality (28d-1yr)" },
          { text: "IMNCI danger signs: CVLD", explanation: "Cannot drink, Vomiting everything, Lethargic, (history of) convulsions" },
        ],
        keyPoints: [
          "IMR is the gold standard indicator for community health assessment",
          "Neonatal mortality contributes the majority of infant deaths in India",
          "IMNCI uses age-specific respiratory rate thresholds: 60/50/40",
          "SAM can be diagnosed by any ONE of: MUAC <11.5, W/H <-3SD, bilateral edema",
          "RBSK provides screening from birth to 18 years for 4 categories of conditions",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Chapter 10", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Chapter 14", edition: "5th" },
        ],
      },
    ],
  },
];
