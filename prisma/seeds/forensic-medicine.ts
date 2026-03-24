export const forensicMedicineSubject = {
  name: "Forensic Medicine & Toxicology",
  code: "FM",
  phase: "PHASE_3_PART1" as const,
  totalHours: 200,
  description: "Medical jurisprudence, forensic pathology, toxicology, and medicolegal aspects",
  iconUrl: null,
  sortOrder: 10,
};

export const forensicMedicineModules = [
  { code: "FM-MOD-01", name: "Medical Jurisprudence", description: "Medical ethics, consent, negligence, courts, documentation", estimatedHours: 35, sortOrder: 1 },
  { code: "FM-MOD-02", name: "Forensic Pathology", description: "Death, postmortem changes, cause of death, autopsy", estimatedHours: 40, sortOrder: 2 },
  { code: "FM-MOD-03", name: "Mechanical Injuries & Firearms", description: "Wounds, fractures, traffic injuries, firearm injuries", estimatedHours: 35, sortOrder: 3 },
  { code: "FM-MOD-04", name: "Asphyxia & Sexual Offences", description: "Types of asphyxia, hanging, drowning, sexual offences", estimatedHours: 30, sortOrder: 4 },
  { code: "FM-MOD-05", name: "Forensic Identity & Miscellaneous", description: "Identification, age estimation, DNA fingerprinting", estimatedHours: 25, sortOrder: 5 },
  { code: "FM-MOD-06", name: "Toxicology", description: "General toxicology, poisoning: corrosive, metallic, organic, drugs", estimatedHours: 35, sortOrder: 6 },
];

