// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for Pharmacology (PH)
// Drug-induced toxicity and anticoagulation complications
// ---------------------------------------------------------------------------

export const pharmacologyScenarios = [
  // ─── 1. Drug-Induced Hepatotoxicity: ATT (Anti-TB) Drug Toxicity ───────────
  {
    topicCode: "PH-MOD-02-TOP-01",
    scenario: {
      patientAge: 34,
      patientSex: "Male",
      patientOccupation: "Software engineer",
      patientLocation: "Bangalore, Karnataka",
      chiefComplaint: "Jaundice and abdominal pain for 5 days while on anti-TB treatment",
      historyOfPresent: `
- Onset: Started 5 days ago while taking anti-TB drugs (started 6 weeks ago for pulmonary TB)
- Character: Jaundice noticed in eyes and skin. Dark brown urine noted for 3 days.
- Abdominal pain: RUQ pain, dull, constant, 5/10 severity
- Severity: Jaundice progressing daily
- Associated symptoms: Nausea (3-4 episodes of vomiting), loss of appetite, abdominal distension, pruritus (itching), pale stools
- No fever, no chills, no hemoptysis
- TB symptoms: Initial cough improving, no recent chest symptoms
      `.trim(),
      pastHistory: "Diagnosed with pulmonary TB 6 weeks ago. Started on HRZE (Isoniazid 300mg + Rifampicin 450mg + Pyrazinamide 1500mg + Ethambutol 800mg daily) from a private clinic. No previous liver disease. No alcoholism. No diabetes. No surgeries.",
      familyHistory: "Father has hypertension. No TB family history. No autoimmune disease.",
      socialHistory: "Non-smoker. Non-alcoholic. Married, 2 children. Works in IT company. Diet: Vegetarian, occasional eggs. Lives in urban area.",
      drugHistory: "HRZE regimen from private clinic (started 6 weeks ago). No other medications. Unknown drug allergies — not properly documented.",
      vitals: { pulse: 88, bp: "120/75", temp: 37.2, rr: 18, spo2: 98 },
      generalExam: `
- General appearance: Icteric (yellowish discoloration of sclera and skin), alert, distressed due to pruritus
- Pallor: Absent
- Icterus: Marked icterus in sclera and skin
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema, no ascites
- Lymphadenopathy: Absent
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. No murmurs.",
          peripheral_pulses: "All pulses palpable, regular",
          blood_pressure: "120/75 mmHg",
        },
        respiratory: {
          chest_inspection: "Normal chest expansion",
          auscultation_lungs: "Clear bilateral air entry, no crackles",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft, mild distension",
          palpation_superficial: "Mild RUQ tenderness present",
          palpation_deep: "Liver palpable 3cm below costal margin, tender, non-cirrhotic edge",
          spleen_palpation: "Spleen not palpable",
          bowel_sounds: "Normal",
          murphy_sign: "Mildly positive (suggests hepatic inflammation, not cholecystitis)",
        },
        neurological: {
          consciousness: "GCS 15/15 — alert, oriented",
          asterixis: "Absent (no flapping tremor)",
          reflexes: "Normal",
        },
      },
      availableInvestigations: [
        { id: "ast", name: "AST (SGOT)", cost: 150, turnaround: "1 hour", category: "Biochemistry", result: "AST: 420 U/L (Normal: 10-40)", isAbnormal: true, interpretation: "Markedly elevated — indicates hepatocellular injury (necrosis)", isEssential: true },
        { id: "alt", name: "ALT (SGPT)", cost: 150, turnaround: "1 hour", category: "Biochemistry", result: "ALT: 580 U/L (Normal: 7-56)", isAbnormal: true, interpretation: "Markedly elevated — predominant hepatocellular pattern (ALT > AST suggests drug toxicity over viral)", isEssential: true },
        { id: "alp", name: "Alkaline Phosphatase", cost: 150, turnaround: "1 hour", category: "Biochemistry", result: "ALP: 240 U/L (Normal: 30-120)", isAbnormal: true, interpretation: "Mildly elevated — cholestasis component present but less prominent", isEssential: true },
        { id: "bilirubin", name: "Total & Direct Bilirubin", cost: 200, turnaround: "1 hour", category: "Biochemistry", result: "Total Bilirubin: 8.2 mg/dL, Direct: 6.8 mg/dL", isAbnormal: true, interpretation: "Markedly elevated with conjugated predominance — hepatocellular dysfunction with cholestasis", isEssential: true },
        { id: "albumin", name: "Serum Albumin & Total Protein", cost: 200, turnaround: "1 hour", category: "Biochemistry", result: "Albumin: 3.2 g/dL (Normal: 3.5-5), Total Protein: 7.0 g/dL", isAbnormal: true, interpretation: "Mildly low albumin — mild hepatic synthetic dysfunction (not yet severe)", isEssential: true },
        { id: "inr", name: "INR & PT", cost: 300, turnaround: "1 hour", category: "Coagulation", result: "INR: 1.2 (Normal: 0.8-1.1), PT: 14.2 sec (Normal: 12-14)", isAbnormal: true, interpretation: "Mildly prolonged — early loss of synthetic function. Not severe coagulopathy yet.", isEssential: true },
        { id: "hbsag", name: "HBsAg (Hepatitis B Antigen)", cost: 400, turnaround: "2 hours", category: "Virology", result: "HBsAg: Negative", isAbnormal: false, interpretation: "No active Hepatitis B infection", isEssential: true },
        { id: "anti_hcv", name: "Anti-HCV (Hepatitis C Antibody)", cost: 400, turnaround: "2 hours", category: "Virology", result: "Anti-HCV: Negative", isAbnormal: false, interpretation: "No Hepatitis C", isEssential: true },
        { id: "ast_alt_ratio", name: "AST/ALT Ratio", cost: 0, turnaround: "Calculated", category: "Biochemistry", result: "AST/ALT = 420/580 = 0.72 (ratio <1)", isAbnormal: false, interpretation: "ALT > AST suggests hepatocellular drug-induced injury (ATT toxicity) rather than alcoholic or cirrhotic pattern", isEssential: false },
        { id: "ultrasound", name: "Ultrasound Abdomen", cost: 800, turnaround: "30 min", category: "Imaging", result: "Liver size normal, echotexture normal, no cirrhotic features, no ascites, biliary ducts not dilated, gallbladder normal", isAbnormal: false, interpretation: "Excludes cholecystitis, choledocholithiasis, obstructive pattern. Confirms hepatitis without obstruction.", isEssential: true },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 13.4 g/dL, WBC: 6,800/μL, Platelets: 1.8 lakhs", isAbnormal: false, interpretation: "Normal — no hemolysis, no bone marrow suppression from anti-TB drugs", isEssential: false },
        { id: "acetaminophen", name: "Acetaminophen/INH/Pyrazinamide Level (if available)", cost: 2000, turnaround: "4 hours", category: "Toxicology", result: "Not routinely measured — clinical diagnosis based on temporal relationship", isAbnormal: false, interpretation: "Diagnosis is clinical: onset after starting ATT, elevated transaminases, no viral serology", isEssential: false },
      ],
      correctDiagnosis: "Drug-Induced Liver Injury (DILI) secondary to Anti-TB therapy (ATT) — likely Isoniazid or Pyrazinamide",
      differentials: [
        { diagnosis: "Acute Viral Hepatitis (Hepatitis A/E)", likelihood: "MEDIUM", reasoning: "Presents similarly with jaundice and high transaminases. However, HBsAg and Anti-HCV negative. HAV/HEV serology needed but temporal relation to ATT makes drug etiology more likely." },
        { diagnosis: "Alcoholic Hepatitis", likelihood: "LOW", reasoning: "Patient denies alcohol. AST/ALT ratio <1 argues against alcoholic pattern (which typically has AST>ALT)." },
        { diagnosis: "Autoimmune Hepatitis", likelihood: "LOW", reasoning: "Would require autoantibodies. More insidious onset. Temporal relation to ATT makes drug etiology more likely." },
        { diagnosis: "Cholecystitis/Choledocholithiasis", likelihood: "LOW", reasoning: "Ultrasound normal — no gallstones, no biliary dilatation. Murphy sign only mildly positive." },
        { diagnosis: "TB Hepatitis (granulomatous)", likelihood: "MEDIUM", reasoning: "TB can cause liver granulomas. However, rapid onset 5 days after ATT suggests drug toxicity rather than TB progression. Liver biopsy would distinguish but not practical here." },
      ],
      diagnosticReasoning: "34-year-old male on HRZE ATT for 6 weeks now presenting with jaundice, dark urine, RUQ pain, and pruritus. Exam shows marked icterus and mild hepatomegaly with tenderness. Labs show markedly elevated transaminases (AST 420, ALT 580) with ALT > AST pattern, elevated bilirubin (8.2, predominantly conjugated), mildly prolonged INR, normal albumin still preserved, and negative viral serology. Ultrasound excludes biliary obstruction or cirrhosis. The temporal relationship (onset after 6 weeks of ATT) and predominantly hepatocellular pattern (ALT > AST) strongly suggest drug-induced liver injury from ATT, most commonly from Isoniazid (dose-dependent, acetylation-related) or Pyrazinamide (idiosyncratic, asymptomatic often). This is a common and potentially serious ATT side effect requiring immediate intervention.",
      managementPlan: {
        immediateActions: [
          { action: "STOP all anti-TB drugs immediately", reasoning: "Drug must be discontinued to prevent progression to acute liver failure. Continue only after liver recovery per guidelines.", priority: "STAT" },
          { action: "Establish IV access and start IV fluids (Normal Saline)", reasoning: "Ensure adequate hydration for hepatic clearance. Risk of hepatorenal syndrome if dehydrated.", priority: "URGENT" },
          { action: "Contact treating TB physician and inform about DILI", reasoning: "Need to plan restart strategy — re-challenge with safer drugs in sequence (Ethambutol first, then others)", priority: "URGENT" },
          { action: "Counsel on signs of hepatic encephalopathy", reasoning: "Watch for confusion, asterixis, behavioral changes — signs of fulminant hepatic failure", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Ursodeoxycholic acid (UDCA)", examples: ["UDCA 300mg TDS"], route: "Oral", duration: "Until liver function normalizes (typically 3-4 weeks)", reasoning: "Protects hepatocyte membrane, improves hepatic blood flow, and aids bile flow. Reduces cholestatic symptoms including pruritus.", contraindications: ["Bile duct obstruction (excluded here)"], indianContext: "UDCA 300mg tablets available at ₹3-5 per tablet in Jan Aushadhi. Generic cost ~₹450-500/month." },
          { drugClass: "Silymarin/Milk Thistle", examples: ["Silymarin 150mg TDS"], route: "Oral", duration: "Throughout recovery", reasoning: "Hepatoprotective, antioxidant properties. Helps stabilize hepatocyte membranes and may accelerate recovery from drug-induced injury.", contraindications: ["None significant"], indianContext: "Widely available in Ayurvedic formulations. Silymarin ~₹2-3/capsule." },
          { drugClass: "N-Acetyl Cysteine (NAC) if severe", examples: ["NAC 600mg OD/BD"], route: "Oral", duration: "1-2 weeks", reasoning: "Antioxidant. Useful in severe drug-induced hepatotoxicity where risk of fulminant failure exists. Replenishes glutathione.", contraindications: ["None"], indianContext: "NAC tablets available at ₹5-10 per tablet. Often used off-label in India." },
          { drugClass: "Supportive: Vitamin K if INR prolonged", examples: ["Phytonadione 10mg OD x 3-5 days"], route: "Oral", duration: "Until INR normalizes", reasoning: "INR 1.2 is mildly prolonged — vitamin K replenishes clotting factors synthesized by liver", contraindications: ["None"], indianContext: "Phytonadione 10mg available at ₹5-15 per tablet. Jan Aushadhi available." },
        ],
        nonPharmacological: [
          { intervention: "Strict bed rest until liver enzymes improve significantly", reasoning: "Reduces hepatic metabolic demand", duration: "1-2 weeks minimum" },
          { intervention: "High-protein, balanced diet (once tolerating)", reasoning: "Supports hepatic protein synthesis. Avoid fatty/oily foods initially.", duration: "Throughout recovery" },
          { intervention: "Adequate hydration (3-4L fluid/day)", reasoning: "Promotes bile flow and hepatic clearance", duration: "Throughout recovery" },
        ],
        monitoring: [
          { parameter: "Daily liver function tests x 7 days", frequency: "Daily", target: "Downtrend in AST, ALT, and bilirubin", escalation: "If worsening despite drug withdrawal — consider fulminant hepatic failure, transfer to ICU with hepatology support" },
          { parameter: "INR daily if prolonged", frequency: "Daily", target: "INR <1.2, gradual normalization", escalation: "If INR >1.5 or rising despite vitamin K — urgent assessment for acute liver failure" },
          { parameter: "Clinical signs of encephalopathy", frequency: "Twice daily", target: "No asterixis, normal consciousness", escalation: "If asterixis or confusion develops — hepatic encephalopathy, lactulose, rifaxomicin, ICU transfer" },
          { parameter: "Bilirubin trend", frequency: "Every 2-3 days", target: "Peak usually within 3-5 days, then gradual decline over 2-3 weeks", escalation: "If continuing to rise after 5 days — worsening pattern" },
        ],
        lifestyle: {
          dos: ["Complete bed rest initially", "High protein diet (eggs, milk, fish) once appetite returns", "Adequate fluid intake", "Regular follow-up LFTs every week"],
          donts: ["No alcohol absolutely", "No hepatotoxic drugs (acetaminophen, NSAIDs)", "No fatty/oily foods initially", "No strenuous exercise for 4-6 weeks"],
          indianSpecific: ["Avoid street food and contaminated water — risk of Hepatitis A superimposed", "Use milk from trusted sources — boil if uncertain", "Consult government TB center for DOT (Directly Observed Therapy) after liver recovery — safer monitoring", "Be aware: TB drugs must be re-introduced carefully — often needing specialist guidance"],
        },
        followUp: {
          when: "Every 7 days for first month, then every 2 weeks until LFTs normalize",
          what: ["Repeat LFTs (AST, ALT, ALP, bilirubin, albumin, INR)", "Clinical assessment for encephalopathy", "Once liver recovered (bilirubin <2, AST/ALT <100), consult TB physician for drug re-challenge plan", "HAV and HEV serology if not done — to exclude concurrent viral hepatitis"],
        },
        referral: {
          needed: true,
          to: "Hepatologist for co-management / TB specialist for ATT re-challenge plan",
          urgency: "URGENT — within 24 hours",
        },
      },
      redFlags: [
        { flag: "INR >1.5 or rapidly rising despite vitamin K", action: "Sign of severe hepatic synthetic failure — escalate immediately, consider ICU", urgency: "IMMEDIATE" },
        { flag: "Asterixis or altered consciousness", action: "Hepatic encephalopathy — start lactulose, rifaxomicin, ICU monitoring", urgency: "IMMEDIATE" },
        { flag: "Rapid worsening of transaminases/bilirubin despite drug withdrawal", action: "Fulminant hepatic failure — ICU, consider liver transplant evaluation", urgency: "IMMEDIATE" },
        { flag: "Fever with worsening jaundice", action: "Suggests superimposed infection (cholangitis, spontaneous bacterial peritonitis) — broad-spectrum antibiotics", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "ATT DILI is common — occurs in 0.5-3% of TB patients, more in slow acetylators (genetic factor)",
        "Isoniazid and Pyrazinamide are the most hepatotoxic ATT drugs — Rifampicin less common but possible",
        "Key pattern: ALT > AST in drug-induced hepatitis (vs AST > ALT in alcoholic/cirrhotic)",
        "Temporal relationship is crucial — DILI develops within 2-8 weeks of starting the drug",
        "If AST/ALT > 5x upper limit normal OR bilirubin >2x with transaminase elevation — MUST stop drug",
        "Indian context: Many TB patients on private ATT without proper monitoring — screen LFTs within 2 weeks of starting",
        "Drug re-challenge protocol: Stop all, wait for recovery (may take 2-3 weeks), then restart sequentially (safest: Ethambutol, then Rifampicin, then Isoniazid)",
      ],
      commonMistakes: [
        "Continuing ATT despite rising transaminases — hoping they'll improve — they WON'T, will progress to liver failure",
        "Not recognizing DILI — mistaking it for viral hepatitis and delaying TB drug cessation",
        "Not checking baseline LFTs before starting ATT — hard to interpret if baseline unknown",
        "Missing slow acetylator phenotype — some patients are genetically predisposed to INH toxicity",
        "Not counseling on pruritus management — leads to poor compliance with other necessary medications",
        "Restarting ATT too early without waiting for liver recovery — leads to recurrence",
      ],
      relevantHistoryQs: ["onset", "timing_relation_to_meds", "medications_started_recently", "alcohol", "drug_allergies", "previous_hepatitis", "associated_symptoms"],
      relevantExamIds: ["icterus", "hepatomegaly", "tenderness", "asterixis", "consciousness", "skin_changes"],
      difficulty: "MODERATE",
      estimatedMinutes: 22,
      subjectTags: ["PH", "IM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "PH2.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 2. Warfarin Overdose with INR >8 and Bleeding ────────────────────────
  {
    topicCode: "PH-MOD-03-TOP-01",
    scenario: {
      patientAge: 62,
      patientSex: "Female",
      patientOccupation: "Retired school principal",
      patientLocation: "Hyderabad, Telangana",
      chiefComplaint: "Severe epistaxis (nosebleed) and bleeding gums for 2 hours",
      historyOfPresent: `
- Onset: Sudden onset 2 hours ago while brushing teeth
- Character: Heavy nose bleed with blood clots. Blood oozing from gums. Slight blood-tinged sputum.
- Severity: Unable to control bleeding. Required 3 changes of cloth. Soaked approximately 150-200 mL blood.
- Associated: Gum swelling noticed last 3 days, generalized bruising on forearms and shins (appeared spontaneously 4-5 days ago), no recent trauma
- Medications: Started Warfarin 5mg daily 3 weeks ago for chronic atrial fibrillation
- No fever, no dyspnea, no chest pain, no GI bleeding reported
- Lives alone, cooks own meals, occasionally forgets medications (has poor compliance)
      `.trim(),
      pastHistory: "Diagnosed with atrial fibrillation 3 months ago after syncope episode. Not on rate-control drugs yet. No prior bleeding. No previous liver disease. No renal disease. Hypertension for 10 years on Amlodipine. Osteoarthritis on occasional paracetamol.",
      familyHistory: "Mother had stroke at 75. No bleeding disorders. No thrombophilia.",
      socialHistory: "Retired, lives with son who works during day. Non-smoker, non-alcoholic. Diet: Mixed diet, occasional green leafy vegetables (variable intake). Has not been following consistent dietary pattern.",
      drugHistory: "Warfarin 5mg daily (started 3 weeks ago). Amlodipine 5mg daily (for 10 years). Paracetamol 500mg occasionally. NSAID use: 2 days ago took Ibuprofen for knee pain (likely mistake, warned against NSAIDs). No other medications. No drug allergies documented.",
      vitals: { pulse: 105, bp: "148/92", temp: 37.0, rr: 20, spo2: 97 },
      generalExam: `
- General appearance: Alert, distressed from active bleeding, pale
- Pallor: Marked pallor present
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema
- Ecchymosis: Spontaneous bruising over forearms and shins, multiple patches
- Petechiae: Absent
- Bleeding from nose: Active oozing, blood-stained nostrils
- Oral examination: Blood oozing from interdental spaces, gum swelling and erythema, no loose teeth
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "Irregular rhythm — confirms atrial fibrillation. No murmurs.",
          peripheral_pulses: "Irregular radial pulse, tachycardia at 105",
          blood_pressure: "148/92 mmHg",
        },
        respiratory: {
          chest_inspection: "Normal chest movements",
          auscultation_lungs: "Clear bilaterally. Trace blood-tinged sputum in mouth from epistaxis.",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft",
          palpation_superficial: "No tenderness",
          palpation_deep: "No organomegaly",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "GCS 15/15 — alert, oriented",
          cranial_nerves: "Intact",
          reflexes: "Normal",
          focal_deficit: "None detected",
        },
      },
      availableInvestigations: [
        { id: "inr", name: "INR (International Normalized Ratio)", cost: 400, turnaround: "30 min", category: "Coagulation", result: "INR: 11.2 (Target for AF: 2-3)", isAbnormal: true, interpretation: "Markedly prolonged — significantly above therapeutic range. Major bleeding risk present. This is an overdose state.", isEssential: true },
        { id: "pt", name: "PT (Prothrombin Time)", cost: 300, turnaround: "30 min", category: "Coagulation", result: "PT: 48 seconds (Normal: 12-14 sec)", isAbnormal: true, interpretation: "Markedly prolonged — reflects impaired synthesis of Vitamin K-dependent clotting factors (II, VII, IX, X)", isEssential: true },
        { id: "aptt", name: "aPTT (Activated Partial Thromboplastin Time)", cost: 300, turnaround: "30 min", category: "Coagulation", result: "aPTT: 32 seconds (Normal: 25-35 sec)", isAbnormal: false, interpretation: "Normal — intrinsic pathway unaffected. Warfarin primarily affects extrinsic/common pathway.", isEssential: true },
        { id: "platelets", name: "Platelet Count", cost: 150, turnaround: "1 hour", category: "Hematology", result: "Platelets: 2.2 lakhs/μL (Normal: 1.5-4 lakhs)", isAbnormal: false, interpretation: "Normal — rules out thrombocytopenia as cause of bleeding", isEssential: true },
        { id: "hb", name: "Hemoglobin", cost: 100, turnaround: "1 hour", category: "Hematology", result: "Hemoglobin: 10.8 g/dL (Baseline assumed ~12-13)", isAbnormal: true, interpretation: "Mildly low, likely from acute blood loss (~2-3 units)", isEssential: true },
        { id: "liver", name: "Liver Function Tests", cost: 300, turnaround: "1 hour", category: "Biochemistry", result: "Bilirubin: 0.8 mg/dL, AST: 35 U/L, ALT: 28 U/L, ALP: 72 U/L", isAbnormal: false, interpretation: "Normal liver function — Warfarin metabolism is intact, not explaining the INR elevation", isEssential: true },
        { id: "rft", name: "Renal Function", cost: 300, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 32 mg/dL, Creatinine: 0.9 mg/dL, Na: 140, K: 4.2", isAbnormal: false, interpretation: "Normal renal function — can safely give IV medications", isEssential: false },
        { id: "fbdp", name: "Fibrinogen & D-Dimer", cost: 800, turnaround: "2 hours", category: "Coagulation", result: "Fibrinogen: 280 mg/dL (Normal: 200-400), D-Dimer: 0.8 μg/mL (slightly elevated)", isAbnormal: false, interpretation: "Fibrinogen adequate — not consumptive coagulopathy. Mild D-dimer elevation from bleeding/stress.", isEssential: false },
        { id: "cbc_rbc", name: "RBC Indices", cost: 150, turnaround: "1 hour", category: "Hematology", result: "MCV: 82 fl, MCH: 28 pg — normocytic, normochromic", isAbnormal: false, interpretation: "Normal RBC indices — no prior chronic bleeding anemia", isEssential: false },
      ],
      correctDiagnosis: "Warfarin Over-anticoagulation (INR 11.2) with Major Bleeding (Epistaxis + Spontaneous Ecchymosis)",
      differentials: [
        { diagnosis: "Disseminated Intravascular Coagulation (DIC)", likelihood: "LOW", reasoning: "Would show prolonged PT/aPTT, low platelets, low fibrinogen, elevated D-dimer. Here only PT prolonged, platelets normal, fibrinogen normal. DIC unlikely." },
        { diagnosis: "Liver Disease", likelihood: "LOW", reasoning: "Liver enzymes normal. Bilirubin normal. Only PT prolonged (not synthetic liver failure pattern)." },
        { diagnosis: "Thrombocytopenia-related bleeding", likelihood: "LOW", reasoning: "Platelet count is normal at 2.2 lakhs. Bleeding is from prolonged PT, not platelet disorder." },
        { diagnosis: "Hemophilia A or B", likelihood: "LOW", reasoning: "Would present with prolonged aPTT. Here aPTT is normal. Would have lifelong bleeding history." },
      ],
      diagnosticReasoning: "62-year-old female on Warfarin for 3 weeks presenting with severe epistaxis and spontaneous ecchymosis. Timeline suggests recent over-anticoagulation: poor medication compliance, likely excessive vitamin K from diet, recent NSAID use (Ibuprofen 2 days ago — increases Warfarin effect), and possible lack of INR monitoring post-initiation. INR is markedly elevated at 11.2 (normal therapeutic: 2-3). PT prolonged at 48 sec (normal 12-14). aPTT normal (intrinsic pathway unaffected). Platelets normal. Liver function normal. This is Warfarin overdose with major bleeding, not DIC or hepatic coagulopathy. Requires urgent correction of INR and bleeding control.",
      managementPlan: {
        immediateActions: [
          { action: "Control epistaxis: Sit upright, pinch nostrils for 10-15 min, apply ice packs to bridge of nose", reasoning: "Prevents aspiration, promotes hemostasis. Most nosebleeds respond to conservative measures.", priority: "STAT" },
          { action: "Establish two large-bore IV access lines", reasoning: "May need massive transfusion if bleeding escalates. Two lines improve flow rate.", priority: "STAT" },
          { action: "Send blood for cross-match for Fresh Frozen Plasma (FFP) / Prothrombin Complex Concentrate (PCC)", reasoning: "INR 11.2 with active bleeding requires urgent coagulation factor replacement", priority: "STAT" },
          { action: "Call ENT on standby in case epistaxis doesn't respond to conservative measures", reasoning: "May need nasal packing or posterior tamponade if continues", priority: "URGENT" },
          { action: "STOP Warfarin immediately", reasoning: "No further dosing to prevent escalation of coagulopathy", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Vitamin K (Phytonadione)", examples: ["Vitamin K 10-20mg IV slowly (NOT IM — causes hematoma)", "Oral: 2.5-10mg daily if mild"], route: "IV (preferred) or Oral", duration: "Single dose IV, repeat daily if needed x 2-3 days", reasoning: "Repletes Vitamin K-dependent clotting factors (II, VII, IX, X). Takes 12-24 hours for effect. Essential in Warfarin overdose.", contraindications: ["IM route — causes large hematoma in anticoagulated patients"], indianContext: "Vitamin K 10mg ampule at ₹25-40 in most hospitals. Must use IV route in anticoagulated patient." },
          { drugClass: "Fresh Frozen Plasma (FFP) OR Prothrombin Complex Concentrate (PCC)", examples: ["FFP 10-15 mL/kg (usually 3-4 units for adult)", "PCC 25-50 units/kg if available"], route: "IV", duration: "Single infusion, may repeat in 6-12 hours if persistent elevation", reasoning: "FFP provides immediate replacement of Vitamin K-dependent factors (II, VII, IX, X). PCC is more concentrated and preferred if available. INR >8 with bleeding warrants both FFP + Vitamin K.", contraindications: ["None in this setting"], indianContext: "FFP at ₹1500-2000 per unit in India. PCC (Brand: PPSB) at ₹8000-15000 per vial if available. FFP more commonly available in tier-2/3 hospitals." },
          { drugClass: "Tranexamic Acid (antifibrinolytic)", examples: ["Tranexamic acid 1g IV BD for 3-5 days"], route: "IV", duration: "2-5 days or until bleeding controlled", reasoning: "Inhibits fibrinolysis, stabilizes clots. Reduces bleeding significantly in Warfarin-related bleeding, especially mucosal bleeding.", contraindications: ["Thromboembolic disease (though here anticoagulation is the goal, not clotting)"], indianContext: "Tranexamic acid 500mg vial at ₹80-120. Affordable even in government hospitals." },
          { drugClass: "Supportive: Oxygen (if blood-tinged sputum)", examples: ["Oxygen via nasal prongs 2-3 L/min"], route: "Inhalation", duration: "Until respiratory status clear",reasoning: "Epistaxis can lead to aspiration. Maintain SpO2 >95%", contraindications: ["None"], indianContext: "Standard hospital oxygen supply." },
        ],
        nonPharmacological: [
          { intervention: "Bed rest in semi-upright position (30° elevation)", reasoning: "Reduces epistaxis recurrence. Prevents aspiration if bleeding continues.", duration: "24-48 hours minimum" },
          { intervention: "Soft diet, avoid hard/crunchy foods", reasoning: "Prevents further gum trauma and bleeding", duration: "Until bleeding controlled" },
          { intervention: "Avoid NSAIDs and alcohol", reasoning: "Both increase bleeding risk independently and interact with anticoagulation", duration: "While anticoagulated" },
          { intervention: "Educate on diet consistency (Vitamin K)", reasoning: "Sudden increase in leafy greens decreases Warfarin effect; sudden decrease increases INR", duration: "Long-term during Warfarin use" },
        ],
        monitoring: [
          { parameter: "Repeat INR", frequency: "6 hours after FFP/PCC, then daily until <4", target: "Target INR 2-3 for AF. Correction to <3 before discharge.", escalation: "If INR still >8 at 6 hours — give second dose FFP + Vitamin K" },
          { parameter: "Hemoglobin trend", frequency: "Every 12 hours x 48 hours", target: "Stable or rising Hb (no further bleeding)", escalation: "If Hb drops >2g/dL — ongoing bleeding, may need transfusion or surgery" },
          { parameter: "Epistaxis control", frequency: "Continuous monitoring", target: "Cessation of bleeding within 2-4 hours", escalation: "If bleeding persists >4 hours despite measures — ENT referral for nasal packing/cautery" },
          { parameter: "Neurological status", frequency: "Every 4 hours", target: "No new focal deficits (rule out intracranial hemorrhage from anticoagulation)", escalation: "If new headache, focal weakness, confusion — urgent CT head" },
        ],
        lifestyle: {
          dos: ["Keep Warfarin dosing consistent", "Eat consistent amounts of Vitamin K daily (spinach, broccoli, etc.)", "Attend INR checks regularly (every 2 weeks initially, then monthly)", "Wear medical alert bracelet indicating Warfarin use"],
          donts: ["No NSAIDs (ibuprofen, aspirin, naproxen) — increases bleeding", "No herbal supplements without checking interaction (St. John's wort decreases Warfarin; ginger/turmeric increase it)", "No alcohol excess", "No sudden changes in diet"],
          indianSpecific: ["If using ayurvedic/herbal remedies — inform physician. Many interact with Warfarin.", "Get INR checked at government medical college if private monitoring too expensive", "Avoid raw papaya, neem — may affect Warfarin metabolism", "If vegetarian — keep vegetable intake consistent, don't suddenly increase spinach/greens"],
        },
        followUp: {
          when: "INR check in 3-5 days, then weekly for 4 weeks, then every 2-4 weeks maintenance",
          what: ["Repeat INR to ensure stable on re-established dose", "Document new Warfarin dose (may need reduction from initial 5mg to 3-4mg)", "Consider switching to DOAC (Dabigatran, Rivaroxaban) if poor INR control — more predictable, don't need INR monitoring"],
        },
        referral: {
          needed: true,
          to: "Cardiologist (re-assess AF management, consider rate-control drug), ENT if epistaxis not controlled within 4 hours, Hematologist if recurrent Warfarin-related bleeding",
          urgency: "URGENT — Cardiologist same day. ENT as needed for ongoing bleeding.",
        },
      },
      redFlags: [
        { flag: "Persistent epistaxis despite nasal pinching x 15 min and ice packs", action: "ENT consult for nasal packing or cautery — bleeding may be from large vessel", urgency: "IMMEDIATE" },
        { flag: "New onset headache, confusion, focal neurological deficit", action: "Suspect intracranial hemorrhage — CT head stat, neurosurgery consult, transfer to ICU", urgency: "IMMEDIATE" },
        { flag: "Hemodynamic instability (SBP <90, HR >120 persistent)", action: "Massive transfusion protocol. Prepare for emergent surgery if intra-abdominal hemorrhage suspected.", urgency: "IMMEDIATE" },
        { flag: "Hemoptysis with hemodynamic changes", action: "Suspect intrapulmonary hemorrhage — CXR, consider bronchoscopy, may need mechanical ventilation", urgency: "IMMEDIATE" },
        { flag: "INR remains >8 six hours after FFP + Vitamin K", action: "Repeat INR, give second dose FFP, may need PCC if available", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Warfarin INR target for AF is 2-3. INR >4 has significant bleeding risk. INR >9 is life-threatening.",
        "Vitamin K takes 12-24 hours to work — immediate bleeding needs FFP or PCC for instant factor replacement",
        "FFP works immediately (15 min) but needs large volumes; PCC is concentrated but less available in India",
        "Common causes of Warfarin over-anticoagulation: Poor compliance, dietary K changes, drug interactions (NSAIDs, antibiotics), liver dysfunction",
        "NSAIDs + Warfarin = synergistic bleeding risk — always contraindicated without strong indication",
        "IM Vitamin K injections cause hematomas in anticoagulated patients — ALWAYS use IV route",
        "India context: Many patients don't get regular INR monitoring → more Warfarin complications. DOACs (apixaban, rivaroxaban) are safer alternative if affordable.",
      ],
      commonMistakes: [
        "Giving IM Vitamin K instead of IV — causes large muscle hematomas in already anticoagulated patient",
        "Only giving Vitamin K without FFP/PCC when INR >8 and actively bleeding — Vitamin K takes too long, patient bleeds while waiting",
        "Stopping Warfarin completely after bleeding episode — loses protection against thromboembolism. Need to restart at lower dose with INR monitoring.",
        "Not addressing drug interactions — patient took Ibuprofen which increased Warfarin effect. Must educate on avoiding NSAIDs.",
        "Over-treating INR — giving FFP/PCC to get INR to <2. Target is 2-3 for AF, not <2. Over-correction risks rethrombosis.",
        "Not counseling on dietary consistency with Vitamin K — patients don't realize sudden diet changes (like increasing greens) affect INR",
        "Missing underlying cause — assuming patient non-compliant when actually poor diet, drug interaction, or liver disease is cause",
      ],
      relevantHistoryQs: ["onset", "associated_bleeding", "recent_meds", "diet_changes", "compliance", "previous_bleeding", "liver_disease"],
      relevantExamIds: ["ecchymosis", "epistaxis", "gum_bleeding", "oral_exam", "consciousness", "focal_deficits", "hemodynamic_stability"],
      difficulty: "MODERATE",
      estimatedMinutes: 20,
      subjectTags: ["PH", "IM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "PH3.2",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
