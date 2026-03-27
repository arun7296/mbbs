// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for Anatomy (AN)
// Anatomy-focused clinical presentations where anatomical knowledge is key
// Scenarios 1-3: Brachial Plexus Injury, Inguinal Hernia, Facial Nerve Palsy
// ---------------------------------------------------------------------------

export const anatomyScenarios = [
  // ─── 1. Brachial Plexus Injury (Erb-Duchenne Palsy) ──────────────────────
  {
    topicCode: "AN-MOD-02-TOP-01",
    scenario: {
      patientAge: 2,
      patientSex: "Male",
      patientOccupation: "Infant",
      patientLocation: "Mumbai, Maharashtra",
      chiefComplaint: "Right arm not moving properly since birth. Parents noticed inability to lift arm.",
      historyOfPresent: `
- Birth history: Born 5 days ago via normal vaginal delivery at home with local dai (birth attendant)
- Delivery complications: Difficult delivery — "wide shoulders" — right shoulder required traction to deliver
- Onset: Noticed immediately after birth that right arm hangs limp
- Character: Arm in "waiter's tip" position (adduction and internal rotation at shoulder, extension at elbow, pronation of forearm)
- Loss of movement: Unable to lift right arm, no abduction/external rotation at shoulder
- Associated: No seizures, no facial asymmetry, no respiratory distress
- Feeding: Able to feed from both breasts (bilateral hand movements present for hand-to-mouth)
- Family history: No consanguinity, no genetic disorders
      `.trim(),
      pastHistory: "Full-term infant, born at 39 weeks, 3.6 kg birth weight. No NICU admission. No antenatal complications.",
      familyHistory: "No family history of brachial plexus injury or neuromuscular disorders.",
      socialHistory: "Lives in urban slum area, Mumbai. First child. Parents educated.",
      drugHistory: "No medications. No allergies. Breastfeeding exclusively.",
      vitals: { pulse: 138, bp: "78/52", temp: 37.2, rr: 42, spo2: 98 },
      generalExam: `
- General appearance: Active, alert, crying infant
- Pallor: Absent
- Icterus: Mild physiologic jaundice (day 5 of life) — clinically acceptable
- Cyanosis: Absent
- Clubbing: N/A at this age
- Edema: No edema
- Tone: Asymmetric — flaccid right upper limb, normal tone elsewhere
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. Regular rate. No murmurs.",
          peripheral_pulses: "Bilateral radial pulses equal and palpable",
          blood_pressure: "Normal for age",
        },
        respiratory: {
          chest_inspection: "Bilateral equal chest movements. Tachypneic is normal for this age (RR 42).",
          auscultation_lungs: "Clear bilateral air entry. No crackles or wheeze.",
          vocal_resonance: "Normal",
        },
        abdominal: {
          abdo_inspection: "Soft, no distension",
          palpation_superficial: "No tenderness",
          liver_palpation: "Edge palpable 2cm below costal margin (normal in infants)",
          spleen_palpation: "Not palpable",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "GCS — awake and alert, normal irritability for age",
          cranial_nerves: "II-XII grossly intact. Face symmetric. Eyes reactive.",
          upper_limb_right: "Flaccid paralysis — waiter's tip position. No shoulder abduction/external rotation. Elbow extended, pronated. Grasp reflex absent on right.",
          upper_limb_left: "Normal tone and power for age. Grasp reflex present. Moro reflex symmetrical except right arm.",
          lower_limbs: "Normal tone and power for age",
          reflexes: "Moro reflex: Partially asymmetrical — left arm extends, right arm remains limp",
          plantar: "Normal flexor response bilaterally",
        },
      },
      availableInvestigations: [
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 14.8 g/dL, WBC: 12,500/μL (normal for newborn), Platelets: 2.5 lakhs", isAbnormal: false, interpretation: "Normal complete blood count for a 5-day-old infant.", isEssential: false },
        { id: "mri_brachial", name: "MRI Brachial Plexus (High-resolution)", cost: 15000, turnaround: "1-2 days", category: "Imaging", result: "Right C5-C6 nerve roots show disruption in continuity. Severe swelling of nerve roots. No obvious complete transection. Collection of blood/edema around right shoulder.", isAbnormal: true, interpretation: "Confirms Erb-Duchenne palsy from C5-C6 root injury. Pattern consistent with traction injury during delivery.", isEssential: true },
        { id: "emg_ncs", name: "Electromyography & Nerve Conduction Study", cost: 3000, turnaround: "Variable", category: "Neurophysiology", result: "Cannot be reliably performed at age 5 days — muscle too immature. Recommend repeat at 3-4 weeks of age.", isAbnormal: false, interpretation: "EMG/NCS best deferred to 3-4 weeks when infant muscles mature enough for testing. Will assess degree of nerve injury (neuropraxia vs axonotmesis vs neurotmesis).", isEssential: false },
        { id: "ultrasound_bp", name: "Ultrasound Brachial Plexus (Portable)", cost: 2000, turnaround: "15 min", category: "Imaging", result: "Swelling of right C5-C6 nerve roots. No obvious rupture. Intact neurovascular bundle. Right subclavian artery and vein normal.", isAbnormal: true, interpretation: "Edema of nerve roots from traction — consistent with Erb palsy. No vascular injury detected.", isEssential: true },
        { id: "xray_shoulder", name: "X-ray Shoulder & Clavicle (Right)", cost: 200, turnaround: "15 min", category: "Imaging", result: "No bony injury. No clavicular fracture. Humerus, scapula normal alignment. Soft tissue swelling noted over shoulder.", isAbnormal: false, interpretation: "Normal bone — brachial plexus injury is purely neurologic in this case, not associated with fracture.", isEssential: true },
        { id: "renal_ultrasound", name: "Renal Ultrasound (Screening)", cost: 1500, turnaround: "20 min", category: "Imaging", result: "Both kidneys normal size and echotexture. No hydronephrosis. No renal artery stenosis.", isAbnormal: false, interpretation: "Screening for associated renal artery stenosis (rare association). Normal — no causal connection here.", isEssential: false },
      ],
      correctDiagnosis: "Erb-Duchenne Palsy (Brachial Plexus Injury C5-C6 Roots) — Neuropraxia from Delivery Traction",
      differentials: [
        { diagnosis: "Klumpke's Palsy (C8-T1 injury)", likelihood: "LOW", reasoning: "Klumpke presents with 'claw hand' deformity (wrist and finger extension, intrinsic muscles paralyzed). Our patient has 'waiter's tip' (C5-C6). Klumpke much rarer — only 0.6% of brachial plexus injuries." },
        { diagnosis: "Total Brachial Plexus Avulsion", likelihood: "LOW", reasoning: "Would involve all nerve roots C5-T1. Patient has intact lower limb reflex arcs and Horner syndrome would be present (miosis, ptosis). Our patient has only C5-C6 involvement." },
        { diagnosis: "Spinal Cord Injury (Cervical Myelopathy)", likelihood: "LOW", reasoning: "Would cause quadriplegia or at least bilateral upper limb weakness. Our patient has isolated right upper limb involvement." },
        { diagnosis: "Clavicular Fracture with Nerve Compression", likelihood: "LOW", reasoning: "X-ray shows no fracture. Nerves can be compressed post-fracture healing but clavicle is intact here." },
      ],
      diagnosticReasoning: "2-year-old (actually 5-day-old) born via difficult vaginal delivery with right shoulder traction. Presents with classic 'waiter's tip' position (shoulder adduction-IR, elbow extended, forearm pronated). Loss of shoulder abduction and external rotation, preserved hand function. MRI shows C5-C6 nerve root swelling/disruption. Ultrasound confirms edema without rupture. This is Erb-Duchenne palsy from traction neuropraxia — the most common type of brachial plexus injury in birth trauma, accounting for ~50% of cases. Anatomical basis: C5-C6 nerve roots supply the deltoid, infraspinatus, supraspinatus, and upper trapezius. Traction during shoulder extraction stretches these roots, causing edema and temporary conduction block (neuropraxia). Prognosis: Most cases (80-90%) resolve spontaneously within 3-6 months as nerve edema improves.",
      managementPlan: {
        immediateActions: [
          { action: "Gentle handling of right arm — avoid excessive traction or manipulation", reasoning: "Nerve roots are inflamed. Rough handling can worsen injury or convert neuropraxia to axonotmesis.", priority: "STAT" },
          { action: "Immobilize right arm in neutral/comfortable position", reasoning: "Reduces pain and prevents contractures. Can use soft sling or tape.", priority: "URGENT" },
          { action: "Start passive range of motion (PROM) exercises within 48 hours", reasoning: "Prevents joint contractures and muscle atrophy during paralysis. PROM critical during the flaccid phase.", priority: "URGENT" },
          { action: "Refer to pediatric neurosurgeon/physiotherapist for assessment", reasoning: "Determine if surgery needed (most recover without it). Baseline assessment for prognosis.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Analgesic (for comfort)", examples: ["Paracetamol 15mg/kg/dose PO/PR Q4-6H PRN"], route: "Oral/Rectal", duration: "As needed", reasoning: "Shoulder pain from inflammation. Comfort essential for handling.", contraindications: ["None at standard doses"], indianContext: "Paracetamol syrup available at ₹10-20 per bottle." },
          { drugClass: "No routine steroids", examples: ["Avoid systemic corticosteroids"], route: "N/A", duration: "N/A", reasoning: "High-dose steroids (some debate) — most pediatric centers avoid in neonatal period. Evidence weak. Focus on physiotherapy instead.", contraindications: ["Active infection", "Immunosuppression"], indianContext: "Not typically used in India for birth brachial plexus injuries." },
        ],
        nonPharmacological: [
          { intervention: "Passive range of motion (PROM) exercises", reasoning: "Gentle PROM 3-4 times daily by mother or physiotherapist. Start within 48 hours. Prevents adhesions and contractures.", duration: "Continue for 3-6 months" },
          { intervention: "Sling and gentle handling protocol", reasoning: "Immobilize arm in neutral position to prevent further stretch. Educate parents on safe handling.", duration: "First 4-6 weeks" },
          { intervention: "Physiotherapy assessment and home exercise program", reasoning: "Formal PT evaluation to teach parents exercises. EMG/NCS at 3-4 weeks helps guide intensity.", duration: "3-6 months" },
        ],
        monitoring: [
          { parameter: "Clinical recovery of muscle power", frequency: "Every 2-4 weeks", target: "Progressive return of shoulder abduction/external rotation. 80-90% recover by 3-6 months.", escalation: "If no signs of recovery by 3-6 months → consider microsurgical repair (nerve grafting/transfer)" },
          { parameter: "EMG/NCS assessment", frequency: "At 3-4 weeks to assess severity of nerve injury", target: "Evidence of reinnervation (motor unit action potentials)", escalation: "If complete denervation (no MUAPs) at 3 months — surgical intervention indicated" },
          { parameter: "Range of motion of right shoulder", frequency: "Weekly during physiotherapy", target: "Maintain passive ROM, gradual return of active ROM", escalation: "If contractures developing — increase PROM frequency" },
        ],
        lifestyle: {
          dos: ["Gentle passive range of motion exercises 3-4 times daily", "Careful handling during diaper changes and bathing", "Regular follow-up with pediatric physiotherapist", "Continue exclusive breastfeeding — no restrictions"],
          donts: ["Avoid rough pulling or traction of right arm", "Do not delay physiotherapy", "Do not expect immediate recovery — patience required", "Avoid immobilization beyond 4-6 weeks (will cause contractures)"],
          indianSpecific: ["Many Indian families use traditional bone-setters (jhola-jholi) — STRONGLY ADVISE AGAINST. Brachial plexus needs gentle handling.", "Educate family that this is NOT due to 'curse' or divine punishment — it's a known birth complication.", "Ensure mother can perform PROM correctly — can ask ASHA worker to supervise."],
        },
        followUp: {
          when: "1 week, 2 weeks, 4 weeks, 8 weeks, 12 weeks, 6 months",
          what: ["Clinical assessment of motor recovery", "EMG/NCS at 3-4 weeks", "Assessment for need of surgical intervention if no recovery by 3 months", "Ongoing physiotherapy"],
        },
        referral: {
          needed: true,
          to: "Pediatric Neurosurgeon and Pediatric Physiotherapist",
          urgency: "URGENT — should be seen within 1 week for baseline assessment",
        },
      },
      redFlags: [
        { flag: "Signs of complete nerve transection (neurotmesis) on MRI", action: "Surgical exploration and nerve grafting within 3-6 weeks of birth", urgency: "URGENT" },
        { flag: "No signs of recovery on EMG/NCS by 3 months", action: "Consultation for surgical nerve transfer/repair by pediatric neurosurgeon", urgency: "URGENT" },
        { flag: "Rapid development of shoulder joint contractures", action: "Increase PROM frequency or surgical release if severe", urgency: "IMPORTANT" },
        { flag: "Associated Horner syndrome (miosis, ptosis, anhidrosis)", action: "Indicates upper thoracic root (T1) involvement — worse prognosis, needs surgery earlier", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Erb-Duchenne palsy (C5-C6) is the MOST common brachial plexus injury at birth (50% of cases) — 'waiter's tip' position is classic",
        "Anatomy: C5-C6 nerve roots supply deltoid, supraspinatus, infraspinatus, and upper trapezius — loss of shoulder abduction/external rotation",
        "Mechanism: Traction injury from shoulder extraction during delivery — more common with macrosomia, shoulder dystocia, breech extraction",
        "Most cases (80-90%) are neuropraxia (conduction block from edema) — recover spontaneously within 3-6 months with physiotherapy",
        "Early EMG/NCS at 3-4 weeks determines severity of nerve injury (neuropraxia vs axonotmesis vs neurotmesis) — guides prognosis and need for surgery",
        "Passive ROM exercises from day 2 are ESSENTIAL to prevent joint contractures during the paralysis phase",
        "Surgery (nerve grafting, nerve transfer) indicated only if no recovery by 3-6 months or evidence of complete transection",
        "Klumpke's palsy (C8-T1) is rare — presents as 'claw hand' not 'waiter's tip'",
      ],
      commonMistakes: [
        "Delaying physiotherapy — started too late leads to contractures that reduce ultimate functional recovery",
        "Over-immobilization — keeping arm in sling beyond 4-6 weeks will cause shoulder joint stiffness",
        "Unnecessary steroids — high-dose IV methylprednisolone not standard; focus on PT instead",
        "Imaging too early — EMG/NCS not reliable before 3-4 weeks of age due to immature muscles",
        "Premature surgery — most cases recover without surgery; rushing to OR wastes critical window for spontaneous recovery",
        "Missing associated injuries — always check for clavicular fracture, spinal cord injury, or other brachial plexus root involvement (Horner syndrome means T1 injury too)",
      ],
      relevantHistoryQs: ["birth_delivery", "mode_delivery", "shoulder_dystocia", "onset_symptoms", "associated_trauma", "fam_neuro"],
      relevantExamIds: ["posture_arm", "shoulder_abduction", "elbow_extension", "moro_reflex", "grasp_reflex", "general_tone", "upper_limb_power"],
      difficulty: "MEDIUM",
      estimatedMinutes: 22,
      subjectTags: ["AN", "PD", "NS"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "AN2.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 2. Inguinal Hernia (Direct vs Indirect — Anatomical Basis) ──────────
  {
    topicCode: "AN-MOD-03-TOP-01",
    scenario: {
      patientAge: 52,
      patientSex: "Male",
      patientOccupation: "Construction foreman",
      patientLocation: "Bangalore, Karnataka",
      chiefComplaint: "Swelling in right groin for 6 months, worse on standing or straining",
      historyOfPresent: `
- Onset: Gradually appeared 6 months ago after lifting heavy beams at construction site
- Character: Painless swelling in right inguinal region, appears when standing, reduces on lying down
- Size: Currently size of lemon (3-4 cm), not enlarging rapidly
- Severity: Not painful unless touched roughly. No severe pain or fever.
- Associated: Sensation of heaviness in groin after prolonged standing. No urinary symptoms. No bowel obstruction. No nausea/vomiting.
- Previous episodes: Noticed similar small bulge 10 years ago after heavy lifting — resolved on its own after 2-3 years of avoiding heavy work
- Family: Father had hernia surgery at 60, required repeat surgery at 75 (recurrent hernia)
      `.trim(),
      pastHistory: "Constipation for many years. Smoker. Benign prostatic hyperplasia — mild symptoms (nocturia 2 times/night). No diabetes. No respiratory disease.",
      familyHistory: "Father: Inguinal hernia at 60, recurrent at 75. Mother: No surgical history. Brother: No known hernia.",
      socialHistory: "Manual laborer — heavy lifting 8-10 hours/day. Smoker 1 pack/day for 30 years. Occasional whisky on weekends. Diet high in refined carbs, low fiber.",
      drugHistory: "Tamsulosin 0.4mg daily for BPH. Occasional aspirin for headache. No allergies.",
      vitals: { pulse: 78, bp: "142/88", temp: 36.8, rr: 16, spo2: 97 },
      generalExam: `
- General appearance: Well-nourished, overweight (BMI 31)
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema
- Abdomen: Soft, non-distended, no surgical scars visible
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. Regular rate. No murmurs.",
          peripheral_pulses: "All pulses palpable and equal",
          blood_pressure: "142/88 mmHg",
        },
        respiratory: {
          chest_inspection: "Bilateral equal chest movements",
          auscultation_lungs: "Clear bilateral air entry. No crackles or wheeze.",
          vocal_resonance: "Normal",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft, non-distended. Central abdominal scar noted from appendectomy 20 years ago. RIGHT inguinal swelling visible when standing.",
          palpation_superficial: "Diffuse mild tenderness over hernia site, no acute tenderness",
          palpation_deep: "No organomegaly, no masses",
          liver_palpation: "Not palpable below costal margin",
          spleen_palpation: "Not palpable",
          bowel_sounds: "Normal, active",
          hernia_examination: "STANDING position: Right inguinal swelling, about 4cm, semi-reducible. Expansion of swelling noted during Valsalva (cough). LYING position: Swelling completely reduces. Finger invagination of scrotum reveals patent deep ring with dilated ring (approx 2 cm diameter). Spermatic cord palpable above hernia — INDIRECT hernia suggested. No impulse felt on finger invagination during Valsalva in supine — patient relaxed. Ask patient to stand and Valsalva again: definite impulse felt on examining finger.",
        },
        neurological: {
          consciousness: "GCS 15/15 — alert and oriented",
          cranial_nerves: "All grossly intact",
          reflexes: "Normal and symmetrical",
          plantar: "Flexor bilaterally (normal)",
        },
      },
      availableInvestigations: [
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 13.1 g/dL, WBC: 7,200/μL, Platelets: 2.3 lakhs", isAbnormal: false, interpretation: "Normal complete blood count — no anemia or infection.", isEssential: false },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 32 mg/dL, Creatinine: 0.9 mg/dL, Na: 138 mEq/L, K: 4.1 mEq/L", isAbnormal: false, interpretation: "Normal renal function — safe for surgery if elected.", isEssential: true },
        { id: "bleeding_time", name: "Bleeding Time & Clotting Time", cost: 300, turnaround: "30 min", category: "Hematology", result: "Bleeding time: 2.5 min, Clotting time: 9.2 min", isAbnormal: false, interpretation: "Normal coagulation profile — safe for surgery.", isEssential: false },
        { id: "xray_abdomen", name: "X-ray Abdomen (Standing, Supine)", cost: 300, turnaround: "15 min", category: "Imaging", result: "No air-fluid levels. No bowel obstruction. No calcification. Moderate stool load noted. Normal architecture.", isAbnormal: false, interpretation: "No signs of obstruction. Rules out incarcerated/strangulated hernia.", isEssential: false },
        { id: "ultrasound_inguinal", name: "Ultrasound Inguinal Region (High-resolution)", cost: 2000, turnaround: "20 min", category: "Imaging", result: "Right inguinal region: Hernia sac containing omentum (hyperechoic, adipose tissue). Sac enters through dilated internal ring (DEEP ring diameter 2.0 cm). Sac lies medial to spermatic cord in inguinal canal. No intestinal loop in sac. No free fluid. Vascularity normal on Doppler.", isAbnormal: true, interpretation: "Indirect inguinal hernia confirmed. Omentum contents. No signs of ischemia or incarceration. Contains only fat, not bowel loops.", isEssential: true },
        { id: "mri_inguinal", name: "MRI Inguinal Region (3T, high-resolution)", cost: 8000, turnaround: "1-2 hours", category: "Imaging", result: "Right inguinal hernia sac: Omentum within sac, located lateral to inferior epigastric vessels. Sac extends from deep ring through inguinal canal toward superficial ring. No bowel. No signs of strangulation (normal signal intensity). Patent internal spermatic fascia.", isAbnormal: true, interpretation: "Confirms INDIRECT hernia (sac is lateral to inferior epigastric vessels — this is the defining feature). MRI useful to fully characterize contents and anatomy before surgery.", isEssential: false },
      ],
      correctDiagnosis: "Right Inguinal Hernia — INDIRECT (patent processus vaginalis through deep ring)",
      differentials: [
        { diagnosis: "Direct Inguinal Hernia", likelihood: "LOW", reasoning: "Direct hernia: defect in transversus abdominis aponeurosis (Hesselbach's triangle — between medial umbilical ligament and inferior epigastric vessels). Sac would be MEDIAL to inferior epigastric vessels. Our ultrasound shows sac LATERAL to vessels → INDIRECT. Also, direct hernias rare <60 years and patient has classic indirect features (scrotal extension, patent deep ring)." },
        { diagnosis: "Femoral Hernia", likelihood: "LOW", reasoning: "Femoral hernia presents below and lateral to pubic tubercle. Our swelling is above and medial to tubercle (inguinal region, not femoral canal). Also femoral hernias are 2% of all groin hernias in men (rare)." },
        { diagnosis: "Incarcerated/Strangulated Hernia", likelihood: "LOW", reasoning: "Would be painful, firm, non-reducible, possibly with fever/vomiting. Our patient has painless, easily reducible hernia with normal ultrasound showing normal vascularity." },
        { diagnosis: "Lymphadenopathy (Inguinal nodes)", likelihood: "LOW", reasoning: "Nodes would be multiple, firm, mobile. Our examination shows single, compressible, clearly reducible swelling consistent with hernia." },
      ],
      diagnosticReasoning: "52-year-old male manual laborer with 6-month history of painless right inguinal swelling, worse on standing/straining, reduces on lying down. Classic presentation of INDIRECT inguinal hernia. Physical examination critical: standing position shows bulge in inguinal region; lying supine bulge disappears (unlike direct hernia which may not fully reduce). Finger invagination into scrotum entering patent deep ring (internal ring) — this is the hallmark of INDIRECT hernia. Ultrasound confirms: hernia sac containing omentum located LATERAL to inferior epigastric vessels. This is the ANATOMICAL DEFINITION of indirect hernia — sac passes through the DEEP RING (internal ring) which is lateral to the inferior epigastric vessels. Risk factors: male, smoking, heavy lifting, family history (father had hernias). Anatomical basis: patent processus vaginalis (embryologic remnant) — should obliterate by age 2 but persists in ~25% of adults, predisposing to indirect hernia.",
      managementPlan: {
        immediateActions: [
          { action: "Advise immediate cessation of heavy lifting and straining", reasoning: "Hernias enlarge with increased intra-abdominal pressure. Manual labor accelerates expansion.", priority: "URGENT" },
          { action: "Teach manual reduction technique (lying supine, gentle pressure)", reasoning: "If incarceration occurs, patient can self-reduce to prevent strangulation (temporary measure only).", priority: "IMPORTANT" },
          { action: "Use abdominal binder or hernia truss if patient refuses surgery", reasoning: "Provides symptomatic relief, prevents enlargement. NOT curative — only buys time.", priority: "IMPORTANT" },
          { action: "Refer to general surgeon for elective repair evaluation", reasoning: "Hernias don't heal spontaneously. Only surgery (open Lichtenstein or laparoscopic) provides definitive cure.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Analgesic (PRN)", examples: ["Paracetamol 500mg TDS PRN", "Ibuprofen 400mg BD if needed"], route: "Oral", duration: "As needed", reasoning: "Pain is mild currently. Analgesics for symptomatic relief only — won't prevent complications.", contraindications: ["NSAIDs if on aspirin"], indianContext: "Paracetamol available at ₹1-2/tablet, Ibuprofen at ₹3-5/tablet." },
          { drugClass: "Stool softener (prevent straining)", examples: ["Lactulose 15-30 mL BD", "Docusate 100mg OD"], route: "Oral", duration: "Indefinite until surgery", reasoning: "Prevents constipation which increases hernia risk. Straining = increased intra-abdominal pressure.", contraindications: ["None significant"], indianContext: "Lactulose available at ₹50-100 per 100mL bottle." },
        ],
        nonPharmacological: [
          { intervention: "Activity modification — avoid heavy lifting (>10 kg)", reasoning: "Prevent expansion and complications. Patient should modify work or consider lighter duties.", duration: "Until surgery" },
          { intervention: "Weight reduction", reasoning: "Obesity (BMI 31) increases intra-abdominal pressure. Losing 5-10 kg will reduce hernia symptoms.", duration: "Ongoing" },
          { intervention: "Smoking cessation", reasoning: "Smoking increases risk of hernia recurrence post-surgery (impairs collagen synthesis). Critical for this patient with family history.", duration: "Lifelong" },
        ],
        monitoring: [
          { parameter: "Size of hernia and symptoms", frequency: "Every 3 months if not operated", target: "Stability — not rapidly enlarging", escalation: "If sudden increase in size, pain, or signs of incarceration (irreducible, tender, fever) → emergency repair" },
          { parameter: "Signs of incarceration", frequency: "Patient education on warning signs", target: "Patient aware of signs (pain, irreducibility, vomiting) to seek immediate help", escalation: "Incarcerated hernia → urgent surgical reduction within hours" },
        ],
        lifestyle: {
          dos: ["Avoid heavy lifting — use proper technique for light objects", "Regular bowel habits — prevent constipation", "Weight loss if overweight (BMI >25)", "Support abdomen during cough if needed"],
          donts: ["STOP smoking — critical for wound healing post-surgery", "Avoid straining on toilet — use stool softeners", "No heavy work until cleared post-operatively", "Do not ignore sudden pain in hernia — could be strangulation"],
          indianSpecific: ["Many Indian construction workers delay hernia repair due to cost. Jan Aushadhi hospitals offer affordable hernia repair (~₹15,000-25,000 for open repair). Free repair available at government medical colleges.", "Educate family about danger of strangulation — it's a true surgical emergency.", "During festival season (Diwali, etc.) when patient may engage in heavy activities, extra caution needed."],
        },
        followUp: {
          when: "If managed conservatively: every 3 months. After surgery: 1 week, 2 weeks, 4 weeks, 3 months, 6 months",
          what: ["Clinical examination for hernia size and symptoms", "If operated: wound healing, infection check, return to activities timeline", "Recurrence check (5-10% recurrence rate with open repair, lower with mesh)"],
        },
        referral: {
          needed: true,
          to: "General Surgeon for hernia repair evaluation (Lichtenstein open repair or laparoscopic TEP/TAPP)",
          urgency: "IMPORTANT — elective referral for surgical planning. Not emergency unless incarcerated.",
        },
      },
      redFlags: [
        { flag: "Acute severe pain in hernia", action: "Suspect incarceration/strangulation — EMERGENCY. Urgent surgical reduction needed within hours.", urgency: "IMMEDIATE" },
        { flag: "Hernia becomes irreducible (cannot push back in)", action: "Early sign of incarceration. Admit for urgent surgery before ischemia develops (risk increases after 6-12 hours).", urgency: "URGENT" },
        { flag: "Vomiting or signs of bowel obstruction with hernia pain", action: "Incarcerated bowel — obstructive symptoms. Surgical emergency.", urgency: "IMMEDIATE" },
        { flag: "Rapid enlargement of hernia (within days to weeks)", action: "May indicate weakening of tissue or new defect. Surgical consultation needed urgently.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "INDIRECT inguinal hernia: sac passes LATERAL to inferior epigastric vessels through patent DEEP RING (internal ring) — defined by anatomy",
        "DIRECT inguinal hernia: defect in TRANSVERSUS ABDOMINIS aponeurosis (Hesselbach's triangle) — sac medial to inferior epigastric vessels",
        "Hesselbach's triangle: bounded by medial umbilical ligament (laterally), inferior epigastric vessels (laterally), and rectus abdominis (medially)",
        "Indirect hernias are 2x more common than direct (70% vs 30% of inguinal hernias). Indirect more common in younger patients; direct more common in older with weak abdominal wall.",
        "Deep ring: located at midpoint of inguinal ligament, lateral to inferior epigastric vessels — where sac of indirect hernia enters inguinal canal",
        "Superficial ring: medial to deep ring, located above and lateral to pubic tubercle — where sac emerges from canal",
        "Patent processus vaginalis (embryologic remnant) predisposes to indirect hernia — should obliterate by age 2 but persists in ~25% of adults",
        "Hernia complications: INCARCERATION (irreducible, painful) → STRANGULATION (ischemic, gangrenous) — timeline is critical (>6-12 hours increases ischemia risk)",
        "Surgery is definitive cure. Open Lichtenstein repair: 5-10% recurrence. Laparoscopic TEP/TAPP: 3-5% recurrence. Emergency repair for strangulated has 10x higher mortality than elective.",
      ],
      commonMistakes: [
        "Confusing DIRECT vs INDIRECT hernia — ultrasound/MRI must show location of sac relative to inferior epigastric vessels",
        "Trying to repair indirect hernia with simple suture (primary closure) — will recur in 10-20%. Mesh (Lichtenstein) is gold standard.",
        "Missing incarceration — patient says 'it won't go back in' but seems okay. This is early incarceration. Must operate within hours before strangulation occurs.",
        "Assuming all painless hernias are safe — painless is common but doesn't mean no risk. Incarceration can develop suddenly.",
        "Ignoring family history — this patient's father had recurrent hernia. Genetic factors influence recurrence risk.",
        "Not addressing modifiable risk factors (smoking, constipation, obesity, heavy lifting) — these directly impact recurrence post-surgery.",
      ],
      relevantHistoryQs: ["onset", "character", "associated", "position_worse", "family_hernia", "smoking", "occupation", "constipation", "weight"],
      relevantExamIds: ["hernia_standing", "hernia_lying", "hernia_valsalva", "hernia_reduction", "deep_ring_invagination", "inspection_swelling"],
      difficulty: "MEDIUM",
      estimatedMinutes: 21,
      subjectTags: ["AN", "SG"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "AN3.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 3. Facial Nerve Palsy (Lower Motor Neuron) ──────────────────────────
  {
    topicCode: "AN-MOD-01-TOP-03",
    scenario: {
      patientAge: 48,
      patientSex: "Female",
      patientOccupation: "Shopkeeper",
      patientLocation: "Delhi, NCT",
      chiefComplaint: "Right side of face drooping for 2 days. Unable to close right eye. Mouth twisted to left.",
      historyOfPresent: `
- Onset: Sudden onset 2 days ago, woke up in morning with face drooping on right side
- Character: Complete inability to close right eye. Eye tearing on right (paradoxical tearing due to crocodile tears). Drooling from right corner of mouth. Speech slurred (dysarthria).
- Associated: Difficulty eating (food falls from right side of mouth). Hyperacusis — sounds seem very loud in right ear. Loss of taste on right anterior 2/3 of tongue. Mild right ear pain.
- Severity: Severe — House-Brackmann Grade V (near-total paralysis)
- Associated: No hearing loss. No vertigo. No facial weakness on left. No weakness in limbs.
- Timeline: No prodrome. No trauma. No infection prior.
      `.trim(),
      pastHistory: "Known hypertensive for 8 years on Amlodipine 5mg daily. No diabetes. No thyroid disease. No previous episodes of facial nerve palsy. No surgeries.",
      familyHistory: "No family history of facial nerve disorders. No history of autoimmune conditions.",
      socialHistory: "Non-smoker. Occasional alcohol. Works as shopkeeper (standing). Diet: standard North Indian. Sleep: 6-7 hours/night, adequate.",
      drugHistory: "Amlodipine 5mg OD. No other medications. No recent antibiotics. Penicillin allergy (rash). NKDA otherwise.",
      vitals: { pulse: 78, bp: "134/82", temp: 36.9, rr: 16, spo2: 98 },
      generalExam: `
- General appearance: Anxious, distressed. Face asymmetry obvious.
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema
- Facial appearance: RIGHT SIDE OF FACE DROOPING. Right eye CANNOT close (lagophthalmos). Right eyebrow dropped. Right nasolabial fold OBLITERATED (flattened). Right corner of mouth droops. Smile asymmetric — LEFT side pulls up, RIGHT side stays down.
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1 S2 normal. Regular rate. No murmurs.",
          peripheral_pulses: "All pulses palpable and equal",
          blood_pressure: "134/82 mmHg",
        },
        respiratory: {
          chest_inspection: "Bilateral equal chest movements",
          auscultation_lungs: "Clear bilateral air entry. No crackles or wheeze.",
          vocal_resonance: "Normal",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended",
          palpation_superficial: "No tenderness",
          palpation_deep: "No organomegaly",
          liver_palpation: "Not palpable",
          spleen_palpation: "Not palpable",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "GCS 15/15 — fully alert and oriented",
          mental_status: "Anxious but cognition normal",
          cranial_nerve_I: "Not tested (not clinically relevant)",
          cranial_nerve_II: "Vision 6/6 bilaterally (normal)",
          cranial_nerve_III_IV_VI: "Extraocular movements intact bilaterally. Pupil size and reaction normal.",
          cranial_nerve_V: "Facial sensation normal to light touch bilaterally (trigeminal intact). Corneal reflex: ABNORMAL — right corneal reflex ABSENT (CN VII motor component affected). Left corneal reflex normal.",
          cranial_nerve_VII_FACIAL: {
            forehead_wrinkles: "RIGHT FOREHEAD CANNOT WRINKLE (no frontal muscle contraction). LEFT side wrinkles normally. → INDICATES LOWER MOTOR NEURON lesion (in LMN, even forehead affected)",
            eye_closure: "RIGHT EYE CANNOT CLOSE (orbicularis oculi paralyzed). LEFT eye closes fully. Attempt to close right eye → BELL PHENOMENON (eyeball rolls upward, trying to protect cornea). RIGHT eye shows LAGOPHTHALMOS.",
            nasal_flair: "RIGHT NOSTRIL CANNOT FLARE (dilator naris weak). LEFT nostril flares normally.",
            mouth: "Smile asymmetric. Cannot pucker right side of mouth. CANNOT SHOW TEETH on right (mouth droops). Puff cheeks test: cannot puff right cheek (air escapes from right mouth corner).",
            taste: "Loss of taste sensation on right anterior 2/3 of tongue (via chorda tympani, pre-ganglionic parasympathetic). Left taste normal. Salty stimulus applied — patient cannot taste on right.",
            ear_sensitivity: "Hyperacusis: sounds very loud in right ear (due to loss of innervation to stapedius muscle — CN VII supplies stapedius. Loss of normal dampening → hyperacusis).",
          },
          cranial_nerve_VIII: "Hearing grossly intact bilaterally. No tinnitus. No vertigo. Weber and Rinne tests: normal conduction bilaterally (no sensorineural hearing loss).",
          cranial_nerve_IX_X_XII: "Palate midline on phonation 'AHH'. Gag reflex intact bilaterally. Tongue protrusion midline (hypoglossal intact). Speech slurred due to facial weakness, not from tongue weakness.",
          upper_limbs: "No weakness. Power 5/5 all major groups. Grip strength equal bilaterally.",
          lower_limbs: "No weakness. Power 5/5 all major groups.",
          reflexes: "Normal and symmetrical",
          plantar: "Flexor bilaterally (normal)",
          gait: "Normal",
        },
      },
      availableInvestigations: [
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 12.9 g/dL, WBC: 7,100/μL, Platelets: 2.4 lakhs", isAbnormal: false, interpretation: "Normal complete blood count.", isEssential: false },
        { id: "blood_sugar", name: "Random Blood Sugar", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "RBS: 108 mg/dL", isAbnormal: false, interpretation: "Normal fasting glucose. Diabetes ruled out as cause.", isEssential: false },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 28 mg/dL, Creatinine: 0.8 mg/dL, Na: 140 mEq/L, K: 4.0 mEq/L", isAbnormal: false, interpretation: "Normal renal function. Electrolytes normal.", isEssential: false },
        { id: "lft", name: "Liver Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Bilirubin: 0.8 mg/dL, AST: 32 U/L, ALT: 28 U/L, ALP: 72 U/L", isAbnormal: false, interpretation: "Normal liver function. Rules out Ramsay Hunt syndrome (if associated with otitis media/herpes zoster).", isEssential: false },
        { id: "esr", name: "Erythrocyte Sedimentation Rate (ESR)", cost: 150, turnaround: "1 hour", category: "Hematology", result: "ESR: 12 mm/hr (normal)", isAbnormal: false, interpretation: "Normal. Argues against chronic inflammatory causes (Melkersson-Rosenthal, sarcoidosis).", isEssential: false },
        { id: "bp_monitoring", name: "24-hour Ambulatory Blood Pressure Monitoring", cost: 2000, turnaround: "1 day", category: "Cardiovascular", result: "Average BP 132/80 over 24 hours. Morning surge noted (148/90 at 8 AM). No severe hypertension or hypotension episodes.", isAbnormal: false, interpretation: "Hypertension reasonably controlled. Morning surge common. Not a trigger for sudden facial palsy.", isEssential: false },
        { id: "mri_brain_fp", name: "MRI Brain (with focus on facial nerve canal)", cost: 12000, turnaround: "2 hours", category: "Imaging", result: "Right facial nerve shows enhancement and mild edema within the temporal bone. No mass lesion. No acute stroke. No brainstem involvement. No CPA lesion. Left facial nerve normal.", isAbnormal: true, interpretation: "Facial nerve inflammation (likely viral — idiopathic Bell's palsy). MRI rules out structural causes (tumor, brainstem stroke, parotid pathology).", isEssential: true },
        { id: "ct_temporal", name: "High-resolution CT Temporal Bone (fine cuts)", cost: 3000, turnaround: "1 hour", category: "Imaging", result: "Right facial nerve canal normal bony anatomy. No fracture. No erosion. Normal mastoid air cells. No otitis media.", isAbnormal: false, interpretation: "Rules out temporal bone fracture or other structural abnormality. Supports idiopathic Bell's palsy.", isEssential: true },
        { id: "emg_ncs", name: "Electromyography & Nerve Conduction Study (right facial nerve)", cost: 3000, turnaround: "Variable, done at 3-5 days for prognostication", category: "Neurophysiology", result: "At 2 days: mostly normal (too early for denervation changes). Nerve conduction: minimal slowing if any. Motor unit recruitment: not fully testable yet due to complete paralysis. Recommendation: repeat at 3-5 days for better prognostication.", isAbnormal: false, interpretation: "EMG/NCS at 2 days too early. Best done at 3-5 days to assess degree of nerve injury (neuropraxia vs axonotmesis). >90% degeneration = worse prognosis, needs high-dose steroids.", isEssential: true },
        { id: "vrl_serology", name: "Viral Serology (HSV-1, VZV, EBV) — Acute and Convalescent", cost: 1200, turnaround: "48-72 hours", category: "Microbiology", result: "HSV-1 IgM: Negative initially (may seroconvert in next 7-10 days). VZV: negative. EBV: prior immunity (IgG positive, IgM negative).", isAbnormal: false, interpretation: "No acute viral serology at 2 days — serology may take 7-10 days to develop. Supports presumed viral etiology but not confirmatory.", isEssential: false },
      ],
      correctDiagnosis: "Bell's Palsy (Idiopathic Facial Nerve Paralysis) — Lower Motor Neuron Type (CN VII)",
      differentials: [
        { diagnosis: "Ramsay Hunt Syndrome (Herpes Zoster Oticus)", likelihood: "MEDIUM", reasoning: "Also CN VII palsy but with VESICLES in ear canal and pinna. No vesicles noted here. Usually has otalgia (ear pain) — this patient has mild ear pain but NO vesicles on examination. HZV serology pending." },
        { diagnosis: "Stroke (Brainstem — facial nucleus)", likelihood: "MEDIUM", reasoning: "Would show UPPER MOTOR NEURON pattern: forehead SPARED (intact crossed innervation), lower face paralyzed. Our patient has FOREHEAD INVOLVEMENT → LMN. Also, would have other brainstem signs (limb weakness, ataxia). MRI rules out stroke." },
        { diagnosis: "Parotid Malignancy (Facial nerve compression)", likelihood: "LOW", reasoning: "Would show gradual onset over weeks, not sudden. Palpable parotid mass. Physical exam shows no parotid swelling. Acute onset overnight argues against malignancy." },
        { diagnosis: "Cholesteatoma with Facial Nerve Erosion", likelihood: "LOW", reasoning: "Would require chronic middle ear disease history or otorrhea. No such history. CT shows normal mastoid air cells. Acute presentation argues against this." },
        { diagnosis: "Lyme Disease (Lyme arthritis with Facial Palsy)", likelihood: "LOW", reasoning: "Rare in India. More common in USA/Europe where Borrelia burgdorferi endemic. No tick exposure history. No migratory rash (erythema migrans)." },
      ],
      diagnosticReasoning: "48-year-old hypertensive female with sudden onset right-sided facial weakness, inability to close right eye with lagophthalmos, loss of taste on right anterior 2/3 of tongue, and hyperacusis in right ear. CRITICAL FINDING: RIGHT FOREHEAD CANNOT WRINKLE — this indicates LOWER MOTOR NEURON (LMN) lesion of CN VII. (In UMN stroke, forehead is spared due to bilateral cortical innervation.) Classic LMN facial palsy presentation: complete facial paralysis on one side with involvement of all CN VII branches including forehead, orbicularis oculi, buccinator, orbicularis oris. Loss of taste via chorda tympani (preganglionic parasympathetic to anterior 2/3 of tongue). Hyperacusis from stapedius paralysis (CN VII supplies stapedius). MRI shows facial nerve inflammation in temporal canal, consistent with viral cause. No structural lesion on imaging. Clinical diagnosis: BELL'S PALSY (idiopathic CN VII palsy) — most common cause of acute facial palsy (70% of cases). Anatomically: CN VII exits stylomastoid foramen, has complex course through temporal bone and parotid gland, branches into 5 terminal branches (temporal, zygomatic, buccal, marginal mandibular, cervical). The nerve's long intratemporal course makes it vulnerable to viral infection, inflammation, and ischemia.",
      managementPlan: {
        immediateActions: [
          { action: "Urgent eye care — MOST IMPORTANT to prevent corneal scarring", reasoning: "Lagophthalmos means right eye cannot close. Cornea exposed to air → risk of ulceration and blindness. MUST be prevented.", priority: "STAT" },
          { action: "Start eye protection: artificial tears hourly, eye ointment at night, protective eyewear", reasoning: "Keep cornea moist and protected. Gold standard is night eye taping or protective glasses during day.", priority: "STAT" },
          { action: "High-dose systemic corticosteroids — if within 48-72 hours", reasoning: "Evidence shows steroids within 48-72 hours improve complete recovery rate. High dose: Prednisolone 1mg/kg/day (max 80mg) x 7 days, then taper.", priority: "URGENT" },
          { action: "Urgent MRI brain to rule out structural lesion", reasoning: "Sudden onset facial palsy could rarely be from stroke or tumor. MRI essential to rule out masqueraders.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Corticosteroid (High-dose)", examples: ["Prednisolone 80mg (or 1mg/kg if <80kg) OD x 7 days, then taper"], route: "Oral", duration: "7 days high dose, then taper over 7-10 days", reasoning: "Reduces facial nerve inflammation and edema. Most effective if started within 48-72 hours (patient is at day 2 — WITHIN WINDOW). Improves complete recovery from ~64% to ~83%.", contraindications: ["Uncontrolled diabetes", "Peptic ulcer disease", "Tuberculosis", "Immunosuppression"], indianContext: "Prednisolone 5mg tablet at ₹0.50-1 per tablet. Cost for full course ~₹30-50." },
          { drugClass: "Acyclovir or Valacyclovir (Antiviral — debated)", examples: ["Acyclovir 400mg PO 5x/day x 10 days", "OR Valacyclovir 1000mg TDS x 7 days"], route: "Oral", duration: "7-10 days", reasoning: "Debate ongoing on benefit. Some studies show slight added benefit when combined with steroids (Famciclovir/Valacyclovir > Acyclovir). Starting early (within 48 hrs) may help if viral etiology confirmed.", contraindications: ["Renal impairment (reduce dose)", "Pregnancy (use with caution)"], indianContext: "Acyclovir 400mg at ₹5-8 per tablet. Valacyclovir 500mg at ₹30-50 per tablet. Cost ₹300-500 for full course." },
          { drugClass: "Analgesic (for ear/facial pain)", examples: ["Ibuprofen 400mg TDS PRN", "Paracetamol 500mg TDS PRN"], route: "Oral", duration: "As needed", reasoning: "Many patients have otalgia (ear pain). Mild pain here — analgesics for symptomatic relief.", contraindications: ["NSAIDs if peptic ulcer"], indianContext: "Ibuprofen and Paracetamol inexpensive." },
          { drugClass: "Eye drops — Artificial Tears", examples: ["Carboxymethyl cellulose (CMC) 0.5% drops every 1-2 hours", "Preservative-free preferred"], route: "Topical (eye)", duration: "Continuous while eye cannot close", reasoning: "CRITICAL to prevent corneal drying and ulceration. Lagophthalmos means cornea exposed.", contraindications: ["None"], indianContext: "Artificial tear drops at ₹50-150 per bottle. Jan Aushadhi may stock generic versions." },
          { drugClass: "Eye ointment — Lubricating", examples: ["Liquid paraffin + White soft paraffin (1:1)", "Applied at night before sleeping"], route: "Topical (eye)", duration: "Every night", reasoning: "Provides long-lasting lubrication during sleep when tears production drops and eye closed with ointment.", contraindications: ["None"], indianContext: "Simple eye ointment inexpensive, available at any pharmacy." },
        ],
        nonPharmacological: [
          { intervention: "Protective eyewear during day (sunglasses or plastic protective shield)", reasoning: "Protects eye from dust, wind, and accidental trauma. Reduces evaporation from exposed cornea.", duration: "While paralyzed (3-6 months or longer)" },
          { intervention: "Eye taping at night (gold standard)", reasoning: "Gently tape eyelid closed at night with hypoallergenic tape. Ensures cornea coverage during sleep. Most effective prevention.", duration: "Nightly until eye closure returns" },
          { intervention: "Facial physiotherapy (optional)", reasoning: "Neuromuscular re-education — helps with synkinesis and improves recovery. Evidence moderate. Start after 3-4 weeks.", duration: "3-6 months" },
        ],
        monitoring: [
          { parameter: "Corneal health — daily self-inspection", frequency: "Daily", target: "Clear cornea, no redness, no pain, no discharge", escalation: "If any sign of irritation, redness, discharge → urgent ophthalmology assessment for corneal ulcer/keratitis" },
          { parameter: "House-Brackmann Grading of facial strength", frequency: "Weekly for first 4 weeks, then monthly", target: "Improvement from Grade V toward Grade I (normal). Most recovery occurs in first 3-4 weeks.", escalation: "If no improvement by 3-4 weeks → consider EMG/NCS for prognostication; if severe denervation may need electrical stimulation" },
          { parameter: "Taste sensation on right anterior 2/3 tongue", frequency: "Every 2 weeks", target: "Return of taste (indicates CN VII chorda tympani recovery)", escalation: "Taste usually returns before facial movement. Delayed taste recovery suggests poorer prognosis." },
          { parameter: "Tearing (lacrimation)", frequency: "Every 2 weeks", target: "Return of tears. Initially loss of tears on right (CN VII damaged). Recovery of tears suggests nerve recovery.", escalation: "Persistent absence of tears at 3 months suggests permanent nerve damage." },
        ],
        lifestyle: {
          dos: ["Use artificial tears at least every 1-2 hours", "Tape eye closed at night", "Wear protective eyewear outdoors", "Apply eye ointment before sleeping", "Eat soft foods (easier to chew)", "Facial physiotherapy after 4 weeks"],
          donts: ["Do NOT apply eye patches (increases eye pressure and worsens nerve compression)", "Do NOT expose eye without protection", "Do NOT use contact lenses (cannot wear with lagophthalmos)", "Do NOT skip eye care — even one night of exposure can cause corneal damage", "Avoid wind, dust exposure"],
          indianSpecific: ["In India, dust and pollution are major challenges. Use good quality sunglasses (UV-protected) when outdoors. During monsoon, dust and humidity can aggravate eye symptoms.", "Educate family that facial palsy is NOT due to 'cold draft' or 'evil eye' — it's a nerve inflammation that needs medical care.", "Access to ophthalmology: All government teaching hospitals have ophthalmology OPD — refer if any eye symptoms."],
        },
        followUp: {
          when: "1 week, 2 weeks, 4 weeks, 8 weeks, 12 weeks, 6 months",
          what: ["Assess degree of facial nerve recovery (House-Brackmann grading)", "Eye examination — check for corneal changes, ulceration", "Taste assessment", "EMG/NCS if recovery inadequate at 3-4 weeks to prognosticate", "Assess for synkinesis (aberrant regeneration causing involuntary movements when attempting other motions)"],
        },
        referral: {
          needed: true,
          to: "Ophthalmologist (urgent for eye care) and Neurologist (for prognostication with EMG/NCS at 3-4 weeks if poor recovery)",
          urgency: "URGENT — Ophthalmology for eye protection same day. Neurology within 1 week for baseline assessment.",
        },
      },
      redFlags: [
        { flag: "Corneal redness, pain, discharge, or 'gritty' sensation", action: "URGENT ophthalmology referral — may indicate corneal ulcer. Start intensive eye lubrication (drops every 30 min). Avoid eye patching (increases IOP).", urgency: "URGENT" },
        { flag: "No improvement in facial strength by 3-4 weeks (still Grade V)", action: "EMG/NCS at 3-4 weeks for prognostication. >90% degeneration = worse prognosis, may need electrical stimulation or surgical decompression (if within 3 weeks of onset).", urgency: "IMPORTANT" },
        { flag: "Bilateral facial paralysis", action: "RARE in Bell's palsy. Suggests other diagnosis: Lyme disease, sarcoidosis, Melkersson-Rosenthal, Guillain-Barré. Immediate neurology consultation.", urgency: "URGENT" },
        { flag: "Progressive facial weakness (worsening daily)", action: "Atypical for Bell's. Suggests structural lesion (tumor). Repeat MRI or request neurosurgery consultation.", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Bell's palsy is the MOST common cause of acute unilateral facial paralysis (70% of cases) — diagnosis of exclusion after ruling out structural causes",
        "ANATOMICAL BASIS OF LMN FACIAL PALSY: CN VII lesion affects ALL facial muscles including FOREHEAD (this is how you distinguish LMN from UMN stroke where forehead is spared)",
        "Branches of CN VII: exits stylomastoid foramen → traverses temporal bone → emerges at parotid → 5 terminal branches (Temporal, Zygomatic, Buccal, Marginal Mandibular, Cervical) — mnemonic 'TZBC'",
        "CN VII carries preganglionic parasympathetic fibers via chorda tympani — innervates submandibular and sublingual glands, and taste to anterior 2/3 tongue",
        "CN VII innervates stapedius muscle — loss causes hyperacusis (sounds seem very loud due to loss of normal attenuation)",
        "Corneal protection is MOST CRITICAL complication to prevent — lagophthalmos can lead to corneal ulcer and blindness within days. Eye taping at night is gold standard.",
        "High-dose steroids (Prednisolone 1mg/kg/day x 7 days) within 48-72 hours improves complete recovery rate from ~64% to ~83% (strong RCT evidence)",
        "EMG/NCS at 3-5 days prognosticates severity: if >90% nerve fiber degeneration, worse prognosis, may need higher-dose steroids or intervention",
        "Most patients recover spontaneously within 3-6 months (80-90% achieve House-Brackmann Grade I-II). Only ~10% have permanent disability.",
        "UMN facial palsy (stroke): forehead spared, lower face paralyzed, UMN signs (hemiparesis) — different from LMN Bell's palsy",
      ],
      commonMistakes: [
        "Assuming Bell's palsy is diagnosis without MRI — must rule out stroke (brainstem), tumor, parotid pathology, temporal bone disease. Sudden facial palsy = MRI brain mandatory.",
        "Mistaking UMN stroke for Bell's palsy — forehead preserved in stroke (bilateral cortical innervation). In Bell's, forehead is paralyzed → LMN.",
        "Delaying steroids — evidence strong if started within 48-72 hours. If patient presents at day 5, steroids less effective but not contraindicated.",
        "Using eye patching for eye protection — WRONG. Patching increases IOP and can worsen nerve compression. Use taping and drops instead.",
        "Neglecting eye care — thinking facial palsy is just cosmetic. Corneal ulcer is serious complication leading to permanent blindness. Eye care is PRIORITY.",
        "Starting antivirals alone without steroids — some benefit but steroids + antivirals > antivirals alone. Steroids are mainstay.",
        "Not counseling on prognosis — most patients recover fully. Reassurance is important for psychological wellbeing.",
        "Missing Ramsay Hunt syndrome — if vesicles in external ear canal or pinna, suspect Ramsay Hunt (herpes zoster oticus). Management includes antivirals (Acyclovir/Valacyclovir) + steroids.",
      ],
      relevantHistoryQs: ["onset", "associated_symptoms", "taste_loss", "ear_pain", "hyperacusis", "eye_closure_loss", "previous_episodes", "family_neuro"],
      relevantExamIds: ["forehead_wrinkles", "eye_closure", "bell_phenomenon", "nasal_flare", "mouth_drooping", "taste_sensation", "corneal_reflex", "hearing_test"],
      difficulty: "MEDIUM",
      estimatedMinutes: 24,
      subjectTags: ["AN", "NS"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "AN1.3",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
