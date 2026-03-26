export const microbiologyLecturesPart1: Array<{
  topicCode: string;
  contentMd: string;
  estimatedMinutes: number;
}> = [
  {
    topicCode: "MI-MOD-01-TOP-01",
    contentMd: `# Sterilization & Disinfection

## Overview
Sterilization and disinfection are fundamental microbiological practices essential for infection control in clinical settings across India. These processes eliminate or reduce microbial load to prevent nosocomial infections, a significant burden in Indian hospitals.

## Key Concepts

**🎓 Definition & Distinction:**
- **Sterilization**: Complete elimination of all microorganisms (spores included). Achieved by physical or chemical means. Essential for instruments, medications, and medical devices.
- **Disinfection**: Reduction of microbial load to safe levels without necessarily eliminating spores. Used for environmental surfaces, equipment, and skin.

{{IMAGE: Sterilization vs Disinfection comparison chart with effectiveness levels}}

**💡 Physical Methods:**
- **Autoclaving (High-pressure steam)**: 121°C, 15-20 minutes at 15 psi. Gold standard for medical instruments. Most reliable method endorsed by India's biomedical waste management rules.
- **Dry heat**: 160-180°C, 1-2 hours. Used for powders, oils, glassware. Slower but excellent penetration.
- **Filtration**: HEPA filters (0.22 μm) for heat-sensitive solutions. Used in pharmaceutical manufacturing and air quality control in operation theaters.
- **Radiation**: UV (germicidal), gamma rays, beta particles. UV used in operation theaters, gamma in pharmaceutical sterilization.

**🤔 Chemical Methods:**
- **Alcohols (70% ethanol/isopropanol)**: Rapid surface disinfectant. Denatures proteins, disrupts cell membranes. Used for skin antisepsis before injections—standard in Indian vaccination programs.
- **Chlorine compounds (0.5% sodium hypochlorite)**: Powerful oxidizing agent. Used for environmental disinfection, water treatment. Critical post-COVID for surface decontamination.
- **Glutaraldehyde (2%)**: High-level disinfection. Used for endoscopes, surgical instruments. 10-12 hours contact time required.
- **Formaldehyde**: Gas sterilization for heat-sensitive materials. Used in hospital vapor-phase sterilization units.

{{IMAGE: Chemical disinfectants and their microbicidal spectra}}

**⚡ Antimicrobial Mechanisms:**
- Protein denaturation and coagulation
- Cell membrane disruption and lysis
- DNA/RNA damage and mutation
- Oxidative stress and free radical formation
- Enzyme inhibition

**🏥 Clinical Application in India:**
Indian healthcare facilities follow Biomedical Waste Management Rules (2016):
- Yellow category (infectious waste): Steam sterilization at 121°C
- Red category (chemical waste): Chemical disinfection before disposal
- Black category (general waste): Segregation, no special treatment

Hospital-acquired infection (HAI) rates in India: 7-10% vs global 5%. Enhanced sterilization protocols essential in resource-limited settings.

**📋 Assessment Competency:**
NMC competency: Demonstrate knowledge of sterilization methods, select appropriate method for various materials, ensure proper monitoring through biological indicators (Bacillus spores), and implement quality assurance.

## Exam Points
- Autoclaving temperature, pressure, time variations for different materials
- Differences between bacteriostatic and bactericidal agents
- Limitations of each method (e.g., autoclaving damages certain plastics)
- Efficacy testing: biological, chemical, and physical indicators
- Prion resistance: formaldehyde partially resistant, only autoclaving effective
`,
    estimatedMinutes: 45,
  },
  {
    topicCode: "MI-MOD-01-TOP-02",
    contentMd: `# Microscopy & Staining

## Overview
Microscopy and staining techniques enable visualization and identification of microorganisms. These foundational skills are essential for clinical microbiology diagnosis in Indian laboratories.

## Key Concepts

**🎓 Microscopy Types:**
- **Light microscopy**: Magnification up to 1000x with oil immersion. Uses visible light. Most accessible in Indian diagnostic labs.
- **Electron microscopy**: Transmission (TEM) and scanning (SEM). Magnification >100,000x. Limited to specialized centers; primarily for research.
- **Confocal microscopy**: Fluorescent imaging with depth discrimination. Used for immunofluorescence diagnosis of pathogens.
- **Phase contrast**: Visualizes unstained, living organisms. Essential for sperm analysis, parasites, fungal morphology.

{{IMAGE: Microscope resolution hierarchy from light to electron microscopy}}

**💡 Bacterial Staining Techniques:**
- **Gram staining**: Crystal violet + Gram's iodine → Gram-positive (purple) vs Gram-negative (pink). Most crucial stain in clinical microbiology. Gram-positive: Staphylococcus, Streptococcus; Gram-negative: E. coli, Vibrio, Salmonella.
- **Acid-fast staining**: Carbolfuchsin + acid-alcohol. Identifies mycobacteria (Mycobacterium tuberculosis, M. leprae). Critical for TB diagnosis in India where ~2.6 million TB cases annually.
- **Methylene blue**: Simple stain for demonstration. Used in teaching labs.
- **Immunofluorescence**: Antibody-conjugated fluorescent dyes. Rapid diagnosis of respiratory pathogens, Legionella, Chlamydia.

{{IMAGE: Gram staining procedure steps and interpretation}}

**🤔 Special Stains:**
- **Spore staining (Schaeffer-Fulton)**: Identifies bacterial spores (Bacillus, Clostridium). Heat malachite green penetrates spore coat.
- **Flagella staining (Leifson's)**: Mordant-based; visualizes flagella and motility. Diagnostic for spirochetes.
- **Capsule staining (India ink)**: Negative stain; capsule appears as halo. Useful for Streptococcus pneumoniae, Klebsiella.

**⚡ Interpretation & Morphology:**
- Coccus vs bacillus vs spirillum shapes
- Gram staining interpretation in clinical samples (sputum, CSF, urine, wound)
- Catalase and oxidase tests: rapid biochemical identification
- Motility assessment by hanging drop preparation

**🏥 Indian Clinical Context:**
- TB diagnosis: Sputum smear microscopy (AFB) is first-line screening in primary health centers across India. GeneXpert MTB/RIF now endorsed by NTI for faster detection.
- UTI diagnosis: Gram stain of urine shows WBCs and bacteria; culture essential for confirmation.
- Meningitis workup: CSF Gram stain critical for presumptive diagnosis and empiric antibiotic selection.
- Healthcare worker training: WHO/NTI standards require proficiency in Gram and AFB staining.

**📋 Quality Control:**
- Positive and negative control slides run daily in diagnostic labs
- Standardized staining reagent preparation
- Microscope maintenance and immersion oil quality
- Proficiency testing through EQAS (External Quality Assurance Scheme)

## Exam Points
- Gram stain mechanism: crystal violet binds to peptidoglycan; Gram's iodine forms complex; alcohol decolorizes Gram-negative
- Acid-fast principle: waxy mycolic acids prevent stain removal by acid-alcohol
- Morphological identification: arrangement (diplococci, tetrads, chains), size estimation
- Sample preparation artifacts: dehydration, crystal formation, stain precipitation
`,
    estimatedMinutes: 50,
  },
  {
    topicCode: "MI-MOD-01-TOP-03",
    contentMd: `# Bacterial Growth & Culture

## Overview
Understanding bacterial growth kinetics and culture requirements is essential for clinical microbiology diagnosis and antibiotic susceptibility testing in Indian laboratories.

## Key Concepts

**🎓 Bacterial Growth Phases:**
- **Lag phase**: Adaptation period (0-6 hours). Enzyme synthesis, metabolic adjustment. No cell division.
- **Log (exponential) phase**: Rapid reproduction. Generation time varies: E. coli ~20 min, Mycobacterium tuberculosis ~15-20 hours (slow-growing).
- **Stationary phase**: Growth rate equals death rate. Nutrient depletion, waste accumulation. Important for antibiotic efficacy—bacteria less susceptible in stationary phase.
- **Decline (death) phase**: Cell death exceeds reproduction. Autolysis, lysis from accumulated metabolic byproducts.

{{IMAGE: Bacterial growth curve with four phases and log scale CFU/mL}}

**💡 Culture Media:**
- **General-purpose media**: Nutrient agar, peptone water. Used for routine isolation.
- **Enriched media**: Blood agar (5% sheep blood), chocolate agar. Supports fastidious organisms (Streptococcus, Neisseria, Haemophilus).
- **Selective media**: MacConkey agar (gram-negative, lactose fermentation), Sabouraud dextrose (fungi), Löwenstein-Jensen (Mycobacterium tuberculosis).
- **Enrichment media**: Thioglycollate broth, selenite F broth (Salmonella). Enhances pathogen recovery.
- **Differential media**: CHOC agar differentiates Streptococcus species by hemolysis; Thiosulfate-citrate-bile-salt sucrose (TCBS) for Vibrio.

{{IMAGE: Common media types and their clinical applications}}

**🤔 Culture Conditions:**
- **Temperature**: 37°C standard (body temperature). Mesophiles. Psychrophiles (cold-loving) rare pathogens.
- **Oxygen**: Aerobic, anaerobic, microaerophilic, facultative. Critical for organism selection. Clostridium tetani (anaerobic), Vibrio cholerae (microaerophilic).
- **pH**: Most bacteria prefer 7.0-7.5. Mycobacteria prefer slightly alkaline (7.2-8.0).
- **Incubation time**: 24-48 hours routine. TB cultures: 2-8 weeks. Blood cultures: 5-14 days.

**⚡ Inoculation & Isolation Techniques:**
- **Streak plate method**: Dilution and isolation by streaking. Gold standard for pure culture isolation.
- **Spread plate (pour plate)**: Quantitative enumeration. Colony-forming units (CFU/mL) determination.
- **Enrichment culture**: Broth enrichment followed by plating. Increases pathogen recovery from mixed samples.

**🏥 Indian Healthcare Perspective:**
- **Blood culture protocols**: BACTEC or ESP automated systems not universally available; manual broth cultures still common.
- **TB culture**: Löwenstein-Jensen or MGIT (Mycobacterial Growth Indicator Tube). MGIT more sensitive, faster (15 days vs 8 weeks), but expensive.
- **Cholera outbreak response**: TCBS culture for rapid Vibrio cholerae isolation during monsoon seasons.
- **Antibiotic testing timing**: Cultures in log phase more reliable for susceptibility testing. Critical for guiding therapy in sepsis, pneumonia, meningitis.

**📋 Quality Assurance:**
- Reference strains: ATCC strains, NCIM (National Chemical Lab) culture collections in India
- Sterility control: Media sterility checks
- Growth promotion testing: Media supports expected organism growth
- Contamination monitoring: Low contamination rates in diagnostic labs indicate quality

## Exam Points
- Generation time calculation from growth curve
- Media selection based on suspected organism and specimen type
- Culture interpretation: pure culture vs mixed, contaminants vs pathogens
- Correlation with clinical presentation: rapid growth (24-48 hours) vs slow-growing (TB)
- Antibiotic resistance development in log phase vs stationary phase bacteria
`,
    estimatedMinutes: 50,
  },
  {
    topicCode: "MI-MOD-01-TOP-04",
    contentMd: `# Normal Flora & Pathogenesis

## Overview
Normal flora (microbiota) coexist harmlessly with humans; pathogenesis occurs when organisms breach host defenses. Understanding this interplay is crucial for clinical diagnosis and infection management.

## Key Concepts

**🎓 Normal Flora Definition & Significance:**
- **Resident flora**: Permanent colonization of skin, mucous membranes, GI tract. Provide protection by competitive exclusion.
- **Transient flora**: Temporary colonization. Easily removed by washing.
- **Microbiota functions**: Synthesize vitamins (K, B12 by gut flora), maintain pH, prevent overgrowth of pathogens.
- **Loss of flora consequences**: Antibiotic-associated diarrhea (C. difficile overgrowth), opportunistic infections in immunocompromised.

{{IMAGE: Normal flora distribution in body: skin, oral cavity, respiratory, GI, genitourinary tracts}}

**💡 Common Normal Flora by Site:**
- **Skin**: Staphylococcus epidermidis, Corynebacterium, Propionibacterium acnes
- **Oral cavity**: Streptococcus mutans, S. mitis, Actinomyces, Prevotella, Fusobacterium
- **GI tract**: E. coli, Klebsiella, Proteus, Bacteroides, Clostridium difficile, Lactobacillus, Bifidobacterium
- **Vagina**: Lactobacillus crispatus (protective), Candida albicans (commensal)
- **Respiratory tract**: Usually sterile. Occasional Streptococcus pneumoniae, Haemophilus, Moraxella colonization

**🤔 Pathogenesis Mechanisms:**
- **Adherence factors**: Pili, fimbriae, adhesins bind epithelial receptors. E. coli P pili (pyelonephritis), Vibrio cholerae TCP (intestinal colonization).
- **Toxin production**: Exotoxins (A-B toxins, RTX toxins) and endotoxin (LPS). Diphtheria toxin, botulinum toxin, Shiga toxin.
- **Enzyme secretion**: Hyaluronidase, collagenase, fibrinolysin promote tissue invasion and spreading.
- **Antiphagocytic mechanisms**: Capsules (S. pneumoniae), M protein (Streptococcus pyogenes), LPS (gram-negative).
- **Intracellular survival**: Listeria monocytogenes, Mycobacterium tuberculosis evade immune destruction.

{{IMAGE: Pathogenic cascade from colonization to tissue damage and systemic spread}}

**⚡ Virulence Factors & Regulation:**
- **Virulence plasmids and chromosomes**: ETEC (enterotoxin plasmid), Shiga-toxin genes (Shigella, E. coli O157:H7).
- **Two-component signaling**: Quorum sensing in Vibrio cholerae (ToxRS system), Pseudomonas (LasI/R system).
- **Environmental triggers**: Temperature (fever induces pathogenicity islands), pH changes, iron availability (siderophores).

**🏥 Indian Clinical Context:**
- **Dysbiosis and disease**: Altered gut flora linked to inflammatory bowel disease, rising in India.
- **Cholera pathogenesis**: Vibrio cholerae produces cholera toxin (A-B subunit) → cAMP ↑ → massive secretory diarrhea. Epidemic potential during monsoon.
- **TB pathogenesis**: M. tuberculosis survives in macrophages via mycolic acids, ESX-1 secretion system. Latent TB reactivation risk in malnutrition-prevalent India.
- **Diarrheal disease burden**: Enteropathogens (ETEC, Campylobacter, Shigella, Salmonella) cause ~500,000 deaths in children <5 years annually in South Asia.
- **Healthcare-associated infections**: S. aureus (including MRSA) and Pseudomonas aeruginosa in wound infections, nosocomial pneumonia.

**📋 Infection vs Colonization:**
- **Asymptomatic colonization**: Carrier state; no disease. Typhoid carriers (1-5% of infected), Meningococcal carriers.
- **Symptomatic infection**: Pathogenesis overcomes host defenses. Disease severity depends on virulence factors and host immunity.
- **Opportunistic infection**: Organisms usually non-pathogenic become pathogenic in immunocompromised hosts (HIV/AIDS, chemotherapy, organ transplantation).

## Exam Points
- Difference between commensalism and parasitism
- Adhesion mechanisms and their role in initial colonization
- Toxin A-B subunit structure and mechanism
- Biofilm formation and antibiotic resistance
- Role of normal flora in pathogenic colonization resistance
- Invasion mechanisms: transcytosis, M cells, tight junction disruption
`,
    estimatedMinutes: 55,
  },
  {
    topicCode: "MI-MOD-02-TOP-01",
    contentMd: `# Innate Immunity

## Overview
Innate immunity provides immediate, non-specific defense against pathogens. This first-line defense is crucial in India's high-burden infectious disease settings.

## Key Concepts

**🎓 Components of Innate Immunity:**
- **Physical barriers**: Skin, mucous membranes, ciliated epithelium, stomach acid, vaginal pH
- **Chemical barriers**: Lysozyme (saliva, tears, mucus), lactoferrin, antimicrobial peptides (defensins)
- **Cellular immunity**: Phagocytes (neutrophils, macrophages), natural killer cells, dendritic cells
- **Humoral factors**: Complement system, acute-phase proteins, interferons

{{IMAGE: Multi-layered innate immunity barriers from skin to cellular response}}

**💡 Phagocytosis Pathway:**
- **Chemotaxis**: Pathogen-associated molecular patterns (PAMPs) detected by pattern recognition receptors (PRRs)
- **Opsonization**: Complement C3b, mannose-binding lectin coat microbes
- **Phagocytosis**: Engulfment into phagolysosome
- **Intracellular killing**: Reactive oxygen species (ROS), antimicrobial enzymes (lysozyme, myeloperoxidase), proteases
- **Antigen presentation**: Processed antigens presented to lymphocytes

**🤔 Complement System:**
- **Classical pathway**: Antibody-antigen complexes activate C1q → C4, C2, C3 cascades
- **Alternative pathway**: Direct C3 activation by microbial surfaces. Bypass antibody requirement.
- **Lectin pathway**: Mannose-binding lectin binds carbohydrate patterns
- **Biological effects**: C3a, C5a (anaphylatoxins), C3b (opsonin), MAC (membrane attack complex)

**⚡ Interferon Response:**
- **Type I IFN (IFN-α, β)**: Produced by virus-infected cells. Induces antiviral state, activates NK cells.
- **Type II IFN (IFN-γ)**: Produced by T cells and NK cells. Activates macrophages for enhanced killing.
- **Mechanism**: JAK-STAT signaling, MxA and OAS expression, inhibit translation and viral replication

**🏥 Indian Clinical Applications:**
- **Sepsis management**: Understanding innate immune dysregulation (SIRS vs sepsis) critical for ICU management. High sepsis mortality in India.
- **BCG vaccination**: Enhances innate immunity via trained macrophages. Part of UIP schedule since 1951.
- **Acute-phase response**: CRP, procalcitonin elevated in bacterial infections. Guides empiric antibiotic therapy in fever of unknown origin.
- **Malnutrition impact**: Deficient innate immunity in malnourished children (common in India). Increased TB, pneumonia, diarrheal disease susceptibility.
- **Macrophage dysfunction in TB**: M. tuberculosis inhibits interferon-γ signaling, preventing macrophage activation. Central to TB pathogenesis in latent infection.

**📋 Pattern Recognition & TLRs:**
- **TLR2**: Gram-positive bacteria, mycobacteria
- **TLR4**: Gram-negative LPS
- **TLR5**: Bacterial flagella
- **TLR7/8**: RNA viruses
- **TLR9**: CpG DNA

## Exam Points
- Innate vs adaptive immunity timing and specificity
- Complement cascade activation and amplification
- Opsonization by C3b vs antibody
- NK cell activation by interferon and missing-self hypothesis
- Acute phase protein kinetics in infection
- PRR signaling and NF-κB pathway
`,
    estimatedMinutes: 50,
  },
  {
    topicCode: "MI-MOD-02-TOP-02",
    contentMd: `# Adaptive Immunity

## Overview
Adaptive immunity provides specific, long-lasting protection through T and B lymphocytes. Essential for vaccine development and immunization strategies in India.

## Key Concepts

**🎓 Adaptive Immunity Characteristics:**
- **Specificity**: Recognition of specific antigens via T-cell receptors (TCR) and B-cell receptors (BCR)
- **Memory**: Rapid secondary response to previously encountered antigen. Basis of vaccination.
- **Clonal selection**: Each lymphocyte recognizes one epitope; selected clones expand upon antigen exposure
- **Diversity**: ~10^6 different TCR and BCR specificities generated by gene rearrangement

{{IMAGE: Adaptive immunity pathway: antigen processing, T cell activation, B cell proliferation}}

**💡 T Cell Immunity:**
- **CD4+ T helper cells (Th)**: Activate macrophages (Th1), B cells (Th2), regulate inflammation
  - Th1: IFN-γ, TNF-α → macrophage activation (TB, intracellular pathogens)
  - Th2: IL-4, IL-10 → antibody production (parasites, toxins)
  - Th17: IL-17 → neutrophil recruitment (extracellular bacteria, fungi)
- **CD8+ cytotoxic T cells (Tc)**: Kill virus-infected, cancer cells via granzyme/perforin
- **Regulatory T cells (Treg)**: IL-10, TGF-β → suppress excessive inflammation, autoimmunity

**🤔 B Cell Immunity & Antibodies:**
- **Primary response**: IgM then IgG production; slower (7-10 days)
- **Secondary response**: Rapid, high-titer IgG; affinity maturation via somatic hypermutation
- **Antibody functions**: Opsonization, complement activation, neutralization, antibody-dependent cellular cytotoxicity (ADCC)
- **Immunoglobulin classes**: IgG (plasma, long-lived), IgM (primary), IgA (mucosal), IgE (allergic), IgD (surface Ag)

**⚡ MHC Presentation:**
- **MHC Class I** (all cells): Present intracellular peptides to CD8+ T cells. Viral, tumor antigens.
- **MHC Class II** (APCs): Present extracellular peptides to CD4+ T cells. Bacterial toxins, parasites.
- **TCR recognition**: Must recognize both peptide and MHC (MHC restriction)

**🏥 Indian Immunization Context:**
- **Universal Immunization Programme (UIP)**: Covers BCG, DPT, polio, measles, hepatitis B, etc. Aims for 90%+ coverage.
- **Delayed immune response in malnutrition**: Caloric, protein deficiency impairs T and B cell function. Prevalent in rural India.
- **Vaccine hesitancy**: Misinformation challenges immunization uptake despite 75+ years of proven safety.
- **Tuberculin conversion**: Delayed-type hypersensitivity (DTH) response to tuberculin antigen. Gold standard for TB infection diagnosis in endemic India.
- **Typhoid & cholera endemicity**: Oral typhoid (Ty21a) and cholera vaccines recommended for travelers; oral polio vaccine (OPV) used in national campaigns.

**📋 Immunological Memory:**
- **Memory B cells**: Persist in lymphoid tissue; produce antibodies upon re-exposure
- **Memory T cells**: CD4+ and CD8+ memory cells; rapid activation via reduced co-stimulation requirement
- **Half-life of memory**: Lifelong for some (measles, yellow fever), shorter for others (influenza, pertussis)

## Exam Points
- TCR and BCR gene rearrangement mechanisms
- CD4+ T cell differentiation based on cytokine environment
- Affinity maturation and class switching in B cells
- MHC-peptide-TCR interaction and thymic selection
- Memory formation: germinal center reactions
- Maternal antibodies and neonatal protection
`,
    estimatedMinutes: 55,
  },
  {
    topicCode: "MI-MOD-02-TOP-03",
    contentMd: `# Antigens & Antibodies

## Overview
Antigens trigger immune responses; antibodies specifically recognize and neutralize pathogens. Understanding antigen-antibody interactions is fundamental for diagnostics and therapeutics.

## Key Concepts

**🎓 Antigen Characteristics:**
- **Immunogenicity**: Ability to induce immune response. Depends on: molecular weight (>10 kDa optimal), complexity, foreignness (self-antigens tolerated), route of entry
- **Epitope (antigenic determinant)**: Specific region recognized by TCR/BCR. Continuous (linear) vs discontinuous (conformational)
- **Valency**: Number of epitopes per antigen. Multivalent antigens cross-link BCRs, triggering better B cell activation
- **Adjuvants**: Enhance immunogenicity. Aluminum salts (alum), oil-in-water emulsions used in Indian vaccines

{{IMAGE: Epitope structure and antibody recognition specificity}}

**💡 Antibody Structure & Function:**
- **Structure**: Two heavy chains, two light chains. Variable regions (Fab) recognize antigen; constant regions (Fc) mediate effector functions
- **Valency**: Bivalent binding; enables cross-linking and immune complex formation
- **Binding properties**: Affinity (single epitope binding), avidity (overall strength of multivalent interaction)
- **Functions**: Opsonization (C1q, Fc receptors), complement activation (IgG > IgM), neutralization (block pathogen adhesion/entry), ADCC (NK cells via Fc receptors)

**🤔 Antigen-Antibody Reactions:**
- **Affinity**: Determined by complementarity; measured as Kd (dissociation constant)
- **Precipitin reaction**: Optimal antigen-antibody ratio forms large lattice complexes (precipitate). Zone of equivalence, prozone phenomenon
- **Agglutination**: Cross-linking of particulate antigens (RBCs, bacteria). Visible without magnification; rapid, sensitive
- **Immunoelectrophoresis**: Combines electrophoresis and immunodiffusion. Identifies specific proteins (albumin, immunoglobulins)
- **ELISA**: Enzyme-linked immunosorbent assay. High sensitivity/specificity for antigen/antibody detection. Widely used in Indian diagnostic labs

{{IMAGE: Various antigen-antibody reaction types and applications}}

**⚡ Clinical Diagnostic Applications:**
- **Serodiagnosis**: Antibody detection indicates infection. IgM = acute/recent infection; IgG = past infection/immunity
- **Serotypes & Antigenic variation**: Salmonella O and H antigens (>2000 serotypes). Vibrio cholerae O1, O139 serotypes. Strain identification for outbreak investigation.
- **Neutralization tests**: Antibody blocks toxin or virus infectivity. Used for antitoxin verification (diphtheria, tetanus)
- **Immunoprecipitation**: Specific antibody extracts antigen from complex mixtures. Research and diagnostic applications

**🏥 Indian Diagnostic Context:**
- **Rapid diagnostic tests (RDTs)**: Lateral flow assays for malaria, dengue, typhoid, TB (TB-LAMP). Point-of-care testing essential in resource-limited primary health centers.
- **Blood bank serology**: ABO/Rh typing, transfusion-transmitted infections (HIV, HBsAg, HCV, syphilis) screening mandatory in India.
- **Widal test limitations**: Antibodies to Salmonella O and H persist post-infection, vaccination; single high titer unreliable. Culture remains gold standard for typhoid diagnosis.
- **Rapid plasma reagin (RPR) for syphilis**: Screening test for non-treponemal antibodies. Confirmatory treponemal tests (TPPA, FTA-ABS) required. High seroprevalence in certain populations.
- **Immunization serology**: Polio seropositivity confirms immunity; hepatitis B anti-HBs confirms vaccine response.

**📋 Monoclonal vs Polyclonal Antibodies:**
- **Polyclonal**: Multiple B cell clones produce heterogeneous antibodies. Higher avidity, multiple epitope recognition.
- **Monoclonal**: Single B cell clone produces identical antibodies. Absolute specificity. Used in immunotherapy, research. Expensive; limited accessibility in India.

## Exam Points
- Epitope concept and its relevance to antibody specificity
- Antigen molecular weight and immunogenicity correlation
- Prozone phenomenon and practical implications
- Affinity vs avidity distinction
- IgM vs IgG kinetics in primary and secondary responses
- Cross-reactivity and false-positive serological tests
`,
    estimatedMinutes: 50,
  },
  {
    topicCode: "MI-MOD-02-TOP-04",
    contentMd: `# Hypersensitivity Reactions

## Overview
Hypersensitivity reactions represent excessive or inappropriate immune responses causing tissue damage. Clinical recognition is essential for managing drug allergies and allergic diseases prevalent in India.

## Key Concepts

**🎓 Gell & Coombs Classification:**

**Type I - Immediate Hypersensitivity (IgE-mediated):**
- **Mechanism**: IgE crosslinking on mast cells/basophils → degranulation → histamine, tryptase, leukotrienes release
- **Timing**: Seconds to minutes; biphasic reaction possible (late phase 4-12 hours)
- **Clinical manifestations**: Urticaria, angioedema, rhinitis, asthma, anaphylaxis
- **Common triggers in India**: Peanut/tree nuts (underestimated), shellfish, penicillin/beta-lactam antibiotics, NSAIDs, insect venom
- **Anaphylaxis management**: Epinephrine 0.3-0.5 mg IM immediately. Oxygen, IV fluids, antihistamines, corticosteroids. Risk of biphasic reaction (10-15% of cases)

{{IMAGE: Type I hypersensitivity cascade from allergen exposure to mast cell degranulation}}

**Type II - Cytotoxic Hypersensitivity (Antibody-mediated):**
- **Mechanism**: IgG or IgM antibodies bind cell surface antigens → complement activation or ADCC
- **Clinical examples**: Drug-induced hemolytic anemia (penicillin, quinidine), Goodpasture syndrome (anti-GBM antibodies), Graves' disease (TSH receptor antibodies)
- **Hemolytic transfusion reaction**: Incompatible blood transfusion → acute intravascular hemolysis, hemoglobinuria, acute renal failure. Preventable with proper typing and crossmatching.

{{IMAGE: Type II hypersensitivity with antibody-mediated cell destruction}}

**Type III - Immune Complex-mediated:**
- **Mechanism**: Antigen-antibody complexes deposit in tissues (especially vessels, kidneys) → complement activation, inflammation
- **Timing**: 3-10 days after exposure
- **Clinical examples**: Serum sickness (heterologous antisera, drugs like phenytoin), systemic lupus erythematosus (SLE), post-streptococcal glomerulonephritis
- **Post-infectious GN in India**: PSGN common post-streptococcal pharyngitis; PSGN incidence increasing in tropical impetigo

**Type IV - Delayed Hypersensitivity (Cell-mediated):**
- **Mechanism**: Antigen-specific CD4+ T cells (Th1) activate macrophages; CD8+ T cells directly kill antigen-presenting cells
- **Timing**: 24-72 hours (or longer)
- **Clinical examples**: Tuberculin skin test (Mantoux), contact dermatitis (nickel, poison ivy), drug reactions (sulfonamides, phenolphthalein)
- **Tuberculin reaction**: Intradermal PPD → local induration at 48-72 hours. Gold standard for TB infection; false negatives in immunocompromised (HIV/AIDS)

**🤔 Clinical Significance:**
- **Drug hypersensitivity**: Fluoroquinolones, sulfonamides (high-frequency in India), anticonvulsants cause Type IV delayed reactions; beta-lactams cause Type I anaphylaxis
- **Serum sickness-like reactions**: Antibiotics (amoxicillin-clavulanate), NSAIDs, anticonvulsants; arthralgia, rash, lymphadenopathy
- **Stevens-Johnson syndrome (SJS) and Toxic Epidermal Necrolysis (TEN)**: Severe drug-induced Type IV reactions. High mortality (10-15% in SJS, 25-35% in TEN)
- **DRESS syndrome**: Drug reaction with eosinophilia and systemic symptoms. Anticonvulsants, allopurinol; facial edema, exanthem, lymphadenopathy, atypical lymphocytes, hypereosinophilia

**⚡ Mechanism Summary:**
- Type I: IgE, immediate → mast cell degranulation
- Type II: IgG/IgM, cytotoxic → complement, ADCC
- Type III: Immune complexes → tissue deposition, inflammation
- Type IV: T cells → macrophage activation, delayed

**🏥 Indian Healthcare Context:**
- **Antibiotic allergy prevalence**: Up to 15-20% patients report penicillin allergy; cross-reactivity with cephalosporins ~2-3% (overestimated). Challenge testing needed for confirmation.
- **NSAIDs and aspirin allergy**: Prevalent in tropical India; possible NSAID-exacerbated respiratory disease (NERD) in asthmatic patients
- **Immunization and hypersensitivity**: Egg allergy concerns with measles, mumps, rubella (MMR), influenza vaccines; gelatin sensitivity. Rare; vaccination usually safe.
- **Occupational allergies**: Agricultural workers (pesticide contact), healthcare workers (latex, glutaraldehyde exposure)

**📋 Management Principles:**
- **Avoidance**: Primary strategy; patient education on triggers
- **Anti-histamines**: Antihistamines (cetirizine) for Type I urticaria; ineffective for anaphylaxis
- **Corticosteroids**: Reduce inflammation; slow onset (no role in acute anaphylaxis)
- **Immunotherapy**: Desensitization protocols for essential drugs (penicillin), allergen immunotherapy for environmental allergies
- **Allergy testing**: Skin prick testing, specific IgE (ImmunoCAP) for IgE-mediated reactions; patch testing for contact dermatitis

## Exam Points
- Timing differences between hypersensitivity types
- Mediators released in Type I (histamine, tryptase, leukotrienes)
- Complement vs ADCC in Type II
- Immune complex formation and clearance defects
- Mechanism of tuberculin delayed reaction
- Cross-reactivity patterns in beta-lactams
- Management priorities for anaphylaxis
`,
    estimatedMinutes: 60,
  },
  {
    topicCode: "MI-MOD-02-TOP-05",
    contentMd: `# Autoimmunity & Immunodeficiency

## Overview
Autoimmunity results from loss of tolerance to self-antigens; immunodeficiency represents inadequate immune response. Both are rising in India and require careful clinical diagnosis.

## Key Concepts

**🎓 Autoimmunity Mechanisms:**
- **Loss of tolerance**: Central tolerance defects (thymic selection failure), peripheral tolerance failure (Treg, CD4+CD25+ dysfunction)
- **Autoreactive B and T cells**: Escape tolerance; produce pathogenic autoantibodies and autoreactive T cells
- **Genetic susceptibility**: HLA associations (HLA-B27 in ankylosing spondylitis, HLA-DR3/DR4 in SLE)
- **Environmental triggers**: Infections, UV exposure, smoking, drugs
- **Bystander activation**: Cross-reactivity between pathogen and self-antigen (molecular mimicry)

{{IMAGE: Autoimmunity pathogenesis: genetic susceptibility, environmental triggers, loss of tolerance}}

**💡 Common Autoimmune Diseases:**
- **SLE (Systemic Lupus Erythematosus)**: Anti-dsDNA, anti-histone antibodies. Female predominance (10:1). Lupus nephritis (glomerulonephritis), photosensitivity, malar rash, arthritis.
- **Rheumatoid Arthritis (RA)**: Rheumatoid factor (IgM anti-Fc), anti-CCP antibodies. Symmetric polyarthritis, morning stiffness. Rising incidence in India.
- **Graves' disease**: TSH receptor antibodies (TRAB). Thyroid hyperfunctioning, exophthalmos, pretibial myxedema.
- **Type 1 Diabetes**: Anti-islet beta cell antibodies, anti-GAD, anti-IA2. T cell-mediated beta cell destruction. Epidemic rise in India.
- **Hashimoto's thyroiditis**: Anti-TPO, anti-thyroglobulin antibodies. Thyroid destruction, hypothyroidism.
- **Celiac disease**: Anti-tissue transglutaminase (tTG) IgA antibodies. Gluten-sensitive enteropathy; malabsorption, dermatitis herpetiformis.
- **Multiple sclerosis**: CNS demyelination. Aquaporin-4 or MOG antibodies (neuromyelitis optica spectrum disorder—NMOSD common in Asia).
- **Myasthenia gravis**: Anti-acetylcholine receptor antibodies. Muscle fatigue, drooping eyelids, bulbar weakness.

**🤔 Immunodeficiency Disorders:**

**Primary Immunodeficiencies:**
- **Severe combined immunodeficiency (SCID)**: Lack of T and B cells. Fatal without hematopoietic stem cell transplantation (HSCT). Rare in India but often diagnosed late due to poor neonatal screening.
- **X-linked agammaglobulinemia (XLA)**: Lack of B cells, absent antibody production. Recurrent bacterial infections (Streptococcus, Haemophilus). Treatable with IVIG.
- **IgA deficiency**: Low/absent serum IgA (1-2% of populations, higher in Caucasians). Usually asymptomatic; risk of anaphylaxis to blood products containing IgA.
- **Complement deficiencies**: C3 deficiency → increased infections; C5-C9 (terminal complement) → Neisseria meningitidis susceptibility.

{{IMAGE: Primary immunodeficiency disorders by immune component affected}}

**Secondary Immunodeficiencies:**
- **HIV/AIDS**: CD4+ T cell count <200 cells/μL → opportunistic infections (PCP, CMV, MAC), Kaposi sarcoma, lymphomas. India: ~2.4 million people living with HIV; heterosexual transmission predominant.
- **Malnutrition**: Protein-calorie malnutrition impairs T cell, B cell, and complement function. Affects 40%+ children in rural India; increases susceptibility to TB, pneumonia, diarrhea.
- **Chemotherapy-induced immunosuppression**: Cancer treatment ablates bone marrow; immunosuppressive drugs used in transplantation, autoimmune disease therapy.
- **Post-splenectomy**: Loss of filter function and opsonizing antibody production. Increased susceptibility to encapsulated organisms (Streptococcus pneumoniae, Haemophilus influenzae type b).

**⚡ Diagnostic Approach:**
- **Autoimmune serology**: ANA, dsDNA, rheumatoid factor, specific organ antibodies (anti-TPO, anti-GAD)
- **Complement levels**: C3, C4 decreased in active SLE, inherited deficiencies
- **Immunoglobulin levels**: IgG, IgA, IgM; absent in X-linked agammaglobulinemia
- **Lymphocyte subsets**: CD4+, CD8+ T cell counts (flow cytometry). Low CD4+ in HIV/AIDS.
- **Thyroid function**: TSH, free T4 in Graves' disease and Hashimoto's
- **Tissue diagnosis**: Renal biopsy (lupus nephritis), intestinal biopsy (celiac), skin biopsy (autoimmune blistering disorders)

**🏥 Indian Clinical Context:**
- **Auto-immune disease burden**: Rising in urban India; SLE, RA, Type 1 DM incidence increasing with Westernization, lifestyle changes
- **Delayed diagnosis**: Limited autoimmune screening in resource-limited settings; many patients misdiagnosed as infection
- **IVIG availability**: Immunoglobulin replacement therapy scarce and expensive; blood transfusion safety concerns (HIV, HBV contamination in older supplies)
- **HIV/AIDS epidemic**: TB-HIV co-infection high burden (20-30% of TB patients HIV+). TB as AIDS-defining illness. WHO/NACO guidelines for ART + anti-TB therapy
- **Post-infectious autoimmunity**: Streptococcal infection → acute rheumatic fever (ARF), post-streptococcal glomerulonephritis (PSGN). ARF incidence high in low-income populations
- **Vaccination in autoimmune disease**: Relative contraindication in active disease; safe during remission. Live vaccines contraindicated in severe immunodeficiency

**📋 Management:**
- **Autoimmune disease**: NSAIDs (symptomatic), corticosteroids (reduce inflammation), immunosuppressives (azathioprine, methotrexate), biologics (TNF inhibitors, rituximab)
- **Immunodeficiency**: IVIG replacement, prophylactic antibiotics, HSCT for SCID, ART for HIV
- **Infection prevention**: Vaccination, prophylaxis against opportunistic infections (TMP-SMX for PCP in CD4 <200)

## Exam Points
- Central vs peripheral tolerance mechanisms
- Molecular mimicry in autoimmune pathogenesis
- HLA associations with autoimmune diseases
- Autoantibody specificity and disease correlation
- CD4+ T cell role in SLE and RA pathogenesis
- Complement deficiency and Neisseria meningitidis susceptibility
- HIV classification by CD4 count and opportunistic infections
- Immunoglobulin replacement in XLA
`,
    estimatedMinutes: 65,
  },
  {
    topicCode: "MI-MOD-02-TOP-06",
    contentMd: `# Vaccines & Immunization

## Overview
Vaccination prevents infectious disease through immune memory development. India's Universal Immunization Programme (UIP) is crucial for disease control and aligns with WHO goals.

## Key Concepts

**🎓 Vaccine Types & Mechanisms:**
- **Live attenuated vaccines**: Weakened organisms; strong immune response; risk of reversion or immunocompromised dissemination. Examples: BCG, MMR, OPV, varicella, yellow fever
- **Inactivated vaccines**: Killed organisms; generally safe but weaker immune response; require boosters. Examples: IPV, hepatitis A, rabies, whole-cell pertussis (now acellular DPT)
- **Subunit/recombinant vaccines**: Specific immunogenic components (proteins, polysaccharides); high safety; weak response. Hepatitis B (surface antigen), HPV (virus-like particles), meningococcal, pneumococcal conjugate
- **Toxoid vaccines**: Inactivated toxins; prevent toxin-mediated disease. Diphtheria and tetanus toxoids; long-lasting immunity with boosters
- **mRNA vaccines**: Nucleotide sequence codes for antigen production; rapid development, high efficacy. COVID-19 vaccines (Pfizer, Moderna)

{{IMAGE: Vaccine types, composition, and immunological response strength}}

**💡 India's Universal Immunization Programme (UIP):**
- **Infants (0-12 months)**:
  - Birth: BCG, OPV-0, Hepatitis B-0
  - 6 weeks: DPT-1, IPV-1, Hepatitis B-1, Rotavirus-1, PCV-1
  - 10 weeks: DPT-2, IPV-2, Hepatitis B-2, Rotavirus-2, PCV-2
  - 14 weeks: DPT-3, IPV-3, Hepatitis B-3, Rotavirus-3, PCV-3
  - 9-12 months: Measles/MR-1, JEV (in endemic states)

- **Children (12-59 months)**:
  - 15-18 months: DPT booster-1, IPV booster, OPV booster, PCV booster, Measles/MR-2
  - 4-6 years: DPT booster-2

- **Adults & elderly**: Td booster every 10 years; seasonal influenza vaccine; pneumococcal vaccine (>65 years)

{{IMAGE: UIP schedule timeline and vaccine coverage targets}}

**🤔 Vaccine Efficacy & Potency:**
- **Efficacy**: Percentage reduction in disease incidence in vaccinated vs unvaccinated. Measured in clinical trials.
  - BCG: 70-80% against TB (variable by region, genotype)
  - MMR: 95% measles, 88% mumps, 97% rubella (single dose)
  - Polio (IPV): 99% with 3 doses
  - Hepatitis B: 95% seroconversion with 3 doses
- **Potency**: Ability of vaccine to induce immune response. Quality control: antibody titers, potency assays
- **Immunogenicity**: Proportion of vaccinated individuals developing protective immunity

**⚡ Adverse Events & Safety:**
- **Common mild reactions**: Low-grade fever, local site erythema/pain, myalgia (usually self-limiting)
- **Serious adverse events**: Anaphylaxis (rare, <1:1 million doses), VAPP from OPV (1:10 million), myocarditis post-mRNA vaccines (rare)
- **Myth vs reality**: No link between vaccines and autism (thoroughly debunked); vaccines do not cause allergies; thimerosal (mercury-containing preservative) removed from most vaccines (already known safe at used concentrations)
- **Contraindications**: Live vaccines contraindicated in pregnancy, severe immunodeficiency; inactivated vaccines safe in immunocompromised

**🏥 Indian Immunization Challenges & Context:**
- **Vaccine hesitancy**: Misinformation, religious concerns, distrust of government. Lower coverage in Muslim-majority areas (religious hesitancy), some Hindu populations (autism myth). Government counter-messaging via Swachhata Abhiyaan, health worker training.
- **Cold chain integrity**: Sub-optimal temperature maintenance leads to potency loss. Strengthening cold chain infrastructure in remote areas is ongoing.
- **Equity & access**: Urban-rural divide; some states >90% coverage (Kerala, Tamil Nadu), others <50% (Uttar Pradesh, Bihar historically). Private sector supplements; cost-prohibitive in low-income families.
- **Outbreak response**: Measles outbreak in Maharashtra (2018) triggered MR campaign. Polio eradication: India certified polio-free since 2014; vigilance continues against imported cases.
- **Seasonal influenza & COVID-19**: Gradual introduction in UIP; COVID-19 vaccination campaigns (2021 onwards) used COVAXIN (inactivated) and COVISHIELD (recombinant adenovirus vector).
- **HPV vaccination**: Recently included in UIP for girls (9-14 years); prevents cervical cancer caused by HPV-16/18. Addresses high cervical cancer burden in India.
- **JEV vaccination**: Endemic in certain states (Uttar Pradesh, Assam, Bihar); vaccination integrated into UIP in endemic areas. Prevents Japanese encephalitis during monsoon-post-monsoon seasons.

**📋 Immunization Schedules & Spacing:**
- **Simultaneous administration**: Multiple vaccines safe and recommended to improve coverage
- **Spacing between vaccines**: Inactivated vaccines can be given together or at any time; live vaccines must be given simultaneously or ≥28 days apart
- **Delayed immunization**: No need to restart schedule; continue from where interrupted
- **Special populations**: Pregnant women (only inactivated/Td), immunocompromised (killed vaccines only, avoid live), prematurely born (chronological age for scheduling)

**Assessment & Competency:**
- NMC competency: Understand vaccine types, administration routes, aseptic technique, vaccine safety, adverse event reporting (AEFI), contraindications, myths, and counseling
- Immunization registers: Proper documentation for coverage surveys, outbreak response tracing

## Exam Points
- Live attenuated vs inactivated vaccine advantages/disadvantages
- Spacing rules between live vaccines
- UIP schedule for infants, children, adolescents
- Vaccine efficacy vs vaccine effectiveness distinction
- Herd immunity threshold calculation
- Adverse Event Following Immunization (AEFI) reporting
- Contraindications to live vaccines
- Vaccine potency and cold chain management
- Post-vaccination serology: when to check antibody titers
`,
    estimatedMinutes: 65,
  },
  {
    topicCode: "MI-MOD-03-TOP-01",
    contentMd: `# Staphylococcus

## Overview
Staphylococcus species are gram-positive cocci causing skin infections, pneumonia, sepsis, and healthcare-associated infections. S. aureus (including MRSA) is a major pathogen in India.

## Key Concepts

**🎓 Staphylococcus Identification:**
- **Morphology**: Gram-positive cocci in grape-like clusters. Catalase-positive (distinguishes from Streptococcus). Coagulase production differentiates S. aureus (positive) from coagulase-negative Staphylococcus (CoNS)
- **Culture**: Golden pigmentation on blood agar (aureus = golden). MacConkey agar: ferments lactose (pink colonies). Mannitol salt agar (MSA): selective for staphylococci, yellow colonies if mannitol-fermenting (S. aureus)
- **Biochemical tests**: Catalase, coagulase, DNase, hemolysis patterns
- **Molecular**: PCR for mecA gene (MRSA), nuclease genes, Panton-Valentine leukocidin (PVL)

{{IMAGE: Staphylococcus aureus morphology, culture, and identification algorithm}}

**💡 Virulence Factors & Toxins:**
- **Alpha-toxin**: Forms pores in cell membranes; hemolytic, lethal
- **Exfoliative toxins (ETA, ETB)**: Serological types; cause staphylococcal scalded skin syndrome (SSSS) in children
- **Enterotoxins (SEA-SEE, SEG-SEJ)**: Heat-stable; cause food poisoning. Survive cooking; gastroenteritis 1-6 hours post-ingestion
- **Toxic shock syndrome toxin-1 (TSST-1)**: Superantigen; bypasses normal TCR-MHC interaction; massive T cell activation, cytokine storm
- **Panton-Valentine leukocidin (PVL)**: Two-component toxin (LukS, LukF); destroys WBCs; associated with severe infections (necrotizing pneumonia, abscesses)
- **Capsule & protein A**: Inhibit opsonization and complement; aid immune evasion

**🤔 Methicillin-Resistant Staphylococcus aureus (MRSA):**
- **Mechanism**: mecA gene encodes altered penicillin-binding protein (PBP2a); resists all beta-lactams
- **Epidemiology in India**: Healthcare-associated MRSA (HA-MRSA) in hospitalized patients; community-associated MRSA (CA-MRSA) in healthy individuals. Prevalence: 30-40% of S. aureus isolates in Indian hospitals
- **Risk factors**: Recent hospitalization, antibiotic exposure, indwelling catheters, surgical wounds, renal failure, immunosuppression
- **Treatment**: Vancomycin (first-line), linezolid, daptomycin. Resistance emerging to vancomycin (MIC creep); newer agents (tedizolid, ceftaroline) available

**⚡ Clinical Infections:**
- **Skin & soft tissue**: Folliculitis, boils, impetigo, erysipelas, cellulitis, abscesses. CA-MRSA increasingly causes SSSI in community.
- **Respiratory**: Pneumonia (post-influenza), empyema, lung abscess. S. aureus post-influenza is dreaded complication; mortality high even with treatment
- **Bloodstream**: Bacteremia from skin/soft tissue infections, endocarditis from IV drug abuse, healthcare device contamination (CVCs). Nosocomial bacteremia increases hospital mortality 2-3 fold
- **Endocarditis**: Native valve (IV drug users, recent skin infection) vs prosthetic valve (healthcare-associated). Vegetation with septic emboli. Complications: perivalvular abscess, conduction defects, heart failure
- **Osteomyelitis & septic arthritis**: Hematogenous (children <5 years), direct inoculation (trauma, surgery). S. aureus is most common pathogen. Kingella (HACEK group) also causes native valve endocarditis
- **Toxic shock syndrome**: TSST-1-producing strains; tampon use (menstruating women), post-surgical wound infection. Fever, hypotension, multiorgan failure, characteristic rash
- **Food poisoning**: Emetic form (enterotoxins A, D, E) causes vomiting 30 minutes-2 hours post-ingestion; no fever (short incubation differentiates from bacterial dysentery)

**🏥 Indian Healthcare Context:**
- **Healthcare-associated infections**: S. aureus (including MRSA) is leading cause of surgical site infections, catheter-related bloodstream infections in Indian hospitals
- **Burden**: Post-operative S. aureus pneumonia mortality ~30-40%; extended hospital stay, increased costs burden already stressed health system
- **Antibiotic stewardship**: MRSA prevalence drives empiric vancomycin use; beta-lactam sparing conserves alternatives
- **Infection control**: Hand hygiene compliance poor in many Indian hospitals; MRSA transmission controlled by standard precautions, isolation if needed
- **CA-MRSA in India**: Rising incidence in urban slums, prisons, sports facilities. Strains harbor PVL; cause severe necrotizing pneumonia in otherwise healthy youth

**📋 Laboratory Diagnosis:**
- **Culture**: Blood, sputum, wound swabs, CSF as per infection site
- **Gram stain**: Gram-positive cocci in clusters; catalase-positive reaction
- **Coagulase test**: Positive in S. aureus; negative in CoNS
- **MRSA detection**: Oxacillin E-test, VITEK AST, PCR for mecA
- **Susceptibility**: Beta-lactams (oxacillin/nafcillin for MSSA), vancomycin, clindamycin, fluoroquinolones, trimethoprim-sulfamethoxazole
- **Antibiotic resistance patterns**: Penicillin resistance (penicillinase) common in India; macrolide resistance (ermC gene) emerging

## Exam Points
- Catalase and coagulase tests differentiate Staph from Strep, S. aureus from CoNS
- Exfoliative toxins cause staphylococcal scalded skin syndrome
- PVL associated with severe community infections
- Toxic shock syndrome pathophysiology: superantigen, cytokine storm
- MRSA mechanisms and treatment options
- Endocarditis risk in IV drug users and prosthetic valve recipients
- Post-influenza pneumonia complications
- Food poisoning incubation and clinical features
`,
    estimatedMinutes: 60,
  },
  {
    topicCode: "MI-MOD-03-TOP-02",
    contentMd: `# Streptococcus & Pneumococcus

## Overview
Streptococcal infections range from minor skin infections to life-threatening sepsis and rheumatic sequelae. Streptococcus pneumoniae is a major cause of pneumonia and meningitis globally and in India.

## Key Concepts

**🎓 Streptococcus Classification:**
- **Hemolysis patterns on blood agar**:
  - Beta-hemolytic (β): Clear zone; S. pyogenes (Group A Strep, GAS), S. agalactiae (GBS, Group B)
  - Alpha-hemolytic (α): Green discoloration; S. pneumoniae, S. viridans (viridans group streptococci)
  - Non-hemolytic (γ): No lysis; S. bovis (now Streptococcus equinus biovar bovis)
- **Lancefield grouping**: Serological classification based on carbohydrate antigen (A, B, C, D, F, G). Group A (S. pyogenes) and Group B (S. agalactiae) are clinically important
- **Gram stain**: Gram-positive cocci in chains (differentiates from staphylococci clusters)
- **Catalase test**: Negative (differentiates from Staphylococcus)

{{IMAGE: Streptococcus identification algorithm based on hemolysis and biochemical tests}}

**💡 Group A Streptococcus (S. pyogenes) - Virulence & Pathogenesis:**
- **M protein**: Anti-phagocytic; mimics human tropomyosin (molecular mimicry)
- **Hyaluronic acid capsule**: Poorly immunogenic; molecularly mimics host connective tissue
- **Streptococcal pyrogenic exotoxins (SPEs)**: Superantigens (streptococcal toxic shock syndrome)
- **Hyaluronidase, streptokinase, DNase**: Tissue invasion and spreading
- **Streptolysins O and S**: Hemolytic toxins; lysis of host cells

**🤔 GAS Clinical Infections:**
- **Non-invasive infections**:
  - **Pharyngitis**: Sore throat, fever, exudative pharyngitis. Most common streptococcal infection. Peak incidence 5-15 years. Diagnosis by throat culture (gold standard) or rapid antigen test
  - **Impetigo**: Superficial pyoderma; honey-crusted lesions, painless. Highly contagious. Higher incidence in tropical climates (India); spreads via auto-inoculation
  - **Scarlet fever**: GAS pharyngitis with erythrogenic toxin-producing strain. Characteristic blanching sandpaper rash, strawberry tongue, Pastia's lines (rash in skin folds)

- **Invasive infections**:
  - **Cellulitis, erysipelas**: Rapid local spread; erysipelas has raised borders, high fever
  - **Necrotizing fasciitis**: Rapidly progressive deep tissue infection; severe pain out of proportion to skin findings; systemic toxicity, shock, multiorgan failure. Surgical emergency; high mortality (20-30%) despite antibiotics + surgery
  - **Streptococcal toxic shock syndrome (STSS)**: GAS producing SPE superantigens; massive cytokine release; fever, hypotension, coagulopathy, renal failure, ARDS. Mortality 30-50%
  - **Puerperal sepsis**: Post-partum infection; maternal deaths; prevented by aseptic obstetric practices. Still significant in low-resource settings (India)

- **Post-infectious sequelae**:
  - **Acute rheumatic fever (ARF)**: Follows GAS pharyngitis by 2-3 weeks in ~3% (without treatment) to 0.3% (with antibiotics). Auto-immune response via molecular mimicry. Manifestations: MAJOR (carditis, polyarthritis, chorea, erythema marginatum, subcutaneous nodules), MINOR (fever, arthralgia, elevated ESR/CRP). Jones criteria for diagnosis. Can be first episode (ARF) or recurrent; risk of chronic rheumatic heart disease (RHD). High burden in India; most common acquired heart disease in children
  - **Post-streptococcal glomerulonephritis (PSGN)**: PSAGN follows infection (throat or skin) by 1-4 weeks; immune complex deposition; hematuria, proteinuria, hypertension, acute kidney injury. Generally self-limited; <5% progress to chronic kidney disease

**⚡ Streptococcus pneumoniae (Pneumococcus):**
- **Polysaccharide capsule**: 97 serotypes identified; types 4, 6B, 9V, 14, 18F, 19A, 19F, 23F account for ~80% invasive disease (PCV13 covers 13 serotypes)
- **Virulence factors**: Capsule (antiphagocytic), pneumolysin (pore-forming toxin), hyaluronate lyase
- **Pathogenesis**: Nasopharyngeal colonization (asymptomatically in 5-30% healthy children) → aspiration/hematogenous spread → disease

- **Clinical infections**:
  - **Pneumonia**: Most common serious infection; productive cough, fever, pleuritic chest pain. Lobar pneumonia classic (but segmental, bronchopneumonia patterns also seen). Risk factors: age >65, chronic lung disease, asplenia, immunodeficiency
  - **Meningitis**: CSF pleocytosis (lymphocyte-predominant), elevated protein, low glucose. Mortality 15-20% even with treatment. Neurological sequelae (hearing loss, developmental delay) in survivors. Empiric third-generation cephalosporins + vancomycin standard pending culture
  - **Otitis media**: Most common bacterial otitis in children; preceding viral URTI
  - **Sinusitis, mastoiditis**: Complications of AOM
  - **Endocarditis**: Native valve, usually prosthetic valve infection; emboli, vegetation

- **Antibiotic resistance**: Penicillin (and broader beta-lactam) resistance increasing globally; prevalence in India 20-40% (non-meningitis strains may be treated with beta-lactams despite resistant classification). Vancomycin MICs creeping up; fluoroquinolones alternative

**🏥 Indian Clinical Context:**
- **Acute rheumatic fever burden**: Highest incidence in low-income countries; 10-15 million people with RHD in India; preventable with prompt GAS diagnosis and penicillin therapy
- **Post-streptococcal sequelae after impetigo**: Tropical impetigo (skin infection) can lead to PSGN; not always preceded by pharyngitis (tropics are exception to temperate-zone pattern)
- **Pneumococcal disease burden**: Vaccine-preventable disease. Pneumococcal meningitis in India: case fatality rate 20-40%. PCV13 introduced in UIP; targeting infants. Adult pneumococcal vaccination (PPSV23) recommended for elderly and chronic disease patients but uptake low
- **Streptococcal surveillance**: Weak in many areas; case reporting of invasive GAS not mandated in most states. ARF/RHD surveillance helps estimate disease burden
- **Antibiotic access for GAS**: Benzyl penicillin G or amoxicillin standard treatment; affordable and available. Allergy management (cephalosporins if beta-lactam allergy) challenging in resource-limited settings

**📋 Diagnosis & Susceptibility:**
- **Culture**: Blood (meningitis, bacteremia), CSF (meningitis), sputum (pneumonia), wound (cellulitis), pharyngeal swab (pharyngitis)
- **Rapid tests**: Rapid strep test (antigen detection) for pharyngitis; >95% specificity
- **Gram stain**: Gram-positive diplococci (lancet-shaped in pneumococcus); in CSF may see PMN predominance
- **Susceptibility**: Penicillin V (oral for mild infection), benzyl penicillin (IV for serious), ceftriaxone/cefotaxime. Vancomycin for meningitis (ensures CNS penetration)

## Exam Points
- Lancefield grouping and clinical significance of Group A, B
- M protein and hyaluronic acid capsule mechanisms
- Scarlet fever characteristics and differential (staphylococcal SSSS)
- Jones criteria for acute rheumatic fever diagnosis
- Molecular mimicry in ARF pathogenesis
- Pneumococcal serotypes and vaccine coverage
- Penicillin resistance mechanisms in pneumococci
- CSF findings in pneumococcal vs viral meningitis
- Complications of untreated pharyngitis (ARF, PSGN)
- Risk factors for invasive pneumococcal disease
`,
    estimatedMinutes: 70,
  },
  {
    topicCode: "MI-MOD-03-TOP-03",
    contentMd: `# Neisseria

## Overview
Neisseria species are gram-negative diplococci. Neisseria meningitidis causes meningitis and septicemia with rapid progression. Neisseria gonorrhoeae causes sexually transmitted infection with serious sequelae if untreated.

## Key Concepts

**🎓 Neisseria Characteristics:**
- **Morphology**: Gram-negative diplococci (kidney or coffee-bean shaped). Oxidase-positive (purple discoloration within 10 seconds; distinguishes from other gram-negative cocci). Catalase-positive
- **Culture**: Selective media (Thayer-Martin: antibiotics suppress normal flora; Modified Thayer-Martin adds polymyxin to reduce Proteus contamination). Growth on chocolate agar (requires X and V factors: hemin and NAD)
- **Fermentation**: N. meningitidis ferments glucose and maltose; N. gonorrhoeae ferments glucose only (differentiates)
- **DNA probe, PCR, NAAT**: Nucleic acid amplification tests sensitive for detection in genital, pharyngeal, rectal specimens

{{IMAGE: Neisseria morphology, oxidase test, and identification}}

**💡 Neisseria meningitidis (Meningococcus) - Virulence & Epidemiology:**
- **Capsule**: 13 serogroups (A, B, C, W, X, Y are clinically important). Serogroup A caused large African epidemics (meningitis belt: Sahel region); serogroup B common in developed countries; serogroup C causes sporadic disease
- **Lipooligosaccharide (LOS)**: Endotoxin; causes tissue damage, Jarisch-Herxheimer reaction
- **Pili & opacity proteins**: Adhesion to epithelium and nasopharyngeal colonization
- **IgA protease**: Inactivates secretory IgA; aids initial colonization
- **Complement resistance**: Capsule and LOS modifications prevent lysis

{{IMAGE: Neisseria meningitidis epidemiology: serogroup distribution, transmission}}

- **Epidemiology**:
  - Asymptomatic nasopharyngeal carriage: 10-35% of general population; higher in crowded settings (barracks, dormitories)
  - Endemic meningitis: <1 case/100,000 in developed countries; 10-25/100,000 in African meningitis belt; seasonal peaks (winter-spring in temperate, dry season in tropics)
  - India: Scattered cases; epidemiological data incomplete. Sporadic serogroup B, C, Y isolates reported

**🤔 Meningococcal Clinical Infections:**
- **Meningitis**: Onset acute (hours to days); fever, neck stiffness, photophobia, headache, altered consciousness. Petechial/purpuric rash in 50-75% (non-blanching; indicates septicemia); rash not mandatory for diagnosis
  - CSF findings: Pleocytosis (PMN-predominant), elevated protein, LOW glucose (hallmark)
  - Complications: Subdural effusion, ventriculitis, hydrocephalus, neurological sequelae (hearing loss 5-10%, focal neurological deficits, learning difficulties)
  - Mortality: 10-15% even with treatment; 50% if untreated
  - Emergency: Empiric antibiotics (ceftriaxone 2g IV 12-hourly) given if meningococcemia suspected (before lumbar puncture if papilledema/shock); delay increases mortality

- **Septicemia (meningococcemia)**: Without meningitis; fever, petechial rash, hypotension, shock, DIC, multiorgan failure
  - Fulminant meningococcemia: Rapid progression to shock, purpura fulminans (extensive tissue necrosis); mortality >50%
  - Waterhouse-Friderichsen syndrome: Adrenal hemorrhage leading to acute adrenal insufficiency, shock

- **Other infections**: Arthritis, pericarditis, urethritis (rare), conjunctivitis

**⚡ Neisseria gonorrhoeae (Gonococci) - Pathogenesis:**
- **Pili and Opa proteins**: Adhesion to urethral, cervical, pharyngeal epithelium
- **IgA protease**: Cleaves secretory IgA
- **Chromosomal resistance to penicillin (CMRNG)** and **plasmid-mediated resistance (PPNG)**: Emergence of resistance complicates therapy. Currently, fluoroquinolones resistant; cephalosporins preferred but reduced susceptibility emerging

{{IMAGE: Neisseria gonorrhoeae transmission and ascending infection pathway}}

- **Clinical infections**:
  - **Urethritis (men)**: Dysuria, purulent penile discharge 2-5 days post-exposure (1-14 days). Pain on micturition forces early treatment-seeking
  - **Cervicitis (women)**: Mucopurulent endocervical discharge, dysuria. Often asymptomatic; higher risk of ascending infection
  - **Ascending infections**:
    - **Pelvic inflammatory disease (PID)**: Endometritis, salpingitis, tubo-ovarian abscess. Fever, lower abdominal pain, deep dyspareunia. Complications: ectopic pregnancy, infertility, chronic pelvic pain (long-term sequelae in 20% of women)
    - **Prostatitis, epididymitis (men)**: Testicular pain, swelling
  - **Disseminated gonococcal infection (DGI)**: Hematogenous spread; bacteremia. Fever, polyarthritis (typically knees, wrists, hands), tenosynovitis, characteristic skin lesions (few pustules on erythematous base, mainly on extremities). Culture often negative except early in disease
  - **Ophthalmia neonatorum**: Neonatal conjunctivitis from maternal infection during delivery. Prevented by silver nitrate, povidone-iodine, or antibiotic prophylaxis (tetracycline, erythromycin)
  - **Pharyngitis, proctitis**: Sexual transmission; often asymptomatic (proctitis in particular)

**🏥 Indian Context:**
- **Meningococcal disease surveillance**: Poor case reporting; true burden unknown
- **Vaccine introduction**: MenB vaccine (recombinant) not yet in UIP; MenACWY vaccine available privately; limited access in India
- **Gonorrhea epidemiology**: High prevalence in sex workers, high-risk groups; underreporting due to stigma. Rising resistance to fluoroquinolones (95%+ resistant); ceftriaxone susceptibility declining
- **STI management**: Syndromic management (urethral discharge presumed gonococcal) common in primary health centers; culture facilities limited. Nucleic acid amplification tests (NAAT) available in tertiary centers but expensive

**📋 Diagnosis & Antibiotic Resistance:**
- **Gram stain**: Gram-negative diplococci, intracellular in PMNs (meningococcus in CSF; gonococci in urethral exudate)
- **Culture**: On Thayer-Martin/Modified Thayer-Martin media; enriched atmosphere (5-10% CO2)
- **Nucleic acid tests**: PCR, TMA, SDA on urine (sensitive), urethral/cervical swabs, pharyngeal/rectal specimens
- **Fermentation test**: Glucose-maltose (meningococcus) vs glucose only (gonococci)
- **Antibiotic susceptibility**:
  - Meningococcus: Penicillin (intermediate/resistant strains), cephalosporins, fluoroquinolones (where susceptible)
  - Gonococci: Ceftriaxone (now first-line globally due to resistance); spectinomycin alternative. Penicillin, tetracycline, fluoroquinolones now unreliable

## Exam Points
- Gram stain: kidney-bean shaped diplococci
- Oxidase test positive (diagnostic pointer)
- Fermentation differentiation (glucose-maltose vs glucose)
- Capsular serogroups and epidemiology
- Meningitis presentation and CSF findings (glucose particularly important)
- Petechial/purpuric rash indicates septicemia
- Waterhouse-Friderichsen syndrome pathophysiology
- Gonococcal urethritis vs cervicitis presentation
- Pelvic inflammatory disease and long-term sequelae
- Disseminated gonococcal infection (DGI) arthritis and skin manifestations
- Antibiotic resistance patterns and current treatment
- STI partner notification and contact tracing
`,
    estimatedMinutes: 70,
  },
  {
    topicCode: "MI-MOD-03-TOP-04",
    contentMd: `# Corynebacterium & Bacillus

## Overview
Corynebacterium diphtheriae causes diphtheria, a toxin-mediated disease preventable by vaccination. Bacillus species are spore-forming, with anthrax as a serious pathogen and B. cereus causing food poisoning and infections.

## Key Concepts

**🎓 Corynebacterium diphtheriae - Morphology & Identification:**
- **Morphology**: Gram-positive bacillus; clubbed or irregular shapes; "Chinese letters" arrangement (palisading pattern)
- **Staining**: Albert's or Loeffler's methylene blue stains metachromatic granules (Neisser's granules); appear as dark dots (polyphosphate inclusions)
- **Culture**: Selective media (Tinsdale medium with potassium tellurite; characteristic black colonies due to tellurite reduction), Löwenstein-Jensen medium
- **Biochemical**: Catalase-positive, ferments glucose and maltose (four biotypes: gravis, mitis, intermedius, belfanti based on biochemical reactions and colony morphology)
- **Toxin production**: ELEK test (immunodiffusion) detects toxin in colonies

{{IMAGE: Corynebacterium diphtheriae morphology, metachromatic granules, and toxin testing}}

**💡 Diphtheria Toxin & Pathogenesis:**
- **Toxin structure**: A-B toxin; A subunit (catalytic) inactivates elongation factor-2 (EF-2) by ADP-ribosylation; B subunit (binding-translocation) facilitates entry
- **Genetic basis**: tox gene (temperate bacteriophage-encoded); toxin production requires lysogenization by corynephage β or ω
- **Mechanism**: Prevents protein synthesis; causes tissue necrosis, pseudomembrane formation
- **Target organs**: Cardiac (myocarditis, arrhythmias), neural (cranial nerve palsy, ascending paralysis)

**🤔 Diphtheria Clinical Manifestations:**
- **Respiratory diphtheria** (90%): 2-6 days incubation; sore throat, low-grade fever, "bull neck" appearance (neck swelling from lymphadenitis and edema). Characteristic gray-black pseudomembrane (thick, adherent to tonsils, pharynx) that bleeds if removed. Nasal diphtheria: serosanguinous discharge, nasal membrane
  - Complications: Airway obstruction (membrane can extend to larynx, trachea), toxin-induced myocarditis (arrhythmias, heart failure, sudden death in 5-10% of cases), neuropathy (cranial nerves: soft palate 3-4 weeks, oculomotor, facial; peripheral neuropathy: ascending paralysis resembling Guillain-Barré, respiratory failure if phrenic/intercostal involved)

- **Cutaneous diphtheria**: Rare in developed countries; endemic in tropical climates. Skin ulcers with adherent membrane; systemic toxin absorption less common
- **Wound diphtheria**: Rare; on traumatized skin

{{IMAGE: Diphtheria clinical progression and toxin-mediated complications}}

- **Management**: Diphtheria antitoxin (horse serum-based; acts extracellularly, binds free toxin, does NOT reverse EF-2 damage) given empirically on clinical suspicion (NOT awaited for culture confirmation; delays treatment worsens outcomes). Antibiotics (benzyl penicillin G or erythromycin) to eradicate organism and prevent transmission. Supportive care: airway management, cardiac monitoring

**⚡ Bacillus Species - Spore Formation & Pathogenesis:**
- **Morphology**: Gram-positive bacilli; spore formation (2-3 μm, large, central/subterminal position; resistant to heat, chemicals)
- **Culture**: Aerobic; grow on blood agar with distinctive appearance: B. anthracis (non-motile, gray mucoid colonies, "medusa head" appearance on nutrient agar with hair-like projections; no hemolysis), B. cereus (motile, hemolytic)
- **Spore resistance**: 80-100°C, 30 minutes insufficient; autoclave (121°C, 15 psi, 15-20 minutes) required

- **Bacillus anthracis - Anthrax**:
  - **Virulence factors**: Polypeptide capsule (D-glutamic acid, antiphagocytic), toxins (lethal toxin: PA + LF; edema toxin: PA + EF)
  - **Transmission**: Inhalation (rare in India, bioterrorism risk), cutaneous (occupational in animal hide workers, butchers), gastrointestinal (rare; eating infected meat)

  - **Clinical forms**:
    - **Cutaneous anthrax** (95%): Painless, itchy papule → fluid-filled vesicle (24-48 hours) → characteristic black necrotic eschar (hence "anthracis" = coal-like) surrounded by severe edema. Lymphadenitis, systemic symptoms if untreated or severe
    - **Inhalation anthrax**: Initial flulike illness → sudden respiratory distress, stridor, cyanosis, shock, death. Mediastinal widening on CXR (hallmark). Mortality 50-80% even with treatment
    - **Gastrointestinal anthrax**: Severe abdominal pain, diarrhea, hematemesis, shock
  - **Treatment**: Ciprofloxacin or doxycycline (post-exposure prophylaxis); penicillin G for clinical disease; supportive care

- **Bacillus cereus - Food Poisoning & Infections**:
  - **Emetic toxin**: Heat-stable; causes vomiting 1-6 hours post-ingestion (resembles staphylococcal food poisoning)
  - **Diarrheal toxin**: Heat-labile; causes diarrhea 8-16 hours post-ingestion (resembles Clostridium perfringens)
  - **Systemic infections**: Bacteremia, meningitis, pneumonia, osteomyelitis in immunocompromised hosts. Rapidly progressive, mortality high

**🏥 Indian Context:**
- **Diphtheria resurgence**: Epidemic in some states (Delhi, 2017-2018) due to low immunization rates, waning immunity, poor surveillance. Vaccine (DPT) coverage in India ~92% nationally but <70% in some high-burden states
- **Diphtheria mortality**: High in endemic areas without access to antitoxin; antitoxin availability limited in peripheral health centers
- **Occupational anthrax**: Leather and hide workers, butchers at risk; surveillance weak
- **Bacillus cereus food poisoning**: Reported sporadically; outbreak linked to cooked rice (stored at room temperature allowing spore germination)

**📋 Diagnosis:**
- **Corynebacterium**: Culture on selective media, ELEK test for toxin, fermentation testing
- **Bacillus anthracis**: Culture on blood/nutrient agar (non-motile, rough-surfaced); Gram stain; PCR; serology
- **Bacillus cereus**: Culture (motile, hemolytic); Gram stain

## Exam Points
- Metachromatic granules in Corynebacterium
- Diphtheria toxin A-B mechanism (ADP-ribosylation of EF-2)
- Diphtheria complications: myocarditis, neuropathy, airway obstruction
- ELEK test for toxin detection
- Antitoxin role (extracellular toxin neutralization only)
- Bacillus spore resistance and autoclaving requirements
- Anthrax cutaneous presentation and characteristic eschar
- Anthrax inhalation: rapid progression, mediastinal widening
- Bacillus cereus food poisoning: emetic vs diarrheal forms
- Antibiotic susceptibility: penicillin for anthrax and diphtheria
`,
    estimatedMinutes: 65,
  },
  {
    topicCode: "MI-MOD-03-TOP-05",
    contentMd: `# Clostridium

## Overview
Clostridium species are gram-positive, anaerobic, spore-forming bacilli. Clostridium tetani (tetanus), C. botulinum (botulism), C. difficile (pseudomembranous colitis), and C. perfringens (food poisoning, gas gangrene) are major pathogens.

## Key Concepts

**🎓 Clostridium Characteristics:**
- **Morphology**: Gram-positive bacilli; spore formation (subterminal, terminal, or central depending on species). Spores: extremely resistant to heat (121°C autoclave required), chemicals, radiation
- **Culture**: Anaerobic obligate; Gram-negative on older cultures (Gram-variable); selective media (e.g., thioglycollate broth)
- **Identification**: Biochemical tests (fermentation patterns), enzyme activity (lecithinase, lipase), gas-liquid chromatography (short-chain fatty acids)

{{IMAGE: Clostridium spore morphology and anaerobic culture requirements}}

**💡 Clostridium tetani - Tetanus:**
- **Pathogenesis**: Spores contaminate wounds; germinate anaerobically (low oxygen in deep puncture wounds, crush injuries, dirty wounds). Vegetative cells produce tetanospasmin (tetanus toxin)
- **Tetanospasmin**: SNARE protease; cleaves SNARE complex → blocks inhibitory neurotransmitter (GABA, glycine) release → unopposed excitatory signals → muscle rigidity, spasm
- **Clinical manifestations**:
  - **Generalized tetanus** (90%): Incubation 7-21 days (range 1-180 days); longer incubation = milder disease
    - Prodromal: Jaw stiffness (trismus), difficulty opening mouth; risus sardonicus (facial muscle contraction producing sardonic grin)
    - Progressive: Neck rigidity, opisthotonos (arched back), "board-like" abdominal rigidity, flexor muscle predominance (characteristic flexed posture)
    - Spasms: Triggered by minor stimuli (light, noise, touch); violent, recurring; respiratory spasm can cause apnea
    - Autonomic instability: Tachycardia, hypertension, diaphoresis, hyperthermia
    - Mortality: 20-30% even with treatment; higher in neonates, elderly, inadequate immunization

  - **Localized tetanus**: Muscle rigidity near wound site; risk of progression to generalized
  - **Cephalic tetanus**: Follows head wounds; cranial nerve involvement; high mortality
  - **Neonatal tetanus**: Umbilical stump infection (unhygienic cord care); common in low-income countries. Fever, poor feeding, weak cry, decreased tone initially (deceiving clinicians), then rigid spasticity develops

{{IMAGE: Tetanus progression: trismus, risus sardonicus, opisthotonos}}

- **Management**: Tetanus immunoglobulin (TIG, passive immunity); antibiotics (penicillin G, metronidazole); supportive care (airway management, mechanical ventilation if respiratory muscle involvement, benzodiazepines for spasm control), wound debridement
- **Prevention**: Tetanus toxoid vaccination (DPT series, boosters every 10 years). India's challenge: neonatal tetanus still occurs in home deliveries with unhygienic cord care despite vaccination programs

**🤔 Clostridium botulinum - Botulism:**
- **Pathogenesis**: Spores in food (anaerobic preservation: canned food, honey) germinate; produce botulinum toxin. Toxin absorbed from GI tract; travels retrogradely on motor neurons
- **Botulinum toxin**: SNARE protease; cleaves SNARE complex → blocks acetylcholine release at neuromuscular junction → flaccid paralysis
- **Clinical manifestations**: Incubation 12-72 hours
  - Prodromal: Dry mouth, diplopia, dysarthria, dysphagia
  - Progressive: Descending paralysis (cranial nerves first, then limbs, then respiratory muscles). "Floppy baby" presentation in infantile botulism
  - Autonomic: Pupil dilation; dry mouth; no fever (distinguishes from infection)
  - Mortality: 5-10% if respiratory support available; higher otherwise

- **Management**: Antitoxin (polyclonal, trivalent against toxins A, B, E; botulism immunoglobulin IV for infants)
- **Clinical correlation**: Foodborne (adults), infantile (infants <1 year with honey ingestion), wound (IV drug users with contaminated heroin)

**⚡ Clostridium difficile - Pseudomembranous Colitis:**
- **Pathogenesis**: Antibiotic-induced disruption of normal gut flora (especially prolonged broad-spectrum: clindamycin, third-generation cephalosporins, fluoroquinolones); C. difficile spores survive, vegetate, produce toxins
- **Toxins**: Toxin A (enterotoxin), Toxin B (cytotoxin); hypervirulent strains produce binary toxin (actin-modifying)
- **Clinical**: Watery diarrhea (sometimes bloody), fever, abdominal cramping, leukocytosis. Severity ranges from self-limited colitis to fulminant colitis (toxic megacolon, perforation)
- **Diagnosis**: Stool toxin detection (ELISA, immunochromatographic), GDH (glutamate dehydrogenase, faster), PCR (sensitivity/specificity highest)
- **Management**: Discontinue inciting antibiotic; oral vancomycin (locally acts in colon), metronidazole (less effective), fidaxomicin (newer, lower recurrence)
- **Recurrence**: 20-30% after first episode; higher risk of second recurrence
- **India context**: Rising incidence with increasing antibiotic usage; inadequate laboratory facilities for detection in many centers

**🏥 Clostridium perfringens - Gas Gangrene & Food Poisoning:**
- **Gas gangrene (clostridial myonecrosis)**: Spores inoculated in traumatic wounds (crush injuries, contaminated wounds, post-amputation); anaerobic growth; alpha-toxin (phospholipase C) production
  - Rapid progression (hours to days): Severe muscle pain, swelling, crepitus (gas in tissues), tissue discoloration, systemic toxicity, shock, renal failure
  - Mortality: 80-90% without rapid intervention (amputation/debridement within 24 hours)
  - Management: Immediate surgical debridement, high-dose IV penicillin + clindamycin; amputation if limb-threatening

- **Food poisoning**: Spore ingestion in inadequately heated meat; germination in colon; enterotoxin production; diarrhea 8-16 hours post-ingestion, short duration (24 hours)

**⚡ Other Clostridium Species:**
- **C. histolyticum, C. septicum, C. novyi**: Rarely cause gas gangrene; similar presentation to C. perfringens
- **C. sordellii**: Toxic shock-like syndrome; high mortality; rare

**🏥 Indian Healthcare Context:**
- **Tetanus burden**: Despite 92% DPT coverage nationally, tetanus still causes 1000+ deaths annually (estimated). Neonatal tetanus persists in states with <80% TT vaccination during pregnancy
- **Post-operative tetanus**: Reported after trauma, surgery in unimmunized individuals; preventable with proper wound care and tetanus prophylaxis
- **Botulism**: Rare; occasional foodborne outbreaks linked to home-canned foods, honey ingestion in infants
- **C. difficile**: Emerging problem with increasing hospitalization, antibiotic use; limited diagnostic capacity in many centers
- **Gas gangrene**: Rare but dramatic complication of trauma; requires aggressive management; amputation sometimes unavoidable

**📋 Diagnosis:**
- **Tetanus**: Clinical (no confirmatory test); supportive evidence: wound culture (may not isolate organism), toxin detection rare
- **Botulism**: Mouse neutralization bioassay (gold standard), stool culture (infants), serology
- **C. difficile**: Stool toxin ELISA, GDH antigen + toxin (two-step algorithm), PCR
- **Gas gangrene**: Gram stain of wound exudate (gram-positive bacilli with few WBCs), culture (anaerobic), clinical impression (severe myonecrosis)

## Exam Points
- Clostridium spore resistance and anaerobic requirements
- Tetanospasmin mechanism: blocks inhibitory neurotransmitter release
- Tetanus manifestations: trismus, risus sardonicus, opisthotonos
- Tetanus incubation and prognostic factors (longer incubation = milder)
- Neonatal tetanus pathogenesis (unhygienic cord care)
- Botulinum toxin blocks acetylcholine release (flaccid paralysis)
- Botulism vs tetanus contrast (flaccid vs spastic paralysis)
- C. difficile antibiotic-associated diarrhea risk factors
- Gas gangrene pathogenesis and rapid progression
- Clostridial myonecrosis vs simple cellulitis
- Alpha-toxin (phospholipase C) role in gas gangrene
- Tetanus prophylaxis in wound management
`,
    estimatedMinutes: 70,
  },
  {
    topicCode: "MI-MOD-04-TOP-01",
    contentMd: `# Enterobacteriaceae & E. coli

## Overview
Enterobacteriaceae comprise gram-negative, rod-shaped bacteria with oxidative-fermentative glucose metabolism. Escherichia coli is the most common, causing UTIs, diarrhea, sepsis, and meningitis globally and in India.

## Key Concepts

**🎓 Enterobacteriaceae Identification:**
- **Morphology**: Gram-negative bacilli; arranged singly or in pairs
- **Culture**: Grow on standard media (blood, MacConkey agar). MacConkey: Lactose-fermenting → pink colonies; non-lactose-fermenting → colorless/transparent
- **Biochemical tests**:
  - Glucose fermentation: Oxidative-fermentative (OF) test; all enterobacteria ferment glucose (acid production)
  - IMVIC reactions: Indole, Methyl-red, Voges-Proskauer (VP), Citrate
    - E. coli: +, +, -, - (Indole+, MR+, VP-, Citrate-)
    - Klebsiella: -, -, +, +
    - Citrobacter: -, +, -, +
    - Proteus: +, +, -, +
    - Salmonella: -, +, -, + (non-motile S. typhi; motile other serovars)
    - Shigella: -, +, -, -
  - Motility: Flagella presence; non-motile: Klebsiella, Shigella, Salmonella typhi
- **API strips, VITEK systems**: Automated biochemical identification

{{IMAGE: Enterobacteriaceae identification algorithm based on fermentation and biochemical tests}}

**💡 Escherichia coli - Virulence Factors & Pathotypes:**
- **General virulence factors**: Fimbriae (especially P and type 1 fimbriae for UTI), flagella, toxins, toxin-co-regulated pili (TCP), adhesins

- **Pathogenic E. coli strains**:
  - **Enteropathogenic E. coli (EPEC)**: Adherence to intestinal epithelium via bundle-forming pili; mild watery diarrhea; important in infants (<2 years), travelers to low-income countries. Historically common in India; decreasing with sanitation improvements

  - **Enterotoxigenic E. coli (ETEC)**: Heat-labile (LT) and heat-stable (ST) enterotoxins; causes "traveler's diarrhea" in adults; infantile diarrhea in low-income countries. LT: cAMP-mediated secretory diarrhea; ST: cGMP-mediated. Incubation 1-3 days; duration 3-5 days; self-limited

  - **Enteroaggregative E. coli (EAEC)**: Biofilm formation; persistent diarrhea (>14 days) in immunocompromised, travelers

  - **Shiga toxin-producing E. coli (STEC)**: O157:H7 most clinically important. Shiga toxin (Stx1, Stx2) irreversibly inactivates ribosomes. Hemorrhagic colitis with bloody diarrhea; complications: hemolytic uremic syndrome (HUS) in 5-15% (thrombocytopenia, microangiopathic hemolytic anemia, acute renal failure); neurological complications rare

  - **Diffusely adherent E. coli (DAEC)**: Persistent diarrhea; associated with malnutrition in children

  - **Uropathogenic E. coli (UPEC)**: P fimbriae, hemolysins, alpha-hemolysin, capsule; causes 80-90% community-acquired UTIs (cystitis, pyelonephritis). Biofilm formation in bladder facilitates recurrence

  - **Neonatal meningitis-associated E. coli (NMEC)**: K1 capsule (mimics polysialic acid on brain); invades blood-brain barrier; meningitis in neonates (<3 months). Risk factors: premature delivery, maternal colonization, maternal fever/chorioamnionitis

{{IMAGE: E. coli pathotypes and associated disease syndromes}}

**🤔 Clinical Infections:**
- **Urinary tract infection (UTI)**: Most common gram-negative infection. Community-acquired (E. coli 80-90%); healthcare-associated (E. coli, Klebsiella, Proteus from indwelling catheters)
  - Cystitis: Dysuria, frequency, urgency, suprapubic pain; pyuria on urinalysis
  - Pyelonephritis: Fever, flank pain, costovertebral angle tenderness; systemic toxicity; risk of sepsis

- **Gastroenteritis**: ETEC, EAEC, EPEC; range from mild watery diarrhea to severe bloody diarrhea (STEC)

- **Bacteremia/sepsis**: From UTI, intra-abdominal source (peritonitis, cholecystitis), healthcare devices (urinary catheter, central venous catheter)

- **Neonatal meningitis**: NMEC with K1 capsule; fever, irritability, poor feeding, seizures; high mortality (15-30%) and morbidity (hearing loss, neurological sequelae in 30-40%)

- **Intra-abdominal infections**: Peritonitis (spontaneous bacterial, post-perforation), biliary infections (cholecystitis, cholangitis), hepatic abscess

**⚡ Antibiotic Resistance Patterns:**
- **Ampicillin resistance**: Common (50%+ of E. coli strains); beta-lactamase production (ampicillin cannot penetrate gram-negative)
- **Extended-spectrum beta-lactamase (ESBL)**: Ceftriaxone-resistant; high prevalence in India (20-40% in community-acquired E. coli; higher in hospital). Risk factors: previous antibiotic exposure, healthcare contact
- **Fluoroquinolone resistance**: Increasing; chromosomal mutations
- **Carbapenems**: Still effective; reserved for serious infections (meningitis, sepsis) due to cost and resistance emergence risk
- **Colistin/polymyxin B**: Last resort for pan-resistant isolates

**🏥 Indian Context:**
- **Diarrheal disease burden**: E. coli (various pathotypes) among leading causes. ETEC endemic; STEC sporadic. Rotavirus vaccine (now in UIP) reduced some morbidity
- **UTI prevalence**: High in young women (10-15% have asymptomatic bacteriuria); catheter-associated bacteriuria in hospitalized patients
- **ESBL prevalence**: Alarmingly high in India; drives empiric carbapenems use, increasing costs and resistance risk
- **Neonatal meningitis**: E. coli K1 still significant cause in tertiary centers; mortality high despite antibiotics
- **Healthcare-associated infections**: E. coli from urinary catheters, central lines major cause of nosocomial bacteremia in India
- **Antibiotic stewardship**: Urgent need given ESBL prevalence; empiric therapy selection challenging

**📋 Diagnosis & Susceptibility:**
- **Culture**: Urine (clean-catch mid-stream, catheter specimen), blood (aerobic bottles), CSF (meningitis)
- **Gram stain**: Gram-negative bacilli
- **Identification**: IMVIC reactions, automated systems
- **Susceptibility testing**: Ampicillin, amoxicillin-clavulanic acid, first-generation cephalosporin (cephalexin), second-generation (cefaclor), third-generation (ceftriaxone, cefotaxime), fluoroquinolones (ciprofloxacin, levofloxacin), azithromycin, trimethoprim-sulfamethoxazole, gentamicin, amikacin, carbapenems (meropenem, ertapenem)
- **ESBL testing**: CLSI/EUCAST phenotypic methods (cephalosporin MIC elevation, inhibitor-based confirmation)

## Exam Points
- IMVIC reactions for E. coli identification
- Enteropathogenic vs enterotoxigenic vs Shiga toxin-producing E. coli
- Heat-labile (LT) and heat-stable (ST) enterotoxin mechanisms
- P fimbriae and uropathogenic E. coli
- K1 capsule and neonatal meningitis
- Hemolytic uremic syndrome (HUS) in STEC infection
- ESBL mechanisms and prevalence in India
- Ampicillin resistance mechanisms
- UTI diagnosis and pyelonephritis risk factors
- Antibiotic selection based on resistance patterns (ESBL-producing E. coli requires carbapenems or third-generation cephalosporins with caution)
`,
    estimatedMinutes: 70,
  },
  {
    topicCode: "MI-MOD-04-TOP-02",
    contentMd: `# Vibrio, Campylobacter & Helicobacter

## Overview
Vibrio cholerae causes epidemic cholera, a severe watery diarrhea affecting millions in low-income countries including India. Campylobacter jejuni is the leading bacterial cause of gastroenteritis. Helicobacter pylori colonizes the stomach, causing gastritis and ulcers.

## Key Concepts

**🎓 Vibrio cholerae - Morphology & Identification:**
- **Morphology**: Gram-negative, curved rod (comma-shaped or S-shaped); motile with single polar flagellum. Halophilic (salt-loving); grows on high-salt media
- **Culture**: TCBS (Thiosulfate-citrate-bile-salt sucrose) agar selective medium. Yellow-colored colonies on TCBS (sucrose fermentation). Alkaline peptone water (pH 8.5) enrichment enhances recovery
- **Serotyping**: O antigen groups O1 and O139 cause pandemic cholera (produce cholera toxin). O1 subdivided into classical and El Tor biotypes (El Tor more prevalent currently)
- **Identification**: Gram-negative curved rods, motile, oxidase-positive, rapid TCBS growth

{{IMAGE: Vibrio cholerae morphology, TCBS culture, and serotypes}}

**💡 Cholera Toxin & Pathogenesis:**
- **Cholera toxin (CTx)**: A-B enterotoxin (similar to ETEC LT); A subunit (catalytic) ADP-ribosylates Gs protein → ↑ cAMP → CFTR activation → massive chloride secretion into intestinal lumen
- **Mechanisms**: Small intestinal epithelium hypersecretion; mucosal surface intact (no blood in stool); secretory diarrhea
- **Severity**: Cholera can cause 10-15 liters/day fluid loss; rapid dehydration, hypovolemic shock, metabolic acidosis, renal failure if untreated

{{IMAGE: Cholera toxin mechanism: cAMP pathway, CFTR activation, intestinal secretion}}

- **Clinical manifestations**:
  - Onset: Acute within 12-72 hours post-exposure
  - Prodrome: Abdominal discomfort, mild diarrhea
  - Peak illness: "Rice-water stools" (clear, watery, odorless, painless); frequent (20-50 per day); no fever; rapid dehydration
  - Severe dehydration: Sunken eyes, loss of skin turgor, weak pulse, hypotension, acute kidney injury, shock
  - Laboratory: Electrolyte imbalance (hypokalemia, hypochloremia), metabolic acidosis, elevated creatinine
  - Mortality: 1-60% depending on treatment access; <1% with adequate rehydration; >60% if untreated/inadequate fluids

- **India context**:
  - Endemic in coastal regions (West Bengal, Odisha) and during monsoon in Ganga-delta region
  - Epidemic potential: Monsoon (June-October) seasonal peaks when water contamination high
  - 2004 tsunami: Cholera outbreak in affected areas (poor sanitation, water contamination)
  - Vaccine: Oral cholera vaccine (killed bivalent O1/O139) available; not part of UIP; recommended for high-risk areas and travelers

**🤔 Campylobacter jejuni - Bacterial Gastroenteritis:**
- **Morphology**: Gram-negative, S-shaped or spiral rods; microaerophilic (requires 3-5% O2, 5-10% CO2); motile with bipolar flagella ("darting" motility on hanging drop)
- **Culture**: Selective media (Campy food with antibiotics suppressing coliforms), microaerophilic incubation (42°C, 48 hours)
- **Identification**: Gram-negative curved rods, catalase-positive, oxidase-positive, hippurate hydrolysis (positive), rapid growth at 42°C

- **Pathogenesis**: Invasion of colonic mucosa; produces enterotoxins and cytotoxins; inflammatory diarrhea (differs from V. cholerae's secretory diarrhea)

- **Clinical manifestations**:
  - Incubation: 2-5 days
  - Symptoms: Watery then bloody diarrhea, fever, abdominal cramping, sometimes vomiting. Duration 3-7 days typically
  - Complications: Guillain-Barré syndrome (GBS) post-infection (1:1000 cases); anti-ganglioside antibodies; ascending paralysis, respiratory failure. Reactive arthritis, hemolytic uremic syndrome (rare)
  - Transmission: Poultry, unpasteurized milk, contaminated water; person-to-person less common

- **India context**: Rising incidence with improved diagnostics and increased awareness. Poultry consumption increasing; occupational exposure in poultry workers

{{IMAGE: Campylobacter jejuni morphology, culture, and post-infectious complications}}

**⚡ Helicobacter pylori - Gastric Colonization:**
- **Morphology**: Gram-negative, S-shaped or spiral; motile with 4-6 lophotrichous flagella; microaerophilic; microaerobic or requires special gas mix
- **Culture**: Microaerophilic incubation, selective media (blood agar with antibiotics), 5-7 days incubation
- **Acid resistance**: Urease production (urease test diagnostic). Urease produces ammonia → neutralizes gastric acid locally; survival in acidic stomach

- **Pathogenesis**:
  - Motility and flagella: Navigate through gastric mucus layer
  - Urease: Acid neutralization, survival
  - VacA toxin: Vacuolization of gastric epithelium; cell damage
  - CagA toxin (Type IV secretion system): Cell-shape changes, apoptosis
  - Chronic inflammation: IL-8, TNF-α, other cytokines; destruction of gastric mucosa

- **Clinical associations**:
  - **Chronic gastritis**: Histological changes; most infected people asymptomatic
  - **Peptic ulcer disease (PUD)**: Duodenal ulcer (associated with H. pylori in 90%+ of cases), gastric ulcer (60-70%); ulcer complications (perforation, hemorrhage)
  - **Gastric cancer**: H. pylori classification as Group 1 carcinogen; risk of intestinal-type gastric adenocarcinoma (especially in individuals with cagA+ strains, high inflammatory response)
  - **Lymphoma**: MALT (mucosa-associated lymphoid tissue) lymphoma; can regress with eradication therapy

- **Diagnosis**:
  - **Rapid urease test**: Endoscopic biopsy + urease substrate → ammonia production (pH change, color change within minutes)
  - **Serology**: IgG antibodies (indicates exposure; persists despite eradication)
  - **Urea breath test (UBT)**: Gold standard for diagnosis and confirmation of eradication. Non-invasive; requires 4-week washout of PPI
  - **Stool antigen test**: ELISA for H. pylori antigen; less sensitive
  - **PCR**: Highly sensitive; not widely available; useful for antibiotic resistance detection

- **Treatment (triple or quadruple therapy)**:
  - Standard triple therapy: PPI + amoxicillin + clarithromycin (7-14 days); ineffective in clarithromycin-resistant strains (common, >20% resistance)
  - Bismuth-containing quadruple therapy: PPI + bismuth + metronidazole + tetracycline (7-14 days); more effective
  - Sequential or concomitant regimens: Higher eradication rates (>90%) vs standard triple (~80%)
  - Resistance monitoring: Clarithromycin, metronidazole resistance; cultures + susceptibility guide therapy

- **India context**:
  - High H. pylori prevalence (30-40% in urban, higher in rural populations); mostly asymptomatic
  - Gastric cancer incidence: India has high burden; H. pylori significant risk factor
  - Limited access to diagnosis (urease test available in tertiary centers; UBT rare; serology unreliable post-eradication)
  - Treatment compliance: Poor adherence with multiple drugs, long duration

{{IMAGE: Helicobacter pylori pathogenesis and associated gastric pathology}}

**🏥 Prevention & Epidemiology:**
- **Cholera**: Fecal-oral transmission; contaminated water/food. Prevention: Safe water, sanitation, handwashing, oral rehydration solution (ORS) availability. Vaccination (oral, killed bivalent) for travelers and epidemic-prone areas
- **Campylobacter**: Poultry reservoir; undercooked meat, unpasteurized milk, contaminated water. Prevention: Food safety, handwashing, pasteurization
- **H. pylori**: Person-to-person transmission (saliva, fecal-oral); water-borne in developing countries. Prevention: Safe water, sanitation; screening and eradication in high-risk individuals

**📋 Diagnosis & Antibiotic Susceptibility:**
- **Vibrio cholerae**: TCBS culture, oxidase test, rapid agglutination (O1, O139 antisera)
- **Campylobacter jejuni**: Selective media, microaerophilic incubation, catalase/oxidase, thermophilic growth at 42°C
- **H. pylori**: Urease test, serology, culture (selective media), UBT, stool antigen, PCR
- **Antibiotic susceptibility (Vibrio, Campylobacter)**: Tetracycline, fluoroquinolones, macrolides; resistance emerging

## Exam Points
- Vibrio cholerae O1/O139 serotypes and pandemic strains
- Cholera toxin A-B mechanism (Gs protein ADP-ribosylation, cAMP increase)
- Rice-water stools pathophysiology (secretory diarrhea)
- Dehydration management: ORS, IV fluid in severe cases
- Campylobacter motility and microaerophilic requirements
- Guillain-Barré syndrome post-Campylobacter infection
- H. pylori urease and acid resistance
- VacA and CagA virulence factors
- H. pylori and gastric cancer association
- MALT lymphoma regression with H. pylori eradication
- Rapid urease test vs urea breath test
- Clarithromycin resistance and treatment failure
- Oral cholera vaccine and indication
`,
    estimatedMinutes: 70,
  },
];
