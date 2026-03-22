import type { TopicLessons } from "./content-loader";

/**
 * 5-layer lessons for Pathology modules PA-MOD-01 through PA-MOD-04.
 * Covers General Pathology, Neoplasia, Hematology, CVS & Respiratory Pathology.
 * Primary ref: Robbins Pathologic Basis of Disease 10th ed.
 * Secondary ref: Harsh Mohan Textbook of Pathology 8th ed.
 */
export const pathologyPart1Lessons: TopicLessons[] = [
  // ═══════════════════════════════════════════════════════════════
  // PA-MOD-01: GENERAL PATHOLOGY
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: Cell Injury & Adaptation ─────────────────────────
  {
    topicCode: "PA-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "cell-injury-adaptation-foundation",
        title: "Cell Injury & Adaptation - Foundation",
        estimatedMinutes: 20,
        summary: "Cells respond to stress through adaptation (hypertrophy, hyperplasia, atrophy, metaplasia) or undergo injury (reversible or irreversible) depending on the severity and duration of the insult.",
        contentMd: `# Cell Injury & Adaptation

## Normal Cell Homeostasis
The cell maintains a steady state by balancing synthesis and degradation, energy production and consumption. When stress exceeds adaptive capacity, **cell injury** occurs.

## Causes of Cell Injury
| Category | Examples |
|----------|----------|
| Hypoxia/Ischemia | Atherosclerosis, anemia, CO poisoning |
| Physical agents | Trauma, radiation, burns, frostbite |
| Chemical agents | Drugs, poisons, alcohol, heavy metals |
| Infectious agents | Bacteria, viruses, fungi, parasites |
| Immunologic | Autoimmune diseases, anaphylaxis |
| Genetic | Inborn errors, sickle cell disease |
| Nutritional | Protein-calorie malnutrition, vitamin deficiency |

## Cellular Adaptations
| Adaptation | Definition | Example |
|------------|-----------|---------|
| **Hypertrophy** | Increase in cell SIZE | Left ventricular hypertrophy in hypertension |
| **Hyperplasia** | Increase in cell NUMBER | Endometrial hyperplasia from estrogen excess |
| **Atrophy** | Decrease in cell size | Disuse atrophy of immobilized limb |
| **Metaplasia** | Change from one cell type to another | Squamous metaplasia in smoker's bronchi |
| **Dysplasia** | Disordered growth (pre-neoplastic) | Cervical dysplasia (CIN) |

## Reversible vs Irreversible Injury
- **Reversible**: Cell swelling, fatty change, membrane blebbing
- **Irreversible**: Membrane damage, mitochondrial dysfunction, nuclear changes (pyknosis, karyorrhexis, karyolysis)

> **Clinical Pearl**: The point of no return is marked by massive calcium influx into mitochondria and irreversible membrane damage.`,
        mnemonics: [
          { text: "HHAM for cellular adaptations", explanation: "Hypertrophy (size up), Hyperplasia (number up), Atrophy (size down), Metaplasia (type change)" },
          { text: "PKK for nuclear changes in irreversible injury", explanation: "Pyknosis (nuclear shrinkage), Karyorrhexis (nuclear fragmentation), Karyolysis (nuclear dissolution)" },
        ],
        keyPoints: [
          "Hypertrophy = increased cell size; Hyperplasia = increased cell number",
          "Metaplasia is reversible but may predispose to dysplasia and cancer",
          "Irreversible injury is marked by mitochondrial damage and calcium influx",
          "Pyknosis, karyorrhexis, karyolysis are nuclear hallmarks of cell death",
          "Hypoxia is the most common cause of cell injury",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 2: Cell Injury, Cell Death, and Adaptations", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 3: Cell Injury and Cellular Adaptations", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "cell-injury-adaptation-mechanism",
        title: "Cell Injury & Adaptation - Mechanism",
        estimatedMinutes: 30,
        summary: "The mechanisms of cell injury involve ATP depletion, mitochondrial damage, calcium influx, oxidative stress, and membrane damage. Each adaptation has specific molecular pathways.",
        contentMd: `# Mechanisms of Cell Injury

## Sequence of Events in Ischemic Injury
1. **Decreased oxidative phosphorylation** -> reduced ATP
2. **Na+/K+ ATPase failure** -> Na+ and water influx -> cell swelling
3. **Anaerobic glycolysis** -> lactic acid -> decreased pH
4. **Ribosome detachment** -> decreased protein synthesis
5. **Calcium influx** -> activates phospholipases, proteases, endonucleases
6. **Membrane damage** -> lysosomal enzyme leakage -> IRREVERSIBLE

## Key Mechanisms

### ATP Depletion
- Central to ischemic injury
- Affects Na+/K+ pump, Ca2+ pump, protein synthesis
- Sources: oxidative phosphorylation (main), glycolysis

### Mitochondrial Damage
- Opens **mitochondrial permeability transition (MPT) pore**
- Cytochrome c leaks into cytoplasm -> triggers apoptosis
- Loss of membrane potential -> cannot generate ATP

### Oxidative Stress (Free Radical Injury)
- **ROS sources**: Mitochondria, P450, inflammatory cells, radiation, drugs
- **ROS types**: Superoxide (O2-), Hydrogen peroxide (H2O2), Hydroxyl radical (OH-)
- **Defense mechanisms**:
  | Enzyme | Action |
  |--------|--------|
  | SOD (Superoxide dismutase) | O2- -> H2O2 |
  | Catalase | H2O2 -> H2O + O2 |
  | Glutathione peroxidase | H2O2 -> H2O |
  | Vitamin E | Lipid peroxidation chain breaker |
  | Vitamin C | Aqueous free radical scavenger |

### Calcium Influx
- Activates: ATPases, phospholipases, proteases, endonucleases
- Net effect: membrane destruction, protein breakdown, DNA fragmentation

## Mechanisms of Adaptation

### Hypertrophy Pathways
- Mechanical sensors -> PI3K/AKT pathway (physiologic)
- GPCR agonists (angiotensin II, endothelin) -> MAPK, JAK/STAT (pathologic)
- Transcription factors: GATA4, NFAT, MEF2

### Hyperplasia
- Growth factors -> cell cycle activation via Cyclins and CDKs
- Hormonal: estrogen on endometrium, prolactin on breast
- Compensatory: liver regeneration after hepatectomy

### Metaplasia
- Reprogramming of stem cells by cytokines, growth factors
- Example: Barrett esophagus (squamous -> columnar due to GERD)
- Involves altered transcription factor expression (not mutation in mature cells)

> **Clinical Pearl**: In Indian clinical practice, squamous metaplasia of the cervix at the transformation zone is extremely common and is the site where cervical cancer (HPV-related) most commonly arises.`,
        mnemonics: [
          { text: "SoCaG for antioxidant enzymes", explanation: "SOD (superoxide -> H2O2), Catalase (H2O2 -> water in peroxisomes), Glutathione peroxidase (H2O2 -> water in cytoplasm)" },
          { text: "CAPE for calcium-activated destructive enzymes", explanation: "C-Calpain (protease), A-ATPases, P-Phospholipases, E-Endonucleases" },
        ],
        keyPoints: [
          "ATP depletion is the fundamental event in ischemic cell injury",
          "MPT pore opening leads to cytochrome c release and apoptosis",
          "Hydroxyl radical (OH-) is the most reactive oxygen species",
          "Calcium influx activates phospholipases, proteases, and endonucleases",
          "Metaplasia involves stem cell reprogramming, not transdifferentiation of mature cells",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 2: Mechanisms of Cell Injury", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 3: Mechanisms of Cell Injury", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "cell-injury-adaptation-clinical",
        title: "Cell Injury & Adaptation - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical scenarios involving cell injury and adaptation including myocardial infarction, fatty liver disease, and cervical metaplasia in Indian healthcare context.",
        contentMd: `# Clinical Applications

## Case 1: Myocardial Ischemia
- 55-year-old male with chest pain, ST elevation
- **Reversible phase (< 20 min)**: cell swelling, glycogen depletion
- **Irreversible phase (> 40 min)**: contraction band necrosis, membrane rupture
- Reperfusion injury: free radical burst on restoration of blood flow
- **Biomarkers**: Troponin I/T (most specific), CK-MB (early rise)

## Case 2: Alcoholic Fatty Liver (Indian Context)
- Alcohol -> increased NADH/NAD ratio -> impaired fatty acid oxidation
- Fatty change = **steatosis** (reversible)
- Progression: Steatosis -> Steatohepatitis -> Fibrosis -> Cirrhosis
- India: rising incidence of alcoholic liver disease, especially in southern states

## Case 3: Cervical Metaplasia
- Squamocolumnar junction (transformation zone)
- Columnar -> squamous metaplasia due to chronic irritation/acidity
- HPV infection at this zone -> dysplasia -> cervical intraepithelial neoplasia (CIN) -> carcinoma
- Indian context: Cervical cancer is the 2nd most common cancer in Indian women

## Clinical Examples of Adaptations
| Adaptation | Clinical Example |
|------------|-----------------|
| Physiologic hypertrophy | Uterus in pregnancy, athlete's heart |
| Pathologic hypertrophy | LV hypertrophy in hypertension |
| Compensatory hyperplasia | Liver regeneration after partial hepatectomy |
| Hormonal hyperplasia | BPH (benign prostatic hyperplasia) |
| Pathologic atrophy | Brain atrophy in Alzheimer's disease |
| Metaplasia | Barrett esophagus (GERD), smoker's bronchus |

## Lab Markers of Cell Injury
| Marker | Source | Significance |
|--------|--------|-------------|
| LDH | Ubiquitous | Non-specific tissue injury |
| AST/ALT | Liver | Hepatocyte injury (ALT more specific) |
| Troponin | Heart | Myocardial necrosis (gold standard) |
| CK-MB | Heart | Myocardial injury (early marker) |
| Amylase/Lipase | Pancreas | Acute pancreatitis |

> **Clinical Pearl**: In India, common causes of cell injury include tuberculosis (granulomatous), chronic alcoholism (fatty change), and iron overload in thalassemia patients receiving repeated transfusions.`,
        mnemonics: [
          { text: "TALL for liver enzymes", explanation: "Transaminases: ALT is more Liver-specific, AST is also in heart/muscle" },
        ],
        keyPoints: [
          "Myocardial injury becomes irreversible after 20-40 minutes of ischemia",
          "Troponin is the gold standard biomarker for myocardial necrosis",
          "Fatty change (steatosis) is the most common reversible cell injury in the liver",
          "Cervical metaplasia at the transformation zone predisposes to HPV-related carcinoma",
          "Reperfusion injury is mediated by free radicals and calcium overload",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 2: Clinicopathologic Correlations", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 3: Clinical Applications", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "cell-injury-adaptation-exam",
        title: "Cell Injury & Adaptation - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield points on cell injury, adaptations, and mechanisms for NEXT and NEET PG exams.",
        contentMd: `# Exam Preparation - High Yield

## One-Liners
- Most common cause of cell injury: **Hypoxia**
- Most reactive free radical: **Hydroxyl radical (OH-)**
- Point of no return in cell injury: **Irreversible mitochondrial damage + calcium influx**
- Fatty change most common in: **Liver** (also seen in heart, kidney)
- Hallmark of reversible injury: **Cell swelling (hydropic change)**
- Nuclear changes in necrosis sequence: **Pyknosis -> Karyorrhexis -> Karyolysis**
- Reperfusion injury mediated by: **Free radicals (ROS)**
- Antioxidant enzyme in peroxisomes: **Catalase**
- Antioxidant enzyme in mitochondria: **Mn-SOD (SOD2)**
- Lipofuscin = **wear-and-tear pigment** (residual body from autophagy)

## Comparison Table: Adaptations
| Feature | Hypertrophy | Hyperplasia |
|---------|------------|-------------|
| Cell size | Increased | Normal |
| Cell number | Same | Increased |
| DNA synthesis | No (except cardiac) | Yes |
| Occurs in | Permanent cells (cardiac, skeletal) | Labile and stable cells |
| Example | LVH in HTN | Endometrial hyperplasia |

## Previous Year Themes
- Mechanism of ischemic cell injury (ATP depletion sequence)
- Differences between reversible and irreversible injury
- Types of cellular adaptations with clinical examples
- Free radical defense mechanisms
- Metaplasia: definition, examples, significance

## Pattern Recognition
- Cell swelling + fatty change = **Reversible injury**
- Pyknosis + membrane disruption = **Irreversible injury / Necrosis**
- Increased cell size with increased organelles = **Hypertrophy**
- One epithelial type replaced by another = **Metaplasia**
- Disordered growth with loss of uniformity = **Dysplasia**`,
        mnemonics: [
          { text: "Hy-SIZE, Hy-NUMBER", explanation: "Hypertrophy = SIZE increase, Hyperplasia = NUMBER increase" },
        ],
        keyPoints: [
          "Hypoxia is the most common cause of cell injury - tested repeatedly",
          "Hydroxyl radical is the most reactive ROS",
          "Hypertrophy occurs in permanent cells; hyperplasia in labile/stable cells",
          "Pyknosis -> Karyorrhexis -> Karyolysis is the sequence of nuclear death",
          "Lipofuscin is a wear-and-tear pigment, not harmful to cell",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 2", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 3", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "cell-injury-adaptation-recall",
        title: "Cell Injury & Adaptation - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on cell injury and cellular adaptations.",
        contentMd: `# Active Recall

**Q1:** What is the most common cause of cell injury?
> Hypoxia (ischemia being the most common cause of hypoxia)

**Q2:** Name the 4 cellular adaptations.
> Hypertrophy (size up), Hyperplasia (number up), Atrophy (size down), Metaplasia (type change)

**Q3:** What are the 3 nuclear changes in irreversible injury?
> Pyknosis (shrinkage), Karyorrhexis (fragmentation), Karyolysis (dissolution)

**Q4:** What is the most reactive oxygen species?
> Hydroxyl radical (OH-)

**Q5:** Which enzyme converts superoxide to H2O2?
> Superoxide dismutase (SOD)

**Q6:** What is the hallmark morphologic feature of reversible cell injury?
> Cell swelling (hydropic change / cloudy swelling)

**Q7:** Metaplasia in a smoker's bronchus involves what change?
> Pseudostratified columnar ciliated epithelium -> stratified squamous epithelium

**Q8:** What does lipofuscin represent?
> Wear-and-tear pigment from residual bodies of autophagic vacuoles; seen in aging and atrophy`,
        mnemonics: [],
        keyPoints: ["8 recall questions covering adaptations, injury mechanisms, and nuclear changes"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 2", edition: "10th" },
        ],
      },
    ],
  },

  // ─── Topic 2: Necrosis & Apoptosis ─────────────────────────────
  {
    topicCode: "PA-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "necrosis-apoptosis-foundation",
        title: "Necrosis & Apoptosis - Foundation",
        estimatedMinutes: 20,
        summary: "Cell death occurs via necrosis (pathologic, inflammatory) or apoptosis (programmed, non-inflammatory). Understanding their differences is fundamental to pathology.",
        contentMd: `# Necrosis & Apoptosis

## Two Pathways of Cell Death
| Feature | Necrosis | Apoptosis |
|---------|----------|-----------|
| Stimulus | Always pathologic | Physiologic or pathologic |
| Cell size | Enlarged (swelling) | Reduced (shrinkage) |
| Nucleus | Pyknosis, karyorrhexis, karyolysis | Fragmentation into apoptotic bodies |
| Plasma membrane | Disrupted | Intact (blebbing) |
| Cell contents | Enzymatic digestion, leak out | Intact, no leak |
| Inflammation | Yes (always) | No |
| Mechanism | Energy failure | Energy-dependent (caspases) |

## Types of Necrosis
| Type | Morphology | Classic Example |
|------|-----------|----------------|
| **Coagulative** | Tissue architecture preserved, firm | MI, renal infarct, splenic infarct |
| **Liquefactive** | Tissue liquefied, pus | Brain infarct, abscess |
| **Caseous** | Cheesy, granular, amorphous | Tuberculosis |
| **Fat** | Chalky white, saponification | Acute pancreatitis (enzymatic), breast trauma (traumatic) |
| **Fibrinoid** | Bright pink (fibrin) in vessel walls | Malignant hypertension, vasculitis |
| **Gangrenous** | Dry (coagulative) or Wet (liquefactive + infection) | Diabetic foot, intestinal gangrene |

## Apoptosis: Basic Concept
- Programmed cell death with cell shrinkage and fragmentation
- No inflammatory response (membrane remains intact)
- Apoptotic bodies phagocytosed by macrophages
- Physiologic examples: embryogenesis, thymic selection, menstrual shedding`,
        mnemonics: [
          { text: "CCFFGL for types of necrosis", explanation: "Coagulative, Caseous, Fat, Fibrinoid, Gangrenous, Liquefactive" },
          { text: "Coagulative = Countryside (everywhere except brain); Liquefactive = Liquid brain", explanation: "Coagulative necrosis is the most common type; Liquefactive is characteristic of brain and abscesses" },
        ],
        keyPoints: [
          "Necrosis is always pathologic and causes inflammation; apoptosis can be physiologic and is non-inflammatory",
          "Coagulative necrosis is the most common type, preserves tissue architecture",
          "Liquefactive necrosis is characteristic of brain infarcts and abscesses",
          "Caseous necrosis is pathognomonic of tuberculosis",
          "Fat necrosis: enzymatic (pancreatitis) and traumatic (breast)",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 2: Necrosis and Apoptosis", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 3: Cell Death", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "necrosis-apoptosis-mechanism",
        title: "Necrosis & Apoptosis - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed molecular mechanisms of apoptosis including intrinsic (mitochondrial) and extrinsic (death receptor) pathways, and the role of caspases.",
        contentMd: `# Mechanisms of Apoptosis

## Intrinsic (Mitochondrial) Pathway
1. Cell stress (DNA damage, growth factor withdrawal) ->
2. **Pro-apoptotic BCL-2 proteins** (BAX, BAK) activated ->
3. Insert into mitochondrial outer membrane -> channels form ->
4. **Cytochrome c** released into cytoplasm ->
5. Binds **APAF-1** -> forms **apoptosome** ->
6. Activates **Caspase-9** (initiator) ->
7. Activates **Caspase-3** (executioner) ->
8. DNA fragmentation, protein cleavage, apoptotic body formation

## Extrinsic (Death Receptor) Pathway
1. **Death ligands** (FasL, TNF) bind **death receptors** (Fas/CD95, TNFR) ->
2. Recruit adaptor proteins (FADD) ->
3. Activate **Caspase-8** (initiator) ->
4. Activate **Caspase-3** (executioner) ->
5. Same final outcome as intrinsic pathway

## BCL-2 Family: Regulators of Apoptosis
| Category | Members | Function |
|----------|---------|----------|
| Anti-apoptotic | BCL-2, BCL-XL, MCL-1 | Block cytochrome c release |
| Pro-apoptotic | BAX, BAK | Form channels in mitochondria |
| BH3-only (sensors) | BID, BAD, BIM | Activate BAX/BAK or neutralize BCL-2 |

## Key Points About Caspases
- **Initiator caspases**: Caspase-8 (extrinsic), Caspase-9 (intrinsic)
- **Executioner caspases**: Caspase-3, Caspase-6, Caspase-7
- Exist as inactive zymogens (procaspases)
- Activated by cleavage in a cascade

## p53: Guardian of the Genome
- Detects DNA damage -> activates intrinsic apoptosis pathway
- Upregulates BAX, PUMA, NOXA (pro-apoptotic)
- Most commonly mutated gene in human cancers
- Loss of p53 -> cells escape apoptosis -> cancer progression

## Mechanism of Necrosis
- Not a regulated pathway (unlike apoptosis)
- ATP depletion -> Na/K pump failure -> swelling
- Calcium influx -> activates degradative enzymes
- Lysosomal rupture -> autodigestion
- Membrane rupture -> contents leak -> **inflammation**

> **Clinical Pearl**: In TB (extremely common in India), caseous necrosis results from cytokine-mediated tissue destruction by activated macrophages. The combination of caseous necrosis + epithelioid granuloma is virtually diagnostic of TB.`,
        mnemonics: [
          { text: "Caspase 8 = Extrinsic (8 looks like two circles = two external death receptors)", explanation: "Caspase-8 is the initiator of the extrinsic pathway; Caspase-9 is for the intrinsic (mitochondrial) pathway" },
          { text: "BAX BAK Break the mitochondria, BCL-2 Blocks apoptosis", explanation: "Pro-apoptotic BAX/BAK form pores; anti-apoptotic BCL-2 prevents cytochrome c release" },
        ],
        keyPoints: [
          "Intrinsic pathway: Cytochrome c + APAF-1 -> Apoptosome -> Caspase-9 -> Caspase-3",
          "Extrinsic pathway: Death receptor -> FADD -> Caspase-8 -> Caspase-3",
          "BCL-2 is anti-apoptotic; BAX/BAK are pro-apoptotic",
          "p53 is the guardian of the genome - induces apoptosis via intrinsic pathway",
          "Caspase-3 is the common executioner caspase for both pathways",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 2: Mechanisms of Apoptosis", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 3: Apoptosis", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "necrosis-apoptosis-clinical",
        title: "Necrosis & Apoptosis - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical scenarios demonstrating necrosis types and apoptosis in disease, including TB, pancreatitis, and cancer therapy.",
        contentMd: `# Clinical Applications

## Caseous Necrosis in TB (Indian Context)
- India has the highest TB burden globally
- Lung tissue shows central caseous necrosis surrounded by epithelioid granuloma
- Gross: cheesy, white-yellow, friable material
- Can cavitate -> cavity formation in upper lobes
- Caseous material is amorphous on microscopy (no preserved architecture)

## Fat Necrosis in Acute Pancreatitis
- Pancreatic lipase released -> digests peripancreatic fat
- Fatty acids + calcium -> **saponification** (chalky white deposits)
- Serum calcium may drop (Cullen sign: periumbilical ecchymosis; Grey Turner sign: flank ecchymosis)

## Gangrenous Necrosis
- **Dry gangrene**: Coagulative necrosis in ischemic limb (diabetic foot - very common in India)
- **Wet gangrene**: Liquefactive necrosis + bacterial infection -> foul-smelling
- **Gas gangrene**: Clostridium perfringens -> crepitus, gas in tissues

## Apoptosis in Disease
| Condition | Role of Apoptosis |
|-----------|------------------|
| Cancer | Defective apoptosis (BCL-2 overexpression in follicular lymphoma) |
| HIV/AIDS | Excessive CD4+ T cell apoptosis |
| Autoimmune diseases | Failure to eliminate self-reactive lymphocytes |
| Graft rejection | Cytotoxic T cells induce apoptosis via perforin/granzyme |
| Viral hepatitis | Councilman bodies = apoptotic hepatocytes |

## Councilman Bodies (Apoptosis in Liver)
- Shrunken, eosinophilic, rounded hepatocytes
- Seen in viral hepatitis (especially Yellow Fever)
- Represent individual hepatocyte apoptosis

> **Clinical Pearl**: In India, diabetic foot with dry gangrene is an extremely common surgical presentation. Early recognition and vascular assessment can prevent amputation.`,
        mnemonics: [
          { text: "Councilman = Council of apoptotic hepatocytes", explanation: "Councilman bodies are apoptotic hepatocytes seen in viral hepatitis, classically Yellow Fever" },
        ],
        keyPoints: [
          "Caseous necrosis in TB is amorphous with no preserved tissue architecture",
          "Fat necrosis in pancreatitis causes saponification and hypocalcemia",
          "Dry gangrene is coagulative; Wet gangrene adds liquefactive from infection",
          "BCL-2 overexpression in follicular lymphoma prevents apoptosis",
          "Councilman bodies are apoptotic hepatocytes in viral hepatitis",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 2: Clinical Correlations", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 3", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "necrosis-apoptosis-exam",
        title: "Necrosis & Apoptosis - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on necrosis types, apoptosis pathways, and key differentiators for NEXT/NEET PG.",
        contentMd: `# Exam Preparation

## One-Liners
- Most common type of necrosis: **Coagulative**
- Necrosis type in brain infarct: **Liquefactive**
- Necrosis pathognomonic for TB: **Caseous**
- Necrosis in vessel walls in malignant HTN: **Fibrinoid**
- Fat necrosis with saponification: **Acute pancreatitis**
- Anti-apoptotic protein overexpressed in follicular lymphoma: **BCL-2** (t(14;18))
- Initiator caspase of intrinsic pathway: **Caspase-9**
- Initiator caspase of extrinsic pathway: **Caspase-8**
- Executioner caspase (common final pathway): **Caspase-3**
- Guardian of the genome: **p53**
- Apoptotic hepatocytes: **Councilman bodies**
- Marker for apoptosis in tissue sections: **TUNEL assay** (detects DNA fragments)

## Comparison: Necrosis vs Apoptosis (Most Asked)
| Feature | Necrosis | Apoptosis |
|---------|----------|-----------|
| Cell size | Enlarged | Shrunk |
| Membrane | Disrupted | Intact |
| Inflammation | Present | Absent |
| Energy | Passive (ATP depleted) | Active (ATP required) |
| Caspases | Not involved | Central role |

## Previous Year NEXT/NEET Themes
- Types of necrosis with examples (especially caseous, liquefactive, fat)
- Intrinsic vs extrinsic apoptosis pathways
- BCL-2 family members and their roles
- p53 function in apoptosis
- Councilman bodies`,
        mnemonics: [
          { text: "9 INside, 8 is EXIT", explanation: "Caspase-9 = Intrinsic (inside the cell/mitochondria); Caspase-8 = Extrinsic (external death receptor)" },
        ],
        keyPoints: [
          "Coagulative necrosis is the most common type - brain is the exception (liquefactive)",
          "BCL-2 translocation t(14;18) is the hallmark of follicular lymphoma",
          "p53 mutation is the most common genetic alteration in cancer",
          "TUNEL assay detects DNA fragmentation in apoptosis",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 2", edition: "10th" },
        ],
      },
      {
        layer: 5,
        slug: "necrosis-apoptosis-recall",
        title: "Necrosis & Apoptosis - Active Recall",
        estimatedMinutes: 10,
        summary: "Self-test flashcards on necrosis types and apoptosis mechanisms.",
        contentMd: `# Active Recall

**Q1:** What type of necrosis occurs in a brain infarct?
> Liquefactive necrosis (brain is rich in lipids and hydrolytic enzymes)

**Q2:** Name the type of necrosis pathognomonic for TB.
> Caseous necrosis

**Q3:** What triggers cytochrome c release in intrinsic apoptosis?
> BAX/BAK pore formation in the mitochondrial outer membrane

**Q4:** Which protein is the "guardian of the genome"?
> p53 (induces apoptosis or cell cycle arrest upon DNA damage)

**Q5:** What is the translocation in follicular lymphoma?
> t(14;18) causing BCL-2 overexpression (anti-apoptotic)

**Q6:** What are Councilman bodies?
> Apoptotic hepatocytes seen in viral hepatitis (classically Yellow Fever)

**Q7:** Fat necrosis with chalky white deposits is due to?
> Saponification (fatty acids combining with calcium) in acute pancreatitis

**Q8:** Which caspase is the common executioner for both apoptosis pathways?
> Caspase-3`,
        mnemonics: [],
        keyPoints: ["8 recall questions covering necrosis types and apoptosis pathways"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 2", edition: "10th" },
        ],
      },
    ],
  },

  // ─── Topic 3: Acute Inflammation ───────────────────────────────
  {
    topicCode: "PA-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "acute-inflammation-foundation",
        title: "Acute Inflammation - Foundation",
        estimatedMinutes: 20,
        summary: "Acute inflammation is a rapid, short-lived response to injury characterized by vascular changes and neutrophilic infiltration. The 5 cardinal signs are rubor, tumor, calor, dolor, and functio laesa.",
        contentMd: `# Acute Inflammation

## Definition
A rapid innate immune response to tissue injury that delivers leukocytes and plasma proteins to the site of injury.

## Cardinal Signs (Celsus + Virchow)
| Sign | Meaning | Mechanism |
|------|---------|-----------|
| **Rubor** | Redness | Vasodilation |
| **Tumor** | Swelling | Increased vascular permeability -> edema |
| **Calor** | Heat | Increased blood flow + metabolic activity |
| **Dolor** | Pain | Prostaglandins, bradykinin on nerve endings |
| **Functio laesa** | Loss of function | Combination of above (added by Virchow) |

## Two Main Components

### 1. Vascular Changes
- **Transient vasoconstriction** (seconds)
- **Vasodilation** (arterioles -> increased blood flow)
- **Increased vascular permeability** -> protein-rich exudate
- **Stasis** (slowing of blood flow -> margination of WBCs)

### 2. Cellular Events
- **Margination**: WBCs move to vessel periphery
- **Rolling**: Selectin-mediated (E-selectin, P-selectin)
- **Adhesion**: Integrin-mediated (LFA-1/ICAM-1)
- **Transmigration (Diapedesis)**: Through vessel wall (PECAM-1/CD31)
- **Chemotaxis**: Directed movement toward chemical gradient
- **Phagocytosis**: Engulfment and killing of microbes

## Key Cell: Neutrophil
- First responder (arrives within 6-24 hours)
- Short-lived (24-48 hours in tissues)
- Replaced by monocytes/macrophages by 24-48 hours`,
        mnemonics: [
          { text: "RuTuCaDoFu for cardinal signs", explanation: "Rubor (redness), Tumor (swelling), Calor (heat), Dolor (pain), Functio laesa (loss of function)" },
          { text: "MARCT for leukocyte recruitment steps", explanation: "Margination, Adhesion, Rolling, Chemotaxis, Transmigration (actual order: Margination -> Rolling -> Adhesion -> Transmigration -> Chemotaxis)" },
        ],
        keyPoints: [
          "5 cardinal signs: Rubor, Tumor, Calor, Dolor, Functio laesa",
          "Neutrophils are the first cells to arrive (6-24 hrs), replaced by macrophages",
          "Selectins mediate rolling; Integrins mediate firm adhesion",
          "PECAM-1 (CD31) mediates transmigration through endothelium",
          "Increased vascular permeability leads to protein-rich exudate",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3: Inflammation and Repair", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 4: Inflammation", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "acute-inflammation-mechanism",
        title: "Acute Inflammation - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms of vascular permeability, chemical mediators of inflammation, and phagocytosis pathways.",
        contentMd: `# Mechanisms of Acute Inflammation

## Chemical Mediators

### Cell-Derived Mediators
| Mediator | Source | Action |
|----------|--------|--------|
| Histamine | Mast cells, basophils, platelets | Vasodilation, increased permeability |
| Serotonin | Platelets | Vasoconstriction then vasodilation |
| Prostaglandins | All cells (COX pathway) | Pain, fever, vasodilation |
| Leukotrienes | Leukocytes (LOX pathway) | LTB4 = chemotaxis; LTC4/D4/E4 = bronchospasm |
| PAF | Leukocytes, platelets | Platelet aggregation, bronchospasm |
| NO (Nitric oxide) | Endothelium, macrophages | Vasodilation, microbicidal |
| IL-1, TNF | Macrophages | Fever, acute phase response, endothelial activation |

### Plasma-Derived Mediators
| System | Key Components | Action |
|--------|---------------|--------|
| Complement | C3a, C5a (anaphylatoxins), C3b (opsonin), C5b-9 (MAC) | Chemotaxis, opsonization, cell lysis |
| Kinin | Bradykinin | Pain, vasodilation, permeability |
| Coagulation | Factor XII (Hageman) | Activates kinin, complement, coagulation |

## Arachidonic Acid Pathway
\`\`\`
Membrane Phospholipids
        |
    Phospholipase A2 (inhibited by steroids)
        |
  Arachidonic Acid
      /          \\
   COX            LOX
(inhibited by     |
 NSAIDs/aspirin)  |
   /    \\         |
 PGs   TXA2    Leukotrienes
              (LTB4, LTC4, D4, E4)
\`\`\`

## Mechanisms of Increased Vascular Permeability
1. **Endothelial contraction** (histamine, bradykinin) - immediate, venules
2. **Endothelial injury** (burns, toxins) - immediate, sustained
3. **Transcytosis** (VEGF) - channels through endothelial cells
4. **Leukocyte-dependent injury** - late, due to ROS and enzymes

## Phagocytosis
1. **Recognition & Attachment**: via opsonins (IgG Fc, C3b, collectins)
2. **Engulfment**: pseudopod extension around microbe -> phagosome
3. **Killing**: Oxygen-dependent (respiratory burst -> ROS) and Oxygen-independent (lysozyme, defensins, lactoferrin)

### Respiratory Burst
- NADPH oxidase generates **superoxide** (O2-)
- MPO + H2O2 + Cl- -> **HOCl** (hypochlorous acid) - most potent microbicidal
- MPO-H2O2-halide system is the most efficient killing mechanism

> **Clinical Pearl**: Chronic Granulomatous Disease (CGD) results from NADPH oxidase deficiency -> inability to generate respiratory burst -> recurrent infections with catalase-positive organisms (S. aureus, Aspergillus).`,
        mnemonics: [
          { text: "LTB4 Brings 4th neutrophils (chemotaxis); LTC4D4E4 = bronchospasm (asthma)", explanation: "LTB4 is a potent chemotactic agent for neutrophils; LTC4, D4, E4 cause bronchospasm in asthma" },
          { text: "C3b = C3 Binds (opsonin); C5a = C5 Attracts (chemotaxis)", explanation: "C3b is the major opsonin of complement; C5a is the most potent chemotactic complement factor" },
        ],
        keyPoints: [
          "Histamine is the first mediator released in acute inflammation (from mast cells)",
          "COX pathway produces prostaglandins and thromboxane; LOX produces leukotrienes",
          "C5a is the most potent chemotactic agent from complement system",
          "MPO-H2O2-halide system is the most potent microbicidal mechanism",
          "NADPH oxidase deficiency causes Chronic Granulomatous Disease",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3: Chemical Mediators", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 4: Mediators of Inflammation", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "acute-inflammation-clinical",
        title: "Acute Inflammation - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical applications of inflammation including drug targets, inflammatory exudates, and outcomes of acute inflammation.",
        contentMd: `# Clinical Applications

## Outcomes of Acute Inflammation
1. **Resolution**: Complete restoration (mild injury, labile cells)
2. **Healing by fibrosis**: Extensive tissue destruction, permanent cells
3. **Chronic inflammation**: Persistent stimulus, autoimmune conditions
4. **Abscess formation**: Localized collection of pus (pyogenic organisms)

## Types of Exudates
| Type | Composition | Example |
|------|-------------|---------|
| Serous | Clear, protein-poor | Skin blister, pleural effusion in early TB |
| Fibrinous | Fibrin-rich | Bread-and-butter pericarditis (rheumatic fever) |
| Purulent (Suppurative) | Neutrophil-rich (pus) | Bacterial abscess, lobar pneumonia |
| Hemorrhagic | RBC-rich | Meningococcal meningitis |

## Drug Targets in Inflammation
| Drug | Target | Effect |
|------|--------|--------|
| Aspirin | COX-1 (irreversible) | Inhibits TXA2 in platelets |
| NSAIDs | COX-1 and COX-2 (reversible) | Reduce PGs -> pain, fever, inflammation |
| Celecoxib | COX-2 selective | Anti-inflammatory with less GI side effects |
| Corticosteroids | Phospholipase A2 (via lipocortin) | Block all eicosanoids |
| Montelukast | Leukotriene receptor antagonist | Used in asthma |
| Anti-TNF (Infliximab) | TNF-alpha | Rheumatoid arthritis, IBD |

## Clinical Case: Acute Appendicitis
- Most common surgical emergency worldwide
- Pathology: Luminal obstruction -> bacterial overgrowth -> transmural inflammation
- Gross: swollen, hyperemic appendix, fibrinopurulent exudate
- Micro: neutrophilic infiltration of muscularis (hallmark)
- Complication: Perforation -> peritonitis

## Indian Clinical Context
- **Acute rheumatic fever**: Fibrinous pericarditis (bread-and-butter appearance) is a classic finding; still common in India due to untreated streptococcal pharyngitis
- **Tubercular pleural effusion**: Initially serous, becomes fibrinous -> loculated empyema if infected secondarily

> **Clinical Pearl**: Steroids block phospholipase A2 and therefore inhibit ALL downstream eicosanoid production, whereas NSAIDs only block the COX pathway (PGs and TXA2) but not leukotrienes.`,
        mnemonics: [
          { text: "Steroids are UPSTREAM, NSAIDs are DOWNSTREAM", explanation: "Steroids block phospholipase A2 (upstream of arachidonic acid); NSAIDs block COX (downstream)" },
        ],
        keyPoints: [
          "4 outcomes: Resolution, Fibrosis, Chronic inflammation, Abscess",
          "Bread-and-butter pericarditis = fibrinous exudate in rheumatic fever",
          "Steroids block phospholipase A2 -> inhibit all eicosanoids",
          "NSAIDs block COX -> inhibit prostaglandins and thromboxane only",
          "Acute appendicitis: neutrophilic infiltration of muscularis is the hallmark",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3: Outcomes of Acute Inflammation", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 4", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "acute-inflammation-exam",
        title: "Acute Inflammation - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on mediators, vascular events, and cellular events in acute inflammation.",
        contentMd: `# Exam Preparation

## One-Liners
- First mediator released in acute inflammation: **Histamine**
- Most potent chemotactic complement factor: **C5a**
- Major opsonins: **IgG Fc and C3b**
- Most potent microbicidal system: **MPO-H2O2-halide**
- Selectins mediate: **Rolling**
- Integrins mediate: **Firm adhesion**
- Transmigration molecule: **PECAM-1 (CD31)**
- Fever-producing cytokines: **IL-1 and TNF**
- Mediator causing pain: **Bradykinin and PGE2**
- NADPH oxidase deficiency: **Chronic Granulomatous Disease**
- First cell to arrive: **Neutrophil (6-24 hrs)**
- Cell that replaces neutrophil: **Monocyte/macrophage (24-48 hrs)**
- Steroids inhibit: **Phospholipase A2**
- Aspirin irreversibly inhibits: **COX-1**

## Comparison: Exudate vs Transudate
| Feature | Exudate | Transudate |
|---------|---------|------------|
| Protein | > 3 g/dL | < 3 g/dL |
| Specific gravity | > 1.020 | < 1.012 |
| LDH | High | Low |
| Cause | Inflammation | Hemodynamic (CHF, cirrhosis) |
| Rivalta test | Positive | Negative |

## Complement Cascade Quick Review
- **Classical**: Ag-Ab complex -> C1 -> C4,2 -> C3 -> C5-9
- **Alternative**: Microbial surface -> C3 -> C5-9
- **Lectin**: MBL -> C4,2 -> C3 -> C5-9
- All converge at **C3 convertase**`,
        mnemonics: [
          { text: "Histamine is the FIRST alarm", explanation: "Histamine is preformed in mast cell granules -> released immediately upon injury -> first mediator of acute inflammation" },
        ],
        keyPoints: [
          "Histamine is the first and most important mediator of acute inflammation",
          "C5a is the most potent chemotactic factor from complement",
          "MPO-H2O2-halide is the most efficient microbicidal system",
          "Exudate vs Transudate differentiation is a common exam question",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3", edition: "10th" },
        ],
      },
      {
        layer: 5,
        slug: "acute-inflammation-recall",
        title: "Acute Inflammation - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on acute inflammation.",
        contentMd: `# Active Recall

**Q1:** Name the 5 cardinal signs of inflammation.
> Rubor (redness), Tumor (swelling), Calor (heat), Dolor (pain), Functio laesa (loss of function)

**Q2:** First mediator released in acute inflammation?
> Histamine (from mast cell granules)

**Q3:** What molecules mediate rolling of leukocytes?
> Selectins (E-selectin on endothelium, P-selectin on endothelium/platelets)

**Q4:** Most potent microbicidal mechanism in neutrophils?
> MPO-H2O2-halide system

**Q5:** Which disease results from NADPH oxidase deficiency?
> Chronic Granulomatous Disease (CGD)

**Q6:** What is the difference between exudate and transudate?
> Exudate: protein-rich (>3g/dL), inflammatory. Transudate: protein-poor (<3g/dL), hemodynamic.

**Q7:** What drug irreversibly inhibits COX-1?
> Aspirin (acetylsalicylic acid)

**Q8:** What type of exudate shows bread-and-butter appearance?
> Fibrinous exudate (classic in rheumatic pericarditis)`,
        mnemonics: [],
        keyPoints: ["8 recall questions on cardinal signs, mediators, and clinical applications"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3", edition: "10th" },
        ],
      },
    ],
  },

  // ─── Topic 4: Chronic Inflammation & Granuloma ─────────────────
  {
    topicCode: "PA-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "chronic-inflammation-foundation",
        title: "Chronic Inflammation & Granuloma - Foundation",
        estimatedMinutes: 20,
        summary: "Chronic inflammation is prolonged inflammation with simultaneous tissue destruction and repair. Granulomatous inflammation is a specialized pattern with epithelioid macrophages.",
        contentMd: `# Chronic Inflammation & Granuloma

## Definition
Prolonged inflammation (weeks to years) characterized by:
1. **Mononuclear cell infiltrate** (macrophages, lymphocytes, plasma cells)
2. **Tissue destruction** (by inflammatory cells)
3. **Repair** (angiogenesis + fibrosis)

## Causes
| Category | Examples |
|----------|----------|
| Persistent infections | TB, leprosy, syphilis, fungi |
| Autoimmune diseases | RA, SLE, IBD, Hashimoto's |
| Prolonged toxic exposure | Silicosis, asbestosis |
| Foreign bodies | Sutures, talc, silicone |
| Primary chronic | No preceding acute phase (TB, viral hepatitis) |

## Key Cells
- **Macrophages**: Central cell of chronic inflammation; derived from blood monocytes
- **Lymphocytes**: T cells (cell-mediated), B cells/plasma cells (antibodies)
- **Eosinophils**: Parasitic infections, allergic reactions
- **Mast cells**: IgE-mediated reactions

## Granulomatous Inflammation
A specialized form of chronic inflammation with aggregates of activated macrophages (epithelioid cells).

### Structure of a Granuloma
- Center: **Epithelioid cells** (activated macrophages with abundant pink cytoplasm)
- **Multinucleated giant cells** (fused epithelioid cells)
- Surrounded by **lymphocytes** (T cells)
- May have **caseous necrosis** (caseating) or not (non-caseating)

### Types of Giant Cells
| Type | Feature | Example |
|------|---------|---------|
| Langhans giant cell | Nuclei in peripheral horseshoe | TB |
| Foreign body giant cell | Nuclei scattered randomly | Suture, talc |
| Touton giant cell | Ring of nuclei with central lipid | Xanthoma, fat necrosis |

## Caseating vs Non-Caseating Granulomas
| Feature | Caseating | Non-Caseating |
|---------|-----------|---------------|
| Central necrosis | Present (cheesy) | Absent |
| Classic example | Tuberculosis | Sarcoidosis |
| Other examples | Fungal infections | Crohn disease, Berylliosis, Foreign body |`,
        mnemonics: [
          { text: "TB causes CASEATING; Sarcoid is NOT CHEESY", explanation: "TB = caseating granulomas; Sarcoidosis = non-caseating granulomas (most important distinction)" },
          { text: "Langhans = horseshoe L (peripheral nuclei); Foreign body = F scattered", explanation: "Langhans giant cell has nuclei arranged peripherally like a horseshoe; Foreign body giant cells have randomly scattered nuclei" },
        ],
        keyPoints: [
          "Chronic inflammation: mononuclear infiltrate + tissue destruction + repair",
          "Macrophage is the central cell of chronic inflammation",
          "Granuloma = collection of epithelioid cells (activated macrophages)",
          "Caseating granuloma = TB; Non-caseating granuloma = Sarcoidosis",
          "Langhans giant cell (peripheral nuclei) vs Foreign body giant cell (scattered nuclei)",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3: Chronic Inflammation", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 4: Chronic Inflammation", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "chronic-inflammation-mechanism",
        title: "Chronic Inflammation & Granuloma - Mechanism",
        estimatedMinutes: 30,
        summary: "Molecular mechanisms of macrophage activation, granuloma formation, and the role of T helper cells in orchestrating the granulomatous response.",
        contentMd: `# Mechanisms

## Macrophage Activation Pathways
| Pathway | Stimulus | Function | Alias |
|---------|----------|----------|-------|
| Classical (M1) | IFN-gamma, LPS | Microbicidal, pro-inflammatory, ROS, NO | "Killer macrophage" |
| Alternative (M2) | IL-4, IL-13 | Anti-inflammatory, tissue repair, fibrosis | "Repair macrophage" |

## Granuloma Formation Sequence
1. Macrophages encounter persistent antigen (cannot digest fully)
2. Macrophages process and present antigen to **CD4+ T cells**
3. T cells secrete **IFN-gamma** (key cytokine)
4. IFN-gamma activates macrophages -> transform into **epithelioid cells**
5. Epithelioid cells fuse -> **multinucleated giant cells**
6. T lymphocytes surround the aggregate -> granuloma formed
7. Fibroblasts may form an outer fibrous capsule

## Role of Cytokines
| Cytokine | Source | Action |
|----------|--------|--------|
| IFN-gamma | Th1 cells, NK cells | Macrophage activation (most important) |
| TNF-alpha | Macrophages | Recruitment, granuloma maintenance |
| IL-12 | Macrophages | Drives Th1 differentiation |
| IL-2 | Th1 cells | T cell proliferation |

## Why TB Causes Caseating Necrosis
- Mycobacterial cell wall components (cord factor, LAM) are highly immunogenic
- Intense Th1 response -> massive macrophage activation
- Activated macrophages release TNF-alpha -> tissue damage
- Central necrosis occurs due to toxic products of activated macrophages
- **Type IV hypersensitivity** (delayed-type) is the key immunologic mechanism

## Diseases with Granulomatous Inflammation
| Disease | Granuloma Type | Special Feature |
|---------|---------------|----------------|
| TB | Caseating | Langhans giant cells, AFB+ |
| Leprosy | Varies | Tuberculoid: granulomas; Lepromatous: foamy macrophages |
| Sarcoidosis | Non-caseating | Asteroid bodies, Schaumann bodies |
| Crohn disease | Non-caseating | Transmural, skip lesions |
| Cat scratch disease | Stellate (star-shaped) necrosis | Bartonella henselae |
| Fungal (Histoplasma) | Caseating or non-caseating | Yeast forms inside macrophages |

> **Clinical Pearl**: In India, every caseating granuloma should be presumed TB until proven otherwise. Sarcoidosis is relatively less common but increasingly recognized, especially in south Indian populations.`,
        mnemonics: [
          { text: "IFN-gamma is the GRANULOMA MAKER", explanation: "IFN-gamma from Th1 cells is the single most important cytokine for macrophage activation and granuloma formation" },
          { text: "ScASS bodies in Sarcoidosis: Schaumann and Asteroid", explanation: "Schaumann bodies (concentric calcified) and Asteroid bodies (star-shaped) are found in sarcoidosis granulomas (not pathognomonic but characteristic)" },
        ],
        keyPoints: [
          "IFN-gamma from Th1 cells is the key cytokine for granuloma formation",
          "M1 macrophages are pro-inflammatory; M2 are anti-inflammatory and repair-oriented",
          "TB granulomas result from Type IV (delayed-type) hypersensitivity",
          "Sarcoidosis has non-caseating granulomas with Asteroid and Schaumann bodies",
          "TNF-alpha is critical for granuloma maintenance (anti-TNF drugs reactivate TB)",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3: Granulomatous Inflammation", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 4: Granulomatous Inflammation", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "chronic-inflammation-clinical",
        title: "Chronic Inflammation & Granuloma - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical scenarios of granulomatous diseases in the Indian context with emphasis on TB, leprosy, and sarcoidosis.",
        contentMd: `# Clinical Applications

## Tuberculosis (Indian Context)
- India accounts for approximately 27% of global TB cases
- Pulmonary TB: Caseating granulomas in upper lobes, cavitation
- Miliary TB: Hematogenous spread -> tiny granulomas in all organs
- Diagnosis: AFB staining (Ziehl-Neelsen), culture (Lowenstein-Jensen), GeneXpert (CBNAAT)
- Histology: Caseating granuloma + Langhans giant cells + epithelioid cells

## Leprosy (Hansen Disease)
- Still prevalent in parts of India (Bihar, Jharkhand, UP, Chhattisgarh)
- **Tuberculoid**: Strong Th1 response -> well-formed granulomas, few bacilli, localized disease
- **Lepromatous**: Weak Th1 (strong Th2) -> foamy macrophages loaded with bacilli, diffuse disease
- **Lepromin test**: Positive in tuberculoid, Negative in lepromatous

## Sarcoidosis
- Non-caseating granulomas in multiple organs (lungs, lymph nodes, skin, eyes)
- Bilateral hilar lymphadenopathy on chest X-ray
- Elevated serum ACE levels, hypercalcemia
- **Kveim test**: Injection of sarcoid tissue extract -> granuloma at injection site (historical)
- More common in African Americans; increasingly diagnosed in India

## Anti-TNF Therapy and Granulomatous Disease
- TNF is essential for granuloma maintenance
- Anti-TNF drugs (Infliximab, Etanercept, Adalimumab) used in RA, IBD, psoriasis
- **Risk**: Reactivation of latent TB (granulomas break down)
- In India: mandatory TB screening (Mantoux + chest X-ray) before starting anti-TNF therapy

## Chronic Granulomatous Disease (CGD)
- X-linked recessive (most common) or autosomal recessive
- NADPH oxidase deficiency -> no respiratory burst
- Recurrent infections with **catalase-positive** organisms
- Organisms: S. aureus, Aspergillus, Serratia, Nocardia, Burkholderia
- Diagnosed by: **Nitroblue tetrazolium (NBT) test** or **Dihydrorhodamine (DHR) flow cytometry**

> **Clinical Pearl**: In India, any patient started on anti-TNF therapy must be screened for latent TB. Reactivation of TB is one of the most serious complications of anti-TNF treatment.`,
        mnemonics: [
          { text: "SANB for catalase-positive organisms in CGD", explanation: "Staphylococcus aureus, Aspergillus, Nocardia, Burkholderia (Serratia also important)" },
        ],
        keyPoints: [
          "India bears ~27% of the global TB burden",
          "Tuberculoid leprosy: strong immunity, few bacilli, granulomas; Lepromatous: weak immunity, many bacilli",
          "Anti-TNF therapy can reactivate latent TB - screening mandatory",
          "CGD: NADPH oxidase deficiency, catalase-positive organisms, NBT/DHR test",
          "Sarcoidosis: non-caseating granulomas, bilateral hilar LAP, elevated ACE",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 4", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "chronic-inflammation-exam",
        title: "Chronic Inflammation & Granuloma - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on granulomatous inflammation, giant cells, and granuloma-forming diseases.",
        contentMd: `# Exam Preparation

## One-Liners
- Central cell of chronic inflammation: **Macrophage**
- Key cytokine for granuloma formation: **IFN-gamma**
- Giant cell in TB: **Langhans** (peripheral horseshoe nuclei)
- Caseating granuloma is diagnostic of: **Tuberculosis**
- Non-caseating granuloma with bilateral hilar LAP: **Sarcoidosis**
- Schaumann bodies and Asteroid bodies: **Sarcoidosis**
- Stellate (star-shaped) microabscess in granuloma: **Cat scratch disease**
- Anti-TNF drugs can reactivate: **Latent TB**
- NBT test is used to diagnose: **Chronic Granulomatous Disease**
- Lepromatous leprosy shows: **Foamy macrophages (Virchow cells/lepra cells)**
- Tuberculoid leprosy shows: **Well-formed epithelioid granulomas**
- Type of hypersensitivity in TB: **Type IV (delayed-type)**

## Granuloma Comparison Table
| Disease | Necrosis | Giant Cell | Special Feature |
|---------|----------|-----------|-----------------|
| TB | Caseating | Langhans | AFB on ZN stain |
| Sarcoidosis | None | Langhans-like | Asteroid/Schaumann bodies |
| Crohn | None | Multinucleated | Transmural, skip lesions |
| Foreign body | None | Foreign body | Birefringent material |
| Fungal | Variable | Multinucleated | PAS/GMS positive organisms |

## Previous Year Themes
- Granuloma formation mechanism (IFN-gamma, Th1 response)
- Caseating vs non-caseating granuloma differential
- Giant cell types and associated diseases
- Leprosy spectrum (tuberculoid vs lepromatous)
- CGD pathogenesis and diagnosis`,
        mnemonics: [
          { text: "CASTLE for granulomatous diseases", explanation: "Cat scratch, Autoimmune (Crohn), Sarcoidosis, TB, Leprosy, Environment (silicosis, berylliosis)" },
        ],
        keyPoints: [
          "IFN-gamma is the key cytokine - asked repeatedly in exams",
          "Caseating = TB; Non-caseating = Sarcoidosis (most important differential)",
          "Langhans giant cell = peripheral horseshoe nuclei (TB granuloma)",
          "Type IV hypersensitivity underlies granuloma formation in TB",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3", edition: "10th" },
        ],
      },
      {
        layer: 5,
        slug: "chronic-inflammation-recall",
        title: "Chronic Inflammation & Granuloma - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on chronic inflammation and granulomatous diseases.",
        contentMd: `# Active Recall

**Q1:** What is the central cell of chronic inflammation?
> Macrophage (derived from blood monocytes)

**Q2:** Key cytokine for granuloma formation?
> IFN-gamma (from Th1 cells)

**Q3:** Caseating granuloma is characteristic of which disease?
> Tuberculosis

**Q4:** Non-caseating granuloma with bilateral hilar lymphadenopathy?
> Sarcoidosis

**Q5:** What type of giant cell is seen in TB?
> Langhans giant cell (nuclei arranged in peripheral horseshoe pattern)

**Q6:** What enzyme deficiency causes Chronic Granulomatous Disease?
> NADPH oxidase

**Q7:** What test diagnoses CGD?
> Nitroblue tetrazolium (NBT) test or Dihydrorhodamine (DHR) flow cytometry

**Q8:** Why must patients be screened for TB before anti-TNF therapy?
> TNF is essential for maintaining granulomas; anti-TNF can cause latent TB reactivation`,
        mnemonics: [],
        keyPoints: ["8 recall questions on granuloma types, cytokines, and clinical diseases"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3", edition: "10th" },
        ],
      },
    ],
  },

  // ─── Topic 5: Repair, Healing & Fibrosis ──────────────────────
  {
    topicCode: "PA-MOD-01-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "repair-healing-foundation",
        title: "Repair, Healing & Fibrosis - Foundation",
        estimatedMinutes: 20,
        summary: "Tissue repair occurs by regeneration (replacing damaged cells with same type) or by scar formation (fibrosis). The outcome depends on the type of cells damaged and the extent of injury.",
        contentMd: `# Repair, Healing & Fibrosis

## Cell Proliferative Capacity
| Category | Definition | Examples |
|----------|-----------|---------|
| **Labile** | Continuously dividing | Skin epidermis, GI epithelium, bone marrow |
| **Stable (Quiescent)** | G0 but can re-enter cycle | Hepatocytes, renal tubular cells, fibroblasts |
| **Permanent** | Cannot divide | Neurons, cardiac myocytes, skeletal muscle |

## Types of Repair
1. **Regeneration**: Replacement by identical cells (requires intact tissue framework)
2. **Scar formation (Fibrosis)**: Collagen deposition replacing damaged tissue

## Wound Healing Types
| Feature | Primary Intention | Secondary Intention |
|---------|------------------|-------------------|
| Wound edges | Approximated (surgical) | Separated (open wound) |
| Granulation tissue | Minimal | Abundant |
| Contraction | Minimal | Significant (myofibroblasts) |
| Scar size | Small, linear | Large |
| Time | Faster | Slower |
| Example | Surgical incision | Large burns, ulcers |

## Phases of Wound Healing
1. **Hemostasis** (minutes): Platelet plug, fibrin clot
2. **Inflammation** (1-3 days): Neutrophils then macrophages
3. **Proliferation** (3-21 days): Granulation tissue, angiogenesis, collagen
4. **Remodeling** (weeks-months): Collagen maturation, scar formation

## Granulation Tissue
- New blood vessels (angiogenesis) + fibroblasts + loose ECM
- Appears **pink, soft, granular**
- Key growth factors: VEGF (angiogenesis), FGF, PDGF, TGF-beta`,
        mnemonics: [
          { text: "LSP for cell types: Labile-Stable-Permanent", explanation: "Labile (always dividing), Stable (quiescent but can divide), Permanent (cannot divide)" },
          { text: "HIPR for healing phases", explanation: "Hemostasis, Inflammation, Proliferation, Remodeling" },
        ],
        keyPoints: [
          "Labile cells continuously divide; Permanent cells cannot regenerate",
          "Primary intention: clean surgical wound with approximated edges",
          "Secondary intention: large open wound with granulation tissue and contraction",
          "Granulation tissue = new vessels + fibroblasts + loose connective tissue",
          "VEGF is the key mediator of angiogenesis in wound healing",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3: Tissue Repair", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 5: Healing and Repair", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "repair-healing-mechanism",
        title: "Repair, Healing & Fibrosis - Mechanism",
        estimatedMinutes: 30,
        summary: "Molecular mechanisms of wound healing including growth factors, angiogenesis, collagen synthesis, and fibrosis pathways.",
        contentMd: `# Mechanisms of Repair

## Growth Factors in Healing
| Growth Factor | Source | Function |
|--------------|--------|----------|
| VEGF | Macrophages, keratinocytes | Angiogenesis (most important) |
| FGF | Macrophages, fibroblasts | Angiogenesis, fibroblast proliferation |
| PDGF | Platelets, macrophages | Fibroblast chemotaxis and proliferation |
| TGF-beta | Platelets, macrophages | Collagen synthesis, fibrosis (most important) |
| EGF | Platelets, macrophages | Epithelial cell proliferation |
| HGF | Mesenchymal cells | Hepatocyte regeneration |

## Angiogenesis Steps
1. Vasodilation and increased permeability (VEGF, NO)
2. Endothelial cell migration (sprouting)
3. Endothelial proliferation
4. Tube formation and maturation
5. Pericyte recruitment (stabilization)

## Collagen Synthesis Sequence
1. Transcription of collagen genes (stimulated by TGF-beta)
2. Translation on RER -> pro-alpha chains
3. Hydroxylation of proline and lysine (**requires Vitamin C**)
4. Glycosylation in Golgi
5. Triple helix formation (procollagen)
6. Secretion and cleavage of propeptides -> tropocollagen
7. Cross-linking by **lysyl oxidase** (requires copper)
8. Assembly into collagen fibrils and fibers

## Collagen Types
| Type | Location | Mnemonic |
|------|----------|----------|
| I | Bone, skin, tendon, dentin | "I = everywhere (most abundant)" |
| II | Cartilage, vitreous | "II = TWO eyes (vitreous), carTWOlage" |
| III | Blood vessels, reticulin, granulation tissue | "III = reticulin (3 letters RET)" |
| IV | Basement membrane | "IV = BM (floor/base)" |

## Fibrosis Mechanism
- Chronic injury -> persistent TGF-beta signaling
- TGF-beta activates fibroblasts -> myofibroblasts (alpha-SMA positive)
- Excessive collagen deposition -> fibrosis
- Examples: Cirrhosis (liver), Pulmonary fibrosis (lung), Keloid (skin)

## Wound Contraction
- Mediated by **myofibroblasts** (fibroblasts with smooth muscle actin)
- Most important in secondary intention healing
- Reduces wound size by 40-80%

> **Clinical Pearl**: Vitamin C deficiency (scurvy) impairs collagen synthesis by preventing hydroxylation of proline and lysine, leading to poor wound healing. This is still seen in malnourished populations in India.`,
        mnemonics: [
          { text: "TGF-beta = The Great Fibrosis factor", explanation: "TGF-beta is the single most important cytokine for fibrosis and collagen synthesis" },
          { text: "Vitamin C for Collagen Cross-linking precursor (hydroxylation)", explanation: "Vitamin C (ascorbic acid) is essential for hydroxylation of proline and lysine in collagen synthesis" },
        ],
        keyPoints: [
          "TGF-beta is the most important growth factor for fibrosis",
          "VEGF is the key mediator of angiogenesis",
          "Vitamin C is essential for collagen hydroxylation (scurvy = poor healing)",
          "Lysyl oxidase (copper-dependent) cross-links collagen",
          "Myofibroblasts mediate wound contraction in secondary intention healing",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3: Mechanisms of Tissue Repair", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 5", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "repair-healing-clinical",
        title: "Repair, Healing & Fibrosis - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical factors affecting wound healing, complications of wound healing, and pathologic scarring.",
        contentMd: `# Clinical Applications

## Factors Affecting Wound Healing
| Factor | Effect |
|--------|--------|
| **Infection** | Most common cause of delayed healing |
| **Diabetes mellitus** | Microangiopathy, neuropathy, impaired immunity |
| **Malnutrition** | Vitamin C deficiency (scurvy), protein deficiency |
| **Foreign bodies** | Sutures, glass, dirt -> chronic inflammation |
| **Blood supply** | Ischemia -> impaired oxygen delivery |
| **Steroids** | Inhibit collagen synthesis and inflammation |
| **Age** | Elderly: slower healing, less collagen |
| **Radiation** | Damages blood vessels and fibroblasts |

## Complications of Wound Healing
| Complication | Description |
|-------------|-------------|
| **Keloid** | Excessive collagen beyond wound margins; common in dark skin, earlobes, shoulders |
| **Hypertrophic scar** | Excessive collagen within wound margins |
| **Dehiscence** | Wound reopening (especially abdominal) |
| **Contracture** | Excessive contraction (especially burns -> deformity) |
| **Incisional hernia** | Weakness at surgical site |

## Keloid vs Hypertrophic Scar
| Feature | Keloid | Hypertrophic Scar |
|---------|--------|-------------------|
| Beyond wound margin | Yes | No |
| Recurrence after excision | Common | Rare |
| Common sites | Earlobes, shoulders, chest | Any site |
| Racial predilection | More in dark-skinned individuals | No predilection |
| Time course | Progressive | May regress |

## Fracture Healing (Bone Repair)
1. **Hematoma** (immediate): Blood clot at fracture site
2. **Soft callus** (1-2 weeks): Procallus with cartilage + granulation tissue
3. **Hard callus** (2-6 weeks): Woven bone replaces cartilage
4. **Remodeling** (months-years): Woven bone -> lamellar bone

## Indian Clinical Context
- Diabetic foot ulcers: Major cause of morbidity; impaired healing due to neuropathy + microangiopathy
- Malnutrition-related poor healing: Protein-calorie malnutrition in rural India affects surgical outcomes
- Burns: Contractures are common complications of poorly managed burns -> deformity

> **Clinical Pearl**: In India, diabetic foot ulcers are one of the most common reasons for non-traumatic lower limb amputation. Optimal glycemic control and proper wound care are essential.`,
        mnemonics: [
          { text: "Keloid KILLS margins (extends beyond); Hypertrophic HOLDS within", explanation: "Keloid extends beyond wound margins; Hypertrophic scar stays within wound margins" },
        ],
        keyPoints: [
          "Infection is the most common cause of delayed wound healing",
          "Keloid extends beyond wound margins; Hypertrophic scar stays within",
          "Diabetes impairs healing via microangiopathy, neuropathy, and immune dysfunction",
          "Vitamin C deficiency causes poor collagen synthesis -> scurvy",
          "Fracture healing: Hematoma -> Soft callus -> Hard callus -> Remodeling",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3: Wound Healing Complications", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 5", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "repair-healing-exam",
        title: "Repair, Healing & Fibrosis - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on wound healing, collagen types, and growth factors.",
        contentMd: `# Exam Preparation

## One-Liners
- Most common cause of delayed healing: **Infection**
- Growth factor for angiogenesis: **VEGF**
- Growth factor for fibrosis: **TGF-beta**
- Vitamin required for collagen hydroxylation: **Vitamin C**
- Metal required for collagen cross-linking: **Copper (lysyl oxidase)**
- Cell mediating wound contraction: **Myofibroblast**
- Most abundant collagen in body: **Type I**
- Collagen in basement membrane: **Type IV**
- Collagen in granulation tissue: **Type III**
- Scar that extends beyond wound margins: **Keloid**
- Tensile strength of wound at 3 months: **80% of normal** (maximum)
- Cell type in permanent category: **Neurons, cardiac myocytes**

## Collagen Deficiency Diseases
| Disease | Defect |
|---------|--------|
| Scurvy | Vitamin C deficiency -> impaired hydroxylation |
| Osteogenesis imperfecta | Type I collagen defect |
| Ehlers-Danlos syndrome | Various collagen defects (III, V most common) |
| Alport syndrome | Type IV collagen defect (basement membrane) |
| Menkes disease | Copper deficiency -> lysyl oxidase impaired |

## Previous Year Themes
- Phases of wound healing
- Primary vs Secondary intention
- Collagen types and associated diseases
- Growth factors in healing (VEGF, TGF-beta, PDGF)
- Keloid vs hypertrophic scar`,
        mnemonics: [
          { text: "COCA for collagen synthesis requirements", explanation: "CO = COpper (cross-linking by lysyl oxidase), CA = vitamin C + Ascorbic acid (hydroxylation)" },
        ],
        keyPoints: [
          "Infection is the most common cause of poor wound healing",
          "Type I collagen is the most abundant; Type IV is in basement membranes",
          "Wound reaches maximum 80% tensile strength (never 100%)",
          "TGF-beta is the master regulator of fibrosis",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3", edition: "10th" },
        ],
      },
      {
        layer: 5,
        slug: "repair-healing-recall",
        title: "Repair, Healing & Fibrosis - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A on wound healing and fibrosis.",
        contentMd: `# Active Recall

**Q1:** Name the 3 categories of cells by proliferative capacity.
> Labile (continuously dividing), Stable (quiescent, can re-enter cycle), Permanent (cannot divide)

**Q2:** Key growth factor for angiogenesis?
> VEGF (Vascular Endothelial Growth Factor)

**Q3:** Key growth factor for fibrosis?
> TGF-beta

**Q4:** What vitamin is essential for collagen hydroxylation?
> Vitamin C (ascorbic acid)

**Q5:** What is the difference between keloid and hypertrophic scar?
> Keloid extends beyond wound margins and recurs; Hypertrophic scar stays within margins

**Q6:** What cell mediates wound contraction?
> Myofibroblast (fibroblast with alpha-smooth muscle actin)

**Q7:** Maximum tensile strength of a healed wound?
> 80% of original (never reaches 100%)

**Q8:** What type of collagen is found in basement membranes?
> Type IV collagen`,
        mnemonics: [],
        keyPoints: ["8 recall questions on healing phases, collagen, and growth factors"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 3", edition: "10th" },
        ],
      },
    ],
  },

  // ─── Topic 6: Hemodynamic Disorders ────────────────────────────
  {
    topicCode: "PA-MOD-01-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "hemodynamic-disorders-foundation",
        title: "Hemodynamic Disorders - Foundation",
        estimatedMinutes: 20,
        summary: "Hemodynamic disorders include edema, thrombosis, embolism, infarction, and shock. Understanding Virchow's triad is fundamental to thrombosis.",
        contentMd: `# Hemodynamic Disorders

## Edema
Accumulation of excess fluid in interstitial spaces or body cavities.

### Types
| Type | Mechanism | Example |
|------|-----------|---------|
| Transudate | Increased hydrostatic or decreased oncotic pressure | CHF, cirrhosis, nephrotic syndrome |
| Exudate | Increased vascular permeability (inflammation) | Infections, burns |

### Causes of Edema
- **Increased hydrostatic pressure**: CHF, DVT, portal hypertension
- **Decreased plasma oncotic pressure**: Nephrotic syndrome, liver cirrhosis, malnutrition (kwashiorkor)
- **Lymphatic obstruction**: Filariasis (elephantiasis), post-surgical
- **Sodium/water retention**: Renal failure
- **Increased permeability**: Inflammation, burns, allergic reactions

## Thrombosis
Formation of a blood clot (thrombus) within the vascular system during life.

### Virchow's Triad
1. **Endothelial injury** (most important): Atherosclerosis, vasculitis, trauma
2. **Abnormal blood flow** (stasis/turbulence): Immobilization, atrial fibrillation, aneurysm
3. **Hypercoagulability**: Factor V Leiden, antiphospholipid syndrome, cancer

## Embolism
Detached intravascular mass carried by blood to a distant site.
- **Pulmonary embolism**: Most common (95% from DVT of lower limbs)
- **Systemic embolism**: From left heart (80%), aorta
- **Fat embolism**: Long bone fractures
- **Air embolism**: Surgical/trauma
- **Amniotic fluid embolism**: Obstetric emergency (DIC)

## Infarction
Area of ischemic necrosis due to occlusion of blood supply.
| Type | Mechanism | Example |
|------|-----------|---------|
| White (anemic) | End-artery occlusion in solid organs | Heart, kidney, spleen |
| Red (hemorrhagic) | Venous occlusion OR dual blood supply | Lung, intestine, ovarian torsion |

## Shock
Systemic hypoperfusion due to reduced cardiac output or blood volume.`,
        mnemonics: [
          { text: "Virchow's Triad = EHS", explanation: "Endothelial injury, Hypercoagulability, Stasis (3 factors predisposing to thrombosis)" },
          { text: "WHITE infarct in SOLID organs; RED infarct in LOOSE/dual-supply organs", explanation: "White = heart, kidney, spleen (end arteries, solid); Red = lung, intestine (dual supply, loose tissue)" },
        ],
        keyPoints: [
          "Virchow's triad: Endothelial injury, Stasis, Hypercoagulability",
          "95% of pulmonary emboli originate from DVT in lower limbs",
          "White infarcts in solid organs with end arteries; Red infarcts in dual-supply organs",
          "Edema: transudate (hemodynamic) vs exudate (inflammatory)",
          "Filariasis causing lymphatic obstruction is a common cause of lymphedema in India",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 4: Hemodynamic Disorders", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 6: Hemodynamic Disorders", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "hemodynamic-disorders-mechanism",
        title: "Hemodynamic Disorders - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms of thrombosis, coagulation cascade, types of shock, and DIC pathogenesis.",
        contentMd: `# Mechanisms

## Thrombosis: Formation and Fate
### Lines of Zahn
- Alternating layers of platelets/fibrin (pale) and RBCs (dark)
- Distinguishes ante-mortem thrombus from post-mortem clot
- Post-mortem clot: chicken-fat (upper) and currant-jelly (lower) layers

### Fate of Thrombus
1. **Propagation**: Thrombus grows
2. **Embolization**: Part breaks off
3. **Dissolution**: Fibrinolysis (plasmin)
4. **Organization & Recanalization**: Ingrowth of tissue -> new channels

## Hypercoagulable States
| Primary (Genetic) | Secondary (Acquired) |
|-------------------|---------------------|
| Factor V Leiden (most common) | Immobilization, surgery |
| Prothrombin G20210A mutation | Oral contraceptives |
| Antithrombin III deficiency | Pregnancy |
| Protein C/S deficiency | Cancer (Trousseau syndrome) |
| | Antiphospholipid syndrome |
| | Nephrotic syndrome (AT-III loss) |

## Types of Shock
| Type | Mechanism | Example |
|------|-----------|---------|
| **Cardiogenic** | Pump failure | MI, tamponade |
| **Hypovolemic** | Volume loss | Hemorrhage, burns, dehydration |
| **Septic** | Vasodilation + endothelial injury | Gram-negative sepsis (most common) |
| **Neurogenic** | Loss of vascular tone | Spinal cord injury, anesthesia |
| **Anaphylactic** | IgE-mediated vasodilation | Drug allergy, insect sting |

## Stages of Shock
1. **Non-progressive (compensated)**: Baroreceptor reflexes, tachycardia, vasoconstriction
2. **Progressive**: Tissue hypoxia, lactic acidosis, organ dysfunction
3. **Irreversible**: Organ failure, DIC, death

## DIC (Disseminated Intravascular Coagulation)
- Pathologic activation of coagulation cascade -> widespread microthrombi
- Simultaneous consumption of clotting factors and platelets -> bleeding
- Causes: Sepsis, obstetric complications (abruptio placentae, amniotic fluid embolism), cancer (acute promyelocytic leukemia), massive trauma
- Lab: Increased PT/aPTT, decreased platelets, decreased fibrinogen, increased D-dimer, schistocytes on smear

> **Clinical Pearl**: In India, obstetric causes of DIC (abruptio placentae, eclampsia, septic abortion) are particularly common due to delayed obstetric care in rural areas.`,
        mnemonics: [
          { text: "Factor V Leiden = FIVE = First (most common hereditary thrombophilia)", explanation: "Factor V Leiden is the most common inherited cause of hypercoagulability" },
          { text: "DIC = Death Is Coming (or Disseminated Intravascular Coagulation)", explanation: "DIC has high mortality; characterized by simultaneous clotting AND bleeding" },
        ],
        keyPoints: [
          "Lines of Zahn distinguish ante-mortem thrombus from post-mortem clot",
          "Factor V Leiden is the most common hereditary hypercoagulable state",
          "Septic shock is the most common type of shock in hospitalized patients",
          "DIC: paradox of simultaneous clotting and bleeding",
          "D-dimer is the most important lab marker for DIC and PE",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 4: Thrombosis and Shock", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 6", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "hemodynamic-disorders-clinical",
        title: "Hemodynamic Disorders - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical presentations of DVT, PE, shock management, and DIC in Indian clinical settings.",
        contentMd: `# Clinical Applications

## Deep Vein Thrombosis (DVT)
- Most common in deep veins of lower limb (femoral, popliteal, iliac)
- Risk factors: Surgery, immobilization, OCP, pregnancy, cancer
- Clinical: Unilateral leg swelling, pain, warmth, Homans sign (unreliable)
- Diagnosis: D-dimer + Doppler ultrasound
- Complication: **Pulmonary embolism** (most feared)

## Pulmonary Embolism (PE)
- 95% from DVT of lower limbs
- **Saddle embolus**: Lodges at bifurcation of pulmonary artery -> sudden death
- Small emboli: May be silent or cause pulmonary infarction
- Multiple small emboli: Pulmonary hypertension over time
- Diagnosis: CT pulmonary angiography (CTPA), D-dimer
- Treatment: Anticoagulation (heparin -> warfarin), thrombolysis for massive PE

## Shock in Clinical Practice
### Septic Shock (Indian Context)
- Most common cause of death in ICU
- Common sources: Urinary tract, lungs (pneumonia), abdomen, skin/soft tissue
- Gram-negative organisms: E. coli, Klebsiella (endotoxin/LPS)
- Pathogenesis: LPS -> TLR4 -> NF-kB -> TNF, IL-1 -> vasodilation + DIC
- Management: Fluids, antibiotics, vasopressors (norepinephrine)

### Hemorrhagic Shock
- Common in India: Road traffic accidents, obstetric hemorrhage
- Classification by blood loss: Class I (<15%), II (15-30%), III (30-40%), IV (>40%)

## Amniotic Fluid Embolism
- Rare but devastating obstetric emergency
- Entry of amniotic fluid into maternal circulation during labor
- Triggers DIC, respiratory distress, cardiovascular collapse
- High mortality (up to 80%)
- Squamous cells and fetal debris found in pulmonary vasculature on autopsy

> **Clinical Pearl**: In Indian obstetric practice, DIC from abruptio placentae and eclampsia remains a leading cause of maternal mortality. Early recognition and aggressive blood product replacement are life-saving.`,
        mnemonics: [
          { text: "Saddle PE Sits at the Split (bifurcation of PA)", explanation: "A saddle embolus straddles the bifurcation of the main pulmonary artery and can cause sudden death" },
        ],
        keyPoints: [
          "95% of pulmonary emboli come from DVT of lower limbs",
          "Saddle embolus at PA bifurcation causes sudden death",
          "Septic shock: Gram-negative LPS -> TLR4 -> cytokine storm",
          "DIC in obstetric emergencies is a leading cause of maternal death in India",
          "CT pulmonary angiography is the gold standard for PE diagnosis",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 4", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 6", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "hemodynamic-disorders-exam",
        title: "Hemodynamic Disorders - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield points on thrombosis, embolism, infarction, and shock for NEXT/NEET PG.",
        contentMd: `# Exam Preparation

## One-Liners
- Most important factor in Virchow's triad: **Endothelial injury**
- Most common site of DVT: **Deep veins of lower limb**
- Most common source of PE: **DVT of lower limb (95%)**
- Lines of Zahn indicate: **Ante-mortem thrombus**
- Most common inherited thrombophilia: **Factor V Leiden**
- White (pale) infarct organs: **Heart, kidney, spleen**
- Red (hemorrhagic) infarct organs: **Lung, intestine**
- Most common type of shock in hospitals: **Septic shock**
- Endotoxin in septic shock acts via: **TLR4**
- Best marker for DIC: **D-dimer (elevated), fibrinogen (decreased)**
- Schistocytes on blood smear suggest: **DIC / microangiopathic hemolytic anemia**
- Trousseau syndrome: **Migratory thrombophlebitis in cancer** (especially pancreatic)
- Fat embolism classic triad: **Respiratory distress + Petechiae + Neurologic symptoms**

## Shock Comparison
| Type | CO | SVR | CVP |
|------|-----|-----|-----|
| Cardiogenic | Down | Up | Up |
| Hypovolemic | Down | Up | Down |
| Septic (early) | Up | Down | Down |
| Septic (late) | Down | Up | Variable |

## Previous Year Themes
- Virchow's triad components
- Types of infarction with examples
- DIC: causes, lab findings, pathogenesis
- Types of shock and hemodynamic parameters
- Pulmonary embolism: sources and types`,
        mnemonics: [
          { text: "Trousseau = Thrombus Travels in Cancer", explanation: "Trousseau syndrome: migratory thrombophlebitis as paraneoplastic phenomenon, classically in pancreatic cancer" },
        ],
        keyPoints: [
          "Endothelial injury is the most important component of Virchow's triad",
          "Factor V Leiden is the most common inherited hypercoagulable state",
          "White infarcts in solid end-artery organs; Red infarcts in dual-supply organs",
          "DIC labs: increased D-dimer + PT/aPTT, decreased platelets + fibrinogen",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 4", edition: "10th" },
        ],
      },
      {
        layer: 5,
        slug: "hemodynamic-disorders-recall",
        title: "Hemodynamic Disorders - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A on hemodynamic disorders.",
        contentMd: `# Active Recall

**Q1:** What are the 3 components of Virchow's triad?
> Endothelial injury, Abnormal blood flow (stasis/turbulence), Hypercoagulability

**Q2:** What are Lines of Zahn?
> Alternating pale (platelet/fibrin) and dark (RBC) layers in ante-mortem thrombus

**Q3:** Most common inherited thrombophilia?
> Factor V Leiden

**Q4:** Which organs have white (pale) infarcts?
> Heart, kidney, spleen (solid organs with end arteries)

**Q5:** What is the most common source of pulmonary emboli?
> DVT of deep veins of lower limb (95%)

**Q6:** What lab findings characterize DIC?
> Elevated D-dimer, elevated PT/aPTT, decreased platelets, decreased fibrinogen, schistocytes

**Q7:** What is Trousseau syndrome?
> Migratory thrombophlebitis as a paraneoplastic syndrome (classically pancreatic cancer)

**Q8:** Name the classic triad of fat embolism.
> Respiratory distress + Petechiae (skin) + Neurologic symptoms (confusion)`,
        mnemonics: [],
        keyPoints: ["8 recall questions on thrombosis, embolism, infarction, and shock"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 4", edition: "10th" },
        ],
      },
    ],
  },

  // ─── Topic 7: Amyloidosis & Calcification ─────────────────────
  {
    topicCode: "PA-MOD-01-TOP-07",
    layers: [
      {
        layer: 1,
        slug: "amyloidosis-calcification-foundation",
        title: "Amyloidosis & Calcification - Foundation",
        estimatedMinutes: 20,
        summary: "Amyloidosis is the extracellular deposition of misfolded proteins in a beta-pleated sheet configuration. Pathologic calcification includes dystrophic and metastatic types.",
        contentMd: `# Amyloidosis & Calcification

## Amyloidosis
### Definition
Extracellular deposition of abnormal fibrillar proteins arranged in **beta-pleated sheet** configuration.

### Diagnosis
- **Congo Red stain**: Amyloid appears salmon pink
- **Polarized light**: Apple-green birefringence (pathognomonic)
- Electron microscopy: Non-branching fibrils (7.5-10 nm)

### Types of Amyloid Protein
| Protein | Precursor | Associated Disease |
|---------|-----------|-------------------|
| AL (Amyloid Light chain) | Ig light chains | Multiple myeloma, primary amyloidosis |
| AA (Amyloid Associated) | SAA (serum amyloid A) | Secondary/reactive amyloidosis (chronic inflammation) |
| ATTR | Transthyretin | Familial amyloid polyneuropathy, senile cardiac |
| A-beta | APP (amyloid precursor protein) | Alzheimer disease |
| A-beta-2M | Beta-2 microglobulin | Hemodialysis-associated amyloidosis |

### Classification
| Type | Cause | Amyloid Protein |
|------|-------|----------------|
| Primary (AL) | Plasma cell dyscrasias | AL (light chain) |
| Secondary (AA) | Chronic inflammation (TB, RA, leprosy) | AA |
| Hereditary | Genetic mutations | ATTR (most common) |
| Senile | Aging | ATTR (wild-type) |
| Dialysis-related | Long-term hemodialysis | A-beta-2M |

## Pathologic Calcification
| Type | Calcium Level | Tissue State | Examples |
|------|--------------|-------------|----------|
| **Dystrophic** | Normal | Dead/damaged tissue | Atheroma, damaged heart valves, caseous TB, fat necrosis |
| **Metastatic** | Elevated (hypercalcemia) | Normal tissue | Hyperparathyroidism, renal failure, vitamin D excess |`,
        mnemonics: [
          { text: "Congo Red + Apple Green = Amyloid Seen", explanation: "Congo Red stain gives salmon pink; under polarized light shows apple-green birefringence - pathognomonic for amyloid" },
          { text: "AL = Light chain (myeloma); AA = inflammation (secondary)", explanation: "AL amyloidosis is from immunoglobulin light chains (plasma cell tumors); AA is from SAA protein (chronic inflammation)" },
        ],
        keyPoints: [
          "Amyloid = beta-pleated sheet protein; diagnosed by Congo Red with apple-green birefringence",
          "AL type: from light chains in myeloma; AA type: from SAA in chronic inflammation",
          "Secondary amyloidosis (AA) in India commonly from TB, leprosy, RA",
          "Dystrophic calcification: normal calcium, dead tissue; Metastatic: high calcium, normal tissue",
          "A-beta amyloid in Alzheimer disease; ATTR in familial and senile amyloidosis",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 6: Amyloidosis", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 3: Amyloidosis", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "amyloidosis-calcification-mechanism",
        title: "Amyloidosis & Calcification - Mechanism",
        estimatedMinutes: 30,
        summary: "Mechanisms of amyloid deposition, organ involvement patterns, and pathogenesis of dystrophic and metastatic calcification.",
        contentMd: `# Mechanisms

## Amyloid Formation
1. Normal protein misfolds into **beta-pleated sheet** conformation
2. Misfolded proteins aggregate into **insoluble fibrils**
3. Fibrils deposit extracellularly in tissues
4. Tissue architecture disrupted -> organ dysfunction

## Organ Involvement by Type
### AL Amyloidosis (Primary)
- **Heart** (restrictive cardiomyopathy) - most common cause of death
- **Kidney** (nephrotic syndrome)
- **Liver** (hepatomegaly)
- **Tongue** (macroglossia - characteristic)
- **Peripheral nerves** (neuropathy)

### AA Amyloidosis (Secondary)
- **Kidney** (most commonly affected) -> nephrotic syndrome -> renal failure
- **Liver** and **Spleen**
- Heart involvement is rare (distinguishes from AL)
- Common causes in India: TB, leprosy, rheumatoid arthritis, chronic osteomyelitis

### Organ Patterns
| Organ | AL | AA | Key Finding |
|-------|----|----|-------------|
| Kidney | Yes | Yes (most important) | Nephrotic syndrome |
| Heart | Yes (common) | Rare | Restrictive cardiomyopathy |
| Tongue | Yes (macroglossia) | No | Enlarged, firm tongue |
| Liver | Yes | Yes | Hepatomegaly |
| Spleen | Less | Yes | Sago spleen / Lardaceous spleen |

### Spleen Patterns
- **Sago spleen**: Amyloid in splenic follicles (looks like sago grains)
- **Lardaceous (diffuse) spleen**: Diffuse involvement, waxy appearance

## Dystrophic Calcification Mechanism
- Dead/dying tissue provides nidus for calcium deposition
- Starts in mitochondria of dead cells (calcium accumulation)
- Serum calcium is NORMAL
- Examples: Atherosclerotic plaque, TB caseous lesion, psammoma bodies

## Metastatic Calcification Mechanism
- **Hypercalcemia** causes calcium deposition in normal tissues
- Preferentially affects tissues with internal alkaline compartments:
  - Lungs (CO2 loss), Kidneys (acid secretion), Gastric mucosa (HCl secretion), Blood vessels
- Causes of hypercalcemia: Hyperparathyroidism, bone metastases, vitamin D excess, sarcoidosis, renal failure

## Psammoma Bodies
- Laminated concentric calcified structures
- Found in: **P**apillary thyroid carcinoma, **P**apillary renal cell carcinoma, **P**sammomatous meningioma, **P**apillary serous cystadenocarcinoma of ovary

> **Clinical Pearl**: In India, secondary (AA) amyloidosis from chronic TB and leprosy remains clinically significant, presenting as nephrotic syndrome in a patient with long-standing chronic infection.`,
        mnemonics: [
          { text: "Psammoma bodies = 4 Ps", explanation: "Papillary thyroid CA, Papillary renal cell CA, Psammomatous meningioma, Papillary serous cystadenoCA of ovary" },
          { text: "LEGS for metastatic calcification sites", explanation: "Lungs, (E) vessels (elastic tissue), Gastric mucosa, (S) kidneys (tubular secretion) - tissues with alkaline milieu" },
        ],
        keyPoints: [
          "AL amyloidosis: heart involvement common, macroglossia characteristic",
          "AA amyloidosis: kidney is the most commonly affected organ, heart spared",
          "Sago spleen = amyloid in follicles; Lardaceous = diffuse splenic amyloid",
          "Psammoma bodies in papillary carcinomas, meningioma, and ovarian serous tumor",
          "Metastatic calcification occurs in tissues with alkaline internal pH",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 6: Amyloidosis", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 3", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "amyloidosis-calcification-clinical",
        title: "Amyloidosis & Calcification - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis and management of amyloidosis with Indian clinical context.",
        contentMd: `# Clinical Applications

## Clinical Presentation of Amyloidosis
### Renal Amyloidosis
- Most common manifestation of AA amyloidosis
- Progressive proteinuria -> nephrotic syndrome -> renal failure
- Kidney may be enlarged (early) or shrunken (late)
- Amyloid deposits in mesangium and glomerular basement membrane

### Cardiac Amyloidosis
- Restrictive cardiomyopathy (stiff, non-compliant heart)
- Low-voltage QRS on ECG (despite thick walls on echo - paradox)
- Heart failure with preserved ejection fraction initially
- "Sparkling" or "granular" appearance on echocardiography

### Macroglossia
- Enlarged, firm tongue - characteristic of AL amyloidosis
- Can cause difficulty swallowing and sleep apnea

## Diagnosis
- **Tissue biopsy** with Congo Red staining is gold standard
- Common biopsy sites: **Rectal biopsy**, **Abdominal fat pad aspirate** (less invasive)
- Kidney biopsy for renal involvement
- Serum free light chain assay for AL type

## Indian Clinical Context
- **TB-related AA amyloidosis**: Long-standing pulmonary or extrapulmonary TB
- **Leprosy-related amyloidosis**: Especially lepromatous type
- **Chronic osteomyelitis**: Still common in rural India -> secondary amyloidosis
- Presentation: Young patient with chronic infection + nephrotic syndrome -> suspect AA amyloidosis

## Calcification: Clinical Relevance
- **Monckeberg medial sclerosis**: Calcification of media of muscular arteries (pipestem arteries); does NOT narrow lumen
- **Atherosclerotic calcification**: Calcification of intima; narrows lumen
- **Mitral annular calcification**: Common in elderly, seen on echocardiography
- **Dystrophic calcification in TB**: Calcified hilar lymph nodes (Ghon complex) on chest X-ray

> **Clinical Pearl**: A young Indian patient with chronic TB or leprosy presenting with progressive edema and proteinuria should raise suspicion for secondary (AA) amyloidosis with renal involvement. Rectal biopsy or abdominal fat pad aspirate can confirm diagnosis.`,
        mnemonics: [],
        keyPoints: [
          "Rectal biopsy and abdominal fat pad aspirate are common sites for amyloid diagnosis",
          "Cardiac amyloidosis: low-voltage ECG + thick walls on echo = diagnostic paradox",
          "AA amyloidosis in India: suspect in chronic TB/leprosy patients with nephrotic syndrome",
          "Monckeberg sclerosis: medial calcification, does NOT narrow lumen",
          "Ghon complex: calcified primary TB lesion in lung + hilar lymph node",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 6", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 3", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "amyloidosis-calcification-exam",
        title: "Amyloidosis & Calcification - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on amyloidosis and pathologic calcification.",
        contentMd: `# Exam Preparation

## One-Liners
- Stain for amyloid: **Congo Red** (apple-green birefringence under polarized light)
- AL amyloid protein: **Immunoglobulin light chains**
- AA amyloid protein: **Serum amyloid A (SAA)**
- Most common organ affected in AA amyloidosis: **Kidney**
- Characteristic of AL amyloidosis: **Macroglossia**
- Sago spleen: **Amyloid in splenic follicles**
- Cardiac amyloidosis ECG paradox: **Low voltage despite thick walls**
- Biopsy site for amyloidosis: **Rectal biopsy / Abdominal fat pad aspirate**
- Dystrophic calcification: **Normal calcium, dead tissue**
- Metastatic calcification: **High calcium, normal tissue**
- Psammoma bodies found in: **Papillary thyroid CA, Meningioma, Ovarian serous tumor**
- Amyloid in Alzheimer disease: **A-beta (from APP)**
- Dialysis-associated amyloid: **Beta-2 microglobulin**

## Comparison: AL vs AA Amyloidosis
| Feature | AL (Primary) | AA (Secondary) |
|---------|-------------|----------------|
| Protein | Light chains | SAA |
| Cause | Myeloma, plasma cell disorders | Chronic inflammation (TB, RA) |
| Heart | Commonly involved | Rarely involved |
| Kidney | Involved | Most commonly involved |
| Macroglossia | Characteristic | Not seen |

## Previous Year Themes
- Congo Red staining and birefringence
- AL vs AA amyloidosis differences
- Organ involvement patterns
- Dystrophic vs metastatic calcification
- Psammoma bodies`,
        mnemonics: [
          { text: "AL = Always think Light chains and myeloma; AA = Always think chronic inflAmmAtion", explanation: "Quick way to remember the two most common forms of amyloidosis" },
        ],
        keyPoints: [
          "Congo Red with apple-green birefringence is the gold standard for amyloid",
          "AL: light chains, myeloma, cardiac involvement, macroglossia",
          "AA: SAA protein, chronic inflammation (TB/leprosy in India), renal involvement",
          "Dystrophic = normal Ca + dead tissue; Metastatic = high Ca + normal tissue",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 6", edition: "10th" },
        ],
      },
      {
        layer: 5,
        slug: "amyloidosis-calcification-recall",
        title: "Amyloidosis & Calcification - Active Recall",
        estimatedMinutes: 10,
        summary: "Self-test flashcards on amyloidosis and calcification.",
        contentMd: `# Active Recall

**Q1:** What stain is used for amyloid and what does it show under polarized light?
> Congo Red stain; shows apple-green birefringence under polarized light

**Q2:** What protein is deposited in AL amyloidosis?
> Immunoglobulin light chains (from plasma cell neoplasms)

**Q3:** Most common organ affected in AA amyloidosis?
> Kidney (nephrotic syndrome -> renal failure)

**Q4:** What is the difference between dystrophic and metastatic calcification?
> Dystrophic: normal calcium, dead tissue. Metastatic: high calcium, normal tissue.

**Q5:** What are psammoma bodies and where are they found?
> Laminated concentric calcified structures; Papillary thyroid CA, Meningioma, Ovarian serous tumor

**Q6:** What is a sago spleen?
> Spleen with amyloid deposition limited to splenic follicles (small translucent nodules)

**Q7:** Name the amyloid protein in Alzheimer disease.
> A-beta (derived from amyloid precursor protein/APP)

**Q8:** What causes amyloidosis in long-term hemodialysis patients?
> Beta-2 microglobulin accumulation (not cleared by dialysis membranes)`,
        mnemonics: [],
        keyPoints: ["8 recall questions on amyloid types, staining, and calcification"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 6", edition: "10th" },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PA-MOD-02: NEOPLASIA
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: Neoplasia: Nomenclature & Classification ────────
  {
    topicCode: "PA-MOD-02-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "neoplasia-nomenclature-foundation",
        title: "Neoplasia: Nomenclature & Classification - Foundation",
        estimatedMinutes: 20,
        summary: "A neoplasm is an abnormal mass of tissue whose growth exceeds and is uncoordinated with normal tissue. Tumors are classified as benign or malignant based on differentiation, growth rate, invasion, and metastasis.",
        contentMd: `# Neoplasia: Nomenclature & Classification

## Definition
**Neoplasia** = "new growth." A neoplasm is a mass that grows autonomously, exceeding normal controls, and persists after the initiating stimulus is removed.

## Nomenclature Rules
### Benign Tumors
- Suffix: **-oma**
- Examples: Fibroma, lipoma, chondroma, adenoma, papilloma

### Malignant Tumors
| Tissue Origin | Benign | Malignant |
|--------------|--------|-----------|
| Epithelial (squamous) | Squamous papilloma | Squamous cell carcinoma |
| Epithelial (glandular) | Adenoma | Adenocarcinoma |
| Connective tissue (fibrous) | Fibroma | Fibrosarcoma |
| Connective tissue (bone) | Osteoma | Osteosarcoma |
| Connective tissue (cartilage) | Chondroma | Chondrosarcoma |
| Connective tissue (fat) | Lipoma | Liposarcoma |
| Smooth muscle | Leiomyoma | Leiomyosarcoma |
| Skeletal muscle | Rhabdomyoma | Rhabdomyosarcoma |
| Blood vessels | Hemangioma | Angiosarcoma |

### Exceptions to Naming Rules
| Tumor Name | Type | Notes |
|-----------|------|-------|
| Lymphoma | Malignant | Not benign despite -oma suffix |
| Melanoma | Malignant | Not benign |
| Mesothelioma | Malignant | Not benign |
| Seminoma | Malignant | Testicular |
| Hepatoblastoma | Malignant | Childhood liver |
| Teratoma | Can be benign or malignant | Germ cell origin |

## Benign vs Malignant
| Feature | Benign | Malignant |
|---------|--------|-----------|
| Differentiation | Well-differentiated | Variable (well to undifferentiated) |
| Growth rate | Slow | Fast (but variable) |
| Capsule | Usually encapsulated | Rarely encapsulated |
| Invasion | No local invasion | Invades surrounding tissue |
| Metastasis | Never | Frequently |
| Necrosis | Rare | Common |
| Mitoses | Few, normal | Many, abnormal |`,
        mnemonics: [
          { text: "CALM exceptions: Carcinoma-like names that are malignant despite -oma", explanation: "Lymphoma, Melanoma, Mesothelioma, Seminoma, Hepatoma - all malignant despite -oma ending" },
          { text: "Sarcoma = meSOdermal; Carcinoma = eCtodermal/eNdodermal", explanation: "Sarcomas arise from mesenchymal (connective) tissue; Carcinomas from epithelial tissue" },
        ],
        keyPoints: [
          "Benign tumors end in -oma; Malignant epithelial = carcinoma, mesenchymal = sarcoma",
          "Lymphoma, melanoma, mesothelioma are MALIGNANT despite -oma suffix",
          "Key difference: benign tumors never metastasize; malignant tumors can",
          "Well-differentiated tumors resemble tissue of origin; anaplastic do not",
          "Capsule is characteristic of benign tumors (but not always present)",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7: Neoplasia", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 7: Neoplasia", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "neoplasia-nomenclature-mechanism",
        title: "Neoplasia: Nomenclature & Classification - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed characteristics that distinguish benign from malignant tumors including differentiation, anaplasia, dysplasia, and growth patterns.",
        contentMd: `# Differentiation & Anaplasia

## Differentiation
- Degree to which tumor cells resemble normal cells of origin
- **Well-differentiated**: Close resemblance to normal (low grade)
- **Moderately differentiated**: Some resemblance
- **Poorly differentiated**: Little resemblance
- **Anaplastic (Undifferentiated)**: No resemblance to any tissue

## Features of Anaplasia
1. **Pleomorphism**: Variation in cell size and shape
2. **Abnormal nuclear morphology**: Hyperchromatic, irregular, large
3. **High nuclear:cytoplasmic ratio** (N:C ratio)
4. **Tumor giant cells**: Abnormally large cells with one huge or multiple nuclei
5. **Atypical mitoses**: Tripolar, quadripolar spindles
6. **Loss of polarity**: Disorganized cell arrangement
7. **Necrosis**: Due to rapid growth outstripping blood supply

## Dysplasia vs Neoplasia
| Feature | Dysplasia | Carcinoma in situ | Invasive Carcinoma |
|---------|-----------|-------------------|-------------------|
| Architecture | Disordered | Disordered | Disordered |
| Atypia | Mild to severe | Full thickness | Full thickness + invasion |
| Basement membrane | Intact | Intact | Breached |
| Reversible | Potentially | Potentially | No |

## Mixed Tumors
- Contain more than one cell type
- **Pleomorphic adenoma** (mixed tumor of salivary gland): epithelial + myxoid/cartilage-like stroma
- **Fibroadenoma** of breast: epithelial + fibrous stroma
- Both components from same germ layer (monoclonal origin)

## Teratoma
- Contains tissues from **all 3 germ layers** (ectoderm, mesoderm, endoderm)
- **Mature (benign)**: Well-differentiated tissues (hair, teeth, skin)
- **Immature (malignant)**: Embryonal-type tissues
- Ovarian dermoid cyst = mature cystic teratoma (most common ovarian germ cell tumor)

## Hamartoma vs Choristoma
| Feature | Hamartoma | Choristoma |
|---------|-----------|-----------|
| Definition | Disorganized mass of tissue NATIVE to the site | Normal tissue in ABNORMAL location |
| Example | Pulmonary hamartoma (cartilage + bronchial tissue) | Pancreatic tissue in stomach wall |
| Malignant potential | Very low | None |`,
        mnemonics: [
          { text: "PLAN for anaplasia features", explanation: "Pleomorphism, Loss of polarity, Abnormal mitoses, Nuclear hyperchromasia" },
          { text: "Hamartoma = HERE (belongs here but disorganized); Choristoma = THERE (doesn't belong there)", explanation: "Hamartoma is disorganized native tissue; Choristoma is normal tissue at the wrong site" },
        ],
        keyPoints: [
          "Anaplasia = lack of differentiation; hallmark is pleomorphism and abnormal mitoses",
          "Dysplasia is disordered growth; may progress to carcinoma in situ",
          "CIS: full-thickness dysplasia but basement membrane intact",
          "Teratoma contains tissues from all 3 germ layers",
          "Hamartoma = disorganized native tissue; Choristoma = ectopic normal tissue",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7: Characteristics of Neoplasms", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 7", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "neoplasia-nomenclature-clinical",
        title: "Neoplasia: Nomenclature & Classification - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical application of tumor classification in diagnosis, common tumors in India, and paraneoplastic syndromes.",
        contentMd: `# Clinical Applications

## Common Cancers in India
| Gender | Top Cancers |
|--------|------------|
| Males | Oral cavity/lip, lung, stomach, colorectal, esophagus |
| Females | Breast, cervix, ovary, oral cavity, colorectal |

- Oral cancer is uniquely common in India due to **tobacco chewing (gutka, paan)** and betel nut
- Cervical cancer: 2nd most common in women (HPV-related), screening gap in rural areas
- Gallbladder cancer: Unusually high in North India (especially Bihar, UP, Rajasthan)

## Paraneoplastic Syndromes
Effects of cancer NOT due to local invasion or metastasis.
| Syndrome | Mechanism | Associated Cancer |
|----------|-----------|------------------|
| Hypercalcemia | PTHrP secretion | Squamous cell CA (lung) |
| SIADH | ADH secretion | Small cell lung CA |
| Cushing syndrome | ACTH secretion | Small cell lung CA |
| Polycythemia | EPO secretion | Renal cell CA, hepatocellular CA |
| Acanthosis nigricans | ? Growth factors | Gastric CA |
| Trousseau syndrome | Hypercoagulability | Pancreatic CA |
| Lambert-Eaton | Anti-Ca channel Ab | Small cell lung CA |
| Dermatomyositis | Autoimmune | Various (ovary, lung, GI) |

## Grading vs Staging
| Feature | Grading | Staging |
|---------|---------|---------|
| Based on | Histologic differentiation | Anatomic extent of spread |
| System | G1-G4 (well to undifferentiated) | TNM (Tumor, Nodes, Metastasis) |
| Prognostic value | Less | More (staging is more important) |

> **Clinical Pearl**: In India, oral cancer from tobacco chewing is a major public health problem. Most oral cancers are squamous cell carcinomas arising from leukoplakia or erythroplakia at the buccal mucosa.`,
        mnemonics: [
          { text: "Small Cell Lung CA = SIADH, ACTH, Lambert-Eaton (SAL)", explanation: "Small cell lung carcinoma is associated with the most paraneoplastic syndromes" },
        ],
        keyPoints: [
          "Staging (TNM) is more important than grading for prognosis",
          "Oral cancer from tobacco chewing is the most common cancer in Indian males",
          "Small cell lung carcinoma is associated with most paraneoplastic syndromes",
          "PTHrP causing hypercalcemia is the most common paraneoplastic syndrome",
          "Cervical cancer is the 2nd most common cancer in Indian women",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 7", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "neoplasia-nomenclature-exam",
        title: "Neoplasia: Nomenclature & Classification - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on tumor nomenclature, classification, and paraneoplastic syndromes.",
        contentMd: `# Exam Preparation

## One-Liners
- Malignant epithelial tumor: **Carcinoma**
- Malignant mesenchymal tumor: **Sarcoma**
- Malignant tumors ending in -oma: **Lymphoma, Melanoma, Mesothelioma, Seminoma**
- Most common benign tumor in females: **Leiomyoma (uterine fibroid)**
- Most common benign tumor of breast: **Fibroadenoma**
- Most common ovarian germ cell tumor: **Mature cystic teratoma (dermoid cyst)**
- Pleomorphic adenoma: **Mixed tumor of parotid gland**
- Normal tissue at abnormal site: **Choristoma**
- Disorganized native tissue: **Hamartoma**
- Staging is more important than grading for: **Prognosis**
- Most common paraneoplastic endocrine syndrome: **Hypercalcemia (PTHrP)**
- Cancer with most paraneoplastic syndromes: **Small cell lung carcinoma**

## Commonly Asked Tumors
| Tumor | Key Feature |
|-------|-------------|
| Burkitt lymphoma | t(8;14), c-myc, starry sky pattern |
| Ewing sarcoma | Small round blue cell tumor, t(11;22), CD99+ |
| Wilms tumor | Triphasic (blastema, stroma, epithelium) |
| Retinoblastoma | RB gene mutation, bilateral if hereditary |
| Osteosarcoma | Sunburst pattern, Codman triangle, bimodal age |`,
        mnemonics: [
          { text: "TNM = The Nodes Matter (staging is key for prognosis)", explanation: "TNM staging (Tumor size, Node involvement, Metastasis) is more prognostically important than histologic grading" },
        ],
        keyPoints: [
          "Carcinoma = epithelial; Sarcoma = mesenchymal",
          "Lymphoma, melanoma, mesothelioma are malignant despite -oma suffix",
          "Staging (TNM) > Grading for prognosis",
          "Small cell lung CA: most paraneoplastic syndromes",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7", edition: "10th" },
        ],
      },
      {
        layer: 5,
        slug: "neoplasia-nomenclature-recall",
        title: "Neoplasia: Nomenclature & Classification - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A on neoplasia nomenclature.",
        contentMd: `# Active Recall

**Q1:** What is the suffix for malignant epithelial tumors?
> Carcinoma (e.g., adenocarcinoma, squamous cell carcinoma)

**Q2:** Name 3 malignant tumors that end in -oma.
> Lymphoma, Melanoma, Mesothelioma (also Seminoma, Hepatoblastoma)

**Q3:** What is the difference between hamartoma and choristoma?
> Hamartoma: disorganized tissue native to the site. Choristoma: normal tissue at an abnormal location.

**Q4:** What is anaplasia?
> Lack of differentiation; cells don't resemble any normal tissue. Features: pleomorphism, abnormal mitoses, high N:C ratio.

**Q5:** Which is more important for prognosis: grading or staging?
> Staging (TNM system) is more prognostically significant

**Q6:** Most common paraneoplastic syndrome?
> Hypercalcemia due to PTHrP secretion (most common in squamous cell lung CA)

**Q7:** What is carcinoma in situ?
> Full-thickness dysplasia with intact basement membrane (no invasion)

**Q8:** Most common benign tumor in females?
> Leiomyoma (uterine fibroid)`,
        mnemonics: [],
        keyPoints: ["8 recall questions on tumor naming, classification, and clinical features"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7", edition: "10th" },
        ],
      },
    ],
  },

  // ─── Topic 2: Carcinogenesis & Molecular Biology ──────────────
  {
    topicCode: "PA-MOD-02-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "carcinogenesis-foundation",
        title: "Carcinogenesis & Molecular Biology - Foundation",
        estimatedMinutes: 20,
        summary: "Cancer is a genetic disease caused by acquired or inherited mutations in proto-oncogenes, tumor suppressor genes, and DNA repair genes. Carcinogenesis is a multi-step process.",
        contentMd: `# Carcinogenesis & Molecular Biology

## Hallmarks of Cancer (Hanahan & Weinberg)
1. **Self-sufficiency in growth signals** (oncogene activation)
2. **Insensitivity to growth-inhibitory signals** (TSG loss)
3. **Evasion of apoptosis** (BCL-2 overexpression)
4. **Limitless replicative potential** (telomerase activation)
5. **Sustained angiogenesis** (VEGF production)
6. **Tissue invasion & metastasis** (E-cadherin loss)
7. **Reprogrammed energy metabolism** (Warburg effect - aerobic glycolysis)
8. **Evading immune destruction**

## Key Gene Categories
| Category | Normal Function | Cancer Effect | Examples |
|----------|----------------|---------------|----------|
| **Proto-oncogenes** | Promote growth | Gain-of-function -> oncogene | RAS, MYC, HER2, ABL |
| **Tumor suppressors** | Inhibit growth | Loss-of-function | p53, RB, APC, BRCA |
| **DNA repair genes** | Fix DNA damage | Loss -> mutations accumulate | BRCA1/2, MLH1, MSH2 |
| **Apoptosis regulators** | Programmed death | Anti-apoptotic overexpressed | BCL-2, BAX |

## Proto-oncogenes -> Oncogenes
Activation mechanisms:
1. **Point mutation**: RAS (most common oncogene in human cancers)
2. **Chromosomal translocation**: BCR-ABL t(9;22) in CML, c-MYC t(8;14) in Burkitt
3. **Gene amplification**: HER2/neu in breast CA, N-MYC in neuroblastoma
4. **Overexpression**: Cyclin D in mantle cell lymphoma

## Tumor Suppressor Genes
- Require **two hits** (Knudson hypothesis) to lose function
- First hit: inherited (hereditary) or acquired
- Second hit: always acquired (LOH, mutation, methylation)
- **p53**: Most commonly mutated gene in human cancers
- **RB**: Retinoblastoma gene, first TSG discovered`,
        mnemonics: [
          { text: "RAS is the RASiest oncogene (most commonly mutated)", explanation: "RAS is the most frequently mutated oncogene in human cancers, especially KRAS in pancreatic, colon, and lung cancer" },
          { text: "Two Hits for Tumor Suppressors (Knudson)", explanation: "Both alleles must be inactivated for tumor suppressor loss; hereditary cancer = one germline hit + one somatic hit" },
        ],
        keyPoints: [
          "Cancer requires mutations in oncogenes (gain of function) AND tumor suppressors (loss of function)",
          "RAS is the most commonly mutated oncogene in human cancers",
          "p53 is the most commonly mutated gene overall in human cancers",
          "Knudson two-hit hypothesis applies to tumor suppressor genes",
          "8 hallmarks of cancer describe fundamental capabilities of cancer cells",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7: Molecular Basis of Cancer", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 8: Carcinogenesis", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "carcinogenesis-mechanism",
        title: "Carcinogenesis & Molecular Biology - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms of chemical, radiation, and viral carcinogenesis. Key oncogenes and tumor suppressor gene pathways.",
        contentMd: `# Mechanisms of Carcinogenesis

## Chemical Carcinogenesis
### Two-step process
1. **Initiation**: Irreversible DNA damage by carcinogen (mutagen)
2. **Promotion**: Stimulation of initiated cell proliferation (non-mutagenic, reversible)

### Important Chemical Carcinogens
| Carcinogen | Cancer |
|-----------|--------|
| Aflatoxin B1 (Aspergillus) | Hepatocellular carcinoma (p53 mutation) |
| Benzene | Acute leukemia |
| Vinyl chloride | Hepatic angiosarcoma |
| Beta-naphthylamine | Bladder cancer |
| Asbestos | Mesothelioma, bronchogenic CA |
| Nitrosamines | Gastric cancer |
| Tobacco (benzpyrene) | Lung, oral, bladder, pancreas |
| Betel nut (arecoline) | Oral submucous fibrosis -> oral CA |

## Radiation Carcinogenesis
- UV radiation: Pyrimidine dimers -> skin cancers (BCC, SCC, melanoma)
- Ionizing radiation: Double-strand DNA breaks -> leukemia, thyroid CA, breast CA
- Xeroderma pigmentosum: Defective NER -> extreme UV sensitivity -> multiple skin cancers

## Viral Carcinogenesis
| Virus | Cancer | Mechanism |
|-------|--------|-----------|
| HPV (16, 18) | Cervical, oropharyngeal | E6 degrades p53, E7 inactivates RB |
| EBV | Burkitt lymphoma, NPC, Hodgkin | LMP-1 activates NF-kB, BCL-2 |
| HBV/HCV | Hepatocellular carcinoma | Chronic inflammation, HBx protein |
| HTLV-1 | Adult T-cell leukemia/lymphoma | Tax protein activates NF-kB |
| HHV-8 | Kaposi sarcoma | Growth factor homologues |
| H. pylori | Gastric MALT lymphoma, gastric CA | Chronic inflammation, CagA protein |

## Key Pathways

### RAS-MAPK Pathway
RAS (GTPase) -> RAF -> MEK -> ERK -> cell proliferation
- RAS mutations: lock RAS in active (GTP-bound) state
- Found in ~30% of all cancers (KRAS especially)

### p53 Pathway (Guardian of Genome)
DNA damage -> p53 activation -> outcomes:
1. **Cell cycle arrest** (p21 -> inhibits CDKs)
2. **DNA repair**
3. **Apoptosis** (BAX, PUMA upregulation) if damage irreparable
- Li-Fraumeni syndrome: Germline p53 mutation -> multiple cancers at young age

### RB Pathway
- RB protein: blocks E2F transcription factor -> prevents S-phase entry
- Phosphorylation of RB by Cyclin D-CDK4 -> releases E2F -> cell cycle proceeds
- Loss of RB -> uncontrolled cell division

> **Clinical Pearl**: In India, aflatoxin exposure from contaminated groundnuts and grains (especially in humid regions) contributes to the high incidence of hepatocellular carcinoma, synergizing with HBV infection.`,
        mnemonics: [
          { text: "E6 = p53 (six and fix rhyme - E6 destroys the fixer p53); E7 = RB (seven rhymes with heaven - E7 releases the brake RB)", explanation: "HPV E6 protein degrades p53; E7 protein inactivates RB - removing both growth checkpoints" },
          { text: "ABBA for chemical carcinogens -> cancers", explanation: "Aflatoxin-liver (B1), Benzene-Blood (leukemia), Beta-naphthylamine-Bladder, Asbestos-mesothelioma" },
        ],
        keyPoints: [
          "Chemical carcinogenesis: Initiation (irreversible) + Promotion (reversible)",
          "HPV E6 degrades p53, E7 inactivates RB - both checkpoints lost",
          "RAS mutations found in ~30% of all cancers (KRAS most common)",
          "p53 loss (Li-Fraumeni) causes multiple cancers at young age",
          "Aflatoxin B1 from Aspergillus causes hepatocellular carcinoma",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7: Carcinogenic Agents", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 8", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "carcinogenesis-clinical",
        title: "Carcinogenesis & Molecular Biology - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical applications including hereditary cancer syndromes, targeted therapy, and cancer prevention in the Indian context.",
        contentMd: `# Clinical Applications

## Hereditary Cancer Syndromes
| Syndrome | Gene | Cancers |
|----------|------|---------|
| Li-Fraumeni | p53 | Sarcomas, breast, brain, leukemia |
| Familial Retinoblastoma | RB | Bilateral retinoblastoma, osteosarcoma |
| Familial Adenomatous Polyposis | APC | Colorectal carcinoma (100% risk) |
| HNPCC (Lynch) | MLH1, MSH2 | Colorectal, endometrial, ovarian |
| BRCA1/2 | BRCA1, BRCA2 | Breast, ovarian (BRCA1); Breast, prostate (BRCA2) |
| MEN 1 | Menin | Pituitary, parathyroid, pancreatic |
| MEN 2 | RET | Medullary thyroid CA, pheochromocytoma |
| Von Hippel-Lindau | VHL | Renal cell CA, hemangioblastoma |
| Xeroderma Pigmentosum | NER genes | Multiple skin cancers |

## Targeted Therapy (Molecular Approach)
| Target | Drug | Cancer |
|--------|------|--------|
| BCR-ABL | Imatinib | CML |
| HER2 | Trastuzumab | Breast CA |
| EGFR | Erlotinib, Gefitinib | Lung CA |
| BRAF V600E | Vemurafenib | Melanoma |
| CD20 | Rituximab | B-cell lymphoma |
| VEGF | Bevacizumab | Colorectal, renal CA |
| PD-1/PD-L1 | Nivolumab, Pembrolizumab | Multiple cancers |

## Indian Cancer Context
- **Oral cancer**: Gutka, paan, and betel nut -> oral submucous fibrosis -> squamous cell CA
- **Cervical cancer**: HPV 16/18, poor screening coverage; vaccine now in national immunization schedule
- **Gallbladder cancer**: High in North Indian women (stones -> chronic inflammation -> dysplasia -> CA)
- **HCC**: HBV endemic in Northeast India + aflatoxin exposure
- **Cholangiocarcinoma**: Associated with liver fluke (Clonorchis) in parts of India

> **Clinical Pearl**: Imatinib targeting BCR-ABL in CML was the first successful targeted therapy and revolutionized cancer treatment. India is a major manufacturer of generic imatinib, improving access globally.`,
        mnemonics: [
          { text: "APC = Always Polyposis and Cancer (100% colon CA risk)", explanation: "FAP (Familial Adenomatous Polyposis) from APC gene mutation leads to 100% risk of colorectal cancer if untreated" },
        ],
        keyPoints: [
          "Li-Fraumeni (p53): multiple cancers at young age",
          "FAP (APC mutation): 100% risk of colorectal cancer",
          "Imatinib targeting BCR-ABL in CML was the first successful molecular targeted therapy",
          "HPV vaccine now included in India's national immunization program",
          "Oral cancer from tobacco chewing is the most common cancer in Indian males",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 8", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "carcinogenesis-exam",
        title: "Carcinogenesis & Molecular Biology - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on oncogenes, tumor suppressors, and carcinogenic agents.",
        contentMd: `# Exam Preparation

## One-Liners
- Most commonly mutated oncogene: **RAS (especially KRAS)**
- Most commonly mutated gene in cancer: **p53**
- First tumor suppressor gene discovered: **RB**
- Guardian of the genome: **p53**
- Gatekeeper of the cell cycle: **RB**
- HPV E6 degrades: **p53**; HPV E7 inactivates: **RB**
- Translocation in CML: **t(9;22) BCR-ABL (Philadelphia chromosome)**
- Translocation in Burkitt lymphoma: **t(8;14) c-MYC**
- Translocation in follicular lymphoma: **t(14;18) BCL-2**
- Translocation in mantle cell lymphoma: **t(11;14) Cyclin D1**
- Amplified gene in neuroblastoma: **N-MYC**
- Amplified gene in breast CA: **HER2/neu (ERBB2)**
- Aflatoxin causes: **Hepatocellular carcinoma**
- Vinyl chloride causes: **Hepatic angiosarcoma**
- Li-Fraumeni syndrome gene: **p53 (germline)**
- Knudson hypothesis: **Two hits needed to inactivate tumor suppressor**

## Key Translocations Table
| Translocation | Gene | Disease |
|--------------|------|---------|
| t(9;22) | BCR-ABL | CML |
| t(8;14) | c-MYC | Burkitt lymphoma |
| t(14;18) | BCL-2 | Follicular lymphoma |
| t(11;14) | Cyclin D1 | Mantle cell lymphoma |
| t(15;17) | PML-RARA | APL (M3 AML) |
| t(11;22) | EWS-FLI1 | Ewing sarcoma |

## Previous Year Themes
- Hallmarks of cancer
- Oncogenes vs tumor suppressor genes
- Chemical carcinogens and associated cancers
- Viral oncogenesis (HPV mechanism is most asked)
- Hereditary cancer syndromes`,
        mnemonics: [
          { text: "Philadelphia = 9-22 = Phil has CML (9 letters + 22 = 31)", explanation: "t(9;22) Philadelphia chromosome in CML produces BCR-ABL fusion tyrosine kinase" },
        ],
        keyPoints: [
          "RAS is the most commonly mutated oncogene; p53 is the most commonly mutated gene overall",
          "HPV E6/E7 mechanism: E6 destroys p53, E7 inactivates RB",
          "Philadelphia chromosome t(9;22) = CML = target for imatinib",
          "Know the 6 key translocations and their associated cancers",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7", edition: "10th" },
        ],
      },
      {
        layer: 5,
        slug: "carcinogenesis-recall",
        title: "Carcinogenesis & Molecular Biology - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A on molecular biology of cancer.",
        contentMd: `# Active Recall

**Q1:** Most commonly mutated oncogene in human cancers?
> RAS (especially KRAS in pancreatic, colorectal, and lung cancers)

**Q2:** What does HPV E6 protein do?
> Degrades p53 (removing the DNA damage checkpoint)

**Q3:** What translocation is found in CML?
> t(9;22) - Philadelphia chromosome - BCR-ABL fusion

**Q4:** What is Knudson's two-hit hypothesis?
> Both alleles of a tumor suppressor gene must be inactivated for cancer; hereditary = 1 germline + 1 somatic hit

**Q5:** Which carcinogen causes hepatic angiosarcoma?
> Vinyl chloride

**Q6:** What syndrome results from germline p53 mutation?
> Li-Fraumeni syndrome (multiple cancers at young age)

**Q7:** Gene amplified in neuroblastoma that indicates poor prognosis?
> N-MYC

**Q8:** What is the Warburg effect?
> Cancer cells preferentially use aerobic glycolysis even in the presence of oxygen`,
        mnemonics: [],
        keyPoints: ["8 recall questions on oncogenes, TSGs, translocations, and carcinogenesis"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7", edition: "10th" },
        ],
      },
    ],
  },

  // ─── Topic 3: Tumor Spread & Staging ──────────────────────────
  {
    topicCode: "PA-MOD-02-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "tumor-spread-staging-foundation",
        title: "Tumor Spread & Staging - Foundation",
        estimatedMinutes: 20,
        summary: "Malignant tumors spread by direct invasion, lymphatic spread, hematogenous spread, and transcoelemic (seeding). TNM staging and grading determine prognosis and treatment.",
        contentMd: `# Tumor Spread & Staging

## Routes of Tumor Spread
### 1. Direct (Local) Invasion
- Tumor grows into surrounding tissues
- Involves degradation of ECM by **matrix metalloproteinases (MMPs)**
- Loss of **E-cadherin** (cell adhesion molecule) is key step

### 2. Lymphatic Spread
- Most common initial route for **carcinomas**
- Follows natural lymphatic drainage
- Sentinel lymph node: first node to receive drainage from tumor
- Example: Breast CA -> axillary lymph nodes

### 3. Hematogenous Spread
- Most common route for **sarcomas**
- Follows venous drainage
- **Liver and Lungs** are the most common sites of metastasis overall
- Portal vein drainage (GI tumors) -> liver first
- Systemic venous drainage -> lung first

### 4. Transcoelemic (Seeding)
- Spread along body cavity surfaces
- Example: Ovarian cancer -> peritoneal seeding (Krukenberg tumor = ovarian mets from gastric CA)

## Common Metastatic Patterns
| Primary Cancer | Common Metastatic Sites |
|---------------|------------------------|
| Lung | Brain, bone, liver, adrenal |
| Breast | Bone, lung, liver, brain |
| Colon | Liver (portal drainage), lung |
| Prostate | Bone (osteoblastic) |
| Renal cell | Lung (cannonball mets) |
| Thyroid (follicular) | Bone, lung |
| Melanoma | Wide: brain, lung, liver, skin |

## TNM Staging
- **T**: Tumor size/extent (T1-T4)
- **N**: Lymph node involvement (N0-N3)
- **M**: Distant metastasis (M0 or M1)
- Overall Stage: I (localized) -> IV (distant metastasis)

## Grading
- Based on histologic differentiation
- G1: Well-differentiated; G2: Moderate; G3: Poor; G4: Undifferentiated
- Staging is MORE prognostically important than grading`,
        mnemonics: [
          { text: "Carcinomas Love Lymphatics; Sarcomas Seek veins (blood)", explanation: "Carcinomas primarily spread via lymphatics; Sarcomas primarily spread hematogenously" },
          { text: "Lung and Liver = Landing sites for metastases", explanation: "Lung and liver are the two most common overall sites for distant metastases" },
        ],
        keyPoints: [
          "Carcinomas spread via lymphatics first; Sarcomas via blood vessels",
          "Liver and lungs are the most common sites of distant metastasis",
          "Sentinel lymph node is the first node receiving drainage from tumor",
          "TNM staging: T (tumor size), N (nodes), M (metastasis)",
          "Staging is more important than grading for prognosis",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7: Tumor Spread and Staging", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 7", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "tumor-spread-staging-mechanism",
        title: "Tumor Spread & Staging - Mechanism",
        estimatedMinutes: 30,
        summary: "Molecular mechanisms of invasion and metastasis including EMT, MMP activity, E-cadherin loss, and the metastatic cascade.",
        contentMd: `# Mechanisms of Invasion & Metastasis

## The Metastatic Cascade
1. **Detachment** from primary tumor (loss of E-cadherin)
2. **Local invasion** through ECM (MMPs, serine proteases)
3. **Intravasation** into blood/lymphatic vessels
4. **Survival in circulation** (platelet coating, immune evasion)
5. **Extravasation** at distant site
6. **Colonization** and growth at metastatic site (requires microenvironment)

## Key Molecular Events

### Loss of E-Cadherin
- E-cadherin is a cell-cell adhesion molecule
- Loss -> cells detach from primary tumor
- Common in lobular breast CA (loss of E-cadherin is characteristic)
- CDH1 gene encodes E-cadherin

### Epithelial-Mesenchymal Transition (EMT)
- Epithelial cells acquire mesenchymal properties
- Loss of: E-cadherin, cytokeratin
- Gain of: Vimentin, N-cadherin, motility
- Key transcription factors: SNAIL, TWIST, SLUG
- Allows invasion and migration

### Matrix Metalloproteinases (MMPs)
- Degrade basement membrane and ECM components
- MMP-2, MMP-9: Degrade type IV collagen (basement membrane)
- Regulated by TIMPs (tissue inhibitors of metalloproteinases)

### Organ Tropism (Seed and Soil Hypothesis - Paget)
- Metastatic cells (seed) grow only in compatible organs (soil)
- **Chemokine receptors** on tumor cells match chemokines in target organs
- **Adhesion molecules** on tumor cells match receptors on endothelium of target organs
- Example: Breast CA cells express CXCR4; its ligand CXCL12 is abundant in lung, liver, bone

## Angiogenesis in Tumors
- Tumors cannot grow beyond **1-2 mm** without new blood supply
- **Angiogenic switch**: Balance tips from inhibitors to stimulators
- **VEGF**: Most important angiogenic factor
- **Thrombospondin-1**: Anti-angiogenic (regulated by p53)
- Loss of p53 -> decreased thrombospondin -> increased angiogenesis

## Immune Evasion by Tumors
- Downregulation of MHC-I (escape CTL recognition)
- Expression of **PD-L1** (inhibits T cell activation)
- Secretion of immunosuppressive factors (TGF-beta, IL-10)
- Recruitment of regulatory T cells (Tregs)

> **Clinical Pearl**: PD-L1 expression by tumors is now a major biomarker for selecting patients for immunotherapy (pembrolizumab, nivolumab). This has transformed the treatment of advanced lung cancer and melanoma.`,
        mnemonics: [
          { text: "Seed and Soil = Paget's theory of metastasis", explanation: "Cancer cells (seed) metastasize to organs (soil) that provide a favorable microenvironment" },
          { text: "EMT = Escape, Move, Travel", explanation: "EMT allows epithelial cancer cells to become motile and invasive, facilitating metastasis" },
        ],
        keyPoints: [
          "E-cadherin loss is the first step in tumor cell detachment and invasion",
          "EMT: epithelial cells gain mesenchymal (migratory) properties",
          "MMPs (especially MMP-2, MMP-9) degrade basement membrane type IV collagen",
          "Tumors cannot grow > 1-2 mm without angiogenesis (VEGF)",
          "PD-L1 expression by tumors allows immune evasion (target for immunotherapy)",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7: Invasion and Metastasis", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 7", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "tumor-spread-staging-clinical",
        title: "Tumor Spread & Staging - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical staging systems, sentinel lymph node biopsy, and metastatic patterns in clinical practice.",
        contentMd: `# Clinical Applications

## Sentinel Lymph Node Biopsy
- Identifies the FIRST lymph node receiving drainage from tumor
- Technique: Inject blue dye or radioactive tracer near tumor
- If sentinel node is negative -> skip full lymph node dissection
- Used in: Breast cancer, melanoma
- Reduces morbidity (lymphedema) from unnecessary dissection

## Important Staging Systems
| Cancer | Staging System |
|--------|---------------|
| Most solid tumors | TNM (AJCC) |
| Hodgkin lymphoma | Ann Arbor |
| Colorectal cancer | Dukes (historical), TNM |
| Renal cell CA | Robson (historical), TNM |
| Gynecologic cancers | FIGO |
| Breast cancer | TNM + molecular subtypes |

## Clinical Metastatic Patterns
### Bone Metastases
| Type | Cancers | Mechanism |
|------|---------|-----------|
| Osteolytic | Lung, breast, kidney, thyroid, multiple myeloma | Osteoclast activation (RANKL) |
| Osteoblastic | Prostate | Osteoblast stimulation |
| Mixed | Breast, lung | Both mechanisms |

### Brain Metastases
- More common than primary brain tumors in adults
- Common sources: Lung (most common), Breast, Melanoma, Renal, Colon
- Mnemonic: **Lots of Bad Stuff Kills Brains** (Lung, Breast, Skin/melanoma, Kidney, Bowel)

### Liver Metastases
- Extremely common (portal drainage from GI tract)
- Most liver masses in adults are metastases, not primary liver tumors
- Common sources: Colon (most common), stomach, pancreas

## Krukenberg Tumor
- Ovarian metastasis from gastric carcinoma (signet ring cells)
- Bilateral ovarian involvement
- Spread via transperitoneal or hematogenous route

> **Clinical Pearl**: In India, sentinel lymph node biopsy for breast cancer is now standard practice in major cancer centers. It has significantly reduced the morbidity of axillary lymph node dissection.`,
        mnemonics: [
          { text: "Lots of Bad Stuff Kills Brains = brain mets sources", explanation: "Lung, Breast, Skin (melanoma), Kidney, Bowel - most common sources of brain metastases" },
        ],
        keyPoints: [
          "Sentinel node biopsy reduces morbidity of full lymph node dissection",
          "Prostate cancer causes osteoblastic (bone-forming) metastases",
          "Lung cancer is the most common source of brain metastases",
          "Colon cancer is the most common source of liver metastases",
          "Krukenberg tumor = ovarian metastasis from gastric signet ring cell carcinoma",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 7", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "tumor-spread-staging-exam",
        title: "Tumor Spread & Staging - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield points on metastatic patterns, staging, and molecular mechanisms of spread.",
        contentMd: `# Exam Preparation

## One-Liners
- Carcinomas spread via: **Lymphatics (initially)**
- Sarcomas spread via: **Blood (hematogenous)**
- Most common sites of distant metastasis: **Liver and Lung**
- Adhesion molecule lost in tumor invasion: **E-cadherin**
- Enzymes for basement membrane degradation: **MMP-2, MMP-9 (Type IV collagenases)**
- Tumor cannot grow > 1-2 mm without: **Angiogenesis**
- Key angiogenic factor: **VEGF**
- Osteoblastic bone mets: **Prostate cancer**
- Osteolytic bone mets: **Lung, Breast, Renal, Thyroid, Myeloma**
- Krukenberg tumor: **Ovarian mets from gastric CA (signet ring cells)**
- Virchow node: **Left supraclavicular node enlarged from gastric CA**
- Sister Mary Joseph nodule: **Periumbilical nodule from intra-abdominal CA**
- Seed and soil hypothesis: **Paget (1889)**
- PD-L1 inhibitors for cancer: **Nivolumab, Pembrolizumab**

## Staging vs Grading (Repeated)
| Feature | Staging | Grading |
|---------|---------|---------|
| Basis | Anatomic extent | Histologic differentiation |
| System | TNM | G1-G4 |
| Prognostic value | More important | Less important |

## Previous Year Themes
- Routes of metastasis
- E-cadherin and EMT in invasion
- Organ tropism of specific cancers
- TNM staging principles
- Sentinel lymph node biopsy concept`,
        mnemonics: [
          { text: "Virchow = V = Very left (Left supraclavicular node)", explanation: "Virchow node (Troisier sign) = enlarged left supraclavicular lymph node, classically from gastric carcinoma" },
        ],
        keyPoints: [
          "E-cadherin loss = key event in tumor invasion",
          "Prostate = osteoblastic; Most others = osteolytic bone mets",
          "Virchow node = left supraclavicular = gastric CA",
          "Sister Mary Joseph nodule = periumbilical = intra-abdominal CA",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7", edition: "10th" },
        ],
      },
      {
        layer: 5,
        slug: "tumor-spread-staging-recall",
        title: "Tumor Spread & Staging - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A on tumor spread and staging.",
        contentMd: `# Active Recall

**Q1:** Main route of spread for carcinomas vs sarcomas?
> Carcinomas: lymphatics; Sarcomas: hematogenous (blood)

**Q2:** What adhesion molecule is lost in tumor invasion?
> E-cadherin

**Q3:** What enzymes degrade basement membrane type IV collagen?
> MMP-2 and MMP-9 (type IV collagenases)

**Q4:** What is a Krukenberg tumor?
> Ovarian metastasis from gastric carcinoma (signet ring cell type)

**Q5:** What type of bone metastases does prostate cancer cause?
> Osteoblastic (bone-forming) metastases

**Q6:** What is the Virchow node?
> Enlarged left supraclavicular lymph node, classically from gastric carcinoma (Troisier sign)

**Q7:** Maximum tumor size before angiogenesis is required?
> 1-2 mm diameter

**Q8:** What is the sentinel lymph node?
> The first lymph node receiving lymphatic drainage from a tumor; biopsy determines if metastasis has occurred`,
        mnemonics: [],
        keyPoints: ["8 recall questions on metastatic routes, patterns, and staging"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7", edition: "10th" },
        ],
      },
    ],
  },

  // ─── Topic 4: Tumor Markers & Lab Diagnosis ──────────────────
  {
    topicCode: "PA-MOD-02-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "tumor-markers-foundation",
        title: "Tumor Markers & Lab Diagnosis - Foundation",
        estimatedMinutes: 20,
        summary: "Tumor markers are substances produced by tumor cells or by the body in response to cancer. They are used for screening, diagnosis, prognosis, and monitoring treatment response.",
        contentMd: `# Tumor Markers & Lab Diagnosis

## Definition
Tumor markers are biochemical substances (proteins, enzymes, hormones) in blood, urine, or tissue that are associated with cancer. They are NOT diagnostic alone but aid in clinical management.

## Uses of Tumor Markers
1. **Screening**: PSA for prostate cancer, AFP for HCC
2. **Diagnosis**: Supports clinical diagnosis (not standalone)
3. **Prognosis**: Levels correlate with tumor burden
4. **Monitoring treatment**: Rising levels = recurrence
5. **Detecting recurrence**: Post-treatment follow-up

## Major Tumor Markers
| Marker | Associated Cancer |
|--------|------------------|
| **AFP (Alpha-fetoprotein)** | Hepatocellular carcinoma, Yolk sac tumor (endodermal sinus tumor) |
| **CEA (Carcinoembryonic antigen)** | Colorectal CA (monitoring), Pancreatic, Gastric, Breast |
| **CA-125** | Ovarian cancer (serous) |
| **CA 19-9** | Pancreatic cancer |
| **CA 15-3** | Breast cancer (monitoring) |
| **PSA (Prostate specific antigen)** | Prostate cancer |
| **hCG (Beta-HCG)** | Choriocarcinoma, Testicular germ cell tumors |
| **Calcitonin** | Medullary thyroid carcinoma |
| **Thyroglobulin** | Differentiated thyroid CA (follow-up) |
| **Acid phosphatase** | Prostate cancer (historical) |
| **LDH** | Lymphoma, Germ cell tumors (non-specific) |
| **S-100** | Melanoma, Schwannoma |
| **Chromogranin A** | Neuroendocrine tumors |

## Immunohistochemistry (IHC) Markers
| Marker | Identifies |
|--------|-----------|
| Cytokeratin | Carcinomas (epithelial) |
| Vimentin | Sarcomas (mesenchymal) |
| Desmin | Muscle tumors |
| CD45 (LCA) | Lymphomas |
| CD20 | B-cell lymphomas |
| CD3 | T-cell lymphomas |
| HMB-45 / Melan-A | Melanoma |
| CD117 (c-KIT) | GIST |
| CD99 | Ewing sarcoma |
| Chromogranin, Synaptophysin | Neuroendocrine tumors |`,
        mnemonics: [
          { text: "AFP = Always For Placenta/liver (HCC + yolk sac tumor)", explanation: "AFP is elevated in hepatocellular carcinoma and yolk sac tumor (endodermal sinus tumor)" },
          { text: "PSA = Prostate Specific Antigen (only one specific to an organ)", explanation: "PSA is the only organ-specific tumor marker; elevated in prostate cancer and BPH" },
        ],
        keyPoints: [
          "Tumor markers are used for monitoring, not definitive diagnosis",
          "AFP: HCC and yolk sac tumor; CEA: colorectal monitoring; CA-125: ovarian cancer",
          "PSA: prostate-specific but NOT cancer-specific (elevated in BPH too)",
          "Beta-hCG: choriocarcinoma and testicular germ cell tumors",
          "IHC: Cytokeratin = carcinoma; Vimentin = sarcoma; CD45 = lymphoma",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7: Tumor Markers", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 7", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "tumor-markers-mechanism",
        title: "Tumor Markers & Lab Diagnosis - Mechanism",
        estimatedMinutes: 30,
        summary: "Laboratory methods for cancer diagnosis including IHC, flow cytometry, cytogenetics, FISH, and molecular techniques.",
        contentMd: `# Lab Diagnosis Methods

## Histopathology
- Gold standard for cancer diagnosis
- Tissue biopsy -> fixation (formalin) -> processing -> H&E staining
- Provides: tumor type, grade, margins, invasion depth

## Immunohistochemistry (IHC)
- Uses antibodies to detect specific antigens in tissue sections
- Key diagnostic applications:
  | Clinical Problem | IHC Solution |
  |-----------------|-------------|
  | Undifferentiated tumor (carcinoma vs sarcoma vs lymphoma) | CK vs Vimentin vs CD45 |
  | Breast cancer prognosis | ER, PR, HER2, Ki-67 |
  | Melanoma vs carcinoma | HMB-45, S-100, Melan-A |
  | Origin of metastasis | TTF-1 (lung/thyroid), CDX-2 (GI), PAX-8 (renal/gynecologic) |

## Flow Cytometry
- Analyzes cell surface markers on individual cells
- Uses fluorescent-labeled antibodies
- Applications: Leukemia/lymphoma immunophenotyping, DNA ploidy analysis
- Can detect minimal residual disease

## Cytogenetics & FISH
- **Karyotyping**: Detects chromosomal translocations, deletions
- **FISH** (Fluorescence In Situ Hybridization): Detects specific gene amplification or translocation
  - HER2 amplification in breast cancer
  - BCR-ABL fusion in CML
  - ALK rearrangement in lung adenocarcinoma

## Molecular Techniques
| Technique | Application |
|-----------|------------|
| PCR | Detect minimal residual disease (BCR-ABL in CML) |
| RT-PCR | Quantify gene expression |
| NGS (Next-Gen Sequencing) | Comprehensive genomic profiling -> targeted therapy |
| Liquid biopsy (ctDNA) | Non-invasive detection of tumor DNA in blood |
| Microarray | Gene expression profiling (Oncotype DX for breast CA) |

## FNAC (Fine Needle Aspiration Cytology)
- Simple, quick, office-based procedure
- Can differentiate benign vs malignant in most cases
- Limitations: Cannot assess invasion (need biopsy for that)
- Common uses: Thyroid nodules, breast lumps, lymph nodes

## Frozen Section
- Intraoperative rapid diagnosis (15-20 minutes)
- Used to guide surgical decisions (e.g., margin status, nature of mass)
- Less detail than permanent sections

> **Clinical Pearl**: In India, FNAC is widely used as the first-line investigation for palpable lumps (thyroid, breast, lymph nodes) due to its simplicity, low cost, and effectiveness. Most district hospitals can perform FNAC.`,
        mnemonics: [
          { text: "CVL for undifferentiated tumors: Cytokeratin = Carcinoma, Vimentin = sarcoma, LCA(CD45) = Lymphoma", explanation: "IHC panel for undifferentiated tumors: CK+ = epithelial, Vimentin+ = mesenchymal, CD45+ = hematopoietic" },
        ],
        keyPoints: [
          "Histopathology (biopsy + H&E) is the gold standard for cancer diagnosis",
          "IHC differentiates undifferentiated tumors: CK (carcinoma), Vimentin (sarcoma), CD45 (lymphoma)",
          "FISH detects HER2 amplification and specific translocations",
          "FNAC is the first-line investigation for palpable lumps in India",
          "Liquid biopsy (ctDNA) is an emerging non-invasive diagnostic method",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7: Laboratory Diagnosis of Cancer", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 7", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "tumor-markers-clinical",
        title: "Tumor Markers & Lab Diagnosis - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical use of tumor markers for screening, monitoring, and molecular subtyping of cancers.",
        contentMd: `# Clinical Applications

## Breast Cancer Molecular Subtypes (IHC-Based)
| Subtype | ER | PR | HER2 | Ki-67 | Prognosis | Treatment |
|---------|----|----|------|-------|-----------|-----------|
| Luminal A | + | + | - | Low | Best | Hormonal (Tamoxifen) |
| Luminal B | + | +/- | +/- | High | Intermediate | Hormonal + Chemo |
| HER2-enriched | - | - | + | High | Poor | Trastuzumab |
| Triple negative | - | - | - | High | Worst | Chemo only |

## Tumor Marker Use in Monitoring
### Colorectal Cancer
- CEA levels measured before surgery (baseline)
- Post-surgery: monitored every 3-6 months
- Rising CEA -> suspect recurrence -> investigate (CT/colonoscopy)

### Ovarian Cancer
- CA-125 elevated in ~80% of serous ovarian CA
- Can be elevated in non-malignant conditions: Endometriosis, PID, pregnancy
- Useful for monitoring treatment response and recurrence

### Prostate Cancer
- PSA screening (controversial) - not cancer specific
- PSA velocity (rate of rise) more informative
- Post-prostatectomy: PSA should be undetectable

## Oncotype DX (Breast Cancer)
- 21-gene assay on breast cancer tissue
- Generates **Recurrence Score** (RS)
- RS < 26: Low risk -> hormonal therapy alone (no chemo benefit)
- RS >= 26: High risk -> benefit from adding chemotherapy
- Guides treatment decisions in ER+, HER2-, node-negative breast CA

## Indian Clinical Context
- FNAC is the backbone of initial cancer diagnosis in India
- IHC is now available at most tertiary centers for breast and lymphoma subtyping
- Molecular testing (FISH for HER2, NGS) available at major cancer centers (Tata Memorial, AIIMS)
- Cost constraints: CEA, AFP, PSA are commonly used tumor markers; advanced molecular testing limited by cost

> **Clinical Pearl**: Triple-negative breast cancer has the worst prognosis and no targeted therapy; it is relatively more common in young Indian women. Research into PARP inhibitors for BRCA-mutated triple-negative cases is promising.`,
        mnemonics: [
          { text: "Luminal A = Best (A for Awesome prognosis); Triple Negative = Worst (no targets, no luck)", explanation: "Luminal A breast cancer has the best prognosis; Triple-negative has the worst (no hormonal or HER2 targets)" },
        ],
        keyPoints: [
          "Breast cancer molecular subtypes guide treatment: Luminal A (best) -> Triple-negative (worst)",
          "CEA for colorectal cancer monitoring; CA-125 for ovarian cancer monitoring",
          "PSA is prostate-specific but NOT cancer-specific (elevated in BPH)",
          "Oncotype DX helps decide chemotherapy benefit in ER+/HER2- breast cancer",
          "FNAC is the first-line diagnostic tool for palpable masses in India",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 7", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "tumor-markers-exam",
        title: "Tumor Markers & Lab Diagnosis - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on tumor markers and lab diagnosis.",
        contentMd: `# Exam Preparation

## One-Liners
- Tumor marker for HCC: **AFP**
- Tumor marker for ovarian cancer: **CA-125**
- Tumor marker for pancreatic cancer: **CA 19-9**
- Tumor marker for colorectal CA monitoring: **CEA**
- Tumor marker for prostate: **PSA**
- Tumor marker for choriocarcinoma: **Beta-hCG**
- Tumor marker for medullary thyroid CA: **Calcitonin**
- IHC for carcinoma: **Cytokeratin**
- IHC for sarcoma: **Vimentin**
- IHC for lymphoma: **CD45 (LCA)**
- IHC for melanoma: **HMB-45, S-100, Melan-A**
- IHC for GIST: **CD117 (c-KIT)**
- IHC for Ewing sarcoma: **CD99 (MIC-2)**
- Best prognosis breast CA subtype: **Luminal A (ER+, PR+, HER2-, Ki67 low)**
- Worst prognosis breast CA subtype: **Triple negative (ER-, PR-, HER2-)**
- Gold standard for cancer diagnosis: **Histopathology (biopsy)**

## Complete Tumor Marker Table
| Marker | Cancer | Use |
|--------|--------|-----|
| AFP | HCC, Yolk sac tumor | Screening, monitoring |
| CEA | Colorectal | Monitoring, recurrence |
| CA-125 | Ovarian (serous) | Monitoring |
| CA 19-9 | Pancreatic | Monitoring |
| PSA | Prostate | Screening, monitoring |
| Beta-hCG | Choriocarcinoma, Testicular | Diagnosis, monitoring |
| CA 15-3 | Breast | Monitoring |
| Calcitonin | Medullary thyroid | Screening (MEN2), monitoring |
| Thyroglobulin | Differentiated thyroid CA | Post-treatment follow-up |

## Previous Year Themes
- Tumor markers and their associated cancers
- IHC markers for undifferentiated tumors
- Breast cancer molecular subtypes
- FNAC vs biopsy
- Frozen section indications`,
        mnemonics: [
          { text: "PAPA for AFP association", explanation: "Placental tumors (yolk sac/chorioCA) And hePA (hepatocellular carcinoma) - AFP elevated in both" },
        ],
        keyPoints: [
          "AFP: HCC + yolk sac tumor - most commonly tested marker",
          "CEA for colorectal monitoring (not screening)",
          "Cytokeratin/Vimentin/CD45 IHC panel for undifferentiated tumors",
          "Histopathology remains the gold standard for cancer diagnosis",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7", edition: "10th" },
        ],
      },
      {
        layer: 5,
        slug: "tumor-markers-recall",
        title: "Tumor Markers & Lab Diagnosis - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A on tumor markers and laboratory diagnosis.",
        contentMd: `# Active Recall

**Q1:** What is the tumor marker for hepatocellular carcinoma?
> AFP (Alpha-fetoprotein)

**Q2:** What IHC marker distinguishes carcinoma from sarcoma?
> Cytokeratin (positive in carcinoma); Vimentin (positive in sarcoma)

**Q3:** Best prognosis subtype of breast cancer?
> Luminal A (ER+, PR+, HER2-, low Ki-67)

**Q4:** What tumor marker is used to monitor colorectal cancer?
> CEA (Carcinoembryonic antigen)

**Q5:** What is the gold standard for cancer diagnosis?
> Histopathology (tissue biopsy with H&E staining)

**Q6:** What IHC marker is specific for GIST?
> CD117 (c-KIT)

**Q7:** PSA is specific for which organ?
> Prostate (but NOT specific for cancer - also elevated in BPH)

**Q8:** What is FISH used for in cancer diagnosis?
> Detecting specific gene amplifications (HER2) or translocations (BCR-ABL, ALK)`,
        mnemonics: [],
        keyPoints: ["8 recall questions on tumor markers, IHC, and diagnostic methods"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 7", edition: "10th" },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PA-MOD-03: HEMATOLOGY
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: Iron Deficiency & Megaloblastic Anemia ──────────
  {
    topicCode: "PA-MOD-03-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "ida-megaloblastic-foundation",
        title: "Iron Deficiency & Megaloblastic Anemia - Foundation",
        estimatedMinutes: 20,
        summary: "Iron deficiency anemia (IDA) is the most common anemia worldwide. Megaloblastic anemia results from B12 or folate deficiency causing impaired DNA synthesis with characteristic megaloblasts in bone marrow.",
        contentMd: `# Iron Deficiency & Megaloblastic Anemia

## Iron Deficiency Anemia (IDA)

### Epidemiology
- **Most common anemia worldwide** and in India
- Affects >50% of pregnant women and children in India
- Common causes: Poor dietary intake, chronic blood loss, hookworm infestation

### Iron Metabolism Basics
- Total body iron: ~3-4 g
- Most iron in hemoglobin (~67%)
- Storage forms: **Ferritin** (soluble) and **Hemosiderin** (insoluble)
- Transport: **Transferrin** (each molecule binds 2 Fe3+)
- Absorption: Duodenum and upper jejunum (as Fe2+)
- Regulator: **Hepcidin** (liver-produced, decreases iron absorption)

### Peripheral Smear
- **Microcytic, hypochromic** RBCs (low MCV, low MCH, low MCHC)
- Target cells, pencil cells (elliptocytes)
- High RDW (anisocytosis)

### Iron Studies
| Parameter | IDA | Anemia of Chronic Disease |
|-----------|-----|--------------------------|
| Serum iron | Low | Low |
| TIBC | High | Low |
| Ferritin | **Low** (best test) | High |
| Transferrin saturation | Low | Low |

## Megaloblastic Anemia

### Definition
Anemia due to impaired DNA synthesis causing **megaloblastic erythropoiesis** (nuclear-cytoplasmic asynchrony: nucleus immature, cytoplasm mature).

### Causes
| B12 Deficiency | Folate Deficiency |
|---------------|-------------------|
| Pernicious anemia (anti-IF Ab) | Poor dietary intake (most common) |
| Gastrectomy, ileal resection | Pregnancy (increased demand) |
| Diphyllobothrium latum (fish tapeworm) | Alcoholism |
| Strict veganism | Methotrexate, phenytoin (drug-induced) |
| Crohn disease (terminal ileum) | Tropical sprue |

### Peripheral Smear
- **Macrocytic** RBCs (MCV > 100 fL), oval macrocytes
- **Hypersegmented neutrophils** (>5 lobes = diagnostic, >5% with 5 lobes)
- Pancytopenia in severe cases`,
        mnemonics: [
          { text: "Ferritin = First test for IDA (best single test)", explanation: "Serum ferritin is the most sensitive and specific single test for iron deficiency; low ferritin is virtually diagnostic" },
          { text: "B12 deficiency = Both (neuro + hematologic); Folate = only hematologic (no neuro)", explanation: "B12 deficiency causes neurologic symptoms (subacute combined degeneration) AND anemia; folate deficiency causes only anemia" },
        ],
        keyPoints: [
          "IDA is the most common anemia worldwide and in India",
          "Ferritin is the best single test for IDA (low ferritin = diagnostic)",
          "IDA: microcytic hypochromic; Megaloblastic: macrocytic with hypersegmented neutrophils",
          "B12 deficiency causes neurologic symptoms; folate deficiency does not",
          "Hepcidin is the master regulator of iron homeostasis",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14: Red Blood Cell Disorders", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12: Hematology", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "ida-megaloblastic-mechanism",
        title: "Iron Deficiency & Megaloblastic Anemia - Mechanism",
        estimatedMinutes: 30,
        summary: "Mechanisms of iron absorption and regulation by hepcidin, B12 absorption pathway, and the biochemical basis of megaloblastic change.",
        contentMd: `# Mechanisms

## Iron Absorption & Regulation
1. Dietary iron (Fe3+) reduced to Fe2+ by **duodenal cytochrome B (Dcytb)**
2. Fe2+ enters enterocyte via **DMT-1** (divalent metal transporter-1)
3. Stored as ferritin OR exported via **ferroportin** (only known iron exporter)
4. Fe2+ oxidized to Fe3+ by **hephaestin** (enterocyte) or **ceruloplasmin** (plasma)
5. Fe3+ binds **transferrin** for transport to bone marrow

### Hepcidin: Master Regulator
- Produced by liver in response to: iron overload, inflammation (IL-6)
- **Degrades ferroportin** -> traps iron inside enterocytes and macrophages
- High hepcidin = decreased iron absorption (anemia of chronic disease)
- Low hepcidin = increased iron absorption (IDA, hemochromatosis)

## B12 Absorption Pathway
1. B12 released from food by **gastric acid and pepsin**
2. Binds **R-protein (haptocorrin)** in stomach
3. In duodenum: pancreatic enzymes degrade R-protein, B12 transfers to **Intrinsic Factor (IF)**
4. B12-IF complex absorbed in **terminal ileum** via cubilin receptor
5. In blood: B12 bound to **transcobalamin II** for transport

### Pernicious Anemia
- Autoimmune destruction of gastric parietal cells
- Anti-intrinsic factor antibodies (most specific)
- Anti-parietal cell antibodies (more sensitive, less specific)
- Leads to B12 deficiency -> megaloblastic anemia + neurologic symptoms

## Biochemical Basis of Megaloblastic Change
### B12 Functions
1. **Methionine synthase**: Homocysteine -> Methionine (requires B12 as cofactor)
   - Also converts methyl-THF -> THF (active folate) = **folate trap**
2. **Methylmalonyl-CoA mutase**: Methylmalonyl-CoA -> Succinyl-CoA

### Folate Trap Hypothesis
- Without B12, folate remains trapped as methyl-THF (inactive)
- Cannot be converted to THF -> impaired thymidylate synthesis -> impaired DNA synthesis
- This explains why B12 deficiency causes megaloblastic anemia (same as folate deficiency)

### Why B12 Deficiency Causes Neurological Symptoms
- Methylmalonyl-CoA accumulates -> abnormal fatty acid synthesis
- Incorporation into myelin -> **demyelination**
- Subacute combined degeneration of spinal cord: posterior columns + lateral corticospinal tracts

> **Clinical Pearl**: In India, vegetarianism (especially strict veganism in Jain community) is a common cause of B12 deficiency. Hookworm infestation remains a major cause of IDA in rural populations.`,
        mnemonics: [
          { text: "Hepcidin = Hepatic peptide that HIDES iron (traps iron inside cells)", explanation: "Hepcidin degrades ferroportin, trapping iron inside enterocytes and macrophages, preventing iron from entering plasma" },
          { text: "TRAP: folate is TRAPped as methyl-THF without B12", explanation: "The folate trap hypothesis explains why B12 deficiency mimics folate deficiency in causing megaloblastic anemia" },
        ],
        keyPoints: [
          "Hepcidin degrades ferroportin -> controls iron absorption and release",
          "B12 is absorbed in terminal ileum bound to intrinsic factor",
          "Folate trap: without B12, folate stays as methyl-THF (inactive)",
          "B12 deficiency -> methylmalonic acid accumulation -> demyelination",
          "Pernicious anemia: anti-IF antibodies (specific), anti-parietal cell Ab (sensitive)",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14: Iron Deficiency and Megaloblastic Anemia", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "ida-megaloblastic-clinical",
        title: "Iron Deficiency & Megaloblastic Anemia - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical features, diagnosis, and management of IDA and megaloblastic anemia in Indian clinical practice.",
        contentMd: `# Clinical Applications

## IDA: Clinical Features
- General: Fatigue, pallor, dyspnea, tachycardia
- Specific to IDA:
  - **Koilonychia** (spoon-shaped nails)
  - **Pica** (craving non-food substances: clay, ice)
  - **Plummer-Vinson syndrome**: IDA + esophageal web + glossitis (dysphagia)
  - Angular stomatitis, glossitis (smooth tongue)

## B12 Deficiency: Clinical Features
- Hematologic: Megaloblastic anemia, pancytopenia
- **Neurologic** (distinguishes from folate deficiency):
  - **Subacute combined degeneration** of spinal cord
  - Posterior columns: Loss of vibration and position sense
  - Lateral corticospinal tracts: Spasticity, UMN signs
  - Peripheral neuropathy: Paresthesias, numbness
  - Dementia, psychiatric symptoms

## Diagnosis
### Schilling Test (Historical, conceptual importance)
- Tests B12 absorption with and without IF
- Stage 1: Give oral radioactive B12 -> measure urine excretion
- Stage 2: Add IF -> if excretion normalizes = pernicious anemia

### Current Diagnostic Approach
| Test | B12 Deficiency | Folate Deficiency |
|------|---------------|-------------------|
| Serum B12 | Low | Normal |
| Serum folate | Normal or high | Low |
| RBC folate | Low (more accurate) | Low |
| Methylmalonic acid | **Elevated** | Normal |
| Homocysteine | Elevated | Elevated |
| Anti-IF antibodies | Positive (pernicious) | Negative |

## Indian Clinical Context
- **Hookworm anemia**: IDA from chronic intestinal blood loss; prevalent in barefoot rural populations
- **Nutritional megaloblastic anemia**: Common in pregnant women, strict vegetarians
- **Tropical sprue**: Malabsorption in tropical regions -> folate (and B12) deficiency
- **Dimorphic anemia**: Combined IDA + B12/folate deficiency (common in India due to poor nutrition)

## Treatment
- **IDA**: Oral iron (ferrous sulfate); treat underlying cause
- **B12 deficiency**: IM cyanocobalamin (bypasses absorption defect)
- **Folate deficiency**: Oral folic acid
- **WARNING**: Never give folate alone if B12 deficiency not excluded -> corrects anemia but worsens neurologic damage

> **Clinical Pearl**: In India, dimorphic anemia (combined iron + B12/folate deficiency) is very common due to widespread nutritional deficiencies. The peripheral smear shows both microcytes and macrocytes with a high RDW.`,
        mnemonics: [
          { text: "Methylmalonic acid = B12 only (M for Methylmalonic, M for only B-Twelve)", explanation: "Elevated methylmalonic acid is specific for B12 deficiency (not elevated in folate deficiency)" },
        ],
        keyPoints: [
          "Koilonychia and Plummer-Vinson syndrome are specific to IDA",
          "Subacute combined degeneration = posterior columns + lateral corticospinal tracts (B12 only)",
          "Methylmalonic acid elevation is specific for B12 deficiency",
          "Never give folate alone without ruling out B12 deficiency",
          "Dimorphic anemia (combined IDA + megaloblastic) is common in India",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "ida-megaloblastic-exam",
        title: "Iron Deficiency & Megaloblastic Anemia - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield points on IDA and megaloblastic anemia for NEXT/NEET PG.",
        contentMd: `# Exam Preparation

## One-Liners
- Most common anemia worldwide: **Iron deficiency anemia**
- Best single test for IDA: **Serum ferritin (low)**
- TIBC in IDA: **Increased**
- TIBC in anemia of chronic disease: **Decreased**
- Master regulator of iron absorption: **Hepcidin**
- Site of B12 absorption: **Terminal ileum**
- Most specific antibody in pernicious anemia: **Anti-intrinsic factor Ab**
- Specific test for B12 deficiency: **Methylmalonic acid (elevated)**
- Hallmark of megaloblastic smear: **Hypersegmented neutrophils**
- Koilonychia is seen in: **Iron deficiency anemia**
- Plummer-Vinson syndrome: **IDA + esophageal web + glossitis**
- B12 neuro finding: **Subacute combined degeneration of cord**
- Folate trap: **Methyl-THF trapped without B12**
- Treatment of pernicious anemia: **IM cyanocobalamin (B12)**

## IDA vs ACD vs Thalassemia
| Parameter | IDA | ACD | Thalassemia minor |
|-----------|-----|-----|-------------------|
| MCV | Low | Low/Normal | Low |
| Ferritin | Low | High | Normal |
| TIBC | High | Low | Normal |
| Iron | Low | Low | Normal |
| RDW | High | Normal | Normal |
| HbA2 | Normal | Normal | Raised (beta-thal) |

## Previous Year Themes
- Iron studies interpretation
- B12 vs folate deficiency differences
- Pernicious anemia diagnosis
- Plummer-Vinson syndrome
- Hepcidin function`,
        mnemonics: [
          { text: "IDA = Iron Down, TIBC Ascending (high)", explanation: "In IDA: serum iron is low, TIBC is high (body tries to absorb more iron), ferritin is low" },
        ],
        keyPoints: [
          "Ferritin low = IDA; Ferritin high with low iron = Anemia of chronic disease",
          "Hypersegmented neutrophils are pathognomonic for megaloblastic anemia",
          "Methylmalonic acid: specific for B12 deficiency (not elevated in folate deficiency)",
          "IDA vs ACD vs Thalassemia differentiation is a very common exam question",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" },
        ],
      },
      {
        layer: 5,
        slug: "ida-megaloblastic-recall",
        title: "Iron Deficiency & Megaloblastic Anemia - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A on IDA and megaloblastic anemia.",
        contentMd: `# Active Recall

**Q1:** Best single test for diagnosing iron deficiency?
> Serum ferritin (low ferritin is virtually diagnostic of IDA)

**Q2:** What is the hallmark finding on peripheral smear in megaloblastic anemia?
> Hypersegmented neutrophils (>=5 lobes)

**Q3:** Where is B12 absorbed?
> Terminal ileum (bound to intrinsic factor)

**Q4:** What distinguishes B12 deficiency from folate deficiency clinically?
> Neurological symptoms (subacute combined degeneration of cord) - present in B12 deficiency, absent in folate deficiency

**Q5:** What is the Plummer-Vinson syndrome triad?
> Iron deficiency anemia + Esophageal web + Glossitis/dysphagia

**Q6:** What does hepcidin do?
> Degrades ferroportin, trapping iron inside enterocytes and macrophages (reduces iron absorption/release)

**Q7:** Why should folate not be given alone in suspected B12 deficiency?
> Folate corrects the anemia but worsens neurological damage (masks B12 deficiency)

**Q8:** What is elevated specifically in B12 deficiency but not folate deficiency?
> Methylmalonic acid`,
        mnemonics: [],
        keyPoints: ["8 recall questions on IDA, B12, and folate deficiency"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" },
        ],
      },
    ],
  },

  // ─── Topic 2: Hemolytic Anemias ───────────────────────────────
  {
    topicCode: "PA-MOD-03-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "hemolytic-anemias-foundation",
        title: "Hemolytic Anemias - Foundation",
        estimatedMinutes: 20,
        summary: "Hemolytic anemias result from premature RBC destruction. They are classified as intravascular or extravascular, and as hereditary (intrinsic) or acquired (extrinsic).",
        contentMd: `# Hemolytic Anemias

## Classification
### By Site of Destruction
| Type | Site | Features |
|------|------|----------|
| Extravascular | Spleen, liver (RE system) | Jaundice, splenomegaly, gallstones |
| Intravascular | Within blood vessels | Hemoglobinemia, hemoglobinuria, hemosiderinuria |

### By Cause
| Hereditary (Intrinsic RBC Defect) | Acquired (Extrinsic) |
|-----------------------------------|---------------------|
| Membrane: Hereditary spherocytosis, elliptocytosis | Immune: AIHA (warm/cold) |
| Enzyme: G6PD deficiency, PK deficiency | Mechanical: MAHA, prosthetic valves |
| Hemoglobin: Sickle cell, Thalassemia | Infections: Malaria, Clostridium |
| | Toxins/drugs, PNH |

## General Features of Hemolysis
- Elevated reticulocyte count (bone marrow compensation)
- Elevated indirect (unconjugated) bilirubin
- Elevated LDH
- Decreased haptoglobin (binds free Hb)
- Peripheral smear: polychromasia (reticulocytes), specific morphology

## Key Hereditary Hemolytic Anemias

### Hereditary Spherocytosis
- **Autosomal dominant** (most common)
- Defect in spectrin, ankyrin, or band 3 (RBC membrane proteins)
- Spherocytes: round, no central pallor, increased MCHC
- Positive **osmotic fragility test**
- Treatment: Splenectomy (curative)

### G6PD Deficiency
- **X-linked recessive** (most common enzyme deficiency worldwide)
- Oxidative stress -> Heinz bodies (denatured Hb) -> bite cells
- Triggers: Fava beans, infections, drugs (primaquine, dapsone, sulfonamides)
- Episodic hemolysis (not chronic)

### Sickle Cell Disease
- **HbS**: Glutamic acid -> Valine at position 6 of beta-globin
- Sickling triggered by: Hypoxia, dehydration, infection, acidosis
- Vaso-occlusive crises -> pain, organ damage
- In India: Common in tribal belt (Central India, Maharashtra, Chhattisgarh)

### Thalassemias
- Decreased synthesis of alpha or beta globin chains
- **Beta-thalassemia major** (Cooley anemia): Severe, transfusion-dependent
- Common in India: Gujarat, Sindhi, Bengali, Punjabi communities
- Target cells, microcytic hypochromic anemia`,
        mnemonics: [
          { text: "SPHEROCYTES = SPHere shape, no central pallor, SPHinctrin/ankyrin defect", explanation: "Hereditary spherocytosis: defective membrane proteins (spectrin, ankyrin) -> spherical RBCs without central pallor" },
          { text: "G6PD: X-linked, Oxidative stress, Heinz bodies, Bite cells", explanation: "G6PD deficiency: X-linked recessive, oxidative stress triggers hemolysis, Heinz bodies and bite cells on smear" },
        ],
        keyPoints: [
          "Hemolytic anemias: elevated reticulocytes, LDH, indirect bilirubin; decreased haptoglobin",
          "Hereditary spherocytosis: spectrin/ankyrin defect, osmotic fragility test, splenectomy cures",
          "G6PD deficiency: X-linked, episodic hemolysis from oxidative stress, Heinz bodies",
          "Sickle cell: HbS (Glu->Val), vaso-occlusive crises, common in Indian tribal belt",
          "Beta-thalassemia major: severe microcytic anemia, transfusion-dependent",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14: Hemolytic Anemias", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "hemolytic-anemias-mechanism",
        title: "Hemolytic Anemias - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathogenesis of sickle cell disease, thalassemia, and autoimmune hemolytic anemias.",
        contentMd: `# Mechanisms

## Sickle Cell Disease
### Molecular Basis
- Point mutation: GAG -> GTG in codon 6 of beta-globin gene
- Glu -> Val substitution creates HbS
- Deoxygenated HbS polymerizes -> sickle-shaped RBCs

### Pathogenesis of Complications
1. **Vaso-occlusion**: Sickled RBCs obstruct microcirculation -> ischemia -> pain crisis
2. **Chronic hemolysis**: Shortened RBC lifespan (~20 days vs 120)
3. **Splenic sequestration**: In children -> functional asplenia by age 5 (autosplenectomy)
4. **Infection susceptibility**: Due to functional asplenia -> encapsulated organisms (Pneumococcus, H. flu)

### Complications
| Complication | Mechanism |
|-------------|-----------|
| Pain crises | Vaso-occlusion |
| Acute chest syndrome | Pulmonary vaso-occlusion + infection |
| Stroke | Cerebral vaso-occlusion |
| Avascular necrosis (femoral head) | Bone infarction |
| Priapism | Penile vascular occlusion |
| Pigment gallstones | Chronic hemolysis -> bilirubin stones |
| Aplastic crisis | Parvovirus B19 infection |
| Splenic sequestration crisis | Sudden pooling in spleen (children) |

## Thalassemia
### Beta-Thalassemia
| Type | Genotype | Clinical |
|------|----------|---------|
| Minor (trait) | Beta/Beta+ or Beta/Beta0 | Mild microcytic anemia, **raised HbA2 >3.5%** |
| Intermedia | Beta+/Beta+ | Moderate anemia, some transfusions |
| Major (Cooley) | Beta0/Beta0 | Severe, transfusion-dependent from 6 months |

### Beta-Thal Major Pathogenesis
- No beta chains -> excess alpha chains precipitate -> ineffective erythropoiesis
- Massive erythroid hyperplasia -> bone expansion (crew-cut skull, chipmunk facies)
- Extramedullary hematopoiesis -> hepatosplenomegaly
- Iron overload from repeated transfusions -> hemochromatosis

### Alpha-Thalassemia
| Genes Deleted | Condition | Clinical |
|---------------|-----------|---------|
| 1 (a-/aa) | Silent carrier | Normal |
| 2 (a-/a- or --/aa) | Alpha-thal trait | Mild microcytic anemia |
| 3 (--/a-) | HbH disease | Moderate hemolytic anemia, HbH (beta4) |
| 4 (--/--) | Hydrops fetalis | Incompatible with life, Hb Bart's (gamma4) |

## Autoimmune Hemolytic Anemia (AIHA)
| Type | Antibody | Temperature | DAT | Causes |
|------|----------|------------|-----|--------|
| Warm AIHA | IgG | 37 degrees C | IgG+ | SLE, CLL, drugs (methyldopa) |
| Cold agglutinin | IgM | <30 degrees C | C3+ | Mycoplasma, EBV, lymphoma |

- **Direct Antiglobulin Test (DAT/Coombs)**: Detects antibodies on RBC surface
- Warm AIHA: Extravascular hemolysis (spleen) -> spherocytes
- Cold AIHA: Intravascular hemolysis (complement-mediated)

> **Clinical Pearl**: In India, sickle cell trait provides protection against falciparum malaria, explaining its high prevalence in the tribal malaria belt. Beta-thalassemia carrier screening is recommended before marriage in high-prevalence communities.`,
        mnemonics: [
          { text: "Parvovirus B19 = Aplastic crisis in sickle cell (B19 Blasts the Bone marrow)", explanation: "Parvovirus B19 infects erythroid precursors causing transient aplastic crisis in patients with chronic hemolytic anemias" },
          { text: "Warm = IgG (W and G both have curves); Cold = IgM (both straight/angular letters)", explanation: "Warm AIHA is mediated by IgG; Cold agglutinin disease by IgM" },
        ],
        keyPoints: [
          "HbS: Glu->Val at position 6 of beta-globin; sickling triggered by hypoxia",
          "Sickle cell: autosplenectomy by age 5 -> susceptibility to encapsulated organisms",
          "Beta-thal major: absent beta chains, excess alpha precipitate, crew-cut skull, iron overload",
          "HbA2 > 3.5% is diagnostic of beta-thalassemia trait",
          "Warm AIHA: IgG, spherocytes, Coombs positive; Cold: IgM, complement-mediated",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "hemolytic-anemias-clinical",
        title: "Hemolytic Anemias - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical presentations, diagnosis, and management of hemolytic anemias with Indian clinical context.",
        contentMd: `# Clinical Applications

## Sickle Cell Disease in India
- Prevalence: 10-33% carrier rate in tribal populations of central India
- **National Sickle Cell Anemia Elimination Mission (2023)**: Screening all tribal populations
- Diagnosis: **HPLC or Hb electrophoresis** (HbS band)
- Newborn screening: Solubility test, confirmed by HPLC
- Treatment: Hydroxyurea (increases HbF), folic acid, penicillin prophylaxis

## Thalassemia in India
- India is the thalassemia capital of the world (~10,000 children born annually with thal major)
- **Carrier screening**: HPLC showing HbA2 > 3.5% = beta-thal trait
- Management of thal major: Regular transfusions + iron chelation (deferasirox, deferoxamine)
- Complications of iron overload: Cardiac (most common cause of death), hepatic, endocrine
- **Bone marrow transplant**: Only curative option (best results with matched sibling donor)

## G6PD Deficiency
- Peripheral smear during crisis: Bite cells, Heinz bodies (supravital stain)
- Between crises: Normal smear
- **Test AFTER crisis** (during crisis, reticulocytes have normal G6PD -> false normal)
- Avoid: Primaquine (given for P. vivax in India), dapsone, sulfonamides, fava beans

## Microangiopathic Hemolytic Anemia (MAHA)
- Mechanical fragmentation of RBCs by damaged microvasculature
- Peripheral smear: **Schistocytes** (fragmented RBCs)
- Causes: TTP, HUS, DIC, HELLP syndrome, malignant hypertension
- TTP pentad: MAHA + thrombocytopenia + fever + renal failure + neurologic symptoms

## Paroxysmal Nocturnal Hemoglobinuria (PNH)
- Acquired mutation in **PIGA gene** -> loss of GPI anchor
- Loss of CD55 (DAF) and CD59 (MIRL) -> complement-mediated hemolysis
- Diagnosis: **Flow cytometry** for CD55/CD59 (replaces Ham test)
- Complications: Intravascular hemolysis, thrombosis, pancytopenia
- Treatment: Eculizumab (anti-C5 complement antibody)

> **Clinical Pearl**: India has initiated a national sickle cell screening program targeting tribal populations. HPLC-based screening at primary health centers is being scaled up to identify carriers and prevent birth of affected children.`,
        mnemonics: [
          { text: "TTP pentad: FAT RN (Fever, Anemia (MAHA), Thrombocytopenia, Renal failure, Neurologic symptoms)", explanation: "TTP classic pentad; ADAMTS13 deficiency leads to ultra-large vWF multimers -> platelet microthrombi" },
        ],
        keyPoints: [
          "India has a national sickle cell screening mission targeting tribal populations",
          "HbA2 > 3.5% = beta-thalassemia trait (carrier screening by HPLC)",
          "G6PD test should be done AFTER hemolytic crisis, not during",
          "Schistocytes on smear = MAHA (TTP, HUS, DIC)",
          "PNH: PIGA mutation, loss of CD55/CD59, diagnosed by flow cytometry",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "hemolytic-anemias-exam",
        title: "Hemolytic Anemias - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield points on hemolytic anemias for NEXT/NEET PG.",
        contentMd: `# Exam Preparation

## One-Liners
- Hereditary spherocytosis defect: **Spectrin/Ankyrin**
- Test for hereditary spherocytosis: **Osmotic fragility test (increased)**
- Treatment of hereditary spherocytosis: **Splenectomy**
- G6PD deficiency inheritance: **X-linked recessive**
- G6PD crisis finding: **Heinz bodies + Bite cells**
- HbS mutation: **Glu -> Val at position 6 of beta-globin**
- Sickle cell protective against: **Falciparum malaria**
- Aplastic crisis in sickle cell: **Parvovirus B19**
- Beta-thal trait diagnosis: **HbA2 > 3.5%**
- Crew-cut skull appearance: **Beta-thalassemia major**
- Most common cause of death in thal major: **Cardiac hemochromatosis**
- Warm AIHA antibody: **IgG**; Cold AIHA antibody: **IgM**
- Coombs test detects: **Antibodies on RBC surface**
- Schistocytes on smear: **MAHA (TTP, HUS, DIC)**
- PNH diagnosis: **Flow cytometry for CD55/CD59**
- HbH (beta-4 tetramers): **3-gene deletion alpha-thalassemia**
- Hb Bart (gamma-4): **4-gene deletion (hydrops fetalis)**

## Hemolytic Anemia Summary
| Disease | Smear Finding | Key Test |
|---------|--------------|----------|
| Spherocytosis | Spherocytes | Osmotic fragility |
| G6PD | Bite cells, Heinz bodies | G6PD assay (after crisis) |
| Sickle cell | Sickle cells, target cells | HPLC / Hb electrophoresis |
| Thalassemia | Target cells, microcytic | HPLC (HbA2, HbF levels) |
| AIHA (warm) | Spherocytes | DAT (Coombs) positive |
| MAHA | Schistocytes | Clinical context |
| PNH | - | Flow cytometry CD55/59 |`,
        mnemonics: [
          { text: "SOS for hemolytic anemia markers: Spherocytes = HS/AIHA, Oval macrocytes = megaloblastic, Sickle cells = SCD", explanation: "Peripheral smear morphology guides the differential diagnosis of anemias" },
        ],
        keyPoints: [
          "Know the characteristic smear finding for each hemolytic anemia",
          "HbS: Glu->Val (not Glu->Lys which is HbC)",
          "Beta-thal trait: HbA2 >3.5% on HPLC",
          "Warm AIHA = IgG, Cold = IgM (extremely common question)",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" },
        ],
      },
      {
        layer: 5,
        slug: "hemolytic-anemias-recall",
        title: "Hemolytic Anemias - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A on hemolytic anemias.",
        contentMd: `# Active Recall

**Q1:** What is the molecular defect in sickle cell disease?
> Glutamic acid to Valine substitution at position 6 of beta-globin (HbS)

**Q2:** What test diagnoses hereditary spherocytosis?
> Osmotic fragility test (increased fragility of spherocytes)

**Q3:** What smear findings are seen in G6PD deficiency crisis?
> Heinz bodies (denatured Hb on supravital stain) and bite cells

**Q4:** How is beta-thalassemia trait diagnosed?
> HPLC/Hb electrophoresis showing HbA2 > 3.5%

**Q5:** What antibody mediates warm AIHA?
> IgG (detected by direct Coombs test)

**Q6:** What are schistocytes on a peripheral smear indicative of?
> Microangiopathic hemolytic anemia (MAHA) - TTP, HUS, DIC

**Q7:** What virus causes aplastic crisis in sickle cell disease?
> Parvovirus B19

**Q8:** What gene is mutated in PNH?
> PIGA gene (loss of GPI anchor -> loss of CD55 and CD59)`,
        mnemonics: [],
        keyPoints: ["8 recall questions on hereditary and acquired hemolytic anemias"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" },
        ],
      },
    ],
  },

  // ─── Topic 3: Aplastic Anemia & Pancytopenia ─────────────────
  {
    topicCode: "PA-MOD-03-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "aplastic-anemia-foundation",
        title: "Aplastic Anemia & Pancytopenia - Foundation",
        estimatedMinutes: 20,
        summary: "Aplastic anemia is bone marrow failure with pancytopenia and hypocellular marrow. It can be inherited (Fanconi) or acquired (idiopathic, drugs, infections).",
        contentMd: `# Aplastic Anemia & Pancytopenia

## Definition
- **Aplastic anemia**: Pancytopenia with **hypocellular (fatty) bone marrow**
- **Pancytopenia**: Reduction in all 3 cell lines (RBC, WBC, platelets)

## Causes
| Category | Examples |
|----------|----------|
| **Idiopathic** | Most common (~65%) - likely autoimmune T-cell mediated |
| **Drugs** | Chloramphenicol, sulfonamides, phenylbutazone, carbamazepine, cytotoxic drugs |
| **Chemicals** | Benzene, insecticides |
| **Infections** | Hepatitis (non-A, non-B, non-C), Parvovirus B19, HIV, EBV |
| **Radiation** | Whole body irradiation |
| **Inherited** | Fanconi anemia (AR, DNA repair defect) |

## Clinical Features
- **Anemia**: Fatigue, pallor, dyspnea
- **Thrombocytopenia**: Petechiae, bruising, bleeding
- **Leukopenia**: Infections (most common cause of death)
- NO hepatosplenomegaly or lymphadenopathy (unlike leukemia)

## Bone Marrow
- **Hypocellular** (<25% cellularity for age)
- Fat cells replace hematopoietic cells
- Dry tap on aspiration may occur -> need trephine biopsy

## Fanconi Anemia
- **Autosomal recessive**, DNA repair defect
- Presents in childhood (5-10 years)
- Features: Short stature, skeletal anomalies (absent thumbs/radius), cafe-au-lait spots, microcephaly
- Increased risk of AML and squamous cell carcinomas
- Diagnosed by: **Chromosomal breakage study** (DEB/MMC test)

## Diagnosis
- CBC: Pancytopenia (all 3 lines reduced)
- Reticulocyte count: Low (inadequate marrow response)
- **Bone marrow biopsy**: Hypocellular with fatty replacement (gold standard)
- Rule out other causes of pancytopenia: Leukemia, MDS, B12/folate deficiency`,
        mnemonics: [
          { text: "Aplastic = All Absent (pancytopenia + empty marrow)", explanation: "Aplastic anemia: all 3 cell lines reduced with hypocellular (fatty/empty) bone marrow" },
          { text: "Fanconi = Funny bones + Failed marrow", explanation: "Fanconi anemia: skeletal anomalies (absent thumb/radius) + bone marrow failure + increased cancer risk" },
        ],
        keyPoints: [
          "Aplastic anemia = pancytopenia + hypocellular bone marrow",
          "Idiopathic (autoimmune T-cell mediated) is the most common cause",
          "Leukopenia -> infections are the most common cause of death",
          "Fanconi anemia: AR, skeletal defects, increased cancer risk, chromosomal breakage test",
          "Bone marrow biopsy (not aspirate) is the gold standard for diagnosis",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14: Aplastic Anemia", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 2,
        slug: "aplastic-anemia-mechanism",
        title: "Aplastic Anemia & Pancytopenia - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathogenesis of aplastic anemia including autoimmune T-cell destruction of stem cells, and differential diagnosis of pancytopenia.",
        contentMd: `# Mechanisms

## Pathogenesis of Acquired Aplastic Anemia
1. **Autoreactive CD8+ T cells** attack hematopoietic stem cells
2. T cells produce **IFN-gamma and TNF-alpha** -> stem cell apoptosis
3. Stem cell pool depleted -> hypocellular marrow
4. Evidence: Response to immunosuppressive therapy (ATG + cyclosporine)

## Drug-Induced Aplastic Anemia
### Dose-dependent (predictable)
- Cytotoxic drugs (methotrexate, cyclophosphamide)
- Mechanism: Direct stem cell toxicity
- Reversible on stopping drug

### Idiosyncratic (unpredictable)
- Chloramphenicol, sulfonamides, phenylbutazone
- Mechanism: Immune-mediated or metabolic idiosyncrasy
- Not dose-dependent, may be irreversible

## Fanconi Anemia: Molecular Basis
- Mutations in FANC genes (FANCA, FANCB, FANCC, etc.)
- Defective DNA interstrand crosslink (ICL) repair
- Chromosomal instability -> breakage on exposure to DEB/MMC
- Progressive bone marrow failure + predisposition to AML, SCC

## Differential Diagnosis of Pancytopenia
| Cause | Marrow | Key Clue |
|-------|--------|----------|
| Aplastic anemia | Hypocellular | Fatty marrow |
| Acute leukemia | Hypercellular | Blasts >20% |
| MDS | Variable | Dysplasia, ring sideroblasts |
| Megaloblastic anemia | Hypercellular | Megaloblasts, hypersegmented neutrophils |
| Hypersplenism | Normal/hypercellular | Splenomegaly, pooling |
| SLE | Variable | Autoantibodies |
| Kala-azar (Visceral leishmaniasis) | LD bodies in macrophages | Splenomegaly, fever, pancytopenia |

## Paroxysmal Nocturnal Hemoglobinuria (PNH) Connection
- PNH clones found in ~50% of aplastic anemia patients
- Both share: Stem cell disorder, can transform to each other
- PNH + aplastic anemia = AA-PNH syndrome

> **Clinical Pearl**: In India, kala-azar (visceral leishmaniasis) is an important cause of pancytopenia in endemic regions (Bihar, Jharkhand, West Bengal). Bone marrow showing LD bodies (Leishman-Donovan bodies) in macrophages is diagnostic.`,
        mnemonics: [
          { text: "ATG + Cyclosporine = Aplastic anemia Therapy (proves autoimmune mechanism)", explanation: "Response to immunosuppressive therapy (anti-thymocyte globulin + cyclosporine) confirms the autoimmune pathogenesis of aplastic anemia" },
        ],
        keyPoints: [
          "Autoimmune CD8+ T cells destroy hematopoietic stem cells in acquired aplastic anemia",
          "Chloramphenicol: both dose-dependent and idiosyncratic aplastic anemia",
          "Fanconi anemia: FANC gene defects, impaired DNA crosslink repair",
          "Kala-azar is an important cause of pancytopenia in endemic India",
          "PNH clones found in ~50% of aplastic anemia patients",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "aplastic-anemia-clinical",
        title: "Aplastic Anemia & Pancytopenia - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical management of aplastic anemia and approach to pancytopenia in Indian clinical practice.",
        contentMd: `# Clinical Applications

## Approach to Pancytopenia
1. **History**: Drug exposure, infections, family history
2. **Peripheral smear**: Blasts? Atypical cells? Morphology?
3. **Reticulocyte count**: Low (aplastic) vs compensatory increase (peripheral destruction)
4. **Bone marrow biopsy**: Essential for diagnosis
5. **Special tests**: B12/folate, liver/renal function, autoantibodies, viral serology

## Treatment of Aplastic Anemia

### Supportive
- Transfusions (RBC for anemia, platelets for bleeding)
- Antibiotics for infections
- Avoid blood products from potential stem cell donors (prevents sensitization)

### Definitive Treatment
| Age < 40 with matched donor | Age > 40 or no donor |
|----------------------------|---------------------|
| **Allogeneic bone marrow transplant** (best option) | **Immunosuppressive therapy** (ATG + Cyclosporine) |
| Cure rate: 70-80% | Response rate: 60-70% |
| Risk: GVHD, graft failure | Risk: Relapse, MDS/AML transformation |

### Eltrombopag
- Thrombopoietin receptor agonist
- Now used as add-on to immunosuppressive therapy
- Stimulates residual hematopoietic stem cells

## Severity Criteria (Camitta Criteria)
Severe aplastic anemia requires >= 2 of:
- Neutrophils < 500/mcL
- Platelets < 20,000/mcL
- Reticulocyte count < 1% (corrected)
PLUS bone marrow cellularity < 25%

## Indian Clinical Context
- Chloramphenicol still used in India (cheaper alternative) -> idiosyncratic aplastic anemia
- Kala-azar endemic areas: Must be excluded in pancytopenia workup
- Bone marrow transplant: Available at select centers (AIIMS, TMC, CMC Vellore)
- Cost of immunosuppressive therapy vs BMT is a major factor in treatment decisions

> **Clinical Pearl**: In India, every patient presenting with pancytopenia must have kala-azar excluded in endemic regions. A bone marrow aspirate showing LD bodies in macrophages is diagnostic of visceral leishmaniasis.`,
        mnemonics: [],
        keyPoints: [
          "BMT is the treatment of choice for young patients with matched donor",
          "ATG + Cyclosporine for older patients or those without donors",
          "Camitta criteria define severe aplastic anemia",
          "Exclude kala-azar in pancytopenia workup in endemic Indian regions",
          "Eltrombopag is a newer addition to aplastic anemia treatment",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "aplastic-anemia-exam",
        title: "Aplastic Anemia & Pancytopenia - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on aplastic anemia and pancytopenia.",
        contentMd: `# Exam Preparation

## One-Liners
- Most common cause of aplastic anemia: **Idiopathic (autoimmune)**
- Drug causing idiosyncratic aplastic anemia: **Chloramphenicol**
- Bone marrow in aplastic anemia: **Hypocellular with fatty replacement**
- Most common cause of death: **Infections (due to leukopenia)**
- Fanconi anemia inheritance: **Autosomal recessive**
- Fanconi anemia test: **Chromosomal breakage (DEB/MMC)**
- Fanconi anemia skeletal defect: **Absent thumb/radius**
- Treatment for young patient with donor: **Allogeneic BMT**
- Treatment without donor: **ATG + Cyclosporine**
- Pancytopenia with hypercellular marrow: **Megaloblastic anemia, leukemia, MDS**
- Pancytopenia with hypocellular marrow: **Aplastic anemia**
- LD bodies in marrow: **Kala-azar (visceral leishmaniasis)**

## Pancytopenia Differential by Marrow Cellularity
| Hypocellular | Hypercellular | Variable |
|-------------|---------------|----------|
| Aplastic anemia | Megaloblastic anemia | MDS |
| | Acute leukemia | Hypersplenism |
| | PNH (some) | SLE |
| | | Kala-azar |

## Previous Year Themes
- Causes of aplastic anemia
- Pancytopenia differential diagnosis
- Fanconi anemia features
- Treatment of aplastic anemia
- Bone marrow findings`,
        mnemonics: [
          { text: "FAT marrow = Aplastic (Fatty And Thin marrow)", explanation: "Aplastic anemia: bone marrow replaced by fat (hypocellular/fatty marrow)" },
        ],
        keyPoints: [
          "Aplastic anemia = hypocellular fatty marrow; Leukemia = hypercellular with blasts",
          "Chloramphenicol: most tested drug causing aplastic anemia",
          "Fanconi: AR, skeletal defects, chromosomal breakage, AML risk",
          "BMT is curative for young patients with matched donors",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" },
        ],
      },
      {
        layer: 5,
        slug: "aplastic-anemia-recall",
        title: "Aplastic Anemia & Pancytopenia - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A on aplastic anemia.",
        contentMd: `# Active Recall

**Q1:** What is the bone marrow finding in aplastic anemia?
> Hypocellular marrow with fatty replacement (<25% cellularity)

**Q2:** Most common cause of death in aplastic anemia?
> Infections (due to severe neutropenia)

**Q3:** What drug is classically associated with idiosyncratic aplastic anemia?
> Chloramphenicol

**Q4:** How is Fanconi anemia diagnosed?
> Chromosomal breakage study using DEB or MMC (increased breaks)

**Q5:** What is the treatment of choice for young aplastic anemia patient with matched sibling?
> Allogeneic bone marrow transplantation

**Q6:** Pancytopenia with hypercellular marrow suggests what diagnoses?
> Megaloblastic anemia, acute leukemia, MDS

**Q7:** What is the connection between aplastic anemia and PNH?
> PNH clones found in ~50% of aplastic anemia patients; both are stem cell disorders that can transform into each other

**Q8:** What organism should be excluded in pancytopenia in endemic regions of India?
> Leishmania donovani (kala-azar/visceral leishmaniasis) - LD bodies in bone marrow`,
        mnemonics: [],
        keyPoints: ["8 recall questions on aplastic anemia diagnosis and management"],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" },
        ],
      },
    ],
  },

  // ─── Topic 4: Leukemias ──────────────────────────────────────
  {
    topicCode: "PA-MOD-03-TOP-04",
    layers: [
      {
        layer: 1, slug: "leukemias-foundation", title: "Leukemias - Foundation", estimatedMinutes: 20,
        summary: "Leukemias are malignant neoplasms of hematopoietic stem cells. They are classified as acute (blasts >20%) or chronic, and as myeloid or lymphoid based on cell lineage.",
        contentMd: `# Leukemias

## Classification
| Type | Cell | Age | Blasts | Course |
|------|------|-----|--------|--------|
| **ALL** | Lymphoblasts | Children (peak 2-5 yr) | >20% | Aggressive |
| **AML** | Myeloblasts | Adults (median 65 yr) | >20% | Aggressive |
| **CLL** | Mature lymphocytes | Elderly (>60 yr) | Few | Indolent |
| **CML** | Granulocytes (all stages) | Middle-aged (40-60 yr) | <5% initially | Chronic -> blast crisis |

## Acute Leukemias

### ALL (Acute Lymphoblastic Leukemia)
- **Most common childhood cancer** overall
- B-ALL (85%) > T-ALL (15%)
- Presents: Bone pain, fatigue, infections, bleeding, hepatosplenomegaly, lymphadenopathy
- **CNS involvement** common (needs prophylaxis)
- Prognosis: Excellent in children (>85% cure rate)
- Good prognosis factors: Age 2-10, hyperdiploidy (>50 chromosomes), t(12;21)

### AML (Acute Myeloid Leukemia)
- Most common acute leukemia in adults
- **Auer rods** (crystallized MPO) = diagnostic of AML (not ALL)
- FAB classification: M0-M7
- **M3 (APL)**: t(15;17) PML-RARA, responds to ATRA + arsenic trioxide, risk of DIC
- **M4/M5 (Monocytic)**: Gum infiltration, skin involvement

## Chronic Leukemias

### CML (Chronic Myeloid Leukemia)
- **Philadelphia chromosome**: t(9;22) -> BCR-ABL fusion tyrosine kinase
- Massive splenomegaly, leukocytosis with all stages of granulocytes
- Low LAP (leukocyte alkaline phosphatase) score
- Treatment: **Imatinib** (tyrosine kinase inhibitor)
- Natural history: Chronic phase -> Accelerated -> **Blast crisis** (terminal)

### CLL (Chronic Lymphocytic Leukemia)
- Most common leukemia in adults in Western countries
- Mature B lymphocytes (CD5+, CD19+, CD23+)
- **Smudge cells** on peripheral smear
- Often asymptomatic, discovered incidentally
- Complications: Autoimmune hemolytic anemia, hypogammaglobulinemia, Richter transformation (to DLBCL)`,
        mnemonics: [
          { text: "ALL = ALL children get it (most common childhood cancer)", explanation: "ALL is the most common malignancy of childhood, peak age 2-5 years" },
          { text: "Auer rods = AML (A for Auer, A for AML)", explanation: "Auer rods (crystallized MPO) are pathognomonic for AML; never seen in ALL" },
        ],
        keyPoints: [
          "ALL is the most common childhood cancer; AML most common acute leukemia in adults",
          "Auer rods are pathognomonic for AML (especially M3/APL)",
          "CML: Philadelphia chromosome t(9;22), treated with imatinib",
          "CLL: smudge cells, CD5+ B cells, most indolent leukemia",
          "APL (M3): t(15;17), DIC risk, treated with ATRA + arsenic trioxide",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 13: White Blood Cell Neoplasms", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 2, slug: "leukemias-mechanism", title: "Leukemias - Mechanism", estimatedMinutes: 30,
        summary: "Molecular pathogenesis of leukemias including key translocations, immunophenotyping, and cytogenetic markers.",
        contentMd: `# Mechanisms

## Key Cytogenetics
| Leukemia | Translocation | Gene/Protein | Significance |
|----------|-------------|-------------|-------------|
| CML | t(9;22) | BCR-ABL | Constitutive tyrosine kinase |
| APL (M3) | t(15;17) | PML-RARA | Blocks differentiation, responds to ATRA |
| ALL (good) | t(12;21) | TEL-AML1 | Best prognosis in childhood ALL |
| ALL (bad) | t(9;22) | BCR-ABL (Ph+ALL) | Worst prognosis in ALL |
| AML (M4eo) | inv(16) | CBFbeta-MYH11 | Good prognosis |
| AML (core binding) | t(8;21) | AML1-ETO | Good prognosis |

## Immunophenotyping (Flow Cytometry)
| Marker | Lineage |
|--------|---------|
| CD10 (CALLA) | Pre-B ALL (most common) |
| CD19, CD20 | B-cell lineage |
| CD3 | T-cell lineage |
| TdT | ALL (both B and T) - absent in mature lymphocytes |
| CD13, CD33 | Myeloid (AML) |
| MPO (myeloperoxidase) | Myeloid (AML) |
| CD14 | Monocytic (M4/M5 AML) |

## BCR-ABL Mechanism in CML
1. t(9;22) creates **BCR-ABL fusion gene** on derivative chromosome 22 (Philadelphia)
2. BCR-ABL encodes a constitutively active **tyrosine kinase**
3. Activates: RAS, JAK-STAT, PI3K-AKT pathways
4. Results: Proliferation, anti-apoptosis, altered adhesion
5. **Imatinib** competitively blocks ATP-binding site of BCR-ABL kinase

## APL (M3) Mechanism
1. t(15;17) creates **PML-RARA** fusion protein
2. RARA normally: activates gene transcription for myeloid differentiation
3. PML-RARA: Represses transcription -> blocks differentiation at promyelocyte stage
4. **ATRA** (all-trans retinoic acid): Overcomes block -> forces differentiation
5. Arsenic trioxide: Degrades PML-RARA fusion protein

## Peripheral Smear Findings
| Leukemia | Key Finding |
|----------|------------|
| AML | Auer rods, myeloblasts with granules |
| ALL | Lymphoblasts, no granules, no Auer rods |
| CML | All stages of granulocytes, basophilia |
| CLL | Mature lymphocytes, smudge cells |

> **Clinical Pearl**: In India, APL (M3 AML) has become highly curable with ATRA + arsenic trioxide combination. Arsenic trioxide, originally derived from traditional Chinese medicine, is now a first-line drug.`,
        mnemonics: [
          { text: "TdT = Total diagnostic Tool for ALL (present in ALL, absent in mature lymphocytes)", explanation: "TdT (terminal deoxynucleotidyl transferase) is positive in ALL (both B and T) and helps distinguish from mature lymphocyte neoplasms" },
          { text: "ATRA = APL Treatment (Retinoic Acid)", explanation: "All-trans retinoic acid (ATRA) specifically treats APL by forcing differentiation of blocked promyelocytes" },
        ],
        keyPoints: [
          "BCR-ABL is a constitutive tyrosine kinase targeted by imatinib",
          "PML-RARA in APL blocks differentiation; ATRA overcomes this block",
          "TdT is positive in ALL, negative in mature lymphocyte neoplasms",
          "CD10 (CALLA) marks the most common type of ALL (pre-B ALL)",
          "Philadelphia chromosome in ALL (Ph+ALL) has the worst prognosis",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 13", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 3, slug: "leukemias-clinical", title: "Leukemias - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical management of leukemias including risk stratification, treatment protocols, and Indian context.",
        contentMd: `# Clinical Applications

## ALL Treatment (Children)
- Induction: Vincristine + Prednisolone + L-Asparaginase + Daunorubicin
- CNS prophylaxis: Intrathecal methotrexate (CNS is a sanctuary site)
- Consolidation + Maintenance (2-3 years)
- Cure rate: >85% in standard-risk childhood ALL
- Relapse: BMT for second remission

## AML Treatment
- Induction: Cytarabine + Daunorubicin (7+3 protocol)
- APL (M3): ATRA + Arsenic trioxide (>90% cure rate)
- Consolidation: High-dose cytarabine or BMT

## CML Treatment
- First-line: **Imatinib** 400 mg daily (response rate >95%)
- Resistance: Second-generation TKIs (dasatinib, nilotinib)
- T315I mutation: **Ponatinib** (third-generation)
- BMT: Reserved for blast crisis or TKI failure

## CLL Treatment
- Early stage: Watch and wait (may not need treatment for years)
- Treatment indication: Progressive symptoms, cytopenias
- Regimens: FCR (Fludarabine, Cyclophosphamide, Rituximab), Ibrutinib (BTK inhibitor)

## Lab Distinction: Reactive Leukocytosis vs CML
| Feature | Reactive | CML |
|---------|----------|-----|
| LAP score | High | Low |
| Basophilia | Absent | Present |
| Philadelphia chromosome | Absent | Present |
| Toxic granulation | Present | Absent |
| Splenomegaly | Mild | Massive |

## Indian Clinical Context
- Childhood ALL: Good outcomes with standard protocols at major centers
- CML: Imatinib widely available as generic in India (affordable)
- APL: ATRA + arsenic trioxide protocol increasingly used at district level
- Challenges: Late presentation, limited BMT facilities, cost of second-line TKIs

> **Clinical Pearl**: India is a major producer of generic imatinib, making CML treatment affordable. The monthly cost of generic imatinib is a fraction of the original branded drug, making this life-saving therapy accessible to most patients.`,
        mnemonics: [],
        keyPoints: [
          "Childhood ALL: >85% cure rate with chemotherapy + CNS prophylaxis",
          "APL (M3): >90% cure with ATRA + arsenic trioxide",
          "CML: imatinib achieves >95% hematologic response",
          "Low LAP score distinguishes CML from reactive leukocytosis",
          "Generic imatinib from India has made CML treatment globally accessible",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 13", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 4, slug: "leukemias-exam", title: "Leukemias - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam points on leukemia classification, cytogenetics, and treatment.",
        contentMd: `# Exam Preparation

## One-Liners
- Most common childhood cancer: **ALL**
- Most common adult acute leukemia: **AML**
- Most common adult leukemia overall (Western): **CLL**
- Auer rods seen in: **AML (especially APL/M3)**
- Philadelphia chromosome: **t(9;22) in CML and Ph+ALL**
- APL translocation: **t(15;17) PML-RARA**
- APL treatment: **ATRA + Arsenic trioxide**
- APL complication: **DIC**
- TdT positive: **ALL (B and T)**
- Smudge cells: **CLL**
- Richter transformation: **CLL -> DLBCL**
- CML treatment: **Imatinib**
- LAP score in CML: **Low**
- LAP score in reactive leukocytosis: **High**
- CML blast crisis: **Terminal event**
- Best prognosis ALL: **t(12;21), age 2-10, hyperdiploidy**
- Worst prognosis ALL: **t(9;22) Ph+ALL, hypodiploidy, infant**

## Quick Comparison: ALL vs AML
| Feature | ALL | AML |
|---------|-----|-----|
| Age | Children | Adults |
| Auer rods | No | Yes |
| TdT | Positive | Negative |
| MPO | Negative | Positive |
| PAS | Positive (block) | Negative |
| Sudan Black | Negative | Positive |
| Prognosis | Better | Worse |`,
        mnemonics: [
          { text: "PAS = Positive in ALL, Sudan/MPO = positive in AML (Myeloid)", explanation: "PAS stain is positive in ALL lymphoblasts; Sudan Black B and MPO are positive in AML myeloblasts" },
        ],
        keyPoints: [
          "ALL = TdT+, PAS+; AML = Auer rods, MPO+, Sudan Black+",
          "APL: t(15;17), DIC risk, ATRA + arsenic trioxide curative",
          "CML: Philadelphia chromosome, low LAP, imatinib first-line",
          "CLL: smudge cells, CD5+ B cells, Richter transformation risk",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 13", edition: "10th" },
        ],
      },
      {
        layer: 5, slug: "leukemias-recall", title: "Leukemias - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard Q&A on leukemias.",
        contentMd: `# Active Recall

**Q1:** Most common childhood cancer?
> ALL (Acute Lymphoblastic Leukemia)

**Q2:** What are Auer rods and in which leukemia are they found?
> Crystallized myeloperoxidase; found in AML (especially APL/M3)

**Q3:** What translocation defines CML?
> t(9;22) Philadelphia chromosome creating BCR-ABL fusion

**Q4:** Treatment for APL (M3)?
> ATRA (all-trans retinoic acid) + Arsenic trioxide

**Q5:** What marker is positive in ALL but not in mature lymphocyte neoplasms?
> TdT (terminal deoxynucleotidyl transferase)

**Q6:** What are smudge cells and in which leukemia?
> Fragile lymphocytes that smear during slide preparation; CLL

**Q7:** What is Richter transformation?
> CLL transforming into aggressive DLBCL (diffuse large B-cell lymphoma)

**Q8:** LAP score in CML vs leukemoid reaction?
> CML: Low LAP score; Leukemoid reaction: High LAP score`,
        mnemonics: [],
        keyPoints: ["8 recall questions on leukemia classification, markers, and treatment"],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 13", edition: "10th" }],
      },
    ],
  },

  // ─── Topic 5: Lymphomas & Myeloma ────────────────────────────
  {
    topicCode: "PA-MOD-03-TOP-05",
    layers: [
      {
        layer: 1, slug: "lymphomas-myeloma-foundation", title: "Lymphomas & Myeloma - Foundation", estimatedMinutes: 20,
        summary: "Lymphomas are solid tumors of lymphoid cells. Hodgkin lymphoma has Reed-Sternberg cells; Non-Hodgkin includes many subtypes. Multiple myeloma is a plasma cell neoplasm.",
        contentMd: `# Lymphomas & Myeloma

## Hodgkin Lymphoma (HL)
- **Bimodal age**: Young adults (20-30) and elderly (>60)
- **Reed-Sternberg (RS) cell**: Diagnostic hallmark (owl-eye nuclei, CD15+, CD30+)
- Spreads in **contiguous** pattern (node to adjacent node)
- **B symptoms**: Fever, night sweats, weight loss (>10% in 6 months)
- Staged by **Ann Arbor** system (I-IV, A/B)

### Subtypes
| Subtype | Frequency | Features |
|---------|-----------|---------|
| Nodular sclerosis | Most common (70%) | Young women, mediastinal mass, collagen bands |
| Mixed cellularity | 2nd most common | Older age, EBV association, abundant RS cells |
| Lymphocyte-rich | Rare | Best prognosis |
| Lymphocyte-depleted | Rare | Worst prognosis, elderly/HIV |
| Nodular lymphocyte-predominant | Distinct entity | Popcorn cells (LP cells), CD20+, CD15-, CD30- |

## Non-Hodgkin Lymphoma (NHL)
- More common than HL
- Spreads **non-contiguously** (can skip nodes)
- Extranodal involvement more common

### Key NHL Subtypes
| Lymphoma | Grade | Key Feature |
|----------|-------|-------------|
| Follicular | Low (indolent) | t(14;18) BCL-2, incurable but long survival |
| DLBCL | High (aggressive) | Most common NHL overall |
| Burkitt | Very high | t(8;14) c-MYC, starry sky pattern |
| Mantle cell | Intermediate | t(11;14) Cyclin D1 |
| Marginal zone (MALT) | Low | H. pylori-associated gastric lymphoma |
| Mycosis fungoides | Low | Cutaneous T-cell lymphoma, Pautrier microabscesses |

## Multiple Myeloma
- Malignant proliferation of **plasma cells** in bone marrow
- Peak age: 60-70 years
- Produces monoclonal Ig (**M-protein/M-spike** on SPEP)
- Bence Jones protein: Free light chains in urine

### CRAB Criteria
- **C**alcium elevated (hypercalcemia)
- **R**enal insufficiency
- **A**nemia
- **B**one lesions (lytic, punched-out)`,
        mnemonics: [
          { text: "RS cells = Reed-Sternberg = Owl Eyes (CD15+, CD30+)", explanation: "Reed-Sternberg cells are the diagnostic hallmark of Hodgkin lymphoma: large binucleated cells with prominent nucleoli resembling owl eyes" },
          { text: "CRAB for Myeloma", explanation: "Calcium high, Renal failure, Anemia, Bone (lytic) lesions - diagnostic criteria for multiple myeloma" },
        ],
        keyPoints: [
          "RS cells (CD15+, CD30+) are pathognomonic for Hodgkin lymphoma",
          "Nodular sclerosis is the most common HL subtype",
          "DLBCL is the most common NHL worldwide",
          "Burkitt lymphoma: t(8;14) c-MYC, starry sky pattern, fastest growing tumor",
          "Multiple myeloma: CRAB criteria, M-protein on SPEP, Bence Jones proteinuria",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 13: Lymphoid Neoplasms", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 2, slug: "lymphomas-myeloma-mechanism", title: "Lymphomas & Myeloma - Mechanism", estimatedMinutes: 30,
        summary: "Molecular pathogenesis of lymphomas and myeloma including key translocations and pathologic features.",
        contentMd: `# Mechanisms

## Hodgkin Lymphoma
- RS cells derived from germinal center B cells
- RS cells express **CD15 and CD30** but usually NOT CD20 (exception: NLPHL)
- **EBV** association: ~70% of mixed cellularity HL
- NF-kB pathway constitutively activated in RS cells
- RS cells secrete cytokines -> recruit inflammatory background (90% of tumor mass is reactive)

## Key NHL Translocations
| Lymphoma | Translocation | Gene | Mechanism |
|----------|-------------|------|-----------|
| Follicular | t(14;18) | BCL-2 | Anti-apoptosis (overexpressed) |
| Burkitt | t(8;14) | c-MYC | Uncontrolled proliferation |
| Mantle cell | t(11;14) | Cyclin D1 | Cell cycle dysregulation |
| MALT | t(11;18) | API2-MALT1 | NF-kB activation |
| DLBCL | Variable | BCL-6 | Multiple pathways |

## Burkitt Lymphoma
- Fastest growing human tumor (doubling time ~24 hours)
- Ki-67 (proliferation marker) ~100%
- **Starry sky pattern**: Pale macrophages among sheets of dark tumor cells
- Endemic (African): Jaw involvement, EBV association (>95%)
- Sporadic: Abdominal (ileocecal) involvement, lower EBV association
- HIV-associated: Third type

## Multiple Myeloma Pathogenesis
- Clonal plasma cell proliferation in bone marrow
- Produces **M-protein** (monoclonal immunoglobulin)
- Most common type: IgG (55%) > IgA (25%)
- **Light chain disease**: Only light chains produced (~20%)
- Bone destruction: Myeloma cells produce **RANKL** -> osteoclast activation -> lytic lesions
- Renal damage: Bence Jones proteins clog tubules (cast nephropathy)
- Amyloidosis: AL type (from light chains) in ~15% of cases
- Rouleaux formation on peripheral smear (stacked RBCs from high protein)

## Bone Marrow Findings
- Myeloma: **Plasma cells >10%** (often 30-90%)
- Clock-face nucleus (cartwheel chromatin) characteristic of plasma cells
- Flame cells (red cytoplasm) in IgA myeloma

> **Clinical Pearl**: In India, Burkitt lymphoma presents more commonly in the sporadic form (abdominal/ileocecal) rather than the endemic (jaw) form. It responds well to intensive chemotherapy with >90% cure rate in children.`,
        mnemonics: [
          { text: "18 for anti-death (BCL-2 at 18 = anti-apoptosis); 14 for MYC (rapid growth)", explanation: "t(14;18) puts BCL-2 under IgH promoter in follicular lymphoma; t(8;14) puts c-MYC under IgH in Burkitt" },
        ],
        keyPoints: [
          "RS cells: CD15+, CD30+, usually CD20-; EBV-associated in mixed cellularity HL",
          "Burkitt: fastest growing tumor, t(8;14) c-MYC, starry sky pattern",
          "Follicular: t(14;18) BCL-2, indolent but incurable",
          "Myeloma: RANKL-mediated bone destruction, cast nephropathy, AL amyloidosis risk",
          "IgG is the most common myeloma type (55%)",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 13", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 3, slug: "lymphomas-myeloma-clinical", title: "Lymphomas & Myeloma - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical presentation, diagnosis, and staging of lymphomas and myeloma.",
        contentMd: `# Clinical Applications

## Hodgkin Lymphoma
- Presentation: Painless cervical lymphadenopathy (most common), mediastinal mass (NS type)
- **Pel-Ebstein fever**: Periodic fever (weeks on/off) - rare but characteristic
- **Alcohol-induced pain** at affected node sites (rare, pathognomonic)
- Staging: Ann Arbor (I = single node group; II = same side diaphragm; III = both sides; IV = extranodal)
- Treatment: ABVD (Adriamycin, Bleomycin, Vinblastine, Dacarbazine) +/- radiation
- Cure rate: >85% in early stage

## NHL: Clinical Features
- DLBCL: Rapidly enlarging nodal or extranodal mass, curable with R-CHOP
- Follicular: Waxing/waning lymphadenopathy over years, not curable
- Burkitt: Abdominal mass (sporadic), jaw mass (endemic), emergency treatment needed
- MALT: Gastric lymphoma -> H. pylori eradication may cure early-stage

## Multiple Myeloma Diagnosis
- **SPEP**: M-spike (monoclonal band in gamma region)
- **Urine**: Bence Jones proteinuria (free light chains)
- **Bone marrow**: >10% clonal plasma cells
- **Skeletal survey**: Punched-out lytic lesions (skull, spine, pelvis)
- **No bone scan uptake** (lytic, not blastic -> bone scan is COLD)
- **Peripheral smear**: Rouleaux formation
- **ESR**: Markedly elevated (>100 mm/hr)

## Related Conditions
| Condition | Features |
|-----------|----------|
| MGUS | M-protein < 3 g/dL, marrow plasmocytes < 10%, no end-organ damage |
| Smoldering myeloma | Between MGUS and myeloma; no symptoms |
| Waldenstrom macroglobulinemia | IgM-secreting lymphoplasmacytic lymphoma -> hyperviscosity |

> **Clinical Pearl**: In India, myeloma often presents late with pathological fractures or renal failure. A markedly elevated ESR (>100) in an elderly patient with bone pain should raise suspicion for multiple myeloma.`,
        mnemonics: [
          { text: "ABVD = Always Beat Various Diseases (HL treatment)", explanation: "ABVD regimen: Adriamycin (doxorubicin), Bleomycin, Vinblastine, Dacarbazine - standard HL chemotherapy" },
        ],
        keyPoints: [
          "HL presents with painless cervical LAP; cured in >85% early stage with ABVD",
          "DLBCL is potentially curable with R-CHOP; Follicular lymphoma is not curable",
          "Myeloma: M-spike on SPEP + lytic bone lesions + Bence Jones proteinuria",
          "Bone scan is cold in myeloma (lytic lesions don't take up isotope)",
          "MGUS: <3g/dL M-protein, <10% marrow plasma cells, no end-organ damage",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 13", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 4, slug: "lymphomas-myeloma-exam", title: "Lymphomas & Myeloma - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield points on lymphomas and myeloma.",
        contentMd: `# Exam Preparation

## One-Liners
- Diagnostic cell of HL: **Reed-Sternberg cell (CD15+, CD30+)**
- Most common HL subtype: **Nodular sclerosis**
- Best prognosis HL: **Lymphocyte-rich**
- Worst prognosis HL: **Lymphocyte-depleted**
- Most common NHL: **DLBCL**
- Fastest growing human tumor: **Burkitt lymphoma**
- Starry sky pattern: **Burkitt lymphoma**
- t(14;18) BCL-2: **Follicular lymphoma**
- t(8;14) c-MYC: **Burkitt lymphoma**
- t(11;14) Cyclin D1: **Mantle cell lymphoma**
- Gastric MALT lymphoma cause: **H. pylori**
- Pautrier microabscesses: **Mycosis fungoides (cutaneous T-cell lymphoma)**
- M-spike on SPEP: **Multiple myeloma (or MGUS)**
- Rouleaux formation: **Multiple myeloma**
- Bence Jones protein: **Free light chains in urine (myeloma)**
- Punched-out skull lesions: **Multiple myeloma**
- Russell bodies: **Intracytoplasmic Ig in plasma cells**
- Dutcher bodies: **Intranuclear Ig in plasma cells**

## HL vs NHL
| Feature | Hodgkin | Non-Hodgkin |
|---------|---------|-------------|
| Spread | Contiguous | Non-contiguous |
| Extranodal | Rare | Common |
| RS cells | Present | Absent |
| B symptoms | Common | Less common |
| Waldeyer ring | Rarely involved | Commonly involved |
| Mesenteric nodes | Rarely | Commonly |`,
        mnemonics: [
          { text: "Hodgkin HOPS (contiguous, node to Neighboring node); NHL JUMPS (skips nodes)", explanation: "HL spreads contiguously from node to adjacent node; NHL spreads non-contiguously and can skip node groups" },
        ],
        keyPoints: [
          "RS cell (CD15+, CD30+) = HL; Know all NHL translocations",
          "Nodular sclerosis is the most common HL; DLBCL is the most common NHL",
          "HL spreads contiguously; NHL non-contiguously",
          "Myeloma: CRAB criteria, M-spike, punched-out lytic lesions, rouleaux",
        ],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 13", edition: "10th" }],
      },
      {
        layer: 5, slug: "lymphomas-myeloma-recall", title: "Lymphomas & Myeloma - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard Q&A on lymphomas and myeloma.",
        contentMd: `# Active Recall

**Q1:** What is the diagnostic cell of Hodgkin lymphoma and its markers?
> Reed-Sternberg cell: CD15+, CD30+, usually CD20-

**Q2:** Most common subtype of Hodgkin lymphoma?
> Nodular sclerosis (70%)

**Q3:** Translocation in Burkitt lymphoma?
> t(8;14) involving c-MYC oncogene

**Q4:** What does the CRAB criteria stand for in myeloma?
> Calcium (elevated), Renal insufficiency, Anemia, Bone (lytic lesions)

**Q5:** Most common type of Non-Hodgkin lymphoma?
> Diffuse Large B-Cell Lymphoma (DLBCL)

**Q6:** What is Bence Jones protein?
> Free immunoglobulin light chains in urine, found in multiple myeloma

**Q7:** What is the translocation in follicular lymphoma?
> t(14;18) causing BCL-2 overexpression (anti-apoptotic)

**Q8:** How does HL spread differently from NHL?
> HL spreads contiguously (node to adjacent node); NHL spreads non-contiguously`,
        mnemonics: [],
        keyPoints: ["8 recall questions on HL, NHL, and multiple myeloma"],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 13", edition: "10th" }],
      },
    ],
  },

  // ─── Topic 6: Bleeding Disorders ──────────────────────────────
  {
    topicCode: "PA-MOD-03-TOP-06",
    layers: [
      {
        layer: 1, slug: "bleeding-disorders-foundation", title: "Bleeding Disorders - Foundation", estimatedMinutes: 20,
        summary: "Bleeding disorders result from defects in platelets, coagulation factors, or blood vessels. They present differently depending on the component affected.",
        contentMd: `# Bleeding Disorders

## Normal Hemostasis
1. **Vascular spasm**: Immediate vasoconstriction
2. **Primary hemostasis**: Platelet plug formation (adhesion -> activation -> aggregation)
3. **Secondary hemostasis**: Coagulation cascade -> fibrin clot
4. **Fibrinolysis**: Clot removal after healing

## Platelet vs Coagulation Defects
| Feature | Platelet Disorder | Coagulation Factor Disorder |
|---------|------------------|---------------------------|
| Bleeding type | Petechiae, purpura, mucosal | Hemarthrosis, deep tissue, hematoma |
| Onset after injury | Immediate | Delayed |
| Bleeding time | Prolonged | Normal |
| PT/aPTT | Normal | Prolonged |
| Examples | ITP, vWD, DIC | Hemophilia A/B |

## Platelet Disorders

### ITP (Immune Thrombocytopenic Purpura)
- **Autoimmune**: Anti-platelet antibodies (anti-GPIIb/IIIa)
- Children: Acute, self-limited (post-viral)
- Adults: Chronic, relapsing
- Isolated thrombocytopenia, normal/increased megakaryocytes in marrow
- Treatment: Steroids, IVIG, splenectomy, TPO agonists

### TTP (Thrombotic Thrombocytopenic Purpura)
- Deficiency of **ADAMTS13** (vWF-cleaving protease)
- Ultra-large vWF multimers -> platelet microthrombi
- Pentad: MAHA + Thrombocytopenia + Fever + Renal failure + Neurologic symptoms
- Treatment: **Plasma exchange** (emergency)

### von Willebrand Disease (vWD)
- **Most common inherited bleeding disorder**
- Autosomal dominant (most types)
- vWF: Mediates platelet adhesion to endothelium AND carries Factor VIII
- Type 1 (80%): Quantitative decrease (mild)
- Type 2: Qualitative defect
- Type 3: Complete absence (severe, AR)
- Labs: Increased BT, increased aPTT, decreased vWF, decreased Factor VIII

## Coagulation Factor Disorders

### Hemophilia A
- **Factor VIII deficiency**, X-linked recessive
- Most common severe inherited coagulation disorder
- Hemarthrosis (most common manifestation), deep tissue hematomas
- Labs: **Prolonged aPTT**, normal PT, normal BT

### Hemophilia B (Christmas Disease)
- **Factor IX deficiency**, X-linked recessive
- Clinically identical to Hemophilia A
- Distinguished only by factor assay`,
        mnemonics: [
          { text: "vWD = Very Widespread Disease (most common inherited bleeding disorder)", explanation: "von Willebrand disease is the most common inherited bleeding disorder; autosomal dominant type 1 is most frequent" },
          { text: "Hemophilia A = Factor 8 (A looks like 8 turned sideways)", explanation: "Hemophilia A = Factor VIII deficiency; Hemophilia B = Factor IX (Christmas disease)" },
        ],
        keyPoints: [
          "Platelet disorders: petechiae, mucosal bleeding, prolonged BT; Factor disorders: hemarthrosis, prolonged aPTT/PT",
          "vWD is the most common inherited bleeding disorder (AD, type 1 most common)",
          "Hemophilia A (Factor VIII) is the most common severe coagulation disorder",
          "ITP: anti-platelet antibodies, isolated thrombocytopenia, normal marrow megakaryocytes",
          "TTP: ADAMTS13 deficiency, pentad, treated with plasma exchange",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14: Bleeding Disorders", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 2, slug: "bleeding-disorders-mechanism", title: "Bleeding Disorders - Mechanism", estimatedMinutes: 30,
        summary: "Coagulation cascade pathways, platelet function mechanisms, and DIC pathogenesis.",
        contentMd: `# Mechanisms

## Coagulation Cascade
### Intrinsic Pathway (aPTT)
- Contact activation: XII -> XIIa
- XIIa -> XIa -> IXa -> (with VIIIa) -> Xa
- Measured by **aPTT**

### Extrinsic Pathway (PT)
- Tissue factor (TF) + VIIa -> Xa
- Measured by **PT/INR**

### Common Pathway
- Xa + Va -> Prothrombin (II) -> Thrombin (IIa)
- Thrombin -> Fibrinogen (I) -> Fibrin -> Cross-linked by XIIIa

## Platelet Function
### Adhesion
- vWF bridges platelets (GPIb receptor) to exposed collagen
- **Bernard-Soulier syndrome**: GPIb deficiency -> defective adhesion, giant platelets

### Aggregation
- Activated platelets express **GPIIb/IIIa** -> binds fibrinogen -> cross-links platelets
- **Glanzmann thrombasthenia**: GPIIb/IIIa deficiency -> defective aggregation

### Key Lab Tests
| Test | What it Measures | Prolonged In |
|------|-----------------|-------------|
| Bleeding Time (BT) | Primary hemostasis (platelet function) | Platelet disorders, vWD |
| PT/INR | Extrinsic + common pathway | Factor VII, X, V, II, I; Warfarin |
| aPTT | Intrinsic + common pathway | Factors XII, XI, IX, VIII; Heparin |
| Platelet count | Number of platelets | Thrombocytopenia |
| D-dimer | Fibrin degradation | DIC, DVT, PE |

## DIC Mechanism (Revisited)
1. Trigger (sepsis, obstetric, cancer) -> widespread tissue factor exposure
2. Massive thrombin generation -> microthrombi formation
3. Consumption of clotting factors (V, VIII) and platelets
4. Secondary fibrinolysis -> elevated D-dimer, FDPs
5. Net result: **Simultaneous thrombosis AND bleeding**

## Vitamin K-Dependent Factors
- Factors **II, VII, IX, X** and Protein C, S
- Vitamin K needed for gamma-carboxylation (makes functional)
- Warfarin inhibits vitamin K epoxide reductase -> prevents activation
- Factor VII has shortest half-life -> PT prolonged first with warfarin

> **Clinical Pearl**: In India, Hemorrhagic Disease of Newborn (vitamin K deficiency bleeding) is still seen. Routine vitamin K injection at birth is now standard in hospital deliveries but may be missed in home births.`,
        mnemonics: [
          { text: "1972 for vitamin K-dependent factors (II, VII, IX, X)", explanation: "Factors 2, 7, 9, 10 are vitamin K-dependent -> targeted by warfarin" },
          { text: "PT = exTRINSIC (both have T); aPTT = inTRINSIC (both have double T)", explanation: "PT measures the extrinsic pathway; aPTT measures the intrinsic pathway" },
        ],
        keyPoints: [
          "PT measures extrinsic pathway (Factor VII); aPTT measures intrinsic (VIII, IX, XI, XII)",
          "vWF mediates platelet adhesion via GPIb; fibrinogen mediates aggregation via GPIIb/IIIa",
          "Bernard-Soulier: GPIb deficiency; Glanzmann: GPIIb/IIIa deficiency",
          "Vitamin K-dependent factors: II, VII, IX, X (and Protein C, S)",
          "DIC: consumption of factors + platelets -> simultaneous clotting and bleeding",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 3, slug: "bleeding-disorders-clinical", title: "Bleeding Disorders - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical approach to bleeding patient, management of hemophilia, and DIC in Indian practice.",
        contentMd: `# Clinical Applications

## Approach to Bleeding Patient
| Lab Pattern | Diagnosis |
|-------------|-----------|
| Low platelets, normal PT/aPTT | ITP, DIC, TTP/HUS |
| Normal platelets, prolonged aPTT, normal PT | Hemophilia A or B, vWD |
| Normal platelets, prolonged PT, normal aPTT | Factor VII deficiency, early warfarin, liver disease |
| Prolonged PT AND aPTT | DIC, liver failure, vitamin K deficiency |
| All normal but bleeding | vWD type 1, platelet function defect, Factor XIII deficiency |

## Hemophilia Management
- Mild bleeding: DDAVP (desmopressin) - releases vWF and Factor VIII stores (effective in mild Hemophilia A and Type 1 vWD)
- Severe bleeding: Factor VIII concentrate (Hemophilia A) or Factor IX concentrate (Hemophilia B)
- Prophylaxis: Regular factor replacement to prevent hemarthrosis
- Emicizumab: Bispecific antibody mimicking Factor VIII (for Hemophilia A with inhibitors)
- Gene therapy: Emerging treatment option

## DIC Management
- **Treat underlying cause** (most important)
- Supportive: FFP (factors), Cryoprecipitate (fibrinogen), Platelet transfusion
- Heparin: Controversial, used in some chronic DIC settings

## Indian Clinical Context
- **Hemophilia care**: Hemophilia Federation of India supports treatment centers
- Factor concentrates expensive -> cryoprecipitate and FFP still used widely
- **Dengue**: Major cause of thrombocytopenia in India (monitor for hemorrhagic dengue)
- **Snake bite**: DIC and consumptive coagulopathy from viper bites -> common in rural India
- **ITP in children**: Post-viral, usually self-limiting; steroids for severe cases

> **Clinical Pearl**: Viper snake bites are a significant cause of DIC in rural India. Polyvalent anti-snake venom + blood products form the mainstay of treatment. Whole blood clotting time (20-minute WBCT) is a simple bedside test for coagulopathy.`,
        mnemonics: [],
        keyPoints: [
          "Lab pattern guides differential: platelets vs coagulation factors vs both",
          "DDAVP useful for mild Hemophilia A and Type 1 vWD",
          "DIC treatment: address underlying cause + supportive blood products",
          "Dengue thrombocytopenia is a major clinical challenge in India",
          "Viper bites cause DIC in rural India; WBCT is a bedside screening test",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 12", edition: "8th" },
        ],
      },
      {
        layer: 4, slug: "bleeding-disorders-exam", title: "Bleeding Disorders - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield points on bleeding disorders.",
        contentMd: `# Exam Preparation

## One-Liners
- Most common inherited bleeding disorder: **von Willebrand disease**
- Most common severe inherited coagulation disorder: **Hemophilia A (Factor VIII)**
- Hemophilia A: Prolonged **aPTT**, normal PT, normal BT
- vWD: Prolonged **BT + aPTT**, decreased Factor VIII
- ITP antibody target: **GPIIb/IIIa**
- TTP enzyme deficiency: **ADAMTS13**
- TTP treatment: **Plasma exchange (plasmapheresis)**
- Bernard-Soulier defect: **GPIb** (adhesion defect, giant platelets)
- Glanzmann thrombasthenia: **GPIIb/IIIa** (aggregation defect)
- Vitamin K-dependent factors: **II, VII, IX, X**
- Warfarin monitoring: **PT/INR**
- Heparin monitoring: **aPTT**
- Heparin antidote: **Protamine sulfate**
- Warfarin antidote: **Vitamin K, FFP**
- DIC lab findings: **Elevated D-dimer + FDPs, low platelets, low fibrinogen, prolonged PT/aPTT**

## Quick Comparison
| Disorder | BT | PT | aPTT | Platelets |
|----------|----|----|------|-----------|
| ITP | Inc | N | N | Low |
| Hemophilia A | N | N | Inc | N |
| vWD | Inc | N | Inc | N |
| DIC | Inc | Inc | Inc | Low |
| Liver disease | N/Inc | Inc | Inc | Low/N |`,
        mnemonics: [
          { text: "B-S = Big and Slow (Bernard-Soulier: Giant platelets, GPIb defect)", explanation: "Bernard-Soulier syndrome: giant platelets with defective GPIb receptor -> impaired adhesion to subendothelium" },
        ],
        keyPoints: [
          "vWD: most common inherited; Hemophilia A: most common severe",
          "Know the lab pattern: BT/PT/aPTT for each bleeding disorder",
          "Warfarin monitored by PT/INR; Heparin by aPTT",
          "DIC: elevated D-dimer is the most useful lab test",
        ],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" }],
      },
      {
        layer: 5, slug: "bleeding-disorders-recall", title: "Bleeding Disorders - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard Q&A on bleeding disorders.",
        contentMd: `# Active Recall

**Q1:** Most common inherited bleeding disorder?
> von Willebrand disease (autosomal dominant, Type 1 most common)

**Q2:** Lab findings in Hemophilia A?
> Prolonged aPTT, normal PT, normal bleeding time, decreased Factor VIII

**Q3:** What is the antibody target in ITP?
> GPIIb/IIIa on platelet surface

**Q4:** What enzyme is deficient in TTP?
> ADAMTS13 (vWF-cleaving protease)

**Q5:** Which factors are vitamin K-dependent?
> Factors II, VII, IX, X (and Protein C, S)

**Q6:** Bernard-Soulier vs Glanzmann: what receptor is defective in each?
> Bernard-Soulier: GPIb (adhesion); Glanzmann: GPIIb/IIIa (aggregation)

**Q7:** What monitors warfarin therapy?
> PT/INR (extrinsic pathway; Factor VII affected first)

**Q8:** What is the most important step in DIC management?
> Treat the underlying cause (sepsis, obstetric emergency, cancer)`,
        mnemonics: [],
        keyPoints: ["8 recall questions on platelet and coagulation disorders"],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 14", edition: "10th" }],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PA-MOD-04: CVS & RESPIRATORY PATHOLOGY
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: Ischemic Heart Disease ──────────────────────────
  {
    topicCode: "PA-MOD-04-TOP-01",
    layers: [
      {
        layer: 1, slug: "ihd-foundation", title: "Ischemic Heart Disease - Foundation", estimatedMinutes: 20,
        summary: "IHD results from imbalance between myocardial oxygen supply and demand, most commonly from atherosclerosis of coronary arteries. It includes angina, MI, chronic IHD, and sudden cardiac death.",
        contentMd: `# Ischemic Heart Disease

## Definition
IHD is a group of syndromes resulting from myocardial ischemia due to coronary artery disease (CAD). Atherosclerosis is the underlying cause in >90% of cases.

## Atherosclerosis: Pathogenesis
1. Endothelial injury (HTN, smoking, dyslipidemia, diabetes)
2. Lipid accumulation in intima (oxidized LDL)
3. Macrophage recruitment -> foam cells (fatty streak)
4. Smooth muscle migration and proliferation -> fibrous cap
5. Atherosclerotic plaque: Lipid core + fibrous cap
6. Complications: Rupture, thrombosis, hemorrhage, calcification

## Clinical Spectrum of IHD
| Syndrome | Mechanism | Features |
|----------|-----------|---------|
| Stable angina | Fixed atherosclerotic stenosis (>70%) | Exertional chest pain, relieved by rest/NTG |
| Unstable angina | Plaque rupture + non-occlusive thrombus | Rest pain, no biomarker rise |
| NSTEMI | Partial occlusion | Biomarker rise (troponin), no ST elevation |
| STEMI | Complete occlusion | ST elevation, biomarker rise, transmural necrosis |
| Sudden cardiac death | Ventricular arrhythmia | Death within 1 hour of symptoms |
| Chronic IHD | Progressive ischemic damage | Heart failure, dilated cardiomyopathy |

## Myocardial Infarction (MI)
- **LAD** (Left Anterior Descending): Most commonly involved -> anterior wall MI
- **RCA** (Right Coronary Artery): Inferior wall MI
- **LCx** (Left Circumflex): Lateral wall MI
- Transmural (STEMI): Full-thickness, ST elevation, Q waves
- Subendocardial (NSTEMI): Inner 1/3, ST depression, no Q waves

## Risk Factors
- Non-modifiable: Age, male sex, family history
- Modifiable: Smoking, HTN, DM, dyslipidemia, obesity, sedentary lifestyle
- Indian context: Premature CAD (10 years earlier than Western), metabolic syndrome, high carbohydrate diet`,
        mnemonics: [
          { text: "LAD = Widow-maker (most dangerous coronary)", explanation: "LAD supplies the anterior wall and most of the septum; occlusion causes the largest MIs and highest mortality" },
          { text: "STEMI = ST Elevation = Total occlusion = Transmural", explanation: "STEMI results from complete coronary occlusion causing full-thickness (transmural) infarction with ST elevation on ECG" },
        ],
        keyPoints: [
          "Atherosclerosis causes >90% of IHD; plaque rupture triggers acute events",
          "LAD is the most commonly involved coronary artery (anterior MI)",
          "STEMI = complete occlusion, transmural necrosis; NSTEMI = partial occlusion, subendocardial",
          "Indians develop CAD ~10 years earlier than Western populations",
          "Troponin I/T is the gold standard biomarker for myocardial necrosis",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 12: Ischemic Heart Disease", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 15: Cardiovascular Pathology", edition: "8th" },
        ],
      },
      {
        layer: 2, slug: "ihd-mechanism", title: "Ischemic Heart Disease - Mechanism", estimatedMinutes: 30,
        summary: "Detailed pathology of MI including timeline of morphologic changes, complications, and atherosclerosis molecular mechanisms.",
        contentMd: `# Mechanisms

## Timeline of MI Changes
| Time | Gross | Microscopic | Complications |
|------|-------|-------------|---------------|
| 0-4 hr | None visible | Wavy fibers, early coagulative necrosis | Arrhythmia (VF - most common cause of death) |
| 4-12 hr | Dark mottling | Coagulative necrosis begins, neutrophil infiltration starts | Arrhythmia |
| 12-24 hr | Dark mottling | Coagulative necrosis, heavy neutrophil infiltrate | Arrhythmia, cardiogenic shock |
| 1-3 days | Yellow center, hyperemic border | Coagulative necrosis + neutrophils | Pericarditis (fibrinous) |
| 3-7 days | Yellow, softening | Macrophage phagocytosis of dead tissue begins | **Rupture** (day 3-7, most dangerous period) |
| 1-3 weeks | Red-gray border | Granulation tissue at margins | Mural thrombus, ventricular aneurysm |
| Weeks-months | White scar | Collagen scar (fibrosis) | Chronic heart failure, Dressler syndrome |

## Complications of MI
| Complication | Timing | Mechanism |
|-------------|--------|-----------|
| Arrhythmia (VF) | Minutes to hours | Electrical instability (most common cause of death in first 24h) |
| Cardiogenic shock | Hours to days | Large infarct (>40% of LV) |
| Free wall rupture | 3-7 days | Soft necrotic tissue -> cardiac tamponade -> death |
| Papillary muscle rupture | 3-7 days | Acute mitral regurgitation |
| Ventricular septal rupture | 3-7 days | Left-to-right shunt |
| Mural thrombus | Days to weeks | Stasis over akinetic wall -> systemic embolism |
| Ventricular aneurysm | Weeks to months | Thin, fibrotic wall bulging -> thrombus, HF |
| Dressler syndrome | 2-10 weeks | Autoimmune pericarditis (anti-myocardial antibodies) |

## Atherosclerosis Mechanism
- **Response to injury hypothesis**: Endothelial dysfunction is the initiating event
- Key steps: Endothelial injury -> LDL entry + oxidation -> monocyte adhesion (VCAM-1) -> foam cells -> SMC migration -> fibrous plaque
- Vulnerable plaque: Thin fibrous cap + large lipid core + inflammation -> rupture risk
- Stable plaque: Thick fibrous cap + small lipid core -> stable angina

> **Clinical Pearl**: In India, acute MI mortality is higher due to delayed presentation (lack of awareness, distance to PCI-capable hospitals). The door-to-balloon time for primary PCI should be <90 minutes, but this is achievable only in urban cardiac centers.`,
        mnemonics: [
          { text: "Day 3-7 = DANGER days (rupture risk highest when wall is softest)", explanation: "Myocardial wall is weakest between days 3-7 when neutrophils have digested tissue but granulation tissue hasn't formed yet" },
          { text: "VF = Very First killer in MI", explanation: "Ventricular fibrillation is the most common cause of death in the first 24 hours after MI" },
        ],
        keyPoints: [
          "VF is the most common cause of death within 24 hours of MI",
          "Free wall rupture occurs on days 3-7 when myocardium is softest",
          "Vulnerable plaque: thin cap + large lipid core -> rupture -> acute MI",
          "Troponin rises at 3-6 hours, peaks at 24 hours, remains elevated 7-10 days",
          "Dressler syndrome: autoimmune pericarditis weeks after MI",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 12: Myocardial Infarction", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 15", edition: "8th" },
        ],
      },
      {
        layer: 3, slug: "ihd-clinical", title: "Ischemic Heart Disease - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical diagnosis and management of MI, cardiac biomarkers, and Indian epidemiology of CAD.",
        contentMd: `# Clinical Applications

## Cardiac Biomarkers
| Marker | Rise | Peak | Duration | Notes |
|--------|------|------|----------|-------|
| Troponin I/T | 3-6 hr | 24 hr | 7-10 days | **Gold standard**, most specific |
| CK-MB | 3-8 hr | 24 hr | 2-3 days | Useful for detecting re-infarction |
| LDH | 6-12 hr | 48-72 hr | 7-14 days | Historical, less used now |
| Myoglobin | 1-4 hr | 6-7 hr | 24 hr | Earliest marker, not specific |

## ECG in MI
- **STEMI**: ST elevation in leads corresponding to affected territory
- **NSTEMI**: ST depression, T-wave inversion
- Anterior MI: V1-V4 (LAD territory)
- Inferior MI: II, III, aVF (RCA territory)
- Lateral MI: I, aVL, V5-V6 (LCx territory)

## Indian CAD Epidemiology
- India bears ~60% of the world's heart disease burden
- Premature CAD: Mean age of first MI is ~50 years (vs ~65 in Western countries)
- Risk factors uniquely prevalent: High carbohydrate diet, metabolic syndrome, Lp(a) elevation, physical inactivity
- STEMI management: Primary PCI where available; thrombolysis (streptokinase) at district hospitals
- INTERHEART study: 9 modifiable risk factors account for >90% of MI risk globally

> **Clinical Pearl**: In India, streptokinase-based thrombolysis remains the primary reperfusion strategy in most hospitals due to limited availability of primary PCI. A pharmaco-invasive strategy (thrombolysis followed by transfer for angiography) is increasingly adopted.`,
        mnemonics: [
          { text: "Troponin = True Gold standard for MI", explanation: "Cardiac troponin I or T is the most sensitive and specific biomarker for myocardial necrosis" },
        ],
        keyPoints: [
          "Troponin is the gold standard for MI diagnosis; rises at 3-6 hours",
          "Indians have premature CAD (first MI ~50 years vs ~65 in West)",
          "STEMI ECG leads map to coronary territories: V1-V4 = LAD, II/III/aVF = RCA",
          "Streptokinase thrombolysis is the primary reperfusion strategy in most of India",
          "Door-to-balloon time <90 min for primary PCI is the standard",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 12", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 15", edition: "8th" },
        ],
      },
      {
        layer: 4, slug: "ihd-exam", title: "Ischemic Heart Disease - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield IHD points for NEXT/NEET PG.",
        contentMd: `# Exam Preparation

## One-Liners
- Most common cause of IHD: **Atherosclerosis (>90%)**
- Most commonly involved coronary artery: **LAD**
- Most common cause of death within 24 hrs of MI: **Ventricular fibrillation**
- Most dangerous period for rupture: **Days 3-7**
- Gold standard biomarker for MI: **Troponin I/T**
- Earliest biomarker: **Myoglobin**
- Best biomarker to detect re-infarction: **CK-MB**
- Dressler syndrome: **Autoimmune pericarditis 2-10 weeks post-MI**
- Stable plaque: **Thick fibrous cap, small lipid core**
- Vulnerable plaque: **Thin cap, large lipid core, inflammation**
- Subendocardium is most susceptible to ischemia because: **It is farthest from coronary supply and closest to ventricular pressure**
- Coagulative necrosis is the type of necrosis in MI: **except contraction band necrosis after reperfusion**`,
        mnemonics: [
          { text: "3-7 day rule: Rupture, Rupture, Rupture (free wall, papillary, septum)", explanation: "All three mechanical complications (free wall, papillary muscle, and septal rupture) occur during days 3-7 post-MI" },
        ],
        keyPoints: [
          "LAD is the most common coronary involved; VF is the most common early death cause",
          "Days 3-7 = highest rupture risk (wall is softest)",
          "Troponin = gold standard; CK-MB = re-infarction detection",
          "Subendocardium is the most vulnerable zone to ischemia",
        ],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 12", edition: "10th" }],
      },
      {
        layer: 5, slug: "ihd-recall", title: "Ischemic Heart Disease - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard Q&A on IHD.",
        contentMd: `# Active Recall

**Q1:** Most commonly involved coronary artery in MI?
> LAD (Left Anterior Descending) -> anterior wall infarction

**Q2:** Most common cause of death within first 24 hours of MI?
> Ventricular fibrillation (arrhythmia)

**Q3:** When is myocardial wall most susceptible to rupture?
> Days 3-7 (necrotic tissue softened, granulation tissue not yet formed)

**Q4:** Gold standard biomarker for myocardial necrosis?
> Troponin I or T

**Q5:** What is Dressler syndrome?
> Autoimmune pericarditis occurring 2-10 weeks after MI

**Q6:** What characterizes a vulnerable atherosclerotic plaque?
> Thin fibrous cap + large lipid core + active inflammation -> prone to rupture

**Q7:** Which part of the myocardial wall is most susceptible to ischemia?
> Subendocardium (farthest from epicardial coronary supply, most affected by intracavitary pressure)

**Q8:** What is the ECG territory for inferior MI?
> Leads II, III, aVF (RCA territory)`,
        mnemonics: [],
        keyPoints: ["8 recall questions on IHD, MI pathology, and complications"],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 12", edition: "10th" }],
      },
    ],
  },

  // ─── Topic 2: Valvular Heart Disease & RHD ────────────────────
  {
    topicCode: "PA-MOD-04-TOP-02",
    layers: [
      {
        layer: 1, slug: "valvular-rhd-foundation", title: "Valvular Heart Disease & RHD - Foundation", estimatedMinutes: 20,
        summary: "Rheumatic heart disease (RHD) remains the most common cause of valvular heart disease in India. The mitral valve is the most commonly affected. Infective endocarditis affects damaged or prosthetic valves.",
        contentMd: `# Valvular Heart Disease & RHD

## Rheumatic Fever (RF)
- Follows **Group A Streptococcus (GAS) pharyngitis** (not skin infection)
- **Molecular mimicry**: Streptococcal M protein cross-reacts with cardiac myosin, valvular glycoproteins
- Type II hypersensitivity (antibody-mediated) and Type IV (T-cell mediated)
- Affects children 5-15 years; still very common in India

### Jones Criteria (Diagnosis)
Evidence of preceding GAS + 2 Major OR 1 Major + 2 Minor criteria

| Major Criteria | Minor Criteria |
|---------------|---------------|
| Carditis | Fever |
| Polyarthritis (migratory, large joints) | Arthralgia |
| Sydenham chorea | Elevated ESR/CRP |
| Erythema marginatum | Prolonged PR interval |
| Subcutaneous nodules | Previous RF/RHD |

### Pathology
- **Aschoff body**: Pathognomonic lesion (granuloma with Anitschkow cells = owl-eye/caterpillar nuclei)
- **MacCallum plaque**: Rough endocardial patch in left atrium
- **Bread-and-butter pericarditis**: Fibrinous pericarditis

## Chronic RHD (Valvular Sequelae)
- **Mitral valve** most commonly affected (MS > MR)
- Mitral stenosis: Fish-mouth/buttonhole valve, left atrial dilatation -> AF -> thrombus -> embolism
- Valve shows: Commissural fusion, thickening, calcification

## Infective Endocarditis
| Feature | Acute | Subacute |
|---------|-------|---------|
| Organism | S. aureus | Viridans streptococci |
| Valve | Normal valve | Damaged/prosthetic valve |
| Course | Rapidly destructive | Slowly progressive |
| Vegetations | Large, destructive | Small, along closure line |

## Non-Bacterial Thrombotic Endocarditis (NBTE/Marantic)
- Sterile vegetations on valve leaflets
- Associated with: Cancer, DIC, hypercoagulable states
- Risk of systemic embolization`,
        mnemonics: [
          { text: "JONES = Joints (polyarthritis), O (carditis), Nodules (subcutaneous), Erythema marginatum, Sydenham chorea", explanation: "Major Jones criteria for acute rheumatic fever diagnosis" },
          { text: "Mitral valve is Most Commonly affected in RHD", explanation: "Mitral valve is involved in almost all cases of chronic RHD; mitral stenosis is the most common valvular lesion" },
        ],
        keyPoints: [
          "RHD results from molecular mimicry between streptococcal M protein and cardiac antigens",
          "Aschoff body with Anitschkow cells is pathognomonic for RF",
          "Mitral valve is the most commonly affected valve in RHD (mitral stenosis)",
          "Jones criteria: 2 major OR 1 major + 2 minor + evidence of streptococcal infection",
          "Infective endocarditis: S. aureus (acute/normal valve), Viridans strep (subacute/damaged valve)",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 12: Valvular Heart Disease", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 15", edition: "8th" },
        ],
      },
      {
        layer: 2, slug: "valvular-rhd-mechanism", title: "Valvular Heart Disease & RHD - Mechanism", estimatedMinutes: 30,
        summary: "Molecular mechanisms of rheumatic carditis, valve hemodynamics in stenosis and regurgitation, and pathogenesis of infective endocarditis.",
        contentMd: `# Mechanisms

## Rheumatic Carditis Pathogenesis
1. GAS pharyngitis -> immune response to M protein
2. Anti-streptococcal antibodies cross-react with cardiac myosin (Type II)
3. CD4+ T cells react to cardiac antigens (Type IV)
4. Pancarditis: all 3 layers affected
   - Endocarditis: Verrucae (small vegetations) along valve closure line
   - Myocarditis: Aschoff bodies (pathognomonic)
   - Pericarditis: Fibrinous (bread-and-butter)
5. Repeated episodes -> progressive valve damage -> chronic RHD

## Mitral Stenosis Hemodynamics
- Normal mitral valve area: 4-6 cm2
- Symptomatic stenosis: <2 cm2; Severe: <1 cm2
- LA pressure increased -> LA dilatation -> Atrial fibrillation -> Pulmonary venous hypertension -> Right heart failure
- Complication: LA thrombus -> systemic embolism (especially cerebral)
- Murmur: Low-pitched rumbling mid-diastolic murmur (best at apex)

## Mitral Regurgitation
- Causes: Mitral valve prolapse (most common in developed), RHD (most common in India), papillary muscle dysfunction
- Murmur: Pansystolic, best at apex, radiates to axilla

## Aortic Stenosis
- Causes: Calcific (elderly), bicuspid aortic valve (younger), RHD
- Triad: Angina, Syncope, Heart failure (SAD = Syncope, Angina, Dyspnea)
- Murmur: Crescendo-decrescendo systolic ejection murmur at right 2nd ICS

## Infective Endocarditis Pathogenesis
1. Endothelial damage or turbulent flow
2. Platelet-fibrin deposition (NBTE)
3. Bacteremia -> organisms adhere to damaged surface
4. Vegetation grows: Organisms + fibrin + platelets + inflammatory cells
5. Complications: Valve destruction, embolism, immune complex glomerulonephritis

### Duke Criteria (Diagnosis)
- Major: Positive blood cultures (2 separate), echocardiographic evidence
- Minor: Predisposing condition, fever, vascular phenomena (Janeway lesions), immunologic phenomena (Osler nodes, Roth spots), positive blood culture not meeting major criteria

> **Clinical Pearl**: In India, RHD remains the leading cause of heart disease in the young. Benzathine penicillin prophylaxis (every 3-4 weeks) to prevent recurrent streptococcal infections is the mainstay of secondary prevention.`,
        mnemonics: [
          { text: "SAD for aortic stenosis complications", explanation: "Syncope, Angina, Dyspnea (heart failure) - triad of severe aortic stenosis" },
          { text: "FROM JANE for endocarditis clinical features", explanation: "Fever, Roth spots, Osler nodes, Murmur, Janeway lesions, Anemia, Nail-bed hemorrhages, Emboli" },
        ],
        keyPoints: [
          "RHD: molecular mimicry -> pancarditis -> Aschoff bodies in myocardium",
          "Mitral stenosis: LA dilatation -> AF -> LA thrombus -> systemic embolism",
          "Aortic stenosis triad: Syncope, Angina, Heart failure (SAD)",
          "Duke criteria: 2 major OR 1 major + 3 minor OR 5 minor",
          "Benzathine penicillin prophylaxis prevents RHD recurrence",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 12", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 15", edition: "8th" },
        ],
      },
      {
        layer: 3, slug: "valvular-rhd-clinical", title: "Valvular Heart Disease & RHD - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical management of RHD and IE in the Indian healthcare context.",
        contentMd: `# Clinical Applications

## RHD in India
- India has the highest burden of RHD worldwide (~25-30% of global cases)
- Most common in lower socioeconomic groups (overcrowding, poor access to antibiotics)
- **Primary prevention**: Treat streptococcal pharyngitis with penicillin
- **Secondary prevention**: Benzathine penicillin G every 3-4 weeks (lifelong or until age 40)
- Surgical: Mitral valve repair/replacement for severe MS or MR

## Balloon Mitral Valvotomy (BMV)
- Percutaneous procedure for severe MS with favorable valve morphology
- Wilkins score assesses suitability (leaflet mobility, thickening, calcification, subvalvular disease)
- Widely available in India at cardiac centers
- Alternative to open surgical commissurotomy

## Infective Endocarditis: Clinical Findings
| Finding | Description |
|---------|-------------|
| Osler nodes | Painful nodules on finger/toe pads (immune complex) |
| Janeway lesions | Painless hemorrhagic lesions on palms/soles (septic emboli) |
| Roth spots | Retinal hemorrhages with pale centers |
| Splinter hemorrhages | Linear nail bed hemorrhages |
| Glomerulonephritis | Immune complex deposition |

## Common Organisms by Context
| Setting | Likely Organism |
|---------|----------------|
| Native valve, acute | S. aureus |
| Native valve, subacute | Viridans streptococci |
| Prosthetic valve (<60 days) | S. aureus, S. epidermidis |
| Prosthetic valve (>60 days) | Viridans strep, S. epidermidis |
| IVDU (IV drug users) | S. aureus (tricuspid valve) |
| Post-dental procedure | Viridans streptococci |

> **Clinical Pearl**: In India, RHD remains the most important predisposing condition for infective endocarditis. Antibiotic prophylaxis before dental procedures in patients with prosthetic valves or previous IE is recommended.`,
        mnemonics: [
          { text: "Osler = Ouch (painful); Janeway = Just painless", explanation: "Osler nodes are painful (immune complex); Janeway lesions are painless (septic emboli)" },
        ],
        keyPoints: [
          "India has the highest RHD burden globally; benzathine penicillin is the key prevention",
          "BMV is the percutaneous treatment for severe mitral stenosis",
          "S. aureus causes acute IE on normal valves; Viridans strep causes subacute on damaged valves",
          "IVDU endocarditis: S. aureus, typically affects the tricuspid valve",
          "Osler nodes (painful, immune); Janeway lesions (painless, embolic)",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 12", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 15", edition: "8th" },
        ],
      },
      {
        layer: 4, slug: "valvular-rhd-exam", title: "Valvular Heart Disease & RHD - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam points on RHD, valvular disease, and IE.",
        contentMd: `# Exam Preparation

## One-Liners
- Pathognomonic lesion of RF: **Aschoff body (with Anitschkow cells)**
- Most common valve affected in RHD: **Mitral valve**
- Most common valvular lesion in RHD: **Mitral stenosis**
- Bread-and-butter pericarditis: **Fibrinous pericarditis in RF**
- RF follows infection of: **Pharynx (not skin)** by Group A Streptococcus
- Major Jones criteria: **Carditis, Polyarthritis, Chorea, Erythema marginatum, Subcutaneous nodules**
- Most common organism in acute native valve IE: **S. aureus**
- IE in IVDU typically affects: **Tricuspid valve**
- Libman-Sacks endocarditis: **SLE (sterile vegetations on BOTH sides of valve)**
- Verrucous (marantic) endocarditis: **NBTE in cancer/DIC**
- Aortic stenosis triad: **Syncope, Angina, Heart failure**
- Most common cause of aortic stenosis in elderly: **Calcific/degenerative**
- Most common cause of aortic stenosis in younger: **Bicuspid aortic valve**

## Vegetation Comparison
| Type | Organism | Size | Location | Complication |
|------|----------|------|----------|-------------|
| RF (verrucae) | Sterile | Small (1-2mm) | Valve closure line | Valve scarring |
| IE | Bacteria | Large, friable | Anywhere on valve | Destruction, embolism |
| NBTE | Sterile | Small | Closure line | Systemic embolism |
| Libman-Sacks | Sterile | Small | Both sides of valve | Mild dysfunction |`,
        mnemonics: [
          { text: "Anitschkow cells = caterpillar/owl-eye nuclei in Aschoff bodies", explanation: "Anitschkow cells are modified macrophages with characteristic nuclear morphology found in Aschoff bodies of rheumatic myocarditis" },
        ],
        keyPoints: [
          "Aschoff body is pathognomonic for rheumatic carditis",
          "Mitral valve is most commonly affected in RHD",
          "S. aureus = acute IE on normal valves; Viridans strep = subacute on damaged",
          "Libman-Sacks = SLE (both sides of valve); NBTE = cancer/DIC",
        ],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 12", edition: "10th" }],
      },
      {
        layer: 5, slug: "valvular-rhd-recall", title: "Valvular Heart Disease & RHD - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard Q&A on RHD and IE.",
        contentMd: `# Active Recall

**Q1:** What is the pathognomonic histologic lesion of rheumatic carditis?
> Aschoff body (granuloma containing Anitschkow cells with owl-eye/caterpillar nuclei)

**Q2:** Which valve is most commonly affected in RHD?
> Mitral valve (mitral stenosis is the most common lesion)

**Q3:** Name the 5 Major Jones criteria.
> Carditis, Polyarthritis (migratory), Sydenham chorea, Erythema marginatum, Subcutaneous nodules

**Q4:** Most common organism in acute infective endocarditis on a normal valve?
> Staphylococcus aureus

**Q5:** What valve is affected in IV drug user endocarditis?
> Tricuspid valve (right-sided)

**Q6:** What is Libman-Sacks endocarditis?
> Sterile vegetations on both sides of valve leaflets in SLE

**Q7:** What is the triad of severe aortic stenosis?
> Syncope, Angina, Heart failure (Dyspnea)

**Q8:** What is the secondary prophylaxis for RHD?
> Benzathine penicillin G injection every 3-4 weeks`,
        mnemonics: [],
        keyPoints: ["8 recall questions on RHD, valvular disease, and infective endocarditis"],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 12", edition: "10th" }],
      },
    ],
  },

  // ─── Topic 3: Hypertension & Vascular Diseases ────────────────
  {
    topicCode: "PA-MOD-04-TOP-03",
    layers: [
      {
        layer: 1, slug: "hypertension-vascular-foundation", title: "Hypertension & Vascular Diseases - Foundation", estimatedMinutes: 20,
        summary: "Hypertension is a sustained elevation of blood pressure affecting target organs (heart, brain, kidney, retina). Primary (essential) hypertension accounts for ~95% of cases.",
        contentMd: `# Hypertension & Vascular Diseases

## Classification
- **Primary (Essential) HTN**: ~95% of cases; multifactorial (genetics, diet, obesity, stress)
- **Secondary HTN**: ~5%; identifiable cause (renal artery stenosis, pheochromocytoma, Conn syndrome, Cushing syndrome, coarctation of aorta)

## Target Organ Damage
| Organ | Effect |
|-------|--------|
| Heart | LV hypertrophy -> heart failure, accelerated CAD |
| Brain | Stroke (hemorrhagic/ischemic), hypertensive encephalopathy |
| Kidney | Hypertensive nephrosclerosis (benign and malignant) |
| Retina | Hypertensive retinopathy (AV nicking, flame hemorrhages, papilledema) |
| Aorta | Aortic dissection, atherosclerosis |

## Benign vs Malignant Hypertension
| Feature | Benign (Chronic) | Malignant (Accelerated) |
|---------|-----------------|----------------------|
| BP | Moderately elevated | Severely elevated (>180/120) |
| Course | Years-decades | Rapidly progressive |
| Kidney | Hyaline arteriolosclerosis | Hyperplastic arteriolosclerosis ("onion-skinning"), fibrinoid necrosis |
| Retina | Grade I-II changes | Grade III-IV (hemorrhages, papilledema) |
| Outcome | Gradual organ damage | Renal failure, stroke, death if untreated |

## Vascular Diseases

### Aneurysms
| Type | Location | Cause |
|------|----------|-------|
| Atherosclerotic | Abdominal aorta (below renals) | Atherosclerosis (most common) |
| Syphilitic | Ascending aorta | Vasa vasorum obliterans (tertiary syphilis) |
| Berry | Circle of Willis | Congenital, rupture -> SAH |
| Mycotic | Any artery | Infected emboli (endocarditis) |

### Vasculitis
| Vessel Size | Disease | Key Feature |
|-------------|---------|-------------|
| Large | Giant cell (Temporal) arteritis | Elderly, headache, jaw claudication, risk of blindness |
| Large | Takayasu arteritis | Young Asian women, "pulseless disease", aortic arch |
| Medium | Polyarteritis nodosa (PAN) | Transmural inflammation, fibrinoid necrosis, spares lungs, HBV associated |
| Medium | Kawasaki disease | Children <5, coronary artery aneurysm, mucocutaneous lymph node syndrome |
| Small | Granulomatosis with polyangiitis (GPA/Wegener) | Upper/lower respiratory + kidney, c-ANCA |
| Small | Microscopic polyangiitis | Lung + kidney, p-ANCA |`,
        mnemonics: [
          { text: "Hypertension = Heart, Head, Kidney, Eyes (4 target organs)", explanation: "The 4 major target organs of hypertension: Heart (LVH, HF), Brain (stroke), Kidney (nephrosclerosis), Eyes (retinopathy)" },
          { text: "c-ANCA = Wegener (GPA); p-ANCA = Microscopic polyangiitis", explanation: "c-ANCA (anti-PR3) for GPA; p-ANCA (anti-MPO) for microscopic polyangiitis and EGPA" },
        ],
        keyPoints: [
          "Essential (primary) HTN accounts for ~95%; secondary for ~5%",
          "Malignant HTN: onion-skinning of arterioles, fibrinoid necrosis, papilledema",
          "Berry aneurysm at Circle of Willis -> subarachnoid hemorrhage",
          "Takayasu: young Asian women, pulseless disease, aortic arch involvement",
          "Kawasaki: children <5, coronary artery aneurysm, mucocutaneous syndrome",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 11: Blood Vessels", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 15", edition: "8th" },
        ],
      },
      {
        layer: 2, slug: "hypertension-vascular-mechanism", title: "Hypertension & Vascular Diseases - Mechanism", estimatedMinutes: 30,
        summary: "Pathogenesis of hypertension including RAAS, vascular remodeling in hypertension, and mechanisms of vasculitis.",
        contentMd: `# Mechanisms

## Pathogenesis of Essential Hypertension
- Multifactorial: Genetic + Environmental
- Key systems involved:
  1. **RAAS** (Renin-Angiotensin-Aldosterone System): Angiotensin II causes vasoconstriction + aldosterone release -> Na/water retention
  2. **Sympathetic nervous system**: Increased catecholamines -> vasoconstriction, increased heart rate
  3. **Renal sodium handling**: Impaired natriuresis -> volume expansion
  4. **Endothelial dysfunction**: Decreased NO, increased endothelin -> vasoconstriction
  5. **Vascular remodeling**: Smooth muscle hypertrophy -> increased peripheral resistance

## Vascular Changes in HTN
- **Hyaline arteriolosclerosis** (benign HTN): Plasma protein leakage into vessel wall -> homogeneous pink hyaline material -> lumen narrowing
- **Hyperplastic arteriolosclerosis** (malignant HTN): Concentric SMC proliferation -> "onion-skin" appearance + fibrinoid necrosis
- **Atherosclerosis acceleration**: HTN promotes endothelial injury -> accelerated plaque formation

## Aortic Dissection
- Tear in aortic intima -> blood enters media -> dissects along the wall
- Risk factors: HTN (most important), Marfan syndrome, bicuspid aortic valve
- DeBakey classification: Type I (ascending + descending), Type II (ascending only), Type III (descending only)
- Stanford: Type A (involves ascending - surgical), Type B (descending only - medical)
- Histology: **Cystic medial degeneration** (loss of smooth muscle, elastic fiber fragmentation, mucoid material)
- Complication: Rupture into pericardium -> cardiac tamponade

## Vasculitis Mechanisms
| Mechanism | Examples |
|-----------|---------|
| Immune complex | PAN (HBV-associated), Lupus vasculitis |
| ANCA-associated | GPA (c-ANCA/PR3), MPA (p-ANCA/MPO) |
| Anti-endothelial Ab | Kawasaki disease |
| Cell-mediated (granulomatous) | Giant cell arteritis, Takayasu arteritis |
| Direct infection | Mycotic aneurysm |

> **Clinical Pearl**: In India, HTN prevalence is ~30% in adults. Uncontrolled HTN is the leading risk factor for hemorrhagic stroke. Many patients present late with malignant hypertension and renal failure.`,
        mnemonics: [
          { text: "Stanford A = Ascending = surgical (A for Ascending, A for operate ASAP)", explanation: "Stanford Type A (ascending aorta involved) requires emergency surgery; Type B (descending only) is managed medically" },
          { text: "Onion-skin = Malignant HTN (many layers of SMC like onion)", explanation: "Hyperplastic arteriolosclerosis with concentric smooth muscle proliferation giving onion-skin appearance is characteristic of malignant hypertension" },
        ],
        keyPoints: [
          "RAAS is the central pathway in HTN pathogenesis",
          "Hyaline arteriolosclerosis = benign HTN; Hyperplastic (onion-skin) = malignant HTN",
          "Aortic dissection: HTN most important risk factor; Stanford A = surgery",
          "Cystic medial degeneration is the predisposing aortic wall change in dissection",
          "GPA: c-ANCA (anti-PR3); MPA: p-ANCA (anti-MPO)",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 11", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 15", edition: "8th" },
        ],
      },
      {
        layer: 3, slug: "hypertension-vascular-clinical", title: "Hypertension & Vascular Diseases - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical presentation and management of hypertensive emergencies and vasculitis.",
        contentMd: `# Clinical Applications

## Hypertensive Emergency
- BP > 180/120 with acute target organ damage
- Brain: Hypertensive encephalopathy (headache, confusion, seizures)
- Kidney: Acute kidney injury
- Heart: Acute heart failure, acute MI
- Retina: Grade IV retinopathy (papilledema)
- Treatment: IV labetalol or nitroprusside to lower BP gradually (25% in first hour)

## Hypertensive Nephrosclerosis
- Benign: Gradual decline in renal function over years
- Malignant: Rapid renal failure, hematuria, proteinuria
- Kidney gross: Finely granular surface (benign); "flea-bitten" appearance (malignant - petechial hemorrhages)

## Kawasaki Disease (Indian Context)
- Mucocutaneous lymph node syndrome in children <5
- Diagnostic criteria: Fever > 5 days + 4 of 5:
  1. Bilateral conjunctival injection
  2. Oral changes (strawberry tongue, cracked lips)
  3. Extremity changes (edema, desquamation)
  4. Polymorphous rash
  5. Cervical lymphadenopathy
- Major complication: **Coronary artery aneurysm** (risk of MI in children)
- Treatment: IVIG + Aspirin (one of the few pediatric indications for aspirin)

## Giant Cell (Temporal) Arteritis
- Age > 50, unilateral headache, jaw claudication
- Risk: **Sudden blindness** (ophthalmic artery inflammation -> anterior ischemic optic neuropathy)
- ESR markedly elevated (>100)
- Treatment: High-dose steroids IMMEDIATELY (do not wait for biopsy)
- Biopsy: Granulomatous inflammation with giant cells in media; skip lesions possible

> **Clinical Pearl**: In India, Takayasu arteritis is more prevalent than in Western countries. Young women presenting with absent/unequal pulses, claudication, and hypertension should be evaluated for Takayasu arteritis with CT angiography.`,
        mnemonics: [
          { text: "CRASH for Kawasaki criteria", explanation: "Conjunctivitis, Rash (polymorphous), Adenopathy (cervical), Strawberry tongue, Hands/feet (edema/desquamation)" },
        ],
        keyPoints: [
          "Hypertensive emergency: BP >180/120 with acute organ damage -> IV medications",
          "Kawasaki: fever + mucocutaneous features, coronary aneurysm risk, treat with IVIG + aspirin",
          "Giant cell arteritis: immediate steroids to prevent blindness, ESR >100",
          "Takayasu arteritis: relatively more common in India, young women, pulseless disease",
          "Malignant HTN kidney: flea-bitten appearance, onion-skin arterioles, fibrinoid necrosis",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 11", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 15", edition: "8th" },
        ],
      },
      {
        layer: 4, slug: "hypertension-vascular-exam", title: "Hypertension & Vascular Diseases - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield points on HTN and vascular diseases.",
        contentMd: `# Exam Preparation

## One-Liners
- Most common type of hypertension: **Essential/Primary (~95%)**
- Hyaline arteriolosclerosis: **Benign HTN**
- Onion-skin (hyperplastic) arteriolosclerosis: **Malignant HTN**
- Flea-bitten kidney: **Malignant hypertension**
- Most common site of atherosclerotic aneurysm: **Abdominal aorta (infrarenal)**
- Syphilitic aneurysm site: **Ascending aorta (vasa vasorum obliterans)**
- Berry aneurysm rupture: **Subarachnoid hemorrhage**
- Aortic dissection predisposing histology: **Cystic medial degeneration**
- Stanford Type A dissection: **Requires emergency surgery**
- Takayasu arteritis: **Young Asian women, pulseless disease**
- Giant cell arteritis emergency: **Start steroids immediately to prevent blindness**
- Kawasaki complication: **Coronary artery aneurysm**
- PAN spares: **Lungs**
- c-ANCA: **GPA (Wegener)**; p-ANCA: **MPA**
- PAN associated with: **HBV**`,
        mnemonics: [
          { text: "PAN = Polyarteritis Nodosa = spares Pulmonary arteries (PAN has No Pulmonary)", explanation: "PAN characteristically spares the lungs, distinguishing it from microscopic polyangiitis" },
        ],
        keyPoints: [
          "Essential HTN (95%); Hyaline = benign; Onion-skin = malignant",
          "Berry aneurysm -> SAH; Syphilitic -> ascending aorta",
          "Stanford A = surgery; Stanford B = medical management",
          "GCA: emergency steroids; Kawasaki: IVIG + aspirin",
        ],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 11", edition: "10th" }],
      },
      {
        layer: 5, slug: "hypertension-vascular-recall", title: "Hypertension & Vascular Diseases - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard Q&A on hypertension and vascular diseases.",
        contentMd: `# Active Recall

**Q1:** What vascular change is seen in malignant hypertension?
> Hyperplastic arteriolosclerosis (onion-skinning) with fibrinoid necrosis

**Q2:** Most common site of atherosclerotic aneurysm?
> Abdominal aorta (infrarenal segment)

**Q3:** What is the predisposing histologic change for aortic dissection?
> Cystic medial degeneration (loss of elastic tissue and smooth muscle)

**Q4:** What complication of Kawasaki disease is most feared?
> Coronary artery aneurysm (can cause MI in children)

**Q5:** c-ANCA is associated with which vasculitis?
> Granulomatosis with Polyangiitis (GPA/Wegener)

**Q6:** What is the urgency in Giant Cell Arteritis?
> Start high-dose steroids immediately to prevent irreversible blindness

**Q7:** What characterizes Takayasu arteritis?
> Young Asian women, pulseless disease, granulomatous inflammation of aortic arch

**Q8:** Which type of Stanford aortic dissection requires emergency surgery?
> Stanford Type A (involves the ascending aorta)`,
        mnemonics: [],
        keyPoints: ["8 recall questions on HTN, aneurysms, dissection, and vasculitis"],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 11", edition: "10th" }],
      },
    ],
  },

  // ─── Topic 4: Obstructive Lung Diseases ───────────────────────
  {
    topicCode: "PA-MOD-04-TOP-04",
    layers: [
      {
        layer: 1, slug: "obstructive-lung-foundation", title: "Obstructive Lung Diseases - Foundation", estimatedMinutes: 20,
        summary: "Obstructive lung diseases are characterized by increased airway resistance and reduced expiratory flow rate. Major types: COPD (emphysema + chronic bronchitis), asthma, and bronchiectasis.",
        contentMd: `# Obstructive Lung Diseases

## Obstructive vs Restrictive
| Feature | Obstructive | Restrictive |
|---------|------------|-------------|
| Pathology | Airway obstruction | Reduced lung compliance |
| FEV1 | Decreased | Decreased |
| FVC | Normal or decreased | Decreased |
| FEV1/FVC | **Decreased (<0.7)** | Normal or increased |
| Examples | COPD, Asthma, Bronchiectasis | Pulmonary fibrosis, Sarcoidosis |

## COPD: Emphysema
- **Abnormal permanent enlargement of airspaces distal to terminal bronchioles with destruction of alveolar walls without fibrosis**

| Type | Location | Cause | Distribution |
|------|----------|-------|-------------|
| Centriacinar (centrilobular) | Respiratory bronchioles (proximal) | **Smoking** (most common type) | Upper lobes |
| Panacinar (panlobular) | Entire acinus | **Alpha-1 antitrypsin deficiency** | Lower lobes |
| Paraseptal (distal acinar) | Distal alveoli near septa/pleura | Subpleural location | Apical subpleural blebs -> pneumothorax |

### Pathogenesis
- **Protease-antiprotease imbalance**: Neutrophil elastase destroys alveolar walls; Alpha-1 antitrypsin (AAT) normally inhibits elastase
- Smoking: Recruits neutrophils + inactivates AAT -> unchecked elastase activity -> alveolar destruction
- **Oxidant-antioxidant imbalance**: ROS from cigarette smoke and inflammatory cells

## COPD: Chronic Bronchitis
- **Clinical definition**: Persistent productive cough for at least 3 months in 2 consecutive years
- **Pathology**: Mucous gland hypertrophy/hyperplasia in large airways
- **Reid index** = Mucous gland thickness / Bronchial wall thickness (normal <0.4; increased in chronic bronchitis)

## Asthma
- Chronic airway inflammation with **reversible** bronchoconstriction
- Atopic (IgE-mediated/Type I, most common) vs Non-atopic (non-IgE)
- Triad: Airway inflammation + Bronchial hyperresponsiveness + Reversible obstruction
- Pathology: Mucus plugs, eosinophilic infiltration, smooth muscle hypertrophy, basement membrane thickening

## Bronchiectasis
- **Permanent dilation of bronchi** due to destruction of bronchial wall
- Causes: Cystic fibrosis (most common in West), Post-infections (TB, measles in India), Kartagener syndrome, ABPA
- Gross: Dilated bronchi extending to pleural surface`,
        mnemonics: [
          { text: "CENTRIACINAR = Cigarettes (upper lobes); PANACINAR = Pi (AAT deficiency, lower lobes)", explanation: "Centriacinar emphysema from smoking affects upper lobes; Panacinar from alpha-1 antitrypsin (Pi) deficiency affects lower lobes" },
          { text: "Reid Index > 0.4 = chronic Bronchitis (R for Reid, B for Bronchitis)", explanation: "Reid index (gland/wall ratio) > 0.4 indicates mucous gland hypertrophy in chronic bronchitis" },
        ],
        keyPoints: [
          "Obstructive: FEV1/FVC < 0.7; Restrictive: FEV1/FVC normal/increased",
          "Centriacinar emphysema: smoking, upper lobes; Panacinar: AAT deficiency, lower lobes",
          "Protease-antiprotease imbalance is the key mechanism of emphysema",
          "Chronic bronchitis: productive cough >= 3 months in 2 consecutive years, elevated Reid index",
          "Asthma: reversible obstruction, eosinophilic inflammation, Type I hypersensitivity (atopic)",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15: Obstructive Lung Diseases", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 16: Respiratory Pathology", edition: "8th" },
        ],
      },
      {
        layer: 2, slug: "obstructive-lung-mechanism", title: "Obstructive Lung Diseases - Mechanism", estimatedMinutes: 30,
        summary: "Detailed pathogenesis of emphysema, asthma mediators, and Curschmann spirals and Charcot-Leyden crystals.",
        contentMd: `# Mechanisms

## Emphysema: Protease-Antiprotease Mechanism
1. Smoking -> recruits neutrophils and macrophages to lung
2. Neutrophils release **elastase** (serine protease)
3. Macrophages release MMP-9, MMP-12
4. **Alpha-1 antitrypsin** (A1AT/Pi protein) normally neutralizes elastase
5. Smoking: Oxidizes methionine in A1AT -> inactivates it
6. Net effect: Unchecked protease activity -> alveolar wall destruction

### A1AT Deficiency
- Autosomal co-dominant inheritance
- Normal: PiMM; Disease: **PiZZ** (most severe)
- PiZZ -> misfolded protein accumulates in hepatocytes (PAS-positive globules) -> liver disease (cirrhosis, HCC)
- Lungs: Decreased A1AT -> panacinar emphysema (lower lobes)

## Asthma Pathogenesis

### Early Phase (Minutes)
1. Allergen inhaled -> binds IgE on mast cells
2. Mast cell degranulation -> **histamine, leukotrienes (LTC4, D4, E4), prostaglandins**
3. Bronchospasm, mucus secretion, vasodilation

### Late Phase (6-24 hours)
1. Eosinophils, neutrophils, T cells recruited
2. **Major Basic Protein (MBP)** from eosinophils -> epithelial damage
3. Sustained inflammation -> bronchial hyperresponsiveness

### Histologic Findings in Asthma
| Finding | Significance |
|---------|-------------|
| Curschmann spirals | Twisted mucus casts of small airways |
| Charcot-Leyden crystals | Crystallized eosinophil granule proteins |
| Creola bodies | Clusters of shed epithelial cells |
| Mucus plugs | Obstruct bronchioles |
| Basement membrane thickening | Sub-epithelial collagen deposition |
| Smooth muscle hypertrophy | Chronic remodeling |
| Goblet cell metaplasia | Increased mucus production |

## Bronchiectasis Mechanisms
- Obstruction + Infection -> vicious cycle
- Chronic infection -> destruction of bronchial wall (cartilage, muscle, elastic tissue)
- Permanent dilation of bronchi -> stagnant secretions -> more infection

### Kartagener Syndrome
- Autosomal recessive, **ciliary dyskinesia** (immotile cilia)
- Triad: Bronchiectasis + Situs inversus + Sinusitis
- Defect in dynein arms of cilia

> **Clinical Pearl**: In India, post-TB bronchiectasis is a very common clinical entity. Patients present with chronic productive cough, hemoptysis, and recurrent infections affecting destroyed lung segments, typically in the upper lobes.`,
        mnemonics: [
          { text: "PiZZ = Pizza (both have Z) = worst A1AT genotype", explanation: "PiZZ homozygotes have the most severe alpha-1 antitrypsin deficiency -> panacinar emphysema + liver cirrhosis" },
          { text: "Kartagener = Kinky cilia (dynein arm defect) -> bronchiectasis, situs inversus, sinusitis", explanation: "Kartagener syndrome: immotile cilia from dynein arm defect -> impaired mucociliary clearance" },
        ],
        keyPoints: [
          "Emphysema: protease-antiprotease imbalance; smoking inactivates A1AT by oxidation",
          "PiZZ phenotype: panacinar emphysema (lower lobes) + liver disease (PAS-positive globules)",
          "Asthma: early phase (mast cells, histamine) + late phase (eosinophils, MBP)",
          "Curschmann spirals (mucus casts) and Charcot-Leyden crystals (eosinophils) in asthma",
          "Kartagener: immotile cilia (dynein arm defect), bronchiectasis + situs inversus + sinusitis",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 16", edition: "8th" },
        ],
      },
      {
        layer: 3, slug: "obstructive-lung-clinical", title: "Obstructive Lung Diseases - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical presentation and management of COPD, asthma, and bronchiectasis.",
        contentMd: `# Clinical Applications

## Pink Puffer vs Blue Bloater
| Feature | Pink Puffer (Emphysema) | Blue Bloater (Chronic Bronchitis) |
|---------|------------------------|----------------------------------|
| Build | Thin, cachectic | Obese |
| Dyspnea | Prominent, pursed-lip breathing | Less prominent |
| Cyanosis | Minimal | Prominent (blue) |
| Cough | Minimal | Productive, copious sputum |
| Cor pulmonale | Late | Early |
| PaCO2 | Normal/Low | Elevated (CO2 retention) |

## Asthma Management
- **Reliever**: Short-acting beta-2 agonist (SABA - salbutamol)
- **Controller**: Inhaled corticosteroids (ICS - budesonide, beclomethasone)
- Severe: ICS + LABA (formoterol/salmeterol), oral steroids
- Status asthmaticus: Medical emergency -> IV steroids, nebulized SABA, oxygen, epinephrine if refractory
- Peak flow monitoring for disease severity

## COPD Management
- Smoking cessation: Single most important intervention
- Bronchodilators: LAMA (tiotropium), LABA, SABA as needed
- ICS: Only if frequent exacerbations + eosinophilic phenotype
- Oxygen therapy: For chronic hypoxia (PaO2 <55 mmHg)
- Only proven to reduce mortality: **Smoking cessation + Long-term oxygen therapy**

## Indian Context
- COPD: Biomass fuel exposure (cooking with wood/cow dung) is a major cause in rural India, especially women
- Asthma: Increasing prevalence in urban India (air pollution, urbanization)
- Bronchiectasis: Post-TB destruction is the most common cause in India
- Air pollution: Delhi NCR has some of the highest PM2.5 levels globally -> contributes to COPD/asthma burden

> **Clinical Pearl**: In rural India, women who cook with biomass fuels in poorly ventilated kitchens have COPD rates comparable to male smokers. Indoor air pollution from biomass is now recognized as a major risk factor.`,
        mnemonics: [
          { text: "Pink Puffer = Emphysema (PP = Panting/Pursed-lips); Blue Bloater = Bronchitis (BB = Blue, Big cough)", explanation: "Emphysema patients are thin, dyspneic (pink puffers); Chronic bronchitis patients are cyanotic, edematous (blue bloaters)" },
        ],
        keyPoints: [
          "Smoking cessation is the most important intervention in COPD",
          "Only smoking cessation and long-term O2 therapy reduce COPD mortality",
          "Status asthmaticus is a medical emergency requiring IV steroids and nebulized SABA",
          "Biomass fuel exposure is a major COPD cause in rural Indian women",
          "Post-TB bronchiectasis is the most common cause of bronchiectasis in India",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 16", edition: "8th" },
        ],
      },
      {
        layer: 4, slug: "obstructive-lung-exam", title: "Obstructive Lung Diseases - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield points on obstructive lung diseases.",
        contentMd: `# Exam Preparation

## One-Liners
- FEV1/FVC in obstructive disease: **< 0.7**
- Most common type of emphysema: **Centriacinar (from smoking, upper lobes)**
- A1AT deficiency emphysema: **Panacinar, lower lobes, PiZZ**
- PAS-positive globules in hepatocytes: **A1AT deficiency**
- Reid index elevated: **Chronic bronchitis**
- Chronic bronchitis definition: **Productive cough >= 3 months in 2 consecutive years**
- Curschmann spirals: **Twisted mucus casts in asthma**
- Charcot-Leyden crystals: **Eosinophil granule proteins in asthma**
- Kartagener syndrome triad: **Bronchiectasis + Situs inversus + Sinusitis**
- Kartagener defect: **Dynein arms of cilia**
- Pink puffer: **Emphysema**; Blue bloater: **Chronic bronchitis**
- Only interventions reducing COPD mortality: **Smoking cessation + Long-term oxygen**
- Asthma type: **Reversible obstruction**; COPD: **Irreversible obstruction**

## PFT Comparison
| Disease | FEV1 | FVC | FEV1/FVC | TLC |
|---------|------|-----|----------|-----|
| Emphysema | Down | Down/N | Down | Up (air trapping) |
| Chronic bronchitis | Down | Down/N | Down | N/Up |
| Asthma (acute) | Down | Down/N | Down | N/Up |
| Pulmonary fibrosis | Down | Down | N/Up | Down |`,
        mnemonics: [
          { text: "A1AT: Liver (PAS globules) + Lungs (Panacinar emphysema) = LL disease", explanation: "Alpha-1 antitrypsin deficiency affects both lungs (emphysema) and liver (cirrhosis) - a two-organ disease" },
        ],
        keyPoints: [
          "Centriacinar = smoking (upper); Panacinar = A1AT deficiency (lower)",
          "Chronic bronchitis = clinical definition (cough); Emphysema = pathologic definition (airspace enlargement)",
          "Curschmann spirals + Charcot-Leyden crystals = asthma",
          "Kartagener: dynein arm defect -> immotile cilia syndrome",
        ],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15", edition: "10th" }],
      },
      {
        layer: 5, slug: "obstructive-lung-recall", title: "Obstructive Lung Diseases - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard Q&A on obstructive lung diseases.",
        contentMd: `# Active Recall

**Q1:** What is the FEV1/FVC ratio in obstructive lung disease?
> Decreased (< 0.7)

**Q2:** Centriacinar emphysema is caused by what and affects which lobes?
> Smoking; Upper lobes

**Q3:** A1AT deficiency causes what type of emphysema and where?
> Panacinar emphysema; Lower lobes (PiZZ genotype)

**Q4:** What are Curschmann spirals?
> Twisted mucus casts of small airways found in sputum of asthma patients

**Q5:** What is the Reid index and when is it elevated?
> Ratio of mucous gland thickness to bronchial wall thickness; elevated (>0.4) in chronic bronchitis

**Q6:** What is Kartagener syndrome?
> Immotile cilia syndrome (dynein arm defect): Bronchiectasis + Situs inversus + Sinusitis

**Q7:** What reduces mortality in COPD?
> Only smoking cessation and long-term oxygen therapy

**Q8:** What is the most common cause of bronchiectasis in India?
> Post-tuberculosis bronchiectasis`,
        mnemonics: [],
        keyPoints: ["8 recall questions on COPD, asthma, and bronchiectasis"],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15", edition: "10th" }],
      },
    ],
  },

  // ─── Topic 5: Pneumonias & TB ─────────────────────────────────
  {
    topicCode: "PA-MOD-04-TOP-05",
    layers: [
      {
        layer: 1, slug: "pneumonias-tb-foundation", title: "Pneumonias & TB - Foundation", estimatedMinutes: 20,
        summary: "Pneumonia is infection of the lung parenchyma classified by anatomic pattern (lobar, bronchopneumonia) or setting (community, hospital, atypical). TB is the most important infectious lung disease in India.",
        contentMd: `# Pneumonias & TB

## Classification of Pneumonia
| Type | Pattern | Organism | Features |
|------|---------|----------|---------|
| Lobar | Entire lobe consolidated | S. pneumoniae (most common) | Uniform consolidation of entire lobe |
| Bronchopneumonia | Patchy, multifocal | S. aureus, H. influenzae, Klebsiella | Scattered patches around bronchi |
| Interstitial (Atypical) | Interstitial inflammation | Mycoplasma, Viruses, Chlamydia | Diffuse, bilateral, less severe |

## Lobar Pneumonia Stages
1. **Congestion** (1-2 days): Vascular engorgement, serous exudate, bacteria
2. **Red hepatization** (2-4 days): RBCs + neutrophils + fibrin fill alveoli (liver-like consistency)
3. **Gray hepatization** (4-8 days): Fibrin + degrading cells, no RBCs (grayish)
4. **Resolution** (>8 days): Enzymatic digestion of exudate, restoration of architecture

## Pulmonary Tuberculosis (TB)

### Primary TB
- First exposure (usually children)
- **Ghon focus**: Subpleural lesion in mid-zone of lung
- **Ghon complex**: Ghon focus + hilar lymph node involvement
- **Ranke complex**: Calcified Ghon complex
- Usually self-limited; may progress in immunocompromised

### Secondary (Reactivation) TB
- Reactivation of latent TB (or re-infection)
- Involves **upper lobes** (apices) - high oxygen tension
- Caseous necrosis -> cavitation
- Highly infectious (cavity connects to airways)
- Can spread: Bronchogenic, hematogenous (miliary TB), lymphatic

### Miliary TB
- Hematogenous dissemination -> tiny granulomas in ALL organs
- Looks like millet seeds on gross exam
- Occurs in immunocompromised or overwhelming infection

## Diagnosis
- Sputum: AFB stain (Ziehl-Neelsen), Culture (Lowenstein-Jensen, BACTEC), **GeneXpert/CBNAAT** (rapid molecular)
- Histology: Caseating granulomas + Langhans giant cells
- Tuberculin test (Mantoux): Delayed-type hypersensitivity (Type IV) to PPD`,
        mnemonics: [
          { text: "Lobar pneumonia stages: Can Red Gray Resolve (Congestion, Red hepatization, Gray hepatization, Resolution)", explanation: "4 stages of lobar pneumonia in chronological order" },
          { text: "Ghon focus = Ghon (middle zone, primary); Secondary TB = Superior (upper lobe, reactivation)", explanation: "Primary TB: mid-zone Ghon focus; Secondary/reactivation TB: upper lobe apices" },
        ],
        keyPoints: [
          "S. pneumoniae is the most common cause of community-acquired lobar pneumonia",
          "4 stages of lobar pneumonia: Congestion -> Red hepatization -> Gray hepatization -> Resolution",
          "Primary TB: Ghon focus (mid-zone) + hilar nodes = Ghon complex",
          "Secondary TB: upper lobe apices, cavitation, highly infectious",
          "GeneXpert/CBNAAT provides rapid molecular diagnosis of TB and rifampicin resistance",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15: Pneumonia; Chapter 8: TB", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 16", edition: "8th" },
        ],
      },
      {
        layer: 2, slug: "pneumonias-tb-mechanism", title: "Pneumonias & TB - Mechanism", estimatedMinutes: 30,
        summary: "Immune response in TB, granuloma formation, drug resistance mechanisms, and atypical pneumonia pathogenesis.",
        contentMd: `# Mechanisms

## TB Immunology
1. M. tuberculosis inhaled -> engulfed by alveolar macrophages
2. Bacteria survive inside macrophages (inhibit phagolysosome fusion)
3. Macrophages present antigens to **CD4+ T cells** (via MHC II)
4. Th1 response: **IFN-gamma** activates macrophages -> epithelioid cells
5. Granuloma formation: Central caseous necrosis + epithelioid cells + Langhans giant cells + T lymphocyte rim
6. **Type IV hypersensitivity** and **cell-mediated immunity** occur simultaneously
7. Tissue damage (caseous necrosis) is caused by the immune response, not directly by bacteria

## Drug-Resistant TB
| Type | Definition | Treatment |
|------|-----------|-----------|
| MDR-TB | Resistant to Isoniazid AND Rifampicin | Second-line drugs (18-24 months) |
| XDR-TB | MDR + Fluoroquinolone + 1 injectable | Very limited options |
| Pre-XDR | MDR + Fluoroquinolone resistant | Modified regimen |

- India has ~27% of global MDR-TB cases
- GeneXpert detects rifampicin resistance rapidly
- DOTS (Directly Observed Therapy, Short-course) is the national strategy

## Klebsiella Pneumonia
- Gram-negative rod, commonly affects alcoholics and debilitated patients
- Thick mucoid sputum ("currant jelly" sputum)
- Upper lobe involvement, bulging fissure sign on X-ray
- Tendency to cause lung abscess and extensive tissue destruction
- Common in India among alcoholics and diabetics

## Atypical Pneumonia
- **Mycoplasma pneumoniae**: Most common cause of atypical pneumonia
  - Walking pneumonia (mild symptoms, active patient)
  - Cold agglutinins (IgM anti-I antibodies)
  - X-ray worse than clinical picture
- **Pneumocystis jirovecii**: Opportunistic in HIV/AIDS (CD4 < 200)
  - Bilateral ground-glass opacities on HRCT
  - Diagnosed by silver stain (GMS) on BAL or induced sputum

## Lung Abscess
- Localized collection of pus in lung parenchyma with cavity
- Causes: Aspiration (most common), post-pneumonia, septic emboli
- Organisms: Mixed anaerobes (aspiration), S. aureus, Klebsiella
- Most common site: **Right lower lobe** (aspiration route via right main bronchus)

> **Clinical Pearl**: India's RNTCP (now NTEP - National TB Elimination Programme) provides free TB diagnosis (including GeneXpert) and treatment. The goal is TB elimination by 2025, ahead of the global 2030 SDG target.`,
        mnemonics: [
          { text: "MDR = Must Defeat Rifampicin + INH (resistant to both)", explanation: "MDR-TB is defined by resistance to the two most potent first-line drugs: Isoniazid and Rifampicin" },
        ],
        keyPoints: [
          "TB immunity: Th1/IFN-gamma mediated, Type IV hypersensitivity causes tissue damage",
          "MDR-TB: resistant to isoniazid + rifampicin; India has ~27% of global cases",
          "Klebsiella: currant jelly sputum, upper lobe, bulging fissure, common in alcoholics",
          "Mycoplasma: most common atypical pneumonia, cold agglutinins, walking pneumonia",
          "Lung abscess: right lower lobe most common (aspiration via right main bronchus)",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15; Chapter 8", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 16", edition: "8th" },
        ],
      },
      {
        layer: 3, slug: "pneumonias-tb-clinical", title: "Pneumonias & TB - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical diagnosis and management of pneumonia and TB in India.",
        contentMd: `# Clinical Applications

## TB Treatment (NTEP India)
### New Cases (Cat-I)
- Intensive phase (2 months): **HRZE** (Isoniazid, Rifampicin, Pyrazinamide, Ethambutol)
- Continuation phase (4 months): **HRE**
- Total: 6 months

### Drug Side Effects
| Drug | Side Effect |
|------|------------|
| Isoniazid (H) | Peripheral neuropathy (pyridoxine/B6 prevents), hepatotoxicity |
| Rifampicin (R) | Orange discoloration of secretions, hepatotoxicity, induces P450 |
| Pyrazinamide (Z) | Hyperuricemia (gout), hepatotoxicity (most hepatotoxic of all) |
| Ethambutol (E) | Optic neuritis (color vision loss) |
| Streptomycin (S) | Ototoxicity, nephrotoxicity |

## Extrapulmonary TB (Common in India)
- TB lymphadenitis (scrofula): Most common extrapulmonary TB
- Intestinal TB: Ileocecal junction (mimics Crohn disease)
- TB meningitis: Basal meningitis, cranial nerve palsies, low CSF glucose
- Skeletal TB: Pott spine (vertebral TB), cold abscess
- Genitourinary TB: Sterile pyuria, strictures
- Miliary TB: Disseminated, choroidal tubercles on fundoscopy

## Hospital-Acquired Pneumonia
- Onset >= 48 hours after hospitalization
- Organisms: MRSA, Pseudomonas, Acinetobacter, Klebsiella
- Ventilator-associated pneumonia (VAP) is a major ICU problem in India

## Community-Acquired Pneumonia Algorithm
1. Outpatient: Amoxicillin or Macrolide
2. Inpatient: Beta-lactam + Macrolide
3. ICU: Beta-lactam + Macrolide or Fluoroquinolone
4. CURB-65 score for severity assessment

> **Clinical Pearl**: In India, TB is the most common opportunistic infection in HIV-positive patients. All HIV patients should be screened for TB, and all TB patients should be offered HIV testing. Co-infected patients require careful management to avoid drug interactions and immune reconstitution inflammatory syndrome (IRIS).`,
        mnemonics: [
          { text: "HRZE = Have Rifampicin and Z (pyrazinamide) and Ethambutol with H (isoniazid)", explanation: "Standard 4-drug regimen for intensive phase of TB treatment in India" },
          { text: "INH = I Need pyridoxine (B6) to prevent Neuropathy from H", explanation: "Isoniazid causes peripheral neuropathy by interfering with pyridoxine (vitamin B6) metabolism" },
        ],
        keyPoints: [
          "TB treatment: HRZE for 2 months then HRE for 4 months (total 6 months)",
          "Pyrazinamide is the most hepatotoxic; Ethambutol causes optic neuritis",
          "TB lymphadenitis is the most common extrapulmonary TB",
          "TB-HIV co-infection management requires careful drug interaction awareness",
          "Hospital-acquired pneumonia: MRSA, Pseudomonas, Acinetobacter",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15; Chapter 8", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 16", edition: "8th" },
        ],
      },
      {
        layer: 4, slug: "pneumonias-tb-exam", title: "Pneumonias & TB - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield points on pneumonia and TB.",
        contentMd: `# Exam Preparation

## One-Liners
- Most common cause of lobar pneumonia: **S. pneumoniae**
- Most common cause of atypical pneumonia: **Mycoplasma pneumoniae**
- Currant jelly sputum: **Klebsiella pneumoniae**
- Red hepatization: **Stage 2 of lobar pneumonia (RBCs + neutrophils + fibrin)**
- Ghon complex: **Primary TB (Ghon focus + hilar LN)**
- Secondary TB site: **Lung apices (upper lobes)**
- Most common extrapulmonary TB: **Lymph node (scrofula)**
- Miliary TB pattern: **Millet seed-sized granulomas in all organs**
- TB diagnosis (rapid): **GeneXpert/CBNAAT**
- TB stain: **Ziehl-Neelsen (acid-fast)**
- MDR-TB definition: **Resistant to INH + Rifampicin**
- Isoniazid side effect prevented by B6: **Peripheral neuropathy**
- Most hepatotoxic ATT drug: **Pyrazinamide**
- Ethambutol side effect: **Optic neuritis**
- Pneumocystis pneumonia in: **HIV (CD4 < 200)**
- PCP stain: **GMS (silver stain)**
- Aspiration pneumonia most common site: **Right lower lobe**

## Pneumonia Comparison
| Feature | Lobar | Bronchopneumonia | Atypical |
|---------|-------|-----------------|----------|
| Pattern | Entire lobe | Patchy, peribronchial | Interstitial |
| Organism | S. pneumoniae | S. aureus, Gram-neg | Mycoplasma, virus |
| Exudate | Intra-alveolar | Intra-alveolar | Interstitial |
| X-ray | Homogeneous opacity | Patchy infiltrates | Bilateral, diffuse |`,
        mnemonics: [
          { text: "Lobar = One lobe, One organism (S. pneumoniae); Broncho = Many patches, Many bugs", explanation: "Lobar pneumonia: single lobe consolidation, usually S. pneumoniae; Bronchopneumonia: multifocal patches, various organisms" },
        ],
        keyPoints: [
          "S. pneumoniae = most common lobar pneumonia; Mycoplasma = most common atypical",
          "4 stages of lobar pneumonia: Congestion, Red hep, Gray hep, Resolution",
          "Secondary TB: upper lobes, cavitation, AFB-positive sputum",
          "MDR-TB = INH + Rifampicin resistant; GeneXpert detects rifampicin resistance rapidly",
        ],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15; Chapter 8", edition: "10th" }],
      },
      {
        layer: 5, slug: "pneumonias-tb-recall", title: "Pneumonias & TB - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard Q&A on pneumonia and TB.",
        contentMd: `# Active Recall

**Q1:** Most common cause of community-acquired lobar pneumonia?
> Streptococcus pneumoniae

**Q2:** Name the 4 stages of lobar pneumonia.
> Congestion, Red hepatization, Gray hepatization, Resolution

**Q3:** What is a Ghon complex?
> Primary TB: Ghon focus (subpleural mid-zone lesion) + involved hilar lymph nodes

**Q4:** Where does secondary (reactivation) TB typically occur?
> Lung apices (upper lobes) due to high oxygen tension

**Q5:** What defines MDR-TB?
> Resistance to both Isoniazid and Rifampicin

**Q6:** Which ATT drug causes peripheral neuropathy and how is it prevented?
> Isoniazid; prevented by pyridoxine (vitamin B6) supplementation

**Q7:** What organism causes pneumonia with currant jelly sputum?
> Klebsiella pneumoniae

**Q8:** Most common extrapulmonary TB site?
> Lymph nodes (cervical lymphadenitis/scrofula)`,
        mnemonics: [],
        keyPoints: ["8 recall questions on pneumonia classification and TB pathology"],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15; Chapter 8", edition: "10th" }],
      },
    ],
  },

  // ─── Topic 6: Lung Tumors ────────────────────────────────────
  {
    topicCode: "PA-MOD-04-TOP-06",
    layers: [
      {
        layer: 1, slug: "lung-tumors-foundation", title: "Lung Tumors - Foundation", estimatedMinutes: 20,
        summary: "Lung carcinoma is the leading cause of cancer death worldwide. Smoking is the primary cause. Major types: adenocarcinoma, squamous cell, small cell, and large cell carcinoma.",
        contentMd: `# Lung Tumors

## Epidemiology
- Leading cause of cancer death in both men and women globally
- Smoking is the cause in ~85% of cases
- In India: Increasingly common, especially in males; bidi smoking is a major risk factor

## Classification
| Type | Frequency | Location | Key Features |
|------|-----------|----------|-------------|
| **Adenocarcinoma** | Most common (40%) | Peripheral | Most common in non-smokers and women; glandular/papillary, mucin+, TTF-1+ |
| **Squamous cell CA** | ~25% | Central (hilar) | Strongest smoking association, keratin pearls, intercellular bridges, PTHrP -> hypercalcemia |
| **Small cell CA** | ~15% | Central | Neuroendocrine, most aggressive, paraneoplastic syndromes, SIADH/ACTH |
| **Large cell CA** | ~10% | Peripheral | Undifferentiated, diagnosis of exclusion, poor prognosis |

## Non-Small Cell vs Small Cell
| Feature | Non-Small Cell (NSCLC) | Small Cell (SCLC) |
|---------|----------------------|-------------------|
| Types | Adeno, Squamous, Large cell | Oat cell carcinoma |
| Surgery | Yes (if resectable) | No (usually disseminated) |
| Chemo-sensitivity | Moderate | High (but relapses) |
| Paraneoplastic | Less common | Very common |
| Prognosis | Better (if early) | Worst |

## Paraneoplastic Syndromes
| Syndrome | Tumor Type | Mechanism |
|----------|-----------|-----------|
| Hypercalcemia | Squamous cell | PTHrP secretion |
| SIADH | Small cell | ADH secretion |
| Cushing syndrome | Small cell | ACTH secretion |
| Lambert-Eaton | Small cell | Anti-Ca channel Ab |
| Hypertrophic osteoarthropathy | Any (especially adeno) | Clubbing + periostitis |

## Pancoast Tumor (Superior Sulcus Tumor)
- Tumor at lung apex invading:
  - Brachial plexus (arm pain)
  - Sympathetic chain -> **Horner syndrome** (miosis, ptosis, anhidrosis)
  - Subclavian vessels`,
        mnemonics: [
          { text: "Squamous = Central, Smoking, Calcium (3 Cs); Adeno = Peripheral, non-smokers, women", explanation: "Squamous cell: central location, strongest smoking link, PTHrP-mediated hypercalcemia; Adenocarcinoma: peripheral, most common in non-smokers and women" },
          { text: "Small cell = SIADH + ACTH + Lambert-Eaton (SAL)", explanation: "Small cell lung carcinoma is associated with the most paraneoplastic syndromes: SIADH, ACTH (Cushing), Lambert-Eaton" },
        ],
        keyPoints: [
          "Adenocarcinoma is now the most common lung cancer worldwide (40%)",
          "Squamous cell has the strongest association with smoking; central location",
          "Small cell: most aggressive, paraneoplastic syndromes, chemo-sensitive but relapses",
          "Pancoast tumor at apex -> Horner syndrome (miosis, ptosis, anhidrosis)",
          "Smoking causes ~85% of all lung cancers",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15: Lung Tumors", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 16", edition: "8th" },
        ],
      },
      {
        layer: 2, slug: "lung-tumors-mechanism", title: "Lung Tumors - Mechanism", estimatedMinutes: 30,
        summary: "Molecular pathogenesis of lung cancer, driver mutations, and targeted therapy including EGFR and ALK-targeted treatment.",
        contentMd: `# Mechanisms

## Molecular Pathogenesis
### Adenocarcinoma Driver Mutations
| Mutation | Frequency | Targeted Drug |
|----------|-----------|--------------|
| EGFR mutation | ~15% (higher in Asians: 30-50%) | Gefitinib, Erlotinib, Osimertinib |
| ALK rearrangement | ~5% | Crizotinib, Alectinib |
| KRAS mutation | ~30% | Sotorasib (KRAS G12C) |
| ROS1 rearrangement | ~2% | Crizotinib |
| BRAF V600E | ~2% | Dabrafenib + Trametinib |
| PD-L1 expression | Variable | Pembrolizumab, Nivolumab |

### Squamous Cell Carcinoma
- p53 mutations (most common)
- RB pathway inactivation
- FGFR1 amplification
- Fewer targetable mutations compared to adenocarcinoma

### Small Cell Carcinoma
- Almost always p53 + RB mutations (both lost)
- Neuroendocrine differentiation: Chromogranin+, Synaptophysin+, CD56+
- Very high proliferation rate (Ki-67 ~90%)
- Responds to chemo initially but invariably relapses

## Precursor Lesions
| Lesion | Leads To |
|--------|---------|
| Squamous metaplasia -> dysplasia -> CIS | Squamous cell carcinoma |
| Atypical adenomatous hyperplasia (AAH) | Adenocarcinoma |
| Diffuse idiopathic pulmonary neuroendocrine cell hyperplasia (DIPNECH) | Carcinoid tumor |

## Adenocarcinoma Subtypes (WHO 2021)
- **Adenocarcinoma in situ (AIS)**: Pure lepidic growth, <= 3 cm, 100% 5-year survival
- **Minimally invasive adenocarcinoma (MIA)**: Lepidic dominant, <5mm invasion
- **Invasive adenocarcinoma**: Lepidic, acinar, papillary, micropapillary, solid subtypes

## Carcinoid Tumors
- Low-grade neuroendocrine tumors
- Typical carcinoid: Good prognosis, central location, carcinoid syndrome rare
- Atypical carcinoid: More aggressive, more mitoses
- Both: Chromogranin+, Synaptophysin+

> **Clinical Pearl**: EGFR mutations are significantly more common in Asian non-smokers (30-50%) compared to Western populations. Indian lung adenocarcinoma patients, especially non-smoking women, should be tested for EGFR mutations as targeted therapy greatly improves outcomes.`,
        mnemonics: [
          { text: "EGFR = East Asian Gene Finding Remarkably common", explanation: "EGFR mutations are much more common in East and South Asian populations (30-50%) compared to Western populations (~15%)" },
        ],
        keyPoints: [
          "EGFR mutations common in Asian non-smokers -> responsive to TKIs (gefitinib, osimertinib)",
          "ALK rearrangement in ~5% of adenocarcinomas -> crizotinib responsive",
          "Small cell: p53 + RB both mutated, neuroendocrine markers positive, very high Ki-67",
          "Squamous dysplasia -> CIS -> invasive squamous carcinoma (metaplasia-dysplasia-carcinoma sequence)",
          "PD-L1 expression determines eligibility for immunotherapy",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 16", edition: "8th" },
        ],
      },
      {
        layer: 3, slug: "lung-tumors-clinical", title: "Lung Tumors - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical presentation, staging, and management of lung cancer including pleural diseases.",
        contentMd: `# Clinical Applications

## Clinical Presentation
- Cough (most common symptom), hemoptysis, dyspnea, chest pain
- Weight loss, fatigue (constitutional)
- **SVC syndrome**: Obstruction of SVC -> facial/upper body edema, dilated neck veins (especially small cell, central tumors)
- **Recurrent laryngeal nerve palsy**: Hoarseness (left side more common)
- **Phrenic nerve palsy**: Elevated hemidiaphragm
- **Pleural effusion**: Exudative, may be bloody

## Staging (TNM)
- Stage I: Localized tumor (best surgical candidate)
- Stage II: Limited nodal involvement
- Stage III: Extensive local/regional disease
- Stage IV: Distant metastasis (brain, bone, liver, adrenal)
- NSCLC: Surgery for Stage I-II, Chemo-radiation for III, Systemic for IV
- SCLC: Limited stage (one hemithorax) or Extensive stage; chemo + radiation for limited, chemo alone for extensive

## Treatment Algorithm
| Stage/Type | Treatment |
|-----------|-----------|
| NSCLC Stage I-II | Surgery +/- adjuvant chemo |
| NSCLC Stage III | Concurrent chemo-radiation |
| NSCLC Stage IV with driver mutation | Targeted therapy (EGFR TKI, ALK inhibitor) |
| NSCLC Stage IV PD-L1 high | Immunotherapy (Pembrolizumab) |
| SCLC Limited | Chemo + Radiation |
| SCLC Extensive | Chemo + Immunotherapy |

## Pleural Diseases
- **Mesothelioma**: Malignant tumor of pleura; **asbestos exposure** (30-40 year latency); long, spindle cells, calretinin+, CK5/6+; poor prognosis
- **Pleural effusion**: Transudative (CHF, cirrhosis) vs Exudative (infection, TB, cancer) per Light criteria

## Indian Context
- Rising lung cancer incidence due to: Smoking (cigarette + bidi), air pollution, occupational exposure
- Bidi smoking: Contains more tar and nicotine per gram than cigarettes
- Women: Increasing adenocarcinoma (passive smoking, cooking fuel exposure, EGFR mutations)
- Late presentation is common -> most patients present with advanced disease (Stage III-IV)

> **Clinical Pearl**: In India, all advanced non-squamous NSCLC patients should undergo molecular testing (EGFR, ALK at minimum) before starting chemotherapy. EGFR TKIs like gefitinib are available as generics in India and dramatically improve outcomes in mutation-positive patients.`,
        mnemonics: [
          { text: "Mesothelioma = Mesothelium = Asbestos (30-40 year latency)", explanation: "Malignant mesothelioma of pleura is strongly associated with asbestos exposure with very long latency period" },
        ],
        keyPoints: [
          "NSCLC: surgery for early stage; molecular testing guides targeted therapy in advanced disease",
          "SCLC: chemo-sensitive but almost always relapses; never surgical",
          "Mesothelioma: asbestos-related, calretinin+, poor prognosis",
          "SVC syndrome: common with central tumors (especially small cell)",
          "All advanced NSCLC patients in India should be tested for EGFR/ALK mutations",
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Chapter 16", edition: "8th" },
        ],
      },
      {
        layer: 4, slug: "lung-tumors-exam", title: "Lung Tumors - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield points on lung tumors.",
        contentMd: `# Exam Preparation

## One-Liners
- Most common lung cancer overall: **Adenocarcinoma**
- Lung cancer with strongest smoking association: **Squamous cell carcinoma**
- Most aggressive lung cancer: **Small cell carcinoma**
- Location of squamous cell CA: **Central (hilar)**
- Location of adenocarcinoma: **Peripheral**
- PTHrP hypercalcemia: **Squamous cell CA**
- SIADH and Cushing: **Small cell CA**
- Horner syndrome in lung cancer: **Pancoast (superior sulcus) tumor**
- Keratin pearls on histology: **Squamous cell CA**
- TTF-1 positive: **Adenocarcinoma (and thyroid)**
- Neuroendocrine markers (Chromogranin, Synaptophysin): **Small cell CA, Carcinoid**
- Pleural mesothelioma: **Asbestos exposure, calretinin+**
- Asbestos causes: **Mesothelioma AND bronchogenic carcinoma**
- EGFR mutations common in: **Asian non-smokers with adenocarcinoma**
- ALK rearrangement treated with: **Crizotinib**
- Leading cause of cancer death worldwide: **Lung cancer**

## Lung Cancer Summary Table
| Type | Location | Histology | Paraneoplastic | Molecular |
|------|----------|-----------|---------------|-----------|
| Adenocarcinoma | Peripheral | Glands, mucin | Clubbing | EGFR, ALK, KRAS |
| Squamous | Central | Keratin pearls | Hypercalcemia (PTHrP) | p53, FGFR1 |
| Small cell | Central | Oat cells, NE markers | SIADH, ACTH, Lambert-Eaton | p53, RB |
| Large cell | Peripheral | Undifferentiated | - | - |
| Mesothelioma | Pleural | Spindle cells | - | BAP1 loss |`,
        mnemonics: [
          { text: "Asbestos = Both: Mesothelioma AND Bronchogenic carcinoma", explanation: "Asbestos exposure increases risk of both malignant mesothelioma (pleural) and bronchogenic carcinoma (lung parenchyma)" },
        ],
        keyPoints: [
          "Adenocarcinoma: most common, peripheral, EGFR/ALK targetable",
          "Squamous: central, smoking, PTHrP hypercalcemia, keratin pearls",
          "Small cell: central, most aggressive, paraneoplastic syndromes, chemo-sensitive",
          "Mesothelioma: asbestos, calretinin+, psammoma bodies, poor prognosis",
        ],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15", edition: "10th" }],
      },
      {
        layer: 5, slug: "lung-tumors-recall", title: "Lung Tumors - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard Q&A on lung tumors.",
        contentMd: `# Active Recall

**Q1:** Most common type of lung cancer?
> Adenocarcinoma (~40%)

**Q2:** Which lung cancer has the strongest association with smoking?
> Squamous cell carcinoma

**Q3:** What paraneoplastic syndrome is associated with squamous cell CA?
> Hypercalcemia (from PTHrP secretion)

**Q4:** What is Pancoast tumor and what syndrome does it cause?
> Superior sulcus (lung apex) tumor causing Horner syndrome (miosis, ptosis, anhidrosis) + brachial plexus involvement

**Q5:** What IHC marker is positive in lung adenocarcinoma?
> TTF-1 (Thyroid Transcription Factor-1)

**Q6:** What occupational exposure causes both mesothelioma and lung carcinoma?
> Asbestos

**Q7:** Driver mutation common in Asian non-smoker lung adenocarcinoma?
> EGFR mutation (targetable with gefitinib, osimertinib)

**Q8:** What neuroendocrine markers are positive in small cell carcinoma?
> Chromogranin A, Synaptophysin, CD56`,
        mnemonics: [],
        keyPoints: ["8 recall questions on lung cancer types, markers, and molecular features"],
        textbookRefs: [{ book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 15", edition: "10th" }],
      },
    ],
  },
];
