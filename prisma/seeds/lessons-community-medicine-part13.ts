import type { TopicLessons } from "./content-loader";

export const communityMedicineLessonsPartXIII: TopicLessons[] = [
  {
    topicCode: "CM-MOD-05-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "nutrition-assessment-layer-1-foundation",
        title: "Nutrition Assessment & Requirements - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of nutrition assessment methods, dietary requirements across lifespan, RDA guidelines, nutritional status assessment, and clinical indicators of malnutrition.",
        contentMd: `# Nutrition Assessment & Requirements - Foundation

## Nutritional Assessment Methods

**Individual Level:**
1. **Dietary Assessment:**
   - 24-hour dietary recall
   - Food frequency questionnaire
   - Dietary diary
   - Limitations: Recall bias, seasonal variation

2. **Anthropometric Assessment:**
   - Weight, height, head circumference (children)
   - BMI (Body Mass Index) = Weight(kg) / Height(m)²
   - MUAC (Mid-Upper Arm Circumference) for children
   - Skinfold thickness (body fat estimation)

3. **Biochemical Assessment:**
   - Hemoglobin (anemia screening)
   - Serum albumin (protein status)
   - Serum vitamin A, folate, B12
   - Blood glucose (nutritional status related)

4. **Clinical Assessment:**
   - Signs of deficiency (Bitot's spots, hair changes, edema)
   - Growth faltering in children
   - Loss of subcutaneous fat, muscle wasting

**Population Level:**
- Food availability surveys
- Household consumption surveys
- Prevalence surveys (stunting, wasting, anemia)
- National Nutrition Monitoring Bureau (NNMB)

## RDA (Recommended Dietary Allowance) - India

**Established by:** ICMR (Indian Council of Medical Research)

**Macronutrient Requirements:**
- **Energy:** 2000-2400 kcal/day for adults (varies by activity)
- **Protein:** 0.8-1.0 g/kg/day (RDA 50-60g/day average adult)
  - Higher in pregnancy (+15g), lactation (+25g)
  - Higher in children per kg body weight

- **Carbohydrates:** 50-65% of total calories
- **Fats:** 20-35% of total calories (MUFA & PUFA preferred)

**Micronutrient Requirements (Adults):**
- **Iron:** 21 mg/day (women), 8 mg/day (men)
- **Calcium:** 600-1000 mg/day
- **Vitamin A:** 600-900 μg RAE/day
- **Vitamin B12:** 2.4 μg/day
- **Folate:** 400 μg/day
- **Iodine:** 150 μg/day
- **Zinc:** 8-11 mg/day

**Special Groups:**
- **Infants:** 100 kcal/kg up to 500 mL breast milk daily
- **Children 1-3 years:** 1000-1400 kcal + higher protein/kg
- **Adolescents:** Increased due to growth (1600-2800 kcal)
- **Pregnant women:** +350 kcal, +15g protein, +100-300 mg calcium, +27 mg iron
- **Lactating women:** +500 kcal, +25g protein, +600 mg calcium

## Nutritional Status Assessment

**Protein-Energy Malnutrition (PEM):**
- **Normal:** BMI 18.5-24.9; MUAC >23 cm
- **Underweight/Mild:** BMI 17.0-18.4; MUAC 21-23 cm
- **Moderate:** BMI 16.0-16.9; MUAC 19-21 cm
- **Severe/Marasmus:** BMI <16.0; MUAC <19 cm; severe muscle wasting

**Growth in Children:**
- **Normal:** Height for age within ±1 SD
- **Stunted:** Height-for-age <-2 SD (chronic malnutrition)
- **Wasted:** Weight-for-height <-2 SD (acute malnutrition)
- **Underweight:** Weight-for-age <-2 SD (either chronic or acute)

**Prevalence in India (NFHS 2021):**
- Childhood stunting: ~35%
- Wasting: ~19%
- Underweight: ~32%
- Adult anemia: ~55% (women), ~25% (men)

## Clinical Signs of Malnutrition

**Protein Deficiency:**
- Hair changes: Loss, thinning, color change (red/yellow)
- Skin changes: Peeling, hyperpigmentation (pellagra-like)
- Hepatomegaly (fatty infiltration)
- Edema (loss of serum proteins)
- Growth faltering

**Vitamin A Deficiency:**
- Night blindness (first sign)
- Bitot's spots (foamy conjunctival patches)
- Corneal scarring, ulceration → blindness
- Increased infection risk

**Vitamin D Deficiency:**
- Rickets in children: Bowing of legs, chest deformity, dental problems
- Osteomalacia in adults: Bone pain, muscle weakness
- Increased fracture risk

**Iron Deficiency (Anemia):**
- Pallor (pale palms, conjunctiva, nail beds)
- Glossitis, dysphagia (sore mouth/throat)
- Spoon nails (koilonychia)
- Fatigue, dyspnea

**Iodine Deficiency:**
- Goiter (thyroid enlargement)
- Cretinism (severe intellectual disability with short stature)
- Hypothyroidism in adults

**Vitamin C Deficiency:**
- Bleeding gums
- Poor wound healing
- Bruising easily (petechiae)
- Anemia (impairs iron absorption)

## Food Groups & Nutritional Content

**Cereals (Rice, Wheat, Millets):**
- Primary energy source (carbohydrates 70-75%)
- Protein: 8-12g/100g
- B vitamins, iron, fiber

**Pulses (Lentils, Beans, Chickpeas):**
- Protein-rich: 20-25g/100g
- Fiber, folate, iron
- Complementary to cereals (complete protein when combined)

**Vegetables:**
- Vitamins (A, C), minerals, fiber
- Dark green leafy vegetables (spinach): High iron, calcium, folate
- Orange vegetables: Rich in beta-carotene (vitamin A)

**Fruits:**
- Vitamin C (citrus), antioxidants
- Fiber, minerals
- Fresh preferred (no loss of nutrients)

**Milk & Dairy:**
- Protein: 3-4g/100ml
- Calcium: 100-120 mg/100ml
- Vitamin A & D (fortified)
- Fat-soluble vitamin absorption

**Meat, Poultry, Fish:**
- Complete protein (all amino acids)
- Bioavailable iron (heme iron)
- B vitamins (B12, niacin)
- Omega-3 fatty acids (fish)`,
        mnemonics: [
          {
            text: "ANTHROPOMETRIC NORMAL",
            explanation: "BMI 18.5-24.9, MUAC >23cm, Height-for-age normal, Weight-for-height normal",
          },
          {
            text: "MALNUTRITION DEFINITIONS",
            explanation: "Stunting (height deficit), Wasting (weight deficit), Underweight (both), Marasmus (severe wasting)",
          },
          {
            text: "MICRONUTRIENT DEFICIENCY SIGNS",
            explanation: "Vitamin A (night blindness, Bitot's), Vitamin D (rickets), Iron (pallor, koilonychia), Iodine (goiter), Vitamin C (bleeding gums)",
          },
        ],
        keyPoints: [
          "Anthropometric (weight, height, MUAC), biochemical (hemoglobin, albumin), clinical (signs) assessment needed",
          "RDA: 2000-2400 kcal, 50-60g protein, increased in pregnancy/lactation",
          "India: 35% stunting, 19% wasting, 32% underweight; 55% anemia (women)",
          "Clinical signs: Hair changes (protein), night blindness (Vit A), rickets (Vit D), pallor (iron), goiter (iodine)",
          "Food groups: Cereals (energy), pulses (protein), vegetables/fruits (vitamins), dairy (calcium)",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 11", edition: "26th" },
          { book: "ICMR RDA Guidelines", chapter: "Nutritional requirements", edition: "2020" },
        ],
      },
      {
        layer: 2,
        slug: "nutrition-assessment-layer-2-mechanism",
        title: "Nutrition Assessment & Requirements - Mechanism",
        estimatedMinutes: 30,
        summary: "Physiological basis of nutritional requirements, metabolic pathways, micronutrient functions, and mechanisms of nutrient absorption and utilization.",
        contentMd: `# Nutrition Assessment & Requirements - Mechanism

## Energy Requirements & Metabolism

**Basal Metabolic Rate (BMR):**
- Energy needed at rest for basic cellular functions
- ~70% of total daily energy expenditure (sedentary)
- Determined by: Age, sex, body composition, genetics
- Calculated: Harris-Benedict equation or indirect calorimetry

**Components of Total Energy Expenditure:**
1. **Basal Metabolic Rate (BMR):** 60-70% (resting)
2. **Thermic Effect of Food (TEF):** 10% (digestion, absorption)
3. **Activity Energy Expenditure:** 20-30% (varies by activity)

**Energy Substrate Metabolism:**
- **Carbohydrates:** 4 kcal/g; rapid ATP production (glycolysis, TCA)
- **Proteins:** 4 kcal/g; used primarily for structure, not energy
- **Fats:** 9 kcal/g; efficient storage, slow mobilization

**Factors Affecting Requirements:**
- Age (children higher per kg body weight)
- Sex (males generally higher)
- Activity level (sedentary vs active)
- Pregnancy (↑350 kcal/day due to fetal growth, increased metabolism)
- Lactation (↑500 kcal/day for milk production)
- Illness/stress (↑20-50% due to increased metabolism)
- Temperature (cold exposure → ↑metabolism, heat → ↓metabolism)

## Protein Requirements & Functions

**Protein Functions:**
1. **Structural:** Muscle, collagen, skin, bone matrix
2. **Enzymatic:** Catalyze metabolic reactions
3. **Immune:** Antibodies, complement, cytokines
4. **Hormonal:** Insulin, growth hormone, TSH
5. **Transport:** Hemoglobin, serum albumin, transferrin
6. **Energy:** 4 kcal/g (though not primary function)

**Amino Acid Metabolism:**
- Essential amino acids: 9 (must be obtained from diet)
  - Histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine
- Non-essential: 11 (synthesized in body)
- Branched-chain amino acids (BCAA): Leucine, isoleucine, valine (oxidized for energy in muscles)

**Protein Quality:**
- **Complete proteins:** All essential amino acids (eggs, milk, meat)
- **Incomplete proteins:** Missing one or more essential amino acids (legumes, grains)
- **Complementary proteins:** Combining incomplete proteins provides complete amino acid profile (rice + beans)

**Protein Requirements by Age:**
- **Infants:** 1.5-2.0 g/kg
- **Children:** 1.0-1.5 g/kg
- **Adolescents:** 0.9-1.0 g/kg
- **Adults:** 0.8-1.0 g/kg
- **Pregnancy:** +15 g/day (total ~70g)
- **Lactation:** +25 g/day (total ~85g)

**Protein Synthesis:**
- Transcription: DNA → mRNA
- Translation: mRNA → protein (amino acids linked by peptide bonds)
- Requires: Amino acids, tRNA, ribosomes, GTP/ATP
- Location: Ribosomes (rough ER for export proteins, free for cytoplasmic)

## Micronutrient Functions & Metabolism

**Vitamin A (Retinol):**
- **Functions:** Vision (retinal → opsin complex), cell differentiation, immune function
- **Metabolism:** Dietary retinol → converted to retinoic acid (active form)
- **Storage:** Liver (can store 1-2 years supply)
- **Sources:** Liver, eggs, dairy (retinol); orange vegetables (β-carotene)
- **Deficiency:** Night blindness (early), corneal scarring, blindness

**Vitamin B12 (Cobalamin):**
- **Functions:** DNA synthesis, myelin formation, methyl group transfer
- **Metabolism:** Intrinsic factor (IF) in stomach binds B12 → ileal absorption
- **Storage:** Liver (stores 3-5 years; takes years to become deficient)
- **Sources:** Meat, fish, dairy, eggs (animal sources only; B12 from bacteria)
- **Deficiency:** Megaloblastic anemia, pernicious anemia (IF deficiency), neurological symptoms (paresthesias, ataxia)

**Iron (Fe):**
- **Functions:** Oxygen transport (hemoglobin), energy metabolism (cytochrome), immune function
- **Metabolism:**
  - Heme iron (meat): 15-35% absorption
  - Non-heme iron (plants): 2-20% absorption (enhanced by vitamin C, inhibited by phytates)
  - Absorption in duodenum/proximal jejunum via DMT1 transporter
  - Stored as ferritin, hemosiderin
- **Sources:** Red meat (heme), spinach, lentils (non-heme)
- **Deficiency:** Anemia (↓Hgb <12 g/dL women, <13.5 men), fatigue, pallor, koilonychia

**Calcium:**
- **Functions:** Bone mineralization (99% body calcium), muscle contraction, nerve transmission, enzyme cofactor
- **Metabolism:**
  - Absorption in duodenum (vitamin D-dependent, calmodulin mediated)
  - PTH increases renal reabsorption, 1,25-(OH)2D increases intestinal absorption
  - Serum Ca²⁺ tightly regulated (8.5-10.5 mg/dL)
- **Sources:** Dairy, leafy greens (spinach has high oxalates limiting bioavailability), fortified foods
- **Deficiency:** Rickets (children), osteomalacia (adults), muscle cramps, tetany (severe hypocalcemia)

**Vitamin D:**
- **Functions:** Calcium/phosphate homeostasis, immune function, cell proliferation
- **Metabolism:**
  - Skin synthesis: 7-dehydrocholesterol + UVB → previtamin D → vitamin D
  - Liver: Vitamin D → 25(OH)D (storage form, half-life ~3 weeks)
  - Kidney: 25(OH)D → 1,25-(OH)2D (active form, half-life ~4 hours)
  - PTH stimulates renal 1,25-(OH)2D synthesis
- **Sources:** Fatty fish, egg yolk, fortified milk; sun exposure (10-30 min/day adequate)
- **Deficiency:** Rickets (children), osteomalacia (adults), increased fractures, hypocalcemia

**Iodine (I):**
- **Functions:** Thyroid hormone synthesis (T3, T4 contain iodine)
- **Metabolism:** Absorbed as iodide in stomach/intestines → concentrated in thyroid
- **Sources:** Iodized salt, seafood, dairy
- **Deficiency:** Goiter (TSH-driven thyroid enlargement), cretinism (severe ID, short stature), hypothyroidism
- **Range:** Deficiency <50 μg/L, adequate 100-200 μg/L

**Zinc (Zn):**
- **Functions:** Protein synthesis, DNA synthesis, immune function, enzyme cofactor (>300 enzymes)
- **Metabolism:** Absorbed in small intestine; limited storage (no specific storage site)
- **Sources:** Meat, shellfish, legumes, nuts
- **Bioavailability:** Heme sources (meat) better than plant sources (phytate inhibition)
- **Deficiency:** Alopecia, dermatitis, diarrhea, impaired immunity, poor wound healing

## Nutrient Absorption & Bioavailability

**Intestinal Absorption Factors:**
1. **pH:** Affects ionization and solubility (iron better in acidic environment)
2. **Intestinal Flora:** Produce some B vitamins, affect bile salt metabolism
3. **Transit Time:** Longer transit → more absorption (lactose in milk delays transit)
4. **Mucosal Health:** Diarrhea, malabsorption syndromes ↓ absorption
5. **Nutrient Interactions:**
   - Vitamin C enhances iron absorption
   - Calcium ↓ iron absorption (compete for transporters)
   - Phytates (grains, legumes) inhibit mineral absorption
   - Fat-soluble vitamins (A, D, E, K) need dietary fat for absorption

**Bioavailability Examples:**
- β-carotene: 5-10% converted to retinol (270:1 ratio)
- Iron: Heme 20-30% vs non-heme 5-15% absorption
- Calcium: ~30% of dietary calcium absorbed (higher in deficiency)
- Vitamin D: ~80% absorption with dietary fat`,
        mnemonics: [
          {
            text: "ENERGY EXPENDITURE BREAKDOWN",
            explanation: "BMR 60-70%, TEF 10%, Activity 20-30%",
          },
          {
            text: "MICRONUTRIENT FUNCTIONS",
            explanation: "Vit A (vision), B12 (myelin, DNA), Iron (O2 transport), Calcium (bone), Iodine (thyroid), Zinc (immunity)",
          },
          {
            text: "ABSORPTION ENHANCERS",
            explanation: "Vitamin C (iron), Fat (fat-soluble vitamins), Acidic pH (iron), Longer transit time",
          },
        ],
        keyPoints: [
          "BMR ~70% total energy; increased by activity, pregnancy (+350 kcal), lactation (+500 kcal)",
          "Protein: 0.8 g/kg adults, essential amino acids (9), functions structural/enzymatic/immune/hormonal",
          "Vitamin A: Night blindness (early deficiency); B12: Megaloblastic anemia, neurological; Iron: Anemia, pallor",
          "Calcium: Vitamin D-dependent absorption; Iodine: Thyroid hormone synthesis; Zinc: Immunity, >300 enzymes",
          "Bioavailability: Heme iron 20-30% vs non-heme 5-15%; vitamin C enhances iron; phytates inhibit minerals",
        ],
        textbookRefs: [
          { book: "Biochemistry Textbook", chapter: "Metabolism, nutrient absorption", edition: "6th" },
          { book: "ICMR RDA Guidelines", chapter: "Nutritional physiology", edition: "2020" },
        ],
      },
      {
        layer: 3,
        slug: "nutrition-assessment-layer-3-clinical",
        title: "Nutrition Assessment & Requirements - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical assessment of nutritional status, dietary counseling, special nutritional needs, and management of malnutrition in different populations.",
        contentMd: `# Nutrition Assessment & Requirements - Clinical

## Clinical Nutritional Assessment

**Initial History:**
- Dietary intake (24-hour recall, food frequency)
- Weight changes (unintentional weight loss concerning)
- Appetite changes
- GI symptoms (diarrhea, vomiting, constipation)
- Chronic illness, medications affecting nutrition
- Food allergies/intolerances
- Socioeconomic factors affecting food access

**Physical Examination:**
- Anthropometric: Weight, height, BMI, MUAC
- Inspection: Hair (texture, color), skin (dermatitis, pigmentation changes), nails (koilonychia, Beau's lines)
- Oral: Glossitis, stomatitis, dental problems, gum bleeding
- Abdomen: Hepatomegaly, ascites
- Extremities: Edema (protein deficiency), muscle wasting, rickets (Vit D)
- Neurological: Paresthesias (B12), ataxia, mental status (thiamine)

**Growth Assessment in Children:**
- Weight-for-age: Determines underweight
- Height-for-age: Determines stunting (chronic malnutrition)
- Weight-for-height: Determines wasting (acute malnutrition)
- Growth charts: WHO standards or national references
- Velocity: Growth rate (>2 cm/year height normal; slower = concern)

**Biochemical Markers:**
- **Hemoglobin:** <12 g/dL (women), <13.5 (men), <11 (pregnant) = anemia
- **Serum albumin:** <3.5 g/dL = protein-calorie malnutrition (half-life 20 days; slow change)
- **Prealbumin:** <20 mg/dL = recent protein deficit (half-life 2-3 days; more sensitive)
- **Total protein:** <6.0 g/dL = malnutrition
- **Vitamin A (serum retinol):** <20 μg/dL = deficiency
- **Serum iron/ferritin:** Low = iron deficiency
- **Calcium/phosphate:** Hypocalcemia in deficiency
- **TSH, free T4:** Elevated TSH in iodine deficiency (hypothyroidism)

## Dietary Counseling

**Assessment-Specific Advice:**

1. **Iron Deficiency Anemia:**
   - Increase heme iron (meat, poultry, fish)
   - Enhance non-heme absorption: Take with vitamin C (citrus, tomatoes)
   - Avoid: Tea, coffee with meals (inhibit iron)
   - Fortified cereals, leafy greens
   - Cooking in iron cookware adds iron

2. **Protein Malnutrition:**
   - Emphasize protein sources: Milk, eggs, meat, legumes
   - Complementary proteins: Rice + dal (beans)
   - Frequent small meals (better tolerance)
   - Fortified foods if available

3. **Vitamin A Deficiency:**
   - Orange vegetables: Carrots, sweet potato (β-carotene)
   - Leafy greens: Spinach, mustard greens
   - Liver (once weekly)
   - Fortified milk if available
   - Vitamin A supplementation if severe/pregnant

4. **Calcium Deficiency (Rickets/Osteomalacia):**
   - Milk and dairy
   - Leafy greens (note: spinach high in oxalates)
   - Fortified foods
   - Sun exposure: 10-30 minutes daily for vitamin D synthesis
   - Vitamin D supplementation in high-risk (pregnant, exclusively breastfeeding, dark skin in low sun areas)

5. **Iodine Deficiency:**
   - Iodized salt (primary strategy in India)
   - Seafood, seaweed (if available)
   - Milk (iodine from cattle feed)
   - Iodine supplementation in endemic areas

## Special Populations

**Pregnancy:**
- **Increased needs:** +350 kcal, +15g protein, +100-300 mg calcium, +27 mg iron
- **Concerns:** Iron deficiency anemia (frequent), calcium for bone health, folic acid for neural tube defects
- **Supplementation:** Iron-folic acid (IFA) supplements standard
- **Counseling:** Frequent small meals, manage nausea, avoid food cravings if unhealthy

**Lactation:**
- **Increased needs:** +500 kcal, +25g protein, +600 mg calcium
- **Milk production:** Requires 800-1000 kcal/day energy for milk; 50% from mobilized tissue, 50% from diet
- **Nutrition affects milk:** Vitamin A, D, B vitamins transferred; vitamin C, selenium transfer
- **Counseling:** Maintain adequate nutrition for milk quality; frequent breastfeeding → emptying helps supply

**Infants (0-6 months):**
- **Exclusive breastfeeding recommended:** Contains ~100 kcal/100 mL, adequate protein, vitamins (except vitamin D, K)
- **Supplementation:** Vitamin D (400-800 IU), vitamin K at birth, iron after 6 months
- **Formula feeding:** If breastfeeding not possible, iron-fortified infant formula

**Complementary Feeding (6-24 months):**
- **Start at 6 months:** When infant shows readiness (sitting, interest in food)
- **Foods to introduce:** Iron-fortified cereals, mashed vegetables, meat, eggs
- **Frequency:** Start 1-2 times/day, increase to 3-4 times/day by 12 months
- **Texture:** Purees initially, gradually increase to mashed and chopped
- **Continue breastfeeding:** Through 2 years or longer

**Children (2-6 years):**
- **Micronutrient deficiencies common:** Iron, vitamin A, calcium, iodine
- **Nutrition for growth & development:** Adequate calories, protein, iron
- **School feeding programs:** MIDDAY MEAL in India, fortified foods
- **Growth monitoring:** Regular weighing, height measurement at health camps

**Adolescents:**
- **Rapid growth phase:** Highest protein, calorie, mineral needs (especially iron/calcium for girls)
- **Peer influence:** Counseling on healthy snacks, balanced diet despite peer pressures
- **Menstruating girls:** Iron supplementation to prevent anemia
- **Nutrition for school performance:** Breakfast important for cognitive function

**Elderly:**
- **Decreased intake:** Poor dentition, reduced appetite, medications
- **Increased vulnerability:** Chronic diseases, multiple medications affecting absorption
- **Protein important:** Maintain muscle mass, immune function
- **Micronutrients:** Vitamin B12 deficiency (reduced intrinsic factor with age)
- **Hydration:** Often underappreciated; dehydration affects cognition

## Management of Severe Malnutrition

**Protein-Energy Malnutrition (PEM) - Marasmus & Kwashiorkor:**

**Stabilization Phase:**
- Goal: Restore hydration, electrolytes, infections treatment
- Small frequent feeds: 100 kcal/kg initially (slowly increase)
- Fluids: ORS for dehydration
- Antibiotics: Broad-spectrum for infections
- Vitamins: Vitamin A, folic acid supplementation
- Electrolytes: Monitor K⁺, Na⁺, Ca²⁺

**Rehabilitation Phase:**
- Gradual increase to 150-200 kcal/kg/day
- High-protein diet (3-4 g/kg)
- Fortified foods when available
- Regular monitoring: Weight gain, appetite, clinical improvement

**Follow-up Phase:**
- Dietary counseling for caregivers
- Food security assessment
- Prevention: Nutrition education, food supplementation programs`,
        mnemonics: [
          {
            text: "ANTHROPOMETRIC CUTOFFS",
            explanation: "Normal BMI 18.5-24.9, Stunting height <-2SD, Wasting weight <-2SD, Severe MUAC <19cm",
          },
          {
            text: "BIOCHEMICAL MARKERS",
            explanation: "Hemoglobin <12g/dL (anemia), Albumin <3.5 (protein deficit), Prealbumin <20 (recent deficit)",
          },
          {
            text: "PREGNANCY NUTRITION",
            explanation: "Extra: 350 kcal, 15g protein, 100-300mg calcium, 27mg iron, Folic acid for NTD prevention",
          },
        ],
        keyPoints: [
          "Assessment: History + physical exam + anthropometric + biochemical markers needed",
          "Hemoglobin, albumin, prealbumin, ferritin key for malnutrition diagnosis",
          "Pregnancy: +350 kcal, +15g protein, iron-folic acid supplementation standard",
          "Lactation: +500 kcal, +25g protein; milk production ~800-1000 kcal/day from diet + mobilized tissue",
          "Stabilization phase (infections, electrolytes) before rehabilitation (gradual caloric increase to 150-200 kcal/kg)",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 11", edition: "26th" },
          { book: "WHO Malnutrition Management Guidelines", chapter: "Assessment and treatment", edition: "2022" },
        ],
      },
      {
        layer: 4,
        slug: "nutrition-assessment-layer-4-exam",
        title: "Nutrition Assessment & Requirements - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ preparation on dietary requirements, nutritional assessment methods, micronutrient deficiencies, and management principles.",
        contentMd: `# Nutrition Assessment & Requirements - Exam Preparation

## High-Yield Facts

**RDA Requirements (Adults):**
- Energy: 2000-2400 kcal/day
- Protein: 50-60g/day (0.8-1.0 g/kg)
- Iron: 21 mg (women), 8 mg (men)
- Calcium: 600-1000 mg/day
- Vitamin A: 600-900 μg/day
- Iodine: 150 μg/day

**Special Groups:**
- Pregnancy: +350 kcal, +15g protein, +100-300 mg Ca, +27 mg Fe
- Lactation: +500 kcal, +25g protein, +600 mg Ca
- Children: Higher per kg body weight

**Anthropometric Cutoffs:**
- Stunting: Height-for-age <-2 SD
- Wasting: Weight-for-height <-2 SD
- Underweight: Weight-for-age <-2 SD
- BMI normal: 18.5-24.9

**Micronutrient Deficiency Signs:**
- Vitamin A: Night blindness, Bitot's, corneal scarring
- Vitamin B12: Megaloblastic anemia, paresthesias
- Iron: Anemia, pallor, koilonychia
- Calcium/Vitamin D: Rickets, osteomalacia
- Iodine: Goiter, cretinism, hypothyroidism
- Zinc: Alopecia, dermatitis, diarrhea

**Biochemical Markers:**
- Hemoglobin <12 (women), <13.5 (men) = anemia
- Albumin <3.5 g/dL = malnutrition
- Prealbumin <20 = recent deficit

**India Malnutrition Stats:**
- Stunting: 35%, Wasting: 19%, Underweight: 32%
- Anemia: 55% (women), 25% (men)

## Problem-Solving Cases

**Case 1: Pregnant Woman with Anemia**
- Hemoglobin 9.5 g/dL
- RDA: Iron 27 mg (higher than non-pregnant)
- Management: Iron supplementation, heme iron sources, vitamin C for absorption

**Case 2: Child with Diarrhea & Wasting**
- Weight-for-height <-2 SD
- Management: Stabilization (hydration, antibiotics), then rehab (150-200 kcal/kg)

**Case 3: Vitamin A Deficiency with Night Blindness**
- Common in children in India
- Management: Dietary sources (orange vegetables), supplementation, prophylaxis during measles

## Analysis Topics

- Why is female education key to improving child nutrition?
- Mechanisms of malnutrition leading to increased infection
- Importance of complementary foods at 6 months
- Bioavailability differences between nutrient sources`,
        mnemonics: [
          {
            text: "RDA ADULT",
            explanation: "2000-2400 kcal, 50-60g protein, 27mg Fe (women), 600mg Ca, 150μg I, 900μg Vit A",
          },
          {
            text: "DEFICIENCY SIGNS",
            explanation: "Vit A (night blindness), B12 (anemia/neuro), Iron (pallor), Ca/D (rickets), I (goiter), Zn (alopecia)",
          },
          {
            text: "MALNUTRITION DEFINITIONS",
            explanation: "Stunting (height), Wasting (weight acutely), Underweight (chronic/acute), PEM (protein-energy)",
          },
        ],
        keyPoints: [
          "RDA 2000-2400 kcal, 50-60g protein, 27mg Fe, 600mg Ca, 150μg I, 900μg Vit A",
          "Pregnancy +350 kcal, +15g protein, +27mg Fe; lactation +500 kcal, +25g protein, +600mg Ca",
          "Stunting (35%), wasting (19%), underweight (32%) common in Indian children; 55% women anemic",
          "Hemoglobin <12 (women), <13.5 (men) = anemia; albumin <3.5 = malnutrition",
          "Vitamin deficiency signs: Night blindness (A), megaloblastic anemia (B12), rickets (D), goiter (I)",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 11", edition: "26th" },
          { book: "ICMR RDA Guidelines", chapter: "Requirements, deficiencies", edition: "2020" },
        ],
      },
      {
        layer: 5,
        slug: "nutrition-assessment-layer-5-active-recall",
        title: "Nutrition Assessment & Requirements - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall of RDA, anthropometric assessment, micronutrient deficiency signs, and management principles for malnutrition.",
        contentMd: `# Active Recall - Nutrition Assessment & Requirements

**Q1:** Define RDA and provide requirements for key macronutrients and micronutrients in adults.
> RDA (Recommended Dietary Allowance): Average daily nutrient intake sufficient for 97-98% healthy population. Adults: 2000-2400 kcal, 50-60g protein, 8mg (men) or 21mg (women) iron, 600-1000mg calcium, 150μg iodine, 600-900μg vitamin A, 2.4μg B12.

**Q2:** What are the increased nutritional requirements in pregnancy and lactation?
> Pregnancy: +350 kcal/day, +15g protein, +100-300mg calcium, +27mg iron (nearly double vs non-pregnant), +400μg folate (for neural tube defects). Lactation: +500 kcal/day, +25g protein, +600mg calcium. Duration: Throughout pregnancy and up to 2 years lactation if breastfeeding.

**Q3:** List the anthropometric assessment methods and define nutritional status categories for children.
> Methods: Weight-for-age (underweight), height-for-age (stunting), weight-for-height (wasting), MUAC (severe acute malnutrition). Normal: All within ±1 SD. Stunting: Height <-2 SD (chronic malnutrition). Wasting: Weight-for-height <-2 SD (acute malnutrition). Severe: Marasmus (BMI <16, MUAC <19cm).

**Q4:** Describe the clinical signs of protein-energy malnutrition (PEM) and which signs indicate severity.
> PEM signs: Hair changes (thinning, color change to red/yellow), skin changes (peeling, hyperpigmentation), hepatomegaly (fatty infiltration), edema (loss of serum proteins), growth faltering. Severe: Bilateral pitting edema = kwashiorkor features; severe muscle wasting = marasmus.

**Q5:** What are the clinical presentation and biochemical markers of specific micronutrient deficiencies?
> Vitamin A: Night blindness (early), Bitot's spots, corneal scarring. Vitamin B12: Megaloblastic anemia, paresthesias, ataxia. Iron: Anemia (Hgb <12), pallor, koilonychia, glossitis. Calcium/Vitamin D: Rickets (children), osteomalacia (adults). Iodine: Goiter, cretinism, hypothyroidism. Hemoglobin, albumin, prealbumin used to quantify.

**Q6:** How is 24-hour dietary recall conducted and what are its limitations?
> Method: Patient recalls all foods/drinks consumed in past 24 hours with portion sizes. Analysis: Compare to RDA, identify nutrient gaps. Limitations: Recall bias (forgetfulness), social desirability bias (under-report "unhealthy" foods), seasonal variation (not representative of usual intake), labor-intensive.

**Q7:** Explain dietary counseling for iron deficiency anemia including sources, enhancers, and inhibitors.
> Iron sources: Heme iron (meat, poultry, fish) 20-30% absorption better than non-heme (legumes, fortified cereals) 5-15%. Enhancers: Vitamin C (citrus, tomatoes), acidic environment, meat protein. Inhibitors: Tea, coffee, phytates (grains/legumes), calcium. Cooking in iron cookware adds iron.

**Q8:** Describe the management phases for severe protein-energy malnutrition (marasmus/kwashiorkor).
> Stabilization phase (1-2 weeks): Small frequent feeds 100 kcal/kg initially, treat infections (antibiotics), correct electrolytes (K⁺, Na⁺, Ca²⁺), vitamin A supplementation. Rehabilitation phase: Gradual increase to 150-200 kcal/kg/day, high-protein diet (3-4g/kg), fortified foods. Follow-up: Nutrition counseling, food security, prevention education.

**Q9:** What is the prevalence of malnutrition and anemia in India, and what are the target interventions?
> Prevalence (NFHS 2021): Stunting 35%, wasting 19%, underweight 32%, anemia 55% (women), 25% (men). Targets: Reduce stunting/wasting by 50% by 2030. Interventions: School meals, ICDS, nutrition counseling, micronutrient supplementation (iron-folic acid, vitamin A), breastfeeding promotion.

**Q10:** Explain the role of complementary feeding in infant nutrition and when to start.
> Start: 6 months (when infant shows readiness: sitting, loss of extrusion reflex). Foods: Iron-fortified cereals, mashed vegetables, meat, eggs. Frequency: 1-2 times/day initially, 3-4 times/day by 12 months. Continue breastfeeding: Alongside complementary feeding up to 2 years or longer. Ensures adequate growth and micronutrient intake.`,
        mnemonics: [
          {
            text: "RDA ADULT KEY",
            explanation: "2000-2400 kcal, 50-60g protein, 27mg Fe (women), 21mg Fe (men), 600-1000mg Ca, 150μg I, 900μg Vit A",
          },
          {
            text: "PREGNANCY LACTATION",
            explanation: "Pregnancy: +350 kcal, +15g protein, +27mg Fe, +400μg folate. Lactation: +500 kcal, +25g protein, +600mg Ca",
          },
          {
            text: "DEFICIENCY SIGNS QUICK",
            explanation: "Vit A night blindness, B12 anemia/neuro, Iron pallor/koilonychia, Ca rickets, I goiter, Zn alopecia",
          },
          {
            text: "MALNUTRITION STATS",
            explanation: "Stunting 35%, Wasting 19%, Underweight 32%, Anemia women 55%, men 25%",
          },
        ],
        keyPoints: [
          "RDA: 2000-2400 kcal, 50-60g protein, higher Fe in women (27mg); pregnancy/lactation need significant increases",
          "Assessment: 24-hour recall (bias), anthropometric (stunting/wasting), biochemical (Hgb, albumin, prealbumin)",
          "Vitamin deficiency signs: A (night blindness), B12 (megaloblastic + neuro), Iron (anemia, pallor), D (rickets)",
          "Iron: Heme sources 20-30% absorption; vitamin C enhances, tea/phytates inhibit; fortified cereals useful",
          "Stabilization (small feeds, antibiotics, electrolytes) → rehabilitation (150-200 kcal/kg, high-protein) for severe PEM",
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 11", edition: "26th" },
          { book: "ICMR RDA & WHO Nutrition Guidelines", chapter: "Requirements, assessment, deficiencies", edition: "2023" },
        ],
      },
    ],
  },
];
