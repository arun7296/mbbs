// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for Microbiology (MI)
// Starting with high-yield infectious disease cases from Indian epidemiology
// ---------------------------------------------------------------------------

export const microbiologyScenarios = [
  // ─── 1. Dengue Hemorrhagic Fever ────────────────────────────────────────
  {
    topicCode: "MI-MOD-02-TOP-01",
    scenario: {
      patientAge: 32,
      patientSex: "Female",
      patientOccupation: "Software engineer (work from home)",
      patientLocation: "Bangalore, Karnataka",
      chiefComplaint: "Fever for 6 days with spontaneous bleeding and rash",
      historyOfPresent: `
- Onset: Sudden onset 6 days ago, fever peaked at 105°F on day 3
- Character: Fever high-spiking, came down for 24 hours (day 5-6), now rising again (critical phase)
- Associated: Severe body ache (myalgia, arthralgia), frontal headache, retro-orbital pain
- Day 3: Blanching maculopapular rash appeared over trunk (classically spares palms/soles initially)
- Day 5: Rash faded, but now appears again with darker areas — "islands of sparing" pattern
- Day 6: Spontaneous bleeding — gum bleeding while brushing, petechiae on shins, one episode of melena (dark stools)
- Associated: Loss of appetite, mild abdominal discomfort (right upper quadrant), no diarrhea
- Nausea and one episode of vomiting yesterday
      `.trim(),
      pastHistory: "No significant past illness. No diabetes. No viral hepatitis. No previous dengue infection. No surgeries.",
      familyHistory: "No significant family history. No dengue in immediate family.",
      socialHistory: "Non-smoker, non-alcoholic. Works from home. Lives in a 3BHK apartment in urban Bangalore with stagnant water in flower pots on balcony. Traveled to Goa for 4 days 12 days ago (beaches, resorts).",
      drugHistory: "Self-medicated Paracetamol 500mg QID since day 1, Ibuprofen 400mg TDS for 2 days (stopped after reading about NSAIDs in dengue), multivitamin. No known drug allergies.",
      vitals: { pulse: 108, bp: "110/72", temp: 39.8, rr: 20, spo2: 97 },
      generalExam: `
- General appearance: Ill-looking, fatigued, alert and oriented
- Pallor: Mild pallor present
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema (important — dengue can cause ascites)
- Petechiae: Multiple petechiae on lower extremities (positive tourniquet test in some areas)
- Rash: Maculopapular rash with areas of sparing (white areas within rash — pathognomonic "islands of sparing")
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal, tachycardic at 108 bpm",
          peripheral_pulses: "All pulses palpable, bounding",
          blood_pressure: "110/72 — borderline hypotension for normotensive patient",
          capillary_refill: "Normal (<2 seconds)",
        },
        respiratory: {
          chest_inspection: "Normal chest movements, tachypneic",
          auscultation_lungs: "Bilateral air entry clear, no added sounds",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended",
          palpation_superficial: "Mild tenderness in right upper quadrant",
          palpation_deep: "Hepatomegaly 2cm below costal margin (tender), no splenomegaly, no ascites on percussion",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "GCS 15/15, alert and oriented to time/place/person",
          cranial_nerves: "Intact",
          reflexes: "Normal",
        },
      },
      availableInvestigations: [
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 14.2 g/dL, WBC: 3,100/μL (LEUKOPENIA), Platelets: 48,000/μL (THROMBOCYTOPENIA)", isAbnormal: true, interpretation: "Classic dengue pattern: leukopenia + marked thrombocytopenia. Platelet count <50K indicates severe form. No anemia yet.", isEssential: true },
        { id: "dengue_ns1", name: "Dengue NS1 Antigen (ELISA)", cost: 600, turnaround: "2 hours", category: "Virology", result: "NS1 Antigen: POSITIVE (optical density 2.8)", isAbnormal: true, interpretation: "NS1 antigen positive during fever phase (days 0-5). Highly specific for dengue. Present in 80% of cases in first 5 days.", isEssential: true },
        { id: "dengue_igm", name: "Dengue IgM Antibody (ELISA)", cost: 500, turnaround: "2 hours", category: "Virology", result: "IgM: POSITIVE (OD 1.2, equivocal to positive — borderline)", isAbnormal: true, interpretation: "IgM starts appearing around day 3-5 of illness. Positive IgM + positive NS1 = confirmed dengue. Primary infection has delayed IgM.", isEssential: true },
        { id: "dengue_igG", name: "Dengue IgG Antibody (ELISA)", cost: 500, turnaround: "2 hours", category: "Virology", result: "IgG: NEGATIVE", isAbnormal: false, interpretation: "Negative IgG indicates PRIMARY dengue infection (not secondary/re-infection). Important for prognosis (secondary dengue has higher DHF/DSS risk).", isEssential: false },
        { id: "plt_trend", name: "Platelet count serial (repeat 24h later)", cost: 200, turnaround: "1 hour", category: "Hematology", result: "Expected to drop further to 30,000-40,000/μL (critical phase sign)", isAbnormal: true, interpretation: "Platelet count trajectory matters more than absolute value. Sharp drop >50% in 24 hours = warning sign.", isEssential: true },
        { id: "ast_alt", name: "Liver Function Tests (AST/ALT)", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "AST: 320 U/L (Normal: <40), ALT: 165 U/L (Normal: <40), Bilirubin: 1.2 mg/dL, Albumin: 3.8 g/dL", isAbnormal: true, interpretation: "Elevated transaminases with AST > ALT is typical for dengue hepatitis. Coagulopathy develops as disease progresses.", isEssential: true },
        { id: "pt_inr", name: "Coagulation Profile (PT/INR)", cost: 400, turnaround: "1 hour", category: "Hematology", result: "PT: 16.2 sec (Normal: 11-13.5), INR: 1.4 (upper normal), aPTT: 38 sec (Normal: 25-35)", isAbnormal: true, interpretation: "Mild coagulopathy due to liver dysfunction and platelet consumption. Prothrombin time prolongation in severe dengue.", isEssential: true },
        { id: "rft", name: "Renal Function Tests", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 38 mg/dL, Creatinine: 0.9 mg/dL, Sodium: 135 mEq/L (mild hyponatremia), Potassium: 3.8 mEq/L", isAbnormal: true, interpretation: "Normal renal function but mild hyponatremia suggests SIADH (common in dengue). Monitor for acute kidney injury in DSS.", isEssential: true },
        { id: "chest_xray", name: "Chest X-ray (PA view)", cost: 200, turnaround: "15 min", category: "Imaging", result: "Small bilateral pleural effusion (right > left), more obvious in costophrenic angle. No consolidation. No cardiomegaly.", isAbnormal: true, interpretation: "Pleural effusion in dengue indicates plasma leakage — critical phase marker. Usually appears around day 4-5 of illness.", isEssential: false },
        { id: "ultrasound", name: "Ultrasound Abdomen", cost: 800, turnaround: "20 min", category: "Imaging", result: "Hepatomegaly (16cm), mild hepatic steatosis, gall bladder wall edema (thickened), free fluid in Morrison's pouch (small amount), ascites minimal to trace", isAbnormal: true, interpretation: "Gallbladder wall edema is characteristic of dengue plasma leakage. Small ascites confirms 3rd spacing. No acute cholecystitis.", isEssential: false },
      ],
      correctDiagnosis: "Dengue Hemorrhagic Fever (DHF) — Grade II (with spontaneous bleeding) in Critical Phase",
      differentials: [
        { diagnosis: "Dengue Fever (Classic/DF)", likelihood: "HIGH but PARTIAL", reasoning: "Patient has fever, rash, myalgia — classic DF signs. However, thrombocytopenia <100K + spontaneous bleeding = DHF, not classic DF." },
        { diagnosis: "Chikungunya Fever", likelihood: "MEDIUM", reasoning: "Presents with fever, rash, severe arthralgia. However, no thrombocytopenia or hemorrhage. Chikungunya arthritis is more severe and prolonged." },
        { diagnosis: "Leptospirosis", likelihood: "LOW", reasoning: "Can present with fever, bleeding, hepatitis. However, no renal involvement, no biphasic fever pattern, no conjunctival suffusion. Leptospirosis has high mortality if untreated." },
        { diagnosis: "Viral Hepatitis (HEV/HAV)", likelihood: "LOW", reasoning: "Can cause fever, elevated LFTs, bleeding. However, no prodromal jaundice, no cholestasis (ALP/bilirubin only mildly elevated), platelets normal in hepatitis." },
        { diagnosis: "Meningococcemia", likelihood: "LOW", reasoning: "Fever + petechial rash + shock potential. However, no meningism, no rapid progression to shock, meningococcal rash typically non-blanching and centripetal." },
      ],
      diagnosticReasoning: "32-year-old female presenting on day 6 of dengue illness with classic progression: fever resolved briefly (defervescence), now rising again in critical phase. Spontaneous bleeding (gum bleed, melena, petechiae) + thrombocytopenia (48K) + positive dengue serology (NS1+, IgM+) + hepatomegaly + plasma leakage signs (pleural effusion, gallbladder edema, ascites) = Dengue Hemorrhagic Fever Grade II in critical phase. Risk of dengue shock syndrome (DSS) if plasma leakage worsens. Primary infection (IgG-) indicates first-time dengue but epidemiologically acquired in Goa (endemic area).",
      managementPlan: {
        immediateActions: [
          { action: "Admit to ICU/High dependency unit with continuous monitoring", reasoning: "DHF critical phase requires hourly vitals and lab monitoring. Risk of progression to DSS.", priority: "STAT" },
          { action: "Establish large-bore IV access (18G or better)", reasoning: "Preparation for fluid resuscitation if shock develops. At least 2 lines recommended.", priority: "STAT" },
          { action: "Start IV fluid resuscitation: Normal Saline bolus 10-20 mL/kg over 1 hour", reasoning: "Evidence of plasma leakage (pleural effusion, ascites) — need careful fluid balance. Start with calculated maintenance + deficit from fever.", priority: "URGENT" },
          { action: "Strict input-output monitoring: Foley catheter insertion for accurate UOP", reasoning: "Monitor for oliguria (early sign of DSS). Target UOP 0.5-1 mL/kg/hour. Urine specific gravity also helpful.", priority: "URGENT" },
          { action: "Hold NSAID medications immediately", reasoning: "NSAIDs increase GI bleeding risk in dengue. Acetaminophen safe if fever >38.5°C.", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Antipyretic (safe choice)", examples: ["Paracetamol 1g PO/IV QID PRN (not exceeding 3-4g/day)"], route: "Oral/IV", duration: "Until defervescence maintained", reasoning: "Paracetamol safe; AVOID NSAIDs (increase bleeding). Ibuprofen contraindicated in dengue.", contraindications: ["Severe liver dysfunction"], indianContext: "Paracetamol syrup 125mg/5mL widely available, cost ₹10-15 per bottle." },
          { drugClass: "IV Fluid (crystalloid)", examples: ["Normal Saline — calculated maintenance + 10-20mL/kg bolus initially", "Ringer's Lactate — alternative if available"], route: "IV", duration: "Throughout critical phase (typically 24-48 hours)", reasoning: "Careful fluid management is key: too much → pulmonary edema, ARDS; too little → shock. Use Dengue Severity Grading (DSG) criteria to guide fluids.", contraindications: ["Signs of fluid overload (crackles, SOB)", "Pulmonary edema"], indianContext: "1L NS available at ₹40-60, Ringer's at ₹50-70. Typically need 3-5L during critical phase." },
          { drugClass: "Platelet transfusion (if indicated)", examples: ["Platelet concentrate — 1 unit per 10kg body weight"], route: "IV", duration: "Single transfusion or repeat based on response", reasoning: "Indicated only if: (1) Platelet <10K even without bleeding, (2) Platelet <20K with minor bleeding, (3) Any life-threatening bleed. Do NOT transfuse prophylactically >20K as it worsens bleeding (not standard practice).", contraindications: ["Alloimmunization history"], indianContext: "1 unit platelet concentrates (50mL) available at ₹800-1200 in tertiary centers. Expensive — use judiciously." },
          { drugClass: "Proton Pump Inhibitor (for GI bleed prevention)", examples: ["Pantoprazole 40mg IV BD"], route: "IV", duration: "5-7 days or until bleeding stops", reasoning: "Stress ulcer prophylaxis given hematemesis/melena risk. Reduces gastric acid.", contraindications: ["None significant at standard dose"], indianContext: "Pantoprazole 40mg IV available at ₹30-50 per vial." },
          { drugClass: "Antiemetic (if vomiting persists)", examples: ["Ondansetron 4mg IV TDS"], route: "IV", duration: "As needed for nausea/vomiting", reasoning: "Prevents further fluid loss via vomiting. Ondansetron safe in dengue (no major interactions).", contraindications: ["QT prolongation"], indianContext: "Ondansetron 4mg vial ₹25-35." },
        ],
        nonPharmacological: [
          { intervention: "Continuous monitoring of vital signs and symptoms", reasoning: "Hourly BP, HR, RR, temperature, mental status. Watch for warning signs of DSS (see red flags).", duration: "Throughout ICU stay" },
          { intervention: "Assess for progression using Dengue Severity Grading and warning signs", reasoning: "Daily assessment using WHO DSG grade 0-IV and WHO warning signs criteria.", duration: "Every 12 hours minimum" },
          { intervention: "Bedrest with bathroom privileges only", reasoning: "Reduces exertion and bleeding risk (especially with low platelets).", duration: "Until critical phase ends (usually 24-48 hours)" },
          { intervention: "Maintain neutral thermoregulation (tepid sponging if fever >39°C)", reasoning: "Avoid hypothermia while managing fever. Room temperature environment.", duration: "Throughout hospitalization" },
        ],
        monitoring: [
          { parameter: "Platelet count and hematocrit", frequency: "Every 6-12 hours during critical phase", target: "Hematocrit rise >20% relative increase (hemoconcentration) signals plasma leakage worsening", escalation: "If Hct rise >20% + rising BP/normal BP + tachycardia → DSS imminent. Increase IV fluid rate." },
          { parameter: "Urine output", frequency: "Hourly charting", target: "UOP ≥0.5 mL/kg/hour indicates adequate perfusion", escalation: "If UOP <0.3 mL/kg/hr + signs of shock → escalate to vasopressors (dopamine/noradrenaline)" },
          { parameter: "Vital signs (BP, HR, CVP if line placed)", frequency: "Every 1-2 hours", target: "SBP >90 mmHg, MAP >65, HR <100 (if possible)", escalation: "If SBP <90 (hypotensive DSS) → aggressive fluid resuscitation, vasopressors, ICU escalation" },
          { parameter: "Serial AST/ALT, coagulation profile, electrolytes", frequency: "Daily or every 12 hours if deteriorating", target: "Improving LFTs, normalizing PT, potassium 3.5-5.0", escalation: "Worsening coagulopathy → fresh frozen plasma (FFP) if INR >1.5 + bleeding" },
          { parameter: "Abdominal examination", frequency: "Every 4-6 hours", target: "No progressive abdominal distension, no acute surgical abdomen", escalation: "If acute abdomen signs → consider gut perforation or massive hepatomegaly with capsule rupture (rare, fatal)" },
        ],
        lifestyle: {
          dos: ["Complete rest during and after hospitalization", "Stay well-hydrated once discharged (oral fluids)", "Eat frequent small meals (avoid heavy diet)", "Paracetamol only for fever >38.5°C", "Follow-up with doctor as scheduled"],
          donts: ["NO NSAIDs (ibuprofen, aspirin, naproxen) — increases bleeding risk", "No alcohol for at least 2 weeks post-discharge", "Avoid strenuous activities for 1 month", "Do not self-medicate — all meds under doctor supervision"],
          indianSpecific: ["Dengue is spread by Aedes mosquitoes that breed in stagnant water — remove flower pots, coolers at home", "Wear full-sleeve clothes during dawn/dusk (peak mosquito hours)", "Use mosquito nets even indoors during critical phase", "Inform neighbors to clear stagnant water to prevent community spread", "If recurrent fever develops >2 weeks after discharge — report to doctor immediately (unusual; may be secondary infection)"],
        },
        followUp: {
          when: "1 week after discharge, then 2 weeks post-illness onset",
          what: ["Clinical assessment for any residual symptoms (dengue convalescence syndrome — rare)", "Platelet count and hemoglobin check to confirm full recovery", "Ultrasound abdomen at 4 weeks if significant hepatomegaly persisted (to rule out post-dengue complications)"],
        },
        referral: {
          needed: false,
          to: "",
          urgency: "",
        },
      },
      redFlags: [
        { flag: "Platelet count <10,000 with spontaneous bleeding", action: "Platelet transfusion urgently. Risk of life-threatening hemorrhage.", urgency: "IMMEDIATE" },
        { flag: "Hypotension (SBP <90) with narrow pulse pressure + tachycardia + poor UOP", action: "Dengue Shock Syndrome — escalate IV fluid to 30 mL/kg over 1 hour, prepare for vasopressor support", urgency: "IMMEDIATE" },
        { flag: "Hematocrit rising >20% compared to baseline over 6-12 hours", action: "Significant plasma leakage ongoing — increase IV fluid rate, escalate monitoring", urgency: "URGENT" },
        { flag: "Sudden severe abdominal pain + guarding", action: "Hemorrhage/perforation — call surgeon, prepare for emergency intervention. Mortality high.", urgency: "IMMEDIATE" },
        { flag: "Persistent vomiting + inability to take oral fluids", action: "Total IV hydration, antiemetics, electrolyte monitoring (risk of hyponatremia)", urgency: "URGENT" },
        { flag: "Altered mental status or seizure", action: "Dengue encephalitis or severe cerebral edema — CT head, neurology consult, ICU escalation", urgency: "IMMEDIATE" },
      ],
      keyLearningPoints: [
        "Dengue has THREE clinical forms: Classic DF, DHF (with hemorrhage + plasma leakage), DSS (with shock) — all require different management intensity",
        "DHF Grade I = thrombocytopenia + hemoconcentration; Grade II = + spontaneous bleeding; Grade III/IV = DSS with shock",
        "Critical phase occurs typically on day 4-5 of illness when fever resolves briefly — this is when plasma leakage PEAKS and DSS risk is highest",
        "Platelet count <50K + positive serology (NS1/IgM) + plasma leakage signs (effusion, ascites, gallbladder edema on imaging) = DHF until proven otherwise",
        "Dengue NS1 antigen is positive during acute phase (first 5-7 days); IgM appears after day 3-5; IgG appears from day 6 onwards",
        "Fluid management is critical: too much (>1.5x maintenance) causes pulmonary edema/ARDS; too little causes shock — titrate based on hematocrit trends",
        "NEVER give NSAIDs in dengue — they increase GI bleeding risk. Paracetamol is safe antipyretic.",
        "Platelet transfusion is prophylactic only if <10K without bleeding or <20K with minor bleeding; do NOT transfuse prophylactically >20K (worsens outcomes)",
        "Primary dengue (IgG-negative) has lower DHF risk than secondary (IgG+), but still needs aggressive management in critical phase",
      ],
      commonMistakes: [
        "Diagnosing as 'simple fever' and discharging on day 3-4 when critical phase is just beginning",
        "Starting NSAIDs (ibuprofen, aspirin) for fever/pain — contraindicated in dengue",
        "Over-aggressive IV fluid in defervescence phase → pulmonary edema and ARDS",
        "Ignoring rising hematocrit as sign of plasma leakage — focusing only on platelet count",
        "Discharging patient too early without confirming platelet recovery (should be >50K and rising)",
        "Missing diagnosis of DSS early — not recognizing narrow pulse pressure and poor UOP as warning signs",
        "Prophylactic platelet transfusion in non-bleeding patient with platelet <50K — wastes blood product and may worsen bleeding",
      ],
      relevantHistoryQs: ["onset", "location", "duration", "fever_pattern", "bleeding_symptoms", "travel_history", "previous_dengue", "occupation", "environment"],
      relevantExamIds: ["general_appearance", "rash", "petechiae", "bleeding_signs", "hepatomegaly", "tachycardia", "blood_pressure", "abdominal_exam"],
      difficulty: "MODERATE-HIGH",
      estimatedMinutes: 25,
      subjectTags: ["MI", "PH"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM", "TROPICAL_MEDICINE"],
      nmcCompetencyCode: "MI2.2",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 2. Pulmonary Tuberculosis (Sputum-positive, new case) ──────────────
  {
    topicCode: "MI-MOD-01-TOP-01",
    scenario: {
      patientAge: 38,
      patientSex: "Male",
      patientOccupation: "Farmer",
      patientLocation: "Rural Uttar Pradesh (endemic TB area)",
      chiefComplaint: "Chronic cough for 4 weeks with blood-stained sputum and weight loss",
      historyOfPresent: `
- Onset: Insidious onset 4 weeks ago, progressive worsening
- Character: Dry cough initially, now productive with purulent sputum
- Sputum: Blood-stained (hemoptysis) — noticed 2 tablespoons of bright red blood mixed with sputum yesterday
- Severity: Cough worse in early morning, productive of ~50-60 mL sputum/day
- Timing: Worsens in early morning upon waking, lessens during day
- Associated: Night sweats — drenching, requires changing clothes (negative prognostic sign)
- Weight loss: Lost 8 kg in 4 weeks (significant — from 70 to 62 kg), attributed to loss of appetite
- Low-grade fever: Afternoon rise to 99-100°F, normal morning temperature (characteristic pattern)
- Constitutional: Fatigue, weakness, easy fatigability with minimal exertion
- Breathing: Mild dyspnea on exertion (after walking >500m), no dyspnea at rest
- Chest pain: No — rules out pleurisy
- Risk factors: Shared one room with brother who was treated for TB 2 years ago (possibly incomplete treatment)
      `.trim(),
      pastHistory: "No diabetes mellitus. No HIV (unknown status — needs testing). No previous TB treatment. One episode of pneumonia at age 25, treated with oral antibiotics and recovered. No surgeries.",
      familyHistory: "Brother treated for TB 2 years ago (status of completion unknown, no follow-up). No other TB contacts known. Father died of unknown chronic lung disease 10 years ago (? TB).",
      socialHistory: "Farmer with exposure to dust during harvest season. No smoking, no alcohol. Lives in a joint family house with 6 members in one large room with poor ventilation. Eats local diet (wheat, vegetables). Works outdoors.",
      drugHistory: "Self-medicated Cough syrup (containing dextromethorphan) for 2 weeks — no improvement. No other regular medications. No known drug allergies.",
      vitals: { pulse: 88, bp: "118/76", temp: 37.6, rr: 24, spo2: 94 },
      generalExam: `
- General appearance: Thin, cachectic, looks older than stated age, alert
- Pallor: Mild pallor present
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent (important — rules out bronchiectasis/abscess)
- Lymphadenopathy: Cervical lymph nodes palpable (2 nodes, firm, non-tender, matted) — suggestive of TB lymph node involvement
- Edema: No pedal edema
- Skin: No erythema nodosum (which would suggest TB dissemination)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. Regular rate. No murmurs.",
          peripheral_pulses: "All pulses palpable, normal rate and rhythm",
          blood_pressure: "118/76 mmHg — not elevated",
        },
        respiratory: {
          chest_inspection: "Right side chest wall appears to move less than left (reduced expansion on right)",
          trachea: "Trachea central",
          percussion: "Dull note in right upper zone (consolidation or fibrosis). Rest resonant.",
          auscultation_lungs: "Reduced air entry in right upper lobe. High-pitched 'squeaky' rales at right apex after cough (post-tussive crackles). No wheeze.",
          vocal_resonance: "Increased vocal resonance in right upper zone (egophony positive)",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended, visible ribs (cachectic appearance)",
          palpation_superficial: "No tenderness",
          palpation_deep: "No hepatomegaly. Spleen not palpable.",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "GCS 15/15, alert and oriented",
          cranial_nerves: "Intact",
          reflexes: "Normal",
        },
      },
      availableInvestigations: [
        { id: "sputum_afb", name: "Sputum AFB smear microscopy (Ziehl-Neelsen)", cost: 150, turnaround: "4-6 hours (same day)", category: "Microbiology", result: "AFB POSITIVE — 2+ on first sputum sample (seen on >10 fields)", isAbnormal: true, interpretation: "Positive AFB smear = patient is sputum-positive and INFECTIOUS. 2+ indicates high bacillary load. RNTCP requires 2 consecutive positive samples for confirmation, but treatment can start on first positive.", isEssential: true },
        { id: "sputum_culture", name: "Sputum MTB Culture (MGIT/Solid media)", cost: 800, turnaround: "2-4 weeks", category: "Microbiology", result: "Pending — culture takes 2-4 weeks for confirmation. Expected to grow Mycobacterium tuberculosis.", isAbnormal: true, interpretation: "Gold standard for TB diagnosis. Will also provide drug susceptibility results (DST) in 3-4 weeks to detect MDR/XDR TB.", isEssential: true },
        { id: "gene_xpert", name: "GeneXpert MTB/RIF (CBNAAT)", cost: 1200, turnaround: "2 hours", category: "Molecular", result: "MTB DETECTED — RIF SUSCEPTIBLE (Rifampicin sensitivity confirmed)", isAbnormal: true, interpretation: "WHO-recommended rapid test. Detects TB within 2 hours and simultaneously checks Rifampicin resistance. RIF sensitivity = likely drug-sensitive TB (DSTB). Used by NTEP/RNTCP nationwide.", isEssential: true },
        { id: "chest_xray", name: "Chest X-ray PA view", cost: 200, turnaround: "15 min", category: "Imaging", result: "Right upper lobe consolidation with cavitation (CLASSIC appearance). Multiple irregular opacities. No air bronchogram. Slightly left-shifted mediastinum. No pleural effusion. No hilar lymphadenopathy.", isAbnormal: true, interpretation: "Cavitary TB in right upper lobe is classic for post-primary/reactivation TB. Cavitation = high infectivity. Indicates tissue necrosis from mycobacterial multiplication.", isEssential: true },
        { id: "hiv_test", name: "HIV Antibody test (ELISA/Rapid)", cost: 300, turnaround: "1 hour", category: "Serology", result: "HIV: NEGATIVE (non-reactive)", isAbnormal: false, interpretation: "Important to rule out TB-HIV coinfection which would alter treatment duration. Negative result helps confirm immunocompetent status.", isEssential: true },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 10.8 g/dL (anemia — microcytic), WBC: 8,200/μL (normal), Platelets: 3.2 lakhs", isAbnormal: true, interpretation: "Microcytic anemia from chronic disease and malnutrition. WBC normal in TB (not always elevated). Platelets normal.", isEssential: true },
        { id: "rft", name: "Renal Function Tests", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 28 mg/dL, Creatinine: 0.8 mg/dL (normal), Sodium: 136 mEq/L, Potassium: 4.0 mEq/L", isAbnormal: false, interpretation: "Normal renal function — important baseline before starting TB drugs (some drugs are nephrotoxic, e.g., ethionamide in MDR-TB).", isEssential: true },
        { id: "lft", name: "Liver Function Tests (AST/ALT/ALP/Bilirubin)", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "AST: 35 U/L, ALT: 32 U/L, ALP: 78 U/L, Bilirubin: 0.8 mg/dL (all normal)", isAbnormal: false, interpretation: "Baseline LFTs normal — important as TB drugs (Isoniazid, Rifampicin, Pyrazinamide) are hepatotoxic. Need monthly monitoring.", isEssential: true },
        { id: "blood_glucose", name: "Random Blood Sugar / HbA1c", cost: 150, turnaround: "30 min", category: "Biochemistry", result: "RBS: 105 mg/dL, HbA1c: 5.2% (normal — no diabetes)", isAbnormal: false, interpretation: "Rules out diabetes which is a comorbidity worsening TB outcomes. Important for treatment planning.", isEssential: false },
      ],
      correctDiagnosis: "Pulmonary Tuberculosis (Sputum-positive, drug-sensitive, cavitary, right upper lobe) — NEW CASE — INFECTIOUS",
      differentials: [
        { diagnosis: "Bronchiectasis", likelihood: "MEDIUM", reasoning: "Can present with chronic productive cough and hemoptysis. However, no clubbing (present in bronchiectasis), cavitation on X-ray is more TB-typical, AFB positive." },
        { diagnosis: "Chronic Pneumonia (bacterial/fungal)", likelihood: "LOW", reasoning: "Cough with fever and weight loss can overlap. However, 4-week duration with cavitation and AFB positivity makes TB far more likely. Fungal causes (Aspergillus) would show different imaging." },
        { diagnosis: "Lung abscess", likelihood: "LOW", reasoning: "Can cause cavitary lesion with hemoptysis. However, air-fluid level typically seen in abscess (not mentioned), sputum would be foul-smelling (not mentioned), AFB negative." },
        { diagnosis: "Malignancy (lung cancer)", likelihood: "MEDIUM", reasoning: "Weight loss, hemoptysis, cavitary lesion could suggest lung cancer. However, positive AFB smear and culture will be negative in cancer. Cough productive of thick purulent sputum more typical of TB." },
        { diagnosis: "Aspergilloma (chronic aspergillosis)", likelihood: "LOW", reasoning: "Can occur in pre-existing TB cavities. However, primary presentation would have AFB positive (as here), not aspergillosis as primary diagnosis." },
      ],
      diagnosticReasoning: "38-year-old farmer with 4-week history of progressive productive cough, hemoptysis, weight loss (8kg), night sweats, and afternoon fever. TB contact history (brother with TB). Examination shows cachexia, right upper zone dullness, post-tussive crackles, and cervical lymphadenopathy. Chest X-ray shows classic cavitary right upper lobe TB. MOST IMPORTANTLY: Sputum AFB smear POSITIVE (2+) = sputum-positive TB = INFECTIOUS. GeneXpert MTB/RIF confirms MTB with Rifampicin sensitivity = drug-sensitive TB (DSTB). No HIV. Normal baseline LFTs/RFTs. This is new-case, drug-sensitive, sputum-positive, cavitary TB — requires immediate RNTCP-standard 6-month regimen.",
      managementPlan: {
        immediateActions: [
          { action: "Isolate patient in appropriate setting (separate room with good ventilation OR home isolation if not hospitalized)", reasoning: "Sputum-positive = INFECTIOUS to others. N95 mask for visitors. Isolation for 2 weeks until sputum becomes negative (post-treatment).", priority: "STAT" },
          { action: "Enroll in RNTCP (Revised National TB Control Program)", reasoning: "Patient qualifies for government-sponsored FREE treatment per RNTCP guidelines. Register at nearest DOTS center. Free FDC blister packs provided.", priority: "URGENT" },
          { action: "Tuberculin Skin Test (TST) is optional for smear-positive TB", reasoning: "Not required for diagnosis confirmation (smear already positive). Can be done for assessment of immune response but doesn't change management.", priority: "LOW" },
          { action: "Contact tracing: Identify close contacts (family members, especially child <5 years)", reasoning: "Brother already has TB history. All household members should be screened. Children <5 should be given TPT (TB Preventive Therapy) with Isoniazid.", priority: "URGENT" },
          { action: "Nutritional assessment and counseling", reasoning: "Patient is malnourished (BMI likely <18). Adequate nutrition improves treatment outcomes. High protein diet.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Isoniazid (INH)", examples: ["Isoniazid 5 mg/kg daily (max 300mg)"], route: "Oral", duration: "6 months (both IP and CP phases)", reasoning: "Backbone drug for TB. Bactericidal. INH is most effective for TB and has excellent CNS penetration (prevents TB meningitis).", contraindications: ["Peripheral neuropathy — give with Pyridoxine (B6) 10mg/day to prevent INH neuropathy"], indianContext: "RNTCP provides FREE FDC blister packs. INH 300mg tablet costs ₹1-2 at Jan Aushadhi. Pyridoxine 10mg ₹0.50." },
          { drugClass: "Rifampicin (RIF)", examples: ["Rifampicin 10 mg/kg daily (max 600mg)"], route: "Oral", duration: "6 months (both IP and CP phases)", reasoning: "Potent bactericidal. Most important anti-TB drug. RIF resistance = MDR-TB. Turns body fluids orange (inform patient).", contraindications: ["Drug interactions with many medications (CYP3A4 inducer) — check interactions if patient on other drugs"], indianContext: "RNTCP provides FREE. Rifampicin 300mg tablet ₹3-5. IV formulation rarely used in DSTB." },
          { drugClass: "Pyrazinamide (PZA)", examples: ["Pyrazinamide 25 mg/kg daily (1.5-2 g)"], route: "Oral", duration: "2 months (IP phase only) — NOT in CP phase", reasoning: "Bactericidal, especially against intracellular bacilli. Given in first 2 months (Intensive Phase). Stopped after 2 months to reduce hepatotoxicity.", contraindications: ["Gout (PZA causes hyperuricemia) — monitor uric acid", "Liver disease"], indianContext: "RNTCP provides FREE. PZA 500mg tablet ₹2." },
          { drugClass: "Ethambutol (EMB)", examples: ["Ethambutol 25 mg/kg daily (1-1.5g)"], route: "Oral", duration: "2 months (IP phase only)", reasoning: "Bacteriostatic, covers INH-resistant mutants. Prevents drug resistance. Stopped after 2 months as continuation adds minimal benefit.", contraindications: ["Optic neuritis — check visual acuity baseline and monthly. Patient reports blurred vision immediately"], indianContext: "RNTCP provides FREE. Ethambutol 800mg tablet ₹5-8." },
          { drugClass: "REGIMEN: RIPE / 4FDC Blister Pack (Fixed Dose Combination)", examples: ["Month 1-2 (IP): INH/RIF/PZA/EMB daily", "Month 3-6 (CP): INH/RIF daily"], route: "Oral", duration: "6 months total: 2-month IP, 4-month CP", reasoning: "Standard RNTCP regimen for new drug-sensitive TB. FDC reduces pill burden, improves adherence. Intensive Phase (IP) = higher drug doses; Continuation Phase (CP) = lower doses.", contraindications: ["Severe hepatic disease"], indianContext: "RNTCP gives FREE FDC blister packs containing all 4 drugs (IP) or 2 drugs (CP). Patient picks up blister per week from DOTS center. ZERO cost." },
          { drugClass: "Adjunctive: Pyridoxine (Vitamin B6)", examples: ["Pyridoxine 10 mg daily"], route: "Oral", duration: "6 months (throughout TB treatment)", reasoning: "Prevents Isoniazid-induced peripheral neuropathy. Mandatory alongside INH in all patients.", contraindications: ["None"], indianContext: "Pyridoxine 10mg tablet ₹0.50, RNTCP may provide free." },
        ],
        nonPharmacological: [
          { intervention: "Adequate rest and avoid strenuous work", reasoning: "Allows immune system to mount response. Patient should not return to farm work during IP phase (2 months minimum).", duration: "Especially first 2 months (IP phase)" },
          { intervention: "Nutritional support: High-protein diet with fruits, vegetables, milk", reasoning: "Malnutrition worsens TB outcomes. Recommend ≥50g protein/day. Include eggs, dal, milk if affordable.", duration: "Throughout 6 months and beyond for recovery" },
          { intervention: "Smoking cessation counseling (if applicable — this patient non-smoker)", reasoning: "Smoking worsens TB and delays healing.", duration: "N/A for this patient" },
          { intervention: "Household ventilation: Open windows, avoid crowding", reasoning: "Good ventilation reduces TB transmission to household contacts. Infected patient should sleep separately if possible.", duration: "At least 2 weeks (until AFB becomes negative)" },
        ],
        monitoring: [
          { parameter: "Monthly sputum smear microscopy (AFB)", frequency: "Every month", target: "AFB becomes negative by month 2 (end of IP phase). If still positive at 2 months = treatment failure. If becomes positive again later = relapse or drug resistance.", escalation: "If AFB still 1+ or more at end of month 2 → consider MDR-TB, test for drug resistance, escalate to MDR-TB regimen (expensive, needs DST confirmation)" },
          { parameter: "Monthly weight gain", frequency: "Every month", target: "Progressive weight gain indicates treatment response. Should regain lost 8kg by end of 6 months.", escalation: "If weight not improving → poor adherence or malabsorption. Investigate adherence." },
          { parameter: "Clinical symptoms (cough, fever, hemoptysis)", frequency: "Every month", target: "Gradual resolution: cough stops first (2-4 weeks), fever by 2 weeks, hemoptysis within 1 week", escalation: "If symptoms not improving → poor drug adherence or resistance. Consider directly observed therapy (DOT)." },
          { parameter: "Liver function tests (AST/ALT)", frequency: "Baseline, then at 1 month and 3 months", target: "AST/ALT <40 U/L (normal). If rise >3x upper limit of normal = hepatotoxicity.", escalation: "If AST/ALT significantly elevated → consider TB drug-induced hepatitis. May need to switch to alternative regimen (consult TB specialist)." },
          { parameter: "Visual acuity (color vision testing)", frequency: "Baseline and monthly if using Ethambutol", target: "No change in vision or color perception", escalation: "If patient reports blurred vision or red-green color blindness → Ethambutol-induced optic neuritis. STOP immediately." },
          { parameter: "Peripheral neuropathy assessment", frequency: "Every month (subjective inquiry)", target: "No numbness, tingling, or weakness in feet", escalation: "If neuropathy develops → increase Pyridoxine dose to 25-50mg daily." },
          { parameter: "DOTS Compliance", frequency: "Daily (via DOTS worker at health center)", target: "Patient takes all pills under observation at DOTS center 6 days/week", escalation: "If missed doses → counseling, investigate barriers (cost, side effects, beliefs). Revert to routine supervision if needed." },
        ],
        lifestyle: {
          dos: ["Take medications EXACTLY as prescribed — no skipping doses", "Attend monthly follow-up at DOTS center without fail", "Eat nutritious diet with adequate protein and calories", "Rest adequately, especially during first 2 months", "Keep home well-ventilated to prevent transmission to family"],
          donts: ["Do NOT stop medications early even if feeling better — complete full 6 months (partial treatment causes drug resistance)", "Do NOT share TB medications with anyone else", "Do NOT spit in public — sputum infectious for 2 weeks. Spit into closed container or designated area.", "Do NOT self-medicate with additional drugs without informing TB doctor", "Avoid smoking and secondhand smoke (impairs healing)"],
          indianSpecific: ["Register at nearest government DOTS center to receive FREE medicines via RNTCP", "Wear N95 mask when around children <5 years for first 2 weeks", "Inform household members — all should get TB screening. Children <5 years can get TPT (Isoniazid preventive therapy)", "Eat locally available affordable proteins: eggs, dal, peanuts, milk (if available)", "If financially struggling — inform doctor. May get nutritional support from gram panchayat or NGOs", "Return for monthly follow-up sputum tests — these are FREE at DOTS center. Do NOT miss appointments."],
        },
        followUp: {
          when: "Every month during treatment (6 months), then at 6 months (end of treatment), 1 year post-treatment, 2 years post-treatment",
          what: ["Monthly sputum AFB smear (to document conversion and ensure cure)", "Monthly weight check", "Month 2 (end of IP): CXR to assess radiological response", "Post-treatment: CXR at 6 months and 1 year to confirm healing", "Clinical assessment for cure vs treatment failure"],
        },
        referral: {
          needed: false,
          to: "RNTCP DOTS center (government) for directly observed therapy",
          urgency: "URGENT — enroll today",
        },
      },
      redFlags: [
        { flag: "Sputum AFB remains positive at 2 months despite treatment", action: "Indicates treatment failure. Test for drug resistance (repeat culture with DST or GeneXpert). Escalate to MDR-TB regimen.", urgency: "URGENT" },
        { flag: "Hemoptysis >100mL (massive)", action: "Risk of aspiration/asphyxiation. May indicate cavity erosion into blood vessel. Arrange bronchoscopy. Consider bronchial artery embolization if life-threatening.", urgency: "IMMEDIATE" },
        { flag: "Sudden severe chest pain + dyspnea + hypotension", action: "Spontaneous pneumothorax from cavity rupture. Chest X-ray, chest tube if needed, urgent surgery consult.", urgency: "IMMEDIATE" },
        { flag: "Persistent fever >38°C despite 2 weeks of treatment", action: "Investigate: poor drug adherence, malabsorption, drug resistance, other coinfection (HIV, other OIs). Consider TB drug-induced fever or immune reconstitution.", urgency: "URGENT" },
        { flag: "Severe hepatitis (AST/ALT >300)", action: "TB drug-induced hepatotoxicity. Temporarily stop INH/RIF/PZA. Consult hepatologist. Switch to alternative regimen if severe.", urgency: "URGENT" },
        { flag: "Loss of vision or red-green color blindness", action: "Ethambutol-induced optic neuritis. STOP Ethambutol immediately. Irreversible if not stopped promptly. Consult ophthalmologist.", urgency: "IMMEDIATE" },
        { flag: "Severe peripheral neuropathy (bilateral foot drop)", action: "Advanced Isoniazid neuropathy. Increase Pyridoxine to 50mg daily. If severe → may need to modify regimen.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Mycobacterium tuberculosis is a slow-growing, acid-fast bacillus (AFB) — ZIEHL-NEELSEN stain is routine for diagnosis",
        "Sputum-positive TB = AFB visible on smear microscopy = patient is INFECTIOUS. Immediate isolation and treatment crucial.",
        "RNTCP provides FREE standardized 6-month regimen (IP: 2mo, CP: 4mo) in all states of India. Ensures cure and prevents drug resistance.",
        "4-drug regimen (INH+RIF+PZA+EMB) for 2 months kills 99.9% of mycobacteria; then 2-drug (INH+RIF) for 4 months prevents relapse.",
        "Cavitary TB indicates high bacillary load and infectivity. Radiological healing (cavity closure) lags behind bacteriological cure.",
        "Post-tussive crackles at lung apex are characteristic sign. Dullness + reduced air entry = consolidation/fibrosis.",
        "Most common site: Right upper lobe (apical-posterior segments) due to high oxygen tension preferred by MTB.",
        "AFB smear microscopy has 60% sensitivity but high specificity. Culture is gold standard but takes 2-4 weeks.",
        "GeneXpert MTB/RIF is WHO-endorsed rapid test (2 hours) detecting TB and RIF resistance simultaneously. Used by NTEP nationwide.",
        "MDR-TB = Resistance to INH + RIF. XDR-TB = MDR + fluoroquinolone + injectable resistance. Treated with 20-month regimen using newer drugs.",
        "TB-HIV coinfection requires integrated TB+ART regimen. CD4 <50 = TB meningitis risk is high. All TB+HIV get 6-month TB regimen regardless of CD4.",
      ],
      commonMistakes: [
        "Starting TB treatment without confirming diagnosis by sputum AFB or culture — risks wasting precious RNTCP slots if misdiagnosed",
        "Stopping TB drugs early (after 2-3 months) when feeling better — incomplete treatment causes relapse and drug resistance (MDR-TB)",
        "Not isolating sputum-positive patient adequately — transmits TB to household contacts and healthcare workers",
        "Missing contact tracing — household members (especially children <5) can develop TB. Children <5 exposed to TB should receive TPT (Isoniazid prophylaxis)",
        "Not counseling on full-course compliance — patient must complete all 6 months. RNTCP provides 168 doses total (blister-wise).",
        "Forgetting Pyridoxine supplementation with Isoniazid — INH neuropathy can be prevented but is difficult to treat once developed",
        "Ignoring visual symptoms during Ethambutol use — optic neuritis is irreversible if not caught early. Ask patient monthly: 'Any change in vision?'",
        "Not monitoring sputum conversion — AFB should become negative by month 2. If still positive = treatment failure = needs DST and MDR-TB evaluation",
        "Presuming TB in all chronic cough cases in India — other diagnoses (COPD, post-TB bronchiectasis, malignancy) exist. Always confirm with sputum AFB.",
      ],
      relevantHistoryQs: ["onset", "duration", "character", "associated_symptoms", "hemoptysis", "weight_loss", "tb_contact", "risk_factors", "medication_history"],
      relevantExamIds: ["general_appearance", "cachexia", "lymphadenopathy", "chest_inspection", "percussion", "auscultation_lungs", "vocal_resonance"],
      difficulty: "MODERATE",
      estimatedMinutes: 22,
      subjectTags: ["MI", "PH"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM", "PUBLIC_HEALTH"],
      nmcCompetencyCode: "MI1.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
