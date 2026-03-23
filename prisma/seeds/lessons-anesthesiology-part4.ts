import type { TopicLessons } from "./content-loader";

export const anesthesiologyPart4Lessons: TopicLessons[] = [
  {
    topicCode: "AS-MOD-03-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "preanesthetic-assessment-foundation",
        title: "Preanesthetic Assessment - Foundation",
        estimatedMinutes: 25,
        summary: "ASA classification, history, physical examination, investigations, risk stratification.",
        contentMd: `# Preanesthetic Assessment - Foundation

## Purpose of Preanesthetic Assessment
- Identify patient risk factors → plan anesthesia accordingly
- Optimize medical status before surgery
- Obtain informed consent
- Plan anesthetic technique (general, regional, local)
- Establish baseline for perioperative comparisons

## ASA Physical Status Classification

| Class | Definition | Risk | Examples |
|-------|-----------|------|----------|
| **I** | Healthy, no medical disease | Minimal | Young, healthy for minor surgery |
| **II** | Mild systemic disease; no functional limitation | Low | Controlled HTN, DM, mild asthma |
| **III** | Severe systemic disease; functional limitation | Moderate | Poorly controlled HTN, CAD, severe asthma |
| **IV** | Severe disease; constant threat to life | High | Unstable angina, recent MI, ESRD |
| **V** | Moribund; unlikely to survive 24h | Very high | Aortic rupture, massive PE |
| **E (Emergency)** | Add "E" if urgent surgery needed | - | Emergency cesarean, perforated viscus |

**Modifier**: E (Emergency) increases perioperative risk significantly

## History Taking

### Cardiovascular
- **CAD risk factors**: Age, HTN, hyperlipidemia, DM, smoking, family history
- **Symptoms**: Chest pain, dyspnea on exertion, orthopnea, edema
- **Medications**: ACE inhibitors, beta-blockers, statins
- **Recent events**: MI (within 3 months?), stent (type? recent?), heart failure
- **Arrhythmias**: Palpitations, syncope, tachycardia

### Respiratory
- **COPD/asthma**: FEV1, exacerbations, hospitalizations, ICU admissions
- **Sleep apnea**: Obesity, snoring, daytime sleepiness
- **Smoking**: Current/former, pack-years
- **Recent URI**: Cough, fever, congestion (delay surgery if possible)

### Metabolic
- **Diabetes**: Type, control (A1C?), on insulin/oral agents
- **Thyroid**: Hypothyroid, hyperthyroid, on replacement
- **Renal**: Creatinine, GFR, dialysis, urine output

### Hepatic
- **Cirrhosis signs**: Jaundice, ascites, varices, bleeding
- **Alcohol use**: Quantity, abstinence (withdraw risk)
- **Coagulopathy**: PT/INR, PTT prolonged

### Medications
- **Anticoagulants**: Warfarin (INR?), DOACs (hold timing?), heparin
- **Antiplatelets**: Aspirin, clopidogrel (hold timing depends on surgery urgency)
- **Anesthetics**: Previous reactions (malignant hyperthermia?, anaphylaxis?)
- **Antihypertensives**: Continue vs hold day of surgery
- **Herbal**: St. John's Wort (CYP interaction), echinacea, ginger

### Allergies & Previous Anesthesia
- **Drug allergies**: Penicillin, sulfa, iodine, latex
- **Anesthetic complications**: Malignant hyperthermia (family history?), anaphylaxis, prolonged paralysis
- **Airway**: Difficult intubation history (repeat elective → awake fiber optic)
- **Pain/nausea**: Antiemetic premedication if history of PONV

## Physical Examination

### Airway Assessment (Mallampati Score)
- **Class I**: Soft palate, uvula, anterior tonsillar pillars visible
- **Class II**: Soft palate, uvula visible; pillars hidden
- **Class III**: Soft palate, soft uvula visible; pharynx not visible
- **Class IV**: Only hard palate visible (very difficult)

**Additional**: Interincisor distance, thyromental distance, neck mobility, dentition

### Cardiovascular
- **BP**: Both arms (≥20 mmHg difference → vascular disease)
- **HR**: <60 → bradycardia (β-blocker, cardiac disease); >100 → tachycardia (pain, anxiety, anemia)
- **Auscultation**: Murmurs (stenotic vs regurgitant), gallop
- **Edema**: Dependent edema (volume overload); peripheral edema (DM, renal disease)

### Respiratory
- **Work of breathing**: Use of accessory muscles → COPD/asthma
- **Auscultation**: Wheezes (asthma, COPD), crackles (pulmonary edema, pneumonia), rhonchi
- **SpO2**: <95% on room air → preoperative optimization needed

### General
- **Obesity**: BMI >30 → difficult airway, OSA risk, aspiration risk
- **Jaundice**: Liver disease, coagulopathy risk
- **Tremor/anxiety**: Thyroid disease, withdrawal risk, anxiety management

## Investigations

### Routine Labs (Varies by Age, Comorbidity)
- **CBC**: Anemia (Hb <7 → transfusion risk), WBC (infection, immunosuppression)
- **Electrolytes**: Hypokalemia (cardiac risk), hyperkalemia (renal disease)
- **Creatinine/BUN**: Renal function; GFR <30 → drug dosing adjustments
- **Glucose**: DM control; hyperglycemia increases infection risk
- **PT/INR**: If on warfarin; ≥3 → hold, correct with vitamin K
- **PTT**: If on heparin; if elevated → hold, may need protamine

### Cardiac Investigations
- **ECG**: Mandatory if: age >50, HTN, DM, CAD history, undergoing major surgery
- **Echocardiogram**: If valvular disease, suspected HF, perioperative cardiac risk
- **Stress test/troponin**: If recent (within 3 months) MI or unstable angina

### Pulmonary
- **CXR**: If: age >60, smoker, COPD, recent URI, cardiac disease, undergoing thoracic surgery
- **PFTs**: If significant COPD/asthma; FEV1 <30% of predicted → high operative risk

### Coagulation
- **Platelet count**: <100 → bleeding risk; may need transfusion
- **Fibrinogen**: <150 → severe coagulopathy
- **D-dimer**: If recent stroke/MI suspected; not routine

## Perioperative Risk Stratification

### Lee Revised Cardiac Risk Index (RCRI)
**Risk factors (1 point each):**
1. High-risk surgery (major vascular, intrathoracic, intraperitoneal)
2. History of CAD or Q-wave MI
3. History of HF
4. History of stroke/TIA
5. Preoperative insulin use
6. Preoperative Cr >2 mg/dL

**Risk stratification:**
- 0 points: <1% major cardiac event
- 1 point: 1% risk
- 2 points: 7% risk
- ≥3 points: >11% risk

### Surgical Risk
- **Low-risk**: Minor surgery (skin biopsy, cataract), no major CVS effects
- **Intermediate-risk**: Abdominal, head/neck, orthopedic; 1-5% cardiac event rate
- **High-risk**: Major vascular, cardiothoracic, complex abdominal; >5% cardiac event rate`,
        mnemonics: [
          { text: "ASA I-V: Healthy, mild disease, severe disease, life-threatening, moribund", explanation: "Classification" },
          { text: "Mallampati I-IV: Uvula visible → Class II, soft palate visible → Class III", explanation: "Airway" },
          { text: "RCRI: high-risk surgery, CAD, HF, stroke, insulin, Cr >2; score ≥3 → high risk", explanation: "Cardiac risk" },
          { text: "Airway assessment: Mallampati + interincisor distance + thyromental + mobility", explanation: "Components" },
        ],
        keyPoints: [
          "ASA classification predicts perioperative risk; E (emergency) adds risk",
          "Mallampati score estimates intubation difficulty; Class III-IV → difficult",
          "RCRI score ≥3 → high cardiac event risk; warrants optimization",
          "Anticoagulation timing critical: warfarin (INR <2 safe), DOACs (hold timing), aspirin (continue)",
          "Recent MI/stroke/stent → delay surgery if possible; high perioperative risk",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Preanesthetic Assessment", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Preoperative Evaluation", edition: "6th" },
        ],
      },
      {
        layer: 2,
        slug: "preanesthetic-optimization",
        title: "Preanesthetic Assessment - Optimization",
        estimatedMinutes: 30,
        summary: "Perioperative medication management, NPO status, risk reduction strategies.",
        contentMd: `# Preanesthetic Assessment - Optimization

## Perioperative Medication Management

### Medications to Continue
- **ACE inhibitors/ARBs**: Continue (prevent HTN crisis if held)
- **Beta-blockers**: Continue (prevent withdrawal/rebound HTN); use cautiously post-op
- **Aspirin**: Continue for CAD patients (↑ bleeding risk minimal; MI risk higher if held)
- **Anticonvulsants**: Continue (prevent seizures)
- **Thyroid replacement**: Continue (maintain euthyroid state)
- **Steroids**: Continue if on chronic therapy (risk of adrenal crisis if held)

### Medications to Hold
- **ACE inhibitors/ARBs**: Controversial; many hold day of surgery (hyperkalemia risk)
- **Diuretics**: Hold day of surgery (hypovolemia risk)
- **Metformin**: Hold day of surgery if normal renal function (if Cr >2 or GFR <30, hold 48h; risk of lactic acidosis if contrast given)
- **NSAIDs**: Hold 3 days before surgery (↑ bleeding risk)
- **Anticoagulants**: Timing varies:
  - Warfarin: Hold 3-5 days pre-op; check INR <2 day before
  - DOACs (apixaban, rivaroxaban): Hold 24-48h before (depends on renal function)
  - Heparin: Can hold day of surgery; IV heparin bridge rarely needed
- **Antiplatelets**: Timing depends on surgery urgency:
  - Elective: Hold 5-7 days (aspirin 7 days, clopidogrel 5 days)
  - Urgent (stent <1 year): Continue (bleeding risk < thrombosis risk)

### Premedication
- **Benzodiazepines**: Midazolam 0.25-0.5 mg/kg PO (anxiolytic, amnesia)
- **Anticholinergics**: Glycopyrrolate 0.2 mg (antisialagogue, prevent bronchospasm)
- **H2 blockers/PPIs**: Omeprazole (aspiration prophylaxis in high-risk)
- **Antiemetics**: Ondansetron (PONV history)

## Fasting Guidelines (NPO Status)

### Purpose
- Reduce gastric volume/acidity → prevent aspiration/aspiration pneumonitis

### Standards (ASA)
- **Solids**: 6-8 hours
- **Non-human milk**: 4 hours
- **Human breast milk**: 3 hours
- **Clear liquids**: 2 hours (water, juice without pulp, black coffee)

### Exceptions
- **Pregnant patients**: 6-8h solids, 2h clear liquids (aspiration risk ↑)
- **Obesity/GERD**: 6-8h (↑ aspiration risk)
- **Gastric outlet obstruction**: Longer fast; consider preoperative gastric decompression

## Risk Reduction Strategies

### Cardiovascular Risk Reduction
- **Beta-blockers**: Perioperative beta-blocker use (if not on chronic) reduces cardiac events (controversial; use cautiously)
- **Statins**: Continue perioperative period (↓ atherothrombotic events)
- **ACE inhibitors/ARBs**: Continue or hold (controversial)
- **Smoking cessation**: Ideally 4 weeks before (reduces COPD, MI risk)
- **Antiplatelet therapy**: Continue if CAD (especially recent stent)

### Venous Thromboembolism (VTE) Prophylaxis
- **Risk assessment**: Patient factors (immobility, cancer, prior VTE, hypercoagulable) + surgical factors
- **Pharmacologic**: Enoxaparin 40 mg SC daily (start pre-op or post-op), unfractionated heparin
- **Mechanical**: SCDs, early mobilization, adequate hydration
- **Judicious**: Balance bleeding risk (spinal, epidural) vs thrombosis risk

### Infection Prophylaxis
- **Antibiotic timing**: Within 60 minutes before incision (vancomycin/clindamycin within 120 min)
- **Redosing**: If surgery >2 half-lives of antibiotic
- **Typical agents**: Cefazolin (most common), clindamycin (β-lactam allergy), vancomycin (MRSA)

### Respiratory Risk Reduction
- **Smoking cessation**: 4 weeks ideal (reduces pneumonia, airway reactivity)
- **Inhaler use**: Continue β2-agonists; consider preoperative breathing exercises
- **OSA screening**: STOP-BANG score; if positive → perioperative CPAP, careful opioid use post-op
- **COPD**: Bronchodilators continue

### Renal Protection
- **Contrast-induced nephropathy prophylaxis**:
  - Hold metformin 48 hours before contrast (risk of lactic acidosis)
  - IV hydration with normal saline
  - Avoid NSAIDs
  - SCr checked 48-72 hours post-procedure

## NPO and Aspiration Risk Assessment

### Aspiration Risk Factors
- **Emergency (full stomach)**
- **Pregnancy**
- **Obesity (BMI >30)**
- **GERD/reflux**
- **Bowel obstruction**
- **Delayed gastric emptying**: DM, opioids, gastroparesis

### Risk Mitigation
- **Rapid sequence intubation (RSI)**: Succinylcholine + cricoid pressure for emergencies
- **Premedication**: H2 blocker (ranitidine), PPI (omeprazole), antacid (sodium citrate)
- **Regional anesthesia**: If suitable; avoids airway manipulation

## Special Populations

### Elderly Patients
- **Reduced drug metabolism**: Smaller induction doses
- **Comorbidities**: Polypharmacy; evaluate each drug
- **Airway**: Often stiffer, reduced cervical mobility
- **Cognitive**: Screen for dementia (MMSE); delirium risk post-op

### Morbid Obesity (BMI >40)
- **Difficult intubation**: Shorter neck, reduced mouth opening
- **Aspiration risk**: Increased; RSI recommended
- **Apnea risk**: OSA common; CPAP pre-op beneficial
- **Positioning**: Supine difficult; bed strength required
- **IV access**: Central line may be needed

### Pregnant Patients
- **Aspiration risk**: ↑ (aortocaval compression); RSI standard
- **Airway edema**: Breasts enlarged, neck edema; smaller tubes
- **Anesthetic concerns**: Teratogenicity (first trimester), uteroplacental blood flow
- **Positioning**: Left lateral tilt after 20 weeks (uterocaval compression)`,
        mnemonics: [
          { text: "Continue: ACE/ARBs, beta-blockers, aspirin, anticonvulsants, steroids (CABAS)", explanation: "Pre-op meds" },
          { text: "Hold: diuretics, metformin (Cr >2), NSAIDs 3d, anticoagulants (timing varies) (DMNA)", explanation: "Hold timing" },
          { text: "NPO: solids 6-8h, breast milk 3h, clear liquids 2h", explanation: "Fasting guidelines" },
          { text: "Aspiration risk: pregnancy, obesity, emergency, GERD, delayed gastric emptying", explanation: "Risk factors" },
        ],
        keyPoints: [
          "Medication management critical: continue cardioprotectives, hold anticoagulants with timing",
          "NPO standards: solids 6-8h, clear liquids 2h; pregnant/obese → stricter",
          "Aspiration prophylaxis: RSI for emergency/high-risk; H2 blockers + antacid",
          "Beta-blockers, statins reduce perioperative cardiac events",
          "VTE prophylaxis: mechanical (SCDs) + pharmacologic (enoxaparin) for high-risk",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Preoperative Optimization", edition: "14th" },
          { book: "ASA Guideline for Preoperative Assessment", chapter: "Perioperative Management", edition: "2023" },
        ],
      },
      {
        layer: 3,
        slug: "preanesthetic-clinical-application",
        title: "Preanesthetic Assessment - Clinical Application",
        estimatedMinutes: 30,
        summary: "Risk stratification, ASA modification strategies, informed consent, special cases.",
        contentMd: `# Preanesthetic Assessment - Clinical Application

## Risk Stratification and Anesthetic Planning

### Low-Risk Patients (ASA I-II, Age <60, No Comorbidity)
- **Anesthetic options**: General, regional, local all suitable
- **Monitoring**: Standard ASA monitors sufficient
- **Preparation**: Routine lab only if indicated by history
- **Anesthetic technique**: Flexible; choose based on procedure

### Intermediate-Risk (ASA II-III, Age >60 or Comorbidity)
- **Evaluation**: ECG, CBC, basic metabolic panel if not done
- **Optimization**: Treat acute conditions (HTN, infection) before surgery
- **Anesthesia planning**: Avoid techniques with major hemodynamic changes
- **Monitoring**: Standard monitors + consider arterial line for major surgery
- **Medications**: Continue cardioprotectives; judge anticoagulant risk-benefit

### High-Risk (ASA III-IV, Recent MI/Stroke, Complex Comorbidity)
- **Preoperative tests**: ECG, troponin, echo if not recent
- **Optimization**: Treat HTN, optimize cardiac medications, ensure diabetic control
- **Delay surgery**: If urgent conditions present (decompensated HF, acute MI, unstable angina)
- **Regional anesthesia**: Preferred when possible (avoid intubation; maintain spontaneous ventilation)
- **Invasive monitoring**: Arterial line, CVP, or PAC for major surgery
- **Risk discussion**: Informed consent documenting cardiac risk

## Informed Consent Documentation

### Key Components
1. **Diagnosis and proposed procedure**
2. **Anesthetic technique planned** (general, regional, local, combined)
3. **Risks specific to patient** (based on ASA class, comorbidities)
4. **Alternatives** (e.g., regional vs general)
5. **Benefits** (cure, symptom relief)
6. **Patient understanding** confirmed
7. **Anesthesiologist and patient signature**

### High-Risk Consent Points
- Cardiac risk (MI, arrhythmia, death)
- Pulmonary risk (aspiration, pneumonia, airway issues)
- Neurologic risk (stroke, spinal injury)
- Infection, bleeding, organ failure

## Specific Risk Scenarios

### Recent MI (Within 3 Months)
- **Perioperative risk**: Very high (up to 30% reinfarction)
- **Elective surgery**: Delay ≥3 months if possible
- **Urgent surgery**: Proceed with:
  - Intensive monitoring (arterial line, CVP)
  - Maintain hemodynamic stability (beta-blockers, maintain HR 60-80)
  - Epidural anesthesia preferred
  - Aggressive cardiac support post-op

### Unstable Angina
- **Absolute contraindication** to elective surgery
- **Urgent surgery**: High-risk; requires cardiac optimization (nitrates, β-blockers, antiplatelet)
- **Preoperative troponin**: Document baseline
- **Anesthesia**: Avoid hypotension, tachycardia; maintain oxygen delivery

### Severe COPD (FEV1 <30%)
- **Perioperative risk**: Very high (pneumonia, respiratory failure)
- **Optimization**: Chest PT, bronchodilators, corticosteroids if indicated
- **Regional anesthesia**: Strongly preferred (avoids intubation)
- **Avoidances**: Histamine-releasing drugs (atracurium, mivacurium), NSAIDs
- **Post-op**: ICU admission likely; delayed extubation expected

### Uncontrolled Hypertension
- **DBP >110 mmHg**: Delay surgery; treat pre-op (risk of intraoperative hypertensive crisis, stroke)
- **Medication optimization**: Titrate antihypertensives to BP <160/100
- **Anesthesia**: Avoid sympathomimetics; use vasodilators PRN
- **Monitoring**: Frequent BP checks; arterial line for major surgery

### Severe Aortic Stenosis
- **Critical issue**: Fixed cardiac output; ↓ Afterload → myocardial ischemia
- **Anesthetic concerns**: Avoid hypotension (drop >20%), maintain preload
- **Avoidances**: Regional anesthesia (sympathetic blockade → hypotension), spinal block
- **Technique**: Slow IV induction (etomidate preferred); maintain hemodynamics meticulously
- **Monitoring**: Arterial line essential

## Special Populations

### Pediatric Patients
- **Airway**: Relatively larger head, anterior larynx; smaller tubes needed
- **Fluid requirement**: Higher (mL/kg); careful dehydration assessment
- **Induction**: IV vs inhalational (sevoflurane smooth in children)
- **Separation anxiety**: Premedication (midazolam) helpful; parental presence pre-induction

### Elderly Patients (>75 years)
- **Cognitive**: Screen for dementia; delirium risk post-op
- **Pharmacokinetics**: Reduced clearance; smaller induction doses
- **Airway**: Stiffer tissues, reduced cervical mobility
- **Cardiovascular**: Often multiple comorbidities; careful fluid management
- **Anesthesia**: Slower induction, reduced agent requirements, careful monitoring

### Diabetic Patients
- **Hyperglycemia**: Perioperative hyperglycemia ↑ infection risk; maintain glucose 140-180 mg/dL
- **Hypoglycemia**: Risk during fasting; check glucose pre-op; small dextrose IV if needed
- **Medication**: Hold metformin day of surgery (metformin 48h if Cr >2); continue insulin at reduced dose
- **Complications**: Autonomic neuropathy (gastroparesis, orthostatic HTN), renal disease, cardiac disease
- **Monitoring**: Frequent glucose checks perioperatively

### Obese Patients (BMI >30)
- **Difficult intubation**: Short neck, reduced mobility, large breasts
- **Aspiration risk**: ↑; RSI recommended even for elective
- **Anesthetic agents**: Lipophilic redistribution → prolonged duration; adjust doses
- **Positioning**: Operating table weight limit; supine position difficult
- **Monitoring**: Difficult BP/SpO2 measurement; consider alternative sites (forearm)
- **Regional**: Ultrasound-guided blocks preferred; landmark-based challenging`,
        mnemonics: [
          { text: "Recent MI (<3 mo): delay surgery if possible; if urgent → intensive monitoring + maintain hemodynamics", explanation: "High-risk scenario" },
          { text: "Uncontrolled HTN: delay surgery; treat pre-op to <160/100; avoid sympathomimetics", explanation: "Pre-op optimization" },
          { text: "Severe AS: avoid hypotension, maintain preload; avoid regional anesthesia (spinal/epidural)", explanation: "Anesthetic approach" },
          { text: "Difficult airway: Mallampati III-IV, limited neck mobility, obesity → prepare for difficult intubation", explanation: "Prediction" },
        ],
        keyPoints: [
          "Risk stratification guides anesthetic approach: low-risk flexible, high-risk intensive monitoring",
          "Recent MI/unstable angina: very high perioperative risk; delay elective if possible",
          "Severe AS: fixed cardiac output; maintain preload/afterload; avoid regional anesthesia",
          "Difficult airway: plan beforehand; have backup equipment/personnel ready",
          "Informed consent documents risks specific to patient's ASA class and comorbidities",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Preoperative Risk Evaluation", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Preoperative Assessment & Planning", edition: "6th" },
        ],
      },
      {
        layer: 4,
        slug: "preanesthetic-exam-prep",
        title: "Preanesthetic Assessment - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts, ASA classification, medication timing, risk scenarios.",
        contentMd: `# Preanesthetic Assessment - Exam Prep

## High-Yield Fact Tables

### ASA Classification
| Class | Definition | Mortality | Example |
|-------|-----------|-----------|---------|
| I | Healthy | <0.1% | Young, healthy, minor surgery |
| II | Mild disease | 0.1% | HTN, DM, mild asthma |
| III | Severe disease | 1% | Poorly controlled HTN, CAD |
| IV | Life-threatening | 6-7% | Recent MI, ESRD, unstable angina |
| V | Moribund | 20-50% | Aortic rupture, massive PE |
| E (Emergency) | Adds risk multiplier | 2-3× baseline | Emergencies have worse outcomes |

### Mallampati Airway Classification
| Class | Visible Structures | Difficulty | Intubation |
|-------|------------------|-----------|----------|
| I | Soft palate, uvula, pillars | Easy | Direct laryngoscopy good |
| II | Soft palate, uvula; pillars hidden | Mild | Usually successful |
| III | Soft palate, uvula visible | Moderate | May need assistance |
| IV | Only hard palate | Difficult | Prepare for difficult airway |

## Medication Management Summary

### Continue Perioperatively
- ACE-I/ARBs, β-blockers, aspirin, anticonvulsants, steroids, thyroid replacement

### Hold Day of Surgery
- Diuretics, metformin, NSAIDs (3 days), anticoagulants (timing varies)

### Anticoagulation Timing (High-Yield)
- **Warfarin**: Hold 3-5 days; INR <2 day before
- **Apixaban/Rivaroxaban**: Hold 24-48h (depending on renal function)
- **Heparin**: Can hold day of surgery
- **Aspirin**: Continue (if CAD); hold 7 days if bleeding risk

### NPO Guidelines (ASA)
- Solids: 6-8h
- Breast milk: 3h
- Clear liquids: 2h

## Common Exam Question Patterns

- **Patient ASA I, age 45, elective → labs needed?** → Routine labs not necessary; ECG if indicated
- **ASA III with uncontrolled HTN, SBP 180; elective surgery → proceed?** → No; delay; treat HTN first
- **Recent MI (2 months), now urgent surgery → approach?** → Intensive monitoring (arterial line), maintain hemodynamics, consider regional
- **Mallampati IV + BMI 40 + neck mobility limited → preparation?** → Difficult airway cart; consider awake fiberoptic intubation
- **On warfarin (INR 3), surgery scheduled → management?** → Hold 3-5 days; check INR <2 day before
- **GERD + obesity + emergency → aspiration risk?** → High; use RSI (cricoid pressure + succinylcholine)
- **On metformin, creatinine 3 → hold timing?** → Hold 48 hours (lactic acidosis risk with contrast)
- **Diabetic, morning surgery, on insulin → glucose management?** → Hold morning insulin; check pre-op glucose; small dextrose IV if needed

## Risk Stratification Algorithms

**Lee Revised Cardiac Risk Index (RCRI):**
- Points: 1 for high-risk surgery, CAD, HF, stroke, insulin use, Cr >2
- Score 0 = <1% risk, 1 = 1%, 2 = 7%, ≥3 = >11%

**ASA Physical Status:**
- I-II = Low risk (<1% major complication)
- III = Intermediate (1-5% risk)
- IV = High (>5% risk)
- V = Moribund (>50% mortality)

## Difficult Airway Predictors

**LEMON Mnemonic:**
- **L**ook externally: Enlarged tongue, small mouth, facial abnormality
- **E**valuate Mallampati: Score III-IV → difficult
- **M**easure: Thyromental distance <6 cm, interincisor <3 cm → difficult
- **O**besity: BMI >40 → airway edema
- **N**eck mobility: Limited extension (rheumatoid arthritis, ankylosing spondylitis) → difficult

**STOP-BANG (OSA Screening):**
- **S**noring, **T**iredness daytime, **O**bserved apnea, **B**P elevated, **B**MI >35, **A**ge >50, **N**eck >40cm, **G**ender male
- ≥3 positive → high OSA probability; perioperative CPAP, opioid caution`,
        mnemonics: [
          { text: "ASA I-II low, III intermediate, IV high, V moribund; E (emergency) multiplies risk", explanation: "Classification" },
          { text: "Mallampati I-II easy, III moderate, IV difficult airway", explanation: "Airway prediction" },
          { text: "Continue: ACE/ARB/β-blocker/aspirin/anticonvulsant/steroid (CABAS)", explanation: "Perioperative meds" },
          { text: "NPO: solids 6-8h, breast milk 3h, clear liquids 2h", explanation: "Fasting" },
          { text: "LEMON: Look, Evaluate Mallampati, Measure (thyromental/interincisor), Obesity, Neck mobility", explanation: "Difficult airway prediction" },
        ],
        keyPoints: [
          "ASA classification critical for perioperative risk estimation",
          "Mallampati III-IV and LEMON features predict difficult intubation",
          "Continue cardioprotectives (ACE-I, β-blockers, aspirin); hold anticoagulants with timing",
          "Anticoagulation timing varies: warfarin (3-5d), DOACs (24-48h), aspirin (continue)",
          "Recent MI/unstable angina: very high risk; delay elective; if urgent, intensive monitoring",
          "NPO 2-8h depending on food type",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Preoperative Assessment", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Preoperative Evaluation", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "preanesthetic-active-recall",
        title: "Preanesthetic Assessment - Active Recall",
        estimatedMinutes: 15,
        summary: "10 clinical cases testing ASA classification, risk stratification, medication management.",
        contentMd: `# Preanesthetic Assessment - Active Recall

## Q1: ASA Classification
**Q: 65-year-old with controlled HTN, DM on metformin, presenting for cataract surgery. ASA class?**

A: **ASA II** (mild systemic disease, no functional limitation). HTN controlled on medication + DM controlled → no symptoms of disease.

## Q2: Recent MI Risk Assessment
**Q: 58-year-old had MI 8 weeks ago, now needs hernia repair (urgent but not emergent). Proceed with elective surgery?**

A: **No; delay if possible.** Perioperative reinfarction risk highest in first 3 months post-MI. If absolutely urgent: intensive monitoring (arterial line, CVP), maintain hemodynamics strictly, consider regional anesthesia (epidural avoids intubation), aggressive cardiac support post-op. Ideally delay ≥3 months.

## Q3: Medication Management - Anticoagulation
**Q: Patient on warfarin (INR 2.5), needs elective surgery. Management?**

A: **Hold warfarin 3-5 days pre-op.** Check INR day before surgery; must be <2 to proceed safely. If INR >2, give vitamin K 2.5-5 mg PO (corrects in 12-24h) or FFP if urgent. No bridging heparin needed for routine elective surgery.

## Q4: Difficult Airway Prediction
**Q: 68-year-old, BMI 42, Mallampati Class III, thyromental distance 5 cm. Prepare for?**

A: **Difficult intubation likely (LEMON positive for multiple factors).** Preparation: (1) Difficult airway cart bedside, (2) Video laryngoscope ready, (3) Backup plan: awake fiberoptic intubation (safest), (4) Senior anesthesiologist present, (5) Emergency airway setup (cricothyrotomy tray).

## Q5: NPO Violation - Aspiration Risk
**Q: 45-year-old arrived NPO since midnight (8 hours), but ate crackers 1 hour pre-op; now due for scheduled surgery. Proceed?**

A: **DELAY surgery 6-8 hours.** Aspiration risk increased with recent food. Alternatively, if can't delay: consider RSI (cricoid pressure + succinylcholine); H2 blocker (ranitidine) + antacid (sodium citrate) pre-op; rapid intubation. Discuss risk/benefit with patient & surgeon.

## Q6: Diabetes Perioperative Management
**Q: Type 2 DM patient on insulin, fasting morning of surgery, glucose 82 mg/dL. Insulin management?**

A: **Hold morning insulin dose.** Risk of hypoglycemia during fasting outweighs benefit of tight glucose. Intraop: check glucose Q30-60 min; maintain 140-180 mg/dL (reduce infection risk). Post-op: resume insulin once eating. If pre-op glucose >200 mg/dL, small insulin dose may be given.

## Q7: Hypertension Risk Assessment
**Q: Patient with uncontrolled HTN (SBP 190, DBP 115) scheduled for elective hernia repair. Proceed?**

A: **Absolutely not; delay.** Risk of intraoperative hypertensive crisis, stroke, MI. **Management**: (1) Continue/optimize antihypertensives (add agent if needed), (2) Target BP <160/100 before elective surgery, (3) Reschedule in 1-2 weeks, (4) Check for secondary HTN causes (pheo, renal artery stenosis), (5) If surgery truly urgent, intensive monitoring (arterial line) with vasodilator (nitroprusside, nicardipine) available.

## Q8: Severe Aortic Stenosis - Anesthetic Approach
**Q: Severe AS (gradient >70 mmHg), ASA IV, needs urgent non-cardiac surgery. Anesthetic choice?**

A: **Regional anesthesia preferred** (avoids intubation, maintains spontaneous ventilation). If general needed: (1) **Avoid hypotension** (drop >20% dangerous; ischemia from fixed CO), (2) **Avoid regional blocks** (sympathetic blockade → hypotension), (3) Slow IV induction (etomidate preferred; avoids propofol hypotension), (4) **Maintain preload** (fluid boluses), (5) **Arterial line essential**, (6) Avoid tachycardia (increases O2 demand). High-risk scenario; requires experienced team.

## Q9: Obesity and Aspiration Risk
**Q: BMI 48 patient, normal airway exam, GERD symptoms, scheduled for gallbladder removal (elective). Aspiration precautions?**

A: **Yes; obesity + GERD = high aspiration risk.** Management: (1) RSI with cricoid pressure standard (even though elective), (2) H2 blocker (ranitidine) + PPI (omeprazole) + antacid (sodium citrate) pre-op, (3) Succinylcholine 1.5 mg/kg for rapid paralysis, (4) Smaller endotracheal tube (tube edema likely), (5) Head-up position pre-op (reduce gastric reflux).

## Q10: Complex Risk Scenario - Prioritization
**Q: 72-year-old, ASA IV: HTN (uncontrolled, SBP 180), CAD (MI 2 years ago), COPD (FEV1 28%), on warfarin for AFib (INR 2.8). Needs urgent (not emergent) abdominal aortic aneurysm repair. Risk stratification and pre-op priorities?**

A: **VERY HIGH RISK (ASA IV)** - Multiple organ system involvement. **Pre-op priorities in order**: (1) **Optimize HTN** (target <160/100; add agent if needed; reduces stroke/MI risk), (2) **Check INR** (2.8 reasonable for AFib; proceed without correction; document), (3) **Assess COPD severity** (FEV1 28% = very severe; expect prolonged mechanical ventilation post-op; ICU bed reserved), (4) **Cardiac optimization**: Continue β-blockers, ACE-I, aspirin; ensure not in acute coronary syndrome (troponin, ECG), (5) **Informed consent** documenting high perioperative mortality (10-20%), stroke, MI, respiratory failure risks. **Anesthesia**: Regional (epidural) if feasible; if general, intensive monitoring (arterial, CVP), careful hemodynamic management, ICU admission pre-arranged. **Key point**: This patient needs multidisciplinary team (cardiology, pulmonology, surgery, anesthesia) discussion before proceeding.`,
        mnemonics: [
          { text: "ASA I-II = low risk, III = moderate, IV = high, V = moribund", explanation: "Risk" },
          { text: "Recent MI <3 mo = very high risk; delay if possible", explanation: "Temporal risk" },
          { text: "LEMON predicts difficult intubation: Look, Evaluate (Mallampati), Measure, Obesity, Neck", explanation: "Airway" },
          { text: "Continue ACE/ARB/β-blocker/aspirin; hold metformin (Cr >2), warfarin (3-5d), NSAIDs (3d)", explanation: "Medication timing" },
          { text: "Severe AS: maintain preload/afterload; avoid hypotension >20%; avoid regional (sympathetic)", explanation: "Critical condition" },
        ],
        keyPoints: [
          "ASA classification estimates perioperative risk; class E (emergency) adds significant risk",
          "Mallampati III-IV + LEMON features → prepare for difficult intubation",
          "Recent MI, unstable angina, uncontrolled HTN → delay elective surgery if possible",
          "Anticoagulation management critical: warfarin (3-5d hold), DOACs (24-48h), aspirin (continue)",
          "Aspiration risk: pregnancy, obesity, GERD, emergency; use RSI (cricoid pressure + succinylcholine)",
          "Severe AS: maintain cardiac output; avoid hypotension, tachycardia, regional anesthesia",
          "Complex patients: multidisciplinary team approach; detailed informed consent",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Preoperative Assessment & Risk", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Preoperative Evaluation", edition: "6th" },
        ],
      },
    ],
  },
];
