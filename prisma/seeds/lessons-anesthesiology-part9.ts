import type { TopicLessons } from "./content-loader";

export const anesthesiologyLessonsPart9: TopicLessons[] = [
  {
    topicCode: "AS-MOD-03-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "intraoperative-monitoring-foundation",
        title: "Intraoperative Monitoring - Foundation",
        estimatedMinutes: 25,
        summary: "Standard monitoring (ASA minimum): pulse oximetry, capnography, ECG, NIBP, temperature. Principles and normal values for each modality.",
        contentMd: `# Intraoperative Monitoring - Foundation

## ASA Minimum Monitoring Standards
All general anesthetics require continuous monitoring of:
1. **Pulse Oximetry (SpO2)**: Oxygen saturation
2. **Capnography (ETCO2)**: End-tidal carbon dioxide
3. **Electrocardiography (ECG)**: Heart rhythm
4. **Non-invasive Blood Pressure (NIBP)**: Systolic/diastolic/mean
5. **Temperature**: Core body temperature

## Pulse Oximetry (SpO2)
- **Principle**: Light absorption differentiates oxyhemoglobin vs deoxyhemoglobin
- **Wavelengths**: Red 660 nm + infrared 940 nm
- **Normal**: 95-100% SpO2
- **Hypoxemia**: <94% indicates respiratory problem
- **Probe sites**: Finger (most common), toe, earlobe
- **Advantages**: Non-invasive, continuous, audible tone
- **Limitations**: Poor perfusion → inaccurate readings

## Capnography (ETCO2)
- **Principle**: CO2 concentration in exhaled gas
- **Normal**: 35-45 mmHg at end-expiration
- **Display**: Digital value + real-time waveform
- **Waveform phases**:
  - Phase I: Dead space (no CO2)
  - Phase II: Mixed gas (upstroke)
  - Phase III: Alveolar plateau (high CO2)
- **Clinical use**: Confirms tube placement, detects hypoventilation, ETCO2 low → low cardiac output

## Electrocardiography (ECG)
- **Lead**: Usually Lead II (best P-wave visibility)
- **Displays**: Heart rate, rhythm, ischemic changes
- **Alarm**: HR <50 or >120, arrhythmia detection
- **Limitations**: Artifacts from monopolar diathermy, patient movement

## Non-Invasive Blood Pressure (NIBP)
- **Method**: Oscillometric (automatic cuff inflation)
- **Timing**: Every 3-5 minutes intraoperatively
- **Normal**: Baseline values ±20% acceptable
- **Hypotension alert**: <80-90 mmHg systolic
- **Hypertension alert**: >160 mmHg systolic
- **Advantages**: Simple, non-invasive
- **Disadvantages**: Inaccurate in hypotension, obesity

## Temperature Monitoring
- **Core temperature sites**: Esophageal (most accurate), nasopharyngeal, tympanic
- **Peripheral**: Axillary (inaccurate), skin temperature
- **Normal**: 36.5-37.5°C (mild hypothermia common intraoperatively)
- **Hypothermia effects**: Decreased MAC (10% per 5°C), bradycardia, prolonged recovery`,
        mnemonics: [
          { text: "ASA monitoring = SCENT: SpO2, Capnography, ECG, NIBP, Temperature", explanation: "Five mandatory monitors" },
          { text: "SpO2 >95% = normal, <94% = hypoxemia warning", explanation: "Normal range and alarm threshold" },
          { text: "ETCO2 35-45 mmHg = normal surgical, low = reduced CO or hypoventilation", explanation: "Interpretation guide" },
          { text: "ECG Lead II = best P-wave visibility for rhythm assessment", explanation: "Standard intraoperative lead" },
          { text: "NIBP normal = baseline ±20%, alert <80 systolic or >160 systolic", explanation: "Hemodynamic targets" },
          { text: "Temperature esophageal most accurate, hypothermia decreases MAC 10% per 5°C", explanation: "Core monitoring advantage" }
        ],
        keyPoints: [
          "ASA minimum = five continuous monitors (SpO2, ETCO2, ECG, NIBP, Temp)",
          "Pulse oximetry non-invasive but requires adequate peripheral perfusion",
          "Capnography confirms intubation placement, detects hypoventilation early",
          "ECG Lead II standard; watch for rate, rhythm, ischemic changes",
          "NIBP automated; acceptable if ±20% of baseline",
          "Temperature monitoring critical; hypothermia common in OR",
          "Hypothermia reduces MAC by 10% per 5°C"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Monitoring During Anesthesia", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Intraoperative Monitoring Standards", edition: "6th" }
        ]
      },
      {
        layer: 2,
        slug: "intraoperative-monitoring-mechanism",
        title: "Intraoperative Monitoring - Mechanism",
        estimatedMinutes: 30,
        summary: "Physiologic principles, waveform interpretation, artifacts recognition, advanced monitoring (BIS, invasive lines).",
        contentMd: `# Intraoperative Monitoring - Mechanism

## Capnography Waveform Analysis
- **Normal waveform**: Upstroke (Phase II) → plateau (Phase III) → downstroke (inspiration)
- **Abnormal patterns**:
  - **Absent ETCO2**: Tube not in trachea, cardiac arrest, esophageal intubation
  - **Rising baseline**: Insufficient CO2 elimination (rebreathing)
  - **Peaked waveform**: Normal; indicates good alveolar gas

## Pulse Oximetry Physiology
- **Oxygen saturation = (HbO2) / (Total Hb) × 100%**
- **SpO2 vs PaO2**: Not linear (oxygen-hemoglobin dissociation curve)
  - SpO2 90% ≈ PaO2 60 mmHg (steep curve lower)
  - SpO2 95% ≈ PaO2 80 mmHg
  - SpO2 100% ≈ PaO2 >600 mmHg (flat curve upper)
- **Artifacts**: Motion, low perfusion, hypothermia reduce accuracy
- **Dysfunctional hemoglobin** (carboxyhemoglobin, methemoglobin) falsely low SpO2

## Blood Pressure Waveform
- **Systolic**: Peak pressure (ventricular contraction)
- **Diastolic**: Minimum (ventricular relaxation)
- **Mean arterial pressure (MAP) = DP + (SP-DP)/3**
- **Normal**: MAP >60 mmHg maintains organ perfusion

## Advanced Monitoring

### Bispectral Index (BIS)
- **Measures**: Anesthetic depth (brain electrical activity)
- **Scale**: 0-100 (100 = awake, 40-60 = surgical anesthesia, 0 = flat)
- **Advantage**: Avoids anesthetic overdose
- **Cost**: Expensive; limited India availability

### Arterial Line
- **Indication**: Hemodynamic instability, major surgery, frequent blood sampling
- **Sites**: Radial (most common), femoral, brachial
- **Advantages**: Continuous BP, waveform, blood sampling
- **Complications**: Thrombosis, infection, embolism

### Central Venous Pressure (CVP)
- **Indication**: Major surgery, shock, fluid management
- **Sites**: Internal jugular, subclavian, femoral
- **Normal CVP**: 5-10 cm H2O (or 0-8 mmHg)
- **Interpretation**: CVP low = hypovolemia, CVP high = fluid overload or right heart failure

## Metabolic Monitoring

### Mixed Venous Oxygen Saturation (SvO2)
- **Normal**: 70-75% (indicates adequate oxygen delivery vs consumption)
- **Low SvO2**: <65% suggests shock, inadequate cardiac output
- **Requires**: Pulmonary artery catheter (Swan-Ganz)

### Lactate
- **Normal**: <2 mmol/L
- **Elevated**: Indicates inadequate tissue oxygenation, metabolic acidosis
- **Clinical**: Marker of shock severity`,
        mnemonics: [
          { text: "Capnography waveform = upstroke, plateau, downstroke = normal shape", explanation: "Normal waveform recognition" },
          { text: "No ETCO2 on monitor = esophageal intubation = immediate recheck tube position", explanation: "Critical emergency" },
          { text: "SpO2 90% ≈ PaO2 60 = steep part of curve = rapid desaturation risk", explanation: "Non-linear relationship" },
          { text: "MAP = DP + 1/3(SP-DP) = critical organ perfusion >60 mmHg", explanation: "MAP calculation" },
          { text: "BIS 40-60 = surgical anesthesia, 0 = flat EEG, 100 = awake", explanation: "Anesthetic depth scale" },
          { text: "Arterial line advantage = continuous pressure + waveform + blood draws", explanation: "Benefits over NIBP" }
        ],
        keyPoints: [
          "Capnography waveform interpretation: upstroke (inspiration), plateau (alveolar), downstroke (intubated)",
          "Absent ETCO2 = esophageal intubation or tube obstruction; immediate action needed",
          "SpO2-PaO2 curve non-linear: steep at <90%, flat at >95%",
          "MAP maintenance >60 mmHg ensures organ perfusion",
          "BIS monitoring prevents anesthetic overdose but expensive",
          "Arterial lines for continuous hemodynamic monitoring in unstable patients",
          "CVP normal 5-10 cm H2O; guides fluid management",
          "SvO2 <65% indicates inadequate oxygen delivery"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Physiology of Monitoring", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Waveform Interpretation", edition: "6th" }
        ]
      },
      {
        layer: 3,
        slug: "intraoperative-monitoring-clinical",
        title: "Intraoperative Monitoring - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical interpretation, alarm settings, troubleshooting monitoring problems, special situations, resource limitations in India.",
        contentMd: `# Intraoperative Monitoring - Clinical

## Interpreting Vital Signs During Anesthesia

### Hypoxemia (SpO2 <94%)
**Differential diagnosis**:
1. Hypoventilation (minute ventilation low)
2. Tube obstruction (blood, secretions)
3. Esophageal intubation (check ETCO2)
4. Airway problem (disconnect, kink)
5. Shunting (atelectasis, aspiration)

**Management**:
- Increase FiO2 to 100%
- Check tube position, patency
- Increase minute ventilation
- Consider suction, head position

### Hypotension (Systolic <80-90 mmHg)
**Common causes**:
- Anesthetic agent (propofol, volatile agents)
- Hypovolemia (bleeding, dehydration)
- Sympathetic blockade (regional anesthesia)
- Cardiac dysfunction

**Management**:
- Fluid bolus (500 mL crystalloid)
- Reduce anesthetic agent dose
- Vasopressor (phenylephrine, ephedrine) if needed
- Check for bleeding/hypovolemia

### Hypertension (Systolic >160 mmHg)
**Causes**:
- Inadequate anesthesia (light anesthesia)
- Sympathetic stimulation (hypercarbia, hypoxia)
- Pain (inadequate analgesia)
- Full bladder

**Management**:
- Deepen anesthesia
- Increase opioid dose
- Reduce ETCO2 (hypercarbia)
- Check for hypoxia
- Encourage bladder emptying

### Tachycardia (HR >120)
**Causes**:
- Inadequate anesthesia/analgesia
- Hypovolemia
- Hypercarbia
- Hypoxia
- Pain

**Management**:
- Deepen anesthesia
- Increase opioid dose
- Fluid bolus
- Increase minute ventilation

### Bradycardia (HR <50)
**Causes**:
- Propofol (vagal effect)
- Succinylcholine (parasympathetic)
- High intracranial pressure
- Hypothermia

**Management**:
- Reduce propofol dose
- Glycopyrrolate 0.2-0.4 mg IV if severe
- Gentle patient handling
- Monitor core temperature

### Hypothermia Detection and Management
- **Esophageal monitoring**: Most accurate
- **Effects**: Increased duration of paralysis, prolonged recovery, coagulopathy, infection risk
- **Prevention**: Active warming (forced-air), passive (blankets), warm IV fluids
- **Treatment**: Passive/active rewarming post-op

## Capnography Clinical Interpretation

### Low ETCO2 (<35 mmHg)
**Causes**: Hypoventilation, low cardiac output, shunting
**Management**: Increase minute ventilation, check circulation

### High ETCO2 (>50 mmHg)
**Causes**: Hypercarbia (hypoventilation), malignant hyperthermia
**Management**: Increase ventilation rate/minute ventilation

### Cardiac Output Assessment
- **ETCO2 sudden drop**: May indicate decreased cardiac output (embolism, hemorrhage)
- **Monitor trend**: ETCO2 useful for detecting hemodynamic changes

## ECG Clinical Interpretation

### Ischemic Changes
- **ST depression**: Subendocardial ischemia
- **ST elevation**: Transmural ischemia
- **T-wave inversion**: Ischemic pattern
- **Action**: Notify surgeon, optimize hemodynamics (BP, HR, oxygen)

### Arrhythmia Recognition
- **Atrial fibrillation**: Irregular rhythm, no P-waves
- **Ventricular tachycardia**: Wide QRS, hemodynamically unstable
- **Premature ventricular contractions**: Single or couplets
- **Action**: Document, notify senior, treat if hemodynamically significant

## Indian OR Context (Resource Limitations)

### Standard Equipment Available
- SpO2, ECG, NIBP, temperature (routine)
- Capnography (common in major centers, less in small hospitals)
- BIS monitors (rare, expensive)

### Monitoring with Limited Resources
- Capnography essential for tube confirmation (prevents esophageal intubation)
- Clinical assessment (pupil size, lacrimation, movement) supplements monitors
- Manual BP measurement backup if NIBP fails
- Axillary/skin temperature acceptable if core thermometer unavailable

### Best Practice with Limitations
- Prioritize capnography over BIS
- Frequent clinical checks (pupil size, eye position)
- Palpate radial pulse for cardiac output assessment
- Visual inspection of operative field (bleeding, color)`,
        mnemonics: [
          { text: "Hypoxemia = SpO2 <94 = check FiO2, ventilation, tube position, patency", explanation: "Quick assessment steps" },
          { text: "Hypotension = fluid + vasopressor + reduce anesthetic = MAP >60", explanation: "Management sequence" },
          { text: "Hypertension = deepen anesthesia + analgesia + reduce hypercarbia", explanation: "Causes and treatment" },
          { text: "Low ETCO2 = low ventilation or low cardiac output = ventilate more", explanation: "Quick fix" },
          { text: "High ETCO2 = high CO2 = increase ventilation, check for MH", explanation: "Assessment approach" },
          { text: "Hypothermia decreases drug metabolism = prolonged paralysis + recovery", explanation: "Clinical consequence" }
        ],
        keyPoints: [
          "Hypoxemia: check FiO2, ventilation, tube position, consider atelectasis",
          "Hypotension: fluid, reduce agents, vasopressor, identify cause",
          "Capnography trend useful for cardiac output assessment",
          "ETCO2 sudden drop may indicate embolism or hemorrhage",
          "ECG ischemic changes require hemodynamic optimization",
          "Hypothermia common; active/passive rewarming critical",
          "Limited resources: prioritize capnography for tube confirmation",
          "Clinical assessment supplements monitors in resource-limited settings"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Clinical Interpretation of Monitoring", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Troubleshooting Monitoring Problems", edition: "6th" }
        ]
      },
      {
        layer: 4,
        slug: "intraoperative-monitoring-exam-prep",
        title: "Intraoperative Monitoring - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, normal values, alarm thresholds, waveform patterns, differential diagnoses, exam question patterns.",
        contentMd: `# Intraoperative Monitoring - Exam Prep

## Normal Values Quick Reference

| Monitor | Normal Range | Alarm Low | Alarm High |
|---------|--------------|-----------|------------|
| SpO2 | 95-100% | <94% | N/A |
| ETCO2 | 35-45 mmHg | <30 mmHg | >50 mmHg |
| HR | 60-100 bpm | <50 bpm | >120 bpm |
| Systolic BP | 100-140 mmHg | <80 mmHg | >160 mmHg |
| MAP | 70-100 mmHg | <60 mmHg | >110 mmHg |
| Core Temp | 36.5-37.5°C | <36°C | >38°C |
| SpO2-PaO2 | See curve | SpO2 90%=PaO2 60 | High plateau |

## Capnography Waveform Patterns

| Pattern | Cause | Action |
|---------|-------|--------|
| Absent ETCO2 | Esophageal tube, apnea | Reposition tube |
| Rising baseline | Rebreathing | Check CO2 absorber |
| Square wave | Normal | Continue monitoring |
| Peaked wave (>45) | Hypercarbia | Increase ventilation |
| Sudden drop | Low cardiac output | Check circulation |

## SpO2-PaO2 Relationship (Oxygen Curve)
- **SpO2 70%** → PaO2 ~40 mmHg (steep part)
- **SpO2 80%** → PaO2 ~50 mmHg (steep)
- **SpO2 90%** → PaO2 ~60 mmHg (steep/critical)
- **SpO2 95%** → PaO2 ~80 mmHg
- **SpO2 100%** → PaO2 >600 mmHg (flat part)
- **Clinical**: <90% = rapid desaturation risk

## ECG Findings Interpretation

| Finding | Significance | Action |
|---------|--------------|--------|
| ST depression | Subendocardial ischemia | Optimize hemodynamics |
| ST elevation | Transmural ischemia | Urgent optimization |
| Tall T-waves | Hyperkalemia | Check K+ level |
| Peaked P-waves | Pulmonary hypertension | Monitor closely |
| Atrial fibrillation | Arrhythmia | Document, observe if stable |
| V-tach | Lethal arrhythmia | ACLS protocol |

## High-Yield Facts

- **ASA minimum = 5 monitors**: SpO2, ETCO2, ECG, NIBP, Temperature
- **No ETCO2 = esophageal intubation** (most common tube placement error)
- **SpO2 <94% = hypoxemia alert** (action required)
- **ETCO2 35-45 mmHg = normal surgical** (lower may indicate low CO)
- **MAP >60 mmHg = organ perfusion maintained**
- **Hypothermia = MAC decreased 10% per 5°C** (prolongs recovery)
- **SpO2 90% ≈ PaO2 60** (critical point on curve)
- **BIS 40-60 = surgical anesthesia target** (if using BIS)
- **Arterial line for hemodynamic monitoring** (unstable patients)
- **CVP normal 5-10 cm H2O** (guide fluid management)

## Common Exam Questions

**Q: Most common tube placement error?**
A: Esophageal intubation (detected by absent ETCO2)

**Q: SpO2 95% corresponds to PaO2?**
A: ~80 mmHg

**Q: ETCO2 normal range?**
A: 35-45 mmHg

**Q: MAP minimum for organ perfusion?**
A: >60 mmHg

**Q: Hypothermia effect on MAC?**
A: Decreases 10% per 5°C (use lower anesthetic concentration)

**Q: BIS scale meaning?**
A: 0-100 (100 awake, 40-60 surgical anesthesia, 0 flat)

**Q: CVP normal range?**
A: 5-10 cm H2O (0-8 mmHg)

**Q: ST depression on ECG indicates?**
A: Subendocardial ischemia

**Q: Sudden ETCO2 drop suggests?**
A: Decreased cardiac output (embolism, hemorrhage)

**Q: Hypoxemia management?**
A: Increase FiO2, check ventilation/tube position/patency`,
        mnemonics: [
          { text: "ASA monitoring = SCENT: SpO2, Capnography, ECG, NIBP, Temperature", explanation: "Five mandatory monitors" },
          { text: "SpO2 >95% normal, 94% threshold, 90% critical point on curve", explanation: "Oxygen saturation targets" },
          { text: "ETCO2 35-45 mmHg surgical, <30 = low CO, >50 = hypercarbia", explanation: "Normal and abnormal ranges" },
          { text: "No ETCO2 = ESOPHAGEAL tube = EMERGENCY action", explanation: "Most critical monitoring finding" },
          { text: "MAP >60 = organ perfusion maintained, <60 = shock risk", explanation: "Hemodynamic target" },
          { text: "Hypothermia = Cold concentration use lower agent dose (MAC ↓10% per 5°C)", explanation: "Temperature adjustment" }
        ],
        keyPoints: [
          "ASA minimum five continuous monitors always used",
          "Absent ETCO2 = esophageal intubation; reposition immediately",
          "SpO2 <94% requires immediate action (increase FiO2, check airway)",
          "ETCO2 35-45 mmHg normal; trending important for CO assessment",
          "MAP >60 mmHg minimum for organ perfusion",
          "Hypothermia common, decreases MAC, prolongs recovery",
          "SpO2-PaO2 curve non-linear; <90% is critical zone",
          "Limited resources: capnography most important for tube confirmation"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Monitoring Parameters and Targets", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Monitoring Summary and Alarms", edition: "6th" }
        ]
      },
      {
        layer: 5,
        slug: "intraoperative-monitoring-active-recall",
        title: "Intraoperative Monitoring - Active Recall",
        estimatedMinutes: 20,
        summary: "10 clinical scenarios testing monitoring interpretation, problem recognition, response to abnormalities.",
        contentMd: `# Intraoperative Monitoring - Active Recall

## Q1: Esophageal Intubation Recognition

**Scenario**: Tube placed, patient ventilated. SpO2 100%, HR normal, BP normal. Capnography monitor reads "no CO2 detected." What's happening?

**Answer**: **Esophageal intubation** (tube in esophagus, not trachea). Chest rise misleading (esophageal intubation can ventilate stomach). **Key finding**: Absent ETCO2 on capnography = diagnostic. **Management**: (1) Immediately stop ventilation, (2) Prepare for reintubation, (3) Suction oropharynx, (4) Reposition tube into trachea, (5) Confirm with capnography (ETCO2 >20 mmHg). **Prevention**: Visualize tube passing through vocal cords, confirm with capnography IMMEDIATELY post-placement.

## Q2: Hypoxemia During Surgery

**Scenario**: 30 minutes into surgery, SpO2 drops from 99% to 92%. HR 110, BP normal. ETCO2 normal 40 mmHg. What's the problem?

**Answer**: **Hypoxemia despite normal ventilation** (ETCO2 normal). **Differential**: (1) Atelectasis (collapsed lung), (2) Aspiration, (3) Shunting. **Causes**: FiO2 too low mixed with nitrogen (use high O2), patient position (atelectasis in dependent lung). **Management**: (1) Increase FiO2 to 100%, (2) Increase minute ventilation, (3) Check tube position, (4) Consider positive end-expiratory pressure (PEEP) for atelectasis, (5) If aspiration suspected, suction airway. **Prevention**: Preoxygenation 3-5 minutes, maintain adequate FiO2 intraoperatively.

## Q3: ETCO2 Sudden Drop

**Scenario**: ETCO2 steady 40 mmHg. Suddenly drops to 15 mmHg. BP drops from 110 to 70 mmHg. HR 120. What's happening?

**Answer**: **Acute decrease in cardiac output** (major event). **Differential**: (1) **Massive hemorrhage**, (2) **Pulmonary embolism**, (3) **Cardiac arrhythmia**, (4) **Tension pneumothorax** (if thoracic case). **ETCO2 as CO indicator**: ETCO2 reflects pulmonary blood flow = cardiac output. Sudden drop = CO drops suddenly. **Management**: (1) **STOP surgery immediately**, (2) Check pulse (palpate carotid), (3) Call for help, (4) Check for hemorrhage (sponges count, visual), (5) Start resuscitation if no pulse (ACLS), (6) Consider embolism, pneumothorax. **Learning**: ETCO2 trending critical for early hemorrhage/embolism detection.

## Q4: Hypothermia Recognition

**Scenario**: Core temperature 33°C. Patient on isoflurane 1.2% (normal MAC 1.15%). Minimal movement at surgical stimulation. What's wrong?

**Answer**: **Hypothermia with relative anesthetic overdose**. **Mechanism**: Hypothermia decreases MAC by 10% per 5°C. At 33°C (5°C below 38°C), MAC reduced ~10% → isoflurane MAC becomes 1.15 × 0.9 = 1.04%. **Patient receiving 1.2%**: Effectively receiving 1.2/1.04 = 1.15× MAC (overdosed). **Consequences**: (1) Profound CNS depression (prolonged emergence), (2) Myocardial depression (bradycardia, hypotension), (3) Arrhythmia risk. **Management**: (1) Reduce isoflurane to 0.75%, (2) Active warming (forced-air warmer), (3) Warm IV fluids, (4) Monitor EKG for arrhythmias. **Learning**: Cold OR (common in India), always account for hypothermia-induced MAC reduction.

## Q5: Systolic BP 170 mmHg Intraoperatively

**Scenario**: Systolic BP was 120 mmHg at start, now 170 mmHg. ETCO2 50 mmHg (was 40). HR 100. Patient movement visible. What's happening?

**Answer**: **Hypertension + hypercarbia + light anesthesia = inadequate anesthesia**. **ETCO2 elevation** (50 mmHg) indicates hypercarbia (hypoventilation). **Patient movement** confirms inadequate anesthesia despite elevated volatile agent concentration. **Differential**: (1) Minute ventilation too low (tidal volume or rate too low), (2) Anesthetic concentration inadequate (check vaporizer), (3) Pain/inadequate analgesia. **Management**: (1) Increase minute ventilation (increase rate and/or tidal volume), (2) Increase opioid dose, (3) Increase volatile agent concentration, (4) Gentle patient handling. **Post-op**: Confirm vaporizer settings to prevent future recurrence.

## Q6: SpO2 94%, ETCO2 38 mmHg, But Still Hypoxemic

**Scenario**: Patient with SpO2 94%, ETCO2 38 (normal), HR normal, BP normal. Yet blood drawn has PaO2 45 mmHg (very low) on ABG. How possible?

**Answer**: **SpO2-PaO2 mismatch = patient on steep part of oxygen-hemoglobin dissociation curve**. **Physics**: SpO2 94% is near the critical point (SpO2 90% ≈ PaO2 60). Small decrease in SpO2 → large drop in PaO2. **At SpO2 94% = PaO2 approximately 70 mmHg (not 45, but point is curve relationship)**. **Also consider**: Patient may have anemia, carboxyhemoglobin (falsely high SpO2), or other dysfunctional hemoglobin. **Management**: (1) Increase FiO2 to 100%, (2) Check hemoglobin level, (3) Assess for CO exposure, (4) Monitor ABG. **Learning**: SpO2 false security near 95%; maintain FiO2 adequate.

## Q7: Bradycardia (HR 45) After Propofol

**Scenario**: Patient received propofol 2 mg/kg IV, HR drops from 80 to 45. No medication errors. Vagal stimulus? No. What's happening?

**Answer**: **Propofol vagal effect** (direct parasympathomimetic action on heart). **Mechanism**: Propofol enhances vagal tone, decreases sympathetic activity → bradycardia. **Risk factors**: Slow IV push (not rapid), young patients, high doses. **Management**: (1) Slow IV infusion of propofol (avoid rapid bolus), (2) Glycopyrrolate 0.2-0.4 mg IV if HR <50 and symptomatic, (3) Atropine 0.3-0.5 mg IV alternative. (4) Gentle handling (avoid vagal stimulation). **Prevention**: Rapid IV push may paradoxically prevent bradycardia (less time for vagal effect), but gentler infusion is standard. **Learning**: Propofol-induced bradycardia manageable with anticholinergic.

## Q8: ST Segment Depression on ECG

**Scenario**: During major vascular surgery, ST segment depression appears in Leads II and III on ECG. Patient otherwise stable (BP normal, HR 85). What's the concern?

**Answer**: **Subendocardial ischemia** (myocardial oxygen supply-demand mismatch). **Significance**: ST depression = ischemic pattern suggesting coronary insufficiency. **Risk**: Can progress to MI if not addressed. **Management**: (1) Optimize hemodynamics (maintain MAP >70-80 mmHg for coronary perfusion), (2) Increase oxygen delivery (increase FiO2, cardiac output), (3) Reduce oxygen demand (decrease HR, avoid hypertension), (4) Notify surgeon and cardiologist, (5) Continue close monitoring, (6) Consider discontinuing case if ischemia worsens. **Post-op**: Troponin levels, ECG comparison, cardiology evaluation.

## Q9: Rising ETCO2 in Closed Abdomen Case

**Scenario**: ETCO2 was 40 mmHg. During laparoscopic surgery, ETCO2 rises to 55-60 mmHg despite normal minute ventilation. Temperature normal. What's happening?

**Answer**: **CO2 insufflation absorption** (common in laparoscopic surgery). **Mechanism**: Laparoscopy insufflates CO2 into abdomen for visualization. CO2 absorbed through peritoneal membranes → systemic CO2 load → hypercarbia. **Effect**: Increased ETCO2, potential CO2 embolism, arrhythmias. **Management**: (1) Increase minute ventilation (increase rate/tidal volume), (2) Target ETCO2 <45 mmHg, (3) Optimize arterial CO2 (ABG if concerned), (4) Watch for arrhythmias (dysrhythmias from hypercarbia), (5) Maintain anesthesia depth. **Prevention**: Expect CO2 absorption; plan for higher minute ventilation in laparoscopic cases.

## Q10: MAP 55 mmHg Despite Normal SpO2 and ETCO2

**Scenario**: Patient hypotensive (MAP 55 mmHg) on propofol + N2O + isoflurane. SpO2 99%, ETCO2 40. What's the management?

**Answer**: **Drug-induced hypotension** (propofol + volatile agent combination). **Mechanism**: Both agents cause dose-dependent vasodilation + myocardial depression → hypotension. **Differential**: Confirm not hemorrhage (check sponges, visual field). **Management**: (1) **Fluid bolus** (500 mL crystalloid IV) for preload, (2) **Reduce propofol or volatile concentration** (primary cause), (3) **Vasopressor** if BP doesn't improve (phenylephrine 0.5-1 mg IV or infusion), (4) **Ephedrine** 5-10 mg IV if bradycardic. (5) Continue monitoring. **Prevention**: Anticipate hypotension with combination anesthesia; dose appropriately based on hemodynamics.`,
        mnemonics: [
          { text: "No ETCO2 = ESOPHAGEAL tube = EMERGENCY reposition = verify with capnography", explanation: "Most critical finding response" },
          { text: "SpO2 drop + normal ETCO2 = atelectasis = increase FiO2 + ventilation + PEEP", explanation: "Problem identification" },
          { text: "ETCO2 sudden DROP = LOW cardiac output = hemorrhage/embolism/arrest", explanation: "Emergency indicator" },
          { text: "Hypothermia 33°C = MAC ↓10% = reduce agent concentration by 10%", explanation: "Temperature adjustment" },
          { text: "High ETCO2 + hypertension + movement = light anesthesia + hypercarbia = increase ventilation + agent", explanation: "Multi-problem response" },
          { text: "ST depression = ischemia = optimize hemodynamics (MAP >70), increase O2, reduce demand", explanation: "Ischemia management" }
        ],
        keyPoints: [
          "Esophageal intubation: absent ETCO2 is diagnostic finding",
          "Hypoxemia: check FiO2, ventilation, tube, consider atelectasis",
          "ETCO2 sudden drop indicates cardiovascular emergency (hemorrhage, embolism)",
          "Hypothermia decreases MAC 10% per 5°C; reduce agent concentration",
          "Light anesthesia: increase agent, opioid, optimize ventilation for hypercarbia",
          "ECG ST changes require hemodynamic optimization, cardiology notification",
          "Laparoscopic CO2 absorption expected; plan for higher minute ventilation",
          "Propofol hypotension: fluid, reduce agent, vasopressor as needed"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Clinical Problem-Solving with Monitoring", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Acute Monitoring Problems and Solutions", edition: "6th" }
        ]
      }
    ]
  }
];
