import type { TopicLessons } from "./content-loader";

export const medicinePart1Lessons: TopicLessons[] = [
  {
    topicCode: "IM-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "ihd-layer-1-foundation",
        title: "Ischemic Heart Disease & MI - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of coronary artery disease pathophysiology, atherosclerosis development, risk factors, and basic anatomy of coronary circulation.",
        contentMd: `# Ischemic Heart Disease - Foundation

## Coronary Anatomy
- **Left Main Coronary Artery (LMCA)** → splits into LAD + LCx
- **Left Anterior Descending (LAD)** → supplies anterior wall of LV, anterior septum
- **Left Circumflex (LCx)** → supplies lateral wall of LV, OM branches
- **Right Coronary Artery (RCA)** → supplies RV, inferior wall, SA node (60%), AV node (80%)
- **Dominance**: RCA dominant (80%), co-dominant (10%), LCx dominant (10%)

## Pathogenesis of Atherosclerosis
1. **Endothelial Injury** → from hemodynamic stress, smoking, hypertension, hyperglycemia
2. **LDL Oxidation** → modified LDL enters intima
3. **Foam Cell Formation** → macrophages engulf oxidized LDL
4. **Fatty Streak Formation** → accumulation of foam cells
5. **Smooth Muscle Migration** → SMCs migrate from media to intima
6. **Fibrous Cap Formation** → collagen, elastin deposition
7. **Plaque Rupture** → exposure of thrombogenic material
8. **Thrombosis** → platelet aggregation → acute MI

## Risk Factors - Indian Context
**Modifiable:** Smoking, dyslipidemia, hypertension, diabetes, obesity, sedentary lifestyle, stress
**Non-modifiable:** Age, male sex, family history, Indian ethnicity

## Forms of Ischemic Heart Disease
1. Stable angina pectoris
2. Unstable angina
3. Acute myocardial infarction (STEMI, NSTEMI)
4. Silent ischemia
5. Sudden cardiac death
6. Ischemic cardiomyopathy`,
        mnemonics: [
          { text: "RISK FACTORS: SAD MACK", explanation: "Smoking, Age/male, Diabetes | Milk (dyslipidemia), Alcohol, Clots (thrombosis), stress" },
          { text: "LMCA = LAD + LCx", explanation: "Left main splits into LAD (anterior wall) and LCx (lateral wall)" },
          { text: "CAD Dominance: RCA-80, LCx-10, Co-10", explanation: "RCA dominant in 80%, Co-dominant 10%, LCx dominant 10%" }
        ],
        keyPoints: [
          "IHD is progressive narrowing of coronary arteries due to atherosclerosis",
          "Atherosclerosis: endothelial injury → LDL oxidation → foam cells → plaque → rupture → thrombosis",
          "Indian population at higher risk with earlier age of onset (5-10 years earlier)",
          "RCA is dominant in 80%, supplies RV and inferior wall",
          "Risk factor modification can reduce MI risk by 75%"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "243: Acute Coronary Syndromes", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "3: Cardiovascular System", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "16: Cardiovascular Disease", edition: "24th" }
        ]
      },
      {
        layer: 2,
        slug: "ihd-layer-2-mechanism",
        title: "Ischemic Heart Disease & MI - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms of angina development, ischemic cascade, myocardial infarction pathophysiology, and supply-demand mismatch.",
        contentMd: `# Ischemic Heart Disease - Mechanism

## Pathophysiology of Angina

### Supply-Demand Mismatch
**Supply-Side (Decreased):**
- Fixed stenosis (>70% diameter) reduces coronary flow capacity
- Dynamic stenosis from vasospasm (Prinzmetal's)
- Plaque rupture with transient thrombosis

**Demand-Side (Increased):**
- Increased heart rate (tachycardia)
- Increased contractility (sympathetic stimulation)
- Increased blood pressure
- Exercise, emotion, cold exposure

## Ischemic Cascade (Seconds to Minutes)
1. ↓ Coronary flow
2. ↓ Oxygen delivery
3. Shift to anaerobic metabolism
4. ↓ ATP production (5-fold reduction)
5. ↓ Ion pump function → ↑ intracellular Na⁺, Ca²⁺
6. Cell swelling (cytotoxic edema)
7. **Diastolic dysfunction (earliest sign)**
8. Systolic dysfunction (regional wall motion abnormality)
9. Mitochondrial swelling
10. Myocyte death

## ST-Elevation Myocardial Infarction (STEMI)
- **Transmural infarction** (full-thickness) → elevation of ST segment
- Complete occlusion of epicardial coronary artery
- Subendocardial myocyte necrosis first, extends to epicardium over 3-4 hours

**ECG Changes Over Time:**
- Hyperacute (0-2 hrs): peaked T waves
- Acute (2-12 hrs): ST elevation (convex up)
- Intermediate (1-3 days): T waves invert
- Chronic (weeks): Q waves, T inversion persists

## Non-ST-Elevation Myocardial Infarction (NSTEMI)
- **Subendocardial or partial-thickness infarction**
- Reduced flow (non-occlusive stenosis) or transient occlusion
- ST depression or T wave inversion
- Elevated troponin

## Myocardial Necrosis Timeline
- **0-4 hours**: No histologic change
- **4-12 hours**: Coagulation necrosis, early polymorphonuclear infiltrate
- **1-3 days**: Extensive PMN infiltration, macrophage infiltration
- **3-7 days**: Vascular proliferation at border zone
- **1-2 weeks**: Granulation tissue formation
- **2-8 weeks**: Fibrosis and scar formation
- **After 2 months**: Dense collagenous scar replaces infarcted tissue

## Mechanical Complications (Within 7 Days)
1. **Ventricular Septal Rupture** (1-2%) → acute shunt
2. **Papillary Muscle Rupture** (1%) → acute severe MR
3. **Free Wall Rupture** (3-6%) → cardiac tamponade, death
4. **Post-MI Pericarditis** → inflammation, friction rub`,
        mnemonics: [
          { text: "ISCHEMIC CASCADE: SOD", explanation: "Supply-demand mismatch → Oxygen deprivation → Dysfunction" },
          { text: "STEMI: Transmural, NSTEMI: Subendocardial", explanation: "ST elevation = transmural, ST depression/normal = subendocardial" },
          { text: "Necrosis Timeline: 4-12-3-1-2-8", explanation: "4 hrs: no change | 12 hrs: PMN | 3 days: macrophage | 1-2 wks: granulation | 2-8 wks: fibrosis" }
        ],
        keyPoints: [
          "Ischemic cascade: ↓ATP → ↓ion pump → cell swelling → diastolic dysfunction → systolic dysfunction → death",
          "Diastolic dysfunction is the earliest sign of myocardial ischemia",
          "STEMI is transmural; NSTEMI is subendocardial",
          "Necrosis extends from subendocardium outward over 3-4 hours in complete occlusion",
          "Reperfusion injury occurs when blood flow is restored"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "244: Acute Myocardial Infarction", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "3: Cardiovascular System - MI", edition: "11th" },
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "12: Heart", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "ihd-layer-3-clinical",
        title: "Ischemic Heart Disease & MI - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical presentation, diagnosis, risk stratification, and acute management of unstable angina and acute MI in Indian healthcare context.",
        contentMd: `# Ischemic Heart Disease - Clinical Presentation & Management

## Presentation of Stable Angina
**Typical Anginal Characteristics (3 of 4):**
1. **Chest pain/discomfort** - substernal, pressure, heaviness
2. **Provocation** - exertion, emotional stress, eating
3. **Duration** - 5-15 minutes typically
4. **Relief** - rest, sublingual nitroglycerin within 5 minutes

## Presentation of Acute Coronary Syndrome (ACS)

### Unstable Angina (UA)
- New onset angina at rest
- Angina at lower threshold than baseline
- Rest angina lasting >20 minutes
- **Troponin negative** (by definition)

### STEMI
- Acute chest pain, typically >30 minutes
- Associated symptoms: dyspnea, nausea, vomiting, diaphoresis
- Women: atypical presentation more common

### NSTEMI
- Chest pain similar to STEMI but usually shorter
- **Elevated troponin**
- ECG: ST depression, T wave inversion, or normal

## Diagnostic Approach

### Electrocardiogram (12-lead, within 10 minutes)
**STEMI Criteria:**
- ST elevation ≥1 mm in contiguous limb leads OR ≥2 mm in contiguous chest leads
- New LBBB (considered equivalent to STEMI)

**MI Localization:**
- **Anterior MI (LAD)**: V1-V4, I, aVL
- **Inferior MI (RCA)**: II, III, aVF
- **Lateral MI (LCx)**: V5-V6, I, aVL
- **Posterior MI**: ST depression V1-V3 with tall R waves

### Biomarkers
**Troponin I or T:**
- Most sensitive and specific for myocardial necrosis
- Elevated 3-4 hours, peaks 24-48 hours
- Remains elevated 7-14 days
- Negative at <3 hours doesn't exclude MI

**CK-MB:**
- Elevated 3-12 hours post-MI
- Peaks 24-48 hours
- Returns to normal by 3-4 days

**Myoglobin:**
- Earliest marker (elevated 1-2 hours)
- Very sensitive but not specific

### Echocardiography
- Assess ventricular function and wall motion abnormalities
- Detect mechanical complications (VSD, MR, rupture)
- Helps risk stratification

## Management of Acute MI

### Pre-Hospital/Emergency Department
1. **Aspirin 300 mg** (chewed) if no contraindication
2. **Oxygen** - target SpO2 >90-94%
3. **Nitroglycerin** - sublingual if SBP >90 mmHg
4. **Analgesia** - IV opioids (morphine 2-4 mg)
5. **12-lead ECG** within 10 minutes

### Acute Reperfusion Strategy
**STEMI (Door-to-balloon <120 minutes):**
- **Primary PCI** (preferred) - door-to-balloon <90 min
- **Fibrinolytic therapy** (if PCI unavailable)
  - Streptokinase: 1.5 million units IV over 1 hour (cheaper)
  - TNKASE: 0.53 mg/kg IV (better outcomes)

### Dual Antiplatelet Therapy (DAPT)
- Aspirin 75 mg daily indefinitely
- P2Y12 inhibitor:
  - Clopidogrel 600 mg loading, 75 mg daily
  - Ticagrelor 180 mg loading, 60-90 mg BD
  - Prasugrel 60 mg loading, 5-10 mg daily

### Other Medications
- **Anticoagulation**: UFH or LMWH or fondaparinux
- **Beta-blockers**: Target HR 50-60 bpm, SBP >90
- **ACE inhibitors**: Start within 24 hours
- **High-intensity statins**: Atorvastatin 80 mg or rosuvastatin 40 mg

## Complications
- **Cardiogenic shock**: >40% LV infarction, mortality >50% untreated
- **Mechanical complications**: VSD, papillary rupture, free wall rupture (first 7 days)
- **Electrical**: VF, VT, bradycardia, AV block
- **Pericarditis**: Post-MI inflammation

## Secondary Prevention
1. **Lifestyle**: Smoking cessation, diet, exercise
2. **Risk factors**: BP <130/80, LDL <70, HbA1c 7-8%
3. **Medications**: DAPT 12 months, beta-blockers, ACE-I, statins`,
        mnemonics: [
          { text: "MONA: Morphine, Oxygen, Nitrates, Aspirin", explanation: "Initial management of acute MI" },
          { text: "STEMI vs NSTEMI: Troponin difference", explanation: "Both have elevation, STEMI has ST elevation on ECG" },
          { text: "MI Localization: LAD-Anterior, RCA-Inferior, LCx-Lateral", explanation: "Use ECG leads to localize" },
          { text: "Troponin: 3-4h elevation, 24-48h peak, 7-14d clearance", explanation: "Negative at <3 hours doesn't exclude MI" }
        ],
        keyPoints: [
          "Typical angina: substernal pressure, exertional, relieved by rest/nitrates",
          "STEMI = transmural MI with ST elevation requiring urgent reperfusion",
          "NSTEMI = subendocardial MI without ST elevation but elevated troponin",
          "Troponin is most specific marker; elevated 3-4 hours post-MI",
          "Acute STEMI: MONA + reperfusion (PCI <90 min or fibrinolysis <30 min)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "244: Acute Myocardial Infarction", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "3: Acute MI Management", edition: "11th" },
          { book: "2015 ESC Guidelines for Acute Coronary Syndromes", chapter: "Management algorithms", edition: "2015" }
        ]
      },
      {
        layer: 4,
        slug: "ihd-layer-4-exam",
        title: "Ischemic Heart Disease & MI - Exam Prep",
        estimatedMinutes: 25,
        summary: "Comprehensive exam-focused review covering differentials, NEET-PG pattern MCQs, key facts for quick recall, and high-yield topics.",
        contentMd: `# IHD & MI - Exam Preparation

## Differential Diagnosis of Chest Pain

### Cardiac:
1. **Acute MI** (STEMI/NSTEMI) - ST elevation/depression, troponin ↑
2. **Unstable Angina** - no troponin, ECG changes
3. **Stable Angina** - reproducible, exertional
4. **Aortic Dissection** - sudden severe, tearing, radiates to back
5. **Pericarditis** - pleuritic, positional, friction rub, diffuse ST elevation
6. **PE** - dyspnea, pleuritic, risk factors

### Gastrointestinal:
- GERD, PUD, esophageal spasm

### Musculoskeletal:
- Costochondritis, muscle strain

### Psychiatric:
- Panic disorder, hyperventilation

## High-Yield Facts

### IHD Risk Factors (Indian):
- **Modifiable**: Smoking (bidis), diabetes (highest RR in India), dyslipidemia (low HDL), HTN, obesity
- **Non-modifiable**: Age >45 (men), male sex, family history, Indian ethnicity

### STEMI Criteria:
- ST elevation ≥1 mm in contiguous leads (2 or more)
- New LBBB = STEMI equivalent

### Troponin:
- Most specific marker
- Elevation: 3-4 hours, peaks 24-48 hours, remains 7-14 days
- Negative at <3 hours doesn't exclude MI

### Acute Management:
1. **MONA**: Morphine, Oxygen, Nitrates, Aspirin
2. **Reperfusion**: PCI (door-to-balloon <90 min) OR fibrinolysis (door-to-needle <30 min)
3. **DAPT**: Aspirin + P2Y12 inhibitor
4. **Beta-blockers**: HR 50-60 bpm
5. **ACE-I, statins**: Early initiation

### MI Localization by ECG:
| Type | Leads | Artery |
|------|-------|--------|
| Anterior | V1-4, I, aVL | LAD |
| Inferior | II, III, aVF | RCA (80%) |
| Lateral | V5-6, I, aVL | LCx |
| Posterior | ST dep V1-3 | RCA/LCx |
| RV | ST elev V4R | RCA |

### Fibrinolytic Agents:
- **Streptokinase**: 1.5M units IV over 1 hour (cheap, available)
- **TNKASE**: Better outcomes, expensive
- **Contraindications**: Bleeding, recent surgery, intracranial disease

### Complications (First 7 Days):
1. **Mechanical**: VSD, papillary rupture, free wall rupture
2. **Electrical**: VF, VT, bradycardia, AV block
3. **Hemodynamic**: Cardiogenic shock, acute MR

### Critical Concepts:
- **Ischemic cascade**: ↓Flow → ↓ATP → ↓ion pump → cell swelling → dysfunction
- **Subendocardial zone**: Most vulnerable (high demand, low supply)
- **Wavefront phenomenon**: Necrosis extends subendocardium → epicardium over 3-4 hrs
- **Reperfusion injury**: ROS generation, Ca²⁺ overload, inflammation

## Common Exam Questions

**Q: 55-year-old smoker with acute chest pain, ST elevation V1-V4. Management?**
A: Primary PCI if <90 min available, else fibrinolysis (streptokinase <30 min)

**Q: Inferior MI with bradycardia and hypotension. What to do?**
A: Check V4R for RV infarction. Use atropine for bradycardia, maintain preload, avoid nitrates

**Q: Post-MI day 3, new holosystolic murmur. Most likely?**
A: Acute MR from papillary muscle rupture. Needs echo and surgical repair`,
        mnemonics: [
          { text: "MONA: Morphine, Oxygen, Nitrates, Aspirin", explanation: "Pre-hospital and ED management" },
          { text: "STEMI Equivalent: New LBBB", explanation: "Treat as STEMI even without ST elevation" },
          { text: "Door-to-balloon: 120 min | Door-to-needle: 30 min", explanation: "PCI <90 min, fibrinolysis <30 min" },
          { text: "Troponin: 3-4h, 24-48h peak, 7-14d clearance", explanation: "Can be negative if <3 hours from symptom onset" }
        ],
        keyPoints: [
          "STEMI: ST elevation in contiguous leads with elevated troponin = transmural MI requiring urgent reperfusion",
          "NSTEMI: Troponin elevation without ST elevation = subendocardial MI",
          "Anterior MI (LAD) highest risk of shock; inferior MI (RCA) risk of bradycardia, AV block, RV infarction",
          "Secondary prevention: DAPT 12 months, beta-blockers, ACE-I, high-dose statins, lifestyle modification",
          "Mechanical complications (VSD, papillary rupture, free wall rupture) occur in first 7 days"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "244: Acute Myocardial Infarction", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "3: IHD & MI", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "ihd-layer-5-active-recall",
        title: "Ischemic Heart Disease & MI - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard-based active recall for rapid learning and retention of critical IHD & MI concepts.",
        contentMd: `# IHD & MI - Active Recall Flashcards

**Q1: What are the coronary dominance patterns and their prevalence?**
A: RCA dominant 80%, co-dominant 10%, LCx dominant 10%.

**Q2: Name the three main coronary arteries and their territories.**
A: LMCA (LAD + LCx), RCA. LAD = anterior wall; LCx = lateral wall; RCA = RV and inferior wall.

**Q3: What defines "critical stenosis" in a coronary artery?**
A: >50% diameter narrowing or >75% area reduction. Coronary autoregulation is lost beyond this.

**Q4: Explain the ischemic cascade from the myocyte perspective.**
A: ↓Flow → ↓O2 → Anaerobic metabolism → ↓ATP (5-fold) → ↓Ion pump → ↑Intracellular Na⁺, Ca²⁺ → Cell swelling → Diastolic dysfunction → Systolic dysfunction → Death.

**Q5: Which layer of myocardium is affected first in complete coronary occlusion?**
A: Subendocardium (high metabolic demand, low supply). Extends to epicardium over 3-4 hours.

**Q6: What are the ECG changes in acute STEMI over time?**
A: Hyperacute (0-2 hrs): peaked T | Acute (2-12 hrs): ST elevation | Intermediate (1-3 days): T invert | Chronic (weeks): Q waves and T inversion.

**Q7: When does troponin elevation occur after MI? When does it normalize?**
A: Elevated 3-4 hours, peaks 24-48 hours, remains elevated 7-14 days. Negative at <3 hours doesn't exclude MI.

**Q8: Define STEMI and what anatomical change it represents.**
A: Transmural (full-thickness) myocardial infarction with ST elevation ≥1 mm in contiguous leads. Represents complete occlusion of epicardial coronary artery.

**Q9: Define NSTEMI and how it differs from STEMI.**
A: Subendocardial (partial-thickness) MI with elevated troponin but no ST elevation. Usually due to reduced flow or transient occlusion.

**Q10: What are the mechanical complications of MI and their timing?**
A: VSD (2%), papillary rupture (1%), free wall rupture (3%) - all occur within first 7 days.

**Q11: What defines cardiogenic shock post-MI?**
A: Occurs with >40% LV infarction. SBP <90 mmHg, urine <30 mL/hr, pulmonary edema. Mortality >50% if untreated.

**Q12: What are the treatment options for acute STEMI and their timelines?**
A: Primary PCI (door-to-balloon <90 min preferred) or fibrinolytic therapy (door-to-needle <30 min).

**Q13: What are the main fibrinolytic agents used in India?**
A: Streptokinase (1.5M units IV over 1 hour, cheap) and TNKASE (better outcomes, expensive).

**Q14: What is dual antiplatelet therapy (DAPT) in post-MI patients?**
A: Aspirin 75 mg daily indefinitely + P2Y12 inhibitor (clopidogrel/ticagrelor/prasugrel) for 12 months minimum.

**Q15: What are the complications of thrombolytic therapy?**
A: Reperfusion arrhythmias, reperfusion injury, allergic reactions, bleeding (minor 10%, major 1%), stroke (0.5-1%).

**Q16: Explain "no-reflow" phenomenon.**
A: Microvascular obstruction despite epicardial coronary patency after reperfusion due to microembolization and endothelial swelling.

**Q17: What is reperfusion injury and its mechanisms?**
A: Paradoxical worsening when blood flow restored due to ROS generation, Ca²⁺ overload, inflammatory cell infiltration.

**Q18: How does RV infarction affect management of inferior STEMI?**
A: Contraindication to nitrates. Maintain preload with IV fluids. Check V4R for ST elevation.

**Q19: What is the difference between early and late post-MI pericarditis?**
A: Early (day 1-4): from myocardial necrosis. Late: Dressler's syndrome (autoimmune, weeks later).

**Q20: Describe the timeline of myocardial healing post-MI.**
A: 0-4 hrs: coagulation necrosis | 4-12 hrs: PMN infiltrate | 1-3 days: macrophage | 3-7 days: vascular proliferation | 1-2 wks: granulation | 2-8 wks: fibrosis | After 2 months: scar.`,
        mnemonics: [
          { text: "STEMI ECG: HAS QT", explanation: "Hyperacute (T peaked), Acute (ST elev), Subacute (T inv), Quiescent (Q waves)" },
          { text: "MI Complications: RIM-VEN", explanation: "Rupture, Infarct extension, Mechanical | Ventricular arrhythmias, Electrical, Necrosis" },
          { text: "Necrosis Timeline: 4-12-3-1-2-8", explanation: "4hr coag necrosis | 12hr PMN | 3d macrophage | 1wk granulation | 2wk | 8wk scar" },
          { text: "Door-to-Reperfusion: 90 (PCI) vs 30 (fibrinolysis)", explanation: "Primary PCI <90 min, fibrinolysis <30 min" },
          { text: "DAPT Agents: Aspirin + Clop/Ticag/Pras", explanation: "Aspirin 75 mg daily indefinitely, P2Y12 inhibitor 12 months minimum" },
          { text: "Fibrinolytics: SK=cheap, TNKASE=better", explanation: "Streptokinase 1.5M units IV, TNKASE 0.53 mg/kg IV" },
          { text: "RV Infarction: NO nitrates, maintain preload", explanation: "Check V4R for ST elevation, use fluids not nitrates" },
          { text: "MI Shock: >40% LV, Mortality >50%", explanation: "Cardiogenic shock requires urgent revascularization and mechanical support" },
          { text: "ACS Troponin: 3-4h elevation, 24-48h peak, 7-14d duration", explanation: "Earliest at 3-4 hours, can be negative if <3 hours from symptom onset" },
          { text: "STEMI ECG Criteria: ≥1mm contiguous limbs OR ≥2mm chest", explanation: "Or new LBBB = STEMI equivalent, needs urgent PCI/fibrinolysis" }
        ],
        keyPoints: [
          "Coronary dominance: RCA dominant 80%, co-dominant 10%, LCx dominant 10%",
          "Ischemic cascade: ↓Flow → ↓O2 → ↓ATP → Ion pump fails → Cell swells → Dysfunction → Death (minutes)",
          "STEMI = transmural (full-thickness), NSTEMI = subendocardial (partial-thickness)",
          "Anterior MI (LAD) has highest mortality from cardiogenic shock; Inferior (RCA) risk of bradycardia, AV block, RV infarction",
          "Troponin: elevated 3-4 hours, peaks 24-48 hours, remains elevated 7-14 days",
          "Mechanical complications: VSD, papillary rupture, free wall rupture all occur within 7 days of MI",
          "Acute STEMI management: MONA + urgent reperfusion (PCI <90 min or fibrinolysis <30 min) + DAPT + beta-blockers + ACE-I + statins",
          "Secondary prevention: DAPT 12 months, beta-blockers, ACE-I, high-dose statins, lifestyle modification (smoking cessation)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "244: Acute Myocardial Infarction", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "3: Cardiovascular System", edition: "11th" }
        ]
      }
    ]
  }
];
