import type { TopicLessons } from "./content-loader";

export const medicineLessonsPart15: TopicLessons[] = [
  {
    topicCode: "IM-MOD-10-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "shock-layer-1-foundation",
        title: "Shock: Types & Management - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of shock definition, classification into four major types, basic hemodynamic parameters, and oxygen delivery concepts essential for understanding circulatory failure.",
        contentMd: `# Shock: Types & Management - Foundation

## Definition
Shock is a life-threatening condition of **circulatory failure** resulting in inadequate tissue perfusion and cellular hypoxia. If untreated, it progresses to irreversible organ damage and death.

## Hemodynamic Basics
- **Cardiac Output (CO)** = Stroke Volume (SV) x Heart Rate (HR)
- **Mean Arterial Pressure (MAP)** = CO x Systemic Vascular Resistance (SVR)
- **Oxygen Delivery (DO2)** = CO x CaO2 x 10 (where CaO2 = 1.34 x Hb x SaO2)
- Normal MAP: 70-105 mmHg; MAP <65 mmHg = inadequate organ perfusion
- Normal CO: 4-8 L/min; CI (Cardiac Index) = CO/BSA, normal 2.5-4.0 L/min/m2

## Classification of Shock

### 1. Hypovolemic Shock
- **Cause**: Reduced circulating volume
- Hemorrhagic: trauma, GI bleeding, obstetric hemorrhage
- Non-hemorrhagic: dehydration, burns, pancreatitis (third-spacing)
- Most common type of shock in India (trauma, diarrheal diseases)

### 2. Cardiogenic Shock
- **Cause**: Pump failure - heart cannot generate adequate CO
- Acute MI (most common cause), acute myocarditis, valvular emergencies
- Arrhythmias (severe bradycardia/tachycardia), cardiac tamponade
- Mortality 40-50% even with treatment

### 3. Distributive Shock
- **Cause**: Pathological vasodilation with maldistribution of blood flow
- **Septic shock**: most common subtype (50% of ICU shock cases)
- Anaphylactic shock: IgE-mediated, rapid onset
- Neurogenic shock: spinal cord injury above T6
- Adrenal crisis: acute adrenal insufficiency

### 4. Obstructive Shock
- **Cause**: Mechanical obstruction to blood flow
- Tension pneumothorax, cardiac tamponade
- Massive pulmonary embolism
- Constrictive pericarditis (chronic)

## Hemodynamic Profiles

| Type | CO | SVR | CVP/PCWP | SvO2 |
|------|-----|------|----------|------|
| Hypovolemic | Low | High | Low | Low |
| Cardiogenic | Low | High | High | Low |
| Distributive (septic early) | High | Low | Low-Normal | High |
| Distributive (septic late) | Low | Low | Low | Low |
| Obstructive | Low | High | Variable | Low |

## Stages of Shock
1. **Compensated (Pre-shock)**: Tachycardia, vasoconstriction maintain BP; subtle signs only
2. **Decompensated**: Hypotension, oliguria, altered sensorium
3. **Irreversible**: Multiorgan failure, refractory to treatment, cellular death`,
        mnemonics: [
          { text: "SHOCK types = HCDO: Hypovolemic, Cardiogenic, Distributive, Obstructive", explanation: "Four major classifications of shock" },
          { text: "MAP = CO x SVR (like Ohm's law: V = I x R)", explanation: "Mean arterial pressure equals cardiac output times systemic vascular resistance" },
          { text: "Distributive = SANA: Septic, Anaphylactic, Neurogenic, Adrenal", explanation: "Four subtypes of distributive shock" }
        ],
        keyPoints: [
          "Shock is defined by inadequate tissue perfusion, NOT just low blood pressure",
          "MAP <65 mmHg generally indicates inadequate organ perfusion",
          "Hypovolemic shock is the most common type in India (trauma, diarrheal diseases)",
          "Septic shock is the most common type in ICU settings worldwide",
          "Cardiogenic shock has the highest mortality (~40-50%) among shock types",
          "Early (warm) septic shock shows HIGH CO and LOW SVR; late septic shock shows LOW CO"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "298: Approach to the Patient with Shock", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Critical Care: Shock", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "9: Critical Care Medicine", edition: "24th" }
        ]
      },
      {
        layer: 2,
        slug: "shock-layer-2-mechanism",
        title: "Shock: Types & Management - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of each shock type including compensatory mechanisms, cellular injury pathways, sepsis cascade, anaphylaxis mediators, and progression to multiorgan dysfunction.",
        contentMd: `# Shock: Types & Management - Mechanism

## Compensatory Mechanisms in Shock

### Baroreceptor Response
- Carotid sinus and aortic arch detect decreased stretch
- Sympathetic activation → catecholamine surge
- Effects: tachycardia, vasoconstriction, increased contractility
- Redistributes blood from skin, gut, kidneys → heart, brain

### Hormonal Response
- **RAAS activation**: Renin → Angiotensin II (vasoconstriction) → Aldosterone (Na+/water retention)
- **ADH release**: Water retention, vasoconstriction (V1 receptors)
- **Cortisol**: Maintains vascular tone, permissive effect on catecholamines
- **Glucagon**: Hepatic glycogenolysis → hyperglycemia

### Microcirculatory Changes
- Precapillary sphincter constriction → reduced capillary flow
- Fluid shifts from interstitial to intravascular (transcapillary refill)
- Duration-dependent: prolonged shock → sphincter fatigue → pooling

## Septic Shock Pathophysiology (Most Complex)

### Inflammatory Cascade
1. Pathogen triggers (PAMPs) activate innate immunity via TLRs
2. Macrophage/monocyte activation → cytokine storm
3. **Pro-inflammatory**: TNF-alpha, IL-1, IL-6, IL-8
4. **Anti-inflammatory**: IL-10, IL-4 (can cause immunoparalysis)
5. Complement activation (C3a, C5a) → further inflammation

### Vasodilation Mechanism
- iNOS induction → excessive NO production → profound vasodilation
- NO activates guanylate cyclase → cGMP → smooth muscle relaxation
- Resistant to vasopressors (catecholamine hyporesponsiveness)

### Endothelial Dysfunction
- Glycocalyx degradation → increased permeability → edema
- Tissue factor expression → DIC activation
- Loss of endothelial barrier → capillary leak syndrome

### Myocardial Depression in Sepsis
- Circulating myocardial depressant factors (TNF-alpha, IL-1)
- Mitochondrial dysfunction → bioenergetic failure
- Both systolic and diastolic dysfunction
- Usually reversible if patient survives

## Hypovolemic Shock - Hemorrhage Classes (ATLS)

| Class | Blood Loss | HR | BP | Mental Status |
|-------|-----------|----|----|---------------|
| I | <750 mL (<15%) | <100 | Normal | Normal/anxious |
| II | 750-1500 mL (15-30%) | 100-120 | Normal | Anxious |
| III | 1500-2000 mL (30-40%) | 120-140 | Decreased | Confused |
| IV | >2000 mL (>40%) | >140 | Very low | Lethargic/obtunded |

## Anaphylactic Shock Mechanism
- IgE-mediated (Type I hypersensitivity) → mast cell/basophil degranulation
- Histamine, tryptase, leukotrienes, prostaglandins released
- Effects: vasodilation, bronchospasm, increased permeability, laryngeal edema
- Rapid onset (minutes) → can be fatal within 30 minutes

## Cellular Injury in Shock
1. Inadequate O2 delivery → anaerobic metabolism → lactic acidosis
2. ATP depletion → Na+/K+ ATPase failure → cell swelling
3. Calcium influx → activates phospholipases, proteases
4. Mitochondrial dysfunction → cytochrome c release → apoptosis
5. Lysosomal rupture → autodigestion
6. Ischemia-reperfusion injury: ROS generation during resuscitation

## Multiorgan Dysfunction Syndrome (MODS)
- Gut barrier failure → bacterial translocation → perpetuates sepsis
- Acute kidney injury → oliguria, uremia
- ARDS → refractory hypoxemia
- Hepatic dysfunction → coagulopathy, hypoglycemia
- DIC → consumption coagulopathy + microthrombosis
- Encephalopathy → altered sensorium`,
        mnemonics: [
          { text: "Sepsis mediators = TNI-168: TNF-alpha, NO (iNOS), IL-1, IL-6, IL-8", explanation: "Key inflammatory mediators in septic shock cascade" },
          { text: "ATLS hemorrhage: 15-30-40 rule for class boundaries", explanation: "Class I <15%, Class II 15-30%, Class III 30-40%, Class IV >40% blood volume loss" },
          { text: "Cell death in shock = LACMA: Lactic acidosis, ATP depletion, Calcium influx, Mitochondrial failure, Autodigestion", explanation: "Sequence of cellular injury in prolonged shock" }
        ],
        keyPoints: [
          "Baroreceptor-mediated sympathetic activation is the earliest compensatory mechanism",
          "In septic shock, excessive NO production via iNOS causes vasopressor-resistant vasodilation",
          "ATLS Class III hemorrhage (30-40% loss) is the first class with hypotension",
          "Anaphylaxis is IgE-mediated mast cell degranulation with histamine release",
          "Gut bacterial translocation in prolonged shock perpetuates the inflammatory cycle",
          "Myocardial depression in sepsis is mediated by TNF-alpha and IL-1 but is usually reversible"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "298: Approach to the Patient with Shock", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Critical Care: Shock", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "9: Critical Care Medicine", edition: "24th" }
        ]
      },
      {
        layer: 3,
        slug: "shock-layer-3-clinical",
        title: "Shock: Types & Management - Clinical Application",
        estimatedMinutes: 25,
        summary: "Clinical recognition, diagnostic workup, and evidence-based management of each shock type including fluid resuscitation, vasopressors, and the Surviving Sepsis Campaign guidelines.",
        contentMd: `# Shock: Types & Management - Clinical Application

## Clinical Recognition

### Common Signs Across All Types
- Hypotension (SBP <90 or MAP <65 mmHg)
- Tachycardia (HR >100, may be absent in neurogenic/beta-blocker use)
- Tachypnea, altered mental status
- Oliguria (<0.5 mL/kg/hr)
- Cool, clammy extremities (except warm shock in early sepsis)
- Mottled skin, delayed capillary refill (>3 seconds)

### Type-Specific Features
- **Hypovolemic**: Flat neck veins, dry mucosa, postural hypotension, obvious bleeding source
- **Cardiogenic**: Elevated JVP, S3 gallop, pulmonary crackles, cold extremities
- **Septic**: Warm extremities (early), fever/hypothermia, identifiable source of infection
- **Anaphylactic**: Urticaria, angioedema, stridor, wheezing, known allergen exposure
- **Neurogenic**: Bradycardia + hypotension (loss of sympathetic tone), warm dry skin below injury level
- **Obstructive**: Distended neck veins, muffled heart sounds (tamponade), unilateral absent breath sounds (tension pneumo)

## Diagnostic Workup
- **Labs**: CBC, lactate (>2 mmol/L = tissue hypoperfusion), ABG, renal/liver function, coagulation, blood cultures (x2 before antibiotics in sepsis)
- **Lactate**: Single most useful biomarker; serial measurements guide resuscitation
- **Imaging**: CXR, ECHO (bedside), CT as indicated
- **Bedside ECHO (RUSH exam)**: Pump (LV function), Tank (IVC, fluid status), Pipes (DVT, PE)
- **Invasive monitoring**: Arterial line, CVP, PA catheter (selected cases)

## Management by Type

### Hypovolemic Shock
- **Fluid resuscitation**: Crystalloids first (Ringer's Lactate preferred over NS)
- Hemorrhagic: Balanced resuscitation, 1:1:1 ratio (PRBC:FFP:Platelets) for massive transfusion
- Target MAP >65 mmHg, UOP >0.5 mL/kg/hr
- Permissive hypotension (SBP 80-90) in uncontrolled hemorrhage until surgical control
- Indian context: Dengue hemorrhagic fever, obstetric hemorrhage, road traffic accidents

### Cardiogenic Shock
- Treat underlying cause (PCI for STEMI, pericardiocentesis for tamponade)
- Inotropes: Dobutamine first-line, milrinone if on beta-blockers
- Vasopressors: Norepinephrine if MAP remains low despite inotropes
- IABP (Intra-Aortic Balloon Pump) for mechanical support
- Avoid excessive fluids (worsens pulmonary edema)

### Septic Shock - Surviving Sepsis Campaign (Hour-1 Bundle)
1. Measure lactate (re-measure if >2 mmol/L)
2. Blood cultures before antibiotics
3. Broad-spectrum IV antibiotics within 1 hour
4. 30 mL/kg crystalloid bolus for hypotension or lactate >4
5. Vasopressors for MAP <65 after fluid resuscitation
- **Norepinephrine** = first-line vasopressor
- Add **vasopressin** (0.03 U/min) as second agent
- Add **epinephrine** if MAP target not met
- **Hydrocortisone** 200 mg/day if vasopressor-refractory (stress-dose steroids)
- Source control within 6-12 hours (drainage, debridement, device removal)

### Anaphylactic Shock
- **Epinephrine IM** 0.3-0.5 mg (1:1000) into anterolateral thigh - FIRST-LINE
- Repeat every 5-15 minutes if needed
- IV fluids (1-2L crystalloid bolus)
- Adjuncts: H1 blocker (chlorpheniramine), H2 blocker (ranitidine), hydrocortisone 200 mg IV
- Bronchodilators (salbutamol nebulization) for bronchospasm
- Observe for biphasic reaction (4-6 hours minimum)

### Neurogenic Shock
- IV fluids first; if refractory → vasopressors (norepinephrine/phenylephrine)
- Atropine for symptomatic bradycardia
- Spinal immobilization, treat underlying cord injury

## Vasopressor Comparison

| Drug | Alpha | Beta-1 | Dose Range | Primary Use |
|------|-------|--------|------------|-------------|
| Norepinephrine | +++ | ++ | 0.1-2 mcg/kg/min | First-line septic shock |
| Epinephrine | +++ | +++ | 0.1-1 mcg/kg/min | Anaphylaxis, refractory shock |
| Vasopressin | V1 | - | 0.03-0.04 U/min | Adjunct in septic shock |
| Dopamine | +/++ | ++ | 2-20 mcg/kg/min | Second-line (arrhythmia risk) |
| Dobutamine | + | +++ | 2-20 mcg/kg/min | Cardiogenic shock (inotrope) |
| Phenylephrine | +++ | - | 0.1-0.5 mcg/kg/min | Neurogenic shock |`,
        mnemonics: [
          { text: "Sepsis Hour-1 Bundle = LABS-V: Lactate, Antibiotics, Blood cultures, Saline (30mL/kg), Vasopressors", explanation: "Five components of the Surviving Sepsis Campaign Hour-1 bundle" },
          { text: "Anaphylaxis = EPI FIRST: Epinephrine IM, Fluids IV, Remove allergen, Steroids, Treatment observation", explanation: "Management priorities in anaphylactic shock" },
          { text: "Vasopressor order in sepsis: NorEpi → Vasopressin → Epinephrine → Hydrocortisone", explanation: "Stepwise escalation of vasopressor support per SSC guidelines" }
        ],
        keyPoints: [
          "Norepinephrine is the first-line vasopressor for septic shock per SSC guidelines",
          "IM epinephrine (1:1000) into anterolateral thigh is first-line for anaphylaxis",
          "Lactate is the single most useful biomarker for assessing tissue perfusion in shock",
          "Hour-1 bundle: lactate, blood cultures, antibiotics, fluids, vasopressors",
          "Bedside ECHO (RUSH exam) helps differentiate shock types rapidly",
          "Permissive hypotension (SBP 80-90) used in uncontrolled hemorrhagic shock"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "298: Approach to the Patient with Shock", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Critical Care: Shock", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "9: Critical Care Medicine", edition: "24th" }
        ]
      },
      {
        layer: 4,
        slug: "shock-layer-4-exam",
        title: "Shock: Types & Management - Exam Preparation",
        estimatedMinutes: 20,
        summary: "High-yield NEXT exam topics covering hemodynamic profiles, vasopressor choices, clinical vignettes, and common exam question patterns for shock management.",
        contentMd: `# Shock: Types & Management - Exam Preparation

## Hemodynamic Profile Recognition (Most Asked)

| Parameter | Hypovolemic | Cardiogenic | Septic (Early) | Septic (Late) | Obstructive |
|-----------|-------------|-------------|----------------|---------------|-------------|
| CO/CI | Low | Low | High | Low | Low |
| SVR | High | High | Low | High | High |
| CVP | Low | High | Low/Normal | Variable | High |
| PCWP | Low | High | Low | Variable | Variable |
| SvO2 | Low | Low | High | Low | Low |

**Key rule**: If CO low + SVR high + CVP low → Hypovolemic. If CO low + SVR high + CVP high → Cardiogenic.

## Clinical Vignettes - NEXT Pattern

### Vignette 1: Identifying Shock Type
"45-year-old man in RTA, BP 80/50, HR 130, cold extremities, flat JVP, estimated blood loss 1.5L. What type of shock?"
→ **Hypovolemic (Class III hemorrhage)** - low BP + tachycardia + flat JVP + trauma

### Vignette 2: Vasopressor Choice
"60-year-old with UTI, fever 39.5C, BP 75/40, HR 115, warm extremities. After 2L NS, MAP still 58. What is the first vasopressor?"
→ **Norepinephrine** - septic shock refractory to fluids, NE is first-line per SSC

### Vignette 3: Anaphylaxis Management
"30-year-old develops urticaria, stridor, BP 70/40 within 10 minutes of IV ceftriaxone. What is the IMMEDIATE treatment?"
→ **IM Epinephrine 0.5 mg (1:1000)** into anterolateral thigh. NOT IV antihistamines first.

### Vignette 4: Cardiogenic Shock
"55-year-old with anterior STEMI, BP 80/60, HR 110, elevated JVP, bilateral crackles, S3. What is the best initial management?"
→ **Emergency PCI** + Norepinephrine (MAP support) + Dobutamine (inotropic support). Avoid excessive IV fluids.

### Vignette 5: Obstructive Shock
"22-year-old with stab wound to left chest, BP 70/50, HR 140, distended neck veins, muffled heart sounds. Diagnosis and immediate treatment?"
→ **Cardiac tamponade** (Beck's triad). Immediate **pericardiocentesis** (needle aspiration of pericardial fluid).

### Vignette 6: Refractory Septic Shock
"Patient on norepinephrine 0.5 mcg/kg/min + vasopressin 0.03 U/min, MAP still 55. What to add next?"
→ **Hydrocortisone 50 mg IV q6h** (stress-dose steroids for vasopressor-refractory septic shock)

## Common Exam Traps
1. **Neurogenic shock has BRADYCARDIA** (not tachycardia) — loss of sympathetic tone
2. **Dopamine increases arrhythmia risk** — NE preferred as first-line vasopressor
3. **Epinephrine for anaphylaxis is IM (1:1000)**, NOT IV (1:10,000 is for cardiac arrest only)
4. **Beck's triad** (hypotension, JVD, muffled heart sounds) = tamponade, NOT tension pneumothorax
5. **Tension pneumothorax**: needle decompression BEFORE chest X-ray
6. **Warm shock** (early septic) can have NORMAL or HIGH cardiac output
7. **Lactate >4 mmol/L** mandates fluid resuscitation even without hypotension

## Quick Reference Values
- MAP target: >65 mmHg
- UOP target: >0.5 mL/kg/hr
- Lactate normal: <2 mmol/L; severe: >4 mmol/L
- CVP target: 8-12 mmHg (12-15 if ventilated)
- ScvO2 target: >70%
- Class III hemorrhage: 30-40% blood loss = first class with hypotension`,
        mnemonics: [
          { text: "Beck's Triad = 3 Ds: Distended veins, Diminished heart sounds, Decreased BP", explanation: "Classic triad of cardiac tamponade" },
          { text: "Neurogenic shock = BRAD + HYPO: BRADycardia + HYPOtension (unlike other shock types)", explanation: "Unique hemodynamic pattern in neurogenic shock due to loss of sympathetic tone" },
          { text: "Shock lactate rule: 2-4-dead: >2 tissue hypoperfusion, >4 mandatory fluids, persistent = bad prognosis", explanation: "Lactate thresholds for clinical decision-making in shock" }
        ],
        keyPoints: [
          "Neurogenic shock is unique: bradycardia + hypotension (all other types have tachycardia)",
          "Norepinephrine is preferred over dopamine as first-line vasopressor (less arrhythmia risk)",
          "Beck's triad (JVD, muffled sounds, hypotension) is pathognomonic for cardiac tamponade",
          "Epinephrine for anaphylaxis: IM 1:1000 (0.5 mg); IV 1:10,000 is only for cardiac arrest",
          "Tension pneumothorax: needle decompression is a clinical diagnosis — do NOT wait for CXR"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "298: Approach to the Patient with Shock", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Critical Care: Shock", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "9: Critical Care Medicine", edition: "24th" }
        ]
      },
      {
        layer: 5,
        slug: "shock-layer-5-active-recall",
        title: "Shock: Types & Management - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-style active recall covering shock classification, hemodynamics, vasopressor pharmacology, and clinical management protocols.",
        contentMd: `# Shock: Types & Management - Active Recall

## Flashcard Q&A

**Q1:** What are the four major types of shock?
**A1:** Hypovolemic (volume loss), Cardiogenic (pump failure), Distributive (vasodilation — septic, anaphylactic, neurogenic, adrenal), and Obstructive (mechanical obstruction — tamponade, tension pneumo, massive PE).

**Q2:** What is the hemodynamic profile of early septic shock?
**A2:** HIGH cardiac output, LOW SVR (vasodilation from NO), LOW-normal CVP/PCWP, HIGH SvO2 (poor oxygen extraction). This is "warm shock" with warm extremities and bounding pulses despite hypotension.

**Q3:** What is the first-line vasopressor for septic shock and why?
**A3:** Norepinephrine. It has strong alpha-1 (vasoconstriction) and moderate beta-1 (cardiac output) effects. Preferred over dopamine because of lower arrhythmia risk (SOAP II trial).

**Q4:** What is the Hour-1 bundle for sepsis management?
**A4:** 1) Measure lactate (repeat if >2), 2) Blood cultures before antibiotics, 3) Broad-spectrum IV antibiotics within 1 hour, 4) 30 mL/kg crystalloid for hypotension or lactate >4, 5) Vasopressors if MAP <65 after fluids.

**Q5:** What is the immediate treatment for anaphylactic shock?
**A5:** IM Epinephrine 0.3-0.5 mg of 1:1000 concentration into anterolateral thigh. Repeat every 5-15 minutes. Also: IV fluids, remove allergen, H1/H2 blockers, and steroids as adjuncts. Observe 4-6 hours for biphasic reaction.

**Q6:** How do you differentiate hypovolemic from cardiogenic shock clinically?
**A6:** Both have low CO and high SVR. Key difference: Hypovolemic has LOW CVP/JVP (flat neck veins, dry mucosa) while Cardiogenic has HIGH CVP/JVP (distended neck veins, pulmonary crackles, S3 gallop).

**Q7:** What are the ATLS hemorrhage classes and when does hypotension first appear?
**A7:** Class I: <15% (normal vitals), Class II: 15-30% (tachycardia, normal BP), Class III: 30-40% (FIRST with hypotension, confusion), Class IV: >40% (severe hypotension, lethargy). Hypotension first appears at Class III.

**Q8:** What is Beck's triad and what does it indicate?
**A8:** Beck's triad = hypotension + distended neck veins (JVD) + muffled heart sounds. It indicates cardiac tamponade. Treatment: emergency pericardiocentesis.

**Q9:** Why is neurogenic shock unique hemodynamically?
**A9:** It presents with BRADYCARDIA + hypotension (all other shock types have tachycardia). This is because spinal cord injury above T6 causes loss of sympathetic tone with unopposed vagal (parasympathetic) activity. Treatment: IV fluids, then vasopressors + atropine for bradycardia.

**Q10:** What is the role of lactate in shock management?
**A10:** Lactate is the best biomarker for tissue hypoperfusion. Normal <2 mmol/L. Levels >2 indicate tissue hypoxia. Levels >4 mandate aggressive fluid resuscitation even without hypotension. Serial lactate clearance (>10% per 2 hours) indicates adequate resuscitation.

**Q11:** When are stress-dose steroids indicated in septic shock?
**A11:** Hydrocortisone 200 mg/day (50 mg IV q6h) is indicated in vasopressor-refractory septic shock (when adequate MAP cannot be maintained despite norepinephrine + vasopressin). Addresses relative adrenal insufficiency and restores vascular catecholamine sensitivity.

**Q12:** What is the massive transfusion protocol ratio?
**A12:** 1:1:1 ratio of PRBC:FFP:Platelets. Used when >10 units PRBC expected in 24 hours or >4 units in 1 hour. Balanced resuscitation prevents dilutional coagulopathy and the "lethal triad" (hypothermia, acidosis, coagulopathy).

**Q13:** What is permissive hypotension and when is it used?
**A13:** Permissive hypotension targets SBP 80-90 mmHg in uncontrolled hemorrhagic shock (before surgical hemostasis). Rationale: aggressive fluid resuscitation before bleeding control can worsen hemorrhage by disrupting clots and diluting clotting factors.

**Q14:** What is the RUSH exam in shock assessment?
**A14:** Rapid Ultrasound in Shock and Hypotension. Three components: PUMP (cardiac function - LV contractility, pericardial effusion), TANK (volume status - IVC diameter and collapsibility), PIPES (DVT assessment, aorta). Helps rapidly differentiate shock types at bedside.

**Q15:** What vasopressor is used as second-line adjunct in septic shock?
**A15:** Vasopressin 0.03-0.04 U/min (fixed dose, not titrated). Acts on V1 receptors causing vasoconstriction independent of catecholamine pathway. Added when norepinephrine alone is insufficient (VASST trial). Helps reduce norepinephrine dose.`,
        mnemonics: [
          { text: "Lethal Triad of Trauma = HAC: Hypothermia, Acidosis, Coagulopathy", explanation: "Three mutually reinforcing factors that worsen hemorrhagic shock outcomes" },
          { text: "RUSH = Pump-Tank-Pipes", explanation: "Bedside echo assessment: Pump (heart), Tank (IVC/volume), Pipes (DVT/aorta)" }
        ],
        keyPoints: [
          "Shock is inadequate tissue perfusion, not just low BP — lactate is the key biomarker",
          "Norepinephrine is first-line vasopressor for septic shock (SOAP II trial)",
          "IM epinephrine 1:1000 is the immediate first-line treatment for anaphylaxis",
          "Hypotension first appears at ATLS Class III hemorrhage (30-40% blood loss)",
          "Beck's triad (JVD + muffled sounds + hypotension) = cardiac tamponade",
          "RUSH exam (Pump-Tank-Pipes) rapidly differentiates shock types at bedside"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "298: Approach to the Patient with Shock", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Critical Care: Shock", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "9: Critical Care Medicine", edition: "24th" }
        ]
      }
    ]
  }
];
