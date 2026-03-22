export const communityMedicineSubject = {
  name: "Community Medicine",
  code: "CM",
  phase: "PHASE_3_PART1" as const,
  totalHours: 350,
  description: "Preventive and social medicine - epidemiology, biostatistics, national health programs",
  iconUrl: null,
  sortOrder: 11,
};

export const communityMedicineModules = [
  { code: "CM-MOD-01", name: "Epidemiology & Biostatistics", description: "Study design, measures of disease, statistical methods", estimatedHours: 55, sortOrder: 1 },
  { code: "CM-MOD-02", name: "Communicable Diseases", description: "TB, malaria, HIV, dengue, typhoid, hepatitis, rabies", estimatedHours: 60, sortOrder: 2 },
  { code: "CM-MOD-03", name: "Non-Communicable Diseases", description: "CVD, diabetes, cancer, mental health, injuries", estimatedHours: 40, sortOrder: 3 },
  { code: "CM-MOD-04", name: "Maternal & Child Health", description: "MCH services, RCH program, immunization, nutrition", estimatedHours: 50, sortOrder: 4 },
  { code: "CM-MOD-05", name: "Nutrition & Health", description: "Malnutrition, vitamins, national nutrition programs", estimatedHours: 35, sortOrder: 5 },
  { code: "CM-MOD-06", name: "Environment & Occupational Health", description: "Water, air, waste, housing, occupational hazards", estimatedHours: 50, sortOrder: 6 },
  { code: "CM-MOD-07", name: "Health Systems & National Programs", description: "Healthcare delivery, national health programs, health policy", estimatedHours: 60, sortOrder: 7 },
];

