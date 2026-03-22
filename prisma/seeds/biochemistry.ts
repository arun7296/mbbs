export const biochemistrySubject = {
  name: "Biochemistry",
  code: "BI",
  phase: "PHASE_1" as const,
  totalHours: 300,
  description: "Chemical processes in the body - metabolism, enzymes, molecular biology, genetics",
  iconUrl: null,
  sortOrder: 3,
};

export const biochemistryModules = [
  { code: "BI-MOD-01", name: "Chemistry of Biomolecules", description: "Carbohydrates, lipids, proteins, nucleic acids structure", estimatedHours: 40, sortOrder: 1 },
  { code: "BI-MOD-02", name: "Enzymes", description: "Enzyme kinetics, regulation, coenzymes, clinical enzymology", estimatedHours: 35, sortOrder: 2 },
  { code: "BI-MOD-03", name: "Carbohydrate Metabolism", description: "Glycolysis, TCA cycle, gluconeogenesis, glycogen metabolism", estimatedHours: 50, sortOrder: 3 },
  { code: "BI-MOD-04", name: "Lipid Metabolism", description: "Beta-oxidation, ketogenesis, cholesterol, lipoproteins", estimatedHours: 45, sortOrder: 4 },
  { code: "BI-MOD-05", name: "Protein & Amino Acid Metabolism", description: "Transamination, urea cycle, amino acid catabolism", estimatedHours: 45, sortOrder: 5 },
  { code: "BI-MOD-06", name: "Molecular Biology & Genetics", description: "DNA replication, transcription, translation, gene regulation, mutations", estimatedHours: 50, sortOrder: 6 },
  { code: "BI-MOD-07", name: "Clinical & Applied Biochemistry", description: "Organ function tests, vitamins, minerals, nutrition, inborn errors", estimatedHours: 35, sortOrder: 7 },
];

