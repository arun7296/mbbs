import type { TopicLessons } from "./content-loader";

export const microbiologyImmunologyLessonsPart2: TopicLessons[] = [
  {
    topicCode: "MI-MOD-02-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "hypersensitivity-reactions-layer-1-foundation",
        title: "Hypersensitivity Reactions - Foundation",
        estimatedMinutes: 20,
        summary: "Classification of Type I-IV hypersensitivity, mechanisms, timing, clinical examples, India context.",
        contentMd: `# Hypersensitivity Reactions - Foundation

## Definition
- **Hypersensitivity**: Excessive immune response to harmless or low-dose antigen
- **Differs from**: Immunity (appropriate response to pathogen)
- **Result**: Immune-mediated tissue damage
- **Gell & Coombs classification**: Types I (immediate), II (cytotoxic), III (immune complex), IV (delayed)

## Type I Hypersensitivity (Immediate, IgE-Mediated)

### Mechanism (Two-Phase)
1. **Sensitization** (first exposure): Antigen → Th2 response → IgE production
2. **IgE binding**: Mast cells/basophils express high-affinity FcεRI
3. **Re-exposure**: Antigen cross-links IgE on mast cells → degranulation
4. **Immediate release**: Histamine, tryptase, leukotrienes (minutes)

### Timeline
- **Immediate phase**: Minutes (histamine-mediated)
- **Late phase**: 4-12 hours (leukotriene, prostaglandin-mediated)

### Clinical Manifestations
- **Local**: Urticaria (wheals, itching), angioedema, rhinitis, conjunctivitis
- **Respiratory**: Bronchospasm, wheezing, laryngeal edema
- **GI**: Vomiting, diarrhea, abdominal cramps
- **Systemic**: Anaphylaxis (cardiovascular collapse, death within minutes)

### Common Allergens
- **Foods**: Peanuts, shellfish, milk, eggs (IgE-mediated)
- **Drugs**: Penicillin (IgE-mediated), NSAIDs (pseudoallergy)
- **Venom**: Bee, wasp stings
- **Pollen**: Seasonal rhinitis
- **Environmental**: Dust mites, pet dander, latex

## Type II Hypersensitivity (Cytotoxic, IgG/IgM-Mediated)

### Mechanism
- IgG/IgM bind to cell-surface or tissue-bound antigens
- **Result**: Antibody-dependent cellular cytotoxicity (ADCC) or complement activation

### Clinical Examples
- **Hemolytic transfusion reaction**: ABO incompatibility → RBC lysis
- **Hemolytic disease newborn**: Rh incompatibility, maternal IgG crosses placenta
- **Drug-induced hemolytic anemia**: Penicillin hapten + antibody → RBC destruction
- **Goodpasture syndrome**: Anti-basement membrane antibodies → pulmonary hemorrhage
- **Graves' disease**: TSH receptor antibodies → thyroid stimulation (autoimmunity)

## Type III Hypersensitivity (Immune Complex, IgG/IgM-Mediated)

### Mechanism
- Antigen-antibody complexes deposit in tissues
- **Size matters**: Large complexes cleared; small complexes (antigen excess) deposit
- **Result**: Complement activation → inflammation → tissue damage

### Clinical Examples
- **Serum sickness**: Foreign antigen (drug, vaccine) + IgG complex → fever, rash, arthritis
- **Post-infectious glomerulonephritis**: *Streptococcus pyogenes* antigen + IgG complex → GN
- **Arthus reaction**: Localized antigen + IgG complex → local vasculitis
- **SLE**: Auto-antigen + IgG complex deposition → glomerulonephritis, vasculitis

## Type IV Hypersensitivity (Delayed, Cell-Mediated)

### Mechanism
- **CD8+ T cells**: Direct cytotoxicity (virus-infected, tumor cells)
- **CD4+ T cells**: Th1 cells produce IFN-gamma → macrophage activation
- **Kinetics**: 24-72 hours (memory T cells need time to migrate and respond)

### Clinical Examples
- **Contact dermatitis**: Hapten (urushiol oil poison ivy) → Th1 response → delayed rash
- **Tuberculin skin test (PPD)**: *Mycobacterium tuberculosis* antigen → Th1 infiltrate (48-72h)
- **Organ rejection**: Allogeneic MHC → CD8+ CTL cytotoxicity
- **Graft-versus-host disease (GVHD)**: Donor T cells attack host tissue`,
        mnemonics: [
          {
            text: "Type I = IgE (Immediate), II = IgG/IgM (Cytotoxic), III = Immune Complex, IV = T cells (Delayed)",
            explanation: "Gell-Coombs classification by mechanism and Ig type"
          },
          {
            text: "I=Minutes, IV=Hours to Days",
            explanation: "IgE immediate vs T cell delayed timing"
          }
        ],
        keyPoints: [
          "Type I: IgE-mast cell degranulation; immediate (minutes), anaphylaxis risk",
          "Type II: IgG/IgM cytotoxicity; ADCC or complement lysis",
          "Type III: Immune complex deposition; glomerulonephritis, vasculitis",
          "Type IV: T cell-mediated; delayed (24-72h), contact dermatitis, TB test",
          "Small immune complexes (antigen excess) deposit; large complexes cleared"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Hypersensitivity", edition: "11th" },
          { book: "Jawetz, Melnick & Adelberg's Medical Microbiology", chapter: "Immune Response", edition: "28th" }
        ]
      },
      {
        layer: 2,
        slug: "hypersensitivity-reactions-layer-2-mechanism",
        title: "Hypersensitivity Reactions - Mechanism",
        estimatedMinutes: 25,
        summary: "Detailed mechanisms of each hypersensitivity type, mediator actions, immune complex formation and deposition.",
        contentMd: `# Hypersensitivity Mechanisms

## Type I Detailed Mechanism

### Mast Cell Degranulation
1. **Antigen cross-links IgE** on FcεRI (high-affinity receptor)
2. **Src family kinase activation**: Lyn, Syk phosphorylate ITAM domains
3. **IP3 generation** → calcium influx
4. **Granule exocytosis**: Release of preformed mediators

### Mediators Released

#### Preformed (Minutes)
- **Histamine**: Vasodilation (H1 receptor), increased vascular permeability → edema
- **Tryptase**: Serine protease, measure post-reaction
- **Heparin**: Anticoagulant, stabilizes vessel integrity
- **Leukotrienes** (C4, D4, E4): Bronchial constriction, mucus secretion

#### De Novo Synthesized (Hours)
- **Prostaglandins** (PGD2): Vasodilation, platelet aggregation
- **Leukotrienes**: Continued bronchospasm, vascular leak
- **Cytokines** (TNF-alpha, IL-4): Amplify inflammation

### Anaphylactic Shock Cascade
1. **Massive mast cell degranulation** → histamine surge
2. **Vasodilation** → hypotension, ↓ perfusion pressure
3. **Vascular leak** → hemoconcentration, shock
4. **Bronchospasm** → airway compromise
5. **Cardiac effects**: Negative inotropic effect

## Type II Detailed Mechanism

### ADCC (Antibody-Dependent Cellular Cytotoxicity)
1. **IgG binds antigen** on target cell surface (e.g., RBC)
2. **Fcγ receptor** on NK cells, macrophages, neutrophils recognize Fc
3. **Cell-cell contact** → target cell lysis (perforin-granzyme pathway)

### Complement Activation
1. **IgG/IgM + antigen complex** binds C1q
2. **Classical pathway** → C3b cascade → membrane attack complex (C5b-9)
3. **Result**: Cell membrane lysis

## Type III Detailed Mechanism

### Immune Complex Formation
- **Antigen-antibody ratio matters**:
  - Antigen excess: Small complexes (do NOT precipitate) → deposit in tissues
  - Balanced: Large lattice complexes → precipitate, cleared by CR1
  - Antibody excess: Small complexes → cleared

### Deposition Sites
1. **Capillary endothelium**: Highest pressure areas
2. **Glomerular basement membrane**: Kidney (most common)
3. **Joint synovium**: Arthritis
4. **Skin vasculature**: Rashes, vasculitis

### Inflammation at Deposition Sites
1. **Complement activation** (C3, C5) → anaphylatoxins
2. **Neutrophil recruitment** → degranulation, oxidative burst
3. **Tissue damage** from immune cells, not pathogen

## Type IV Detailed Mechanism

### Delayed-Type Hypersensitivity (DTH)
1. **Antigen presentation** by dendritic cells (MHC II) to CD4+ T cells
2. **Th1 differentiation**: IL-12 → T-bet → IFN-gamma production
3. **Migration**: Sensitized T cells reach antigen site (24-72 hours)
4. **Local activation**: IFN-gamma → macrophage activation → granuloma formation
5. **Result**: Induration (not exudation like Type I)

### Contact Dermatitis Example
1. **Sensitization**: Hapten (e.g., urushiol) + skin protein → immunogenic
2. **Sensitized T cells** circulate (2 weeks to years)
3. **Re-exposure**: DTH reaction develops at 24-72 hours
4. **Mechanism**: Th1 cytokines → keratinocyte apoptosis, edema`,
        mnemonics: [
          {
            text: "Type I = Histamine (minutes), Type IV = T cells (hours-days)",
            explanation: "Mediator differences drive timing"
          },
          {
            text: "Immune complex = Antigen EXCESS = Small = Deposit",
            explanation: "Why small complexes deposit (not large ones)"
          }
        ],
        keyPoints: [
          "Type I: mast cell FcεRI cross-linking → histamine surge → immediate symptoms",
          "Anaphylaxis: massive histamine → vasodilation → shock + bronchospasm",
          "Type II: ADCC (NK via Fcγ) or complement lysis (C5b-9 MAC)",
          "Type III: small antigen-excess complexes deposit; large balanced complexes cleared",
          "Type IV: Th1 IFN-gamma → delayed (24-72h), induration (not exudation)"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Hypersensitivity Mechanisms", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "hypersensitivity-reactions-layer-3-clinical",
        title: "Hypersensitivity Reactions - Clinical Application",
        estimatedMinutes: 30,
        summary: "Clinical management, testing, India-specific presentations, drug allergies, anaphylaxis management.",
        contentMd: `# Clinical Application

## Type I Hypersensitivity Management

### Acute Anaphylaxis
- **First-line**: Epinephrine IM 0.3-0.5 mg of 1:1000 (alpha-1 vasoconstriction + beta-2 bronchodilation)
- **Positioning**: Supine with legs elevated (improve cerebral perfusion)
- **Second-line**: IV access, fluid resuscitation (normal saline)
- **Adjuncts**: Antihistamines (H1: diphenhydramine; H2: ranitidine), corticosteroids (dexamethasone)
- **Observation**: 4-6 hours minimum (biphasic reactions possible)

### Chronic Allergic Disorders
- **Avoidance**: Remove allergen (peanut-free diet, avoid shellfish)
- **H1 antagonists**: Cetirizine, loratadine (non-sedating) vs diphenhydramine (sedating)
- **Nasal corticosteroids**: Fluticasone for rhinitis
- **Leukotriene antagonists**: Montelukast for bronchial asthma
- **Immunotherapy**: Allergen desensitization (slow escalating doses → Treg induction)

## Type II Hypersensitivity Management

### Hemolytic Transfusion Reactions
- **Prevention**: Blood type/cross-match before transfusion
- **Acute management**: Stop transfusion, IV fluids, diuretics (furosemide) for kidney protection
- **RBC transfusion**: Use compatible blood (usually O negative in emergencies)

### Hemolytic Disease Newborn
- **Prevention**: Rh-negative mothers → RhoGAM (anti-D IgG) at 28 weeks + delivery
- **Postnatal**: Phototherapy (bilirubin risk), exchange transfusion if severe

### Drug-Induced Hemolytic Anemia
- **Penicillin**: Bind RBC, IgG forms complex → hemolysis
- **Management**: Stop drug, supportive care, transfusion if severe

## Type III Hypersensitivity Management

### Serum Sickness
- **Prevention**: Avoid foreign serum; use humanized monoclonal antibodies
- **Acute**: NSAIDs for arthritis, antihistamines for rash, corticosteroids for severe
- **Timeline**: Self-limited (days-weeks after antigen cleared)

### Post-Infectious GN
- **Acute streptococcal**: Antibiotics (penicillin), supportive care
- **Prognosis**: Usually self-limited (weeks); serial urinalysis for recovery
- **Monitoring**: Creatinine, proteinuria, hematuria

### SLE Management
- **Mild**: NSAIDs, hydroxychloroquine
- **Moderate-severe**: Corticosteroids, immunosuppressants (mycophenolate, azathioprine)
- **Renal involvement**: Aggressive immunosuppression (cyclophosphamide, mycophenolate)

## Type IV Hypersensitivity Management

### Contact Dermatitis
- **Prevention**: Avoid allergen (gloves if latex, wash urushiol oil)
- **Acute**: Topical corticosteroids (triamcinolone), oral antihistamines
- **Severe**: Systemic corticosteroids (prednisone taper)

### Organ Rejection (Transplant)
- **Prevention**: Calcineurin inhibitors (tacrolimus), mycophenolate, corticosteroids
- **Acute rejection**: Pulse corticosteroids, increase immunosuppression
- **Chronic rejection**: Difficult; increased immunosuppression (risk of infection)

### TB Test (PPD)
- **Mechanism**: Intradermal *M. tuberculosis* antigen → Th1 response (48-72h)
- **Reading**: Induration (NOT erythema) ≥5-15 mm (depends on risk)
- **Positive**: Exposure/infection/BCG vaccination
- **False negative**: Immunocompromised, recent infection (<8 weeks)

## India-Specific Presentations

### Drug Allergies (High in India)
- **Penicillin G IM**: Common (injections common in India)
- **Antitubercular drugs**: Rifampicin (drug fever), INH (hypersensitivity)
- **Antimalarials**: Quinine (Type II hemolysis), chloroquine (rash)
- **Aminoglycosides**: Contact dermatitis (handling without gloves)

### Food Allergies (India Context)
- **Peanuts**: High prevalence (common snack)
- **Shellfish**: Coastal populations
- **Tree nuts**: Growing prevalence
- **Milk proteins**: Common in infants

### Tropical Parasites & Hypersensitivity
- **Filaria**: Late-phase reactions to dying worms
- **Schistosomiasis**: Type III (Schistosome antigen complexes)
- **Hookworm**: Type I (IgE-mediated itch)

### Vaccine Adverse Events
- **Anaphylaxis**: Rare (1-2 per million MMR doses)
- **Serum sickness**: 5-10 days post-vaccination (foreign serum, antitoxins)
- **Guillain-Barré**: 1-2 per million influenza vaccine (Type IV-like autoimmunity)`,
        mnemonics: [
          {
            text: "Anaphylaxis = Epi IM FIRST (not IV), then IV fluids",
            explanation: "IM epinephrine is life-saving first intervention"
          },
          {
            text: "Type III = Small complexes deposit, large cleared",
            explanation: "Immune complex deposition depends on antigen-antibody ratio"
          }
        ],
        keyPoints: [
          "Anaphylaxis: epinephrine IM 0.3-0.5 mg 1:1000 (absolute first step)",
          "Serum sickness: self-limited (days-weeks), NSAIDs, corticosteroids if severe",
          "Post-strep GN: antibiotics + supportive; usually self-limited",
          "TB test (PPD): Th1-mediated, 48-72h induration (not erythema)",
          "India: penicillin allergy common (IM injections), antitubercular drug hypersensitivity"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Clinical Hypersensitivity", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "hypersensitivity-reactions-layer-4-exam",
        title: "Hypersensitivity Reactions - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts on types I-IV, mediators, timing, clinical presentations, management.",
        contentMd: `# Hypersensitivity Reactions - High-Yield Facts

## Type Classification Quick Reference
| Type | Mediator | Timing | Mechanism | Example |
|------|----------|--------|-----------|---------|
| **I** | IgE | Minutes | Mast cell degen. | Anaphylaxis |
| **II** | IgG/IgM | Hours | ADCC, complement | Hemolytic anemia |
| **III** | IgG/IgM | Hours-days | Immune complex | Post-strep GN |
| **IV** | T cells | 24-72h | Th1, macrophage | Contact dermatitis |

## Type I Mediators
- **Preformed**: Histamine (minutes), tryptase, heparin
- **Synthesized**: Prostaglandins, leukotrienes, cytokines (hours)

## Type II Clinical Examples
- Hemolytic transfusion reaction (ABO mismatch)
- Hemolytic disease newborn (Rh incompatibility)
- Drug-induced (penicillin + RBC)
- Graves' disease (TSH-R antibodies)

## Type III Clinical Examples
- Serum sickness (foreign serum, drugs)
- Post-infectious GN (Strep pyogenes)
- SLE (auto-antigen complexes)
- Arthus reaction (local vasculitis)

## Type IV Clinical Examples
- Contact dermatitis (Th1 → 24-72h)
- TB test (PPD, Th1, induration)
- Organ rejection (CD8+ CTL)
- GVHD (donor T cells vs host)

## Anaphylaxis Management Pearls
- **Epinephrine IM**: FIRST and ONLY life-saving drug (IV contraindicated)
- **Dose**: 0.3-0.5 mg 1:1000 in adults
- **Observation**: 4-6 hours (biphasic possible, though rare)
- **Cannot be replaced** by antihistamines or corticosteroids (too slow)

## Timing Mnemonics
- **Type I = Immediate** (minutes, IgE)
- **Type II = Hours** (ADCC/complement)
- **Type III = Hours-days** (immune complex)
- **Type IV = Delayed** (24-72h, T cells)

## India-Specific High-Yield
- **Penicillin allergy**: Very common (IM routes frequent)
- **Serum sickness**: Antitubercular drugs, antivenom
- **Contact dermatitis**: Urushiol (poison ivy), latex gloves
- **Post-strep GN**: High Strep burden in India`,
        mnemonics: [
          {
            text: "I-M = Immediate Minutes, IV = hours-days",
            explanation: "Type 1 = IgE immediate, types 2-4 = delayed"
          },
          {
            text: "Anaphylaxis = Epi IM (not IV, not antihistamines first)",
            explanation: "Epinephrine IM is the ONLY life-saving drug"
          }
        ],
        keyPoints: [
          "Type I: IgE → mast cell → histamine surge → anaphylaxis (minutes)",
          "Type II: IgG/IgM → ADCC or complement → cell lysis (hours)",
          "Type III: immune complexes → glomeruli, joints → GN, arthritis (hours-days)",
          "Type IV: Th1 → induration (NOT exudation) → 24-72h onset",
          "Anaphylaxis: epinephrine IM 0.3-0.5 mg, no delays"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Quick Ref", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "hypersensitivity-reactions-layer-5-active-recall",
        title: "Hypersensitivity Reactions - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards on hypersensitivity types, mechanisms, mediators, management.",
        contentMd: `# Active Recall Flashcards

## Q1: What is the difference between Type I and Type IV hypersensitivity in terms of timing and mechanism?
**A**: Type I: IgE-mediated mast cell degranulation, IMMEDIATE (minutes). Histamine pre-formed. Type IV: T cell-mediated (Th1), DELAYED (24-72 hours). Requires T cell migration and activation. Timing difference is defining feature.

## Q2: Why are small antigen-antibody complexes more likely to deposit in tissues than large lattice complexes?
**A**: Large lattice complexes precipitate out, easily cleared by complement receptor 1 (CR1) on RBCs. Small complexes stay soluble, circulate, deposit in capillaries (especially kidney glomeruli). Antigen excess → small complexes; balanced ratio → large complexes.

## Q3: What mediators are released within minutes vs hours in a Type I hypersensitivity reaction?
**A**: **Minutes** (preformed): histamine, tryptase, heparin. **Hours** (newly synthesized): prostaglandins, leukotrienes, cytokines. Preformed mediators stored in granules; synthesized mediators require de novo synthesis.

## Q4: How does molecular mimicry cause Graves' disease?
**A**: Thyroid peroxidase (TPO) resembles *Streptococcus pyogenes* antigen. Immune response to strep generates IgG to TPO. IgG binds TSH receptor on thyroid → stimulation (NOT blocking). Results in thyroid hormone overproduction (hyperthyroidism).

## Q5: Why is TB skin test (PPD) read at 48-72 hours, and what does induration measure?
**A**: Delayed-type hypersensitivity: Th1 T cells need time to migrate to intradermal site and produce IFN-gamma (activates macrophages). Induration (hardness) = Th1-mediated granuloma; erythema (redness) = vasodilation (non-specific). Induration measures cell-mediated response.

## Q6: What is the mechanism of anaphylactic shock, and why is epinephrine the critical first intervention?
**A**: Massive mast cell degranulation → histamine surge → vasodilation (H1 + H2) → hypotension, ↓ perfusion. Epinephrine: alpha-1 (vasoconstriction, raises BP), beta-2 (bronchodilation). Immediate reversal of shock. Antihistamines/corticosteroids too slow to prevent death.

## Q7: How does calcineurin inhibitor (tacrolimus) prevent organ transplant rejection?
**A**: Tacrolimus inhibits calcineurin → prevents NFAT (nuclear factor activated T cells) dephosphorylation → IL-2 gene transcription blocked. Result: T cell activation suppressed, both Th1 (acute cellular rejection) and Th2 (antibody) responses reduced.

## Q8: What is the pathophysiology of hemolytic disease of the newborn (HDN) due to Rh incompatibility?
**A**: First pregnancy: fetal RBC antigen (Rh+) contacts maternal immune system during delivery. Maternal IgM response (IgM doesn't cross placenta, baby protected). Second Rh+ pregnancy: prior IgG (crosses placenta) binds fetal RBCs → hemolysis → jaundice, anemia. Prevention: maternal RhoGAM (anti-D IgG) at 28 weeks.

## Q9: How does contact dermatitis represent a delayed-type hypersensitivity reaction?
**A**: Hapten (urushiol) binds skin protein → becomes immunogenic. Sensitized CD4+ Th1 cells develop (2 weeks-years). Re-exposure: Th1 cells at skin release IFN-gamma → macrophage activation → keratinocyte apoptosis → dermatitis (24-72h delay allows T cell migration).

## Q10: Why is serum sickness self-limited, while acute hemolytic transfusion reaction is not?
**A**: Serum sickness: foreign antigen cleared by immune system → immune complexes dissolve → resolution. Acute transfusion: incompatible RBCs continuously lysed until RBCs transfused are destroyed → life-threatening if massive transfusion. Difference: single foreign antigen vs continuously transfused incompatible RBCs.`,
        mnemonics: [
          {
            text: "Type I-Immediate-Minutes, Type IV-delayed-days",
            explanation: "Key timing distinction"
          }
        ],
        keyPoints: [
          "Type I: preformed histamine (minutes), synthesized mediators (hours)",
          "Type III: small complexes deposit, large clear (antigen ratio critical)",
          "Type IV: Th1 → IFN-gamma → macrophage activation, 24-72h (not hours)",
          "Anaphylaxis: epinephrine IM immediately (only life-saving drug)",
          "HDN: prevention (RhoGAM), postnatal management (phototherapy, exchange transfusion)"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Complete Review", edition: "11th" }
        ]
      }
    ]
  }
];
