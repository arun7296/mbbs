// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for Orthopedics (OR)
// Starting with 3 high-yield orthopedic topics aligned with NMC CBME
// ---------------------------------------------------------------------------

export const orthopedicsScenarios = [
  // ─── 1. Fracture Neck of Femur (Elderly Fall) ─────────────────────────
  {
    topicCode: "OR-MOD-01-TOP-01",
    scenario: {
      patientAge: 72,
      patientSex: "Female",
      patientOccupation: "Retired schoolteacher",
      patientLocation: "Indore, Madhya Pradesh",
      chiefComplaint: "Unable to walk after fall from sitting position at home 4 hours ago",
      historyOfPresent: `
- Onset: Sudden, occurred at 10:30 AM today while getting up from a chair after breakfast
- Mechanism: Simple fall from sitting height — tripped on carpet edge, fell onto right hip
- Character: Severe pain in right hip region
- Location: Right groin and anterior hip
- Severity: 8/10 on pain scale, cannot bear weight
- Associated: Heard a crack/pop sound during fall, immediate inability to stand, swelling of right hip
- Mobility: Unable to lift right leg off bed, very painful with any hip movement
- Timeline: Brought to hospital 4 hours after fall, significant delay due to being alone initially
      `.trim(),
      pastHistory: "Known osteoporosis diagnosed 5 years ago (on calcium supplementation only). Had menopause 22 years ago. No diabetes. No significant surgeries. Previous falls × 3 (but minor, no fractures).",
      familyHistory: "Mother had hip fracture at age 75. Father died of pneumonia at 82. Sister has osteoporosis.",
      socialHistory: "Non-smoker, occasional alcohol (wine with meals). Lives alone since husband's death 8 years ago. House has uneven flooring, poor lighting. Low physical activity — mostly sedentary. Diet: Traditional, adequate protein intake. No recent illnesses.",
      drugHistory: "Calcium carbonate 1000mg + Vitamin D3 400IU daily (irregular). No other medications. No known drug allergies.",
      vitals: { pulse: 88, bp: "138/82", temp: 36.8, rr: 18, spo2: 96 },
      generalExam: `
- General appearance: Elderly female, in mild distress, lying on back with right leg externally rotated
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: Mild swelling over right hip region, no discoloration
- JVP: Normal
- Dehydration: Mild (delayed capillary refill ~2.5 sec)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "5th ICS mid-clavicular line — normal",
          heart_sounds: "S1, S2 heard clearly. Regular rhythm. No murmurs.",
          peripheral_pulses: "All pulses palpable, equal bilaterally. Regular rhythm.",
          blood_pressure: "Right arm: 138/82, Left arm: 135/80 mmHg",
        },
        respiratory: {
          chest_inspection: "Bilateral equal chest movements. No signs of respiratory distress.",
          trachea: "Trachea central",
          percussion: "Resonant bilaterally",
          auscultation_lungs: "Bilateral clear air entry. No added sounds.",
          vocal_resonance: "Normal bilaterally",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended",
          palpation_superficial: "No tenderness in abdomen",
          palpation_deep: "No organomegaly",
          liver_palpation: "Not palpable",
          spleen_palpation: "Not palpable",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "GCS 15/15 — fully alert and oriented",
          cranial_nerves: "Intact",
          reflexes: "Normal and symmetrical",
          plantar: "Plantar response flexor bilaterally",
        },
        musculoskeletal: {
          right_hip_attitude: "Externally rotated at 30-40 degrees, slightly flexed",
          right_hip_movement: "Severely painful, unable to perform active or passive ROM",
          hip_inspection: "Swelling visible over right hip and trochanteric region",
          femoral_length: "Right limb appears shorter than left by ~2 cm",
          neurovascular: "Pedal pulses palpable bilaterally. No distal sensory loss. Calf muscles soft, no tenderness (ruling out DVT).",
        },
      },
      availableInvestigations: [
        { id: "xray_hip_ap", name: "X-ray Pelvis (AP view)", cost: 250, turnaround: "10 min", category: "Imaging", result: "Fracture of neck of femur (intracapsular) on right side. Apparent shortening of right femur. No other fractures.", isAbnormal: true, interpretation: "Classic intracapsular femoral neck fracture. Displaced. High risk of avascular necrosis due to disruption of blood supply.", isEssential: true },
        { id: "xray_hip_lateral", name: "X-ray Hip (Lateral view)", cost: 250, turnaround: "10 min", category: "Imaging", result: "Confirms displacement of fracture. Femoral head is displaced anteriorly and superiorly.", isAbnormal: true, interpretation: "Displaced intracapsular fracture — Garden classification likely Grade III or IV.", isEssential: true },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 11.8 g/dL (mild anemia), WBC: 9,200/μL (normal), Platelets: 2.2 lakhs", isAbnormal: true, interpretation: "Mild anemia — may worsen with blood loss. Patient is not acutely bleeding. Baseline acceptable for surgery.", isEssential: true },
        { id: "coag_profile", name: "Coagulation Profile (PT/INR, aPTT)", cost: 400, turnaround: "1 hour", category: "Hematology", result: "PT: 13.2 sec, INR: 1.05. aPTT: 28 sec (all normal)", isAbnormal: false, interpretation: "Normal coagulation — safe for surgery.", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 38 mg/dL, Creatinine: 1.1 mg/dL, Na: 138 mEq/L, K: 4.0 mEq/L", isAbnormal: false, interpretation: "Normal renal function. Baseline acceptable for surgery and anesthesia.", isEssential: true },
        { id: "rbs", name: "Random Blood Sugar", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "RBS: 122 mg/dL", isAbnormal: false, interpretation: "Normal — no evidence of undiagnosed diabetes.", isEssential: false },
        { id: "chest_xray", name: "Chest X-ray (Portable)", cost: 300, turnaround: "15 min", category: "Imaging", result: "Cardiac silhouette normal. Lung fields clear. No signs of heart failure or pneumonia. No acute findings.", isAbnormal: false, interpretation: "Preoperative clearance. Safe for general anesthesia.", isEssential: true },
        { id: "ecg", name: "12-lead ECG", cost: 200, turnaround: "5 min", category: "Cardiac", result: "Normal sinus rhythm at 88 bpm. Normal axis. No ST changes. No arrhythmias.", isAbnormal: false, interpretation: "Normal baseline ECG. Acceptable for surgery in elderly patient.", isEssential: true },
        { id: "dexa_scan", name: "DEXA Scan (Bone Mineral Density)", cost: 2000, turnaround: "1 week", category: "Imaging", result: "Femoral neck T-score: -3.2 (severe osteoporosis)", isAbnormal: true, interpretation: "Confirms severe osteoporosis. Explains fracture from simple fall. Risk factor for future fractures.", isEssential: false },
      ],
      correctDiagnosis: "Displaced Intracapsular Fracture of Femoral Neck (Right) — Garden Grade III/IV",
      differentials: [
        { diagnosis: "Extracapsular Femoral Neck Fracture", likelihood: "LOW", reasoning: "X-ray clearly shows fracture line within the femoral neck, proximal to the intertrochanteric line. Extracapsular would be at or distal to intertrochanteric line." },
        { diagnosis: "Intertrochanteric Fracture", likelihood: "LOW", reasoning: "Fracture is clearly in the neck region, not at the level of the greater/lesser trochanters. Radiographic location is pathognomonic for femoral neck." },
        { diagnosis: "Hip Dislocation", likelihood: "LOW", reasoning: "Femoral head is still in the acetabulum, though displaced at the neck region. True dislocation would show femoral head completely out of socket." },
        { diagnosis: "Femoral Shaft Fracture", likelihood: "LOW", reasoning: "Fracture is confined to the femoral neck region. Shaft fracture would be more distal." },
      ],
      diagnosticReasoning: "72-year-old female with severe osteoporosis presenting with classic history of hip fracture from simple fall. Physical examination shows characteristic 'frog-leg' position — hip externally rotated, shortened right limb, severe pain with any movement. AP and lateral X-rays confirm intracapsular femoral neck fracture with displacement. Garden classification likely III or IV (displaced). This is a high-risk case for avascular necrosis because displaced intracapsular fractures disrupt the femoral head blood supply (especially with displacement of >50%). Immediate management decisions needed: internal fixation (if displaced intracapsular) or hip arthroplasty (total hip replacement — preferred in elderly with displaced intracapsular).",
      managementPlan: {
        immediateActions: [
          { action: "Establish IV access and start IV Normal Saline 500 mL bolus", reasoning: "Mild dehydration and need for fluid support preoperatively. Target urine output >0.5 mL/kg/hr.", priority: "URGENT" },
          { action: "Administer analgesia: Tramadol 50-100mg IV or Morphine 5-10mg IV", reasoning: "Severe pain (8/10) impairs respiration, sleep, and increases thromboembolism risk. Effective analgesia is essential.", priority: "STAT" },
          { action: "Apply skeletal traction or Thomas splint to right lower limb", reasoning: "Prevents shortening, reduces pain, and maintains limb alignment while awaiting surgery.", priority: "URGENT" },
          { action: "Initiate DVT prophylaxis: Enoxaparin 40mg SC OD", reasoning: "Elderly patient with hip fracture has very high DVT/PE risk (25-50% if untreated). Start immediately. Continue 10-14 days post-operatively.", priority: "URGENT" },
          { action: "Optimize preoperative status: assess for anesthesia risk, cardiac clearance", reasoning: "Elderly patient needs full medical optimization before emergency surgery. ECG, CXR, basic labs done.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Opioid Analgesic", examples: ["Tramadol 50-100mg IV/IM 6-hourly", "Morphine 5-10mg IV 4-hourly PRN"], route: "IV/IM", duration: "Until adequate pain relief, then taper", reasoning: "Control severe pain, improve mobilization, reduce thromboembolism risk. Monitor for respiratory depression in elderly.", contraindications: ["Respiratory depression", "Sleep apnea"], indianContext: "Tramadol 50mg injection at ₹20-30. Morphine 10mg injection at ₹40-60 per dose." },
          { drugClass: "NSAID", examples: ["Indomethacin 50mg OD (if renal function permits)", "Meloxicam 7.5mg OD"], route: "Oral/Parenteral", duration: "1-2 weeks for heterotopic ossification prophylaxis", reasoning: "Reduces heterotopic ossification risk in high-risk fractures. Use cautiously in elderly.", contraindications: ["GI ulceration", "Renal impairment", "Anticoagulation therapy"], indianContext: "Meloxicam 7.5mg tablet at ₹3-5. Available generically." },
          { drugClass: "Anticoagulant (Thromboembolism Prophylaxis)", examples: ["Enoxaparin 40mg SC OD", "Rivaroxaban 10mg OD"], route: "SC/Oral", duration: "10-14 days post-operatively", reasoning: "Prevents DVT/PE in immobilized elderly patient. LMWH is preferred over UFH in fracture patients.", contraindications: ["Active bleeding", "Platelet count <50,000"], indianContext: "Enoxaparin prefilled syringe 40mg at ₹250-350 per injection. Total course ~₹3000-4000." },
          { drugClass: "Calcium + Vitamin D", examples: ["Calcium carbonate 1500mg daily", "Cholecalciferol (Vitamin D3) 2000 IU daily"], route: "Oral", duration: "Lifelong", reasoning: "Maximize bone healing and prevent further fractures. Patient already on calcium but needs optimization.", contraindications: ["Hypercalcemia", "Hyperparathyroidism"], indianContext: "Calcium 500mg tablet at ₹2-3. Vitamin D3 1000IU at ₹1-2. Combined generic formulations at ₹5-8." },
          { drugClass: "Proton Pump Inhibitor (GI prophylaxis)", examples: ["Pantoprazole 40mg IV/Oral OD"], route: "IV/Oral", duration: "Duration of NSAIDs or hospitalization", reasoning: "Stress ulcer prophylaxis, especially with NSAIDs and immobilization.", contraindications: ["None significant"], indianContext: "Pantoprazole 40mg at ₹5-10 per dose." },
        ],
        nonPharmacological: [
          { intervention: "Skeletal traction with Thomas splint or Buck's traction (temp)", reasoning: "Reduces pain, prevents further displacement before surgery. Alignment is critical.", duration: "Until surgery (should be within 24-48 hours)" },
          { intervention: "Bed rest with proper positioning — use pillows between legs", reasoning: "Prevents external rotation, reduces pain, decreases risk of DVT.", duration: "Preoperatively and 48 hours post-op" },
          { intervention: "Chest physiotherapy and breathing exercises", reasoning: "Elderly patients at risk of postoperative pneumonia. Prevention is key.", duration: "Preoperatively and postoperatively" },
          { intervention: "Early mobilization starting post-op day 1 under physiotherapy guidance", reasoning: "Reduces complications (DVT, pneumonia, pressure ulcers). Improves functional outcomes.", duration: "From post-op day 1 onwards" },
        ],
        monitoring: [
          { parameter: "Limb circumference (right thigh/calf)", frequency: "Daily", target: "No increase >2cm (screening for DVT)", escalation: "If swelling increases, warmth, or calf tenderness — assess for DVT. D-dimer and duplex ultrasound." },
          { parameter: "Temperature chart", frequency: "Every 4 hours", target: "Afebrile", escalation: "If fever >38.5°C — assess for UTI, aspiration pneumonia, wound infection" },
          { parameter: "Oxygen saturation and respiratory rate", frequency: "Every 2 hours", target: "SpO2 >94%, RR 12-20", escalation: "If SpO2 <90% or RR >25 — assess for pneumonia, fat embolism, PE" },
          { parameter: "Pain assessment and analgesic titration", frequency: "Every 2-4 hours", target: "Pain <4/10 to allow mobilization", escalation: "If pain uncontrolled — review medication, assess for compartment syndrome" },
          { parameter: "Urine output and hydration status", frequency: "Every 6 hours", target: "Urine output >0.5 mL/kg/hr, normal fluid balance", escalation: "If oliguric — assess for dehydration, rhabdomyolysis, acute kidney injury" },
        ],
        lifestyle: {
          dos: [
            "Complete the prescribed anticoagulation course (10-14 days) — very important to prevent blood clots",
            "Follow physiotherapy instructions strictly for hip mobilization and strengthening exercises",
            "Use walker or crutches for at least 6-12 weeks to avoid full weight-bearing initially",
            "Take calcium and vitamin D supplements consistently for life",
            "Get regular sunlight exposure for vitamin D synthesis",
            "Sleep on back or non-operative side to protect the hip",
          ],
          donts: [
            "Do NOT bend hip more than 90 degrees for 6-12 weeks (depending on surgical method)",
            "Do NOT cross legs or internally rotate hip — risk of dislocation",
            "Do NOT drive for 6-8 weeks (pain and restricted motion)",
            "Do NOT perform heavy lifting or strenuous activity for 3-6 months",
            "Avoid slippery footwear — wear non-slip shoes",
            "Do NOT ignore swelling, warmth in leg — could be DVT",
          ],
          indianSpecific: [
            "Install grab bars in bathroom to prevent falls at home",
            "Use Indian toilet seats with support rails if needed",
            "Have someone assist with activities like bathing, dressing for first few weeks",
            "Ensure adequate nutrition — include milk, eggs, fish for bone healing",
            "Wear long loose clothing that doesn't require extensive bending to put on",
            "Adjust sleeping arrangements — ensure comfortable bed at correct height",
            "Regular follow-up at government hospitals for long-term bone mineral density checks",
          ],
        },
        followUp: {
          when: "2 weeks (first post-op check), 6 weeks (radiographic union assessment), 12 weeks (functional assessment), then 6-monthly for 2 years",
          what: [
            "Clinical examination and assessment of ROM and pain",
            "X-ray (AP and lateral views) to assess fracture healing and stability",
            "Assessment of functional status — ability to walk, stairs, daily activities",
            "Check for DVT signs (swelling, warmth, calf tenderness)",
            "Evaluate for complications: avascular necrosis, non-union, heterotopic ossification",
            "Repeat DEXA scan at 1 year to guide osteoporosis therapy",
            "Reassess antiosteoporotic medications — consider bisphosphonates or teriparatide if severe osteoporosis",
          ],
        },
        referral: {
          needed: true,
          to: "Orthopedic surgeon for immediate surgical management",
          urgency: "EMERGENCY — should be within 24 hours (preferably <6 hours)",
        },
      },
      redFlags: [
        { flag: "Sudden severe pain or loss of limb sensation post-operatively", action: "Assess for compartment syndrome — may need emergency fasciotomy", urgency: "IMMEDIATE" },
        { flag: "Sudden dyspnea, chest pain, tachycardia", action: "Rule out fat embolism or pulmonary embolism — CT PE protocol angiography", urgency: "IMMEDIATE" },
        { flag: "Increasing calf swelling, warmth, tenderness", action: "Assess for DVT — urgent duplex ultrasound and start anticoagulation if confirmed", urgency: "URGENT" },
        { flag: "High fever (>39°C) with acute mental status change", action: "Rule out sepsis — blood culture, broad-spectrum antibiotics", urgency: "IMMEDIATE" },
        { flag: "Inability to pass urine for >8 hours post-operatively", action: "Catheterization may be needed; assess for urinary retention from anesthesia/opioids", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Femoral neck fractures are classified as intracapsular (proximal to intertrochanteric line) and extracapsular (at or distal to line)",
        "Displaced intracapsular fractures have HIGH risk (up to 30%) of avascular necrosis because fracture disrupts the femoral head blood supply",
        "Undisplaced intracapsular fractures can often be fixed with internal fixation screws; displaced ones are better managed with hip arthroplasty (THR)",
        "Garden classification: Grade I (impacted incomplete), II (impacted complete), III (displaced incomplete), IV (displaced complete)",
        "Hip fracture in elderly = MEDICAL EMERGENCY. High mortality (5-20% within 1 year) if not managed appropriately",
        "DVT prophylaxis is MANDATORY in hip fracture patients — use LMWH or direct oral anticoagulants for 10-14 days post-op",
        "Early mobilization (post-op day 1) dramatically reduces complications and improves functional outcomes",
        "Stress ulcer, aspiration pneumonia, and pressure sores are common complications — proactive prevention is essential",
        "Osteoporosis management is critical post-fracture to prevent recurrent fractures — calcium, vitamin D, bisphosphonates",
        "Patient education on fall prevention at home and use of assistive devices is vital for elderly",
      ],
      commonMistakes: [
        "Delaying surgery — every day of delay increases mortality. Surgery should be within 24-48 hours.",
        "Confusion between intracapsular vs extracapsular affecting surgical decision — use X-ray landmarks carefully",
        "Missing DVT prophylaxis or discontinuing it too early — these elderly patients have very high thromboembolism risk",
        "Not optimizing medical status preoperatively — hypertension, diabetes, cardiac issues must be stable before emergency surgery",
        "Starting full weight-bearing too early post-op — can cause implant failure or hip dislocation",
        "Forgetting to assess hip circumference for DVT development — swelling >2cm warrants immediate assessment",
        "Not adequately treating pain preoperatively — poor pain control impairs respiration and increases complications",
        "Missing subtle signs of fat embolism — tachycardia, tachypnea, confusion in first 24-72 hours post-op",
        "Not counseling on osteoporosis treatment — patient will have recurrent fractures without long-term bone protection",
      ],
      relevantHistoryQs: ["onset", "mechanism_of_injury", "severity", "associated_hearing_loss", "mobility_loss", "prev_osteoporosis", "prev_falls", "family_fracture", "occupation", "living_situation"],
      relevantExamIds: ["hip_attitude", "hip_movement", "femoral_length", "hip_inspection", "neurovascular_assessment", "general_appearance", "limb_position"],
      difficulty: "MEDIUM",
      estimatedMinutes: 25,
      subjectTags: ["OR", "GER"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "OR1.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 2. Lumbar Disc Prolapse with Radiculopathy ───────────────────────
  {
    topicCode: "OR-MOD-02-TOP-01",
    scenario: {
      patientAge: 42,
      patientSex: "Male",
      patientOccupation: "Software engineer (desk job)",
      patientLocation: "Bangalore, Karnataka",
      chiefComplaint: "Severe pain in lower back and right leg for 5 days with numbness in foot",
      historyOfPresent: `
- Onset: Acute onset 5 days ago while lifting a suitcase from the floor during travel
- Character: Sharp, shooting pain in lower back radiating to right buttock, thigh, and outer foot (sciatica distribution)
- Location: Lower back (L4-L5/L5-S1 region), right leg pain worse than back pain
- Severity: 8/10 in leg, 6/10 in back
- Radiation: Follows sciatica distribution — buttock to lateral thigh to lateral foot
- Associated: Numbness in right foot (especially lateral border and sole), tingling in right calf, weakness in right foot (difficulty walking heel-toe), constipation absent but some hesitancy in micturition
- Timeline: Pain started suddenly with lifting. Initially thought it would resolve, but worsened over 5 days.
- Aggravating: Bending forward, coughing, sneezing, lying flat on back. Pain worse in morning after bed rest.
- Relieving: Partial relief with lying on left side with knees bent. Pain decreases with rest.
- Gait: Walks with slight limp, avoiding right leg movement
      `.trim(),
      pastHistory: "Previous episode of lower back pain 2 years ago (mild, resolved with rest and physiotherapy). No diabetes. No trauma. No cancer. No long-term steroid use.",
      familyHistory: "Father has history of back pain and herniated disc. Mother is hypertensive.",
      socialHistory: "Works as software engineer — 8-10 hours/day sitting at desk with poor ergonomics (laptop on desk, no proper back support). Sedentary. No smoking. Occasional alcohol. Irregular exercise. Stress at work. Poor posture. Lives with wife and two children. Transport: Mostly sitting in car/bus.",
      drugHistory: "Took Ibuprofen 400mg TDS for 3 days with minimal relief. No other medications. No known drug allergies.",
      vitals: { pulse: 78, bp: "128/82", temp: 36.9, rr: 16, spo2: 98 },
      generalExam: `
- General appearance: Sitting uncomfortably, shifting positions frequently
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Edema: No pedal edema
- Posture: Slight forward bend, guarding of lower back
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "5th ICS mid-clavicular line",
          heart_sounds: "S1, S2 normal. No murmurs.",
          blood_pressure: "128/82 mmHg bilaterally",
        },
        respiratory: {
          auscultation_lungs: "Clear bilateral air entry. No added sounds.",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended",
          palpation_superficial: "No tenderness",
          palpation_deep: "No organomegaly",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "GCS 15/15 — alert and oriented",
          cranial_nerves: "Intact",
          motor_lower_limbs: "Right lower limb — weakness in ankle dorsiflexion (grade 4/5), plantarflexion normal (5/5). Right hip extension normal. Left lower limbs normal strength throughout.",
          sensory: "Right foot lateral border and sole — diminished sensation to light touch and pinprick (L5/S1 distribution). Right calf — normal sensation.",
          reflexes: "Right ankle jerk — diminished/absent (hyporeflexia). Left ankle jerk normal. Both knee jerks normal.",
          straight_leg_raise: "Right SLR: 45 degrees (positive — pain radiates down leg). Left SLR: 80 degrees (normal).",
          femoral_stretch: "Not significantly painful — rules out femoral nerve involvement",
          bowel_bladder: "Denies bowel incontinence, denies urinary incontinence. Denies severe saddle numbness (good prognostic sign — likely not cauda equina).",
        },
        musculoskeletal: {
          lumbar_inspection: "Slight forward posture, guarding of lumbar spine",
          lumbar_palpation: "Tenderness in left lumbar paravertebral region (not at fracture level, but reactive muscle spasm)",
          lumbar_movement: "Forward flexion limited to 40 degrees (restricted by pain). Extension normal. Lateral flexion limited bilaterally but more on right.",
          lhermitte_sign: "Negative",
        },
      },
      availableInvestigations: [
        { id: "xray_lumbar", name: "X-ray Lumbar Spine (AP, Lateral, Flexion-Extension)", cost: 350, turnaround: "15 min", category: "Imaging", result: "Normal vertebral alignment. Normal intervertebral disc spaces. Normal facet joints. No fractures. No spondylolisthesis. No listhesis.", isAbnormal: false, interpretation: "X-ray does not show disc prolapse (soft tissue lesion). Rule out fracture, spondylolisthesis, and instability.", isEssential: true },
        { id: "mri_lumbar", name: "MRI Lumbar Spine (T1, T2, STIR sequences)", cost: 4500, turnaround: "2-3 hours", category: "Imaging", result: "L4-L5 disc prolapse: Large posterolateral disc herniation at L4-L5 level on right side with compression of right L5 nerve root. L5-S1: Mild disc bulge, not compressing any nerve root. Associated mild ligamentum flavum hypertrophy at L4-L5. No cord compression.", isAbnormal: true, interpretation: "Large right-sided L4-L5 disc prolapse compressing the L5 nerve root — correlates perfectly with right-sided L5 radiculopathy (foot weakness and sensory changes). No central canal stenosis or cord compression.", isEssential: true },
        { id: "ct_lumbar", name: "CT Lumbar Spine (non-contrast)", cost: 3000, turnaround: "30 min", category: "Imaging", result: "Confirms disc herniation. Additional detail of bony anatomy. Facet joint hypertrophy noted at L4-L5 level.", isAbnormal: true, interpretation: "CT confirms disc prolapse and shows bony elements contributing to stenosis. Not as sensitive as MRI for soft tissue but useful for surgical planning if fusion contemplated.", isEssential: false },
        { id: "epr", name: "Electromyography & Nerve Conduction Study (EMG/NCS)", cost: 1800, turnaround: "1-2 days", category: "Neurophysiology", result: "Right L5 nerve root compression evident: Denervation potentials in right extensor hallucis longus and right extensor digitorum brevis. Slowed conduction in right L5 distribution.", isAbnormal: true, interpretation: "Confirms right L5 radiculopathy at the level of nerve root compression. Differentiates from plexopathy or distal neuropathy. Indicates some degree of axonal damage.", isEssential: false },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 14.2 g/dL, WBC: 7,200/μL, Platelets: 2.4 lakhs", isAbnormal: false, interpretation: "Normal — no systemic infection or hematologic disorder.", isEssential: false },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 28 mg/dL, Creatinine: 0.9 mg/dL", isAbnormal: false, interpretation: "Normal — safe for NSAIDs and epidural injections.", isEssential: false },
        { id: "blood_glucose", name: "Random Blood Sugar", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "RBS: 108 mg/dL", isAbnormal: false, interpretation: "Normal — no diabetes.", isEssential: false },
      ],
      correctDiagnosis: "Right L4-L5 Disc Prolapse with Right L5 Nerve Root Compression (Lumbar Radiculopathy)",
      differentials: [
        { diagnosis: "Lumbar Spondylolisthesis", likelihood: "LOW", reasoning: "X-ray shows normal vertebral alignment with no listhesis. No forward slippage of vertebra seen. Ruled out by imaging." },
        { diagnosis: "Piriformis Syndrome", likelihood: "MEDIUM", reasoning: "Buttock pain and sciatica-like symptoms. However, SLR is positive (true radiculopathy marker), and MRI shows disc prolapse. Piriformis would have normal imaging." },
        { diagnosis: "Lumbar Spinal Stenosis (Central)", likelihood: "LOW", reasoning: "MRI shows no central canal stenosis. Stenosis would cause bilateral symptoms and neurogenic claudication (pain worse with walking). Our patient has unilateral symptoms." },
        { diagnosis: "Sacroiliac Joint Dysfunction", likelihood: "LOW", reasoning: "Pain pattern, positive SLR, and imaging evidence of disc prolapse rule out SIJ dysfunction. SIJ pain doesn't typically radiate below the knee." },
        { diagnosis: "Femoral Nerve Entrapment", likelihood: "LOW", reasoning: "Femoral stretch test negative. Femoral nerve would cause anterior thigh pain, not sciatica distribution. L5 root is lumbar, not femoral." },
      ],
      diagnosticReasoning: "42-year-old male with acute lower back pain radiating to right leg following lifting injury. Examination shows right L5 nerve root compression signs: weakness in right ankle dorsiflexion (L5 myotome), diminished sensation in right foot lateral border and sole (L5/S1 dermatome), and diminished right ankle jerk (S1 reflex). Positive SLR on right side (45°) is a classic sign of nerve root tension from disc prolapse. MRI confirms large posterolateral disc herniation at L4-L5 level on right side compressing the right L5 nerve root. This is a clear case of lumbar radiculopathy from disc prolapse. The good news: no cauda equina syndrome (bowel/bladder function intact, no severe saddle numbness, no bilateral symptoms).",
      managementPlan: {
        immediateActions: [
          { action: "Strict bed rest for first 2-3 days with ice application to lower back (20 min, 4-6 times daily)", reasoning: "Reduces inflammation and allows muscle spasm to settle. Cold numbs pain receptors.", priority: "STAT" },
          { action: "Start NSAID: Indomethacin 50mg TDS or Ibuprofen 400mg TDS", reasoning: "Reduces inflammation around nerve root and disc. Start immediately for best effect.", priority: "STAT" },
          { action: "Administer parenteral analgesics if pain severe: Tramadol 50-100mg IM/IV 6-hourly", reasoning: "For severe pain not controlled by oral NSAIDs. Avoid if nausea.", priority: "URGENT" },
          { action: "Prescribe muscle relaxant: Chlorzoxazone 250mg TDS or Tizanidine 2-4mg TDS", reasoning: "Controls painful paraspinal muscle spasm which is major pain generator.", priority: "URGENT" },
          { action: "Position patient with hip and knee flexion (fetal position on left side)", reasoning: "Reduces nerve root tension and pain. Lumbar flexion opens up intervertebral foramina.", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "NSAID (first-line anti-inflammatory)", examples: ["Indomethacin 50mg TDS", "Ibuprofen 400mg TDS", "Meloxicam 15mg OD"], route: "Oral/Parenteral", duration: "2-4 weeks (taper down)", reasoning: "Reduces inflammation around nerve root and disc. Prevents neuronal sensitization. Most effective in first 2 weeks.", contraindications: ["Peptic ulcer disease", "Renal impairment", "Asthma"], indianContext: "Ibuprofen 400mg at ₹3-5 per tablet. Indomethacin 50mg at ₹2-3. Generic formulations widely available at Jan Aushadhi." },
          { drugClass: "Muscle Relaxant (anti-spasm agent)", examples: ["Chlorzoxazone 250mg TDS", "Tizanidine 2-4mg TDS", "Thiocolchicoside 4mg TDS"], route: "Oral", duration: "7-10 days initially, then taper", reasoning: "Controls paraspinal muscle spasm which is a major source of pain. Allows better mobility.", contraindications: ["Liver disease", "Myasthenia gravis"], indianContext: "Chlorzoxazone 250mg at ₹3-4 per tablet. Thiocolchicoside 4mg at ₹4-5." },
          { drugClass: "Analgesic (Opioid — for severe pain only)", examples: ["Tramadol 50-100mg 6-hourly", "Paracetamol 500mg with Tramadol"], route: "IM/IV/Oral", duration: "5-7 days only (short-term for acute pain)", reasoning: "For acute severe pain not controlled by NSAIDs. Avoid long-term use — dependency and functional decline risk.", contraindications: ["Respiratory disease", "Severe liver disease", "Alcohol abuse"], indianContext: "Tramadol 50mg injection at ₹20-30. Oral tramadol 50mg at ₹4-6 per tablet." },
          { drugClass: "Proton Pump Inhibitor (GI protection with NSAIDs)", examples: ["Pantoprazole 40mg OD", "Omeprazole 20mg OD"], route: "Oral/IV", duration: "Duration of NSAID therapy", reasoning: "Prevents NSAID-induced gastritis and peptic ulcer. Essential if prolonged NSAID use.", contraindications: ["None significant"], indianContext: "Pantoprazole 40mg at ₹5-10 per dose." },
          { drugClass: "Corticosteroid (for severe inflammation — consider if inadequate response)", examples: ["Methylprednisolone 500mg IV on alternate days × 3 doses"], route: "IV", duration: "3 doses over 5-7 days", reasoning: "Reduces severe inflammation around nerve root if patient not improving with NSAIDs alone. Use cautiously, short duration.", contraindications: ["Infection", "Uncontrolled diabetes", "Psychosis"], indianContext: "Methylprednisolone 500mg vial at ₹300-400 per dose." },
        ],
        nonPharmacological: [
          { intervention: "Strict bed rest for 2-3 days, then gradual mobilization", reasoning: "Acute phase needs rest. Prolonged immobility (>3 days) causes stiffness and deconditioning.", duration: "Initial 2-3 days, then gradual" },
          { intervention: "Ice application to lower back (20 min, every 4-6 hours) for first 48 hours, then heat", reasoning: "Ice numbs pain and reduces acute inflammation. Heat applied after 48 hours reduces muscle spasm.", duration: "Ice: first 48 hours. Heat: 48 hours onwards" },
          { intervention: "Lumbar support/corset to stabilize spine during movement", reasoning: "Reduces segmental motion at the affected level, decreasing nerve root irritation. Improves mobility.", duration: "First 3-4 weeks" },
          { intervention: "Physical therapy (after acute inflammation settles — day 4 onwards)", reasoning: "Gentle lumbar mobilization, core strengthening, posture correction. Prevents chronicity.", duration: "Ongoing, 2-3 sessions/week for 4-6 weeks" },
          { intervention: "Epidural steroid injection (if no improvement after 4-6 weeks conservative management)", reasoning: "Infiltrates steroid directly into epidural space around nerve root. High efficacy for disc prolapse radiculopathy. Done under imaging guidance (CT/fluoroscopy).", duration: "Single or 2-3 injections 1-2 weeks apart if needed" },
        ],
        monitoring: [
          { parameter: "Pain intensity (VAS score)", frequency: "Daily", target: "Should decrease by 50% by day 5, 80% by week 2", escalation: "If no improvement by week 4 — consider imaging and intervention" },
          { parameter: "Neurological deficits (ankle dorsiflexion strength, sensation)", frequency: "Every 3-4 days", target: "Should improve or stabilize", escalation: "If weakness worsening (especially bilateral) — assess for cauda equina syndrome. Urgent MRI." },
          { parameter: "Mobility and functional status", frequency: "Every 3-5 days", target: "Increasing ability to walk and perform ADLs", escalation: "If increasing disability — consider faster intervention (epidural injection or surgery)" },
          { parameter: "Bowel and bladder function", frequency: "Daily monitoring by patient", target: "Normal", escalation: "Any change in continence — assess for cauda equina syndrome immediately" },
        ],
        lifestyle: {
          dos: [
            "Complete full course of prescribed medications — do not stop early",
            "Continue physiotherapy exercises even after pain improves — prevents recurrence",
            "Use lumbar support/corset while moving for first 3-4 weeks",
            "Perform prescribed core strengthening exercises once inflammation settles (after week 1-2)",
            "Maintain good posture while sitting and standing",
            "Apply heat to back for 20 minutes 2-3 times daily after first 48 hours",
            "Sleep on firm mattress with pillow under knees to maintain lumbar lordosis",
          ],
          donts: [
            "Do NOT bend forward at waist for first 2-4 weeks — risk of re-prolapse",
            "Do NOT lift heavy objects for 6-8 weeks",
            "Do NOT perform heavy exercise or running for 6-8 weeks",
            "Do NOT sit for prolonged periods (>30 minutes without break) — increases disc pressure",
            "Do NOT drive for first 2 weeks (pain and delayed reflexes)",
            "Do NOT twist and bend simultaneously (very high disc load)",
            "Avoid sleeping on stomach — strains lumbar spine",
          ],
          indianSpecific: [
            "Use a low bed or futon for easier getting in/out without straining back",
            "Squatting (Indian toilet) should be avoided initially — use elevated toilet seat or Western toilet",
            "Ensure proper desk ergonomics at work: laptop at eye level, chair with lumbar support, feet on ground",
            "Use a lumbar roll at office desk for sitting support",
            "Avoid using heavy vessels in kitchen — get family to help",
            "Take frequent standing/walking breaks from desk work — every 30 minutes",
            "Practice daily yoga (after acute phase) — yoga poses like Shashankasana and Markatasana are beneficial",
          ],
        },
        followUp: {
          when: "1 week (review response to treatment), 4 weeks (assess for persistence), 8 weeks (functional assessment), then PRN",
          what: [
            "Clinical assessment of pain, neurological deficit, and functional status",
            "Repeat imaging (MRI) only if not improving or if symptoms worsening — assess for need of surgery",
            "Review imaging for surgery candidacy if conservative management fails after 8-12 weeks",
            "Advise on long-term core strengthening and ergonomic modifications",
          ],
        },
        referral: {
          needed: false,
          to: "Neurosurgeon/Spine surgeon if conservative management fails after 8-12 weeks OR if cauda equina syndrome develops",
          urgency: "URGENT if needing intervention; EMERGENCY if cauda equina",
        },
      },
      redFlags: [
        { flag: "Sudden bilateral leg pain and numbness with urinary retention/incontinence", action: "CAUDA EQUINA SYNDROME — emergency imaging (MRI), urgent surgical decompression needed", urgency: "EMERGENCY" },
        { flag: "Progressive neurological deficit despite treatment (worsening foot weakness)", action: "May indicate ongoing nerve root compression — repeat imaging to assess for need of surgical intervention", urgency: "URGENT" },
        { flag: "Saddle numbness or severe perineal pain", action: "Concerning for cauda equina — assess bowel/bladder function urgently", urgency: "EMERGENCY" },
        { flag: "Severe unrelenting pain despite maximum medical therapy and epidural steroid injection", action: "Consider surgical intervention (microdiscectomy) — refer to spine surgeon", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Lumbar disc prolapse typically occurs at L4-L5 or L5-S1 levels — these are the most mobile and load-bearing segments",
        "Straight Leg Raise (SLR) <60° with radiating pain is highly suggestive of nerve root compression from disc prolapse",
        "Nerve root compression patterns: L5 = foot dorsiflexion weakness, lateral foot sensory loss, diminished ankle jerk; S1 = plantarflexion weakness, sole sensory loss",
        "MRI is the gold standard for diagnosis — shows disc, nerve root compression, and any other abnormalities. CT is second-line.",
        "90% of acute disc prolapse radiculopathy resolves with conservative management in 4-6 weeks — surgery is last resort",
        "Cauda Equina Syndrome (bilateral leg pain, urinary retention, saddle numbness) is a surgical EMERGENCY — decompression must be done within 48 hours",
        "Epidural steroid injection is highly effective (70-80% improvement) for disc prolapse radiculopathy, alternative to surgery",
        "Prevent recurrence: Good posture, regular core strengthening, avoid heavy lifting and forward bending, maintain healthy weight",
        "NSAIDs + muscle relaxants + physical therapy is the foundation of conservative management — start immediately",
        "Opioid dependence is a real risk with disc prolapse chronic pain — minimize opioid use, emphasize other modalities",
      ],
      commonMistakes: [
        "Over-relying on imaging — clinical correlation is essential. Some disc prolapses on imaging cause no symptoms.",
        "Starting physical therapy too early in acute phase — risk of worsening. Wait 4-5 days for inflammation to settle.",
        "Prolonged bed rest (>3 days) — causes deconditioning and chronicity. Gradual mobilization is key.",
        "Missing cauda equina syndrome — any sudden bilateral symptoms, urinary retention, or saddle numbness = emergency",
        "Not using epidural steroid injection before jumping to surgery — conservative management should be exhausted first (8-12 weeks)",
        "Incorrect stretching in acute phase — can worsen symptoms. Must wait for inflammation to settle.",
        "Not addressing ergonomic risk factors — patient will have recurrence if desk posture remains poor",
        "Stopping NSAIDs too early — continue for at least 2-4 weeks for optimal anti-inflammatory benefit",
        "Not counseling on chronic pain risk — early aggressive pain management and psychological support prevent chronicity",
      ],
      relevantHistoryQs: ["onset", "mechanism_of_injury", "character", "location", "radiation", "severity", "aggravating", "relieving", "associated_numbness", "bowel_bladder", "occupational_factors"],
      relevantExamIds: ["straight_leg_raise", "femoral_stretch", "ankle_dorsiflexion", "ankle_reflex", "sensory_foot", "lumbar_movement", "lumbar_palpation"],
      difficulty: "MEDIUM",
      estimatedMinutes: 22,
      subjectTags: ["OR", "NS"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "OR2.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 3. Open Fracture Tibia (Gustilo Grade IIIA) ─────────────────────
  {
    topicCode: "OR-MOD-01-TOP-03",
    scenario: {
      patientAge: 28,
      patientSex: "Male",
      patientOccupation: "Mechanic/auto repair worker",
      patientLocation: "Delhi",
      chiefComplaint: "Severe pain and bleeding from right leg after motor accident 3 hours ago",
      historyOfPresent: `
- Onset: Sudden, 3 hours ago, following high-speed two-wheeler collision with an auto-rickshaw
- Mechanism: Patient was on motorcycle traveling at ~40 km/hr. Hit an auto-rickshaw at junction. Right leg trapped under motorcycle.
- Character: Severe crushing pain in right tibia (shin bone region)
- Severity: 9/10 pain severity, severe anxiety
- Associated: Open wound on right shin with visible bone, heavy bleeding (soaked 2-3 large bandages), swelling of entire right leg, inability to stand
- Wound: Wound is jagged, contaminated with soil and grease from road/motorcycle
- Timeline: Immediate first aid on roadside by bystanders (applied tourniquet above knee after 15 minutes). Transferred to nearest hospital (~40 minutes away). Currently 3 hours post-accident.
- Mechanism severity: High-energy trauma — high risk of significant soft tissue damage
      `.trim(),
      pastHistory: "No significant past illness. No diabetes. No immunosuppression. No previous surgeries. Tetanus vaccination 5 years ago (booster needed).",
      familyHistory: "No significant family history.",
      socialHistory: "Works as mechanic — exposed to contaminated materials. Lives in Delhi with family. Smoker (10 cigarettes/day). No alcohol. Normal diet.",
      drugHistory: "No chronic medications. No known drug allergies.",
      vitals: { pulse: 110, bp: "118/76", temp: 37.2, rr: 26, spo2: 94 },
      generalExam: `
- General appearance: Young male, anxious, in severe pain, sitting with tourniquet around right thigh
- Pallor: Present (pale conjunctivae, pale nail beds)
- Icterus: Absent
- Cyanosis: Mild peripheral cyanosis on right foot distal to tourniquet
- Diaphoresis: Present — sweating from pain and anxiety
- Edema: Severe swelling of entire right lower leg below the knee
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "5th ICS mid-clavicular line",
          heart_sounds: "S1, S2 audible. Tachycardic. No murmurs.",
          peripheral_pulses: "Left radial, femoral pulses palpable. Right dorsalis pedis and posterior tibial pulses NOT palpable (due to tourniquet). Right femoral pulse palpable.",
          blood_pressure: "118/76 mmHg (now, but will need reassessment for hypovolemia — borderline low)",
          capillary_refill: ">2 seconds on left (delayed)",
        },
        respiratory: {
          chest_inspection: "Bilateral equal movements. Tachypneic. No splinting.",
          auscultation_lungs: "Clear bilaterally. No crackles.",
        },
        abdominal: {
          abdo_inspection: "Soft, non-distended",
          palpation_superficial: "No tenderness",
          palpation_deep: "No organomegaly",
          bowel_sounds: "Normal",
        },
        neurological: {
          consciousness: "GCS 15/15 — alert but anxious",
          cranial_nerves: "Intact",
          reflexes: "Cannot assess lower limbs due to severe pain and guarding",
        },
        musculoskeletal: {
          right_leg_wound: "Open fracture wound on anteromedial aspect of right tibia (shin). Wound 4cm × 3cm with bone protruding (fracture fragments visible). Wound heavily contaminated with soil, grease, fabric bits. Bleeding partially controlled by tourniquet. Devitalized tissue at margins.",
          right_leg_soft_tissue: "Extensive swelling of right leg below knee. Compartment firmness on palpation (tense medial, anterior compartments) — concerning for compartment syndrome risk.",
          right_leg_circulation: "Dorsalis pedis and posterior tibial pulses absent (tourniquet effect). Right foot pale, cold. Capillary refill >2 sec. Risk of ischemia distal to tourniquet.",
          right_leg_sensation_motor: "Limited assessment due to pain and tourniquet. Unable to assess foot sensation properly. Patient reports pain with any leg movement.",
          crepitus: "Fine crepitus palpable in fracture region (subcutaneous emphysema likely from muscle trauma)",
        },
      },
      availableInvestigations: [
        { id: "xray_tibia", name: "X-ray Right Tibia (AP and Lateral views)", cost: 250, turnaround: "10 min", category: "Imaging", result: "Spiral fracture of right tibia at middle-third junction with upper third. Fracture line extends from anteromedial to posterolateral. Fibula also fractured at similar level. Fracture edges contaminated. No other fractures visible on this view.", isAbnormal: true, interpretation: "Complex spiral fracture of tibia and fibula with significant soft tissue disruption evident from bone exposure and contamination. This is a Gustilo Grade IIIA (open fracture with extensive soft tissue damage but soft tissue still available for coverage — no massive damage like Grade IIIB/C).", isEssential: true },
        { id: "xray_pelvis", name: "X-ray Pelvis (to rule out associated fractures)", cost: 250, turnaround: "10 min", category: "Imaging", result: "Normal pelvis. No fractures. No pelvic instability.", isAbnormal: false, interpretation: "Rules out polytrauma with pelvic fracture.", isEssential: true },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 13.2 g/dL (baseline likely 15+ — indicates approximately 2-3 units blood loss), WBC: 14,200/μL (stress response), Platelets: 2.3 lakhs", isAbnormal: true, interpretation: "Mild anemia indicating blood loss from open fracture and wound. WBC elevated from stress response to trauma. Platelet count normal.", isEssential: true },
        { id: "blood_group", name: "Blood Group & Typing", cost: 200, turnaround: "10 min", category: "Hematology", result: "O Positive (O+)", isAbnormal: false, interpretation: "For cross-matching and blood transfusion if needed.", isEssential: true },
        { id: "cross_match", name: "Cross-match (for 2 units PRBCs)", cost: 400, turnaround: "30 min", category: "Hematology", result: "2 units PRBCs cross-matched and ready for transfusion", isAbnormal: false, interpretation: "Emergency blood ready for use if hemorrhage worsens or surgical blood loss occurs.", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 42 mg/dL (mild elevation from hemoconcentration and stress), Creatinine: 1.0 mg/dL, Na: 136 mEq/L, K: 4.1 mEq/L", isAbnormal: true, interpretation: "Mild azotemia from dehydration/hemoconcentration. Will need aggressive fluid resuscitation.", isEssential: true },
        { id: "coag_profile", name: "Coagulation Profile (PT/INR, aPTT)", cost: 400, turnaround: "1 hour", category: "Hematology", result: "PT: 13.0 sec, INR: 1.02, aPTT: 27 sec (all normal)", isAbnormal: false, interpretation: "Coagulation intact — safe for surgery.", isEssential: true },
        { id: "rbs", name: "Random Blood Sugar", cost: 100, turnaround: "10 min", category: "Biochemistry", result: "RBS: 185 mg/dL (elevated from stress response)", isAbnormal: true, interpretation: "Stress hyperglycemia — expected after trauma. Will normalize with resolution of acute stress.", isEssential: false },
        { id: "ctangio_leg", name: "CT Angiography Right Lower Limb (if vascular injury suspected)", cost: 3000, turnaround: "20 min", category: "Imaging", result: "No obvious arterial or venous injury on preliminary scan. Distal flow appears adequate (though cannot fully assess with tourniquet in place).", isAbnormal: false, interpretation: "Helps rule out major vascular injury. However, examination of dorsalis pedis and post-tibial pulses is still essential post-tourniquet release.", isEssential: false },
        { id: "blood_culture", name: "Blood Culture (from contaminated wound)", cost: 600, turnaround: "48-72 hours", category: "Microbiology", result: "Pending — will identify organisms from wound contamination for antibiotic guidance", isAbnormal: false, interpretation: "Important for identifying causative organisms in contaminated open fracture wound. High risk for gram-negative (E. coli, Acinetobacter) and anaerobic contamination.", isEssential: false },
      ],
      correctDiagnosis: "Gustilo Grade IIIA Open Fracture of Right Tibia and Fibula (Middle-Third) with Extensive Soft Tissue Damage",
      differentials: [
        { diagnosis: "Gustilo Grade IIIB (Massive Soft Tissue Loss)", likelihood: "LOW", reasoning: "Grade IIIB requires massive soft tissue loss, typically >10cm, with exposed bone not amenable to soft tissue coverage. Our patient has 4×3cm wound with available soft tissue for primary coverage — consistent with Grade IIIA." },
        { diagnosis: "Gustilo Grade IIIC (Vascular Injury)", likelihood: "LOW", reasoning: "Although dorsalis pedis absent, this is from tourniquet. CT angiography shows no major arterial injury. Once tourniquet removed, pulses should return." },
        { diagnosis: "Compartment Syndrome (established)", likelihood: "MEDIUM", reasoning: "Tight compartments and severe swelling raise concern. However, currently pain is from fracture and open wound. True compartment syndrome would show disproportionate pain with passive stretch. Will need monitoring post-operatively." },
        { diagnosis: "Fat Embolism Syndrome", likelihood: "LOW", reasoning: "Early presentation (3 hours). FES typically manifests 24-72 hours post-fracture. However, young patient at risk — monitor for petechial rash, confusion, respiratory distress." },
      ],
      diagnosticReasoning: "28-year-old male with high-energy trauma (motorcycle collision) resulting in open fracture of right tibia/fibula. Wound has bone exposure, contamination with soil/grease, devitalized edges, and significant soft tissue damage (defined as Grade IIIA per Gustilo classification). Evidence of blood loss (Hb drop, pale appearance, tachycardia, mildly low BP), suggesting hemorrhagic shock in early stages. Compartments are tense — high risk for secondary compartment syndrome. Immediate priority: hemorrhage control, infection prevention, vascular assessment, and urgent operative debridement and stabilization. This is a surgical emergency.",
      managementPlan: {
        immediateActions: [
          { action: "Continue tourniquet above knee (document time: applied ~2 hours 45 minutes ago) — max safe ischemia time ~4-6 hours", reasoning: "Tourniquet in place — essential for hemorrhage control. Document exact time for surgical planning. Ischemia time is critical.", priority: "STAT" },
          { action: "Establish two large-bore IV lines (18G or larger) and start rapid IV fluid resuscitation with Normal Saline", reasoning: "Patient is in hemorrhagic shock phase. Target urine output >0.5 mL/kg/hr. Two units cross-matched blood standing by.", priority: "STAT" },
          { action: "Administer Tetanus prophylaxis: Tetanus toxoid 0.5 mL IM (booster — last vaccine 5 years ago)", reasoning: "Open fracture with soil contamination — high risk for tetanus. Booster needed as >5 years since last vaccination.", priority: "STAT" },
          { action: "Administer broad-spectrum IV antibiotics IMMEDIATELY (within 1 hour of injury — critical for open fracture outcomes)", reasoning: "Open fracture with soil contamination — high risk for gram-negative (E. coli, Acinetobacter), anaerobic bacteria. Start before culture results. Delay worsens outcomes.", priority: "STAT" },
          { action: "Apply sterile dressing over open wound (NO probing or manipulation)", reasoning: "Maintain sterility. Do not probe wound in ED — will increase contamination. Defer wound exploration to OR.", priority: "STAT" },
          { action: "Document exact wound assessment, contamination, devitalized tissue, neurovascular status distal to fracture", reasoning: "Critical for intra-operative decision-making by orthopedic surgeon.", priority: "STAT" },
          { action: "Keep patient NPO (nil per os)", reasoning: "Urgent surgery anticipated within next 1-2 hours. Risk of aspiration.", priority: "STAT" },
          { action: "Alert orthopedic surgeon and operating room — emergency open fracture case", reasoning: "Gustilo Grade IIIA is a surgical emergency. Surgery should happen within 2-3 hours of injury.", priority: "EMERGENCY" },
        ],
        pharmacological: [
          { drugClass: "Beta-lactam Antibiotic (first agent)", examples: ["Ceftriaxone 2g IV TDS"], route: "IV", duration: "First 72 hours, then switch based on culture", reasoning: "Covers gram-negative organisms (E. coli, Proteus, Klebsiella). In Gustilo IIIA, combination therapy is standard. Ceftriaxone is first choice for gram-negatives in open fractures.", contraindications: ["Penicillin anaphylaxis"], indianContext: "Ceftriaxone 1g injection at ₹30-50 per dose. Total 72 hours = ~₹500-700." },
          { drugClass: "Aminoglycoside (second agent for gram-negative coverage)", examples: ["Gentamicin 80mg IV/IM 8-hourly (or 5mg/kg once daily dosing)"], route: "IV/IM", duration: "First 72 hours", reasoning: "Combination therapy (beta-lactam + aminoglycoside) provides synergy against gram-negatives. Essential for open fractures. Monitor renal function.", contraindications: ["Renal impairment (Cr >2.0)", "Eighth nerve damage"], indianContext: "Gentamicin 80mg injection at ₹20-30 per dose. Total 72 hours = ~₹400-600." },
          { drugClass: "Anaerobic Coverage (third agent)", examples: ["Metronidazole 500mg IV/PO 8-hourly"], route: "IV/Oral", duration: "First 72 hours minimum", reasoning: "Open fractures with soil contamination have high anaerobic burden (Clostridium, Bacteroides). Metronidazole essential to prevent gas gangrene and clostridial myositis.", contraindications: ["Pregnancy", "Severe liver disease"], indianContext: "Metronidazole 500mg injection at ₹15-25. Oral at ₹2-3 per tablet." },
          { drugClass: "Analgesic (Opioid for severe pain)", examples: ["Morphine 10mg IV 4-hourly PRN", "Tramadol 100mg IV 6-hourly"], route: "IV/IM", duration: "As needed for pain control", reasoning: "Severe pain from open fracture and soft tissue damage. Opioids essential preoperatively and postoperatively.", contraindications: ["Respiratory depression"], indianContext: "Morphine 10mg injection at ₹40-60. Tramadol 50mg injection at ₹20-30." },
          { drugClass: "Antihistamine + Proton Pump Inhibitor (stress ulcer prophylaxis)", examples: ["Famotidine 20mg IV BD", "Pantoprazole 40mg IV OD"], route: "IV", duration: "Throughout hospitalization", reasoning: "High stress state, major surgery, opioid use — high risk for stress ulcer and GI bleeding.", contraindications: ["None significant"], indianContext: "Famotidine at ₹10-20. Pantoprazole at ₹5-10 per dose." },
        ],
        nonPharmacological: [
          { intervention: "Maintain tourniquet above knee with close time documentation", reasoning: "Essential for hemorrhage control. Document: Applied at ~45 minutes post-injury, tourniquet time should NOT exceed 4-6 hours (risk of irreversible nerve/tissue damage). Surgical plan must account for this.", duration: "Until surgery — aim to keep <3 hours total ischemia" },
          { intervention: "Position leg on padded splint/Thomas splint to prevent movement and secondary injury", reasoning: "Immobilization reduces pain, prevents fat embolism, and prevents further tissue damage.", duration: "Until surgery" },
          { intervention: "Elevation of leg to 30-45 degrees above heart level", reasoning: "Reduces swelling and improves venous return.", duration: "Continuous until surgery" },
          { intervention: "Ice application around the leg (not over the wound) — avoid direct contact with open wound", reasoning: "Reduces swelling. Do NOT apply ice directly to wound — infection risk.", duration: "Continuous" },
          { intervention: "Sterile occlusive dressing over wound (change only when bleeding soaks through)", reasoning: "Maintains sterility. Limit dressing changes to reduce contamination.", duration: "Until surgery" },
          { intervention: "Post-operative: Aggressive surgical debridement, stabilization (ORIF or external fixation), and soft tissue coverage planning", reasoning: "Gustilo IIIA requires immediate OR management: wound irrigation/debridement, fracture stabilization, and soft tissue coverage (may need skin grafting or flap).", duration: "Emergently in OR" },
        ],
        monitoring: [
          { parameter: "Tourniquet time (document application and removal times)", frequency: "Continuous", target: "Total ischemia time <4-6 hours (preferably <3 hours)", escalation: "If approaching 3 hours — expedite surgery. >6 hours = high risk for irreversible nerve injury and tissue necrosis." },
          { parameter: "Vital signs (BP, HR, RR, SpO2)", frequency: "Every 15 minutes", target: "SBP >100 mmHg, HR <110 (if stable), SpO2 >94%", escalation: "If SBP <100 or HR >120 — aggressive fluid resuscitation. Consider blood transfusion if Hb drops further." },
          { parameter: "Urine output", frequency: "Continuous catheterization", target: ">0.5 mL/kg/hr, clear urine", escalation: "Dark/cola-colored urine (myoglobinuria) — indicates rhabdomyolysis. Increase fluids, target urine output >1 mL/kg/hr." },
          { parameter: "Hemoglobin and coagulation profile", frequency: "Repeat at 2-3 hours", target: "Hb >10 g/dL, normal coagulation", escalation: "If Hb <10 or worsening coagulation — transfuse." },
          { parameter: "Compartment assessment (after tourniquet release in OR)", frequency: "Post-operatively every 2-4 hours", target: "Compartments soft, pain proportionate to injury", escalation: "If compartments tense despite release, severe pain with passive stretch — fasciotomy needed" },
          { parameter: "Wound for signs of infection or gas gangrene", frequency: "Every 4-6 hours post-op", target: "Wound clean, no gas crepitus, no systemic signs of sepsis", escalation: "Fever, gas crepitus, rapid progression = clostridial myositis/gas gangrene — EMERGENCY. May need amputation." },
        ],
        lifestyle: {
          dos: [
            "Complete full antibiotic course (initially 72 hours, may extend based on wound culture)",
            "Complete all follow-up surgeries for debridement, skin grafting, or flap procedures as needed",
            "Follow physiotherapy protocol strictly once infection risk passes",
            "Maintain proper leg elevation at home postoperatively",
            "Take prescribed pain medications regularly — do not undermedicate pain",
            "Attend all follow-up appointments for wound assessment and fracture healing checks",
            "Perform circulation checks regularly — watch for signs of DVT or compartment syndrome",
          ],
          donts: [
            "Do NOT bear weight on right leg for 8-12 weeks (depends on fracture fixation method)",
            "Do NOT smoke — impairs wound healing significantly (patient is smoker — critical counseling needed)",
            "Do NOT expose wound to unsterile conditions",
            "Do NOT self-remove dressings or stitches",
            "Do NOT shower/bathe with wound exposed until cleared by surgeon",
            "Do NOT ignore signs of infection: increased swelling, redness, pus, fever",
            "Do NOT ignore signs of compartment syndrome: severe pain out of proportion, pain with passive stretch, paresthesias",
          ],
          indianSpecific: [
            "Home care: Arrange for someone to assist with ADLs for first 4-6 weeks (cooking, bathing, toileting)",
            "Ensure clean, infection-free home environment — regular cleaning, good ventilation",
            "Elevate leg on multiple pillows while resting",
            "Use Indian toilet carefully — may need assistance or elevated seat",
            "Avoid heavy manual work for 3-6 months depending on healing",
            "If occupational (mechanic work) — will need to stay away from work for 3-6 months due to contamination and heavy work risk",
            "Follow-up at government hospital for long-term care and physiotherapy",
          ],
        },
        followUp: {
          when: "24 hours (post-op assessment), 48 hours (wound review for re-debridement if needed), 5-7 days (suture review), 2 weeks (fracture assessment), 6 weeks (radiographic union check), 12 weeks (functional assessment), then 6-monthly for 1-2 years",
          what: [
            "Clinical wound assessment — signs of infection, necrosis, union of soft tissue",
            "X-ray at 2 weeks, 6 weeks, 12 weeks to assess fracture healing progression",
            "Culture results at 48-72 hours — adjust antibiotics based on sensitivities if needed",
            "Assess for delayed complications: non-union, mal-union, chronic osteomyelitis, DVT, compartment syndrome",
            "Physiotherapy progression — ROM exercises, weight-bearing as tolerated",
            "Occupational assessment — when can patient return to work?",
          ],
        },
        referral: {
          needed: true,
          to: "Orthopedic Surgeon (trauma specialist) — EMERGENCY. Also: Plastic Surgeon if extensive soft tissue coverage needed, Vascular surgeon if vascular injury confirmed",
          urgency: "EMERGENCY — within 2-3 hours of injury (golden period for debridement and infection prevention)",
        },
      },
      redFlags: [
        { flag: "Severe pain disproportionate to injury after tourniquet release (suggests compartment syndrome)", action: "Measure compartment pressures. If pressure >30mmHg or within 30mmHg of diastolic pressure = FASCIOTOMY NEEDED URGENTLY", urgency: "EMERGENCY" },
        { flag: "Dark/cola-colored urine (myoglobinuria) indicating rhabdomyolysis", action: "Aggressive IV fluid resuscitation, target urine output >1-2 mL/kg/hr. Alkalinize urine with sodium bicarbonate if available. Monitor K+ and renal function.", urgency: "URGENT" },
        { flag: "Rapid expansion of swelling, crepitus (air in tissues), rapid systemic toxicity within 24-48 hours", action: "CLOSTRIDIAL GAS GANGRENE — emergency repeat surgery with aggressive debridement. May require amputation to save life. Start high-dose IV penicillin + clindamycin.", urgency: "EMERGENCY" },
        { flag: "Signs of sepsis: fever >38.5°C, tachycardia >120, tachypnea >25, hypotension", action: "Blood culture, broad-spectrum antibiotics, fluid resuscitation, ICU consideration. May indicate wound infection/osteomyelitis.", urgency: "URGENT" },
        { flag: "Absent distal pulses after tourniquet release with pale, cold foot", action: "Vascular compromise — urgent vascular surgery consultation. May need arterial reconstruction or amputation if irreversible ischemia.", urgency: "EMERGENCY" },
      ],
      keyLearningPoints: [
        "Gustilo Classification: Grade I = small wound <1cm, low contamination; Grade II = wound 1-10cm, moderate contamination; Grade IIIA = >10cm wound or extensive soft tissue damage but tissue available for coverage; Grade IIIB = massive soft tissue loss requiring flap; Grade IIIC = vascular injury",
        "Open fracture is a SURGICAL EMERGENCY — debridement should happen within 3 hours of injury. Delay dramatically increases infection rates and poor outcomes.",
        "The golden rule for open fractures: 'Leave no stone unturned' — every piece of contaminated tissue must be removed. Multiple debridements may be needed (typically 2-3 surgeries within 48 hours).",
        "Antibiotic prophylaxis is critical: First-generation cephalosporin (Ceftriaxone) for gram-negatives + aminoglycoside for synergy + metronidazole for anaerobes (all three essential in Grade IIIA).",
        "Tourniquet time is critical — maximum safe ischemia is 4-6 hours. Mark tourniquet with application time. Surgical plan must account for ischemia time.",
        "Compartment syndrome is a common complication post-operatively — high index of suspicion needed. Pain disproportionate to injury is the cardinal sign.",
        "Rhabdomyolysis from crush injury — monitor urine color, K+, and renal function. Prevent myoglobin-induced acute kidney injury with aggressive hydration.",
        "Fat embolism syndrome can occur 24-72 hours post-fracture — watch for petechial rash, confusion, respiratory distress. Treat supportively.",
        "Post-operative wound care is meticulous — frequent assessment for gas gangrene (clostridial), infection, and necrosis. May need serial debridements.",
        "Smoking DRAMATICALLY impairs fracture healing and wound healing — critical counseling needed for this patient. Smoking cessation support is essential.",
      ],
      commonMistakes: [
        "Delaying surgical debridement to wait for 'best surgeon availability' — this delay is catastrophic. Any trained orthopedic surgeon can do initial debridement urgently.",
        "Probing or manipulating the open wound in ED — increases contamination. Limit examination, apply sterile dressing, proceed to OR.",
        "Inadequate antibiotic coverage — missing anaerobic coverage (forgetting metronidazole) is a critical error. Gas gangrene can develop.",
        "Removing tourniquet too early before surgical prep — risk of massive hemorrhage in the field.",
        "Missing compartment syndrome post-op — assumes pain is from fracture alone. High index of suspicion for disproportionate pain.",
        "Not documenting tourniquet time precisely — essential for surgical planning and ischemia complication prediction.",
        "Insufficient debridement — trying to 'save' marginally viable tissue. Over-aggressive debridement is better than under-debridement.",
        "Missing rhabdomyolysis signs — dark urine and hyperkalemia can lead to acute kidney injury and cardiac dysrhythmias if untreated.",
        "Not counseling smoker to quit — smoking impairs fracture healing by up to 40-50%. Critical for outcome in this patient.",
        "Inadequate pain management — under-medicating pain impairs physiotherapy, increases complications, and increases PTSD risk.",
      ],
      relevantHistoryQs: ["onset", "mechanism_of_injury", "high_energy_trauma", "contamination_soil", "time_of_injury", "first_aid_given", "tourniquet_time", "associated_injuries", "occupation", "smoking"],
      relevantExamIds: ["wound_assessment", "bone_exposure", "contamination_level", "soft_tissue_damage", "distal_circulation", "compartment_firmness", "neurovascular_distally"],
      difficulty: "HARD",
      estimatedMinutes: 30,
      subjectTags: ["OR", "ER"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "OR1.3",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
