// Dermatology, Psychiatry, Orthopedics, Anesthesiology, Radiology

export const dermatologySubject = { name: "Dermatology", code: "DR", phase: "PHASE_3_PART2" as const, totalHours: 100, description: "Skin diseases, STIs, leprosy, cosmetic dermatology", iconUrl: null, sortOrder: 18 };
export const dermatologyModules = [
  { code: "DR-MOD-01", name: "General Dermatology", description: "Skin structure, lesion morphology, dermatitis, eczema", estimatedHours: 25, sortOrder: 1 },
  { code: "DR-MOD-02", name: "Infections & Infestations", description: "Fungal, bacterial, viral infections, scabies, pediculosis", estimatedHours: 25, sortOrder: 2 },
  { code: "DR-MOD-03", name: "Papulosquamous & Vesiculobullous", description: "Psoriasis, lichen planus, pemphigus, SJS/TEN", estimatedHours: 20, sortOrder: 3 },
  { code: "DR-MOD-04", name: "Leprosy & STIs", description: "Hansen's disease, syphilis, gonorrhea, genital ulcers", estimatedHours: 20, sortOrder: 4 },
  { code: "DR-MOD-05", name: "Pigmentary & Skin Tumors", description: "Vitiligo, melanoma, BCC, SCC", estimatedHours: 10, sortOrder: 5 },
];
export const dermatologyTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "DR-MOD-01": [
    { code: "DR-MOD-01-TOP-01", name: "Skin Structure & Lesion Morphology", sortOrder: 1, competencyCode: "DR1.1", competencyDesc: "Describe skin structure and types of skin lesions" },
    { code: "DR-MOD-01-TOP-02", name: "Eczema & Contact Dermatitis", sortOrder: 2, competencyCode: "DR1.2", competencyDesc: "Describe eczema types and management" },
    { code: "DR-MOD-01-TOP-03", name: "Urticaria & Drug Reactions", sortOrder: 3, competencyCode: "DR1.3", competencyDesc: "Describe urticaria, angioedema, and cutaneous drug reactions" },
  ],
  "DR-MOD-02": [
    { code: "DR-MOD-02-TOP-01", name: "Fungal Infections", sortOrder: 1, competencyCode: "DR2.1", competencyDesc: "Describe dermatophytosis, candidiasis, and pityriasis versicolor" },
    { code: "DR-MOD-02-TOP-02", name: "Bacterial Skin Infections", sortOrder: 2, competencyCode: "DR2.2", competencyDesc: "Describe impetigo, cellulitis, boils, and leprosy skin lesions" },
    { code: "DR-MOD-02-TOP-03", name: "Viral Infections & Scabies", sortOrder: 3, competencyCode: "DR2.3", competencyDesc: "Describe warts, herpes, molluscum, scabies, pediculosis" },
  ],
  "DR-MOD-03": [
    { code: "DR-MOD-03-TOP-01", name: "Psoriasis", sortOrder: 1, competencyCode: "DR3.1", competencyDesc: "Describe psoriasis types, features, and management" },
    { code: "DR-MOD-03-TOP-02", name: "Lichen Planus & Pityriasis Rosea", sortOrder: 2, competencyCode: "DR3.2", competencyDesc: "Describe lichen planus and pityriasis rosea" },
    { code: "DR-MOD-03-TOP-03", name: "Pemphigus & Bullous Pemphigoid", sortOrder: 3, competencyCode: "DR3.3", competencyDesc: "Describe autoimmune blistering diseases" },
    { code: "DR-MOD-03-TOP-04", name: "SJS & TEN", sortOrder: 4, competencyCode: "DR3.4", competencyDesc: "Describe Stevens-Johnson syndrome and toxic epidermal necrolysis" },
  ],
  "DR-MOD-04": [
    { code: "DR-MOD-04-TOP-01", name: "Leprosy", sortOrder: 1, competencyCode: "DR4.1", competencyDesc: "Describe leprosy: classification, reactions, MDT" },
    { code: "DR-MOD-04-TOP-02", name: "Syphilis", sortOrder: 2, competencyCode: "DR4.2", competencyDesc: "Describe stages of syphilis and management" },
    { code: "DR-MOD-04-TOP-03", name: "Gonorrhea & Genital Ulcer Diseases", sortOrder: 3, competencyCode: "DR4.3", competencyDesc: "Describe STI syndromic management" },
  ],
  "DR-MOD-05": [
    { code: "DR-MOD-05-TOP-01", name: "Vitiligo & Pigmentary Disorders", sortOrder: 1, competencyCode: "DR5.1", competencyDesc: "Describe vitiligo, melasma, and albinism" },
    { code: "DR-MOD-05-TOP-02", name: "Skin Tumors & Melanoma", sortOrder: 2, competencyCode: "DR5.2", competencyDesc: "Describe skin cancers and premalignant conditions" },
  ],
};

