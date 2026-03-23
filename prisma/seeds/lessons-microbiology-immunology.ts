import type { TopicLessons } from "./content-loader";

export const microbiologyImmunologyLessons: TopicLessons[] = [
  {
    topicCode: "MI-MOD-02-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "adaptive-immunity-layer-1-foundation",
        title: "Adaptive Immunity - Foundation",
        estimatedMinutes: 20,
        summary: "T cells vs B cells, MHC molecules, thymic selection, germinal centers, clonal selection theory, central tolerance.",
        contentMd: `# Adaptive Immunity - Foundation

## Adaptive vs Innate Immunity

### Adaptive Immunity Characteristics
- **Specificity**: Million different specificities from limited genome
- **Memory**: Improved response on re-exposure (anamnestic response)
- **Lag time**: 3-7 days initial response vs hours for innate
- **Cells**: T cells (cell-mediated), B cells (humoral)
- **Long-term protection**: Memory cells persist years to lifetime

## T Cell Development & MHC Restriction

### Thymic Selection (Central Tolerance)
1. **Positive Selection**: TCR recognizes self-MHC + weak peptide signal → cell survives
2. **Negative Selection**: TCR strongly recognizes self-antigen → cell deleted (apoptosis)
3. **Result**: T cells MHC-restricted (only recognize antigen + self-MHC)

### MHC Classes
- **MHC Class I** (all cells): Present intracellular antigen (viral, tumor) to CD8+ CTLs
- **MHC Class II** (antigen-presenting cells): Present extracellular antigen to CD4+ Th cells

### T Cell Subsets
- **CD8+ Cytotoxic T Lymphocytes (CTLs)**: Kill virus-infected, tumor cells
- **CD4+ Th1**: IFN-gamma producer, activate macrophages (intracellular pathogens)
- **CD4+ Th2**: IL-4, IL-5 producer, activate B cells (antibody response)
- **CD4+ Th17**: IL-17 producer, anti-fungal, anti-bacterial
- **Foxp3+ Tregs**: IL-10, TGF-beta, suppress immune response

## B Cell Development & Germinal Centers

### Bone Marrow Development
- **V(D)J recombination**: Random gene segment joining → unique antibody per cell
- **Negative selection**: Autoreactive B cells deleted
- **Result**: Millions of B cells, each with unique antibody specificity

### Germinal Center Reaction (Post-Vaccination)
1. **Clonal expansion**: One B cell → thousands of identical copies
2. **Somatic hypermutation**: Mutation rate 10⁶× normal in Ig genes
3. **Affinity maturation**: High-affinity variants selected (low-affinity → apoptosis)
4. **Class switching**: IgM → IgG, IgA, IgE (based on Th cytokines)
5. **Output**: Plasma cells (antibody factories) + memory B cells

## Clonal Selection Theory
- Each B cell has single Ig specificity (clonal)
- Antigen selects matching clone (explains antibody specificity)
- Selected clone expands, differentiates into plasma and memory cells
- Explains rapid secondary response (memory cells already exist)

## Tolerance Mechanisms

### Central Tolerance (Thymus, Bone Marrow)
- **Thymus**: Deletes self-reactive T cells (negative selection)
- **Bone marrow**: Deletes self-reactive B cells
- **Result**: 95-99% of developing lymphocytes die (normal process)

### Peripheral Tolerance
- **Anergy**: Autoreactive T/B cells become unresponsive
- **Regulatory T cells**: Tregs suppress autoreactive cells (IL-10, TGF-beta)
- **Activation-induced cell death**: Repeated stimulation → apoptosis
- **Immune privileged sites**: Brain, eye (limited immune access)`,
        mnemonics: [
          {
            text: "MHC I = Internal (CD8), MHC II = External/Exogenous (CD4)",
            explanation: "Class I antigen source vs class II"
          },
          {
            text: "Thymic education = Positive (keep) + Negative (delete self-reactive)",
            explanation: "Two-step T cell selection in thymus"
          }
        ],
        keyPoints: [
          "Adaptive immunity: specific, memory-based, 3-7 day lag",
          "T cells: thymic selection ensures MHC restriction",
          "B cells: germinal center reaction produces affinity-matured antibodies",
          "Somatic hypermutation: Ig gene mutation in GC, 10⁶× normal rate",
          "Central tolerance: 95-99% developing lymphocytes deleted (normal)"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Adaptive Immunity", edition: "11th" },
          { book: "Jawetz, Melnick & Adelberg's Medical Microbiology", chapter: "Adaptive Immunity", edition: "28th" }
        ]
      },
      {
        layer: 2,
        slug: "adaptive-immunity-layer-2-mechanism",
        title: "Adaptive Immunity - Mechanism",
        estimatedMinutes: 25,
        summary: "TCR signaling, T helper cell differentiation, B cell activation, germinal center dynamics, class switching.",
        contentMd: `# Adaptive Immunity Mechanisms

## T Cell Receptor (TCR) Signaling

### TCR Structure & Co-receptors
- **Alpha-beta TCR**: Variable regions recognize antigen + MHC peptide
- **CD3 complex**: Transduces signal to nucleus
- **CD4/CD8**: Co-receptors enhance MHC binding
- **CD28**: Co-stimulatory receptor binding B7 (CD80/CD86)

### Signal Transduction (Three Signals)
1. **Signal 1 (TCR-MHC-peptide)**: Lck phosphorylates CD3 chains
2. **Signal 2 (CD28-B7)**: Essential co-stimulation (without it → anergy)
3. **Signal 3 (IL-2 from Th cells)**: Amplifies proliferation

### Downstream Cascade
- ZAP-70 recruitment → MAPK pathway (ERK1/2)
- Calcium influx via IP3 → NFAT dephosphorylation
- NF-κB activation (p50 + RelA dimer)
- IL-2 transcription → clonal expansion

## T Helper Cell Differentiation

### Th1 (IFN-gamma producing)
- **Driver**: IL-12 from dendritic cells + IFN-gamma feedback
- **Master TF**: T-bet (TBX21)
- **Products**: IFN-gamma, IL-2, TNF-alpha
- **Function**: Macrophage activation (upregulates MHC II, activates oxidative burst)
- **Infection**: Intracellular bacteria (TB, Listeria), viruses (intracellular)

### Th2 (IL-4, IL-5 producing)
- **Driver**: IL-4 from basophils, mast cells
- **Master TF**: GATA3
- **Products**: IL-4, IL-5, IL-13, TGF-beta
- **Function**: B cell activation, IgE class switching
- **Infection**: Helminths, parasites, allergies

### Th17 (IL-17 producing)
- **Driver**: IL-6 + TGF-beta (RORγt activation)
- **Master TF**: RORγt
- **Products**: IL-17, IL-17F, IL-22
- **Function**: Neutrophil recruitment (G-CSF), anti-fungal/bacterial
- **Infection**: Candida, Staphylococcus pyogenes

### Tfh (Follicular Helper T cells)
- **Location**: Germinal centers (specialized microenvironment)
- **Surface**: PD-1+, ICOS+, BCL6+
- **Function**: Provide IL-21 to germinal center B cells
- **Result**: IgG class switching, affinity maturation, memory formation

## B Cell Activation & Germinal Center Dynamics

### T-Dependent B Cell Response
1. **B cell BCR** binds antigen (exogenous pathway)
2. **Antigen presentation**: B cell shows MHC II-peptide to Tfh cells
3. **Cognate help**: Tfh provides IL-21, ICOSL costimulation
4. **Result**: B cell activation, proliferation, germinal center formation

### Germinal Center Microenvironment
- **Dark zone**: Centrocytes (memory precursors) undergo somatic hypermutation
- **Light zone**: Follicular dendritic cells (FDCs) present antigen; Tfh provide signals
- **Selection**: High-affinity B cells survive, low-affinity → apoptosis
- **Output**: Plasma cells (immediate) + memory B cells (long-term)

### Class Switching (Isotype Switching)
- **IgM → IgG**: Th1 IFN-gamma signaling
- **IgM → IgA**: Th2 IL-5, TGF-beta (mucosal immunity)
- **IgM → IgE**: Th2 IL-4, IL-13 (allergy, parasites)
- **IgG1 > IgG3 > IgG2 > IgG4**: Complement activation potential

## Regulatory T Cells (Tregs)

### Thymic Tregs (tTregs)
- **Development**: Thymus, selected for high-affinity self-antigen binding
- **Surface**: CD4+CD25+Foxp3+, CTLA-4+, PD-1+
- **Function**: Suppress autoreactive cells, prevent autoimmunity

### Peripheral Tregs (pTregs)
- **Development**: Periphery, from naive CD4+ T cells
- **Trigger**: TGF-beta, IL-10, low IL-2
- **Function**: Suppress excessive inflammation`,
        mnemonics: [
          {
            text: "Th1 = Intracellular bugs, Th2 = External parasites, Th17 = Fungi",
            explanation: "Th subset specialization by pathogen type"
          },
          {
            text: "GC = Dark (mutation) → Light (selection) → Plasma/Memory",
            explanation: "Germinal center structure and function"
          }
        ],
        keyPoints: [
          "TCR signaling: Signal 1 (MHC-peptide), Signal 2 (CD28-B7), Signal 3 (IL-2)",
          "Th1: IL-12 driver, T-bet TF, macrophage activation",
          "Th2: IL-4 driver, GATA3 TF, B cell help + IgE switching",
          "Th17: IL-6/TGF-beta driver, RORγt TF, neutrophil recruitment",
          "Germinal center: dark zone (hypermutation), light zone (selection), plasma/memory output"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Adaptive Mechanisms", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "adaptive-immunity-layer-3-clinical",
        title: "Adaptive Immunity - Clinical Application",
        estimatedMinutes: 30,
        summary: "Primary vs secondary response kinetics, vaccination strategy, India NIS schedule, immune deficiencies.",
        contentMd: `# Clinical Application

## Primary vs Secondary Immune Response

### Primary Response (First Exposure)
- **Lag**: 3-7 days before antibodies detected
- **Antibody type**: IgM predominates initially, then IgG emerges (week 2-3)
- **Peak titer**: Low (10⁴-10⁵), drops over weeks
- **Duration**: IgM disappears (days-weeks), IgG persists (months-years)
- **Affinity**: Moderate (before germinal center selection)

### Secondary Response (Re-exposure, e.g., Booster)
- **Lag**: 1-3 days (memory cells rapidly activated)
- **Antibody type**: IgG predominates immediately (no IgM phase)
- **Peak titer**: High (10⁶-10⁸, 100-1000x primary)
- **Duration**: Persists months-years (long-lived plasma cells)
- **Affinity**: High (from previous germinal center selection)
- **Mechanism**: Memory B cells pre-exist; skip germinal center; direct plasma cell differentiation

## Vaccination Strategy

### Types of Vaccines
1. **Live attenuated**: MMR, varicella, rotavirus, BCG (strong Th1 + CTL)
2. **Inactivated**: Polio (IPV), rabies, hepatitis B (primarily Th2, IgG)
3. **Subunit/recombinant**: HPV, hepatitis B (safe, specific)
4. **Toxoid**: Tetanus, diphtheria (neutralizing antibodies)
5. **mRNA**: COVID-19 (MHC I + II presentation, potent)

### Adjuvants
- **Purpose**: Enhance innate activation (TLR agonists)
- **Aluminum salts** (alum): Traditional, Th2-biased
- **Oil-in-water** (MF59, AS01): Enhanced MHC II response
- **TLR ligands** (CpG, MPLA): Enhance Th1

## India National Immunization Schedule (UIP)

### Infancy (0-6 months)
- **Birth**: BCG (TB), OPV dose 0 (polio)
- **6 weeks**: DPT-1, Hepatitis B-1, Rotavirus-1, PCV-1
- **10 weeks**: DPT-2, Hep B-2, Rotavirus-2, PCV-2
- **14 weeks**: DPT-3, Hep B-3, Rotavirus-3, PCV-3
- **9-12 months**: MR (measles-rubella), IPV-1

### Childhood (1-6 years)
- **15-18 months**: DPT booster 1, OPV booster 1, IPV-2
- **4-6 years**: DPT booster 2, OPV booster 2

### Adolescence (16-18 years)
- **Td booster** (tetanus-diphtheria)
- **HPV vaccine** (girls, primary series started at age 9)

### India-Specific Rationale
- **BCG at birth**: TB endemic (1 in 4 Indians infected), prevents severe TB in infants
- **9-month Measles/MR**: Maternal IgG wanes by 9 months; measles highly contagious (Ro 12-18); early vaccination prevents deaths
- **Rotavirus introduction**: Severe diarrhea mortality (especially malnutrition)
- **PCV (Pneumococcal conjugate)**: *Streptococcus pneumoniae* prevalent

## Immunodeficiency & Vaccination

### Severely Immunocompromised (HIV CD4 <200, chemo, transplant)
- **Live vaccines**: CONTRAINDICATED (reversion risk)
- **Inactivated vaccines**: Safe but poor response; administer anyway
- **Booster strategy**: Repeat vaccination after immune recovery

### Malnutrition & Immunization
- **India-specific problem**: Malnutrition impairs immune response
- **MUAC screening**: Mid-upper arm circumference <11.5 cm
- **Vaccination:** Defer non-urgent until nutritional recovery; provide urgent vaccines anyway

## India-Specific Immune Response Patterns

### TB Immunity (Cell-Mediated)
- **BCG priming**: Th1 response (IFN-gamma, IL-2)
- **TB challenge**: Th1 + Th17 + CD8+ CTL required
- **Problem**: TB induces Tregs (immune evasion) → limit Th1
- **Result**: BCG variable efficacy (0-80%) depending on genetics, strains

### Malaria Immunity (Antibody + Cell-Mediated)
- **Antibodies**: Anti-circumsporozoite (CSP), anti-merozoite surface (MSP)
- **Th1 vs Th2 balance**: Th1 for control, Th2 for B cell help
- **Endemic immunity**: Acquired after years of repeated infection (slow)
- **Plasmodium vivax**: Milder than falciparum, but relapse from hypnozoites

### Dengue & ADE (Antibody-Dependent Enhancement)
- **Primary infection**: IgM → IgG (Th2-biased)
- **Secondary infection** (different serotype): IgG from primary binds new serotype but doesn't neutralize
- **ADE**: Antibody-coated virus enters via Fcγ receptor → enhanced replication → dengue hemorrhagic fever
- **Severity**: Secondary dengue mortality 15-20% vs primary 1%`,
        mnemonics: [
          {
            text: "Primary = IgM first, slow; Secondary = IgG fast, high",
            explanation: "Kinetic difference in first vs repeat exposure"
          },
          {
            text: "India 9-month Measles = Early (maternal Ig wanes), High-burden endemic",
            explanation: "Why India differs from USA (12-month standard)"
          }
        ],
        keyPoints: [
          "Secondary response: 1-3 days lag (memory cells), IgG immediate, 100-1000x higher titer",
          "Live vaccines: strong Th1/CTL, durable; inactivated: Th2-biased, waning (boosters needed)",
          "India NIS: BCG birth (TB endemic), 9-month MR (measles burden), booster 15-18 months",
          "BCG variable efficacy (0-80%); TB induces Tregs (immune evasion)",
          "Dengue ADE: secondary infection worse than primary (15-20% mortality)"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Clinical Immunity", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "adaptive-immunity-layer-4-exam",
        title: "Adaptive Immunity - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield immune response kinetics, Th differentiation, vaccination schedules, deficiencies.",
        contentMd: `# Adaptive Immunity - High-Yield Facts

## Immune Response Timeline
| Time | Primary | Secondary |
|------|---------|-----------|
| 0 days | Antigen exposure | Memory cells activated |
| 1-3 days | Innate response peaks | IgG rises rapidly |
| 3-7 days | IgM peaks, IgG emerging | IgG peaks (100-1000x higher) |
| Weeks | IgM wanes, IgG plateau | IgG persists (months-years) |
| Affinity | Moderate | High (GC selected) |

## T Helper Cell Summary
| Subset | Driver | TF | Product | Function |
|--------|--------|-----|---------|----------|
| Th1 | IL-12 | T-bet | IFN-γ | Macrophage activation |
| Th2 | IL-4 | GATA3 | IL-4, IL-5 | B cell help, IgE |
| Th17 | IL-6/TGF-β | RORγt | IL-17 | Neutrophil recruitment |
| Tfh | IL-21 | BCL6 | IL-21 | GC B cell help |
| Treg | TGF-β | Foxp3 | IL-10, TGF-β | Immune suppression |

## India NIS Key Ages
- **Birth**: BCG + OPV (polio start)
- **6-14 weeks**: DPT (primary series), PCV
- **9 months**: **Measles/MR** (India-specific early timing)
- **15-18 months**: DPT booster, boosters (catch primary failures)
- **4-6 years**: School entry boosters
- **16-18 years**: Td booster

## Germinal Center Dynamics
- **Dark zone**: Somatic hypermutation (mutation rate 10⁶× normal)
- **Light zone**: Selection by Tfh, antigen-presenting FDCs
- **Affinity maturation**: 100-1000 fold improvement (Kd)
- **Output**: Plasma cells (days) + memory B cells (years)

## Class Switching Drivers
- **IgG**: Th1 IFN-γ (opsonization, complement)
- **IgA**: Th2 IL-5, TGF-β (mucosal immunity)
- **IgE**: Th2 IL-4, IL-13 (parasites, allergy)
- **IgM**: No switch (default)

## Exam Focus Areas
1. **Response kinetics**: Primary vs secondary differences
2. **Th differentiation**: Driver cytokine → master TF → function
3. **India NIS**: Age, vaccine type, rationale
4. **Germinal center**: Structure, mutation, selection, output
5. **Immune deficiency**: Live vs inactivated vaccine safety`,
        mnemonics: [
          {
            text: "Th1-Intracellular, Th2-External parasites, Th17-Fungi",
            explanation: "Helper T subset specialization"
          },
          {
            text: "India 9mo measles (Ro 12-18, high burden) vs USA 12mo",
            explanation: "India-specific timing for highly contagious disease"
          }
        ],
        keyPoints: [
          "Secondary response: faster (1-3d), higher (100-1000x), longer (months-years)",
          "Affinity maturation: GC selection improves Kd 10-100 fold",
          "Live vaccines: strong Th1, CTL, durable; inactivated: Th2, waning",
          "India NIS: BCG endemic TB, 9mo measles high burden, boosters at 15-18mo",
          "Dengue secondary infection: ADE (15-20% mortality risk)"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Quick Ref", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "adaptive-immunity-layer-5-active-recall",
        title: "Adaptive Immunity - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A flashcards on immune response kinetics, Th differentiation, germinal centers, vaccination.",
        contentMd: `# Active Recall Flashcards

## Q1: Why does the secondary immune response occur faster (1-3 days) than the primary response (3-7 days)?
**A**: Memory B cells from primary response persist. On re-exposure, memory B cells rapidly proliferate WITHOUT requiring germinal center selection (already done). Plasma cell differentiation immediate → rapid IgG surge. No lag for GC maturation = faster response.

## Q2: How does IL-12 drive Th1 differentiation?
**A**: IL-12 from dendritic cells → STAT4 activation → T-bet transcription (master TF for Th1). T-bet promotes IFN-gamma production, IL-12 receptor expression (positive feedback). Result: IFN-gamma-producing Th1 cells; activates macrophages via MHC II upregulation.

## Q3: What is affinity maturation, and how does it occur?
**A**: Process of improving antibody-antigen binding strength (Kd decreases 100-1000 fold). Occurs in germinal center through: 1) somatic hypermutation (dark zone), 2) selection by antigen/Tfh (light zone), 3) low-affinity cells apoptose, high-affinity survive. Results in secondary response having higher-affinity antibodies.

## Q4: Why is BCG vaccine variable in TB protection (0-80% efficacy)?
**A**: Genetic variation in MHC, TLR polymorphisms, prior mycobacterial exposure, M. tuberculosis strain variation. BCG primes Th1/IFN-gamma response but M. tuberculosis induces Tregs (immune evasion). Variable genetics + strain effects = unpredictable protection.

## Q5: Explain antibody-dependent enhancement (ADE) in dengue.
**A**: Primary dengue infection: IgM then IgG (specific serotype). Secondary dengue (different serotype): IgG from primary binds new serotype but doesn't neutralize (sub-neutralizing antibody). Antibody-coated virus enters macrophages via Fcγ receptor (normally inhibitory) → enhanced replication → more severe infection (DHF).

## Q6: How do live vaccines generate stronger immunity than inactivated vaccines?
**A**: Live vaccines replicate in host → strong TLR activation (danger signals), MHC I + II presentation (both Th1 + CTL). Inactivated vaccines: dead antigen, weak TLR, primarily MHC II (Th2, IgG, no CTL). Live = cellular + humoral; inactivated = humoral only.

## Q7: Why is India's Measles vaccine given at 9 months instead of 12 months (USA standard)?
**A**: Maternal IgG (half-life ~30 days) wanes below protective level by 9 months. Measles highly contagious (Ro 12-18); endemic transmission high in India. Early vaccination at 9 months prevents neonatal deaths (high burden). USA: lower burden, can wait until 12 months.

## Q8: What is the role of Tfh (follicular helper T cells) in the germinal center?
**A**: Tfh reside in germinal centers, provide IL-21 + ICOSL costimulation to B cells. Essential for: 1) IgG/IgA class switching, 2) affinity maturation selection, 3) memory B cell generation. Without Tfh, poor GC reaction → weak secondary response.

## Q9: Why do severely immunocompromised patients (HIV CD4 <200) have poor vaccine responses despite vaccination?
**A**: Low CD4+ T cell count means few Th cells available for B cell help. Reduced IFN-gamma (Th1 deficiency) impairs memory cell formation. Live vaccines contraindicated (reversion risk). Inactivated vaccines can be given but expect poor/no response; re-vaccinate post-immune recovery (CD4 >200 × 3mo on ART).

## Q10: How does Th17 response protect against Candida infections?
**A**: Th17 cells produce IL-17 → G-CSF induction → neutrophil recruitment. Neutrophils essential for controlling extracellular fungi (Candida, Aspergillus). IL-17 deficiency or Th17 impairment (biologic anti-IL-17 therapy) → candidiasis risk.`,
        mnemonics: [
          {
            text: "Memory = Fast, Memory = Specific, Memory = Strong",
            explanation: "Why secondary response superior (3 F's)"
          }
        ],
        keyPoints: [
          "Memory B cells skip GC, directly differentiate to plasma → rapid IgG",
          "Affinity maturation: GC dark zone (hypermutation) → light zone (selection)",
          "Th1: IL-12 driver, IFN-gamma product; Th2: IL-4 driver, IL-5/IL-4 product",
          "Live vaccines: strong MHC I + II (Th1 + CTL); inactivated: MHC II only (Th2)",
          "Dengue ADE: sub-neutralizing IgG enhances infection, secondary severe"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Complete Review", edition: "11th" }
        ]
      }
    ]
  }
];
