import type { TopicLessons } from "./content-loader";

/**
 * 5-layer lessons for Immunology / Microbiology module.
 * Covers Innate Immunity (MI-MOD-02-TOP-01).
 * Primary ref: Ananthanarayan & Paniker 10th ed, Jawetz 28th ed.
 */
export const immunologyPart1Lessons: TopicLessons[] = [
  // ─── Topic: Innate Immunity (MI-MOD-02-TOP-01) ─────────────────
  {
    topicCode: "MI-MOD-02-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "innate-immunity-layer-1-foundation",
        title: "Innate Immunity - Foundation",
        estimatedMinutes: 20,
        summary: "Innate immunity is the first-line defense present from birth. It includes physical and chemical barriers, phagocytic cells (neutrophils, macrophages), NK cells, complement system, and inflammatory mediators.",
        contentMd: `# Innate Immunity - Foundation

## Definition and Characteristics
- **Innate immunity**: Non-specific defense mechanisms present from birth
- **Response time**: Immediate to hours (no prior sensitization needed)
- **Memory**: No immunological memory (same response on re-exposure)
- **Specificity**: Broad pattern recognition (PAMPs), not antigen-specific
- **Components**: Physical barriers, cellular defenses, humoral factors

## First Line of Defense: Physical and Chemical Barriers

### Skin
| Barrier | Mechanism |
|---------|-----------|
| Intact epidermis | Mechanical barrier with keratinized layer |
| Acidic pH (4.5-5.5) | Inhibits bacterial colonization |
| Sebaceous secretions | Fatty acids with antimicrobial properties |
| Normal flora | Competitive exclusion of pathogens |
| Desquamation | Shedding removes attached organisms |

### Mucous Membranes
| Site | Defense |
|------|---------|
| Respiratory | Mucociliary escalator, lysozyme, IgA, cough reflex |
| GI tract | Gastric acid (pH 1-3), bile salts, peristalsis, Paneth cells |
| Urogenital | Urinary flow, vaginal lactobacilli (pH 3.5-4.5) |
| Conjunctiva | Tears with lysozyme, mechanical blinking |

## Second Line of Defense: Cellular Components

### Neutrophils (PMNs)
- Most abundant circulating WBC (40-75%)
- First cells recruited to infection site
- Functions: phagocytosis, oxidative killing (respiratory burst)
- Short-lived: 5-7 days in blood, hours in tissues
- Form pus at infection sites

### Macrophages
- Derived from blood monocytes (tissue-resident forms)
- Named by location: Kupffer cells (liver), alveolar macrophages (lung), microglia (brain)
- Functions: phagocytosis, antigen presentation (MHC II), cytokine secretion
- Bridge between innate and adaptive immunity

### Natural Killer (NK) Cells
- Large granular lymphocytes (CD16+, CD56+)
- Kill virus-infected cells and tumor cells without prior sensitization
- Mechanism: perforin-granzyme pathway induces apoptosis
- Activated by IL-12, IFN-alpha/beta; inhibited by MHC class I on target cells

### Dendritic Cells
- Professional antigen-presenting cells
- Capture antigens in tissues, migrate to lymph nodes
- Present antigens to T cells via MHC II (link innate to adaptive immunity)

## Humoral Components

### Complement System
- Over 30 plasma proteins activated in cascade
- Three activation pathways: Classical, Alternative, Lectin
- Functions: opsonization (C3b), chemotaxis (C5a), lysis (MAC C5b-9), inflammation (C3a, C5a)

### Cytokines
| Cytokine | Source | Key Functions |
|----------|--------|--------------|
| TNF-alpha | Macrophages | Fever, vascular permeability, septic shock |
| IL-1 | Macrophages | Fever, acute phase response |
| IL-6 | Macrophages, fibroblasts | Acute phase proteins (CRP), fever |
| IL-8 | Macrophages | Neutrophil chemotaxis |
| IFN-alpha/beta | Virus-infected cells | Antiviral state in neighboring cells |
| IL-12 | Macrophages, DCs | NK cell activation, Th1 differentiation |

> **Clinical Pearl**: Innate immunity handles most infections without activating adaptive immunity. Only when innate defenses are overwhelmed does adaptive immunity engage (takes 4-7 days).`,
        mnemonics: [
          { text: "INN for Innate: Immediate, Non-specific, No memory", explanation: "Three defining characteristics that distinguish innate from adaptive immunity" },
          { text: "Skin SAND: Sebum, Acid pH, Normal flora, Desquamation", explanation: "Four defense mechanisms of skin barrier" },
          { text: "NK cells = Natural Killers: kill without prior exposure", explanation: "NK cells do not need antigen presentation or MHC restriction to kill targets" }
        ],
        keyPoints: [
          "Innate immunity is immediate, non-specific, and lacks memory",
          "Physical barriers (skin, mucosa) are the most important first-line defense",
          "Neutrophils are the first responders to acute bacterial infection",
          "Macrophages bridge innate and adaptive immunity via antigen presentation",
          "Complement system provides opsonization (C3b), chemotaxis (C5a), and lysis (MAC)"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker Textbook of Microbiology", chapter: "Chapter 5: Immunity", edition: "10th" },
          { book: "Jawetz, Melnick & Adelberg Medical Microbiology", chapter: "Chapter 7: Innate Immunity", edition: "28th" }
        ]
      },
      {
        layer: 2,
        slug: "innate-immunity-layer-2-mechanism",
        title: "Innate Immunity - Mechanism",
        estimatedMinutes: 30,
        summary: "Pattern recognition receptors (TLRs), complement cascade pathways, phagocytosis steps, respiratory burst mechanism, and the inflammatory cascade with endothelial activation.",
        contentMd: `# Innate Immunity - Mechanisms

## Pattern Recognition Receptors (PRRs)

### Toll-Like Receptors (TLRs)
| TLR | Location | Ligand (PAMP) | Pathogen |
|-----|----------|--------------|----------|
| TLR-2 | Cell surface | Peptidoglycan, lipoteichoic acid | Gram-positive bacteria |
| TLR-3 | Endosome | dsRNA | Viruses |
| TLR-4 | Cell surface | LPS (endotoxin) | Gram-negative bacteria |
| TLR-5 | Cell surface | Flagellin | Motile bacteria |
| TLR-7/8 | Endosome | ssRNA | RNA viruses |
| TLR-9 | Endosome | CpG DNA | Bacteria, DNA viruses |

### TLR Signaling
1. PAMP binds TLR on macrophage/DC surface
2. MyD88 adaptor protein recruited
3. NF-kB pathway activated
4. Transcription of pro-inflammatory cytokines (TNF-alpha, IL-1, IL-6)

### Other PRRs
- **NOD-like receptors (NLRs)**: Intracellular; detect peptidoglycan fragments
- **RIG-I/MDA5**: Cytoplasmic; detect viral RNA
- **Mannose receptors**: Recognize terminal mannose on pathogens
- **Scavenger receptors**: Bind modified lipoproteins, microbial surfaces

## Complement Cascade - Three Pathways

### Classical Pathway (Antibody-Dependent)
1. C1q binds IgG or IgM-antigen complex
2. C1r and C1s activated
3. C4 cleaved -> C4b binds surface; C2 cleaved -> C2a
4. **C3 convertase**: C4b2a
5. C3 cleaved -> C3b (opsonin) + C3a (anaphylatoxin)
6. **C5 convertase**: C4b2a3b
7. C5b initiates MAC formation (C5b-C6-C7-C8-C9)

### Alternative Pathway (Antibody-Independent)
1. Spontaneous C3 hydrolysis (tick-over mechanism)
2. Factor B binds C3b; Factor D cleaves Factor B -> Bb
3. **C3 convertase**: C3bBb (stabilized by properdin)
4. Amplification loop generates more C3b
5. **C5 convertase**: C3bBbC3b

### Lectin Pathway
1. Mannose-binding lectin (MBL) binds mannose on pathogen surface
2. MASP-1 and MASP-2 activated
3. Cleaves C4 and C2 (same as classical pathway from this point)

### Complement Regulation
| Regulator | Function |
|-----------|----------|
| C1-INH (C1 inhibitor) | Inactivates C1r, C1s (deficiency -> hereditary angioedema) |
| Factor H | Displaces Bb from C3bBb (alternative pathway regulator) |
| DAF (CD55) | Accelerates decay of C3/C5 convertases on host cells |
| CD59 (protectin) | Prevents MAC assembly on host cells |

> Deficiency of DAF + CD59 -> Paroxysmal Nocturnal Hemoglobinuria (PNH)

## Phagocytosis: Four Steps

### 1. Chemotaxis
- C5a, IL-8 (CXCL8), bacterial products attract neutrophils
- Selectin-mediated rolling on endothelium -> integrin-mediated adhesion -> diapedesis

### 2. Opsonization and Recognition
- C3b and IgG coat the pathogen (opsonins)
- Fc receptors and CR1 on phagocytes bind opsonized bacteria

### 3. Engulfment
- Pseudopodia extend around organism -> phagosome formation
- Phagosome fuses with lysosome -> phagolysosome

### 4. Killing (Intracellular)
**Oxygen-dependent (Respiratory Burst)**:
- NADPH oxidase: O2 -> superoxide (O2-)
- Superoxide dismutase: O2- -> H2O2
- Myeloperoxidase: H2O2 + Cl- -> HOCl (hypochlorous acid, most potent)

**Oxygen-independent**:
- Lysozyme (breaks peptidoglycan)
- Lactoferrin (iron chelation)
- Defensins (membrane disruption)
- Acidic pH of phagolysosome

## Inflammatory Response Steps
1. **Tissue injury/infection**: damaged cells release DAMPs; bacteria release PAMPs
2. **Vascular changes**: vasodilation (histamine, PGE2) -> redness, heat
3. **Increased permeability**: plasma protein leakage -> edema (swelling)
4. **Neutrophil recruitment**: margination -> rolling (selectins) -> adhesion (integrins/ICAM) -> transmigration
5. **Phagocytosis and killing**: at infection site
6. **Resolution or chronic inflammation**: depending on outcome`,
        mnemonics: [
          { text: "TLR4 = LPS = Gram-negative = Sepsis trigger", explanation: "TLR4 recognizes LPS from gram-negative bacteria; key initiator of sepsis cascade" },
          { text: "C3b = opsonin, C5a = chemotaxis, C3a/C5a = anaphylatoxins, MAC = lysis", explanation: "Four major complement functions linked to specific components" },
          { text: "CORE for phagocytosis: Chemotaxis, Opsonization, Recogntion/engulfment, Elimination", explanation: "Four-step phagocytosis process" }
        ],
        keyPoints: [
          "TLR4 recognizes LPS (gram-negative); TLR2 recognizes peptidoglycan (gram-positive)",
          "All three complement pathways converge at C3 convertase formation",
          "C3b is the central opsonin; C5a is the strongest chemotactic factor",
          "Respiratory burst: NADPH oxidase generates superoxide -> H2O2 -> HOCl",
          "DAF and CD59 protect host cells from complement; deficiency causes PNH",
          "C1-INH deficiency causes hereditary angioedema"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker Textbook of Microbiology", chapter: "Chapter 5: Complement System", edition: "10th" },
          { book: "Jawetz, Melnick & Adelberg Medical Microbiology", chapter: "Chapter 7-8: Complement, Phagocytosis", edition: "28th" }
        ]
      },
      {
        layer: 3,
        slug: "innate-immunity-layer-3-clinical",
        title: "Innate Immunity - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical conditions resulting from innate immunity defects: complement deficiencies, phagocytic disorders (CGD, LAD, Chediak-Higashi), sepsis pathophysiology, and India-specific infections.",
        contentMd: `# Innate Immunity - Clinical Correlations

## Complement Deficiencies
| Deficiency | Clinical Consequence |
|------------|---------------------|
| C1, C2, C4 (classical) | SLE-like syndrome, recurrent pyogenic infections |
| C3 | Severe recurrent infections (most critical deficiency) |
| C5-C9 (terminal) | Recurrent Neisseria meningitidis/gonorrhoeae infections |
| C1-INH | Hereditary angioedema (recurrent non-pitting edema) |
| Factor H | Atypical hemolytic uremic syndrome (aHUS) |
| DAF + CD59 | Paroxysmal nocturnal hemoglobinuria (PNH) |

### Hereditary Angioedema (C1-INH Deficiency)
- Autosomal dominant; C1-INH fails to regulate C1 and kallikrein
- Recurrent episodes of non-pitting edema (face, larynx, bowel)
- Life-threatening if laryngeal edema occurs
- Treatment: C1-INH concentrate, icatibant (bradykinin antagonist)
- Lab: low C4 (screening), low C1-INH level or function

## Phagocytic Defects

### Chronic Granulomatous Disease (CGD)
- **Defect**: NADPH oxidase mutation (X-linked recessive most common)
- **Cannot produce**: Superoxide -> no respiratory burst
- **Susceptible to**: Catalase-positive organisms (SPACE: Staphylococcus, Pseudomonas, Aspergillus, Candida, E. coli/Serratia)
- **Diagnosis**: Dihydrorhodamine (DHR) flow cytometry or nitroblue tetrazolium (NBT) test
- **NBT test**: Normal neutrophils reduce NBT dye to blue; CGD neutrophils do NOT
- **Treatment**: Prophylactic TMP-SMX + itraconazole; IFN-gamma; bone marrow transplant

### Leukocyte Adhesion Deficiency (LAD)
- **Defect**: CD18 integrin (LAD-I) or selectin ligand (LAD-II)
- **Result**: Neutrophils cannot adhere to endothelium or migrate to tissues
- **Paradox**: Very high WBC count but severe recurrent infections without pus
- **Hallmark**: Delayed umbilical cord separation (>30 days)
- **Diagnosis**: Flow cytometry showing absent CD18

### Chediak-Higashi Syndrome
- **Defect**: LYST gene mutation; abnormal lysosomal trafficking
- **Features**: Recurrent pyogenic infections, oculocutaneous albinism, peripheral neuropathy
- **Diagnosis**: Giant granules in neutrophils on peripheral smear
- **Triad**: Infections + albinism + giant granules

### Myeloperoxidase Deficiency
- Most common inherited phagocyte defect
- Usually asymptomatic; mild susceptibility to Candida
- Diagnosis: absent MPO staining in neutrophils

## Sepsis and SIRS

### Pathophysiology
1. Gram-negative sepsis: LPS binds TLR4 on macrophages
2. Massive TNF-alpha, IL-1, IL-6 release (cytokine storm)
3. Endothelial activation: vascular leak, vasodilation
4. Coagulation cascade activated: tissue factor -> DIC
5. Multi-organ dysfunction syndrome (MODS)

### SIRS Criteria (2 or more)
- Temperature >38C or <36C
- Heart rate >90/min
- Respiratory rate >20/min or PaCO2 <32 mmHg
- WBC >12,000 or <4,000 or >10% bands

### Sepsis = SIRS + confirmed/suspected infection
### Septic shock = Sepsis + refractory hypotension despite fluid resuscitation

## India-Relevant Clinical Correlations
- **Tuberculosis**: Macrophage granulomas represent innate containment; M. tb blocks phagolysosome fusion
- **Malaria**: TNF-alpha levels correlate with severity of P. falciparum malaria
- **Dengue**: Secondary infection may trigger excessive complement activation and cytokine storm
- **Kala-azar (visceral leishmaniasis)**: Leishmania survives inside macrophages by inhibiting phagolysosome formation

> **Clinical Pearl**: The NBT test is being replaced by DHR flow cytometry for CGD diagnosis due to better sensitivity and ability to detect carrier status.`,
        mnemonics: [
          { text: "SPACE organisms in CGD", explanation: "Staphylococcus, Pseudomonas, Aspergillus, Candida (Serratia), E. coli - all catalase-positive" },
          { text: "C5-C9 gone = Neisseria prone", explanation: "Terminal complement deficiency leads to recurrent Neisseria infections" },
          { text: "LAD = Lots of cells, Absent at site, Delayed cord separation", explanation: "High WBC but no pus; delayed umbilical cord fall (>30 days)" }
        ],
        keyPoints: [
          "CGD: NADPH oxidase defect, catalase-positive organisms (SPACE), NBT/DHR test",
          "LAD: CD18 deficiency, high WBC with no pus, delayed cord separation",
          "C5-C9 deficiency: recurrent Neisseria meningitidis - vaccinate",
          "C1-INH deficiency: hereditary angioedema, low C4 screening",
          "Sepsis = SIRS + infection; cytokine storm from TNF-alpha excess",
          "Chediak-Higashi: giant granules + albinism + infections"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker Textbook of Microbiology", chapter: "Chapter 5: Immunodeficiency", edition: "10th" },
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 6: Immune Deficiency", edition: "10th" }
        ]
      },
      {
        layer: 4,
        slug: "innate-immunity-layer-4-exam-prep",
        title: "Innate Immunity - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield comparison tables, one-liners, and previous year themes for complement deficiencies, phagocytic defects, and TLR functions.",
        contentMd: `# Innate Immunity - Exam High Yield

## Innate vs Adaptive Immunity
| Feature | Innate | Adaptive |
|---------|--------|----------|
| Specificity | Non-specific (PAMPs) | Highly specific (antigens) |
| Speed | Immediate (hours) | Delayed (days to weeks) |
| Memory | No | Yes (faster on re-exposure) |
| Receptors | TLRs, NLRs, mannose receptors | TCR, BCR (immunoglobulins) |
| Cells | Neutrophils, macrophages, NK, DCs | T cells, B cells |
| Humoral | Complement, cytokines | Antibodies |

## TLR Quick Reference
| TLR | Ligand | Clinical Significance |
|-----|--------|----------------------|
| TLR-2 | Gram(+) peptidoglycan | Staphylococcal infections |
| TLR-4 | Gram(-) LPS | Sepsis, septic shock |
| TLR-5 | Flagellin | Salmonella recognition |
| TLR-9 | CpG DNA | Used in vaccine adjuvants |

## Complement One-Liners
- **C3**: Most abundant complement protein; central to all pathways
- **C5a**: Strongest chemotactic factor for neutrophils
- **C3b**: Major opsonin
- **C3a, C5a**: Anaphylatoxins (mast cell degranulation, vascular leak)
- **MAC (C5b-9)**: Pore formation -> osmotic lysis
- **C1-INH deficiency**: Hereditary angioedema (screen with C4 levels)
- **DAF/CD59 deficiency**: PNH (complement-mediated RBC lysis)

## Phagocytic Defect Summary
| Disorder | Defect | Organisms | Diagnosis | Key Feature |
|----------|--------|-----------|-----------|-------------|
| CGD | NADPH oxidase | SPACE (catalase+) | NBT/DHR test | Granuloma formation |
| LAD-I | CD18 integrin | Bacteria | Flow cytometry | No pus, delayed cord |
| Chediak-Higashi | LYST gene | Pyogenic | Giant granules | Albinism |
| MPO deficiency | Myeloperoxidase | Candida | MPO stain | Usually asymptomatic |

## High-Yield Previous Year Themes
- NBT test: what it diagnoses and mechanism
- Complement pathway that does NOT need antibodies (alternative)
- Anaphylatoxins: C3a and C5a
- Most common cause of hereditary angioedema
- PNH: complement attack on own RBCs (absent DAF/CD59)
- Sepsis pathophysiology: LPS -> TLR4 -> TNF-alpha -> shock
- NK cell killing mechanism: perforin-granzyme

## Common MCQ Traps
- Classical pathway needs antibody (IgG or IgM); alternative does NOT
- IgM is more efficient at activating classical pathway than IgG (single IgM vs multiple IgG)
- C3 deficiency is the most severe complement deficiency (not C5-9)
- NBT test: NORMAL neutrophils turn BLUE; CGD neutrophils stay COLORLESS
- LAD has HIGH WBC count, NOT low (cells are in blood, not in tissues)`,
        mnemonics: [
          { text: "NBT = Normal Blue Transformation; CGD = Colorless, Granulomas Develop", explanation: "NBT test interpretation and CGD hallmark" },
          { text: "Classical needs Class (antibody IgG/IgM); Alternative is Alone (no antibody)", explanation: "Key difference between complement pathways" },
          { text: "PNH = Protection Not Here (no DAF, no CD59)", explanation: "PNH results from loss of GPI-anchored complement regulators on RBCs" }
        ],
        keyPoints: [
          "C3 is the most abundant and most critical complement protein",
          "Alternative pathway = antibody-independent complement activation",
          "NBT: normal = blue, CGD = colorless (no superoxide produced)",
          "LAD: high WBC but no pus formation (migration defect)",
          "IgM activates classical pathway more efficiently than IgG",
          "C4 level is the screening test for C1-INH deficiency"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker Textbook of Microbiology", chapter: "Chapter 5: Quick Review", edition: "10th" },
          { book: "Jawetz, Melnick & Adelberg Medical Microbiology", chapter: "Chapter 7-8: Review", edition: "28th" }
        ]
      },
      {
        layer: 5,
        slug: "innate-immunity-layer-5-active-recall",
        title: "Innate Immunity - Active Recall",
        estimatedMinutes: 10,
        summary: "Self-test flashcard Q&A for rapid revision of innate immunity concepts, complement, phagocytosis, and clinical defects.",
        contentMd: `# Innate Immunity - Active Recall

**Q1:** What are the 3 defining features of innate immunity?
> Immediate response, non-specific recognition, no immunological memory

**Q2:** Name the 3 complement activation pathways and what triggers each.
> Classical (IgG/IgM-antigen complexes), Alternative (LPS, spontaneous C3 hydrolysis), Lectin (MBL binding mannose on pathogens)

**Q3:** What is the function of C3b?
> C3b is the major opsonin - it coats pathogens and enhances phagocytosis by binding to CR1 on phagocytes

**Q4:** What are the anaphylatoxins? What do they do?
> C3a and C5a. They cause mast cell degranulation, histamine release, increased vascular permeability, and smooth muscle contraction

**Q5:** What is MAC and what does it do?
> Membrane Attack Complex (C5b-C6-C7-C8-C9). Forms pores in the target cell membrane causing osmotic lysis

**Q6:** Name the 4 steps of phagocytosis.
> Chemotaxis (toward C5a/IL-8), Opsonization/recognition (C3b/IgG coating), Engulfment (phagosome), Killing (respiratory burst in phagolysosome)

**Q7:** What is the respiratory burst? What enzyme initiates it?
> Oxygen-dependent killing mechanism. NADPH oxidase converts O2 to superoxide. Then SOD makes H2O2. MPO converts H2O2 + Cl- to HOCl (hypochlorous acid, most potent)

**Q8:** What is CGD? How is it diagnosed?
> Chronic Granulomatous Disease: NADPH oxidase deficiency (usually X-linked). Cannot kill catalase-positive organisms (SPACE). Diagnosed by NBT test (no color change) or DHR flow cytometry

**Q9:** A child has recurrent infections with high WBC but no pus. What is the diagnosis?
> Leukocyte Adhesion Deficiency (LAD) - CD18 integrin deficiency. Neutrophils cannot migrate to tissues despite being abundant in blood

**Q10:** Which complement deficiency causes recurrent Neisseria meningitidis?
> C5-C9 (terminal complement/MAC) deficiency. Cannot form MAC to lyse Neisseria. Management: meningococcal vaccination

**Q11:** What causes hereditary angioedema? How do you screen?
> C1-INH (C1 esterase inhibitor) deficiency. Screen with C4 levels (low C4). Episodes of non-pitting edema of face, larynx, bowel

**Q12:** Which TLR recognizes gram-negative LPS? What is the signaling pathway?
> TLR-4 recognizes LPS. Signals via MyD88 adaptor protein -> activates NF-kB -> pro-inflammatory cytokine transcription (TNF-alpha, IL-1, IL-6)`,
        mnemonics: [
          { text: "SPACE for CGD organisms", explanation: "Staphylococcus, Pseudomonas, Aspergillus, Candida/Serratia, E. coli" }
        ],
        keyPoints: [
          "12 recall questions covering innate immunity foundations and clinical defects",
          "Tests complement pathway knowledge, phagocytosis steps, and TLR functions",
          "Covers CGD, LAD, Chediak-Higashi, and complement deficiency clinical features",
          "Reinforces diagnostic tests: NBT, DHR, flow cytometry, C4 screening",
          "Links mechanisms to clinical presentations"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker Textbook of Microbiology", chapter: "Chapter 5", edition: "10th" },
          { book: "Jawetz, Melnick & Adelberg Medical Microbiology", chapter: "Chapter 7-8", edition: "28th" }
        ]
      }
    ]
  }
];
