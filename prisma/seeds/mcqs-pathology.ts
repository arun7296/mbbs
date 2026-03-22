export const pathologyMcqs = [
  { type: "MCQ_SINGLE" as const, topicCode: "PA-MOD-01-TOP-03", stem: "A 25-year-old male presents with a swollen, red, warm knee joint after a fall. Synovial fluid shows numerous neutrophils. This is an example of:", options: [
    { id: "a", text: "Chronic inflammation", isCorrect: false, explanation: "Chronic inflammation has lymphocytes and macrophages" },
    { id: "b", text: "Acute inflammation", isCorrect: true, explanation: "Neutrophils are the hallmark of acute inflammation" },
    { id: "c", text: "Granulomatous inflammation", isCorrect: false, explanation: "Granulomatous has epithelioid cells and giant cells" },
    { id: "d", text: "Fibrinous inflammation", isCorrect: false, explanation: "Fibrinous has fibrin deposition, typically in serosal surfaces" },
  ], explanation: "**Neutrophils** are the hallmark of **acute inflammation**. They are the first cells to arrive (within 6-24 hours). Chronic inflammation is dominated by lymphocytes and macrophages.", difficulty: "EASY" as const, bloomsLevel: "Recall", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Robbins", chapter: "Ch 3 - Inflammation", edition: "10th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PA-MOD-01-TOP-02", stem: "Caseous necrosis is most characteristic of:", options: [
    { id: "a", text: "Myocardial infarction", isCorrect: false, explanation: "MI shows coagulative necrosis" },
    { id: "b", text: "Brain infarction", isCorrect: false, explanation: "Brain shows liquefactive necrosis" },
    { id: "c", text: "Tuberculosis", isCorrect: true, explanation: "Caseous (cheese-like) necrosis is pathognomonic of TB" },
    { id: "d", text: "Acute pancreatitis", isCorrect: false, explanation: "Pancreatitis shows fat necrosis (enzymatic)" },
  ], explanation: "**Caseous necrosis** (cheese-like, amorphous) is characteristic of **tuberculosis**. Other types: coagulative (most organs), liquefactive (brain, abscess), fat necrosis (pancreatitis), fibrinoid (vasculitis).", difficulty: "EASY" as const, bloomsLevel: "Recall", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Robbins", chapter: "Ch 2 - Cell Injury", edition: "10th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PA-MOD-01-TOP-06", stem: "A 70-year-old bedridden patient develops sudden onset breathlessness and chest pain 10 days after hip replacement surgery. The most likely diagnosis is:", options: [
    { id: "a", text: "Myocardial infarction", isCorrect: false, explanation: "Possible but post-surgical DVT/PE is more likely in this setting" },
    { id: "b", text: "Pulmonary thromboembolism", isCorrect: true, explanation: "Post-surgical immobilization → DVT → PE is a classic presentation" },
    { id: "c", text: "Pneumonia", isCorrect: false, explanation: "Pneumonia usually has fever, cough, not sudden breathlessness" },
    { id: "d", text: "Pneumothorax", isCorrect: false, explanation: "Less likely without trauma or intervention" },
  ], explanation: "**Pulmonary thromboembolism** from **DVT** is a major risk after orthopedic surgery + immobilization. Virchow's triad: stasis, endothelial injury, hypercoagulability — all present in this case.", difficulty: "MEDIUM" as const, bloomsLevel: "ProblemSolving", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Robbins", chapter: "Ch 4 - Hemodynamic Disorders", edition: "10th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PA-MOD-02-TOP-01", stem: "Which of the following is a benign tumor of glandular epithelium?", options: [
    { id: "a", text: "Adenocarcinoma", isCorrect: false, explanation: "Adenocarcinoma is a MALIGNANT glandular tumor" },
    { id: "b", text: "Adenoma", isCorrect: true, explanation: "Adenoma = benign tumor of glandular epithelium" },
    { id: "c", text: "Papilloma", isCorrect: false, explanation: "Papilloma = benign tumor of surface epithelium" },
    { id: "d", text: "Sarcoma", isCorrect: false, explanation: "Sarcoma = malignant tumor of mesenchymal origin" },
  ], explanation: "**Adenoma** = benign glandular tumor. Naming: benign epithelial (adenoma, papilloma), malignant epithelial (carcinoma), benign mesenchymal (-oma), malignant mesenchymal (sarcoma).", difficulty: "EASY" as const, bloomsLevel: "Recall", examTags: ["NEXT_STEP1"] as string[], textbookRefs: [{ book: "Robbins", chapter: "Ch 6 - Neoplasia", edition: "10th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PA-MOD-03-TOP-01", stem: "A 35-year-old female presents with fatigue, pallor, and spoon-shaped nails (koilonychia). Her MCV is 65 fL. The most likely type of anemia is:", options: [
    { id: "a", text: "Megaloblastic anemia", isCorrect: false, explanation: "Megaloblastic has HIGH MCV (>100 fL)" },
    { id: "b", text: "Iron deficiency anemia", isCorrect: true, explanation: "Low MCV (microcytic) + koilonychia = classic iron deficiency" },
    { id: "c", text: "Aplastic anemia", isCorrect: false, explanation: "Aplastic has pancytopenia with normal MCV" },
    { id: "d", text: "Hemolytic anemia", isCorrect: false, explanation: "Hemolytic has reticulocytosis and jaundice" },
  ], explanation: "**Iron deficiency anemia**: microcytic (low MCV), hypochromic. Classic features: koilonychia (spoon nails), glossitis, angular stomatitis. Most common anemia worldwide.", difficulty: "MEDIUM" as const, bloomsLevel: "ProblemSolving", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Robbins", chapter: "Ch 14 - Hematology", edition: "10th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PA-MOD-04-TOP-01", stem: "The most common cause of death in acute myocardial infarction within the first hour is:", options: [
    { id: "a", text: "Cardiac rupture", isCorrect: false, explanation: "Rupture occurs at 3-7 days post-MI" },
    { id: "b", text: "Ventricular fibrillation", isCorrect: true, explanation: "VF is the most common cause of sudden death in acute MI" },
    { id: "c", text: "Cardiogenic shock", isCorrect: false, explanation: "Cardiogenic shock occurs with >40% myocardial damage" },
    { id: "d", text: "Pulmonary embolism", isCorrect: false, explanation: "PE can occur but is not the most common early cause" },
  ], explanation: "**Ventricular fibrillation** is the most common cause of death within the **first hour** of MI. That's why early defibrillation is critical. Cardiac rupture occurs days 3-7.", difficulty: "MEDIUM" as const, bloomsLevel: "Analysis", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Robbins", chapter: "Ch 12 - Heart", edition: "10th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PA-MOD-01-TOP-01", stem: "Atrophy of muscle in a patient with a fractured leg in a cast is an example of:", options: [
    { id: "a", text: "Disuse atrophy", isCorrect: true, explanation: "Immobilization → decreased functional demand → muscle atrophy" },
    { id: "b", text: "Denervation atrophy", isCorrect: false, explanation: "Denervation atrophy occurs when nerve supply is lost" },
    { id: "c", text: "Endocrine atrophy", isCorrect: false, explanation: "Endocrine atrophy is from loss of hormonal stimulation" },
    { id: "d", text: "Pressure atrophy", isCorrect: false, explanation: "Pressure atrophy is from sustained external compression" },
  ], explanation: "**Disuse atrophy** occurs when a tissue loses functional demand. Immobilization in a cast → decreased muscle use → reduced muscle mass. Reversible with rehabilitation.", difficulty: "EASY" as const, bloomsLevel: "Analysis", examTags: ["NEXT_STEP1"] as string[], textbookRefs: [{ book: "Robbins", chapter: "Ch 1", edition: "10th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PA-MOD-05-TOP-04", stem: "Spider nevi, palmar erythema, and gynecomastia in a chronic alcoholic are due to:", options: [
    { id: "a", text: "Portal hypertension", isCorrect: false, explanation: "Portal HTN causes varices and ascites, not spider nevi" },
    { id: "b", text: "Hyperestrogenism", isCorrect: true, explanation: "Liver can't metabolize estrogen → estrogen excess → spider nevi, palmar erythema, gynecomastia" },
    { id: "c", text: "Vitamin deficiency", isCorrect: false, explanation: "Vitamin deficiency causes other signs (neuropathy, dermatitis)" },
    { id: "d", text: "Hepatorenal syndrome", isCorrect: false, explanation: "HRS causes renal failure, not these skin signs" },
  ], explanation: "In **cirrhosis**, the liver cannot metabolize **estrogen** properly → **hyperestrogenism** → spider nevi, palmar erythema, gynecomastia, testicular atrophy.", difficulty: "MEDIUM" as const, bloomsLevel: "ProblemSolving", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Robbins", chapter: "Ch 18 - Liver", edition: "10th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PA-MOD-07-TOP-04", stem: "The most common benign tumor of the female breast is:", options: [
    { id: "a", text: "Phyllodes tumor", isCorrect: false, explanation: "Phyllodes is less common, can be borderline/malignant" },
    { id: "b", text: "Fibroadenoma", isCorrect: true, explanation: "Most common benign breast tumor, peak in 20-30 years" },
    { id: "c", text: "Intraductal papilloma", isCorrect: false, explanation: "Less common, causes bloody nipple discharge" },
    { id: "d", text: "Lipoma", isCorrect: false, explanation: "Lipoma is common elsewhere but not the most common in breast" },
  ], explanation: "**Fibroadenoma** is the most common benign breast tumor. Peak age: 20-30 years. Firm, mobile (breast mouse), well-circumscribed. Does NOT increase cancer risk.", difficulty: "EASY" as const, bloomsLevel: "Recall", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Robbins", chapter: "Ch 23 - Breast", edition: "10th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PA-MOD-01-TOP-04", stem: "Langhans giant cells are characteristic of:", options: [
    { id: "a", text: "Foreign body reaction", isCorrect: false, explanation: "Foreign body giant cells have scattered nuclei, not horseshoe pattern" },
    { id: "b", text: "Granulomatous inflammation", isCorrect: true, explanation: "Langhans cells: nuclei arranged peripherally in horseshoe/ring pattern" },
    { id: "c", text: "Acute inflammation", isCorrect: false, explanation: "Acute inflammation has neutrophils, not giant cells" },
    { id: "d", text: "Suppurative inflammation", isCorrect: false, explanation: "Suppurative = pus-forming with neutrophils" },
  ], explanation: "**Langhans giant cells** have nuclei arranged in a **horseshoe/peripheral pattern**. They are characteristic of **granulomatous inflammation** (TB, sarcoidosis, leprosy). NOT the same as Langerhans cells (dendritic cells in skin).", difficulty: "MEDIUM" as const, bloomsLevel: "Recall", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Robbins", chapter: "Ch 3", edition: "10th" }] },
];
