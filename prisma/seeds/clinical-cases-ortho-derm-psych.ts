export const clinicalCasesOrthoDermPsych = [
  {
    title: "Supracondylar Fracture with Vascular Compromise",
    presentingComplaint: "7-year-old boy with swollen, painful right elbow after fall from swing; absent radial pulse",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG"] as string[],
    patientProfile: {
      age: 7,
      sex: "Male",
      occupation: "Student",
      history: "Fell from swing 2 hours ago; immediate severe pain and swelling; parents report forearm looks pale"
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "7-year-old brought by parents with severe right elbow pain and swelling after fall. Forearm appears pale. Vitals: HR 110, BP 95/60, RR 22. What history do you elicit?",
        availableActions: [
          {
            id: "h1",
            text: "Ask mechanism of injury (fall height, direction of fall)",
            isOptimal: true,
            findings: "Fall from 1.5m onto outstretched hand (FOOSH), backward fall",
            scoreDelta: 2
          },
          {
            id: "h2",
            text: "Assess pain severity and radiation",
            isOptimal: true,
            findings: "Severe 9/10 pain, no radiation to shoulder; pain in forearm and hand",
            scoreDelta: 2
          },
          {
            id: "h3",
            text: "Ask about paresthesia or numbness",
            isOptimal: true,
            findings: "Patient reports tingling in fingers; cold, numb hand",
            scoreDelta: 3
          },
          {
            id: "h4",
            text: "Ask about ability to move fingers",
            isOptimal: true,
            findings: "Minimal finger movement; hand appears limp",
            scoreDelta: 2
          },
          {
            id: "h5",
            text: "Inquire about prior medical history",
            isOptimal: false,
            findings: "No prior fractures or bleeding disorders",
            scoreDelta: 0
          },
          {
            id: "h6",
            text: "Ask about last meal and fluid intake",
            isOptimal: false,
            findings: "Had breakfast 3 hours ago; can sip water",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "On exam: severe elbow swelling with ecchymosis. Child refuses to move arm. Limb appears pale. What do you examine urgently?",
        availableActions: [
          {
            id: "e1",
            text: "Check radial and ulnar pulses bilaterally",
            isOptimal: true,
            findings: "Right radial pulse absent; ulnar pulse weak but palpable; left radial pulse normal",
            scoreDelta: 3
          },
          {
            id: "e2",
            text: "Assess skin temperature and color of hand/forearm",
            isOptimal: true,
            findings: "Right forearm and hand pale and cold; capillary refill >3 seconds",
            scoreDelta: 3
          },
          {
            id: "e3",
            text: "Test median and radial nerve sensation (thumb, index finger)",
            isOptimal: true,
            findings: "Decreased sensation in median nerve distribution; normal radial sensation",
            scoreDelta: 2
          },
          {
            id: "e4",
            text: "Assess motor power (hand intrinsics, thumb opposition)",
            isOptimal: true,
            findings: "Weak thumb opposition (median nerve); normal finger abduction",
            scoreDelta: 2
          },
          {
            id: "e5",
            text: "Palpate bony landmarks (medial/lateral epicondyles)",
            isOptimal: false,
            findings: "Severe pain on palpation; deformity present",
            scoreDelta: 1
          },
          {
            id: "e6",
            text: "Check compartments of forearm for firmness",
            isOptimal: true,
            findings: "Anterior compartment tense; possible early compartment syndrome",
            scoreDelta: 2
          },
          {
            id: "e7",
            text: "Measure blood pressure in both arms",
            isOptimal: false,
            findings: "Right: 90/55, Left: 95/62 (systolic difference 5 mmHg)",
            scoreDelta: 0
          },
          {
            id: "e8",
            text: "Assess for swollen fingers (Clenched fist test)",
            isOptimal: true,
            findings: "Cannot make fist due to pain and swelling",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Vascular compromise suspected (absent radial pulse, pale hand, weak ulnar pulse). This is a surgical emergency. What imaging before reduction?",
        availableActions: [
          {
            id: "i1",
            text: "Order X-ray elbow (AP, lateral, internal oblique views)",
            isOptimal: true,
            findings: "Gartland Type III supracondylar fracture (completely displaced, no cortical continuity)",
            scoreDelta: 3
          },
          {
            id: "i2",
            text: "Do NOT delay reduction for advanced imaging (CT/MRI/Doppler)",
            isOptimal: true,
            findings: "Confirm: vascular emergency takes precedence; imaging should not delay treatment",
            scoreDelta: 3
          },
          {
            id: "i3",
            text: "Order urgent Doppler or CTA for vessel assessment",
            isOptimal: false,
            findings: "Delays reduction; should proceed directly to theatre",
            scoreDelta: -1
          },
          {
            id: "i4",
            text: "Check hemoglobin and clotting profile",
            isOptimal: false,
            findings: "Hb 11.5 g/dL (normal for age); INR 1.0; not critical in emergency",
            scoreDelta: 0
          },
          {
            id: "i5",
            text: "Arrange for operating theatre and anesthesia standby",
            isOptimal: true,
            findings: "Confirm: OR available; anesthesia ready for emergency K-wire fixation",
            scoreDelta: 3
          },
          {
            id: "i6",
            text: "Obtain consent from parents for emergency reduction and fixation",
            isOptimal: true,
            findings: "Verbal consent documented; parents briefed on Volkmann's contracture risk",
            scoreDelta: 2
          }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "X-rays confirm Gartland Type III supracondylar fracture with vascular compromise. Classify and state your management plan.",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Gartland III supracondylar fracture with anterior brachial artery compromise",
            isOptimal: true,
            findings: "Confirm: absent radial pulse, pale hand, weak ulnar pulse indicate arterial injury",
            scoreDelta: 3
          },
          {
            id: "d2",
            text: "Identify risk of Volkmann's contracture if untreated",
            isOptimal: true,
            findings: "Confirm: ischemia duration >6-8 hours risks permanent disability",
            scoreDelta: 2
          },
          {
            id: "d3",
            text: "Consider brachial artery thrombosis vs. kinking/stretching",
            isOptimal: true,
            findings: "Most likely kinking from fracture displacement; thrombosis possible but less common",
            scoreDelta: 1
          },
          {
            id: "d4",
            text: "Plan percutaneous K-wire fixation under anesthesia",
            isOptimal: true,
            findings: "Confirm: standard for Gartland III; allows immediate reduction and vascular relief",
            scoreDelta: 3
          },
          {
            id: "d5",
            text: "Consider skeletal traction instead of surgery",
            isOptimal: false,
            findings: "Incorrect: K-wire fixation faster; traction delays vascular restoration",
            scoreDelta: -2
          }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Patient moved to OR. Anesthesia induced (IV propofol, succinylcholine). How do you proceed with reduction and fixation?",
        availableActions: [
          {
            id: "t1",
            text: "Perform gentle closed reduction (extension, abduction, external rotation)",
            isOptimal: true,
            findings: "Fracture reduced with gentle longitudinal traction; alignment restored on fluoroscopy",
            scoreDelta: 3
          },
          {
            id: "t2",
            text: "Check radial pulse after reduction",
            isOptimal: true,
            findings: "Radial pulse returns after reduction! Confirms vascular relief via realignment",
            scoreDelta: 3
          },
          {
            id: "t3",
            text: "Insert lateral K-wires (2 wires, percutaneous)",
            isOptimal: true,
            findings: "Two 2mm K-wires inserted lateral to medial; stable fixation confirmed on C-arm",
            scoreDelta: 2
          },
          {
            id: "t4",
            text: "Consider medial K-wire if unstable reduction",
            isOptimal: false,
            findings: "Not needed here (lateral wires sufficient); medial approach risks nerve injury",
            scoreDelta: 0
          },
          {
            id: "t5",
            text: "Perform percutaneous pinning without reduction (wire through fragments)",
            isOptimal: false,
            findings: "Incorrect: fracture must be reduced first to restore vascularity",
            scoreDelta: -3
          },
          {
            id: "t6",
            text: "Check finger perfusion and movement post-fixation",
            isOptimal: true,
            findings: "Fingers now pink, warm, normal capillary refill; fingers move",
            scoreDelta: 2
          },
          {
            id: "t7",
            text: "Immobilize arm in posterior slab with elevation",
            isOptimal: true,
            findings: "Posterior slab applied; arm elevated on pillow; compression dressing applied",
            scoreDelta: 1
          },
          {
            id: "t8",
            text: "Order post-op X-ray to confirm alignment",
            isOptimal: true,
            findings: "X-ray shows good anatomical reduction; K-wires in optimal position",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-op Day 1: Child's hand is pink, warm. Radial pulse palpable. Pain controlled. What is your follow-up plan?",
        availableActions: [
          {
            id: "f1",
            text: "Observe for compartment syndrome signs (pain, swelling, paresthesia, weakness)",
            isOptimal: true,
            findings: "Pain improving; minimal swelling; fingers move; no paresthesia; compartments soft",
            scoreDelta: 2
          },
          {
            id: "f2",
            text: "Start active ROM (gentle finger and wrist movements, no elbow motion)",
            isOptimal: true,
            findings: "Child able to move fingers freely; no increased pain with movement",
            scoreDelta: 2
          },
          {
            id: "f3",
            text: "Plan K-wire removal at 3-4 weeks post-op",
            isOptimal: true,
            findings: "Confirm: after bony union; wires typically removed under local anesthesia",
            scoreDelta: 2
          },
          {
            id: "f4",
            text: "Start physiotherapy for elbow ROM after K-wire removal",
            isOptimal: true,
            findings: "Confirm: PT essential to prevent stiffness; progressive mobilization protocol",
            scoreDelta: 1
          },
          {
            id: "f5",
            text: "Discharge on Day 2-3 with arm elevated in sling",
            isOptimal: true,
            findings: "Discharged home; parents instructed on elevation, hygiene, ROM exercises",
            scoreDelta: 1
          },
          {
            id: "f6",
            text: "Schedule 6-week follow-up X-ray to assess union",
            isOptimal: true,
            findings: "Confirm: X-ray shows early callus formation; fracture healing on track",
            scoreDelta: 1
          }
        ]
      }
    ]
  },
  {
    title: "Femoral Neck Fracture with Hip Dislocation (Elderly)",
    presentingComplaint: "72-year-old female with right hip pain, shortened externally rotated leg after fall at home",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG"] as string[],
    patientProfile: {
      age: 72,
      sex: "Female",
      occupation: "Retired",
      history: "Osteoporosis (on alendronate), hypertension (on amlodipine), diabetes. Fell in bathroom; unable to bear weight."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "72-year-old woman with right hip pain after fall. She is unable to move the leg. What is the key history?",
        availableActions: [
          {
            id: "h1",
            text: "Ask about mechanism (fall height, direction, area struck)",
            isOptimal: true,
            findings: "Slipped on wet bathroom tile, fell backward onto right hip from standing height",
            scoreDelta: 2
          },
          {
            id: "h2",
            text: "Ask about immediate symptoms (pain location, hearing 'crack')",
            isOptimal: true,
            findings: "Sudden severe pain in right groin/hip; heard/felt crack; unable to move hip",
            scoreDelta: 2
          },
          {
            id: "h3",
            text: "Assess risk factors for fracture (osteoporosis, prior fractures, falls)",
            isOptimal: true,
            findings: "On osteoporosis treatment; no prior fractures; first fall in 5 years",
            scoreDelta: 2
          },
          {
            id: "h4",
            text: "Ask about loss of consciousness or head injury",
            isOptimal: true,
            findings: "No LOC; no head strike; alert and oriented throughout",
            scoreDelta: 1
          },
          {
            id: "h5",
            text: "Inquire about urinary/bowel symptoms",
            isOptimal: false,
            findings: "No retention or incontinence; normal bladder control",
            scoreDelta: 0
          },
          {
            id: "h6",
            text: "Ask about shooting leg pain or foot numbness",
            isOptimal: false,
            findings: "No sciatic or femoral nerve pain; sensation intact",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "On inspection: right leg appears shortened, externally rotated, abducted. Hip in flexion. What do you find on exam?",
        availableActions: [
          {
            id: "e1",
            text: "Measure limb lengths (ASIS to medial malleolus)",
            isOptimal: true,
            findings: "Right leg 3 cm shorter than left; confirms shortening from fracture/dislocation",
            scoreDelta: 2
          },
          {
            id: "e2",
            text: "Assess hip external rotation and flexion angle",
            isOptimal: true,
            findings: "Right hip in ~30° flexion, marked external rotation; left hip neutral",
            scoreDelta: 2
          },
          {
            id: "e3",
            text: "Palpate the groin/anterior hip for crepitus or deformity",
            isOptimal: true,
            findings: "Groin tender; no crepitus; soft tissue swelling palpable",
            scoreDelta: 2
          },
          {
            id: "e4",
            text: "Test active hip motion (flexion, abduction, rotation)",
            isOptimal: true,
            findings: "No active motion possible; severe pain with any attempted movement",
            scoreDelta: 2
          },
          {
            id: "e5",
            text: "Check femoral and distal pulses, skin color, temperature",
            isOptimal: true,
            findings: "Femoral pulse present; foot warm; normal color (no vascular compromise)",
            scoreDelta: 1
          },
          {
            id: "e6",
            text: "Test lower limb nerve sensation (femoral, sciatic, superficial peroneal)",
            isOptimal: true,
            findings: "Sensation intact in all territories; no nerve deficit",
            scoreDelta: 1
          },
          {
            id: "e7",
            text: "Check for bruising over hip, thigh, buttock",
            isOptimal: false,
            findings: "Mild ecchymosis developing over lateral hip; typical for trauma",
            scoreDelta: 0
          },
          {
            id: "e8",
            text: "Assess abdominal examination for injury",
            isOptimal: false,
            findings: "Soft, non-tender, normal bowel sounds; no signs of abdominal trauma",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Clinical picture suggests femoral neck fracture. What imaging do you order?",
        availableActions: [
          {
            id: "i1",
            text: "Order pelvis X-ray (AP view) and right hip X-ray (lateral view)",
            isOptimal: true,
            findings: "Reveals intracapsular femoral neck fracture (Garden IV); femoral head may show posterior dislocation signs",
            scoreDelta: 3
          },
          {
            id: "i2",
            text: "Do NOT attempt internal rotation (AP 'frog-leg' view) if posterior dislocation suspected",
            isOptimal: true,
            findings: "Confirm: avoid exacerbating posterior dislocation; use lateral view instead",
            scoreDelta: 2
          },
          {
            id: "i3",
            text: "Order CT pelvis and hips if fracture pattern unclear",
            isOptimal: false,
            findings: "X-ray adequate for diagnosis; CT not required urgently",
            scoreDelta: 0
          },
          {
            id: "i4",
            text: "Check pre-op investigations: CBC, renal function, coagulation, ECG",
            isOptimal: true,
            findings: "Hb 10.8 (mild anemia); Cr 1.1 (normal); PT/INR normal; ECG shows normal sinus rhythm",
            scoreDelta: 1
          },
          {
            id: "i5",
            text: "Order X-ray ankle/leg to rule out associated fractures",
            isOptimal: false,
            findings: "No other fractures visible; not routine unless clinical suspicion",
            scoreDelta: 0
          },
          {
            id: "i6",
            text: "Classify fracture as Garden I, II, III, or IV based on displacement",
            isOptimal: true,
            findings: "Garden IV: completely displaced, no cortical contact; high risk for AVN",
            scoreDelta: 2
          }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "X-ray confirms intracapsular femoral neck fracture (Garden IV) in 72-year-old. What is your diagnosis and management plan?",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Garden IV intracapsular femoral neck fracture, displaced",
            isOptimal: true,
            findings: "Confirm: high-risk fracture with >30% risk of AVN and non-union in this age group",
            scoreDelta: 3
          },
          {
            id: "d2",
            text: "Identify age >65 as indication for hemiarthroplasty over ORIF",
            isOptimal: true,
            findings: "Confirm: consensus is HA (Austin Moore or cemented) for elderly displaced NOF fractures",
            scoreDelta: 3
          },
          {
            id: "d3",
            text: "Assess for ASA grade to determine surgical risk",
            isOptimal: true,
            findings: "ASA III (osteoporosis, HTN, DM); acceptable risk for hemiarthroplasty",
            scoreDelta: 1
          },
          {
            id: "d4",
            text: "Plan open reduction and internal fixation (ORIF) with cannulated screws",
            isOptimal: false,
            findings: "Incorrect for this age/fracture type; high AVN/non-union risk",
            scoreDelta: -2
          },
          {
            id: "d5",
            text: "Consider total hip arthroplasty (THA) if patient is active, no cognitive impairment",
            isOptimal: false,
            findings: "Not standard for acute NOF in elderly; excess operative time and blood loss",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Plan hemiarthroplasty. Patient in OR, general anesthesia with epidural. How do you proceed?",
        availableActions: [
          {
            id: "t1",
            text: "Position patient supine; prepare and drape hip and proximal femur",
            isOptimal: true,
            findings: "Patient positioned; hip abducted, flexed slightly for access; surgical field prepped",
            scoreDelta: 1
          },
          {
            id: "t2",
            text: "Use anterior approach (Smith-Petersen) or anterolateral (Watson-Jones)",
            isOptimal: true,
            findings: "Anterolateral approach chosen; good access to femoral head and neck",
            scoreDelta: 2
          },
          {
            id: "t3",
            text: "Excise femoral head and neck at appropriate level",
            isOptimal: true,
            findings: "Head removed; neck cut at level of lesser trochanter for proper stem seating",
            scoreDelta: 2
          },
          {
            id: "t4",
            text: "Prepare femoral canal (broaching) and insert appropriate size stem",
            isOptimal: true,
            findings: "Medullary canal reamed; size 12-13 stem inserted (cemented Austin Moore prosthesis)",
            scoreDelta: 2
          },
          {
            id: "t5",
            text: "Insert femoral head component (28mm or 32mm)",
            isOptimal: true,
            findings: "28mm head inserted (standard for HA); trial reduction confirms alignment",
            scoreDelta: 1
          },
          {
            id: "t6",
            text: "Test hip stability and range of motion",
            isOptimal: true,
            findings: "Hip stable in flexion, abduction, external rotation; no posterior instability",
            scoreDelta: 2
          },
          {
            id: "t7",
            text: "Close in layers; drain placement optional",
            isOptimal: true,
            findings: "Closure completed; small drain placed (to prevent hematoma); sterile dressing",
            scoreDelta: 1
          },
          {
            id: "t8",
            text: "Obtain intra-op X-ray to confirm prosthesis position",
            isOptimal: true,
            findings: "X-ray shows good prosthesis position; stem well-seated; no loose bodies",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-op Day 1: Hip is stable, pain controlled, patient mobilizing with walker. What is your follow-up plan?",
        availableActions: [
          {
            id: "f1",
            text: "Start bed exercises (quadriceps sets, glute sets, ankle pumps) on Day 1",
            isOptimal: true,
            findings: "Patient performing isometric quad exercises; prevents DVT and maintains strength",
            scoreDelta: 2
          },
          {
            id: "f2",
            text: "Progress to standing and walking with walker (touch-down weight bearing)",
            isOptimal: true,
            findings: "Day 2-3: patient standing with walker; able to walk 10m with assistance",
            scoreDelta: 2
          },
          {
            id: "f3",
            text: "Prescribe DVT prophylaxis (enoxaparin or apixaban) for 10-14 days",
            isOptimal: true,
            findings: "Enoxaparin 40mg SC daily started; low bleeding risk in this patient",
            scoreDelta: 2
          },
          {
            id: "f4",
            text: "Order post-op X-ray (AP pelvis, lateral hip) before discharge",
            isOptimal: true,
            findings: "X-ray shows prosthesis in good position; no loosening or varus/valgus tilting",
            scoreDelta: 1
          },
          {
            id: "f5",
            text: "Discharge by Day 5-7 with walker, hip precautions, PT referral",
            isOptimal: true,
            findings: "Discharged home; instructed on no hip flexion >90°, no adduction past midline, no IR",
            scoreDelta: 2
          },
          {
            id: "f6",
            text: "Schedule 6-week follow-up (exam + X-ray); then discharge from ortho care",
            isOptimal: true,
            findings: "6-week: X-ray normal; ROM improving; patient walking with cane; discharged",
            scoreDelta: 1
          }
        ]
      }
    ]
  },
  {
    title: "Compound Tibial Fracture Gustilo IIIA with Vascular Repair",
    presentingComplaint: "28-year-old male with open tibia fracture (bone protruding), severe soft tissue injury after RTA",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 45,
    examTags: ["NEXT_STEP1", "NEET_PG", "CRITICAL_CARE"] as string[],
    patientProfile: {
      age: 28,
      sex: "Male",
      occupation: "Truck driver",
      history: "RTA 30 minutes ago; crush injury of right leg. Tetanus status unknown. On-scene anesthesia-free bleeding control."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "28-year-old truck driver brought by ambulance with crush injury to right leg. Bone visible through wound. Vitals: HR 120, BP 100/65, RR 24. Rapid trauma history?",
        availableActions: [
          {
            id: "h1",
            text: "Obtain mechanism of injury (what hit the leg, speed, vehicle type)",
            isOptimal: true,
            findings: "RTA at 60 km/h; truck wheel ran over right tibia; patient extracted after 10 min",
            scoreDelta: 2
          },
          {
            id: "h2",
            text: "Determine time of injury and estimate ischemia duration",
            isOptimal: true,
            findings: "Injury 30 min ago; direct pressure applied at scene; no tourniquet; ischemia risk moderate",
            scoreDelta: 2
          },
          {
            id: "h3",
            text: "Ask about loss of consciousness or head/spinal trauma",
            isOptimal: true,
            findings: "Briefly dazed; no LOC; no head strike; spine immobilized as precaution",
            scoreDelta: 1
          },
          {
            id: "h4",
            text: "Determine tetanus status and allergy history",
            isOptimal: true,
            findings: "Unknown tetanus status (assume <5 yr); NKDA; on no chronic medications",
            scoreDelta: 1
          },
          {
            id: "h5",
            text: "Ask about compartment syndrome symptoms (if previous fractures)",
            isOptimal: false,
            findings: "First major trauma; no prior lower limb fractures",
            scoreDelta: 0
          },
          {
            id: "h6",
            text: "Obtain detailed pain history from other body parts",
            isOptimal: true,
            findings: "Focal right leg pain; no chest, abdominal, or pelvic pain",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Inspection reveals open wound over anterior tibia with bone protruding, crushed soft tissues, heavy bleeding controlled by dressing. Perform rapid vascular assessment.",
        availableActions: [
          {
            id: "e1",
            text: "Assess distal perfusion (foot color, temperature, capillary refill)",
            isOptimal: true,
            findings: "Foot pale, cold, capillary refill >4 sec; suggests anterior tibial artery injury",
            scoreDelta: 3
          },
          {
            id: "e2",
            text: "Palpate dorsalis pedis and posterior tibial pulses",
            isOptimal: true,
            findings: "DP pulse absent; PT pulse weak but palpable; posterior tibial intact",
            scoreDelta: 3
          },
          {
            id: "e3",
            text: "Assess sensory and motor function of foot (superficial peroneal, deep peroneal, tibial nerves)",
            isOptimal: true,
            findings: "Diminished sensation in dorsum; weak foot dorsiflexion; pain sensation preserved",
            scoreDelta: 2
          },
          {
            id: "e4",
            text: "Estimate soft tissue injury extent (Gustilo-Anderson grade assessment)",
            isOptimal: true,
            findings: "IIIA: large laceration, crushed muscle, neurovascular injury, but limb salvageable",
            scoreDelta: 2
          },
          {
            id: "e5",
            text: "Check for compartment firmness (anterior, posterior compartments of leg)",
            isOptimal: true,
            findings: "Anterior compartment tense; posterior compartment soft; early compartment syndrome",
            scoreDelta: 2
          },
          {
            id: "e6",
            text: "Maintain sterile technique; cover wound with sterile dressing",
            isOptimal: true,
            findings: "Dressing changed to clean sterile; minimal manipulation to prevent contamination",
            scoreDelta: 1
          },
          {
            id: "e7",
            text: "Check for other fractures (femur, fibula, foot)",
            isOptimal: true,
            findings: "Tibia is main fracture; fibula also fractured; foot intact",
            scoreDelta: 1
          },
          {
            id: "e8",
            text: "Assess for rhabdomyolysis (dark urine, muscle crush signs)",
            isOptimal: true,
            findings: "Crush injury present; urine not yet darkened; CPK monitoring needed",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Gustilo IIIA compound fracture with vascular compromise confirmed. Urgent investigations and imaging?",
        availableActions: [
          {
            id: "i1",
            text: "Do NOT delay imaging for wound photo/cultures; proceed to imaging after stabilization",
            isOptimal: true,
            findings: "Confirm: speed is critical; imaging, then immediate vascular surgery consultation",
            scoreDelta: 2
          },
          {
            id: "i2",
            text: "Order X-ray tibia/fibula (AP and lateral) to grade fracture",
            isOptimal: true,
            findings: "X-ray shows comminuted tibia fracture at mid-shaft; fibula fractured at same level",
            scoreDelta: 2
          },
          {
            id: "i3",
            text: "Consider CT angiography (CTA) if vascular injury unclear",
            isOptimal: false,
            findings: "Clinical signs clear (absent DP, pale foot); CTA delays treatment; proceed to OR",
            scoreDelta: -1
          },
          {
            id: "i4",
            text: "Order stat labs: CBC, coagulation, renal function, glucose, group & crossmatch (6U PRBC)",
            isOptimal: true,
            findings: "Hb 10.5 (acute blood loss anemia); PT/INR normal; Cr 0.9; blood ready for transfusion",
            scoreDelta: 2
          },
          {
            id: "i5",
            text: "Do wound culture and Gram stain before surgical debridement",
            isOptimal: true,
            findings: "Cultures taken from wound; sent to lab; will guide post-op antibiotics",
            scoreDelta: 1
          },
          {
            id: "i6",
            text: "Arrange vascular surgery consult STAT (parallel with orthopedic planning)",
            isOptimal: true,
            findings: "Vascular surgeon alerted; will assess for primary repair vs. shunt vs. amputation",
            scoreDelta: 3
          }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Gustilo IIIA compound tibia fracture with anterior tibial artery injury (absent DP pulse, cold foot). Classify injury and plan treatment.",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Gustilo-Anderson Type IIIA open tibia fracture with vascular injury",
            isOptimal: true,
            findings: "Confirm: large laceration, muscle crush, neurovascular injury, limb salvageable",
            scoreDelta: 3
          },
          {
            id: "d2",
            text: "Identify anterior tibial artery injury (absent DP, pale cold foot)",
            isOptimal: true,
            findings: "Confirm: vascular urgency; ischemia time <2 hrs suggests salvageability",
            scoreDelta: 3
          },
          {
            id: "d3",
            text: "Plan immediate vascular repair (primary anastomosis or reversed vein graft)",
            isOptimal: true,
            findings: "Decision: primary repair if artery ends are viable; vein graft if gap >2cm",
            scoreDelta: 3
          },
          {
            id: "d4",
            text: "Plan external fixation (bridging fixation) for fracture stabilization",
            isOptimal: true,
            findings: "Confirm: external fixator preferred in contaminated wounds; allows wound access",
            scoreDelta: 3
          },
          {
            id: "d5",
            text: "Plan primary ORIF with plate and screws",
            isOptimal: false,
            findings: "Incorrect: ORIF contraindicated in Gustilo IIIA (infection risk); external fixation used",
            scoreDelta: -2
          }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "OR setup: orthopedic and vascular surgical teams present. Anesthesia induced. Aggressive fluid resuscitation ongoing. How do you proceed?",
        availableActions: [
          {
            id: "t1",
            text: "Perform thorough wound debridement (remove devitalized tissue, bone fragments)",
            isOptimal: true,
            findings: "Crushed muscle debrided; 3 devitalized bone fragments removed; wound irrigation copious",
            scoreDelta: 3
          },
          {
            id: "t2",
            text: "Identify vascular injury (artery location, vessel integrity, gap assessment)",
            isOptimal: true,
            findings: "Anterior tibial artery found; 2cm laceration; ends viable; minimal thrombosis",
            scoreDelta: 2
          },
          {
            id: "t3",
            text: "Perform vascular repair: primary anastomosis with interrupted 6-0 sutures",
            isOptimal: true,
            findings: "Artery ends debrided, irrigated; end-to-end anastomosis completed; good flow restored",
            scoreDelta: 3
          },
          {
            id: "t4",
            text: "Check restoration of pedal pulses and foot perfusion after repair",
            isOptimal: true,
            findings: "DP pulse returns; foot pink, warm; capillary refill <2 sec; successful reperfusion",
            scoreDelta: 3
          },
          {
            id: "t5",
            text: "Install external fixator (pins above and below fracture, bridging frame)",
            isOptimal: true,
            findings: "Uniplanar fixator applied; pins in proximal tibia, distal tibia; stable reduction",
            scoreDelta: 2
          },
          {
            id: "t6",
            text: "Leave wound open (no primary closure) for infection control",
            isOptimal: true,
            findings: "Confirm: primary closure contraindicated; wound left open; planned for later closure",
            scoreDelta: 2
          },
          {
            id: "t7",
            text: "Apply fresh sterile dressing; plan re-look debridement at 24-48 hrs",
            isOptimal: true,
            findings: "Sterile moist dressing applied; scheduled for re-debridement post-op Day 2",
            scoreDelta: 1
          },
          {
            id: "t8",
            text: "Ensure tetanus prophylaxis and broad-spectrum antibiotics (Cephalosporin + Gentamicin + Clindamycin)",
            isOptimal: true,
            findings: "Tetanus toxoid + Ig given; Cefazolin 2g IV, Gentamicin 5mg/kg, Clindamycin 600mg initiated",
            scoreDelta: 2
          }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-op Day 2: Leg reperfused, externally fixed, wound stable. Pedal pulses present. What is your continuing plan?",
        availableActions: [
          {
            id: "f1",
            text: "Perform planned re-look debridement on Day 2; assess for need for further tissue removal",
            isOptimal: true,
            findings: "Re-debridement done; some additional muscle demarcation noted; removed; wound cleaner",
            scoreDelta: 2
          },
          {
            id: "f2",
            text: "Continue vascular assessment daily (pulses, foot color, temperature, capillary refill)",
            isOptimal: true,
            findings: "Daily: DP pulse present, foot warm and pink; no signs of thrombosis or re-ischemia",
            scoreDelta: 2
          },
          {
            id: "f3",
            text: "Monitor for compartment syndrome; plan fasciotomy if signs develop",
            isOptimal: true,
            findings: "Anterior compartment: mild tense but painless (from fasciotomy-open wound); no additional syndrome",
            scoreDelta: 1
          },
          {
            id: "f4",
            text: "Continue broad-spectrum antibiotics for 72 hrs post-op minimum",
            isOptimal: true,
            findings: "Antibiotics continued through post-op Day 5; cultures negative; stepped down to oral fluoroquinolone",
            scoreDelta: 1
          },
          {
            id: "f5",
            text: "Plan soft tissue coverage (skin graft, flap) once wound clean (usually Day 5-7)",
            isOptimal: true,
            findings: "Post-op Day 5: granulation tissue appearing; skin graft planned for Day 7",
            scoreDelta: 2
          },
          {
            id: "f6",
            text: "Plan fracture consolidation protocol (external fixation for 8-12 weeks, then conversion to IM nail or plate)",
            isOptimal: true,
            findings: "At 12 weeks: bony union evident on X-ray; external fixator removed; minimal residual deformity",
            scoreDelta: 1
          }
        ]
      }
    ]
  },
  {
    title: "Cauda Equina Syndrome with Acute Paraplegia",
    presentingComplaint: "45-year-old male with acute low back pain, bilateral leg pain, saddle anesthesia, urinary retention",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "NEET_PG", "NEUROSURGERY"] as string[],
    patientProfile: {
      age: 45,
      sex: "Male",
      occupation: "Accountant",
      history: "Chronic low back pain (CLBP) for 2 years, managed conservatively. Sudden onset pain 4 hours ago while bending."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "45-year-old with acute lower back pain, bilateral leg pain, and inability to urinate. Came to hospital 1 hour ago. Rapid neuro history?",
        availableActions: [
          {
            id: "h1",
            text: "Ask about onset of leg pain (bilateral? sudden? progressive?)",
            isOptimal: true,
            findings: "Acute onset 4 hours ago while bending forward; bilateral leg pain (buttocks, thighs, legs); progressive over hours",
            scoreDelta: 2
          },
          {
            id: "h2",
            text: "Ask about bowel/bladder symptoms (urinary retention, fecal incontinence, incomplete emptying)",
            isOptimal: true,
            findings: "Cannot urinate for 4 hours despite urge; normal bowel; no fecal incontinence yet",
            scoreDelta: 3
          },
          {
            id: "h3",
            text: "Ask about sensory loss (saddle anesthesia, perineal numbness)",
            isOptimal: true,
            findings: "Patient reports numbness in perineum and inner thighs; wife noticed lack of sensation during micturition",
            scoreDelta: 3
          },
          {
            id: "h4",
            text: "Ask about lower limb weakness (walking, standing, foot strength)",
            isOptimal: true,
            findings: "Walks with difficulty; feet weak; can barely dorsiflex feet; cannot stand on toes",
            scoreDelta: 2
          },
          {
            id: "h5",
            text: "Ask about prior back trauma or disc prolapse history",
            isOptimal: true,
            findings: "Known CLBP with likely disc hernia (not formally imaged); recent heavy lifting",
            scoreDelta: 1
          },
          {
            id: "h6",
            text: "Ask about sexual dysfunction or erectile symptoms",
            isOptimal: false,
            findings: "Not complained, but likely present; important for long-term prognosis but not acute priority",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "On exam: patient in supine position, mild lower back tenderness. Perform focused neuro exam for cauda equina syndrome.",
        availableActions: [
          {
            id: "e1",
            text: "Test lower limb motor strength (hip flexion, knee extension, ankle dorsiflexion, plantarflexion)",
            isOptimal: true,
            findings: "Hip flex 4/5; knee ext 4/5; ankle DF 3/5; PF 4/5; bilateral weakness, DF worst",
            scoreDelta: 3
          },
          {
            id: "e2",
            text: "Test patellar and Achilles reflexes",
            isOptimal: true,
            findings: "Patellar reflex present; Achilles reflex decreased bilaterally (early saddle pattern)",
            scoreDelta: 2
          },
          {
            id: "e3",
            text: "Assess saddle anesthesia (perineum, anus, inner thighs)",
            isOptimal: true,
            findings: "Saddle area: absent pin-prick sensation; anal tone reduced; severe sensory loss",
            scoreDelta: 3
          },
          {
            id: "e4",
            text: "Test lower limb dermatomes (L4, L5, S1, S2-S4)",
            isOptimal: true,
            findings: "L4 normal; L5 & S1 decreased sensation; S2-S4 (saddle) absent sensation",
            scoreDelta: 2
          },
          {
            id: "e5",
            text: "Check anal sphincter tone (digital rectal exam)",
            isOptimal: true,
            findings: "Anal tone reduced; patient cannot contract sphincter on command; voluntary control absent",
            scoreDelta: 2
          },
          {
            id: "e6",
            text: "Assess posterior tibial and dorsalis pedis pulses",
            isOptimal: false,
            findings: "Both pulses present, normal; vascular status not compromised",
            scoreDelta: 0
          },
          {
            id: "e7",
            text: "Perform straight leg raise (SLR) test",
            isOptimal: false,
            findings: "SLR positive for back pain; does not help with CES diagnosis",
            scoreDelta: 0
          },
          {
            id: "e8",
            text: "Palpate abdomen for distended bladder",
            isOptimal: true,
            findings: "Suprapubic mass palpable; tender; consistent with urinary retention",
            scoreDelta: 2
          }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Clinical diagnosis: Cauda Equina Syndrome (CES). This is a neurosurgical emergency. What imaging and monitoring?",
        availableActions: [
          {
            id: "i1",
            text: "Do NOT delay for any investigations; proceed to MRI or to neurosurgery immediately",
            isOptimal: true,
            findings: "Confirm: clinical suspicion sufficient for emergency decompression; imaging should not delay surgery",
            scoreDelta: 3
          },
          {
            id: "i2",
            text: "Order urgent MRI spine (lumbar + sacral, T1/T2, with contrast if available)",
            isOptimal: true,
            findings: "MRI shows large L4-L5 disc herniation, compressing cauda equina; thecal sac obliterated",
            scoreDelta: 3
          },
          {
            id: "i3",
            text: "If MRI unavailable, consider CT myelography as backup imaging",
            isOptimal: false,
            findings: "Not preferred; MRI is gold standard; CT should not delay neurosurgery consultation",
            scoreDelta: 0
          },
          {
            id: "i4",
            text: "Place indwelling Foley catheter to monitor urine output and post-void residual",
            isOptimal: true,
            findings: "Catheterization: 800 mL of clear urine obtained; post-void residual absent after catheterization",
            scoreDelta: 2
          },
          {
            id: "i5",
            text: "Order stat labs: CBC, coagulation, renal function, glucose (pre-op panel)",
            isOptimal: true,
            findings: "All normal; no contraindications to urgent surgery; ready for OR",
            scoreDelta: 1
          },
          {
            id: "i6",
            text: "Contact neurosurgery STAT for emergency decompression consult",
            isOptimal: true,
            findings: "Neurosurgeon alerted; available; plans emergency L4-L5 laminectomy and discectomy",
            scoreDelta: 3
          }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "MRI confirms massive L4-L5 disc herniation compressing cauda equina. Bilateral lower limb weakness + urinary retention + saddle anesthesia. Diagnosis?",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Cauda Equina Syndrome secondary to acute L4-L5 disc herniation",
            isOptimal: true,
            findings: "Confirm: classic presentation with saddle anesthesia, bowel/bladder dysfunction, bilateral leg pain",
            scoreDelta: 3
          },
          {
            id: "d2",
            text: "Recognize this as a neurosurgical emergency requiring decompression within 24-48 hrs",
            isOptimal: true,
            findings: "Confirm: optimal window for functional recovery; beyond 48 hrs risk of permanent deficits increases",
            scoreDelta: 3
          },
          {
            id: "d3",
            text: "Identify compression level: L4-L5 (MRI findings)",
            isOptimal: true,
            findings: "Confirm: L4-L5 disc herniation with thecal sac compression; no cord involvement (lumbar spine)",
            scoreDelta: 1
          },
          {
            id: "d4",
            text: "Plan laminectomy and microdiscectomy at L4-L5",
            isOptimal: true,
            findings: "Confirm: standard approach; removes bone and disc material to decompress cauda equina",
            scoreDelta: 3
          },
          {
            id: "d5",
            text: "Consider non-operative management (high-dose steroids, observation)",
            isOptimal: false,
            findings: "Incorrect: CES requires emergency surgery; steroids alone insufficient",
            scoreDelta: -3
          }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Patient in OR. Neurosurgeon performing L4-L5 laminectomy under microscopy. How do you assist and monitor?",
        availableActions: [
          {
            id: "t1",
            text: "Position patient prone on frame; ensure abdominal/pelvic decompression to reduce venous bleeding",
            isOptimal: true,
            findings: "Patient prone; abdomen/pelvis free; good venous drainage; monitoring all vital signs",
            scoreDelta: 1
          },
          {
            id: "t2",
            text: "Maintain neuromonitoring: MEP (motor evoked potentials) and SSEP (somatosensory evoked potentials)",
            isOptimal: true,
            findings: "Baselines established; monitoring throughout; ensures nerve root preservation",
            scoreDelta: 2
          },
          {
            id: "t3",
            text: "Assist with bilateral laminectomy (L4-L5) and expose dura",
            isOptimal: true,
            findings: "Laminae removed; dura visible; slight bulging from internal compression",
            scoreDelta: 2
          },
          {
            id: "t4",
            text: "Perform careful discectomy under microscope; remove disc material compressing cauda equina",
            isOptimal: true,
            findings: "Disc fragments removed; cauda equina nerves visible and freed; pulsating",
            scoreDelta: 3
          },
          {
            id: "t5",
            text: "Inspect for nerve root adhesions or scar tissue; gently free if present",
            isOptimal: true,
            findings: "Nerve roots freed; no adherent scar; good color and blood supply",
            scoreDelta: 1
          },
          {
            id: "t6",
            text: "Avoid aggressive root retraction to prevent additional nerve injury",
            isOptimal: true,
            findings: "Confirm: gentle retraction protocol; MEP/SSEP maintained; no changes in monitoring",
            scoreDelta: 2
          },
          {
            id: "t7",
            text: "Consider intradural exploration if unable to adequately decompress",
            isOptimal: false,
            findings: "Not needed here; disc herniation extradural; standard laminectomy sufficient",
            scoreDelta: 0
          },
          {
            id: "t8",
            text: "Close in layers; ensure no CSF leak; drain placement optional",
            isOptimal: true,
            findings: "Dura intact; no leak; closure with sutures and adhesive; drain placed; dressing applied",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Post-op Day 1: Patient recovering. Foley catheter in place. Leg strength improving. Pain decreasing. What is your plan?",
        availableActions: [
          {
            id: "f1",
            text: "Perform post-op neuro exam; compare to pre-op baseline and document changes",
            isOptimal: true,
            findings: "Post-op Day 1: Hip flexion 4+/5; ankle DF 4/5 (improved from 3/5); Achilles reflex brisk",
            scoreDelta: 2
          },
          {
            id: "f2",
            text: "Assess urinary function; trial void when patient stable (usually Day 2-3)",
            isOptimal: true,
            findings: "Day 3: attempted void; able to initiate stream; post-void residual 50 mL (acceptable)",
            scoreDelta: 2
          },
          {
            id: "f3",
            text: "Retest anal sphincter tone and rectal sensation daily",
            isOptimal: true,
            findings: "Day 2: anal tone improving; sensation returning in S4-S5 distribution; encouraging",
            scoreDelta: 1
          },
          {
            id: "f4",
            text: "Start physical therapy (bed exercises, sitting tolerance) post-op Day 2",
            isOptimal: true,
            findings: "PT: patient mobilizing with assistance; quad sets, glute sets, ankle pumps initiated",
            scoreDelta: 1
          },
          {
            id: "f5",
            text: "Discharge Foley catheter after successful void trial with low post-void residual",
            isOptimal: true,
            findings: "Post-op Day 4: Foley removed; patient voids spontaneously; residual <75 mL",
            scoreDelta: 2
          },
          {
            id: "f6",
            text: "Arrange 4-6 week follow-up with neurosurgery and physiotherapy for long-term recovery assessment",
            isOptimal: true,
            findings: "6-week: motor strength 5/5 most muscles; sensory recovery in saddle area; continent and functioning",
            scoreDelta: 1
          }
        ]
      }
    ]
  },
  {
    title: "Pemphigus Vulgaris with Oral Involvement",
    presentingComplaint: "40-year-old female with painful oral erosions, flaccid blisters on skin, positive Nikolsky sign",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG", "DERMATOLOGY"] as string[],
    patientProfile: {
      age: 40,
      sex: "Female",
      occupation: "Teacher",
      history: "Oral ulcers for 2 weeks, progressive skin blistering for 1 week. No prior autoimmune disease. On no chronic medications."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "40-year-old woman with oral erosions and blistering skin lesions. Lesions painful, spreading. Any associated symptoms?",
        availableActions: [
          {
            id: "h1",
            text: "Ask about onset and progression (oral first? skin involvement timing?)",
            isOptimal: true,
            findings: "Oral ulcers appeared 2 weeks ago; skin blisters appeared 1 week later; progressive spread",
            scoreDelta: 2
          },
          {
            id: "h2",
            text: "Ask about pain severity and difficulty eating/drinking",
            isOptimal: true,
            findings: "Severe oral pain; difficulty eating solid food; drinking only cool liquids",
            scoreDelta: 2
          },
          {
            id: "h3",
            text: "Ask about other mucosal involvement (eyes, nose, genitals)",
            isOptimal: true,
            findings: "No eye involvement; no nasal erosions; no genital ulcers",
            scoreDelta: 1
          },
          {
            id: "h4",
            text: "Ask about preceding trauma or causative drug use",
            isOptimal: true,
            findings: "No recent trauma; not on ACE inhibitors, NSAIDs, or other pemphigus-triggering drugs",
            scoreDelta: 1
          },
          {
            id: "h5",
            text: "Ask about fever, systemic symptoms, weight loss",
            isOptimal: false,
            findings: "No fever; no weight loss; generally well; no chills",
            scoreDelta: 0
          },
          {
            id: "h6",
            text: "Ask about prior immunosuppression or malignancy history",
            isOptimal: false,
            findings: "No known immunosuppression; no cancer; no tuberculosis",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Inspect oral cavity and skin. Multiple flaccid blisters on trunk, flexural areas. Nikolsky sign elicited easily. What findings?",
        availableActions: [
          {
            id: "e1",
            text: "Examine oral cavity (palate, buccal mucosa, tongue, gingiva)",
            isOptimal: true,
            findings: "Multiple shallow erosions on buccal mucosa, hard palate, soft palate; gums eroded; bleeding on touch",
            scoreDelta: 2
          },
          {
            id: "e2",
            text: "Inspect skin for blistering pattern (facial, trunk, flexural areas)",
            isOptimal: true,
            findings: "Flaccid blisters on face, neck, trunk, axillae, inguinal fold; crusted erosions; no urticarial base",
            scoreDelta: 2
          },
          {
            id: "e3",
            text: "Perform Nikolsky sign (rub skin with finger or swab)",
            isOptimal: true,
            findings: "Positive: superficial epidermis separates easily; widespread intraepidermal acantholysis",
            scoreDelta: 3
          },
          {
            id: "e4",
            text: "Assess bulla morphology (flaccid vs. tense, fluid clarity)",
            isOptimal: true,
            findings: "Blisters are flaccid, rupture easily, leaving painful erosions; clear fluid",
            scoreDelta: 2
          },
          {
            id: "e5",
            text: "Examine for mucous membrane involvement (lips, pharynx)",
            isOptimal: true,
            findings: "Lip erosions present; mild pharyngeal involvement; no esophageal symptoms yet",
            scoreDelta: 1
          },
          {
            id: "e6",
            text: "Check vital signs and general condition",
            isOptimal: true,
            findings: "HR 88, BP 128/82, Temp 37°C, RR 18; no signs of dehydration; alert",
            scoreDelta: 0
          },
          {
            id: "e7",
            text: "Palpate lymph nodes (regional vs. generalized lymphadenopathy)",
            isOptimal: false,
            findings: "No lymphadenopathy; no systemic nodes enlarged",
            scoreDelta: 0
          },
          {
            id: "e8",
            text: "Assess oral hygiene and secondary infection risk",
            isOptimal: false,
            findings: "Oral hygiene adequate; some mild erythema but no purulent discharge",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Clinical picture suggests pemphigus vulgaris (intraepidermal blistering, positive Nikolsky, oral erosions). Confirm diagnosis?",
        availableActions: [
          {
            id: "i1",
            text: "Perform skin biopsy (intact blister for histopathology and immunofluorescence)",
            isOptimal: true,
            findings: "Biopsy shows acantholytic cells (Tzanck cells), intraepidermal cleft at suprabasal level",
            scoreDelta: 3
          },
          {
            id: "i2",
            text: "Order direct immunofluorescence (DIF) on perilesional skin",
            isOptimal: true,
            findings: "DIF shows 'fish-net' pattern of IgG and C3 deposition on intercellular space (pemphigus pattern)",
            scoreDelta: 3
          },
          {
            id: "i3",
            text: "Order indirect immunofluorescence (IIF) or ELISA for circulating antibodies",
            isOptimal: true,
            findings: "IIF/ELISA positive for anti-desmoglein 3 (mucosal) and anti-desmoglein 1 (mucosal + cutaneous)",
            scoreDelta: 2
          },
          {
            id: "i4",
            text: "Order routine labs: CBC, LFT, renal function, glucose (baseline for steroids)",
            isOptimal: true,
            findings: "CBC normal; LFT normal; Cr 0.8; glucose 95 (normal); ready for steroid therapy",
            scoreDelta: 1
          },
          {
            id: "i5",
            text: "Perform chest X-ray to rule out malignancy-associated pemphigus",
            isOptimal: false,
            findings: "CXR normal; no concerning masses; pemphigus vulgaris likely primary",
            scoreDelta: 0
          },
          {
            id: "i6",
            text: "Order screening for tuberculosis (TB) before starting immunosuppression",
            isOptimal: true,
            findings: "TB screening negative (Mantoux test negative, CXR clear); safe to start steroids",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Histology: acantholysis, suprabasal cleft. DIF: fish-net IgG. Diagnose and outline treatment strategy.",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Pemphigus Vulgaris (mucocutaneous form, anti-desmoglein 3 + 1 positive)",
            isOptimal: true,
            findings: "Confirm: DIF gold standard; acantholytic pattern on histology; positive antibodies",
            scoreDelta: 3
          },
          {
            id: "d2",
            text: "Classify severity: moderate (oral + extensive cutaneous lesions, affecting function)",
            isOptimal: true,
            findings: "Confirm: oral erosions impacting nutrition; cutaneous lesions spreading; moderate-severe",
            scoreDelta: 2
          },
          {
            id: "d3",
            text: "Plan high-dose corticosteroids as first-line therapy (1-1.5 mg/kg/day prednisolone)",
            isOptimal: true,
            findings: "Confirm: prednisolone 40-60 mg daily initiated; will taper after remission",
            scoreDelta: 2
          },
          {
            id: "d4",
            text: "Plan adjunctive immunosuppression (rituximab or azathioprine) for steroid-sparing",
            isOptimal: true,
            findings: "Confirm: rituximab preferred (monoclonal anti-B cell); will start after steroid-induced remission",
            scoreDelta: 2
          },
          {
            id: "d5",
            text: "Plan topical therapy only without systemic steroids",
            isOptimal: false,
            findings: "Incorrect: mucocutaneous pemphigus vulgaris requires systemic therapy; topical insufficient",
            scoreDelta: -2
          }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Starting immunosuppressive therapy. Prednisolone 60 mg daily initiated. What supportive and adjunctive measures?",
        availableActions: [
          {
            id: "t1",
            text: "Provide oral care instructions (soft toothbrush, bland mouthwash, topical anesthetics)",
            isOptimal: true,
            findings: "Patient advised: salt water gargles, topical viscous lidocaine before meals; soft foods only",
            scoreDelta: 1
          },
          {
            id: "t2",
            text: "Prescribe topical corticosteroid ointment (0.05% clobetasol) for skin lesions",
            isOptimal: true,
            findings: "Clobetasol ointment applied BID to blisters/erosions; reduces local inflammation",
            scoreDelta: 1
          },
          {
            id: "t3",
            text: "Start PPI (omeprazole) for steroid-induced gastric protection",
            isOptimal: true,
            findings: "Omeprazole 20 mg daily started; reduces risk of PUD from high-dose steroids",
            scoreDelta: 1
          },
          {
            id: "t4",
            text: "Prescribe calcium supplementation (1000 mg daily) and vitamin D",
            isOptimal: true,
            findings: "Calcium carbonate 1000 mg + vitamin D 400 IU started; prevents steroid-induced osteoporosis",
            scoreDelta: 1
          },
          {
            id: "t5",
            text: "Plan rituximab infusion (375 mg/m² weekly x 4 weeks) after steroid induction",
            isOptimal: true,
            findings: "Rituximab infusions started week 2 post-steroid; allows steroid dose reduction by week 4",
            scoreDelta: 2
          },
          {
            id: "t6",
            text: "Advise on dietary modifications (high protein, soft/liquid foods, nutritional supplements)",
            isOptimal: true,
            findings: "Nutritionist consulted; patient on soft diet; protein supplementation advised",
            scoreDelta: 1
          },
          {
            id: "t7",
            text: "Screen for and manage steroid side effects (hyperglycemia, mood changes)",
            isOptimal: true,
            findings: "Blood glucose monitoring started; fasting glucose initially elevated (125); mood stable",
            scoreDelta: 1
          },
          {
            id: "t8",
            text: "Plan baseline DEXA scan for bone density given long-term steroid use",
            isOptimal: true,
            findings: "DEXA scan shows normal T-score; baseline established for monitoring",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Week 4 on therapy: New blisters stopped appearing. Oral erosions healing. Prednisolone reduced to 40 mg daily. What is your follow-up plan?",
        availableActions: [
          {
            id: "f1",
            text: "Assess clinical remission criteria (no new lesions for 2+ weeks, existing lesions healing)",
            isOptimal: true,
            findings: "Complete: no new lesions x 3 weeks; oral erosions scarring normally; skin healing well",
            scoreDelta: 2
          },
          {
            id: "f2",
            text: "Monitor DIF/IIF titers and anti-desmoglein antibodies monthly during taper",
            isOptimal: true,
            findings: "Month 2: anti-desmoglein titers declining; prednisolone tapered to 30 mg",
            scoreDelta: 1
          },
          {
            id: "f3",
            text: "Continue rituximab infusions (4-week schedule completed by month 2)",
            isOptimal: true,
            findings: "Rituximab completed; B-cell counts low; sustained remission expected",
            scoreDelta: 1
          },
          {
            id: "f4",
            text: "Taper prednisolone slowly (reduce by 5-10 mg every 2-4 weeks based on response)",
            isOptimal: true,
            findings: "6-month taper protocol: prednisolone weaned to 5 mg by month 6; maintained at low dose",
            scoreDelta: 2
          },
          {
            id: "f5",
            text: "Monitor for relapse (return of new blisters, oral erosions) during steroid taper",
            isOptimal: true,
            findings: "Throughout taper: patient stable; no relapse; monthly visits to assess healing",
            scoreDelta: 1
          },
          {
            id: "f6",
            text: "Long-term follow-up with dermatology (every 3-6 months) for maintenance therapy and relapse detection",
            isOptimal: true,
            findings: "1-year: maintaining remission on prednisolone 5 mg alternate days + continued B-cell suppression",
            scoreDelta: 1
          }
        ]
      }
    ]
  },
  {
    title: "Stevens-Johnson Syndrome from Carbamazepine",
    presentingComplaint: "25-year-old female with fever, target lesions, mucosal erosions, started carbamazepine 2 weeks ago",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "NEET_PG", "CRITICAL_CARE"] as string[],
    patientProfile: {
      age: 25,
      sex: "Female",
      occupation: "Student",
      history: "Seizure disorder (newly diagnosed). Started carbamazepine 2 weeks ago. No prior drug allergy. Rash appeared 3 days ago."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "25-year-old with fever, rash, and mucosal erosions. Started carbamazepine 2 weeks ago for seizures. Rapid history?",
        availableActions: [
          {
            id: "h1",
            text: "Ask about drug exposure timing (when was carbamazepine started? any other new drugs?)",
            isOptimal: true,
            findings: "Carbamazepine started exactly 14 days ago; no other new drugs; only loratadine for allergy",
            scoreDelta: 2
          },
          {
            id: "h2",
            text: "Ask about rash onset and progression (where first? spread pattern?)",
            isOptimal: true,
            findings: "Rash started on trunk 3 days ago; spread to face and extremities in 48 hours; fever appeared simultaneously",
            scoreDelta: 2
          },
          {
            id: "h3",
            text: "Ask about oral/mucosal symptoms (pain, bleeding, difficulty swallowing)",
            isOptimal: true,
            findings: "Severe oral pain; erosions on lips, buccal mucosa; difficulty swallowing; no GI bleeding",
            scoreDelta: 2
          },
          {
            id: "h4",
            text: "Ask about eye symptoms (pain, photophobia, discharge)",
            isOptimal: true,
            findings: "Both eyes painful; photophobia; mild conjunctival injection; no discharge yet",
            scoreDelta: 2
          },
          {
            id: "h5",
            text: "Ask about prior carbamazepine or other aromatic antiepileptic exposure",
            isOptimal: true,
            findings: "First-time carbamazepine use; no prior phenytoin or phenobarbital; high-risk allele status unknown",
            scoreDelta: 1
          },
          {
            id: "h6",
            text: "Ask about systemic symptoms (arthralgias, malaise, cough)",
            isOptimal: false,
            findings: "Mild malaise; no joint pain; no respiratory symptoms",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Inspection: fever 39°C, widespread rash with target lesions. Lips swollen with erosions. Conjunctivitis present. Body surface area involvement?",
        availableActions: [
          {
            id: "e1",
            text: "Assess rash morphology (target vs. atypical target vs. maculopapular)",
            isOptimal: true,
            findings: "Classic target lesions: three-zone lesions with central necrosis, surrounding erythema; widespread",
            scoreDelta: 2
          },
          {
            id: "e2",
            text: "Estimate body surface area (BSA) involved in rash",
            isOptimal: true,
            findings: "Rash covers ~25% BSA (diagnostic threshold for SJS is 10-30%); predominantly trunk and face",
            scoreDelta: 3
          },
          {
            id: "e3",
            text: "Examine lips and oral mucosa (erosions, blistering, crusting)",
            isOptimal: true,
            findings: "Lip erosions, crusting; extensive oral erosions on hard palate, soft palate, tongue; bleeding on contact",
            scoreDelta: 2
          },
          {
            id: "e4",
            text: "Examine eyes (conjunctivitis, pseudomembrane, synechiae)",
            isOptimal: true,
            findings: "Conjunctival injection; chemosis; pseudomembrane formation on palpebral conjunctiva",
            scoreDelta: 2
          },
          {
            id: "e5",
            text: "Check genital and perianal mucosa for involvement",
            isOptimal: true,
            findings: "Genital erosions present; urethral involvement possible; urinary symptoms absent",
            scoreDelta: 1
          },
          {
            id: "e6",
            text: "Assess for signs of respiratory involvement (stridor, hoarseness, cough)",
            isOptimal: true,
            findings: "Voice slightly hoarse; no stridor; throat mildly erythematous; no respiratory distress",
            scoreDelta: 2
          },
          {
            id: "e7",
            text: "Test for Nikolsky sign (epidermal separation)",
            isOptimal: false,
            findings: "Nikolsky sign weakly positive (not typically strong in SJS unlike pemphigus)",
            scoreDelta: 0
          },
          {
            id: "e8",
            text: "Check lymph nodes (cervical, axillary, inguinal)",
            isOptimal: false,
            findings: "Mild cervical lymphadenopathy; non-tender",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Clinical diagnosis: Stevens-Johnson Syndrome (target lesions + mucosal involvement + fever, <30% BSA). Confirm and assess severity?",
        availableActions: [
          {
            id: "i1",
            text: "Perform skin biopsy for histopathology (if diagnosis uncertain)",
            isOptimal: true,
            findings: "Biopsy: full-thickness epidermal necrosis, dermal-epidermal separation, minimal inflammation (drug reaction pattern)",
            scoreDelta: 2
          },
          {
            id: "i2",
            text: "Order stat labs: CBC, CMP, LFT, coagulation, culture (blood, skin, swab)",
            isOptimal: true,
            findings: "Hb 10.5 (mild anemia); WBC 12.5 (mild elevation); Cr 1.1, LFT normal; INR 1.0; cultures negative",
            scoreDelta: 2
          },
          {
            id: "i3",
            text: "Calculate RegiSCAR or SCORTEN score to assess prognosis",
            isOptimal: true,
            findings: "SCORTEN score: age 25 (0), malignancy (no=0), tachycardia (98=0), bicarbonate normal, urea normal = 0 (good prognosis)",
            scoreDelta: 2
          },
          {
            id: "i4",
            text: "Perform ophthalmic examination (slit-lamp) for pseudomembrane, symblepharon",
            isOptimal: true,
            findings: "Slit-lamp: pseudomembrane on palpebral conjunctiva; early symblepharon formation; refer to ophthalmology",
            scoreDelta: 1
          },
          {
            id: "i5",
            text: "Do NOT perform drug provocation or delayed-type hypersensitivity testing (high risk)",
            isOptimal: true,
            findings: "Confirm: testing contraindicated; diagnosis clear clinically and histologically",
            scoreDelta: 1
          },
          {
            id: "i6",
            text: "Order chest X-ray to rule out pulmonary involvement",
            isOptimal: false,
            findings: "CXR normal; no aspiration or interstitial findings",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Confirm: Stevens-Johnson Syndrome secondary to carbamazepine. Classic target lesions, 25% BSA, mucosal involvement. SCORTEN 0 (good prognosis). Management?",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Stevens-Johnson Syndrome (SJS) induced by carbamazepine (aromatic antiepileptic)",
            isOptimal: true,
            findings: "Confirm: temporal relation (14 days), target lesions, mucosal erosions, fever; classic presentation",
            scoreDelta: 3
          },
          {
            id: "d2",
            text: "Identify SJS vs. TEN by BSA involvement (SJS <30%, TEN >30%)",
            isOptimal: true,
            findings: "Confirm: 25% BSA = SJS; TEN unlikely unless rapid progression",
            scoreDelta: 2
          },
          {
            id: "d3",
            text: "Assess prognosis (SCORTEN 0 = <3.2% mortality; good prognosis)",
            isOptimal: true,
            findings: "Confirm: low SCORTEN predicts good outcome with appropriate supportive care",
            scoreDelta: 2
          },
          {
            id: "d4",
            text: "Plan immediate drug withdrawal (carbamazepine cessation)",
            isOptimal: true,
            findings: "Confirm: stop carbamazepine immediately; prevent further progression",
            scoreDelta: 3
          },
          {
            id: "d5",
            text: "Plan immunosuppression with high-dose IV corticosteroids or IVIG",
            isOptimal: true,
            findings: "Confirm: either IV methylprednisolone 1g daily x 3 days OR IVIG 2g/kg; controversial but widely used",
            scoreDelta: 2
          }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Patient admitted to ICU-level care. Carbamazepine stopped immediately. Starting IV methylprednisolone 1g daily. What supportive care measures?",
        availableActions: [
          {
            id: "t1",
            text: "Provide aggressive wound/skin care (gentle cleaning, minimize handling, topical antibiotic ointment)",
            isOptimal: true,
            findings: "Skin care protocol: gentle saline baths, non-adhesive dressing, silver sulfadiazine to erosions",
            scoreDelta: 2
          },
          {
            id: "t2",
            text: "Start IV fluids for hydration and electrolyte replacement",
            isOptimal: true,
            findings: "IV fluids: Ringer's lactate at 1.5-2x burn calculation (based on affected BSA); central line placed",
            scoreDelta: 1
          },
          {
            id: "t3",
            text: "Provide nutritional support (feeding tube, TPN, high-protein diet)",
            isOptimal: true,
            findings: "Nasogastric feeding tube placed; TPN started; protein 1.5 g/kg; caloric intake 1500-2000 kcal/day",
            scoreDelta: 1
          },
          {
            id: "t4",
            text: "Provide oral care (topical anesthetics, bland rinses, soft diet)",
            isOptimal: true,
            findings: "Viscous lidocaine before meals; salt water gargles; liquid diet; no spicy/hot foods",
            scoreDelta: 1
          },
          {
            id: "t5",
            text: "Manage eye care (artificial tears, ophthalmic ointment, eye patching if needed)",
            isOptimal: true,
            findings: "Ophthalmology co-management; frequent lubricating drops; topical tetracycline ointment; prevention of symblepharon",
            scoreDelta: 2
          },
          {
            id: "t6",
            text: "Monitor for secondary infection (wound cultures, blood cultures if fever)",
            isOptimal: true,
            findings: "Daily wound inspection; temperature monitoring; blood cultures if fever spikes; prophylactic antibiotics",
            scoreDelta: 1
          },
          {
            id: "t7",
            text: "Manage pain (IV opioids, non-drug measures, sedation if mechanical ventilation)",
            isOptimal: true,
            findings: "IV morphine PRN; non-opioid adjuncts (gabapentin); sedation not required at present",
            scoreDelta: 1
          },
          {
            id: "t8",
            text: "Provide psychological support and counseling",
            isOptimal: true,
            findings: "Psychiatry/psychology consult; reassurance about prognosis; daily family updates",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Day 7: Rash halted progression. Fever resolved. Oral/eye erosions beginning to heal. Discharged from ICU to ward. What is the recovery plan?",
        availableActions: [
          {
            id: "f1",
            text: "Continue IV methylprednisolone for 3 days total; then convert to oral prednisolone",
            isOptimal: true,
            findings: "Day 7: switched to oral prednisolone 1 mg/kg; will taper over 6-8 weeks",
            scoreDelta: 1
          },
          {
            id: "f2",
            text: "Continue skin care protocol (gentle cleaning, non-adhesive dressing, monitoring for scarring)",
            isOptimal: true,
            findings: "Week 2: rash healing; minimal new erosions; dressing changes twice daily; no infection",
            scoreDelta: 1
          },
          {
            id: "f3",
            text: "Transition to oral diet as tolerated (soft foods, nutrient-dense)",
            isOptimal: true,
            findings: "Week 2: NG tube removed; patient tolerating soft diet; oral intake adequate",
            scoreDelta: 1
          },
          {
            id: "f4",
            text: "Ophthalmology follow-up weekly to prevent/treat complications (symblepharon, scarring, dry eye)",
            isOptimal: true,
            findings: "Week 2-4: slit-lamp exams weekly; lubricating drops TID; no symblepharon formation",
            scoreDelta: 2
          },
          {
            id: "f5",
            text: "Plan alternative seizure medication (avoid all aromatic antiepileptics; use lamotrigine, levetiracetam, or valproate)",
            isOptimal: true,
            findings: "Week 3: levetiracetam 1000 mg BID started; seizure control maintained; no allergy",
            scoreDelta: 2
          },
          {
            id: "f6",
            text: "Discharge by week 2-3 with tapering prednisolone, wound care instructions, ophthalmology referral",
            isOptimal: true,
            findings: "Discharged; prednisolone taper over 8 weeks; follow-up with dermatology, ophthalmology, neurology monthly",
            scoreDelta: 1
          }
        ]
      }
    ]
  },
  {
    title: "Leprosy Type 1 Reaction with Neuritis",
    presentingComplaint: "30-year-old male on MDT for 3 months with sudden foot drop, thickened nerves, new skin lesions",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG", "LEPROSY"] as string[],
    patientProfile: {
      age: 30,
      sex: "Male",
      occupation: "Laborer",
      history: "Diagnosed with borderline tuberculoid (BT) leprosy 3 months ago. On WHO-MDT (dapsone, rifampicin, clofazimine). Compliant. Sudden neuritis onset."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "30-year-old on MDT for 3 months develops sudden foot drop and nerve pain. Any prior neuritis episodes?",
        availableActions: [
          {
            id: "h1",
            text: "Ask about foot drop onset and temporal relation to MDT",
            isOptimal: true,
            findings: "Foot drop started 1 week ago while on MDT; progressive; now unable to lift foot",
            scoreDelta: 2
          },
          {
            id: "h2",
            text: "Ask about nerve pain (location, severity, radiation)",
            isOptimal: true,
            findings: "Severe pain along common peroneal nerve (lateral leg); numbness in foot; pain worse at night",
            scoreDelta: 2
          },
          {
            id: "h3",
            text: "Ask about other nerve symptoms (hand weakness, facial nerve involvement, hearing loss)",
            isOptimal: true,
            findings: "Some numbness in fingers (median nerve); facial sensation intact; no hearing loss",
            scoreDelta: 2
          },
          {
            id: "h4",
            text: "Ask about recent immunization or infections (triggering factors)",
            isOptimal: true,
            findings: "No recent vaccination; no acute infection; MDT the likely trigger (Type 1 reaction)",
            scoreDelta: 1
          },
          {
            id: "h5",
            text: "Ask about systemic symptoms (fever, malaise, GI symptoms)",
            isOptimal: true,
            findings: "Low-grade fever (37.8°C); mild malaise; no GI symptoms; otherwise well",
            scoreDelta: 1
          },
          {
            id: "h6",
            text: "Ask about prior leprosy reactions (Type 1 or Type 2)",
            isOptimal: false,
            findings: "No prior reactions; this is first episode",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Examination: thickened common peroneal and posterior tibial nerves. Foot drop with inverted ankle. Skin lesions unchanged. Neurological findings?",
        availableActions: [
          {
            id: "e1",
            text: "Palpate peripheral nerves (common peroneal, posterior tibial, median, ulnar)",
            isOptimal: true,
            findings: "Common peroneal thickened, tender; posterior tibial thickened; median/ulnar mildly thickened",
            scoreDelta: 2
          },
          {
            id: "e2",
            text: "Test foot dorsiflexion and eversion strength",
            isOptimal: true,
            findings: "Foot dorsiflexion 2/5 (paralyzed); eversion 2/5; plantarflexion normal; classic foot drop",
            scoreDelta: 2
          },
          {
            id: "e3",
            text: "Test sensation (light touch, pin-prick) over foot and leg",
            isOptimal: true,
            findings: "Stocking-glove pattern: decreased sensation in foot; dorsum of foot most affected",
            scoreDelta: 2
          },
          {
            id: "e4",
            text: "Test for claw hand deformity (hand weakness, intrinsic muscle atrophy)",
            isOptimal: true,
            findings: "No claw hand yet; finger abduction weak; no obvious atrophy",
            scoreDelta: 1
          },
          {
            id: "e5",
            text: "Assess facial nerve involvement (smile, eye closure, taste on anterior 2/3 tongue)",
            isOptimal: true,
            findings: "Facial movement normal; no weakness; taste normal",
            scoreDelta: 0
          },
          {
            id: "e6",
            text: "Check skin lesions (size, erythema, infiltration, sensation)",
            isOptimal: true,
            findings: "Prior lesions slightly more erythematous; increased infiltration; sensation still decreased",
            scoreDelta: 1
          },
          {
            id: "e7",
            text: "Check for ulceration over pressure areas (foot, heel)",
            isOptimal: false,
            findings: "No ulceration yet; intact skin",
            scoreDelta: 0
          },
          {
            id: "e8",
            text: "Assess for fever and lymphadenopathy",
            isOptimal: false,
            findings: "Low-grade fever; no significant lymphadenopathy",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Clinical diagnosis: Type 1 Lepra Reaction (reversal reaction) with neuritis. Confirm and assess severity?",
        availableActions: [
          {
            id: "i1",
            text: "Assess slit-skin smear (SSS) for bacillary load (should be low in BT; increase suggests type 1)",
            isOptimal: true,
            findings: "SSS from lesions: Bacteriological Index (BI) 2+ (unchanged from baseline); consistent with BT",
            scoreDelta: 1
          },
          {
            id: "i2",
            text: "Order NCS/EMG to document nerve conduction and denervation",
            isOptimal: true,
            findings: "NCS: common peroneal nerve conduction velocity slow (40 m/s, normal >50); denervation on EMG",
            scoreDelta: 2
          },
          {
            id: "i3",
            text: "Order high-resolution ultrasound of affected nerves (if available)",
            isOptimal: false,
            findings: "Ultrasound shows enlarged common peroneal nerve; useful but not essential for diagnosis",
            scoreDelta: 0
          },
          {
            id: "i4",
            text: "Order labs: CBC, ESR/CRP, liver/renal function, glucose",
            isOptimal: true,
            findings: "WBC 7.5; ESR 35 (elevated, consistent with reaction); LFT normal; Cr 0.9",
            scoreDelta: 1
          },
          {
            id: "i5",
            text: "Order skin biopsy for histopathology (granulomatous inflammation without bacilli)",
            isOptimal: false,
            findings: "Biopsy not essential for diagnosis; clinical + SSS/NCS sufficient",
            scoreDelta: 0
          },
          {
            id: "i6",
            text: "Assess Grade of Disability (WHO): Grade 0, 1, or 2 (foot drop = Grade 2 if ulcer present)",
            isOptimal: true,
            findings: "WHO Disability Grade: Grade 2 (foot drop without ulcer); establish baseline for monitoring",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Type 1 Lepra Reaction confirmed (neuritis, foot drop, common peroneal involvement). Plan management?",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Type 1 Lepra Reaction (reversal reaction) manifesting as neuritis",
            isOptimal: true,
            findings: "Confirm: occurs during/after MDT in BT patients; immune complex-mediated; treatable",
            scoreDelta: 3
          },
          {
            id: "d2",
            text: "Identify common peroneal nerve as primary site of involvement",
            isOptimal: true,
            findings: "Confirm: foot drop, inverted ankle, sensory loss in common peroneal distribution",
            scoreDelta: 2
          },
          {
            id: "d3",
            text: "Plan prednisolone 40-60 mg daily to suppress inflammation and prevent permanent nerve damage",
            isOptimal: true,
            findings: "Confirm: high-dose prednisolone essential to prevent irreversible paralysis",
            scoreDelta: 3
          },
          {
            id: "d4",
            text: "Plan continuation of MDT (do NOT stop MDT; steroids manage reaction)",
            isOptimal: true,
            findings: "Confirm: MDT continues (standard recommendation); prednisolone addresses inflammation",
            scoreDelta: 2
          },
          {
            id: "d5",
            text: "Plan stopping MDT and treating with steroids alone",
            isOptimal: false,
            findings: "Incorrect: MDT must continue; stopping increases relapse risk",
            scoreDelta: -2
          }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Starting prednisolone 60 mg daily for Type 1 reaction. MDT continued. What supportive and preventive measures?",
        availableActions: [
          {
            id: "t1",
            text: "Provide nerve care education (protect insensate foot, avoid trauma, good footwear)",
            isOptimal: true,
            findings: "Patient counseled: protective footwear, avoid barefoot walking, daily foot inspection",
            scoreDelta: 2
          },
          {
            id: "t2",
            text: "Provide foot exercises to prevent contracture and maintain strength",
            isOptimal: true,
            findings: "Physiotherapy: passive ROM exercises; foot drop splint provided to prevent inversion contracture",
            scoreDelta: 2
          },
          {
            id: "t3",
            text: "Prescribe PPI (omeprazole) for gastric protection during high-dose steroids",
            isOptimal: true,
            findings: "Omeprazole 20 mg daily started; reduces PUD risk",
            scoreDelta: 1
          },
          {
            id: "t4",
            text: "Start calcium + vitamin D supplementation for bone protection",
            isOptimal: true,
            findings: "Calcium carbonate 1000 mg + vitamin D 400 IU daily started",
            scoreDelta: 1
          },
          {
            id: "t5",
            text: "Plan prednisolone taper protocol (not abrupt cessation)",
            isOptimal: true,
            findings: "Confirm: prednisolone tapered slowly over 12-16 weeks after initial high-dose phase (8 weeks)",
            scoreDelta: 2
          },
          {
            id: "t6",
            text: "Arrange occupational therapy for ADL assessment and adaptive equipment",
            isOptimal: true,
            findings: "OT consult: foot drop splint, shoe modifications, gait training; mobility aids",
            scoreDelta: 1
          },
          {
            id: "t7",
            text: "Monitor for early relapse of neuritis if steroid dose reduced too quickly",
            isOptimal: true,
            findings: "Confirm: slow taper critical; rapid reduction risks neuritis recurrence",
            scoreDelta: 1
          },
          {
            id: "t8",
            text: "Counsel on MDT adherence during steroid treatment (both medications essential)",
            isOptimal: true,
            findings: "Patient counseled: MDT + steroids both critical; non-compliance risks treatment failure",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Week 6 on prednisolone: Nerve pain decreased. Foot strength improved to 3/5. Prednisolone reduced to 40 mg. Long-term plan?",
        availableActions: [
          {
            id: "f1",
            text: "Continue slow prednisolone taper (weekly review, reduce by 5-10 mg every 2-4 weeks)",
            isOptimal: true,
            findings: "Week 12: prednisolone 20 mg; foot dorsiflexion 4/5; pain minimal",
            scoreDelta: 2
          },
          {
            id: "f2",
            text: "Monitor for neuritis recurrence during taper (repeat NCS if symptoms return)",
            isOptimal: true,
            findings: "Monthly review: no relapse; strength gradually improving; sensory slowly recovering",
            scoreDelta: 1
          },
          {
            id: "f3",
            text: "Continue foot care and physiotherapy throughout taper (prevent contracture)",
            isOptimal: true,
            findings: "PT continued; passive ROM maintained; foot drop splint used PRN",
            scoreDelta: 1
          },
          {
            id: "f4",
            text: "Continue MDT to completion (total 12 months for BT leprosy)",
            isOptimal: true,
            findings: "MDT continued; completion planned at month 12 from treatment start",
            scoreDelta: 2
          },
          {
            id: "f5",
            text: "Plan prednisolone discontinuation by week 16 (after 24-week total treatment)",
            isOptimal: true,
            findings: "Week 24: prednisolone tapered to 0; neuritis resolved; WHO Disability Grade improved to 1",
            scoreDelta: 1
          },
          {
            id: "f6",
            text: "Long-term follow-up for 5 years (monitor for relapse, disability, quality of life)",
            isOptimal: true,
            findings: "1-year post-MDT: disability-free; returning to normal work; no relapse",
            scoreDelta: 1
          }
        ]
      }
    ]
  },
  {
    title: "First Episode Psychosis with Paranoid Delusions",
    presentingComplaint: "22-year-old male with 2-week history of auditory hallucinations, paranoid delusions, social withdrawal",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG", "PSYCHIATRY"] as string[],
    patientProfile: {
      age: 22,
      sex: "Male",
      occupation: "Engineering Student",
      history: "Previously well-functioning student. No psychiatric history. Acute onset 2 weeks ago. Parents concerned about gradual social withdrawal, talking to himself."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "22-year-old male with 2-week history of odd behavior and social withdrawal. Parents report talking to himself. Rapid psychiatric history?",
        availableActions: [
          {
            id: "h1",
            text: "Ask about onset of symptoms (gradual vs. acute, triggering events)",
            isOptimal: true,
            findings: "Acute onset 2 weeks ago while studying; no clear trigger; sudden change noted",
            scoreDelta: 2
          },
          {
            id: "h2",
            text: "Ask about auditory hallucinations (voices, content, when first heard)",
            isOptimal: true,
            findings: "Hears voices talking about him, saying he is 'controlled'; voices present all day; commanding tone sometimes",
            scoreDelta: 3
          },
          {
            id: "h3",
            text: "Ask about paranoid ideation (beliefs about persecution, reference, control)",
            isOptimal: true,
            findings: "Believes others are plotting against him; thinks cameras are in his room; believes mind is being 'read'",
            scoreDelta: 3
          },
          {
            id: "h4",
            text: "Ask about substance use (cannabis, stimulants, other drugs)",
            isOptimal: true,
            findings: "Occasional cannabis use in past year; heavy use last 2 weeks (possibly self-medicating)",
            scoreDelta: 2
          },
          {
            id: "h5",
            text: "Ask about sleep, appetite, energy levels",
            isOptimal: true,
            findings: "Sleep disrupted (wakeful at 3 AM); appetite decreased; energy low; fatigue present",
            scoreDelta: 1
          },
          {
            id: "h6",
            text: "Ask about family history of psychiatric illness",
            isOptimal: true,
            findings: "Father has bipolar disorder (treated); uncle has schizophrenia (high genetic risk)",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Mental status exam: patient guarded, suspicious. Maintains poor eye contact. Speech is disorganized. What key findings?",
        availableActions: [
          {
            id: "e1",
            text: "Assess appearance and behavior (grooming, agitation, compliance)",
            isOptimal: true,
            findings: "Unkempt appearance; poor hygiene (not changed clothes for days); restless; suspicious demeanor",
            scoreDelta: 2
          },
          {
            id: "e2",
            text: "Assess speech (rate, volume, coherence, tangentiality)",
            isOptimal: true,
            findings: "Speech fast, pressured; tangential; difficult to follow; multiple topic changes",
            scoreDelta: 2
          },
          {
            id: "e3",
            text: "Assess mood and affect (patient's stated mood vs. observed affect)",
            isOptimal: true,
            findings: "States mood as 'okay' (restricted); observed affect anxious, suspicious; incongruent",
            scoreDelta: 2
          },
          {
            id: "e4",
            text: "Assess thought process and content (delusions, preoccupations, ideas of reference)",
            isOptimal: true,
            findings: "Thought process disorganized; frank paranoid delusions about persecution; ideas of reference",
            scoreDelta: 3
          },
          {
            id: "e5",
            text: "Assess perception (hallucinations, illusions, depersonalization)",
            isOptimal: true,
            findings: "Auditory hallucinations: voices commenting on behavior; no visual hallucinations; no depersonalization",
            scoreDelta: 3
          },
          {
            id: "e6",
            text: "Assess insight and judgment (awareness of illness, judgment regarding consequences)",
            isOptimal: true,
            findings: "Poor insight: denies being ill; blames others for problems; judgment impaired (refuses help)",
            scoreDelta: 2
          },
          {
            id: "e7",
            text: "Assess cognition (orientation, attention, memory, abstract thinking)",
            isOptimal: true,
            findings: "Oriented x3; attention distracted; recent memory intact; abstract thinking intact (delusional, not demented)",
            scoreDelta: 1
          },
          {
            id: "e8",
            text: "Assess suicidality and homicidality (safety assessment)",
            isOptimal: true,
            findings: "Denies suicidal ideation; no command hallucinations to harm; no homicidal ideation",
            scoreDelta: 2
          }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Clinical diagnosis: First episode psychosis, likely schizophreniform or early schizophrenia. Rule out organic causes and substance-induced psychosis.",
        availableActions: [
          {
            id: "i1",
            text: "Order labs to rule out organic causes: CBC, BMP, LFT, TSH, vitamin B12, RPR/HIV, urine toxicology",
            isOptimal: true,
            findings: "All labs normal; TSH normal (no thyroid dysfunction); urine screen positive for THC (cannabis)",
            scoreDelta: 2
          },
          {
            id: "i2",
            text: "Order brain imaging: MRI brain to rule out tumor, lesion, structural abnormality",
            isOptimal: true,
            findings: "MRI brain: normal; no mass, lesion, or demyelination; no structural cause identified",
            scoreDelta: 2
          },
          {
            id: "i3",
            text: "Perform EEG if seizure suspected (staring spells, memory loss)",
            isOptimal: false,
            findings: "EEG not indicated; no seizure-like features",
            scoreDelta: 0
          },
          {
            id: "i4",
            text: "Order baseline metabolic parameters: glucose, lipid panel, prolactin (for antipsychotic side effects)",
            isOptimal: true,
            findings: "Fasting glucose 95 (normal); lipid panel normal; prolactin 12 (normal baseline)",
            scoreDelta: 1
          },
          {
            id: "i5",
            text: "Order ECG and weight/BMI (baseline for antipsychotic monitoring)",
            isOptimal: true,
            findings: "ECG normal; weight 70 kg, BMI 23 (normal); establishes baseline",
            scoreDelta: 1
          },
          {
            id: "i6",
            text: "Perform structured psychotic disorder assessment (PANSS or Brief Psychiatric Rating Scale)",
            isOptimal: true,
            findings: "PANSS score: positive symptoms 24 (moderate), negative symptoms 18 (mild), general 35 (moderate) = 77 (significant)",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Diagnosis: First Episode Psychosis, likely schizophreniform disorder (symptoms <1 month of prominence at first contact). Differential includes substance-induced.",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: First Episode Psychosis (FEP) / Schizophreniform Disorder",
            isOptimal: true,
            findings: "Confirm: 2-week duration of psychotic symptoms (hallucinations + delusions + disorganized speech); first episode",
            scoreDelta: 3
          },
          {
            id: "d2",
            text: "Identify cannabis as possible precipitant (but primary psychotic disorder likely given family history)",
            isOptimal: true,
            findings: "Confirm: THC use coincided with symptom onset; genetic vulnerability + cannabis = syndromal psychosis",
            scoreDelta: 2
          },
          {
            id: "d3",
            text: "Assess suicide risk and hospitalization need",
            isOptimal: true,
            findings: "Confirm: currently safe; but poor insight, delusional, requires close monitoring; outpatient vs. inpatient TBD",
            scoreDelta: 2
          },
          {
            id: "d4",
            text: "Plan antipsychotic treatment per MHCA 2017 (India Mental Healthcare Act)",
            isOptimal: true,
            findings: "Confirm: informed consent/assent with family; consider capacity for consent",
            scoreDelta: 2
          },
          {
            id: "d5",
            text: "Consider cannabis-induced psychosis that will resolve with abstinence",
            isOptimal: false,
            findings: "Unlikely only: family history + symptom severity suggest primary psychotic disorder",
            scoreDelta: -1
          }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Patient admitted for inpatient psychiatric care. Plan antipsychotic initiation and psychosocial support. Which antipsychotic first-line?",
        availableActions: [
          {
            id: "t1",
            text: "Initiate risperidone 2 mg daily (or olanzapine 5 mg daily, or quetiapine 100 mg daily)",
            isOptimal: true,
            findings: "Risperidone chosen: 2 mg daily started; good efficacy for first-episode psychosis; metabolic monitoring planned",
            scoreDelta: 3
          },
          {
            id: "t2",
            text: "Use low starting dose with gradual titration (minimize side effects, improve adherence)",
            isOptimal: true,
            findings: "Titration: 1 mg x 2 days, then 2 mg daily; monitor tolerability; slow approach for FEP",
            scoreDelta: 2
          },
          {
            id: "t3",
            text: "Monitor for acute extrapyramidal symptoms (dystonia, akathisia, parkinsonism)",
            isOptimal: true,
            findings: "Day 3: mild akathisia; no dystonia; tremor absent; manage with benztropine if needed",
            scoreDelta: 2
          },
          {
            id: "t4",
            text: "Provide psychoeducation (illness, medication, side effects, relapse prevention)",
            isOptimal: true,
            findings: "Patient and family educated; discussed psychosis, antipsychotics, importance of adherence",
            scoreDelta: 1
          },
          {
            id: "t5",
            text: "Engage in psychosocial interventions (CBT, family therapy, peer support)",
            isOptimal: true,
            findings: "CBT for psychosis initiated; family sessions scheduled; peer support group offered",
            scoreDelta: 2
          },
          {
            id: "t6",
            text: "Address substance use (cannabis counseling, relapse prevention)",
            isOptimal: true,
            findings: "Substance abuse counselor: discussed triggers for use, risks with cannabis; abstinence plan",
            scoreDelta: 2
          },
          {
            id: "t7",
            text: "Plan ECT (electroconvulsive therapy) as first-line treatment",
            isOptimal: false,
            findings: "Incorrect: antipsychotics first-line; ECT reserved for treatment-resistant or catatonia",
            scoreDelta: -1
          },
          {
            id: "t8",
            text: "Arrange discharge planning (outpatient follow-up, family support, crisis plan)",
            isOptimal: true,
            findings: "Discharge arranged by day 10; psychiatry f/u in 1 week; family informed; crisis hotline provided",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Week 2 on risperidone 2 mg: Hallucinations decreasing, less guarded. Paranoia improving. Plan long-term management?",
        availableActions: [
          {
            id: "f1",
            text: "Assess symptom response (PANSS score reduction, daily function, social engagement)",
            isOptimal: true,
            findings: "PANSS score reduced to 55 (from 77); hallucinations frequency less; social interaction improving",
            scoreDelta: 2
          },
          {
            id: "f2",
            text: "Monitor tolerability and side effects (weight, metabolic parameters, EPS, hyperprolactinemia)",
            isOptimal: true,
            findings: "Week 4: weight stable; glucose normal; prolactin slightly elevated (13.5, monitor); no EPS",
            scoreDelta: 2
          },
          {
            id: "f3",
            text: "Continue risperidone titration to therapeutic dose (4-6 mg daily) if needed",
            isOptimal: true,
            findings: "Week 4: risperidone titrated to 4 mg daily; continued improvement in psychotic symptoms",
            scoreDelta: 1
          },
          {
            id: "f4",
            text: "Continue psychosocial interventions (CBT, family therapy, vocational support)",
            isOptimal: true,
            findings: "CBT ongoing; family sessions monthly; discussion of return to studies; vocational counseling",
            scoreDelta: 2
          },
          {
            id: "f5",
            text: "Plan long-term maintenance antipsychotic therapy (minimum 1-2 years)",
            isOptimal: true,
            findings: "Plan: 1-year minimum antipsychotic continuation; assess for drug discontinuation after full remission",
            scoreDelta: 2
          },
          {
            id: "f6",
            text: "Establish relapse prevention plan and monitor for early warning signs",
            isOptimal: true,
            findings: "Patient/family trained on relapse signs (sleep, stress, substance use); regular follow-up appointments",
            scoreDelta: 1
          }
        ]
      }
    ]
  },
  {
    title: "Severe Major Depressive Disorder with Suicidal Ideation",
    presentingComplaint: "30-year-old female with 3-month anhedonia, weight loss, sleep disturbance, and active suicidal ideation with plan",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "NEET_PG", "PSYCHIATRY_EMERGENCY"] as string[],
    patientProfile: {
      age: 30,
      sex: "Female",
      occupation: "Marketing Executive",
      history: "History of depression (2 prior episodes, treated with SSRIs). Separated from husband 6 months ago. Recent job loss triggered current episode."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "30-year-old woman with depressive symptoms and suicidal ideation. Rapid psychiatric history and safety assessment?",
        availableActions: [
          {
            id: "h1",
            text: "Ask about mood (persistent sadness, hopelessness, emptiness)",
            isOptimal: true,
            findings: "States 'I feel nothing'; hopeless about future; empty inside; 'no point in continuing'",
            scoreDelta: 2
          },
          {
            id: "h2",
            text: "Ask about anhedonia (loss of interest in previously enjoyed activities)",
            isOptimal: true,
            findings: "Lost interest in hobbies, socializing, work; nothing brings pleasure anymore",
            scoreDelta: 2
          },
          {
            id: "h3",
            text: "Ask about sleep disturbance (insomnia, hypersomnia, early morning awakening)",
            isOptimal: true,
            findings: "Waking at 3-4 AM daily; cannot fall back asleep; only 4-5 hours sleep/night",
            scoreDelta: 2
          },
          {
            id: "h4",
            text: "Ask about appetite and weight changes",
            isOptimal: true,
            findings: "Loss of appetite; eating only once daily; weight loss 8 kg in 3 months",
            scoreDelta: 2
          },
          {
            id: "h5",
            text: "Ask about suicidal ideation (thoughts, plan, intent, access to means)",
            isOptimal: true,
            findings: "Active suicidal ideation daily; plan: overdose on sleeping pills; pills obtained and at home; intent 'maybe tonight'",
            scoreDelta: 3
          },
          {
            id: "h6",
            text: "Ask about prior suicide attempts and family history of suicide",
            isOptimal: true,
            findings: "One prior attempt (overdose) 5 years ago; mother had depression (no suicide); no family suicide history",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Mental status exam: psychomotor retardation, poor grooming. Affect depressed, flat. Concentration poor. Safety risk assessment?",
        availableActions: [
          {
            id: "e1",
            text: "Assess appearance and grooming (self-neglect, unkempt)",
            isOptimal: true,
            findings: "Unkempt appearance; poor hygiene; unwashed hair; worn clothes; obvious self-neglect",
            scoreDelta: 2
          },
          {
            id: "e2",
            text: "Assess psychomotor changes (retardation, agitation, slowed speech)",
            isOptimal: true,
            findings: "Marked psychomotor retardation; slow speech; long latency to answer; fatigue evident",
            scoreDelta: 2
          },
          {
            id: "e3",
            text: "Assess mood and affect (patient-reported vs. observed)",
            isOptimal: true,
            findings: "States mood as 'depressed, hopeless'; observed affect flat, blunted; diminished expressiveness",
            scoreDelta: 2
          },
          {
            id: "e4",
            text: "Assess concentration and memory (digit span, recall of 3 items)",
            isOptimal: true,
            findings: "Poor concentration; difficulty with digit span; recent memory intact but slow retrieval",
            scoreDelta: 1
          },
          {
            id: "e5",
            text: "Assess for psychotic features (delusions, hallucinations)",
            isOptimal: true,
            findings: "Denies hallucinations; some guilt ideation ('I am useless'); no frank delusions",
            scoreDelta: 1
          },
          {
            id: "e6",
            text: "Perform detailed suicide risk assessment (Columbia Protocol or similar)",
            isOptimal: true,
            findings: "HIGH RISK: ideation daily, specific plan (pills), means available, intent present, poor social support",
            scoreDelta: 3
          },
          {
            id: "e7",
            text: "Assess protective factors (reasons for living, social support, future plans)",
            isOptimal: true,
            findings: "Limited protective factors: estranged family, few close friends; no children or dependents",
            scoreDelta: 2
          },
          {
            id: "e8",
            text: "Assess insight (awareness of illness, need for help)",
            isOptimal: false,
            findings: "Poor insight: minimizes severity; resistant to admission ('I will be fine at home')",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "High suicide risk with active plan and means. Rule out medical causes and assess severity. Hospitalization indicated?",
        availableActions: [
          {
            id: "i1",
            text: "Order labs to rule out medical causes: CBC, BMP, LFT, TSH, B12, RPR, drug screen",
            isOptimal: true,
            findings: "All labs normal; TSH normal; B12 normal (no hypothyroidism or deficiency); drug screen negative",
            scoreDelta: 1
          },
          {
            id: "i2",
            text: "Order brain imaging if first depressive episode or atypical features",
            isOptimal: false,
            findings: "Not needed: prior 2 depressive episodes; typical features; no neurological symptoms",
            scoreDelta: 0
          },
          {
            id: "i3",
            text: "Assess risk with PHQ-9 (Patient Health Questionnaire) or Hamilton Depression Rating Scale",
            isOptimal: true,
            findings: "PHQ-9 score: 26 (severe depression); suicide risk item scored 3 ('almost every day, intent present')",
            scoreDelta: 2
          },
          {
            id: "i4",
            text: "Perform immediate safety assessment: remove means (secure pills, remove access to methods)",
            isOptimal: true,
            findings: "Confirm: safety plan initiated; pills secured; close monitoring arranged; hospitalization offered",
            scoreDelta: 3
          },
          {
            id: "i5",
            text: "Do NOT discharge to unsupervised setting; inpatient psychiatric admission mandatory",
            isOptimal: true,
            findings: "Confirm: high-risk patient; hospitalization essential; inpatient unit with monitoring",
            scoreDelta: 3
          },
          {
            id: "i6",
            text: "If patient refuses hospitalization, invoke Mental Healthcare Act 2017 (India) for involuntary admission",
            isOptimal: true,
            findings: "Patient initially refuses; assessed for capacity; deemed lack capacity; involuntary admission authorized",
            scoreDelta: 2
          }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Diagnosis: Major Depressive Disorder, severe, with active suicidal ideation and plan. Hospitalization and emergency treatment plan?",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Major Depressive Disorder (MDD), Severe, with active suicidal ideation",
            isOptimal: true,
            findings: "Confirm: 5 DSM-5 criteria met (depressed mood, anhedonia, sleep, appetite, concentration x3 weeks+); HIGH RISK",
            scoreDelta: 3
          },
          {
            id: "d2",
            text: "Identify imminent suicide risk (ideation + plan + means + intent)",
            isOptimal: true,
            findings: "Confirm: all risk factors present; requires immediate inpatient psychiatric care and monitoring",
            scoreDelta: 3
          },
          {
            id: "d3",
            text: "Plan aggressive antidepressant therapy (consider augmentation or ECT for severe depression)",
            isOptimal: true,
            findings: "Confirm: severe depression with suicidality; ECT may be faster option; SSRI insufficient alone",
            scoreDelta: 2
          },
          {
            id: "d4",
            text: "Plan outpatient SSRI therapy alone without hospitalization",
            isOptimal: false,
            findings: "Incorrect: active suicidality requires hospitalization; outpatient unsafe",
            scoreDelta: -3
          },
          {
            id: "d5",
            text: "Consider ECT (electroconvulsive therapy) for rapid response in severe, high-risk depression",
            isOptimal: true,
            findings: "Confirm: ECT option for treatment-resistant or high-risk; may provide faster relief than medications",
            scoreDelta: 2
          }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Patient admitted to psychiatric ICU with continuous monitoring. Plan antidepressant and safety measures. Consider ECT?",
        availableActions: [
          {
            id: "t1",
            text: "Place on suicide watch (1:1 observation, safe room, removal of dangerous items)",
            isOptimal: true,
            findings: "1:1 observer assigned; safe room without cords/sharp objects; 15-min checks; constant supervision",
            scoreDelta: 2
          },
          {
            id: "t2",
            text: "Initiate SSRI (sertraline 50 mg daily) or SNRI (venlafaxine 75 mg daily)",
            isOptimal: true,
            findings: "Sertraline 50 mg daily started; note: SSRIs take 2-4 weeks for effect; ECT considered for faster relief",
            scoreDelta: 1
          },
          {
            id: "t3",
            text: "Add short-term benzodiazepine (lorazepam 1 mg TDS) for anxiety and insomnia",
            isOptimal: true,
            findings: "Lorazepam 1 mg TID started; helps with sleep and anxiety while waiting for SSRI effect",
            scoreDelta: 2
          },
          {
            id: "t4",
            text: "Plan ECT (bilateral ECT 2-3 times weekly) for rapid symptom relief and suicide risk reduction",
            isOptimal: true,
            findings: "ECT planned (after consent/capacity assessment); first session scheduled; anesthesia consultation done",
            scoreDelta: 3
          },
          {
            id: "t5",
            text: "Arrange family meetings for psychoeducation, coping, support",
            isOptimal: true,
            findings: "Family meeting: explained depression severity, treatment plan, expected timeline; encouraged support",
            scoreDelta: 1
          },
          {
            id: "t6",
            text: "Provide individual psychotherapy (CBT, supportive therapy) starting in hospital",
            isOptimal: true,
            findings: "CBT initiated: cognitive distortions identified; behavioral activation in hospital; coping skills taught",
            scoreDelta: 2
          },
          {
            id: "t7",
            text: "Monitor vitals, ECG, and metabolic parameters (especially with ECT)",
            isOptimal: true,
            findings: "Baseline ECG done (normal); vitals stable; glucose/lipids monitored",
            scoreDelta: 1
          },
          {
            id: "t8",
            text: "Plan for safety after discharge (outpatient psychiatry, crisis plan, means restriction)",
            isOptimal: true,
            findings: "Discharge planning: outpatient psychiatry f/u in 1 week; crisis hotline numbers; family support confirmed",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Week 2: After 4 ECT sessions, mood improved. Suicidal ideation decreased significantly. Ready for step-down to inpatient ward, then discharge planning?",
        availableActions: [
          {
            id: "f1",
            text: "Assess ECT response (mood improvement, suicidal ideation reduction, functional gains)",
            isOptimal: true,
            findings: "Post-4 ECT: PHQ-9 score reduced to 10 (from 26); suicidal ideation minimal; mood better; sleeping",
            scoreDelta: 2
          },
          {
            id: "f2",
            text: "Plan ECT course completion (typically 8-12 sessions total) if continued improvement",
            isOptimal: true,
            findings: "Plan: additional 4 ECT sessions to consolidate response; total 8-10 sessions planned",
            scoreDelta: 1
          },
          {
            id: "f3",
            text: "Continue SSRI (sertraline 50-100 mg daily) and taper benzodiazepine",
            isOptimal: true,
            findings: "Sertraline continued/increased to 100 mg; lorazepam tapered (0.5 mg TID); improved sleep naturally",
            scoreDelta: 2
          },
          {
            id: "f4",
            text: "Step-down to general inpatient ward (from psychiatric ICU) with high nursing ratios",
            isOptimal: true,
            findings: "Week 3: moved to inpatient psychiatric ward; continued observation; preparing for home",
            scoreDelta: 1
          },
          {
            id: "f5",
            text: "Establish relapse prevention plan and discharge medication regimen",
            isOptimal: true,
            findings: "Plan: continue sertraline (long-term); identify triggers (job loss, isolation); increase social support",
            scoreDelta: 2
          },
          {
            id: "f6",
            text: "Arrange outpatient follow-up (psychiatry in 1 week, therapist for CBT weekly)",
            isOptimal: true,
            findings: "Discharged week 4; psychiatry appointment in 1 week; CBT with therapist twice/week; crisis plan in place",
            scoreDelta: 1
          }
        ]
      }
    ]
  },
  {
    title: "Alcohol Withdrawal with Delirium Tremens",
    presentingComplaint: "45-year-old male with tremors, visual hallucinations, autonomic instability 48 hours after last alcohol drink",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "NEET_PG", "CRITICAL_CARE", "ADDICTION"] as string[],
    patientProfile: {
      age: 45,
      sex: "Male",
      occupation: "Laborer (currently unemployed)",
      history: "30-year history of alcohol dependence. Daily heavy drinking (1-2 liters liquor/day). Stop-drop pattern (binges with abstinence). Last drink 2 days ago."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "45-year-old male brought by family with tremors and confusion. Family reports 48 hours since last alcohol. Withdrawal history?",
        availableActions: [
          {
            id: "h1",
            text: "Ask about alcohol use (quantity, frequency, duration of dependence, pattern)",
            isOptimal: true,
            findings: "Heavy drinker x30 years; 1-2 L daily; stops occasionally (48 hrs now); multiple prior withdrawals",
            scoreDelta: 2
          },
          {
            id: "h2",
            text: "Ask about withdrawal symptoms (tremors, sweating, hallucinations, seizures previously)",
            isOptimal: true,
            findings: "Tremors started 24 hrs ago; sees insects crawling on arms (visual hallucinations); never had seizures",
            scoreDelta: 2
          },
          {
            id: "h3",
            text: "Ask about last alcohol consumption (when did he stop drinking?)",
            isOptimal: true,
            findings: "Last drink 48 hours ago; stopped abruptly; had no alcohol since",
            scoreDelta: 2
          },
          {
            id: "h4",
            text: "Ask about prior detoxifications or withdrawal complications",
            isOptimal: true,
            findings: "Tried to quit 5 times; never admitted for detox; struggled with tremors and agitation each time",
            scoreDelta: 1
          },
          {
            id: "h5",
            text: "Ask about associated medical problems (liver disease, nutritional deficiency, other drugs)",
            isOptimal: true,
            findings: "Probable liver disease (yellow tinge to skin); no known hepatitis; thiamine/B1 likely deficient",
            scoreDelta: 2
          },
          {
            id: "h6",
            text: "Ask about tobacco and other substance use",
            isOptimal: false,
            findings: "Smokes 20 cigarettes/day; no other drugs; occasional cannabis with alcohol",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Patient tremulous, diaphoretic, agitated. Temperature 38.5°C. HR 115. BP 150/95. Pupils dilated. What are key exam findings?",
        availableActions: [
          {
            id: "e1",
            text: "Assess mental status (orientation, cognition, hallucinations, confusion)",
            isOptimal: true,
            findings: "Disoriented to time/place; seeing insects, snakes (tactile + visual hallucinations); confused; combative",
            scoreDelta: 3
          },
          {
            id: "e2",
            text: "Assess vital signs and autonomic instability (HR, BP, temperature, diaphoresis)",
            isOptimal: true,
            findings: "HR 115 (tachycardia), BP 150/95 (hypertension), Temp 38.5°C (fever), RR 24 (tachypnea); diaphoretic",
            scoreDelta: 2
          },
          {
            id: "e3",
            text: "Assess tremor (resting, postural, intention tremor)",
            isOptimal: true,
            findings: "Fine tremor at rest; worse with outstretched hands; intention tremor present; markedly abnormal",
            scoreDelta: 2
          },
          {
            id: "e4",
            text: "Check reflexes (brisk/hyperactive, Babinski)",
            isOptimal: true,
            findings: "Brisk reflexes; ankle clonus present; Babinski normal; hyperreflexia from withdrawal",
            scoreDelta: 1
          },
          {
            id: "e5",
            text: "Assess liver (stigmata: jaundice, spider angiomata, hepatomegaly, ascites)",
            isOptimal: true,
            findings: "Mild jaundice; no spider angiomata; hepatomegaly (palpable edge 2 cm below costal margin); no ascites",
            scoreDelta: 2
          },
          {
            id: "e6",
            text: "Assess for signs of chronic alcohol use (palmar erythema, gynecomastia, testicular atrophy)",
            isOptimal: true,
            findings: "Palmar erythema present; mild gynecomastia; testicular volume reduced; classic signs of chronic alcoholism",
            scoreDelta: 1
          },
          {
            id: "e7",
            text: "Check for signs of Wernicke's encephalopathy (ophthalmoplegia, ataxia, confusion)",
            isOptimal: true,
            findings: "No oculomotor palsy; unsteady gait (mild ataxia); confused; thiamine deficiency suspected",
            scoreDelta: 2
          },
          {
            id: "e8",
            text: "Assess for seizure activity (observe for convulsions, postictal state)",
            isOptimal: true,
            findings: "No seizure activity observed; high-risk period (24-72 hrs post-last drink); seizure risk elevated",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Delirium tremens (DTs) suspected with hallucinations and autonomic instability. Rule out other causes and assess severity/withdrawal stage?",
        availableActions: [
          {
            id: "i1",
            text: "Order stat labs: CBC, BMP, LFT, PT/INR, blood glucose, ethanol level, toxicology",
            isOptimal: true,
            findings: "Hb 11.2 (mild anemia); WBC 11.5 (elevated); K+ 3.2 (low, hypokalemia); Cr 1.2 (mild elevation); LFT abnormal",
            scoreDelta: 2
          },
          {
            id: "i2",
            text: "Order additional tests: thiamine level, magnesium, phosphate, uric acid",
            isOptimal: true,
            findings: "Thiamine <2 (very low, normal >3.5); Mg 1.5 (low); PO4 2.5 (low); uric acid 7.5 (elevated)",
            scoreDelta: 1
          },
          {
            id: "i3",
            text: "Perform liver function assessment (AST/ALT ratio, bilirubin, albumin, PT/INR)",
            isOptimal: true,
            findings: "AST 120, ALT 45 (AST>ALT = alcoholic pattern); Bili 2.1 (elevated); albumin 3.2 (low); PT prolonged (1.5)",
            scoreDelta: 1
          },
          {
            id: "i4",
            text: "Calculate CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol scale)",
            isOptimal: true,
            findings: "CIWA-Ar score 35 (very severe withdrawal); score >25 indicates severe withdrawal requiring ICU",
            scoreDelta: 3
          },
          {
            id: "i5",
            text: "Order brain imaging (CT or MRI) to rule out intracranial pathology",
            isOptimal: false,
            findings: "Clinical diagnosis clear; imaging not necessary unless focal neurological signs",
            scoreDelta: 0
          },
          {
            id: "i6",
            text: "Do blood cultures if fever present (rule out infection)",
            isOptimal: true,
            findings: "Fever noted; blood cultures obtained (R/O sepsis); aspiration pneumonia risk",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Diagnosis: Alcohol Withdrawal Syndrome, Delirium Tremens (DTs) stage. CIWA-Ar 35 (severe). Plan benzodiazepine-based management?",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Alcohol Withdrawal Syndrome, complicated by Delirium Tremens (hallucinosis, autonomic hyperactivity)",
            isOptimal: true,
            findings: "Confirm: visual hallucinations, autonomic instability (HR, BP, temp), tremor, altered mental status",
            scoreDelta: 3
          },
          {
            id: "d2",
            text: "Identify DTs as highest-risk withdrawal stage (mortality 5-15% untreated)",
            isOptimal: true,
            findings: "Confirm: hallucinations + autonomic instability = medical emergency; requires ICU-level care",
            scoreDelta: 3
          },
          {
            id: "d3",
            text: "Assess seizure risk (previous seizures, rapid drop in BAC, electrolyte abnormalities)",
            isOptimal: true,
            findings: "Confirm: peak seizure risk 12-48 hrs post-last drink; no prior seizures; hypokalemia increases risk",
            scoreDelta: 2
          },
          {
            id: "d4",
            text: "Plan benzodiazepine therapy (lorazepam or diazepam IV for acute withdrawal)",
            isOptimal: true,
            findings: "Confirm: benzodiazepines first-line for DTs and seizure prevention",
            scoreDelta: 3
          },
          {
            id: "d5",
            text: "Plan antiepileptic therapy alone (phenytoin) without benzodiazepines",
            isOptimal: false,
            findings: "Incorrect: anticonvulsants do not manage withdrawal; benzodiazepines essential",
            scoreDelta: -2
          }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Admit to ICU. Start IV lorazepam and supportive care. What initial management measures?",
        availableActions: [
          {
            id: "t1",
            text: "Start IV lorazepam (using symptom-triggered dosing or CIWA-Ar protocol)",
            isOptimal: true,
            findings: "Lorazepam IV: 4 mg stat, then 1-2 mg every 5-10 min until agitation/tremor controlled; total initial 8-10 mg",
            scoreDelta: 3
          },
          {
            id: "t2",
            text: "Establish IV access, place on continuous cardiac monitoring, pulse oximetry, BP monitoring",
            isOptimal: true,
            findings: "Central line placed (medication access); continuous monitoring; frequent vital signs (every 15 min)",
            scoreDelta: 2
          },
          {
            id: "t3",
            text: "Correct electrolyte abnormalities (K+, Mg, PO4 replacement)",
            isOptimal: true,
            findings: "IV potassium chloride (40 mEq diluted) started; IV magnesium sulfate; IV phosphate; recheck in 2 hrs",
            scoreDelta: 2
          },
          {
            id: "t4",
            text: "Provide IV thiamine (100 mg daily) to prevent Wernicke's encephalopathy",
            isOptimal: true,
            findings: "IV thiamine 100 mg daily x 3-5 days started; critically important given depletion",
            scoreDelta: 3
          },
          {
            id: "t5",
            text: "Provide IV fluids (normal saline, glucose-containing) for hydration and electrolyte balance",
            isOptimal: true,
            findings: "Isotonic saline with 5% dextrose; 1 L bolus then maintenance; monitor UOP and electrolytes",
            scoreDelta: 1
          },
          {
            id: "t6",
            text: "Provide supportive care (soft restraints if necessary for safety, reassurance, orientation)",
            isOptimal: true,
            findings: "Calm, safe environment; orientation to person/place/time; family presence; minimal stimulation",
            scoreDelta: 1
          },
          {
            id: "t7",
            text: "Monitor for seizures; have seizure precautions and equipment ready",
            isOptimal: true,
            findings: "Seizure precautions in place (padded bed, airway equipment); lorazepam also provides seizure prophylaxis",
            scoreDelta: 2
          },
          {
            id: "t8",
            text: "Plan taper of lorazepam (not abrupt cessation) once stabilized",
            isOptimal: true,
            findings: "After initial control: CIWA-Ar-guided dosing; taper lorazepam every 24 hrs based on symptoms",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Day 3: Agitation controlled, no seizures, tremor resolved. Hallucinations stopped. Mentally clear. Ready for step-down and rehabilitation planning?",
        availableActions: [
          {
            id: "f1",
            text: "Assess withdrawal resolution (CIWA-Ar <10, stable vitals, clear mental status)",
            isOptimal: true,
            findings: "CIWA-Ar score 5 (resolved); HR 82, BP 128/80, Temp 37°C (normalized); alert and oriented",
            scoreDelta: 2
          },
          {
            id: "f2",
            text: "Continue lorazepam taper (reduce by 20-25% every 24 hrs until discontinuation)",
            isOptimal: true,
            findings: "Day 3-4: lorazepam tapered; last dose given; no rebound withdrawal",
            scoreDelta: 1
          },
          {
            id: "f3",
            text: "Continue IV thiamine, multivitamins, and electrolyte replacement until stabilized",
            isOptimal: true,
            findings: "Thiamine continued x 5 days total; multivitamin daily; K+/Mg+ normalized on labs",
            scoreDelta: 1
          },
          {
            id: "f4",
            text: "Assess for alcohol-related liver disease (ultrasound, possible biopsy if indicated)",
            isOptimal: true,
            findings: "Liver ultrasound: shows cirrhosis (nodular liver, splenomegaly); biopsy not needed",
            scoreDelta: 1
          },
          {
            id: "f5",
            text: "Plan addiction medicine intervention and alcohol rehabilitation program",
            isOptimal: true,
            findings: "Addiction medicine consult; referred to inpatient rehab; Alcoholics Anonymous meeting offered",
            scoreDelta: 2
          },
          {
            id: "f6",
            text: "Discharge with follow-up plan (hepatology for liver disease, psychiatry/addiction medicine, outpatient rehab)",
            isOptimal: true,
            findings: "Discharged Day 5; hepatology f/u in 1 week; addiction medicine monthly; rehab program started",
            scoreDelta: 1
          }
        ]
      }
    ]
  },
  {
    title: "Acute Mania with Psychotic Features",
    presentingComplaint: "28-year-old male with grandiose delusions, decreased need for sleep, pressured speech, excessive spending",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG", "PSYCHIATRY"] as string[],
    patientProfile: {
      age: 28,
      sex: "Male",
      occupation: "Entrepreneur",
      history: "History of bipolar I disorder (diagnosed 5 years ago after first manic episode). Last manic episode 2 years ago (hospitalized). Not on regular mood stabilizer."
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "28-year-old with sudden grandiosity, racing thoughts, excessive spending. Family reports behavior change over past week. Manic episode?",
        availableActions: [
          {
            id: "h1",
            text: "Ask about mood elevation (elated, expansive, irritable, feels 'on top of the world')",
            isOptimal: true,
            findings: "'I feel fantastic, better than ever'; extremely confident; feels special, destined for greatness",
            scoreDelta: 2
          },
          {
            id: "h2",
            text: "Ask about decreased need for sleep (sleeping only 2-3 hours, not tired)",
            isOptimal: true,
            findings: "Sleeping only 2 hrs/night for past week; not tired; feels energized; running on 'natural high'",
            scoreDelta: 3
          },
          {
            id: "h3",
            text: "Ask about flight of ideas and pressured speech",
            isOptimal: true,
            findings: "Thoughts racing; jumps between topics; speaks rapidly; difficult to interrupt; fast, loud speech",
            scoreDelta: 2
          },
          {
            id: "h4",
            text: "Ask about grandiose beliefs (special abilities, business plans, excessive confidence)",
            isOptimal: true,
            findings: "Believes he can become billionaire in months; has started 3 'business ventures' this week; no reality check",
            scoreDelta: 3
          },
          {
            id: "h5",
            text: "Ask about excessive spending, reckless behavior, or substance use",
            isOptimal: true,
            findings: "Spent 5 lakh rupees on car he doesn't need; bought expensive gifts for strangers; no substance use",
            scoreDelta: 2
          },
          {
            id: "h6",
            text: "Ask about medication adherence (is he on mood stabilizer?)",
            isOptimal: true,
            findings: "Was prescribed lithium 6 months ago; stopped 3 months ago ('felt normal, didn't need it')",
            scoreDelta: 2
          }
        ]
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "Mental status exam: expansive mood, rapid speech, agitation. Thoughts grandiose. Affect elevated, labile. Risk assessment?",
        availableActions: [
          {
            id: "e1",
            text: "Assess appearance and behavior (dress, grooming, agitation, distractibility)",
            isOptimal: true,
            findings: "Flashy clothing; cologne overapplied; agitated; jumps from topic to topic; sexually provocative humor",
            scoreDelta: 2
          },
          {
            id: "e2",
            text: "Assess speech (rate, volume, rhyming, alliteration, flight of ideas)",
            isOptimal: true,
            findings: "Rapid pressured speech; loud; uses rhymes ('can't hold it with a plow'); tangential; difficult to follow",
            scoreDelta: 2
          },
          {
            id: "e3",
            text: "Assess mood and affect (reported vs. observed, lability, appropriateness)",
            isOptimal: true,
            findings: "States mood as 'amazing, highest ever'; observed affect markedly elevated; rapidly shifts from grandiose to irritable",
            scoreDelta: 2
          },
          {
            id: "e4",
            text: "Assess thought content (grandiose delusions, ideas of reference, paranoia)",
            isOptimal: true,
            findings: "Grandiose delusions: 'I am destined to be world's greatest entrepreneur'; no paranoia or persecutory delusions",
            scoreDelta: 3
          },
          {
            id: "e5",
            text: "Assess perception (hallucinations, delusions)",
            isOptimal: true,
            findings: "Denies hallucinations; grandiose delusions present; no auditory/visual hallucinations",
            scoreDelta: 2
          },
          {
            id: "e6",
            text: "Assess judgment and insight (awareness of illness, appropriateness of decisions)",
            isOptimal: true,
            findings: "Very poor judgment: spending spree, unrealistic plans; denies illness: 'I'm fine, better than ever'",
            scoreDelta: 2
          },
          {
            id: "e7",
            text: "Assess impulse control and aggression (risk of violence, irritability)",
            isOptimal: true,
            findings: "Impulsive: making rapid business decisions; irritable when questioned; no violence; agitation present",
            scoreDelta: 1
          },
          {
            id: "e8",
            text: "Assess for suicidality (typically low in mania, but check for co-morbid depression)",
            isOptimal: false,
            findings: "No suicidal ideation (typical for mania); no depressive symptoms",
            scoreDelta: 0
          }
        ]
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Clinical diagnosis: Acute Mania with Psychotic Features. Rule out secondary causes (medical, substance-induced)?",
        availableActions: [
          {
            id: "i1",
            text: "Order labs to rule out medical causes: CBC, BMP, LFT, TSH, calcium, glucose, cortisol",
            isOptimal: true,
            findings: "All labs normal; TSH normal (no thyrotoxicosis); glucose normal; no medical cause identified",
            scoreDelta: 2
          },
          {
            id: "i2",
            text: "Order drug screen (urine) and ethanol level to rule out substance-induced mania",
            isOptimal: true,
            findings: "Drug screen negative; no alcohol; no stimulant use detected",
            scoreDelta: 1
          },
          {
            id: "i3",
            text: "Order brain MRI if first manic episode (rule out secondary causes like tumor, demyelination)",
            isOptimal: false,
            findings: "Not first episode; prior documented bipolar I; MRI not routine for recurrent mania",
            scoreDelta: 0
          },
          {
            id: "i4",
            text: "Check baseline lithium level (if prior on lithium) and renal/thyroid function for re-initiation",
            isOptimal: true,
            findings: "Lithium level <0.2 (off medication); Cr 0.9, TSH 1.8 (both normal); safe to restart lithium",
            scoreDelta: 2
          },
          {
            id: "i5",
            text: "Perform Young Mania Rating Scale (YMRS) to assess severity",
            isOptimal: true,
            findings: "YMRS score 32 (moderate-to-severe mania); elevated speech, grandiosity, decreased sleep prominent",
            scoreDelta: 1
          },
          {
            id: "i6",
            text: "Order ECG and baseline weight/BMI (for antipsychotic monitoring if needed)",
            isOptimal: true,
            findings: "ECG normal; weight 75 kg, BMI 24 (normal); establishes baseline",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Diagnosis: Bipolar I Disorder, current episode Acute Mania with Psychotic Features (grandiose delusions). Plan mood stabilizer + antipsychotic?",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Bipolar I Disorder, current episode Acute Mania with Psychotic Features",
            isOptimal: true,
            findings: "Confirm: elevated mood >1 week, decreased sleep need, pressured speech, grandiose delusions = full manic episode with psychosis",
            scoreDelta: 3
          },
          {
            id: "d2",
            text: "Identify recurrence due to medication non-compliance (stopped lithium 3 months ago)",
            isOptimal: true,
            findings: "Confirm: likely relapse due to stopping mood stabilizer; medication adherence critical",
            scoreDelta: 2
          },
          {
            id: "d3",
            text: "Plan hospitalization for safety and medication initiation",
            isOptimal: true,
            findings: "Confirm: excessive spending, impulsivity, psychosis warrant inpatient treatment",
            scoreDelta: 2
          },
          {
            id: "d4",
            text: "Plan mood stabilizer (lithium 900-1200 mg daily) + antipsychotic (risperidone 3-4 mg daily)",
            isOptimal: true,
            findings: "Confirm: first-line for acute mania with psychosis",
            scoreDelta: 3
          },
          {
            id: "d5",
            text: "Plan antipsychotic monotherapy without mood stabilizer",
            isOptimal: false,
            findings: "Incorrect: mood stabilizer essential for bipolar maintenance and acute mania treatment",
            scoreDelta: -1
          }
        ]
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "Admit to psychiatric ward. Start lithium 900 mg daily and risperidone 3 mg daily. Monitor serum lithium and side effects.",
        availableActions: [
          {
            id: "t1",
            text: "Start lithium 300 mg TID (900 mg daily) with adequate hydration and salt intake",
            isOptimal: true,
            findings: "Lithium 300 mg TID started; patient instructed on hydration, salt intake; lithium level to check in 5 days",
            scoreDelta: 2
          },
          {
            id: "t2",
            text: "Start risperidone 2 mg daily, titrate to 3-4 mg daily for acute symptom control",
            isOptimal: true,
            findings: "Risperidone: Day 1: 2 mg, Day 2: 3 mg; rapid control of grandiosity and psychotic symptoms",
            scoreDelta: 2
          },
          {
            id: "t3",
            text: "Provide education on lithium (therapeutic window 0.6-1.2 mEq/L, toxicity risk, drug interactions)",
            isOptimal: true,
            findings: "Patient and family educated: monitoring labs, avoiding NSAIDs, staying hydrated",
            scoreDelta: 1
          },
          {
            id: "t4",
            text: "Add short-term benzodiazepine (lorazepam 1 mg TID) for agitation and insomnia",
            isOptimal: true,
            findings: "Lorazepam 1 mg TID started; helps with sleep; agitation decreases; to be tapered after stabilization",
            scoreDelta: 1
          },
          {
            id: "t5",
            text: "Monitor serum lithium levels (target 0.8-1.0 mEq/L for acute mania, 0.6-0.8 for maintenance)",
            isOptimal: true,
            findings: "Day 5: lithium level 0.8 mEq/L (therapeutic); baseline renal/thyroid function normal",
            scoreDelta: 2
          },
          {
            id: "t6",
            text: "Provide supportive therapy and psychoeducation on bipolar disorder and relapse prevention",
            isOptimal: true,
            findings: "Psychoeducation: explained bipolar I, medication importance, triggers; family session held",
            scoreDelta: 1
          },
          {
            id: "t7",
            text: "Monitor for lithium side effects (tremor, polyuria, cognitive effects)",
            isOptimal: true,
            findings: "Day 3: fine tremor noted (expected at this dose); will reassess; no polyuria yet",
            scoreDelta: 1
          },
          {
            id: "t8",
            text: "Plan for financial protection (discuss spending freeze, involve family in financial decisions)",
            isOptimal: true,
            findings: "Family meeting: discussed financial decision-making; wife involved in spending; accounts monitored",
            scoreDelta: 1
          }
        ]
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "Week 2: Grandiosity resolved, sleep normalized. Lithium level therapeutic (0.8). Risperidone 3 mg daily. Plan discharge and long-term management?",
        availableActions: [
          {
            id: "f1",
            text: "Assess manic symptom resolution (YMRS score <12, normalized sleep, rational thought)",
            isOptimal: true,
            findings: "YMRS score 8 (remission); sleeping 7-8 hrs; grandiose delusions resolved; realistic thinking restored",
            scoreDelta: 2
          },
          {
            id: "f2",
            text: "Taper benzodiazepine (lorazepam) as manic symptoms resolve",
            isOptimal: true,
            findings: "Week 2: lorazepam tapered to 0.5 mg at bedtime; soon to discontinue",
            scoreDelta: 1
          },
          {
            id: "f3",
            text: "Maintain lithium 900 mg daily and monitor levels quarterly (0.6-0.8 mEq/L maintenance)",
            isOptimal: true,
            findings: "Lithium continued; maintenance level 0.7 mEq/L; labs every 3 months; patient instructed on compliance",
            scoreDelta: 2
          },
          {
            id: "f4",
            text: "Continue risperidone 2-3 mg daily for 3-6 months minimum post-acute episode",
            isOptimal: true,
            findings: "Risperidone continued at 2 mg daily (reduced from 3 mg); weight stable; metabolic labs normal",
            scoreDelta: 1
          },
          {
            id: "f5",
            text: "Arrange outpatient psychiatry follow-up (weekly initially, then monthly)",
            isOptimal: true,
            findings: "Discharged with psychiatry f/u in 1 week; then monthly; crisis number provided",
            scoreDelta: 1
          },
          {
            id: "f6",
            text: "Provide relapse prevention education and long-term adherence counseling",
            isOptimal: true,
            findings: "Discussed: medication compliance critical; stress management; sleep hygiene; family support essential",
            scoreDelta: 1
          }
        ]
      }
    ]
  }
];


