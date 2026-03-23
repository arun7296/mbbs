import type { TopicLessons } from "./content-loader";

export const radiologyPart3Lessons: TopicLessons[] = [
  {
    topicCode: "RD-MOD-03-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "bone-joint-imaging-foundation",
        title: "Bone & Joint Imaging - Foundation",
        estimatedMinutes: 25,
        summary: "X-ray interpretation of fractures, bone diseases, joint pathology.",
        contentMd: `# Bone & Joint Imaging - Foundation

## Fracture Basics
- **Cortical disruption**: Loss of cortical line indicates fracture
- **Displacement**: Deviation from normal alignment requires assessment
- **Classification**: Simple (closed), compound (open), comminuted, spiral, avulsion
- **Healing stages**: 0-2 weeks minimal change, 2-4 weeks callus, 4-8 weeks bridging, 8-12 weeks remodeling, >12 weeks consolidated

## Common Fractures (India Context)
- **Clavicle**: Middle 1/3 most common; medial 1/3 rare
- **Colles**: Dorsal angulation, radial shortening; classic from fall on outstretched hand
- **Hip**: Intracapsular (femoral neck) vs extracapsular (intertrochanteric) - AVN risk in intracapsular
- **Vertebral**: Compression fracture (wedge), burst (retropulsion), flexion-distraction (severe instability)

## Bone Diseases
- **Osteoporosis**: Decreased bone density, thinned cortex; DEXA gold standard for diagnosis
- **Osteomyelitis**: Early soft tissue swelling, late lucency (bone destruction), sequestrum
- **Osteoarthritis**: Joint space narrowing, osteophytes, sclerosis, cysts (Kellgren-Lawrence stages)
- **Rheumatoid arthritis**: Periarticular soft tissue swelling, periarticular osteoporosis, erosions (symmetric)

## MRI vs CT for MSK
- **CT**: Better for bone detail, complex fractures, 3D reconstruction
- **MRI**: Better for soft tissue (ligaments, menisci, marrow edema), ACL tears, bone contusion`,
        mnemonics: [
          { text: "Fracture healing: 0-2wk minimal, 2-4wk callus, 4-8wk bridging, >12wk consolidated", explanation: "Stages" },
          { text: "OA: JSN + osteophytes + sclerosis; RA: erosions + symmetric", explanation: "Joint disease differentiation" },
          { text: "CT for bone detail, MRI for soft tissue", explanation: "Modality choice" }
        ],
        keyPoints: [
          "Fracture healing visible at 2-4 weeks (callus); 8-12 weeks for full consolidation",
          "OA: joint space narrowing + osteophytes + subchondral sclerosis",
          "RA: symmetric distribution with early erosions",
          "MRI best for soft tissue (ligaments, menisci); CT best for bone",
          "ACL tear: ligament discontinuity + lateral tibial plateau contusion on MRI"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Musculoskeletal System", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Bones and Joints", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "advanced-msk-imaging",
        title: "Advanced MSK Imaging - Mechanism",
        estimatedMinutes: 30,
        summary: "MRI sequences for soft tissue, CT for complex fractures, ACL/meniscal injuries.",
        contentMd: `# Advanced MSK Imaging - Mechanism

## MRI Sequences
- **T1-weighted**: Anatomic detail; cortical bone dark (no signal); fat bright
- **T2-weighted**: Fluid bright (edema, effusion); fat intermediate; bone dark
- **STIR**: Suppresses fat; fluid bright; marrow edema very bright (excellent for bone contusion)
- **Gradient echo**: Magnetic susceptibility artifact; hemosiderin/meniscal tears very dark

## Soft Tissue Injuries
- **ACL tear**: Ligament discontinuity, increased signal (edema), lateral tibial plateau contusion (Segond fracture - small avulsion)
- **Meniscal tear**: Linear signal within meniscus extending to surface, bright T2; bucket-handle = displaced, "absent" appearance
- **Bone contusion**: Bright T2/STIR (edema), marrow signal change; indicates direct impact

## Fracture Complexity
- **Simple fracture**: Linear break, no displacement
- **Comminuted**: Multiple fragments; CT 3D reconstruction helps surgical planning
- **Intra-articular**: Crosses joint line; assess for step-off, fragment size (needs fixation if >2mm)
- **Salter-Harris (pediatric)**: Classification of physeal (growth plate) fractures (I-V types)`,
        mnemonics: [
          { text: "T1 = anatomic, T2 = pathology (edema, tears bright)", explanation: "Sequence contrast" },
          { text: "STIR = marrow edema bright (bone contusion)", explanation: "Best for bone injury" },
          { text: "ACL = ligament discontinuity + lateral tibial plateau contusion", explanation: "Classic MRI finding" }
        ],
        keyPoints: [
          "T2/STIR: fluid bright (edema, tears, effusion)",
          "ACL tear: ligament discontinuity, lateral tibial plateau contusion, Segond fracture",
          "Meniscal tear: linear signal extending to surface; bucket-handle = displaced",
          "CT: excellent for complex fractures, 3D reconstruction, intra-articular fragments",
          "Bone contusion: T2/STIR bright; indicates direct impact (higher injury risk)"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "MSK Trauma Imaging", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Ligament and Cartilage Injuries", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "msk-clinical-diagnosis",
        title: "MSK Imaging - Clinical",
        estimatedMinutes: 35,
        summary: "Fracture management, ACL reconstruction, osteoarthritis staging, Indian trauma context.",
        contentMd: `# MSK Imaging - Clinical

## Fracture Management by Imaging
- **X-ray initial**: For obvious fractures, alignment assessment
- **CT if**: Complex fracture, intra-articular involvement, surgical planning needed
- **MRI if**: Soft tissue damage (ligament, meniscus), bone contusion, occult fracture

## ACL Tear Recognition & Management
- **Clinical**: Knee swelling, laxity (Lachman test positive)
- **Imaging**: MRI shows torn ligament, hemarthrosis, bone contusion (lateral tibial plateau typical)
- **Management**: Physiotherapy if partial, reconstruction if complete and functional demands high
- **Prognosis**: Earlier reconstruction better; chronic ACL deficiency → meniscal tears, OA

## Osteoarthritis Staging (Kellgren-Lawrence)
- **Grade 0**: Normal
- **Grade 1**: Doubtful; possible JSN + osteophytes
- **Grade 2**: Minimal; definite osteophytes, possible JSN
- **Grade 3**: Moderate; multiple osteophytes, definite JSN, some sclerosis
- **Grade 4**: Severe; large osteophytes, marked JSN, marked sclerosis, deformity

## India Context
- **Trauma prevalence**: Road traffic accidents (RTA) major cause; often polytrauma
- **Orthopedic interpretation**: Radiologists must assess fracture alignment, displacement for surgical planning
- **Spine injuries**: Pott's disease (TB) common; assess for kyphotic deformity, cord compression
- **Complications**: Monitor for malunion, AVN, post-traumatic OA`,
        mnemonics: [
          { text: "Kellgren-Lawrence: Grade 0-4 (normal to severe)", explanation: "OA staging" },
          { text: "ACL tear: MRI discontinuity + lateral tibial contusion + hemarthrosis", explanation: "Diagnostic triad" },
          { text: "K-L Grade 4 = large osteophytes, marked JSN, marked sclerosis, deformity", explanation: "Severe OA" }
        ],
        keyPoints: [
          "Fracture management: X-ray first; CT for complex; MRI for soft tissue",
          "ACL tear: ligament discontinuity on MRI; earlier reconstruction prevents secondary injury",
          "OA: JSN + osteophytes + sclerosis; graded Kellgren-Lawrence 0-4",
          "India: RTA major trauma cause; assess alignment for surgical planning",
          "Pott's disease (TB spine): common; assess for cord compression, kyphosis"
        ],
        textbookRefs: [
          { book: "Bailey & Love Surgery Manual", chapter: "Orthopedic Imaging", edition: "28th" },
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Clinical MSK", edition: "7th" }
        ]
      },
      {
        layer: 4,
        slug: "msk-imaging-exam",
        title: "MSK Imaging - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts, fracture classification, joint disease patterns.",
        contentMd: `# MSK Imaging - Exam Prep

## High-Yield Facts
- **Fracture healing**: Callus visible at 2-4 weeks; bridging at 4-8 weeks; consolidation at 8-12 weeks
- **Colles fracture**: Dorsal angulation, radial shortening, radial deviation (classic)
- **Intracapsular hip fracture**: High risk of AVN (femoral head blood supply disrupted)
- **ACL tear**: Most common knee ligament injury; MRI shows discontinuity + bone contusion
- **Meniscal tear**: Bucket-handle = displaced; needs meniscectomy or repair
- **OA stages**: JSN + osteophytes + sclerosis (early); marked deformity (late)
- **RA vs OA**: RA symmetric with early erosions; OA asymmetric weight-bearing joints

## Fracture Classification Pearls
- **Greenstick**: Incomplete; common in children (flexible bone)
- **Pathologic**: Through weakened bone (metastases, myeloma, osteoporosis)
- **Stress fracture**: From repetitive loading; early = subtle; MRI best
- **Salter-Harris**: Pediatric physeal fractures (I-V); high-risk types need urgent reduction

## Common Exam Questions
- "Dorsal angulation + radial shortening?" = Colles fracture
- "Femoral neck fracture risk?" = AVN (intracapsular disrupts blood supply)
- "Ligament discontinuity on MRI?" = ACL tear
- "Linear signal in meniscus?" = Meniscal tear
- "Periarticular osteoporosis + erosions?" = RA (symmetric)
- "Osteophytes + JSN in weight-bearing joints?" = OA`,
        mnemonics: [
          { text: "Colles = Dorsal angulation, Radial shortening, Radial deviation", explanation: "3 D's" },
          { text: "RA = Periarticular osteoporosis + Erosions (symmetric); OA = Osteophytes + JSN", explanation: "Joint disease" },
          { text: "Fracture healing: 2-4wk callus, 4-8wk bridging, >12wk consolidated", explanation: "Timeline" },
          { text: "ACL = anatomic detail from MRI, ligament Completely torn", explanation: "MRI diagnosis" }
        ],
        keyPoints: [
          "Colles fracture: dorsal angulation + radial shortening + radial deviation",
          "Intracapsular hip fracture: high AVN risk; extracapsular safer",
          "ACL tear: MRI shows ligament discontinuity; early reconstruction prevents OA",
          "RA: symmetric, periarticular osteoporosis, erosions; OA: weight-bearing joints",
          "Fracture healing: callus at 2-4 weeks; consolidation at 8-12 weeks"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Fractures and Dislocations", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Trauma Imaging", edition: "8th" }
        ]
      },
      {
        layer: 5,
        slug: "msk-active-recall",
        title: "MSK Imaging - Active Recall",
        estimatedMinutes: 20,
        summary: "Clinical cases: fracture management, ACL tear, OA assessment, Pott's disease.",
        contentMd: `# MSK Imaging - Active Recall

## Q1: Colles Fracture Management
**Q: 70-year-old woman with fall on outstretched hand. X-ray shows dorsal angulation, radial shortening, radial deviation of distal radius. What is this and management?**

A: **Colles fracture** (classic). **Findings diagnostic**: Dorsal angulation (dorsum of hand toward back), radial shortening (radius shorter), radial deviation (hand deviated toward thumb). **Mechanism**: Fall on FOOSH (fall on outstretched hand) in elderly osteoporotic bone. **Management**: (1) Closed reduction under anesthesia if significantly displaced, (2) Immobilization (plaster cast 6 weeks), (3) Repeat X-ray to confirm reduction, (4) Follow-up imaging to monitor healing (callus at 2-4 weeks, bridging at 4-8 weeks), (5) Watch for complications (malunion if reduction lost, post-traumatic OA). **Prognosis**: Most heal well; loss of reduction risk in elderly osteoporotic bone.

## Q2: ACL Tear Diagnosis & Reconstruction
**Q: 28-year-old athlete with knee swelling after twisting injury. MRI shows ligament discontinuity and lateral tibial plateau bone contusion. What's diagnosis and management?**

A: **ACL (anterior cruciate ligament) tear** confirmed. **MRI findings**: (1) Ligament discontinuity (torn fibers), (2) Lateral tibial plateau bone contusion (typical mechanism - tibia slides forward relative to femur), (3) Hemarthrosis (knee effusion). **Mechanism**: Non-contact twisting injury (sudden deceleration, cutting movement). **Management**: (1) Physiotherapy initially (strengthening, proprioception), (2) Consider reconstruction if functional demands high (athlete), (3) Earlier reconstruction better (prevents secondary meniscal tears, post-traumatic OA), (4) Rehabilitation post-surgery (gradual return to sport). **Prognosis**: ACL-deficient knee at risk for meniscal tears, OA; reconstruction improves long-term outcome.

## Q3: Hip Fracture - Intracapsular vs Extracapsular
**Q: 80-year-old man with hip fracture. X-ray shows break line through femoral neck just below femoral head. What's the fracture type and AVN risk?**

A: **Intracapsular (femoral neck) fracture** - HIGH AVN RISK. **Why high AVN**: Femoral head has precarious blood supply (lateral femoral circumflex artery); break disrupts ascending cervical branches. **Location**: "Just below femoral head" = femoral neck (intracapsular). **AVN incidence**: 10-30% with intracapsular fractures (vs <5% extracapsular). **Management**: (1) Urgent internal fixation (ORIF with screws) to restore vascularity, (2) Early weight-bearing if stable, (3) Close follow-up imaging (watch for AVN signs - sclerosis, collapse), (4) MRI at 6-12 months to assess viability. **Prognosis**: Better with early anatomic reduction; delayed treatment increases AVN risk.

## Q4: Meniscal Tear - Bucket Handle
**Q: 45-year-old with knee pain. MRI shows bucket-handle meniscal tear with "absent" appearance of medial meniscus on sagittal view. What does this indicate?**

A: **Displaced bucket-handle meniscal tear** - mechanical derangement. **Finding explanation**: "Absent" medial meniscus on sagittal = meniscus displaced into intercondylar notch (no longer in normal anatomic location). **Bucket-handle mechanism**: Inner meniscal fibers torn longitudinally; outer portion buckles into notch creating mechanical block. **Clinical**: Patient often reports knee "locking" (meniscus displaces into notch, blocks full extension). **Management**: (1) MRI confirms diagnosis, (2) Arthroscopy indicated (mechanical symptoms = surgery), (3) Meniscectomy (if old/degenerative) or repair (if fresh/peripheral), (4) Repair preferred if possible (preserve meniscal function, prevent OA). **Prognosis**: Untreated meniscal tears → accelerated OA; repair preserves long-term joint health.

## Q5: Osteoarthritis Staging
**Q: 60-year-old with knee pain. X-ray shows moderate joint space narrowing, multiple large osteophytes, subchondral sclerosis, and early joint space deformity. What's Kellgren-Lawrence grade?**

A: **Kellgren-Lawrence Grade 3** (moderate OA). **Findings diagnostic**: (1) Definite osteophytes (multiple, large), (2) Marked JSN (not just doubtful), (3) Subchondral sclerosis (bone thickening), (4) Early deformity. **K-L grading**:
- Grade 0: Normal
- Grade 1: Doubtful; possible JSN + osteophytes
- Grade 2: Minimal osteophytes, possible JSN
- Grade 3: Moderate; definite JSN + multiple osteophytes + sclerosis
- Grade 4: Severe; large osteophytes, marked JSN, deformity

**Management**: (1) Symptomatic treatment (NSAIDs, physiotherapy, weight loss), (2) Intra-articular injections (corticosteroids, hyaluronic acid) if symptom flare, (3) Activity modification, (4) Consider total knee replacement if Grade 4 or unresponsive to conservative therapy. **Prognosis**: Progression variable; some stable, some progress to Grade 4.

## Q6: Pott's Disease (TB Spine)
**Q: 45-year-old with back pain and kyphosis. CT spine shows vertebral body collapse with anterior wedging, preserved disc space (unlike pyogenic), and paraspinal soft tissue collection. What's diagnosis and urgency?**

A: **Pott's disease** (TB of spine). **Classic findings**: (1) Anterior vertebral body involvement (unusual for pyogenic), (2) **Preserved disc space** (TB doesn't typically affect disc; pyogenic does), (3) Kyphotic deformity (from collapse), (4) Paraspinal abscess/soft tissue collection. **India context**: Common in TB-endemic areas; important to recognize. **Urgency**: If cord compression present (assess spinal canal, cord edema on MRI). **Management**: (1) Confirm TB diagnosis (imaging + biopsy if needed, sputum/CT-guided aspirate), (2) Anti-TB therapy (4-6 months), (3) Orthopedic assessment for stability (kyphosis >60° may need surgery), (4) Monitor neurologic status (warning signs = urgent surgical intervention). **Prognosis**: Good with early anti-TB therapy; surgery reserved for instability or neurologic deficit.`
      }
    ]
  }
];