export const forensicMedicineTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "FM-MOD-01": [
    { code: "FM-MOD-01-TOP-01", name: "Medical Ethics & Code of Conduct", sortOrder: 1, competencyCode: "FM1.1", competencyDesc: "Describe medical ethics, MCI code of conduct" },
    { code: "FM-MOD-01-TOP-02", name: "Consent & Negligence", sortOrder: 2, competencyCode: "FM1.2", competencyDesc: "Describe informed consent, types, and medical negligence" },
    { code: "FM-MOD-01-TOP-03", name: "Medicolegal Reports & Courts", sortOrder: 3, competencyCode: "FM1.3", competencyDesc: "Describe medicolegal reports, dying declaration, courts" },
    { code: "FM-MOD-01-TOP-04", name: "IPC Sections Relevant to Medicine", sortOrder: 4, competencyCode: "FM1.4", competencyDesc: "Describe IPC sections 299-304, 309, 375, 376" },
    { code: "FM-MOD-01-TOP-05", name: "Medical Ethics & Legislation", sortOrder: 5, competencyCode: "FM1.5", competencyDesc: "Describe MTP Act, PCPNDT, organ transplant, euthanasia, POCSO" },
  ],
  "FM-MOD-02": [
    { code: "FM-MOD-02-TOP-01", name: "Death & Postmortem Changes", sortOrder: 1, competencyCode: "FM2.1", competencyDesc: "Describe signs of death and postmortem changes" },
    { code: "FM-MOD-02-TOP-02", name: "Estimation of Time Since Death", sortOrder: 2, competencyCode: "FM2.2", competencyDesc: "Describe methods to estimate time since death" },
    { code: "FM-MOD-02-TOP-03", name: "Autopsy: Medicolegal & Clinical", sortOrder: 3, competencyCode: "FM2.3", competencyDesc: "Describe types and procedure of autopsy" },
    { code: "FM-MOD-02-TOP-04", name: "Sudden & Suspicious Death", sortOrder: 4, competencyCode: "FM2.4", competencyDesc: "Describe causes and investigation of sudden death" },
  ],
  "FM-MOD-03": [
    { code: "FM-MOD-03-TOP-01", name: "Mechanical Injuries: Blunt & Sharp", sortOrder: 1, competencyCode: "FM3.1", competencyDesc: "Describe classification and medicolegal importance of injuries" },
    { code: "FM-MOD-03-TOP-02", name: "Firearm Injuries", sortOrder: 2, competencyCode: "FM3.2", competencyDesc: "Describe firearm injuries: entry/exit wounds, distance estimation" },
    { code: "FM-MOD-03-TOP-03", name: "Regional Injuries & Trauma", sortOrder: 3, competencyCode: "FM3.3", competencyDesc: "Describe head injuries, spinal injuries, and traffic accidents" },
    { code: "FM-MOD-03-TOP-04", name: "Thermal & Electrical Injuries", sortOrder: 4, competencyCode: "FM3.4", competencyDesc: "Describe burns, scalds, lightning, and electrocution" },
  ],
  "FM-MOD-04": [
    { code: "FM-MOD-04-TOP-01", name: "Asphyxia: Types & Features", sortOrder: 1, competencyCode: "FM4.1", competencyDesc: "Describe types of asphyxia and their features" },
    { code: "FM-MOD-04-TOP-02", name: "Hanging, Strangulation & Drowning", sortOrder: 2, competencyCode: "FM4.2", competencyDesc: "Differentiate hanging, strangulation, and drowning" },
    { code: "FM-MOD-04-TOP-03", name: "Sexual Offences", sortOrder: 3, competencyCode: "FM4.3", competencyDesc: "Describe sexual offences, examination, and POCSO Act" },
    { code: "FM-MOD-04-TOP-04", name: "Infanticide & Abortion", sortOrder: 4, competencyCode: "FM4.4", competencyDesc: "Describe medicolegal aspects of infanticide and abortion (MTP Act)" },
  ],
  "FM-MOD-05": [
    { code: "FM-MOD-05-TOP-01", name: "Identification of Living & Dead", sortOrder: 1, competencyCode: "FM5.1", competencyDesc: "Describe methods of personal identification" },
    { code: "FM-MOD-05-TOP-02", name: "Age Estimation", sortOrder: 2, competencyCode: "FM5.2", competencyDesc: "Describe age estimation from teeth, bones, and other features" },
    { code: "FM-MOD-05-TOP-03", name: "DNA Fingerprinting", sortOrder: 3, competencyCode: "FM5.3", competencyDesc: "Describe DNA profiling and its medicolegal applications" },
    { code: "FM-MOD-05-TOP-04", name: "Forensic Psychiatry", sortOrder: 4, competencyCode: "FM5.4", competencyDesc: "Describe Mental Health Act, criminal responsibility, fitness to plead" },
    { code: "FM-MOD-05-TOP-05", name: "Forensic Sciences", sortOrder: 5, competencyCode: "FM5.5", competencyDesc: "Describe DNA fingerprinting, ballistics, lie detection, narcoanalysis" },
  ],
  "FM-MOD-06": [
    { code: "FM-MOD-06-TOP-01", name: "General Toxicology", sortOrder: 1, competencyCode: "FM6.1", competencyDesc: "Describe general principles of poisoning and management" },
    { code: "FM-MOD-06-TOP-02", name: "Corrosive & Metallic Poisons", sortOrder: 2, competencyCode: "FM6.2", competencyDesc: "Describe acid, alkali, arsenic, lead, and mercury poisoning" },
    { code: "FM-MOD-06-TOP-03", name: "Organic & Plant Poisons", sortOrder: 3, competencyCode: "FM6.3", competencyDesc: "Describe organophosphorus, alcohol, opium, and plant poisons" },
    { code: "FM-MOD-06-TOP-04", name: "Snake Bite & Insect Stings", sortOrder: 4, competencyCode: "FM6.4", competencyDesc: "Describe snake venom types, management, and antisnake venom" },
    { code: "FM-MOD-06-TOP-05", name: "Environmental & Industrial Toxicology", sortOrder: 5, competencyCode: "FM6.5", competencyDesc: "Describe pollution, food adulteration, occupational toxicology" },
  ],
};
