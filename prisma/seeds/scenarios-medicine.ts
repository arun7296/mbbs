// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for Internal Medicine (IM)
// Starting with 5 high-yield topics from Cardiology, Pulmonology, GI, Nephro, Endocrine
// ---------------------------------------------------------------------------

export const medicineScenarios = [
  // ─── 1. Ischemic Heart Disease & MI ────────────────────────────────────
  {
    topicCode: "IM-MOD-01-TOP-01",
    scenario: {
      patientAge: 55,
      patientSex: "Male",
      patientOccupation: "Auto-rickshaw driver",
      patientLocation: "Varanasi, UP",
      chiefComplaint: "Severe chest pain for 2 hours with sweating",
      historyOfPresent: `
- Onset: Sudden onset 2 hours ago while driving auto-rickshaw
- Character: Crushing, heavy pressure-like pain in center of chest
- Location: Retrosternal, central chest
- Radiation: Radiates to left arm and jaw
- Severity: 9/10 on pain scale
- Timing: Constant since onset, not relieving
- Aggravating: Worsened slightly with exertion (tried walking)
- Relieving: No relief with rest; took antacid — no improvement
- Associated: Profuse sweating (diaphoresis), nausea, feeling of impending doom, mild breathlessness
      `.trim(),
      pastHistory: "Known hypertensive for 5 years — irregular medication compliance. No diabetes. No previous cardiac events. No surgeries.",
      familyHistory: "Father died of 'heart attack' at age 52. Mother has diabetes mellitus type 2. Elder brother has hypertension.",
      socialHistory: "Smokes 15 bidis/day for 25 years. Occasional alcohol (country liquor on weekends). Diet: High-oil fried food, tea with sugar 6 times/day. No regular exercise. Sedentary occupation (driving).",
      drugHistory: "Amlodipine 5mg — takes irregularly. No other medications. No known drug allergies.",
      vitals: { pulse: 92, bp: "160/100", temp: 37.1, rr: 22, spo2: 94 },
      generalExam: `
- General appearance: Anxious, distressed, diaphoretic, clutching chest
- Pallor: Mild pallor present
- Icterus: Absent
- Cyanosis: Mild peripheral cyanosis
- Clubbing: Absent
- Edema: No pedal edema
- JVP: Normal
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Apex beat in 5th ICS, mid-clavicular line — normal position",
          heart_sounds: "S1, S2 heard. S4 gallop present. No S3.",
          murmurs: "No murmurs detected",
          peripheral_pulses: "All peripheral pulses palpable. Bilateral radial pulses equal.",
          blood_pressure: "Right arm: 160/100 mmHg, Left arm: 155/98 mmHg",
        },
        respiratory: {
          chest_inspection: "Bilateral equal chest movements, tachypneic",
          trachea: "Trachea central",
          percussion: "Resonant bilaterally",
          auscultation_lungs: "Bilateral fine basal crepitations — mild pulmonary congestion",
          vocal_resonance: "Normal vocal resonance bilaterally",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft, non-distended",
          palpation_superficial: "No tenderness",
          palpation_deep: "No organomegaly on deep palpation",
          liver_palpation: "Liver not palpable",
          spleen_palpation: "Spleen not palpable",
          bowel_sounds: "Normal bowel sounds",
        },
        neurological: {
          consciousness: "GCS 15/15 — fully conscious and oriented",
          cranial_nerves: "All cranial nerves grossly intact",
          reflexes: "Deep tendon reflexes normal and symmetrical",
          plantar: "Plantar reflex — flexor bilaterally (normal)",
        },
      },
      availableInvestigations: [
        { id: "ecg", name: "12-lead ECG", cost: 200, turnaround: "5 min", category: "Cardiac", result: "ST elevation in leads II, III, aVF (2-3mm). Reciprocal ST depression in I, aVL. Normal sinus rhythm at 92 bpm.", isAbnormal: true, interpretation: "ST elevation in inferior leads suggests Inferior Wall STEMI. Pattern consistent with RCA occlusion.", isEssential: true },
        { id: "trop_i", name: "Troponin I (Rapid)", cost: 800, turnaround: "20 min", category: "Cardiac", result: "Troponin I: 4.8 ng/mL (Normal: <0.04 ng/mL)", isAbnormal: true, interpretation: "Markedly elevated — confirms acute myocardial injury. >100x upper limit of normal.", isEssential: true },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 13.2 g/dL, WBC: 12,400/μL (mild leukocytosis), Platelets: 2.1 lakhs", isAbnormal: false, interpretation: "Mild stress leukocytosis — expected in acute MI. No anemia.", isEssential: false },
        { id: "rbs", name: "Random Blood Sugar", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "RBS: 156 mg/dL", isAbnormal: true, interpretation: "Stress hyperglycemia — common in acute MI. Needs follow-up fasting glucose.", isEssential: false },
        { id: "lipid", name: "Lipid Profile", cost: 500, turnaround: "2 hours", category: "Biochemistry", result: "Total Cholesterol: 268 mg/dL, LDL: 182 mg/dL, HDL: 32 mg/dL, TG: 210 mg/dL", isAbnormal: true, interpretation: "Severe dyslipidemia — major modifiable risk factor. LDL well above target.", isEssential: false },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 32 mg/dL, Creatinine: 1.0 mg/dL, Na: 140 mEq/L, K: 4.2 mEq/L", isAbnormal: false, interpretation: "Normal renal function. Potassium normal — safe for ACE inhibitor.", isEssential: true },
        { id: "chest_xray", name: "Chest X-ray (portable)", cost: 300, turnaround: "15 min", category: "Imaging", result: "Mild upper lobe venous distension. No cardiomegaly. No pleural effusion. Lung fields show mild pulmonary congestion.", isAbnormal: true, interpretation: "Early signs of pulmonary congestion from LV dysfunction post-MI.", isEssential: false },
        { id: "echo", name: "2D Echocardiography", cost: 2000, turnaround: "30 min", category: "Cardiac", result: "Regional wall motion abnormality in inferior wall — hypokinesia. LVEF estimated 45%. Mild MR. No pericardial effusion.", isAbnormal: true, interpretation: "Confirms inferior wall involvement with reduced EF. Mild mitral regurgitation likely from papillary muscle dysfunction.", isEssential: false },
        { id: "ck_mb", name: "CK-MB", cost: 600, turnaround: "1 hour", category: "Cardiac", result: "CK-MB: 86 U/L (Normal: <25 U/L)", isAbnormal: true, interpretation: "Elevated — supports diagnosis of acute MI alongside troponin.", isEssential: false },
        { id: "coag", name: "Coagulation Profile (PT/INR)", cost: 400, turnaround: "1 hour", category: "Hematology", result: "PT: 12.8 sec, INR: 1.0. aPTT: 28 sec", isAbnormal: false, interpretation: "Normal coagulation. Baseline before anticoagulation therapy.", isEssential: false },
      ],
      correctDiagnosis: "Acute Inferior Wall ST-Elevation Myocardial Infarction (STEMI)",
      differentials: [
        { diagnosis: "Unstable Angina", likelihood: "HIGH", reasoning: "Similar presentation but ECG would show ST depression/T wave changes without elevation. Troponin would be normal or mildly elevated." },
        { diagnosis: "Aortic Dissection", likelihood: "MEDIUM", reasoning: "Chest pain with tearing quality, BP difference between arms >20mmHg. Our patient has only 5mmHg difference and pain is crushing, not tearing." },
        { diagnosis: "Pulmonary Embolism", likelihood: "LOW", reasoning: "Can cause chest pain with dyspnea. ECG shows S1Q3T3 pattern, not ST elevation in inferior leads. No risk factors like DVT." },
        { diagnosis: "Acute Pericarditis", likelihood: "LOW", reasoning: "Pain worse on lying down, relieved by sitting forward. ECG shows diffuse ST elevation, not territorial. Friction rub on auscultation." },
      ],
      diagnosticReasoning: "55-year-old male with multiple risk factors (smoking, hypertension, dyslipidemia, family history) presenting with acute crushing retrosternal chest pain radiating to left arm and jaw with diaphoresis. ECG shows ST elevation in leads II, III, aVF (inferior leads) with reciprocal changes in I, aVL. Troponin I markedly elevated at 4.8 ng/mL. This is a classic presentation of acute inferior wall STEMI, most likely from right coronary artery occlusion. The S4 gallop and basal crepitations suggest early LV dysfunction.",
      managementPlan: {
        immediateActions: [
          { action: "Start oxygen via nasal prongs at 4L/min", reasoning: "SpO2 is 94% — needs supplementation to maintain >95%", priority: "STAT" },
          { action: "Chew Aspirin 325mg immediately", reasoning: "Antiplatelet therapy is the first drug given in suspected MI — reduces mortality by 23%", priority: "STAT" },
          { action: "Sublingual Nitroglycerin (if BP permits)", reasoning: "Reduces preload and chest pain. BP is 160/100 — safe to give. Contraindicated if SBP <90 or RV infarction suspected.", priority: "STAT" },
          { action: "IV Morphine for pain if not relieved by NTG", reasoning: "Reduces pain, anxiety, and sympathetic drive which reduces myocardial oxygen demand", priority: "URGENT" },
          { action: "Continuous cardiac monitoring", reasoning: "Inferior STEMI has high risk of bradycardia (RCA supplies SA/AV node) and heart block", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Antiplatelet (Dual)", examples: ["Aspirin 325mg stat then 75mg daily", "Clopidogrel 300mg loading then 75mg daily"], route: "Oral", duration: "At least 12 months (DAPT)", reasoning: "Dual antiplatelet therapy prevents further platelet aggregation at the thrombus site", contraindications: ["Active GI bleeding", "Severe thrombocytopenia"], indianContext: "Available in Jan Aushadhi stores. Aspirin 75mg at ₹0.50/tablet, Clopidogrel at ₹3/tablet." },
          { drugClass: "Anticoagulant", examples: ["Enoxaparin 1mg/kg SC BD", "Unfractionated Heparin IV infusion"], route: "SC/IV", duration: "48-72 hours or until PCI", reasoning: "Prevents thrombus propagation and new clot formation", contraindications: ["Active bleeding", "Platelet count <50,000"], indianContext: "Enoxaparin prefilled syringes available at ₹200-400 per dose." },
          { drugClass: "Beta-blocker", examples: ["Metoprolol 25mg BD"], route: "Oral", duration: "Long-term", reasoning: "Reduces heart rate, BP, and myocardial oxygen demand. Improves long-term survival post-MI", contraindications: ["Heart block", "Severe bradycardia", "Cardiogenic shock", "Severe asthma"], indianContext: "Metoprolol 25mg at ₹1-2/tablet in generic stores." },
          { drugClass: "ACE Inhibitor", examples: ["Ramipril 2.5mg OD, uptitrate"], route: "Oral", duration: "Lifelong", reasoning: "Prevents LV remodeling post-MI. Reduces mortality. Start within 24 hours if BP stable.", contraindications: ["Bilateral renal artery stenosis", "Hyperkalemia", "Pregnancy"], indianContext: "Ramipril 2.5mg at ₹2-3/tablet." },
          { drugClass: "Statin (High-intensity)", examples: ["Atorvastatin 80mg at night"], route: "Oral", duration: "Lifelong", reasoning: "Plaque stabilization and LDL reduction. Patient has LDL 182 mg/dL — target <70 mg/dL.", contraindications: ["Active liver disease", "Myopathy"], indianContext: "Atorvastatin 80mg at ₹8-15/tablet." },
        ],
        nonPharmacological: [
          { intervention: "Strict bed rest with head elevation 30°", reasoning: "Reduces myocardial oxygen demand in acute phase", duration: "24-48 hours" },
          { intervention: "NPO initially, then light diet", reasoning: "Risk of aspiration if emergency intervention needed", duration: "First 12 hours" },
        ],
        monitoring: [
          { parameter: "Continuous ECG monitoring", frequency: "Continuous", target: "Resolution of ST elevation, detect arrhythmias", escalation: "If VT/VF — defibrillation. If complete heart block — temporary pacing." },
          { parameter: "Serial Troponin levels", frequency: "Every 6 hours x 3", target: "Peak and trend of troponin", escalation: "If rising — may indicate ongoing ischemia or reinfarction" },
          { parameter: "Blood pressure and heart rate", frequency: "Every 15 min initially", target: "SBP 100-140, HR 60-80", escalation: "If hypotension + bradycardia → suspect RV infarction → IV fluids, avoid nitrates" },
        ],
        lifestyle: {
          dos: ["Low salt diet (<5g/day)", "Mediterranean-style diet", "Regular walking after 1 week (cardiac rehab)", "Daily medications without fail"],
          donts: ["Complete smoking cessation — MOST important lifestyle change", "No alcohol", "No heavy lifting for 6 weeks", "Avoid stress as much as possible"],
          indianSpecific: ["Switch from bidi/cigarette to nothing — betel nut is NOT a substitute", "Reduce oil in cooking — use mustard oil instead of vanaspati", "Daily 30-min walk after cardiac rehab clearance", "Yoga after 4 weeks — avoid inverted poses"],
        },
        followUp: {
          when: "1 week, then monthly for 6 months, then every 3 months",
          what: ["Repeat ECG", "Lipid profile at 6 weeks", "Echo at 6 weeks to assess LV function", "Stress test at 6 weeks if not done PCI", "HbA1c to rule out diabetes"],
        },
        referral: {
          needed: true,
          to: "Cardiologist / Cath lab for primary PCI evaluation",
          urgency: "IMMEDIATE — door-to-balloon time should be <90 minutes",
        },
      },
      redFlags: [
        { flag: "Hypotension with bradycardia in inferior MI", action: "Suspect RV infarction — give IV fluids, AVOID nitrates and diuretics", urgency: "IMMEDIATE" },
        { flag: "New onset complete heart block", action: "RCA supplies AV node — may need temporary pacing wire", urgency: "IMMEDIATE" },
        { flag: "Persistent chest pain despite treatment", action: "Consider failed reperfusion — escalate to rescue PCI", urgency: "URGENT" },
        { flag: "Sudden hemodynamic collapse", action: "Consider mechanical complications — VSD, papillary muscle rupture, free wall rupture", urgency: "IMMEDIATE" },
      ],
      keyLearningPoints: [
        "Inferior wall MI shows ST elevation in leads II, III, aVF with reciprocal changes in I, aVL",
        "Right coronary artery supplies the inferior wall AND SA/AV node — watch for bradycardia and heart block",
        "Aspirin is the FIRST drug given in suspected MI — chewed, not swallowed, for rapid absorption",
        "Door-to-balloon time for primary PCI should be <90 minutes — time is myocardium",
        "AVOID nitrates in RV infarction — they reduce preload which worsens RV output",
        "Smoking cessation is the single most impactful lifestyle modification for secondary prevention",
        "All post-MI patients need: Aspirin + P2Y12 inhibitor + Beta-blocker + ACE inhibitor + Statin (mnemonic: ABCAS)",
      ],
      commonMistakes: [
        "Missing RV infarction in inferior MI — always do right-sided ECG (V4R) in inferior STEMI",
        "Giving nitrates to a patient with RV infarction — causes dangerous hypotension",
        "Delaying aspirin while waiting for troponin results — give aspirin on clinical suspicion",
        "Not checking for aortic dissection before starting anticoagulation — dissection is a contraindication",
        "Forgetting to counsel on smoking cessation — the most important secondary prevention measure",
      ],
      relevantHistoryQs: ["onset", "character", "location", "radiation", "severity", "associated", "smoking", "fam_cardiac", "prev_illness", "current_meds"],
      relevantExamIds: ["heart_sounds", "peripheral_pulses", "blood_pressure", "auscultation_lungs", "jvp", "edema", "general_appearance"],
      difficulty: "MODERATE",
      estimatedMinutes: 20,
      subjectTags: ["IM", "PH"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "IM1.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 2. Pneumonia ──────────────────────────────────────────────────────
  {
    topicCode: "IM-MOD-02-TOP-03",
    scenario: {
      patientAge: 35,
      patientSex: "Male",
      patientOccupation: "Construction worker",
      patientLocation: "Rural Jharkhand",
      chiefComplaint: "High fever with cough and difficulty breathing for 3 days",
      historyOfPresent: `
- Onset: Gradual onset 3 days ago, started with mild cough and low-grade fever
- Character: Cough initially dry, now productive with rusty/yellowish sputum
- Location: Right-sided chest pain, worse on deep breathing (pleuritic)
- Severity: Fever 103°F at home, rigors and chills present
- Timing: Fever higher in evenings, cough worsening progressively
- Aggravating: Deep breathing and coughing worsen chest pain
- Relieving: Paracetamol gives temporary relief of fever only
- Associated: Loss of appetite, body ache, mild headache, no hemoptysis
      `.trim(),
      pastHistory: "No significant past illness. No tuberculosis. No diabetes. No hospitalizations.",
      familyHistory: "No significant family history. No TB contacts.",
      socialHistory: "No smoking. Occasional alcohol. Works at construction site — exposed to dust. Lives in a small house with 5 family members. Poor ventilation.",
      drugHistory: "Took Paracetamol 500mg from local pharmacy. No other medications. No allergies.",
      vitals: { pulse: 110, bp: "100/70", temp: 39.5, rr: 28, spo2: 91 },
      generalExam: `
- General appearance: Acutely ill, febrile, tachypneic
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Mild central cyanosis of lips
- Clubbing: Absent
- Edema: No pedal edema
- JVP: Normal
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. Tachycardic. No murmurs.",
          peripheral_pulses: "All pulses palpable, tachycardic",
        },
        respiratory: {
          chest_inspection: "Right side moves less than left (reduced expansion)",
          trachea: "Trachea central",
          percussion: "Dull note on right lower zone. Rest resonant.",
          auscultation_lungs: "Bronchial breath sounds in right lower zone. Coarse crepitations. Reduced air entry on right base.",
          vocal_resonance: "Increased vocal resonance in right lower zone — aegophony present",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft",
          palpation_superficial: "No tenderness",
          liver_palpation: "Liver not palpable",
          spleen_palpation: "Spleen not palpable",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "GCS 15/15 — alert but appears ill",
          reflexes: "Normal",
        },
      },
      availableInvestigations: [
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 12.8 g/dL, WBC: 18,600/μL (neutrophilic leukocytosis — 82% neutrophils), Platelets: 2.8 lakhs", isAbnormal: true, interpretation: "Marked neutrophilic leukocytosis — strongly suggests bacterial infection.", isEssential: true },
        { id: "chest_xray", name: "Chest X-ray PA view", cost: 200, turnaround: "15 min", category: "Imaging", result: "Right lower lobe consolidation with air bronchogram. No pleural effusion. No cavitation. Heart size normal.", isAbnormal: true, interpretation: "Lobar consolidation in right lower lobe — classic community-acquired pneumonia pattern.", isEssential: true },
        { id: "sputum", name: "Sputum Gram Stain & Culture", cost: 500, turnaround: "48 hours", category: "Microbiology", result: "Gram-positive diplococci in abundance. Culture pending — likely Streptococcus pneumoniae.", isAbnormal: true, interpretation: "Gram-positive diplococci = Pneumococcus (Streptococcus pneumoniae) — most common cause of community-acquired pneumonia.", isEssential: true },
        { id: "rbs", name: "Random Blood Sugar", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "RBS: 128 mg/dL", isAbnormal: false, interpretation: "Normal — rules out undiagnosed diabetes.", isEssential: false },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 45 mg/dL, Creatinine: 1.2 mg/dL", isAbnormal: true, interpretation: "Mildly elevated urea — likely pre-renal from dehydration and sepsis.", isEssential: true },
        { id: "blood_culture", name: "Blood Culture", cost: 600, turnaround: "72 hours", category: "Microbiology", result: "Pending — takes 48-72 hours", isAbnormal: false, interpretation: "Important to collect before starting antibiotics to identify organism.", isEssential: false },
        { id: "crp", name: "C-Reactive Protein", cost: 400, turnaround: "2 hours", category: "Biochemistry", result: "CRP: 186 mg/L (Normal: <5 mg/L)", isAbnormal: true, interpretation: "Markedly elevated — consistent with significant bacterial infection.", isEssential: false },
        { id: "abg", name: "Arterial Blood Gas", cost: 800, turnaround: "15 min", category: "Biochemistry", result: "pH: 7.38, PaO2: 58 mmHg, PaCO2: 32 mmHg, HCO3: 22 mEq/L, SaO2: 90%", isAbnormal: true, interpretation: "Type 1 respiratory failure (hypoxemia with compensatory hyperventilation). PaO2 <60 indicates severe pneumonia.", isEssential: true },
        { id: "procalcitonin", name: "Procalcitonin", cost: 1200, turnaround: "2 hours", category: "Biochemistry", result: "Procalcitonin: 4.2 ng/mL (Normal: <0.5)", isAbnormal: true, interpretation: "Elevated — supports bacterial etiology over viral. Can guide antibiotic duration.", isEssential: false },
      ],
      correctDiagnosis: "Community-Acquired Pneumonia (Right Lower Lobe) — Severe, likely Pneumococcal",
      differentials: [
        { diagnosis: "Pulmonary Tuberculosis", likelihood: "MEDIUM", reasoning: "Common in Indian setting. However, acute onset (3 days) with lobar consolidation favors bacterial pneumonia over TB which is typically chronic." },
        { diagnosis: "Lung Abscess", likelihood: "LOW", reasoning: "Would show cavity with air-fluid level on X-ray. No cavitation seen. Typically follows aspiration." },
        { diagnosis: "COVID-19 Pneumonia", likelihood: "MEDIUM", reasoning: "Can present similarly. However, rusty sputum with lobar consolidation and gram-positive diplococci strongly favor bacterial." },
        { diagnosis: "Pleural Effusion with Empyema", likelihood: "LOW", reasoning: "No effusion on chest X-ray. Dull note is from consolidation, not fluid." },
      ],
      diagnosticReasoning: "35-year-old male with acute onset (3 days) of high fever, productive cough with rusty sputum, and pleuritic right-sided chest pain. Examination shows right lower zone dullness, bronchial breathing, and increased vocal resonance — classic signs of consolidation. Chest X-ray confirms right lower lobe consolidation with air bronchogram. Sputum shows gram-positive diplococci (Pneumococcus). CURB-65 score = 2 (Confusion-0, Urea>7=1, RR>30=0 but close, BP systolic<90=0 but borderline, Age<65=0) — but SpO2 91% and PaO2 58 make this SEVERE. Needs inpatient treatment.",
      managementPlan: {
        immediateActions: [
          { action: "Start oxygen via face mask at 6-8 L/min to maintain SpO2 >94%", reasoning: "PaO2 is 58 mmHg — type 1 respiratory failure. Immediate oxygenation needed.", priority: "STAT" },
          { action: "Establish IV access and start IV Normal Saline", reasoning: "Patient is dehydrated (tachycardia, low-normal BP, elevated urea). Fluid resuscitation needed.", priority: "STAT" },
          { action: "Collect blood culture before starting antibiotics", reasoning: "Blood cultures have best yield before antibiotics. 2 sets from different sites.", priority: "URGENT" },
          { action: "Start empirical IV antibiotics immediately", reasoning: "In severe CAP, every hour delay in antibiotics increases mortality by 7.6%", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Beta-lactam antibiotic (IV)", examples: ["Ceftriaxone 2g IV OD", "Amoxicillin-Clavulanate 1.2g IV TDS"], route: "IV", duration: "5-7 days (switch to oral when improving)", reasoning: "Covers Pneumococcus and other common CAP organisms. Ceftriaxone is preferred for severe CAP.", contraindications: ["Penicillin anaphylaxis — use Respiratory Fluoroquinolone instead"], indianContext: "Ceftriaxone 1g injection available at ₹30-50 in Jan Aushadhi. Total IV course cost ~₹200-350." },
          { drugClass: "Macrolide antibiotic (add for atypical coverage)", examples: ["Azithromycin 500mg IV/PO OD"], route: "IV then Oral", duration: "3-5 days", reasoning: "Combination therapy (beta-lactam + macrolide) covers atypical organisms and has proven mortality benefit in severe CAP.", contraindications: ["QT prolongation"], indianContext: "Azithromycin 500mg tablet at ₹15-20 for generic." },
          { drugClass: "Antipyretic", examples: ["Paracetamol 1g IV/PO QID PRN"], route: "IV/Oral", duration: "Until fever resolves", reasoning: "Symptomatic relief. Reduces metabolic demand.", contraindications: ["Severe liver disease"], indianContext: "Paracetamol widely available at ₹1-2/tablet." },
        ],
        nonPharmacological: [
          { intervention: "Chest physiotherapy and incentive spirometry", reasoning: "Helps with mucus clearance and prevents atelectasis", duration: "Throughout admission" },
          { intervention: "Head elevation at 30-45 degrees", reasoning: "Improves respiratory mechanics and reduces aspiration risk", duration: "Continuous" },
        ],
        monitoring: [
          { parameter: "SpO2 and respiratory rate", frequency: "Every 2 hours", target: "SpO2 >94%, RR <24", escalation: "If SpO2 drops <90% despite O2 — consider NIV or ICU transfer" },
          { parameter: "Temperature chart", frequency: "Every 4 hours", target: "Defervescence by 48-72 hours", escalation: "If fever persists >72 hours on antibiotics — review diagnosis, consider resistant organism or empyema" },
          { parameter: "Repeat CXR", frequency: "48-72 hours if not improving", target: "No progression of consolidation", escalation: "If worsening — CT chest, consider parapneumonic effusion or abscess" },
        ],
        lifestyle: {
          dos: ["Complete full antibiotic course", "Adequate fluid intake", "Rest for 1-2 weeks after discharge", "Pneumococcal vaccination after recovery"],
          donts: ["No smoking exposure", "Avoid dusty environments until fully recovered", "Do not stop antibiotics early even if feeling better"],
          indianSpecific: ["Get pneumococcal vaccine — available at government hospitals", "If construction worker — use proper dust mask at work", "Complete the full course of antibiotics — don't stop when feeling better (common mistake in India)"],
        },
        followUp: {
          when: "1 week after discharge, then repeat CXR at 6 weeks",
          what: ["Clinical assessment", "Repeat CXR at 6 weeks to confirm resolution (rule out underlying malignancy in smokers >50)"],
        },
        referral: {
          needed: false,
          to: "",
          urgency: "",
        },
      },
      redFlags: [
        { flag: "SpO2 dropping despite oxygen therapy", action: "Escalate to NIV or mechanical ventilation — ICU transfer", urgency: "IMMEDIATE" },
        { flag: "Hemodynamic instability (SBP <90)", action: "Septic shock protocol — IV fluids, vasopressors, consider ICU", urgency: "IMMEDIATE" },
        { flag: "No improvement after 72 hours of antibiotics", action: "Review — consider resistant organism, empyema, lung abscess, or wrong diagnosis (TB?)", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Streptococcus pneumoniae is the MOST common cause of community-acquired pneumonia worldwide",
        "CURB-65 score determines severity: Confusion, Urea>7, RR>30, BP<90, Age≥65 — score ≥2 needs hospitalization",
        "Rusty sputum + lobar consolidation + gram-positive diplococci = classic Pneumococcal pneumonia",
        "In severe CAP, use combination therapy: Beta-lactam + Macrolide (not monotherapy)",
        "Every hour delay in antibiotics increases mortality by 7.6% in severe pneumonia",
        "Always collect blood cultures BEFORE starting antibiotics (but don't delay antibiotics for culture)",
        "Repeat CXR at 6 weeks in all patients >50 years to rule out underlying malignancy",
      ],
      commonMistakes: [
        "Starting oral antibiotics for severe pneumonia — IV is essential when SpO2 <92% or severe markers present",
        "Not assessing severity (CURB-65/PSI) before deciding inpatient vs outpatient treatment",
        "Missing TB in Indian setting — always consider TB if symptoms >2 weeks or treatment failure",
        "Delaying antibiotics while waiting for culture results — start empirical treatment immediately",
        "Not counseling on pneumococcal vaccination after pneumonia episode",
      ],
      relevantHistoryQs: ["onset", "character", "associated", "severity", "aggravating", "smoking", "occupation", "prev_illness", "fam_tb"],
      relevantExamIds: ["chest_inspection", "percussion", "auscultation_lungs", "vocal_resonance", "general_appearance", "cyanosis", "trachea"],
      difficulty: "MODERATE",
      estimatedMinutes: 18,
      subjectTags: ["IM", "MI"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "IM3.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 3. Diabetes Mellitus ──────────────────────────────────────────────
  {
    topicCode: "IM-MOD-05-TOP-01",
    scenario: {
      patientAge: 48,
      patientSex: "Female",
      patientOccupation: "Schoolteacher",
      patientLocation: "Chennai, Tamil Nadu",
      chiefComplaint: "Increased thirst and frequent urination for 2 months with unintentional weight loss",
      historyOfPresent: `
- Onset: Gradual onset over 2 months, progressive
- Character: Polyuria — urinating 8-10 times/day including 3-4 times at night (nocturia)
- Polydipsia — drinking 4-5 liters of water daily, always thirsty
- Weight loss: Lost 6 kg in 2 months without dieting
- Associated: Increased appetite (polyphagia), fatigue, blurred vision (intermittent), recurrent vaginal candidiasis (2 episodes in 3 months)
- No fever, no dysuria, no abdominal pain
      `.trim(),
      pastHistory: "Gestational diabetes during second pregnancy 10 years ago — told it resolved after delivery. No other significant illness. Two normal deliveries.",
      familyHistory: "Mother has Type 2 DM (on insulin for 15 years). Father died of stroke at 60. Elder sister has hypothyroidism.",
      socialHistory: "Non-smoker, non-alcoholic. Sedentary lifestyle — sits at school and home. Diet: South Indian — rice-based, 3-4 cups of filter coffee with sugar daily. BMI 29 (overweight). Rarely exercises.",
      drugHistory: "No regular medications. Takes Combiflam occasionally for headache.",
      vitals: { pulse: 82, bp: "138/88", temp: 37.0, rr: 16, spo2: 98 },
      generalExam: `
- General appearance: Overweight, well-nourished, not acutely ill
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema
- Acanthosis nigricans: Present on neck and axillae (dark, velvety skin)
- Skin tags: Multiple small skin tags on neck
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. No murmurs.",
          blood_pressure: "138/88 mmHg",
        },
        respiratory: {
          auscultation_lungs: "Clear bilateral air entry. No added sounds.",
        },
        abdominal: {
          abdo_inspection: "Central obesity. No surgical scars.",
          palpation_superficial: "Soft, non-tender",
          liver_palpation: "Liver mildly palpable 2cm below costal margin — fatty liver likely",
          spleen_palpation: "Not palpable",
        },
        neurological: {
          consciousness: "Alert, oriented",
          sensory: "Reduced sensation to monofilament in both feet — glove-stocking pattern",
          reflexes: "Ankle reflexes diminished bilaterally",
          plantar: "Flexor bilaterally",
        },
      },
      availableInvestigations: [
        { id: "fbs", name: "Fasting Blood Sugar", cost: 100, turnaround: "4 hours (fasting)", category: "Biochemistry", result: "FBS: 248 mg/dL (Normal: <100 mg/dL)", isAbnormal: true, interpretation: "Markedly elevated — diagnostic of diabetes (≥126 mg/dL on fasting).", isEssential: true },
        { id: "ppbs", name: "Postprandial Blood Sugar", cost: 100, turnaround: "2 hours after meal", category: "Biochemistry", result: "PPBS: 386 mg/dL (Normal: <140 mg/dL)", isAbnormal: true, interpretation: "Very high postprandial glucose — poor glycemic control.", isEssential: true },
        { id: "hba1c", name: "HbA1c", cost: 600, turnaround: "2 hours", category: "Biochemistry", result: "HbA1c: 10.2% (Normal: <5.7%, Diabetic: ≥6.5%)", isAbnormal: true, interpretation: "10.2% indicates very poor glycemic control over past 3 months. Corresponds to average glucose ~250 mg/dL.", isEssential: true },
        { id: "rft", name: "Renal Function Test + Urine Albumin", cost: 600, turnaround: "1 hour", category: "Biochemistry", result: "Creatinine: 0.9 mg/dL, Urea: 28 mg/dL. Urine Albumin/Creatinine Ratio: 120 mg/g (Normal: <30)", isAbnormal: true, interpretation: "Microalbuminuria (30-300 mg/g) — early diabetic nephropathy. Needs ACE inhibitor.", isEssential: true },
        { id: "lipid", name: "Lipid Profile", cost: 500, turnaround: "2 hours", category: "Biochemistry", result: "Total Cholesterol: 245 mg/dL, LDL: 158 mg/dL, HDL: 38 mg/dL, TG: 280 mg/dL", isAbnormal: true, interpretation: "Diabetic dyslipidemia — high TG, low HDL, high LDL. Needs statin therapy.", isEssential: true },
        { id: "lft", name: "Liver Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "SGOT: 48 U/L, SGPT: 62 U/L, ALP: 98 U/L. Albumin: 3.8 g/dL", isAbnormal: true, interpretation: "Mildly elevated transaminases — likely NAFLD (non-alcoholic fatty liver disease), common in diabetics.", isEssential: false },
        { id: "tft", name: "Thyroid Function Test", cost: 600, turnaround: "4 hours", category: "Endocrine", result: "TSH: 5.8 mIU/L (Normal: 0.4-4.0), FT4: 0.9 ng/dL", isAbnormal: true, interpretation: "Subclinical hypothyroidism — common in diabetic women. May need treatment if symptomatic.", isEssential: false },
        { id: "fundoscopy", name: "Fundoscopy (Dilated)", cost: 300, turnaround: "30 min", category: "Ophthalmology", result: "Bilateral dot-blot hemorrhages and microaneurysms in posterior pole. No macular edema. No proliferative changes.", isAbnormal: true, interpretation: "Mild Non-Proliferative Diabetic Retinopathy (NPDR). Needs annual screening.", isEssential: true },
        { id: "urine_re", name: "Urine Routine", cost: 100, turnaround: "30 min", category: "Biochemistry", result: "Glucose: 3+, Ketones: Trace, Protein: 1+, No pus cells", isAbnormal: true, interpretation: "Glycosuria from high blood glucose. Trace ketones. Proteinuria correlates with microalbuminuria.", isEssential: false },
      ],
      correctDiagnosis: "Type 2 Diabetes Mellitus — Newly Diagnosed with Microvascular Complications (Retinopathy + Nephropathy + Neuropathy)",
      differentials: [
        { diagnosis: "Type 1 Diabetes Mellitus", likelihood: "LOW", reasoning: "Age 48, overweight, insulin resistance features (acanthosis). Type 1 usually presents in younger age with DKA. C-peptide would be low in Type 1." },
        { diagnosis: "LADA (Latent Autoimmune Diabetes of Adults)", likelihood: "LOW", reasoning: "Possible if poor response to oral drugs. GAD antibodies would be positive. Less likely given obesity and insulin resistance signs." },
        { diagnosis: "Secondary Diabetes (Cushing's, Acromegaly)", likelihood: "LOW", reasoning: "No clinical features of Cushing's (moon face, striae) or Acromegaly. History and presentation classic for Type 2 DM." },
      ],
      diagnosticReasoning: "48-year-old overweight woman with classic triad of polyuria, polydipsia, and polyphagia with weight loss. Strong risk factors: gestational DM history, family history, central obesity, sedentary lifestyle. Physical signs of insulin resistance (acanthosis nigricans, skin tags). FBS 248, HbA1c 10.2% — diagnostic of diabetes. Already has microvascular complications: peripheral neuropathy (reduced monofilament sensation), mild NPDR (fundoscopy), and microalbuminuria (urine ACR 120). This indicates diabetes likely present for years before diagnosis — common in Indian population. Type 2 DM confirmed by age, obesity, insulin resistance features.",
      managementPlan: {
        immediateActions: [
          { action: "Start Metformin 500mg with dinner, uptitrate to 1000mg BD over 2 weeks", reasoning: "First-line for Type 2 DM. Start low to avoid GI side effects. HbA1c >9% may need combination from start.", priority: "URGENT" },
          { action: "Start low-dose insulin if HbA1c >10% with symptoms", reasoning: "HbA1c 10.2% with significant symptoms — may need basal insulin initially to bring glucose down quickly, then switch to oral agents.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Biguanide (Metformin)", examples: ["Metformin 500mg → 1000mg BD"], route: "Oral", duration: "Lifelong", reasoning: "First-line therapy. Reduces hepatic glucose output. Does not cause hypoglycemia.", contraindications: ["eGFR <30", "Liver failure", "Lactic acidosis risk"], indianContext: "Metformin 500mg at ₹1-2/tablet. Generic widely available." },
          { drugClass: "SGLT2 Inhibitor (consider adding)", examples: ["Dapagliflozin 10mg OD"], route: "Oral", duration: "Long-term", reasoning: "Cardio-renal protective. Causes glycosuria to lower glucose. Also helps with weight loss.", contraindications: ["Recurrent UTI", "eGFR <20"], indianContext: "Dapagliflozin 10mg at ₹15-25/tablet." },
          { drugClass: "ACE Inhibitor (for nephroprotection)", examples: ["Ramipril 2.5mg OD"], route: "Oral", duration: "Lifelong", reasoning: "Microalbuminuria present — ACE inhibitor slows progression to overt nephropathy.", contraindications: ["Pregnancy", "Bilateral RAS"], indianContext: "Ramipril 2.5mg at ₹2-3/tablet." },
          { drugClass: "Statin", examples: ["Atorvastatin 20mg at night"], route: "Oral", duration: "Lifelong", reasoning: "All diabetics >40 years should be on statin for cardiovascular risk reduction. LDL target <100 mg/dL.", contraindications: ["Active liver disease"], indianContext: "Atorvastatin 20mg at ₹5-8/tablet." },
        ],
        nonPharmacological: [
          { intervention: "Medical nutrition therapy — diabetic diet counseling", reasoning: "South Indian rice-heavy diet needs modification. Reduce refined carbs, increase fiber and protein.", duration: "Lifelong" },
          { intervention: "Regular physical activity — 150 min/week moderate exercise", reasoning: "Improves insulin sensitivity, aids weight loss, cardiovascular benefit", duration: "Lifelong" },
        ],
        monitoring: [
          { parameter: "Self-monitoring blood glucose (SMBG)", frequency: "FBS and PPBS twice weekly initially", target: "FBS <130, PPBS <180", escalation: "If not at target in 3 months — add second oral agent or insulin" },
          { parameter: "HbA1c", frequency: "Every 3 months until stable, then 6-monthly", target: "HbA1c <7%", escalation: "If >8% after 3 months of dual therapy — consider insulin" },
          { parameter: "Annual screening", frequency: "Yearly", target: "Normal", escalation: "Annual: fundoscopy, urine ACR, foot exam, lipid profile, TFT" },
        ],
        lifestyle: {
          dos: ["Regular meals at fixed times", "Include salad before rice", "Walk 30 min daily", "Carry glucose tablets for hypoglycemia"],
          donts: ["No sugar in coffee/tea", "Avoid white rice excess — switch to brown rice/millets", "No skipping meals", "No barefoot walking (neuropathy risk)"],
          indianSpecific: ["Replace white rice with ragi/jowar/bajra rotis", "Use coconut oil sparingly", "Reduce filter coffee from 4 cups to 2 — without sugar", "Wear MCR footwear (microcellular rubber) — available at diabetic shoe shops", "Free glucometer available under government diabetes programs in some states"],
        },
        followUp: {
          when: "2 weeks (medication titration), then monthly for 3 months, then every 3 months",
          what: ["Blood glucose log review", "Medication adjustment", "Foot examination", "Annual comprehensive screening"],
        },
        referral: {
          needed: true,
          to: "Ophthalmologist for diabetic retinopathy follow-up",
          urgency: "Within 1 month — annual screening needed",
        },
      },
      redFlags: [
        { flag: "DKA symptoms (vomiting, abdominal pain, fruity breath, altered consciousness)", action: "Emergency — IV fluids, insulin infusion, monitor K+ and glucose hourly", urgency: "IMMEDIATE" },
        { flag: "Hypoglycemia (sweating, tremors, confusion) on treatment", action: "Give 15g glucose, recheck in 15 min. Adjust medication dose.", urgency: "IMMEDIATE" },
        { flag: "Rapidly progressive vision loss", action: "Urgent ophthalmology referral — may indicate vitreous hemorrhage or macular edema", urgency: "URGENT" },
        { flag: "Foot ulcer or non-healing wound", action: "Diabetic foot team assessment — debridement, antibiotics, offloading", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "India is the 'Diabetes Capital of the World' — 101 million diabetics, many undiagnosed",
        "Classic triad: Polyuria + Polydipsia + Polyphagia with weight loss — but many Type 2 patients are asymptomatic",
        "Gestational DM is a MAJOR risk factor — 50% develop Type 2 DM within 10 years",
        "Acanthosis nigricans is a clinical marker of insulin resistance — check neck and axillae",
        "Screen for microvascular complications at diagnosis in Type 2 (they may have had DM for years undiagnosed)",
        "Metformin is first-line. HbA1c >10% with symptoms may need insulin initially.",
        "Annual screening: eyes (fundoscopy), kidneys (ACR), feet (monofilament), lipids, thyroid",
      ],
      commonMistakes: [
        "Not screening for complications at diagnosis — complications may already be present",
        "Starting SU (sulfonylurea) as first line instead of metformin",
        "Not prescribing ACE inhibitor for microalbuminuria",
        "Not counseling on diet and exercise — lifestyle modification is the foundation",
        "Forgetting annual fundoscopy — diabetic retinopathy is a leading cause of preventable blindness in India",
      ],
      relevantHistoryQs: ["onset", "associated", "severity", "prev_illness", "fam_diabetes", "diet", "occupation", "current_meds"],
      relevantExamIds: ["general_appearance", "edema", "liver_palpation", "sensory", "reflexes", "plantar"],
      difficulty: "MODERATE",
      estimatedMinutes: 20,
      subjectTags: ["IM", "OP"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "IM11.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 4. Acute Ischemic Stroke (MCA territory) ────────────────────────────
  {
    topicCode: "IM-MOD-06-TOP-01",
    scenario: {
      patientAge: 62,
      patientSex: "Male",
      patientOccupation: "Retired accountant",
      patientLocation: "Delhi, NCR",
      chiefComplaint: "Sudden onset weakness and inability to speak for 45 minutes",
      historyOfPresent: `
- Onset: Sudden, witnessed by wife at 8:15 AM while eating breakfast
- Character: Right-sided weakness — cannot move right arm and leg. Difficulty forming words (expressive aphasia).
- Location: Right side of body affected — face, arm, and leg
- Severity: Cannot lift right arm, dragging right leg while walking (attempted)
- Timing: Acute onset 45 minutes ago. Wife brought him immediately to hospital. Time last known normal: 8:15 AM.
- Associated: Facial drooping on right side, slurred speech, mild dysarthria, mild headache at back of head, no nausea/vomiting, no vision loss
- No loss of consciousness, no seizure activity
      `.trim(),
      pastHistory: "Hypertension for 8 years — on Amlodipine 5mg daily but compliance variable. No diabetes. No previous stroke. No surgeries. Episode of TIA (transient ischemic attack) 3 months ago — right-sided weakness that resolved in 15 minutes, attributed to hypertension.",
      familyHistory: "Father had stroke at 65 (ischemic). Mother has hypertension. Brother has atrial fibrillation.",
      socialHistory: "Retired, sedentary lifestyle. Non-smoker. Drinks 2-3 drinks of whiskey on weekends. Diet: High salt, high fat. Occasional stress from family issues.",
      drugHistory: "Amlodipine 5mg — takes irregularly. No other medications. No aspirin prophylaxis. No known drug allergies.",
      vitals: { pulse: 88, bp: "162/98", temp: 37.2, rr: 16, spo2: 96 },
      generalExam: `
- General appearance: Alert, distressed by weakness, able to communicate with difficulty
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema
- JVP: Normal
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 heard, regular rhythm. No murmurs. No signs of heart failure.",
          peripheral_pulses: "All pulses palpable, regular rate and rhythm",
          blood_pressure: "162/98 mmHg bilaterally",
          apex_beat: "Not displaced",
        },
        respiratory: {
          auscultation_lungs: "Clear bilateral air entry. No added sounds.",
          chest_inspection: "Normal chest movements",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended",
          palpation_superficial: "No tenderness",
          liver_palpation: "Not palpable",
          spleen_palpation: "Not palpable",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "Alert and oriented (GCS 15/15) but expressive aphasia present",
          cranial_nerves: "CN II-XII — right facial droop (CN VII palsy). Dysarthria noted.",
          motor: "Right upper limb: Power 2/5 (cannot lift against gravity). Right lower limb: Power 2/5 (cannot lift leg). Left side: Normal power 5/5",
          reflexes: "Right side reflexes slightly brisk (1+). Left side normal.",
          plantar: "Right extensor (Babinski sign present). Left flexor (normal).",
          sensory: "Intact to touch bilaterally. No sensory level.",
          cerebellar: "Finger-nose test on left — accurate. Right side not tested due to weakness.",
        },
      },
      availableInvestigations: [
        { id: "ct_head", name: "CT Head (Non-contrast)", cost: 2500, turnaround: "10 min", category: "Imaging", result: "No hyperdensity in brain parenchyma. No intracranial hemorrhage. No mass. Normal ventricular size. Hypodensity not visible yet in acute phase (CT may appear normal in early ischemic stroke).", isAbnormal: false, interpretation: "Excludes intracranial hemorrhage — critical to rule out before thrombolysis. Early ischemic changes may not be visible in first 6-12 hours.", isEssential: true },
        { id: "mri_brain", name: "MRI Brain (DWI/PWI)", cost: 8000, turnaround: "45 min", category: "Imaging", result: "DWI shows acute ischemic lesion in left middle cerebral artery (MCA) territory — left superior division. Lesion size ~40 cc. PWI shows larger perfusion deficit suggesting penumbra. No hemorrhage on FLAIR/T2.", isAbnormal: true, interpretation: "DWI-positive lesion confirms acute ischemic stroke in left MCA territory. MCA stroke → right-sided weakness and expressive aphasia (if left dominant hemisphere).", isEssential: true },
        { id: "ecg", name: "12-lead ECG", cost: 200, turnaround: "5 min", category: "Cardiac", result: "Normal sinus rhythm at 88 bpm. No ST changes. PR interval normal. No signs of MI. No atrial fibrillation.", isAbnormal: false, interpretation: "Normal — useful to rule out cardioembolic source (AF, recent MI).", isEssential: true },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 13.8 g/dL, WBC: 9,200/μL, Platelets: 2.4 lakhs", isAbnormal: false, interpretation: "Normal — baseline before anticoagulation/thrombolysis.", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 36 mg/dL, Creatinine: 1.1 mg/dL, Na: 140 mEq/L, K: 4.3 mEq/L", isAbnormal: false, interpretation: "Normal renal function. Potassium normal — safe for medications.", isEssential: true },
        { id: "inr", name: "Coagulation Profile (PT/INR)", cost: 400, turnaround: "1 hour", category: "Hematology", result: "PT: 12.5 sec, INR: 0.98, aPTT: 28 sec", isAbnormal: false, interpretation: "Normal coagulation. Baseline before anticoagulation.", isEssential: true },
        { id: "glucose", name: "Blood Glucose (random)", cost: 100, turnaround: "5 min", category: "Biochemistry", result: "RBS: 142 mg/dL", isAbnormal: true, interpretation: "Mild hyperglycemia — stress hyperglycemia in acute stroke. Monitor closely.", isEssential: true },
        { id: "carotid_doppler", name: "Carotid Doppler Ultrasound", cost: 1500, turnaround: "30 min", category: "Vascular Imaging", result: "Left carotid bifurcation shows 60-70% stenosis. Right carotid normal. Vertebral arteries patent.", isAbnormal: true, interpretation: "Significant left carotid stenosis — important causative factor. May need carotid endarterectomy after acute phase.", isEssential: false },
        { id: "echo", name: "Transthoracic Echocardiography", cost: 2000, turnaround: "45 min", category: "Cardiac", result: "LVEF 50% (normal). No thrombus. No patent foramen ovale apparent on standard echo. No valvular disease.", isAbnormal: false, interpretation: "No obvious cardioembolic source. Transesophageal echo may be needed if high suspicion.", isEssential: false },
      ],
      correctDiagnosis: "Acute Ischemic Stroke — Left Middle Cerebral Artery (MCA) Territory with Expressive Aphasia",
      differentials: [
        { diagnosis: "Hypertensive Encephalopathy", likelihood: "LOW", reasoning: "Would have headache, visual disturbances, seizures. No papilledema. BP 162/98 — elevated but not severe enough for encephalopathy." },
        { diagnosis: "Transient Ischemic Attack (TIA)", likelihood: "LOW", reasoning: "Duration 45 minutes with persistent symptoms — TIA by definition resolves in <24 hours. This is completed stroke." },
        { diagnosis: "Todd's Paralysis (post-ictal)", likelihood: "LOW", reasoning: "No witnessed seizure. No incontinence, tongue bite. Wife would have noted seizure activity." },
        { diagnosis: "Hemorrhagic Stroke", likelihood: "LOW", reasoning: "CT head shows no hyperdensity. DWI shows acute ischemia pattern typical of thrombotic occlusion." },
      ],
      diagnosticReasoning: "62-year-old male with hypertension and prior TIA presenting with sudden onset right-sided weakness (face, arm, leg) and expressive aphasia at 8:15 AM. This is a classic presentation of acute stroke involving left middle cerebral artery (dominant hemisphere for language). Time last known normal is critical — 45 minutes = within thrombolytic window (4.5 hours). CT head excludes hemorrhage (prerequisite for thrombolysis). MRI DWI confirms acute ischemic lesion in left MCA territory. Carotid doppler shows 60-70% left carotid stenosis — likely culprit lesion causing thromboembolism. NIHSS score estimated 12 (facial droop, arm drift, speech abnormality) — indicates moderate stroke severity.",
      managementPlan: {
        immediateActions: [
          { action: "Call stroke alert — activate stroke team immediately", reasoning: "Time-sensitive emergency. Door-to-needle time should be <60 minutes for thrombolysis.", priority: "STAT" },
          { action: "Confirm time last known normal (TLKN) — currently 8:15 AM", reasoning: "Critical for thrombolytic eligibility. Within 4.5 hours = eligible for IV tPA. >4.5 hours = consider mechanical thrombectomy window.", priority: "STAT" },
          { action: "Establish IV access, continuous monitoring, ECG, pulse ox", reasoning: "Standard acute stroke protocol.", priority: "STAT" },
          { action: "IV recombinant tissue plasminogen activator (tPA/Alteplase)", reasoning: "Within 4.5-hour window for acute ischemic stroke. 0.9 mg/kg (max 90mg). Give 10% of dose as bolus over 1 min, remainder over 60 min. Proven to improve outcome by 30% if given early.", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Thrombolytic (Recombinant tPA)", examples: ["Alteplase IV — 0.9 mg/kg total (max 90mg). 10% bolus, 90% over 60 min"], route: "IV", duration: "One-time acute dose", reasoning: "Only FDA/NHLBI approved thrombolytic for acute stroke. NNT = 11 to prevent 1 death/disability. Effective within 4.5 hours.", contraindications: ["Active bleeding", "Intracranial hemorrhage", "Recent surgery", "NIHSS >25", "Severe hypertension SBP >185 or DBP >110"], indianContext: "Alteplase (Activase) imported — costs ₹30,000-40,000. Limited availability in Indian tertiary centers. Rarely available in tier-2 hospitals." },
          { drugClass: "Antiplatelet (Aspirin)", examples: ["Aspirin 325mg PO/NG"], route: "Oral/NG", duration: "From day 2 onwards (not immediately after tPA)", reasoning: "After thrombolysis complete, aspirin reduces recurrent stroke risk. Give at 24 hours post-tPA.", contraindications: ["If on tPA — wait 24 hours"], indianContext: "Aspirin 325mg at ₹1/tablet." },
          { drugClass: "Antihypertensive (judicious use)", examples: ["IV Labetalol 10-20mg, repeat every 10-20 min", "IV Nicardipine infusion 5 mg/hr"], route: "IV", duration: "Acute phase", reasoning: "Target: SBP 185-220 before thrombolysis, then SBP <180 after. Do NOT aggressively lower BP — can reduce perfusion to penumbra.", contraindications: ["Asthma (avoid labetalol)", "Bradycardia"], indianContext: "Labetalol IV ampoule at ₹200-300. Nicardipine less commonly available." },
          { drugClass: "Statin (high-dose)", examples: ["Atorvastatin 80mg OD"], route: "Oral", duration: "Lifelong", reasoning: "Start immediately in acute stroke. Plaque stabilization, reduces recurrent events.", contraindications: ["Active liver disease"], indianContext: "Atorvastatin 80mg at ₹8-15/tablet." },
        ],
        nonPharmacological: [
          { intervention: "Keep NPO initially (risk of aspiration if swallowing affected)", reasoning: "Safe swallow assessment needed before eating/drinking", duration: "First 24 hours minimum" },
          { intervention: "Continuous cardiac and neuro monitoring", reasoning: "Detect complications (hemorrhage, edema, seizure)", duration: "First 72 hours" },
          { intervention: "Physiotherapy and occupational therapy", reasoning: "Early mobilization prevents complications. Speech therapy for aphasia.", duration: "Start day 1" },
          { intervention: "Head elevation 30 degrees", reasoning: "Improves cerebral venous drainage, reduces ICP", duration: "Throughout acute phase" },
        ],
        monitoring: [
          { parameter: "NIHSS score", frequency: "At 0, 2, 24, 72 hours", target: "Improvement of NIHSS score post-thrombolysis", escalation: "If worsening or sudden decline → CT head to exclude hemorrhagic conversion" },
          { parameter: "Blood pressure", frequency: "Every 15 min for first 2 hours, then hourly", target: "SBP 180-220 before tPA, <180 after tPA", escalation: "If SBP >220 — give IV antihypertensives. If <90 — give IV fluids" },
          { parameter: "Blood glucose", frequency: "Every 2 hours for first 24 hours", target: "Avoid hyperglycemia (>180) and hypoglycemia", escalation: "If glucose >180 — consider insulin. If <70 — give dextrose" },
          { parameter: "Repeat CT/MRI", frequency: "24-48 hours post-thrombolysis", target: "Exclude hemorrhagic conversion", escalation: "If ICH detected — stop antiplatelet/anticoagulation" },
        ],
        lifestyle: {
          dos: ["Strict antihypertensive regimen — target BP <130/80", "Low-salt diet (<5g/day)", "Regular walking after 2 weeks (stroke rehab)", "Aspirin 75mg daily long-term", "Smoking cessation if applicable"],
          donts: ["No smoking", "No heavy lifting for 4 weeks", "Avoid stress", "Don't stop medications"],
          indianSpecific: ["Join stroke rehabilitation program at government hospital (if available)", "Caregiver training for aphasia patients — speak slowly, show pictures", "Dietary modifications as per physiotherapist", "Use MCR footwear due to risk of falls"],
        },
        followUp: {
          when: "1 week, then 1 month, then 3 months",
          what: ["Clinical neurological assessment", "Repeat CT head if symptoms progress", "Carotid imaging for potential endarterectomy assessment (60-70% stenosis)", "Lipid profile and glucose monitoring", "Swallow assessment and speech therapy continuation"],
        },
        referral: {
          needed: true,
          to: "Neurology/Stroke specialist and Neurosurgery for carotid assessment",
          urgency: "Immediate admission. Neurosurgery consult within 48 hours for carotid stenosis evaluation.",
        },
      },
      redFlags: [
        { flag: "Deteriorating consciousness or sudden worsening of neurological signs", action: "Stat CT head to exclude hemorrhage or brain edema. Consider ICU transfer.", urgency: "IMMEDIATE" },
        { flag: "Hemorrhagic conversion (CT showing blood in infarcted area)", action: "Stop all antiplatelet/anticoagulation. Supportive care. Neurosurgery consult.", urgency: "IMMEDIATE" },
        { flag: "Seizure activity", action: "Give benzodiazepines (Lorazepam 4mg IV). Prophylactic antiepileptic may be considered.", urgency: "IMMEDIATE" },
        { flag: "Pulmonary edema (crackles, orthopnea)", action: "Consider cardiogenic shock or cardiac cause. ECG, echo. Diuretics judiciously.", urgency: "URGENT" },
        { flag: "Recurrent chest pain or ST changes", action: "Rule out acute MI co-occurring with stroke. Troponin levels.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Time is brain — every minute of ischemia = 1.9 million neurons lost. Door-to-needle <60 min is critical.",
        "MCA stroke produces contralateral hemiparesis (right weakness from left MCA). Left MCA → expressive aphasia; right MCA → neglect.",
        "Thrombolytic window: IV tPA up to 4.5 hours. Mechanical thrombectomy up to 24 hours in selected cases.",
        "Exclude hemorrhage with CT BEFORE starting thrombolysis — hemorrhage is absolute contraindication.",
        "Don't aggressively lower BP in acute stroke — can worsen ischemia by reducing cerebral perfusion.",
        "Carotid stenosis >70% may need endarterectomy after acute phase — assess with carotid doppler or CTA.",
        "NIHSS score predicts outcome — useful for prognosis and monitoring. NIHSS >25 = poor prognosis.",
      ],
      commonMistakes: [
        "Delaying thrombolysis while waiting for MRI — CT alone is sufficient to exclude hemorrhage for tPA decision.",
        "Aggressive BP lowering in acute stroke — can worsen ischemia. Target SBP <180 only after thrombolysis.",
        "Missing history of TIA — this patient had TIA 3 months ago, indicating high-risk vasculopathy.",
        "Not assessing swallowing before feeding — risk of aspiration and pneumonia in stroke patients.",
        "Forgetting antiplatelet prophylaxis — aspirin should be continued long-term (but not immediately with tPA).",
        "Not evaluating carotid disease — significant stenosis needs vascular intervention.",
      ],
      relevantHistoryQs: ["onset", "character", "location", "severity", "associated", "smoking", "prev_stroke", "hypertension", "current_meds", "fam_stroke"],
      relevantExamIds: ["consciousness", "cranial_nerves", "motor", "reflexes", "plantar", "sensory", "heart_sounds", "blood_pressure"],
      difficulty: "HARD",
      estimatedMinutes: 25,
      subjectTags: ["IM", "NS"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "IM6.2",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 5. Chronic Kidney Disease Stage 4 with uremic symptoms ──────────────
  {
    topicCode: "IM-MOD-04-TOP-01",
    scenario: {
      patientAge: 56,
      patientSex: "Female",
      patientOccupation: "Housewife",
      patientLocation: "Bangalore, Karnataka",
      chiefComplaint: "Persistent fatigue, poor appetite, and itching for 6 months with swollen ankles",
      historyOfPresent: `
- Onset: Gradual over 6 months, progressive worsening
- Fatigue: Severe — unable to do household chores, sleeps 10-12 hours/day
- Appetite: Markedly decreased, food tastes metallic, aversion to non-vegetarian food
- Itching: Severe pruritus all over body, especially at night — preventing sleep
- Nausea: Occasional, worsened in mornings
- Dyspnea: Mild, while climbing stairs
- Oliguria: Passing urine 2-3 times/day in decreased quantity
- Ankle swelling: Bilateral pitting edema for 3 months, worse by evening
- Associated: Bone pain (especially legs), mild tremor in hands, occasional confusion (forgetfulness)
      `.trim(),
      pastHistory: "Hypertension for 12 years — on Amlodipine 5mg daily. Diabetes mellitus type 2 diagnosed 8 years ago — on Metformin 500mg BD (compliance variable). No previous kidney disease recognized. No surgeries. Occasional UTI.",
      familyHistory: "Father had 'kidney disease' — details not clear. Mother has hypertension and diabetes.",
      socialHistory: "Housewife, sedentary. Non-smoker, non-alcoholic. Diet: High salt, occasional high-protein vegetarian diet (lentils, paneer). Lives in urban area.",
      drugHistory: "Amlodipine 5mg OD, Metformin 500mg BD. No ACE inhibitor or statin. No NSAIDs regular use. No known drug allergies.",
      vitals: { pulse: 96, bp: "152/94", temp: 37.1, rr: 20, spo2: 96 },
      generalExam: `
- General appearance: Ill-looking, pale, icteric tinge (uremia), thin/cachexic
- Pallor: Marked pallor present
- Icterus: Mild yellowish tinge
- Cyanosis: Absent
- Clubbing: Absent
- Edema: Bilateral pitting ankle edema (2+), extends to knees
- JVP: Mildly elevated (jugular venous pressure >4 cm H2O)
- Skin: Scratch marks all over body from itching. Nail dystrophy present.
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 heard. Grade 2/6 systolic murmur at left sternal border (possible dilated cardiomyopathy from chronic hypertension/uremia). No pericardial rub.",
          peripheral_pulses: "All pulses palpable. Carotid pulses full volume.",
          blood_pressure: "152/94 mmHg — elevated. Postural drop <10 mmHg.",
        },
        respiratory: {
          auscultation_lungs: "Clear bilateral air entry. No crackles. No wheeze.",
          chest_inspection: "Normal, no orthopnea at rest",
        },
        abdominal: {
          abdo_inspection: "Soft, not distended",
          palpation_superficial: "No tenderness",
          kidney_palpation: "Kidneys not palpable bilaterally (CKD — kidneys usually shrunken)",
          liver_palpation: "Liver not palpable",
          spleen_palpation: "Spleen not palpable",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "Alert but slightly slowed mentation. Oriented to person and place, not time (mild confusion).",
          cranial_nerves: "Grossly intact",
          motor: "Mild proximal weakness (Grade 4/5 hip flexors — uremic myopathy). Gait slow but steady.",
          reflexes: "Normal and symmetrical",
          plantar: "Flexor bilaterally",
          sensory: "Intact to touch",
          signs_of_uremia: "Tremor in outstretched hands (asterixis), drowsiness during conversation",
        },
      },
      availableInvestigations: [
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 8.2 g/dL (low — anemia), MCV: 78 fL (microcytic), WBC: 6,800/μL, Platelets: 1.8 lakhs", isAbnormal: true, interpretation: "Moderate anemia of chronic kidney disease. Microcytic likely from iron deficiency superimposed on EPO deficiency.", isEssential: true },
        { id: "rft", name: "Renal Function Test — Comprehensive", cost: 600, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 124 mg/dL (Normal: 15-45), Creatinine: 3.8 mg/dL (Normal: 0.6-1.2), eGFR: 18 mL/min/1.73m² (CKD Stage 4), Na: 136 mEq/L, K: 5.8 mEq/L (High), HCO3: 18 mEq/L (Low — metabolic acidosis)", isAbnormal: true, interpretation: "Advanced CKD Stage 4 with significant electrolyte abnormalities. eGFR 15-29 = Stage 4. High K+ indicates need for monitoring. Acidosis from uremic acid accumulation.", isEssential: true },
        { id: "urine_acr", name: "Urine Albumin-Creatinine Ratio", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "UACR: 680 mg/g (Normal: <30) — Nephrotic range proteinuria", isAbnormal: true, interpretation: "Heavy proteinuria consistent with diabetic nephropathy. Loss of >3.5g protein/day indicates nephrotic-range proteinuria.", isEssential: true },
        { id: "calcium", name: "Serum Calcium & Phosphate", cost: 500, turnaround: "1 hour", category: "Biochemistry", result: "Calcium: 7.8 mg/dL (Low), Phosphate: 6.2 mg/dL (High — Normal: 2.5-4.5), Albumin: 2.8 g/dL (Low from proteinuria)", isAbnormal: true, interpretation: "Secondary hyperparathyroidism from CKD — high P, low Ca. Corrected calcium = 7.8 + 0.8(4-2.8) = 8.6 (still low).", isEssential: true },
        { id: "pth", name: "Parathyroid Hormone (PTH)", cost: 1500, turnaround: "4 hours", category: "Endocrine", result: "PTH: 246 pg/mL (Normal: 15-65) — markedly elevated", isAbnormal: true, interpretation: "Secondary hyperparathyroidism — expected in CKD. High PTH causing bone loss and itching.", isEssential: true },
        { id: "bicarb", name: "Bicarbonate/VBG", cost: 300, turnaround: "30 min", category: "Biochemistry", result: "HCO3: 18 mEq/L (Normal: 22-26) — Metabolic acidosis", isAbnormal: true, interpretation: "Uremic acidosis from accumulation of unmeasured anions (phosphate, sulfate). Contributes to bone disease and symptoms.", isEssential: true },
        { id: "lipid", name: "Lipid Profile", cost: 500, turnaround: "2 hours", category: "Biochemistry", result: "Total Cholesterol: 189 mg/dL, LDL: 98 mg/dL, HDL: 28 mg/dL (Low), TG: 412 mg/dL (Very high)", isAbnormal: true, interpretation: "Dyslipidemia of CKD — low HDL, very high triglycerides. Increases cardiovascular risk.", isEssential: false },
        { id: "ultrasound_kdigo", name: "Ultrasound Abdomen (Renal)", cost: 1200, turnaround: "30 min", category: "Imaging", result: "Both kidneys small and echogenic (9 cm left, 8.5 cm right — normal 10-12 cm). Increased echogenicity consistent with chronic changes. No obstruction. No masses. Normal bladder.", isAbnormal: true, interpretation: "Small echogenic kidneys indicate advanced chronic kidney disease. Confirms chronicity (not acute).", isEssential: true },
        { id: "epo", name: "Serum Erythropoietin (EPO)", cost: 2000, turnaround: "4 hours", category: "Endocrine", result: "EPO: 8.2 mIU/mL (Normal: 4-26, but inappropriately low for Hb 8.2). Expected EPO should be >100 in anemia of CKD.", isAbnormal: true, interpretation: "Relative EPO deficiency — kidneys not producing enough erythropoietin. Indication for ESA therapy.", isEssential: false },
      ],
      correctDiagnosis: "Chronic Kidney Disease Stage 4 (eGFR 15-29) with Diabetic Nephropathy, Secondary Hyperparathyroidism, and Uremic Syndrome",
      differentials: [
        { diagnosis: "Acute Kidney Injury", likelihood: "LOW", reasoning: "History of 6 months progressive decline rules out acute event. Ultrasound shows small chronic kidneys, not acute swelling." },
        { diagnosis: "Acute Glomerulonephritis", likelihood: "LOW", reasoning: "No recent infection. No hematuria (though urine not shown). Chronic history rules out acute GN." },
        { diagnosis: "Nephrotic syndrome (other cause)", likelihood: "LOW", reasoning: "Heavy proteinuria present, but diabetic history + HTN + CKD clinical picture makes diabetic nephropathy most likely." },
      ],
      diagnosticReasoning: "56-year-old female with 12-year history of hypertension and 8-year history of diabetes presenting with 6-month progressive symptoms of uremia: fatigue, poor appetite, metallic taste, severe pruritus, oliguria, and edema. Examination reveals pallor, icteric tinge, bilateral ankle edema, and mild confusion — signs of advanced uremia. Labs: Creatinine 3.8 (eGFR 18) = CKD Stage 4. Urea 124 (severe uremia). Heavy proteinuria (UACR 680 = nephrotic range). Electrolyte abnormalities: High K+ (5.8), Low HCO3 (18) = metabolic acidosis. Secondary hyperparathyroidism with high PTH (246) and high phosphate (6.2). Ultrasound confirms small echogenic kidneys indicating chronic process. Diagnosis: Diabetic nephropathy progressed to CKD Stage 4 with uremic syndrome.",
      managementPlan: {
        immediateActions: [
          { action: "Start/optimize ACE inhibitor (if not already) — Ramipril 2.5mg uptitrate to 5mg OD", reasoning: "Slows progression of diabetic nephropathy. Should have been started earlier. Now focus on symptom management.", priority: "URGENT" },
          { action: "Dietary counseling: Protein restriction 0.6-0.8 g/kg/day, Sodium <5g/day, Potassium restriction <2g/day", reasoning: "Reduces uremic toxin production and electrolyte derangements.", priority: "URGENT" },
          { action: "Prepare for RRT (Renal Replacement Therapy) — counsel for dialysis or transplant", reasoning: "eGFR 18 — approaching need for renal replacement therapy (typically started at GFR <15). Vascular access planning (fistula) should begin now.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "ACE Inhibitor (nephroprotective)", examples: ["Ramipril 5mg OD"], route: "Oral", duration: "Lifelong until dialysis", reasoning: "Gold standard for diabetic nephropathy — reduces proteinuria and slows eGFR decline by 25-30%.", contraindications: ["Pregnancy", "Bilateral RAS", "K+ >6.0"], indianContext: "Ramipril 5mg at ₹5-7/tablet." },
          { drugClass: "Erythropoiesis-stimulating agent (ESA)", examples: ["Erythropoietin (recombinant) 50 IU/kg SC 2-3x/week"], route: "SC/IV", duration: "Until Hb target 10-11 g/dL", reasoning: "Treat anemia of CKD. Target Hb 10-11 (not higher to reduce cardiovascular risk). Improves fatigue, quality of life.", contraindications: ["Iron deficiency (must supplement first)", "Uncontrolled HTN"], indianContext: "Recombinant erythropoietin very expensive in India (₹300-500/dose). Limited availability. Iron supplementation is cheaper alternative." },
          { drugClass: "Iron supplementation", examples: ["Ferrous sulfate 200mg (60mg Fe) OD with vitamin C"], route: "Oral", duration: "Until iron replete", reasoning: "Correct iron deficiency first before ESA therapy. Patient is microcytic — likely iron deficient.", contraindications: ["Hemochromatosis"], indianContext: "Iron supplements at ₹2-5/tablet. Widely available." },
          { drugClass: "Phosphate binder", examples: ["Calcium acetate 2g BD with meals", "Sevelamer 2.4g BD"], route: "Oral", duration: "Lifelong in CKD", reasoning: "Binds dietary phosphate in gut, reduces absorption. Targets phosphate <5.5. Prevents secondary hyperparathyroidism progression.", contraindications: ["Hypocalcemia (with calcium-based binders)", "Aluminum toxicity risk (avoid aluminum hydroxide)"], indianContext: "Calcium acetate/carbonate at ₹5-10/gram. Sevelamer much more expensive at ₹20-30 per tablet." },
          { drugClass: "Vitamin D analogue", examples: ["Calcitriol 0.25-0.5 mcg BD"], route: "Oral", duration: "As needed", reasoning: "Active vitamin D (1,25-dihydroxyvitamin D3) — kidneys cannot convert 25-OH vitamin D to active form in CKD. Corrects hypocalcemia and suppresses PTH.", contraindications: ["Hypercalcemia", "Hyperphosphatemia (must correct first)"], indianContext: "Calcitriol 0.25mcg at ₹10-15/tablet." },
          { drugClass: "Beta-blocker (BP control)", examples: ["Metoprolol 50mg OD"], route: "Oral", duration: "Lifelong", reasoning: "Continue hypertension control. Amlodipine should be continued. Goal BP <130/80 in CKD.", contraindications: ["Asthma", "Bradycardia", "Diabetes (but patient is diabetic — use with caution)"], indianContext: "Metoprolol 50mg at ₹2-3/tablet." },
          { drugClass: "H2 blocker (GI protection)", examples: ["Ranitidine 150mg BD (or Famotidine 20mg OD)"], route: "Oral", duration: "Symptomatic relief", reasoning: "Nausea and poor appetite common in uremia. H2 blockers provide symptom relief and protect against gastritis.", contraindications: ["Severe CKD (requires dose adjustment)"], indianContext: "Ranitidine 150mg at ₹2/tablet. Generic formulations widely available." },
          { drugClass: "Antipruritic (for itching)", examples: ["Hydroxyzine 25mg at bedtime", "Topical emollients"], route: "Oral/Topical", duration: "As needed", reasoning: "Severe pruritus (uremic itch) significantly reduces QOL. Hydroxyzine provides symptomatic relief. Skin care essential.", contraindications: ["Drowsiness concern — use at night"], indianContext: "Hydroxyzine generic at ₹2-3/tablet. Emollients like coconut oil freely available." },
        ],
        nonPharmacological: [
          { intervention: "Dietary counseling — Protein <0.8g/kg/day, Na <5g/day, K <2g/day, PO4 restriction", reasoning: "Reduces uremic toxin load and prevents electrolyte complications. Dietitian referral essential.", duration: "Lifelong" },
          { intervention: "Fluid restriction to 800-1000 mL/day (based on urine output)", reasoning: "Prevents volume overload, reduces BP, prevents edema progression.", duration: "As needed based on urine output" },
          { intervention: "Regular gentle exercise — walking 20-30 min/day", reasoning: "Improves cardiac fitness, helps weight management, improves appetite", duration: "Lifelong as tolerated" },
          { intervention: "Vascular access planning — discuss AV fistula creation for future dialysis", reasoning: "Fistula takes 2-3 months to mature. Create now before urgent need arises.", duration: "Before GFR <10-15" },
        ],
        monitoring: [
          { parameter: "Serum creatinine and eGFR", frequency: "Monthly until stable, then every 3 months", target: "Monitor rate of decline", escalation: "If rapid decline (>5 mL/min/year) — review medication compliance, ACE inhibitor dose, dietary compliance" },
          { parameter: "Hemoglobin", frequency: "Monthly during ESA titration, then every 3 months", target: "Hb 10-11 g/dL (not higher)", escalation: "If Hb <10 — increase ESA dose. If >11 — decrease dose (risk of thrombosis)" },
          { parameter: "Serum potassium", frequency: "Monthly", target: "<6.0 mEq/L", escalation: "If >6.0 — dietary restriction, consider potassium-lowering agents (calcium resonium, insulin+dextrose)" },
          { parameter: "Serum phosphate and PTH", frequency: "Every 3 months", target: "Phosphate <5.5, PTH <300 (KDIGO target)", escalation: "If PTH rising — optimize phosphate binder, consider vitamin D analogue" },
          { parameter: "Blood pressure", frequency: "Every visit", target: "<130/80 mmHg", escalation: "If BP not controlled — optimize antihypertensives" },
          { parameter: "Urine output", frequency: "Patient should monitor daily", target: "Trend of urine output", escalation: "If urine output drops <200mL/day — may need urgent dialysis initiation" },
        ],
        lifestyle: {
          dos: ["Strict dietary compliance — low salt, low protein, low phosphate", "Daily weight monitoring (detect volume gain early)", "Regular medications on time", "Plan vascular access creation now", "Attend nephrology clinic regularly"],
          donts: ["No NSAID — can worsen kidney function", "Avoid salt-preserved foods (common in Indian diet)", "No excessive potassium — avoid coconut water, bananas, spinach", "Do not delay referral to nephrologist", "Do not miss scheduled blood tests"],
          indianSpecific: ["Avoid high-protein items: dal, paneer, meat (limit to 1-2 servings/week)", "Choose low-sodium options at markets (Jan Aushadhi)", "Use herbs for flavor instead of salt (ginger, garlic, cumin)", "Coconut water strictly avoided (very high K+)", "Government dialysis facilities available — start planning ahead"],
        },
        followUp: {
          when: "Monthly initially, then 3-monthly once stable",
          what: ["Creatinine, eGFR, electrolytes, Hb", "BP assessment", "Review symptoms of uremia", "Assess vascular access if created", "Referral to interventional radiologist for fistula creation if not done"],
        },
        referral: {
          needed: true,
          to: "Nephrologist for ongoing CKD management. Vascular surgeon for vascular access creation. Dietitian for dietary counseling. Interventional radiologist if fistula not native.",
          urgency: "Immediate nephrologist referral. Vascular access creation should occur before eGFR <15.",
        },
      },
      redFlags: [
        { flag: "Serum potassium >6.5 mEq/L", action: "ECG for peaked T waves. Give calcium gluconate IV, insulin+dextrose, or sodium polystyrene sulfonate (Kayexalate). Consider dialysis.", urgency: "IMMEDIATE" },
        { flag: "Signs of uremic encephalopathy (severe confusion, hallucinations, seizures)", action: "Urgent dialysis. Check electrolytes (especially K+, Ca). Manage seizure if present.", urgency: "IMMEDIATE" },
        { flag: "Severe refractory hypertension (BP >180/110 despite 3+ agents)", action: "Escalate to nephrologist. May need urgent dialysis initiation.", urgency: "URGENT" },
        { flag: "Pericarditis (chest pain worse on lying down, pericardial friction rub)", action: "Urgent dialysis. Avoid NSAIDs. Monitor for tamponade.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "CKD Stage 4 = eGFR 15-29. Stage 5 (ESRD) = eGFR <15 — dialysis typically starts here.",
        "Diabetic nephropathy is the LEADING cause of CKD and ESRD in India.",
        "Proteinuria = marker of kidney disease AND cardiovascular risk. UACR >300 indicates overt nephropathy.",
        "Secondary hyperparathyroidism develops insidiously — manage early with phosphate binders and vitamin D analogs.",
        "Anemia of CKD is multifactorial: EPO deficiency (primary), iron deficiency, shortened RBC lifespan.",
        "Vascular access creation (AV fistula) must be planned BEFORE dialysis need — takes 2-3 months to mature.",
        "Diet is crucial: Low protein (0.6-0.8 g/kg), Low sodium (<5g/day), Low potassium (<2g/day) — reduces progression.",
        "Progressive CKD leads to ESRD requiring dialysis or transplant — plan ahead before GFR <15.",
      ],
      commonMistakes: [
        "Starting high-dose ACE inhibitor in CKD without monitoring K+ — can cause dangerous hyperkalemia.",
        "Not referring to nephrologist early — CKD is slow progressive but needs specialist oversight.",
        "Using NSAIDs in CKD — even for pain relief, NSAIDs worsen renal function.",
        "Not planning vascular access early — delays dialysis initiation when urgent need arises.",
        "Aggressive BP lowering — overtreatment can reduce GFR further (paradoxically).",
        "Missing secondary hyperparathyroidism — can cause severe bone disease and itching if untreated.",
        "Not counseling on potassium-rich foods — patients unknowingly eat high-K foods worsening hyperkalemia.",
      ],
      relevantHistoryQs: ["onset", "character", "severity", "associated", "prev_illness", "fam_kidney", "diet", "medications", "nocturia", "occupation"],
      relevantExamIds: ["general_appearance", "pallor", "edema", "jvp", "blood_pressure", "consciousness", "motor", "heart_sounds", "abdomen"],
      difficulty: "MODERATE",
      estimatedMinutes: 22,
      subjectTags: ["IM", "NE"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "IM4.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
