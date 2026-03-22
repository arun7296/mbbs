export const pharmacologySubject = {
  name: "Pharmacology",
  code: "PH",
  phase: "PHASE_2" as const,
  totalHours: 300,
  description: "Study of drugs - mechanisms, pharmacokinetics, adverse effects, therapeutics",
  iconUrl: null,
  sortOrder: 5,
};

export const pharmacologyModules = [
  { code: "PH-MOD-01", name: "General Pharmacology", description: "Pharmacokinetics, pharmacodynamics, drug interactions", estimatedHours: 40, sortOrder: 1 },
  { code: "PH-MOD-02", name: "Autonomic Nervous System", description: "Cholinergic, adrenergic, ganglionic drugs", estimatedHours: 40, sortOrder: 2 },
  { code: "PH-MOD-03", name: "Cardiovascular Pharmacology", description: "Antihypertensives, antiarrhythmics, antianginals, heart failure drugs", estimatedHours: 40, sortOrder: 3 },
  { code: "PH-MOD-04", name: "CNS Pharmacology", description: "Anesthetics, sedatives, antiepileptics, antidepressants, opioids", estimatedHours: 45, sortOrder: 4 },
  { code: "PH-MOD-05", name: "Chemotherapy", description: "Antibiotics, antifungals, antivirals, antimalarials, antitubercular drugs", estimatedHours: 50, sortOrder: 5 },
  { code: "PH-MOD-06", name: "Autacoids, NSAIDs & Immunopharmacology", description: "Histamine, serotonin, prostaglandins, anti-inflammatory drugs", estimatedHours: 30, sortOrder: 6 },
  { code: "PH-MOD-07", name: "Endocrine Pharmacology", description: "Insulin, thyroid, corticosteroids, sex hormones, contraceptives", estimatedHours: 30, sortOrder: 7 },
  { code: "PH-MOD-08", name: "Miscellaneous & Applied", description: "GI drugs, respiratory drugs, anticancer drugs, drug regulations", estimatedHours: 25, sortOrder: 8 },
];

