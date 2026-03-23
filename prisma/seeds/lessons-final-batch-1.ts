import type { TopicLessons } from "./content-loader";

/**
 * 5-layer lessons for final batch 1.
 * Covers: BLS & ACLS (AS-MOD-04-TOP-01), ICU Management of Shock (AS-MOD-04-TOP-03),
 * CT Abdomen & Pelvis (RD-MOD-04-TOP-02).
 */
export const finalBatch1Lessons: TopicLessons[] = [
  // ═══════════════════════════════════════════════════════════════
  // AS-MOD-04-TOP-01: BLS & ACLS
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "AS-MOD-04-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "bls-acls-layer-1-foundation",
        title: "BLS & ACLS - Foundation",
        estimatedMinutes: 20,
        summary: "Basic Life Support follows the CAB sequence (Compressions, Airway, Breathing). Advanced Cardiac Life Support adds medications, defibrillation, and advanced airway management to the BLS framework.",
        contentMd: `# BLS & ACLS - Foundation

## Overview of Cardiac Arrest
- **Definition**: Sudden cessation of effective cardiac output
- **Rhythms**: VF, pulseless VT (shockable); asystole, PEA (non-shockable)
- **Golden period**: Brain damage begins after 4 minutes without CPR
- **Chain of Survival**: Early recognition -> Early CPR -> Early defibrillation -> Advanced care -> Post-arrest care

## BLS - CAB Sequence

### C - Compressions
- **Rate**: 100-120 per minute
- **Depth**: 5-6 cm (adult)
- **Hand placement**: Lower half of sternum
- **Ratio**: 30:2 (single rescuer)
- **Full recoil**: Allow complete chest recoil
- **Minimize interruptions**: <10 seconds pause

### A - Airway
- **Head-tilt, chin-lift**: Standard (non-trauma)
- **Jaw thrust**: Suspected cervical spine injury

### B - Breathing
- **Rescue breaths**: Each over 1 second with visible chest rise
- **Bag-mask**: Preferred in healthcare settings
- **Compression-only CPR**: Acceptable for untrained bystanders

## AED Use
- Apply as soon as available
- Shock if advised (VF/pulseless VT)
- Resume CPR immediately after shock for 2 minutes

## BLS vs ACLS Comparison
| Feature | BLS | ACLS |
|---------|-----|------|
| Personnel | Any trained person | Healthcare professionals |
| Equipment | AED, BVM | Monitor, IV access, drugs |
| Drugs | None | Epinephrine, amiodarone |
| Airway | Basic (head-tilt, OPA) | Advanced (ETT, LMA) |

> **Clinical Pearl**: High-quality CPR with minimal interruptions is the single most important factor in cardiac arrest survival.`,
        mnemonics: [
          { text: "CAB: Compressions first, Airway, Breathing", explanation: "Compressions before airway since 2010 guidelines to ensure early perfusion" },
          { text: "Push Hard Push Fast: 100-120/min, 5-6 cm", explanation: "Two critical quality metrics for chest compressions" }
        ],
        keyPoints: [
          "CAB sequence: Compressions first, then Airway, then Breathing",
          "Compression rate 100-120/min, depth 5-6 cm, full recoil",
          "30:2 ratio for single rescuer; continuous with advanced airway",
          "AED: shock if VF/pVT; resume CPR immediately after",
          "Chain of Survival: recognition -> CPR -> defib -> advanced care -> post-arrest"
        ],
        textbookRefs: [
          { book: "AHA Guidelines for CPR and ECC", chapter: "BLS and ACLS", edition: "2020" },
          { book: "Textbook of Anaesthesia (Aitkenhead)", chapter: "Chapter 41: CPR", edition: "6th" }
        ]
      },
      {
        layer: 2,
        slug: "bls-acls-layer-2-mechanism",
        title: "BLS & ACLS - Mechanism",
        estimatedMinutes: 30,
        summary: "ACLS algorithms for shockable and non-shockable rhythms, pharmacology of resuscitation drugs, advanced airway management, and post-resuscitation care.",
        contentMd: `# BLS & ACLS - Mechanism

## ACLS Cardiac Arrest Algorithm

### Shockable Rhythms (VF / Pulseless VT)
1. CPR while attaching defibrillator
2. **First shock**: Biphasic 120-200J; monophasic 360J
3. Resume CPR x 2 min
4. Check rhythm -> shock if still shockable
5. **Epinephrine 1 mg IV** after 2nd shock (every 3-5 min)
6. **Amiodarone 300 mg IV** after 3rd shock (then 150 mg)
7. Continue 2-min CPR cycles

### Non-Shockable Rhythms (Asystole / PEA)
1. CPR immediately
2. **Epinephrine 1 mg IV** as soon as possible (every 3-5 min)
3. Continue CPR cycles of 2 minutes
4. Identify and treat reversible causes (5H and 5T)

## Reversible Causes: 5H and 5T
| 5H | 5T |
|----|-----|
| Hypovolemia | Tension pneumothorax |
| Hypoxia | Tamponade (cardiac) |
| Hydrogen ion (acidosis) | Toxins/drugs |
| Hypo/Hyperkalemia | Thrombosis (coronary) |
| Hypothermia | Thrombosis (pulmonary) |

## Resuscitation Pharmacology
| Drug | Dose | Mechanism | Indication |
|------|------|-----------|------------|
| Epinephrine | 1 mg IV q3-5min | Alpha-1 vasoconstriction | All cardiac arrest |
| Amiodarone | 300 mg then 150 mg | Class III antiarrhythmic | Refractory VF/pVT |
| Lidocaine | 1-1.5 mg/kg | Class Ib Na+ block | Alternative to amiodarone |
| Atropine | 1 mg IV q3-5min | Muscarinic antagonist | Symptomatic bradycardia |
| Adenosine | 6 mg rapid IV push | AV node block | SVT (narrow complex) |

## Advanced Airway
- **ETT**: Gold standard; waveform capnography (ETCO2) confirms placement
- **Supraglottic (LMA, i-gel)**: Alternative when ETT not feasible
- **Post-placement**: Continuous compressions, ventilate every 6 seconds

## Post-Resuscitation Care
1. **Targeted Temperature Management**: 32-36 degrees C for 24h
2. **Hemodynamic optimization**: MAP >65 mmHg
3. **PCI**: If STEMI suspected
4. **Neuroprognostication**: At 72 hours post-arrest`,
        mnemonics: [
          { text: "5H5T for reversible causes of arrest", explanation: "Hypovolemia, Hypoxia, H+, Hypo/Hyperkalemia, Hypothermia; Tension pneumo, Tamponade, Toxins, Thrombosis x2" },
          { text: "Epi Every 3-5 min in ALL arrest rhythms", explanation: "Epinephrine 1mg IV is the universal cardiac arrest drug" }
        ],
        keyPoints: [
          "Shockable (VF/pVT): defibrillate; Non-shockable (asystole/PEA): CPR + epi",
          "Epinephrine 1mg IV every 3-5 min in all cardiac arrest",
          "Amiodarone 300mg after 3rd shock for refractory VF/pVT",
          "5H and 5T: must identify and treat reversible causes",
          "ETCO2 waveform capnography is gold standard for ETT confirmation",
          "Post-ROSC: targeted temperature management 32-36 degrees"
        ],
        textbookRefs: [
          { book: "AHA Guidelines for CPR and ECC", chapter: "ACLS Algorithms", edition: "2020" },
          { book: "Miller's Anesthesia", chapter: "Chapter 80: CPR", edition: "9th" }
        ]
      },
      {
        layer: 3,
        slug: "bls-acls-layer-3-clinical",
        title: "BLS & ACLS - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical scenarios for cardiac arrest management including special situations: drowning, pregnancy, pediatric arrest, choking, and team dynamics.",
        contentMd: `# BLS & ACLS - Clinical Scenarios

## Scenario 1: Witnessed VF in Hospital
- Patient on monitor develops VF -> Call code + begin CPR + defibrillator
- Shock 200J biphasic -> CPR 2 min -> recheck rhythm
- If VF persists: shock -> epi after 2nd -> amiodarone after 3rd

## Scenario 2: Unwitnessed Asystole
- Confirm in 2 leads (rule out fine VF)
- Epinephrine immediately, every 3-5 min
- Search 5H/5T; consider termination if prolonged with no reversible cause

## Special Situations

### Drowning
- Airway first (hypoxia is primary cause)
- 5 rescue breaths before compressions
- Hypothermia: warm to 30 degrees before declaring death

### Pregnancy (>20 weeks)
- Left lateral tilt or manual uterine displacement
- Standard ACLS drugs
- Perimortem cesarean within 5 minutes if no ROSC

### Pediatric BLS
| Parameter | Infant (<1 yr) | Child (1-puberty) |
|-----------|----------------|-------------------|
| Depth | 4 cm | 5 cm |
| Ratio (1 rescuer) | 30:2 | 30:2 |
| Ratio (2 rescuers) | 15:2 | 15:2 |

### Choking
- **Conscious adult**: Heimlich maneuver (abdominal thrusts)
- **Infant**: 5 back blows + 5 chest thrusts (NOT abdominal)
- **Unconscious**: CPR with visual airway check

## Team Dynamics
- Team leader directs and assigns roles
- Compressor rotates every 2 minutes
- Recorder tracks time and interventions

> **Clinical Pearl**: In India, bystander CPR rates remain below 2%. Compression-only CPR training for laypersons could save thousands of lives.`,
        mnemonics: [
          { text: "Drowning = A first (Airway); Others = C first (Compressions)", explanation: "Drowning is respiratory arrest, so airway/breathing takes priority" },
          { text: "Pregnant arrest: LEFT tilt + ACLS + cesarean at 5 min", explanation: "Three key interventions for maternal cardiac arrest" }
        ],
        keyPoints: [
          "Confirm asystole in 2 leads before accepting the rhythm",
          "Drowning: 5 rescue breaths first due to hypoxic mechanism",
          "Pregnancy: left tilt + perimortem C-section within 5 minutes",
          "Pediatric 2-rescuer: 15:2 ratio; infant choking: back blows not Heimlich",
          "Compressor rotates every 2 minutes to prevent fatigue",
          "India: bystander CPR rates critically low"
        ],
        textbookRefs: [
          { book: "AHA Guidelines for CPR and ECC", chapter: "Special Situations", edition: "2020" },
          { book: "Textbook of Anaesthesia (Aitkenhead)", chapter: "Chapter 41", edition: "6th" }
        ]
      },
      {
        layer: 4,
        slug: "bls-acls-layer-4-exam-prep",
        title: "BLS & ACLS - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield facts on CPR parameters, ACLS drug doses, arrest rhythms, and special scenarios for NEXT/NEET PG.",
        contentMd: `# BLS & ACLS - Exam High Yield

## CPR Quick Reference
| Parameter | Adult | Child | Infant |
|-----------|-------|-------|--------|
| Rate | 100-120/min | 100-120/min | 100-120/min |
| Depth | 5-6 cm | 5 cm | 4 cm |
| Ratio (1 rescuer) | 30:2 | 30:2 | 30:2 |
| Ratio (2 rescuers) | 30:2 | 15:2 | 15:2 |

## Drug Doses
| Drug | Dose | Timing |
|------|------|--------|
| Epinephrine | 1 mg IV | Every 3-5 min (all arrest) |
| Amiodarone 1st | 300 mg IV | After 3rd shock |
| Amiodarone 2nd | 150 mg IV | Once more |
| Lidocaine | 1-1.5 mg/kg | Alternative to amiodarone |

## One-Liners
- Most common initial rhythm in witnessed arrest: VF
- Most common in unwitnessed arrest: Asystole
- Drug of choice in ALL arrest: Epinephrine
- Post-ROSC temperature: 32-36 degrees C for 24h
- ETCO2 <10 after 20 min: Poor prognosis
- IO access: proximal tibia (preferred alternative to IV)

## Previous Year Themes
- CAB sequence order
- Drug doses in cardiac arrest
- 5H and 5T reversible causes
- Pediatric vs adult differences
- Post-resuscitation temperature management`,
        mnemonics: [
          { text: "100-120, 5-6, 30:2 for adult CPR", explanation: "Rate, depth (cm), compression-ventilation ratio" },
          { text: "Epi 1, Amio 300/150, Lido 1-1.5", explanation: "Key drug doses in arrest (mg for epi/amio, mg/kg for lido)" }
        ],
        keyPoints: [
          "Adult: 100-120/min, 5-6cm, 30:2",
          "Epinephrine 1mg IV q3-5min in ALL arrest rhythms",
          "Amiodarone 300mg after 3rd shock for refractory VF/pVT",
          "VF = most common witnessed; asystole = unwitnessed",
          "Post-ROSC: temperature 32-36 degrees C for 24h",
          "ETCO2 <10 after 20 min CPR: poor prognosis indicator"
        ],
        textbookRefs: [
          { book: "AHA Guidelines for CPR and ECC", chapter: "ACLS Summary", edition: "2020" }
        ]
      },
      {
        layer: 5,
        slug: "bls-acls-layer-5-active-recall",
        title: "BLS & ACLS - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for CPR technique, ACLS algorithms, drug doses, and special scenarios.",
        contentMd: `# BLS & ACLS - Active Recall

**Q1:** What is the correct CPR sequence?
> CAB: Compressions -> Airway -> Breathing

**Q2:** Adult compression parameters?
> Rate: 100-120/min, Depth: 5-6 cm, Full recoil, <10s interruptions

**Q3:** Compression-to-ventilation ratio?
> 30:2 single rescuer. 15:2 for 2-rescuer pediatric. Continuous with advanced airway

**Q4:** Name shockable and non-shockable rhythms.
> Shockable: VF, pulseless VT. Non-shockable: Asystole, PEA

**Q5:** Epinephrine dose and frequency in arrest?
> 1 mg IV every 3-5 min in ALL arrest rhythms

**Q6:** When is amiodarone given?
> After 3rd shock in refractory VF/pVT. 300 mg then 150 mg

**Q7:** List the 5H and 5T.
> 5H: Hypovolemia, Hypoxia, H+, Hypo/Hyperkalemia, Hypothermia. 5T: Tension pneumo, Tamponade, Toxins, Thrombosis coronary, Thrombosis pulmonary

**Q8:** Gold standard for ETT confirmation?
> Waveform capnography (ETCO2)

**Q9:** Drowning arrest: what is different?
> 5 rescue breaths first (Airway before Compressions) due to hypoxic cause

**Q10:** Modifications for pregnant arrest?
> Left lateral tilt, standard ACLS drugs, perimortem cesarean within 5 minutes

**Q11:** Post-ROSC temperature target?
> 32-36 degrees C for 24 hours in comatose patients

**Q12:** Infant choking management?
> 5 back blows + 5 chest thrusts. No abdominal thrusts in infants`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards covering BLS, ACLS, drugs, and special situations",
          "Tests rhythm classification, drug doses, and reversible causes",
          "Includes drowning, pregnancy, and pediatric modifications",
          "Reinforces post-resuscitation care"
        ],
        textbookRefs: [
          { book: "AHA Guidelines for CPR and ECC", chapter: "Review", edition: "2020" }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // AS-MOD-04-TOP-03: ICU Management of Shock
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "AS-MOD-04-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "icu-shock-layer-1-foundation",
        title: "ICU Management of Shock - Foundation",
        estimatedMinutes: 20,
        summary: "Shock is inadequate tissue perfusion causing cellular hypoxia. Four types: hypovolemic, cardiogenic, distributive (septic, anaphylactic, neurogenic), and obstructive.",
        contentMd: `# ICU Management of Shock - Foundation

## Definition
Shock is inadequate tissue perfusion and oxygen delivery leading to cellular hypoxia, anaerobic metabolism, and organ dysfunction.

## Classification
| Type | Mechanism | Examples |
|------|-----------|---------|
| **Hypovolemic** | Volume loss | Hemorrhage, burns, dehydration |
| **Cardiogenic** | Pump failure | MI, cardiomyopathy, valvular |
| **Distributive** | Vasodilation | Sepsis, anaphylaxis, neurogenic |
| **Obstructive** | Mechanical obstruction | PE, tamponade, tension pneumo |

## Hemodynamic Profiles
| Type | CO | SVR | CVP | PCWP |
|------|----|----|-----|------|
| Hypovolemic | Low | High | Low | Low |
| Cardiogenic | Low | High | High | High |
| Septic (early) | High | Low | Low | Low |
| Obstructive | Low | High | High | Variable |

## Clinical Features
- **Tachycardia**: Earliest sign (compensatory)
- **Hypotension**: SBP <90 or MAP <65 mmHg
- **Oliguria**: <0.5 mL/kg/hr
- **Altered sensorium**: Confusion to obtundation
- **Skin**: Cool/clammy (hypovolemic/cardiogenic); warm (early sepsis)

## Stages
1. **Compensated**: BP maintained by tachycardia and vasoconstriction
2. **Decompensated**: BP falls, organ dysfunction begins
3. **Irreversible**: Multi-organ failure, refractory to treatment

> **Clinical Pearl**: Tachycardia is often the earliest sign. Normal BP does not exclude shock - compensatory mechanisms can maintain it until 30% volume loss.`,
        mnemonics: [
          { text: "CHOD: Cardiogenic, Hypovolemic, Obstructive, Distributive", explanation: "Four categories of circulatory shock" },
          { text: "Early sepsis = Warm shock; Late sepsis = Cold shock", explanation: "Vasodilation (warm) transitions to pump failure (cold)" }
        ],
        keyPoints: [
          "Shock = inadequate tissue perfusion causing cellular hypoxia",
          "Four types: hypovolemic, cardiogenic, distributive, obstructive",
          "Tachycardia is earliest sign; hypotension is late",
          "Hypovolemic: low CVP/PCWP; Cardiogenic: high CVP/PCWP",
          "Early sepsis: high CO, low SVR (warm); late: low CO, high SVR"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Chapter 303: Shock", edition: "21st" },
          { book: "Miller's Anesthesia", chapter: "Chapter 78: Critical Care", edition: "9th" }
        ]
      },
      {
        layer: 2,
        slug: "icu-shock-layer-2-mechanism",
        title: "ICU Management of Shock - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of shock types, oxygen delivery and consumption, hemorrhagic shock classification, sepsis cascade, and monitoring concepts.",
        contentMd: `# ICU Shock - Mechanism

## Oxygen Delivery and Consumption
- **DO2** = CO x CaO2 x 10 (normal ~1000 mL/min)
- **VO2** = CO x (CaO2 - CvO2) x 10 (normal ~250 mL/min)
- **Critical DO2**: Below this, VO2 becomes supply-dependent (anaerobic metabolism)

## Hemorrhagic Shock Classification
| Class | Loss | HR | BP | Mental Status |
|-------|------|----|----|--------------|
| I | <15% | <100 | Normal | Anxious |
| II | 15-30% | 100-120 | Normal | Anxious |
| III | 30-40% | 120-140 | Decreased | Confused |
| IV | >40% | >140 | Very low | Lethargic |

## Septic Shock Pathophysiology
1. Infection -> PAMPs (LPS) activate TLR4 on macrophages
2. Cytokine storm: TNF-alpha, IL-1, IL-6
3. NO release -> vasodilation, capillary leak
4. Myocardial depression (TNF-mediated)
5. Coagulation activation -> DIC
6. Mitochondrial dysfunction (cytopathic hypoxia)

## Cardiogenic Shock Cycle
- Pump failure -> low CO -> hypotension -> compensatory vasoconstriction -> increased afterload -> further CO reduction (vicious cycle)
- Most common cause: acute MI with >40% LV damage

## Anaphylactic Shock
- IgE-mediated mast cell degranulation
- Histamine + leukotrienes -> vasodilation + bronchospasm + capillary leak
- First-line: IM epinephrine 0.3-0.5 mg (1:1000)

## Monitoring Targets
| Parameter | Target |
|-----------|--------|
| MAP | >65 mmHg |
| CVP | 8-12 mmHg (initial) |
| ScvO2 | >70% |
| Lactate | <2 mmol/L |
| UOP | >0.5 mL/kg/hr |`,
        mnemonics: [
          { text: "Class III = 30% loss = Confusion + BP drop", explanation: "Decompensation threshold at 30% blood volume loss" },
          { text: "Sepsis cascade: LPS -> TLR4 -> TNF -> NO -> vasodilation -> shock", explanation: "Stepwise pathophysiology of septic shock" }
        ],
        keyPoints: [
          "DO2 = CO x CaO2; critical DO2 triggers anaerobic metabolism",
          "Class III hemorrhage (30-40%): first BP drop and confusion",
          "Septic shock: cytokine storm causing vasodilation + capillary leak + myocardial depression",
          "Cardiogenic: vicious cycle of low CO and rising afterload",
          "Anaphylaxis: IM epinephrine is first-line",
          "Targets: MAP >65, lactate <2, UOP >0.5 mL/kg/hr"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Chapters 303-304", edition: "21st" },
          { book: "Miller's Anesthesia", chapter: "Chapter 78-79", edition: "9th" }
        ]
      },
      {
        layer: 3,
        slug: "icu-shock-layer-3-clinical",
        title: "ICU Management of Shock - Clinical Application",
        estimatedMinutes: 20,
        summary: "Practical management: fluid resuscitation, vasopressor and inotrope selection, Surviving Sepsis Campaign bundles, and organ-specific support.",
        contentMd: `# ICU Shock - Clinical Management

## Fluid Resuscitation
- **Sepsis**: 30 mL/kg crystalloid within first 3 hours
- **Hemorrhagic**: Balanced resuscitation; 1:1:1 (RBC:FFP:Platelets) for massive transfusion
- **Avoid HES**: Increases AKI and mortality in sepsis
- **Albumin**: Consider if large crystalloid volumes needed in sepsis

## Vasopressors
| Drug | Receptor | Indication |
|------|----------|------------|
| Norepinephrine | Alpha-1 >> Beta-1 | 1st line septic shock |
| Vasopressin | V1 | Add to norepinephrine |
| Epinephrine | Alpha + Beta | Refractory shock |
| Phenylephrine | Pure alpha-1 | Neurogenic shock |
| Dopamine | Dose-dependent | Bradycardia-associated |

## Inotropes
| Drug | Mechanism | Use |
|------|-----------|-----|
| Dobutamine | Beta-1 agonist | Cardiogenic shock |
| Milrinone | PDE-3 inhibitor | Low CO + high SVR |
| Levosimendan | Ca sensitizer | Acute HF |

## Surviving Sepsis Hour-1 Bundle
1. Measure lactate (remeasure if >2)
2. Blood cultures before antibiotics
3. Broad-spectrum antibiotics within 1 hour
4. 30 mL/kg crystalloid bolus
5. Vasopressors if MAP <65 after fluids

## Organ Support
- **Lungs**: Mechanical ventilation (TV 6 mL/kg IBW)
- **Kidneys**: CRRT if AKI + fluid overload
- **GI**: Stress ulcer prophylaxis, early enteral nutrition
- **Blood**: Transfuse if Hb <7 (general) or <8 (ACS)
- **Endocrine**: Hydrocortisone 200 mg/day if refractory septic shock

## Cardiogenic Shock Specifics
- Avoid large volume fluids (worsens pulmonary edema)
- Dobutamine for inotropy
- IABP or Impella for mechanical support
- Urgent PCI/CABG if MI is cause

> **Clinical Pearl**: Norepinephrine is first-line in septic shock. Adding vasopressin (0.03 U/min) helps reduce norepinephrine dose.`,
        mnemonics: [
          { text: "NORE first: Norepinephrine = 1st vasopressor in sepsis", explanation: "Surviving Sepsis Campaign recommendation" },
          { text: "LABS: Lactate, Antibiotics, Blood cultures, Saline", explanation: "Hour-1 bundle components" }
        ],
        keyPoints: [
          "Sepsis: 30 mL/kg crystalloid in first 3 hours",
          "Norepinephrine first-line vasopressor in septic shock",
          "Hour-1 bundle: lactate, cultures, antibiotics, fluids, vasopressors",
          "Cardiogenic: dobutamine, avoid large fluids",
          "Lung-protective ventilation: TV 6 mL/kg IBW",
          "Hydrocortisone only for refractory septic shock"
        ],
        textbookRefs: [
          { book: "Surviving Sepsis Campaign Guidelines", chapter: "2021 Update", edition: "Latest" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Chapter 303", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "icu-shock-layer-4-exam-prep",
        title: "ICU Management of Shock - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield comparison tables for shock types, vasopressors, fluid choices, and monitoring targets.",
        contentMd: `# ICU Shock - Exam High Yield

## Shock Comparison
| Feature | Hypovolemic | Cardiogenic | Septic (early) | Obstructive |
|---------|------------|-------------|----------------|-------------|
| CO | Low | Low | High | Low |
| SVR | High | High | Low | High |
| Skin | Cold | Cold | Warm | Cold |
| Treatment | Fluids | Inotropes | Fluids+NE | Treat cause |

## Vasopressor Selection
- **Septic**: NE -> add vasopressin -> add epinephrine
- **Cardiogenic**: Dobutamine; NE if severe hypotension
- **Anaphylactic**: IM Epinephrine 0.3-0.5 mg (1:1000)
- **Neurogenic**: Phenylephrine or norepinephrine

## Critical Numbers
| Parameter | Target |
|-----------|--------|
| MAP | >65 mmHg |
| Lactate clearance | >20% in 2h |
| ScvO2 | >70% |
| UOP | >0.5 mL/kg/hr |
| Hb trigger | <7 g/dL (general); <8 (ACS) |
| Sepsis fluid | 30 mL/kg in 3h |

## One-Liners
- Warm shock = early sepsis; Cold shock = late sepsis/cardiogenic/hypovolemic
- Beck triad = tamponade (hypotension + JVD + muffled hearts)
- Massive transfusion: 1:1:1 ratio
- DIC in sepsis: consumption coagulopathy
- Hydrocortisone: only refractory septic shock`,
        mnemonics: [
          { text: "MAP 65, Lactate 2, UOP 0.5", explanation: "Key resuscitation targets in shock management" },
          { text: "Cold = low CO; Warm = high CO (early sepsis)", explanation: "Skin temperature differentiates shock types at bedside" }
        ],
        keyPoints: [
          "Hypovolemic: low CO/CVP, high SVR; Cardiogenic: low CO, high CVP/SVR",
          "NE first-line in sepsis; phenylephrine in neurogenic",
          "Anaphylaxis: IM epinephrine (not IV unless refractory)",
          "MAP >65, lactate <2, UOP >0.5 mL/kg/hr",
          "Class III hemorrhage: first BP drop at 30-40% loss",
          "Beck triad: tamponade"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Chapter 303", edition: "21st" }
        ]
      },
      {
        layer: 5,
        slug: "icu-shock-layer-5-active-recall",
        title: "ICU Management of Shock - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for shock classification, hemodynamics, vasopressors, and management targets.",
        contentMd: `# ICU Shock - Active Recall

**Q1:** Name the 4 types of shock.
> Hypovolemic, Cardiogenic, Distributive, Obstructive

**Q2:** Hemodynamic profile of early septic shock?
> High CO, Low SVR, Low CVP, Warm extremities

**Q3:** First-line vasopressor in septic shock?
> Norepinephrine (alpha-1 predominant)

**Q4:** How much fluid in first 3 hours of sepsis?
> 30 mL/kg crystalloid

**Q5:** Sepsis Hour-1 Bundle components?
> Lactate, blood cultures, broad-spectrum antibiotics, 30 mL/kg crystalloid, vasopressors if MAP <65

**Q6:** At what hemorrhage class does BP first drop?
> Class III (30-40% loss). Also: confusion and oliguria

**Q7:** Drug of choice for anaphylactic shock?
> IM Epinephrine 0.3-0.5 mg (1:1000)

**Q8:** Preferred inotrope in cardiogenic shock?
> Dobutamine (beta-1 agonist)

**Q9:** What is Beck triad?
> Hypotension + JVD + muffled heart sounds = Cardiac tamponade

**Q10:** MAP target in shock?
> >65 mmHg

**Q11:** When to use hydrocortisone in septic shock?
> Only refractory shock (escalating vasopressors). Dose: 200 mg/day

**Q12:** Transfusion trigger for Hb in ICU?
> <7 g/dL (general). <8 g/dL in ACS`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards covering shock types, hemodynamics, and management",
          "Tests vasopressor selection, sepsis bundles, and targets",
          "Includes hemorrhagic classification and anaphylaxis",
          "Reinforces monitoring targets and transfusion thresholds"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Chapters 303-304", edition: "21st" }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // RD-MOD-04-TOP-02: CT Abdomen & Pelvis
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "RD-MOD-04-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "ct-abdomen-pelvis-layer-1-foundation",
        title: "CT Abdomen & Pelvis - Foundation",
        estimatedMinutes: 20,
        summary: "CT uses X-ray attenuation to create cross-sectional images. Hounsfield units measure tissue density. Multiphasic contrast enhancement helps characterize lesions.",
        contentMd: `# CT Abdomen & Pelvis - Foundation

## Basic Principles
- **CT**: Rotating X-ray tube + detectors create cross-sectional images
- **Hounsfield Units (HU)**: Quantify tissue attenuation

## HU Scale
| Tissue | HU |
|--------|-----|
| Air | -1000 |
| Fat | -50 to -100 |
| Water | 0 |
| Soft tissue | 40-60 |
| Acute blood | 50-70 |
| Bone | +1000 |

## CT Phases
| Phase | Timing | Best For |
|-------|--------|----------|
| Non-contrast | Pre-injection | Calculi, hemorrhage |
| Arterial | 25-30s | Hypervascular tumors (HCC, RCC) |
| Portal venous | 60-70s | Most abdominal pathology |
| Delayed | 3-5 min | Urinary tract, some liver lesions |

## Indications
- Acute abdomen (appendicitis, obstruction, diverticulitis)
- Trauma (blunt/penetrating)
- Malignancy staging
- Renal/ureteric colic
- Pancreatitis severity assessment
- Aortic aneurysm/dissection

## Contraindications
- **Contrast allergy**: Pre-medicate or use non-ionic
- **Renal impairment**: eGFR <30 (hydrate before/after)
- **Pregnancy**: Avoid unless life-threatening
- **Metformin**: Withhold 48h after contrast

> **Clinical Pearl**: Non-contrast CT is the gold standard for renal/ureteric calculi.`,
        mnemonics: [
          { text: "Air -1000, Water 0, Bone +1000", explanation: "Three anchor points on Hounsfield scale" },
          { text: "Portal phase = 60-70s = most pathology", explanation: "Portal venous phase is the workhorse of abdominal CT" }
        ],
        keyPoints: [
          "HU scale: air -1000, fat -50 to -100, water 0, bone +1000",
          "Portal venous phase (60-70s) is most useful for general pathology",
          "Arterial phase (25-30s) for hypervascular tumors (HCC, RCC)",
          "Non-contrast CT is gold standard for renal calculi",
          "Contrast contraindications: allergy, renal impairment, pregnancy"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Chapter 28: Abdominal CT", edition: "7th" },
          { book: "Textbook of Radiology (Chowdhury)", chapter: "CT Abdomen", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "ct-abdomen-pelvis-layer-2-mechanism",
        title: "CT Abdomen & Pelvis - Mechanism",
        estimatedMinutes: 30,
        summary: "Systematic CT reading approach, normal organ attenuation, enhancement patterns of liver lesions, and pathological features across organs.",
        contentMd: `# CT Abdomen - Systematic Reading

## Reading Checklist
1. Bones: fractures, lytic/blastic lesions
2. Soft tissues: abdominal wall, muscles
3. Retroperitoneum: aorta, IVC, kidneys, adrenals, nodes
4. Solid organs: liver, spleen, pancreas
5. Hollow viscera: stomach, bowel, colon
6. Pelvis: bladder, uterus/prostate
7. Free fluid/air: Morrison pouch, paracolic gutters

## Normal Attenuation
| Organ | HU (unenhanced) |
|-------|-----------------|
| Liver | 50-65 |
| Spleen | 40-60 |
| Pancreas | 40-50 |
| Kidney cortex | 30-40 |
| Adrenal | <10 = adenoma |

## Liver Lesion Patterns
| Lesion | Pattern | Key Feature |
|--------|---------|-------------|
| Hemangioma | Peripheral nodular fill-in | Bright as aorta delayed |
| HCC | Arterial flash + portal washout | Cirrhotic liver |
| Metastasis | Ring or hypodense | Multiple, variable |
| Abscess | Rim enhancement | Double target sign |
| Cyst | No enhancement, HU 0-10 | Sharp margins |

## Renal Lesions
- **Simple cyst**: Water density, no enhancement, thin wall
- **RCC**: Heterogeneous, enhances >15 HU
- **AML**: Contains fat (negative HU)

## Bowel Pathology
- **Appendicitis**: >6mm diameter, fat stranding, appendicolith
- **Obstruction**: Dilated proximal + decompressed distal, transition point
- **Perforation**: Free air (pneumoperitoneum)

## Trauma CT
- **Spleen**: Most common injured organ (blunt)
- **Active bleeding**: Contrast blush on arterial phase
- **Hemoperitoneum**: 60-70 HU fluid`,
        mnemonics: [
          { text: "HCC = Flash and Wash", explanation: "Arterial flash enhancement + portal venous washout in cirrhotic liver" },
          { text: "BOSS: Bones, Organs, Soft tissue, Spaces", explanation: "Systematic CT reading approach" }
        ],
        keyPoints: [
          "Systematic: bones, organs, soft tissue, spaces, free fluid/air",
          "HCC: arterial flash + portal washout in cirrhosis",
          "Hemangioma: peripheral nodular with centripetal fill-in",
          "Appendicitis: >6mm + fat stranding + appendicolith",
          "AML has fat (negative HU) vs RCC (no fat)",
          "Spleen most common in blunt trauma"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Chapters 28-32", edition: "7th" },
          { book: "Textbook of Radiology (Chowdhury)", chapter: "CT Pathology", edition: "3rd" }
        ]
      },
      {
        layer: 3,
        slug: "ct-abdomen-pelvis-layer-3-clinical",
        title: "CT Abdomen & Pelvis - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical scenarios: acute appendicitis, bowel obstruction, pancreatitis severity, trauma, malignancy staging, and India-specific conditions.",
        contentMd: `# CT Abdomen - Clinical Scenarios

## Acute Appendicitis
- **Indication**: RIF pain with equivocal USG
- **Findings**: Appendix >6mm, fat stranding, wall enhancement
- **Complications**: Abscess, perforation (free air/fluid)
- **Sensitivity**: >95%

## Intestinal Obstruction
- **Small bowel**: >3cm dilated, valvulae visible
- **Large bowel**: >6cm (cecum >9cm = perforation risk)
- **Transition point**: Identifies cause
- **Closed loop**: Suggests strangulation (surgical emergency)

## Pancreatitis
- **CT timing**: 48-72h after onset for necrosis
- **CTSI**: Inflammation grade + necrosis extent
- **Complications**: Pseudocyst, abscess, vascular

## Renal Colic
- **Non-contrast CT KUB**: Investigation of choice
- **Tissue rim sign**: Soft tissue halo around ureteric stone
- **Secondary**: Hydroureter, hydronephrosis, perinephric fluid

## Trauma
- Triple-phase CT protocol
- Spleen most commonly injured (blunt)
- AAST grading I-V for organ injury
- Active bleeding: contrast extravasation

## India-Specific Conditions
- **Amoebic liver abscess**: Large solitary right lobe, thick wall
- **Hydatid cyst**: Daughter cysts, water lily sign
- **Abdominal TB**: Rim-enhancing nodes, omental thickening, ascites (mimics carcinomatosis)
- **Portal hypertension**: Splenomegaly, varices, ascites

> **Clinical Pearl**: Abdominal TB can mimic peritoneal carcinomatosis. Always consider TB in Indian patients with omental caking and rim-enhancing mesenteric nodes.`,
        mnemonics: [
          { text: "FAT: Fat stranding + Appendix >6mm + Thickened wall", explanation: "Three CT findings of acute appendicitis" },
          { text: "Spleen = Blunt; Liver = Penetrating", explanation: "Most common injured organ by trauma type" }
        ],
        keyPoints: [
          "Appendicitis: >6mm, fat stranding, wall enhancement (>95% sensitivity)",
          "Non-contrast CT gold standard for ureteric calculi",
          "Pancreatitis CT at 48-72h for necrosis assessment",
          "Spleen in blunt, liver in penetrating trauma",
          "TB mimics carcinomatosis in India",
          "Hydatid: daughter cysts, water lily sign"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Emergency Radiology", edition: "7th" }
        ]
      },
      {
        layer: 4,
        slug: "ct-abdomen-pelvis-layer-4-exam-prep",
        title: "CT Abdomen & Pelvis - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield CT signs, Hounsfield values, enhancement patterns, and classic imaging findings for NEXT/NEET PG.",
        contentMd: `# CT Abdomen - Exam High Yield

## Classic CT Signs
| Sign | Condition |
|------|-----------|
| Double duct | Pancreatic head cancer |
| Target sign (bowel) | Intussusception |
| Water lily sign | Hydatid cyst |
| Whirl sign | Volvulus |
| Bird beak sign | Sigmoid volvulus |
| Crescent sign | AAA impending rupture |
| CT halo sign | Aspergilloma |

## Enhancement Patterns
| Lesion | Pattern |
|--------|---------|
| HCC | Arterial flash + portal washout |
| Hemangioma | Peripheral nodular fill-in |
| Cholangiocarcinoma | Delayed enhancement |
| RCC | Heterogeneous arterial |
| Adrenal adenoma | >50% absolute washout |

## Critical HU Values
| Finding | HU |
|---------|-----|
| Simple cyst | 0-10 |
| Fat in AML | <-10 |
| Adrenal adenoma | <10 (unenhanced) |
| Acute blood | 50-70 |
| Fatty liver | Liver HU < Spleen HU |

## One-Liners
- Best phase for most pathology: portal venous (60-70s)
- Best for HCC: arterial (25-30s)
- Best for ureteric calculus: non-contrast
- Appendicitis: >6mm diameter
- Cecum >9cm: perforation risk
- Metformin: withhold 48h post-contrast`,
        mnemonics: [
          { text: "HCC = Flash and Wash", explanation: "Arterial enhancement + portal washout" },
          { text: "AML = FAT (negative HU)", explanation: "Only renal tumor with negative HU values" }
        ],
        keyPoints: [
          "HCC: arterial flash + washout (diagnostic in cirrhosis)",
          "Adrenal adenoma: <10 HU, >50% washout",
          "Double duct sign: pancreatic head cancer",
          "Portal venous most useful for general pathology",
          "Fatty liver: liver HU < spleen HU",
          "Whirl sign: volvulus; target sign: intussusception"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Review", edition: "7th" }
        ]
      },
      {
        layer: 5,
        slug: "ct-abdomen-pelvis-layer-5-active-recall",
        title: "CT Abdomen & Pelvis - Active Recall",
        estimatedMinutes: 10,
        summary: "Self-test Q&A for CT principles, classic signs, enhancement patterns, and clinical indications.",
        contentMd: `# CT Abdomen - Active Recall

**Q1:** HU values for air, water, bone?
> Air = -1000, Water = 0, Bone = +1000

**Q2:** Best CT phase for liver metastases?
> Portal venous (60-70 seconds)

**Q3:** Classic HCC enhancement pattern?
> Arterial flash + portal washout in cirrhotic liver

**Q4:** Investigation of choice for ureteric calculus?
> Non-contrast CT KUB

**Q5:** CT findings of appendicitis?
> Diameter >6mm, fat stranding, wall enhancement, appendicolith

**Q6:** Double duct sign suggests?
> Pancreatic head carcinoma (dilated CBD + pancreatic duct)

**Q7:** How to differentiate AML from RCC?
> AML has fat (negative HU); RCC has no fat and enhances heterogeneously

**Q8:** When to CT in acute pancreatitis?
> 48-72 hours after symptom onset (for necrosis assessment)

**Q9:** Whirl sign indicates?
> Volvulus (twisted mesentery)

**Q10:** Most common organ injured in blunt abdominal trauma?
> Spleen

**Q11:** What HU suggests adrenal adenoma?
> <10 HU unenhanced; >50% absolute washout at 15 min

**Q12:** Metformin precaution with contrast CT?
> Withhold 48 hours after IV contrast (lactic acidosis risk with nephropathy)`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards covering CT physics, signs, and clinical findings",
          "Tests HU values, enhancement patterns, and contrast phases",
          "Includes trauma, appendicitis, and malignancy staging",
          "Covers India-specific conditions"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Abdominal Imaging", edition: "7th" }
        ]
      }
    ]
  }
];
