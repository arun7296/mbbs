import type { TopicLessons } from "./content-loader";

export const radiologyLessonsPart9: TopicLessons[] = [
  {
    topicCode: "RD-MOD-03-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "neuroimaging-ct-mri-foundation",
        title: "Neuroimaging CT & MRI Brain - Foundation",
        estimatedMinutes: 20,
        summary: "CT vs MRI brain, indications, advantages/disadvantages, stroke imaging, head trauma.",
        contentMd: `# Neuroimaging - CT & MRI Brain

## CT Head Advantages
- **Speed**: 30-60 seconds (critical in acute settings)
- **Availability**: 24/7 in most hospitals
- **Hemorrhage detection**: Excellent (blood hyperdense)
- **Safety**: No contraindications (pacemakers, implants OK)
- **Cost**: Less expensive than MRI

## CT Head Disadvantages
- **Radiation**: ~2 mSv ionizing radiation
- **Poor soft tissue**: Limited gray-white matter differentiation
- **Early ischemia**: Not visible in first 6 hours
- **Posterior fossa**: Limited detail (beam hardening artifact)

## MRI Brain Advantages
- **Soft tissue**: Best gray-white matter differentiation
- **DWI/ADC**: Detects acute ischemia (within minutes)
- **No radiation**: Non-ionizing
- **Multiplanar**: Native sagittal, coronal, axial
- **Pathology**: FLAIR shows edema, hyperintense lesions

## MRI Brain Disadvantages
- **Speed**: 30-60 minutes (slow for acute)
- **Cost**: Expensive ($3-5M equipment)
- **Contraindications**: Pacemakers, metallic implants
- **Claustrophobia**: Anxiety in enclosed space
- **Motion artifact**: Patient movement degrades images

## Clinical Strategy
- **Acute stroke <6h**: CT head first (hemorrhage rule-out) → thrombolytics
- **Subacute stroke >6h**: MRI superior (DWI shows ischemia)
- **Head trauma**: CT (fast, shows fractures)
- **Brain tumors**: MRI preferred (no radiation)`,
        mnemonics: [
          { text: "CT = fast, available 24/7, hemorrhage detection; MRI = soft tissue, no radiation", explanation: "Modality strengths" },
          { text: "Acute stroke: CT first (rule out bleed), then MRI (show ischemia)", explanation: "Time-dependent strategy" }
        ],
        keyPoints: [
          "CT fast for acute; MRI excellent for soft tissue detail",
          "Acute stroke: CT (5min) hemorrhage rule-out before thrombolytics",
          "DWI/ADC gold standard for acute ischemia (bright within minutes)",
          "CT radiation concern; MRI contraindications limit use",
          "Posterior fossa: MRI better (less artifact than CT)"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Neuroimaging", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Brain and Spinal Cord", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "ct-mri-sequences-mechanism",
        title: "Neuroimaging - Sequences & Image Interpretation",
        estimatedMinutes: 30,
        summary: "MRI sequences, DWI/ADC, FLAIR, gradientecho, CT windows, Hounsfield units.",
        contentMd: `# Neuroimaging - Sequences & Mechanisms

## MRI Sequences
- **T1-weighted**: Anatomic detail; CSF dark, white matter bright
- **T2-weighted**: Pathology (edema bright); CSF bright, gray matter intermediate
- **FLAIR**: Suppresses CSF; pathology bright (edema, lesions hyperintense)
- **DWI/ADC**: Restricted diffusion (acute ischemia bright DWI, dark ADC)
- **Gradient echo (T2*)**: Hemosiderin/microhemorrhage dark; susceptibility artifact

## DWI/ADC for Stroke
- **DWI bright**: Restricted water diffusion = acute infarction
- **ADC dark**: Confirms restricted diffusion (not T2 shine-through)
- **Timing**: Visible within minutes of stroke (gold standard)
- **Sensitivity**: >90% for acute ischemia

## CT Windows
- **Brain window**: Gray/white matter visualization (40-50 HU window)
- **Bone window**: Skull fractures (higher HU window)
- **Subdural window**: Subdural hemorrhage visualization

## Hounsfield Units
- **CSF**: 0-15 HU (similar water)
- **Gray matter**: 35-40 HU
- **White matter**: 25-30 HU
- **Blood (acute)**: 50-90 HU (hyperdense)
- **Bone**: >300 HU`,
        mnemonics: [
          { text: "T1 = anatomic, T2 = pathology, FLAIR = edema/lesions bright, DWI = acute ischemia", explanation: "Sequence contrast" },
          { text: "DWI bright + ADC dark = acute infarction (confirmatory)", explanation: "Stroke diagnosis" },
          { text: "HU: CSF 0-15, gray 35-40, white 25-30, blood 50-90", explanation: "Brain densities" }
        ],
        keyPoints: [
          "DWI/ADC gold standard for acute ischemia (visible within minutes)",
          "T2/FLAIR show subacute/chronic ischemia and edema",
          "Gradient echo best for microhemorrhage/DAI",
          "CT HU: white matter darker than gray (25-30 vs 35-40)",
          "FLAIR suppresses CSF; enhances pathology visualization"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "MRI Techniques", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Brain Imaging Principles", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "brain-pathology-clinical",
        title: "Neuroimaging - Clinical Pathologies",
        estimatedMinutes: 35,
        summary: "Stroke, hemorrhage, tumors, trauma, infections, clinicalapproach.",
        contentMd: `# Neuroimaging - Clinical Pathologies

## Acute Stroke
- **CT**: Normal initially (ischemia not visible <6h); rules out hemorrhage
- **MRI DWI**: Bright (restricted diffusion = acute infarction)
- **CTA/MRA**: Shows vessel occlusion (thrombectomy planning)
- **Timing**: Thrombolysis <4.5h, thrombectomy <24h (depending on imaging findings)

## Hemorrhage Types
- **Epidural**: Lens-shaped (biconvex), hyperdense, between skull/dura
  - Usually arterial (middle meningeal artery)
  - Surgical emergency if >30 mL
- **Subdural**: Crescentic (concave), follows brain contour, hyperdense (acute)
  - Venous bleeding (bridging veins)
  - Chronic → hypodense (similar CSF)
- **Intracerebral**: Within brain parenchyma; mixed density
- **Subarachnoid**: Blood in CSF spaces (perimesencephalic)

## Brain Tumors
- **Glioblastoma**: Large, heterogeneous, ring enhancement, extensive edema
- **Meningioma**: Well-circumscribed, broad dural base, homogeneous enhancement
- **Acoustic neuroma**: Cerebellopontine angle, on CN VIII
- **Metastases**: Multiple lesions at gray-white junction

## Diffuse Axonal Injury (DAI)
- **Mechanism**: Shear from rapid acceleration/deceleration
- **CT**: Often normal (subtle changes)
- **MRI/Gradient echo**: Microhemorrhage foci (dark on T2*)
- **Prognosis**: Often poor (widespread injury)

## Traumatic Brain Injury
- **Epidural hematoma**: Lens-shaped; emergency (surgical)
- **Subdural hematoma**: Crescentic; elderly/alcoholic risk
- **Cerebral contusion**: Coup (impact site) + contrecoup (opposite)
- **Skull fracture**: Linear, comminuted, depressed

## India Context
- **Head trauma**: Common from RTA, falls
- **Acute stroke**: Increasing incidence (hypertension, diabetes)
- **CNS infections**: Tuberculosis, fungal, bacterial meningitis
- **Resource**: CT often only modality available; MRI limited`,
        mnemonics: [
          { text: "Epidural lens-shaped arterial, Subdural crescentic venous", explanation: "Hemorrhage types" },
          { text: "Acute stroke: CT (bleed rule-out) → MRI DWI (ischemia gold standard)", explanation: "Imaging sequence" },
          { text: "DAI = diffuse axonal injury; MRI/GRE shows microhemorrhage", explanation: "Shear injury" }
        ],
        keyPoints: [
          "Stroke: CT fast for hemorrhage; MRI DWI detects ischemia",
          "Epidural emergency if >30mL (surgical evacuation)",
          "Subdural: acute hyperdense, chronic hypodense",
          "Tumor: glioblastoma ring enhancement, meningioma dural base",
          "DAI: MRI/gradient echo shows microhemorrhage; CT often normal"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Brain Pathology", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Clinical Neuroradiology", edition: "8th" }
        ]
      },
      {
        layer: 4,
        slug: "neuroradiology-exam-prep",
        title: "Neuroimaging - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts, classic findings, differential diagnosis.",
        contentMd: `# Neuroimaging - Exam Prep

## High-Yield Facts
- **Acute stroke**: CT first (hemorrhage rule-out), MRI DWI shows ischemia
- **Epidural hematoma**: Lens-shaped, hyperdense, biconvex, arterial
- **Subdural hematoma**: Crescentic, follows brain, acute hyperdense, chronic hypodense
- **Diffuse axonal injury**: Shear injury; CT normal, MRI/GRE shows microhemorrhage
- **Glioblastoma**: Ring enhancement, heterogeneous, extensive edema
- **Meningioma**: Well-circumscribed, dural base, homogeneous enhancement
- **DWI/ADC**: Gold standard for acute ischemia (bright DWI, dark ADC)
- **FLAIR**: Best for edema/white matter lesions (CSF suppressed)

## Common Exam Questions
- "Lens-shaped hemorrhage?" = Epidural (arterial)
- "Crescentic hemorrhage?" = Subdural (venous)
- "Hyperdense acute?" = Both epidural/subdural (blood)
- "Bright DWI + dark ADC?" = Acute ischemic stroke
- "Ring-enhancing tumor?" = Glioblastoma
- "Dural-based tumor?" = Meningioma
- "Microhemorrhage on GRE?" = Diffuse axonal injury
- "Large infiltrative mass?" = Glioblastoma (high-grade glioma)

## Differential Diagnosis
- **Acute vs chronic subdural**: Acute hyperdense, chronic hypodense
- **Stroke vs hemorrhage**: CT (bleed), MRI DWI/ADC (infarction)
- **Tumor vs infection**: Enhancement pattern, location, edema extent
- **Epidural vs subdural**: Shape (lens vs crescent), location`,
        mnemonics: [
          { text: "Hemorrhage shapes: Epidural LENS, Subdural CRESCENT", explanation: "Classic appearance" },
          { text: "Stroke imaging: CT (bleed check) → tPA → MRI (detail)", explanation: "Imaging sequence" },
          { text: "DWI/ADC: bright DWI + dark ADC = ischemia confirmed", explanation: "Diagnostic combination" },
          { text: "GRE dark spots = microhemorrhage (DAI, hypertension)", explanation: "T2* findings" }
        ],
        keyPoints: [
          "Epidural: lens-shaped, hyperacute, surgical emergency if >30mL",
          "Subdural: crescentic, follows brain contour, common elderly/alcoholic",
          "Acute stroke: CT <30min, MRI DWI gold standard",
          "DAI: shear injury, CT normal, MRI/GRE shows microhemorrhage",
          "Tumor enhancement: glioblastoma ring, meningioma homogeneous"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Brain Imaging Summary", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Neuroradiology Pearls", edition: "8th" }
        ]
      },
      {
        layer: 5,
        slug: "neuroradiology-active-recall",
        title: "Neuroimaging - Active Recall Cases",
        estimatedMinutes: 20,
        summary: "Clinical scenarios: acute stroke, epidural/subdural, brain tumor, head trauma.",
        contentMd: `# Neuroimaging - Active Recall

## Q1: Acute Stroke Imaging
**Q: 58-year-old sudden left arm weakness, 2 hours after onset. CT head normal. Proceed with tPA?**

A: **YES, proceed with tPA**. **Findings**: CT normal excludes hemorrhage (absolute contraindication to thrombolytics). **Clinical presentation**: Acute ischemic stroke (tPA window <4.5h still open). **Management**: (1) Confirm baseline labs (glucose, coagulation), (2) Administer tPA (alteplase 0.9 mg/kg IV), (3) Obtain MRI post-tPA (DWI shows infarction, guides further therapy), (4) Monitor neuro status (improvement vs worsening), (5) Consider thrombectomy if large vessel occlusion (get CTA to assess).

## Q2: Epidural Hematoma
**Q: 28-year-old with head injury, now drowsy. CT shows lens-shaped hyperdense collection 35mL over left frontal lobe, midline shift 8mm. Management?**

A: **EPIDURAL HEMATOMA - EMERGENCY**. **Findings diagnostic**: Lens-shaped (biconvex), hyperdense (acute blood), >30mL volume. **Surgical emergency**: Midline shift present = mass effect. **Management**: (1) **Emergency neurosurgery** (burr hole or craniotomy for evacuation), (2) Avoid delay (mortality >90% untreated within hours), (3) Supportive (intubation if GCS <8, sedation, head elevation 30°), (4) Monitoring (CT repeat post-evacuation), (5) Prognosis excellent if evacuated quickly (mortality <5% with prompt treatment; >50% delayed >4h).

## Q3: Subdural Hematoma - Chronic
**Q: 75-year-old with fall. CT shows crescentic collection, isodense to brain, mass effect. Age of collection?**

A: **CHRONIC SUBDURAL** (isodense appearance). **Findings**: Crescent shape (follows brain contour), isodense (old blood = CSF density ~3-20 HU), persistent mass effect. **Age estimation**: (1) **Acute** (0-3d): Hyperdense (blood high HU), (2) **Subacute** (3-20d): Isodense (can be missed!), (3) **Chronic** (>20d): Hypodense (CSF density). **This case**: Isodense appearance suggests subacute/chronic. **Management**: (1) Repeat CT with contrast (enhances dura, shows isodense collection better), (2) Consider drainage (burr holes) if symptomatic/mass effect, (3) Monitor (many stable chronic SDH don't need surgery), (4) Rebleeding risk if anticoagulated (hold if possible). **Prognosis**: Variable; depends on symptom progression.

## Q4: Brain Tumor
**Q: 55-year-old with headaches. MRI shows 4cm mass, heterogeneous enhancement, ring-like pattern, extensive surrounding edema, crosses midline. Diagnosis?**

A: **GLIOBLASTOMA** (Grade IV glioma). **Findings diagnostic**: (1) Large (4cm), (2) Heterogeneous enhancement (area of necrosis), (3) **Ring enhancement** (hallmark; necrotic center, enhancing rim), (4) **Extensive surrounding edema** (vs meningioma minimal edema), (5) Crosses midline (infiltrative, not pushing structures). **vs Meningioma**: Well-circumscribed, homogeneous enhancement, minimal edema, **dural base** (this tumor crosses midline = not meningioma). **Management**: (1) MRI for surgical planning (extent, eloquent cortex involvement), (2) Neurosurgery consultation (gross total resection improves outcome), (3) Staging (MRI spine, CSF cytology if leptomeningeal spread suspected), (4) Chemoradiation post-surgery, (5) Prognosis poor (median 12-15 months with standard therapy). **Biopsy if diagnosis unclear**: But ring enhancement + extensive edema = classic glioblastoma.

## Q5: Diffuse Axonal Injury
**Q: 22-year-old motorcyclist, severe RTA. GCS 6. CT head normal ("unremarkable"). MRI T2* gradient echo shows multiple dark microhemorrhage foci in corpus callosum, brainstem. Diagnosis?**

A: **DIFFUSE AXONAL INJURY (DAI)**. **Key findings**: (1) **CT normal** (classic - shear injury doesn't show hemorrhage initially), (2) **MRI gradient echo dark spots** (microhemorrhage from shear), (3) **Locations**: Corpus callosum, brainstem, gray-white junction (typical DAI sites), (4) GCS 6 indicates severe injury. **Mechanism**: Rapid acceleration-deceleration causes shearing of axons → microscopic hemorrhage → functional brain injury. **Prognosis**: Often poor (extensive axonal injury = permanent disability/vegetative state common), (5) Management supportive (ICU care, avoid secondary injury, rehabilitation if survives). **Lesson**: Normal CT doesn't exclude severe brain injury; MRI required if DAI suspected (mechanism suggests shear injury).`
      }
    ]
  }
];
