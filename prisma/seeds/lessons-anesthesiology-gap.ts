import type { TopicLessons } from "./content-loader";

export const anesthesiologyGapLessons: TopicLessons[] = [
  {
    topicCode: "AS-MOD-04-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "fluid-electrolyte-icu-foundation",
        title: "Fluid & Electrolyte Management in ICU - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of fluid physiology, body compartments, fluid types, electrolyte distribution, and ICU fluid management principles in critical care.",
        contentMd: `# Fluid & Electrolyte Management in ICU - Foundation

## Body Fluid Compartments

### Total Body Water (TBW)
- **Adult**: 60% body weight (50-70% depending on age/fat)
- **Elderly**: 45-50% (increased fat, reduced water)
- **Obese**: 50-55% (adipose tissue hydrophobic)

### Compartment Distribution
- **Intracellular (ICF)**: 40% body weight (2/3 TBW)
- **Extracellular (ECF)**: 20% body weight (1/3 TBW)
  - **Plasma**: 5% body weight (1/4 ECF, ~3.5L adult)
  - **Interstitial**: 15% body weight (3/4 ECF, ~10.5L adult)

### Key Electrolytes

**Intracellular**:
- K+ (140 mEq/L), Mg2+ (40 mEq/L), PO4 (150 mEq/L)

**Extracellular**:
- Na+ (140 mEq/L), Cl- (103 mEq/L), HCO3- (24 mEq/L)

## Fluid Types in ICU

### Crystalloids
- **0.9% NaCl (Normal Saline)**: 154 mEq Na, 154 mEq Cl, osmolality 308
- **Lactated Ringer (LR)**: 130 Na, 109 Cl, 4 K, 3 Ca, 28 lactate, osmolality 273
- **5% Dextrose in Water**: 50 g/L glucose, osmolality 252
- **Distribution**: 25% stays intravascular, 75% goes interstitial (crystalloid effect)

### Colloids
- **Albumin 5%**: Plasma expander, expensive
- **Fresh Frozen Plasma (FFP)**: Coagulation factors
- **Packed RBC**: Oxygen carrying capacity
- **Distribution**: 75% intravascular, sustained

## ICU Fluid Physiology

### Starling Forces (microvascular)
- **Filtration**: Hydrostatic pressure pushes OUT
- **Reabsorption**: Colloid osmotic (oncotic) pressure pulls IN
- **Net fluid shift**: Depends on balance

### Capillary Leak Syndrome (Critical Illness)
- Inflammation → vascular permeability ↑
- Albumin, proteins leak to interstitium
- Edema develops despite adequate resuscitation
- Common in sepsis, ARDS, pancreatitis

## Basic ICU Principles
- Assess fluid status: CVP, PCWP, lactate, urine output
- Resuscitate early in sepsis/shock (first 3 hours)
- Avoid excess fluid (increases mortality in ARDS)
- Balance titration: adequate perfusion + minimal edema`,
        mnemonics: [
          { text: "60-40-20 rule: TBW 60%, ICF 40%, ECF 20% of body weight", explanation: "Basic compartment memory" },
          { text: "2/3 ICF, 1/3 ECF: intracellular has 2× volume of extracellular", explanation: "Compartment ratio" },
          { text: "0.9 NaCl = Normal Saline = 154 Na 154 Cl = hyperchloremic acidosis risk", explanation: "Saline electrolytes" },
          { text: "LR = Lactated Ringer = better balanced = avoids hyperchloremia", explanation: "Balanced crystalloid" },
          { text: "Crystalloid 25% stays, 75% leaves = poor intravascular retention", explanation: "Crystalloid distribution" },
          { text: "Starling = Hydrostatic OUT vs Oncotic IN = capillary equilibrium", explanation: "Fluid dynamics" }
        ],
        keyPoints: [
          "TBW = 60% body weight; ICF 40%, ECF 20% body weight",
          "Crystalloids poorly retained (25% intravascular); require larger volumes",
          "Capillary leak syndrome in critical illness increases interstitial edema risk",
          "LR preferred over normal saline (balanced composition)",
          "Starling forces determine fluid shift between intravascular and interstitial",
          "Early resuscitation critical in sepsis; fluid restriction in ARDS"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Fluid Balance and Electrolyte Management", edition: "14th" },
          { book: "Critical Care Medicine: Principles of Diagnosis and Management", chapter: "Fluid and Electrolyte Management", edition: "5th" }
        ]
      },
      {
        layer: 2,
        slug: "fluid-electrolyte-icu-mechanism",
        title: "Fluid & Electrolyte Management in ICU - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathophysiology of electrolyte imbalances, acid-base disorders, mechanisms of hyponatremia/hypernatremia, hypokalemia/hyperkalemia, and compensation mechanisms.",
        contentMd: `# Fluid & Electrolyte Management in ICU - Mechanism

## Hyponatremia (Na+ <135 mEq/L)

### Types by ECF Volume

**Hypovolemic Hyponatremia**:
- Low total body Na, lower total body water
- Mechanism: Losses (renal/GI) > fluid intake
- Example: Diuretic overuse, vomiting, diarrhea
- Treatment: 0.9% NaCl to restore ECF

**Euvolemic Hyponatremia** (most common ICU):
- Normal total body Na, excess TBW
- Mechanism: SIADH, hypothyroidism, adrenal insufficiency
- Example: Post-op, pneumonia, CNS disease
- Treatment: Fluid restriction (500mL/day)

**Hypervolemic Hyponatremia**:
- High total body Na, higher TBW (but Na increases more)
- Mechanism: Impaired free water excretion
- Example: Cirrhosis, heart failure, renal failure
- Treatment: Diuretics + fluid restriction

### Symptoms
- Mild (>125): Nausea, headache, confusion
- Severe (<120): Seizures, coma, cerebral edema, death

### Correction Rate
- **Chronic**: Correct slowly 4-6 mEq/24hr (risk osmotic demyelination)
- **Acute** (<48hr): Can correct faster 10-12 mEq/24hr
- **Formula**: Na deficit = 0.6 × BW × (desired Na - actual Na)

## Hypernatremia (Na+ >145 mEq/L)

### Mechanism
- Pure water loss (insensible, diabetes insipidus)
- Or excess Na intake (hypertonic saline, tube feeds)
- Always associated with hypertonicity, cellular dehydration

### Common ICU Causes
- Inadequate hypotonic fluid replacement in ICU (fever, ventilation)
- Diabetes insipidus (head trauma, neurosurgery)
- Hypertonic saline administration

### Symptoms
- Thirst, restlessness, irritability
- Confusion, seizures (cerebral dehydration)

### Correction
- Slow correction 8-10 mEq/24hr (risk of cerebral edema)
- Free water replacement (D5W, hypotonic fluids)
- Treat underlying cause (desmopressin for DI)

## Hypokalemia (K+ <3.5 mEq/L)

### Causes
- **Renal loss**: Diuretics, vomiting (metabolic alkalosis), diarrhea
- **Shift into cells**: Alkalosis, catecholamines, insulin
- **Poor intake**: TPN without adequate K+

### Clinical Effects
- Arrhythmias (PVCs, atrial fibrillation, torsades)
- Muscle weakness, paralytic ileus
- Risk: Peaked T waves on EKG

### Treatment
- IV KCl 10-20 mEq diluted in NS/LR
- Max: 40 mEq/hr via central line (pain risk peripherally)
- Monitor EKG, repeat K+ q2-4hr

## Hyperkalemia (K+ >5.5 mEq/L)

### Causes
- **Renal failure** (most common ICU)
- Rhabdomyolysis, tumor lysis, hemolysis (K+ release)
- Acidosis (K+ shifts out of cells)
- Medications: ACE-I, spironolactone, NSAIDs

### Clinical Effects
- Peaked T waves, prolonged QRS, tall peaked T waves
- Bradycardia, conduction block
- Risk: Ventricular fibrillation

### Treatment
- **Antagonize cardiac effects**: Calcium gluconate 10% 10-20mL IV (protective, onset 1-3 min)
- **Shift K+ into cells**: Insulin 10 units + dextrose 25g IV (onset 10-15 min, lasts 4-6hr)
- **Remove K+**: Diuretics (if fluid tolerant), cation exchangers
- Monitor EKG continuously

## Acid-Base Disorders

### Metabolic Acidosis
- pH <7.35, HCO3- <22
- **Causes**: Sepsis, lactic acidosis, DKA, renal failure
- **Anion gap metabolic acidosis**: High AG (lactate, ketones, unmeasured acids)
- **Non-anion gap**: Normal AG (diarrhea, renal tubular acidosis)
- **Treatment**: Treat underlying cause; sodium bicarbonate if pH <7.15 and cardiovascular instability

### Respiratory Acidosis
- pH <7.35, PaCO2 >50
- **Causes**: Hypoventilation (oversedation, paralysis, COPD exacerbation)
- **ICU context**: Ventilator malfunction, inadequate minute ventilation
- **Treatment**: Increase ventilation, reduce sedation/paralysis

### Metabolic Alkalosis
- pH >7.45, HCO3- >26
- **Common ICU**: Loop diuretic use, vomiting, NG tube suction
- **Pathophysiology**: Hypochloremia + hypokalemia perpetuate (alkalosis maintains)
- **Treatment**: Fluid repletion with NaCl + KCl, reduce diuretics

### Respiratory Alkalosis
- pH >7.45, PaCO2 <35
- **Causes**: Hyperventilation (sepsis, PE, anxiety)
- **ICU**: Mechanical overventilation, septic response
- **Treatment**: Reduce minute ventilation, treat underlying cause`,
        mnemonics: [
          { text: "HYPONATREMIA types = HVL (hypovolemic) / EUV (euvolemic=SIADH) / HVL (hypervolemic)", explanation: "Classification by ECF status" },
          { text: "Hyponatremia correction = SLOW 4-6 mEq/24hr unless acute (10-12 mEq)", explanation: "Rate limits osmotic demyelination" },
          { text: "Hyperkalemia peaked T-waves = STAT calcium gluconate 10mL IV = cardiac protection", explanation: "Emergency membrane stabilization" },
          { text: "HYPO-K shifts with ALKALOSIS (K out of cells); HYPER-K with ACIDOSIS (K out)", explanation: "Acid-base-K relationship" },
          { text: "ANION GAP = Na - (Cl + HCO3) = normal 8-12 = high gap = organic acids", explanation: "AG metabolic acidosis" },
          { text: "RESPIRATORY ACIDOSIS = retaining CO2 = ventilation problem = increase RR", explanation: "Hypoventilation response" }
        ],
        keyPoints: [
          "Hyponatremia: identify type (hypovolemic/euvolemic/hypervolemic) before treatment",
          "Chronic hyponatremia correction slow (4-6 mEq/24hr) to avoid osmotic demyelination",
          "Hyperkalemia: EKG peaked T waves require STAT calcium gluconate for cardiac protection",
          "Hypokalemia risk: arrhythmias, worse if hypomagnesemia present (replace both)",
          "Acid-base: always interpret with electrolytes and anion gap",
          "Metabolic alkalosis perpetuated by Cl- and K+ depletion; must replace both",
          "Respiratory disorders: hypoventilation (acidosis), hyperventilation (alkalosis)"
        ],
        textbookRefs: [
          { book: "Fluid, Electrolyte, and Acid-Base Disorders", chapter: "Clinical Disorders", edition: "4th" },
          { book: "Critical Care Medicine: Principles of Diagnosis and Management", chapter: "Electrolyte Abnormalities", edition: "5th" }
        ]
      },
      {
        layer: 3,
        slug: "fluid-electrolyte-icu-clinical",
        title: "Fluid & Electrolyte Management in ICU - Clinical",
        estimatedMinutes: 25,
        summary: "ICU-specific fluid management protocols, monitoring parameters, resuscitation strategies in sepsis/shock, and Indian practice guidelines.",
        contentMd: `# Fluid & Electrolyte Management in ICU - Clinical

## ICU Fluid Assessment

### Clinical Markers
- **Intravascular volume**: JVD, CVP, PCWP, response to fluid challenge
- **Perfusion**: Lactate (normal <2 mmol/L), base deficit, urine output
- **Edema**: Peripheral edema, ascites, pulmonary edema on CXR

### Monitoring Parameters
- **CVP goal**: 8-12 cmH2O (central line)
- **Urine output**: >0.5 mL/kg/hr (adequate perfusion)
- **Lactate clearance**: Should decrease >10% per hour with treatment
- **PCWP goal**: 18-25 mmHg if PA catheter available

### Newer Parameters
- **Stroke volume variation (SVV)**: Assess fluid responsiveness
- **Passive leg raise test**: Transiently raises preload; >10% CO increase = fluid responsive
- **Bedside ultrasound**: IVC diameter + collapsibility

## Sepsis Resuscitation Protocol (India Sepsis Alliance/SCCM)

### First 3 Hours (Golden Hours)
1. **Lactate**: Measure immediately
2. **Fluid bolus**: 30 mL/kg crystalloid IV over first hour
   - Use LR preferred; 0.9% NaCl acceptable
   - Target: Mean arterial pressure ≥65 mmHg
3. **Reassess**: If lactate >4 or persistent hypotension → vasopressor (noradrenaline 0.05-0.5 mcg/kg/min)

### Subsequent Management
- **Lactate-guided**: Repeat lactate q6h initially
- **Maintenance + ongoing losses**: Typically 1-1.5 L/day crystalloid after initial bolus
- **Reassess volume status**: Avoid fluid overload (increases mortality in sepsis)

## Shock-Specific Fluid Management

### Hypovolemic Shock
- **Cause**: Hemorrhage, severe dehydration
- **Treatment**: Aggressive fluid resuscitation (0.9% NaCl or LR)
- **Goal**: CVP 8-12, lactate <2, urine output >0.5 mL/kg/hr

### Cardiogenic Shock
- **Cause**: MI, heart failure
- **Fluid caution**: Small fluid boluses (250-500mL)
- **Goal**: Optimize preload without pulmonary edema
- **Adjunct**: Inotropes (dobutamine), diuretics (furosemide) if volume overloaded

### Distributive Shock (Sepsis)
- **Large fluid resuscitation**: 30 mL/kg first hour
- **Vasopressors**: Noradrenaline goal MAP ≥65
- **Reassess at 3, 6 hours**: Monitor lactate trend
- **Avoid excess**: Stop fluid if improving and edema develops

### Obstructive Shock (PE, pneumothorax)
- **Minimal fluids**: Risk of RV distension
- **Definitive treatment**: Thrombolysis (PE), chest decompression (tension PTX)

## Indian ICU Practice Context

### Available Resources
- Limited IABP/ECMO availability
- Central lines common; PCWP less available
- Lactate measurement increasing but not everywhere
- Simple CVP monitoring + clinical assessment main stay

### Electrolyte-Specific Management (India)

**Hypokalemia**:
- Common post-surgery, with diuretics
- KCl 20-40 mEq IV slowly; monitor arrhythmias
- Encourage oral intake when able (fruit, electrolyte solutions)

**Hyperkalemia**:
- Renal failure prevalence (endemic acute kidney injury)
- Cation exchangers (calcium polystyrene sulfonate) via NG tube
- Restrict dietary K+; aggressive fluid management

**Hyponatremia**:
- Post-op SIADH common
- Fluid restriction first-line for euvolemic
- Monitor correction rate carefully

## Maintenance Fluid Prescriptions

### Basic Maintenance (Holliday-Segar)
- **First 10 kg**: 4 mL/kg/hr
- **Second 10 kg**: 2 mL/kg/hr
- **Each additional kg**: 1 mL/kg/hr
- **Add**: Insensible losses (fever, ventilation) 500 mL/day per degree above 37°C

### Composition (Typical India)
- **Dextrose**: 50-100 mL of 5% (100-200 kcal/day)
- **Sodium**: 1 mEq/kg/day (0.9% NaCl or LR provides)
- **Potassium**: 20-40 mEq/day (add after urine output confirmed)

### Ongoing Loss Replacement
- **GI losses**: NG tube 200-300 mL/hr → replace 1:1 with LR or 0.45% NaCl + 20 KCl
- **Diarrhea**: Large volumes → fluid restriction + electrolyte replacement
- **Fever**: Add 500 mL/day per degree C above 37°C

## Special Situations

### ARDS Fluid Management
- **Conservative approach**: Lower PEEP, lower tidal volumes, fluid restriction
- **Goal**: Euvolemia (not hypovolemia); minimize edema
- **Strategy**: Furosemide 0.5-1 mg/kg q6h if volume overloaded

### Liver Failure
- **Caution**: Risk ascites, encephalopathy with excess Na
- **Strategy**: Fluid restriction 800-1000 mL/day if hyponatremic
- **Albumin**: May use if hypoalbuminemia + ascites (expensive)

### Renal Failure (AKI/CKD)
- **Fluid restriction**: 400-500 mL/day + urine output
- **Hyperkalemia risk**: Restrict K+ intake, monitor closely
- **Avoid**: Potassium-sparing agents (ACE-I, spironolactone)`,
        mnemonics: [
          { text: "SEPSIS resuscitation = 30 mL/kg first hour + lactate measurement = golden hour", explanation: "Protocol timing critical" },
          { text: "Fluid bolus response = CVP ↑ 2-3 = fluid responsive, continue; ↑ 5 + no improvement = stop", explanation: "CVP response interpretation" },
          { text: "ARDS fluid conservative = minimize edema = better outcomes = avoid overload", explanation: "ARDS-specific strategy" },
          { text: "Maintenance = 4-2-1 rule (first 10kg 4mL/kg, second 10kg 2mL, rest 1mL/kg/hr)", explanation: "Pediatric/adult maintenance formula" },
          { text: "GI losses replace 1:1 with LR (electrolyte composition closer to GI fluid)", explanation: "Loss replacement logic" },
          { text: "LIVER FAILURE = fluid restrict + avoid Na = prevent ascites worsening", explanation: "Cirrhosis fluid strategy" }
        ],
        keyPoints: [
          "Sepsis: early 30 mL/kg fluid bolus in first hour critical for outcomes",
          "Lactate-guided resuscitation: repeat q6h, target clearance >10% per hour",
          "CVP-guided fluid: 2-3 cmH2O rise = responsive; >5 cmH2O = stop and reassess",
          "ARDS: conservative fluid management reduces mortality vs liberal",
          "Maintenance: 4-2-1 rule; add insensible losses (fever, ventilation)",
          "GI losses: replace 1:1 with balanced crystalloid (LR preferred)",
          "Electrolyte replacement: address K+, Na+, Cl- deficits concurrently"
        ],
        textbookRefs: [
          { book: "Surviving Sepsis Campaign Guidelines", chapter: "Fluid Resuscitation", edition: "2021" },
          { book: "Indian Sepsis Alliance Guidelines", chapter: "Sepsis Management in Resource-Limited Settings", edition: "2020" },
          { book: "Critical Care Medicine: Principles of Diagnosis and Management", chapter: "Fluid Resuscitation Strategies", edition: "5th" }
        ]
      },
      {
        layer: 4,
        slug: "fluid-electrolyte-icu-exam-prep",
        title: "Fluid & Electrolyte Management in ICU - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield formulas, comparison tables, common exam questions, electrolyte calculation tricks, and ICU protocols summary.",
        contentMd: `# Fluid & Electrolyte Management in ICU - Exam Prep

## Quick Reference Tables

### Electrolyte Abnormalities: Causes & Treatment

| Abnormality | Cause | Treatment |
|-------------|-------|-----------|
| Hyponatremia (Na <135) | SIADH, diuretics, vomiting | Fluid restrict (euvolemic); 0.9% NaCl (hypovolemic) |
| Hypernatremia (Na >145) | Insensible loss, DI, hypertonic saline | Free water (D5W, hypotonic); desmopressin (DI) |
| Hypokalemia (K <3.5) | Diuretics, vomiting, alkalosis | KCl 10-20 mEq IV slowly; monitor EKG |
| Hyperkalemia (K >5.5) | Renal failure, rhabdo, acidosis | Calcium gluconate (stat), insulin+dex, diuretics |
| Hypomagnesemia | Diuretics, diarrhea | MgSO4 1-2g IV over 15-30 min |
| Hypophosphatemia | Renal wasting, malnutrition | Phosphate replacement (caution hyperkalemia) |

### Acid-Base Disorders: Quick ID

| Type | pH | PaCO2 | HCO3 | Example |
|------|-----|-------|------|---------|
| Metabolic Acidosis | ↓ | ↓ (resp comp) | ↓ | Sepsis, DKA |
| Metabolic Alkalosis | ↑ | ↑ (resp comp) | ↑ | Vomiting, loop diuretics |
| Respiratory Acidosis | ↓ | ↑ | ↑ (renal comp) | Hypoventilation |
| Respiratory Alkalosis | ↑ | ↓ | ↓ (renal comp) | Hyperventilation |

## High-Yield Formulas

### Anion Gap (AG)
**Formula**: AG = Na - (Cl + HCO3)
- Normal: 8-12 mEq/L
- **High AG acidosis**: Lactate, ketones, unmeasured organic acids
- **Normal AG acidosis**: Diarrheal loss, RTA

### Osmolarity
**Formula**: Osm = 2(Na) + glucose/18 + BUN/2.8
- Normal: 285-295 mOsm/L
- Hyperosmoic >295: dehydration, DKA
- Hypoosmotic <285: hyponatremia, SIADH

### Serum Osmolar Gap
**Formula**: Measured osm - calculated osm
- <10: Normal (no unmeasured osmoles)
- >10: Suggests alcohol, mannitol, methanol intoxication

### Sodium Deficit
**Formula**: Na deficit = 0.6 × BW(kg) × (desired Na - actual Na)
- Determine volume 0.9% NaCl needed to raise Na
- Example: 70kg, Na 120, target 130 → deficit = 0.6 × 70 × 10 = 420 mEq
- 0.9% NaCl = 154 mEq/L → 420/154 = 2.7L needed

### Anion Gap-Adjusted HCO3 (Delta-delta)
**Formula**: Expected HCO3 = 24 - AG + measured HCO3
- If calculated >measured: metabolic alkalosis co-exists
- If calculated <measured: metabolic acidosis co-exists

## Common Exam Questions

**Q: 35-year-old septic, lactate 6, MAP 55. First step?**
A: 30 mL/kg crystalloid bolus (0.9% NaCl or LR) over 1 hour → target MAP ≥65

**Q: Peaked T-waves on EKG, K+ 7. Immediate action?**
A: Calcium gluconate 10% 10-20mL IV (cardiac stabilization) → then insulin 10u + dextrose 25g

**Q: Na 120 mEq/L, euvolemic, asymptomatic. Treatment?**
A: Fluid restriction 500 mL/day (SIADH); correct slowly 4-6 mEq/24hr

**Q: Post-op confusion, Na 125, urine osmolality high. Diagnosis?**
A: SIADH (euvolemic hyponatremia); fluid restriction first-line

**Q: HCO3 18, PaCO2 35, AG 18. Co-morbidity?**
A: High AG metabolic acidosis + concurrent metabolic alkalosis (delta-delta shows elevated HCO3)

**Q: Respiratory failure, pH 7.20, PaCO2 70, HCO3 28. Disorder?**
A: Respiratory acidosis with renal compensation (HCO3 >24); increase ventilation

**Q: CVP 5, SBP 90, lactate 5. Fluid responsive?**
A: Yes (low CVP); give fluid bolus 500mL, recheck CVP + lactate

**Q: ARDS patient, CVP 18, crackles, edema. Management?**
A: Conservative fluid; furosemide 40-80mg IV → target euvolemia, reduce edema

## Critical Calculation Tips
- **Mg depletion common**: Check Mg if K+ refractory to replacement
- **Chloride matters**: Hypokalemic alkalosis needs both K+ and Cl- replacement
- **Lactate clearance >10%/hr**: Good prognostic indicator in sepsis
- **Temperature adds**: +500mL/day per degree C fever

## India-Specific Facts
- CVP target 8-12 cmH2O (central line basic monitoring)
- Lactate measurement increasing but not everywhere
- Crystalloids main fluid (colloids expensive)
- SIADH post-op very common in tropical infections
- Sepsis resuscitation = Surviving Sepsis + India Sepsis Alliance protocols`,
        mnemonics: [
          { text: "AG = Na - Cl - HCO3 = high AG = organic acids (lactate, ketones)", explanation: "Anion gap interpretation" },
          { text: "Peaked T + K7 = STAT Calcium gluconate = membrane stabilization FIRST", explanation: "Hyperkalemia emergency" },
          { text: "HYPONATREMIA correction = SLOW 4-6 mEq/24hr UNLESS acute = osmotic safety", explanation: "Correction rate critical" },
          { text: "SEPSIS = 30 mL/kg first hr = lactate monitoring = MAP ≥65 = vasopressor if needed", explanation: "Protocol sequence" },
          { text: "ARDS fluid conservative = lower mortality = euvolemia target = furosemide if overload", explanation: "ARDS strategy" },
          { text: "Delta-delta = expected HCO3 vs measured = detects co-morbid metabolic disorders", explanation: "Acid-base complexity detection" }
        ],
        keyPoints: [
          "Anion gap: high AG indicates organic acid accumulation (lactate, ketones)",
          "Sodium correction: slow rate (4-6 mEq/24hr) prevents osmotic demyelination",
          "Hyperkalemia EKG changes: peaked T-waves are danger sign, needs stat calcium gluconate",
          "Sepsis: 30 mL/kg bolus + lactate monitoring + vasopressors if hypotensive after fluids",
          "ARDS: conservative fluid strategy reduces mortality vs liberal",
          "Delta-delta identifies metabolic alkalosis/acidosis co-existing with primary process",
          "Magnesium: must replace if hypokalemia refractory to K+ supplementation"
        ],
        textbookRefs: [
          { book: "Pocket Medicine: The Massachusetts General Hospital Handbook of Internal Medicine", chapter: "Electrolytes", edition: "6th" },
          { book: "Critical Care Medicine: Principles of Diagnosis and Management", chapter: "Quick Reference Formulas", edition: "5th" }
        ]
      },
      {
        layer: 5,
        slug: "fluid-electrolyte-icu-active-recall",
        title: "Fluid & Electrolyte Management in ICU - Active Recall",
        estimatedMinutes: 10,
        summary: "10 clinical ICU scenarios: septic shock resuscitation, electrolyte emergencies, acid-base complexity, fluid management in organ failure.",
        contentMd: `# Fluid & Electrolyte Management in ICU - Active Recall

## Q1: Septic Shock Golden Hour
**Scenario**: 45-year-old with pneumonia, fever 39°C, SBP 85, HR 120, lactate 5.2. What fluid volume and type for first hour?

**Answer**: **30 mL/kg crystalloid**. For 70kg → 2.1L over 1 hour. **Type**: LR preferred (balanced composition avoids hyperchloremia); 0.9% NaCl acceptable. **Target**: MAP ≥65 mmHg, lactate clearance >10%/hr. **Reassess** at 30, 60 min; if still hypotensive after 30 mL/kg → start noradrenaline 0.05-0.5 mcg/kg/min (don't wait for "lactate to normalize" before vasopressor).

## Q2: Hyperkalemia with Peaked T-Waves
**Scenario**: 62-year-old acute renal failure, K+ 7.8, EKG shows peaked T-waves, wide QRS. What FIRST action?

**Answer**: **STAT Calcium gluconate 10% 10-20mL IV** (protects myocardium, prevents arrest). Onset 1-3 minutes. Followed immediately by **insulin 10 units IV + dextrose 25g IV** (shifts K+ into cells, onset 10-15 min, lasts 4-6hr). Then **furosemide 40-80mg IV** if volume tolerant. **Continuous EKG monitoring**. Note: Do NOT delay calcium while drawing labs; give empirically based on EKG.

## Q3: Hyponatremia Post-Surgery
**Scenario**: POD#1 confused patient, Na 125, euvolemic (normal JVD, CVP 10, urine osmolality 650). Diagnosis and treatment?

**Answer**: **SIADH (euvolemic hyponatremia)**. Likely post-op pain/stress → ADH release. **Treatment**: **Fluid restriction 500-800 mL/day** (first-line for euvolemic). Target correction **4-6 mEq/24hr** (slow to prevent osmotic demyelination). **Check**: Thyroid, adrenal function if persistent. **Recheck Na q12h** initially. Symptoms mild (confusion) → rate critical. If severe (<120 + seizures) → hypertonic 3% NaCl 1-2 mL/kg bolus BUT risk hyperchloremic acidosis.

## Q4: Hypokalemia Refractory
**Scenario**: Post-op patient, K+ 2.8, replaced with 40 mEq KCl IV, retested → K+ still 2.8. Why not working?

**Answer**: **Hypomagnesemia co-existence** (very common). Mg2+ required for K+ pump function; without Mg replacement, K+ stays low. **Check Mg** (likely <1.5). **Solution**: **MgSO4 2g IV over 15-30 min**, then recheck Mg + K+ in 2-4hr. Then resume K+ supplementation. **Pearl**: If K+ "refractory" always check Mg simultaneously. Also check alkalosis (↑ pH shifts K+ into cells); correct alkalosis + add Cl-.

## Q5: Respiratory Acidosis + Metabolic Process
**Scenario**: COPD patient on ventilator, ABG: pH 7.15, PaCO2 75, HCO3 24, AG 15. Diagnosis?

**Answer**: **Primary respiratory acidosis** (PaCO2 ↑, pH ↓) + **concurrent high AG metabolic acidosis** (AG 15, abnormal even with compensatory HCO3). Expected compensatory HCO3 with acute resp acidosis = 22-25; actual 24 = expected. BUT AG 15 suggests organic acid accumulation. **Causes**: (1) Respiratory failure causing CO2 retention, (2) Sepsis/shock causing lactic acidosis. **Management**: (1) Increase minute ventilation (RR ↑, Vt ↑), (2) Treat sepsis (fluids, antibiotics, lactate monitoring). **Check**: Lactate level directly.

## Q6: Hypertonic Saline Dilemma
**Scenario**: Severe hyponatremia Na 115 with altered mental status. Start 3% NaCl but EKG shows peaked T-waves. What happened?

**Answer**: **Hyperkalemia from hypertonic saline** (3% saline osmotically draws K+ out of cells). **Dual problem now**: Hyponatremia being corrected BUT iatrogenic hyperkalemia. **Management**: (1) **Calcium gluconate for cardiac protection**, (2) **Insulin + dextrose to shift K+ in**, (3) Slow hypertonic saline infusion (avoid rapid Na correction; target 10-12 mEq/24hr in acute), (4) Diuretics/RRT if available. **Lesson**: Hypertonic saline has complications; use only if symptomatic severe acute hyponatremia.

## Q7: Diarrheal Fluid Loss
**Scenario**: 50kg patient, severe cholera-like diarrhea 2L/hr, BP dropping, urine output minimal. What replacement strategy?

**Answer**: **Replace 1:1 with balanced crystalloid** (LR preferred for diarrheal composition). **Volume**: 2L diarrhea/hr → 2L LR/hr (roughly). **Electrolytes in diarrhea**: Na 40-60, K+ 20-30, Cl- 20-40, HCO3 30-40 → LR composition closer than 0.9% NaCl. **Add K+**: 20-40 mEq when urine output confirmed (avoid hyperkalemia initially). **Route**: IV bolus ongoing losses; if improving + able PO → ORS (oral rehydration solution) with electrolytes. **India context**: Cholera, infectious diarrhea common; LR (if available) better than saline for ongoing losses.

## Q8: ARDS Fluid Dilemma
**Scenario**: ARDS patient on ventilator, edematous, crackles throughout, CVP 16, appears euvolemic clinically but P/F ratio 150. Fluid strategy?

**Answer**: **Conservative fluid approach** proven better outcomes in ARDS (ARDSNet trial). Despite CVP 16, goal is **minimize edema**, not normalize CVP. **Strategy**: (1) **Furosemide 0.5-1 mg/kg q6h** (if tolerated without hypotension), (2) **Fluid restriction**: no resuscitation boluses unless septic shock, (3) **Reduced tidal volumes** (6 mL/kg IBW) + PEEP titration, (4) **Monitor urine output** (target just ≥0.5 mL/kg/hr). **Reassess**: If worsens → intubation, sedation; if improves → gradual diuresis. **Avoid**: Crystalloid boluses unless new shock (sepsis/hemorrhage).

## Q9: Liver Failure Electrolytes
**Scenario**: Cirrhotic with ascites, Na 130 (euvolemic), K+ 3.0, diuretics ongoing. What's the electrolyte pattern and management?

**Answer**: **Hyponatremia from SIADH + hypokalemia from diuretics + loss of renal perfusion**. Typical cirrhosis pattern. **Management**: (1) **Restrict Na** (not fluids per se; restrict dietary Na <2g/day + IV saline), (2) **Hold/reduce diuretics** (causing K+ loss), (3) **Add KCl** 20-40 mEq/day (monitor renal K+ excretion), (4) **Spironolactone preferred diuretic** (potassium-sparing, better electrolyte profile). (5) **Fluid restriction 800-1000 mL/day** if Na significantly low. **Albumin**: Consider if ascitic/SBP; expensive. **Pearl**: Cirrhosis needs balanced management avoiding both over/under-diuresis.

## Q10: Rhabdomyolysis Hyperkalemia
**Scenario**: 35-year-old crush injury, CK 50,000, K+ 7.5, creatinine 3, urine brown (myoglobin). Urgent interventions?

**Answer**: **MASSIVE hyperkalemia risk** from myoglobin release + renal failure. **Immediate**: (1) **Calcium gluconate STAT**, (2) **Insulin 10u + dextrose 25g IV**, (3) **Aggressive IV hydration** with non-K+ fluids (0.9% NaCl 500-1000 mL/hr target UOP 200-300 mL/hr) → dilute myoglobin, prevent precipitation, maintain renal perfusion, (4) **Sodium bicarbonate** 50-100 mEq in IV fluid (alkalinizes urine, prevents myoglobin crystal formation), (5) **Monitor K+ q2-4h**, (6) **Prepare for RRT** (dialysis likely needed given CK >40K + Cr ↑). **Avoid**: Potassium-sparing diuretics, NSAIDs. **Monitor**: CPK, Cr, UOP (goal >200 mL/hr), K+ trend. **India context**: Crush injuries common post-earthquakes/building collapse; early aggressive fluids critical.`,
        mnemonics: [
          { text: "SEPSIS golden hour = 30 mL/kg in 60 min = lactate monitor = MAP ≥65 mandatory", explanation: "Protocol timing and targets" },
          { text: "PEAKED T-WAVES = calcium gluconate FIRST = cardiac stabilization = STAT", explanation: "Hyperkalemia emergency priority" },
          { text: "HYPONATREMIA correction = 4-6 mEq/24hr = slow safety = osmotic demyelination risk", explanation: "Rate-limiting principle" },
          { text: "K-refractory = check Mg ALWAYS = Mg deficit prevents K uptake", explanation: "Magnesium connection" },
          { text: "ARDS fluid conservative = minimal edema = better lung mechanics = proven better outcomes", explanation: "Strategy benefits" },
          { text: "RHABDO hyperkalemia = aggressive fluids + bicarb + dialysis-ready = myoglobin precipitation risk", explanation: "Crush injury urgency" }
        ],
        keyPoints: [
          "Sepsis: 30 mL/kg bolus first hour non-negotiable; repeat lactate q6h",
          "Hyperkalemia peaked T-waves: calcium gluconate is cardiac protection, not K+ lowering",
          "Hyponatremia: identify type before treatment; slow correction prevents osmotic demyelination",
          "Hypokalemia refractory: always check hypomagnesemia concurrently; both need replacement",
          "Acid-base complexity: use delta-delta to identify metabolic disorder co-existing with respiratory",
          "ARDS: conservative fluid (furosemide, minimize boluses) proven mortality benefit",
          "Rhabdo: aggressive IV hydration + bicarbonate to prevent myoglobin precipitation + renal failure"
        ],
        textbookRefs: [
          { book: "Surviving Sepsis Campaign Guidelines 2021", chapter: "Resuscitation and Monitoring", edition: "2021" },
          { book: "Critical Care Medicine: Principles of Diagnosis and Management", chapter: "Clinical Scenarios in Fluid/Electrolyte", edition: "5th" }
        ]
      }
    ]
  },
  {
    topicCode: "AS-MOD-05-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "anesthesia-special-situations-foundation",
        title: "Anesthesia in Special Situations - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of anesthetic challenges in obstetrics, pediatrics, day care surgery, and emergency settings. Specific risks and modifications.",
        contentMd: `# Anesthesia in Special Situations - Foundation

## Obstetric Anesthesia Overview

### Physiologic Changes in Pregnancy
- **Airway**: Edema, engorgement, earlier gastric reflux (cricoid pressure critical)
- **Cardiovascular**: Aortocaval compression (supine → left lateral tilt ≥15°)
- **Respiratory**: ↓ FRC (functional residual capacity) → rapid desaturation
- **Gastric**: ↓ pH, ↑ volume → aspiration risk (NPO 6hrs solid, 2hrs clear fluid)

### Perimortem Conditions
- **Eclampsia**: Hypertension, seizures → magnesium sulfate, antihypertensives
- **HELLP**: Hemolysis, elevated liver enzymes, low platelets → thrombocytopenia anesthetic challenges
- **Abruption**: Massive hemorrhage → massive transfusion protocol, DIC monitoring
- **Amniotic fluid embolism**: Rare but catastrophic; cardiopulmonary resuscitation + supportive care

## Pediatric Anesthesia Overview

### Age-Specific Challenges

**Neonates (0-1 month)**:
- Apnea tendency (especially ex-premature <60 weeks post-conceptional age)
- Airway: Large occiput, prominent tongue, narrowest point subglottic
- Fluid: 70-80% body water; rapid dehydration risk
- Temperature: Hypothermia risk (small body, high SA:BW)

**Infants (1-12 months)**:
- Laryngeal position: High, anterior
- Airway patency: Obligate nasal breathing
- Maintenance fluids high: 10 mL/kg/hr (double adult per kg)

**Toddlers/Preschoolers (1-5 years)**:
- Psychological distress: Need anxiolytic premedication (midazolam 0.5 mg/kg oral)
- Cooperation limited; mask induction safe in young children
- Temperature regulation: Hypothermia still risk

**School-age/Adolescents (5+ years)**:
- Closer to adult physiology
- Psychology: Fear of induction; consider IV induction

### Anatomical Challenges
- **Airway**: Smaller tubes (uncuffed endotracheal tubes age <8yr)
- **Vascular**: Smaller veins; umbilical access in neonates if needed
- **Metabolism**: Increased drug metabolism (some agents); variable dosing

## Day Care Surgery Overview

### Patient Selection
- ASA I-II (minor systemic disease acceptable if controlled)
- Age typically 2-70 years
- Procedure duration <60 minutes (guidelines vary)
- No sleep apnea history or controlled mild OSA

### Special Considerations
- **Fasting**: Critical; aspiration risk
- **Recovery**: Must reach discharge criteria (Aldrete score ≥9)
- **Analgesia**: Multimodal essential (minimal opioids → nausea)
- **Social**: Support person for discharge mandatory
- **Distance**: ≤30 min from facility (delayed complications)

### Anesthetic Choices
- Propofol + remifentanil TIVA common
- Volatile with NO beneficial for rapid emergence
- Regional preferred when possible (reduce PONV)

## Emergency Anesthesia Overview

### Full Stomach Risk
- **Aspiration precautions**: Rapid sequence intubation (RSI)
- **Drugs**: Succinylcholine 1-1.5 mg/kg (fastest onset) OR rocuronium 1.2 mg/kg (if contraindication)
- **Cricoid pressure**: Sellick maneuver (controversial; safe practice current)

### Trauma Considerations
- **C-spine**: Immobilization; video laryngoscope helpful
- **Hemorrhage**: Massive transfusion protocol; warm fluids
- **TBI**: Avoid hypoxia/hypotension (secondary brain injury); propofol + succinylcholine acceptable if carefully titrated

### Sepsis/Infection
- **Delayed/difficult intubation**: Consider awake fiberoptic or video laryngoscopy
- **Hemodynamic instability**: Titrate induction agents (propofol ↓ BP significantly)

## Comparison Overview Table

| Setting | Key Challenge | Airway Risk | Fluid Loss | Positioning |
|---------|---------------|-----------|-----------|-----------|
| **Obstetric** | Aspiration, aortocaval compression | HIGH (edema, reflux) | Hemorrhage risk | Left lateral tilt |
| **Pediatric** | Temperature, dehydration | Variable by age | Rapid if NPO | Supine usual |
| **Day Care** | Recovery timing, PONV | Low (ASA I-II) | Minimal | Supine/prone |
| **Emergency** | Full stomach, shock | Variable | Massive hemorrhage | Trauma precautions |`,
        mnemonics: [
          { text: "PREGNANCY airway = edema + reflux + early saturation drop = cricoid pressure + left tilt", explanation: "Obstetric essentials" },
          { text: "PEDIATRIC airway = age <8yr uncuffed tubes, position high/anterior, obligate nose breathing neonates", explanation: "Age-specific anatomy" },
          { text: "DAYCARE = ASA I-II, <60 min, discharge criteria 9, support person must present", explanation: "Selection criteria" },
          { text: "EMERGENCY = full stomach = RSI = succinylcholine OR rocuronium = cricoid pressure", explanation: "RSI sequence" },
          { text: "NEONATAL apnea risk = ex-premature <60 weeks post-conceptual = avoid anesthesia <60 wks", explanation: "Apnea danger window" },
          { text: "AORTOCAVAL compression = left lateral tilt ≥15° = MAP restore = must do pregnant", explanation: "Obstetric positioning" }
        ],
        keyPoints: [
          "Obstetric: rapid airway edema, aspiration risk, aortocaval compression mandatory tilt",
          "Pediatric airway anatomy differs by age; neonatal apnea risk <60 weeks post-conceptional",
          "Pediatric maintenance fluids 10 mL/kg/hr (vs adult ~1.5-2 mL/kg/hr)",
          "Daycare surgery: strict ASA I-II criteria, discharge criteria Aldrete ≥9, mandatory support person",
          "Emergency: full stomach protocol RSI with cricoid pressure, consider delayed sequence intubation in shock",
          "Temperature: high hypothermia risk in peds <5years, neonates; warming mandatory"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Obstetric Anaesthesia", edition: "14th" },
          { book: "Pediatric Anesthesia: A Handbook", chapter: "Anesthetic Principles in Special Situations", edition: "3rd" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Day-Case Surgery and Emergency Anaesthesia", edition: "6th" }
        ]
      },
      {
        layer: 2,
        slug: "anesthesia-special-situations-mechanism",
        title: "Anesthesia in Special Situations - Mechanism",
        estimatedMinutes: 25,
        summary: "Physiologic mechanisms in obstetric emergencies, pediatric drug metabolism, day care recovery pharmacology, emergency airway physiology.",
        contentMd: `# Anesthesia in Special Situations - Mechanism

## Obstetric Emergency Pathophysiology

### Eclampsia/Pre-eclampsia
- **Endothelial dysfunction**: VEGF/PlGF imbalance → widespread capillary leak
- **Seizure mechanism**: Cerebral edema, hypertensive encephalopathy
- **Magnesium effect**: ↓ Cerebral irritability, vasodilation
- **Anesthetic implications**: Propofol SAFE, volatile acceptable; magnesium potentiates neuromuscular blockers (reduce doses)

### HELLP Syndrome Coagulopathy
- **Platelet consumption**: <50,000 → increased bleeding risk
- **Fibrinogen ↓**: <100 → consumptive coagulopathy
- **Management**: FFP, platelets available before induction; avoid spinal (platelet <50K contraindicated)

### Amniotic Fluid Embolism (AFE)
- **Pathophysiology**: Fetal squamous cells, vernix enter maternal circulation (rare ~1:30,000)
- **Phase 1 (min 0-10)**: Pulmonary hypertension, RV failure, hypoxia, hypotension
- **Phase 2 (min 10-60)**: Coagulopathy (consumption), hemorrhage
- **Anesthetic management**: Aggressive CPR, ECMO if available, treat DIC (platelets, FFP)

### Peripartum Cardiomyopathy
- **Mechanism**: Unknown (viral?, immune?, estrogen?); last trimester to 5 months post-partum window
- **Presentation**: Pulmonary edema, hypotension, arrhythmias
- **Induction caution**: Propofol ↓ preload significantly; etomidate preferred (vasodilation less)

## Pediatric Drug Metabolism

### Neonatal Clearance Changes
- **Immature phase I (CYP450)**: Reduced metabolism of propofol, volatile agents
- **Immature phase II (conjugation)**: Reduced clearance chloral hydrate, aspirin
- **Result**: Prolonged drug effect, dose reductions needed (mg/kg often lower than older children)

### Infant to Child Metabolism Shift
- **6 months to 3 years**: Metabolism increases BEYOND adult rates
- **Dosing paradox**: mg/kg requirements higher than older children/adults
- **Example**: Midazolam clearance higher in toddlers than school-age

### Rapid Desaturation in Pediatrics
- **FRC reduced**: Lower functional residual capacity
- **Higher oxygen consumption**: Metabolic rate higher per kg
- **Result**: SpO2 drops faster with apnea (minutes vs 5-10 min in adult)
- **Strategy**: Pre-oxygenate 3 minutes; apneic oxygenation if intubation difficulty

## Day Care Pharmacology for Rapid Recovery

### Volatile Anesthesia (Sevoflurane)
- **Rapid washout**: Low blood-gas solubility (0.65) → faster emergence
- **MAC**: Decreases with age
- **Metabolism**: 3-5% defluorination (minimal fluoride production)
- **PONV**: Higher than propofol/nitrous combination

### Propofol/Remifentanil TIVA
- **Propofol**: Rapid redistribution + elimination → quick emergence (context-sensitive half-time short)
- **Remifentanil**: Ultra-short action (ester metabolism) → rapid offset
- **Advantage**: Minimal PONV, rapid discharge criteria achievement
- **Caution**: Propofol apnea risk; remifentanil respiratory depression

### Nitrous Oxide + Volatile
- **Rapid emergence**: Rapid wash-in/washout (high MV advantage)
- **PONV increase**: Despite theoretical benefits; volatile > propofol alone
- **India use**: Common due to cost

## Emergency Intubation Physiology

### Rapid Sequence Intubation (RSI) Steps
1. **Pre-oxygenation**: 3-5 minutes (or 8 vital capacity breaths)
   - Goal: FiO2 90% (denitrogenation); delay apneic desaturation
2. **Induction**: Propofol 1-2 mg/kg IV (↓ dose if hypovolemic)
   - **Alternative**: Ketamine 1-2 mg/kg (preserves airway reflexes better)
3. **Cricoid pressure**: Apply 10N awake, 30N after loss of consciousness (controversial but safe)
4. **Succinylcholine 1-1.5 mg/kg IV**: 30-40s onset → rapid intubation
   - **Alternative**: Rocuronium 1.2 mg/kg (60-90s, but allows reversal with sugammadex)
5. **Intubation**: Video laryngoscope preferred (improves view, reduces desaturation)

### Aspiration Physiology
- **Gastric pH <2.5, volume >25 mL**: High aspiration risk
- **Particulate vs fluid**: Particulate more damaging (aspiration pneumonia)
- **Acid injury**: Chemical burn lung parenchyma → ARDS
- **Prevention**: NPO 6hrs solids, 2hrs clear fluid; antacid (sodium citrate 15-30mL 15min pre-op)

### Trauma Intubation Challenges
- **C-spine concern**: Manual in-line stabilization mandatory
- **Facial trauma**: Distorted anatomy; fiberoptic helpful
- **Hemorrhage**: Compromised airway view; blood obscures
- **Hypotension**: Propofol risky; **ketamine 1-2 mg/kg preferred** (maintains BP, airway reflexes)

## Emergency Hemodynamics

### Shock Response to Anesthesia
- **Hypovolemic shock**: Minimal fluid resuscitation pre-op → anesthesia ↓↓ BP
- **Anesthetic caution**: Use reduced doses propofol, avoid volatile (myocardial depression)
- **Preferred**: Etomidate (1 mg/kg, no myocardial depression) BUT single dose only (adrenal suppression risk)
- **Ketamine**: Better choice if available (sympathomimetic effect, maintains BP)

### Septic Shock Induction
- **Lactate elevated**: Tissue hypoperfusion already present
- **Anesthetic ↓ BP more**: Risk cardiovascular collapse
- **Fluid resuscitation first**: 30 mL/kg if possible before induction
- **Agent choice**: Ketamine > Etomidate > Propofol
- **Vasopressor on standby**: Noradrenaline running before induction likely needed`,
        mnemonics: [
          { text: "ECLAMPSIA = magnesium ↑ seizure threshold = magnesium potentiates blockade = reduce NMB", explanation: "Pathophysiology drug interaction" },
          { text: "AFE = three phases = pulm HTN → coagulopathy → hemorrhage = aggressive CPR + ECMO", explanation: "Emergency sequence" },
          { text: "PEDIATRIC apnea = low FRC + high VO2 = rapid desaturation = 3-5 min airway attempt", explanation: "Time pressure physiology" },
          { text: "INFANT metabolism = high dose requirements midazolam (vs older kids) = individual calculation", explanation: "Pediatric paradox" },
          { text: "PROPOFOL TIVA = rapid offset = quick emergence = ideal daycare BUT apnea risk", explanation: "Recovery advantage" },
          { text: "RSI = 3min pre-ox + induction + cricoid 30N + succinylcholine + intubate = sequence critical", explanation: "Full stomach protocol" }
        ],
        keyPoints: [
          "Eclampsia: magnesium potentiates neuromuscular blockers; reduce doses 25-50%",
          "HELLP coagulopathy: platelets <50K contraindicate spinal; need FFP available",
          "Amniotic fluid embolism: catastrophic; aggressive CPR + ECMO if available",
          "Pediatric: FRC low → rapid desaturation; pre-oxygenate 3-5 min, apneic oxygenation critical",
          "Infant paradox: drug metabolism higher toddlers than older children; individual calculation needed",
          "Propofol TIVA: rapid recovery but apnea risk; monitor closely",
          "Emergency RSI: full stomach protocol; cricoid pressure 30N; succinylcholine or rocuronium",
          "Trauma: ketamine preferred over propofol (maintains BP, airway reflexes); video laryngoscope helpful",
          "Septic shock induction: ketamine best agent; fluid resuscitate first; vasopressor standby"
        ],
        textbookRefs: [
          { book: "Obstetric Anesthesia: Principles and Practice", chapter: "Emergency Obstetric Complications", edition: "6th" },
          { book: "Pediatric Anesthesia: A Handbook", chapter: "Pharmacology in Neonates and Infants", edition: "3rd" },
          { book: "Anesthesia and Intensive Care: A Concise Textbook", chapter: "Special Situations and Emergencies", edition: "4th" }
        ]
      },
      {
        layer: 3,
        slug: "anesthesia-special-situations-clinical",
        title: "Anesthesia in Special Situations - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical protocols for obstetric emergencies, pediatric induction techniques, day care anesthetic management, emergency airway decision trees.",
        contentMd: `# Anesthesia in Special Situations - Clinical

## Obstetric Emergency Anesthetic Management

### Eclampsia/Pre-eclampsia Cesarean
**Pre-op preparation**:
1. **Magnesium sulfate**: 4g IV bolus, then 1-2g/hr infusion (seizure prophylaxis)
2. **Fluid**: 500-1000 mL crystalloid cautiously (pulmonary edema risk)
3. **Labs**: CBC, coagulation profile, LFTs, renal function
4. **Antihypertensives**: Target MAP <120 mmHg (prevent ICH)
   - Labetalol 10-20mg IV, repeat q10-20 min
   - Nifedipine 10-20mg sublingual (slower, 10-30 min onset)

**Anesthetic technique**:
- **Regional (spinal/epidural) preferred** if platelets >80K, normal coagulation
- **General**: Propofol 0.5-1 mg/kg (↓ seizure activity), volatile acceptable
- **Airway caution**: Edema may cause difficult intubation; smaller tube
- **NMB**: Rocuronium standard (reduce if Mg2+ high: check magnesium level, adjust 25% dose reduction per gram >2 mEq/L)
- **Volatile**: Sevoflurane acceptable; consider avoiding if severe hypertension (volatile ↓ BP but slower than propofol)

### HELLP/Severe Coagulopathy Cesarean
**Pre-op**:
1. **FFP available**: 4-6 units immediately accessible
2. **Platelets**: If <50K, transfuse 6-8 units after induction
3. **Coagulation labs**: PT, aPTT, fibrinogen, D-dimer

**Anesthetic approach**:
- **Regional contraindicated** if platelets <50K or coagulation abnormal
- **General anesthesia** (propofol 0.5-1 mg/kg titrated)
- **Airway likely difficult**: Swollen, edematous; video laryngoscope
- **Prepare for massive hemorrhage**: Type & cross, anticipate heavy bleeding
- **Maintenance**: Volatile or TIVA; avoid high-dose opioids (neonatal respiratory depression)

### AFE Suspected
**Immediate actions**:
1. **Call for help**: ECMO team if available
2. **CPR**: Start immediately (do not delay for confirmation)
3. **Oxygenation**: FiO2 100%, hyperventilate
4. **IV access**: Multiple lines, massive transfusion protocol
5. **Medications**: Epinephrine 1 mg IV q3-5 min; vasopressors (noradrenaline)
6. **Coagulation**: FFP, platelets, cryoprecipitate (treat DIC aggressively)
7. **ECMO**: Activate if hemodynamically unstable despite CPR/meds (India very limited)

## Pediatric Anesthetic Induction Techniques

### Inhalational Induction (Sevoflurane) - Age <5 years preferred
**Technique**:
1. **Premedication**: Midazolam 0.5 mg/kg oral 20-30 min pre-op (max 20mg)
   - Calm child → easier mask placement
2. **Induction**: Sevoflurane 8% in 100% O2 (rapid rise; pungent but tolerated)
   - Start 2%, ↑ 1% per breath until asleep (3-5 min usual)
3. **IV placement**: After sleep (if not pre-placed)
4. **Maintenance**: Volatile or TIVA after IV access
5. **Airway**: Mask initially, intubate if needed (standard tubes uncuffed <8yr)

**Advantages**: No needle fear; smooth induction if properly done
**Disadvantages**: Airway irritation, PONV, slower than IV

### IV Induction (Propofol) - Age >5 years preferred
**Technique**:
1. **Pre-op**: Topical anesthetic cream (EMLA) on hand 30-60 min pre-op
2. **Induction**: Propofol 2-3 mg/kg IV (slower than adult; titrate by response)
3. **Monitor**: Apnea common; have bag-mask ready
4. **Airway**: Mask ventilation initially, intubate if needed
5. **IV**: After loss of consciousness

**Advantages**: Rapid induction, less airway irritation, smooth
**Disadvantages**: Apnea, propofol infusion syndrome (prolonged infusions >4 hrs)

### Neonatal Considerations
**Special challenges**:
- No IV pre-op (umbilical access if needed)
- Apnea risk post-induction (bag-mask ready)
- Hypothermia risk (warming devices, warm fluids)
- **Fasting**: 2hrs clear fluid (not 6hrs like older children; shorter gastric volume)

**Technique**:
- Inhalational (sevoflurane) usual; IV rarely placed pre-op
- Maintain temperature actively (radiant warmer, warm OR, warm fluids)
- Avoid excessive fasting (hypoglycemia risk)

## Day Care Surgery Anesthetic Management

### Pre-op Assessment
1. **ASA classification**: Must be I or II (no systemic disease)
2. **Fasting verification**: 6hrs solid food, 2hrs clear fluid
3. **Home support**: Responsible adult for 24-hour post-op care
4. **Distance check**: Lives <30 min from facility
5. **No opioids history**: Avoid if possible (opioid-sensitive nausea)

### Induction & Maintenance
**Best options**:
- **Propofol 1.5-2 mg/kg IV** + **remifentanil 0.5-1 mcg/kg** (rapid emergence, minimal PONV)
- **Sevoflurane** with **NO** (↑ emergence speed) + multimodal analgesia
- **Avoid opioids**: Minimize remifentanil, no morphine (PONV)

### Analgesia (Multimodal)
1. **Acetaminophen**: 15 mg/kg IV (max 1g adult)
2. **NSAIDs**: Ibuprofen 10 mg/kg IV or PO (if no contraindication)
3. **Local**: Infiltration, blocks for relevant anatomy
4. **Minimal opioid**: Remifentanil during surgery; avoid post-op codeine

### Recovery & Discharge
**Aldrete score** (0-2 per category, max 10):
- Respiration (2 = breathing easily), O2 sat (2 = >92%), consciousness (2 = alert), circulation (2 = stable), activity (2 = moving all limbs)
- **Goal ≥9/10** before discharge

**Discharge criteria**:
1. Aldrete score ≥9
2. Pain controlled (VAS <4)
3. No nausea/vomiting
4. Able to drink, void
5. Responsible adult present
6. Written post-op instructions + emergency contact

**PONV prevention**:
- Multimodal analgesia (acetaminophen + NSAID + local blocks)
- Dexamethasone 0.1 mg/kg IV (max 8mg, given induction)
- Metoclopramide 0.1 mg/kg IV if PONV history
- Avoid opioids

## Emergency Airway Decision Tree

### Awake Patient, Full Stomach, Difficult Airway Predicted
**Path**:
1. **Awake fiberoptic intubation** OR
2. **Video laryngoscope with RSI** (better than blind RSI with difficult airway)
3. **Setup**: All equipment ready; backup plans
4. **Pre-oxygenate**: 3-5 minutes
5. **Induction**: Ketamine 1-2 mg/kg (maintains airway tone, sympathomimetic)
6. **Cricoid pressure**: 30N apply
7. **Intubate**: Video laryngoscope, minimal attempts (<3)
8. **Rescue**: If fail → mask ventilation, LMA, call help, consider delayed sequence

### Shock Patient, Full Stomach
**Path**:
1. **Delayed sequence intubation** (apneic oxygenation allowed; hemorrhage more urgent than aspiration)
2. **Fluid resuscitation**: Ongoing during induction setup
3. **Induction agent**: **Ketamine 1-2 mg/kg** (best hemodynamic profile)
   - Alternative: Etomidate 0.2-0.3 mg/kg (single dose only; adrenal risk)
   - Avoid: Propofol (↓↓ BP in shock)
4. **Succinylcholine 1.5 mg/kg** (RSI if time permits; rocuronium 1.2 if pseudocholinesterase concern)
5. **Intubate**: Rapid, minimal time wasting

### Trauma with C-spine Concern
**Path**:
1. **Manual in-line stabilization**: Maintain cervical spine
2. **Preparation**: Video laryngoscope, fiberoptic backup
3. **Pre-oxygenation**: 3-5 minutes with in-line stabilization
4. **Induction**: Ketamine 1-2 mg/kg (maintains reflexes, sympathomimetic)
5. **NMB**: Rocuronium 1.2 mg/kg (succinylcholine OK if no contraindication, but hyperkalemia risk post-trauma)
6. **Intubation**: Video laryngoscope with in-line stabilization (better view, less cervical movement)
7. **Cricoid pressure**: 30N apply

### Septic Shock
**Path**:
1. **Fluid resuscitation**: 30 mL/kg crystalloid first hour (concurrently with induction prep)
2. **Vasopressor**: Noradrenaline 0.05-0.5 mcg/kg/min on standby
3. **Induction**: Ketamine 1-2 mg/kg (preserves BP, airway)
4. **NMB**: Standard (succinylcholine or rocuronium)
5. **Intubate**: Standard approach
6. **Post-intubation**: Vasopressor titration, ongoing fluid resuscitation, antibiotics`,
        mnemonics: [
          { text: "ECLAMPSIA emergency = magnesium + antihypertensives first = then anesthesia = propofol 0.5-1 safe", explanation: "Pre-anesthesia preparation" },
          { text: "HELLP coagulopathy = platelets <50K = NO regional = FFP standby = general with precaution", explanation: "Bleeding risk management" },
          { text: "AFE = CPR STAT + oxygenate + ECMO call = do NOT wait for confirmation = aggressive", explanation: "Catastrophic emergency" },
          { text: "PEDIATRIC induction = midazolam pre-med + sevoflurane 2→8% = 3-5 min IV placement after = calm", explanation: "Technique sequence" },
          { text: "DAYCARE discharge = Aldrete ≥9 + pain controlled + no PONV + adult present = not time-based", explanation: "Discharge criteria" },
          { text: "SHOCK + full stomach = delayed sequence OK = apneic oxygenation = ketamine > propofol", explanation: "Hemorrhage priority" }
        ],
        keyPoints: [
          "Eclampsia: magnesium sulfate first; antihypertensives (labetalol/nifedipine); propofol safe induction",
          "HELLP: platelets <50K contraindicate regional; general anesthesia required; FFP/platelets available",
          "AFE: immediate CPR + oxygenation + ECMO activation; do not wait for diagnosis confirmation",
          "Pediatric induction: midazolam premedication smooths inhalational; sevoflurane 2%→8% gradual",
          "Neonatal: shorter fasting (2hrs clear fluid); temperature maintenance critical; apnea risk",
          "Daycare discharge: Aldrete score ≥9 required (not arbitrary time); no PONV mandatory",
          "Emergency RSI: pre-oxygenate 3-5 min; cricoid pressure 30N; succinylcholine 1-1.5 mg/kg",
          "Shock induction: ketamine first choice (maintains BP, airway); fluid/vasopressor on standby"
        ],
        textbookRefs: [
          { book: "Obstetric Anesthesia: Principles and Practice", chapter: "Emergency Cesarean Section and Resuscitation", edition: "6th" },
          { book: "Pediatric Anesthesia: A Handbook", chapter: "Inhalational and IV Induction Techniques", edition: "3rd" },
          { book: "Emergency Anesthesia", chapter: "Airway Management in Shock and Trauma", edition: "2nd" }
        ]
      },
      {
        layer: 4,
        slug: "anesthesia-special-situations-exam-prep",
        title: "Anesthesia in Special Situations - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts, comparison tables, common exam questions, critical decision points for obstetric/pediatric/emergency scenarios.",
        contentMd: `# Anesthesia in Special Situations - Exam Prep

## Obstetric Anesthesia Quick Reference

| Condition | Airway Risk | Anesthetic | Regional OK? | Key Issue |
|-----------|-------------|-----------|------------|-----------|
| **Eclampsia** | HIGH (edema) | Propofol safe | Yes (coag normal) | Mag potentiates NMB |
| **HELLP** | HIGH | General safer | NO if platelets <50K | Coagulopathy risk |
| **Abruption** | MODERATE | Any | YES initially | Hemorrhage/DIC risk |
| **AFE** | CATASTROPHIC | CPR focus | NO | Cardiopulmonary collapse |
| **Normal pregnancy** | MODERATE (edema) | Any | YES | Aortocaval compress |

## Pediatric Quick Facts

| Age | Uncuff tube? | Fasting | Premedication | MAC % |
|-----|--------------|---------|---------------|-------|
| **Neonate** | YES | 2hr clear | NO (apnea risk) | 0.3 |
| **<1 month** | YES | 2hr clear | NO | 0.3 |
| **1-12 mo** | YES | 2hr clear | Midazolam 0.5 | 0.3-0.4 |
| **1-5 yr** | YES | 6hr solid/2hr clear | Midazolam 0.5 | 0.4-0.6 |
| **5+ yr** | NO (cuffed OK) | 6hr solid/2hr clear | Midazolam optional | 0.6-0.8 |

## Day Care Surgery Criteria

**Inclusion**:
- ASA I-II only
- Age 2-70 years typical
- Procedure <60 minutes
- No obstructive sleep apnea history
- Lives <30 min away
- Responsible adult available 24hr

**Discharge Aldrete Score ≥9**:
- Respiration (2 = breathing easily)
- O2 sat (2 = >92%)
- Consciousness (2 = alert/awake)
- Circulation (2 = stable +/- 20 baseline)
- Activity (2 = moves all extremities)

## Emergency Airway Scenarios

### Difficult Airway + Full Stomach + Awake

**Decision**: Awake fiberoptic vs video laryngoscope RSI
- **Fiberoptic**: Slower, safer if really difficult
- **Video RSI**: Faster, adequate if moderate difficulty
- **Setup**: All equipment ready, backup plans, help available

### Hemorrhagic Shock + Full Stomach

**Decision**: Delayed sequence intubation
- **Rationale**: Hemorrhage > aspiration risk
- **Induction**: Ketamine 1-2 mg/kg (maintains BP)
- **NMB**: Succinylcholine 1-1.5 mg/kg (fast, RSI if time permits)
- **Positioning**: Head down, fluids running, massive transfusion standby

### Septic Shock Intubation

**Decision**: Standard RSI but with vasopressor prep
- **Fluid**: 30 mL/kg first hour ongoing
- **Induction**: Ketamine 1-2 mg/kg (best sepsis agent)
- **Vasopressor**: Noradrenaline 0.05-0.5 mcg/kg/min standby
- **Monitor**: Lactate clearance post-intubation

## High-Yield Exam Questions

**Q: Eclamptic, BP 160/110, seizure risk. Best induction?**
A: Propofol 0.5-1 mg/kg (↓ ICP, seizure protection); magnesium sulfate already given

**Q: HELLP, platelets 45K, needs anesthesia. Regional or general?**
A: General anesthesia (regional contraindicated <50K platelets)

**Q: AFE suspected, unconscious, no BP. Immediate action?**
A: Start CPR + epinephrine 1mg IV q3-5min + ECMO call + massive transfusion

**Q: 4-year-old calm, premedication? Induction?**
A: Midazolam 0.5 mg/kg PO; then sevoflurane 2%→8% inhalational

**Q: Neonate, risk factor: age <60 weeks post-conceptional. Concern?**
A: Apnea risk; avoid anesthesia if possible; if necessary, intensive monitoring post-op

**Q: Daycare, patient drowsy, VAS 6, Aldrete 8. Can discharge?**
A: NO; Aldrete must be ≥9; pain must be <4; consciousness must be alert

**Q: Trauma, C-spine suspected, intubation needed. Technique?**
A: Video laryngoscope with manual in-line stabilization; ketamine induction

**Q: Full stomach, HR 130, BP 85, shocked. Induction agent?**
A: Ketamine (maintains BP/airway); avoid propofol (↓↓ BP); delayed sequence acceptable

**Q: Magnesium given for eclampsia, now rocuronium given. Expected effect?**
A: Prolonged blockade (Mg potentiates NMB); reduce dose 25-50%; expect longer duration

**Q: PONV prevention in daycare. Best strategy?**
A: Multimodal (acetaminophen + NSAID + local block) + dexamethasone 0.1mg/kg + minimize opioids`,
        mnemonics: [
          { text: "ECLAMPSIA Mag = propofol safe = rocuronium need LESS dose = watch duration ↑", explanation: "Drug-condition interaction" },
          { text: "HELLP platelets <50K = NO regional = MUST general = FFP ready", explanation: "Contraindication critical" },
          { text: "AFE = three priorities = CPR + oxygenate + ECMO = aggressive immediate", explanation: "Catastrophic sequence" },
          { text: "PEDIATRIC <8yr = uncuffed tube = mid-axillary position at teeth = size 3-4mm common", explanation: "Technical detail" },
          { text: "DAYCARE Aldrete <9 = do NOT discharge = observe longer = no exceptions", explanation: "Safety absolute" },
          { text: "SHOCK + full stomach = ketamine > propofol = delayed sequence OK = hemodynamics first", explanation: "Priority switch" }
        ],
        keyPoints: [
          "Eclampsia: propofol safe; magnesium potentiates NMB reduce 25-50%",
          "HELLP: platelets <50K absolutely contraindicate regional anesthesia",
          "AFE: immediate CPR, epinephrine, ECMO call; do not delay for confirmation",
          "Pediatric airway: <8yr uncuffed; mid-axillary at teeth; size 3-4mm typical",
          "Neonatal apnea: <60 weeks post-conceptional high risk; intensive post-op monitoring",
          "Daycare discharge: Aldrete ≥9 mandatory (respiration, O2 sat, consciousness, circulation, activity)",
          "Shock induction: ketamine first choice (hemodynamics preserved); delayed sequence acceptable",
          "Trauma C-spine: video laryngoscope with in-line stabilization; ketamine induction"
        ],
        textbookRefs: [
          { book: "Obstetric Anesthesia: Principles and Practice", chapter: "Quick Reference", edition: "6th" },
          { book: "Pediatric Anesthesia: A Handbook", chapter: "Emergency Reference", edition: "3rd" }
        ]
      },
      {
        layer: 5,
        slug: "anesthesia-special-situations-active-recall",
        title: "Anesthesia in Special Situations - Active Recall",
        estimatedMinutes: 10,
        summary: "10 clinical scenarios: eclamptic emergency, pediatric difficult airway, day care discharge dilemma, trauma RSI, septic intubation.",
        contentMd: `# Anesthesia in Special Situations - Active Recall

## Q1: Pre-eclampsia Eclampsia Transition
**Scenario**: 28-week pregnant, BP 160/110, 2 seizures last hour. Seizure prophylaxis started with MgSO4 4g bolus + 1g/hr infusion. Now needs emergency cesarean. Rocuronium 1.2 mg/kg planned for 4-hour surgery. Will duration be normal?

**Answer**: **NO. Expect PROLONGED blockade.** Magnesium potentiates neuromuscular blockers by 25-50%. **Reduce rocuronium dose**: Give 0.8-0.9 mg/kg instead of 1.2 mg/kg. **Expect**: Longer duration (60+ minutes instead of 30-40). **Monitor**: TOF train-of-four; redose when TOF 1-2/4 (slower return expected). **Reversal**: Sugammadex or neostigmine standard, but consider Mg levels (higher Mg = even longer NMB duration).

## Q2: HELLP Hemorrhagic Shock
**Scenario**: 34-week pregnant, HELLP confirmed (platelets 38K, fibrinogen 80, AST 400, bilirubin 2). Abruption with massive vaginal bleeding, SBP 75, HR 140, mental status altered. Emergency cesarean planned. Anesthetic choice?

**Answer**: **General anesthesia mandatory** (platelets <50K contraindicate spinal/epidural). **Critical pre-op**: (1) Type & cross-match, (2) **FFP 4-6 units immediately available**, (3) Platelets 6-8 units ready, (4) **Massive transfusion protocol activated**. **Induction**: Propofol 0.5 mg/kg IV (reduced dose due to shock) or **ketamine 1 mg/kg** (preserves BP better). **Airway challenge**: Expect edema/airway difficulty; **video laryngoscope** helpful. **Maintain**: Volatile or TIVA; watch for coagulopathy worsening intra-op (likely more hemorrhage). **Transfusion**: Aggressive; expect 8+ units RBC, FFP, platelets.

## Q3: Neonatal Apnea Risk
**Scenario**: 28-week ex-premature neonate (post-natal age 2 days, post-conceptional age 28+2 weeks). Needs repair pyloric stenosis. Anesthesia planned. Is this safe?

**Answer**: **HIGH RISK of post-operative apnea**. Apnea risk extends to **60 weeks post-conceptional age** (not post-natal age). This infant is 28+2 weeks → 31+ weeks before safe from apnea. **Management**: (1) **Avoid anesthesia if possible**; delay elective surgery, (2) If urgent: (a) Inhalational induction (sevoflurane), (b) Neonatal ICU post-op monitoring (apnea monitor, backup ventilation available), (c) **Avoid opioids** (worsen apnea), (d) Caffeine 10 mg/kg IV q12h pre-op and post-op (apnea prophylaxis), (e) **Post-op admit NICU**, not regular ward. (3) Fasting: 2 hours clear fluid (shorter than older children; neonatal gastric volume smaller).

## Q4: Pediatric Difficult Induction
**Scenario**: 3-year-old, syndromic, predicted difficult airway (small mandible, tongue relative macroglossia, trismus tendency). ASA II, fasting confirmed. Procedure routine tonsillectomy. Plan?

**Answer**: **Avoid rapid sequence intubation** (too risky with difficult airway + full stomach). **Strategy**: (1) **Awake fiberoptic intubation** preferred (maintain airway reflexes, airway secured under direct visualization), (2) Topical anesthesia: 4% lidocaine spray airway, nose, pharynx, (3) Midazolam 0.1 mg/kg IV (light sedation), (4) Fiberoptic scope (small pediatric scope available), (5) Once intubated → proceed with anesthesia induction. **Alternative if fiberoptic unavailable**: (a) Video laryngoscope setup, (b) Gentle inhalational induction (sevoflurane mask), (c) IV after asleep, (d) Intubate under visualization with video laryngoscope; (e) Multiple backup plans, skilled airway team present.

## Q5: Day Care Discharge Denial
**Scenario**: 6-year-old post-adenoidectomy, Aldrete score calculated: Respiration 2, O2 sat 2, Consciousness 1 (drowsy), Circulation 2, Activity 2 = **Total 9**. Requests to discharge home with parent.

**Answer**: **CANNOT discharge**. Aldrete score requirement is **≥9** AND **consciousness must be "alert"** (score 2). Drowsiness alone (score 1) = not alert. **Management**: (1) Observe longer (30-60 min), (2) Recheck consciousness q15min, (3) Offer light snack, oral fluids, (4) Reassess Aldrete (goal ≥9 with consciousness=2). (5) **Also verify**: Pain VAS <4 (not documented), no nausea/vomiting, able to void. Cannot discharge on Aldrete 9 with altered consciousness.

## Q6: Trauma Intubation Dilemma
**Scenario**: 24-year-old motorcycle accident, GCS 8, hemodynamically stable (BP 110/70), C-spine concerns. Massive facial trauma with blood obscuring airway view. Needs intubation. Plan?

**Answer**: **Video laryngoscope intubation with manual in-line stabilization**. **Preparation**: (1) **Video laryngoscope** (indirect visualization bypasses facial obstruction; blood can be suctioned via scope), (2) **Manual in-line stabilization**: Cervical spine held neutral by assistant, (3) **Pre-oxygenate**: 3-5 minutes with in-line hold, (4) **Induction**: Ketamine 1-2 mg/kg (maintains airway reflexes, sympathomimetic → stable BP, good for trauma), (5) **NMB**: Rocuronium 1.2 mg/kg (or succinylcholine if fast entry), (6) **Intubate**: Video laryngoscope with in-line stabilization (less cervical movement than direct laryngoscopy), (7) **Cricoid pressure**: 30N. **Avoid**: Propofol (↓↓ BP); direct laryngoscopy (risk cervical movement). **Fiberoptic**: Not ideal acutely (time; blood).

## Q7: Septic Shock Intubation Protocol
**Scenario**: 52-year-old septic pneumonia, lactate 6, SBP 85, HR 130, mental status altered, needs intubation. IV access present. How proceed?

**Answer**: **Sepsis intubation protocol**: (1) **Fluid resuscitation**: 30 mL/kg (start IV fluids 0.9% NaCl or LR NOW; goal MAP ≥65 mmHg), (2) **Vasopressor setup**: Noradrenaline 0.05-0.5 mcg/kg/min IV prepared at bedside (likely needed after induction), (3) **Pre-oxygenation**: 3-5 min 100% O2, (4) **Induction**: **Ketamine 1-2 mg/kg** (preserves BP, airway reflexes, sympathomimetic → ideal sepsis agent), (5) **NMB**: Succinylcholine 1-1.5 mg/kg (fast; RSI setup), (6) **Intubate**: Standard approach, (7) **Immediately post-intubation**: Noradrenaline on, escalate as needed. **Avoid**: Propofol (↓↓ BP in shock); lengthy preparation delays care. **Lactate**: Recheck q6hr; guide ongoing resuscitation.

## Q8: Amniotic Fluid Embolism
**Scenario**: 38-week labor, suddenly unconscious, SpO2 85%, BP 60/40, severe bradycardia. Clinical suspicion AFE. Status post vaginal delivery attempt. What do?

**Answer**: **ASSUME AFE UNTIL PROVEN OTHERWISE. AGGRESSIVE IMMEDIATE MANAGEMENT**: (1) **CPR start immediately** (do NOT wait for imaging confirmation), (2) **Oxygenation**: FiO2 100%, hyperventilate; intubate if not already, (3) **IV access**: Multiple large-bore, (4) **Epinephrine 1 mg IV q3-5 min** (continue per ACLS), (5) **Massive transfusion protocol** activate immediately, (6) **ECMO team call** (if available; transport prepared), (7) **Monitoring**: Continuous EKG, pressures, coagulation labs, (8) **Supportive care**: Aggressive resuscitation may take hours. **Outcomes**: 60% mortality despite treatment; only chance survival = aggressive early intervention + ECMO.

## Q9: Obstetric Regional vs General
**Scenario**: Pre-eclampsia, BP 155/95, magnesium prophylaxis ongoing, platelets 65K, coagulation normal, needs cesarean urgently. Anesthesiologist offers spinal. Is this safe?

**Answer**: **YES, spinal acceptable** (platelets 65K is not contraindication for spinal; threshold typically <50K). However, **consider clinical context**: (1) **Edematous airway**: General intubation may be difficult; regional advantageous, (2) **Pre-eclampsia**: Regional preferred if coagulation normal (platelets 65K acceptable), (3) **Magnesium effect**: If general chosen, reduce rocuronium dose. **Recommendation**: Spinal anesthesia reasonable if patient cooperative, no contraindications developing (platelet count stable, no DIC). **Alternative**: Epidural (more gradual, easier to titrate with pre-eclampsia lability). **Decision**: Spinal safe; epidural safer in borderline pre-eclampsia.

## Q10: Succinylcholine in Neonates
**Scenario**: 4-day-old neonate, meconium aspiration, needs intubation. Plans succinylcholine 1.5 mg/kg IV for RSI. Is this appropriate?

**Answer**: **Questionable choice**. **Concerns**: (1) **Succinylcholine + neonates = hyperkalemia risk** (muscle immaturity, elevated baseline K+ in neonates 5-7 mEq/L), (2) **Bradycardia vagal response**: Neonates more prone (no atropine pre-med given?), (3) **Fasciculations**: Can ↑ intracranial pressure (aspiration already at risk of ICP). **Better choice**: **Rocuronium 1.2 mg/kg** (no hyperkalemia, no fasciculations, reversible with sugammadex if needed, reasonable onset 60-90 sec acceptable in emergency). **If succinylcholine used**: (a) Pre-treat atropine 0.02 mg/kg (prevent bradycardia), (b) Monitor K+ closely post-intubation, (c) Accept some hyperkalemia risk. **Lesson**: Rocuronium now preferred neonatal RSI over succinylcholine.`,
        mnemonics: [
          { text: "MAG + rocuronium = 25-50% dose REDUCTION = longer duration expected = TOF monitor", explanation: "Drug-condition interaction critical" },
          { text: "HELLP <50K platelets = NEVER regional = MUST general = FFP standby = anticipate bleed", explanation: "Absolute contraindication" },
          { text: "NEONATAL apnea risk = <60 weeks post-conceptional = ICU monitoring mandatory = avoid opioids", explanation: "Age-specific danger window" },
          { text: "DIFFICULT airway + full stomach = awake fiberoptic best = video RSI alternative = setup critical", explanation: "Competing risks strategy" },
          { text: "DAYCARE Aldrete <9 OR altered consciousness = DO NOT discharge = observe longer = no exceptions", explanation: "Safety absolute rule" },
          { text: "SEPSIS intubation = ketamine > propofol = fluid ongoing + vasopressor standby = lactate monitor", explanation: "Shock-specific protocol" }
        ],
        keyPoints: [
          "Magnesium potentiates NMB: reduce rocuronium 25-50%; expect prolonged blockade",
          "HELLP platelets <50K: general anesthesia only; regional absolutely contraindicated",
          "AFE: assume diagnosis, start CPR immediately; do not wait for confirmation",
          "Neonatal apnea risk: <60 weeks post-conceptional age; ICU monitoring post-op mandatory",
          "Difficult airway + full stomach: awake fiberoptic preferred; video RSI alternative",
          "Day care discharge: Aldrete ≥9 with alert consciousness; pain <4; no PONV; responsible adult",
          "Septic intubation: ketamine induction; fluid/vasopressor concurrently; lactate monitoring",
          "Trauma video laryngoscope: use with in-line C-spine stabilization; ketamine induction"
        ],
        textbookRefs: [
          { book: "Obstetric Anesthesia: Principles and Practice", chapter: "Clinical Case Scenarios", edition: "6th" },
          { book: "Pediatric Anesthesia: A Handbook", chapter: "Emergency Scenarios", edition: "3rd" },
          { book: "Emergency Anesthesia", chapter: "Complex Scenarios and Problem-Solving", edition: "2nd" }
        ]
      }
    ]
  }
];
