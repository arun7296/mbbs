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
];