export const psychiatrySubject = { name: "Psychiatry", code: "PS", phase: "PHASE_3_PART2" as const, totalHours: 100, description: "Mental health disorders, substance abuse, psychotherapy", iconUrl: null, sortOrder: 19 };
export const psychiatryModules = [
  { code: "PS-MOD-01", name: "General Psychiatry", description: "Classification, assessment, psychopathology", estimatedHours: 20, sortOrder: 1 },
  { code: "PS-MOD-02", name: "Psychotic & Mood Disorders", description: "Schizophrenia, bipolar disorder, depression", estimatedHours: 25, sortOrder: 2 },
  { code: "PS-MOD-03", name: "Neurotic & Stress Disorders", description: "Anxiety, OCD, PTSD, somatoform, dissociative", estimatedHours: 20, sortOrder: 3 },
  { code: "PS-MOD-04", name: "Substance Use & Organic Disorders", description: "Alcohol, opioids, delirium, dementia", estimatedHours: 20, sortOrder: 4 },
  { code: "PS-MOD-05", name: "Child & Forensic Psychiatry", description: "ADHD, autism, MR, forensic aspects, MHA", estimatedHours: 15, sortOrder: 5 },
];
export const psychiatryTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "PS-MOD-01": [
    { code: "PS-MOD-01-TOP-01", name: "Psychiatric Assessment & MSE", sortOrder: 1, competencyCode: "PS1.1", competencyDesc: "Describe psychiatric history taking and mental status examination" },
    { code: "PS-MOD-01-TOP-02", name: "Classification of Mental Disorders", sortOrder: 2, competencyCode: "PS1.2", competencyDesc: "Describe ICD and DSM classification systems" },
    { code: "PS-MOD-01-TOP-03", name: "Psychopharmacology Basics", sortOrder: 3, competencyCode: "PS1.3", competencyDesc: "Describe psychotropic drug classes and side effects" },
  ],
  "PS-MOD-02": [
    { code: "PS-MOD-02-TOP-01", name: "Schizophrenia", sortOrder: 1, competencyCode: "PS2.1", competencyDesc: "Describe schizophrenia: symptoms, subtypes, management" },
    { code: "PS-MOD-02-TOP-02", name: "Bipolar Affective Disorder", sortOrder: 2, competencyCode: "PS2.2", competencyDesc: "Describe BPAD: mania, depression, and mood stabilizers" },
    { code: "PS-MOD-02-TOP-03", name: "Depressive Disorders", sortOrder: 3, competencyCode: "PS2.3", competencyDesc: "Describe major depression and dysthymia" },
    { code: "PS-MOD-02-TOP-04", name: "Suicide Risk Assessment", sortOrder: 4, competencyCode: "PS2.4", competencyDesc: "Describe suicide risk assessment and prevention" },
  ],
  "PS-MOD-03": [
    { code: "PS-MOD-03-TOP-01", name: "Anxiety Disorders", sortOrder: 1, competencyCode: "PS3.1", competencyDesc: "Describe GAD, panic disorder, and phobias" },
    { code: "PS-MOD-03-TOP-02", name: "OCD & PTSD", sortOrder: 2, competencyCode: "PS3.2", competencyDesc: "Describe OCD and post-traumatic stress disorder" },
    { code: "PS-MOD-03-TOP-03", name: "Somatoform & Dissociative Disorders", sortOrder: 3, competencyCode: "PS3.3", competencyDesc: "Describe somatoform and conversion disorders" },
  ],
  "PS-MOD-04": [
    { code: "PS-MOD-04-TOP-01", name: "Alcohol Use Disorder", sortOrder: 1, competencyCode: "PS4.1", competencyDesc: "Describe alcohol dependence, withdrawal, and delirium tremens" },
    { code: "PS-MOD-04-TOP-02", name: "Opioid & Other Substance Use", sortOrder: 2, competencyCode: "PS4.2", competencyDesc: "Describe opioid, cannabis, and other substance use disorders" },
    { code: "PS-MOD-04-TOP-03", name: "Delirium & Dementia", sortOrder: 3, competencyCode: "PS4.3", competencyDesc: "Describe delirium, Alzheimer's, and other dementias" },
  ],
  "PS-MOD-05": [
    { code: "PS-MOD-05-TOP-01", name: "Child Psychiatry: ADHD & Autism", sortOrder: 1, competencyCode: "PS5.1", competencyDesc: "Describe ADHD, autism spectrum, and intellectual disability" },
    { code: "PS-MOD-05-TOP-02", name: "Mental Healthcare Act & Forensic Psychiatry", sortOrder: 2, competencyCode: "PS5.2", competencyDesc: "Describe MHCA 2017 and forensic psychiatric issues" },
  ],
};

