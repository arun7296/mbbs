export const orthopedicsMcqs2 = [
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old male presents with a closed supracondylar fracture of the humerus sustained 2 days ago. He has absent radial pulse and weak hand grip. What is the most immediate clinical priority?",
    clinicalVignette:
      "A 35-year-old male with supracondylar fracture, no radial pulse, diminished hand strength, pale hand, and cold extremity.",
    options: [
      {
        id: "a",
        text: "Perform open reduction and internal fixation",
        isCorrect: false,
        explanation:
          "While fixation may be needed, vascular assessment and restoration of perfusion is the immediate priority in a limb-threatening complication.",
      },
      {
        id: "b",
        text: "Assess and establish vascular perfusion; consider vascular intervention if pulse not restored after gentle reduction",
        isCorrect: true,
        explanation:
          "Vascular compromise in supracondylar fracture is a surgical emergency. Gentle closed reduction often restores circulation. If pulse remains absent, urgent angiography and vascular intervention (embolectomy, graft, or observation) is needed before definitive fracture fixation.",
      },
      {
        id: "c",
        text: "Apply skeletal traction and wait for spontaneous resolution",
        isCorrect: false,
        explanation:
          "Waiting risks irreversible ischemic damage. The limb must be assessed and perfusion restored urgently.",
      },
      {
        id: "d",
        text: "Administer heparin and observe for 48 hours",
        isCorrect: false,
        explanation:
          "Anticoagulation alone is insufficient when the artery is mechanically compressed or occluded by fracture fragments.",
      },
    ],
    explanation:
      "Supracondylar fractures frequently cause brachial artery injury (20-50% of cases), particularly when the fracture is displaced. The absence of radial pulse with pale, cold hand indicates acute limb ischemia. Management priorities: (1) gentle gentle reduction to decompress artery, (2) if pulse restored, proceed with fixation, (3) if pulse remains absent, urgent angiography and vascular intervention are needed. Ischemia time >6-8 hours risks irreversible muscle damage and contracture.",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-01-TOP-001",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 39", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 65-year-old female with osteoporosis sustained a fall and presents with a displaced fracture of the femoral neck (Pauwels Type 3). She is medically stable for surgery. What is the critical determinant of treatment choice?",
    clinicalVignette:
      "A 65-year-old female with femoral neck fracture, displaced, high-risk type. Good overall health for surgery.",
    options: [
      {
        id: "a",
        text: "Age of the patient",
        isCorrect: false,
        explanation:
          "While age influences treatment, the fracture type and displacement are more critical in determining surgical approach.",
      },
      {
        id: "b",
        text: "Degree of displacement and vascularity of femoral head",
        isCorrect: true,
        explanation:
          "Pauwels Type 3 (vertical) displaced femoral neck fractures have high risk of avascular necrosis due to disrupted blood supply. The intracapsular location and medial displacement compromise the lateral femoral circumflex vessels. Internal fixation with good reduction carries high AVN risk; hemiarthroplasty or total hip replacement may be preferred.",
      },
      {
        id: "c",
        text: "Patient's occupation and functional demands",
        isCorrect: false,
        explanation:
          "While functional outcome is important, the fracture pattern's inherent risk (AVN) is the primary determinant.",
      },
      {
        id: "d",
        text: "Presence of osteoporosis",
        isCorrect: false,
        explanation:
          "Osteoporosis influences fracture healing but is not the critical determinant of fixation vs. replacement.",
      },
    ],
    explanation:
      "Femoral neck fractures are intracapsular with precarious blood supply from lateral femoral circumflex artery. Pauwels classification based on fracture angle predicts AVN risk: Type 1 (<30°) 10-15%, Type 2 (30-50°) 25%, Type 3 (>50°) 50%. Vertical (Type 3) fractures cause maximal disruption of vascular supply. Young patients (<50 years) warrant internal fixation due to longevity needs despite AVN risk. Older patients (>65 years) with displaced Type 3 fractures benefit from hemiarthroplasty to avoid AVN and early revision surgery.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-02-TOP-002",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 47", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male sustained a Colles fracture 6 weeks ago. Initial reduction was adequate, but he now presents with radial angulation and dorsal displacement recurrence. What is the pathophysiological cause of this loss of reduction?",
    clinicalVignette:
      "A 45-year-old male with Colles fracture, initially reduced but lost position during healing.",
    options: [
      {
        id: "a",
        text: "Inadequate initial anesthesia allowing muscle spasm",
        isCorrect: false,
        explanation:
          "While anesthesia is important, the mechanism of loss of reduction in Colles fracture is osteoporotic bone quality and gravitational forces.",
      },
      {
        id: "b",
        text: "Dorsal angulation of fracture line with volar comminution and weak osteoporotic bone",
        isCorrect: true,
        explanation:
          "Colles fractures typically have a dorsal angulation line, with volar metaphyseal comminution. The fractured distal segment cannot be maintained in reduction due to: (1) weak osteoporotic bone prone to axial loading, (2) dorsal angulation line that promotes dorsal angulation, (3) muscular forces (extensor carpi radialis, extensor carpi ulnaris) pulling dorsally.",
      },
      {
        id: "c",
        text: "Excessive tightness of the cast causing compartment pressure",
        isCorrect: false,
        explanation:
          "While cast tightness can cause other complications, it does not explain mechanical loss of reduction.",
      },
      {
        id: "d",
        text: "Radial nerve compression preventing muscle splinting",
        isCorrect: false,
        explanation:
          "Radial nerve compression is not the mechanism of loss of reduction in Colles fracture.",
      },
    ],
    explanation:
      "Colles fracture (transverse fracture of distal radius 2-3 cm proximal to articular surface) commonly loses reduction during healing. Causes: (1) dorsal angulation of fracture line promotes dorsal angulation, (2) volar comminution creates unstable construct, (3) osteoporotic bone cannot maintain grip by immobilization, (4) extensor muscle forces promoting dorsal displacement. Loss of reduction increases nonunion and post-traumatic arthritis risk. Percutaneous pinning or ORIF may be needed to maintain reduction, especially in younger patients or those with intra-articular involvement.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-03-TOP-003",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 44", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 30-year-old male presents with compartment syndrome in the anterior compartment of the leg 8 hours after a tibia fracture. Fasciotomy is performed. What is the most likely complication if the fasciotomy is not performed or is delayed?",
    clinicalVignette:
      "A 30-year-old male with tibia fracture and clear signs of compartment syndrome with limb-threatening ischemia.",
    options: [
      {
        id: "a",
        text: "Fat embolism syndrome",
        isCorrect: false,
        explanation:
          "Fat embolism can occur with long bone fractures but is not the typical complication of untreated compartment syndrome.",
      },
      {
        id: "b",
        text: "Volkmann's contracture (muscle necrosis and fibrosis)",
        isCorrect: true,
        explanation:
          "Untreated or delayed compartment syndrome leads to irreversible muscle ischemia and necrosis. Dead muscle is replaced by fibrotic scar tissue, causing Volkmann's contracture with permanent disability. Prevention requires fasciotomy within 6-8 hours of symptom onset.",
      },
      {
        id: "c",
        text: "Rhabdomyolysis with acute kidney injury",
        isCorrect: false,
        explanation:
          "While rhabdomyolysis can occur with crush injuries, Volkmann's contracture is the direct consequence of muscle ischemia from compartment syndrome.",
      },
      {
        id: "d",
        text: "Osteonecrosis of the tibia",
        isCorrect: false,
        explanation:
          "Osteonecrosis is not the typical complication of compartment syndrome. The primary damage is to muscles.",
      },
    ],
    explanation:
      "Compartment syndrome is a surgical emergency. Increased pressure within closed fascial compartments compromises microcirculation, leading to muscle ischemia. If untreated beyond 6-8 hours, irreversible muscle necrosis occurs. Dead muscle becomes replaced by fibrotic scar, causing contracture (Volkmann's contracture) with permanent loss of function. Early fasciotomy (within the pressure elevation window) can salvage muscle and prevent contracture. Compartment syndrome is confirmed by pressure measurements >30 mmHg or within 30 mmHg of diastolic BP.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-04-TOP-004",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 50", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 12-year-old child sustains a supracondylar fracture of the humerus with anterior displacement. Closed reduction under general anesthesia is successful, and the arm is immobilized. When should the reduction be reassessed?",
    clinicalVignette:
      "A 12-year-old child with supracondylar fracture successfully reduced and casted.",
    options: [
      {
        id: "a",
        text: "At 6 weeks follow-up",
        isCorrect: false,
        explanation:
          "By 6 weeks, significant callus formation makes reduction loss assessment less accurate. Earlier follow-up is critical.",
      },
      {
        id: "b",
        text: "At 48-72 hours after injury",
        isCorrect: true,
        explanation:
          "Supracondylar fractures in children frequently lose reduction during the first few days due to swelling and muscle relaxation wear-off. X-rays at 48-72 hours should be obtained to assess for loss of reduction before callus formation occurs.",
      },
      {
        id: "c",
        text: "Immediately after manipulation, then not until cast removal",
        isCorrect: false,
        explanation:
          "Waiting until cast removal misses early loss of reduction, which occurs within first few days.",
      },
      {
        id: "d",
        text: "Only if symptoms worsen or neurovascular examination changes",
        isCorrect: false,
        explanation:
          "Loss of reduction may not cause immediate symptom changes. Routine imaging at 48-72 hours detects asymptomatic loss.",
      },
    ],
    explanation:
      "Supracondylar fractures in children frequently lose reduction in the early post-reduction period (first 3-5 days) due to: (1) swelling reduction as soft tissue relaxes, (2) weight of limb despite casting, (3) inadequate immobilization with simple cast. X-rays should be obtained at 48-72 hours to assess for loss of reduction. If >10-15° angulation lost, re-reduction or percutaneous pinning is needed. Late recognition of loss of reduction leads to cubitus valgus/varus and lateral collapse deformity.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-01-TOP-005",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 39", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old male presents with a comminuted intra-articular fracture of the distal femur. ORIF is performed with plate and screws. During postoperative recovery, he develops loss of knee flexion despite intact quadriceps function. What is the most likely cause?",
    clinicalVignette:
      "A 28-year-old male post-ORIF of distal femur fracture with progressive loss of knee flexion but intact strength.",
    options: [
      {
        id: "a",
        text: "Quadriceps muscle damage from surgical approach",
        isCorrect: false,
        explanation:
          "Quadriceps damage would cause loss of extension, not flexion.",
      },
      {
        id: "b",
        text: "Inadequate rehabilitation and capsular scarring (stiffness)",
        isCorrect: true,
        explanation:
          "Loss of knee flexion following distal femur ORIF is often due to arthrofibrosis (capsular scarring) from prolonged immobilization, inadequate early mobilization, or hemarthrosis. Early ROM exercises (typically starting 48-72 hours post-op) prevent this complication.",
      },
      {
        id: "c",
        text: "Posterior capsular reconstruction during ORIF",
        isCorrect: false,
        explanation:
          "The distal femur ORIF approach (anterolateral) does not routinely involve posterior capsular work.",
      },
      {
        id: "d",
        text: "Femoral nerve palsy from retraction",
        isCorrect: false,
        explanation:
          "Femoral nerve palsy would cause quadriceps weakness (loss of extension), not loss of flexion.",
      },
    ],
    explanation:
      "Stiffness is a common complication of distal femur fractures, particularly with intra-articular involvement. Causes: (1) arthrofibrosis from delayed mobilization, (2) hemarthrosis and inflammation, (3) soft tissue damage and capsular inflammation. Loss of flexion indicates capsular restriction. Prevention requires early ROM exercises (within 48-72 hours), sometimes with CPM (continuous passive motion) machines. Treatment of established stiffness includes aggressive PT, sometimes requiring arthroscopic lysis of adhesions if ROM remains <90° at 3-4 months.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-05-TOP-006",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 48", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 32-year-old male presents with loss of sensation in the first web space and weakness of thumb opposition after a displaced fracture of the scaphoid. Which nerve is most likely injured?",
    clinicalVignette:
      "A 32-year-old male with scaphoid fracture and neurological deficit in thumb opposition and thumb web sensation.",
    options: [
      {
        id: "a",
        text: "Radial nerve posterior interosseous branch",
        isCorrect: false,
        explanation:
          "The PIN affects wrist and finger extension, not thumb opposition.",
      },
      {
        id: "b",
        text: "Median nerve recurrent motor branch",
        isCorrect: true,
        explanation:
          "The recurrent branch of the median nerve (branch off the main trunk in the palm) innervates the thenar muscles (abductor pollicis brevis, flexor pollicis brevis, opponens pollicis). Scaphoid fractures with displacement can injure this branch, causing loss of thumb opposition. The sensory loss in the first web space (radial sensory nerve involvement) can coexist.",
      },
      {
        id: "c",
        text: "Ulnar nerve deep branch",
        isCorrect: false,
        explanation:
          "The ulnar deep branch affects intrinsic hand muscles (lumbricals, interossei), not thumb opposition.",
      },
      {
        id: "d",
        text: "Radial sensory nerve only",
        isCorrect: false,
        explanation:
          "While radial sensory nerve can be injured causing first web space sensory loss, motor loss indicates motor nerve (recurrent median branch) injury.",
      },
    ],
    explanation:
      "Scaphoid fractures, particularly those with displacement or proximal pole involvement, can injure the recurrent motor branch of the median nerve as it emerges between the abductor pollicis longus and flexor carpi radialis tendons. Injury causes loss of thumb opposition (opponens pollicis weakness) and possible loss of thumb flexion power. The radial sensory nerve can simultaneously be injured causing sensory loss over thumb web space. Management requires neural exploration and repair if complete transection occurs.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-03-TOP-007",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 43", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old male presents with an open fracture of the tibia Gustilo Grade IIIB. After initial irrigation and debridement, he requires temporary stabilization. What is the most appropriate temporary stabilization method?",
    clinicalVignette:
      "A 28-year-old male with severe open tibia fracture requiring stabilization and soft tissue management.",
    options: [
      {
        id: "a",
        text: "Percutaneous plate and screw fixation",
        isCorrect: false,
        explanation:
          "Plate fixation in open Grade IIIB fractures risks infection. Temporary stabilization is preferred initially.",
      },
      {
        id: "b",
        text: "External fixation for temporary stabilization, then definitive fixation after soft tissue coverage",
        isCorrect: true,
        explanation:
          "External fixation provides temporary stabilization of Grade III open fractures while allowing access for repeated debridement, soft tissue assessment, and delayed flap coverage. Definitive fixation (intramedullary nail or plate) is performed after wound is clean and soft tissue coverage obtained.",
      },
      {
        id: "c",
        text: "Immediate intramedullary nailing",
        isCorrect: false,
        explanation:
          "IMN is contraindicated in open Grade III fractures due to infection risk. IMN requires clean wound for safe use.",
      },
      {
        id: "d",
        text: "Posterior splint and traction",
        isCorrect: false,
        explanation:
          "Simple splinting is inadequate for stabilization and healing of Grade IIIB fractures.",
      },
    ],
    explanation:
      "Gustilo Grade IIIB open fractures have massive soft tissue loss and require special management. External fixation serves as temporary stabilization allowing: (1) repeated debridement (often multiple procedures), (2) soft tissue assessment and planning, (3) flap coverage from plastic surgery, (4) delayed definitive fixation. This staged approach reduces infection (20-60% rate without proper management). IMN risks infection and should be delayed until wound is clean. Early antibiotics, tetanus prophylaxis, and soft tissue care are concurrent management priorities.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-04-TOP-008",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 2", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male with TB spine (thoracic) develops progressive neurological deficit (lower limb weakness and loss of proprioception) despite medical therapy. MRI shows cord compression from kyphotic deformity and bone debris. What is the indication for surgery?",
    clinicalVignette:
      "A 45-year-old male with TB spine on ATT for 6 months with progressive myelopathy from mechanical compression.",
    options: [
      {
        id: "a",
        text: "Failure of medical management with active neurological deficit",
        isCorrect: true,
        explanation:
          "TB spine surgery is indicated for: (1) progressive neurological deficit despite ATT (POTT's paraplegia), (2) severe kyphotic deformity with mechanical cord compression, (3) instability with cord impingement. Early surgical intervention (decompression and stabilization) halts neurological deterioration and improves functional outcomes. Medical management alone is inadequate when mechanical factors (bone debris, fibrosis, kyphosis) cause progressive deficit.",
      },
      {
        id: "b",
        text: "All patients with TB spine should undergo surgery",
        isCorrect: false,
        explanation:
          "Most TB spine responds to medical therapy. Surgery is indicated for specific complications.",
      },
      {
        id: "c",
        text: "Surgery only if fever and systemic symptoms persist",
        isCorrect: false,
        explanation:
          "Systemic control is important but does not address mechanical cord compression.",
      },
      {
        id: "d",
        text: "Observation until antituberculous therapy cures the infection",
        isCorrect: false,
        explanation:
          "Observation risks irreversible neurological damage. Progressive deficit requires urgent intervention.",
      },
    ],
    explanation:
      "TB spine (spinal tuberculosis/Pott's disease) can cause paraplegia through: (1) early onset (from active inflammation, edema, vasculitis during active disease), (2) late onset (from healed fibrosis, kyphotic deformity, bony ankylosis). Progressive neurological deficit despite ATT indicates mechanical factor requiring surgery. Indications for surgery: (1) >3 month progressive deficit despite ATT, (2) mechanical cord compression (kyphosis >60°, severe bone destruction), (3) anterior spinal cord syndrome with recovery potential. Surgery (anterior decompression, reconstruction with bone/cage, posterior instrumentation) with continued ATT gives best outcomes.",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-06-TOP-009",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 58", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 32-year-old male presents with chronic osteomyelitis of the femur with draining sinuses. Culture shows Staphylococcus aureus. He also has a pathological fracture at the site. What is the definitive treatment approach?",
    clinicalVignette:
      "A 32-year-old male with chronic femur osteomyelitis with sinus drainage and fracture at the osteomyelitis site.",
    options: [
      {
        id: "a",
        text: "Prolonged IV antibiotics alone",
        isCorrect: false,
        explanation:
          "Antibiotics alone cannot eradicate biofilm in chronic osteomyelitis. Surgical debridement is essential.",
      },
      {
        id: "b",
        text: "Surgical debridement to remove infected bone and stabilize fracture, followed by prolonged antibiotics",
        isCorrect: true,
        explanation:
          "Chronic osteomyelitis with sequestration requires surgical debridement to remove necrotic bone (sequestrum) and infected tissue, followed by stabilization. The pathological fracture requires fixation to promote healing. Prolonged IV antibiotics (6-12 weeks based on culture/sensitivities) are adjunctive to surgery.",
      },
      {
        id: "c",
        text: "Immediate fracture fixation with ORIF",
        isCorrect: false,
        explanation:
          "ORIF in infected bone risks infection persistence. Debridement must precede stabilization.",
      },
      {
        id: "d",
        text: "Amputation if infection not controlled within 2 weeks of antibiotics",
        isCorrect: false,
        explanation:
          "Amputation is a last resort after failed surgical and medical management, not an early option.",
      },
    ],
    explanation:
      "Chronic osteomyelitis presents with established infection, sequestrum (necrotic bone), and often with draining sinuses. Staphylococcus aureus forms biofilm resistant to antibiotics. Management requires: (1) urgent surgical debridement removing all necrotic bone and infected tissue, (2) culture and sensitivities to guide antibiotics, (3) fracture stabilization (external fixation or minimal internal fixation), (4) prolonged IV antibiotics (6-12 weeks), (5) soft tissue coverage if large defects. Outcome depends on thorough debridement and achieving soft tissue coverage.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-07-TOP-010",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 5", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old female sustained a fracture-dislocation of the ankle with posterior tibial artery injury. After reduction, she develops pain in the foot despite normal pulses. What is the most likely diagnosis?",
    clinicalVignette:
      "A 60-year-old female with ankle fracture-dislocation, reduced, with posterior tibial artery injury status post repair, now with foot pain despite normal perfusion.",
    options: [
      {
        id: "a",
        text: "Reperfusion injury and rhabdomyolysis",
        isCorrect: false,
        explanation:
          "While reperfusion can cause rhabdomyolysis, the mechanism here is compartment syndrome from tissue damage.",
      },
      {
        id: "b",
        text: "Foot compartment syndrome from crush injury and reperfusion",
        isCorrect: true,
        explanation:
          "Ankle fracture-dislocations with vascular injury cause severe soft tissue damage. Even after vascular repair restoring pulses, the foot compartments (especially plantar) can develop compartment syndrome from the crush injury, inflammation, and reperfusion edema. Pain out of proportion to findings suggests compartment syndrome requiring urgent fasciotomy.",
      },
      {
        id: "c",
        text: "Post-reduction residual dislocation",
        isCorrect: false,
        explanation:
          "If reduction is anatomic and pulses normal, residual dislocation is unlikely.",
      },
      {
        id: "d",
        text: "Nerve injury from reduction maneuver",
        isCorrect: false,
        explanation:
          "Nerve injury would present with sensory/motor loss, not disproportionate pain.",
      },
    ],
    explanation:
      "Ankle fracture-dislocations with vascular injury represent major soft tissue trauma. The foot has rigid fascial compartments (medial plantar, lateral plantar, adductor compartments) with limited compliance. After crush injury and vascular repair: (1) compartments swell from ischemic injury and reperfusion, (2) increased pressure compromises microcirculation despite restored axial flow, (3) compartment syndrome develops. Clinical findings: pain disproportionate to exam, pain with passive toe flexion. Measurement shows elevated pressures. Fasciotomy required urgently to prevent tissue death and permanent disability.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-04-TOP-011",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 51", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old male presents with anterior shoulder dislocation. Closed reduction is performed under anesthesia. Post-reduction X-ray shows a small humeral head fracture (Hill-Sachs lesion) not previously noted. What is the management?",
    clinicalVignette:
      "A 28-year-old male with anterior shoulder dislocation and incidental Hill-Sachs lesion on post-reduction imaging.",
    options: [
      {
        id: "a",
        text: "Immobilization and observation; no specific treatment for Hill-Sachs",
        isCorrect: true,
        explanation:
          "Small Hill-Sachs lesions (compression fractures of posterolateral humeral head from anterior dislocation) require immobilization for 3-6 weeks but usually do not require separate treatment. They rarely cause mechanical instability unless >30% of articular surface involved or engaging glenoid.",
      },
      {
        id: "b",
        text: "Immediate open reduction with Hill-Sachs repair",
        isCorrect: false,
        explanation:
          "Operative intervention is not needed for small, non-engaging Hill-Sachs lesions.",
      },
      {
        id: "c",
        text: "CT scan to assess for glenoid fracture (bony Bankart)",
        isCorrect: false,
        explanation:
          "While glenoid fracture assessment is important, it does not change management of incidental Hill-Sachs.",
      },
      {
        id: "d",
        text: "Immediate arthroscopic stabilization",
        isCorrect: false,
        explanation:
          "Arthroscopic intervention for small Hill-Sachs is not indicated as first-line treatment.",
      },
    ],
    explanation:
      "Hill-Sachs lesion is a compression fracture of the posterolateral humeral head sustained during anterior dislocation. Small lesions (<25% articular surface) are incidental findings without clinical consequences and require no specific treatment. Management of anterior dislocation: (1) close reduction, (2) immobilization 3-6 weeks, (3) PT for rotator cuff strengthening. Larger lesions (>30% involvement) or engaging lesions (causing apprehension) may require Remplissage procedure (arthroscopic). Concomitant glenoid fractures (bony Bankart) require assessment for recurrence risk.",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-08-TOP-012",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 36", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old male sustained an avulsion fracture of the lateral malleolus with posterior tibial artery disruption 4 hours ago. After vascular repair, he remains anuric. What is the most likely cause?",
    clinicalVignette:
      "A 35-year-old male with ankle fracture, vascular injury with repair, now with absent urine output post-operatively.",
    options: [
      {
        id: "a",
        text: "Hypovolemia from blood loss",
        isCorrect: false,
        explanation:
          "While blood loss contributes, the mechanism in limb ischemia-reperfusion is rhabdomyolysis.",
      },
      {
        id: "b",
        text: "Rhabdomyolysis with myoglobinuria causing acute kidney injury",
        isCorrect: true,
        explanation:
          "Vascular injury causes limb ischemia for 4 hours leading to extensive muscle damage. Reperfusion releases myoglobin into circulation (myoglobinuria) causing acute tubular necrosis. AKI manifests as oliguria/anuria. Management includes aggressive hydration, alkalinization of urine, possible dialysis.",
      },
      {
        id: "c",
        text: "Compartment syndrome compressing renal vessels",
        isCorrect: false,
        explanation:
          "Compartment syndrome does not affect renal perfusion. The issue is renal injury from myoglobin.",
      },
      {
        id: "d",
        text: "Surgical complication with ureteral injury",
        isCorrect: false,
        explanation:
          "Ankle surgery does not involve ureter risk. The cause is systemic from rhabdomyolysis.",
      },
    ],
    explanation:
      "Limb ischemia >4 hours causes significant muscle damage with necrosis. Upon reperfusion, damaged myocytes release myoglobin into circulation. High myoglobin concentration overwhelms renal clearance, precipitating in renal tubules causing acute tubular necrosis and AKI. Clinical findings: dark urine (myoglobinuria), elevated CK (>1000 IU/mL), elevated myoglobin, elevated creatinine, oliguria. Management: (1) aggressive IV hydration (target urine output 200-300 mL/hour), (2) urine alkalinization with bicarbonate to prevent myoglobin precipitation, (3) careful potassium monitoring (hyperkalemia risk), (4) dialysis if severe AKI.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-04-TOP-013",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 51", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male with a femoral neck fracture is treated with internal fixation using three cannulated screws. At 4-month follow-up, imaging shows increased gap at fracture site with no callus formation. What is the most likely complication?",
    clinicalVignette:
      "A 45-year-old male post-ORIF for femoral neck fracture with radiological evidence of nonunion.",
    options: [
      {
        id: "a",
        text: "Delayed union responding to conservative care",
        isCorrect: false,
        explanation:
          "Delayed union shows callus formation with delayed bridging. This patient shows no callus, indicating nonunion.",
      },
      {
        id: "b",
        text: "Nonunion from inadequate reduction or poor blood supply",
        isCorrect: true,
        explanation:
          "Femoral neck fractures have precarious blood supply from lateral femoral circumflex artery. Nonunion occurs in 10-20% of cases, particularly with: (1) inadequate reduction, (2) intracapsular location with disrupted vascularity, (3) high Pauwels angle, (4) early weight-bearing. Absence of callus at 4 months confirms nonunion requiring revision fixation or arthroplasty.",
      },
      {
        id: "c",
        text: "Avascular necrosis of femoral head",
        isCorrect: false,
        explanation:
          "AVN occurs at 6-12 months with collapse. Early absence of callus indicates nonunion.",
      },
      {
        id: "d",
        text: "Osteoporosis causing fixation failure",
        isCorrect: false,
        explanation:
          "While osteoporosis affects healing, nonunion is primarily from vascular compromise.",
      },
    ],
    explanation:
      "Femoral neck fracture nonunion is a serious complication occurring in 10-20% of cases. Risk factors: (1) displaced fractures with poor reduction, (2) high Pauwels angle (>50°), (3) disrupted blood supply, (4) early weight-bearing. Pathological nonunion means no callus formation at 4 months with visible gap. Management: (1) revision ORIF with improved reduction, (2) potentially with vascularized bone graft, (3) or arthroplasty if patient elderly. Early mobilization must balance callus formation (needs stress) with avoiding excessive shearing forces (disrupts callus).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-02-TOP-014",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 47", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male undergoes ORIF of a supracondylar fracture of the humerus. Postoperatively, he develops progressive loss of active wrist/finger extension despite intact sensation. What is the most likely cause?",
    clinicalVignette:
      "A 55-year-old male post-ORIF for supracondylar fracture with loss of wrist/finger extension motor function.",
    options: [
      {
        id: "a",
        text: "Anterior interosseous nerve injury",
        isCorrect: false,
        explanation:
          "AIN affects thumb/finger flexion, not extension.",
      },
      {
        id: "b",
        text: "Posterior interosseous nerve injury from surgical trauma or cast pressure",
        isCorrect: true,
        explanation:
          "The posterior interosseous nerve (posterior division of radial nerve) supplies all wrist and finger extensor muscles. PIN injury occurs from: (1) direct trauma during ORIF, (2) excessive cast/bandage tightness causing compression, (3) swelling compressing PIN in supinator muscle. Loss of wrist/finger extension with intact sensation (radial sensory nerve intact) indicates PIN injury.",
      },
      {
        id: "c",
        text: "Radial nerve injury affecting all radial nerve branches",
        isCorrect: false,
        explanation:
          "Complete radial nerve injury would also affect sensation. This patient has intact sensation.",
      },
      {
        id: "d",
        text: "Irreversible axonal injury requiring surgical repair",
        isCorrect: false,
        explanation:
          "Many cases of PIN injury are from compression (reversible) rather than transection.",
      },
    ],
    explanation:
      "PIN injury is the most common neurological complication of supracondylar fracture fixation. The PIN passes through the supinator muscle and can be compressed by swelling, overly tight cast, or direct surgical trauma. Clinical presentation: loss of wrist extension (wrist drop), loss of finger extension at MCP joints, loss of thumb abduction (EPL), with intact sensation (radial sensory nerve intact). Treatment: (1) early assessment, (2) cast loosening/removal if compression suspected, (3) observation for 12 weeks if partial/compression injury, (4) EMG/NCS to differentiate compression from transection, (5) surgical exploration if no recovery by 12 weeks.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-01-TOP-015",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 39", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 40-year-old male with a complex intra-articular distal tibia fracture (pilon fracture) undergoes staged treatment with external fixation initially. Six weeks later, definitive ORIF is planned. What is the physiological rationale for this staged approach?",
    clinicalVignette:
      "A 40-year-old male with severe pilon fracture managed with initial external fixation, planning definitive fixation at 6 weeks.",
    options: [
      {
        id: "a",
        text: "Allow soft tissue swelling to resolve and restore skin viability",
        isCorrect: true,
        explanation:
          "Pilon fractures have severe soft tissue injury with associated compartment syndrome risk and skin compromise. Initial external fixation provides: (1) limb alignment and decompression, (2) 5-7 days for swelling to resolve, (3) assessment of skin for extensive bruising or blistering (Tscherne grade), (4) delay of definitive ORIF until soft tissues suitable for incision (typically 7-21 days depending on soft tissue grade). This reduces infection from operating through compromised soft tissue.",
      },
      {
        id: "b",
        text: "Allow fracture callus to form before fixation",
        isCorrect: false,
        explanation:
          "Callus formation is not significant at 6 weeks. The rationale is soft tissue recovery.",
      },
      {
        id: "c",
        text: "Reduce operative time for ORIF by pre-reduction",
        isCorrect: false,
        explanation:
          "Operative time reduction is not the primary rationale.",
      },
      {
        id: "d",
        text: "Allow assessment for complex regional pain syndrome before definitive fixation",
        isCorrect: false,
        explanation:
          "CRPS assessment is secondary. Soft tissue recovery is primary.",
      },
    ],
    explanation:
      "Pilon fractures (distal tibia metaphyseal/articular fractures) are high-energy injuries with severe soft tissue trauma. High-energy distal tibia fractures often occur with compartment syndrome and skin damage (Tscherne classification). Staged treatment protocol: (1) Day 0: External fixation for alignment and leg decompression, (2) Days 5-7: Reassess soft tissue; if severe bruising/blistering, delay further intervention, (3) Days 7-21: Once skin viable and soft tissue swelling improving, perform ORIF. This minimizes infection (30-50% in pilon fractures) by avoiding surgery through compromised tissues. Fracture healing is maintained with external fixation minimizing damage during staged approach.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-04-TOP-016",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 51", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 32-year-old male presents with a tibial shaft fracture with 3 cm shortening. He is treated nonoperatively with cast immobilization. At 3 months, union is progressing but shortening persists. What is the expected functional outcome?",
    clinicalVignette:
      "A 32-year-old male with tibial fracture treated conservatively, showing signs of union but with residual shortening.",
    options: [
      {
        id: "a",
        text: "Excellent outcome with no functional deficit from shortening",
        isCorrect: false,
        explanation:
          "3 cm shortening typically causes significant functional consequences.",
      },
      {
        id: "b",
        text: "Gait abnormality, pelvic tilt, and increased contralateral knee stress from limb length discrepancy",
        isCorrect: true,
        explanation:
          ">2 cm tibial shortening causes measurable gait abnormality with pelvic tilt and hip flexion on the short side. This increases stress on contralateral knee (varus stress) and contralateral ankle. Long-term consequences: early osteoarthritis of contralateral knee and ankle. Psychological impact from limb length discrepancy. Correction requires limb lengthening.",
      },
      {
        id: "c",
        text: "Pain and swelling manageable with NSAIDs",
        isCorrect: false,
        explanation:
          "The biomechanical consequences of shortening persist despite NSAIDs.",
      },
      {
        id: "d",
        text: "Complete functional recovery once union achieves",
        isCorrect: false,
        explanation:
          "Union without length restoration leaves residual disability.",
      },
    ],
    explanation:
      "Tibial shortening >2-3 cm causes significant functional consequences. Biomechanical effects: (1) gait abnormality with circumduction to clear shortened limb, (2) pelvic tilt and Trendelenburg gait, (3) increased stress on contralateral knee (varus overload), (4) ankle inversion stress on short side, (5) hip flexion contracture on short side. Long-term: early osteoarthritis of contralateral knee and ankle (5-10 years earlier than expected). Prevention requires: (1) adequate initial reduction with manipulation, (2) intramedullary nailing to maintain length during healing, (3) early mobilization. Late correction requires lengthening procedures (intramedullary elongation or external fixation).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-04-TOP-017",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 50", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old male develops osteonecrosis of the femoral head after a femoral neck fracture treated with internal fixation. What is the mechanism of bone death in this scenario?",
    clinicalVignette:
      "A 28-year-old male with femoral neck fracture, treated with ORIF, developing AVN of femoral head.",
    options: [
      {
        id: "a",
        text: "Thromboembolism from fracture site",
        isCorrect: false,
        explanation:
          "While thrombosis can occur, the primary mechanism in femoral neck fractures is vascular disruption.",
      },
      {
        id: "b",
        text: "Disruption of blood supply from intracapsular fracture and vascular stretching",
        isCorrect: true,
        explanation:
          "Femoral neck fractures (intracapsular) disrupt the precarious blood supply from the lateral femoral circumflex artery. High-energy displacement and medial comminution stretch and tear the small vessels supplying the femoral head. Inadequate reduction prevents vascular restoration. Result: avascular necrosis of femoral head.",
      },
      {
        id: "c",
        text: "Screw compression of vessels",
        isCorrect: false,
        explanation:
          "While screw placement must avoid vessels, the primary mechanism is initial fracture-induced vascular injury.",
      },
      {
        id: "d",
        text: "Infection causing bone death",
        isCorrect: false,
        explanation:
          "Infection is not the mechanism of AVN post-fracture.",
      },
    ],
    explanation:
      "Femoral neck fractures have significant AVN risk (10-50% depending on fracture type). Pathophysiology: (1) femoral head blood supply is exclusively from lateral femoral circumflex artery (medial branch) entering through capsule, (2) fracture disrupts capsule and vessels, (3) medial comminution stretches remaining blood supply, (4) inadequate reduction maintains disruption. Displaced fractures have higher AVN risk. Prevention: adequate initial reduction, minimal soft tissue stripping, vascular-preserving surgical technique. Early recognition of AVN (by 6-12 months on imaging) allows treatment (core decompression, VICAT) before collapse.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-02-TOP-018",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 47", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male with a comminuted fracture of the femur develops acute post-operative fever and hemodynamic instability within 24 hours of ORIF. Fat embolism is suspected. What clinical sign is most specific for fat embolism?",
    clinicalVignette:
      "A 50-year-old male post-ORIF for comminuted femur fracture with fever, tachycardia, and respiratory symptoms.",
    options: [
      {
        id: "a",
        text: "Petechial rash on chest and axillae",
        isCorrect: true,
        explanation:
          "Petechiae (non-blanching small hemorrhages) in the distribution of superior vena cava (chest, neck, axillae, upper arms) are highly specific for fat embolism. Caused by microemboli blocking capillaries and releasing vasoactive substances. Present in 50% of FES cases.",
      },
      {
        id: "b",
        text: "Tachycardia and tachypnea",
        isCorrect: false,
        explanation:
          "These are common findings but not specific to FES.",
      },
      {
        id: "c",
        text: "Elevated body temperature",
        isCorrect: false,
        explanation:
          "Fever is common but not specific to FES.",
      },
      {
        id: "d",
        text: "Confusion and restlessness",
        isCorrect: false,
        explanation:
          "While present in FES, confusion is not specific (can occur with sepsis, hypoxia, etc.).",
      },
    ],
    explanation:
      "Fat embolism syndrome occurs after long bone fracture (particularly femur) with ORIF, presenting 24-72 hours post-injury. Pathophysiology: (1) marrow fat enters venous circulation at fracture site, (2) fat globules lodge in pulmonary and cerebral capillaries, (3) release of inflammatory mediators. Geyser signs (petechiae above nipple line) are highly specific for FES. Clinical triad: (1) fever, (2) respiratory symptoms (dyspnea, PaO2 <60 mmHg), (3) CNS symptoms (confusion, seizures). Diagnosis: clinical presentation + Geyser sign. Prevention: gentle handling during ORIF, early fixation. Treatment: supportive care, oxygen, careful fluid management.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-05-TOP-019",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 5", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male develops a stress fracture of the anterior tibia 8 weeks into a military training program. X-rays show periosteal reaction without discrete fracture line. What is the most appropriate management?",
    clinicalVignette:
      "A 45-year-old male with anterior tibia pain during training, imaging shows periosteal reaction consistent with early stress fracture.",
    options: [
      {
        id: "a",
        text: "Continue training with ice and NSAIDs",
        isCorrect: false,
        explanation:
          "Continued loading risks progression to displacement or complete fracture.",
      },
      {
        id: "b",
        text: "Relative rest (modified activity) until pain-free, then graduated return to activity",
        isCorrect: true,
        explanation:
          "Stress fractures show periosteal reaction before a discrete fracture line appears. Early detection allows conservative management with relative rest, maintaining some activity while unloading the fracture site. Typically requires 6-12 weeks. Load is gradually increased as periosteal healing progresses and pain resolves.",
      },
      {
        id: "c",
        text: "Immobilization with cast for 12 weeks",
        isCorrect: false,
        explanation:
          "Complete immobilization is excessive for early stress fracture. Relative rest is sufficient.",
      },
      {
        id: "d",
        text: "Operative fixation with intramedullary nailing",
        isCorrect: false,
        explanation:
          "Surgery is not indicated for uncomplicated stress fractures.",
      },
    ],
    explanation:
      "Stress fractures result from repetitive microtrauma exceeding bone's repair capacity. Early detection (periosteal reaction without fracture line) allows conservative management. Pathophysiology: (1) repetitive loading causes microdamage, (2) periosteal reaction and resorption at fracture site, (3) if loading continues, progresses to complete fracture. Management: (1) relative rest (activity modification), (2) maintain cardiovascular fitness with low-impact activity, (3) ice and NSAIDs, (4) physical therapy to address biomechanical issues, (5) graduated return to training. Most stress fractures heal in 6-12 weeks. Complete fracture or nonunion requires casting or operative fixation.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-04-TOP-020",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 51", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male presents with a pathological fracture of the proximal femur. Biopsy reveals metastatic breast cancer. What is the primary surgical goal?",
    clinicalVignette:
      "A 55-year-old male with metastatic disease presenting with femur pathological fracture.",
    options: [
      {
        id: "a",
        text: "Cure the cancer with wide resection",
        isCorrect: false,
        explanation:
          "Pathological fractures are treated palliatively, not with intent to cure cancer.",
      },
      {
        id: "b",
        text: "Stabilization with fixation to achieve pain relief and functional mobility",
        isCorrect: true,
        explanation:
          "Pathological fractures occur in patients with terminal/advanced cancer. Surgical goal is palliation: pain relief and restoration of functional mobility to improve quality of life in remaining time. Fixation (internal or external) is preferred over radiation to allow immediate weight-bearing.",
      },
      {
        id: "c",
        text: "Immobilization with casting for comfort",
        isCorrect: false,
        explanation:
          "Casting prevents mobilization, worsening quality of life. Fixation allowing weight-bearing is preferable.",
      },
      {
        id: "d",
        text: "Amputation to prevent metastatic spread",
        isCorrect: false,
        explanation:
          "Amputation is excessive morbidity for palliative care in terminal patients.",
      },
    ],
    explanation:
      "Pathological fractures occur when metastatic disease weakens bone. In terminal patients with advanced cancer, treatment is palliative aiming to: (1) relieve pain, (2) restore mobility and independence, (3) improve quality of life. Surgical fixation (plate/screw, intramedullary nail) allows immediate weight-bearing without prolonged recovery. This contrasts with radiation therapy which requires 6-12 weeks for effect and prevents early mobilization. Patient selection is critical—only candidates with reasonable life expectancy (>3-6 months) should undergo surgery. Fixation method depends on fracture location and expected survival.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-07-TOP-021",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 9", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old male sustains a posterior hip dislocation with concurrent acetabular fracture. After reduction, he develops pain and loss of hip flexion. What is the most likely complication?",
    clinicalVignette:
      "A 35-year-old male with posterior hip dislocation and acetabular fracture, post-reduction with loss of hip flexion and pain.",
    options: [
      {
        id: "a",
        text: "Iliopsoas muscle contracture from injury",
        isCorrect: false,
        explanation:
          "While muscle injury occurs, the finding suggests mechanical obstruction.",
      },
      {
        id: "b",
        text: "Incarcerated intra-articular fragment obstructing hip motion",
        isCorrect: true,
        explanation:
          "Hip dislocation with acetabular fracture often has intra-articular fragments (bone or soft tissue). These fragments may become incarcerated between femoral head and acetabulum, blocking hip flexion. Imaging (CT) shows the fragment, and arthroscopy/arthrotomy may be needed to remove it.",
      },
      {
        id: "c",
        text: "Femoral nerve palsy from dislocation",
        isCorrect: false,
        explanation:
          "Femoral nerve palsy would present with quadriceps weakness, not loss of hip flexion.",
      },
      {
        id: "d",
        text: "Avascular necrosis of femoral head",
        isCorrect: false,
        explanation:
          "AVN develops later (6-12 months), not immediately post-reduction.",
      },
    ],
    explanation:
      "Posterior hip dislocation with acetabular fracture is a complex injury. Acetabular fracture often involves a bone fragment (posterior wall, posterior column) that can incarcerate in the hip joint. Incarcerated fragments: (1) block hip flexion mechanically, (2) cause pain with motion, (3) increase osteoarthritis risk. Management: (1) imaging (CT) to identify fragment location, (2) closed reduction attempts to dislodge fragment, (3) if still incarcerated, arthrotomy/arthroscopy to remove fragment, (4) ORIF of acetabular fracture. Early recognition and removal of fragments prevents loss of motion and improves long-term hip function.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-02-TOP-022",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 45", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male presents with a subtrochanteric femur fracture (subtrochanteric = distal to lesser trochanter). What anatomical factor makes this fracture particularly prone to nonunion?",
    clinicalVignette:
      "A 50-year-old male with subtrochanteric femur fracture requiring high-force treatment.",
    options: [
      {
        id: "a",
        text: "Poor blood supply to subtrochanteric region",
        isCorrect: false,
        explanation:
          "Blood supply to this region is actually adequate. The issue is biomechanical.",
      },
      {
        id: "b",
        text: "High bending and shear forces in the subtrochanteric region with thin cortical bone",
        isCorrect: true,
        explanation:
          "Subtrochanteric region experiences maximum bending moment from hip abductor and flexor muscles. The metaphyseal bone transitions to diaphysis with thinner cortices. High shear forces combine with thin bone cortex, making fixation challenging. Simple plate fixation often fails. Intramedullary nailing is preferred to resist varus/shear forces.",
      },
      {
        id: "c",
        text: "Nutrient artery compression from swelling",
        isCorrect: false,
        explanation:
          "Nutrient artery compression is not the primary issue.",
      },
      {
        id: "d",
        text: "Osteoporotic bone quality",
        isCorrect: false,
        explanation:
          "While osteoporosis affects healing, the mechanical factors are primary.",
      },
    ],
    explanation:
      "Subtrochanteric femur fractures are biomechanically challenging. This region is at junction of metaphysis and diaphysis, experiencing: (1) maximum bending moment from hip abductors and flexors creating varus force, (2) shear forces from muscle pull, (3) thin cortical bone relative to proximal femur. Biomechanical analysis: fractures have high nonunion rates with simple plate fixation (20-30%). Intramedullary nailing (antegrade) resists varus and shear better, achieving union rates >95%. Fixation principles: (1) intramedullary nail preferred, (2) maintain reduction/alignment, (3) early mobilization.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-05-TOP-023",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 48", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old female with severe osteoporosis presents with a burst fracture of L3 vertebra from a fall. She has no neurological deficit. What is the primary treatment consideration?",
    clinicalVignette:
      "A 60-year-old female with osteoporotic compression/burst fracture of L3, no myelopathy, good health.",
    options: [
      {
        id: "a",
        text: "Operative fixation for all osteoporotic burst fractures",
        isCorrect: false,
        explanation:
          "Neurologically intact osteoporotic burst fractures can often be managed nonoperatively.",
      },
      {
        id: "b",
        text: "Conservative management with bracing and early mobilization if neurologically intact and stable",
        isCorrect: true,
        explanation:
          "Osteoporotic burst fractures without neurological deficit or significant instability can be managed conservatively: (1) bracing for comfort and support, (2) early mobilization, (3) pain management, (4) osteoporosis management. Surgery carries risks in elderly osteoporotic patients (screw loosening, nonunion). Operative fixation is reserved for neurological deficit or instability.",
      },
      {
        id: "c",
        text: "Immediate posterior spinal fusion for all elderly patients",
        isCorrect: false,
        explanation:
          "Fusion is excessive for uncomplicated osteoporotic fractures without neurological involvement.",
      },
      {
        id: "d",
        text: "Vertebroplasty for all osteoporotic compression fractures",
        isCorrect: false,
        explanation:
          "Vertebroplasty is indicated for painful compression fractures, but not always the first-line approach.",
      },
    ],
    explanation:
      "Osteoporotic vertebral fractures represent most common cause of myelopathy in elderly. Management depends on: (1) neurological status, (2) stability, (3) fracture morphology. Burst fractures without neurological deficit: conservative management with bracing, analgesia, early mobilization gives good functional outcomes. Concerns with surgical fixation in elderly osteoporotic patients: (1) screw loosening from poor bone quality, (2) instrumentation failure, (3) nonunion. Operative fixation reserved for: (1) neurological deficit from cord compression, (2) severe instability, (3) failed conservative management. Vertebroplasty or kyphoplasty considered for painful compression fractures.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-06-TOP-024",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 58", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old male presents with a posterior shoulder dislocation. Early reduction is performed. One week later, he develops acute onset of loss of shoulder abduction and external rotation. What is the most likely diagnosis?",
    clinicalVignette:
      "A 35-year-old male with posterior shoulder dislocation, reduced, now with loss of abduction/external rotation.",
    options: [
      {
        id: "a",
        text: "Rotator cuff tear from dislocation trauma",
        isCorrect: true,
        explanation:
          "Posterior shoulder dislocations commonly tear the supraspinatus and infraspinatus (rotator cuff), particularly in high-energy trauma. Loss of abduction (supraspinatus) and external rotation (infraspinatus) indicates rotator cuff tear. MRI confirms diagnosis. Treatment requires operative repair if acute and functional, or conservative care with PT if partial tears.",
      },
      {
        id: "b",
        text: "Axillary nerve injury from dislocation",
        isCorrect: false,
        explanation:
          "Axillary nerve injury would cause deltoid paralysis (loss of abduction), but not specific external rotation loss.",
      },
      {
        id: "c",
        text: "Suprascapular nerve injury",
        isCorrect: false,
        explanation:
          "Suprascapular nerve injury affects infraspinatus primarily, not both abduction and external rotation.",
      },
      {
        id: "d",
        text: "Chronic dislocation remaining unreduced",
        isCorrect: false,
        explanation:
          "Reduction was confirmed. Loss of motion indicates soft tissue injury.",
      },
    ],
    explanation:
      "Posterior shoulder dislocation is associated with rotator cuff tears in 30-40% of cases, particularly supraspinatus and infraspinatus tears. Mechanism: (1) posterior dislocation disrupts normal shoulder mechanics, (2) rotator cuff stretched over displaced humeral head, (3) soft tissue torn from inflammation and stretching. Clinical presentation: loss of abduction (supraspinatus), loss of external rotation (infraspinatus). Diagnosis: MRI shows tear pattern. Management: acute full-thickness tears in functional patients warrant ORIF. Chronic tears managed conservatively with PT. Posterior dislocation carries high rate of complications including associated fractures (reverse Hill-Sachs, humeral head fractures).",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-08-TOP-025",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 36", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 40-year-old male presents with chronic osteomyelitis of the tibia with fistula drainage. After initial debridement, the resulting bone defect is 8 cm. What is the most appropriate reconstruction strategy?",
    clinicalVignette:
      "A 40-year-old male with chronic tibia osteomyelitis and significant bone defect after debridement.",
    options: [
      {
        id: "a",
        text: "Primary bone graft closure",
        isCorrect: false,
        explanation:
          "Bone graft in infected/colonized bone risks graft failure and recurrent infection.",
      },
      {
        id: "b",
        text: "Soft tissue flap coverage followed by staged bone reconstruction with vascularized graft",
        isCorrect: true,
        explanation:
          "Large bone defects (>5 cm) from osteomyelitis require: (1) complete debridement to viable bone, (2) soft tissue flap (free or pedicled) to provide blood supply and seal infection, (3) delayed bone reconstruction with vascularized bone graft (fibula, ilium) or distraction osteogenesis. This staged approach ensures infection control before reconstruction.",
      },
      {
        id: "c",
        text: "Amputation",
        isCorrect: false,
        explanation:
          "Amputation is last resort after failed reconstruction, not initial management.",
      },
      {
        id: "d",
        text: "Immediate plate and non-vascularized bone graft",
        isCorrect: false,
        explanation:
          "Non-vascularized graft in infected bone carries high failure rate.",
      },
    ],
    explanation:
      "Management of large bone defects from chronic osteomyelitis requires: (1) complete debridement of infected/dead bone and soft tissue, (2) staging to ensure infection clearance, (3) soft tissue coverage with vascularized flap (free fibula flap, pedicled flap) to restore blood supply, (4) delayed bone reconstruction. Reconstruction options: (1) vascularized fibula graft (provides both bone and blood supply), (2) iliac crest graft (if defect <4 cm), (3) distraction osteogenesis (lengthening). Vascularized bone graft success rates >90%. Critical factor: infection must be cleared before reconstruction.",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-07-TOP-026",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 5", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old male sustains a complex elbow fracture-dislocation with brachial artery injury requiring vascular repair. After vascular repair, he develops severe pain and compartment syndrome of forearm. What is the physiological mechanism?",
    clinicalVignette:
      "A 28-year-old male with elbow fracture-dislocation, vascular injury, post-repair with severe forearm pain and compartment syndrome.",
    options: [
      {
        id: "a",
        text: "Inadequate vascular repair with ongoing ischemia",
        isCorrect: false,
        explanation:
          "If compartment syndrome develops after vascular repair with normal pulses, the issue is compartment pressure, not arterial insufficiency.",
      },
      {
        id: "b",
        text: "Reperfusion injury with capillary leak and compartment edema despite restored arterial flow",
        isCorrect: true,
        explanation:
          "Vascular injury causes muscular ischemia. Reperfusion initiates inflammatory cascade: (1) reactive oxygen species (ROS) production, (2) endothelial damage, (3) increased capillary permeability (capillary leak), (4) compartment edema. This occurs despite restoration of arterial flow (pulses normal). High interstitial pressure from edema compresses microcirculation, causing compartment syndrome.",
      },
      {
        id: "c",
        text: "Thrombosis of vascular repair",
        isCorrect: false,
        explanation:
          "Thrombosis would present with absent pulses, not compartment syndrome with normal pulses.",
      },
      {
        id: "d",
        text: "Nerve injury from stretching during vascular exposure",
        isCorrect: false,
        explanation:
          "Nerve injury would present with sensory/motor loss, not compartment syndrome symptoms.",
      },
    ],
    explanation:
      "Reperfusion injury (ischemia-reperfusion injury) is a critical complication after vascular repair following ischemia. Mechanism: (1) ischemia causes ATP depletion and Na+/Ca++ overload in cells, (2) reperfusion reintroduces oxygen generating ROS, (3) ROS damages endothelium and mitochondria, (4) inflammatory cytokines released (TNF-alpha, IL-6), (5) increased capillary permeability with fluid extravasation, (6) compartment edema despite normal arterial flow. Clinical consequence: compartment syndrome even with patent vessel. Management: (1) fasciotomy urgently when compartment pressures elevated, (2) careful fluid management to prevent overload, (3) careful monitoring of perfusion.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-04-TOP-027",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 5", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male with long-standing TB spine (kyphosis >60°) develops progressive lower limb weakness despite 18 months of successful antituberculous therapy. What is the most likely mechanism of neurological deterioration?",
    clinicalVignette:
      "A 55-year-old male with TB spine, kyphotic deformity >60°, on completed ATT, now with progressive myelopathy.",
    options: [
      {
        id: "a",
        text: "Recurrent tuberculosis infection",
        isCorrect: false,
        explanation:
          "After completed ATT, recurrence rate is low. Progressive deficit despite cure suggests mechanical factor.",
      },
      {
        id: "b",
        text: "Late-onset (healed) paraplegia from kyphotic deformity and cord angulation",
        isCorrect: true,
        explanation:
          "Late-onset paraplegia occurs months to years after TB cure. Mechanism: severe kyphotic deformity (>60°) causes cord stretching and angulation, leading to ischemia and myelomalacia. Healed TB creates fibrosis and bony ankylosis, increasing mechanical stress on cord. Progressive deterioration can occur despite completed ATT.",
      },
      {
        id: "c",
        text: "Intra-abdominal abscess compressing spinal cord",
        isCorrect: false,
        explanation:
          "Abscess would present with active infection signs, not mechanical late-onset deficit.",
      },
      {
        id: "d",
        text: "Syringomyelia from spinal cord cavity",
        isCorrect: false,
        explanation:
          "While syringomyelia can occur, mechanical cord compression from kyphosis is primary mechanism of late-onset paraplegia.",
      },
    ],
    explanation:
      "TB paraplegia is classified as: (1) early-onset (during active disease, from inflammation, abscess, vertebral collapse), (2) late-onset (after cure, from mechanical factors). Late-onset paraplegia occurs in 5-10% of healed TB spine cases. Mechanisms: (1) severe kyphotic deformity (>60°) causes cord stretching and angulation, (2) fibrosis and adhesions, (3) vertebral subluxation, (4) cord ischemia from vascular compromise, (5) myelomalacia. Management requires surgical intervention: anterior decompression and reconstruction to reduce kyphosis, posterior instrumentation for stabilization. Prognosis improves with earlier intervention before irreversible cord damage occurs.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-06-TOP-028",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 58", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 32-year-old male presents with acute compartment syndrome of the leg 6 hours after fracture reduction. Fasciotomy is performed. At 3 days post-fasciotomy, serum potassium is 7.2 mEq/L and ECG shows peaked T-waves. What is the relationship between compartment syndrome treatment and this complication?",
    clinicalVignette:
      "A 32-year-old male with acute compartment syndrome, status post fasciotomy, now with hyperkalemia and cardiac changes.",
    options: [
      {
        id: "a",
        text: "Direct potassium leakage from fasciotomy incisions",
        isCorrect: false,
        explanation:
          "Fasciotomy incisions do not cause potassium loss.",
      },
      {
        id: "b",
        text: "Rhabdomyolysis from ischemic muscle necrosis releasing intracellular potassium",
        isCorrect: true,
        explanation:
          "Compartment syndrome causes muscle ischemia and necrosis. Fasciotomy relieves pressure but does not prevent established muscle death. Necrotic muscle releases intracellular contents including potassium into circulation, causing acute hyperkalemia. This occurs even after fasciotomy if ischemia was prolonged (>6-8 hours).",
      },
      {
        id: "c",
        text: "Acute kidney injury reducing potassium excretion",
        isCorrect: false,
        explanation:
          "While AKI can contribute, the primary source is muscle potassium release.",
      },
      {
        id: "d",
        text: "Medication-induced hyperkalemia from fasciotomy anesthesia",
        isCorrect: false,
        explanation:
          "Anesthesia is not the cause of hyperkalemia.",
      },
    ],
    explanation:
      "Rhabdomyolysis is a critical complication of compartment syndrome even after fasciotomy. The extent depends on ischemia duration and muscle necrosis. Pathophysiology: (1) ischemic muscle damage initiates necrosis, (2) dead myocytes release intracellular contents (K+, phosphate, myoglobin, CK), (3) acute hyperkalemia (K+ >6 mEq/L) causes cardiac arrhythmias, (4) myoglobin causes acute kidney injury. ECG changes (peaked T-waves) indicate severe hyperkalemia. Management: (1) calcium gluconate (membrane stabilization), (2) insulin + glucose (intracellular shift), (3) sodium bicarbonate (alkalinization), (4) aggressive hydration, (5) dialysis if severe. Prevention requires early fasciotomy (<6-8 hours) to salvage muscle.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-04-TOP-029",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 50", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male with a tibial shaft fracture is treated with closed reduction and casting. At 2 weeks, he develops persistent severe pain disproportionate to fracture severity, swelling, and skin mottling despite adequate analgesia. What is the most critical next step?",
    clinicalVignette:
      "A 45-year-old male with tibial fracture, signs of compartment syndrome (pain out of proportion, swelling, mottled skin) at 2 weeks.",
    options: [
      {
        id: "a",
        text: "Increase analgesic dose and apply ice",
        isCorrect: false,
        explanation:
          "These measures address pain symptomatically but miss the underlying life-threatening compartment syndrome.",
      },
      {
        id: "b",
        text: "Measure compartment pressures immediately; if elevated, perform fasciotomy urgently",
        isCorrect: true,
        explanation:
          "Compartment syndrome is a surgical emergency. Pain disproportionate to exam, swelling, and mottled skin suggest elevated compartment pressure despite cast immobilization. Compartment pressure measurement (normal <10 mmHg; compartment syndrome >30 mmHg or within 30 of diastolic BP) confirms diagnosis. Fasciotomy must be performed urgently to prevent irreversible muscle necrosis.",
      },
      {
        id: "c",
        text: "Remove cast and observe for improvement",
        isCorrect: false,
        explanation:
          "Cast removal alone may not relieve elevated compartment pressure. Measurement and fasciotomy needed.",
      },
      {
        id: "d",
        text: "Obtain imaging to assess fracture healing",
        isCorrect: false,
        explanation:
          "Imaging does not address the surgical emergency. Compartment pressures take priority.",
      },
    ],
    explanation:
      "Compartment syndrome can develop 24-72 hours post-injury or even later (delayed compartment syndrome). Classic signs (5 P's): Pain (disproportionate), Paresthesias, Pallor, Pulselessness (late), Paralysis (late). Mottled skin indicates microcirculatory failure. Diagnosis requires clinical suspicion + pressure measurement. Management: urgent fasciotomy (within 6-8 hours ideally). Delayed diagnosis leads to Volkmann's contracture and permanent disability. Even with cast immobilization, compartment syndrome requires fasciotomy as cast prevents adequate pressure relief.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "OR",
    topicCode: "OR-MOD-04-TOP-030",
    textbookRefs: [
      { book: "Rockwood and Green's Fractures in Adults", chapter: "Ch 50", edition: "8th" },
    ],
  },
];
