export const pathologySubject = {
  name: "Pathology",
  code: "PA",
  phase: "PHASE_2" as const,
  totalHours: 400,
  description: "Study of disease mechanisms - cellular injury, inflammation, neoplasia, systemic pathology",
  iconUrl: null,
  sortOrder: 4,
};

export const pathologyModules = [
  { code: "PA-MOD-01", name: "General Pathology", description: "Cell injury, inflammation, repair, hemodynamic disorders", estimatedHours: 70, sortOrder: 1 },
  { code: "PA-MOD-02", name: "Neoplasia", description: "Tumor biology, carcinogenesis, grading, staging", estimatedHours: 40, sortOrder: 2 },
  { code: "PA-MOD-03", name: "Hematology", description: "Anemias, leukemias, lymphomas, bleeding disorders", estimatedHours: 55, sortOrder: 3 },
  { code: "PA-MOD-04", name: "CVS & Respiratory Pathology", description: "Heart diseases, vascular disorders, lung pathology", estimatedHours: 50, sortOrder: 4 },
  { code: "PA-MOD-05", name: "GI & Hepatobiliary Pathology", description: "GI tract diseases, liver pathology, pancreas", estimatedHours: 50, sortOrder: 5 },
  { code: "PA-MOD-06", name: "Renal & Male Reproductive Pathology", description: "Glomerular, tubular, interstitial diseases", estimatedHours: 40, sortOrder: 6 },
  { code: "PA-MOD-07", name: "Endocrine & Breast Pathology", description: "Thyroid, adrenal, pituitary, breast diseases", estimatedHours: 45, sortOrder: 7 },
  { code: "PA-MOD-08", name: "Neuropathology & Bone", description: "CNS tumors, infections, bone and joint pathology", estimatedHours: 50, sortOrder: 8 },
];

