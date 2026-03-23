export const microMcqs2 = [
  {
    type: "single-best-answer" as const,
    stem: "A 45-year-old diabetic presents with productive cough and hemoptysis. Culture from sputum grows Aspergillus fumigatus. What is the probable diagnosis?",
    clinicalVignette: "Immunocompromised patient with chronic lung cavitation on chest X-ray.",
    options: [
      { id: "a", text: "Aspergilloma (fungal ball in pre-existing cavity)", isCorrect: true },
      { id: "b", text: "Acute aspergillosis", isCorrect: false },
      { id: "c", text: "Aspergillus pneumonia", isCorrect: false },
      { id: "d", text: "Allergic bronchopulmonary aspergillosis", isCorrect: false }
    ],
    explanation: "Aspergilloma occurs when Aspergillus colonizes pre-existing lung cavities (TB, bronchiectasis). Presents with hemoptysis. CXR shows fungal ball in cavity. Allergic form (ABPA) in asthmatics; acute invasive aspergillosis in severely immunocompromised.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Mycology", "Opportunistic Infection", "CBME-Competency-001"],
    subjectCode: "MI",
    topicCode: "MI-MOD-MYCO-ASPERGILLUS",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker's Microbiology"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which bacterium is the most common cause of community-acquired pneumonia (CAP) in adults?",
    clinicalVignette: "Healthy 35-year-old with fever, cough, and lobar infiltrate on CXR.",
    options: [
      { id: "a", text: "Streptococcus pneumoniae", isCorrect: true },
      { id: "b", text: "Pseudomonas aeruginosa", isCorrect: false },
      { id: "c", text: "Staphylococcus aureus", isCorrect: false },
      { id: "d", text: "Enterobacteriaceae", isCorrect: false }
    ],
    explanation: "S. pneumoniae most common CAP in adults. Gram-positive diplococci, alpha-hemolytic, bile soluble. Presents with sudden fever, cough, rusty sputum. PSV13 and PPSV23 vaccines available. P. aeruginosa in hospitalized/ventilated patients.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Bacteriology", "Respiratory Infection", "CBME-Competency-002"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-PNEUMO",
    textbookRefs: ["Baveja's Microbiology", "Textbook of Microbiology by Ananthanarayan"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the primary mechanism of antibiotic resistance in methicillin-resistant Staphylococcus aureus (MRSA)?",
    clinicalVignette: "Hospital-acquired infection with organism resistant to beta-lactam antibiotics.",
    options: [
      { id: "a", text: "Altered penicillin-binding proteins (mecA gene encoding PBP2a)", isCorrect: true },
      { id: "b", text: "Production of beta-lactamase enzyme", isCorrect: false },
      { id: "c", text: "Efflux pump mechanism only", isCorrect: false },
      { id: "d", text: "Target site modification only", isCorrect: false }
    ],
    explanation: "MRSA carries mecA gene encoding penicillin-binding protein 2a (PBP2a) with low affinity for beta-lactams. This allows cell wall synthesis even with antibiotic present. Different from beta-lactamase production. Vancomycin is drug of choice for MRSA.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Antibiotic Resistance", "Bacteriology", "CBME-Competency-003"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-MRSA",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker's Textbook"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which organism causes 'pseudomembranous colitis' associated with antibiotic use?",
    clinicalVignette: "Patient with severe watery diarrhea after prolonged antibiotic therapy for UTI.",
    options: [
      { id: "a", text: "Clostridioides difficile (formerly C. difficile)", isCorrect: true },
      { id: "b", text: "Vibrio cholerae", isCorrect: false },
      { id: "c", text: "Shigella species", isCorrect: false },
      { id: "d", text: "Campylobacter jejuni", isCorrect: false }
    ],
    explanation: "C. difficile produces toxins (A & B) causing pseudomembranous colitis. Risk factors: antibiotic use (clindamycin highest risk), advanced age, immunosuppression. Diagnosis: toxin detection/culture. Treatment: metronidazole (mild-moderate) or vancomycin (severe).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Bacteriology", "Healthcare-associated Infection", "Toxin-mediated Disease", "CBME-Competency-004"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-CDI",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the vector for transmission of Dengue virus?",
    clinicalVignette: "Epidemic of fever in urban area during monsoon season.",
    options: [
      { id: "a", text: "Aedes aegypti mosquito (daytime biting)", isCorrect: true },
      { id: "b", text: "Anopheles mosquito (night biting)", isCorrect: false },
      { id: "c", text: "Culex mosquito", isCorrect: false },
      { id: "d", text: "Direct contact with infected person", isCorrect: false }
    ],
    explanation: "Dengue transmitted by Aedes aegypti (anthropophilic, urban, daytime biter). Virus is arbovirus (arthropod-borne), replicated in mosquito gut. No vertical transmission to eggs. Control via mosquito population reduction and elimination of breeding sites.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Virology", "Vector-borne Disease", "CBME-Competency-005"],
    subjectCode: "MI",
    topicCode: "MI-MOD-VIRO-DENGUE",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which parasite causes cerebral malaria with potential mortality if untreated?",
    clinicalVignette: "Severe malaria patient with altered mental status and high parasite load.",
    options: [
      { id: "a", text: "Plasmodium falciparum (cytoadherence and sequestration)", isCorrect: true },
      { id: "b", text: "Plasmodium vivax", isCorrect: false },
      { id: "c", text: "Plasmodium malariae", isCorrect: false },
      { id: "d", text: "Plasmodium ovale", isCorrect: false }
    ],
    explanation: "P. falciparum most severe malaria. Rosetting, cytoadherence, sequestration in cerebral vessels cause cerebral malaria. High mortality (15-20%) even with treatment. P. vivax/ovale have hypnozoites (liver stage relapse). P. malariae quartan fever (q72h).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Parasitology", "Malaria", "Severe Infection", "CBME-Competency-006"],
    subjectCode: "MI",
    topicCode: "MI-MOD-PARA-MALARIA",
    textbookRefs: ["Baveja's Parasitology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the primary route of HIV transmission globally?",
    clinicalVignette: "Public health official developing HIV prevention program.",
    options: [
      { id: "a", text: "Sexual contact (both heterosexual and homosexual)", isCorrect: true },
      { id: "b", text: "Blood transfusion only", isCorrect: false },
      { id: "c", text: "Mother-to-child transmission only", isCorrect: false },
      { id: "d", text: "Occupational needle stick injury only", isCorrect: false }
    ],
    explanation: "Sexual contact accounts for ~80% HIV transmission globally. Other routes: vertical transmission (mother-to-child, ~40% if untreated), blood transfusion (if unscreened), occupational exposure. Condoms, ART, PrEP, PMTCT reduce transmission.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Virology", "Epidemiology", "Prevention", "CBME-Competency-007"],
    subjectCode: "MI",
    topicCode: "MI-MOD-VIRO-HIV",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which organism is responsible for most cases of bacterial meningitis in infants <3 months?",
    clinicalVignette: "Newborn with fever and bulging fontanelle. CSF analysis ordered.",
    options: [
      { id: "a", text: "Group B Streptococcus (GBS) and gram-negative enterobacteria", isCorrect: true },
      { id: "b", text: "Neisseria meningitidis only", isCorrect: false },
      { id: "c", text: "Streptococcus pneumoniae only", isCorrect: false },
      { id: "d", text: "Listeria monocytogenes only", isCorrect: false }
    ],
    explanation: "Neonatal meningitis (0-3 months): GBS (early-onset, vertical transmission) and gram-negative rods (E. coli K1, Klebsiella, Enterobacter). Age 3-18 months: N. meningitidis and S. pneumoniae most common. Empiric therapy covers both with ampicillin + gentamicin + cephalosporin.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Bacteriology", "Pediatric Infection", "Meningitis", "CBME-Competency-008"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-MENINGITIS",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the characteristic finding in tuberculosis transmission?",
    clinicalVignette: "Contact tracing initiated after identification of TB case in family.",
    options: [
      { id: "a", text: "Droplet nuclei (1-5 μm) from respiratory secretions of active TB patient", isCorrect: true },
      { id: "b", text: "Direct contact with TB patient's skin", isCorrect: false },
      { id: "c", text: "Fecal-oral route", isCorrect: false },
      { id: "d", text: "Airborne particles >10 μm", isCorrect: false }
    ],
    explanation: "TB transmission via droplet nuclei (1-5 μm aerosol particles). Single cough produces ~1000 nuclei. Inhaled particles reach alveoli where infection begins. Other routes: ingestion (unpasteurized milk), skin inoculation (rare). Infectivity highest first 2 weeks of therapy.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Bacteriology", "TB Epidemiology", "Infection Control", "CBME-Competency-009"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-TB",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which enzyme produced by Vibrio cholerae is responsible for severe diarrhea?",
    clinicalVignette: "Epidemic of watery diarrhea in cholera outbreak.",
    options: [
      { id: "a", text: "Cholera toxin (increases cAMP, chloride secretion)", isCorrect: true },
      { id: "b", text: "Hemolysin", isCorrect: false },
      { id: "c", text: "Protease", isCorrect: false },
      { id: "d", text: "Hyaluronidase", isCorrect: false }
    ],
    explanation: "Cholera toxin (AB enterotoxin) ADP-ribosylates Gs protein, increasing cAMP. Causes massive fluid secretion into intestinal lumen (rice-water diarrhea). Not inflammatory, no tissue invasion. Mortality from dehydration. ORT gold standard treatment.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Bacteriology", "Virulence Factors", "Toxin-mediated Disease", "CBME-Competency-010"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-CHOLERA",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which is the most common fungal cause of meningitis in severely immunocompromised patients?",
    clinicalVignette: "AIDS patient (CD4 <100) with subacute meningitis, India.",
    options: [
      { id: "a", text: "Cryptococcus neoformans", isCorrect: true },
      { id: "b", text: "Coccidioides immitis", isCorrect: false },
      { id: "c", text: "Candida albicans", isCorrect: false },
      { id: "d", text: "Aspergillus fumigatus", isCorrect: false }
    ],
    explanation: "Cryptococcal meningitis most common fungal CNS infection in HIV (CD4 <100). Presents subacutely. CSF India ink shows encapsulated yeast. Diagnosis: cryptococcal antigen (85% sensitive), culture. Treatment: amphotericin B + flucytosine, then fluconazole.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Mycology", "Opportunistic Infection", "CNS Infection", "CBME-Competency-011"],
    subjectCode: "MI",
    topicCode: "MI-MOD-MYCO-CRYPTO",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the primary mechanism of innate immunity against viral infections?",
    clinicalVignette: "Host response to acute viral infection.",
    options: [
      { id: "a", text: "Interferon (IFN-α/β) inhibits viral replication in uninfected cells", isCorrect: true },
      { id: "b", text: "Antibody production only", isCorrect: false },
      { id: "c", text: "Memory T cell response", isCorrect: false },
      { id: "d", text: "Complement activation alone", isCorrect: false }
    ],
    explanation: "Type I interferons (IFN-α/β) first line defense against viruses. Produced by infected cells, induce antiviral state in neighboring cells. Activate NK cells, promote Th1 response. Adaptive immunity (antibodies, T cells) develops later but more specific.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Immunology", "Antiviral Response", "CBME-Competency-012"],
    subjectCode: "MI",
    topicCode: "MI-MOD-IMMUNO-IFN",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which organism causes chronic granulomatous infection and is particularly associated with swimming pools and water exposure?",
    clinicalVignette: "Child with chronic pulmonary infection and granulomatous inflammation.",
    options: [
      { id: "a", text: "Mycobacterium avium complex (MAC)", isCorrect: true },
      { id: "b", text: "Mycobacterium tuberculosis", isCorrect: false },
      { id: "c", text: "Mycobacterium leprae", isCorrect: false },
      { id: "d", text: "Mycobacterium abscessus", isCorrect: false }
    ],
    explanation: "MAC (M. avium, M. intracellulare) nontuberculous mycobacteria found in water/soil. Cause pulmonary infection in immunocompromised (CD4 <50). Usually slow-growing, requires multiple drugs. MAC prophylaxis with azithromycin in advanced AIDS.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Mycobacteriology", "Opportunistic Infection", "Water-borne", "CBME-Competency-013"],
    subjectCode: "MI",
    topicCode: "MI-MOD-MYCO-MAC",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which parasite causes intestinal infection with 'proglottids' in stool, a sign of heavy infection?",
    clinicalVignette: "Patient with abdominal discomfort and presence of motile segments in feces.",
    options: [
      { id: "a", text: "Taenia saginata (beef tapeworm)", isCorrect: true },
      { id: "b", text: "Ascaris lumbricoides", isCorrect: false },
      { id: "c", text: "Hookworm", isCorrect: false },
      { id: "d", text: "Strongyloides stercoralis", isCorrect: false }
    ],
    explanation: "Taenia (tapeworms) have segmented body, proglottids contain eggs. Taenia saginata (beef, acquired from undercooked beef) vs. T. solium (pork, can cause neurocysticercosis). Proglottids motile in feces = heavy infection indicator. Single-dose niclosamide effective.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Parasitology", "Cestodes", "Intestinal Infection", "CBME-Competency-014"],
    subjectCode: "MI",
    topicCode: "MI-MOD-PARA-TAENIA",
    textbookRefs: ["Baveja's Parasitology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the most common cause of community-acquired urinary tract infection (UTI)?",
    clinicalVignette: "Young female with dysuria and pyuria on urinalysis.",
    options: [
      { id: "a", text: "Escherichia coli (UROPATHOGENIC strains with P fimbriae)", isCorrect: true },
      { id: "b", text: "Staphylococcus saprophyticus", isCorrect: false },
      { id: "c", text: "Proteus mirabilis", isCorrect: false },
      { id: "d", text: "Pseudomonas aeruginosa", isCorrect: false }
    ],
    explanation: "UPEC (uropathogenic E. coli) causes ~80% uncomplicated UTI. Has P fimbriae for uroepithelial adhesion. S. saprophyticus common in sexually active young women. P. mirabilis (urease producer) causes complicated UTI/catheter-associated. P. aeruginosa in hospitalized/immunocompromised.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Bacteriology", "Urinary Tract Infection", "Virulence Factors", "CBME-Competency-015"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-UTI",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which organism causes 'toxic shock syndrome' with rapid systemic spread and multiple organ failure?",
    clinicalVignette: "Young woman with sudden onset fever, rash, hypotension, and multi-organ dysfunction.",
    options: [
      { id: "a", text: "Streptococcus pyogenes (Group A Streptococcus, GAS) with streptococcal pyrogenic exotoxins", isCorrect: true },
      { id: "b", text: "Staphylococcus aureus TSST-1 toxin", isCorrect: false },
      { id: "c", text: "Vibrio vulnificus", isCorrect: false },
      { id: "d", text: "Neisseria meningitidis", isCorrect: false }
    ],
    explanation: "Group A Strep TSS: streptococcal pyrogenic exotoxins (SPEs) trigger massive cytokine release. M protein prevents opsonization. Rapid progression, high mortality (30-70%). S. aureus TSS historically (tampon use), now skin infections.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Bacteriology", "Toxin-mediated Disease", "Streptococcus", "CBME-Competency-016"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-GAS-TSS",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which antibiotic class is effective against atypical pneumonia pathogens (Legionella, Mycoplasma, Chlamydia)?",
    clinicalVignette: "Community pneumonia not responding to beta-lactam antibiotics.",
    options: [
      { id: "a", text: "Macrolides (erythromycin, azithromycin, clarithromycin)", isCorrect: true },
      { id: "b", text: "Beta-lactams (amoxicillin, cephalosporin)", isCorrect: false },
      { id: "c", text: "Aminoglycosides", isCorrect: false },
      { id: "d", text: "Tetracyclines only", isCorrect: false }
    ],
    explanation: "Macrolides first-line for atypical CAP pathogens. Legionella (facultative intracellular) requires macrolide or fluoroquinolone. Mycoplasma/Chlamydia lack cell wall (intracellular). Macrolides block protein synthesis. Fluoroquinolones also effective.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Bacteriology", "Antibiotic Therapy", "Atypical Pneumonia", "CBME-Competency-017"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-ATYPICAL",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which is the most common nosocomial fungal infection?",
    clinicalVignette: "Hospitalized patient with fever, central line in place, on broad-spectrum antibiotics.",
    options: [
      { id: "a", text: "Candida albicans (biofilm formation on catheters)", isCorrect: true },
      { id: "b", text: "Aspergillus fumigatus", isCorrect: false },
      { id: "c", text: "Cryptococcus neoformans", isCorrect: false },
      { id: "d", text: "Pneumocystis jirovecii", isCorrect: false }
    ],
    explanation: "Candida most common nosocomial fungal infection. Risk factors: central lines, broad-spectrum antibiotics (normal flora disruption), immunosuppression, prolonged ICU stay. Forms biofilms on catheters. C. albicans ~50%, increasingly replaced by non-albicans species (C. auris, C. glabrata).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Mycology", "Healthcare-associated Infection", "Candidiasis", "CBME-Competency-018"],
    subjectCode: "MI",
    topicCode: "MI-MOD-MYCO-CANDIDA",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the principal virulence factor of Vibrio cholerae in pathogenesis?",
    clinicalVignette: "Understanding mechanism of severe diarrhea in cholera.",
    options: [
      { id: "a", text: "Cholera enterotoxin causing increased intestinal cAMP and fluid secretion", isCorrect: true },
      { id: "b", text: "Invasion of gut epithelium", isCorrect: false },
      { id: "c", text: "Formation of toxin-induced necrosis", isCorrect: false },
      { id: "d", text: "Systemic dissemination and bacteremia", isCorrect: false }
    ],
    explanation: "Cholera toxin (CTX) is AB5 toxin. A subunit ADP-ribosylates Gs protein → increased adenylate cyclase → elevated cAMP → chloride secretion and fluid loss (rice-water diarrhea). No tissue invasion, toxin-only disease. Severe dehydration if untreated.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Bacteriology", "Pathogenesis", "Toxin-mediated Disease", "CBME-Competency-019"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-CHOLERA-VF",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which gram-negative organism is commonly associated with gastroenteritis in poultry and causes invasive disease in immunocompromised?",
    clinicalVignette: "AIDS patient with CD4 <200 presenting with recurrent bacteremia and gastroenteritis.",
    options: [
      { id: "a", text: "Campylobacter jejuni", isCorrect: true },
      { id: "b", text: "Salmonella typhi", isCorrect: false },
      { id: "c", text: "Shigella flexneri", isCorrect: false },
      { id: "d", text: "Enteroinvasive E. coli", isCorrect: false }
    ],
    explanation: "Campylobacter jejuni most common bacterial gastroenteritis in developed countries. Spiral motile gram-negative. Acquired from poultry. Causes watery/bloody diarrhea. In severe immunosuppression (CD4 <200), causes bacteremia/systemic infection. Guillain-Barré syndrome association.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Bacteriology", "Gastroenteritis", "Foodborne Infection", "CBME-Competency-020"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-CAMPYLO",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which parasite is transmitted by reduviid bug (kissing bug) and causes Chagas disease?",
    clinicalVignette: "Traveler to Latin America with fever, myocarditis, and megaesophagus.",
    options: [
      { id: "a", text: "Trypanosoma cruzi", isCorrect: true },
      { id: "b", text: "Trypanosoma brucei", isCorrect: false },
      { id: "c", text: "Leishmania donovani", isCorrect: false },
      { id: "d", text: "Plasmodium vivax", isCorrect: false }
    ],
    explanation: "Trypanosoma cruzi causes Chagas disease in Central/South America. Transmitted by reduviid bug feces. Acute phase: fever, myositis, lymphadenopathy. Chronic: cardiomyopathy (sudden death), megaesophagus (achalasia-like), megacolon. Diagnosis: serological.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Parasitology", "Protozoa", "Vector-borne Disease", "CBME-Competency-021"],
    subjectCode: "MI",
    topicCode: "MI-MOD-PARA-TRYP-CRUZI",
    textbookRefs: ["Baveja's Parasitology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which acid-fast bacillus causes leprosy and is transmitted via respiratory droplets from untreated patients?",
    clinicalVignette: "Patient with hypopigmented patches, peripheral nerve thickening, and diminished sensation.",
    options: [
      { id: "a", text: "Mycobacterium leprae", isCorrect: true },
      { id: "b", text: "Mycobacterium tuberculosis", isCorrect: false },
      { id: "c", text: "Mycobacterium marinum", isCorrect: false },
      { id: "d", text: "Mycobacterium ulcerans", isCorrect: false }
    ],
    explanation: "M. leprae causes leprosy (Hansen's disease). Obligate intracellular, slow-growing. Respiratory transmission. Clinical forms: tuberculoid (strong immunity, few lesions) to lepromatous (weak immunity, extensive lesions). MDT (multi-drug therapy) curative. Intradermal Lepromin test assesses immunity.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Mycobacteriology", "Leprosy", "Transmission", "CBME-Competency-022"],
    subjectCode: "MI",
    topicCode: "MI-MOD-MYCO-LEPRAE",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which is the most effective vaccine for preventing hepatitis B infection and its chronic complications?",
    clinicalVignette: "Immunization program administrator selecting vaccines for universal childhood immunization.",
    options: [
      { id: "a", text: "Hepatitis B vaccine (recombinant HBsAg)", isCorrect: true },
      { id: "b", text: "Hepatitis A vaccine only", isCorrect: false },
      { id: "c", text: "No effective vaccine available", isCorrect: false },
      { id: "d", text: "Live attenuated vaccine", isCorrect: false }
    ],
    explanation: "Hepatitis B vaccine (recombinant HBsAg) highly effective (95% if 3-dose series). Prevents acute hepatitis B and chronic infection (cirrhosis, HCC). Best given at birth, with boosters at 6 and 12 months. Anti-HBs >10 mIU/mL indicates protection.",
    difficulty: "EASY" as const,
    bloomsLevel: "REMEMBER" as const,
    examTags: ["Virology", "Immunization", "Prevention", "CBME-Competency-023"],
    subjectCode: "MI",
    topicCode: "MI-MOD-VIRO-HBV-VAC",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which organism causes 'varicella-zoster' infection with characteristic vesicular rash in dermatomal distribution in adults?",
    clinicalVignette: "Immunocompromised patient with painful vesicular rash in dermatomal pattern (shingles).",
    options: [
      { id: "a", text: "Varicella-zoster virus (reactivation of latent VZV)", isCorrect: true },
      { id: "b", text: "Herpes simplex virus (HSV)", isCorrect: false },
      { id: "c", text: "Enterovirus", isCorrect: false },
      { id: "d", text: "Variola virus", isCorrect: false }
    ],
    explanation: "VZV causes varicella (chickenpox) as primary infection, then latent in dorsal root ganglia. Reactivation causes herpes zoster (shingles) - painful vesicular rash in single dermatomal distribution. Risk factors: age, immunosuppression. Antiviral therapy (acyclovir, valacyclovir) effective.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Virology", "Herpesvirus", "Infection", "CBME-Competency-024"],
    subjectCode: "MI",
    topicCode: "MI-MOD-VIRO-VZV",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which toxin produced by Bordetella pertussis causes whooping cough with characteristic paroxysmal cough?",
    clinicalVignette: "Infant with severe paroxysmal cough ending in 'whoop' and leukocytosis.",
    options: [
      { id: "a", text: "Pertussis toxin (inactivates Gi protein, increases cAMP)", isCorrect: true },
      { id: "b", text: "Diphtheria toxin", isCorrect: false },
      { id: "c", text: "Tetanospasmin", isCorrect: false },
      { id: "d", text: "Cholera toxin", isCorrect: false }
    ],
    explanation: "Bordetella pertussis produces pertussis toxin (PT), ADP-ribosylates Gi protein, preventing inhibition of adenylate cyclase. Elevated cAMP → increased mucus, cough, paroxysms. Also produces tracheal cytotoxin (TCT) causing epithelial damage. Prevention via DTaP vaccine.",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Bacteriology", "Toxin-mediated Disease", "Pertussis", "CBME-Competency-025"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-PERTUSSIS",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which nematode causes 'river blindness' (onchocerciasis) and is transmitted by Simulium fly?",
    clinicalVignette: "Person from endemic area with nodules and skin depigmentation.",
    options: [
      { id: "a", text: "Onchocerca volvulus", isCorrect: true },
      { id: "b", text: "Wuchereria bancrofti", isCorrect: false },
      { id: "c", text: "Loa loa", isCorrect: false },
      { id: "d", text: "Ascaris lumbricoides", isCorrect: false }
    ],
    explanation: "O. volvulus causes onchocerciasis (river blindness) in Africa/Yemen. Simulium fly (blackfly) transmits larvae. Microfilariae migrate skin causing nodules, depigmentation, severe itching. Corneal invasion → blindness if untreated. Ivermectin + doxycycline treatment.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Parasitology", "Nematode", "Vector-borne Disease", "CBME-Competency-026"],
    subjectCode: "MI",
    topicCode: "MI-MOD-PARA-ONCHO",
    textbookRefs: ["Baveja's Parasitology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which organism causes 'atypical pneumonia' with elevated transaminases, myalgia, and extrapulmonary manifestations?",
    clinicalVignette: "Young adult with pneumonia, fever, headache, and elevated liver enzymes.",
    options: [
      { id: "a", text: "Mycoplasma pneumoniae (lacks cell wall, intracellular)", isCorrect: true },
      { id: "b", text: "Streptococcus pneumoniae", isCorrect: false },
      { id: "c", text: "Pseudomonas aeruginosa", isCorrect: false },
      { id: "d", text: "Haemophilus influenzae", isCorrect: false }
    ],
    explanation: "Mycoplasma pneumoniae causes atypical CAP. Lacks cell wall. Presents with systemic symptoms (headache, myalgia, hepatitis), often more severe symptoms than findings on exam. Elevated transaminases common. Macrolide-responsive. Can trigger autoimmune hemolytic anemia.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Bacteriology", "Atypical Pneumonia", "Extrapulmonary Manifestations", "CBME-Competency-027"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-MYCO",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "What is the mechanism of antibiotic resistance in vancomycin-resistant Enterococci (VRE)?",
    clinicalVignette: "Nosocomial infection in hospitalized patient with organism resistant to vancomycin.",
    options: [
      { id: "a", text: "Altered cell wall peptidoglycan precursor (vanA/vanB resistance genes), preventing vancomycin binding", isCorrect: true },
      { id: "b", text: "Beta-lactamase production", isCorrect: false },
      { id: "c", text: "Efflux pump mechanism only", isCorrect: false },
      { id: "d", text: "Target site methylation", isCorrect: false }
    ],
    explanation: "VRE carrying vanA/vanB genes encode ligases that modify peptidoglycan (D-Ala-D-Ala → D-Ala-D-Lac). Vancomycin cannot bind. vanA = high-level resistance; vanB = variable. VRE major nosocomial pathogen. Limited treatment options (linezolid, tigecycline).",
    difficulty: "HARD" as const,
    bloomsLevel: "ANALYZE" as const,
    examTags: ["Antibiotic Resistance", "Bacteriology", "Enterococci", "CBME-Competency-028"],
    subjectCode: "MI",
    topicCode: "MI-MOD-BACT-VRE",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which parasite causes 'sleeping sickness' (African trypanosomiasis) and is transmitted by tsetse fly?",
    clinicalVignette: "Traveler to sub-Saharan Africa with fever, joint pain, and altered sleep-wake cycle.",
    options: [
      { id: "a", text: "Trypanosoma brucei (subspecies gambiense/rhodesiense)", isCorrect: true },
      { id: "b", text: "Trypanosoma cruzi", isCorrect: false },
      { id: "c", text: "Leishmania donovani", isCorrect: false },
      { id: "d", text: "Plasmodium ovale", isCorrect: false }
    ],
    explanation: "T. brucei causes African sleeping sickness. Tsetse fly (Glossina) transmits. T.b. gambiense (West/Central Africa, chronic course) vs. T.b. rhodesiense (East Africa, acute/fatal). Crosses blood-brain barrier → CNS involvement, sleep disturbance. Diagnosis: blood/CSF microscopy.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Parasitology", "Protozoa", "Vector-borne Disease", "CBME-Competency-029"],
    subjectCode: "MI",
    topicCode: "MI-MOD-PARA-TRYP-BRUCE",
    textbookRefs: ["Baveja's Parasitology", "Ananthanarayan & Paniker"]
  },
  {
    type: "single-best-answer" as const,
    stem: "Which is the earliest laboratory marker of HBV infection (active or recent infection)?",
    clinicalVignette: "Screening blood donor with suspected hepatitis B exposure.",
    options: [
      { id: "a", text: "HBsAg (Hepatitis B surface antigen) - first marker of infection", isCorrect: true },
      { id: "b", text: "Anti-HBc (antibody to core antigen) only", isCorrect: false },
      { id: "c", text: "Anti-HBs (antibody to surface antigen) only", isCorrect: false },
      { id: "d", text: "HBeAg only", isCorrect: false }
    ],
    explanation: "HBsAg appears first (weeks 1-4 post-infection), indicates active infection. Anti-HBc appears next (remains lifelong). HBeAg indicates high infectivity. Anti-HBe then Anti-HBs (immunity). HBsAg positive >6 months = chronic infection. Vaccination gives anti-HBs only.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "UNDERSTAND" as const,
    examTags: ["Virology", "HBV Markers", "Serological Diagnosis", "CBME-Competency-030"],
    subjectCode: "MI",
    topicCode: "MI-MOD-VIRO-HBV-MARKERS",
    textbookRefs: ["Baveja's Microbiology", "Ananthanarayan & Paniker"]
  }
];
