import type { TopicLessons } from "./content-loader";

export const orthopedicsLessonsPartEight: TopicLessons[] = [
  {
    topicCode: "OR-MOD-02-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "hand-injuries-layer-1-foundation",
        title: "Hand Injuries - Foundation",
        estimatedMinutes: 20,
        summary: "Epidemiology, anatomy, and classification of scaphoid and tendon injuries.",
        contentMd: `# Hand Injuries - Foundation

## Scaphoid Fracture Epidemiology
- **Frequency**: Most common carpal bone fracture (60-70% of carpal fractures)
- **Age**: Young adults (15-30 years), occurs in all ages
- **Mechanism**: Fall on outstretched hand (FOOSH), direct trauma
- **Gender**: More common in males (sports, occupational injuries)
- **Complications**: Non-union (5-10%), AVN (10-25%), Post-traumatic OA

## Scaphoid Anatomy
- **Scaphoid**: Largest carpal bone, boat-shaped
- **Waist**: Narrowest portion (70% of fractures occur here)
- **Blood supply**: Primarily dorsal (retrograde to proximal pole)
- **Location**: Radial wrist, crosses wrist joint
- **Articulation**: Radiocarpal, intercarpal joints

## Classification of Scaphoid Fractures

### By Location (Prognosis)
1. **Distal pole**: 20% of fractures
   - Best blood supply (multiple dorsal branches)
   - Fastest healing (6-8 weeks)
   - Lowest complication rate (<5%)

2. **Waist**: 70% of fractures (most common)
   - Critical zone with precarious blood supply
   - Highest non-union risk (delayed healing)
   - Healing time 10-12 weeks or longer
   - Risk of pseudarthrosis if displaced

3. **Proximal pole**: 10% of fractures
   - Poorest blood supply (retrograde only)
   - Highest AVN risk (20-30%)
   - Slowest healing (12-16+ weeks)
   - Often requires surgical intervention

### By Displacement
- **Undisplaced**: <2 mm displacement or angulation
- **Displaced**: >2 mm displacement or >20° angulation

## Clinical Features of Scaphoid Fracture
- **Pain**: Radial-sided wrist pain, worse with activity
- **Swelling**: Radial wrist swelling (may be subtle)
- **Limited motion**: Especially radial deviation, wrist extension
- **Physical exam**:
  - **Anatomical snuffbox tenderness**: Classic finding (between EPL and EPB tendons)
  - **Scaphoid compression test**: Axial loading of thumb
  - **Crepitus**: May indicate non-union

## Tendon Injuries Overview

### Hand Flexor Tendons (Extrinsic)
- **FDP** (Flexor Digitorum Profundus): Flexes DIP joint (distal phalanx insertion)
- **FDS** (Flexor Digitorum Superficialis): Flexes PIP joint (middle phalanx insertion)
- **FPL** (Flexor Pollicis Longus): Flexes thumb IP joint
- **FCU** (Flexor Carpi Ulnaris): Wrist flexor

### Hand Extensor Tendons (Extrinsic)
- **EDC** (Extensor Digitorum Communis): Extends MCP, PIP, DIP joints
- **EPL** (Extensor Pollicis Longus): Extends thumb IP and MCP joints
- **EPB** (Extensor Pollicis Brevis): Extends thumb CMC and MCP joints
- **EDM** (Extensor Digiti Minimi): Extends 5th finger

### Verdan Zone Classification (Flexor Zones)
- **Zone I**: Distal to FDS insertion (fingertip to A4 pulley)
- **Zone II**: A1 pulley to origin of FDS (flexor sheath)
- **Zone III**: FDS origin to wrist crease
- **Zone IV**: Wrist (carpal tunnel region)
- **Zone V**: Forearm proximal to wrist

## Clinical Features of Tendon Injury
- **Loss of active motion**: Cannot actively move joint (tendon function lost)
- **Preserved passive motion**: Gravity or examiner can move joint passively
- **Deformity**: Claw hand (loss of flexion), loss of extension
- **Mechanism**: Laceration, crush injury, ischemia, attrition (chronic friction)
- **Timing**: Acute (hours) vs chronic (months/years for attrition)`,
        mnemonics: [
          { text: "Scaphoid Location Healing: DWP", explanation: "Distal (best), Waist (worst non-union), Proximal (worst AVN)" },
          { text: "Scaphoid Diagnosis: SNB", explanation: "Snuffbox tenderness, Normal X-ray initially, Bone scan/CT confirms" },
          { text: "Flexor Zones: I-V Distal to Proximal", explanation: "Zone II worst (friction, adhesions)" }
        ],
        keyPoints: [
          "Scaphoid most common carpal fracture; waist location highest non-union risk",
          "Anatomical snuffbox tenderness suggests scaphoid fracture even if X-ray normal",
          "Distal scaphoid heals best; proximal pole high AVN risk",
          "Flexor tendon Zone II most difficult for repair",
          "Loss of active motion indicates tendon injury; passive motion preserved"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Hand Injuries", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Hand Injuries", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "hand-injuries-layer-2-mechanism",
        title: "Hand Injuries - Pathophysiological Mechanisms",
        estimatedMinutes: 25,
        summary: "Blood supply, healing, and complication mechanisms in scaphoid and tendon injuries.",
        contentMd: `# Hand Injuries - Pathophysiological Mechanisms

## Scaphoid Blood Supply and Complications

### Arterial Supply Pattern
- **Distal pole**: Rich supply (multiple branches from radial artery)
- **Waist**: Mixed supply (dorsal main branch, some palmar contribution)
- **Proximal pole**: Retrograde supply ONLY (from distal fragment via dorsal branch)

### Mechanism of AVN in Proximal Pole
1. **Retrograde supply**: Proximal pole entirely dependent on distal fragment blood supply
2. **Fracture disrupts vessels**: Disrupts retrograde flow
3. **Immediate ischemia**: Proximal fragment becomes avascular
4. **Osteonecrosis timeline**: Develops over months (late radiographic finding 6-12 months)
5. **Collapse phase**: Weakened bone collapses under weight-bearing
6. **Post-traumatic OA**: Progressive degeneration of wrist joint

### Mechanism of Non-union (Waist Fractures)
1. **Initial fracture gap**: Displaced fracture creates space
2. **Poor blood supply**: Waist has modest vascularity
3. **Pseudarthrosis development**: False joint develops across gap
4. **Loss of bridging**: No bony bridging across fracture site
5. **Chronic instability**: Fracture gap moves; prevents healing
6. **Result**: Chronic pain, weakness, wrist dysfunction

## Tendon Healing Mechanisms

### Intrinsic Healing
- **Cell source**: Cells from tendon proper (fibroblasts)
- **Process**: Minimal inflammatory response; collagen deposition
- **Advantage**: Can heal without extrinsic inflammation
- **Timing**: Occurs in parallel with extrinsic healing

### Extrinsic Healing
- **Cell source**: Surrounding tissues (paratenon, epitenon, synovial sheath)
- **Inflammatory phase**: Macrophages, PMNs; neovascularization
- **Result**: Stronger initial healing but more scar tissue
- **Adhesions**: Excessive inflammation → adhesions → joint stiffness
- **Balance needed**: Enough inflammation for healing strength, but controlled to minimize adhesions

### Tendon Healing Phases
| Phase | Timeline | Events | Strength |
|-------|----------|--------|----------|
| Inflammatory | 0-3 days | Fibrin formation, cell infiltration | Very low |
| Early fibroblast | 3-7 days | Collagen deposition begins | Low |
| Collagen phase | 2-3 weeks | Rapid collagen synthesis | Increasing |
| Remodeling | 3-6 months | Collagen cross-linking, maturation | Approaching peak |
| Maturation | 6-12 months | Final remodeling, maximum strength | Peak reached |

### The Critical 3-6 Week "Danger Zone"
- **Mechanism**: Collagen breakdown phase overlaps synthesis phase
- **Result**: Tensile strength at LOWEST point (may be <50% of normal)
- **Clinical significance**: HIGHEST RE-RUPTURE RISK if stress applied
- **Management implications**: Protected motion protocol essential; patient must restrict load

## Factors Affecting Tendon Healing

### Vascular Supply
- **Well-vascularized zones** (III-V proximal): Faster healing
- **Poorly vascularized zones** (II within sheath): Slower, more complications
- **Zone I**: Dependent on small vessels; tenuous

### Zone of Injury (Verdan Zones)
- **Zone I (distal)**: Small area, difficult; outcomes moderate
- **Zone II (within sheath)**: HIGH FRICTION, high adhesion risk; most difficult
- **Zones III-IV (wrist)**: Better outcomes, less friction
- **Zone V (forearm)**: Best outcomes, most proximal

### Infection Risk
- **Contaminated wounds**: Delay repair or secondary repair
- **Infection impairs healing**: Disrupts collagen deposition, increases inflammation
- **Clean wounds**: Primary repair safer

### Immobilization Effects
- **Complete immobilization**: Prevents adhesions but causes stiffness, joint contracture
- **Early motion**: Prevents adhesions, maintains gliding, but must be protected
- **Optimal approach**: Protected early motion (controlled load, supervised)`,
        mnemonics: [
          { text: "Scaphoid Healing: Distal Fast, Waist Risk, Proximal AVN", explanation: "Distal best prognosis; Waist non-union; Proximal AVN" },
          { text: "Tendon Danger Zone: 3-6 Weeks", explanation: "Lowest strength; highest re-rupture risk" },
          { text: "Tendon Zones: I hardest, II worst, III-V best", explanation: "Zone I small area; Zone II high friction; Zones III-V proximal" }
        ],
        keyPoints: [
          "Proximal scaphoid retrograde blood supply only; fracture causes ischemia/AVN",
          "Non-union occurs when fracture gap prevents bony bridging; pseudarthrosis develops",
          "Tendon healing: intrinsic (fibroblasts) vs extrinsic (inflammation + adhesions)",
          "3-6 week danger zone: lowest strength; re-rupture risk highest with stress",
          "Early motion improves tendon gliding; complete immobilization causes stiffness"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Hand Injuries", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Hand Injuries", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "hand-injuries-layer-3-clinical",
        title: "Hand Injuries - Clinical Management",
        estimatedMinutes: 25,
        summary: "Diagnosis and management of scaphoid fractures and tendon injuries with outcome optimization.",
        contentMd: `# Hand Injuries - Clinical Management

## Scaphoid Fracture Management

### Initial Assessment
- **History**: Mechanism (FOOSH), timing, hand dominance
- **Examination**: Snuffbox tenderness, pain with axial thumb loading
- **Imaging**: X-ray (AP, lateral, scaphoid views), CT/MRI if inconclusive

### Undisplaced Scaphoid Fracture

**Conservative Treatment**:
1. **Immobilization**:
   - **Distal pole**: Short arm thumb spica cast/splint 6-8 weeks
   - **Waist**: Long arm thumb spica 4-6 weeks, then short arm 6-8 weeks total
   - **Proximal**: Long arm cast 12-16 weeks (or ORIF preferred)

2. **Follow-up Imaging**:
   - **Initial X-rays**: May be negative (undisplaced, no resorption yet)
   - **Repeat X-rays**: 10-14 days (fracture line visible from resorption at fracture margins)
   - **Serial X-rays**: 4, 8, 12 weeks to monitor healing

3. **Criteria for Union**:
   - Fracture line obliteration (no visible fracture line)
   - Bridging callus (bone bridging across fracture site)
   - Clinical union (painless, tender; pain-free movement)

4. **Return to Activity**:
   - **Light duty**: 6-8 weeks
   - **Sport/heavy activities**: 3-4 months (confirm radiographic union first)
   - **Imaging confirmation required**: X-ray shows union before resuming high-impact activities

### Displaced Scaphoid Fracture

**Surgical Management** (Preferred):
1. **ORIF** (Open Reduction, Internal Fixation):
   - **Approach**: Volar or dorsal depending on fracture location
   - **Fixation**: Percutaneous screw (cannulated, headless screw preferred)
   - **Positioning**: Screw placed from distal to proximal, or distal pole screw

2. **Advantages of ORIF**:
   - Early mobilization (days to weeks)
   - Better alignment, lower non-union risk
   - Shorter immobilization period

3. **Post-operative**:
   - Immobilization: 4-6 weeks
   - ROM exercises: Begin by week 3-4
   - Return to activity: 8-12 weeks

### Non-union Management

**Established Non-union** (>6 months without healing):
1. **ORIF with bone graft**:
   - **Bone graft source**: Cancellous bone from iliac crest
   - **Technique**: Open approach, remove scar tissue, pack graft into gap
   - **Compression screw**: Ensure compression at fracture site

2. **Post-operative**:
   - Immobilization: 6-8 weeks
   - Follow-up X-rays: 4, 8, 12 weeks
   - Success rate: 90-95% with proper technique

### AVN Management

**Early AVN** (<50% proximal pole involved):
- **Vascularized bone graft**: Restore blood supply (complex surgery)
- **Success**: Good if done early, before collapse

**Established AVN** (>50% or with collapse):
- **Proximal row carpectomy**: Salvage procedure (remove proximal row bones)
- **Wrist fusion**: If severe arthritis develops
- **Outcome**: Pain relief but reduced wrist motion

## Tendon Injury Management

### Primary Flexor Tendon Repair

**Criteria for Primary Repair**:
1. **Timing**: Within 3-6 weeks of injury
2. **Wound condition**: Clean, non-contaminated
3. **Vascularity**: Adequate blood supply to allow healing
4. **Patient factors**: Compliance with rehabilitation protocol

**Surgical Technique**:
1. **Exposure**: Careful opening, preserve vital structures
2. **Identification**: Find both tendon ends
3. **Cleaning**: Remove devitalized tissue
4. **Repair technique**:
   - **Core suture**: 4-6 strand (Kessler knot, Tsuge, Pennington)
   - **Epitenon suture**: Running suture on surface for strength/gliding
   - **Tension critical**: Too tight → dysfunction; too loose → weakness

**Rehabilitation Protocol**:
1. **Protected early motion** (Start POD #3-5):
   - **Duran protocol**: Controlled passive motion within safe ROM
   - **Washington regimen**: Low-load passive motion
   - **Load**: Minimal to prevent rupture
   - **Supervision**: PT-guided motion

2. **Progression**:
   - **Weeks 3-4**: Protected passive motion
   - **Weeks 4-6**: Active motion begins (within protected ROM)
   - **Weeks 6+**: Progressive strengthening
   - **Return to function**: 8-12 weeks

**Outcomes by Zone**:
| Zone | Difficulty | Outcome | Adhesion Risk |
|------|-----------|---------|---------------
| I | Difficult | Moderate | Moderate |
| II | Most difficult | Guarded | HIGH |
| III-IV | Moderate | Good | Low-moderate |
| V | Easiest | Excellent | Low |

### Primary Extensor Tendon Repair

**Timing**:
- **Primary**: Within 6-8 hours of injury
- **Delayed primary**: 24-48 hours after wound care
- **Secondary**: After 3-4 weeks (if primary not feasible)

**Surgical Technique**:
1. **Advantages**: Superficial, simpler anatomy than flexors
2. **Repair**: 3-4 core sutures + epitenon suture
3. **Tension**: Must be precise (critical for extensor)

**Rehabilitation**:
1. **Immobilization**: 3-4 weeks in extension position
2. **Controlled mobilization**: Begins weeks 4-5
3. **Return to function**: Slower than flexors (8-12 weeks)
4. **Outcomes**: Better than flexors (fewer adhesions)

### Chronic/Attrition Ruptures

**Mechanism**:
- Chronic friction on sharp bone fragment (post-fracture)
- Example: Rheumatoid arthritis with erosions

**Management**:
1. **Two-stage approach**:
   - **Stage 1**: Fix underlying cause (reduce bone fragment, stabilize fracture)
   - **Stage 2**: Wait for tissue healing, then repair tendon

2. **Reconstruction if repair not possible**:
   - **Tendon transfer**: Use adjacent tendon (EIP for index FDP)
   - **Staged procedures**: Remove adhesions, place spacer, graft later

### Complications and Prevention

**Common complications**:
1. **Stiffness**: From adhesions (extrinsic healing)
2. **Re-rupture**: If stress applied during danger zone
3. **Functional deficit**: Weakness, loss of motion
4. **Infection**: Contaminated wounds

**Prevention**:
- Prompt appropriate repair
- Protected early motion (controlled)
- Compliance with rehabilitation
- Staged procedures if needed`,
        mnemonics: [
          { text: "Scaphoid Immobilization: 6-12 weeks", explanation: "Distal 6-8, Waist 10-12, Proximal 12-16 or surgery" },
          { text: "Tendon Repair Sutures: 4-6 strands", explanation: "More strands = stronger repair, earlier motion possible" },
          { text: "Flexor Repair Zones: I hard, II worst, III-V best", explanation: "Zone II (friction) most difficult" }
        ],
        keyPoints: [
          "Undisplaced scaphoid: immobilization 6-12 weeks based on location; repeat X-ray in 10-14 days",
          "Displaced scaphoid: ORIF preferred (earlier mobilization, lower non-union risk)",
          "Non-union after 6 months: ORIF with cancellous bone graft; 90-95% success",
          "Flexor tendon: 4-6 strand core suture, epitenon, protected early motion",
          "Danger zone 3-6 weeks: lowest strength; mobilization must be protected/controlled"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Hand Injuries", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Hand Injuries", edition: "10th" }
        ]
      },
      {
        layer: 4,
        slug: "hand-injuries-layer-4-exam",
        title: "Hand Injuries - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield exam scenarios and case-based decision making.",
        contentMd: `# Hand Injuries - Exam Preparation

## High-Yield Facts Summary

### Scaphoid Fractures
1. **Most common carpal bone fracture** (60-70%)
2. **Location frequency**: Distal (20%), Waist (70%), Proximal (10%)
3. **Clinical sign**: Anatomical snuffbox tenderness
4. **Imaging**: Initial X-ray often negative; repeat 10-14 days
5. **Complications**: Non-union (5-10%), AVN (10-25%)
6. **Blood supply**: Distal rich, Waist moderate, Proximal retrograde only
7. **Non-union**: Highest in waist (70% of cases)
8. **AVN**: Highest in proximal pole (20-30% risk)
9. **Treatment**: Distal/undisplaced conservative; waist/proximal ORIF often preferred

### Tendon Injuries
1. **Verdan zones I-V**: I smallest/distal to V largest/proximal
2. **Zone II worst**: High friction, highest adhesion risk
3. **Danger zone**: 3-6 weeks (lowest tensile strength)
4. **Primary repair criteria**: <3-6 weeks, clean wound, good vascularity
5. **Repair technique**: 4-6 strand core suture + epitenon suture
6. **Protected early motion**: Begin POD #3-5 to prevent adhesions
7. **Outcomes**: Zone I moderate, Zone II guarded, Zones III-V good-excellent

## Case Scenarios

### Case 1: Acute Scaphoid Fracture
**Scenario**: 22-year-old falls on outstretched hand. Snuffbox tenderness. X-rays appear normal.

**Diagnosis**: **Clinical scaphoid fracture** (snuffbox tenderness is classic; initial X-rays negative in undisplaced fractures)

**Management**:
1. **Immobilize**: Short arm thumb spica cast (6-8 weeks for presumed distal)
2. **Repeat X-rays**: 10-14 days (fracture line becomes visible)
3. **Confirm location**: Once visible, adjust immobilization duration based on location
4. **Serial follow-up**: X-rays at 4, 8, 12 weeks
5. **Return to activity**: Confirm radiographic union before high-impact activities

**Key teaching point**: Never miss scaphoid fracture on snuffbox tenderness alone; always treat clinically even if X-ray negative initially.

### Case 2: Non-union of Scaphoid
**Scenario**: 8 months post-scaphoid fracture, pain persists, X-ray shows gap.

**Diagnosis**: **Scaphoid non-union** (pseudarthrosis)

**Management**:
1. **ORIF with bone graft**:
   - Open approach (volar or dorsal)
   - Remove scar tissue/pseudarthrosis debris
   - Pack cancellous bone graft into gap
   - Compress with screw fixation

2. **Post-operative**:
   - Immobilize 6-8 weeks
   - Follow-up X-rays at 4, 8, 12 weeks
   - Expected success: 90-95%

**Key teaching point**: Non-union requires surgical intervention; conservative management fails.

### Case 3: Acute Flexor Tendon Laceration in Zone II
**Scenario**: 25-year-old acute laceration of finger at palm level (flexor sheath). Clean wound.

**Diagnosis**: **Acute flexor tendon injury, Zone II-III** (or Zone III depending on exact level)

**Management**:
1. **Assessment**: Confirm clean wound, adequate vascularity
2. **Timing**: Primary repair feasible (within 3-6 weeks)
3. **Surgical repair**:
   - Careful exposure
   - Identify both tendon ends
   - 4-6 strand core suture (Kessler knot)
   - Epitenon running suture
   - Test repair for tension (no gapping, smooth gliding)

4. **Immobilization**: Cast 3-5 days, then begin protected early motion

5. **Rehabilitation**:
   - **Duran protocol**: Controlled passive motion POD #3-5
   - **Progressive**: Active motion weeks 4-6, strengthening weeks 6-12
   - **Timeline**: Return to function 8-12 weeks

6. **Expected outcome**: Zone III better than Zone II (less friction); 70-80% good-excellent

### Case 4: Patient Over-exercises During Danger Zone
**Scenario**: 2 weeks post-flexor tendon repair. Patient feels stronger, starts aggressive exercises.

**Problem**: **Danger zone (3-6 weeks)**: Tensile strength at LOWEST point

**Management**:
1. **Explain danger zone**: Strength misleading; weakness is real
2. **Restrict activities**: NO active loading during weeks 3-6
3. **Continue protected motion**: Passive ROM only, supervised PT
4. **Prevent rupture**: Strict compliance essential
5. **Progression**: Only after week 6 can increase load
6. **Counseling**: Patients often want to "exercise harder" when feeling better; must explain danger`,
        mnemonics: [
          { text: "Scaphoid Immobilization: Distal 6-8, Waist 10-12, Proximal 12-16", explanation: "Or ORIF for proximal/displaced" },
          { text: "Tendon Repair: 4-6 strands + epitenon", explanation: "Core suture strength, epitenon for gliding" },
          { text: "Danger Zone: 3-6 weeks, Lowest strength", explanation: "Must restrict loading; highest re-rupture risk" }
        ],
        keyPoints: [
          "Snuffbox tenderness + normal X-ray = treat as scaphoid fracture; repeat in 10-14 days",
          "Non-union after 6 months: ORIF with bone graft; 90-95% success",
          "Flexor tendon Zone II: most difficult due to friction; expert repair needed",
          "Primary repair: <3-6 weeks, clean wound, adequate vascularity",
          "Danger zone 3-6 weeks: protected motion essential; patient education critical"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Hand Injuries", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Hand Injuries", edition: "10th" }
        ]
      },
      {
        layer: 5,
        slug: "hand-injuries-layer-5-active-recall",
        title: "Hand Injuries - Active Recall",
        estimatedMinutes: 10,
        summary: "Key Q&A for mastering hand injury diagnosis and management.",
        contentMd: `# Active Recall - Hand Injuries

**Q1**: A patient has anatomical snuffbox tenderness and normal initial X-rays. How would you diagnose and manage?

**A1**: **Diagnosis**: Clinical scaphoid fracture. Snuffbox tenderness is classic sign; initial X-rays often negative in undisplaced fractures (no bone resorption yet). **Management**: (1) Immobilize with thumb spica cast (short arm, 6-8 weeks assuming distal). (2) Repeat X-rays 10-14 days (fracture line becomes visible from resorption at margins). (3) Once fracture confirmed and location identified, adjust immobilization duration (distal 6-8 weeks, waist 10-12 weeks, proximal 12-16 weeks). (4) Serial X-rays every 4 weeks to confirm healing. (5) Return to activity only after radiographic union confirmed.

**Q2**: Explain the difference in blood supply between distal, waist, and proximal scaphoid poles. How does this affect outcomes?

**A2**: **Distal pole**: Rich blood supply (multiple dorsal and palmar branches), fastest healing (6-8 weeks), lowest complication rate (<5%). **Waist**: Mixed blood supply (dorsal main, some palmar), moderate vascularity, 70% of non-unions occur here (highest non-union risk), healing 10-12 weeks. **Proximal pole**: RETROGRADE blood supply ONLY (from distal pole via dorsal branch), fracture isolates proximal fragment → ischemia → AVN risk 20-30%, highest complication rate. **Clinical significance**: Distal fractures best prognosis; proximal worst. Proximal fractures often require ORIF to prevent complications.

**Q3**: A scaphoid non-union is diagnosed 8 months post-fracture. Describe the surgical management and expected outcomes.

**A3**: **Problem**: Non-union = >6 months without bony union; pseudarthrosis (false joint) develops. **Surgical management**: (1) **ORIF**: Open Reduction, Internal Fixation approach (volar or dorsal). (2) **Remove scar tissue**: Clean out fracture gap, remove pseudarthrosis debris. (3) **Bone graft**: Cancellous autograft from iliac crest, packed into gap to bridge fracture. (4) **Compression fixation**: Cannulated screw across fracture to ensure compression while healing. (5) **Post-op immobilization**: Cast 6-8 weeks. (6) **Follow-up X-rays**: 4, 8, 12 weeks to confirm union. **Outcomes**: 90-95% union rate with proper technique. Success factors: compression fixation, bone graft quality, adequate immobilization, patient compliance.

**Q4**: Compare primary vs delayed primary vs secondary tendon repair. When is each indicated?

**A4**: **Primary repair**: Performed within 6-8 hours (up to 24 hours) of injury. **Indications**: Clean wound, good vascularity, patient commitment to rehabilitation. **Advantages**: Best outcomes, earlier mobilization, prevents retraction. **Delayed primary**: 24-48 hours after initial wound care. **Indications**: Wound needs cleaning, but repair attempted before fibrosis (within 3-4 weeks). **Secondary repair**: After 3-4 weeks. **Indications**: Primary not feasible, wound contaminated, delayed diagnosis. **Advantages**: Lower infection risk, wound healed. **Disadvantages**: More scarring, stiffer outcomes. **Zone impact**: Zone II (worst friction) often delayed; Zones III-V better for primary. **Key principle**: Early repair (primary/delayed primary) within 3-6 weeks best outcomes.

**Q5**: Explain the 3-6 week "danger zone" in tendon healing. What happens and how is it managed?

**A5**: **Mechanism**: During 3-6 weeks, collagen breakdown phase overlaps with synthesis phase. **Result**: Tensile strength at LOWEST point (may be <50% of normal). **Clinical significance**: HIGHEST RE-RUPTURE RISK if stress/load applied during this period. **What happens**: Patient becomes overconfident, overloads tendon thinking it's healed, rupture occurs → failure of repair, return to surgery. **Management (Protected Motion Protocol)**: (1) **Immobilization NOT complete** (prevents stiffness), (2) **Controlled passive motion**: Supervised PT-guided motion within protected ROM (e.g., Duran protocol), (3) **Patient cannot actively contract tendon** (supervised passive motion only), (4) **No load stress**: Zero external resistance, (5) **By week 6**: Strength improving, can transition to active motion. **Benefits**: Early motion prevents adhesions (maintains gliding), preserves joint mobility, yet controlled loads prevent rupture. **Patient education critical**: Many patients don't understand why they can't exercise more during "danger zone"; must explain pathophysiology.

**Q6**: A 25-year-old has acute laceration of flexor tendons at the palm level (Zone III-IV). Discuss primary repair technique and rehabilitation.

**A6**: **Assessment**: (1) Confirm clean wound, adequate vascularity, (2) Patient commitment to rehabilitation. **Surgical repair**: (1) **Exposure**: Careful opening via appropriate incision, preserve vital structures. (2) **Identification**: Locate both tendon ends (FDS and FDP). (3) **Cleaning**: Remove devitalized tissue. (4) **Repair technique**: 4-6 strand core suture (Kessler knot, Tsuge, or Pennington) for strength, epitenon running suture for gliding. (5) **Tensioning**: Critical - too tight causes dysfunction, too loose causes weakness; test for appropriate tension and no gapping. **Rehabilitation**: (1) **Protected early motion protocol** (Duran): Start POD #3-5 with controlled passive motion in safe ROM. (2) **Progression**: Active motion begins week 4-6, strengthening week 6-12. (3) **Danger zone**: Strictly protected motion weeks 3-6. (4) **Return to function**: Expected 8-12 weeks. **Outcomes**: Zone III-IV better than Zone II (less friction); 70-80% good/excellent expected.

**Q7**: Distinguish between attrition rupture and traumatic tendon rupture. How does management differ?

**A7**: **Traumatic rupture**: Acute laceration/trauma → immediate rupture. Acute presentation, known injury time. **Attrition rupture**: Chronic friction on rough bone surface (post-fracture bony prominence, rheumatoid erosions) → gradual rupture over months. Patient may not recall specific acute injury; progressive loss of flexion. **Management difference**: (1) **Traumatic**: Primary/delayed primary repair possible if <3-6 weeks, clean wound. (2) **Attrition**: FIRST must fix underlying bone problem (remove rough fragment, reduce fracture, stabilize), THEN repair tendon. If tendon repair done BEFORE fixing bone, will re-rupture from continued friction. (3) **Reconstruction if repair not possible**: May use EIP (Extensor Indicis Proprius) transfer or staged procedures. **Key point**: Attrition requires two-stage management (fix underlying cause first, then repair).

**Q8**: A patient is 2 weeks post-flexor tendon repair and eager to use the hand aggressively. Is this safe?

**A8**: **Timeline**: 2 weeks = middle of danger zone, tensile strength still VERY LOW (<50% normal). **Patient desire**: Natural to want function, but PREMATURE LOADING = RUPTURE RISK. **Management**: **NO unrestricted activity**. (1) **Protected early motion essential**: Only controlled passive motion, supervised PT. (2) **Passive only**: PT moves tendon gently, patient cannot actively contract. (3) **No load**: Zero resistance. (4) **Supervision required**: PT controls motion, prevents overload. (5) **Timing**: By week 4-6, can begin active motion within protected ROM. (6) **Week 8-12**: Progressive strengthening as tensile strength increases. **Explanation to patient**: "Patience critical. Rupture during danger zone means failure of repair and return to surgery. Your hand feels better but is still weak." **Key message**: Balancing act - early motion prevents stiffness but must be controlled.`,
        mnemonics: [
          { text: "Scaphoid Zones: Distal Fast, Waist Risk, Proximal AVN", explanation: "Distal best; Waist non-union; Proximal AVN" },
          { text: "Tendon Zones: I hardest, II worst, III-V best", explanation: "Zone II friction worst; Zones III-V proximal" },
          { text: "Danger Zone: 3-6 Weeks, Lowest Strength", explanation: "Must restrict loading; highest rupture risk" }
        ],
        keyPoints: [
          "Snuffbox tenderness + normal X-ray = treat as scaphoid; repeat X-ray in 10-14 days",
          "Scaphoid distal best healing; waist highest non-union risk; proximal highest AVN risk",
          "Non-union after 6 months: ORIF with bone graft; 90-95% success",
          "Flexor tendon Zone II: most difficult (friction); requires expert repair",
          "Danger zone 3-6 weeks: protected motion only; patient education essential"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Hand Injuries", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Hand Injuries", edition: "10th" }
        ]
      }
    ]
  }
];
