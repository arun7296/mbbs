import type { TopicLessons } from "./content-loader";

export const orthopedicsPart6Lessons: TopicLessons[] = [
  {
    topicCode: "OR-MOD-03-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "femur-fractures-layer-1-foundation",
        title: "Femur Fractures - Foundation",
        estimatedMinutes: 20,
        summary: "Epidemiology, anatomy, and classification of femoral fractures by location and displacement.",
        contentMd: `# Femur Fractures - Foundation

## Epidemiology
- **Incidence**: 1 per 1000 population/year in elderly
- **Gender**: Female > Male (3:1 after age 60 due to osteoporosis)
- **Mechanism**: High-energy trauma (younger), minimal trauma (elderly falls)
- **Mortality**: 15-20% within 1 year of hip fracture in elderly
- **Indian context**: Rising incidence due to aging population

## Femoral Fracture Types by Location

### Femoral Neck Fractures
- **Location**: Between femoral head and greater trochanter
- **Incidence**: 50% of hip fractures
- **Intracapsular**: Medial to capsular attachment; higher AVN risk
- **Extracapsular**: Lateral to capsule; better prognosis
- **Garden Classification**:
  - Grade 1: Incomplete (stress fracture)
  - Grade 2: Complete but undisplaced
  - Grade 3: Displaced <50%
  - Grade 4: Complete displacement (>50%)

### Intertrochanteric Fractures
- **Location**: Between greater and lesser trochanter
- **Incidence**: 45% of hip fractures
- **Extracapsular**: Better blood supply, lower AVN risk
- **Evans classification**: Type I (stable) to Type IV (unstable, 4-part)
- **Key feature**: Significant medial comminution predicts instability

### Subtrochanteric Fractures
- **Location**: Below lesser trochanter (within 5 cm)
- **Incidence**: 5-10% of hip fractures
- **High-energy injury**: More common in younger patients
- **Instability**: Significant medial angulation forces from hip adductors

### Femoral Shaft Fractures
- **Mechanism**: High-energy trauma (RTA, fall from height)
- **Age**: Any age
- **Classification**: Transverse, oblique, comminuted, segmental
- **Associated injuries**: Femoral artery injury (2-5%), compartment syndrome

## Clinical Features
- **Pain**: Groin or hip pain (neck), thigh pain (shaft)
- **Mobility**: Unable to bear weight
- **Limb position**: External rotation, apparent shortening (if displaced)
- **Deformity**: May not be obvious in undisplaced fractures
- **Neurovascular**: Assess sensation, pulses distal to fracture

## Initial Assessment
### History
- Mechanism of injury (fall, trauma)
- Timing of injury
- Associated injuries
- Comorbidities
- Mobility status before injury

### Examination
- Inspect: Deformity, shortening, swelling, bruising
- Palpate: Tenderness, crepitus
- Neurovascular: Distal pulses, sensation, motor function
- Assess pain, ROM (limited due to pain)`,
        mnemonics: [
          { text: "Hip Fractures: NIS", explanation: "Neck (50%), Intertrochanteric (45%), Subtrochanteric (5%)" },
          { text: "Garden Grades 1-4", explanation: "Incomplete to Full displacement" }
        ],
        keyPoints: [
          "Neck = 50%, Intertrochanteric = 45%, Subtrochanteric = 5% of hip fractures",
          "Garden grading: undisplaced (1-2) vs displaced (3-4)",
          "Intracapsular = AVN risk; extracapsular = better healing",
          "Elderly: osteoporosis; Young: high-energy trauma",
          "Femoral shaft fractures associated with vascular/compartment syndrome risk"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Hip Fractures", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Femoral Fractures", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "femur-fractures-layer-2-mechanism",
        title: "Femur Fractures - Vascular Supply and Complications",
        estimatedMinutes: 25,
        summary: "Blood supply to femoral head, complications of fractures (AVN, non-union), and healing patterns.",
        contentMd: `# Femur Fractures - Vascular Supply and Complications

## Femoral Head Blood Supply
### Arterial Supply
- **Medial femoral circumflex artery (MFCA)**: Main supply (posterolateral branch)
- **Lateral femoral circumflex artery (LFCA)**: Minor contribution
- **Ligamentum teres artery**: Small contribution from round ligament
- **Critical zones**: Femoral head supplied by MFCA; disruption → ischemia

### Intracapsular vs Extracapsular Blood Supply
- **Intracapsular neck fractures**: MFCA disruption → AVN risk 30-60%
- **Extracapsular fractures**: Better blood supply → lower AVN risk
- **Timing of disruption**: Immediate vs gradual affects AVN development

## Avascular Necrosis (AVN)
### Mechanism
1. Fracture disrupts blood supply to femoral head
2. Proximal fragment becomes ischemic (no new vessels immediately)
3. Osteocyte death in proximal fragment
4. Bone architecture weakens over months
5. Collapse occurs under weight-bearing (Stage IV)

### Risk Factors for AVN
- **Displaced neck fractures** (Garden 3-4): 30-60% AVN risk
- **Delay in treatment** >24 hours
- **Inadequate reduction**: Persistent displacement
- **Age >50 years**: Poorer vascular response
- **Intracapsular location**: Higher risk than extracapsular

### Timing of AVN Development
- **Radiographic signs appear**: 6-12 months post-fracture
- **Crescent sign**: Subchondral lucency (characteristic finding on X-ray)
- **MRI**: Early detection (T2 signal loss in femoral head)
- **Clinical symptoms**: Groin pain, limp, progressive dysfunction

### Management of AVN
- **Prevention**: Early diagnosis, proper reduction, internal fixation
- **Early AVN** (<50% head involvement): Vascularized bone graft attempt
- **Established AVN**: Hemiarthroplasty (hip replacement), THA (total hip)

## Non-union and Delayed Union
### Definition
- **Delayed union**: Union not achieved by expected time but healing continues
- **Non-union**: No healing after 6 months, pseudarthrosis develops

### Incidence by Fracture Type
- **Intracapsular neck**: 15-30% non-union rate (highest)
- **Intertrochanteric**: <5% non-union rate (better blood supply)
- **Subtrochanteric**: 5-10% non-union rate
- **Femoral shaft**: <2% non-union with proper fixation

### Risk Factors for Non-union
- **Displacement**: Interferes with fracture healing
- **Poor reduction**: Persisting gap prevents bony bridging
- **Early weight-bearing**: On inadequately fixed fractures
- **Osteoporosis**: Reduces healing capacity
- **Comorbidities**: Diabetes, smoking, poor nutrition

### Healing Patterns
- **Neck fractures**: Slower (4-6 months) due to intracapsular location
- **Intertrochanteric**: Faster (8-12 weeks) due to good blood supply and cancellous bone
- **Subtrochanteric**: Slower (12-16 weeks) due to muscle forces
- **Shaft fractures**: 12-16 weeks with IM nailing`,
        mnemonics: [
          { text: "MFCA supplies femoral head; AVN from disruption", explanation: "Medial Femoral Circumflex Artery main supply" },
          { text: "AVN Risk: Garden 3-4 = 30-60%", explanation: "Displaced neck fractures highest AVN risk" }
        ],
        keyPoints: [
          "MFCA supplies femoral head; disruption in neck fractures causes AVN",
          "AVN risk: displaced neck 30-60%; undisplaced <10%",
          "Non-union: neck 15-30%; intertrochanteric <5%",
          "MRI early AVN detection; X-ray shows late findings (crescent sign)",
          "Healing: neck 4-6 months; intertrochanteric 8-12 weeks; shaft 12-16 weeks"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Hip Fractures", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Femoral Fracture Complications", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "femur-fractures-layer-3-clinical",
        title: "Femur Fractures - Management Strategies",
        estimatedMinutes: 25,
        summary: "Conservative vs surgical management, implant selection, and outcomes by fracture type.",
        contentMd: `# Femur Fractures - Management Strategies

## Neck Fractures Management

### Undisplaced (Garden 1-2)
**Conservative Management**:
- Bed rest 2-4 weeks (if high surgical risk, poor health)
- Limited evidence for conservative success

**Surgical Management** (Preferred):
- **Cannulated screws**: 3 parallel screws (gold standard)
- **Timing**: ASAP, ideally within 24 hours
- **Technique**: Percutaneous or small open incision
- **Success rate**: 90% union if properly reduced
- **Advantages**: Early weight-bearing, lower stiffness
- **Post-operative**: Weight-bearing as tolerated after fixation

### Displaced (Garden 3-4)
**Age <65 years**:
- **ORIF** (Open Reduction, Internal Fixation) with cannulated screws
- **Alternative**: Plate fixation if anatomy unfavorable
- **Reason**: Preserve femoral head, avoid hip replacement
- **AVN risk**: Still 30-60% even with proper ORIF; monitor closely

**Age >65 years**:
- **Hemiarthroplasty** (Bipolar or unipolar implant) preferred
- **Advantages**: No AVN risk, immediate weight-bearing, simpler rehabilitation
- **Disadvantage**: Implant loosening over time, revision risk
- **Success**: 85% pain-free at 2 years
- **Functional**: 50% return to prior function; 80-90% can walk with aids

**Age 65-80 (controversial)**:
- **Choice between ORIF and hemiarthroplasty** based on patient factors
- **ORIF**: If good bone quality, motivated, good compliance
- **Hemiarthroplasty**: If poor health, comorbidities, poor functional reserve

## Intertrochanteric Fractures Management

### Stable Fractures (Evans Type I)
- **Conservative**: Traction 2 weeks, then protected weight-bearing (selected elderly)
- **Surgical**: DHS (Dynamic Hip Screw) or IM nail (preferred)
- **Weight-bearing**: Protected initially; full by 8-12 weeks

### Unstable Fractures (Evans Type II-IV)
- **Gold standard**: Locked IM nail (cephalomedullary nail)
- **Advantages**: Resists medial angulation and varus collapse
- **Timing**: ASAP, within 24-48 hours
- **Success**: Union 95% at 12 weeks
- **Weight-bearing**: Full immediately (stable fixation)

### DHS vs IM Nail
- **DHS (Dynamic Hip Screw)**: Lower cost, simpler; shaft fractures uncommon with DHS
- **IM nail (Intramedullary)**: Better for unstable, subtrochanteric, reverse obliquity, comminuted
- **Both effective** if properly inserted
- **Modern trend**: IM nailing preferred for unstable fractures

## Subtrochanteric Fractures Management

### Always Surgical (High-energy, Unstable)
- **IM nail with proximal locking**: Gold standard
- **Mechanism**: Proximal locking resists medial angulation forces
- **Technique**: Retrograde or antegrade insertion with proximal + distal locking
- **Alternative**: Compression plate (95-plate, LISS plate) if IM nail not feasible
- **Weight-bearing**: Protected initially (4-6 weeks); full after 8-12 weeks
- **Healing**: Typically 12-16 weeks
- **Outcome**: 95% union with proper technique

## Femoral Shaft Fractures Management

### Operative Treatment (Gold Standard)
- **IM nailing**: Locked intramedullary nail (best outcomes)
- **Technique**: Entry point (piriformis, lateral), reaming, nail insertion, proximal + distal locking
- **Advantages**: Early mobilization, full weight-bearing, excellent union rate (95%), low infection
- **Alternative**: Plate fixation (ORIF with compression plate) if IM nail contraindicated

### Special Considerations
- **Segmental fractures**: IM nailing preserves blood supply better
- **Comminuted fractures**: IM nailing provides load-sharing
- **Pathological fractures**: IM nailing for stability

### Postoperative Protocol
- **DVT prophylaxis**: Enoxaparin 40 mg SC daily or rivaroxaban
- **Antibiotics**: 24-48 hours (cefazolin or ceftriaxone)
- **Mobilization**: Begin POD #1; ambulation with walker by POD #2-3
- **Weight-bearing**: Full weight-bearing as tolerated post-op
- **Follow-up X-rays**: 6 weeks, 3 months to assess union
- **Plate removal**: If plate fixation, consider removal after 12-18 months

## Postoperative Complications Prevention
- **Malunion**: Inadequate reduction, early mobilization; prevent by stable fixation
- **Non-union**: Ensure compression if possible, avoid early weight-bearing in at-risk patients
- **Rotational deformity**: Watch during surgery for internal/external rotation
- **Shortening**: Ensure length restoration during fixation
- **Thromboembolic**: DVT/PE risk; use prophylaxis`,
        mnemonics: [
          { text: "Displaced Neck: Age Guide", explanation: "<65 ORIF, >65 Hemiarthroplasty" },
          { text: "Unstable Intertrochanteric/Subtrochanteric: IM Nail", explanation: "Locked IM nail gold standard for unstable fractures" }
        ],
        keyPoints: [
          "Undisplaced neck: ORIF with 3 screws; 90% union",
          "Displaced neck >65 years: Hemiarthroplasty preferred (AVN risk, immediate weight-bearing)",
          "Unstable intertrochanteric: Locked IM nail; 95% union at 12 weeks",
          "Subtrochanteric: Always surgical; IM nail gold standard with proximal locking",
          "Shaft fractures: IM nailing; 95% union, early mobilization"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Hip Fracture Management", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Femoral Fracture Treatment", edition: "10th" }
        ]
      },
      {
        layer: 4,
        slug: "femur-fractures-layer-4-exam",
        title: "Femur Fractures - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Case-based management decisions and surgical problem-solving for femoral fractures.",
        contentMd: `# Femur Fractures - Exam Preparation

## Case 1: Displaced Femoral Neck Fracture in Elderly
**Scenario**: 72-year-old female, Garden 4 femoral neck fracture, fall at home, COPD, HTN, limited mobility.

**Assessment**:
- **Diagnosis**: Displaced femoral neck fracture (intracapsular)
- **AVN risk**: High (>50%) with ORIF due to displacement
- **Functional status**: Pre-injury: walking with walker, ADL dependent

**Management Decision**:
- **Surgery**: Hemiarthroplasty (not ORIF)
- **Reasoning**:
  1. Age >65 with comorbidities
  2. AVN risk high (displaced) = ORIF poor outcome likely
  3. Hemiarthroplasty allows immediate weight-bearing
  4. No non-union risk (no biological healing required)
  5. Better functional outcome despite lower activity level
- **Timing**: Within 48 hours (reduce perioperative risk)
- **Post-op**: DVT prophylaxis, early PT, weight-bearing as tolerated
- **Expected outcome**: 85% pain relief, 50% return to prior function, most can walk with aids

## Case 2: Unstable Intertrochanteric Fracture
**Scenario**: 65-year-old male, Evans IV intertrochanteric fracture (unstable 4-part), RTA.

**Assessment**:
- **Diagnosis**: Unstable intertrochanteric fracture (4-part comminution)
- **Instability**: Significant medial comminution = varus collapse risk
- **EVans IV**: Most unstable type

**Management Decision**:
- **Surgery**: Locked IM nail (cephalomedullary nail)
- **Reasoning**:
  1. Unstable fracture requires stable fixation
  2. IM nail resists varus/medial angulation better than DHS
  3. Locked IM nail provides proximal + distal control
  4. Early weight-bearing possible (stable fixation)
  5. Better outcomes than DHS for Evans IV fractures
- **Technique**: Antegrade IM nail with proximal + distal locking
- **Weight-bearing**: Full immediately post-op (stable fixation)
- **Expected outcome**: 95% union at 12 weeks, early functional recovery

## Case 3: Subtrochanteric Fracture with Medial Angulation
**Scenario**: 45-year-old male, RTA, subtrochanteric fracture, 3 cm medial angulation.

**Assessment**:
- **Diagnosis**: Subtrochanteric fracture (below lesser trochanter, within 5 cm)
- **Instability**: Medial angulation 3 cm = significant (hip adductors exert medial force)
- **Mechanism**: High-energy injury

**Management Decision**:
- **Surgery**: Always surgical (high-energy, unstable)
- **Implant**: Locked IM nail with proximal locking (MUST have proximal locking)
- **Reasoning**:
  1. Subtrochanteric location = adductor forces cause medial angulation
  2. Proximal locking resists these deforming forces
  3. IM nail better than plate for load distribution
  4. Retrograde or antegrade approach depending on anatomy
- **Weight-bearing**: Protected initially (4-6 weeks), full after 8-12 weeks
- **Healing timeline**: 12-16 weeks expected
- **Post-op**: Watch for malunion/varus collapse; ensure proximal locking intact

## Case 4: Femoral Shaft Fracture
**Scenario**: 35-year-old male, fall from height, comminuted femoral shaft fracture, anterior tibial artery at risk.

**Assessment**:
- **Diagnosis**: Comminuted femoral shaft fracture
- **Neurovascular**: Check distal pulses, assess vascular status (anterior tibial artery)
- **Bleeding**: Risk of hemodynamic instability

**Management Decision**:
- **Surgery**: Locked IM nailing (gold standard)
- **Timing**: Urgent (within 24 hours); address vascular injury if present
- **Technique**:
  1. Assess vascular status pre-operatively (Doppler, angio if vascular injury suspected)
  2. IM nail: Antegrade entry, reaming, locked nail
  3. Proximal + distal locking for comminuted fracture
- **Vascular**: If vascular injury present, vascular surgery consult; may need angiography
- **Weight-bearing**: Full weight-bearing post-op
- **Expected outcome**: 95% union, early mobilization, low infection rate
- **Post-op**: DVT prophylaxis, monitor distal perfusion`,
        mnemonics: [
          { text: "Displaced Neck >65: Hemi", explanation: "Hemiarthroplasty preferred (AVN risk, immediate weight-bearing)" },
          { text: "Subtrochanteric: IM Nail + PROXIMAL locking", explanation: "Proximal locking essential to resist medial angulation" }
        ],
        keyPoints: [
          "Displaced neck >65: Hemiarthroplasty (AVN risk, comorbidities)",
          "Unstable intertrochanteric: Locked IM nail resists varus",
          "Subtrochanteric: MUST have proximal locking on IM nail",
          "Shaft fractures: IM nailing; 95% union, full weight-bearing",
          "DVT prophylaxis mandatory; early mobilization critical for outcomes"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Hip Fracture Management", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Femoral Fracture Treatment", edition: "10th" }
        ]
      },
      {
        layer: 5,
        slug: "femur-fractures-layer-5-active-recall",
        title: "Femur Fractures - Active Recall",
        estimatedMinutes: 15,
        summary: "Key questions reinforcing classification, complications, and management of femoral fractures.",
        contentMd: `# Active Recall - Femur Fractures

**Q1**: Classify femoral fractures by location. What percentage does each type represent of hip fractures?

**A1**: (1) **Femoral neck**: 50% of hip fractures; intracapsular (AVN risk) or extracapsular. (2) **Intertrochanteric**: 45% of hip fractures; between trochanters; extracapsular, better blood supply. (3) **Subtrochanteric**: 5% of hip fractures; below lesser trochanter within 5 cm; high-energy, unstable. **Garden grading** for neck: 1 (incomplete) to 4 (full displacement). **Evans grading** for intertrochanteric: I-IV (increasing instability).

**Q2**: A 70-year-old female has a Garden 3 femoral neck fracture. What is the risk of avascular necrosis? Explain the mechanism.

**A2**: **AVN risk**: 30-50% for displaced neck fractures (Garden 3-4). **Mechanism**: (1) Fracture disrupts MFCA (medial femoral circumflex artery), main blood supply to femoral head. (2) Proximal fragment isolated from blood supply. (3) Osteocytes die from ischemia (bone cell death). (4) Radiographic findings appear 6-12 months later (crescent sign). (5) Progressive collapse under weight-bearing. (6) MRI detects early AVN (T2 signal loss); X-ray shows late findings. **Prevention**: Early diagnosis, proper reduction, internal fixation, close follow-up.

**Q3**: Why is hemiarthroplasty preferred over ORIF for displaced femoral neck fractures in elderly patients >65 years?

**A3**: **Reasons for hemiarthroplasty** in elderly (>65): (1) **AVN risk high**: Displaced neck = 30-60% AVN risk; hemiarthroplasty eliminates this (no living bone required). (2) **Immediate weight-bearing**: No non-union risk; patient can walk immediately post-op. (3) **Simpler rehabilitation**: No need to protect fracture healing; aggressive PT possible. (4) **Reduced morbidity**: Elderly less able to tolerate prolonged immobility. (5) **Better outcomes**: Despite implant limitations, functional outcomes better in this population. **vs ORIF**: ORIF more likely to fail (AVN, non-union) in elderly with comorbidities. **Disadvantages of hemiarthroplasty**: Implant loosening (15-25% at 10 years), revision risk, but acceptable trade-off in elderly.

**Q4**: What is the gold standard treatment for an unstable intertrochanteric fracture (Evans Type IV)? Why?

**A4**: **Gold standard**: Locked intramedullary nail (cephalomedullary nail). **Advantages**: (1) **Resists varus**: Proximal + distal locking resists medial angulation and varus collapse. (2) **Axial loading**: IM nail closer to femoral axis; better load distribution. (3) **Stability**: Evans IV has significant medial comminution = DHS may fail. (4) **Early weight-bearing**: Stable fixation allows full weight-bearing immediately. (5) **Success rate**: 95% union at 12 weeks. **vs DHS**: DHS lower cost, simpler, but shaft fractures more common; less ideal for unstable fractures. **Key technique**: Ensure proximal + distal locking correct; check on post-op X-ray.

**Q5**: A 45-year-old has a subtrochanteric fracture with 3 cm medial angulation. Explain why proximal locking of the IM nail is critical.

**A5**: **Biomechanics of subtrochanteric fractures**: (1) **Location**: Below lesser trochanter; lacks muscle attachments that provide stability elsewhere. (2) **Deforming forces**: Hip adductors (adductor longus, gracilis) insert nearby; pull medially, causing medial angulation. (3) **High-energy injuries**: Typically more comminuted = unstable. **Proximal locking importance**: (1) **Resists medial angulation**: Proximal locking screw prevents fragment from sliding medially. (2) **Prevents varus collapse**: Maintains reduction against adductor forces. (3) **Ensures stability**: Without proximal locking, malunion likely (varus deformity). (4) **Better outcomes**: Proximal locking = union, return to function; without = malunion, pain, dysfunction. **Clinical point**: Always check proximal locking intact on post-op X-ray in subtrochanteric fractures.

**Q6**: Compare non-union rates for different hip fractures. What factors increase non-union risk?

**A6**: **Non-union rates by fracture type**: (1) **Intracapsular neck**: 15-30% (highest) due to limited blood supply, intracapsular location. (2) **Intertrochanteric**: <5% (better blood supply, cancellous bone). (3) **Subtrochanteric**: 5-10% (moderate blood supply, high muscle forces). (4) **Femoral shaft**: <2% with IM nailing (excellent if properly fixated). **Risk factors for non-union**: (1) **Displacement**: Persisting gap = poor healing. (2) **Poor reduction**: Inadequate apposition. (3) **Early weight-bearing**: On unstable fixation. (4) **Osteoporosis**: Reduced healing capacity. (5) **Comorbidities**: Diabetes, smoking, poor nutrition. (6) **Age**: Elderly poorer healing. **Prevention**: Stable fixation, proper reduction, protected weight-bearing initially.

**Q7**: What is the typical healing timeline for different femoral fractures?

**A7**: (1) **Femoral neck**: 4-6 months (slow due to intracapsular location, limited blood supply). (2) **Intertrochanteric**: 8-12 weeks (faster due to extracapsular location, good blood supply, cancellous bone). (3) **Subtrochanteric**: 12-16 weeks (moderate, high muscle forces). (4) **Femoral shaft**: 12-16 weeks (cortical bone slower than cancellous). **Monitoring**: Clinical union (painless weight-bearing), radiographic union (bridging callus on 2 views), time varies by fracture type and fixation. **Weight-bearing**: Depends on fracture stability and fixation robustness.

**Q8**: A patient has a femoral shaft fracture. Why is IM nailing preferred over plate fixation?

**A8**: **IM nailing advantages**: (1) **Load-sharing**: Nail shares load with bone (vs plate load-shielding). (2) **Preservation of blood supply**: Endosteal blood supply maintained; less periosteal stripping. (3) **Earlier mobilization**: Stable fixation allows POD #1 mobilization. (4) **Full weight-bearing**: Early weight-bearing possible. (5) **High union rate**: 95-98% with proper technique. (6) **Lower infection**: Less soft tissue stripping. (7) **Avoids extensive incision**: Smaller soft tissue trauma. **Plate fixation**: Useful if IM nail contraindicated (severe comminution, segmental, pathological); open reduction required = larger incision, more soft tissue damage, potential for delayed union.

**Q9**: Describe postoperative DVT prophylaxis protocol for femoral fracture fixation.

**A9**: **DVT Prophylaxis** (mandatory): (1) **Mechanical**: Early mobilization (POD #1 if possible), compression devices, leg elevation. (2) **Pharmacological**: Enoxaparin 40 mg SC daily x 10-14 days OR rivaroxaban 10 mg daily x 14 days OR apixaban 5 mg BID x 10 days. (3) **Timing**: Start within 12-24 hours post-op. (4) **Monitoring**: Clinical signs (calf swelling, pain, Homan's sign); consider compression ultrasound if suspicious. (5) **Complications**: Bleeding (rare with modern anticoagulation); monitor wound. (6) **Extended prophylaxis**: Consider if high-risk (elderly, immobilized, obesity, malignancy).

**Q10**: A 72-year-old with Garden 4 femoral neck fracture and multiple comorbidities (COPD, DM, HTN) is scheduled for hemiarthroplasty. What pre-operative optimization is needed?

**A10**: **Pre-operative assessment**: (1) **Cardiac**: ECG, troponin baseline, assess angina/prior MI; echo if ejection fraction concern. (2) **Pulmonary**: PFTs (COPD already known); assess exercise tolerance; consider pulmonary consult. (3) **Metabolic**: Blood glucose, HbA1c (DM); target glucose <200 mg/dL perioperatively. (4) **Renal**: Creatinine, eGFR; adjust medications if renal impairment. (5) **Anticoagulation**: Hold aspirin (if on it) day of surgery; warfarin 5 days pre-op, bridge with lovenox if needed; DOACs per protocol. (6) **Anesthesia**: Consult for medical optimization; ASA score assessment. (7) **Medications**: Hold metformin if contrast needed; continue beta-blockers, statins. (8) **Clearance**: Obtain cardiology and anesthesia clearance. (9) **Expectations counseling**: Pain relief 85%, functional goal realistic (walking with aids likely), 3-6 month recovery. (10) **DVT prophylaxis**: Plan for post-op mechanical + chemical.`,
        mnemonics: [
          { text: "Hip Fracture Types: NIS", explanation: "Neck 50%, Intertrochanteric 45%, Subtrochanteric 5%" },
          { text: "AVN Risk: Displaced Neck 30-60%", explanation: "Higher with proximal pole, older age, delayed treatment" }
        ],
        keyPoints: [
          "Neck 50%, Intertrochanteric 45%, Subtrochanteric 5% of hip fractures",
          "AVN risk: displaced neck 30-60%; undisplaced <10%",
          "Hemiarthroplasty: preferred for elderly displaced neck (>65 years)",
          "Unstable intertrochanteric: locked IM nail; 95% union at 12 weeks",
          "Subtrochanteric: MUST have proximal locking; critical for stability"
        ],
        textbookRefs: [
          { book: "Maheshwari's Essential Orthopaedics", chapter: "Hip Fractures", edition: "6th" },
          { book: "Apley's System of Orthopaedics and Fractures", chapter: "Femoral Fractures", edition: "10th" }
        ]
      }
    ]
  }
];
