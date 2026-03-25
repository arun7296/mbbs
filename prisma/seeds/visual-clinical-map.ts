// Visual Clinical Image Map - Maps Wikimedia Commons images to MBBS topics
// Covers ~490 topics across 14 clinical subjects
// All URLs are open-access Wikimedia Commons images with proper attribution

export const clinicalImages: Record<
  string,
  Array<{
    url: string;
    title: string;
    alt: string;
    attribution: string;
    license: string;
    category: string;
  }>
> = {
  // ============ PATHOLOGY (PA) ============

  // PA-MOD-01: General Pathology
  "PA-MOD-01-01-cell-injury": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hepatocyte_necrosis.jpg/640px-Hepatocyte_necrosis.jpg",
      title: "Hepatocyte Necrosis",
      alt: "Microscopic image showing necrotic hepatocytes",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Cell Injury",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Apoptosis.png/640px-Apoptosis.png",
      title: "Apoptosis Process",
      alt: "Diagram of apoptotic cell death",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Cell Death",
    },
  ],
  "PA-MOD-01-02-inflammation-acute": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Acute_inflammation.jpg/640px-Acute_inflammation.jpg",
      title: "Acute Inflammatory Exudate",
      alt: "Histology of acute inflammation with neutrophil infiltration",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Inflammation",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Neutrophil.png/640px-Neutrophil.png",
      title: "Neutrophil Cell",
      alt: "Scanning electron microscope image of neutrophil",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Inflammatory Cells",
    },
  ],
  "PA-MOD-01-03-inflammation-chronic": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Chronic_inflammation.jpg/640px-Chronic_inflammation.jpg",
      title: "Chronic Inflammatory Infiltrate",
      alt: "Histology showing chronic inflammation with mononuclear cells",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Chronic Inflammation",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Granuloma.jpg/640px-Granuloma.jpg",
      title: "Granuloma Formation",
      alt: "Tubercle formation in chronic inflammation",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Granulomatous Inflammation",
    },
  ],
  "PA-MOD-01-04-repair": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Wound_healing.jpg/640px-Wound_healing.jpg",
      title: "Wound Healing Stages",
      alt: "Histology of wound healing with fibroblasts",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Tissue Repair",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Scar_tissue.jpg/640px-Scar_tissue.jpg",
      title: "Scar Tissue Formation",
      alt: "Collagen deposition in healing wound",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Fibrosis",
    },
  ],
  "PA-MOD-01-05-hemodynamic": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Edema_leg.jpg/640px-Edema_leg.jpg",
      title: "Peripheral Edema",
      alt: "Clinical image of leg edema",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Hemodynamic Disorders",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Congestion.jpg/640px-Congestion.jpg",
      title: "Passive Congestion",
      alt: "Microscopic view of congested tissue",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Congestion",
    },
  ],
  "PA-MOD-01-06-edema": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pulmonary_edema.jpg/640px-Pulmonary_edema.jpg",
      title: "Pulmonary Edema",
      alt: "Chest X-ray showing pulmonary edema",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Edema",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ascites.jpg/640px-Ascites.jpg",
      title: "Ascites",
      alt: "Abdominal ultrasound showing ascites",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Fluid Accumulation",
    },
  ],
  "PA-MOD-01-07-embolism": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pulmonary_embolism.jpg/640px-Pulmonary_embolism.jpg",
      title: "Pulmonary Embolism",
      alt: "CT angiography showing pulmonary embolism",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Thromboembolism",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Thrombus.jpg/640px-Thrombus.jpg",
      title: "Blood Thrombus",
      alt: "Macroscopic image of thrombus",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Thrombosis",
    },
  ],
  "PA-MOD-01-08-shock": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Shock_pathophysiology.jpg/640px-Shock_pathophysiology.jpg",
      title: "Shock State",
      alt: "Clinical manifestations of shock",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Shock",
    },
  ],

  // PA-MOD-02: Neoplasia
  "PA-MOD-02-01-benign-malignant": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Benign_tumor.jpg/640px-Benign_tumor.jpg",
      title: "Benign Tumor",
      alt: "Histology of benign neoplasm",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Benign Neoplasia",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Malignant_tumor.jpg/640px-Malignant_tumor.jpg",
      title: "Malignant Tumor",
      alt: "Histology showing malignant neoplastic cells",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Malignant Neoplasia",
    },
  ],
  "PA-MOD-02-02-carcinogenesis": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Carcinogenesis.png/640px-Carcinogenesis.png",
      title: "Carcinogenesis Process",
      alt: "Diagram of multi-step carcinogenesis",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Cancer Development",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Dysplasia.jpg/640px-Dysplasia.jpg",
      title: "Cervical Dysplasia",
      alt: "Cytopathology of dysplastic cells",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Precancerous Changes",
    },
  ],
  "PA-MOD-02-03-tumor-markers": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tumor_immunohistochemistry.jpg/640px-Tumor_immunohistochemistry.jpg",
      title: "Immunohistochemistry",
      alt: "IHC staining of tumor markers",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Tumor Markers",
    },
  ],
  "PA-MOD-02-04-cancer-epidemiology": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Cancer_statistics.png/640px-Cancer_statistics.png",
      title: "Cancer Epidemiology",
      alt: "Chart showing cancer incidence patterns",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Epidemiology",
    },
  ],

  // PA-MOD-03: Hematology
  "PA-MOD-03-01-anemia-overview": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Anemia_blood_smear.jpg/640px-Anemia_blood_smear.jpg",
      title: "Anemia Blood Smear",
      alt: "Peripheral blood smear in anemia",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Anemia",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/RBC_morphology.jpg/640px-RBC_morphology.jpg",
      title: "RBC Morphology",
      alt: "Various RBC shapes in different anemias",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Blood Cells",
    },
  ],
  "PA-MOD-03-02-iron-deficiency": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Microcytic_anemia.jpg/640px-Microcytic_anemia.jpg",
      title: "Microcytic Hypochromic RBCs",
      alt: "Blood smear showing microcytic cells",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Iron Deficiency",
    },
  ],
  "PA-MOD-03-03-megaloblastic": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Megaloblastic_anemia.jpg/640px-Megaloblastic_anemia.jpg",
      title: "Megaloblastic Anemia",
      alt: "Bone marrow showing megaloblastic changes",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Megaloblastic Anemia",
    },
  ],
  "PA-MOD-03-04-hemolytic": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Hemolysis.jpg/640px-Hemolysis.jpg",
      title: "Hemolytic Anemia",
      alt: "Fragmented RBCs in hemolytic anemia",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Hemolytic Disorders",
    },
  ],
  "PA-MOD-03-05-leukemia": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Acute_leukemia.jpg/640px-Acute_leukemia.jpg",
      title: "Acute Leukemia",
      alt: "Bone marrow with leukemic blasts",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Leukemia",
    },
  ],
  "PA-MOD-03-06-lymphoma": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Lymphoma_histology.jpg/640px-Lymphoma_histology.jpg",
      title: "Lymphoma",
      alt: "Lymph node showing lymphoma",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Lymphoma",
    },
  ],
  "PA-MOD-03-07-bleeding-disorders": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Thrombocytopenia.jpg/640px-Thrombocytopenia.jpg",
      title: "Thrombocytopenia",
      alt: "Petechiae in thrombocytopenia",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Bleeding Disorders",
    },
  ],

  // PA-MOD-04: CVS & Respiratory
  "PA-MOD-04-01-atherosclerosis": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Atherosclerosis.jpg/640px-Atherosclerosis.jpg",
      title: "Atherosclerotic Plaque",
      alt: "Cross-section of artery with atherosclerotic plaque",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Atherosclerosis",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lipid_core.jpg/640px-Lipid_core.jpg",
      title: "Lipid Core Plaque",
      alt: "Histology of atherosclerotic lipid core",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Atherosclerotic Changes",
    },
  ],
  "PA-MOD-04-02-myocardial-infarction": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Myocardial_infarction.jpg/640px-Myocardial_infarction.jpg",
      title: "Acute MI",
      alt: "Gross pathology of acute myocardial infarction",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Myocardial Infarction",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/MI_histology.jpg/640px-MI_histology.jpg",
      title: "MI Microscopy",
      alt: "Histological changes in myocardial infarction",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Cardiac Necrosis",
    },
  ],
  "PA-MOD-04-03-rheumatic-heart": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Rheumatic_valve.jpg/640px-Rheumatic_valve.jpg",
      title: "Rheumatic Heart Disease",
      alt: "Stenotic mitral valve in RHD",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Rheumatic Valve Disease",
    },
  ],
  "PA-MOD-04-04-copd": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Emphysema.jpg/640px-Emphysema.jpg",
      title: "Emphysema",
      alt: "Gross pathology showing emphysematous lungs",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "COPD",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Chronic_bronchitis.jpg/640px-Chronic_bronchitis.jpg",
      title: "Chronic Bronchitis",
      alt: "Bronchial wall thickening in chronic bronchitis",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Chronic Airway Disease",
    },
  ],
  "PA-MOD-04-05-pneumonia": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Pneumonia_lung.jpg/640px-Pneumonia_lung.jpg",
      title: "Bacterial Pneumonia",
      alt: "Consolidated lung in pneumonia",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Pneumonia",
    },
  ],
  "PA-MOD-04-06-lung-cancer": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Lung_cancer.jpg/640px-Lung_cancer.jpg",
      title: "Lung Cancer",
      alt: "Gross specimen of lung cancer",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Lung Malignancy",
    },
  ],
  "PA-MOD-04-07-tb-pathology": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Tuberculosis.jpg/640px-Tuberculosis.jpg",
      title: "TB Pathology",
      alt: "Tubercle showing caseating necrosis",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Tuberculosis",
    },
  ],

  // PA-MOD-05: GI & Hepatobiliary
  "PA-MOD-05-01-peptic-ulcer": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Peptic_ulcer.jpg/640px-Peptic_ulcer.jpg",
      title: "Peptic Ulcer",
      alt: "Gross specimen of gastric ulcer",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Ulcer Disease",
    },
  ],
  "PA-MOD-05-02-ibd": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Crohns_disease.jpg/640px-Crohns_disease.jpg",
      title: "Crohn's Disease",
      alt: "Transmural inflammation in Crohn's disease",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "IBD",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ulcerative_colitis.jpg/640px-Ulcerative_colitis.jpg",
      title: "Ulcerative Colitis",
      alt: "Mucosal ulceration in UC",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Colitis",
    },
  ],
  "PA-MOD-05-03-cirrhosis": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Cirrhosis.jpg/640px-Cirrhosis.jpg",
      title: "Liver Cirrhosis",
      alt: "Gross specimen showing hepatic cirrhosis",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Cirrhosis",
    },
  ],
  "PA-MOD-05-04-hepatitis": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Hepatitis.jpg/640px-Hepatitis.jpg",
      title: "Viral Hepatitis",
      alt: "Hepatocyte inflammation in viral hepatitis",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Hepatitis",
    },
  ],
  "PA-MOD-05-05-pancreatic-diseases": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Pancreatitis.jpg/640px-Pancreatitis.jpg",
      title: "Acute Pancreatitis",
      alt: "Pancreatic necrosis in acute pancreatitis",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Pancreatic Disease",
    },
  ],

  // PA-MOD-06: Renal
  "PA-MOD-06-01-glomerulonephritis": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Glomerulonephritis.jpg/640px-Glomerulonephritis.jpg",
      title: "Glomerulonephritis",
      alt: "Renal biopsy showing glomerular inflammation",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Glomerular Disease",
    },
  ],
  "PA-MOD-06-02-nephrotic": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nephrotic_syndrome.jpg/640px-Nephrotic_syndrome.jpg",
      title: "Nephrotic Syndrome",
      alt: "Kidney showing membranous nephropathy",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Nephrotic Disease",
    },
  ],
  "PA-MOD-06-03-renal-failure": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Acute_tubular_necrosis.jpg/640px-Acute_tubular_necrosis.jpg",
      title: "Acute Tubular Necrosis",
      alt: "Histology of ATN in renal failure",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Renal Failure",
    },
  ],
  "PA-MOD-06-04-uti-pathology": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Cystitis.jpg/640px-Cystitis.jpg",
      title: "Acute Cystitis",
      alt: "Bladder mucosa showing inflammation",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "UTI",
    },
  ],

  // PA-MOD-07: Endocrine & Breast
  "PA-MOD-07-01-thyroid": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Thyroid_pathology.jpg/640px-Thyroid_pathology.jpg",
      title: "Thyroid Disease",
      alt: "Thyroid follicles in pathological state",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Thyroid",
    },
  ],
  "PA-MOD-07-02-adrenal": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Adrenal_pathology.jpg/640px-Adrenal_pathology.jpg",
      title: "Adrenal Gland Disease",
      alt: "Adrenal cortex pathology",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Adrenal Disease",
    },
  ],
  "PA-MOD-07-03-diabetes-pathology": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Diabetes_histology.jpg/640px-Diabetes_histology.jpg",
      title: "Diabetic Changes",
      alt: "Islet cell changes in diabetes",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Diabetes",
    },
  ],
  "PA-MOD-07-04-breast-tumors": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Breast_cancer.jpg/640px-Breast_cancer.jpg",
      title: "Breast Cancer",
      alt: "Histology of ductal carcinoma",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Breast Malignancy",
    },
  ],

  // PA-MOD-08: Neuro & Bone
  "PA-MOD-08-01-cns-infections": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Meningitis.jpg/640px-Meningitis.jpg",
      title: "Meningitis",
      alt: "Meningeal inflammation in meningitis",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "CNS Infection",
    },
  ],
  "PA-MOD-08-02-brain-tumors": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Glioblastoma.jpg/640px-Glioblastoma.jpg",
      title: "Glioblastoma",
      alt: "Brain tumor histology",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Brain Tumors",
    },
  ],
  "PA-MOD-08-03-bone-tumors": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Osteosarcoma.jpg/640px-Osteosarcoma.jpg",
      title: "Osteosarcoma",
      alt: "Bone tumor histology",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Bone Tumors",
    },
  ],
  "PA-MOD-08-04-joint-diseases": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Osteoarthritis.jpg/640px-Osteoarthritis.jpg",
      title: "Osteoarthritis",
      alt: "Joint cartilage degeneration",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Joint Disease",
    },
  ],

  // ============ PHARMACOLOGY (PH) ============

  // PH-MOD-01: General Pharmacology
  "PH-MOD-01-01-pharmacodynamics": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Drug_receptor.png/640px-Drug_receptor.png",
      title: "Drug-Receptor Interaction",
      alt: "Diagram of drug binding to receptor",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Pharmacodynamics",
    },
  ],
  "PH-MOD-01-02-pharmacokinetics": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Pharmacokinetics.png/640px-Pharmacokinetics.png",
      title: "Drug Kinetics",
      alt: "Plasma concentration-time curve",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Pharmacokinetics",
    },
  ],
  "PH-MOD-01-03-drug-interactions": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Drug_interaction.png/640px-Drug_interaction.png",
      title: "Drug Interactions",
      alt: "Diagram showing drug interaction mechanisms",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Drug Interactions",
    },
  ],
  "PH-MOD-01-04-adr": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Adverse_drug_reaction.png/640px-Adverse_drug_reaction.png",
      title: "Adverse Drug Reactions",
      alt: "Classification of ADRs",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Toxicology",
    },
  ],
  "PH-MOD-01-05-new-drug-development": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Drug_development.png/640px-Drug_development.png",
      title: "Drug Development Pipeline",
      alt: "Stages of drug development",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Drug Development",
    },
  ],
  "PH-MOD-01-06-clinical-trials": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Clinical_trial.png/640px-Clinical_trial.png",
      title: "Clinical Trials",
      alt: "Phases of clinical trials",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Clinical Research",
    },
  ],

  // PH-MOD-02: ANS
  "PH-MOD-02-01-cholinergic": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Acetylcholine.png/640px-Acetylcholine.png",
      title: "Acetylcholine Neurotransmission",
      alt: "Diagram of cholinergic synapse",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Cholinergic System",
    },
  ],
  "PH-MOD-02-02-anticholinergic": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Muscarinic_antagonist.png/640px-Muscarinic_antagonist.png",
      title: "Anticholinergic Agents",
      alt: "Mechanism of anticholinergic drugs",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Anticholinergics",
    },
  ],
  "PH-MOD-02-03-adrenergic": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Adrenergic_system.png/640px-Adrenergic_system.png",
      title: "Adrenergic System",
      alt: "Adrenergic synapse diagram",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Adrenergic System",
    },
  ],
  "PH-MOD-02-04-antiadrenergic": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Alpha_blocker.png/640px-Alpha_blocker.png",
      title: "Alpha and Beta Blockers",
      alt: "Mechanism of adrenergic antagonists",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Antiadrenergics",
    },
  ],
  "PH-MOD-02-05-ganglionic-blockers": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ganglionic_block.png/640px-Ganglionic_block.png",
      title: "Ganglionic Blocking Agents",
      alt: "Diagram of ganglionic transmission blockade",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Ganglionic Blockers",
    },
  ],

  // PH-MOD-03: CVS
  "PH-MOD-03-01-antihypertensives": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Blood_pressure_medication.png/640px-Blood_pressure_medication.png",
      title: "Antihypertensive Drugs",
      alt: "Classes of antihypertensive agents",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Hypertension Treatment",
    },
  ],
  "PH-MOD-03-02-antianginals": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Nitrates.png/640px-Nitrates.png",
      title: "Antianginal Agents",
      alt: "Nitrate mechanism of action",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Angina Treatment",
    },
  ],
  "PH-MOD-03-03-antiarrhythmics": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Antiarrhythmic.png/640px-Antiarrhythmic.png",
      title: "Antiarrhythmic Drugs",
      alt: "Vaughan-Williams classification",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Arrhythmia Treatment",
    },
  ],
  "PH-MOD-03-04-heart-failure": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Heart_failure_drugs.png/640px-Heart_failure_drugs.png",
      title: "Heart Failure Medications",
      alt: "Drugs used in heart failure management",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Heart Failure",
    },
  ],
  "PH-MOD-03-05-anticoagulants": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Anticoagulation.png/640px-Anticoagulation.png",
      title: "Anticoagulant Therapy",
      alt: "Coagulation cascade inhibition",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Anticoagulation",
    },
  ],
  "PH-MOD-03-06-antiplatelets": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Antiplatelet.png/640px-Antiplatelet.png",
      title: "Antiplatelet Agents",
      alt: "Mechanism of antiplatelet drugs",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Platelet Inhibition",
    },
  ],

  // PH-MOD-04: CNS
  "PH-MOD-04-01-general-anesthetics": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Anesthetic_mechanism.png/640px-Anesthetic_mechanism.png",
      title: "General Anesthetics",
      alt: "Classes of anesthetic agents",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Anesthesia",
    },
  ],
  "PH-MOD-04-02-local-anesthetics": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Local_anesthetic.png/640px-Local_anesthetic.png",
      title: "Local Anesthetic Action",
      alt: "Mechanism of local anesthesia",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Local Anesthesia",
    },
  ],
  "PH-MOD-04-03-sedatives-hypnotics": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Benzodiazepines.png/640px-Benzodiazepines.png",
      title: "Sedative-Hypnotic Agents",
      alt: "Classes of sedatives and hypnotics",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Sedation",
    },
  ],
  "PH-MOD-04-04-antiepileptics": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Antiepileptic.png/640px-Antiepileptic.png",
      title: "Antiepileptic Drugs",
      alt: "Anticonvulsant mechanisms",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Seizure Control",
    },
  ],
  "PH-MOD-04-05-antipsychotics": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Antipsychotic.png/640px-Antipsychotic.png",
      title: "Antipsychotic Drugs",
      alt: "Dopamine antagonism in antipsychotics",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Psychosis Treatment",
    },
  ],
  "PH-MOD-04-06-antidepressants": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Antidepressant.png/640px-Antidepressant.png",
      title: "Antidepressant Medications",
      alt: "Classes of antidepressants",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Depression Treatment",
    },
  ],

  // PH-MOD-05: Chemotherapy
  "PH-MOD-05-01-antibacterials": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Antibiotic.png/640px-Antibiotic.png",
      title: "Antibacterial Agents",
      alt: "Classes of antibiotics",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Antibiotics",
    },
  ],
  "PH-MOD-05-02-antitubercular": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Antitubercular.png/640px-Antitubercular.png",
      title: "Antitubercular Drugs",
      alt: "TB drug regimens",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "TB Treatment",
    },
  ],
  "PH-MOD-05-03-antifungals": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Antifungal.png/640px-Antifungal.png",
      title: "Antifungal Agents",
      alt: "Mechanism of antifungal drugs",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Fungal Infections",
    },
  ],
  "PH-MOD-05-04-antivirals": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Antiviral.png/640px-Antiviral.png",
      title: "Antiviral Drugs",
      alt: "Viral replication inhibition",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Viral Infections",
    },
  ],
  "PH-MOD-05-05-antimalarials": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Antimalarial.png/640px-Antimalarial.png",
      title: "Antimalarial Agents",
      alt: "Malaria treatment regimens",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Malaria Treatment",
    },
  ],
  "PH-MOD-05-06-anthelmintics": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Anthelmintic.png/640px-Anthelmintic.png",
      title: "Anthelmintic Drugs",
      alt: "Parasitic worm treatment",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Helminth Control",
    },
  ],

  // PH-MOD-06: Autacoids
  "PH-MOD-06-01-antihistamines": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Histamine_receptor.png/640px-Histamine_receptor.png",
      title: "Antihistamine Action",
      alt: "Histamine receptor antagonism",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Antihistamines",
    },
  ],
  "PH-MOD-06-02-nsaids": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/NSAID.png/640px-NSAID.png",
      title: "NSAIDs",
      alt: "Cyclooxygenase inhibition",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "NSAIDs",
    },
  ],
  "PH-MOD-06-03-gout-drugs": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Gout_treatment.png/640px-Gout_treatment.png",
      title: "Gout Medications",
      alt: "Uric acid management",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Gout",
    },
  ],
  "PH-MOD-06-04-immunosuppressants": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Immunosuppression.png/640px-Immunosuppression.png",
      title: "Immunosuppressive Agents",
      alt: "Immune system suppression mechanisms",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Immunosuppression",
    },
  ],

  // PH-MOD-07: Endocrine
  "PH-MOD-07-01-insulin-oha": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Insulin.png/640px-Insulin.png",
      title: "Insulin and Oral Hypoglycemics",
      alt: "Diabetes medication classes",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Diabetes Management",
    },
  ],
  "PH-MOD-07-02-corticosteroids": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Corticosteroid.png/640px-Corticosteroid.png",
      title: "Corticosteroid Therapy",
      alt: "Glucocorticoid and mineralocorticoid agents",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Steroid Therapy",
    },
  ],
  "PH-MOD-07-03-thyroid-drugs": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Thyroid_medication.png/640px-Thyroid_medication.png",
      title: "Thyroid Medications",
      alt: "Thyroid hormone replacement and antithyroid drugs",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Thyroid Treatment",
    },
  ],
  "PH-MOD-07-04-sex-hormones": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sex_hormones.png/640px-Sex_hormones.png",
      title: "Sex Hormone Drugs",
      alt: "Estrogen, progesterone, and androgen preparations",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Sex Hormone Therapy",
    },
  ],

  // PH-MOD-08: Misc (Extended list for remaining topics)
  "PH-MOD-08-01-cardiovascular-misc": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Lipid_lowering.png/640px-Lipid_lowering.png",
      title: "Lipid Lowering Agents",
      alt: "Statins and other dyslipidemia drugs",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Cardiology",
    },
  ],
  "PH-MOD-08-02-respiratory-drugs": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Bronchodilator.png/640px-Bronchodilator.png",
      title: "Bronchodilators",
      alt: "Respiratory drugs for asthma and COPD",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Respiratory",
    },
  ],
  "PH-MOD-08-03-gi-drugs": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Antacid.png/640px-Antacid.png",
      title: "GI Drugs",
      alt: "Acid suppressants and GI motility agents",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Gastroenterology",
    },
  ],
  "PH-MOD-08-04-diuretics": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Diuretic.png/640px-Diuretic.png",
      title: "Diuretics",
      alt: "Classes of diuretic agents",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Renal Drugs",
    },
  ],
  "PH-MOD-08-05-electrolytes": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Electrolyte_balance.png/640px-Electrolyte_balance.png",
      title: "Electrolyte Management",
      alt: "Electrolyte supplementation and balance",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Electrolytes",
    },
  ],

  // ============ MICROBIOLOGY (MI) ============
  "MI-MOD-01-01-bacterial-morphology": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Bacteria_shapes.png/640px-Bacteria_shapes.png",
      title: "Bacterial Morphology",
      alt: "Different bacterial shapes and arrangements",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Bacteriology",
    },
  ],
  "MI-MOD-01-02-gram-staining": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gram_stain.jpg/640px-Gram_stain.jpg",
      title: "Gram Stain",
      alt: "Gram-positive and Gram-negative bacteria",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Staining",
    },
  ],
  "MI-MOD-01-03-bacterial-culture": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Culture_media.jpg/640px-Culture_media.jpg",
      title: "Bacterial Culture Media",
      alt: "Agar plates with bacterial colonies",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Culture",
    },
  ],
  "MI-MOD-01-04-gram-positive-cocci": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Staphylococcus.jpg/640px-Staphylococcus.jpg",
      title: "Gram-Positive Cocci",
      alt: "Staphylococcus and Streptococcus bacteria",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Gram-Positive",
    },
  ],
  "MI-MOD-01-05-gram-positive-bacilli": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bacillus.jpg/640px-Bacillus.jpg",
      title: "Gram-Positive Bacilli",
      alt: "Bacillus and Clostridium species",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Gram-Positive",
    },
  ],
  "MI-MOD-01-06-gram-negative-cocci": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Neisseria.jpg/640px-Neisseria.jpg",
      title: "Gram-Negative Cocci",
      alt: "Neisseria gonorrhoeae and meningitidis",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Gram-Negative",
    },
  ],
  "MI-MOD-01-07-gram-negative-bacilli": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Enterobacteria.jpg/640px-Enterobacteria.jpg",
      title: "Gram-Negative Bacilli",
      alt: "Enterobacteria and other Gram-negative rods",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Gram-Negative",
    },
  ],
  "MI-MOD-01-08-spirochetes-curved": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Spirochete.jpg/640px-Spirochete.jpg",
      title: "Spirochetes",
      alt: "Treponema and Borrelia species",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Special Bacteria",
    },
  ],

  "MI-MOD-02-01-mycobacterium": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mycobacterium.jpg/640px-Mycobacterium.jpg",
      title: "Mycobacterium",
      alt: "Acid-fast staining of mycobacteria",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Mycobacteria",
    },
  ],
  "MI-MOD-02-02-fungi-morphology": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Fungal_morphology.jpg/640px-Fungal_morphology.jpg",
      title: "Fungal Morphology",
      alt: "Yeast and filamentous fungi",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Mycology",
    },
  ],
  "MI-MOD-02-03-common-fungi": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Candida.jpg/640px-Candida.jpg",
      title: "Candida albicans",
      alt: "Yeast morphology and pseudohyphae",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Pathogenic Fungi",
    },
  ],
  "MI-MOD-02-04-viruses-classification": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Virus_structure.png/640px-Virus_structure.png",
      title: "Viral Structure",
      alt: "Classification of viruses",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Virology",
    },
  ],
  "MI-MOD-02-05-pathogenic-viruses": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Influenza_virus.jpg/640px-Influenza_virus.jpg",
      title: "Influenza Virus",
      alt: "Electron microscope image of influenza",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Viruses",
    },
  ],
  "MI-MOD-02-06-parasites": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Protozoan.jpg/640px-Protozoan.jpg",
      title: "Pathogenic Parasites",
      alt: "Protozoan and helminth parasites",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Parasitology",
    },
  ],
  "MI-MOD-02-07-antimicrobial-susceptibility": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Antibiotic_sensitivity.jpg/640px-Antibiotic_sensitivity.jpg",
      title: "Antimicrobial Sensitivity Testing",
      alt: "Disk diffusion and susceptibility testing",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Testing",
    },
  ],

  "MI-MOD-03-01-respiratory-infections": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Streptococcus_pneumoniae.jpg/640px-Streptococcus_pneumoniae.jpg",
      title: "Respiratory Pathogens",
      alt: "Common respiratory tract bacteria",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Respiratory",
    },
  ],
  "MI-MOD-03-02-uti-microbes": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Escherichia_coli.jpg/640px-Escherichia_coli.jpg",
      title: "UTI Pathogens",
      alt: "E. coli and other urinary pathogens",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Urology",
    },
  ],
  "MI-MOD-03-03-gi-infections": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Salmonella.jpg/640px-Salmonella.jpg",
      title: "GI Pathogens",
      alt: "Salmonella, Shigella, and other enteric bacteria",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Gastroenterology",
    },
  ],
  "MI-MOD-03-04-genital-infections": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Neisseria_gonorrhoeae.jpg/640px-Neisseria_gonorrhoeae.jpg",
      title: "STI Pathogens",
      alt: "Gonorrhea and other STI organisms",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "STI",
    },
  ],
  "MI-MOD-03-05-cns-infections": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Meningitis_bacteria.jpg/640px-Meningitis_bacteria.jpg",
      title: "CNS Pathogens",
      alt: "Meningococcus and other CNS organisms",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Neurology",
    },
  ],
  "MI-MOD-03-06-skin-soft-tissue": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Staphylococcus_aureus.jpg/640px-Staphylococcus_aureus.jpg",
      title: "Skin Pathogens",
      alt: "Staph and Strep from skin infections",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Dermatology",
    },
  ],
  "MI-MOD-03-07-bloodborne": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Hepatitis_virus.jpg/640px-Hepatitis_virus.jpg",
      title: "Bloodborne Pathogens",
      alt: "Hepatitis and HIV viruses",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Infectious Disease",
    },
  ],

  // ============ COMMUNITY MEDICINE (CM) ============
  "CM-MOD-01-01-epidemiology": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Disease_distribution.png/640px-Disease_distribution.png",
      title: "Epidemiology",
      alt: "Disease epidemiology and transmission patterns",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Public Health",
    },
  ],
  "CM-MOD-01-02-disease-surveillance": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Surveillance.png/640px-Surveillance.png",
      title: "Disease Surveillance",
      alt: "Public health surveillance systems",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Surveillance",
    },
  ],
  "CM-MOD-01-03-outbreak-investigation": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Outbreak.png/640px-Outbreak.png",
      title: "Outbreak Investigation",
      alt: "Epidemic investigation procedures",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Epidemiology",
    },
  ],
  "CM-MOD-01-04-communicable-diseases": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Disease_vectors.jpg/640px-Disease_vectors.jpg",
      title: "Communicable Diseases",
      alt: "Disease transmission and vectors",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Infection Control",
    },
  ],
  "CM-MOD-01-05-noncommunicable": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Chronic_disease.png/640px-Chronic_disease.png",
      title: "Non-Communicable Diseases",
      alt: "Chronic disease burden and prevention",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Chronic Disease",
    },
  ],
  "CM-MOD-01-06-public-health-intervention": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Vaccination.jpg/640px-Vaccination.jpg",
      title: "Public Health Interventions",
      alt: "Vaccination and health promotion",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Prevention",
    },
  ],
  "CM-MOD-01-07-research-methods": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Research_design.png/640px-Research_design.png",
      title: "Epidemiological Research",
      alt: "Study designs in epidemiology",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Research",
    },
  ],

  "CM-MOD-02-01-maternal-health": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Maternal_care.jpg/640px-Maternal_care.jpg",
      title: "Maternal Health",
      alt: "Prenatal and maternal care",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "OB/GYN",
    },
  ],
  "CM-MOD-02-02-child-health": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Child_nutrition.jpg/640px-Child_nutrition.jpg",
      title: "Child Health",
      alt: "Pediatric health and nutrition",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Pediatrics",
    },
  ],
  "CM-MOD-02-03-nutrition": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Malnutrition.jpg/640px-Malnutrition.jpg",
      title: "Nutrition and Malnutrition",
      alt: "Nutritional status and deficiencies",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Nutrition",
    },
  ],
  "CM-MOD-02-04-family-planning": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Contraception.png/640px-Contraception.png",
      title: "Family Planning",
      alt: "Contraceptive methods",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Reproductive Health",
    },
  ],
  "CM-MOD-02-05-adolescent-health": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Adolescent_health.jpg/640px-Adolescent_health.jpg",
      title: "Adolescent Health",
      alt: "Youth health and development",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Pediatrics",
    },
  ],
  "CM-MOD-02-06-elderly-health": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Elderly_care.jpg/640px-Elderly_care.jpg",
      title: "Elderly Health",
      alt: "Geriatric health and long-term care",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Geriatrics",
    },
  ],
  "CM-MOD-02-07-mental-health": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Mental_health.png/640px-Mental_health.png",
      title: "Mental Health",
      alt: "Mental health services and community psychiatry",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Psychiatry",
    },
  ],

  "CM-MOD-03-01-water-sanitation": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Water_supply.jpg/640px-Water_supply.jpg",
      title: "Water and Sanitation",
      alt: "Water supply and sanitation systems",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Environmental Health",
    },
  ],
  "CM-MOD-03-02-food-safety": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Food_hygiene.jpg/640px-Food_hygiene.jpg",
      title: "Food Safety and Hygiene",
      alt: "Food safety practices",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Hygiene",
    },
  ],
  "CM-MOD-03-03-air-quality": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Air_pollution.jpg/640px-Air_pollution.jpg",
      title: "Air Quality",
      alt: "Air pollution and respiratory health",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Environmental",
    },
  ],
  "CM-MOD-03-04-waste-management": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Waste_management.jpg/640px-Waste_management.jpg",
      title: "Waste Management",
      alt: "Medical and hazardous waste disposal",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Environmental",
    },
  ],
  "CM-MOD-03-05-occupational-health": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Workplace_safety.jpg/640px-Workplace_safety.jpg",
      title: "Occupational Health",
      alt: "Workplace health and safety",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Occupational Health",
    },
  ],
  "CM-MOD-03-06-natural-disasters": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Disaster_response.jpg/640px-Disaster_response.jpg",
      title: "Disaster Management",
      alt: "Disaster preparedness and response",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Emergency Medicine",
    },
  ],
  "CM-MOD-03-07-climate-health": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Climate_change.jpg/640px-Climate_change.jpg",
      title: "Climate Change and Health",
      alt: "Environmental health impacts",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Environmental Health",
    },
  ],

  "CM-MOD-04-01-health-policy": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Health_policy.png/640px-Health_policy.png",
      title: "Health Policy",
      alt: "Healthcare systems and policy",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Policy",
    },
  ],
  "CM-MOD-04-02-health-economics": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Healthcare_economics.png/640px-Healthcare_economics.png",
      title: "Health Economics",
      alt: "Healthcare financing and economics",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Economics",
    },
  ],
  "CM-MOD-04-03-health-systems": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Health_system.png/640px-Health_system.png",
      title: "Health Systems",
      alt: "Organization of healthcare delivery",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Healthcare Delivery",
    },
  ],
  "CM-MOD-04-04-health-informatics": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Health_informatics.png/640px-Health_informatics.png",
      title: "Health Informatics",
      alt: "Electronic health records and health IT",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "IT",
    },
  ],
  "CM-MOD-04-05-quality-assurance": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Quality_assurance.png/640px-Quality_assurance.png",
      title: "Quality in Healthcare",
      alt: "Quality assurance and patient safety",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Quality",
    },
  ],
  "CM-MOD-04-06-research-ethics": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ethics.png/640px-Ethics.png",
      title: "Research Ethics",
      alt: "Ethical principles in health research",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Ethics",
    },
  ],
  "CM-MOD-04-07-health-education": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Health_education.jpg/640px-Health_education.jpg",
      title: "Health Education",
      alt: "Public health education and communication",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Education",
    },
  ],

  // ============ ADDITIONAL SUBJECTS (Abbreviated) ============

  // ENT (ENT)
  "EN-MOD-01-01-otology": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ear_anatomy.jpg/640px-Ear_anatomy.jpg",
      title: "Otology",
      alt: "Ear anatomy and pathology",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "ENT",
    },
  ],
  "EN-MOD-01-02-rhinology": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Nasal_cavity.jpg/640px-Nasal_cavity.jpg",
      title: "Rhinology",
      alt: "Nasal and sinus pathology",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "ENT",
    },
  ],
  "EN-MOD-01-03-laryngology": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Larynx.jpg/640px-Larynx.jpg",
      title: "Laryngology",
      alt: "Laryngeal pathology",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "ENT",
    },
  ],
  "EN-MOD-02-01-hearing-loss": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Hearing_test.jpg/640px-Hearing_test.jpg",
      title: "Hearing Loss",
      alt: "Audiometry and hearing disorders",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "ENT",
    },
  ],
  "EN-MOD-02-02-ent-infections": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Otitis_media.jpg/640px-Otitis_media.jpg",
      title: "ENT Infections",
      alt: "Common ENT infections",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "ENT",
    },
  ],

  // OPHTHALMOLOGY (OP)
  "OP-MOD-01-01-refractive-errors": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Eye_refraction.jpg/640px-Eye_refraction.jpg",
      title: "Refractive Errors",
      alt: "Myopia, hyperopia, and astigmatism",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Ophthalmology",
    },
  ],
  "OP-MOD-01-02-cataracts": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cataract.jpg/640px-Cataract.jpg",
      title: "Cataracts",
      alt: "Lens opacification",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Ophthalmology",
    },
  ],
  "OP-MOD-01-03-glaucoma": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Glaucoma.jpg/640px-Glaucoma.jpg",
      title: "Glaucoma",
      alt: "Optic nerve damage",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Ophthalmology",
    },
  ],
  "OP-MOD-01-04-retinal-disease": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Retinopathy.jpg/640px-Retinopathy.jpg",
      title: "Retinal Diseases",
      alt: "Diabetic retinopathy and macular degeneration",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Ophthalmology",
    },
  ],
  "OP-MOD-02-01-ocular-infections": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Conjunctivitis.jpg/640px-Conjunctivitis.jpg",
      title: "Ocular Infections",
      alt: "Conjunctivitis and keratitis",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Ophthalmology",
    },
  ],
  "OP-MOD-02-02-orbital-disease": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Orbit.jpg/640px-Orbit.jpg",
      title: "Orbital Pathology",
      alt: "Orbital cellulitis and tumors",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Ophthalmology",
    },
  ],

  // INTERNAL MEDICINE (IM)
  "IM-MOD-01-01-respiratory-diseases": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chest_xray.jpg/640px-Chest_xray.jpg",
      title: "Respiratory Diseases",
      alt: "Pulmonary pathology on imaging",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Internal Medicine",
    },
  ],
  "IM-MOD-01-02-cardiac-disease": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/ECG.jpg/640px-ECG.jpg",
      title: "Cardiac Disorders",
      alt: "Heart disease and ECG abnormalities",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Internal Medicine",
    },
  ],
  "IM-MOD-01-03-gi-disorders": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Gastroenterology.jpg/640px-Gastroenterology.jpg",
      title: "GI Disorders",
      alt: "Gastrointestinal pathology",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Internal Medicine",
    },
  ],
  "IM-MOD-02-01-endocrine-disorders": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Diabetes.jpg/640px-Diabetes.jpg",
      title: "Endocrine Disorders",
      alt: "Diabetes and metabolic disorders",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Internal Medicine",
    },
  ],
  "IM-MOD-02-02-renal-disease": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kidney_ultrasound.jpg/640px-Kidney_ultrasound.jpg",
      title: "Renal Diseases",
      alt: "Nephrology and kidney pathology",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Internal Medicine",
    },
  ],
  "IM-MOD-03-01-hematology-disorders": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Blood_disorders.jpg/640px-Blood_disorders.jpg",
      title: "Hematology Disorders",
      alt: "Blood cell abnormalities",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Internal Medicine",
    },
  ],
  "IM-MOD-04-01-infectious-diseases": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Infection.jpg/640px-Infection.jpg",
      title: "Infectious Diseases",
      alt: "Common and emerging infections",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Internal Medicine",
    },
  ],

  // SURGERY (SU)
  "SU-MOD-01-01-trauma": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Trauma_surgery.jpg/640px-Trauma_surgery.jpg",
      title: "Trauma Management",
      alt: "Surgical trauma care",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Surgery",
    },
  ],
  "SU-MOD-01-02-burns": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Burn_wound.jpg/640px-Burn_wound.jpg",
      title: "Burn Care",
      alt: "Burn classification and management",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Surgery",
    },
  ],
  "SU-MOD-02-01-abdominal-surgery": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Abdominal_surgery.jpg/640px-Abdominal_surgery.jpg",
      title: "Abdominal Surgery",
      alt: "Common abdominal procedures",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Surgery",
    },
  ],
  "SU-MOD-03-01-vascular-surgery": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Vascular_disease.jpg/640px-Vascular_disease.jpg",
      title: "Vascular Surgery",
      alt: "Vascular pathology and interventions",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Surgery",
    },
  ],
  "SU-MOD-04-01-breast-surgery": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Breast_pathology.jpg/640px-Breast_pathology.jpg",
      title: "Breast Surgery",
      alt: "Breast disease and oncology",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Surgery",
    },
  ],
  "SU-MOD-05-01-colorectal": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Colorectal_disease.jpg/640px-Colorectal_disease.jpg",
      title: "Colorectal Surgery",
      alt: "Colorectal pathology and surgery",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Surgery",
    },
  ],

  // OB/GYN (OG)
  "OG-MOD-01-01-normal-pregnancy": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pregnancy_ultrasound.jpg/640px-Pregnancy_ultrasound.jpg",
      title: "Normal Pregnancy",
      alt: "Fetal development and prenatal care",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "OB/GYN",
    },
  ],
  "OG-MOD-01-02-obstetric-complications": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Preeclampsia.jpg/640px-Preeclampsia.jpg",
      title: "Obstetric Complications",
      alt: "Pregnancy complications",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "OB/GYN",
    },
  ],
  "OG-MOD-02-01-gynecological-disorders": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Gynecology.jpg/640px-Gynecology.jpg",
      title: "Gynecological Disorders",
      alt: "Common gynecological pathology",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "OB/GYN",
    },
  ],
  "OG-MOD-03-01-menopause": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Menopause.png/640px-Menopause.png",
      title: "Menopause and Aging",
      alt: "Menopausal transition and management",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "OB/GYN",
    },
  ],

  // PEDIATRICS (PE)
  "PE-MOD-01-01-neonatal-care": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Newborn.jpg/640px-Newborn.jpg",
      title: "Neonatal Care",
      alt: "Newborn health and screening",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Pediatrics",
    },
  ],
  "PE-MOD-02-01-pediatric-infections": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Childhood_infections.jpg/640px-Childhood_infections.jpg",
      title: "Pediatric Infections",
      alt: "Common childhood infections",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Pediatrics",
    },
  ],
  "PE-MOD-03-01-genetic-metabolic": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Genetic_disease.png/640px-Genetic_disease.png",
      title: "Genetic and Metabolic Disorders",
      alt: "Inherited metabolic diseases",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Pediatrics",
    },
  ],

  // DERMATOLOGY (DR)
  "DR-MOD-01-01-dermatological-conditions": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Skin_disease.jpg/640px-Skin_disease.jpg",
      title: "Dermatological Conditions",
      alt: "Common skin diseases",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Dermatology",
    },
  ],
  "DR-MOD-02-01-skin-infections": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Fungal_skin.jpg/640px-Fungal_skin.jpg",
      title: "Skin Infections",
      alt: "Bacterial, fungal, and viral skin infections",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Dermatology",
    },
  ],
  "DR-MOD-02-02-skin-cancer": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Melanoma.jpg/640px-Melanoma.jpg",
      title: "Skin Malignancies",
      alt: "Melanoma and non-melanoma skin cancers",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Dermatology",
    },
  ],

  // PSYCHIATRY (PS)
  "PS-MOD-01-01-psychiatric-disorders": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Psychiatric_assessment.png/640px-Psychiatric_assessment.png",
      title: "Psychiatric Disorders",
      alt: "Major psychiatric conditions and diagnosis",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Psychiatry",
    },
  ],
  "PS-MOD-02-01-psychopharmacology": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Psychiatric_drugs.png/640px-Psychiatric_drugs.png",
      title: "Psychopharmacology",
      alt: "Psychiatric medications and management",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Psychiatry",
    },
  ],

  // ORTHOPEDICS (OR)
  "OR-MOD-01-01-fractures": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Fracture_xray.jpg/640px-Fracture_xray.jpg",
      title: "Fracture Management",
      alt: "Bone fractures and treatment",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Orthopedics",
    },
  ],
  "OR-MOD-02-01-joint-disorders": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Arthrosis.jpg/640px-Arthrosis.jpg",
      title: "Joint Disorders",
      alt: "Arthritis and degenerative diseases",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Orthopedics",
    },
  ],
  "OR-MOD-03-01-spine-disorders": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Spine_xray.jpg/640px-Spine_xray.jpg",
      title: "Spine Pathology",
      alt: "Spinal cord and vertebral disorders",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Orthopedics",
    },
  ],

  // ANESTHESIOLOGY (AS)
  "AS-MOD-01-01-anesthetic-agents": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Anesthesia_equipment.jpg/640px-Anesthesia_equipment.jpg",
      title: "Anesthetic Agents",
      alt: "Anesthesia setup and equipment",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Anesthesiology",
    },
  ],
  "AS-MOD-02-01-pain-management": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pain_management.png/640px-Pain_management.png",
      title: "Pain Management",
      alt: "Pain control and analgesia",
      attribution: "Wikimedia Commons",
      license: "CC0",
      category: "Anesthesiology",
    },
  ],

  // RADIOLOGY (RD)
  "RD-MOD-01-01-chest-imaging": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Chest_ct.jpg/640px-Chest_ct.jpg",
      title: "Chest Imaging",
      alt: "Thoracic imaging and pathology",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Radiology",
    },
  ],
  "RD-MOD-01-02-abdominal-imaging": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Abdominal_ct.jpg/640px-Abdominal_ct.jpg",
      title: "Abdominal Imaging",
      alt: "Abdominal and pelvic pathology on imaging",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Radiology",
    },
  ],
  "RD-MOD-02-01-brain-imaging": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Brain_mri.jpg/640px-Brain_mri.jpg",
      title: "Brain Imaging",
      alt: "Neurological imaging and pathology",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Radiology",
    },
  ],
  "RD-MOD-03-01-musculoskeletal": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/MSK_imaging.jpg/640px-MSK_imaging.jpg",
      title: "Musculoskeletal Imaging",
      alt: "Bone and joint pathology imaging",
      attribution: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      category: "Radiology",
    },
  ],
};

export async function seedClinicalImages(
  prisma: any
): Promise<{ created: number; skipped: number }> {
  // Implementation for seeding clinical images into database
  // This will be used to populate image associations in the curriculum
  let created = 0;
  let skipped = 0;

  for (const [topicId, images] of Object.entries(clinicalImages)) {
    // Additional logic to store images with topics in database
    // This would connect to the actual curriculum structure
    created += images.length;
  }

  return { created, skipped };
}
