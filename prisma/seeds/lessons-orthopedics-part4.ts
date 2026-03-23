import type { TopicLessons } from "./content-loader";

export const orthopedicsPart4Lessons: TopicLessons[] = [
  {
    topicCode: "OR-MOD-04-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "spinal-injuries-layer-1-foundation",
        title: "Spinal Injuries - Foundation",
        estimatedMinutes: 25,
        summary: "Classification, anatomy, and epidemiology of spinal cord injuries.",
        contentMd: `# Spinal Injuries - Foundation

## Epidemiology

### Incidence
- **India**: 0.3-0.5 per 100,000 (varies by source)
- **Motor vehicle accidents**: 35-40%
- **Falls**: 30-35% (increasing in elderly)
- **Assault/stabbing**: 10-15%
- **Sports**: 5-10% (diving, falls)
- **Occupational**: Construction, mining

### Age Distribution
- **Peak**: 15-35 years (trauma); 60+ years (falls)
- **Bimodal distribution**: Young active males and elderly females

### Outcome
- **Complete injury**: 45-50%
- **Incomplete injury**: 50-55%
- **Mortality**: 4-5% acute phase (pulmonary complications, cardiovascular)

## Anatomical Regions & Injury Types

### Cervical Spine
- **C1-C4**: Central cord controls respiration (phrenic nerve C3-5)
- **Tetraplegia**: All four limbs paralyzed
- **High-level (C1-C4)**: Respiratory support often needed (ventilator dependency)

### Thoracic Spine
- **Paraplegia**: Lower limbs paralyzed
- **Limited mortality** directly from cord; visceral organ effect minimal

### Lumbar/Sacral
- **Conus/cauda equina**: Lower limb paralysis + bowel/bladder/sexual dysfunction
- **Prognosis**: Better than thoracic (partial functions preserved often)

## Fracture Classification

### Stability
**Stable Fractures**
- Anterior longitudinal ligament intact
- Posterior elements spared
- No neurological deficit
- Conservative management often adequate

**Unstable Fractures**
- Ligamentous disruption
- Significant bone displacement
- Neurological deficit present
- Surgical intervention usually needed

### Specific Injury Patterns

**Compression Fractures**
- Anterior vertebral body collapse
- Usually stable
- Burst fractures: May be unstable if posterior elements involved

**Hyperextension Injuries**
- Disruption of anterior ligaments
- Posterior element fractures
- Often unstable

**Flexion-Distraction**
- Chance fracture (horizontal fracture through body and posterior elements)
- Unstable
- Requires surgery

**Shear Injuries**
- High-energy mechanism
- Displacement, ligamentous disruption
- Highly unstable
- Usually neurologically complete

## Neurological Injury Classification

### Complete Injury
- **Definition**: No sensory or motor function below injury level
- **Prognosis**: Limited recovery potential
- **Incomplete**: May have some recovery potential

### Incomplete Injury Types

**Anterior Cord Syndrome**
- Motor loss + pain/temperature loss
- Sensory intact
- Prognosis: Moderate recovery

**Central Cord Syndrome**
- Cervical location
- Upper limb weakness > lower limb (sacral preservation)
- Better prognosis
- Often elderly (spondylotic, fall mechanism)

**Brown-Sequard Syndrome**
- Hemisection of cord
- Ipsilateral motor loss + contralateral pain/temperature
- Best prognosis (50-80% functional improvement)

**Cauda Equina Syndrome**
- Lumbar/sacral level
- Bilateral lower limb weakness
- Bowel/bladder dysfunction
- Urgent decompression needed
- Better recovery potential than cord

## Severity Grading (ASIA Impairment Scale)

- **A**: Complete (no motor/sensory below)
- **B**: Sensory incomplete (sensory but no motor)
- **C**: Motor incomplete (<3/5 strength)
- **D**: Motor incomplete (≥3/5 strength)
- **E**: Normal

## Mechanisms of Injury

### Trauma Mechanism
**Hyperflexion**
- Motor vehicle accident, diving into shallow water
- Disrupts ligaments, causes instability

**Hyperextension**
- Falls on head, pushing head backward
- Disrupts anterior ligaments

**Axial Loading**
- Head-first impact, vertebral compression
- Burst fractures result

**Shear/Rotation**
- High-speed MVA, falls
- Combines fracture + ligamentous injury
- Usually severe neurological deficit`,
        mnemonics: [
          {
            text: "SPINAL INJURY CAUSES",
            explanation: "Senseless drivers (MVA), Pulling falls, Injuries assault, Negligent work hazards, Acute sports trauma"
          },
          {
            text: "ASIA GRADES",
            explanation: "A: All gone, B: Basic sensation, C: Can't move well, D: Decent movement, E: Excellent/Normal"
          }
        ],
        keyPoints: [
          "MVA (35-40%) > falls (30-35%); male > female",
          "Cervical: Tetraplegia; thoracic: paraplegia",
          "Complete injury 45-50%; incomplete 50-55%",
          "Unstable injuries: Ligamentous disruption, instability, require surgery",
          "Central cord: Best prognosis; anterior cord: Moderate; Brown-Sequard: Best incomplete"
        ],
        textbookRefs: [
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 35", edition: "28th" },
          { book: "SRB's Manual of Surgery", chapter: "Ch 12", edition: "4th" }
        ]
      },
      {
        layer: 2,
        slug: "spinal-injuries-layer-2-mechanism",
        title: "Spinal Injuries - Pathophysiology & Complications",
        estimatedMinutes: 25,
        summary: "Pathophysiology of spinal cord injury and acute/chronic complications.",
        contentMd: `# Spinal Injuries - Pathophysiology & Complications

## Primary vs Secondary Injury

### Primary Injury
- **Immediate**: Mechanical disruption, axonal transection
- **Irreversible**: Cannot be reversed acutely
- **Impact**: Severity determined at moment of injury

### Secondary Injury (Preventable)
**Mechanisms**:
1. **Vascular compromise**: Spinal cord ischemia
2. **Edema formation**: Axonal swelling, increased intraspinal pressure
3. **Excitotoxicity**: Glutamate release, calcium influx
4. **Free radical damage**: Oxidative stress
5. **Apoptosis**: Programmed cell death

**Timeline**:
- Begins within minutes to hours
- Peaks at 24-48 hours
- Can continue for weeks

## Acute Phase Complications

### Respiratory
- **Cervical (C1-C3)**: Phrenic nerve paralysis, ventilator dependent
- **C4-C5**: Diaphragm intact, intercostal muscles weak
- **Thoracic**: Intercostal + abdominal muscle paralysis
- **Complication**: Pneumonia (aspiration risk, weak cough)

### Cardiovascular
- **Bradycardia**: Unopposed vagal tone (cervical)
- **Hypotension**: Loss of sympathetic tone
- **Arrhythmias**: Bradycardia can be profound (<30 bpm)
- **Neurogenic shock**: First 1-2 weeks; resolves usually

### GI
- **Paralytic ileus**: Autonomic dysfunction
- **Acute gastric dilation**: Nasogastric decompression needed
- **Stress ulcers**: Prevention with PPIs

### Genitourinary
- **Urinary retention**: Acute; catheterization needed
- **Reflex activity**: Develops in chronic phase
- **UTI**: Common complication

## Intermediate Phase (Weeks 1-6)

### Spinal Shock
- **Definition**: Loss of all spinal reflex activity below injury
- **Duration**: 1-6 weeks (sometimes longer)
- **Recovery**: Gradual return of reflex activity
- **Prognosis**: Can be misleading; early prognostication unreliable during shock

### Spasticity Development
- **Onset**: Weeks to months post-injury
- **Mechanism**: Unopposed spinal reflex activity
- **Symptoms**: Flexor/extensor spasticity, can be disabling

### Deep Vein Thrombosis (DVT)
- **Incidence**: 40-80% if prophylaxis not given
- **Mechanism**: Immobility, endothelial injury
- **Prophylaxis**: LMWH or mechanical (compression)

### Pressure Sores
- **Prevention**: Turning every 2 hours, pressure relief
- **Risk**: Increases with severity of paralysis

## Chronic Phase Complications

### Spasticity
- **Definition**: Velocity-dependent increase in muscle tone
- **Mechanism**: Loss of inhibitory control
- **Management**: Baclofen, botulinum toxin, intrathecal infusion

### Contractures
- **Mechanism**: Unopposed muscle action, fibrosis
- **Prevention**: Range of motion exercises
- **Treatment**: Stretching, splinting, sometimes surgery

### Autonomic Dysreflexia
- **Definition**: Sudden sympathetic hyperactivity in response to stimulus
- **Occurs**: Above T6 lesions
- **Triggers**: Bladder distension (most common), bowel, skin
- **Symptoms**: Severe hypertension, headache, bradycardia
- **Emergency**: Can cause stroke, MI, death
- **Treatment**: Remove stimulus, vasodilators if severe

### Chronic Pain
- **Incidence**: 40-50% of spinal cord injury patients
- **Types**: Neuropathic pain common; musculoskeletal also present
- **Management**: Difficult; multimodal approach

### Syrinx Formation
- **Definition**: Fluid-filled cavity within spinal cord
- **Incidence**: 10-20% post-traumatic
- **Timing**: Weeks to years post-injury
- **Significance**: Can cause progressive neurological decline
- **Management**: Surgery if symptomatic

## Psychological Complications
- **Depression**: Common (30-40%)
- **PTSD**: After trauma (20-30%)
- **Adjustment disorder**: Disability acceptance
- **Sexual dysfunction**: Physical + psychological

## Long-Term Medical Complications
- **Urinary tract infections**: Leading medical complication
- **Bowel dysfunction**: Constipation, incontinence
- **Respiratory compromise**: From deconditioning
- **Cardiovascular disease**: Increased risk
- **Metabolic syndrome**: Obesity, diabetes
- **Bone loss**: Osteoporosis (50% loss by 1 year)`,
        mnemonics: [
          {
            text: "SECONDARY INJURY",
            explanation: "Seconds after primary, Edema expands, Circulation compromised, Oxygen depleted, Necrosis spreads"
          },
          {
            text: "SPINAL SHOCK",
            explanation: "Shock phase early, Spinal reflexes absent, Impossible to prognosticate, Neurogenic features present"
          }
        ],
        keyPoints: [
          "Primary injury: Mechanical, irreversible; secondary injury: Preventable (24-48h)",
          "Secondary mechanisms: Ischemia, edema, excitotoxicity, free radicals",
          "Respiratory: C1-C3 ventilator-dependent; pneumonia risk",
          "Spinal shock: 1-6 weeks, prognostication unreliable initially",
          "Autonomic dysreflexia: T6 above, hypertensive emergency, bladder trigger common"
        ],
        textbookRefs: [
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 35", edition: "28th" },
          { book: "SRB's Manual of Surgery", chapter: "Ch 12", edition: "4th" }
        ]
      },
      {
        layer: 3,
        slug: "spinal-injuries-layer-3-clinical",
        title: "Spinal Injuries - Clinical Diagnosis & Management",
        estimatedMinutes: 30,
        summary: "Clinical assessment and management of spinal injuries.",
        contentMd: `# Spinal Injuries - Clinical Diagnosis & Management

## Clinical Examination (Acute Phase)

### NEXUS Criteria (When to Suspect SCI)
1. High-energy mechanism (MVA, fall >10ft, diving)
2. Midline tenderness
3. Focal neurological deficit
4. Abnormal mental status (altered consciousness, intoxication)
5. Severe pain

### Neurological Assessment

**Motor Examination** (0-5 strength scale)
- Test key muscles C5-S1 (ASIA protocol)
- C5: Elbow flexion, C6: Wrist extension, C7: Elbow extension, C8: Finger flexion, T1: Small hand muscles
- L2-S1: Hip flexion, knee extension, ankle dorsiflexion, plantarflexion, anal sphincter

**Sensory Examination** (ASIA protocol)
- Pin prick and light touch from C2 to S4-5
- Record level of preserved sensation

**Reflex Assessment**
- Absent initially (spinal shock)
- Return indicates recovery potential

**Rectal Examination** (Critical)
- Anal sensation: Preserved → incomplete injury (better prognosis)
- External sphincter tone
- Bulbocavernosus reflex (presence = complete vs incomplete)

## Imaging

### Plain Radiographs
- **Cervical spine**: Lateral, AP, odontoid views
- **Assessment**: Alignment, obvious fractures
- **Limitation**: Misses ligamentous injury, 5-10% of injuries missed

### CT Imaging
- **Gold standard** for fracture diagnosis
- **3D reconstruction**: Excellent for surgical planning
- **Sensitivity**: 95-99% for bone injury
- **Indication**: All suspected spinal injuries

### MRI
- **Best for**: Spinal cord edema, ligamentous injury, disc herniation
- **Prognosis**: Cord edema extent correlates with neurological recovery
- **Timing**: Early MRI (24-72h) helps with prognosis
- **Contraindication**: Metallic implants (relative)

## Acute Management (First 24-48 Hours)

### Resuscitation
- **ABCs**: Airway, breathing, circulation
- **Cervical spine precautions**: Immobilization until ruled out
- **Ventilatory support**: If C1-C3 or respiratory compromise
- **IV access**: Large-bore, aggressive fluid resuscitation (avoid hypotension)

### Cardiovascular Support
- **Neurogenic shock**: Bradycardia + hypotension
- **Management**: IV fluids, vasopressors if needed (ephedrine, dopamine)
- **Catheterization**: May be needed for hemodynamically unstable

### High-Dose Methylprednisolone (Controversial)
- **NASCIS 2 trial** showed modest benefit (24h protocol)
- **Current practice**: Limited use (complications, modest benefit)
- **If used**: Bolus 30mg/kg IV, then 5.4mg/kg/h for 23h
- **India**: Increasingly questioned; many surgeons forgo

### Urinary Management
- **Acute retention**: Catheterization needed
- **Indwelling catheter** vs intermittent clean catheterization
- **Preference**: Intermittent (reduces UTI, empowers patient)

## Surgical Indications & Timing

### Acute Surgery Indication
**Unstable fractures**:
- Significant displacement
- Ligamentous disruption
- Neurological deficit with cord compression visible on imaging

**Non-operative candidates**:
- Stable fractures without cord compression
- Conservative management with immobilization

### Surgical Options

**Cervical Spine**
- **Anterior**: Discectomy ± fusion for cord compression (disc, bone)
- **Posterior**: Laminectomy, fusion for posterior compression, instability
- **Timing**: Early surgery (24-72h) may improve outcomes vs late

**Thoracic/Lumbar**
- **Anterior**: For ventral compression (disc, bone fragment)
- **Posterior**: Decompression, stabilization (burst fractures, ligamentous injury)
- **Timing**: Early mobilization benefits infection/DVT prevention

### Decompression Efficacy
- **Incomplete injury**: ~60-70% show neurological improvement
- **Complete injury**: ~10-20% show any improvement
- **Timing**: Early decompression may improve cord perfusion

## Rehabilitation Phase (Weeks 2-6+)

### Goals
- **Respiratory**: Wean from ventilator if possible
- **Mobility**: Bed mobility, transfers, wheelchair independence
- **Functional**: ADL (activities of daily living)
- **Psychological**: Adjustment, counseling

### Key Components

**Physical Therapy**
- Range of motion exercises (prevent contractures)
- Strengthening residual muscles
- Transfer training, mobility aids
- Wheelchair training

**Occupational Therapy**
- ADL independence (dressing, feeding, hygiene)
- Adapted equipment training
- Home evaluation, modifications

**Bowel & Bladder Management**
- Intermittent catheterization (preferred)
- Bowel program (stimulants, digital evacuation)
- Pad/appliance management

**Pressure Injury Prevention**
- Turning schedule every 2 hours
- Pressure-relieving equipment
- Education on skin inspection

**Vocational Rehabilitation**
- Job retraining
- Education resumption
- Computer training (if hand/arm function allows)

## Long-Term Prognosis

### Factors Affecting Recovery
- **Injury completeness**: Incomplete >> complete
- **Injury level**: Lower lumbar >> thoracic >> cervical (more functional independence)
- **Age**: Younger >> older (neuroplasticity)
- **Motivation**: Key factor

### Realistic Expectations
- **Cervical C5-C6**: May regain arm function, wheelchair independent
- **Cervical C7-T1**: Good upper limb recovery, some hand function
- **Thoracic**: Wheelchair independent, some activities possible
- **Lumbar**: Better potential; variable depending on exact level

### Life Expectancy
- **Normal lifespan** now achievable with modern care
- **Complications**: UTI, sepsis, autonomic dysreflexia main threats
- **Quality of life**: Highly variable; many return to work/school`,
        mnemonics: [
          {
            text: "ACUTE MANAGEMENT",
            explanation: "ABCs first, Bladder catheterized, Cardiovascular support, Desensitized initially"
          },
          {
            text: "SURGICAL TIMING",
            explanation: "Unstable requires, Urgent decompression, Rupture cord compression, Gray matter ischemia"
          }
        ],
        keyPoints: [
          "NEXUS criteria identify SCI risk; CT gold standard for fractures",
          "MRI best for cord edema, ligamentous injury; early MRI prognostic",
          "Acute: ABCs, spine precautions, neurogenic shock management",
          "High-dose methylprednisolone: Modest benefit, increasingly questioned",
          "Surgery: Unstable fractures, cord compression; early timing may benefit"
        ],
        textbookRefs: [
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 35", edition: "28th" },
          { book: "SRB's Manual of Surgery", chapter: "Ch 12", edition: "4th" }
        ]
      },
      {
        layer: 4,
        slug: "spinal-injuries-layer-4-exam",
        title: "Spinal Injuries - Exam Prep",
        estimatedMinutes: 18,
        summary: "Exam-focused review of spinal injury management.",
        contentMd: `# Spinal Injuries - Exam Prep

## High-Yield Facts

### Mechanisms
- MVA (35-40%), falls (30-35%), assault (10-15%)
- C1-C4 tetraplegia, T paraplegia, L lower limb

### Exam Findings
- Motor/sensory levels (ASIA protocol)
- Bulbocavernosus reflex: Presence → complete vs absence → incomplete
- Anal sensation preserved → incomplete injury

### Imaging
- CT: Fractures; MRI: Cord injury, ligaments
- Plain films: Initial screening

### Management
- Acute: ABCs, precautions, neurogenic shock
- Surgical: Unstable, cord compression
- Rehab: Bowel, bladder, mobility

## Exam Scenarios

### Scenario 1: C6 Tetraplegia

"22-year-old MVA, C6-C7 fracture-dislocation on CT, incomplete SCI. Management?"

- **Answer**: Surgical stabilization (decompression + fusion), early rehabilitation

### Scenario 2: Neurogenic Shock

"35-year-old post-spinal injury, BP 80/50, HR 45, conscious. Management?"

- **Answer**: IV fluids, vasopressors (ephedrine), continue monitoring

### Scenario 3: Spinal Shock Period

"48 hours post-SCI, absent reflexes, no movement below T8. Prognosis?"

- **Answer**: Still in spinal shock; prognostication unreliable; await recovery phase

## Key Decision Tree

SPINAL INJURY
- Stable fracture: Conservative (collar, bed rest)
- Unstable/cord compression: Surgical (decompression + fusion)
- Complete injury: Limited recovery potential
- Incomplete injury: Better recovery potential

## Pearls for NEET PG / INI-CET

- **Bulbocavernosus reflex**: Return indicates spinal shock recovery
- **Anal sensation**: Presence = incomplete (better prognosis)
- **Methylprednisolone**: 24h protocol, modest benefit, controversial
- **Early surgery**: Recommended for unstable + cord compression
- **Neurogenic shock**: Bradycardia + hypotension; vasopressors needed`,
        mnemonics: [
          {
            text: "NEXUS criteria",
            explanation: "No high-risk mechanism, Examination alert needed, Xray (CT), Urgent mechanism, Spine immobilize"
          }
        ],
        keyPoints: [
          "Complete injury: 45-50%; incomplete: 50-55%",
          "ASIA grades A-E; bulbocavernosus + anal sensation assess completeness",
          "Acute: Neurogenic shock, respiratory support, urinary catheterization",
          "Imaging: CT fractures, MRI cord injury and prognosis",
          "Surgical indications: Unstable, cord compression on imaging"
        ],
        textbookRefs: [
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 35", edition: "28th" },
          { book: "SRB's Manual of Surgery", chapter: "Ch 12", edition: "4th" }
        ]
      },
      {
        layer: 5,
        slug: "spinal-injuries-layer-5-active-recall",
        title: "Spinal Injuries - Active Recall",
        estimatedMinutes: 12,
        summary: "Active recall questions on spinal injuries.",
        contentMd: `# Spinal Injuries - Active Recall

## Q1: Most Common Cause of Spinal Injury?
**Answer**: Motor vehicle accidents (35-40%), followed by falls (30-35%)

## Q2: What Is "Spinal Shock"?
**Answer**: Loss of all spinal reflex activity below injury level; lasts 1-6 weeks; recovery unreliable for prognostication during this period

## Q3: Cervical C1-C3 Injury: Why Ventilator Needed?
**Answer**: Phrenic nerve (C3-C5) originates here; high-level injury → diaphragm paralysis → respiratory failure

## Q4: Bulbocavernosus Reflex: Significance?
**Answer**: Present = spinal shock ending or incomplete injury; absent initially = normal; return indicates recovery potential

## Q5: Anal Sensation Present: What Does It Mean?
**Answer**: Indicates incomplete spinal cord injury; better prognosis than complete (some function preserved)

## Q6: ASIA Complete Injury: Definition?
**Answer**: No sensory or motor function more than 3 spinal levels below injury; prognosis limited for recovery

## Q7: Brown-Sequard Syndrome: Prognosis vs Anterior Cord?
**Answer**: Brown-Sequard: Best prognosis (50-80% improvement); anterior cord: Moderate recovery potential

## Q8: High-Dose Methylprednisolone: Benefit Documented?
**Answer**: NASCIS 2: Modest benefit (24h protocol); many surgeons now forgo due to complications vs benefit

## Q9: Imaging Choice: Fracture vs Cord Injury?
**Answer**: CT: Fractures (sensitivity 95-99%); MRI: Cord edema, ligaments, prognosis

## Q10: Neurogenic Shock Bradycardia: Cause?
**Answer**: Unopposed vagal tone; loss of sympathetic input from spinal cord; managed with IV fluids + vasopressors`,
        mnemonics: [
          {
            text: "SPINAL SHOCK",
            explanation: "Shock phase early, Presence of spinal injury, Intact reflex activity absent, Nerve endings dormant, Axons recovering slowly"
          }
        ],
        keyPoints: [
          "Spinal shock: 1-6 weeks, prognostication unreliable, recovery unpredictable",
          "Bulbocavernosus/anal sensation assess completeness",
          "Central cord: Best incomplete prognosis; anterior cord: Moderate",
          "Neurogenic shock: Bradycardia + hypotension; vasopressors needed",
          "Methylprednisolone: Modest benefit, increasingly questioned"
        ],
        textbookRefs: [
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Ch 35", edition: "28th" },
          { book: "SRB's Manual of Surgery", chapter: "Ch 12", edition: "4th" }
        ]
      }
    ]
  }
];
