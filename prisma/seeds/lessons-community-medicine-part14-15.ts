import type { TopicLessons } from "./content-loader";

export const communityMedicineLessonsPartXIV: TopicLessons[] = [
  {
    topicCode: "CM-MOD-05-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "pem-malnutrition-layer-1-foundation",
        title: "Protein-Energy Malnutrition (PEM) - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of PEM, types (marasmus, kwashiorkor, marasmic-kwashiorkor), pathophysiology, epidemiology in India, and clinical manifestations.",
        contentMd: `# Protein-Energy Malnutrition - Foundation

## Definition & Types

**PEM:** Deficiency of both energy (calories) and protein

**Types:**
1. **Marasmus:** Severe wasting, predominantly energy deficiency
   - Weight-for-age <60% of expected
   - Muscle wasting prominent
   - No edema
   - "Skin and bones" appearance
   - Prognosis: Better if treated early

2. **Kwashiorkor:** Predominantly protein deficiency with edema
   - Weight-for-age <60-70% but with edema (masks wasting)
   - Bilateral pitting edema (feet, face)
   - Hair changes (color, texture, easy pluckability)
   - Skin changes (hyperpigmentation, peeling)
   - Hepatomegaly (fatty infiltration)
   - Prognosis: More complications than marasmus

3. **Marasmic-Kwashiorkor:** Combined features
   - Severe wasting + edema
   - Most severe form
   - Highest mortality

## Epidemiology

**Global:**
- ~155 million children <5 years stunted
- ~52 million wasted
- ~1.9 million deaths/year (PEM-related)

**India:**
- Stunting: 35%, Wasting: 19%, Underweight: 32%
- Higher in rural areas, lower SES
- Regional variation: North >South

## Pathophysiological Changes

**Early Malnutrition:**
- ↓ Body weight
- ↓ Glycogen stores
- Muscle catabolism begins
- Metabolic rate ↓ (adaptation)

**Severe Malnutrition:**
- Skeletal muscle wasting (~40% loss)
- Organ atrophy (brain spared, though affected)
- Visceral protein loss (hepatic proteins, immunoglobulins)
- Fat stores depletion
- Edema formation (↓ serum albumin, Na⁺ retention, lymphatic dysfunction)
- Immune dysfunction (↓ T-cells, antibodies, complement)
- Micronutrient deficiencies (Fe, Zn, Vit A, B12)

## Clinical Manifestations

**Nutritional:**
- Weight loss, growth faltering
- Muscle wasting, loss of fat
- Bilateral edema (kwashiorkor)
- Skin: Dry, peeling, hyperpigmentation
- Hair: Sparse, color change, easy pluckability
- Nail changes, dermatitis

**Systemic:**
- Hepatomegaly (fatty infiltration)
- Cardiac dysfunction (cardiomyopathy)
- Anemia (iron + folate + B12 deficiency)
- Immune dysfunction: ↑ Infections
- Endocrine: Thyroid dysfunction, adrenal insufficiency

**Metabolic:**
- Hypoglycemia (↓ glycogen, impaired gluconeogenesis)
- Electrolyte abnormalities (K⁺, Na⁺, Mg²⁺, PO₄³⁻)
- Hypocalcemia (↓ Vit D, ↓ Ca-binding proteins)

## SAM Classification (WHO)

**Severe Acute Malnutrition (SAM):**
- Weight-for-height <-3 SD, OR
- MUAC <115 mm (children 6-59 months), OR
- Bilateral pitting edema`,
        mnemonics: [
          {
            text: "MARASMUS",
            explanation: "Wasting prominent, no edema, 'skin and bones', better prognosis",
          },
          {
            text: "KWASHIORKOR",
            explanation: "Protein deficiency, bilateral edema, hair/skin changes, hepatomegaly",
          },
          {
            text: "PATHOPHYSIOLOGY",
            explanation: "Muscle wasting, organ atrophy, immune dysfunction, micronutrient deficiencies",
          },
        ],
        keyPoints: [
          "Marasmus: Severe wasting, no edema; Kwashiorkor: Edema with protein deficiency",
          "India: 35% stunting, 19% wasting, 32% underweight (predominantly PEM-related)",
          "Severe effects: Muscle loss, immune dysfunction, infections, electrolyte abnormalities",
          "SAM defined as WFH <-3SD, MUAC <115mm, or bilateral pitting edema",
          "Mortality from PEM related to infections, organ dysfunction, refeeding syndrome",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 11", edition: "26th" },
          { book: "WHO SAM Management Guidelines", chapter: "Classification, pathophysiology", edition: "2022" },
        ],
      },
      {
        layer: 2,
        slug: "pem-malnutrition-layer-2-mechanism",
        title: "Protein-Energy Malnutrition (PEM) - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of protein and energy deficiency, metabolic adaptation, immune dysfunction, and refeeding syndrome.",
        contentMd: `# Protein-Energy Malnutrition - Mechanism

## Energy Deficit Pathophysiology

**Initial Response to Starvation:**
1. **First 12-24 hours:** Glycogenolysis (liver glycogen depletes)
2. **1-3 days:** Gluconeogenesis (alanine, lactate → glucose in liver)
3. **>3 days:** Ketogenesis (↑ acetyl-CoA → ketone bodies for brain, muscle)
4. **Weeks-months:** Protein catabolism (muscle, organ proteins → amino acids for gluconeogenesis)

**Metabolic Adaptation:**
- ↓ Metabolic rate (20-30% reduction in severe malnutrition)
- ↓ Activity level (lethargy, energy conservation)
- ↓ Heat production (cold intolerance)
- Growth arrest (divert energy from growth to maintenance)

**Consequences:**
- Hypoglycemia: Impaired consciousness, seizures
- Ketoacidosis: From ketone production (usually mild)
- Dehydration: Despite fluid retention (renal Na⁺ conservation)
- Electrolyte abnormalities:
  - ↑ K⁺ intracellularly (K⁺ shifts from ECF to ICF)
  - ↓ Na⁺ (renal conservation cannot match losses)
  - ↑ Total body Mg²⁺ loss

## Protein Deficiency Effects

**Structural Proteins:**
- Muscle atrophy (loss of actin, myosin)
- Organ atrophy (liver, GI tract, heart)
- Connective tissue loss (collagen degradation)
- Hair loss (keratin synthesis depends on protein)

**Functional Proteins:**
1. **Enzymatic:** ↓ Enzyme synthesis → ↓ metabolic capacity
2. **Transport:** ↓ Serum albumin → ↓ transport of vitamin A, fatty acids
3. **Immune:** ↓ Antibodies, complement, cytokines → immunodeficiency
4. **Hormonal:** ↓ Growth hormone, ↑ cortisol, ↓ thyroid hormones

**Plasma Proteins:**
- Albumin: Half-life 20 days (slowest change)
- Prealbumin: Half-life 2-3 days (more sensitive marker)
- Immunoglobulins: Impaired production

**Serum Albumin Effects:**
- ↓ Oncotic pressure → edema formation (kwashiorkor)
- ↓ Nutrient binding capacity (vitamin A, fatty acids)
- ↓ Structural integrity of capillaries

## Immune Dysfunction in PEM

**Cellular Immunity:**
- ↓ T-cell count (especially CD4⁺)
- ↓ T-cell function (delayed hypersensitivity impaired)
- Thymic atrophy
- Result: ↓ Cell-mediated immunity → ↑ viral, fungal, intracellular bacterial infections

**Humoral Immunity:**
- ↓ B-cell production of IgG (most affected)
- IgM, IgA relatively preserved (better survival advantage?)
- ↓ Complement components
- Result: ↓ Opsonization, impaired bacterial clearance

**Phagocytic Function:**
- ↓ Neutrophil number and function
- ↓ Macrophage activation
- Impaired oxidative burst
- Result: ↑ Risk of bacterial infections (pneumonia, sepsis)

**Consequences:**
- Common infections: Pneumonia, diarrhea, UTI, meningitis, measles
- Infections more severe, prolonged, frequent
- Sepsis develops easily
- Mortality from infections >mortality from direct nutritional effects

## Organ-Specific Dysfunction

**Cardiovascular:**
- Cardiac atrophy (up to 40% mass loss)
- Cardiac output ↓
- Arrhythmias (electrolyte abnormalities, ↓ K⁺ stores)
- Diastolic dysfunction
- Risk: Cardiogenic shock with refeeding

**Gastrointestinal:**
- Villous atrophy: ↓ Absorption surface area
- Enzyme deficiency: ↓ Lactase (transient lactose intolerance)
- Permeability ↑: Bacterial translocation risk
- Motility ↓
- Risk: Diarrhea, malabsorption, gram-negative sepsis

**Renal:**
- ↓ GFR, ↓ urine output
- Electrolyte handling impaired
- ADH sensitivity altered (dehydration despite edema)
- Risk: Acute kidney injury if fluid resuscitated too quickly

**Endocrine:**
- Thyroid: ↓ T3 (peripheral conversion impaired), normal T4, ↑ TSH (euthyroid sick syndrome)
- Pancreas: ↓ Insulin secretion (explains glucose intolerance)
- Adrenal: ↓ Cortisol response to stress (impaired stress response)
- Growth hormone: ↑ (but target tissues resistant)

## Refeeding Syndrome

**Definition:** Serious metabolic complications when nutrition reintroduced

**Pathophysiology:**
- Starved state: Cellular K⁺/Na⁺/Mg²⁺ depleted (⅓ to ½ total body stores)
- Refeeding: Carbohydrates → insulin secretion → intracellular cation shift
- K⁺, PO₄³⁻, Mg²⁺ move intracellular → severe serum deficits
- Result: Hypokalemia, hypophosphatemia, hypomagnesemia

**Complications:**
- Cardiac arrhythmias (from K⁺ deficiency)
- Respiratory failure (from PO₄³⁻ deficiency → weakness)
- Seizures, altered mental status (from Mg²⁺ deficiency)
- Hypoglycemia (if nutrients reduced too quickly)
- Pulmonary edema, heart failure

**Prevention:**
- Start with small feeds (100 kcal/kg initially)
- Slow increase over 1-2 weeks
- Monitor electrolytes carefully
- Supplement K⁺, Mg²⁺, PO₄³⁻ preventatively`,
        mnemonics: [
          {
            text: "METABOLIC ADAPTATION",
            explanation: "↓ Metabolic rate, ↓ activity, ↓ heat, Growth arrest, Hypoglycemia risk",
          },
          {
            text: "IMMUNE DYSFUNCTION",
            explanation: "↓ T-cells (cellular), ↓ IgG (humoral), ↓ Complement, ↑ Infections",
          },
          {
            text: "REFEEDING SYNDROME",
            explanation: "Carbs → insulin → K⁺/PO₄/Mg shift intracellular → hypokalemia, cardiac arrhythmias",
          },
        ],
        keyPoints: [
          "Energy deficit: Glycolysis → gluconeogenesis → ketogenesis → protein catabolism",
          "Metabolic rate ↓20-30%; adaptation to preserve glucose for brain",
          "Protein loss: Muscle atrophy, organ atrophy, ↓ immune proteins, ↓ absorption, edema",
          "Immune: ↓ T-cells, ↓ IgG, ↓ complement → infections most common cause of death",
          "Refeeding: Carbs → insulin → K⁺/Mg/PO₄ shift intracellular → hypokalemia, arrhythmias; prevent with slow refeeding",
        ],
        textbookRefs: [
          { book: "Biochemistry Textbook", chapter: "Starvation metabolism, protein catabolism", edition: "6th" },
          { book: "WHO SAM Guidelines", chapter: "Refeeding syndrome prevention", edition: "2022" },
        ],
      },
      {
        layer: 3,
        slug: "pem-malnutrition-layer-3-clinical",
        title: "Protein-Energy Malnutrition (PEM) - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical assessment, management phases (stabilization, rehabilitation, follow-up), monitoring, and prevention of PEM in children.",
        contentMd: `# Protein-Energy Malnutrition - Clinical

## Diagnosis & Assessment

**Anthropometric:**
- Weight-for-age <60%: Marasmus
- Weight-for-height <-3SD or MUAC <115mm: SAM
- Bilateral pitting edema: Kwashiorkor features

**Biochemical:**
- Hemoglobin: Anemia screening
- Albumin <2.8 g/dL: Severe
- Prealbumin <10 mg/dL: Very severe
- Electrolytes: K⁺, Na⁺, Ca²⁺, Mg²⁺, PO₄³⁻
- Blood glucose: Hypoglycemia risk
- Liver function: Hepatic dysfunction

**Clinical Examination:**
- Signs of infection (fever, pneumonia, diarrhea)
- Edema severity
- Skin/hair changes
- Hepatomegaly, ascites
- Mental status (lethargy)

## Management Phases

**Phase 1: Stabilization (1-2 weeks)**
- Goal: Treat life-threatening conditions, restore hydration, prevent refeeding syndrome

**Immediate (First 24-48 hours):**
1. **Infections:** Empiric antibiotics (broad-spectrum for severe malnutrition)
   - Amoxicillin + gentamicin or cephalosporin
   - Treat diarrhea, pneumonia, UTI aggressively
2. **Fluids:** ORS for dehydration (careful! risk of heart failure with edema)
   - Avoid IV fluids initially (risk of pulmonary edema)
3. **Electrolytes:** Correct K⁺, Na⁺, Ca²⁺, Mg²⁺, PO₄³⁻
4. **Feeding:** Start small frequent feeds
   - Energy: 100 kcal/kg/day (25 kcal/kg × 4 meals)
   - Protein: 1.5 g/kg/day
   - Micronutrients: Vitamin A, folate, iron supplementation

**Subsequent Days:**
- Monitor vital signs, fluid balance
- Gradual feed increase as tolerated
- Continue antibiotics
- Watch for refeeding syndrome (↓ K⁺, PO₄)
- Vitamin A supplementation (high-dose, weeks 1-2)

**Phase 2: Rehabilitation (2-8 weeks)**
- Goal: Achieve rapid catch-up growth, restore weight

**Feeding Progression:**
- Increase to 150-200 kcal/kg/day (divided meals)
- Increase to 3-4 g/kg protein/day
- Local foods preferred (cost, acceptance)
- Fortified foods if available (PNDT fortified wheat flour)
- Target weight gain: 5-10 g/kg/day

**Monitoring:**
- Daily weights (initially)
- Appetite improvement
- Edema resolution (usually 1-2 weeks)
- Absence of complications

**Phase 3: Follow-up (Months)**
- Goal: Prevent relapse, support continued growth

**Discharge Planning:**
- Nutrition education to caregivers
- Food security assessment
- Home-based monitoring (weight, height)
- Referral to ICDS, midday meal scheme
- Micronutrient supplementation continuation

## Monitoring Parameters

**Short-term (Weekly):**
- Weight (target 5-10 g/kg/day gain)
- Appetite, feeding tolerance
- Signs of infections
- Electrolytes (especially K⁺, PO₄)
- Vital signs

**Medium-term (Monthly):**
- Height (slower change, indicates catch-up)
- Head circumference (children)
- Hemoglobin
- Hair, skin changes
- Developmental milestones

**Long-term (Quarterly):**
- Growth trajectory
- School attendance/performance
- Nutritional status (maintain WFH, prevent stunting)
- Complications (learning disabilities, immune dysfunction)

## Complications & Management

**Acute Complications:**
1. **Hypoglycemia:** Glucose drinks, frequent feeds
2. **Refeeding syndrome:** Slow feed increase, electrolyte supplementation
3. **Infections:** Antibiotics, supportive care
4. **Dehydration:** Careful ORS (not IV fluids if edematous)
5. **Diarrhea:** Continue feeding (appropriate foods), zinc supplementation

**Chronic Complications:**
- Stunting: Persistent growth deficit despite nutritional rehabilitation
- Learning disabilities: From early malnutrition effects on brain
- Immune dysfunction: Increased infection susceptibility
- Micronutrient deficiencies: Address individually (iron, vitamin A, etc.)

## Prevention

**Community Level:**
- Food security programs (PDS, NFSA)
- ICDS: Supplementary nutrition for children <6y, pregnant/lactating women
- Midday meal scheme: School children
- Nutrition education, female education

**Household Level:**
- Adequate dietary diversity
- Breastfeeding promotion (6 months exclusive, then complementary feeding)
- Fortified foods when available
- Hand hygiene, sanitation (prevent diarrhea)
- Growth monitoring (detect early malnutrition)`,
        mnemonics: [
          {
            text: "STABILIZATION PHASE",
            explanation: "Treat infections, hydrate (ORS, caution fluids), correct electrolytes, start small feeds 100 kcal/kg",
          },
          {
            text: "REHABILITATION PHASE",
            explanation: "150-200 kcal/kg, 3-4g protein/kg, target 5-10g/kg/day weight gain",
          },
          {
            text: "REFEEDING COMPLICATIONS",
            explanation: "Hypoglycemia, hypokalemia, hypophosphatemia, heart failure, arrhythmias",
          },
        ],
        keyPoints: [
          "Stabilization: Antibiotics for infections, ORS (caution), electrolyte correction, small frequent feeds 100 kcal/kg",
          "Rehabilitation: Rapid increase to 150-200 kcal/kg, target 5-10g/kg/day gain; monitor weekly",
          "Refeeding syndrome prevented by slow feed increase and electrolyte monitoring",
          "Prevention: ICDS, midday meals, breastfeeding, food security, growth monitoring critical",
          "Long-term: Monitor growth trajectory, developmental milestones, address micronutrient deficiencies",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 11", edition: "26th" },
          { book: "WHO SAM Management Handbook", chapter: "Stabilization, rehabilitation, follow-up", edition: "2022" },
        ],
      },
      {
        layer: 4,
        slug: "pem-malnutrition-layer-4-exam",
        title: "Protein-Energy Malnutrition (PEM) - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ prep on PEM types, pathophysiology, SAM classification, management phases, and refeeding syndrome.",
        contentMd: `# Protein-Energy Malnutrition - Exam Preparation

## High-Yield Facts

**PEM Types:**
- Marasmus: Severe wasting, no edema, WFA <60%
- Kwashiorkor: Edema, hair/skin changes, protein deficiency
- Marasmic-kwashiorkor: Combined, highest mortality

**SAM Classification:**
- WFH <-3SD, OR MUAC <115mm, OR bilateral pitting edema

**Management Phases:**
- Stabilization (1-2w): 100 kcal/kg, antibiotics, electrolytes
- Rehabilitation (2-8w): 150-200 kcal/kg, 5-10g/kg/day gain
- Follow-up: Prevention of relapse, growth monitoring

**Pathophysiology:**
- Energy deficit: Glycolysis → gluconeogenesis → ketosis → protein catabolism
- Protein loss: Muscle, organ atrophy, ↓ immunity, edema
- Immune: ↓ T-cells, ↓ IgG, infections most common death cause

**Refeeding Syndrome:**
- Carbs → insulin → K⁺/Mg/PO₄ shift intracellular
- Hypokalemia, arrhythmias, respiratory failure
- Prevention: Slow refeeding (100 kcal/kg initially), electrolyte monitoring

**India Statistics:**
- 35% stunting, 19% wasting, 32% underweight

## Problem-Solving Cases

**Case 1: 18-month-old with Severe Wasting**
- WFH <-3SD, MUAC 110mm
- No edema
- Likely marasmus
- Management: Stabilization (small feeds, antibiotics), rehabilitation (150-200 kcal/kg)

**Case 2: Kwashiorkor Presentation**
- Bilateral edema, hair changes, hepatomegaly
- WFA <60% but edema masks weight loss
- Management: Same phases, monitor electrolytes closely (refeeding risk)

## Analysis

- Why is refeeding syndrome dangerous and how to prevent?
- Why are infections most common cause of PEM deaths?
- Role of ICDS in PEM prevention`,
        mnemonics: [
          {
            text: "SAM DEFINITION",
            explanation: "WFH <-3SD OR MUAC <115mm OR bilateral edema",
          },
          {
            text: "MANAGEMENT TIMELINE",
            explanation: "Stabilization 1-2w (100 kcal/kg), Rehabilitation 2-8w (150-200 kcal/kg), Follow-up (prevention)",
          },
        ],
        keyPoints: [
          "Marasmus: wasting, no edema; kwashiorkor: edema, protein deficiency; SAM if WFH <-3SD/MUAC <115/edema",
          "Pathophysiology: protein catabolism, ↓ immunity (↓T-cells, ↓IgG), infections most common death",
          "Stabilization: 100 kcal/kg, antibiotics, electrolyte correction, slow refeeding prevents refeeding syndrome",
          "Rehabilitation: 150-200 kcal/kg, target 5-10g/kg/day gain; monitor weekly",
          "Refeeding syndrome: K⁺/Mg/PO₄ shift intracellular → hypokalemia, arrhythmias, respiratory failure",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 11", edition: "26th" },
          { book: "WHO SAM Guidelines", chapter: "Management, refeeding", edition: "2022" },
        ],
      },
      {
        layer: 5,
        slug: "pem-malnutrition-layer-5-active-recall",
        title: "Protein-Energy Malnutrition (PEM) - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall of PEM types, SAM classification, management phases, pathophysiology, and refeeding syndrome prevention.",
        contentMd: `# Active Recall - Protein-Energy Malnutrition

**Q1:** Differentiate between marasmus and kwashiorkor in terms of clinical presentation and pathophysiology.
> Marasmus: Severe wasting (WFA <60%), no edema, predominantly energy deficiency, muscle loss prominent ('skin and bones'). Kwashiorkor: Bilateral pitting edema, protein deficiency, hair/skin changes, hepatomegaly, ascites. Edema masks weight loss. Both have high mortality but kwashiorkor has more complications.

**Q2:** What is SAM and how is it classified according to WHO?
> SAM (Severe Acute Malnutrition): Weight-for-height <-3 SD, OR MUAC <115mm (children 6-59m), OR bilateral pitting edema. High mortality if untreated. Classified as acute; can progress rapidly.

**Q3:** Describe the metabolic changes in starvation from energy deficit perspective.
> First 12-24h: Glycogenolysis (liver glycogen depletion). 1-3d: Gluconeogenesis (alanine, lactate → glucose). >3d: Ketogenesis (acetyl-CoA → ketones for brain). Weeks-months: Protein catabolism (muscle, organs → amino acids for gluconeogenesis). Metabolic rate ↓20-30% as adaptation.

**Q4:** How does protein deficiency lead to edema in kwashiorkor?
> ↓ Serum albumin (protein deficiency) → ↓ oncotic pressure → fluid shifts from intravascular to interstitial space. Also: ↑ Na⁺ retention, lymphatic dysfunction, capillary permeability ↑. Results in bilateral edema despite overall weight loss.

**Q5:** Why are infections the most common cause of death in PEM?
> Immune dysfunction: ↓ T-cells (↓ cell-mediated immunity), ↓ IgG (↓ humoral immunity), ↓ complement, ↓ phagocyte function. Result: Pneumonia, diarrhea, UTI, meningitis, sepsis more common, severe, prolonged. Antibiotics essential in management.

**Q6:** Outline the three phases of PEM management with specific feeding targets and duration.
> Phase 1 Stabilization (1-2 weeks): 100 kcal/kg/day divided into 4 meals, 1.5g protein/kg, antibiotics, electrolyte correction. Phase 2 Rehabilitation (2-8 weeks): 150-200 kcal/kg/day, 3-4g protein/kg, target 5-10g/kg/day weight gain. Phase 3 Follow-up (months): Monitor growth, prevent relapse, address micronutrient deficiencies.

**Q7:** What is refeeding syndrome and how is it prevented?
> Refeeding syndrome: When nutrition reintroduced in severe malnutrition. Mechanism: Carbohydrates → insulin secretion → K⁺, PO₄, Mg shift intracellular → severe serum deficits. Complications: Hypokalemia (cardiac arrhythmias), hypophosphatemia (respiratory failure), hypomagnesemia (seizures). Prevention: Start small (100 kcal/kg), slow increase over 1-2 weeks, monitor electrolytes, supplement K/Mg/PO₄.

**Q8:** What are the micronutrient deficiencies commonly seen in PEM and how are they addressed?
> Vitamin A, iron, B12, folate, zinc deficiencies common. High-dose Vitamin A supplementation given in first 2 weeks. Iron supplementation for anemia. Folate, B12 for megaloblastic changes. Zinc for immunity. All addressed during rehabilitation phase.

**Q9:** How does growth monitoring help in PEM prevention at community level?
> Regular weighing identifies failure to thrive early. Plot on growth charts (WHO standards). Slow weight gain triggers nutritional intervention before severe malnutrition develops. ANMs/ASHAs trained in growth monitoring and referral. ICDS, midday meals support identified children.

**Q10:** Describe the role of ICDS (Integrated Child Development Services) in PEM prevention.
> ICDS targets children <6 years and pregnant/lactating women. Components: Supplementary nutrition (fortified foods), health checkups, growth monitoring, nutrition education, school readiness. Reaches ~100 million children annually. Critical for prevention in resource-limited settings.`,
        mnemonics: [
          {
            text: "MARASMUS vs KWASHIORKOR",
            explanation: "Marasmus: Wasting, no edema, energy deficit. Kwashiorkor: Edema, hair changes, protein deficit",
          },
          {
            text: "MANAGEMENT CALORIES",
            explanation: "Stabilization 100 kcal/kg, Rehabilitation 150-200 kcal/kg, Target gain 5-10g/kg/day",
          },
          {
            text: "REFEEDING PREVENTION",
            explanation: "Small feeds (100 kcal/kg), Slow increase, Electrolyte monitoring (K/Mg/PO₄)",
          },
        ],
        keyPoints: [
          "Marasmus (wasting, no edema) vs kwashiorkor (edema, protein); SAM if WFH <-3SD, MUAC <115mm, or edema",
          "Energy deficit: Glycolysis → gluconeogenesis → ketosis → protein catabolism; metabolic rate ↓30%",
          "Protein loss → ↓ serum albumin → edema, ↓ immunity, ↓ enzymes, organ atrophy",
          "Infections most common death cause; immune dysfunction with ↓T-cells, ↓IgG, ↓ complement",
          "Management: Stabilization (100 kcal/kg, antibiotics), Rehabilitation (150-200 kcal/kg), Follow-up (prevention)",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 11", edition: "26th" },
          { book: "WHO SAM Guidelines", chapter: "PEM types, management, refeeding", edition: "2022" },
        ],
      },
    ],
  },
];
