// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for Preclinical Subjects
// Biochemistry, Forensic Medicine, Community Medicine (Layer 8 Clinical Decision)
// ---------------------------------------------------------------------------

export const biochemistryScenarios = [
  // ─── 1. Acute Liver Failure with Metabolic Derangement ─────────────────
  {
    topicCode: "BI-MOD-01-TOP-01",
    scenario: {
      patientAge: 32,
      patientSex: "Male",
      patientOccupation: "Software engineer",
      patientLocation: "Bengaluru, Karnataka",
      chiefComplaint: "Severe abdominal pain, vomiting, and yellowing of skin for 5 days",
      historyOfPresent: `
- Onset: Acute onset 5 days ago after 2-day history of high fever (102-104°F) and myalgia
- Character: Severe, dull, aching pain in right upper quadrant and epigastrium
- Severity: 8/10, progressive worsening
- Associated: Persistent vomiting (8-10 times daily, bilious), anorexia, yellowing of skin and eyes (noticed 3 days ago)
- Progression: Initially fever and bodyache, progressed to abdominal pain, then jaundice
- Additional: Altered sleep-wake cycle, irritability, confusion (noted by family for past 24 hours)
- Urine: Dark brown/cola-colored for past 2 days. Stool: Pale/clay-colored
      `.trim(),
      pastHistory: "No chronic liver disease. No previous hepatitis. No cirrhosis. No previous hospitalizations. No blood transfusions.",
      familyHistory: "No family history of liver disease. No TB contacts. No hereditary liver disease.",
      socialHistory: "Non-smoker. Occasional social alcohol (1-2 drinks/week — never heavy drinking). Works in IT company. Diet: Mixed vegetarian-non-vegetarian, eats out 3-4 times weekly. Recent travel to West Bengal (2 weeks ago) for family event — water quality uncertain.",
      drugHistory: "No regular medications. Took Acetaminophen 500mg 4-5 times in past 5 days for fever. No illicit drugs. No known drug allergies.",
      vitals: { pulse: 110, bp: "100/68", temp: 38.2, rr: 24, spo2: 96 },
      generalExam: `
- General appearance: Acutely ill, restless, confused, disoriented to time
- Pallor: Mild pallor
- Icterus: Marked icterus of sclera and skin (bilirubin staining obvious)
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema presently, but easily pitting when checked
- Asterixis: Present (flapping tremor of outstretched hands) — sign of hepatic encephalopathy
- Fetor hepaticus: Slight sweet-smelling breath odor
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Apex beat 5th ICS mid-clavicular — tachycardic",
          heart_sounds: "S1 S2 normal. Tachycardia at 110 bpm. No murmurs.",
          blood_pressure: "100/68 mmHg — hypotensive for this patient",
          peripheral_pulses: "All pulses present. Bounding pulse in context of fever.",
        },
        respiratory: {
          chest_inspection: "Bilateral equal chest movements",
          auscultation_lungs: "Clear bilateral air entry. No added sounds.",
          trachea: "Trachea central",
        },
        abdominal: {
          abdo_inspection: "Abdomen distended, visible dilated veins (caput medusae suggestive)",
          palpation_superficial: "Marked tenderness in RUQ and epigastrium",
          palpation_deep: "Hepatomegaly — liver palpable 6cm below costal margin, tender, firm edge",
          spleen_palpation: "Spleen not palpable (rules out massive splenomegaly)",
          bowel_sounds: "Reduced bowel sounds (hyperperistalsis initially, then reduced)",
          percussion: "Dullness in RUQ, resonance over spleen",
        },
        neurological: {
          consciousness: "Drowsy, not fully oriented to time and place (GCS 14/15 — E4 V3 M6)",
          cranial_nerves: "Cranial nerves II-XII intact on gross testing",
          reflexes: "Exaggerated deep tendon reflexes (hyperreflexia)",
          plantar: "Plantar reflex — extensor bilaterally (Babinski positive — concerning sign of encephalopathy)",
        },
      },
      availableInvestigations: [
        { id: "tbl", name: "Total Serum Bilirubin", cost: 150, turnaround: "30 min", category: "Liver Function", result: "Total Bilirubin: 18.5 mg/dL (Normal: 0.1-1.2 mg/dL)", isAbnormal: true, interpretation: "Markedly elevated — 15x upper limit of normal. Suggests hepatocellular injury with cholestasis.", isEssential: true },
        { id: "db", name: "Direct Bilirubin", cost: 150, turnaround: "30 min", category: "Liver Function", result: "Direct Bilirubin: 14.2 mg/dL (Normal: 0-0.3 mg/dL)", isAbnormal: true, interpretation: "Predominantly direct hyperbilirubinemia — suggests hepatocellular damage and cholestasis. Indicates liver's inability to conjugate and excrete.", isEssential: true },
        { id: "ast", name: "AST (SGOT)", cost: 150, turnaround: "45 min", category: "Liver Enzymes", result: "AST: 3200 U/L (Normal: 15-40 U/L)", isAbnormal: true, interpretation: "Massively elevated >80x upper limit. Severe hepatocellular necrosis. AST elevation more than ALT in fulminant hepatitis.", isEssential: true },
        { id: "alt", name: "ALT (SGPT)", cost: 150, turnaround: "45 min", category: "Liver Enzymes", result: "ALT: 2800 U/L (Normal: 7-56 U/L)", isAbnormal: true, interpretation: "Massively elevated ~50x upper limit. Hepatocellular injury. ALT <AST ratio suggests fulminant hepatitis pattern.", isEssential: true },
        { id: "alp", name: "Alkaline Phosphatase", cost: 150, turnaround: "45 min", category: "Liver Enzymes", result: "ALP: 380 U/L (Normal: 30-120 U/L)", isAbnormal: true, interpretation: "Moderately elevated ~3x upper limit. Indicates cholestasis component in addition to hepatocellular damage.", isEssential: false },
        { id: "albumin", name: "Serum Albumin", cost: 200, turnaround: "1 hour", category: "Liver Synthesis", result: "Serum Albumin: 2.8 g/dL (Normal: 3.5-5.5 g/dL)", isAbnormal: true, interpretation: "Low — indicates impaired hepatic synthetic function. Reflects chronicity of disease and poor prognosis.", isEssential: true },
        { id: "pt_inr", name: "PT/INR", cost: 400, turnaround: "1 hour", category: "Coagulation", result: "PT: 28 sec, INR: 3.2 (Normal PT: 11-13 sec, INR: 0.8-1.0)", isAbnormal: true, interpretation: "Markedly prolonged — indicates severe impairment of Factor II, V, VII, X synthesis. INR >1.5 indicates liver failure.", isEssential: true },
        { id: "ammonia", name: "Serum Ammonia", cost: 800, turnaround: "1.5 hours", category: "Liver Function", result: "Serum Ammonia: 180 μmol/L (Normal: 15-45 μmol/L)", isAbnormal: true, interpretation: "Markedly elevated ~4x upper limit. Correlates with hepatic encephalopathy. Ammonia is a neurotoxin from protein metabolism — not cleared by failing liver.", isEssential: true },
        { id: "glucose", name: "Blood Glucose", cost: 100, turnaround: "15 min", category: "Metabolism", result: "Blood Glucose: 62 mg/dL", isAbnormal: true, interpretation: "Hypoglycemia — liver cannot maintain glucose homeostasis (cannot perform gluconeogenesis). Bad prognostic sign in liver failure.", isEssential: true },
        { id: "urea", name: "Serum Urea", cost: 150, turnaround: "45 min", category: "Renal Function", result: "Serum Urea: 48 mg/dL (Normal: 7-20 mg/dL)", isAbnormal: true, interpretation: "Elevated — due to impaired hepatic urea cycle. Accumulation of ammonia and amino acids.", isEssential: false },
        { id: "creatinine", name: "Serum Creatinine", cost: 150, turnaround: "45 min", category: "Renal Function", result: "Serum Creatinine: 1.8 mg/dL (Normal: 0.6-1.2 mg/dL)", isAbnormal: true, interpretation: "Elevated — suggests hepatorenal syndrome or acute kidney injury secondary to liver failure. Poor prognostic indicator.", isEssential: true },
        { id: "sodium", name: "Serum Sodium", cost: 200, turnaround: "1 hour", category: "Electrolytes", result: "Serum Sodium: 128 mEq/L (Normal: 135-145 mEq/L)", isAbnormal: true, interpretation: "Hyponatremia — due to SIADH, water retention, and renal dysfunction. Contributes to cerebral edema and encephalopathy.", isEssential: true },
        { id: "potassium", name: "Serum Potassium", cost: 200, turnaround: "1 hour", category: "Electrolytes", result: "Serum Potassium: 3.1 mEq/L (Normal: 3.5-5.0 mEq/L)", isAbnormal: true, interpretation: "Hypokalemia — due to vomiting, poor intake, and renal wasting. Hypokalemia worsens encephalopathy.", isEssential: true },
        { id: "calcium", name: "Serum Calcium (corrected)", cost: 200, turnaround: "1 hour", category: "Minerals", result: "Serum Calcium: 7.2 mg/dL (Normal: 8.5-10.5 mg/dL)", isAbnormal: true, interpretation: "Hypocalcemia — due to hypoalbuminemia (low albumin) and impaired vitamin D metabolism. Contributes to neurological dysfunction.", isEssential: false },
        { id: "vhsv_test", name: "Viral Hepatitis Serology (IgM HAV, IgM HBc, Anti-HCV)", cost: 1500, turnaround: "2-3 hours", category: "Virology", result: "IgM HAV: POSITIVE, IgM HBc: NEGATIVE, Anti-HCV: NEGATIVE", isAbnormal: true, interpretation: "IgM HAV positive confirms acute viral hepatitis A — most common cause of acute liver failure in India. Explains acute presentation.", isEssential: true },
        { id: "abdominal_ultrasound", name: "Abdominal Ultrasound", cost: 800, turnaround: "30 min", category: "Imaging", result: "Liver: Heterogeneous echotexture, swollen (18cm in midline). No focal lesions. Portal vein patent. Spleen: Normal size. Ascites: Small amount of free fluid in pelvis. No gallstones.", isAbnormal: true, interpretation: "Ultrasound confirms acute hepatitis with swollen liver. Small ascites suggests synthetic dysfunction. No obstruction or cirrhosis features yet.", isEssential: false },
        { id: "cbc", name: "Complete Blood Count", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 11.8 g/dL, WBC: 14,200/μL (mild leukocytosis), Platelets: 1.2 lakhs (mild thrombocytopenia)", isAbnormal: true, interpretation: "Mild anemia and leukocytosis from infection/inflammation. Mild thrombocytopenia from marrow suppression and splenic sequestration.", isEssential: false },
        { id: "procalcitonin", name: "Procalcitonin", cost: 1200, turnaround: "2 hours", category: "Inflammation", result: "Procalcitonin: 1.8 ng/mL (Normal: <0.1 ng/mL)", isAbnormal: true, interpretation: "Elevated — suggests bacterial superinfection risk. Patients with acute liver failure are immunocompromised.", isEssential: false },
      ],
      correctDiagnosis: "Acute Liver Failure Secondary to Acute Viral Hepatitis A (Fulminant Hepatitis)",
      differentials: [
        { diagnosis: "Acute Hepatitis B", likelihood: "MEDIUM", reasoning: "Acute HBV also causes acute hepatitis, but IgM HBc is negative, ruling this out. HBV less common than HAV in acute liver failure." },
        { diagnosis: "Drug-Induced Liver Injury (Acetaminophen toxicity)", likelihood: "MEDIUM", reasoning: "Patient took Acetaminophen 4-5 times over 5 days — total <2.5g. Total dose unlikely to cause fulminant failure, though acetaminophen is hepatotoxic. Viral serology positive for HAV." },
        { diagnosis: "Autoimmune Hepatitis", likelihood: "LOW", reasoning: "Acute presentation with IgM HAV positive makes viral more likely. Autoimmune hepatitis is more insidious and usually presents in women." },
        { diagnosis: "Alcoholic Hepatitis", likelihood: "LOW", reasoning: "Patient denies heavy alcohol use. Minimal social alcohol intake. Acute presentation and viral serology make HAV more likely." },
        { diagnosis: "Fulminant Wilson Disease", likelihood: "LOW", reasoning: "Wilson disease presents with hemolytic anemia, RBC fragmentation, and copper accumulation. Age and presentation fit HAV better. Would need ceruloplasmin level." },
      ],
      diagnosticReasoning: "32-year-old male presenting with acute onset jaundice, severe hepatic dysfunction, and hepatic encephalopathy (asterixis, altered mental status, elevated ammonia, Babinski signs). Markedly elevated transaminases (AST 3200, ALT 2800) with severe hyperbilirubinemia (18.5 mg/dL direct predominant). Coagulation severely impaired (INR 3.2) indicating acute liver failure. IgM HAV positive — acute viral hepatitis A is the diagnosis. The progression from fever/myalgia to acute hepatitis to encephalopathy with metabolic derangement (hyperammonemia, hypoglycemia, hyponatremia, hypocalcemia) and coagulation failure defines fulminant hepatic failure.",
      managementPlan: {
        immediateActions: [
          { action: "Establish IV access with large-bore cannula and fluid resuscitation", reasoning: "Patient is hypotensive (100/68) and at risk of shock. Requires careful fluid management to avoid fluid overload while maintaining renal perfusion.", priority: "STAT" },
          { action: "Continuous cardiopulmonary monitoring", reasoning: "Risk of sudden decompensation, arrhythmias, and hemodynamic collapse in fulminant hepatic failure", priority: "STAT" },
          { action: "Maintain tight glycemic control — give 10% Dextrose IV if glucose <70", reasoning: "Hypoglycemia (62 mg/dL) is life-threatening and indicates severe hepatic dysfunction. Regular glucose monitoring mandatory.", priority: "STAT" },
          { action: "Reduce ammonia production — restrict protein intake to 0.5-1g/kg/day", reasoning: "Ammonia (180 μmol/L) is neurotoxic and causes encephalopathy. Dietary protein restriction limits substrate for ammonia formation.", priority: "URGENT" },
          { action: "Place NG tube and NPO status pending airway assessment", reasoning: "Encephalopathy increases aspiration risk. Risk of variceal bleeding from portal hypertension.", priority: "STAT" },
          { action: "Urgent ICU referral and hepatology consultation", reasoning: "Fulminant hepatic failure requires ICU care with possible transplant evaluation. Prognosis poor without intervention.", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Lactulose (Osmotic Laxative)", examples: ["Lactulose 30mL TDS, titrate to 2-3 loose stools/day"], route: "Oral/NG tube", duration: "Ongoing", reasoning: "Reduces ammonia-producing bacteria in colon. Acidifies stool to prevent ammonia absorption. Mainstay of hepatic encephalopathy treatment.", contraindications: ["Bowel obstruction", "Ileus"], indianContext: "Lactulose syrup available at ₹40-60 for 100mL bottle. Generic versions in Jan Aushadhi." },
          { drugClass: "Rifaxomycin (Non-absorbed antibiotic)", examples: ["Rifaxomycin 200mg BD"], route: "Oral", duration: "2-4 weeks or until improvement", reasoning: "Reduces ammonia-producing gut bacteria without systemic absorption. Decreases ammonia levels by 30-50%.", contraindications: ["Ileus", "Pregnancy"], indianContext: "Rifaxomycin expensive (~₹400-600/tablet). Neomycin 500mg QID alternative at ₹2/tablet." },
          { drugClass: "L-Ornithine L-Aspartate (LOLA)", examples: ["LOLA 5-10g TDS IV"], route: "IV", duration: "Until encephalopathy resolves", reasoning: "Ammonia scavenger — catalyzes conversion of ammonia to glutamine and glutamate. Reduces ammonia by 20-30%.", contraindications: ["Renal failure (relative)"], indianContext: "Expensive (~₹800-1200 per vial). Not routinely available in all hospitals." },
          { drugClass: "Fresh Frozen Plasma (FFP)", examples: ["FFP 10-15 mL/kg IV"], route: "IV", duration: "As needed for coagulopathy", reasoning: "Replaces missing clotting factors (II, V, VII, X). INR is 3.2 — high bleeding risk. FFP is first-line before liver transplant evaluation.", contraindications: ["Volume overload"], indianContext: "Available at blood banks. Cost ~₹1000-1500 per unit. Risk of bloodborne infections." },
          { drugClass: "N-Acetylcysteine (NAC)", examples: ["NAC 150 mg/kg loading IV, then 12.5 mg/kg/hr"], route: "IV", duration: "24-48 hours", reasoning: "Antioxidant and glutathione precursor. Improves oxygen delivery and reduces oxidative stress. Improves transplant-free survival by ~30%.", contraindications: ["Anaphylactoid reactions (rare)"], indianContext: "NAC is relatively affordable (~₹200-300 per vial). Standard of care in fulminant hepatitis." },
          { drugClass: "PPI (Proton Pump Inhibitor)", examples: ["Pantoprazole 40mg IV OD"], route: "IV/Oral", duration: "During hospitalization", reasoning: "Stress ulcer prophylaxis — fulminant hepatitis patients at high risk of GI bleeding from stress and coagulopathy.", contraindications: ["Hypersensitivity"], indianContext: "Generic Pantoprazole 40mg at ₹5-10/tablet." },
          { drugClass: "Antibiotics (Prophylactic)", examples: ["Cefotaxime 1g IV TDS", "Ciprofloxacin 500mg PO BD"], route: "IV/Oral", duration: "5-7 days", reasoning: "SBP (Spontaneous Bacterial Peritonitis) prophylaxis. Patients with ascites and low protein have high SBP risk (up to 50% mortality).", contraindications: ["Severe allergy"], indianContext: "Cefotaxime generic at ₹30-50 per vial. Ciprofloxacin at ₹1-2/tablet." },
        ],
        nonPharmacological: [
          { intervention: "NPO (Nothing by mouth) initially; advance diet per tolerance", reasoning: "Acute phase requires rest. Protein restriction to <1g/kg/day to minimize ammonia production", duration: "First 48-72 hours" },
          { intervention: "Strict bed rest with head elevated 30°", reasoning: "Reduces metabolic demand and improves cerebral perfusion", duration: "Until clinical improvement" },
          { intervention: "Avoid all hepatotoxic drugs (Acetaminophen, NSAIDs, Alcohol)", reasoning: "Any hepatotoxic agent will worsen liver failure", duration: "Lifelong" },
          { intervention: "Frequent neurological checks to assess encephalopathy grade", reasoning: "Track progression — Grade III or IV encephalopathy requires intubation for airway protection", duration: "Hourly until stable" },
        ],
        monitoring: [
          { parameter: "Hourly neuro checks (GCS, asterixis, orientation)", frequency: "Hourly", target: "GCS stable or improving, asterixis improving", escalation: "If GCS <8 or rapid deterioration — intubate for airway protection" },
          { parameter: "4-hourly blood glucose", frequency: "Every 4 hours", target: "100-150 mg/dL", escalation: "If <70 — stat 50% dextrose IV; if >250 — add insulin" },
          { parameter: "Daily LFTs (AST, ALT, bilirubin, INR, albumin)", frequency: "Daily for 3 days, then alternate days", target: "Trend — AST/ALT should peak then decline; bilirubin may lag", escalation: "If ALT/bilirubin continuing to rise — consider ICU transfer and transplant evaluation" },
          { parameter: "Daily ammonia level", frequency: "Every 24 hours", target: "<100 μmol/L (goal <70 μmol/L)", escalation: "If ammonia >150 μmol/L despite lactulose/rifaxomicin — add LOLA or consider transplant" },
          { parameter: "Serum electrolytes (Na, K, Ca) and glucose", frequency: "Every 12 hours initially", target: "Na >130, K >3.5, Ca >7.5, glucose 100-150", escalation: "Hyponatremia <120 — risk of seizures; treat cautiously with fluid restriction" },
          { parameter: "Coagulation profile (PT/INR, aPTT)", frequency: "Daily", target: "INR <2 indicates improvement; >3 requires FFP", escalation: "If INR >4 with bleeding — give FFP, transfuse packed RBCs, consider transplant" },
        ],
        lifestyle: {
          dos: ["Complete bed rest during acute phase", "High-carbohydrate diet once encephalopathy resolves", "Avoid all alcohol permanently", "Ensure safe water (boiling or RO) — practice food hygiene"],
          donts: ["No hepatotoxic drugs (Acetaminophen max 2g/day, NO NSAIDs)", "No alcohol — hepatitis A survivors remain at risk with alcohol", "No raw/undercooked shellfish — HAV routes of transmission", "No strenuous activity until liver biochemistry normalizes"],
          indianSpecific: ["Ensure drinking water is boiled or from RO system — critical for HAV prevention", "If living in non-endemic area, family members should receive HAV vaccination", "Monitor for relapsing hepatitis (10-20% of HAV cases) — may require repeat hospitalization"],
        },
        followUp: {
          when: "Weekly for first month, then biweekly for 2 months, then monthly for 6 months",
          what: ["Repeat LFTs (AST, ALT, bilirubin, albumin, INR)", "Clinical assessment for residual encephalopathy", "Screen for post-hepatitis complications (cholestasis, hemolysis)", "HAV IgG at 3 months to confirm immunity development"],
        },
        referral: {
          needed: true,
          to: "Hepatology + Intensive Care Unit. Consider Liver Transplant Evaluation if fulminant failure criteria met (INR >1.5 + encephalopathy + jaundice <7 days, or KCC criteria)",
          urgency: "IMMEDIATE — fulminant hepatic failure is medical emergency with ~80% mortality without transplant",
        },
      },
      redFlags: [
        { flag: "GCS <8 or rapid decline in consciousness", action: "Intubate for airway protection immediately — risk of aspiration", urgency: "IMMEDIATE" },
        { flag: "Hemodynamic instability (SBP <90, MAP <65) refractory to fluids", action: "Start vasopressors (Noradrenaline); likely SIRS/sepsis or hepatorenal syndrome", urgency: "IMMEDIATE" },
        { flag: "INR >4 with spontaneous bleeding or GI bleeding", action: "Transfuse FFP and packed RBCs; assess transplant candidacy urgently", urgency: "IMMEDIATE" },
        { flag: "Ammonia >200 with worsening encephalopathy despite max lactulose", action: "LOLA or Rifaxomicin; consider intubation for airway if GCS <8", urgency: "URGENT" },
        { flag: "Hypoglycemia <50 refractory to IV dextrose", action: "Indicates severe hepatic dysfunction and poor prognosis; escalate care", urgency: "IMMEDIATE" },
      ],
      keyLearningPoints: [
        "Acute liver failure is defined as INR >1.5 + encephalopathy in absence of pre-existing cirrhosis; mortality is 50-80% without transplant",
        "Ammonia level does NOT predict encephalopathy grade but high ammonia (>150 μmol/L) is neurotoxic — lactulose is first-line treatment",
        "Bilirubin metabolism defect in liver failure: impaired uptake (↓), impaired conjugation (↓), impaired excretion (↓) → all cause hyperbilirubinemia",
        "Direct hyperbilirubinemia predominates in hepatocellular disease (conjugated bilirubin backs up into blood) vs. indirect in hemolysis",
        "Acute viral hepatitis A has best prognosis among viral hepatitis (90% recovery) but fulminant disease requires transplant evaluation",
        "In India, HAV is main cause of acute liver failure (poor sanitation); vaccination is key prevention for non-immune individuals",
        "Hyponatremia in liver failure is due to SIADH + renal dysfunction — treat cautiously with fluid restriction to avoid cerebral edema",
        "Lactate and prothrombin time are better predictors of prognosis than ammonia level in fulminant hepatic failure",
      ],
      commonMistakes: [
        "Overlooking hypoglycemia as sign of severe liver failure — always measure blood glucose in jaundiced patients",
        "Giving high-protein diet thinking it will improve albumin — wrong! Restricting protein minimizes ammonia production in encephalopathy",
        "Not recognizing Babinski sign and asterixis as signs of hepatic encephalopathy — confusing them with stroke or epilepsy",
        "Delaying transplant evaluation — fulminant hepatic failure has <5 days window for transplant consideration",
        "Treating hepatic encephalopathy with only lactulose without addressing underlying cause — find and treat infection, bleeding, etc.",
        "Ignoring coagulopathy (high INR) as merely a lab abnormality — it indicates severe liver failure and catastrophic bleeding risk",
        "Giving normal saline in volume resuscitation — use albumin or FFP instead to avoid worsening ascites and encephalopathy",
      ],
      relevantHistoryQs: ["onset", "fever", "jaundice", "confusion", "vomiting", "dark_urine", "travel", "water_source", "alcohol", "drug_use"],
      relevantExamIds: ["general_appearance", "icterus", "asterixis", "consciousness", "liver_palpation", "plantar", "reflexes", "blood_pressure"],
      difficulty: "HARD",
      estimatedMinutes: 25,
      subjectTags: ["BI", "BM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "BI1.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];

export const forensicMedicineScenarios = [
  // ─── 1. Organophosphorus Poisoning (Suicidal Ingestion) ──────────────────
  {
    topicCode: "FM-MOD-01-TOP-01",
    scenario: {
      patientAge: 28,
      patientSex: "Female",
      patientOccupation: "Farmer",
      patientLocation: "Haryana (agricultural region)",
      chiefComplaint: "Found unconscious, excessive salivation, muscle twitching — brought by family 1 hour after ingestion",
      historyOfPresent: `
- Timeline: Ingestion occurred ~1 hour before presentation at hospital
- Substance: Confirmed organophosphorus insecticide (Malathion/Parathion) from agricultural storage — approximately 200mL consumed orally
- Motive: Recent marital discord, domestic dispute, threatened divorce. Suicide note found at home stating "cannot continue like this"
- Onset of symptoms: Within 15 minutes of ingestion — started with nausea, vomiting, abdominal cramps
- Current presentation: Found by mother unconscious in locked room with empty pesticide bottle. Excessive salivation, muscle fasciculations visible
- Associated: Pinpoint pupils, difficulty breathing, loss of bladder/bowel control (incontinent at scene)
- Clothing: No signs of external injury. Faint smell of pesticide on hands and mouth.
      `.trim(),
      pastHistory: "No chronic illnesses. No previous self-harm attempts. No psychiatric treatment. No medications.",
      familyHistory: "Mother has anxiety disorder (medicated). No family history of suicide. Father is an alcoholic.",
      socialHistory: "Married for 4 years, no children. Recent marital problems for past 3 months. Works as farmer on family land. Lives in rural area with limited mental health access. Non-smoker, occasional alcohol (rare).",
      drugHistory: "No regular medications. Denies illicit drug use. No known allergies.",
      vitals: { pulse: 64, bp: "140/90", temp: 37.2, rr: 32, spo2: 82 },
      generalExam: `
- General appearance: Unconscious, cyanotic, profusely salivating (drooling), visible muscle fasciculations (twitching) especially in limbs
- Pallor: Mild pallor present
- Icterus: Absent
- Cyanosis: Central cyanosis of lips and tongue — SIGNIFICANT
- Clubbing: Not assessed due to acute presentation
- Edema: No pedal edema
- Smell: Faint pesticide odor on breath and clothing
- Pupils: Pinpoint pupils (myosis) bilaterally — pathognomonic for cholinergic toxidrome
- Fasciations: Visible muscle fasciculations (small involuntary muscle contractions) in extremities
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Not clearly palpable due to muscle fasciculations and unconsciousness",
          heart_sounds: "S1 S2 audible. Bradycardia at 64 bpm (muscarinic effect from excess acetylcholine)",
          blood_pressure: "140/90 mmHg — elevated (sympathomimetic phase or stress response)",
          peripheral_pulses: "Brachial and femoral pulses palpable. Weak due to shock state",
        },
        respiratory: {
          chest_inspection: "Labored breathing, accessory muscle use. SpO2 only 82% — severe hypoxemia",
          trachea: "Trachea central but difficult to assess (unconscious patient)",
          percussion: "Resonant bilaterally",
          auscultation_lungs: "Bilateral crackles and rhonchi (pulmonary edema due to excess acetylcholine → increased airway secretions)",
          vocal_resonance: "Not assessed (patient unconscious)",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft. Visible peristaltic movements (due to muscarinic excess)",
          palpation_superficial: "Soft, no tenderness",
          palpation_deep: "No organomegaly. No peritoneal signs.",
          bowel_sounds: "Hyperactive (diarrhea expected due to muscarinic effect)",
          incontinence: "Patient incontinent of urine and stool (loss of sphincter control from neuromuscular blockade)",
        },
        neurological: {
          consciousness: "Unconscious — GCS 8/15 (E1 V1 M6) — critical",
          cranial_nerves: "Cannot fully assess. Pupils pinpoint (myosis from parasympathomimetic excess). No pupil reactivity to light.",
          reflexes: "Brisk deep tendon reflexes (hyperreflexia from fasciculations). Difficult to elicit due to unconsciousness.",
          plantar: "Extensor (Babinski sign positive due to CNS depression)",
        },
      },
      availableInvestigations: [
        { id: "rbs", name: "Random Blood Sugar", cost: 100, turnaround: "10 min", category: "Chemistry", result: "RBS: 240 mg/dL", isAbnormal: true, interpretation: "Hyperglycemia from stress response (sympathomimetic surge early in OP poisoning, then stress from severe toxicity)", isEssential: false },
        { id: "rft", name: "Renal Function Tests", cost: 400, turnaround: "1 hour", category: "Chemistry", result: "Urea: 28 mg/dL, Creatinine: 0.9 mg/dL, Na: 138 mEq/L, K: 3.2 mEq/L", isAbnormal: true, interpretation: "Hypokalemia from transcellular shift during acute toxicity and muscle fasciculations. Risk of arrhythmia. Renal function still normal (not yet AKI).", isEssential: true },
        { id: "cbc", name: "Complete Blood Count", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 13.6 g/dL, WBC: 18,400/μL (marked leukocytosis), Platelets: 2.2 lakhs", isAbnormal: true, interpretation: "Marked stress leukocytosis from acute poisoning and sympathetic surge. No anemia yet (may develop with hemolysis).", isEssential: false },
        { id: "rbc_indices", name: "RBC Indices (Hemolysis screen)", cost: 300, turnaround: "1 hour", category: "Hematology", result: "LDH: 350 U/L, Indirect bilirubin: 0.6 mg/dL, Reticulocyte count: 1.2%", isAbnormal: false, interpretation: "No evidence of significant hemolysis at present, though OP poisoning can cause hemolysis in severe cases", isEssential: false },
        { id: "ache", name: "RBC Acetylcholinesterase Activity (Cholinesterase Level)", cost: 2000, turnaround: "2-4 hours (or send to reference lab)", category: "Toxicology", result: "RBC Acetylcholinesterase: 45% of baseline (Normal: >80%)", isAbnormal: true, interpretation: "SIGNIFICANT depression — indicates true organophosphorus toxicity. >50% depression confirms OP poisoning. Key diagnostic test in forensic/medicolegal cases.", isEssential: true },
        { id: "plasma_ache", name: "Plasma Pseudocholinesterase", cost: 1800, turnaround: "2 hours", category: "Toxicology", result: "Plasma Pseudocholinesterase: 2.1 U/mL (Normal: 4-11 U/mL)", isAbnormal: true, interpretation: "Severely depressed — confirms organophosphorus toxicity. More sensitive to OP than RBC AchE. Used to guide pralidoxime therapy.", isEssential: true },
        { id: "cbc_diff", name: "Arterial Blood Gas", cost: 600, turnaround: "15 min", category: "Blood Gas", result: "pH: 7.28 (acidemia), pCO2: 58 (hypercapnia), pO2: 52 (severe hypoxemia), HCO3: 18 (metabolic component)", isAbnormal: true, interpretation: "Mixed acidosis: respiratory (hypoventilation from paralysis + pulmonary edema) + metabolic (lactic acidosis from tissue hypoxia). Critical — indicates need for intubation.", isEssential: true },
        { id: "lactate", name: "Serum Lactate", cost: 600, turnaround: "1 hour", category: "Chemistry", result: "Lactate: 6.2 mmol/L (Normal: 0.5-2 mmol/L)", isAbnormal: true, interpretation: "Elevated — indicates tissue hypoxia and anaerobic metabolism from respiratory failure and reduced oxygen delivery.", isEssential: true },
        { id: "liver_func", name: "Liver Function Tests", cost: 300, turnaround: "1 hour", category: "Chemistry", result: "AST: 120 U/L, ALT: 98 U/L, Bilirubin: 0.9 mg/dL, ALP: 80 U/L", isAbnormal: true, interpretation: "Mild elevation of transaminases from hepatocellular stress. Bilirubin still normal — no significant cholestasis.", isEssential: false },
        { id: "ecg", name: "12-lead ECG", cost: 200, turnaround: "5 min", category: "Cardiac", result: "Bradycardia at 64 bpm. Normal sinus rhythm. QTc interval 460 ms (upper normal — hypokalemia can prolong QT). No acute ischemia. No blocks.", isAbnormal: true, interpretation: "Bradycardia is muscarinic effect (excess acetylcholine → vagal stimulation). QTc borderline — hypokalemia + acidosis increases arrhythmia risk.", isEssential: true },
        { id: "urine_output", name: "Urine Analysis + Myoglobin", cost: 300, turnaround: "30 min", category: "Urine", result: "Color: Dark brown/cola-colored. Myoglobin: POSITIVE (3+). Specific gravity: 1.035 (concentrated). pH: 5.2", isAbnormal: true, interpretation: "Myoglobinuria from rhabdomyolysis (intense muscle fasciculations). Risk of acute tubular necrosis (ATN) and acute kidney injury. Dehydration evident from concentrated urine.", isEssential: true },
        { id: "chest_xray", name: "Chest X-ray", cost: 300, turnaround: "15 min", category: "Imaging", result: "Bilateral basilar consolidation and interstitial edema pattern (consistent with pulmonary edema). No aspiration yet but aspiration risk high.", isAbnormal: true, interpretation: "SLUDGE syndrome causing pulmonary edema: Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis — all from cholinergic excess.", isEssential: false },
      ],
      correctDiagnosis: "Acute Organophosphorus Insecticide Poisoning (Suicidal Ingestion) — Cholinergic Crisis with Respiratory Failure",
      differentials: [
        { diagnosis: "Carbamate Poisoning", likelihood: "MEDIUM", reasoning: "Similar presentation (SLUDGE, miosis, fasciculations, bradycardia) but recovery is spontaneous in carbamates. Carbamates less common in India than OP." },
        { diagnosis: "Nicotine Poisoning", likelihood: "LOW", reasoning: "Can cause salivation and muscle twitching but wouldn't cause pinpoint pupils or profound cholinesterase depression. Unlikely source in rural area." },
        { diagnosis: "Strychnine Poisoning", likelihood: "LOW", reasoning: "Causes violent convulsions and opisthotonus (arched back). Not consistent with our findings. Strychnine is rare." },
        { diagnosis: "Status Epilepticus (from other cause)", likelihood: "LOW", reasoning: "Would expect Todd's paralysis post-ictal, not continuous unconsciousness. Cholinesterase levels would be normal." },
        { diagnosis: "Opiate Overdose", likelihood: "LOW", reasoning: "Presents with pinpoint pupils but no muscle fasciculations, salivation, or bradycardia. Cholinesterase normal. No respiratory depression history." },
      ],
      diagnosticReasoning: "28-year-old female with acute ingestion of 200mL organophosphorus insecticide 1 hour before presentation. Classic SLUDGE presentation: Salivation (profuse), Lacrimation, Urination (incontinent), Defecation (incontinent), GI upset (vomiting, cramps), Emesis. Hallmark signs: pinpoint pupils (myosis), bradycardia, muscle fasciculations, respiratory depression, cyanosis. Cholinesterase depression (RBC AchE 45%, plasma pseudocholinesterase 2.1 U/mL) confirms organophosphorus toxicity. ABG shows mixed acidosis with respiratory failure (pCO2 58, pO2 52) — intubation needed. Myoglobinuria from rhabdomyolysis (muscle fasciculations). Medicolegal context: suicide note, empty bottle at scene, domestic stress — clear suicidal intent.",
      managementPlan: {
        immediateActions: [
          { action: "Secure airway — consider intubation if GCS <8 or worsening respiratory status", reasoning: "SpO2 82% and RR 32 indicate impending respiratory failure. Secretions and aspiration risk high with unconscious patient and muscle fasciculations.", priority: "STAT" },
          { action: "Oxygen supplementation via AMBU bag/mechanical ventilation", reasoning: "Severe hypoxemia (pO2 52). Multiple factors: pulmonary edema (SLUDGE), paralysis of respiratory muscles (nicotinic), bradycardia.", priority: "STAT" },
          { action: "Establish large-bore IV access x 2", reasoning: "Will need aggressive pharmacotherapy (atropine, pralidoxime) and fluid resuscitation", priority: "STAT" },
          { action: "Atropine 5mg IV bolus, repeat every 5-10 minutes until signs of atropinization", reasoning: "Atropine blocks muscarinic effects (salivation, bronchospasm, bradycardia, miosis, GI symptoms). DOES NOT treat nicotinic effects (muscle fasciculations, paralysis, weakness). Essential first therapy.", priority: "STAT" },
          { action: "Pralidoxime (2-PAM) 1g IV bolus over 15-30 minutes, repeat every 1-2 hours x 4-6 doses", reasoning: "Reactivates acetylcholinesterase IF given within 24-48 hours. Essential in OP poisoning. Treats BOTH muscarinic and nicotinic effects. 2-PAM is 'oxime' that restores enzyme function.", priority: "STAT" },
          { action: "Benzodiazepines (Diazepam 10mg IV or Lorazepam 4mg IV) for fasciculations/seizure control", reasoning: "Muscle fasciculations and convulsions from nicotinic excess. Seizures from hypoxia. Benzos provide sedation + seizure control.", priority: "URGENT" },
          { action: "Stomach wash / Activated charcoal (if within 4-6 hours of ingestion and airway protected)", reasoning: "Remove unabsorbed pesticide. Only after securing airway — aspiration risk high.", priority: "URGENT" },
          { action: "Foley catheterization and monitor urine color/myoglobin", reasoning: "Myoglobinuria present. Risk of ATN and AKI. Aggressive hydration needed.", priority: "STAT" },
          { action: "Establish MLR (Medicolegal Report) — documented poisoning, note location/substance/timeline", reasoning: "Suicide case requires complete forensic documentation. Police involvement likely.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Antimuscarinic (Atropine)", examples: ["Atropine 5mg IV bolus, repeat every 5-10 min until dry secretions and HR >60", "Maximum doses: can require 50-100mg in severe poisoning"], route: "IV", duration: "Titrated to response (can require hours)", reasoning: "Blocks muscarinic cholinergic receptors. Reverses SLUDGE symptoms, bradycardia, bronchoconstriction. DOES NOT affect nicotinic manifestations (fasciculations, paralysis).", contraindications: ["Atropine toxicity: tachycardia >120, dry mouth, mydriasis — indicates over-treatment"], indianContext: "Atropine 1mg/mL ampoules available at ₹10-20 per ampoule. Essential drug in all hospitals." },
          { drugClass: "Acetylcholinesterase Reactivator (Pralidoxime/2-PAM)", examples: ["Pralidoxime 1g (10mL of 10% solution) IV bolus over 15-30 minutes", "Repeat: 1g every 1-2 hours for 4-6 doses, or continuous infusion 500mg/hour", "Total: Can give up to 12g/24hr"], route: "IV", duration: "Multiple doses over 24-48 hours (window closes after 48hrs)", reasoning: "Reactivates phosphorylated acetylcholinesterase by removing the phosphate group. Effective ONLY if given early (<24-48hrs). Restores enzyme function unlike atropine which just blocks receptors. Treats BOTH muscarinic AND nicotinic effects.", contraindications: ["Cholinesterase reactivators NOT to be used in carbamate poisoning (can worsen)", "Not in Guillain-Barré syndrome"], indianContext: "Pralidoxime expensive (~₹500-1000 per vial). Limited availability in rural hospitals. NCCR (National Poisons Information Centre) should be consulted for procurement." },
          { drugClass: "Benzodiazepine (Seizure/Fasciculation Control)", examples: ["Diazepam 10mg IV bolus, repeat every 15 min if seizures recur", "Or Lorazepam 4mg IV", "Maintenance: Can use infusion 5mg/hour if recurrent seizures"], route: "IV", duration: "As needed for seizures or fasciculations", reasoning: "Controls muscle fasciculations and seizures from nicotinic excess and hypoxia. Also provides anxiolysis in alert patients.", contraindications: ["Respiratory depression — use with caution if not intubated"], indianContext: "Diazepam 10mg/2mL ampoules at ₹5-10. Generic brands widely available." },
          { drugClass: "Fluid Resuscitation", examples: ["Normal saline 1L bolus IV over 15-30 min", "Then 50-100 mL/hr maintenance", "Keep urine output >200 mL/hr to prevent myoglobin precipitation in renal tubules"], route: "IV", duration: "Ongoing — aggressive initially", reasoning: "Myoglobinuria from rhabdomyolysis causes ATN (acute tubular necrosis) if urine becomes concentrated. High urine flow prevents myoglobin precipitation and AKI.", contraindications: ["Pulmonary edema (already present) — balance carefully. May need dialysis if severe"], indianContext: "IV fluids routinely available. Cost ~₹50-100 per liter." },
          { drugClass: "Sodium Bicarbonate (optional, if severe rhabdo)", examples: ["Sodium bicarbonate IV to alkalinize urine", "Target urine pH >6.5 (myoglobin precipitates in acidic urine)", "Use cautiously — can worsen hypokalemia"], route: "IV", duration: "Ongoing", reasoning: "Alkaline urine prevents myoglobin precipitation in renal tubules, reducing AKI risk. Give if myoglobinuria significant.", contraindications: ["Metabolic alkalosis", "Hypokalemia (ours is 3.2 — borderline)"], indianContext: "Sodium bicarbonate 8.4% ampoules at ₹20-30." },
          { drugClass: "Anticonvulsants (if benzos inadequate)", examples: ["Phenytoin 500mg IV loading dose", "Or propofol 1-2 mg/kg IV if intubated"], route: "IV", duration: "As needed", reasoning: "If diazepam fails to control seizures, add phenytoin or use propofol in ventilated patients.", contraindications: ["Phenytoin can cause hypotension — use cautiously"], indianContext: "Generic phenytoin available widely. Cost ~₹30-50 per ampoule." },
        ],
        nonPharmacological: [
          { intervention: "Decontamination: Remove all clothing contaminated with pesticide. Wash skin thoroughly with soap and water.", reasoning: "Ongoing dermal exposure can increase systemic absorption. OP pesticides can be absorbed through skin.", duration: "Upon arrival at hospital" },
          { intervention: "NPO status — secure airway before feeding", reasoning: "GCS 8 — high aspiration risk. Intubation needed.", duration: "Until safe to feed (usually after 48+ hours)" },
          { intervention: "Strict monitoring for signs of pralidoxime efficacy (improvement in fasciculations, muscle strength)", reasoning: "If pralidoxime works, fasciculations decrease and muscle tone improves — prognostic sign", duration: "Throughout treatment" },
        ],
        monitoring: [
          { parameter: "Hourly neurological examination (GCS, pupil size, fasciculations)", frequency: "Hourly initially, then 4-hourly", target: "GCS improving toward 15, pupils dilating (if atropine adequate), fasciculations resolving", escalation: "If GCS worsening or new seizures — increase sedation, check for complications (hypoxia, electrolyte imbalance)" },
          { parameter: "Continuous cardiac monitoring", frequency: "Continuous", target: "HR >50, sinus rhythm, QTc <500ms", escalation: "Bradycardia <50 — increase atropine. Arrhythmias/prolonged QT — correct hypokalemia" },
          { parameter: "Cholinesterase levels (RBC AchE and plasma pseudocholinesterase)", frequency: "Every 6-12 hours x 3-4 samples", target: "Trending upward toward normal (indicates enzyme reactivation by pralidoxime). Normal: RBC AchE >80%, Plasma PChE >4 U/mL", escalation: "If not improving with pralidoxime — may have resistant OP compound (e.g., some organophosphates)" },
          { parameter: "Arterial blood gas (pH, pCO2, pO2, HCO3)", frequency: "Every 2-4 hours initially", target: "pH >7.3, pCO2 <45, pO2 >80 (on oxygen/ventilation)", escalation: "If respiratory acidosis worsening — adjust ventilator settings. If metabolic acidosis — sodium bicarbonate" },
          { parameter: "Serum electrolytes (especially K+, Na+)", frequency: "Every 4-6 hours", target: "K+ >3.5 (critical for cardiac stability with bradycardia), Na+ 135-145", escalation: "Hypokalemia — give KCl IV. Hyponatremia — fluid restriction" },
          { parameter: "Urine myoglobin and color, hourly urine output", frequency: "Every 1-2 hours", target: "Urine clear, output >200 mL/hr, myoglobin decreasing", escalation: "Dark urine + oliguria — aggressive fluids + sodium bicarbonate" },
          { parameter: "Renal function (creatinine, urea)", frequency: "Every 12 hours", target: "Creatinine stable <1.2, urea <25", escalation: "If creatinine rising — indicate early AKI, may need dialysis" },
        ],
        lifestyle: {
          dos: ["Complete PPE (personal protective equipment) when handling pesticides", "Store pesticides in locked cabinet away from children/vulnerable persons"],
          donts: ["No pesticide use without proper protective equipment", "No self-storage of pesticides in food containers — major risk of accidental/intentional ingestion"],
          indianSpecific: ["Farmers should use ISI-marked pesticides and follow dosing instructions", "Mental health support critical in rural areas — easy access to pesticides increases suicide risk in domestic disputes"],
        },
        followUp: {
          when: "Daily for first week, then weekly for 1 month (if survives acute phase)",
          what: ["Repeat cholinesterase levels until normalized", "Monitor for intermediate syndrome (develops 24-96 hours post-exposure) — respiratory failure from paralysis of proximal muscles", "Neuropsychological assessment — suicide attempt requires psychiatric care", "Police investigation for medicolegal purposes"],
        },
        referral: {
          needed: true,
          to: "ICU for mechanical ventilation and intensive monitoring. Psychiatry consult for suicidal ideation (post-recovery). Toxicology specialist via NCCR.",
          urgency: "IMMEDIATE — respiratory failure imminent with current SpO2 82% and RR 32",
        },
      },
      redFlags: [
        { flag: "SpO2 <80 or RR >35 with increased work of breathing", action: "Intubate immediately — respiratory failure from bronchospasm, pulmonary edema, and muscle paralysis", urgency: "IMMEDIATE" },
        { flag: "Intermediate Syndrome (appears 24-96 hours post-ingestion)", action: "Paralysis of proximal muscles, neck flexors, and respiratory muscles despite resolved acute phase. No specific treatment — requires mechanical ventilation", urgency: "URGENT" },
        { flag: "Atropine-resistant bradycardia (<40 with hypotension)", action: "Suggests nicotinic excess unresponsive to atropine. Increase pralidoxime dose. Consider pacing.", urgency: "URGENT" },
        { flag: "Seizures refractory to benzodiazepines", action: "Indicates severe hypoxia or electrolyte derangement. Check ABG, glucose, K+. Add phenytoin or propofol infusion.", urgency: "URGENT" },
        { flag: "Oliguria with rising creatinine and dark myoglobinuria", action: "Acute tubular necrosis (ATN) from rhabdomyolysis. Aggressive fluids + sodium bicarbonate. May need dialysis.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "SLUDGE mnemonic: Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis — all from acetylcholine excess",
        "Atropine treats MUSCARINIC effects only (bradycardia, bronchospasm, miosis, salivation, GI symptoms). Pralidoxime treats BOTH muscarinic AND nicotinic effects.",
        "Pralidoxime (2-PAM) reactivates acetylcholinesterase by removing phosphate group — must be given within 24-48 hours. After 'aging' of enzyme, pralidoxime becomes ineffective.",
        "Intermediate syndrome: develops 24-96 hours post-exposure, presents with proximal muscle weakness and respiratory failure despite initial recovery. Different from delayed polyneuropathy (OP compounds damage long nerve axons).",
        "Myoglobinuria from fasciculations → rhabdomyolysis → risk of acute tubular necrosis (ATN) and AKI. Prevent by maintaining urine output >200 mL/hr and urine pH >6.5.",
        "Cholinesterase levels confirm OP toxicity: >20% depression = mild, 20-50% = moderate, >50% = severe. Used to gauge severity and guide duration of treatment.",
        "Medicolegal aspects: Document exact ingestion time, substance name, amount, suicide note, family witnesses, mental state — all crucial for forensic investigation.",
      ],
      commonMistakes: [
        "Giving pralidoxime in CARBAMATE poisoning — contraindicated as can worsen toxicity. Only for organophosphates.",
        "Under-treating with atropine — may need 50-100mg total in severe OP poisoning. Titrate to endpoint of dry secretions and HR >60.",
        "Overlooking intermediate syndrome — appears after initial recovery (24-96 hours), presents as respiratory failure requiring re-intubation.",
        "Not maintaining aggressive urine output in rhabdo — results in acute kidney injury. Keep urine output >200 mL/hr.",
        "Delaying pralidoxime while waiting for cholinesterase confirmation — give pralidoxime on clinical suspicion of OP poisoning, don't wait for lab results.",
        "Failing to document medicolegal evidence — suicide note, bottle, scene investigation all critical for police and legal proceedings.",
        "Forgetting psychiatric referral post-recovery — suicide attempt requires mental health evaluation and counseling before discharge.",
      ],
      relevantHistoryQs: ["onset", "substance", "amount", "timeline", "suicidal_intent", "marital_stress", "mental_health", "social_support", "farm_pesticide_access"],
      relevantExamIds: ["consciousness", "pupils", "heart_sounds", "respiratory_rate", "salivation", "fasciculations", "muscle_tone", "bowel_sounds", "incontinence"],
      difficulty: "HARD",
      estimatedMinutes: 22,
      subjectTags: ["FM", "TOX"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "FM1.3",
      maxScore: 100,
      passingScore: 60,
    },
  },
];

export const communityMedicineScenarios = [
  // ─── 1. Cholera Outbreak in a Village ────────────────────────────────────
  {
    topicCode: "CM-MOD-01-TOP-01",
    scenario: {
      patientIndex: "Male, 45 years old (primary case for 'patient' context)",
      patientOccupation: "Farmer",
      patientLocation: "Banasthali village, West Bengal (population ~5000, rural area)",
      chiefComplaint: "Sudden onset severe diarrhea and vomiting for 8 hours; 8 other villagers with similar symptoms in past 24 hours",
      historyOfPresent: `
OUTBREAK CONTEXT (CM perspective, not individual patient):
- Timeline: First case reported 24 hours ago. Now 9 suspected cases in village.
- Primary case: 45-year-old male farmer, sudden onset watery diarrhea and vomiting
- Secondary cases: Family members of index case (wife, 2 children), neighbors who shared food, water sources
- Symptom cluster: ALL cases present with acute watery diarrhea (rice-water stools), vomiting, dehydration
- Severity: Mild to moderate dehydration in most cases; one case (10-year-old child) showing signs of severe dehydration (sunken eyes, lethargy)

INDIVIDUAL PATIENT (Index case — 45yo male):
- Onset: Acute onset at 8 PM yesterday, sleeping when symptoms began
- Character: Profuse watery diarrhea (rice-water stools), non-bloody. Passed 15+ stools in 8 hours
- Vomiting: 4-5 episodes of clear/greenish liquid, non-bloody
- Associated: Severe cramping abdominal pain, muscle cramps (from electrolyte loss)
- No fever (temperature 37°C)
- Fluid intake: Has been taking ORS (oral rehydration solution) since symptoms but inadequate for losses
      `.trim(),
      epidemiologicalClues: "All 9 cases clustered in one block of village. Common exposure: All attended community feast 36 hours ago at local school. Water source for feast: Village hand pump (near open defecation area, recently discovered cracks in underground pipe). Food: Fish curry (possibly stored at room temperature after cooking). No proper food hygiene practices at feast.",
      pastHistory: "No significant past illness in index case. No previous cholera. No chronic diarrhea.",
      familyHistory: "Wife (40yo) and two children (8yo, 12yo) both with similar symptoms within 12 hours of index case.",
      socialHistory: "Lives in joint family. Works as farmer. No drinking water treatment at home (direct hand pump water). Open defecation practiced in village (no latrines). Basic education.",
      drugHistory: "None. No allergies.",
      vitals: { pulse: 110, bp: "90/60", temp: 37.0, rr: 18, spo2: 98 },
      generalExam: `
- General appearance: Acutely ill, lethargic, dehydrated, anxious about fluid losses
- Pallor: Marked pallor (from hypovolemia)
- Skin turgor: Pinched skin returns slowly (>2 seconds) — sign of dehydration
- Mucous membranes: Dry
- Eyes: Sunken (mild-moderate dehydration)
- Icterus: Absent
- Cyanosis: Absent
- Peripheral pulses: Weak, thready (shock state from massive fluid loss)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Tachycardia, difficult to palpate due to shock",
          heart_sounds: "S1 S2 audible but faint. Tachycardia at 110 bpm. No murmurs.",
          blood_pressure: "90/60 mmHg — HYPOTENSIVE (shock from diarrheal losses)",
          peripheral_pulses: "Weak, thready. Radial pulse barely palpable (capillary refill >2 seconds)",
        },
        respiratory: {
          chest_inspection: "Normal chest movements. Slightly tachypneic (RR 18)",
          auscultation_lungs: "Clear bilateral air entry",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft, slightly distended",
          palpation_superficial: "Tenderness over epigastrium and periumbilical region",
          palpation_deep: "No organomegaly. No rebound tenderness (no peritonitis).",
          bowel_sounds: "Hyperactive, high-pitched borborygmi (diarrheal intestines)",
          rectal_exam: "Anal fissures from frequent diarrhea. Stool: Liquid, watery, non-bloody",
        },
        neurological: {
          consciousness: "GCS 15/15 but lethargic (from dehydration), oriented",
          reflexes: "Normal",
          plantar: "Flexor bilaterally",
        },
      },
      availableInvestigations: [
        { id: "stool_culture", name: "Stool Culture (on TCBS medium)", cost: 400, turnaround: "48-72 hours", category: "Microbiology", result: "PENDING (will grow Vibrio cholerae — golden-yellow colonies on TCBS)", isAbnormal: true, interpretation: "Gold standard for cholera diagnosis. Vibrio cholerae will be isolated from multiple cases confirming outbreak.", isEssential: true },
        { id: "stool_gram", name: "Stool Gram Stain", cost: 100, turnaround: "30 min", category: "Microbiology", result: "Gram-negative curved rods (comma-shaped bacilli), motile, no WBCs or RBCs in stool", isAbnormal: true, interpretation: "Consistent with vibrio species. Absence of WBCs helps rule out invasive bacterial diarrhea (Shigella, Salmonella). PCR testing can identify as V. cholerae quickly (2-4 hours).", isEssential: true },
        { id: "rapid_pcr", name: "PCR for Vibrio cholerae (CTX or ToxR gene)", cost: 1000, turnaround: "2-4 hours", category: "Microbiology", result: "POSITIVE for ctxA gene (cholera toxin gene)", isAbnormal: true, interpretation: "Confirms V. cholerae producing cholera toxin. Rapid confirmatory test — allows outbreak declaration within hours rather than waiting 48-72 hours for culture.", isEssential: true },
        { id: "electrolytes", name: "Serum Electrolytes (Na, K, Cl, HCO3)", cost: 250, turnaround: "1 hour", category: "Chemistry", result: "Na: 125 mEq/L (low — hyponatremia from fluid losses), K: 2.8 mEq/L (CRITICAL hypokalemia from diarrheal losses), Cl: 88 mEq/L (hypochloremia), HCO3: 12 mEq/L (metabolic acidosis)", isAbnormal: true, interpretation: "Electrolyte derangements from massive diarrheal losses. Hypokalemia <3.0 is dangerous — risk of cardiac arrhythmias and paralysis. Metabolic acidosis from loss of bicarbonate.", isEssential: true },
        { id: "glucose", name: "Blood Glucose", cost: 100, turnaround: "10 min", category: "Chemistry", result: "Glucose: 92 mg/dL (normal)", isAbnormal: false, interpretation: "Normal glucose helps identify this as diarrheal disease (not septic shock from other pathogens where glucose would be elevated from stress)", isEssential: false },
        { id: "rft", name: "Renal Function Test", cost: 300, turnaround: "1 hour", category: "Chemistry", result: "Urea: 58 mg/dL (elevated from dehydration/prerenal azotemia), Creatinine: 1.6 mg/dL (elevated from acute kidney injury secondary to shock)", isAbnormal: true, interpretation: "Elevated urea:creatinine ratio (58:1.6 = 36) suggests prerenal azotemia (shock-induced kidney hypoperfusion) rather than intrinsic renal disease. Will improve with fluid resuscitation.", isEssential: true },
        { id: "cbc", name: "Complete Blood Count", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 15.2 g/dL (ELEVATED from hemoconcentration due to fluid loss), WBC: 11,200/μL (mild leukocytosis from stress), Platelets: 2.0 lakhs", isAbnormal: true, interpretation: "Elevated Hb from hemoconcentration (relative increase from plasma loss). Will normalize with fluid resuscitation. No thrombocytopenia (rules out dengue/malaria).", isEssential: false },
        { id: "blood_culture", name: "Blood Culture (aerobic/anaerobic)", cost: 600, turnaround: "24-48 hours", category: "Microbiology", result: "NEGATIVE (no bacteremia expected in uncomplicated cholera)", isAbnormal: false, interpretation: "Negative blood culture helps rule out invasive bacterial infection (septicemia). Cholera is purely secretory diarrhea without mucosal invasion.", isEssential: false },
        { id: "abdominal_ultrasound", name: "Abdominal Ultrasound", cost: 1000, turnaround: "30 min", category: "Imaging", result: "Dilated small bowel loops with fluid levels. No free fluid, no inflammatory changes. Normal appendix and gallbladder.", isAbnormal: true, interpretation: "Findings consistent with secretory diarrhea. Helps rule out surgical abdomen (appendicitis, obstruction, perforation).", isEssential: false },
        { id: "urine_specific_gravity", name: "Urine Specific Gravity", cost: 50, turnaround: "5 min", category: "Urine", result: "Specific gravity: 1.040 (elevated — normal 1.010-1.025)", isAbnormal: true, interpretation: "Indicates concentrated urine from severe dehydration. Goal of treatment is to normalize specific gravity by rehydration.", isEssential: false },
      ],
      correctDiagnosis: "Cholera (Vibrio cholerae infection) — Acute Secretory Diarrhea in context of village outbreak",
      differentials: [
        { diagnosis: "Enterotoxigenic E. coli (ETEC) Diarrhea", likelihood: "MEDIUM", reasoning: "Also causes watery diarrhea and acute dehydration. Stool culture will differentiate. ETEC is more common in travelers; cholera clusters more in endemic areas/after water contamination." },
        { diagnosis: "Rotavirus Gastroenteritis", likelihood: "LOW", reasoning: "Rotavirus causes diarrhea + vomiting but usually has fever and involves children predominantly. Adults affected less. PCR/culture will differentiate." },
        { diagnosis: "Shigellosis (Bacterial Dysentery)", likelihood: "LOW", reasoning: "Shigella causes bloody diarrhea with WBCs in stool. Our patient has non-bloody stools, no WBCs on gram stain. Culture will confirm." },
        { diagnosis: "Giardiasis", likelihood: "LOW", reasoning: "Giardia causes greasy diarrhea with bloating. Acute presentation less common than chronic. Stool microscopy would show trophozoites/cysts." },
      ],
      diagnosticReasoning: "Outbreak investigation reveals cluster of 9 cases in small village with common exposure (community feast 36 hours ago, same water source with recent pipe damage near open defecation area). Index case: 45-year-old with acute onset massive watery diarrhea (rice-water stools), vomiting, severe dehydration (hypotension 90/60, tachycardia 110, weak pulses, sunken eyes). Key finding: Stool gram stain shows gram-negative curved rods without WBCs/RBCs. PCR positive for ctxA (cholera toxin gene). Electrolyte abnormalities: Hyponatremia, critical hypokalemia, metabolic acidosis. Hb elevated from hemoconcentration. Pattern of rapid onset, profuse secretory diarrhea (no blood), lack of fever, and epidemiological cluster all point to cholera. This is a PUBLIC HEALTH EMERGENCY requiring outbreak response.",
      managementPlan: {
        immediateActions: [
          { action: "Establish IV access (2x large-bore cannulae) for fluid resuscitation", reasoning: "Patient is in hypovolemic shock (BP 90/60, pulse 110, weak pulses, sunken eyes). Requires urgent IV rehydration. Oral rehydration insufficient if severe dehydration.", priority: "STAT" },
          { action: "Start IV fluid resuscitation with Ringer's Lactate or Normal Saline", reasoning: "Restore circulating volume. In first 4-6 hours: give volume equivalent to 50-100% of fluid deficit (5-10mL/kg/hr). Severe cases may need 1-1.5L/hr initially.", priority: "STAT" },
          { action: "Oral Rehydration Solution (ORS) once patient can tolerate (BP stable)", reasoning: "Gold standard for diarrhea management. WHO/UNICEF ORS: sodium 75 mmol/L, glucose 75 mmol/L, total osmolarity 245 mOsm/L. Absorbed through sodium-glucose co-transport.", priority: "STAT" },
          { action: "Electrolyte replacement — specifically potassium", reasoning: "Serum K+ is critically low (2.8 mEq/L). Risk of fatal arrhythmias, paralysis. Give 20 mEq KCl in 1L IV fluid once urine output confirmed.", priority: "STAT" },
          { action: "Monitor urine output — catheterize if needed to assess renal perfusion", reasoning: "Goal: >0.5 mL/kg/hr indicates adequate renal perfusion. In shock states, oliguria is expected until rehydration.", priority: "URGENT" },
          { action: "Notify public health authorities + District Disease Surveillance Unit", reasoning: "Cholera is a notifiable disease in India. Outbreak requires declaration, investigation, and containment measures (quarantine, water testing, contact tracing).", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Oral Rehydration Solution (ORS)", examples: ["WHO-UNICEF ORS: sachets containing sodium chloride 2.6g, potassium chloride 1.5g, glucose anhydrous 13.5g per liter", "Available as commercial packets (SBL, Abbott, Cipla brands)", "Prepare fresh daily"], route: "Oral", duration: "Throughout diarrheal phase (days 3-5)", reasoning: "ORS is lifesaving in diarrheal diseases. 1:1 replacement of stool losses with ORS is gold standard. Mother can prepare at home. Contains correct sodium:glucose ratio for active absorption.", contraindications: ["Severe vomiting (may need IV initially)", "Ileus (very rare in cholera)"], indianContext: "WHO ORS sachets available at Jan Aushadhi stores at ₹2-5 per sachet. Homemade salt-sugar solution: 6 teaspoons sugar + 0.5 teaspoon salt + 1L boiled water (less effective but accessible)." },
          { drugClass: "IV Fluid (Crystalloid)", examples: ["Ringer's Lactate 1-2L IV bolus over 1-2 hours", "Normal Saline as alternative", "Maintenance: 50-100 mL/kg to replace deficit over 4-6 hours"], route: "IV", duration: "First 24-48 hours until BP stable and urine output adequate", reasoning: "Restores intravascular volume. Ringer's lactate is preferred (contains potassium and lactate which is converted to bicarbonate). Prevents hypovolemic shock and end-organ damage.", contraindications: ["Pulmonary edema (rare in cholera)"], indianContext: "1L Ringer's Lactate bag costs ₹30-50 in India. Available at all hospitals." },
          { drugClass: "Potassium Replacement", examples: ["Add 20 mEq (1500mg) KCl to 1L IV fluid", "Or oral potassium: Potassium chloride elixir 20 mEq in ORS", "Dose: 20-40 mEq/liter of stool losses"], route: "IV or Oral (once urine output confirmed)", duration: "Throughout rehydration and diarrheal phase", reasoning: "Cholera causes massive potassium losses in stool (20-40 mEq/liter). Hypokalemia <3 is dangerous. Replacement is CRITICAL to prevent arrhythmias. Never give K+ until urine output confirmed (risk of fatal hyperkalemia).", contraindications: ["Oliguric renal failure (verify urine output first)", "Hyperkalemia"], indianContext: "Potassium chloride ampoules 20 mEq/20mL available at ₹10-20 each." },
          { drugClass: "Antibiotic (for cholera)", examples: ["Doxycycline 300mg as single dose (good in endemic areas)", "Or Azithromycin 500mg OD for 3 days (better for pregnant women, children)", "Or Ciprofloxacin 500mg BD for 3 days (if fluoroquinolone-susceptible strain)"], route: "Oral", duration: "Single dose (doxycycline) or 3 days (other options)", reasoning: "Reduces stool volume by 50% and duration of diarrhea by 1-2 days. Kills V. cholerae in intestine. NOT life-saving in cholera (rehydration is) but speeds recovery. Prevents transmission. Current consensus: single-dose doxycycline is sufficient for most strains.", contraindications: ["Pregnancy (doxycycline) — use azithromycin instead", "Tendon disorders (fluoroquinolones)"], indianContext: "Doxycycline 100mg tablets at ₹1-2 per tablet. Jan Aushadhi options available. Azithromycin 500mg at ₹5-10." },
          { drugClass: "Zinc Supplementation", examples: ["Zinc sulfate 20mg OD for 10-14 days (adults)", "Zinc gluconate 10mg OD (children <6 months)"], route: "Oral", duration: "10-14 days post-diarrhea onset", reasoning: "WHO recommendation: Zinc supplementation during diarrhea reduces duration and severity of current episode and prevents recurrent diarrhea for 2-3 months. Improves immune function.", contraindications: ["None — very safe"], indianContext: "Zinc supplements available at Jan Aushadhi. Zinc dispersible tablets cost ₹2-5 per dose." },
        ],
        nonPharmacological: [
          { intervention: "Continue breastfeeding if mother has cholera", reasoning: "Breast milk provides hydration and immune protection (IgA) to infant. Mother's antibodies protect baby.", duration: "Throughout illness" },
          { intervention: "Early feeding (within 4-6 hours of rehydration)", reasoning: "Maintain nutrition. Cholera doesn't cause significant mucosal damage (unlike invasive pathogens). Early feeding shortens recovery. Bland food: Rice, banana, yogurt.", duration: "Once vomiting controlled" },
          { intervention: "Strict hygiene measures at household level", reasoning: "Prevent secondary transmission to family members. Hand washing after defecation, before food. Separate toilet/latrine if available.", duration: "Until symptoms resolve and stool culture negative" },
        ],
        monitoring: [
          { parameter: "Urine output (hourly initially)", frequency: "Hourly for first 24 hours, then every 4 hours", target: ">0.5 mL/kg/hr indicates adequate renal perfusion", escalation: "Oliguria despite fluids — assess for complications (AKI, sepsis)" },
          { parameter: "Serum electrolytes (Na, K, Cl, HCO3)", frequency: "At 4-6 hours, then every 12 hours x 2-3 times", target: "K+ >3.5, Na+ 130-140, HCO3 >20", escalation: "Persisting hypokalemia — increase potassium replacement. Hyperkalemia (if given too much K+) — hold replacement and reassess." },
          { parameter: "Vital signs (BP, HR, temperature)", frequency: "Every 1-2 hours initially", target: "SBP >90, HR <100, normothermia", escalation: "Persistent hypotension — continue aggressive fluids. Tachycardia >120 — suggests inadequate rehydration." },
          { parameter: "Stool frequency and composition", frequency: "Record each diarrheal stool", target: "Decreasing frequency (indicates recovery). Non-bloody. 3-4 days to resolution typical.", escalation: "Increasing bloody diarrhea — rule out secondary bacterial infection or other pathology" },
          { parameter: "Stool culture results", frequency: "Once available (48-72 hours)", target: "V. cholerae isolated confirms diagnosis. Serotype and biotype documented. Antibiotic sensitivity determined.", escalation: "If MDR (multi-drug resistant) strain — adjust antibiotic therapy" },
        ],
        followUp: {
          when: "Post-discharge: 1 week, then 2 weeks, then monthly",
          what: ["Clinical assessment for full recovery", "Stool culture to confirm clearance (should be negative by day 7)", "Nutritional status assessment (weight, anthropometry)", "Assessment for persistent diarrhea (Post-Infectious IBS risk)"],
        },
        referral: {
          needed: true,
          to: "District Health Officer (notifiable disease). Water supply authorities for testing. District Disease Surveillance Unit for outbreak investigation. Pediatric cases or severe dehydration: Referral to tertiary hospital for ICU management.",
          urgency: "IMMEDIATE for outbreak notification. Ambulance transfer for severe cases (SBP <80, altered consciousness, severe dehydration).",
        },
      },
      publicHealthActions: {
        outbreak_response: [
          "Declare outbreak immediately to District Health Officer and National Communicable Disease Surveillance (IDSP)",
          "Isolate 5th case onwards to cholera ward or isolation area (droplet precautions, hand hygiene critical)",
          "Test suspected drinking water sources (TCBS culturing) — contaminated source likely the hand pump near open defecation",
          "Disinfect water supply: Shock chlorination or replacement of pipe until repair completed",
          "Contact tracing: Identify all people at community feast (36 hours before index case onset)",
          "Provide ORS packets and education to entire village on cholera transmission",
          "Vaccination: Oral cholera vaccine (Shanchol, mORCVAX) to contacts and high-risk groups if available",
          "Monitoring: Daily line list of suspected/confirmed cases. Case fatality rate tracking.",
          "Public education: Hand washing, food hygiene, safe water importance",
        ],
      },
      redFlags: [
        { flag: "Signs of severe dehydration: SBP <80, altered consciousness, weak peripheral pulses", action: "Rapid IV fluid resuscitation (1-1.5L/hour initially). ICU referral. Risk of hypovolemic shock and death.", urgency: "IMMEDIATE" },
        { flag: "Oliguria (<0.5 mL/kg/hr) despite adequate fluids", action: "Suggests acute kidney injury (AKI). Check serum creatinine/urea. May require dialysis if anuric.", urgency: "URGENT" },
        { flag: "Cardiac arrhythmias (palpitations, ECG changes)", action: "Check serum K+. Hypokalemia causes T-wave flattening, U waves, arrhythmias. Urgent potassium replacement. Monitor on ECG.", urgency: "URGENT" },
        { flag: "Bloody diarrhea (hemoccult positive) or abdominal rebound tenderness", action: "Rule out invasive pathogen or toxic megacolon (rare in cholera). Surgical abdomen evaluation needed.", urgency: "URGENT" },
        { flag: "Fever (cholera is non-febrile; fever suggests secondary infection)", action: "Blood culture, urine culture. Start empiric antibiotics (cephalosporin + fluoroquinolone) for gram-negative sepsis.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Cholera is 100% treatable with oral rehydration therapy alone (ORS) — oral-rehydration therapy (ORT) requires no antibiotics for survival",
        "Vibrio cholerae produces cholera toxin → ↑ cAMP → secretory diarrhea (no inflammation, no blood, no WBCs) distinguishing it from invasive pathogens",
        "Rice-water stools pathognomonic for cholera: clear, watery, 10-20L/day losses. Death from hypovolemic shock if untreated.",
        "Cholera is a water-related disease in India — endemic in Ganges delta (West Bengal, Bangladesh) and seasonal in pre-monsoon months",
        "ORS contains sodium 75 mmol/L and glucose 75 mmol/L to maximize intestinal absorption via sodium-glucose co-transporter (osmolarity 245 mOsm/L)",
        "Outbreak investigation: Look for common exposure 36-72 hours before index case (water source, food at events). Contaminated water usually culprit.",
        "Cholera vaccination (Shanchol, mORCVAX — oral) provides ~65% protection for 2-3 years. Indicated for endemic areas and post-outbreak prophylaxis.",
        "Post-cholera: Temporary disaccharidase deficiency (lactose intolerance) for weeks. Use lactose-free formulations during recovery.",
      ],
      commonMistakes: [
        "Over-treating with antibiotics when ORS rehydration is the mainstay — antibiotics reduce diarrhea duration but don't prevent death (only fluid does)",
        "Using normal saline instead of Ringer's lactate — Ringer's contains potassium and lactate (converted to bicarbonate) for better electrolyte correction",
        "Failing to replace potassium adequately — hypokalemia causes life-threatening arrhythmias. Never give K+ without confirming urine output.",
        "Not recognizing outbreak pattern — missing cluster diagnosis leads to delayed public health response and continued transmission",
        "Ignoring water contamination — not testing/disinfecting water source perpetuates outbreak. Environmental testing is key to breaking transmission",
        "Discharging patient without confirming microbiological cure — patient may remain infectious. Repeat stool culture at day 5 before discharge from isolation.",
        "Not offering vaccination to contacts and at-risk groups — preventive vaccination can stop outbreak spread",
      ],
      relevantHistoryQs: ["onset", "diarrhea_type", "stool_frequency", "vomiting", "fever_absence", "common_exposure", "water_source", "food_history", "travel_history"],
      relevantExamIds: ["dehydration_signs", "pulse", "blood_pressure", "skin_turgor", "mucous_membranes", "sunken_eyes", "stool_character", "abdominal_exam"],
      difficulty: "MODERATE",
      estimatedMinutes: 23,
      subjectTags: ["CM", "EP", "MI"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "CM4.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
