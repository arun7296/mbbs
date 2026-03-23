import type { TopicLessons } from "./content-loader";

export const pediatricsPart6Lessons: TopicLessons[] = [
  {
    topicCode: "PE-MOD-03-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "breastfeeding-layer-1-foundation",
        title: "Breastfeeding & Complementary Feeding - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of breastfeeding benefits, techniques, exclusive breastfeeding guidelines, and introduction of complementary feeding per Indian ICMR standards.",
        contentMd: `# Breastfeeding & Complementary Feeding - Foundation

## Breast Milk Composition

**Colostrum** (days 1-5):
- High IgA, lactoferrin, lymphocytes
- Low lactose, high protein (1.5-2 g/100 mL)
- Yellow appearance due to carotenoids

**Mature milk** (after week 2):
- Protein: 1 g/100 mL (whey:casein = 70:30)
- Fat: 3-4 g/100 mL (easily digestible)
- Lactose: 7 g/100 mL
- Calories: 65 kcal/100 mL

## Exclusive Breastfeeding (EBF)

- WHO/UNICEF: Breast milk only for first 6 months
- No water, formula, or other foods (except medicines, vitamins)
- Prevents 45% of neonatal deaths, 13% of under-5 deaths globally
- Reduces diarrhea by 64%, respiratory infections by 72%

## Latch Assessment

**Good latch signs**:
- Areola mostly in mouth (>2 cm)
- Lower lip covers more areola than upper
- Cheeks rounded outward
- No pain for mother
- Milk transfer seen (baby swallows)

**Poor latch signs**:
- Only nipple in mouth (white ring at areola)
- Nipple pain, cracks
- Slow weight gain
- Audible clicking during feed

## Complementary Feeding (6+ months)

**Start at 6 months** (as per Ministry of Health, India):
- Exclusive breastfeeding becomes nutritionally inadequate
- Child loses birth immunity (3-4 months)
- Baby develops readiness (sit upright, loss of extrusion reflex)

**First foods** (6-8 months):
- Iron-fortified cereals, mashed vegetables
- Gradually increase texture: puree → mashed → soft pieces
- 1-2 meals/day, single food at a time (3-5 day trial for allergy detection)`,
        mnemonics: [
          { text: "EBF = 6M exclusive", explanation: "WHO guideline" },
          { text: "Good latch = areola in mouth, cheeks round", explanation: "Milk transfer indicator" },
          { text: "First foods iron-fortified + single food trials", explanation: "Anemia prevention and allergy detection" },
        ],
        keyPoints: [
          "Exclusive breastfeeding prevents 45% neonatal deaths",
          "Mature milk: 1 g/100mL protein, 65 kcal/100mL",
          "Colostrum high in IgA and immunocytes",
          "Start complementary feeding at 6 months",
          "Poor latch causes nipple pain and slow weight gain",
          "First foods: iron-fortified cereals, vegetables",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Breastfeeding", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Infant Nutrition and Development", edition: "21st" },
        ],
      },
      {
        layer: 2,
        slug: "breastfeeding-layer-2-mechanism",
        title: "Breastfeeding & Complementary Feeding - Mechanism",
        estimatedMinutes: 30,
        summary: "Lactation physiology, hormonal control (prolactin, oxytocin), milk production, and nutritional transition during complementary feeding.",
        contentMd: `# Breastfeeding & Complementary Feeding - Pathophysiology

## Lactation Physiology

**Lactogenesis I (pregnancy)**:
- Mammary gland development under progesterone
- Lactogenesis II (postpartum): progesterone withdrawal triggers milk secretion
- Colostrum volume: 10-40 mL per feed
- Contains immunoglobulins (especially IgA), white blood cells, lactoferrin

**Lactogenesis II & III (postpartum)**:
- Colostrum transitional milk (days 6-14)
- Volume increases: 60-100 mL per feed
- Mature milk establishes by week 3: 800-1000 mL/day

## Hormonal Control

**Prolactin**:
- Released from anterior pituitary
- Stimulated by suckling
- Maintains milk secretion
- Inhibited by dopamine
- Levels highest at night

**Oxytocin**:
- Released from posterior pituitary
- Triggered by suckling
- Causes milk let-down (myoepithelial contraction)
- Also stimulates uterine contraction

## Milk Supply Regulation

**Supply = Demand**:
- Frequent suckling → sustained prolactin → continued production
- Adequate milk removal → prevents engorgement
- Infrequent feeds → decreased supply

## Nutritional Transition at 6 Months

**Why complementary feeding needed**:
- Iron stores from fetal life deplete at 6 months
- Calcium, phosphorus demand increases
- Zinc requirements exceed breast milk provision
- Vitamin D supplementation often needed`,
        mnemonics: [
          { text: "Prolactin = supply, Oxytocin = let-down", explanation: "Hormonal control" },
          { text: "Supply = Demand", explanation: "Lactation feedback" },
          { text: "6M iron stores deplete", explanation: "Why complement needed" },
        ],
        keyPoints: [
          "Lactogenesis I: pregnancy development",
          "Lactogenesis II: postpartum milk synthesis",
          "Prolactin stimulated by suckling",
          "Oxytocin causes let-down reflex",
          "Supply regulation: demand-driven",
          "Foremilk vs hindmilk: fat increases through feed",
          "At 6M: iron, zinc, calcium needs exceed breast milk",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Lactation Physiology", edition: "9th" },
          { book: "Guyton Textbook of Medical Physiology", chapter: "Lactation", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "breastfeeding-layer-3-clinical",
        title: "Breastfeeding & Complementary Feeding - Clinical Assessment",
        estimatedMinutes: 25,
        summary: "Common breastfeeding problems (engorgement, mastitis, poor latch), assessment of infant growth, and complementary feeding troubleshooting.",
        contentMd: `# Breastfeeding & Complementary Feeding - Clinical Assessment

## Common Breastfeeding Problems

**Engorgement**:
- Days 3-5 postpartum
- Breast becomes hard, painful, swollen
- Poor latch due to areola turgidity
- Management: frequent feeding, warm compresses

**Nipple Pain/Cracks**:
- Usually from poor latch (90% of cases)
- Check latch: areola in mouth, no pulling
- Use correct positioning
- Apply lanolin, hydrogel pads post-feed

**Mastitis**:
- Unilateral breast pain, redness, fever (>38.5°C)
- From milk stasis (blocked duct, infrequent feeding)
- Management: frequent feeding from affected breast, antibiotics
- Rare: abscess (fluctuant, needs drainage)

**Low Milk Supply**:
- Inadequate output (<6 wet diapers/day)
- Causes: poor latch, infrequent feeding, stress
- Management: frequent feeding, ensure complete emptying

## Assessment of Breastfeeding Success

**Infant weight gain**:
- Newborn: weight loss <10% in first week
- 0-3 months: 25-30 g/day (150-200 g/week)
- 3-6 months: 15-20 g/day (100-150 g/week)

**Diaper Count**:
- Days 1-2: ≥1 wet, ≥1 soiled
- Days 3-4: ≥2 wet, ≥2 soiled
- After day 5: ≥6 wet, ≥3 soiled/day

## Complementary Feeding Assessment

**Readiness at 6 months**:
- Sits upright with minimal support
- Loss of extrusion reflex
- Reaches for food, shows interest

**Food Introduction**:
- Single ingredient foods
- Iron-fortified cereals first
- Vegetables before fruits`,
        mnemonics: [
          { text: "Mastitis = unilateral fever + redness", explanation: "Milk stasis pathophysiology" },
          { text: "Poor latch = nipple pain 90%", explanation: "Check areola position" },
          { text: "6+ wet diapers = adequate milk transfer", explanation: "Clinical assessment" },
        ],
        keyPoints: [
          "Engorgement days 3-5: treat with frequent feeding",
          "Mastitis: frequent feeding from affected breast most important",
          "Poor latch causes: nipple pain, cracked nipples, slow gain",
          "Adequate breastfeeding: ≥6 wet, ≥3 soiled/day",
          "Low supply causes: poor latch, infrequent feeding",
          "Complementary feeding: single foods, iron-fortified first",
          "Readiness signs: sits upright, loss of extrusion reflex",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Clinical Management", edition: "9th" },
          { book: "AAP Guidelines on Breastfeeding", chapter: "Troubleshooting", edition: "2022" },
        ],
      },
      {
        layer: 4,
        slug: "breastfeeding-layer-4-exam",
        title: "Breastfeeding & Complementary Feeding - Exam Prep",
        estimatedMinutes: 25,
        summary: "Management of breastfeeding problems, weaning strategies, micronutrient supplementation, and prevention of common nutritional deficiencies.",
        contentMd: `# Breastfeeding & Complementary Feeding - Management & Prevention

## Management of Breastfeeding Problems

**Engorgement Management**:
- Frequent feeding (most important)
- Warm compress before feed (improves let-down)
- Cold compress after feed (reduces inflammation)
- Analgesics
- Manual expression if too hard for baby

**Mastitis Management**:
- Continue frequent feeding from affected breast
- Antibiotics: amoxicillin 500 mg TDS or cephalexin QID x 10-14 days
- Analgesics + antipyretics
- Warm compresses, gentle massage
- Abscess: needs drainage with ultrasound guidance

**Low Milk Supply Management**:
1. Ensure correct latch (most important)
2. Increase feeding frequency (8-12x/day)
3. Ensure complete breast emptying
4. Consider pumping after feeds
5. Galactagogues: fenugreek, domperidone

## Weaning Strategy

**Planned Weaning**:
- Gradual replacement of feeds with complementary foods
- Drop one feed every 3-7 days
- Start with midday feed
- Timing: usually after 6-12 months of complementary feeding

## Micronutrient Supplementation

**For Breastfed Infants**:
- Vitamin D: 400 IU/day
- Iron: Start at 6 months (1 mg/kg/day)
- Vitamin B12: If mother vegan

**For Lactating Mothers**:
- Continue prenatal vitamins
- Calcium: 1000-1200 mg/day
- Vitamin D: 400-600 IU/day

## Complementary Feeding Strategies

**Progressive Introduction** (6-24 months):
- 6-8 months: once-daily, puree, single ingredients
- 8-10 months: twice-daily, mashed, finger foods
- 10-12 months: 3 meals + snacks
- 12-24 months: family foods, continue breastfeeding

**Preventing Common Deficiencies**:
- Iron: fortified cereals, meat, lentils
- Zinc: meat, egg, legumes
- Vitamin A: orange vegetables
- Vitamin C: fruits (aids iron absorption)`,
        mnemonics: [
          { text: "Mastitis: FREQUENT FEEDING > antibiotics", explanation: "Milk removal most important" },
          { text: "Low supply: correct latch, increase frequency", explanation: "Fix basics before galactagogues" },
          { text: "Vitamin D: infant 400 IU/day or mother 2000 IU/day", explanation: "Prevent rickets" },
        ],
        keyPoints: [
          "Engorgement: frequent feeding, warm compress pre, cold post",
          "Mastitis: continue feeding, antibiotics, analgesics",
          "Low supply: ensure correct latch (90% of cases)",
          "Increase supply: 8-12 feeds/day, complete emptying",
          "Gradual weaning: drop one feed every 3-7 days",
          "Iron supplementation starts at 6 months",
          "Introduce one food every 3-5 days (allergy detection)",
          "Iron-fortified cereals, meat, legumes for deficiency prevention",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Management & Prevention", edition: "9th" },
          { book: "IAP Guidelines on IYCF", chapter: "Comprehensive Feeding", edition: "2023" },
        ],
      },
      {
        layer: 5,
        slug: "breastfeeding-layer-5-active-recall",
        title: "Breastfeeding & Complementary Feeding - Active Recall",
        estimatedMinutes: 15,
        summary: "Clinical scenarios for breastfeeding troubleshooting, complementary feeding problems, and decision-making in lactation counseling.",
        contentMd: `# Active Recall: Breastfeeding & Complementary Feeding

**Q1:** 5-day-old newborn, engorged breasts (hard, painful), unable to latch. Most immediate management?
> **Answer:** Frequent feeding (milk removal resolves engorgement). Warm compress before feeding, cold after. Analgesics. Manual expression if needed. Continue breastfeeding.

**Q2:** 3-week-old baby, unilateral breast pain (left), T 39°C, redness on left breast. Diagnosis and management?
> **Answer:** Mastitis. Most important: CONTINUE frequent feeding from affected breast. Antibiotics: amoxicillin 500 mg TDS or cephalexin QID. Analgesics, warm compresses, rest. Do NOT stop breastfeeding.

**Q3:** 2-month-old exclusively breastfed, weight gain 80 g/week (slow). 4-5 wet diapers/day. Likely issue and first action?
> **Answer:** Low milk transfer. First: Observe feeding, check latch (90% of cases are poor latch). Check: areola in mouth, audible swallowing. Correct positioning if needed. Increase frequency to 8-12x/day. If correct, consider galactagogues.

**Q4:** 8-month-old, rash around mouth after mashed potato. Diarrhea today. Stop all foods?
> **Answer:** Stop only potato. Continue other tolerated foods. Continue breastfeeding. Rash should resolve within hours-days of food withdrawal. Introduce foods one at a time.

**Q5:** 6-month-old starting complementary feeding. How long between introducing new foods?
> **Answer:** Introduce one food at a time, wait 3-5 days before adding another. Allows identification of food allergies. Suggested order: iron-fortified cereals, vegetables, meat, legumes.

**Q6:** 4-month-old on exclusive breastfeeding, mother returning to work in 2 months. How to maintain supply?
> **Answer:** Breastfeed early morning + evening. Express at work (2-3 times if 8-hour day). Store expressed milk (refrigerator 24h, freezer 3 months). Continue night feeds. Start complementary feeding at 6 months.

**Q7:** 10-month-old on complementary feeding, constipation since starting solids. Mother concerned. Advice?
> **Answer:** Constipation common with solids. Increase water intake, fruits (prunes, papaya), vegetables. Continue breastfeeding. If hard stools, may need stool softener. Check iron supplementation (can cause constipation).

**Q8:** 7-month-old, parents want to give mashed whole peanuts (family has peanut allergy). Should they continue?
> **Answer:** Newer guidelines support introduction of allergenic foods at 6 months to develop tolerance. However, whole peanuts are aspiration hazard. Recommendation: Give peanut butter at 6+ months. Consider allergy testing if family history of severe anaphylaxis.

**Q9:** 18-month-old, mother stopped breastfeeding abruptly. Now severe unilateral pain, fluctuant mass (2-3 cm), T 38.5°C. Diagnosis and management?
> **Answer:** Breast abscess (from abrupt cessation, milk stasis). Ultrasound confirmation. Needle aspiration or drainage (may need GA). Antibiotics: amoxicillin + clavulanic acid. Prevention: gradual weaning (drop one feed every 3-7 days).

**Q10:** 11-month-old exclusively breastfed until now, mother concerned about iron deficiency. Iron levels normal. Advice about iron supplementation?
> **Answer:** Breast milk iron insufficient after 6 months. This baby should be on iron supplementation (1 mg/kg/day) from 6 months via iron-fortified foods or supplement. Since iron normal, likely because complementary foods started. Continue current approach with iron-rich foods: meat, fortified cereals, lentils.`,
        mnemonics: [
          { text: "Engorgement: frequent feeding resolves", explanation: "Don't stop breastfeeding" },
          { text: "Mastitis: continue frequent feeding affected breast", explanation: "Most important management" },
          { text: "New food allergy: stop only that food", explanation: "Continue others + breastfeeding" },
          { text: "Introduce one food every 3-5 days", explanation: "Allergy detection" },
        ],
        keyPoints: [
          "Engorgement: milk stasis, frequent feeding + warm compress",
          "Mastitis: unilateral fever + redness, continue feeding",
          "Poor latch causes 90% of low supply - observe and correct",
          "Increase frequency to 8-12 feeds/day for low supply",
          "Introduce one food at a time, wait 3-5 days",
          "Iron-fortified cereals first (less allergenic)",
          "Iron supplementation needed from 6 months",
          "Gradual weaning prevents engorgement/mastitis",
          "Breast abscess: abrupt weaning risk, needs drainage",
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Clinical Cases", edition: "9th" },
        ],
      },
    ],
  },
];

export default pediatricsPart6Lessons;
