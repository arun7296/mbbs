import type { TopicLessons } from "./content-loader";

export const microbiologyPart1LessonsContinued: TopicLessons[] = [
  {
    topicCode: "MI-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "normal-flora-pathogenesis-layer-1-foundation",
        title: "Normal Flora & Pathogenesis - Foundation",
        estimatedMinutes: 20,
        summary: "Normal microbial flora of human body by site, colonization vs infection, definitions of virulence and pathogenesis.",
        contentMd: `# Normal Flora & Pathogenesis - Foundation

## Normal Flora by Body Site

### Skin
- **Staphylococcus epidermidis** (most abundant, CoNS)
- **Staphylococcus aureus** (variable colonization)
- **Corynebacterium species** (diphtheroids, non-pathogenic)
- **Propionibacterium acnes** (anaerobic, acne association)
- **Malassezia furfur** (lipophilic yeast, pityriasis versicolor)
- **Environmental organisms** (occasional, transient)

### Oral & Respiratory Tract
- **Streptococcus sanguis, S. mutans** (alpha-hemolytic, produce lactic acid)
- **Streptococcus pneumoniae** (carrier state in 5-50% adults)
- **Neisseria species** (commensals, N. meningitidis colonizes 5-10%)
- **Corynebacterium species**
- **Lactobacillus species** (produce lactic acid)
- **Anaerobes**: Peptostreptococcus, Fusobacterium, Bacteroides (deep pockets)

### Gastrointestinal Tract
- **E. coli** (most abundant gram-negative aerobe)
- **Klebsiella, Proteus** (gram-negative)
- **Bacteroides species** (anaerobes, most numerous in colon >99%)
- **Clostridium species** (anaerobes, spore-formers)
- **Streptococcus faecalis** (Enterococcus)
- **Bifidobacterium, Lactobacillus** (anaerobes, protective)
- **Candida species** (low numbers, overgrow with antibiotics)

### Genitourinary Tract
- **Female vagina**: Lactobacillus species (protective, lactic acid production)
- **Staphylococcus saprophyticus** (female urethra, UTI risk)
- **Corynebacterium, Streptococcus faecalis** (variable)
- **Candida** (low numbers, increase with antibiotics)
- **Male urethra**: Sparse, fewer organisms than female

## Colonization vs Infection

### Colonization
- Organisms present at epithelial surface without invasion
- No tissue damage, no inflammatory response (or minimal local)
- Reversible by normal immunity or antibiotics
- Example: *Staphylococcus aureus* nasal carriage in 30% of population

### Infection
- Organisms multiply in tissues, invade epithelium
- Tissue damage, inflammation, systemic response
- May be self-limited or progressive
- Example: *Staphylococcus aureus* skin abscess (cellulitis, pyogenic)

## Colonization Resistance
- Normal flora occupies ecological niches
- Consumes nutrients (competing inhibition)
- Produces antimicrobial substances: organic acids, bacteriocins
- Prevention: Prevents pathogenic organism establishment
- Disruption: Antibiotics kill flora → *Clostridium difficile* overgrowth

## Virulence & Pathogenesis Basics

### Virulence Factors
- Microbial properties enabling disease causation
- Examples: toxins, adhesins, invasins, antiphagocytic factors
- Not all virulent organisms cause disease (inoculum size, host immunity matter)

### Pathogenesis (Five-Step Model)
1. **Exposure & Colonization**: Organism reaches appropriate epithelium
2. **Penetration/Invasion**: Crosses epithelial barrier
3. **Dissemination/Spread**: Local and/or systemic spread
4. **Damage & Toxin Production**: Tissue destruction
5. **Shedding/Transmission**: Organism released, transmission to new hosts`,
        mnemonics: [
          {
            text: "STAMEN = Skin, Throat, Abdomen, Mouth, External (genitalia), Nose (normal flora sites)",
            explanation: "Major body sites with normal flora"
          },
          {
            text: "Colonization = Present; Infection = Invading + Inflaming",
            explanation: "Key distinction between normal flora and pathogens"
          }
        ],
        keyPoints: [
          "Normal flora: species-specific for each body site",
          "Staphylococcus epidermidis skin (universal), Lactobacillus vagina (protective)",
          "Bacteroides > 99% of colon flora (anaerobic)",
          "Colonization: presence without damage; infection: invasion + inflammation",
          "Colonization resistance: normal flora prevents pathogen establishment"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Normal Flora", edition: "11th" },
          { book: "Jawetz, Melnick & Adelberg's Medical Microbiology", chapter: "Normal Flora", edition: "28th" }
        ]
      },
      {
        layer: 2,
        slug: "normal-flora-pathogenesis-layer-2-mechanism",
        title: "Normal Flora & Pathogenesis - Mechanism",
        estimatedMinutes: 25,
        summary: "Detailed mechanisms of virulence factors, invasion, toxin action, immune evasion, biofilm formation.",
        contentMd: `# Pathogenesis Mechanisms

## Virulence Factors (Categories)

### Adherence Factors
- **Pili/Fimbriae**: Attach to host cell receptors (*E. coli* P pili → uroplakin on uroepithelium)
- **Glycoproteins**: *Streptococcus* M protein binds fibrin
- **Lectins**: Carbohydrate-binding proteins enable attachment
- Result: First step in pathogenesis; without adhesion, infection unlikely

### Invasion Mechanisms
- **Proteases**: Hyaluronidase (tissue matrix), collagenase (collagen breakdown)
- **Type III/IV Secretion Systems**: *Shigella, Salmonella* inject effector proteins into host cells
- **M-protein mediated**: *Streptococcus pyogenes* invasion of respiratory epithelium
- Result: Breach epithelial barrier, establish in deep tissues

### Toxins (Exotoxins)

#### A-B Toxins (Two-Component)
- **B subunit**: Binding to host receptor, translocation into cell
- **A subunit**: Enzymatic activity inside cell
- Examples:
  - **Diphtheria toxin** (*Corynebacterium diphtheriae*): ADP-ribosylates EF-2 → inhibits protein synthesis → cell death
  - **Cholera toxin** (*Vibrio cholerae*): ADP-ribosylates Gs protein → ↑ cAMP → excessive fluid secretion → "rice water" diarrhea
  - **Pertussis toxin** (*Bordetella pertussis*): ADP-ribosylates Gi protein → lymphocytosis, impairs chemotaxis → whoop ing cough

#### Pore-Forming Toxins (Cytolysins)
- **Staphylococcus aureus alpha-toxin**: Forms heptamer pores → cell membrane lysis
- **Streptococcal streptolysin O**: Pore formation, hemolysis
- Result: Osmotic lysis, cell death

### Intracellular Survival Factors
- **Catalase production**: Degrades H2O2 from phagocytes
- **Prevention of phagolysosome fusion**: *Mycobacterium tuberculosis* (waxy cell wall)
- **Escape from phagosome**: *Listeria monocytogenes* (listeriolysin O)
- Result: Chronic infection, immune evasion

### Immune Evasion
- **Capsule**: *Streptococcus pneumoniae* (hyaluronic acid mimics host) → avoids complement
- **Antigenic variation**: *Neisseria gonorrhoeae* pili genes mutate → escape antibodies
- **Molecular mimicry**: *Streptococcus pyogenes* M protein mimics myosin → autoimmunity
- **IgG-mediated evasion**: *Treponema pallidum* IgG coating prevents complement activation

## Translocation & Bacterial Translocation

### Definition
- Passage of live bacteria across intestinal epithelium to lamina propria, mesenteric lymph nodes, or bloodstream

### Triggers
- **Dysbiosis**: Antibiotics disrupt normal flora
- **Increased intestinal permeability**: Severe burns, sepsis, malnutrition
- **Immunodeficiency**: AIDS, chemotherapy, transplant
- **Pathogenic bacteria**: Genes enabling invasion (Salmonella Type III secretion)

### Consequences
- **Bacteremia**: Non-typhi *Salmonella* in sickle cell disease
- **Sepsis**: Endotoxemia, systemic inflammation
- **Organ seeding**: Endocarditis, osteomyelitis risk`,
        mnemonics: [
          {
            text: "AVID Pathogen = Adhesion, Virulence factors, Invasion, Dissemination",
            explanation: "Core mechanisms of pathogenesis"
          },
          {
            text: "Toxins: A-B (ADP-ribosylate), Pore (lyse)",
            explanation: "Two main toxin mechanisms"
          }
        ],
        keyPoints: [
          "Adherence: first step; without it, infection unlikely",
          "Proteases: break down tissue barriers (hyaluronidase, collagenase)",
          "A-B toxins: B binds/translocates, A does enzymatic damage",
          "Cholera toxin: ↑ cAMP → secretory diarrhea",
          "Intracellular survival: catalase, phagolysosome fusion prevention",
          "Molecular mimicry: autoimmune disease risk (*Strep pyogenes* → rheumatic fever)"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Virulence Factors", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "normal-flora-pathogenesis-layer-3-clinical",
        title: "Normal Flora & Pathogenesis - Clinical Application",
        estimatedMinutes: 30,
        summary: "Clinical manifestations, antibiotic-associated infections, India-specific pathogens, clinical examples.",
        contentMd: `# Clinical Application

## Disruption of Normal Flora & Consequences

### Antibiotic-Associated Diarrhea (AAD)
- **Mechanism**: Broad-spectrum antibiotics kill normal anaerobic flora
- **Result**: *Clostridium difficile* (spore-resistant) proliferates
- **Toxins**: C. difficile produces toxins A & B → epithelial necrosis → diarrhea
- **Clinical**: Watery diarrhea, abdominal pain, fever; severe: pseudomembranous colitis
- **Treatment**: Stop antibiotic, oral vancomycin/fidaxomicin, fluid replacement
- **Prevention**: Avoid unnecessary broad-spectrum antibiotics

### Candidiasis After Antibiotics
- **Mechanism**: Lactobacillus killed → *Candida albicans* overgrows
- **Sites**: Vagina (thrush), mouth (oral candidiasis)
- **Clinical**: White plaques, itching, burning
- **Treatment**: Azoles (fluconazole, miconazole)

### Opportunistic Infections in Immunocompromised
- **HIV CD4 <200**: Risk of *Pneumocystis jirovecii*, *Cryptococcus*, CMV
- **Chemotherapy**: *Candida, Aspergillus* risk during neutropenia
- **Transplant**: *Cytomegalovirus*, *Listeria monocytogenes* risk

## Toxin-Mediated Clinical Manifestations

### Diphtheria (Corynebacterium diphtheriae)
- **Toxin**: Inhibits EF-2 → protein synthesis ↓ → cell necrosis
- **Clinical**: Pseudomembrane (throat), respiratory obstruction, neurotoxicity
- **Prevention**: DTaP vaccine (excellent efficacy)
- **Treatment**: Antitoxin (horse serum) + antibiotics (penicillin G, erythromycin)

### Cholera (Vibrio cholerae)
- **Toxin**: ↑ cAMP → enterocyte secretion ↑ → "rice water" diarrhea
- **Clinical**: Severe dehydration, electrolyte loss, hypovolemic shock
- **Prevention**: Oral cholera vaccine (2 doses, imperfect; clean water critical)
- **Treatment**: Oral rehydration solution (life-saving), antibiotics (doxycycline) in severe
- **India**: Endemic in coastal (West Bengal), seasonal (monsoon)

### Tetanus (Clostridium tetani)
- **Toxin (tetanospasmin)**: Blocks GABA/glycine release → unopposed motor neuron firing
- **Clinical**: "Lock-jaw" (masseter spasm), "risus sardonicus" (facial grimace), opisthotonus (arched back), autonomic instability
- **Prevention**: DTaP vaccine (3 primary + 2 boosters = lifelong immunity)
- **Treatment**: Supportive care (airway, mechanical ventilation), tetanus immunoglobulin
- **India**: Still endemic in rural areas due to incomplete vaccination coverage

### Pertussis (Bordetella pertussis)
- **Toxin (pertussis toxin)**: Lymphocytosis, impairs chemotaxis
- **Clinical**: Paroxysmal cough followed by inspiratory "whoop", vomiting, ≤100 days course
- **Prevention**: DTaP vaccine
- **Treatment**: Azithromycin (shortens infectious period if early), supportive

## India-Specific Pathogenic Flora

### Enteric Fever (Salmonella typhi/paratyphi)
- **Route**: Fecal-oral (contaminated water, food)
- **Virulence**: Type III secretion invasion, intracellular survival in macrophages
- **Clinical**: Bacteremia, rose spots, hepatosplenomegaly, delirium
- **Diagnosis**: Blood culture (gold standard), Widal test (low specificity in endemic areas)
- **Treatment**: Fluoroquinolones (ciprofloxacin) if susceptible, cephalosporins if resistant

### Tuberculosis (Mycobacterium tuberculosis)
- **Virulence**: Waxy mycolic acids (prevent immune killing), intracellular survival
- **Clinical**: Chronic pulmonary disease, hemoptysis, cavitary lesions
- **India**: ~1 in 4 Indians infected; 23% of world TB burden
- **Prevention**: BCG vaccine (variable efficacy 0-80%)
- **Treatment**: RIPE (rifampicin, isoniazid, pyrazinamide, ethambutol) 6 months

### Dengue & Chikungunya
- **Virulence**: Complement evasion, interferon antagonism
- **Clinical**: Cyclic fever, myalgia, rash; dengue hemorrhagic fever in secondary infection (ADE)
- **India**: 4 dengue serotypes, seasonal (monsoon)
- **Prevention**: Mosquito control, dengvaxia vaccine (controversial due to ADE risk)

## Biofilm & Device-Associated Infections

### Staphylococcus epidermidis on Prosthetic Devices
- **Mechanism**: Polysaccharide biofilm (PIA/PNAG) → antibiotic resistance ↑ 1000-fold
- **Risk sites**: Prosthetic joints, valves, catheters
- **Clinical**: Indolent infection, fever intermittent, culture delays (slow growth)
- **Treatment**: Device removal + prolonged antibiotics (rifampicin + fluoroquinolone)
- **Prevention**: Prophylactic antibiotics (cefazolin), aseptic technique`,
        mnemonics: [
          {
            text: "AAD = Antibiotics (kill flora) → C. difficile (spore survives) → Diarrhea",
            explanation: "Chain of antibiotic-associated diarrhea causation"
          },
          {
            text: "Diphtheria = EF-2 ↓, Cholera = cAMP ↑, Pertussis = Lymphocytes ↑",
            explanation: "Toxin mechanisms in three serious infections"
          }
        ],
        keyPoints: [
          "AAD: C. difficile toxin A & B → pseudomembranous colitis, treat with vancomycin",
          "Diphtheria: pseudomembrane, neurotoxicity; antitoxin + penicillin cure",
          "Cholera: secretory diarrhea (rice water), ORS life-saving, endemic India coastal",
          "Tetanus: lock-jaw, opisthotonus; vaccine preventable, endemic rural India",
          "Enteric fever: invasive Salmonella, blood culture diagnostic, endemic India"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Clinical Pathogenesis", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "normal-flora-pathogenesis-layer-4-exam",
        title: "Normal Flora & Pathogenesis - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts on virulence factors, toxins, clinical manifestations, antibiotic-associated infections.",
        contentMd: `# Pathogenesis & Virulence - High-Yield Facts

## Virulence Factor Categories (PAVED)
| Category | Function | Example |
|----------|----------|---------|
| **Penetration** | Adhesion, invasion | Pili, proteases, Type III secretion |
| **Avoidance** | Immune evasion | Capsule, antigenic variation |
| **Virulence toxins** | Tissue damage | A-B toxins, pore-formers |
| **Escape** | Intracellular survival | Catalase, lysozyme resistance |
| **Dissemination** | Spread | Motility, invasins |

## Normal Flora by Site
- **Skin**: Staph epi, S. aureus, Corynebacterium
- **Mouth**: Alpha-streptococci (S. mutans, S. pneumoniae)
- **GI**: E. coli (aerobic), Bacteroides (anaerobic >99%)
- **Vagina**: Lactobacillus (protective, lactic acid)
- **Urethra**: Staph saprophyticus (female UTI risk)

## Key Toxins & Mechanisms
| Organism | Toxin | Mechanism | Result |
|----------|-------|-----------|--------|
| **C. diphtheriae** | Diphtheria | ↓ EF-2 → ↓ protein | Pseudomembrane |
| **V. cholerae** | Cholera | ↑ cAMP | Secretory diarrhea |
| **B. pertussis** | Pertussis | Lymphocytosis | Whooping cough |
| **S. aureus** | Alpha-toxin | Pore formation | Cell lysis |
| **C. tetani** | Tetanospasmin | ↓ GABA/glycine | Lock-jaw |

## AAD (Antibiotic-Associated Diarrhea) Chain
1. Broad-spectrum antibiotics (especially cephalosporins) → kill normal flora
2. Anaerobes (Bacteroides, Bifidobacterium) suppressed preferentially
3. C. difficile spores germinate (resistant to antibiotics)
4. Toxins A & B → epithelial necrosis
5. Diarrhea (mild-severe), pseudomembranous colitis in severe cases

## India-Endemic Toxigenic Organisms
- **Vibrio cholerae O1/O139**: Monsoon endemic, coastal, rice water stools
- **Clostridium tetani**: Rural endemic, "lock-jaw" pathognomonic
- **Salmonella typhi**: Enteric fever, blood culture gold standard
- **Mycobacterium tuberculosis**: 23% world burden, intracellular survival

## Exam Question Patterns
1. **Virulence factor identification**: Which organ damage mechanism?
2. **Toxin classification**: A-B vs pore-former?
3. **Clinical manifestation**: Toxin → symptom connection?
4. **Normal flora disruption**: Which antibiotic → which opportunist?
5. **India-specific**: Seasonal, endemic pattern recognition`,
        mnemonics: [
          {
            text: "Cholera = cAMP ↑ = Secretion ↑ = Stools",
            explanation: "Cholera toxin mechanism → symptom chain"
          },
          {
            text: "AAD = Antibiotics kill anaerobes = C. difficile blooms",
            explanation: "Why C. difficile thrives after antibiotics"
          }
        ],
        keyPoints: [
          "Virulence: adherence → invasion → toxin production → dissemination",
          "Cholera toxin: cAMP-mediated secretory diarrhea (rice water, isotonic, not osmotic)",
          "AAD: C. difficile toxin A & B after broad-spectrum (especially 3rd gen cephalosporins)",
          "Tetanus: tetanospasmin blocks inhibitory neurotransmitters (GABA/glycine)",
          "India endemic: Cholera (coastal, monsoon), Tetanus (rural), TB (nationwide)"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Quick Ref", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "normal-flora-pathogenesis-layer-5-active-recall",
        title: "Normal Flora & Pathogenesis - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A on normal flora, virulence mechanisms, toxins, and clinical presentations.",
        contentMd: `# Active Recall Flashcards

## Q1: What are the main normal flora organisms of the human vagina, and what is their protective function?
**A**: Lactobacillus species (especially L. crispatus, L. gasseri) dominant in healthy vagina. Produce lactic acid (low pH 3.8-4.5) inhibiting overgrowth of pathogens (Candida, E. coli, Gardnerella). Antibiotic disruption allows Candida overgrowth (vaginal thrush).

## Q2: How does Cholera toxin cause "rice water" diarrhea?
**A**: Cholera toxin (A-B toxin) ADP-ribosylates Gs protein → persistent ↑ cAMP in enterocytes → sustained fluid secretion into lumen. Stools isotonic (not hyperosmolar), clear, electrolyte-rich, resembling rice water. Massive dehydration results (20-40 L/day possible).

## Q3: Why is Clostridium difficile associated with antibiotic use?
**A**: C. difficile spores resistant to most antibiotics. Broad-spectrum antibiotics (especially 3rd generation cephalosporins, fluoroquinolones) kill normal anaerobic flora (Bacteroides, Bifidobacterium) but not C. difficile spores. Spores germinate, vegetative form produces toxins A & B → epithelial damage.

## Q4: Explain molecular mimicry using Streptococcus pyogenes as an example.
**A**: S. pyogenes M protein (surface) structurally resembles human cardiac myosin, tropomyosin. Immune system generates antibodies to M protein that cross-react with myosin → autoimmune damage to heart (acute rheumatic fever). Can also trigger post-streptococcal glomerulonephritis.

## Q5: What is the difference between adhesins and invasins in virulence?
**A**: **Adhesins** (pili, glycoproteins): enable attachment to host epithelium (necessary first step). **Invasins** (proteases, Type III secretion): breach epithelial barrier and enable intracellular entry. Both required for established infection; adhesion alone = colonization.

## Q6: How does Mycobacterium tuberculosis survive inside macrophages?
**A**: Waxy mycolic acids in cell wall prevent phagolysosome fusion. Maintains phagosome (does NOT fuse with lysosome) → escapes hydrolytic enzymes. Intracellular location also protects from antibody recognition. Produces catalase (destroys H2O2). Results in chronic infection (months-years).

## Q7: What is the mechanism of tetanus, and why is vaccination so effective?
**A**: Clostridium tetani produces tetanospasmin (neurotoxin) blocking GABA and glycine release → unopposed motor neuron activity → spasticity (lock-jaw). Vaccination (toxoid) generates neutralizing antibodies preventing toxin action. One primary series + 2 boosters = lifelong immunity (rare for vaccine).

## Q8: How do biofilms confer antibiotic resistance?
**A**: Biofilm matrix (polysaccharides) creates diffusion barrier → antibiotic penetration reduced. Slow-growing/stationary phase bacteria less metabolically active (reduced drug target expression). Produces alkaline environment locally → beta-lactam/aminoglycoside resistance. Result: 100-1000x higher antibiotic concentrations needed.

## Q9: Distinguish between vegetative cells and spores in terms of virulence factor activity.
**A**: **Vegetative cells**: Active metabolism, produce toxins, motile, invasive. **Spores**: dormant, minimal metabolism, NO toxin production, resistant to stress. In anaerobic (low oxygen) environment, C. difficile spores germinate to vegetative form (capable of toxin production).

## Q10: What is the role of colonization resistance, and how do antibiotics disrupt it?
**A**: Normal flora occupies epithelial niches, consumes nutrients (competitive inhibition), produces antimicrobials (bacteriocins, organic acids) → prevents pathogen establishment. Antibiotics kill normal flora → ecological void → pathogenic organism (e.g., C. difficile, Candida) overgrows unopposed.`,
        mnemonics: [
          {
            text: "Patho = Adhere → Invade → Damage → Shed",
            explanation: "Five-step pathogenesis model"
          }
        ],
        keyPoints: [
          "Normal flora: species-specific; disruption → opportunistic infection",
          "Cholera toxin: cAMP-mediated secretory diarrhea (isotonic, 20-40 L/day possible)",
          "C. difficile: spore-resistant; blooms after broad-spectrum antibiotics",
          "Molecular mimicry: cross-reactive antibodies cause autoimmune disease",
          "Intracellular survival: low water, catalase, phagolysosome prevention (TB model)"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Complete Review", edition: "11th" }
        ]
      }
    ]
  }
];
