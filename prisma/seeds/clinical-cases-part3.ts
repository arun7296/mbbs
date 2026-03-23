export const clinicalCasesPart3 = [
  {
    title: "Acute Ischemic Stroke - Thrombolysis Window",
    subjectCode: "IM",
    topicCode: "IM-MOD-NEURO-STR",
    difficulty: "MEDIUM" as const,
    patientProfile: {
      age: 58,
      gender: "male",
      chiefComplaint: "Sudden onset weakness of right side body",
      history: "Hypertension x 5 years on amlodipine. Smoker. Presented 2 hours ago."
    },
    stages: [
      {
        stage: 1,
        name: "History Taking",
        narrative: "A 58-year-old male presents with acute onset right-sided weakness. His wife states he was having tea when he suddenly slumped. Current time 10:30 AM, symptom onset 8:30 AM.",
        availableActions: [
          {
            id: "h1",
            text: "Confirm exact time of symptom onset",
            isOptimal: true,
            findings: "Wife confirms last seen normal at 8:30 AM. Critical for thrombolysis window.",
            scoreDelta: 10
          },
          {
            id: "h2",
            text: "Ask about speech difficulties",
            isOptimal: true,
            findings: "Wife reports patient cannot form words, only moans.",
            scoreDelta: 8
          },
          {
            id: "h3",
            text: "Ask about vision changes",
            isOptimal: true,
            findings: "No reported vision changes.",
            scoreDelta: 5
          },
          {
            id: "h4",
            text: "Ask about headache or neck stiffness",
            isOptimal: true,
            findings: "No headache, no neck stiffness reported.",
            scoreDelta: 5
          },
          {
            id: "h5",
            text: "Ask about recent trauma",
            isOptimal: false,
            findings: "No trauma. Not relevant to stroke assessment.",
            scoreDelta: 0
          },
          {
            id: "h6",
            text: "Ask about seizures before weakness",
            isOptimal: true,
            findings: "Wife denies seizure activity.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 2,
        name: "Physical Examination",
        narrative: "Patient is drowsy but arousable. Vitals: BP 170/95, HR 88, RR 18, Temp 37.2°C. Perform focused neurological exam.",
        availableActions: [
          {
            id: "pe1",
            text: "Assess Glasgow Coma Scale",
            isOptimal: true,
            findings: "GCS 12/15 (E3V4M5) - indicates moderate consciousness alteration.",
            scoreDelta: 10
          },
          {
            id: "pe2",
            text: "Test facial symmetry",
            isOptimal: true,
            findings: "Right facial drooping present. Left face normal.",
            scoreDelta: 8
          },
          {
            id: "pe3",
            text: "Assess arm strength",
            isOptimal: true,
            findings: "Right arm: 0/5 (flaccid), Left arm: 5/5 normal.",
            scoreDelta: 10
          },
          {
            id: "pe4",
            text: "Assess leg strength",
            isOptimal: true,
            findings: "Right leg: 1/5 (minimal movement), Left leg: 5/5 normal.",
            scoreDelta: 10
          },
          {
            id: "pe5",
            text: "Check speech",
            isOptimal: true,
            findings: "Expressive aphasia - cannot repeat or follow commands.",
            scoreDelta: 8
          },
          {
            id: "pe6",
            text: "Assess visual fields",
            isOptimal: true,
            findings: "Right homonymous hemianopia present.",
            scoreDelta: 5
          },
          {
            id: "pe7",
            text: "Check pupil reactivity",
            isOptimal: true,
            findings: "Pupils 3mm, equal, reactive bilaterally.",
            scoreDelta: 5
          },
          {
            id: "pe8",
            text: "Perform NIHSS scoring",
            isOptimal: true,
            findings: "NIHSS 15/42 - moderate to severe stroke severity.",
            scoreDelta: 12
          }
        ]
      },
      {
        stage: 3,
        name: "Investigations",
        narrative: "Patient needs urgent investigations. Time is brain. What investigations order immediately?",
        availableActions: [
          {
            id: "inv1",
            text: "Non-contrast CT brain immediately",
            isOptimal: true,
            findings: "No hyperdensity, no hemorrhage. Hypodensity in left MCA territory suggests infarction.",
            scoreDelta: 15
          },
          {
            id: "inv2",
            text: "Blood glucose",
            isOptimal: true,
            findings: "142 mg/dL - hyperglycemia noted, may worsen outcome.",
            scoreDelta: 5
          },
          {
            id: "inv3",
            text: "ECG",
            isOptimal: true,
            findings: "Normal sinus rhythm, no acute changes. Rules out cardiac cause.",
            scoreDelta: 5
          },
          {
            id: "inv4",
            text: "Coagulation profile (PT/INR)",
            isOptimal: true,
            findings: "PT 14s, INR 1.0 - normal. Safe for thrombolysis.",
            scoreDelta: 8
          },
          {
            id: "inv5",
            text: "Full blood count",
            isOptimal: true,
            findings: "Hb 13.2, WBC 7500, Platelets 220k - normal.",
            scoreDelta: 5
          },
          {
            id: "inv6",
            text: "Renal function",
            isOptimal: true,
            findings: "Creatinine 1.1, normal renal function.",
            scoreDelta: 3
          }
        ]
      },
      {
        stage: 4,
        name: "Diagnosis",
        narrative: "Based on clinical presentation and investigations, formulate diagnosis.",
        availableActions: [
          {
            id: "d1",
            text: "Acute ischemic stroke, Left MCA territory, within thrombolysis window",
            isOptimal: true,
            findings: "Correct diagnosis. Time 10:45 AM, symptom onset 8:30 AM = 135 minutes. Within 4.5-hour window.",
            scoreDelta: 20
          },
          {
            id: "d2",
            text: "Determine if patient is thrombolysis candidate",
            isOptimal: true,
            findings: "Age appropriate, no contraindications identified, imaging excludes hemorrhage.",
            scoreDelta: 15
          },
          {
            id: "d3",
            text: "Assess thrombectomy candidacy",
            isOptimal: true,
            findings: "NIHSS 15, likely large vessel occlusion. Consider mechanical thrombectomy.",
            scoreDelta: 10
          },
          {
            id: "d4",
            text: "Check for contraindications to thrombolysis",
            isOptimal: true,
            findings: "No recent surgery, no bleeding history, INR normal, no seizure.",
            scoreDelta: 8
          },
          {
            id: "d5",
            text: "Consider stroke mimics",
            isOptimal: false,
            findings: "Clinical signs too focal for seizure or migraine.",
            scoreDelta: 0
          },
          {
            id: "d6",
            text: "Identify stroke etiology (cardioembolic vs atherosclerotic)",
            isOptimal: true,
            findings: "ECG normal, no atrial fibrillation history. Likely atherosclerotic given HTN and smoking.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 5,
        name: "Treatment",
        narrative: "Time-critical interventions needed. Decide treatment strategy.",
        availableActions: [
          {
            id: "t1",
            text: "Administer IV rtPA (alteplase) 0.9 mg/kg",
            isOptimal: true,
            findings: "Patient weight 70 kg. Dose = 63 mg. Give 10% bolus (6.3 mg) IV, remainder over 60 min. Improves outcomes if given within window.",
            scoreDelta: 20
          },
          {
            id: "t2",
            text: "Call interventional radiology for mechanical thrombectomy",
            isOptimal: true,
            findings: "Given NIHSS 15, large vessel occlusion likely. Thrombectomy may provide additional benefit.",
            scoreDelta: 15
          },
          {
            id: "t3",
            text: "Administer aspirin after thrombolysis",
            isOptimal: true,
            findings: "Give 300-500 mg aspirin after 24 hours post-thrombolysis.",
            scoreDelta: 8
          },
          {
            id: "t4",
            text: "Control blood pressure",
            isOptimal: true,
            findings: "BP 170/95. After thrombolysis, keep <180/105. Use IV labetalol or nicardipine PRN.",
            scoreDelta: 10
          },
          {
            id: "t5",
            text: "Manage glucose - insulin if needed",
            isOptimal: true,
            findings: "Glucose 142 mg/dL. Target <180 mg/dL. Monitor closely.",
            scoreDelta: 5
          },
          {
            id: "t6",
            text: "Admit to ICU/stroke unit monitoring",
            isOptimal: true,
            findings: "Continuous cardiac monitoring, neuro checks q30min, watch for hemorrhagic transformation.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 6,
        name: "Follow-up",
        narrative: "Patient receives thrombolysis. Monitor for complications and recovery.",
        availableActions: [
          {
            id: "fu1",
            text: "Repeat CT brain at 24 hours to assess hemorrhagic transformation",
            isOptimal: true,
            findings: "No hemorrhage on follow-up CT. Patient shows early signs of improvement.",
            scoreDelta: 10
          },
          {
            id: "fu2",
            text: "Start secondary prophylaxis - statin",
            isOptimal: true,
            findings: "Atorvastatin 40 mg daily started to reduce recurrence.",
            scoreDelta: 8
          },
          {
            id: "fu3",
            text: "Optimize HTN control",
            isOptimal: true,
            findings: "Start amlodipine dose increase, add lisinopril for cardioprotection.",
            scoreDelta: 5
          },
          {
            id: "fu4",
            text: "Smoking cessation counseling",
            isOptimal: true,
            findings: "Major modifiable risk factor. Refer to counselor.",
            scoreDelta: 5
          },
          {
            id: "fu5",
            text: "Physiotherapy and speech therapy referral",
            isOptimal: true,
            findings: "Early rehabilitation improves functional outcome.",
            scoreDelta: 8
          },
          {
            id: "fu6",
            text: "Assess for post-stroke depression and cognitive changes",
            isOptimal: true,
            findings: "Screen with PHQ-9 and MoCA at discharge.",
            scoreDelta: 5
          }
        ]
      }
    ],
    learningObjectives: [
      "Recognize acute stroke symptoms and perform rapid assessment",
      "Calculate NIHSS score accurately",
      "Identify thrombolysis window and contraindications",
      "Administer IV rtPA safely with correct dosing",
      "Recognize indication for mechanical thrombectomy",
      "Manage acute complications and secondary prevention"
    ],
    keyTeachingPoints: [
      "Time is brain - every minute counts in acute stroke",
      "CT brain must exclude hemorrhage before thrombolysis",
      "IV rtPA 0.9 mg/kg if within 4.5 hours of symptom onset",
      "NIHSS >15 suggests large vessel occlusion, consider thrombectomy",
      "Monitor BP <180/105 post-thrombolysis to prevent hemorrhage",
      "Early rehabilitation and secondary prevention critical for recovery"
    ]
  },
  {
    title: "Diabetic Foot Ulcer - Wagner Classification & Management",
    subjectCode: "SU",
    topicCode: "SU-MOD-LIMB-DFU",
    difficulty: "MEDIUM" as const,
    patientProfile: {
      age: 52,
      gender: "female",
      chiefComplaint: "Foul-smelling discharge from right foot",
      history: "Type 2 DM x 12 years, poor glycemic control (HbA1c 10.2%). Works in garment factory, stands all day."
    },
    stages: [
      {
        stage: 1,
        name: "History Taking",
        narrative: "52-year-old female with type 2 DM presents with foot ulcer. Take detailed history.",
        availableActions: [
          {
            id: "h1",
            text: "Ask when ulcer first appeared",
            isOptimal: true,
            findings: "Patient noticed foot ulcer 3 weeks ago. Initially small, now has drainage.",
            scoreDelta: 8
          },
          {
            id: "h2",
            text: "Ask about pain",
            isOptimal: true,
            findings: "Minimal pain reported. Suggests peripheral neuropathy.",
            scoreDelta: 8
          },
          {
            id: "h3",
            text: "Ask about trauma or injury",
            isOptimal: true,
            findings: "Patient stepped on small nail 4 weeks ago at work. Didn't notice due to lack of sensation.",
            scoreDelta: 10
          },
          {
            id: "h4",
            text: "Ask about previous foot ulcers or amputations",
            isOptimal: true,
            findings: "No previous ulcers. First episode.",
            scoreDelta: 5
          },
          {
            id: "h5",
            text: "Ask about glycemic control",
            isOptimal: true,
            findings: "Patient admits poor compliance with medications and diet.",
            scoreDelta: 8
          },
          {
            id: "h6",
            text: "Ask about footwear",
            isOptimal: true,
            findings: "Wears tight shoes to work. No diabetic footwear.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 2,
        name: "Physical Examination",
        narrative: "Examine the right foot carefully for Wagner grade classification.",
        availableActions: [
          {
            id: "pe1",
            text: "Inspect skin integrity and note ulcer location",
            isOptimal: true,
            findings: "Ulcer on sole of foot, over 1st metatarsal head. 3 cm x 2 cm. Surrounding erythema.",
            scoreDelta: 8
          },
          {
            id: "pe2",
            text: "Assess ulcer depth with probe",
            isOptimal: true,
            findings: "Ulcer depth approximately 0.5 cm. Purulent drainage present. Foul odor suggests infection.",
            scoreDelta: 10
          },
          {
            id: "pe3",
            text: "Check for cellulitis and extent of tissue involvement",
            isOptimal: true,
            findings: "Erythema extends 5 cm around ulcer. Warmth noted. No fluctuance or abscess.",
            scoreDelta: 8
          },
          {
            id: "pe4",
            text: "Perform monofilament test for sensation",
            isOptimal: true,
            findings: "10g monofilament: unable to feel on foot, feels on proximal leg. Confirms neuropathy.",
            scoreDelta: 8
          },
          {
            id: "pe5",
            text: "Check pedal pulses (dorsalis pedis and posterior tibial)",
            isOptimal: true,
            findings: "Both pulses weak but present. Suggests some vascular compromise but not severe.",
            scoreDelta: 8
          },
          {
            id: "pe6",
            text: "Test vibration sense and proprioception",
            isOptimal: true,
            findings: "Vibration perception absent at metatarsal heads.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 3,
        name: "Investigations",
        narrative: "Order appropriate investigations to assess severity and extent.",
        availableActions: [
          {
            id: "inv1",
            text: "X-ray right foot",
            isOptimal: true,
            findings: "No signs of osteomyelitis. No gas in tissues. Bone outlines normal.",
            scoreDelta: 8
          },
          {
            id: "inv2",
            text: "Culture swab from ulcer drainage",
            isOptimal: true,
            findings: "Culture reports: Staphylococcus aureus and anaerobes. Sensitive to cloxacillin, resistant to penicillin.",
            scoreDelta: 10
          },
          {
            id: "inv3",
            text: "Blood glucose and HbA1c",
            isOptimal: true,
            findings: "Fasting glucose 280 mg/dL, HbA1c 10.2%. Poor control.",
            scoreDelta: 5
          },
          {
            id: "inv4",
            text: "Ankle-brachial index (ABI) for vascular assessment",
            isOptimal: true,
            findings: "ABI 0.9. Borderline abnormal, suggests mild arterial insufficiency.",
            scoreDelta: 8
          },
          {
            id: "inv5",
            text: "Full blood count",
            isOptimal: true,
            findings: "WBC 12,500 elevated. Hemoglobin 10.2 g/dL (anemia). Confirms infection.",
            scoreDelta: 5
          },
          {
            id: "inv6",
            text: "Urine microalbumin to assess nephropathy",
            isOptimal: true,
            findings: "Microalbumin 250 mg/day. Early diabetic nephropathy.",
            scoreDelta: 3
          }
        ]
      },
      {
        stage: 4,
        name: "Diagnosis",
        narrative: "Classify ulcer using Wagner classification and determine management.",
        availableActions: [
          {
            id: "d1",
            text: "Classify as Wagner Grade 2 - ulcer with cellulitis/infection",
            isOptimal: true,
            findings: "Grade 2: superficial ulcer with cellulitis but no bone involvement. Matches presentation.",
            scoreDelta: 15
          },
          {
            id: "d2",
            text: "Identify major risk factors: neuropathy + infection",
            isOptimal: true,
            findings: "Loss of protective sensation + bacterial infection = high risk for progression.",
            scoreDelta: 10
          },
          {
            id: "d3",
            text: "Assess vascular status (mild insufficiency vs critical limb ischemia)",
            isOptimal: true,
            findings: "ABI 0.9 suggests mild insufficiency. Not critical. Good capillary refill.",
            scoreDelta: 8
          },
          {
            id: "d4",
            text: "Identify comorbidities: anemia and nephropathy",
            isOptimal: true,
            findings: "These affect healing and medication choices.",
            scoreDelta: 5
          },
          {
            id: "d5",
            text: "Assess glycemic control as major barrier to healing",
            isOptimal: true,
            findings: "HbA1c 10.2% - poor control impairs immune function and healing.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 5,
        name: "Treatment",
        narrative: "Design comprehensive treatment plan.",
        availableActions: [
          {
            id: "t1",
            text: "Debridement of necrotic tissue and bacterial biofilm",
            isOptimal: true,
            findings: "Remove all devitalized tissue. Repeat debridement every 3-4 days until clean base.",
            scoreDelta: 15
          },
          {
            id: "t2",
            text: "Start empiric antibiotics (cloxacillin + metronidazole)",
            isOptimal: true,
            findings: "Cloxacillin 500 mg QID for Staph coverage. Metronidazole for anaerobes. Covers culture results.",
            scoreDelta: 12
          },
          {
            id: "t3",
            text: "Optimize glycemic control - insulin intensification",
            isOptimal: true,
            findings: "Start basal-bolus insulin: insulin glargine 20 units daily + rapid-acting with meals.",
            scoreDelta: 15
          },
          {
            id: "t4",
            text: "Offload pressure - no weight bearing on foot",
            isOptimal: true,
            findings: "Use crutches and non-weight bearing cast. Critical to prevent ulcer extension.",
            scoreDelta: 12
          },
          {
            id: "t5",
            text: "Daily moist gauze dressings or hydrocolloid dressings",
            isOptimal: true,
            findings: "Moist wound environment promotes epithelialization. Change twice daily.",
            scoreDelta: 10
          },
          {
            id: "t6",
            text: "Consider negative pressure wound therapy (NPWT) if no improvement",
            isOptimal: true,
            findings: "If ulcer not improving by week 2, apply NPWT to enhance granulation.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 6,
        name: "Follow-up",
        narrative: "Monitor healing and prevent recurrence.",
        availableActions: [
          {
            id: "fu1",
            text: "Weekly wound assessment and repeat debridement",
            isOptimal: true,
            findings: "Ulcer shows 30% reduction in size by week 2. Continue current management.",
            scoreDelta: 8
          },
          {
            id: "fu2",
            text: "Recheck culture at week 2 if not improving",
            isOptimal: true,
            findings: "Repeat culture shows good response to antibiotics. Continue current regimen.",
            scoreDelta: 5
          },
          {
            id: "fu3",
            text: "Target HbA1c <7% for optimal healing",
            isOptimal: true,
            findings: "Recheck HbA1c in 3 months. Target tighter glycemic control.",
            scoreDelta: 8
          },
          {
            id: "fu4",
            text: "Orthotic footwear and patient education on foot care",
            isOptimal: true,
            findings: "Prescribe diabetic shoes with cushioned insoles. Teach daily foot inspection.",
            scoreDelta: 10
          },
          {
            id: "fu5",
            text: "Screen for diabetic eye and kidney disease",
            isOptimal: true,
            findings: "Refer to ophthalmology (retinopathy screening) and monitor renal function.",
            scoreDelta: 5
          },
          {
            id: "fu6",
            text: "Long-term prevention: regular foot checks in clinic",
            isOptimal: true,
            findings: "Monthly podiatry reviews to prevent recurrence. High risk for ulcer relapse.",
            scoreDelta: 5
          }
        ]
      }
    ],
    learningObjectives: [
      "Classify diabetic foot ulcers using Wagner classification",
      "Identify pathophysiology: neuropathy, vascular disease, infection",
      "Perform comprehensive foot examination in diabetes",
      "Design appropriate debridement and dressing strategy",
      "Optimize glycemic control to promote healing",
      "Prevent recurrence through patient education and follow-up"
    ],
    keyTeachingPoints: [
      "Wagner Grade 2: superficial ulcer with cellulitis/infection",
      "Always debride necrotic tissue to expose healthy bleeding base",
      "Empiric antibiotics must cover Staph + anaerobes",
      "Pressure offloading is mandatory - use crutches or non-weight bearing cast",
      "Glycemic control critical: poor HbA1c impairs healing",
      "Monthly foot checks essential to prevent recurrence in high-risk patient"
    ]
  },
  {
    title: "Placenta Previa with Antepartum Hemorrhage",
    subjectCode: "OG",
    topicCode: "OG-MOD-PREG-APH",
    difficulty: "MEDIUM" as const,
    patientProfile: {
      age: 32,
      gender: "female",
      chiefComplaint: "Vaginal bleeding at 34 weeks gestation",
      history: "G3P2, previous cesarean section x 2. Diagnosed placenta previa at 20-week scan."
    },
    stages: [
      {
        stage: 1,
        name: "History Taking",
        narrative: "32-year-old G3P2 at 34 weeks presents with vaginal bleeding. Patient is anxious.",
        availableActions: [
          {
            id: "h1",
            text: "Determine amount and duration of bleeding",
            isOptimal: true,
            findings: "Patient reports moderate vaginal bleeding for 2 hours. Soaked 3-4 pads.",
            scoreDelta: 10
          },
          {
            id: "h2",
            text: "Ask about abdominal pain",
            isOptimal: true,
            findings: "Denies pain or contractions. No abdominal distension.",
            scoreDelta: 8
          },
          {
            id: "h3",
            text: "Ask about fetal movements",
            isOptimal: true,
            findings: "Baby moving well, no change in movement pattern.",
            scoreDelta: 8
          },
          {
            id: "h4",
            text: "Confirm placental location on recent ultrasound",
            isOptimal: true,
            findings: "20-week scan reported total placenta previa. No repeat ultrasound since then.",
            scoreDelta: 10
          },
          {
            id: "h5",
            text: "Ask about previous episodes of bleeding",
            isOptimal: true,
            findings: "Denies previous bleeding in this pregnancy. First episode.",
            scoreDelta: 5
          },
          {
            id: "h6",
            text: "Obtain obstetric history - reason for previous cesareans",
            isOptimal: true,
            findings: "Previous 2 cesareans for nonrecurrent indications (breech x1, arrest disorder x1).",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 2,
        name: "Vital Signs & General Assessment",
        narrative: "Assess hemodynamic status. Vital signs: BP 125/80, HR 92, RR 16, Temp 37°C. Patient conscious, alert, mildly anxious.",
        availableActions: [
          {
            id: "pe1",
            text: "Assess hemodynamic stability",
            isOptimal: true,
            findings: "BP and HR normal. Patient appears well-perfused. No signs of shock.",
            scoreDelta: 8
          },
          {
            id: "pe2",
            text: "Assess pallor and mucous membranes",
            isOptimal: true,
            findings: "Pale but mucous membranes moist. No acute anemia signs.",
            scoreDelta: 5
          },
          {
            id: "pe3",
            text: "Inspect amount of blood on clothes/pads",
            isOptimal: true,
            findings: "Moderate bleeding, not profuse. Estimated 300-400 mL so far.",
            scoreDelta: 5
          },
          {
            id: "pe4",
            text: "Assess abdominal distension and tenderness",
            isOptimal: true,
            findings: "Abdomen soft, nontender. No rebound. Gravid uterus palpable.",
            scoreDelta: 5
          },
          {
            id: "pe5",
            text: "Perform speculum examination to visualize bleeding source",
            isOptimal: true,
            findings: "Blood in vagina. Cervix appears normal, no visible cervical lesions.",
            scoreDelta: 8
          },
          {
            id: "pe6",
            text: "DO NOT perform digital cervical examination",
            isOptimal: true,
            findings: "Avoid - risk of massive hemorrhage if placenta previa. Must use speculum only.",
            scoreDelta: 10
          }
        ]
      },
      {
        stage: 3,
        name: "Investigations",
        narrative: "Order urgent investigations to assess maternal and fetal condition.",
        availableActions: [
          {
            id: "inv1",
            text: "Transvaginal ultrasound to confirm placental location",
            isOptimal: true,
            findings: "Ultrasound confirms total placenta previa. Placental edge <2cm from cervical os.",
            scoreDelta: 15
          },
          {
            id: "inv2",
            text: "Fetal heart rate and CTG monitoring",
            isOptimal: true,
            findings: "FHR 142 bpm, normal. Reactive CTG with good variability. No decelerations.",
            scoreDelta: 10
          },
          {
            id: "inv3",
            text: "Full blood count",
            isOptimal: true,
            findings: "Hemoglobin 11.2 g/dL (baseline for pregnancy), WBC 9000, Platelets 250k.",
            scoreDelta: 5
          },
          {
            id: "inv4",
            text: "Blood group and antibody screening",
            isOptimal: true,
            findings: "O positive. Negative for antibodies. Type & cross for potential transfusion.",
            scoreDelta: 8
          },
          {
            id: "inv5",
            text: "Coagulation profile (PT/INR, aPTT)",
            isOptimal: true,
            findings: "PT 12s, aPTT 28s, INR 1.0 - normal. No coagulopathy.",
            scoreDelta: 5
          },
          {
            id: "inv6",
            text: "Kleihauer-Betke test to assess fetal-maternal hemorrhage",
            isOptimal: true,
            findings: "Kleihauer shows minimal fetal RBCs. <4 microdots = <2 mL fetal blood loss.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 4,
        name: "Diagnosis & Risk Stratification",
        narrative: "Determine diagnosis and plan delivery timing.",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Total placenta previa with antepartum hemorrhage",
            isOptimal: true,
            findings: "Confirmed on transvaginal ultrasound. Placenta completely covers cervical os.",
            scoreDelta: 15
          },
          {
            id: "d2",
            text: "Assess maternal-fetal status: both currently stable",
            isOptimal: true,
            findings: "Hemodynamically stable, fetal monitoring reassuring. Bleeding has slowed.",
            scoreDelta: 10
          },
          {
            id: "d3",
            text: "Determine risk of further hemorrhage",
            isOptimal: true,
            findings: "Risk very high. Placenta previa causes painless bleeding. Patient is preterm (34 weeks).",
            scoreDelta: 8
          },
          {
            id: "d4",
            text: "Assess fetal maturity for delivery consideration",
            isOptimal: true,
            findings: "At 34 weeks, fetal lungs mature enough for delivery if severe bleeding recurs.",
            scoreDelta: 8
          },
          {
            id: "d5",
            text: "Classify as placenta previa - total (not partial or marginal)",
            isOptimal: true,
            findings: "Total placenta previa = mandatory cesarean delivery. Vaginal delivery not possible.",
            scoreDelta: 10
          }
        ]
      },
      {
        stage: 5,
        name: "Management",
        narrative: "Implement treatment plan for placenta previa with APH.",
        availableActions: [
          {
            id: "t1",
            text: "Admit to hospital for monitoring",
            isOptimal: true,
            findings: "Admit to labor ward. Bed rest advised. Patient stays hospital until delivery.",
            scoreDelta: 12
          },
          {
            id: "t2",
            text: "Establish IV access with large-bore cannula",
            isOptimal: true,
            findings: "18G IV cannula inserted. 2 units blood cross-matched and available.",
            scoreDelta: 10
          },
          {
            id: "t3",
            text: "Administer corticosteroids for fetal lung maturity",
            isOptimal: true,
            findings: "Give betamethasone 12 mg IM x 2 doses (24 hours apart) to accelerate fetal lung maturity.",
            scoreDelta: 12
          },
          {
            id: "t4",
            text: "Plan elective cesarean section at 36-37 weeks",
            isOptimal: true,
            findings: "Elective cesarean (not emergency) planned for 36-37 weeks to balance fetal maturity and maternal safety.",
            scoreDelta: 15
          },
          {
            id: "t5",
            text: "Administer RhIG if patient is Rh-negative",
            isOptimal: false,
            findings: "Patient O positive. Not needed. (Would be 500 IU IM if Rh-negative.)",
            scoreDelta: 0
          },
          {
            id: "t6",
            text: "Plan for possible massive transfusion: alert blood bank",
            isOptimal: true,
            findings: "Prepare for possible need for multiple units. Massive placenta previa carries risk of severe hemorrhage at delivery.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 6,
        name: "Follow-up & Delivery Planning",
        narrative: "Ensure safe delivery and monitor for complications.",
        availableActions: [
          {
            id: "fu1",
            text: "Continue inpatient monitoring until planned delivery",
            isOptimal: true,
            findings: "Weekly ultrasound to confirm placental location. Twice-weekly CTG.",
            scoreDelta: 8
          },
          {
            id: "fu2",
            text: "Counsel on warning signs: severe bleeding, pain, decreased fetal movement",
            isOptimal: true,
            findings: "Patient counseled. Will call immediately if heavy bleeding, pain, or fetal concerns.",
            scoreDelta: 8
          },
          {
            id: "fu3",
            text: "Plan cesarean delivery at 36-37 weeks electively",
            isOptimal: true,
            findings: "Planned cesarean booked for 36+6 weeks. Senior obstetrician and anesthetist informed.",
            scoreDelta: 10
          },
          {
            id: "fu4",
            text: "Prepare for possible peripartum hysterectomy (if placenta accreta suspected)",
            isOptimal: true,
            findings: "Previous 2 cesareans + placenta previa = risk of placenta accreta. Consider MRI if ultrasound suggests invasion.",
            scoreDelta: 10
          },
          {
            id: "fu5",
            text: "Counsel on contraception and future pregnancy risks",
            isOptimal: true,
            findings: "Discuss increased recurrence risk in future pregnancies. Counsel on contraceptive options.",
            scoreDelta: 5
          },
          {
            id: "fu6",
            text: "At delivery: prepare for blood loss, activate massive transfusion protocol if needed",
            isOptimal: true,
            findings: "Cesarean performed at 36+6 weeks. Estimated blood loss 600 mL. No hysterectomy needed.",
            scoreDelta: 8
          }
        ]
      }
    ],
    learningObjectives: [
      "Distinguish types of placenta previa and associated risks",
      "Manage antepartum hemorrhage in placenta previa",
      "Assess maternal and fetal well-being in preterm bleeding",
      "Plan safe delivery timing balancing maternal and fetal needs",
      "Counsel patient on expectant management and warning signs",
      "Prepare for possible complications (placenta accreta, massive hemorrhage)"
    ],
    keyTeachingPoints: [
      "Never perform digital cervical exam in suspected placenta previa - risk of massive hemorrhage",
      "Total placenta previa requires cesarean delivery - vaginal delivery not possible",
      "Transvaginal ultrasound is gold standard to confirm placental location",
      "Corticosteroids given to accelerate fetal lung maturity at preterm presentation",
      "Elective cesarean at 36-37 weeks balances fetal maturity with maternal safety",
      "Always assess for placenta accreta risk given multiple prior cesareans"
    ]
  },
  {
    title: "Bronchiolitis in Infant - RSV Management",
    subjectCode: "PE",
    topicCode: "PE-MOD-RESP-BRX",
    difficulty: "MEDIUM" as const,
    patientProfile: {
      age: 8,
      gender: "male",
      ageUnit: "months",
      chiefComplaint: "Cough, difficulty breathing, poor feeding",
      history: "Previously healthy. Symptoms started 5 days ago with URI. Now respiratory distress."
    },
    stages: [
      {
        stage: 1,
        name: "History Taking",
        narrative: "8-month-old male with cough and respiratory distress. Mother concerned about breathing difficulty.",
        availableActions: [
          {
            id: "h1",
            text: "Ask about onset and progression",
            isOptimal: true,
            findings: "Started 5 days ago with runny nose and cough. Today: increased work of breathing, not eating well.",
            scoreDelta: 8
          },
          {
            id: "h2",
            text: "Ask about fever",
            isOptimal: true,
            findings: "Low-grade fever on days 2-4 (38.5°C max). Now afebrile.",
            scoreDelta: 5
          },
          {
            id: "h3",
            text: "Ask about feeding and fluid intake",
            isOptimal: true,
            findings: "Was feeding well, now only taking 50% of feeds. Mother concerned about dehydration.",
            scoreDelta: 8
          },
          {
            id: "h4",
            text: "Ask about oxygen desaturation episodes",
            isOptimal: true,
            findings: "No reported episodes of turning blue, but breathing seems faster.",
            scoreDelta: 5
          },
          {
            id: "h5",
            text: "Ask about household contacts with respiratory illness",
            isOptimal: true,
            findings: "Older sibling had URI last week. No other sick contacts.",
            scoreDelta: 5
          },
          {
            id: "h6",
            text: "Ask about prematurity, chronic lung disease, or cardiac disease",
            isOptimal: true,
            findings: "Born at term, no complications. No cardiac history.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 2,
        name: "Physical Examination",
        narrative: "Perform thorough respiratory assessment. Vital signs: RR 55/min (fast), HR 140, BP 95/60, SpO2 92% on room air, Temp 37.1°C.",
        availableActions: [
          {
            id: "pe1",
            text: "Assess work of breathing",
            isOptimal: true,
            findings: "Tachypnea (RR 55), intercostal retractions, subcostal retractions present. Using accessory muscles.",
            scoreDelta: 10
          },
          {
            id: "pe2",
            text: "Auscultate lungs bilaterally",
            isOptimal: true,
            findings: "Bilateral fine crackles (end-inspiratory) heard throughout lung fields. Prolonged expiration noted.",
            scoreDelta: 10
          },
          {
            id: "pe3",
            text: "Check for wheezing",
            isOptimal: true,
            findings: "Bilateral wheezing/crackles mixed. High-pitched sounds on expiration.",
            scoreDelta: 8
          },
          {
            id: "pe4",
            text: "Assess air entry",
            isOptimal: true,
            findings: "Air entry diminished bilaterally. Not silent chest, but reduced.",
            scoreDelta: 5
          },
          {
            id: "pe5",
            text: "Check nasal flaring and grunting",
            isOptimal: true,
            findings: "Nasal flaring present. No grunting heard (suggests mild-moderate disease).",
            scoreDelta: 8
          },
          {
            id: "pe6",
            text: "Assess hydration status",
            isOptimal: true,
            findings: "Mucous membranes dry. Urine output decreased (1-2 wet diapers). Mild dehydration.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 3,
        name: "Investigations",
        narrative: "Order appropriate investigations for bronchiolitis diagnosis and assessment.",
        availableActions: [
          {
            id: "inv1",
            text: "Rapid RSV/influenza antigen detection from nasal swab",
            isOptimal: true,
            findings: "RSV antigen positive. Confirms viral bronchiolitis.",
            scoreDelta: 15
          },
          {
            id: "inv2",
            text: "Chest X-ray",
            isOptimal: true,
            findings: "CXR shows hyperinflation (flattened diaphragm), bilateral perihilar infiltrates, air trapping.",
            scoreDelta: 8
          },
          {
            id: "inv3",
            text: "Pulse oximetry continuous or intermittent",
            isOptimal: true,
            findings: "SpO2 92-94% on room air. Oxygen desaturation noted with feeding.",
            scoreDelta: 8
          },
          {
            id: "inv4",
            text: "Blood gas analysis",
            isOptimal: false,
            findings: "Not routinely needed unless severe respiratory distress or failure suspected.",
            scoreDelta: 0
          },
          {
            id: "inv5",
            text: "Nasopharyngeal aspirate for culture",
            isOptimal: false,
            findings: "Viral cause confirmed. Bacterial culture not routinely indicated.",
            scoreDelta: 0
          },
          {
            id: "inv6",
            text: "Assess blood glucose",
            isOptimal: true,
            findings: "Blood glucose 85 mg/dL. Normal.",
            scoreDelta: 3
          }
        ]
      },
      {
        stage: 4,
        name: "Diagnosis & Severity Assessment",
        narrative: "Formulate diagnosis and assess severity.",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Acute bronchiolitis secondary to RSV",
            isOptimal: true,
            findings: "Clinical presentation (cough, crackles, wheezing) + RSV antigen positive.",
            scoreDelta: 15
          },
          {
            id: "d2",
            text: "Classify severity as mild-to-moderate",
            isOptimal: true,
            findings: "RR 55, SpO2 92%, mild retractions, no grunting, feeding still possible. Not severe.",
            scoreDelta: 10
          },
          {
            id: "d3",
            text: "Assess risk factors for severe disease",
            isOptimal: true,
            findings: "Age 8 months (older infant - lower risk), no prematurity, no cardiac disease. Low-risk.",
            scoreDelta: 8
          },
          {
            id: "d4",
            text: "Identify mild dehydration",
            isOptimal: true,
            findings: "Decreased feeding, dry mucous membranes. Mild dehydration. Not severe.",
            scoreDelta: 8
          },
          {
            id: "d5",
            text: "Rule out bacterial superinfection",
            isOptimal: true,
            findings: "Afebrile now, no focal consolidation on CXR. No bacterial superinfection evident.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 5,
        name: "Treatment",
        narrative: "Implement supportive care, the cornerstone of bronchiolitis management.",
        availableActions: [
          {
            id: "t1",
            text: "Provide oxygen therapy if SpO2 <90%",
            isOptimal: true,
            findings: "SpO2 92%, at risk of desaturation. Start O2 via nasal cannula to maintain SpO2 >92%.",
            scoreDelta: 12
          },
          {
            id: "t2",
            text: "Maintain hydration - IV fluids if inadequate oral intake",
            isOptimal: true,
            findings: "Feeding 50% of normal. Start IV fluids (0.45% NaCl) at maintenance rate.",
            scoreDelta: 12
          },
          {
            id: "t3",
            text: "Do NOT routinely give antibiotics (viral infection)",
            isOptimal: true,
            findings: "Viral bronchiolitis - antibiotics not indicated. No clinical signs of bacterial infection.",
            scoreDelta: 10
          },
          {
            id: "t4",
            text: "Avoid routine corticosteroid use",
            isOptimal: true,
            findings: "No evidence for routine steroid benefit in mild-moderate bronchiolitis.",
            scoreDelta: 8
          },
          {
            id: "t5",
            text: "Do NOT use routine salbutamol (beta-2 agonist)",
            isOptimal: true,
            findings: "Salbutamol not routinely beneficial. Can be tried in wheezy infants but limited evidence.",
            scoreDelta: 5
          },
          {
            id: "t6",
            text: "Ribavirin for high-risk patients (not routine)",
            isOptimal: true,
            findings: "Patient low-risk. Ribavirin reserved for immunocompromised or severely ill infants.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 6,
        name: "Follow-up & Monitoring",
        narrative: "Monitor response and plan disposition.",
        availableActions: [
          {
            id: "fu1",
            text: "Monitor oxygen saturation continuously",
            isOptimal: true,
            findings: "SpO2 improves to 94-95% with supplemental oxygen. Feeding gradually resuming.",
            scoreDelta: 8
          },
          {
            id: "fu2",
            text: "Reassess hydration status daily",
            isOptimal: true,
            findings: "Oral intake improving by day 2. Transition to oral rehydration. Continue IV as supplement.",
            scoreDelta: 5
          },
          {
            id: "fu3",
            text: "Admit for hospitalization given respiratory distress and feeding difficulty",
            isOptimal: true,
            findings: "Admit for 2-3 days of observation, oxygen support, feeding assistance.",
            scoreDelta: 8
          },
          {
            id: "fu4",
            text: "Discharge criteria: SpO2 >92% off oxygen, able to feed adequately, no respiratory distress",
            isOptimal: true,
            findings: "By day 3: SpO2 95% on room air, taking feeds well, RR normal. Ready for discharge.",
            scoreDelta: 10
          },
          {
            id: "fu5",
            text: "Educate parents on home care and warning signs",
            isOptimal: true,
            findings: "Counsel: maintain hydration, watch for rapid breathing, cyanosis, poor feeding. Seek care if worsens.",
            scoreDelta: 8
          },
          {
            id: "fu6",
            text: "Recommend RSV prophylaxis with palivizumab if high-risk",
            isOptimal: false,
            findings: "Not high-risk. Palivizumab reserved for prematurity <29 weeks or chronic lung disease.",
            scoreDelta: 0
          }
        ]
      }
    ],
    learningObjectives: [
      "Recognize clinical features of bronchiolitis in infants",
      "Diagnose RSV bronchiolitis using rapid antigen testing and clinical assessment",
      "Assess severity using age, SpO2, respiratory rate, and work of breathing",
      "Implement appropriate supportive care (oxygen, hydration)",
      "Recognize that antibiotics, steroids, and routine bronchodilators are not indicated",
      "Identify high-risk patients needing intensive monitoring or prophylaxis"
    ],
    keyTeachingPoints: [
      "Bronchiolitis is viral - caused by RSV, parainfluenza, influenza, rhinovirus",
      "Diagnosis clinical (crackles, wheezing, hyperinflation on CXR) + confirmed by RSV antigen",
      "Supportive care is cornerstone: oxygen (if SpO2 <90%), hydration, monitoring",
      "Antibiotics NOT indicated - viral infection, no bacterial superinfection",
      "Steroids not routinely used - limited evidence of benefit",
      "Most cases resolve in 3-5 days with supportive care alone"
    ]
  }
];
