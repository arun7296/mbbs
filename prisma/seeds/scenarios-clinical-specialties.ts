// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for Clinical Specialties
// Psychiatry, Anesthesiology, and Radiology
// ---------------------------------------------------------------------------

// ═════════════════════════════════════════════════════════════════════════
// PSYCHIATRY: First Episode Psychosis (Acute Schizophrenia)
// ═════════════════════════════════════════════════════════════════════════

export const psychiatryScenarios = [
  {
    topicCode: "PS-MOD-01-TOP-01",
    scenario: {
      patientAge: 22,
      patientSex: "Male",
      patientOccupation: "Engineering student (dropped out)",
      patientLocation: "Pune, Maharashtra",
      chiefComplaint: "Bizarre behavior, talking to himself, and not sleeping for 5 days",
      historyOfPresent: `
- Onset: Acute onset 1 week ago, family noticed sudden behavioral change
- Behavior: Talking to self, smiling at nothing, sometimes angry and agitated
- Sleep: Complete insomnia for 5 days (not tired), highly energetic
- Speech: Rapid, pressured speech, frequently incoherent, jumping from topic to topic
- Delusions: Believes that his hostel mates are plotting against him, reading his thoughts, government has planted a chip in his brain
- Hallucinations: Hears voices calling his name, voices telling him to hurt himself
- Preoccupation: Drawing strange diagrams and symbols all over his room walls — says they are "messages from aliens"
- Social: Lost interest in studies, dropped out of college 2 weeks ago, withdrawn from friends
- No reported substance use though family suspects possible cannabis use in past month
      `.trim(),
      pastHistory: "No psychiatric illness. No hospitalization. No epilepsy. No head injury. No fevers/infections recently. No chronic medical illness.",
      familyHistory: "Father has 'nervous breakdown' in his 30s (details unclear, possibly depression). Paternal uncle reportedly had 'mental illness' and was institutionalized.",
      socialHistory: "Engineering student, previously good academic performance until 2 months ago when grades dropped. Lives in hostel. Non-smoker. Suspected cannabis use with friends in past month. Social withdrawal over past month. Recently broke up with girlfriend 1.5 months ago.",
      drugHistory: "No regular medications. No known drug allergies. Possible cannabis use (unclear frequency/quantity from history).",
      vitals: { pulse: 98, bp: "130/82", temp: 37.2, rr: 20, spo2: 97 },
      generalExam: `
- General appearance: Disheveled, poor grooming, poor eye contact, appears anxious and suspicious
- Dress: Clothes stained, not well-fitted (possible self-care neglect)
- Psychomotor: Restless, frequent fidgeting, occasional bizarre gestures
- Affect: Inappropriate — smiles and laughs without reason, sometimes suddenly angry
- Speech: Rapid, pressured, sometimes incoherent, high pitch
- Consciousness: Alert, but attention poor, easily distractible
- Orientation: Oriented to time, place, person (but with suspicion)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal, no murmurs",
          peripheral_pulses: "Regular, normal rate despite tachycardia",
        },
        respiratory: {
          auscultation_lungs: "Clear bilateral, no added sounds",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended",
          palpation_superficial: "No tenderness",
          liver_palpation: "Not palpable",
        },
        neurological: {
          consciousness: "GCS 15/15 — alert",
          cranial_nerves: "Grossly intact",
          reflexes: "Normal and symmetrical",
          plantar: "Flexor bilaterally (normal)",
          meningeal_signs: "Negative (no neck stiffness, Kernig's sign negative)",
        },
      },
      availableInvestigations: [
        { id: "mse", name: "Mental Status Examination (Full)", cost: 0, turnaround: "30 min", category: "Psychiatry", result: "Appearance: Disheveled. Behavior: Restless, suspicious, occasionally aggressive. Mood: Elevated/anxious. Affect: Inappropriate, labile. Speech: Pressured, rapid, incoherent. Thought form: Loose associations. Thought content: Delusions of reference, persecution, and control. Perceptions: Auditory hallucinations (command type). Cognition: Alert but poor concentration. Insight: Poor (denies illness). Judgment: Impaired.", isAbnormal: true, interpretation: "Findings consistent with first episode psychosis — disorganized thinking, delusions, hallucinations, poor insight.", isEssential: true },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 13.8 g/dL, WBC: 7,200/μL, Platelets: 2.2 lakhs", isAbnormal: false, interpretation: "Normal — rules out infection or hematologic abnormality.", isEssential: false },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 28 mg/dL, Creatinine: 0.9 mg/dL, Electrolytes: Na 138, K 4.1, Cl 102", isAbnormal: false, interpretation: "Normal — baseline before antipsychotic therapy.", isEssential: true },
        { id: "lft", name: "Liver Function Test", cost: 500, turnaround: "1 hour", category: "Biochemistry", result: "ALT: 35 U/L, AST: 28 U/L, ALP: 62 U/L, Total Bilirubin: 0.8 mg/dL", isAbnormal: false, interpretation: "Normal — safe to initiate antipsychotic therapy.", isEssential: true },
        { id: "prolactin", name: "Serum Prolactin", cost: 600, turnaround: "2 hours", category: "Biochemistry", result: "Baseline Prolactin: 12 ng/mL (normal)", isAbnormal: false, interpretation: "Normal baseline — important to compare after antipsychotic initiation.", isEssential: false },
        { id: "glucose", name: "Fasting Blood Sugar", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "FBS: 95 mg/dL", isAbnormal: false, interpretation: "Normal — baseline for metabolic monitoring.", isEssential: true },
        { id: "lipid", name: "Lipid Profile", cost: 500, turnaround: "2 hours", category: "Biochemistry", result: "Total Cholesterol: 185 mg/dL, LDL: 108 mg/dL, HDL: 45 mg/dL, TG: 140 mg/dL", isAbnormal: false, interpretation: "Normal baseline — important as antipsychotics cause metabolic dysregulation.", isEssential: true },
        { id: "mri_brain", name: "MRI Brain with contrast", cost: 5000, turnaround: "2-3 hours", category: "Imaging", result: "Normal brain parenchyma. No focal lesions, tumors, or structural abnormalities. Ventricular size normal. No evidence of encephalitis.", isAbnormal: false, interpretation: "MRI normal — rules out organic causes (brain tumor, encephalitis, demyelination).", isEssential: true },
        { id: "eeg", name: "Electroencephalogram (EEG)", cost: 1500, turnaround: "1 hour", category: "Neurophysiology", result: "Normal background activity. No focal or generalized epileptiform discharges.", isAbnormal: false, interpretation: "Normal EEG — rules out seizure disorder or encephalitis.", isEssential: false },
        { id: "urine_drug", name: "Urine Drug Screen (5-panel)", cost: 800, turnaround: "30 min", category: "Toxicology", result: "Negative for amphetamines, cocaine, opioids, benzodiazepines. Cannabis: NOT tested (requires separate test)", isAbnormal: false, interpretation: "Negative for common drugs of abuse — though cannabis suspected and not in this panel.", isEssential: true },
      ],
      correctDiagnosis: "First Episode Psychosis — Acute Schizophrenia Spectrum Disorder",
      differentials: [
        { diagnosis: "Substance-Induced Psychotic Disorder (Cannabis)", likelihood: "HIGH", reasoning: "Recent cannabis use, acute onset, psychotic features. Cannabis can cause psychosis especially in vulnerable individuals. Would expect improvement after 1-2 weeks of abstinence." },
        { diagnosis: "Brief Psychotic Disorder", likelihood: "MEDIUM", reasoning: "Duration >1 week but <1 month fits this. However, stressor not clearly identified, and presence of delusions of control/reference suggest primary psychotic illness." },
        { diagnosis: "Bipolar Disorder, Manic Episode with Psychotic Features", likelihood: "MEDIUM", reasoning: "Decreased need for sleep (though not tired suggests different mechanism), rapid speech, grandiosity potentially (if delusions of special powers). But primarily negative/command hallucinations and persecution delusions favor schizophrenia." },
        { diagnosis: "Organic Psychosis (CNS Infection, Tumor)", likelihood: "LOW", reasoning: "MRI brain normal, no meningeal signs, normal temperature. EEG normal. Rules out structural/infectious causes." },
      ],
      diagnosticReasoning: "22-year-old previously healthy engineering student with acute onset (1 week) of bizarre behavior, persistent auditory hallucinations (voices calling name, command hallucinations), delusions of reference, persecution, and control (chip in brain, thoughts being read). Complete insomnia for 5 days with pressured speech and loose associations. MSE confirms disorganized thinking with poor insight. MRI brain normal ruling out organic causes. Presentation fits First Episode Psychosis — likely primary schizophrenia spectrum disorder, though substance-induced (cannabis) should be ruled out over next 1-2 weeks.",
      managementPlan: {
        immediateActions: [
          { action: "Acute psychiatric assessment and risk evaluation for self/other harm", reasoning: "Presence of command hallucinations telling patient to hurt himself — suicide risk assessment essential", priority: "STAT" },
          { action: "Admit to psychiatric ward (voluntary if possible, involuntary under MHA 1987 if refusing)", reasoning: "Acute psychotic episode requires structured environment, observation, safety monitoring", priority: "STAT" },
          { action: "Establish IV access, keep NPO initially", reasoning: "May need IM antipsychotic if refusing oral, and for supportive care", priority: "URGENT" },
          { action: "Nursing care: 1-to-1 observation if high suicide risk, safe ward environment", reasoning: "Command hallucinations and poor judgment — constant observation needed", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "First-Generation (Typical) Antipsychotic", examples: ["Chlorpromazine 100-200mg IM/IV STAT then 50-100mg PO QID", "Haloperidol 5-10mg IM STAT for acute agitation"], route: "IM/IV initially, then PO", duration: "Continue long-term", reasoning: "Rapid control of acute agitation and psychotic symptoms. Can use IM for faster onset if patient refuses oral.", contraindications: ["QT prolongation", "Neuroleptic malignant syndrome history", "Porphyria"], indianContext: "Chlorpromazine 100mg at ₹5-8 per tablet in Jan Aushadhi. Cost-effective for acute management." },
          { drugClass: "Second-Generation (Atypical) Antipsychotic", examples: ["Olanzapine 10mg PO OD (preferred for first episode)", "Risperidone 4-6mg PO OD", "Aripiprazole 15mg PO OD"], route: "Oral", duration: "Long-term (minimum 1-2 years)", reasoning: "Better efficacy-tolerability ratio than typical antipsychotics, especially in first episode. Olanzapine has good evidence in first-episode psychosis.", contraindications: ["Metabolic syndrome", "Diabetes risk"], indianContext: "Olanzapine generic 10mg at ₹30-50/tablet. Risperidone generic at ₹20-40/tablet. All available at government pharmacies." },
          { drugClass: "Benzodiazepine (adjunctive for agitation/anxiety)", examples: ["Lorazepam 1-2mg IM/IV BD-TDS for acute phase", "Clonazepam 0.5-1mg PO OD for longer-term"], route: "IM/IV then Oral", duration: "1-2 weeks acute phase, then taper", reasoning: "Rapidly controls agitation and anxiety. Allows lower doses of antipsychotics needed. Prevents akathisia.", contraindications: ["Respiratory depression", "Substance use disorder history"], indianContext: "Lorazepam 1mg at ₹3-5/tablet. Widely available." },
          { drugClass: "Anticholinergic (for EPS management)", examples: ["Trihexyphenidyl 1mg BD-TDS"], route: "Oral", duration: "As needed for extrapyramidal side effects", reasoning: "First-generation antipsychotics cause EPS (dystonia, akathisia, parkinsonism) — anticholinergics provide relief", contraindications: ["Glaucoma", "Urinary retention"], indianContext: "Trihexyphenidyl 1mg at ₹2-3/tablet." },
        ],
        nonPharmacological: [
          { intervention: "Psychoeducation: Explain diagnosis, treatment plan, importance of adherence to patient and family", reasoning: "Poor insight initially — family support critical for adherence. Education improves outcome by 30-40%", duration: "Ongoing" },
          { intervention: "Structured daily activities and occupational therapy", reasoning: "Maintains function, provides purpose, distraction from psychotic symptoms", duration: "Throughout admission" },
          { intervention: "Group therapy focusing on reality testing and coping skills", reasoning: "Help patient develop strategies to manage residual symptoms and identify early warning signs of relapse", duration: "After stabilization" },
        ],
        monitoring: [
          { parameter: "Mental status examination and psychotic symptom severity", frequency: "Daily until stable, then weekly", target: "Reduction in delusions/hallucinations, improved insight", escalation: "If worsening — increase antipsychotic dose or add additional agent" },
          { parameter: "Suicide/harm risk assessment", frequency: "Every shift initially, then daily", target: "No suicidal ideation, no harm to others", escalation: "Any escalation — increase observation level to 1-to-1" },
          { parameter: "Extrapyramidal Side Effects (EPS) and tardive dyskinesia", frequency: "Daily — use AIMS, SAS, BARS scales", target: "Minimal to no EPS", escalation: "If severe EPS — add anticholinergic, reduce antipsychotic dose, or switch agent" },
          { parameter: "Metabolic parameters (weight, glucose, lipids)", frequency: "Weekly x 4 weeks, then monthly", target: "No significant weight gain, fasting glucose <100, lipids normal", escalation: "If metabolic dysfunction — consider switching to lower metabolic risk agent (aripiprazole)" },
        ],
        lifestyle: {
          dos: ["Regular sleep schedule (very important for psychosis management)", "Regular exercise — 30 min walk daily", "Avoid high-stress situations initially", "Attend psychoeducation sessions", "Regular follow-ups — never miss appointment"],
          donts: ["ABSOLUTELY NO CANNABIS OR ILLICIT DRUGS — major relapse risk", "No alcohol", "No social isolation — maintain family contact", "Do not stop medications on own initiative", "Avoid high-EE (expressed emotion) family members if possible"],
          indianSpecific: ["Inform employer/school about medical leave — may need 2-4 weeks minimum", "In many Indian families, mental illness is stigmatized — involve trusted family member in treatment", "Consider community mental health services in your area (NMHS, NRHM programs)", "Low-cost antipsychotics available at government hospitals and ASHA centers"],
        },
        followUp: {
          when: "1 week after discharge, then bi-weekly x 4 weeks, then monthly",
          what: ["Psychiatric assessment for symptom control", "Metabolic monitoring (weight, glucose at 1 month)", "Prolactin levels at 3 months (if on risperidone/paliperidone)", "Lipid profile at 3 months", "Family psychoeducation session"],
        },
        referral: {
          needed: true,
          to: "Psychiatrist for long-term management, Clinical Psychologist for cognitive behavioral therapy",
          urgency: "IMMEDIATE — within 48 hours of diagnosis",
        },
      },
      redFlags: [
        { flag: "Suicidal ideation with command hallucinations", action: "1-to-1 observation, increase benzodiazepine, consider ECT if life-threatening", urgency: "IMMEDIATE" },
        { flag: "Neuroleptic Malignant Syndrome (fever, rigidity, altered mental status, elevated CPK)", action: "Stop antipsychotic immediately, aggressive cooling, supportive care, dantrolene if severe", urgency: "IMMEDIATE" },
        { flag: "Acute Dystonia (oculogyric crisis, torticollis, opisthotonus)", action: "IM Benztropine or Diphenhydramine 50mg IM — rapid relief", urgency: "URGENT" },
        { flag: "Treatment-resistant psychosis (no response after 6-8 weeks of adequate antipsychotic)", action: "Switch to Clozapine (requires blood monitoring) — gold standard for resistant psychosis", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "First-episode psychosis has 80% remission rate with early treatment — delay worsens prognosis",
        "Psychosis can be primary (schizophrenia spectrum) or secondary (substance, organic) — always rule out organic causes with MRI",
        "Cannabis is a recognized risk factor for psychosis in vulnerable individuals — screening and counseling essential",
        "Antipsychotics work on positive symptoms (hallucinations, delusions) better than negative symptoms (withdrawal, amotivation)",
        "Family psychoeducation improves medication adherence and reduces relapse by 40-50%",
        "Second-generation antipsychotics have better tolerability in first-episode psychosis than first-generation",
        "Metabolic side effects (weight gain, diabetes) are common — monitor closely and switch agents if needed",
      ],
      commonMistakes: [
        "Missing organic causes (brain tumor, encephalitis, seizure disorder) — always do MRI brain in first-episode psychosis",
        "Not assessing suicide/harm risk adequately — command hallucinations have highest suicide risk",
        "Starting with high-dose antipsychotics in first-episode — lower doses often sufficient, reduces side effects",
        "Not involving family in treatment — family support is predictor of treatment adherence",
        "Discontinuing antipsychotics after symptom improvement thinking patient is 'cured' — relapse risk >80% if stopped early",
        "Not screening for substance use — cannabis-induced psychosis can mimic primary psychosis",
      ],
      relevantHistoryQs: ["onset", "character", "associated", "past_psych", "fam_psych", "substance_use", "social_stressors", "sleep_changes", "mood_changes"],
      relevantExamIds: ["general_appearance", "speech", "affect", "consciousness", "meningeal_signs", "reflexes"],
      difficulty: "HARD",
      estimatedMinutes: 25,
      subjectTags: ["PS", "BH"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "PS1.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];

// ═════════════════════════════════════════════════════════════════════════
// ANESTHESIOLOGY: Anaphylaxis During General Anesthesia
// ═════════════════════════════════════════════════════════════════════════

export const anesthesiologyScenarios = [
  {
    topicCode: "AS-MOD-01-TOP-01",
    scenario: {
      patientAge: 38,
      patientSex: "Female",
      patientOccupation: "Bank manager",
      patientLocation: "Bangalore, Karnataka",
      chiefComplaint: "Scheduled for elective hernia repair — intraoperative emergency",
      historyOfPresent: `
- Patient is under general anesthesia (intubated, paralyzed) for elective inguinal hernia repair
- Induction: Standard rapid sequence intubation with Propofol, Succinylcholine, Fentanyl — 10 minutes ago
- Intubation: Successful, tube at 22cm at teeth, bilateral air entry confirmed
- Surgery start: Surgeon draped and started surgery 5 minutes ago (minimal invasive laparoscopic approach)
- INCIDENT: 2 minutes into surgery, anesthesiologist notices:
  - Sudden drop in SpO2 from 100% to 88% (on 100% O2)
  - Blood pressure rising acutely from 120/75 to 155/92
  - Heart rate rising from 70 to 135 bpm (sinus tachycardia)
  - Flushing/erythema visible on exposed chest wall above surgical drapes
  - Severe bronchospasm heard on auscultation — bilateral wheeze
  - Sudden rise in peak airway pressure (PIP increased from 22 to 45 cmH2O)
  - Angioedema noted — lips and face are swollen
      `.trim(),
      pastHistory: "Known history of seasonal allergies (hay fever). Allergy to Penicillin (develops rash). No previous anesthetics. No previous surgery. No asthma. No atopy-related illnesses.",
      familyHistory: "Mother has severe food allergies. Cousin has asthma.",
      socialHistory: "Works as bank manager. Non-smoker. Social drinker. No drug use. No occupational exposures.",
      drugHistory: "Cetirizine 10mg daily for allergies. Levothyroxine 50 mcg for hypothyroidism. NKDA documented as PENICILLIN (rash) — but chart didn't specifically mention reaction to specific anesthetic agents.",
      vitals: { pulse: 135, bp: "155/92", temp: 37.0, rr: "Not assessable (sedated/paralyzed)", spo2: 88 },
      generalExam: `
- Appearance: Sedated and paralyzed (fully anesthetized)
- Skin: Flushed erythema on chest and neck above surgical field — urticaria visible
- Face: Angioedema of lips, tongue, pharynx — visible swelling
- Respiratory: Severe bronchospasm with bilateral wheeze
- Cardiovascular: Tachycardic (135), hypertensive (155/92)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "Tachycardic, regular rhythm (no arrhythmias yet)",
          blood_pressure: "155/92 mmHg (elevated from baseline 120/75)",
          peripheral_pulses: "Strong, bounding",
        },
        respiratory: {
          chest_inspection: "Parallel ventilation (no paradoxical movement noted under anesthesia)",
          auscultation_lungs: "Bilateral severe bronchospasm — wheeze throughout inspiration and expiration",
          peak_airway_pressure: "Elevated to 45 cmH2O (from baseline 22), indicating increased airway resistance",
          spo2: "88% on 100% FiO2 — hypoxemia despite supplemental O2",
        },
        abdominal: {
          palpation: "Surgeon not started deep dissection yet (minimal incision made) — can proceed with emergency measures",
        },
        neurological: {
          consciousness: "Sedated and paralyzed for surgery",
        },
      },
      availableInvestigations: [
        { id: "ekg", name: "12-lead ECG (stat from bedside)", cost: 200, turnaround: "Immediate", category: "Cardiac", result: "Sinus tachycardia at 135 bpm. No ST changes, no T wave inversion. Normal sinus rhythm pattern.", isAbnormal: true, interpretation: "Sinus tachycardia consistent with anaphylaxis and sympathetic response. No evidence of MI yet.", isEssential: true },
        { id: "cbc", name: "CBC (urgent from operating room)", cost: 300, turnaround: "30 min", category: "Hematology", result: "Hb: 12.2 g/dL, WBC: 7,800/μL, Platelets: 1.8 lakhs", isAbnormal: false, interpretation: "Normal — rules out acute anemia or DIC at presentation", isEssential: true },
        { id: "coag", name: "Coagulation Profile (PT, aPTT, INR)", cost: 400, turnaround: "30-45 min", category: "Hematology", result: "PT: 12.2 sec, aPTT: 28 sec, INR: 1.0 — all normal", isAbnormal: false, interpretation: "Normal coagulation — important to check for DIC development", isEssential: true },
        { id: "tryptase", name: "Serum Tryptase (Mast Cell Marker)", cost: 1500, turnaround: "2-4 hours", category: "Immunology", result: "Acute tryptase: 8.5 ng/mL (Normal: <11.4), Baseline tryptase: To be drawn post-event for comparison", isAbnormal: true, interpretation: "Elevated compared to typical baseline — supports diagnosis of anaphylaxis", isEssential: true },
        { id: "histamine", name: "Plasma Histamine", cost: 2000, turnaround: "4-6 hours", category: "Immunology", result: "Can be measured but takes longer — not practical for acute management", isAbnormal: false, interpretation: "Helpful for retrospective confirmation but too slow for acute phase", isEssential: false },
        { id: "abg", name: "Arterial Blood Gas (from arterial line)", cost: 800, turnaround: "5 min", category: "Biochemistry", result: "pH: 7.38, PaO2: 82 mmHg (LOW on 100% O2), PaCO2: 38 mmHg, HCO3: 22 mEq/L, SaO2: 92%", isAbnormal: true, interpretation: "Type 1 respiratory failure (hypoxemia) due to severe bronchospasm and airway edema", isEssential: true },
        { id: "lactate", name: "Serum Lactate", cost: 500, turnaround: "15 min", category: "Biochemistry", result: "Lactate: 1.2 mmol/L (Normal: <2), indicating no tissue hypoperfusion yet", isAbnormal: false, interpretation: "Normal at this early stage — important baseline", isEssential: false },
        { id: "ige_IgE_specific", name: "Specific IgE testing (post-event)", cost: 3000, turnaround: "Days to weeks", category: "Immunology", result: "To be sent post-event to identify culprit antigen", isAbnormal: false, interpretation: "Will help identify causative agent in anesthesia — likely Succinylcholine, Rocuronium, or rarely Propofol", isEssential: true },
      ],
      correctDiagnosis: "Intraoperative Anaphylaxis — Most likely Neuromuscular Blocking Agent (NMBA) anaphylaxis",
      differentials: [
        { diagnosis: "Anaphylaxis to Propofol (induction agent)", likelihood: "MEDIUM", reasoning: "Propofol can cause anaphylaxis but is less common (0.5-1 per 10,000) compared to NMBAs. Presents acutely after induction." },
        { diagnosis: "Anaphylaxis to Succinylcholine", likelihood: "MEDIUM", reasoning: "Succinylcholine commonly causes anaphylaxis (1 per 5,000-10,000). Used during RSI. Timeline fits." },
        { diagnosis: "Anaphylaxis to Antibiotic (if given)", likelihood: "MEDIUM", reasoning: "If prophylactic antibiotic given (Ceftriaxone despite penicillin allergy documented) — would cause anaphylaxis. Chart should be reviewed immediately." },
        { diagnosis: "Anaphylaxis to Latex (from gloves/equipment)", likelihood: "LOW", reasoning: "Possible but usually develops over minutes of exposure to latex. Most OR staff use non-latex in such cases now." },
        { diagnosis: "Acute Asthma Exacerbation (not anaphylaxis)", likelihood: "LOW", reasoning: "Patient has no asthma history. Anaphylaxis more likely given acute onset, hypotension potential, and multisystem involvement (skin, airway)." },
      ],
      diagnosticReasoning: "38-year-old female under GA for hernia repair. 2 minutes into surgery (10 minutes post-induction), acute onset of hypoxemia (SpO2 88% on 100% O2), severe bronchospasm (bilateral wheeze, elevated peak pressures), flushing with urticaria, angioedema of face and lips, tachycardia (135), hypertension (155/92). Timeline and presentation pathognomonic for acute anaphylaxis. Most likely causative agent is NMBA (Succinylcholine 100mg given during RSI 10 minutes ago). Anaphylaxis to anesthetic agents accounts for 1 in 5,000-10,000 GA cases, with NMBAs responsible for 60-70% of cases in developed countries.",
      managementPlan: {
        immediateActions: [
          { action: "STOP surgery immediately — call surgeon to step back and stop instrumentation", reasoning: "Patient's life is in danger — surgery is less important than managing anaphylaxis", priority: "STAT" },
          { action: "Give IM Epinephrine 0.5mg (1:1000) IM in anterolateral thigh immediately (do not delay)", reasoning: "Epinephrine is the FIRST-LINE, life-saving drug in anaphylaxis. Delays increase mortality risk. Even during surgery, this is given IM if IV line not accessible immediately.", priority: "STAT — do not delay more than 5 seconds" },
          { action: "Increase FiO2 to 100% if not already, ensure adequate ventilation", reasoning: "Patient is hypoxemic due to bronchospasm — maximum oxygenation needed", priority: "STAT" },
          { action: "Establish/check IV access immediately", reasoning: "Need IV for medications and fluid resuscitation", priority: "STAT" },
          { action: "Call for help — Senior anesthesiologist, ICU support, Crash cart nearby", reasoning: "This is a medical emergency requiring all hands on deck", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Epinephrine (Adrenaline) — FIRST-LINE", examples: ["IM: 0.5mg (0.5mL of 1:1000) IM in anterolateral thigh — can repeat every 5-15 min PRN", "IV: 0.1-0.5mg (0.1-0.5mL of 1:1000 diluted) IV slow push if IV already in place"], route: "IM preferred (faster absorption), IV if immediate access", duration: "Repeat every 5-15 minutes until response", reasoning: "Epinephrine is the ONLY drug that can reverse the pathophysiology of anaphylaxis — increases BP, improves cardiac output, relieves bronchospasm. GIVING EPINEPHRINE WITHIN 15-30 MINUTES REDUCES MORTALITY BY 95%.", contraindications: ["None — in anaphylaxis, benefits outweigh any risks"], indianContext: "Epinephrine 1mg/mL (1:1000) ampoules widely available at ₹20-50. MANDATORY in every OR." },
          { drugClass: "IV Fluids (aggressive resuscitation)", examples: ["Rapid IV Normal Saline or Ringer's Lactate — 1-2 liters bolus over 10-15 minutes"], route: "IV", duration: "Until BP normalized and perfusion restored", reasoning: "Anaphylaxis causes massive vasodilation and fluid shift into tissues. Hypovolemia develops rapidly — fluid resuscitation is critical.", contraindications: ["None in anaphylaxis"], indianContext: "Normal Saline bags (500mL and 1L) available in every OR." },
          { drugClass: "H1 Receptor Antagonist (antihistamine)", examples: ["IV Diphenhydramine 50mg IV slow push OR Promethazine 25-50mg IV", "OR Cetirizine 10mg if oral route available (but unlikely during GA)"], route: "IV", duration: "Single dose during acute phase, then 6-hourly for 48 hours", reasoning: "Blocks histamine-mediated effects — reduces urticaria, itching, angioedema. Works slower than epinephrine so NOT first-line.", contraindications: ["Anticholinergic side effects — use with caution if tachycardia present"], indianContext: "IV Promethazine 25mg ampoule at ₹10-15. Diphenhydramine IV at ₹15-25." },
          { drugClass: "H2 Receptor Antagonist (additional antihistamine)", examples: ["Ranitidine 50mg IV", "Famotidine 20mg IV"], route: "IV", duration: "Single dose, then 8-12 hourly for 48 hours", reasoning: "Additional benefit over H1 alone — further blocks histamine effects. Used alongside H1 blockers.", contraindications: ["None significant"], indianContext: "Ranitidine available at ₹10-20 per ampoule." },
          { drugClass: "Corticosteroid (prevention of biphasic anaphylaxis)", examples: ["Methylprednisolone 125mg IV OR Dexamethasone 8-10mg IV"], route: "IV", duration: "Repeat at 6 hours if needed, then taper over 2-3 days", reasoning: "Prevents biphasic reactions (10-15% of anaphylaxis cases have recurrent symptoms hours later). Does NOT replace epinephrine.", contraindications: ["None — always give in anaphylaxis"], indianContext: "Methylprednisolone 125mg available at ₹50-100. Dexamethasone cheaper at ₹10-20." },
          { drugClass: "Bronchodilator (for bronchospasm)", examples: ["Salbutamol (Albuterol) 5mg nebulized", "Ipratropium Bromide 0.5mg nebulized with Salbutamol"], route: "Inhaled (nebulized)", duration: "Every 20 minutes x 2-3 doses, then as needed", reasoning: "Helps relieve airway obstruction. However, epinephrine is more effective for anaphylactic bronchospasm.", contraindications: ["None in anaphylaxis"], indianContext: "Salbutamol nebule solution at ₹30-50." },
          { drugClass: "Vasopressor (if refractory hypotension)", examples: ["Norepinephrine infusion 0.1-0.5 mcg/kg/min IV", "Metaraminol 5-10mg IV if hypotensive"], route: "IV infusion", duration: "Titrate to maintain SBP >90 mmHg", reasoning: "If IM epinephrine insufficient and BP drops. Usually not needed if epinephrine given promptly.", contraindications: ["Should be used IN ADDITION to, not instead of, epinephrine"], indianContext: "Norepinephrine vials available in ICU stock." },
        ],
        nonPharmacological: [
          { intervention: "Stop surgery immediately — do not resume until anaphylaxis fully controlled", reasoning: "Patient safety is paramount — surgery can be rescheduled", duration: "Until patient stabilized (minimum 30-60 minutes)" },
          { intervention: "Position patient supine (if possible) or left lateral decubitus to prevent aspiration", reasoning: "Maintain airway, prevent airway obstruction from angioedema", duration: "Until airway secured and edema resolves" },
          { intervention: "Continue mechanical ventilation with 100% oxygen", reasoning: "Maintain oxygenation during bronchospasm", duration: "Until SpO2 >95%, PaO2 >100 mmHg" },
          { intervention: "Prepare for difficult intubation — airway may be difficult due to angioedema", reasoning: "Swelling of lips, tongue, pharynx may obstruct airway progressively", duration: "Have tracheostomy/emergency airway kit ready" },
        ],
        monitoring: [
          { parameter: "Blood pressure and heart rate", frequency: "Every 1-2 minutes until stable, then every 5 minutes", target: "SBP >100 mmHg, HR 60-100 (avoid tachycardia >120)", escalation: "If BP still <90 after 2nd IM epinephrine — give IV epinephrine 0.1-0.5mg slow push" },
          { parameter: "SpO2 and respiratory mechanics (peak pressure, FiO2 requirements)", frequency: "Continuous", target: "SpO2 >95%, PaO2 >100, RR normalized", escalation: "If SpO2 not improving — consider intubation with smaller tube, manual bag-mask ventilation" },
          { parameter: "Airway assessment for angioedema progression", frequency: "Every 5 minutes", target: "No worsening of airway edema", escalation: "If angioedema worsening — consider early tracheostomy before airway lost" },
          { parameter: "Urine output and fluid balance", frequency: "Hourly", target: "UOP >0.5 mL/kg/hr, indicating adequate perfusion", escalation: "If low UOP — increase fluid administration" },
        ],
        lifestyle: {
          dos: ["Patient should wear medical alert bracelet stating 'ANAPHYLAXIS TO [AGENT]'", "Get allergy alert documented in electronic medical record", "Obtain letter from anesthesiologist with details of reaction", "In future surgeries, inform anesthesiologist of this incident immediately", "Consider referral to allergist for skin testing/IgE testing"],
          donts: ["NEVER undergo GA without informing anesthesiologist of this reaction", "NEVER take penicillin or cephalosporins (if NMBA reaction, still relevant due to existing penicillin allergy)", "Do not panic if need surgery again — there are alternatives available"],
          indianSpecific: ["Wear medical alert band in local language (Hindi/Regional) stating anaphylaxis reaction", "Report to nearest government hospital's allergy clinic for testing and documentation", "In India, NMBA allergy is increasing — ensure documentation in Aadhar-linked health records if possible"],
        },
        followUp: {
          when: "2 weeks after discharge to allergist, then 6 weeks for delayed testing",
          what: ["Skin prick testing to identify causative NMBA", "Specific IgE testing to confirm sensitization", "Baseline tryptase level (for comparison with acute level)", "Consider graded provocative testing to safer alternative agents"],
        },
        referral: {
          needed: true,
          to: "Allergist/Immunologist for skin testing and agent identification, Senior Anesthesiologist for future surgery planning",
          urgency: "WITHIN 2 WEEKS — delay may result in similar reaction if GA needed",
        },
      },
      redFlags: [
        { flag: "Unresponsiveness to first epinephrine dose — BP still <90 mmHg after 5 minutes", action: "Give second IM epinephrine 0.5mg, or switch to IV epinephrine 0.1-0.5mg slow push if IV in place. Escalate to vasopressor infusion.", urgency: "IMMEDIATE" },
        { flag: "Airway obstruction from progressive angioedema (difficulty ventilating, stridor)", action: "Call ENT for emergency tracheostomy. Prepare for difficult airway — consider smaller endotracheal tube.", urgency: "IMMEDIATE" },
        { flag: "Biphasic anaphylaxis (symptoms recur after initial improvement)", action: "Repeat epinephrine, give IV antihistamines and corticosteroids, admit to ICU for monitoring", urgency: "IMMEDIATE" },
        { flag: "Cardiac arrest (VF or pulseless VT)", action: "Initiate ACLS protocol, continue epinephrine IV 1mg every 3-5 minutes, chest compressions", urgency: "IMMEDIATE" },
      ],
      keyLearningPoints: [
        "Epinephrine IM is FIRST-LINE and only definitive treatment for anaphylaxis — give within 30 minutes to reduce mortality by 95%",
        "NMBAs (Succinylcholine, Rocuronium) cause 60-70% of anesthetic anaphylaxis — recognize the signs early",
        "Anaphylaxis during GA presents atypically without urticaria initially — look for hypotension, bronchospasm, flushing, tachycardia",
        "Epinephrine dosing: IM 0.3-0.5mg (1:1000), can repeat every 5-15 minutes. IV 0.01mg/kg (1:10,000) slow push if access available",
        "Biphasic anaphylaxis occurs in 10-15% of cases — admit all anaphylaxis patients for 6-8 hour observation",
        "H1 and H2 blockers are adjunctive, NOT first-line — epinephrine is the ONLY drug that reverses anaphylaxis pathophysiology",
        "Always identify causative agent via skin testing and IgE to allow safe GA with alternative agents in future",
      ],
      commonMistakes: [
        "Delaying epinephrine while waiting for IV access — IM is faster, equally effective, ALWAYS appropriate in anaphylaxis",
        "Using IV antihistamines or corticosteroids as first-line instead of epinephrine — these are adjunctive only",
        "Using IV epinephrine at concentration 1:1000 undiluted — causes severe hypertension. Dilute to 1:10,000 for IV use.",
        "Not observing patient for biphasic reaction — discharge without 6-8 hour observation leads to missed second reaction",
        "Not identifying causative agent — patient at risk of same reaction in future if undiagnosed",
        "Not documenting clearly in chart — essential for future anesthesiologists",
      ],
      relevantHistoryQs: ["medication_given", "onset", "associated_symptoms", "previous_allergies", "drug_allergies"],
      relevantExamIds: ["blood_pressure", "heart_rate", "spo2", "peak_airway_pressure", "skin_exam_urticaria", "angioedema", "auscultation_lungs"],
      difficulty: "HARD",
      estimatedMinutes: 22,
      subjectTags: ["AS", "EM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "AS1.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];

// ═════════════════════════════════════════════════════════════════════════
// RADIOLOGY: Acute Stroke — CT Brain Interpretation
// ═════════════════════════════════════════════════════════════════════════

export const radiologyScenarios = [
  {
    topicCode: "RD-MOD-01-TOP-01",
    scenario: {
      patientAge: 58,
      patientSex: "Male",
      patientOccupation: "Retired teacher",
      patientLocation: "Hyderabad, Telangana",
      chiefComplaint: "Sudden-onset weakness on right side of body with slurred speech, brought to ED",
      historyOfPresent: `
- Onset: ACUTE onset 1.5 hours ago while sitting watching television at home
- Character: Sudden loss of strength on right arm and right leg (cannot move right hand, drags right leg)
- Associated: Slurred speech, difficulty speaking (expressive difficulty), left-sided facial droop
- Timeline: Wife noticed "drooping right side" and difficulty speaking, immediately brought to hospital
- Duration: Weakness present continuously for last 1.5 hours, no improvement
- Last known well: 1.5 hours ago (critical for tPA window — 4.5 hour window, 3 hour preferred)
- No head trauma, no headache, no loss of consciousness
      `.trim(),
      pastHistory: "Hypertension for 8 years (takes Amlodipine 5mg, irregular compliance). No diabetes. No previous stroke/TIA. No heart disease. Underwent cholecystectomy 5 years ago.",
      familyHistory: "Father died of 'stroke' at age 68. Mother has diabetes and hypertension.",
      socialHistory: "Retired teacher. Smokes 5-10 cigarettes/day for 30 years (planning to quit). Occasional alcohol (2-3 beers per week). Sedentary lifestyle. Diet: high salt, high oil.",
      drugHistory: "Amlodipine 5mg daily (irregular compliance). No antiplatelet agents. No other medications. No known drug allergies.",
      vitals: { pulse: 92, bp: "165/102", temp: 37.1, rr: 18, spo2: 96 },
      generalExam: `
- General appearance: Alert, oriented, distressed, conscious
- Speech: Slurred, expressive dysphasia present
- Facial droop: Left-sided facial asymmetry (right side affected)
- Right arm and leg: Flaccid weakness, cannot move against gravity
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal, no murmurs",
          blood_pressure: "165/102 mmHg bilaterally (elevated)",
          peripheral_pulses: "Regular, normal rate",
          carotid_bruits: "No bruits appreciated",
        },
        respiratory: {
          auscultation_lungs: "Clear bilateral air entry, no added sounds",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended",
          palpation: "No organomegaly",
        },
        neurological: {
          consciousness: "GCS 15/15 — alert and oriented x3",
          speech: "Expressive dysphasia — receptive language intact",
          cranial_nerves: "CN II-XII — left-sided facial droop (CN VII involvement), tongue midline",
          motor: "Right arm: 0/5 (flaccid, no movement), Right leg: 1/5 (minimal antigravity), Left side: 5/5 (normal)",
          sensory: "Gross sensation intact throughout (pain and light touch present)",
          cerebellar: "Unable to assess due to motor deficit",
          reflexes: "Right biceps and triceps initially diminished, right knee jerk diminished, right ankle jerk diminished (hyporeflexic right side)",
          plantar: "Right plantar reflex — extensor (Babinski positive), left flexor (normal)",
        },
      },
      availableInvestigations: [
        { id: "ct_brain_ncpl", name: "CT Brain Non-Contrast (NCCT) — STAT", cost: 3000, turnaround: "10 min", category: "Imaging", result: "NON-CONTRAST CT BRAIN: No acute intracranial hemorrhage. No hyperdensity in subarachnoid space, epidural, or subdural. No midline shift. Ventricles normal size. Hypodensity in left middle cerebral artery (MCA) territory (left frontal and parietal lobes) — consistent with acute ischemic stroke. Loss of gray-white matter differentiation. Insular ribbon sign subtle but present. No mass lesion. Anterior and posterior circulation patent by CT visualization.", isAbnormal: true, interpretation: "ACUTE ISCHEMIC STROKE in left MCA territory. No hemorrhage. Hypodensity indicates infarction within ~2-4 hours. Patient is within thrombolytic window (1.5 hours from onset).", isEssential: true },
        { id: "ct_perfusion", name: "CT Perfusion (CTP) — if available", cost: 5000, turnaround: "15 min", category: "Imaging", result: "CT Perfusion shows: Mean Transit Time (MTT) map — prolonged in left MCA territory (mismatch present). Cerebral Blood Volume (CBV) — preserved in core infarct region (penumbra likely salvageable). Cerebral Blood Flow (CBF) — reduced. Mismatch ratio: Ischemic penumbra (at-risk tissue) exceeds core infarct — suggests potential for tissue salvage.", isAbnormal: true, interpretation: "Perfusion-diffusion mismatch indicates viable penumbra that can be salvaged with urgent reperfusion therapy (thrombolysis or thrombectomy).", isEssential: false },
        { id: "diffusion_mri", name: "MRI Brain with Diffusion Weighted Imaging (DWI-MRI) — if CT inconclusive", cost: 8000, turnaround: "30-45 min", category: "Imaging", result: "Not immediately available in most Indian hospitals — takes too long. However, if done: DWI shows restricted diffusion (bright signal) in left MCA territory — confirms acute ischemic stroke. ADC map shows low signal — confirms restricted water diffusion (ischemia).", isAbnormal: true, interpretation: "DWI is more sensitive than CT within first 24 hours for acute ischemia. Can identify infarction as early as minutes post-stroke. However, delayed — usually done after CT if any doubt.", isEssential: false },
        { id: "ct_angio", name: "CT Angiography (CTA) Head and Neck — to assess vessels", cost: 5000, turnaround: "15 min", category: "Imaging", result: "CTA shows: Left Middle Cerebral Artery (MCA) — OCCLUSION at M1 segment (proximal MCA). Left internal carotid artery (ICA) patent. Left anterior cerebral artery (ACA) patent. Right-sided vessels patent. No dissection. No aneurysm.", isAbnormal: true, interpretation: "Proximal left MCA occlusion — ideal candidate for mechanical thrombectomy. This finding supports urgent intervention.", isEssential: true },
        { id: "blood_glucose", name: "Fasting Blood Sugar (Stat glucose)", cost: 100, turnaround: "5 min", category: "Biochemistry", result: "Fasting Blood Sugar: 168 mg/dL", isAbnormal: true, interpretation: "Hyperglycemia — stress hyperglycemia from acute stroke. Worsen prognosis. Needs control.", isEssential: true },
        { id: "cbcnov", name: "CBC", cost: 300, turnaround: "30 min", category: "Hematology", result: "Hb: 13.2 g/dL, WBC: 8,900/μL, Platelets: 2.2 lakhs", isAbnormal: false, interpretation: "Normal — no anemia or thrombocytopenia (important for thrombolytic safety).", isEssential: true },
        { id: "coagulation", name: "Coagulation Profile (PT/INR, aPTT)", cost: 400, turnaround: "30 min", category: "Hematology", result: "PT: 13.2 sec, INR: 1.0, aPTT: 28 sec", isAbnormal: false, interpretation: "Normal — safe to give tPA from coagulation standpoint.", isEssential: true },
        { id: "rft", name: "Renal Function Test (for contrast safety)", cost: 400, turnaround: "30 min", category: "Biochemistry", result: "Urea: 34 mg/dL, Creatinine: 1.0 mg/dL", isAbnormal: false, interpretation: "Normal renal function — safe for CT angiography contrast administration.", isEssential: true },
        { id: "ecg", name: "12-lead ECG (rule out MI/AFib)", cost: 200, turnaround: "5 min", category: "Cardiac", result: "Normal sinus rhythm. Normal intervals. No ST elevation. Normal T waves. No evidence of acute MI or arrhythmia.", isAbnormal: false, interpretation: "Normal ECG — no acute coronary syndrome or atrial fibrillation evident.", isEssential: true },
      ],
      correctDiagnosis: "Acute Ischemic Stroke — Left MCA Territory, M1 Occlusion, Within Thrombolytic Window",
      differentials: [
        { diagnosis: "Transient Ischemic Attack (TIA)", likelihood: "LOW", reasoning: "TIA symptoms should resolve within 24 hours (usually <1 hour). Patient's symptoms persistent at 1.5 hours with imaging evidence of infarction — not TIA." },
        { diagnosis: "Todd's Paralysis (post-ictal from seizure)", likelihood: "LOW", reasoning: "No witnessed seizure. Neuroimaging shows acute infarction, not post-seizure change. Patient takes no antiepileptics." },
        { diagnosis: "Hemiplegic Migraine", likelihood: "LOW", reasoning: "Young presentation typical. This patient is 58. Also imaging shows acute infarction, not migraine." },
        { diagnosis: "Intracerebral Hemorrhage (ICH) with mass effect", likelihood: "LOW", reasoning: "CT shows no hemorrhage. CT is highly sensitive for acute blood." },
      ],
      diagnosticReasoning: "58-year-old male with hypertension and smoking history presenting with acute onset (1.5 hours ago) left-sided weakness and expressive dysphasia — classic acute stroke presentation. Exam shows right hemiplegia, right facial droop, and expressive dysphasia with intact comprehension (Broca's area involvement — classic MCA stroke). NCCT brain shows acute hypodensity in left MCA territory consistent with ischemic stroke. CTA shows proximal left MCA occlusion at M1. CT perfusion shows mismatch (penumbra salvageable). Patient is WITHIN thrombolytic window (1.5/4.5 hours) and even better within 3-hour preferred window. Candidate for tPA immediately or thrombectomy (depending on institution capability).",
      managementPlan: {
        immediateActions: [
          { action: "Activate Stroke Alert — expedite all investigations and imaging", reasoning: "Time is brain — every minute of ischemia = thousands of neurons dying. Target is door-to-needle time <60 minutes for tPA.", priority: "STAT" },
          { action: "NCCT brain within 10 minutes (rule out hemorrhage before thrombolysis)", reasoning: "Critical — must rule out hemorrhage which is contraindication for tPA. CT is mandatory before thrombolysis decision.", priority: "STAT" },
          { action: "Establish IV access immediately, start normal saline at KVO (keep vein open) rate", reasoning: "Access for medications and monitoring", priority: "STAT" },
          { action: "NPO (nothing by mouth) — aspiration risk due to dysphasia", reasoning: "Cannot swallow safely — no oral intake", priority: "STAT" },
          { action: "Continuous cardiac monitoring, continuous pulse oximetry", reasoning: "Monitor for complications", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Thrombolytic (tPA — Tissue Plasminogen Activator)", examples: ["Alteplase (tPA) IV 0.9 mg/kg (max 90 mg) — 10% as bolus over 1 minute, remainder over 60 minutes"], route: "IV", duration: "Infusion over 60 minutes, then monitor", reasoning: "Gold standard for acute ischemic stroke within 4.5 hours. Dissolves clot and restores blood flow. Improves outcome by 30-40% if given within 3 hours.", contraindications: ["Active bleeding", "Recent surgery (<3 months for intracranial, <1 month for other major)", "Platelet count <100,000", "PT/INR >1.7", "aPTT >40", "Hemorrhage on CT", "Seizure at stroke onset (if unclear stroke vs post-ictal)"], indianContext: "tPA available at advanced centers in metros (Delhi, Mumbai, Bangalore) at ₹50,000-80,000 per dose. NOT available in many tier-2 or tier-3 cities. Cost prohibitive for many Indian patients — only 0.1% of Indian stroke patients receive thrombolysis." },
          { drugClass: "Antiplatelet (Aspirin) — IF tPA not given or as adjunct", examples: ["Aspirin 75-325mg PO/NG"], route: "Oral/NG tube (if unable to swallow)", duration: "Daily, long-term", reasoning: "If tPA not available or contraindicated, aspirin is given. Should NOT be given within 24 hours of tPA (increases bleeding risk).", contraindications: ["GI bleeding", "Aspirin allergy"], indianContext: "Aspirin 75mg available at ₹1-2 per tablet in all pharmacies." },
          { drugClass: "Anticoagulant (if cardioembolic source or high-risk AFib)", examples: ["Enoxaparin 1mg/kg SC BD if cardioembolic (but usually NOT in acute phase if tPA given)"], route: "SC/IV", duration: "Varies", reasoning: "If stroke due to AFib or cardioembolic source — may use anticoagulation. However, in acute phase, often defer until after observation period.", contraindications: ["Active bleeding", "Thrombocytopenia"], indianContext: "Enoxaparin available at ₹200-400 per dose." },
          { drugClass: "Antihypertensive (BP management)", examples: ["IV Labetalol 10-20mg slow push, then infusion 2-8mg/min", "OR Nicardipine IV infusion 0.5 mg/min, titrate to effect"], route: "IV", duration: "Titrate to target BP", reasoning: "Target BP <185/110 before tPA (allows tPA administration). After tPA, target BP <180/105 (avoid excessive lowering which worsens ischemia). In acute stroke, high BP is often consequence of stroke, not cause — avoid aggressive lowering.", contraindications: ["Hypotension (<90 systolic)"], indianContext: "Labetalol 100mg in 20mL vials at ₹30-50. Nicardipine not widely available in India — use Labetalol or other agents." },
          { drugClass: "Blood Sugar Management", examples: ["Insulin infusion if glucose >180 mg/dL, target 140-180", "Start sliding scale insulin if needed"], route: "IV infusion", duration: "Until glucose <140 mg/dL, then transfer to SC", reasoning: "Hyperglycemia worsens stroke outcome. This patient's glucose is 168 — mild elevation, target is correction.", contraindications: ["Hypoglycemia"], indianContext: "Insulin available widely. Cost: ~₹100 per vial." },
        ],
        nonPharmacological: [
          { intervention: "Head elevation 30 degrees", reasoning: "Improve cerebral perfusion, reduce ICP", duration: "Throughout acute phase" },
          { intervention: "Keep patient NPO (nothing by mouth) — potential NG tube for feeding/medications if dysphagia present", reasoning: "Aspiration risk due to expressive dysphasia. Swallow assessment needed before oral intake.", duration: "Until swallow assessment done (usually 6-24 hours)" },
          { intervention: "Physiotherapy and occupational therapy consultation for early mobilization", reasoning: "Prevent contractures, aspiration pneumonia, DVT. Begin within 24-48 hours.", duration: "Throughout admission and rehabilitation" },
          { intervention: "Speech-language pathology consult for dysphasia assessment", reasoning: "Assess swallowing safety, speech therapy planning", duration: "Within 24-48 hours" },
        ],
        monitoring: [
          { parameter: "Neurological status (NIHSS score) and motor/sensory function", frequency: "Every 30 min for first 2 hours (if given tPA), then hourly x 6, then 4-hourly", target: "Improvement in NIHSS score, reduction in motor deficit", escalation: "If SUDDEN neurological deterioration — check CT for hemorrhage/reperfusion injury, consider ICU transfer" },
          { parameter: "Blood pressure", frequency: "Every 15 min initially, then hourly", target: "SBP 140-180, DBP <105 (before tPA: <185/110)", escalation: "If SBP >220 or <90 — treat per protocol" },
          { parameter: "Blood glucose", frequency: "Every 2 hours x 8, then 4-hourly", target: "Glucose 140-180 mg/dL", escalation: "If glucose >300 — increase insulin" },
          { parameter: "Repeat CT brain at 24 hours post-tPA (or if deterioration)", frequency: "Standard at 24 hours", target: "No hemorrhagic transformation", escalation: "If significant hemorrhage — discuss prognosis, supportive care" },
        ],
        lifestyle: {
          dos: ["Smoking MUST STOP — smoking doubles stroke recurrence risk", "Regular physiotherapy — active and passive range of motion to prevent contractures", "Swallow assessment before oral intake — prevent aspiration", "Start aspirin 75mg daily after tPA observation period", "Blood pressure control — target <140/90 for secondary prevention", "Control blood sugar if diabetic"],
          donts: ["No smoking whatsoever", "No excessive exercise acutely — risk of further stroke", "No NSAIDs (increase stroke recurrence)", "No driving until medically cleared"],
          indianSpecific: ["Smoking cessation is MOST important — many Indian smokers discount this", "Ensure BP control with regular monitoring (check BP at ASHA center or local clinic)", "Physiotherapy crucial — many Indian patients neglect it, leading to permanent disability", "Affordable rehabilitation available at government hospitals", "In many Indian settings, access to advanced stroke centers limited — thrombolysis may not be available — ensure family understands this"],
        },
        followUp: {
          when: "2 weeks after discharge (clinic), then monthly x 3 months, then 3-monthly",
          what: ["Neurological assessment and modified Rankin scale (disability score)", "Imaging (MRI brain at 1-2 weeks for better understanding of infarct extent)", "Carotid duplex ultrasound (assess for carotid stenosis — may need intervention)", "Echocardiography (assess for cardiac source if cardioembolic stroke suspected)", "HbA1c and metabolic panel"],
        },
        referral: {
          needed: true,
          to: "Neurologist for acute stroke management, Interventional Neuroradiologist if thrombectomy candidate, Physiotherapist and Speech Therapist for rehabilitation",
          urgency: "IMMEDIATE — requires neurology consultation within hours of admission",
        },
      },
      redFlags: [
        { flag: "Hemorrhagic transformation (CT shows blood in infarction zone)", action: "Stop antiplatelet/anticoagulation. Monitor closely. May indicate poor prognosis. Discuss with family.", urgency: "IMMEDIATE" },
        { flag: "Malignant MCA syndrome (massive infarction with severe edema, herniation risk)", action: "Monitor ICP, consider osmotic therapy (hypertonic saline, mannitol), decompressive craniectomy may be needed in young patients", urgency: "IMMEDIATE" },
        { flag: "Recurrent stroke (sudden neurological worsening hours/days later)", action: "Repeat imaging. Consider re-thrombosis, vasospasm, or new event. Escalate anticoagulation or consider repeat intervention.", urgency: "IMMEDIATE" },
        { flag: "Aspiration pneumonia (fever, infiltrate on chest X-ray, low SpO2)", action: "Start antibiotics. Ensure NPO status maintained. Consider ICU transfer if severe.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Time is brain — every minute of ischemia = 1.9 million neurons dying. Acute stroke is a medical emergency like MI.",
        "tPA must be given within 4.5 hours of symptom onset (3 hours preferred). Beyond 4.5 hours, risk > benefit.",
        "NCCT is mandatory before thrombolysis to rule out hemorrhage — CT does not show acute ischemia well but rules out hemorrhage.",
        "MCA occlusion (most common stroke location) presents with contralateral hemiplegia, facial droop, and language/attention deficits (if left MCA).",
        "Thrombolysis improves outcome by 30-40% if given early — massive impact on disability prevention.",
        "Blood pressure in acute stroke: modest elevation is protective (cerebral autoregulation impaired) — avoid aggressive lowering.",
        "Post-tPA hemorrhagic transformation occurs in 5-10% even with tPA — monitor closely with repeat imaging.",
      ],
      commonMistakes: [
        "Delaying CT thinking it will delay tPA — CT is MANDATORY and must be done first (takes 10 min, should not delay tPA >60 min total).",
        "Aggressive BP lowering in acute stroke — leads to infarct extension. Target <180/105 after 24 hours, not immediately.",
        "Giving aspirin within 24 hours of tPA — increases hemorrhage risk by 40%. Wait 24 hours.",
        "Missed NIH Stroke Scale calculation — NIHSS predicts outcome. Calculate at presentation and regularly during monitoring.",
        "Not involving family in discussions about thrombolysis risks — 10% have symptomatic hemorrhage. Informed consent essential.",
        "Not assessing swallow before oral intake — aspiration pneumonia common, preventable.",
      ],
      relevantHistoryQs: ["onset_time", "character", "associated_symptoms", "last_known_well", "medical_history", "medications", "smoking"],
      relevantExamIds: ["speech", "facial_droop", "motor_strength_right", "motor_strength_left", "reflexes", "plantar_reflex", "cranial_nerves"],
      difficulty: "HARD",
      estimatedMinutes: 24,
      subjectTags: ["RD", "NR"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "RD1.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