export const orthopedicsSubject = { name: "Orthopedics", code: "OR", phase: "PHASE_3_PART2" as const, totalHours: 200, description: "Musculoskeletal system - fractures, dislocations, bone diseases, joint disorders", iconUrl: null, sortOrder: 20 };
export const orthopedicsModules = [
  { code: "OR-MOD-01", name: "General Orthopedics", description: "Fracture healing, principles of management, splints/casts", estimatedHours: 30, sortOrder: 1 },
  { code: "OR-MOD-02", name: "Upper Limb Fractures", description: "Clavicle, humerus, forearm, wrist, hand fractures", estimatedHours: 35, sortOrder: 2 },
  { code: "OR-MOD-03", name: "Lower Limb Fractures", description: "Femur, tibia, ankle, foot fractures", estimatedHours: 35, sortOrder: 3 },
  { code: "OR-MOD-04", name: "Spine & Pelvis", description: "Spinal injuries, TB spine, scoliosis, pelvic fractures", estimatedHours: 30, sortOrder: 4 },
  { code: "OR-MOD-05", name: "Joint Disorders", description: "OA, RA, septic arthritis, joint replacement", estimatedHours: 35, sortOrder: 5 },
  { code: "OR-MOD-06", name: "Bone Diseases & Tumors", description: "Osteomyelitis, bone tumors, metabolic bone disease", estimatedHours: 35, sortOrder: 6 },
];
export const orthopedicsTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "OR-MOD-01": [
    { code: "OR-MOD-01-TOP-01", name: "Fracture Healing & Classification", sortOrder: 1, competencyCode: "OR1.1", competencyDesc: "Describe fracture types, healing stages, and complications" },
    { code: "OR-MOD-01-TOP-02", name: "Principles of Fracture Management", sortOrder: 2, competencyCode: "OR1.2", competencyDesc: "Describe reduction, immobilization, and rehabilitation" },
    { code: "OR-MOD-01-TOP-03", name: "Compartment Syndrome & Fat Embolism", sortOrder: 3, competencyCode: "OR1.3", competencyDesc: "Describe fracture complications and emergencies" },
  ],
  "OR-MOD-02": [
    { code: "OR-MOD-02-TOP-01", name: "Clavicle & Shoulder Fractures", sortOrder: 1, competencyCode: "OR2.1", competencyDesc: "Describe clavicle fracture and shoulder dislocation" },
    { code: "OR-MOD-02-TOP-02", name: "Humerus Fractures", sortOrder: 2, competencyCode: "OR2.2", competencyDesc: "Describe supracondylar and shaft of humerus fractures" },
    { code: "OR-MOD-02-TOP-03", name: "Forearm & Wrist Fractures", sortOrder: 3, competencyCode: "OR2.3", competencyDesc: "Describe Colles, Smith, Monteggia, Galeazzi fractures" },
    { code: "OR-MOD-02-TOP-04", name: "Hand Injuries", sortOrder: 4, competencyCode: "OR2.4", competencyDesc: "Describe scaphoid fracture and hand tendon injuries" },
  ],
  "OR-MOD-03": [
    { code: "OR-MOD-03-TOP-01", name: "Femur Fractures", sortOrder: 1, competencyCode: "OR3.1", competencyDesc: "Describe neck of femur, intertrochanteric, and shaft fractures" },
    { code: "OR-MOD-03-TOP-02", name: "Knee Injuries", sortOrder: 2, competencyCode: "OR3.2", competencyDesc: "Describe meniscal and cruciate ligament injuries" },
    { code: "OR-MOD-03-TOP-03", name: "Tibia & Ankle Fractures", sortOrder: 3, competencyCode: "OR3.3", competencyDesc: "Describe tibial plateau, shaft, and ankle fractures" },
    { code: "OR-MOD-03-TOP-04", name: "Foot Fractures & Calcaneum", sortOrder: 4, competencyCode: "OR3.4", competencyDesc: "Describe calcaneum fracture and talus injuries" },
  ],
  "OR-MOD-04": [
    { code: "OR-MOD-04-TOP-01", name: "Spinal Injuries", sortOrder: 1, competencyCode: "OR4.1", competencyDesc: "Describe cervical and thoracolumbar spine injuries" },
    { code: "OR-MOD-04-TOP-02", name: "TB Spine (Pott's Disease)", sortOrder: 2, competencyCode: "OR4.2", competencyDesc: "Describe spinal tuberculosis and its management" },
    { code: "OR-MOD-04-TOP-03", name: "Scoliosis & Spinal Deformities", sortOrder: 3, competencyCode: "OR4.3", competencyDesc: "Describe scoliosis, kyphosis, and spondylolisthesis" },
    { code: "OR-MOD-04-TOP-04", name: "Pelvic Fractures", sortOrder: 4, competencyCode: "OR4.4", competencyDesc: "Describe pelvic ring injuries and management" },
  ],
  "OR-MOD-05": [
    { code: "OR-MOD-05-TOP-01", name: "Osteoarthritis", sortOrder: 1, competencyCode: "OR5.1", competencyDesc: "Describe OA pathogenesis, clinical features, and joint replacement" },
    { code: "OR-MOD-05-TOP-02", name: "Rheumatoid Arthritis", sortOrder: 2, competencyCode: "OR5.2", competencyDesc: "Describe RA joint deformities and management" },
    { code: "OR-MOD-05-TOP-03", name: "Septic Arthritis", sortOrder: 3, competencyCode: "OR5.3", competencyDesc: "Describe septic arthritis diagnosis and management" },
    { code: "OR-MOD-05-TOP-04", name: "Hip Disorders & AVN", sortOrder: 4, competencyCode: "OR5.4", competencyDesc: "Describe Perthes disease, SCFE, and avascular necrosis" },
  ],
  "OR-MOD-06": [
    { code: "OR-MOD-06-TOP-01", name: "Osteomyelitis", sortOrder: 1, competencyCode: "OR6.1", competencyDesc: "Describe acute and chronic osteomyelitis" },
    { code: "OR-MOD-06-TOP-02", name: "Bone Tumors", sortOrder: 2, competencyCode: "OR6.2", competencyDesc: "Describe benign and malignant bone tumors" },
    { code: "OR-MOD-06-TOP-03", name: "Osteoporosis & Metabolic Bone Disease", sortOrder: 3, competencyCode: "OR6.3", competencyDesc: "Describe osteoporosis, rickets, and osteomalacia" },
    { code: "OR-MOD-06-TOP-04", name: "Peripheral Nerve Injuries", sortOrder: 4, competencyCode: "OR6.4", competencyDesc: "Describe nerve injury classification and management" },
  ],
};

