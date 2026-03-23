import type { TopicLessons } from "./content-loader";

export const microbiologyBacteriologyLessons: TopicLessons[] = [
  {
    topicCode: "MI-MOD-03-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "staphylococcus-layer-1-foundation",
        title: "Staphylococcus - Foundation",
        estimatedMinutes: 20,
        summary: "Staphylococcus aureus vs coagulase-negative staphylococci, morphology, habitat, classification, basic epidemiology.",
        contentMd: `# Staphylococcus - Foundation

## Overview
- **Staphylococci**: Gram-positive cocci arranged in **grape-like clusters** (Greek 'staphylos')
- **Catalase-positive**: Distinguishes from Streptococcus
- **Facultative anaerobes**: Survive with or without oxygen
- **Habitat**: Skin, mucous membranes (normal flora)

## Two Main Groups

### Staphylococcus aureus
- **Pathogenic** species
- **Golden-yellow pigmentation** on blood agar (aureus = golden)
- **Coagulase-positive** (KEY identifying feature)
- **Alpha-hemolytic**: Beta toxin causes hemolysis on blood agar
- **DNase-positive**: Differentiates from CoNS
- **Major human pathogen**: Infections across all organ systems

### Coagulase-Negative Staphylococci (CoNS)
- **S. epidermidis**: Most common (skin flora)
- **S. saprophyticus**: Female urethra (UTI risk)
- **S. haemolyticus**: Variable hemolysis
- **Coagulase-negative**: Key distinction from S. aureus
- **Normal skin flora**: Opportunistic in immunocompromised, device-related

## Morphology & Culture

### Microscopy
- **Gram stain**: Gram-positive cocci in grape-like clusters (not chains)
- **Size**: 0.5-1.5 μm diameter
- **Arrangement**: Irregular clusters (vs Streptococcus = chains)

### Culture
- **Growth media**: Routine blood agar, nutrient agar
- **Optimal temperature**: 35-37°C
- **Oxygen requirement**: Facultative anaerobe (grows with/without O₂)
- **Appearance**: S. aureus = golden-yellow; CoNS = white/colorless
- **Pigmentation**: Due to carotenoids; more on aerobic media

### Identification
- **Gram stain**: Positive cocci in clusters
- **Catalase test**: POSITIVE (H₂O₂ + Staph → bubbles of O₂ gas)
- **Coagulase test**: S. aureus positive (converts fibrinogen → fibrin → clotting)
- **DNase**: S. aureus positive; CoNS negative
- **Hemolysis**: S. aureus = beta/alpha; CoNS = variable

## Habitat & Normal Flora

### S. aureus Colonization
- **Nares (anterior)**: 20-30% of population carriers
- **Skin**: Variable colonization
- **Transmission**: Droplet (respiratory), skin contact, contaminated objects
- **Risk factors for colonization**: Health care workers, chronic diseases, recent antibiotics

### CoNS (Especially S. epidermidis)
- **Skin**: Universal normal flora (>99% of people)
- **Ubiquitous**: Environmental contaminant
- **Contamination risk**: Blood cultures, device cultures
- **Pathogenic potential**: Low in healthy, high in immunocompromised

## Clinical Significance Preview

### S. aureus Common Infections
- **Skin/soft tissue**: Impetigo, folliculitis, furunculosis, cellulitis, abscess
- **Respiratory**: Pneumonia, empyema, lung abscess
- **Bloodstream**: Bacteremia, sepsis, endocarditis
- **Bone/joint**: Osteomyelitis, septic arthritis
- **Food poisoning**: Enterotoxin-mediated (staphylococcal gastroenteritis)

### CoNS Clinical Significance
- **Device-related infections**: Prosthetic joints, heart valves, catheters
- **UTI**: S. saprophyticus (female urethra, coagulase-negative, novobiocin-resistant)
- **Bacteremia**: In immunocompromised (often contaminant, but can be pathogenic)
- **Low pathogenic potential**: In healthy individuals

## Antibiotic Resistance (Preview)

### MRSA (Methicillin-Resistant S. aureus)
- **Prevalence**: High in India and globally
- **Mechanism**: mecA gene → altered penicillin-binding protein (PBP2a)
- **Phenotype**: Resistant to all beta-lactams (including cephalosporins)
- **Treatment**: Vancomycin, clindamycin, fluoroquinolones (if susceptible)

### MRCNS (Methicillin-Resistant CoNS)
- **High prevalence**: Especially S. epidermidis on prosthetics
- **Default**: Many CoNS are MRCNS (intrinsic beta-lactam resistance)
- **Treatment**: Often requires vancomycin or rifampicin combinations`,
        mnemonics: [
          {
            text: "Staph = Grape clusters, Coagulase (+) = S. aureus",
            explanation: "Key morphology and biochemistry for identification"
          },
          {
            text: "S. aureus = Golden, S. epidermidis = White (color key)",
            explanation: "Colony morphology helps differentiate species"
          }
        ],
        keyPoints: [
          "Staphylococci: gram-positive clusters (not chains), catalase-positive",
          "S. aureus: coagulase-positive, DNase-positive, golden pigment, pathogenic",
          "CoNS: coagulase-negative, normal skin flora, opportunistic pathogen",
          "S. saprophyticus: female urethra, causes UTI in young women",
          "MRSA prevalence high in India; altered PBP2a causes beta-lactam resistance"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Staphylococcus", edition: "11th" },
          { book: "Jawetz, Melnick & Adelberg's Medical Microbiology", chapter: "Staphylococcus", edition: "28th" }
        ]
      },
      {
        layer: 2,
        slug: "staphylococcus-layer-2-mechanism",
        title: "Staphylococcus - Mechanism",
        estimatedMinutes: 25,
        summary: "Virulence factors, pathogenic mechanisms, toxins, enterotoxins, MRSA resistance mechanism.",
        contentMd: `# Staphylococcus Virulence & Resistance

## S. aureus Virulence Factors

### Surface Factors (Adhesion, Invasion)
- **Protein A**: Binds Fc of IgG (prevents opsonization, complement activation)
- **Fibronectin-binding proteins**: Adhere to host connective tissue
- **Collagen-binding protein**: Tissue invasion
- **Clumping factor**: Binds fibrinogen, fibrin (coagulation evasion)

### Enzymes (Tissue Destruction)
- **Hyaluronidase**: Breaks down tissue matrix (spreading factor)
- **Collagenase**: Degrades collagen
- **Lipase, Protease**: Tissue damage
- **Beta-lactamase**: Enzymatic resistance to penicillin (plasmid-encoded)

### Toxins (Exotoxins)

#### Pore-Forming Toxins (Hemolysins)
- **Alpha-toxin (alpha-hemolysin)**: Heptamer pores → cell lysis, hemolysis
- **Gamma-toxin (bi-component)**: Two-component leukotoxin (kills WBCs)
- **Panton-Valentine leukocidin (PVL)**: Community-associated MRSA (CA-MRSA) risk factor

#### Exfoliative Toxins
- **ETA, ETB**: Serineproteases → cleavage of desmoglein-1
- **Result**: Staphylococcal scalded skin syndrome (SSSS) in infants/immunocompromised
- **Clinical**: Blistering, exfoliation (resembles scalded skin)

#### Enterotoxins (Superantigens)
- **SEA, SEB, SEC**: Toxins produced by *S. aureus* in food
- **Mechanism**: Bypass normal T cell activation → polyclonal T cell activation (superantigen)
- **Result**: Excessive cytokine release → food poisoning
- **Clinical**: 1-6 hour incubation, vomiting, diarrhea (self-limited)

#### Toxic Shock Syndrome Toxin-1 (TSST-1)
- **Superantigen**: Cross-links MHC II + TCR → massive cytokine release
- **Clinical**: Toxic shock syndrome (high fever, rash, shock, multi-organ failure)
- **Risk**: Menstruating women with tampon use (vaginal *S. aureus*), post-surgical wounds

### Biochemical Mechanisms

#### Coagulase
- **Function**: Converts fibrinogen → fibrin clot
- **Mechanism**: Coagulase (bound or free) + prothrombin → thrombin-like activity
- **Result**: Fibrin coating protects from phagocytosis, immune factors

#### Protein A
- **Binds Fc of IgG**: Prevents opsonization
- **Blocks complement**: Interferes with C1q binding (classical pathway)
- **Result**: Immune evasion

## MRSA Resistance Mechanism

### Beta-Lactamase (Penicillinase)
- **Plasmid-encoded** bla gene
- **Hydrolyzes penicillin** β-lactam ring → inactive penicilloic acid
- **Cephalosporin resistance**: Variable (generation-dependent)

### Altered Penicillin-Binding Protein (PBP)
- **mecA gene** (chromsomal): Codes for PBP2a (modified PBP)
- **Mechanism**: PBP2a has low affinity for all beta-lactams (penicillins, cephalosporins, carbapenems)
- **Result**: MRSA resistant to ALL beta-lactams (true multi-resistance)
- **Prevalence in India**: 30-50% of S. aureus isolates

## Other Antibiotic Resistances

### Vancomycin Resistance (Rare)
- **VRSA**: Vancomycin-resistant *S. aureus* (very rare globally)
- **Mechanism**: Altered cell wall precursors (van genes from Enterococcus)

### Linezolid Resistance (Emerging)
- **Mechanism**: Ribosomal methylation (23S rRNA)
- **Clinical**: Treatment failure (linezolid often last resort)

### Fluoroquinolone Resistance (Common in MRSA)
- **Mechanism**: DNA gyrase mutations, efflux pumps
- **Clinical impact**: Limits monotherapy options`,
        mnemonics: [
          {
            text: "Staph virulence = Toxins (alpha, enterotoxin, TSST), Adhesins (Protein A, fibronectin), Enzymes (hyaluronidase)",
            explanation: "Three categories of S. aureus virulence factors"
          },
          {
            text: "MRSA = mecA gene = altered PBP2a = ALL beta-lactams resistant",
            explanation: "Mechanism of methicillin resistance"
          }
        ],
        keyPoints: [
          "Alpha-toxin: pore formation → hemolysis, cell lysis",
          "Enterotoxins: superantigens → polyclonal T cell activation → food poisoning",
          "TSST-1: superantigen → massive cytokine release → toxic shock syndrome",
          "Protein A: binds IgG Fc → immune evasion (blocks opsonization)",
          "MRSA: mecA gene → PBP2a → resistant to ALL beta-lactams"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Staphylococcus Virulence", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "staphylococcus-layer-3-clinical",
        title: "Staphylococcus - Clinical Application",
        estimatedMinutes: 30,
        summary: "Clinical manifestations, diagnosis, treatment, MRSA management, India-specific epidemiology.",
        contentMd: `# Clinical Application

## Diagnosis

### Culture & Identification
- **Specimens**: Blood, wound, sputum, urine, CSF
- **Growth**: 24-48 hours on blood agar
- **Colony appearance**: S. aureus = golden-yellow; CoNS = white
- **Gram stain**: Positive cocci in clusters

### Biochemical Tests
1. **Catalase**: POSITIVE (Staph vs Strep differentiation)
2. **Coagulase**: S. aureus positive (tube/slide coagulase test)
3. **DNase**: S. aureus positive; CoNS negative
4. **Hemolysis**: S. aureus = beta/alpha; CoNS = variable
5. **Mannitol fermentation**: S. aureus ferments (yellow on mannitol salt agar)

### Antibiotic Susceptibility
- **Disk diffusion** (Kirby-Bauer): Determine susceptibility pattern
- **MRSA confirmation**: Oxacillin/cefoxitin resistance
- **Critical tests**: Vancomycin (VRSA screening), linezolid

## Clinical Manifestations

### Skin & Soft Tissue Infections
- **Impetigo**: Superficial, honey-crusted (non-bullous), highly contagious
- **Folliculitis**: Hair follicle infection (boil)
- **Furunculosis**: Larger, deeper (carbuncle = multiple fused boils)
- **Cellulitis**: Spreading inflammation (non-suppurative)
- **Abscess**: Localized pus collection (suppurative)
- **Toxic shock**: Tampon-associated (TSST-1), post-surgical

### Respiratory Infections
- **Pneumonia**: Community-acquired (CA-MRSA with PVL risk)
- **Empyema**: Pus in pleural space (complication of pneumonia)
- **Lung abscess**: Necrotic cavity formation

### Bloodstream & Systemic
- **Bacteremia**: From skin source, high mortality
- **Sepsis**: Systemic inflammatory response (shock, MOF)
- **Endocarditis**: Heart valve vegetation (high mortality)
- **Osteomyelitis**: Bone infection (esp. hematogenous in children)
- **Septic arthritis**: Joint infection (acute, severe pain)

### Food Poisoning (Enterotoxin)
- **Incubation**: 1-6 hours (very rapid)
- **Clinical**: Vomiting, diarrhea, abdominal cramping
- **Duration**: 24-48 hours (self-limited)
- **Source**: Foods at room temperature (custards, ham, cheese)

## Treatment

### Non-MRSA S. aureus
- **Beta-lactams**: Penicillin G (IV) or flucloxacillin (for tissue penetration)
- **Cephalosporins**: 1st generation (cefazolin) for mild, 2nd/3rd gen for severe
- **Alternative**: Clindamycin (if susceptible, good lung penetration)

### MRSA S. aureus
- **First-line**: Vancomycin IV (target trough 15-20 μg/mL)
- **Alternative**: Linezolid (excellent tissue penetration, brain, lung)
- **Another option**: Clindamycin (if susceptible), doxycycline (less severe)
- **Combination**: May add rifampicin (for severe, endocarditis, osteomyelitis)

### Device-Related (S. epidermidis, S. aureus)
- **Removal**: Device removal essential (antibiotics alone insufficient)
- **Antibiotics**: Vancomycin ± rifampicin (prolonged)
- **Duration**: Weeks-months (depends on source control)

## India-Specific Considerations

### MRSA Prevalence
- **Prevalence**: 30-50% in many Indian hospitals (community-acquired increasing)
- **Risk factors**: Health care exposure, antibiotic use history
- **Testing**: Always perform MRSA screening (cefoxitin disk)

### Community-Associated MRSA (CA-MRSA)
- **Risk**: PVL+ CA-MRSA (greater virulence, tissue necrosis)
- **Presentation**: Severe skin infections, necrotizing fasciitis, pneumonia
- **Treatment**: Empiric vancomycin until susceptibilities known

### S. saprophyticus Urinary Tract Infection
- **Population**: Young women (15-40 years)
- **Risk factor**: Coagulase-negative (often overlooked on initial culture)
- **Identification**: Novobiocin-resistant CoNS (distinguishes from S. epidermidis)
- **Treatment**: Trimethoprim-sulfamethoxazole (TMP-SMX)

## Infection Control

### Prevention
- **Hand hygiene**: Key measure (carrier state of healthcare workers)
- **Aseptic technique**: Device insertion, wound dressing
- **Environmental disinfection**: Surface decontamination
- **Decolonization**: Mupirocin nasal (carriers in healthcare settings)

### Outbreak Management
- **Identification**: MRSA screening if outbreak suspected
- **Isolation**: Contact precautions (standard + contact)
- **Source control**: Identify and manage carrier healthcare workers`,
        mnemonics: [
          {
            text: "MSSA = Beta-lactams, MRSA = Vancomycin (first-line)",
            explanation: "Treatment selection based on resistance pattern"
          },
          {
            text: "S. aureus = Golden Coagulase(+) DNase(+), S. epidermidis = White Coagulase(-) DNase(-)",
            explanation: "Key differentiating features"
          }
        ],
        keyPoints: [
          "Coagulase test: defines S. aureus (positive) vs CoNS (negative)",
          "MRSA prevalence 30-50% India; empiric vancomycin recommended",
          "Food poisoning: 1-6h incubation (rapid), self-limited",
          "Toxic shock: TSST-1 or PVL toxin (tampon, post-surgery)",
          "Device infections: removal essential; antibiotics alone insufficient"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Clinical Staphylococcus", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "staphylococcus-layer-4-exam",
        title: "Staphylococcus - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield identification features, toxins, MRSA, antibiotic treatment, India epidemiology.",
        contentMd: `# Staphylococcus - High-Yield Facts

## Identification Quick Reference
| Feature | S. aureus | S. epidermidis |
|---------|-----------|---|
| **Colony color** | Golden-yellow | White/translucent |
| **Coagulase** | POSITIVE | Negative |
| **DNase** | POSITIVE | Negative |
| **Hemolysis** | Beta/alpha | Variable (-)  |
| **Mannitol** | Ferment (yellow) | No ferment (colorless) |
| **Novobiocin** | Susceptible | Resistant (distinguishes S. saprophyticus) |

## Key Virulence Factors
- **Protein A**: IgG Fc binding (immune evasion)
- **Alpha-toxin**: Pore formation, hemolysis
- **Enterotoxins**: Superantigens, food poisoning (1-6h incubation)
- **TSST-1**: Toxic shock syndrome (superantigen, massive cytokine)
- **PVL (Panton-Valentine leukocidin)**: CA-MRSA virulence
- **Coagulase**: Fibrin coating (phagocytosis evasion)

## MRSA Key Points
- **mecA gene**: Codes PBP2a (altered penicillin-binding protein)
- **Resistance**: ALL beta-lactams (penicillins, cephalosporins, carbapenems)
- **Prevalence India**: 30-50% of hospital isolates
- **Treatment**: Vancomycin, linezolid, clindamycin (if susceptible)

## Clinical Manifestations Summary
- **Skin**: Impetigo, furunculosis, cellulitis, abscess
- **Respiratory**: Pneumonia (CA-MRSA severe), empyema
- **Blood**: Bacteremia, sepsis, endocarditis
- **Bone/joint**: Osteomyelitis, septic arthritis
- **Food poisoning**: Rapid incubation (1-6h), self-limited
- **Toxic shock**: Tampon, post-surgical (high mortality)

## Antibiotic Treatment
| Infection | MSSA | MRSA |
|-----------|------|------|
| **Mild skin** | Flucloxacillin | Clindamycin* |
| **Moderate** | Cephalosporin 1st gen | Vancomycin IV |
| **Severe/systemic** | Beta-lactam ± gentamicin | Vancomycin ± rifampicin |
| **Osteomyelitis** | Flucloxacillin | Vancomycin + rifampicin |

*if susceptible

## India-Specific High-Yield
- **MRSA high**: Empiric vancomycin for severe infections
- **CA-MRSA**: PVL+ strains, necrotizing fasciitis risk
- **S. saprophyticus**: Young women UTI, novobiocin-resistant
- **Device infections**: MRCNS common, removal essential`,
        mnemonics: [
          {
            text: "Coagulase = Golden Aureus (S. aureus coagulase-positive)",
            explanation: "Key test for species identification"
          },
          {
            text: "MRSA = All beta-lactams resistant (PBP2a altered)",
            explanation: "Mechanism of multi-drug resistance"
          }
        ],
        keyPoints: [
          "S. aureus: coagulase-positive, golden pigment, DNase-positive",
          "MRSA: mecA gene → PBP2a → resistant to ALL beta-lactams",
          "Toxins: alpha (lysis), enterotoxins (food), TSST-1 (shock), PVL (CA-MRSA)",
          "MRSA treatment: vancomycin (IV), linezolid, ± rifampicin for serious",
          "India: MRSA 30-50% prevalence, empiric vancomycin for severe"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Quick Ref", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "staphylococcus-layer-5-active-recall",
        title: "Staphylococcus - Active Recall",
        estimatedMinutes: 10,
        summary: "Q&A on identification, toxins, virulence, MRSA resistance, clinical presentations.",
        contentMd: `# Active Recall Flashcards

## Q1: What is the key biochemical test that distinguishes S. aureus from coagulase-negative staphylococci?
**A**: Coagulase test (tube or slide). S. aureus produces coagulase enzyme that converts fibrinogen → fibrin clot. Positive = fibrin clot formation (white pellet in tube test). S. epidermidis and other CoNS = negative (no clotting).

## Q2: How does S. aureus alpha-toxin cause hemolysis?
**A**: Alpha-toxin forms heptameric (7) pores in RBC membrane. Osmotic lysis ensues (water influx through pores). Results in hemoglobin release = hemolysis (clear zone on blood agar). Similar mechanism in other cell types (WBCs, epithelial cells).

## Q3: Explain staphylococcal food poisoning - incubation period, mechanism, and why it's so rapid.
**A**: **Incubation**: 1-6 hours (rapid!). **Mechanism**: Enterotoxins (superantigens) produced by *S. aureus* in food pre-formed before ingestion. Bypass normal T cell activation → polyclonal T cell activation → cytokine storm → vomiting, diarrhea. Toxin directly damages GI epithelium. Self-limited (24-48h) because toxin effect, not bacterial infection.

## Q4: What is toxic shock syndrome, and what is its relationship to S. aureus?
**A**: TSS caused by TSST-1 (toxic shock syndrome toxin-1), a superantigen produced by *S. aureus*. Crosses MHC II + TCR → massive polyclonal T cell activation → excessive IL-2, TNF-alpha, IL-1. Result: fever, rash, hypotension, shock, multi-organ failure. Risks: menstruating women (tampon use), post-surgical wounds.

## Q5: How does Protein A help S. aureus evade the immune system?
**A**: Protein A binds to Fc portion of IgG (antibody tail), preventing Fc from binding to phagocyte Fcγ receptors or C1q. Result: Antibody-coated staph cannot be opsonized (tagged for phagocytosis) or activate complement. Immune evasion allowing bacterial survival.

## Q6: Explain the mechanism of MRSA and why it is resistant to ALL beta-lactam antibiotics.
**A**: MRSA carries mecA gene (chromosome) encoding PBP2a (penicillin-binding protein 2a). This altered PBP has low affinity for ALL beta-lactams (penicillins, cephalosporins, carbapenems). While normal PBPs are inhibited, PBP2a continues cell wall synthesis → cell wall integrity maintained → resistance.

## Q7: How would you identify S. saprophyticus in a urinary culture from a young woman?
**A**: Gram-negative cocci in clusters, catalase-positive, coagulase-NEGATIVE (identifies as CoNS), NOVOBIOCIN-RESISTANT (key for S. saprophyticus). This combination = S. saprophyticus (UTI pathogen in females). Most other CoNS are novobiocin-susceptible.

## Q8: What is the difference between staphylococcal scalded skin syndrome (SSSS) and toxic shock syndrome?
**A**: **SSSS**: Exfoliative toxins (ETA, ETB) → cleavage of desmoglein-1 → blistering, exfoliation (resembles scalded skin). Superficial. **TSS**: TSST-1 superantigen → massive T cell activation → systemic inflammation, shock. Deep, systemic, high mortality. Different toxins, different pathophysiology.

## Q9: Why is linezolid useful for S. aureus infections despite being less commonly used?
**A**: Linezolid excellent tissue penetration (bone, lung, CSF). Can achieve therapeutic concentrations in bone/joint (critical for osteomyelitis). Useful when vancomycin CNS penetration inadequate. However, emerging linezolid resistance (23S rRNA methylation) and cost limits routine use. Reserved for serious infections.

## Q10: How does community-associated MRSA (CA-MRSA) differ from health care-associated MRSA (HA-MRSA)?
**A**: **CA-MRSA**: Often PVL+ (Panton-Valentine leukocidin), more virulent, causes necrotizing infections, rapid tissue destruction, sepsis in healthy. **HA-MRSA**: Usually PVL-, lower virulence, healthcare exposure risk, device-related. CA-MRSA emergence threatens community health (necrotizing fasciitis, severe pneumonia).`,
        mnemonics: [
          {
            text: "Coagulase = Golden Aureus, Novobiocin-Resistant = S. saprophyticus",
            explanation: "Key tests for Staph identification"
          }
        ],
        keyPoints: [
          "Coagulase test: S. aureus positive (fibrin clot), CoNS negative",
          "Alpha-toxin: heptameric pores → hemolysis, cell lysis",
          "Enterotoxins: superantigens, food poisoning 1-6h (pre-formed toxin)",
          "TSST-1: superantigen, toxic shock (fever, rash, shock)",
          "MRSA: mecA gene → PBP2a altered → resistant ALL beta-lactams"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Complete Review", edition: "11th" }
        ]
      }
    ]
  }
];