export const pathologyTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "PA-MOD-01": [
    { code: "PA-MOD-01-TOP-01", name: "Cell Injury & Adaptation", sortOrder: 1, competencyCode: "PA1.1", competencyDesc: "Describe causes, mechanisms of cell injury and cellular adaptations" },
    { code: "PA-MOD-01-TOP-02", name: "Necrosis & Apoptosis", sortOrder: 2, competencyCode: "PA2.1", competencyDesc: "Describe types of necrosis and apoptosis" },
    { code: "PA-MOD-01-TOP-03", name: "Acute Inflammation", sortOrder: 3, competencyCode: "PA3.1", competencyDesc: "Describe vascular and cellular events in acute inflammation" },
    { code: "PA-MOD-01-TOP-04", name: "Chronic Inflammation & Granuloma", sortOrder: 4, competencyCode: "PA3.4", competencyDesc: "Describe chronic inflammation and granulomatous inflammation" },
    { code: "PA-MOD-01-TOP-05", name: "Repair, Healing & Fibrosis", sortOrder: 5, competencyCode: "PA4.1", competencyDesc: "Describe wound healing, factors affecting it, and fibrosis" },
    { code: "PA-MOD-01-TOP-06", name: "Hemodynamic Disorders", sortOrder: 6, competencyCode: "PA5.1", competencyDesc: "Describe edema, thrombosis, embolism, infarction, shock" },
    { code: "PA-MOD-01-TOP-07", name: "Amyloidosis & Calcification", sortOrder: 7, competencyCode: "PA6.1", competencyDesc: "Describe amyloidosis and pathological calcification" },
    { code: "PA-MOD-01-TOP-08", name: "Neoplasia", sortOrder: 8, competencyCode: "PA7.1", competencyDesc: "Describe neoplasia: nomenclature, characteristics of benign and malignant tumors, carcinogenesis, tumor markers" },
  ],
  "PA-MOD-02": [
    { code: "PA-MOD-02-TOP-01", name: "Neoplasia: Nomenclature & Classification", sortOrder: 1, competencyCode: "PA7.1", competencyDesc: "Describe classification and nomenclature of neoplasms" },
    { code: "PA-MOD-02-TOP-02", name: "Carcinogenesis & Molecular Biology", sortOrder: 2, competencyCode: "PA8.1", competencyDesc: "Describe molecular basis of cancer and carcinogenesis" },
    { code: "PA-MOD-02-TOP-03", name: "Tumor Spread & Staging", sortOrder: 3, competencyCode: "PA9.1", competencyDesc: "Describe routes of spread, grading, and staging of tumors" },
    { code: "PA-MOD-02-TOP-04", name: "Tumor Markers & Lab Diagnosis", sortOrder: 4, competencyCode: "PA10.1", competencyDesc: "Describe tumor markers and laboratory diagnosis of cancer" },
  ],
  "PA-MOD-03": [
    { code: "PA-MOD-03-TOP-01", name: "Iron Deficiency & Megaloblastic Anemia", sortOrder: 1, competencyCode: "PA11.1", competencyDesc: "Describe iron deficiency and megaloblastic anemia" },
    { code: "PA-MOD-03-TOP-02", name: "Hemolytic Anemias", sortOrder: 2, competencyCode: "PA12.1", competencyDesc: "Describe hemolytic anemias: hereditary and acquired" },
    { code: "PA-MOD-03-TOP-03", name: "Aplastic Anemia & Pancytopenia", sortOrder: 3, competencyCode: "PA13.1", competencyDesc: "Describe aplastic anemia and pancytopenia" },
    { code: "PA-MOD-03-TOP-04", name: "Leukemias", sortOrder: 4, competencyCode: "PA14.1", competencyDesc: "Describe classification and features of leukemias" },
    { code: "PA-MOD-03-TOP-05", name: "Lymphomas & Myeloma", sortOrder: 5, competencyCode: "PA15.1", competencyDesc: "Describe Hodgkin and non-Hodgkin lymphomas, multiple myeloma" },
    { code: "PA-MOD-03-TOP-06", name: "Bleeding Disorders", sortOrder: 6, competencyCode: "PA16.1", competencyDesc: "Describe platelet disorders, coagulation disorders, DIC" },
    { code: "PA-MOD-03-TOP-07", name: "Transfusion Medicine", sortOrder: 7, competencyCode: "PA17.1b", competencyDesc: "Describe blood groups, cross-matching, transfusion reactions, and blood component therapy" },
  ],
  "PA-MOD-04": [
    { code: "PA-MOD-04-TOP-01", name: "Ischemic Heart Disease", sortOrder: 1, competencyCode: "PA17.1", competencyDesc: "Describe pathogenesis of atherosclerosis and IHD" },
    { code: "PA-MOD-04-TOP-02", name: "Valvular Heart Disease & RHD", sortOrder: 2, competencyCode: "PA18.1", competencyDesc: "Describe rheumatic fever, valvular diseases, and infective endocarditis" },
    { code: "PA-MOD-04-TOP-03", name: "Hypertension & Vascular Diseases", sortOrder: 3, competencyCode: "PA19.1", competencyDesc: "Describe hypertensive heart disease and vasculitis" },
    { code: "PA-MOD-04-TOP-04", name: "Obstructive Lung Diseases", sortOrder: 4, competencyCode: "PA20.1", competencyDesc: "Describe COPD, asthma, and bronchiectasis" },
    { code: "PA-MOD-04-TOP-05", name: "Pneumonias & TB", sortOrder: 5, competencyCode: "PA21.1", competencyDesc: "Describe pneumonia types and pulmonary tuberculosis" },
    { code: "PA-MOD-04-TOP-06", name: "Lung Tumors", sortOrder: 6, competencyCode: "PA22.1", competencyDesc: "Describe lung carcinoma and pleural diseases" },
    { code: "PA-MOD-04-TOP-07", name: "Pleural & Mediastinal Diseases", sortOrder: 7, competencyCode: "PA23.1", competencyDesc: "Describe pleural effusion, pneumothorax, mesothelioma, and mediastinal tumors" },
  ],
  "PA-MOD-05": [
    { code: "PA-MOD-05-TOP-01", name: "Oral & Esophageal Pathology", sortOrder: 1, competencyCode: "PA23.1", competencyDesc: "Describe diseases of oral cavity and esophagus" },
    { code: "PA-MOD-05-TOP-02", name: "Gastric Pathology", sortOrder: 2, competencyCode: "PA24.1", competencyDesc: "Describe gastritis, peptic ulcer, and gastric carcinoma" },
    { code: "PA-MOD-05-TOP-03", name: "Intestinal Pathology", sortOrder: 3, competencyCode: "PA25.1", competencyDesc: "Describe IBD, malabsorption, and intestinal tumors" },
    { code: "PA-MOD-05-TOP-04", name: "Liver Pathology", sortOrder: 4, competencyCode: "PA26.1", competencyDesc: "Describe hepatitis, cirrhosis, and liver tumors" },
    { code: "PA-MOD-05-TOP-05", name: "Gallbladder & Pancreas", sortOrder: 5, competencyCode: "PA27.1", competencyDesc: "Describe cholelithiasis, pancreatitis, and pancreatic tumors" },
  ],
  "PA-MOD-06": [
    { code: "PA-MOD-06-TOP-01", name: "Glomerular Diseases", sortOrder: 1, competencyCode: "PA28.1", competencyDesc: "Describe glomerulonephritis: types, pathogenesis, features" },
    { code: "PA-MOD-06-TOP-02", name: "Tubular & Interstitial Diseases", sortOrder: 2, competencyCode: "PA29.1", competencyDesc: "Describe ATN, pyelonephritis, and interstitial nephritis" },
    { code: "PA-MOD-06-TOP-03", name: "Renal Tumors", sortOrder: 3, competencyCode: "PA30.1", competencyDesc: "Describe renal cell carcinoma and Wilms tumor" },
    { code: "PA-MOD-06-TOP-04", name: "Male Reproductive Pathology", sortOrder: 4, competencyCode: "PA31.1", competencyDesc: "Describe diseases of prostate, testis, and penis" },
  ],
  "PA-MOD-07": [
    { code: "PA-MOD-07-TOP-01", name: "Thyroid Diseases", sortOrder: 1, competencyCode: "PA32.1", competencyDesc: "Describe goiter, thyroiditis, and thyroid neoplasms" },
    { code: "PA-MOD-07-TOP-02", name: "Adrenal & Pituitary Diseases", sortOrder: 2, competencyCode: "PA33.1", competencyDesc: "Describe adrenal and pituitary disorders" },
    { code: "PA-MOD-07-TOP-03", name: "Diabetes Mellitus", sortOrder: 3, competencyCode: "PA33.3", competencyDesc: "Describe pathogenesis and complications of diabetes" },
    { code: "PA-MOD-07-TOP-04", name: "Breast Diseases", sortOrder: 4, competencyCode: "PA34.1", competencyDesc: "Describe fibroadenoma, fibrocystic disease, and breast carcinoma" },
  ],
  "PA-MOD-08": [
    { code: "PA-MOD-08-TOP-01", name: "CNS Infections & Demyelination", sortOrder: 1, competencyCode: "PA35.1", competencyDesc: "Describe meningitis, encephalitis, and demyelinating diseases" },
    { code: "PA-MOD-08-TOP-02", name: "CNS Tumors", sortOrder: 2, competencyCode: "PA35.3", competencyDesc: "Describe classification and features of CNS tumors" },
    { code: "PA-MOD-08-TOP-03", name: "Bone Tumors & Metabolic Bone Disease", sortOrder: 3, competencyCode: "PA35.5", competencyDesc: "Describe bone tumors, osteoporosis, and metabolic bone diseases" },
    { code: "PA-MOD-08-TOP-04", name: "Skin Pathology", sortOrder: 4, competencyCode: "PA35.7", competencyDesc: "Describe common dermatopathology and skin tumors" },
  ],
};