export const anesthesiologySubject = { name: "Anesthesiology", code: "AS", phase: "PHASE_3_PART2" as const, totalHours: 100, description: "Anesthesia, pain management, critical care, resuscitation", iconUrl: null, sortOrder: 21 };
export const anesthesiologyModules = [
  { code: "AS-MOD-01", name: "General Anesthesia", description: "Stages, agents, airway management, intubation", estimatedHours: 25, sortOrder: 1 },
  { code: "AS-MOD-02", name: "Regional Anesthesia", description: "Spinal, epidural, nerve blocks, local anesthesia", estimatedHours: 20, sortOrder: 2 },
  { code: "AS-MOD-03", name: "Preoperative & Monitoring", description: "ASA grading, preanesthetic checkup, intraop monitoring", estimatedHours: 20, sortOrder: 3 },
  { code: "AS-MOD-04", name: "Critical Care & Resuscitation", description: "BLS, ACLS, ventilator, shock management in ICU", estimatedHours: 20, sortOrder: 4 },
  { code: "AS-MOD-05", name: "Pain Management", description: "Acute and chronic pain, WHO analgesic ladder, palliative care", estimatedHours: 15, sortOrder: 5 },
];
export const anesthesiologyTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "AS-MOD-01": [
    { code: "AS-MOD-01-TOP-01", name: "Stages of Anesthesia & Agents", sortOrder: 1, competencyCode: "AS1.1", competencyDesc: "Describe stages of anesthesia and anesthetic agents" },
    { code: "AS-MOD-01-TOP-02", name: "Airway Management & Intubation", sortOrder: 2, competencyCode: "AS1.2", competencyDesc: "Describe airway assessment and endotracheal intubation" },
    { code: "AS-MOD-01-TOP-03", name: "Muscle Relaxants & Reversal", sortOrder: 3, competencyCode: "AS1.3", competencyDesc: "Describe neuromuscular blockers and reversal agents" },
  ],
  "AS-MOD-02": [
    { code: "AS-MOD-02-TOP-01", name: "Spinal & Epidural Anesthesia", sortOrder: 1, competencyCode: "AS2.1", competencyDesc: "Describe spinal and epidural anesthesia techniques" },
    { code: "AS-MOD-02-TOP-02", name: "Nerve Blocks", sortOrder: 2, competencyCode: "AS2.2", competencyDesc: "Describe common peripheral nerve blocks" },
    { code: "AS-MOD-02-TOP-03", name: "Local Anesthetics", sortOrder: 3, competencyCode: "AS2.3", competencyDesc: "Describe local anesthetic agents and toxicity" },
  ],
  "AS-MOD-03": [
    { code: "AS-MOD-03-TOP-01", name: "Preanesthetic Assessment", sortOrder: 1, competencyCode: "AS3.1", competencyDesc: "Describe ASA grading and preanesthetic evaluation" },
    { code: "AS-MOD-03-TOP-02", name: "Intraoperative Monitoring", sortOrder: 2, competencyCode: "AS3.2", competencyDesc: "Describe monitoring: SpO2, ETCO2, ECG, BP, temperature" },
    { code: "AS-MOD-03-TOP-03", name: "Postanesthetic Recovery", sortOrder: 3, competencyCode: "AS3.3", competencyDesc: "Describe PACU monitoring and complications" },
  ],
  "AS-MOD-04": [
    { code: "AS-MOD-04-TOP-01", name: "BLS & ACLS", sortOrder: 1, competencyCode: "AS4.1", competencyDesc: "Describe basic and advanced cardiac life support" },
    { code: "AS-MOD-04-TOP-02", name: "Mechanical Ventilation", sortOrder: 2, competencyCode: "AS4.2", competencyDesc: "Describe ventilator modes and settings" },
    { code: "AS-MOD-04-TOP-03", name: "ICU Management of Shock", sortOrder: 3, competencyCode: "AS4.3", competencyDesc: "Describe ICU management of various types of shock" },
  ],
  "AS-MOD-05": [
    { code: "AS-MOD-05-TOP-01", name: "Acute Pain Management", sortOrder: 1, competencyCode: "AS5.1", competencyDesc: "Describe WHO analgesic ladder and acute pain protocols" },
    { code: "AS-MOD-05-TOP-02", name: "Chronic Pain & Palliative Care", sortOrder: 2, competencyCode: "AS5.2", competencyDesc: "Describe chronic pain management and palliative care" },
  ],
};

