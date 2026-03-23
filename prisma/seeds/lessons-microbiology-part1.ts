import type { TopicLessons } from "./content-loader";

export const microbiologyPart1Lessons: TopicLessons[] = [
  {
    topicCode: "MI-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "sterilization-disinfection-layer-1-foundation",
        title: "Sterilization & Disinfection - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of sterilization vs disinfection, definitions, classification of methods (physical and chemical), sterilization indicators, basic principles.",
        contentMd: `# Sterilization & Disinfection - Foundation

## Definitions & Concepts
- **Sterilization**: Complete removal or destruction of all microorganisms including spores (absolute, irreversible)
- **Disinfection**: Reduction of pathogenic microorganisms (not spores) to safe levels; reversible with prolonged exposure
- **Antisepsis**: Application of disinfectants to living tissues (skin, mucous membranes)
- **Sanitization**: Reduction of microbial load without complete elimination (public health focus)

## Sterilization Methods: Physical vs Chemical
- **Physical**: Heat (moist/dry), radiation (UV/gamma), filtration - most reliable
- **Chemical**: Gases (ethylene oxide), liquids (glutaraldehyde) - backup methods
- **Physical superior** to chemical due to guaranteed spore elimination

## Key Physical Sterilization Methods
1. **Moist Heat (Autoclaving)**: 121°C, 15 psi, 15-30 min - gold standard (coagulates proteins, denatures DNA)
2. **Dry Heat**: 160-180°C for 1-2 hours - slower but penetrates poorly
3. **Radiation**: UV (surface only, 260 nm), Gamma/Electron beam (deep penetration, used for devices)
4. **Filtration**: 0.22 µm pore size (removes bacteria, not viruses)

## Chemical Sterilization/Disinfection Agents
- **Aldehydes**: Formaldehyde, glutaraldehyde (rapid, sporici dal, irritant)
- **Halogens**: Iodine (Betadine), chlorine (bleach) - oxidative damage
- **Phenolics**: Lysol, hexachlorophene - membrane disruption
- **Surface-active agents**: Quaternary ammonium, biguanides
- **Oxidizing agents**: Hydrogen peroxide, peracetic acid - high-level disinfection

## Sterilization Indicators
- **Physical**: Thermometers, pressure gauges, timers
- **Chemical**: Indicator strips (color change with heat exposure)
- **Biological**: Spore strips (Bacillus subtilis) - most reliable (incubated post-sterilization)`,
        mnemonics: [
          {
            text: "STEAM = Sterilization Through Extreme Autoclaving Moisture",
            explanation: "Moist heat autoclave is gold standard for sterilization"
          },
          {
            text: "Dry-heat = Slow, Harsh; Moist-heat = Fast, Gentle",
            explanation: "Moist heat better for instruments; dry heat for oils, powders"
          }
        ],
        keyPoints: [
          "Sterilization: absolute (all microbes eliminated); disinfection: relative (harmful pathogens reduced)",
          "Moist heat 121°C/15 min gold standard; dry heat 160°C/2h slower, hotter",
          "Spore indicator most reliable validation of sterilization",
          "Chemical agents: aldehydes rapid but irritant, halogens oxidative, phenolics slow",
          "Filtration removes bacteria (0.22 µm) but not viruses; used for heat-labile solutions"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Sterilization & Disinfection", edition: "11th" },
          { book: "Jawetz, Melnick & Adelberg's Medical Microbiology", chapter: "Chapter 2: Sterilization", edition: "28th" }
        ]
      },
      {
        layer: 2,
        slug: "sterilization-disinfection-layer-2-mechanism",
        title: "Sterilization & Disinfection - Mechanism",
        estimatedMinutes: 25,
        summary: "Mechanisms of action for physical and chemical sterilization methods, microbial killing kinetics, resistance mechanisms.",
        contentMd: `# Sterilization Mechanisms

## Heat Sterilization Mechanisms

### Moist Heat (121°C, 15 psi)
1. **Protein denaturation**: Heat → disulfide bond breakage → tertiary structure loss
2. **DNA denaturation**: Double helix separates → loss of genetic information
3. **Membrane lysis**: Lipid bilayer destabilization → cell death
4. **Spore killing**: Unique mechanism - water entering spore → internal pressure rise → coat rupture
5. **Kinetics**: Exponential death curve; D-value (decimal reduction time) ~1-2 min for vegetative cells

### Dry Heat (160-180°C)
- Slower mechanism: oxidative damage accumulates over time
- **Requires higher temperature** (160 vs 121°C) due to slower penetration
- Not for instruments; used for oils, powders, instruments requiring dry conditions
- **D-value**: 10-15 min (much longer than moist heat)

## Chemical Sterilization Mechanisms

### Aldehydes (Formaldehyde, Glutaraldehyde)
- **Cross-linking**: Forms covalent bridges between proteins (lysine residues)
- **DNA damage**: Methylates DNA bases → loss of replication capacity
- **Result**: Rapid sporicidal action (glutaraldehyde effective on spores in <2h)
- **Kinetics**: Not exponential; sigmoidal curve (lag phase, then rapid kill)

### Halogens (Iodine, Chlorine)
- **Mechanism**: Oxidation of amino acids, disruption of disulfide bonds
- **Target**: Cell membrane, proteins, nucleic acids
- **Advantage**: Rapid (minutes)
- **Disadvantage**: Organic matter reduces efficacy (protein interference)

### Phenolics (Lysol)
- **Membrane disruption**: Denatures and precipitates proteins
- **Slow acting** compared to aldehydes
- **Advantage**: Good tissue penetration, antifungal

## Spore Resistance Mechanisms

### Bacterial Spore Structure
- **Spore coat**: Protein, protects inner core
- **Peptidoglycan cortex**: Cross-linked, water-resistant
- **Core**: Extremely low water content (10-30% vs vegetative 80%)
- **Dipicolinic acid complex**: Mg2+ + DPA chelate, stabilizes DNA

### Why Spores Are Resistant
1. **Low water content**: Reduces chemical penetration
2. **Coat protection**: Physical barrier to disinfectants
3. **Dormancy**: Minimal metabolism → slower metabolite uptake
4. **DNA protection**: DPA-Mg2+ shields nucleotides

## Resistance Factors

### Microbial Factors
- **Gram-positive**: Generally more susceptible (no outer membrane)
- **Mycobacteria**: Waxy mycolic acids resist alcohol-based disinfectants
- **Spores**: 100-1000x more resistant than vegetative cells

### Environmental Factors
- **Organic matter**: Reduces efficacy of halogens, aldehydes (binds agents)
- **pH**: Most agents optimal at neutral/alkaline pH
- **Temperature**: Heat enhances chemical efficacy (Q10 = 2-3)
- **Presence of catalase/peroxidase**: Degrades H2O2 (neutralizes oxidizing agents)`,
        mnemonics: [
          {
            text: "Heat = Break bonds (protein denaturation, DNA), Chemical = Cross-link",
            explanation: "Physical methods denature, chemical methods cross-link"
          },
          {
            text: "Spores = Low water = Protected",
            explanation: "Spore resistance due to low water content and coat protection"
          }
        ],
        keyPoints: [
          "Moist heat denatures proteins and DNA; exponential killing kinetics (D-value 1-2 min)",
          "Dry heat slower (D-value 10-15 min) due to poor penetration; requires higher temperatures",
          "Aldehydes: cross-link proteins rapidly; sigmoidal (not exponential) killing curve",
          "Halogens oxidize amino acids; rapid but inhibited by organic matter",
          "Spore resistance: low water content + coat + DPA-Mg2+ complex; 100-1000x more resistant than vegetative"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Sterilization Mechanisms", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "sterilization-disinfection-layer-3-clinical",
        title: "Sterilization & Disinfection - Clinical Application",
        estimatedMinutes: 30,
        summary: "Practical application of sterilization in healthcare, selection of methods for different instruments, contamination control, India-specific protocols.",
        contentMd: `# Clinical Application & Healthcare Sterilization

## Instrument-Specific Sterilization Selection

### Category 1: Critical Items (Direct bloodstream/sterile body cavity)
**Surgical instruments, catheters, implants**
- **Requirement**: Sterilization (not disinfection)
- **Method**: Autoclaving (moist heat) 121°C, 15 min
- **Alternative**: Dry heat if instruments damaged by moisture
- **Validation**: Biological spore indicator (B. subtilis)

### Category 2: Semi-Critical Items (Contact with non-intact skin/mucous membranes)
**Endoscopes, thermometers, laryngoscopes**
- **Requirement**: High-level disinfection (kills all vegetative + most spores)
- **Method**: Glutaraldehyde 2% for 20 min (liquid immersion)
- **Alternative**: Peracetic acid (faster, more effective on resistant organisms)
- **Validation**: Chemical indicator changes color

### Category 3: Non-Critical Items (Contact with intact skin)
**Stethoscope, BP cuff, bed frame**
- **Requirement**: Low-level disinfection (kills vegetative bacteria)
- **Method**: 70% ethanol or quaternary ammonium (surface spray)
- **Alternative**: Routine cleaning with detergent-disinfectant

## India-Specific Healthcare Challenges

### Hospital-Acquired Infection (HAI) Prevention
- **Problem**: MRSA, MDR Pseudomonas, VRE prevalence high in India
- **Solution**: Strict sterilization protocols, spore testing quarterly
- **Cost-effectiveness**: Ethylene oxide (gas sterilization) expensive; autoclaves more accessible

### Sterilization Failures in India
- **Cold chain breaks**: Power outages → incomplete autoclaving cycles
- **Indicator misuse**: Biological indicators not properly incubated post-sterilization
- **Equipment failure**: Pressure gauges miscalibrated → substerilization

### Common Disinfectants in Indian Hospitals
- **Bleach (NaOCl 0.5%)**: Cheapest, effective on vegetative bacteria, limited spore activity
- **Lysol (5%)**: Phenolic, slower acting, good tissue penetration
- **Alcohol 70%**: Non-sporicidal; not for critical items
- **Glutaraldehyde 2%**: High-level; used for endoscopes (expensive)

## Sterilization Validation & Quality Control

### Biological Indicator Testing
- **Frequency**: Monthly or after any sterilizer malfunction
- **Organism**: Bacillus atrophaeus (G. stearothermophilus for moist heat)
- **Positive control**: Untreated spores (should grow)
- **Test sterile**: Sterilized spores (should NOT grow = pass)
- **Incubation**: 37-60°C for 24-48 hours

### Chemical Indicator Strips
- **Purpose**: Quick visual confirmation (not validation)
- **Limitation**: Only confirms exposure to heat/steam (not actual sterilization)
- **Use**: For every sterilization cycle (screening tool)

### Physical Parameters Monitoring
- **Temperature**: 121°C for moist heat (±2°C tolerance)
- **Pressure**: 15 psi for moist heat
- **Time**: Minimum 15 min at sterilization conditions
- **Penetration time**: 30 min for wrapped instruments

## Prevention of Sterilization Failure

### Proper Autoclaving Protocol
1. Pre-vacuum phase (removes air)
2. Exposure phase (121°C, 15 psi × 15-30 min)
3. Post-vacuum phase (removes residual steam)

### Common Errors
- **Over-crowding chamber**: Reduces steam penetration
- **Incorrect wrapping**: Prevents steam contact with instruments
- **Wet instruments post-sterilization**: Risk of contamination during storage
- **Expired indicators**: Chemical indicators have shelf life

## Antimicrobial Resistance in Sterilization Context

### Resistance to Disinfectants
- **Mycobacteria**: Resist alcohol (>30%), need aldehydes or phenolics
- **Spores**: Require sterilization (disinfection insufficient)
- **Biofilms**: Protect bacteria from disinfectants; mechanical cleaning essential first

### Emerging Concerns
- **Pseudomonas resistant to quaternary ammonium**: Nosocomial risk in India
- **TB prevalence**: Requires stronger disinfection protocols (Lysol effective)`,
        mnemonics: [
          {
            text: "Critical = Sterilize (autoclave), Semi-critical = High-level disinfect (glutaraldehyde), Non-critical = Low-level disinfect (70% ethanol)",
            explanation: "Sterilization level depends on instrument category"
          },
          {
            text: "Spore test = Most important validation (biological > chemical > physical)",
            explanation: "Biological indicator only true validation of sterilization"
          }
        ],
        keyPoints: [
          "Critical items: autoclaving 121°C/15 min; validate with spore testing",
          "Semi-critical: glutaraldehyde 2% 20 min (high-level disinfection)",
          "Non-critical: 70% ethanol (low-level disinfection)",
          "Biological spore indicator: B. subtilis, incubate post-sterilization (24-48h)",
          "India: cold chain breaks, indicator misuse common; bleach, lysol practical disinfectants"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Clinical Sterilization", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "sterilization-disinfection-layer-4-exam",
        title: "Sterilization & Disinfection - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts on sterilization methods, mechanisms, resistance, validation, India protocols.",
        contentMd: `# Sterilization & Disinfection - High-Yield Exam Facts

## Quick Reference Table

| Method | Temp | Time | Penetration | Spores | Cost | Best for |
|--------|------|------|-------------|--------|------|----------|
| **Moist heat** | 121°C | 15-30 min | GOOD | YES | Low | Instruments, linens |
| **Dry heat** | 160°C | 1-2 hours | POOR | YES | Low | Oils, powders |
| **UV radiation** | - | Variable | POOR | NO | Low | Surfaces, air |
| **Ethylene oxide** | 37-55°C | 12h | EXCELLENT | YES | HIGH | Plastics, devices |
| **Glutaraldehyde** | 20-25°C | 20 min | GOOD | MAYBE | MED | Endoscopes |
| **Chlorine (bleach)** | Room | Minutes | POOR | NO | CHEAP | General disinfection |

## Definitions One-Liners
- **Sterilization**: Absolute elimination of ALL microbes including spores
- **Disinfection**: Reduction of pathogens (NOT spores) to safe levels
- **Antisepsis**: Application to living tissues
- **Sanitization**: Public health reduction without complete elimination
- **Asepsis**: Absence of pathogens (clinical goal)

## Sterilization Kinetics
- **Vegetative cells**: Exponential death (D-value 1-2 min at 121°C)
- **Spores**: Exponential death but much slower (higher D-value)
- **Chemical agents**: Often sigmoidal (lag phase then rapid)

## India-Specific High-Yield
- **MRSA prevalence**: Common in India → need autoclave validation
- **NDM-1 producers**: Require effective disinfection
- **Power failures**: Break cold chain → check sterilization after outages
- **Biological indicator**: ONLY true validation of sterilization process
- **Spore test organism**: Bacillus subtilis (G. stearothermophilus for moist heat)

## Disinfectant Efficacy Comparison
- **Aldehydes** > **Phenolics** > **Halogens** > **Alcohols** (vs spores)
- **Halogens** > **Alcohols** > **Aldehydes** (rapid on vegetative bacteria)
- **Alcohols**: NOT sporicidal, non-effective on mycobacteria (>30% alcohol)

## Critical vs Semi-critical vs Non-critical Items
| Item Type | Contact | Requirement | Example | Method |
|-----------|---------|-------------|---------|--------|
| **Critical** | Blood/sterile cavity | Sterilization | Surgical instruments | Autoclave |
| **Semi-critical** | Non-intact skin/mucosa | High-level disinfection | Endoscopes | Glutaraldehyde |
| **Non-critical** | Intact skin | Low-level disinfection | Stethoscope | 70% ethanol |

## Spore Resistance Mechanisms
- Low water content (10-30% vs 80% vegetative)
- Dipicolinic acid-Mg2+ complex (stabilizes DNA)
- Protein coat (physical barrier)
- Resultant resistance: 100-1000 FOLD vs vegetative cells

## Exam Question Types
1. **Sterilization method selection** for specific instrument
2. **Mechanism of action** for heat vs chemical
3. **Validation** of sterilization (what's best indicator)
4. **Resistance** mechanisms in spores
5. **India-specific** HAI prevention protocols`,
        mnemonics: [
          {
            text: "Moist heat = 121, 15, 15 (121°C, 15 psi, 15 min)",
            explanation: "Gold standard sterilization parameters"
          },
          {
            text: "Critical = Sterile, Semi = Strong disinfect, Non = Simple disinfect",
            explanation: "Instrument classification determines sterilization level"
          }
        ],
        keyPoints: [
          "Moist heat (121°C) faster than dry heat (160°C); both sterilize spores",
          "Aldehydes: fast sporicidal; alcohols: NOT sporicidal",
          "Biological spore indicator: ONLY true validation (B. subtilis, 24-48h incubation)",
          "Spores: 100-1000x more resistant than vegetative; require sterilization, not disinfection",
          "India: frequent cold chain breaks; post-failure autoclaves must be revalidated"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Sterilization Overview", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "sterilization-disinfection-layer-5-active-recall",
        title: "Sterilization & Disinfection - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for spaced repetition on sterilization mechanisms, methods, resistance, and validation.",
        contentMd: `# Sterilization & Disinfection - Active Recall Flashcards

## Q1: What is the difference between sterilization and disinfection?
**A**: Sterilization = absolute elimination of ALL microorganisms including spores (irreversible). Disinfection = reduction of pathogenic organisms (reversible with continued exposure); does NOT eliminate spores. Clinical: critical items → sterilize, semi-critical → disinfect.

## Q2: Why is moist heat (121°C) faster than dry heat (160°C)?
**A**: Moist heat: water conducts heat efficiently + penetrates tissues/materials; protein denaturation faster. Dry heat: air insulates + penetrates poorly; requires higher temperature to achieve same killing. Moist heat D-value 1-2 min, dry heat 10-15 min.

## Q3: Explain the mechanism of spore resistance.
**A**: Spores have low water content (10-30%), thick protective coat, dipicolinic acid-Mg2+ complex stabilizing DNA. These features resist heat, chemicals, radiation 100-1000x better than vegetative cells. Even sterilization takes time (15+ min) to penetrate coat and kill core.

## Q4: What is the most reliable method to validate sterilization?
**A**: Biological spore indicator (B. subtilis for moist heat, G. stearothermophilus for dry heat). Non-viable spores sterilized (killed); positive control (untreated spores) should grow. Incubate 24-48 hours at appropriate temperature. Chemical/physical indicators only confirm exposure, not actual sterilization.

## Q5: How do aldehydes (glutaraldehyde) kill microorganisms?
**A**: Cross-link proteins (lysine residues) + methylate DNA bases. Result: protein denaturation, loss of genetic information, cell death. Sigmoidal killing kinetics (lag phase then rapid). Sporicidal at 2% concentration for 20 min.

## Q6: Why doesn't 70% ethanol kill spores?
**A**: Ethanol: denatures proteins at surface level. Spore coat + low water content prevent deep penetration. Vegetative cells killed rapidly (minutes) but spores require sterilization. Alcohol evaporates quickly, preventing prolonged contact needed for spore resistance mechanisms.

## Q7: Distinguish between critical, semi-critical, and non-critical items.
**A**: **Critical** = direct bloodstream/sterile cavity (e.g., surgical instruments) → STERILIZE (autoclave). **Semi-critical** = non-intact skin/mucosa (e.g., endoscopes) → HIGH-LEVEL DISINFECT (glutaraldehyde). **Non-critical** = intact skin (e.g., stethoscope) → LOW-LEVEL DISINFECT (ethanol).

## Q8: What is the effect of organic matter on disinfectant efficacy?
**A**: Organic matter (blood, pus) interferes with most disinfectants:
- Binds halogens (iodine, chlorine) → reduces available disinfectant
- Binds aldehydes (partial reduction)
- Minimal effect on alcohols/phenolics
- Solution: **mechanical cleaning FIRST**, then disinfection

## Q9: Why is mycobacteria resistant to alcohol-based disinfectants?
**A**: Mycobacteria have waxy mycolic acids in cell wall. These lipids prevent alcohol penetration (alcohol dissolves lipids but too quickly evaporates before penetrating). Require stronger agents: >30% alcohols, aldehydes, phenolics, halogens.

## Q10: How would you respond if a hospital's autoclave fails spore testing?
**A**: 1) Stop using immediately, 2) Check physical parameters (temperature probe, pressure gauge calibration), 3) Perform maintenance/repair, 4) Repeat spore test to validate function before resuming use. All potentially sterilized items since last successful test considered contaminated.`,
        mnemonics: [
          {
            text: "STEAM = Sterilize; Disinfect = Reduce (not eliminate)",
            explanation: "Sterilization absolute, disinfection relative"
          }
        ],
        keyPoints: [
          "Sterilization = elimination of ALL microbes + spores; disinfection = pathogens only (spores survive)",
          "Moist heat faster (121°C/15 min) than dry heat (160°C/2h); water conducts heat better",
          "Biological spore indicator: B. subtilis, incubate 24-48h (most reliable validation)",
          "Aldehydes: cross-link proteins; sigmoidal killing curve (lag then rapid)",
          "Ethanol NOT sporicidal; requires sterilization for spores"
        ],
        textbookRefs: [
          { book: "Ananthanarayan & Paniker's Textbook of Microbiology", chapter: "Sterilization Complete Review", edition: "11th" }
        ]
      }
    ]
  }
];
