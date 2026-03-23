export const radiologyMcqs = [
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male with pneumonia has a frontal chest X-ray showing consolidation in the right lower lobe. He is also dyspneic and hypoxic. What is the anatomical location of consolidation?",
    clinicalVignette:
      "A 55-year-old male with fever and cough showing CXR consolidation in right lower lobe.",
    options: [
      {
        id: "a",
        text: "Right lung below the oblique fissure posteriorly",
        isCorrect: true,
        explanation:
          "Right lower lobe is the anatomical region below the oblique (major) fissure. On frontal CXR, RLL appears as triangular density at the lung base on right side. RLL pneumonia common as dependent lobes drain by gravity.",
      },
      {
        id: "b",
        text: "Right lung above the horizontal fissure",
        isCorrect: false,
        explanation:
          "Area above horizontal fissure is right middle lobe.",
      },
      {
        id: "c",
        text: "Right lung superior to the oblique fissure",
        isCorrect: false,
        explanation:
          "Superior to oblique fissure is right upper lobe.",
      },
      {
        id: "d",
        text: "Mediastinum and right hilum",
        isCorrect: false,
        explanation:
          "Those are midline structures, not lower lobe.",
      },
    ],
    explanation:
      "Right lung lobes: (1) Right upper lobe (RUL): superior to horizontal fissure, (2) Right middle lobe (RML): between horizontal and oblique fissures, (3) Right lower lobe (RLL): inferior to oblique fissure. Left lung has only two lobes (upper and lower) due to cardiac shadow. CXR interpretation requires knowledge of lobar anatomy and segmental distribution for localizing pathology.",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-01-TOP-001",
    textbookRefs: [
      { book: "Felson's Chest Radiology", chapter: "Ch 1", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old female with acute right upper quadrant pain and positive Murphy's sign has an ultrasound showing a 2.5 cm echo-free lesion in the gallbladder with acoustic shadowing and a thickened gallbladder wall (5 mm). What is the most likely diagnosis?",
    clinicalVignette:
      "A 35-year-old female with acute cholecystitis symptoms and ultrasound findings.",
    options: [
      {
        id: "a",
        text: "Acute cholecystitis with cholelithiasis",
        isCorrect: true,
        explanation:
          "Classic ultrasound findings of acute cholecystitis: (1) gallstone (echo-free lesion with acoustic shadowing), (2) thickened gallbladder wall (>3 mm indicates inflammation), (3) positive Murphy's sign (pain with probe pressure on gallbladder), (4) pericholecystic fluid. All findings present in this case.",
      },
      {
        id: "b",
        text: "Gallbladder adenocarcinoma",
        isCorrect: false,
        explanation:
          "Adenocarcinoma would show focal wall thickening with mass, not diffuse thickening.",
      },
      {
        id: "c",
        text: "Epiploic appendagitis",
        isCorrect: false,
        explanation:
          "Epiploic inflammation is omentum, not gallbladder.",
      },
      {
        id: "d",
        text: "Biliary dyskinesia without stones",
        isCorrect: false,
        explanation:
          "Stone is clearly visible on ultrasound.",
      },
    ],
    explanation:
      "Acute cholecystitis ultrasound diagnostic criteria (Murphy's criterion plus two of): (1) gallstone, (2) thickened gallbladder wall (>3 mm), (3) pericholecystic fluid, (4) sonographic Murphy's sign. This patient meets criteria (gallstone + wall thickening + positive Murphy's). Acoustic shadowing from stones indicates they are calcified (cholesterol stones). Echo-free lesion = cystic/fluid-filled area. Diagnosis of acute cholecystitis requires clinical correlation with imaging.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-02-TOP-002",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 54", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 65-year-old male with chronic obstructive pulmonary disease presents with acute dyspnea. Frontal chest X-ray shows a unilateral hyperlucent lung field with absent pulmonary vasculature on the right side and cardiac/mediastinal shift to the left. What is the diagnosis?",
    clinicalVignette:
      "A 65-year-old male with COPD presenting with acute dyspnea and CXR findings of unilateral hyperlucency.",
    options: [
      {
        id: "a",
        text: "Tension pneumothorax with mediastinal shift",
        isCorrect: true,
        explanation:
          "Tension pneumothorax presents with: (1) unilateral hyperlucent lung (no vascularity), (2) collapsed lung edge visible, (3) mediastinal shift away from affected side (toward uninvolved lung), (4) depression of hemidiaphragm. This is a surgical emergency. CXR findings diagnostic when mediastinal shift present.",
      },
      {
        id: "b",
        text: "Simple pneumothorax",
        isCorrect: false,
        explanation:
          "Simple pneumothorax does not cause mediastinal shift.",
      },
      {
        id: "c",
        text: "Giant bullae with emphysema",
        isCorrect: false,
        explanation:
          "Bullae would show some vasculature; tension pneumothorax has complete absence.",
      },
      {
        id: "d",
        text: "Pulmonary embolism with infarction",
        isCorrect: false,
        explanation:
          "PE shows opacification, not hyperlucency.",
      },
    ],
    explanation:
      "Pneumothorax classification: (1) Simple: collapsed lung with no mediastinal shift, (2) Tension: mediastinal shift, hemodynamic compromise. CXR findings of pneumothorax: (1) hyperlucency of affected hemithorax, (2) absent pulmonary vasculature, (3) collapsed lung edge (visceral pleural line), (4) mediastinal shift in tension. Tension pneumothorax is life-threatening → requires urgent needle decompression (2nd ICS midclavicular line) followed by chest tube. COPD patients at high risk for pneumothorax from ruptured bullae.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-01-TOP-003",
    textbookRefs: [
      { book: "Felson's Chest Radiology", chapter: "Ch 11", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male undergoes CT of abdomen for abdominal pain. The radiologist notes bilateral renal artery stenosis with 'bead-on-string' appearance of both renal arteries on contrast-enhanced study. What is the most likely etiology?",
    clinicalVignette:
      "A 45-year-old male with hypertension and 'beading' of renal arteries on CT angiography.",
    options: [
      {
        id: "a",
        text: "Fibromuscular dysplasia (FMD) of renal arteries",
        isCorrect: true,
        explanation:
          "'Bead-on-string' appearance is pathognomonic for fibromuscular dysplasia, most common cause of secondary hypertension in young females (but also males). Alternating areas of stenosis and aneurysmal dilation create the bead-like appearance on angiography/CTA.",
      },
      {
        id: "b",
        text: "Atherosclerotic renal artery stenosis",
        isCorrect: false,
        explanation:
          "Atherosclerotic stenosis appears as focal narrowing, not beading pattern.",
      },
      {
        id: "c",
        text: "Takayasu arteritis",
        isCorrect: false,
        explanation:
          "Takayasu affects large vessels with smooth stenosis, not beading.",
      },
      {
        id: "d",
        text: "Polyarteritis nodosa",
        isCorrect: false,
        explanation:
          "PAN shows microaneurysms and infarcts, not typical beading.",
      },
    ],
    explanation:
      "Fibromuscular dysplasia (FMD) is a noninflammatory, nonatherosclerotic vascular disease causing alternating areas of stenosis and dilation. Most common in young females affecting renal and carotid arteries. 'Bead-on-string' appearance is classic on angiography/CTA. Associated with hypertension and renal artery stenosis. Etiology unknown; possible hormonal factors (more common in females taking oral contraceptives). Treatment depends on severity: antihypertensives, angioplasty, or surgery for refractory cases. Bilateral involvement in 35-40% of cases.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-03-TOP-004",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 64", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 30-year-old female with acute severe headache undergoes non-contrast CT head which is normal. Lumbar puncture shows xanthochromia (yellow discoloration of CSF). What is the most likely diagnosis and appropriate imaging?",
    clinicalVignette:
      "A 30-year-old female with thunderclap headache, normal CT but xanthochromia on LP.",
    options: [
      {
        id: "a",
        text: "Subarachnoid hemorrhage; proceed with CTA or conventional angiography to find aneurysm",
        isCorrect: true,
        explanation:
          "Xanthochromia indicates blood products in CSF from subarachnoid hemorrhage. Normal CT in early SAH does not exclude diagnosis (20-30% may have normal CT in first 6 hours). LP shows xanthochromia (yellow color from bilirubin from RBC breakdown), ruling out traumatic tap. Requires urgent CTA or conventional angiography to identify aneurysm for treatment.",
      },
      {
        id: "b",
        text: "Acute meningitis; start antibiotics immediately",
        isCorrect: false,
        explanation:
          "Meningitis has different CSF profile (elevated WBC, protein, low glucose).",
      },
      {
        id: "c",
        text: "Arteriovenous malformation requiring MRI",
        isCorrect: false,
        explanation:
          "AVM would show up on angiography if causing SAH.",
      },
      {
        id: "d",
        text: "Reversible cerebral vasoconstriction syndrome (RCVS) requiring hemodynamic support",
        isCorrect: false,
        explanation:
          "RCVS diagnosis made clinically; xanthochromia indicates bleeding, not RCVS.",
      },
    ],
    explanation:
      "Subarachnoid hemorrhage presentation: sudden severe headache (thunderclap), neck stiffness, photophobia, altered mental status. CT findings: blood in subarachnoid space (hyperdense), but sensitivity only ~80%, especially in early stages. LP with xanthochromia is gold standard for SAH diagnosis. Xanthochromia appears 2-12 hours after hemorrhage from RBC lysis and bilirubin formation. Management: immediate CTA or conventional angiography to identify cause (85% aneurysms, 5% AVM, 5% vasculitis, 5% nonaneurysmal). Ruptured aneurysm requires urgent intervention (clipping or coiling) to prevent rebleeding. Mortality high (50%) in first month.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-04-TOP-005",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 61", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old female presents with dysuria and flank pain. Unenhanced CT (gold standard) shows a 5 mm hyperdense object in the right ureter at the level of L4. What is the composition of this stone?",
    clinicalVignette:
      "A 28-year-old female with acute kidney stone presenting with severe flank pain.",
    options: [
      {
        id: "a",
        text: "Uric acid stone; radiolucent on plain films but visible on CT",
        isCorrect: false,
        explanation:
          "Uric acid stones are radiolucent on plain films.",
      },
      {
        id: "b",
        text: "Calcium oxalate stone; radiopaque and highly visible on CT",
        isCorrect: true,
        explanation:
          "Calcium-containing stones (calcium oxalate, calcium phosphate) are radiopaque and hyperdense on CT. CT is gold standard for stone detection (sensitivity/specificity >99%). This patient's acute flank pain with stone at ureteral level indicates obstructing calculus.",
      },
      {
        id: "c",
        text: "Struvite stone; causes staghorn calculus",
        isCorrect: false,
        explanation:
          "Struvite stones form staghorn shapes, not solitary ureteral stones.",
      },
      {
        id: "d",
        text: "Cystine stone; poorly visible on CT",
        isCorrect: false,
        explanation:
          "Cystine stones are somewhat radiopaque and visible on CT.",
      },
    ],
    explanation:
      "Kidney stone composition and radiodensity: (1) Calcium oxalate (70%): radiopaque, visible on plain films and CT, (2) Calcium phosphate: radiopaque, (3) Uric acid (10%): radiolucent, not visible on plain films but visible on CT (unenhanced CT uses density differences), (4) Struvite (magnesium ammonium phosphate, 10-15%): radiopaque, staghorn morphology, associated with Proteus infections, (5) Cystine (1-2%): weakly radiopaque. Unenhanced CT is gold standard for stone detection regardless of composition, sensitivity/specificity >99%. Management depends on size and location: stones <4 mm pass spontaneously in 80%, 4-6 mm in 50%, >6 mm rarely pass. Medical expulsive therapy, surgical intervention (ESWL, ureteroscopy) for obstructing or symptomatic stones.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-03-TOP-006",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 70", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old male smoker with hemoptysis undergoes CT chest with contrast showing a 3 cm hypoattenuating mass in the right lower lobe with post-obstructive pneumonia. Which finding would be most suspicious for advanced disease?",
    clinicalVignette:
      "A 60-year-old male with lung mass and post-obstructive pneumonia.",
    options: [
      {
        id: "a",
        text: "Endobronchial location with airway obstruction",
        isCorrect: false,
        explanation:
          "Endobronchial location indicates centrality but not necessarily advanced disease.",
      },
      {
        id: "b",
        text: "Mediastinal adenopathy (>1 cm short axis) and pleural effusion",
        isCorrect: true,
        explanation:
          "Mediastinal lymph node enlargement (>1 cm short axis) indicates N2/N3 disease (advanced). Pleural effusion indicates T4 disease. Both suggest advanced stage, poor prognosis, limited surgical candidacy.",
      },
      {
        id: "c",
        text: "Peripheral nodular opacity with spiculated borders",
        isCorrect: false,
        explanation:
          "Peripheral location and spiculation common in early lung cancers.",
      },
      {
        id: "d",
        text: "Bronchial wall thickening and air bronchograms",
        isCorrect: false,
        explanation:
          "These findings can occur with pneumonia or early disease.",
      },
    ],
    explanation:
      "TNM staging of lung cancer determines prognosis and treatment. T stage (tumor size/location): (1) T1: ≤3 cm peripheral, (2) T2: >3 cm or involving main bronchus, (3) T3: invasion of adjacent structures, (4) T4: invasion of mediastinum/heart/vessels or separate tumor nodule. N stage (lymph nodes): (1) N0: no nodes, (2) N1: ipsilateral hilar, (3) N2: ipsilateral mediastinal (>1 cm), (4) N3: contralateral or supraclavicular. M stage (metastases): (1) M0: none, (2) M1: present. Advanced disease (Stage IIIB-IV) includes mediastinal lymphadenopathy, pleural effusion, distant metastases. CT with contrast assesses primary tumor, mediastinal involvement, and distant metastases.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-01-TOP-007",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 40", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 70-year-old female with hip pain undergoes plain radiographs showing a lucent lesion at the femoral head-neck junction with surrounding sclerosis. What is the most likely diagnosis?",
    clinicalVignette:
      "A 70-year-old female with hip pain and radiographic lesion at femoral head-neck junction.",
    options: [
      {
        id: "a",
        text: "Hip osteoarthritis with osteophyte formation",
        isCorrect: false,
        explanation:
          "OA shows joint space narrowing and osteophytes, not lucent lesions.",
      },
      {
        id: "b",
        text: "Avascular necrosis (osteonecrosis) of femoral head",
        isCorrect: true,
        explanation:
          "Avascular necrosis of hip presents with lucency (necrotic bone) at femoral head-neck junction with sclerotic margin (reparative response). This is characteristic appearance on plain radiographs.",
      },
      {
        id: "c",
        text: "Hip labral tear requiring MRI",
        isCorrect: false,
        explanation:
          "Labral tear not visible on plain films.",
      },
      {
        id: "d",
        text: "Femoral neck fracture",
        isCorrect: false,
        explanation:
          "Fracture would show a fracture line, not localized lucency.",
      },
    ],
    explanation:
      "Avascular necrosis (osteonecrosis) results from interruption of blood supply to bone, most commonly femoral head (hip), femoral condyle (knee), scaphoid (wrist), talus (ankle). Risk factors: trauma (femoral neck fracture), idiopathic, corticosteroid use, sickle cell disease, HIV, radiation. Radiographic findings: (1) lucency (necrotic bone), (2) sclerotic margin (reactive bone), (3) crescent sign (subchondral lucency), (4) later: collapse and secondary arthritis. MRI most sensitive for early detection. This patient's presentation consistent with advanced AVN with femoral head involvement. Treatment: hip replacement if collapsed/symptomatic.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-05-TOP-008",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 72", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old female with acute abdominal pain undergoes unenhanced CT which shows multiple dilated loops of small bowel (3 cm diameter) with a transition point to collapsed bowel distally, and a 'whirl sign' visible in the mesentery. What is the diagnosis?",
    clinicalVignette:
      "A 45-year-old female with acute bowel obstruction showing characteristic CT findings.",
    options: [
      {
        id: "a",
        text: "Volvulus with mesenteric twist causing whirl sign",
        isCorrect: true,
        explanation:
          "'Whirl sign' is pathognomonic for volvulus: mesentery twists around its vascular pedicle creating spiral appearance on CT. Combined with transition point and proximal dilation indicates mechanical obstruction from volvulus.",
      },
      {
        id: "b",
        text: "Adhesions causing internal hernia",
        isCorrect: false,
        explanation:
          "Adhesions and internal hernia don't create whirl sign.",
      },
      {
        id: "c",
        text: "Crohn's disease with stricture",
        isCorrect: false,
        explanation:
          "Crohn's would show wall thickening and skip lesions, not whirl sign.",
      },
      {
        id: "d",
        text: "Small bowel obstruction from carcinoid syndrome",
        isCorrect: false,
        explanation:
          "Carcinoid causes desmoplastic reaction, not whirl sign.",
      },
    ],
    explanation:
      "Volvulus is twisting of bowel around its mesenteric pedicle causing obstruction. Types: small bowel volvulus (less common, 5-10% of obstructions), sigmoid volvulus (more common, 10-15% of obstructions). CT findings of small bowel volvulus: (1) 'whirl sign': mesentery twisted around axis creating spiral pattern, (2) 'transition point': abrupt change from dilated to collapsed bowel, (3) proximal bowel dilation (>3 cm small bowel is abnormal), (4) mesenteric torsion. Diagnosis of volvulus requires emergency surgery to untwist and assess for bowel viability. Mortality high if not promptly treated due to bowel infarction risk.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-03-TOP-009",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 46", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old male with hematuria undergoes CT urography showing a 4 cm enhancing mass in the renal cortex. The mass shows heterogeneous enhancement with areas of necrosis. What is the most likely diagnosis?",
    clinicalVignette:
      "A 60-year-old male with renal mass showing enhancement and necrosis on CT.",
    options: [
      {
        id: "a",
        text: "Renal cell carcinoma (RCC) with heterogeneous enhancement",
        isCorrect: true,
        explanation:
          "RCC presents with enhancing cortical mass on CT. Heterogeneous enhancement and necrosis indicate malignancy. RCC is most common renal malignancy (85% of renal cancers). Clear cell type most common.",
      },
      {
        id: "b",
        text: "Simple renal cyst",
        isCorrect: false,
        explanation:
          "Simple cysts don't enhance and have clear/homogeneous appearance.",
      },
      {
        id: "c",
        text: "Angiomyolipoma",
        isCorrect: false,
        explanation:
          "AML shows fat attenuation; this mass shows heterogeneous enhancement.",
      },
      {
        id: "d",
        text: "Renal infarction",
        isCorrect: false,
        explanation:
          "Infarction shows wedge-shaped nonenhancing area, not a mass.",
      },
    ],
    explanation:
      "Renal cell carcinoma classification: (1) Clear cell RCC (70-80%): golden yellow color, hemorrhage/necrosis common, often heterogeneous, (2) Papillary (10-15%): gray-white, homogeneous, better prognosis, (3) Chromophobe (5%): tan color, homogeneous, better prognosis, (4) Collecting duct (<1%): aggressive. Imaging: CT with contrast shows enhancement (rule out cyst). Necrosis and heterogeneous appearance indicate higher grade. Staging: based on size (T1a <4 cm, T1b 4-7 cm, T2 >7 cm) and local invasion. Management: nephron-sparing surgery for small tumors, radical nephrectomy for larger/invasive tumors. Prognosis depends on stage and grade.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-03-TOP-010",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 70", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old female with acute epigastric pain undergoes CT with contrast showing thickening of the gastric wall and surrounding edema. Portal vein is not visible on imaging. What is the most likely diagnosis?",
    clinicalVignette:
      "A 35-year-old female with acute gastritis and portal vein thrombosis findings on CT.",
    options: [
      {
        id: "a",
        text: "Acute gastritis with portal vein thrombosis (Pylephlebitis)",
        isCorrect: true,
        explanation:
          "Pylephlebitis (portal vein thrombosis) can occur with acute gastritis, appendicitis, or other intra-abdominal infections. CT shows portal vein nonvisualization or thrombus. Gastric wall thickening with edema indicates acute inflammation.",
      },
      {
        id: "b",
        text: "Gastric carcinoma with invasion",
        isCorrect: false,
        explanation:
          "Carcinoma would show focal mass, not diffuse wall thickening.",
      },
      {
        id: "c",
        text: "Gastric ulcer with perforation",
        isCorrect: false,
        explanation:
          "Perforation would show free air in peritoneum.",
      },
      {
        id: "d",
        text: "Hypertrophic pyloric stenosis",
        isCorrect: false,
        explanation:
          "Pyloric stenosis more common in infants, shows muscular hypertrophy.",
      },
    ],
    explanation:
      "Pylephlebitis (portal vein thrombosis) is thrombosis of portal vein from intra-abdominal inflammation/infection. Causes: appendicitis, gastritis, diverticulitis, inflammatory bowel disease, pancreatitis. CT findings: portal vein nonvisualization or filling defect (thrombus), absent portal vein enhancement. Associated with underlying pathology causing inflammation. Complications: hepatic ischemia, hepatic abscess. Management: antibiotics, treatment of underlying cause, anticoagulation controversial. This patient's gastritis with portal vein thrombosis suggests severe inflammatory process. Imaging plays critical role in diagnosis and assessment for complications.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-03-TOP-011",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 45", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male with cirrhosis presents with hematemesis. Esophageal ultrasound shows dilated vessels in esophageal wall with blood flow detected by Doppler. What is the diagnosis and what finding predicts high rebleeding risk?",
    clinicalVignette:
      "A 50-year-old male with cirrhosis presenting with variceal bleeding.",
    options: [
      {
        id: "a",
        text: "Esophageal varices; red wale sign indicates high rebleeding risk",
        isCorrect: true,
        explanation:
          "Esophageal varices are dilated submucosal vessels in esophageal wall due to portal hypertension. Red wale sign (red longitudinal streaks on variceal surface) indicates thin mucosa overlying varix, high risk of rebleeding. Requires urgent endoscopic variceal ligation or sclerotherapy.",
      },
      {
        id: "b",
        text: "Mallory-Weiss tear requiring conservative management",
        isCorrect: false,
        explanation:
          "Mallory-Weiss is mucosal tear, not varices.",
      },
      {
        id: "c",
        text: "Portal hypertensive gastropathy",
        isCorrect: false,
        explanation:
          "Gastropathy is diffuse gastric involvement, not discrete esophageal varices.",
      },
      {
        id: "d",
        text: "Dieulafoy lesion requiring angiographic embolization",
        isCorrect: false,
        explanation:
          "Dieulafoy is arterial lesion, not variceal.",
      },
    ],
    explanation:
      "Esophageal varices result from portal hypertension (cirrhosis causes obstruction to portal blood flow). Increased portal pressure leads to development of portosystemic collaterals, including esophageal varices. Endoscopic findings predicting high rebleeding risk: (1) large varices (>5 mm), (2) red wale sign (red streaks), (3) diffuse erythema, (4) cherry-red spots (adherent clots). Variceal bleeding has high mortality (30%) without treatment. Management: (1) endoscopic variceal ligation or sclerotherapy, (2) beta-blockers (propranolol, carvedilol) to reduce portal pressure, (3) transjugular intrahepatic portosystemic shunt (TIPS) for refractory bleeding, (4) blood product resuscitation carefully (avoid over-transfusion raising portal pressure).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-02-TOP-012",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 57", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 40-year-old male with acute severe back pain radiating to bilateral legs has MRI showing central disc herniation at L4-L5 with spinal canal compromise and bilateral neural foraminal stenosis. He reports urinary retention, fecal incontinence, and bilateral leg weakness. What is the surgical urgency?",
    clinicalVignette:
      "A 40-year-old male with acute cauda equina syndrome from disc herniation.",
    options: [
      {
        id: "a",
        text: "Urgent surgical decompression within 48 hours to prevent permanent neurological deficit",
        isCorrect: true,
        explanation:
          "Cauda equina syndrome (CES) is neurosurgical emergency. Presentation: bilateral leg pain, bilateral leg weakness, bilateral sensory loss, urinary retention, fecal incontinence, saddle anesthesia. MRI shows central disc herniation with spinal canal compromise. Timing: urgent decompression within 24-48 hours critical to prevent permanent neurological injury (paralysis, bowel/bladder dysfunction).",
      },
      {
        id: "b",
        text: "Conservative management with bed rest and steroids",
        isCorrect: false,
        explanation:
          "Conservative management contraindicated in CES; surgery urgent.",
      },
      {
        id: "c",
        text: "Elective epidural steroid injection for symptom relief",
        isCorrect: false,
        explanation:
          "Injections delay definitive treatment in CES.",
      },
      {
        id: "d",
        text: "Imaging follow-up in 2 weeks before considering surgery",
        isCorrect: false,
        explanation:
          "Delaying surgery in CES risks irreversible neurological damage.",
      },
    ],
    explanation:
      "Cauda equina syndrome is compression of cauda equina nerve roots causing acute severe symptoms. Most common cause: large central disc herniation at L4-L5 or L5-S1. Presentation: bilateral leg pain, bilateral leg weakness, saddle anesthesia, urinary retention, fecal incontinence. This is neurosurgical emergency. MRI diagnostic showing central disc with canal compromise and foraminal stenosis. Prognosis: urgent decompression (within 24 hours ideally, up to 48 hours) prevents permanent paralysis and bowel/bladder dysfunction. Delayed surgery (>48 hours) associated with worse long-term neurological outcomes. Surgical approach: usually lumbar laminectomy with discectomy. Post-op recovery: varies, some permanent deficit possible if severely compressed preoperatively.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-04-TOP-013",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 61", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 65-year-old male with severe COPD and cor pulmonale has chest radiograph showing cardiomegaly and prominent pulmonary arteries with 'pruning' of peripheral vessels. What is the primary finding?",
    clinicalVignette:
      "A 65-year-old male with COPD and cor pulmonale showing characteristic CXR findings.",
    options: [
      {
        id: "a",
        text: "Pulmonary hypertension with central pulmonary artery dilation and peripheral vessel attenuation",
        isCorrect: true,
        explanation:
          "Cor pulmonale develops from chronic pulmonary hypertension (COPD, ILD, chronic PE) causing right heart enlargement. CXR findings: (1) enlarged pulmonary artery at hilum (>16 mm), (2) pruning of peripheral vessels, (3) cardiomegaly (right ventricular enlargement), (4) prominent hila.",
      },
      {
        id: "b",
        text: "Left heart failure with pulmonary edema",
        isCorrect: false,
        explanation:
          "Left heart failure would show pulmonary edema, not pruning.",
      },
      {
        id: "c",
        text: "Tension pneumothorax requiring urgent decompression",
        isCorrect: false,
        explanation:
          "Pneumothorax would show hyperlucency, not these findings.",
      },
      {
        id: "d",
        text: "Acute myocardial infarction with cardiogenic shock",
        isCorrect: false,
        explanation:
          "MI does not produce these specific radiographic findings.",
      },
    ],
    explanation:
      "Cor pulmonale is right ventricular hypertrophy/dilation from chronic pulmonary hypertension. Causes: COPD (most common), interstitial lung disease, chronic PE, primary pulmonary hypertension. Pathophysiology: (1) lung disease increases pulmonary vascular resistance, (2) chronic RV pressure overload → RV hypertrophy then dilation, (3) eventually right heart failure. CXR findings: (1) enlarged pulmonary arteries (central), (2) peripheral vessel pruning (attenuation), (3) right heart enlargement (increased cardiac diameter), (4) sometimes right atrial enlargement. CT can assess pulmonary circulation and rule out PE. Prognosis: chronic progressive disease; management focuses on treating underlying pulmonary disease, supplemental oxygen, diuretics for fluid overload.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-01-TOP-014",
    textbookRefs: [
      { book: "Felson's Chest Radiology", chapter: "Ch 3", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old female with breast cancer has undergone lumpectomy. Follow-up mammography shows clustered microcalcifications in the same breast distant from lumpectomy site. What is the radiographic finding and clinical significance?",
    clinicalVignette:
      "A 50-year-old female post-breast cancer surgery with suspicious microcalcifications on follow-up imaging.",
    options: [
      {
        id: "a",
        text: "BIRADS 4: suspicious microcalcifications suggesting possible malignancy; requires biopsy",
        isCorrect: true,
        explanation:
          "Clustered microcalcifications at distance from lumpectomy site are suspicious for recurrent/new malignancy. BIRADS classification: (1) BIRADS 1-2: normal/benign, (2) BIRADS 3: probably benign, (3) BIRADS 4: suspicious malignancy (requires biopsy), (4) BIRADS 5: malignant. Clustered microcalcifications indicate potential ductal carcinoma in situ (DCIS) or invasive cancer.",
      },
      {
        id: "b",
        text: "Fat necrosis from lumpectomy; benign, no follow-up needed",
        isCorrect: false,
        explanation:
          "Fat necrosis typically occurs at surgical site, not distant.",
      },
      {
        id: "c",
        text: "Fibroadenoma with calcifications",
        isCorrect: false,
        explanation:
          "Fibroadenomas don't present as clustered microcalcifications.",
      },
      {
        id: "d",
        text: "Vascular calcifications; benign",
        isCorrect: false,
        explanation:
          "Vascular calcifications have different morphology (coarse, linear).",
      },
    ],
    explanation:
      "Breast microcalcification morphology: (1) Benign: coarse (>2.5 mm), dense, rod-like, vascular, (2) Suspicious: fine linear, branching, clustered, pleomorphic. Clustered microcalcifications in breast cancer surveillance are concerning for recurrence (local recurrence/new primary) or DCIS. BIRADS 4 findings require biopsy (stereotactic or excisional). Timing and location away from lumpectomy site increase suspicion. Management: biopsy confirmed recurrent/new malignancy requires re-excision or mastectomy depending on extent.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-06-TOP-015",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 34", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old female presents with palpable breast mass. Ultrasound shows a well-defined, hypoechoic, oval-shaped lesion without posterior acoustic shadowing. What is the most likely diagnosis?",
    clinicalVignette:
      "A 28-year-old female with palpable breast mass on ultrasound with benign features.",
    options: [
      {
        id: "a",
        text: "Fibroadenoma; benign breast tumor, no treatment required",
        isCorrect: true,
        explanation:
          "Fibroadenoma presents with well-defined, hypoechoic, oval or round lesion on ultrasound. Lack of posterior acoustic shadowing or enhancement helps differentiate from cancer. Fibroadenomas are benign common breast tumors in younger women. BIRADS 2 (benign); no biopsy needed if features consistent.",
      },
      {
        id: "b",
        text: "Ductal carcinoma in situ requiring immediate surgery",
        isCorrect: false,
        explanation:
          "DCIS would show more irregular features, microcalcifications, ductal dilation.",
      },
      {
        id: "c",
        text: "Breast abscess requiring drainage",
        isCorrect: false,
        explanation:
          "Abscess would show irregular borders, fluid collection, clinical signs of infection.",
      },
      {
        id: "d",
        text: "Papilloma requiring excision",
        isCorrect: false,
        explanation:
          "Papillomas are intraductal, smaller, cause nipple discharge.",
      },
    ],
    explanation:
      "Breast lesion ultrasound characteristics: (1) Fibroadenoma: well-defined, hypoechoic, oval, homogeneous, no shadowing, (2) Cancer: irregular borders, taller than wide, parallel orientation, shadowing, heterogeneous, (3) Cyst: anechoic, thin wall, posterior enhancement, (4) Papilloma: intraductal, small, causes nipple discharge. BIRADS classification: 1 = normal, 2 = benign, 3 = probably benign (follow-up), 4 = suspicious (biopsy), 5 = malignant. Young age and benign ultrasound features make fibroadenoma likely. No treatment needed unless bothersome or growing rapidly. Biopsy not required for BIRADS 2 lesions.",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-06-TOP-016",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 34", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male with alcoholism presents with hematemesis. Endoscopy shows bleeding from esophageal varices. Besides variceal ligation, what imaging would help assess the underlying portal hypertension and plan TIPS if needed?",
    clinicalVignette:
      "A 55-year-old male with alcoholic cirrhosis and variceal bleeding requiring imaging assessment.",
    options: [
      {
        id: "a",
        text: "CT with contrast or Doppler ultrasound to assess portal vein patency and direction of flow",
        isCorrect: true,
        explanation:
          "CT with IV contrast shows portal vein (should enhance normally). Doppler ultrasound shows direction of flow (normal hepatopetal). TIPS (transjugular intrahepatic portosystemic shunt) requires patent portal vein for successful procedure. Imaging assesses for portal vein thrombosis (contraindication for TIPS) and degree of portal hypertension.",
      },
      {
        id: "b",
        text: "MRI brain for hepatic encephalopathy",
        isCorrect: false,
        explanation:
          "While encephalopathy can occur, imaging of portal system more important for TIPS planning.",
      },
      {
        id: "c",
        text: "Abdominal radiographs for free air",
        isCorrect: false,
        explanation:
          "Free air assessment not relevant for portal hypertension imaging.",
      },
      {
        id: "d",
        text: "Esophageal manometry for pressure measurements",
        isCorrect: false,
        explanation:
          "Manometry assesses esophageal motility, not portal hypertension.",
      },
    ],
    explanation:
      "Portal hypertension assessment for TIPS planning: CT with IV contrast shows portal vein enhancement and patency, collateral vessels, ascites. Doppler ultrasound shows portal vein flow direction (normally hepatopetal = toward liver; reversed = portosystemic collaterals). TIPS creation requires: (1) patent portal vein, (2) adequate left portal vein branch, (3) patent hepatic vein outflow. Contraindications: portal vein thrombosis, uncontrolled infection, hepatic encephalopathy (relative). TIPS reduces portal pressure gradient, effective for refractory variceal bleeding, refractory ascites. Imaging crucial for procedural planning and assessment of vascular anatomy.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-02-TOP-017",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 57", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old male with colorectal cancer undergoes contrast-enhanced CT showing liver metastases and peritoneal carcinomatosis. What is the most common site of colorectal cancer metastasis?",
    clinicalVignette:
      "A 60-year-old male with advanced colorectal cancer showing metastatic disease.",
    options: [
      {
        id: "a",
        text: "Liver; via portal venous drainage from colon",
        isCorrect: true,
        explanation:
          "Liver is most common site of colorectal cancer metastasis (70% of metastatic patients). Anatomical reason: colon drains via portal vein to liver; cancer cells preferentially lodge in liver. Second most common: peritoneal metastases (carcinomatosis). Lung, bone metastases also occur but less frequently.",
      },
      {
        id: "b",
        text: "Lung; via systemic venous drainage",
        isCorrect: false,
        explanation:
          "Lung is common but liver is most common site.",
      },
      {
        id: "c",
        text: "Brain; via arterial hematogenous spread",
        isCorrect: false,
        explanation:
          "Brain metastases rare from colorectal cancer.",
      },
      {
        id: "d",
        text: "Bone; via Batson's plexus",
        isCorrect: false,
        explanation:
          "Bone metastases less common than liver.",
      },
    ],
    explanation:
      "Colorectal cancer metastasis pattern: (1) Liver (70%): portal venous drainage from colon creates predilection for hepatic metastases, (2) Peritoneum (20%): direct transcoelomic spread or from perforation, (3) Lung (20%): systemic venous drainage for right-sided tumors, (4) Bone (5%): less common, (5) Brain (<5%): rare. Imaging: CT abdomen/pelvis with IV contrast shows liver metastases (enhancing lesions in portal venous phase), peritoneal nodules/ascites, peritoneal carcinomatosis. Prognosis: metastatic disease historically poor (5-year survival ~10%), but newer systemic chemotherapy improving outcomes. Resectable liver metastases (1-3 isolated lesions) may be surgically resected with chemotherapy for improved survival.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-03-TOP-018",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 48", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old female with acute pancreatitis has CT with IV contrast showing areas of non-enhancement within pancreatic parenchyma. What is the significance of this finding?",
    clinicalVignette:
      "A 45-year-old female with acute pancreatitis and non-enhancing pancreatic parenchyma.",
    options: [
      {
        id: "a",
        text: "Pancreatic necrosis; associated with organ dysfunction and high mortality",
        isCorrect: true,
        explanation:
          "Non-enhancing areas of pancreatic parenchyma on contrast-enhanced CT indicate pancreatic necrosis from ischemic injury. Necrotizing pancreatitis has worse prognosis (30-40% mortality) compared to edematous pancreatitis (3% mortality). Complications: infected necrosis, organ failure, hemorrhage.",
      },
      {
        id: "b",
        text: "Simple edema of pancreas; benign, will resolve",
        isCorrect: false,
        explanation:
          "Edematous pancreatitis shows normal or increased enhancement.",
      },
      {
        id: "c",
        text: "Pancreatic cancer with central necrosis",
        isCorrect: false,
        explanation:
          "Acute setting makes cancer unlikely; pancreatitis more likely.",
      },
      {
        id: "d",
        text: "Pancreatic cyst requiring drainage",
        isCorrect: false,
        explanation:
          "Cysts are well-defined collections; this is parenchymal necrosis.",
      },
    ],
    explanation:
      "Acute pancreatitis severity assessment by CT: (1) Edematous pancreatitis: diffuse or focal pancreatic enlargement, normal or increased enhancement, (2) Necrotizing pancreatitis: areas of non-enhancement (necrosis) >30% of gland. Modified Marshall scoring and APACHE II assess overall severity and predict mortality. Pancreatic necrosis risk factors: delayed recognition, infected necrosis. Complications: organ failure (respiratory, renal, cardiovascular), infected necrosis (mortality increased), hemorrhage, pseudoaneurysm (splenic artery). Management: ICU monitoring, supportive care, antibiotics if infected, nutritional support. Step-up approach for infected necrosis: percutaneous drainage first, then minimally invasive debridement if needed, surgery last resort.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-03-TOP-019",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 59", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 30-year-old pregnant female (30 weeks gestation) presents with epigastric pain and elevated liver enzymes. Ultrasound shows thickened gallbladder wall (>4 mm) and sludge without gallstones. What is the diagnosis?",
    clinicalVignette:
      "A 30-week pregnant female with suspected cholecystitis and ultrasound findings.",
    options: [
      {
        id: "a",
        text: "Acute cholecystitis without cholelithiasis (acalculous) from pregnancy-related stasis",
        isCorrect: true,
        explanation:
          "Pregnancy increases cholecystitis risk from: (1) increased bile lithogenicity from estrogen, (2) reduced gallbladder contractility from progesterone, (3) bile stasis. Acalculous cholecystitis (without stones) can occur especially in pregnant women. Ultrasound findings: thickened wall, sludge. Diagnosis requires clinical correlation (Murphy's sign, RUQ pain).",
      },
      {
        id: "b",
        text: "Gestational diabetes with hepatic steatosis",
        isCorrect: false,
        explanation:
          "Steatosis would not cause wall thickening.",
      },
      {
        id: "c",
        text: "HELLP syndrome with hemolysis",
        isCorrect: false,
        explanation:
          "HELLP typically occurs later in pregnancy and shows different ultrasound findings.",
      },
      {
        id: "d",
        text: "Preeclampsia with liver ischemia",
        isCorrect: false,
        explanation:
          "Preeclampsia may accompany these findings but doesn't cause gallbladder findings.",
      },
    ],
    explanation:
      "Pregnancy and gallbladder disease: (1) Increased incidence of cholecystitis and cholangitis in pregnancy, (2) Mechanisms: increased bile cholesterol from estrogen, reduced contractility from progesterone, bile stasis, (3) Acalculous cholecystitis can occur without stones, (4) Diagnostic accuracy of ultrasound maintained in pregnancy (no radiation). Ultrasound findings: thickened wall (>4 mm in pregnancy vs >3 mm non-pregnant), bile sludge, gallstones, pericholecystic fluid. Management: conservative initially (antibiotics, NPO), surgery if severe or perforation risk. Cholecystectomy can be performed safely in second trimester if necessary.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-02-TOP-020",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 54", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 70-year-old male with hematuria undergoes cystoscopy showing bladder tumor. CT with IV contrast shows focal bladder wall thickening (5 mm) without extension beyond muscularis. What is the T stage?",
    clinicalVignette:
      "A 70-year-old male with bladder cancer showing focal wall thickening on imaging.",
    options: [
      {
        id: "a",
        text: "T1: tumor invades lamina propria, not muscularis",
        isCorrect: false,
        explanation:
          "T1 would spare muscularis but CT cannot differentiate.",
      },
      {
        id: "b",
        text: "T2: tumor invades muscularis propria",
        isCorrect: true,
        explanation:
          "Wall thickening without extension beyond muscularis indicates T2. CT shows focal wall thickening (>5 mm abnormal). Staging: Ta = mucosa, T1 = lamina propria, T2 = muscularis, T3 = perivesical fat, T4 = adjacent structures.",
      },
      {
        id: "c",
        text: "Ta: tumor limited to mucosa",
        isCorrect: false,
        explanation:
          "Ta would be superficial; this involves deeper layers.",
      },
      {
        id: "d",
        text: "T3: tumor extends into perivesical fat",
        isCorrect: false,
        explanation:
          "T3 would show extension beyond bladder wall.",
      },
    ],
    explanation:
      "Bladder cancer TNM staging: (1) Ta: non-muscle-invasive (mucosa only), (2) T1: non-muscle-invasive (lamina propria), (3) T2: muscle-invasive (muscularis), (4) T3: extends beyond muscularis into perivesical fat, (5) T4: invades adjacent structures. CT imaging limitations: cannot reliably differentiate Ta/T1 from T2 (both show thickening). Cystoscopy/TURBT determines depth. Wall thickening >5 mm suggests at least T1-T2. Management: non-muscle-invasive (Ta/T1): TURBT + intravesical chemotherapy/BCG. Muscle-invasive (T2+): radical cystectomy or trimodal therapy (TURBT + chemotherapy + radiation). Prognosis: better for non-muscle-invasive, worse for T3-T4.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-03-TOP-021",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 70", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male undergoes ultrasound of transplanted kidney for graft dysfunction. Resistive index (RI) is measured at 0.85 (normal <0.7). What does elevated RI suggest?",
    clinicalVignette:
      "A 55-year-old male with renal transplant dysfunction showing elevated resistive index on Doppler.",
    options: [
      {
        id: "a",
        text: "Increased vascular resistance suggesting acute rejection or other injury",
        isCorrect: true,
        explanation:
          "Resistive index (RI) = (peak systolic velocity - end diastolic velocity) / peak systolic velocity. Elevated RI (>0.8) suggests increased vascular resistance from: (1) acute rejection, (2) acute tubular necrosis (ATN), (3) chronic rejection, (4) pyelonephritis. RI correlates with degree of injury and graft dysfunction.",
      },
      {
        id: "b",
        text: "Normal vascular perfusion indicating no rejection",
        isCorrect: false,
        explanation:
          "RI 0.85 is elevated; normal <0.7.",
      },
      {
        id: "c",
        text: "Vascular steal from transplant artery to vein",
        isCorrect: false,
        explanation:
          "Steal syndrome shows other Doppler findings.",
      },
      {
        id: "d",
        text: "Chronic kidney disease in native kidneys",
        isCorrect: false,
        explanation:
          "Measurement is for transplanted kidney.",
      },
    ],
    explanation:
      "Doppler ultrasound assessment of renal transplant: RI measures vascular resistance and graft function. Calculation: RI = (PSV - EDV) / PSV where PSV = peak systolic velocity, EDV = end diastolic velocity. Normal RI <0.70. Elevated RI (>0.80) associated with: acute rejection (T cell infiltration increases resistance), ATN (endothelial swelling from ischemia-reperfusion), chronic rejection (fibrosis increases resistance), pyelonephritis (infection increases resistance). RI useful but not specific for diagnosis; clinical correlation needed. Biopsy definitive for rejection. Management: based on etiology (increased immunosuppression for rejection, supportive care for ATN). Early recognition important to preserve graft function.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-02-TOP-022",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 68", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male with abdominal pain has CT showing fat stranding in the mesentery adjacent to inflamed terminal ileum. What is the diagnosis?",
    clinicalVignette:
      "A 50-year-old male with terminal ileal inflammation and mesenteric fat stranding.",
    options: [
      {
        id: "a",
        text: "Crohn's disease with mesenteric inflammation",
        isCorrect: true,
        explanation:
          "Crohn's disease shows: (1) wall thickening of involved bowel, (2) mesenteric fat stranding (creeping fat wrapping around bowel), (3) mesenteric lymphadenopathy, (4) skip lesions (discontinuous involvement). Terminal ileum most common site. Fat stranding indicates acute inflammation.",
      },
      {
        id: "b",
        text: "Ulcerative colitis with continuous inflammation",
        isCorrect: false,
        explanation:
          "Ulcerative colitis shows continuous involvement, not skip lesions.",
      },
      {
        id: "c",
        text: "Appendicitis with periappendiceal inflammation",
        isCorrect: false,
        explanation:
          "Appendicitis would show inflamed appendix, not terminal ileal involvement.",
      },
      {
        id: "d",
        text: "Diverticulitis with diverticular disease",
        isCorrect: false,
        explanation:
          "Diverticulitis affects different segment with different imaging appearance.",
      },
    ],
    explanation:
      "Crohn's disease imaging findings: (1) Wall thickening (>3 mm suggests inflammation), (2) Mesenteric fat stranding (fat density changes from inflammation), (3) Creeping fat (mesenteric fat wrapping around involved bowel), (4) Mesenteric lymphadenopathy (nodes >5 mm short axis), (5) Skip lesions (areas of inflammation separated by normal bowel). Terminal ileum most commonly affected (60%), but can involve any part of GI tract. Complications: strictures (fibrosis), fistulas, abscesses. Differential: ulcerative colitis (only colon, continuous, no skip lesions), infectious enteritis (lack of creeping fat, acute presentation), Behçet's disease (rare).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-03-TOP-023",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 47", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old male with trauma has CT showing extraluminal air in the left paracolic gutter and streaky ground-glass opacification in the left hemidiaphragm on coronal images. What is the diagnosis?",
    clinicalVignette:
      "A 35-year-old male with trauma showing pneumoperitoneum and diaphragmatic injury.",
    options: [
      {
        id: "a",
        text: "Diaphragmatic rupture from blunt trauma",
        isCorrect: true,
        explanation:
          "Diaphragmatic rupture from blunt trauma allows abdominal contents to herniate into thorax. CT findings: (1) extraluminal air (pneumoperitoneum), (2) discontinuity or thickening of diaphragm, (3) herniated organs (bowel, spleen, liver), (4) ground-glass opacification from injured diaphragm or organ herniation. Left side more commonly injured (70%) than right.",
      },
      {
        id: "b",
        text: "Tension pneumothorax requiring chest tube",
        isCorrect: false,
        explanation:
          "Pneumothorax affects lung fields, not diaphragm.",
      },
      {
        id: "c",
        text: "Perforated viscus with contained perforation",
        isCorrect: false,
        explanation:
          "Perforation would show different findings.",
      },
      {
        id: "d",
        text: "Liver contusion with hemoperitoneum",
        isCorrect: false,
        explanation:
          "Contusion would not show air or diaphragmatic findings.",
      },
    ],
    explanation:
      "Diaphragmatic injury from blunt trauma: occurs in ~0.8% of blunt trauma patients, but may be underdiagnosed. Mechanisms: high-energy trauma causing sudden increase in intra-abdominal pressure. Left-sided injuries (70%) more common due to protected right side by liver. Delayed presentation: years after injury, contents slowly herniate causing bowel obstruction. CT findings: (1) diaphragmatic discontinuity or thickening, (2) herniated abdominal organs into thorax, (3) extraluminal air, (4) mediastinal shift. Coronal/sagittal imaging helpful. Treatment: surgical repair (left side via laparoscopy/thoracoscopy, right side more complex). Missed diaphragmatic injury can lead to delayed complications.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-03-TOP-024",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 18", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old male with gastric cancer has endoscopic ultrasound (EUS) showing tumor invading through the muscularis propria into the submucosa. What is the T stage for preoperative staging?",
    clinicalVignette:
      "A 60-year-old male with gastric cancer undergoing EUS-based T staging.",
    options: [
      {
        id: "a",
        text: "T1: tumor invades mucosa or submucosa",
        isCorrect: true,
        explanation:
          "T1 gastric cancer: mucosa-confined (T1a) or invading submucosa (T1b). EUS can differentiate layers. This patient's tumor invades submucosa = T1b.",
      },
      {
        id: "b",
        text: "T2: tumor invades muscularis propria",
        isCorrect: false,
        explanation:
          "Tumor invades through muscularis into submucosa suggests T1 (early cancer).",
      },
      {
        id: "c",
        text: "T3: tumor invades through serosa",
        isCorrect: false,
        explanation:
          "T3 would involve deeper layers.",
      },
      {
        id: "d",
        text: "T4a: tumor invades peritoneum",
        isCorrect: false,
        explanation:
          "T4a represents advanced local invasion.",
      },
    ],
    explanation:
      "Gastric cancer TNM staging: (1) T1: mucosa (T1a) or submucosa (T1b), (2) T2: muscularis propria, (3) T3: through serosa (penetrating into perigastric tissues), (4) T4a: invades peritoneum, (5) T4b: invades adjacent structures. EUS is most accurate imaging for T staging (accuracy ~90%), allowing visualization of 5 ultrasonic layers of gastric wall. Early gastric cancer (EGC): T1 regardless of nodal status, better prognosis, can be treated with endoscopic resection if well/moderately differentiated and limited depth. Advanced gastric cancer (T2+): requires surgical resection (gastrectomy with lymphadenectomy). This patient with T1b early gastric cancer may be candidate for endoscopic therapy or surgery depending on other factors.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-02-TOP-025",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 45", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 40-year-old female with acute right upper quadrant pain and fever has ultrasound showing dilated common bile duct (8 mm) with a 6 mm stone at the ampulla, and thickened gallbladder wall. What is the primary diagnosis and immediate management?",
    clinicalVignette:
      "A 40-year-old female with acute cholangitis from choledocholithiasis.",
    options: [
      {
        id: "a",
        text: "Acute cholangitis from obstructing choledocholithiasis; requires ERCP with sphincterotomy and stone extraction",
        isCorrect: true,
        explanation:
          "Acute cholangitis presents with: (1) fever, (2) RUQ pain, (3) jaundice (Charcot's triad). Ultrasound shows dilated CBD (>6 mm abnormal), stone at ampulla obstructing bile flow. ERCP is gold standard treatment: (1) removes stone, (2) relieves obstruction, (3) reduces infection risk.",
      },
      {
        id: "b",
        text: "Acute cholecystitis requiring urgent cholecystectomy",
        isCorrect: false,
        explanation:
          "Cholecystitis treated with cholecystectomy; cholangitis needs ERCP first.",
      },
      {
        id: "c",
        text: "Choledochal cyst requiring surgical repair",
        isCorrect: false,
        explanation:
          "Cyst would show different imaging pattern.",
      },
      {
        id: "d",
        text: "Biliary cirrhosis from chronic obstruction",
        isCorrect: false,
        explanation:
          "Acute presentation rules out chronic cirrhosis.",
      },
    ],
    explanation:
      "Acute cholangitis is bile duct infection from obstruction. Most common cause: choledocholithiasis (50-70%). Other causes: strictures, malignancy, parasites. Pathophysiology: obstruction increases biliary pressure → transmucosal bacteria reflux → systemic infection. Charcot's triad: fever, RUQ pain, jaundice (70% present with all three). Complications: sepsis, organ failure, death if untreated. Imaging: dilated CBD, stone identification, signs of sepsis. Management: (1) Antibiotics (IV broad-spectrum), (2) Fluid resuscitation, (3) ERCP with sphincterotomy and stone extraction (gold standard, success >90%), (4) Follow-up cholecystectomy if not done. Timing: urgent ERCP within 24 hours of diagnosis (better outcomes). ERCP success decreases and risk increases with delay.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-02-TOP-026",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 54", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male with history of smoking and chronic hemoptysis has high-resolution CT showing traction bronchiectasis in the lung bases and irregular parenchymal opacities. What is the most likely diagnosis?",
    clinicalVignette:
      "A 55-year-old male smoker with hemoptysis and characteristic HRCT findings.",
    options: [
      {
        id: "a",
        text: "Usual interstitial pneumonia (UIP) pattern indicating idiopathic pulmonary fibrosis",
        isCorrect: true,
        explanation:
          "UIP pattern shows: (1) traction bronchiectasis (airway dilated by fibrosis), (2) irregular opacities (fibrosis), (3) basilar/peripheral predominance. In appropriate clinical setting (smoking, chronic hemoptysis), highly suggestive of IPF.",
      },
      {
        id: "b",
        text: "Non-specific interstitial pneumonia (NSIP) with better prognosis",
        isCorrect: false,
        explanation:
          "NSIP shows different pattern (uniform involvement, less traction bronchiectasis).",
      },
      {
        id: "c",
        text: "Hypersensitivity pneumonitis from environmental exposure",
        isCorrect: false,
        explanation:
          "HP shows different distribution and features.",
      },
      {
        id: "d",
        text: "Pneumoconiosis from occupational dust exposure",
        isCorrect: false,
        explanation:
          "Pneumoconiosis shows different pattern.",
      },
    ],
    explanation:
      "Idiopathic pulmonary fibrosis (IPF) is progressive disease of unknown cause causing pulmonary fibrosis. Risk factors: smoking, age >50, male predominance. HRCT diagnosis of UIP pattern: (1) reticular opacities (fibrosis), (2) traction bronchiectasis (airway dilated by surrounding fibrosis), (3) honeycombing (large cystic spaces), (4) basilar/peripheral predominance, (5) lack of features atypical for UIP. UIP pattern diagnostic of IPF without biopsy if clinical context appropriate. Prognosis: progressive, median survival 3-5 years. Hemoptysis from bronchiectasia or acute exacerbation. Treatment: antifibrosics (pirfenidone, nintedanib) slow progression. Lung transplant only definitive cure.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-01-TOP-027",
    textbookRefs: [
      { book: "Felson's Chest Radiology", chapter: "Ch 10", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male with hematuria undergoes CT urography showing hydronephrosis with dilated proximal ureter that abruptly terminates. No stone or mass visible. What is the diagnosis?",
    clinicalVignette:
      "A 50-year-old male with unilateral hydronephrosis and ureteral dilation without obvious obstruction.",
    options: [
      {
        id: "a",
        text: "Ureteropelvic junction obstruction from stricture or valvular obstruction",
        isCorrect: true,
        explanation:
          "UPJ obstruction: anatomical narrowing at ureteropelvic junction causing obstruction and hydronephrosis. CT shows dilated collecting system and proximal ureter that abruptly narrows at UPJ. No mass or stone visible.",
      },
      {
        id: "b",
        text: "Retroperitoneal fibrosis compressing ureter",
        isCorrect: false,
        explanation:
          "Retroperitoneal fibrosis would show gradual narrowing, not abrupt.",
      },
      {
        id: "c",
        text: "Vesicoureteral reflux from incompetent valve",
        isCorrect: false,
        explanation:
          "VUR causes lower ureteral dilation, not UPJ obstruction pattern.",
      },
      {
        id: "d",
        text: "Megaureter from dysmotility",
        isCorrect: false,
        explanation:
          "Megaureter shows diffuse dilation, not abrupt narrowing at UPJ.",
      },
    ],
    explanation:
      "Ureteropelvic junction (UPJ) obstruction is narrowing at junction between pelvis and ureter. Types: congenital (most common), acquired (stricture, stone, tumor, fibrosis). Congenital UPJ from abnormal muscle development or crossing vessel. Imaging findings: hydronephrosis (dilated collecting system), dilated proximal ureter, abrupt narrowing at UPJ, preserved renal function initially. Hematuria from obstruction or infection. Complications: infection, stone formation, renal failure. Management: depends on symptoms and function; asymptomatic may observe, symptomatic or declining function warrant Anderson-Hynes pyeloplasty (gold standard, high success >95%).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-03-TOP-028",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 70", edition: "20th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 65-year-old male with atrial fibrillation has CT pulmonary angiography showing a wedge-shaped peripheral pulmonary opacity with the base at pleural surface. What is this finding called and what is the diagnosis?",
    clinicalVignette:
      "A 65-year-old male with AFib presenting with acute dyspnea and CTA findings.",
    options: [
      {
        id: "a",
        text: "Hampton's hump indicating pulmonary infarction from pulmonary embolism",
        isCorrect: true,
        explanation:
          "Hampton's hump is wedge-shaped opacity at pleura from PE causing pulmonary infarction. Occurs in ~10% of PEs when there is: (1) baseline cardiopulmonary disease, (2) distal occlusion (small vessel), (3) intact bronchial arterial flow reduced. Right AFib with risk of embolism; PE likely diagnosis.",
      },
      {
        id: "b",
        text: "Pulmonary consolidation from pneumonia",
        isCorrect: false,
        explanation:
          "Pneumonia consolidation has different appearance.",
      },
      {
        id: "c",
        text: "Atelectasis from airway obstruction",
        isCorrect: false,
        explanation:
          "Atelectasis has different distribution.",
      },
      {
        id: "d",
        text: "Pleural effusion with dependent atelectasis",
        isCorrect: false,
        explanation:
          "Effusion appears different on imaging.",
      },
    ],
    explanation:
      "Pulmonary embolism imaging: CT pulmonary angiography (CTPA) shows thrombus in pulmonary arteries. Hampton's hump is specific but insensitive finding (occurs in ~10% PEs) from pulmonary infarction. PE complications: infarction (10-15%), hemoptysis (rare), RV dysfunction, hemodynamic collapse. Risk factors: AFib (cardioemboli), VTE risk factors (immobility, surgery, hypercoagulable). Diagnosis: clinical scoring (WELLS, Geneva) combined with CTPA. Management: anticoagulation (DOAC, warfarin, heparin) for most. Thrombolysis or embolectomy for massive PE with hemodynamic instability. Massive PE mortality ~30%; submassive ~5%; non-massive ~1%.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-01-TOP-029",
    textbookRefs: [
      { book: "Felson's Chest Radiology", chapter: "Ch 13", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old female with cirrhosis has routine abdominal ultrasound showing a nodule in the cirrhotic liver that measures 12 mm in size. No vascularity on Doppler. What is the imaging diagnosis?",
    clinicalVignette:
      "A 45-year-old female with cirrhosis and small hepatic nodule on ultrasound.",
    options: [
      {
        id: "a",
        text: "Cirrhotic nodule without imaging features of HCC; follow-up imaging in 3-4 months",
        isCorrect: true,
        explanation:
          "In cirrhotic liver, nodules <10 mm benign; 10-20 mm require follow-up (20% malignancy risk); >20 mm with imaging features diagnostic for HCC. This 12 mm nodule with no vascularity requires follow-up ultrasound in 3-4 months. If stable/regresses: benign. If grows or develops vascularity: warrants further workup (CT/MRI with contrast).",
      },
      {
        id: "b",
        text: "Hepatocellular carcinoma; requires immediate resection",
        isCorrect: false,
        explanation:
          "Small nodule without vascularity not diagnostic of HCC.",
      },
      {
        id: "c",
        text: "Hepatic hemangioma; benign, no follow-up needed",
        isCorrect: false,
        explanation:
          "Hemangioma would show peripheral enhancement on contrast, not on Doppler.",
      },
      {
        id: "d",
        text: "Hepatic adenoma; requires surgical resection",
        isCorrect: false,
        explanation:
          "Adenoma unlikely in cirrhotic liver; different location preference.",
      },
    ],
    explanation:
      "HCC surveillance in cirrhosis: (1) Nodules <10 mm: benign (0-1% malignancy), ultrasound follow-up q3-4 months, (2) Nodules 10-20 mm: intermediate risk (20% malignancy), follow-up ultrasound q2-3 months, consider CT/MRI if growth, (3) Nodules >20 mm: high risk (~70% malignancy), CT/MRI with contrast for confirmation. Diagnostic criteria for HCC in cirrhosis: nodule >10 mm with arterial enhancement + washout on portal venous/delayed phase. This 12 mm nodule with no vascularity requires surveillance; not yet diagnostic of HCC. HCC risk factors: cirrhosis (any etiology), HBV/HCV, male, age >40. Prognosis: depends on size, number, and stage at diagnosis.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "RD",
    topicCode: "RD-MOD-02-TOP-030",
    textbookRefs: [
      { book: "Sabiston Textbook of Surgery", chapter: "Ch 57", edition: "20th" },
    ],
  },
];