export const radiologySubject = { name: "Radiology", code: "RD", phase: "PHASE_3_PART2" as const, totalHours: 100, description: "Diagnostic imaging - X-ray, CT, MRI, ultrasound, interventional radiology", iconUrl: null, sortOrder: 22 };
export const radiologyModules = [
  { code: "RD-MOD-01", name: "General Radiology", description: "Imaging modalities, radiation physics, radiation protection", estimatedHours: 20, sortOrder: 1 },
  { code: "RD-MOD-02", name: "Chest & CVS Imaging", description: "Chest X-ray interpretation, cardiac imaging", estimatedHours: 25, sortOrder: 2 },
  { code: "RD-MOD-03", name: "Musculoskeletal & Neuro Imaging", description: "Bone X-rays, CT/MRI brain, spine imaging", estimatedHours: 25, sortOrder: 3 },
  { code: "RD-MOD-04", name: "Abdominal & GU Imaging", description: "Abdominal X-ray, USG, CT abdomen, IVP", estimatedHours: 30, sortOrder: 4 },
];
export const radiologyTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "RD-MOD-01": [
    { code: "RD-MOD-01-TOP-01", name: "Imaging Modalities Overview", sortOrder: 1, competencyCode: "RD1.1", competencyDesc: "Describe X-ray, CT, MRI, USG, and nuclear medicine" },
    { code: "RD-MOD-01-TOP-02", name: "Radiation Physics & Protection", sortOrder: 2, competencyCode: "RD1.2", competencyDesc: "Describe radiation physics and protection measures" },
    { code: "RD-MOD-01-TOP-03", name: "Contrast Media", sortOrder: 3, competencyCode: "RD1.3", competencyDesc: "Describe contrast agents and their adverse reactions" },
  ],
  "RD-MOD-02": [
    { code: "RD-MOD-02-TOP-01", name: "Chest X-ray Interpretation", sortOrder: 1, competencyCode: "RD2.1", competencyDesc: "Describe systematic approach to chest X-ray reading" },
    { code: "RD-MOD-02-TOP-02", name: "Pulmonary Imaging", sortOrder: 2, competencyCode: "RD2.2", competencyDesc: "Describe imaging of pneumonia, TB, pleural effusion, lung masses" },
    { code: "RD-MOD-02-TOP-03", name: "Cardiac Imaging", sortOrder: 3, competencyCode: "RD2.3", competencyDesc: "Describe echocardiography and cardiac CT/MRI basics" },
  ],
  "RD-MOD-03": [
    { code: "RD-MOD-03-TOP-01", name: "Bone & Joint Imaging", sortOrder: 1, competencyCode: "RD3.1", competencyDesc: "Describe X-ray features of fractures and bone diseases" },
    { code: "RD-MOD-03-TOP-02", name: "Neuroimaging: CT & MRI Brain", sortOrder: 2, competencyCode: "RD3.2", competencyDesc: "Describe CT/MRI findings in stroke, tumors, infections" },
    { code: "RD-MOD-03-TOP-03", name: "Spine Imaging", sortOrder: 3, competencyCode: "RD3.3", competencyDesc: "Describe imaging of spinal injuries and disc disease" },
  ],
  "RD-MOD-04": [
    { code: "RD-MOD-04-TOP-01", name: "Abdominal X-ray & USG", sortOrder: 1, competencyCode: "RD4.1", competencyDesc: "Describe plain abdomen X-ray and abdominal ultrasound" },
    { code: "RD-MOD-04-TOP-02", name: "CT Abdomen & Pelvis", sortOrder: 2, competencyCode: "RD4.2", competencyDesc: "Describe CT findings in common abdominal pathologies" },
    { code: "RD-MOD-04-TOP-03", name: "GU Imaging & IVP", sortOrder: 3, competencyCode: "RD4.3", competencyDesc: "Describe renal imaging: USG, IVP, CT KUB" },
  ],
};
