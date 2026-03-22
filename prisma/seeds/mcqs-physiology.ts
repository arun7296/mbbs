export const physiologyMcqs = [
  { type: "MCQ_SINGLE" as const, topicCode: "PY-MOD-03-TOP-03", stem: "A 65-year-old male presents with chest pain. ECG shows ST elevation in leads V1-V4. The coronary artery most likely occluded is:", options: [
    { id: "a", text: "Left anterior descending artery", isCorrect: true, explanation: "V1-V4 ST elevation = anterior wall MI, supplied by LAD" },
    { id: "b", text: "Right coronary artery", isCorrect: false, explanation: "RCA supplies inferior wall (leads II, III, aVF)" },
    { id: "c", text: "Left circumflex artery", isCorrect: false, explanation: "LCx supplies lateral wall (I, aVL, V5-V6)" },
    { id: "d", text: "Posterior descending artery", isCorrect: false, explanation: "PDA supplies posterior wall" },
  ], explanation: "ST elevation in **V1-V4** indicates **anterior wall MI**, supplied by the **left anterior descending (LAD)** artery.", difficulty: "MEDIUM" as const, bloomsLevel: "ProblemSolving", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Guyton", chapter: "Ch 21", edition: "14th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PY-MOD-03-TOP-02", stem: "The first heart sound (S1) is produced by closure of:", options: [
    { id: "a", text: "Aortic and pulmonary valves", isCorrect: false, explanation: "These produce S2" },
    { id: "b", text: "Mitral and tricuspid valves", isCorrect: true, explanation: "S1 = closure of AV valves at start of systole" },
    { id: "c", text: "Mitral valve only", isCorrect: false, explanation: "S1 has both mitral (M1) and tricuspid (T1) components" },
    { id: "d", text: "Aortic valve only", isCorrect: false, explanation: "Aortic closure contributes to S2, not S1" },
  ], explanation: "**S1** is produced by closure of the **mitral (M1) and tricuspid (T1) valves** at the beginning of ventricular systole.", difficulty: "EASY" as const, bloomsLevel: "Recall", examTags: ["NEXT_STEP1"] as string[], textbookRefs: [{ book: "Guyton", chapter: "Ch 23", edition: "14th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PY-MOD-04-TOP-02", stem: "Forced Vital Capacity (FVC) is reduced in:", options: [
    { id: "a", text: "Bronchial asthma", isCorrect: false, explanation: "Asthma is obstructive - FEV1/FVC ratio is reduced, but FVC may be normal" },
    { id: "b", text: "Pulmonary fibrosis", isCorrect: true, explanation: "Restrictive disease reduces all lung volumes including FVC" },
    { id: "c", text: "Emphysema", isCorrect: false, explanation: "Emphysema is obstructive with air trapping, FVC may be normal initially" },
    { id: "d", text: "Chronic bronchitis", isCorrect: false, explanation: "Obstructive pattern - FEV1/FVC reduced" },
  ], explanation: "**Pulmonary fibrosis** is a **restrictive** lung disease where all volumes are reduced. In **obstructive** diseases (asthma, COPD), the FEV1/FVC ratio is reduced.", difficulty: "MEDIUM" as const, bloomsLevel: "Analysis", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Guyton", chapter: "Ch 42", edition: "14th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PY-MOD-05-TOP-01", stem: "Glomerular filtration rate (GFR) is measured most accurately by clearance of:", options: [
    { id: "a", text: "Urea", isCorrect: false, explanation: "Urea is passively reabsorbed, underestimates GFR" },
    { id: "b", text: "Inulin", isCorrect: true, explanation: "Inulin is freely filtered, not reabsorbed or secreted - gold standard" },
    { id: "c", text: "PAH", isCorrect: false, explanation: "PAH measures renal plasma flow (RPF), not GFR" },
    { id: "d", text: "Glucose", isCorrect: false, explanation: "Glucose is completely reabsorbed at normal levels" },
  ], explanation: "**Inulin clearance** is the **gold standard** for GFR measurement because inulin is freely filtered, not reabsorbed, and not secreted.", difficulty: "EASY" as const, bloomsLevel: "Recall", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Guyton", chapter: "Ch 27", edition: "14th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PY-MOD-07-TOP-04", stem: "A patient with random blood glucose of 250 mg/dL, polyuria, and weight loss. C-peptide levels are very low. The most likely diagnosis is:", options: [
    { id: "a", text: "Type 2 Diabetes Mellitus", isCorrect: false, explanation: "Type 2 has normal/high C-peptide (insulin resistance)" },
    { id: "b", text: "Type 1 Diabetes Mellitus", isCorrect: true, explanation: "Low C-peptide = absolute insulin deficiency = Type 1 DM" },
    { id: "c", text: "Gestational diabetes", isCorrect: false, explanation: "Not likely without pregnancy context" },
    { id: "d", text: "Cushing's syndrome", isCorrect: false, explanation: "Cushing's causes secondary diabetes with high cortisol features" },
  ], explanation: "**Low C-peptide** indicates absolute insulin deficiency (beta cell destruction), diagnostic of **Type 1 DM**. Type 2 has normal or elevated C-peptide.", difficulty: "MEDIUM" as const, bloomsLevel: "ProblemSolving", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Guyton", chapter: "Ch 79", edition: "14th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PY-MOD-02-TOP-04", stem: "Which clotting factor is common to both intrinsic and extrinsic pathways?", options: [
    { id: "a", text: "Factor VII", isCorrect: false, explanation: "Factor VII is exclusive to the extrinsic pathway" },
    { id: "b", text: "Factor XII", isCorrect: false, explanation: "Factor XII initiates the intrinsic pathway only" },
    { id: "c", text: "Factor X", isCorrect: true, explanation: "Factor X is where the intrinsic and extrinsic pathways converge (common pathway)" },
    { id: "d", text: "Factor VIII", isCorrect: false, explanation: "Factor VIII is in the intrinsic pathway" },
  ], explanation: "The **common pathway** starts with **Factor X** activation. Both intrinsic (via VIIIa+IXa) and extrinsic (via VIIa+TF) pathways converge to activate Factor X.", difficulty: "EASY" as const, bloomsLevel: "Recall", examTags: ["NEXT_STEP1"] as string[], textbookRefs: [{ book: "Guyton", chapter: "Ch 37", edition: "14th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PY-MOD-01-TOP-03", stem: "During depolarization phase of an action potential, the membrane permeability increases mainly to:", options: [
    { id: "a", text: "Potassium ions", isCorrect: false, explanation: "K+ permeability increases during repolarization" },
    { id: "b", text: "Sodium ions", isCorrect: true, explanation: "Voltage-gated Na+ channels open during depolarization" },
    { id: "c", text: "Calcium ions", isCorrect: false, explanation: "Ca2+ important in cardiac/smooth muscle, not typical nerve AP" },
    { id: "d", text: "Chloride ions", isCorrect: false, explanation: "Cl- channels important in inhibitory synapses (IPSPs)" },
  ], explanation: "During **depolarization**, voltage-gated **Na+ channels** open rapidly, causing Na+ influx and membrane potential to become positive (+30mV).", difficulty: "EASY" as const, bloomsLevel: "Recall", examTags: ["NEXT_STEP1"] as string[], textbookRefs: [{ book: "Guyton", chapter: "Ch 5", edition: "14th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PY-MOD-06-TOP-02", stem: "The enzyme responsible for activation of pepsinogen to pepsin in the stomach is:", options: [
    { id: "a", text: "Enterokinase", isCorrect: false, explanation: "Enterokinase activates trypsinogen in the duodenum" },
    { id: "b", text: "HCl", isCorrect: true, explanation: "HCl (pH < 2) converts pepsinogen to active pepsin" },
    { id: "c", text: "Gastrin", isCorrect: false, explanation: "Gastrin stimulates HCl secretion but doesn't directly activate pepsinogen" },
    { id: "d", text: "Secretin", isCorrect: false, explanation: "Secretin stimulates pancreatic bicarbonate secretion" },
  ], explanation: "**HCl** from parietal cells creates the acidic environment (pH < 2) needed to convert **pepsinogen → pepsin**. Pepsin then autocatalytically activates more pepsinogen.", difficulty: "EASY" as const, bloomsLevel: "Recall", examTags: ["NEXT_STEP1"] as string[], textbookRefs: [{ book: "Guyton", chapter: "Ch 65", edition: "14th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PY-MOD-03-TOP-05", stem: "A patient's blood pressure is 180/110 mmHg. Which of the following is the most important mechanism for long-term blood pressure regulation?", options: [
    { id: "a", text: "Baroreceptor reflex", isCorrect: false, explanation: "Baroreceptors adapt within days — short-term control only" },
    { id: "b", text: "Renal pressure natriuresis", isCorrect: true, explanation: "Kidney adjusts Na+/water excretion — infinite gain, no adaptation" },
    { id: "c", text: "Renin-angiotensin system", isCorrect: false, explanation: "RAS is important but intermediate-term (hours to days)" },
    { id: "d", text: "Chemoreceptor reflex", isCorrect: false, explanation: "Chemoreceptors primarily regulate respiration" },
  ], explanation: "The **renal pressure-natriuresis mechanism** is the most important long-term BP regulator. Higher BP → increased sodium/water excretion → BP returns to normal. It has **infinite gain** (no adaptation).", difficulty: "HARD" as const, bloomsLevel: "Analysis", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Guyton", chapter: "Ch 19", edition: "14th" }] },

  { type: "MCQ_SINGLE" as const, topicCode: "PY-MOD-07-TOP-02", stem: "In a patient with Graves' disease, TSH levels would be:", options: [
    { id: "a", text: "Elevated", isCorrect: false, explanation: "Elevated TSH indicates hypothyroidism or TSH-secreting adenoma" },
    { id: "b", text: "Low/suppressed", isCorrect: true, explanation: "Excess T3/T4 from thyroid suppresses TSH via negative feedback" },
    { id: "c", text: "Normal", isCorrect: false, explanation: "TSH would be abnormal in thyroid disease" },
    { id: "d", text: "Fluctuating", isCorrect: false, explanation: "TSH doesn't typically fluctuate in Graves'" },
  ], explanation: "In **Graves' disease** (autoimmune hyperthyroidism), thyroid-stimulating immunoglobulins (TSI) cause excess T3/T4 production, which **suppresses TSH** via negative feedback on the anterior pituitary.", difficulty: "MEDIUM" as const, bloomsLevel: "ProblemSolving", examTags: ["NEXT_STEP1", "NEET_PG"] as string[], textbookRefs: [{ book: "Guyton", chapter: "Ch 77", edition: "14th" }] },
];
