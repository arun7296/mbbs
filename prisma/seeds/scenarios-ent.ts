// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for ENT (EN)
// High-yield topics: Otology, Laryngology aligned with NMC CBME standards
// ---------------------------------------------------------------------------

export const entScenarios = [
  // ─── 1. Acute Otitis Media with Mastoiditis Complications ────────────────
  {
    topicCode: "EN-MOD-01-TOP-01",
    scenario: {
      patientAge: 6,
      patientSex: "Male",
      patientOccupation: "Student",
      patientLocation: "Indore, Madhya Pradesh",
      chiefComplaint: "Ear pain and pus discharge for 5 days with high fever",
      historyOfPresent: `
- Onset: Sudden onset 5 days ago with severe ear pain (otalgia) and fever
- Character: Throbbing, severe pain in right ear; pain increases at night
- Associated: Purulent (yellowish-green) ear discharge from right ear started day 3
- Fever: High grade 39.2°C, intermittent, not responding well to paracetamol
- Preceding upper respiratory infection: Had rhinorrhea and mild cough 1 week ago
- Associated: Right-sided hearing loss (mother noticed child not responding to sounds), mild vertigo (child says room spinning), loss of appetite
- No previous ear infections. No immunosuppression.
      `.trim(),
      pastHistory: "Recurrent upper respiratory tract infections (3-4 per year). Last URI 1 week ago — treated symptomatically at home. Born after full-term uncomplicated delivery. Fully immunized per IAP schedule.",
      familyHistory: "Father has conductive hearing loss (childhood untreated ASOM). Mother has hypothyroidism. No familial hearing loss or genetic syndromes.",
      socialHistory: "Lives in joint family home in Indore. Attends school with 40+ children per class. Frequent exposure to polluted air. Breast-fed till 18 months, then cow's milk.",
      drugHistory: "Took Paracetamol 125mg from mother — no relief. Mother self-instilled warm mustard oil in ear yesterday (traditional remedy). No other medications. No known drug allergies.",
      vitals: { pulse: 110, bp: "100/68", temp: 39.2, rr: 26, spo2: 97 },
      generalExam: `
- General appearance: Febrile, irritable, in discomfort, lying on left side (right ear down)
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema
- Ear discharge: Purulent discharge visible at right external auditory canal opening
- Postauricular swelling: Palpable swelling and redness behind right ear (mastoid area)
- Tenderness: Marked tenderness over postauricular area — child winces
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. Tachycardic at 110 bpm. No murmurs.",
          blood_pressure: "100/68 mmHg — normal for age",
        },
        respiratory: {
          chest_inspection: "Bilateral equal chest movements. No stridor.",
          auscultation_lungs: "Clear bilateral air entry. No added sounds. No evidence of pneumonia.",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended",
          palpation_superficial: "Soft, non-tender",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "Alert, irritable, oriented",
          cranial_nerves: "CN VII (facial) — no facial droop. CN VIII (vestibulocochlear) — horizontal nystagmus present (likely from vertigo). Rest of CNs grossly intact.",
          reflexes: "Normal and symmetrical",
          meningeal_signs: "Neck is supple — no meningismus. Kerning's and Brudzinski's negative.",
        },
      },
      availableInvestigations: [
        { id: "otoscopy", name: "Otoscopic Examination", cost: 0, turnaround: "Immediate", category: "Clinical", result: "Right TM: Bulging, dull, yellow/opaque, perforation site with purulent discharge. Left TM: Normal, translucent, light reflex intact. EAC shows debris and pus.", isAbnormal: true, interpretation: "Right acute suppurative otitis media with spontaneous perforation (pus draining). Left ear normal.", isEssential: true },
        { id: "audiometry", name: "Pure Tone Audiometry (Age-appropriate play audiometry)", cost: 800, turnaround: "30 min", category: "Otology", result: "Right ear: Conductive hearing loss (air-bone gap 35 dB) at 500-2000 Hz. Left ear: Normal. Type A tympanogram right ear (flat, no compliance).", isAbnormal: true, interpretation: "Conductive hearing loss from middle ear effusion/inflammation. Will resolve after treatment in majority.", isEssential: false },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 11.8 g/dL, WBC: 14,200/μL (neutrophilic leukocytosis), Platelets: 3.5 lakhs", isAbnormal: true, interpretation: "Leukocytosis with left shift — indicates acute bacterial infection and systemic response.", isEssential: true },
        { id: "ear_swab", name: "Ear Swab Culture & Sensitivity (from discharge)", cost: 400, turnaround: "48-72 hours", category: "Microbiology", result: "Culture: Streptococcus pneumoniae (Gram +ve diplococci). Sensitivity: Sensitive to Amoxicillin, Cephalosporin, resistant to Erythromycin. No growth of anaerobes.", isAbnormal: true, interpretation: "S. pneumoniae is most common cause of AOM in India. Guides antibiotic selection.", isEssential: true },
        { id: "hc_ct", name: "HRCT Temporal Bone (Thin slice, bilateral)", cost: 3500, turnaround: "1 hour", category: "Imaging", result: "Right mastoid: Mastoid air cells show fluid level, loss of pneumatization. Cortical thickening of mastoid bone (2.5mm). Subtle cortical breach area near tip. Left mastoid: Well pneumatized, normal.", isAbnormal: true, interpretation: "Acute mastoiditis with bone resorption — loss of normal mastoid pneumatization. Cortical breach raises concern for coalescent mastoiditis (pus tracking). Subperiosteal abscess likely.", isEssential: true },
        { id: "tympano", name: "Tympanometry", cost: 600, turnaround: "15 min", category: "Otology", result: "Right: Type B (flat — no compliance, high stiffness). Left: Type A (normal compliance).", isAbnormal: true, interpretation: "Type B confirms middle ear stiffness from fluid/pus. Expected in acute OM.", isEssential: false },
        { id: "c_reactive", name: "C-Reactive Protein (CRP)", cost: 250, turnaround: "30 min", category: "Immunology", result: "CRP: 48 mg/L (Normal: <10 mg/L)", isAbnormal: true, interpretation: "Markedly elevated — indicates significant acute bacterial inflammation. Helpful in assessing severity and response to treatment.", isEssential: false },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 26 mg/dL, Creatinine: 0.6 mg/dL, Na: 138 mEq/L, K: 4.1 mEq/L", isAbnormal: false, interpretation: "Normal renal function. Adequate hydration status.", isEssential: false },
        { id: "lft", name: "Liver Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "SGOT: 35 U/L, SGPT: 38 U/L, ALP: 95 U/L — all normal. Albumin: 3.9 g/dL", isAbnormal: false, interpretation: "Normal liver function. Safe for antibiotics.", isEssential: false },
      ],
      correctDiagnosis: "Acute Suppurative Otitis Media (Right ear) with Mastoiditis and Subperiosteal Abscess",
      differentials: [
        { diagnosis: "Acute Otitis Media without Mastoiditis", likelihood: "HIGH", reasoning: "Child has all features of AOM: otalgia, fever, otorrhea, bulging TM. But HRCT shows mastoid changes and cortical breach — hence mastoiditis is confirmed." },
        { diagnosis: "Otitis Externa (Swimmer's ear)", likelihood: "LOW", reasoning: "Otitis externa presents with tragal tenderness (pulling on pinna causes pain), which is absent. Clear history of otalgia during URI, not after water exposure. EAC inflammation is secondary to OM." },
        { diagnosis: "Mumps", likelihood: "LOW", reasoning: "Would present with parotitis (parotid swelling in front of ear), not retroauricular swelling. No prodrome of fever for days without otalgia." },
        { diagnosis: "Acute Mastoiditis without Perforation", likelihood: "LOW", reasoning: "Patient HAS perforation (spontaneous) with discharge. Mastoiditis present with cortical changes on imaging." },
      ],
      diagnosticReasoning: "6-year-old previously healthy child with acute onset severe otalgia and fever following URTI. Otoscopy shows right TM perforation with purulent discharge. CRITICAL FINDING: Postauricular swelling and tenderness. HRCT confirms mastoiditis with cortical bone loss and breach — consistent with coalescent mastoiditis with subperiosteal abscess. Cultures show S. pneumoniae. WBC and CRP elevated. This is a complication of untreated/inadequately treated AOM and requires urgent intervention. The spontaneous perforation actually represents a 'safety valve' — pus draining externally rather than tracking intracranially (which would risk meningitis/brain abscess) or posteriorly into neck tissues.",
      managementPlan: {
        immediateActions: [
          { action: "IV access and start IV fluids (Ringer's Lactate 20 mL/kg bolus)", reasoning: "Child is febrile, potentially dehydrated from poor oral intake. Ensures vascular access for IV antibiotics.", priority: "STAT" },
          { action: "Start broad-spectrum IV antibiotics immediately (do not wait for culture)", reasoning: "Acute mastoiditis with bone involvement is surgical emergency. Empirical coverage for S. pneumoniae, H. influenzae, M. catarrhalis.", priority: "STAT" },
          { action: "Aural toilet: Gentle cleaning of ear canal to remove pus and discharge", reasoning: "Improves visualization of TM, reduces bacterial load, allows better antibiotic penetration. Wet swab gently under otoscope guidance.", priority: "URGENT" },
          { action: "Notify ENT surgeon — likely needs emergency myringotomy and mastoidectomy", reasoning: "Cortical breach suggests subperiosteal abscess. Risk of further complications (meningitis, sigmoid sinus thrombosis, facial paralysis). May need incision and drainage.", priority: "STAT" },
          { action: "Antipyretics and analgesia: Paracetamol + Ibuprofen (avoid aspirin)", reasoning: "Child in severe pain. Fever control improves comfort.", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Beta-lactam Antibiotic (First-line)", examples: ["Ceftriaxone 50-80 mg/kg/day IV BD (Max 2g BD)", "Cefotaxime 50mg/kg IV TDS"], route: "IV", duration: "14-21 days (IV initially, switch to oral for total 3-4 weeks)", reasoning: "Covers S. pneumoniae and H. influenzae. Excellent middle ear penetration. Cephalosporins preferred over Amoxicillin if suspect penicillin-resistant organisms.", contraindications: ["Beta-lactam allergy"], indianContext: "Ceftriaxone 1g vial ₹20-30 in government hospitals, ₹60-80 in private. Jan Aushadhi available." },
          { drugClass: "Fluoroquinolone (Topical ear drops)", examples: ["Ofloxacin 0.3% ear drops, 5 drops TDS", "Ciprofloxacin 0.3% ear drops"], route: "Topical (ear)", duration: "7-10 days after cleaning", reasoning: "Eliminates bacteria in EAC and OME. Penetrates through perforation into middle ear.", contraindications: ["Allergy to quinolones"], indianContext: "Ofloxacin 10mL at ₹25-40 per bottle, available in Jan Aushadhi." },
          { drugClass: "Analgesic (Systemic)", examples: ["Paracetamol 15 mg/kg/dose Q6H (Max 60mg/kg/day)", "Ibuprofen 10 mg/kg/dose Q6-8H (Max 40mg/kg/day)"], route: "Oral/IV", duration: "7-10 days or as needed", reasoning: "Controls severe otalgia. Ibuprofen also has anti-inflammatory effect.", contraindications: ["Hepatic disease", "Aspirin sensitivity"], indianContext: "Paracetamol syrup 125mg/5mL at ₹15-20 per bottle." },
          { drugClass: "Decongestant (Nasal)", examples: ["Xylometazoline nasal spray 0.05% (NOT for children <6 years typically, but here 6yo)", "Saline nasal drops (safer alternative)"], route: "Intranasal", duration: "5-7 days", reasoning: "Reduces Eustachian tube obstruction. Helps middle ear drainage. Saline is safer in children.", contraindications: ["Prolonged use >7 days"], indianContext: "Normal saline nasal drops available in Jan Aushadhi at ₹5-10." },
        ],
        nonPharmacological: [
          { intervention: "Keep child in semi-recumbent position (head of bed 30°)", reasoning: "Facilitates gravitational drainage of ear discharge. Reduces pain from increased intratympanic pressure.", duration: "Until discharge decreases significantly" },
          { intervention: "Regular aural toilet — gentle cleaning of EAC with dry sterile cotton", reasoning: "Removes infected debris. Improves antibiotic penetration. Reduces risk of otitis externa.", frequency: "Daily or BD as needed" },
          { intervention: "Restrict water entry into ear during bathing", reasoning: "Prevents bacterial contamination and worsening infection. Use cotton ball loosely in EAC during bath.", duration: "Until perforation heals (4-6 weeks)" },
          { intervention: "Adequate sleep and rest", reasoning: "Supports immune system recovery from acute infection", duration: "During active infection" },
        ],
        monitoring: [
          { parameter: "Aural discharge — daily observation", frequency: "Daily", target: "Decrease in quantity, change from purulent to serous", escalation: "Persistence of copious pus despite antibiotics → likely need for myringotomy/mastoid drainage" },
          { parameter: "Body temperature", frequency: "4-6 hourly", target: "Defervescence by day 3-4 of antibiotics", escalation: "Persistent fever day 5+ → check for inadequate source control (need for surgical intervention)" },
          { parameter: "Postauricular swelling and tenderness", frequency: "Daily", target: "Resolution over 5-7 days", escalation: "Worsening swelling → may indicate enlarging abscess (needs I&D)" },
          { parameter: "Facial nerve status", frequency: "Daily", target: "No facial weakness", escalation: "New facial droop → facial nerve palsy from inflammation/infection (neurosurgical consultation)" },
          { parameter: "Neck stiffness and meningeal signs", frequency: "Daily", target: "Remain negative", escalation: "New meningeal signs → likely meningitis (needs CT brain, LP, intensified care)" },
        ],
        lifestyle: {
          dos: ["Continue antibiotics for FULL duration even if feeling better", "Nutritious diet to support immune recovery", "Regular follow-up with ENT (1 week, then 6 weeks)", "Hearing assessment after 3 months of treatment"],
          donts: ["No water/fluids in ears until perforation heals", "Avoid loud noises which can worsen tinnitus", "Do not attempt to clean ears with objects — use sterile swabs only", "No swimming or bathing with head submerged for 6 weeks"],
          indianSpecific: ["Avoid grandmother's home remedies like mustard oil, neem oil — can worsen infection if unsterilized", "Ensure full vaccination — particularly pneumococcal vaccine for ongoing protection", "Air quality: Use air purifier at home in Indore during pollution season (May-June, Oct-Nov)", "Ensure well-ventilated classroom — ask school to improve air circulation"],
        },
        followUp: {
          when: "1 week (before stopping IV antibiotics), 3 weeks (end of oral antibiotics), 6 weeks (TM healing status), 3 months (hearing assessment)",
          what: ["Otoscopic exam for TM perforation healing", "Repeat audiometry at 3 months (should show resolution of conductive loss)", "Check for any residual discharge", "Assess need for tymplasty if perforation doesn't heal spontaneously (usually heals in 4-6 weeks)"],
        },
        referral: {
          needed: true,
          to: "ENT Surgeon (pediatric preferred) / Tertiary center with mastoid surgery capability",
          urgency: "IMMEDIATE — same day if possible. This is a surgical emergency with risk of meningitis, facial paralysis, sinus thrombosis.",
        },
      },
      redFlags: [
        { flag: "Postauricular swelling + fever + otalgia", action: "Mastoiditis until proven otherwise. Obtain HRCT urgently. Notify ENT surgeon immediately.", urgency: "IMMEDIATE" },
        { flag: "New facial nerve weakness (facial droop)", action: "Facial nerve compression from abscess/inflammation. May need urgent decompression/drainage. Urgent ENT eval.", urgency: "IMMEDIATE" },
        { flag: "Neck stiffness with postauricular swelling", action: "Risk of meningitis OR abscess extension to neck. Obtain CT brain, blood cultures, consider LP. Infectious disease consult.", urgency: "IMMEDIATE" },
        { flag: "Severe persistent headache with otalgia", action: "May indicate intracranial extension or meningitis. CT brain urgently, fundoscopy for papilledema.", urgency: "IMMEDIATE" },
        { flag: "Persistent fever >39°C despite IV antibiotics day 3", action: "Inadequate source control. Likely needs myringotomy and/or mastoid drainage. Escalate to ENT surgeon.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Mastoiditis is a complication of inadequately treated acute otitis media — always look for postauricular swelling in children with AOM",
        "Spontaneous TM perforation with drainage is actually beneficial (safety valve) — it drains pus externally rather than allowing intracranial/neck spread",
        "HRCT is essential in suspected mastoiditis to assess for bone erosion and cortical breach — these determine need for surgery",
        "Coalescent mastoiditis (with cortical breach) is a surgical emergency — empirical broad-spectrum IV antibiotics + ENT surgery often needed",
        "S. pneumoniae and H. influenzae are most common causative organisms in India — Cephalosporin preferred for good tissue penetration",
        "Subperiosteal abscess can extend to neck (Bezold's abscess) or intracranially (Gradenigo syndrome) — watch for neurological symptoms",
        "Hearing loss in AOM is usually conductive and temporary — resolves with treatment in most children",
        "Complete vaccination (pneumococcal, Hib) reduces incidence of severe AOM and mastoiditis",
      ],
      commonMistakes: [
        "Treating AOM as simple infection and missing mastoiditis — always examine postauricular area",
        "Delayed imaging in presence of postauricular swelling — HRCT should be done urgently, not waiting for clinical response to antibiotics",
        "Using topical antibiotics alone without systemic antibiotics in mastoiditis — mastoiditis is systemic infection requiring IV drugs",
        "Discharging child from hospital too early — needs at least 48-72 hours of IV antibiotics before transitioning to oral",
        "Not involving ENT surgeon when cortical breach is found on HRCT — this warrants surgical consultation",
        "Assuming perforation requires tubes — most spontaneous perforations heal naturally without myringotomy",
        "Not counseling on full antibiotic course — parents may stop antibiotics when fever resolves, leading to relapse or chronic OM",
      ],
      relevantHistoryQs: ["onset", "character", "severity", "discharge_type", "fever_pattern", "associated_symptoms", "previous_ear_infections", "immunization_status", "environmental_exposures", "preceding_URTI"],
      relevantExamIds: ["otoscopy", "postauricular_exam", "facial_nerve_exam", "neck_exam", "meningeal_signs", "hearing_screening"],
      difficulty: "MODERATE-HIGH",
      estimatedMinutes: 25,
      subjectTags: ["EN", "PH"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "EN1.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 2. Carcinoma Larynx (Hoarseness and Dysphagia) ───────────────────────
  {
    topicCode: "EN-MOD-02-TOP-01",
    scenario: {
      patientAge: 58,
      patientSex: "Male",
      patientOccupation: "Factory supervisor (retired 1 year ago)",
      patientLocation: "Kolkata, West Bengal",
      chiefComplaint: "Hoarseness of voice for 3 months and difficulty swallowing for 2 months",
      historyOfPresent: `
- Onset: Gradual onset 3 months ago with progressive hoarseness of voice
- Character: Voice becomes rough, breathy, sometimes loses voice completely (aphonia)
- Progression: Initially hoarseness worse in mornings, improved with rest. Now persistent throughout day despite rest.
- Associated: Difficulty swallowing (dysphagia) started 2 months ago — especially painful when swallowing hard food (solids>liquids)
- Throat pain (odynophagia): Present on swallowing, feels like raw throat
- Weight loss: Unintentional loss of 8 kg in past 3 months (from 72kg to 64kg)
- Cough: Persistent dry cough for 2 months, not responding to cough syrups
- Associated: Throat clearing discomfort, feels like lump in throat
- Denied: No hemoptysis, no respiratory stridor at rest, no fever
      `.trim(),
      pastHistory: "Known hypertension on Amlodipine 5mg daily (BP controlled). No diabetes. No thyroid disease. No previous throat surgery. GERD symptoms in past (heartburn) — took occasional antacids, not on regular treatment.",
      familyHistory: "Father died of lung cancer at age 65. Mother has hypothyroidism. Brother has hypertension. No familial head and neck cancers.",
      socialHistory: "Heavy smoker — 1.5 packs/day for 35 years (53 pack-years). Heavy alcohol consumption — 120 mL of whisky daily for 30 years. Chewed tobacco and pan with lime (supari) for 20 years, quit 5 years ago. Works in textile factory for 30 years — exposed to dust, chemicals, dyes.",
      drugHistory: "Amlodipine 5mg daily. Omeprazole 20mg occasionally for GERD (not regular). No other medications. No known drug allergies.",
      vitals: { pulse: 82, bp: "148/92", temp: 37.2, rr: 18, spo2: 96 },
      generalExam: `
- General appearance: Cachectic (wasted), looks older than stated age, sitting forward slightly (anxious)
- Pallor: Mild pallor present
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent (notably — makes fungal/TB less likely)
- Edema: No pedal edema
- Lymph nodes: Palpable firm left upper cervical lymph nodes (2×2 cm, mobile, slightly tender). Right cervical nodes not prominent.
- Weight: 64 kg (stated usual 72 kg)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. Regular rate and rhythm. No murmurs.",
          blood_pressure: "148/92 mmHg — mildly elevated, consistent with his HTN history",
          peripheral_pulses: "All peripheral pulses palpable, equal, good volume",
        },
        respiratory: {
          chest_inspection: "Equal bilateral chest movements. No stridor at rest.",
          trachea: "Trachea central",
          auscultation_lungs: "Clear bilateral air entry. No added sounds. No evidence of lung metastasis or consolidation.",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended. No visible masses or scars.",
          palpation_superficial: "Soft, non-tender",
          liver_palpation: "Liver not palpable — (palpable would suggest metastasis)",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "Alert, oriented, slightly anxious",
          cranial_nerves: "CN X (Vagus) and CN XII (Hypoglossal) assessment: Hoarse voice noted (CN X). Tongue midline, full strength (CN XII intact). CN IX intact (gag reflex present). CN XI trapezius strength normal. Other CNs grossly intact.",
          reflexes: "Normal and symmetrical",
          plantar: "Flexor bilaterally",
        },
      },
      availableInvestigations: [
        { id: "indirect_laryngo", name: "Indirect Laryngoscopy / Mirror Exam", cost: 0, turnaround: "Immediate", category: "Clinical", result: "Left vocal cord: Irregular, hyperemic, non-mobile mass at anterior-middle third. Mass appears friable, bleeds on contact with instrument. Right vocal cord: Appears normal, mobile.", isAbnormal: true, interpretation: "LEFT-SIDED VOCAL CORD MASS — consistent with laryngeal carcinoma. Non-mobility (fixation) suggests involvement of intrinsic muscles/cricoarytenoid joint. Bleeding on contact (friable) indicates malignancy.", isEssential: true },
        { id: "flexible_laryngo", name: "Flexible Fiberoptic Laryngoscopy", cost: 2000, turnaround: "30 min", category: "ENT-Imaging", result: "Confirms left vocal cord mass (3×2cm), irregular margins, non-mobile. No involvement of false vocal cords or anterior commissure. Posterior larynx normal. Arytenoid region clear. No subglottic extension visible.", isAbnormal: true, interpretation: "Helps determine extent of lesion — appears to involve true vocal cord only, not extending to arytenoid or subglottis. Mobility assessment better than mirror laryngoscopy.", isEssential: true },
        { id: "laryngeal_biopsy", name: "Laryngeal Biopsy (under indirect laryngoscopy)", cost: 1500, turnaround: "5 days", category: "Pathology", result: "Histology: Moderately differentiated squamous cell carcinoma (SCC). Infiltrating neoplasm with keratinization, prominent nucleoli. HPV status: Negative. p16 status: Negative.", isAbnormal: true, interpretation: "CONFIRMED: Laryngeal SCC, moderately differentiated. HPV-negative suggests smoking/alcohol related (rather than HPV-related). Moderate differentiation has intermediate prognosis.", isEssential: true },
        { id: "ct_larynx_neck", name: "CT Larynx and Neck (with IV Contrast, thin slices)", cost: 4500, turnaround: "1 hour", category: "Imaging", result: "Left vocal cord: Enhancing mass 3.2×2.1cm. Involves left vocal cord, anterior commissure spared (critical). Cricoarytenoid joint shows sclerosis but no dislocation. Left paraglottic space: Minimal fat stranding. Pyriform sinus: Spared. Subglottic extension: None. Left upper cervical lymph nodes: Enlarged (2cm), speckled attenuation (likely metastatic). Right neck: No significant lymph nodes. No thyroid involvement. Lungs bases (on scout images): Clear.", isAbnormal: true, interpretation: "T2-3 tumor (3cm, limited subglottic extension debatable). N1 disease (left cervical LN metastasis). No distant metastasis on CT chest scout. Anterior commissure spared (favorable). Laryngeal framework appears intact.", isEssential: true },
        { id: "ct_chest", name: "CT Chest (excluding larynx) for staging", cost: 3000, turnaround: "1 hour", category: "Imaging", result: "Lungs: No focal consolidation, nodules, or masses. Mediastinum: Normal, no lymphadenopathy. Pleura: Normal. Heart: Normal. No evidence of metastatic disease.", isAbnormal: false, interpretation: "No pulmonary metastases — good for staging. Given smoking history (risk factor for multiple primaries), negative lung findings are reassuring.", isEssential: true },
        { id: "pet_ct", name: "PET-CT (if available; checks for distant metastasis)", cost: 10000, turnaround: "4 hours", category: "Imaging", result: "Intense FDG uptake in left laryngeal lesion (SUVmax 8.2 — high metabolic activity). Left cervical lymph node shows FDG uptake (SUVmax 6.1). No other FDG-avid lesions. Bones: No abnormal uptake.", isAbnormal: true, interpretation: "Confirms malignancy of laryngeal mass and cervical LN. Helps rule out occult metastases. No skeletal involvement.", isEssential: false },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 11.2 g/dL (mild anemia, likely from chronic disease + weight loss), WBC: 8,900/μL (normal), Platelets: 3.2 lakhs", isAbnormal: true, interpretation: "Mild anemia from malnutrition/chronic disease. Important to correct before radiotherapy or surgery (may need transfusion).", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 38 mg/dL, Creatinine: 1.1 mg/dL, Na: 139, K: 4.0, Ca: 8.2 (low)", isAbnormal: true, interpretation: "Borderline renal function (mild elevation in creatinine). Hypocalcemia — may be from malnutrition or hypoalbuminemia.", isEssential: true },
        { id: "lft", name: "Liver Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "SGOT: 42 U/L, SGPT: 48 U/L (both normal but at upper limit), ALP: 98 U/L, Albumin: 3.1 g/dL (LOW)", isAbnormal: true, interpretation: "Hypoalbuminemia from malnutrition and cachexia. LFTs otherwise acceptable — liver not involved. Albumin <3.5 increases operative and radiation risks.", isEssential: true },
        { id: "hpv_testing", name: "HPV-16/18 PCR (from biopsy specimen)", cost: 2000, turnaround: "7 days", category: "Molecular", result: "HPV-16: Negative, HPV-18: Negative, Other HPV types: Negative", isAbnormal: false, interpretation: "HPV-negative laryngeal cancer — typically associated with smoking and alcohol (this patient's risk factors). HPV-negative cancers respond less well to immunotherapy alone.", isEssential: false },
      ],
      correctDiagnosis: "Laryngeal Squamous Cell Carcinoma (Left Vocal Cord) — Stage III disease (T2-3 N1 M0, AJCC 8th edition)",
      differentials: [
        { diagnosis: "Vocal Cord Polyp or Nodule", likelihood: "HIGH", reasoning: "Would cause hoarseness and mass on laryngoscopy. But these are benign, wouldn't cause rapid weight loss or firm cervical lymph nodes. Biopsy would show benign tissue, not carcinoma." },
        { diagnosis: "Laryngeal Papillomatosis (RRP)", likelihood: "LOW", reasoning: "More common in children/young adults. Would see multiple papillary lesions, not a solitary infiltrating mass. Biopsy would show benign squamous epithelium with HPV changes." },
        { diagnosis: "Laryngeal Tuberculosis", likelihood: "LOW", reasoning: "Can cause hoarseness and throat pain. TB laryngitis usually has tuberculosis elsewhere (lungs). No lung findings on CT. Biopsy would show acid-fast bacilli and granulomas. Absence of clubbing makes TB less likely." },
        { diagnosis: "Laryngeal Hemangioma or other benign tumor", likelihood: "LOW", reasoning: "Benign masses don't cause weight loss or cervical lymph node metastases. Biopsy confirms malignancy." },
      ],
      diagnosticReasoning: "58-year-old male with significant smoking (53 pack-years) and alcohol use presenting with progressive hoarseness and dysphagia lasting months. Physical exam shows cachectic appearance (8kg weight loss), cervical lymph node, and hoarse voice. Indirect laryngoscopy reveals non-mobile mass on left vocal cord — classic presentation of laryngeal cancer. Biopsy confirms moderately differentiated squamous cell carcinoma (smoking and alcohol related, HPV-negative). CT staging shows 3.2cm lesion with left cervical LN metastasis (N1 disease), no distant metastases. This is Stage III laryngeal cancer (T2-3 N1 M0). The non-mobility of the vocal cord suggests posterior extension into intrinsic muscles/arytenoid joint, increasing T-stage. Anterior commissure is spared (favorable for voice-sparing approaches). Treatment options include concurrent chemoradiotherapy vs. total laryngectomy.",
      managementPlan: {
        immediateActions: [
          { action: "Refer to Head and Neck Oncology specialist urgently", reasoning: "Laryngeal cancer is a specialist disease. Requires multidisciplinary team (ENT, Medical Oncology, Radiation Oncology, Speech Pathology).", priority: "STAT" },
          { action: "Nutritional assessment and intervention", reasoning: "Patient is cachectic (BMI 22.5 from 24.5 — 8kg loss). Poor nutritional status increases complication risk with treatment. May need enteral support.", priority: "URGENT" },
          { action: "Speech and swallow therapy referral", reasoning: "Dysphagia present. Need baseline swallowing assessment. May need modified diet, swallowing strategies. Critical before any treatment.", priority: "URGENT" },
          { action: "Smoking and alcohol cessation counseling", reasoning: "Continued smoking/alcohol worsens outcomes and increases risk of second primary. Referral to addiction counselor.", priority: "URGENT" },
          { action: "Baseline hearing assessment (audiometry)", reasoning: "Will be exposed to cisplatin (if chemoradiation chosen) or noise from radiation therapy. Need baseline for monitoring ototoxicity.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Chemotherapy (if concurrent chemoRT chosen)", examples: ["Cisplatin 100 mg/m² on days 1, 22, 43 of radiotherapy", "Alternative: Carboplatin if renal dysfunction or hearing loss"], route: "IV", duration: "3 doses during 7-week radiotherapy course", reasoning: "Enhances local control and overall survival in advanced laryngeal cancer (vs. RT alone). Allows laryngeal preservation in suitable candidates.", contraindications: ["Severe renal disease", "Severe hearing loss", "Peripheral neuropathy", "Cardiac disease"], indianContext: "Cisplatin 50mg vial ₹2000-2500 in private centers. AIIMS/Government centers have formulary provision." },
          { drugClass: "Supportive Care — Antiemetic", examples: ["Ondansetron 8mg IV/Oral Q12H", "Dexamethasone 8mg daily"], route: "IV/Oral", duration: "During and 48 hours after chemotherapy", reasoning: "Chemotherapy causes nausea/vomiting. Prevention crucial for maintaining nutrition.", contraindications: ["Ondansetron: None major"], indianContext: "Ondansetron 4mg tablet ₹15-25, available in Jan Aushadhi." },
          { drugClass: "Pain Management", examples: ["Morphine sustained-release 10-20mg BD (titrate)", "Fentanyl patch if oral intake compromised"], route: "Oral/Transdermal", duration: "As needed for pain", reasoning: "Cancer pain management is critical. Inadequate pain control worsens quality of life and outcomes.", contraindications: ["Respiratory depression", "Severe renal disease"], indianContext: "Morphine SR not widely available in Jan Aushadhi — usually ₹100-200/tablet in private pharmacies. Requires DEA form." },
          { drugClass: "Acid Suppression", examples: ["Esomeprazole 40mg OD", "Ranitidine 300mg OD"], route: "Oral", duration: "Long-term (6-12 months during and after treatment)", reasoning: "Radiation-induced esophagitis and GERD risk. Prophylaxis reduces symptoms.", contraindications: ["Severe renal disease"], indianContext: "Esomeprazole 40mg ₹20-40 per tablet in generics." },
        ],
        nonPharmacological: [
          { intervention: "Concurrent chemoradiotherapy (CRT) vs. Total Laryngectomy decision", reasoning: "Two main treatment approaches: (1) Definitive CRT — attempts laryngeal preservation. Response rate ~70% in Stage III. Requires patient compliance, regular monitoring. Risk: Salvage laryngectomy if fails. (2) Total laryngectomy + neck dissection — definitive, but sacrifices larynx and speech. Better for less motivated patients or those with significant comorbidities. This patient is T2-3 N1 — potentially suitable for larynx-preserving CRT if motivated. Requires detailed counseling of pros/cons.", duration: "Decision needed urgently (ideally within 1-2 weeks)" },
          { intervention: "Radiotherapy Planning (if CRT chosen): 3D conformal or IMRT", reasoning: "Targets primary + cervical lymph nodes. Typical dose: 70 Gy in 35 fractions over 7 weeks to primary and involved nodes, 56 Gy to risk areas. IMRT preferred to minimize toxicity to normal tissues (salivary glands, spinal cord, lungs).", duration: "7 weeks treatment" },
          { intervention: "Nutritional Support — PEG tube consideration", reasoning: "If dysphagia severe or expected to worsen with treatment, prophylactic PEG placement helps maintain nutrition, improves treatment tolerance. Can be reversed if needed.", duration: "Assess before treatment" },
          { intervention: "Voice Rehabilitation (if larynx preserved)", reasoning: "If CRT successful and larynx retained, speech often hoarse but functional. Speech therapy needed to maximize functional voice quality.", duration: "Post-treatment, ongoing" },
          { intervention: "Smoking Cessation", reasoning: "MUST STOP smoking. Continued smoking increases recurrence risk, second primary risk, and worsens prognosis significantly.", duration: "Lifelong" },
        ],
        monitoring: [
          { parameter: "Response to Chemoradiotherapy (if chosen)", frequency: "Weekly during treatment, then 4 weeks post-treatment imaging", target: "Complete response (residual disease <10% on CT/PET)", escalation: "If no response by week 4-5 of treatment → consider salvage laryngectomy" },
          { parameter: "Radiation Toxicity — Acute", frequency: "Weekly during RT", target: "Grade 1-2 acute esophagitis/mucositis", escalation: "Grade 3+ mucositis → interrupt treatment, optimize supportive care. Grade 4 → stop treatment, reassess." },
          { parameter: "Chemotherapy Toxicity", frequency: "Before each cisplatin dose", target: "Creatinine <1.5x baseline, Hb >9 g/dL, Platelets >100K, Hearing intact", escalation: "Elevated creatinine or hearing loss → modify/stop cisplatin" },
          { parameter: "Weight and nutritional status", frequency: "Weekly", target: "Maintain weight or lose <5% during treatment", escalation: "Weight loss >10% → consider tube feeding or nutritional supplements" },
          { parameter: "Post-treatment surveillance", frequency: "Monthly for 1 year, then every 3 months for 2 years, then 6-monthly", target: "No recurrent/residual disease. Normal laryngeal function.", escalation: "Recurrent hoarseness or dysphagia beyond post-RT changes → imaging and laryngoscopy to rule out recurrence" },
        ],
        lifestyle: {
          dos: ["Complete smoking cessation — ABSOLUTELY CRITICAL", "Alcohol cessation — at least 6 months, ideally lifelong", "Adequate nutritious diet with soft foods during treatment", "Maintain hydration — drink 3-4 liters daily", "Gentle voice rest — avoid shouting/whispering, use normal conversational tone", "Regular sleep (8 hours) to support immune recovery", "Attend all follow-up appointments — early detection of recurrence improves salvage treatment outcomes"],
          donts: ["NO smoking — even passive smoke exposure worsens outcomes", "NO alcohol — increases toxicity risk and recurrence", "NO hot/spicy foods during treatment (worsens esophagitis)", "NO voice strain or shouting (counterproductive to treatment)", "Do NOT stop treatment mid-course — even if feeling better", "Do NOT delay treatment — tumor biology progresses if treatment delayed"],
          indianSpecific: ["Stop pan/supari/tobacco use completely — patient quit 5 years ago but remains vulnerable to relapse", "In Kolkata — air quality often poor; use air purifier at home", "Access treatment at AIIMS Delhi or Tata Memorial Hospital if not available locally — laryngeal cancer treatment outcomes improve with center volume/expertise", "Explore financial support — AICRF (Advanced Institute of Cancer Research and Foundation) in Delhi offers financial assistance for treatment", "Consider joining cancer support groups in Kolkata (Cancer Society of India) for emotional support"],
        },
        followUp: {
          when: "4 weeks post-treatment, then monthly for 1 year, then 3-monthly for year 2-3, then 6-monthly lifelong",
          what: ["Laryngoscopy to assess treatment response and rule out recurrence", "CT neck/chest if symptoms develop or imaging concern", "PET-CT at 3 months post-treatment if concerned about response", "Voice/speech assessment by speech pathologist", "Assessment for late radiation toxicity (xerostomia, dysphagia, hearing loss)", "Screening for second primary (nasopharyngeal, esophageal, lung cancers given smoking history)"],
        },
        referral: {
          needed: true,
          to: "Head and Neck Oncology (ENT Oncology), Medical Oncology, Radiation Oncology, Speech Pathology, Nutrition, Psychiatry/Counseling for smoking/alcohol cessation",
          urgency: "IMMEDIATE — treatment should start within 2 weeks of diagnosis for optimal outcomes",
        },
      },
      redFlags: [
        { flag: "Stridor at rest or breathing difficulty", action: "Signs of airway compromise. May need emergency intubation or tracheostomy before treatment. Notify ENT urgently.", urgency: "IMMEDIATE" },
        { flag: "Acute severe dysphagia preventing swallowing saliva", action: "Risk of aspiration. Needs dysphagia assessment and possible PEG tube placement before chemoRT.", urgency: "URGENT" },
        { flag: "Hemoptysis", action: "Tumor erosion into blood vessels. Risk of airway bleeding. Needs ENT evaluation and imaging.", urgency: "URGENT" },
        { flag: "Weight loss >10% or BMI <18 during treatment", action: "Severe malnutrition impairs immune function and treatment tolerance. Needs tube feeding and/or nutritional support escalation.", urgency: "URGENT" },
        { flag: "Persistent hoarseness 3+ months after end of radiotherapy", action: "May indicate recurrent/residual disease. Needs laryngoscopy and imaging urgently.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Laryngeal cancer classic triad: Hoarseness >2 weeks + dysphagia + cervical lymph node (must investigate any hoarseness >3 weeks)",
        "Smoking and alcohol are synergistic risk factors — smoking alone increases risk 25-fold, alcohol 2-3 fold, combined ~100-fold",
        "HPV-negative laryngeal cancers (smoking-related) have worse prognosis than HPV-positive (oropharyngeal), but oropharyngeal cancers are more common in India",
        "Fixed/non-mobile vocal cord suggests posterior extension and higher T-stage — assess mobility on laryngoscopy",
        "Stage III laryngeal cancer: Concurrent chemoRT offers 5-year laryngeal preservation rates ~60-70% (vs. 10-20% with RT alone)",
        "Total laryngectomy is definitive but sacrifices larynx and voice — reserved for patients unfit for CRT or with recurrent disease",
        "Early laryngeal cancers (T1-2 N0) can be treated with radiation alone or endoscopic laser surgery with cure rates >90%",
        "Cervical lymph node metastases (N1) increase mortality risk ~2-fold — adds indication for chemotherapy",
        "Anterior commissure involvement increases T-stage and makes larynx-preserving surgery less suitable",
        "Second primary cancers occur in 5-10% of laryngeal cancer survivors — lifelong screening needed given smoking/alcohol history",
      ],
      commonMistakes: [
        "Ignoring hoarseness >3 weeks and treating as simple laryngitis — any hoarseness >2-3 weeks needs laryngoscopy to rule out malignancy",
        "Attributing dysphagia to GERD and treating empirically — always examine larynx if dysphagia and hoarseness coexist",
        "Missing cervical lymph nodes on initial examination — careful, systematic palpation of all lymph node stations needed",
        "Delaying biopsy while attributing mass to 'inflammation' or 'polyp' — any suspicious laryngeal lesion needs biopsy confirmation",
        "Starting treatment without complete staging (CT chest, PET-CT) — staging determines treatment approach and prognosis",
        "Not counseling adequately on smoking/alcohol cessation — patients may resume after treatment, worsening outcomes",
        "Inadequate nutritional support before chemoRT — malnutrition increases treatment toxicity and reduces effectiveness",
        "Selecting total laryngectomy for all advanced cases — many Stage III cases suitable for larynx-preserving CRT if well-selected",
        "Stopping treatment prematurely due to acute toxicity — side effects are expected and manageable; completing course is crucial",
      ],
      relevantHistoryQs: ["onset", "duration", "progression", "smoking_pack_years", "alcohol_intake", "dysphagia", "weight_loss", "pain", "hoarseness_character", "second_primary_risk"],
      relevantExamIds: ["laryngoscopy_indirect", "laryngoscopy_flexible", "laryngeal_mobility", "cervical_lymph_nodes", "general_appearance", "weight_assessment"],
      difficulty: "MODERATE-HIGH",
      estimatedMinutes: 28,
      subjectTags: ["EN", "ONC"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "EN2.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
