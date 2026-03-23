import type { TopicLessons } from "./content-loader";

export const radiologyLessons: TopicLessons[] = [
  {
    topicCode: "RD-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "imaging-modalities-foundation",
        title: "Imaging Modalities Overview - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of X-ray, CT, MRI, ultrasound, and nuclear medicine with relative strengths.",
        contentMd: `# Imaging Modalities Overview - Foundation

## Radiography (Plain X-ray)
- **Principle**: X-rays pass through tissues; differential absorption creates image on detector
- **Energy**: Kilovoltage (kV) = 30-150 kV typical
- **Image quality**: Based on atomic number differences (bone > soft tissue > fat)
- **Resolution**: ~0.1 mm (highest spatial resolution of any modality)
- **Radiation**: Ionizing radiation (100 mrem typical chest X-ray)
- **Speed**: Immediate (seconds)
- **Cost**: Cheapest imaging modality
- **Strengths**: High resolution, fast, available, portable, no contrast needed
- **Limitations**: 2D projection (overlapping structures), low soft tissue contrast, radiation
- **Common uses**: Chest (pneumonia, pneumothorax, effusion), bone (fractures), abdominal (obstruction, free air)

## Computed Tomography (CT)
- **Principle**: Multiple X-rays from different angles reconstructed via computer into cross-sectional images
- **Slices**: Thin 1-2mm slices of entire body in seconds
- **Spatial resolution**: 1-2 mm (excellent bone detail)
- **Contrast resolution**: Better than X-ray (can see soft tissues, organs)
- **Radiation**: 100-1000 mrem (10-100× more than chest X-ray)
- **Speed**: 5-30 seconds for body imaging
- **Cost**: Moderate-high (expensive equipment, trained technicians)
- **3D capability**: Multiplanar/3D reconstructions possible
- **Strengths**: Fast, excellent for trauma, acute abdomen, lung findings, bone detail, angiography
- **Limitations**: Ionizing radiation, metallic artifacts, iodine allergy (contrast)
- **Common uses**: Trauma (head/neck/chest/abdomen), stroke (rule out hemorrhage), pulmonary embolism, acute abdomen

## Magnetic Resonance Imaging (MRI)
- **Principle**: Hydrogen nuclei align in magnetic field; radiofrequency pulse excites them; relaxation creates signal
- **Magnetic field**: 1-3 Tesla (hospital systems)
- **Resolution**: 1-2 mm (similar to CT)
- **Soft tissue contrast**: Excellent (best for brain, spinal cord, organs)
- **Radiation**: NONE (non-ionizing)
- **Speed**: 15-60 minutes (slow compared to CT)
- **Cost**: Very expensive (equipment $3-5 million, high operational costs)
- **Contraindications**: Pacemakers, metallic implants, ferromagnetic foreign bodies
- **Strengths**: No radiation, excellent soft tissue, no artifact from bone, multiplanar native
- **Limitations**: Slow, contraindications, claustrophobia, heating of implants, expensive
- **Common uses**: Brain (stroke, tumors, MS), spinal cord (myelopathy), MSK (ACL tear, meniscus), liver (characterization)

## Ultrasonography (Ultrasound)
- **Principle**: Sound waves (2-20 MHz) transmitted through tissues; echoes received and processed
- **Resolution**: 0.1-1 mm (excellent for superficial structures)
- **Soft tissue contrast**: Good (based on acoustic impedance)
- **Radiation**: NONE (non-ionizing)
- **Speed**: Real-time (dynamic imaging)
- **Cost**: Cheapest equipment, highly portable
- **Doppler**: Real-time blood flow assessment (vascular imaging)
- **Strengths**: Real-time, portable, cheap, no radiation, no contrast needed, dynamic assessment
- **Limitations**: Operator-dependent, poor in obese patients, gas/bone obscures, limited field
- **Common uses**: Abdomen (appendicitis, gallstones, free fluid), OB (fetal assessment), cardiac (pericardial effusion, wall motion), vascular (DVT, carotid stenosis)

## Nuclear Medicine (Scintigraphy)
- **Principle**: Radioactive tracer injected; gamma camera detects emitted radiation
- **Tracers**: Technetium-99m (Tc-99m) most common, iodine-131, etc.
- **Image type**: Functional/metabolic (not anatomic)
- **Resolution**: 5-10 mm (poor spatial resolution)
- **Radiation**: Moderate (depends on tracer, 2-10 mrem typical)
- **Speed**: Minutes to hours (tracer uptake time)
- **Strengths**: Functional info (perfusion, metabolism), sensitive for disease
- **Limitations**: Poor resolution, radiation, slow, less specific than anatomic imaging
- **Common uses**: Bone scan (metastases, osteomyelitis), cardiac (MI, perfusion), thyroid (uptake), ventilation-perfusion (PE)

## Modality Comparison
| Feature | X-ray | CT | MRI | Ultrasound | Nuclear |
|---------|-------|-----|-----|-----------|---------|
| Radiation | Yes | Yes | No | No | Yes |
| Speed | Fastest | Fast | Slow | Instant | Slow |
| Soft tissue contrast | Poor | Good | Excellent | Good | Variable |
| Bone detail | Excellent | Excellent | Poor | N/A | N/A |
| Cost | Cheapest | Moderate | Expensive | Cheapest | Moderate |
| Portable | Yes | No | No | Yes | No |
| Resolution | Excellent | Good | Good | Excellent (superficial) | Poor |`,
        mnemonics: [
          { text: "X-ray = 2D projection, CT = 3D axial slices, MRI = best soft tissue", explanation: "Modality strengths" },
          { text: "Radiation: X-ray < CT <<< Nuclear, MRI/Ultrasound = 0", explanation: "Exposure comparison" },
          { text: "Speed: X-ray/US > CT >> MRI >> Nuclear", explanation: "Acquisition time order" },
          { text: "Cost: US/X-ray << CT < Nuclear << MRI", explanation: "Equipment/operational cost" }
        ],
        keyPoints: [
          "X-ray: Highest resolution, fastest, cheapest but 2D and radiation",
          "CT: Fast, 3D, great for trauma/acute; moderate radiation",
          "MRI: No radiation, best soft tissue detail; slow, expensive, contraindications",
          "Ultrasound: No radiation, portable, real-time, operator-dependent",
          "Nuclear: Functional info, slow, poor resolution, radiation"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Imaging Modalities Overview", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Physical Basis of Diagnostic Imaging", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "imaging-physics-mechanism",
        title: "Imaging Modalities Overview - Mechanism",
        estimatedMinutes: 30,
        summary: "Physical principles of each modality, signal generation, image reconstruction.",
        contentMd: `# Imaging Modalities Overview - Mechanism

## X-ray Physics
### X-ray Generation
- **Mechanism**: Electrons accelerated at high voltage strike tungsten target → Bremsstrahlung (sudden deceleration) releases photons
- **Energy range**: 10-150 keV typical (kiloelectron volts)
- **Efficiency**: ~1% becomes X-rays, 99% becomes heat (cooling required)
- **Beam filtration**: Aluminum/copper filters remove low-energy photons (only useful high-energy photons pass)

### Image Formation
- **Attenuation principle**: Different tissues absorb different X-ray amounts
- **Linear attenuation coefficient**: μ depends on atomic number (Z) and energy
  - Bone (Z~14-20): High Z, high attenuation → white
  - Soft tissue (Z~7): Medium attenuation → gray
  - Fat (Z~6): Low attenuation → darker gray
  - Air (Z~7 but low density): Minimal attenuation → black
- **Spatial resolution**: 0.1 mm achievable (excellent)

## CT Principles
### Scanning Geometry
- **Slip-ring design**: X-ray source rotates continuously around patient, detectors opposite
- **Multiple projections**: 360-1000 projections collected per rotation
- **Reconstruction**: Filtered back-projection or iterative reconstruction converts projections to 2D images

### Hounsfield Units (HU)
- **Scale**: Water = 0 HU, Air = -1000 HU, Bone = +1000 HU
- **Soft tissue**: 0-100 HU range (liver, spleen, kidney)
- **Window/level**: Adjustment to view specific HU ranges (bone window, soft tissue window)

### Spatial Resolution
- **In-plane resolution**: 1-2 mm (similar X-ray)
- **Z-axis (slice thickness)**: 1-2 mm modern (reduced from 5mm older)
- **3D capability**: Thin slices reconstructed into coronal/sagittal/3D images

## MRI Principles
### Magnetic Field and Hydrogen Atoms
- **Hydrogen nuclei**: Precessing protons (spin)
- **Magnetic field (B0)**: Aligns protons parallel (low energy) or antiparallel (high energy)
- **Larmor frequency**: Precession frequency = gyromagnetic ratio × B0
  - At 1.5 Tesla: ~64 MHz for hydrogen
  - At 3 Tesla: ~128 MHz (higher field = higher frequency)

### Radiofrequency (RF) Pulse
- **Resonance**: RF pulse at Larmor frequency excites protons to higher energy state
- **Flip angle**: Determines how many spins align with RF (90° flip = most aligned)
- **Free induction decay (FID)**: After pulse stops, spins relax and emit signal

### Relaxation Times
- **T1 (Spin-lattice)**: Time for protons to realign with B0
  - Short T1: Gray matter, white matter, liver
  - Long T1: Muscle, fat, water
- **T2 (Spin-spin)**: Time for phase coherence loss between spins
  - Short T2: Bone (no water), air (no signal)
  - Long T2: CSF, edema, fluid
- **T1-weighted images**: Good anatomic detail, gray-white differentiation
- **T2-weighted images**: Detect pathology (edema, fluid hyperintense)

### Image Reconstruction
- **Phase encoding**: Spatial localization in two directions
- **Frequency encoding**: Third dimension from frequency shift
- **Fourier transform**: Converts frequency domain to spatial domain

## Ultrasound Physics
### Sound Propagation
- **Frequency range**: 2-20 MHz (diagnostic range)
- **Velocity**: 1500 m/s in soft tissue (fixed)
- **Wavelength**: λ = velocity/frequency (higher frequency = shorter wavelength = better resolution)
- **Impedance**: Z = density × velocity
- **Acoustic impedance mismatch**: Creates echoes at tissue interfaces

### Image Formation (A-mode to B-mode)
- **A-mode**: Amplitude vs time (rarely used)
- **B-mode**: Brightness mode (most common) - intensity varies with echo strength
- **Pixel brightness**: Proportional to reflected sound intensity

### Doppler Ultrasound
- **Principle**: Frequency shift when sound bounces off moving objects (blood)
- **Doppler shift**: Δf = f0 × (2v cos θ)/c
  - v = blood velocity, θ = angle between beam and flow, c = sound speed
- **Color Doppler**: Red (toward probe), Blue (away from probe)
- **Spectral Doppler**: Velocity waveform over time

## Nuclear Medicine Mechanism
### Radioisotope Decay
- **Radioactive decay**: Unstable nuclei emit particles/radiation seeking stability
- **Half-life**: Time for activity to reduce by 50%
- **Technetium-99m**: 6-hour half-life (allows imaging without excessive radiation)

### Tracer-Specific Uptake
- **Mechanism**: Different tracers accumulate in specific tissues based on physiology
- **Tc-99m-phosphate**: Accumulates in areas of increased bone turnover
- **Tc-99m-sestamibi**: Accumulates in viable cardiac myocardium
- **I-131 Na-iodide**: Accumulated by thyroid follicular cells

### Gamma Camera Detection
- **Collimator**: Lead grid allows only photons traveling parallel to pass through
- **Scintillation crystal**: NaI(Tl) converts gamma photons to light
- **Photomultiplier tubes**: Convert light to electrical signals
- **Position and energy analysis**: Creates image of gamma emission distribution`,
        mnemonics: [
          { text: "HU: Water 0, Air -1000, Bone +1000", explanation: "Hounsfield unit scale" },
          { text: "T1 = anatomic, T2 = pathology", explanation: "MRI weighting contrast difference" },
          { text: "Larmor frequency = gyromagnetic ratio × B0", explanation: "MRI resonance formula" },
          { text: "Z = density × velocity = acoustic impedance", explanation: "Ultrasound impedance" }
        ],
        keyPoints: [
          "X-ray attenuation depends on Z (atomic number) and density",
          "CT Hounsfield units allow quantification of tissue density",
          "MRI relaxation times (T1/T2) determine contrast",
          "Ultrasound resolution inversely related to frequency",
          "Doppler shift proportional to velocity and angle to beam"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Physics of Radiological Imaging", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Physical Principles of Diagnostic Imaging", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "imaging-clinical-selection",
        title: "Imaging Modalities Overview - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical decision-making, modality selection, appropriateness criteria, Indian context.",
        contentMd: `# Imaging Modalities Overview - Clinical

## Modality Selection by Clinical Scenario
### Chest Imaging Pathways
| Finding | First-line | Confirmation | Limitation |
|---------|-----------|--------------|-----------|
| Pneumonia | CXR | CT (if severe/atypical) | CXR insensitive small PNA |
| Pneumothorax | CXR | CT if CXR unclear | CXR good, portable |
| Pulmonary embolism | CTA chest | VQ scan (if contrast allergy) | CTPA excellent, fast |
| Cardiac dz | Chest X-ray | Echocardiography | CXR shows gross changes |
| Pleural effusion | CXR | Ultrasound (for guidance) | Ultrasound better localization |

### Abdominal Imaging Pathways
| Finding | First-line | Confirmation | Strategy |
|---------|-----------|--------------|----------|
| Acute abdomen | Abdominal X-ray | CT abdomen/pelvis | Plain film screens for obstruction |
| Appendicitis | Ultrasound/CT | CT if ultrasound indeterminate | US good in thin patients, CT better overall |
| Gallstones | Ultrasound | HIDA scan (function) | US gold standard |
| Free fluid/ascites | Ultrasound | CT/MRI if large/staging | US portable, real-time |
| Renal calculus | CT KUB | Ultrasound (follow-up) | CT-KUB 95% sensitive |

### Brain Imaging Pathways
| Finding | First-line | Confirmation | Rationale |
|---------|-----------|--------------|-----------|
| Acute stroke (<4.5h) | CT (rule out ICH) | CTA/CT perfusion | CT fast, rules out hemorrhage |
| Subacute/chronic stroke | MRI | CT if MRI contraindicated | MRI better for ischemia detection |
| Brain tumor | MRI | Surgery/biopsy | MRI excellent soft tissue, no radiation |
| Head trauma | CT head | CT c-spine if mechanism | CT fast for acute trauma |
| Subarachnoid hemorrhage | CT head | LP (if CT negative, clinical suspicion) | CT very sensitive if <6h |

### Bone/Joint Imaging
| Finding | First-line | Confirmation | Radiation |
|---------|-----------|--------------|-----------|
| Fracture (obvious) | X-ray plain | None needed | Single exposure |
| Subtle fracture | X-ray (2+ views) | CT/MRI if plain negative | CT if suspicion high |
| Meniscal tear | MRI | Arthroscopy | MRI non-invasive, high accuracy |
| Osteomyelitis | X-ray + Bone scan | MRI (best) | MRI best sensitivity/specificity |
| Joint cartilage | MRI | Arthroscopy | MRI gold standard, non-invasive |

## Appropriateness Criteria (ACR-based)
### Principle
- **Appropriateness score** (1-9 scale):
  - 1-3: Usually not appropriate
  - 4-6: May be appropriate
  - 7-9: Usually appropriate

### Examples of Appropriate Use
- **CXR** for new cough: Usually appropriate
- **CT chest** for small nodule follow-up: Usually appropriate (no plain film)
- **Ultrasound** for abdominal pain: Usually appropriate first-line
- **Chest X-ray** for asymptomatic screening: Usually NOT appropriate

### Examples of Inappropriate Use
- **CT brain** for migraine without neuro findings: Usually not appropriate
- **MRI abdomen** for acute appendicitis: Not appropriate (CT faster)
- **Multiple follow-up CTs** for stable lesions: Not appropriate (increases radiation)

## Indian Context Considerations
### Resource-Limited Settings
- **Available modalities**: X-ray (ubiquitous), ultrasound (increasing), CT (few centers), MRI (rare)
- **Workflow**: Often "X-ray first" due to cost/availability
- **Consequence**: May miss findings requiring advanced imaging (delayed diagnosis)

### Cost-Benefit Analysis
| Modality | Cost (relative) | Access | Quality |
|----------|-----------------|--------|---------|
| X-ray | 1× | Everywhere | Limited |
| Ultrasound | 2-3× | Urban centers | Good (operator-dependent) |
| CT | 5-10× | Urban/tertiary | Excellent |
| MRI | 15-20× | Few hospitals | Excellent |

### Practical Approach in Resource-Limited Settings
1. **Maximize X-ray utility**: Multiple views, portable, decubitus films for difficult cases
2. **Leverage ultrasound**: Portable, real-time, cost-effective for abdominal/cardiac pathology
3. **Reserve CT**: For cases where diagnosis unclear after X-ray/ultrasound
4. **MRI**: Only if available and essential (brain pathology, spinal cord compression)

### Infection Control in Indian Settings
- **TB prevalence**: Always consider in imaging (nodules, infiltrates, hilar lymphadenopathy)
- **Bone TB**: Relatively common (Pott's disease, joint TB)
- **Cross-contamination**: Important in ultrasound (use probe covers, alcohol prep)

## Modality Appropriateness Decision Tree
\`\`\`
Presenting Problem
  ├─ Trauma, acute: CT (fast, multi-organ)
  ├─ Chronic brain: MRI (no radiation, soft tissue)
  ├─ Acute abdomen: Abdominal X-ray first, then CT if not diagnostic
  ├─ Chest: CXR first (cheap, portable), then CT if abnormal/high suspicion
  ├─ MSK (acute): X-ray (fracture), then CT/MRI if soft tissue
  ├─ Cardiac: Echocardiography first, then CT/MRI if advanced imaging needed
  ├─ Vascular: Ultrasound (DVT), then CTA/MRA if needed
  └─ Renal: Ultrasound + unenhanced CT (no radiation alternative)
\`\`\``,
        mnemonics: [
          { text: "ACR Appropriateness: Score 7-9 = appropriate", explanation: "Rating scale for imaging use" },
          { text: "Acute abdomen: Plain film → CT, Trauma: CT first", explanation: "Clinical decision flow" },
          { text: "Stroke: CT (hemorrhage rule-out), then MRI (ischemia detection)", explanation: "Time-dependent imaging" },
          { text: "Brain: CT (acute), MRI (chronic), Bone: X-ray, then CT/MRI", explanation: "Modality by pathology" }
        ],
        keyPoints: [
          "Always ask: What is my question? What modality best answers it?",
          "CT faster for acute trauma/bleed; MRI better for chronic pathology",
          "Ultrasound excellent first-line for abdomen/cardiac if available",
          "Consider radiation dose in young patients and multiple studies",
          "India: X-ray often first due to availability; escalate to CT/MRI if diagnosis unclear"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Clinical Approach to Imaging", edition: "7th" },
          { book: "ACR Appropriateness Criteria", chapter: "Diagnostic Imaging", edition: "2024" }
        ]
      },
      {
        layer: 4,
        slug: "imaging-contrast-safety",
        title: "Imaging Modalities Overview - Exam Prep",
        estimatedMinutes: 25,
        summary: "Contrast media, safety considerations, radiation dose, high-yield facts.",
        contentMd: `# Imaging Modalities Overview - Exam Prep

## Contrast Media Types and Safety
### Iodinated Contrast (for CT, X-ray)
- **Types**: Ionic (older), nonionic (modern), osmolarity varies
- **Reactions**:
  - Acute (within 1 hour): Urticaria, hypotension, anaphylaxis (~0.04% nonionic)
  - Delayed (1-7 days): Rash, fever (rare)
- **Risk factors**: History of iodine allergy (rare, usually iodine food), contrast allergy, renal insufficiency
- **Renal safety**: Contrast-induced nephropathy (CIN) risk in: Creatinine >1.5, diabetes, dehydration
- **Prevention**: Hydration, avoid NSAIDs, use low-osmolarity agents, monitor post-contrast renal function

### Gadolinium Contrast (for MRI)
- **Types**: Linear, macrocyclic (safer)
- **Reactions**: Rare allergic reactions (0.001%), no anaphylaxis like iodine
- **Safety concerns**:
  - Renal disease: Nephrogenic systemic fibrosis (NSF) risk if GFR <30 (use macrocyclic agents)
  - Gadolinium retention: Long-term accumulation in bone/brain (mostly benign)

### Ultrasound Contrast (Microbubbles)
- **Rare reactions**: Allergic reaction very rare
- **Safety**: Generally very safe, no renal toxicity
- **FDA approved**: For cardiac opacification, renal perfusion

## Radiation Dose Comparison
| Study | Effective Dose (mrem) | Days of natural background | Multiple of CXR |
|-------|----------------------|--------------------------|-----------------|
| Chest X-ray (CXR) | 10 | 10 days | 1× |
| Abdominal X-ray | 50 | 50 days | 5× |
| Pelvic X-ray | 100 | 100 days | 10× |
| CT chest | 700 | 2 years | 70× |
| CT abdomen/pelvis | 1000 | 3 years | 100× |
| CT head | 200 | 2 months | 20× |
| Bone scan | 300 | 1 year | 30× |

### ALARA Principle
- **As Low As Reasonably Achievable**: Minimize radiation dose while maintaining diagnostic quality
- **Factors**: Use lowest mA, shortest exposure time, collimate beam, shield radiosensitive organs
- **In India**: Often lower-cost equipment = higher dose; balance necessary

## High-Yield Exam Facts
### Modality Strengths (Quick Reference)
- **X-ray**: Highest resolution (0.1mm), fastest, cheapest, 2D limitation
- **CT**: Fast (seconds), 3D, excellent bone, good soft tissue, moderate radiation
- **MRI**: Best soft tissue (T1/T2 optimization), no radiation, slow, expensive, contraindications
- **Ultrasound**: Real-time, portable, no radiation, operator-dependent, superficial good
- **Nuclear medicine**: Functional/metabolic, poor resolution, slow, radiation

### Critical Contraindications
- **MRI**: Pacemakers, metallic implants, ferromagnetic foreign bodies, severe claustrophobia
- **Iodine contrast**: Severe allergy (anaphylaxis), uncontrolled hyperthyroidism
- **N2O in bowel obstruction**: Causes distension (expansion risk)
- **Ultrasound Doppler**: No signal in fast flow (aliasing), angle-dependent

### Contrast Allergy Management
- **If true contrast allergy**: Premedication with corticosteroids (12h, 1h before), antihistamine
- **Alternative**: Nonionic contrast (much lower risk)
- **True anaphylaxis**: Epinephrine IM, IV access, steroids, antihistamines

## Common Exam Question Patterns
- "Fastest imaging for trauma?" = CT
- "Best soft tissue imaging?" = MRI
- "No radiation and portable?" = Ultrasound
- "Best bone detail?" = X-ray/CT
- "Functional imaging?" = Nuclear medicine
- "Real-time imaging?" = Ultrasound + fluoroscopy
- "Contraindicated in pregnancy?" = CT (radiation), MRI (generally safe 2nd/3rd trimester)
- "Best for acute stroke?" = CT (hemorrhage rule-out), then MRI/CTA
- "Best for ACL tear?" = MRI (soft tissue)
- "Best for renal colic?" = Unenhanced CT-KUB (95% sensitive, no contrast needed)`,
        mnemonics: [
          { text: "CXR=10, Abd=50, CT abdomen=1000 (dose in mrem)", explanation: "Radiation dose comparison" },
          { text: "MRI = MAGnetic, no radiation", explanation: "Key advantage" },
          { text: "Contrast: Iodine = anaphylaxis risk, Gadolinium = NSF if GFR<30", explanation: "Contrast safety" },
          { text: "ALARA = As Low As Reasonably Achievable", explanation: "Radiation protection principle" }
        ],
        keyPoints: [
          "X-ray best resolution (0.1mm), CT best speed (trauma), MRI best soft tissue",
          "CT dose 70-100× CXR; reserve for essential imaging",
          "Iodine contrast contraindicated in severe allergy, uncontrolled hyperthyroid",
          "MRI contraindicated with pacemakers, metallic implants",
          "Ultrasound operator-dependent but real-time advantage"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Imaging Safety and Contrast", edition: "7th" },
          { book: "ACR Manual", chapter: "MRI Safety, Radiation Safety", edition: "2024" }
        ]
      },
      {
        layer: 5,
        slug: "imaging-modalities-active-recall",
        title: "Imaging Modalities Overview - Active Recall",
        estimatedMinutes: 20,
        summary: "8 clinical cases testing modality selection, contrast decisions, and safety.",
        contentMd: `# Imaging Modalities Overview - Active Recall

## Q1: Modality Selection in Acute Stroke
**Q: 52-year-old presents with 2-hour sudden left-sided weakness. What imaging first and why not MRI despite it being "better"?**

A: **CT head first** (non-contrast). Rationale: (1) Speed critical in stroke (time = brain), (2) Primary question: "Is this hemorrhage or ischemia?" CT answers this in 5 minutes; MRI takes 30+ minutes, (3) CT rules out intracerebral hemorrhage (contraindication to thrombolytics), (4) If ischemic: Patient can get thrombolytics immediately while awaiting MRI for detailed imaging. **Why not MRI first**: Time delay would exceed thrombolytic window (4.5h limit). **Subsequent imaging**: Once hemorrhage ruled out, if candidate for intervention: CTA head/neck or MRA to identify vessel occlusion. MRI later for chronic stroke imaging/rehabilitation planning. **Key principle**: Speed matters in acute ischemic stroke.

## Q2: Contrast Allergy and Imaging Decision
**Q: Patient with prior anaphylaxis to iodine contrast needs CT abdomen for suspected appendicitis. Can imaging proceed? What's alternative if CT necessary?**

A: **Anaphylaxis history** = strong contraindication to iodine contrast. **Alternatives**: (1) **Non-contrast CT abdomen**: Often diagnostic (appendicitis shows thickened appendix, periappendiceal fat stranding, appendicolith visible without contrast), (2) **Ultrasound abdomen**: First-line in many centers (good for appendicitis, free fluid), (3) **MRI abdomen with gadolinium**: If non-contrast CT non-diagnostic (gadolinium much safer, rare anaphylaxis). **If CT with contrast essential**: Premedication protocol: (1) Corticosteroids (dexamethasone 24mg or prednisone 50mg) at 12h, 1h before, (2) Diphenhydramine 50mg at 1h, (3) Use nonionic LOW-osmolarity contrast (risk reduced 100-fold from ionic), (4) Risk still remains but reduced. **Practical approach**: Non-contrast CT or ultrasound adequate for appendicitis; avoid contrast imaging.

## Q3: Ultrasound for Real-Time Diagnosis
**Q: Pregnant woman (8 months) with RUQ pain and positive Murphy sign. Why ultrasound preferred and what's visualized?**

A: **Ultrasound gold standard for cholecystitis/gallstones** in pregnancy (and non-pregnant). Reasons: (1) **No radiation** (safe in pregnancy throughout), (2) **Real-time imaging** (dynamic assessment of gallbladder contractility), (3) **No contrast needed**, (4) **Cost-effective**, (5) **Portable** (can be done bedside). **Findings in acute cholecystitis**: (1) Gallstones (echogenic with acoustic shadow), (2) Sonographic Murphy sign (pain with probe pressure over GB), (3) Pericholecystic fluid (edema around GB), (4) Thickened GB wall (>3-4mm), (5) Dilated common bile duct if obstruction. **Why not CT**: Radiation risk in pregnancy (especially first trimester), though not absolutely contraindicated. **Why not MRI**: MRCP excellent but not first-line (slower, expensive); reserve for ERCP planning if obstruction suspected.

## Q4: CT vs MRI in Spinal Trauma
**Q: Motor vehicle accident victim with spinal pain, imaging ordered. Should CT or MRI be done first? Consider trauma protocols.**

A: **CT spine first** in acute trauma. Rationale: (1) **Speed**: CT done in <5 minutes as part of trauma pan-scan (head/cervical/chest/abdomen/pelvis), (2) **Trauma protocol**: ATLS guidelines = CT C-spine in all mechanism-of-injury patients, (3) **Bone detail**: CT excellent for fractures (sensitivity 95%), (4) **Patient safety**: Trauma patient often unstable, needs rapid assessment. **MRI role**: Later (after acute phase stabilized), if: (1) Spinal cord injury suspected (myelopathy signs), (2) Ligamentous injury (posterior ligament complex disruption), (3) Epidural hematoma not seen on CT. **Limitations MRI in acute trauma**: Takes 30-60 minutes (unacceptable if unstable), requires monitoring compatibility (ventilators, cardiac monitors problematic in magnet). **Practical protocol**: Acute trauma = CT; stable patient with ongoing neuro deficits = subsequent MRI.

## Q5: Radiation Risk in Pediatric Imaging
**Q: 4-year-old with minor fall and small forehead bump. Crying but normal neuro exam. Parent insists on CT head. Is imaging indicated? Discuss radiation risk.**

A: **CT NOT indicated here** (minor mechanism, normal exam). **Reason**: Pediatric head injury CT criteria (PECARN) recommend imaging only if: (1) GCS <15, (2) Severe mechanism (MVA, fall >1.5m, struck by car), (3) Vomiting, severe headache, altered behavior, signs of skull fracture. This child meets NONE. **Radiation risk in children**: (1) Pediatric exposure significantly higher (due to smaller size, more radiosensitive organs per dose unit), (2) Lifetime cancer risk ~0.1-0.2% from single CT head, (3) Cumulative risk if multiple CTs (repeated imaging increases risk), (4) Brain development ongoing (age <5 particularly radiosensitive). **Parent education**: (1) Explain imaging not indicated (avoids unnecessary radiation), (2) Offer observation at home with return precautions (head injury advice sheet), (3) If any change in neuro status: return for reassessment. **Going forward**: Reserve CT for abnormal exams meeting criteria. This is "choosing wisely" principle (reducing low-value imaging).

## Q6: Contrast-Induced Nephropathy Risk
**Q: 72-year-old diabetic with creatinine 2.1 needs CT abdomen with iodine contrast for hematuria workup. Any precautions?**

A: **Contrast-induced nephropathy (CIN) risk HIGH** in this patient. Risk factors present: (1) Age >70, (2) Creatinine 2.1 (chronic kidney disease), (3) Diabetes. **CIN incidence**: 10-30% in high-risk patients. **Prevention strategy**: (1) **Hydration**: Normal saline 1 mL/kg/hr for 12h before/after contrast (most important), (2) **Hold metformin**: Increased lactic acidosis risk if renal function worsens; resume 48h after if creatinine stable, (3) **Use nonionic contrast**: Lower osmolarity (reduces risk 50%), (4) **Low volume**: Use minimum contrast necessary, (5) **Monitoring**: Creatinine check at 48-72h post-contrast. **Alternative imaging**: (1) **Unenhanced CT**: Hematuria workup often possible without contrast (stones visible, large masses), (2) **Ultrasound**: No contrast, no radiation; good for renal masses, hydronephrosis, (3) **MRI with gadolinium**: Safer than iodine (no renal risk, but NSF if GFR <30). **Proceed with contrast CT if essential** with hydration precautions.

## Q7: Artifact Recognition Limiting Imaging
**Q: Patient with hip prosthesis needs imaging for hip pain. Why is MRI limited but CT useful?**

A: **MRI contraindicated/artifacts severe** with metallic hip prosthesis. Reasons: (1) **Metal susceptibility artifacts**: Metallic prosthesis distorts magnetic field → "blooming" artifact (black/white streaks), (2) **Region of interest severely degraded**: Hip area uninterpretable on MRI, (3) **Safety**: Metal heating risk (prosthesis ferromagnetic properties), (4) **Prosthesis position**: Can't assess accurately. **CT advantages**: (1) **Metal-resistant**: CT much less affected by metal (smaller artifacts than MRI), (2) **Hip detail**: Clear visualization of prosthesis position, integration, loosening, (3) **Bone-prosthesis interface**: Assessable for infection, loosening. **Imaging choice**: CT hip best for prosthesis assessment. **Plain X-rays**: Also useful (cheaper, shows gross loosening, alignment). **MRI alternative**: If imaging region away from hip (e.g., thigh soft tissue), position patient carefully or use MR-safe alternatives. **Lesson**: Consider hardware when selecting imaging modality.

## Q8: Modality-Specific Contraindications
**Q: 45-year-old with pacemaker has recurrent TIAs. Neurology wants brain imaging. What's safe and why is MRI contraindicated?**

A: **MRI absolutely contraindicated** with pacemaker (older devices). Reasons: (1) **Magnetic field interaction**: Strong magnet (1.5-3 Tesla) can: depolarize pacemaker, reprogram settings, inhibit pacing, cause malfunction, (2) **Device heating**: RF pulses heat device/leads → tissue damage risk, (3) **Life-threatening dysrhythmias possible**, (4) Newer "MRI-safe" pacemakers exist but require special protocols. **Safe imaging options**: (1) **CT head**: No magnetic field interference, excellent for acute stroke rule-out, (2) **CT angiography head/neck**: Safe, shows vessel patency, carotid stenosis assessment, (3) **Ultrasound**: Carotid ultrasound for stenosis (non-invasive, no contraindication), (4) **Nuclear medicine imaging**: SPECT, PET possible (no magnet). **Functional imaging if needed**: PET or SPECT safe, shows perfusion. **Lesson**: Always check device history before advanced imaging (pacemaker, ICD, aneurysm clips, cochlear implant, metallic foreign body).`,
        mnemonics: [
          { text: "Acute stroke: CT (hemorrhage check) → tPA if safe → MRI (ischemia detail)", explanation: "Time-dependent imaging priority" },
          { text: "Contrast allergy: Use gadolinium (MRI) or non-contrast CT/US", explanation: "Alternative imaging options" },
          { text: "Pediatric radiation: CT head ~0.1-0.2% lifetime cancer risk", explanation: "Risk in children higher than adults" },
          { text: "CIN prevention: HYD (hydration), nonionic, low volume", explanation: "Contrast-induced nephropathy prevention" }
        ],
        keyPoints: [
          "Acute stroke: CT first for speed (rule out bleed), not MRI despite superior soft tissue",
          "Contrast allergy: Non-contrast CT or ultrasound safer than iodine",
          "Pregnancy: Ultrasound safest (no radiation); MRI safe 2nd/3rd trimester",
          "Trauma: CT spine first (ATLS protocol); MRI later if cord injury suspected",
          "Pediatric: Reserve CT for abnormal exams; consider radiation risk",
          "Pacemaker: MRI contraindicated (older devices); use CT or ultrasound instead"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Clinical Applications of Imaging", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Acute and Emergency Imaging", edition: "8th" }
        ]
      }
    ]
  }
];
