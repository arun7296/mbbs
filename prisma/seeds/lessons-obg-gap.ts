import { TopicLessons } from "./types";

export const obgGapLessons: TopicLessons[] = [
  // ============================================================
  // OG-MOD-01-TOP-05: Nutrition in Pregnancy
  // ============================================================
  {
    topicCode: "OG-MOD-01-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "nutrition-pregnancy-foundation",
        title: "Nutrition in Pregnancy — Foundation",
        estimatedMinutes: 20,
        summary: "Basic nutritional requirements during pregnancy and their role in maternal-fetal health.",
        contentMd: `# Nutrition in Pregnancy — Foundation

## Why Nutrition Matters
Pregnancy increases caloric demands by ~300 kcal/day in the second and third trimesters. Poor nutrition contributes to anemia, pre-eclampsia, IUGR, and neural tube defects — all highly prevalent in India.

## Macronutrient Requirements
- **Calories**: Extra 300 kcal/day (2nd–3rd trimester); total ~2,500 kcal/day
- **Protein**: 60–78 g/day (additional 23 g/day over non-pregnant)
- **Fat**: 30 g/day visible fat; essential fatty acids (DHA) for fetal brain development
- **Carbohydrates**: 175 g/day minimum; complex carbs preferred

## Key Micronutrients
| Nutrient | Daily Requirement | Clinical Significance |
|----------|------------------|----------------------|
| Iron | 35 mg elemental | Prevents iron-deficiency anemia (>50% prevalence in Indian pregnant women) |
| Folic Acid | 500 µg (periconceptional: 5 mg if previous NTD) | Prevents neural tube defects |
| Calcium | 1,200 mg | Prevents pre-eclampsia, osteomalacia |
| Iodine | 250 µg | Prevents cretinism |
| Vitamin D | 600 IU | Bone health, immune function |

## Indian Government Programs
- **Pradhan Mantri Matru Vandana Yojana (PMMVY)**: Cash incentive for adequate nutrition
- **ICDS (Integrated Child Development Services)**: Supplementary nutrition through Anganwadi
- **National Iron Plus Initiative (NIPI)**: Universal iron-folic acid supplementation
- **Take Home Ration (THR)**: For pregnant and lactating mothers

## Common Deficiencies in Indian Context
Iron deficiency anemia affects >50% of pregnant women in India. Calcium deficiency is common due to low dairy intake in many communities. Vitamin B12 deficiency is prevalent among vegetarians.`,
        mnemonics: ["IRON-FOLIC: I-Iron 35mg, R-Recommended periconceptionally, O-Open NTD prevention, N-NIPI program, F-Folic acid 500µg, O-Organogenesis critical, L-Low cost intervention, I-ICDS supplements, C-Calcium 1200mg"],
        keyPoints: ["Extra 300 kcal/day in 2nd-3rd trimester", "Iron 35mg + Folic acid 500µg daily mandatory", "Calcium 1200mg prevents pre-eclampsia", "ICDS and NIPI are key government nutrition programs", ">50% Indian pregnant women have iron-deficiency anemia"],
        textbookRefs: ["DC Dutta Obstetrics Ch 10", "Mudaliar & Menon Ch 9"],
      },
      {
        layer: 2,
        slug: "nutrition-pregnancy-mechanism",
        title: "Nutrition in Pregnancy — Mechanism & Physiology",
        estimatedMinutes: 25,
        summary: "Physiological basis of increased nutritional demands and metabolic adaptations in pregnancy.",
        contentMd: `# Nutrition in Pregnancy — Mechanism & Physiology

## Metabolic Adaptations in Pregnancy

### First Half (Anabolic Phase)
- Increased fat deposition (3–4 kg)
- Enhanced intestinal calcium absorption (doubles by 2nd trimester)
- Increased iron absorption (3-fold increase)
- Hyperinsulinemia with normal glucose tolerance

### Second Half (Catabolic Phase)
- Accelerated starvation: rapid switch to fat oxidation during fasting
- Insulin resistance (driven by hPL, cortisol, progesterone)
- Facilitates glucose transfer to fetus ("glucose siphon effect")
- Fetus becomes priority for nutrient partitioning

## Iron Metabolism in Pregnancy
Total iron requirement in pregnancy: ~1,000 mg
- Expanded maternal red cell mass: 500 mg
- Fetal-placental unit: 300 mg
- Basal losses: 200 mg
- Compensatory amenorrhea saves: ~150 mg

Hepcidin is suppressed in pregnancy → increased intestinal iron absorption. Despite this, dietary iron alone is insufficient — supplementation is essential.

## Folate & Neural Tube Development
- Neural tube closes by day 28 (before many women know they're pregnant)
- Folate acts as cofactor in 1-carbon metabolism (DNA synthesis, methylation)
- 5-MTHF is the active form; MTHFR polymorphisms may impair conversion
- Periconceptional supplementation (4 weeks before to 12 weeks after conception) reduces NTD by 70%

## Calcium Homeostasis
- PTH-rP (PTH-related peptide) from placenta increases calcium absorption
- 1,25-dihydroxyvitamin D doubles in pregnancy
- Fetal skeleton requires 30 g calcium (mainly 3rd trimester)
- Low calcium intake → increased vascular smooth muscle reactivity → pre-eclampsia risk

## Protein Metabolism
- Positive nitrogen balance throughout pregnancy
- Amino acids actively transported across placenta
- Branched-chain amino acids preferentially used by fetus
- Maternal hypoalbuminemia (dilutional) is physiological`,
        mnemonics: ["Anabolic→Catabolic: First half STORES, second half DELIVERS (like a warehouse: stock then ship)"],
        keyPoints: ["Total iron need in pregnancy: 1000mg", "Neural tube closes by day 28 — folate must be periconceptional", "Pregnancy has anabolic (1st half) then catabolic (2nd half) phases", "Insulin resistance in late pregnancy facilitates glucose transfer to fetus", "Calcium absorption doubles via PTH-rP and vitamin D"],
        textbookRefs: ["DC Dutta Obstetrics Ch 4, 10", "Williams Obstetrics Ch 4"],
      },
      {
        layer: 3,
        slug: "nutrition-pregnancy-clinical",
        title: "Nutrition in Pregnancy — Clinical Application",
        estimatedMinutes: 25,
        summary: "Practical dietary counseling, supplementation protocols, and management of nutritional disorders.",
        contentMd: `# Nutrition in Pregnancy — Clinical Application

## Standard Supplementation Protocol (Indian Guidelines)
1. **Iron-Folic Acid (IFA)**: 100 mg elemental iron + 500 µg folic acid daily from 14 weeks to 6 months postpartum
2. **Calcium**: 500 mg twice daily from 14 weeks to delivery
3. **Vitamin D**: 1,000 IU daily if deficient (common in Indian urban women using sunscreen/staying indoors)

## Dietary Counseling in Indian Context
### Balanced Thali Approach
- **Cereals/millets**: 2–3 servings (roti, rice, ragi)
- **Pulses/legumes**: 2 servings (dal, rajma, chole)
- **Green leafy vegetables**: 100 g daily (palak, methi, amaranth)
- **Milk/dairy**: 500 mL daily (milk, curd, paneer)
- **Fruits**: 2 servings (seasonal fruits, citrus for iron absorption)
- **Jaggery**: Small amount daily (iron source)
- **Egg/fish/meat**: If non-vegetarian, 1 serving daily

### Foods to Avoid
- Raw papaya (papain → uterine contractions)
- Excessive caffeine (>200 mg/day)
- Unpasteurized dairy, raw meat (listeriosis risk)
- Alcohol — no safe limit (fetal alcohol spectrum disorder)

## Managing Common Nutritional Conditions

### Iron-Deficiency Anemia (Hb < 11 g/dL)
- Mild (10–10.9): Oral iron 200 mg/day + dietary modification
- Moderate (7–9.9): Oral iron 200 mg/day; if non-responsive → IV iron sucrose
- Severe (<7): IV iron sucrose or blood transfusion if symptomatic/near term
- Parenteral iron: IV iron sucrose 200 mg/dose, up to 5 doses in alternate days

### Hyperemesis Gravidarum — Nutritional Support
- IV fluids with thiamine (B1) BEFORE glucose (prevent Wernicke's)
- Small frequent meals, avoid empty stomach
- Ginger supplements may help
- Severe: TPN if weight loss >5%

### Gestational Diabetes — Dietary Management
- Medical Nutrition Therapy (MNT) as first-line
- 30–35 kcal/kg/day (25 kcal/kg if obese)
- Low glycemic index foods; avoid refined sugars
- 3 meals + 3 snacks distribution

## Weight Gain Recommendations
| Pre-pregnancy BMI | Total Gain | Rate (2nd–3rd tri) |
|-------------------|------------|---------------------|
| Underweight (<18.5) | 12.5–18 kg | 0.5 kg/week |
| Normal (18.5–24.9) | 11.5–16 kg | 0.4 kg/week |
| Overweight (25–29.9) | 7–11.5 kg | 0.3 kg/week |
| Obese (≥30) | 5–9 kg | 0.2 kg/week |`,
        mnemonics: ["IFA from 14 weeks: '14 = IFA starts' (both start with similar sounds)"],
        keyPoints: ["IFA: 100mg iron + 500µg folic acid from 14 weeks to 6 months postpartum", "Calcium 500mg BD from 14 weeks", "Severe anemia (<7 g/dL) needs IV iron sucrose or transfusion", "Give thiamine BEFORE glucose in hyperemesis", "Weight gain: 11.5-16 kg for normal BMI"],
        textbookRefs: ["DC Dutta Obstetrics Ch 10, 19", "FOGSI Good Clinical Practice Guidelines"],
      },
      {
        layer: 4,
        slug: "nutrition-pregnancy-exam",
        title: "Nutrition in Pregnancy — Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam facts and NEXT-pattern question approaches for pregnancy nutrition.",
        contentMd: `# Nutrition in Pregnancy — Exam Prep

## NEXT High-Yield Points
1. **Folic acid timing**: Must be started periconceptionally (4 weeks before conception). If previous NTD baby → 5 mg/day (not 500 µg)
2. **Neural tube closure**: Day 28 — this is WHY periconceptional supplementation matters
3. **Iron requirement**: Total 1,000 mg over pregnancy
4. **IFA tablet**: 100 mg elemental iron + 500 µg folic acid (not 5 mg)
5. **Severe anemia treatment**: IV iron sucrose (NOT IM iron dextran — abandoned due to anaphylaxis risk)
6. **Thiamine before glucose**: In hyperemesis — prevents Wernicke encephalopathy
7. **Best iron absorption enhancer**: Vitamin C (give IFA with citrus juice, not tea/coffee)
8. **Calcium and pre-eclampsia**: WHO recommends calcium supplementation in low-intake populations

## Common NEXT Traps
- Don't confuse IFA dose (100+0.5) with therapeutic dose (200 mg iron for moderate anemia)
- Megaloblastic anemia in pregnancy: think folate deficiency (NOT B12 usually)
- Pica (eating clay/ice) = iron deficiency until proven otherwise
- Normal physiological anemia of pregnancy: Hb can drop to 10.5 due to hemodilution — NOT necessarily pathological

## Important Values to Remember
| Parameter | Value |
|-----------|-------|
| Extra calories needed | 300 kcal/day (2nd-3rd trimester) |
| Protein requirement | 60–78 g/day |
| Iron in IFA | 100 mg elemental |
| Folic acid (routine) | 500 µg/day |
| Folic acid (prev NTD) | 5 mg/day |
| Calcium | 1,200 mg/day |
| Neural tube closure | Day 28 |
| Total iron need | ~1,000 mg |`,
        mnemonics: ["IRON dose ladder: IFA=100, Therapeutic=200, Severe=IV sucrose"],
        keyPoints: ["Folic acid 5mg (not 500µg) if previous NTD baby", "Neural tube closes day 28", "IV iron sucrose replaced IM iron dextran", "Thiamine BEFORE glucose in hyperemesis", "Physiological anemia: Hb may be 10.5 due to hemodilution"],
        textbookRefs: ["DC Dutta Obstetrics Ch 10, 19", "Mudaliar & Menon Ch 9"],
      },
      {
        layer: 5,
        slug: "nutrition-pregnancy-recall",
        title: "Nutrition in Pregnancy — Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for rapid revision of pregnancy nutrition.",
        contentMd: `# Nutrition in Pregnancy — Active Recall

**Q: What is the daily caloric surplus needed in the 2nd-3rd trimester?**
A: 300 kcal/day extra (total ~2,500 kcal/day)

**Q: What is the composition of IFA tablet?**
A: 100 mg elemental iron + 500 µg folic acid

**Q: When should IFA supplementation start and end?**
A: Start at 14 weeks, continue till 6 months postpartum

**Q: What dose of folic acid for a woman with previous NTD baby?**
A: 5 mg/day (periconceptionally)

**Q: By what day does the neural tube close?**
A: Day 28

**Q: What is the total iron requirement during pregnancy?**
A: ~1,000 mg

**Q: Name the Indian government program for maternal nutrition supplementation.**
A: NIPI (National Iron Plus Initiative) for IFA; ICDS through Anganwadi for supplementary nutrition

**Q: Why give thiamine BEFORE glucose in hyperemesis?**
A: To prevent Wernicke encephalopathy (thiamine is cofactor for pyruvate dehydrogenase)

**Q: What is the preferred route for iron in severe anemia in pregnancy?**
A: IV iron sucrose (IM iron dextran abandoned due to anaphylaxis risk)

**Q: What Hb level constitutes severe anemia in pregnancy?**
A: < 7 g/dL

**Q: How much calcium is recommended daily in pregnancy?**
A: 1,200 mg/day

**Q: What is the mechanism of physiological anemia of pregnancy?**
A: Plasma volume increases (50%) more than RBC mass increase (30%) → dilutional decrease in Hb`,
        mnemonics: ["Day 28 = NTube; 14 weeks = IFA starts; 1000mg = total iron"],
        keyPoints: ["IFA: 100+0.5 from 14 weeks to 6m PP", "5mg folic acid if previous NTD", "Day 28 neural tube closure", "IV iron sucrose for severe anemia", "Thiamine before glucose in hyperemesis"],
        textbookRefs: ["DC Dutta Obstetrics Ch 10", "Mudaliar & Menon Ch 9"],
      },
    ],
  },

  // ============================================================
  // OG-MOD-04-TOP-04: Neonatal Resuscitation & Care
  // ============================================================
  {
    topicCode: "OG-MOD-04-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "neonatal-resuscitation-foundation",
        title: "Neonatal Resuscitation & Care — Foundation",
        estimatedMinutes: 20,
        summary: "Principles of essential newborn care, APGAR scoring, and neonatal resuscitation steps.",
        contentMd: `# Neonatal Resuscitation & Care — Foundation

## Essential Newborn Care (WHO)
Immediate steps after birth:
1. **Dry** the baby thoroughly
2. **Assess** breathing (cry, tone, color)
3. **Cord clamping**: Delayed (1–3 minutes) — improves iron stores
4. **Skin-to-skin** contact with mother
5. **Breastfeeding** initiation within 1 hour

## APGAR Score
Assessed at 1 minute and 5 minutes after birth:

| Component | 0 | 1 | 2 |
|-----------|---|---|---|
| **A**ppearance | Blue/pale all over | Pink body, blue extremities | Completely pink |
| **P**ulse | Absent | <100/min | ≥100/min |
| **G**rimace | No response | Grimace | Cry/cough |
| **A**ctivity | Limp | Some flexion | Active movement |
| **R**espiration | Absent | Slow/irregular | Good cry |

- 7–10: Normal (no resuscitation needed)
- 4–6: Moderate depression (stimulation + positive pressure ventilation)
- 0–3: Severe depression (full resuscitation)

## Neonatal Resuscitation Algorithm (NRP)
**The Golden Minute**: Initial steps must be completed in 60 seconds

Step 1: **Initial Steps** (30 seconds)
- Warmth (radiant warmer, dry, remove wet linen)
- Clear airway (suction mouth then nose if needed)
- Dry and stimulate (flick soles, rub back)

Step 2: **Evaluate** — Breathing? HR ≥100?
- If gasping/apneic or HR <100 → Positive Pressure Ventilation (PPV)
- PPV: 40–60 breaths/min, using bag-and-mask

Step 3: If HR <60 after 30 sec of effective PPV
- Chest compressions + PPV (3:1 ratio — 3 compressions: 1 ventilation)
- Two-thumb encircling technique preferred

Step 4: If HR still <60 despite compressions
- Epinephrine 0.01–0.03 mg/kg IV (umbilical vein)

## Danger Signs in Newborn
- Not feeding/poor sucking
- Convulsions
- Fast breathing (>60/min) or chest indrawing
- Severe jaundice (within 24 hours or deep yellow)
- Temperature <35.5°C or >37.5°C
- Umbilical redness/discharge`,
        mnemonics: ["APGAR: Appearance, Pulse, Grimace, Activity, Respiration", "Resuscitation: Warm-Clear-Dry-Stimulate → PPV → Compressions → Epinephrine (WCDS-PCE)"],
        keyPoints: ["Golden Minute: complete initial steps in 60 seconds", "APGAR scored at 1 and 5 minutes", "Delayed cord clamping (1-3 min) improves iron stores", "Chest compressions if HR <60 after PPV", "Compression:ventilation ratio = 3:1 in neonates"],
        textbookRefs: ["DC Dutta Obstetrics Ch 33", "NNF Textbook of Neonatology"],
      },
      {
        layer: 2,
        slug: "neonatal-resuscitation-mechanism",
        title: "Neonatal Resuscitation & Care — Mechanism",
        estimatedMinutes: 25,
        summary: "Physiological basis of neonatal transition, asphyxia, and resuscitation mechanisms.",
        contentMd: `# Neonatal Resuscitation & Care — Mechanism

## Fetal-to-Neonatal Transition
### Respiratory Adaptation
- In utero: lungs filled with fluid (~30 mL/kg), minimal blood flow
- At birth: first breath generates negative pressure (-40 to -100 cmH₂O)
- Lung fluid absorbed via ENaC channels (sodium channels, activated by catecholamines)
- Functional residual capacity established within first few breaths
- Pulmonary vascular resistance drops → blood flow increases 8–10 fold

### Circulatory Adaptation
- Clamping of cord → increased SVR → left-sided pressures rise
- Lung expansion → pulmonary vascular resistance drops
- Left atrial pressure > Right atrial pressure → foramen ovale closes (functional)
- Ductus arteriosus closes (within 24–72 hours) due to increased PaO₂ and decreased prostaglandins

## Pathophysiology of Birth Asphyxia
### Primary Apnea
- Initial response to hypoxia: rapid breathing → gasping → primary apnea
- Heart rate maintained initially, BP may rise
- Stimulation alone may be sufficient to restart breathing

### Secondary (Terminal) Apnea
- Continued hypoxia → gasping stops → secondary apnea
- Heart rate falls, BP drops
- Will NOT respond to stimulation alone — requires PPV
- Cannot clinically distinguish primary from secondary apnea → always resuscitate

### Cellular Injury in Asphyxia
1. **Energy failure**: ATP depletion → Na/K pump failure → cellular swelling
2. **Excitotoxicity**: Glutamate release → calcium influx → neuronal death
3. **Reperfusion injury**: Free radical generation on reoxygenation
4. **Delayed cell death** (6–48 hours): Apoptosis cascade activation

## Why 3:1 Compression-to-Ventilation Ratio?
Neonatal cardiac arrest is almost always respiratory in origin (unlike adults where it's usually cardiac). Therefore, ventilation is the priority. The 3:1 ratio provides ~90 compressions and 30 breaths per minute, ensuring adequate oxygenation.

## Thermoregulation in Newborn
- Neonates lose heat rapidly (large surface area:volume ratio)
- Brown fat thermogenesis (non-shivering) is the primary mechanism
- Cold stress → increased oxygen consumption → worsens hypoxia
- Temperature goal: 36.5–37.5°C (axillary)`,
        mnemonics: ["Transition: Lungs open → PVR drops → LA>RA → FO closes → Ductus closes (think of dominoes falling)"],
        keyPoints: ["Cannot distinguish primary from secondary apnea clinically — always intervene", "Neonatal arrest is respiratory in origin — ventilation is priority", "3:1 ratio gives 90 compressions + 30 breaths per minute", "Cold stress increases O2 consumption and worsens hypoxia", "Ductus arteriosus closes due to increased PaO2"],
        textbookRefs: ["DC Dutta Obstetrics Ch 33", "NNF Textbook Ch 8", "Nelson Pediatrics Ch 102"],
      },
      {
        layer: 3,
        slug: "neonatal-resuscitation-clinical",
        title: "Neonatal Resuscitation & Care — Clinical Application",
        estimatedMinutes: 25,
        summary: "Practical resuscitation techniques, equipment, and post-resuscitation care.",
        contentMd: `# Neonatal Resuscitation & Care — Clinical Application

## Pre-Delivery Preparation
Every delivery room must have:
- Radiant warmer (preheated)
- Self-inflating bag (240 mL) with masks (size 0 and 1)
- Suction apparatus (bulb syringe or mechanical, max -100 mmHg)
- Laryngoscope (blade 0 for preterm, blade 1 for term)
- ET tubes (2.5, 3.0, 3.5, 4.0 mm)
- Epinephrine (1:10,000)
- Umbilical vein catheterization set

## Practical Resuscitation Steps

### Bag-and-Mask Ventilation (BMV)
- **MR SOPA** corrective steps if chest not rising:
  - **M**: Mask adjustment (ensure seal)
  - **R**: Reposition head (sniffing position)
  - **S**: Suction mouth then nose
  - **O**: Open mouth slightly
  - **P**: Pressure increase (up to 40 cmH₂O)
  - **A**: Alternative airway (LMA or ET tube)

### Chest Compressions
- Two-thumb encircling technique on lower 1/3 of sternum
- Depth: 1/3 anterior-posterior diameter
- Rate: 3 compressions : 1 breath, "one-and-two-and-three-and-breathe"
- Continue for 60 seconds then reassess HR

### Medications
- **Epinephrine**: 0.01–0.03 mg/kg (0.1–0.3 mL/kg of 1:10,000) IV preferred (UVC)
  - Can give ET: 0.05–0.1 mg/kg while IV being established
- **Volume expansion**: Normal saline 10 mL/kg over 5–10 min (if suspected blood loss)

## Meconium-Stained Amniotic Fluid (MSAF)
- **Current guidelines (NRP 2020)**: Do NOT routinely suction trachea even in non-vigorous babies
- Provide standard resuscitation steps
- Only intubate and suction if airway appears obstructed despite PPV

## Post-Resuscitation Care
- Monitor: Temperature, HR, RR, SpO₂, blood glucose
- Therapeutic hypothermia (33.5°C for 72 hours) if:
  - ≥36 weeks gestation
  - Evidence of moderate-severe HIE
  - Within 6 hours of birth
- Blood glucose monitoring: hypoglycemia common after asphyxia (target >45 mg/dL)

## Indian Context: Facility-Based Newborn Care
- **SNCU (Special Newborn Care Unit)**: District hospital level, manages sick newborns
- **NBSU (Newborn Stabilization Unit)**: CHC level, stabilize and refer
- **HBNC (Home-Based Newborn Care)**: ASHAs visit newborns at home (days 1,3,7,14,21,28,42)
- **Navjaat Shishu Suraksha Karyakram (NSSK)**: Training program for basic newborn care`,
        mnemonics: ["MR SOPA for PPV troubleshooting: Mask, Reposition, Suction, Open, Pressure, Alternative airway"],
        keyPoints: ["MR SOPA corrective steps for ineffective PPV", "Two-thumb technique on lower 1/3 sternum", "Epinephrine 0.01-0.03 mg/kg IV (1:10,000)", "NO routine tracheal suction in MSAF (NRP 2020)", "Therapeutic hypothermia within 6 hours for moderate-severe HIE"],
        textbookRefs: ["DC Dutta Obstetrics Ch 33", "NNF Textbook Ch 8-9", "NSSK Guidelines"],
      },
      {
        layer: 4,
        slug: "neonatal-resuscitation-exam",
        title: "Neonatal Resuscitation & Care — Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points and NEXT-pattern question strategies for neonatal resuscitation.",
        contentMd: `# Neonatal Resuscitation & Care — Exam Prep

## NEXT High-Yield Points
1. **Most important step in neonatal resuscitation**: Effective ventilation (NOT intubation or drugs)
2. **Golden Minute**: Initial steps completed in <60 seconds
3. **3:1 ratio** for compressions:ventilation in neonates (NOT 15:2 or 30:2)
4. **Epinephrine route**: IV (UVC) preferred; ET route dose is HIGHER (0.05-0.1 mg/kg)
5. **Delayed cord clamping**: 1–3 minutes for term and preterm babies
6. **APGAR is NOT used to decide resuscitation** — only for documentation
7. **Meconium**: No routine suctioning regardless of vigor (NRP 2020)
8. **Therapeutic hypothermia**: ≥36 weeks, moderate-severe HIE, within 6 hours

## Common NEXT Traps
- APGAR 1-minute score does NOT guide resuscitation decisions — look at HR and breathing
- Compression ratio 3:1 is ONLY for neonates, not for older infants (which use 15:2)
- Suction mouth BEFORE nose (M before N, like alphabet)
- Room air (21% O₂) is recommended to START resuscitation in term neonates (NOT 100% O₂)
- Sodium bicarbonate is NOT used in delivery room resuscitation

## Quick Comparison Table
| Parameter | Neonate | Infant (PALS) |
|-----------|---------|----------------|
| C:V ratio | 3:1 | 15:2 (2-rescuer) |
| Compression depth | 1/3 AP diameter | 1/3 AP diameter |
| First drug | Epinephrine | Epinephrine |
| Starting O₂ | 21% (term) | 100% |
| Compression technique | Two-thumb encircling | Two-finger or two-thumb |

## Values to Remember
| Parameter | Value |
|-----------|-------|
| PPV rate | 40–60 breaths/min |
| Compressions started | HR <60 after 30s effective PPV |
| Epinephrine IV dose | 0.01–0.03 mg/kg |
| Epinephrine ET dose | 0.05–0.1 mg/kg |
| Normal saline bolus | 10 mL/kg |
| Hypothermia target | 33.5°C for 72 hours |`,
        mnemonics: ["Room Air for Resuscitation Start: '21 for 2021 guidelines' (21% O2)"],
        keyPoints: ["Ventilation is THE most important step", "3:1 ratio ONLY for neonates", "Start with room air (21% O2) for term babies", "APGAR doesn't guide resuscitation", "No sodium bicarbonate in delivery room"],
        textbookRefs: ["DC Dutta Obstetrics Ch 33", "NNF NRP Guidelines 2020"],
      },
      {
        layer: 5,
        slug: "neonatal-resuscitation-recall",
        title: "Neonatal Resuscitation & Care — Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for rapid revision of neonatal resuscitation.",
        contentMd: `# Neonatal Resuscitation & Care — Active Recall

**Q: What is the Golden Minute?**
A: Complete initial resuscitation steps (warm, dry, clear airway, stimulate, assess) within 60 seconds of birth.

**Q: What compression-to-ventilation ratio is used in neonatal resuscitation?**
A: 3:1 (3 compressions : 1 breath)

**Q: When do you start chest compressions in a neonate?**
A: When HR remains <60/min after 30 seconds of effective PPV.

**Q: What concentration of oxygen is used to start resuscitation in term neonates?**
A: 21% (room air)

**Q: What is the IV dose of epinephrine in neonatal resuscitation?**
A: 0.01–0.03 mg/kg of 1:10,000 solution, via umbilical vein catheter.

**Q: What does MR SOPA stand for?**
A: Mask adjustment, Reposition, Suction, Open mouth, Pressure increase, Alternative airway — corrective steps for failed PPV.

**Q: Should you suction the trachea in a baby born through meconium-stained fluid?**
A: No routine tracheal suctioning (NRP 2020). Provide standard resuscitation. Only intubate if airway is obstructed.

**Q: What are the criteria for therapeutic hypothermia?**
A: ≥36 weeks gestation + moderate-severe HIE + within 6 hours of birth → cool to 33.5°C for 72 hours.

**Q: What is delayed cord clamping and its benefit?**
A: Clamping the cord 1–3 minutes after birth; improves iron stores and reduces need for transfusion.

**Q: Name the Indian program for home-based newborn care.**
A: HBNC (Home-Based Newborn Care) — ASHAs visit on days 1, 3, 7, 14, 21, 28, and 42.`,
        mnemonics: ["HBNC visit days: 1-3-7-14-21-28-42 (increasing intervals)"],
        keyPoints: ["Golden Minute = 60 seconds for initial steps", "3:1 ratio, room air start", "MR SOPA for PPV troubleshooting", "No routine meconium suctioning", "HBNC by ASHA on days 1,3,7,14,21,28,42"],
        textbookRefs: ["DC Dutta Obstetrics Ch 33", "NNF Textbook Ch 8"],
      },
    ],
  },

  // ============================================================
  // OG-MOD-06-TOP-04: Vulvar & Vaginal Pathology
  // ============================================================
  {
    topicCode: "OG-MOD-06-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "vulvar-vaginal-pathology-foundation",
        title: "Vulvar & Vaginal Pathology — Foundation",
        estimatedMinutes: 20,
        summary: "Overview of vulvar and vaginal conditions including dystrophies, infections, and neoplasms.",
        contentMd: `# Vulvar & Vaginal Pathology — Foundation

## Vulvar Non-Neoplastic Conditions (Dystrophies)
Previously called "leukoplakia" — now classified by ISSVD:

### Lichen Sclerosus
- Most common vulvar dystrophy
- Age: Bimodal — prepubertal girls and postmenopausal women
- Appearance: White, parchment-like, "cigarette paper" skin
- Symptoms: Intense pruritus, dyspareunia
- Risk: 4–5% malignant transformation to SCC
- Treatment: Superpotent topical corticosteroids (clobetasol propionate 0.05%)

### Lichen Planus
- Erosive form most common on vulva
- Wickham striae may be seen
- Can affect vagina → adhesions, stenosis

### Squamous Cell Hyperplasia
- Thickened, raised white lesion
- Pruritus is main symptom
- No malignant potential on its own
- Treatment: Topical steroids

## Vulvar Neoplasms

### Vulvar Intraepithelial Neoplasia (VIN)
- **Usual type (uVIN)**: HPV-related, younger women, multifocal
- **Differentiated type (dVIN)**: Non-HPV, older women, associated with lichen sclerosus, higher malignant potential

### Vulvar Carcinoma
- 90% Squamous cell carcinoma
- Two pathways: HPV-related (younger) and non-HPV/lichen sclerosus (older)
- FIGO staging is surgical
- Treatment: Wide local excision or radical vulvectomy + inguinofemoral lymph node dissection

## Vaginal Pathology

### Vaginal Intraepithelial Neoplasia (VAIN)
- Rare; usually secondary to cervical neoplasia
- HPV-related
- Upper 1/3 most common site

### Vaginal Carcinoma
- Primary vaginal cancer is rare (<2% of gynecologic cancers)
- SCC most common type (80%)
- **Clear cell adenocarcinoma**: Associated with in-utero DES exposure
- Treatment: Radiotherapy (primary modality for most stages)

### Bartholin Gland Cyst/Abscess
- Most common vulvar cyst
- Age: Reproductive age women
- Location: 5 and 7 o'clock position at vaginal introitus
- Treatment: Marsupialization (preferred) or Word catheter; I&D for acute abscess
- In women >40: biopsy to rule out Bartholin gland carcinoma`,
        mnemonics: ["Lichen Sclerosus = 'Cigarette Paper Skin' with 4-5% cancer risk", "Bartholin cyst: 5 & 7 o'clock (like a watch face at the introitus)"],
        keyPoints: ["Lichen sclerosus: most common vulvar dystrophy, 4-5% SCC risk", "Vulvar SCC: 90% of vulvar cancers, two pathways (HPV and non-HPV)", "Clear cell adenocarcinoma of vagina → DES exposure in utero", "Bartholin cyst treatment: marsupialization preferred", "dVIN has higher malignant potential than uVIN"],
        textbookRefs: ["DC Dutta Gynecology Ch 26, 27", "Shaw's Textbook of Gynecology Ch 30"],
      },
      {
        layer: 2,
        slug: "vulvar-vaginal-pathology-mechanism",
        title: "Vulvar & Vaginal Pathology — Mechanism",
        estimatedMinutes: 25,
        summary: "Pathogenesis of vulvar dystrophies, HPV-mediated carcinogenesis, and DES-related pathology.",
        contentMd: `# Vulvar & Vaginal Pathology — Mechanism

## Pathogenesis of Lichen Sclerosus
- Autoimmune mechanism: T-cell mediated attack on basal keratinocytes
- Associated with other autoimmune conditions (thyroid disease, vitiligo, pernicious anemia)
- Histology: Thinned epidermis, homogenization of upper dermis, band-like lymphocytic infiltrate
- Genetic susceptibility: HLA-DQ7 association
- Reduced elastic fibers → loss of vulvar architecture → introital stenosis

## HPV-Mediated Vulvar Carcinogenesis
### Usual VIN (uVIN) Pathway
- HPV 16 (most common), 18, 33
- E6 protein → p53 degradation → loss of apoptosis
- E7 protein → Rb inactivation → uncontrolled proliferation
- p16 overexpression (paradoxical — due to loss of Rb negative feedback)
- Young women, multifocal, warty/basaloid histology

### Differentiated VIN (dVIN) Pathway
- NOT HPV-related
- Arises from chronic inflammatory conditions (lichen sclerosus, lichen planus)
- p53 mutation (detected on immunohistochemistry)
- p16 negative
- Older women, unifocal, keratinizing histology
- Higher and faster progression to invasive SCC (>30% vs <5% for uVIN)

## DES (Diethylstilbestrol) and Clear Cell Carcinoma
- DES was given to prevent miscarriage (1940s–1970s)
- Caused vaginal adenosis (persistence of Müllerian glandular epithelium in vagina)
- Adenosis → atypical adenosis → clear cell adenocarcinoma
- Peak incidence at age 19 (daughters exposed in utero)
- DES is no longer used, but second-generation effects still studied

## Bartholin Gland Pathology
- Obstruction of duct → mucus accumulation → cyst
- Secondary infection (often polymicrobial: E. coli, anaerobes, rarely N. gonorrhoeae) → abscess
- Recurrent cyst → marsupialization creates new drainage pathway
- In older women: adenoid cystic carcinoma or SCC can arise from Bartholin gland`,
        mnemonics: ["Two VIN pathways: uVIN = HPV/young/p16+; dVIN = LichenSclerosus/old/p53+/WORSE prognosis"],
        keyPoints: ["Lichen sclerosus is autoimmune — T-cell mediated", "uVIN: HPV→E6/E7→p53/Rb loss, p16 positive", "dVIN: non-HPV, p53 mutation, p16 negative, higher malignant risk", "DES → vaginal adenosis → clear cell adenocarcinoma", "Bartholin abscess: polymicrobial (E. coli, anaerobes)"],
        textbookRefs: ["DC Dutta Gynecology Ch 26, 27", "Robbins Pathology Ch 22"],
      },
      {
        layer: 3,
        slug: "vulvar-vaginal-pathology-clinical",
        title: "Vulvar & Vaginal Pathology — Clinical Application",
        estimatedMinutes: 25,
        summary: "Diagnosis, staging, and management of vulvar and vaginal conditions.",
        contentMd: `# Vulvar & Vaginal Pathology — Clinical Application

## Approach to Vulvar Lesion
1. **History**: Pruritus, pain, discharge, bleeding, duration
2. **Examination**: Color (white/red/pigmented), surface (raised/flat/ulcerated), extent
3. **Biopsy**: Punch biopsy (4mm Keyes punch) for any suspicious lesion
4. **Rule**: Any vulvar lesion persisting >4 weeks or not responding to treatment → BIOPSY

## Management of Vulvar Dystrophies
| Condition | Treatment | Follow-up |
|-----------|-----------|-----------|
| Lichen sclerosus | Clobetasol 0.05% × 12 weeks, then maintenance | 6-monthly; biopsy suspicious areas |
| Squamous hyperplasia | Topical steroids | Annual |
| Mixed dystrophy | Treat as lichen sclerosus | Close follow-up for SCC |

## Vulvar Cancer Management (FIGO Staging)
### Early Stage (I-II)
- **Stage IA** (≤2 cm, ≤1 mm invasion): Wide local excision only (no LN dissection)
- **Stage IB** (>2 cm or >1 mm invasion): Radical local excision + ipsilateral/bilateral inguinofemoral lymphadenectomy
- **Stage II** (any size with extension to adjacent perineal structures): Radical vulvectomy + bilateral inguinofemoral LN dissection

### Advanced Stage (III-IV)
- Multimodal: neoadjuvant chemoradiation → surgery
- Or primary chemoradiation if unresectable

### Sentinel Lymph Node Biopsy
- Emerging role in early vulvar cancer (Stage IB, unifocal)
- Reduces morbidity of complete inguinofemoral LN dissection
- Requires injection of blue dye/radiotracer around tumor

## Vaginal Cancer Management
- **VAIN**: Laser ablation, topical 5-FU, or excision
- **Stage I (limited to vaginal wall)**: Surgery or radiotherapy
- **Stage II-IV**: Primary chemoradiation (cisplatin-based)
- Upper 1/3 vaginal cancer → treated like cervical cancer
- Lower 1/3 vaginal cancer → treated like vulvar cancer

## Bartholin Cyst/Abscess Management
- **Asymptomatic cyst**: Observation
- **Symptomatic/recurrent cyst**: Marsupialization under LA
- **Acute abscess**: Word catheter (left in 4–6 weeks) or I&D + antibiotics
- **Age >40 with new mass**: Excisional biopsy to rule out carcinoma

## Indian Clinical Context
- Late presentation of vulvar cancer common in rural India due to shame/taboo
- Lichen sclerosus often misdiagnosed as fungal infection → treated with antifungals → delays diagnosis
- DES-related clear cell carcinoma now extremely rare in India (DES discontinued)`,
        mnemonics: ["Vulvar cancer: ≤1mm invasion = NO lymph node dissection needed (Stage IA)"],
        keyPoints: ["Any vulvar lesion >4 weeks → biopsy", "Clobetasol 0.05% is treatment of choice for lichen sclerosus", "Stage IA vulvar cancer: WLE only, no LN dissection", "Word catheter for Bartholin abscess (4-6 weeks)", "Upper 1/3 vaginal cancer treated like cervical cancer"],
        textbookRefs: ["DC Dutta Gynecology Ch 26, 27", "Shaw's Textbook Ch 30", "FIGO Staging Guidelines"],
      },
      {
        layer: 4,
        slug: "vulvar-vaginal-pathology-exam",
        title: "Vulvar & Vaginal Pathology — Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam facts for vulvar and vaginal pathology.",
        contentMd: `# Vulvar & Vaginal Pathology — Exam Prep

## NEXT High-Yield Points
1. **Most common vulvar malignancy**: Squamous cell carcinoma (90%)
2. **Lichen sclerosus malignant transformation**: 4–5% (important number)
3. **DES exposure** → clear cell adenocarcinoma of vagina
4. **Bartholin gland biopsy** in women >40 (rule out carcinoma)
5. **dVIN has WORSE prognosis** than uVIN despite being less common
6. **p16 positive** = HPV-related (uVIN); **p53 mutation** = non-HPV (dVIN)
7. **Sentinel lymph node biopsy**: Role in Stage IB unifocal vulvar cancer
8. **Most common site of vaginal cancer**: Upper 1/3 posterior wall

## Common NEXT Traps
- Paget disease of vulva: looks like eczema, but biopsy shows Paget cells (large, pale cells with mucin)
- Vulvar Paget's: 10–20% have underlying adenocarcinoma (unlike breast Paget's where >95% have underlying cancer)
- Melanoma is the SECOND most common vulvar malignancy (not basal cell)
- Verrucous carcinoma: Looks like a giant condyloma, but is a well-differentiated SCC → do NOT radiate (causes anaplastic transformation)
- Primary vaginal cancer MUST be diagnosed only after ruling out extension from cervix, vulva, or metastasis

## Key Comparisons
| Feature | uVIN | dVIN |
|---------|------|------|
| HPV | Yes (16,18) | No |
| Age | Young | Old |
| Background | None specific | Lichen sclerosus |
| p16 IHC | Positive | Negative |
| p53 IHC | Wild-type | Mutant |
| Malignant risk | <5% | >30% |
| Histology | Basaloid/warty | Keratinizing |`,
        mnemonics: ["VIN comparison: U=Usual=Young=HPV=p16+; D=Differentiated=Dystrophy=p53+=Dangerous"],
        keyPoints: ["Vulvar SCC 90% of vulvar malignancies", "Vulvar melanoma is 2nd most common (not basal cell)", "Verrucous carcinoma: never radiate", "Vulvar Paget's: 10-20% have underlying adenocarcinoma", "Primary vaginal cancer = diagnosis of exclusion"],
        textbookRefs: ["DC Dutta Gynecology Ch 26, 27", "Shaw's Textbook Ch 30"],
      },
      {
        layer: 5,
        slug: "vulvar-vaginal-pathology-recall",
        title: "Vulvar & Vaginal Pathology — Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for rapid revision of vulvar and vaginal pathology.",
        contentMd: `# Vulvar & Vaginal Pathology — Active Recall

**Q: What is the most common vulvar dystrophy?**
A: Lichen sclerosus

**Q: What is the malignant transformation rate of lichen sclerosus?**
A: 4–5% (to squamous cell carcinoma)

**Q: What is the treatment of choice for lichen sclerosus?**
A: Superpotent topical corticosteroids — clobetasol propionate 0.05%

**Q: What type of vulvar cancer accounts for 90% of cases?**
A: Squamous cell carcinoma

**Q: What is the second most common vulvar malignancy?**
A: Melanoma

**Q: Differentiate uVIN from dVIN.**
A: uVIN: HPV-related, young women, p16+, lower malignant risk (<5%). dVIN: non-HPV, older women with lichen sclerosus, p53 mutant, higher malignant risk (>30%).

**Q: What vaginal malignancy is associated with DES exposure?**
A: Clear cell adenocarcinoma

**Q: What is the treatment for Bartholin gland abscess?**
A: Word catheter (left 4–6 weeks) or I&D + antibiotics. Marsupialization for recurrent cysts.

**Q: When should a Bartholin gland mass be biopsied?**
A: In women >40 years (to rule out carcinoma)

**Q: Why should verrucous carcinoma of vulva NOT be treated with radiation?**
A: Radiation causes anaplastic transformation (makes it more aggressive)

**Q: What FIGO stage of vulvar cancer does NOT require lymph node dissection?**
A: Stage IA (≤2 cm, ≤1 mm invasion)`,
        mnemonics: ["Bartholin biopsy age: >40 ('Bartholin Biopsy at Forty')"],
        keyPoints: ["Lichen sclerosus: 4-5% SCC risk, treat with clobetasol", "SCC 90%, melanoma 2nd most common", "uVIN vs dVIN: HPV/p16 vs lichen/p53", "DES → clear cell adenocarcinoma", "Stage IA: no LN dissection needed"],
        textbookRefs: ["DC Dutta Gynecology Ch 26, 27"],
      },
    ],
  },

  // ============================================================
  // OG-MOD-07-TOP-04: Adolescent Gynecology & Menopause
  // ============================================================
  {
    topicCode: "OG-MOD-07-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "adolescent-gyn-menopause-foundation",
        title: "Adolescent Gynecology & Menopause — Foundation",
        estimatedMinutes: 20,
        summary: "Overview of puberty disorders, adolescent gynecological conditions, and menopause.",
        contentMd: `# Adolescent Gynecology & Menopause — Foundation

## Normal Puberty in Females
- **Thelarche** (breast development): First sign of puberty, mean age 10–11 years
- **Pubarche** (pubic hair): Shortly after thelarche
- **Growth spurt**: Peaks before menarche
- **Menarche**: Mean age 12–13 years in India (2–3 years after thelarche)
- Sequence: Thelarche → Pubarche → Growth spurt → Menarche

## Precocious Puberty
Secondary sexual characteristics before age 8 in girls.

### Central (GnRH-dependent / True)
- Activation of HPO axis
- Causes: Idiopathic (most common in girls), CNS tumors (hamartoma), hydrocephalus
- Sequence is preserved (normal sequence, just early)
- Treatment: GnRH agonists (leuprolide)

### Peripheral (GnRH-independent / Pseudo)
- Autonomous hormone production
- Causes: Ovarian tumors (granulosa cell), adrenal tumors, McCune-Albright syndrome, exogenous estrogen
- Sequence may be altered
- Treatment: Treat underlying cause

## Delayed Puberty
No secondary sexual characteristics by age 14 OR no menarche by age 16.

### With absent breast development (low estrogen)
- **Hypogonadotropic**: Constitutional delay, Kallmann syndrome (anosmia + hypogonadism), eating disorders
- **Hypergonadotropic**: Turner syndrome (45,XO), gonadal dysgenesis

### With breast development but no menarche
- Müllerian agenesis (MRKH syndrome) — no uterus/vagina
- Imperforate hymen — cyclic pain, hematocolpos
- Transverse vaginal septum
- Androgen insensitivity syndrome (46,XY, female phenotype, absent uterus)

## Menopause
Permanent cessation of menstruation for ≥12 consecutive months.

- **Average age**: 47–52 years (India: ~47 years)
- **Premature menopause**: Before age 40 (= premature ovarian insufficiency)
- **Perimenopause**: 2–8 years before menopause, irregular cycles

### Menopausal Symptoms
- **Vasomotor**: Hot flushes (most common), night sweats
- **Urogenital**: Vaginal dryness, atrophic vaginitis, dyspareunia, recurrent UTI
- **Psychological**: Mood changes, insomnia, anxiety
- **Skeletal**: Osteoporosis (accelerated bone loss first 5–7 years)
- **Cardiovascular**: Increased CVD risk (loss of estrogen's protective effect)`,
        mnemonics: ["Puberty sequence: 'The Pubertal Girl Menstruates' = Thelarche, Pubarche, Growth spurt, Menarche", "Primary amenorrhea with breast: MITA = Müllerian agenesis, Imperforate hymen, Transverse septum, AIS"],
        keyPoints: ["Thelarche is first sign of puberty", "Precocious puberty: <8 years in girls", "Turner syndrome: most common cause of hypergonadotropic primary amenorrhea", "Menopause: 12 months amenorrhea, average 47 years in India", "Hot flushes are the most common menopausal symptom"],
        textbookRefs: ["DC Dutta Gynecology Ch 5, 7, 8", "Shaw's Textbook Ch 6, 28"],
      },
      {
        layer: 2,
        slug: "adolescent-gyn-menopause-mechanism",
        title: "Adolescent Gynecology & Menopause — Mechanism",
        estimatedMinutes: 25,
        summary: "Hormonal basis of puberty, ovarian failure, and menopausal pathophysiology.",
        contentMd: `# Adolescent Gynecology & Menopause — Mechanism

## Puberty Physiology
### HPO Axis Activation
- Childhood: GnRH pulse generator is dormant (GABAergic inhibition)
- Puberty onset: Kisspeptin neurons in arcuate nucleus activate GnRH pulse generator
- Kisspeptin → GnRH → FSH/LH → ovarian estrogen production
- Critical body fat mass: ~17% needed for menarche onset (Frisch hypothesis)
- Leptin (from adipose tissue) acts as permissive signal for puberty

### Adrenarche
- Separate from gonadarche (HPO axis activation)
- DHEA-S from adrenal zona reticularis → pubic/axillary hair
- Begins age 6–8, precedes gonadarche by ~2 years
- Mechanism of adrenarche still incompletely understood

## Pathophysiology of Premature Ovarian Insufficiency (POI)
- Accelerated follicular atresia or destruction
- Causes:
  - **Genetic**: Turner syndrome, FMR1 premutation (Fragile X carrier), galactosemia
  - **Autoimmune**: Anti-ovarian antibodies (associated with thyroid disease, Addison's)
  - **Iatrogenic**: Chemotherapy (alkylating agents), pelvic radiation
  - **Idiopathic**: Most common (>50% of cases)
- Results in: Low estradiol, high FSH (>40 mIU/mL on two occasions, 4 weeks apart)

## Menopause Endocrinology
### Hormonal Changes
- **Ovarian reserve depletes**: Inhibin B falls → FSH rises (earliest marker)
- **Estrogen**: Initially fluctuates (can be HIGH in perimenopause) → eventually falls
- **FSH**: Rises (>40 mIU/mL is diagnostic in menopausal context)
- **LH**: Rises (but less than FSH → FSH:LH ratio reverses compared to reproductive years)
- **Androstenedione**: Continues from adrenal + residual ovarian stroma
- **Estrone**: Becomes the dominant estrogen (from peripheral conversion of androstenedione in adipose tissue)

### Hot Flush Mechanism
- Narrowing of the thermoneutral zone in hypothalamus
- Mediated by neurokinin B (NKB) and kisspeptin neurons in KNDy system
- Norepinephrine and serotonin fluctuations contribute
- Core temperature rises → vasodilation → sweating → heat dissipation
- New understanding: NK3 receptor antagonists (fezolinetant) target this pathway

### Bone Loss Mechanism
- Estrogen deficiency → increased RANKL, decreased OPG → osteoclast activation
- Rapid bone loss phase: 2–3% per year for first 5–7 years after menopause
- Slow phase: 0.5–1% per year thereafter
- Trabecular bone affected first (spine > hip)`,
        mnemonics: ["Menopause hormones: 'FSH First to rise, Estrone dominant Estrogen' (F for First, E for Estrone)"],
        keyPoints: ["Kisspeptin activates GnRH pulse generator at puberty", "POI: FSH >40 on two occasions 4 weeks apart", "FSH is earliest marker of declining ovarian reserve", "Estrone (not estradiol) is dominant estrogen in menopause", "Rapid bone loss: 2-3% per year for first 5-7 years"],
        textbookRefs: ["DC Dutta Gynecology Ch 5, 7, 8", "Speroff's Clinical Gynecologic Endocrinology Ch 14"],
      },
      {
        layer: 3,
        slug: "adolescent-gyn-menopause-clinical",
        title: "Adolescent Gynecology & Menopause — Clinical Application",
        estimatedMinutes: 25,
        summary: "Investigation and management of puberty disorders, POI, and menopausal symptoms.",
        contentMd: `# Adolescent Gynecology & Menopause — Clinical Application

## Evaluation of Precocious Puberty
1. Tanner staging
2. Bone age (X-ray left hand) — advanced in true precocious puberty
3. GnRH stimulation test: LH rise = central; no rise = peripheral
4. Serum estradiol, FSH, LH, DHEA-S, 17-OHP
5. MRI brain (if central — rule out CNS lesion)
6. Pelvic ultrasound (ovarian cysts/tumors)

**Treatment**: GnRH agonist (leuprolide depot monthly) for central precocious puberty → suppresses HPO axis until appropriate age

## Evaluation of Primary Amenorrhea
- Step 1: Assess for breast development (estrogen marker) and uterus (USG)
- Step 2: Karyotype if indicated (Turner, AIS)
- Step 3: FSH/LH levels
  - High FSH → gonadal failure (Turner, POI)
  - Low FSH → hypothalamic/pituitary cause (Kallmann, tumor)
  - Normal + no uterus + 46,XY → AIS
  - Normal + no uterus + 46,XX → MRKH

## Imperforate Hymen Management
- Presentation: Cyclic abdominal pain at expected menarche, bulging bluish membrane
- Hematocolpos → hematometra → hematosalpinx (if untreated)
- Treatment: Cruciate incision (cross-shaped) under anesthesia
- NOT a simple puncture (risk of re-closure)

## Menopause Management

### Hormone Replacement Therapy (HRT)
**Indications**: Moderate-severe vasomotor symptoms, genitourinary syndrome, POI

| Patient | Regimen |
|---------|---------|
| With uterus | Estrogen + Progesterone (combined) |
| Without uterus | Estrogen alone |
| POI | HRT until average menopausal age (50) |

**Routes**: Oral, transdermal patch, vaginal ring/cream
- Transdermal preferred in: obesity, hypertriglyceridemia, migraine, DVT risk

**Contraindications**: Breast cancer, active thromboembolic disease, liver disease, unexplained vaginal bleeding, endometrial cancer

**WHI Study Key Findings**:
- CEE + MPA: Increased breast cancer, DVT, stroke; decreased hip fractures, colorectal cancer
- CEE alone: No increased breast cancer risk; mild stroke risk increase
- Current practice: Lowest effective dose, shortest duration, individualized

### Non-Hormonal Options
- **SSRIs/SNRIs**: Paroxetine (only FDA-approved for hot flushes), venlafaxine
- **Fezolinetant**: NK3 receptor antagonist — new targeted therapy for vasomotor symptoms
- **Clonidine**: Second-line for hot flushes
- **Vaginal moisturizers**: For genitourinary syndrome
- **Bisphosphonates**: For osteoporosis prevention

### Osteoporosis Prevention
- DEXA scan: T-score ≤-2.5 = osteoporosis; -1 to -2.5 = osteopenia
- Weight-bearing exercise, calcium 1200 mg/day, vitamin D 800 IU
- Bisphosphonates (alendronate, zoledronic acid) for established osteoporosis
- Raloxifene (SERM): Prevents spine fractures, reduces breast cancer risk

## Indian Context
- Average menopause age 47 years (earlier than Western countries)
- High prevalence of osteoporosis in Indian women due to low calcium intake, vitamin D deficiency
- Cultural silence around menopause → underreporting of symptoms
- Rashtriya Kishor Swasthya Karyakram (RKSK): National adolescent health program addressing puberty education`,
        mnemonics: ["HRT rule: 'E alone for No uterus, EP together if uterus Present' (E=Estrogen, P=Progesterone)"],
        keyPoints: ["GnRH stimulation test differentiates central from peripheral precocious puberty", "Imperforate hymen: cruciate incision (not simple puncture)", "HRT: combined E+P if uterus present; E alone if absent", "Transdermal HRT preferred with DVT risk factors", "DEXA T-score ≤-2.5 = osteoporosis"],
        textbookRefs: ["DC Dutta Gynecology Ch 5, 7, 8", "Shaw's Textbook Ch 6, 28", "FOGSI Menopause Guidelines"],
      },
      {
        layer: 4,
        slug: "adolescent-gyn-menopause-exam",
        title: "Adolescent Gynecology & Menopause — Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points for adolescent gynecology and menopause.",
        contentMd: `# Adolescent Gynecology & Menopause — Exam Prep

## NEXT High-Yield Points
1. **First sign of puberty in girls**: Thelarche (NOT menarche)
2. **Precocious puberty cutoff**: <8 years in girls
3. **Most common cause of central precocious puberty in girls**: Idiopathic
4. **GnRH agonist (leuprolide)**: Treatment for central precocious puberty (initial stimulation, then suppression)
5. **Kallmann syndrome**: Anosmia + hypogonadotropic hypogonadism (GnRH deficiency)
6. **Turner syndrome karyotype**: 45,XO — most common cause of primary amenorrhea with high FSH
7. **MRKH**: 46,XX, normal secondary sexual characteristics, absent uterus and upper vagina
8. **AIS**: 46,XY, phenotypic female, absent uterus, breast development present, no pubic/axillary hair
9. **WHI finding**: Combined HRT increases breast cancer; estrogen-alone does NOT
10. **Earliest marker of menopause**: Rising FSH (due to falling inhibin B)

## Common NEXT Traps
- In AIS, breast development IS present (due to peripheral aromatization) — but no pubic hair (no androgen action)
- MRKH vs AIS: Both have absent uterus. Difference: MRKH is 46,XX with normal pubic hair; AIS is 46,XY with absent pubic hair
- GnRH agonist initially STIMULATES before suppressing (flare effect) — don't confuse with antagonist
- Raloxifene: SERM that helps bone but does NOT treat hot flushes (may worsen them)
- Perimenopause: estrogen can be HIGH (not always low) → irregular heavy periods

## Key Comparisons
| Feature | Turner | MRKH | AIS |
|---------|--------|------|-----|
| Karyotype | 45,XO | 46,XX | 46,XY |
| Breasts | Absent/infantile | Present | Present |
| Uterus | Streak gonads, infantile | Absent | Absent |
| Pubic hair | Present | Present | Absent/sparse |
| FSH | High | Normal | High LH |
| Gonads | Streak | Normal ovaries | Intra-abdominal testes |`,
        mnemonics: ["MRKH vs AIS: 'MRKH has XX and hair; AIS has XY and no hair'"],
        keyPoints: ["Thelarche = first sign of puberty", "Turner 45,XO: streak gonads, high FSH", "AIS 46,XY: breast+ but no pubic hair, no uterus", "Combined HRT increases breast cancer; E-alone does not", "Raloxifene helps bone but worsens hot flushes"],
        textbookRefs: ["DC Dutta Gynecology Ch 5, 7, 8", "Shaw's Textbook Ch 6, 28"],
      },
      {
        layer: 5,
        slug: "adolescent-gyn-menopause-recall",
        title: "Adolescent Gynecology & Menopause — Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for rapid revision of adolescent gynecology and menopause.",
        contentMd: `# Adolescent Gynecology & Menopause — Active Recall

**Q: What is the first sign of puberty in girls?**
A: Thelarche (breast development)

**Q: At what age is puberty considered precocious in girls?**
A: Before age 8

**Q: What test differentiates central from peripheral precocious puberty?**
A: GnRH stimulation test (LH rise = central, no rise = peripheral)

**Q: What is Kallmann syndrome?**
A: Hypogonadotropic hypogonadism + anosmia (GnRH neuron migration failure)

**Q: A 16-year-old girl with primary amenorrhea, breast development, absent uterus, and 46,XX karyotype — diagnosis?**
A: MRKH syndrome (Müllerian agenesis)

**Q: A 16-year-old with primary amenorrhea, breast development, absent uterus, 46,XY, and absent pubic hair — diagnosis?**
A: Complete Androgen Insensitivity Syndrome (AIS)

**Q: What is the karyotype in Turner syndrome?**
A: 45,XO

**Q: What is the earliest hormonal change in menopause transition?**
A: Rise in FSH (due to falling inhibin B)

**Q: What is the dominant estrogen after menopause?**
A: Estrone (from peripheral conversion of androstenedione in adipose tissue)

**Q: When is combined E+P given in HRT and when E alone?**
A: E+P if uterus is present (progesterone protects endometrium); E alone if no uterus (hysterectomy)

**Q: What was the key finding of the WHI study regarding breast cancer?**
A: Combined E+P increased breast cancer risk; estrogen-alone did NOT.

**Q: What is the T-score cutoff for osteoporosis on DEXA?**
A: ≤ -2.5`,
        mnemonics: ["Turner-MRKH-AIS: 'TOMAto' — Turner=O(X), MRKH=XX+hair, AIS=XY-hair"],
        keyPoints: ["Thelarche first, GnRH stim test differentiates", "Kallmann = anosmia + hypogonadotropic", "MRKH 46XX vs AIS 46XY (pubic hair present vs absent)", "FSH rises first in menopause", "WHI: combined HRT → breast cancer, E-alone → no increase"],
        textbookRefs: ["DC Dutta Gynecology Ch 5, 7, 8"],
      },
    ],
  },
];
