export const pediatricsSubject = { name: "Pediatrics", code: "PE", phase: "PHASE_3_PART2" as const, totalHours: 300, description: "Child health - growth, development, neonatal care, childhood diseases", iconUrl: null, sortOrder: 17 };
export const pediatricsModules = [
  { code: "PE-MOD-01", name: "Growth & Development", description: "Milestones, growth monitoring, developmental delays", estimatedHours: 35, sortOrder: 1 },
  { code: "PE-MOD-02", name: "Neonatology", description: "Newborn care, resuscitation, prematurity, neonatal jaundice", estimatedHours: 50, sortOrder: 2 },
  { code: "PE-MOD-03", name: "Nutrition & Immunization", description: "Infant feeding, malnutrition, immunization schedule", estimatedHours: 40, sortOrder: 3 },
  { code: "PE-MOD-04", name: "Pediatric Infections", description: "Childhood exanthems, pneumonia, meningitis, diarrhea", estimatedHours: 45, sortOrder: 4 },
  { code: "PE-MOD-05", name: "Pediatric Cardiology & Respiratory", description: "Congenital heart disease, childhood asthma, croup", estimatedHours: 35, sortOrder: 5 },
  { code: "PE-MOD-06", name: "Pediatric Hematology & Nephrology", description: "Childhood anemias, nephrotic syndrome, UTI", estimatedHours: 35, sortOrder: 6 },
  { code: "PE-MOD-07", name: "Pediatric Neurology & Genetics", description: "Febrile seizures, cerebral palsy, genetic disorders", estimatedHours: 30, sortOrder: 7 },
  { code: "PE-MOD-08", name: "Pediatric Emergencies", description: "Dehydration, status epilepticus, poisoning, child abuse", estimatedHours: 30, sortOrder: 8 },
];
export const pediatricsTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "PE-MOD-01": [
    { code: "PE-MOD-01-TOP-01", name: "Normal Growth & Growth Charts", sortOrder: 1, competencyCode: "PE1.1", competencyDesc: "Describe normal growth patterns and growth monitoring" },
    { code: "PE-MOD-01-TOP-02", name: "Developmental Milestones", sortOrder: 2, competencyCode: "PE1.2", competencyDesc: "Describe motor, language, social developmental milestones" },
    { code: "PE-MOD-01-TOP-03", name: "Short Stature & Failure to Thrive", sortOrder: 3, competencyCode: "PE1.3", competencyDesc: "Describe approach to short stature and FTT" },
  ],
  "PE-MOD-02": [
    { code: "PE-MOD-02-TOP-01", name: "Neonatal Resuscitation", sortOrder: 1, competencyCode: "PE2.1", competencyDesc: "Describe neonatal resuscitation steps" },
    { code: "PE-MOD-02-TOP-02", name: "Prematurity & Low Birth Weight", sortOrder: 2, competencyCode: "PE2.2", competencyDesc: "Describe complications and management of prematurity" },
    { code: "PE-MOD-02-TOP-03", name: "Neonatal Jaundice", sortOrder: 3, competencyCode: "PE2.3", competencyDesc: "Describe physiological and pathological neonatal jaundice" },
    { code: "PE-MOD-02-TOP-04", name: "Neonatal Sepsis", sortOrder: 4, competencyCode: "PE2.4", competencyDesc: "Describe early and late onset neonatal sepsis" },
    { code: "PE-MOD-02-TOP-05", name: "Birth Asphyxia & HIE", sortOrder: 5, competencyCode: "PE2.5", competencyDesc: "Describe birth asphyxia and hypoxic ischemic encephalopathy" },
  ],
  "PE-MOD-03": [
    { code: "PE-MOD-03-TOP-01", name: "Breastfeeding & Complementary Feeding", sortOrder: 1, competencyCode: "PE3.1", competencyDesc: "Describe breastfeeding and complementary feeding guidelines" },
    { code: "PE-MOD-03-TOP-02", name: "Protein-Energy Malnutrition", sortOrder: 2, competencyCode: "PE3.2", competencyDesc: "Describe SAM and MAM management" },
    { code: "PE-MOD-03-TOP-03", name: "Vitamin Deficiencies", sortOrder: 3, competencyCode: "PE3.3", competencyDesc: "Describe vitamin A, D, and other deficiencies in children" },
    { code: "PE-MOD-03-TOP-04", name: "Immunization Schedule", sortOrder: 4, competencyCode: "PE3.4", competencyDesc: "Describe national immunization schedule and vaccines" },
  ],
  "PE-MOD-04": [
    { code: "PE-MOD-04-TOP-01", name: "Childhood Exanthems", sortOrder: 1, competencyCode: "PE4.1", competencyDesc: "Describe measles, rubella, chicken pox, and other rashes" },
    { code: "PE-MOD-04-TOP-02", name: "Pneumonia & ARI", sortOrder: 2, competencyCode: "PE4.2", competencyDesc: "Describe childhood pneumonia and IMNCI classification" },
    { code: "PE-MOD-04-TOP-03", name: "Diarrheal Diseases", sortOrder: 3, competencyCode: "PE4.3", competencyDesc: "Describe acute diarrhea, ORS, and zinc therapy" },
    { code: "PE-MOD-04-TOP-04", name: "Meningitis & Encephalitis", sortOrder: 4, competencyCode: "PE4.4", competencyDesc: "Describe childhood meningitis and encephalitis" },
    { code: "PE-MOD-04-TOP-05", name: "Tuberculosis in Children", sortOrder: 5, competencyCode: "PE4.5", competencyDesc: "Describe pediatric TB diagnosis and treatment" },
  ],
  "PE-MOD-05": [
    { code: "PE-MOD-05-TOP-01", name: "Congenital Heart Disease", sortOrder: 1, competencyCode: "PE5.1", competencyDesc: "Describe acyanotic and cyanotic CHD" },
    { code: "PE-MOD-05-TOP-02", name: "Rheumatic Fever in Children", sortOrder: 2, competencyCode: "PE5.2", competencyDesc: "Describe Jones criteria and RF prophylaxis" },
    { code: "PE-MOD-05-TOP-03", name: "Childhood Asthma & Croup", sortOrder: 3, competencyCode: "PE5.3", competencyDesc: "Describe childhood asthma and upper airway obstruction" },
  ],
  "PE-MOD-06": [
    { code: "PE-MOD-06-TOP-01", name: "Childhood Anemias", sortOrder: 1, competencyCode: "PE6.1", competencyDesc: "Describe iron deficiency and thalassemia in children" },
    { code: "PE-MOD-06-TOP-02", name: "Nephrotic Syndrome", sortOrder: 2, competencyCode: "PE6.2", competencyDesc: "Describe childhood nephrotic syndrome management" },
    { code: "PE-MOD-06-TOP-03", name: "AGN & UTI in Children", sortOrder: 3, competencyCode: "PE6.3", competencyDesc: "Describe post-streptococcal GN and UTI in children" },
  ],
  "PE-MOD-07": [
    { code: "PE-MOD-07-TOP-01", name: "Febrile Seizures & Epilepsy", sortOrder: 1, competencyCode: "PE7.1", competencyDesc: "Describe febrile seizures and childhood epilepsy" },
    { code: "PE-MOD-07-TOP-02", name: "Cerebral Palsy", sortOrder: 2, competencyCode: "PE7.2", competencyDesc: "Describe cerebral palsy types and management" },
    { code: "PE-MOD-07-TOP-03", name: "Down Syndrome & Genetic Disorders", sortOrder: 3, competencyCode: "PE7.3", competencyDesc: "Describe chromosomal and genetic disorders in children" },
  ],
  "PE-MOD-08": [
    { code: "PE-MOD-08-TOP-01", name: "Dehydration & Fluid Therapy", sortOrder: 1, competencyCode: "PE8.1", competencyDesc: "Describe dehydration assessment and IV fluid therapy" },
    { code: "PE-MOD-08-TOP-02", name: "Status Epilepticus", sortOrder: 2, competencyCode: "PE8.2", competencyDesc: "Describe management of status epilepticus in children" },
    { code: "PE-MOD-08-TOP-03", name: "Poisoning in Children", sortOrder: 3, competencyCode: "PE8.3", competencyDesc: "Describe common childhood poisonings and management" },
  ],
};
