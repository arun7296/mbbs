// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for Physiology (PY)
// Focus: Acid-Base Physiology and Endocrine Physiology
// ---------------------------------------------------------------------------

export const physiologyScenarios = [
  // ─── 1. Diabetic Ketoacidosis (DKA) — Acid-Base & Glucose Physiology ──────
  {
    topicCode: "PY-MOD-03-TOP-01",
    scenario: {
      patientAge: 28,
      patientSex: "Female",
      patientOccupation: "IT professional",
      patientLocation: "Bangalore, Karnataka",
      chiefComplaint: "Severe abdominal pain, vomiting, and rapid breathing for 6 hours",
      historyOfPresent: `
- Onset: Sudden onset 6 hours ago while working at office
- Character: Severe epigastric and diffuse abdominal pain, non-radiating
- Associated: Persistent vomiting (4-5 episodes), unable to tolerate orally
- Breathing: Rapid, deep breathing (dyspnea), difficulty catching breath
- Fruity odor: Family reports sweet-smelling breath
- Recent illness: Dental infection 3 days ago — started on antibiotics but not improving
- Tiredness: Extreme fatigue and weakness
- Altered mental state: Slightly confused, difficulty concentrating
      `.trim(),
      pastHistory: "Type 1 Diabetes Mellitus diagnosed 5 years ago. Usually compliant with insulin (4-5 injections daily). No previous DKA. No other significant illness.",
      familyHistory: "Mother has Type 2 DM. No family history of Type 1 DM.",
      socialHistory: "Non-smoker, non-alcoholic. Works in IT — stressful job. Lives with family in Bangalore. Eats regular meals.",
      drugHistory: "Insulin glargine 20 units at night, insulin lispro with meals. Recently started Amoxicillin-Clavulanate for dental infection 3 days ago. No drug allergies.",
      vitals: { pulse: 128, bp: "92/58", temp: 38.2, rr: 36, spo2: 96 },
      generalExam: `
- General appearance: Acutely ill, toxic, restless, in distress
- Pallor: Present
- Icterus: Absent
- Cyanosis: Absent
- Dehydration: Marked — sunken eyes, dry mucous membranes, skin turgor >2 seconds
- Fruity odor: Acetone (ketone) breath odor evident
- Level of consciousness: Alert but confused — GCS 14/15 (disoriented to time)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Apex beat normal position",
          heart_sounds: "Tachycardic, S1 S2 normal. No murmurs.",
          peripheral_pulses: "Pulses weak, thready, tachycardic at 128",
          blood_pressure: "92/58 mmHg — orthostatic hypotension (sitting 92/58, lying 88/54)",
        },
        respiratory: {
          chest_inspection: "Rapid, deep breathing (Kussmaul respiration) — characteristic of metabolic acidosis",
          trachea: "Central",
          percussion: "Resonant bilaterally",
          auscultation_lungs: "Clear bilateral air entry. No added sounds.",
          vocal_resonance: "Normal bilaterally",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended",
          palpation_superficial: "Epigastric tenderness only, no rebound",
          palpation_deep: "No organomegaly",
          liver_palpation: "Liver not palpable",
          spleen_palpation: "Spleen not palpable",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "GCS 14/15 — disoriented to time, alert to place and person",
          cranial_nerves: "All intact",
          reflexes: "Normal and symmetrical",
          plantar: "Flexor bilaterally",
        },
      },
      availableInvestigations: [
        { id: "rbs", name: "Random Blood Sugar", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "RBS: 548 mg/dL", isAbnormal: true, interpretation: "Severely elevated blood glucose — hyperglycemia in DKA can be variable (200-1000+). This 548 is moderate but ketosis dominant.", isEssential: true },
        { id: "abg", name: "Arterial Blood Gas", cost: 800, turnaround: "15 min", category: "Biochemistry", result: "pH: 7.18, PaO2: 102 mmHg, PaCO2: 22 mmHg, HCO3: 8 mEq/L, SaO2: 98%, Lactate: 2.1", isAbnormal: true, interpretation: "Severe metabolic acidosis (pH 7.18) with respiratory compensation (low PaCO2 22). High anion gap metabolic acidosis — characteristic of DKA.", isEssential: true },
        { id: "rft", name: "Renal Function Test + Electrolytes", cost: 600, turnaround: "1 hour", category: "Biochemistry", result: "Na: 128 mEq/L (LOW — pseudohyponatremia from hyperglycemia), K: 6.2 mEq/L (HIGH — transcellular shift from acidosis), Cl: 102 mEq/L, Creatinine: 1.8 mg/dL (elevated from dehydration)", isAbnormal: true, interpretation: "Severe electrolyte derangements. High K+ despite total body K+ depletion (acidosis shifts K+ extracellular). Low Na from osmotic effect of glucose. Anion gap = 14.", isEssential: true },
        { id: "serum_ketones", name: "Serum Beta-hydroxybutyrate", cost: 1200, turnaround: "1 hour", category: "Biochemistry", result: "Beta-hydroxybutyrate: 6.8 mmol/L (Normal: <0.3)", isAbnormal: true, interpretation: "Markedly elevated — confirms significant ketosis. Beta-hydroxybutyrate is the predominant ketone in DKA.", isEssential: true },
        { id: "urine_ketones", name: "Urine Ketones", cost: 100, turnaround: "15 min", category: "Biochemistry", result: "Urine Ketones: 4+ (Large)", isAbnormal: true, interpretation: "Heavy ketonuria — confirms ketosis. May persist even after treatment starts (ketones continue to be filtered).", isEssential: true },
        { id: "glucose_urine", name: "Urine Glucose", cost: 100, turnaround: "15 min", category: "Biochemistry", result: "Urine Glucose: 4+ (Large)", isAbnormal: true, interpretation: "Glycosuria from hyperglycemia exceeding renal threshold (~180 mg/dL).", isEssential: false },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 14.2 g/dL, WBC: 18,900/μL (stress leukocytosis), Platelets: 3.2 lakhs", isAbnormal: true, interpretation: "Leukocytosis from stress response. Elevated Hb from hemoconcentration due to dehydration.", isEssential: true },
        { id: "insulin_level", name: "C-Peptide (to confirm Type 1 DM)", cost: 1500, turnaround: "2 hours", category: "Endocrine", result: "C-Peptide: <0.3 ng/mL (Normal fasting: 0.8-3.1)", isAbnormal: true, interpretation: "Low C-peptide confirms absent beta-cell function — Type 1 DM. Differentiates from Type 2 with DKA.", isEssential: false },
        { id: "amylase", name: "Serum Amylase", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Amylase: 210 U/L (Normal: <100)", isAbnormal: true, interpretation: "Mildly elevated amylase — can be elevated in DKA without acute pancreatitis (salivary gland source). Clinical exam shows no acute pancreatitis.", isEssential: false },
        { id: "infect_screen", name: "Blood Culture + Culture (from infection focus)", cost: 600, turnaround: "48-72 hours", category: "Microbiology", result: "Pending — important as infection can precipitate DKA", isAbnormal: false, interpretation: "Patient has dental infection which likely precipitated DKA. May grow oral flora.", isEssential: false },
      ],
      correctDiagnosis: "Diabetic Ketoacidosis (DKA) — Type 1 DM precipitated by infection (dental abscess)",
      differentials: [
        { diagnosis: "Hyperglycemic Hyperosmolar State (HHS)", likelihood: "LOW", reasoning: "HHS has higher glucose (usually >600), higher osmolality, minimal ketosis. Our patient has low pH (7.18), high anion gap, heavy ketonuria — classic DKA." },
        { diagnosis: "Alcoholic Ketoacidosis", likelihood: "LOW", reasoning: "No alcohol history. Patient is non-alcoholic IT professional. Anion gap and presentation fit DKA more than AKA." },
        { diagnosis: "Uremia (Acute Kidney Injury)", likelihood: "MEDIUM", reasoning: "Creatinine 1.8 could suggest AKI. But Cr elevation is from dehydration, not intrinsic renal disease. pH 7.18 with low HCO3 8 is metabolic, fitting DKA not primary uremia." },
        { diagnosis: "Acute Abdomen (Surgical)", likelihood: "LOW", reasoning: "Abdominal tenderness is diffuse epigastric only, no peritoneal signs, no surgical history. Likely from gastric irritation in DKA, not surgical pathology." },
      ],
      diagnosticReasoning: "28-year-old Type 1 diabetic woman presenting with classic DKA triad: (1) Severe hyperglycemia (548 mg/dL), (2) High anion gap metabolic acidosis (pH 7.18, HCO3 8, AG 14), (3) Ketonemia (beta-hydroxybutyrate 6.8) and ketonuria (4+). Kussmaul respiration (deep, rapid breathing) is pathognomonic — respiratory compensation for metabolic acidosis (low PaCO2 22). Fruity breath (acetone) from ketone metabolism. Severe dehydration (sunken eyes, weak pulses, orthostatic BP) and pseudohyponatremia (Na 128 from osmotic effect of glucose). K+ paradoxically HIGH (6.2) due to acidosis shifting K+ extracellularly, despite total body depletion. Precipitant: Recent dental infection (3 days) — infection increases counter-regulatory hormones (glucagon, epinephrine, cortisol) → increased lipolysis → ketone production and hyperglycemia. This is a classic physiology scenario linking infection → hormonal changes → metabolic derangements.",
      managementPlan: {
        immediateActions: [
          { action: "Establish IV access (2 large-bore lines) and start rapid normal saline infusion", reasoning: "Severe dehydration — total body fluid deficit 5-8 L. Initial resuscitation: 0.9% NaCl at 500-1000 mL/hr. Restores renal perfusion, improves insulin action.", priority: "STAT" },
          { action: "Start continuous IV insulin infusion immediately", reasoning: "Regular insulin 0.1 units/kg/hr IV (typically 10 units/hr). Insulin suppresses ketone production — most critical physiology intervention. Do NOT use IM or SC — absorption unpredictable in shock.", priority: "STAT" },
          { action: "Start cardiac monitoring and continuous pulse oximetry", reasoning: "High risk of hypokalemia and hyperkalemia during treatment. K+ will FALL during insulin treatment (K+ shifts back intracellularly). Must monitor for arrhythmias.", priority: "STAT" },
          { action: "Perform ECG immediately", reasoning: "Hyperkalemia (K+ 6.2) can cause peaked T waves, widened QRS. Need baseline before treatment.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Insulin (IV infusion)", examples: ["Regular Insulin 0.1 units/kg/hr IV continuous infusion"], route: "IV", duration: "Until pH >7.30, then switch to SC", reasoning: "Insulin is THE fundamental intervention in DKA physiology. It: (1) Inhibits lipolysis (stops ketone production), (2) Inhibits gluconeogenesis, (3) Shifts glucose and K+ intracellularly, (4) Activates glucose metabolism. Do NOT give bicarbonate unless pH <6.8 — insulin correction is key.", contraindications: ["None in DKA — insulin is life-saving"], indianContext: "Regular insulin vial (40 units/mL) costs ₹40-50 at Jan Aushadhi." },
          { drugClass: "IV Fluids", examples: ["0.9% Normal Saline initially, then 0.45% saline once glucose <250"], route: "IV", duration: "Continuous until rehydrated", reasoning: "Restores intravascular volume. Initial 0.9% NaCl for severe hypovolemia. Switch to 0.45% saline once glucose <250 to avoid hyperosmolality. Do NOT use dextrose-containing fluids until glucose drops.", contraindications: ["None — fluids are essential"], indianContext: "Normal saline IV bag 1L costs ₹30-50." },
          { drugClass: "Potassium replacement (IV)", examples: ["KCl 20-30 mEq in each 1L IV fluid bag once K+ <5.5 and urine output adequate"], route: "IV", duration: "Until K+ normal", reasoning: "Paradox of DKA: K+ appears HIGH (6.2) but total body is DEPLETED. Insulin causes K+ to shift intracellularly → K+ will CRASH. Must start K+ replacement early or risk severe hypokalemia. Monitor K+ every 2-4 hours initially.", contraindications: ["Anuria — hold K+ if no urine output until urine established"], indianContext: "KCl ampoule (1.5 mEq/mL) available at ₹20 per ampoule." },
          { drugClass: "Phosphate replacement (if severe hypophosphatemia)", examples: ["K2PO4 or NaH2PO4 if K+ <2.5 mEq/L"], route: "IV", duration: "Single dose if needed", reasoning: "Hypophosphatemia in DKA impairs cardiac and respiratory function. Not always needed but consider if PO4 <2.5.", contraindications: ["Hyperphosphatemia"], indianContext: "Phosphate ampoules not routinely available — refer to specialist center." },
          { drugClass: "Bicarbonate (RARELY — only if pH <6.8)", examples: ["3% NaHCO3 100 mL IV over 1 hour"], route: "IV", duration: "Single bolus if indicated", reasoning: "NOT standard in DKA — insulin + fluids correct acidosis naturally. Bicarbonate only if pH <6.8 (severe). Paradoxically, bicarbonate can worsen hypokalemia by shifting K+ intracellularly.", contraindications: ["pH >6.8 — absolutely contraindicated"], indianContext: "Sodium bicarbonate ampoules available at ₹30." },
        ],
        nonPharmacological: [
          { intervention: "NPO initially, then sips of water once nausea resolves", reasoning: "Vomiting risk. Once improved, light fluids to maintain oral intake.", duration: "First 6-12 hours" },
          { intervention: "Continuous close monitoring of vital signs and mental status", reasoning: "DKA is a medical emergency. Cerebral edema can develop — monitor for deteriorating consciousness.", duration: "First 24 hours in ICU" },
        ],
        monitoring: [
          { parameter: "Blood glucose", frequency: "Hourly until stable, then 2-4 hourly", target: "Target 150-200 mg/dL (drop by 50-75 mg/dL/hr). Do NOT drop too fast.", escalation: "If glucose drops >100 mg/dL/hr → reduce insulin rate. If <150 → add dextrose to IV fluids." },
          { parameter: "Serum pH and HCO3 (ABG)", frequency: "Every 2 hours until pH >7.30", target: "pH >7.30 indicates resolution of acidosis", escalation: "If pH worsening — increase insulin. If not improving — check compliance with insulin infusion." },
          { parameter: "Serum Potassium", frequency: "Every 2-4 hours initially, then every 6 hours", target: "K+ 3.5-5.5 mEq/L", escalation: "If K+ <2.5 → risk cardiac arrhythmia. If K+ >6 → risk peaked T waves. Adjust IV K+ replacement accordingly." },
          { parameter: "Anion gap", frequency: "Every 2 hours", target: "AG normalizes as ketones clear", escalation: "Persistent high AG → reassess — rule out concurrent lactic acidosis." },
          { parameter: "Urine output", frequency: "Hourly", target: ">0.5 mL/kg/hr", escalation: "If anuric — suspect acute kidney injury. May need central line for fluid management." },
        ],
        lifestyle: {
          dos: ["NEVER miss insulin injections — set phone reminders", "Carry insulin in insulated bag when traveling", "Check blood glucose 4 times daily", "Eat regular meals with carbohydrates", "Drink plenty of water (2-3 L/day)"],
          donts: ["Do NOT reduce insulin doses during illness (counter-intuitive but wrong) — increase monitoring instead", "Do NOT delay medical care if unwell — infection + Type 1 = DKA risk", "Do NOT use old/expired insulin", "No smoking — impairs wound healing in diabetics"],
          indianSpecific: ["Get a medical alert bracelet/locket stating 'Type 1 Diabetic' — critical in emergency", "Use glucose test strips from government diabetes programs (free/subsidized)", "Insulin storage: Keep at 4-8°C in refrigerator. Once open, use within 28 days. Keep cool bag during power cuts.", "In case of DKA: Go to nearest hospital with ICU — not primary health center. Call 108 or 102 (ambulance)."],
        },
        followUp: {
          when: "Discharge after 24-48 hours of IV therapy and once stable on SC insulin. Then 1 week, 2 weeks, then monthly.",
          what: ["Insulin dose review", "Education on sick day management", "Investigation of precipitant (dental follow-up in this case)", "Diabetes educator consultation", "Endocrinologist review"],
        },
        referral: {
          needed: true,
          to: "Endocrinologist for insulin management and DKA risk reduction",
          urgency: "IMMEDIATE admission to ICU/Hospital",
        },
      },
      redFlags: [
        { flag: "Altered consciousness / Coma", action: "Suspect cerebral edema — osmotic brain swelling from rapid glucose correction. Reduce insulin rate, slow glucose decline. Consider 3% NaCl.", urgency: "IMMEDIATE" },
        { flag: "Respiratory deterioration / Stridor", action: "Suspect aspiration or laryngeal edema. Airway assessment, consider intubation.", urgency: "IMMEDIATE" },
        { flag: "Cardiac arrhythmia (peaked T waves on ECG)", action: "Hyperkalemia — urgent dialysis or IV calcium gluconate 10 mL of 10% solution", urgency: "IMMEDIATE" },
        { flag: "Profound hypotension despite fluids", action: "Septic shock from underlying infection. Add vasopressors (noradrenaline). Escalate to ICU.", urgency: "IMMEDIATE" },
      ],
      keyLearningPoints: [
        "DKA physiology: Insulin deficiency → lipolysis increases → free fatty acids to liver → ketone bodies increase (beta-hydroxybutyrate, acetoacetate)",
        "High anion gap metabolic acidosis in DKA from ketones (acetoacetate) — NOT lactate",
        "Kussmaul respiration is respiratory compensation: ↓HCO3 → ↓pH → Central chemoreceptors stimulate breathing → ↓PaCO2 (respiratory compensation)",
        "Paradox: K+ appears HIGH but total body is DEPLETED. Acidosis shifts K+ out of cells (H+ shifts in). Insulin treatment causes K+ to shift intracellularly → hypoglycemia risk.",
        "NEVER give bicarbonate in DKA unless pH <6.8 — insulin + fluids naturally correct acidosis. Bicarbonate worsens hypokalemia.",
        "Glucose may NOT be markedly elevated in DKA (can be 200-300 in ketosis-dominant DKA) — do NOT exclude DKA if glucose only 200. Check pH and HCO3!",
        "DKA pathophysiology: Infection → counter-regulatory hormones (↑glucagon, ↑epinephrine, ↑cortisol) → lipolysis and ketone production",
      ],
      commonMistakes: [
        "Giving sodium bicarbonate — worsens hypokalemia. Only if pH <6.8 (which is rare).",
        "Not replacing potassium — insulin drops K+ but K+ replacement often forgotten until patient has arrhythmia.",
        "Insulin IM/SC in shock — must be IV. IM/SC absorption unpredictable in hypovolemia.",
        "Glucose drops too fast (>100 mg/dL/hr) — risk cerebral edema. Target 50-75 mg/dL/hr drop.",
        "Missing the infection precipitant — always search for infection (UTI, pneumonia, abscess, etc.) in DKA.",
        "Not counseling on sick day management — Type 1 patients MUST know to give insulin even when ill.",
      ],
      relevantHistoryQs: ["onset", "associated", "fruity_breath", "rapid_breathing", "prev_illness", "current_meds", "insulin_compliance", "infection"],
      relevantExamIds: ["general_appearance", "dehydration", "kussmaul_respiration", "heart_sounds", "blood_pressure", "mental_status"],
      difficulty: "HARD",
      estimatedMinutes: 25,
      subjectTags: ["PY", "OP"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "PY3.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 2. Addisonian Crisis — Adrenal Endocrine Physiology ─────────────────
  {
    topicCode: "PY-MOD-04-TOP-01",
    scenario: {
      patientAge: 42,
      patientSex: "Male",
      patientOccupation: "Factory supervisor",
      patientLocation: "Ahmedabad, Gujarat",
      chiefComplaint: "Severe weakness, vomiting, and confusion for 4 hours",
      historyOfPresent: `
- Onset: Acute onset 4 hours ago while at factory
- Character: Progressive weakness — could not stand or walk
- Vomiting: Persistent, 8-9 episodes, unable to retain even water
- Abdominal pain: Severe, diffuse, colicky
- Hyperpigmentation: Family reports patient's skin became darker over past 6 months (face, neck, hands, oral mucosa)
- Fatigue: Extreme tiredness for past 4-6 months, worsening recently
- Salt craving: Wife reports patient asking for extra salt on food repeatedly
- Recent stress: Witnessed serious accident at factory 1 week ago (psychological stress)
- Fever: Mild fever 37.8°C at home 2 days ago
      `.trim(),
      pastHistory: "No previous hospitalizations. No surgeries. No tuberculosis. Recently had respiratory infection 3 months ago. No previous history of hyperpigmentation or weight loss noted until 6 months ago.",
      familyHistory: "No family history of autoimmune diseases. Mother died of 'TB' at age 65. No known adrenal disease in family.",
      socialHistory: "Smokes 10 cigarettes/day. Occasional alcohol (weekend). Diet: Regular meals with preference for salty foods. Lives with wife and teenage children in Ahmedabad. Works at textile factory.",
      drugHistory: "Recently taken NSAIDs (Ibuprofen 400mg) for muscle pain 2 days ago. No regular medications. No allergies reported.",
      vitals: { pulse: 132, bp: "76/52", temp: 37.8, rr: 24, spo2: 97 },
      generalExam: `
- General appearance: Acutely ill, toxic, confused, lethargic
- Hyperpigmentation: Marked — dark brown/bronze skin on face, neck, forearms, dorsal hands. Hyperpigmentation of ORAL MUCOSA (buccal mucosa, hard palate) — pathognomonic
- Skin turgor: >2 seconds (severe dehydration)
- Pallor: Absence of pallor (dark pigmentation masks), but mucous membranes pale
- Icterus: Absent
- Cyanosis: Absent
- Edema: No pedal edema
- Mental status: Confused, disoriented to time, drowsy but arousable
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Normal position",
          heart_sounds: "Tachycardic, S1 S2 normal. No murmurs. Heart sounds quiet (suggest reduced cardiac output)",
          peripheral_pulses: "Very weak, thready, difficult to palpate. Tachycardic at 132, severely orthostatic.",
          blood_pressure: "Lying 76/52 mmHg (very low), Standing unable to stand (would collapse)",
        },
        respiratory: {
          chest_inspection: "Rapid, shallow breathing (tachypneic RR 24)",
          trachea: "Central",
          percussion: "Resonant bilaterally",
          auscultation_lungs: "Clear bilateral air entry. No added sounds.",
          vocal_resonance: "Normal",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended",
          palpation_superficial: "Diffuse tenderness, no peritoneal signs",
          palpation_deep: "No organomegaly",
          liver_palpation: "Liver not palpable",
          spleen_palpation: "Spleen not palpable",
          bowel_sounds: "Hyperactive initially, then diminishing",
        },
        neurological: {
          consciousness: "GCS 13/15 — disoriented to time, drowsy",
          cranial_nerves: "Grossly intact",
          reflexes: "Diminished (weakness)",
          plantar: "Flexor bilaterally",
        },
      },
      availableInvestigations: [
        { id: "rbs", name: "Random Blood Sugar", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "RBS: 62 mg/dL (LOW — normal is 70-100 fasting)", isAbnormal: true, interpretation: "Hypoglycemia — cortisol deficiency impairs gluconeogenesis. Cortisol normally antagonizes insulin and promotes glucose production.", isEssential: true },
        { id: "rft", name: "Renal Function Test + Electrolytes", cost: 600, turnaround: "1 hour", category: "Biochemistry", result: "Na: 118 mEq/L (SEVERE hyponatremia), K: 6.8 mEq/L (SEVERE hyperkalemia), Cl: 96 mEq/L, Creatinine: 1.9 mg/dL (elevated)", isAbnormal: true, interpretation: "Classic triad of Addison's crisis: HYPONATREMIA (Na 118) from aldosterone loss, HYPERKALEMIA (K 6.8) from aldosterone loss, and RENAL DYSFUNCTION from volume depletion. Aldosterone normally retains Na and excretes K.", isEssential: true },
        { id: "cortisol_morning", name: "Morning Plasma Cortisol (8 AM)", cost: 1500, turnaround: "2 hours", category: "Endocrine", result: "Cortisol: 2.2 μg/dL (Normal: 10-20 μg/dL in morning) — VERY LOW", isAbnormal: true, interpretation: "Cortisol deficiency is the hallmark of Addison's disease. Normal cortisol should be 10-20 μg/dL in morning, dropping to 3-5 in evening. This 2.2 is severely low.", isEssential: true },
        { id: "acth", name: "Plasma ACTH", cost: 2000, turnaround: "2 hours", category: "Endocrine", result: "ACTH: 285 pg/mL (Normal: 10-50 pg/mL) — VERY HIGH", isAbnormal: true, interpretation: "Elevated ACTH with low cortisol = PRIMARY adrenal insufficiency (Addison's disease). ACTH rises in negative feedback trying to stimulate failed adrenal glands. Proves adrenal pathology, not pituitary.", isEssential: true },
        { id: "tft", name: "Thyroid Function Test", cost: 600, turnaround: "2 hours", category: "Endocrine", result: "TSH: 8.2 mIU/L (upper normal), FT4: 0.8 ng/dL (low-normal)", isAbnormal: true, interpretation: "Subclinical hypothyroidism — autoimmune thyroiditis may coexist with autoimmune Addison's. Check anti-TPO antibodies.", isEssential: false },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 11.2 g/dL (mild anemia), WBC: 4,200/μL (RELATIVE LYMPHOCYTOSIS with normal neutrophils)", isAbnormal: true, interpretation: "Mild anemia common in chronic Addison's. Lymphocytosis (not leukocytosis as in other acute stress) is characteristic of adrenal insufficiency.", isEssential: true },
        { id: "calcium", name: "Serum Calcium", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Ionized Calcium: 4.2 mg/dL (Normal: 4.5-5.3 — LOW)", isAbnormal: true, interpretation: "Hypocalcemia from hypoalbuminemia (protein loss in adrenal insufficiency). Cortisol has catabolic effects — its deficiency causes protein loss.", isEssential: false },
        { id: "abg", name: "Arterial Blood Gas", cost: 800, turnaround: "15 min", category: "Biochemistry", result: "pH: 7.32, PaCO2: 30 mmHg, HCO3: 16 mEq/L", isAbnormal: true, interpretation: "Mild metabolic acidosis with respiratory compensation. From severe hyponatremia, hypoglycemia, and metabolic derangements.", isEssential: true },
        { id: "cortisol_stim", name: "Synacthen (ACTH) Stimulation Test (to confirm diagnosis)", cost: 2500, turnaround: "1 hour", category: "Endocrine", result: "Pre-stimulation: Cortisol 2.2 → Post-stimulation (30-60 min): Cortisol 2.8 μg/dL — MINIMAL RESPONSE (normal should rise to >20)", isAbnormal: true, interpretation: "Failed response to synthetic ACTH confirms primary adrenal insufficiency (destroyed/fibrotic adrenal glands cannot respond). Pituitary insufficiency would show response.", isEssential: false },
        { id: "autoimmune_abs", name: "21-Hydroxylase Autoantibodies", cost: 2000, turnaround: "2 hours", category: "Immunology", result: "Anti-21-OH antibodies: POSITIVE", isAbnormal: true, interpretation: "Confirms autoimmune etiology (Autoimmune Addison's is most common cause in iodine-sufficient regions like India). Indicates Hashimoto's or other autoimmune diseases may coexist.", isEssential: false },
      ],
      correctDiagnosis: "Addisonian Crisis (Acute Primary Adrenal Insufficiency) — likely autoimmune Addison's disease",
      differentials: [
        { diagnosis: "Septic Shock", likelihood: "MEDIUM", reasoning: "Fever, hypotension, tachycardia present. But no clear focus of infection. Hyperpigmentation and hyperkalemia point to Addison's. Blood culture would be negative." },
        { diagnosis: "Hypovolemic Shock (GI bleed or dehydration)", likelihood: "MEDIUM", reasoning: "Severe hypotension from vomiting. But hyperpigmentation and hyperkalemia are not explained by simple dehydration. ACTH and cortisol distinguish." },
        { diagnosis: "Acute Coronary Syndrome", likelihood: "LOW", reasoning: "Age 42, factory worker. Chest pain not prominent. No cardiac risk factors. Hyperpigmentation and electrolyte abnormalities not explained by ACS." },
        { diagnosis: "Myxedema Coma (severe hypothyroidism)", likelihood: "LOW", reasoning: "Can cause hypotension, confusion, hyponatremia. But TSH only 8.2 (subclinical), and hyperpigmentation with hyperkalemia point to Addison's." },
      ],
      diagnosticReasoning: "42-year-old man with acute onset severe weakness, confusion, hypotension (76/52), and tachycardia (132) in setting of 6-month progressive hyperpigmentation, fatigue, and salt craving. ACTH-INDEPENDENT hyperpigmentation (dark bronzing of exposed areas AND oral mucosa) is pathognomonic for Addison's disease. Mechanism: Loss of cortisol → loss of tonic inhibition on ACTH → ACTH rises markedly (285) → ACTH stimulates melanocytes via ACTH receptors on skin → hyperpigmentation. Lab findings confirm: LOW cortisol (2.2), HIGH ACTH (285), SEVERE HYPONATREMIA (118), SEVERE HYPERKALEMIA (6.8), HYPOGLYCEMIA (62). This represents PRIMARY adrenal insufficiency (adrenal glands destroyed). Physiology: Cortex has 3 zones — (1) Zona glomerulosa makes aldosterone, (2) Zona fasciculata makes cortisol, (3) Zona reticularis makes androgens. Loss of all three causes crisis. Stress (factory accident 1 week ago) may have unmasked chronic disease by precipitating acute decompensation. Autoimmune antibodies (21-OH positive) support autoimmune Addison's.",
      managementPlan: {
        immediateActions: [
          { action: "Start IV dextrose saline (5% dextrose in 0.9% normal saline) immediately", reasoning: "Patient has BOTH hypoglycemia (62) and severe hyponatremia (118) — cannot give free water (worsens hyponatremia). Dextrose saline corrects both. Rate: 500 mL over 15 min, then reassess.", priority: "STAT" },
          { action: "Start HIGH-DOSE IV hydrocortisone 100 mg immediately, then 50-100 mg every 6-8 hours", reasoning: "Cortisol deficiency is life-threatening. Hydrocortisone has both glucocorticoid AND mineralocorticoid activity (cortisone acetate has only glucocorticoid). In crisis, dose must be 5-10x normal to overcome shock physiology.", priority: "STAT" },
          { action: "Do NOT correct hyponatremia too rapidly", reasoning: "Severe chronic hyponatremia (118) has CNS adaptation. Rapid correction risks cerebral edema. Correct at <8 mEq/L/24 hours. Slow infusion is safer.", priority: "URGENT" },
          { action: "Establish continuous cardiac monitoring", reasoning: "Severe hyperkalemia (6.8) causes peaked T waves, risk of VF. Monitor ECG continuously.", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Glucocorticoid (Hydrocortisone IV)", examples: ["Hydrocortisone 100 mg IV at 0 min, then 50-100 mg IV every 6-8 hours"], route: "IV", duration: "Until stable, then switch to SC/PO", reasoning: "Hydrocortisone (cortisol) is the emergency steroid. Acute adrenal insufficiency is life-threatening. High IV doses replace deficient hormone. Restores cardiovascular tone, glucose homeostasis, and electrolyte balance. Mechanism: Cortisol increases catecholamine sensitivity (permissive effect), promotes gluconeogenesis, suppresses ACTH, restores renal water and electrolyte handling.", contraindications: ["None in adrenal crisis — cortisol is life-saving"], indianContext: "Hydrocortisone injection (100 mg/2 mL vial) costs ₹40-60 at Jan Aushadhi." },
          { drugClass: "Mineralocorticoid (Fludrocortisone — only if stable)", examples: ["Fludrocortisone 0.1 mg PO/NG — AFTER hydrocortisone started and acute phase over"], route: "Oral (via NG tube initially)", duration: "Lifelong maintenance", reasoning: "Aldosterone is deficient in primary adrenal insufficiency. Fludrocortisone retains Na+ and excretes K+. However, ONLY give AFTER IV hydrocortisone started — hydrocortisone has some mineralocorticoid activity. Do not give both IV hydrocortisone + fludrocortisone simultaneously until blood pressure stable.", contraindications: ["Hypokalemia already severe — correct K+ first"], indianContext: "Fludrocortisone 0.1 mg tablet costs ₹15-20." },
          { drugClass: "IV Fluids (5% Dextrose in 0.9% NaCl)", examples: ["500 mL bolus over 15 min, then continuous infusion 100 mL/hr"], route: "IV", duration: "Until hypotension and hypoglycemia corrected", reasoning: "Restores volume, corrects hypoglycemia. 5% dextrose + 0.9% saline is ideal — hypertonic saline (3%) avoided initially as it risks osmotic complications with severe chronic hyponatremia.", contraindications: ["Cardiogenic shock — use cautiously"], indianContext: "5% dextrose + saline IV bag 1L costs ₹60-80." },
          { drugClass: "Calcium Gluconate (if ECG changes from hyperkalemia)", examples: ["Calcium Gluconate 10 mL of 10% solution IV over 2-3 minutes"], route: "IV", duration: "Single bolus if peaked T waves on ECG", reasoning: "Calcium stabilizes cardiac myocyte membrane — antagonizes hyperkalemia effects. Does NOT lower K+ but protects heart from arrhythmias while other treatments (insulin, bicarbonate) lower K+.", contraindications: ["Digitalis toxicity (worsens)"], indianContext: "Calcium gluconate ampoule available at ₹20-30." },
          { drugClass: "Insulin + Dextrose (if severe hyperkalemia persists)", examples: ["Regular insulin 10 units IV + 25g dextrose (50 mL of 50% glucose) IV"], route: "IV", duration: "Single dose", reasoning: "Insulin drives K+ INTO cells (same physiology as in DKA). Combined with dextrose to avoid hypoglycemia. Lowers serum K+ by 0.5-1.2 mEq/L within 30 min.", contraindications: ["Already given dextrose saline"], indianContext: "Insulin available at ₹40 per vial." },
        ],
        nonPharmacological: [
          { intervention: "NPO initially (aspiration risk if confused), then light diet once improved", reasoning: "Acute phase requires IV fluids. Once stable and alert, oral fluids with salt.", duration: "First 12-24 hours" },
          { intervention: "Continuous monitoring of consciousness, BP, heart rate, urine output", reasoning: "Addisonian crisis is medical emergency. Monitor for response to treatment.", duration: "First 48 hours in ICU" },
        ],
        monitoring: [
          { parameter: "Blood pressure and heart rate", frequency: "Every 15 min until stable", target: "SBP >100, HR <100", escalation: "If BP remains <80 after 2L fluids + hydrocortisone → septic workup, consider ICU vasopressors" },
          { parameter: "Serum sodium", frequency: "Every 4-6 hours", target: "Increase by MAX 8 mEq/L/24 hours (to avoid osmotic demyelination)", escalation: "If Na rises >8 mEq/L in 24 hrs → restrict fluid, stop saline infusion" },
          { parameter: "Serum potassium", frequency: "Every 4 hours", target: "K+ 3.5-5.5 mEq/L", escalation: "If peaked T waves on ECG with K+ >6.5 → give calcium gluconate, then insulin + dextrose" },
          { parameter: "Blood glucose", frequency: "Hourly", target: ">70 mg/dL", escalation: "If glucose drops → increase dextrose infusion" },
          { parameter: "Urine output", frequency: "Hourly", target: ">0.5 mL/kg/hr", escalation: "If anuric → consider AKI, may need central line for aggressive fluid management" },
        ],
        lifestyle: {
          dos: ["Take glucocorticoid (hydrocortisone or prednisolone) EVERY DAY without fail", "Increase steroid dose during illness, stress, surgery (2-3x normal)", "Carry medical alert bracelet: 'Addison's Disease — needs steroid'", "Regular meals with adequate salt", "Annual follow-up with endocrinologist"],
          donts: ["NEVER abruptly stop steroids — causes adrenal crisis", "Do not reduce steroid dose without doctor consultation", "Avoid NSAIDs if possible (can precipitate crisis)", "Do not ignore symptoms of infection — see doctor immediately"],
          indianSpecific: ["Obtain free or subsidized steroids from government hospitals (hydrocortisone/prednisolone available in National List of Essential Medicines)", "Avoid 'natural' or 'herbal' remedies that claim to replace steroids — ineffective and dangerous", "If traveling in India, carry steroid prescription and emergency contact of endocrinologist", "Educate family members on signs of crisis — weakness, collapse, confusion. Call 108 ambulance immediately if occurs."],
        },
        followUp: {
          when: "1-2 weeks after discharge (steroid dose titration), then monthly for 3 months, then every 6 months",
          what: ["Clinical assessment of energy, symptoms", "Repeat serum sodium and potassium", "Ascertain adequate steroid dosing (clinical assessment, not just lab)", "Investigate cause of Addison's (TB? autoimmune? other?)", "Screen for other autoimmune diseases (thyroid, vitiligo)"],
        },
        referral: {
          needed: true,
          to: "Endocrinologist for long-term steroid management and monitoring",
          urgency: "IMMEDIATE ICU admission for acute phase",
        },
      },
      redFlags: [
        { flag: "Persistent hypotension despite 2L fluids + high-dose hydrocortisone", action: "Septic shock — blood culture, start broad-spectrum antibiotics, consider vasopressors (noradrenaline)", urgency: "IMMEDIATE" },
        { flag: "Peaked T waves on ECG despite calcium gluconate", action: "Severe hyperkalemia — give insulin 10 units IV + 25g dextrose", urgency: "IMMEDIATE" },
        { flag: "Rapid rise in serum sodium (>8 mEq/L in 24 hrs)", action: "Risk osmotic demyelination — stop saline, restrict fluids", urgency: "URGENT" },
        { flag: "Seizures or severe altered consciousness", action: "Cerebral edema from hyponatremia — consider hypertonic saline 3% if seizures, but slowly", urgency: "IMMEDIATE" },
      ],
      keyLearningPoints: [
        "Addison's disease = PRIMARY adrenal insufficiency (adrenal glands destroyed). ACTH high, Cortisol LOW.",
        "Hyperpigmentation in Addison's is PATHOGNOMONIC — from ACTH stimulation of melanocytes. Darkening of skin AND oral mucosa (buccal, hard palate).",
        "Classic lab triad: HYPONATREMIA (aldosterone loss), HYPERKALEMIA (aldosterone loss), HYPOGLYCEMIA (cortisol loss)",
        "Cortisol has THREE critical functions: (1) Permissive effect on catecholamines (maintains BP), (2) Gluconeogenesis (maintains glucose), (3) Immune suppression (prevents cytokine storm)",
        "Acute adrenal crisis is medical emergency — high-dose IV hydrocortisone is life-saving. Start empirically before confirming with labs if crisis suspected.",
        "Do NOT correct severe chronic hyponatremia rapidly — risk cerebral edema. Correct at <8 mEq/L per 24 hours.",
        "Hydrocortisone has both glucocorticoid AND mineralocorticoid effects — adequate hydrocortisone dose can maintain both glucose and electrolytes acutely.",
        "Autoimmune Addison's is most common cause in iodine-sufficient regions (India, USA, Europe). TB is second most common in India.",
      ],
      commonMistakes: [
        "Not recognizing Addisonian crisis — hyperpigmentation + hypotension + hyponatremia = think Addison's",
        "Delay in giving IV hydrocortisone while awaiting lab confirmation — empirical treatment saves lives",
        "Correcting hyponatremia too rapidly — osmotic demyelination syndrome is catastrophic",
        "Giving fludrocortisone in acute crisis — mineralocorticoid effects of IV hydrocortisone are sufficient",
        "Starting oral steroids instead of IV in crisis — IV hydrocortisone is essential for shock management",
        "Forgetting to educate patient on stress-dose steroids — patient must know to increase dose during illness/surgery",
        "Missing other autoimmune diseases — check TSH, anti-TPO, tissue transglutaminase (celiac), etc.",
      ],
      relevantHistoryQs: ["onset", "weakness", "vomiting", "hyperpigmentation", "salt_craving", "fatigue_duration", "stress_recent", "prev_illness"],
      relevantExamIds: ["hyperpigmentation_skin", "oral_hyperpigmentation", "blood_pressure", "orthostatic", "heart_sounds", "mental_status", "skin_turgor"],
      difficulty: "HARD",
      estimatedMinutes: 25,
      subjectTags: ["PY", "EN"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "PY4.2",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
