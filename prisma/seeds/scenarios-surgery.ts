// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for General Surgery (SU)
// Starting with 5 high-yield topics: ATLS, Thyroid, Burns, Trauma, Wound Healing
// ---------------------------------------------------------------------------

export const surgeryScenarios = [
  // ─── 1. ATLS & Primary Survey - Acute Abdomen → Appendicitis ────────────
  {
    topicCode: "SU-MOD-02-TOP-01",
    scenario: {
      patientAge: 30,
      patientSex: "Male",
      patientOccupation: "Software engineer",
      patientLocation: "Bangalore, Karnataka",
      chiefComplaint: "Severe abdominal pain for 18 hours with vomiting",
      historyOfPresent: `
- Onset: Sudden onset 18 hours ago while at work, sharp pain initially
- Character: Colicky pain that has now become continuous and severe
- Location: Started periumbilical, now localized to right iliac fossa (RIF)
- Severity: 8/10, worst pain of his life
- Timing: Constant, no relief with change of position
- Aggravating: Any movement, coughing, deep breathing
- Relieving: Lying still in flexed position gives minimal relief
- Associated: Vomiting 3-4 times, initially food then bilious. No fever initially, now feels warm. Constipated for 12 hours, no flatus. Loss of appetite.
      `.trim(),
      pastHistory: "No significant past illness. No previous abdominal surgeries. No chronic illness. No IBS or recurrent abdominal pain.",
      familyHistory: "No significant family history. No familial surgical conditions.",
      socialHistory: "Non-smoker, occasional alcohol (social). Vegetarian diet. Sedentary job (desk work). Lives with family in Bangalore.",
      drugHistory: "No regular medications. No allergies. Took antacid and paracetamol at home without relief.",
      vitals: { pulse: 102, bp: "132/82", temp: 38.2, rr: 20, spo2: 97 },
      generalExam: `
- General appearance: Acutely ill, anxious, restless, guarding abdomen
- Pallor: Mild pallor present
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema
- JVP: Normal
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. Tachycardic at 102.",
          peripheral_pulses: "All pulses palpable and equal bilaterally.",
          blood_pressure: "132/82 mmHg",
        },
        respiratory: {
          chest_inspection: "Equal bilateral chest movements, normal rate",
          auscultation_lungs: "Clear bilateral air entry. No added sounds.",
        },
        abdominal: {
          abdo_inspection: "Rigid in RIF region. Abdomen appears slightly distended. Visible peristaltic waves absent.",
          palpation_superficial: "Guarding and rigidity in RIF. Tenderness maximum over McBurney's point (1/3 distance from ASIS to umbilicus on right).",
          palpation_deep: "Rebound tenderness positive in RIF. Rovsing's sign positive (palpating left lower abdomen elicits pain in RIF). Psoas sign positive (pain on extending right hip).",
          liver_palpation: "Liver not palpable, normal span.",
          spleen_palpation: "Spleen not palpable.",
          bowel_sounds: "Absent/diminished bowel sounds — suggests peritonitis",
        },
        neurological: {
          consciousness: "GCS 15/15 — fully alert but distressed",
          cranial_nerves: "All grossly intact",
          reflexes: "Normal and symmetrical",
        },
      },
      availableInvestigations: [
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 13.4 g/dL, WBC: 16,800/μL (elevated with left shift — 78% neutrophils), Platelets: 3.2 lakhs", isAbnormal: true, interpretation: "Leukocytosis with left shift — consistent with acute bacterial infection (appendicitis).", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 38 mg/dL, Creatinine: 1.1 mg/dL, Na: 138 mEq/L, K: 4.0 mEq/L", isAbnormal: false, interpretation: "Normal renal function and electrolytes. Safe for surgery.", isEssential: true },
        { id: "lft", name: "Liver Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Bilirubin: 0.9 mg/dL, AST: 35 U/L, ALT: 38 U/L, ALP: 78 U/L", isAbnormal: false, interpretation: "Normal liver function.", isEssential: false },
        { id: "coag", name: "Coagulation Profile (PT/INR, aPTT)", cost: 400, turnaround: "1 hour", category: "Hematology", result: "PT: 12.5 sec, INR: 1.0, aPTT: 28 sec", isAbnormal: false, interpretation: "Normal coagulation — safe for surgery.", isEssential: true },
        { id: "chest_xray", name: "Chest X-ray (erect PA)", cost: 250, turnaround: "15 min", category: "Imaging", result: "No free air under diaphragm. Normal heart size. Clear lung fields. No pneumonia.", isAbnormal: false, interpretation: "No pneumoperitoneum — rules out perforation. Normal chest for anesthesia clearance.", isEssential: true },
        { id: "abdo_xray", name: "Abdominal X-ray (erect)", cost: 200, turnaround: "15 min", category: "Imaging", result: "Multiple dilated small bowel loops (>3cm diameter), fluid levels in stepladder pattern. No free air. Colonic gas absent.", isAbnormal: true, interpretation: "Signs of small bowel obstruction. Consistent with appendicitis causing reflex ileus.", isEssential: true },
        { id: "ultrasound", name: "Abdominal Ultrasound", cost: 1500, turnaround: "30 min", category: "Imaging", result: "Appendix identified in RIF — dilated (8mm diameter, >6mm is abnormal), thick-walled, noncompressible, surrounded by free fluid. No appendicolith. No free peritoneal fluid elsewhere. Bowel loops mildly dilated with fluid.", isAbnormal: true, interpretation: "Diagnostic for acute appendicitis. Dilated appendix with wall thickening is pathognomonic.", isEssential: true },
        { id: "ct_abdomen", name: "CT Abdomen & Pelvis (non-contrast)", cost: 4000, turnaround: "45 min", category: "Imaging", result: "Appendix 9mm diameter, hyperenhancing wall, surrounded by fat stranding and fluid. Localized peritonitis in right iliac fossa. Small bowel loops dilated. No abscess or perforation noted. No other abnormality.", isAbnormal: true, interpretation: "CT confirms acute appendicitis without complications. Excellent for surgical planning and ruling out other pathology.", isEssential: false },
        { id: "rbs", name: "Random Blood Sugar", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "RBS: 145 mg/dL", isAbnormal: true, interpretation: "Mild hyperglycemia — stress response to acute illness. Needs monitoring during anesthesia.", isEssential: false },
        { id: "amylase", name: "Serum Amylase", cost: 300, turnaround: "1 hour", category: "Biochemistry", result: "Amylase: 89 U/L (normal: <100)", isAbnormal: false, interpretation: "Normal — rules out pancreatitis.", isEssential: false },
      ],
      correctDiagnosis: "Acute Appendicitis without perforation",
      differentials: [
        { diagnosis: "Mesenteric Adenitis", likelihood: "MEDIUM", reasoning: "Viral infection causing inflamed mesenteric lymph nodes. Can present similarly but appendix would be normal on ultrasound/CT. Usually has prodrome of URI." },
        { diagnosis: "Gastroenteritis", likelihood: "LOW", reasoning: "No fever with onset. Diffuse colicky pain, not RIF localized. Appendix normal on imaging." },
        { diagnosis: "Renal/Ureteric colic", likelihood: "LOW", reasoning: "Hematuria would be present. Pain radiates to groin/genitalia. Non-tender abdomen on exam." },
        { diagnosis: "Perforated appendicitis with peritonitis", likelihood: "MEDIUM", reasoning: "Rigid abdomen with peritonitis signs present. But imaging shows no perforation or abscess — acute but not yet perforated." },
      ],
      diagnosticReasoning: "30-year-old male with acute onset severe RIF pain with migration from periumbilicus — classic history of appendicitis. Examination shows maximal tenderness at McBurney's point with Rovsing's sign, psoas sign, rebound tenderness — all classic for appendicitis. Leukocytosis with left shift supports bacterial infection. Ultrasound shows dilated thick-walled appendix — diagnostic. CT confirms diagnosis without complications. This is acute uncomplicated appendicitis requiring urgent surgical intervention.",
      managementPlan: {
        immediateActions: [
          { action: "Establish IV access × 2 large-bore cannulas (18G)", reasoning: "NPO status and need for IV fluids and antibiotics. Prepare for emergency surgery.", priority: "STAT" },
          { action: "Start IV Normal Saline 500mL bolus", reasoning: "Patient is mildly dehydrated (tachycardia, elevated urea). Fluid resuscitation before surgery.", priority: "STAT" },
          { action: "Keep patient NPO (nil per os)", reasoning: "Emergency surgery anticipated — prevent aspiration risk during anesthesia.", priority: "STAT" },
          { action: "Start empirical IV antibiotics", reasoning: "Prevent sepsis and surgical site infection. Start before surgery if possible.", priority: "URGENT" },
          { action: "Surgical consultation and urgent operative planning", reasoning: "Appendectomy is definitive treatment. Laparoscopic preferred if available and expertise present.", priority: "URGENT" },
          { action: "Pre-operative anesthesia evaluation", reasoning: "Assess fitness for surgery under general anesthesia.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Beta-lactam antibiotic (IV)", examples: ["Ceftriaxone 1g IV OD", "Amoxicillin-Clavulanate 1.2g IV TDS"], route: "IV", duration: "1-2 doses pre-op, then continue 5-7 days post-op", reasoning: "Covers gram-negative bacilli and anaerobes of gut flora. Prevents post-operative infection.", contraindications: ["Beta-lactam allergy — use Fluoroquinolone + Metronidazole"], indianContext: "Ceftriaxone 1g at ₹30-50, Amoxicillin-Clav 1.2g at ₹50-70 per dose." },
          { drugClass: "Anaerobic cover (add metronidazole)", examples: ["Metronidazole 400mg IV TDS"], route: "IV", duration: "Pre-op through 5-7 days post-op", reasoning: "Covers anaerobes (Bacteroides, Clostridium) from bowel flora to prevent gas gangrene and anastomotic leak.", contraindications: ["Disulfiram reaction if alcohol"], indianContext: "Metronidazole 400mg at ₹10-15 per dose." },
          { drugClass: "Analgesia (pre & post-op)", examples: ["Paracetamol 1g IV QID", "Tramadol 50mg IV/IM TDS (avoid pre-op if head injury suspected)"], route: "IV/IM", duration: "Before and after surgery", reasoning: "Pain relief. Post-op tramadol better than opioids for GI surgery (less ileus).", contraindications: ["Liver disease (paracetamol)"], indianContext: "Paracetamol 500mg at ₹3-5, Tramadol 50mg at ₹5-8 per injection." },
          { drugClass: "Antiemetic (pre-op & post-op)", examples: ["Ondansetron 4mg IV TDS"], route: "IV", duration: "Pre-op prophylaxis, post-op for 24-48 hours", reasoning: "Prevents post-operative nausea and vomiting — common with opioids and general anesthesia.", contraindications: ["QT prolongation"], indianContext: "Ondansetron 4mg at ₹30-50 per injection." },
        ],
        nonPharmacological: [
          { intervention: "Laparoscopic appendectomy preferred", reasoning: "Minimal access, faster recovery, less pain, lower wound infection. Open appendectomy if equipment/expertise unavailable.", duration: "30-60 minutes operative time" },
          { intervention: "Head elevation 30° pre-operatively", reasoning: "Improves comfort and respiratory mechanics during waiting period", duration: "Until operation" },
          { intervention: "Urinary catheterization (consider)", reasoning: "Monitor urine output during surgery and post-op phase", duration: "During and after surgery" },
        ],
        monitoring: [
          { parameter: "IV fluid balance", frequency: "Every 1-2 hours", target: "Urine output >0.5mL/kg/hr, normal BP and HR", escalation: "If oliguria — increase fluids, check electrolytes" },
          { parameter: "Post-operative vitals", frequency: "Every 15 min in PACU, then hourly", target: "Stable BP, HR <100, RR <24, SpO2 >95%", escalation: "If unstable — check for bleeding, sepsis, anesthetic complications" },
          { parameter: "Post-op temperature", frequency: "Every 4 hours", target: "No fever (T <37.5°C by 24 hrs)", escalation: "Fever >24 hrs post-op — review for anastomotic leak or abscess" },
          { parameter: "Drain output (if placed)", frequency: "Daily", target: "Clear serosanguinous fluid, amount <50mL/day", escalation: "Feculent or large volume — check for leak" },
        ],
        lifestyle: {
          dos: ["Complete antibiotic course (5-7 days post-op)", "Gradual return to activity — no heavy lifting for 4-6 weeks post-op", "Maintain good hygiene of surgical wound", "Resume diet gradually — start with liquids then soft diet"],
          donts: ["No strenuous activity/exercise for 6 weeks", "No heavy lifting or straining (avoid constipation)", "Avoid water/swimming until sutures removed (if open) or 2-3 weeks (if lap)", "No smoking near the surgical wound"],
          indianSpecific: ["Keep wound dry and clean — wash with mild soap and water after 48 hours if closed", "Avoid Indian spices and fried foods for 1 week — use bland diet (dal, rice, yogurt)", "Sleep with head elevated for first 3-4 days post-op", "Avoid sitting on hard surfaces for 1 week if open procedure"],
        },
        followUp: {
          when: "1-2 weeks for suture removal (if open), then 6 weeks for final wound check",
          what: ["Clinical assessment of wound healing", "Suture removal at 7-10 days (open) or dissolving sutures (lap)", "Assessment of return to activities", "Follow-up only if complications"],
        },
        referral: {
          needed: true,
          to: "Emergency surgical team / Surgeon for operative management",
          urgency: "IMMEDIATE — same day emergency surgery",
        },
      },
      redFlags: [
        { flag: "Signs of perforation: Increasing rigidity, decreased bowel sounds, systemic toxicity", action: "Suspect perforated appendix with peritonitis — emergency surgery with broader antibiotic coverage. IV fluids and electrolyte correction urgent.", urgency: "IMMEDIATE" },
        { flag: "Hemodynamic instability: Hypotension, tachycardia >120, altered sensorium", action: "Septic shock — aggressive resuscitation, ICU care, emergency surgery, broader antibiotics", urgency: "IMMEDIATE" },
        { flag: "Appendiceal abscess (fever persists, palpable mass)", action: "Consider percutaneous drainage first, then delayed appendectomy after antibiotics (6 weeks) — avoid spreading infection", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Classic history: pain migration from periumbilicus to RIF is pathognomonic for appendicitis",
        "McBurney's point (1/3 from ASIS to umbilicus) is point of maximal tenderness — site of appendiceal base",
        "Rovsing's sign (palpating left lower quadrant elicits RIF pain) is highly specific for appendicitis",
        "Psoas sign (pain on extending right hip) suggests appendix in retrocecal position",
        "Obturator sign (pain on internal rotation flexed hip) suggests pelvic appendix",
        "Ultrasound and CT are diagnostic modalities — appendix >6mm diameter, noncompressible, thick-walled is appendicitis",
        "Laparoscopic appendectomy is gold standard when equipment and expertise available — faster recovery, lower morbidity",
        "Even uncomplicated appendicitis needs emergency surgery within 12-24 hours — waiting increases perforation risk",
      ],
      commonMistakes: [
        "Delaying surgery while waiting for CT scan — clinical diagnosis with positive ultrasound is sufficient for surgery",
        "Using opioid analgesia before surgical evaluation — masks peritoneal signs. Use weak analgesics only.",
        "Not starting antibiotics pre-operatively — IV antibiotics within 1 hour of decision improves outcomes",
        "Missing diagnosis in young women — appendicitis must be differentiated from PID, ectopic pregnancy — get hCG",
        "Broad-spectrum antibiotics from start instead of targeted therapy — promotes resistance",
        "Not counseling on wound care — infection is most common post-op complication",
      ],
      relevantHistoryQs: ["onset", "character", "location", "radiation", "severity", "associated", "vomiting", "fever", "constipation", "prev_illness"],
      relevantExamIds: ["abdo_inspection", "palpation_superficial", "palpation_deep", "rebound_tenderness", "rovsing_sign", "psoas_sign", "bowel_sounds"],
      difficulty: "MODERATE",
      estimatedMinutes: 22,
      subjectTags: ["SU", "EM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "SU2.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 2. Thyroid Surgery → Papillary Thyroid Carcinoma ──────────────────
  {
    topicCode: "SU-MOD-03-TOP-01",
    scenario: {
      patientAge: 45,
      patientSex: "Female",
      patientOccupation: "Banker",
      patientLocation: "Mumbai, Maharashtra",
      chiefComplaint: "Painless neck swelling noticed 4 months ago with weight loss",
      historyOfPresent: `
- Onset: Gradual onset 4 months ago, first noticed while wearing high-neck dress
- Character: Single firm lump in anterior part of neck on right side. No fluctuance. No warmth. Non-tender on palpation.
- Associated: No dysphagia. No dyspnea. No hoarseness (voice normal). No difficulty swallowing. No pain. Occasional mild discomfort when lying down.
- Systemic: Weight loss 4 kg in 4 months. No fever. No night sweats. No fatigue but feels generally unwell.
- Risk: History of radiation exposure as a child (treated for hemangioma of face with X-ray at age 8).
      `.trim(),
      pastHistory: "No significant past illness. History of hemangioma on face treated with X-ray at age 8 (source of radiation). Regular menstrual cycles, no gynecological issues. No surgeries.",
      familyHistory: "No family history of thyroid disease. No family history of cancer. No familial polyp syndrome.",
      socialHistory: "Non-smoker, occasional alcohol (wine at social events). Vegetarian. Works as banker — sedentary. No occupational exposures. Lives in Mumbai.",
      drugHistory: "No regular medications. No thyroid medications. No contraceptives. No allergies.",
      vitals: { pulse: 78, bp: "120/80", temp: 37.0, rr: 16, spo2: 98 },
      generalExam: `
- General appearance: Well-built, appears generally unwell, no obvious distress
- Pallor: Mild pallor present
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema
- Lymph nodes: Right submandibular and anterior cervical nodes firm, 1-2 cm, non-tender
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. No murmurs.",
          peripheral_pulses: "All pulses normal, regular rate 78 bpm",
          blood_pressure: "120/80 mmHg",
        },
        respiratory: {
          auscultation_lungs: "Clear bilateral air entry. No added sounds.",
        },
        neck: {
          trachea: "Central. No deviation.",
          thyroid: "Thyroid gland palpable. Right lobe enlarged with single hard nodule (2×1.5cm), fixed to surrounding tissue, non-tender. Left lobe unremarkable. No bruit. Isthmus normal.",
          lymph_nodes: "Right anterior cervical nodes 1-2 cm, firm, multiple. Left side unremarkable.",
          voice: "Normal voice, no hoarseness. Able to swallow normally.",
          jaw_opening: "Normal.",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended",
          liver_palpation: "Not enlarged",
          spleen_palpation: "Not palpable",
        },
        neurological: {
          consciousness: "GCS 15/15",
          cranial_nerves: "CN X (vagus) — intact, normal phonation. CN XII (hypoglossal) — tongue midline.",
        },
      },
      availableInvestigations: [
        { id: "tsh", name: "Thyroid Stimulating Hormone (TSH)", cost: 300, turnaround: "2 hours", category: "Endocrinology", result: "TSH: 1.8 mIU/L (normal: 0.4-4.0)", isAbnormal: false, interpretation: "TSH normal — rules out primary thyroid dysfunction. Thyroid nodule is likely autonomous or malignant.", isEssential: true },
        { id: "free_t4", name: "Free T4", cost: 400, turnaround: "2 hours", category: "Endocrinology", result: "Free T4: 10.2 pmol/L (normal: 9-19)", isAbnormal: false, interpretation: "Normal free T4. No hyperthyroidism.", isEssential: false },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 11.8 g/dL (mild anemia), WBC: 7,200/μL (normal), Platelets: 2.0 lakhs (normal)", isAbnormal: true, interpretation: "Mild normocytic anemia — can be seen in malignancy. Normal WBC rules out infection/leukemia.", isEssential: false },
        { id: "fnac", name: "Fine Needle Aspiration Cytology (FNAC) of thyroid nodule", cost: 800, turnaround: "3-5 days", category: "Pathology", result: "FNAC Report: Bethesda Category V (Suspicious for Malignancy). Cellularity high. Crowded clusters of follicular cells with high N:C ratio. Irregular nuclear membranes. Some cells with clear nuclei (Orphan Annie-eye appearance). Mitoses seen.", isAbnormal: true, interpretation: "Bethesda V indicates 50-75% risk of malignancy. Suspicious for papillary thyroid carcinoma (PTC). Recommend thyroidectomy.", isEssential: true },
        { id: "ultrasound", name: "Thyroid Ultrasound with Doppler", cost: 1200, turnaround: "20 min", category: "Imaging", result: "Right thyroid lobe: Hypoechoic nodule 2×1.5 cm with irregular margins, taller-than-wide shape. Calcifications present (punctate). Increased vascularity on Doppler (suspicious for malignancy). Multiple hypoechoic lymph nodes in right anterior cervical chain (up to 1.5cm). Left lobe: unremarkable.", isAbnormal: true, interpretation: "Ultrasound features suspicious for malignancy. Taller-than-wide, irregular, hypoechoic, vascular nodule with cervical lymphadenopathy = PTC.", isEssential: true },
        { id: "ct_neck", name: "CT Neck with IV contrast", cost: 4500, turnaround: "1 hour", category: "Imaging", result: "Right thyroid nodule 2×1.5 cm with heterogeneous enhancement. Right central compartment (level VI) lymph nodes enlarged — largest 1.2 cm. No lateral cervical adenopathy. No tracheal displacement. No stridor sign. Vocal cords move bilaterally (adduction/abduction normal on phonation).", isAbnormal: true, interpretation: "CT confirms thyroid cancer with central compartment nodal disease. No airway compromise. Helps plan extent of surgery (total thyroidectomy + central neck dissection).", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 28 mg/dL, Creatinine: 0.9 mg/dL, Na: 140 mEq/L, K: 4.2 mEq/L", isAbnormal: false, interpretation: "Normal — safe for surgery.", isEssential: true },
        { id: "lft", name: "Liver Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Bilirubin: 0.8 mg/dL, AST: 32 U/L, ALT: 35 U/L, ALP: 74 U/L, Albumin: 3.8 g/dL", isAbnormal: false, interpretation: "Normal liver function.", isEssential: false },
        { id: "coag", name: "Coagulation Profile (PT/INR, aPTT)", cost: 400, turnaround: "1 hour", category: "Hematology", result: "PT: 13.2 sec, INR: 1.0, aPTT: 29 sec", isAbnormal: false, interpretation: "Normal — safe for surgery.", isEssential: true },
        { id: "chest_xray", name: "Chest X-ray (PA & lateral)", cost: 250, turnaround: "15 min", category: "Imaging", result: "Normal heart size. Clear lung fields bilaterally. No pleural effusion. No mediastinal widening. No rib lesions.", isAbnormal: false, interpretation: "No distant metastasis to lungs. Baseline for follow-up.", isEssential: true },
      ],
      correctDiagnosis: "Papillary Thyroid Carcinoma (PTC) with central compartment nodal involvement",
      differentials: [
        { diagnosis: "Follicular Thyroid Carcinoma", likelihood: "MEDIUM", reasoning: "FNAC Bethesda V is also suspicious for follicular pattern. However, PTC is more common (80% of thyroid cancers). FNAC cannot reliably distinguish between follicular adenoma and FTC (needs histology)." },
        { diagnosis: "Medullary Thyroid Carcinoma", likelihood: "LOW", reasoning: "MTC typically has elevated calcitonin. No family history of MTC. FNAC would show C-cell hyperplasia or MTC cells (different morphology)." },
        { diagnosis: "Benign Thyroid Nodule (Follicular Adenoma)", likelihood: "LOW", reasoning: "FNAC is Bethesda V — not benign (Bethesda II). Ultrasound features (taller-than-wide, irregular, vascular) favor malignancy." },
        { diagnosis: "Thyroiditis (Silent or Post-partum)", likelihood: "LOW", reasoning: "No recent pregnancy. TSH normal. FNAC not consistent with thyroiditis (no lymphocytic infiltration). Fixed hard nodule, not diffuse swelling." },
      ],
      diagnosticReasoning: "45-year-old female with history of childhood radiation exposure (hemangioma treated with X-ray) presenting with single firm right thyroid nodule and unintentional weight loss. Examination shows right thyroid nodule fixed to surrounding tissue with ipsilateral cervical lymphadenopathy — concerning for malignancy. Thyroid function normal (TSH, Free T4). FNAC shows Bethesda Category V (suspicious for malignancy) with features of papillary carcinoma. Ultrasound confirms suspicious features: hypoechoic, taller-than-wide, irregular margins, increased vascularity, with right cervical lymph node enlargement. CT neck confirms central compartment involvement. Overall clinical and radiological picture is consistent with Papillary Thyroid Carcinoma with nodal metastasis.",
      managementPlan: {
        immediateActions: [
          { action: "Surgical consultation with head & neck surgeon / Endocrine surgeon", reasoning: "PTC is confirmed — thyroidectomy is definitive treatment", priority: "URGENT" },
          { action: "Inform patient of diagnosis and discuss surgical options", reasoning: "Shared decision-making. Patient counseling on extent of surgery (lobectomy vs total thyroidectomy) and nodal dissection.", priority: "URGENT" },
          { action: "Arrange pre-operative anesthesia evaluation", reasoning: "Assess fitness for general anesthesia and airway (vocal cord function).", priority: "URGENT" },
          { action: "Schedule voice assessment (laryngoscopy)", reasoning: "Document vocal cord function before surgery — important for medicolegal documentation. Baseline for comparison post-op.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Antibiotics (prophylactic)", examples: ["Ceftriaxone 1g IV OD"], route: "IV", duration: "Single pre-op dose, or 24 hours post-op if prolonged surgery", reasoning: "Surgical site infection prophylaxis for clean-contaminated neck surgery. Single dose sufficient.", contraindications: ["Beta-lactam allergy — use Clindamycin 600mg IV"], indianContext: "Ceftriaxone at ₹30-50 per dose." },
          { drugClass: "Analgesia", examples: ["Paracetamol 1g PO/IV QID", "Tramadol 50mg IM/IV TDS if needed"], route: "PO/IV", duration: "48 hours post-op", reasoning: "Pain relief post-operatively. Opioids can cause nausea/vomiting after surgery.", contraindications: ["Liver disease"], indianContext: "Paracetamol at ₹3-5, Tramadol at ₹5-8 per dose." },
          { drugClass: "Levothyroxine (post-thyroidectomy)", examples: ["Levothyroxine 100-150 mcg PO OD starting 2 days post-op"], route: "Oral", duration: "Lifelong", reasoning: "Replacement therapy after total thyroidectomy. Also used for TSH suppression in thyroid cancer (target TSH <0.5 in PTC).", contraindications: ["None — adjust dose based on TSH levels"], indianContext: "Levothyroxine 50mcg at ₹2-3, 100mcg at ₹3-4 per tablet. Affordable in Jan Aushadhi." },
          { drugClass: "Calcium supplementation (if hypoparathyroidism develops)", examples: ["Calcium carbonate 1g TDS with Vitamin D3 1000 IU daily"], route: "Oral", duration: "If post-op hypocalcemia develops", reasoning: "Prevents hypocalcemic tetany from transient hypoparathyroidism (if parathyroid accidentally damaged). Check serum calcium post-op.", contraindications: ["Hypercalcemia"], indianContext: "Calcium + Vitamin D tablets widely available at ₹50-100 for 30 tablets." },
        ],
        nonPharmacological: [
          { intervention: "Total thyroidectomy with central compartment neck dissection", reasoning: "PTC with nodal metastasis needs: 1) Total thyroidectomy (removes remaining cancer risk), 2) Central compartment dissection (level VI lymph nodes involved). Left lobectomy alone insufficient.", duration: "90-120 minutes operative time" },
          { intervention: "Intraoperative nerve monitoring (if available)", reasoning: "Monitor recurrent laryngeal nerve (RLN) and external branch of superior laryngeal nerve (EBSLN) to prevent post-op vocal cord paralysis.", duration: "Throughout surgery" },
          { intervention: "Careful identification and preservation of parathyroid glands", reasoning: "Prevent permanent hypoparathyroidism (transient in 20-40%, permanent in 1-2%)", duration: "Throughout surgery" },
        ],
        monitoring: [
          { parameter: "Serum calcium and phosphate", frequency: "At 4 hours and 24 hours post-op", target: "Calcium >8.5 mg/dL, Phosphate normal", escalation: "If calcium <8.5 — give calcium supplementation IV/PO. Check parathyroid hormone level." },
          { parameter: "Drain output", frequency: "Every 4 hours, then daily", target: "Serous fluid, amount <50mL/day", escalation: "Bloody/large volume — check for bleeding. Feculent — unlikely in thyroidectomy." },
          { parameter: "Voice and vocal cords", frequency: "At 24 hours post-op and regularly", target: "No hoarseness. Normal phonation. Vocal cords move on laryngoscopy.", escalation: "Hoarseness — likely RLN injury (temporary usually). If bilateral paralysis — stridor, airway compromise." },
          { parameter: "Thyroid function (TSH, Free T4)", frequency: "At 4-6 weeks post-op", target: "Levothyroxine dose adjusted to keep TSH 0.1-0.5 mIU/L (TSH suppression goal in PTC)", escalation: "Adjust dose to achieve target TSH." },
        ],
        lifestyle: {
          dos: ["Take levothyroxine regularly on empty stomach (30 min before food)", "Attend follow-up appointments for thyroid function monitoring", "Radioactive iodine therapy if recommended", "Regular clinical examination of neck"],
          donts: ["No swimming/bathing for 5-7 days until sutures removed or waterproof dressing applied", "Avoid strenuous activity for 2 weeks", "No heavy lifting/straining for 4 weeks", "Avoid excessive salt intake if on levothyroxine (affects absorption)"],
          indianSpecific: ["Take levothyroxine on empty stomach — 30 min before tea/milk/food", "Do not take with iron or calcium supplements (space by 4 hours)", "Regular thyroid function tests needed — available at ₹300-500 for TSH+FT4", "Yoga and mild neck exercises allowed after 2 weeks", "Wear high-neck clothing/scarf if self-conscious about scar (scar fades in 6-12 months)"],
        },
        followUp: {
          when: "2 weeks (suture removal), 6 weeks (thyroid function), 3 months (surgeon review), then every 6 months for 5 years, then annually",
          what: ["TSH and Free T4 levels at 6 weeks, then every 3 months until stable", "Thyroglobulin level (marker for recurrence) at 3 months post-op and annually", "Ultrasound neck at 3-6 months to assess for lymph node recurrence", "CT chest if any suspicious findings to rule out lung metastasis"],
        },
        referral: {
          needed: true,
          to: "Endocrinologist for thyroid hormone management; Oncologist if RAI therapy planned",
          urgency: "URGENT — within 1 week of surgery",
        },
      },
      redFlags: [
        { flag: "Hoarseness/voice change post-op lasting >6 weeks", action: "Suspect permanent recurrent laryngeal nerve injury — may need voice therapy or medialization surgery", urgency: "URGENT" },
        { flag: "Stridor or airway compromise post-op", action: "Suspect bilateral vocal cord paralysis — emergency tracheostomy may be needed", urgency: "IMMEDIATE" },
        { flag: "Severe hypocalcemia (calcium <7.5, symptoms of tetany)", action: "IV calcium gluconate replacement urgently. Check PTH level. May indicate permanent hypoparathyroidism.", urgency: "IMMEDIATE" },
        { flag: "Rising thyroglobulin on follow-up", action: "Indicates cancer recurrence — may need repeat surgery, RAI, or external beam radiation", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Papillary Thyroid Carcinoma is the most common thyroid malignancy (80% of cases), has best prognosis (10-year survival >95%)",
        "History of radiation exposure (childhood X-ray, nuclear accident) is major risk factor for PTC",
        "Taller-than-wide, hypoechoic, vascular nodule with irregular margins on ultrasound = suspicious for malignancy",
        "FNAC Bethesda V = 50-75% risk of malignancy — thyroidectomy indicated even if not confirmed as cancer",
        "PTC with nodal involvement needs total thyroidectomy + central compartment neck dissection (not just lobectomy)",
        "Recurrent laryngeal nerve injury (hoarseness) and hypoparathyroidism (hypocalcemia) are main post-op morbidities — prevention is key",
        "Post-thyroidectomy: Levothyroxine needed lifelong with TSH monitoring. TSH suppression (0.1-0.5) to prevent cancer recurrence",
        "Follow-up: Thyroglobulin is tumor marker for recurrence — elevated levels warrant investigation (ultrasound, CT, possibly RAI)",
      ],
      commonMistakes: [
        "Lobectomy alone for PTC with nodal disease — needs total thyroidectomy to allow RAI and thyroglobulin monitoring",
        "Not documenting vocal cord function pre-op — makes it hard to prove RLN injury was intraoperative vs pre-existing",
        "Not identifying and preserving parathyroid glands — leads to permanent hypoparathyroidism",
        "Inadequate TSH suppression post-op — allows cancer recurrence. Target TSH <0.5 in PTC.",
        "Not checking thyroglobulin level — most sensitive marker for recurrence",
        "Starting levothyroxine same day as surgery — usually wait 2 days (risk of hyperthyroidism if thyroid hormone released from gland manipulation)",
      ],
      relevantHistoryQs: ["onset", "associated", "weight_loss", "radiation_exposure", "prev_illness", "fam_cancer", "current_meds", "occupation"],
      relevantExamIds: ["thyroid_nodule", "lymph_nodes", "trachea", "voice", "vocal_cords", "cn_vagus", "cn_hypoglossal"],
      difficulty: "MODERATE-HIGH",
      estimatedMinutes: 24,
      subjectTags: ["SU", "ON"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "SU3.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 3. Burns & Wound Management → Major Thermal Burns ────────────────
  {
    topicCode: "SU-MOD-01-TOP-05",
    scenario: {
      patientAge: 28,
      patientSex: "Female",
      patientOccupation: "Homemaker",
      patientLocation: "Indore, Madhya Pradesh",
      chiefComplaint: "Severe burns over body 1 hour ago from kitchen kerosene stove accident",
      historyOfPresent: `
- Onset: Sudden accident 1 hour ago at home while cooking
- Mechanism: Kerosene stove exploded while refilling, hot kerosene spilled over chest, abdomen, and bilateral lower limbs
- Character: Immediate severe pain and burning sensation
- Associated: Screamed immediately, rushed to hospital. Clothes caught fire briefly — burned some clothing. No inhalation injury suspected (fire was briefly outside home).
- Timeline: 1 hour elapsed time. Applied ice and water at home briefly. No traditional home remedies applied. In pain, anxious.
      `.trim(),
      pastHistory: "No significant past illness. No diabetes. No chronic liver or kidney disease. Fit and healthy. No previous surgeries.",
      familyHistory: "No significant family history.",
      socialHistory: "Homemaker. Married with 2 children. Non-smoker. Vegetarian. Lives in urban Indore.",
      drugHistory: "No medications. No allergies.",
      vitals: { pulse: 112, bp: "108/74", temp: 36.8, rr: 26, spo2: 98 },
      generalExam: `
- General appearance: Acute distress, pain, anxious, restless
- Consciousness: GCS 15/15
- Pallor: Apparent, normal at this stage
- Burns assessment:
  - Face: Erythema only (1st degree) — 1%
  - Chest and upper abdomen: Blistering, red, painful to touch (2nd degree partial thickness) — 15%
  - Lower abdomen and flanks: Charred, dark, painless to touch (3rd degree full thickness) — 10%
  - Bilateral thighs and shins: Blistering, patchy involvement (2nd degree) — 6%
  - Bilateral feet: Erythema (1st degree) — 3%
  - Total Body Surface Area (TBSA): ~30%
- Circumferential involvement: YES — chest and upper abdomen have circumferential burns (concern for eschar)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. Tachycardic at 112.",
          peripheral_pulses: "Radial pulses palpable bilaterally. Capillary refill <2 seconds peripherally.",
          blood_pressure: "108/74 mmHg — still normal at this early stage",
        },
        respiratory: {
          stridor: "Absent",
          auscultation_lungs: "Clear bilateral air entry. No smoke inhalation signs.",
          soot_in_mouth: "No soot in mouth or nose",
          singed_nasal_hair: "Absent",
        },
        abdominal: {
          inspection: "Abdomen part of burn area — cannot fully assess due to burn injury",
          palpation: "Deferred — painful",
        },
        extremities: {
          burns_assessment: "Already documented in general exam",
          peripheral_pulses: "Dorsalis pedis and posterior tibial pulses palpable on both sides",
        },
      },
      availableInvestigations: [
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 14.2 g/dL (normal, will increase with hemoconcentration), WBC: 8,400/μL (normal at this stage), Platelets: 2.1 lakhs", isAbnormal: false, interpretation: "Normal at presentation. Expect hemoconcentration (increased Hb) within 4-6 hours as intravascular fluid shifts out of circulation.", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 32 mg/dL, Creatinine: 0.8 mg/dL, Na: 138 mEq/L, K: 4.1 mEq/L", isAbnormal: false, interpretation: "Normal baseline. Monitor — will worsen with dehydration. Hyperkalemia may develop with deep burns (myoglobin release).", isEssential: true },
        { id: "blood_glucose", name: "Random Blood Sugar", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "RBS: 142 mg/dL", isAbnormal: true, interpretation: "Stress hyperglycemia from catecholamine release. Common in acute burn. Needs insulin if persistent.", isEssential: false },
        { id: "blood_gas", name: "Arterial Blood Gas", cost: 800, turnaround: "15 min", category: "Biochemistry", result: "pH: 7.38, PaO2: 95 mmHg, PaCO2: 38 mmHg, HCO3: 23 mEq/L, Base excess: 0, Lactate: 1.2 mmol/L", isAbnormal: false, interpretation: "Normal — good oxygenation and perfusion at 1 hour. Lactate normal. Will monitor for metabolic acidosis with burn progression.", isEssential: true },
        { id: "carboxyhemoglobin", name: "Carboxyhemoglobin (COHb)", cost: 600, turnaround: "30 min", category: "Biochemistry", result: "COHb: 2% (normal: <3%)", isAbnormal: false, interpretation: "Normal — no significant carbon monoxide poisoning. Inhalation injury unlikely.", isEssential: false },
        { id: "chest_xray", name: "Chest X-ray (PA)", cost: 250, turnaround: "15 min", category: "Imaging", result: "Normal heart size. Clear lung fields. No evidence of inhalation injury (no edema, infiltrates). No pneumothorax.", isAbnormal: false, interpretation: "Rules out inhalation injury. Good baseline for follow-up.", isEssential: true },
        { id: "ecg", name: "12-lead ECG", cost: 200, turnaround: "10 min", category: "Cardiac", result: "Sinus tachycardia at 112 bpm. Normal axis. Normal intervals. No ST changes. No T wave inversions.", isAbnormal: true, interpretation: "Sinus tachycardia appropriate for burns. No acute cardiac injury. Baseline for monitoring.", isEssential: false },
        { id: "coag", name: "Coagulation Profile (PT/INR, aPTT)", cost: 400, turnaround: "1 hour", category: "Hematology", result: "PT: 12.6 sec, INR: 1.0, aPTT: 28 sec", isAbnormal: false, interpretation: "Normal coagulation at baseline. DIC may develop with extensive burns — monitor.", isEssential: true },
        { id: "urine", name: "Urinalysis", cost: 100, turnaround: "30 min", category: "Biochemistry", result: "Color: Dark brown/tea-colored (myoglobinuria), Protein: +1, RBC: Negative, WBC: Negative", isAbnormal: true, interpretation: "Myoglobinuria from muscle injury. Risk of acute kidney injury — aggressive hydration needed.", isEssential: true },
        { id: "urine_myoglobin", name: "Urine Myoglobin or Urine Creatine Kinase", cost: 500, turnaround: "2 hours", category: "Biochemistry", result: "Urine Myoglobin: Positive (high concentration)", isAbnormal: true, interpretation: "Confirms rhabdomyolysis — myoglobin in urine precipitates in acidic renal tubules causing acute tubular necrosis. Aggressive IV fluids needed to maintain urine output >200mL/hr.", isEssential: true },
      ],
      correctDiagnosis: "Major Thermal Burns — 30% TBSA (20% 2nd degree, 10% 3rd degree) with circumferential chest involvement. Risk of hypovolemic shock, inhalation injury (ruled out), rhabdomyolysis, and compartment syndrome.",
      differentials: [
        { diagnosis: "Inhalation injury (smoke/CO)", likelihood: "LOW", reasoning: "No soot in airway, SpO2 normal (98%), COHb normal (2%), CXR clear. Accident was brief with stove outside home." },
        { diagnosis: "Chemical burn (if kerosene considered chemical)", likelihood: "HIGH", reasoning: "Kerosene IS a chemical agent. Thermal + chemical burn = more severe injury than thermal alone. Requires different initial management." },
        { diagnosis: "Rhabdomyolysis without significant burns", likelihood: "LOW", reasoning: "Burns are extensive (30% TBSA). Rhabdomyolysis is secondary to deep burn injury (3rd degree muscle damage)." },
      ],
      diagnosticReasoning: "28-year-old female with major thermal burn injury from kerosene stove accident 1 hour ago. Extent: 30% TBSA comprising 20% 2nd-degree partial thickness burns (chest, abdomen, thighs) and 10% 3rd-degree full-thickness burns (lower abdomen, flanks). Circumferential chest involvement raises concern for restrictive chest wall eschar. Early vital signs relatively stable (BP 108/74, HR 112) but tachycardia present indicating early compensation. No inhalation injury (COHb normal, CXR clear). Dark urine indicates myoglobinuria — rhabdomyolysis present. This is a major burn requiring ICU admission, fluid resuscitation (Parkland formula), monitoring for fluid shifts, and preparation for escharotomy if circumferential full-thickness burns limit chest expansion.",
      managementPlan: {
        immediateActions: [
          { action: "Stop the burning — remove patient from heat source and any burning clothing", reasoning: "Prevent continued thermal injury", priority: "STAT" },
          { action: "Establish large-bore IV access × 2 (18G or larger)", reasoning: "Rapid fluid resuscitation is critical in major burns", priority: "STAT" },
          { action: "Start aggressive IV fluid resuscitation using Parkland Formula", reasoning: "Prevent hypovolemic shock from massive fluid shifts (30% TBSA loses significant intravascular fluid)", priority: "STAT" },
          { action: "Calculate fluid requirement: Parkland Formula = 4mL × %TBSA × weight(kg)", reasoning: "For 30% TBSA, 70kg female: 4 × 30 × 70 = 8400mL over 24 hours. Give HALF in first 8 hours = 4200mL (525mL/hr). Use Lactated Ringer's.", priority: "STAT" },
          { action: "Insert urinary catheter and measure hourly output", reasoning: "Monitor urine output to titrate fluids. Goal: 0.5-1mL/kg/hr. Dark urine suggests myoglobin — may need 200mL/hr until clear.", priority: "STAT" },
          { action: "Cover burns with clean dry sheets (no ice, no traditional remedies)", reasoning: "Prevent infection and heat loss. Avoid topical agents initially in ED.", priority: "URGENT" },
          { action: "Assess airway — look for inhalation injury signs", reasoning: "Intubate if evidence of inhalation (soot, stridor, hoarseness, carbonaceous sputum)", priority: "URGENT" },
          { action: "Admit to burn unit/ICU", reasoning: "30% TBSA is major burn requiring intensive monitoring", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "IV fluids — Resuscitation", examples: ["Lactated Ringer's (not normal saline) — Parkland Formula = 4mL × %TBSA × weight(kg)"], route: "IV", duration: "First 24 hours, then reassess based on urine output and vitals", reasoning: "LR is preferred (contains K, has balanced electrolytes) over NS (causes hyperchloremic acidosis). Parkland Formula calculates total fluid for 24 hrs. Give HALF in first 8 hours, remainder over next 16 hours. Titrate to urine output (0.5-1mL/kg/hr, or 200mL/hr if myoglobinuria).", contraindications: ["Over-resuscitation causes burn edema, compartment syndrome — titrate carefully"], indianContext: "LR IV solutions available at ₹40-60 per 500mL bottle. ICU burn unit essential." },
          { drugClass: "Analgesia", examples: ["Morphine 2-5mg IV 15 minutes before dressing changes", "Paracetamol 1g IV QID for background pain"], route: "IV", duration: "Throughout acute phase (2-4 weeks)", reasoning: "Severe pain. Give IV opioids before dressing changes (are very painful). Background acetaminophen for baseline.", contraindications: ["Respiratory depression — monitor closely"], indianContext: "Morphine 5mg at ₹20-30 per injection. Paracetamol at ₹3-5." },
          { drugClass: "Antibiotic (topical for burns)", examples: ["Silver sulfadiazine 1% cream OR Mafenide acetate cream"], route: "Topical", duration: "Applied daily with dressing changes until re-epithelialization", reasoning: "Prevent burn wound infection. Most common cause of death in major burns is infection (sepsis). Silver sulfadiazine is standard — apply 2-3mm thickness daily after dressing changes.", contraindications: ["Sulfonamide allergy (silver sulfadiazine) — use mafenide or povidone-iodine"], indianContext: "Silver sulfadiazine 500g jar at ₹500-800. Essential for burn care." },
          { drugClass: "Antibiotics (systemic)", examples: ["Ceftriaxone 1g IV TDS", "Ciprofloxacin 500mg IV BD"], route: "IV", duration: "Only if signs of infection (not prophylactic) — avoid unnecessary antibiotics", reasoning: "Only start if clinical evidence of infection (increasing HR, fever, positive blood cultures). Prophylactic systemic antibiotics increase resistance and are NOT recommended.", contraindications: ["None — use only if infection present"], indianContext: "Ceftriaxone at ₹30-50, Ciprofloxacin at ₹30-40 per dose." },
          { drugClass: "Insulin (for stress hyperglycemia)", examples: ["Insulin infusion titrated to glucose target <180 mg/dL"], route: "IV continuous", duration: "While glucose >180 mg/dL", reasoning: "Stress hyperglycemia (RBS 142) will worsen. Tight glycemic control (target <180) improves outcomes. Hyperglycemia impairs wound healing.", contraindications: ["Hypoglycemia — check glucose 4-6 hourly"], indianContext: "Insulin injection available widely." },
          { drugClass: "Sodium bicarbonate (if myoglobinuria with aciduria)", examples: ["NaHCO3 50-100mEq/L added to IV fluids to alkalinize urine"], route: "IV", duration: "Until urine clear and myoglobin negative", reasoning: "Myoglobin precipitates in acidic urine → acute kidney injury. Alkaline urine (target pH >6.5) keeps myoglobin soluble. Continue until urine clear.", contraindications: ["Hypokalemia — correct K+ first"], indianContext: "IV NaHCO3 available in hospital settings." },
        ],
        nonPharmacological: [
          { intervention: "Escharotomy — surgical incision of full-thickness burn eschar", reasoning: "Circumferential full-thickness burns restrict chest wall movement and limb circulation. Escharotomy relieves restriction and restores blood flow. Performed without anesthesia (burn wound is insensate). Incisions made along long axis of extremities or in midline of chest/abdomen.", duration: "First 24-48 hours if signs of circulatory compromise (diminished pulses, cool extremity, pain) or respiratory compromise (unable to expand chest wall)" },
          { intervention: "Dressing changes with topical antibiotics", reasoning: "Daily cleaning of burn wound with soap and water, removal of devitalized tissue, application of topical antibiotics (silver sulfadiazine), and sterile dressing. Prevents infection (the #1 complication).", duration: "Daily for 2-4 weeks until epithelialization" },
          { intervention: "Elevation of burned extremities", reasoning: "Reduce edema and maintain circulation", duration: "Continuous" },
          { intervention: "Early enteral nutrition", reasoning: "Hypermetabolic state post-burn. High-protein, high-calorie diet needed for wound healing. Feedings should start early (within 24 hours) via NG tube if unable to eat.", duration: "Throughout acute phase" },
        ],
        monitoring: [
          { parameter: "Urine output", frequency: "Hourly", target: "0.5-1mL/kg/hr (35-70mL/hr for 70kg), or 200mL/hr if myoglobinuria", escalation: "If <target urine output — increase IV fluids. If >target — decrease fluids (risk of pulmonary edema, ARDS)" },
          { parameter: "Vital signs", frequency: "Every 30 min initially, then every 2-4 hours", target: "HR 100-120, SBP >90 (avoid excessive fluid causing shock)", escalation: "Worsening tachycardia/hypotension despite fluids — think sepsis, internal bleeding, arrhythmia" },
          { parameter: "Body temperature", frequency: "Every 4 hours", target: "Normothermia (maintain 37°C) — cover patient to prevent heat loss", escalation: "Hypothermia — major risk with large burns and fluid resuscitation" },
          { parameter: "Serum electrolytes (Na, K, Cl, HCO3)", frequency: "Every 4-6 hours initially, then daily", target: "Na 135-145, K 3.5-5.0, Cl normal, HCO3 >20", escalation: "Hyperkalemia from myoglobin release — monitor ECG, give calcium gluconate if peaked T waves" },
          { parameter: "Hemoglobin and hematocrit", frequency: "Every 6-12 hours", target: "Hb 8-10 g/dL (mild hemodilution acceptable), Hct <30%", escalation: "Over-resuscitation causes hemodilution. Under-resuscitation causes hemoconcentration (Hb >15) → thrombosis" },
          { parameter: "Myoglobin/myoglobinuria", frequency: "Every 4 hours initially until clear", target: "Urine clears from dark brown to normal", escalation: "Persistent myoglobinuria — increase fluids to 200+mL/hr, give sodium bicarbonate" },
          { parameter: "Blood glucose", frequency: "Every 4-6 hours initially", target: "<180 mg/dL", escalation: "Hyperglycemia — give insulin infusion" },
        ],
        lifestyle: {
          dos: ["High-protein diet when able to eat (eggs, dal, fish, meat for healing)", "Drink plenty of water once able (after acute phase)", "Physical therapy and occupational therapy during healing (prevent contractures)", "Pressure garments after epithelialization (prevent hypertrophic scarring)"],
          donts: ["No exposure of burn wound to dirty environment until healed", "No sunlight on healing burn for 1-2 years (can cause hyperpigmentation)", "No smoking or alcohol (impair wound healing)", "Avoid infection — maintain sterility with burn dressings"],
          indianSpecific: ["Avoid traditional remedies (turmeric paste, oil, ash) — these are NOT sterile and increase infection risk", "Diet: dal, rice, ghee, milk, eggs — high-calorie, high-protein foods easily available", "During healing, eat boiled vegetables, fruits (oranges, guava) — vitamin C for collagen synthesis", "Use sunscreen SPF 50+ on healed areas for 1-2 years", "Wear cotton loose clothing initially to avoid friction on dressing"],
        },
        followUp: {
          when: "Daily while hospitalized (2-4 weeks), then weekly for 3 months, then monthly for 6-12 months",
          what: ["Monitor wound healing progression", "Screen for infection (signs: increased pain, fever, foul-smelling discharge)", "Assess for contracture development (especially around joints)", "Monitor for hypertrophic scars — may need pressure garments, silicone sheets, or scar revision surgery"],
        },
        referral: {
          needed: true,
          to: "Dedicated burn unit/center (if not available at current hospital)",
          urgency: "IMMEDIATE — major burns (>20% TBSA) require specialized burn care",
        },
      },
      redFlags: [
        { flag: "Circumferential full-thickness burn causing respiratory compromise (unable to expand chest)", action: "Emergency escharotomy — incisions made along chest wall to relieve restriction and allow breathing", urgency: "IMMEDIATE" },
        { flag: "Circumferential burn of extremity with diminished pulses and cool limb", action: "Emergency escharotomy of extremity — restore circulation to prevent gangrene and amputation", urgency: "IMMEDIATE" },
        { flag: "Acute compartment syndrome (pain out of proportion, paresthesias, diminished pulses despite escharotomy)", action: "Fasciotomy — deeper than escharotomy to release fascia compressing muscle", urgency: "IMMEDIATE" },
        { flag: "Severe hyperkalemia (peaked T waves on ECG, cardiac arrhythmia)", action: "IV calcium gluconate, insulin + dextrose, sodium bicarbonate — risk of cardiac arrest from myoglobin-induced hyperkalemia", urgency: "IMMEDIATE" },
        { flag: "Burn wound infection/sepsis (fever >38.5°C, tachycardia >130, altered mental status, rapid eschar progression)", action: "Blood cultures, broad-spectrum antibiotics, aggressive wound care/debridement, consider early excision and grafting", urgency: "URGENT" },
        { flag: "Inhalation injury (soot in airway, stridor, hoarseness, carbonaceous sputum, altered ABG)", action: "Intubation, oxygen, humidified air, consider bronchoscopy. High mortality.", urgency: "IMMEDIATE" },
      ],
      keyLearningPoints: [
        "30% TBSA is a MAJOR burn requiring ICU/burn unit admission — mortality increases significantly above 20% TBSA in >40 years, >10% TBSA in <10 years",
        "Parkland Formula: 4mL × %TBSA × weight(kg) = total fluid for 24 hours. Give HALF in first 8 hours, remainder over next 16 hours. Titrate to urine output (0.5-1mL/kg/hr).",
        "Lactated Ringer's is preferred fluid, NOT normal saline (causes hyperchloremic acidosis)",
        "Myoglobinuria (dark urine) = rhabdomyolysis = acute kidney injury risk. Aggressive fluids (200mL/hr) + sodium bicarbonate to alkalinize urine (target pH >6.5) prevents myoglobin precipitation in renal tubules.",
        "Circumferential full-thickness burns cause eschar — restricts chest (respiratory compromise) or limb (vascular compromise). Escharotomy is EMERGENCY procedure to restore function/circulation.",
        "Avoid prophylactic systemic antibiotics — increase resistance. Use only if clinical infection present. Topical antibiotics (silver sulfadiazine) are standard.",
        "Infection (sepsis) is the #1 cause of death in major burns — prevent with strict burn wound care, dressing changes, topical antibiotics, early excision and grafting.",
        "Hypothermia is common with massive burns and fluid resuscitation — cover patient, maintain warm environment.",
      ],
      commonMistakes: [
        "Using normal saline instead of Lactated Ringer's — causes hyperchloremic acidosis",
        "Under-resuscitation (dehydration) — leads to shock, acute kidney injury, multi-organ failure",
        "Over-resuscitation — leads to pulmonary edema, ARDS, burn edema obscuring burn depth, compartment syndrome",
        "Missing inhalation injury — high mortality if not recognized early (intubate early if suspected)",
        "Topical ointments applied early (oil, ghee, turmeric) — not sterile, cause infection, interfere with wound assessment",
        "Prophylactic broad-spectrum antibiotics — encourage resistance. Only use if infection present.",
        "Delaying escharotomy for circumferential burns — limb loss or respiratory failure can occur rapidly",
        "Not giving analgesia before dressing changes — severe pain worsens outcomes. Give morphine 15 min before changes.",
      ],
      relevantHistoryQs: ["onset", "mechanism", "location", "time_elapsed", "associated", "inhalation_suspicion", "airway_symptoms"],
      relevantExamIds: ["burn_assessment_tbsa", "burn_depth", "circumferential_burns", "airway_examination", "pulse_check", "stridor", "soot_evidence"],
      difficulty: "HIGH",
      estimatedMinutes: 30,
      subjectTags: ["SU", "EM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "SU1.5",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 4. Chest & Abdominal Trauma → Intestinal Obstruction ───────────────
  {
    topicCode: "SU-MOD-02-TOP-03",
    scenario: {
      patientAge: 60,
      patientSex: "Male",
      patientOccupation: "Retired government officer",
      patientLocation: "Delhi",
      chiefComplaint: "Abdominal pain with vomiting and constipation for 48 hours",
      historyOfPresent: `
- Onset: Gradual onset 48 hours ago with mild abdominal discomfort after meals
- Character: Colicky pain initially (comes and goes), now becoming continuous
- Location: Periumbilical, radiating to lower abdomen
- Severity: Initially 4/10, now 7/10
- Timing: Waves of severe pain every 30 min lasting 2-3 min
- Associated: Vomiting 8-10 times, initially food content, now bilious (greenish). Severe constipation — no bowel movement for 48 hours. No flatus for 24 hours. Abdominal distension (abdomen looks bloated).
- History of surgery: Had appendectomy 20 years ago. No other abdominal surgeries.
      `.trim(),
      pastHistory: "Appendectomy 20 years ago. No other surgeries. No diabetes. No chronic illness. Seen for constipation occasionally — treated with laxatives.",
      familyHistory: "No significant family history.",
      socialHistory: "Retired. Non-smoker, occasional alcohol (rare now). Diet: High-fiber (vegetables, whole wheat), irregular meal timing. Lives with family in Delhi.",
      drugHistory: "No regular medications. Used OTC laxative 3 days ago. No allergies.",
      vitals: { pulse: 102, bp: "126/80", temp: 37.2, rr: 22, spo2: 96 },
      generalExam: `
- General appearance: Acutely ill, restless (rolls in bed), winces with colicky pain
- Pallor: Mild pallor
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema
- Dehydration signs: Mild — dry mucous membrane, normal skin turgor
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. Tachycardic at 102.",
          peripheral_pulses: "All pulses palpable",
          blood_pressure: "126/80 mmHg",
        },
        respiratory: {
          auscultation_lungs: "Clear bilateral air entry. No added sounds.",
        },
        abdominal: {
          abdo_inspection: "Abdomen visibly distended (bloated). No visible scars except small appendectomy scar. Visible peristaltic waves (rare — comes and goes).",
          palpation_superficial: "Diffuse mild tenderness. No localized rigidity. Guarding minimal.",
          palpation_deep: "Mild discomfort, no deep tenderness. No masses felt. No hepatomegaly. No splenomegaly.",
          rebound_tenderness: "Absent — no peritonitis",
          bowel_sounds: "HYPERACTIVE — loud, tinkling, rushing sounds (like wind in pipes). High-pitched. Increased during colicky episodes.",
          percussion: "Tympanic note (hyperresonant) — suggests air distension",
        },
        neurological: {
          consciousness: "GCS 15/15 — alert but in pain",
        },
      },
      availableInvestigations: [
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 14.8 g/dL (elevated — hemoconcentration from dehydration), WBC: 9,200/μL (normal, not elevated), Platelets: 2.0 lakhs", isAbnormal: true, interpretation: "Elevated Hb suggests mild dehydration/hemoconcentration. Normal WBC argues against perforation/peritonitis (would be elevated).", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 46 mg/dL (elevated), Creatinine: 1.3 mg/dL (mild elevation), Na: 136 mEq/L (normal), K: 3.8 mEq/L (normal)", isAbnormal: true, interpretation: "Elevated urea and creatinine suggest pre-renal azotemia from dehydration (loss of fluids from vomiting). Electrolytes still normal despite losses.", isEssential: true },
        { id: "lft", name: "Liver Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Bilirubin: 0.8 mg/dL, AST: 30 U/L, ALT: 32 U/L, ALP: 78 U/L", isAbnormal: false, interpretation: "Normal — no liver involvement", isEssential: false },
        { id: "coag", name: "Coagulation Profile", cost: 400, turnaround: "1 hour", category: "Hematology", result: "PT: 12.4 sec, INR: 1.0, aPTT: 28 sec", isAbnormal: false, interpretation: "Normal — safe for surgery", isEssential: true },
        { id: "abdo_xray", name: "Abdominal X-ray (erect, sitting upright)", cost: 200, turnaround: "15 min", category: "Imaging", result: "Multiple dilated small bowel loops (>3cm) with air-fluid levels in a 'stepladder pattern'. Transition point visible at left iliac fossa region. Colon appears collapsed. No free air under diaphragm. No pneumatosis.", isAbnormal: true, interpretation: "Classic findings of small bowel obstruction. Transition point suggests anatomical blockade (likely adhesion from prior appendectomy). No perforation (no free air).", isEssential: true },
        { id: "abdo_ct", name: "CT Abdomen & Pelvis with contrast", cost: 4500, turnaround: "45 min", category: "Imaging", result: "Multiple dilated small bowel loops (max 3.5cm diameter) with transition point at left iliac fossa. Collapsed bowel distally. Minimal free fluid (suggests no perforation). No evidence of obstruction from mass, hernia, or volvulus. At transition point, there is evidence of adhesions (bands of soft tissue).", isAbnormal: true, interpretation: "CT confirms adhesive small bowel obstruction post-appendectomy. No other pathology. Adhesions are most common cause of SBO (60%) especially post-appendectomy.", isEssential: true },
        { id: "rbs", name: "Random Blood Sugar", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "RBS: 118 mg/dL", isAbnormal: false, interpretation: "Normal — no diabetes", isEssential: false },
        { id: "blood_gas", name: "Arterial Blood Gas", cost: 800, turnaround: "15 min", category: "Biochemistry", result: "pH: 7.32 (acidotic), PaO2: 92 mmHg, PaCO2: 40 mmHg, HCO3: 19 mEq/L (low), Base excess: -6", isAbnormal: true, interpretation: "Mild metabolic acidosis — likely from prolonged vomiting (loss of bicarbonate) and dehydration. Adequate oxygenation.", isEssential: false },
        { id: "amylase", name: "Serum Amylase", cost: 300, turnaround: "1 hour", category: "Biochemistry", result: "Amylase: 92 U/L (normal: <100)", isAbnormal: false, interpretation: "Normal — no pancreatitis", isEssential: false },
        { id: "lactate", name: "Blood Lactate", cost: 400, turnaround: "30 min", category: "Biochemistry", result: "Lactate: 2.2 mmol/L (normal: <2.0)", isAbnormal: true, interpretation: "Slightly elevated — suggests mild tissue hypoxia/hypoperfusion. If significantly elevated (>4) — worrisome for strangulation (ischemic bowel).", isEssential: false },
      ],
      correctDiagnosis: "Adhesive Small Bowel Obstruction (post-appendectomy) — Acute Uncomplicated (no strangulation)",
      differentials: [
        { diagnosis: "Strangulated Small Bowel Obstruction", likelihood: "MEDIUM", reasoning: "Severe pain, vomiting, distension present. But lactate only mildly elevated (2.2, not >4). No severe peritoneal signs. Can progress to strangulation if not treated. Need surgery to rule out." },
        { diagnosis: "Colonic obstruction (Sigmoid Volvulus)", likelihood: "LOW", reasoning: "Sigmoid volvulus presents with extreme distension and absence of gas in rectum. X-ray here shows dilated small bowel with transition point. Age (60) makes volvulus less likely (more in very elderly)." },
        { diagnosis: "Ileus (post-operative or pharmacological)", likelihood: "LOW", reasoning: "No recent surgery. No opioid use. Hyperactive bowel sounds argue against ileus (would be hypoactive or absent)." },
        { diagnosis: "Crohn's disease with stricture", likelihood: "LOW", reasoning: "No history of inflammatory bowel disease. CT shows adhesions, not stricture from inflammation." },
      ],
      diagnosticReasoning: "60-year-old male with history of appendectomy 20 years ago presenting with acute onset colicky abdominal pain, bilious vomiting, constipation, and abdominal distension. Examination shows distended abdomen with hyperactive 'rushing' bowel sounds (characteristic of mechanical obstruction). X-ray shows dilated small bowel loops with air-fluid levels and transition point. CT confirms adhesive small bowel obstruction (most common cause of SBO — 60% of cases, especially post-appendectomy). No evidence of strangulation (mild lactate elevation, no severe peritonitis). This requires surgery (adhesiolysis) but may be managed conservatively initially if uncomplicated (no strangulation signs).",
      managementPlan: {
        immediateActions: [
          { action: "Keep patient NPO (nothing by mouth)", reasoning: "Prevent aspiration, prepare for possible surgery", priority: "STAT" },
          { action: "Establish IV access × 2 (large-bore)", reasoning: "Fluid resuscitation needed for dehydration from vomiting and insensible losses", priority: "STAT" },
          { action: "Start IV fluid resuscitation with Normal Saline", reasoning: "Replace lost fluids and electrolytes from vomiting (48 hours of losses). Pre-renal azotemia evident.", priority: "STAT" },
          { action: "Insert nasogastric tube (NG tube) for decompression", reasoning: "Reduce bowel distension, allow stomach decompression, relieve vomiting. Monitor output for feculent material (sign of strangulation).", priority: "URGENT" },
          { action: "Surgical consultation", reasoning: "May require surgery (adhesiolysis) but trial of conservative management first if no strangulation", priority: "URGENT" },
          { action: "Monitor closely for signs of strangulation", reasoning: "If develops — need emergency surgery. Signs: severe pain, fever, peritonitis, elevated lactate, sepsis", priority: "CONTINUOUS" },
        ],
        pharmacological: [
          { drugClass: "IV fluids — Resuscitation", examples: ["Normal Saline IV bolus 500mL stat, then 100mL/hr maintenance"], route: "IV", duration: "Until tolerating oral intake post-resolution", reasoning: "Dehydration from vomiting. Replace losses. Monitor urine output (goal >0.5mL/kg/hr = >30mL/hr for 60kg).", contraindications: ["None — essential treatment"], indianContext: "IV Normal Saline at ₹40-60 per 500mL bottle." },
          { drugClass: "Electrolyte replacement", examples: ["Potassium supplementation if K+ <3.5 (add KCl to IV fluids)", "Magnesium if severe hypomagnesemia"], route: "IV", duration: "As needed based on serum levels", reasoning: "Vomiting causes loss of K (hypokalemia) and Mg. Hypokalemia causes ileus and cardiac arrhythmias.", contraindications: ["Renal failure with high K+"], indianContext: "IV potassium supplements available." },
          { drugClass: "Analgesia", examples: ["Tramadol 50mg IM/IV for colicky pain (avoid morphine — can mask perforation signs)"], route: "IM/IV", duration: "PRN for pain control", reasoning: "Opioids can mask peritoneal signs of perforation, so use weak analgesics (tramadol) judiciously.", contraindications: ["Respiratory depression"], indianContext: "Tramadol 50mg at ₹5-8 per injection." },
          { drugClass: "Antiemetic", examples: ["Ondansetron 4mg IV TDS"], route: "IV", duration: "Until oral intake tolerated", reasoning: "Stop vomiting (reduces further fluid loss and NG tube output). Improves comfort.", contraindications: ["QT prolongation"], indianContext: "Ondansetron 4mg at ₹30-50 per injection." },
        ],
        nonPharmacological: [
          { intervention: "Conservative management with bowel rest", reasoning: "Many complete small bowel obstructions (70-80%) resolve without surgery with NG decompression + fluids. Adhesions may stretch/resolve. Only 20-30% need surgery.", duration: "48-72 hours of trial" },
          { intervention: "If strangulation develops or obstruction not resolving → Exploratory laparotomy with adhesiolysis", reasoning: "Surgical division of adhesions. Emergency if strangulation evident.", duration: "If conservative management fails after 72 hours or sooner if strangulation signs develop" },
          { intervention: "Bowel rest → NPO → Sips → Bland diet progression", reasoning: "Gradual return to oral intake after resolution of obstruction", duration: "Phased approach over 3-5 days post-resolution" },
        ],
        monitoring: [
          { parameter: "Nasogastric tube output", frequency: "Every 2-4 hours", target: "Decreasing volume, changing color from bilious (green) to clear to serosanguinous", escalation: "Feculent (brown, foul-smelling) output — suggests small bowel perforation (strangulation)" },
          { parameter: "Vital signs", frequency: "Every 2-4 hours", target: "Heart rate <100, BP stable, temperature <37.5°C", escalation: "Tachycardia >120, fever >38.5°C, hypotension — signs of strangulation/sepsis. Emergency surgery." },
          { parameter: "Abdominal examination", frequency: "Every 4-6 hours", target: "Decreasing tenderness, improving bowel sounds", escalation: "Increasing rigidity, guarding, rebound tenderness — peritonitis from perforation. Emergency surgery." },
          { parameter: "Urine output", frequency: "Hourly", target: ">0.5mL/kg/hr (>30mL/hr)", escalation: "Oliguria — inadequate fluid resuscitation" },
          { parameter: "Serum electrolytes (Na, K, Cl, HCO3)", frequency: "Every 6-8 hours initially", target: "Na 135-145, K 3.5-5.0, Cl normal, HCO3 >20", escalation: "Hypokalemia — risk of ileus and arrhythmias. Hyperchloremic acidosis — correct fluids." },
          { parameter: "Lactate and blood gas", frequency: "Repeat if concern for strangulation", target: "Lactate <2.0, normal pH", escalation: "Rising lactate (>4) and acidosis — ischemic bowel. Emergency surgery." },
        ],
        lifestyle: {
          dos: ["Complete the trial of conservative management (72 hours) if no strangulation signs", "Ambulate (stand, walk) if pain allows — helps gas passage through obstruction", "High-fiber diet after resolution (prevent recurrent constipation)"],
          donts: ["No oral intake until obstruction resolves", "No laxatives (can worsen perforation risk)", "No heavy exertion until fully recovered"],
          indianSpecific: ["After recovery: Include vegetables (leafy greens, carrots), whole wheat roti instead of white flour, fruits (papaya, guava) for natural fiber", "Drink plenty of water (avoid constipation which can trigger recurrent obstruction)", "Regular meal timings"],
        },
        followUp: {
          when: "1-2 weeks post-discharge, then 1 month if surgery done",
          what: ["Clinical assessment for return of normal bowel function", "If surgery done: wound check, suture removal at 10 days", "Dietary counseling for high-fiber diet to prevent recurrence"],
        },
        referral: {
          needed: true,
          to: "Surgeon (already involved) — for operative management if conservative fails or strangulation develops",
          urgency: "URGENT if conservative management fails or IMMEDIATE if strangulation develops",
        },
      },
      redFlags: [
        { flag: "Severe, constant pain (not colicky)", action: "Suggests strangulation (ischemic bowel) — EMERGENCY surgery needed", urgency: "IMMEDIATE" },
        { flag: "Fever (>38.5°C) with tachycardia (>120)", action: "Signs of sepsis/perforation — EMERGENCY surgery. Blood cultures, broad antibiotics.", urgency: "IMMEDIATE" },
        { flag: "Peritonitis signs: Rigid abdomen, guarding, rebound tenderness, Rovsing's sign", action: "Perforation of ischemic bowel — EMERGENCY laparotomy", urgency: "IMMEDIATE" },
        { flag: "Feculent NG tube output", action: "Proximal bowel perforation or very late strangulation — EMERGENCY surgery", urgency: "IMMEDIATE" },
        { flag: "Rapid rise in lactate (>4 mmol/L) or metabolic acidosis worsening", action: "Tissue hypoxia from strangulation — EMERGENCY surgery", urgency: "IMMEDIATE" },
        { flag: "Obstruction not resolving after 48-72 hours of conservative management", action: "Failure of conservative management — elective surgery to relieve obstruction (not emergency if no strangulation signs)", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Adhesions are the most common cause of small bowel obstruction (60%) — post-appendectomy, post-hysterectomy, post-colectomy",
        "Classic presentation: Colicky pain + bilious vomiting + constipation + abdominal distension",
        "Hyperactive 'rushing' or 'tinkling' bowel sounds are characteristic of mechanical small bowel obstruction (not absent like in ileus)",
        "X-ray findings: Dilated small bowel loops (>3cm) with air-fluid levels in stepladder pattern, transition point where obstruction is",
        "CT is more sensitive than X-ray and can show the cause (adhesions, hernia, volvulus, mass)",
        "70-80% of uncomplicated small bowel obstructions resolve with conservative management (NPO + NG decompression + IV fluids). Only 20-30% need surgery.",
        "Strangulation occurs in 5-10% of SBO — high mortality (25-33%) if delayed diagnosis. Signs: severe pain, fever, peritonitis, elevated lactate (>4), sepsis.",
        "NG decompression is essential — relieves vomiting, distension, and allows bowel to decompress so adhesions may stretch/resolve",
        "If conservative management fails after 72 hours or strangulation develops → EMERGENCY surgery (adhesiolysis, resection if gangrenous)",
      ],
      commonMistakes: [
        "Using strong opioids (morphine) — can mask peritoneal signs of strangulation. Use weak analgesics (tramadol) only.",
        "Immediately operating on every bowel obstruction — many resolve with conservative management. Trial first unless strangulation present.",
        "Not inserting NG tube — vital for decompression and symptom relief",
        "Not recognizing strangulation — high mortality if missed. Lactate >4, fever, severe peritonitis = emergency surgery",
        "Using normal saline instead of lactated Ringer's — can cause hyperchloremic acidosis with prolonged use",
        "Giving laxatives — can increase perforation risk in complete obstruction",
        "Not checking serum potassium — hypokalemia from vomiting causes ileus and cardiac arrhythmias",
      ],
      relevantHistoryQs: ["onset", "character", "severity", "associated", "bowel_habits", "surgical_history", "location"],
      relevantExamIds: ["abdo_inspection", "bowel_sounds", "palpation", "rebound_tenderness", "guarding", "percussion"],
      difficulty: "MODERATE",
      estimatedMinutes: 22,
      subjectTags: ["SU", "EM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "SU2.3",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 5. Wound Healing & Surgical Infections → Diabetic Foot Ulcer ───────
  {
    topicCode: "SU-MOD-01-TOP-01",
    scenario: {
      patientAge: 55,
      patientSex: "Male",
      patientOccupation: "Shop owner (standing most of the day)",
      patientLocation: "Hyderabad, Telangana",
      chiefComplaint: "Non-healing ulcer on bottom of foot for 3 months with worsening pain",
      historyOfPresent: `
- Onset: Noticed small blister/sore 3 months ago on sole of right foot, thought it was normal friction injury
- Character: Initially painless, didn't notice when injury occurred. Now the wound has enlarged to 5cm × 4cm. Black tissue at the base (eschar/necrotic tissue).
- Location: Sole of right foot under ball of foot (plantar surface, weight-bearing area)
- Severity: Pain now present, increasing. Foul-smelling discharge from wound. Redness spreading around the wound (cellulitis).
- Associated: Fever for 5 days (comes and goes). Swelling of right foot and lower leg. Some pus discharge. Feels warm to touch.
- History: Known diabetic for 12 years, irregularly taking medication. HbA1c last checked 1 year ago — was 9.2% (poorly controlled). Says he doesn't feel sensation in feet for past 2-3 years (neuropathy).
      `.trim(),
      pastHistory: "Type 2 Diabetes Mellitus for 12 years — on metformin + sulfonylurea (Gliclazide), compliance poor (takes when remembers). No insulin. Hypertension for 8 years on amlodipine. No cardiac events. No other chronic illness. One previous foot ulcer 5 years ago (healed eventually).",
      familyHistory: "Father has Type 2 diabetes. Mother has hypertension.",
      socialHistory: "Shop owner — stands most of the day in tight shoes. Non-smoker. Occasional alcohol. Diet: South Indian — rice, vegetables, dal. Lives in Hyderabad with family.",
      drugHistory: "Metformin 500mg BD (irregular), Gliclazide 5mg OD (irregular), Amlodipine 5mg OD. No allergies.",
      vitals: { pulse: 94, bp: "138/86", temp: 38.4, rr: 18, spo2: 98 },
      generalExam: `
- General appearance: Mild distress from pain, overweight, well-nourished
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: Right foot and ankle swollen (pitting edema present). Left foot normal.
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. No murmurs.",
          peripheral_pulses: "Dorsalis pedis pulses: Right — weak/difficult to palpate. Left — normal. Posterior tibial pulses: Right — weak. Left — normal.",
          blood_pressure: "138/86 mmHg",
        },
        respiratory: {
          auscultation_lungs: "Clear bilateral air entry.",
        },
        abdominal: {
          liver_palpation: "Not enlarged",
          spleen_palpation: "Not palpable",
        },
        foot_examination: {
          right_foot_ulcer: "Ulcer on sole of right foot (plantar surface, metatarsal head area). 5cm × 4cm in size. Black necrotic tissue (eschar) at base and edges. Surrounding erythema (redness) extending 3cm around ulcer — indicates cellulitis. Purulent discharge (pus) present. Foul odor.",
          left_foot: "No ulcer. Skin intact.",
          sensory_exam: "Monofilament test (10g): Cannot feel 10g monofilament on either foot (severe neuropathy). Can feel sharp sensation in upper foot but not sole.",
          vibratory_sense: "Absent in both feet (indicates neuropathy)",
          ankle_reflexes: "Absent bilaterally (neuropathy)",
          color_and_temp: "Right foot: Warm, red (cellulitis). Left foot: Normal temperature and color.",
          nail_inspection: "Thickened nails (fungal appearance) on right foot",
        },
        neurological: {
          consciousness: "GCS 15/15",
          confusion: "Absent (though fever present)",
        },
      },
      availableInvestigations: [
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 12.2 g/dL, WBC: 14,600/μL (elevated with left shift — 80% neutrophils), Platelets: 2.8 lakhs", isAbnormal: true, interpretation: "Leukocytosis with left shift — indicates bacterial infection with inflammatory response. Mild anemia (chronic disease, diabetes).", isEssential: true },
        { id: "rbs", name: "Random Blood Sugar", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "RBS: 286 mg/dL", isAbnormal: true, interpretation: "Severely elevated — stress hyperglycemia from infection + poor glycemic control (HbA1c 9.2%). Critical risk: hyperglycemia impairs immune function and wound healing.", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 52 mg/dL (elevated), Creatinine: 1.6 mg/dL (elevated), Na: 137 mEq/L, K: 4.3 mEq/L", isAbnormal: true, interpretation: "Elevated urea and creatinine — indicates declining renal function (common in long-standing diabetes). Important for antibiotic dosing (avoid nephrotoxic drugs, adjust doses).", isEssential: true },
        { id: "hba1c", name: "HbA1c", cost: 400, turnaround: "2 hours", category: "Endocrinology", result: "HbA1c: 10.8% (previous 1 year ago: 9.2%)", isAbnormal: true, interpretation: "Worsening glycemic control over past year. HbA1c >9% indicates poor control (target <7% for most diabetics). Hyperglycemia is major risk factor for infection and delayed healing.", isEssential: true },
        { id: "wound_culture", name: "Wound Culture & Sensitivity (pus swab from ulcer)", cost: 700, turnaround: "48-72 hours", category: "Microbiology", result: "Culture pending — Gram stain shows mixed gram-positive cocci and gram-negative bacilli with polymorphs", isAbnormal: true, interpretation: "Polymicrobial infection (common in diabetic foot ulcers). Likely organisms: Staphylococcus aureus, Streptococcus, Escherichia coli, Proteus, Klebsiella, anaerobes. Culture will identify specific organisms and sensitivities for targeted therapy.", isEssential: true },
        { id: "blood_culture", name: "Blood Culture (2 sets)", cost: 600, turnaround: "48-72 hours", category: "Microbiology", result: "Pending — important to check for bacteremia/sepsis", isAbnormal: false, interpretation: "May grow organisms if systemic infection/sepsis present. No growth would make osteomyelitis less likely.", isEssential: true },
        { id: "xray_foot", name: "X-ray of right foot (AP, lateral, oblique views)", cost: 200, turnaround: "15 min", category: "Imaging", result: "Soft tissue swelling. Gas in tissues (subcutaneous emphysema) in small amount around ulcer — suggests gas-forming organism (Clostridium or E. coli). No bone destruction visible. No osteomyelitis signs (yet).", isAbnormal: true, interpretation: "Gas in tissues is concerning — may indicate necrotizing soft tissue infection (NSTi/gas gangrene). Urgent surgical consultation needed. No obvious bone involvement but early X-rays can miss osteomyelitis.", isEssential: true },
        { id: "mri_foot", name: "MRI of right foot with contrast", cost: 6000, turnaround: "1 hour", category: "Imaging", result: "Ulcer with edema extending into subcutaneous tissue. Bone marrow edema in metatarsal heads — concerning for early osteomyelitis. Inflammatory changes but no obvious bone erosion yet. Gas in soft tissues confirmed. No obvious abscess collection.", isAbnormal: true, interpretation: "MRI is most sensitive for early osteomyelitis (shows bone marrow edema before X-ray changes). Bone involvement likely — needs prolonged antibiotics. Gas findings concerning for aggressive infection (necrotizing process).", isEssential: true },
        { id: "crp", name: "C-Reactive Protein", cost: 400, turnaround: "2 hours", category: "Biochemistry", result: "CRP: 142 mg/L (normal: <5 mg/L)", isAbnormal: true, interpretation: "Markedly elevated — indicates acute inflammation/infection. Useful for monitoring treatment response (should fall with effective therapy).", isEssential: false },
        { id: "blood_glucose_trend", name: "Capillary blood glucose (fingerstick)", cost: 50, turnaround: "2 min", category: "Biochemistry", result: "Fasting: 245 mg/dL, Post-lunch: 310 mg/dL, Random: 286 mg/dL", isAbnormal: true, interpretation: "Severely elevated and erratic glucose control. Indicates poor medication compliance and infection-related hyperglycemia. Urgent need for insulin therapy.", isEssential: false },
      ],
      correctDiagnosis: "Grade 3 (Wagner Classification) Diabetic Foot Ulcer with cellulitis, suspected early osteomyelitis, and necrotizing soft tissue infection",
      differentials: [
        { diagnosis: "Infected diabetic foot ulcer without osteomyelitis", likelihood: "MEDIUM", reasoning: "Infection present (cellulitis, purulent discharge) but MRI shows only bone marrow edema, no erosion. Osteomyelitis may still develop (56% of foot ulcers with infection develop osteomyelitis if untreated)." },
        { diagnosis: "Acute osteomyelitis (established)", likelihood: "MEDIUM-HIGH", reasoning: "Gas in tissues + bone marrow edema on MRI + fever + systemic signs suggest osteomyelitis. Need culture confirmation and imaging progression." },
        { diagnosis: "Necrotizing soft tissue infection (gas gangrene)", likelihood: "MEDIUM", reasoning: "Gas in tissues is concerning. Foul odor, rapidly spreading cellulitis, systemic toxicity (fever) are features. If true NSTi, very high mortality — needs emergency debridement." },
        { diagnosis: "Charcot neuroarthropathy", likelihood: "LOW", reasoning: "No history of progressive deformity. Ulcer is due to neuropathy + trauma, not joint destruction (though both are present in diabetic foot disease)." },
      ],
      diagnosticReasoning: "55-year-old male with poorly controlled Type 2 diabetes (HbA1c 10.8%, RBS 286) presenting with 3-month non-healing plantar foot ulcer (Wagner grade 3) with progressive cellulitis, fever, and purulent discharge. Examination reveals severe sensorimotor neuropathy (absent monofilament sensation, absent reflexes), impaired pedal pulses (vascular insufficiency), and signs of infection (fever, elevated WBC with left shift, CRP markedly elevated). Culture shows polymicrobial organisms. X-ray and especially MRI show concerning findings: gas in soft tissues (suggests gas-forming organism or necrotizing process) and bone marrow edema (early osteomyelitis). Overall diagnosis: Infected diabetic foot ulcer with probable early osteomyelitis and possible necrotizing soft tissue infection. This is a surgical emergency requiring immediate intervention, aggressive antibiotics, glycemic control, and possibly amputation if extensive necrotizing infection confirmed.",
      managementPlan: {
        immediateActions: [
          { action: "Immediate admission to hospital", reasoning: "Severe infection with fever, systemic signs, possible necrotizing infection — requires close monitoring and urgent intervention", priority: "STAT" },
          { action: "URGENT surgical consultation (same day)", reasoning: "Possible necrotizing soft tissue infection requires emergency surgical evaluation. May need emergency debridement.", priority: "STAT" },
          { action: "Blood and wound cultures BEFORE antibiotics", reasoning: "Identify organisms and sensitivities for targeted therapy", priority: "STAT" },
          { action: "Start broad-spectrum IV antibiotics IMMEDIATELY (don't wait for culture)", reasoning: "Polymicrobial infection with possible anaerobes and gas-forming organisms. Early antibiotics critical.", priority: "STAT" },
          { action: "Establish IV access and start IV fluids", reasoning: "Systemic infection with elevated creatinine — may have sepsis developing. Maintain renal perfusion.", priority: "STAT" },
          { action: "Urgent surgical debridement if necrotizing infection confirmed", reasoning: "NSTi is a SURGICAL emergency — mortality increases dramatically with delay. Surgical exploration and aggressive debridement essential.", priority: "IMMEDIATE if NSTi" },
          { action: "Aggressive glycemic control — IV insulin", reasoning: "RBS 286, HbA1c 10.8%. Hyperglycemia impairs immune function and promotes infection. Insulin needed immediately.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Broad-spectrum IV antibiotics (empiric)", examples: ["Piperacillin-Tazobactam 4.5g IV QID (covers gram-negative, gram-positive, anaerobes)", "PLUS Clindamycin 600mg IV TDS (covers anaerobes, gas gangrene)"], route: "IV", duration: "Initially IV for 7-14 days depending on culture, then oral if improving and no osteomyelitis", reasoning: "Diabetic foot infections are polymicrobial. Empiric coverage needed immediately. P-T covers most organisms. Clindamycin added for anaerobic coverage (especially Clostridium if gas gangrene).", contraindications: ["Allergy to beta-lactams — use Fluoroquinolone + Clindamycin"], indianContext: "Piperacillin-Tazobactam 4.5g at ₹150-200, Clindamycin 600mg at ₹30-50 per dose." },
          { drugClass: "Antibiotic adjustment after culture", examples: ["Switch to targeted based on culture — may use Cephalosporin, Fluoroquinolone, Aminoglycoside"], route: "IV/Oral", duration: "6 weeks if osteomyelitis, or 2-4 weeks if soft tissue infection only", reasoning: "Once culture/sensitivities available, switch to organism-specific antibiotics. Osteomyelitis requires LONG-term therapy (6 weeks minimum, some recommend 12 weeks).", contraindications: ["Renal impairment — adjust doses (Cr 1.6). Avoid aminoglycosides if possible."], indianContext: "Generic cephalosporins available at ₹50-100 per dose." },
          { drugClass: "IV Insulin (aggressive glycemic control)", examples: ["Insulin infusion: Start 5-10 units/hr, titrate to keep blood glucose 140-180 mg/dL"], route: "IV continuous", duration: "Until glucose controlled and stabilized on SC insulin", reasoning: "RBS 286, HbA1c 10.8% — severe hyperglycemia. Every 1% rise in HbA1c increases infection risk. Insulin improves immune function and wound healing.", contraindications: ["Hypoglycemia — monitor glucose 4-6 hourly"], indianContext: "IV insulin infusion set up by nursing." },
          { drugClass: "Analgesia", examples: ["Tramadol 50mg IV/PO TDS", "Paracetamol 1g PO QID"], route: "IV/PO", duration: "Throughout acute phase", reasoning: "Severe pain from ulcer. Adequate analgesia improves mobility and healing.", contraindications: ["Respiratory depression"], indianContext: "Tramadol at ₹5-8, Paracetamol at ₹3-5 per dose." },
          { drugClass: "Anticoagulation (if sepsis with DIC)", examples: ["LMWH (Enoxaparin) prophylactically, or anticoagulation if DIC develops"], route: "SC", duration: "During acute infection phase", reasoning: "Risk of venous thromboembolism and DIC with severe infection — prophylactic anticoagulation may help", contraindications: ["Active bleeding"], indianContext: "Enoxaparin at ₹200-400 per dose." },
        ],
        nonPharmacological: [
          { intervention: "URGENT surgical debridement of necrotic tissue and pus", reasoning: "Remove dead/infected tissue. Biopsy for bone involvement (osteomyelitis). If extensive necrosis or NSTi — may require amputation.", duration: "Emergency surgical procedure" },
          { intervention: "Daily dressing changes with saline irrigation and antiseptic", reasoning: "Remove slough, apply appropriate dressing (non-adherent like paraffin gauze initially, then foam dressings for absorption)", duration: "Throughout healing" },
          { intervention: "Offloading of foot (pressure relief)", reasoning: "Ulcer is on weight-bearing area. Remove pressure to allow healing. Use special foot bed/sandal, bedrest if possible, or total contact cast.", duration: "Until healed" },
          { intervention: "Negative Pressure Wound Therapy (NPWT) if available", reasoning: "Promotes healing, reduces infection. Expensive but very effective for difficult wounds.", duration: "2-4 weeks" },
          { intervention: "Amputation if extensive necrotizing infection or extensive osteomyelitis", reasoning: "High mortality and morbidity with aggressive NSTi or advanced osteomyelitis — amputation (even just toe or forefoot) may be life-saving", duration: "If surgical exploration confirms extensive irreversible infection" },
        ],
        monitoring: [
          { parameter: "Blood glucose (capillary or continuous monitor)", frequency: "Every 2-4 hours initially", target: "140-200 mg/dL (less strict in acute illness, avoid hypoglycemia)", escalation: "If glucose >250 — increase insulin. If <100 — give dextrose, check for hypoglycemia." },
          { parameter: "Vital signs", frequency: "Every 4-6 hours initially", target: "Fever decreasing, HR <100, BP stable", escalation: "Persistent fever, tachycardia — suggests inadequate source control or resistant infection. Reconsider surgery." },
          { parameter: "Wound assessment", frequency: "Daily post-debridement", target: "Decreasing erythema, reduced pus, clean base", escalation: "Spreading cellulitis, increasing pain — may indicate progression. Repeat surgery needed." },
          { parameter: "WBC count and CRP", frequency: "Every 2-3 days", target: "Decreasing WBC and CRP (should trend down with effective treatment)", escalation: "Rising — suggests inadequate therapy. Change antibiotics or consider further surgery." },
          { parameter: "Renal function (Cr, urea)", frequency: "Every 2-3 days", target: "Stable or improving (was Cr 1.6)", escalation: "Worsening renal function — may indicate sepsis-related AKI. Needs renal replacement therapy consideration." },
          { parameter: "Serum electrolytes", frequency: "Every 2-3 days", target: "Normal", escalation: "Hypokalemia from IV fluids — supplement K+. Hyperglycemia — titrate insulin." },
        ],
        lifestyle: {
          dos: ["Strict glycemic control — take insulin as prescribed (not just oral meds)", "Elevate foot while resting", "Keep wound clean and dry", "High-protein diet for wound healing (eggs, fish, dal)", "Attend diabetic foot clinic follow-up", "Inspect foot daily with mirror (neuropathy means can't feel problems)"],
          donts: ["Do NOT walk on infected foot until healed", "No tight shoes (caused ulcer initially)", "Avoid standing for long hours", "No smoking (impairs healing)", "Do NOT apply traditional remedies to wound"],
          indianSpecific: ["If amputation needed: prosthetics available at ₹50,000-200,000 depending on quality", "Diabetes education: 'Sugar control is LIFE control' — strict adherence to insulin/medications", "Foot care: Wash daily, dry between toes, use soft cotton socks only", "Footwear: Use diabetic shoes (microcellular rubber, extra depth) available at specialty shops", "Free diabetic services available at government hospitals — utilize for long-term follow-up"],
        },
        followUp: {
          when: "Daily while hospitalized (2-4 weeks), then weekly for 1 month, then monthly for 3-6 months, then every 3 months for life",
          what: ["Wound healing assessment", "Repeat blood glucose checks (target HbA1c <7%)", "Renal function monitoring", "Annual foot screening (monofilament test, vibratory sense, pulses)", "Orthopedic follow-up if amputation performed (prosthetics, rehabilitation)"],
        },
        referral: {
          needed: true,
          to: "Surgeon (emergency), Endocrinologist (glycemic control), Vascular surgeon (if vascular insufficiency), Prosthetist (if amputation)",
          urgency: "IMMEDIATE — this is a surgical emergency",
        },
      },
      redFlags: [
        { flag: "Rapidly spreading cellulitis with systemic toxicity (fever >39°C, tachycardia >120, hypotension)", action: "Suggests necrotizing soft tissue infection — EMERGENCY surgical exploration and debridement. Time is tissue.", urgency: "IMMEDIATE" },
        { flag: "Crepitus (crackling sensation in tissues), rapid spread, extreme pain", action: "Gas gangrene/clostridial infection — EMERGENCY amputation may be needed. Mortality >90% if delayed.", urgency: "IMMEDIATE" },
        { flag: "Signs of sepsis/septic shock (confusion, hypotension, oliguria, elevated lactate)", action: "Septic shock — ICU care, aggressive fluids, vasopressors, emergency surgery for source control", urgency: "IMMEDIATE" },
        { flag: "Persistent fever after surgery despite antibiotics", action: "Inadequate source control — repeat surgery or imaging to identify undrained abscess/bone involvement", urgency: "URGENT" },
        { flag: "Progression to osteomyelitis confirmed on imaging/culture", action: "Needs 6-12 weeks of IV antibiotics. May need bone biopsy for culture. Consider eventual amputation if extensive bone disease.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Diabetic foot ulcer is the leading non-traumatic cause of amputation in developed countries — prevention is KEY (foot screening, proper footwear, glycemic control)",
        "Wagner classification: Grade 0 = skin intact, Grade 1 = superficial ulcer, Grade 2 = penetrating to tendon/ligament, Grade 3 = penetrating to bone/joint, Grade 4 = partial foot gangrene, Grade 5 = whole foot gangrene. Higher grades → higher amputation risk.",
        "Triad of diabetic foot pathology: Neuropathy (loss of sensation) + Vascular insufficiency (poor circulation) + Infection (bacteria)",
        "Neuropathy is why patient often doesn't feel the injury (painless ulcer initially) — dangerous because gets ignored until severe",
        "Polymicrobial infection is common (multiple bacteria) — need broad-spectrum empiric coverage initially, then targeted after culture",
        "Osteomyelitis develops in ~50% of infected foot ulcers if untreated — MRI is most sensitive (shows bone marrow edema before X-ray changes)",
        "Necrotizing soft tissue infection is a SURGICAL emergency — mortality >25% even with treatment. Key sign: disproportionate pain out of proportion to exam findings.",
        "Prolonged antibiotics needed if osteomyelitis present (6-12 weeks minimum IV, then oral). Cannot treat with oral antibiotics alone if bone involved.",
        "Glycemic control is CRITICAL — HbA1c >7% increases infection risk, delays healing. Insulin needed acutely.",
        "Amputation may be necessary if extensive necrotizing infection — a 'life-saving' procedure (not failure) that allows survival and eventual rehabilitation",
      ],
      commonMistakes: [
        "Thinking 'it's just a foot ulcer' — can rapidly progress to amputation or death if infected",
        "Not checking sensory/vascular status — neuropathy and vascular disease are KEY factors in diabetic foot pathology",
        "Using oral antibiotics for infected foot ulcer — IV needed for bone penetration and systemic infection",
        "Not treating hyperglycemia aggressively — high glucose impairs immune function and wound healing",
        "Missing osteomyelitis on early X-ray — MRI is more sensitive. Bone culture and imaging follow-up essential.",
        "Delaying surgical debridement thinking antibiotics alone will work — surgical source control is ESSENTIAL for infection control",
        "Not checking for gas in tissues — may miss life-threatening gas gangrene/necrotizing infection",
        "Inadequate follow-up care after healing — recurrence rates high (15-25% within 5 years) without ongoing foot surveillance and education",
      ],
      relevantHistoryQs: ["onset", "duration", "location", "diabetes_duration", "neuropathy_symptoms", "prev_ulcers", "compliance", "current_meds"],
      relevantExamIds: ["foot_ulcer_assessment", "monofilament_test", "vibratory_sense", "reflexes", "pedal_pulses", "cellulitis_exam", "sensory_exam"],
      difficulty: "HIGH",
      estimatedMinutes: 28,
      subjectTags: ["SU", "EM", "EN"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "SU1.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
