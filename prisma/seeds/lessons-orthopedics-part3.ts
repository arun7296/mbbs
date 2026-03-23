import type { TopicLessons } from "./content-loader";

export const orthopedicsPart3Lessons: TopicLessons[] = [
  {
    topicCode: "OR-MOD-02-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "humerus-fractures-layer-1-foundation",
        title: "Humerus Fractures - Foundation",
        estimatedMinutes: 22,
        summary: "Overview of humerus fractures including proximal, shaft, and distal fractures with epidemiology and classification.",
        contentMd: `# Humerus Fractures - Foundation

## Anatomy & Classification

### Proximal Humerus Fractures
- **Epidemiology**: Common in elderly (>60 years) with osteoporosis
- **Mechanism**: Fall on outstretched hand (FOOSH) or direct trauma
- **Common types**:
  - **Subcapital**: Neck region (most common)
  - **Anatomical neck**: Below articular surface (rare, high AVN risk)
  - **Surgical neck**: Below tuberosities (common)
  - **Greater tuberosity**: Isolated or with dislocation
  - **Lesser tuberosity**: Associated with posterior dislocation

- **Neer Classification**: 4-part system based on number of fracture lines/displacement
  - Part 1: Minimal displacement (<1 cm)
  - Part 2: Surgical neck fracture displaced
  - Part 3: Greater tuberosity fracture
  - Part 4: Lesser tuberosity fracture

### Shaft Fractures
- **Location**: Between surgical neck and 5 cm proximal to condyles
- **Common in**: Young adults; associated with high-energy trauma
- **Patterns**:
  - **Transverse**: Simple breaks
  - **Spiral**: Twisting injuries
  - **Comminuted**: Multiple fragments

### Distal Humerus Fractures (Supracondylar)
- **Common in**: Children <15 years
- **Mechanism**: Fall on outstretched hand (FOOSH)
- **Types**: Extension (95%) vs Flexion (5%)
- **Complications**: Neurovascular compromise (brachial artery, median/radial nerves)

## Epidemiology
- **Proximal**: Most common shoulder fracture
- **Shaft**: 5-10% of humeral fractures
- **Distal**: Most common in children; less common in adults
- **Associated injuries**: Often polytrauma with high-energy mechanism

## Complications Risk

### Avascular Necrosis (AVN)
- **Risk**: Anatomical neck fractures (highest risk)
- **Mechanism**: Disruption of blood supply to humeral head
- **Incidence**: 10-15% with displaced proximal fractures
- **Timeline**: May develop weeks to months post-fracture

### Nerve Injuries
- **Axillary nerve**: Most common (injury in 6-10%)
- **Radial nerve**: Shaft fractures (spiral/comminuted)
- **Median nerve**: Displaced distal fractures
- **Musculocutaneous**: Less common

### Stiffness
- **Risk**: High with immobilization >4-6 weeks
- **Prevention**: Early mobilization
- **Rehabilitation**: Essential for shoulder function`,
        mnemonics: [
          {
            text: "PROXIMAL HUMERUS classification: Neer system",
            explanation: "Part 1 minimal, Part 2 surgical neck, Part 3 greater tuberosity, Part 4 lesser tuberosity"
          },
          {
            text: "SUPRACONDYLAR pediatric fractures",
            explanation: "Extension (95%) more common than flexion (5%)"
          }
        ],
        keyPoints: [
          "Proximal humerus fractures most common; elderly with osteoporosis",
          "Neer classification guides management decisions",
          "Shaft fractures: High-energy trauma; radial nerve at risk",
          "Distal/supracondylar: Pediatric fracture; neurovascular monitoring critical",
          "Avascular necrosis risk with anatomical neck fractures"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 5", edition: "6th" },
          { book: "Apley & Solomon's System of Orthopaedics", chapter: "Ch 8", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "humerus-fractures-layer-2-mechanism",
        title: "Humerus Fractures - Mechanism",
        estimatedMinutes: 28,
        summary: "Biomechanical mechanisms of humerus fractures, vascular anatomy, nerve injury patterns, and healing factors.",
        contentMd: `# Humerus Fractures - Mechanism

## Biomechanics of Injury

### Proximal Humerus Fracture Mechanisms
- **FOOSH mechanism**: Arm abducted, externally rotated on impact
- **Compressive forces**: Crush injury causing impaction
- **Shearing forces**: Valgus/varus stress causing neck fractures
- **Avulsion**: Rotator cuff pull on tuberosities

### Shaft Fracture Mechanics
- **Direct blow**: High-energy impact causing transverse fracture
- **Twisting/torsion**: Spiral pattern fractures
- **Comminution**: Multiple fragments with crush forces
- **Pathologic fractures**: Metastatic disease or weak bone

### Distal Humerus Fracture Mechanisms (Pediatric)
- **Extension mechanism** (95%): FOOSH with forearm extended
  - Supracondylar fracture occurs anterior to condyles
  - Posterior displacement common
  - Neurovascular compression risk

- **Flexion mechanism** (5%): FOOSH with forearm flexed
  - Rarer, different fracture pattern
  - Transcondylar fracture possible

## Vascular Anatomy & Injury

### Arterial Supply to Humerus
- **Anterior circumflex**: Proximal humerus, anastomoses with posterior
- **Posterior circumflex**: Proximal humerus, axillary artery branches
- **Brachial artery**: Along shaft, at risk with shaft fractures
- **Collateral circulation**: Extensive; some proximal fractures well-tolerated

### Brachial Artery at Risk
- **Location**: Anteromedial to humerus in distal third
- **Supracondylar fractures**: Trapped between proximal and distal fragments
- **Mechanism**: Stretching, compression, kinking
- **Ischemia timeline**: Critical if >6 hours ischemia time

### Signs of Vascular Compromise
- **Pale hand/fingers**: Reduced perfusion
- **Absent radial pulse**: Arterial obstruction
- **Cold hand**: Ischemia
- **Cyanosis**: Blue/purple discoloration (venous back-up)
- **Pain progression**: Increasing pain suggests ischemia

## Nerve Injury Patterns

### Axillary Nerve Injury
- **Location**: Passes through quadrangular space below rotator cuff
- **Risk**: Proximal humerus fractures (6-10% incidence)
- **Mechanism**: Stretch from displacement, direct trauma
- **Deficit**: Loss of shoulder abduction, deltoid innervation
- **Recovery**: Often spontaneous over weeks

### Radial Nerve Injury
- **Location**: Spiral groove of humerus
- **Risk**: Shaft fractures, especially spiral/comminuted
- **Mechanism**: Bone fragment laceration or stretch
- **Deficit**: Wrist drop (loss of wrist extension), loss of finger extension
- **Recovery**: Often improve with time if not completely transected

### Median & Ulnar Nerves
- **Risk**: Distal humerus fractures
- **Mechanism**: Stretch, compression, or direct trauma
- **Deficit**: Loss of pronation (median), intrinsic hand weakness (ulnar)

## Bone Healing Factors

### Variables Affecting Union
- **Age**: Young better healing; elderly delayed
- **Vascular integrity**: Medial cortex most important for blood supply
- **Fragment alignment**: Displacement increases non-union risk
- **Comminution**: More fragments = slower healing
- **Immobilization**: Balance between stability and early mobilization

### Healing Timeline
- **2-3 weeks**: Early callus formation
- **6-8 weeks**: Bridging callus appears
- **12-16 weeks**: Usually solid union in adults
- **Delayed union**: >16 weeks; non-union risk increases
- **Non-union risk**: Especially shaft fractures if untreated

## Avascular Necrosis Mechanism

### Vascular Disruption
- **Anatomical neck fractures**: Highest AVN risk (>50%)
- **Mechanism**: Fracture line crosses major blood supply
- **Proximal fragment**: Loses blood supply, becomes ischemic
- **Timeline**: Changes appear 6-12 months after fracture

### Repair Process
- **Revascularization attempt**: Creeping substitution from surrounding
- **Resorption**: Bone resorbed and replaced (structural compromise)
- **Collapse risk**: Weakened bone cannot support load
- **Salvage**: ORIF with internal fixation improves outcomes

## Stiffness Development Mechanism

### Immobilization Effects
- **Collagen remodeling**: Ligaments shorten
- **Adhesion formation**: Joint capsule thickens
- **Muscle atrophy**: Loss of motor coordination
- **Pain-induced guarding**: Muscle splinting prevents movement

### Prevention
- **Early mobilization**: Within 3-5 days
- **Physiotherapy**: Passive → active-assisted → active
- **Timing**: Critical window for rehabilitation`,
        mnemonics: [
          {
            text: "NEUROVASCULAR complications",
            explanation: "Nerves: Axillary>Radial>Median>Ulnar; Vascular: Brachial artery"
          },
          {
            text: "SUPRACONDYLAR ISCHEMIA",
            explanation: "Stretch-induced compression, Pale hand, Radial pulse loss, Arterial entrapment"
          }
        ],
        keyPoints: [
          "Proximal humerus: FOOSH mechanism; axillary nerve injury 6-10%",
          "Shaft fractures: Radial nerve at risk (spiral fractures); brachial artery injury possible",
          "Distal/supracondylar: Brachial artery compression (emergency); check vascular status",
          "AVN risk highest with anatomical neck fractures (>50%)",
          "Early mobilization (3-5 days) prevents stiffness"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 5", edition: "6th" },
          { book: "Apley & Solomon's System of Orthopaedics", chapter: "Ch 8", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "humerus-fractures-layer-3-clinical",
        title: "Humerus Fractures - Clinical",
        estimatedMinutes: 28,
        summary: "Clinical diagnosis, investigations, imaging, and management of humerus fractures.",
        contentMd: `# Humerus Fractures - Clinical

## Clinical Examination

### History
- **Mechanism**: FOOSH, direct blow, fall on outstretched hand
- **Age**: Elderly = proximal; young = shaft; children = distal
- **Hand dominance**: Important for functional goals

### Proximal Humerus Fracture Examination
- **Inspection**: Swelling, ecchymosis (bruising)
- **Palpation**:
  - Tenderness over tuberosities
  - Crepitus if unstable
  - Fullness (hemarthrosis)
- **Movement**: Often limited by pain
- **Neurovascular**: Check axillary nerve (shoulder abduction), pulses

### Shaft Fracture Examination
- **Deformity**: Angular deformity obvious
- **Crepitus**: Bone grinding on palpation
- **Neurovascular**:
  - Radial nerve (wrist drop, finger extension)
  - Brachial artery (radial pulse, hand perfusion)

### Distal Humerus Fracture (Pediatric)
- **Inspection**: Severe swelling (hemarthrosis)
- **Deformity**: Posterior displacement common
- **Neurovascular**: CRITICAL
  - Check radial pulse, hand color
  - Median/radial nerve function
  - Brachial artery compression emergency

## Investigations

### X-ray Views
- **AP view**: Standard view
- **Lateral view**: Shows displacement
- **Axillary view**: Shows tuberosity involvement
- **Multiple views essential** for fracture assessment

### CT Scan
- **Indications**:
  - Comminuted fractures
  - Complex patterns
  - Surgical planning
- **Provides**: 3D reconstruction, fragment patterns

### MRI
- **Indications**:
  - Rotator cuff injury assessment
  - AVN detection (later stage)
  - Soft tissue evaluation
- **Not routine** for acute fracture

### Ultrasound
- **Dynamic assessment**: Early detection of complications
- **Neurovascular**: Doppler assessment of blood flow
- **Cost-effective**: Available in many centers

## Management

### Proximal Humerus Fractures - Non-Operative (Most Common)

**Indications for Conservative Management**
- Minimally displaced (Neer Part 1)
- Patient unable to undergo surgery
- Limited functional demands

**Technique**
- **Sling immobilization**: 2-3 weeks
- **Gentle pendulum exercises**: Start immediately
- **Progressive mobilization**: Passive ROM (week 2-3), active-assisted (week 4+)
- **Physiotherapy**: Essential for outcome

**Outcomes**
- Good in many elderly patients
- Risk: Stiffness, especially if immobilization prolonged
- Healing timeline: 8-12 weeks

### Proximal Humerus Fractures - Operative (ORIF)

**Indications**
- Displaced proximal fractures (Neer Part 2-4)
- Young, active patient
- Non-union/malunion
- Anatomical neck fractures (AVN prevention)

**Techniques**
- **ORIF with locking plate**: Gold standard
  - Anterolateral approach
  - Anatomic reduction
  - Locking plate provides stability
  - Allows early mobilization

- **Hemiarthroplasty**:
  - 4-part fractures in elderly
  - Comminuted with vascular compromise
  - Higher age, lower activity demand

**Results**
- ORIF: Better functional outcomes
- Hemiarthroplasty: Useful salvage in comminuted cases

### Shaft Fractures - Non-Operative

**Indications**
- Most shaft fractures can be managed conservatively
- Good healing potential
- Safe reduction possible

**Technique**
- **Closed reduction**: Under fluoroscopy or ultrasound guidance
- **Immobilization**: Functional brace (U-slab, coaptation splint)
- **Early mobilization**: Key to prevent stiffness
- **Radiographs**: Serial monitoring weeks 1, 2, 4, 8

**Advantages**
- Avoids surgery
- Good union rates (90-95%)
- Lower infection risk

### Shaft Fractures - Operative

**Indications**
- Open fractures
- Neurovascular injury requiring exploration
- Pathologic fractures with soft tissue compromise
- Non-union/malunion
- Polytrauma (early mobilization needed)

**Technique**
- **Intramedullary nailing**: Standard for operative shaft fractures
  - Antegrade or retrograde approach
  - Good alignment, early mobilization
  - Lower malunion rate

- **Plate fixation**: Alternative to IM nailing

### Distal Humerus Fractures (Supracondylar) - Pediatric

**Urgent Assessment**
- **Vascular status**: Check radial pulse, hand perfusion immediately
- **Neurovascular compromise**: Emergency management needed
- **Reduction timing**: STAT if pulse absent or hand ischemic

**Closed Reduction**
- **Technique**:
  1. Anesthesia (GA preferred)
  2. Gentle hyperextension to unlock fracture
  3. Longitudinal traction
  4. Correction of deformity
  5. Flexion of elbow to 90-100 degrees

- **Assessment**: Confirm reduction with X-rays and neurovascular status

**Immobilization**
- **Posterior splint**: Elbow 90-100 degrees flexion
- **Duration**: 3-4 weeks minimum
- **Radiographs**: Monitor for slippage

**Operative Fixation**
- **Indications**:
  - Failed closed reduction
  - Unstable reduction
  - Open fractures
  - Neurovascular injury requiring exploration

- **Technique**:
  - ORIF with K-wires or plate (mostly K-wires in children)
  - Percutaneous pinning
  - Lateral pinning preferred (safer)

**Post-op Management**
- **Sling immobilization**: 2-3 weeks
- **ROM exercises**: Early, gentle
- **Physiotherapy**: Monitor for stiffness

### Distal Humerus Fractures (Adult)

**Conservative Management**
- Rare; most require surgery

**Operative (ORIF)**
- Gold standard for displaced fractures
- **Olecranon osteotomy approach**: Provides exposure
- **Plate fixation**:
  - Medial and lateral plates (dual plating)
  - Stabilizes fragments
  - Allows early mobilization
- **Open reduction crucial** for optimal outcomes

## Special Considerations

### Pathologic Fractures
- **Assessment**: History of malignancy, osteoporosis, metabolic disease
- **Management**: Treat underlying cause + orthopedic fixation
- **Prognosis**: Depends on primary condition

### Polytrauma Setting
- **Priority**: Life-threatening injuries first
- **Orthopedic timing**: Early fixation (within 24-48 hours) improves outcomes
- **IM nailing**: Preferred for mobility and nursing care

### Osteoporotic Bone
- **Healing**: Often slower, higher non-union risk
- **Fixation**: Locking plates/screws improve purchase
- **Physiotherapy**: Extended rehabilitation`,
        mnemonics: [
          {
            text: "PROXIMAL MANAGEMENT",
            explanation: "Part 1 non-op, Displaced → ORIF, Early mobilization, Immobilize 2-3 weeks, Physiotherapy critical"
          },
          {
            text: "SUPRACONDYLAR EMERGENCY",
            explanation: "Severe swelling, Urgent vascular check, Pulse absent = Reduce NOW, Anesthesia needed"
          }
        ],
        keyPoints: [
          "Proximal humerus: Minimally displaced → conservative (sling + PT); displaced → ORIF",
          "Shaft fractures: Most managed conservatively with functional brace; early mobilization key",
          "Distal/supracondylar: Check vascular status immediately; emergency reduction if compromised",
          "ORIF indications: Unstable, comminuted, high-demand patient, open fracture",
          "Early mobilization (3-5 days) prevents stiffness"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 5", edition: "6th" },
          { book: "Apley & Solomon's System of Orthopaedics", chapter: "Ch 8", edition: "10th" }
        ]
      },
      {
        layer: 4,
        slug: "humerus-fractures-layer-4-exam",
        title: "Humerus Fractures - Exam Prep",
        estimatedMinutes: 20,
        summary: "Exam-focused strategies and high-yield facts for humerus fractures.",
        contentMd: `# Humerus Fractures - Exam Prep

## High-Yield Facts for NEET PG / INI-CET

### Classification Essentials
- **Proximal**: Neer classification (1-4 parts based on fragments)
- **Shaft**: Location-based (proximal/middle/distal third)
- **Distal**: Extension (95%) vs Flexion (5%); Supracondylar most common

### Epidemiology
- Proximal: Elderly females with osteoporosis
- Shaft: Young adults; high-energy
- Distal: Children <15 years

### Common Exam Scenarios
| Fracture | Age | Mechanism | Nerve Risk |
|----------|-----|-----------|-----------|
| Proximal | Elderly | FOOSH | Axillary (6-10%) |
| Shaft | Young | Direct/twist | Radial |
| Supracondylar | Child | FOOSH | Median/radial; Brachial artery |

## Key Clinical Points

### Axillary Nerve Assessment
- **Test**: Shoulder abduction (deltoid)
- **Injury**: Loss of abduction
- **Incidence**: 6-10% of proximal fractures
- **Recovery**: Usually spontaneous over weeks

### Radial Nerve Assessment
- **Test**: Wrist extension (wrist drop)
- **Injury**: Loss of wrist/finger extension
- **Incidence**: Shaft fractures (especially spiral)
- **Recovery**: Often spontaneous; neuropraxia most common

### Vascular Assessment (Supracondylar)
- **CRITICAL**: Check radial pulse immediately
- **Ischemia signs**: Pale hand, cold fingers, absent pulse
- **Action**: Emergency reduction if compromised
- **Timing**: Reduction within 1-2 hours optimal

## Exam-Style Scenarios

### Scenario 1: Elderly Woman with Proximal Fracture

"75-year-old woman with minimal displacement proximal humerus fracture, medically unfit for surgery. Management?"

- **Answer**: Conservative (sling + PT); Neer Part 1 = non-operative
- Mobilize early to prevent stiffness

### Scenario 2: Young Man with Shaft Fracture

"28-year-old with displaced humeral shaft fracture from high-energy trauma. Radial nerve intact. Management?"

- **Answer**: Functional brace with early mobilization OR IM nailing (good option for polytrauma)

### Scenario 3: Child with Supracondylar Fracture

"6-year-old with supracondylar fracture, absent radial pulse. Management?"

- **Answer**: EMERGENCY reduction immediately; check pulse after reduction
- If pulse still absent after reduction → surgical exploration of brachial artery

### Scenario 4: Proximal Fracture Post-op Stiffness

"65-year-old 6 weeks post-ORIF proximal humerus, severe ROM limitation. Cause and management?"

- **Answer**: Adhesions from immobilization; intensive PT essential now
- Prevent with early mobilization post-op

## Management Decision Tree

HUMERUS FRACTURE
- PROXIMAL
  - Minimally displaced: Conservative (sling + PT)
  - Displaced: ORIF (locking plate) or Hemiarthroplasty (elderly)
- SHAFT
  - Stable reduction: Functional brace + early mobilization
  - Unstable/open: IM nailing
- DISTAL (SUPRACONDYLAR)
  - Vascular compromise: EMERGENCY reduction
  - Closed reduction successful: Posterior splint 3-4 weeks
  - Unstable/open: ORIF (K-wires or plate)

## Treatment Pearls

### Proximal Humerus ORIF
- Locking plate: Anterolateral approach
- Maintains blood supply to tuberosities
- Early mobilization (day 1-2)
- Results: Better function than conservative

### Shaft Fracture Non-Op
- Functional brace: Allows some motion
- Key: Early mobilization (within 3-5 days)
- Union rate: 90-95%
- Avoid complete immobilization (stiffness)

### Supracondylar Emergency Protocol
1. **Immediate vascular check**: Radial pulse
2. **Urgent reduction**: GA, closed technique
3. **Post-reduction check**: Repeat neurovascular exam
4. **If pulse not restored**: Surgical exploration needed
5. **Immobilization**: Posterior splint 3-4 weeks

## Red Flags
- **Absent radial pulse** → Emergency (ischemic limb)
- **Posterior displacement**: Supracondylar compression risk
- **Severe swelling**: Venous obstruction/compartment syndrome risk
- **Open fracture**: Wound contamination, infection risk
- **Polytrauma**: Early fixation preferred for mobilization

## Traps in Exams
- "Proximal fracture minimally displaced → ORIF?" NO, conservative usually
- "Radial nerve injury always requires exploration?" NO, most improve spontaneously
- "Supracondylar with good reduction but absent pulse → watch?" NO, exploration needed
- "Post-op stiffness due to poor surgery?" Often from inadequate PT, not surgery`,
        mnemonics: [
          {
            text: "NEER CLASSIFICATION",
            explanation: "Number of fracture lines, Edema severity, Extra fragment displacement, Rotational angulation"
          },
          {
            text: "SUPRACONDYLAR RESCUE",
            explanation: "Swelling severe, Urgent reduction, Pulse absent = Emergency, Radial artery at risk"
          }
        ],
        keyPoints: [
          "Proximal humerus: Neer classification guides treatment",
          "Axillary nerve injury 6-10% (usually spontaneous recovery)",
          "Shaft fractures: Functional brace effective (90-95% union)",
          "Radial nerve injury possible; wrist drop indicates involvement",
          "Supracondylar: Vascular emergency; immediate reduction if pulse absent"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 5", edition: "6th" },
          { book: "Apley & Solomon's System of Orthopaedics", chapter: "Ch 8", edition: "10th" }
        ]
      },
      {
        layer: 5,
        slug: "humerus-fractures-layer-5-active-recall",
        title: "Humerus Fractures - Active Recall",
        estimatedMinutes: 15,
        summary: "Active recall questions on humerus fractures.",
        contentMd: `# Humerus Fractures - Active Recall

## Q1: Neer Classification of Proximal Humerus Fractures?
**Answer**: 1-4 parts based on number of fractured segments/displacement
- Part 1: Minimally displaced (<1 cm)
- Part 2: Surgical neck fracture with displacement
- Part 3: Greater tuberosity fracture
- Part 4: Lesser tuberosity fracture
- Guides management: Part 1 usually conservative; Parts 2-4 operative

## Q2: Most Common Nerve Injury in Proximal Humerus Fracture?
**Answer**: Axillary nerve (6-10% incidence)
- Presents with loss of shoulder abduction (deltoid)
- Recovery often spontaneous over weeks (neuropraxia)
- Axillary nerve paralysis = cannot abduct arm >90 degrees

## Q3: Radial Nerve Injury - Which Fracture Type?
**Answer**: Shaft fractures (especially spiral/comminuted)
- Presents with wrist drop (loss of wrist extension)
- Loss of finger extension
- Often from bone fragment laceration or stretch
- Most recover spontaneously if neuropraxia

## Q4: Mechanism of Avascular Necrosis in Proximal Humerus?
**Answer**: Disruption of blood supply to humeral head
- Highest risk: Anatomical neck fractures (>50%)
- Mechanism: Fracture line crosses major vessels
- Timeline: Changes appear 6-12 months post-fracture
- Prevention: ORIF stabilizes blood supply

## Q5: Management of Minimally Displaced Proximal Fracture (Neer Part 1)?
**Answer**: Conservative management with sling + physiotherapy
- Immobilization 2-3 weeks
- Early mobilization (pendulum exercises immediately)
- Good outcomes in most
- ORIF not indicated for minimally displaced

## Q6: Best Treatment for Displaced Proximal Fracture in Young Patient?
**Answer**: ORIF with locking plate (anterolateral approach)
- Allows early mobilization
- Better functional outcomes
- Preserves blood supply to tuberosities
- Stabilizes fragments

## Q7: Supracondylar Fracture in Child - Vascular Complication Rate?
**Answer**: Brachial artery compression in 5-10%; pulses may be absent initially
- Check radial pulse immediately post-reduction
- Most pulses restore after reduction (pressure relieved)
- If pulse absent after reduction → surgical exploration indicated
- Ischemia timeout: 6 hours critical threshold

## Q8: Shaft Fracture Management - Conservative vs Operative?
**Answer**: Conservative with functional brace is standard (90-95% union rate)
- Key: Early mobilization (3-5 days post-injury)
- Operator-dependent (radiologist skill needed for closed reduction)
- Operative indications: Open fracture, neurovascular injury, polytrauma
- IM nailing good option for high-demand/polytrauma

## Q9: Post-operative Stiffness After Proximal Humerus ORIF - Cause?
**Answer**: Adhesion formation from immobilization or inadequate physiotherapy
- Prevention: Early mobilization (within 1-2 days post-op)
- Immobilization >3-4 weeks increases stiffness risk
- Treatment: Intensive PT, gentle mobilization exercises
- Outcome: Often reversible with aggressive therapy

## Q10: Extension vs Flexion Supracondylar Fractures - Incidence?
**Answer**: Extension 95%, flexion 5% (extension mechanism FOOSH most common)
- Extension: Posterior displacement typical
- Flexion: Different fracture pattern, less common
- Both require vascular assessment
- Both risk nerve injury (median/radial/brachial artery)`,
        mnemonics: [
          {
            text: "AXILLARY nerve injury",
            explanation: "Abduction loss, Innervates deltoid"
          },
          {
            text: "RADIAL WRIST DROP",
            explanation: "Radial nerve injured, Distal fractures, Input wrist extension lost"
          }
        ],
        keyPoints: [
          "Neer Part 1: Conservative; Parts 2-4: Consider ORIF based on patient factors",
          "Axillary nerve injury 6-10% (usually neuropraxia, spontaneous recovery)",
          "Radial nerve injury with shaft fractures (wrist drop sign)",
          "Supracondylar brachial artery compression emergency (reduce immediately)",
          "Early mobilization (3-5 days) prevents stiffness"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 5", edition: "6th" },
          { book: "Apley & Solomon's System of Orthopaedics", chapter: "Ch 8", edition: "10th" }
        ]
      }
    ]
  }
];
