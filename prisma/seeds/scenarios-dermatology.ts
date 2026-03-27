// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for Dermatology (DR)
// Layer 8: Stevens-Johnson Syndrome/TEN and Hansen's Disease (Borderline Tuberculoid)
// ---------------------------------------------------------------------------

export const dermatologyScenarios = [
  // ─── 1. Stevens-Johnson Syndrome / Toxic Epidermal Necrolysis ─────────────
  {
    topicCode: "DR-MOD-01-TOP-01",
    scenario: {
      patientAge: 26,
      patientSex: "Female",
      patientOccupation: "Software engineer",
      patientLocation: "Bangalore, Karnataka",
      chiefComplaint: "Widespread blisters and skin peeling for 4 days with fever and oral sores",
      historyOfPresent: `
- Onset: Acute onset 4 days ago with high fever (104°F) and malaise
- Initial symptoms: Started with erythematous macules on face and trunk, rapidly spread to involve >80% body surface area
- Oral symptoms: Painful erosions and ulcerations in mouth, lips, and throat — difficulty swallowing (odynophagia)
- Ocular involvement: Conjunctival injection, photophobia, foreign body sensation
- Genital involvement: Painful erosions in vulva and perianal area
- Skin findings: Targetoid lesions progressed to large flaccid bullae, positive Nikolsky sign (skin separates with gentle rubbing), areas of skin peeling
- Associated: Fever, chills, severe malaise, anorexia, no diarrhea
- Progression: Over 3 days, blistering and skin loss worsened despite taking antibiotics prescribed at clinic
      `.trim(),
      pastHistory: "No significant past illness. No previous skin disease or drug reactions. Had appendicitis surgery 2 years ago (uneventful). No immunosuppression.",
      familyHistory: "No significant family history. No known drug allergies in family.",
      socialHistory: "Non-smoker, occasional social drinker. Works in software company with good hygiene standards. Lives with parents. Recent travel to Goa (beach trip) 2 weeks ago.",
      drugHistory: "Took Cotrimoxazole (TMP-SMX) for presumed UTI starting 7 days ago after visiting local clinic. No other regular medications. NO KNOWN DRUG ALLERGY documented at home, but clearly has severe reaction to TMP-SMX.",
      vitals: { pulse: 116, bp: "110/72", temp: 39.8, rr: 24, spo2: 96 },
      generalExam: `
- General appearance: Acutely ill, distressed, febrile, with widespread painful skin involvement
- Pallor: Mild pallor
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: Periorbital edema present bilaterally
- Skin: >80% body surface area involved with targetoid lesions, flaccid bullae, erosions, areas of full-thickness skin loss
- Mucous membranes: Erosions and ulcerations of lips, buccal mucosa, hard palate (very painful)
- Eyes: Bilateral conjunctival injection, purulent discharge (beginning conjunctivitis)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Apex beat in 5th ICS, mid-clavicular line — normal position",
          heart_sounds: "S1, S2 normal. Tachycardic at 116 bpm. No murmurs.",
          peripheral_pulses: "All pulses palpable, regular, tachycardic",
          blood_pressure: "110/72 mmHg — relatively low for fever, suggestive of early hypovolemia",
        },
        respiratory: {
          chest_inspection: "Bilateral symmetrical chest movements. Tachypneic.",
          trachea: "Trachea central",
          percussion: "Resonant bilaterally",
          auscultation_lungs: "Bilateral clear air entry. No added sounds. No wheezing or stridor (yet).",
          vocal_resonance: "Normal bilateral",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft, non-distended",
          palpation_superficial: "No tenderness",
          palpation_deep: "No organomegaly",
          liver_palpation: "Liver not palpable (normal size)",
          spleen_palpation: "Spleen not palpable",
          bowel_sounds: "Normal bowel sounds",
        },
        neurological: {
          consciousness: "GCS 15/15 — alert and oriented",
          cranial_nerves: "All cranial nerves grossly intact. Eyes: photophobia present.",
          reflexes: "Deep tendon reflexes normal and symmetrical",
          plantar: "Plantar reflex — flexor bilaterally (normal)",
        },
        dermatological: {
          distribution: "Centripetal distribution — face, trunk, proximal limbs severely involved, sparing palms/soles initially",
          lesions: "Targetoid erythematous macules (some with 3 zones: dark center, pale ring, erythematous halo), progressing to large flaccid bullae with transparent roofs",
          nikolsky_sign: "POSITIVE — gentle rubbing of skin causes epidermal separation and erosion",
          involved_area: "Estimated >80% body surface area (SJS typically 10-30%, TEN >30%)",
          associated_findings: "Perioral erythema and erosions, nail involvement starting (dystrophy)",
        },
      },
      availableInvestigations: [
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 12.1 g/dL, WBC: 14,200/μL (mild leukocytosis, 78% neutrophils), Platelets: 2.0 lakhs", isAbnormal: true, interpretation: "Mild leukocytosis and thrombocytopenia — consistent with systemic reaction. Platelet count concerning if dropping.", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 38 mg/dL, Creatinine: 1.3 mg/dL, Na: 138 mEq/L, K: 4.8 mEq/L, Cl: 102 mEq/L", isAbnormal: true, interpretation: "Mildly elevated creatinine — early renal dysfunction from dehydration and sepsis. Electrolytes relatively preserved.", isEssential: true },
        { id: "lft", name: "Liver Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Total Bilirubin: 1.2 mg/dL, Direct: 0.3 mg/dL, AST: 78 U/L, ALT: 92 U/L, ALP: 88 U/L", isAbnormal: true, interpretation: "Mild hepatic involvement (elevated transaminases) — TEN can cause hepatitis. Bilirubin relatively normal.", isEssential: true },
        { id: "pt_inr", name: "PT/INR", cost: 400, turnaround: "1 hour", category: "Hematology", result: "PT: 14.2 sec, INR: 1.15, aPTT: 31 sec", isAbnormal: true, interpretation: "Mild coagulation derangement — consistent with systemic inflammation. Monitor for DIC.", isEssential: true },
        { id: "blood_culture", name: "Blood Culture", cost: 600, turnaround: "48-72 hours", category: "Microbiology", result: "Pending — sterile so far (may show secondary infection)", isAbnormal: false, interpretation: "SJS/TEN is NOT an infection per se, but patient at high risk for secondary bacterial infection of denuded skin.", isEssential: true },
        { id: "skin_biopsy", name: "Skin Biopsy (punch from lesion edge)", cost: 1500, turnaround: "24-48 hours", category: "Histopathology", result: "Full-thickness epidermal necrosis with minimal dermal inflammation. Subepidermal blister formation. Pattern consistent with drug-induced TEN.", isAbnormal: true, interpretation: "Histology shows keratinocyte apoptosis (not infection) — confirms TEN. Negative cultures rule out herpes simplex and other infectious causes.", isEssential: false },
        { id: "serology", name: "Serology (HSV/VZV/EBV) — nasopharyngeal swab", cost: 1000, turnaround: "24 hours", category: "Virology", result: "HSV IgM: Negative, VZV IgM: Negative, EBV VCA-IgM: Negative", isAbnormal: false, interpretation: "Viral infections are ruled out. This is drug-induced TEN, not infection-triggered.", isEssential: false },
        { id: "cotrim_test", name: "Delayed Hypersensitivity Test (TMP-SMX) — Patch test", cost: 2000, turnaround: "72 hours", category: "Allergy", result: "Pending — likely to be positive. Do NOT perform while acute skin disease present. Perform at 4-6 weeks.", isAbnormal: false, interpretation: "Patch testing at recovery stage can confirm culprit drug. Historically, TMP-SMX is one of the top 3 causes of SJS/TEN worldwide.", isEssential: false },
        { id: "glucose", name: "Random Blood Glucose", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "RBS: 198 mg/dL", isAbnormal: true, interpretation: "Stress hyperglycemia — common in acute systemic illness. Not indicative of diabetes.", isEssential: false },
      ],
      correctDiagnosis: "Toxic Epidermal Necrolysis (TEN) — Drug-induced, secondary to Cotrimoxazole",
      differentials: [
        { diagnosis: "Stevens-Johnson Syndrome (SJS)", likelihood: "MEDIUM", reasoning: "SJS and TEN are on same spectrum. SJS has <10-30% BSA, TEN has >30% BSA. This patient has >80% involvement → TEN not SJS. Both are drug-induced same condition." },
        { diagnosis: "Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS)", likelihood: "LOW", reasoning: "DRESS presents with fever, rash, atypical lymphocytes, high eosinophilia, hepatosplenomegaly. Skin lesions are typically morbilliform, not targetoid. Occurs 2-6 weeks after drug, not acute onset." },
        { diagnosis: "Acute Generalized Exanthematous Pustulosis (AGEP)", likelihood: "LOW", reasoning: "AGEP presents with fever and pustules (not bullae), confined to skin (no mucosal involvement). Resolves faster than TEN." },
        { diagnosis: "Erythema Multiforme Major", likelihood: "LOW", reasoning: "EM Major can have mucosal involvement but typically shows true targetoid lesions with 3 zones. Nikolsky sign is negative in EM. Oral involvement usually milder." },
        { diagnosis: "Viral exanthem (Varicella, Measles, HSV)", likelihood: "LOW", reasoning: "Viral serology negative. Vesicular lesions would be on same stage; here we have mixed targetoid, bullae, erosions. No vesicular morphology." },
      ],
      diagnosticReasoning: "26-year-old female with acute onset of widespread targetoid erythematous macules progressing to flaccid bullae, skin peeling, and mucosal erosions within 4 days of fever. >80% body surface area involvement with positive Nikolsky sign is diagnostic of Toxic Epidermal Necrolysis (TEN). Clear temporal relationship with cotrimoxazole (TMP-SMX) started 7 days ago — patient presents 4 days into drug course. Cotrimoxazole is a well-known culprit for SJS/TEN, especially in Indian population. This is a medical emergency requiring immediate discontinuation of drug and supportive care in ICU/specialized burn unit.",
      managementPlan: {
        immediateActions: [
          { action: "STOP cotrimoxazole immediately — DO NOT taper, discontinue at once", reasoning: "Continuing the offending drug increases mortality. This is the single most important action.", priority: "STAT" },
          { action: "Transfer to ICU or specialized Burn/Dermatology unit", reasoning: "TEN mortality is 25-35%. Requires intensive care, specialized wound care, fluid management similar to burn unit.", priority: "STAT" },
          { action: "Start IV Normal Saline at 20 mL/kg initially for shock prevention", reasoning: "Massive fluid losses from denuded skin (>80% BSA). Calculate Parkland formula: 4mL × weight(kg) × %BSA burned, give half in first 8 hours. Urine output goal: 0.5mL/kg/hr.", priority: "STAT" },
          { action: "Strict aseptic technique for all wound care — use sterile gloves, strict infection control", reasoning: "Denuded skin is gateway for life-threatening secondary infections (Pseudomonas, Staphylococcus aureus)", priority: "STAT" },
          { action: "Place on continuous cardiac monitoring and pulse oximetry", reasoning: "Monitor for airway compromise (oral edema), hypotension, secondary infection", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Corticosteroids (Systemic) — CONTROVERSIAL, use with caution", examples: ["Methylprednisolone 30mg/kg IV stat, then 1-2 mg/kg/day", "Or: Prednisone 1-2 mg/kg/day oral"], route: "IV/Oral", duration: "7-10 days, taper after improvement", reasoning: "Some data suggests early high-dose steroids may reduce progression and mortality if given VERY early (<24-48 hrs of onset). However, risk of infection is significant. Consider if available early. Recent data more supportive of early use.", contraindications: ["Use with extreme caution in any sign of infection. Monitor closely for secondary infection."], indianContext: "Methylprednisolone 500mg vial at ₹80-120. Often used empirically in Indian hospitals for severe TEN." },
          { drugClass: "Antibiotic — broad-spectrum for secondary infection prophylaxis", examples: ["Cefotaxime 2g IV TDS", "Fluoroquinolone (Levofloxacin) 750mg IV OD"], route: "IV", duration: "5-7 days or until no signs of infection", reasoning: "High risk of secondary bacterial infection. Prophylactic antibiotics reduce infection risk. Use broad-spectrum due to high suspicion for gram-negative organisms.", contraindications: ["Known drug allergies — absolutely avoid TMP-SMX, other sulfonamides, penicillins if history of allergy"], indianContext: "Cefotaxime 1g injection at ₹40-60. Generic levofloxacin at ₹100-150 per dose." },
          { drugClass: "Antibiotic — topical for wound care", examples: ["Silver sulfadiazine 1% cream", "Mafenide acetate cream", "Mupirocin for oral erosions"], route: "Topical", duration: "Until healing", reasoning: "Topical antibiotics prevent bacterial overgrowth on denuded skin. Silver sulfadiazine preferred (broad spectrum, less systemic absorption).", contraindications: ["Avoid iodine-based antimicrobials (can cause thyroid issues) and alcohol-based solutions (painful on raw skin)"], indianContext: "Silver sulfadiazine cream at ₹150-200 per tube in most hospitals." },
          { drugClass: "Analgesic — strong opioid for severe pain", examples: ["Morphine 5-10mg IV 4-hourly PRN", "Tramadol 1-2mg/kg IV 6-hourly"], route: "IV", duration: "Until healing", reasoning: "Severe mucosal and skin pain — requires strong opioids. Pain control essential for patient comfort and mobility (to prevent contractures).", contraindications: ["Monitor for respiratory depression. Titrate carefully."], indianContext: "Morphine 10mg/mL vial at ₹30-50. Tramadol 100mg injection at ₹15-20." },
          { drugClass: "Antipyretic", examples: ["Paracetamol 1g IV/oral QID PRN"], route: "IV/Oral", duration: "As needed for fever",  reasoning: "Fever from systemic inflammation. Paracetamol is safe. Avoid NSAIDs (increase bleeding risk, mucosal damage).", contraindications: ["Severe liver dysfunction"], indianContext: "Paracetamol tablets at ₹1-2 each." },
          { drugClass: "Antifungal — oral for candidiasis prophylaxis", examples: ["Fluconazole 200mg IV/PO OD", "Clotrimazole lozenges 10mg 5x daily"], route: "IV/Oral/Local", duration: "Until healed", reasoning: "Denuded mucosa + antibiotics = high candidiasis risk. Prophylaxis reduces morbidity.", contraindications: ["None significant with fluconazole dosing"], indianContext: "Fluconazole 200mg capsule at ₹20-30. Clotrimazole lozenges at ₹40-60 per box." },
        ],
        nonPharmacological: [
          { intervention: "Gentle cleansing of affected areas with normal saline or dilute chlorhexidine (0.02%)", reasoning: "Daily gentle cleaning prevents secondary infection. AVOID soap and harsh solutions.", duration: "2-3 times daily" },
          { intervention: "Ocular care: Regular rinses with normal saline, artificial tears every 2 hours, eye lubricant ointment", reasoning: "Conjunctival erosions can lead to blindness if not managed. Early involvement of ophthalmology critical.", duration: "Continuous until healing" },
          { intervention: "Oral care: Rinses with dilute salt water (0.9% NaCl), avoid spicy/hot food, soft diet", reasoning: "Severe oral erosions make eating painful. Nutrition support with liquid/soft diet.", duration: "Continuous" },
          { intervention: "Nutritional support — liquid/enteral feeding if unable to take oral", reasoning: "Hypermetabolic state in TEN like in burns. High protein requirement for healing.", duration: "Until can eat comfortably" },
          { intervention: "Positioning and physiotherapy to prevent contractures", reasoning: "Extended bed rest risks contracture formation especially in joints. Early mobilization when stable.", duration: "From day 2-3 onwards as patient improves" },
          { intervention: "Psychological support and reassurance", reasoning: "Extremely distressing condition. Patient needs counseling that this is severe reaction but recoverable with appropriate care.", duration: "Throughout hospitalization" },
        ],
        monitoring: [
          { parameter: "Urine output", frequency: "Hourly", target: "0.5 mL/kg/hr (maintain perfusion)", escalation: "If <0.3 mL/kg/hr — increase IV fluids; if oliguria despite fluids → ARF → need ICU renal support" },
          { parameter: "Blood pressure and heart rate", frequency: "Every 30 min initially", target: "SBP >90, MAP >65, HR <110", escalation: "If hypotension → IV fluid bolus, consider vasopressor (dopamine, noradrenaline)" },
          { parameter: "Temperature", frequency: "Every 4 hours", target: "Avoid hyperthermia (>39°C), normal temperature by day 5-7", escalation: "Fever + leukocytosis + positive blood culture → sepsis protocol" },
          { parameter: "Serial CBC (especially platelet count)", frequency: "Every 24 hours", target: "Stable or improving counts", escalation: "If platelets dropping <50,000 or WBC >20,000 → suggest progression, poor prognosis" },
          { parameter: "Fluid balance (I/O chart)", frequency: "Daily total", target: "Balanced, no fluid overload (risk of pulmonary edema)", escalation: "If negative balance — risk of ARF; if positive → pulmonary edema" },
          { parameter: "Skin assessment", frequency: "Every 12 hours", target: "No progression of blistering/peeling", escalation: "If progressive involvement despite stopping offending drug — rare but suggests alternative diagnosis" },
          { parameter: "Ocular examination", frequency: "Daily", target: "No worsening of conjunctivitis", escalation: "If progressive eye involvement → involve ophthalmology for amniotic membrane transplant or topical silicone oil" },
        ],
        lifestyle: {
          dos: ["Complete wound care and physiotherapy", "Adequate protein and calorie intake", "Regular eye lubricant use to prevent blindness", "Avoid all triggers (offending drug class must be absolutely avoided for life)"],
          donts: ["NEVER rechallenge with TMP-SMX or other sulfonamides", "Avoid NSAIDs during acute phase (increase bleeding)", "No tight clothing over healing skin", "Avoid UV exposure (hyperpigmentation post-TEN)"],
          indianSpecific: ["Inform family that TEN is NOT infectious", "Avoid traditional remedies (oil-based, herbal preparations) on wounds — high infection risk", "Get detailed drug allergy documentation (must be carried always)", "Post-recovery: Counseling on early recognition of new drug reactions"],
        },
        followUp: {
          when: "Daily during hospitalization (typically 3-4 weeks), then weekly for 1 month, then monthly for 6 months",
          what: ["Clinical assessment of skin and mucosal healing", "Ophthalmology review at 1 month and 3 months (risk of late blindness)", "Psychological assessment if signs of PTSD or depression", "Patch testing at 4-6 weeks to confirm culprit drug (NOT during acute phase)"],
        },
        referral: {
          needed: true,
          to: "ICU/Burn Unit/Specialized Dermatology Ward; Ophthalmology for ocular involvement",
          urgency: "IMMEDIATE — TEN is medical emergency with high mortality if not managed in appropriate facility",
        },
      },
      redFlags: [
        { flag: "Airway compromise (stridor, voice changes)", action: "Prepare for emergency intubation. Involve ENT. May need tracheostomy.", urgency: "IMMEDIATE" },
        { flag: "Sepsis (fever >39.5°C + hypotension + leukocytosis + positive blood culture)", action: "Sepsis protocol — IV fluids, broad-spectrum antibiotics (already started), vasopressors if needed, source control", urgency: "IMMEDIATE" },
        { flag: "Acute Kidney Injury (urine output <0.3 mL/kg/hr, rising creatinine)", action: "Aggressive IV rehydration. If no response — may need ICU renal replacement therapy (dialysis).", urgency: "IMMEDIATE" },
        { flag: "Progressive skin involvement >85% BSA despite stopping drug", action: "Rare — suggests alternative diagnosis (sepsis, disseminated infection) or ongoing drug exposure. Review all medications.", urgency: "URGENT" },
        { flag: "Signs of DIC (petechiae, bleeding, dropping platelets)", action: "Check PT/INR, aPTT, D-dimer, fibrinogen. FFP and platelet transfusion if needed.", urgency: "URGENT" },
        { flag: "Worsening ocular symptoms (pain, vision loss, discharge)", action: "URGENT ophthalmology review. Risk of permanent blindness. May need amniotic membrane graft.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "SJS/TEN are on same spectrum: SJS = <10-30% BSA, SJS/TEN overlap = 10-30% BSA, TEN = >30% BSA involvement",
        "Cotrimoxazole (TMP-SMX) is one of the TOP 3 causes of SJS/TEN globally, especially in India",
        "FIRST action: STOP the offending drug immediately — do NOT taper",
        "TEN is a MEDICAL EMERGENCY: 25-35% mortality, manage like severe burns in ICU/specialized unit",
        "Nikolsky sign POSITIVE in SJS/TEN (epidermal separation) but NEGATIVE in Erythema Multiforme",
        "Fluid resuscitation is critical — use Parkland formula like for burns (4mL × kg × %BSA)",
        "Early high-dose systemic corticosteroids may reduce progression if given within 24-48 hours (recent data supportive)",
        "Ocular involvement is common — early ophthalmology involvement prevents blindness",
        "Patch testing should be done at 4-6 weeks of recovery, NOT during acute phase, to confirm culprit drug",
      ],
      commonMistakes: [
        "Continuing or tapering the offending drug slowly — should stop immediately",
        "Using topical iodine-based antimicrobials (high systemic absorption, thyroid risk)",
        "Starting NSAIDs for pain (increase mucosal bleeding and damage)",
        "Delaying transfer to ICU/burn unit — TEN requires specialized facility",
        "Not involving ophthalmology early — ocular involvement can lead to permanent blindness if missed",
        "Missing diagnosis and treating as 'infection' or 'allergy' — delays definitive management",
        "Allowing rechallenge with offending drug or related drugs (e.g., other sulfonamides) after recovery",
      ],
      relevantHistoryQs: ["onset", "progression", "drug_exposure", "fever", "oral_symptoms", "eye_involvement", "skin_spread", "prev_reaction", "comorbidities"],
      relevantExamIds: ["general_appearance", "skin_distribution", "nikolsky_sign", "mucous_membranes", "ocular_exam", "vital_signs", "bsa_estimation"],
      difficulty: "HARD",
      estimatedMinutes: 25,
      subjectTags: ["DR", "EM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "DR1.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 2. Hansen's Disease (Leprosy) — Borderline Tuberculoid (BT) Type ──────
  {
    topicCode: "DR-MOD-02-TOP-01",
    scenario: {
      patientAge: 38,
      patientSex: "Male",
      patientOccupation: "Farmer",
      patientLocation: "Chhindwara district, Madhya Pradesh",
      chiefComplaint: "Slowly growing patches of discoloration and numbness on arms for 6 months",
      historyOfPresent: `
- Onset: Insidious onset 6 months ago with small ill-defined erythematous patch on right forearm
- Progressive: Patch slowly enlarged, now involves whole forearm and extending to right arm
- Character: Hypopigmented to erythematous patch with raised border (ill-defined edge)
- Distribution: Unilateral involvement (asymmetrical) — only right side affected, left arm spared
- Sensory: Progressive loss of sensation in the patch — patient reports "numbness" when touching patch
- Motor: No weakness or muscle atrophy noted by patient
- Associated: No fever, no joint pain, no systemic symptoms
- Exposure: Lives in village where grandfather had "white skin disease" (possibly leprosy) — grandfather recovered after treatment 15 years ago
- BCG status: Received BCG vaccination at age 5 (child health card available)
      `.trim(),
      pastHistory: "Generally healthy. No TB. No other chronic illness. Childhood vaccinations complete. Lives in low socioeconomic setting in endemic area.",
      familyHistory: "Grandfather had Hansen's disease (completed treatment 15 years ago — reportedly cured). Father and mother healthy.",
      socialHistory: "Farmer, engaged in rice and wheat cultivation. Lives in joint family with 12 members in 2-room house. Adequate nutrition. No smoking, no alcohol. Wears minimal protective clothing during farming.",
      drugHistory: "Takes paracetamol occasionally for headache. No regular medications. No known allergies.",
      vitals: { pulse: 76, bp: "120/78", temp: 37.0, rr: 14, spo2: 98 },
      generalExam: `
- General appearance: Well-built farmer, in no distress
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Lymph nodes: Palpable small firm lymph nodes in right axilla (ipsilateral to lesion) — non-tender, mobile
- Edema: No pedal edema
- Skin: Large ill-defined erythematous to hypopigmented patch on right forearm and arm, with slightly raised border, dry appearance
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Apex beat in 5th ICS, mid-clavicular line — normal",
          heart_sounds: "S1, S2 normal. Regular rhythm. No murmurs.",
          peripheral_pulses: "All peripheral pulses palpable, equal bilaterally",
          blood_pressure: "120/78 mmHg bilaterally",
        },
        respiratory: {
          chest_inspection: "Bilateral symmetrical chest movements",
          trachea: "Trachea central",
          percussion: "Resonant bilaterally",
          auscultation_lungs: "Bilateral clear air entry. No added sounds.",
          vocal_resonance: "Normal bilateral",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft, non-distended",
          palpation_superficial: "No tenderness",
          palpation_deep: "No organomegaly",
          liver_palpation: "Liver not palpable (normal)",
          spleen_palpation: "Spleen not palpable",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "GCS 15/15 — alert and oriented",
          cranial_nerves: "All cranial nerves grossly intact",
          reflexes: "Deep tendon reflexes normal and symmetrical",
          plantar: "Plantar reflex — flexor bilaterally (normal)",
          peripheral_nerves: "Sensory examination: Monofilament test (10g filament) — absent sensation in right forearm and arm patch; normal sensation elsewhere. Pain and temperature sensation: Absent in patch region. Two-point discrimination: Absent in patch. Motor examination: Right upper limb strength 5/5. No wasting. No claw hand (yet).",
        },
        dermatological: {
          lesions: "One large well-demarcated erythematous patch with raised border on right forearm and arm. Edge slightly raised, sharp demarcation. Surface: Dry, slightly scaly. Size: ~15 x 20 cm involving forearm and proximal arm.",
          distribution: "Unilateral, asymmetrical — right side only",
          sensory_loss: "Complete sensory loss within patch (anesthesia to light touch, temperature, pain)",
          associated_findings: "Ipsilateral axillary lymphadenopathy (right). No visible nerve enlargement yet. Skin appears dry with slight ichthyosis within patch.",
        },
      },
      availableInvestigations: [
        { id: "skin_smear", name: "Skin Slit Smear (Lepromin) — from patch edge and earlobe", cost: 200, turnaround: "7 days for Ziehl-Neelsen staining and bacilloscopy", category: "Microbiology", result: "Skin smear from patch: Few acid-fast bacilli (AFB) seen (Bacterial Index = 1-2). Earlobe smear: No AFB.", isAbnormal: true, interpretation: "Few acid-fast bacilli indicate paucibacillary Hansen's disease (BT or TT type). >6 AFB per field = multibacillary (BL or LL). This patient has paucibacillary disease.", isEssential: true },
        { id: "lepromin_test", name: "Lepromin Test (Mitsuda test) — intradermal injection of killed M. leprae antigen", cost: 400, turnaround: "21 days for full reading (induration at 3-4 weeks)", category: "Immunology", result: "POSITIVE at 3-4 weeks (induration >5mm) — indicates cell-mediated immunity (T-cell response) is intact", isAbnormal: true, interpretation: "Positive lepromin test indicates good cell-mediated immunity. Seen in TT and BT (tuberculoid) forms. Negative in LL and BL (lepromatous) forms.", isEssential: true },
        { id: "histopathology", name: "Skin Biopsy — punch biopsy from patch edge", cost: 1500, turnaround: "7-10 days", category: "Histopathology", result: "Well-formed epithelioid granulomas with few acid-fast bacilli (AFB 1-2 per section). Granulomas contain epithelioid cells, few lymphocytes, and occasional Langhans giant cells. Dermal fibrosis present. Pattern consistent with Borderline Tuberculoid (BT) Hansen's disease.", isAbnormal: true, interpretation: "Histopathology is GOLD STANDARD for classification. BT shows well-formed granulomas with few AFB. This confirms BT diagnosis.", isEssential: true },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 13.1 g/dL, WBC: 7,200/μL, Platelets: 2.5 lakhs", isAbnormal: false, interpretation: "Normal — no hematologic involvement in uncomplicated Hansen's disease", isEssential: false },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 32 mg/dL, Creatinine: 0.9 mg/dL, Na: 139 mEq/L, K: 4.1 mEq/L", isAbnormal: false, interpretation: "Normal renal function — no renal involvement. Baseline before dapsone (which rarely causes hemolysis).", isEssential: true },
        { id: "lft", name: "Liver Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Total Bilirubin: 0.8 mg/dL, Direct: 0.2 mg/dL, AST: 32 U/L, ALT: 28 U/L, ALP: 72 U/L", isAbnormal: false, interpretation: "Normal — baseline before rifampicin (hepatotoxicity monitoring)", isEssential: true },
        { id: "glucose", name: "Fasting Blood Glucose", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "FBS: 92 mg/dL", isAbnormal: false, interpretation: "Normal glucose metabolism.", isEssential: false },
        { id: "nerve_palpation", name: "Clinical Examination — Nerve Palpation (Ulnar, Radial, Common Peroneal)", cost: 0, turnaround: "Immediate", category: "Clinical", result: "Right radial and ulnar nerves — palpable, not enlarged, no tenderness. Common peroneal bilaterally — normal size. No visible nerve trunk enlargement.", isAbnormal: false, interpretation: "Absence of nerve trunk thickening (except at lesion margin) is characteristic of tuberculoid type. Lepromatous type shows bilateral symmetric nerve trunk enlargement.", isEssential: true },
        { id: "thermal_test", name: "Thermal Sensory Test (using warm and cold objects)", cost: 100, turnaround: "Immediate", category: "Clinical", result: "Right forearm patch: No response to hot (60°C) or cold (10°C) — complete thermal anesthesia. Rest of body: Normal thermal sensation.", isAbnormal: true, interpretation: "Complete thermal anesthesia within lesion supports diagnosis of Hansen's disease with sensory loss.", isEssential: false },
      ],
      correctDiagnosis: "Hansen's Disease (Leprosy) — Borderline Tuberculoid (BT) Type",
      differentials: [
        { diagnosis: "Tuberculoid Leprosy (TT)", likelihood: "MEDIUM", reasoning: "TT and BT are both paucibacillary and present with single/few lesions and asymmetrical involvement. Difference: TT has better immunity, may have NO AFB on smear, larger sensory loss. This patient has few AFB and positive lepromin — BT more likely than TT. But can overlap." },
        { diagnosis: "Vitiligo", likelihood: "LOW", reasoning: "Vitiligo shows hypopigmented patches but WITH normal sensation (no sensory loss). This patient has complete anesthesia. Also, vitiligo border is usually sharp; this patch has slightly raised edge. Vitiligo is non-infectious." },
        { diagnosis: "Pityriasis Alba", likelihood: "LOW", reasoning: "Mild hypopigmented patches with fine scaling, usually on face/neck in children. No sensory loss. Benign condition." },
        { diagnosis: "Asymptomatic Sensory Neuropathy from other cause (DM, B12 deficiency)", likelihood: "LOW", reasoning: "Patient has NO history of diabetes (normal glucose). No history of malabsorption/dietary deficiency. Sensory loss is CONFINED to dermatome of visible skin lesion — not diffuse neuropathy." },
        { diagnosis: "Cutaneous Tuberculosis (Lupus Vulgaris)", likelihood: "LOW", reasoning: "TB skin lesions are typically moist, ulcerated with 'apple jelly' appearance on diascopy. This patch is dry and well-demarcated. No systemic TB symptoms. Sensory loss not seen in TB." },
      ],
      diagnosticReasoning: "38-year-old farmer from endemic area (MP, India) with 6-month history of progressive unilateral erythematous patch with sharp demarcation, raised border, and COMPLETE sensory loss within patch. Asymmetrical distribution (only right arm), ipsilateral axillary lymphadenopathy. Skin slit smear shows few AFB (Bacterial Index 1-2 = paucibacillary). Lepromin test POSITIVE (good cell-mediated immunity). Histopathology shows well-formed epithelioid granulomas with few AFB — diagnostic of Borderline Tuberculoid (BT) Hansen's disease. Family history of grandfather with treated Hansen's disease supports exposure/endemic setting. This is a classic presentation of BT leprosy from India.",
      managementPlan: {
        immediateActions: [
          { action: "Confirm diagnosis and classify type (BT = paucibacillary)", reasoning: "Classification determines treatment duration and intensity. BT is paucibacillary — shorter multidrug therapy course.", priority: "URGENT" },
          { action: "Educate patient and family: Leprosy IS curable, NOT hereditary, treatment stops transmission", reasoning: "Massive stigma and misinformation around Hansen's disease. Patient and family need counseling to ensure treatment adherence and prevent family rejection.", priority: "STAT" },
          { action: "Start Multi-Drug Therapy (MDT) immediately as per WHO and NLEP protocols", reasoning: "Effective treatment can halt disease progression, prevent disability, prevent transmission", priority: "STAT" },
          { action: "Notification to District Leprosy Elimination Program (DLEP)", reasoning: "Mandatory disease notification in India. NLEP tracks cases for elimination efforts. Will aid contact tracing.", priority: "URGENT" },
          { action: "Baseline assessment: Document sensory loss map, motor function, ulceration risk (Disability Grading)", reasoning: "Establish baseline to monitor treatment response and detect complications (Type 1 reactions).", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Rifampicin (R) — Backbone of MDT", examples: ["Rifampicin 600mg daily"], route: "Oral", duration: "6 months (BT) or 12 months (BL/LL)", reasoning: "Most potent anti-leprosy drug. Kills M. leprae rapidly. Patient becomes non-infectious within 2 weeks of starting rifampicin.", contraindications: ["Severe liver disease", "Pregnancy (though often given with careful monitoring)"], indianContext: "WHO/NLEP provides free rifampicin under NLEP (National Leprosy Elimination Program). Generic rifampicin 600mg at ₹5-10/tablet. Blister packs given monthly by district hospital." },
          { drugClass: "Dapsone (D) — Supportive drug", examples: ["Dapsone 100mg daily"], route: "Oral", duration: "6 months (BT) or 12 months (BL/LL)", reasoning: "Kills M. leprae slowly, provides backup coverage if resistance emerges. Requires G6PD testing (dapsone can cause hemolysis in G6PD deficiency).", contraindications: ["G6PD deficiency (check before starting)", "Severe anemia"], indianContext: "NLEP provides free dapsone. Generic available at ₹2-5/tablet." },
          { drugClass: "Ofloxacin (O) or Minocycline (M) — Third drug (for BT and BL/LL)", examples: ["Ofloxacin 400mg daily", "OR Minocycline 100mg daily"], route: "Oral", duration: "6 months (BT) or 12 months (BL/LL)", reasoning: "BT is paucibacillary — uses R + D + O/M for 6 months (or R + D for 6 months if limited resources). Adds extra coverage. Ofloxacin preferred (better penetration, fewer drug interactions).", contraindications: ["QT prolongation (fluoroquinolone)", "Tetracycline contraindications (pregnancy, children <8yrs)"], indianContext: "NLEP provides combination blister packs (RDO) or (RDM) depending on availability. Ofloxacin 400mg at ₹15-25/tablet generically." },
          { drugClass: "Vitamin B complex supplement", examples: ["B-complex tablet daily"], route: "Oral", duration: "During and after MDT",  reasoning: "Nutritional support. Dapsone can cause hemolysis; B vitamins help recovery.", contraindications: ["None"], indianContext: "Generic B-complex at ₹10-20 per tablet." },
          { drugClass: "Corticosteroid — for Type 1 Reaction (if develops)", examples: ["Prednisone 1mg/kg/day initial, taper"], route: "Oral", duration: "6-12 weeks (taper slowly)", reasoning: "IF patient develops Type 1 Reaction (reversal reaction — erythema/swelling of lesion, neuritis) during or after MDT, start corticosteroids immediately to prevent permanent nerve damage.", contraindications: ["Type 2 Reaction (ENL) — different mechanism, use thalidomide instead"], indianContext: "Generic prednisolone at ₹0.50-1 per tablet." },
        ],
        nonPharmacological: [
          { intervention: "Education about disease transmission and prevention", reasoning: "Leprosy NOT hereditary. Transmission is respiratory (rarely skin-to-skin). Most humans (>95%) naturally resistant due to BCG. Patient stops being infectious after 2 weeks of MDT.", duration: "Initial and ongoing" },
          { intervention: "Footwear counseling: Wear protective footwear to prevent ulcers", reasoning: "Loss of sensation in feet increases risk of injury. Common peroneal nerve involvement → foot drop. Risk of plantar ulcers.", duration: "Lifelong" },
          { intervention: "Hand/foot care education: Inspect daily for ulcers, moisturize, protect from injury", reasoning: "Anesthesia increases trauma risk. Daily inspection prevents delayed presentation of serious infections.", duration: "Lifelong" },
          { intervention: "Physiotherapy: Range of motion exercises, nerve palpation massage", reasoning: "Prevent contractures and stiffness. Promotes healing", duration: "During and after MDT" },
          { intervention: "Psychosocial counseling", reasoning: "Massive social stigma in India. Leprosy patients face discrimination, family rejection. Counseling essential for treatment adherence and mental health.", duration: "Throughout" },
        ],
        monitoring: [
          { parameter: "Clinical assessment at monthly MDT review", frequency: "Monthly during MDT", target: "Lesions should fade, sensory and motor function should stabilize or improve", escalation: "If worsening during treatment → suspect Type 1 Reaction (stop increasing prednisone); if new lesions appear → may be Type 2 Reaction (ENL)" },
          { parameter: "Disability assessment (WHO Disability Grading)", frequency: "Baseline, monthly, end of MDT", target: "Grade 0 at end of MDT (no visible deformity). If Grade 1-2 at baseline → higher risk of relapse/complications.", escalation: "Grade 2 disability → more intensive monitoring, rehabilitation services" },
          { parameter: "Liver function test (AST, ALT)", frequency: "At baseline, 3 months, end of MDT", target: "Normal. Rifampicin is hepatotoxic.", escalation: "If AST/ALT >3x upper limit normal → reduce dose or switch regimen (rare)" },
          { parameter: "G6PD testing if not done", frequency: "Before starting dapsone", target: "Negative for G6PD deficiency", escalation: "If positive → avoid dapsone, use alternative regimen" },
          { parameter: "Adherence monitoring", frequency: "Monthly at clinic", target: "Take all 28 tablets (monthly blister pack)", escalation: "Non-adherence → risk of relapse, drug resistance, transmission" },
          { parameter: "Post-MDT surveillance", frequency: "Quarterly for 1 year, then annually for 5 years", target: "No new lesions, no relapse", escalation: "If new lesions after cure → may be relapse (rare) or new infection (reinfection)" },
        ],
        lifestyle: {
          dos: ["Take full MDT course (6 months for BT) without missing doses", "Wear protective footwear always (prevent foot ulcers)", "Inspect feet and hands daily for injuries", "Continue work (NOT occupational restriction — not infectious after 2 weeks MDT)", "Family members should take contact prophylaxis (single dose rifampicin)"],
          donts: ["Do NOT hide diagnosis — notifiable disease, helps elimination program", "Do NOT stop drugs early even if lesions fade (complete 6 months is essential)", "Do NOT marry/have children during MDT (drug teratogenicity, though risk low)", "Avoid trauma to anesthetic areas (risk of ulceration)"],
          indianSpecific: ["Get treatment from government NLEP clinic (free MDT and monitoring)", "Farmer can continue farming but wear gloves and footwear", "Attend monthly MDT review at district hospital/NLEP center", "Do NOT listen to local stigma — leprosy is curable in 6 months", "Inform family members for contact tracing (post-exposure prophylaxis may be needed)"],
        },
        followUp: {
          when: "Monthly during 6-month MDT course, then quarterly for 1 year post-cure, then annually for 5 years",
          what: ["Clinical assessment of lesions (fading expected by month 2-3)", "Disability grading", "Monitoring for Type 1 Reaction (neuritis, lesion erythema — can occur during or after MDT)", "Post-MDT surveillance to detect relapse"],
        },
        referral: {
          needed: true,
          to: "District Leprosy Elimination Program (DLEP) clinic for monthly MDT issue and monitoring",
          urgency: "URGENT — NLEP is the only reliable source of quality MDT (WHO-approved blister packs) in India",
        },
      },
      redFlags: [
        { flag: "Type 1 Reaction (Reversal Reaction) — sudden erythema, swelling, new lesions, neuritis during or after MDT", action: "Start high-dose prednisone 1mg/kg/day immediately to prevent permanent nerve damage. Taper slowly over 8-12 weeks.", urgency: "URGENT" },
        { flag: "Type 2 Reaction (ENL — Erythema Nodosum Leprosum) — raised tender nodules, neuritis, iritis, 6-12 months into or after MDT", action: "NOT steroids. Use thalidomide 100-300mg daily (strict teratogenicity precautions). Or prednisolone + NSAIDs. Refer to expert.", urgency: "URGENT" },
        { flag: "Progression of sensory loss to hand/foot drop (motor involvement)", action: "Suggests disease progression or reaction. Escalate to specialist. High risk of permanent disability.", urgency: "URGENT" },
        { flag: "Plantar ulceration (from anesthesia and repeated trauma)", action: "Specialized foot care. Topical antimicrobials. Risk of secondary infection and amputation if not managed. Refer to surgeon if deep ulcer.", urgency: "URGENT" },
        { flag: "Drug-resistant Hansen's disease (rare — worsening lesions despite 6-month MDT)", action: "Send smear for drug susceptibility testing. Refer to leprosy specialist. May need extended MDT (12-24 months).", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Hansen's disease has 5 types on Ridley-Jopling scale based on immune response: TT (tuberculoid) → BT → Mid → BL → LL (lepromatous). BT has good immunity, few lesions, few AFB.",
        "Positive lepromin test (Mitsuda) indicates good cell-mediated immunity — seen in TT and BT (tuberculoid spectrum). Negative in LL and BL (lepromatous spectrum).",
        "Skin slit smear with few AFB (1-5 per field) = paucibacillary (BT, TT, and midborderline). >6 AFB = multibacillary (BL, LL).",
        "Complete sensory loss within the lesion is pathognomonic for Hansen's disease. Normal sensation = NOT Hansen's.",
        "Rifampicin makes patient non-infectious within 2 weeks — patient can return to normal work/family activities after starting treatment.",
        "BT Hansen's: 6-month MDT course (Rifampicin + Dapsone + Ofloxacin); LL: 12-month course.",
        "Watch for Type 1 Reaction (reversal reaction) during MDT — erythema/swelling of lesions + neuritis. Treat with prednisone to prevent permanent nerve damage.",
        "NLEP in India provides FREE quality MDT (WHO-approved blister packs). Always refer to government DLEP clinic.",
        "NO occupational restriction — patient CAN work normally once on treatment.",
        "MASSIVE stigma around Hansen's in India — patient education and counseling essential for treatment adherence.",
      ],
      commonMistakes: [
        "Missing diagnosis and mistaking for vitiligo (vitiligo has NORMAL sensation; Hansen's has anesthesia)",
        "Not checking baseline sensory and motor function — hard to assess improvement without baseline",
        "Stopping MDT early (e.g., after 2-3 months when lesions fade) — must complete full 6 months to prevent relapse",
        "Not counseling patient that leprosy is NOT hereditary — family often rejects patient due to misconception",
        "Prescribing dapsone without G6PD testing — can cause severe hemolysis",
        "Not explaining that patient becomes non-infectious after 2 weeks — allows patient to return to normal life and work",
        "Missing Type 1 Reaction (reverse reaction) — if seen, must start prednisone immediately to prevent permanent nerve damage",
        "Not notifying NLEP/district leprosy program — affects elimination efforts and contact tracing",
      ],
      relevantHistoryQs: ["onset", "progression", "location_lesion", "sensory_change", "family_history_leprosy", "occupation", "endemic_area", "duration", "associated_symptoms"],
      relevantExamIds: ["skin_lesion_examination", "sensory_testing", "motor_examination", "nerve_palpation", "disability_grading", "general_appearance", "lymph_nodes"],
      difficulty: "MODERATE",
      estimatedMinutes: 22,
      subjectTags: ["DR", "CM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "DR2.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
