export const surgerySubject = { name: "General Surgery", code: "SU", phase: "PHASE_3_PART2" as const, totalHours: 600, description: "Surgical diagnosis and management of diseases requiring operative intervention", iconUrl: null, sortOrder: 15 };
export const surgeryModules = [
  { code: "SU-MOD-01", name: "General Surgery Principles", description: "Wound healing, surgical infections, fluids, nutrition, preop/postop", estimatedHours: 50, sortOrder: 1 },
  { code: "SU-MOD-02", name: "Trauma & Shock", description: "ATLS, polytrauma, hemorrhagic shock, burns", estimatedHours: 50, sortOrder: 2 },
  { code: "SU-MOD-03", name: "Head, Neck & Endocrine Surgery", description: "Thyroid, salivary glands, cleft lip/palate", estimatedHours: 55, sortOrder: 3 },
  { code: "SU-MOD-04", name: "Breast Surgery", description: "Breast lumps, fibroadenoma, breast carcinoma", estimatedHours: 35, sortOrder: 4 },
  { code: "SU-MOD-05", name: "GI Surgery", description: "Appendicitis, hernia, intestinal obstruction, peptic ulcer surgery", estimatedHours: 70, sortOrder: 5 },
  { code: "SU-MOD-06", name: "Hepatobiliary & Pancreatic Surgery", description: "Gallstones, jaundice, liver abscess, pancreatic tumors", estimatedHours: 50, sortOrder: 6 },
  { code: "SU-MOD-07", name: "Vascular Surgery", description: "Varicose veins, DVT, peripheral arterial disease, aneurysms", estimatedHours: 40, sortOrder: 7 },
  { code: "SU-MOD-08", name: "Urology", description: "Renal calculi, BPH, bladder tumors, urethral stricture", estimatedHours: 50, sortOrder: 8 },
  { code: "SU-MOD-09", name: "Skin, Soft Tissue & Oncology", description: "Ulcers, sinuses, fistula, skin cancers, oncology principles", estimatedHours: 50, sortOrder: 9 },
  { code: "SU-MOD-10", name: "Pediatric Surgery", description: "Congenital anomalies, pyloric stenosis, intussusception", estimatedHours: 50, sortOrder: 10 },
];
export const surgeryTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "SU-MOD-01": [
    { code: "SU-MOD-01-TOP-01", name: "Wound Healing & Surgical Infections", sortOrder: 1, competencyCode: "SU1.1", competencyDesc: "Describe wound healing and factors affecting it" },
    { code: "SU-MOD-01-TOP-02", name: "Fluid, Electrolyte & Nutrition", sortOrder: 2, competencyCode: "SU1.2", competencyDesc: "Describe perioperative fluid management and nutrition" },
    { code: "SU-MOD-01-TOP-03", name: "Preoperative & Postoperative Care", sortOrder: 3, competencyCode: "SU1.3", competencyDesc: "Describe pre/postoperative assessment and complications" },
    { code: "SU-MOD-01-TOP-04", name: "Blood Transfusion & Hemostasis", sortOrder: 4, competencyCode: "SU1.4", competencyDesc: "Describe blood transfusion and surgical hemostasis" },
  ],
  "SU-MOD-02": [
    { code: "SU-MOD-02-TOP-01", name: "ATLS & Primary Survey", sortOrder: 1, competencyCode: "SU2.1", competencyDesc: "Describe ATLS approach and primary survey" },
    { code: "SU-MOD-02-TOP-02", name: "Head Injury", sortOrder: 2, competencyCode: "SU2.2", competencyDesc: "Describe head injury management and GCS" },
    { code: "SU-MOD-02-TOP-03", name: "Chest & Abdominal Trauma", sortOrder: 3, competencyCode: "SU2.3", competencyDesc: "Describe thoracic and abdominal trauma management" },
    { code: "SU-MOD-02-TOP-04", name: "Burns", sortOrder: 4, competencyCode: "SU2.4", competencyDesc: "Describe burn assessment (rule of 9s) and management" },
  ],
  "SU-MOD-03": [
    { code: "SU-MOD-03-TOP-01", name: "Thyroid Surgery", sortOrder: 1, competencyCode: "SU3.1", competencyDesc: "Describe thyroid swellings, investigations, and thyroidectomy" },
    { code: "SU-MOD-03-TOP-02", name: "Salivary Gland Tumors", sortOrder: 2, competencyCode: "SU3.2", competencyDesc: "Describe salivary gland tumors and parotidectomy" },
    { code: "SU-MOD-03-TOP-03", name: "Neck Swellings & Lymph Nodes", sortOrder: 3, competencyCode: "SU3.3", competencyDesc: "Describe approach to neck swellings and lymphadenopathy" },
    { code: "SU-MOD-03-TOP-04", name: "Cleft Lip & Palate", sortOrder: 4, competencyCode: "SU3.4", competencyDesc: "Describe cleft lip and palate repair" },
  ],
  "SU-MOD-04": [
    { code: "SU-MOD-04-TOP-01", name: "Breast Examination & Lumps", sortOrder: 1, competencyCode: "SU4.1", competencyDesc: "Describe clinical examination and approach to breast lumps" },
    { code: "SU-MOD-04-TOP-02", name: "Fibroadenoma & Fibrocystic Disease", sortOrder: 2, competencyCode: "SU4.2", competencyDesc: "Describe benign breast conditions" },
    { code: "SU-MOD-04-TOP-03", name: "Breast Carcinoma", sortOrder: 3, competencyCode: "SU4.3", competencyDesc: "Describe breast cancer: staging, surgery, adjuvant therapy" },
  ],
  "SU-MOD-05": [
    { code: "SU-MOD-05-TOP-01", name: "Appendicitis", sortOrder: 1, competencyCode: "SU5.1", competencyDesc: "Describe acute appendicitis diagnosis and surgery" },
    { code: "SU-MOD-05-TOP-02", name: "Inguinal & Femoral Hernia", sortOrder: 2, competencyCode: "SU5.2", competencyDesc: "Describe hernia types, repair, and complications" },
    { code: "SU-MOD-05-TOP-03", name: "Intestinal Obstruction", sortOrder: 3, competencyCode: "SU5.3", competencyDesc: "Describe causes and management of intestinal obstruction" },
    { code: "SU-MOD-05-TOP-04", name: "Peptic Ulcer: Surgical Management", sortOrder: 4, competencyCode: "SU5.4", competencyDesc: "Describe surgical treatment of peptic ulcer complications" },
    { code: "SU-MOD-05-TOP-05", name: "Colorectal Carcinoma", sortOrder: 5, competencyCode: "SU5.5", competencyDesc: "Describe colorectal cancer staging and surgery" },
    { code: "SU-MOD-05-TOP-06", name: "Anorectal Diseases", sortOrder: 6, competencyCode: "SU5.6", competencyDesc: "Describe hemorrhoids, fissure, fistula, and abscess" },
  ],
  "SU-MOD-06": [
    { code: "SU-MOD-06-TOP-01", name: "Gallstones & Cholecystitis", sortOrder: 1, competencyCode: "SU6.1", competencyDesc: "Describe cholelithiasis and cholecystectomy" },
    { code: "SU-MOD-06-TOP-02", name: "Obstructive Jaundice", sortOrder: 2, competencyCode: "SU6.2", competencyDesc: "Describe surgical jaundice workup and management" },
    { code: "SU-MOD-06-TOP-03", name: "Liver Abscess & Portal Hypertension", sortOrder: 3, competencyCode: "SU6.3", competencyDesc: "Describe liver abscess and portal hypertension surgery" },
    { code: "SU-MOD-06-TOP-04", name: "Pancreatic Tumors", sortOrder: 4, competencyCode: "SU6.4", competencyDesc: "Describe pancreatic carcinoma and Whipple procedure" },
  ],
  "SU-MOD-07": [
    { code: "SU-MOD-07-TOP-01", name: "Varicose Veins", sortOrder: 1, competencyCode: "SU7.1", competencyDesc: "Describe varicose veins: clinical features, tests, surgery" },
    { code: "SU-MOD-07-TOP-02", name: "DVT & Peripheral Arterial Disease", sortOrder: 2, competencyCode: "SU7.2", competencyDesc: "Describe DVT management and PAD classification" },
    { code: "SU-MOD-07-TOP-03", name: "Aneurysms", sortOrder: 3, competencyCode: "SU7.3", competencyDesc: "Describe aortic aneurysm types and repair" },
  ],
  "SU-MOD-08": [
    { code: "SU-MOD-08-TOP-01", name: "Renal Calculi", sortOrder: 1, competencyCode: "SU8.1", competencyDesc: "Describe urolithiasis: types, investigation, management" },
    { code: "SU-MOD-08-TOP-02", name: "BPH & Prostate Carcinoma", sortOrder: 2, competencyCode: "SU8.2", competencyDesc: "Describe BPH and prostate cancer management" },
    { code: "SU-MOD-08-TOP-03", name: "Bladder & Renal Tumors", sortOrder: 3, competencyCode: "SU8.3", competencyDesc: "Describe bladder cancer and renal cell carcinoma" },
    { code: "SU-MOD-08-TOP-04", name: "Urethral Stricture & Phimosis", sortOrder: 4, competencyCode: "SU8.4", competencyDesc: "Describe urethral stricture, phimosis, and hydrocele" },
  ],
  "SU-MOD-09": [
    { code: "SU-MOD-09-TOP-01", name: "Ulcers & Sinuses", sortOrder: 1, competencyCode: "SU9.1", competencyDesc: "Describe classification of ulcers and sinuses" },
    { code: "SU-MOD-09-TOP-02", name: "Skin Cancers", sortOrder: 2, competencyCode: "SU9.2", competencyDesc: "Describe BCC, SCC, melanoma: features and management" },
    { code: "SU-MOD-09-TOP-03", name: "Surgical Oncology Principles", sortOrder: 3, competencyCode: "SU9.3", competencyDesc: "Describe principles of surgical oncology and staging" },
  ],
  "SU-MOD-10": [
    { code: "SU-MOD-10-TOP-01", name: "Congenital Anomalies", sortOrder: 1, competencyCode: "SU10.1", competencyDesc: "Describe TEF, diaphragmatic hernia, anorectal malformations" },
    { code: "SU-MOD-10-TOP-02", name: "Pyloric Stenosis & Intussusception", sortOrder: 2, competencyCode: "SU10.2", competencyDesc: "Describe IHPS and intussusception management" },
    { code: "SU-MOD-10-TOP-03", name: "Undescended Testis & Wilms Tumor", sortOrder: 3, competencyCode: "SU10.3", competencyDesc: "Describe cryptorchidism and Wilms tumor" },
  ],
};
