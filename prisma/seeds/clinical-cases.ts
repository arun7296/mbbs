// Clinical simulation cases for Anatomy correlations
export const clinicalCases = [
  {
    title: "Shoulder Dislocation - Anterior",
    presentingComplaint: "25-year-old male with severe right shoulder pain after a fall during cricket",
    caseType: "Emergency",
    difficulty: "EASY" as const,
    estimatedMinutes: 15,
    examTags: ["NEXT_STEP1"] as string[],
    patientProfile: { age: 25, sex: "Male", occupation: "College student", history: "No significant past history. Active cricketer." },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt: "A 25-year-old male is brought to the emergency department with severe right shoulder pain after falling on an outstretched hand while fielding during a cricket match. He is holding his right arm with the left hand and is in obvious distress.",
        availableActions: [
          { id: "ask_mechanism", text: "How did the injury happen?", isOptimal: true, findings: "He fell on his outstretched right hand while diving to catch a ball. Felt a 'pop' in the shoulder immediately.", scoreDelta: 2 },
          { id: "ask_pain", text: "Where exactly is the pain?", isOptimal: true, findings: "Severe pain in the right shoulder, unable to move the arm at all. Pain radiates down the arm.", scoreDelta: 2 },
          { id: "ask_numbness", text: "Any numbness or tingling?", isOptimal: true, findings: "Some numbness over the lateral aspect of the shoulder (regimental badge area).", scoreDelta: 3 },
          { id: "ask_previous", text: "Has this happened before?", isOptimal: true, findings: "No previous dislocations. First episode.", scoreDelta: 1 },
          { id: "ask_hand", text: "Can you move your fingers?", isOptimal: true, findings: "Yes, can move all fingers and make a fist. Grip strength seems normal.", scoreDelta: 2 },
          { id: "ask_diet", text: "What did you eat today?", isOptimal: false, findings: "Had lunch — rice and dal. Not relevant to the injury.", scoreDelta: 0 },
          { id: "ask_meds", text: "Are you taking any medications?", isOptimal: false, findings: "No regular medications. No drug allergies.", scoreDelta: 1 },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt: "The patient is sitting upright, supporting his right arm. The shoulder appears asymmetric compared to the left side.",
        availableActions: [
          { id: "inspect_shoulder", text: "Inspect the shoulder", isOptimal: true, findings: "Loss of rounded contour of shoulder. Acromion is prominent. Fullness in the infraclavicular region. The arm is held in slight abduction and external rotation.", scoreDelta: 3 },
          { id: "palpate_shoulder", text: "Palpate the shoulder", isOptimal: true, findings: "Humeral head palpable anteriorly in the infraclavicular fossa. Empty glenoid fossa posteriorly. Severe tenderness over anterior shoulder.", scoreDelta: 3 },
          { id: "test_movement", text: "Test shoulder movements", isOptimal: true, findings: "All active movements severely restricted due to pain. Loss of abduction and internal rotation. Spring-back resistance on attempted adduction.", scoreDelta: 2 },
          { id: "test_axillary", text: "Test sensation over regimental badge area", isOptimal: true, findings: "Decreased sensation over the lateral deltoid region (regimental badge area), suggesting axillary nerve involvement.", scoreDelta: 3 },
          { id: "check_pulses", text: "Check distal pulses", isOptimal: true, findings: "Radial pulse present and equal to the other side. Capillary refill < 2 seconds.", scoreDelta: 2 },
          { id: "check_chest", text: "Auscultate the chest", isOptimal: false, findings: "Clear bilateral air entry. Heart sounds normal. Not directly relevant.", scoreDelta: 0 },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt: "Based on the clinical findings, you suspect anterior shoulder dislocation. What investigations would you order?",
        availableActions: [
          { id: "xray_shoulder", text: "X-ray shoulder AP and lateral", isOptimal: true, findings: "AP view: Humeral head displaced anteriorly and inferiorly from the glenoid fossa. No associated fracture of greater tuberosity seen. Lateral view confirms anterior dislocation.", scoreDelta: 3 },
          { id: "ct_shoulder", text: "CT scan shoulder", isOptimal: false, findings: "Shows anterior dislocation clearly. May be useful if fracture-dislocation suspected, but not first-line investigation.", scoreDelta: 1 },
          { id: "mri_shoulder", text: "MRI shoulder", isOptimal: false, findings: "Not indicated in acute setting. May be done later to assess Bankart/Hill-Sachs lesions.", scoreDelta: 0 },
          { id: "cbc", text: "Complete blood count", isOptimal: false, findings: "Hb: 14.2 g/dL, WBC: 8,500, Platelets: 2.5 lakhs. Normal values.", scoreDelta: 0 },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt: "Based on history, examination, and investigations, what is your diagnosis?",
        availableActions: [
          { id: "dx_anterior", text: "Anterior dislocation of shoulder", isOptimal: true, findings: "Correct! The clinical triad of loss of shoulder contour, humeral head palpable anteriorly, and arm held in abduction/external rotation, confirmed by X-ray.", scoreDelta: 5 },
          { id: "dx_posterior", text: "Posterior dislocation of shoulder", isOptimal: false, findings: "Incorrect. Posterior dislocation presents with arm in adduction and internal rotation, and is commonly seen after seizures or electric shock.", scoreDelta: -2 },
          { id: "dx_fracture", text: "Fracture of proximal humerus", isOptimal: false, findings: "Incorrect. X-ray shows dislocation without fracture. However, always look for associated Greater Tuberosity fracture.", scoreDelta: -1 },
          { id: "dx_rotator", text: "Rotator cuff tear", isOptimal: false, findings: "Unlikely as primary diagnosis. Could be associated but the X-ray clearly shows dislocation.", scoreDelta: -1 },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt: "How would you manage this patient?",
        availableActions: [
          { id: "analgesia", text: "Give IV analgesics and sedation", isOptimal: true, findings: "IV Tramadol 50mg and Midazolam 2mg given. Patient comfortable for reduction.", scoreDelta: 2 },
          { id: "reduce_kocher", text: "Closed reduction - Kocher's method", isOptimal: true, findings: "External rotation → adduction → internal rotation → flexion. Successful reduction with audible clunk. Patient feels immediate relief.", scoreDelta: 3 },
          { id: "reduce_hippocratic", text: "Closed reduction - Hippocratic method", isOptimal: true, findings: "Alternative technique: traction with counter-traction using foot in axilla. Also effective.", scoreDelta: 2 },
          { id: "post_xray", text: "Post-reduction X-ray", isOptimal: true, findings: "X-ray confirms humeral head back in glenoid fossa. No fracture. Joint congruent.", scoreDelta: 2 },
          { id: "immobilize", text: "Arm sling and body bandage for 3 weeks", isOptimal: true, findings: "Arm immobilized in internal rotation using arm pouch sling. Advised to keep for 3 weeks.", scoreDelta: 2 },
          { id: "surgery", text: "Immediate surgical repair", isOptimal: false, findings: "Not indicated for first-time uncomplicated anterior dislocation. Surgery considered for recurrent dislocations.", scoreDelta: -1 },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt: "What follow-up and rehabilitation plan would you recommend?",
        availableActions: [
          { id: "followup_1w", text: "Review in 1 week for check X-ray", isOptimal: true, findings: "Follow-up X-ray at 1 week confirms maintained reduction.", scoreDelta: 1 },
          { id: "physio", text: "Start physiotherapy after 3 weeks", isOptimal: true, findings: "Pendulum exercises initially, then progressive strengthening of rotator cuff muscles to prevent recurrence.", scoreDelta: 2 },
          { id: "counsel", text: "Counsel about recurrence risk", isOptimal: true, findings: "Explained that young males have 70-90% recurrence rate. Advised to avoid extreme abduction and external rotation during sports. Discussed Bankart repair if recurrence occurs.", scoreDelta: 2 },
          { id: "return_sport", text: "Advise return to sports after 6 weeks", isOptimal: true, findings: "Gradual return to non-contact activities at 6 weeks, full contact sports at 3 months with adequate rehabilitation.", scoreDelta: 1 },
        ],
      },
    ],
  },
];