export const biochemistryTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "BI-MOD-01": [
    { code: "BI-MOD-01-TOP-01", name: "Carbohydrates: Structure & Classification", sortOrder: 1, competencyCode: "BI1.1", competencyDesc: "Describe structure and classification of carbohydrates" },
    { code: "BI-MOD-01-TOP-02", name: "Lipids: Structure & Classification", sortOrder: 2, competencyCode: "BI1.2", competencyDesc: "Describe classification, structure, and functions of lipids" },
    { code: "BI-MOD-01-TOP-03", name: "Amino Acids & Proteins", sortOrder: 3, competencyCode: "BI2.1", competencyDesc: "Describe amino acid classification and protein structure" },
    { code: "BI-MOD-01-TOP-04", name: "Nucleic Acids", sortOrder: 4, competencyCode: "BI2.2", competencyDesc: "Describe structure of DNA and RNA" },
    { code: "BI-MOD-01-TOP-05", name: "Hemoglobin & Myoglobin", sortOrder: 5, competencyCode: "BI2.3", competencyDesc: "Describe structure and function of hemoglobin and myoglobin" },
  ],
  "BI-MOD-02": [
    { code: "BI-MOD-02-TOP-01", name: "Enzyme Classification & Kinetics", sortOrder: 1, competencyCode: "BI3.1", competencyDesc: "Describe enzyme classification, Michaelis-Menten kinetics" },
    { code: "BI-MOD-02-TOP-02", name: "Enzyme Inhibition & Regulation", sortOrder: 2, competencyCode: "BI3.2", competencyDesc: "Describe types of enzyme inhibition and allosteric regulation" },
    { code: "BI-MOD-02-TOP-03", name: "Coenzymes & Vitamins", sortOrder: 3, competencyCode: "BI3.3", competencyDesc: "Describe coenzymes and their vitamin precursors" },
    { code: "BI-MOD-02-TOP-04", name: "Clinical Enzymology", sortOrder: 4, competencyCode: "BI3.4", competencyDesc: "Describe diagnostic enzymes and isoenzymes" },
  ],
  "BI-MOD-03": [
    { code: "BI-MOD-03-TOP-01", name: "Glycolysis", sortOrder: 1, competencyCode: "BI4.1", competencyDesc: "Describe glycolysis pathway, regulation, and energetics" },
    { code: "BI-MOD-03-TOP-02", name: "TCA Cycle & ETC", sortOrder: 2, competencyCode: "BI4.2", competencyDesc: "Describe citric acid cycle and electron transport chain" },
    { code: "BI-MOD-03-TOP-03", name: "Gluconeogenesis", sortOrder: 3, competencyCode: "BI4.3", competencyDesc: "Describe gluconeogenesis and its regulation" },
    { code: "BI-MOD-03-TOP-04", name: "Glycogen Metabolism", sortOrder: 4, competencyCode: "BI4.4", competencyDesc: "Describe glycogenesis, glycogenolysis, and storage diseases" },
    { code: "BI-MOD-03-TOP-05", name: "HMP Shunt & Other Pathways", sortOrder: 5, competencyCode: "BI4.5", competencyDesc: "Describe pentose phosphate pathway and its significance" },
  ],
  "BI-MOD-04": [
    { code: "BI-MOD-04-TOP-01", name: "Beta-Oxidation of Fatty Acids", sortOrder: 1, competencyCode: "BI5.1", competencyDesc: "Describe beta-oxidation and its energetics" },
    { code: "BI-MOD-04-TOP-02", name: "Ketone Body Metabolism", sortOrder: 2, competencyCode: "BI5.2", competencyDesc: "Describe ketogenesis and ketolysis" },
    { code: "BI-MOD-04-TOP-03", name: "Cholesterol & Lipoproteins", sortOrder: 3, competencyCode: "BI5.3", competencyDesc: "Describe cholesterol synthesis, lipoproteins, and atherosclerosis" },
    { code: "BI-MOD-04-TOP-04", name: "Fatty Acid Synthesis", sortOrder: 4, competencyCode: "BI5.4", competencyDesc: "Describe de novo fatty acid synthesis" },
    { code: "BI-MOD-04-TOP-05", name: "Lipid Storage Diseases", sortOrder: 5, competencyCode: "BI5.5", competencyDesc: "Describe sphingolipidoses and other lipid storage disorders" },
  ],
  "BI-MOD-05": [
    { code: "BI-MOD-05-TOP-01", name: "Transamination & Deamination", sortOrder: 1, competencyCode: "BI6.1", competencyDesc: "Describe amino acid catabolism: transamination, deamination" },
    { code: "BI-MOD-05-TOP-02", name: "Urea Cycle", sortOrder: 2, competencyCode: "BI6.2", competencyDesc: "Describe urea cycle and disorders of amino acid metabolism" },
    { code: "BI-MOD-05-TOP-03", name: "Individual Amino Acid Metabolism", sortOrder: 3, competencyCode: "BI6.3", competencyDesc: "Describe metabolism of phenylalanine, tyrosine, tryptophan" },
    { code: "BI-MOD-05-TOP-04", name: "Heme Synthesis & Degradation", sortOrder: 4, competencyCode: "BI6.4", competencyDesc: "Describe heme synthesis, porphyrias, and bilirubin metabolism" },
    { code: "BI-MOD-05-TOP-05", name: "Nucleotide Metabolism", sortOrder: 5, competencyCode: "BI6.5", competencyDesc: "Describe purine and pyrimidine synthesis and catabolism" },
  ],
  "BI-MOD-06": [
    { code: "BI-MOD-06-TOP-01", name: "DNA Replication", sortOrder: 1, competencyCode: "BI7.1", competencyDesc: "Describe DNA replication, repair mechanisms, and mutations" },
    { code: "BI-MOD-06-TOP-02", name: "Transcription & RNA Processing", sortOrder: 2, competencyCode: "BI7.2", competencyDesc: "Describe transcription, post-transcriptional modifications" },
    { code: "BI-MOD-06-TOP-03", name: "Translation & Protein Synthesis", sortOrder: 3, competencyCode: "BI7.3", competencyDesc: "Describe translation, genetic code, and post-translational modifications" },
    { code: "BI-MOD-06-TOP-04", name: "Gene Regulation", sortOrder: 4, competencyCode: "BI7.4", competencyDesc: "Describe gene regulation in prokaryotes and eukaryotes" },
    { code: "BI-MOD-06-TOP-05", name: "Recombinant DNA Technology", sortOrder: 5, competencyCode: "BI7.5", competencyDesc: "Describe PCR, cloning, gene therapy, and molecular diagnostics" },
  ],
  "BI-MOD-07": [
    { code: "BI-MOD-07-TOP-01", name: "Liver Function Tests", sortOrder: 1, competencyCode: "BI8.1", competencyDesc: "Describe liver function tests and their clinical significance" },
    { code: "BI-MOD-07-TOP-02", name: "Kidney Function Tests", sortOrder: 2, competencyCode: "BI8.2", competencyDesc: "Describe renal function tests and electrolyte balance" },
    { code: "BI-MOD-07-TOP-03", name: "Vitamins: Water-Soluble & Fat-Soluble", sortOrder: 3, competencyCode: "BI8.3", competencyDesc: "Describe vitamins, their biochemical roles, and deficiency diseases" },
    { code: "BI-MOD-07-TOP-04", name: "Minerals & Trace Elements", sortOrder: 4, competencyCode: "BI8.4", competencyDesc: "Describe iron, calcium, zinc, and other mineral metabolism" },
    { code: "BI-MOD-07-TOP-05", name: "Inborn Errors of Metabolism", sortOrder: 5, competencyCode: "BI8.5", competencyDesc: "Describe common inborn errors and their biochemical basis" },
  ],
};
