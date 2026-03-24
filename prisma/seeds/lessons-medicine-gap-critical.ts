import type { TopicLessons } from "./content-loader";

export const medicineGapCriticalLessons: TopicLessons[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TOPIC 1: SHOCK (Types, Pathophysiology, Management)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    topicCode: "IM-MOD-12-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "shock-critical-foundation",
        title: "Shock - Foundation",
        estimatedMinutes: 25,
        summary:
          "Shock is circulatory failure resulting in inadequate tissue perfusion and cellular hypoxia. Four main types: hypovolemic, cardiogenic, distributive (septic), and obstructive. Classified by hemodynamic profiles using CVP, PCWP, SVR.",
        contentMd: `# Shock - Foundation

## Definition
Shock is an acute circulatory disorder characterized by **inadequate tissue perfusion** leading to cellular hypoxia, metabolic acidosis, and eventually organ failure and death if untreated.

## Core Pathophysiology
When cardiac output or systemic vascular resistance fails, mean arterial pressure (MAP) drops below the threshold (~60 mmHg) needed for adequate organ perfusion.

$$MAP = CO \\times SVR + CVP$$

Where:
- CO = Cardiac Output (Heart Rate × Stroke Volume)
- SVR = Systemic Vascular Resistance
- CVP = Central Venous Pressure

## Four Types of Shock

### 1. **Hypovolemic Shock**
- **Cause**: Loss of intravascular volume (blood or plasma)
- **Examples**: Hemorrhage, severe burns, dehydration, peritonitis
- **Hemodynamics**: ↓CO, ↓CVP, ↑SVR (compensatory vasoconstriction)
- **Classic signs**: Cold extremities, weak pulse, low JVP

### 2. **Cardiogenic Shock**
- **Cause**: Primary cardiac dysfunction (pump failure)
- **Examples**: Acute MI, cardiomyopathy, acute valvular disease, arrhythmias
- **Hemodynamics**: ↓CO, ↑CVP, ↑SVR
- **Classic signs**: Pulmonary edema, elevated JVP, S3 gallop

### 3. **Distributive Shock** (Septic, Anaphylactic, Neurogenic)
- **Cause**: Widespread peripheral vasodilation and maldistribution of blood flow
- **Examples**: Sepsis (most common in ICU), anaphylaxis, spinal cord injury
- **Hemodynamics**: ↓SVR, initially ↑CO (warm shock), later ↓CO (cold shock)
- **Classic signs**: Warm extremities, bounding pulse, wide pulse pressure

### 4. **Obstructive Shock**
- **Cause**: Physical obstruction to blood flow
- **Examples**: Pulmonary embolism, tension pneumothorax, cardiac tamponade, aortic dissection
- **Hemodynamics**: Variable; depends on site of obstruction
- **Classic signs**: JVP elevation, Beck's triad (tamponade)

## Hemodynamic Parameters
| Parameter | Normal | Hypovolemic | Cardiogenic | Distributive |
|-----------|--------|------------|------------|--------------|
| **CVP** | 2-8 mmHg | ↓ | ↑↑ | ↓ |
| **PCWP** | <18 mmHg | ↓ | ↑↑ | ↓ |
| **CO** | 4-8 L/min | ↓ | ↓ | ↑ (early), ↓ (late) |
| **SVR** | 800-1200 dyne·sec·cm⁻⁵ | ↑↑ | ↑↑ | ↓↓ |
| **SvO₂** (venous) | >60% | ↓↓ | ↓↓ | ↑ (early) |

## Clinical Recognition
- **BP**: Systolic <90 mmHg or MAP <65 mmHg
- **Altered perfusion**: Cold extremities (except distributive), weak pulses
- **Altered mental status**: Confusion, restlessness
- **Oliguria**: Urine output <0.5 mL/kg/hr
- **Metabolic acidosis**: Lactate >2 mmol/L, bicarbonate <18 mEq/L`,
        mnemonics: [
          {
            text: "SHOCK = Supply/Heart/Obstruction/vascular resistance/Knowledge of CVP",
            explanation:
              "Remember the four types: Supply (hypovolemic), Heart (cardiogenic), Obstruction (obstructive), vascular (distributive/septic)",
          },
          {
            text: "CVP-PCWP Profile: CO-SVR Remember",
            explanation:
              "Use CVP and PCWP to classify: low CVP + low PCWP = hypovolemic; high CVP + high PCWP = cardiogenic; low CVP + low SVR = distributive",
          },
        ],
        keyPoints: [
          "Shock = inadequate tissue perfusion → cellular hypoxia → acidosis",
          "Four types: hypovolemic, cardiogenic, distributive, obstructive",
          "Hypovolemic: ↓CVP, ↓CO, ↑SVR (cold extremities)",
          "Cardiogenic: ↑CVP, ↓CO, ↑SVR (pulmonary edema)",
          "Distributive: ↓SVR, ↑CO early (warm extremities)",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 267 - Shock",
            edition: "21st",
          },
          { book: "Guyton and Hall", chapter: "Ch 40 - Acute Illness and Trauma", edition: "14th" },
        ],
      },
      {
        layer: 2,
        slug: "shock-critical-mechanism",
        title: "Shock - Pathophysiology & Hemodynamic Mechanisms",
        estimatedMinutes: 35,
        summary:
          "Detailed cascade from initial insult through compensatory mechanisms to cellular derangements. Vasopressor pharmacology: norepinephrine vs dopamine vs vasopressin. Swan-Ganz catheter interpretation.",
        contentMd: `# Shock Pathophysiology & Hemodynamics

## Progressive Stages of Shock

### Stage 1: Initial (Reversible)
- Activation of sympathetic nervous system
- ↑ Catecholamines → vasoconstriction, tachycardia
- Blood flow redirected to vital organs (brain, heart)
- Compensatory mechanisms maintain BP initially
- **Lactate**: Normal to mild elevation

### Stage 2: Progressive (Compensatory Failing)
- Acidosis impairs sympathetic response
- Capillary beds open → pooling of blood
- Tissue hypoxia worsens
- **Lactate**: >4 mmol/L
- RBCs may lyse → hemoglobinuria

### Stage 3: Irreversible
- Multi-organ dysfunction: kidney (acute tubular necrosis), liver (coagulopathy), lungs (ARDS)
- DIC develops
- Brain death risk
- **Prognosis**: Often fatal despite aggressive intervention

## Cellular Derangements in Shock
1. **Anaerobic metabolism**: Lactate accumulates → acidosis
2. **Na+/K+ ATPase failure**: Na+ enters cells → cellular edema
3. **Intracellular Ca²⁺ overload**: Leads to myocardial dysfunction
4. **ROS production**: Oxidative damage to mitochondria
5. **Apoptosis**: Programmed cell death accelerates

## Vasopressor Agents

### Norepinephrine (First-line)
- **Mechanism**: α₁ (potent) + β₁ (moderate) + β₂ (weak)
- **Effect**: ↑SVR, ↑CO, ↑BP, maintains renal perfusion
- **Dose**: 0.01-2 mcg/kg/min IV infusion
- **Advantage**: Maintains cardiac output while raising BP; best renal perfusion
- **Use**: All shock types (hypovolemic, cardiogenic, distributive)

### Dopamine
- **Mechanism**: Dose-dependent
  - Low dose (1-4 mcg/kg/min): D₁ agonist → renal/mesenteric vasodilation
  - Mid dose (4-10 mcg/kg/min): β₁ agonist → inotropic effect
  - High dose (>10 mcg/kg/min): α₁ agonist → vasoconstriction
- **Issues**: Tachycardia, arrhythmias, extravasation risk
- **Use**: Reserved for specific indications (bradycardia requiring inotropic support)

### Vasopressin (ADH)
- **Mechanism**: V₁ (vasoconstriction) + V₂ (water reabsorption)
- **Dose**: Fixed 0.04 units/min (no titration)
- **Use**: Refractory septic shock as adjunct to norepinephrine
- **Advantage**: Reduces catecholamine requirement

### Dobutamine
- **Mechanism**: β₁ + β₂ agonist
- **Effect**: ↑CO, ↓SVR, ↑HR
- **Use**: Cardiogenic shock with low output (NOT first-line in septic shock)
- **Risk**: Systemic hypotension

## Swan-Ganz (Pulmonary Artery) Catheter
Invasive monitoring provides:
- **CVP** (Central Venous Pressure): Right atrial pressure
- **PCWP** (Pulmonary Capillary Wedge Pressure): Left ventricular filling pressure proxy
- **CO** (Cardiac Output): via thermodilution
- **SVR** (Systemic Vascular Resistance): calculated

$$SVR = \\frac{(MAP - CVP)}{CO} \\times 80$$

### Hemodynamic Profiles by Shock Type
| Shock Type | CVP | PCWP | CO | SVR |
|-----------|-----|------|----|----|
| Hypovolemic | Low | Low | Low | High |
| Cardiogenic | High | High | Low | High |
| Distributive/Septic | Low/Normal | Low/Normal | High/Normal | Low |
| Obstructive (PE) | High | Normal/Low | Low | High |

## Septic Shock (Special)
- **Defining feature**: Suspected/confirmed infection + persistent hypotension despite fluid
- **Mechanism**: Endotoxin (LPS) → TNF-α, IL-6, IL-8 → endothelial damage → capillary leak, vasodilation
- **Lactate**: Often >2 mmol/L (even with normal BP initially)
- **qSOFA score**: altered mental status + SBP ≤100 + RR ≥22 (prognostic)`,
        mnemonics: [
          {
            text: "Vasopressor doses: Neo at 0.01-2, Dopa 1-10 (low-mid), Vaso 0.04 fixed",
            explanation:
              "Norepinephrine 0.01-2 mcg/kg/min, Dopamine 1-10 for low-mid dose effects, Vasopressin 0.04 units/min (fixed, no titration)",
          },
          {
            text: "NORA = NOrrepinephrine is first-line for All shock types (if fluid-refractory)",
            explanation:
              "Norepinephrine is the preferred vasopressor in septic, hypovolemic, and cardiogenic shock. Maintains CO while raising SVR.",
          },
        ],
        keyPoints: [
          "Three shock stages: compensatory → progressive → irreversible",
          "Norepinephrine first-line vasopressor (0.01-2 mcg/kg/min)",
          "Dopamine reserved for bradycardia requiring inotrope support",
          "Vasopressin 0.04 units/min fixed dose as adjunct in refractory sepsis",
          "Swan-Ganz: use CVP/PCWP to determine shock type and guide therapy",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 267 - Shock",
            edition: "21st",
          },
          { book: "Critical Care Medicine", chapter: "Shock Management", edition: "5th" },
        ],
      },
      {
        layer: 3,
        slug: "shock-critical-clinical",
        title: "Shock - Clinical Management & Indian Context",
        estimatedMinutes: 30,
        summary:
          "Diagnosis, resuscitation protocols, goal-directed therapy, MAP targets, fluid vs vasopressor sequencing, managing shock in Indian ICU settings with resource constraints.",
        contentMd: `# Shock - Clinical Management

## Diagnostic Approach
### Step 1: Recognize Shock
- Systolic BP <90 mmHg OR MAP <65 mmHg
- Evidence of hypoperfusion: altered mental status, oliguria, lactate >2 mmol/L
- Cold extremities (except early distributive shock)

### Step 2: Establish IV Access
- Two large-bore IVs (18G or better) or central line
- Arterial line for continuous BP monitoring

### Step 3: Identify Shock Type
- **History**: Hemorrhage? Sepsis? Cardiac chest pain? Breathing difficulty?
- **Exam**: JVP (low in hypovolemic, high in cardiogenic/obstructive), lung sounds (crackles in cardiogenic), peripheral pulses (bounding in distributive)
- **Labs**: CVP, PCWP if available; lactate, pH, base deficit
- **Imaging**: Chest X-ray, bedside echo, troponin

## Resuscitation Goals (Surviving Sepsis Campaign)
1. **MAP ≥65 mmHg** (use vasopressor if needed after fluid)
2. **Lactate clearance**: Reduce by ≥10% per 6 hours
3. **Urine output**: ≥0.5 mL/kg/hr after fluid resuscitation
4. **CVP**: 8-12 mmHg (or ≥2 cmH₂O rise from baseline if not mechanically ventilated)
5. **ScvO₂** (central venous O₂ saturation): ≥70% (improved outcomes vs SvO₂ alone)

## Fluid Resuscitation Strategy
### Initial Fluid Bolus (First 6 Hours)
- **30 mL/kg crystalloid** in first 3 hours for sepsis (e.g., 2-2.5 L for 70 kg patient)
- Use **Ringer's lactate** or **normal saline**
- Reassess volume status frequently (CVP, perfusion, lactate)

### Reassessment
- If **responsive** (BP normalizes, lactate clears, perfusion improves): Continue maintenance
- If **unresponsive** (persistent shock despite 30 mL/kg): Start vasopressor at MAP target

### Fluid Types in India
- **Ringer's lactate**: Preferred for sepsis, hemorrhage (widely available)
- **Normal saline**: Risk of hyperchloremic acidosis if >1-2 L
- **Blood products**: O-negative if massive hemorrhage; otherwise type-cross

## Vasopressor Initiation (if Refractory)
1. Start **Norepinephrine 0.01-0.05 mcg/kg/min** IV infusion
2. Titrate to **MAP ≥65 mmHg**
3. Maximum doses rarely exceed 1-2 mcg/kg/min
4. If ongoing hypotension: Add **vasopressin 0.04 units/min** (fixed)
5. Consider **hydrocortisone 50 mg IV Q6H** if refractory (controversial; may help in severe septic shock)

## Source Control (Sepsis-Critical)
- Antibiotics within **1 hour** of recognition
- **Remove/drain source**: debride necrotic tissue, drain abscess, remove infected indwelling catheter
- Imaging: CT abdomen if intra-abdominal infection suspected
- Consider **ICU admission** for monitoring

## Specific Shock Management

### Hypovolemic Shock
- **Main therapy**: **Fluid replacement** (crystalloid or blood)
- Vasopressors only if BP remains <90 after adequate fluids
- Identify and control bleeding source (surgery, angiography, transfusion)

### Cardiogenic Shock
- **Reduce preload** if pulmonary edema: diuretics (furosemide), nitroglycerin
- **Inotropes**: Dobutamine (↑CO, ↓SVR) or milrinone (phosphodiesterase inhibitor)
- **Consider**: Intra-aortic balloon pump (IABP) if available
- **Definitive**: Revascularization (PCI/CABG), LVAD, transplant

### Septic Shock
- **Antibiotics** immediately (1-hour window)
- **Fluid-first**: 30 mL/kg in first 3 hours
- **Vasopressor**: Norepinephrine if refractory (MAP <65 after fluids)
- **Lactate-guided therapy**: Aim for lactate clearance ≥10% per 6 hours
- **Hydrocortisone**: 50 mg IV Q6H if refractory hypotension + no response to catecholamines

### Obstructive Shock
- **PE**: Thrombolysis or mechanical thrombectomy (if massive, hemodynamically unstable)
- **Tension pneumothorax**: Immediate needle decompression → chest tube
- **Tamponade**: Pericardiocentesis, then surgical drainage if recurrent
- **Aortic dissection**: Vasodilators (nitroprusside) + beta-blocker; surgery if type A

## Indian ICU Context
- **Limited invasive monitoring**: Many peripheral hospitals lack Swan-Ganz catheters; use clinical judgment + lactate + CVP estimates
- **Antibiotics**: Follow hospital antibiogram; common organisms: *Staph aureus*, *Gram-negative rods*, *Candida*
- **Fluid availability**: Ringer's lactate preferred; saline used if lactate unavailable
- **Ventilation**: Many ICUs lack prone positioning; focus on lung-protective ventilation
- **Cost**: Vasopressors on WHO essential drugs list; norepinephrine widely available
- **Sepsis burden**: High incidence of sepsis from GI perforation, pneumonia, UTI in Indian ICUs`,
        mnemonics: [
          {
            text: "Shock Resuscitation: 30-65-50 rule",
            explanation:
              "30 mL/kg fluid in first 3 hours, MAP target ≥65 mmHg, hydrocortisone 50 mg Q6H if refractory",
          },
          {
            text: "MAPS: MAP≥65, Antibiotics within 1hr, Pressors if refractory, Source control",
            explanation:
              "Goals of septic shock management: maintain MAP, start antibiotics urgently, use vasopressors if fluid-resistant, control infection source",
          },
        ],
        keyPoints: [
          "Recognize shock: BP <90, hypoperfusion signs, lactate >2",
          "Initial bolus: 30 mL/kg crystalloid in 3 hours",
          "MAP target: ≥65 mmHg with vasopressors if needed",
          "Norepinephrine 0.01-2 mcg/kg/min if fluid-refractory",
          "Sepsis: antibiotics within 1 hour, lactate-guided therapy, source control essential",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 267 - Shock",
            edition: "21st",
          },
          {
            book: "Surviving Sepsis Campaign 2021 Update",
            chapter: "Sepsis Management Bundles",
            edition: "2021",
          },
        ],
      },
      {
        layer: 4,
        slug: "shock-critical-exam-prep",
        title: "Shock - Exam Prep & High-Yield Facts",
        estimatedMinutes: 20,
        summary:
          "High-yield one-liners, comparison tables, and frequently tested concepts for NEXT/NEET PG exams on shock management.",
        contentMd: `# Shock - Exam Prep

## High-Yield One-Liners
- **Definition**: Inadequate tissue perfusion → cellular hypoxia and death if untreated
- **Four types**: Hypovolemic, cardiogenic, distributive, obstructive
- **Hypovolemic shock**: Cold extremities, low CVP, low PCWP, high SVR
- **Cardiogenic shock**: Pulmonary edema, high CVP, high PCWP, high SVR
- **Septic shock**: Warm extremities, low CVR, high CO early, low SVR
- **MAP target**: ≥65 mmHg in all shock types
- **Lactate >4**: Marker of tissue hypoxia; lactate clearance guides therapy
- **First vasopressor**: Norepinephrine (0.01-2 mcg/kg/min)
- **Fluid-first approach**: Crystalloid before pressors in hypovolemic and septic shock
- **Sepsis timeline**: Antibiotics within 1 hour, fluid within 3 hours, vasopressor if refractory

## Comparison: Shock Types
| Feature | Hypovolemic | Cardiogenic | Septic | Obstructive |
|---------|------------|-----------|--------|-----------|
| **Extremities** | Cold | Cold | Warm (early) | Variable |
| **JVP** | Low | High | Low | High |
| **Pulmonary edema** | No | Yes | Sometimes | Variable |
| **CVP** | ↓ | ↑↑ | Low/Normal | High |
| **CO** | ↓ | ↓ | ↑ early | ↓ |
| **SVR** | ↑↑ | ↑↑ | ↓↓ | ↑↑ |

## Vasopressor Pharmacology
| Agent | Receptors | CO | SVR | HR | Use |
|-------|----------|----|----|----|----|
| Norepinephrine | α>>β | ↑ | ↑↑ | ↑ | All shock types |
| Dopamine (mid) | β>>α | ↑ | ↑ | ↑↑ | Bradycardia + inotrope |
| Vasopressin | V₁ | ↔ | ↑ | ↔ | Adjunct septic shock |
| Dobutamine | β₁/β₂ | ↑↑ | ↓ | ↑↑ | Cardiogenic (EF low) |

## Fluid Resuscitation Key Points
- **Initial**: 30 mL/kg in first 3 hours (sepsis, hypovolemic)
- **Reassess**: CVP, lactate, urine output every 1-2 hours
- **Ringer's lactate**: Preferred (less acidosis than saline)
- **Blood products**: If Hb <7 or ongoing hemorrhage
- **Response markers**: BP↑, lactate clearance, urine output ↑, JVP normalizes

## Septic Shock Bundle (1-Hour)
1. Lactate drawn
2. Blood cultures (2 sets before antibiotics)
3. Broad-spectrum antibiotics IV
4. Fluid bolus 30 mL/kg if BP <90 or lactate ≥4
5. Vasopressor if hypotensive after fluid

## Lactate Interpretation
- **<2 mmol/L**: Normal
- **2-4 mmol/L**: Mild tissue hypoxia; monitor
- **>4 mmol/L**: Severe shock; urgent intervention
- **Lactate clearance ≥10% in 6hr**: Suggests improving perfusion
- **Persistent elevation despite intervention**: Poor prognostic sign

## Exam Traps
- **Do NOT give vasopressors before fluids** in hypovolemic shock (worsens tissue perfusion)
- **Do NOT mix norepinephrine with alkaline solutions** (inactivation)
- **CVP 8-12 is target**, but doesn't distinguish fluid-responsive from fluid-resistant
- **DO monitor lactate**, not just BP; BP can normalize while lactate persists (ongoing shock)
- **Septic vs non-septic**: Sepsis = infection + SIRS criteria; shock = organ dysfunction`,
        mnemonics: [
          {
            text: "NEO-VASO-DOPA: NEO (Norepinephrine) for All, VASO (Vasopressin) adjunct septic, DOPA (Dopamine) bradycardia only",
            explanation:
              "Norepinephrine is first-line for all shock types. Vasopressin added in refractory septic shock. Dopamine only for bradycardia requiring inotropic support.",
          },
          {
            text: "3-6-50: 3 hours for 30 mL/kg fluid, 6 hour lactate check, 50 mg hydrocortisone if refractory",
            explanation:
              "Sepsis resuscitation: 30 mL/kg fluid given in first 3 hours, reassess lactate at 6 hours, hydrocortisone 50 mg Q6H if shock refractory",
          },
        ],
        keyPoints: [
          "Shock = BP <90 + hypoperfusion signs + lactate >2",
          "Four types: hypovolemic (cold, low CVP), cardiogenic (pulmonary edema, high CVP), septic (warm, low SVR), obstructive (high CVP)",
          "Fluid-first then vasopressor for hypovolemic/septic shock",
          "Norepinephrine 0.01-2 mcg/kg/min, titrate to MAP ≥65",
          "Sepsis: antibiotics <1 hr, fluid <3 hr, lactate-guided, source control",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 267 - Shock",
            edition: "21st",
          },
          {
            book: "NEJM",
            chapter: "Septic Shock Management",
            edition: "Clinical Practice",
          },
        ],
      },
      {
        layer: 5,
        slug: "shock-critical-active-recall",
        title: "Shock - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-style Q&A for self-testing on shock recognition, hemodynamics, and management.",
        contentMd: `# Shock - Active Recall

**Q1:** Define shock in one sentence.
> Circulatory failure resulting in inadequate tissue perfusion and cellular hypoxia.

**Q2:** What are the four types of shock?
> 1. Hypovolemic (loss of intravascular volume)
> 2. Cardiogenic (pump failure)
> 3. Distributive (vasodilation, e.g., sepsis)
> 4. Obstructive (physical obstruction to flow)

**Q3:** In septic shock, what is the initial hemodynamic finding?
> Low SVR (systemic vascular resistance), initially high or normal CO (warm shock), low CVP.

**Q4:** What is the MAP target in shock management?
> ≥65 mmHg (mean arterial pressure).

**Q5:** What is the first-line vasopressor for septic shock?
> Norepinephrine 0.01-2 mcg/kg/min IV infusion.

**Q6:** How much fluid should be given in the first 3 hours of septic shock?
> 30 mL/kg of crystalloid (e.g., 2-2.5 L for 70 kg patient).

**Q7:** When do you start vasopressors in shock?
> After initial fluid bolus (30 mL/kg in 3 hours) if MAP remains <65 mmHg.

**Q8:** What is the significance of lactate >4 mmol/L in shock?
> Marker of severe tissue hypoxia; indicates inadequate tissue perfusion despite possible normal BP.

**Q9:** What is lactate clearance and what goal is targeted?
> Reduction in blood lactate over time; goal is ≥10% clearance per 6 hours.

**Q10:** What is the "surviving sepsis bundle" for the first 6 hours?
> Lactate measurement, blood cultures, broad-spectrum antibiotics, fluid bolus 30 mL/kg, vasopressors if hypotensive after fluid.

**Q11:** Differentiate hypovolemic from septic shock by peripheral signs.
> Hypovolemic: cold extremities, low JVP, low CVP. Septic (early): warm extremities, bounding pulse, low SVR.

**Q12:** What is cardiogenic shock and its classic hemodynamic finding?
> Pump failure from acute MI or cardiomyopathy; classic finding is elevated CVP, elevated PCWP, reduced CO, elevated SVR.

**Q13:** List three causes of obstructive shock.
> Pulmonary embolism, tension pneumothorax, cardiac tamponade (Beck's triad).

**Q14:** Why is ringer's lactate preferred over normal saline in septic shock?
> Ringer's lactate avoids hyperchloremic acidosis from normal saline; lactate is metabolized to bicarbonate.

**Q15:** What does CVP 8-12 mmHg represent?
> Target central venous pressure goal after initial fluid resuscitation in shock.`,
        mnemonics: [
          {
            text: "SHOCK = S-CVP, Heart-high PCWP, Obstruction-variable, Circulation-low SVR, Know vasopressors",
            explanation:
              "Memory aid: Septic = low CVP, Heart = high PCWP, Obstruction = variable, Circulation = low SVR in different shock types",
          },
        ],
        keyPoints: [
          "Shock = inadequate perfusion → hypoxia → metabolic acidosis",
          "Hypovolemic: ↓CVP, ↓CO, ↑SVR; cardiogenic: ↑CVP, ↓CO, ↑SVR; septic: ↓SVR, ↑CO early",
          "Fluid-first: 30 mL/kg in 3 hours before vasopressors",
          "MAP target ≥65 with norepinephrine if refractory",
          "Lactate >4 indicates severe shock; monitor lactate clearance (goal ≥10% per 6 hr)",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 267 - Shock",
            edition: "21st",
          },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TOPIC 2: ARDS & MECHANICAL VENTILATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    topicCode: "IM-MOD-12-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "ards-ventilation-foundation",
        title: "ARDS & Mechanical Ventilation - Foundation",
        estimatedMinutes: 30,
        summary:
          "ARDS is acute lung injury with bilateral infiltrates and hypoxemia due to increased capillary permeability. Berlin criteria define ARDS severity. Lung-protective ventilation uses low tidal volumes (6 mL/kg) and plateau pressure <30 cmH₂O. PEEP, prone positioning, and ECMO are adjunctive strategies.",
        contentMd: `# ARDS & Mechanical Ventilation - Foundation

## Definition: ARDS (Acute Respiratory Distress Syndrome)
Acute lung injury characterized by:
- **Bilateral infiltrates** on imaging (CXR/CT)
- **Hypoxemia**: P/F ratio (PaO₂/FiO₂) ≤300
- **Non-cardiogenic pulmonary edema** (PAWP ≤18 mmHg or no evidence of left-sided heart failure)
- **Rapid onset**: Within 1 week of known insult

## Berlin Definition of ARDS Severity (2012)
Based on P/F ratio while on PEEP ≥5 cmH₂O:

| Severity | P/F Ratio | Mortality |
|----------|-----------|-----------|
| **Mild** | 201-300 | ~27% |
| **Moderate** | 101-200 | ~32% |
| **Severe** | ≤100 | ~45% |

## Common Causes of ARDS
### Pulmonary (Direct Lung Injury)
- Pneumonia (bacterial, viral, fungal)
- Aspiration (gastric, oily)
- Pulmonary contusion from trauma
- Near-drowning
- Smoke inhalation

### Extrapulmonary (Systemic)
- Sepsis (most common ICU cause)
- Pancreatitis (severe)
- Massive transfusion
- Burns
- Major trauma
- Fat embolism syndrome
- Amniotic fluid embolism

## Pathophysiology: Diffuse Alveolar Damage (DAD)

### Acute Phase (Days 1-7)
- **Increased capillary permeability** from inflammatory cytokines (TNF-α, IL-6, IL-8)
- **Protein-rich fluid leaks** into alveolar space
- **Formation of hyaline membranes** (protein + fibrin + cellular debris)
- **Loss of surfactant** → alveolar collapse (atelectasis)
- **Ventilation-perfusion mismatch** → hypoxemia

### Organizing Phase (Days 7-21)
- **Fibroblast proliferation** → early fibrosis
- **Type II pneumocyte regeneration** → attempted repair
- **Risk of progression** to pulmonary fibrosis if severe

## Mechanism of Hypoxemia in ARDS
1. **Atelectasis**: Alveolar collapse from loss of surfactant
2. **Shunting**: Perfusion of non-ventilated alveoli (P/F ratio remains low despite ↑FiO₂)
3. **Diffusion impairment**: Thickened alveolar-capillary membrane (hyaline membrane)
4. **Ventilation-perfusion mismatch**: Some regions ventilated but not perfused, others perfused but not ventilated

## Clinical Presentation
- **Dyspnea**: Acute onset, progressive over hours
- **Hypoxemia**: Refractory to supplemental O₂
- **Tachypnea**: RR >20 at onset
- **Chest X-ray**: **Bilateral infiltrates** (not localized consolidation)
- **ABG**: Respiratory alkalosis early (hyperventilation), then mixed acidosis if decompensating

## Key Diagnostic Feature
**Bilateral infiltrates** (CXR/CT) + **hypoxemia** + **exclusion of cardiogenic pulmonary edema** (PAWP <18 or BNP low or echo normal EF)`,
        mnemonics: [
          {
            text: "Berlin P/F: 200-300 Mild, 100-200 Moderate, <100 Severe",
            explanation:
              "Berlin ARDS severity classification based on P/F ratio (PaO₂ / FiO₂): 201-300 mild, 101-200 moderate, ≤100 severe",
          },
          {
            text: "DAD = Hyaline membrane + surfactant loss + atelectasis",
            explanation:
              "Diffuse alveolar damage in ARDS: hyaline membranes form, surfactant is lost, alveoli collapse → shunting and hypoxemia",
          },
        ],
        keyPoints: [
          "ARDS: bilateral infiltrates + P/F ratio ≤300 + non-cardiogenic pulmonary edema",
          "Severity graded by P/F ratio: mild 201-300, moderate 101-200, severe ≤100",
          "Most common ICU cause: sepsis",
          "Pathophysiology: increased capillary permeability → hyaline membrane → atelectasis → shunting",
          "Hypoxemia refractory to supplemental O₂ due to shunting and diffusion impairment",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 261 - ARDS",
            edition: "21st",
          },
          {
            book: "American Journal of Respiratory and Critical Care Medicine",
            chapter: "Berlin Definition of ARDS (2012)",
            edition: "2012",
          },
        ],
      },
      {
        layer: 2,
        slug: "ards-ventilation-mechanism",
        title: "ARDS & Ventilation - Lung-Protective Strategies & PEEP",
        estimatedMinutes: 35,
        summary:
          "Lung-protective ventilation reduces ventilator-induced lung injury (VILI) through low tidal volumes (6 mL/kg ideal body weight), plateau pressure <30 cmH₂O, appropriate PEEP, and recruitment maneuvers. ECMO and prone positioning improve outcomes in severe ARDS.",
        contentMd: `# Lung-Protective Ventilation Strategy

## Ventilator-Induced Lung Injury (VILI)
Mechanical ventilation, while life-saving, can worsen lung injury through:

### Barotrauma/Volutrauma
- **Overdistension** of alveoli with high tidal volumes → rupture → pneumothorax, subcutaneous emphysema
- **Mechanism**: High transpulmonary pressure (airway pressure - pleural pressure)
- **Prevention**: Limit tidal volume to 6 mL/kg ideal body weight; limit plateau pressure to <30 cmH₂O

### Atelectotrauma
- **Repetitive opening and closing** of atelectic alveoli → shear stress → inflammation
- **Prevention**: Adequate PEEP to keep alveoli recruited

### Biotrauma
- **Inflammatory mediators released** from damaged alveoli → enter bloodstream → multi-organ dysfunction
- **TNF-α, IL-6, IL-8** worsen systemic inflammation
- **Prevention**: Gentle ventilation (low volumes, pressures)

## Lung-Protective Ventilation Protocol (ARDSNet Trial)

### Initial Settings
1. **Tidal Volume**: 6 mL/kg of **ideal body weight** (IBW)
   - Male: IBW = 50 + 2.3 × (height in inches - 60)
   - Female: IBW = 45.5 + 2.3 × (height in inches - 60)
   - Start at 6 mL/kg IBW, NOT actual body weight

2. **Rate**: 10-20 breaths/min (allow for permissive hypercapnia)
   - Target: Respiratory acidosis acceptable (pH >7.15)

3. **PEEP/FiO₂ Table**: Start with minimal PEEP/FiO₂, increase together
   - Low: PEEP 5, FiO₂ 0.3; Moderate: PEEP 10, FiO₂ 0.4-0.6; High: PEEP ≥15, FiO₂ ≥0.8

### Pressure Targets
- **Plateau pressure** (measured during inspiratory hold): **<30 cmH₂O**
  - If Pplat >30: Decrease tidal volume further (minimum 4 mL/kg)
  - If Pplat <25 and FiO₂ <0.3: May increase tidal volume slightly

### Oxygenation Targets
- **SpO₂**: 88-95%
- **PaO₂**: 55-80 mmHg (permissive hypoxemia acceptable in ARDS)
- Increase FiO₂ and PEEP together per ARDSNet table

## PEEP (Positive End-Expiratory Pressure)
- **Purpose**: Maintains alveolar recruitment at end-expiration
- **Effect**: Shifts poorly ventilated but perfused areas to ventilated areas → reduces shunting
- **ARDSNet**: Low PEEP (≥5) vs High PEEP (≥15) — outcomes similar, so low PEEP standard
- **Setting**: Typically 5-15 cmH₂O in ARDS

### PEEP-Finding Maneuver
- If severe hypoxemia (P/F <100): May perform recruitment maneuver
  - Increase PEEP to 25-30 cmH₂O for 30-40 seconds, then return to baseline + 2-3 cmH₂O
  - Monitor for hemodynamic compromise

## Prone Positioning
- **Indication**: Moderate-severe ARDS (P/F <150) not responding to conventional therapy
- **Mechanism**: Improves ventilation-perfusion matching; redistributes blood flow to better-ventilated regions
- **Outcome**: **PROSEVA trial** showed reduced mortality (32% prone vs 41% supine)
- **Protocol**: 16 hours/day of prone positioning × 5-7 days
- **Contraindications**: Severe hemodynamic instability, facial/spinal surgery, recent abdominal surgery

## ECMO (Extracorporeal Membrane Oxygenation)
- **Indication**: Severe ARDS (P/F ≤50 despite lung-protective ventilation) or refractory shock
- **Types**: VV-ECMO (veno-venous, for oxygenation/CO₂ removal) or VA-ECMO (veno-arterial, includes cardiac support)
- **EOLIA trial**: VV-ECMO in severe ARDS — reduced mortality trend but increased bleeding complications
- **Current use**: Rescue therapy in centers with ECMO capability; not standard in all Indian ICUs

## Permissive Hypercapnia
- **Definition**: Allowing PaCO₂ to rise (>45 mmHg) to avoid high tidal volumes/pressures
- **Acceptable range**: PaCO₂ 45-80 mmHg if pH >7.15
- **Benefit**: Reduces VILI
- **Risk**: Worsens intracranial pressure if head injury; contraindicated in ICP concerns`,
        mnemonics: [
          {
            text: "ARDSNet 6-30: 6 mL/kg tidal volume, Plateau <30 cmH₂O",
            explanation:
              "Lung-protective ventilation: tidal volume 6 mL/kg ideal body weight, maintain plateau pressure <30 cmH₂O to prevent volutrauma",
          },
          {
            text: "PEEP-PRONE-ECMO ladder: Start PEEP, try Prone at P/F <150, escalate to ECMO if P/F <50",
            explanation:
              "Escalation strategy in ARDS: optimize PEEP, prone positioning for moderate-severe hypoxemia, ECMO as rescue therapy",
          },
        ],
        keyPoints: [
          "Tidal volume 6 mL/kg ideal body weight (not actual weight)",
          "Plateau pressure <30 cmH₂O to prevent volutrauma",
          "PEEP ≥5 for recruitment; ARDSNet low PEEP equally effective as high PEEP",
          "Prone positioning: 16 hr/day if P/F <150, reduces mortality",
          "Permissive hypercapnia acceptable (pH >7.15) to minimize VILI",
        ],
        textbookRefs: [
          {
            book: "NEJM",
            chapter: "Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes (ARDSNet)",
            edition: "2000",
          },
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 261 - ARDS",
            edition: "21st",
          },
        ],
      },
      {
        layer: 3,
        slug: "ards-ventilation-clinical",
        title: "ARDS - Clinical Diagnosis, Management, & Indian Context",
        estimatedMinutes: 30,
        summary:
          "Diagnostic workup (CXR, CT, echocardiography), differentiating ARDS from cardiogenic edema, supportive care (fluid management, infection control), and ARDS management in Indian ICUs with resource limitations.",
        contentMd: `# ARDS - Clinical Diagnosis & Management

## Diagnostic Approach
### Step 1: Recognize at-risk patient
- **Risk factors**: Sepsis, aspiration, pneumonia, massive transfusion, pancreatitis, trauma
- **Presentation**: Acute dyspnea, hypoxemia refractory to O₂, tachypnea

### Step 2: Imaging
- **Chest X-ray**: **Bilateral infiltrates** (not localized to one lobe)
  - Distributes both lungs; may have ground-glass opacities or consolidation
  - Absence of cardiac silhouette enlargement (unlike pulmonary edema)

- **High-resolution CT chest**: Shows extent of lung involvement
  - "Dependent atelectasis" in supine patients (posterior lung bases)
  - Diffuse pulmonary infiltrates

### Step 3: Exclude Cardiogenic Pulmonary Edema
- **Clinical**: Orthopnea, PND, peripheral edema, cardiomegaly on CXR
- **Echocardiography**: Assess EF; if EF >45%, cardiogenic edema unlikely
- **Pulmonary capillary wedge pressure (PCWP)**: ≤18 mmHg in ARDS (may require Swan-Ganz catheter)
- **BNP/NT-proBNP**: Low in ARDS, high in cardiogenic failure (not definitive)

### Step 4: Calculate P/F Ratio & Assess Severity
$$P/F \\text{ ratio} = \\frac{PaO_2}{FiO_2}$$
- Get ABG on current FiO₂
- If P/F 201-300: Mild ARDS
- If P/F 101-200: Moderate ARDS
- If P/F ≤100: Severe ARDS (higher mortality)

## Management Framework

### Early ARDS (<7 days)
#### 1. Lung-Protective Ventilation
- Tidal volume 6 mL/kg IBW
- Plateau pressure <30 cmH₂O
- PEEP ≥5 (or higher if severe hypoxemia)
- FiO₂ target SpO₂ 88-95%

#### 2. Fluid Strategy
- **Conservative fluid approach**: Restrictive fluid management (if not hypotensive)
- **ARDS-ALI Trial (NHLBI)**: Restrictive strategy (CVP target 4-6, PCWP <13) improved oxygenation and ventilator-free days vs liberal strategy
- **BUT**: If shock present → give fluids for shock first; then restrict after stabilization
- Avoid fluid overload (worsens lung edema via capillary leak)

#### 3. Infection Control
- **Source identification**: Cultures (blood, sputum, urine)
- **Empiric antibiotics**: Within 1 hour if sepsis-related ARDS
- **Ventilator-associated pneumonia (VAP) prevention**:
  - Oral care with chlorhexidine
  - Elevate head of bed 30-45°
  - Subglottic secretion drainage (if available)
  - DVT prophylaxis

#### 4. Adjunctive Therapies
- **Corticosteroids**: Low-dose methylprednisolone (1 mg/kg/day) if ARDS >7 days may reduce mortality (controversial; not routine)
- **Neuromuscular blockade**: Consider if P/F <100 to improve oxygenation + reduce patient-ventilator dyssynchrony (cisatracurium or vecuronium 0.1 mg/kg bolus then infusion)
- **Sedation**: Propofol, midazolam to facilitate lung-protective ventilation
- **Analgesia**: Fentanyl drip for patient comfort

#### 5. Monitoring
- **Daily ABG**: Assess oxygenation, acid-base status
- **Chest X-ray**: Every 2-3 days; assess for improvement or complications (pneumothorax)
- **Plateau pressure checks**: Measure during inspiratory hold to confirm <30 cmH₂O
- **Lactate**: If shock; indicates inadequate perfusion

### Refractory ARDS (Severe, P/F <100)
- **Prone positioning**: 16 hours/day if available and tolerated
- **Recruitment maneuver**: Trial of higher PEEP (25-30) for 30-40 seconds, then return to baseline +2-3 cmH₂O
- **ECMO**: Refer if available and no contraindications

### ICU Management for Respiratory Support
- **Weaning**: When P/F >150 on PEEP ≤8, FiO₂ ≤0.4, can trial spontaneous breathing trial (SBT)
- **Tracheostomy**: Consider if anticipated ventilation >3 weeks
- **Post-ARDS**: Risk of pulmonary fibrosis; long-term follow-up recommended

## Indian ICU Context
- **Sepsis-related ARDS**: Most common in Indian ICUs (Gram-negative organisms, Candida)
- **Resource constraints**:
  - Limited availability of neuromuscular blockade; use sedation instead
  - ECMO rare; prone positioning not universally available
  - Echocardiography limited; rely on clinical judgment for cardiogenic vs ARDS
- **Ventilators**: Most modern ICUs have volume-controlled modes; pressure support available
- **Monitoring**: Frequent blood gas monitoring needed; pulse oximetry unreliable in low perfusion
- **Antibiotic stewardship**: Follow local hospital antibiogram; switch from empiric after cultures`,
        mnemonics: [
          {
            text: "ARDS Diagnosis: Bilateral infiltrates + P/F ≤300 + Exclude cardiogenic (PCWP <18 or normal EF)",
            explanation:
              "Berlin criteria for ARDS: bilateral infiltrates on imaging + hypoxemia P/F ≤300 + non-cardiogenic (rule out left-sided heart failure)",
          },
          {
            text: "ARDS Management: 6-30-Prone-Restrict fluid",
            explanation:
              "Lung-protective ventilation 6 mL/kg + Pplat <30, prone positioning for severe hypoxemia, restrictive fluid strategy if hemodynamically stable",
          },
        ],
        keyPoints: [
          "ARDS: bilateral infiltrates + P/F ≤300 + non-cardiogenic (PCWP <18 or normal EF)",
          "Severe ARDS: P/F ≤100; higher mortality (45%)",
          "Lung-protective ventilation: 6 mL/kg IBW, Pplat <30 cmH₂O",
          "Conservative fluid approach (CVP 4-6, PCWP <13) improves outcomes if no shock",
          "Prone positioning 16 hr/day if P/F <150; reduces mortality",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 261 - ARDS",
            edition: "21st",
          },
          {
            book: "NEJM",
            chapter: "Conservative vs Liberal Oxygen Therapy (LOCS trial)",
            edition: "2022",
          },
        ],
      },
      {
        layer: 4,
        slug: "ards-ventilation-exam-prep",
        title: "ARDS - Exam Prep & High-Yield Facts",
        estimatedMinutes: 20,
        summary:
          "High-yield one-liners, diagnostic pearls, and frequently tested concepts on ARDS classification, ventilation settings, and outcome predictors.",
        contentMd: `# ARDS - Exam Prep

## High-Yield One-Liners
- **ARDS definition**: Bilateral infiltrates + P/F ≤300 + non-cardiogenic pulmonary edema
- **Most common ICU cause of ARDS**: Sepsis
- **P/F ratio**: PaO₂ / FiO₂ on ABG
- **Mild ARDS**: P/F 201-300
- **Moderate ARDS**: P/F 101-200
- **Severe ARDS**: P/F ≤100
- **Lung-protective tidal volume**: 6 mL/kg of **ideal body weight**, not actual weight
- **Plateau pressure target**: <30 cmH₂O
- **PEEP**: ≥5 cmH₂O; ARDSNet low PEEP as effective as high PEEP
- **Prone positioning**: Benefit if P/F <150; reduces mortality
- **Permissive hypercapnia**: Acceptable if pH >7.15 to minimize VILI
- **Recruitment maneuver**: Trial increase PEEP to 25-30 for 30-40 seconds if severe hypoxemia
- **ECMO**: Rescue therapy if P/F <50 despite lung protection
- **Corticosteroids**: May benefit if ARDS >7 days (controversial)
- **Neuromuscular blockade**: Consider if P/F <100 to improve oxygenation

## Causes of ARDS
| Pulmonary Causes | Extrapulmonary Causes |
|------------------|----------------------|
| Pneumonia (bacterial, viral, fungal) | Sepsis |
| Aspiration (gastric content) | Pancreatitis |
| Pulmonary contusion | Massive transfusion |
| Near-drowning | Severe trauma |
| Smoke inhalation | Fat embolism |

## Diagnostic Pearls
- **Bilateral infiltrates** are KEY: if only one lobe affected, NOT ARDS
- **Cardiomegaly absent** on CXR (unlike cardiogenic pulmonary edema)
- **Exclude cardiogenic**: Check BNP (low in ARDS), echo (normal EF), PCWP <18
- **Calculate P/F**: Must have ABG on current FiO₂ to classify severity
- **Rapid onset**: Symptoms develop within 1 week of known insult

## Ventilation Strategy Comparison
| Approach | Tidal Volume | Pplat | Outcome |
|----------|--------------|-------|---------|
| Traditional | 12 mL/kg | 40-50 cmH₂O | Higher mortality (40%) |
| Lung-protective (ARDSNet) | 6 mL/kg | <30 cmH₂O | Lower mortality (22%) |

## PEEP Management
- **Low PEEP**: 5 cmH₂O (ARDSNet standard)
- **High PEEP**: ≥15 cmH₂O (not superior in trials)
- **Recruitment maneuver**: Trial if P/F <100
- **Auto-PEEP**: Monitor in asthmatic patients (can worsen barotrauma)

## Ventilator-Induced Lung Injury (VILI) Types
| Type | Mechanism | Prevention |
|------|-----------|-----------|
| **Volutrauma** | Overdistension of alveoli | Low tidal volume (6 mL/kg) |
| **Barotrauma** | High airway pressure | Limit plateau <30 cmH₂O |
| **Atelectotrauma** | Repetitive opening/closing | Adequate PEEP ≥5 |
| **Biotrauma** | Inflammatory mediators released | Gentle ventilation overall |

## Exam Traps
- **DO NOT confuse P/F ratio with FiO₂**: P/F is calculated from ABG; FiO₂ is oxygen delivered
- **ARDS vs Cardiogenic**: Bilateral infiltrates alone NOT enough; must exclude cardiogenic (check BNP, echo, PCWP)
- **Tidal volume**: Always use **ideal body weight**, not actual (critical in obese patients)
- **Permissive hypercapnia**: Acceptable ONLY if pH >7.15 (not if head injury)
- **Prone positioning**: Benefit at P/F <150, NOT P/F >200`,
        mnemonics: [
          {
            text: "Berlin P/F: 200-300 Mild, 100-200 Moderate, <100 Severe",
            explanation:
              "ARDS severity classification by P/F ratio: mild 201-300 (27% mortality), moderate 101-200 (32%), severe ≤100 (45%)",
          },
          {
            text: "ARDSNet 6-30: 6 mL/kg tidal volume, <30 cmH₂O plateau pressure",
            explanation:
              "Lung-protective ventilation landmark trial: reduced mortality from 40% (traditional 12 mL/kg) to 22% (ARDSNet 6 mL/kg)",
          },
        ],
        keyPoints: [
          "ARDS: bilateral infiltrates + P/F ≤300 + non-cardiogenic (exclude CHF)",
          "Lung-protective ventilation 6 mL/kg IBW, Pplat <30 cmH₂O reduces mortality",
          "Severity by P/F: mild 201-300, moderate 101-200, severe ≤100",
          "Prone positioning reduces mortality if P/F <150",
          "Conservative fluid strategy improves oxygenation (avoid fluid overload)",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 261 - ARDS",
            edition: "21st",
          },
          {
            book: "Lancet",
            chapter: "PROSEVA Trial (Prone Positioning)",
            edition: "2013",
          },
        ],
      },
      {
        layer: 5,
        slug: "ards-ventilation-active-recall",
        title: "ARDS & Ventilation - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-style Q&A for self-testing on ARDS diagnosis, ventilator management, and adjunctive therapies.",
        contentMd: `# ARDS & Ventilation - Active Recall

**Q1:** What is the Berlin definition of ARDS?
> Bilateral infiltrates on imaging + P/F ratio ≤300 + non-cardiogenic pulmonary edema (PAWP ≤18 or no left heart failure evidence)

**Q2:** What is the P/F ratio and how is it calculated?
> P/F ratio = PaO₂ / FiO₂; obtained from ABG on current oxygen concentration. Used to classify ARDS severity.

**Q3:** Define ARDS severity by P/F ratio.
> Mild: 201-300 (27% mortality); Moderate: 101-200 (32%); Severe: ≤100 (45%)

**Q4:** What is the most common cause of ARDS in the ICU?
> Sepsis (accounts for ~40% of ARDS cases)

**Q5:** List 3 pulmonary causes of ARDS.
> Pneumonia, aspiration, pulmonary contusion (also: near-drowning, smoke inhalation)

**Q6:** List 3 extrapulmonary causes of ARDS.
> Sepsis, severe pancreatitis, massive transfusion (also: severe trauma, fat embolism)

**Q7:** What is lung-protective ventilation and what is its mortality benefit?
> Tidal volume 6 mL/kg ideal body weight + plateau pressure <30 cmH₂O. ARDSNet trial showed reduced mortality from 40% (traditional 12 mL/kg) to 22%.

**Q8:** Why is ideal body weight used instead of actual body weight for tidal volume calculation?
> Obese patients have larger total weight but smaller lung capacity. Ideal body weight correlates better with lung size.

**Q9:** What is plateau pressure and how is it measured?
> Pressure at end-inspiration after inspiratory hold (0.5 sec pause). Reflects compliance of lungs and chest wall. Target <30 cmH₂O.

**Q10:** What is PEEP and what is its purpose in ARDS?
> Positive end-expiratory pressure. Keeps alveoli recruited at end-expiration, reduces atelectasis and shunting, improves oxygenation.

**Q11:** What is permissive hypercapnia?
> Allowing PaCO₂ to rise (>45 mmHg) to avoid high tidal volumes/pressures. Acceptable if pH >7.15.

**Q12:** When is prone positioning indicated in ARDS?
> P/F ratio <150 (moderate-severe ARDS); used 16 hours/day. PROSEVA trial showed 28% relative mortality reduction.

**Q13:** What is a recruitment maneuver and when is it used?
> Transient increase in PEEP to 25-30 cmH₂O for 30-40 seconds to re-recruit collapsed alveoli. Used if severe hypoxemia (P/F ≤100).

**Q14:** How do you differentiate ARDS from cardiogenic pulmonary edema?
> Check echocardiography (EF normal in ARDS, reduced in CHF), BNP (low in ARDS, high in CHF), PCWP (≤18 in ARDS, >18 in CHF).

**Q15:** What is neuromuscular blockade used for in ARDS?
> Paralyzes patient to improve oxygenation, reduce patient-ventilator dyssynchrony, and improve lung mechanics. Used if P/F <100.`,
        mnemonics: [
          {
            text: "ARDS = BILATERAL infiltrates + P/F ≤300 + non-Cardiogenic (exclude CHF)",
            explanation:
              "Berlin ARDS criteria: bilateral lung infiltrates (key finding), hypoxemia P/F ≤300, and exclusion of cardiogenic pulmonary edema",
          },
        ],
        keyPoints: [
          "ARDS: bilateral infiltrates + P/F ≤300 + non-cardiogenic (PCWP ≤18)",
          "Mild 201-300, moderate 101-200, severe ≤100 P/F",
          "Lung-protective ventilation 6 mL/kg IBW, Pplat <30 cmH₂O",
          "PEEP ≥5 cmH₂O for recruitment; recruitment maneuver if P/F <100",
          "Prone positioning 16 hr/day if P/F <150; reduces mortality",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 261 - ARDS",
            edition: "21st",
          },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TOPIC 3: SEPSIS & MULTIORGAN DYSFUNCTION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    topicCode: "IM-MOD-12-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "sepsis-mods-foundation",
        title: "Sepsis & Multiorgan Dysfunction - Foundation",
        estimatedMinutes: 30,
        summary:
          "Sepsis-3 defines sepsis as suspected/confirmed infection + SOFA ≥2. qSOFA (altered mentation, SBP ≤100, RR ≥22) predicts poor outcomes. MODS (multiple organ dysfunction syndrome) involves ≥2 organ failures. Lactate elevation indicates tissue hypoperfusion.",
        contentMd: `# Sepsis & Multiorgan Dysfunction - Foundation

## Definition: Sepsis-3 (2016)
**Sepsis = Suspected/confirmed infection + SOFA ≥2**

### Systemic Inflammatory Response (SIRS) — Historical, less used now
- Temperature >38°C or <36°C
- Heart rate >90/min
- Respiratory rate >20/min or PaCO₂ <32 mmHg
- WBC >12,000 or <4,000 or >10% bands

### Sequential Organ Failure Assessment (SOFA)
Scored 0-4 for each of 6 organ systems:

| Organ | Score 1 | Score 2 | Score 3 | Score 4 |
|-------|---------|---------|---------|---------|
| **Resp** | PaO₂/FiO₂ 300-400 | PaO₂/FiO₂ 200-300 | PaO₂/FiO₂ 100-200 | PaO₂/FiO₂ <100 |
| **Cardio** | MAP <70 | Dopamine ≤5 | Dopamine >5, norepi ≤0.1 | Norepi >0.1 or epi ≥0.1 |
| **Neuro** | GCS 13-14 | GCS 10-12 | GCS 6-9 | GCS <6 |
| **Renal** | Cr 1.1-1.9 | Cr 2.0-3.4 | Cr 3.5-4.9 | Cr >5 or UO <200 mL/day |
| **Liver** | Bili 1.1-1.9 | Bili 2.0-5.9 | Bili 6.0-11.9 | Bili >12 |
| **Coagulation** | Platelets 100-150k | Platelets 50-100k | Platelets 20-50k | Platelets <20k |

**SOFA ≥2 = Sepsis (in presence of infection)**

### Quick SOFA (qSOFA) — Bedside Screening
- Altered mentation (any GCS change)
- Systolic BP ≤100 mmHg
- Respiratory rate ≥22/min

**qSOFA ≥2**: Predicts ICU mortality; indicates need for investigations + intervention

## Septic Shock (Sepsis-3)
**Sepsis + Persistent hypotension (MAP <65 mmHg) OR Lactate >2 mmol/L despite adequate fluid**

## Multiple Organ Dysfunction Syndrome (MODS)
- **Definition**: Dysfunction of ≥2 organ systems in critically ill patients
- **Cause**: Infection, trauma, pancreatitis, massive transfusion
- **Sequence**: Often sequential: lung → kidney → liver → coagulation
- **Outcome**: Each additional organ involved increases mortality

### Organ-Specific Dysfunction
1. **Respiratory**: P/F ratio <300 (ARDS criteria)
2. **Cardiac**: CI <2.2 L/min/m², SvO₂ <60%
3. **Renal**: Creatinine >1.5 mg/dL or UO <0.5 mL/kg/hr
4. **Hepatic**: Bilirubin >2 mg/dL, PT prolonged
5. **Coagulation**: Platelets <100k, INR >1.5, D-dimer elevated
6. **CNS**: GCS <11

## Pathophysiology of Sepsis
1. **Pathogen recognition**: Pattern-recognition receptors (TLRs) detect PAMP/DAMP
2. **Cytokine storm**: TNF-α, IL-6, IL-8, IL-10 surge
3. **Endothelial dysfunction**: Increased vascular permeability → capillary leak, fluid extravasation
4. **Vasodilation**: Nitric oxide → loss of SVR
5. **Coagulopathy**: Tissue factor + thrombin activation → DIC
6. **Metabolic derangement**: Lactate accumulation, anaerobic metabolism`,
        mnemonics: [
          {
            text: "qSOFA: mental status, SBP ≤100, RR ≥22",
            explanation:
              "Quick SOFA bedside screening for sepsis: altered mentation, hypotension, tachypnea. qSOFA ≥2 predicts mortality.",
          },
          {
            text: "SOFA = Sepsis: 6 organs scored (Resp, Cardio, Neuro, Renal, Liver, coagulation)",
            explanation:
              "SOFA score assesses 6 organ systems (0-4 each); SOFA ≥2 with infection = sepsis diagnosis",
          },
        ],
        keyPoints: [
          "Sepsis-3: infection + SOFA ≥2 (or qSOFA ≥2 for bedside screening)",
          "Septic shock: sepsis + persistent hypotension (MAP <65) OR lactate >2 despite fluid",
          "MODS: dysfunction of ≥2 organ systems; each organ increases mortality",
          "qSOFA ≥2 predicts worse outcomes; include in sepsis workup",
          "Pathophysiology: cytokine storm → endothelial damage → vasodilation → DIC",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 268 - Sepsis",
            edition: "21st",
          },
          {
            book: "Critical Care Medicine",
            chapter: "Sepsis-3 Definition (JAMA 2016)",
            edition: "2016",
          },
        ],
      },
      {
        layer: 2,
        slug: "sepsis-mods-mechanism",
        title: "Sepsis Pathophysiology & Surviving Sepsis Campaign Bundle",
        estimatedMinutes: 35,
        summary:
          "Cascade of sepsis: recognition, cytokine release, endothelial injury, vasodilation, coagulopathy. Surviving Sepsis Campaign 2021 guidelines: 1-hour bundle (lactate, cultures, antibiotics, fluids, vasopressors, lactate monitoring).",
        contentMd: `# Sepsis Pathophysiology & Management Bundle

## Cascade of Sepsis

### 1. Pathogen Recognition (Immediate)
- TLR2/4 activation by gram-positive/gram-negative LPS
- Complement system activation (C5a, C3a)
- Coagulation cascade initiated

### 2. Innate Immune Activation (Minutes)
- **Macrophage/neutrophil activation**: Release TNF-α, IL-6, IL-8
- **Cytokine amplification**: IL-6 drives systemic inflammation
- **IL-10 release**: Counter-regulatory (may cause immunosuppression late)

### 3. Endothelial Dysfunction (Hours)
- **Increased permeability**: VE-cadherin disruption, tight junction loss
- **Capillary leak**: Fluid shifts to interstitium → hypovolemia, tissue edema
- **Platelet activation**: Microthrombi formation

### 4. Vasodilation & Hypotension
- **Nitric oxide surge**: Excessive vasodilation → MAP <65
- **Loss of SVR**: Despite high cardiac output initially (warm shock)
- **Mitochondrial dysfunction**: Impaired oxygen utilization at cellular level

### 5. Coagulopathy & DIC
- **TF pathway activation**: Tissue factor + VIIa complex
- **Thrombin generation**: Fibrin deposition in microvasculature
- **Fibrinolysis inhibition**: Reduced tPA, high PAI-1
- **Platelet consumption**: Thrombocytopenia
- **Outcome**: DIC (disseminated intravascular coagulation) with bleeding + clotting

### 6. Organ Dysfunction
- **Hypoperfusion + inflammation**: Each organ faces ischemia + oxidative stress
- **Sequence**: Often lung first (ARDS-like), then kidney (AKI), liver (coagulopathy), coagulation (DIC)
- **Cytokine-mediated**: IL-6 directly impairs organ function (myocardial dysfunction, renal vasoconstriction)

## Surviving Sepsis Campaign 2021 Guidelines

### 1-Hour Bundle (Source Control Hour)
**MUST complete within 1 hour for septic shock:**

1. **Measure lactate** (venous acceptable if arterial not available)
2. **Obtain blood cultures** (2 sets before antibiotics)
3. **Start broad-spectrum antibiotics IV** immediately
4. **Initiate fluid bolus** 30 mL/kg crystalloid if hypotensive or lactate ≥4
5. **Apply vasopressor** if hypotensive after fluid (target MAP ≥65)
6. **Reassess perfusion** after 6 hours (lactate, urine output, mental status)

### 3-Hour Bundle (Emergency Department/Early ICU)
- Lactate measurement and clearance monitoring
- Blood cultures
- Broad-spectrum antibiotics
- Fluid resuscitation 30 mL/kg crystalloid
- Vasopressor if MAP <65 after fluid

### 6-Hour Bundle
- Lactate re-measurement and clearance assessment
- Reassess volume status (CVP, PCWP if available)
- Continue vasopressor titration to MAP ≥65
- Source control measures (surgery, drainage, catheter removal)
- Repeat lactate at 6 hours; if not cleared, consider hydrocortisone

## Sepsis-Related Organ Dysfunction Assessment

### Lactate as Marker of Tissue Hypoperfusion
- **Normal**: <2 mmol/L
- **Elevated**: 2-4 mmol/L (concern)
- **Severe**: >4 mmol/L (septic shock likely)
- **Lactate clearance**: ≥10% reduction per 6 hours indicates improving perfusion
- **Persistent elevation**: Despite normalization of BP → ongoing cellular hypoperfusion (septic shock phenotype)

### Source Identification
Common sources in Indian ICU:
- **GI perforation** (peptic ulcer, appendicitis, diverticulitis)
- **Community-acquired pneumonia** (bacterial: Streptococcus, Haemophilus)
- **UTI/pyelonephritis** (E. coli, Klebsiella, Pseudomonas)
- **Intra-abdominal abscess** (post-surgical, spontaneous)
- **Candidemia** (immunocompromised, post-antibiotics)

### Empiric Antibiotics (Before Culture Results)
Follow **local hospital antibiogram**:
- **Community-acquired**: Ceftriaxone + fluoroquinolone or amoxicillin-clavulanate
- **Nosocomial/ICU**: Piperacillin-tazobactam ± aminoglycoside ± vancomycin (MRSA coverage)
- **Severe/septic shock**: Broad coverage; narrow after cultures (48-72 hr)

## Adjunctive Therapies

### Hydrocortisone
- **Dose**: 50 mg IV Q6H for 7 days if refractory hypotension
- **Mechanism**: Restores vascular responsiveness to catecholamines
- **Evidence**: Marginal benefit; consider if shock refractory despite fluids + vasopressors
- **Contraindication**: Active infection requiring longer therapy (risk of immunosuppression)

### Vasopressor Escalation in Septic Shock
1. **Fluid-first**: 30 mL/kg bolus in 3 hours
2. **Norepinephrine 0.01-2 mcg/kg/min**: If MAP <65 after fluid
3. **Add vasopressin 0.04 units/min**: If norepinephrine alone insufficient
4. **Add hydrocortisone 50 mg Q6H**: If MAP still <65

### Source Control
- **Imaging**: CT abdomen/pelvis if intra-abdominal source suspected
- **Drainage**: Percutaneous or surgical drainage of abscess
- **Debridement**: Remove necrotic/infected tissue
- **Catheter removal**: Remove infected central/urinary lines if not essential`,
        mnemonics: [
          {
            text: "Surviving Sepsis 1-HOUR: Lactate, cultures, antibiotic, fluid, Output, Reassess",
            explanation:
              "1-hour bundle: measure Lactate, Blood cultures, start Antibiotics, fluid 30 mL/kg, vasopressors if needed, reassess perfusion",
          },
          {
            text: "Sepsis cascade: Recognition → Cytokines → Endothelial → Vasodilation → Coagulopathy → MODS",
            explanation:
              "Pathophysiology progression: pathogen TLR activation → cytokine storm → vascular permeability → loss of SVR → DIC → organ failure",
          },
        ],
        keyPoints: [
          "Surviving Sepsis 1-hour bundle: lactate, cultures, antibiotics, fluid 30 mL/kg, vasopressors, reassess at 6 hr",
          "Lactate >4 mmol/L indicates septic shock; monitor lactate clearance ≥10% per 6 hr",
          "Norepinephrine 0.01-2 mcg/kg/min if MAP <65 after fluid",
          "Add vasopressin 0.04 units/min if norepinephrine alone insufficient",
          "Source control essential: identify, drain, debride infected sites",
        ],
        textbookRefs: [
          {
            book: "Critical Care Medicine",
            chapter: "Surviving Sepsis Campaign 2021 Update",
            edition: "2021",
          },
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 268 - Sepsis",
            edition: "21st",
          },
        ],
      },
      {
        layer: 3,
        slug: "sepsis-mods-clinical",
        title: "Sepsis - Clinical Recognition, Diagnostic Workup, & Indian Context",
        estimatedMinutes: 30,
        summary:
          "Recognizing sepsis at bedside, diagnostic algorithm (cultures, imaging, lactate, SOFA), differentiating infection from non-infectious SIRS, managing sepsis in Indian ICUs with limited resources.",
        contentMd: `# Sepsis - Clinical Diagnosis & Management

## Bedside Recognition Algorithm

### Step 1: Identify At-Risk Patient
- **Fever** (>38.3°C) or hypothermia (<36°C)
- **Suspected/confirmed infection**: Source? (respiratory, urinary, intra-abdominal, skin)
- **SIRS criteria**: HR >90, RR >20, temp abnormal, WBC abnormal
- **Altered mental status**: Confusion, agitation, lethargy (early sign!)

### Step 2: Calculate qSOFA (Bedside)
- **Altered mentation**: Yes/No
- **SBP ≤100 mmHg**: Yes/No
- **RR ≥22/min**: Yes/No
- **If qSOFA ≥2**: High-risk sepsis; proceed to full SOFA + investigations

### Step 3: Calculate SOFA Score (Complete Assessment)
- **6 organ systems**: Resp (P/F), Cardio (MAP/pressors), Neuro (GCS), Renal (Cr/UO), Liver (Bili), Coag (Plt)
- **SOFA ≥2 with infection = SEPSIS diagnosis**

### Step 4: Investigations (Immediate)
1. **Blood cultures**: 2 sets before antibiotics (critical!)
2. **Lactate**: Venous or arterial; marks tissue hypoperfusion
3. **Complete blood count**: WBC (elevated or low — both bad), Hb, platelets
4. **Comprehensive metabolic panel**: Creatinine (renal function), bilirubin (liver), glucose
5. **Coagulation profile**: PT/INR, PTT, D-dimer (assess for DIC)
6. **Liver function tests**: ALT, AST, bilirubin
7. **Blood gas (ABG)**: pH, PaCO₂, HCO₃⁻, base deficit (assess acidosis)
8. **Imaging**: CXR if respiratory source; CT abdomen/pelvis if intra-abdominal suspected

## Differential Diagnosis: Infection vs Non-Infectious SIRS

| Finding | Sepsis | SIRS (Non-Infectious) |
|---------|--------|----------------------|
| **Source** | Infection identified | No infection (trauma, pancreatitis, burn) |
| **Culture** | Often positive | Always negative |
| **Response to antibiotics** | Yes | No change |
| **Lactate clearance** | With treatment | Slower |
| **Procalcitonin** | Elevated | Low/normal |

## Indian ICU Sepsis Context

### Common Organisms
- **Community-acquired**: Streptococcus pneumoniae, Haemophilus influenzae, Gram-negatives (E. coli)
- **Hospital-acquired**: MRSA, Pseudomonas aeruginosa, Klebsiella, Candida, Acinetobacter
- **Nosocomial risk**: Poor infection control, frequent catheterization, antibiotic overuse

### Antibiotic Selection (Before Culture Results)
Follow **institutional antibiogram**:
- **First-line for CAP**: Ceftriaxone + macrolide (azithromycin)
- **First-line for Gram-negative (urinary, GI)**: Cefotaxime or fluoroquinolone + gentamicin
- **Severe/ICU/nosocomial**: Piperacillin-tazobactam ± vancomycin
- **Antifungal if high risk**: Fluconazole or caspofungin if history of candidiasis

### Resource Constraints in Indian ICUs
- **Limited Swan-Ganz**: Use clinical assessment (JVP, urine output, lactate)
- **Limited imaging**: Ultrasound may replace CT for fluid assessment
- **Limited laboratory turnaround**: May delay results; start antibiotics empirically
- **Sepsis screening**: Rely on qSOFA + lactate + clinical judgment
- **Source identification**: Often surgical source (perforation) requires imaging

### Source Control in Indian Settings
- **GI perforation**: Urgent surgical consult; peritoneal lavage + source control
- **Abscess drainage**: Percutaneous ultrasound-guided if available; otherwise surgical
- **Line infections**: Remove infected catheters; replace at different site
- **UTI/pyelonephritis**: Consider percutaneous nephrostomy if obstructed + infected

## Lactate-Guided Therapy
- **Measure at 0, 3, 6 hours**
- **Goal**: Lactate clearance ≥10% per 6 hours
- **If not clearing**: Indicates ongoing hypoperfusion
  - Increase fluid if hypovolemic
  - Escalate vasopressors if hypotensive
  - Consider hydrocortisone 50 mg Q6H
  - Search for missed source of infection

## Monitoring Sepsis Response (First 24-48 Hours)
- **Vital signs**: Normalization of HR, BP, RR
- **Mental status**: Return to baseline cognition
- **Urine output**: >0.5 mL/kg/hr (indicates renal perfusion)
- **Lactate**: Clearing (reduction ≥10% per 6 hr)
- **Organ function**: Improving SOFA score (ideally by 1 point per 24 hr)
- **Infection source**: Controlled (antibiotics initiated, source drained)`,
        mnemonics: [
          {
            text: "Sepsis workup: Lactate, Cultures, Imaging source, Treatment (ABx + fluids + pressors)",
            explanation:
              "Diagnostic and management priorities: measure lactate + get cultures before antibiotics, image to find source, start antibiotics/fluids/vasopressors",
          },
          {
            text: "qSOFA screening: altered Mentation, SBP ≤100, RR ≥22; if ≥2 = high risk",
            explanation:
              "Bedside quick assessment: altered mentation, hypotension, tachypnea. qSOFA ≥2 predicts mortality; proceed to full sepsis workup",
          },
        ],
        keyPoints: [
          "qSOFA ≥2 (altered mentation, SBP ≤100, RR ≥22) screens for sepsis; high mortality predictor",
          "SOFA ≥2 with infection = sepsis diagnosis",
          "Blood cultures before antibiotics; lactate measurement mandatory",
          "Antibiotics within 1 hour; fluid 30 mL/kg in 3 hours",
          "Lactate-guided therapy: goal clearance ≥10% per 6 hr; persistent elevation indicates ongoing shock",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 268 - Sepsis",
            edition: "21st",
          },
          {
            book: "Critical Care Medicine",
            chapter: "Sepsis-3 Definition & Management",
            edition: "2021",
          },
        ],
      },
      {
        layer: 4,
        slug: "sepsis-mods-exam-prep",
        title: "Sepsis - Exam Prep & High-Yield Facts",
        estimatedMinutes: 20,
        summary:
          "High-yield one-liners on Sepsis-3 definition, SOFA scoring, qSOFA, Surviving Sepsis Bundle, and frequently tested concepts.",
        contentMd: `# Sepsis - Exam Prep

## High-Yield One-Liners
- **Sepsis**: Suspected/confirmed infection + SOFA ≥2
- **Septic shock**: Sepsis + persistent hypotension (MAP <65) OR lactate >2 despite fluid
- **qSOFA**: Altered mentation + SBP ≤100 + RR ≥22; ≥2 predicts mortality
- **SOFA ≥2**: Threshold for sepsis diagnosis in presence of infection
- **Lactate >4 mmol/L**: Marker of septic shock; indicates tissue hypoperfusion
- **Lactate clearance**: Goal ≥10% reduction per 6 hours
- **1-hour bundle**: Lactate, cultures, antibiotics, fluid, vasopressor, reassess
- **Fluid bolus**: 30 mL/kg crystalloid in first 3 hours
- **Vasopressor**: Norepinephrine 0.01-2 mcg/kg/min if MAP <65 after fluid
- **Hydrocortisone**: 50 mg IV Q6H if refractory hypotension (controversial)
- **MODS**: Dysfunction of ≥2 organs; mortality increases with each additional organ
- **Common sepsis sources**: Pneumonia, UTI, GI perforation, intra-abdominal abscess
- **Procalcitonin**: Elevated in bacterial sepsis; helps differentiate from viral
- **Source control**: Critical for sepsis outcome; includes drainage, debridement, antibiotic adjustment

## SOFA Score Quick Reference
| System | 0 | 1 | 2 | 3 | 4 |
|--------|---|---|---|---|---|
| **Resp** | — | 300-400 | 200-300 | 100-200 | <100 |
| **Cardio** | — | MAP <70 | Dopa ≤5 | Dopa >5, norepi ≤0.1 | Norepi >0.1 or epi ≥0.1 |

## Sepsis-3 vs Sepsis-2
| Criteria | Sepsis-2 | Sepsis-3 |
|----------|----------|----------|
| **Definition** | SIRS + infection | SOFA ≥2 + infection |
| **Septic shock** | Sepsis + hypotension | Sepsis + persistent hypotension/lactate ≥2 |
| **Accuracy** | SIRS non-specific | More specific for organ dysfunction |

## Surviving Sepsis Campaign Timeline
- **Hour 1**: Lactate, cultures, antibiotics, fluid bolus, vasopressor if needed
- **Hour 3**: Re-assess fluids, continue pressure support
- **Hour 6**: Lactate re-check, reassess perfusion, source control
- **24 hours**: Organ function improving, source controlled, off vasopressors if possible

## Organ-Specific SOFA Scores
- **Respiratory**: P/F ratio <100 = SOFA 4 (ARDS)
- **Cardiovascular**: Norepinephrine >0.1 = SOFA 4 (septic shock)
- **Renal**: Creatinine >5 or UO <200 mL/day = SOFA 4 (AKI)
- **Hepatic**: Bilirubin >12 = SOFA 4 (liver failure)
- **Coagulation**: Platelets <20k = SOFA 4 (DIC/coagulopathy)
- **CNS**: GCS <6 = SOFA 4 (coma)

## Exam Traps
- **qSOFA ≠ SOFA**: qSOFA is screening tool; SOFA is diagnostic
- **Lactate ≤2 does NOT exclude sepsis**: Patients can have sepsis with normal lactate (early sepsis)
- **Antibiotics before cultures**: Always get cultures first; never delay antibiotics for results
- **Hypotension NOT required for diagnosis**: Early sepsis can present with normal BP but elevated lactate
- **Source control IS management**: Antibiotics alone insufficient; must drain/debride source`,
        mnemonics: [
          {
            text: "Sepsis-3: Suspected infection + SOFA ≥2; Shock = + persistent hypotension/lactate ≥2",
            explanation:
              "Sepsis-3 definition changed from SIRS to SOFA. Shock added: requires MAP <65 after fluid OR lactate >2 despite resuscitation",
          },
          {
            text: "1-3-6 rule: Lactate/cultures/antibiotics in hour 1, re-assess hour 3, lactate clearance by hour 6",
            explanation:
              "Surviving Sepsis timeline: immediate bundle in hour 1, continue fluids/pressors hour 3, check lactate reduction hour 6",
          },
        ],
        keyPoints: [
          "Sepsis: infection + SOFA ≥2; shock = persistent hypotension/lactate ≥2 despite fluid",
          "qSOFA ≥2 predicts mortality; triggers full sepsis workup",
          "Lactate >4 indicates septic shock; monitor clearance ≥10% per 6 hr",
          "1-hour bundle: lactate, cultures, antibiotics, fluid 30 mL/kg, vasopressor if MAP <65",
          "Source control (drainage, debridement) essential for outcome",
        ],
        textbookRefs: [
          {
            book: "Critical Care Medicine",
            chapter: "Sepsis-3 Definition (JAMA 2016)",
            edition: "2016",
          },
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 268 - Sepsis",
            edition: "21st",
          },
        ],
      },
      {
        layer: 5,
        slug: "sepsis-mods-active-recall",
        title: "Sepsis & MODS - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-style Q&A for self-testing on sepsis recognition, SOFA/qSOFA, and management bundle.",
        contentMd: `# Sepsis & MODS - Active Recall

**Q1:** What is the Sepsis-3 definition?
> Suspected or confirmed infection + SOFA score ≥2 points.

**Q2:** What is septic shock and how does it differ from sepsis?
> Septic shock = sepsis + persistent hypotension (MAP <65 mmHg) requiring vasopressors OR lactate >2 mmol/L despite adequate fluid resuscitation.

**Q3:** Define qSOFA and what is its clinical significance.
> Quick SOFA: altered mentation + SBP ≤100 mmHg + RR ≥22/min. qSOFA ≥2 predicts worse outcomes and should trigger sepsis investigations.

**Q4:** What is the SOFA score and how many organs does it assess?
> SOFA (Sequential Organ Failure Assessment) evaluates 6 organ systems: respiratory (P/F ratio), cardiovascular (MAP/pressors), neurologic (GCS), renal (creatinine/urine output), hepatic (bilirubin), and coagulation (platelets). Each scored 0-4.

**Q5:** What is MODS and how is it defined?
> Multiple Organ Dysfunction Syndrome: dysfunction of ≥2 organ systems in critically ill patients. Mortality increases with each additional organ.

**Q6:** What is the Surviving Sepsis Campaign 1-hour bundle?
> 1. Measure lactate. 2. Obtain blood cultures (2 sets before antibiotics). 3. Start broad-spectrum antibiotics IV. 4. Fluid bolus 30 mL/kg if hypotensive or lactate ≥4. 5. Vasopressor if MAP <65 after fluid.

**Q7:** When do you start vasopressors in septic shock?
> After initial fluid resuscitation (30 mL/kg in 3 hours) if MAP remains <65 mmHg; start norepinephrine 0.01-2 mcg/kg/min IV.

**Q8:** What is the target lactate clearance in sepsis?
> ≥10% reduction per 6 hours. Persistent elevation despite intervention indicates ongoing tissue hypoperfusion (septic shock).

**Q9:** What lactate level indicates septic shock?
> >2 mmol/L in the context of sepsis + persistent hypotension/organ dysfunction indicates septic shock.

**Q10:** List three common sources of sepsis in Indian ICU.
> GI perforation (peptic ulcer), community-acquired pneumonia, UTI/pyelonephritis (also: intra-abdominal abscess, Candida).

**Q11:** What are the six organ systems assessed in SOFA?
> Respiratory (P/F ratio), cardiovascular (MAP/pressors), neurologic (GCS), renal (creatinine/UO), hepatic (bilirubin), coagulation (platelets).

**Q12:** How is SOFA ≥2 different from qSOFA ≥2?
> SOFA is comprehensive (6-point scale for diagnosis); qSOFA is rapid bedside screening (3 items). Both qSOFA ≥2 and SOFA ≥2 suggest sepsis if infection present.

**Q13:** When is hydrocortisone used in septic shock?
> 50 mg IV Q6H if hypotension persists despite adequate fluid and norepinephrine (refractory septic shock); controversial but may help restore vascular responsiveness.

**Q14:** What is source control and why is it critical in sepsis?
> Identification and management of infection source: drainage of abscess, surgical debridement of necrotic tissue, removal of infected catheters. Critical because antibiotics alone insufficient without source control.

**Q15:** What is the significance of persistent lactate elevation despite BP normalization?
> Indicates ongoing tissue hypoperfusion (occult shock); metabolic clearance failure predicts poor outcome. Suggests inadequate organ perfusion despite hemodynamic restoration.`,
        mnemonics: [
          {
            text: "Sepsis: 6-SOFA organs; Shock: MAP <65 + norepi; MODS: ≥2 organs failing",
            explanation:
              "Sepsis-3: SOFA ≥2 with infection. Septic shock: SOFA plus hypotension/lactate. MODS: multiple organ failure indicates critical illness severity",
          },
        ],
        keyPoints: [
          "Sepsis: infection + SOFA ≥2; shock: persistent hypotension/lactate ≥2 despite fluid",
          "qSOFA ≥2 (altered mentation, SBP ≤100, RR ≥22) predicts mortality; screen all suspected sepsis",
          "1-hour bundle: lactate, cultures, antibiotics, fluid, vasopressor, reassess",
          "Lactate >4 = septic shock; goal clearance ≥10% per 6 hr",
          "Source control essential: drain abscess, debride, remove infected catheters",
        ],
        textbookRefs: [
          {
            book: "Critical Care Medicine",
            chapter: "Sepsis-3 (JAMA 2016) & Surviving Sepsis 2021",
            edition: "2021",
          },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TOPIC 4: COMA & ALTERED CONSCIOUSNESS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    topicCode: "IM-MOD-12-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "coma-consciousness-foundation",
        title: "Coma & Altered Consciousness - Foundation",
        estimatedMinutes: 25,
        summary:
          "Coma is sustained loss of consciousness without sleep-wake cycles. GCS <8 = coma. Etiology classified: metabolic vs structural. AEIOU-TIPS mnemonic for metabolic causes. Assessment includes level of consciousness, brainstem reflexes, pupil size/reactivity.",
        contentMd: `# Coma & Altered Consciousness - Foundation

## Definition & Classification

### Consciousness Levels
- **Alert**: Fully awake, oriented
- **Lethargy**: Drowsy but rousable to voice
- **Obtundation**: Arousable only to vigorous stimulation
- **Stupor**: Minimal response to severe stimulation
- **Coma**: No purposeful response to external stimuli (GCS <8)

### Glasgow Coma Scale (GCS)
Assesses eye opening (E), verbal response (V), motor response (M):

| Component | Score |
|-----------|-------|
| **Eye Opening** | Spontaneous=4, to voice=3, to pain=2, none=1 |
| **Verbal** | Oriented=5, confused=4, inappropriate=3, incomprehensible=2, none=1 |
| **Motor** | Obeys commands=6, localizes pain=5, withdraws=4, flexor=3, extensor=2, none=1 |
| **Total** | 3-15 (GCS <8 = coma, severe; 9-12 = moderate; 13-14 = mild) |

### Types of Unconsciousness
1. **Coma**: No sleep-wake cycles; no purposeful response
2. **Vegetative state (VS)**: Sleep-wake cycles present; NO awareness (chronic VS >4 weeks post-injury)
3. **Minimally conscious**: Some purposeful response but inconsistent
4. **Locked-in syndrome**: Aware but paralyzed (eyes only, can blink to communicate)
5. **Brain death**: No brainstem reflexes, apnea test positive

## Etiology: Metabolic vs Structural

### Metabolic Coma (80% of cases)
- **Diffuse brain dysfunction** without focal lesion
- **Key feature**: Pupils reactive, brainstem reflexes preserved initially
- **Examples**: Hypoglycemia, hepatic encephalopathy, sepsis, hypoxia, drug overdose

### Structural Coma (20%)
- **Focal brain lesion** (mass, hemorrhage, infarction, herniation)
- **Key feature**: Pupil abnormalities, unilateral signs, abnormal brainstem reflexes
- **Examples**: Intracranial hemorrhage, stroke, tumor, subdural hematoma

## AEIOU-TIPS Mnemonic (Metabolic Causes)
**A** - Alcohol (intoxication, withdrawal), Acidosis
**E** - Encephalopathy (hepatic, hypertensive)
**I** - Infection (meningitis, sepsis, encephalitis)
**O** - Opioids (overdose), Oxygen (hypoxia)
**U** - Uremia (renal failure)

**T** - Trauma, Toxins
**I** - Insulin (hypoglycemia)
**P** - Poisoning (carbon monoxide, cyanide)
**S** - Seizures (post-ictal coma), Subarachnoid hemorrhage

## Clinical Approach: Localization

### Supratentorial (Cerebral) Lesion
- **Pupils**: Initially reactive; may dilate ipsilaterally if herniation
- **Motor**: Contralateral weakness
- **Progression**: Decreased consciousness → brainstem compression → fixed pupils

### Subtentorial (Brainstem) Lesion
- **Pupils**: Often abnormal (pinpoint, dilated, unequal) early
- **Vertical gaze**: Impaired (mid-brain damage)
- **Horizontal gaze**: Impaired (pons damage)
- **Early coma** due to reticular activating system damage

### Metabolic Coma
- **Pupils**: Reactive (preserved brainstem)
- **Gaze**: Usually preserved
- **Motor**: Symmetric or variable
- **Key clue**: Preserved brainstem reflexes despite deep coma`,
        mnemonics: [
          {
            text: "AEIOU-TIPS: Alcohol/Acidosis, Encephalopathy, Infection, Opioids/Oxygen, Uremia, Trauma, Insulin, Poisoning, Seizures",
            explanation:
              "Metabolic causes of coma: AEIOU covers common causes; TIPS adds trauma, toxins, insulin, and seizures",
          },
          {
            text: "GCS <8 = Coma (get ABCs, glucose, CT head)",
            explanation:
              "GCS 3-8 = coma; requires intubation for airway protection. Always check glucose immediately (hypo reversible).",
          },
        ],
        keyPoints: [
          "GCS <8 = coma; 9-12 = moderate; 13-14 = mild consciousness impairment",
          "Metabolic coma: pupils reactive, symmetric motor, preserved brainstem reflexes",
          "Structural coma: pupil abnormalities, focal motor signs, brainstem reflex loss",
          "AEIOU-TIPS mnemonic for metabolic causes",
          "First action: airway protection (intubate if GCS <8), check glucose, assess pupils/brainstem",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 423 - Coma & Altered Consciousness",
            edition: "21st",
          },
          { book: "Neurology", chapter: "Consciousness & Coma", edition: "5th" },
        ],
      },
      {
        layer: 2,
        slug: "coma-consciousness-mechanism",
        title: "Coma - Pathophysiology & Brainstem Examination",
        estimatedMinutes: 30,
        summary:
          "Reticular activating system (RAS) in brainstem controls consciousness. Brainstem reflex examination: pupillary light, corneal, gag, oculocephalic, oculovestibular. Herniation syndromes (uncal, central, tonsillar). Indian brain death criteria.",
        contentMd: `# Coma Pathophysiology & Brainstem Assessment

## Reticular Activating System (RAS)
- **Location**: Upper pons and midbrain
- **Function**: Maintains consciousness, sleep-wake cycles
- **Damage**: Results in sustained coma
- **RAS not destroyed early in metabolic coma**: Explains preserved brainstem reflexes despite deep unconsciousness

## Brainstem Reflex Examination (Critical for Coma Assessment)

### 1. Pupillary Response
- **Light reflex**: CN II (afferent) → CN III (efferent)
- **Normal**: 2-4 mm, brisk constriction to light
- **Fixed/dilated pupils (>4 mm, unresponsive)**: Suggests brainstem herniation or CN III damage
- **Pinpoint pupils (<1 mm, reactive)**: Suggests pontine lesion (NOT metabolic overdose, which dilates)
- **Unequal pupils (anisocoria)**: Ipsilateral CN III compression (uncal herniation)

### 2. Corneal Reflex
- **Pathway**: CN V (afferent) → CN VII (efferent)
- **Procedure**: Gentle touch with cotton to cornea; observe blink
- **Normal**: Present bilaterally
- **Absent**: Suggests brainstem pathology (pons)

### 3. Gag Reflex
- **Pathway**: CN IX (afferent) → CN X (efferent)
- **Procedure**: Stimulate soft palate; observe palatal elevation
- **Normal**: Present
- **Absent**: Medullary involvement

### 4. Oculocephalic Reflex (Doll's Eyes)
- **Test**: Rapidly turn head side-to-side; observe eye movement
- **Normal (metabolic coma)**: Eyes move opposite to head rotation (preserved RAS)
- **Absent (brainstem damage)**: Eyes stay fixed (do NOT move with head)
- **Contraindication**: Cervical spine injury (C-spine clearance first)

### 5. Oculovestibular Reflex (Cold Caloric)
- **Test**: Irrigate ear canal with ice-cold water; observe eye movement
- **Normal**: Nystagmus toward irrigated ear (tonic deviation away)
- **Absent**: Brainstem pathology
- **More sensitive than doll's eyes**

### 6. Gag & Cough Reflexes
- **Pathway**: CN X (vagus)
- **Absent**: Medullary dysfunction

## Herniation Syndromes

### Uncal Herniation (Lateral Transtentorial)
- **Cause**: Supratentorial mass → medial temporal lobe pushed through tentorial notch
- **Sequence**:
  1. **Early**: Ipsilateral fixed dilated pupil (CN III compression)
  2. **Progressive**: Contralateral motor weakness (corticospinal tract compression)
  3. **Late**: Bilateral signs, brainstem dysfunction
- **Classic finding**: "Blown pupil" (dilated, fixed) ipsilateral to lesion

### Central Herniation (Vertical Transtentorial)
- **Cause**: Diffuse intracranial hypertension pushing brainstem downward
- **Sequence**:
  1. Bilateral reactive pupils (initially)
  2. Loss of vertical gaze
  3. Bilateral motor posturing (flexor → extensor)
  4. Fixed pupils, apnea

### Tonsillar Herniation (Downward)
- **Cause**: Posterior fossa mass → cerebellar tonsils herniate through foramen magnum
- **Result**: Medullary compression → cardiopulmonary collapse
- **Rapid deterioration**: Most dangerous type

## Motor Posturing

### Decorticate Posturing (Flexor)
- **Pattern**: Flexed arms, extended legs
- **Level**: Supratentorial lesion (above brainstem)
- **Meaning**: Preserved brainstem function initially

### Decerebrate Posturing (Extensor)
- **Pattern**: Extended arms and legs, arched back
- **Level**: Brainstem lesion or advanced herniation
- **Meaning**: Loss of cortical inhibition of brainstem reflexes
- **Prognosis**: More ominous than decorticate

## India Brain Death Criteria
**Brain death = Irreversible cessation of all brainstem functions**

### Prerequisites (Before Declaring Brain Death)
1. **Core body temp** ≥32°C
2. **No sedative drugs** (blood levels checked)
3. **Metabolic derangement corrected** (electrolytes, glucose normal)
4. **No neuromuscular blocking agents**

### Clinical Tests (Perform 2 Examinations, 6 Hours Apart)
1. **Absence of brainstem reflexes**:
   - Fixed dilated pupils (>5 mm, no light response)
   - Absent corneal reflex
   - Absent gag reflex
   - No oculocephalic reflex (cold caloric if available)
   - No respiratory effort (apnea test below)

2. **Apnea Test**:
   - Disconnect ventilator
   - Provide 100% O₂
   - Observe for **≥5 minutes** for ANY respiratory effort
   - If NO respiratory effort on ABG with PaCO₂ ≥60 mmHg → **apnea test positive**
   - Test MUST be done twice, 6 hours apart

### Confirmatory Tests (If Available, Not Required in India)
- EEG (isoelectric)
- Cerebral angiography (no flow)
- Transcranial Doppler (absent flow)`,
        mnemonics: [
          {
            text: "Brainstem = Pupils, Corneal, Gag, Oculocephalic, Caloric (remember PCGOC)",
            explanation:
              "Brainstem reflexes: Pupils (CN II/III), Corneal (CN V/VII), Gag (CN IX/X), Oculocephalic (doll's eyes), Caloric (ice water test)",
          },
          {
            text: "Uncal herniation = blown pupil + contralateral weakness; Central = bilateral pupils then fixed",
            explanation:
              "Uncal: ipsilateral fixed dilated pupil (CN III) with contralateral motor weakness. Central: bilateral reactive then fixed pupils with extensor posturing",
          },
        ],
        keyPoints: [
          "RAS in pons/midbrain controls consciousness; metabolic coma preserves RAS initially",
          "Brainstem reflexes: pupils, corneal, gag, oculocephalic, caloric",
          "Uncal herniation: ipsilateral blown pupil + contralateral motor weakness",
          "Decerebrate posturing (extensor) worse than decorticate (flexor)",
          "India brain death: No brainstem reflexes + apnea test positive (twice, 6 hrs apart)",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 423 - Coma & Altered Consciousness",
            edition: "21st",
          },
          {
            book: "Indian Council of Medical Research (ICMR)",
            chapter: "Brain Death Criteria for India",
            edition: "2018",
          },
        ],
      },
      {
        layer: 3,
        slug: "coma-consciousness-clinical",
        title: "Coma - Clinical Diagnosis, Differential, & Indian Context",
        estimatedMinutes: 30,
        summary:
          "Systematic diagnostic approach to coma: history, exam, labs, imaging. Differential diagnosis algorithm. Managing coma in Indian ICUs: resource constraints, sepsis-related encephalopathy, hypoglycemia screening.",
        contentMd: `# Coma - Clinical Diagnosis & Management

## Diagnostic Algorithm

### Step 1: Immediate Stabilization (ABCs)
- **Airway**: If GCS <8, intubate for airway protection
- **Breathing**: Ensure adequate oxygenation (SpO₂ >94%)
- **Circulation**: IV access, cardiac monitoring, establish BP

### Step 2: Rapid History
- **Onset**: Acute vs gradual (suggests metabolic vs structural)
- **Preceding symptoms**: Fever? headache? seizure? trauma?
- **Medical history**: Diabetes? liver disease? hypertension? on medications?
- **Witness account**: Any events prior to coma?

### Step 3: Physical Examination
- **General**: Fever? rash (meningitis)? trauma? needle marks (drug use)?
- **HEENT**: Papilledema (intracranial hypertension)? Battle's sign (basilar fracture)?
- **Neurologic**: Full GCS, pupil exam, brainstem reflexes, motor/sensory (check for asymmetry)
- **Meningeal signs**: Neck stiffness, Kernig's/Brudzinski's (meningitis)

### Step 4: Focused Labs
1. **Immediate**: Glucose (hypoglycemia reversible!)
2. **Stat ABG**: Oxygen, CO₂, pH status
3. **CBC**: WBC (infection?), Hb
4. **CMP**: Electrolytes (Na, K, Mg), creatinine (uremia), glucose
5. **LFTs**: Bilirubin, INR (hepatic encephalopathy)
6. **Toxicology**: Alcohol, drugs (opioids, sedatives)
7. **Blood cultures**: If fever (sepsis/meningitis)
8. **Blood gas**: Hypoxia, hypercapnia, acidosis?

### Step 5: Imaging
- **CT head (non-contrast)**: Acute bleed? mass? herniation signs?
- **MRI (if stable)**: Better for ischemic stroke, diffuse axonal injury
- **EEG**: If seizure suspected (non-convulsive status epilepticus)

### Step 6: Lumbar Puncture (if no mass/herniation on CT)
- **Meningitis suspected**: CSF analysis (cells, protein, glucose, cultures)
- **Contraindication**: Papilledema, focal neuro signs, dilated pupils (suggests mass/herniation)

## Differential Diagnosis Approach

### Metabolic Coma
| Cause | Key Finding | Treatment |
|-------|-----------|-----------|
| **Hypoglycemia** | Glucose <70 mg/dL | Dextrose IV immediately |
| **Hepatic encephalopathy** | High ammonia, jaundice, ascites | Lactulose, rifaxomicin |
| **Sepsis** | Fever, infection source, lactate ↑ | Antibiotics, fluids |
| **Hyponatremia** | Na <120 (acute) | Hypertonic saline cautiously |
| **Hyperammonemia** | >100 μmol/L; asterixis | Lactulose, reduced protein |
| **Uremia** | Creatinine >5, BUN ↑ | Dialysis |

### Structural Coma
| Cause | Key Finding | Imaging |
|-------|-----------|---------|
| **Epidural hematoma** | "Lucid interval," lens-shaped on CT | Surgery |
| **Subdural hematoma** | Elderly, anticoagulated, falls | Crescent-shaped; burr hole if acute |
| **Intracerebral hemorrhage** | Hypertensive, sudden onset | Hyperdense on CT; ICU monitoring |
| **Ischemic stroke** | Focal deficit, risk factors | CT → MRI if hyperacute |
| **Brain tumor** | Gradual coma, headache | Mass effect; surgery if feasible |

## Indian ICU Context: Special Considerations

### Common Causes in India
1. **Sepsis-related encephalopathy** (most common ICU cause)
   - From pneumonia, UTI, GI source
   - High mortality if not treated urgently
2. **Hypoglycemia** (especially in poorly controlled diabetics on insulin)
3. **Hepatic encephalopathy** (cirrhosis, alcoholism)
4. **Meningitis** (bacterial, tuberculous, viral)
5. **Stroke** (hemorrhagic more common than ischemic in South Asia)
6. **Head trauma** (road traffic accidents, falls)

### Screening Protocol
- **Always check glucose first** (reversible)
- **Fever + coma**: Blood cultures + antibiotics (presumptive sepsis)
- **Headache + coma**: Consider meningitis; LP if no contraindication
- **Jaundice + coma**: Hepatic encephalopathy; assess for cirrhosis
- **Seizure history**: EEG for NCSE (non-convulsive status epilepticus)

### Resource-Limited Settings
- **CT availability**: May be limited; use clinical signs to guide
- **Lumbar puncture**: Trained staff essential; must rule out mass first
- **Labs**: Glucose meter available in even small hospitals (check first!)
- **Supportive care**: Prevent aspiration, DVT, pressure ulcers in prolonged coma`,
        mnemonics: [
          {
            text: "Coma workup: Glucose (first!) → ABCDEFG → Imaging → LP if no mass",
            explanation:
              "Check glucose immediately (reversible hypo). Then full exam, labs, imaging (CT), LP only if no evidence of raised ICP/mass.",
          },
          {
            text: "Metabolic coma = pupils react; Structural = pupils abnormal",
            explanation:
              "Key differentiator: metabolic preserves brainstem reflexes (pupils reactive), structural damages brainstem (pupils fixed/dilated)",
          },
        ],
        keyPoints: [
          "Always check glucose first in coma (hypoglycemia reversible)",
          "Metabolic: preserved pupils/reflexes; structural: abnormal pupils/focal signs",
          "Uncal herniation: blown pupil + contralateral weakness",
          "Brain death: no brainstem reflexes + apnea test (twice, 6 hrs apart)",
          "Common in India: sepsis encephalopathy, hypoglycemia, hepatic encephalopathy, meningitis",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 423 - Coma & Altered Consciousness",
            edition: "21st",
          },
        ],
      },
      {
        layer: 4,
        slug: "coma-consciousness-exam-prep",
        title: "Coma - Exam Prep & High-Yield Facts",
        estimatedMinutes: 20,
        summary:
          "High-yield facts on GCS interpretation, brainstem reflexes, herniation signs, metabolic vs structural coma, and brain death criteria.",
        contentMd: `# Coma - Exam Prep

## High-Yield One-Liners
- **GCS <8**: Coma; intubate for airway protection
- **GCS 9-12**: Moderate impairment
- **GCS 13-14**: Mild impairment
- **Metabolic coma**: Pupils reactive, brainstem reflexes preserved
- **Structural coma**: Pupils abnormal, brainstem reflexes lost
- **Uncal herniation**: Ipsilateral blown pupil + contralateral motor weakness
- **Central herniation**: Bilateral reactive → fixed pupils, extensor posturing
- **Decorticate**: Flexed arms (supratentorial), better prognosis
- **Decerebrate**: Extended arms (brainstem), worse prognosis
- **First action in coma**: Check glucose immediately
- **Apnea test**: No respiratory effort + PaCO₂ ≥60 mmHg twice (6 hrs apart) = brain death
- **AEIOU-TIPS**: Mnemonic for metabolic causes
- **Fixed/dilated pupils**: CN III compression or brainstem death
- **Pinpoint pupils**: Pontine lesion or opioid overdose
- **Absent corneal reflex**: Pons damage (CN V/VII)

## GCS Scoring Quick Ref
| Component | Best Response | Score |
|-----------|---|-------|
| **Eye opening** | Spontaneous | 4 |
| **Verbal** | Oriented | 5 |
| **Motor** | Obeys commands | 6 |
| **Total (maximum)** | — | 15 |

## Brainstem Reflex Exam
| Reflex | Pathway | Loss Indicates |
|--------|---------|---|
| **Pupil** | CN II → CN III | Midbrain/CN III |
| **Corneal** | CN V → CN VII | Pons |
| **Gag** | CN IX → CN X | Medulla |
| **Oculocephalic** | CN III/VI/VIII | Brainstem |
| **Caloric (cold)** | CN VIII → CN VI | Brainstem |

## Herniation Syndromes
| Type | Cause | Pupil | Motor | Sequence |
|------|-------|-------|-------|----------|
| **Uncal** | Lateral mass | Blown pupil (ipsilateral) | Contralateral weakness | CN III → motor → bilateral |
| **Central** | Diffuse ICP↑ | Bilateral reactive → fixed | Bilateral flexor → extensor | Symmetric progression |
| **Tonsillar** | Posterior fossa | Variable | Medullary signs | Rapid cardiopulmonary collapse |

## Exam Traps
- **Do NOT delay glucose check** for imaging/labs
- **GCS <8 needs intubation** for airway protection (avoid aspiration)
- **Pinpoint pupils**: Think pontine lesion or **opioid** (not metabolic generically)
- **Fixed dilated pupil**: CN III compression (uncal) or brainstem herniation
- **Preserved doll's eyes**: Metabolic coma still possible (RAS preserved early)
- **Brain death requires BOTH**: Absent brainstem reflexes AND positive apnea test (not just one)`,
        mnemonics: [
          {
            text: "GCS components: Eye (4) + Verbal (5) + Motor (6) = max 15",
            explanation:
              "GCS scoring: Eye opening max 4, verbal max 5, motor max 6. GCS <8 = coma requiring intubation.",
          },
          {
            text: "Uncal = blown pupil + opposite weakness; Central = both sides",
            explanation:
              "Herniation types: Uncal is asymmetric (one pupil blown, opposite arm weak); Central is symmetric (bilateral signs)",
          },
        ],
        keyPoints: [
          "GCS <8 = coma; intubate for airway protection",
          "Metabolic: pupils reactive; structural: pupils abnormal or asymmetric",
          "Uncal herniation: ipsilateral blown pupil + contralateral motor weakness",
          "Brainstem reflexes: pupils, corneal, gag, oculocephalic, caloric",
          "Brain death: no brainstem reflexes + positive apnea test (twice)",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 423 - Coma",
            edition: "21st",
          },
        ],
      },
      {
        layer: 5,
        slug: "coma-consciousness-active-recall",
        title: "Coma - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-style Q&A for self-testing on GCS, brainstem examination, herniation, and brain death.",
        contentMd: `# Coma & Altered Consciousness - Active Recall

**Q1:** Define coma and what GCS score indicates coma.
> Coma is sustained loss of consciousness without sleep-wake cycles or purposeful response to stimuli. GCS <8 = coma.

**Q2:** What are the three components of the Glasgow Coma Scale?
> Eye opening (max 4), Verbal response (max 5), Motor response (max 6). Total max = 15.

**Q3:** Differentiate metabolic from structural coma by pupillary finding.
> Metabolic coma: pupils remain reactive (preserved brainstem). Structural coma: pupil abnormalities (fixed, dilated, unequal) indicating brainstem compression.

**Q4:** What is AEIOU-TIPS mnemonic for metabolic coma?
> A=Alcohol/Acidosis; E=Encephalopathy; I=Infection; O=Opioids/Oxygen; U=Uremia; T=Trauma/Toxins; I=Insulin (hypoglycemia); P=Poisoning; S=Seizures

**Q5:** List the five brainstem reflexes examined in coma.
> 1. Pupillary (light reflex); 2. Corneal reflex; 3. Gag reflex; 4. Oculocephalic (doll's eyes); 5. Oculovestibular (cold caloric)

**Q6:** What does loss of corneal reflex indicate?
> Loss of corneal reflex (CN V → CN VII pathway) indicates pontine (pons-level) brainstem damage.

**Q7:** Define uncal herniation and its classic neurologic presentation.
> Uncal herniation: supratentorial mass pushes medial temporal lobe through tentorial notch, compressing CN III and ipsilateral motor tract. Classic: ipsilateral blown pupil + contralateral motor weakness.

**Q8:** Differentiate decorticate from decerebrate posturing.
> Decorticate (flexor): arms flexed, legs extended (supratentorial lesion, better prognosis). Decerebrate (extensor): arms and legs extended, arched back (brainstem lesion, worse prognosis).

**Q9:** What is the oculocephalic reflex (doll's eyes test) and what does it assess?
> Rapidly rotating head side-to-side; in metabolic coma, eyes move opposite to head rotation (preserved). Absent response indicates brainstem pathology.

**Q10:** What is the oculovestibular reflex (cold caloric test) and when is it used?
> Irrigating ear canal with ice-cold water; eyes deviate toward irrigated ear. More sensitive than doll's eyes for detecting brainstem function.

**Q11:** What is locked-in syndrome and how does patient communicate?
> Aware but paralyzed (loss of motor output); patient locked in own body. Can blink or move eyes vertically to communicate. Caused by ventral pontine lesion (basis pontis).

**Q12:** Define persistent vegetative state (PVS).
> Sleep-wake cycles present but no awareness. Patient opens eyes, may smile or cry, but shows NO purposeful response. Chronic if >4 weeks post-insult.

**Q13:** What are the India brain death criteria?
> No brainstem reflexes (pupils fixed, no corneal/gag/oculocephalic/caloric) + Apnea test positive (no respiratory effort with PaCO₂ >60 mmHg). Both assessments done twice, 6 hours apart.

**Q14:** What is the apnea test and how is it performed?
> Disconnect ventilator, provide 100% O₂ for ≥5 minutes, observe for respiratory effort. Positive apnea test = no respiratory effort despite elevated PaCO₂ (>60 mmHg).

**Q15:** What is the first thing to check in a patient presenting with coma?
> Blood glucose immediately (hypoglycemia is reversible and life-threatening). Check with fingerstick if available.`,
        mnemonics: [
          {
            text: "GCS 15 = alert; 13-14 = mild injury; 9-12 = moderate; 3-8 = severe/coma",
            explanation:
              "GCS severity: 15 = normal, 13-14 = mild impairment, 9-12 = moderate, 3-8 = coma (intubate)",
          },
        ],
        keyPoints: [
          "GCS <8 = coma; intubate for airway protection",
          "Check glucose first (reversible hypo is life-threatening)",
          "Metabolic coma: reactive pupils, preserved brainstem reflexes",
          "Structural coma: abnormal pupils, lost brainstem reflexes",
          "Uncal herniation: blown pupil + opposite-side weakness",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 423 - Coma",
            edition: "21st",
          },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TOPIC 5: DIC & COAGULOPATHY IN CRITICAL CARE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    topicCode: "IM-MOD-12-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "dic-coagulopathy-foundation",
        title: "DIC & Coagulopathy in Critical Care - Foundation",
        estimatedMinutes: 30,
        summary:
          "DIC (disseminated intravascular coagulation) is uncontrolled activation of coagulation cascade throughout circulation. Causes: sepsis, trauma, obstetric catastrophe. Lab findings: ↑PT/PTT, ↓fibrinogen, ↓platelets, ↑D-dimer, schistocytes on blood smear. ISTH DIC scoring. Acute vs chronic DIC.",
        contentMd: `# DIC & Coagulopathy in Critical Care - Foundation

## Definition: DIC (Disseminated Intravascular Coagulation)
Pathologic, overwhelming activation of **coagulation cascade** throughout systemic circulation, causing:
1. **Microthrombi formation** → tissue ischemia, organ failure
2. **Consumption coagulopathy** → bleeding
3. **Uncontrolled fibrinolysis** → amplification of hemorrhage

## Pathophysiology: The Cascade

### Trigger Phase
- **Tissue Factor (TF)** released from damaged endothelium
- Sepsis: **LPS + TNF-α** activate vascular endothelium
- Trauma: Direct tissue damage releases TF
- Obstetric: Amniotic fluid embolism, placental abruption release TF
- Cancer: Malignant cells produce TF

### Initiation
- TF binds Factor VIIa → **prothrombin activator**
- Massive **thrombin generation** (IIa)
- Platelets activated → adhesion and aggregation

### Amplification
- Thrombin amplifies itself (positive feedback)
- **Fibrin formation**: Thrombin cleaves fibrinogen
- **Platelets consumed**: Aggregate to form microthrombi
- **Microthrombi lodge** in organs → ischemia

### Fibrinolysis Phase
- Tissue plasminogen activator (tPA) activation
- Plasmin breaks down fibrin → fibrin degradation products (FDPs)
- **Consumption of fibrinogen**: Both by thrombin AND by plasmin
- **D-dimer elevation**: Massive (reflects fibrin turnover)

## Causes of DIC

### "Triggers" (T-CHIP Mnemonic)
**T** - **Trauma**: Severe, polytrauma, crush injury
**C** - **Cancer**: Acute leukemia (esp. APL), metastatic disease
**H** - **Hematologic**: Transfusion reaction, incompatible blood
**I** - **Infection**: Sepsis (Gram-negative endotoxin), meningococcemia
**P** - **Placental/Obstetric**: Placental abruption, amniotic fluid embolism, pre-eclampsia

Other: Pancreatitis (severe), Burns (>20% BSA), Liver disease, Aneurysm rupture

### Most Common in ICU
1. **Sepsis** (especially Gram-negative, meningococcal)
2. **Severe trauma** with massive transfusion
3. **Acute pancreatitis**
4. **Acute promyelocytic leukemia (APL)** — highest DIC risk

## Laboratory Findings

### DIC Coagulation Panel
| Test | Normal | DIC Finding | Interpretation |
|------|--------|-----------|----------------|
| **PT/INR** | 11-14 sec / 1.0 | ↑↑ (>20 sec) | Consumption of factors |
| **aPTT** | 25-35 sec | ↑↑ (>40 sec) | Factor deficiency |
| **Fibrinogen** | 200-400 mg/dL | ↓↓ (<100 mg/dL) | Consumption + fibrinolysis |
| **Platelets** | 150-400k | ↓↓ (<50k) | Consumption in microthrombi |
| **D-dimer** | <0.5 μg/mL | ↑↑↑ (>5 μg/mL) | Massive fibrin turnover |
| **Fibrin degradation products (FDP)** | <10 μg/mL | ↑↑ (>40 μg/mL) | Plasmin activity |
| **PT/fibrinogen ratio** | <1.0 | ↑ (>1.5) | Suggests DIC |

### Blood Smear (Peripheral)
- **Schistocytes** (fragmented RBCs): Mechanical fragmentation passing through fibrin strands
- **Helmet cells**: Microangiopathic hemolytic anemia (MAHA)
- **Thrombocytopenia**: Platelets low

## Acute vs Chronic DIC

### Acute DIC (Fulminant)
- **Onset**: Hours to days
- **Presentation**: Bleeding + thrombosis simultaneously
- **Labs**: Severe abnormalities (low fibrino, high D-dimer, low platelets)
- **Mortality**: Very high (40-60%)
- **Examples**: Sepsis, trauma, obstetric emergency, APL

### Chronic DIC
- **Onset**: Days to weeks
- **Presentation**: Insidious bleeding, microthrombi effects
- **Labs**: Mild-moderate abnormalities (low platelets, mild fibrino ↓)
- **Mortality**: Lower (depends on underlying cause)
- **Examples**: Malignancy, liver disease

## ISTH DIC Score (International Society on Thrombosis & Hemostasis)
Used to **diagnose DIC** (≥5 = compatible with overt DIC):

| Component | Points |
|-----------|--------|
| **Platelet count (×10³/μL)** | >100 = 0; 50-100 = 1; 20-50 = 2; <20 = 3 |
| **D-dimer/FDP elevation** | Normal = 0; Moderate ↑ = 2; Strong ↑ = 3 |
| **PT prolongation (sec)** | <3 = 0; 3-6 = 1; >6 = 2 |
| **Fibrinogen (mg/dL)** | >100 = 0; <100 = 1 |
| **Score ≥5** | **Overt DIC present** |

## Clinical Manifestations

### Bleeding
- Mucosal bleeding (epistaxis, gums, GI bleeding)
- Petechiae, purpura (skin bleeding)
- Oozing from IV sites, catheters
- Intracranial hemorrhage (ICH)
- GI hemorrhage

### Thrombosis
- Pulmonary embolism (microthrombi in lungs)
- Acute respiratory distress (ARDS-like)
- Tissue necrosis (fingers, toes, nose)
- Renal cortical necrosis → acute kidney injury
- CNS infarction → stroke`,
        mnemonics: [
          {
            text: "T-CHIP: Trauma, Cancer, Hematologic, Infection, Placental causes of DIC",
            explanation:
              "Common triggers of DIC: Trauma (severe), Cancer (esp. APL), Hematologic (transfusion), Infection (sepsis), Placental (abruption, amniotic embolism)",
          },
          {
            text: "DIC = ↓Fibrinogen, ↓Platelets, ↑D-dimer, ↑PT, ↑PTT, schistocytes",
            explanation:
              "Lab pattern in DIC: low fibrinogen (consumption), low platelets (microthrombi), high D-dimer/PT/PTT (activation), fragmented RBCs (MAHA)",
          },
        ],
        keyPoints: [
          "DIC = uncontrolled coagulation → microthrombi + consumption coagulopathy + bleeding",
          "Triggers: trauma, sepsis, malignancy (esp. APL), obstetric, pancreatitis",
          "Lab findings: low fibrinogen, low platelets, high PT/PTT/D-dimer, schistocytes",
          "ISTH DIC score ≥5 = overt DIC diagnosis",
          "Acute DIC: rapid onset, bleeding + thrombosis, high mortality",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 135 - DIC",
            edition: "21st",
          },
          {
            book: "Blood Coagulation & Fibrinolysis",
            chapter: "DIC Pathophysiology & Management",
            edition: "2019",
          },
        ],
      },
      {
        layer: 2,
        slug: "dic-coagulopathy-mechanism",
        title: "DIC Pathophysiology & Treatment Strategy",
        estimatedMinutes: 35,
        summary:
          "Detailed mechanism of DIC: tissue factor pathway, thrombin generation, microthrombi formation, fibrinolysis amplification. Treatment strategy: treat underlying cause (sepsis, stop transfusions), FFP/cryoprecipitate/platelets, anticoagulation risks.",
        contentMd: `# DIC Pathophysiology & Treatment

## Detailed Mechanism of DIC

### The Tissue Factor Pathway
1. **Tissue Factor (TF) release**: From damaged endothelium, monocytes
2. **TF + Factor VIIa complex**: Forms extrinsic tenase
3. **Activation of Factor X → Xa**
4. **Prothrombin (Factor II) → Thrombin (IIa)**: Massive generation

### Thrombin: The Master Enzyme
- Cleaves fibrinogen → fibrin monomers
- Activates platelets (Shape change, adhesion, aggregation)
- Activates Factors V, VIII, XI (positive feedback amplification)
- Activates protein C (feedback inhibition, but overwhelmed)
- Activates plasminogen → plasmin (fibrinolysis)

### Microthrombi Formation
- **Fibrin + platelets** aggregate throughout circulation
- **Deposition in organs**: Lungs (ARDS), kidneys (acute tubular necrosis), brain (stroke), skin (necrosis)
- **Consumption**: Fibrinogen, platelets, factors V, VIII, XIII

### Fibrinolysis Amplification
- **Plasmin** (from plasminogen activated by thrombin)
- **Breaks down fibrin** → Fibrin Degradation Products (FDPs)
- **Cross-links D-dimers** (markers of fibrin turnover)
- **Degrades fibrinogen directly** (amplifies consumption)
- **FDPs have anticoagulant activity**: Worsens bleeding paradox

### The Paradox
DIC causes **BOTH bleeding AND thrombosis simultaneously**:
- **Bleeding**: From consumption of clotting factors + fibrinolysis
- **Thrombosis**: From microthrombi formation

## Treatment Strategy

### Principle: Treat the Cause FIRST
**Without treating underlying trigger, transfusions worsen DIC**

#### 1. Treat Underlying Condition
- **Sepsis**: Antibiotics, fluids, vasopressors, source control (drainage)
- **Trauma**: Stop bleeding (surgery, angiography), avoid over-transfusion
- **Obstetric**: Deliver baby, remove placenta, uterine massage
- **APL (acute promyelocytic leukemia)**: All-trans retinoic acid (ATRA) + chemotherapy
- **Pancreatitis**: NPO, fluids, pain control

### 2. Supportive Care (Transfusion)
**Only if active bleeding + lab abnormality**

#### Fresh Frozen Plasma (FFP)
- **Contains**: All coagulation factors (II, V, VII, VIII, IX, X, XI, XII) + fibrinogen
- **Dose**: 10-15 mL/kg (typically 2-4 units)
- **Indication**: Low fibrinogen + active bleeding, prolonged PT/PTT
- **Issue**: Large volume → fluid overload; risk of ARDS, hypervolemia

#### Cryoprecipitate
- **Contains**: Fibrinogen, Factor VIII, von Willebrand factor, fibronectin
- **Dose**: 1 unit per 5-10 kg body weight (e.g., 10 units for 70 kg)
- **Indication**: Fibrinogen <100 mg/dL + active bleeding
- **Advantage**: More concentrated fibrinogen than FFP; less volume

#### Platelet Transfusion
- **Indication**: Platelets <50k + active bleeding (in DIC context)
- **Goal**: Maintain platelets >20-30k (threshold for spontaneous bleeding)
- **Issue**: Transfused platelets consumed rapidly in DIC

#### Packed RBCs
- **Indication**: Hb <7 or active hemorrhage
- **Goal**: Maintain Hb ≥7 g/dL (ICU standard)

### 3. Anticoagulation (Controversial)
**Use ONLY if thrombotic manifestations dominate**:
- Heparin infusion (5-10 units/kg/hr continuous) if:
  - Progressive thrombosis (skin necrosis, digits)
  - Pulmonary embolism
  - Renal cortical necrosis
- NOT routine in DIC; risk of bleeding if fibrinogen critically low

### 4. Fibrinolysis Inhibition (Antifibrinolytics)
**Rarely used; risky in DIC**:
- Tranexamic acid (TXA): Inhibits plasmin, reduces fibrinolysis
- **Risk**: Promotes microthrombi if fibrinogen restored first
- **Use only**: If recombinant thrombomodulin NOT available (Japan use)

## Monitoring DIC Response
- **Platelet trend**: Should increase (if DIC improving)
- **Fibrinogen**: Should normalize (if replacing + cause controlled)
- **D-dimer/PT/PTT**: Should improve
- **Clinical**: Bleeding stops, skin color improves, organ function recovers
- **Repeat labs**: Q6-12H initially; less often as improving

## Special Populations

### DIC in Sepsis
- **Mechanism**: Endotoxin + TNF-α trigger massive coagulation
- **Most severe**: Meningococcal sepsis, Gram-negative sepsis
- **Treatment**: Antibiotics critical (treat infection to stop DIC)
- **Mortality**: Very high (30-50%) if overt DIC

### DIC in Trauma
- **Mechanism**: Tissue damage + massive transfusion (dilutional coagulopathy)
- **Multifactorial**: Loss of platelets, factors, dilution
- **Treatment**: Damage control surgery, balanced transfusion (1:1:1 RBC:FFP:Platelets in massive transfusion)
- **Avoidance**: Over-aggressive crystalloid resuscitation worsens coagulopathy

### DIC in APL (Acute Promyelocytic Leukemia)
- **Highest risk**: 80% of APL patients have DIC
- **Mechanism**: Malignant promyelocytes release tissue factor + proteases
- **Treatment**: ATRA first (induces differentiation), then chemotherapy
- **Transfusion**: Maintain fibrinogen >100 mg/dL while awaiting ATRA response
- **Outcome**: Modern ATRA + arsenic trioxide has improved survival`,
        mnemonics: [
          {
            text: "DIC treatment: Treat Cause first, then Transfuse (FFP/Cryo/Platelets) if bleeding",
            explanation:
              "Never transfuse blood products into DIC without treating underlying trigger. Transfusions worsen DIC unless cause addressed (sepsis antibiotics, trauma hemorrhage control, etc)",
          },
          {
            text: "DIC labs: ↓Fib, ↓Plt, ↑D-dimer, ↑PT, schistocytes = ISTH ≥5 = DIC",
            explanation:
              "ISTH DIC score: platelets (0-3) + D-dimer (0-3) + PT (0-2) + fibrinogen (0-1). Score ≥5 = overt DIC",
          },
        ],
        keyPoints: [
          "DIC = tissue factor activation → thrombin surge → fibrin + plasmin → consumption coagulopathy",
          "Treat cause first (sepsis, trauma, APL) before transfusing",
          "FFP for low factors + bleeding; cryoprecipitate for low fibrinogen + bleeding",
          "Platelet transfusion if <50k + active bleeding",
          "Anticoagulation (heparin) ONLY if thrombotic manifestations dominate (skin necrosis)",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 135 - DIC",
            edition: "21st",
          },
          {
            book: "Critical Care Medicine",
            chapter: "DIC in Sepsis & Trauma",
            edition: "2022",
          },
        ],
      },
      {
        layer: 3,
        slug: "dic-coagulopathy-clinical",
        title: "DIC - Clinical Recognition, Lab Interpretation, & Indian ICU Management",
        estimatedMinutes: 30,
        summary:
          "Recognizing DIC in clinical practice: bleeding + thrombosis combination, lab algorithm. ISTH scoring application. Common scenarios in Indian ICUs: sepsis, obstetric, trauma. Transfusion strategies and monitoring.",
        contentMd: `# DIC - Clinical Recognition & Management

## Clinical Presentation Patterns

### Classic DIC: Bleeding + Thrombosis
- **Mucosal bleeding**: Nosebleeds, bleeding gums, GI bleed
- **Petechial rash**: Non-blanching, progressive
- **Acral necrosis**: Fingers/toes, nose tip dark (gangrene)
- **Pulmonary**: Dyspnea, P/F <300 (ARDS-like)
- **Renal**: Acute kidney injury, dark urine (hemoglobinuria)

### Fulminant DIC
- **Meningococcal sepsis**: Waterhouse-Friderichsen syndrome (adrenal hemorrhage + DIC)
- **APL bleeding**: CNS hemorrhage, GI bleeding, hemoptysis
- **Septic shock**: Bleeding + organ failure simultaneously

## Diagnostic Algorithm

### Step 1: Suspect DIC
- **Clinical context**: Sepsis, trauma, obstetric emergency, malignancy
- **Signs**: Bleeding + thrombosis (NOT bleeding alone)
- **Exam**: Petechiae, purpura, acral necrosis, oozing from lines

### Step 2: Coagulation Panel
- **PT/INR**: Prolonged (>20 sec)
- **aPTT**: Prolonged (>40 sec)
- **Fibrinogen**: <100 mg/dL
- **Platelets**: <50k (often <20k)
- **D-dimer**: >5 μg/mL
- **FDP**: >40 μg/mL

### Step 3: ISTH DIC Score
| Component | Points |
|-----------|--------|
| Platelets | >100 = 0; 50-100 = 1; 20-50 = 2; <20 = 3 |
| D-dimer/FDP | Normal = 0; Moderate = 2; Strong = 3 |
| PT prolonged | <3 sec = 0; 3-6 sec = 1; >6 sec = 2 |
| Fibrinogen | >100 = 0; <100 = 1 |
| **Score ≥5 = Overt DIC** |

### Step 4: Blood Smear
- **Schistocytes**: Fragmented RBCs (mechanical trauma)
- **Microspherocytes**: From hemolysis
- **Polychromasia**: Reticulocytosis (bone marrow response)

## Management Approach

### Immediate Actions
1. **Identify & treat underlying cause**:
   - **Sepsis**: Broad-spectrum antibiotics immediately, source control
   - **Obstetric**: Emergency OB consult, delivery if abruption
   - **Trauma**: Hemorrhage control (OR if bleeding), avoid over-transfusion
   - **APL**: Hematology consult, ATRA initiation

2. **Support organ perfusion**:
   - IV fluids for shock (but avoid excess → ARDS)
   - Vasopressors if MAP <65
   - Oxygen if hypoxemic

3. **Correct coagulopathy if bleeding**:

### Transfusion Strategy

#### FFP (Fresh Frozen Plasma)
- **When**: PT/PTT prolonged + active bleeding
- **Dose**: 2-4 units (10-15 mL/kg)
- **Goal**: Restore clotting factors; not primary for fibrinogen
- **Timing**: Within 30 min if massive hemorrhage

#### Cryoprecipitate
- **When**: Fibrinogen <100 + active bleeding
- **Dose**: 10 units (typical adult)
- **Goal**: Restore fibrinogen to >100 mg/dL
- **Advantage**: More fibrinogen per mL than FFP

#### Platelets
- **When**: Platelets <50k + active bleeding
- **Dose**: 1 unit per 5-10 kg (e.g., 6-10 units for 70 kg)
- **Goal**: >20k if no bleeding; >50k if bleeding
- **Limitation**: Transfused platelets consumed rapidly in DIC

#### Packed RBCs
- **When**: Hb <7 or active hemorrhage
- **Ratio in massive transfusion**: 1:1:1 (RBC:FFP:Platelets)

### Monitoring Response
- **Platelets**: Trend up if DIC improving (initial may still drop)
- **Fibrinogen**: >100 mg/dL goal
- **PT/PTT**: Should improve
- **D-dimer**: May stay high briefly (reflects turnover)
- **Clinical**: Bleeding stops, perfusion improves

## Indian ICU Context: Common DIC Scenarios

### 1. Sepsis-Related DIC
- **Most common cause** in Indian ICUs
- **Common organisms**: Gram-negative (E. coli, Klebsiella), Meningococcus, Candida
- **Triggers**: Pneumonia, UTI, GI perforation, nosocomial
- **Management**: Antibiotics (within 1 hour), source control, fluid resuscitation, transfusion if bleeding

### 2. Obstetric DIC
- **Placental abruption**: Massive TF release
- **Amniotic fluid embolism**: AFE (rare)
- **Pre-eclampsia/eclampsia**: Trigger HELLP (hemolysis, elevated LFTs, low platelets)
- **Management**: Emergency delivery (C-section), FFP/cryo for bleeding

### 3. Trauma DIC
- **Polytrauma with shock**: Tissue damage + transfusion triggers
- **Dilutional coagulopathy**: From large-volume crystalloid + blood loss
- **Management**: Damage control surgery, balanced transfusion (1:1:1), restrict fluids

### 4. Snake Bite (Viper/Cobra)
- **Coagulopathy**: Direct venom effects (Factor V inhibition, fibrinolysis)
- **DIC**: From massive envenomation
- **Management**: Polyvalent antivenom, FFP, cryoprecipitate if fibrinogen <100

## Pitfalls in DIC Management
- **Over-transfusion before cause controlled**: Worsens coagulopathy
- **Ignoring underlying cause**: Transfusions alone do not stop DIC
- **Heparin routinely**: Risk of bleeding; only if thrombosis dominates
- **Platelets <10k but no bleeding**: May not need transfusion (risk of transfusion reaction)`,
        mnemonics: [
          {
            text: "DIC presentation: Bleeding + Thrombosis together (NOT either alone)",
            explanation:
              "Key to recognizing DIC: simultaneous bleeding (petechiae, oozing) AND thrombosis (pulmonary, renal, skin necrosis). Bleeding alone ≠ DIC",
          },
          {
            text: "DIC management: Cause → Transfuse → Monitor",
            explanation:
              "Algorithm: treat underlying cause first (antibiotics, surgery, delivery), then transfuse if bleeding (FFP/cryo/platelets), then monitor labs/clinical response",
          },
        ],
        keyPoints: [
          "DIC = bleeding + thrombosis simultaneously (classic presentation)",
          "ISTH score ≥5 = overt DIC (combines platelet, D-dimer, PT, fibrinogen)",
          "Treat underlying cause first (sepsis, trauma, obstetric, APL)",
          "Transfuse FFP/cryo/platelets ONLY if active bleeding + abnormal labs",
          "Monitor platelet/fibrinogen trends; DIC improving when labs normalize",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 135 - DIC",
            edition: "21st",
          },
        ],
      },
      {
        layer: 4,
        slug: "dic-coagulopathy-exam-prep",
        title: "DIC - Exam Prep & High-Yield Facts",
        estimatedMinutes: 20,
        summary:
          "High-yield facts on DIC definition, triggers, lab patterns, ISTH scoring, and treatment priorities.",
        contentMd: `# DIC - Exam Prep

## High-Yield One-Liners
- **DIC**: Uncontrolled coagulation activation → microthrombi + bleeding paradox
- **Diagnosis**: ISTH score ≥5 (combines platelets, D-dimer, PT, fibrinogen)
- **Triggers**: T-CHIP (Trauma, Cancer/esp. APL, Hematologic, Infection/sepsis, Placental/obstetric)
- **Lab pattern**: Low fibrino, low platelets, high D-dimer, high PT/PTT, schistocytes
- **Classic presentation**: Bleeding + thrombosis SIMULTANEOUSLY
- **First action**: Treat underlying cause (antibiotics, surgery, chemotherapy)
- **Transfusion**: FFP if factors low + bleeding; cryo if fibrino <100 + bleeding
- **Anticoagulation (heparin)**: Only if thrombosis dominates (acral necrosis); risky if bleeding
- **Platelet threshold in bleeding**: Transfuse if <50k + active bleeding
- **Acute DIC**: Hours to days, very high mortality
- **Chronic DIC**: Days to weeks, lower mortality
- **ISTH components**: Platelets (0-3), D-dimer (0-3), PT (0-2), Fibrino (0-1)

## DIC vs. Hepatic Coagulopathy (Differential)
| Feature | DIC | Liver Disease |
|---------|-----|--------|
| **Platelets** | ↓↓ (microthrombi) | ↓ (mild, portal hypertension) |
| **Fibrinogen** | ↓↓ (consumption) | ↓ (poor synthesis, but preserved longer) |
| **D-dimer** | ↑↑↑ (very high) | ↑ (mild-moderate) |
| **PT/PTT** | ↑↑ (factors consumed) | ↑ (poor synthesis) |
| **FDP** | ↑ (high) | Low-normal |
| **Clinical** | Bleeding + thrombosis | Bleeding only |

## ISTH DIC Score Calculation
1. **Platelet count**:
   - >100 = 0 pts
   - 50-100 = 1 pt
   - 20-50 = 2 pts
   - <20 = 3 pts

2. **D-dimer/FDP**:
   - Normal = 0 pts
   - Moderate elevation = 2 pts
   - Strong elevation (>5 μg/mL D-dimer) = 3 pts

3. **PT prolongation**:
   - <3 sec = 0 pts
   - 3-6 sec = 1 pt
   - >6 sec = 2 pts

4. **Fibrinogen**:
   - >100 mg/dL = 0 pts
   - <100 mg/dL = 1 pt

**Total ≥5 = Overt DIC**

## Lab Interpretation Pearls
- **Low fibrinogen**: Suggests DIC (NOT simple bleeding; bleeding depletes via different mechanism)
- **Schistocytes**: Indicates mechanical RBC damage (microthrombi) — pathognomonic for DIC
- **Elevated D-dimer alone**: NOT enough for DIC diagnosis (check full ISTH)
- **Normal fibrinogen in context of bleeding**: Probably NOT DIC (check cause of bleeding separately)

## Exam Traps
- **DIC = Bleeding alone**: WRONG — must have thrombosis component too
- **Anticoagulate all DIC**: WRONG — only if thrombosis dominates
- **Transfuse all abnormal labs**: WRONG — only if bleeding + abnormal labs
- **Treat DIC without treating cause**: WRONG — transfusions worsen DIC without cause treatment
- **ISTH <5 = no DIC**: Possible non-overt DIC; still may need monitoring`,
        mnemonics: [
          {
            text: "ISTH ≥5 = DIC: Platelets (0-3) + D-dimer (0-3) + PT (0-2) + Fibrino (0-1)",
            explanation:
              "DIC diagnosis: ISTH score combines four lab parameters. Score ≥5 = overt DIC. Max 9 points.",
          },
          {
            text: "T-CHIP triggers: Trauma, Cancer (APL), Hematologic, Infection (sepsis), Placental/obstetric",
            explanation:
              "Common DIC causes: Trauma (severe), Cancer (especially APL ~80%), transfusion reaction, Sepsis (most common ICU), Obstetric emergency",
          },
        ],
        keyPoints: [
          "DIC = bleeding + thrombosis (simultaneous presentation)",
          "ISTH ≥5 = overt DIC diagnosis",
          "Triggers: trauma, sepsis, malignancy (esp. APL), obstetric",
          "Lab findings: low fibrinogen, low platelets, high D-dimer/PT, schistocytes",
          "Treatment: cause first, then transfuse if bleeding (FFP/cryo/platelets)",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 135 - DIC",
            edition: "21st",
          },
        ],
      },
      {
        layer: 5,
        slug: "dic-coagulopathy-active-recall",
        title: "DIC & Coagulopathy - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-style Q&A for self-testing on DIC pathophysiology, lab interpretation, and management.",
        contentMd: `# DIC & Coagulopathy - Active Recall

**Q1:** Define DIC and its two paradoxical clinical features.
> DIC is uncontrolled systemic coagulation activation causing microthrombi formation and consumption coagulopathy. Paradox: BOTH thrombosis (microthrombi, organ infarction) AND bleeding (from consumption of factors/platelets and fibrinolysis).

**Q2:** List the T-CHIP mnemonic for common DIC causes.
> T=Trauma, C=Cancer (esp. APL), H=Hematologic (transfusion), I=Infection (sepsis), P=Placental/Pregnancy causes (abruption, AFE, pre-eclampsia).

**Q3:** What is the pathophysiologic sequence in DIC?
> TF release → thrombin surge → fibrin formation + platelet consumption → microthrombi → fibrinolysis amplification → FDPs + continued consumption → coagulopathy paradox.

**Q4:** What laboratory findings are characteristic of DIC?
> Low fibrinogen, low platelets, high PT/PTT, elevated D-dimer (>5 μg/mL), elevated FDP (>40 μg/mL), schistocytes on blood smear.

**Q5:** What is the ISTH DIC score and how is it calculated?
> Combines four parameters scored 0-4 each: platelets (0-3), D-dimer/FDP (0-3), PT prolongation (0-2), fibrinogen (0-1). Score ≥5 = overt DIC.

**Q6:** What is the clinical presentation of acute DIC?
> Rapid onset (hours-days) with simultaneous bleeding (petechiae, mucosal bleeding, oozing from sites) and thrombosis (acral necrosis, pulmonary symptoms, organ dysfunction). Very high mortality (40-60%).

**Q7:** How is chronic DIC different from acute DIC?
> Chronic DIC: insidious onset (days-weeks), mild-moderate lab abnormalities, lower mortality. Often associated with malignancy or liver disease.

**Q8:** What is the most critical first step in DIC management?
> Treat the underlying cause (sepsis → antibiotics, trauma → hemorrhage control, obstetric → delivery, APL → ATRA/chemotherapy). Transfusions alone do NOT stop DIC.

**Q9:** When do you transfuse FFP in DIC?
> When fibrinogen and other clotting factors are depleted AND patient has active bleeding (mucosal, GI, CNS). Typically 2-4 units; goal is to restore PT/PTT toward normal.

**Q10:** When do you transfuse cryoprecipitate in DIC?
> When fibrinogen is critically low (<100 mg/dL) AND patient has active bleeding. 10 units typical dose; more concentrated fibrinogen than FFP, smaller volume.

**Q11:** When is anticoagulation (heparin) used in DIC?
> Rarely and only if thrombotic manifestations dominate (e.g., progressive acral necrosis, gangrene of digits, pulmonary microthrombi). Not routine; risk of bleeding if fibrinogen critically low.

**Q12:** How do you differentiate DIC from hepatic coagulopathy?
> DIC: very high D-dimer, low fibrinogen, schistocytes, bleeding + thrombosis. Liver: mildly elevated D-dimer, better-preserved fibrinogen, bleeding only, elevated bilirubin/albumin low.

**Q13:** What is microangiopathic hemolytic anemia (MAHA) in DIC?
> RBCs mechanically fragmented by fibrin strands in microvasculature, producing schistocytes (helmet cells) on blood smear and hemoglobinuria (dark urine).

**Q14:** List three scenarios where DIC is very likely in ICU setting.
> 1. Meningococcal sepsis (highest risk of fulminant DIC). 2. APL (80% have DIC). 3. Severe trauma with massive transfusion. 4. Severe pancreatitis.

**Q15:** What is Waterhouse-Friderichsen syndrome?
> Meningococcal sepsis with DIC causing bilateral adrenal hemorrhage (adrenal necrosis), leading to acute adrenal insufficiency, shock, and high mortality.`,
        mnemonics: [
          {
            text: "DIC diagnosis & treatment: Recognize (bleeding + thrombosis) → ISTH score ≥5 → Treat cause → Transfuse if bleeding",
            explanation:
              "DIC algorithm: clinical suspicion from bleeding + thrombosis together, confirm with ISTH ≥5, identify/treat cause (antibiotics, surgery), transfuse only if bleeding + abnormal labs",
          },
        ],
        keyPoints: [
          "DIC = bleeding + thrombosis simultaneously (key distinguishing feature)",
          "ISTH ≥5 = overt DIC (platelets + D-dimer + PT + fibrinogen)",
          "Treat underlying cause FIRST (antibiotics, surgery, chemotherapy)",
          "Transfuse FFP/cryo/platelets ONLY if active bleeding + abnormal labs",
          "Common in Indian ICUs: sepsis, obstetric emergencies, trauma",
        ],
        textbookRefs: [
          {
            book: "Harrison's Principles of Internal Medicine",
            chapter: "Ch 135 - DIC",
            edition: "21st",
          },
        ],
      },
    ],
  },
];
