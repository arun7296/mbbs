export const microbiologySubject = {
  name: "Microbiology",
  code: "MI",
  phase: "PHASE_2" as const,
  totalHours: 350,
  description: "Study of microorganisms - bacteria, viruses, fungi, parasites, and immunology",
  iconUrl: null,
  sortOrder: 6,
};

export const microbiologyModules = [
  { code: "MI-MOD-01", name: "General Microbiology", description: "Sterilization, disinfection, culture methods, staining", estimatedHours: 40, sortOrder: 1 },
  { code: "MI-MOD-02", name: "Immunology", description: "Innate and adaptive immunity, hypersensitivity, autoimmunity, vaccines", estimatedHours: 50, sortOrder: 2 },
  { code: "MI-MOD-03", name: "Bacteriology - I", description: "Gram-positive cocci, Gram-negative cocci, Gram-positive bacilli", estimatedHours: 55, sortOrder: 3 },
  { code: "MI-MOD-04", name: "Bacteriology - II", description: "Enterobacteriaceae, Mycobacteria, spirochetes, anaerobes", estimatedHours: 55, sortOrder: 4 },
  { code: "MI-MOD-05", name: "Virology", description: "DNA viruses, RNA viruses, hepatitis, HIV, emerging infections", estimatedHours: 55, sortOrder: 5 },
  { code: "MI-MOD-06", name: "Mycology & Parasitology", description: "Fungi, protozoa, helminths, ectoparasites", estimatedHours: 50, sortOrder: 6 },
  { code: "MI-MOD-07", name: "Applied & Clinical Microbiology", description: "Hospital infections, antimicrobial resistance, diagnostic methods", estimatedHours: 45, sortOrder: 7 },
];