export const communityMedicineTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "CM-MOD-01": [
    { code: "CM-MOD-01-TOP-01", name: "Concepts of Health & Disease", sortOrder: 1, competencyCode: "CM1.1", competencyDesc: "Define and describe concepts of health, disease, and natural history" },
    { code: "CM-MOD-01-TOP-02", name: "Epidemiological Methods", sortOrder: 2, competencyCode: "CM1.2", competencyDesc: "Describe study designs: cross-sectional, cohort, case-control, RCT" },
    { code: "CM-MOD-01-TOP-03", name: "Measures of Disease Frequency", sortOrder: 3, competencyCode: "CM1.3", competencyDesc: "Calculate prevalence, incidence, rates, and ratios" },
    { code: "CM-MOD-01-TOP-04", name: "Biostatistics", sortOrder: 4, competencyCode: "CM1.4", competencyDesc: "Describe measures of central tendency, dispersion, and statistical tests" },
    { code: "CM-MOD-01-TOP-05", name: "Screening & Surveillance", sortOrder: 5, competencyCode: "CM1.5", competencyDesc: "Describe screening tests, sensitivity, specificity, surveillance" },
  ],
  "CM-MOD-02": [
    { code: "CM-MOD-02-TOP-01", name: "Tuberculosis", sortOrder: 1, competencyCode: "CM2.1", competencyDesc: "Describe epidemiology, prevention, and RNTCP/NTEP for TB" },
    { code: "CM-MOD-02-TOP-02", name: "Malaria & Vector-Borne Diseases", sortOrder: 2, competencyCode: "CM2.2", competencyDesc: "Describe malaria, dengue, chikungunya, and NVBDCP" },
    { code: "CM-MOD-02-TOP-03", name: "HIV/AIDS", sortOrder: 3, competencyCode: "CM2.3", competencyDesc: "Describe epidemiology of HIV and NACP" },
    { code: "CM-MOD-02-TOP-04", name: "Diarrheal Diseases & Cholera", sortOrder: 4, competencyCode: "CM2.4", competencyDesc: "Describe prevention and management of diarrheal diseases" },
    { code: "CM-MOD-02-TOP-05", name: "Hepatitis, Typhoid & Polio", sortOrder: 5, competencyCode: "CM2.5", competencyDesc: "Describe hepatitis prevention, typhoid control, and polio eradication" },
    { code: "CM-MOD-02-TOP-06", name: "Leprosy & Rabies", sortOrder: 6, competencyCode: "CM2.6", competencyDesc: "Describe leprosy elimination program and rabies prophylaxis" },
  ],
  "CM-MOD-03": [
    { code: "CM-MOD-03-TOP-01", name: "Cardiovascular Diseases & Diabetes", sortOrder: 1, competencyCode: "CM3.1", competencyDesc: "Describe epidemiology and prevention of CVD and diabetes" },
    { code: "CM-MOD-03-TOP-02", name: "Cancer Epidemiology", sortOrder: 2, competencyCode: "CM3.2", competencyDesc: "Describe cancer screening and national cancer control program" },
    { code: "CM-MOD-03-TOP-03", name: "Mental Health & Substance Abuse", sortOrder: 3, competencyCode: "CM3.3", competencyDesc: "Describe NMHP and prevention of substance abuse" },
    { code: "CM-MOD-03-TOP-04", name: "Blindness & Disability", sortOrder: 4, competencyCode: "CM3.4", competencyDesc: "Describe NPCB and disability prevention programs" },
  ],
  "CM-MOD-04": [
    { code: "CM-MOD-04-TOP-01", name: "Maternal Health & Safe Motherhood", sortOrder: 1, competencyCode: "CM4.1", competencyDesc: "Describe maternal health indicators, ANC, and JSY" },
    { code: "CM-MOD-04-TOP-02", name: "Child Health & IMR", sortOrder: 2, competencyCode: "CM4.2", competencyDesc: "Describe under-5 mortality, IMNCI, and child health programs" },
    { code: "CM-MOD-04-TOP-03", name: "Immunization", sortOrder: 3, competencyCode: "CM4.3", competencyDesc: "Describe national immunization schedule, UIP, cold chain" },
    { code: "CM-MOD-04-TOP-04", name: "Family Planning", sortOrder: 4, competencyCode: "CM4.4", competencyDesc: "Describe contraceptive methods and national family planning program" },
    { code: "CM-MOD-04-TOP-05", name: "Demography & Population", sortOrder: 5, competencyCode: "CM4.5", competencyDesc: "Describe demographic cycle, census, and population policy" },
  ],
  "CM-MOD-05": [
    { code: "CM-MOD-05-TOP-01", name: "Nutrition Assessment & Requirements", sortOrder: 1, competencyCode: "CM5.1", competencyDesc: "Describe nutritional assessment and dietary requirements" },
    { code: "CM-MOD-05-TOP-02", name: "Protein-Energy Malnutrition", sortOrder: 2, competencyCode: "CM5.2", competencyDesc: "Describe PEM, marasmus, kwashiorkor, and management" },
    { code: "CM-MOD-05-TOP-03", name: "Vitamin Deficiency Diseases", sortOrder: 3, competencyCode: "CM5.3", competencyDesc: "Describe vitamin A, D, B-complex deficiencies and programs" },
    { code: "CM-MOD-05-TOP-04", name: "National Nutrition Programs", sortOrder: 4, competencyCode: "CM5.4", competencyDesc: "Describe ICDS, Mid-Day Meal, and POSHAN Abhiyaan" },
  ],
  "CM-MOD-06": [
    { code: "CM-MOD-06-TOP-01", name: "Water Purification & Sanitation", sortOrder: 1, competencyCode: "CM6.1", competencyDesc: "Describe water purification methods and water quality standards" },
    { code: "CM-MOD-06-TOP-02", name: "Air Pollution & Waste Management", sortOrder: 2, competencyCode: "CM6.2", competencyDesc: "Describe air pollution, solid waste, and biomedical waste management" },
    { code: "CM-MOD-06-TOP-03", name: "Housing & Ventilation", sortOrder: 3, competencyCode: "CM6.3", competencyDesc: "Describe standards for housing, lighting, and ventilation" },
    { code: "CM-MOD-06-TOP-04", name: "Occupational Health & Hazards", sortOrder: 4, competencyCode: "CM6.4", competencyDesc: "Describe occupational diseases and industrial hygiene" },
  ],
  "CM-MOD-07": [
    { code: "CM-MOD-07-TOP-01", name: "Healthcare Delivery System in India", sortOrder: 1, competencyCode: "CM7.1", competencyDesc: "Describe primary, secondary, tertiary healthcare infrastructure" },
    { code: "CM-MOD-07-TOP-02", name: "National Health Mission & Ayushman Bharat", sortOrder: 2, competencyCode: "CM7.2", competencyDesc: "Describe NHM, PMJAY, and health insurance schemes" },
    { code: "CM-MOD-07-TOP-03", name: "Health Education & Behavior Change", sortOrder: 3, competencyCode: "CM7.3", competencyDesc: "Describe health education methods and IEC/BCC strategies" },
    { code: "CM-MOD-07-TOP-04", name: "Disaster Management & International Health", sortOrder: 4, competencyCode: "CM7.4", competencyDesc: "Describe disaster preparedness, WHO, and SDGs" },
  ],
};
