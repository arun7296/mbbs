export const microbiologyLecturesPart2: Array<{
  topicCode: string;
  contentMd: string;
  estimatedMinutes: number;
}> = [
  {
    topicCode: "MI-MOD-04-TOP-03",
    estimatedMinutes: 45,
    contentMd: `# Mycobacterium tuberculosis

## Overview & Historical Significance

{{IMAGE: Acid-fast bacillus under Ziehl-Neelsen staining showing characteristic pink-stained rod}}

Mycobacterium tuberculosis remains India's leading infectious cause of morbidity and mortality despite TB elimination efforts. India harbors approximately 2.7 million TB cases annually, representing 27% of the global TB burden. The shift from drug-susceptible TB (DS-TB) to multidrug-resistant (MDR-TB) and extensively drug-resistant (XDR-TB) strains has transformed TB from a curable infectious disease into a major public health crisis.

## Microbiology & Pathogenesis

**Bacterial Characteristics:**
- Obligate aerobic, slow-growing intracellular pathogen
- Generation time: 15-20 hours (vs. 20 minutes for E. coli)
- Acid-fast bacillus: Mycolic acids in cell wall confer resistance to disinfectants
- Non-motile, non-sporing, non-capsulated rod
- Arylsulfatase production (hallmark biochemical feature)

**Virulence Factors:**
1. **Cord factor (trehalose dimycolate)**: Induces granuloma formation
2. **Sulfolipids**: Inhibit phagosome-lysosome fusion
3. **Antigen 85 complex**: Promotes intracellular survival
4. **PE/PPE proteins**: Immune evasion mechanisms

## Epidemiology in Indian Context

🎓 **NMC Competency Note:** Understanding India's TB epidemiology is fundamental to clinical practice; XDR-TB emergence threatens TB elimination targets.

**Burden Statistics:**
- Incidence: 193 per 100,000 population (2023)
- 25% of TB cases are MDR-TB (highest absolute number globally)
- XDR-TB prevalence: 6-8% of MDR-TB cases
- Rural areas account for 70% of cases; urban slums high-risk zones

**Risk Factors in India:**
- Malnutrition (wasting disease in poverty settings)
- HIV co-infection (10-15% of TB cases)
- Diabetes (emerging cofactor; affects 30-40% of TB patients)
- Migration patterns (agricultural workers)
- Overcrowding (prisons, army barracks)

## Clinical Manifestations

💡 **Teaching Pearl:** Classic presentation masks atypical presentations in immunocompromised patients; always maintain high clinical suspicion.

**Pulmonary TB (85% cases):**
- Insidious onset: fever, night sweats, weight loss over weeks
- Productive cough with blood-tinged sputum
- Hemoptysis (sign of cavity formation with vascular erosion)
- Cavitary lesions predominantly in upper lobes (apex-posterior segments)

**Extrapulmonary TB (15% cases):**
- Lymph node TB: hilar/mediastinal lymphadenopathy
- Pleural TB: exudative effusion with high protein
- Abdominal TB: mesenteric involvement, ascites
- Miliary TB: hematogenous dissemination (5-10% mortality)
- CNS TB: meningitis with basal enhancement on CT

## Diagnosis

🤔 **Critical Clinical Question:** Why is sputum smear microscopy insufficient for rapid diagnosis and treatment initiation?

**Microbiological Methods:**
1. **Ziehl-Neelsen Staining**: Gold standard; requires 5,000-10,000 bacilli/mL for detection
2. **Auramine-Rhodamine Fluorescence**: More sensitive, faster scanning
3. **Culture (Löwenstein-Jensen or BACTEC)**: Gold standard; 2-8 weeks for results
4. **Rapid Molecular Tests:**
   - GeneXpert MTB/RIF (WHO-endorsed): 2-hour turnaround, detects RIF resistance
   - Line Probe Assay (LPA): Identifies MDR mutations

**Imaging:**
- CXR: Upper lobe cavitary lesions, bronchopneumonia pattern
- CT: Better sensitivity for bronchiectasis, dissemination

## Treatment Protocols (NTEP Guidelines)

⚡ **High-Yield Alert:** Treatment duration varies by TB type; default is 6 months for DS-TB, but complications require extended therapy.

**Standard Regimen (DS-TB):**
- **Intensive Phase (2 months):** HRZE (Isoniazid, Rifampicin, Pyrazinamide, Ethambutol)
- **Continuation Phase (4 months):** HRE (Isoniazid, Rifampicin, Ethambutol)
- Total: 6 months, 150 doses

**MDR-TB Regimen (20 months):**
- **Intensive Phase (5-7 months):** Levofloxacin + Injectable (Bedaquiline or Linezolid) + Clofazimine + Pyrazinamide + Ethambutol
- **Continuation Phase (13-15 months):** Levofloxacin + Clofazimine + Linezolid

**XDR-TB Regimen (20+ months):**
- Fluoroquinolone + Bedaquiline + Linezolid + Clofazimine ± meropenem

## Drug Resistance Mechanisms

**Isoniazid Resistance:** katG gene mutation (95% of cases) → reduced pro-drug activation
**Rifampicin Resistance:** rpoB gene mutations (90% of cases) → RNAP binding inhibition
**Fluoroquinolone Resistance:** gyrA/gyrB mutations
**Injectable Resistance:** 16S rRNA mutations (eis, rrs genes)

## Complications & Management

🏥 **Clinical Practice Point:** Monitor LFTs, vision, audiology; ADRs are major treatment abandonment drivers.

**Drug Side Effects:**
- Isoniazid: Peripheral neuropathy (vitamin B6 prophylaxis)
- Rifampicin: Orange discoloration of secretions, hepatotoxicity
- Pyrazinamide: Hyperuricemia, hepatotoxicity
- Ethambutol: Optic neuritis (color blindness, visual acuity)
- Linezolid: Thrombocytopenia, neuropathy (XDR-TB)

**Treatment Complications:**
- TB-IRIS: Paradoxical worsening during TB-HIV coinfection ART initiation
- Immune reconstitution inflammatory syndrome (IRIS)

## Prevention & Control

📋 **Summary & Examination Focus:**
- **Vaccination:** BCG (>90% protection against severe TB in children; wanes by adulthood)
- **LTBI Management:** Isoniazid monotherapy (6 months) for TST/IGRA-positive contacts
- **Infection Control:** Negative pressure rooms, N95 masks, UV light in high-risk settings
- **DOTS Strategy:** Directly observed therapy ensures adherence; critical for MDR-TB

## Key Takeaways
1. Acid-fast bacillus with intracellular survival mechanisms
2. XDR-TB emergence requires rapid molecular diagnosis and newer drug regimens
3. Treatment duration varies significantly by resistance pattern
4. Monitoring for ADRs is essential to prevent treatment abandonment
5. TB-HIV coinfection requires synchronized treatment initiation`,
  },
  {
    topicCode: "MI-MOD-04-TOP-04",
    estimatedMinutes: 40,
    contentMd: `# Spirochetes

## Overview & Classification

{{IMAGE: Darkfield microscopy showing motile spirochete with characteristic corkscrew morphology}}

Spirochetes are helical bacteria with unique motility mechanisms and complex epidemiology in India. Three major human pathogens are clinically relevant: Treponema pallidum (syphilis), Borrelia burgdorferi (Lyme disease—emerging in India), and Leptospira interrogans (leptospirosis—endemic zoonotic disease).

## Microbial Characteristics

**Common Features:**
- Helical gram-negative bacteria with axial filaments
- Axial filaments enable characteristic corkscrew motility
- Thin spiral body (0.1-0.2 μm diameter, 6-20 μm length)
- Difficult to culture; many species non-cultivable

**Classification:**
1. **Treponema pallidum**: Syphilis
2. **Treponema pallidum endemicum**: Endemic syphilis (rare, Middle East)
3. **Borrelia species**: Relapsing fever
4. **Leptospira interrogans**: Leptospirosis

## Treponema pallidum (Syphilis)

🎓 **NMC Competency:** Syphilis remains underdiagnosed in India; every clinician must recognize stages, understand vertical transmission, and manage neurosyphilis complications.

**Microbiology:**
- Anaerobic organism; cultured only in specialized media (rabbit testis culture)
- Extremely sensitive to drying, disinfectants, heat
- Cannot survive >48 hours outside host (except in blood/refrigerated state)

**Pathogenesis:**
- Spirochete enters through microabrasions in mucous membranes
- Multiplies locally, invades lymphatics
- Hematogenous dissemination within days
- Immune-mediated tissue damage (Th1 response, antibody-antigen complexes)

**Clinical Stages:**

💡 **Teaching Pearl:** Syphilis stages overlap; a patient can progress through multiple stages despite treatment of earlier stages if untreated.

1. **Primary Syphilis (3-90 days):**
   - Chancre: Painless, indurated ulcer with raised borders, clean base
   - Location: Genital area, lips, rectum
   - Spontaneous resolution in 3-6 weeks regardless of treatment

2. **Secondary Syphilis (4-10 weeks after chancre):**
   - Constitutional: Fever, lymphadenopathy, hepatomegaly, splenomegaly
   - Rash: Typically involves palms and soles (pathognomonic)
   - Mucous patches: Gray-white erosions on oral mucosa
   - Condyloma lata: Hypertrophic lesions in anogenital area
   - Systemic complications: Hepatitis, glomerulonephritis

3. **Early Latent Syphilis (First year after primary):**
   - Asymptomatic; positive serology
   - Risk of relapse; most transmissible stage

4. **Late Latent Syphilis (>1 year):**
   - Asymptomatic; decreased infectivity
   - Remains seropositive

5. **Tertiary Syphilis (3-30+ years):**
   - **Neurosyphilis:** Tabes dorsalis (dorsal root degeneration), general paresis of insane (GPI), optic atrophy
   - **Cardiovascular:** Aortitis, aortic regurgitation, coronary ostial stenosis
   - **Gummatous:** Localized granulomas affecting bones, CNS, skin

**Vertical Transmission (Congenital Syphilis):**
- Highest risk: Untreated maternal infection in pregnancy
- Early congenital (0-2 years): Hepatomegaly, splenomegaly, osteochondritis, skin/mucosal lesions
- Late congenital (>2 years): Hutchinson triad (interstitial keratitis, peg teeth, eighth nerve deafness), saddle nose deformity

## Diagnosis

🤔 **Critical Question:** When should nontreponemal tests be repeated to confirm cure versus retained seropositivity?

**Serological Tests:**
1. **Nontreponemal (Reagin) Tests:**
   - RPR (Rapid Plasma Reagin): Flocculation test; quantifiable
   - VDRL (Venereal Disease Research Laboratory): Complement fixation; quantifiable
   - False-positive: Pregnancy, autoimmune disease, malignancy
   - Titer correlates with disease activity

2. **Treponemal Tests:**
   - FTA-ABS (Fluorescent Treponemal Antibody—Absorbed): Reference standard
   - TP-PA (Treponema pallidum Particle Agglutination): Automation-friendly
   - EIA (Enzyme Immunoassay): High specificity
   - Remain positive for life despite treatment

**Special Considerations:**
- Primary syphilis: 25% serologically negative initially; repeat at 1 week
- Neurosyphilis: CSF VDRL/RPL more specific than serum RPR

## Treatment

⚡ **High-Yield Alert:** Jarisch-Herxheimer reaction (fever, chills, hypotension within 12-24 hours) is expected after first penicillin dose; prophylaxis with prednisone may be warranted.

**Drug of Choice:**
- **Penicillin G Benzathine:** 2.4 million IU IM (single dose) for early syphilis
- **Penicillin G Aqueous:** 3 million IU IV Q4H for 10 days (neurosyphilis, congenital)

**Alternative (Penicillin Allergy):**
- Doxycycline 100 mg BD × 14-21 days (early syphilis)
- Ceftriaxone 1-2 g daily × 10-14 days (neurosyphilis; acceptable alternative)

## Leptospirosis

**Epidemiology in India:**
- Emerging zoonotic disease; outbreaks during monsoon
- Rodent urine contamination (water, soil)
- High incidence in field workers, slum dwellers

**Clinical Manifestations:**
- **Anicteric (90%):** Biphasic fever, myalgia, headache
- **Icteric/Weil disease (10%):** Jaundice, renal failure, hemorrhage, mortality 5-15%

**Diagnosis:** Culture (first week), serology (second week), PCR

**Treatment:** Doxycycline (early), Penicillin/Ceftriaxone (icteric phase)

## Borrelia species (Relapsing Fever)

🏥 **Clinical Practice:** Rare in India; recognized in endemic areas. Tick-borne relapsing fever (TBRF) presents with recurrent fever spikes due to antigenic variation.

## Key Takeaways

📋 **Summary:**
1. Spirochetes require specific diagnostic approaches (darkfield, serology, culture)
2. Syphilis remains underdiagnosed; vertical transmission prevention is critical
3. Penicillin remains first-line despite >80 years of use
4. Leptospirosis is emerging zoonotic threat during monsoon season
5. Neurosyphilis requires high-dose IV penicillin and CSF follow-up`,
  },
  {
    topicCode: "MI-MOD-04-TOP-05",
    estimatedMinutes: 42,
    contentMd: `# Pseudomonas & Other Non-fermenters

## Overview & Clinical Significance

{{IMAGE: Pseudomonas aeruginosa colonies showing characteristic green pigment on blood agar}}

Non-fermenting gram-negative rods (NFGNRs) represent 5-15% of gram-negative isolates in Indian tertiary care centers. Pseudomonas aeruginosa dominates this group, causing nosocomial infections in immunocompromised patients. Rising resistance to carbapenems and fluoroquinolones has transformed Pseudomonas into a major antimicrobial stewardship challenge.

## Pseudomonas aeruginosa

**Microbiology:**
- Gram-negative, aerobic, rod-shaped organism
- Oxidase-positive (key identification test)
- Non-fermenting; metabolism oxidative only
- Pigment production: Pyoverdine (yellow-green), Pyocyanin (blue-green)
- Flagella (monotrichous): Enables motility in biofilms

**Virulence Factors:**
1. **Exotoxin A**: ADP-ribosylation of EF-2 (similar to diphtheria toxin)
2. **Elastase**: Tissue destruction in lungs
3. **Alginate (biofilm)**: Impaired antibiotic penetration; chronic colonization
4. **Type III Secretion System**: Delivers toxins directly into host cells
5. **Rhamnolipids**: Surfactant promoting biofilm, tissue invasion

## Epidemiology in India

🎓 **NMC Competency:** Understanding Pseudomonas epidemiology in ICU and burn ward settings is essential for infection prevention and empiric antibiotic selection.

**Risk Environments:**
- ICU ventilator-associated pneumonia (VAP): 30-50% of gram-negative VAP
- Burn wounds (primary colonizer after 3-4 days)
- Diabetic foot ulcers
- Cystic fibrosis centers
- Immunocompromised patients (chemotherapy, HIV CD4 <50)

**Hospital-Associated Risk Factors:**
- Prolonged hospitalization (>3 weeks)
- Mechanical ventilation (VAP risk increases daily)
- Central venous catheters
- Urinary catheters (chronic catheterization)
- Prior antibiotic exposure (fluoroquinolones, cephalosporins)

## Clinical Manifestations

💡 **Teaching Pearl:** Pseudomonas lacks capsule; direct inoculation and biofilm formation are key pathogenic mechanisms. Systemic infection occurs in severe immunosuppression.

**Respiratory Infections:**
1. **Ventilator-Associated Pneumonia (VAP):**
   - Fever, purulent sputum (green color if pigment-producing)
   - CXR: Bilateral infiltrates, consolidation
   - Risk increases after 48-72 hours of mechanical ventilation

2. **Chronic Respiratory Colonization (Cystic Fibrosis):**
   - Colonization leads to chronic biofilm-mediated infection
   - Mucoid phenotype emerges (high alginate production)
   - Progressive bronchiectasis, lung function decline

**Wound & Burn Infections:**
- Darkening of eschar (initially green-black discoloration)
- Rapid invasion into unburned tissue
- Systemically, causing sepsis in burn patients

**Urinary Tract Infections:**
- Catheter-associated UTI (CAUTI): 3-7 days post-catheterization
- Oligosymptomatic bacteriuria may progress to urosepsis

**Bloodstream Infections:**
- Rare in immunocompetent hosts (requires severe immunosuppression)
- Ecthyma gangrenosum: Hemorrhagic/necrotic skin lesions (pathognomonic)

## Diagnosis

🤔 **Critical Question:** How do you differentiate Pseudomonas from other oxidase-positive gram-negatives in routine practice?

**Culture & Identification:**
- Growth on MacConkey (non-lactose fermenter)
- **Oxidase test: POSITIVE** (key screening test)
- Pigment production on nutrient agar/TSA
- Characteristic fruity/musty odor

**Additional Tests:**
- Growth at 42°C (distinguishes P. aeruginosa from other Pseudomonas)
- Arginine dihydrolase: Positive
- Glucose oxidative: Positive

**Resistance Testing:**
- **Routine Susceptibilities:** Piperacillin-tazobactam, Carbapenems (Meropenem, Imipenem), Fluoroquinolones, Aminoglycosides
- **MDR Definition:** Resistant to ≥3 drug classes (including carbapenems)

## Antibiotic Susceptibility & Resistance

⚡ **High-Yield Alert:** Pseudomonas develops resistance rapidly during therapy; prolonged/repeated courses select for carbapenem-resistant P. aeruginosa (CRPA).

**Resistance Mechanisms:**
1. **Efflux Pumps (MexAB-OprM):** Fluoroquinolone, carbapenem resistance
2. **AmpC β-Lactamase:** Cephalosporin resistance
3. **Carbapenemase (VIM, IMP, OXA-48):** Broad-spectrum resistance
4. **Aminoglycoside Modification:** Aminoglycoside resistance

**Treatment Approach:**
- **Monotherapy:** Fluoroquinolone (mild respiratory), Ceftazidime, Piperacillin-tazobactam
- **Combination Therapy (Severe/MDR):**
  - Antipseudomonal β-lactam + Aminoglycoside (e.g., Meropenem + Amikacin)
  - Antipseudomonal Fluoroquinolone + Aminoglycoside
  - For CRPA: Colistin, Tigecycline, or Ceftolozane-tazobactam (if available)

## Other Non-fermenters

**Acinetobacter baumannii:**
- Ubiquitous environmental organism
- Multidrug-resistant phenotype common (MDRAB)
- Nosocomial respiratory, UTI, wound infections
- Treatment: Colistin, Rifampicin, Carbapenems (if susceptible)

**Burkholderia cepacia:**
- Respiratory pathogen in cystic fibrosis
- Intrinsic resistance to aminoglycosides
- High virulence in immunocompromised patients

**Stenotrophomonas maltophilia:**
- Trimethoprim-sulfamethoxazole resistant organism
- Fluoroquinolone, Doxycycline alternatives

## Prevention & Control

🏥 **Clinical Practice Point:** VAP prevention bundles (HOB elevation, oral hygiene, selective decontamination) reduce Pseudomonas VAP incidence by 30-50%.

**Infection Prevention:**
- Hand hygiene (alcohols least effective; soap-water superior)
- Environmental disinfection (quaternary ammonium compounds)
- Antibiotic stewardship (minimize broad-spectrum use)
- Device management (early extubation, catheter removal)

## Key Takeaways

📋 **Summary & Examination Focus:**
1. Oxidase-positive, non-fermenting gram-negative rod
2. Biofilm formation enables chronic colonization despite treatment
3. Resistance develops rapidly; de-escalation protocols essential
4. VAP prevention bundles more effective than treatment
5. CRPA emergence requires stewardship and infection control integration`,
  },
  {
    topicCode: "MI-MOD-05-TOP-01",
    estimatedMinutes: 43,
    contentMd: `# General Virology

## Overview & Viral Replication Basics

{{IMAGE: Schematic diagram showing virus structure with envelope, glycoproteins, and nucleic acid core}}

Viruses are obligate intracellular parasites requiring host cellular machinery for replication. Understanding viral biology is fundamental to clinical microbiology, diagnostics, and therapeutic development. India's emerging virology labs must master both classical and molecular techniques for diagnosis and surveillance of endemic pathogens.

## Viral Architecture & Classification

**Basic Structure:**
- **Nucleic Acid Core:** DNA (dsDNA, ssDNA) or RNA (dsRNA, ssRNA, positive-sense, negative-sense)
- **Protein Coat (Capsid):** Icosahedral or helical symmetry
- **Envelope (Optional):** Lipid bilayer with embedded glycoproteins (from host membrane)

**Classification Criteria:**
1. **Genetic Material:** DNA vs. RNA
2. **Envelope:** Enveloped vs. Naked
3. **Symmetry:** Icosahedral vs. Helical vs. Complex
4. **Replication Strategy:** Lytic vs. Lysogenic vs. Persistent

## Viral Replication Cycle

🎓 **NMC Competency:** Understanding viral replication cycle stages is essential for identifying drug targets and predicting treatment efficacy.

**Step 1: Attachment (Adsorption)**
- Viral glycoprotein binds host cell receptor (specific interaction)
- Receptor examples: ACE2 (SARS-CoV-2), CD4 (HIV), HER2 (some enveloped viruses)

**Step 2: Penetration (Entry)**
- Naked viruses: Receptor-mediated endocytosis
- Enveloped viruses: Fusion with plasma membrane (direct) or endosomal fusion
- Some viruses require co-receptors (e.g., CCR5, CXCR4 for HIV)

**Step 3: Uncoating**
- Viral genome released from capsid
- Occurs in cytoplasm (DNA viruses, some RNA viruses) or nucleus (DNA viruses)
- Capsid proteins degraded

**Step 4: Gene Expression & Genome Replication**
- Early genes: Enzymes, immune evasion proteins
- Late genes: Structural proteins (capsid, envelope)
- Replication occurs in cytoplasm (poxviruses, RNA viruses) or nucleus (DNA viruses)

**Step 5: Assembly (Morphogenesis)**
- Nucleic acid packaged into capsid (scaffolding proteins)
- Envelope proteins inserted into membrane
- Immature → mature virion transitions (protease cleavage)

**Step 6: Release**
- Naked viruses: Cell lysis (bursting), apoptosis
- Enveloped viruses: Budding (gradual release), maintains host cell viability

## Viral Genome Characteristics

💡 **Teaching Pearl:** RNA viruses utilize RNA-dependent RNA polymerase (RdRp)—no host equivalent—making this ideal antiviral drug target (remdesivir, favipiravir).

**DNA Viruses:**
- dsDNA: Herpes, Pox, Adeno, Papilloma viruses
- ssDNA: Parvoviruses (B19)

**RNA Viruses:**
- Positive-sense (+ssRNA): Can directly serve as mRNA → immediate translation
  - Examples: Picornaviruses (poliovirus, enteroviruses), Flaviviruses (dengue)
  - Strategy: Direct translation → genomic replication

- Negative-sense (-ssRNA): Must be transcribed to mRNA first
  - Examples: Orthomyxoviruses (influenza), Bunyaviruses, Arenaviruses
  - Carries RNA polymerase in virion
  - Strategy: Transcription → mRNA → translation & replication

- dsRNA: Reoviruses (rotavirus—gastroenteritis in children)

## Viral Pathogenesis

**Mechanisms of Cell Injury:**
1. **Direct Cytopathic Effect (CPE):** Viral proteins damage cell machinery
2. **Apoptosis Induction:** Viral proteins trigger programmed cell death
3. **Immune-Mediated Damage:** Inflammatory response to infection (e.g., dengue hemorrhagic fever)
4. **Oncogenic Transformation:** Integration of viral DNA (HPV, HBV, EBV)

## Viral Diagnosis

🤔 **Critical Question:** When should antigen detection be preferred over serology, and what are the turnaround implications?

**Classical Techniques:**
1. **Cell Culture:** Gold standard for many viruses; 1-2 weeks for results
2. **Electron Microscopy:** Rapid visual identification; requires expertise, expensive
3. **Immunofluorescence:** Viral antigen detection; 24-48 hours

**Serological Methods:**
1. **ELISA:** IgM (acute), IgG (past/immunity)
2. **Rapid Tests:** Lateral flow assays (influenza, COVID-19, dengue)
3. **Neutralization Tests:** Functional antibody detection (less commonly used)

**Molecular Techniques:**
1. **RT-PCR/qPCR:** Gold standard for rapid diagnosis (dengue, COVID-19, influenza)
2. **Next-Generation Sequencing (NGS):** Surveillance, strain identification, emerging pathogen detection

## Antiviral Strategies

⚡ **High-Yield Alert:** Most antivirals target viral-specific enzymes (polymerases, proteases) rather than host enzymes, enabling selectivity. Resistance mutations arise rapidly; combination therapy preferred.

**Drug Classes & Targets:**
1. **Nucleoside/Nucleotide Reverse Transcriptase Inhibitors (NRTIs):**
   - Target: Viral reverse transcriptase (HIV, HBV)
   - Examples: Zidovudine, Lamivudine, Tenofovir
   - Resistance: Mutations in RT gene

2. **Protease Inhibitors:**
   - Target: Viral protease (HIV, HCV)
   - Examples: Ritonavir, Lopinavir
   - Resistance: Protease mutations

3. **RNA Polymerase Inhibitors:**
   - Target: Viral RNA-dependent RNA polymerase (dengue, SARS-CoV-2)
   - Examples: Remdesivir (nucleotide analog), Favipiravir
   - Resistance: Rare but emerging

4. **Neuraminidase Inhibitors:**
   - Target: Influenza neuraminidase
   - Examples: Oseltamivir (Tamiflu)
   - Resistance: H274Y mutation emerging

## Host Immune Response to Viral Infection

**Innate Immunity:**
- **IFN-α, IFN-β:** Antiviral state induction; 2-3 day window before adaptive response
- **NK Cells:** Recognition of MHC-I downregulation
- **Complement:** Antibody-dependent complement activation

**Adaptive Immunity:**
- **Th1 Response:** IFN-γ production (most viruses)
- **Th2 Response:** IL-4 production (some persistent viruses, immune evasion)
- **Antibody Response:** IgM (acute phase), IgG (long-term immunity)

## Emerging & Endemic Viruses in India

🏥 **Clinical Practice:** India's vibrant viral circulation encompasses re-emerging pathogens (dengue with secondary infection risk), endemic arboviruses (chikungunya in monsoon), and HIV with emerging resistance.

**Endemic Threats:**
- Dengue: 4 serotypes; secondary infection risk (Dengue Hemorrhagic Fever)
- Chikungunya: Seasonal epidemic potential
- Japanese Encephalitis: Northeast India, seasonal
- Rotavirus: Childhood gastroenteritis
- Poliovirus: Vaccination-maintained elimination status

## Key Takeaways

📋 **Summary & Examination Focus:**
1. Obligate intracellular parasites with diverse genomes (DNA/RNA)
2. Replication cycle offers multiple antiviral drug targets
3. Molecular diagnostics (RT-PCR) superior for rapid diagnosis
4. Resistance emerges rapidly; surveillance critical for public health
5. India's endemic viruses require serotype/variant-specific diagnostics`,
  },
  {
    topicCode: "MI-MOD-05-TOP-02",
    estimatedMinutes: 44,
    contentMd: `# Herpes & Pox Viruses

## Herpes Simplex Viruses (HSV-1 & HSV-2)

{{IMAGE: Electron microscopy showing HSV virion with characteristic icosahedral capsid and tegument}}

**Epidemiology in India:**
- Seroprevalence: 60-70% by adulthood
- HSV-1: Orolab transmission, childhood
- HSV-2: Sexual transmission; higher prevalence in HIV+ populations

**Microbiology:**
- Enveloped dsDNA virus; ~125 nm diameter
- Genome: 152 kb, encodes ~80 proteins
- Latency in dorsal root ganglia (sensory neurons)
- Reactivation triggered by stress, immunosuppression, UV exposure

**Pathogenesis:**
- Primary infection: Replicates in epithelial cells → cytopathic effect (CPE)
- Ascending axonal transport to sensory ganglia
- Establishment of latency: Viral DNA persists in neuron nuclei
- Reactivation: Stress signals trigger viral protein synthesis

**Clinical Manifestations:**

🎓 **NMC Competency:** Neonatal herpes is preventable through maternal antiviral prophylaxis and cesarean delivery; missing diagnosis leads to devastating neurological sequelae.

1. **Primary Infection:**
   - Oral (HSV-1): Gingivostomatitis, pharyngitis, fever
   - Genital (HSV-2): Vesicles on erythematous base, painful ulcers
   - Disseminated (rare, severe immunosuppression): Hepatitis, encephalitis

2. **Recurrent Infection:**
   - Prodromal: Tingling, burning preceding lesions by 12-24 hours
   - Vesicular phase: Small vesicles coalesce, rupture to ulcers
   - Resolution: Crusting, re-epithelialization (7-10 days)
   - Frequency: 4-6 recurrences/year (HSV-1), higher for HSV-2

3. **Mucocutaneous Complications:**
   - Herpetic whitlow: Painful infection of finger (healthcare workers at risk)
   - Eczema herpeticum: Disseminated herpes in atopic dermatitis
   - Erythema multiforme: Immune-mediated reaction

4. **Systemic Complications:**
   - **Meningitis/Encephalitis:** HSV-1 most common viral cause; temporal lobe involvement
   - **Meningitis:** Lymphocytic pleocytosis, normal glucose
   - **Encephalitis:** Seizures, altered mental status, temporal lobe enhancement on MRI
   - **Neonatal Herpes:** Mother-to-infant transmission during birth; 30% mortality untreated

**Diagnosis:**

💡 **Teaching Pearl:** Herpes encephalitis requires empiric IV acyclovir (cannot wait for diagnostic confirmation); diagnosis by CSF PCR is gold standard, but clinical suspicion mandates treatment.

- **Tzanck Smear:** Multinucleated giant cells (rapid but low sensitivity)
- **Direct Fluorescent Antibody:** Viral antigen in vesicular fluid
- **PCR:** Gold standard; excellent sensitivity, specificity, rapid
- **Culture:** Slow (3-7 days); CPE visible (rounded, refractile cells)
- **Serology:** Distinguishes HSV-1 from HSV-2; less useful for acute diagnosis

**Treatment:**

⚡ **High-Yield Alert:** Acyclovir resistance (thymidine kinase-deficient strains) emerging in immunocompromised patients; switch to foscarnet or cidofovir.

- **Acyclovir:** 400 mg PO 5× daily (recurrent), 5-10 mg/kg IV Q8H (severe/systemic)
- **Valacyclovir:** 500 mg PO TID (better bioavailability; patient compliance)
- **Famciclovir:** 125-250 mg PO (alternative oral agent)
- **Resistance Management:** Foscarnet (HSV resistance) or Cidofovir

## Varicella-Zoster Virus (VZV)

**Clinical Manifestations:**
1. **Primary Varicella (Chickenpox):**
   - Fever, constitutional symptoms 24-48 hours preceding rash
   - Vesicular rash in crops ("dew drop on rose petal"): Central, highly infectious
   - Pruritus intense
   - Resolution: Crusting over 7-10 days
   - Complications: Bacterial superinfection, pneumonitis, encephalitis, thrombocytopenia

2. **Recurrent Zoster (Shingles):**
   - Dermatomal distribution; unilateral
   - Pain often precedes rash (prodrome)
   - Vesicular, then pustular, crusting phase
   - Post-herpetic neuralgia (PHN): Persistent pain >3 months (20-50% >50 years)

**Epidemiology in India:**
- Chickenpox endemic; vaccination rates increasing post-IPV introduction
- Zoster risk increases with age, immunosuppression
- Higher zoster risk in HIV CD4 <200

**Treatment:**
- Acyclovir, Valacyclovir, Famciclovir
- Pain management critical (gabapentin, pregabalin for PHN)
- Vaccination (recombinant zoster vaccine—Shingrix) >50 years

## Cytomegalovirus (CMV)

**Epidemiology:**
- Seroprevalence 70-80% in India
- Transmission: Saliva, urine, sexual contact, transplacental (congenital)

**Clinical Manifestations:**
1. **Congenital CMV:**
   - Microcephaly, intracranial calcifications, deafness (sensory), retinopathy
   - Hepatosplenomegaly, jaundice

2. **Immunocompromised Patients (CD4 <50):**
   - CMV retinitis: "Pizza pie" hemorrhagic lesions; leading cause of blindness
   - Colitis: Diarrhea, perforation risk
   - Esophagitis: Odynophagia, ulcers

**Treatment:**
- Ganciclovir, Valganciclovir (oral), Foscarnet (resistance)

## Epstein-Barr Virus (EBV)

**Clinical Manifestations:**
1. **Infectious Mononucleosis:**
   - Fever, pharyngitis, cervical lymphadenopathy (triad)
   - Hepatomegaly, splenomegaly, rash (if ampicillin given)
   - Atypical lymphocytes on blood smear

2. **Post-Transplant Lymphoproliferative Disorder (PTLD):**
   - Uncontrolled B-cell proliferation
   - Risk: Weeks to months post-transplant

**Diagnosis:** Paul-Bunnell test (sheep RBC heterophile antibodies), EBV serology

## Poxviruses

{{IMAGE: Light microscopy of vaccinia virus showing characteristic brick-shaped virions}}

**Smallpox (Variola):**
- Declared eradicated (1980)
- Biosafety level 4 pathogen; locked in reference labs
- Natural infection history: 30% mortality

**Vaccinia Virus:**
- Used for smallpox vaccination; cross-protection against monkeypox

**Monkeypox (Mpox):**
- Re-emerging zoonotic pathogen; human-to-human transmission increasing
- Lesions: Papules, vesicles, pustules, crusts (sequential progression)
- Similar to smallpox but milder; cervical/inguinal lymphadenopathy distinctive

**Molluscum Contagiosum:**
- Small, pearly, umbilicated lesions
- Contagious; self-limited in immunocompetent (spreads via direct contact)
- Disseminated in HIV CD4 <50

**Microbiology:**
- Enveloped dsDNA viruses; largest viruses (~200 nm)
- Replication in cytoplasm (unique for DNA viruses)
- Encode >200 proteins (largest viral genomes)

**Treatment:**
- Supportive care (smallpox, monkeypox)
- Cidofovir (serious cases, immunocompromised)
- Vaccination (post-exposure prophylaxis within 4 days for monkeypox)

## Key Takeaways

🏥 **Clinical Practice Point:** Herpes encephalitis is medical emergency requiring empiric IV acyclovir; delays lead to significant morbidity. Post-herpetic neuralgia management includes early antiviral therapy + analgesics.

📋 **Summary & Examination Focus:**
1. HSV exhibits latency; reactivation triggered by stress/immunosuppression
2. Varicella-zoster causes chickenpox (primary) and shingles (recurrence)
3. CMV causes opportunistic infections in severe immunosuppression
4. EBV causes infectious mononucleosis; associated malignancies
5. Poxviruses (molluscum, monkeypox) emerging concerns; smallpox eradicated`,
  },
  {
    topicCode: "MI-MOD-05-TOP-03",
    estimatedMinutes: 45,
    contentMd: `# Hepatitis Viruses

## Overview & Classification

{{IMAGE: Schematic diagram showing HBV virion structure with surface antigen, core antigen, and polymerase}}

Five major hepatitis viruses (A, B, C, D, E) cause acute and chronic liver disease globally. India bears significant burden of hepatitis B (5-7% population prevalence) and hepatitis E (endemic waterborne pathogen). Understanding epidemiology, diagnostics, and management is essential for clinical practice.

## Hepatitis A Virus (HAV)

🎓 **NMC Competency:** HAV vaccination protects against waterborne epidemics; universal immunization in routine childhood schedule prevents disease and eliminates transmission.

**Microbiology:**
- Naked ssRNA virus (picornavirus family)
- Non-enveloped; resistant to stomach acid, bile
- Replicates in intestinal epithelium and hepatocytes

**Epidemiology in India:**
- Endemic; high seroprevalence (80-90% by age 20)
- Waterborne transmission; outbreaks during monsoon
- Fecal-oral route; poor sanitation major risk factor

**Clinical Manifestations:**
- Acute hepatitis: Fever, jaundice, right upper quadrant (RUQ) pain
- Mostly self-limited; <1% fulminant hepatic failure
- No chronic infection

**Diagnosis:**
- HAV-IgM: Acute phase (positive during illness, negative after)
- HAV-IgG: Immunity/past infection

**Prevention:** Vaccination (routine childhood schedule in India); sanitation improvement

## Hepatitis B Virus (HBV)

**Epidemiology in India:**
- High endemic zone (2-7% prevalence)
- Transmission: Parenteral (transfusion, needle-stick), sexual, perinatal
- Health workers at occupational risk
- Chronic infection: 5-10% of infected adults (higher in infants)

**Microbiology:**
- Partially dsDNA enveloped virus
- Reverse transcriptase activity (unusual for DNA virus; replicates via RNA intermediate)
- Genome: 3.2 kb; encodes surface, core, polymerase, X proteins

**Pathogenesis:**
- Integration into host chromosome (not required for replication)
- Viral antigen presentation → CD8+ T-cell activation
- Immune-mediated hepatocyte destruction

💡 **Teaching Pearl:** HBV clearance depends on CD8+ T-cell response; weak response → chronic infection. This explains why neonates (immature immune system) show 90% chronic infection rate.

**Clinical Manifestations:**

**Acute HBV:**
- Incubation: 45-180 days
- Prodrome: Constitutional symptoms
- Jaundice phase: Icterus, dark urine, pale stools
- Most (90-95%) self-limited; <1% fulminant hepatic failure

**Chronic HBV (5-10% adults):**
- **Immune Tolerant Phase:** High viral load, normal ALT, minimal inflammation
- **Immune Clearance Phase:** HBeAg → anti-HBe seroconversion, ALT flares
- **Low Replication Phase:** Low/undetectable HBV DNA, normal ALT
- **HBeAg-Negative Disease:** Continued viral replication despite anti-HBe
- Complications: Cirrhosis (10-15%), hepatocellular carcinoma (HCC), decompensation

**Diagnosis:**

🤔 **Critical Question:** How do you differentiate acute HBV from chronic HBV using serology?

**Serological Markers:**
- **HBsAg (Surface Antigen):** First marker to appear; indicates infection (acute or chronic)
- **Anti-HBs (Surface Antibody):** Appears after HBsAg clearance; indicates immunity
- **Anti-HBc (Core Antibody):** Indicates past/present infection; persists despite HBsAg clearance
  - IgM anti-HBc: Acute infection
  - IgG anti-HBc: Past infection
- **HBeAg (e Antigen):** Indicates active viral replication, infectivity
- **Anti-HBe:** Seroconversion during immune clearance
- **HBV DNA (Quantitative PCR):** Gold standard for viral load; guides treatment decisions

**Interpretation:**
1. **Acute HBV:** HBsAg+, IgM anti-HBc+, Anti-HBs−
2. **Chronic HBV:** HBsAg+ (>6 months), IgG anti-HBc+, HBV DNA+
3. **Resolved HBV:** HBsAg−, Anti-HBc+, Anti-HBs+
4. **Vaccinated:** Anti-HBs+ alone, Anti-HBc−

**Treatment:**

⚡ **High-Yield Alert:** Antiviral therapy indicated in chronic HBV with HBV DNA >2,000 IU/mL and evidence of active liver disease (cirrhosis or ALT elevation).

**Antiviral Agents:**
1. **Nucleoside Analogs:**
   - Lamivudine: Resistance emerges in 70% by year 5
   - Entecavir: More potent, better resistance profile
   - Tenofovir: First-line; high barrier to resistance

2. **Nucleotide Analogs:**
   - Adefovir: Less commonly used

3. **Interferons:**
   - IFN-α: Immunomodulation; ~30% sustained response
   - Less used now; side effects limit tolerance

**Goal of Therapy:**
- HBV DNA suppression (<20 IU/mL)
- Normalization of ALT
- HBeAg seroconversion (if HBeAg+)
- Prevention of cirrhosis, HCC

**Vaccination:**
- Routine childhood vaccination (0, 1, 6 months)
- Post-exposure prophylaxis: HBIG + vaccine (contacts, needle-stick)

## Hepatitis C Virus (HCV)

**Epidemiology in India:**
- Lower prevalence than HBV (0.5-1%)
- Transmission: Transfusion (pre-2002), needle-stick, sexual (rare)

**Microbiology:**
- Enveloped ssRNA virus
- Rapid evolution; 6 major genotypes (1 most common in India)
- High-fidelity RNA polymerase (unusual for RNA virus)

**Clinical Manifestations:**
- Acute: Mostly asymptomatic; jaundice in <20%
- Chronic: 70-85% develop chronic infection
- Slowly progressive; cirrhosis develops over 20-40 years
- HCC risk after cirrhosis

**Diagnosis:**
- **Anti-HCV:** Initial screening; appears 4-12 weeks post-infection
- **HCV RNA PCR:** Gold standard; indicates active infection
- **HCV Genotype:** Guides treatment duration (genotype 1/3 require longer therapy)

**Treatment:**
- **Direct-Acting Antivirals (DAAs):** Sofosbuvir + Daclatasvir ± Asunaprevir
- Cure rates: >95% across genotypes
- Shorter duration: 12 weeks (vs. 24-48 weeks IFN-based therapy)
- More tolerable, fewer contraindications

## Hepatitis D Virus (HDV)

**Microbiology:**
- Defective RNA virus; requires HBsAg for replication
- Transmission: Same as HBV

**Clinical Manifestations:**
- Co-infection (simultaneous HBV + HDV): Acute hepatitis, high ALT
- Super-infection (HDV + chronic HBV): Severe flares, accelerated cirrhosis

**Prevention:** HBV vaccination prevents HDV

## Hepatitis E Virus (HEV)

🏥 **Clinical Practice Point:** HEV epidemic risk during monsoon; pregnant women at high risk of fulminant hepatic failure (15-25% mortality) and maternal/fetal death.

**Epidemiology in India:**
- Endemic; fecal-oral transmission
- Outbreaks during monsoon (contaminated water)
- Sporadic transmission in non-endemic areas (genotypes 3/4 in food—undercooked pork)

**Microbiology:**
- Naked ssRNA virus
- Four major genotypes: 1, 2 endemic Asia; 3, 4 zoonotic

**Clinical Manifestations:**
- Acute hepatitis: Fever, jaundice, RUQ pain (similar to HAV)
- Usually self-limited; distinct from HAV in pregnant women
- Fulminant hepatic failure in pregnancy: 15-25% mortality (viral replication in placenta)
- Chronic HEV: Immunosuppressed patients (organ transplant), persistent infection

**Diagnosis:**
- **HEV-IgM:** Acute infection
- **HEV-IgG:** Past infection/immunity
- **HEV RNA PCR:** Gold standard

**Treatment:**
- Supportive care (acute)
- Ribavirin or sofosbuvir (chronic HEV in immunocompromised)

## Diagnostic Algorithm & Management

**Acute Hepatitis Workup:**
1. Liver function tests (ALT, AST, bilirubin, ALP)
2. Serological panel: HAV-IgM, HBsAg, Anti-HCV, HEV-IgM
3. Viral DNA/RNA if positive serology

**Chronic Hepatitis Monitoring:**
- HBV: Baseline HBV DNA, genotype, ultrasound ± HCC surveillance (if cirrhosis)
- HCV: DAA treatment assessment, sustained virological response (SVR) at 12 weeks post-treatment

## Key Takeaways

📋 **Summary & Examination Focus:**
1. HAV: Waterborne, self-limited; vaccine-preventable
2. HBV: Parenteral/sexual transmission; 5-10% chronic; HCC risk
3. HCV: 70-85% chronic; modern DAAs cure >95%
4. HDV: Requires HBsAg; accelerates cirrhosis
5. HEV: Waterborne, endemic India; pregnant women at severe risk; modern antivirals available`,
  },
  {
    topicCode: "MI-MOD-05-TOP-04",
    estimatedMinutes: 46,
    contentMd: `# HIV & Retroviruses

## Overview & Epidemiology in India

{{IMAGE: Scanning electron microscopy of HIV virion showing spike glycoproteins on surface}}

India hosts 2.3 million people living with HIV (PLWH), representing 8% of global HIV burden. Despite access to antiretroviral therapy (ART), new infections remain high (210,000 annually), with hotspots in female sex workers, men who have sex with men (MSM), and healthcare workers. Understanding HIV pathogenesis, diagnosis, and modern ART regimens is fundamental to clinical practice.

## Microbiology & Molecular Biology

**Structure & Genome:**
- Enveloped ssRNA retrovirus; ~100-120 nm diameter
- Lipid bilayer with embedded gp120 (attachment) and gp41 (fusion) glycoproteins
- 9.7 kb genome; encodes 15 proteins (reverse transcriptase, protease, integrase)
- Two copies of RNA; diploid genome unique to retroviruses

**Replication Strategy:**
- Reverse transcription: RNA → DNA (enzyme: Reverse Transcriptase)
- Integration: Viral DNA integrates into host chromosome (enzyme: Integrase)
- Transcription: Host machinery produces viral mRNA
- Translation & Assembly: Viral proteins synthesized, packaged, protease maturation

🎓 **NMC Competency:** Understanding HIV lifecycle is essential for comprehending ART drug classes, resistance development, and treatment failure management.

## Transmission & Epidemiology

**Routes of Transmission:**
1. **Sexual:** Unprotected anal/vaginal intercourse; MSM at highest risk
2. **Parenteral:** Needle-stick injury (occupational risk 0.3%), IVDU needle-sharing
3. **Mother-to-Child Transmission (MTCT):** 15-45% without intervention; reduced to <2% with ART
4. **Transfusion:** Pre-2001 blood screening era (rare now)

**Indian Epidemiology:**
- Concentrated epidemic: FSWs, MSM, IVDU, truckers high-burden
- Transmission: 85-90% sexual; 5-10% IVDU; 1-2% MTCT
- CD4 count at diagnosis: Median 200-250 cells/mm³ (late presentation)

## Pathogenesis & Immunology

**Primary Infection (Acute Retroviral Syndrome):**
- Occurs 2-4 weeks post-exposure
- Fever, fatigue, rash, myalgia, lymphadenopathy (80% symptomatic)
- Transient high viremia (>100,000 copies/mL)
- Self-limited; resolves without therapy

**Chronic Infection (Asymptomatic Phase):**
- Gradual CD4 decline (~50 cells/mm³/year without ART)
- Persistent viral replication; immune activation
- Duration: 5-10 years median (affected by viral load, CD4)

💡 **Teaching Pearl:** Set-point viral load (viremia level established after primary infection) predicts disease progression; higher set-point = faster CD4 decline.

**AIDS-Defining Illnesses (CD4 <200 cells/mm³):**
1. **Opportunistic Infections:**
   - Pneumocystis jirovecii pneumonia (PCP): Dyspnea, dry cough, elevated LDH
   - Tuberculosis: Higher incidence with CD4 <200 (reactivation TB risk)
   - Cryptococcal meningitis: Subacute CNS infection
   - Cytomegalovirus (CMV): Retinitis, colitis, esophagitis
   - Toxoplasmosis: CNS masses, confusion, seizures

2. **Malignancies:**
   - Non-Hodgkin's lymphoma: CNS lymphoma
   - Kaposi's sarcoma: Vascular tumors, skin/mucosa/GI

3. **Other:**
   - Wasting syndrome: Weight loss >10%, chronic diarrhea
   - HIV encephalopathy: Cognitive decline, dementia

## Diagnosis

🤔 **Critical Question:** How do you counsel recently exposed (window period) individuals when 4th generation tests are negative?

**Diagnostic Algorithms (WHO)2023):**

**Serial Testing Strategy (for acute infection detection):**
1. **Antigen/Antibody Test (4th Gen):** Positive at 3 weeks
2. **Antibody Test (3rd Gen):** Positive at 3-12 weeks
3. **HIV RNA PCR (nucleic acid test):** Gold standard; detects virus 1-2 weeks post-infection

**CD4 Count & Viral Load Monitoring:**
- CD4 count: Baseline, at ART initiation, every 3-6 months on ART
- Viral load: Baseline, 4-12 weeks post-ART initiation, then annually (on ART with undetectable VL)

## Antiretroviral Therapy (ART)

⚡ **High-Yield Alert:** "Undetectable = Untransmittable (U=U)"; suppressed viral load (<50 copies/mL) prevents sexual transmission and halts CD4 decline.

**Current Standard Regimens (NACO Guidelines 2023):**

**First-Line Options:**
1. **Integrase Inhibitor-Based (Preferred):**
   - Dolutegravir + TDF + FTC (Dolutegravir: high barrier to resistance, once-daily dosing)
   - Bictegravir + TAF + FTC (newer, more convenient)

2. **NNRTI-Based (Alternative):**
   - Efavirenz + TDF + FTC (older first-line; neuropsychiatric side effects)
   - Rilpivirine + TDF + FTC (lower toxicity profile)

3. **PI-Based:**
   - Lopinavir/Ritonavir + TDF + FTC (backbone for pregnant women, TB co-infection)

**Drug Classes:**

1. **Nucleoside Reverse Transcriptase Inhibitors (NRTIs/Backbone):**
   - Tenofovir (TDF/TAF): Nucleotide analog; renal monitoring
   - Emtricitabine (FTC): Well-tolerated
   - Lamivudine (3TC): Resistance emerges if used alone

2. **Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs/Third Agent):**
   - Efavirenz: First-line historically; neuropsychiatric side effects
   - Rilpivirine: Better tolerated; requires food, PPI interactions

3. **Protease Inhibitors (PIs/Third Agent):**
   - Lopinavir/Ritonavir: Requires ritonavir "boosting"; GI side effects
   - Atazanavir/Ritonavir: Better tolerability

4. **Integrase Strand Transfer Inhibitors (INSTIs/Third Agent):**
   - Dolutegravir: Preferred; once-daily, few interactions
   - Elvitegravir: Requires boosting
   - Bictegravir: Newer; fixed-dose combination convenience

## Treatment Monitoring & Management

**CD4 Recovery on ART:**
- First 3 months: Rapid increase (often 50-100 cells/mm³/month)
- 6-12 months: Slower recovery (20-50 cells/mm³/month)
- Goal: CD4 >200 cells/mm³ (OI prophylaxis discontinued)

**Immune Reconstitution Inflammatory Syndrome (IRIS):**
- Paradoxical worsening within weeks of ART initiation
- Tuberculosis-IRIS: Fever, lymphadenopathy, increased TB symptoms
- Management: Continue ART, add corticosteroids (TB-IRIS)

**Virological Failure (Persistent VL >50 copies/mL):**
- Assess adherence (>95% required for suppression)
- Resistance testing (genotype) if confirmed failure
- Switch regimen based on resistance profile

## Resistance Development

**Major Mutations & Phenotypes:**
- **NNRTI Resistance:** K103N, G190A (single mutation confers high-level resistance; cross-resistance within class)
- **PI Resistance:** Multiple mutations (L90M, V82A); requires multiple changes for high-level resistance
- **INSTI Resistance:** R263K, S153Y (rare; dolutegravir shows high barrier)

**Indian Resistance Patterns:**
- NNRTI resistance: 20-30% in treatment-experienced patients (historically high)
- PI resistance: <5% in treatment-naive
- INSTI resistance: <1% (still rare with dolutegravir)

## Special Populations

🏥 **Clinical Practice:** Pregnant women require specific ART regimens (lopinavir/ritonavir-based preferred for CNS penetration). Breastfeeding contraindicated to prevent transmission.

**Tuberculosis Co-infection:**
- TB diagnosis: >50% of PLWH in India co-infected
- ART timing: Start ART immediately if CD4 <50; within 2 weeks if CD4 >50
- Drug interactions: Rifampicin induces protease inhibitors, NNRTIs

**Hepatitis B Co-infection:**
- Use TDF/TAF + FTC (both cover HBV)
- Monitor HBsAg, HBV DNA
- Discontinuation risk: HBV reactivation if TDF/FTC-based ART stopped

## Prevention & Vaccine Development

**Prevention Strategies (NACO):**
- Pre-Exposure Prophylaxis (PrEP): TDF/FTC daily for high-risk individuals (MSM, FSWs)
- Post-Exposure Prophylaxis (PEP): 3-drug ART × 28 days (needle-stick, sexual exposure)
- Antiretroviral-based prevention (undetectable viral load)

**Vaccine Research:**
- RV 144 trial: 31% efficacy (canarypox + AIDSVAX)
- mRNA vaccine approaches: Clinical trials ongoing

## Key Takeaways

📋 **Summary & Examination Focus:**
1. Retrovirus requiring reverse transcription and chromosomal integration
2. Modern ART achieves viral suppression in >95% if adherence maintained
3. CD4 count predicts OI risk; recovery predictable on ART
4. Resistance develops rapidly with viremia; adherence monitoring essential
5. U=U concept: Undetectable viral load eliminates sexual transmission
6. MTCT virtually eliminated with maternal ART and obstetric management`,
  },
  {
    topicCode: "MI-MOD-05-TOP-05",
    estimatedMinutes: 42,
    contentMd: `# Respiratory & Enteric Viruses

## Orthomyxoviruses (Influenza)

{{IMAGE: Electron microscopy showing influenza virion with prominent hemagglutinin and neuraminidase spike proteins}}

**Epidemiology in India:**
- Seasonal epidemics during winter months (December-February)
- 3 circulating types: A (pandemic potential), B, C
- Annual attack rate: 5-15% in general population; higher in children, elderly

**Microbiology:**
- Enveloped -ssRNA virus; 80-120 nm diameter
- Surface glycoproteins: Hemagglutinin (HA, attachment), Neuraminidase (NA, release)
- HA/NA subtypes: A(H1N1, H3N2), B(Victoria, Yamagata lineages)

**Pathogenesis:**
- HA binds sialic acid receptors on respiratory epithelium
- Viral replication → epithelial cell apoptosis
- Immune response: IFN-α production (antiviral state), Th1 response
- Complications: Secondary bacterial pneumonia (Staphylococcus aureus)

💡 **Teaching Pearl:** Antigenic drift (point mutations in HA/NA) drives seasonal epidemics; antigenic shift (reassortment of gene segments) causes pandemics.

**Clinical Manifestations:**
- Fever (often high, 39-40°C), myalgia, headache, fatigue
- Respiratory: Cough, rhinorrhea, sore throat
- Duration: 5-7 days; post-viral fatigue common
- Complications: Pneumonia, myocarditis, encephalitis (rare)

**Diagnosis:**

🤔 **Critical Question:** Why is rapid testing less useful after 5 days of illness?

- **Rapid Antigen Test:** Rapid (15-30 min); sensitivity decreases with disease duration
- **RT-PCR:** Gold standard; detects virus up to 21 days; resource-intensive
- **Culture:** Slow; used for research/surveillance

**Treatment:**

⚡ **High-Yield Alert:** Neuraminidase inhibitors effective only if started ≤48 hours from symptom onset; most benefit in severe disease, hospitalized patients.

- **Oseltamivir (Tamiflu):** 75 mg BD × 5 days (oral, most common)
- **Zanamivir (Relenza):** 5 mg inhaled BD × 5 days
- **Peramivir:** IV formulation; severe/hospitalized patients

**Prevention:**
- Annual vaccination (trivalent/quadrivalent inactivated vaccine)
- Efficacy 40-60% (varies by season, strain match)

## Parainfluenza Viruses

**Clinical Manifestations:**
- Croup (laryngotracheobronchitis): Barky cough, stridor, low-grade fever
- Predominantly affects children <3 years
- Usually self-limited; dexamethasone reduces symptom duration

## Respiratory Syncytial Virus (RSV)

**Epidemiology:**
- Leading cause of bronchiolitis in infants <2 years
- Seasonal: Winter months
- High hospitalization rates (1-3% of infected infants)

**Pathogenesis:**
- Replication in bronchiolar epithelium
- Syncytia formation (cell fusion)
- Excessive mucus production, bronchiolar obstruction

**Clinical Manifestations:**
- Bronchiolitis: Dyspnea, tachypnea, wheezing, intercostal retractions
- Apnea spells in severe cases
- Complications: Respiratory failure, secondary bacterial infection

**Diagnosis:**
- Rapid antigen detection (immunofluorescence)
- RT-PCR (reference standard)

**Treatment:**
- Supportive (oxygen, mechanical ventilation if needed)
- Ribavirin (severe immunocompromised, not routine)

## Paraviruses (Mumps, Measles, Rubella)

**Measles (Rubeola):**
- -ssRNA enveloped virus
- Highly contagious (R0 12-18; one infected person spreads to 12-18 others)
- Pathogenic mechanism: Direct viral damage + immune-mediated

**Clinical Manifestations:**
- Prodrome: Fever, cough, coryza, conjunctivitis (3Cs)
- Koplik spots: Pathognomonic (white spots on buccal mucosa)
- Maculopapular rash: Cephalocaudal progression; appears day 3-4 of fever

**Complications:**
- Measles encephalitis: Seizures, altered mental status (1/1000 infections)
- Subacute Sclerosing Panencephalitis (SSPE): Fatal degenerative CNS disease
- Secondary bacterial infection (pneumonia, otitis media)

**Mumps:**
- Paramyxovirus
- Parotitis: Painful bilateral salivary gland swelling
- Meningitis (10-15% asymptomatic CSF pleocytosis)
- Orchitis: Testicular inflammation, potential infertility

**Rubella:**
- Mild disease in children; dangerous in pregnancy
- Congenital rubella syndrome: Microcephaly, cardiac defects, deafness
- Timing: Highest risk first trimester (80% risk vs. 10% third trimester)

🏥 **Clinical Practice:** Measles elimination possible with high vaccination coverage (MMR ≥95%). Outbreaks occur when coverage drops <90%.

## Enteroviruses

**Poliovirus:**
- -ssRNA, naked virus
- Eradicated from India (2011); endemic only in Afghanistan, Pakistan
- Vaccine coverage critical: IPV (inactivated polio vaccine) routine in India

**Other Enterovirus Serotypes:**

**Coxsackievirus:**
- Herpangina: Vesicular pharyngitis with fever
- Hand-foot-and-mouth disease (HFM): Vesicles on hands, feet, mouth; usually mild

**Echovirus:**
- Meningitis (aseptic meningitis most common viral cause)
- Rash, myalgia, exanthem

**Rhinovirus:**
- Causes common cold; 200+ serotypes
- Seasonal peaks; year-round transmission
- Self-limited upper respiratory infection

**Diagnosis:**
- RT-PCR (most sensitive/specific)
- Culture (slow, insensitive for some serotypes)
- Serology (less useful for acute diagnosis)

**Treatment:**
- Supportive care
- No specific antivirals (limited options)
- Polio: IPV vaccination (routine schedule prevents disease)

## Rotavirus & Norovirus

🎓 **NMC Competency:** Rotavirus vaccination (RV5/RV1) introduced in routine childhood schedule; significantly reduced hospitalization from gastroenteritis.

**Rotavirus:**
- dsRNA virus; segmented genome
- Leading cause of acute gastroenteritis in children <5 years (pre-vaccine era)
- Transmission: Fecal-oral; highly contagious

**Clinical Manifestations:**
- Watery diarrhea (3-8 stools/day), vomiting, fever
- Duration: 5-8 days; complications: Dehydration, electrolyte imbalance
- Severe disease risk: Infants, malnourished children, immunocompromised

**Vaccine:**
- ORV5 (pentavalent), ORV1 (monovalent): Oral rotavirus vaccine
- Efficacy: 85-98% (severe disease prevention); 70-75% (all gastroenteritis)
- Schedule: 3 doses (6, 10, 14 weeks; RV5) or 2 doses (6, 10 weeks; RV1)

**Norovirus:**
- ssRNA virus; highly infectious (attack rate 60-70%)
- Outbreaks in closed environments (ships, schools, healthcare facilities)
- Short incubation period (12-48 hours); rapid outbreak evolution

**Clinical Manifestations:**
- Acute gastroenteritis: Diarrhea, vomiting, abdominal cramps
- Fever (low-grade), myalgia, headache
- Duration: 24-48 hours; self-limited but dehydration risk

**Transmission Control:**
- Hand hygiene (soap-water superior to alcohol gels)
- Environmental disinfection (hypochlorite solutions)
- Exclusion from high-risk settings during acute phase

## Key Takeaways

📋 **Summary & Examination Focus:**
1. Influenza: Antigenic drift/shift mechanisms; neuraminidase inhibitors effective ≤48 hours
2. Respiratory viruses: RSV causes bronchiolitis; parainfluenza causes croup
3. Measles: Highly contagious; elimination requires ≥95% vaccination coverage
4. Poliovirus: Eradicated India; maintained elimination through IPV
5. Enteroviruses: Common cause of aseptic meningitis, hand-foot-mouth disease
6. Rotavirus: Vaccine introduction dramatically reduced childhood gastroenteritis
7. Norovirus: Outbreak pathogen; rapid transmission in closed settings`,
  },
  {
    topicCode: "MI-MOD-05-TOP-06",
    estimatedMinutes: 44,
    contentMd: `# Arboviruses & Rabies

## Arboviruses Overview

{{IMAGE: Aedes aegypti mosquito showing characteristic white markings}}

Arthropod-borne viruses (arboviruses) transmitted by mosquitoes, ticks, and other arthropods cause significant morbidity in India. Dengue remains the most common arboviral infection (100-400 million cases annually worldwide); chikungunya and Japanese encephalitis pose seasonal epidemic threats. Understanding epidemiology, clinical presentation, and prevention is essential for Indian clinicians.

## Dengue Virus

🎓 **NMC Competency:** Dengue warning signs (plasma leakage, hemorrhage) identify progression to severe dengue; early recognition and fluid management are life-saving.

**Epidemiology in India:**
- Endemic: All states; 5-9% annual infection incidence in endemic areas
- Peak transmission: Monsoon and post-monsoon (July-October)
- Vector: Aedes aegypti (urban, daytime-active mosquito)
- Four serotypes (DENV-1, -2, -3, -4); sequential infection risk

**Microbiology:**
- Enveloped +ssRNA virus (Flavivirus family)
- 50 nm diameter; genome ~11 kb
- Encodes 7 non-structural (NS), 3 structural (envelope, membrane, capsid) proteins

**Pathogenesis & Immunology:**
- Primary infection: Type 1 interferon response predominates
- Secondary heterologous infection: Antibody-dependent enhancement (ADE)
  - Subneutralizing antibodies from primary infection enhance secondary infection
  - Plasma leakage risk increased 2-4 fold

💡 **Teaching Pearl:** Dengue hemorrhagic fever (DHF) is immune-mediated; occurs primarily in secondary infections or primary infections in infants with maternal antibodies (initial protection expires).

**Clinical Manifestations:**

**Dengue Fever (DF): 5-day biphasic fever**
- Febrile phase (days 1-3): High fever, severe myalgia, arthralgia, headache, retroorbital pain
- Critical phase (days 3-5): Fever subsides; plasma leakage peak; hemorrhagic manifestations
- Recovery phase: Improvement over 2-7 days

**Severe Dengue (Dengue Hemorrhagic Fever/DHF):**
- **Warning Signs (emerging plasma leakage):**
  - Persistent vomiting, abdominal pain
  - Lethargy, restlessness, hepatomegaly (>2 cm)
  - Rapid platelet decline (↓100K in 24 hours)
  - Hematocrit increase >20% (hemoconcentration)

- **Dengue Shock Syndrome (DSS):** Hypovolemic shock from plasma leakage
  - Narrow pulse pressure (<20 mmHg)
  - Hypotension, altered consciousness
  - Mortality 1-5% with fluid management, 10-15% without

**Diagnosis:**

🤔 **Critical Question:** When are IgM and IgG antibodies most useful in dengue diagnosis?

- **RT-PCR (Viremia Detection):** Positive days 1-5 of fever; gold standard, specific
- **NS1 Antigen ELISA:** Positive days 1-9; high specificity (~95%)
- **IgM ELISA:** Positive from day 3-4; indicates acute infection
  - False-positive in secondary infections (↑IgG obscures interpretation)
- **IgG ELISA:** Appears day 5+; indicates past infection (immunity)

**Interpretation:**
1. **Primary Infection:** IgM+, IgG−, NS1+, RT-PCR+
2. **Secondary Infection:** IgM+, IgG++, NS1+, RT-PCR+

**Management:**

⚡ **High-Yield Alert:** Fluid management during critical phase (days 3-5) is cornerstone of treatment; excessive fluids cause fluid overload, worsen outcomes.

- **Mild-Moderate DF:** Oral rehydration; outpatient management with daily monitoring
- **Severe Dengue/DSS:**
  - IV isotonic crystalloid (NS/LR); cautious titration
  - Monitor urine output (target 0.5 mL/kg/hour)
  - Hematocrit monitoring (serial); transfusion if ongoing bleeding
  - Platelet transfusion (if <20K with bleeding or <10K regardless)
  - ICU admission if DSS, multi-organ involvement

**Prevention:**
- **Vector Control:** Indoor/outdoor spraying, source reduction (water containers), ovitraps
- **Vaccine:** Dengvaxia (tetravalent live-attenuated vaccine); approved for ≥9 years; reduces severe dengue 95%

## Chikungunya

**Epidemiology in India:**
- Major outbreaks 2006-2008 (3.7 million cases, Tamil Nadu); re-emergence 2013+
- Vector: Aedes aegypti, Aedes albopictus
- Seasonal: Monsoon and post-monsoon
- Genotype A (East/Central/South Africa genotype) dominant recently

**Clinical Manifestations:**
- Fever (38-39°C), severe polyarthralgia (knees, ankles, wrists, fingers)
- Rash: Maculopapular, often sparing palms/soles
- Unique feature: **Debilitating arthralgia persisting weeks-months** (post-chikungunya rheumatism)
- Complications: Myocarditis, meningoencephalitis (rare)

**Diagnosis:**
- Serology: IgM (acute phase)
- RT-PCR: Viremia detected days 1-8

**Treatment:**
- Supportive; NSAIDs for arthralgia
- No specific antivirals

## Japanese Encephalitis (JE)

**Epidemiology in India:**
- Northeast states (Assam, West Bengal) and some North Indian areas
- Seasonal: Peak monsoon to early winter
- Vector: Culex mosquitoes (agricultural areas, rice paddies)
- Case fatality rate: 20-30% in symptomatic disease

🏥 **Clinical Practice:** JE vaccination (inactivated vaccine) now part of routine childhood immunization (selected states); coverage critical for epidemic prevention.

**Clinical Manifestations:**
- Fever, headache, myalgia (non-specific prodrome)
- Neurological: Confusion, seizures, coma, focal neurological deficits
- Movement disorders: Dystonia, tremor (some patients)
- Complications: Respiratory failure, autonomic dysfunction

**Diagnosis:**
- **CSF IgM ELISA:** Gold standard; positive in meningoencephalitis
- **Brain MRI:** Thalamic involvement (characteristic but not pathognomonic)

**Treatment:**
- Supportive; intensive care for severe cases
- Ribavirin, interferon: Limited evidence; not standard

**Prevention:**
- JE vaccine (inactivated cell culture-derived): Routine schedule
- Vector control: Mosquito nets, repellents, insecticide spray

## Yellow Fever & Other Arboviruses

**Yellow Fever:**
- Endemic Africa, South America; not endemic India
- Potential re-emergence risk with global travel
- Vaccine-preventable (live attenuated vaccine)

**West Nile Virus:**
- Emerging in India (sporadic cases reported)
- Neuroinvasive potential; fever to meningitis/encephalitis spectrum

## Rabies Virus

{{IMAGE: Negri bodies (pathognomonic intracytoplasmic inclusions) in hippocampal neurons of rabies-infected brain}}

**Epidemiology in India:**
- 59,000 deaths annually (highest global burden; ~40% of world's rabies deaths)
- ~4 million dog bite exposures annually
- Mortality: Nearly 100% untreated; 95-99% preventable with immediate PEP

**Microbiology:**
- Negative-sense single-stranded RNA virus (Rhabdoviridae family)
- Bullet-shaped particle; ~70 nm diameter
- Encodes 5 proteins: Nucleoprotein (N), phosphoprotein (P), polymerase (L), matrix (M), glycoprotein (G)
- Glycoprotein: Essential for immune evasion, CNS entry, pathogenesis

**Transmission:**
1. **Dog bites:** 70-80% exposures; street dogs high-risk
2. **Bat bites:** Occult exposure; unsuspected rabies
3. **Cat scratches/bites:** Second most common source
4. **Tissue transplant:** Rare (organ donors, neurological tissue)

**Pathogenesis:**
- Local replication at bite site
- Retrograde axonal transport via motor neurons to spinal cord
- CNS invasion: Encephalomyelitis with Negri body formation
- Anterograde spread: Salivary gland infection, viral shedding

💡 **Teaching Pearl:** Rabies incubation period 20-90 days (rarely up to 1 year); shorter distance from CNS → shorter incubation (face bite = 2-3 weeks vs. leg bite = 6-8 weeks).

**Clinical Manifestations:**

**Prodromal Phase (2-10 days):**
- Fever, malaise, paresthesias at bite site (pathognomonic but inconstant)
- Anxiety, hyperactivity

**Furious Rabies (50-80% cases):**
- Hyperactivity, aggression, hypersensitivity to light/sound
- Autonomic dysfunction: Excessive salivation, sweating, piloerection
- Hydrophobia: Pharyngeal spasm on swallowing (water, saliva) → refusal to drink
- Aerophobia: Throat spasm from air movement
- Encephalitis features: Seizures, hallucinations, delirium
- Death: Respiratory failure, aspiration, cardiac arrhythmias

**Paralytic Rabies (10-20% cases):**
- Ascending paralysis from bite site
- Fever, myalgia precede paralysis
- Consciousness preserved initially
- Rapid progression to quadriplegia, respiratory failure

**Diagnosis:**

🤔 **Critical Question:** Why is ante-mortem rabies diagnosis challenging, and what is the gold standard?

- **Ante-mortem (before death):**
  - Immunofluorescence of skin biopsy (hair follicles from nape): Specific but low sensitivity (40-80%)
  - Direct fluorescent antibody of corneal imprint: Invasive but rapid
  - RT-PCR (saliva, CSF): Reference standard; sensitivity 50-80%
  - Serology (antibodies): Appears late (>day 7); not useful for acute diagnosis

- **Post-mortem (tissue from brain):**
  - Immunofluorescence: Negri bodies pathognomonic but rare (<50% cases)
  - RT-PCR: Confirmatory

**Post-Exposure Prophylaxis (PEP):**

⚡ **High-Yield Alert:** PEP initiated within 48 hours is 95-99% effective if started immediately post-exposure. Delay reduces efficacy dramatically (85% if >7 days).

**WHO Exposure Categories:**
1. **Category I:** Touching, feeding animal; no skin breach → observation
2. **Category II:** Minor bite/scratch without bleeding; lick on broken skin → PEP recommended
3. **Category III:** Major bite (penetrating), multiple bites, lick on mucous membrane → PEP mandatory

**PEP Protocol:**
- **Wound Care:** Immediate (within 15 minutes ideally)
  - Scrub with soap/water for 15 minutes
  - Apply 70% alcohol/povidone-iodine
  - Do NOT suture (unless cosmetic, then delayed)

- **Immunoglobulin (Passive Immunity):**
  - Human Rabies Immunoglobulin (HRIG): 20 IU/kg, local + systemic administration
  - Equine Rabies Immunoglobulin (ERIG): Alternative if HRIG unavailable; 40 IU/kg (serum sickness risk)
  - Dose: Half infiltrated around wound, half IM gluteal

- **Vaccine (Active Immunity):**
  - **Cell Culture Vaccines:** Inactivated polio vaccine (IPV)-derived rabies vaccines (safest, most immunogenic)
  - **Schedule:** Days 0, 3, 7, 14, 28 (intramuscular schedule; intradermal alternative in resource-limited settings)
  - **Booster:** Day 90 (optional but recommended in high-risk groups)

**Drug Interactions:**
- Antimalarials: Chloroquine reduces antibody response; avoid if possible
- Immunosuppressants: Reduce vaccine response; optimize before travel

**Post-Exposure Prophylaxis Timing:**
- Effective up to 48 hours ideally; effectiveness decreases beyond 7 days
- Must not delay PEP based on animal status; treat presumptively

**Pre-Exposure Prophylaxis (PrEP):**
- **High-Risk Groups:** Veterinarians, animal handlers, laboratory workers, rabies-endemic travelers
- **Schedule:** Days 0, 7, 28
- **Booster:** Every 3 years if continued exposure

**Treatment of Clinical Rabies:**

🏥 **Clinical Practice:** Milwaukee Protocol (aggressive ICU support with antivirals) has achieved rare survival but not widely replicated. Palliative care more common approach in India.

- **Supportive Care:** ICU admission, mechanical ventilation for respiratory failure
- **Antiviral Trials:**
  - Ribavirin: Limited evidence; toxicity
  - Milwaukee Protocol: Induced coma, antivirals (ribavirin, interferon), clinical support—<1% survival
- **Prognosis:** Nearly invariably fatal (>99.5% mortality); focus on prevention through PEP

## Key Takeaways

📋 **Summary & Examination Focus:**
1. Dengue: Four serotypes; secondary infection risk (ADE-mediated DHF); warning signs identify progression
2. Chikungunya: Severe, debilitating arthralgia; weeks-month duration
3. JE: Thalamic involvement; vaccine-preventable; seasonal northeast India
4. Rabies: 59,000 deaths India; PEP 95-99% effective if timely; clinical disease nearly always fatal
5. PEP efficacy depends on timing and proper immunization schedule
6. Vector-borne viral diseases require comprehensive surveillance and prevention programs`,
  },
  {
    topicCode: "MI-MOD-06-TOP-01",
    estimatedMinutes: 43,
    contentMd: `# Superficial & Deep Mycoses

## Overview & Classification

{{IMAGE: Potassium hydroxide mount showing hyphae and spores in fungal infection}}

Fungal infections span spectrum from superficial dermatophyte infections to life-threatening invasive mycoses. India's tropical climate, high HIV prevalence (CD4 <50), and diabetes epidemic create ideal conditions for fungal pathogenesis. Understanding epidemiology, clinical presentation, and antifungal selection is essential for all clinicians.

## Superficial Mycoses

**Dermatophytes (Tinea):**

🎓 **NMC Competency:** Dermatophyte identification, localization, and treatment selection is fundamental to dermatological practice; resistance to azoles emerging in India.

**Epidemiology:**
- Most common fungal infection globally; high incidence India
- Anthropophilic (human-to-human), zoophilic, geophilic species
- Risk factors: Warmth, moisture, poor hygiene, immunosuppression

**Causative Agents:**
1. **Trichophyton mentagrophytes:** Geophilic; tinea pedis, corporis
2. **Trichophyton rubrum:** Anthropophilic; most common globally
3. **Epidermophyton floccosum:** Anthropophilic; tinea cruris, corporis
4. **Microsporum canis:** Zoophilic; acquired from pets

**Clinical Manifestations by Anatomic Location:**

1. **Tinea Pedis (Athlete's Foot):**
   - Interdigital: Maceration, pruritus, scaling
   - Hyperkeratotic: Dry scaling on soles
   - Bullous: Vesicles, pustules; secondary infection risk

2. **Tinea Cruris (Jock Itch):**
   - Groin, inner thighs
   - Scaly plaques with sharp borders

3. **Tinea Corporis (Body Ringworm):**
   - Annular lesions with central clearing ("ring" appearance)
   - Pruritic scaling plaques

4. **Tinea Capitis (Scalp Ringworm):**
   - Non-inflammatory: Fine scale; resembles seborrheic dermatitis
   - Inflammatory: Folliculitis, purulent drainage, temporary alopecia
   - Kerion: Severe host response; mimics bacterial infection

5. **Tinea Unguium (Onychomycosis):**
   - Nail dystrophy, discoloration, subungual hyperkeratosis
   - Slow progression; months-years for complete nail replacement

**Diagnosis:**

💡 **Teaching Pearl:** KOH mount shows hyphae and spores; culture identifies species and guides antifungal selection (emerging azole resistance).

- **KOH Mount:** Rapid (15 min); hyphae/spores visible under microscopy
- **Culture:** Identifies species; antifungal susceptibility testing if resistance suspected
- **Wood's Lamp:** Non-specific; most dermatophytes don't fluoresce (except M. canis—blue)

**Treatment:**

**Topical Therapy (First-Line):**
- Azoles: Miconazole, clotrimazole, tolnaftate (bid-tid × 2-4 weeks)
- Terbinafine: Superior fungicidal activity; shorter duration (1-2 weeks)
- Naftifine: Broad-spectrum; bid × 2-4 weeks

**Systemic Therapy (Severe/Extensive):**
- Terbinafine: 250 mg daily × 4-6 weeks (tinea pedis/corporis), × 8-12 weeks (onychomycosis toenail)
- Griseofulvin: Older agent; superior for tinea capitis (still considered standard in many guidelines)
- Itraconazole: Pulse therapy option (200 mg bid × 7 days/month)

⚡ **High-Yield Alert:** Terbinafine preferred in India due to azole resistance emergence; fungicidal mechanism superior to azole fungistasis.

**Candidiasis (Superficial):**

**Oral Candidiasis (Thrush):**
- White plaques on tongue, palate, buccal mucosa (removable)
- Erythematous base post-plaque removal
- Risk: Antibiotic use, inhaled corticosteroids, HIV CD4 <200

**Vaginal Candidiasis:**
- Curd-like discharge, vulvar erythema, pruritus
- Risk: Antibiotics, diabetes, pregnancy, hormonal contraception

**Cutaneous Candidiasis:**
- Inframammary, groin folds (warm, moist areas)
- Beefy red plaques; satellite pustules characteristic

**Diagnosis:**
- Clinical + KOH mount (pseudohyphae visible)
- Culture: Identifies species (C. albicans most common)

**Treatment:**
- Topical: Clotrimazole cream (bid), nystatin suspension (oral thrush)
- Systemic: Fluconazole (oral/IV) for moderate-severe or recurrent

## Deep Mycoses

**Cryptococcosis:**

**Epidemiology in India:**
- Opportunistic infection; severe immunosuppression (CD4 <100)
- Pigeon droppings environmental source
- CNS involvement (cryptococcal meningitis) most common presentation

**Pathogen:** Cryptococcus neoformans (encapsulated yeast)

**Clinical Manifestations:**
- **Meningitis:** Subacute onset; headache, fever, altered mental status
- CSF findings: Lymphocytic pleocytosis with normal glucose initially
- India: Lower incidence than Africa; still major opportunistic infection in HIV CD4 <100

**Diagnosis:**
- CSF India ink stain: Halo around yeast due to capsule (70% sensitivity)
- Cryptococcal antigen (serum/CSF): High specificity, sensitivity >95%
- Culture: Gold standard; 1-3 weeks

**Treatment:**
- Induction: Amphotericin B lipid formulation IV × 2 weeks
- Consolidation: Fluconazole × 8 weeks
- Maintenance: Fluconazole indefinitely (CD4 <100)

**Histoplasmosis:**

**Geographic Distribution:**
- Ohio, Mississippi river valleys (USA); scattered cases India
- Soil, bird droppings environmental source

**Pathogen:** Histoplasma capsulatum (dimorphic fungus)

**Manifestations:**
- Pulmonary: Asymptomatic to severe pneumonia
- Disseminated (CD4 <50): Fever, hepatosplenomegaly, CNS involvement
- Diagnosis: Culture, antigen detection, histopathology

**Treatment:** Amphotericin B → itraconazole → fluconazole maintenance

🏥 **Clinical Practice:** In HIV CD4 <100, screen for cryptococcal antigen (serum); meningitis prophylaxis with fluconazole may be indicated before CD4 recovery.

**Coccidioidomycosis:**

**Geographic Restriction:**
- Southwestern USA, Mexico, Central/South America; not endemic India
- Highly infectious: <10 organisms cause infection

**Manifestations:**
- Pulmonary (primary): Valley fever—arthralgia, erythema nodosum
- Disseminated (immunocompromised): Meningitis, skin lesions
- Treatment: Fluconazole/itraconazole

## Candida auris (Emerging Threat)

**Epidemiology:**
- Nosocomial pathogen; multi-drug resistant
- High mortality (40-60%); invasive infections
- Thermal tolerance unique among Candida (grows at 40°C)

**Resistance Profile:**
- Most isolates susceptible to Echinocandins only
- Azole resistance common
- Amphotericin B: Variable susceptibility

**Control:**
- Contact precautions
- Environmental disinfection (bleach solutions)
- Infection prevention measures critical

## Key Takeaways

📋 **Summary & Examination Focus:**
1. Dermatophytes: Superficial skin infections; KOH identifies; azole resistance emerging
2. Candida: Opportunistic; thrush in HIV CD4 <200; vaginal infection common
3. Cryptococcus: Most common opportunistic meningitis (CD4 <100); antigen detection diagnostic
4. Histoplasma: Disseminated disease in severe immunosuppression
5. C. auris: Nosocomial, multidrug-resistant pathogen; contact precautions
6. Antifungal selection guided by species, susceptibility, location, and CD4 count`,
  },
  {
    topicCode: "MI-MOD-06-TOP-02",
    estimatedMinutes: 40,
    contentMd: `# Protozoa: Intestinal & Blood

## Intestinal Protozoa

{{IMAGE: Trophozoites and cysts of Entamoeba histolytica under light microscopy}}

**Epidemiology in India:**
- Entamoeba, Giardia endemic; sanitation-related transmission
- Prevalence: 5-50% intestinal parasite carriage depending on region
- Risk: Contaminated water, poor hygiene, crowded living

### Entamoeba histolytica

**Pathogen Characteristics:**
- Obligate anaerobic protozoan; trophozoite and cyst stages
- Motility: Pseudopod-mediated (amoeboid movement)
- Cyst: Tetranucleate; survives GI passage

**Transmission:**
- Fecal-oral: Cyst ingestion
- Asymptomatic carriers common (85-90%)

**Pathogenesis:**
- Cyst ingestion → trophozoite excystation in colon
- Mucosal invasion → intestinal ulceration (flask-shaped)
- Dissemination: Portal blood → liver abscess

🎓 **NMC Competency:** Distinguishing invasive amoebiasis (dysentery) from non-invasive colonization is critical; treatment differs significantly.

**Clinical Manifestations:**

**Non-Invasive (Colonization):**
- Asymptomatic or mild diarrhea
- No tissue invasion
- Cyst-passer state

**Invasive (Amoebiasis):**
1. **Amoebic Dysentery:**
   - Bloody diarrhea with mucus (>10 stools/day)
   - Abdominal pain, fever (mild)
   - Duration: Weeks to months untreated

2. **Extraintestinal (Amoebic Liver Abscess):**
   - Right upper quadrant pain, hepatomegaly
   - Fever, weight loss
   - Complications: Rupture into pleural space, pericardium, peritoneum (surgical emergency)

**Diagnosis:**

💡 **Teaching Pearl:** Stool microscopy detects cysts (colonization) but fails in dysentery (motile trophozoites degrade); serology positive in invasive disease, negative in colonization.

- **Stool Microscopy:** Cysts (colonization stage); trophozoites with RBCs (dysentery)
- **Serology (IHA, ELISA):** 90-95% sensitive in invasive disease; negative in colonization
- **Imaging (Ultrasound/CT):** Liver abscess (hypoechoic lesion); may show internal echoes with granular appearance

**Treatment:**

- **Luminal Amoebiasis (Asymptomatic Cyst-Passer):**
  - Paromomycin: 25-30 mg/kg daily × 7 days (eliminates cyst-shedding)

- **Invasive Amoebiasis (Dysentery/Abscess):**
  - Metronidazole: 750 mg TID × 10 days (tissue penetration)
  - Followed by luminal agent (paromomycin)

- **Liver Abscess:**
  - Metronidazole IV (700-750 mg Q4-6H) × 7-10 days
  - Luminal agent after
  - Aspiration if >5 cm or rupture risk; not routinely drained if response to medical therapy

### Giardia lamblia

**Pathogen Characteristics:**
- Flagellated protozoan; trophozoite and cyst stages
- Pear-shaped trophozoite; tetranucleate cyst
- Adherence to duodenal epithelium via ventral disk

**Transmission:**
- Fecal-oral, water-borne (small inoculum ~10 cysts infective)
- Travelers' diarrhea risk

**Pathogenesis:**
- Mucosal inflammation, villous atrophy
- Fat malabsorption, lactose intolerance

**Clinical Manifestations:**
- Diarrhea: Watery, fatty, foul-smelling (steatorrhea)
- Cramping, bloating, fatigue
- Duration: Weeks if untreated; self-limited in immunocompetent

**Diagnosis:**
- Stool microscopy: Trophozoites/cysts (sensitivity 50-70% per sample; multiple samples improve yield)
- Antigen detection ELISA: Higher sensitivity (>90%)
- Duodenal biopsy (endoscopy): Diagnostic if stool/antigen tests negative

**Treatment:**
- Metronidazole: 250 mg TID × 5-7 days
- Tinidazole: 2 g single dose (better tolerance)

### Other Intestinal Protozoa

**Cryptosporidium:**
- Oocyst transmission; self-limited in immunocompetent
- Severe/prolonged in HIV CD4 <200: Secretory diarrhea, wasting
- Treatment: Azithromycin (CD4 >200) or paromomycin; immune reconstitution critical

**Cyclospora & Isospora:**
- Oocyst transmission; watery diarrhea
- Significant morbidity in immunocompromised

## Blood Protozoa

### Plasmodium (Malaria)

**Epidemiology in India:**
- 100+ million at risk; endemic transmission in malaria belts
- Seasonal peaks: Monsoon and post-monsoon
- Control programs targeting elimination in non-endemic regions

**Parasites:**
1. **P. vivax:** Benign tertian malaria; relapses (hypnozoites in liver)
2. **P. falciparum:** Malignant tertian; cerebral malaria, acute renal failure risk
3. **P. ovale & P. malariae:** Low prevalence; mild disease
4. **P. knowlesi:** Emerging; daily fever spikes; rapid progression

**Transmission:**
- Mosquito vector: Anopheles (night-feeding, resting indoors)
- Sporogonic cycle: 10-14 days in mosquito
- Liver pre-patent period: 7-30 days

🏥 **Clinical Practice:** Chloroquine-resistant P. falciparum (CRPF) prevalent India; artemisinin-combination therapy (ACT) first-line for suspected malaria.

**Clinical Manifestations:**

**Uncomplicated Malaria:**
- Fever (40-41°C), chills, sweating (paroxysmal pattern)
- Myalgia, headache, malaise
- Hepatomegaly common

**Severe/Complicated Malaria (P. falciparum):**
- Cerebral: Altered consciousness, seizures, coma
- Renal: Acute kidney injury; oliguria
- Pulmonary: ARDS, pulmonary edema
- Hematologic: Severe anemia, thrombocytopenia, hemoglobinuria
- Lactic acidosis: Metabolic derangement; high mortality

**Diagnosis:**

🤔 **Critical Question:** Why is repeat microscopy essential for malaria diagnosis, and what is the role of rapid tests?

- **Blood Smear Microscopy:** Gold standard; identifies species, parasite density
  - Thin smear: Species identification, morphology
  - Thick smear: Parasite detection sensitivity
  - Requires expertise; sensitivity 60-80%

- **Rapid Diagnostic Tests (RDTs):** Antigen detection
  - Pfhrp2 (P. falciparum-specific): Sensitivity >95%, specificity ~99%
  - Pan-malarial (LDH): Detects all species; lower specificity
  - Useful: Point-of-care diagnosis; negative test requires microscopy confirmation

- **PCR:** Reference standard; identifies species; not routine

**Treatment (NACO Guidelines):**

⚡ **High-Yield Alert:** Artemisinin-based combination therapy (ACT) is first-line; avoids monotherapy resistance. Choose regimen based on parasite species.

**Uncomplicated Malaria:**
- **P. falciparum/Mixed:** Artemether-lumefantrine (4-dose regimen) or DHA-piperaquine
- **P. vivax/Ovale:** Chloroquine (if sensitive) + Primaquine (eliminates hypnozoites; G6PD testing required)

**Severe Malaria:**
- Artesunate IV: 2.4 mg/kg on days 0, 1, 2; then oral ACT once tolerated
- Quinine IV: Historical alternative (rarely used now)

**G6PD Deficiency:**
- Screen before primaquine (hemolysis risk)
- Variants: Variants G6PD deficiency; different hemolysis risk

### Leishmania

**Epidemiology in India:**
- Visceral leishmaniasis (kala-azar): Bihar, Jharkhand endemic zones
- Cutaneous: Scattered distribution
- Vector: Phlebotomus sand fly (night-feeding)

**Pathogen:**
- Promastigote (insect stage) → amastigote (mammalian intracellular)
- Obligate intracellular parasite of macrophages

**Clinical Manifestations:**

**Visceral Leishmaniasis (Kala-azar):**
- Fever (often low-grade), hepatosplenomegaly, weight loss
- Anemia, thrombocytopenia, hypergammaglobulinemia
- Duration: Months; fatal if untreated

**Cutaneous Leishmaniasis:**
- Ulcer at bite site; irregular borders
- Slow healing; post-kala-azar dermal leishmaniasis (PKDL) after treatment

**Diagnosis:**
- Bone marrow/spleen aspiration: Amastigotes (parasites in macrophages)
- Culture: Specialized media
- Antigen detection, PCR: Research settings

**Treatment:**
- Sodium stibogluconate (antimonial): IV/IM; cardiac monitoring
- Miltefosine: Oral; first-line emerging; teratogenic
- Liposomal amphotericin B: Severe/resistant cases

### Trypanosoma

**African Sleeping Sickness (Nagana):**
- Not endemic India; limited transmission in East/Central Africa
- Vector: Tsetse fly
- T. brucei gambiense: Chronic West African; CNS involvement years later
- T. brucei rhodesiense: Acute East African; rapid progression

**Treatment:** Suramin (early), melarsoprol (CNS phase)

**Chagas Disease (American Trypanosomiasis):**
- Not endemic India; Central/South America
- Vector: Triatomine bug ("kissing bug")
- Chronic: Cardiomyopathy, megacolon

## Key Takeaways

📋 **Summary & Examination Focus:**
1. Entamoeba: Colonization vs. invasive amoebiasis; serology differentiates
2. Giardia: Waterborne; stool antigen detection preferred
3. Malaria: ACT first-line; microscopy identifies species for P. vivax primaquine
4. Leishmania: Visceral (kala-azar) endemic Jharkhand/Bihar; intracellular parasite
5. Trypanosomes: African/American species; not endemic India
6. Diagnosis strategies vary: Stool microscopy (intestinal), blood smear (malaria), aspiration (leishmaniasis)`,
  },
  {
    topicCode: "MI-MOD-06-TOP-03",
    estimatedMinutes: 41,
    contentMd: `# Helminths: Nematodes

## Overview & Epidemiology

{{IMAGE: Ascaris lumbricoides adult worm showing characteristic morphology}}

Nematode infections affect >1.4 billion people globally; India remains high-burden zone. Soil-transmitted helminths (STH) include Ascaris, hookworm, Trichuris; blood-dwelling roundworms include Filarial worms and Strongyloides. School deworming programs and sanitation improvements are key control strategies.

## Soil-Transmitted Helminths (STH)

### Ascaris lumbricoides

🎓 **NMC Competency:** Ascariasis remains common in Indian children; recognition of complications (intestinal obstruction, cholangitis) enables timely management.

**Epidemiology:**
- Most prevalent helminth globally
- Fecal-oral transmission; embryonated eggs survive months in soil
- High prevalence areas: Poor sanitation, tropical climates

**Pathogenesis:**
- Eggs ingest → larvae hatch in small intestine
- Larvae penetrate mucosa → ascend trachea → re-swallow → mature adults in small intestine
- Peak worm load: 5-15 years age

**Clinical Manifestations:**

**Light Infection (Asymptomatic):**
- Most common; typically no symptoms
- May show growth stunting, malnutrition

**Heavy Infection:**
- **Acute Phase (Larval Migration):** Cough, dyspnea, fever (Löffler syndrome)
- **Intestinal Phase:**
  - Abdominal discomfort, borborygmi, diarrhea
  - Malabsorption, anemia, growth retardation
  - **Ascaris Obstruction:** Acute abdomen; surgical emergency (rare in endemic areas)

**Complications:**
- Biliary/pancreatic duct obstruction: Cholangitis, pancreatitis
- Perforation with peritonitis
- **Ascaris Pneumonia:** Hypersensitivity during larval migration

**Diagnosis:**

💡 **Teaching Pearl:** Anthelmintic efficacy depends on worm burden; mild infection may show persistent fecal eggs despite therapy.

- **Stool Microscopy:** Fertilized eggs (barrel-shaped, mammillated surface)
- **Quantitative Methods:** Kato-Katz, FECT (concentration)
- **Imaging:** CT abdomen for obstruction/perforation

**Treatment:**

- **Albendazole:** 400 mg single dose (standard)
- **Mebendazole:** 100 mg BD × 3 days
- **Ivermectin:** 150-200 μg/kg single dose (emerging option)

**Prevention:**
- Sanitation, hand washing, food hygiene
- School deworming programs (WHO recommendation: 2× annually)

### Hookworm (Necator americanus & Ancylostoma duodenale)

**Epidemiology:**
- 600+ million infected globally; India significant burden
- Penetrating skin (larvae); occupational risk (farmers, miners)

**Pathogenesis:**
- Filariform larvae penetrate skin → bloodstream → lungs → ascend trachea → swallow → intestine
- Attach to mucosa via buccal capsule; hematophagy (blood-feeding)
- Chronic infection → iron deficiency anemia

**Clinical Manifestations:**

**Acute Phase:**
- Ground itch: Pruritus at skin penetration site
- Cough, dyspnea during lung phase

**Chronic Phase:**
- **Hookworm Anemia:** Iron deficiency (major contribution to pediatric anemia in endemic areas)
- Hypoproteinemia: Protein malabsorption
- Growth stunting, impaired cognition

**Diagnosis:**
- Stool microscopy: Embryonated eggs (smaller than Ascaris)
- Quantitative: Worm burden assessment

**Treatment:**
- Albendazole, mebendazole (as for Ascaris)
- Iron supplementation: Anemia management

### Trichuris trichiura (Whipworm)

**Epidemiology:**
- 600 million infected; trichuriasis common India
- Fecal-oral transmission; eggs mature 15-30 days in soil

**Pathogenesis:**
- Eggs ingest → hatch in cecum/colon
- Adult worms embed in mucosa (anterior end in epithelium)
- Heavy infection → mucosal inflammation, dysentery

**Clinical Manifestations:**

- Light: Asymptomatic
- Heavy: Diarrhea, dysentery, tenesmus, anemia
- Rectal prolapse (children with severe infections)

**Diagnosis:**
- Stool microscopy: Distinctive lemon-shaped eggs (barrel with mucoid plugs)
- Colonoscopy: Worms visible (rare diagnostic procedure)

**Treatment:**
- Albendazole, mebendazole (as for other STH)

## Filaria (Vector-Transmitted)

### Wuchereria bancrofti & Brugia malayi (Lymphatic Filariasis)

**Epidemiology in India:**
- 120 million at risk; endemic Kerala, Tamil Nadu, Orissa, Andhra Pradesh
- Vector: Mosquito (Culex, Anopheles, Aedes depending on geography)
- Eradication target: WHO goal for filariasis elimination

🏥 **Clinical Practice:** Diethylcarbamazine (DEC) first-line; mass drug administration (MDA) programs aim elimination through annual DEC + albendazole.

**Pathogenesis:**
- Microfilariae in blood → ingested by mosquito
- Larval development in mosquito; transmission via bite
- Adult worms in lymphatics (20-year lifespan)
- Microfilaremia: 4-6 months post-infection

**Clinical Manifestations:**

**Acute Phase (Lymphangitis):**
- Fever, lymphangitis (ascending pattern)
- Lymphadenitis: Groin, axilla (nodal inflammation)
- Abscess formation
- Epididymitis, funiculitis (males)

**Chronic Phase:**
- **Lymphedema:** Progressive limb swelling; fibrosis
- **Elephantiasis:** Massive limb enlargement; skin thickening
- **Genital Manifestations:** Hydrocele (fluid around testis), chyluria (lymphatic-urinary fistula)

**Diagnosis:**

- **Microfilaremia Detection:**
  - Night blood smear (nocturnal periodicity; microfilariae appear evening-midnight)
  - Concentration techniques: Membrane filtration (more sensitive)
  - PCR: Reference standard

- **Imaging:** Ultrasound shows "filarial dance sign" (worm motility in lymphatics)

**Treatment:**

⚡ **High-Yield Alert:** DEC kills adult worms AND microfilariae; inflammatory reaction common (fever, malaise for 3-4 days); pretreatment with NSAIDs recommended.

- **Diethylcarbamazine (DEC):** 6 mg/kg daily × 12 days (first-line)
- **Ivermectin:** 150 μg/kg single dose (microfilaricide; kills microfilariae but not adults)
- **Albendazole:** 400 mg BD × 21 days (macrofilaricide; kills adult worms)

**Prevention:**
- Insecticide-treated bed nets
- Environmental management (mosquito breeding sites)
- Mass drug administration (MDA): Annual DEC + albendazole; 5-6 years to break transmission

### Onchocerca volvulus (River Blindness)

**Geographic Distribution:**
- Africa, Middle East, Yemen; limited cases India (endemic northeastern states)
- Vector: Blackfly (Simulium); rapid flowing water

**Clinical Manifestations:**
- Nodules (subcutaneous), dermatitis (severe itching)
- **Ocular Involvement:** Keratitis, iritis, optic neuritis → blindness
- Diagnosis: Skin snips (histology reveals microfilariae)
- Treatment: Ivermectin (microfilaricide), surgical excision nodules

### Loa loa (African Eye Worm)

**Geographic Restriction:**
- West/Central Africa; very rare India
- Transmission: Tabanid flies (day-biting)
- Clinical: Calabar swellings (migratory edema), subconjunctival migration

## Strongyloides stercoralis

**Epidemiology:**
- Prevalent warm/humid climates; often asymptomatic
- Autoinfection possible (internal multiplication)

**Pathogenesis:**
- Filariform larvae penetrate skin
- Lung phase similar to hookworm/Ascaris
- Unique: Autoinfection → chronic infection decades without reinfection

**Clinical Manifestations:**
- Light: Asymptomatic; larva currens (migratory pruritic rash at penile/perianal area)
- Heavy: Diarrhea, malabsorption
- **Hyperinfection (Immunosuppression):** Severe disseminated infection; Gram-negative sepsis (CNS larvae carry bacteria)

**Diagnosis:**
- Stool microscopy: Rhabditiform larvae (more reliable than eggs)
- Serology: IgG detection (complement fixation)
- Duodenal aspirate: If stool negative

**Treatment:**
- Ivermectin: 200 μg/kg daily × 2 days (preferred)
- Thiabendazole: Alternative (more side effects)
- Prolonged therapy in hyperinfection

## Key Takeaways

📋 **Summary & Examination Focus:**
1. STH: Ascaris, hookworm, Trichuris; fecal-oral transmission
2. Ascaris obstruction: Acute surgical complication
3. Hookworm: Significant contributor to pediatric anemia
4. Filaria: Lymphatic obstruction → lymphedema, elephantiasis, hydrocele
5. DEC kills both adult worms and microfilariae; inflammatory reaction expected
6. Strongyloides: Autoinfection risk; hyperinfection in immunosuppression
7. School deworming programs critical for STH control`,
  },
  {
    topicCode: "MI-MOD-06-TOP-04",
    estimatedMinutes: 40,
    contentMd: `# Helminths: Cestodes & Trematodes

## Cestodes (Tapeworms)

{{IMAGE: Scolex and proglottids of Taenia solium showing characteristic morphology}}

Cestode infections transmitted via undercooked meat (beef, pork) or contaminated water. Neurocysticercosis from Taenia solium pork tapeworm represents major public health challenge in India. Understanding transmission, complications, and treatment is essential for clinicians managing intestinal and tissue infections.

## Taenia solium (Pork Tapeworm)

### Overview & Transmission

🎓 **NMC Competency:** Neurocysticercosis is leading cause of acquired epilepsy in India; recognition and management prevents seizures, neurological disability.

**Epidemiology:**
- Endemic India (poor sanitation, pork consumption)
- High prevalence Northeastern states
- Transmission: Ingestion of undercooked pork containing cysticerci (larval stage)

**Parasitic Lifecycle:**
1. Humans ingest cysticercus (encysted larva in muscle)
2. Scolex (head) attaches to small intestinal mucosa
3. Strobila (segmented body) grows; mature proglottids shed eggs (fecal-oral transmission)
4. Eggs contaminate water/food
5. Pigs ingest eggs → penetrate intestine → disseminate as cysticerci in muscle

### Clinical Manifestations

**Intestinal Taeniasis:**
- Mostly asymptomatic
- Passage of proglottids per rectum (patient awareness)
- Mild abdominal discomfort, diarrhea
- Malabsorption (vitamin B12, iron) with heavy infections

**Cysticercosis (Tissue Invasion):**

Human acquires cysticercosis by ingesting T. solium eggs (not cysticerci):
- Fecal-oral transmission from taeniasis patients
- Autoinfection risk (if person with taeniasis ingests own eggs)
- Larvae penetrate intestine → disseminate to muscle, CNS, eye, subcutaneous tissue

**Neurocysticercosis (NCC):**

💡 **Teaching Pearl:** NCC stages (parenchymal, extraparenchymal, mixed) influence clinical presentation, imaging findings, and treatment strategy. Seizure is most common presentation (70-80% NCC patients).

**Clinical Stages:**

1. **Vesicular Stage (1-5 years):**
   - Viable cysticercus; minimal inflammation
   - Epilepsy (partial seizures), focal neurological deficits
   - Mass effect if multiple cysts

2. **Colloidal Stage (Involution):**
   - Cyst degenerates; intense inflammatory reaction
   - Edema, seizures, increased intracranial pressure
   - Most symptomatic phase

3. **Nodular-Calcified Stage (5+ years):**
   - Dead cyst becomes calcified nodule
   - Granulomatous inflammation
   - Residual seizures common
   - Calcification visible on imaging

**Clinical Syndromes:**

- **Parenchymal NCC:** Seizures (most common); cognitive impairment
- **Extraparenchymal NCC:**
  - Subarachnoid: Chronic meningitis, ischemic stroke (vasculitis)
  - Intraventricular: Hydrocephalus (obstructive); progressive neurological decline
- **Spinal NCC:** Myelopathy, radiculopathy
- **Subcutaneous/Muscular:** Nodules (diagnostic tissue for confirmation)

**Ocular/Orbital Involvement:**
- Cyst in vitreous → visual loss
- Subarachnoid involvement → vision loss, proptosis

### Diagnosis

🤔 **Critical Question:** Why is imaging insufficient for NCC diagnosis, and how does serology enhance diagnostic accuracy?

**Imaging (CT/MRI):**
- **CT:** Calcified lesions visible (late stage); better bone detail
- **MRI:** Superior soft tissue resolution; detects parenchymal, intraventricular, subarachnoid cysts

**Serology:**
- **ELISA (IgG/IgM):** Serum and CSF detection
  - Parenchymal NCC: ~50-70% sensitivity (serum), ~80% (CSF)
  - Extraparenchymal/intraventricular: Higher sensitivity
  - Calcified NCC: Lower sensitivity (antigen degradation)
- **Immunoblot:** More specific; reference standard

**CSF Analysis:**
- Lymphocytic pleocytosis (if inflammation)
- Elevated protein, normal glucose
- Serology in CSF highly specific

**Stool Microscopy:**
- Detects eggs (taeniasis diagnosis); confirms pork tapeworm source

### Treatment

**Taeniasis (Adult Tapeworm):**

- **Niclosamide:** 2 g single dose (kills adult worm)
- **Praziquantel:** 5-10 mg/kg single dose (alternative)

**Neurocysticercosis (Tissue Infection):**

⚡ **High-Yield Alert:** Antihelmintics cause cyst death, triggering inflammatory reaction; corticosteroids often required to manage edema/seizures. Timing of antihelmintic therapy critical (can worsen symptoms).

**Antihelmintic Therapy:**

1. **Parenchymal Cysts (Vesicular/Colloidal):**
   - **Albendazole:** 15 mg/kg daily × 15 days (preferred; CNS penetration)
   - **Praziquantel:** 50 mg/kg daily × 15-30 days (alternative)
   - Adjunctive corticosteroids: Dexamethasone 0.1 mg/kg/day during/after antihelmintic

2. **Intraventricular/Extraparenchymal Cysts:**
   - May require surgical removal (endoscopic ventriculoscopy)
   - Antihelmintic efficacy lower; surgical management often necessary
   - Corticosteroids (high-dose dexamethasone) essential

3. **Calcified Lesions:**
   - Antihelmintic therapy not recommended (cysts dead; inflammation risk)
   - Antiepileptic drugs for seizure control

**Supportive Management:**
- **Antiepileptic Drugs:** Phenytoin, levetiracetam, sodium valproate (seizure control)
- **Corticosteroids:** Dexamethasone/prednisone (manage inflammation, edema)
- **Osmotic Agents:** Mannitol, hypertonic saline (increased ICP management)

**Monitoring:**
- Repeat imaging (4-6 weeks post-antihelmintic to assess cyst resolution)
- CSF IgG titers (response to therapy)

## Taenia saginata (Beef Tapeworm)

**Epidemiology:**
- Similar transmission to T. solium (undercooked beef)
- Does NOT cause cysticercosis (larvae do not invade humans)
- Intestinal infection only

**Clinical/Diagnosis/Treatment:**
- As for T. solium taeniasis (niclosamide, praziquantel)
- Proglottid shedding; malabsorption

## Diphyllobothrium latum (Fish Tapeworm)

**Epidemiology:**
- Undercooked/raw freshwater fish (sushi, ceviche)
- Rare India; Nordic countries endemic

**Pathogenesis:**
- Longest human tapeworm (up to 10 meters)
- Vitamin B12 malabsorption → megaloblastic anemia
- Diagnosis: Eggs in stool (operculate)
- Treatment: Niclosamide, praziquantel

## Trematodes (Flukes)

### Schistosoma species

**Epidemiology:**
- Not endemic India; Africa, Middle East burden
- Water-contact transmission (cercariae penetrate skin)

**Pathogenesis:**
- Cercariae penetrate skin → migrate to lungs (acute infection)
- Mature in portal system (S. mansoni) or mesenteric vessels (S. japonicum)
- Egg deposition → chronic inflammation

**Clinical Manifestations:**
- **Acute Schistosomiasis:** Fever, myalgia, eosinophilia (cercarial dermatitis)
- **Chronic:** Colitis, rectal bleeding (S. mansoni); hepatosplenomegaly, portal hypertension
- **Urogenital:** S. haematobium causes hematuria, bladder cancer risk

**Diagnosis:** Stool/urine microscopy (eggs); serology

**Treatment:** Praziquantel 40 mg/kg daily × 3 days

### Paragonimus westermani (Lung Fluke)

**Epidemiology in India:**
- Northeast India endemic; raw crustacean consumption
- Water-linked transmission

**Pathogenesis:**
- Ingestion of infected crustacean → metacercaria excysts → penetrates intestine
- Migration to lungs; adult fluke in bronchiolar spaces
- Chronic cough, hemoptysis

**Diagnosis:**
- Sputum microscopy: Eggs visible
- CXR: Infiltrates, cystic lesions
- Serology

**Treatment:** Praziquantel 75 mg/kg daily × 3 days (divided doses)

### Fasciolopsis buski & Fasciola hepatica

**Fasciola hepatica (Liver Fluke):**
- Watercress/aquatic plants (raw vegetables)
- Bile duct inflammation → cholangitis, cholecystitis
- Diagnosis: Stool microscopy (eggs)
- Treatment: Triclabendazole, praziquantel

**Clonorchis sinensis (Chinese Fluke):**
- Freshwater fish ingestion
- Chronic cholangitis; cholangiocarcinoma risk
- Endemic Southeast Asia; sporadic India

## Key Takeaways

📋 **Summary & Examination Focus:**
1. T. solium: Pork tapeworm; transmission via meat or eggs
2. Neurocysticercosis: Leading cause of acquired epilepsy India; imaging + serology diagnose
3. NCC stages (vesicular, colloidal, calcified) guide treatment
4. Antihelmintics trigger inflammation; corticosteroids essential
5. Extraparenchymal cysts may require surgical management
6. Other cestodes: T. saginata (beef), D. latum (fish—B12 deficiency)
7. Trematodes: Schistosoma (endemic Africa), Paragonimus (lung fluke—Asia), Fasciola (liver fluke)
8. Praziquantel: First-line for most helminthic infections`,
  },
  {
    topicCode: "MI-MOD-07-TOP-01",
    estimatedMinutes: 42,
    contentMd: `# Hospital Infections & Bioterrorism

## Healthcare-Associated Infections (HAI)

{{IMAGE: Diagram showing routes of HAI transmission (patient-to-patient, environment-to-patient, device-related)}}

Healthcare-associated infections affect 5-10% of hospitalized patients in Indian hospitals, prolonging stay by 3-5 days and increasing mortality 2-3 fold. Understanding epidemiology, prevention, and outbreak management is essential for infection control programs.

### Common HAI Pathogens

🎓 **NMC Competency:** HAI prevention requires multidisciplinary approach; knowledge of standard and transmission-based precautions essential for all healthcare workers.

**Device-Associated Infections:**

1. **Catheter-Associated UTI (CAUTI):**
   - Risk increases 3-7% daily post-catheterization
   - Primary pathogens: E. coli, P. aeruginosa, A. baumannii, Enterococcus
   - Prevention: Avoid unnecessary catheters; remove early; aseptic insertion/maintenance
   - Diagnosis: >100,000 CFU/mL (with symptoms); avoid treating asymptomatic bacteriuria

2. **Central Line-Associated Bloodstream Infection (CLABSI):**
   - Risk: 1-3 per 1000 catheter-days
   - Common pathogens: Staphylococcus aureus (MRSA), Coagulase-negative staph, Candida, P. aeruginosa
   - Prevention: Aseptic insertion (bundle approach), chlorhexidine skin prep, prompt removal
   - Diagnosis: Peripheral blood culture + CLABSI criteria

3. **Ventilator-Associated Pneumonia (VAP):**
   - Risk increases 1% daily post-intubation
   - Pathogens: P. aeruginosa (45%), A. baumannii (35%), S. aureus/MRSA (20-30%)
   - Prevention: VAP bundle (HOB elevation, oral hygiene, sedation interruption, early extubation)
   - Diagnosis: Quantitative sputum culture (>10^4 CFU/mL) or BAL (>10^4 CFU/mL)

### Operative Site Infections (SSI)

**Classification:**
1. **Superficial Incisional:** Skin/subcutaneous; within 30 days
2. **Deep Incisional:** Fascia/muscle; within 30 days
3. **Organ/Space:** Deep structures; within 1 year (some implants)

**Risk Factors:**
- Patient: Age, diabetes, obesity, immunosuppression
- Operative: Duration (>75th percentile), emergency, contamination class
- Environment: Inadequate sterility, poor air handling

**Prevention:**
- Prophylactic antibiotics: Preoperative timing critical (1-2 hours before incision)
- Skin antisepsis: Chlorhexidine/povidone-iodine
- Normothermia maintenance
- Sterile technique

**Diagnosis:**
- Purulent drainage, opening, systemic signs within 30 days
- Culture confirms organisms

### Nosocomial Pneumonia (HAP)

💡 **Teaching Pearl:** HAP in non-ventilated patients has different risk profile than VAP; empiric coverage typically narrower initially.

**Risk Factors:**
- Mechanical ventilation (VAP) vs. non-ventilated (HAP)
- Supine position, nasogastric tube, recent antibiotics
- Severity of underlying illness

**Microorganisms:**
- Early (<4 days): Community organisms (S. pneumoniae, H. influenzae, S. aureus)
- Late (≥4 days): Gram-negative rods, P. aeruginosa, A. baumannii, MRSA

**Diagnosis:**
- Clinical: Fever, purulent sputum, infiltrate on CXR
- Microbiological: Sputum culture, BAL
- Threshold: ≥10^3 CFU/mL (sputum), ≥10^4 CFU/mL (BAL)

**Management:**
- Empiric coverage: Early HAP (beta-lactam ± aminoglycoside), Late HAP/VAP (antipseudomonal agents)
- De-escalation based on culture results

## Infection Prevention & Control (IPC)

**Standard Precautions (All Patients):**
- Hand hygiene: Most important intervention
- PPE: Gloves, gown, mask, eye protection (based on exposure risk)
- Respiratory hygiene: Cough etiquette
- Safe injection practices
- Environmental cleaning/disinfection
- Medical waste management

**Transmission-Based Precautions:**
1. **Contact Precautions:** MRSA, VRE, C. difficile, norovirus
2. **Droplet Precautions:** Influenza, measles, meningococcal
3. **Airborne Precautions:** TB, measles, varicella, COVID-19

**Surveillance & Outbreak Management:**

⚡ **High-Yield Alert:** Outbreak investigation requires case definition, line listing, epidemic curve, and identification of common source; control measures target interruption.

**Steps:**
1. Verify outbreak (cluster unusual; exceed expected baseline)
2. Case definition (clinical + epidemiological)
3. Line listing: Case details, onset, exposure
4. Describe epidemiology: Epidemic curve, attack rate, demographic patterns
5. Identify source: Common exposure analysis, environmental samples
6. Implement control measures: Isolation, cohort nursing, disinfection, staff screening
7. Communicate: Transparency to staff, patients, administration

## Biological Threats & Bioterrorism

{{IMAGE: Petri plate showing Bacillus anthracis colonies with characteristic ground-glass appearance}}

**Potential Bioterrorism Agents (CDC Category A):**

🏥 **Clinical Practice:** Recognition of unusual disease clusters, atypical presentations, or disease patterns inconsistent with normal epidemiology should raise suspicion for intentional release. Early reporting to public health authorities critical.

### Bacillus anthracis (Anthrax)

**Pathogen Characteristics:**
- Gram-positive rod; spore-forming
- Vegetative form produces lethal factor + edema toxin (exotoxins)
- Spores: Environmentally stable, infectious via inhalation/cutaneous/gastrointestinal routes

**Clinical Forms:**

1. **Cutaneous Anthrax (80% cases):**
   - Painless black eschar (pathognomonic "malignant pustule")
   - Surrounding edema, regional lymphadenopathy
   - Mortality: <1% with antibiotics, 20% untreated

2. **Inhalation Anthrax (most dangerous):**
   - Prodrome: Fever, myalgia, malaise (resembles influenza)
   - Rapid progression: Severe dyspnea, hemoptysis, shock
   - Mortality: 45-50% with treatment, >95% untreated
   - Imaging: Mediastinal widening characteristic

3. **Gastrointestinal Anthrax (rare):**
   - Hemorrhagic enteritis, mesenteric lymphadenitis
   - Hemorrhagic ascites
   - Mortality: 25-60%

**Diagnosis:**
- Blood culture (before antibiotics)
- PCR: Rapid identification
- Imaging: Mediastinal widening (inhalation)

**Treatment:**
- Ciprofloxacin or doxycycline: 60 days post-exposure
- IV penicillin G (if susceptible) for inhalation anthrax

**Prevention:**
- Anthrax vaccine (for high-risk occupational groups)
- PEP: Antibiotics × 60 days post-exposure

### Yersinia pestis (Plague)

**Clinical Forms:**
- **Bubonic:** Buboes (regional lymph nodes), fever, septic shock
- **Pneumonic:** Dyspnea, hemoptysis, rapid mortality if untreated (95%)
- **Septicemic:** Disseminated, tissue necrosis (blackened extremities—"Black Death" name origin)

**Treatment:**
- Streptomycin or gentamicin: First-line
- Alternative: Doxycycline, fluoroquinolones

**Concern:** Antimicrobial resistance; weaponization potential

### Smallpox (Variola)

**Status:** Eradicated 1980; only exists in biosafety level 4 laboratories (CDC, Ivanovsky Institute)

**Bioterrorism Concern:**
- 30% mortality rate; communicable (respiratory droplets)
- No reliable treatment; vaccine protective but carries risks
- Pandemic potential if intentionally released

**Response Measures:**
- Vaccination + contact tracing
- Isolation protocols
- Ring vaccination strategy

### Botulinum Toxin

**Pathophysiology:**
- Neurotoxin blocks acetylcholine release at neuromuscular junction
- Flaccid paralysis; respiratory failure if untreated

**Weaponization Risk:**
- Lethal dose: 1-3 nanograms/kg
- Environmental stability high

**Treatment:**
- Supportive care (mechanical ventilation if respiratory involvement)
- Botulism antitoxin (heptavalent, trivalent options)
- No specific cure; supportive care until neuromuscular function recovers

## Key Takeaways

📋 **Summary & Examination Focus:**
1. HAI: Device-associated (CAUTI, CLABSI, VAP) most common; prevention bundles reduce incidence
2. IPC: Standard precautions foundation; transmission-based precautions for specific pathogens
3. Outbreak investigation: Case definition, line listing, epidemic curve, source identification
4. Biological threats: B. anthracis (inhalation most dangerous), Y. pestis (pneumonic), smallpox (eradicated)
5. Anthrax: Black eschar (cutaneous), mediastinal widening (inhalation), high mortality inhalation form
6. Post-exposure prophylaxis: Antibiotics (anthrax) or vaccination (smallpox) within optimal timeframe
7. Reporting: Unusual clusters, atypical presentations require public health notification`,
  },
  {
    topicCode: "MI-MOD-07-TOP-02",
    estimatedMinutes: 39,
    contentMd: `# Antimicrobial Resistance

## Overview & Global Crisis

{{IMAGE: Antibiogram showing resistance patterns of major pathogens in Indian hospital settings}}

Antimicrobial resistance (AMR) represents existential threat to modern medicine. India ranks among highest burden countries; WHO estimates 60,000-100,000 deaths annually from drug-resistant infections. Overprescription, self-medication, subtherapeutic dosing, and agricultural use drive rapid resistance evolution. Understanding mechanisms, epidemiology, and stewardship is critical for clinicians.

## Resistance Mechanisms

🎓 **NMC Competency:** Understanding molecular mechanisms guides rational antibiotic selection and predicts treatment response; resistance must be anticipated in empiric therapy design.

**Major Mechanisms:**

1. **β-Lactamase Production:**
   - Enzymatic hydrolysis of β-lactam ring
   - TEM-1, SHV-1: Older plasmid-mediated enzymes
   - Extended-spectrum β-lactamase (ESBL): Resistance to 3rd generation cephalosporins
   - AmpC: Resistance to cephalosporins, inhibitor-resistant
   - Carbapenemase (MBL, Serine carb): Broad-spectrum resistance

2. **Altered Penicillin-Binding Proteins (PBPs):**
   - Modified targets; reduced binding affinity for β-lactams
   - Mechanism: MRSA (mecA gene; altered PBP2a), S. pneumoniae (alterations in ftsI, pbp2b, pbp2x genes)

3. **Efflux Pumps:**
   - Active transport of antibiotic out of cell
   - Multidrug efflux (MexAB-OprM in Pseudomonas): Fluoroquinolone, carbapenem resistance
   - Expression: Constitutive or inducible

4. **Target Modification:**
   - Ribosomal protection: Tetracycline resistance (ribosomal binding site alteration)
   - Aminoglycoside modification: Enzymatic inactivation (acetylation, adenylation, phosphorylation)
   - QRDR mutations: Fluoroquinolone resistance (topoisomerase II/IV mutations)

5. **Reduced Permeability:**
   - Outer membrane porins loss/downregulation
   - Gram-negative organisms: Carbapenem resistance via porin loss

## Resistance Patterns in India

💡 **Teaching Pearl:** India's resistance crisis driven by: Unregulated antibiotic sales (no prescription required in many pharmacies), agricultural antimicrobial use, hospital overcrowding, and suboptimal infection prevention.

**Major Concerns:**

**ESBL-Producing Gram-Negatives:**
- Incidence: 30-50% of E. coli, Klebsiella in Indian hospitals
- Source: Community as well as nosocomial
- Resistance: 3rd gen cephalosporins, β-lactam inhibitor combinations
- Treatment: Carbapenems

**Carbapenem-Resistant (CRPF, CRAB, CRPA):**
- CRPF: 5-20% prevalence in India (variable by region)
- Mechanisms: KPC (serine), MBL (metallo), OXA-48 (serine) carbapenemases
- Treatment options: Colistin, fosfomycin, tigecycline (limited availability India)

**MRSA:**
- Prevalence: 30-50% of S. aureus in Indian hospitals
- Community MRSA (CA-MRSA) emerging (PVL+ strains)
- Treatment: Vancomycin, linezolid, daptomycin

**Vancomycin-Resistant Enterococcus (VRE):**
- Emerging nosocomial pathogen
- Resistance: High-level vancomycin (VanA phenotype)
- Limited options: Linezolid, tigecycline

**Fluoroquinolone-Resistant Gram-Negatives:**
- QRDR mutations widespread
- Resistance rate: >40% in many Indian hospitals
- Impact: Restricted use in empiric therapy

## Resistance in Mycobacterium tuberculosis

⚡ **High-Yield Alert:** MDR-TB (resist. isoniazid + rifampicin) and XDR-TB (MDR + fluoroquinolone + injectable resist.) require 20+ month regimens; detection requires molecular testing (GeneXpert MTB/RIF, LPA).

**Prevalence in India:**
- MDR-TB: 25-30% among new TB cases (highest global)
- XDR-TB: 6-8% of MDR-TB
- TDR-TB (totally drug-resistant): Emerging concern

**Mechanisms:**
- katG mutations (isoniazid resistance)
- rpoB mutations (rifampicin resistance)
- gyrA/gyrB mutations (fluoroquinolone resistance)
- 16S rRNA mutations (injectable resistance)

**Treatment Implications:**
- MDR-TB: 20-month regimen (levofloxacin, bedaquiline, linezolid, clofazimine, pyrazinamide, ethambutol)
- XDR-TB: Newer agents (bedaquiline, linezolid, meropenem) required

## Antibiotic Stewardship Programs (ASP)

**Core Elements (CDC CORE):**

1. **Commitment:** Leadership support; resource allocation
2. **Oversight:** Multidisciplinary team (infectious disease, microbiology, pharmacy, nursing, epidemiology)
3. **Accountability:** Metrics tracking (resistance rates, antibiotic consumption, outcomes)
4. **Drug Use Evaluation:** Review prescribing patterns; audit & feedback

**Key Interventions:**

1. **Preauthorization/Approval:**
   - Restrict broad-spectrum agents (carbapenems, colistin, linezolid)
   - Require justification for use beyond formulary guidelines

2. **Prospective Audit & Feedback:**
   - Review new prescriptions; provide feedback (verbal/written)
   - Goal: De-escalation to narrow-spectrum agents when possible

3. **Antibiograms:**
   - Institution-specific resistance data
   - Guides empiric therapy selection
   - Regularly updated (quarterly/biannually)

4. **Clinical Practice Guidelines:**
   - Evidence-based protocols for common infections
   - Standardize empiric coverage, duration, de-escalation triggers

5. **Education:**
   - Prescriber education: Resistance patterns, appropriate use
   - Public awareness: Finish courses, avoid self-medication

**Metrics:**
- Antibiotic utilization: Defined daily doses (DDD)
- Resistance rates: % susceptible organisms
- Clinical outcomes: Mortality, readmission, length of stay
- Cost analysis: Reduction in expensive agents

## Infection Prevention as Resistance Control

🏥 **Clinical Practice:** Excellent infection prevention reduces transmission of resistant organisms more effectively than antibiotics; prevention reduces need for treatment.

**Components:**
- Hand hygiene: Most important intervention
- Contact precautions: MRSA, VRE, ESBL-producing organisms
- Source control: Wound care, drainage management
- Device management: Early removal (catheters, lines)
- Environmental cleaning: Disinfection of high-touch surfaces

**Impact:**
- 20-30% reduction in HAI with comprehensive IPC programs
- Indirect reduction in resistance pressure via decreased transmission

## Emerging Resistance Challenges

**MCR-1 (Mobilized Colistin Resistance):**
- Plasmid-mediated polymyxin resistance (colistin)
- Detected in Enterobacteriaceae (India reported)
- Concern: Loss of last-resort antibiotic

**Fungal Resistance:**
- Candida auris: Multidrug-resistant, nosocomial
- Azole-resistant Aspergillus: Emerging in immunocompromised

## Genomic Surveillance & Detection

**Whole-Genome Sequencing (WGS):**
- Identifies resistance genes, resistance mechanisms
- Outbreak investigation (strain typing)
- Transmission tracking

**Rapid Molecular Tests:**
- GeneXpert MTB/RIF: TB resistance detection (2 hours)
- Rapid MRSA detection: PCR-based (2-3 hours)
- Advantages: Speed, sensitivity; enables rapid isolation/treatment decisions

## Key Takeaways

📋 **Summary & Examination Focus:**
1. AMR mechanisms: β-lactamase, PBP alteration, efflux pumps, permeability reduction
2. India's crisis: ESBL, CRPF/CRAB/CRPA, MRSA, VRE prevalence >30-50% in hospitals
3. MDR-TB: 25-30% of new TB; requires 20+ month specialized regimens
4. Stewardship: Preauthorization, prospective audit, antibiograms, guidelines
5. Infection prevention: De-escalation strategy; reduces transmission of resistant organisms
6. Emerging threats: MCR-1 (colistin resistance), C. auris (fungal), TDR-TB
7. Surveillance: WGS enables outbreak detection, transmission tracking, resistance monitoring
8. Public health response: Regulation of antibiotic sales, awareness, international cooperation`,
  },
  {
    topicCode: "MI-MOD-07-TOP-03",
    estimatedMinutes: 38,
    contentMd: `# Diagnostic Microbiology

## Overview & Specimen Collection

{{IMAGE: Laboratory workflow diagram showing specimen processing from collection to reporting}}

Diagnostic microbiology translates clinical suspicion into etiological diagnosis, enabling targeted therapy and infection control. Quality begins at bedside with proper specimen collection, transport, and processing. Understanding specimen types, culture conditions, and interpretation is fundamental to clinical microbiology practice.

## Specimen Collection Principles

🎓 **NMC Competency:** Improper specimen collection is most common cause of diagnostic error; clinicians responsible for quality from collection through reporting interpretation.

**General Principles:**

1. **Appropriate Specimen Type:**
   - Infection site (not contaminated area)
   - Adequate quantity for testing
   - Appropriate timing (e.g., blood cultures before antibiotics)

2. **Collection Technique:**
   - Aseptic: Prevents exogenous contamination
   - Labeling: Patient identification, collection time, source
   - Sterile containers (for culture) vs. preservative tubes (for specific agents)

3. **Timing & Transport:**
   - Timely processing: Within 2 hours optimal (bacteria viable count decline)
   - Temperature: Room temperature (bacteria), refrigerated (viruses, parasites)
   - Avoid delays: Quantitative results affected

**Red Flag Contamination:**
- Sputum with saliva (respiratory culture useless if saliva-predominant)
- Urine with perineal skin flora (CAUTI vs. contamination differentiation)
- Blood with skin flora (likely contamination; context determines if pathogenic)

## Blood Culture

**Indications:**
- Fever in hospitalized patients, immunocompromised
- Sepsis evaluation
- Endocarditis suspicion (3-5 sets before antibiotics)
- Occult bacteremia evaluation (children with fever)

**Collection:**

💡 **Teaching Pearl:** Blood culture contamination common (3-5%); prevent with proper aseptic technique. Skin prep with chlorhexidine superior to iodine (kills skin flora better).

- **Volume:** 10 mL per bottle (aerobic + anaerobic set)
- **Timing:** At fever peak if possible (higher yield)
- **Site:** Peripheral vein (not from lines, lines may have CLABSI)
- **Skin Preparation:** Chlorhexidine 2% or iodine-based; allow to dry (30-60 seconds)
- **Sets:** 2-3 sets (improves sensitivity; repeated isolation = true pathogens)

**Incubation & Identification:**
- Automated systems: Continuous monitoring (BacT/Alert, BACTEC)
- Time to positivity: Minutes to days (depends on organism load, species)
- Gram stain, culture identification per protocol

**Interpretation:**

- **True Pathogen (Significant Isolates):**
  - S. aureus (MSSA/MRSA): Any isolation significant
  - Gram-negative rods: Generally significant
  - S. viridans: Consensus ≥1 set significant in endocarditis context
  - Enterococcus, Candida: Clinical context guides significance

- **Contamination (Likely):**
  - Coagulase-negative staphylococci: <2 sets suggest contamination (unless neutropenic, prosthetic device)
  - Bacillus, Corynebacterium: Usually skin flora (unless catheter, prosthetic)
  - Clostridium perfringens: Sporadic; may indicate perforation

## Respiratory Specimens

**Types & Indications:**

1. **Sputum Culture:**
   - Community-acquired pneumonia (CAP)
   - Hospital-acquired pneumonia (HAP)
   - Chronic respiratory disease (COPD exacerbation, bronchiectasis)
   - Quality: Minimal saliva, abundant neutrophils, few epithelial cells

2. **Bronchoalveolar Lavage (BAL):**
   - VAP diagnosis (gold standard; quantitative >10^4 CFU/mL)
   - Immunocompromised with respiratory symptoms (Pneumocystis, fungal)
   - Lung transplant rejection/infection surveillance

3. **Endotracheal Aspirate:**
   - VAP diagnosis (quantitative: >10^6 CFU/mL significance)
   - Less specific than BAL; easier collection

**Culture Processing:**
- Gram stain: Morphology, inflammatory response assessment
- Culture: Selective media (chocolate agar for Haemophilus, MACs for gram-negatives)
- Incubation: 35-37°C, 5% CO2 (most respiratory pathogens)
- Reporting: Predominant organisms (pure vs. mixed culture interpretation)

**Interpretation Challenges:**

🤔 **Critical Question:** How do you differentiate colonization from infection in respiratory specimens?

- Pure culture of single organism with predominant granulocytes → likely pathogen
- Mixed flora (3-4 organisms) with epithelial cells → likely contamination/colonization
- P. aeruginosa isolated: Context (chronic lung disease vs. acute HAP)?

## Urine Culture

**Indications:**
- Symptomatic UTI (dysuria, frequency, urgency)
- Bacteriuria in pregnancy (screen all, treat all)
- Fever in catheterized patients (fever attribution difficult; avoid over-treatment)
- Renal transplant screening

**Collection Methods:**

**Clean-Catch Midstream:**
- Standard for outpatient/ambulatory
- Technique: Genital cleaning, discard first stream, collect midstream
- Contamination rate: 10-20% (skin flora)
- Interpretation: ≥100,000 CFU/mL (≥10^5 CFU/mL traditional)

**Catheterized Urine (Straight Catheterization/Indwelling):**
- Catheter specimen (before 3+ weeks catheterization): ≥100 CFU/mL significant
- Long-term catheter: Colonization common; culture only if symptomatic
- Avoid sampling from drainage bag (contamination likely)

**Suprapubic Aspiration (Gold Standard):**
- Any growth significant (even 1 CFU/mL) if gram-positive cocci, gram-negative rods
- Eliminates contamination; indicated for recurrent unexplained infections

**Culture Processing:**
- Immediate inoculation: Quantitative viable count affected by storage
- Semi-quantitative: Quantitative loop inoculation standard
- Differential media: Chromogenic media (identify E. coli, Klebsiella, other common uropathogens rapidly)

**Interpretation:**

- **UTI Diagnosis Threshold:**
  - Symptomatic women: ≥100 CFU/mL urethra/bladder; ≥1000 CFU/mL midstream acceptable
  - Asymptomatic bacteriuria: ≥100,000 CFU/mL repeated cultures (NOT treated except pregnant women)
  - Catheterized patients: Fever + ≥100 CFU/mL (symptomatic criteria; avoid treating asymptomatic)

## Wound Culture

**Types:**
- Purulent discharge (abscess, infected wound)
- Burn wound eschar
- Surgical site infection (superficial, deep, organ/space)

**Collection:**
- Aspirate/purulent material (preferred; fewer skin flora contaminants)
- Swab from wound edges (less preferred; contamination risk)
- Anaerobic precautions: Anaerobic transport tube if anaerobic infection suspected

**Culture Processing:**
- Aerobic, anaerobic, fungal media per clinical suspicion
- Gram stain: Guides preliminary therapy
- Semi-quantitative results: Growth amount correlates with infection vs. colonization

**Interpretation:**
- Heavy pure growth → pathogenic
- Sparse mixed flora → likely colonization
- Synergistic cultures (aerobe + anaerobe): Anaerobic potential (abdominal, sacral wounds)

## Stool Culture

🏥 **Clinical Practice:** Stool culture indicated for acute bloody diarrhea, severe disease, immunocompromised; avoid in non-inflammatory diarrhea (viral most common).

**Indications:**
- Acute dysentery (bloody diarrhea)
- Severe diarrhea with systemic illness
- Immunocompromised patients
- Food-borne outbreak investigation
- NOT indicated: Mild watery diarrhea (viral, self-limited)

**Pathogens:**
- Salmonella, Shigella: Invasive gram-negative rods
- Campylobacter: Microaerophilic (special atmosphere required)
- EAEC (enteroinvasive E. coli): Non-standard culture
- Vibrio: Selective media required

**Culture Media:**
- Selective: MacConkey (lactose-fermenting gram-negatives), Salmonella-Shigella (SS)
- Differential: CHROM agars (species-specific color differentiation)

**Interpretation:**
- Pathogenic bacterial diarrhea (Salmonella, Shigella): Single organism dominance
- Commensal flora (normal flora): Mixed culture; avoid reporting

## CSF Culture & Testing

**Collection:**
- Lumbar puncture: Aseptic technique; blood culture bottles preferred for CSF
- Quantity: 1-5 mL minimum (bacterial meningitis); more for fungal/TB testing

**Processing:**
- **Gram Stain:** Bacterial morphology; guides empiric therapy
- **Culture:** Chocolate agar (meningococcus, pneumococcus), blood agar
- **Specific Tests:**
  - Bacterial antigen detection (Latex agglutination): Rapid (10 minutes)
  - PCR: Meningococcal, pneumococcal detection
  - Acid-fast stain & TB culture: Mycobacterium
  - India ink, culture: Cryptococcus

**Interpretation:**
- Bacterial meningitis: Positive culture diagnostic
- Sensitivity: ~75-90% with good technique; CSF >0.5 mL optimal

⚡ **High-Yield Alert:** Negative CSF culture with clinical meningitis (pleocytosis, protein elevation) common if antibiotics given pre-LP; do not delay empiric therapy awaiting culture results.

## Rapid Diagnostic Methods

**Antigen Detection (Immunological):**
- Flu, RSV, COVID-19: Lateral flow rapid tests (15-30 min)
- Advantages: Speed; point-of-care capacity
- Disadvantages: Lower sensitivity than PCR (85-95% vs. 95-99%)

**Nucleic Acid Testing (NAT/PCR):**
- RT-PCR: Respiratory viruses (flu, COVID, RSV), bacterial DNA (TB, meningitis PCR panels)
- Sensitivity/Specificity: >95% (gold standard for most pathogens)
- Turnaround: 2-24 hours (multiplex panels)

**Matrix-Assisted Laser Desorption/Ionization (MALDI-TOF):**
- Microbial identification: Proteins analyzed via mass spectrometry
- Speed: Minutes from culture growth
- Organisms: Bacteria, Candida (not molds, mycobacteria)

## Key Takeaways

📋 **Summary & Examination Focus:**
1. Specimen quality: Collection technique, timing, transport critical
2. Blood culture: Aseptic collection 2-3 sets; interpretation considers contamination risk
3. Respiratory: Sputum quality assessment; BAL quantitative for VAP diagnosis
4. Urine: Threshold varies by collection method; avoid over-treating asymptomatic bacteriuria
5. Stool: Indicated acute dysentery; avoid unnecessary culture in mild diarrhea
6. CSF: Diagnostic if positive; negative does not exclude meningitis (antibiotics given)
7. Rapid diagnostics: Antigen detection (speed), PCR (sensitivity); complement culture
8. Interpretation: Clinical context guides significance; culture results must match clinical picture`,
  },
];
