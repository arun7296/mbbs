import type { TopicLessons } from "./content-loader";

export const orthopedicsPart2Lessons: TopicLessons[] = [
  {
    topicCode: "OR-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "or-principles-layer-1-foundation",
        title: "Principles of Reduction - Foundation",
        estimatedMinutes: 20,
        summary: "Goals of reduction, types of reduction (closed vs open), reduction maneuvers, and initial techniques.",
        contentMd: `# Principles of Reduction - Foundation

## Definition & Goals
Reduction is the process of restoring displaced fracture fragments to their anatomical position.

### Primary Goals
1. **Anatomical restoration**: Return fragments to original position
2. **Functional recovery**: Restore joint motion and muscle function
3. **Prevent complications**: Avoid non-union, malunion, arthritis
4. **Pain relief**: Reduce pain by stabilizing fracture
5. **Restore circulation**: Prevent vascular compromise

## Types of Reduction

### Closed Reduction
- **Definition**: Manipulation without surgical incision
- **Advantages**: Non-invasive, fewer complications, outpatient possible
- **Limitations**: Cannot achieve anatomical reduction in comminuted fractures; loss of reduction possible
- **Technique**: Manual manipulation ± imaging control

### Open Reduction
- **Definition**: Fracture reduction under direct visualization through surgical incision
- **Indications**: Comminuted fractures, intra-articular fractures, neurovascular compromise, failed closed reduction
- **Advantages**: Anatomical reduction assured, fixed under visualization
- **Limitations**: Surgical trauma, longer recovery, higher cost

## Factors Affecting Reducibility

### Favorable Factors (Easy Reduction)
- **Minimal displacement**: Simple fracture pattern
- **No soft tissue interposition**: Direct contact between fragments
- **Good blood supply**: Viable bone
- **No associated injuries**: Focus on single fracture
- **Acute injury**: Muscle spasm less severe

### Unfavorable Factors (Difficult Reduction)
- **High-energy mechanism**: Severe comminution
- **Soft tissue interposition**: Muscle, ligament, nerve wedged in fracture
- **Delayed presentation**: Muscle spasm, swelling
- **Associated injuries**: Complex trauma, polytrauma
- **Vascular compromise**: Time-sensitive emergency

## General Principles of Reduction

### Pre-reduction Assessment
1. **Obtain radiographs**: Anteroposterior, lateral, and special views
2. **Assess neurovascular status**: Pulses, sensory, motor
3. **Evaluate soft tissues**: Skin integrity, swelling, compartments
4. **Consider anesthesia**: Local, regional (nerve block), or general
5. **Prepare equipment**: Traction devices, fluoroscopy, instruments

### Reduction Maneuvers
1. **Traction**: Apply longitudinal pull to relieve muscle spasm and angulation
2. **Reduction of deformity**: Gently reverse the deforming force
3. **Stabilization**: Maintain reduced position during fixation
4. **Confirmation**: Imaging to verify adequate reduction

### Post-reduction Management
- **Immobilization**: Splint, cast, or surgical fixation
- **Elevation**: Reduce swelling
- **Repeat imaging**: 24-48 hours to check for loss of reduction
- **Pain management**: Analgesics, avoid compartment syndrome
- **Encourage mobilization**: Early passive/active motion where safe`,
        mnemonics: [
          {
            text: "TAR (Reduction mnemonic)",
            explanation: "Traction, Angulation reversal, Restoration (confirmation)"
          },
          {
            text: "COTI (Closed vs Open)",
            explanation: "Closed: simple, Outpatient, Time-saving, Invasive (not). Open: thorough, Operative, Always anatomical"
          }
        ],
        keyPoints: [
          "Closed reduction preferred if anatomical position achievable and maintained",
          "Open reduction for comminuted, intra-articular, or neurovascularly compromised fractures",
          "Timing: Acute reduction better (less spasm); delayed may need traction first",
          "Always recheck neurovascular status and imaging post-reduction",
          "Loss of reduction common with some fractures; repeat imaging essential at 1-2 weeks"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 2", edition: "6th" },
          { book: "Apley & Solomon's System of Orthopaedics", chapter: "Ch 3", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "or-principles-layer-2-mechanism",
        title: "Principles of Reduction - Biomechanical Principles",
        estimatedMinutes: 25,
        summary: "Biomechanics of reduction, muscle forces, traction principles, and three-point fixation.",
        contentMd: `# Principles of Reduction - Biomechanical Principles

## Muscle Force Concepts

### Muscle Attachments & Deforming Forces
- **Proximal fragment**: Controlled by proximal muscle attachments
- **Distal fragment**: Displaced by deforming muscles (gravity, spasm)
- **Common patterns**: Angulation, rotation, shortening

### Key Muscles by Region
- **Upper limb**: Pectoralis major, deltoid, flexor/extensor groups
- **Lower limb**: Hip flexors/extensors, quadriceps, hamstrings, gastrocnemius
- **Reversal principle**: Reduction reverses the deforming force

## Traction Principles

### Types of Traction
1. **Manual traction**: Direct pull by surgeon
2. **Continuous traction**: Sustained pull over hours/days (Buck's, Russell's)
3. **Skeletal traction**: Pin through bone (Kirschner wire, traction pin)
4. **Suspension traction**: Overhead apparatus for lower limb

### Physics of Traction
- **Force vector**: Must oppose deforming muscle force
- **Duration**: Sustained traction relieves muscle spasm over time
- **Weight**: Typically 5-15% body weight; higher for femoral fractures
- **Benefit**: Reduces muscle spasm, relieves pain, assists reduction

## Three-Point Fixation Principle

### Concept
Immobilization device contacts bone at three points, preventing angulation and rotation.

### Application by Fracture Type
- **Shaft fractures**: Points at fracture site and joints above/below
- **Intra-articular fractures**: Points distributing load across joint
- **Metaphyseal fractures**: Points at joint and metaphysis

### Examples
- **Wrist fracture**: Palm support + forearm support + wrist support = 3 points
- **Tibia fracture**: Support at knee + ankle + midshaft = 3 points

## Loss of Reduction Factors

### Mechanical Causes
- **Inadequate immobilization**: Loose cast, insufficient fixation
- **Continued muscle spasm**: Pulling fragments apart
- **Soft tissue interposition**: Prevents fragment contact
- **Secondary displacement**: Redisplacement within cast/brace

### Biological Causes
- **Osteoporosis**: Poor bone purchase for fixation
- **Comminution**: No cortical contact for stability
- **Infection**: Loosening of fixation, non-union

### Prevention Strategies
- **Proper fixation**: Rigid fixation for load-bearing bones
- **Repeat imaging**: Check at 1-2 weeks for displacement
- **Patient compliance**: Avoid high-stress activities
- **Early mobilization**: Where safe, promotes circulation and callus formation`,
        mnemonics: [
          {
            text: "DRAM (Reduction factors affecting outcome)",
            explanation: "Displacement (degree), Reduction (method), Age (healing), Muscles (spasm control)"
          },
          {
            text: "3PF (Three-Point Fixation)",
            explanation: "Three contact points prevent angulation and rotation"
          }
        ],
        keyPoints: [
          "Reversal of deforming force essential for reduction maneuver",
          "Traction relieves muscle spasm and assists reduction",
          "Three-point fixation prevents deformity recurrence",
          "Early mobilization within safe parameters promotes callus formation",
          "Repeat imaging critical to detect loss of reduction"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 2", edition: "6th" },
          { book: "Rockwood & Green", chapter: "Ch 3", edition: "9th" }
        ]
      },
      {
        layer: 3,
        slug: "or-principles-layer-3-clinical",
        title: "Principles of Reduction - Clinical Techniques",
        estimatedMinutes: 25,
        summary: "Specific reduction maneuvers by anatomical location, imaging confirmation, and common failures.",
        contentMd: `# Principles of Reduction - Clinical Techniques

## Regional Reduction Techniques

### Upper Limb

#### Supracondylar Fracture (Distal Humerus)
- **Deforming force**: Flexor muscles pulling distal fragment into flexion
- **Reduction maneuver**: (1) Traction with elbow extended, (2) Correct angulation, (3) Flex elbow to 90°
- **Special concern**: Neurovascular status (anterior interosseous nerve, brachial artery)

#### Colles Fracture (Distal Radius)
- **Typical deformity**: Dorsal displacement, dorsal angulation, radial deviation
- **Reduction**: (1) Traction, (2) Pronate forearm, (3) Flex wrist (reverses dorsal displacement)
- **Confirmation**: Anteroposterior and lateral radiographs verify restoration of radial angle

#### Scaphoid Fracture
- **Challenge**: Non-displaced fractures may be missed; check carefully
- **Reduction**: Usually not displaced; immobilize in thumb spica cast
- **Special**: Blood supply retrograde; proximal fractures high non-union risk

### Lower Limb

#### Femoral Shaft Fracture
- **Deforming force**: Strong thigh muscles (quadriceps, hip flexors/extensors)
- **Initial management**: Buck's or Russell traction (continuous)
- **Reduction maneuver**: (1) Apply traction, (2) Adduct limb (correct abduction), (3) Correct rotation
- **Confirmation**: Pelvic radiograph shows equal leg length

#### Tibial Plateau Fracture
- **Challenge**: Intra-articular; anatomical reduction critical for joint function
- **Reduction**: May need open reduction for split/depression patterns
- **Confirmation**: CT scan often needed to assess articular surface restoration

#### Ankle Fracture
- **Mechanism**: Torsional; reduce by reversing torsional force
- **Reduction**: (1) Traction, (2) Correct rotation, (3) Verify medial/lateral clear spaces equal
- **Confirmation**: Mortise view (AP with 15° internal rotation)

## Imaging Assessment Post-Reduction

### Radiographic Parameters
- **Alignment**: Fracture fragments in anatomical position
- **Apposition**: Fragments in contact (avoid gaps >2-3 mm)
- **Angulation**: Corrected to anatomical alignment
- **Rotation**: Verified by comparing both sides
- **Length**: Limb length equal to contralateral side

### Special Views
- **Mortise view** (ankle): Shows tibiotalar space
- **Traction views** (femur): Assess alignment under traction
- **Flexion/extension views** (spine): Assess stability

## Common Reduction Failures

### Technical Causes
1. **Inadequate traction**: Insufficient force to overcome muscle spasm
2. **Wrong manipulation**: Applying force opposite to needed direction
3. **Timing**: Delayed reduction (spasm more severe)
4. **Anesthesia issues**: Inadequate pain relief or muscle relaxation
5. **Soft tissue interposition**: Muscle, ligament preventing reduction

### Specific Fracture Challenges

#### Supracondylar Humerus
- **Failure**: Posteriorly displaced; requires anterior angulation before reduction
- **Solution**: Correct angulation first, then flex elbow

#### Colles Fracture
- **Failure**: Loss of reduction within 1 week
- **Solution**: Repeat reduction or open fixation if unstable

#### Femoral Shaft
- **Failure**: Rotation persists despite traction
- **Solution**: Rotate limb to match contralateral side; consider internal fixation

### Management of Failed Reduction
1. **Reassess**: Check alignment, identify obstruction
2. **Reposition**: Remove obstruction, retry with different maneuver
3. **Anesthesia**: Consider general anesthesia/NMB for difficult cases
4. **Surgical intervention**: Open reduction if closed reduction fails after 2-3 attempts`,
        mnemonics: [
          {
            text: "AAA+RR (Radiographic parameters)",
            explanation: "Alignment, Apposition, Angulation, Rotation (corrected), Length (equal)"
          },
          {
            text: "TPA (Reduction sequence)",
            explanation: "Traction, Position (correct deformity), Assess (confirm with imaging)"
          }
        ],
        keyPoints: [
          "Each fracture type has specific deforming force; reduction reverses it",
          "Supracondylar requires extension then flexion (two-step)",
          "Colles: traction, pronate, flex = reversal of deformity",
          "Femoral shaft: traction + abduction + rotation correction",
          "Loss of reduction common; repeat imaging critical"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 2", edition: "6th" },
          { book: "SRB Manual", chapter: "Closed Reduction Methods", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "or-principles-layer-4-exam",
        title: "Principles of Reduction - Exam Preparation",
        estimatedMinutes: 20,
        summary: "High-yield facts, comparison tables, and exam pearls.",
        contentMd: `# Principles of Reduction - Exam Preparation

## Key Concepts Summary

### Closed vs Open Reduction

| Feature | Closed | Open |
|---------|--------|------|
| Incision | None | Surgical |
| Technique | Manipulation | Direct visualization |
| Anatomical accuracy | 70-80% | >95% |
| Complications | Neurovascular injury risk | Infection, operative time |
| Cost | Lower | Higher |
| Recovery | Faster | Longer |
| Best for | Simple fractures | Comminuted, intra-articular |

## Reduction Timing

### Ideal Timing
- **Most fractures**: Within first 6-12 hours
- **Emergent**: Neurovascular compromise, open fractures (<1 hour)
- **Within 24 hours**: Acceptable for most cases
- **Delayed (>1 week)**: Spasm severe; may need traction first, then reduction

## Common Exam Questions

Q1: What is the purpose of traction before reduction?
A: Relieves muscle spasm, reduces pain, assists in reduction

Q2: Three-point fixation principle prevents what?
A: Angulation and rotation of fracture fragments

Q3: Most common cause of loss of reduction?
A: Inadequate immobilization or soft tissue interposition

Q4: In Colles fracture reduction, what is the sequence?
A: (1) Traction, (2) Correct angulation/pronate forearm, (3) Flex wrist

Q5: What finding indicates successful reduction of supracondylar humerus?
A: Restoration of anterior humeral line (line through anterior cortex humerus bisects capitellum)

## Clinical Pearls

### Red Flags for Failed Reduction
- Neurovascular compromise post-reduction
- Obvious deformity on post-reduction radiographs
- Loss of alignment at 1-2 week follow-up
- Patient unable to move joints despite pain control

### Prevention of Loss of Reduction
1. Adequate immobilization (3-point fixation)
2. Elevation to reduce swelling
3. Frequent early follow-up (1-2 weeks)
4. Patient education on activity restriction
5. Early mobilization (where safe) to prevent stiffness

## Practice Scenarios

Scenario 1: Failed closed reduction of femoral shaft fracture
- Perform traction, apply slight traction, correct rotation, recheck alignment
- If still unsuccessful: Open reduction with intramedullary nailing

Scenario 2: Supracondylar humerus with neurovascular compromise
- Immediate extension and reduction (may relieve nerve/vessel compression)
- If not relieved: Explore vessels surgically

Scenario 3: Loss of reduction in Colles fracture at 2 weeks
- Repeat reduction and immobilization, OR
- Consider percutaneous pinning or open fixation if unstable`,
        mnemonics: [
          {
            text: "CORA (Center of Rotation of Angulation)",
            explanation: "Point about which fragment rotates; helps plan reduction direction"
          },
          {
            text: "Timing: Acute within 6-12h, Delayed >1w needs traction first",
            explanation: "Early is better (less spasm); if delayed, traction relieves spasm first"
          }
        ],
        keyPoints: [
          "Closed reduction preferred if anatomical position achievable and maintained",
          "Three-point fixation prevents deformity",
          "Loss of reduction common; repeat imaging essential",
          "Neurovascular status critical before and after reduction",
          "Open reduction indicated if closed fails or intra-articular"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 2", edition: "6th" },
          { book: "Apley & Solomon's System of Orthopaedics", chapter: "Ch 3", edition: "10th" }
        ]
      },
      {
        layer: 5,
        slug: "or-principles-layer-5-active-recall",
        title: "Principles of Reduction - Active Recall",
        estimatedMinutes: 20,
        summary: "Case-based questions and reduction reasoning.",
        contentMd: `# Principles of Reduction - Active Recall Questions

## Case-Based Questions

### Case 1: Supracondylar Fracture
**Scenario**: 6-year-old with supracondylar fracture, posteriorly displaced. Attempting closed reduction.

Q1: What is the deforming force?
A: Flexor muscles (flexor carpi radialis, palmaris longus, flexor digitorum) pulling distal fragment into flexion and posterior displacement

Q2: Reduction sequence?
A: (1) Extend arm (extend elbow against gravity), (2) Reverse deformity by extending and internally rotating, (3) Flex elbow to 90-100°

Q3: How to confirm good reduction?
A: Anteroposterior and lateral radiographs; anterior humeral line should bisect capitellum

Q4: What neurovascular complication is most common?
A: Anterior interosseous nerve (AIN) involvement causing weak thumb IP/index FDP

Q5: If neurovascular compromise post-reduction, what do you do?
A: Usually resolve with reduction/extension of elbow (relieving traction on structures); if persists, explore surgically

### Case 2: Colles Fracture
**Scenario**: 60-year-old postmenopausal woman with Colles fracture; marked dorsal displacement and dorsal angulation.

Q1: What is the typical deformity pattern?
A: Dorsal displacement + dorsal angulation + radial deviation (fork deformity)

Q2: Reduction maneuvers in sequence?
A: (1) Apply traction (relieves spasm), (2) Pronate forearm (reverses pronation deformity), (3) Flex wrist (reverses dorsal angulation)

Q3: What radiographic parameters verify good reduction?
A: Radial inclination (22-23°), radial bow, radial height, no articular step-off

Q4: Why is loss of reduction common in this fracture?
A: Osteoporosis (poor bone quality), metaphyseal location (less stable), gravity/muscle forces

Q5: When should you consider percutaneous pinning?
A: If unstable reduction or loss of reduction within 1-2 weeks despite immobilization

### Case 3: Femoral Shaft Fracture
**Scenario**: 45-year-old with femoral shaft fracture; strong hip muscles causing flexion, abduction, and external rotation deformities.

Q1: Initial management before reduction?
A: Apply continuous traction (Buck's or Russell traction) to relieve muscle spasm; allow gravity to assist

Q2: Reduction maneuvers?
A: (1) Apply longitudinal traction, (2) Adduct limb (correct abduction), (3) Internally rotate (correct external rotation), (4) Correct angulation

Q3: How to verify rotation is corrected?
A: Compare knee patella position and hip rotation to opposite leg (should be symmetric)

Q4: Why might you choose operative fixation?
A: Loss of reduction risk, patient mobility needs, polytrauma, neurovascular compromise

Q5: If closed reduction fails after 2-3 attempts?
A: Open reduction with internal fixation (ORIF) using intramedullary nail or plate

## Knowledge-Based Questions

Q1: What is the "deforming force" concept?
A: Muscles or gravity causing displacement of distal fragment; reduction must reverse this force

Q2: Why is muscle spasm worse in delayed fractures?
A: Sustained contraction with ischemia; requires stronger force/traction to overcome

Q3: What is "soft tissue interposition"?
A: Muscle, ligament, or neurovascular structure caught in fracture site preventing reduction

Q4: Three-point fixation prevents what two things?
A: Angulation (bending) and rotation

Q5: True/False: All fractures with loss of reduction require surgery?
A: False - some can be re-reduced and re-immobilized (depends on fracture type, stability)

## Challenge Questions

Q1: A supracondylar fracture is reduced but neurovascular exam shows absent radial pulse. What's your next action?
A: Extend elbow (may decompress vessels); if pulse returns, it was traction-related. If not: Explore for vessel injury

Q2: Femoral shaft fracture in traction for 2 weeks; radiographs show persistent angular deformity. Options?
A: (1) Adjust traction vector, (2) ORIF for definitive alignment

Q3: Colles fracture: Loss of reduction at 1 week despite adequate immobilization. Osteoporosis noted. Next step?
A: Percutaneous pinning (provides additional stability) or plate fixation

Q4: Elderly patient with unstable ankle fracture. Reduction attempts unsuccessful due to soft tissue swelling. Management?
A: Elevation, delayed reduction after swelling subsides (24-48h), or ORIF

Q5: How would you distinguish between inadequate reduction and loss of reduction?
A: Inadequate: Poor alignment on first post-reduction films. Loss: Initial good alignment, then displacement on follow-up films`,
        mnemonics: [
          {
            text: "SERF (Supracondylar: Extend, Rotate internally, Flex)",
            explanation: "Sequence for supracondylar reduction"
          },
          {
            text: "CPF (Colles: Pronate, Flex)",
            explanation: "Traction, Pronate forearm, Flex wrist"
          }
        ],
        keyPoints: [
          "Each fracture has specific deforming force; reduction reverses it",
          "Traction essential for spasm relief and reduction assistance",
          "Neurovascular status critical pre- and post-reduction",
          "Loss of reduction indicates need for surgery or repeat reduction",
          "Radiographic confirmation mandatory; follow-up films at 1-2 weeks"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Ch 2", edition: "6th" },
          { book: "SRB Manual", chapter: "Fracture Reduction", edition: "Latest" }
        ]
      }
    ]
  }
];
