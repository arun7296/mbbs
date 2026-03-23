import type { TopicLessons } from "./content-loader";

export const radiologyPart2Lessons: TopicLessons[] = [
  {
    topicCode: "RD-MOD-02-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "pulmonary-imaging-foundation",
        title: "Pulmonary Imaging - Foundation",
        estimatedMinutes: 25,
        summary: "X-ray and CT findings in pneumonia, TB, pleural effusion, lung masses, and pneumothorax.",
        contentMd: `# Pulmonary Imaging - Foundation

## Chest X-ray Interpretation Approach
### Systematic Review
1. **Technique**: Check for rotation, penetration, inspiration (6 ribs anteriorly visible)
2. **Mediastinum**: Check for widening (aortic tear, hemorrhage), contours (cardiac silhouette)
3. **Lungs**: Divide into zones; scan systematically left then right
4. **Pleura**: Look for effusions, thickening, costophrenic angle blunting
5. **Bones**: Ribs, vertebrae for fractures, lytic/sclerotic lesions
6. **Soft tissues**: Subcutaneous emphysema, chest wall masses
7. **Devices**: Endotracheal tube, central lines, pacemakers positioning

## Pneumonia Patterns
### Consolidation (Alveolar Filling)
- **Appearance**: Opaque white area (alveoli filled with pus/fluid, no aeration)
- **Borders**: Can be ill-defined or sharp (silhouette sign if touching mediastinum)
- **Distribution**: Follows lung segments (lobar pattern = bacterial)
- **Classic organisms**:
  - **S. pneumoniae**: Right lower lobe (RLL) lobar consolidation
  - **H. influenzae**: Right middle lobe (RML)
  - **Staphylococcus**: Multiple lobes, may cavitate (abscess formation)
- **Viral pneumonia**: Bilateral perihilar, interstitial pattern (not lobar consolidation)

### Bronchopneumonia (Aspiration)
- **Appearance**: Patchy infiltrates, often bilateral
- **Distribution**: Dependent areas (RLL if recumbent, apical if standing)
- **Risk factors**: Aspiration, immunosuppression, poor oral hygiene
- **Associated findings**: May have pleural effusion, empyema

## Tuberculosis Imaging
### Primary TB
- **Setting**: Children, immunosuppressed
- **Findings**: Hilar/mediastinal lymphadenopathy (non-caseating) + parenchymal infiltrate
- **Features**: Usually asymptomatic; may progress if untreated

### Reactivation TB (Post-Primary)
- **Setting**: Adults with prior TB exposure
- **Location**: Apical-posterior segments (upper lobe preference - high O2 tension)
- **Findings**:
  - **Cavitation**: Central lucency (necrotic center); hallmark finding
  - **Infiltrate**: Upper lobe infiltrate, may extend downward
  - **Air-fluid level**: If cavity contains fluid
- **Classic appearance**: Cavitary lesion in apical-posterior segments, bilateral upper lobes common
- **Sputum positive**: Cavitary TB = infectious

## Pleural Effusion
### Appearance on CXR
- **Small**: <1 cm in costophrenic angle; blunting of angle
- **Moderate**: 1-4 cm; opacification of costophrenic angle
- **Large**: >4 cm; mediastinal shift, cardiac displacement
- **Bilateral**: Heart often silhouetted (cardiac borders obscured)
- **Lateral decubitus film**: Free fluid layers dependent; loculated fluid stays same place

### Appearance on CT
- **Hypodense fluid**: <20 HU (simple fluid), >20 HU (complex/exudative)
- **Density helps etiology**:
  - Simple fluid (<20 HU) = transudate (CHF, cirrhosis)
  - Complex (20-40 HU) = exudate, hemothorax, infection
  - Very dense (>40 HU) = hemorrhage, empyema (infected pus)

### Causes by Light's Criteria
- **Transudate**: CHF, cirrhosis, nephrotic syndrome, hypoalbuminemia
- **Exudate**: Pneumonia (parapneumonic), malignancy, PE, TB, collagen disease

## Lung Masses
### Nodule Classification
- **<5 mm**: No follow-up needed (benign)
- **5-10 mm**: Follow-up CT at 3-12 months (low malignancy risk)
- **>10 mm**: Consider biopsy/CT if suspicious features

### Suspicious Features (Malignancy Risk)
- **Spiculated borders**: "Sunburst" appearance (angular, irregular)
- **Pleural tags**: Strands to pleura (suggests invasion)
- **Cavitation**: Large irregular cavity (TB or malignancy)
- **No fat plane**: Abutting mediastinum/chest wall (invasion)
- **Size**: >20 mm significant malignancy risk

### Benign Features
- **Smooth borders**: Round, well-defined
- **Fat-containing**: Hamartoma (fat lucency visible)
- **Calcification**: Central, concentric ("popcorn" = benign)
- **No growth**: Same size on follow-up >2 years

## Pneumothorax
### Appearance
- **Lucent (black) area**: Air in pleural space; no lung markings visible
- **Lung edge**: Visceral pleural line visible (separates lung from air)
- **Mediastinal shift**: Hemodynamic instability if present
- **Tension physiology**: Hemodynamic collapse; hemidiaphragm depressed

### Types
- **Primary**: Spontaneous (young, tall, thin males; blebs rupture)
- **Secondary**: From underlying lung disease (COPD, TB, PCP in AIDS)
- **Traumatic**: Penetrating/blunt chest injury, iatrogenic (line placement)
- **Tension**: Emergency; trachea shifted away from pneumothorax side

### Measurement
- **Size**: Distance from lung edge to chest wall
- **Small**: <2 cm (can observe)
- **Large**: >2 cm (needs drainage)`,
        mnemonics: [
          { text: "Pneumonia lobar = Strep pneumo (RLL); Broncho = patchy, aspiration dependent areas", explanation: "Pattern recognition" },
          { text: "TB cavitary = Apical-posterior (upper lobe, high O2), infectious if cavity present", explanation: "TB location" },
          { text: "Effusion: Transudate = simple fluid, Exudate = complex/infected", explanation: "Fluid density distinction" },
          { text: "Suspicious mass = Spiculated, pleural tags, cavitation, abutting mediastinum", explanation: "Malignancy clues" }
        ],
        keyPoints: [
          "Lobar consolidation pattern suggests bacterial (S. pneumoniae RLL classic)",
          "TB reactivation: Apical-posterior cavitary lesions; cavitary TB infectious",
          "Effusion: Simple transudate vs complex exudate; Light's criteria distinguish",
          "Lung mass: Benign if smooth/calcified/fat-containing; suspicious if spiculated",
          "Pneumothorax: Lucent area with visceral pleural line; tension is emergency"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Lung Pathology Imaging", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Chest Radiology", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "pulmonary-imaging-mechanism",
        title: "Pulmonary Imaging - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of lung disease appearance on imaging, differential diagnosis approach.",
        contentMd: `# Pulmonary Imaging - Mechanism

## Alveolar vs Interstitial Patterns
### Alveolar Consolidation
- **Pathology**: Alveolar spaces filled with fluid (pus, edema, blood)
- **Radiographic appearance**: White/opaque (no aeration; X-rays absorbed)
- **Silhouette sign**: If consolidation touches cardiac/mediastinal border = no fat plane visible
- **Causes**: Pneumonia (lobar), pulmonary edema (bilateral perihilar), hemorrhage, aspiration
- **Air bronchogram**: Bronchus filled with air shows as dark line within white consolidation (indicates alveolar filling, not airway obstruction)

### Interstitial Pattern
- **Pathology**: Edema/infiltrate in interstitium (between alveoli) - alveoli remain air-filled
- **Radiographic appearance**: Reticular/reticulation (net-like pattern), lines
- **Causes**: Viral pneumonia, pulmonary edema (early stages), ILD (interstitial lung disease)
- **Bilateral**: Often symmetric, perihilar predominance in pulmonary edema

## TB Cavitation Mechanism
### Caseous Necrosis
- **Immune response**: TH1 cells attack Mycobacterium-laden macrophages
- **Central necrosis**: Liquefied caseous material (high lipid content)
- **Central cavity formation**: Necrotic center expands; liquefied material coughed up
- **Clinical significance**: Cavitary TB = infectious (open airways carry organisms)

### Why Upper Lobes
- **Oxygen tension**: TB grows better in HIGH pO2 environment
- **Upper lobe apical-posterior**: Highest oxygen tension (gravity dependent ventilation)
- **Reactivation TB**: Occurs in areas of prior caseation (reactivates there)

## Pleural Effusion Mechanics
### Transudative (Simple)
- **Mechanism**: Increased hydrostatic pressure OR decreased plasma oncotic pressure
- **Fluid composition**: Low protein (<3 g/dL), low LDH (<200 IU/L)
- **Appearance**: Clear, simple fluid (hypodense <20 HU on CT)
- **Causes**: Heart failure (most common), cirrhosis, nephrotic syndrome

### Exudative (Complex)
- **Mechanism**: Increased capillary permeability from inflammation/infection
- **Fluid composition**: High protein (>3 g/dL), high LDH (>200 IU/L)
- **Appearance**: Complex, may have debris (denser >20 HU on CT)
- **Causes**: Pneumonia (parapneumonic), malignancy, TB, PE, collagen disease

### Loculation
- **Mechanism**: Fibrin bridges between visceral/parietal pleura; prevents fluid movement
- **Appearance**: Effusion remains same location on lateral decubitus (doesn't layer dependent)
- **Clinical**: Harder to drain; may need ultrasound-guided drainage

## Lung Mass Malignancy Risk Assessment
### Radiographic Features Suggesting Malignancy
- **Spiculation**: Irregular margins = infiltrative growth (cancer invading tissue)
- **Pleural tags**: Contact with pleura; suggests visceral pleural invasion
- **Cavitation**: Large irregular cavity with thick wall (squamous cell CA)
- **Mediastinal involvement**: Loss of fat plane; suggests invasion/lymph node metastases

### Radiographic Features Suggesting Benignity
- **Smooth margins**: Encapsulated, non-invasive growth
- **Fat content**: Hamartoma (benign mixed lesion with fat)
- **Calcification patterns**:
  - Central/concentric = benign (fibroma, calcified granuloma)
  - Eccentric/stippled = suspicious (malignancy can calcify oddly)
- **No growth**: Same size >2 years = benign (very low malignancy risk)

## Pneumothorax Physics
### Air Entry Mechanism
- **Breech in visceral pleura**: Air from alveoli enters pleural space
- **Causes**: Bleb rupture (spontaneous), trauma (penetrating/blunt), barotrauma (ventilator), iatrogenic (line/biopsy)
- **Pleural space**: Potential space; normally just thin fluid; air separates lung from chest wall

### Tension Pneumothorax
- **Mechanism**: One-way valve; air enters pleura but can't exit
- **Result**: Progressive air accumulation; increased pleural pressure compresses lung/mediastinal structures
- **Hemodynamic effect**: Mediastinal shift → reduced venous return → cardiovascular collapse
- **Imaging**: Hemidiaphragm depressed, mediastinal shift away from pneumothorax, tracheal deviation
- **Emergency**: Requires immediate needle decompression (before imaging if clinically suspected)`,
        mnemonics: [
          { text: "Alveolar filling = opaque white, air bronchogram visible, silhouette sign if touching mediastinum", explanation: "Consolidation findings" },
          { text: "TB cavitary = caseous necrosis center, upper lobe (high O2), infectious", explanation: "Pathophysiology" },
          { text: "Transudate = simple fluid (<20 HU), Exudate = complex (>20 HU); Light's criteria definitive", explanation: "Effusion classification" },
          { text: "Malignancy clues = Spiculated, pleural tags, irregular cavitation, mediastinal involvement", explanation: "Cancer features" }
        ],
        keyPoints: [
          "Alveolar pattern: White opaque consolidation; air bronchogram = alveolar filling",
          "TB cavitation: Immune response → caseous necrosis → liquefaction → cavity",
          "Upper lobe TB: High pO2 favors growth; reactivation TB in prior caseation sites",
          "Pleural effusion: Transudate simple (CHF), exudate complex (infection/malignancy)",
          "Malignancy risk: Spiculation, pleural involvement, mediastinal contact suspicious"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Pulmonary Disease", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Respiratory System", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "pulmonary-imaging-clinical",
        title: "Pulmonary Imaging - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical diagnosis by imaging, management implications, Indian TB considerations.",
        contentMd: `# Pulmonary Imaging - Clinical

## Diagnostic Algorithms by Clinical Presentation
### Acute Cough with Fever
\`\`\`
CXR obtained
├─ Lobar consolidation (RLL, RML classic) → Bacterial pneumonia (Strep pneumo, H. influenzae)
│   └─ Treatment: Antibiotics, may need hospitalization if severe
├─ Bilateral perihilar infiltrates + interstitial pattern → Viral pneumonia (influenza, COVID-19)
│   └─ Treatment: Supportive, antivirals if early
├─ Patchy infiltrates, aspiration distribution → Aspiration pneumonia
│   └─ Treatment: Antibiotics with anaerobic coverage
├─ Cavitary lesion (apical-posterior) → TB (must confirm with sputum AFB, Xpert MTB/RIF)
│   └─ Treatment: Anti-TB regimen urgently
└─ No infiltrate but fever + symptoms → Clinical diagnosis, repeat CXR in 48h (PNA may not show early)
\`\`\`

### Chronic Cough
\`\`\`
CXR obtained
├─ Cavitary apical-posterior lesion → TB (confirm with sputum, CT if CXR unclear)
├─ Nodule (<1 cm) → Granuloma (TB, fungal), hamartoma; follow-up CT if >5 mm
├─ Mass (>1 cm) → Malignancy vs infection; CT + biopsy for diagnosis
├─ Interstitial pattern → ILD (silicosis if occupational, IPF, sarcoidosis)
├─ Pleural thickening → TB pleurisy, prior TB, asbestos exposure
└─ Normal CXR → Consider GERD, ACE inhibitor side effect, asthma; CT HRCT if suspicion high
\`\`\`

## Pneumonia Management by Imaging
### Lobar Consolidation
- **Diagnosis**: Bacterial pneumonia (S. pneumoniae most common)
- **Severity assessment**:
  - **Mild**: Single lobe, <25% lung involved → outpatient antibiotics
  - **Moderate**: Multiple lobes OR hemodynamic changes → hospitalization
  - **Severe**: Bilateral lobes, respiratory distress, sepsis → ICU
- **Complications**:
  - **Pleural effusion parapneumonic**: Monitor; may need drainage if infected (empyema)
  - **Pneumothorax**: Air leak into pleura; needs chest tube if large/symptomatic
  - **Abscess**: Cavitation within consolidation; may need drainage

### Interstitial Pneumonia
- **Diagnosis**: Viral (influenza, RSV, coronavirus) most common
- **Management**: Supportive (oxygen, fluids), antivirals if early influenza (oseltamivir)
- **Prognosis**: Most self-limited (resolve in 1-2 weeks)

## TB Imaging and Monitoring
### Initial TB Diagnosis
- **CXR finding**: Cavitary apical-posterior consolidation (classic)
- **Confirmation**: Sputum AFB smear microscopy (gold standard), Xpert MTB/RIF (rapid PCR)
- **Severity**: Check for:
  - Bilateral involvement (more severe)
  - Multiple cavities (higher bacillary load)
  - Extent of involvement (% lung)

### TB Treatment Monitoring
- **Baseline CXR**: Document extent before treatment
- **Interim CXR (2 months)**: Assess response (cavities may persist even if patient cured clinically)
- **Sputum conversion**: More important than CXR for cure confirmation (AFB smear negative = not infectious)
- **Post-treatment CXR**: Residual changes common (fibrosis, minimal infiltrates may persist)

### India-Specific Considerations
- **High TB prevalence**: Always consider in differential (5 lakh cases/year in India)
- **Drug-resistant TB (MDR-TB)**: Increasing (xDR-TB even emerging); treat all new TB as drug-susceptible first, test for resistance
- **Extrapulmonary TB**: 15-20% of TB (spine, lymph nodes, abdomen); CXR may be normal
- **Prevention**: Identify contacts; provide preventive therapy to TB-exposed household contacts

## Pleural Effusion Management
### Assessment by Imaging
- **CXR findings**: Size (small <2 cm, moderate 2-4 cm, large >4 cm)
- **CT findings**: Density (simple <20 HU vs complex >20 HU)
- **Loculation**: Lateral decubitus determines if free vs loculated

### Diagnostic Approach
1. **First imaging**: CXR to confirm effusion + clinical correlation
2. **Etiology suspected**:
   - **CHF**: Bilateral, small-moderate, simple fluid, patient with cardiac history
   - **Pneumonia**: Parapneumonic effusion; unilateral; may be complex if infected
   - **Malignancy**: Often unilateral, can be very large; lymph nodes on CT
   - **TB**: Often unilateral, can be large; check for parenchymal TB
3. **Diagnostic thoracentesis**: If etiology unclear; Light's criteria determine trans vs exudative
4. **Imaging-guided drainage**: If loculated or difficult access; ultrasound or CT guidance

### Complications of Effusion
- **Empyema**: Infected pleural fluid (exudative appearance, culture positive)
- **Loculation**: Fibrin bridges prevent drainage; needs imaging-guided intervention
- **Tension effect**: Large effusion compresses lung, mediastinal shift → respiratory distress

## Lung Mass Workup by Imaging
### Nodule Algorithm
\`\`\`
Lung nodule found on CXR or CT
├─ <5 mm: No follow-up (benign)
├─ 5-10 mm:
│   ├─ Benign features (smooth, fat, calcification) → No follow-up
│   └─ Suspicious features (spiculated) → Follow-up CT at 3, 12 months
├─ 10-30 mm:
│   ├─ Benign features → Observation or CT
│   └─ Suspicious features → CT + consider PET, biopsy
└─ >30 mm:
    ├─ Clearly malignant (spiculated, pleural tags) → Staging (CT chest/abdomen, biopsy)
    └─ Benign appearance (hamartoma) → May observe
\`\`\`

### Biopsy Indications
- **Suspicious features**: Spiculation, pleural tags, irregular cavitation
- **Size >10 mm**: If growth on follow-up or persistent
- **Diagnosis needed**: For treatment planning (CA vs infection vs benign)
- **Methods**: CT-guided needle, EBUS (endobronchial ultrasound), thoracotomy if peripheral

## Indian Context
### Resource Considerations
- **CXR only**: Often only imaging available; chest X-ray interpretation critical skill
- **CT access limited**: Reserved for complex cases, staging malignancy
- **Ultrasound helpful**: For pleural effusion (guides thoracentesis), accessible
- **TB screening**: CXR routine in TB-endemic areas; suspicious findings warrant sputum testing`,
        mnemonics: [
          { text: "Lobar pneumonia = Strep pneumo (RLL), H. flu (RML), Staph (multiple lobes)", explanation: "Organism-specific patterns" },
          { text: "TB cavitary = Apical-posterior, confirm with sputum AFB + Xpert MTB/RIF", explanation: "Diagnosis approach" },
          { text: "Effusion: CXR assess size (small/moderate/large), CT assess density (simple/complex)", explanation: "Imaging role" },
          { text: "Lung mass >10mm + suspicious = biopsy (CT-guided or EBUS)", explanation: "Malignancy workup" }
        ],
        keyPoints: [
          "Lobar consolidation = bacterial; lobar pattern suggests organism (RLL Strep)",
          "TB diagnosis requires imaging + sputum confirmation (AFB smear, Xpert MTB/RIF)",
          "Pleural effusion: Light's criteria definitive; imaging guides drainage if needed",
          "Lung nodule: Size + features determine follow-up; benign <2 years no growth",
          "India: High TB prevalence; CXR skills essential; contact tracing critical"
        ],
        textbookRefs: [
          { book: "IAD Guidelines", chapter: "Pulmonary TB Imaging and Diagnosis", edition: "2023" },
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Respiratory System", edition: "7th" }
        ]
      },
      {
        layer: 4,
        slug: "pulmonary-imaging-exam-prep",
        title: "Pulmonary Imaging - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, classic findings, differential diagnosis pearls, exam questions.",
        contentMd: `# Pulmonary Imaging - Exam Prep

## Classic Radiologic Signs
| Sign | Meaning | Clinical Significance |
|------|---------|----------------------|
| Air bronchogram | Bronchus filled with air; visible within consolidation | Indicates alveolar filling, NOT airway obstruction |
| Silhouette sign | Loss of cardiac/mediastinal border; adjacent consolidation | Localizes anatomic location (RML hides right heart border) |
| Blunting of costophrenic angle | Fluid in pleural space | Effusion present (>250 mL visible) |
| Cavitation | Central lucency in infiltrate | TB (upper lobe), abscess, squamous CA |
| Air-fluid level | Horizontal line in cavity/pleural space | Indicates infected fluid (empyema) or abscess |
| Mediastinal shift | Trachea/mediastinum deviated | Large effusion, tension pneumothorax, atelectasis |
| Hemidiaphragm depression | Diaphragm lower than normal | Tension pneumothorax, large effusion |

## High-Yield Facts
- **Pneumonia lobar pattern**: Strep pneumo = RLL (classic), H. influenzae = RML
- **Bronchopneumonia**: Patchy, bilateral, aspiration-dependent areas
- **TB cavitary**: Apical-posterior segments (upper lobes), infectious if cavity
- **Pleural effusion**: <250 mL not visible; >250 mL blunts costophrenic angle; >500 mL visible at hilum
- **Simple vs complex**: Transudate (CHF, cirrhosis) simple fluid; exudate (infection, malignancy) complex
- **Lung nodule**: <5 mm benign; 5-10 mm follow-up; >10 mm biopsy if suspicious
- **Benign nodule**: Smooth borders, fat content, calcification (concentric/central = benign)
- **Malignant nodule**: Spiculated margins, pleural tags, irregular cavitation, mediastinal contact
- **Pneumothorax**: Lucent area with visceral pleural line; no lung markings beyond line
- **Tension pneumothorax**: Emergency; mediastinal shift, hemidiaphragm depression

## Differential Diagnosis Pearls
### Consolidation vs Infiltrate
- **Consolidation (Alveolar)**: White opaque, air bronchogram, silhouette sign
- **Infiltrate (Interstitial)**: Reticular pattern, lines, no air bronchogram

### Bacterial vs Viral Pneumonia
- **Bacterial**: Lobar consolidation, single lobe common, air bronchogram
- **Viral**: Bilateral interstitial, perihilar predominance, no lobar pattern

### TB vs Fungal Infection
- **TB**: Cavitary, apical-posterior (upper), produces sputum, AFB positive
- **Fungal** (histoplasmosis, coccidioidomycosis): Often lower lobes, nodules, disseminated pattern

### Effusion Causes
- **Transudative** (simple): CHF (bilateral, small-moderate), cirrhosis (usually large), nephrotic
- **Exudative** (complex): Pneumonia (parapneumonic), TB, malignancy, PE, collagen disease

## Common Exam Questions
- "RLL lobar consolidation classic organism?" = Strep pneumococcus
- "RML consolidation organism?" = H. influenzae (middle lobe preference)
- "Aspiration pneumonia pattern?" = Patchy infiltrates, dependent areas (RLL if supine)
- "TB cavitary location?" = Apical-posterior (upper lobe); high O2 tension
- "Pleural effusion >250 mL finding?" = Blunting of costophrenic angle on CXR
- "Simple vs complex effusion distinction?" = Density on CT (HU <20 vs >20); Light's criteria definitive
- "Lung nodule <5mm follow-up?" = None needed (benign)
- "Spiculated margin nodule = ?" = Suspicious for malignancy; CT + biopsy
- "Cavitation in nodule = ?" = TB, abscess, squamous CA; confirm with culture
- "Pneumothorax lucency = ?" = Air in pleural space; no lung markings beyond visceral line

## Clinical Reasoning
- **CXR with fever + lobar pattern** = Bacterial pneumonia (organism varies); start antibiotics
- **CXR with chronic cough + cavitary lesion** = TB until proven otherwise (sputum AFB/Xpert)
- **CXR with unilateral effusion + normal parenchyma** = Malignancy or TB (thoracentesis diagnostic)
- **CXR with bilateral small effusions + cardiac history** = CHF (likely transudative)
- **CXR with pneumothorax + hemodynamic instability** = Tension pneumothorax; needle decompression now (don't wait for CT)
- **CXR with nodule, no follow-up recommended** = Likely benign; recheck in 1 year if suspicious features`,
        mnemonics: [
          { text: "Air bronchogram = Alveolar filling (pneumonia), NOT obstruction", explanation: "Key sign meaning" },
          { text: "RLL Strep, RML H. flu, multiple lobes Staph (pneumonia bugs)", explanation: "Lobar patterns" },
          { text: "TB cavitary = Apical-posterior (upper), infectious, sputum AFB/Xpert positive", explanation: "TB diagnosis" },
          { text: "Nodule <5mm no follow, 5-10mm follow if spiculated, >10mm biopsy if suspicious", explanation: "Nodule algorithm" }
        ],
        keyPoints: [
          "Air bronchogram indicates alveolar filling, diagnostic for consolidation",
          "Lobar consolidation: S. pneumo (RLL), H. flu (RML), Staph (multiple)",
          "TB: Cavitary apical-posterior upper lobes; confirm with sputum AFB/Xpert",
          "Pleural effusion: Simple transudate (CHF), complex exudate (infection/malignancy)",
          "Lung nodule: Size + features determine management; benign if stable 2+ years"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Pneumonia and Infection", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Radiologic Signs and Patterns", edition: "8th" }
        ]
      },
      {
        layer: 5,
        slug: "pulmonary-imaging-active-recall",
        title: "Pulmonary Imaging - Active Recall",
        estimatedMinutes: 20,
        summary: "8 clinical cases testing diagnosis by imaging, management decisions, TB recognition.",
        contentMd: `# Pulmonary Imaging - Active Recall

## Q1: Lobar Pneumonia Pattern Recognition
**Q: 65-year-old with 3-day cough, fever, dyspnea. CXR shows right lower lobe consolidation with air bronchogram, silhouette sign blunting right heart border. Clinical diagnosis and expected organism?**

A: **Community-acquired pneumonia (CAP), RLL bacterial pneumonia**. **Findings diagnostic**: (1) Lobar pattern (RLL = right lower lobe specific), (2) Air bronchogram = alveolar filling (consolidation not obstruction), (3) Silhouette sign = RML consolidation hides right heart border. **Most likely organism**: **Streptococcus pneumoniae** (classic RLL lobar pneumonia). **Other RLL organisms**: H. influenzae (usually RML), Staph aureus (multiple lobes, may cavitate). **Management**: (1) Confirm clinical diagnosis (fever, cough, CXR finding), (2) Blood cultures before antibiotics, (3) Start antibiotics empirically (don't wait for cultures): Ceftriaxone 1-2g IV q12h + azithromycin (covers atypicals), (4) Oxygen if hypoxic, (5) Repeat CXR in 48-72h to assess response (infiltrate should start clearing). **Prognosis**: Most CAP responsive to antibiotics; resolution expected in 2-4 weeks (CXR may lag clinically).

## Q2: TB Diagnosis by Imaging
**Q: 32-year-old with 2-month productive cough, night sweats, weight loss. CXR shows cavitary infiltrate in right apical-posterior segment. Sputum smear AFB negative but Xpert MTB/RIF positive. TB or non-tuberculous mycobacteria?**

A: **TB (Tuberculosis) confirmed** despite AFB smear negative (smear can be negative in 10-15% of TB; Xpert more sensitive). **Findings classic for TB**: (1) Cavitary lesion apical-posterior (upper lobe), (2) Clinical presentation (chronic cough, constitutional symptoms = TB hallmarks), (3) Xpert MTB/RIF positive = TB confirmed (sensitive/specific PCR test). **AFB smear negative but Xpert positive**: Occurs when bacillary load low but still TB. **Not NTM** (atypical mycobacteria) because: Xpert specifically detects TB (not NTM). **Infectiousness**: Despite AFB negative smear, patient likely infectious (cavitary disease = bacilli in sputum/airways). **Management**: (1) **Isolate precautions** (airborne isolation ≥2 weeks of treatment), (2) **Start anti-TB regimen**: RIPE (Rifampicin 600mg, Isoniazid 300mg, Pyrazinamide 1500-2000mg, Ethambutol 1200-1600mg) daily × 2 months, then RI × 4 months (6 months total), (3) **Contact tracing** (family members examined; preventive therapy for TB-exposed contacts without active TB), (4) **Monitor sputum conversion** (repeat AFB at 2 months; should be negative if treatment successful). **Prognosis**: >95% cure with DOTS-compliant treatment.

## Q3: Viral vs Bacterial Pneumonia
**Q: 28-year-old with fever, cough. CXR shows BILATERAL perihilar interstitial infiltrates without focal consolidation. Air bronchograms absent. Sputum gram stain shows no organisms. What's the likely diagnosis?**

A: **Viral pneumonia** (influenza, RSV, COVID-19, other respiratory viruses). **Radiologic findings diagnostic**: (1) **Bilateral distribution** (lobar pattern would be bacterial), (2) **Interstitial pattern** (reticular lines, no consolidation), (3) **Perihilar predominance** (typical of viral), (4) **No air bronchogram** (alveoli not filled; interstitium affected). **Sputum findings**: No organisms on gram stain (viruses not visible on gram stain; bacteria would show). **Differential considerations**: Atypical pneumonia (Mycoplasma, Chlamydia) can look similar, but gram stain remains negative. **Management**: (1) Supportive care (oxygen if hypoxic, fluids, rest), (2) Consider antivirals if early (oseltamivir if influenza suspected, within 48h of symptom onset), (3) Avoid unnecessary antibiotics (viral infection doesn't respond), (4) Monitor for secondary bacterial infection (if consolidation develops later, consider bacterial superinfection). **Prognosis**: Most viral pneumonia self-limited (resolve in 1-2 weeks), though some progress to ARDS (especially elderly, immunosuppressed).

## Q4: Pleural Effusion Etiology
**Q: 52-year-old with dyspnea, orthopnea, edema. CXR shows bilateral small pleural effusions, blunting costophrenic angles bilaterally. Heart silhouette enlarged. Patient known CHF. What's the likely effusion type?**

A: **Transudative pleural effusion due to CHF**. **Clinical clues**: (1) Bilateral effusions (common with CHF), (2) Small-moderate size (typical CHF), (3) Cardiomegaly (enlarged heart = CHF), (4) Orthopnea (heart failure symptom). **Effusion type**: **Transudative** (simple fluid; <3 g/dL protein, <200 IU/L LDH). **Imaging appearance**: CXR shows blunting (>250 mL visible); CT would show simple fluid density (<20 HU). **Why CHF causes transudate**: Elevated hydrostatic pressure in pulmonary capillaries (from elevated LVEDP) forces fluid into pleural space; protein/LDH low (ultrafiltrate of plasma). **Management**: (1) Treat CHF (diuretics, ACE inhibitor, beta-blocker), (2) Repeat CXR in 1 week (effusions resolve with CHF treatment), (3) Thoracentesis NOT needed (diagnosis clear from clinical context), (4) If effusion persists despite CHF treatment, reconsider diagnosis (infection, malignancy, PE). **Prognosis**: Effusions resolve with CHF treatment in most cases.

## Q5: Parapneumonic Effusion
**Q: 40-year-old with RLL consolidation and fever. CXR also shows right-sided pleural effusion. Ultrasound shows free fluid (not loculated). On thoracentesis: glucose 50 mg/dL, pH 7.0, positive bacterial culture. What's diagnosis and next step?**

A: **Empyema** (infected pleural fluid from pneumonia). **Findings diagnostic**: (1) Consolidation + effusion (parapneumonic effusion), (2) Low pH (7.0 = acidic, indicates infection), (3) Low glucose (50 = very low, infected fluid), (4) **Positive culture** = empyema confirmed. **Etiology**: Bacterial infection from pneumonia has breached pleura; bacteria seeding pleural space. **Why low pH/glucose**: Bacterial metabolism produces acid (lowers pH); bacteria consume glucose. **Imaging role**: (1) CXR shows effusion size, (2) Ultrasound determines if free vs loculated (guides management). **Management**: (1) **Antibiotics** (broad-spectrum covering respiratory pathogens), (2) **Drainage**: Since pH <7 and glucose <50 = infected fluid, needs drainage (chest tube/tube thoracostomy) ± fibrinolytic therapy, (3) **Repeat imaging** to assess drainage adequacy, (4) **Repeat thoracentesis** at 2-4 days to check sterility (culture should become negative with treatment). **Prognosis**: Empyema needs aggressive drainage + antibiotics; mortality higher if undertreated (sepsis risk).

## Q6: Tension Pneumothorax Recognition
**Q: 25-year-old with acute dyspnea, hypotension, JVD (jugular venous distension). CXR shows large lucent area on left with NO lung markings; mediastinum shifted right, left hemidiaphragm depressed. What's the diagnosis and urgency?**

A: **TENSION PNEUMOTHORAX** - medical emergency. **Radiologic findings diagnostic**: (1) Large pneumothorax (lucent/black area), (2) **Hemidiaphragm depression** (left lower than right), (3) **Mediastinal shift** (trachea/heart deviated right), (4) Absent lung markings beyond visceral pleural line. **Hemodynamics explain urgency**: (1) Progressive air accumulation in pleural space increases pressure, (2) Mediastinal shift compresses right atrium → decreased venous return → hypotension, (3) JVD from increased intrathoracic pressure, (4) Hypoxemia from collapsed left lung. **Why emergency**: Cardiovascular collapse imminent; untreated = death. **IMMEDIATE management** (DON'T WAIT FOR CXR CONFIRMATION): (1) **Needle decompression** - 14-16 gauge needle in 2nd intercostal space, midclavicular line, left side (releases tension, converts to simple pneumothorax), (2) **Needle should release air with "hissing" sound**, (3) **Then chest tube** (thoracostomy) for definitive drainage, (4) Oxygen 100% (increases pneumothorax resorption). **Etiology**: Spontaneous (ruptured bleb), trauma (penetrating/blunt), barotrauma (ventilator). **Prognosis**: Excellent with immediate decompression; mortality high if delayed.

## Q7: Lung Nodule Workup
**Q: CXR screening finds 8-mm left-upper-lobe nodule with irregular spiculated margins and pleural tag. Patient smokes 40 pack-years. What's your assessment and next step?**

A: **SUSPICIOUS FOR MALIGNANCY** - requires urgent evaluation. **Risk factors present**: (1) Spiculated margins (infiltrative growth pattern), (2) Pleural tag (suggests visceral pleural involvement), (3) Smoking history (40 pack-years = high CA risk), (4) Upper lobe location (squamous CA location). **Size**: 8 mm = intermediate size (borderline); >5 mm warrants follow-up. **Benign features absent**: No smooth borders, no fat content (would indicate hamartoma), no typical calcification pattern. **Next steps**: (1) **Urgent CT chest with contrast** (characterize nodule better, assess mediastinal lymph nodes, look for other nodules), (2) **PET-CT** (assess metabolic activity; malignancy shows increased FDG uptake), (3) **Biopsy if CT suspicious** (CT-guided needle biopsy, EBUS for hilar/mediastinal nodes, thoracotomy if wedge biopsy needed), (4) **Stop smoking counseling** (reduce future cancer risk). **Differential**: Malignancy highest on differential; infection (TB, fungal) possible but less likely given appearance. **Prognosis if malignancy**: Depends on staging (CT shows extent); early detection better outcome.

## Q8: Cavitary Lesion Differential
**Q: 45-year-old with 1-month cough, hemoptysis, low-grade fever. CXR shows large cavitary lesion (2×3 cm) with thick irregular walls in right apical-posterior segment. AFB smear negative, Xpert MTB/RIF negative. What's differential diagnosis?**

A: **DIFFERENTIAL CAVITARY LESION**: Despite negative TB tests, TB still possible (false negatives occur). But differential includes: (1) **TB** (most likely despite negative tests; AFB can be negative if low bacillary load), (2) **Lung abscess** (bacterial, usually pathogens like Staph, anaerobes; associated with aspiration/poor dentition), (3) **Squamous cell carcinoma** (cavitating lesion; upper lobe, smoking history), (4) **Fungal infection** (histoplasmosis, coccidioidomycosis if endemic exposure). **Management approach**: (1) **Repeat sputum testing** (AFB smear × 3 if first negative; Xpert very sensitive but can be falsely negative), (2) **Sputum culture** (TB culture takes weeks but definitive; fungal culture if suspicion), (3) **CT chest** (assess cavitation, mediastinal involvement, lymph nodes), (4) **Bronchoscopy if sputum unavailable** (brush/biopsy for organisms/malignancy), (5) **Consider empiric TB treatment** if high suspicion (apical-posterior location, constitutional symptoms; don't wait for culture). **Key point**: Negative AFB/Xpert doesn't rule out TB; repeat testing or empiric treatment often warranted with classic presentation.`
      }
    ]
  }
];