export const pharmacologyTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "PH-MOD-01": [
    { code: "PH-MOD-01-TOP-01", name: "Routes of Drug Administration", sortOrder: 1, competencyCode: "PH1.1", competencyDesc: "Describe routes of drug administration and their selection" },
    { code: "PH-MOD-01-TOP-02", name: "Pharmacokinetics: ADME", sortOrder: 2, competencyCode: "PH1.2", competencyDesc: "Describe absorption, distribution, metabolism, and excretion" },
    { code: "PH-MOD-01-TOP-03", name: "Pharmacodynamics", sortOrder: 3, competencyCode: "PH1.3", competencyDesc: "Describe drug-receptor interactions and dose-response relationships" },
    { code: "PH-MOD-01-TOP-04", name: "Adverse Drug Reactions", sortOrder: 4, competencyCode: "PH1.4", competencyDesc: "Describe ADRs, drug interactions, and pharmacovigilance" },
    { code: "PH-MOD-01-TOP-05", name: "Drug Development & Regulations", sortOrder: 5, competencyCode: "PH1.5", competencyDesc: "Describe drug discovery, clinical trials, and essential drugs" },
  ],
  "PH-MOD-02": [
    { code: "PH-MOD-02-TOP-01", name: "Cholinergic Drugs", sortOrder: 1, competencyCode: "PH2.1", competencyDesc: "Describe cholinergic agonists and anticholinesterases" },
    { code: "PH-MOD-02-TOP-02", name: "Anticholinergic Drugs", sortOrder: 2, competencyCode: "PH2.2", competencyDesc: "Describe atropine and other muscarinic antagonists" },
    { code: "PH-MOD-02-TOP-03", name: "Adrenergic Agonists", sortOrder: 3, competencyCode: "PH2.3", competencyDesc: "Describe sympathomimetics: adrenaline, noradrenaline, dopamine" },
    { code: "PH-MOD-02-TOP-04", name: "Adrenergic Antagonists", sortOrder: 4, competencyCode: "PH2.4", competencyDesc: "Describe alpha and beta blockers" },
    { code: "PH-MOD-02-TOP-05", name: "Neuromuscular Blocking Agents", sortOrder: 5, competencyCode: "PH2.5", competencyDesc: "Describe skeletal muscle relaxants and NMJ blockers" },
  ],
  "PH-MOD-03": [
    { code: "PH-MOD-03-TOP-01", name: "Antihypertensive Drugs", sortOrder: 1, competencyCode: "PH3.1", competencyDesc: "Describe antihypertensives: ACEi, ARBs, CCBs, diuretics, beta-blockers" },
    { code: "PH-MOD-03-TOP-02", name: "Antianginal Drugs", sortOrder: 2, competencyCode: "PH3.2", competencyDesc: "Describe nitrates, beta-blockers, CCBs for angina" },
    { code: "PH-MOD-03-TOP-03", name: "Drugs for Heart Failure", sortOrder: 3, competencyCode: "PH3.3", competencyDesc: "Describe digoxin, ACEi, diuretics in heart failure" },
    { code: "PH-MOD-03-TOP-04", name: "Antiarrhythmic Drugs", sortOrder: 4, competencyCode: "PH3.4", competencyDesc: "Describe Vaughan-Williams classification of antiarrhythmics" },
    { code: "PH-MOD-03-TOP-05", name: "Anticoagulants & Thrombolytics", sortOrder: 5, competencyCode: "PH3.5", competencyDesc: "Describe heparin, warfarin, antiplatelets, thrombolytics" },
    { code: "PH-MOD-03-TOP-06", name: "Hypolipidemic Drugs", sortOrder: 6, competencyCode: "PH3.6", competencyDesc: "Describe statins and other lipid-lowering agents" },
  ],
  "PH-MOD-04": [
    { code: "PH-MOD-04-TOP-01", name: "General & Local Anesthetics", sortOrder: 1, competencyCode: "PH4.1", competencyDesc: "Describe general and local anesthetics" },
    { code: "PH-MOD-04-TOP-02", name: "Sedatives & Hypnotics", sortOrder: 2, competencyCode: "PH4.2", competencyDesc: "Describe benzodiazepines, barbiturates, and newer hypnotics" },
    { code: "PH-MOD-04-TOP-03", name: "Antiepileptic Drugs", sortOrder: 3, competencyCode: "PH4.3", competencyDesc: "Describe drugs for seizure disorders" },
    { code: "PH-MOD-04-TOP-04", name: "Antipsychotics & Antidepressants", sortOrder: 4, competencyCode: "PH4.4", competencyDesc: "Describe neuroleptics, SSRIs, TCAs, and mood stabilizers" },
    { code: "PH-MOD-04-TOP-05", name: "Opioid Analgesics", sortOrder: 5, competencyCode: "PH4.5", competencyDesc: "Describe opioids: morphine, fentanyl, and antagonists" },
    { code: "PH-MOD-04-TOP-06", name: "Anti-Parkinsonism Drugs", sortOrder: 6, competencyCode: "PH4.6", competencyDesc: "Describe levodopa, dopamine agonists, and anticholinergics" },
  ],
  "PH-MOD-05": [
    { code: "PH-MOD-05-TOP-01", name: "Penicillins & Cephalosporins", sortOrder: 1, competencyCode: "PH5.1", competencyDesc: "Describe beta-lactam antibiotics" },
    { code: "PH-MOD-05-TOP-02", name: "Aminoglycosides, Macrolides & Quinolones", sortOrder: 2, competencyCode: "PH5.2", competencyDesc: "Describe protein synthesis inhibitors and fluoroquinolones" },
    { code: "PH-MOD-05-TOP-03", name: "Antitubercular Drugs", sortOrder: 3, competencyCode: "PH5.3", competencyDesc: "Describe ATT: first-line and second-line drugs, DOTS" },
    { code: "PH-MOD-05-TOP-04", name: "Antimalarial Drugs", sortOrder: 4, competencyCode: "PH5.4", competencyDesc: "Describe chloroquine, ACT, and antimalarial drug resistance" },
    { code: "PH-MOD-05-TOP-05", name: "Antifungal & Antiviral Drugs", sortOrder: 5, competencyCode: "PH5.5", competencyDesc: "Describe antifungals and antiretroviral therapy" },
    { code: "PH-MOD-05-TOP-06", name: "Anthelmintics & Antiprotozoals", sortOrder: 6, competencyCode: "PH5.6", competencyDesc: "Describe drugs for worm infestations and protozoal infections" },
  ],
  "PH-MOD-06": [
    { code: "PH-MOD-06-TOP-01", name: "Histamine & Antihistamines", sortOrder: 1, competencyCode: "PH6.1", competencyDesc: "Describe H1 and H2 blockers" },
    { code: "PH-MOD-06-TOP-02", name: "NSAIDs & Antipyretics", sortOrder: 2, competencyCode: "PH6.2", competencyDesc: "Describe aspirin, paracetamol, ibuprofen, and COX-2 inhibitors" },
    { code: "PH-MOD-06-TOP-03", name: "Drugs for Gout", sortOrder: 3, competencyCode: "PH6.3", competencyDesc: "Describe colchicine, allopurinol, and uricosurics" },
    { code: "PH-MOD-06-TOP-04", name: "Immunosuppressants", sortOrder: 4, competencyCode: "PH6.4", competencyDesc: "Describe cyclosporine, methotrexate, and biologics" },
  ],
  "PH-MOD-07": [
    { code: "PH-MOD-07-TOP-01", name: "Insulin & Oral Hypoglycemics", sortOrder: 1, competencyCode: "PH7.1", competencyDesc: "Describe insulin types and oral antidiabetic drugs" },
    { code: "PH-MOD-07-TOP-02", name: "Thyroid & Antithyroid Drugs", sortOrder: 2, competencyCode: "PH7.2", competencyDesc: "Describe drugs for hypo- and hyperthyroidism" },
    { code: "PH-MOD-07-TOP-03", name: "Corticosteroids", sortOrder: 3, competencyCode: "PH7.3", competencyDesc: "Describe glucocorticoids and mineralocorticoids" },
    { code: "PH-MOD-07-TOP-04", name: "Sex Hormones & Contraceptives", sortOrder: 4, competencyCode: "PH7.4", competencyDesc: "Describe estrogens, progestins, androgens, and oral contraceptives" },
  ],
  "PH-MOD-08": [
    { code: "PH-MOD-08-TOP-01", name: "GI Pharmacology", sortOrder: 1, competencyCode: "PH8.1", competencyDesc: "Describe antiulcer drugs, antiemetics, laxatives, antidiarrheals" },
    { code: "PH-MOD-08-TOP-02", name: "Respiratory Pharmacology", sortOrder: 2, competencyCode: "PH8.2", competencyDesc: "Describe bronchodilators, antitussives, and drugs for asthma" },
    { code: "PH-MOD-08-TOP-03", name: "Anticancer Drugs", sortOrder: 3, competencyCode: "PH8.3", competencyDesc: "Describe alkylating agents, antimetabolites, and targeted therapy" },
    { code: "PH-MOD-08-TOP-04", name: "Drugs Acting on Uterus & Blood", sortOrder: 4, competencyCode: "PH8.4", competencyDesc: "Describe oxytocics, hematinics, and plasma expanders" },
  ],
};
