import type { TopicLessons } from "./content-loader";

export const pediatricsGapLessons: TopicLessons[] = [
  {
    topicCode: "PE-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "vital-stats-child-health-foundation",
        title: "Vital Statistics & Child Health Indicators - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of vital statistics in child health including IMR, NMR, U5MR definitions and their measurement.",
        contentMd: `# Vital Statistics & Child Health Indicators - Foundation

## Definitions of Key Indicators

### Infant Mortality Rate (IMR)
- **Definition**: Number of infant deaths per 1000 live births in a year
- **Age range**: Deaths occurring between birth and 12 months
- **Numerator**: Deaths <1 year
- **Denominator**: Live births in same year (×1000)
- **Significance**: Reflects overall health of a nation; key SDG indicator

### Neonatal Mortality Rate (NMR)
- **Definition**: Deaths in first 28 days of life per 1000 live births
- **Components**: Early NMR (0-7 days) and late NMR (8-28 days)
- **Early neonatal deaths**: Majority due to birth asphyxia, prematurity, congenital anomalies
- **Late neonatal deaths**: Infections (sepsis, tetanus), feeding problems

### Under-Five Mortality Rate (U5MR)
- **Definition**: Probability of death before 5th birthday per 1000 live births
- **Includes**: All infant deaths + childhood deaths (1-5 years)
- **Causes <5 years**: Infections (pneumonia, diarrhea, malaria), malnutrition, accidents
- **Calculation**: Includes deaths from 0-59 months

## India's Current Status (NFHS-5, 2019-21)

### IMR in India
- **National IMR**: 35 per 1000 live births
- **Urban**: 27 per 1000 live births
- **Rural**: 41 per 1000 live births
- **Trend**: Declining from 47 (NFHS-4, 2015-16)

### NMR in India
- **National NMR**: 19 per 1000 live births
- **Early NMR**: Accounts for ~50% of infant deaths
- **Contributing factors**: Birth asphyxia, prematurity, IUGR

### U5MR in India
- **National U5MR**: 41 per 1000 live births
- **Variation**: High in low-income states (Bihar 46, Madhya Pradesh 47)
- **Target**: SDG goal is <25 per 1000 live births by 2030
`,
        mnemonics: [
          {
            text: "IMR vs NMR vs U5MR: I=1yr, N=28days, U=5yrs",
            explanation: "Quick recall of age ranges for each mortality indicator"
          },
          {
            text: "INDIA IMR=35, NMR=19, U5MR=41 (NFHS-5)",
            explanation: "Current national statistics for quick reference"
          }
        ],
        keyPoints: [
          "IMR is deaths <1 year per 1000 live births; NMR is deaths <28 days; U5MR includes all deaths <5 years",
          "NMR accounts for ~54% of IMR in India, indicating major contribution from early neonatal deaths",
          "Rural IMR (41) significantly higher than urban (27), reflecting health infrastructure disparities",
          "Main causes of neonatal mortality: birth asphyxia, prematurity, congenital anomalies, infections",
          "India's U5MR declining but still above SDG 2030 target of 25 per 1000 live births"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Child Health and Public Health", edition: "9th" },
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Vital Statistics", edition: "25th" },
          { book: "NFHS-5 Report", chapter: "Child Health Indicators", edition: "2019-21" }
        ]
      },
      {
        layer: 2,
        slug: "vital-stats-mechanism",
        title: "Vital Statistics & Child Health Indicators - Mechanism",
        estimatedMinutes: 22,
        summary: "Factors contributing to mortality rates and mechanisms of prevention.",
        contentMd: `# Vital Statistics - Mechanism

## Factors Contributing to High Mortality Rates

### Neonatal Mortality Factors (0-28 days)
- **Birth asphyxia**: Perinatal complications, delayed resuscitation
- **Prematurity**: <37 weeks; immature organs, respiratory distress
- **IUGR**: Intrauterine growth restriction due to maternal malnutrition/infections
- **Congenital anomalies**: Detected at birth or early neonatal period
- **Infections**: Vertical transmission (TORCH, TB, GBS), aspiration

### Infant Mortality Factors (1-12 months)
- **Respiratory infections**: Pneumonia (RSV, influenza), inadequate antibiotics
- **Diarrheal diseases**: Cholera, rotavirus, E. coli; dehydration
- **Malnutrition**: Protein-energy malnutrition increases infection susceptibility
- **Immunization gaps**: Preventable diseases (measles, polio, pertussis)
- **Accidents**: Unintentional injuries increase with mobility

### Under-Five Mortality Contributors
- **All above factors** plus childhood illnesses
- **Malaria**: Endemic in tropical regions, preventable with ITN
- **Tuberculosis**: Primary TB pneumonia in young children
- **Accidents/Injuries**: Increasing cause in developed regions
- **Malnutrition**: SAM/MAM increases infection risk 5-10 fold

## Prevention Mechanisms

### Antenatal Interventions
- Maternal nutrition (IFA supplementation)
- Infection screening (syphilis, TB, HIV)
- Detection of high-risk pregnancies

### Perinatal Interventions
- Skilled birth attendance
- Neonatal resuscitation capacity
- Early identification of high-risk newborns

### Postnatal/Childhood Interventions
- Breastfeeding promotion (reduces mortality by 13% overall)
- Immunization (prevents 3+ million deaths annually globally)
- Micronutrient supplementation (Vitamin A, zinc)
- IMNCI/IMCI training for health workers
- DOTS for TB, artemisinin for malaria
`,
        mnemonics: [
          {
            text: "NEONATAL CAUSES: BAD CII = Birth asphyxia, Asphyxia (perinatal), Congenital anomalies, Infections, IUGR",
            explanation: "Main causes of neonatal mortality in order of frequency"
          },
          {
            text: "INFANT MORTALITY: RDM = Respiratory, Diarrhea, Malnutrition (plus immunization gaps)",
            explanation: "Preventable causes of infant mortality after neonatal period"
          }
        ],
        keyPoints: [
          "Birth asphyxia causes ~20% of neonatal deaths; delayed resuscitation increases risk",
          "Prematurity and IUGR account for 35% of neonatal deaths combined",
          "Diarrhea and pneumonia cause 50% of all childhood deaths globally; both preventable",
          "Malnutrition increases infection susceptibility by 5-10 fold and accounts for 45% of childhood deaths",
          "Immunization has proven impact: prevents 3+ million deaths annually including measles, polio, pertussis"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Neonatology & Child Health", edition: "9th" },
          { book: "UNICEF/WHO/World Bank Joint Child Mortality Report", chapter: "Under-Five Mortality Trends", edition: "2021" }
        ]
      },
      {
        layer: 3,
        slug: "vital-stats-clinical",
        title: "Vital Statistics & Child Health Indicators - Clinical",
        estimatedMinutes: 24,
        summary: "Clinical application of vital statistics in assessing population health and planning interventions.",
        contentMd: `# Vital Statistics - Clinical Applications

## Interpreting Mortality Data for Clinical Practice

### Using IMR/NMR/U5MR for Program Evaluation
- **Baseline assessment**: Establish current status before intervention
- **Trend analysis**: 3-5 year trends more reliable than annual fluctuations
- **Comparative analysis**: IMR comparison between states, districts guides resource allocation
- **Target setting**: Use baseline to set realistic targets aligned with SDGs

### District-Level Variations in India (Example)
| Indicator | Best | Worst | Median |
|-----------|------|-------|--------|
| **IMR** | 16 (Kerala) | 51 (Uttar Pradesh) | 35 |
| **NMR** | 9 (Kerala) | 30 (Uttar Pradesh) | 19 |
| **U5MR** | 20 (Kerala) | 61 (Uttar Pradesh) | 41 |

### Causes of High Variation
- Infrastructure: Hospitals, trained staff per capita
- Socioeconomic: Literacy, income, nutrition status
- Healthcare access: Distance to health facility, transport
- Behavioral: Immunization coverage, antenatal care utilization

## Clinical Impact of Each Mortality Type

### Reducing NMR (0-28 days)
**Clinical interventions:**
- Kangaroo Mother Care for LBW/premature infants
- Prophylactic antibiotics for pre-labor rupture of membranes
- Neonatal resuscitation training (HELPLINE protocol)
- Early detection and management of jaundice (phototherapy/exchange transfusion)
- Thermal care (prevent hypothermia)

**Expected impact**: Each intervention reduces NMR by 5-15%

### Reducing IMR (1-12 months)
**Clinical interventions:**
- Exclusive breastfeeding promotion (reduces IMR by 13%)
- Timely immunization (reduces specific disease mortality)
- ORS distribution for diarrhea management
- Zinc supplementation for diarrhea (reduces severity/duration)
- Prompt antibiotic initiation for pneumonia (IMNCI criteria)

**Expected impact**: Multiple interventions combined can reduce IMR by 25-30%

### Reducing U5MR (0-5 years)
**Additional interventions beyond IMR:**
- Malaria prevention (ITN, artemisinin therapy)
- TB case detection and DOT (directly observed therapy)
- Accident prevention: poisoning, drowning awareness
- Nutritional rehabilitation programs for SAM
- Diarrhea with severe dehydration: IV fluids, monitoring

## Monitoring and Evaluation Framework

### Birth Registration and Death Certification
- Essential for accurate mortality statistics
- India's registration rate: ~90% births, ~85% deaths
- Rural areas lag behind; private sector under-recorded
- Impact: Mortality figures may be underestimated in remote areas

### Data Quality Assurance
- Verbal autopsy for deaths not medically certified
- Cross-validation with hospital records
- Regular audits and supervision
`,
        mnemonics: [
          {
            text: "REDUCE NMR: KMC, Resuscitation, Thermal care, Jaundice management",
            explanation: "Key clinical interventions for neonatal mortality reduction"
          },
          {
            text: "REDUCE IMR: BIO-Z = Breastfeeding, Immunization, ORS, Zinc supplementation",
            explanation: "Evidence-based clinical interventions for infant mortality"
          }
        ],
        keyPoints: [
          "Kerala's IMR (16) vs UP's (51) shows 3-fold variation; driven by infrastructure, literacy, healthcare access",
          "Exclusive breastfeeding reduces IMR by 13% and is universally applicable intervention",
          "Kangaroo Mother Care for preterm infants reduces mortality by 25-30% and improves morbidity outcomes",
          "IMNCI algorithm for pneumonia classification (fast breathing, danger signs) guides appropriate antibiotic use",
          "Birth registration crucial but only ~90% in India; impacts reliability of mortality statistics"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Child Health Programs in India", edition: "9th" },
          { book: "IMNCI Handbook", chapter: "Assessment and Management Guidelines", edition: "Current" }
        ]
      },
      {
        layer: 4,
        slug: "vital-stats-exam-prep",
        title: "Vital Statistics & Child Health Indicators - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts, common exam questions, and clinical scenarios.",
        contentMd: `# Vital Statistics - Exam Preparation

## High-Yield Facts

### Definitions (Quick Recall)
- **IMR**: Deaths <1 year per 1000 LB
- **NMR**: Deaths <28 days per 1000 LB
- **U5MR**: Deaths <5 years per 1000 LB
- **PNMR**: Perinatal mortality rate (stillbirths + early neonatal deaths)
- **ENMR**: Early neonatal mortality rate (0-7 days)
- **LNMR**: Late neonatal mortality rate (8-28 days)

### India Statistics (NFHS-5 2019-21)
- IMR: 35/1000
- NMR: 19/1000 (54% of IMR)
- U5MR: 41/1000
- MMR: 97/100,000 live births

### SDG Targets 2030
- IMR: <25/1000 live births
- U5MR: <25/1000 live births
- MMR: <70/100,000 live births

## Common Exam Questions

**Q1: Calculate IMR from given data**
- Total live births in year: 5000
- Infant deaths (<1 year): 150
- IMR = (150/5000) × 1000 = 30 per 1000 live births

**Q2: Differentiate neonatal and infant mortality**
- NMR (0-28 days): Mainly biological factors (birth asphyxia, prematurity, congenital anomalies)
- IMR (0-12 months): Includes both biological + environmental (infections, malnutrition, accidents)

**Q3: Which state has lowest IMR in India?**
- Answer: Kerala (16/1000)
- Followed by Goa, Himachal Pradesh
- Highest: Uttar Pradesh, Bihar, Madhya Pradesh

**Q4: List causes of neonatal mortality in order of frequency**
- Birth asphyxia (20%), prematurity (35%), congenital anomalies (15%), infections (15%), others (15%)
- Remember: APE-IC (Asphyxia, Prematurity, Congenital, Infections)

**Q5: Which intervention has highest impact on NMR?**
- Answer: Neonatal resuscitation + skilled birth attendance
- Reduces NMR by 30-40%
- Close second: Kangaroo Mother Care (25-30% reduction in preterm mortality)

## Clinical Scenario Questions

**Scenario 1**: A 32-week preterm infant needs to prevent hypothermia and ensure adequate feeding. Which intervention?
- Answer: Kangaroo Mother Care (skin-to-skin contact) maintains temperature and improves feeding tolerance

**Scenario 2**: District has IMR of 50/1000, target to reduce to 35/1000. Which 2 interventions?
- Answer: (1) Promote exclusive breastfeeding (13% reduction), (2) Improve immunization coverage (specific disease prevention)

**Scenario 3**: NMR remains high despite good IMR. What's the main problem?
- Answer: Quality of delivery and immediate postnatal care; need skilled birth attendants and neonatal resuscitation training

## Tables for Quick Reference

### Mortality by Age Group
| Age Group | Percentage of Under-5 Deaths |
|-----------|------------------------------|
| 0-7 days (ENMR) | 35% |
| 8-28 days (LNMR) | 19% |
| 1-12 months (Post-neonatal) | 34% |
| 1-5 years | 12% |

### Causes by Mortality Type
| Neonatal | Infant | Under-5 |
|----------|--------|---------|
| Asphyxia 20% | Diarrhea 20% | Diarrhea 15% |
| Prematurity 35% | Pneumonia 25% | Pneumonia 20% |
| Congenital 15% | Malnutrition 15% | Malnutrition 25% |
| Infections 15% | Accidents 10% | Accidents 10% |
| - | Malaria 8% | Malaria 8% |
`,
        mnemonics: [
          {
            text: "IMR 35, NMR 19, U5MR 41 = India's NFHS-5 stats",
            explanation: "Most common exam numbers for India"
          },
          {
            text: "APE-IC = Asphyxia, Prematurity, Congenital, Infections, Complications",
            explanation: "Top 5 causes of neonatal mortality"
          },
          {
            text: "NMR = 54% of IMR = Most neonatal deaths occur in first 7 days",
            explanation: "Key clinical implication for resource allocation"
          }
        ],
        keyPoints: [
          "IMR includes both neonatal (54%) and post-neonatal (46%) deaths; address both for overall reduction",
          "Birth asphyxia accounts for 20% of neonatal deaths; can be reduced 30-40% by skilled birth attendance",
          "Prematurity (35% of neonatal deaths) prevented by antenatal care and management of high-risk pregnancies",
          "Kerala achieves IMR of 16 through high institutional delivery (99%), trained attendants, and good immunization",
          "SDG target of <25 IMR by 2030 achievable; requires combined approach (antenatal care, skilled birth, immunization)"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Neonatology & Public Health", edition: "9th" },
          { book: "NFHS-5 State Fact Sheets", chapter: "Child Health Indicators", edition: "2019-21" }
        ]
      },
      {
        layer: 5,
        slug: "vital-stats-active-recall",
        title: "Vital Statistics & Child Health Indicators - Active Recall",
        estimatedMinutes: 18,
        summary: "Flashcard Q&As for mastery and retention of vital statistics.",
        contentMd: `# Vital Statistics - Active Recall Flashcards

## Flashcard Set (10+ Q&As)

**Q1: Define IMR**
A: Infant Mortality Rate = number of deaths in children <1 year per 1000 live births in a given year

**Q2: Define NMR and list components**
A: Neonatal Mortality Rate = deaths in first 28 days per 1000 live births. Components: ENMR (0-7 days) and LNMR (8-28 days)

**Q3: What is U5MR and why is it important?**
A: Under-five mortality rate = probability of death before 5th birthday per 1000 LB. Important because it reflects overall child health and development status of a nation

**Q4: What is India's current IMR (NFHS-5)?**
A: 35 per 1000 live births; rural 41, urban 27

**Q5: Which Indian state has the lowest IMR?**
A: Kerala with IMR of 16 per 1000 live births; highest is Uttar Pradesh (51)

**Q6: What percentage of IMR is due to neonatal deaths in India?**
A: Approximately 54% of IMR is neonatal mortality; 46% is post-neonatal

**Q7: List the top 3 causes of neonatal mortality**
A: (1) Prematurity (35%), (2) Birth asphyxia (20%), (3) Congenital anomalies (15%)

**Q8: What is SDG 3.2 target for IMR and U5MR by 2030?**
A: Both IMR and U5MR should be <25 per 1000 live births by 2030

**Q9: Which single intervention has the highest impact on reducing NMR?**
A: Skilled birth attendance with neonatal resuscitation capacity (reduces NMR by 30-40%)

**Q10: How much does exclusive breastfeeding reduce IMR?**
A: Exclusive breastfeeding reduces IMR by 13% and is a universal intervention across all settings

**Q11: What is the main reason for high rural IMR compared to urban IMR in India?**
A: Lack of skilled birth attendants, poor access to healthcare facilities, malnutrition, lower immunization coverage in rural areas

**Q12: If a district has 10,000 live births and 450 infant deaths, what is the IMR?**
A: IMR = (450/10,000) × 1000 = 45 per 1000 live births
`,
        mnemonics: [
          {
            text: "Kerala IMR=16 (best) | UP IMR=51 (worst) | National IMR=35",
            explanation: "Remember best/worst performers and national average"
          },
          {
            text: "NMR is 54% of IMR = Focus on skilled birth attendance and resuscitation",
            explanation: "Clinical priority for mortality reduction"
          }
        ],
        keyPoints: [
          "IMR of 35 in India means 35 out of 1000 children born will die before 1st birthday",
          "More than half of these deaths occur in first month (NMR = 19 of 35)",
          "Birth asphyxia (preventable by skilled attendance) + prematurity (preventable by antenatal care) = 55% of neonatal deaths",
          "Diarrhea, pneumonia, malnutrition account for 60% of post-neonatal infant deaths; all preventable",
          "Achieving SDG 2030 targets requires reducing current IMR/U5MR by ~30%; achievable with existing interventions"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Public Health Aspects of Pediatrics", edition: "9th" },
          { book: "WHO Newborn Mortality Report", chapter: "Global and Regional Trends", edition: "2021" }
        ]
      }
    ]
  },
  {
    topicCode: "PE-MOD-03-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "pediatric-gi-foundation",
        title: "Pediatric GI & Fluid Management - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of pediatric GI disorders including ORS, celiac disease, and IBD in children.",
        contentMd: `# Pediatric GI & Fluid Management - Foundation

## Diarrhea Management with ORS

### ORS Composition Evolution
**Old ORS Formula (WHO 1975)**
- Sodium chloride: 3.5 g/L
- Potassium chloride: 1.5 g/L
- Glucose (anhydrous): 20 g/L
- Sodium bicarbonate: 2.5 g/L
- Osmolarity: 311 mOsm/L (hyperosmolar)
- Limitation: Higher osmolarity → osmotic diarrhea in some cases

**New Low-Osmolarity ORS (WHO 2002)**
- Sodium chloride: 2.6 g/L
- Potassium chloride: 1.5 g/L
- Glucose (anhydrous): 13.5 g/L
- Sodium citrate: 2.9 g/L
- Osmolarity: 245 mOsm/L (hypoosmolar)
- Advantage: Reduces stool output by 20-30%, decreased need for IV therapy

### ORS Administration in India
- Packaged 500 mL sachet prepared with 1 liter water
- Daily requirement: Ongoing losses (stool + urine) + deficit replacement
- Route: Oral unless unable to tolerate (vomiting, severe dehydration)
- Monitoring: Urine output, clinical signs of rehydration

## Celiac Disease in Children

### Definition and Epidemiology
- **Autoimmune enteropathy** triggered by gluten (protein in wheat, barley, rye)
- **Indian prevalence**: 1 in 300-400 children (serological studies)
- **Presentation**: Often delayed until complementary feeding (6-12 months)
- **Classic presentation**: Chronic diarrhea, failure to thrive, abdominal distension

### Pathophysiology
- Tissue transglutaminase (tTG) antibodies attack intestinal mucosa
- Villous atrophy → reduced absorptive surface
- Malabsorption of fat-soluble vitamins, minerals, protein

### Clinical Features
- **GI**: Chronic diarrhea (pale, fatty), abdominal pain, bloating
- **Growth**: Failure to thrive, short stature, delayed puberty
- **Nutritional**: Anemia, osteoporosis, dermatitis herpetiformis (rash)
- **Other**: Irritability, delayed developmental milestones

## IBD in Children (Crohn's & Ulcerative Colitis)

### Epidemiology in Indian Children
- **Incidence**: Rising in urban areas; 1-2 per 100,000 children
- **Age of onset**: Peak at 10-19 years; can occur as early as 5 years
- **Pathophysiology**: Dysbiosis, immune dysregulation, genetic predisposition

### Crohn's Disease
- **Location**: Any part GI tract (mouth to anus); commonly terminal ileum
- **Features**: Transmural inflammation, skip lesions, cobblestone mucosa
- **Complications**: Fistulas, stenosis, abscesses, perforation
- **Symptoms**: Bloody diarrhea, abdominal pain, weight loss, extraintestinal manifestations

### Ulcerative Colitis
- **Location**: Colon and rectum only
- **Features**: Continuous mucosal inflammation (no skip lesions)
- **Complications**: Toxic megacolon (>6 cm diameter), perforation, cancer risk
- **Symptoms**: Bloody mucoid diarrhea, urgency, tenesmus, systemic symptoms

## Zinc Supplementation for Diarrhea

### WHO/UNICEF Recommendation
- **Dosage**: 10 mg daily for 10-14 days (2-5 yrs), 20 mg for >6 months
- **Benefit**: Reduces duration by 25%, stool output by 20%
- **Mechanism**: Strengthens mucosal immunity, improves protein synthesis
- **Implementation**: Integrated in IMNCI for diarrhea management
`,
        mnemonics: [
          {
            text: "NEW ORS: 245 mOsm/L vs OLD ORS: 311 mOsm/L = Lower osmolarity reduces stool output",
            explanation: "Key difference and benefit of current WHO ORS formulation"
          },
          {
            text: "CELIAC: tTG antibodies, villous atrophy, malabsorption, FTT, anemia",
            explanation: "Pathophysiology and clinical features of celiac disease"
          },
          {
            text: "IBD: CD=transmural (anywhere), UC=mucosal (colon only)",
            explanation: "Distinguishing features of Crohn's vs Ulcerative Colitis"
          }
        ],
        keyPoints: [
          "New ORS with 245 mOsm/L reduces stool output by 20-30% compared to old hyperosmolar formula",
          "Celiac disease presents with chronic diarrhea and FTT; diagnosis by anti-tTG serology and intestinal biopsy",
          "IBD in children often presents with growth failure (short stature) and delayed puberty; extraintestinal features common",
          "Zinc supplementation for diarrhea reduces duration by 25% and should be given for 10-14 days",
          "Intractable diarrhea in infants (<6 months) different etiology; often infectious, requires IV fluid management"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Diarrhea and Malabsorption", edition: "9th" },
          { book: "WHO Pocket Book of Hospital Care for Children", chapter: "Diarrhea and Dehydration", edition: "2nd" }
        ]
      },
      {
        layer: 2,
        slug: "pediatric-gi-mechanism",
        title: "Pediatric GI & Fluid Management - Mechanism",
        estimatedMinutes: 22,
        summary: "Pathophysiology of diarrhea, malabsorption, and immune mechanisms in GI disorders.",
        contentMd: `# Pediatric GI - Mechanism

## Diarrhea Pathophysiology

### Types of Diarrhea
**Osmotic Diarrhea:**
- Mechanism: Non-absorbed osmotically active substance draws fluid into lumen
- Examples: Lactose intolerance, unabsorbed carbohydrates
- Features: Stops with fasting; low stool Na+ (<60 mEq/L)

**Secretory Diarrhea:**
- Mechanism: Active secretion of electrolytes and water
- Examples: Cholera toxin (increased cAMP), bacterial enterotoxins, VIPoma
- Features: Persists with fasting; high stool Na+ (>90 mEq/L); large volume

**Inflammatory Diarrhea:**
- Mechanism: Mucosal damage with loss of absorptive surface + exudation
- Examples: IBD, infection (Shigella, Salmonella)
- Features: Blood and mucus in stool; fever often present

**Motility Disorder:**
- Mechanism: Abnormal intestinal peristalsis (too fast or too slow)
- Examples: IBS, post-infectious IBS, medications (laxatives)

## ORS Mechanism: Glucose-Sodium Coupled Transport

### Principle
- **SGLT1 transporter**: Actively absorbs glucose + sodium via coupled transport
- **Ratio**: Sodium-to-glucose should be 1:1 or higher for optimal absorption
- **Water follows**: Osmotic gradient pulls water across intestinal mucosa

### Why New ORS Works Better
- Reduced glucose (13.5 vs 20 g/L) lowers osmolarity
- Maintains 1:1 Na:glucose ratio for optimal SGLT1 function
- Less osmotic diarrhea from excess glucose
- Better water absorption with less fluid overload

## Celiac Disease Immunopathology

### The "Perfect Storm"
1. **Genetic predisposition**: HLA-DQ2 (95%) or HLA-DQ8 (5%)
2. **Environmental trigger**: Gluten peptides
3. **Immune response**:
   - Dendritic cells present gluten peptides to T cells
   - Tissue transglutaminase (tTG) deamidates gluten glutamine
   - Cross-linking tTG-gluten creates high-avidity T cell epitope
   - TH1/TH17 response → inflammation
4. **Tissue damage**: CTLs kill enterocytes → villous atrophy

### Consequences of Villous Atrophy
- **Loss of absorptive surface**: 90% reduction in surface area
- **Malabsorption**: Fats, fat-soluble vitamins (A,D,E,K), iron, calcium, B12
- **Nutritional consequences**:
  - Iron deficiency anemia
  - Vitamin D deficiency → osteoporosis, rickets
  - Vitamin K deficiency → coagulopathy
  - Protein malabsorption → edema, muscle wasting

## IBD Pathophysiology

### Dysbiosis and Immune Activation
- Altered microbiota composition (reduced beneficial bacteria like Faecalibacterium prausnitzii)
- Increased pathogenic bacteria (E. coli, Enterococcus)
- Dysbiotic bacteria trigger increased intestinal permeability ("leaky gut")
- Microbial antigens cross epithelium → immune activation

### Th17 and Th1 Response
- **Increased IL-23 and IL-17**: Promotes Th17 differentiation
- **TNF-α overproduction**: Central to Crohn's inflammation
- **Reduced Tregs**: Loss of immune tolerance
- **Result**: Chronic mucosal inflammation

### Complications from Chronic Inflammation
- **Transmural inflammation (Crohn's)**: Fibrosis, strictures, fistulas
- **Toxic megacolon (UC)**: Loss of muscular tone, perforation risk
- **Nutritional**: Malabsorption, deficient growth, puberty delay
- **Systemic**: Arthritis, uveitis, erythema nodosum, primary sclerosing cholangitis
`,
        mnemonics: [
          {
            text: "DIARRHEA TYPES: OSmotic, SEcretory, INflammatory, MOtility = OS-IN-MO",
            explanation: "Four main pathophysiologic mechanisms of diarrhea"
          },
          {
            text: "CELIAC PATH: HLA→Gluten→tTG→Villous atrophy→Malabsorption",
            explanation: "Step-by-step immunopathology of celiac disease"
          }
        ],
        keyPoints: [
          "ORS works by coupled Na-glucose transport via SGLT1; hypoosmolar formula reduces osmotic diarrhea",
          "Celiac disease requires HLA-DQ2/DQ8 genetic background; without these genotypes, disease almost impossible",
          "Villous atrophy reduces absorptive surface by 90%; explains profound malabsorption in celiac disease",
          "IBD dysbiosis (reduced Faecalibacterium prausnitzii) can be partially restored with dietary interventions",
          "Transmural inflammation in Crohn's causes extraintestinal complications; mucosal-only inflammation in UC limits systemic manifestations"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Gastrointestinal Disorders", edition: "9th" },
          { book: "Robbins & Cotran Pathology", chapter: "Gastrointestinal Tract", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "pediatric-gi-clinical",
        title: "Pediatric GI & Fluid Management - Clinical",
        estimatedMinutes: 24,
        summary: "Clinical diagnosis, management, and monitoring of GI disorders.",
        contentMd: `# Pediatric GI - Clinical Management

## Diarrhea Management Protocol (IMNCI)

### Assessment Phase
**Determine dehydration severity:**
- **No dehydration**: Normal mental status, normal eyes, drinks normally, skin pinch goes back quickly
- **Some dehydration**: Restless, sunken eyes, drinks eagerly, skin pinch goes back slowly
- **Severe dehydration**: Lethargy, very sunken eyes, unable to drink, skin pinch goes back very slowly

### Rehydration Management

**Plan A (No/Mild Dehydration):**
- ORS 50 mL/kg over 4 hours
- Ongoing replacement: 10 mL/kg per diarrheal stool
- Continue breastfeeding/age-appropriate diet
- Zinc supplementation: 10-20 mg daily × 10-14 days

**Plan B (Some Dehydration):**
- ORS 100 mL/kg over 4 hours
- Ongoing replacement: 10 mL/kg per diarrheal stool
- Reassess after 4 hours; if improving, continue Plan B
- If not improving or worsening → shift to Plan C (IV therapy)

**Plan C (Severe Dehydration):**
- IV fluids: Normal saline or Ringer's lactate
- First bolus: 20 mL/kg IV over 15-30 minutes (repeat if needed)
- After rehydration: Maintenance + ongoing losses
- Monitor urine output (should be >1 mL/kg/hr)

### Continuation Phase
- Introduce age-appropriate diet immediately (not after rehydration)
- Continue breastfeeding
- Foods: Cereal-based, not fat-free
- **Avoid**: Fruit juice, sugary drinks, milk products initially

## Celiac Disease Diagnosis and Management

### Diagnostic Algorithm

**Step 1: Clinical Suspicion**
- Chronic diarrhea (>2 weeks)
- Failure to thrive (weight/height crossing percentiles)
- Abdominal distension, pain
- Anemia not responding to iron
- Short stature, delayed puberty

**Step 2: Serology (on gluten-containing diet)**
- **Tissue transglutaminase (tTG) IgA**: Sensitivity 95-98%, Specificity 95%
- **Endomysial antibodies (EMA) IgA**: More specific, less sensitive
- **Total IgA level**: Check to exclude IgA deficiency (5-10% celiac patients)

**Step 3: Endoscopy & Biopsy**
- **Indication**: Confirm diagnosis
- **Findings**: Villous atrophy (Marsh stage III-IV)
  - Marsh stage I: Increased intraepithelial lymphocytes
  - Marsh stage II: Crypt hyperplasia
  - Marsh stage III: Villous atrophy (partial, subtotal, total)

### Management
- **Gluten-free diet**: Lifelong, only definitive treatment
- **Dietary counseling**: Identify hidden sources of gluten
- **Supplementation**:
  - Iron (if anemic)
  - Vitamin D and calcium (for bone health)
  - Fat-soluble vitamins if deficient
- **Monitoring**: Repeat serology at 1-2 years to assess dietary adherence

## IBD in Children: Diagnosis and Initial Management

### Diagnostic Approach

**Clinical Features Suggestive of IBD:**
- Bloody diarrhea, mucus, tenesmus
- Abdominal pain (colicky or constant)
- Weight loss, growth failure
- Delayed puberty
- Extraintestinal manifestations (arthritis, eye involvement)
- >4 weeks duration

**Investigations:**
- **Colonoscopy + biopsy**: Shows mucosal inflammation
  - UC: Continuous inflammation, involvement of colon/rectum
  - Crohn's: Skip lesions, transmural involvement, cobblestone appearance
- **IBD markers**: Elevated CRP, ESR, fecal calprotectin
- **DEXA scan**: Assess for osteoporosis (chronic inflammation + malabsorption)

### Initial Management

**Induction Phase:**
- **Mild disease**: Mesalamine (5-ASA) or topical corticosteroids
- **Moderate disease**: Systemic corticosteroids (prednisolone 0.5-1 mg/kg/day) or immunosuppressants
- **Severe disease**: IV corticosteroids, possibly infliximab (TNF-α inhibitor)

**Maintenance Phase:**
- Continue mesalamine for UC
- Azathioprine/6-mercaptopurine for steroid-dependent disease
- Biological agents (anti-TNF): If frequent relapses or steroid-dependent

**Nutritional Support:**
- Supplementation for deficiencies
- Exclusive enteral nutrition (EEN) as first-line for Crohn's induction
- Monitor growth (height, weight, sexual development)

### Surgical Indications
- **Crohn's**: Fistulas with abscess, strictures, perforation
- **UC**: Toxic megacolon, perforation, failure of medical therapy
`,
        mnemonics: [
          {
            text: "ORS PLAN ABC: A=50mL/kg/4hrs, B=100mL/kg/4hrs, C=IV fluids",
            explanation: "Dose escalation for diarrhea rehydration by severity"
          },
          {
            text: "CELIAC DIAGNOSIS: tTG serology → Biopsy (villous atrophy) → Gluten-free diet",
            explanation: "Diagnostic and management pathway"
          },
          {
            text: "IBD SEVERITY: Mild=5-ASA, Moderate=Steroids, Severe=IV steroids/biologics",
            explanation: "Treatment escalation based on disease severity"
          }
        ],
        keyPoints: [
          "Early introduction of age-appropriate diet (not after full rehydration) reduces duration and severity of diarrhea",
          "Zinc supplementation should be given for 10-14 days regardless of diarrhea resolution to prevent recurrence",
          "Celiac disease diagnosis requires serology while on gluten; seronegativity or negative biopsy while gluten-free doesn't exclude disease",
          "Villousal atrophy in celiac disease takes 4-6 weeks to resolve after gluten withdrawal; antibodies take 6-12 months",
          "IBD in children often presents with growth failure as predominant feature; nutritional rehabilitation essential"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Diarrhea, Malabsorption, GI Disorders", edition: "9th" },
          { book: "IMNCI Handbook", chapter: "Diarrhea Assessment and Management", edition: "Current" }
        ]
      },
      {
        layer: 4,
        slug: "pediatric-gi-exam-prep",
        title: "Pediatric GI & Fluid Management - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts and common exam questions.",
        contentMd: `# Pediatric GI - Exam Preparation

## High-Yield Facts

### ORS Formulation
- **Old ORS (1975)**: 311 mOsm/L (hyperosmolar) - causes osmotic diarrhea
- **New ORS (2002)**: 245 mOsm/L (hypoosmolar) - reduces stool output 20-30%
- **Components**: Sodium, glucose, potassium, citrate, chloride
- **Sodium:glucose ratio**: Ideally 1:1 for SGLT1 function

### Celiac Disease
- **Prevalence in India**: 1 in 300-400 children (serological)
- **Genetics**: HLA-DQ2 (95%) or HLA-DQ8 (5%) required
- **Diagnosis**: tTG IgA antibodies + intestinal biopsy (villous atrophy)
- **Trigger**: Gluten (wheat, barley, rye)
- **Treatment**: Lifelong gluten-free diet

### IBD Epidemiology
- **Incidence in India**: Rising; 1-2 per 100,000 children (urban)
- **Crohn's**: Any part GI tract; transmural; skip lesions
- **UC**: Colon/rectum only; mucosal inflammation
- **Worst complication**: Toxic megacolon (UC) with perforation

## Exam-Style Questions

**Q1: Calculate ORS volume needed for rehydration**
- Child 2 years old with some dehydration (weight 12 kg)
- Plan B: 100 mL/kg × 12 = 1200 mL over 4 hours
- Answer: 300 mL/hour or 5 mL/minute

**Q2: ORS stops working; child becoming lethargic. Next step?**
- Answer: Shift from Plan B (ORS) to Plan C (IV fluids)
- Bolus: 20 mL/kg of normal saline IV over 15-30 minutes
- Then maintenance + ongoing losses

**Q3: Child presents with chronic diarrhea, FTT, abdominal distension. Celiac diagnosis?**
- Answer:
  1. Check tTG IgA serology (on gluten diet)
  2. If positive → confirm with endoscopy + biopsy
  3. If villous atrophy on biopsy → diagnose celiac disease

**Q4: What is the most specific antibody for celiac disease?**
- Answer: Endomysial antibodies (EMA) IgA
- But tTG IgA is preferred as it's more sensitive and practical
- EMA used for confirmation if tTG equivocal

**Q5: IBD child with bloody diarrhea, abdominal pain. Which drug first?**
- Mild-moderate disease: Mesalamine (5-ASA) or topical steroids
- Severe disease: IV corticosteroids or biologics (infliximab)

## Common Clinical Scenarios

**Scenario 1**: Infant 8 months with 6-week history of diarrhea, poor weight gain, irritability.
- Differential: Celiac (if on wheat), intractable diarrhea, malabsorption
- Approach: Serology if on gluten; dietary trial (removing suspected trigger)

**Scenario 2**: 4-year-old with bloody diarrhea, fever, abdominal pain × 2 months.
- Differential: IBD, infectious colitis, food allergy
- Investigation: Colonoscopy + biopsy to differentiate

**Scenario 3**: Severe dehydration with diarrhea; ORS not tolerated (vomiting).
- Answer: Start IV rehydration immediately (don't wait to complete ORS trial)
- Protocol: 20 mL/kg bolus over 15-30 min, repeat if needed

## Tables for Quick Memorization

| Feature | Crohn's Disease | Ulcerative Colitis |
|---------|-----------------|-------------------|
| **Location** | Any part GI tract | Colon + rectum only |
| **Inflammation** | Transmural | Mucosal only |
| **Pattern** | Skip lesions | Continuous |
| **Complications** | Fistulas, stenosis, abscess | Toxic megacolon, perforation |
| **Appearance** | Cobblestone, aphthous ulcers | Continuous erythema, crypt distortion |
| **Extraintestinal** | More common (30-40%) | Less common (10-15%) |

| Celiac Stage | Finding | Diagnosis |
|-------------|---------|-----------|
| Marsh 0 | Normal | Negative (seronegative celiac) |
| Marsh I | ↑ IELs | Latent celiac |
| Marsh II | Crypt hyperplasia | Potential celiac |
| Marsh III | Villous atrophy | Classic celiac |
| Marsh IV | Hypoplastic villi | Rare |
`,
        mnemonics: [
          {
            text: "NEW ORS: 245 (low) = less stool | OLD ORS: 311 (high) = more stool",
            explanation: "Quick memory aid for ORS osmolarity difference"
          },
          {
            text: "CELIAC: HLA-DQ2/DQ8 → tTG antibodies → Villous atrophy → Gluten-free",
            explanation: "Step-by-step diagnosis and management"
          },
          {
            text: "IBD: Crohn's=TRANSMURAL (fistulas), UC=MUCOSAL (megacolon)",
            explanation: "Key distinguishing pathology"
          }
        ],
        keyPoints: [
          "Plan A (50 mL/kg), Plan B (100 mL/kg), Plan C (IV) based on dehydration severity - common exam question",
          "Gluten-free diet is the ONLY definitive treatment for celiac disease; must be lifelong",
          "Crohn's disease in children often presents with growth failure as primary symptom; may precede GI symptoms",
          "Toxic megacolon (colon >6 cm, toxemia) is life-threatening complication of UC; requires intensive care/surgery",
          "Both diarrheal disease and IBD can lead to severe malnutrition; require monitoring of anthropometry and micronutrients"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Gastroenterology", edition: "9th" },
          { book: "IMNCI Handbook", chapter: "Diarrhea Management", edition: "Current" }
        ]
      },
      {
        layer: 5,
        slug: "pediatric-gi-active-recall",
        title: "Pediatric GI & Fluid Management - Active Recall",
        estimatedMinutes: 18,
        summary: "Flashcard Q&As for mastery of pediatric GI disorders.",
        contentMd: `# Pediatric GI - Active Recall Flashcards

**Q1: What is the osmolarity of new WHO ORS and how does it compare to old ORS?**
A: New ORS = 245 mOsm/L (hypoosmolar); Old ORS = 311 mOsm/L (hyperosmolar). Lower osmolarity reduces stool output by 20-30%

**Q2: What is the mechanism by which ORS is absorbed in diarrhea?**
A: Coupled sodium-glucose cotransport via SGLT1; water follows osmotic gradient; works even in cholera

**Q3: List the components of ORS**
A: Sodium chloride, potassium chloride, glucose, sodium citrate (buffer), water

**Q4: What is the sodium-to-glucose ratio in ORS and why is it important?**
A: 1:1 ratio (1 mole glucose to 1 mole sodium); optimal for SGLT1 function and maximum absorption

**Q5: Describe the pathophysiology of celiac disease**
A: HLA-DQ2/DQ8 genetic background → gluten triggers immune response → tTG deamidates gluten → tTG-gluten complex attacked by immune system → villous atrophy → malabsorption

**Q6: What antibody is most sensitive for celiac disease?**
A: Tissue transglutaminase (tTG) IgA; sensitivity 95-98%; most practical screening test

**Q7: What is the gold standard for diagnosing celiac disease?**
A: Small intestinal biopsy showing villous atrophy (Marsh stage III-IV); confirms serological diagnosis

**Q8: What is the only definitive treatment for celiac disease?**
A: Lifelong gluten-free diet; eliminates trigger and allows mucosal healing

**Q9: How long does villous atrophy take to heal after gluten withdrawal in celiac disease?**
A: 4-6 weeks for histologic improvement; 6-12 months for complete serologic remission (antibody disappearance)

**Q10: Differentiate Crohn's disease and Ulcerative Colitis by location and inflammation pattern**
A: Crohn's = any part GI tract, transmural, skip lesions; UC = colon/rectum only, mucosal inflammation, continuous

**Q11: What is the most serious acute complication of Ulcerative Colitis?**
A: Toxic megacolon (colon dilation >6 cm, loss of muscular function, toxemia); risk of perforation

**Q12: What is the first-line treatment for mild-moderate Crohn's disease?**
A: Exclusive enteral nutrition (EEN) for induction; if not tolerated, then corticosteroids or mesalamine

**Q13: What is the mechanism by which zinc supplementation helps in diarrhea?**
A: Strengthens mucosal immunity, improves protein synthesis, reduces mucosal permeability; reduces stool output and duration

**Q14: How many days should zinc supplementation be given in diarrhea?**
A: 10-14 days regardless of when diarrhea stops; prevents recurrence for up to 3 months

**Q15: Calculate the ORS volume for a 10 kg child with some dehydration using Plan B**
A: Plan B = 100 mL/kg × 10 kg = 1000 mL over 4 hours = 250 mL/hour or ~4 mL/minute
`
      }
    ]
  },
  {
    topicCode: "PE-MOD-05-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "pediatric-dermatology-foundation",
        title: "Pediatric Dermatology - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of common pediatric rashes, hemangiomas, and diaper dermatitis.",
        contentMd: `# Pediatric Dermatology - Foundation

## Common Pediatric Rashes

### Diaper Dermatitis (Nappy Rash)

**Irritant Contact Dermatitis (85% of cases)**
- **Cause**: Prolonged contact with urine, feces, moisture
- **Risk factors**: Infrequent diaper changes, tight diapers, low humidity
- **Appearance**: Erythema, edema, erosions in convex areas (buttocks, genitalia, thighs)
- **Spares**: Skin folds (unlike candidal)
- **Duration**: Resolves in 2-3 days with frequent changes

**Candidal Dermatitis (15% of cases)**
- **Cause**: Candida albicans overgrowth (following antibiotics, in immunocompromised)
- **Appearance**: Erythematous base with satellite pustules/papules
- **Involves**: Skin folds (groin, under buttocks) - main difference from irritant
- **Associated**: Oral thrush, other mucosal candidiasis
- **Treatment**: Antifungal cream (miconazole, clotrimazole) + frequent diaper changes

### Childhood Eczema (Atopic Dermatitis)

**Features**
- **Age of onset**: 2 months to 5 years most common
- **Distribution**: Face, hands, feet, flexural surfaces; spares diaper area
- **Appearance**: Erythema, edema, lichenification, excoriation (from scratching)
- **Triggers**: Allergens, irritants, stress, weather, infections
- **Complications**: Secondary bacterial infection (Staphylococcus aureus)

### Impetigo

**Presentation**
- **Most common bacterial skin infection** in children
- **Golden-yellow crusted lesions**: "Honey-crusted" appearance
- **Non-bullous form**: 70% of cases (most common)
- **Bullous form**: 30% of cases; Staphylococcal (produce exotoxins)
- **Distribution**: Face, limbs, areas with trauma
- **Contagious**: Spreads rapidly in daycare settings

### Scabies

**Features**
- **Causative agent**: Sarcoptes scabiei (mite)
- **Presentation**: Intense itching worse at night, burrows between fingers/toes
- **Lesions**: Papules, burrows, secondary excoriation
- **Distribution**: Finger webs, wrists, genitalia, buttocks
- **Spread**: Highly contagious; spreads by direct contact

### Tinea Capitis (Ringworm of Scalp)

**Epidemiology**
- **Most common fungal infection** in children
- **Age**: Peak 3-14 years
- **Causative agents**:
  - Trichophyton tonsurans (USA, Africa)
  - Microsporum canis (animal contact)
  - Trichophyton violaceum (Mediterranean, Asian populations)

**Presentation Types**
- **Non-inflammatory**: Gray scaly patches, "moth-eaten" alopecia, minimal inflammation
- **Inflammatory (kerion)**: Pustules, crusting, matted hair, draining cervical lymph nodes
- **Black dot type**: Hair breaks at scalp level leaving black dots

## Hemangiomas in Children

### Definition and Epidemiology
- **Most common vascular tumor** in children
- **Incidence**: 1-3% at birth; 10-12% by age 1 year
- **Pathophysiology**: Benign proliferation of endothelial cells with abnormal angiogenesis

### Clinical Features
**Infantile Hemangioma (most common)**
- **Timeline**: Absent/minimal at birth → rapid growth 0-12 months → slow involution 1-7 years
- **Appearance**: Red/purple, blanching, soft, compressible
- **Distribution**: Often on head/neck; can be superficial, deep, or mixed

**PHACES Syndrome** (if extensive hemangiomas)
- Posterior fossa brain malformations
- Hemangioma (large, segmental)
- Arterial anomalies
- Cardiac defects
- Eye abnormalities
- Sternal cleft/supraumbilical raphe

### Propranolol Therapy
- **Indication**: Large/rapidly growing/functionally compromising hemangiomas
- **Mechanism**: Reduces VEGF and bFGF signaling; induces endothelial cell apoptosis
- **Efficacy**: 60-90% show significant involution; faster than observation
- **Monitoring**: Baseline: ECG, echocardiogram; monitor heart rate, blood glucose, weight

## Clinical Assessment Framework

### History Taking
- Age of onset
- Progression pattern
- Associated symptoms (pruritus, pain)
- Triggering factors
- Previous treatments tried
- Impact on daily life/school

### Physical Examination
- Location and distribution
- Morphology (macule, papule, plaque, vesicle, blister)
- Color (erythema, pigmentation, blanching)
- Surface features (scale, crust, excoriation)
- Associated findings (lymphadenopathy, systemic signs)
`,
        mnemonics: [
          {
            text: "DIAPER RASH: Candidal=IN folds (includes), Irritant=NO folds (no includes)",
            explanation: "Distinguishing candidal (with satellite lesions in folds) from irritant dermatitis"
          },
          {
            text: "IMPETIGO: Honey-crusted, Non-bullous (70%) > Bullous (30%), Staphylococcal",
            explanation: "Key features of impetigo presentation"
          },
          {
            text: "HEMANGIOMA: Birth→Rapid growth (0-12mo)→Slow involution (1-7yrs)",
            explanation: "Natural history of infantile hemangioma"
          }
        ],
        keyPoints: [
          "Diaper dermatitis is irritant (no folds) vs candidal (with folds/satellite lesions); frequency of diaper changes key to prevention",
          "Childhood eczema spares diaper area (unlike other conditions); triggers include allergens, irritants, stress, infections",
          "Impetigo with honey-crusted appearance is most common bacterial skin infection in children; contagious",
          "Scabies with nighttime itching and burrows between finger webs is highly characteristic; treat all close contacts",
          "Infantile hemangiomas usually involute spontaneously 1-7 years; propranolol indicated only for large/problematic lesions"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Dermatological Disorders", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "20: The Skin", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "pediatric-dermatology-mechanism",
        title: "Pediatric Dermatology - Mechanism",
        estimatedMinutes: 22,
        summary: "Pathophysiology of pediatric skin conditions and immune mechanisms.",
        contentMd: `# Pediatric Dermatology - Mechanism

## Irritant vs Allergic Contact Dermatitis

### Irritant Contact Dermatitis
**Mechanism:**
- Direct cytotoxic damage to keratinocytes and epidermal cells
- Non-immune response (no sensitization needed)
- Dose-dependent: Higher exposure → more severe reaction
- Primarily affects stratum corneum barrier

**In Diaper Dermatitis:**
- Urine ammonia (from bacterial urease) → alkalization
- Fecal proteases and lipases → lipid barrier breakdown
- Moisture → maceration → increased permeability
- Occlusive environment → poor evaporation

**Timing:** Reaction within hours of exposure

### Allergic Contact Dermatitis
**Mechanism:**
- Type IV hypersensitivity (delayed T-cell response)
- Sensitization phase: Hapten-protein complex → processed by dendritic cells
- Elicitation phase: Re-exposure → T-cell activation → inflammation
- Requires prior sensitization

**Common pediatric allergens:**
- Nickel (jewelry, clothing snaps)
- Preservatives (fragrances in diapers, wipes)
- Rubber additives
- Plant allergens (poison ivy/oak)

**Timing:** 24-72 hours after exposure

## Atopic Dermatitis Pathophysiology

### Genetic Predisposition
- **FLG gene mutation**: Filaggrin protein deficiency → impaired skin barrier
- **Immune dysregulation**: Th2-skewed response (↑IL-4, IL-5, IL-13)
- **Family history**: 60% have atopic family history

### The "Atopic March"
1. **Atopic Dermatitis** (infancy/early childhood)
2. → **Allergic Rhinitis** (school age)
3. → **Asthma** (later childhood/adolescence)
- Pathophysiology: Shared Th2 immune dysregulation

### Barrier Dysfunction and Infection
- **Filaggrin deficiency**: Impaired moisture retention, reduced antimicrobial peptides
- **Staphylococcus aureus colonization**: 90% of AD patients colonized
- **Super-antigens**: Toxic shock syndrome toxin (TSST) and enterotoxins activate T cells non-specifically
- **Cycle**: Barrier dysfunction → infection → inflammation → more barrier damage

## Candida Albicans Overgrowth

### Normal Flora vs Infection
**Conditions favoring overgrowth:**
- **Antibiotic use**: Eliminates competing bacteria (especially lactobacilli)
- **Immunocompromise**: Low CD4 count, neutropenia
- **Moisture/occlusion**: Warm, moist environments (diaper area, skin folds)
- **Alkaline pH**: Reduces inhibitory lactobacilli

### Pathogenesis of Candidal Dermatitis
- **Spore germination**: Triggered by moisture, warmth, pH
- **Hyphal invasion**: Penetrate stratum corneum
- **Immune response**: T-cell and B-cell activation; neutrophil recruitment
- **Satellite lesions**: Result from extension of hyphae along hair follicles and along inflammatory pathways

## Impetigo Pathophysiology

### Non-Bullous Impetigo (Streptococcal)
- **Causative agent**: Group A Streptococcus (Streptococcus pyogenes)
- **Entry route**: Through minor trauma, insect bites, eczema
- **Virulence factors**: M protein (mimics host antigens), hyaluronidase (spreads infection)
- **Lesion formation**: Inflammatory response → honey-crusted pustules
- **Complications**: Post-streptococcal glomerulonephritis (PSGN)

### Bullous Impetigo (Staphylococcal)
- **Causative agent**: Staphylococcus aureus (especially MRSA in some regions)
- **Virulence factor**: Exfoliative toxins A/B → acantholysis (epidermal-dermal separation)
- **Lesion formation**: Large flaccid bullae that rupture easily leaving erosions
- **Complications**: Less common systemic disease; more localized

## Hemangioma Angiogenesis

### Endothelial Cell Proliferation
- **Growth phase (0-12 months)**:
  - Dysregulated angiogenesis with abnormal endothelial growth
  - High expression of VEGF (vascular endothelial growth factor)
  - bFGF (basic fibroblast growth factor) promotes proliferation
  - Increased hypoxia due to immature vascular structure
- **Stabilization phase (1-3 years)**: Growth rate slows
- **Involution phase (3-7+ years)**:
  - Spontaneous apoptosis of endothelial cells
  - Replacement with fibrofatty tissue
  - 50% complete involution by age 5, 90% by age 9

### Propranolol Mechanism
- **Reduces angiogenic factors**: Decreases VEGF and bFGF production
- **Induces apoptosis**: β-adrenergic signaling → endothelial cell death
- **Increases vasoconstriction**: Reduces blood flow to hemangioma
- **Results**: Faster involution than natural history
`,
        mnemonics: [
          {
            text: "IRRITANT vs ALLERGIC: Irritant=DIRECT cytotoxic (hours), Allergic=DELAYED T-cell (24-72hrs)",
            explanation: "Timing and mechanism differentiation"
          },
          {
            text: "ATOPIC MARCH: AD→Allergic Rhinitis→Asthma = Th2 dysregulation",
            explanation: "Sequential progression of atopic diseases"
          },
          {
            text: "HEMANGIOMA PHASES: Proliferation (0-12mo), Stabilization (1-3yr), Involution (3-7yr)",
            explanation: "Natural history timeline"
          }
        ],
        keyPoints: [
          "FLG (filaggrin) gene mutations reduce antimicrobial peptides and moisture retention; explain AD pathogenesis",
          "Staphylococcus aureus super-antigens in AD cause non-specific T-cell activation, perpetuating inflammation",
          "Candidal dermatitis requires moist, warm, alkaline environment; antibiotic use eliminates competing flora",
          "Non-bullous impetigo (Streptococcal) → PSGN risk; bullous impetigo (Staphylococcal) → toxin-mediated blistering",
          "Hemangioma involution is spontaneous; propranolol accelerates process by inducing endothelial apoptosis"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Skin Disorders", edition: "9th" },
          { book: "Robbins & Cotran Pathology", chapter: "Skin & Appendages", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "pediatric-dermatology-clinical",
        title: "Pediatric Dermatology - Clinical",
        estimatedMinutes: 24,
        summary: "Clinical diagnosis and management of pediatric skin conditions.",
        contentMd: `# Pediatric Dermatology - Clinical Management

## Diaper Dermatitis Management

### Prevention (First-Line)
- **Frequent diaper changes**: Every 2-3 hours or immediately if soiled
- **Gentle cleansing**: Use water; minimize use of wipes (friction, chemicals)
- **Drying thoroughly**: Gently pat dry; can air dry between changes
- **Barrier creams**: Zinc oxide, petroleum jelly at each diaper change
- **Loose-fitting diapers**: Improve ventilation, reduce friction
- **Moisture-absorbent products**: Higher-absorbency diapers

### Treatment of Irritant Dermatitis
- **Mild (erythema only)**:
  - Frequent changes (above)
  - Barrier cream (zinc oxide, petroleum jelly)
  - Usually resolves in 2-3 days

- **Moderate-severe (erosions)**:
  - Continue frequent changes + barrier cream
  - Consider topical corticosteroid (hydrocortisone 1%) for short course
  - Avoid occlusive products that trap moisture

### Treatment of Candidal Dermatitis
- **Antifungal cream**: Miconazole, clotrimazole, nystatin
- **Application**: After each diaper change on affected areas
- **Duration**: 7-10 days; continue 2-3 days after resolution
- **Associated oral thrush**: Treat with oral nystatin suspension
- **Maternal consideration**: If breastfeeding, mother may need antifungal treatment

## Atopic Dermatitis Management

### Stepwise Approach

**Step 1: Skin Care (All patients)**
- **Frequent bathing**: Daily with lukewarm (not hot) water; 10-15 minutes
- **Mild soap**: CeraVe, Cetaphil; avoid harsh detergents
- **Moisturizing**: Apply within 3 minutes of bathing; use thick creams (not lotions)
- **Common emollients**: Petroleum jelly, Aquaphor, Cetaphil cream
- **Avoid triggers**: Harsh fabrics (wool), fragrances, rough dyes

**Step 2: Topical Corticosteroids**
- **Mild-moderate AD**: Low-potency steroids (hydrocortisone 1%) for face/neck
- **Moderate-severe AD**: Mid-potency steroids (triamcinolone 0.1%) for body
- **Duration**: Use for 5-7 days; taper after improvement
- **Application**: To affected areas twice daily; apply moisturizer after drying
- **Monitoring**: Long-term use (>2 weeks) risk of striae, atrophy

**Step 3: Topical Calcineurin Inhibitors**
- **Indication**: Steroid-sparing agent; safe on face
- **Options**: Tacrolimus, pimecrolimus
- **Efficacy**: Effective for acute flares; slower onset than steroids
- **Advantage**: No atrophy risk; use on sensitive areas (face, skin folds)

**Step 4: Systemic Therapies** (if severe/uncontrolled)
- **Antihistamines**: For itch (hydroxyzine, cetirizine)
- **Oral corticosteroids**: Short course for severe flares only
- **Cyclosporine**: Steroid-sparing in severe refractory cases
- **Biologics**: Dupilumab (IL-4 inhibitor) for moderate-severe AD

### Infection Prevention
- **Keep nails short**: Prevent damage from scratching
- **Avoid known allergens**: Identify and eliminate triggers
- **Antihistamine itch control**: Better sleep, less scratching
- **Treat secondary infection**: If honey-crusted lesions → topical antibiotics (mupirocin) or systemic antibiotics

## Impetigo Management

### Diagnosis
- **Clinical diagnosis** usually sufficient; KOH prep not needed
- **Culture** if resistant to treatment or in outbreak setting
- **Non-bullous**: Honey-crusted; may have satellite lesions

### Treatment

**Topical (Localized disease)**
- **Mupirocin 2% ointment**: TID for 7 days; cover with occlusive dressing
- **Efficacy**: 95% cure rate for limited disease
- **Cleansing**: Gently remove crusts before application

**Systemic (Bullous or Extensive)**
- **First-line**: Oral amoxicillin-clavulanate or cephalexin (7-10 days)
- **MRSA risk**: Add TMP-SMX or clindamycin
- **Efficacy**: High cure rates with 10-day course
- **Monitoring**: Recheck at 10 days if not improving

### Prevention of Spread
- **Isolation**: Keep child home until lesions crust/antibiotics for 24 hours
- **Hand hygiene**: Frequent handwashing
- **Nail hygiene**: Keep nails short to prevent spread
- **Wound coverage**: Cover lesions with bandages if possible
- **Household contacts**: Watch for new lesions; treat if appear

## Scabies Management

### Diagnosis
- **Clinical diagnosis**: Burrows between finger webs, intense nighttime itch
- **Microscopy (optional)**: Scrape burrow, examine for mites
- **Dermoscopy**: Can visualize "delta wings" sign or mite triangles

### Treatment

**Topical Scabicides** (standard treatment)
- **Permethrin 5% cream**: Apply to all body from neck down; wash off 8-14 hours later
- **Timing**: Typically need 2 treatments one week apart
- **Infants <2 months**: Avoid permethrin; use sulfur 5% ointment

**Systemic Treatment**
- **Ivermectin**: Two doses 1-2 weeks apart (1-2 doses for crusted scabies)
- **Indication**: If permethrin unavailable or patient unable to cooperate
- **Dosing**: 150-200 mcg/kg per dose

### Treatment of Contacts
- **Treat all household members**: Even if asymptomatic
- **Close contacts**: Same treatment as index case
- **Isolation**: Not needed after first dose of effective scabicide

## Tinea Capitis Management

### Diagnosis
- **KOH mount**: Pluck 10-15 hairs; low sensitivity (50%)
- **Fungal culture**: Gold standard; identifies organism species
- **Wood's lamp**: Non-fluorescent in most cases (except Microsporum species)

### Treatment

**Topical Antifungals** (adjunctive only)
- **Selenium sulfide or ketoconazole shampoo**: BID for 4 weeks
- **Benefit**: Reduces spore shedding; prevents spread
- **Limitation**: Cannot penetrate hair shaft; insufficient as monotherapy

**Systemic Antifungals** (required for cure)
- **Terbinafine**: First-line; 4-6 weeks; faster cure than griseofulvin
- **Griseofulvin**: Alternative; 6-12 weeks
- **Itraconazole**: Also effective alternative

### Follow-up
- **Clinical assessment**: At 4 weeks; should show improvement
- **Hair regrowth**: Takes 3-6 months; can remove infected hairs periodically
- **Repeat culture**: If not improving to rule out resistance
- **School attendance**: Can return after starting treatment
`,
        mnemonics: [
          {
            text: "DIAPER CARE: Frequent changes (2-3hrs), Gentle cleansing (water), Dry thoroughly, Barrier cream",
            explanation: "Prevention principles for all diaper dermatitis"
          },
          {
            text: "AD TREATMENT: Skin care ALWAYS + Moisturize (within 3min bath) + Topical steroids for flares",
            explanation: "Foundation of atopic dermatitis management"
          },
          {
            text: "IMPETIGO: Honey-crusted, Topical=mupirocin (localized), Systemic=beta-lactams (extensive/bullous)",
            explanation: "Treatment decision based on extent"
          }
        ],
        keyPoints: [
          "Frequent diaper changes (every 2-3 hours) most important prevention; barrier creams provide additional protection",
          "Candidal dermatitis must involve skin folds with satellite lesions; requires antifungal cream + oral treatment if thrush",
          "Atopic dermatitis cornerstone is daily moisturization within 3 minutes of bathing; prevents 80% of flares",
          "Impetigo with mupirocin 2% has 95% cure for localized disease; systemic antibiotics needed for extensive/bullous forms",
          "Scabies requires treatment of ALL household members; permethrin 5% standard; 2 doses one week apart for complete cure"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Dermatological Conditions", edition: "9th" },
          { book: "AAD Guidelines on Pediatric Dermatology", chapter: "Management Protocols", edition: "Current" }
        ]
      },
      {
        layer: 4,
        slug: "pediatric-dermatology-exam-prep",
        title: "Pediatric Dermatology - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts and common exam questions on pediatric skin conditions.",
        contentMd: `# Pediatric Dermatology - Exam Preparation

## High-Yield Facts

### Diaper Dermatitis
- **Most common**: Irritant >Candidal (85:15 ratio)
- **Irritant**: NO skin folds, erythema ±edema/erosions
- **Candidal**: IN skin folds, satellite pustules/papules, associated thrush
- **Treatment**: Irritant=frequent changes+barrier cream; Candidal=antifungal cream

### Atopic Dermatitis
- **Age onset**: 2 months to 5 years most common
- **Distribution**: Face, hands, feet, flexural surfaces; SPARES diaper area
- **Pathophysiology**: FLG gene mutation + Th2 dysregulation + Staph aureus
- **Atopic march**: AD → Rhinitis → Asthma

### Impetigo
- **Most common bacterial skin infection** in children
- **Non-bullous (70%)**: Honey-crusted; Streptococcal
- **Bullous (30%)**: Flaccid bullae; Staphylococcal
- **Complications**: Non-bullous→PSGN; Bullous→toxic shock risk

### Scabies
- **Causative agent**: Sarcoptes scabiei (mite)
- **Distribution**: Finger webs, wrists, genitalia, buttocks
- **Key feature**: Intense itching worse at night; burrows pathognomonic
- **Treatment**: Permethrin 5% cream × 2 doses (1 week apart); treat all contacts

### Tinea Capitis
- **Most common fungal infection** in children
- **Agents in India**: Trichophyton tonsurans (common), T. violaceum
- **Presentation**: Non-inflammatory (moth-eaten alopecia), Inflammatory (kerion)
- **Diagnosis**: Fungal culture (gold standard); KOH only 50% sensitive
- **Treatment**: Systemic antifungal (terbinafine 4-6 weeks, griseofulvin 6-12 weeks); topical adjunctive

### Hemangioma
- **Most common vascular tumor** in children
- **Incidence**: 10-12% by age 1 year
- **Timeline**: Minimal at birth → Rapid growth (0-12 months) → Slow involution (1-7 years)
- **Propranolol**: 60-90% show significant involution; indicated for large/functionally important lesions
- **PHACES syndrome**: High-risk features requiring screening

## Common Exam Questions

**Q1: 8-month-old with erythematous lesions in diaper area sparing skin folds. Management?**
A: Irritant diaper dermatitis → Frequent diaper changes (every 2-3 hours) + barrier cream (zinc oxide)

**Q2: 2-year-old with honey-crusted lesions on face, especially around mouth. Organism?**
A: Impetigo non-bullous → Streptococcus pyogenes (Group A Strep) → Treat with topical mupirocin (localized) or oral amoxicillin-clavulanate

**Q3: 3-year-old with pruritic lesions on flexural surfaces bilaterally, worse in winter. Diagnosis?**
A: Atopic dermatitis → Management: Daily moisturization within 3 minutes of bath + topical corticosteroids for flares

**Q4: Child with scalp alopecia with broken hairs at level of scalp ("moth-eaten" appearance). Likely diagnosis?**
A: Tinea capitis → Non-inflammatory type → Requires systemic antifungal (terbinafine) + topical antifungal shampoo

**Q5: 6-month-old with red-purple lesion on cheek that blanches, present since birth. Future course?**
A: Infantile hemangioma → Will likely proliferate in first 12 months then slowly involute over 1-7 years → Observe vs propranolol if large

**Q6: Scabies in 4-year-old. How to treat entire family?**
A: Permethrin 5% cream applied from neck down, wash off 8-14 hours later; repeat in 1 week; treat ALL household members

## Differential Diagnosis Questions

**Q: Erythematous rash in diaper area. Differential between irritant and candidal?**
| Feature | Irritant | Candidal |
|---------|----------|----------|
| **Location** | Convex areas (not in folds) | IN skin folds |
| **Lesions** | Erythema, edema, erosions | Erythema + satellite pustules |
| **Associated** | None | Often oral thrush |
| **Onset** | Rapid (hours to days) | Subacute (days to weeks) |
| **Treatment** | Frequent changes, barrier cream | Antifungal cream |

**Q: Child with pruritic papules/nodules. Scabies vs eczema?**
| Feature | Scabies | Eczema |
|---------|---------|--------|
| **Burrows** | YES (finger webs) | NO |
| **Night itch** | Severe | Mild-moderate |
| **Distribution** | Finger webs, wrists, genitalia | Flexural surfaces |
| **Contact spread** | YES | NO |
| **Family history** | Often yes | Often atopic history |

## Tables for Memorization

| Condition | Age | Distribution | Key Feature | Treatment |
|-----------|-----|--------------|-------------|-----------|
| **Irritant Diaper Rash** | <3yr | NO folds | Erythema | Frequent changes |
| **Candidal Dermatitis** | <3yr | IN folds | Satellite pustules | Antifungal |
| **Atopic Dermatitis** | 2mo-5yr | Flexural | Itching | Moisturize + steroids |
| **Impetigo** | Any | Face/limbs | Honey-crusted | Mupirocin/beta-lactams |
| **Scabies** | Any | Webs/wrists | Nighttime itch | Permethrin |
| **Tinea Capitis** | 3-14yr | Scalp | Alopecia | Systemic antifungal |
| **Hemangioma** | Birth | Variable | Blanching | Propranolol if indicated |
`,
        mnemonics: [
          {
            text: "IRRITANT=Convex NO FOLDS | CANDIDAL=IN FOLDS with satellites",
            explanation: "One feature to distinguish diaper dermatitis types"
          },
          {
            text: "IMPETIGO 70/30: 70% non-bullous (Strep) → PSGN | 30% bullous (Staph) → exotoxin",
            explanation: "Frequency and organism association"
          },
          {
            text: "HEMANGIOMA: Proliferate (0-1yr) → Stabilize (1-3yr) → Involute (3-7yr)",
            explanation: "Natural history in three phases"
          }
        ],
        keyPoints: [
          "Diaper dermatitis 85% irritant (no folds) vs 15% candidal (in folds); most important prevention=frequent changes",
          "Atopic dermatitis spares diaper area (key distinguishing feature); pathophysiology is FLG mutation + Th2 immunity",
          "Impetigo non-bullous (Strep) has PSGN risk; bullous (Staph) has exotoxin-mediated blistering",
          "Scabies with burrows in finger webs + nighttime itching = treat entire family with permethrin",
          "Hemangiomas involute spontaneously; <10% need treatment; propranolol fastest if intervention needed"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Skin Diseases in Children", edition: "9th" },
          { book: "Indian Dermatology Online Journal", chapter: "Pediatric Dermatology Review", edition: "Current" }
        ]
      },
      {
        layer: 5,
        slug: "pediatric-dermatology-active-recall",
        title: "Pediatric Dermatology - Active Recall",
        estimatedMinutes: 18,
        summary: "Flashcard Q&As for mastery of pediatric dermatology conditions.",
        contentMd: `# Pediatric Dermatology - Active Recall Flashcards

**Q1: What is the most common cause of diaper dermatitis?**
A: Irritant contact dermatitis (85%); caused by prolonged contact with urine/feces moisture

**Q2: How do you differentiate candidal from irritant diaper dermatitis?**
A: Candidal = involves skin folds with satellite pustules/papules; Irritant = spares folds with erythema/erosions

**Q3: What is the first-line treatment for irritant diaper dermatitis?**
A: Frequent diaper changes (every 2-3 hours) + barrier cream (zinc oxide or petroleum jelly)

**Q4: What is the treatment for candidal diaper dermatitis?**
A: Antifungal cream (miconazole or clotrimazole) + oral nystatin if associated thrush

**Q5: At what age does atopic dermatitis typically begin?**
A: 2 months to 5 years is peak onset; can occur as early as 6-8 weeks

**Q6: Where is atopic dermatitis characteristically found in children?**
A: Face, hands, feet, flexural surfaces (antecubital and popliteal fossae); SPARES diaper area

**Q7: What is the pathophysiology of atopic dermatitis?**
A: FLG gene mutation (filaggrin deficiency) + Th2 immune dysregulation + Staphylococcus aureus colonization

**Q8: What is the cornerstone of atopic dermatitis management?**
A: Moisturization within 3 minutes of bathing with daily warm (not hot) water bathing

**Q9: What is the atopic march and its sequence?**
A: Atopic Dermatitis → Allergic Rhinitis → Asthma; all share Th2-mediated immune dysregulation

**Q10: What is the most common bacterial skin infection in children?**
A: Impetigo; caused by Group A Streptococcus (non-bullous 70%) or Staphylococcus aureus (bullous 30%)

**Q11: Describe the typical appearance of non-bullous impetigo**
A: Honey-crusted lesions, often with satellite pustules, most commonly on face and exposed areas

**Q12: What is the treatment for localized impetigo?**
A: Topical mupirocin 2% ointment TID for 7 days; has 95% cure rate for limited disease

**Q13: What is the treatment for extensive or bullous impetigo?**
A: Systemic antibiotics: First-line is oral amoxicillin-clavulanate or cephalexin for 10 days

**Q14: What is a serious complication of non-bullous (streptococcal) impetigo?**
A: Post-streptococcal glomerulonephritis (PSGN); can occur 1-3 weeks after skin infection

**Q15: What is the causative agent of scabies?**
A: Sarcoptes scabiei (mite); highly contagious; spreads by direct contact

**Q16: Where are scabies burrows characteristically found?**
A: Between finger webs, wrists, genitalia, buttocks; burrows pathognomonic for scabies

**Q17: What is the key clinical feature of scabies that distinguishes it from other conditions?**
A: Intense itching worse at night; burrows visible between finger webs; highly contagious

**Q18: What is the treatment for scabies?**
A: Permethrin 5% cream applied from neck down; wash off 8-14 hours later; repeat in 1 week

**Q19: Why must you treat all household members of a scabies patient?**
A: Because scabies is highly contagious through direct contact; even asymptomatic contacts are often infected

**Q20: What is tinea capitis and what is its epidemiology?**
A: Fungal infection of scalp; most common fungal infection in children; peak age 3-14 years

**Q21: What are the clinical presentations of tinea capitis?**
A: Non-inflammatory (gray scaly patches, "moth-eaten" alopecia); Inflammatory (kerion with pustules, matted hair)

**Q22: What is the gold standard diagnostic test for tinea capitis?**
A: Fungal culture of plucked hairs and scales; KOH mount has only 50% sensitivity

**Q23: What is the first-line systemic treatment for tinea capitis?**
A: Terbinafine for 4-6 weeks; faster cure than griseofulvin (6-12 weeks)

**Q24: What is the most common vascular tumor in children?**
A: Infantile hemangioma; incidence 1-3% at birth; 10-12% by age 1 year

**Q25: Describe the natural history of infantile hemangioma**
A: Absent/minimal at birth → Rapid proliferation (0-12 months) → Slow involution (1-7 years); 50% resolve by age 5; 90% by age 9
`
      }
    ]
  },
  {
    topicCode: "PE-MOD-08-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "surgical-emergencies-foundation",
        title: "Pediatric Surgical Emergencies - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of intussusception, pyloric stenosis, Hirschsprung disease, and CDH.",
        contentMd: `# Pediatric Surgical Emergencies - Foundation

## Intussusception

**Definition and Epidemiology**
- Invagination of proximal bowel into distal segment; "telescoping"
- Peak age: 6-36 months; rare <3 months and >3 years
- Incidence: 1-3 per 1000 children in India
- Ileocolic (75%): Terminal ileum invaginates into colon
- Idiopathic (90%): Enlarged Peyer's patches (viral enteritis, adenovirus)
- Secondary: Meckel's diverticulum, polyp, lymphoma, cystic fibrosis

**Presentation**
- Sudden onset colicky abdominal pain; infant draws legs up
- Palpable abdominal mass ("sausage-shaped mass") in right upper quadrant
- "Currant jelly stool": Late sign (40% cases); blood-stained mucus
- Vomiting: Bilious if complete obstruction
- Red flag: Shock, signs of perforation (fever, abdominal distension, toxic appearance)

**Diagnosis**
- **Gold standard**: Ultrasound (demonstrates "target sign" or "donut sign")
- **X-ray**: Signs of obstruction; may show "crescent sign"
- **CT**: Alternative if ultrasound unavailable

## Pyloric Stenosis

**Definition and Epidemiology**
- Hypertrophy and hyperplasia of pyloric muscle; gastric outlet obstruction
- Incidence: 2-4 per 1000; M:F ratio 4:1; peak 3-5 weeks of age
- First-born infants more commonly affected
- May have positive family history (10%)

**Presentation**
- **Progressive vomiting**: Non-bilious (projectile), hungry after vomiting
- **Timing**: 2-8 weeks of age typically
- **Weight loss and dehydration**: Progressive; infant appears wizened
- **Visible peristaltic waves**: "Olive-shaped mass" at epigastrium
- **Electrolyte abnormality**: Hypochloremic, hypokalemic metabolic alkalosis

**Diagnosis**
- **Ultrasound**: Pyloric muscle thickness >3-4 mm; channel diameter <10-14 mm
- **May demonstrate**: "Mushroom sign," delayed gastric emptying

## Hirschsprung Disease

**Definition and Pathophysiology**
- Absence of ganglion cells (aganglionosis) in enteric plexuses
- Results in failure of relaxation → functional obstruction
- Short segment (80%): Rectosigmoid
- Long segment (20%): Extended aganglionosis
- Associated: Down syndrome (10%), MEN 2A/B

**Presentation**
- **Neonatal enterocolitis**: Fever, abdominal distension, sepsis (most severe)
- **Delayed meconium passage**: >48 hours in term infant (classic finding)
- **Chronic constipation**: In older children; may present with abdominal distension
- **Enterocolitis signs**: Explosive diarrhea, fever, shock

**Diagnosis**
- **Barium enema**: Transition zone (narrow segment → dilated proximal bowel)
- **Rectal biopsy**: Gold standard; absence of ganglion cells confirms

## Congenital Diaphragmatic Hernia (CDH)

**Definition and Epidemiology**
- Defect in diaphragm allowing visceral herniation into thoracic cavity
- Incidence: 1-2 per 3000 births
- Bochdalek hernia (80%): Posterolateral defect; left > right
- Morgagni hernia (20%): Anteriormedial defect; right-sided

**Presentation**
- Respiratory distress at birth with cyanosis
- Scaphoid abdomen (hollowed appearance)
- Displaced heart sounds (if left-sided hernia)
- Bowel sounds audible in chest
- May present later (weeks-years) if small defect

**Complications**
- Pulmonary hypoplasia: Underdeveloped lungs
- Pulmonary hypertension: From abnormal vessel development
- Right-to-left shunting: Severe hypoxia despite oxygen
`
      },
      {
        layer: 2,
        slug: "surgical-emergencies-mechanism",
        title: "Pediatric Surgical Emergencies - Mechanism",
        estimatedMinutes: 22,
        summary: "Pathophysiology of surgical emergencies in children.",
        contentMd: `# Pediatric Surgical Emergencies - Mechanism

## Pathophysiology of Intussusception

**Trigger Factors**
- Viral enteritis causing enlarged Peyer's patches
- Adenovirus, rotavirus predisposition
- Meckel's diverticulum acts as lead point

**Mechanism of Obstruction**
- Invaginated segment leads to:
  1. Compression of mesentery → venous obstruction
  2. Edema of invaginated segment
  3. Mucosal ischemia if prolonged
  4. Perforation risk increases with duration

**Currant Jelly Stool**
- Occurs when intestinal mucosa becomes necrotic
- Results from venous congestion → mucosal bleeding
- Late sign; indicates ischemia and need for urgent intervention

## Pyloric Stenosis Pathophysiology

**Muscle Hypertrophy Mechanism**
- Increased gastrin signaling (not completely understood)
- Possible: Immature inhibitory innervation
- Progressive muscle thickening → outlet obstruction

**Fluid-Electrolyte Derangement**
- **Vomiting cycle**: Loss of HCl + K+ in gastric juice
- **Hypochloremia**: From HCl loss
- **Hypokalemia**: From K+ loss and urinary compensation (H+ reabsorption, K+ excretion)
- **Metabolic alkalosis**: HCl loss + kidney compensation (reabsorbs HCO3-)
- **Dehydration**: Progressive fluid loss from vomiting

## Hirschsprung Disease Pathophysiology

**Embryologic Basis**
- Neural crest cell migration incomplete during weeks 4-12 of gestation
- Failure of ganglion cell migration → aganglionosis
- Aganglionosis prevents coordinated relaxation

**Functional Obstruction**
- Aganglionic segment cannot relax
- Proximal bowel dilates from pressure
- "Transition zone" where innervation begins

**Enterocolitis Development**
- Stasis of intestinal contents
- Bacterial overgrowth
- Mucosal invasion → inflammation, sepsis
- Can occur preoperatively or postoperatively

## CDH Pathophysiology

**Developmental Defect**
- Failure of pleuroperitoneal membrane closure
- Visceral organs herniate into thorax during fetal life
- Mechanical compression of developing lungs

**Pulmonary Hypoplasia**
- Lung development requires mechanical expansion
- Herniated organs prevent lung expansion
- Results in:
  - Reduced number of alveoli
  - Underdeveloped pulmonary vasculature
  - Increased risk of pulmonary hypertension

**Gas Exchange Failure**
- Inadequate lung tissue despite oxygenation
- Right-to-left shunt through fetal channels (PDA, foramen ovale)
- High mortality (30-50%) depending on lung volume
`
      },
      {
        layer: 3,
        slug: "surgical-emergencies-clinical",
        title: "Pediatric Surgical Emergencies - Clinical",
        estimatedMinutes: 24,
        summary: "Clinical diagnosis and emergency management of surgical conditions.",
        contentMd: `# Pediatric Surgical Emergencies - Clinical Management

## Intussusception: Diagnosis and Treatment

**Diagnostic Algorithm**
1. **Clinical suspicion**: Infant 6-36 months with colicky pain + palpable mass
2. **Ultrasound**: Gold standard; "target sign" diagnostic (concentric rings)
3. **No perforation signs**: Proceed to reduction attempt

**Immediate Management**
- **NPO**: Nothing by mouth; IV access
- **Fluids**: IV normal saline; correct dehydration (often mild-moderate)
- **Antibiotics**: Broad-spectrum if perforation suspected

**Reduction Approaches**
- **Hydrostatic reduction**: Barium or water-soluble contrast enema; 60-90% success
  - Fluoroscopic guidance; gentle pressure only
  - Avoid high pressures (perforation risk)
- **Pneumatic reduction**: Air enema; slightly higher success rates
- **Surgical reduction**: If failed conservative attempts or perforation present

**Success Indicators**
- Contrast flows into terminal ileum and cecum
- Abdominal pain resolves
- Bowel function returns
- Recurrence rate: 5-10% after successful reduction

**When to Surgery**
- Failed reduction attempts (2-3 attempts)
- Signs of perforation: Free air, peritonitis, shock
- Resection if necrotic bowel segment

## Pyloric Stenosis: Diagnosis and Treatment

**Diagnosis**
- **Ultrasound**: Pyloric muscle thickness >3-4 mm; channel diameter <10-14 mm
- **Barium study**: May show delayed gastric emptying, mushroom sign

**Preoperative Management**
- **Correct dehydration and electrolytes**: Essential before surgery
- **IV fluids**: Normal saline until electrolytes normalized
- **Target**: Urine output >1 mL/kg/hr before induction
- **Nasogastric decompression**: Reduces aspiration risk

**Surgical Correction**
- **Pyloromyotomy (Ramstedt procedure)**: Gold standard
- **Technique**: Division of pyloric muscle fibers (not full-thickness)
- **Approach**: Usually open (small Ramstedt incision) or laparoscopic
- **Feed advancement**: Start 4-6 hours postoperatively; gradual return to normal

**Postoperative Course**
- Excellent prognosis with proper surgical technique
- Feeding may be attempted 4-6 hours postoperatively
- Complete recovery expected

## Hirschsprung Disease: Diagnosis and Management

**Diagnostic Approach**
1. **Clinical suspicion**: Delayed meconium >48 hours in term infant; abdominal distension
2. **Abdominal X-ray**: Dilated bowel loops; may show transition zone
3. **Barium enema**: Transition zone (narrow aganglionic → dilated proximal)
4. **Rectal biopsy**: Gold standard; confirms absence of ganglion cells

**Emergency Management of Enterocolitis**
- **Resuscitation**: IV fluids, broad-spectrum antibiotics, possible vasopressors
- **Decompression**: Nasogastric tube; regular rectal irrigations
- **Avoid**: Stimulation of bowel; can precipitate toxic megacolon
- **Monitor**: Signs of perforation, septic shock

**Definitive Treatment**
- **Surgical: Pull-through procedure**: Removes aganglionic segment, anastomoses normal ganglionated bowel to anus
- **Timing**: Depends on severity; urgent for enterocolitis, elective once stabilized
- **Sphincter preservation**: Maintains continence where possible

## CDH: Emergency Management

**Immediate Stabilization**
- **Airway**: Intubation if severe respiratory distress
- **Bag-mask ventilation**: Avoid (inflates stomach/bowel → worse compression)
- **Nasogastric tube**: Urgent decompression of GI tract
- **Positioning**: Right side up if left-sided defect; left side if right-sided
- **Oxygen/CPAP**: Cautious; may worsen if increases bowel gas

**Preoperative Assessment**
- **Chest X-ray**: Confirms defect; shows mediastinal shift
- **Echocardiography**: Assesses degree of right-to-left shunt
- **Extracorporeal membrane oxygenation (ECMO)**: Available for severe cases with high pulmonary hypertension

**Surgical Repair**
- **Timing**: Elective primary repair if stable; delayed if severe (let lungs mature)
- **Procedure**: Primary closure of diaphragmatic defect; visceral reduction into abdomen
- **Complications**: Respiratory compromise from compression; may need staged repair

**Prognosis**
- Depends on degree of pulmonary hypoplasia and pulmonary hypertension
- 30-50% mortality overall; better with smaller defects
- Long-term: May have chronic lung disease, growth restriction
`
      },
      {
        layer: 4,
        slug: "surgical-emergencies-exam-prep",
        title: "Pediatric Surgical Emergencies - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts and common exam questions on surgical emergencies.",
        contentMd: `# Pediatric Surgical Emergencies - Exam Preparation

## High-Yield Facts

### Intussusception
- **Peak age**: 6-36 months
- **Classic triad**: Colicky abdominal pain, palpable sausage-shaped mass, currant jelly stool
- **Diagnosis**: Ultrasound (target sign)
- **Treatment**: Hydrostatic/pneumatic reduction (60-90% success)
- **Recurrence**: 5-10% after successful reduction

### Pyloric Stenosis
- **Peak age**: 3-5 weeks; M:F 4:1
- **Presentation**: Projectile non-bilious vomiting; hungry infant
- **Diagnosis**: Ultrasound (muscle thickness >3-4 mm)
- **Electrolytes**: Hypochloremic, hypokalemic metabolic alkalosis
- **Treatment**: Ramstedt pyloromyotomy
- **Key**: Correct electrolytes BEFORE surgery

### Hirschsprung Disease
- **Key finding**: Delayed meconium >48 hours
- **Pathology**: Aganglionosis → functional obstruction
- **Emergency**: Enterocolitis (fever, diarrhea, shock, sepsis)
- **Diagnosis**: Barium enema (transition zone) + rectal biopsy
- **Treatment**: Pull-through procedure

### CDH
- **Incidence**: 1-2 per 3000 births
- **Bochdalek (80%)**: Posterolateral; left > right
- **Presentation**: Respiratory distress at birth; scaphoid abdomen
- **Main problem**: Pulmonary hypoplasia
- **Management**: Avoid bag-mask ventilation; place NG tube; surgical repair

## Common Exam Questions

**Q1: 10-month-old with sudden colicky pain, palpable mass in RUQ, passed currant jelly stool. Diagnosis?**
A: Intussusception → Ultrasound for confirmation (target sign) → Attempt hydrostatic reduction

**Q2: 4-week-old with progressive projectile vomiting, appears hungry, losing weight. Diagnosis?**
A: Pyloric stenosis → Ultrasound shows pyloric muscle thickening → Check electrolytes for hypochloremic alkalosis

**Q3: Newborn hasn't passed meconium by 48 hours, abdominal distension. Most likely diagnosis?**
A: Hirschsprung disease → Barium enema (transition zone) → Rectal biopsy (aganglionosis)

**Q4: Newborn with respiratory distress at birth, scaphoid abdomen, heart sounds displaced left. Diagnosis?**
A: Congenital diaphragmatic hernia (left-sided Bochdalek) → NG tube urgently → Avoid bag-mask ventilation

**Q5: Pyloric stenosis infant vomiting 10 days. What electrolyte abnormality?**
A: Hypochloremia, hypokalemia, metabolic alkalosis (from loss of HCl in vomitus)

## Differential Diagnosis Table

| Condition | Age | Presentation | Key Finding | Diagnosis |
|-----------|-----|--------------|------------|-----------|
| **Intussusception** | 6-36mo | Colicky pain, mass | Currant jelly stool | Ultrasound (target) |
| **Pyloric Stenosis** | 3-5wk | Projectile vomit | Olive-shaped mass | Ultrasound |
| **Hirschsprung** | Newborn | No meconium | Abdominal distension | Barium enema |
| **CDH** | At birth | Respiratory distress | Scaphoid abdomen | Chest X-ray |
| **Midgut Volvulus** | 2mo-2yr | Bilious vomiting | Shock state | Upper GI contrast |

## Common Pitfalls

**Q: Intussusception vs pyloric stenosis - how to differentiate?**
A: Intussusception = colicky intermittent pain + currant jelly stool + 6-36mo; Pyloric = projectile non-bilious vomiting + hungry infant + 3-5 weeks

**Q: When NOT to attempt reduction in intussusception?**
A: Signs of perforation (fever, free air on X-ray, abdominal rigidity, shock, toxic appearance)

**Q: Which electrolyte abnormality is specific for pyloric stenosis?**
A: Hypochloremic, hypokalemic metabolic alkalosis (from HCl loss)
`
      },
      {
        layer: 5,
        slug: "surgical-emergencies-active-recall",
        title: "Pediatric Surgical Emergencies - Active Recall",
        estimatedMinutes: 18,
        summary: "Flashcard Q&As for surgical emergencies mastery.",
        contentMd: `# Pediatric Surgical Emergencies - Active Recall Flashcards

**Q1: What is intussusception?**
A: Invagination (telescoping) of proximal bowel into distal segment; most common cause of bowel obstruction 6-36 months

**Q2: What is the peak age for intussusception?**
A: 6-36 months; rare before 3 months and after 3 years

**Q3: What is the classic clinical triad of intussusception?**
A: Colicky abdominal pain, palpable sausage-shaped mass (RUQ), currant jelly stool

**Q4: What does the ultrasound finding "target sign" represent?**
A: Concentric rings of invaginated bowel on cross-section; diagnostic for intussusception

**Q5: What is the success rate of hydrostatic reduction in intussusception?**
A: 60-90% success rate with fluoroscopic guidance; avoid excessive pressure (perforation risk)

**Q6: What is the recurrence rate of intussusception after successful reduction?**
A: 5-10% may have recurrence; requires urgent surgery if occurs

**Q7: What is pyloric stenosis?**
A: Hypertrophy and hyperplasia of pyloric muscle leading to gastric outlet obstruction

**Q8: What is the peak age for pyloric stenosis and sex ratio?**
A: Peak 3-5 weeks of age; M:F ratio 4:1; first-born infants more commonly affected

**Q9: How does a baby with pyloric stenosis present?**
A: Progressive projectile non-bilious vomiting; infant appears hungry after vomiting

**Q10: What is the characteristic ultrasound finding in pyloric stenosis?**
A: Pyloric muscle thickness >3-4 mm and pyloric channel diameter <10-14 mm

**Q11: What electrolyte abnormality is seen in pyloric stenosis?**
A: Hypochloremia, hypokalemia, metabolic alkalosis (from loss of HCl in gastric vomitus)

**Q12: What is critical to do BEFORE surgery in pyloric stenosis?**
A: Correct dehydration and electrolyte abnormalities; ensure urine output >1 mL/kg/hr

**Q13: What is the surgical procedure for pyloric stenosis?**
A: Ramstedt pyloromyotomy; division of pyloric muscle fibers without full-thickness incision

**Q14: What is Hirschsprung disease?**
A: Congenital absence of ganglion cells (aganglionosis) in intestinal plexuses; functional obstruction

**Q15: What is the classic presentation of Hirschsprung disease in newborns?**
A: Delayed passage of meconium >48 hours in term infants; abdominal distension

**Q16: What is the most serious complication of Hirschsprung disease?**
A: Enterocolitis (fever, explosive diarrhea, abdominal distension, septic shock); can be life-threatening

**Q17: What is the pathognomonic radiologic finding in Hirschsprung disease?**
A: Transition zone on barium enema (narrow aganglionic segment → dilated proximal bowel)

**Q18: What is the gold standard diagnostic test for Hirschsprung disease?**
A: Rectal biopsy showing absence of ganglion cells (aganglionosis)

**Q19: What is the surgical treatment for Hirschsprung disease?**
A: Pull-through procedure; removes aganglionic segment and anastomoses normal ganglionated bowel to anus

**Q20: What is congenital diaphragmatic hernia (CDH)?**
A: Defect in diaphragm allowing visceral organs to herniate into thoracic cavity

**Q21: What is the most common type of CDH?**
A: Bochdalek hernia (80%); posterolateral defect; left-sided more common than right

**Q22: What is the presenting sign of CDH at birth?**
A: Respiratory distress with cyanosis; scaphoid (hollowed) abdomen; displaced heart sounds

**Q23: Why should you avoid bag-mask ventilation in CDH?**
A: Inflates stomach/bowel in thorax, worsening compression of lungs

**Q24: What is the most important emergency intervention in CDH?**
A: Nasogastric tube for urgent decompression of GI tract

**Q25: What is the main pathophysiology problem in CDH?**
A: Pulmonary hypoplasia (underdeveloped lungs from mechanical compression during fetal development)
`
      }
    ]
  },
  {
    topicCode: "PE-MOD-09-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "pediatric-endocrinology-foundation",
        title: "Pediatric Endocrinology - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of childhood diabetes, thyroid disorders, and growth disorders.",
        contentMd: `# Pediatric Endocrinology - Foundation

## Type 1 Diabetes Mellitus in Children

**Epidemiology**
- Incidence: 1-2 per 1000 children in developed countries; increasing 3-5%/year
- Peak age: 5-6 years and 11-13 years (puberty)
- Autoimmune destruction of pancreatic beta cells

**Presentation**
- Polyuria (frequent urination, bedwetting)
- Polydipsia (excessive drinking)
- Weight loss despite good appetite
- Fatigue, irritability
- Diabetic ketoacidosis (DKA): 30-50% at diagnosis (ketones, acidosis, coma)

**Key Features in Children**
- Rapid onset (days to weeks)
- More aggressive course than in adults
- Higher risk of DKA at diagnosis
- Requires insulin from diagnosis (no honeymoon period in young children)

## Congenital Hypothyroidism

**Epidemiology**
- Incidence: 1 per 2000-4000 newborns
- Causes: Dysgenesis (85%), dyshormonogenesis (15%), TSH receptor defect
- Preventable by newborn screening (mandatory in India, NIST)

**Clinical Features**
- Often asymptomatic at birth; delayed recognition dangerous
- Neonatal: Poor feeding, jaundice, constipation, hypothermia
- Infancy: Growth deceleration, developmental delay, coarse features
- Untreated: Severe intellectual disability (cretinism)

**Screening**
- TSH level in dried blood spot (DBS) from heel prick
- Time: Day 2-7 of life (ideal day 4-5)
- Cutoff: TSH >10 mIU/L; recheck if abnormal

## Growth Hormone Deficiency

**Presentation**
- Slow linear growth; height <3rd percentile or crossing percentiles
- Age at onset: Can be congenital or acquired
- Growth velocity: <4 cm/year indicates abnormality

**Causes**
- **Idiopathic GHD**: Most common (70%)
- **Pituitary disorders**: Tumor (craniopharyngioma), septooptic dysplasia
- **CNS insults**: Birth trauma, birth asphyxia, CNS infection
- **Genetic**: GHSR mutations, other syndromic causes

**Diagnosis**
- Growth chart analysis: Crossing percentiles downward
- Bone age: Delayed vs chronological age
- IGF-1 level: Low
- GH stimulation test: Gold standard (insulin tolerance test, arginine)

## Congenital Adrenal Hyperplasia (CAH)

**Most Common Type: 21-Hydroxylase Deficiency**
- Enzyme defect → increased ACTH → androgen excess
- Incidence: 1 per 15,000 births

**Presentation in Females (Classic)**
- **Salt-wasting (75%)**: Hyponatremia, hyperkalemia, shock (days 2-4 of life)
- **Simple virilizing**: Virilization at birth (clitoromegaly, labial fusion)
- **Ambiguous genitalia**: May not be recognized as female at birth

**Presentation in Males**
- Often missed at birth (no external abnormality)
- May present with hyponatremic shock (days 2-4)
- Later: Precocious puberty, tall stature with advanced bone age

**Newborn Screening**
- 17-hydroxyprogesterone in dried blood spot
- Positive screen: Confirm with cortisol, ACTH, aldosterone levels
`
      },
      {
        layer: 2,
        slug: "pediatric-endocrinology-mechanism",
        title: "Pediatric Endocrinology - Mechanism",
        estimatedMinutes: 22,
        summary: "Pathophysiology of pediatric endocrine disorders.",
        contentMd: `# Pediatric Endocrinology - Mechanism

## Type 1 Diabetes Pathogenesis

**Autoimmune Mechanism**
- Genetic predisposition: HLA-DR3, HLA-DR4 (synergistic)
- Environmental trigger: Viral infection (Coxsackievirus B4, rotavirus)
- Autoantibodies: GAD65, IA-2, ZnT8; appear 6-12 months before DKA
- T-cell destruction of beta cells
- Result: <10% beta cell function at diagnosis

**DKA Pathophysiology**
- Insulin deficiency → hyperglycemia → osmotic diuresis (polyuria, dehydration)
- Lipolysis → free fatty acids → ketone bodies (acetoacetate, beta-hydroxybutyrate)
- Metabolic acidosis: pH <7.3, HCO3- <15 mEq/L
- Hyperkalemia (despite total body K+ depletion): K+ shifts out of cells during acidosis
- CNS effects: Cerebral edema, altered mental status, coma

## Thyroid Hormone Physiology and CH

**TSH-Thyroid Axis**
- Hypothalamus releases TRH → Pituitary TSH → Thyroid T3/T4
- Negative feedback: T3/T4 inhibit TRH and TSH

**Congenital Hypothyroidism Types**
- **Dysgenesis (85%)**: Absent/hypoplastic thyroid; rare (I-131 uptake <10%)
- **Dyshormonogenesis (15%)**: Defective hormone synthesis despite normal gland
- **TSH resistance**: Rare; TSH receptor defect

**Neonatal Complications of Untreated CH**
- Brain development critically requires thyroid hormone first 3 years
- Without T4: Neuronal migration delayed, myelination impaired
- Result: Irreversible intellectual disability ("cretinism")
- Skeletal effects: Delayed epiphyseal ossification, thick cortices, delayed epiphyseal closure

## GH Axis and GHD

**Normal GH Secretion**
- GHRH stimulates GH release; somatostatin inhibits
- Pulsatile pattern: 8-9 pulses/day, strongest during sleep
- IGF-1 (insulin-like growth factor-1): Mediates GH effects
- Negative feedback: High IGF-1 suppresses GH and GHRH

**GHD Pathophysiology**
- Loss of GH secretion → low IGF-1
- Reduced protein synthesis
- Decreased lipolysis → fat accumulation
- Impaired linear growth

## CAH - 21-Hydroxylase Deficiency

**Enzyme Defect**
- 21-hydroxylase converts 17-OH-progesterone → 11-deoxycortisol
- Deficiency → cortisol ↓, aldosterone ↓, androgen ↑

**Classic Virilizing Form**
- **Cortisol deficiency**: Reduced negative feedback → ↑ACTH
- **Adrenal androgens ↑**: 17-OH-progesterone, androstenedione, testosterone
- **In females**: Prenatal androgen exposure → virilization (clitoromegaly, labial fusion)
- **In males**: May appear normal at birth; diagnosed by newborn screening

**Salt-Wasting Crisis**
- **Aldosterone deficiency**: Can't conserve sodium
- **Presentation**: Days 2-4 of life; hyponatremia, hyperkalemia, hypotension
- **Risk**: Cardiac arrhythmia, shock, death if untreated
- **Note**: Both virilized females and males at risk
`
      },
      {
        layer: 3,
        slug: "pediatric-endocrinology-clinical",
        title: "Pediatric Endocrinology - Clinical",
        estimatedMinutes: 24,
        summary: "Clinical diagnosis and management of pediatric endocrine disorders.",
        contentMd: `# Pediatric Endocrinology - Clinical Management

## Type 1 Diabetes Management

**Diagnostic Criteria**
- Fasting glucose ≥126 mg/dL or random ≥200 mg/dL with symptoms
- 2-hour post-load glucose ≥200 mg/dL (oral glucose tolerance test)
- HbA1c ≥6.5%

**DKA Management**
- **Resuscitation**: IV normal saline (0.9%) for rehydration
- **Insulin infusion**: 0.1 unit/kg/hr IV; reduce when glucose <250 mg/dL
- **Electrolytes**: Monitor K+, Na+, phosphate closely
- **Phosphate/K+ replacement**: After checking levels; withhold K+ if K+ >5.5 until diuresis
- **Bicarbonate**: NOT routine; only if pH <6.9 and severe acidosis
- **Glucose monitoring**: Hourly during acute phase
- **Cerebral edema monitoring**: Signs of altered consciousness warrant imaging/mannitol

**Long-Term Insulin Management**
- **Insulin types**: Basal-bolus regimen (long-acting basal + rapid-acting meal-time boluses)
- **Basal insulins**: Insulin glargine, detemir
- **Bolus insulins**: Rapid-acting analogs (aspart, lispro, glulisine)
- **Alternative**: Insulin pump therapy for better flexibility
- **Targets**: Fasting 100-140 mg/dL, bedtime 100-180 mg/dL, avoid hypoglycemia

## Congenital Hypothyroidism Screening & Treatment

**Newborn Screening Protocol**
- **Sample collection**: Day 2-7 of life (ideal day 4-5)
- **Method**: Dried blood spot (DBS) from heel prick on filter paper
- **Testing**: TSH level (or T4+TSH)
- **Cutoff**: TSH >10 mIU/L suggests CH
- **Recall for confirmatory tests**: Free T4, TSH serum

**Treatment**
- **Levothyroxine**: Oral replacement; start immediately on confirmed diagnosis
- **Dosing**: Start 10-15 mcg/kg/day; adjust based on TSH
- **Monitoring**: TSH, Free T4 at 2 weeks, 6 weeks, 3 months, then every 3-6 months
- **Goal TSH**: 1-5 mIU/L (lower range in first year)
- **Prognosis**: Normal development with early, adequate treatment

## Growth Hormone Deficiency Diagnosis & Treatment

**Diagnostic Workup**
- **Growth chart analysis**: Plot height velocity; <4 cm/year abnormal
- **Bone age X-ray**: Compare to chronological age; if delayed → suggests GHD
- **IGF-1 measurement**: Low IGF-1 suggests GHD; age-specific norms essential
- **GH stimulation tests**: Gold standard
  - Insulin tolerance test (0.1 unit/kg insulin IV, monitor glucose <50 mg/dL)
  - Arginine stimulation (0.5 g/kg IV)
  - L-DOPA stimulation
  - Glucagon stimulation
- **Peak GH response**: <10 ng/mL suggests GHD; <5 ng/mL confirms

**Treatment**
- **Recombinant human GH**: Subcutaneous injection
- **Dosing**: 0.025-0.035 mg/kg/day (typical)
- **Frequency**: Daily or 3 times weekly
- **Monitoring**: Height velocity, IGF-1 every 3-6 months; bone age annually
- **Duration**: Continue until growth plate closure OR adult height reached

## CAH (21-Hydroxylase Deficiency) Management

**Newborn Screening**
- **Sample**: Dried blood spot; 17-OH-progesterone level
- **Cutoff**: >2000 ng/dL (or age-specific cutoff) suggests CAH
- **Confirmatory tests**: Cortisol, ACTH, 17-OH-progesterone (serum); adrenal ultrasound

**Acute Salt-Wasting Crisis**
- **Fluids**: IV normal saline (0.9%); rapid rehydration
- **Electrolytes**: Monitor Na+, K+ closely; correct slowly (avoid osmolar shifts)
- **Hydrocortisone**: 50 mg IV bolus, then 50-100 mg every 4-6 hours
- **Mineralocorticoid**: Fludrocortisone 0.1-0.2 mg/day (after stabilized)
- **Glucose**: Monitor; give dextrose if hypoglycemic

**Chronic Management**
- **Glucocorticoid**: Hydrocortisone 15-25 mg/day in divided doses (or prednisolone)
- **Mineralocorticoid**: Fludrocortisone 0.05-0.1 mg daily
- **Salt supplementation**: Especially in infancy
- **Monitoring**: 17-OH-progesterone, renin, electrolytes every 3 months
- **Goal**: Suppress ACTH while avoiding over-treatment
- **Adherence**: Critical for normal growth and development
`
      },
      {
        layer: 4,
        slug: "pediatric-endocrinology-exam-prep",
        title: "Pediatric Endocrinology - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts and exam questions on pediatric endocrine disorders.",
        contentMd: `# Pediatric Endocrinology - Exam Preparation

## High-Yield Facts

### Type 1 Diabetes
- **Presentation**: Polyuria, polydipsia, weight loss, fatigue
- **Age**: Peak 5-6 years and 11-13 years
- **DKA risk**: 30-50% at diagnosis
- **Autoimmune**: HLA-DR3/DR4; beta cell destruction
- **Treatment**: Insulin (basal-bolus or pump)

### Congenital Hypothyroidism
- **Incidence**: 1 per 2000-4000 births
- **Causes**: Dysgenesis (85%) > dyshormonogenesis (15%)
- **Screening**: TSH in DBS at day 2-7 of life (ideal day 4-5)
- **Critical**: Early treatment prevents intellectual disability
- **Prognosis**: Normal if treated early and adequately

### Growth Hormone Deficiency
- **Presentation**: Short stature, slow growth velocity (<4 cm/year)
- **Diagnosis**: Low IGF-1 + GH stimulation test
- **Causes**: Idiopathic (70%), pituitary tumor, CNS insult
- **Treatment**: Recombinant hGH injections; monitor height velocity, IGF-1

### CAH (21-Hydroxylase)
- **Incidence**: 1 per 15,000 births
- **Defect**: ↓cortisol, ↓aldosterone, ↑androgens
- **Classic**: Salt-wasting (days 2-4) or virilization in females
- **Screening**: 17-OH-progesterone in DBS
- **Treatment**: Hydrocortisone + fludrocortisone

## Common Exam Questions

**Q1: 6-year-old with polyuria, polydipsia, weight loss. Blood glucose 350 mg/dL, HbA1c 10%. Diagnosis?**
A: Type 1 diabetes mellitus → Check for DKA (ABG, lactate, urine ketones) → Start insulin therapy

**Q2: Newborn screening TSH 15 mIU/L, free T4 0.8 ng/dL. Diagnosis?**
A: Congenital hypothyroidism → Start levothyroxine 10-15 mcg/kg/day → Recheck TSH in 2 weeks

**Q3: 4-year-old with height <5th percentile, growth velocity 2 cm/year. Workup?**
A: Growth hormone deficiency → Check bone age (should be delayed), IGF-1 (low), GH stimulation test

**Q4: Female newborn with clitoromegaly and labial fusion. 17-OH-progesterone 4500 ng/dL. Diagnosis?**
A: Congenital adrenal hyperplasia (21-hydroxylase) → Start hydrocortisone + fludrocortisone → Monitor 17-OH-progesterone

**Q5: 3-day-old male with hyponatremia (Na+ 125), hyperkalemia (K+ 6.2), hypotension. Diagnosis?**
A: Salt-wasting CAH → IV normal saline (rehydration) → Hydrocortisone 50 mg IV bolus → Fludrocortisone

## Differential Diagnosis Table

| Condition | Key Finding | Hormone | Age | Treatment |
|-----------|------------|---------|-----|-----------|
| **Type 1 DM** | Hyperglycemia | No insulin | Any | Insulin |
| **CH** | ↑TSH, ↓T4 | T4 deficiency | Newborn | Levothyroxine |
| **GHD** | ↓IGF-1 | GH deficiency | Any | Recombinant GH |
| **CAH** | ↑17-OH-Prog | Cortisol ↓ | Newborn | Hydrocortisone |

## Tables for Memorization

| Exam | Cutoff | Interpretation |
|------|--------|-----------------|
| **Fasting glucose** | ≥126 mg/dL | Diagnostic for DM |
| **Random glucose** | ≥200 mg/dL (with symptoms) | Diagnostic for DM |
| **HbA1c** | ≥6.5% | Diagnostic for DM |
| **TSH neonatal** | >10 mIU/L | Positive screen for CH |
| **17-OH-Prog** | >2000 ng/dL | Positive screen for CAH |
| **IGF-1** | Age-specific low | Suggests GHD |
| **GH stimulation** | <10 ng/mL peak | Suggests GHD |
`
      },
      {
        layer: 5,
        slug: "pediatric-endocrinology-active-recall",
        title: "Pediatric Endocrinology - Active Recall",
        estimatedMinutes: 18,
        summary: "Flashcard Q&As for pediatric endocrinology mastery.",
        contentMd: `# Pediatric Endocrinology - Active Recall Flashcards

**Q1: What are the classic symptoms of Type 1 diabetes in children?**
A: Polyuria, polydipsia, weight loss, fatigue, irritability

**Q2: What is the risk of DKA at diagnosis of Type 1 diabetes in children?**
A: 30-50% of children present with DKA at diagnosis

**Q3: What are the genetic risk factors for Type 1 diabetes?**
A: HLA-DR3 and HLA-DR4 (synergistic effect); also GAD65, IA-2, ZnT8 autoantibodies

**Q4: What is the peak age of onset for Type 1 diabetes?**
A: Two peaks: 5-6 years and 11-13 years (around puberty)

**Q5: What is congenital hypothyroidism and its main cause?**
A: Deficiency of thyroid hormone from birth; 85% due to thyroid dysgenesis (absent/hypoplastic gland)

**Q6: What is the incidence of congenital hypothyroidism?**
A: 1 per 2000-4000 newborns; varies by region

**Q7: When and how is congenital hypothyroidism screened?**
A: Dried blood spot (heel prick) at day 2-7 of life (ideal day 4-5); TSH level measured

**Q8: What is the TSH cutoff for positive newborn screening for congenital hypothyroidism?**
A: TSH >10 mIU/L on initial screening; requires confirmatory serum testing

**Q9: What is the treatment for congenital hypothyroidism?**
A: Levothyroxine replacement; starting dose 10-15 mcg/kg/day; adjust based on TSH

**Q10: Why is early treatment of congenital hypothyroidism critical?**
A: Untreated CH in early infancy leads to irreversible intellectual disability (cretinism)

**Q11: What is growth hormone deficiency and how does it present?**
A: GH deficiency causes slow linear growth; height <3rd percentile or crossing percentiles downward; growth velocity <4 cm/year

**Q12: What is the gold standard diagnostic test for growth hormone deficiency?**
A: GH stimulation test (insulin tolerance test, arginine, L-DOPA, or glucagon stimulation); peak GH <10 ng/mL suggests GHD

**Q13: What are the causes of growth hormone deficiency?**
A: Idiopathic (70%), pituitary tumor (craniopharyngioma), CNS insult (birth trauma, asphyxia), genetic mutations

**Q14: What is the treatment for growth hormone deficiency?**
A: Recombinant human growth hormone via subcutaneous injection; typical dose 0.025-0.035 mg/kg/day

**Q15: What is congenital adrenal hyperplasia (CAH) and its pathophysiology?**
A: Autosomal recessive enzyme deficiency (21-hydroxylase in 90%); leads to cortisol ↓, aldosterone ↓, androgens ↑

**Q16: What is the incidence of CAH due to 21-hydroxylase deficiency?**
A: 1 per 15,000 births; most common cause of CAH

**Q17: What is salt-wasting CAH and when does it present?**
A: Most severe form with aldosterone deficiency; presents days 2-4 of life with hyponatremia, hyperkalemia, shock

**Q18: What is the presentation of classic CAH in females?**
A: Virilization at birth (clitoromegaly, labial fusion, ambiguous genitalia) from prenatal androgen exposure

**Q19: What is important about CAH presentation in males?**
A: Males appear phenotypically normal at birth, so disease often missed; may present with salt-wasting shock

**Q20: How is CAH screened in newborns?**
A: Dried blood spot 17-OH-progesterone level; cutoff >2000 ng/dL suggests CAH

**Q21: What is the acute management of salt-wasting CAH crisis?**
A: IV normal saline (rehydration), hydrocortisone 50 mg IV bolus then every 4-6 hours, fludrocortisone, monitor electrolytes

**Q22: What is the chronic maintenance treatment for CAH?**
A: Hydrocortisone 15-25 mg/day in divided doses + fludrocortisone 0.05-0.1 mg daily + salt supplementation

**Q23: Why is treatment adherence critical in CAH?**
A: Over/under-treatment affects growth and development; goal is suppress ACTH while avoiding steroid toxicity

**Q24: What is the role of fludrocortisone in CAH?**
A: Mineralocorticoid replacement; conserves sodium and retains potassium; prevents electrolyte crisis

**Q25: How is CAH monitored long-term?**
A: 17-OH-progesterone, renin, electrolytes every 3 months; adjust doses to keep 17-OH-progesterone in target range
`
      }
    ]
  },
  {
    topicCode: "PE-MOD-09-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "pediatric-rheumatology-foundation",
        title: "Pediatric Rheumatology - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of JIA, Kawasaki disease, and childhood rheumatologic disorders.",
        contentMd: `# Pediatric Rheumatology - Foundation

## Juvenile Idiopathic Arthritis (JIA)

**Definition and Classification**
- Autoimmune arthritis onset before age 16; persists >6 weeks
- Incidence: 1-2 per 100,000 children
- **Oligoarticular (50%)**: <5 joints; best prognosis; often RF/anti-CCP negative
- **Polyarticular (30%)**: ≥5 joints; RF+ or RF-
- **Systemic (20%)**: Fever, rash, hepatosplenomegaly, serositis; worst prognosis

**Oligoarticular JIA**
- Large joints: Knees (95%), ankles, hips
- Often asymmetric
- Uveitis risk (30%); early eye inflammation may be silent
- ANA positive in 75%; RF negative

**Polyarticular JIA**
- Small and large joints involved symmetrically
- RF-positive has worse prognosis
- Systemic features minimal
- Morning stiffness, swelling by afternoon

**Systemic JIA**
- "Quotidian" fever: High spiking fever once daily (typically afternoon/evening)
- Evanescent pink rash: Appears with fever, disappears
- Hepatosplenomegaly, lymphadenopathy
- Serositis: Pericarditis, pleuritis
- Macrophage activation syndrome (MAS): Life-threatening

## Kawasaki Disease

**Definition and Epidemiology**
- Acute vasculitis affecting medium-sized vessels
- Incidence: 1-2 per 100,000 in Japan; lower in Caucasians; increasing in India
- Peak age: 1-5 years; rarely >8 years
- Seasonal variation: Winter/spring in temperate climates

**Diagnostic Criteria (Need 5 of 6)**
1. **Fever**: ≥5 days (mandatory)
2. **Oral findings**: Strawberry tongue, red lips, oropharyngeal erythema
3. **Rash**: Polymorphous (maculopapular, scarlatiniform); trunk + extremities
4. **Extremity changes**: Edema, erythema of palms/soles; later desquamation
5. **Ocular**: Non-exudative bilateral conjunctivitis
6. **Cervical lymphadenopathy**: Unilateral; >1.5 cm

**Cardiac Complications**
- **Coronary artery aneurysms**: 25% untreated; 5% with IVIG treatment
- **Myocarditis**: Heart failure, arrhythmias
- **Pericarditis**: Pericardial effusion
- **Late sequelae**: Coronary stenosis, thrombosis, sudden death (years later)

## Other Childhood Rheumatologic Disorders

**Henoch-Schönlein Purpura (HSP/IgA Vasculitis)**
- Leukocytoclastic vasculitis affecting skin, joints, GI, kidneys
- Presentation: Palpable purpura (typically lower extremities), arthritis, GI pain, hematuria
- Usually self-limiting; some risk of chronic renal disease

**Childhood SLE**
- Affects ~0.3-0.9 per 100,000 children
- More severe than adult SLE
- Renal involvement (70%) and CNS involvement (25%) more common
- Female predominance (8:1)

**Reactive Arthritis**
- Post-infectious arthritis (GI or GU infection)
- Asymmetric oligoarthritis
- Self-limited; usually resolves within weeks-months
`
      },
      {
        layer: 2,
        slug: "pediatric-rheumatology-mechanism",
        title: "Pediatric Rheumatology - Mechanism",
        estimatedMinutes: 22,
        summary: "Pathophysiology of pediatric rheumatologic diseases.",
        contentMd: `# Pediatric Rheumatology - Mechanism

## JIA Pathophysiology

**Genetic and Environmental Factors**
- **HLA association**: HLA-B27 (especially in RF+ polyarticular and persistent oligoarticular)
- **Environmental trigger**: Infection, molecular mimicry
- **Immune dysregulation**: Th17 excess, reduced Tregs
- **Cytokine drivers**: TNF-α, IL-6, IL-17

**Inflammation Process**
- Infiltration of synovial space by CD4+ T cells, macrophages, B cells
- Synovial lining hyperplasia
- Pannus formation → cartilage and bone erosion
- Chronic inflammation leads to joint damage if untreated

**Uveitis in Oligoarticular JIA**
- 30% develop uveitis (usually anterior)
- Often asymptomatic; detected on screening
- Can lead to vision loss if untreated
- Screening: Slit-lamp exam every 3-6 months

## Kawasaki Vasculitis Pathophysiology

**Vasculitic Process**
- Acute inflammation of coronary arteries and other medium vessels
- **Phase 1 (week 1-2)**: Coronary artery inflammation, edema, myositis
- **Phase 2 (week 2-8)**: Coronary aneurysm formation, risk of thrombosis
- **Phase 3 (>8 weeks)**: Aneurysm healing; may have residual stenosis

**Coronary Artery Involvement**
- Edema and infiltration of coronary arteries by inflammatory cells
- Destruction of internal elastic lamina
- Weakening of vessel wall → aneurysm formation
- Later: Fibrosis, calcification, stenosis

**Immune Activation**
- Possible viral trigger (enterovirus, parvovirus); not definitively proven
- Polyclonal T-cell and B-cell activation
- Elevated IL-6, TNF-α, IL-1β
- Decreased regulatory T cells

## HSP/IgA Vasculitis Pathophysiology

**IgA-Mediated Vasculitis**
- IgA immune complexes deposit in skin, joints, GI tract, kidneys
- Activation of complement via alternative pathway
- Leukocytoclasis: Destruction of vessel wall by inflammatory cells

**Renal Involvement**
- IgA nephropathy-like pattern on renal biopsy
- Can progress to chronic kidney disease in 5-15%
- Monitor: Urinalysis, serum creatinine regularly

## Childhood SLE Pathophysiology

**Autoimmune Activation**
- Loss of immune tolerance
- ANA antibodies against nuclear antigens (dsDNA, Smith antigen)
- Immune complex deposition in kidneys, blood vessels, brain
- Complement consumption (C3, C4 low)
- CNS: Lupus cerebritis, psychosis, stroke

**Renal Disease in Childhood SLE**
- More aggressive course than adult SLE
- Class III-IV (focal or diffuse proliferative) in 70%
- 20% develop renal failure without treatment
`
      },
      {
        layer: 3,
        slug: "pediatric-rheumatology-clinical",
        title: "Pediatric Rheumatology - Clinical",
        estimatedMinutes: 24,
        summary: "Clinical diagnosis and management of pediatric rheumatologic diseases.",
        contentMd: `# Pediatric Rheumatology - Clinical Management

## JIA Diagnosis and Management

**Diagnostic Investigations**
- **Labs**: ESR, CRP elevated; RF, anti-CCP, ANA variable
- **Imaging**: X-rays show joint damage in active disease; ultrasound shows synovitis
- **Ophthalmology**: Essential slit-lamp exam for uveitis screening

**Treatment Approach**
- **NSAIDs**: First-line for pain and inflammation (naproxen, indomethacin)
- **DMARDs**: Methotrexate (15-25 mg/week) gold standard for active JIA
- **Biologic agents**: TNF inhibitors (etanercept, adalimumab) for DMARD-inadequate response
- **Other biologics**: Abatacept, tocilizumab for refractory disease
- **Glucocorticoids**: Low-dose for bridging; avoid long-term use (growth impairment)

**Uveitis Management**
- **Screening**: Slit-lamp exam 3-6 monthly (more frequent if positive)
- **Treatment**: Topical corticosteroids + mydriatics; systemic immunosuppression if severe

## Kawasaki Disease Treatment

**Acute Phase Management**
- **IVIG**: 2 g/kg IV infusion over 8-12 hours (within 10 days of fever onset)
- **Aspirin**: High-dose (80-100 mg/kg/day in 4 divided doses) for anti-inflammatory effect until fever resolves
- **Timing**: IVIG treatment reduces coronary aneurysm risk from 25% to 5%
- **Repeat dose**: If fever persists after initial IVIG, consider second dose

**Monitoring**
- **Echocardiography**: Baseline, at 2 weeks, at 6-8 weeks to detect coronary changes
- **Serial ESR/CRP**: Monitor for response to treatment
- **ECG**: Assess for myocarditis, arrhythmias

**Long-Term Management**
- **Aspirin**: Continue low-dose (3-5 mg/kg/day) long-term for antiplatelet effect if coronary involvement
- **Anticoagulation**: Consider if coronary aneurysms present
- **Repeat echo**: Annually to monitor for coronary disease progression
- **Cardiology follow-up**: Essential for children with coronary involvement

## Childhood SLE Management

**Diagnostic Criteria (EULAR/ACR)**
- Requires systemic features + autoimmune serology (ANA, anti-dsDNA, low C3/C4)

**Treatment Approach**
- **Hydroxychloroquine**: First-line; reduces flares, photosensitivity
- **NSAIDs**: For joint/serositis pain
- **Corticosteroids**: Prednisone 0.5-1 mg/kg/day; taper as disease controlled
- **DMARDs**: Mycophenolate mofetil or cyclophosphamide for renal/CNS disease
- **Biologic agents**: Belimumab for refractory disease

**Renal Disease Management**
- **Class III-IV (proliferative)**: Immunosuppression essential
- **Induction**: High-dose corticosteroids + cyclophosphamide (Euro-Lupus protocol) or mycophenolate
- **Maintenance**: Azathioprine or mycophenolate
- **Monitoring**: Urinalysis, serum creatinine, proteinuria quantification regularly
`
      },
      {
        layer: 4,
        slug: "pediatric-rheumatology-exam-prep",
        title: "Pediatric Rheumatology - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts and exam questions on pediatric rheumatologic disorders.",
        contentMd: `# Pediatric Rheumatology - Exam Preparation

## High-Yield Facts

### JIA
- **Oligoarticular (50%)**: <5 joints, best prognosis, ANA+, RF-, uveitis risk 30%
- **Polyarticular (30%)**: ≥5 joints, RF+/-, systemic features minimal
- **Systemic (20%)**: Quotidian fever, evanescent rash, hepatosplenomegaly, MAS risk
- **Treatment**: NSAIDs → Methotrexate → Biologic agents (TNF inhibitors)
- **Screening**: Slit-lamp exam for uveitis (often silent)

### Kawasaki Disease
- **Diagnostic criterion**: Fever ≥5 days mandatory; need 5 of 6 criteria
- **Incidence**: 1-2 per 100,000; peak 1-5 years
- **Oral findings**: Strawberry tongue, red lips
- **Coronary complications**: 25% untreated → 5% with IVIG
- **Treatment**: IVIG 2 g/kg + aspirin (high-dose acute, low-dose long-term)
- **Key**: Treat within 10 days of fever onset to prevent coronary aneurysms

### Childhood SLE
- **Prevalence**: 0.3-0.9 per 100,000 children; F:M 8:1
- **Renal involvement**: 70% at diagnosis; 20% develop renal failure if untreated
- **CNS involvement**: 25%; includes psychosis, seizures, stroke
- **Treatment**: Hydroxychloroquine + prednisone + DMARDs/biologics for renal disease

## Common Exam Questions

**Q1: 3-year-old with swollen knees, positive ANA, normal RF. Most likely diagnosis?**
A: Oligoarticular JIA → Needs slit-lamp exam (uveitis risk) → Treat with NSAIDs, methotrexate if inadequate response

**Q2: 4-year-old with 7-day fever, strawberry tongue, bilateral non-exudative conjunctivitis, polymorphous rash. Diagnosis?**
A: Kawasaki disease → Start IVIG 2 g/kg IV + high-dose aspirin → Obtain echocardiogram → Repeat echo at 2 and 6-8 weeks

**Q3: Child with Kawasaki disease treated with IVIG on day 4 of fever. Risk of coronary artery aneurysm?**
A: Reduced from 25% (untreated) to ~5% with appropriate IVIG treatment

**Q4: 12-year-old with fever, rash, hepatosplenomegaly, high ESR, serositis. Initial diagnosis?**
A: Systemic JIA → Investigate for macrophage activation syndrome (ferritin, D-dimer, blood counts) → Treat with NSAIDs/corticosteroids

## Differential Diagnosis

| Feature | Oligoarticular JIA | Polyarticular JIA | Systemic JIA | Kawasaki |
|---------|-----|-----|------|---------|
| **Joint involvement** | <5 large | ≥5 symmetric | Large + small | Rare |
| **Fever** | Absent | Absent | High quotidian | ≥5 days |
| **Rash** | Rare | Rare | Evanescent | Polymorphous |
| **RF/ANA** | RF-, ANA+ | RF+/- | RF-, ANA- | RF-, ANA- |
| **Uveitis** | 30% | Rare | Very rare | No |
| **Organs** | None | None | Hepatosplenomegaly | Coronaries |
`
      },
      {
        layer: 5,
        slug: "pediatric-rheumatology-active-recall",
        title: "Pediatric Rheumatology - Active Recall",
        estimatedMinutes: 18,
        summary: "Flashcard Q&As for pediatric rheumatology mastery.",
        contentMd: `# Pediatric Rheumatology - Active Recall Flashcards

**Q1: What is Juvenile Idiopathic Arthritis (JIA)?**
A: Autoimmune arthritis with onset before age 16; persists >6 weeks; three main types: oligoarticular, polyarticular, systemic

**Q2: What is the most common type of JIA and its prognosis?**
A: Oligoarticular JIA (50%); best prognosis; usually involves <5 large joints (knees 95%)

**Q3: What is the risk of uveitis in oligoarticular JIA?**
A: 30% develop uveitis (usually anterior, often silent); requires regular slit-lamp screening

**Q4: What is the first-line treatment for JIA?**
A: NSAIDs (naproxen, indomethacin) for pain and inflammation; methotrexate if inadequate response

**Q5: What is the second-line treatment for JIA if NSAIDs fail?**
A: Disease-modifying antirheumatic drugs (DMARDs), with methotrexate being gold standard

**Q6: What is the third-line treatment for JIA?**
A: Biologic agents, especially TNF inhibitors (etanercept, adalimumab) for DMARD-inadequate response

**Q7: What is Kawasaki disease?**
A: Acute vasculitis affecting medium-sized vessels; peak age 1-5 years; risk of coronary artery aneurysms

**Q8: What is the mandatory criterion for diagnosing Kawasaki disease?**
A: Fever ≥5 days; plus 5 of 6 additional criteria needed for diagnosis

**Q9: What are the diagnostic criteria for Kawasaki disease (the 6)?**
A: 1) Fever ≥5 days, 2) Strawberry tongue, 3) Non-exudative conjunctivitis, 4) Polymorphous rash, 5) Extremity erythema/edema/desquamation, 6) Cervical lymphadenopathy

**Q10: What is the most serious complication of Kawasaki disease?**
A: Coronary artery aneurysms (25% untreated; 5% with IVIG treatment); risk of sudden death years later

**Q11: What is the time window for IVIG treatment in Kawasaki disease?**
A: Within 10 days of fever onset; most effective in first 5 days

**Q12: What is the dose of IVIG used in Kawasaki disease?**
A: 2 g/kg IV infusion over 8-12 hours

**Q13: How much does IVIG reduce coronary artery aneurysm risk in Kawasaki disease?**
A: Reduces risk from 25% (untreated) to approximately 5%

**Q14: What is the role of aspirin in acute Kawasaki disease?**
A: High-dose (80-100 mg/kg/day in 4 divided doses) for anti-inflammatory effect until fever resolves

**Q15: What is the long-term aspirin regimen in Kawasaki disease?**
A: Low-dose (3-5 mg/kg/day) continued long-term for antiplatelet effect if coronary involvement

**Q16: What is Henoch-Schönlein Purpura (HSP)?**
A: Leukocytoclastic vasculitis; presents with palpable purpura (lower extremities), arthritis, GI pain, hematuria

**Q17: What is the pathophysiology of HSP?**
A: IgA immune complexes deposit in skin, joints, GI tract, kidneys; usually self-limiting but some risk of chronic renal disease

**Q18: What is Systemic Lupus Erythematosus (SLE) prevalence in children?**
A: 0.3-0.9 per 100,000 children; female predominance (8:1)

**Q19: What is the female-to-male ratio in childhood SLE?**
A: 8:1 female predominance (higher than adult SLE ratio of 9:1)

**Q20: What percentage of children with SLE develop renal disease?**
A: 70% have renal involvement at diagnosis; 20% develop renal failure without treatment

**Q21: What is the first-line treatment for SLE?**
A: Hydroxychloroquine (reduces flares, photosensitivity) + NSAIDs for joint/serositis pain

**Q22: What is the treatment for SLE renal disease (Class III-IV)?**
A: High-dose corticosteroids + immunosuppression (cyclophosphamide or mycophenolate mofetil)

**Q23: What are the CNS manifestations of childhood SLE?**
A: Lupus cerebritis (25%), psychosis, seizures, stroke; more common than in adult SLE

**Q24: What is the significance of low C3 and C4 in SLE?**
A: Indicates active disease with immune complex deposition; consumed by complement activation

**Q25: What is macrophage activation syndrome (MAS)?**
A: Life-threatening complication of systemic JIA; characterized by uncontrolled macrophage activation; high ferritin, low platelets, hepatosplenomegaly
`
      }
    ]
  },
  {
    topicCode: "PE-MOD-09-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "pediatric-oncology-foundation",
        title: "Pediatric Oncology - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of Wilms tumor, neuroblastoma, retinoblastoma, and acute leukemia.",
        contentMd: `# Pediatric Oncology - Foundation

## Wilms Tumor (Nephroblastoma)

**Epidemiology**
- Most common renal malignancy in children
- Incidence: 1 per 10,000 children
- Peak age: 3-5 years; 90% diagnosed by age 8
- Risk: Aniridia (30× higher), hemihypertrophy, WAGR syndrome, Denys-Drash syndrome

**Presentation**
- Abdominal mass (most common; 90% of cases)
- Hematuria (20%)
- Flank pain, fever, hypertension (from renin production)
- Metastases: Lungs (80% of metastatic cases), liver, bone

**Staging (COG)**
- **Stage I**: Tumor confined to kidney
- **Stage II**: Tumor extends beyond kidney but completely excised
- **Stage III**: Incomplete excision or local spread
- **Stage IV**: Hematogenous metastases or lymph node metastases outside abdominopelvic region
- **Stage V**: Bilateral renal involvement

## Neuroblastoma

**Epidemiology**
- Most common extracranial solid tumor in children
- Incidence: 1 per 7,000 children
- Arises from neural crest cells; adrenal medulla (50%) or sympathetic chain
- Peak age: <5 years; 90% diagnosed by age 10
- **MYCN amplification**: Poor prognostic factor

**Presentation**
- Abdominal/flank mass (40%)
- Metastatic disease at diagnosis (50-60%)
- Neurologic symptoms: Cord compression (paraplegia), opsoclonus-myoclonus
- Paraneoplastic: VMA/HVA elevation (catecholamine metabolites)
- **Stage 4S**: Metastases to liver, skin, bone marrow; paradoxically better prognosis in infants

## Retinoblastoma

**Epidemiology**
- Most common intraocular malignancy in children
- Incidence: 1 per 15,000-20,000 live births
- 40% bilateral (germline mutation); 60% unilateral (somatic)
- Peak age: <5 years; usually <1 year if unilateral, <2 years if bilateral

**Presentation**
- Leukocoria: "Cat's eye reflex" (white pupil)
- Strabismus: Eye misalignment; often mistaken for amblyopia
- Eye pain, redness, decreased vision
- Orbital cellulitis-like presentation: Pseudoproptosis

**Risk Factors**
- Family history of retinoblastoma
- RB gene mutation (inherited or de novo)

## Acute Lymphoblastic Leukemia (ALL)

**Epidemiology**
- Most common pediatric malignancy
- Incidence: 2-3 per 100,000 children
- Peak age: 2-5 years
- B-cell ALL (85%) > T-cell ALL (15%)

**Presentation**
- Bleeding: Petechiae, purpura (thrombocytopenia)
- Infections: Fever, opportunistic infections (low WBC)
- Anemia: Pallor, fatigue, dyspnea
- Hepatosplenomegaly, lymphadenopathy
- Bone pain: From leukemic infiltration
- CNS involvement: Headache, meningismus (25% at diagnosis)
`
      },
      {
        layer: 2,
        slug: "pediatric-oncology-mechanism",
        title: "Pediatric Oncology - Mechanism",
        estimatedMinutes: 22,
        summary: "Pathophysiology and molecular mechanisms of pediatric malignancies.",
        contentMd: `# Pediatric Oncology - Mechanism

## Wilms Tumor Pathogenesis

**Genetic Basis**
- **WT1 gene** (11p13): Most common; loss of heterozygosity
- **CTNNB1 gene**: Wnt pathway activation
- **MYCN amplification**: Poor prognostic indicator
- Two-hit Knudson hypothesis: Loss of both alleles required

**Development**
- Arises from nephrogenic rest (embryologic remnant)
- Progressive transformation: Hyperplasia → dysplasia → malignancy
- Epithelial, mesenchymal, blastema histologic types

## Neuroblastoma Molecular Features

**MYCN Amplification**
- 20% of cases; strong indicator of poor prognosis
- Increased copies (30-300 fold) → aggressive disease
- Drives rapid proliferation and genomic instability

**Catecholamine Production**
- Cells produce dopamine, norepinephrine
- Metabolized to VMA, HVA
- 90% have elevated urinary catecholamine metabolites
- Useful for screening and monitoring

**Spontaneous Regression in Stage 4S**
- Paradoxically, infants with stage 4S (disseminated disease) have excellent prognosis
- Possible mechanisms: Mature in vivo, immune factors, differentiation therapy response

## Retinoblastoma Molecular Biology

**RB Gene**
- Tumor suppressor gene on 13q14
- Controls cell cycle G1/S transition via pRb protein
- Loss of both alleles → uncontrolled proliferation
- **Bilateral disease**: Germline mutation (hereditary)
- **Unilateral disease**: Usually somatic mutation (sporadic)

**Tumorigenesis**
- RB-deficient cells: Uncontrolled proliferation, genomic instability
- Two-hit mechanism: Both alleles inactivated

## ALL Molecular Subtypes

**Common ALL (c-ALL)**
- 60-65% of pediatric ALL
- CD19+, CD10+; early B-cell development
- t(12;21) ETV6-RUNX1 fusion (20%): Favorable prognosis
- Best 5-year survival (>85%)

**T-cell ALL**
- 15% of pediatric ALL
- CD3+, CD5+, CD7+
- Often presents with high WBC, mediastinal mass, CNS involvement
- More aggressive; lower survival rates

**Philadelphia Chromosome-Positive (BCR-ABL)**
- 2-5% of pediatric ALL
- t(9;22) fusion gene
- Poor prognosis without targeted therapy (tyrosine kinase inhibitors)

**Hypodiploid ALL**
- <44 chromosomes; very poor prognosis
- High relapse risk despite intensive therapy

**Hyperdiploidy**
- >50 chromosomes (especially >55); favorable prognosis
- Better response to chemotherapy
`
      },
      {
        layer: 3,
        slug: "pediatric-oncology-clinical",
        title: "Pediatric Oncology - Clinical",
        estimatedMinutes: 24,
        summary: "Clinical diagnosis and treatment of pediatric malignancies.",
        contentMd: `# Pediatric Oncology - Clinical Management

## Wilms Tumor Diagnosis and Treatment

**Diagnostic Workup**
- **Imaging**: Ultrasound (initial), CT/MRI (staging, contralateral kidney assessment)
- **Labs**: CBC, renal function, hepatic function, urinalysis for hematuria
- **Histology**: Biopsy only if diagnosis uncertain (avoid pre-operative biopsy due to spillage risk)

**Treatment (Multimodal)**
- **Staging surgery**: Radical nephrectomy with regional lymphadenectomy (standard)
- **Chemotherapy**: Pre-operative (some cases) or post-operative; vincristine, dactinomycin, doxorubicin
- **Radiation**: Reserved for advanced stages (stage III-V) or unfavorable histology
- **Outcomes**: 5-year survival >90% for stage I-II; ~65% for stage III; ~50% for stage IV

**Nephron-Sparing Surgery**
- Considered for: Bilateral disease, solitary kidney, syndromic cases
- Requires expert surgical team; controversial in isolated unilateral disease

## Neuroblastoma Diagnosis and Treatment

**Diagnostic Workup**
- **Imaging**: CT/MRI abdomen/pelvis, chest (for metastases); skeletal survey, MIBG scan
- **Labs**: Urinary VMA/HVA (90% elevated); ferritin, LDH (prognostic markers)
- **Genetic testing**: MYCN status critical for prognostic stratification
- **Bone marrow biopsy**: Assess for metastatic disease

**Treatment Strategy (Risk-Adapted)**
- **Low-risk**: Observation or chemotherapy alone; excellent prognosis
- **Intermediate-risk**: Chemotherapy ± radiation; good prognosis
- **High-risk (MYCN+)**: Intensive multimodal therapy
  - Induction chemotherapy (8-10 cycles)
  - Surgery (after chemotherapy response)
  - Radiation therapy
  - Stem cell transplantation
  - Maintenance therapy (isotretinoin for 6 months)

**Prognosis**
- Stage 1: ~95% 5-year survival
- Stage 4S (infants): ~85-95% (spontaneous regression possible)
- MYCN-amplified: ~30-40% 5-year survival

## Retinoblastoma Diagnosis and Treatment

**Diagnostic Approach**
- **Ophthalmology exam**: Direct visualization; dilated fundoscopy
- **Imaging**: CT/MRI (assess for optic nerve, extraocular extension)
- **Genetic testing**: RB gene mutation; evaluate for hereditary disease
- **Lumbar puncture**: If advanced disease (assess CNS involvement)

**Treatment (Eye-Sparing When Possible)**
- **Unilateral disease, small/medium**: Chemotherapy (systemic + intra-arterial) or external beam radiation
- **Large tumors**: Enucleation (surgical removal of eye)
- **Bilateral disease**: Preserve vision; combination chemotherapy, focal therapies (laser, cryotherapy), radiation

**Outcomes**
- Unilateral disease: >95% disease-free survival
- Bilateral disease: 75-90% disease-free survival
- Vision preservation: Possible in 50-70% of eyes treated without enucleation

## ALL Diagnosis and Treatment

**Diagnostic Workup**
- **CBC with differential**: Elevated WBC (can be very high), blasts present
- **Bone marrow aspiration**: Gold standard; assess morphology, immunophenotype, cytogenetics
- **Flow cytometry**: Immunophenotyping; distinguishes B-ALL vs T-ALL
- **Cytogenetics**: Essential for prognosis; look for t(12;21), t(9;22), hyperdiploidy, hypodiploidytesticular enlargement in T-ALL

**Induction Chemotherapy** (Standard Multi-Agent Therapy)
- **Regimen**: Vincristine, daunorubicin, asparaginase, corticosteroid (e.g., dexamethasone)
- **CNS prophylaxis**: Intrathecal chemotherapy (methotrexate, cytarabine)
- **Duration**: 4-6 weeks to achieve remission

**Consolidation and Maintenance**
- **Consolidation**: Intensive chemotherapy blocks (2-3 months)
- **Maintenance**: Lower-dose chemotherapy for 2+ years
- **Monitoring**: Bone marrow status, CNS assessment regularly

**Prognosis & Outcomes**
- Standard-risk ALL: 85-90% 5-year disease-free survival
- High-risk ALL (t(9;22), hypodiploid): 50-60% 5-year survival
- t(12;21) favorable: >90% 5-year survival
- Relapsed ALL: ~40% 5-year survival with salvage therapy + stem cell transplantation
`
      },
      {
        layer: 4,
        slug: "pediatric-oncology-exam-prep",
        title: "Pediatric Oncology - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts and exam questions on pediatric malignancies.",
        contentMd: `# Pediatric Oncology - Exam Preparation

## High-Yield Facts

### Wilms Tumor
- **Incidence**: 1 per 10,000; peak 3-5 years
- **Presentation**: Abdominal mass (90%), hematuria (20%)
- **Risk syndromes**: Aniridia, WAGR syndrome, hemihypertrophy
- **Staging**: I-V (based on extent of disease)
- **Treatment**: Radical nephrectomy + chemotherapy ± radiation
- **Prognosis**: >90% 5-year survival for stage I-II

### Neuroblastoma
- **Incidence**: 1 per 7000; peak <5 years
- **Presentation**: Abdominal mass (40%), metastatic disease at diagnosis (50-60%)
- **MYCN amplification**: Poor prognostic factor (20% of cases)
- **Unique**: Stage 4S in infants has paradoxically good prognosis
- **Diagnosis**: Elevated urinary VMA/HVA (90%)

### Retinoblastoma
- **Incidence**: 1 per 15,000-20,000
- **Presentation**: Leukocoria (white pupil/"cat's eye reflex")
- **Bilateral disease**: Germline RB mutation (inherited)
- **Unilateral disease**: Usually somatic mutation
- **Treatment**: Chemotherapy ± radiation + focal therapies (laser, cryotherapy)
- **Prognosis**: >95% unilateral; 75-90% bilateral

### ALL
- **Most common pediatric malignancy**
- **Peak age**: 2-5 years
- **Presentation**: Bleeding (thrombocytopenia), infections, anemia, hepatosplenomegaly
- **B-cell (85%) vs T-cell (15%)**
- **Favorable prognosis**: t(12;21), hyperdiploidy, low MYCN
- **Treatment**: Induction + consolidation + maintenance + CNS prophylaxis

## Common Exam Questions

**Q1: 4-year-old with abdominal mass, hematuria, family history of aniridia. Diagnosis?**
A: Wilms tumor → Imaging (ultrasound/CT) → Radical nephrectomy → Adjuvant chemotherapy → Monitor for relapse

**Q2: 3-year-old with elevated urinary VMA, abdominal mass, MYCN amplification. Diagnosis and prognosis?**
A: Neuroblastoma with MYCN amplification (high-risk) → Poor prognosis (~30-40% 5-year survival) → Intensive multimodal therapy

**Q3: 2-year-old with white pupil reflex in one eye. Diagnosis?**
A: Unilateral retinoblastoma → Assess for contralateral eye involvement → Systemic chemotherapy ± enucleation

**Q4: 4-year-old with petechiae, bone pain, hepatosplenomegaly. CBC shows WBC 80,000/μL with blasts. Diagnosis?**
A: Acute lymphoblastic leukemia → Bone marrow aspiration → Cytogenetics/flow cytometry → Induction chemotherapy

**Q5: ALL patient with t(12;21) fusion gene. Prognosis?**
A: Favorable prognosis; >90% 5-year disease-free survival

## Differential Diagnosis

| Tumor | Age | Presentation | Key Finding | Prognosis |
|-------|-----|--------------|-------------|-----------|
| **Wilms** | 3-5yr | Abd mass, hematuria | Staging crucial | >90% (early stage) |
| **NB** | <5yr | Abd mass, metastatic | MYCN status | MYCN+ poor |
| **RB** | <5yr | Leukocoria | Bilateral=germline | >95% unilateral |
| **ALL** | 2-5yr | Bleeding, infections | WBC, blasts | 85-90% standard-risk |
`
      },
      {
        layer: 5,
        slug: "pediatric-oncology-active-recall",
        title: "Pediatric Oncology - Active Recall",
        estimatedMinutes: 18,
        summary: "Flashcard Q&As for pediatric oncology mastery.",
        contentMd: `# Pediatric Oncology - Active Recall Flashcards

**Q1: What is Wilms tumor and its incidence?**
A: Most common renal malignancy in children; incidence 1 per 10,000; peak age 3-5 years

**Q2: What is the most common presentation of Wilms tumor?**
A: Abdominal mass (90% of cases); also hematuria (20%), flank pain, hypertension, fever

**Q3: What are the syndromic risk factors for Wilms tumor?**
A: Aniridia (30× higher risk), hemihypertrophy, WAGR syndrome (Wilms, Aniridia, GU anomalies, Retardation), Denys-Drash syndrome

**Q4: What is the staging system for Wilms tumor?**
A: Stage I (kidney-confined), II (extends beyond but excised), III (incomplete excision/local spread), IV (hematogenous metastases), V (bilateral)

**Q5: What is the primary treatment for Wilms tumor?**
A: Radical nephrectomy with regional lymphadenectomy; followed by chemotherapy ± radiation

**Q6: What is the 5-year survival rate for Wilms tumor stage I-II?**
A: >90% 5-year survival with appropriate multimodal therapy

**Q7: What is neuroblastoma and its incidence?**
A: Most common extracranial solid tumor in children; incidence 1 per 7,000; 90% diagnosed by age 10

**Q8: What is the origin of neuroblastoma?**
A: Arises from neural crest cells; adrenal medulla (50%) or sympathetic chain

**Q9: What is MYCN amplification in neuroblastoma?**
A: Present in 20% of cases; strong indicator of poor prognosis; associated with aggressive disease

**Q10: What are the diagnostic findings in neuroblastoma?**
A: Elevated urinary VMA/HVA (90%); imaging shows mass; MYCN status critical

**Q11: What is unique about Stage 4S neuroblastoma?**
A: Metastatic disease in infants <12 months that paradoxically has excellent prognosis (85-95% survival); spontaneous regression possible

**Q12: What is the treatment for high-risk (MYCN+) neuroblastoma?**
A: Intensive multimodal therapy: chemotherapy, surgery, radiation, stem cell transplantation, maintenance therapy (isotretinoin)

**Q13: What is retinoblastoma and its incidence?**
A: Most common intraocular malignancy in children; incidence 1 per 15,000-20,000; peak <5 years

**Q14: What is leukocoria and its significance in retinoblastoma?**
A: White pupil reflex ("cat's eye reflex"); most common presenting sign; indicates light reflection from tumor mass

**Q15: What is the difference between unilateral and bilateral retinoblastoma in terms of genetics?**
A: Unilateral (60%) = somatic mutation (sporadic); Bilateral (40%) = germline RB mutation (hereditary, familial)

**Q16: What is the risk of bilateral disease if one eye is affected?**
A: ~5-10% risk of contralateral eye involvement; requires regular ophthalmology screening

**Q17: What is the treatment approach for unilateral retinoblastoma?**
A: Depends on size/location: chemotherapy (systemic ± intra-arterial) ± focal therapies (laser, cryotherapy), external beam radiation if needed; enucleation if large

**Q18: What is acute lymphoblastic leukemia (ALL) and its incidence?**
A: Most common pediatric malignancy; incidence 2-3 per 100,000 children; peak age 2-5 years

**Q19: What is the B-cell to T-cell ALL ratio in children?**
A: B-cell ALL (85%) > T-cell ALL (15%); B-cell generally has better prognosis

**Q20: What are the clinical presentations of ALL?**
A: Bleeding (petechiae from thrombocytopenia), infections (low WBC), anemia, hepatosplenomegaly, lymphadenopathy, bone pain, CNS involvement (25%)

**Q21: How is ALL diagnosed?**
A: CBC showing elevated WBC with blasts, bone marrow aspiration (gold standard), flow cytometry (immunophenotyping), cytogenetics

**Q22: What is t(12;21) in ALL and its significance?**
A: ETV6-RUNX1 fusion gene; favorable prognostic indicator; found in ~20% of c-ALL; >90% 5-year survival

**Q23: What is t(9;22) in ALL (Philadelphia chromosome) and its significance?**
A: BCR-ABL fusion gene; poor prognosis without targeted therapy; found in 2-5% of pediatric ALL; requires tyrosine kinase inhibitors

**Q24: What is the standard induction chemotherapy for ALL?**
A: Vincristine, daunorubicin, asparaginase, corticosteroid (e.g., dexamethasone) for 4-6 weeks to achieve remission

**Q25: What is the 5-year disease-free survival for standard-risk ALL?**
A: 85-90% with current multimodal therapy (induction + consolidation + maintenance + CNS prophylaxis)
`
      }
    ]
  },
  {
    topicCode: "PE-MOD-09-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "adolescent-health-foundation",
        title: "Adolescent Health - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of puberty, mental health, substance abuse, and ARSH programs.",
        contentMd: `# Adolescent Health - Foundation

## Tanner Stages of Puberty

### Tanner Staging for Females (Breast and Pubic Hair)
**Breast Development:**
- **Stage 1**: Prepubertal; no breast tissue
- **Stage 2**: Breast bud appears; areola enlarges; 8-12 years average onset
- **Stage 3**: Breast increases further; areola darkens; 12-13 years
- **Stage 4**: Areola and nipple project above breast; 13-14 years
- **Stage 5**: Adult breast; single contour

**Pubic Hair:**
- **Stage 1**: Prepubertal; no pubic hair
- **Stage 2**: Sparse, long, lightly pigmented hair; 8-9 years
- **Stage 3**: Darker, coarser, curlier hair; 10-11 years
- **Stage 4**: Adult-type hair; small area; 11-12 years
- **Stage 5**: Adult distribution extending to medial thighs

### Tanner Staging for Males (Genital and Pubic Hair)
**Genital Development:**
- **Stage 1**: Prepubertal; <3 cm
- **Stage 2**: Testicular enlargement begins; 9-10 years; 4-6 cm
- **Stage 3**: Penis enlarges in length; 11-12 years
- **Stage 4**: Increased pigmentation, public hairs; 12-13 years
- **Stage 5**: Adult genitalia; >15 cm; 14-15 years

**Pubic Hair:** Similar progression to females

## Adolescent Mental Health Issues

### Depression and Anxiety
- 10-15% of adolescents have major depressive disorder
- Symptoms: Persistent sadness, loss of interest, sleep changes, concentration problems
- Suicide: Leading cause of death in adolescents (10-14 years)

### Eating Disorders
- **Anorexia nervosa**: Restrictive eating, body image disturbance, <17.5 BMI
- **Bulimia nervosa**: Binge-eating followed by purging
- **Binge eating disorder**: Regular binge episodes without purging
- Critical period: Females 15-24 years

### Self-Harm and Suicidal Behavior
- Non-suicidal self-injury (cutting, scratching): 15-18% adolescents
- Suicidal ideation: 10-15% adolescents
- Attempts: 3-5%; completed suicide: 0.01-0.02%

## Substance Abuse in Adolescents

### Common Substances
- **Tobacco**: Most commonly used; nicotine highly addictive
- **Alcohol**: Early use associated with later substance abuse
- **Cannabis**: Increasing use; may impair cognitive development
- **Cocaine, amphetamines**: Street drugs with high addiction potential

### Risk Factors
- Peer pressure, family history of addiction, mental health disorders, trauma, socioeconomic factors

## ARSH Program (Adolescent Reproductive and Sexual Health)

### Components
- **Awareness**: Sex education, sexual health information
- **Prevention**: Contraception counseling, STI/HIV prevention
- **Services**: Confidential counseling, youth-friendly clinics
- **Engagement**: Peer educators, adolescent-centered care

### Key Areas Addressed
- Reproductive health, contraception, menstrual disorders
- STI prevention and treatment
- Pregnancy options and antenatal care
- Mental health and psychosocial support
- Drug use prevention and de-addiction

### HEADSS Assessment (Psychosocial Screening)
- **Home**: Family situation, living arrangements
- **Education/Employment**: School performance, future plans
- **Activities**: Sports, hobbies, peer relationships
- **Drugs**: Tobacco, alcohol, substance use
- **Sex**: Sexual activity, contraception, STI risk
- **Suicide/Self-harm**: Mental health, safety concerns
`
      },
      {
        layer: 2,
        slug: "adolescent-health-mechanism",
        title: "Adolescent Health - Mechanism",
        estimatedMinutes: 22,
        summary: "Physiology of puberty, psychological changes, and pathophysiology of adolescent disorders.",
        contentMd: `# Adolescent Health - Mechanism

## Pubertal Physiology

### HPG Axis Activation
- **Hypothalamus**: Increases GnRH secretion in pulsatile manner
- **Pituitary**: GnRH stimulates FSH and LH release
- **Gonads**: FSH/LH stimulate sex hormone production (testosterone, estradiol)
- **Timing**: Begins 8-12 years; driven by leptin (body weight/fat mass signal)

### Hormonal Changes
**In Females:**
- Rising estradiol → breast development, pubic hair, accelerated growth
- Estradiol negative feedback → reduced FSH/LH toward menstrual cycle pattern
- First menses (menarche): Average 12.5 years; ranges 9-16 years

**In Males:**
- Rising testosterone → testicular growth, spermatogenesis, muscle development, voice deepening
- Testosterone feedback regulates FSH/LH

## Adolescent Brain Development

### Neurobiological Changes
- **Prefrontal cortex**: Continues developing until early 20s
- **Reward centers (limbic system)**: Hyperactive relative to prefrontal regulation
- **Result**: Risky behavior, impulsivity, peer influence susceptibility

### Psychosocial Development (Erikson)
- **Identity vs. Role Confusion**: Adolescent task of establishing identity
- **Autonomy seeking**: Separation from parents, increased peer relationships
- **Cognitive growth**: Concrete → Abstract thinking, moral reasoning

## Mental Health Pathophysiology

### Depression
- Neurotransmitter dysregulation: ↓Serotonin, ↓Norepinephrine
- HPA axis hyperactivity: ↑Cortisol
- Genetic predisposition + environmental stressors (peer conflict, academic pressure, trauma)

### Eating Disorders
- **Hypothalamic dysfunction**: Disrupted GnRH pulsatility → amenorrhea
- **Nutritional deficiencies**: Electrolyte abnormalities, cardiac effects
- **Psychological**: Perfectionism, body dissatisfaction, control issues
- **Social**: Media influence, peer comparison

### Substance Abuse Vulnerability
- **Developmental**: Immature prefrontal cortex → poor impulse control
- **Neurochemical**: Drugs activate reward centers, creating addiction
- **Genetic**: Family history increases risk
- **Environmental**: Peer pressure, availability, coping mechanism

## HEADSS Assessment Framework

### Purpose
- Comprehensive psychosocial screening
- Identifies risk behaviors and protective factors
- Guides confidential counseling and intervention
- Establishes rapport with adolescent patient
`
      },
      {
        layer: 3,
        slug: "adolescent-health-clinical",
        title: "Adolescent Health - Clinical",
        estimatedMinutes: 24,
        summary: "Clinical assessment and management of adolescent health issues.",
        contentMd: `# Adolescent Health - Clinical Management

## Pubertal Assessment

### Clinical Evaluation
- **Tanner staging**: Document breast/genital development, pubic hair
- **Timing**: Compare to population norms; identify precocious (early) or delayed (late) puberty
- **Growth velocity**: Should accelerate during puberty
- **Associated features**: Check for secondary sexual characteristics

### Assessment of Abnormal Puberty
**Precocious Puberty (before age 8 females, 9 males):**
- Investigation: GnRH stimulation test, bone age X-ray, imaging (ultrasound, MRI)
- Causes: GnRH-dependent (central) vs. GnRH-independent (peripheral)

**Delayed Puberty (no pubertal signs by age 13 females, 14 males):**
- Investigation: GnRH stimulation test, karyotype (if indicated)
- Causes: Hypogonadism, constitutional delay, systemic disease

## Mental Health Assessment and Intervention

### Depression Screening
- **Tool**: PHQ-9 (Patient Health Questionnaire) or mood screening in HEADSS
- **Red flags**: Persistent sadness >2 weeks, suicidal ideation
- **Management**:
  - Psychotherapy (CBT, IPT) as first-line
  - SSRIs (fluoxetine, sertraline) if moderate-severe
  - Suicide risk assessment and safety planning

### Eating Disorder Evaluation
- **Screening**: Questions about body image, weight concerns, binge/purge behaviors
- **Physical exam**: BMI, vital signs (bradycardia, hypotension), signs of purging
- **Labs**: Electrolytes (hypokalemia), cardiac function (ECG)
- **Management**:
  - Nutritional rehabilitation, psychotherapy, family involvement
  - Inpatient if medically unstable

### Suicide Prevention
- **Risk assessment**: Active ideation, plan, intent, access to means
- **Safety planning**: Remove access to means, identify support contacts
- **Psychotherapy**: CBT, DBT for self-harm/suicide risk
- **Medication**: SSRIs if depression; avoid tricyclics (cardiotoxic in overdose)

## Substance Abuse Assessment and Management

### Screening Questions
- "Have you ever used tobacco, alcohol, or drugs?"
- "Do your friends use substances?"
- "Has substance use affected school, relationships, or health?"
- "Do you feel you need help stopping?"

### Intervention Levels
**Abstinence/Minimal Risk:**
- Education, counseling, monitor at follow-up

**Mild-Moderate Use:**
- Brief intervention, motivational interviewing
- Peer support groups, school/community programs

**Dependence/Severe Use:**
- Referral to addiction specialist
- Inpatient de-addiction program, medication-assisted treatment

## ARSH Clinic Approach

### Youth-Friendly Services
- **Confidentiality**: Assure privacy; separate from parents
- **Non-judgmental**: Create safe space to discuss sensitive topics
- **Accessibility**: Convenient timing, affordable, accessible location
- **Adolescent-centered**: Involve in treatment planning

### Reproductive Health Services
- **Menstrual disorders**: PCOS, dysmenorrhea, amenorrhea
- **Contraception**: Discussion of options, pros/cons
- **Pregnancy options**: Counseling, prenatal care, adoption resources
- **STI testing/treatment**: Confidential screening, treatment

### Psychosocial Support
- **Mental health screening**: Depression, anxiety, self-harm
- **Stress management**: Coping strategies, relaxation techniques
- **Peer support**: Group counseling, peer educator programs
- **Family counseling**: Parent-adolescent communication, conflict resolution

### Examples of Interventions
- "What contraceptive options interest you?"
- "Tell me about pressures you feel regarding sex"
- "How are you coping with school stress?"
- "Do you have someone you can talk to if you're struggling?"
`
      },
      {
        layer: 4,
        slug: "adolescent-health-exam-prep",
        title: "Adolescent Health - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts and exam questions on adolescent health.",
        contentMd: `# Adolescent Health - Exam Preparation

## High-Yield Facts

### Tanner Stages
- **Females**: Breast development (stages 1-5) concurrent with pubic hair
- **Males**: Testicular enlargement (stage 2) first sign; genital growth follows
- **Average age**: Females menarche 12.5 years; males spermarche 13-14 years
- **Growth spurt**: Peak in mid-puberty; 10-14 cm/year growth velocity

### Mental Health
- **Depression**: 10-15% prevalence; leading cause of disability
- **Suicide**: Leading cause of death in adolescents; 3-5% attempt, 0.01% complete
- **Eating disorders**: 1-2% prevalence; mortality 5-10% if untreated
- **Self-harm**: 15-18% engage in non-suicidal self-injury

### Substance Abuse
- **Most common**: Tobacco > alcohol > cannabis > cocaine
- **Risk factors**: Peer pressure, family history, mental health disorders
- **Timing**: Early onset (before age 15) predicts worse outcomes

### ARSH Program
- **Components**: Awareness, prevention, treatment, support
- **Services**: Youth-friendly clinics, confidential counseling, contraception
- **Tools**: HEADSS assessment for comprehensive screening
- **Goal**: Health, development, life skills for adolescents

## Common Exam Questions

**Q1: 14-year-old female with breast development stage 3, pubic hair stage 2. Is this normal?**
A: Yes; Tanner stage progresses in sequence; at 14 years, mid-puberty is expected

**Q2: 13-year-old girl with absence of breast development. Workup?**
A: Delayed puberty; check GnRH stimulation test, karyotype, imaging; rule out hypogonadism or constitutional delay

**Q3: 15-year-old with persistent sadness, poor concentration, insomnia. PHQ-9 score 18. Management?**
A: Major depressive disorder → Psychotherapy (CBT) first-line; consider SSRI if moderate-severe; assess suicide risk

**Q4: 16-year-old presenting to clinic states "I don't want my parents knowing about this visit." How to approach?**
A: Respect confidentiality; explain limits of confidentiality; assure privacy regarding sensitive topics (sex, substance use, mental health)

**Q5: HEADSS assessment shows substance use. Next step?**
A: Assess frequency/pattern, impact on function, readiness to change; brief intervention, referral if dependence; educate on risks

## HEADSS Interpretation

| Area | Green Flag | Yellow Flag | Red Flag |
|------|-----------|-----------|----------|
| **Home** | Supportive family | Family conflict | Abuse, homelessness |
| **Education** | Good grades, engaged | Declining grades | Dropping out |
| **Activities** | Sports, hobbies, friends | Some isolation | No activities/friends |
| **Drugs** | Denies all use | Experimentation | Regular use, dependence |
| **Sex** | Age-appropriate, safe | Curious, inconsistent protection | High-risk, STI history |
| **Suicide** | No ideation | Stressors present | Active ideation/plan |

## Tanner Stage Reference

| Stage | Females Breast | Males Genital | Age Typical |
|-------|----------------|--------------|-----------|
| **1** | Prepubertal | Prepubertal (Vol <4 mL) | <8 yrs F, <9 yrs M |
| **2** | Breast bud | Testicular enlargement (4-6 mL) | 8-9 F, 9-10 M |
| **3** | Increased size | Penis lengthens | 10-11 F, 11-12 M |
| **4** | Areola projects | Pubic hair, testis >12 mL | 12-13 F, 12-13 M |
| **5** | Adult breast | Adult genitalia | >13 F, >14 M |
`
      },
      {
        layer: 5,
        slug: "adolescent-health-active-recall",
        title: "Adolescent Health - Active Recall",
        estimatedMinutes: 18,
        summary: "Flashcard Q&As for adolescent health mastery.",
        contentMd: `# Adolescent Health - Active Recall Flashcards

**Q1: What is Tanner stage 2 in females and what is its average age?**
A: Breast bud appearance; areola enlarges; average age 8-12 years; first sign of puberty in females

**Q2: What is Tanner stage 2 in males and what is its average age?**
A: Testicular enlargement (4-6 mL); average age 9-10 years; first sign of puberty in males

**Q3: What is menarche and its average age?**
A: First menstruation; average age 12.5 years; ranges 9-16 years; indicates mid-to-late puberty

**Q4: What is the typical growth velocity during puberty?**
A: 10-14 cm/year during peak growth spurt (mid-puberty); 5-8 cm/year during other pubertal phases

**Q5: What is precocious puberty and at what age is it defined?**
A: Pubertal development before age 8 years in females or 9 years in males; requires investigation

**Q6: What is constitutional delay of growth and puberty?**
A: Normal variant; late but normal puberty; positive family history common; reassurance and monitoring usual approach

**Q7: What is the prevalence of depression in adolescents?**
A: 10-15% have major depressive disorder; more common in females

**Q8: What is the leading cause of death in adolescents?**
A: Suicide; 3-5% attempt suicide; 0.01% complete suicide; most use violent methods

**Q9: What is non-suicidal self-injury and its prevalence in adolescents?**
A: Self-harm without intent to die (cutting, scratching); 15-18% of adolescents engage in NSSI

**Q10: What are eating disorders and their main types?**
A: Anorexia nervosa (restrictive), Bulimia nervosa (binge-purge), Binge Eating Disorder (binge only)

**Q11: What is the mortality rate for untreated eating disorders?**
A: 5-10% mortality rate; complications include cardiac arrhythmias, electrolyte abnormalities, organ failure

**Q12: What are the most commonly used substances in adolescents?**
A: Tobacco (most common) > Alcohol > Cannabis > Cocaine/Amphetamines

**Q13: What is the neurobiology behind adolescent substance abuse vulnerability?**
A: Prefrontal cortex (impulse control, judgment) still developing while reward centers (limbic system) are hyperactive

**Q14: What is the HEADSS assessment and its purpose?**
A: Comprehensive psychosocial screening tool covering: Home, Education, Activities, Drugs, Sex, Suicide/Self-harm

**Q15: What are the six domains of HEADSS assessment?**
A: Home (family), Education/Employment, Activities (hobbies), Drugs, Sex, Suicide/Self-harm

**Q16: What is ARSH program and its key components?**
A: Adolescent Reproductive and Sexual Health; includes awareness, prevention, treatment, support services

**Q17: What are examples of ARSH clinic services?**
A: Youth-friendly clinics, confidential counseling, contraception counseling, STI testing/treatment, mental health support

**Q18: What is the principle of confidentiality in adolescent care?**
A: Assure privacy; separate from parents for sensitive topics; explain limits of confidentiality (danger to self/others, abuse)

**Q19: How should depression be first-line treated in adolescents?**
A: Psychotherapy (CBT, IPT) as first-line; SSRIs (fluoxetine, sertraline) if moderate-severe or no improvement with therapy

**Q20: What is the management approach for adolescent substance use?**
A: Assess pattern (abstinence vs. dependence), brief intervention, motivational interviewing, referral to specialist if dependence

**Q21: What are the red flags in HEADSS assessment?**
A: Abuse/homelessness, dropping out school, social isolation, regular substance use, high-risk sexual behavior, active suicidal ideation

**Q22: What is the mortality rate for anorexia nervosa if untreated?**
A: 5-10% mortality rate; complications from starvation, electrolyte abnormalities, cardiac effects

**Q23: How should a healthcare provider create a youth-friendly clinic environment?**
A: Assure confidentiality, be non-judgmental, separate from parents for sensitive discussions, involve adolescent in decision-making

**Q24: What is the role of peer educators in ARSH programs?**
A: Model healthy behaviors, provide health information, reduce stigma, increase accessibility to youth, support de-addiction

**Q25: What is motivational interviewing in substance abuse counseling?**
A: Counseling approach to enhance intrinsic motivation for change; explore ambivalence, support self-efficacy, respect autonomy
`
      }
    ]
  },
  {
    topicCode: "PE-MOD-09-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "social-pediatrics-foundation",
        title: "Social Pediatrics - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of child abuse, ICDS, RBSK, child labor, and POCSO Act.",
        contentMd: `# Social Pediatrics - Foundation

## Child Abuse and Maltreatment

**Types of Abuse**
- **Physical abuse**: Non-accidental injury; bruises, fractures, burns
- **Emotional abuse**: Neglect, humiliation, threats, isolation
- **Sexual abuse**: Inappropriate sexual contact; penetrative or non-penetrative
- **Neglect**: Failure to provide food, shelter, medical care, education

**Indicators of Abuse**
- Unexplained injuries; injuries inconsistent with history
- Delayed development, failure to thrive
- Behavioral: Withdrawal, aggression, age-inappropriate sexual knowledge
- Family: Isolation, parental substance abuse, domestic violence

**Mandatory Reporting**
- Healthcare providers have legal duty to report suspected abuse
- In India: Report to local police, child welfare committee, Childline (1098)
- No requirement for proof; reasonable suspicion sufficient

## ICDS (Integrated Child Development Services)

**Definition and Scope**
- Government program launched 1975; one of world's largest
- Targets children 0-6 years and pregnant/lactating women
- Operates through Anganwadi Centers (village childcare facilities)

**Services Provided (6 Components)**
1. **Supplementary nutrition**: Food/fortified meals for undernourished children
2. **Pre-school education**: Early learning activities (age 3-6)
3. **Health checkups**: Growth monitoring, immunization, health screening
4. **Referral services**: Link to health system for specialized care
5. **Nutrition and health education**: Mother-child health counseling
6. **Anganwadi worker support**: Training, supervision

**Impact**: Reduces malnutrition, improves immunization coverage, supports early development

## RBSK (Rashtriya Bal Swasthya Karyakram)

**Definition**
- National child health screening program; launched 2013
- Focuses on screening and treatment of children with disabilities
- School-based and community-based screening

**"4D" Approach**
1. **Detect**: Screen for defects (vision, hearing, physical disabilities)
2. **Diagnose**: Confirm diagnosis through specialist evaluation
3. **Treat**: Provide treatment (spectacles, hearing aids, surgery)
4. **Disability mitigation**: Rehabilitate and support integration

**Conditions Screened**
- Vision defects: Refractive errors, color blindness, strabismus
- Hearing defects: Conductive and sensorineural hearing loss
- Physical disabilities: Orthopedic problems, cerebral palsy, cleft palate
- Developmental delays: Motor, speech, cognitive delays

## Child Labor Laws

**CLPR (Child Labor Prohibition and Regulation) Rules 2016**
- Prohibits employment of children <14 years in all sectors
- Restricts adolescents (14-18 years) from hazardous occupations
- Hazardous: Mining, chemicals, heavy machinery, construction

**Impact on Health**
- Malnutrition, growth stunting from poor diet
- Injuries, occupational diseases
- Disrupted education, reduced life opportunities
- Psychological: Trauma, exploitation, low self-esteem

## POCSO Act 2012

**Definition**
- Protection of Children from Sexual Offences Act 2012
- Applies to children <18 years; genders neutral

**Offences Covered**
- Penetrative sexual assault
- Non-penetrative sexual assault
- Sexual harassment (inappropriate comments, exposure)
- Child pornography

**Mandatory Reporting and Protection**
- Reporting to police mandatory; healthcare provider duty
- Child's identity protected; in-camera proceedings
- Punishment: Life imprisonment for aggravated offenses
- Rehabilitation support: Counseling, reintegration, social support
`
      },
      {
        layer: 2,
        slug: "social-pediatrics-mechanism",
        title: "Social Pediatrics - Mechanism",
        estimatedMinutes: 22,
        summary: "Impact of abuse, nutrition programs, disability burden on child health outcomes.",
        contentMd: `# Social Pediatrics - Mechanism

## Pathophysiology of Child Abuse

### Physical Abuse Effects
- **Immediate**: Pain, bleeding, fractures, organ damage
- **Acute neurological**: Intracranial hemorrhage, diffuse axonal injury, spinal cord damage
- **Chronic**: Developmental delay, cognitive impairment from untreated injuries
- **Psychological**: PTSD, anxiety, depression, behavioral problems

### Emotional/Psychological Abuse Effects
- **Neurobiological**: HPA axis dysregulation; ↑cortisol → impaired brain development
- **Cognitive**: Reduced executive function, learning difficulties
- **Emotional**: Insecure attachment, low self-esteem, depression
- **Social**: Isolation, difficulty forming relationships, aggression

### Sexual Abuse Effects
- **Physical**: Genital/anal trauma, STIs, pregnancy (in adolescents)
- **Psychological**: PTSD, dissociation, shame, guilt, fear
- **Behavioral**: Sexualized behavior, regression, depression, suicidality
- **Long-term**: Anxiety, depression, increased risk of re-victimization, sexual dysfunction

### Neglect Effects
- **Malnutrition**: PEM, micronutrient deficiencies, growth stunting
- **Infections**: Repeated respiratory, GI infections from poor hygiene/immunization gaps
- **Developmental**: Delayed milestones, reduced IQ from lack of stimulation
- **Psychological**: Insecure attachment, behavioral problems

## Impact of ICDS on Child Health

### Nutrition Benefits
- Supplementary nutrition: Reduces PEM, micronutrient deficiencies
- Improved anthropometry: Weight gain, reduced stunting
- Better immune function: Reduced infection severity

### Development Support
- Pre-school education: Better school readiness, cognitive development
- Early stimulation: Language development, social-emotional growth
- Milestone tracking: Early identification of developmental delays

### Health System Integration
- Immunization coverage: ↑ from coordination with health centers
- Health monitoring: Periodic check-ups, growth tracking
- Referral system: Link families to specialized care

## RBSK Disability Impact

### Screening and Early Detection
- **Vision defects**: Uncorrected errors → poor school performance, social isolation
- **Hearing loss**: Untreated → speech delay, communication problems
- **Physical disabilities**: Mobility restrictions → reduced school access, social stigma
- **Developmental delays**: Without early intervention → permanent impairment

### Treatment Outcomes
- Spectacles: 90%+ improvement in vision-related school performance
- Hearing aids: Restoration of communication, language development
- Therapy (OT/PT): Functional improvement, independence
- Early education: Better long-term academic and social outcomes

## Impact of Child Labor on Health

### Nutritional Consequences
- Inadequate dietary intake: Children prioritize rent/debt over food
- PEM, micronutrient deficiencies: Iron (anemia), calcium (bone health), protein
- Growth stunting: Height <5th percentile; permanent reduction of 5-10 cm

### Occupational Health
- **Mining/chemicals**: Exposure to toxins → respiratory disease, cancer risk
- **Construction**: Fall injuries, musculoskeletal problems from repetitive work
- **Agricultural**: Pesticide exposure → neurological effects, reproductive harm
- **Manufacturing**: Machinery injuries, burns, heat exhaustion

### Psychosocial Impact
- Interrupted education: Lost schooling = reduced lifetime earnings
- Mental health: Depression, anxiety from exploitation, abuse
- Social: Stigma, isolation, reduced social mobility

## POCSO Implementation

### Disclosure and Support
- Children may disclose to healthcare providers first
- Mandatory reporting → criminal investigation
- Support services: Counseling, rehabilitation, reintegration programs
- Protection from re-victimization: Court orders, safe placement
`
      },
      {
        layer: 3,
        slug: "social-pediatrics-clinical",
        title: "Social Pediatrics - Clinical",
        estimatedMinutes: 24,
        summary: "Clinical recognition, assessment, reporting of abuse and program implementation.",
        contentMd: `# Social Pediatrics - Clinical Management

## Recognition and Assessment of Child Abuse

### History-Taking Red Flags
- Delay between injury and presentation (especially if explanation inconsistent)
- History inconsistent with developmental stage ("3-year-old fell and broke ribs")
- Recurrent injuries; previous bruises in different stages of healing
- Parental behavior: Calm about serious injury, blame on child, defensive

### Physical Examination Findings

**Suspicious Bruising Patterns:**
- Clustered bruises, geometric patterns (belt marks, hand prints)
- Bruises on ears, neck, genitals (not typical from accidental falls)
- Bruises in different stages of healing (old yellow/brown + fresh red/purple)
- Grab marks on arms (fingers marks), loop marks (cord)

**Fractures Suggestive of Abuse:**
- Metaphyseal "corner" or "bucket-handle" fractures
- Rib fractures (especially posterior)
- Spiral fractures (twisting injury)
- Multiple fractures in different healing stages
- Fractures in non-ambulatory infants (<12 months)

**Other Indicators:**
- Genital/anal trauma, STI diagnosis, anal fissures
- Retinal hemorrhages (suggesting shaken baby syndrome)
- Subdural hematoma in young infant with no history of severe trauma

### Psychological Assessment
- Behavioral: Withdrawn, fearful of adults, age-inappropriate sexual knowledge
- Drawing: Drawings of abuse (if age-appropriate)
- Interview: Detailed history; some children may provide disclosures

### Forensic Evaluation
- Photographic documentation of injuries (with child's and caregiver's consent)
- Medical records and imaging review
- Radiographic survey (skeletal survey in young children)
- Lab: Blood cultures (if infection suspected), toxicology

## Child Abuse Reporting

### Mandatory Reporting Requirements
- **Legal duty**: All healthcare professionals must report
- **Threshold**: "Reasonable suspicion" (not proof required)
- **To whom**: Local child protection committee, police, Childline (1098)
- **Documentation**: Record history, physical findings, photographs

### Protection of Child
- **Safety assessment**: Is child safe at home? Immediate protection if risk
- **Mandatory removal**: Child welfare committee may order placement
- **Counseling/support**: Trauma-informed care, psychological support
- **Legal proceedings**: Child's interest primary; minimize re-victimization

## ICDS Implementation in Clinical Practice

### Healthcare Provider Role
- **Identify children**: Know location of Anganwadi centers
- **Referral**: Link undernourished/developmental delay children to ICDS
- **Supervision**: Periodic monitoring of nutritional supplementation
- **Training**: Support Anganwadi workers in health/nutrition education

### Integration with Health System
- **Antenatal care**: Nutrition counseling for pregnant women through ICDS
- **Immunization**: Coordination between health centers and ICDS for vaccine delivery
- **Growth monitoring**: Shares standardized growth charts
- **Referral**: Direct link to primary health center for ill children

## RBSK Program Implementation

### School-Based Screening
- **Health workers**: Conduct vision, hearing, physical screening at schools
- **Case identification**: 5-10% of children have screened defects
- **Referral**: Children with abnormalities referred to district mobile units

### Specialist Camps
- **Vision camps**: Refraction, spectacle prescription (free)
- **ENT camps**: Hearing assessment, hearing aids provision
- **Surgical camps**: Cleft repair, orthopedic corrections, other procedures

### Follow-Up and Rehabilitation
- **Tracking**: Ensure children actually receive prescribed interventions
- **Rehabilitative support**: OT, PT for children with disabilities
- **Integration**: Support school attendance and social inclusion

### Healthcare Provider Role
- **Awareness**: Know RBSK services available in district
- **Referral**: Send children with suspected defects to RBSK
- **Documentation**: Record RBSK referrals in health records

## POCSO Act Implementation

### Reporting and Investigation
- **Suspected abuse**: Report to police; provide medical examination
- **Medical examination**: Document findings; preserve evidence (clothing, swabs)
- **Confidentiality**: Child's identity protected throughout process

### Support and Rehabilitation
- **Immediate support**: Safe placement, immediate medical care
- **Psychological counseling**: Trauma-informed care, therapy
- **Long-term rehabilitation**: Reintegration into school/community
- **Legal support**: Government counsel provides free legal representation

### Healthcare Provider Responsibilities
- **Recognition**: Know indicators of sexual abuse in children
- **Examination**: Non-judgmental, sensitive examination; preserve evidence
- **Documentation**: Detailed, objective medical findings
- **Reporting**: Report to police; support investigation as needed
- **Support**: Compassionate care; trauma-informed approach
`
      },
      {
        layer: 4,
        slug: "social-pediatrics-exam-prep",
        title: "Social Pediatrics - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts and exam questions on child protection and social programs.",
        contentMd: `# Social Pediatrics - Exam Preparation

## High-Yield Facts

### Child Abuse
- **Types**: Physical, emotional, sexual, neglect
- **Indicators**: Unexplained injuries, delayed development, behavioral changes
- **Mandatory reporting**: Healthcare provider legal duty; report on suspicion (not proof)
- **Reporting agencies**: Police, child welfare committee, Childline 1098

### ICDS
- **Launched**: 1975
- **Target**: Children 0-6 years and pregnant/lactating women
- **Services**: 6 components (supplementary nutrition, pre-school, health, referral, education, worker support)
- **Impact**: Reduces malnutrition, improves immunization, supports early development

### RBSK
- **Launched**: 2013
- **Approach**: 4D (Detect, Diagnose, Treat, Disability mitigation)
- **Conditions**: Vision, hearing, physical, developmental disabilities
- **Impact**: Identifies ~5-10% children with defects; provides free treatment

### Child Labor
- **CLPR 2016**: Prohibits <14 years; restricts 14-18 years in hazardous work
- **Health impact**: Malnutrition, injuries, occupational diseases, disrupted education

### POCSO Act
- **Covers**: Children <18 years; all types of sexual offences
- **Mandatory reporting**: Required for healthcare providers
- **Punishment**: Life imprisonment for aggravated offenses
- **Support**: Rehabilitation, counseling, reintegration services

## Common Exam Questions

**Q1: 3-year-old with bruises on ears and genitals; parent says "fell from chair." Next step?**
A: Suspect abuse; conduct skeletal survey; report to child welfare committee and police; document findings; ensure safety

**Q2: Healthcare provider suspects child abuse but has no proof. Obligation to report?**
A: YES; mandatory reporting at reasonable suspicion level; report to police/child welfare committee

**Q3: 5-year-old referred to clinic with stunted growth, poor nutrition. Available program to address this?**
A: ICDS (Integrated Child Development Services); refer to local Anganwadi center for supplementary nutrition + early education

**Q4: School identifies 100 children for screening; 8 have vision defects. How to provide glasses?**
A: RBSK (Rashtriya Bal Swasthya Karyakram); refer to district mobile vision camp; free spectacle prescription and provision

**Q5: 10-year-old child reports being touched inappropriately by neighbor. Healthcare provider action?**
A: Provide immediate safety, medical examination (document findings, preserve evidence), mandatory report to police, supportive care per POCSO Act

## Abuse Recognition Checklist

| Finding | Suggestive | Red Flag | Need Reporting |
|---------|-----------|----------|-----------------|
| **Single bruise on shin (fall)** | Accidental | No | No |
| **Bruises in different stages** | Possible accident | Yes | YES |
| **Metaphyseal fracture in infant** | Accidental | Yes | YES |
| **Loop-shaped bruise (rope)** | Accidental | Yes | YES |
| **Retinal hemorrhage + subdural** | Accidental | Yes | YES |
| **Genital trauma** | Accidental | Yes | YES |

## Program Coverage

| Program | Target Age | Services | Agency |
|---------|-----------|----------|--------|
| **ICDS** | 0-6 yrs | Nutrition, pre-school, health | ICDS |
| **RBSK** | School-age | Screening, treatment of disabilities | School/District |
| **NIS** | Newborn | Nutrition supplementation | Health system |
| **Pulse Polio** | <5 yrs | Polio immunization | Health system |
`
      },
      {
        layer: 5,
        slug: "social-pediatrics-active-recall",
        title: "Social Pediatrics - Active Recall",
        estimatedMinutes: 18,
        summary: "Flashcard Q&As for social pediatrics mastery.",
        contentMd: `# Social Pediatrics - Active Recall Flashcards

**Q1: What are the four main types of child abuse?**
A: Physical abuse, emotional abuse, sexual abuse, neglect

**Q2: What is physical abuse and give examples of indicative injuries?**
A: Non-accidental injury; bruises in geometric patterns, rib fractures, spiral fractures, metaphyseal fractures, retinal hemorrhages

**Q3: What is emotional abuse in children?**
A: Neglect, humiliation, threats, isolation, witnessing domestic violence; causes psychological harm

**Q4: What is sexual abuse and what is the legal age for children?**
A: Inappropriate sexual contact; penetrative or non-penetrative; applies to children <18 years

**Q5: What are behavioral indicators of abuse in children?**
A: Withdrawal, aggression, fearfulness of adults, age-inappropriate sexual knowledge, regressive behavior

**Q6: What is the legal threshold for mandatory reporting of abuse?**
A: "Reasonable suspicion" (not proof required); healthcare provider has legal duty to report

**Q7: What are the reporting agencies for child abuse in India?**
A: Local police, child welfare committee, Childline 1098; report to any one of these agencies

**Q8: What is ICDS and when was it launched?**
A: Integrated Child Development Services; launched 1975; one of world's largest programs for child health

**Q9: What are the six components of ICDS services?**
A: 1) Supplementary nutrition, 2) Pre-school education, 3) Health checkups, 4) Referral services, 5) Nutrition/health education, 6) Worker support

**Q10: What age group is targeted by ICDS?**
A: Children 0-6 years and pregnant/lactating women

**Q11: What are the operational units of ICDS?**
A: Anganwadi centers (village-level childcare facilities); staffed by Anganwadi workers

**Q12: What is RBSK and when was it launched?**
A: Rashtriya Bal Swasthya Karyakram; national child health screening program launched 2013

**Q13: What is the "4D" approach in RBSK?**
A: Detect (screen for defects), Diagnose (confirm diagnosis), Treat (provide treatment), Disability mitigation (rehabilitate/integrate)

**Q14: What conditions does RBSK screen for?**
A: Vision defects, hearing loss, physical disabilities, developmental delays

**Q15: What is the Child Labor (Prohibition and Regulation) Rules 2016?**
A: Prohibits employment of children <14 years; restricts adolescents 14-18 years in hazardous occupations

**Q16: What are examples of hazardous occupations for children 14-18 years?**
A: Mining, chemical industries, heavy machinery, construction work

**Q17: What is the health impact of child labor?**
A: Malnutrition, growth stunting, occupational injuries, diseases, interrupted education, psychological trauma

**Q18: What is POCSO Act 2012 and what age does it apply to?**
A: Protection of Children from Sexual Offences Act; applies to children <18 years; gender-neutral

**Q19: What offences are covered by POCSO Act?**
A: Penetrative sexual assault, non-penetrative sexual assault, sexual harassment, child pornography

**Q20: What is the punishment for sexual offence against children under POCSO Act?**
A: Life imprisonment for aggravated sexual offences; lower punishment for other offences depending on severity

**Q21: What is mandatory about reporting under POCSO Act?**
A: Mandatory reporting to police; healthcare provider has legal duty; child's identity protected

**Q22: What are the rehabilitation services provided under POCSO Act?**
A: Counseling, trauma-informed care, reintegration support, legal representation, safe placement

**Q23: What is the healthcare provider role in recognizing child abuse?**
A: Identify indicators, conduct appropriate assessment, document findings, report to authorities, provide supportive care

**Q24: What is forensic documentation in child abuse cases?**
A: Detailed medical examination with photographs, preservation of evidence, skeletal survey/imaging, documented objective findings

**Q25: What is Childline and its number?**
A: National helpline for child protection; telephone number 1098; provides immediate response to child abuse/exploitation
`
      }
    ]
  }
];


