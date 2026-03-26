export const radiologyLectures = [
  {
    topicCode: "RD-MOD-01-TOP-01",
    contentMd: `# Imaging Modalities Overview

Diagnostic imaging forms the cornerstone of modern clinical practice, providing non-invasive visualization of internal anatomy and pathology. Understanding modality-specific advantages, limitations, and radiation exposure ensures appropriate selection and interpretation.

## Plain Radiography (X-rays)

**Principle**: Electromagnetic radiation passes through tissues; attenuation varies by tissue density, creating shadow images on detector plates or digital sensors.

**Tissue Density (from radiolucent to radiopaque)**:
- Air (lung) - black
- Fat - dark gray
- Water/soft tissue - gray
- Bone - light gray
- Metal - white

**Advantages**:
- First-line imaging for many conditions (chest, skeletal, abdominal)
- Fast, inexpensive, minimal radiation dose
- Portable equipment; performed at bedside if necessary
- High specificity for cortical bone disease

💡 **Indian Clinical Practice**: In secondary care hospitals with limited advanced imaging, plain radiography remains workhorse investigation. Portable chest X-rays (CXR) common in ICU/ward settings; portable abdominal films assess obstruction/free air.

**Disadvantages**:
- Limited soft tissue differentiation
- Summation artifact (overlapping structures obscure pathology)
- Operator-dependent quality
- Limited sensitivity for early pathological changes

## Computed Tomography (CT)

**Principle**: X-ray tube rotates around patient; multiple projections reconstructed into cross-sectional images via mathematical algorithms (Fourier transform).

**Advantages**:
- Superior contrast resolution (differentiate soft tissues, organs)
- Multiplanar reconstruction (axial, coronal, sagittal, 3D)
- Minimal motion artifact (rapid acquisition)
- Quantitative measurements (Hounsfield units—HU—standardize tissue density)

**Disadvantages**:
- Higher radiation dose than plain films
- Iodinated contrast required for optimal vascular/organ imaging (allergy risk 0.04%)
- Contraindicated in renal failure (GFR <30 mL/min/1.73 m²) without risk mitigation
- Artifacts from metal implants, patient motion

🎓 **Hounsfield Unit Scale**:
- Air: -1000 HU
- Fat: -100 HU
- Water: 0 HU
- Soft tissue: +20-60 HU
- Bone: +400-1000 HU

## Magnetic Resonance Imaging (MRI)

**Principle**: Strong magnetic field (1.5-3 Tesla typically) aligns hydrogen nuclei; radiofrequency pulses excite nuclei; relaxation signals detected as images.

**Advantages**:
- Superior soft tissue contrast (no ionizing radiation)
- Excellent for neuroimaging (brain, spinal cord), musculoskeletal imaging
- Functional imaging capability (diffusion, perfusion, spectroscopy)
- No contrast required (though gadolinium enhancement available)

**Disadvantages**:
- Prolonged acquisition time (patient motion artifact risk)
- Contraindications: Non-MRI-safe metallic implants (pacemakers, ferromagnetic aneurysm clips)
- Claustrophobia in closed magnets
- Cost (~5-10× CT), limited availability in India

⚡ **Indian Context**: MRI availability concentrated in tertiary centers and private hospitals. Government teaching hospitals increasingly acquiring 1.5T machines. In public sector, CT often substituted for MRI-dependent diagnoses due to availability/cost.

## Ultrasound (US)

**Principle**: High-frequency sound waves reflect off tissue boundaries; echoes detected, time-delayed to construct real-time images.

**Advantages**:
- No ionizing radiation (safe in pregnancy)
- Real-time imaging; dynamic assessment during breathing, movement
- Inexpensive, portable; bedside deployment
- Excellent operator access for regional procedures (biopsies, interventions)
- Doppler capability (vascular assessment)

**Disadvantages**:
- Operator-dependent
- Limited in obese patients, gas-filled bowel obscures posterior structures
- No cross-sectional capability (2D only unless 3D probe)
- Requires acoustic window

## Nuclear Medicine

**Principle**: Radioactive tracers (radiopharmaceuticals) internalized; emit photons detected by gamma camera producing functional images.

**Common Agents**:
- Tc-99m: Most common (bone scan, cardiac imaging, ventilation-perfusion scans)
- F-18 FDG: PET agent; glucose metabolism imaging in oncology

**Advantages**:
- Functional information (metabolism, perfusion)
- High sensitivity for specific organ pathology

**Disadvantages**:
- Low spatial resolution
- Radiation exposure
- Delayed imaging (hours to days post-injection)

🏥 **Indian Radiology Standards**: Government AERB (Atomic Energy Regulatory Board) regulates nuclear medicine; facilities limited to tertiary centers. Growing availability of SPECT-CT (hybrid imaging) improves localization.

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: Modality comparison chart—CXR vs CT vs MRI vs US vs nuclear medicine showing anatomy visibility, contrast resolution, radiation dose}}

**Estimated Reading Time**: 9 minutes`,
    estimatedMinutes: 9,
  },
  {
    topicCode: "RD-MOD-01-TOP-02",
    contentMd: `# Radiation Physics & Protection

Understanding radiation physics principles, biological effects, and protection strategies ensures safe, justifiable imaging with minimal patient/staff exposure.

## Radiation Physics Fundamentals

**Electromagnetic Spectrum**:
- Non-ionizing: Radio waves, microwaves, infrared (insufficient energy to remove electrons)
- Ionizing: Ultraviolet, X-rays, gamma rays (>10 eV energy, remove electrons from atoms)

**X-ray Production**:
- High-voltage cathode generates electron beam
- Electrons decelerated by tungsten anode (brake radiation—Bremsstrahlung)
- Kinetic energy converted to X-ray photons (85% heat, 15% X-rays)
- Filtering (aluminum, copper) removes low-energy photons (don't contribute to image, only dose)

🎓 **X-ray Quality vs. Quantity**:
- **Quantity** (mA—milliamperage, exposure time): Number of X-ray photons produced
- **Quality** (kV—kilovoltage): X-ray photon energy; higher kV penetrates better, reduces dose
- Increasing mAs increases dose linearly; increasing kV increases penetration (less filtration needed)

## Radiation Interactions with Matter

**Photoelectric Effect**: Low-energy photons (<100 keV) interact with inner-shell electrons; energy absorption high (dose), contrast high (useful for bone imaging)

**Compton Scattering**: Intermediate-energy photons (100-2000 keV) eject outer-shell electrons; scattered photons produce image noise, reduced contrast

**Pair Production**: High-energy photons (>2 MeV) convert to electron-positron pairs; minimal role in diagnostic radiology

💡 **Clinical Relevance**: X-ray quality optimization involves HVL (half-value layer)—thickness of material reducing intensity 50%. Higher HVL = higher quality photons, better penetration, reduced dose.

## Biological Effects of Radiation

**Deterministic Effects** (threshold-dependent):
- Below threshold: No effect
- Above threshold: Severity increases with dose
- Examples: Acute radiation syndrome, skin erythema, cataract formation
- Threshold doses: Whole-body >200 mGy, skin >6-8 Gy, lens >0.5 Gy

**Stochastic Effects** (probability-dependent):
- No threshold; any dose carries risk
- Probability increases with dose
- Examples: Cancer, genetic mutations, leukemia
- Risk model: Linear no-threshold (LNT) assumption—no safe dose, but very low risk at diagnostic doses

🏥 **Fetal Exposure Concerns**: Fetal dose <50 mGy considered safe; diagnostic imaging doses <5 mGy (negligible risk). However, elective imaging deferred in pregnant patients; urgent imaging proceeding with dose justification.

## Dose Quantities & Units

**Gray (Gy)**: Absorbed dose (energy absorbed per unit mass); 1 Gy = 1 joule/kilogram

**Sievert (Sv)**: Equivalent dose (accounts for biological effectiveness of different radiation types)
- X-rays, gamma rays: Quality factor = 1 (dose Gy = dose Sv)
- Alpha particles: Quality factor = 20
- 1 mSv = 0.001 Sv; typical CT = 5-10 mSv, chest X-ray = 0.1 mSv

**Effective Dose**: Accounts for organ-specific radiosensitivity
- Whole-body dose 1 mSv; risk of fatal cancer increase ~0.005%
- Diagnostic radiology doses: Chest X-ray 0.02 mSv, abdominal CT 8 mSv, coronary CTA 15 mSv

⚡ **Background Radiation**: Average annual exposure ~3 mSv (cosmic radiation, radon, radionuclides); varies by geography. One CT scan doses equivalent to 3-5 years background radiation.

## Radiation Protection Principles (ALARA)

**ALARA**: As Low As Reasonably Achievable

1. **Justification**: Imaging benefits outweigh risks
2. **Optimization**: Lowest dose consistent with diagnostic quality
3. **Limitation**: Individual dose limits (occupational <20 mSv/year; public <1 mSv/year)

**Protection Measures**:
- **Time**: Minimize procedure duration, reduce fluoroscopy time
- **Distance**: Inverse square law—doubling distance reduces exposure 75%
- **Shielding**: Lead aprons (0.5-1 mm Pb), thyroid collars, gonadal shields reduce scatter exposure

**Diagnostic Reference Levels (DRL)**:
- National guidelines establish typical doses for common procedures
- Audit imaging practices; doses >DRL trigger review
- In India, AERB recommends DRLs; compliance variable

🎓 **Pregnancy Management**: Diagnostic imaging <100 mGy fetal dose safe; counseling offered but termination not recommended. Shielding reduces dose further; ultrasound preferred when applicable.

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: Electromagnetic spectrum showing ionizing/non-ionizing boundary; X-ray production diagram showing electron deceleration at anode}}

**Estimated Reading Time**: 10 minutes`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "RD-MOD-01-TOP-03",
    contentMd: `# Contrast Media

Contrast agents enhance visualization of vessels, organs, and pathology, enabling detailed diagnosis. Understanding contrast types, mechanisms, and complications ensures safe, effective use.

## Contrast Classification

**Positive Contrast Agents** (radiopaque—appear white on X-rays):

**Barium Sulfate** (non-absorbed):
- Used: Upper GI, barium enema, esophagogram
- Advantages: Non-toxic, very opaque, inexpensive
- Disadvantages: Non-absorbable; peritoneal spillage causes granuloma formation; not used if perforation suspected

**Iodinated Contrast** (ionic, non-ionic, osmolar variations):

**Ionic Agents** (diatrizoate, iothalamate):
- High osmolality (~1850 mOsm/kg)
- Advantages: Inexpensive
- Disadvantages: High viscosity, higher contrast toxicity (severe reactions more common)
- Largely replaced by non-ionic agents

**Non-ionic Agents** (iopamidol, iohexol, ioversol):
- Low osmolality (~600-850 mOsm/kg)
- Advantages: Reduced osmotic effects, lower vasodilation, fewer adverse reactions
- Disadvantages: Expensive (~2-3× ionic agents)
- Standard choice in modern practice

**Iso-osmolar Agents** (iodixanol):
- Osmolality = plasma (290 mOsm/kg)
- Advantages: Theoretically optimal hemodynamic profile
- Disadvantages: Higher viscosity, no proven superiority over low-osmolar agents; expensive
- Limited use

🎓 **Contrast Concentration & Osmolality**:
- Osmolality inversely related to safety; lower osmolality = fewer systemic effects
- Non-ionic agents preferred for coronary angiography (lower cardiotoxicity)
- In India, cost drives ionic agent use in secondary care; non-ionic standard in tertiary centers

## Gadolinium-Based Contrast Agents (MRI)

**Mechanism**: Paramagnetic gadolinium shortens T1/T2 relaxation time, increasing signal intensity.

**Types**:
- **Linear**: Older agents; potential for gadolinium deposition in brain with repeated exposure
- **Macrocyclic**: Newer agents; more stable chelation, lower deposition risk

**Indications**: CNS lesions (BBB breakdown), liver lesions (hepatobiliary agents), vascular imaging

**Contraindications**: eGFR <30 (gadolinium retention risk → nephrogenic systemic fibrosis—NSF); use only if essential with risk counseling

💡 **NSF Risk**: Rare (0.1-2 per 1000 exposed patients with eGFR <15); presents with skin fibrosis, joint stiffness weeks to months post-contrast; no treatment available.

## Contrast Adverse Reactions

**Osmotic Diuresis**:
- High osmolality causes fluid shift from extracellular space → intracellular osmotic load
- Diuresis, hyperglycemia, electrolyte abnormalities
- Acute kidney injury risk in dehydrated patients, diabetics

**Chemotoxicity**:
- Direct cellular toxicity; reduced with non-ionic, low-osmolar agents
- Dose-related; highest risk with renal failure (impaired clearance)

**Anaphylactoid Reactions** (IgE-independent):
- Incidence: Ionic 2.2%, non-ionic 0.4%, gadolinium 0.1%
- Manifestations: Urticaria, angioedema, bronchospasm, hypotension, anaphylaxis
- Risk factors: Seafood allergy, asthma, prior contrast reaction
- Management: Antihistamines (diphenhydramine 50 mg IV), corticosteroids (dexamethasone 10-20 mg IV) if severe, epinephrine (0.3 mg IM 1:1000) for anaphylaxis

⚡ **Contrast-Induced Nephropathy (CIN)**:
- Acute kidney injury within 48-72 hours post-contrast
- Incidence: 1-2% low-risk, 15-20% high-risk patients
- Risk factors: Baseline renal dysfunction (eGFR <60), diabetes, dehydration, NSAIDs, ACE inhibitors, diuretics
- Prevention: Hydration (NS 0.9% IV), non-ionic low-osmolar contrast, minimize volume, avoid NSAIDs/ACE-I, metformin discontinuation

🏥 **Indian Context**: CIN significant cause of iatrogenic AKI in Indian hospitals. Emphasis on pre-contrast hydration (often inadequate due to resource constraints), judicious contrast volume, repeat eGFR at 48-72 hours post-procedure reduces complications.

**Premedication for High-Risk Patients**:
- Corticosteroids: Dexamethasone 8 mg or methylprednisolone 32 mg BID × 3 doses (reduce reaction incidence 50%)
- Antihistamine: Diphenhydramine 50 mg BID × 3 doses
- H2 blocker: Ranitidine 150 mg BID × 3 doses (limited evidence)
- Non-ionic, low-osmolar contrast mandatory

## Timing & Imaging Protocols

**Arterial Phase** (15-25 sec post-injection): Aorta, arteries opacified
**Portal Venous Phase** (60-70 sec): Hepatic veins, liver parenchyma opacified
**Delayed Phase** (180+ sec): Renal collecting system, urinary bladder

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: Contrast enhancement curves showing arterial/portal/delayed phases for abdominal CT; osmolality comparison chart}}

**Estimated Reading Time**: 10 minutes`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "RD-MOD-01-TOP-04",
    contentMd: `# Radiation Safety & AERB Guidelines

The Atomic Energy Regulatory Board (AERB)—India's nuclear safety authority—establishes standards for diagnostic radiation use, dose limits, and facility compliance ensuring public safety.

## AERB Regulatory Framework

**AERB Authority**:
- Established under Atomic Energy Act 1962
- Regulates use of radioactive materials, radiation devices
- Issues licenses, conducts inspections, enforces compliance

**Key AERB Documents**:
- **Safety Code on Diagnostic X-ray and Gamma Ray Protection** (SC/G-1.2)
- **Safety Code on Medical Exposure Dose Limits & Optimization** (SC/MED)
- **Diagnostic Reference Levels (DRLs)** for common procedures

🎓 **AERB Dose Limits**:
- **Occupational**: 20 mSv/year (averaged over 5 years, max 50 mSv any single year)
- **Public**: 1 mSv/year
- **Pregnant Women**: 1 mSv for remainder of pregnancy (declared pregnancy triggers special monitoring)
- **Fetus**: 1 mSv during pregnancy (risk assessment ongoing; imaging <100 mGy considered safe)

## Facility Requirements & Compliance

**Radiation Protection Officer (RPO)**:
- Designated staff responsible for safety implementation
- Training: AERB-recognized courses (MSc Health Physics, Diploma Radiation Protection)
- Responsibilities: Dose monitoring, safety audits, incident reporting, staff training

**Shielding Design**:
- Primary barrier: Attenuates primary X-ray beam (lead-lined walls, aprons)
- Secondary barrier: Reduces scattered radiation (thinner lead required)
- Thickness calculated based on workload (patient volume), adjacent room occupancy

**Dosimetry & Monitoring**:
- **Personnel monitoring**: TLDs (thermoluminescent dosimeters) issued monthly, processed quarterly; records maintained
- **Area monitoring**: Annual calibration of radiation survey meters; background levels documented
- **Dose audit**: Annual review of imaging protocols, comparison to DRLs; high-dose procedures justified and optimized

💡 **Indian Hospital Compliance**: Teaching hospitals undergo AERB inspections; private facilities variable. Emphasis on dose justification, optimization reduces unnecessary exposure while maintaining diagnostic quality.

## Optimization Principles in Diagnostic Radiology

**Justification**:
- Clinical question clearly defined before imaging
- Imaging benefits > radiation risks
- Avoid duplicated studies; review prior imaging before new imaging
- Unnecessary imaging (low clinical probability) avoided

**Optimization**:
- Appropriate modality selection (US first for soft tissue; CT for bony pathology)
- Lowest dose technique consistent with diagnostic purpose
- Collimation to region of interest (reduces scatter, improves image quality)
- Pulsed fluoroscopy preferred over continuous (reduces dose 2-10×)

**Specific Dose Optimization Techniques**:

**Chest Radiography**:
- Supine portable films (~40 mAs) vs. erect PA films (~1-2 mAs); minimize portable use
- Inverse square law: Distance patient-to-source 6 feet reduces scatter dose
- High kV (125-140 kV) preferred (better penetration, less dose)

**Computed Tomography**:
- Iterative reconstruction reduces noise, permits lower mAs
- Wide detector arrays reduce scanning length (newer scanners)
- Tube current modulation (automatic exposure control—AEC) reduces unnecessary dose in radiolucent regions
- Scout image optimization (minimize repeat scans)

⚡ **Pediatric Imaging Optimization**:
- Dose proportionally reduced for smaller body size
- Immobilization reduces motion artifact/repeats
- Judicious use of sedation only when diagnostic necessity
- Avoid duplicate exams; coordination with prior imaging

🏥 **Indian Context**: AERB DRL implementation variable; many hospitals exceed DRLs (inadequate optimization). Emphasis on radiologist-clinician communication, audit protocols, continuing medical education improves compliance.

## Pregnancy & Radiation Exposure

**Fetal Risk Assessment**:
- **Non-ionizing radiation** (US, MRI): No known fetal harm; safe throughout pregnancy
- **Ionizing radiation**: Risk depends on gestational age, dose

**Gestational Age Risks**:
- **<2 weeks**: All-or-nothing principle; high dose → miscarriage, low dose → no effect
- **2-8 weeks** (organogenesis): Highest risk; threshold 100 mGy (major organ malformation)
- **8-15 weeks** (fetal period): CNS effects possible; threshold 100-200 mGy
- **>15 weeks**: Significant risk requires doses >100 mGy

**Diagnostic Imaging Doses**:
- Chest X-ray: <0.01 mGy (safe, no delay needed)
- Abdominal X-ray: 0.1-0.2 mGy (safe)
- Head CT: 0.2-0.3 mGy (safe)
- Abdominal/pelvic CT: 2-3 mGy (safe if <100 mGy threshold)
- Cumulative chest/abdominal/pelvic imaging: ~3-4 mGy (still safe, <100 mGy threshold)

**Clinical Approach**:
- **Urgent imaging** (trauma, stroke, PE): Proceed; benefit >> risk; counseling offered
- **Elective imaging**: Defer to postpartum period if safe; non-ionizing modalities (US, MRI) substituted when diagnostic
- **Contrast administration**: Generally safe; risk-benefit assessed case-by-case

## Occupational Safety

**Occupational Hazards**:
- Chronic low-dose exposure (scatter radiation)
- Acute injury (accidental high-dose, equipment malfunction)

**Protection Measures**:
- **Distance**: Fluoroscopy operator stands >3 feet from source when possible
- **Shielding**: Lead aprons (0.5-1 mm Pb reduces dose 90-95%), lead thyroid collar (10 mm Pb reduces thyroid dose 50%)
- **Time**: Pulsed fluoroscopy, foot pedal release immediately after visualization
- **Monitoring**: TLD badges document exposure; recorded doses should be <1-2 mSv/year (typically 0.1-1 mSv/year for well-optimized facilities)

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: AERB dose limit framework chart; fetal dose risks across gestational ages; facility shielding design diagram}}

**Estimated Reading Time**: 11 minutes`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "RD-MOD-01-TOP-05",
    contentMd: `# Nuclear Medicine & PET-CT

Nuclear medicine imaging provides functional assessment of organs, tissue perfusion, and metabolism, complementing anatomical imaging modalities. PET-CT combines metabolic (PET) and anatomical (CT) data enabling precise diagnosis.

## Nuclear Medicine Principles

**Radiopharmaceutical Mechanism**:
- Radioactive tracer + biologically active molecule (targeting specific organs/processes)
- Tracer emits gamma rays; gamma camera detects photons creating functional image

**Common Radiopharmaceuticals**:

**Tc-99m Agents** (most common):
- **Tc-99m pertechnetate**: Thyroid, salivary glands, blood pool imaging
- **Tc-99m MDP (methylene diphosphonate)**: Bone imaging; localizes at sites of osteoblastic activity
- **Tc-99m DTPA (diethylenetriaminepentaacetic acid)**: Renal function imaging; glomerular filtration assessment
- **Tc-99m MAA (macroaggregated albumin)**: Ventilation-perfusion (V/Q) scans

**Tl-201 (Thallium-201)**:
- Myocardial perfusion imaging
- Mimics potassium; localizes in viable myocardium
- Redistribution studies: Initial image (injection at stress), delayed image (redistribution) differentiates infarct from ischemia

🎓 **Half-lives & Clinical Implications**:
- Tc-99m: 6-hour half-life; minimal radiation exposure, enables imaging hours post-injection
- Tl-201: 73-hour half-life; allows delayed redistribution imaging
- F-18 FDG: 110-minute half-life; limits regional distribution; PET centers require cyclotron/generator

## Imaging Techniques

**Planar Imaging** (gamma camera):
- Single 2D image acquisition
- Limited sensitivity, depth information lost
- Rapid, inexpensive

**Single-Photon Emission Computed Tomography (SPECT)**:
- Gamma camera rotates 360° around patient
- Multiple projections reconstructed into 3D image
- Superior to planar imaging; improved lesion detection
- Qualitative & quantitative assessment

**SPECT-CT Hybrid**:
- Simultaneous SPECT + CT data acquisition
- Precise anatomical localization of radionuclide uptake
- Reduces false positives, improves specificity
- Cost ~2-3× SPECT alone; increasingly available in Indian tertiary centers

💡 **Clinical Applications in India**:
- Bone scan: Detection of osteomyelitis, stress fractures, metastatic bone disease
- Myocardial perfusion: Risk stratification in CAD, viability assessment
- Renal imaging: Differential renal function, obstruction assessment
- Thyroid imaging: Hyperthyroidism assessment (uptake measurement)

## Positron Emission Tomography (PET)

**Principle**: Positron-emitting radionuclide decays; positron annihilates with electron producing two 511 keV photons (180° apart); detection system determines lesion location.

**F-18 Fluorodeoxyglucose (FDG)**:
- Glucose analog; accumulates in high-metabolism tissues
- Applications: Oncology (primary staging, recurrence detection), neurology (dementia differentiation, seizure localization), cardiology (myocardial viability)
- Advantages: High sensitivity for malignancy, improved detection vs. conventional imaging
- Disadvantages: Limited specificity (inflammation, infection also accumulate FDG); expensive

**SUVmax** (Standardized Uptake Value):
- Quantitative measure of FDG accumulation
- SUVmax >2.5 suggests malignancy (though overlap with benign conditions)
- Prognostic value; higher SUV associated with worse survival

⚡ **PET-CT Advantages**:
- CT provides anatomical localization, soft tissue contrast
- Reduces false positives from focal physiologic uptake mislocalized on PET alone
- Attenuation correction (CT-based) improves image quality
- Single study replaces separate PET + CT

🏥 **Indian PET-CT Availability**: Concentrated in tertiary/private centers; limited government facility access. Cost (~Rs. 15,000-25,000) restricts widespread use; mainly oncology applications. Government AERB regulations require dedicated facilities, trained nuclear medicine physicians.

## Common Nuclear Medicine Protocols

**Myocardial Perfusion Imaging (Stress Test)**:
- **Baseline**: Resting image (Tl-201 or Tc-99m sestamibi injection)
- **Stress Imaging**: Treadmill/pharmacologic stress (adenosine, dipyridamole), immediate imaging
- **Interpretation**: Normal (homogeneous uptake), ischemia (reversible defect—stress > rest), infarct (fixed defect—stress = rest)

**Bone Scan (Skeletal Scintigraphy)**:
- **Timing**: 2-4 hours post Tc-99m MDP injection
- **Views**: Anterior, posterior whole-body images; spot views of suspicious regions
- **Applications**: Metastatic disease screening, osteomyelitis, stress fractures, joint replacement evaluation

**Ventilation-Perfusion Scan** (V/Q):
- **Ventilation**: Tc-99m DTPA aerosol inhalation; assesses ventilated lung regions
- **Perfusion**: Tc-99m MAA IV injection; assesses lung perfusion
- **Interpretation**: Normal (homogeneous V/Q), mismatch (perfusion deficit without ventilation abnormality—suggests PE), match (same distribution—atelectasis/consolidation)
- **Clinical utility**: PE diagnosis; increasingly replaced by CT pulmonary angiography (more sensitive/specific)

**Renal Function Imaging** (MAG3):
- **Measurement**: Differential renal function (contribution each kidney to total GFR)
- **Assessment**: Obstruction (delayed drainage pattern)
- **Clinical use**: Post-transplant function, obstruction differentiation (functional reserve assessment)

## Radiation Safety in Nuclear Medicine

**Exposure Control**:
- **Vial Shielding**: Syringe shields (tungsten, lead) reduce hand exposure
- **Preparation**: Minimize contact time; use tongs/forceps for handling
- **Disposal**: Radioactive waste management per AERB guidelines; decay-in-storage or incineration

**Patient Counseling**:
- Temporary increase in background radiation (days post-injection)
- Recommend distance from young children, pregnant women for 24-48 hours
- Breast-feeding interruption guidelines (variable by radiopharmaceutical; Tc-99m can continue)

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: PET-CT image showing FDG uptake in malignancy with CT anatomical overlay; bone scan showing metastatic involvement; myocardial perfusion images demonstrating reversible defect}}

**Estimated Reading Time**: 11 minutes`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "RD-MOD-02-TOP-01",
    contentMd: `# Chest X-ray Interpretation

The chest X-ray (CXR) remains the most commonly performed radiograph, requiring systematic interpretation to identify cardiopulmonary pathology. Structured approach—technical adequacy, anatomy, pathology—ensures complete evaluation.

## Technical Assessment & Patient Positioning

**Adequacy Evaluation**:
- **Posteroanterior (PA) View**: Gold standard; patient face toward detector; heart magnification minimal
- **Anteroposterior (AP) View**: Portable films; heart magnified 10-15% (limit interpretation); used when patient unable to stand
- **Penetration**: Vertebral bodies visible through cardiac silhouette; under-penetrated (white) or over-penetrated (black) images limit interpretation
- **Rotation**: Medial clavicular ends equidistant from midline; rotation distorts heart size assessment
- **Inspiration**: ≥6 ribs visible above diaphragm; hypo-inspiratory films appear more opaque, heart enlarged

🎓 **CXR Quality Issues**:
- **Motion Blur**: Patient movement during exposure; cardiac borders indistinct
- **Portable AP**: Heart enlarged 10-15% (patient upright, not optimal positioning); limit comparison with prior PA films
- **Poor Penetration**: Over/under-penetrated; reshot if possible

## Systematic Interpretation Framework

**ABCDEFG Approach**:

**A - Airways**: Trachea midline (shift indicates mass/atelectasis), carina visible

**B - Bones**: Cortical margins intact, osteopenia/sclerosis assessment, prior fractures, vertebral alignment (kyphoscoliosis)

**C - Cardiac Silhouette**:
- **Cardiomegaly**: Cardiothoracic ratio >0.5 (measured on PA film at widest cardiac point ÷ widest thoracic width at diaphragm)
- **Shape**: Globular (dilated cardiomyopathy), straight left heart border (left atrial enlargement from mitral stenosis), boot-shaped (RV enlargement)
- **Borders**: Silhouette sign (loss of normal cardiac border indicates adjacent consolidation)

💡 **Silhouette Sign Interpretation**:
- Right heart border obscured: Right middle lobe pathology
- Left heart border obscured: Lingula or left lower lobe pathology
- Heart apex obscured: Left lower lobe pathology

**D - Diaphragm**:
- Smooth, curved contours bilaterally
- Right diaphragm slightly higher than left (liver elevation)
- Diaphragm level: At 6th rib (inspiration) or 7th rib (expiration)
- Unilateral elevation suggests paralysis (phrenic nerve injury)

**E - Extent of Lungs**:
- Visualize entire lungs; count ribs posteriorly
- Apices visible; exclude lung or mediastinal masses

**F - Fluids**: Pleural effusions (blunted costophrenic angles), pulmonary edema (Kerley B lines—septal lines, bat-wing distribution, alveolar infiltrates)

**G - Gas/Foreign Bodies**: Pneumothorax (visceral pleura line visible), air under diaphragm (perforation), foreign body

⚡ **Pediatric CXR Differences**:
- Mediastinum relatively wider (normal thymic tissue)
- Thymic silhouette may simulate cardiac enlargement
- Heart more horizontal
- Increased interstitial opacification (normal)

## Common CXR Findings

**Consolidation** (alveolar infiltrate):
- White/opaque appearance; replaces air with fluid/pus/cells
- **Lobar patterns**: Right upper lobe, right middle lobe, right lower lobe, left upper lobe, lingula, left lower lobe
- **Causes**: Pneumonia (bacterial, viral, fungal), aspiration, pulmonary edema
- **Air bronchogram**: Bronchus visible within opaque lung (suggests alveolar filling)

**Interstitial Infiltrate**:
- Fine, reticular opacification; vessel outlines blurred
- **Causes**: PCP (Pneumocystis jirovecii pneumonia), viral pneumonia, pulmonary fibrosis, lymphangitic carcinomatosis
- **Kerley B Lines**: Horizontal septal lines at lung bases (pulmonary edema, lymphangitis)

**Atelectasis** (collapse):
- Reduced lung volume; displaced mediastinum toward atelectatic side
- **Lobar patterns**: Characteristic changes (right upper lobe wedge appearance, right middle lobe triangular opacity)

**Pleural Effusion**:
- Blunted costophrenic angle (early), homogeneous opacification of hemithorax (massive)
- Lateral decubitus film: Free fluid layers (fluid vs. loculated)

🏥 **Indian TB Prevalence**: Apical infiltrates common; cavitary disease with surrounding opacity ("tuberculoma" appearance) suggestive; compare with prior films for chronicity.

**Pneumothorax**:
- Visceral pleura visible as thin curved line; lucency beyond line is air-free space
- **Tension PTX**: Mediastinal shift, hemidiaphragm depression (emergency decompression required)
- Expiratory film enhances visualization (affected lung more atelectatic)

**Pneumomediastinum**:
- Air in mediastinum; visible as lucency around heart
- **Causes**: Pneumothorax rupture into mediastinum, bronchial/esophageal injury, barotrauma (mechanical ventilation, Valsalva)

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: CXR anatomy labeled showing lobes, segments, silhouette sign regions; examples of consolidation, atelectasis, pleural effusion}}

**Estimated Reading Time**: 11 minutes`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "RD-MOD-02-TOP-02",
    contentMd: `# Pulmonary Imaging

Advanced imaging—CT, HRCT—provides superior lung parenchymal detail, enabling diagnosis of diffuse lung disease, suspected malignancy, and complications invisible on plain radiography.

## High-Resolution CT (HRCT) Chest

**Technique**:
- Thin-section images (1-1.5 mm slice thickness)
- Lung window (window level -600, width 1500 HU): Optimizes lung parenchymal visualization
- Mediastinal window (level 40, width 400 HU): Heart, mediastinal structures
- Prone imaging: Posterior lung redistribution of atelectasis (normal), excludes gravity-dependent artifact

**Advantages**:
- Exquisite detail; detects small nodules (<5 mm), subtle parenchymal abnormalities
- Disease pattern recognition (bronchiectasis, UIP—usual interstitial pneumonia, sarcoidosis)
- Staging (fibrosis extent, honeycombing—architectural distortion predicting mortality)

💡 **Clinical Applications**:
- Interstitial lung disease (ILD) diagnosis/staging without biopsy
- Bronchiectasis assessment; severity guides antibiotic therapy, rehabilitation
- Chronic obstructive pulmonary disease (COPD) phenotyping (emphysema vs. small airway disease)
- Lung cancer screening (annual low-dose CT in high-risk smokers)

## Patterns of Lung Pathology

**Nodular Pattern**:
- **Small nodules** (<5 mm): Micronodular; hematogenous dissemination (TB, fungal, metastases)
- **Large nodules** (>5 mm): Focal lesions; lung cancer, fungal, inflammatory (sarcoid)
- **Centrilobular**: Central (central bronchiole area); smoking-related, respiratory bronchiolitis
- **Perilymphatic**: Along lymphatics; sarcoidosis, silicosis, lymphangitic carcinomatosis
- **Random**: Hematogenous dissemination; TB, fungal, metastases

**Reticular Pattern**:
- Linear opacities; interconnected network appearance
- **Causes**: Pulmonary fibrosis (UIP), asbestosis, sarcoidosis stage IV
- **UIP Pattern**: Honeycombing (architectural distortion, small <1 cm cystic spaces), traction bronchiectasis (bronchi enlarged), lower lobe predominance, subpleural/basilar emphasis

⚡ **Honeycombing Significance**: Indicates end-stage fibrosis, predicts poor prognosis (median survival IPF 3-5 years if honeycombing present). UIP pattern on HRCT sufficient for IPF diagnosis without biopsy (ATS/ERS/JRS 2018 guidelines).

**Consolidation Pattern**:
- Alveolar filling; opacification obscuring vessels
- **Causes**: Pneumonia, aspiration, pulmonary edema, infarction
- **Air bronchogram**: Bronchus visible within consolidation; indicates alveolar filling
- **Bronchogram absence**: Suggests airway obstruction (tumor) or pleural pathology

**Bronchiectasis**:
- Bronchus-to-artery ratio >1 (bronchial lumen larger than accompanying artery)
- **Traction bronchiectasis**: Bronchial enlargement from fibrotic traction
- **Bronchiectatic changes**: Lack of bronchial tapering (irregular bronchial contours)
- **Clinical**: COPD exacerbation frequency increases; antibiotic prophylaxis, regular clearance therapy improve outcomes

🎓 **Ground-Glass Opacity (GGO)**:
- Increased lung density <consolidation density; vessels visible through opacity
- **Differential**: Early pneumonia, viral infection, IPF, infection (TB, fungal), hemorrhage
- **Reversible**: PCP (Pneumocystis jirovecii pneumonia—improves with treatment), viral
- **Irreversible**: Fibrosis (traction bronchiectasis development indicates fibrosis, non-reversible)

## CT Staging & Clinical Correlation

**Interstitial Lung Disease Staging**:
- **Mild**: <10% lung involved
- **Moderate**: 10-20% lung involved
- **Severe**: >20% lung involved
- **Prognostic Prediction**: Honeycombing, extent of fibrosis predict mortality better than pulmonary function tests

**COPD Assessment**:
- **Emphysema**: Low attenuation areas (LAA—areas <-950 HU); extent prognostic for mortality
- **Small airway disease**: Bronchiolar wall thickening, decreased vessel caliber
- **Composite assessment**: Phenotype identification guides management (bronchodilators vs. ICS-LABA combination)

## Incidental Nodule Management

**Lung-RADS Classification** (CT nodule assessment):
- **Category 1** (benign): Non-contrast evaluation, no follow-up
- **Category 2** (probably benign): <6 mm nodule; routine follow-up at 12 months
- **Category 3** (probably benign, but higher risk): 6-8 mm nodule; follow-up at 3-6 months, then 12 months
- **Category 4A** (suspicious): 8-20 mm nodule; 3-month follow-up (or biopsy if high risk)
- **Category 4B** (suspicious): >20 mm nodule; biopsy/PET recommended
- **Category 4X** (unreliable/incomplete): Repeat imaging

**Nodule Characteristics Favoring Malignancy**:
- Size >8 mm, irregular margins, spiculation, higher attenuation, lower lobe location, growth over serial imaging

🏥 **Indian Lung Cancer Epidemiology**: Non-smoker lung cancer common (environmental exposure, biomass burning); younger age presentation. EGFR mutation testing routine (~40-50% in non-smoker adenocarcinomas).

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: HRCT images showing UIP pattern with honeycombing; bronchiectasis with bronchus-artery ratio >1; emphysematous changes with low attenuation areas}}

**Estimated Reading Time**: 11 minutes`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "RD-MOD-02-TOP-03",
    contentMd: `# Cardiac Imaging

Cardiac imaging encompasses structural (echocardiography, CT, MRI) and functional (stress testing, nuclear) modalities, each providing complementary information for CAD, valvular disease, cardiomyopathy assessment.

## Chest X-ray Cardiac Assessment

**Cardiomegaly**:
- Cardiothoracic ratio >0.5 (PA view) indicates cardiac enlargement
- **Differential**: Dilated cardiomyopathy (globular heart), hypertension (asymmetric LV enlargement), valvular disease (specific chamber enlargement patterns)
- **Limitations**: May miss mild LV dilatation (CTR <0.5); posterior position of LV underestimated

**Chamber-Specific Enlargement**:
- **Left Atrial Enlargement**: Straightened left heart border, double density (two LA silhouettes), splayed carina (>90°), posterior displacement on lateral view
- **Left Ventricular Enlargement**: Elongated cardiac apex extending beyond mid-axillary line, increased LV contour convexity
- **Right Atrial Enlargement**: Right heart border convexity increased, appears as rounded right heart border
- **Right Ventricular Enlargement**: Anterior displacement of heart, increased rightward convexity

💡 **Mitral Stenosis Pattern**: Straightened left heart border (LA enlargement), double density, splayed carina, normal LV size; classic post-stenotic mitral configuration. In India, rheumatic mitral stenosis remains common; imaging identifies severe disease (atrial fibrillation, thrombus risk).

**Pulmonary Vasculature Assessment**:
- **Upper Lobe Diversion**: Pulmonary edema; upper lobe vessels dilate, lower lobe vessels constrict (reversed normal pattern)
- **Pulmonary Edema Pattern**: Interstitial edema (Kerley B lines), alveolar edema (bilateral, bat-wing distribution), cardiomegaly + edema = cardiogenic pulmonary edema

## Echocardiography

**Principle**: Ultrasound assessment of cardiac structure, function, blood flow; no radiation, real-time dynamic assessment.

**Imaging Planes**:
- **Parasternal Long-axis**: LV, LA, aorta, mitral valve
- **Parasternal Short-axis**: Ventricular cross-section (useful for regional wall motion, papillary muscle)
- **Apical 4-chamber**: LV, RV, both atria, mitral/tricuspid valves
- **Subcostal**: Pericardium, IVC

**Doppler Assessment**:
- **Spectral Doppler**: Velocity measurement across valve or within chamber
- **Color Doppler**: Flow visualization; red (toward transducer), blue (away from transducer)
- **Tissue Doppler**: Myocardial motion assessment; reduced in cardiomyopathy

🎓 **Ejection Fraction (EF) Calculation**:
- Method: Manual tracing of LV endocardium (end-diastole, end-systole); automated algorithm or visual estimation
- EF = (EDV - ESV) / EDV × 100%
- Interpretation: >50% normal, 40-50% mildly reduced, 30-40% moderately reduced, <30% severely reduced

**Valvular Assessment**:
- **Mitral Stenosis**: Reduced leaflet mobility, diastolic gradient (mean gradient >5 mmHg significant stenosis)
- **Mitral Regurgitation**: Systolic jet into LA; severity graded by jet area (mild <20% LA, moderate 20-40%, severe >40%)
- **Aortic Stenosis**: Reduced leaflet opening, systolic gradient (>30 mmHg moderate, >50 mmHg severe)
- **Aortic Regurgitation**: Diastolic jet into LV; severity by jet width at origin

⚡ **Wall Motion Assessment**:
- 16-segment model; each segment graded (1 = normal, 2 = hypokinesis, 3 = akinesis, 4 = dyskinesis)
- Regional wall motion abnormality (RWMA) in coronary distribution suggests CAD

## Cardiac CT

**Coronary Artery Calcium (CAC) Scoring**:
- Non-contrast CT; quantifies coronary calcification extent
- **Agatston Score**: 0 (no disease), 1-100 (mild), 101-400 (moderate), >400 (severe)
- **Risk Stratification**: CAC 0 = <1% 10-year events; CAC >400 = 7-10% risk
- **Limitations**: Calcium absence doesn't exclude CAD; mixed plaque (non-calcified) may be hemodynamically significant

**Coronary CTA**:
- IV contrast; visualizes coronary arteries, plaque composition, luminal stenosis
- **Sensitivity/Specificity**: 95%/90% for significant stenosis (>70%)
- **Advantages**: No radiation (minimal vs. nuclear), fast, anatomical detail
- **Disadvantages**: Contrast administration required, calcium artifact degrades image, increased HR/arrhythmias reduce diagnostic quality

💡 **Indian CAD Epidemiology**: Premature CAD common (males <45, females <55); imaging widely utilized. Coronary CTA increasingly preferred over exercise stress testing (better sensitivity in equivocal cases, assessment of plaque morphology).

**Left Ventricular Ejection Fraction (LVEF) Quantitation**:
- Automated software calculates EF from end-diastolic and end-systolic volumes
- Accuracy comparable to echocardiography
- Useful in patients with poor acoustic windows

## Cardiac MRI

**Advantages**:
- Superior soft tissue contrast; no radiation
- Myocardial tissue characterization (edema, fibrosis, scar assessment via late gadolinium enhancement—LGE)
- Functional quantification (EF, chamber volumes)

**Applications**:
- **Cardiomyopathy differentiation**: DCM (dilated cardiomyopathy—LV dilatation, reduced EF), HCM (hypertrophic cardiomyopathy—asymmetric septal hypertrophy), restrictive cardiomyopathy (normal chamber size, reduced function)
- **Myocarditis**: Subepicardial LGE pattern; edema evident on T2-weighted imaging
- **Infiltrative Disease**: Sarcoidosis (LGE pattern), amyloidosis (diffuse subendocardial LGE)
- **Viability Assessment**: Infarcted myocardium shows transmural LGE; ischemic but viable myocardium partially transmural or subendocardial LGE

🏥 **Indian MRI Availability**: Cardiac MRI limited to tertiary centers; echocardiography remains primary structural assessment modality. Increasing recognition of value for myocarditis diagnosis (common post-viral/post-vaccination; prevents inappropriate ICD placement).

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: Echocardiographic views showing 4-chamber, parasternal long-axis; cardiac CT image showing stenotic LAD; CMR image showing LGE in myocardial infarction}}

**Estimated Reading Time**: 11 minutes`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "RD-MOD-03-TOP-01",
    contentMd: `# Bone & Joint Imaging

Skeletal imaging encompasses plain radiography, CT, MRI, and nuclear medicine, each providing complementary information for trauma, degenerative disease, infection, and neoplasia assessment.

## Plain Radiography Bone Pathology

**Fracture Assessment**:
- **Fracture Lines**: Visible breaks in cortical outline; Salter-Harris classification guides pediatric fracture management
- **Displacement**: Angulation, translation measured; guides surgical vs. conservative treatment
- **Comminution**: Multiple fragments; prognostic indicator (less anatomical restoration possible)
- **Open Fractures**: Soft tissue injury visible; highest infection risk (early antibiotics, surgical management)

**Imaging Technique**:
- Minimum two orthogonal views (AP, lateral) standard
- Oblique views often diagnostic (scaphoid fractures difficult to appreciate on standard views)
- Contralateral comparison aids pediatric diagnosis (growth plate confusion with fractures)

💡 **Salter-Harris Classification** (pediatric growth plate fractures):
- **Type I**: Fracture through growth plate only (good prognosis)
- **Type II**: Fracture through growth plate + metaphysis (most common, good prognosis)
- **Type III**: Fracture through growth plate + epiphysis (surgical reduction often required)
- **Type IV**: Fracture through epiphysis, growth plate, metaphysis (surgical reduction critical—malunion → growth abnormality)
- **Type V**: Crush injury to growth plate (worst prognosis; growth disturbance common)

**Bone Density Assessment**:
- **Osteoporosis**: Reduced density; vertebral bodies appear lighter, vertebral body fractures common
- **Osteosclerosis**: Increased density; dense metaphyseal bands (normal), diffuse sclerosis (pathologic)
- **Stress Fractures**: Early—linear lucencies perpendicular to cortex; late—callus formation (periosteal new bone)

## Bone Infection & Inflammation

**Osteomyelitis**:
- **Acute**: Early radiographs normal; soft tissue swelling visible (edema)
- **Subacute** (2-3 weeks): Bone lucency (lytic bone destruction), periosteal reaction (lamellated, sunburst, onion-skin appearance)
- **Chronic**: Sequestrum (dead bone—denser fragment), involucrum (reactive bone surrounding sequestrum), sinus tract (communication to skin)

**Nuclear Medicine (Bone Scan)**:
- **Acute Osteomyelitis**: Triple-phase bone scan shows increased blood flow (angiographic phase), blood pool (soft tissue phase), delayed osteoblastic uptake
- **Sensitivity**: >90% in acute osteomyelitis; poor specificity (fracture, arthritis also show uptake)

⚡ **MRI for Osteomyelitis**:
- **Sensitivity/Specificity**: >90%; superior to plain films for early detection
- **Findings**: Intramedullary edema (T2 hyperintense), abscess formation (T2 hyperintense), cortical destruction
- **Advantage**: Differentiates from cellulitis (soft tissue edema), identifies complications (septic arthritis, sequestrum formation)

🎓 **Vertebral Osteomyelitis**:
- Disc space initially spared (well-demarcated endplate involvement distinguishes from degenerative disc disease)
- Paravertebral abscess often present (MRI best visualizes)
- IV drug use, immunosuppression, prosthetic joints risk factors (Staph aureus common)

## Bone Tumors

**Primary Malignant Tumors**:

**Osteosarcoma** (most common primary malignant):
- **Age**: 10-25 years; metaphyseal location (distal femur, proximal tibia)
- **Imaging**: Sclerotic/lytic lesion, cortical destruction, sunburst periosteal reaction (new bone formation), soft tissue mass
- **Aggressive appearance**: Mixed lytic/sclerotic, wide zone of transition (margin ill-defined)

**Ewing's Sarcoma**:
- **Age**: 10-20 years; diaphyseal location (femur shaft)
- **Imaging**: Lytic lesion, onion-skin periosteal reaction, soft tissue mass common
- **Differential from Osteosarcoma**: Diaphyseal location, younger age, Ewing's more lytic

**Giant Cell Tumor**:
- **Age**: 20-40 years; epiphyseal/metaepiphyseal location (distal femur, proximal tibia)
- **Imaging**: Lytic lesion, eccentric location, extends to articular surface, thin margin (benign appearance)

**Secondary Malignancy** (metastases):
- **Common primaries**: Breast, lung, kidney, thyroid, prostate
- **Pattern**: Multiple lesions, variable appearance (lytic, sclerotic, mixed)
- **Complications**: Pathologic fractures (compromise structural integrity)

## Joint Imaging

**Osteoarthritis (OA)**:
- **Radiographic Features**: Joint space narrowing (cartilage loss), osteophytes (bone spurs at margins), subchondral sclerosis (reactive bone), cyst formation
- **Grading**: Kellgren-Lawrence scale (0-4); grade 3-4 indicates advanced disease
- **Common Sites**: Knee, hip, spine, hand (DIP, PIP joints)

**Rheumatoid Arthritis (RA)**:
- **Early**: Periarticular soft tissue swelling, periarticular osteopenia (demineralization)
- **Late**: Symmetric joint space narrowing, marginal erosions (bone destruction at joint margin), subluxation
- **Differentiation from OA**: RA symmetric involvement, multiple joints, erosions; OA asymmetric, osteophytes

💡 **MRI Joint Imaging**:
- **Cartilage Assessment**: T2-weighted imaging; high signal cartilage vs. low signal bone, tendon
- **Ligament Integrity**: ACL (anterior cruciate), MCL (medial collateral) tears visualized as discontinuity
- **Meniscal Pathology**: Tears (signal changes, morphologic abnormalities)
- **Bone Marrow Edema**: High signal on STIR (short tau inversion recovery); indicates stress/microfractures

**Ultrasound Joint Assessment**:
- **Real-time Dynamic Imaging**: Movement assessed during patient motion
- **Soft Tissue**: Fluid, tendon integrity, synovitis (hypoechoic fluid around joint)
- **Guidance**: Therapeutic injection targeting (corticosteroid, viscosupplement for OA)

🏥 **Indian Joint Disease Epidemiology**: Osteoarthritis common in elderly; rheumatoid arthritis affects younger population. Tuberculous arthritis still encountered; imaging shows characteristic destruction patterns (epiphyseal involvement, multiple joint involvement). Imaging guides management (conservative vs. surgical reconstruction).

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: Fracture classification (Salter-Harris types); osteosarcoma showing sunburst periosteal reaction; osteoarthritis showing osteophytes and joint space narrowing}}

**Estimated Reading Time**: 11 minutes`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "RD-MOD-03-TOP-02",
    contentMd: `# Neuroimaging: CT & MRI Brain

Neuroimaging—CT and MRI—provides essential assessment for acute neurological emergencies, chronic neurological disease, and neoplasia. Each modality offers distinct advantages; appropriate selection guided by clinical presentation and urgency.

## CT Brain

**Advantages**:
- **Speed**: Minutes for acquisition/interpretation; ideal for acute stroke, trauma, hemorrhage assessment
- **Availability**: Widespread; available in emergency departments
- **Sensitivity for Hemorrhage**: Highly sensitive for acute blood (hyperdense appearance)
- **Bone Detail**: Superior cortical bone visualization; fracture assessment

**Technique**:
- **Non-contrast**: Initial imaging for acute presentation (hemorrhage, mass effect, hydrocephalus)
- **Contrast-enhanced**: Tumor, infection, inflammatory assessment; post-contrast enhancement indicates BBB breakdown

**Acute Stroke Assessment**:
- **Non-contrast CT**: Excludes hemorrhage (hyperdense appearance); identifies early ischemic changes (subtle—reduced gray matter density, effaced sulci)
- **CT Perfusion (CTP)**: Maps brain perfusion; identifies mismatch (perfusion deficit > diffusion-restricted tissue—salvageable ischemic penumbra)
- **CT Angiography (CTA)**: Identifies vascular occlusion (absent vessel opacification), degree of stenosis; guides thrombectomy candidacy

💡 **Hypodensity vs. Hyperdensity**:
- **Hypodense** (dark): Water-equivalent (CSF, edema, infarction)
- **Hyperdense** (bright): High attenuation (blood, bone, calcification, contrast)
- **Gray-White Matter Differentiation**: Normal brain shows distinction; loss (hypodensity spreading) indicates edema/infarction

**Traumatic Brain Injury (TBI)**:
- **Epidural Hemorrhage**: Lens-shaped (biconvex) hyperdense collection between skull and dura; decompression urgent (mass effect)
- **Subdural Hemorrhage**: Crescent-shaped collection between dura and arachnoid; can cross midline (unlike epidural)
- **Subarachnoid Hemorrhage (SAH)**: Hyperdensity in sulci/basal cisterns; risk of vasospasm (days 3-14 post-bleed)
- **Contusion**: Heterogeneous hypodensity/hyperdensity (blood mixed with edema); coup-contrecoup pattern (injury site + opposite pole from impact)

## MRI Brain

**Advantages**:
- **Soft Tissue Contrast**: Superior gray-white matter differentiation
- **No Radiation**: Safe in pregnancy, pediatric patients, multiple assessments
- **Diffusion-Weighted Imaging (DWI)**: Detects acute ischemia (restricted diffusion appears hyperintense) within minutes (CT shows ischemia only after hours)
- **Functional Imaging**: fMRI (brain activation), DTI (white matter tracts), perfusion assessment

**Pulse Sequences**:

**T1-Weighted**:
- CSF dark (hypointense), white matter bright (hyperintense)
- **Contrast Enhancement**: White matter bright, lesions enhancing (BBB breakdown) appear hyperintense
- **Applications**: Anatomy, tumor, infection assessment

**T2-Weighted**:
- CSF bright (hyperintense), white matter intermediate, gray matter hypointense
- **Applications**: Pathology detection (edema, infarction, infection appear hyperintense)

**FLAIR (Fluid-Attenuated Inversion Recovery)**:
- CSF suppressed (dark); pathology (edema, infarction) hyperintense
- **Advantage**: Improves lesion detection along ventricular surface

**DWI (Diffusion-Weighted Imaging)**:
- Measures water diffusion restriction (molecules impeded)
- **Acute Ischemia**: Restricted diffusion (hyperintense); appears before T1/T2 changes
- **Timeline**: Positive at minutes (CT negative), remains positive for days

⚡ **Acute Stroke MRI Strategy**:
- **Hyperacute (<6 hours)**: DWI + perfusion imaging enables mechanical thrombectomy if large vessel occlusion identified
- **Acute (6-24 hours)**: DWI/PWI mismatch identifies salvageable ischemic penumbra
- **Subacute (1-7 days)**: T2/FLAIR show ischemic infarction as hyperintensity

## Common Brain Pathology

**Brain Tumors**:
- **Glioma** (astrocytoma, oligodendroglioma, glioblastoma): Infiltrative mass, T1 hypointense, T2 hyperintense, enhancement variable (grade-related)
- **Meningioma**: Extra-axial (outside brain parenchyma), broad dural base, T1 isointense, homogeneous enhancement
- **Metastases**: Multiple lesions (gray-white junction predilection), ring enhancement, surrounding edema

🎓 **Mass Effect Assessment**:
- **Midline Shift**: Lateral displacement of septum pellucidum (indicates significant mass effect, poor prognosis if >1 cm)
- **Obliteration of Cisternal Spaces**: Loss of normal CSF spaces around brainstem (indicates increased intracranial pressure)
- **Hydrocephalus**: Ventricular enlargement; indicates CSF obstruction (mass, inflammation)

**Stroke**:
- **Acute Ischemia**: DWI hyperintensity, follows vascular territory
- **Hemorrhagic Transformation**: T2 hypointensity (blood) within ischemic region
- **Chronic Infarction**: Residual hypodensity/hyperintensity, encephalic atrophy in distribution

**Dementia Imaging**:
- **Alzheimer's Disease**: Global cerebral atrophy, medial temporal atrophy, hippocampal volume loss
- **Vascular Dementia**: Multiple infarcts (different vascular territories)
- **Frontotemporal Dementia**: Frontal/temporal atrophy (asymmetric common)
- **Lewy Body Dementia**: Minimal atrophy, preserved hippocampus (differentiates from AD)

**Infection**:
- **Meningitis**: T2 hyperintense sulcal enhancement, ventricular involvement
- **Brain Abscess**: Ring enhancement (necrotic center), surrounding edema, DWI hyperintense (purulent material restricted diffusion)
- **Encephalitis**: Gray matter T2 hyperintensity, variable enhancement

🏥 **Indian Context**: TB meningitis common; basilar enhancement with hydrocephalus characteristic. Imaging guides diagnosis (CSF examination gold standard, but imaging aids clinical suspicion). HIV-related CNS infections (toxoplasmosis—ring-enhancing lesions; PML—multifocal demyelinating lesions) assessment with MRI + CD4 count combination.

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: CT epidural hematoma showing lens-shaped hyperdensity; MRI DWI showing acute ischemic stroke; brain tumor with ring enhancement and surrounding edema}}

**Estimated Reading Time**: 12 minutes`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "RD-MOD-03-TOP-03",
    contentMd: `# Spine Imaging

Spine imaging encompasses plain radiography, CT, and MRI, each providing complementary information for degenerative disease, infection, trauma, and neoplasia. Systematic approach ensures accurate diagnosis and appropriate management.

## Plain Radiography Spine

**Cervical Spine**:
- **Alignment Assessment**: Vertical line through posterior bodies; anterior vertebral body alignment check for subluxation
- **Anterior Vertebral Body Line**: Fracture, degenerative changes detected
- **Spinolaminar Line**: Dorsal aspect of spinal canal alignment; disruption suggests posterior ligament injury
- **Dens (Odontoid) Assessment**: Fracture (trauma), hypoplasia (Down syndrome)

**Lateral View Pathology**:
- **Kyphosis**: Forward curvature; normal cervical spine has lordosis (backward curvature); loss indicates trauma/degenerative change
- **Disc Space**: Height assessment; narrowing indicates disc degeneration
- **Osteophytes**: Bone spurs at vertebral margins; osteophytic spondylosis common with aging

💡 **Cervical Trauma Assessment**:
- Three-line method detects anterior ligament injury: Anterior vertebral body line, posterior body line, spinolaminar line; disruption of any line suggests instability
- Interspinous distance widening indicates posterior ligament disruption (unstable injury)

**Thoracic & Lumbar Spine**:
- **Body Height**: Loss suggests compression fracture (common in osteoporosis, metastatic disease)
- **Kyphosis Assessment**: Excessive thoracic kyphosis (normal 30°) indicates vertebral collapse
- **Disc Space Height**: Narrowing in lumbar spine indicates degenerative disc disease (spondylosis)
- **Facet Joints**: Hypertrophic changes visible on oblique views; contribute to spinal stenosis

**Findings Suggesting Malignancy**:
- Paravertebral soft tissue mass
- Posterior element involvement (usually degenerative excludes posterior elements)
- Mixed lytic/sclerotic lesion
- Multiple vertebral involvement

⚡ **Metastatic Disease**: Most common spine malignancy; breast, lung, kidney, prostate common primaries. Location: 50% thoracic, 35% lumbar, 15% cervical. Early detection with imaging guides treatment (radiation, chemotherapy, surgical stabilization).

## CT Spine

**Advantages**:
- **Cortical Bone Detail**: Fracture, subluxation, canal compromise assessment
- **Speed**: Rapid; useful in trauma protocols
- **Multiplanar Reconstruction**: Sagittal, coronal views from axial data; surgical planning

**Acute Trauma**:
- **Fracture Classification**: Compression (anterior body), burst (retropulsion into canal), flexion-distraction (ligament disruption), shear (translation)
- **Canal Compromise**: Retropulsed bone/disc measuring canal diameter; >50% reduction causes myelopathy risk
- **Ligament Assessment**: CT poorly visualizes ligaments (MRI superior)

**CT Myelography** (CT performed after intrathecal contrast):
- **Technique**: Lumbar puncture, intrathecal iohexol injection, prone positioning, thin-section imaging
- **Applications**: Ossification of posterior longitudinal ligament, arachnoiditis, cord atrophy assessment
- **Advantage**: Combines CT bone detail with CSF (contrast) visualization
- **Limitation**: Invasive; requires lumbar puncture (infection risk, post-procedure headache)

🎓 **Spinal Canal Dimensions**:
- **Normal**: Cervical canal >12 mm diameter; lumbar >10 mm
- **Stenosis**: <10 mm cervical (symptomatic), <8 mm lumbar (symptomatic)
- **Grade**: Mild (>10 mm), moderate (5-10 mm), severe (<5 mm)

## MRI Spine

**Advantages**:
- **Soft Tissue Contrast**: Cord, ligament, disc detail superior
- **No Radiation**: Safe for repeated imaging
- **Functional Assessment**: Cord signal changes (edema = T2 hyperintense, syrinx = focal cavity)

**Disc Hernia Classification**:
- **Bulge**: Generalized disc extension beyond vertebral endplates
- **Protrusion**: Focal extension; contact with dura/nerve root, but annulus intact
- **Extrusion**: Disc material extends through annulus; no contact with parent disc
- **Sequestration**: Free fragment separate from parent disc; migrates within spinal canal

**Clinical Significance**:
- **Protrusion**: Typically no neural compromise
- **Extrusion**: Often neural compromise (nerve root compression, myelopathy if cord affected)
- **Sequestration**: Higher risk of cord compression; may require surgical decompression

💡 **Cord Signal Changes**:
- **T2 Hyperintensity**: Edema (acute/subacute) or chronic myelomalacia (cord degeneration)
- **Syrinx**: Focal cavity within cord; associated with trauma, tethering, Chiari malformation
- **Atrophy**: Cord volume reduction; indicates chronic myelopathy, poor prognosis for recovery

**Myelopathy Etiology**:
- **Cervical Spondylosis**: Osteophyte, disc herniation, ligamentum flavum hypertrophy causing canal stenosis
- **Ossification of Posterior Longitudinal Ligament (OPLL)**: Common in East Asian populations; progressive canal stenosis
- **Tethered Cord**: Cord traction (filum terminale thickening/tightness), abnormal conus position (>L2 level)
- **Spinal Cord Injury**: Contusion (cord swelling), hemorrhage (hematomyelia), transection

**Infection**:
- **Vertebral Osteomyelitis**: T1 hypointense, T2 hyperintense (edema), enhancement post-gadolinium, disc space initially spared
- **Discitis**: Disc space T2 hyperintensity, enhancement; typically early disc involvement
- **Epidural Abscess**: Extradural collection, T1 hypointense, rim enhancement; spinal cord compression risk
- **TB Spine** (Pott's disease): Multiple vertebral involvement, kyphosis, paravertebral abscess; common in endemic regions

🏥 **Indian Spinal TB Prevalence**: TB affects lower thoracic/lumbar spine commonly; anterior column involvement characteristic. Early imaging identifies spinal deformity risk (kyphosis progression), cord compression (myelopathy risk). Antituberculous therapy + orthotic bracing (or surgery if severe deformity/cord compression) guides management.

**Neoplasia**:
- **Intramedullary Tumors**: Cord expansion, T2 hyperintensity (syrinx), cord signal change within tumor
- **Intradural Extramedullary**: Meningioma, nerve sheath tumor, arachnoid cyst; cord displaced/compressed
- **Extradural**: Metastasis, lymphoma, epidural abscess

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: Cervical spine lateral view showing alignment assessment; lumbar MRI showing disc herniation with cord compression; TB spine showing kyphosis and paravertebral abscess}}

**Estimated Reading Time**: 12 minutes`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "RD-MOD-04-TOP-01",
    contentMd: `# Abdominal X-ray & USG

Abdominal imaging encompasses plain radiography and ultrasound, each providing complementary information for acute abdomen assessment, mass detection, and organ evaluation. Systematic approach optimizes diagnostic yield.

## Abdominal X-ray (AXR) Interpretation

**Technical Adequacy**:
- **Supine View**: Standard; visualizes all abdominal organs
- **Upright/Left Lateral Decubitus**: Assess for free air (pneumoperitoneum), fluid levels
- **Exposure**: Vertebral bodies visible through abdomen; properly penetrated

**Systematic Review**:
- **Bones**: Ribs, lumbar spine, pelvis assessment; focal lucencies (metastases), sclerosis (prostate cancer)
- **Bowel Gas Pattern**: Small bowel (central, valvulae conniventes—thin transverse lines spanning lumen), large bowel (peripheral, haustral markings)
- **Free Air**: Lucency under diaphragm (upright view); indicates perforation
- **Fluid Levels**: Air-fluid interface on upright view; suggests obstruction
- **Soft Tissues**: Liver, spleen size assessment; abnormal densities

💡 **Bowel Obstruction Patterns**:
- **Small Bowel Obstruction (SBO)**: Central diluted bowel loops (>2.5 cm diameter), valvulae conniventes spanning full width, collapsed distal colon, multiple air-fluid levels ("stepladder" appearance)
- **Large Bowel Obstruction (LBO)**: Peripheral colonic dilatation (>6 cm cecum, >5 cm colon), haustral markings, transition point to collapsed distal bowel

**Pneumoperitoneum Assessment**:
- **Upright PA Chest**: Most sensitive; lucency under diaphragm anterior to liver
- **Upright Abdominal X-ray**: Lucency under diaphragm (lateral position)
- **Supine Film**: Less sensitive; lucency over liver ("football sign"), lucency along falciform ligament ("falciform sign")

**Limitations**:
- Overlying bowel gas obscures pathology
- Poor soft tissue contrast
- Sensitivity low for bleeding, infarction, free fluid

⚡ **Acute Abdomen Differential**:
- **Free Air**: Perforated viscus (peptic ulcer, appendicitis, diverticulitis, enteritis)
- **Obstruction**: SBO (adhesions, hernia, volvulus), LBO (cancer, volvulus, diverticulitis)
- **Megacolon**: Toxic megacolon (inflammatory bowel disease), Hirschsprung's disease
- **Vascular**: Mesenteric ischemia (may show "string of pearls"—small bowel wall edema), AAA rupture (rarely visible)

## Ultrasound Abdomen

**Advantages**:
- **Real-time**: Dynamic imaging during scanning; peristalsis, blood flow assessment
- **No Radiation**: Safe in pregnancy, pediatric, multiple assessments
- **Fluid Detection**: Free fluid readily identified; guides paracentesis
- **Doppler Capability**: Vascular assessment; portal vein patency, splenic artery aneurysm, AAA diameter

**Technique**:
- **Transducer Position**: Epigastric (liver, pancreas, spleen), right upper quadrant (liver, gallbladder, kidney), left upper quadrant (spleen, left kidney), lower abdomen (bladder, aorta, pelvis)
- **Acoustic Windows**: Intercostal spaces (liver, spleen), between ribs (kidney)

**Organ Assessment**:

**Liver**:
- **Size**: Normal 12-15 cm along midclavicular line; enlarged (hepatomegaly) suggests cirrhosis, malignancy, congestion
- **Echotexture**: Homogeneous in normal; fatty infiltration increases echogenicity (bright appearance); cirrhosis shows coarse echotexture
- **Focal Lesions**: Cysts (anechoic—black, no enhancement), hemangioma (bright—echogenic), metastases (variable appearance), hepatocellular carcinoma (often heterogeneous)

**Gallbladder**:
- **Stones**: Echogenic (bright) with posterior acoustic shadowing (shadow behind)
- **Cholecystitis**: Gallbladder wall thickening (>3 mm), pericholecystic fluid, positive Murphy's sign (pain with compression)
- **Polyps**: Small echogenic lesions without shadowing; >1 cm or growth concerning for malignancy

🎓 **Acute Cholecystitis Assessment**:
- Murphy's sign (inspiratory arrest when transducer compresses gallbladder) highly specific
- Positive sonographic Murphy's sign + RUQ pain + fever = high probability acute cholecystitis
- Ultrasound sensitivity 95% for cholelithiasis, but specificity ~80% for acute cholecystitis

**Pancreas**:
- **Echotexture**: Normally homogeneously echogenic (bright)
- **Acute Pancreatitis**: Pancreatic edema (hypoechoic—darker), enlarged pancreas, peripancreatic fluid
- **Chronic Pancreatitis**: Atrophy, echogenicity changes, ductal dilatation
- **Malignancy**: Hypoechoic mass, loss of fat planes between pancreas/vessels

**Kidneys**:
- **Size**: Normal 10-12 cm; atrophy (<9 cm) suggests chronic kidney disease
- **Echogenicity**: Cortex normally hypoechoic relative to liver; increased echogenicity suggests chronic kidney disease
- **Hydronephrosis**: Dilatation of collecting system (>7 mm pelvicalyceal system indicates obstruction)

**Aorta**:
- **Diameter**: Normal <3 cm; >3 cm = dilated, >5.5 cm = abdominal aortic aneurysm (AAA) risk of rupture >20%
- **Aneurysm Assessment**: Thrombus visible (echogenic material within aneurysm), rupture signs (free fluid)

**Free Fluid**:
- **Location**: Ascites typically around organs (paracolic gutters, pelvis, perihepatic)
- **Amount**: Small (<500 ml—visible only in pelvis), moderate (visible in peritoneal spaces), massive (anechoic collection throughout abdomen)
- **Characteristics**: Anechoic (black), simple vs. complex (debris, septations), infected vs. non-infected (no distinction on ultrasound alone)

💡 **Gallbladder Ultrasound Summary**:
- **HIDA Scan (Hepatobiliary Scan)**: Reserved for suspected acute cholecystitis; gallbladder nonvisualization after 4 hours suggests cystic duct obstruction

**Obstructive Uropathy Assessment**:
- **Hydronephrosis**: Dilated pelvicalyceal system, ureter dilatation
- **Bladder**: Assessment for postvoid residual (ultrasound volume calculation)
- **Bladder Outlet Obstruction**: Elevated post-void residual, hydroureteronephrosis

🏥 **Indian Clinical Context**: Ultrasound primary imaging modality (cost-effective, no radiation); gallstones ubiquitous (prevalence 8-10%); careful clinical-radiological correlation (asymptomatic stones common—no surgery warranted). Ascites assessment: US-guided paracentesis performed for fluid analysis (protein, infection, malignancy).

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: Abdominal X-ray showing small bowel obstruction with air-fluid levels; ultrasound showing gallstones with posterior shadowing; AAA on ultrasound}}

**Estimated Reading Time**: 11 minutes`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "RD-MOD-04-TOP-02",
    contentMd: `# CT Abdomen & Pelvis

CT abdomen and pelvis provides superior soft tissue contrast, enabling detailed organ assessment, mass detection, and staging of malignancy. Systematic review ensures complete evaluation.

## CT Technique & Phases

**Imaging Phases**:
- **Arterial Phase** (15-25 seconds): Aorta, arteries, arterial organs (spleen) opacified
- **Portal Venous Phase** (60-70 seconds): Hepatic veins, liver parenchyma opacified; standard for liver lesion detection
- **Delayed Phase** (180+ seconds): Renal collecting system, urinary bladder opacification; renal cortex scarring visible

**Abdomen-Specific Protocol**:
- **Non-contrast**: Kidney stones, bleeding assessment
- **Arterial + Delayed**: Renal lesion characterization (renal cell carcinoma), pancreatic cancer
- **Portal Venous**: Liver, spleen assessment

## Organ Assessment

**Liver**:
- **Cirrhosis Signs**: Heterogeneous parenchyma (nodular contours), ascites, splenomegaly, varices (dilated portosystemic veins)
- **Portal Hypertension**: Dilated portal vein (>13 mm), splenic vein enlargement, varices assessment
- **Hepatocellular Carcinoma (HCC)**: Hyperenhancing lesion in arterial phase (contrast washes out portal venous phase = "washout")
- **Metastases**: Multiple lesions, variable enhancement; less likely to enhance than HCC
- **Hemangioma**: Peripheral enhancement (arterial phase), centripetal filling (portal venous phase—classic "light bulb" appearance)
- **Focal Fatty Infiltration**: Hypoattenuating area (low density), no mass effect on vessels, geographic distribution

💡 **Liver Lesion Characterization**:
- **Solid Lesions**: Measure attenuation in Hounsfield units; cystic lesions simple (water density ~0 HU), solid lesions variable (20-100+ HU)
- **Enhancement Patterns**: Malignancy typically enhances heterogeneously; benign often homogeneous
- **Size**: <1 cm lesions in cirrhosis, usually monitored; >1 cm warranting follow-up or biopsy; >2 cm suspicious for HCC

**Pancreas**:
- **Ductal Dilatation**: Main pancreatic duct >3 mm suggests obstruction (tumor, stone, inflammation)
- **Acute Pancreatitis**: Pancreatic edema (decreased attenuation), peripancreatic fluid, ascites
- **Pancreatic Cancer**: Hypodense mass, loss of fat planes (local invasion), dilated intrahepatic bile ducts (Courvoisier sign—dilated gallbladder + bile duct from pancreatic head mass causing obstruction)
- **Chronic Pancreatitis**: Atrophy, parenchymal calcification, ductal dilatation, pseudocysts

**Kidneys**:
- **Renal Cell Carcinoma (RCC)**: Heterogeneous enhancement, extension into perinephric fat (local invasion), renal vein thrombus assessment
- **Simple Cyst**: Anechoic, no enhancement, homogeneous, thin wall
- **Complex Cyst (Bosniak Classification)**:
  - **Type I**: Simple cyst (benign)
  - **Type II**: Cyst with thin septa or minimal enhancement (benign)
  - **Type III**: Cyst with thickened wall/septa, enhancement possible (intermediate malignancy risk—may require surveillance/intervention)
  - **Type IV**: Obvious malignancy features (solid component, marked enhancement)

⚡ **RCC Staging (TNM)**:
- **T1**: Confined to kidney, <7 cm (T1a) or 7-10 cm (T1b)
- **T2**: Confined to kidney, >10 cm
- **T3**: Extends into major veins or perinephric tissues
- **T4**: Invades beyond Gerota's fascia

**Colon**:
- **Colonic Cancer**: Wall thickening (>5 mm), shouldering (abrupt transition to normal wall), shouldering & shouldering + shouldering sign), circumferential involvement
- **Metastatic Lymph Nodes**: >1 cm short axis diameter suspicious (regional), >1.5 cm distant nodes suspicious
- **Staging**: Assess pericolonic fat infiltration (locally advanced), peritoneal involvement, distant metastases (liver, peritoneal)

**Gynecologic Organs** (females):
- **Uterus**: Normal 7-8 cm length; enlargement suggests fibroids (leiomyomas—well-defined, variable enhancement)
- **Endometrial Cancer**: Endometrial thickening (>4-5 mm postmenopausal), myometrial invasion assessment
- **Ovarian Cancer**: Adnexal mass, ascites, peritoneal carcinomatosis

**Prostate** (males):
- **Benign Prostatic Hyperplasia (BPH)**: Symmetric enlargement, normal enhancement
- **Prostate Cancer**: Hypodense lesion, asymmetric enlargement; difficult to detect on CT; MRI superior
- **Seminal Vesicle Invasion**: Indicates advanced disease (T3b), affects treatment planning

🎓 **Peritoneal Disease Assessment**:
- **Ascites**: Free fluid distending peritoneal cavity; infected if loculated (compartmentalized)
- **Peritoneal Carcinomatosis**: Nodular peritoneal thickening, ascites, omental caking (thickened omentum with nodules)
- **Peritonitis**: Ascites, bowel wall thickening, lack of peritoneal stripping (usually normal)

## Acute Abdomen CT Assessment

**Perforation**:
- Free air (pneumoperitoneum), focal perforation site identification (solitary small bowel breach), bowel wall disruption

**Obstruction**:
- **Transition Point**: Abrupt change from dilated to collapsed bowel; identifies obstruction level
- **Cause**: Tumor, hernia, adhesion, volvulus assessment
- **Complications**: Bowel ischemia (wall enhancement loss, portal venous gas—indicates transmural necrosis), perforation

**Appendicitis**:
- Appendiceal dilatation (>6 mm), wall enhancement, fat stranding (periappendiceal inflammation)
- Appendicolith visible (10-25% cases)
- Complications: Perforation (focal defect), abscess formation

**Diverticulitis**:
- Inflamed diverticulum (enhancing), diverticular wall thickening, pericolonic fat stranding
- **Hinchey Classification** (staging):
  - **Stage I**: Phlegmon (inflammation without abscess)
  - **Stage II**: Abscess (localized fluid collection)
  - **Stage III**: Purulent peritonitis
  - **Stage IV**: Feculent peritonitis

🏥 **Indian Context**: Appendicitis diagnosis often clinical (Rovsing's sign, McBurney's point tenderness); CT confirms complicated appendicitis (abscess, perforation) guiding surgical vs. conservative management. TB ileitis mimics terminal ileum Crohn's disease; imaging differentiation challenging; TB risk stratification (endemic area, immunosuppression) guides management.

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: CT showing portal venous phase liver with HCC; pancreatic cancer with Courvoisier sign; inflamed appendix with periappendiceal fat stranding}}

**Estimated Reading Time**: 12 minutes`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "RD-MOD-04-TOP-03",
    contentMd: `# GU Imaging & IVP

Genitourinary (GU) imaging encompasses radiography, ultrasound, CT, and IVP (intravenous pyelography), each providing distinct information for renal disease, obstruction, and neoplasia assessment.

## Intravenous Pyelography (IVP)

**Technique**:
- IV iodinated contrast injection
- Sequential radiographs: Nephrographic phase (20-30 seconds—renal parenchyma opacified), pyelographic phase (60-90 seconds—collecting system opacified), voiding cystourethrography (post-void—ureter, bladder assessment)

**Indications** (decreasing with CT prevalence):
- Hematuria investigation (stone, malignancy)
- Renal function assessment (differential function)
- Obstruction evaluation

**Advantages**:
- Functional assessment (renal concentration, excretion)
- Low radiation dose (compared to CT)
- Cost-effective

**Disadvantages**:
- Contrast allergy risk
- Nephrotoxicity in renal failure
- Cannot assess lesion density (CT superior)
- Superimposition of structures

## Plain Radiography GU Assessment

**Kidney Stones**:
- **Calcium Oxalate/Calcium Phosphate**: Radiopaque (90% visible on plain film)
- **Appearance**: Dense linear or branching density in renal area ("staghorn calculus" if large)
- **Location**: Renal calyx (most common), proximal ureter, pelvic brim, ureteropelvic junction

💡 **Stone Composition Assessment**:
- **Radiopaque**: Calcium oxalate/phosphate, struvite (magnesium ammonium phosphate—often staghorn), calcium urate
- **Radiolucent**: Uric acid, cystine (faintly visible), matrix stones
- **CT (non-contrast)**: Detects all stones regardless of composition (sensitivity >95%)

**Pyelonephritis**:
- Renal enlargement, loss of renal outline (perinephric inflammation)
- Gas in renal parenchyma ("emphysematous pyelonephritis"—rare, severe, gas-forming organism; emergency decompression required)

## CT Abdomen for GU Assessment

**Non-contrast CT** (NCCT):
- **Gold Standard** for kidney stone detection (sensitivity 95-100%)
- Differentiates stone types (density assessment)
- Identifies stone complications (obstruction, pyelonephritis)
- No contrast exposure

**Contrast-Enhanced CT** (CECT):
- **Arterial Phase**: Renal artery flow assessment, vascular lesions
- **Nephrographic Phase**: Renal lesion characterization, tumor thrombus extension
- **Delayed Phase**: Collecting system dilatation (obstructive uropathy), urinary extravasation

## GU Pathology

**Renal Infarction**:
- Wedge-shaped perfusion defect (renal artery occlusion)
- Risk factors: Atrial fibrillation, endocarditis, thrombosis
- Presents with flank pain, elevated LDH disproportionate to transaminases

**Renal Artery Stenosis (RAS)**:
- **Atherosclerotic** (90%): Proximal vessel narrowing, ostial location
- **Fibromuscular Dysplasia** (10%): Mid/distal vessel involvement, "string of beads" appearance
- **Hypertension**: RAS presents as renovascular hypertension; screening indicated with elevated creatinine post-ACE inhibitor
- **Imaging**: Doppler US (operator-dependent), CT angiography (CTA—sensitive/specific), captopril renal scintigraphy (functional assessment)

**Renal Artery Thrombosis**:
- Absence of arterial flow on Doppler
- Acute presentation: Flank pain, hematuria
- CT shows wedge-shaped renal infarction

⚡ **Acute Kidney Injury (AKI) Imaging**:
- **Pre-renal**: Normal renal echogenicity, hydronephrosis absent (obstruction excluded)
- **Intrinsic Renal**: Increased echogenicity (acute tubular necrosis), segmental infarction, cortical necrosis
- **Post-renal**: Hydronephrosis (obstruction) visible; imaging identifies obstruction site/cause

**Pyelonephritis Complications**:
- **Abscess**: Hypoattenuating fluid collection, rim enhancement, surrounding edema
- **Perinephric Abscess**: Extension beyond renal capsule (Gerota's fascia); requires drainage (percutaneous) + antibiotics
- **Emphysematous Pyelonephritis**: Gas in renal parenchyma (imaging shows lucency); rare, severe (mortality 9-70%); requires emergency decompression (percutaneous nephrostomy, nephrectomy)

**Bladder**:
- **Bladder Cancer**: Wall thickening (>5 mm), mass projecting into lumen, muscular invasion assessment (extension beyond muscularis propria indicates advanced disease)
- **Bladder Rupture**: Intraperitoneal extravasation (contrast outside bladder—pools around bowel); requires surgical repair
- **Neurogenic Bladder**: Dilated thick-walled bladder; occurs with spinal cord injury, spina bifida

**Ureteral Obstruction**:
- **IVP**: Delayed nephrogram (prolonged filling), dilated pyelocalyceal system/ureter, abrupt cutoff at obstruction site
- **CT**: Hydronephrosis, hydroureter, obstruction cause visualization (stone most common)

🎓 **Hydroureteronephrosis Differential**:
- **Mechanical Obstruction**: Abrupt termination of dilated ureter, focal narrowing
- **Vesicoureteral Reflux (VUR)**: Retrograde urine flow into ureters/kidneys (on voiding cystourethrography)
- **Pregnancy**: Physiologic dilatation (hormonal smooth muscle relaxation); peaks 2nd/3rd trimester, left predominance (compression of right ureter by enlarged uterus)

**Ureteropelvic Junction (UPJ) Obstruction**:
- Dilated pyelocalyceal system with normal caliber ureter distally (transition point at UPJ)
- Can be congenital (pediatric diagnosis) or acquired (stone, stricture)
- Pediatric presentation: Prenatal hydronephrosis, UTI, flank pain

## Renal Artery Disease Screening

**Indications for RAS Screening**:
- Hypertension onset <30 years or >60 years (unusual age groups for essential hypertension)
- Flash pulmonary edema (flash heart failure from renal artery stenosis)
- Renal function deterioration (>30% creatinine rise post-ACE inhibitor)
- Unexplained renal atrophy
- Asymmetric renal size (>1 cm difference)

🏥 **Indian Hypertension Context**: Essential hypertension most common cause; secondary hypertension screening indicated in young/resistant hypertension cases. Takayasu arteritis (inflammatory aortic disease) endemic; causes ostial RAS, aortic arch involvement; imaging shows smooth stenosis vs. atherosclerotic disease (irregular narrowing).

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: Non-contrast CT showing kidney stone with surrounding perinephric fat stranding; IVP showing hydronephrosis with abrupt ureteral cutoff at obstruction; staghorn calculus}}

**Estimated Reading Time**: 11 minutes`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "RD-MOD-04-TOP-04",
    contentMd: `# Interventional Radiology

Interventional radiology encompasses percutaneous, catheter-based, and image-guided therapeutic procedures, expanding treatment options beyond traditional surgery. These techniques reduce morbidity, improve recovery, and enhance cost-effectiveness.

## Fundamental IR Principles

**Image Guidance Modalities**:
- **Fluoroscopy**: Real-time vessel visualization, catheter/guidewire tracking
- **Ultrasound**: Soft tissue targeting, needle visualization, cost-effective, portable
- **CT**: Complex anatomy navigation, precise needle placement
- **Angiography**: Vascular pathology demonstration, vessel assessment

**Needle Techniques**:
- **Seldinger Technique**: Small-bore needle puncture, guidewire insertion through needle, catheter/sheath exchange over guidewire
- **Tandem Needle Technique**: Two needles improve access angles; used in challenging anatomical situations

💡 **Sterility & Safety**:
- Full sterile technique mandatory (drapes, sterile gloves, instruments)
- Prophylactic antibiotics (given 1 hour pre-procedure, continued based on procedure type)
- Anticoagulation management (hold warfarin/DOAC if necessary, reversal agents available if emergency procedures)

## Common IR Procedures

**Drainage Procedures**:

**Percutaneous Abscess Drainage**:
- Technique: Image-guided needle placement (ultrasound preferred for accessibility), catheter insertion, aspiration/irrigation
- Indications: Intra-abdominal abscess (post-operative, appendiceal, diverticular), perinephric abscess, hepatic abscess
- Success Rate: 90-95% (combined with antibiotics)
- Advantages: Avoids surgery, shorter hospitalization, repeat drainage possible if needed

**Biliary Drain Placement**:
- **Percutaneous Transhepatic Cholangiography (PTC)**: Ultrasound or fluoroscopy-guided; puncture intrahepatic bile duct, guidewire advancement through obstruction, catheter/stent placement
- **Indications**: Biliary obstruction (malignancy, stricture, stone), cholangitis (biliary infection requiring urgent drainage)
- **Drainage Types**: Percutaneous transhepatic drain (external drainage), biliary stent (internal drainage)
- **Complications**: Sepsis (if obstruction not relieved), catheter occlusion (requires exchange)

**Nephrostomy Tube Placement**:
- Ultrasound or fluoroscopy-guided puncture of renal collecting system, catheter placement
- **Indications**: Ureteral obstruction with renal insufficiency (decompression), infected obstructed kidney (sepsis management), stone treatment (access for lithotripsy)
- **Complications**: Hematuria (usually minor, self-limited), infected urine (requires antibiotics)

⚡ **Percutaneous Nephrostomy vs. Ureteral Stent**:
- **Nephrostomy**: External drainage, high success rate, patient must tolerate external catheter
- **Ureteral Stent**: Internal drainage, better quality of life, higher obstruction recurrence risk (stent migration, encrustation)

**Vascular IR**:

**Transvascular Embolization**:
- Technique: Catheter navigation to bleeding source, embolic agent deployment (coils, foam particles, liquid agents)
- **Indications**: Bleeding control (traumatic, spontaneous, post-procedural), aneurysm exclusion, arteriovenous fistula closure, tumor devascularization
- **Materials**: Metallic coils (permanent), gel foam/PVA particles (temporary), liquid embolics (cyanoacrylate, EVOH—ethylene vinyl alcohol)

**Angioplasty & Stenting**:
- Technique: Catheter-based balloon inflation across stenosis (angioplasty), stent deployment if restenosis risk
- **Indications**: Renal artery stenosis (hypertension, renal function preservation), iliac/femoral stenosis (claudication), mesenteric ischemia
- **Success**: RAS angioplasty success 80-90%; restenosis rates 20-30% (drug-eluting stents lower restenosis)

**Inferior Vena Cava (IVC) Filter Placement**:
- Percutaneous insertion (femoral or internal jugular approach); filter deployed to prevent PE in DVT patients
- **Indications**: Contraindication to anticoagulation (patient unable to tolerate, active bleeding), recurrent PE despite anticoagulation, massive PE with hemodynamic instability
- **Complications**: IVC thrombosis (filter occlusion), filter migration, chronic venous insufficiency (long-term IVC obstruction)

**Ports and Catheters**:

**PICC Line** (Peripherally Inserted Central Catheter):
- Ultrasound-guided insertion through arm vein (brachial, basilic, cephalic); tip positioned in superior vena cava
- **Advantages**: Durable central access (weeks to months), reduced infection risk vs. peripheral IV, enables long-term chemotherapy, antibiotics, nutrition

**Tunneled Central Catheter** (Hickman, Groshong):
- Surgical/IR placement; subcutaneous tunnel from insertion site to chest wall exit; reduces infection risk
- **Indications**: Frequent IV access (chemotherapy, dialysis), long-term central access requirement (months to years)

🎓 **Port-a-Cath (Implantable Port)**:
- Completely subcutaneous; needle access via skin puncture to port chamber
- **Advantages**: Cosmetically superior, lower infection risk (no external catheter), patient mobility enhanced
- **Complications**: Extravasation (chemotherapy outside vessel—tissue damage), port migration, fibrin sheath formation (reduced flow)

## Imaging-Guided Biopsy

**Percutaneous Biopsy Technique**:
- Image guidance (ultrasound, CT, fluoroscopy) for precise lesion targeting
- Needle gauge selection: 18-20 gauge (core biopsy—tissue cores), 25 gauge (FNA—fine needle aspiration)
- **Core biopsy**: Larger tissue samples, better diagnostic yield than FNA
- **FNA**: Smaller samples, suitable for cystic lesions, less tissue trauma

**Indications**:
- Suspicious lung nodule (CT-guided)
- Liver lesion (ultrasound or CT-guided; differentiate HCC, metastasis, benign lesion)
- Renal mass (clarify cystic vs. solid, characterize)
- Lymph node (suspected lymphoma, metastatic disease, TB)
- Breast mass (ultrasound-guided; core biopsy for definitive diagnosis)

**Complications**:
- Bleeding (particularly in coagulopathy, large biopsy needle)
- Infection (rare with prophylactic antibiotics)
- Pneumothorax (lung biopsy)
- Tumor seeding (theoretical risk; clinical significance debated)

## Precautions & Contraindications

**Relative Contraindications**:
- **Coagulopathy**: INR >1.5 or platelet <50,000 (correct before procedure if non-emergency; emergency procedures proceed with reversal agents ready)
- **Infection at Insertion Site**: Increased infection risk; select alternative access
- **Thrombosis**: IVC thrombosis contraindicates IVC filter placement; portal vein thrombosis complicates TIPS (transjugular intrahepatic portosystemic shunt)

**Complications Management**:
- **Bleeding**: Pressure application, vessel embolization if severe, transfusion if massive
- **Sepsis**: Immediate broad-spectrum antibiotics, source drainage, ICU monitoring
- **Thromboembolic Events**: Heparin anticoagulation, thrombolysis consideration, thrombectomy if emergent

🏥 **IR in Indian Healthcare**: Interventional radiology increasingly available in tertiary centers. Cost-effective for many conditions (drainage procedures avoid surgery cost), improving outcomes. Emphasis on trained IR radiologists, proper sterile technique, procedural sedation capability ensures safe execution.

**Reference**: Satish Bhargava. *Textbook of Radiology*. 3rd ed. New Delhi: Jaypee Brothers; 2018.

{{IMAGE: Percutaneous abscess drainage with catheter placement; renal artery angioplasty with stent deployment; IVC filter in situ; percutaneous biopsy needle in lung nodule}}

**Estimated Reading Time**: 12 minutes`,
    estimatedMinutes: 12,
  },
];