export const microbiologyTopics: Record<string, Array<{ code: string; name: string; sortOrder: number; competencyCode: string; competencyDesc: string }>> = {
  "MI-MOD-01": [
    { code: "MI-MOD-01-TOP-01", name: "Sterilization & Disinfection", sortOrder: 1, competencyCode: "MI1.1", competencyDesc: "Describe methods of sterilization and disinfection" },
    { code: "MI-MOD-01-TOP-02", name: "Microscopy & Staining", sortOrder: 2, competencyCode: "MI1.2", competencyDesc: "Describe microscopy types and staining techniques" },
    { code: "MI-MOD-01-TOP-03", name: "Bacterial Growth & Culture", sortOrder: 3, competencyCode: "MI1.3", competencyDesc: "Describe culture media, growth curve, and identification methods" },
    { code: "MI-MOD-01-TOP-04", name: "Normal Flora & Pathogenesis", sortOrder: 4, competencyCode: "MI1.4", competencyDesc: "Describe normal microbial flora and mechanisms of pathogenesis" },
  ],
  "MI-MOD-02": [
    { code: "MI-MOD-02-TOP-01", name: "Innate Immunity", sortOrder: 1, competencyCode: "MI2.1", competencyDesc: "Describe components and mechanisms of innate immunity" },
    { code: "MI-MOD-02-TOP-02", name: "Adaptive Immunity", sortOrder: 2, competencyCode: "MI2.2", competencyDesc: "Describe humoral and cell-mediated immunity" },
    { code: "MI-MOD-02-TOP-03", name: "Antigens & Antibodies", sortOrder: 3, competencyCode: "MI2.3", competencyDesc: "Describe antigen types and immunoglobulin structure and function" },
    { code: "MI-MOD-02-TOP-04", name: "Hypersensitivity Reactions", sortOrder: 4, competencyCode: "MI2.4", competencyDesc: "Describe types I-IV hypersensitivity with examples" },
    { code: "MI-MOD-02-TOP-05", name: "Autoimmunity & Immunodeficiency", sortOrder: 5, competencyCode: "MI2.5", competencyDesc: "Describe autoimmune diseases and immunodeficiency disorders" },
    { code: "MI-MOD-02-TOP-06", name: "Vaccines & Immunization", sortOrder: 6, competencyCode: "MI2.6", competencyDesc: "Describe types of vaccines and national immunization schedule" },
  ],
  "MI-MOD-03": [
    { code: "MI-MOD-03-TOP-01", name: "Staphylococcus", sortOrder: 1, competencyCode: "MI3.1", competencyDesc: "Describe Staphylococcus aureus and coagulase-negative staphylococci" },
    { code: "MI-MOD-03-TOP-02", name: "Streptococcus & Pneumococcus", sortOrder: 2, competencyCode: "MI3.2", competencyDesc: "Describe Group A, B streptococci and Streptococcus pneumoniae" },
    { code: "MI-MOD-03-TOP-03", name: "Neisseria", sortOrder: 3, competencyCode: "MI3.3", competencyDesc: "Describe N. meningitidis and N. gonorrhoeae" },
    { code: "MI-MOD-03-TOP-04", name: "Corynebacterium & Bacillus", sortOrder: 4, competencyCode: "MI3.4", competencyDesc: "Describe C. diphtheriae, B. anthracis, and Listeria" },
    { code: "MI-MOD-03-TOP-05", name: "Clostridium", sortOrder: 5, competencyCode: "MI3.5", competencyDesc: "Describe C. tetani, C. botulinum, C. perfringens, C. difficile" },
  ],
  "MI-MOD-04": [
    { code: "MI-MOD-04-TOP-01", name: "Enterobacteriaceae & E. coli", sortOrder: 1, competencyCode: "MI4.1", competencyDesc: "Describe E. coli, Salmonella, Shigella, and Klebsiella" },
    { code: "MI-MOD-04-TOP-02", name: "Vibrio, Campylobacter & Helicobacter", sortOrder: 2, competencyCode: "MI4.2", competencyDesc: "Describe V. cholerae, Campylobacter, and H. pylori" },
    { code: "MI-MOD-04-TOP-03", name: "Mycobacterium tuberculosis", sortOrder: 3, competencyCode: "MI4.3", competencyDesc: "Describe M. tuberculosis and M. leprae" },
    { code: "MI-MOD-04-TOP-04", name: "Spirochetes", sortOrder: 4, competencyCode: "MI4.4", competencyDesc: "Describe Treponema, Leptospira, and Borrelia" },
    { code: "MI-MOD-04-TOP-05", name: "Pseudomonas & Other Non-fermenters", sortOrder: 5, competencyCode: "MI4.5", competencyDesc: "Describe Pseudomonas aeruginosa and hospital-acquired infections" },
  ],
  "MI-MOD-05": [
    { code: "MI-MOD-05-TOP-01", name: "General Virology", sortOrder: 1, competencyCode: "MI5.1", competencyDesc: "Describe viral structure, classification, and replication" },
    { code: "MI-MOD-05-TOP-02", name: "Herpes & Pox Viruses", sortOrder: 2, competencyCode: "MI5.2", competencyDesc: "Describe HSV, VZV, CMV, EBV, and poxviruses" },
    { code: "MI-MOD-05-TOP-03", name: "Hepatitis Viruses", sortOrder: 3, competencyCode: "MI5.3", competencyDesc: "Describe hepatitis A, B, C, D, E viruses" },
    { code: "MI-MOD-05-TOP-04", name: "HIV & Retroviruses", sortOrder: 4, competencyCode: "MI5.4", competencyDesc: "Describe HIV pathogenesis, diagnosis, and prevention" },
    { code: "MI-MOD-05-TOP-05", name: "Respiratory & Enteric Viruses", sortOrder: 5, competencyCode: "MI5.5", competencyDesc: "Describe influenza, SARS-CoV-2, rotavirus, and poliovirus" },
    { code: "MI-MOD-05-TOP-06", name: "Arboviruses & Rabies", sortOrder: 6, competencyCode: "MI5.6", competencyDesc: "Describe dengue, chikungunya, Japanese encephalitis, and rabies" },
  ],
  "MI-MOD-06": [
    { code: "MI-MOD-06-TOP-01", name: "Superficial & Deep Mycoses", sortOrder: 1, competencyCode: "MI6.1", competencyDesc: "Describe dermatophytes, Candida, Aspergillus, Cryptococcus" },
    { code: "MI-MOD-06-TOP-02", name: "Protozoa: Intestinal & Blood", sortOrder: 2, competencyCode: "MI6.2", competencyDesc: "Describe Entamoeba, Giardia, Plasmodium, Leishmania" },
    { code: "MI-MOD-06-TOP-03", name: "Helminths: Nematodes", sortOrder: 3, competencyCode: "MI6.3", competencyDesc: "Describe roundworms: Ascaris, hookworm, Strongyloides, filariae" },
    { code: "MI-MOD-06-TOP-04", name: "Helminths: Cestodes & Trematodes", sortOrder: 4, competencyCode: "MI6.4", competencyDesc: "Describe tapeworms and flukes" },
  ],
  "MI-MOD-07": [
    { code: "MI-MOD-07-TOP-01", name: "Hospital Infections & Bioterrorism", sortOrder: 1, competencyCode: "MI7.1", competencyDesc: "Describe healthcare-associated infections and biosafety" },
    { code: "MI-MOD-07-TOP-02", name: "Antimicrobial Resistance", sortOrder: 2, competencyCode: "MI7.2", competencyDesc: "Describe mechanisms of antimicrobial resistance: MRSA, ESBL, MDR-TB" },
    { code: "MI-MOD-07-TOP-03", name: "Diagnostic Microbiology", sortOrder: 3, competencyCode: "MI7.3", competencyDesc: "Describe specimen collection, culture, serology, and molecular methods" },
  ],
};
