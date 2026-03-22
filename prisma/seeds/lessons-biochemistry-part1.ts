// 5-layer lessons for Biochemistry Modules 1-4 (19 topics, 95 layers)
import type { TopicLessons } from "./content-loader";

export const biochemistryPart1Lessons: TopicLessons[] = [
  // ═══════════════════════════════════════════════════════════════
  // MODULE 1: BIOMOLECULES (BI-MOD-01) — 5 Topics
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: Carbohydrates: Structure & Classification ───────
  {
    topicCode: "BI-MOD-01-TOP-01",
    layers: [
      { layer: 1, slug: "carbohydrates-foundation", title: "Carbohydrates: Structure & Classification - Foundation", estimatedMinutes: 20,
        summary: "Carbohydrates are polyhydroxy aldehydes or ketones. Classified as mono-, di-, and polysaccharides based on the number of sugar units. Fundamental to energy metabolism and structural biology.",
        contentMd: `# Carbohydrates: Structure & Classification

## Definition
Carbohydrates are **polyhydroxy aldehydes (aldoses)** or **polyhydroxy ketones (ketoses)**, or compounds that yield these on hydrolysis. General formula: $C_n(H_2O)_n$

## Classification by Number of Sugar Units

| Type | Units | Examples |
|------|-------|----------|
| Monosaccharides | 1 | Glucose, Fructose, Galactose |
| Disaccharides | 2 | Sucrose, Lactose, Maltose |
| Oligosaccharides | 3-10 | Raffinose, Stachyose |
| Polysaccharides | >10 | Starch, Glycogen, Cellulose |

## Classification of Monosaccharides

### By Functional Group
- **Aldoses**: Contain aldehyde group (e.g., Glucose, Galactose)
- **Ketoses**: Contain ketone group (e.g., Fructose, Ribulose)

### By Number of Carbons
| Carbons | Name | Examples |
|---------|------|----------|
| 3 | Triose | Glyceraldehyde, Dihydroxyacetone |
| 4 | Tetrose | Erythrose |
| 5 | Pentose | Ribose, Deoxyribose, Ribulose |
| 6 | Hexose | Glucose, Fructose, Galactose |

## Isomerism in Carbohydrates

### Optical Isomerism (D and L forms)
- Based on configuration around the **penultimate carbon** (carbon farthest from the carbonyl group)
- **D-sugars**: OH on the right (predominant in the body)
- **L-sugars**: OH on the left
- Most biologically important sugars are **D-isomers**

### Epimers
- Sugars differing at **one specific carbon** (other than the anomeric carbon)
- Glucose and Galactose: **C-4 epimers**
- Glucose and Mannose: **C-2 epimers**

### Anomers (alpha and beta)
- Differ at the **anomeric carbon** (C-1 in aldoses, C-2 in ketoses)
- **alpha-form**: OH below the ring plane
- **beta-form**: OH above the ring plane
- Interconversion = **mutarotation**

## Ring Structures
- **Pyranose ring**: 6-membered ring (glucose forms glucopyranose)
- **Furanose ring**: 5-membered ring (fructose forms fructofuranose)
- Named after pyran (6-membered) and furan (5-membered) heterocycles

## Glycosidic Bonds
- Bond between anomeric carbon of one sugar and an OH group of another
- **alpha-1,4 glycosidic bond**: Starch, Glycogen (straight chain)
- **alpha-1,6 glycosidic bond**: Branch points in glycogen and amylopectin
- **beta-1,4 glycosidic bond**: Cellulose (humans cannot digest — lack cellulase)

## Important Disaccharides
| Disaccharide | Components | Bond | Enzyme |
|--------------|------------|------|--------|
| Sucrose | Glucose + Fructose | alpha-1, beta-2 | Sucrase |
| Lactose | Galactose + Glucose | beta-1,4 | Lactase |
| Maltose | Glucose + Glucose | alpha-1,4 | Maltase |

> **Clinical Pearl**: Lactose is the only sugar of animal origin. Lactose intolerance is extremely common in Indian adults (60-70%) due to lactase deficiency after weaning.`,
        mnemonics: [
          { text: "GLU-GAL are C4 epimers, GLU-MAN are C2 epimers", explanation: "Galactose differs from Glucose at C-4; Mannose differs from Glucose at C-2. Remember: GAL=4 letters, at C-4" },
          { text: "SuLMa for disaccharides", explanation: "Sucrose = Glucose+Fructose, Lactose = Galactose+Glucose, Maltose = Glucose+Glucose" }
        ],
        keyPoints: ["Carbohydrates = polyhydroxy aldehydes/ketones", "D-sugars predominate in the body (penultimate carbon OH on right)", "Glucose-Galactose are C-4 epimers; Glucose-Mannose are C-2 epimers", "Anomers differ at anomeric carbon; interconversion = mutarotation", "alpha-1,4 bond in starch/glycogen; beta-1,4 in cellulose (indigestible)", "Lactose intolerance affects 60-70% Indian adults"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 14: Carbohydrates of Physiological Significance", edition: "31st" }, { book: "DM Vasudevan", chapter: "Ch 2: Carbohydrates", edition: "9th" }] },
      { layer: 2, slug: "carbohydrates-mechanism", title: "Carbohydrates: Structure & Classification - Mechanism", estimatedMinutes: 30,
        summary: "Detailed stereochemistry of monosaccharides, Haworth projections, reactions of sugars including reduction, oxidation, and osazone formation. Polysaccharide structure and function.",
        contentMd: `# Carbohydrates: Detailed Mechanisms

## Stereochemistry Deep Dive

### Chiral Centers and Optical Activity
- A monosaccharide with n chiral centers has **2^n** possible stereoisomers
- Glucose has 4 chiral centers → 16 stereoisomers (8 D-forms, 8 L-forms)
- **Specific rotation**: alpha-D-glucose = +112.2 degrees; beta-D-glucose = +18.7 degrees
- Equilibrium mixture (mutarotation) = **+52.7 degrees**

### Fischer vs Haworth Projections
- **Fischer**: Vertical chain, carbonyl at top
- **Haworth**: Ring structure showing 3D orientation
- To convert: groups on right in Fischer go below the ring in Haworth

## Reactions of Monosaccharides

### Reducing Sugars
- Sugars with **free anomeric carbon** can reduce Cu2+ or Ag+
- **Benedict's test**: Reduces Cu2+ (blue) → Cu2O (red precipitate)
- All monosaccharides are reducing sugars
- **Sucrose is NOT a reducing sugar** (both anomeric carbons involved in bond)

### Osazone Formation
- Reaction with **phenylhydrazine** (3 molecules) → osazone crystals
- Osazones are used to **identify sugars** by crystal shape
- Glucose, Fructose, and Mannose give the **same osazone** (glucosazone) because they differ only at C-1 and C-2

| Sugar | Osazone Crystal Shape |
|-------|----------------------|
| Glucose/Fructose/Mannose | Needle-shaped (broomstick) |
| Lactose | Cotton ball / hedgehog |
| Maltose | Sunflower / star-shaped |

### Sugar Acids
- **Aldonic acid**: C-1 (aldehyde) oxidized → Gluconic acid
- **Uronic acid**: C-6 (terminal OH) oxidized → Glucuronic acid (important in drug conjugation)
- **Aldaric/Saccharic acid**: Both C-1 and C-6 oxidized → Glucaric acid

### Sugar Alcohols
- Reduction of carbonyl group:
  - Glucose → **Sorbitol** (Glucitol)
  - Galactose → **Galactitol**
  - Mannose → **Mannitol**
  - Fructose → **Sorbitol** (via polyol pathway)

## Polysaccharide Structures

### Starch (Plant Storage)
- **Amylose** (20%): Unbranched alpha-1,4 chains (helical)
- **Amylopectin** (80%): Branched, alpha-1,4 + alpha-1,6 (branch every 24-30 residues)

### Glycogen (Animal Storage)
- Similar to amylopectin but MORE branched (every 8-12 residues)
- Stored in **liver** (6-8% by weight) and **muscle** (1-2%)
- More branches = more non-reducing ends = faster mobilization

### Cellulose (Plant Structural)
- beta-1,4 glycosidic bonds → straight chains → hydrogen bonding → fibrils
- Humans lack **cellulase** → cannot digest (dietary fiber)

### Glycosaminoglycans (GAGs)
- Repeating disaccharide units (amino sugar + uronic acid)
- Examples: Hyaluronic acid, Chondroitin sulfate, Heparin, Keratan sulfate
- Found in connective tissue, synovial fluid, cartilage

> **Clinical Pearl**: Accumulation of sorbitol via the polyol pathway in diabetes causes diabetic cataracts and neuropathy. The enzyme aldose reductase converts glucose to sorbitol when glucose levels are high.`,
        mnemonics: [
          { text: "GFM give Same osazone", explanation: "Glucose, Fructose, Mannose all form glucosazone (needle-shaped) because they differ only at C-1 and C-2, which are both involved in osazone formation" },
          { text: "Sucrose is NOT reducing — both anomeric carbons are BUSY", explanation: "In sucrose, the anomeric carbons of both glucose and fructose participate in the glycosidic bond, leaving no free anomeric OH for reducing reactions" }
        ],
        keyPoints: ["Glucose, Fructose, Mannose give the same osazone (glucosazone)", "Sucrose is a non-reducing sugar (both anomeric carbons in bond)", "Benedict's test detects reducing sugars (Cu2+ to Cu2O)", "Glycogen branches every 8-12 residues (more than amylopectin 24-30)", "Polyol pathway: Glucose → Sorbitol by aldose reductase (diabetic complications)", "Glucuronic acid important for drug conjugation in liver"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 14-15", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 11: Carbohydrates", edition: "9th" }] },
      { layer: 3, slug: "carbohydrates-clinical", title: "Carbohydrates: Structure & Classification - Clinical", estimatedMinutes: 20,
        summary: "Clinical disorders of carbohydrate metabolism including lactose intolerance, galactosemia, essential fructosuria, and mucopolysaccharidoses.",
        contentMd: `# Clinical Applications

## Lactose Intolerance
- **Cause**: Deficiency of brush border enzyme **lactase** (beta-galactosidase)
- **Primary**: Genetic decline after weaning (very common in India: 60-70%)
- **Secondary**: Mucosal damage (celiac disease, infections)
- **Symptoms**: Bloating, diarrhea, flatulence, abdominal cramps after dairy
- **Diagnosis**: Hydrogen breath test, stool pH < 5.5 (acidic)
- **Management**: Lactose-free diet, lactase supplements, curd/yogurt (pre-digested)

## Galactosemia
- **Classic (Type I)**: Deficiency of **galactose-1-phosphate uridyl transferase**
- **Accumulation**: Galactose-1-phosphate in liver, brain, kidney
- **Features**: Jaundice, hepatomegaly, cataracts, intellectual disability
- **Cataracts**: Galactitol accumulation in lens (via aldose reductase)
- **E. coli sepsis**: Increased susceptibility in neonates
- **Screening**: Beutler test (fluorescent spot test)
- **Treatment**: Galactose-free diet from birth

## Essential Fructosuria
- Deficiency of **fructokinase** (hepatic)
- Benign condition — fructose appears in urine
- Fructose in urine gives positive Benedict's test → can be confused with glucosuria

## Hereditary Fructose Intolerance
- Deficiency of **aldolase B** (Fructose-1-phosphate aldolase)
- **Serious**: Fructose-1-phosphate accumulates → inhibits glycogenolysis and gluconeogenesis
- **Hypoglycemia** after fructose/sucrose ingestion
- Hepatomegaly, jaundice, renal tubular dysfunction

## Mucopolysaccharidoses (MPS)
| Type | Name | Enzyme Deficiency | Features |
|------|------|-------------------|----------|
| I | Hurler | alpha-L-iduronidase | Gargoyle facies, corneal clouding, intellectual disability |
| II | Hunter | Iduronate sulfatase | X-linked, NO corneal clouding |
| III | Sanfilippo | Heparan sulfamidase | Severe CNS involvement |
| IV | Morquio | Galactose-6-sulfatase | Severe skeletal, corneal clouding, normal intelligence |

> **Clinical Pearl**: Hunter syndrome is the only X-linked MPS (all others are autosomal recessive). Remember: "Hunters see clearly" = no corneal clouding.

## Diabetes and the Polyol Pathway
- Hyperglycemia → excess glucose enters polyol pathway
- **Aldose reductase** converts glucose → sorbitol (uses NADPH)
- Sorbitol cannot cross cell membranes → osmotic damage
- Affects: lens (cataracts), Schwann cells (neuropathy), retina, kidney
- **Aldose reductase inhibitors**: Under investigation for diabetic complications`,
        mnemonics: [
          { text: "Hunters see clearly", explanation: "Hunter syndrome (MPS II) is the only MPS WITHOUT corneal clouding and the only X-linked MPS" },
          { text: "GAL-1-PUT for galactosemia", explanation: "Galactose-1-Phosphate Uridyl Transferase deficiency causes classic galactosemia" }
        ],
        keyPoints: ["Lactose intolerance: 60-70% prevalence in Indian adults, diagnose with H2 breath test", "Classic galactosemia: Gal-1-P uridyl transferase deficiency → cataracts, hepatomegaly, E. coli sepsis", "Essential fructosuria (fructokinase def) is benign; Hereditary fructose intolerance (aldolase B def) is severe", "Hunter syndrome: only X-linked MPS, no corneal clouding", "Polyol pathway: aldose reductase causes diabetic cataracts and neuropathy"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 20: Sugars and Sugar Metabolism Disorders", edition: "31st" }, { book: "Satyanarayan Biochemistry", chapter: "Ch 9: Carbohydrates", edition: "5th" }] },
      { layer: 4, slug: "carbohydrates-exam", title: "Carbohydrates: Structure & Classification - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield one-liners and comparison tables for NEXT/NEET PG on carbohydrate structure, isomerism, and clinical disorders.",
        contentMd: `# Exam High Yield

## One-Liners
- Only non-reducing disaccharide: **Sucrose**
- C-4 epimers of glucose: **Galactose**
- C-2 epimer of glucose: **Mannose**
- Sugar in DNA: **Deoxyribose**; in RNA: **Ribose**
- Most abundant organic molecule on earth: **Cellulose**
- Branching enzyme creates: **alpha-1,6 glycosidic bonds**
- Storage polysaccharide in animals: **Glycogen**
- Glycogen branches every: **8-12 residues**
- Amylopectin branches every: **24-30 residues**
- Aldose reductase product from glucose: **Sorbitol**
- Aldose reductase product from galactose: **Galactitol**
- Benedict's reagent detects: **Reducing sugars**
- Only sugar of animal origin: **Lactose**

## Comparison: Starch vs Glycogen vs Cellulose

| Feature | Starch | Glycogen | Cellulose |
|---------|--------|----------|-----------|
| Source | Plant storage | Animal storage | Plant structural |
| Bond | alpha-1,4 (+ alpha-1,6 in amylopectin) | alpha-1,4 + alpha-1,6 | beta-1,4 |
| Branching | Amylopectin: every 24-30 | Every 8-12 | None (linear) |
| Digestible | Yes (amylase) | Yes (phosphorylase) | No (no cellulase) |

## Osazone Pattern Recognition
- Q: "Three sugars give the same osazone" → **Glucose, Fructose, Mannose**
- Q: "Non-reducing sugar" → **Sucrose** (always first answer)
- Q: "Sugar in urine, positive Benedict's, no hyperglycemia" → **Fructosuria or Pentosuria**

## Previous Year Themes
- Epimer identification (C-2, C-4)
- Reducing vs non-reducing sugars
- Glycogen branching pattern
- Galactosemia enzyme deficiency
- Polyol pathway and diabetic complications
- MPS classification (especially Hunter vs Hurler)`,
        mnemonics: [
          { text: "CALM for non-reducing sugars", explanation: "Cellulose is not a sugar but sucrose is the key non-reducing disaccharide. CALM = Cannot Act as Reducing Moiety (Sucrose)" }
        ],
        keyPoints: ["Sucrose is the only non-reducing disaccharide (most tested)", "Glucose-Galactose C4 epimers, Glucose-Mannose C2 epimers", "Glycogen (8-12) more branched than amylopectin (24-30)", "GFM give same osazone", "Classic galactosemia = Gal-1-P uridyl transferase deficiency"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 14-15", edition: "31st" }] },
      { layer: 5, slug: "carbohydrates-recall", title: "Carbohydrates: Structure & Classification - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for rapid self-testing on carbohydrate structure and classification.",
        contentMd: `# Active Recall

**Q1:** What is the general formula of carbohydrates?
> $C_n(H_2O)_n$ — polyhydroxy aldehydes or ketones

**Q2:** Glucose and Galactose are epimers at which carbon?
> C-4

**Q3:** Which 3 sugars give the same osazone?
> Glucose, Fructose, and Mannose (all form glucosazone)

**Q4:** Name the only non-reducing disaccharide.
> Sucrose (both anomeric carbons involved in bond)

**Q5:** What is the branching frequency in glycogen vs amylopectin?
> Glycogen: every 8-12 residues; Amylopectin: every 24-30 residues

**Q6:** What type of bond does cellulose have? Why can't humans digest it?
> beta-1,4 glycosidic bond; humans lack cellulase

**Q7:** What enzyme is deficient in classic galactosemia?
> Galactose-1-phosphate uridyl transferase

**Q8:** What accumulates in the lens causing cataracts in galactosemia?
> Galactitol (via aldose reductase)

**Q9:** What is mutarotation?
> Interconversion between alpha and beta anomeric forms in solution

**Q10:** Which is the only X-linked mucopolysaccharidosis?
> Hunter syndrome (MPS II) — iduronate sulfatase deficiency

**Q11:** What does the polyol pathway convert glucose to?
> Sorbitol (via aldose reductase, using NADPH)

**Q12:** What is the diagnosis test for lactose intolerance?
> Hydrogen breath test; stool pH < 5.5`,
        mnemonics: [],
        keyPoints: ["12 recall questions covering classification, isomerism, reactions, and clinical disorders"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 14-15, 20", edition: "31st" }] },
    ],
  },

  // ─── Topic 2: Lipids: Structure & Classification ──────────────
  {
    topicCode: "BI-MOD-01-TOP-02",
    layers: [
      { layer: 1, slug: "lipids-foundation", title: "Lipids: Structure & Classification - Foundation", estimatedMinutes: 20,
        summary: "Lipids are heterogeneous biomolecules soluble in organic solvents. Major classes include fatty acids, triacylglycerols, phospholipids, sphingolipids, and cholesterol.",
        contentMd: `# Lipids: Structure & Classification

## Definition
Lipids are a heterogeneous group of compounds that are **insoluble in water** but **soluble in non-polar organic solvents** (chloroform, ether, benzene).

## Bloor's Classification

### 1. Simple Lipids (Esters of fatty acids + alcohol)
- **Fats and Oils**: Fatty acids + Glycerol (triacylglycerols/triglycerides)
- **Waxes**: Fatty acids + long-chain alcohols

### 2. Compound/Complex Lipids (Ester + additional group)
- **Phospholipids**: Contain phosphoric acid
  - Glycerophospholipids (e.g., Lecithin, Cephalin)
  - Sphingophospholipids (e.g., Sphingomyelin)
- **Glycolipids**: Contain carbohydrate
  - Cerebrosides, Gangliosides, Globosides
- **Lipoproteins**: Lipid + Protein

### 3. Derived Lipids
- Fatty acids, Glycerol, Steroids, Fat-soluble vitamins (A, D, E, K), Ketone bodies, Prostaglandins

## Fatty Acids

### Structure
- Long hydrocarbon chain with a **terminal carboxyl group** (-COOH)
- Even number of carbons (synthesized 2C at a time from acetyl-CoA)

### Classification
| Type | Double Bonds | Example | Carbons:Double bonds |
|------|-------------|---------|---------------------|
| Saturated | 0 | Palmitic acid | 16:0 |
| Saturated | 0 | Stearic acid | 18:0 |
| Monounsaturated (MUFA) | 1 | Oleic acid | 18:1 (omega-9) |
| Polyunsaturated (PUFA) | 2+ | Linoleic acid | 18:2 (omega-6) |
| Polyunsaturated (PUFA) | 3 | Linolenic acid | 18:3 (omega-3) |
| Polyunsaturated (PUFA) | 4 | Arachidonic acid | 20:4 (omega-6) |

### Essential Fatty Acids (EFAs)
- **Linoleic acid** (omega-6) and **Linolenic acid** (omega-3)
- Cannot be synthesized by humans (lack delta-12 and delta-15 desaturases)
- Arachidonic acid: conditionally essential (made from linoleic acid)

### Omega Nomenclature
- Counts from the **methyl end** (omega carbon)
- omega-3: first double bond at 3rd carbon from methyl end
- omega-6: first double bond at 6th carbon from methyl end

## Phospholipids
- **Glycerol backbone** + 2 fatty acids + phosphate + head group
- **Amphipathic**: hydrophilic head + hydrophobic tails
- Form the **lipid bilayer** of cell membranes

| Phospholipid | Head Group | Function |
|-------------|------------|----------|
| Lecithin (Phosphatidylcholine) | Choline | Lung surfactant, bile |
| Cephalin (Phosphatidylethanolamine) | Ethanolamine | Blood clotting |
| Phosphatidylserine | Serine | Apoptosis signal (flips to outer leaflet) |
| Phosphatidylinositol | Inositol | Signal transduction (PIP2 → IP3 + DAG) |

## Cholesterol
- 27-carbon compound with **cyclopentanoperhydrophenanthrene ring** (steroid nucleus)
- Precursor of: bile acids, steroid hormones, vitamin D
- Component of cell membranes (modulates fluidity)
- Synthesized mainly in **liver** from acetyl-CoA`,
        mnemonics: [
          { text: "LL are Essential", explanation: "Linoleic acid (omega-6) and Linolenic acid (omega-3) are the two essential fatty acids" },
          { text: "ADEK are fat-soluble vitamins", explanation: "Vitamins A, D, E, K are lipid-soluble derived lipids" }
        ],
        keyPoints: ["Lipids: insoluble in water, soluble in organic solvents", "Essential FA: Linoleic (omega-6) and Linolenic (omega-3) — humans lack delta-12/15 desaturases", "Phospholipids are amphipathic — form cell membrane bilayer", "Lecithin (phosphatidylcholine) is the main lung surfactant component", "Cholesterol: steroid nucleus, precursor of bile acids/hormones/vitamin D", "Fatty acids have even number of carbons (synthesized 2C at a time)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 21: Lipids of Physiological Significance", edition: "31st" }, { book: "Satyanarayan Biochemistry", chapter: "Ch 3: Lipids", edition: "5th" }] },
      { layer: 2, slug: "lipids-mechanism", title: "Lipids: Structure & Classification - Mechanism", estimatedMinutes: 30,
        summary: "Detailed chemistry of fatty acid unsaturation, trans fats, membrane lipid asymmetry, sphingolipid structure, and eicosanoid biosynthesis overview.",
        contentMd: `# Lipids: Detailed Mechanisms

## Fatty Acid Properties

### Effect of Chain Length and Unsaturation on Melting Point
- **Longer chain** → higher melting point (more van der Waals forces)
- **More double bonds** → lower melting point (kinks prevent tight packing)
- Saturated fats: solid at room temperature (butter, ghee)
- Unsaturated fats: liquid at room temperature (vegetable oils)

### Cis vs Trans Configuration
- **Cis double bonds**: natural configuration, causes kink in chain
- **Trans double bonds**: straighter chain (behaves like saturated fat)
- **Trans fats** (partially hydrogenated oils): increase LDL, decrease HDL → cardiovascular risk
- **Vanaspati ghee**: contains trans fats (relevant in Indian dietary context)

## Sphingolipids

### Basic Structure
- Backbone: **Sphingosine** (18-carbon amino alcohol) — NOT glycerol
- Sphingosine + fatty acid = **Ceramide** (parent compound)

### Types
| Sphingolipid | Ceramide + | Location |
|-------------|-----------|----------|
| Sphingomyelin | Phosphocholine | Myelin sheath, RBC membrane |
| Cerebroside | Single sugar (glucose/galactose) | Brain white matter |
| Ganglioside | Oligosaccharide with sialic acid (NANA) | Brain gray matter, cell receptors |
| Globoside | 2+ sugars (no sialic acid) | RBC membrane (blood group antigens) |
| Sulfatide | Galactose + sulfate | Myelin |

## Membrane Lipid Organization

### Lipid Bilayer Asymmetry
- **Outer leaflet**: Phosphatidylcholine, Sphingomyelin, Glycolipids
- **Inner leaflet**: Phosphatidylethanolamine, Phosphatidylserine, Phosphatidylinositol
- PS flipping to outer leaflet → **apoptosis signal** (recognized by macrophages)

### Membrane Fluidity Regulators
- **Cholesterol**: At 37C, decreases fluidity (restricts movement); at low temp, prevents crystallization
- **Unsaturated fatty acids**: Increase fluidity (kinks)
- **Saturated fatty acids**: Decrease fluidity (tight packing)

## Eicosanoids (from Arachidonic Acid, 20:4)

### Synthesis Pathways
- **Cyclooxygenase (COX)** pathway → Prostaglandins, Thromboxanes, Prostacyclins
- **Lipoxygenase (LOX)** pathway → Leukotrienes

### Key Products
| Product | Function | Clinical Relevance |
|---------|----------|-------------------|
| PGE2 | Vasodilation, pain, fever | NSAIDs block COX |
| PGI2 (Prostacyclin) | Vasodilation, anti-platelet | From endothelium |
| TXA2 (Thromboxane) | Vasoconstriction, platelet aggregation | From platelets |
| LTB4 | Chemotaxis | Inflammation |
| LTC4, D4, E4 | Bronchoconstriction | Asthma (SRS-A) |

> **Clinical Pearl**: Aspirin irreversibly inhibits COX by acetylation. Low-dose aspirin preferentially blocks TXA2 in platelets (which cannot synthesize new COX), hence its antiplatelet effect.`,
        mnemonics: [
          { text: "CeraGS for sphingolipids", explanation: "Ceramide is the base; add Glucose/Galactose = Cerebroside; add Sugar+Sialic acid = Ganglioside; add Sulfate = Sulfatide; add phosphoCholine = Sphingomyelin" },
          { text: "COX makes PG+TX; LOX makes LT", explanation: "Cyclooxygenase → Prostaglandins + Thromboxanes; Lipoxygenase → Leukotrienes" }
        ],
        keyPoints: ["Sphingolipid backbone is sphingosine (NOT glycerol); ceramide = sphingosine + fatty acid", "Trans fats: straighter chains, act like saturated fats, increase cardiovascular risk", "PS flip to outer leaflet signals apoptosis", "Cholesterol modulates membrane fluidity bidirectionally", "COX pathway: PG, TX, PGI2; LOX pathway: Leukotrienes", "Aspirin irreversibly acetylates COX → antiplatelet at low dose"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 21, 23", edition: "31st" }, { book: "Lehninger Biochemistry", chapter: "Ch 10: Lipids", edition: "8th" }] },
      { layer: 3, slug: "lipids-clinical", title: "Lipids: Structure & Classification - Clinical", estimatedMinutes: 20,
        summary: "Clinical disorders: dyslipidemia, essential fatty acid deficiency, respiratory distress syndrome (surfactant), and sphingolipidoses overview.",
        contentMd: `# Clinical Applications

## Essential Fatty Acid Deficiency
- **Causes**: Malnutrition, prolonged parenteral nutrition without lipids, fat malabsorption
- **Features**: Dermatitis (scaly skin), poor wound healing, growth retardation, alopecia
- **Triene:Tetraene ratio** > 0.4 is diagnostic (increased Mead acid / decreased arachidonic acid)
- **Indian context**: Seen in severe malnutrition (kwashiorkor/marasmus) in pediatric wards

## Respiratory Distress Syndrome (RDS)
- **Neonatal RDS**: Deficiency of **lung surfactant** (dipalmitoyl phosphatidylcholine / DPPC / lecithin)
- Premature infants (< 35 weeks) — Type II pneumocytes immature
- **L/S ratio** (Lecithin/Sphingomyelin) in amniotic fluid:
  - > 2.0: Mature lungs
  - < 1.5: High risk of RDS
- **Treatment**: Antenatal corticosteroids (betamethasone) to mother, exogenous surfactant to infant
- **Phosphatidylglycerol**: Presence in amniotic fluid confirms lung maturity

## Trans Fats and Cardiovascular Disease
- Vanaspati ghee (dalda) is partially hydrogenated → contains trans fats
- Trans fats: increase LDL, decrease HDL, increase Lp(a), promote inflammation
- FSSAI regulations in India: trans fat content limited to < 2% in oils/fats (from 2022)
- WHO target: eliminate industrial trans fats globally

## Prostaglandins in Clinical Practice
- **PGE1 (Misoprostol)**: Gastric cytoprotection, medical abortion, PPH management
- **PGE2 (Dinoprostone)**: Cervical ripening, labor induction
- **PGF2-alpha**: Abortion, PPH
- **PGI2 (Epoprostenol)**: Pulmonary hypertension
- **NSAIDs**: Block COX → reduce PG → anti-inflammatory, analgesic, antipyretic
- **COX-2 selective inhibitors** (celecoxib): Less GI side effects but cardiovascular risk

> **Clinical Pearl**: In India, misoprostol (PGE1 analogue) is a critical drug for managing postpartum hemorrhage in peripheral health centers where other options are unavailable. It is on the WHO Essential Medicines List.`,
        mnemonics: [
          { text: "LS ratio > 2 = Lungs Safe", explanation: "Lecithin/Sphingomyelin ratio > 2.0 in amniotic fluid indicates fetal lung maturity" }
        ],
        keyPoints: ["EFA deficiency: dermatitis, poor wound healing; triene:tetraene ratio > 0.4 diagnostic", "Neonatal RDS: surfactant (DPPC/lecithin) deficiency; L/S ratio > 2 = mature lungs", "Trans fats (vanaspati) increase LDL, decrease HDL — Indian FSSAI limits < 2%", "Misoprostol (PGE1): gastric protection, medical abortion, PPH in Indian context", "Aspirin: low dose = antiplatelet (TXA2 block); high dose = anti-inflammatory (COX block)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 21, 23", edition: "31st" }, { book: "DM Vasudevan", chapter: "Ch 3: Lipids", edition: "9th" }] },
      { layer: 4, slug: "lipids-exam", title: "Lipids: Structure & Classification - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield one-liners and comparison tables on lipid structure for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Essential fatty acids: **Linoleic (omega-6) + Linolenic (omega-3)**
- Backbone of sphingolipids: **Sphingosine** (not glycerol)
- Sphingosine + fatty acid = **Ceramide**
- Main lung surfactant: **Dipalmitoyl phosphatidylcholine (DPPC/Lecithin)**
- L/S ratio for lung maturity: **> 2.0**
- Apoptosis signal on membrane: **Phosphatidylserine on outer leaflet**
- Signal transduction lipid: **PIP2 → IP3 + DAG**
- Gangliosides contain: **Sialic acid (NANA)**
- Sphingomyelin found in: **Myelin sheath**
- Aspirin inhibits: **COX (irreversibly by acetylation)**
- SRS-A (slow reacting substance of anaphylaxis): **Leukotrienes C4, D4, E4**
- Fat-soluble vitamins: **A, D, E, K**

## Comparison: Phospholipids vs Sphingolipids

| Feature | Glycerophospholipids | Sphingolipids |
|---------|---------------------|---------------|
| Backbone | Glycerol | Sphingosine |
| Fatty acids | 2 | 1 (amide bond) |
| Phosphate | Present | Present in sphingomyelin only |
| Sugar | Absent (in most) | Present in cerebrosides, gangliosides |

## Pattern Recognition
- Q: "Deficiency causing scaly dermatitis in child on TPN" → **EFA deficiency**
- Q: "Premature infant with respiratory difficulty" → Think **surfactant/RDS**
- Q: "Which lipid flips during apoptosis?" → **Phosphatidylserine**
- Q: "Partially hydrogenated fat cardiovascular risk" → **Trans fats (vanaspati)**`,
        mnemonics: [
          { text: "ADEK in FAT", explanation: "Fat-soluble vitamins A, D, E, K are Absorbed with Dietary Fat" }
        ],
        keyPoints: ["EFA: Linoleic + Linolenic (humans lack delta-12/15 desaturases)", "Ceramide = sphingosine + FA (parent of all sphingolipids)", "DPPC = main surfactant; L/S > 2 = mature lungs", "PS on outer leaflet = eat-me signal for apoptosis"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 21", edition: "31st" }] },
      { layer: 5, slug: "lipids-recall", title: "Lipids: Structure & Classification - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards on lipid structure, classification, and clinical correlations.",
        contentMd: `# Active Recall

**Q1:** Name the two essential fatty acids.
> Linoleic acid (omega-6) and Linolenic acid (omega-3)

**Q2:** What is the backbone of sphingolipids?
> Sphingosine (18-carbon amino alcohol)

**Q3:** What is ceramide?
> Sphingosine + one fatty acid (via amide bond) — parent compound of all sphingolipids

**Q4:** What is the main component of lung surfactant?
> Dipalmitoyl phosphatidylcholine (DPPC/Lecithin)

**Q5:** What L/S ratio indicates fetal lung maturity?
> > 2.0 (Lecithin/Sphingomyelin ratio in amniotic fluid)

**Q6:** Which phospholipid flips to the outer leaflet during apoptosis?
> Phosphatidylserine

**Q7:** What do gangliosides contain that cerebrosides do not?
> Sialic acid (NANA / N-acetylneuraminic acid)

**Q8:** What enzyme does aspirin irreversibly inhibit?
> Cyclooxygenase (COX) — by acetylation of serine residue

**Q9:** What are leukotrienes C4, D4, E4 collectively called?
> SRS-A (Slow Reacting Substance of Anaphylaxis) — cause bronchoconstriction

**Q10:** What is the triene:tetraene ratio threshold for EFA deficiency?
> > 0.4 (increased Mead acid, decreased arachidonic acid)`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering lipid classification, sphingolipids, surfactant, and eicosanoids"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 21, 23", edition: "31st" }] },
    ],
  },

  // ─── Topic 3: Amino Acids & Proteins ──────────────────────────
  {
    topicCode: "BI-MOD-01-TOP-03",
    layers: [
      { layer: 1, slug: "amino-acids-proteins-foundation", title: "Amino Acids & Proteins - Foundation", estimatedMinutes: 20,
        summary: "Amino acids are the building blocks of proteins. 20 standard amino acids with varied R-groups. Protein structure has 4 hierarchical levels. Denaturation disrupts higher-order structure.",
        contentMd: `# Amino Acids & Proteins

## Amino Acid Structure
- **General structure**: Central alpha-carbon bonded to: amino group (-NH2), carboxyl group (-COOH), hydrogen, and R-group (side chain)
- All amino acids (except glycine) are **L-isomers** in the body
- At physiological pH (7.4): zwitterionic form (NH3+ and COO-)

## Classification of 20 Standard Amino Acids

### By R-group Properties
| Category | Amino Acids |
|----------|-------------|
| Non-polar/Hydrophobic | Gly, Ala, Val, Leu, Ile, Pro, Phe, Trp, Met |
| Polar uncharged | Ser, Thr, Cys, Tyr, Asn, Gln |
| Positively charged (basic) | Lys, Arg, His |
| Negatively charged (acidic) | Asp, Glu |

### Essential Amino Acids (10)
Cannot be synthesized by humans — must come from diet:
**PVT TIM HALL**
- Phe, Val, Thr, Trp, Ile, Met, His, Arg, Leu, Lys
- **Arg and His**: Semi-essential (essential in children, synthesized in adults)

### Special Amino Acids
- **Glycine**: Simplest AA, no chiral center, not optically active
- **Proline**: Imino acid (ring structure), causes kinks in polypeptide
- **Cysteine**: Contains -SH (thiol/sulfhydryl) group → forms disulfide bonds (-S-S-)
- **Methionine**: Initiator AA in protein synthesis (start codon AUG), contains sulfur
- **Tryptophan**: Precursor of serotonin, melatonin, niacin (B3)
- **Tyrosine**: Precursor of catecholamines, thyroid hormones, melanin

## Protein Structure Levels

| Level | Bonds | Description |
|-------|-------|-------------|
| Primary (1 degree) | Peptide bonds (covalent) | Linear sequence of amino acids |
| Secondary (2 degree) | Hydrogen bonds (C=O...H-N) | alpha-helix, beta-pleated sheet, beta-turn |
| Tertiary (3 degree) | Multiple (hydrophobic, ionic, disulfide, H-bonds) | 3D folding of single polypeptide |
| Quaternary (4 degree) | Non-covalent (mainly) | Multiple polypeptide subunits |

## Key Structural Features
- **alpha-helix**: Right-handed, H-bonds between every 4th peptide bond (i to i+4), 3.6 residues/turn
- **beta-sheet**: Parallel or antiparallel strands connected by H-bonds
- **Proline and Glycine**: Helix breakers (proline: rigid ring; glycine: too flexible)
- **Collagen**: Left-handed helix, 3 chains form right-handed superhelix

## Denaturation
- Loss of secondary, tertiary, quaternary structure (primary structure preserved)
- **Agents**: Heat, pH extremes, urea, SDS, beta-mercaptoethanol, organic solvents
- **Reversible**: Anfinsen's experiment (RNase A refolds after removing urea)
- **Irreversible**: Cooking an egg (albumin)

> **Clinical Pearl**: Sickle cell disease results from a single amino acid change in the primary structure (Glu → Val at position 6 of beta-globin), demonstrating how primary structure determines all higher levels.`,
        mnemonics: [
          { text: "PVT TIM HALL", explanation: "Essential amino acids: Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine" },
          { text: "Proline and Glycine are HELIX BREAKERS", explanation: "Proline has a rigid ring that cannot fit in helix; Glycine is too flexible and destabilizes the helix" }
        ],
        keyPoints: ["Essential AAs: PVT TIM HALL (His and Arg semi-essential in adults)", "Glycine: simplest, no chirality; Proline: imino acid, helix breaker", "Cysteine forms disulfide bonds; Methionine is the initiator AA", "4 levels: Primary (peptide), Secondary (H-bonds), Tertiary (3D fold), Quaternary (subunits)", "alpha-helix: 3.6 residues/turn, H-bond every 4th peptide bond", "Denaturation preserves primary structure; disrupts higher orders"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 3-5: Amino Acids and Proteins", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 2: Protein Structure", edition: "9th" }] },
      { layer: 2, slug: "amino-acids-proteins-mechanism", title: "Amino Acids & Proteins - Mechanism", estimatedMinutes: 30,
        summary: "Peptide bond chemistry, Ramachandran plot, protein folding mechanisms, post-translational modifications, and specialized proteins like collagen.",
        contentMd: `# Detailed Mechanisms

## Peptide Bond
- Formed between alpha-COOH of one AA and alpha-NH2 of another (condensation)
- **Partial double bond character** → planar, rigid, trans configuration
- Free rotation around N-C-alpha and C-alpha-C bonds (phi and psi angles)
- **Ramachandran plot**: Maps allowed phi-psi angle combinations

## Post-Translational Modifications
| Modification | Amino Acid | Protein Example |
|-------------|------------|-----------------|
| Hydroxylation | Pro, Lys | Collagen (requires vitamin C) |
| Glycosylation | Asn, Ser, Thr | Antibodies, mucins |
| Phosphorylation | Ser, Thr, Tyr | Signal transduction proteins |
| Carboxylation | Glu | Clotting factors II, VII, IX, X (requires vitamin K) |
| Methylation | Lys | Histones |
| Acetylation | Lys | Histones |
| Ubiquitination | Lys | Proteins tagged for proteasomal degradation |

## Collagen: A Special Protein
- Most abundant protein in the body (25-30% of total protein)
- **Amino acid composition**: Gly (33%), Pro + Hydroxyproline (25%)
- **Repeating sequence**: Gly-X-Y (X often Pro, Y often Hydroxyproline)
- **Structure**: Left-handed helix → 3 chains form right-handed triple helix (tropocollagen)
- **Cross-links**: Lysyl oxidase forms covalent cross-links (requires copper)
- **Hydroxylation**: Prolyl hydroxylase and lysyl hydroxylase require **vitamin C, Fe2+, alpha-ketoglutarate**

### Collagen Types
| Type | Location | Feature |
|------|----------|---------|
| I | Bone, skin, tendon, cornea | Most abundant (90%) |
| II | Cartilage, vitreous humor | |
| III | Blood vessels, skin, uterus | Reticulin fibers |
| IV | Basement membrane | Network-forming, non-fibrillar |

## Protein Folding
- **Chaperones**: Assist proper folding (Hsp60, Hsp70, Hsp90)
- **Chaperonins**: GroEL/GroES (bacteria), TRiC (eukaryotes)
- **Misfolding** → aggregation → disease (prion diseases, Alzheimer's)
- **Ubiquitin-proteasome pathway**: Degrades misfolded proteins

## Isoelectric Point (pI)
- pH at which amino acid has **net zero charge**
- At pI: no migration in electric field
- For neutral AAs: pI = (pKa1 + pKa2) / 2
- For acidic AAs: pI = (pKa1 + pKaR) / 2 (lower pI)
- For basic AAs: pI = (pKa2 + pKaR) / 2 (higher pI)

> **Clinical Pearl**: Scurvy (vitamin C deficiency) causes defective collagen due to impaired hydroxylation of proline and lysine. Results in bleeding gums, poor wound healing, and perifollicular hemorrhage. Still seen in malnourished Indian populations.`,
        mnemonics: [
          { text: "Gly-X-Y for collagen", explanation: "Collagen repeating tripeptide: Glycine at every 3rd position (smallest AA fits in the crowded center), X = often Proline, Y = often Hydroxyproline" },
          { text: "STICK for collagen synthesis requirements", explanation: "S-substrate (Pro/Lys), T-Two enzymes (prolyl/lysyl hydroxylase), I-Iron (Fe2+), C-vitamin C (ascorbic acid), K-alpha Ketoglutarate" }
        ],
        keyPoints: ["Peptide bond: partial double bond, planar, trans configuration", "Collagen: Gly-X-Y repeat, triple helix, needs vitamin C for hydroxylation", "Type I collagen most abundant (bone, skin); Type IV in basement membrane", "Phosphorylation on Ser/Thr/Tyr for signal transduction", "Vitamin K needed for gamma-carboxylation of Glu in clotting factors", "Misfolded proteins → ubiquitin-proteasome degradation or aggregation diseases"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 3-5, 49", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 2-3", edition: "9th" }] },
      { layer: 3, slug: "amino-acids-proteins-clinical", title: "Amino Acids & Proteins - Clinical", estimatedMinutes: 20,
        summary: "Clinical disorders: Ehlers-Danlos, osteogenesis imperfecta, Marfan syndrome, scurvy, amyloidosis, and prion diseases.",
        contentMd: `# Clinical Applications

## Collagen Disorders
| Disease | Defect | Features |
|---------|--------|----------|
| Scurvy | Vitamin C deficiency → impaired hydroxylation | Bleeding gums, poor wound healing, corkscrew hair |
| Ehlers-Danlos (EDS) | Defective collagen synthesis (various types) | Hyperextensible skin, joint hypermobility, easy bruising |
| Osteogenesis Imperfecta | Type I collagen mutation | Brittle bones, blue sclera, deafness |
| Alport Syndrome | Type IV collagen mutation | Nephritis, hearing loss, ocular defects |

## Marfan Syndrome
- **Defect**: Fibrillin-1 gene (FBN1) mutation
- Fibrillin is NOT collagen but a glycoprotein in elastic fibers
- **Features**: Tall stature, long limbs (arachnodactyly), lens subluxation (upward), aortic root dilation, mitral valve prolapse
- **Autosomal dominant**

## Sickle Cell Disease
- **Mutation**: Glu → Val at position 6 of beta-globin (GAG → GTG)
- HbS polymerizes under low O2 → sickle-shaped RBCs
- **Vaso-occlusive crises**: Pain, organ damage
- **Protective against Plasmodium falciparum malaria** (sickle cell trait)
- **Indian context**: Prevalent in tribal populations of central India (MP, Chhattisgarh, Maharashtra, Gujarat)

## Amyloidosis
- Misfolded proteins form **beta-pleated sheet** aggregates (amyloid fibrils)
- **Congo red stain**: Apple-green birefringence under polarized light
- Types: AL (immunoglobulin light chain), AA (serum amyloid A), ATTR (transthyretin)
- Affects: kidney, heart, liver, nerves

## Prion Diseases
- Misfolding of normal PrPC (alpha-helix rich) → PrPSc (beta-sheet rich)
- PrPSc acts as template → converts normal protein → chain reaction
- Examples: Creutzfeldt-Jakob disease (CJD), Kuru, Mad cow disease (BSE)
- Resistant to heat, radiation, proteases

## Aminoacidopathies (Inborn Errors)
| Disease | Enzyme Deficiency | Amino Acid | Features |
|---------|-------------------|------------|----------|
| Phenylketonuria (PKU) | Phenylalanine hydroxylase | Phe | Intellectual disability, mousy odor, fair skin |
| Alkaptonuria | Homogentisic acid oxidase | Tyr pathway | Dark urine, ochronosis |
| Maple Syrup Urine Disease | Branched-chain alpha-ketoacid dehydrogenase | Val, Leu, Ile | Burnt sugar urine odor, neurological damage |
| Homocystinuria | Cystathionine beta-synthase | Met/Homocysteine | Marfanoid, lens subluxation (downward), thrombosis |

> **Clinical Pearl**: Lens subluxation helps differentiate: Marfan = upward/superotemporal; Homocystinuria = downward/inferonasal. Both present with tall, thin habitus.`,
        mnemonics: [
          { text: "Marfan UP, Homocystinuria DOWN", explanation: "Lens subluxation direction: Marfan syndrome = upward (superotemporal), Homocystinuria = downward (inferonasal)" },
          { text: "Blue Brittle Bones for OI", explanation: "Osteogenesis Imperfecta: Blue sclera, Brittle bones, hearing loss — Type I collagen defect" }
        ],
        keyPoints: ["Scurvy: vitamin C deficiency → defective collagen hydroxylation", "OI: Type I collagen defect → blue sclera, brittle bones", "Sickle cell: Glu→Val at beta-6; protective against falciparum malaria; common in Indian tribal populations", "Amyloid: beta-sheet aggregates, Congo red → apple-green birefringence", "Marfan lens UP, Homocystinuria lens DOWN", "PKU: phenylalanine hydroxylase deficiency → intellectual disability if untreated"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 5, 49, 50", edition: "31st" }, { book: "Robbins Pathology", chapter: "Ch 6: Genetic Disorders", edition: "10th" }] },
      { layer: 4, slug: "amino-acids-proteins-exam", title: "Amino Acids & Proteins - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield one-liners and pattern recognition for amino acid and protein questions in NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Simplest amino acid: **Glycine** (no chiral center)
- Imino acid: **Proline**
- Amino acid with -SH group: **Cysteine**
- Initiator amino acid: **Methionine** (AUG)
- Precursor of serotonin/melatonin: **Tryptophan**
- Precursor of catecholamines/thyroid hormones: **Tyrosine**
- Most abundant protein in body: **Collagen**
- Most abundant collagen type: **Type I** (bone, skin)
- Collagen in basement membrane: **Type IV**
- Collagen repeat: **Gly-X-Y**
- Hydroxylation of proline requires: **Vitamin C + Fe2+ + alpha-KG**
- Cross-linking in collagen requires: **Lysyl oxidase (needs copper)**
- Sickle cell mutation: **Glu → Val at beta-6 (GAG → GTG)**
- Congo red staining: **Amyloid (apple-green birefringence)**
- PKU enzyme: **Phenylalanine hydroxylase**
- MSUD enzyme: **Branched-chain alpha-ketoacid dehydrogenase**

## Comparison: Marfan vs Homocystinuria

| Feature | Marfan | Homocystinuria |
|---------|--------|----------------|
| Defect | Fibrillin-1 | Cystathionine beta-synthase |
| Inheritance | AD | AR |
| Lens | Upward subluxation | Downward subluxation |
| Joints | Hypermobile | Stiff (osteoporosis) |
| Thrombosis | No | Yes |
| Intelligence | Normal | May be reduced |
| Treatment | Losartan/beta-blocker | Vitamin B6, folate, B12 |

## Pattern Recognition
- Q: "Mousy/musty odor in infant" → **PKU**
- Q: "Blue sclera + fractures" → **Osteogenesis Imperfecta**
- Q: "Hyperextensible skin + joint laxity" → **Ehlers-Danlos**
- Q: "Tall child + lens subluxation + arachnodactyly" → Think Marfan vs Homocystinuria`,
        mnemonics: [
          { text: "PVT TIM HALL", explanation: "10 essential amino acids: Phe, Val, Thr, Trp, Ile, Met, His, Arg, Leu, Lys" }
        ],
        keyPoints: ["PVT TIM HALL = essential AAs", "Collagen: Gly-X-Y, needs vit C, Type I most abundant, Type IV in BM", "Sickle cell: Glu→Val at beta-6", "Marfan lens UP (AD, fibrillin); Homocystinuria lens DOWN (AR, CBS def)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 3-5", edition: "31st" }] },
      { layer: 5, slug: "amino-acids-proteins-recall", title: "Amino Acids & Proteins - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test on amino acids and protein structure.",
        contentMd: `# Active Recall

**Q1:** Name the 10 essential amino acids.
> PVT TIM HALL: Phe, Val, Thr, Trp, Ile, Met, His, Arg, Leu, Lys

**Q2:** Which amino acid has no chiral center?
> Glycine (simplest; R-group is just H)

**Q3:** What is the repeating sequence of collagen?
> Gly-X-Y (X often Pro, Y often Hydroxyproline)

**Q4:** What vitamin is required for collagen hydroxylation?
> Vitamin C (ascorbic acid) — cofactor for prolyl and lysyl hydroxylase

**Q5:** What is the mutation in sickle cell disease?
> Glu → Val at position 6 of beta-globin chain (GAG → GTG)

**Q6:** How many residues per turn in an alpha-helix?
> 3.6 residues per turn

**Q7:** Which two amino acids are helix breakers?
> Proline (rigid ring) and Glycine (too flexible)

**Q8:** What stain is used for amyloid? What is the appearance?
> Congo red; Apple-green birefringence under polarized light

**Q9:** Which direction does the lens subluxate in Marfan vs Homocystinuria?
> Marfan: upward (superotemporal); Homocystinuria: downward (inferonasal)

**Q10:** What enzyme is deficient in PKU?
> Phenylalanine hydroxylase`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering essential AAs, collagen, sickle cell, protein structure, and clinical correlations"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 3-5", edition: "31st" }] },
    ],
  },

  // ─── Topic 4: Nucleic Acids ───────────────────────────────────
  {
    topicCode: "BI-MOD-01-TOP-04",
    layers: [
      { layer: 1, slug: "nucleic-acids-foundation", title: "Nucleic Acids - Foundation", estimatedMinutes: 20,
        summary: "Nucleic acids (DNA and RNA) are polymers of nucleotides. DNA stores genetic information; RNA translates it into proteins. Understanding base pairing and Chargaff's rules is fundamental.",
        contentMd: `# Nucleic Acids

## Building Blocks

### Nucleoside = Base + Sugar
### Nucleotide = Base + Sugar + Phosphate

| Component | DNA | RNA |
|-----------|-----|-----|
| Sugar | Deoxyribose (2'-H) | Ribose (2'-OH) |
| Purines | Adenine, Guanine | Adenine, Guanine |
| Pyrimidines | Cytosine, **Thymine** | Cytosine, **Uracil** |

## Bases

### Purines (2 rings) — AG
- **A**denine and **G**uanine
- Mnemonic: **Pu**re **A**s **G**old (Purines = A, G)

### Pyrimidines (1 ring) — CUT
- **C**ytosine, **U**racil (RNA), **T**hymine (DNA)
- Mnemonic: **CUT the PY** (Pyrimidines = C, U, T)

## Watson-Crick Base Pairing
- **A = T** (2 hydrogen bonds) — in DNA
- **A = U** (2 hydrogen bonds) — in RNA
- **G ≡ C** (3 hydrogen bonds) — in both

> G-C base pairs are **stronger** (3 H-bonds) → higher GC content = higher melting temperature

## Chargaff's Rules (for double-stranded DNA)
1. **A = T** and **G = C** (complementary base pairing)
2. **Purines = Pyrimidines** (A + G = T + C)
3. **A + C = G + T** (each strand has equal purines + pyrimidines)
4. Base ratios are **species-specific** but same across tissues

## DNA Structure (Watson-Crick Model)
- **Double helix**: Two antiparallel strands (5'→3' and 3'→5')
- Right-handed helix (B-form DNA predominant)
- **Major groove** and **Minor groove** (proteins bind here)
- Diameter: 2 nm; One complete turn: 3.4 nm (10 bp/turn in B-DNA)
- Phosphodiester bonds link nucleotides (3'-5')
- Bases stack inside (hydrophobic); phosphate-sugar backbone outside (hydrophilic)

## Types of DNA
| Form | Helix | bp/turn | Conditions |
|------|-------|---------|------------|
| B-DNA | Right-handed | 10 | Physiological (most common) |
| A-DNA | Right-handed | 11 | Dehydrated |
| Z-DNA | Left-handed | 12 | High salt, alternating purine-pyrimidine |

## Types of RNA
| Type | Function | % of total RNA |
|------|----------|---------------|
| mRNA | Carries genetic code from DNA to ribosomes | ~5% |
| tRNA | Carries amino acids to ribosome, has anticodon | ~15% |
| rRNA | Structural component of ribosomes | ~80% |
| snRNA | Splicing (in spliceosome) | Trace |
| miRNA | Gene regulation (post-transcriptional) | Trace |
| siRNA | Gene silencing (RNA interference) | Trace |

> **Clinical Pearl**: rRNA is the most abundant RNA (80%). The ribosome is actually a ribozyme — rRNA catalyzes peptide bond formation, not the protein components.`,
        mnemonics: [
          { text: "Pure As Gold", explanation: "Purines = Adenine + Guanine (2 rings, like a pure gold ring)" },
          { text: "CUT the PY", explanation: "Pyrimidines = Cytosine, Uracil, Thymine (1 ring; CUT with a PY-knife)" }
        ],
        keyPoints: ["Purines (A,G) have 2 rings; Pyrimidines (C,U,T) have 1 ring", "A=T (2 H-bonds); G≡C (3 H-bonds) — GC content determines melting temp", "Chargaff: A=T, G=C, Purines=Pyrimidines in dsDNA", "B-DNA: right-handed, 10 bp/turn, 3.4 nm/turn (physiological form)", "Z-DNA: left-handed, 12 bp/turn", "rRNA is most abundant RNA (~80%); mRNA ~5%; tRNA ~15%"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 34-35: Nucleotides and Nucleic Acids", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 4: DNA, RNA, and Flow of Genetic Information", edition: "9th" }] },
      { layer: 2, slug: "nucleic-acids-mechanism", title: "Nucleic Acids - Mechanism", estimatedMinutes: 30,
        summary: "Nucleotide metabolism, purine and pyrimidine synthesis pathways, salvage pathways, DNA denaturation (Tm), and nucleic acid hybridization techniques.",
        contentMd: `# Nucleic Acids: Detailed Mechanisms

## Nucleotide Biosynthesis

### Purine Synthesis (de novo)
- Built on **ribose-5-phosphate** (from HMP shunt)
- Ring assembled **atom by atom on the sugar** (unlike pyrimidines)
- Sources of atoms:
  - **Glycine**: C-4, C-5, N-7
  - **Aspartate**: N-1
  - **Glutamine**: N-3, N-9
  - **CO2**: C-6
  - **N10-formyl-THF**: C-2, C-8
- First nucleotide formed: **IMP** (inosine monophosphate)
- IMP → AMP (needs GTP) or GMP (needs ATP) — reciprocal regulation

### Pyrimidine Synthesis (de novo)
- Ring formed **first**, then attached to ribose sugar
- Sources: **Aspartate** (C, N) + **Carbamoyl phosphate** (from glutamine + CO2)
- Rate-limiting enzyme: **Carbamoyl phosphate synthetase II** (CPS-II, cytoplasmic)
- Note: CPS-I is mitochondrial (urea cycle) — do not confuse
- First nucleotide: **UMP** → UDP → UTP → CTP

### Salvage Pathways
- Recycle free bases from nucleic acid turnover
- **HGPRT** (Hypoxanthine-Guanine Phosphoribosyl Transferase): Salvages hypoxanthine → IMP, guanine → GMP
- **APRT**: Adenine → AMP
- Deficiency of HGPRT → **Lesch-Nyhan syndrome**

## Nucleotide Degradation

### Purine Degradation
- AMP/GMP → Hypoxanthine → **Xanthine** → **Uric acid**
- Enzyme: **Xanthine oxidase**
- Uric acid is the end product of purine metabolism in humans

### Pyrimidine Degradation
- Degraded to soluble products: beta-alanine (from CUT), beta-aminoisobutyrate (from thymine)
- Water-soluble → excreted easily (unlike purines)

## DNA Denaturation and Melting

### Melting Temperature (Tm)
- Temperature at which 50% of DNA is denatured (single-stranded)
- **Higher GC content → higher Tm** (3 H-bonds vs 2)
- Measured by increase in **UV absorbance at 260 nm** (hyperchromic effect)
- Factors increasing Tm: GC content, longer DNA, higher salt concentration

### Renaturation (Annealing)
- Complementary strands re-associate when cooled slowly
- Basis for **hybridization** techniques (Southern blot, PCR, FISH)

## Important Nucleotide Derivatives
| Nucleotide | Function |
|-----------|----------|
| ATP | Energy currency |
| GTP | Signal transduction, protein synthesis |
| cAMP | Second messenger |
| cGMP | Second messenger (NO pathway) |
| NAD+/NADP+ | Coenzymes (from niacin/B3) |
| FAD | Coenzyme (from riboflavin/B2) |
| CoA | Acyl group transfer (from pantothenic acid/B5) |
| SAM | Methyl group donor (from methionine + ATP) |
| UDP-glucose | Glycogen synthesis |

> **Clinical Pearl**: Methotrexate inhibits dihydrofolate reductase (DHFR), blocking THF regeneration. This impairs both purine and pyrimidine synthesis, making it effective as an anti-cancer and immunosuppressive drug.`,
        mnemonics: [
          { text: "GAG-CAN for purine ring atoms", explanation: "Sources for purine ring: Glycine (C4,C5,N7), Aspartate (N1), Glutamine (N3,N9), CO2 (C6), And N10-formyl-THF (C2,C8)" },
          { text: "CPS-I for urea, CPS-II for pyrimidines", explanation: "Carbamoyl phosphate synthetase I = mitochondrial (urea cycle); CPS-II = cytoplasmic (pyrimidine synthesis)" }
        ],
        keyPoints: ["Purine synthesis: ring built on sugar; Pyrimidine: ring first, then sugar attached", "Purine ring atoms from: Glycine, Aspartate, Glutamine, CO2, THF", "Salvage: HGPRT (hypoxanthine/guanine); APRT (adenine)", "Purine end product: uric acid (by xanthine oxidase)", "Higher GC content → higher Tm (hyperchromic effect at 260nm)", "CPS-I (mitochondrial, urea); CPS-II (cytoplasmic, pyrimidines)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 33-35", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 25: Nucleotide Biosynthesis", edition: "9th" }] },
      { layer: 3, slug: "nucleic-acids-clinical", title: "Nucleic Acids - Clinical", estimatedMinutes: 20,
        summary: "Clinical correlations: gout, Lesch-Nyhan syndrome, anti-metabolite drugs, and nucleotide-based therapeutics.",
        contentMd: `# Clinical Applications

## Gout
- **Cause**: Hyperuricemia → monosodium urate crystal deposition in joints
- **Crystals**: Needle-shaped, negatively birefringent under polarized light
- **Joints**: First MTP joint (podagra) most common
- **Risk factors**: High purine diet (red meat, organ meat, beer), renal underexcretion
- **Treatment**:
  - Acute: NSAIDs, Colchicine
  - Chronic: **Allopurinol** (xanthine oxidase inhibitor → decreases uric acid)
  - **Febuxostat**: Non-purine xanthine oxidase inhibitor
  - **Rasburicase**: Recombinant uricase (used in tumor lysis syndrome)

## Lesch-Nyhan Syndrome
- **Deficiency**: HGPRT (X-linked recessive)
- Impaired purine salvage → excess purine de novo synthesis → hyperuricemia
- **Features**: Intellectual disability, self-mutilation (biting lips/fingers), choreiform movements, gouty arthritis
- **Triad**: Hyperuricemia + neurological dysfunction + self-mutilation

## Tumor Lysis Syndrome
- Rapid cell death (after chemotherapy) → massive nucleic acid release
- Purine breakdown → **hyperuricemia** → urate nephropathy
- Also: hyperkalemia, hyperphosphatemia, hypocalcemia
- **Prevention**: Hydration + allopurinol or rasburicase before chemotherapy

## Anti-metabolite Drugs
| Drug | Target | Use |
|------|--------|-----|
| Methotrexate | DHFR (blocks THF) | Cancer, RA, ectopic pregnancy |
| 5-Fluorouracil (5-FU) | Thymidylate synthase | Colorectal, breast cancer |
| 6-Mercaptopurine (6-MP) | Purine synthesis | Leukemia (ALL maintenance) |
| Azathioprine | Purine synthesis (prodrug of 6-MP) | Immunosuppression |
| Hydroxyurea | Ribonucleotide reductase | CML, Sickle cell disease |
| Mycophenolate | IMP dehydrogenase | Transplant rejection |

## Nucleotide Analogs as Antivirals
- **Acyclovir**: Guanosine analog → incorporated into viral DNA, chain termination (HSV)
- **Zidovudine (AZT)**: Thymidine analog → inhibits HIV reverse transcriptase
- **Remdesivir**: Adenosine analog → used in COVID-19

> **Clinical Pearl**: Hydroxyurea is used in sickle cell disease (common in Indian tribal belt) to increase HbF production. By inhibiting ribonucleotide reductase, it promotes S-phase arrest and induces gamma-globin expression.`,
        mnemonics: [
          { text: "HGPRT deficiency = Lesch-Nyhan = Self-mutilation", explanation: "HGPRT (Hypoxanthine-Guanine PhosphoRibosyl Transferase) deficiency → Lesch-Nyhan syndrome: X-linked, hyperuricemia, self-mutilation, intellectual disability" },
          { text: "Allopurinol = Anti-uric acid = Xanthine Oxidase inhibitor", explanation: "Allopurinol is a structural analog of hypoxanthine that inhibits xanthine oxidase, reducing uric acid formation" }
        ],
        keyPoints: ["Gout: urate crystals (needle-shaped, neg birefringent); treat with allopurinol (XO inhibitor)", "Lesch-Nyhan: HGPRT deficiency, X-linked, self-mutilation, hyperuricemia", "Tumor lysis syndrome: hyperuricemia + hyperK + hyperPO4 + hypoCa", "Methotrexate blocks DHFR; 5-FU blocks thymidylate synthase", "Hydroxyurea used in sickle cell disease (Indian tribal belt) to increase HbF"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 33-34", edition: "31st" }, { book: "KD Tripathi Pharmacology", chapter: "Ch 62: Anticancer Drugs", edition: "8th" }] },
      { layer: 4, slug: "nucleic-acids-exam", title: "Nucleic Acids - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield points on nucleic acids, nucleotide metabolism, and anti-metabolite drugs for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Purines: **Adenine, Guanine** (2 rings)
- Pyrimidines: **Cytosine, Uracil, Thymine** (1 ring)
- H-bonds in A-T: **2**; in G-C: **3**
- B-DNA: **Right-handed, 10 bp/turn** (physiological)
- Z-DNA: **Left-handed, 12 bp/turn**
- Most abundant RNA: **rRNA (80%)**
- End product of purine metabolism: **Uric acid**
- Enzyme for uric acid formation: **Xanthine oxidase**
- HGPRT deficiency: **Lesch-Nyhan syndrome**
- Rate-limiting enzyme of pyrimidine synthesis: **CPS-II**
- First nucleotide in purine synthesis: **IMP**
- First nucleotide in pyrimidine synthesis: **UMP**
- Gout crystals: **Needle-shaped, negatively birefringent**
- Pseudogout crystals: **Rhomboid, positively birefringent** (CPPD)

## Comparison: Gout vs Pseudogout

| Feature | Gout | Pseudogout |
|---------|------|------------|
| Crystal | Monosodium urate | Calcium pyrophosphate (CPPD) |
| Shape | Needle | Rhomboid |
| Birefringence | Negative | Positive |
| Joint | 1st MTP (podagra) | Knee |
| Treatment | Allopurinol, colchicine | NSAIDs |

## Anti-Metabolite Pattern
- Q: "Drug that blocks DHFR" → **Methotrexate**
- Q: "Drug that blocks thymidylate synthase" → **5-FU**
- Q: "Purine analog for ALL maintenance" → **6-MP**
- Q: "Drug for tumor lysis prophylaxis" → **Allopurinol** (or Rasburicase)`,
        mnemonics: [
          { text: "Negative Needles in Gout", explanation: "Gout: Needle-shaped, Negatively birefringent monosodium urate crystals. Pseudogout: Rhomboid, Positively birefringent CPPD crystals" }
        ],
        keyPoints: ["A-T = 2 H-bonds; G-C = 3 H-bonds", "Uric acid = end product of purines; xanthine oxidase", "Lesch-Nyhan: HGPRT def, X-linked, self-mutilation", "Gout: negative needles; Pseudogout: positive rhomboids"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 33-35", edition: "31st" }] },
      { layer: 5, slug: "nucleic-acids-recall", title: "Nucleic Acids - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards on nucleic acid structure, Chargaff rules, and clinical correlations.",
        contentMd: `# Active Recall

**Q1:** What are the purines and pyrimidines?
> Purines: Adenine, Guanine (2 rings). Pyrimidines: Cytosine, Uracil, Thymine (1 ring)

**Q2:** How many H-bonds in A-T vs G-C?
> A-T = 2; G-C = 3 hydrogen bonds

**Q3:** State Chargaff's rules.
> In dsDNA: A=T, G=C, Purines=Pyrimidines (A+G = T+C)

**Q4:** What is the predominant form of DNA in the body?
> B-DNA (right-handed, 10 bp/turn, 3.4 nm per turn)

**Q5:** What is the end product of purine metabolism in humans?
> Uric acid (formed by xanthine oxidase)

**Q6:** What enzyme is deficient in Lesch-Nyhan syndrome?
> HGPRT (Hypoxanthine-Guanine Phosphoribosyl Transferase)

**Q7:** What is the most abundant type of RNA?
> rRNA (~80% of total RNA)

**Q8:** What does allopurinol inhibit?
> Xanthine oxidase (reduces uric acid production)

**Q9:** What is the crystal morphology in gout?
> Needle-shaped, negatively birefringent monosodium urate crystals

**Q10:** Name the rate-limiting enzyme of pyrimidine de novo synthesis.
> Carbamoyl phosphate synthetase II (CPS-II, cytoplasmic)`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering base pairing, Chargaff, DNA forms, purine metabolism, and clinical disorders"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 33-35", edition: "31st" }] },
    ],
  },

  // ─── Topic 5: Hemoglobin & Myoglobin ──────────────────────────
  {
    topicCode: "BI-MOD-01-TOP-05",
    layers: [
      { layer: 1, slug: "hemoglobin-myoglobin-foundation", title: "Hemoglobin & Myoglobin - Foundation", estimatedMinutes: 20,
        summary: "Hemoglobin is a tetrameric oxygen-transport protein in RBCs. Myoglobin is a monomeric O2-storage protein in muscle. Understanding their structure, cooperativity, and O2 binding is fundamental.",
        contentMd: `# Hemoglobin & Myoglobin

## Myoglobin (Mb)
- **Single polypeptide** (monomer, 153 amino acids)
- Contains one **heme group** (Fe2+ in protoporphyrin IX ring)
- Found in **muscle** (red color of meat)
- Function: **O2 storage** in muscle tissue
- O2 dissociation curve: **Hyperbolic** (simple binding, no cooperativity)
- Very high O2 affinity → does not release O2 easily

## Hemoglobin (Hb)
- **Tetramer**: 2 alpha + 2 beta subunits (alpha2-beta2 in HbA)
- Each subunit has one heme group → 4 O2 molecules per Hb
- Found in **RBCs** (erythrocytes)
- Function: **O2 transport** from lungs to tissues
- O2 dissociation curve: **Sigmoidal** (cooperative binding)

## Hemoglobin Types

| Type | Structure | When Present |
|------|-----------|-------------|
| HbA (adult) | alpha2-beta2 | > 95% in adults |
| HbA2 | alpha2-delta2 | 2-3% in adults |
| HbF (fetal) | alpha2-gamma2 | Predominant in fetus, < 1% in adults |
| HbA1c | Glycosylated HbA | 4-6% normally (diabetic monitoring) |

## Heme Structure
- **Protoporphyrin IX** ring + **Fe2+** (ferrous iron)
- Fe2+ binds O2 reversibly
- Fe3+ (ferric/oxidized) = **methemoglobin** (cannot bind O2)
- Heme synthesis: partly in mitochondria, partly in cytoplasm
- Rate-limiting enzyme: **ALA synthase** (delta-aminolevulinic acid synthase)

## Oxygen Dissociation Curve

### Sigmoidal Shape of Hb
- Due to **cooperative binding** (T-state → R-state transition)
- **T (Tense) state**: Low O2 affinity (deoxy-Hb)
- **R (Relaxed) state**: High O2 affinity (oxy-Hb)
- First O2 binds weakly; subsequent O2 molecules bind with increasing affinity

### Key Values
- **P50**: Partial pressure of O2 at 50% saturation
- Normal P50 of Hb: **26.6 mmHg**
- Myoglobin P50: **~2.8 mmHg** (much higher affinity)
- P50 of HbF: **~19 mmHg** (higher affinity than HbA → takes O2 from maternal Hb)

### Right Shift (decreased O2 affinity, increased P50)
Promotes O2 release to tissues:
- Increased H+ (low pH / acidosis) — **Bohr effect**
- Increased CO2
- Increased temperature
- Increased **2,3-BPG** (2,3-bisphosphoglycerate)

### Left Shift (increased O2 affinity, decreased P50)
O2 held more tightly:
- Decreased H+ (high pH / alkalosis)
- Decreased CO2
- Decreased temperature
- Decreased 2,3-BPG
- **HbF** (does not bind 2,3-BPG well)
- **CO poisoning** (CO binds 200x more tightly than O2)

> **Clinical Pearl**: HbF has higher O2 affinity than HbA because gamma chains bind 2,3-BPG poorly. This is physiologically important — it allows the fetus to extract O2 from maternal blood across the placenta.`,
        mnemonics: [
          { text: "CADET face Right", explanation: "Right shift of O2 dissociation curve: CO2, Acid (H+), 2,3-DPG (BPG), Exercise, Temperature — all increased in exercising tissues" },
          { text: "T is Tense and Tight (low affinity); R is Relaxed and Ready (high affinity)", explanation: "T-state = deoxy-Hb, low O2 affinity; R-state = oxy-Hb, high O2 affinity" }
        ],
        keyPoints: ["Hb: tetramer (alpha2-beta2), sigmoidal curve, cooperative binding", "Mb: monomer, hyperbolic curve, O2 storage in muscle", "HbF (alpha2-gamma2): higher O2 affinity, binds 2,3-BPG poorly", "Right shift (CADET): CO2, Acid, DPG, Exercise, Temperature", "P50 of Hb = 26.6 mmHg; higher P50 = lower affinity", "Heme: protoporphyrin IX + Fe2+; ALA synthase is rate-limiting"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 6: Proteins: Myoglobin & Hemoglobin", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 7: Hemoglobin", edition: "9th" }] },
      { layer: 2, slug: "hemoglobin-myoglobin-mechanism", title: "Hemoglobin & Myoglobin - Mechanism", estimatedMinutes: 30,
        summary: "Detailed molecular mechanisms of cooperativity, allosteric regulation, Bohr effect, CO2 transport, and 2,3-BPG binding.",
        contentMd: `# Detailed Mechanisms

## Cooperative Binding — Molecular Basis
- **T → R transition**: Binding of first O2 to one subunit causes conformational change
- Breaks salt bridges between subunits → other subunits shift to R-state
- Each subsequent O2 binds more easily → **positive cooperativity**
- **Hill coefficient** (nH): Measure of cooperativity
  - Hb: nH = 2.8 (strong cooperativity)
  - Mb: nH = 1.0 (no cooperativity)
  - Maximum possible for Hb: 4.0 (perfect cooperativity)

## Bohr Effect (Detailed)
- In tissues: CO2 + H2O → H2CO3 → H+ + HCO3- (carbonic anhydrase)
- H+ protonates His residues on Hb → stabilizes T-state → releases O2
- In lungs: reverse occurs — O2 binding releases H+ → drives CO2 off
- **Equation**: HbH+ + O2 ⇌ HbO2 + H+

## CO2 Transport
| Form | Percentage | Mechanism |
|------|-----------|-----------|
| Dissolved CO2 | ~7% | In plasma |
| Carbaminohemoglobin | ~23% | CO2 binds N-terminal of Hb |
| Bicarbonate (HCO3-) | ~70% | CO2 + H2O → HCO3- + H+ (in RBCs) |

### Chloride Shift (Hamburger phenomenon)
- HCO3- exits RBC via **Band 3 protein** (anion exchanger)
- Cl- enters RBC in exchange → maintains electroneutrality
- Reverse occurs in lungs

## 2,3-BPG (2,3-Bisphosphoglycerate)
- Produced in RBCs from glycolysis intermediate (1,3-BPG)
- Enzyme: **Bisphosphoglycerate mutase** (Rapoport-Luebering shunt)
- Binds to **central cavity** of deoxy-Hb (T-state) between beta chains
- Stabilizes T-state → decreases O2 affinity → promotes O2 delivery
- **HbF**: gamma chains have Ser instead of His-143 → binds 2,3-BPG poorly → left shift

### Clinical Significance of 2,3-BPG
| Condition | 2,3-BPG Level | Effect |
|-----------|--------------|--------|
| High altitude adaptation | Increased | Right shift → better O2 delivery |
| Chronic anemia | Increased | Compensatory right shift |
| Stored bank blood | Decreased | Left shift → poor O2 delivery |
| Hypophosphatemia | Decreased | Left shift |

## Methemoglobin
- Fe2+ oxidized to Fe3+ → cannot bind O2
- Normally kept < 1% by **NADH-methemoglobin reductase** (cytochrome b5 reductase)
- **Causes**: Nitrites, dapsone, primaquine, local anesthetics (benzocaine)
- **Treatment**: Methylene blue (acts as electron carrier, requires G6PD)
- **Chocolate-brown blood** that does not turn red with O2 exposure

## Carbon Monoxide (CO) Poisoning
- CO binds Hb with **200-250x greater affinity** than O2
- Forms **carboxyhemoglobin (HbCO)**
- Shifts curve to the left → remaining O2 held more tightly
- **Cherry-red** skin color (HbCO is bright red)
- Pulse oximetry falsely reads normal (cannot distinguish HbCO from HbO2)
- **Treatment**: 100% O2, hyperbaric oxygen

> **Clinical Pearl**: In Indian emergency departments, CO poisoning from charcoal/coal burning (sigri) in poorly ventilated rooms is a significant cause of winter deaths. Pulse oximetry is unreliable — arterial blood gas with co-oximetry is needed.`,
        mnemonics: [
          { text: "70-23-7 for CO2 transport", explanation: "70% as bicarbonate, 23% as carbaminohemoglobin, 7% dissolved — percentages of CO2 transport forms" },
          { text: "Band 3 for Chloride shift", explanation: "Band 3 protein (anion exchanger 1) mediates the chloride shift in RBCs during CO2 transport" }
        ],
        keyPoints: ["Hill coefficient: Hb = 2.8 (cooperative), Mb = 1.0 (none)", "Bohr effect: H+ stabilizes T-state → O2 release in tissues", "CO2 transport: 70% HCO3-, 23% carbamino-Hb, 7% dissolved", "2,3-BPG binds T-state between beta chains; HbF gamma chains bind it poorly", "Stored blood loses 2,3-BPG → left shift → poor O2 delivery", "CO: 200x affinity, left shift, cherry-red skin, treat with 100% O2/hyperbaric"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 6", edition: "31st" }, { book: "Guyton Physiology", chapter: "Ch 41: Transport of O2 and CO2", edition: "14th" }] },
      { layer: 3, slug: "hemoglobin-myoglobin-clinical", title: "Hemoglobin & Myoglobin - Clinical", estimatedMinutes: 20,
        summary: "Hemoglobinopathies: sickle cell disease, thalassemias, methemoglobinemia. Indian context with thalassemia belt and tribal sickle cell prevalence.",
        contentMd: `# Clinical Applications

## Sickle Cell Disease (HbS)
- **Mutation**: Glu → Val at position 6 of beta chain (GAG → GTG)
- HbS polymerizes under low O2 → sickle-shaped RBCs
- **Heterozygous (HbAS)**: Sickle cell trait — mostly asymptomatic, protective against P. falciparum malaria
- **Homozygous (HbSS)**: Sickle cell disease
- **Indian prevalence**: Tribal populations (5-35%) in MP, Chhattisgarh, Maharashtra, Gujarat, Odisha, Karnataka
- **Clinical features**: Vaso-occlusive crises (pain), splenic sequestration, aplastic crisis (parvovirus B19), acute chest syndrome
- **Diagnosis**: Hb electrophoresis, sickling test, HPLC
- **Treatment**: Hydroxyurea (increases HbF), transfusions, penicillin prophylaxis, bone marrow transplant (curative)

## Thalassemias
- **Quantitative defect**: Reduced or absent globin chain synthesis (vs qualitative in HbS)

### Alpha-Thalassemia (deletion of alpha-globin genes, Chr 16)
| Deleted Genes | Name | Clinical |
|--------------|------|----------|
| 1 deleted (-alpha/alpha-alpha) | Silent carrier | Normal |
| 2 deleted (--/alpha-alpha or -alpha/-alpha) | Alpha-thal trait | Mild microcytic anemia |
| 3 deleted (--/-alpha) | HbH disease | Moderate hemolytic anemia, HbH (beta4) |
| 4 deleted (--/--) | Hydrops fetalis | Incompatible with life, Hb Barts (gamma4) |

### Beta-Thalassemia (point mutations in beta-globin gene, Chr 11)
| Type | Genetics | Clinical |
|------|----------|----------|
| Beta-thal minor (trait) | Heterozygous (beta/beta+ or beta/beta0) | Mild anemia, increased HbA2 (> 3.5%) |
| Beta-thal intermedia | Moderate reduction | Moderate anemia, some transfusion |
| Beta-thal major (Cooley's anemia) | Homozygous (beta0/beta0) | Severe anemia, transfusion-dependent |

- **India**: Thalassemia belt across Gujarat, Maharashtra, Punjab, Bengal
- **Beta-thal major features**: Severe anemia by 6 months (when HbF declines), hepatosplenomegaly, chipmunk facies (extramedullary hematopoiesis), crew-cut appearance on skull X-ray
- **Diagnosis**: HPLC, Hb electrophoresis, NESTROFT screening test
- **Treatment**: Regular transfusions + iron chelation (deferasirox, deferoxamine), bone marrow transplant

## HbA1c (Glycated Hemoglobin)
- Non-enzymatic glycation of Hb (glucose attaches to N-terminal valine of beta chain)
- Reflects **average blood glucose over 2-3 months** (RBC lifespan = 120 days)
- **Normal**: 4-6%; **Diabetic target**: < 7%
- **Falsely low**: Hemolytic anemia, blood loss, thalassemia (shorter RBC life)
- **Falsely high**: Iron deficiency anemia, splenectomy

## Methemoglobinemia
- Congenital: NADH-methemoglobin reductase (cytochrome b5 reductase) deficiency
- Acquired: Drugs (dapsone, nitrites, benzocaine, primaquine)
- **Clinical**: Cyanosis unresponsive to O2, chocolate-brown blood, SpO2 ~85% regardless of actual oxygenation
- **Treatment**: IV Methylene blue (contraindicated in G6PD deficiency — use ascorbic acid instead)

> **Clinical Pearl**: In India, the National Thalassemia Control Programme recommends screening of pregnant women in high-prevalence states. NESTROFT (Naked Eye Single Tube Red cell Osmotic Fragility Test) is a cost-effective screening tool used in Indian community settings.`,
        mnemonics: [
          { text: "Hb Barts = 4 gamma (Gamma4) = 4 deletions = fatal", explanation: "In hydrops fetalis (all 4 alpha genes deleted), only gamma chains are made → Hb Barts (gamma4), which has extremely high O2 affinity and cannot deliver O2 to tissues" },
          { text: "Chipmunk faces Cooley's", explanation: "Beta-thalassemia major (Cooley's anemia) causes chipmunk facies due to extramedullary hematopoiesis expanding facial bones" }
        ],
        keyPoints: ["Sickle cell: Glu→Val at beta-6; prevalent in Indian tribal belt (MP, Chhattisgarh, Maharashtra)", "Alpha-thal: gene deletions on Chr 16; 4 deletions = Hb Barts (hydrops fetalis)", "Beta-thal major: transfusion-dependent, chipmunk facies, crew-cut skull; prevalent in Gujarat, Punjab, Bengal", "HbA1c: reflects 2-3 month glucose; falsely low in hemolytic anemia/thalassemia", "Methemoglobin: Fe3+, chocolate blood, treat with methylene blue (needs G6PD)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 6", edition: "31st" }, { book: "Harsh Mohan Pathology", chapter: "Ch 12: Hemolytic Anemias", edition: "8th" }] },
      { layer: 4, slug: "hemoglobin-myoglobin-exam", title: "Hemoglobin & Myoglobin - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield points on Hb/Mb for NEXT/NEET PG: O2 curve shifts, hemoglobinopathies, and diagnostic tests.",
        contentMd: `# Exam High Yield

## One-Liners
- Adult Hb (HbA): **alpha2-beta2**
- Fetal Hb (HbF): **alpha2-gamma2** (higher O2 affinity)
- HbA2: **alpha2-delta2** (raised in beta-thal trait > 3.5%)
- Sickle cell mutation: **Glu → Val at beta-6**
- HbS polymerizes because: **Val is hydrophobic** → deoxy-HbS aggregates
- P50 of Hb: **26.6 mmHg**
- Hill coefficient of Hb: **2.8**
- CO affinity for Hb: **200-250x that of O2**
- Cherry-red color: **CO poisoning**
- Chocolate-brown blood: **Methemoglobinemia**
- Hb Barts: **gamma4** (hydrops fetalis)
- HbH: **beta4** (3 alpha gene deletions)
- 2,3-BPG binds between: **beta chains (central cavity of T-state)**
- Methylene blue contraindicated in: **G6PD deficiency**

## Right Shift vs Left Shift Summary

| Right Shift (O2 release) | Left Shift (O2 retention) |
|--------------------------|--------------------------|
| Increased CO2, H+, temp, 2,3-BPG | Decreased CO2, H+, temp, 2,3-BPG |
| Exercise, fever, anemia | HbF, CO, methemoglobin |
| High altitude adaptation | Stored bank blood |

## Comparison: Alpha-Thal vs Beta-Thal

| Feature | Alpha-Thalassemia | Beta-Thalassemia |
|---------|-------------------|------------------|
| Gene | Chromosome 16 | Chromosome 11 |
| Mutation type | Deletions (usually) | Point mutations (usually) |
| HbA2 | Normal/Low | Increased (> 3.5%) |
| Onset | At birth (alpha needed for all Hbs) | 6 months (when HbF declines) |
| Worst form | Hydrops fetalis (Hb Barts) | Thal major (Cooley's) |

## Pattern Recognition
- Q: "Increased HbA2" → **Beta-thal trait**
- Q: "Hb electrophoresis shows HbS band" → **Sickle cell disease/trait**
- Q: "Cyanosis not responding to O2" → **Methemoglobinemia**
- Q: "Cherry-red skin, house fire" → **CO poisoning**
- Q: "Crew-cut skull X-ray in child" → **Beta-thal major**`,
        mnemonics: [
          { text: "CADET face Right", explanation: "CO2, Acid, 2,3-DPG, Exercise, Temperature — all shift O2 curve RIGHT" }
        ],
        keyPoints: ["HbA = alpha2beta2; HbF = alpha2gamma2; HbA2 = alpha2delta2", "Right shift: CADET (CO2, Acid, DPG, Exercise, Temp)", "Beta-thal trait: raised HbA2 > 3.5%", "Cherry-red = CO; Chocolate = MetHb", "Alpha-thal: Chr 16, deletions; Beta-thal: Chr 11, point mutations"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 6", edition: "31st" }] },
      { layer: 5, slug: "hemoglobin-myoglobin-recall", title: "Hemoglobin & Myoglobin - Active Recall", estimatedMinutes: 10,
        summary: "Flashcards for Hb/Mb structure, O2 binding, and hemoglobinopathies.",
        contentMd: `# Active Recall

**Q1:** What is the subunit composition of HbA, HbF, and HbA2?
> HbA: alpha2-beta2; HbF: alpha2-gamma2; HbA2: alpha2-delta2

**Q2:** Why is the O2 dissociation curve of Hb sigmoidal?
> Cooperative binding: first O2 changes conformation (T→R), subsequent O2 molecules bind with increasing affinity

**Q3:** Name 4 factors that cause a RIGHT shift.
> Increased CO2, H+ (acidosis), 2,3-BPG, and Temperature (CADET)

**Q4:** Why does HbF have higher O2 affinity than HbA?
> Gamma chains bind 2,3-BPG poorly → less stabilization of T-state → higher O2 affinity

**Q5:** What is the mutation in sickle cell disease?
> Glu → Val at position 6 of beta-globin (GAG → GTG)

**Q6:** What is HbA2 level in beta-thalassemia trait?
> Increased, > 3.5% (diagnostic)

**Q7:** What is Hb Barts and when does it occur?
> Gamma4 tetramers; occurs when all 4 alpha genes are deleted (hydrops fetalis)

**Q8:** What causes chocolate-brown blood? Treatment?
> Methemoglobinemia (Fe3+); treat with IV methylene blue

**Q9:** What is the Hill coefficient of Hb vs Mb?
> Hb = 2.8 (cooperative); Mb = 1.0 (no cooperativity)

**Q10:** How does CO poisoning affect the O2 dissociation curve?
> Left shift — CO binds 200x more tightly than O2 and locks remaining subunits in R-state

**Q11:** What is HbA1c and what does it reflect?
> Glycated Hb; reflects average blood glucose over 2-3 months

**Q12:** Where is 2,3-BPG produced and where does it bind?
> Produced in RBCs (Rapoport-Luebering shunt); binds central cavity of deoxy-Hb between beta chains`,
        mnemonics: [],
        keyPoints: ["12 recall questions covering Hb structure, O2 curve, hemoglobinopathies, and clinical correlations"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 6", edition: "31st" }] },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // MODULE 2: ENZYMES (BI-MOD-02) — 4 Topics
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: Enzyme Classification & Kinetics ────────────────
  {
    topicCode: "BI-MOD-02-TOP-01",
    layers: [
      { layer: 1, slug: "enzyme-classification-kinetics-foundation", title: "Enzyme Classification & Kinetics - Foundation", estimatedMinutes: 20,
        summary: "Enzymes are biological catalysts classified into 6 major classes by the IUB system. Enzyme kinetics describes how enzymes bind substrates and catalyze reactions, characterized by Km and Vmax.",
        contentMd: `# Enzyme Classification & Kinetics

## Properties of Enzymes
- **Biological catalysts**: Increase reaction rate without being consumed
- Highly **specific** (substrate, reaction, stereo-specificity)
- Lower the **activation energy** (Ea) — do NOT change equilibrium
- Most are **proteins** (exception: ribozymes = catalytic RNA)
- Require optimal **pH and temperature**
- May need **cofactors** (metal ions) or **coenzymes** (organic molecules)

## IUB Classification (6 Classes)

| Class | Reaction | Example |
|-------|----------|---------|
| 1. Oxidoreductases | Oxidation-reduction | Lactate dehydrogenase (LDH) |
| 2. Transferases | Transfer of groups | Kinases, Transaminases (ALT, AST) |
| 3. Hydrolases | Hydrolysis (add water) | Lipase, Amylase, Pepsin |
| 4. Lyases | Remove groups (non-hydrolytic) | Aldolase, Decarboxylases |
| 5. Isomerases | Isomerization | Phosphoglucose isomerase, Mutases |
| 6. Ligases (Synthetases) | Join molecules using ATP | Pyruvate carboxylase, DNA ligase |

> Note: Synthases do NOT use ATP; Synthetases (ligases) USE ATP

## Active Site
- Small region of enzyme that binds substrate and catalyzes reaction
- **Lock and Key model** (Fischer): Rigid complementarity
- **Induced Fit model** (Koshland): Enzyme changes shape upon substrate binding (accepted model)

## Enzyme Kinetics

### Michaelis-Menten Equation
$$v = \\frac{V_{max}[S]}{K_m + [S]}$$

- **v**: Reaction velocity
- **Vmax**: Maximum velocity (all enzyme saturated)
- **[S]**: Substrate concentration
- **Km**: Michaelis constant

### Key Parameters

**Km (Michaelis Constant)**
- [S] at which velocity = Vmax/2
- Reflects **affinity** of enzyme for substrate
- **Low Km = High affinity** (needs less substrate for half-max velocity)
- **High Km = Low affinity**
- Km is INDEPENDENT of enzyme concentration

**Vmax (Maximum Velocity)**
- Achieved when ALL enzyme molecules are saturated with substrate
- **Proportional to enzyme concentration** [E]
- Vmax = kcat x [E]total

**kcat (Turnover Number)**
- Number of substrate molecules converted per enzyme molecule per second
- Carbonic anhydrase: one of the fastest enzymes (kcat ~ 10^6/sec)

### Lineweaver-Burk Plot (Double Reciprocal)
- Plot of **1/v vs 1/[S]** → gives a straight line
- **Y-intercept** = 1/Vmax
- **X-intercept** = -1/Km
- Slope = Km/Vmax
- Useful for distinguishing types of inhibition`,
        mnemonics: [
          { text: "OTHer LILy (OTHLI L)", explanation: "6 enzyme classes in order: Oxidoreductases, Transferases, Hydrolases, Lyases, Isomerases, Ligases" },
          { text: "Low Km = Loves substrate (high affinity)", explanation: "A low Km value means the enzyme achieves half-maximal velocity at a low substrate concentration — it has high affinity for its substrate" }
        ],
        keyPoints: ["6 enzyme classes: Oxidoreductases, Transferases, Hydrolases, Lyases, Isomerases, Ligases", "Km = [S] at half Vmax; Low Km = high affinity", "Vmax depends on [E]; Km is independent of [E]", "Induced fit model (Koshland) is the accepted model for enzyme-substrate binding", "Lineweaver-Burk: 1/v vs 1/[S]; Y-intercept = 1/Vmax, X-intercept = -1/Km", "Synthetases use ATP; Synthases do not"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 7-8: Enzymes", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 8: Enzyme Kinetics", edition: "9th" }] },
      { layer: 2, slug: "enzyme-classification-kinetics-mechanism", title: "Enzyme Classification & Kinetics - Mechanism", estimatedMinutes: 30,
        summary: "Detailed enzyme kinetics including multisubstrate reactions, catalytic mechanisms (acid-base, covalent, metal ion), and significance of kinetic parameters in drug design.",
        contentMd: `# Enzyme Kinetics: Detailed Mechanisms

## Catalytic Mechanisms

### Acid-Base Catalysis
- Amino acid residues donate/accept protons
- **His** (imidazole) is the most common — acts as both acid and base at physiological pH
- Example: Chymotrypsin (His-57 in catalytic triad)

### Covalent Catalysis
- Transient covalent bond between enzyme and substrate
- Example: Serine proteases (Ser-195 forms acyl-enzyme intermediate)
- **Catalytic triad**: Ser-195, His-57, Asp-102 (chymotrypsin)

### Metal Ion Catalysis
- Metal ions participate in catalysis
- **Metalloenzymes**: Tightly bound metal (Zn in carbonic anhydrase, carboxypeptidase)
- **Metal-activated enzymes**: Loosely bound metal (Mg2+ in kinases)

## Multisubstrate Reactions

### Sequential (Both substrates bind before products release)
- **Ordered**: Substrates bind in specific order (e.g., LDH — NAD+ binds first)
- **Random**: Either substrate can bind first

### Ping-Pong (Double Displacement)
- First substrate binds → product released → enzyme modified
- Second substrate binds modified enzyme → second product released
- Example: **Transaminases (AST, ALT)** — amino group transferred via PLP

## Kinetic Parameters in Detail

### Catalytic Efficiency
- kcat/Km ratio: Measure of enzyme efficiency
- **Diffusion-limited enzymes** (kinetically perfect): kcat/Km ~ 10^8 - 10^9 M^-1s^-1
- Examples: Triose phosphate isomerase, Carbonic anhydrase, Acetylcholinesterase

### Enzyme Units
- **International Unit (IU)**: Amount that converts 1 micromol substrate/min under standard conditions
- **Katal**: Amount that converts 1 mol substrate/sec (SI unit)
- **Specific activity**: Units per mg protein (measure of purity)

## Significance of Km in Pharmacology
- Drug design targets enzymes with known Km
- **Competitive inhibitor** Ki should be << Km of natural substrate
- Example: Statins have Ki << Km of HMG-CoA for HMG-CoA reductase

## Effect of pH on Enzymes
| Enzyme | Optimal pH |
|--------|-----------|
| Pepsin | 1.5-2.0 |
| Acid phosphatase | 4.5-5.0 |
| Most intracellular enzymes | 7.0-7.4 |
| Trypsin, chymotrypsin | 7.5-8.5 |
| Alkaline phosphatase | 9.0-10.0 |
| Arginase | 9.5-10.0 |

## Effect of Temperature
- Increases rate up to optimum (37C for most human enzymes)
- Above optimum → denaturation → loss of activity
- **Q10**: Rate doubles for every 10C rise (up to optimum)

> **Clinical Pearl**: Enzyme assays in clinical labs must be performed at standardized temperature (37C) and pH. Changes in these conditions can give falsely high or low results. This is why clinical chemistry analyzers are temperature-controlled.`,
        mnemonics: [
          { text: "SHD for catalytic triad", explanation: "Serine-195, Histidine-57, Aspartate-102: the catalytic triad of serine proteases like chymotrypsin and trypsin" },
          { text: "Ping-Pong = Transaminases", explanation: "AST and ALT follow ping-pong (double displacement) mechanism — amino group is transferred via PLP intermediate" }
        ],
        keyPoints: ["Catalytic triad: Ser-His-Asp (serine proteases)", "Ping-pong mechanism: transaminases (AST, ALT) via PLP", "kcat/Km = catalytic efficiency; diffusion-limited enzymes are 'kinetically perfect'", "Pepsin optimal pH ~2; ALP optimal pH ~10", "IU = 1 micromol/min; katal = 1 mol/sec (SI)", "Competitive inhibitor Ki << Km for effective drug design"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 7-8", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 8-9", edition: "9th" }] },
      { layer: 3, slug: "enzyme-classification-kinetics-clinical", title: "Enzyme Classification & Kinetics - Clinical", estimatedMinutes: 20,
        summary: "Clinical application of enzyme kinetics: therapeutic enzymes, enzyme replacement therapy, and enzymes as drug targets.",
        contentMd: `# Clinical Applications

## Enzymes as Drug Targets
| Drug | Target Enzyme | Disease |
|------|--------------|---------|
| Statins (atorvastatin) | HMG-CoA reductase | Hyperlipidemia |
| ACE inhibitors (enalapril) | Angiotensin Converting Enzyme | Hypertension |
| Allopurinol | Xanthine oxidase | Gout |
| Methotrexate | Dihydrofolate reductase | Cancer, RA |
| Aspirin | Cyclooxygenase | Pain, antiplatelet |
| MAO inhibitors | Monoamine oxidase | Depression |
| Captopril | ACE (Zn metalloprotease) | Heart failure |
| Sildenafil | PDE-5 | Erectile dysfunction |

## Enzyme Replacement Therapy (ERT)
- Replacement of deficient enzyme in inherited metabolic diseases
| Disease | Enzyme Given | Route |
|---------|-------------|-------|
| Gaucher disease | Imiglucerase (glucocerebrosidase) | IV infusion |
| Fabry disease | Agalsidase | IV infusion |
| Pompe disease | Alglucosidase alfa | IV infusion |
| MPS I (Hurler) | Laronidase | IV infusion |

## Therapeutic Enzymes
| Enzyme | Clinical Use |
|--------|-------------|
| Streptokinase | Thrombolysis (MI, PE) |
| Asparaginase | ALL (leukemia) treatment |
| Pancreatic lipase (Creon) | Exocrine pancreatic insufficiency |
| DNase (Dornase alfa) | Cystic fibrosis (breaks DNA in mucus) |
| Rasburicase (uricase) | Tumor lysis syndrome |

## Isoenzymes (Isozymes)
- Different molecular forms of same enzyme
- Catalyze same reaction but differ in: Km, Vmax, inhibitor sensitivity, electrophoretic mobility
- Examples: LDH (5 forms), CK (3 forms), ALP, Hexokinase vs Glucokinase

### Hexokinase vs Glucokinase
| Feature | Hexokinase | Glucokinase (Hexokinase IV) |
|---------|------------|----------------------------|
| Location | Most tissues | Liver, pancreatic beta cells |
| Km for glucose | Low (~0.1 mM) | High (~10 mM) |
| Vmax | Low | High |
| Inhibited by G6P | Yes | No |
| Role | Baseline glucose uptake | Glucose sensor, post-meal metabolism |

> **Clinical Pearl**: Glucokinase acts as the pancreatic beta-cell glucose sensor. Mutations in glucokinase cause MODY-2 (Maturity Onset Diabetes of the Young), a mild form of diabetes with slightly elevated fasting glucose. It is an important cause of gestational diabetes in some populations.`,
        mnemonics: [
          { text: "Hexokinase is Hungry (low Km), Glucokinase is Glutton (high Km, high capacity)", explanation: "Hexokinase has low Km (saturated at low glucose) and works in all tissues. Glucokinase has high Km (works only when glucose is high, like after meals) and is in liver/pancreas" }
        ],
        keyPoints: ["Statins inhibit HMG-CoA reductase (competitive inhibitors)", "ERT available for Gaucher, Fabry, Pompe, MPS I", "Streptokinase for thrombolysis; Asparaginase for ALL", "Hexokinase: low Km, all tissues; Glucokinase: high Km, liver/pancreas (glucose sensor)", "Glucokinase mutations → MODY-2"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 7, 9", edition: "31st" }, { book: "KD Tripathi Pharmacology", chapter: "Ch 44: Hypolipidemic Drugs", edition: "8th" }] },
      { layer: 4, slug: "enzyme-classification-kinetics-exam", title: "Enzyme Classification & Kinetics - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield one-liners and MCQ patterns on enzyme classification and kinetics.",
        contentMd: `# Exam High Yield

## One-Liners
- 6 enzyme classes: **OTHLI L** (Oxidoreductases, Transferases, Hydrolases, Lyases, Isomerases, Ligases)
- Kinases belong to class: **Transferases** (transfer phosphate group)
- Km = substrate concentration at: **half Vmax**
- Low Km means: **High affinity**
- Km is independent of: **Enzyme concentration**
- Vmax depends on: **Enzyme concentration [E]**
- Lineweaver-Burk Y-intercept: **1/Vmax**
- Lineweaver-Burk X-intercept: **-1/Km**
- Fastest known enzyme: **Carbonic anhydrase**
- Accepted model: **Induced fit (Koshland)**
- Synthetases use: **ATP** (Ligases)
- Synthases do NOT use: **ATP**
- Catalytic triad: **Ser-His-Asp**
- Pepsin optimal pH: **~2**
- ALP optimal pH: **~10**
- Glucokinase Km: **~10 mM** (high)
- Hexokinase Km: **~0.1 mM** (low)

## Common MCQ Traps
- "Enzyme that increases equilibrium" → **NONE — enzymes lower Ea, don't change equilibrium**
- "Km changes with enzyme concentration" → **FALSE — Km is intrinsic**
- "Vmax changes with substrate concentration" → **FALSE — Vmax depends on [E]**
- Kinases = Transferases, NOT Lyases
- Synthetase ≠ Synthase (ATP difference)`,
        mnemonics: [
          { text: "OTHLI L", explanation: "Oxidoreductases, Transferases, Hydrolases, Lyases, Isomerases, Ligases — the 6 IUB enzyme classes in order" }
        ],
        keyPoints: ["Km independent of [E]; Vmax depends on [E]", "Enzymes lower Ea, do NOT change equilibrium", "Lineweaver-Burk: Y = 1/Vmax, X = -1/Km", "Glucokinase (high Km) vs Hexokinase (low Km)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 7-8", edition: "31st" }] },
      { layer: 5, slug: "enzyme-classification-kinetics-recall", title: "Enzyme Classification & Kinetics - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test for enzyme classification and kinetics.",
        contentMd: `# Active Recall

**Q1:** Name the 6 IUB enzyme classes.
> Oxidoreductases, Transferases, Hydrolases, Lyases, Isomerases, Ligases

**Q2:** What does Km represent?
> Substrate concentration at which reaction velocity is half of Vmax; reflects enzyme-substrate affinity

**Q3:** Does Km change with enzyme concentration?
> No — Km is an intrinsic property of the enzyme-substrate pair

**Q4:** What is plotted on a Lineweaver-Burk plot?
> 1/v (Y-axis) vs 1/[S] (X-axis); Y-intercept = 1/Vmax, X-intercept = -1/Km

**Q5:** What is the difference between synthetase and synthase?
> Synthetases (ligases) use ATP to join molecules; Synthases do not require ATP

**Q6:** What is the accepted model for enzyme-substrate binding?
> Induced fit model (Koshland) — enzyme changes shape upon substrate binding

**Q7:** Which enzyme class do kinases belong to?
> Transferases (transfer phosphate group from ATP to substrate)

**Q8:** What is the Km of glucokinase vs hexokinase for glucose?
> Glucokinase: ~10 mM (low affinity); Hexokinase: ~0.1 mM (high affinity)

**Q9:** Do enzymes change the equilibrium of a reaction?
> No — they only lower the activation energy (Ea) and increase the rate

**Q10:** What is the catalytic triad in serine proteases?
> Serine-195, Histidine-57, Aspartate-102`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering classification, Km, Vmax, LB plot, and kinetics"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 7-8", edition: "31st" }] },
    ],
  },

  // ─── Topic 2: Enzyme Inhibition & Regulation ──────────────────
  {
    topicCode: "BI-MOD-02-TOP-02",
    layers: [
      { layer: 1, slug: "enzyme-inhibition-regulation-foundation", title: "Enzyme Inhibition & Regulation - Foundation", estimatedMinutes: 20,
        summary: "Enzyme activity is regulated by inhibitors (reversible and irreversible) and by allosteric modulation, covalent modification, and proteolytic activation. Understanding inhibition patterns is critical for pharmacology.",
        contentMd: `# Enzyme Inhibition & Regulation

## Reversible Inhibition

### 1. Competitive Inhibition
- Inhibitor **resembles substrate** → competes for active site
- **Km increases** (apparent lower affinity — needs more substrate to reach half-Vmax)
- **Vmax unchanged** (can be overcome by excess substrate)
- Lineweaver-Burk: Lines intersect on **Y-axis** (same 1/Vmax)
- Example: **Malonate** inhibits succinate dehydrogenase; **Statins** inhibit HMG-CoA reductase

### 2. Non-competitive Inhibition
- Inhibitor binds at a **different site** (not active site)
- Binds both free enzyme and ES complex equally
- **Km unchanged** (substrate binding unaffected)
- **Vmax decreased** (some enzyme molecules inactivated)
- Lineweaver-Burk: Lines intersect on **X-axis** (same -1/Km)
- Example: **Heavy metals** (Pb, Hg, As)

### 3. Uncompetitive Inhibition
- Inhibitor binds **only to ES complex** (not free enzyme)
- **Both Km and Vmax decrease** (proportionally)
- Lineweaver-Burk: **Parallel lines** (same slope)
- Example: **Lithium** inhibits IMPase (inositol monophosphatase)

### Summary Table

| Parameter | Competitive | Non-competitive | Uncompetitive |
|-----------|------------|-----------------|---------------|
| Km | Increased | Unchanged | Decreased |
| Vmax | Unchanged | Decreased | Decreased |
| LB intersection | Y-axis | X-axis | Parallel lines |
| Overcome by [S] | Yes | No | No |

## Irreversible Inhibition
- Inhibitor forms **covalent bond** with enzyme → permanent inactivation
- Cannot be overcome by excess substrate
- Examples:
  - **Aspirin**: Irreversibly acetylates COX
  - **Organophosphates**: Irreversibly inhibit acetylcholinesterase
  - **Cyanide**: Inhibits cytochrome c oxidase (Complex IV)
  - **Fluoride**: Inhibits enolase (glycolysis)

## Allosteric Regulation
- Binding of **effector molecule** at allosteric site changes enzyme conformation
- **Positive effectors** (activators): Stabilize R-state (active)
- **Negative effectors** (inhibitors): Stabilize T-state (inactive)
- **Sigmoidal kinetics** (not Michaelis-Menten)
- Example: **PFK-1**: activated by AMP, fructose-2,6-BP; inhibited by ATP, citrate

## Covalent Modification
- **Phosphorylation/Dephosphorylation**: Most common
  - Kinases add phosphate (using ATP)
  - Phosphatases remove phosphate
- Examples:
  - Glycogen phosphorylase: **Active when phosphorylated (a form)**
  - Glycogen synthase: **Active when dephosphorylated (a form)**
  - Pyruvate dehydrogenase: **Active when dephosphorylated**

## Zymogen (Proenzyme) Activation
- Inactive precursor activated by **proteolytic cleavage** (irreversible)
- Examples: Pepsinogen → Pepsin, Trypsinogen → Trypsin, Prothrombin → Thrombin

> **Clinical Pearl**: Organophosphate poisoning (common in Indian agricultural settings — insecticide ingestion) causes irreversible acetylcholinesterase inhibition. Treatment: Atropine (muscarinic blocker) + Pralidoxime/2-PAM (reactivates enzyme if given early before aging).`,
        mnemonics: [
          { text: "CK VU NP for inhibition patterns", explanation: "Competitive: Km Up, Vmax same. Non-competitive: Vmax Down, Km same. Uncompetitive: Parallel lines on LB plot, both Km and Vmax decrease" },
          { text: "GPS for glycogen enzymes", explanation: "Glycogen Phosphorylase: active when Phosphorylated. Glycogen Synthase: active when dephosphorylated (opposite pattern)" }
        ],
        keyPoints: ["Competitive: Km up, Vmax same, overcome by excess [S]; LB intersect Y-axis", "Non-competitive: Km same, Vmax down; LB intersect X-axis", "Uncompetitive: both Km and Vmax down; LB parallel lines", "Aspirin irreversibly inhibits COX; organophosphates inhibit AChE", "PFK-1: key allosteric enzyme in glycolysis (activated by AMP, F-2,6-BP)", "Glycogen phosphorylase active when phosphorylated; glycogen synthase active when dephosphorylated"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 8-9: Enzymes", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 8-10", edition: "9th" }] },
      { layer: 2, slug: "enzyme-inhibition-regulation-mechanism", title: "Enzyme Inhibition & Regulation - Mechanism", estimatedMinutes: 30,
        summary: "Detailed allosteric models (MWC and KNF), feedback inhibition cascades, signal transduction via phosphorylation, and enzyme induction/repression.",
        contentMd: `# Detailed Mechanisms

## Allosteric Models

### MWC (Monod-Wyman-Changeux) — Concerted Model
- Enzyme exists in two states: T (tense, inactive) and R (relaxed, active)
- **All subunits switch simultaneously** (concerted transition)
- Activators stabilize R-state; Inhibitors stabilize T-state
- Predicts **sigmoidal kinetics** well

### KNF (Koshland-Nemethy-Filmer) — Sequential Model
- Substrate binding induces conformational change in **one subunit at a time**
- Each subunit can be in different state → **sequential transition**
- Better explains **negative cooperativity**

## Feedback Inhibition
- End product of a pathway **inhibits the first committed step**
- Prevents overproduction and conserves resources
- Examples:
  - **Cholesterol** inhibits HMG-CoA reductase (cholesterol synthesis)
  - **CTP** inhibits ATCase (pyrimidine synthesis)
  - **Heme** inhibits ALA synthase (heme synthesis)
  - **Isoleucine** inhibits threonine dehydratase (Ile synthesis in bacteria)

## Phosphorylation Cascades

### Glucagon/Epinephrine Signaling
1. Hormone → Receptor → G-protein → **Adenylyl cyclase** → cAMP
2. cAMP → **Protein Kinase A (PKA)** activation
3. PKA phosphorylates:
   - **Phosphorylase kinase** → activates it
   - Phosphorylase kinase phosphorylates **glycogen phosphorylase** (b → a) → glycogenolysis ON
   - PKA also phosphorylates **glycogen synthase** (a → b) → glycogen synthesis OFF
4. Net effect: **Glycogen breakdown**, glucose release

### Insulin Signaling
1. Insulin → Receptor tyrosine kinase → IRS → PI3K → Akt
2. Akt activates **protein phosphatase 1 (PP1)**
3. PP1 dephosphorylates:
   - Glycogen synthase (b → a) → glycogen synthesis ON
   - Glycogen phosphorylase (a → b) → glycogenolysis OFF
4. Net effect: **Glycogen synthesis**, glucose uptake

## Enzyme Induction and Repression
- **Induction**: Increased enzyme synthesis (transcriptional level)
  - Example: CYP450 enzymes induced by rifampicin, phenobarbital, alcohol
  - ALA synthase induced by drugs/chemicals (porphyria attacks)
- **Repression**: Decreased enzyme synthesis
  - Example: Cholesterol represses HMG-CoA reductase transcription

## Protein Degradation
- **Ubiquitin-proteasome pathway**: Marks proteins with ubiquitin for destruction by 26S proteasome
- **Lysosomal degradation**: Autophagy of organelles and long-lived proteins
- **Half-life**: Time for 50% degradation; rate-limiting enzymes often have short half-lives

> **Clinical Pearl**: CYP450 enzyme induction by rifampicin (widely used for TB in India) is a major cause of drug interactions. It reduces efficacy of oral contraceptives, antiretrovirals, and warfarin — critical in managing HIV-TB coinfection in Indian patients.`,
        mnemonics: [
          { text: "Glucagon = Glycogenolysis = cAMP = PKA = Phosphorylation", explanation: "Glucagon activates adenylyl cyclase → cAMP → PKA → phosphorylates glycogen phosphorylase (ON) and glycogen synthase (OFF)" },
          { text: "Insulin = I'll Dephosphorylate", explanation: "Insulin activates PP1 → dephosphorylation → glycogen synthase ON, glycogen phosphorylase OFF" }
        ],
        keyPoints: ["MWC: concerted (all subunits switch together); KNF: sequential (one at a time)", "Feedback inhibition: end product inhibits first committed step", "Glucagon/Epi → cAMP → PKA → phosphorylation cascade → glycogenolysis", "Insulin → PP1 → dephosphorylation → glycogen synthesis", "Rifampicin induces CYP450 → major drug interactions in TB treatment"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 9-11", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 10", edition: "9th" }] },
      { layer: 3, slug: "enzyme-inhibition-regulation-clinical", title: "Enzyme Inhibition & Regulation - Clinical", estimatedMinutes: 20,
        summary: "Clinical applications of enzyme inhibition: drug mechanisms, poisoning, and therapeutic targeting. Organophosphate and heavy metal poisoning in Indian context.",
        contentMd: `# Clinical Applications

## Organophosphate Poisoning (India-specific)
- Common in India: Agricultural pesticides, suicide attempts
- **Mechanism**: Irreversible AChE inhibition → ACh accumulation
- **Cholinergic crisis**: SLUDGE + BBB (Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis + Bradycardia, Bronchospasm, Bronchorrhea)
- **Treatment**:
  1. Decontamination (remove clothes, wash skin)
  2. **Atropine** (muscarinic receptor blocker) — titrate to dry secretions
  3. **Pralidoxime (2-PAM)**: Reactivates AChE (must give within 24-48h before aging)
  4. Diazepam for seizures

## Heavy Metal Poisoning
| Metal | Enzyme Inhibited | Clinical Features | Antidote |
|-------|-----------------|-------------------|----------|
| Lead | ALA dehydratase, Ferrochelatase | Abdominal colic, wrist drop, basophilic stippling, lead lines | EDTA, Succimer (DMSA) |
| Mercury | Sulfhydryl enzymes | Tremor, gingivitis, renal damage | DMSA, BAL |
| Arsenic | Pyruvate dehydrogenase (lipoamide) | Rice-water diarrhea, garlic breath, Mees lines | BAL, DMSA |

## Clinically Important Enzyme Inhibitors as Drugs
| Drug | Enzyme Target | Inhibition Type | Clinical Use |
|------|--------------|-----------------|-------------|
| Methotrexate | DHFR | Competitive | Cancer, RA |
| Statins | HMG-CoA reductase | Competitive | Hyperlipidemia |
| Allopurinol | Xanthine oxidase | Competitive (analog) | Gout |
| Captopril | ACE | Competitive | Hypertension, HF |
| Aspirin | COX-1/2 | Irreversible | Antiplatelet, anti-inflammatory |
| Disulfiram | Aldehyde dehydrogenase | Irreversible | Alcohol deaaddiction |
| Sildenafil | PDE-5 | Competitive | Erectile dysfunction |
| Neostigmine | AChE | Reversible | Myasthenia gravis |

## Suicide Inhibitors (Mechanism-Based)
- Enzyme converts inhibitor to reactive form that inactivates it
- Examples:
  - **Allopurinol** → alloxanthine (inactivates xanthine oxidase)
  - **5-FU** → FdUMP (inactivates thymidylate synthase)
  - **Clavulanic acid** (inactivates beta-lactamase — combined with amoxicillin)

> **Clinical Pearl**: Lead poisoning is still significant in India due to Ayurvedic medicines containing lead (Sindoor), kohl/surma around eyes in children, and occupational exposure in battery workers. Screening involves blood lead level measurement, and basophilic stippling on peripheral smear is a classic finding.`,
        mnemonics: [
          { text: "SLUDGE BBB for organophosphate poisoning", explanation: "Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis + Bradycardia, Bronchospasm, Bronchorrhea" },
          { text: "Lead = ALA dehydratase + Ferrochelatase", explanation: "Lead inhibits two enzymes in heme synthesis: ALA dehydratase (early) and ferrochelatase (last step), causing accumulation of ALA and protoporphyrin" }
        ],
        keyPoints: ["Organophosphate: irreversible AChE inhibitor; treat with atropine + pralidoxime", "Lead inhibits ALA dehydratase and ferrochelatase (heme synthesis)", "Arsenic inhibits pyruvate dehydrogenase (binds lipoamide)", "Statins and methotrexate are competitive inhibitors", "Aspirin and organophosphates are irreversible inhibitors", "Lead poisoning in India: Ayurvedic medicines, surma, battery workers"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 8-9", edition: "31st" }, { book: "KD Tripathi Pharmacology", chapter: "Ch 7: Anticholinesterases", edition: "8th" }] },
      { layer: 4, slug: "enzyme-inhibition-regulation-exam", title: "Enzyme Inhibition & Regulation - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield comparison tables and pattern recognition for enzyme inhibition questions.",
        contentMd: `# Exam High Yield

## One-Liners
- Competitive inhibition: **Km increases, Vmax same**
- Non-competitive inhibition: **Vmax decreases, Km same**
- Uncompetitive inhibition: **Both decrease, parallel lines on LB**
- Competitive inhibition overcome by: **Excess substrate**
- Aspirin inhibits: **COX (irreversible)**
- Organophosphates inhibit: **AChE (irreversible)**
- Lead inhibits: **ALA dehydratase + Ferrochelatase**
- Arsenic inhibits: **Pyruvate dehydrogenase**
- Cyanide inhibits: **Complex IV (cytochrome c oxidase)**
- Fluoride inhibits: **Enolase** (glycolysis)
- Glycogen phosphorylase active form: **Phosphorylated (a)**
- Glycogen synthase active form: **Dephosphorylated (a)**
- Glucagon → cAMP → **PKA**
- Insulin → **PP1** (dephosphorylation)

## Lineweaver-Burk Pattern Recognition
- Lines cross on Y-axis → **Competitive** (same Vmax)
- Lines cross on X-axis → **Non-competitive** (same Km)
- Parallel lines → **Uncompetitive**

## Previous Year Themes
- Lineweaver-Burk plot interpretation (identify inhibition type)
- Drug-enzyme pairs
- Organophosphate poisoning management
- Glycogen enzyme phosphorylation states
- Allosteric regulators of PFK-1`,
        mnemonics: [
          { text: "CY-NX-UP for LB plot", explanation: "Competitive: cross Y-axis; Non-competitive: cross X-axis; Uncompetitive: Parallel lines" }
        ],
        keyPoints: ["Competitive: Km up, Vmax same, LB cross Y-axis", "Non-competitive: Km same, Vmax down, LB cross X-axis", "Uncompetitive: both down, LB parallel", "Glycogen phosphorylase: phosphorylated = active; synthase: dephosphorylated = active"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 8-9", edition: "31st" }] },
      { layer: 5, slug: "enzyme-inhibition-regulation-recall", title: "Enzyme Inhibition & Regulation - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test for enzyme inhibition and regulation.",
        contentMd: `# Active Recall

**Q1:** In competitive inhibition, what happens to Km and Vmax?
> Km increases (apparent lower affinity); Vmax remains unchanged

**Q2:** Where do lines intersect on Lineweaver-Burk for non-competitive inhibition?
> On the X-axis (same -1/Km, different 1/Vmax)

**Q3:** What does aspirin do to COX?
> Irreversibly inhibits by acetylation of serine residue

**Q4:** What enzymes does lead inhibit?
> ALA dehydratase and ferrochelatase (heme synthesis pathway)

**Q5:** Is glycogen phosphorylase active when phosphorylated or dephosphorylated?
> Phosphorylated (phosphorylase a = active form)

**Q6:** What second messenger does glucagon produce?
> cAMP (via adenylyl cyclase activation)

**Q7:** What is the treatment for organophosphate poisoning?
> Atropine (muscarinic block) + Pralidoxime/2-PAM (AChE reactivation)

**Q8:** What type of inhibitor are statins?
> Competitive inhibitors of HMG-CoA reductase

**Q9:** What is feedback inhibition?
> End product of a metabolic pathway inhibits the first committed step

**Q10:** What does arsenic inhibit?
> Pyruvate dehydrogenase (binds to lipoamide/dihydrolipoyl moiety)`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering all inhibition types, poisons, drugs, and regulation"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 8-9", edition: "31st" }] },
    ],
  },

  // ─── Topic 3: Coenzymes & Vitamins ────────────────────────────
  {
    topicCode: "BI-MOD-02-TOP-03",
    layers: [
      { layer: 1, slug: "coenzymes-vitamins-foundation", title: "Coenzymes & Vitamins - Foundation", estimatedMinutes: 20,
        summary: "Coenzymes are organic molecules (often derived from B-vitamins) that assist enzymes in catalysis. Understanding which vitamin forms which coenzyme is fundamental to biochemistry.",
        contentMd: `# Coenzymes & Vitamins

## Definitions
- **Apoenzyme**: Protein part (inactive alone)
- **Cofactor**: Non-protein part needed for activity
  - **Metal ions**: Zn2+, Mg2+, Fe2+, Cu2+, Mn2+
  - **Coenzymes**: Organic molecules (often from vitamins)
- **Holoenzyme** = Apoenzyme + Cofactor (fully active)
- **Prosthetic group**: Tightly bound coenzyme (e.g., FAD in succinate dehydrogenase)

## B-Vitamins and Their Coenzyme Forms

| Vitamin | Coenzyme Form | Function | Deficiency |
|---------|--------------|----------|------------|
| B1 (Thiamine) | **TPP** (Thiamine Pyrophosphate) | Oxidative decarboxylation | Beriberi, Wernicke-Korsakoff |
| B2 (Riboflavin) | **FAD, FMN** | Electron carriers (redox) | Cheilosis, glossitis |
| B3 (Niacin) | **NAD+, NADP+** | Electron carriers (redox) | Pellagra (3 Ds) |
| B5 (Pantothenic acid) | **Coenzyme A (CoA)** | Acyl group transfer | Burning feet syndrome |
| B6 (Pyridoxine) | **PLP** (Pyridoxal Phosphate) | Transamination, decarboxylation | Peripheral neuropathy, sideroblastic anemia |
| B7 (Biotin) | **Biocytin** | Carboxylation reactions | Dermatitis, alopecia |
| B9 (Folic acid) | **THF** (Tetrahydrofolate) | 1-carbon transfer | Megaloblastic anemia, NTDs |
| B12 (Cobalamin) | **Methylcobalamin, Adenosylcobalamin** | Methylation, isomerization | Megaloblastic anemia, neuropathy |

## Key Coenzymes in Detail

### NAD+ / NADP+ (from Niacin / B3)
- **NAD+**: Catabolic pathways (glycolysis, TCA, beta-oxidation) — accepts electrons
- **NADPH**: Anabolic pathways (fatty acid synthesis, cholesterol synthesis, glutathione reduction) — donates electrons
- Tryptophan can be converted to niacin (60 mg Trp = 1 mg niacin)

### FAD / FMN (from Riboflavin / B2)
- **FAD**: Succinate dehydrogenase (TCA), acyl-CoA dehydrogenase (beta-oxidation)
- **FMN**: Complex I of ETC (NADH dehydrogenase)
- Tightly bound prosthetic groups

### Coenzyme A (from Pantothenic acid / B5)
- Contains **thiol (-SH) group** that forms thioester bonds
- **Acetyl-CoA**: Central metabolic intermediate (TCA entry, FA synthesis, ketogenesis)
- Other acyl-CoA forms: Succinyl-CoA, Malonyl-CoA, etc.

### TPP (from Thiamine / B1)
- Required for **oxidative decarboxylation** reactions:
  - Pyruvate dehydrogenase (pyruvate → acetyl-CoA)
  - Alpha-ketoglutarate dehydrogenase (TCA cycle)
  - Branched-chain alpha-ketoacid dehydrogenase (BCAA metabolism)
- Also: **Transketolase** (HMP shunt)

### PLP (from Pyridoxine / B6)
- **Transamination**: ALT, AST (most important reaction)
- **Decarboxylation**: DOPA → Dopamine, Histidine → Histamine
- **Glycogen phosphorylase**: Uses PLP as prosthetic group
- Required for heme synthesis (ALA synthase uses PLP)

> **Clinical Pearl**: Isoniazid (INH), a first-line anti-TB drug used extensively in India, inhibits PLP formation by binding pyridoxine. This causes peripheral neuropathy. Pyridoxine (B6) supplementation is mandatory with INH therapy.`,
        mnemonics: [
          { text: "Tender Loving Care For Nancy = TLC For Nancy", explanation: "TPP (B1-Thiamine), Lipoic acid, CoA (B5-Pantothenate), FAD (B2-Riboflavin), NAD (B3-Niacin) — cofactors of pyruvate dehydrogenase complex" },
          { text: "The 3 Ds of Pellagra", explanation: "Dermatitis, Diarrhea, Dementia (+ Death if untreated) — niacin (B3) deficiency" }
        ],
        keyPoints: ["Holoenzyme = Apoenzyme + Cofactor", "NAD+: catabolic (accepts e-); NADPH: anabolic (donates e-)", "TPP (B1): oxidative decarboxylation (PDH, alpha-KGDH, transketolase)", "PLP (B6): transamination, decarboxylation, heme synthesis", "CoA (B5): acyl group transfer via thioester bonds", "INH causes B6 deficiency → peripheral neuropathy (supplement B6 in TB treatment)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 44: Micronutrients - Vitamins", edition: "31st" }, { book: "DM Vasudevan", chapter: "Ch 33: Vitamins", edition: "9th" }] },
      { layer: 2, slug: "coenzymes-vitamins-mechanism", title: "Coenzymes & Vitamins - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of coenzyme action: TPP in decarboxylation, PLP in transamination, NAD/FAD in redox, biotin in carboxylation, THF and B12 in one-carbon metabolism.",
        contentMd: `# Coenzyme Mechanisms

## TPP in Oxidative Decarboxylation
- **Pyruvate Dehydrogenase Complex (PDC)**: Multi-enzyme complex
- 5 coenzymes needed: **TPP, Lipoic acid, CoA, FAD, NAD+**
- Reaction: Pyruvate + CoA + NAD+ → Acetyl-CoA + CO2 + NADH
- Same 5 coenzymes used by alpha-KG dehydrogenase and branched-chain alpha-KA dehydrogenase

## PLP Mechanism in Transamination
1. PLP binds amino acid → Schiff base (aldimine)
2. Amino group transferred to PLP → PMP (pyridoxamine phosphate) + alpha-keto acid
3. PMP transfers amino group to a new alpha-keto acid → new amino acid
4. This is the **Ping-Pong mechanism** of transaminases

## NAD+ in Redox Reactions
- Substrate oxidized → NAD+ accepts 2 electrons + 1 H+ → **NADH + H+**
- NADH donates electrons to ETC at **Complex I** → generates ~2.5 ATP
- NAD+ is a **diffusible coenzyme** (not prosthetic group)

## FAD in Redox Reactions
- Accepts 2 electrons + 2 H+ → **FADH2**
- FADH2 enters ETC at **Complex II** (or via ETF for beta-oxidation) → generates ~1.5 ATP
- FAD is typically a **prosthetic group** (tightly bound)

## Biotin in Carboxylation
- Biotin carries **CO2** (activated as carboxybiotin)
- ATP-dependent carboxylation reactions:
  - **Pyruvate carboxylase**: Pyruvate → Oxaloacetate (gluconeogenesis)
  - **Acetyl-CoA carboxylase**: Acetyl-CoA → Malonyl-CoA (FA synthesis)
  - **Propionyl-CoA carboxylase**: Propionyl-CoA → Methylmalonyl-CoA
- **Avidin** (in raw egg whites) binds biotin tightly → can cause biotin deficiency

## THF in One-Carbon Transfer
- Carries one-carbon units at various oxidation states:
  - **N5-methyl-THF**: Most abundant circulating form of folate
  - **N5,N10-methylene-THF**: Required for dTMP synthesis (thymidylate synthase)
  - **N10-formyl-THF**: Purine ring synthesis (C-2 and C-8)

## Folate Trap (Methyl Trap Hypothesis)
- B12 is needed to convert N5-methyl-THF → THF (via methionine synthase)
- In **B12 deficiency**: Folate trapped as N5-methyl-THF → functional folate deficiency
- This is why both B12 and folate deficiency cause megaloblastic anemia
- B12 deficiency also causes **neurological symptoms** (subacute combined degeneration) — folate does NOT

## Lipoic Acid
- Involved in oxidative decarboxylation (PDH, alpha-KGDH)
- Not a vitamin (synthesized in body)
- Contains disulfide bond (-S-S-) → accepts acyl groups
- **Arsenic** binds to dihydrolipoyl moiety → inhibits PDH

> **Clinical Pearl**: In India, megaloblastic anemia from B12/folate deficiency is extremely common, especially in vegetarians (B12) and pregnant women (folate). Giving folate alone in B12 deficiency can mask anemia but allow neurological damage to progress — always check B12 levels before treating with folate alone.`,
        mnemonics: [
          { text: "Biotin = B7 = CO2 Carrier = Carboxylation", explanation: "Biotin carries CO2 in carboxylation reactions: Pyruvate carboxylase, Acetyl-CoA carboxylase, Propionyl-CoA carboxylase" },
          { text: "Methyl TRAP: B12 deficiency traps folate", explanation: "Without B12, N5-methyl-THF cannot be converted back to THF → functional folate deficiency → megaloblastic anemia + neurological damage" }
        ],
        keyPoints: ["PDH needs 5 coenzymes: TPP, Lipoic acid, CoA, FAD, NAD+ (TLC For Nancy)", "PLP: transamination via ping-pong mechanism (Schiff base intermediate)", "NADH → Complex I (2.5 ATP); FADH2 → Complex II (1.5 ATP)", "Biotin: CO2 carrier for carboxylation (pyruvate carboxylase, ACC)", "Folate trap: B12 deficiency traps folate as N5-methyl-THF", "B12 deficiency: megaloblastic anemia + neuro damage; Folate: anemia only"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 44, 10", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 17, 24", edition: "9th" }] },
      { layer: 3, slug: "coenzymes-vitamins-clinical", title: "Coenzymes & Vitamins - Clinical", estimatedMinutes: 20,
        summary: "Clinical vitamin deficiencies: beriberi, pellagra, megaloblastic anemia, Wernicke-Korsakoff, and drug-vitamin interactions relevant to Indian practice.",
        contentMd: `# Clinical Applications

## B1 (Thiamine) Deficiency
- **Beriberi**:
  - **Wet beriberi**: Cardiac failure (dilated cardiomyopathy, edema)
  - **Dry beriberi**: Peripheral neuropathy
- **Wernicke encephalopathy**: Confusion, ataxia, ophthalmoplegia (classic triad)
- **Korsakoff psychosis**: Confabulation, memory loss (often follows Wernicke)
- **Cause**: Chronic alcoholism (most common in India), polished rice diet
- **Diagnosis**: Erythrocyte transketolase activity (reduced)

## B3 (Niacin) Deficiency — Pellagra
- **3 Ds**: Dermatitis (photosensitive, Casal necklace), Diarrhea, Dementia
- 4th D: Death (if untreated)
- **Causes**: Maize-based diet (niacin in bound form = niacytin), Hartnup disease (tryptophan absorption defect), carcinoid syndrome (tryptophan diverted to serotonin)
- **Indian context**: Still seen in rural areas dependent on jowar (sorghum)/maize diet

## B6 (Pyridoxine) Deficiency
- Peripheral neuropathy, sideroblastic anemia (impaired heme synthesis)
- Convulsions in infants (impaired GABA synthesis — glutamate decarboxylase needs PLP)
- **Drug-induced**: INH (isoniazid), oral contraceptives, D-penicillamine
- **Sideroblastic anemia**: Ring sideroblasts (iron-laden mitochondria around nucleus)

## B9 (Folate) and B12 (Cobalamin) Deficiency

| Feature | Folate Deficiency | B12 Deficiency |
|---------|------------------|----------------|
| Anemia | Megaloblastic | Megaloblastic |
| Neurological | Absent | Present (SACD) |
| Serum level | Low folate | Low B12 |
| Methylmalonic acid | Normal | Elevated |
| Homocysteine | Elevated | Elevated |
| Causes | Poor diet, pregnancy, methotrexate | Pernicious anemia, veganism, fish tapeworm |

- **SACD** (Subacute Combined Degeneration): Demyelination of dorsal and lateral columns of spinal cord
- **Indian context**: B12 deficiency very common in vegetarians (B12 only in animal foods)
- **Neural tube defects**: Folate supplementation (400 mcg/day) before conception prevents NTDs

## Biotin Deficiency
- Rare; caused by **raw egg white** consumption (avidin binds biotin)
- Features: Dermatitis, alopecia, lactic acidosis (impaired pyruvate carboxylase)
- Also caused by prolonged antibiotic use (kills gut bacteria that produce biotin)

> **Clinical Pearl**: In India, strict vegetarians and vegans are at very high risk for B12 deficiency. Up to 70-80% of Indian vegetarians may have subclinical B12 deficiency. Methylmalonic acid (MMA) is the most specific test — it is elevated only in B12 deficiency, not folate deficiency.`,
        mnemonics: [
          { text: "WET = heart, DRY = nerve (Beriberi)", explanation: "Wet beriberi: cardiac failure with edema; Dry beriberi: peripheral neuropathy without edema" },
          { text: "Casal's necklace = pellagra = niacin (B3)", explanation: "The photosensitive dermatitis of pellagra around the neck resembles a necklace — Casal's necklace is pathognomonic" }
        ],
        keyPoints: ["Wernicke: confusion, ataxia, ophthalmoplegia (B1 deficiency in alcoholics)", "Pellagra: 3 Ds (dermatitis, diarrhea, dementia) — B3/niacin deficiency", "INH causes B6 deficiency → always supplement pyridoxine with TB treatment", "B12 deficiency: megaloblastic anemia + SACD (neurological); very common in Indian vegetarians", "MMA elevated in B12 deficiency (not folate) — most specific test", "Folate supplementation before conception prevents neural tube defects"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 44", edition: "31st" }, { book: "DM Vasudevan", chapter: "Ch 33", edition: "9th" }] },
      { layer: 4, slug: "coenzymes-vitamins-exam", title: "Coenzymes & Vitamins - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield vitamin-coenzyme pairs and clinical correlations for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- TPP (B1) needed for: **PDH, alpha-KGDH, transketolase, BCKA-DH**
- NAD+/NADP+ from: **Niacin (B3)**
- FAD/FMN from: **Riboflavin (B2)**
- CoA from: **Pantothenic acid (B5)**
- PLP from: **Pyridoxine (B6)**
- THF from: **Folic acid (B9)**
- Biotin carries: **CO2**
- Avidin (raw egg white) binds: **Biotin**
- Most common vitamin deficiency in Indian vegetarians: **B12**
- Most specific test for B12 deficiency: **Methylmalonic acid (elevated)**
- Wernicke triad: **Confusion + Ataxia + Ophthalmoplegia**
- Pellagra 3 Ds: **Dermatitis + Diarrhea + Dementia**
- Hartnup disease: **Tryptophan malabsorption → pellagra-like**
- INH-induced deficiency: **B6 (pyridoxine)**
- Drug that causes folate deficiency: **Methotrexate**

## PDH Complex Coenzymes
**TLC For Nancy** = TPP, Lipoic acid, CoA, FAD, NAD+

## Vitamin-Deficiency Quick Pairs
| Deficiency Disease | Vitamin |
|-------------------|---------|
| Beriberi | B1 |
| Pellagra | B3 |
| Scurvy | C |
| Rickets | D |
| Megaloblastic anemia | B9 or B12 |
| Sideroblastic anemia | B6 |
| Wernicke-Korsakoff | B1 |

## Pattern Recognition
- Q: "Alcoholic with confusion, ataxia" → **Wernicke (B1)**
- Q: "Photosensitive dermatitis + diarrhea + dementia" → **Pellagra (B3)**
- Q: "Peripheral neuropathy on INH therapy" → **B6 deficiency**
- Q: "Vegetarian with macrocytic anemia + paresthesia" → **B12 deficiency**`,
        mnemonics: [
          { text: "TLC For Nancy", explanation: "5 coenzymes of PDH complex: TPP (B1), Lipoic acid, CoA (B5), FAD (B2), NAD+ (B3)" }
        ],
        keyPoints: ["TLC For Nancy = PDH coenzymes", "B12 most deficient in Indian vegetarians; MMA most specific test", "INH → B6 deficiency", "Wernicke = B1; Pellagra = B3"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 44", edition: "31st" }] },
      { layer: 5, slug: "coenzymes-vitamins-recall", title: "Coenzymes & Vitamins - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test on coenzymes and vitamin deficiencies.",
        contentMd: `# Active Recall

**Q1:** What coenzyme is derived from thiamine (B1)?
> TPP (Thiamine Pyrophosphate)

**Q2:** Name the 5 coenzymes of the PDH complex.
> TPP, Lipoic acid, CoA, FAD, NAD+ (TLC For Nancy)

**Q3:** What coenzyme does PLP form and from which vitamin?
> PLP (Pyridoxal Phosphate) from Pyridoxine (B6)

**Q4:** What is the folate trap?
> B12 deficiency traps folate as N5-methyl-THF → functional folate deficiency → megaloblastic anemia

**Q5:** Name the classic triad of Wernicke encephalopathy.
> Confusion, Ataxia, Ophthalmoplegia (thiamine/B1 deficiency)

**Q6:** What are the 3 Ds of pellagra?
> Dermatitis, Diarrhea, Dementia (niacin/B3 deficiency)

**Q7:** Why must B6 be supplemented with INH?
> INH inhibits PLP formation → can cause peripheral neuropathy and sideroblastic anemia

**Q8:** How do you differentiate B12 from folate deficiency?
> B12: elevated methylmalonic acid + neurological symptoms (SACD). Folate: MMA normal, no neuro symptoms

**Q9:** What does biotin carry?
> CO2 (for carboxylation reactions: pyruvate carboxylase, acetyl-CoA carboxylase)

**Q10:** What protein in raw egg whites causes biotin deficiency?
> Avidin (binds biotin with extremely high affinity)`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering coenzyme forms, PDH complex, deficiency diseases, and clinical correlations"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 44", edition: "31st" }] },
    ],
  },

  // ─── Topic 4: Clinical Enzymology ─────────────────────────────
  {
    topicCode: "BI-MOD-02-TOP-04",
    layers: [
      { layer: 1, slug: "clinical-enzymology-foundation", title: "Clinical Enzymology - Foundation", estimatedMinutes: 20,
        summary: "Serum enzymes are used as diagnostic markers for tissue damage. Understanding organ-specific isoenzymes like CK-MB, LDH, AST/ALT, ALP, amylase, and troponin is essential for clinical diagnosis.",
        contentMd: `# Clinical Enzymology

## Principles
- Enzymes normally present **inside cells** at high concentrations
- When cells are damaged → enzymes **leak into blood** → measurable increase
- The **pattern and degree** of elevation helps identify the damaged organ
- **Isoenzymes**: Different forms of same enzyme in different tissues → tissue-specific markers

## Cardiac Markers

### Troponin (Gold Standard)
- **Troponin I and T**: Most specific markers for myocardial injury
- Rise: **3-6 hours** after MI
- Peak: **12-24 hours**
- Duration: **7-14 days** (Troponin I: 7-10 days; Troponin T: 10-14 days)
- Not an enzyme (structural protein) but most important cardiac biomarker

### CK (Creatine Kinase) Isoenzymes
| Isoenzyme | Subunits | Tissue | Clinical Use |
|-----------|----------|--------|-------------|
| CK-MM | MM | Skeletal muscle | Myopathies, rhabdomyolysis |
| CK-MB | MB | Heart (also skeletal) | Myocardial infarction |
| CK-BB | BB | Brain, smooth muscle | Rarely used clinically |

- **CK-MB**: Rise 4-8h, Peak 12-24h, Normal by 48-72h
- Useful for detecting **reinfarction** (normalizes faster than troponin)

### LDH (Lactate Dehydrogenase) Isoenzymes
| Isoenzyme | Subunits | Tissue |
|-----------|----------|--------|
| LDH-1 | HHHH | Heart, RBCs |
| LDH-2 | HHHM | RBCs, Heart |
| LDH-3 | HHMM | Lung, Lymphocytes |
| LDH-4 | HMMM | Liver, Skeletal muscle |
| LDH-5 | MMMM | Liver, Skeletal muscle |

- **Normal**: LDH-2 > LDH-1
- **MI/Hemolysis**: LDH-1 > LDH-2 (**Flipped LDH pattern**)
- Late marker: rises 12-24h, peaks 48-72h, lasts 7-10 days

## Liver Enzymes

### Transaminases (Aminotransferases)
- **ALT (SGPT)**: More specific for liver (cytoplasmic, mainly liver)
- **AST (SGOT)**: Less specific (found in liver, heart, muscle, RBCs)
  - Mitochondrial + cytoplasmic forms
- **AST/ALT ratio (De Ritis ratio)**:
  - Ratio < 1: Viral hepatitis (ALT > AST)
  - Ratio > 2: Alcoholic hepatitis (AST > ALT, due to mitochondrial damage + B6 depletion)

### ALP (Alkaline Phosphatase)
- High in: **Bone (osteoblasts), Liver (biliary), Placenta, Intestine**
- Raised in: Obstructive jaundice, bone disease (Paget's), pregnancy (3rd trimester)
- **Bone ALP**: Heat labile
- **Placental ALP (Regan isoenzyme)**: Heat stable; tumor marker

### GGT (Gamma-Glutamyl Transferase)
- Most sensitive marker for **alcoholic liver disease**
- Also elevated in obstructive jaundice
- Used to confirm that raised ALP is hepatic (not bone) origin

## Pancreatic Enzymes
- **Amylase**: Rises within 2-12h of acute pancreatitis, normalizes in 3-5 days
- **Lipase**: More specific, stays elevated longer (8-14 days)
- Amylase also elevated in: Salivary gland disease, ectopic pregnancy, DKA

> **Clinical Pearl**: In Indian emergency settings, serum amylase is often the first test ordered for acute pancreatitis (common cause: gallstones and alcohol). However, serum lipase is more specific and stays elevated longer — ideal when patients present late.`,
        mnemonics: [
          { text: "ALT = Liver-specific (L for Liver)", explanation: "ALT is more specific for liver damage than AST. Remember: ALT = Liver (L)" },
          { text: "Flipped LDH = MI (LDH1 > LDH2)", explanation: "Normally LDH2 > LDH1. In MI (and hemolysis), LDH1 becomes greater than LDH2 — the 'flipped' pattern" }
        ],
        keyPoints: ["Troponin I/T: gold standard for MI (rise 3-6h, last 7-14 days)", "CK-MB: useful for reinfarction (normalizes 48-72h)", "ALT more liver-specific than AST; AST/ALT > 2 = alcoholic hepatitis", "ALP raised in obstructive jaundice and bone disease", "GGT: most sensitive for alcoholic liver disease", "Lipase more specific than amylase for pancreatitis"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 7: Clinical Enzymology", edition: "31st" }, { book: "DM Vasudevan", chapter: "Ch 5: Enzymes", edition: "9th" }] },
      { layer: 2, slug: "clinical-enzymology-mechanism", title: "Clinical Enzymology - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of enzyme release, half-lives, diagnostic windows, and multi-marker strategies for MI, liver disease, and bone disorders.",
        contentMd: `# Clinical Enzymology: Detailed Mechanisms

## Enzyme Release Patterns

### Factors Affecting Serum Enzyme Levels
1. **Rate of release** (severity of damage)
2. **Intracellular concentration** (higher in metabolically active tissues)
3. **Molecular weight** (smaller enzymes appear in serum faster)
4. **Half-life of enzyme** in serum
5. **Rate of clearance** (liver, kidneys)

### Timeline of Cardiac Markers After MI
| Marker | Rise | Peak | Duration |
|--------|------|------|----------|
| Myoglobin | 1-3h | 6-9h | 24h |
| CK-MB | 4-8h | 12-24h | 48-72h |
| Troponin I | 3-6h | 12-24h | 7-10 days |
| Troponin T | 3-6h | 12-24h | 10-14 days |
| LDH | 12-24h | 48-72h | 7-10 days |

- **Myoglobin**: Earliest marker but NOT specific (also in skeletal muscle)
- **Troponin**: Most specific + stays elevated longest
- **CK-MB**: Best for reinfarction detection (short window)

## Liver Disease Enzyme Patterns

### Hepatocellular Damage
- **Markedly elevated AST, ALT** (10-100x normal)
- AST/ALT < 1 in viral hepatitis
- AST/ALT > 2 in alcoholic hepatitis (alcohol depletes B6 needed for ALT synthesis more than AST)
- Causes: Viral hepatitis, drug-induced (paracetamol), ischemic hepatitis

### Cholestatic/Obstructive Pattern
- **Markedly elevated ALP, GGT** (3-10x normal)
- Mildly elevated AST, ALT
- Elevated direct bilirubin
- Causes: Gallstone obstruction, pancreatic head tumor, primary biliary cholangitis

### Infiltrative Disease
- Moderately elevated ALP
- Normal to mildly elevated transaminases
- Causes: Liver metastases, granulomatous disease

## Bone Disease Enzymes
- **ALP (bone isoenzyme)**: Elevated in Paget disease, osteomalacia, rickets, bone metastases, healing fractures
- **Acid phosphatase**: Historically used for prostatic cancer (now replaced by PSA)
- ALP is a marker of **osteoblastic activity** (bone formation)
- In Paget disease: Very high ALP with normal calcium and phosphate

## Special Enzymes

### 5'-Nucleotidase
- Specific for **hepatobiliary disease** (unlike ALP which is also bone)
- Helps confirm hepatic origin of elevated ALP

### Cholinesterase (Pseudocholinesterase / Butyrylcholinesterase)
- Synthesized by liver → decreased in liver disease
- **Succinylcholine sensitivity**: Genetic variant causes prolonged apnea after succinylcholine
- **Dibucaine number**: Tests for atypical cholinesterase
  - Normal: 80 (enzyme inhibited 80% by dibucaine)
  - Heterozygous: 50-60
  - Homozygous atypical: 20 (resistant to dibucaine = prolonged apnea risk)

### Angiotensin Converting Enzyme (ACE)
- Elevated in **sarcoidosis** (produced by epithelioid cells in granulomas)

> **Clinical Pearl**: In India, paracetamol overdose is becoming an increasingly common cause of acute liver failure. AST/ALT can be massively elevated (>10,000 IU/L). N-acetylcysteine (NAC) must be given within 8 hours of ingestion for best outcomes.`,
        mnemonics: [
          { text: "Troponin is the LAST to leave the party", explanation: "Troponin I/T remains elevated for 7-14 days after MI — longest duration of all cardiac markers, hence it's the gold standard" },
          { text: "AST/ALT > 2 = Alcohol (A for Alcohol)", explanation: "De Ritis ratio > 2 suggests alcoholic hepatitis because alcohol depletes B6 (needed for ALT more than AST)" }
        ],
        keyPoints: ["MI timeline: Myoglobin first (1-3h), CK-MB (4-8h), Troponin (3-6h but lasts 7-14 days), LDH (12-24h)", "CK-MB best for reinfarction (normalizes by 48-72h)", "Hepatocellular: high AST/ALT; Cholestatic: high ALP/GGT", "AST/ALT > 2 in alcoholic hepatitis (B6 depletion affects ALT more)", "Paget disease: very high ALP, normal Ca and PO4", "Dibucaine number for succinylcholine sensitivity (atypical cholinesterase)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 7", edition: "31st" }, { book: "Harsh Mohan Pathology", chapter: "Ch 21: Liver", edition: "8th" }] },
      { layer: 3, slug: "clinical-enzymology-clinical", title: "Clinical Enzymology - Clinical", estimatedMinutes: 20,
        summary: "Practical clinical applications: interpreting enzyme panels in MI, liver disease, pancreatitis, bone disease, and hemolysis.",
        contentMd: `# Clinical Applications

## Case-Based Enzyme Interpretation

### Case 1: Acute MI
- CK-MB elevated, Troponin I elevated, LDH-1 > LDH-2 (flipped)
- ECG: ST elevation in leads II, III, aVF
- In India, many patients present late (>12h) — CK-MB may be normalizing but troponin still elevated

### Case 2: Alcoholic Hepatitis
- AST: 250 IU/L, ALT: 90 IU/L (AST/ALT ratio = 2.8)
- GGT markedly elevated
- Macrocytosis (MCV > 100) — B12/folate/direct alcohol effect
- History of chronic alcohol use

### Case 3: Obstructive Jaundice
- ALP: 800 IU/L (markedly elevated, 5x normal)
- GGT elevated (confirms hepatic origin of ALP)
- AST/ALT: mildly elevated (1.5-2x)
- Direct bilirubin elevated
- USG: dilated CBD (gallstone or pancreatic head mass)

### Case 4: Paget Disease of Bone
- ALP: Very high (10-20x normal)
- Calcium: Normal
- Phosphate: Normal
- Bone pain, skull enlargement, deafness
- X-ray: Mixed lytic/sclerotic lesions

### Case 5: Acute Pancreatitis
- Amylase: 1200 IU/L (>3x normal)
- Lipase: 900 IU/L (elevated, more specific)
- Epigastric pain radiating to back
- Common causes in India: Gallstones (#1), Alcohol (#2)

## Tumor Markers (Enzyme-Based)
| Marker | Cancer |
|--------|--------|
| PSA (not an enzyme — serine protease) | Prostate |
| ALP (Regan isoenzyme — placental) | Lung, ovary (heat-stable) |
| LDH | Lymphoma, germ cell tumors |
| Neuron-specific enolase (NSE) | Small cell lung cancer, neuroblastoma |
| CA 19-9 (not enzyme) | Pancreatic cancer |

## Hemolysis Markers
- **LDH elevated** (LDH-1 especially)
- **Indirect bilirubin** elevated
- **Haptoglobin** decreased (binds free Hb, consumed)
- **AST** may be mildly elevated (present in RBCs)
- **ALT** usually normal (not in RBCs) — helps distinguish from liver disease

> **Clinical Pearl**: In Indian labs, hemolyzed samples are a common pre-analytical error that falsely elevates LDH, AST, and potassium. Always check sample quality before interpreting enzyme results.`,
        mnemonics: [
          { text: "Gallstones = #1 cause of pancreatitis in India", explanation: "While alcohol is the most common cause globally, gallstones are the leading cause in Indian populations. Amylase rises early; lipase is more specific and lasts longer" }
        ],
        keyPoints: ["MI: Troponin (gold standard), CK-MB (reinfarction), flipped LDH", "Alcoholic hepatitis: AST/ALT > 2, elevated GGT", "Obstructive jaundice: high ALP + GGT, mild transaminase elevation", "Paget bone: very high ALP, normal Ca/PO4", "Hemolysis: high LDH + indirect bilirubin + low haptoglobin + high AST, normal ALT"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 7", edition: "31st" }, { book: "Harrison's Medicine", chapter: "Ch 302: Approach to Liver Disease", edition: "21st" }] },
      { layer: 4, slug: "clinical-enzymology-exam", title: "Clinical Enzymology - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield clinical enzymology one-liners and pattern recognition for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Gold standard cardiac marker: **Troponin I/T**
- Best marker for reinfarction: **CK-MB**
- Earliest cardiac marker: **Myoglobin** (but not specific)
- Flipped LDH: **LDH1 > LDH2** (MI or hemolysis)
- Most liver-specific transaminase: **ALT (SGPT)**
- AST/ALT > 2: **Alcoholic hepatitis**
- Most sensitive marker for alcoholism: **GGT**
- Obstructive jaundice marker: **ALP** (confirmed by GGT or 5'-nucleotidase)
- Paget disease enzyme: **Very high ALP, normal Ca/PO4**
- More specific for pancreatitis: **Lipase** (not amylase)
- Regan isoenzyme: **Placental ALP** (tumor marker, heat-stable)
- Sarcoidosis enzyme: **ACE (elevated)**
- Dibucaine number: **Tests for atypical cholinesterase** (succinylcholine sensitivity)
- NSE: **Small cell lung cancer, neuroblastoma**
- Hemolysis: **LDH-1 up, haptoglobin down**

## Quick Pattern Recognition
- Q: "Patient with chest pain, CK-MB and troponin elevated" → **Acute MI**
- Q: "AST 300, ALT 100, GGT elevated" → **Alcoholic hepatitis**
- Q: "Very high ALP, normal Ca/PO4, bone pain" → **Paget disease**
- Q: "Amylase/lipase elevated, epigastric pain to back" → **Acute pancreatitis**
- Q: "High LDH, low haptoglobin, indirect bilirubin up" → **Hemolysis**
- Q: "Prolonged apnea after succinylcholine" → **Atypical cholinesterase (low dibucaine number)**`,
        mnemonics: [
          { text: "GGT = Gamma GT = Great for Gamma (alcoholism)", explanation: "GGT is the most sensitive enzyme marker for chronic alcoholism and alcoholic liver disease" }
        ],
        keyPoints: ["Troponin = gold standard MI marker; CK-MB = reinfarction", "ALT is liver-specific; AST/ALT > 2 = alcohol", "GGT most sensitive for alcoholism", "Lipase > Amylase for pancreatitis specificity"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 7", edition: "31st" }] },
      { layer: 5, slug: "clinical-enzymology-recall", title: "Clinical Enzymology - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test on diagnostic enzymology.",
        contentMd: `# Active Recall

**Q1:** What is the gold standard cardiac biomarker?
> Troponin I/T (most specific, stays elevated 7-14 days)

**Q2:** Which cardiac marker is best for detecting reinfarction?
> CK-MB (normalizes by 48-72h, so re-elevation indicates new event)

**Q3:** What does a flipped LDH pattern indicate?
> LDH-1 > LDH-2 = myocardial infarction or hemolysis

**Q4:** What AST/ALT ratio suggests alcoholic hepatitis?
> AST/ALT > 2 (due to B6 depletion and mitochondrial AST release)

**Q5:** Which enzyme is most specific for liver in differentiating causes of elevated ALP?
> GGT or 5'-Nucleotidase (elevated in liver disease, normal in bone disease)

**Q6:** Which is more specific for pancreatitis: amylase or lipase?
> Lipase (more specific and stays elevated longer)

**Q7:** What enzyme is characteristically elevated in sarcoidosis?
> ACE (Angiotensin Converting Enzyme)

**Q8:** What is the dibucaine number used for?
> Testing for atypical cholinesterase (pseudocholinesterase) — predicts succinylcholine sensitivity

**Q9:** In hemolysis, which enzyme is elevated and which protein is decreased?
> LDH elevated (especially LDH-1); Haptoglobin decreased

**Q10:** What is the Regan isoenzyme?
> Placental ALP — heat-stable, used as tumor marker (ectopic production in lung/ovarian cancer)`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering cardiac markers, liver enzymes, pancreatic enzymes, and special markers"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 7", edition: "31st" }] },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // MODULE 3: CARBOHYDRATE METABOLISM (BI-MOD-03) — 5 Topics
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: Glycolysis ──────────────────────────────────────
  {
    topicCode: "BI-MOD-03-TOP-01",
    layers: [
      { layer: 1, slug: "glycolysis-foundation", title: "Glycolysis - Foundation", estimatedMinutes: 20,
        summary: "Glycolysis is the Embden-Meyerhof pathway that converts glucose to pyruvate in the cytoplasm. It produces 2 ATP and 2 NADH per glucose under aerobic conditions. It is the universal pathway present in all cells.",
        contentMd: `# Glycolysis (Embden-Meyerhof Pathway)

## Overview
- **Location**: Cytoplasm (all cells)
- **Input**: 1 Glucose (6C)
- **Output**: 2 Pyruvate (3C) + 2 ATP (net) + 2 NADH
- **Oxygen requirement**: None (can occur aerobically and anaerobically)
- Universal pathway — present in virtually all living organisms

## 10 Steps of Glycolysis

### Energy Investment Phase (Steps 1-5): Uses 2 ATP

| Step | Enzyme | Reaction | Notes |
|------|--------|----------|-------|
| 1 | **Hexokinase** (or Glucokinase in liver) | Glucose → G6P | Uses 1 ATP; irreversible |
| 2 | Phosphoglucose isomerase | G6P → F6P | Reversible |
| 3 | **PFK-1** | F6P → F1,6BP | Uses 1 ATP; **rate-limiting step**; irreversible |
| 4 | Aldolase | F1,6BP → DHAP + G3P | |
| 5 | Triose phosphate isomerase | DHAP ⇌ G3P | Only G3P continues |

### Energy Payoff Phase (Steps 6-10): Produces 4 ATP + 2 NADH

| Step | Enzyme | Reaction | Notes |
|------|--------|----------|-------|
| 6 | G3P dehydrogenase | G3P → 1,3-BPG | Produces **NADH**; uses NAD+ + Pi |
| 7 | Phosphoglycerate kinase | 1,3-BPG → 3-PG | Produces **ATP** (substrate-level phosphorylation) |
| 8 | Phosphoglycerate mutase | 3-PG → 2-PG | |
| 9 | Enolase | 2-PG → PEP | Inhibited by **fluoride** |
| 10 | **Pyruvate kinase** | PEP → Pyruvate | Produces **ATP**; irreversible |

## Key Regulatory Enzymes (Irreversible Steps)
1. **Hexokinase / Glucokinase** (Step 1)
2. **PFK-1** (Step 3) — **Rate-limiting step**
3. **Pyruvate kinase** (Step 10)

## Energy Yield (Per Glucose)

### Substrate-Level Phosphorylation
- 2 ATP consumed (Steps 1, 3)
- 4 ATP produced (Steps 7, 10 — x2 for 2 trioses)
- **Net: 2 ATP**

### NADH Production
- 2 NADH produced (Step 6 — x2 for 2 trioses)
- In aerobic conditions: Each NADH → 2.5 ATP via ETC (using malate-aspartate shuttle)
- Or 1.5 ATP via glycerol-3-phosphate shuttle (in brain, skeletal muscle)

## Fates of Pyruvate
1. **Aerobic**: Pyruvate → Acetyl-CoA (via PDH) → TCA cycle
2. **Anaerobic**: Pyruvate → Lactate (via Lactate dehydrogenase, regenerates NAD+)
3. **Ethanol fermentation** (yeast): Pyruvate → Acetaldehyde → Ethanol

> **Clinical Pearl**: RBCs lack mitochondria and depend entirely on anaerobic glycolysis for ATP. This is why RBCs produce lactate as the end product. In severe anemia, increased anaerobic glycolysis leads to lactic acidosis.`,
        mnemonics: [
          { text: "Goodness Gracious, Father Franklin Did Go By Picking Pumpkins to Prepare Pies", explanation: "Glycolysis intermediates: Glucose, G6P, F6P, F1,6BP, DHAP, G3P, 1,3BPG, 3PG, 2PG, PEP, Pyruvate" },
          { text: "PFK-1 is the PACE-maker of glycolysis", explanation: "PFK-1 (phosphofructokinase-1) is the rate-limiting (committed) step of glycolysis — the key regulatory enzyme" }
        ],
        keyPoints: ["Glycolysis: cytoplasm, 10 steps, glucose → 2 pyruvate + 2 ATP (net) + 2 NADH", "3 irreversible/regulatory enzymes: Hexokinase, PFK-1 (rate-limiting), Pyruvate kinase", "PFK-1 is the rate-limiting (committed) step", "RBCs: only anaerobic glycolysis (no mitochondria)", "Fluoride inhibits enolase (Step 9)", "Fates of pyruvate: aerobic → acetyl-CoA; anaerobic → lactate"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 17: Glycolysis & Pyruvate Oxidation", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 16: Glycolysis", edition: "9th" }] },
      { layer: 2, slug: "glycolysis-mechanism", title: "Glycolysis - Mechanism", estimatedMinutes: 30,
        summary: "Detailed regulation of glycolysis: allosteric regulation of PFK-1, hormonal control, substrate-level phosphorylation, NADH shuttle systems, Pasteur effect, and Warburg effect.",
        contentMd: `# Glycolysis: Detailed Mechanisms

## Regulation of PFK-1 (Rate-Limiting Enzyme)

### Allosteric Activators
- **Fructose-2,6-bisphosphate** (F2,6BP) — most potent activator
- **AMP** (signals low energy)
- **ADP**
- **Pi** (inorganic phosphate)

### Allosteric Inhibitors
- **ATP** (signals high energy)
- **Citrate** (signals TCA cycle is saturated)
- **H+** (acidosis — prevents excess lactate production)

### Fructose-2,6-Bisphosphate (F2,6BP)
- Made by **PFK-2** (phosphofructokinase-2) — a bifunctional enzyme
- PFK-2 also has **FBPase-2** activity (removes F2,6BP)
- **Fed state (Insulin)**: PFK-2 active → high F2,6BP → glycolysis ON
- **Fasted state (Glucagon)**: FBPase-2 active → low F2,6BP → glycolysis OFF, gluconeogenesis ON

## Regulation of Pyruvate Kinase
- Activated by: **F1,6BP** (feedforward activation)
- Inhibited by: **ATP, Alanine, Acetyl-CoA**
- **Glucagon** → phosphorylation of liver pyruvate kinase → INACTIVATED

## NADH Shuttle Systems
Cytoplasmic NADH cannot cross inner mitochondrial membrane directly:

### Malate-Aspartate Shuttle
- **Location**: Liver, Heart, Kidney
- NADH (cytoplasm) → NADH (mitochondria)
- Each NADH → **2.5 ATP** (enters at Complex I)

### Glycerol-3-Phosphate Shuttle
- **Location**: Brain, Skeletal muscle
- NADH (cytoplasm) → FADH2 (mitochondria)
- Each FADH2 → **1.5 ATP** (enters at Complex II via Q)

## Total ATP Yield from 1 Glucose (Complete Oxidation)

| Source | ATP (Malate-Asp) | ATP (Glycerol-3P) |
|--------|------------------|-------------------|
| Glycolysis (substrate) | 2 | 2 |
| 2 NADH (glycolysis) | 5 | 3 |
| 2 NADH (PDH) | 5 | 5 |
| 6 NADH (TCA) | 15 | 15 |
| 2 FADH2 (TCA) | 3 | 3 |
| 2 GTP (TCA) | 2 | 2 |
| **Total** | **32** | **30** |

## Pasteur Effect
- In the presence of oxygen, glycolysis rate **decreases**
- Because aerobic metabolism (TCA + ETC) is more efficient → less glucose needed
- O2 → more ATP → ATP inhibits PFK-1 → glycolysis slows

## Warburg Effect (Aerobic Glycolysis)
- Cancer cells preferentially use glycolysis even in the presence of adequate O2
- Produce lactate despite having functional mitochondria
- Reason: Rapid ATP production + biosynthetic intermediates for cell growth
- **PET scan (FDG-PET)**: Uses radiolabeled glucose to detect tumors (high glucose uptake)
- Named after **Otto Warburg** (Nobel Prize, 1931)

## Rapoport-Luebering Shunt (in RBCs)
- 1,3-BPG → **2,3-BPG** (by bisphosphoglycerate mutase) → 3-PG
- Bypasses the ATP-generating step 7
- 2,3-BPG regulates O2 delivery by hemoglobin
- RBCs sacrifice 1 ATP to produce this important allosteric regulator

> **Clinical Pearl**: FDG-PET scanning exploits the Warburg effect — cancer cells take up more glucose than normal cells. This is widely used for staging lymphomas and detecting metastases. However, inflammatory lesions (like tuberculosis, common in India) also show increased FDG uptake — a potential false positive.`,
        mnemonics: [
          { text: "PFK-2 is the FED controller: Fed = F2,6BP up = glycolysis ON", explanation: "In fed state, insulin activates PFK-2 → makes F2,6BP → activates PFK-1 → glycolysis ON. In fasting, glucagon activates FBPase-2 → removes F2,6BP → glycolysis OFF" },
          { text: "Warburg = War on O2 (cancer ignores O2)", explanation: "Warburg effect: cancer cells use glycolysis even with O2 present — aerobic glycolysis" }
        ],
        keyPoints: ["PFK-1 regulation: activated by F2,6BP, AMP; inhibited by ATP, citrate", "F2,6BP: most potent PFK-1 activator; made by PFK-2 (insulin activates, glucagon inhibits)", "Malate-Asp shuttle (liver/heart): NADH → 2.5 ATP; Glycerol-3P shuttle (brain/muscle): NADH → 1.5 ATP", "Total ATP per glucose: 30-32 (depending on shuttle)", "Pasteur effect: O2 decreases glycolysis rate", "Warburg effect: cancer cells use glycolysis even with O2 (basis of PET scan)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 17-18", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 16", edition: "9th" }] },
      { layer: 3, slug: "glycolysis-clinical", title: "Glycolysis - Clinical", estimatedMinutes: 20,
        summary: "Clinical correlations: lactic acidosis, pyruvate kinase deficiency, cancer metabolism, and fluoride poisoning.",
        contentMd: `# Clinical Applications

## Lactic Acidosis
- **Type A** (Hypoxic): Inadequate O2 delivery → anaerobic glycolysis → lactate accumulation
  - Causes: Shock, cardiac failure, severe anemia, CO poisoning
- **Type B** (Non-hypoxic): Impaired lactate metabolism
  - Causes: Liver failure, thiamine (B1) deficiency, metformin (rare), cyanide
- **Normal lactate**: 0.5-2.0 mmol/L
- **Lactic acidosis**: > 5 mmol/L with pH < 7.35
- **Treatment**: Treat underlying cause, IV fluids, sometimes bicarbonate

## Pyruvate Kinase Deficiency
- Most common enzyme deficiency causing **hereditary non-spherocytic hemolytic anemia**
- **Autosomal recessive**
- RBCs cannot generate adequate ATP → rigid → hemolysis
- **Paradox**: 2,3-BPG is INCREASED (because glycolysis is blocked after the 2,3-BPG step)
  - This actually helps: right shift of O2 curve → better O2 delivery despite anemia

## Hexokinase Deficiency
- Rare cause of hemolytic anemia
- More severe than pyruvate kinase deficiency

## Arsenic Poisoning and Glycolysis
- Arsenate (As5+) resembles phosphate
- Substitutes for Pi in Step 6 (G3P dehydrogenase)
- Forms unstable 1-arseno-3-phosphoglycerate → spontaneously hydrolyzes
- **Bypasses ATP generation at Step 7** → net ATP = 0 from glycolysis
- This is called **arsenolysis**

## Fluoride Poisoning
- **Inhibits enolase** (Step 9) → blocks glycolysis
- Sodium fluoride added to blood collection tubes for glucose testing:
  - Prevents glycolysis by WBCs/RBCs → preserves glucose levels in sample

## Cancer and Glycolysis (Warburg Effect)
- Tumor cells upregulate: Hexokinase II, PFK-1, pyruvate kinase M2 (PKM2)
- **PKM2**: Less active form → diverts intermediates for biosynthesis
- **HIF-1alpha**: Transcription factor upregulated in hypoxic tumors → induces glycolytic enzymes
- **Dichloroacetate (DCA)**: Activates PDH → forces pyruvate into TCA → under investigation as anti-cancer

> **Clinical Pearl**: Metformin-associated lactic acidosis (MALA), though rare, is a concern in Indian diabetic patients with renal impairment. Metformin should be withheld when eGFR < 30 mL/min and used cautiously between 30-45 mL/min. Serum creatinine monitoring is essential.`,
        mnemonics: [
          { text: "PK deficiency = Paradoxical 2,3-BPG increase", explanation: "In pyruvate kinase deficiency, glycolysis is blocked late → intermediates above the block accumulate → more 1,3-BPG diverted to 2,3-BPG via Rapoport-Luebering shunt" }
        ],
        keyPoints: ["Lactic acidosis Type A (hypoxic) vs Type B (non-hypoxic/metabolic)", "Pyruvate kinase deficiency: most common glycolytic enzyme deficiency → hemolytic anemia", "Arsenate causes arsenolysis → net 0 ATP from glycolysis", "Fluoride inhibits enolase → used in glucose collection tubes", "Warburg effect in cancer: upregulated glycolysis, PKM2, HIF-1alpha"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 17", edition: "31st" }, { book: "Harsh Mohan Pathology", chapter: "Ch 12", edition: "8th" }] },
      { layer: 4, slug: "glycolysis-exam", title: "Glycolysis - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield glycolysis points for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Location of glycolysis: **Cytoplasm**
- Rate-limiting enzyme: **PFK-1**
- Most potent PFK-1 activator: **Fructose-2,6-bisphosphate**
- Net ATP from glycolysis: **2 (substrate-level phosphorylation)**
- Total ATP from 1 glucose (aerobic): **30-32**
- Irreversible enzymes: **Hexokinase, PFK-1, Pyruvate kinase**
- Fluoride inhibits: **Enolase**
- Arsenate causes: **Arsenolysis (net 0 ATP)**
- Pyruvate to lactate enzyme: **Lactate dehydrogenase (LDH)**
- Glucagon inactivates: **Pyruvate kinase (by phosphorylation)**
- Warburg effect: **Cancer cells use glycolysis even with O2**
- PET scan basis: **Warburg effect (increased glucose uptake)**
- Pasteur effect: **O2 decreases glycolysis rate**
- RBCs depend on: **Anaerobic glycolysis only**
- 2,3-BPG made via: **Rapoport-Luebering shunt in RBCs**

## Common MCQ Patterns
- "Rate-limiting enzyme of glycolysis" → PFK-1 (NOT hexokinase)
- "Enzyme inhibited by fluoride" → Enolase
- "Net ATP in glycolysis" → 2 (not 4)
- "Cancer cells glucose metabolism" → Warburg effect / aerobic glycolysis
- "NADH shuttle in brain" → Glycerol-3-phosphate shuttle (1.5 ATP)`,
        mnemonics: [
          { text: "PFK-1: Pacemaker For Kinetics", explanation: "PFK-1 is the rate-limiting step and pacemaker of glycolysis — most regulated enzyme in the pathway" }
        ],
        keyPoints: ["PFK-1 = rate-limiting step (not hexokinase)", "Net 2 ATP; Total 30-32 ATP per glucose", "Fluoride → enolase; Arsenate → arsenolysis", "Warburg effect → PET scan basis"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 17", edition: "31st" }] },
      { layer: 5, slug: "glycolysis-recall", title: "Glycolysis - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test for glycolysis.",
        contentMd: `# Active Recall

**Q1:** Where does glycolysis occur?
> Cytoplasm (of all cells)

**Q2:** What is the rate-limiting enzyme of glycolysis?
> PFK-1 (Phosphofructokinase-1)

**Q3:** What is the most potent activator of PFK-1?
> Fructose-2,6-bisphosphate (made by PFK-2)

**Q4:** What is the net ATP yield of glycolysis?
> 2 ATP (per glucose, by substrate-level phosphorylation)

**Q5:** Name the 3 irreversible enzymes of glycolysis.
> Hexokinase (or Glucokinase), PFK-1, Pyruvate kinase

**Q6:** What is the Warburg effect?
> Cancer cells preferentially use glycolysis even in the presence of adequate oxygen

**Q7:** What enzyme is inhibited by fluoride?
> Enolase (Step 9)

**Q8:** What is the Pasteur effect?
> Presence of O2 decreases the rate of glycolysis (aerobic metabolism is more efficient)

**Q9:** Why do RBCs depend entirely on glycolysis?
> They lack mitochondria, so they cannot perform oxidative phosphorylation

**Q10:** What is the fate of pyruvate under anaerobic conditions?
> Converted to lactate by lactate dehydrogenase (regenerates NAD+ for continued glycolysis)`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering glycolysis pathway, regulation, and clinical significance"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 17", edition: "31st" }] },
    ],
  },

  // ─── Topic 2: TCA Cycle & ETC ─────────────────────────────────
  {
    topicCode: "BI-MOD-03-TOP-02",
    layers: [
      { layer: 1, slug: "tca-etc-foundation", title: "TCA Cycle & ETC - Foundation", estimatedMinutes: 20,
        summary: "The TCA cycle (Krebs cycle) oxidizes acetyl-CoA in the mitochondrial matrix producing NADH, FADH2, and GTP. The ETC in the inner mitochondrial membrane uses these electrons to generate ATP via oxidative phosphorylation.",
        contentMd: `# TCA Cycle & Electron Transport Chain

## TCA Cycle (Krebs Cycle / Citric Acid Cycle)

### Overview
- **Location**: Mitochondrial matrix
- **Input**: Acetyl-CoA (2C) + Oxaloacetate (4C)
- **Output per turn**: 3 NADH + 1 FADH2 + 1 GTP + 2 CO2
- **Per glucose**: Cycle turns twice (2 acetyl-CoA from 1 glucose)
- **Amphibolic**: Both catabolic (oxidizes acetyl-CoA) and anabolic (provides biosynthetic precursors)

### 8 Steps of TCA Cycle

| Step | Enzyme | Reaction | Product |
|------|--------|----------|---------|
| 1 | **Citrate synthase** | OAA + Acetyl-CoA → Citrate | |
| 2 | Aconitase | Citrate → Isocitrate | (via cis-aconitate) |
| 3 | **Isocitrate dehydrogenase** | Isocitrate → alpha-KG | **NADH + CO2** |
| 4 | **alpha-KG dehydrogenase** | alpha-KG → Succinyl-CoA | **NADH + CO2** |
| 5 | Succinyl-CoA synthetase | Succinyl-CoA → Succinate | **GTP** |
| 6 | Succinate dehydrogenase | Succinate → Fumarate | **FADH2** |
| 7 | Fumarase | Fumarate → Malate | |
| 8 | Malate dehydrogenase | Malate → Oxaloacetate | **NADH** |

### Key Regulatory Enzymes
1. **Citrate synthase** (Step 1)
2. **Isocitrate dehydrogenase** (Step 3) — **Rate-limiting step**
3. **alpha-Ketoglutarate dehydrogenase** (Step 4)

### Regulation
- **Activated by**: ADP, NAD+, Ca2+ (signals low energy)
- **Inhibited by**: ATP, NADH, Succinyl-CoA, Citrate (signals high energy)

## Electron Transport Chain (ETC)

### Location: Inner mitochondrial membrane

| Complex | Name | Accepts From | Inhibitor |
|---------|------|-------------|-----------|
| I | NADH dehydrogenase | NADH | **Rotenone**, Barbiturates |
| II | Succinate dehydrogenase | FADH2 | **Malonate** |
| III | Cytochrome bc1 | CoQ | **Antimycin A** |
| IV | Cytochrome c oxidase | Cytochrome c | **Cyanide, CO, H2S** |
| V | ATP synthase | Proton gradient | **Oligomycin** |

### Electron Flow
NADH → Complex I → CoQ → Complex III → Cytochrome c → Complex IV → O2 → H2O
FADH2 → Complex II → CoQ → Complex III → Cyt c → Complex IV → O2 → H2O

### ATP Yield per Electron Pair
- NADH → **~2.5 ATP** (enters at Complex I)
- FADH2 → **~1.5 ATP** (enters at Complex II, bypasses Complex I)

## ATP Synthase (Complex V) — Chemiosmotic Theory (Peter Mitchell)
- ETC pumps H+ from matrix to intermembrane space → proton gradient
- H+ flows back through ATP synthase → drives ATP synthesis
- **F0 subunit**: Proton channel (inhibited by oligomycin)
- **F1 subunit**: Catalytic (makes ATP)

> **Clinical Pearl**: Cyanide poisoning inhibits Complex IV — cells cannot use O2 even though it is available. Lactic acidosis results from shift to anaerobic metabolism. In India, cyanide exposure occurs from cassava consumption and industrial accidents. Treat with hydroxocobalamin or sodium thiosulfate.`,
        mnemonics: [
          { text: "Can I Keep Selling Succinate For Money Officer?", explanation: "TCA intermediates: Citrate, Isocitrate, alpha-Ketoglutarate, Succinyl-CoA, Succinate, Fumarate, Malate, Oxaloacetate" },
          { text: "ROtenone-Antimycin-Cyanide-Oligomycin = RACO for ETC inhibitors", explanation: "Complex I: Rotenone; Complex III: Antimycin A; Complex IV: Cyanide/CO; Complex V: Oligomycin" }
        ],
        keyPoints: ["TCA cycle: mitochondrial matrix, 8 steps, produces 3 NADH + 1 FADH2 + 1 GTP per turn", "Rate-limiting enzyme: Isocitrate dehydrogenase", "ETC: Complexes I-IV pump H+; Complex V (ATP synthase) makes ATP", "NADH → 2.5 ATP; FADH2 → 1.5 ATP", "ETC inhibitors: Rotenone (I), Malonate (II), Antimycin A (III), Cyanide/CO (IV), Oligomycin (V)", "Chemiosmotic theory (Peter Mitchell): proton gradient drives ATP synthesis"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 16-17: TCA Cycle, Oxidative Phosphorylation", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 17-18", edition: "9th" }] },
      { layer: 2, slug: "tca-etc-mechanism", title: "TCA Cycle & ETC - Mechanism", estimatedMinutes: 30,
        summary: "Anaplerotic reactions, oxidative phosphorylation coupling, P/O ratios, uncoupling agents, and detailed proton pumping stoichiometry.",
        contentMd: `# TCA & ETC: Detailed Mechanisms

## Anaplerotic Reactions (Replenishing TCA Intermediates)
| Reaction | Enzyme | Significance |
|----------|--------|-------------|
| Pyruvate → OAA | **Pyruvate carboxylase** (biotin) | Most important; gluconeogenesis entry |
| Glutamate → alpha-KG | Glutamate dehydrogenase | Amino acid metabolism |
| Aspartate → OAA | Aspartate transaminase | Amino acid entry |
| Propionyl-CoA → Succinyl-CoA | Various (B12-dependent) | Odd-chain FA metabolism |

- **Pyruvate carboxylase** activated by **acetyl-CoA** (signals need for more OAA)

## Cataplerotic Reactions (Draining TCA Intermediates)
- Citrate → Fatty acid synthesis (exported to cytoplasm)
- OAA → Gluconeogenesis (via PEPCK)
- alpha-KG → Amino acid synthesis (transamination)
- Succinyl-CoA → Heme synthesis

## Oxidative Phosphorylation (Coupling)

### Proton Pumping
| Complex | H+ Pumped per NADH | H+ Pumped per FADH2 |
|---------|-------------------|---------------------|
| I | 4 | 0 (bypassed) |
| III | 4 | 4 |
| IV | 2 | 2 |
| **Total** | **10** | **6** |

- ATP synthase: ~4 H+ needed per ATP → 10/4 = ~2.5 ATP per NADH; 6/4 = ~1.5 ATP per FADH2

### P/O Ratio
- NADH: P/O = **~2.5** (previously stated as 3)
- FADH2: P/O = **~1.5** (previously stated as 2)
- P/O ratio = ATP molecules made per atom of oxygen consumed

## Uncouplers of Oxidative Phosphorylation
- Dissipate proton gradient WITHOUT making ATP
- ETC runs faster (O2 consumed) but ATP NOT produced
- Energy released as **HEAT**

| Uncoupler | Source |
|-----------|--------|
| **2,4-DNP (Dinitrophenol)** | Chemical |
| **FCCP/CCCP** | Chemical (research) |
| **Thermogenin (UCP-1)** | Brown adipose tissue (physiological) |
| **Aspirin (overdose)** | Drug |
| **Bilirubin** | Endogenous |

### Brown Adipose Tissue (BAT)
- Contains **UCP-1 (Thermogenin)** — natural uncoupler
- Found in neonates (helps with thermoregulation)
- Generates heat without ATP (non-shivering thermogenesis)

## Inhibitors vs Uncouplers
| Feature | Inhibitors | Uncouplers |
|---------|-----------|-----------|
| ETC | Blocked | Running (faster) |
| O2 consumption | Decreased | Increased |
| ATP production | Decreased | Decreased |
| Heat | No change | Increased |

## Special Features
- **Succinate dehydrogenase (Complex II)**: Only TCA enzyme embedded in inner mitochondrial membrane; only enzyme using FAD (not NAD+); also part of ETC
- **Fluoroacetate**: Converted to fluorocitrate → inhibits aconitase → blocks TCA cycle (rat poison)
- **Malonate**: Competitive inhibitor of succinate dehydrogenase (structurally similar to succinate)

> **Clinical Pearl**: DNP (dinitrophenol) was historically used as a weight-loss drug because it uncouples oxidative phosphorylation, increasing metabolic rate and heat production. It was banned due to hyperthermia deaths but is still illegally sold online. Cases of DNP poisoning occasionally present in Indian emergency departments.`,
        mnemonics: [
          { text: "Uncouplers = Energy as HEAT, not ATP", explanation: "Uncouplers dissipate the proton gradient → electron transport continues (O2 consumed) but ATP synthase has no gradient → energy becomes heat" },
          { text: "SDH is SPECIAL: only TCA enzyme IN the membrane, uses FAD, IS Complex II", explanation: "Succinate dehydrogenase is unique: embedded in inner mitochondrial membrane, uses FAD instead of NAD+, and doubles as Complex II of ETC" }
        ],
        keyPoints: ["Anaplerosis: pyruvate carboxylase (most important, needs biotin, activated by acetyl-CoA)", "Proton pumping: Complex I (4H+), III (4H+), IV (2H+) = 10 total for NADH", "Uncouplers: dissipate proton gradient → heat instead of ATP; ETC runs faster", "Thermogenin/UCP-1 in brown fat: physiological uncoupler for neonatal thermoregulation", "SDH is both TCA enzyme and ETC Complex II; only TCA enzyme using FAD", "Fluoroacetate (rat poison) → fluorocitrate → inhibits aconitase"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 13, 16-17", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 18", edition: "9th" }] },
      { layer: 3, slug: "tca-etc-clinical", title: "TCA Cycle & ETC - Clinical", estimatedMinutes: 20,
        summary: "Clinical correlations: mitochondrial diseases, ETC inhibitor poisoning, and metabolic disorders affecting TCA cycle.",
        contentMd: `# Clinical Applications

## Cyanide Poisoning
- Inhibits **Complex IV** (cytochrome c oxidase) → cells cannot use O2
- **Bright red venous blood** (O2 not consumed by tissues)
- **Bitter almond odor**
- Lactic acidosis (anaerobic metabolism)
- **Treatment**:
  1. **Hydroxocobalamin** (preferred — binds CN directly)
  2. Cyanide antidote kit: Amyl nitrite → Sodium nitrite → Sodium thiosulfate
  3. Nitrites induce methemoglobin (binds CN) + thiosulfate converts CN → thiocyanate

## Carbon Monoxide (CO) Poisoning
- Binds hemoglobin (HbCO) AND inhibits **Complex IV**
- Double hit: impaired O2 transport + impaired O2 utilization

## Mitochondrial Diseases (ETC Defects)
| Disease | Defect | Features |
|---------|--------|----------|
| MELAS | Complex I/tRNA mutation | Mitochondrial Encephalomyopathy, Lactic Acidosis, Stroke-like episodes |
| MERRF | tRNA mutation | Myoclonus Epilepsy with Ragged Red Fibers |
| Leber Hereditary Optic Neuropathy (LHON) | Complex I | Bilateral visual loss in young males |
| Kearns-Sayre | Large mtDNA deletion | PEO, cardiac conduction defects, retinopathy |

- **Maternal inheritance** (mitochondrial DNA)
- **Ragged red fibers** on muscle biopsy (Gomori trichrome stain)
- **Lactic acidosis** is common (impaired oxidative phosphorylation)

## PDH Deficiency
- Cannot convert pyruvate → acetyl-CoA efficiently
- **Lactic acidosis** (pyruvate → lactate)
- **X-linked** (E1-alpha subunit on X chromosome)
- Treatment: **Ketogenic diet** (provides acetyl-CoA directly from fat metabolism, bypassing PDH)
- Also: Thiamine supplementation (TPP is PDH cofactor)

## Arsenic Poisoning and TCA
- Arsenite (As3+) inhibits **alpha-KG dehydrogenase** and **PDH** (binds lipoamide)
- Disrupts both TCA cycle and pyruvate oxidation

## Leigh Syndrome
- Subacute necrotizing encephalomyelopathy
- Defects in PDH, Complex I, or Complex IV
- Progressive neurodegeneration in infants
- Bilateral symmetric basal ganglia lesions on MRI

> **Clinical Pearl**: In Indian clinical practice, unexplained lactic acidosis in a child with neurological symptoms should raise suspicion for mitochondrial disease. Muscle biopsy showing ragged red fibers and genetic testing for mtDNA mutations are key diagnostic steps.`,
        mnemonics: [
          { text: "MELAS = Mitochondrial Encephalomyopathy, Lactic Acidosis, Stroke-like episodes", explanation: "MELAS is a mitochondrial disease with Complex I/tRNA defect, presenting with encephalomyopathy, lactic acidosis, and stroke-like episodes" }
        ],
        keyPoints: ["Cyanide: Complex IV inhibitor; treat with hydroxocobalamin or nitrite-thiosulfate kit", "Mitochondrial diseases: maternal inheritance, ragged red fibers, lactic acidosis", "MELAS, MERRF, LHON are key mitochondrial syndromes", "PDH deficiency: lactic acidosis, X-linked; treat with ketogenic diet + thiamine", "Arsenic inhibits alpha-KG dehydrogenase and PDH (binds lipoamide)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 13, 16", edition: "31st" }, { book: "Robbins Pathology", chapter: "Ch 6", edition: "10th" }] },
      { layer: 4, slug: "tca-etc-exam", title: "TCA Cycle & ETC - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield TCA and ETC points for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- TCA cycle location: **Mitochondrial matrix**
- Rate-limiting enzyme: **Isocitrate dehydrogenase**
- TCA yield per turn: **3 NADH + 1 FADH2 + 1 GTP + 2 CO2**
- Only TCA enzyme in membrane: **Succinate dehydrogenase (also Complex II)**
- Only TCA enzyme using FAD: **Succinate dehydrogenase**
- Anaplerosis key enzyme: **Pyruvate carboxylase** (biotin, activated by acetyl-CoA)
- Complex I inhibitor: **Rotenone**
- Complex III inhibitor: **Antimycin A**
- Complex IV inhibitor: **Cyanide, CO, H2S**
- Complex V inhibitor: **Oligomycin**
- Uncoupler example: **2,4-DNP, Thermogenin (UCP-1)**
- NADH → **2.5 ATP**; FADH2 → **1.5 ATP**
- Total ATP per glucose: **30-32**
- Rat poison affecting TCA: **Fluoroacetate** (→ fluorocitrate → inhibits aconitase)
- Malonate inhibits: **Succinate dehydrogenase** (competitive)

## Comparison: Inhibitors vs Uncouplers

| Feature | ETC Inhibitors | Uncouplers |
|---------|---------------|-----------|
| O2 consumption | Decreased | Increased |
| ATP production | Decreased | Decreased |
| Heat generation | Normal | Increased |

## Pattern Recognition
- Q: "Maternal inheritance + ragged red fibers + lactic acidosis" → **Mitochondrial disease**
- Q: "Lactic acidosis in child + neurological symptoms" → Consider **PDH deficiency or mitochondrial disease**
- Q: "Bright red venous blood + lactic acidosis" → **Cyanide poisoning**`,
        mnemonics: [
          { text: "RACO for ETC inhibitors", explanation: "Rotenone (I), Antimycin A (III), Cyanide/CO (IV), Oligomycin (V)" }
        ],
        keyPoints: ["SDH = only membrane-bound TCA enzyme = Complex II = uses FAD", "RACO: Rotenone-Antimycin-Cyanide-Oligomycin", "Uncouplers: increased O2, decreased ATP, increased heat", "30-32 ATP per glucose"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 13, 16-17", edition: "31st" }] },
      { layer: 5, slug: "tca-etc-recall", title: "TCA Cycle & ETC - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test for TCA cycle and ETC.",
        contentMd: `# Active Recall

**Q1:** Name the 8 intermediates of the TCA cycle in order.
> Citrate, Isocitrate, alpha-Ketoglutarate, Succinyl-CoA, Succinate, Fumarate, Malate, Oxaloacetate

**Q2:** What is the rate-limiting enzyme of the TCA cycle?
> Isocitrate dehydrogenase

**Q3:** How much ATP, NADH, FADH2, and GTP per turn?
> 3 NADH + 1 FADH2 + 1 GTP (+ 2 CO2)

**Q4:** What inhibits Complex IV of ETC?
> Cyanide, Carbon monoxide, Hydrogen sulfide

**Q5:** What is an uncoupler? Give an example.
> Dissipates proton gradient → heat instead of ATP. Examples: 2,4-DNP, Thermogenin (UCP-1)

**Q6:** What is the most important anaplerotic reaction?
> Pyruvate → Oxaloacetate by pyruvate carboxylase (biotin-dependent, activated by acetyl-CoA)

**Q7:** Which TCA enzyme is also part of the ETC?
> Succinate dehydrogenase (= Complex II; embedded in inner mitochondrial membrane, uses FAD)

**Q8:** How many ATP per NADH vs FADH2?
> NADH → ~2.5 ATP; FADH2 → ~1.5 ATP

**Q9:** What is oligomycin and what does it inhibit?
> Antibiotic that inhibits F0 subunit of ATP synthase (Complex V) — blocks proton channel

**Q10:** What is the treatment for PDH deficiency?
> Ketogenic diet (provides acetyl-CoA from fats, bypassing PDH) + thiamine supplementation`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering TCA cycle, ETC, inhibitors, uncouplers, and clinical correlations"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 13, 16-17", edition: "31st" }] },
    ],
  },

  // ─── Topic 3: Gluconeogenesis ─────────────────────────────────
  {
    topicCode: "BI-MOD-03-TOP-03",
    layers: [
      { layer: 1, slug: "gluconeogenesis-foundation", title: "Gluconeogenesis - Foundation", estimatedMinutes: 20,
        summary: "Gluconeogenesis is the synthesis of glucose from non-carbohydrate precursors (pyruvate, lactate, glycerol, amino acids) mainly in the liver. It has 4 bypass reactions around the irreversible steps of glycolysis.",
        contentMd: `# Gluconeogenesis

## Overview
- **Definition**: Synthesis of glucose from non-carbohydrate precursors
- **Location**: Primarily **liver** (90%) and **kidney** (10%)
- **When**: Fasting, starvation, prolonged exercise
- **NOT a simple reversal** of glycolysis — 7 of 10 glycolysis steps are reversible, but 3 irreversible steps need **4 bypass enzymes**

## Substrates (Non-Carbohydrate Precursors)
| Substrate | Source | Entry Point |
|-----------|--------|-------------|
| Lactate | Muscle (anaerobic glycolysis), RBCs | → Pyruvate (via LDH) |
| Alanine | Muscle (glucose-alanine cycle) | → Pyruvate (via ALT) |
| Glycerol | Adipose tissue (lipolysis) | → DHAP (via glycerol kinase + G3P-DH) |
| Glucogenic amino acids | Protein breakdown | → Various TCA intermediates → OAA |
| Propionate | Odd-chain fatty acids | → Succinyl-CoA → OAA |

> **Important**: Even-chain fatty acids CANNOT produce net glucose (acetyl-CoA cannot be converted to OAA in mammals — no net gluconeogenesis from acetyl-CoA)

## 4 Bypass Reactions

| Glycolysis Enzyme (Irreversible) | Gluconeogenesis Bypass Enzyme |
|----------------------------------|-------------------------------|
| 1. Pyruvate kinase (PEP → Pyruvate) | **Pyruvate carboxylase** (Pyruvate → OAA) + **PEPCK** (OAA → PEP) |
| 2. PFK-1 (F6P → F1,6BP) | **Fructose-1,6-bisphosphatase** (F1,6BP → F6P) |
| 3. Hexokinase (Glucose → G6P) | **Glucose-6-phosphatase** (G6P → Glucose) |

### Step 1: Pyruvate → OAA → PEP (Two enzymes needed)
- **Pyruvate carboxylase**: Pyruvate + CO2 → OAA (mitochondria, needs biotin + ATP)
  - Activated by **acetyl-CoA**
- **PEPCK** (PEP carboxykinase): OAA → PEP + CO2 (cytoplasm, uses GTP)

### Step 2: F1,6BP → F6P
- **Fructose-1,6-bisphosphatase** (FBPase-1)
- Inhibited by **F2,6BP** and **AMP**

### Step 3: G6P → Glucose
- **Glucose-6-phosphatase** (G6Pase)
- Present only in **liver and kidney** (not muscle or brain)
- This is why muscle cannot release free glucose into blood

## Energy Cost
- 6 ATP equivalents per glucose synthesized (4 ATP + 2 GTP)
- Gluconeogenesis is energy-expensive (reverse of glycolysis which produces only 2 ATP)

## The Cori Cycle (Lactic Acid Cycle)
1. **Muscle**: Glucose → Pyruvate → Lactate (anaerobic glycolysis)
2. Lactate transported to **liver** via blood
3. **Liver**: Lactate → Pyruvate → Glucose (gluconeogenesis)
4. Glucose released back to blood → returns to muscle
- Net cost: 6 ATP in liver, only 2 ATP gained in muscle → overall 4 ATP cost
- Shifts metabolic burden from muscle to liver

## Glucose-Alanine Cycle
1. **Muscle**: Pyruvate + amino group (from BCAA) → Alanine (via ALT)
2. Alanine transported to **liver**
3. **Liver**: Alanine → Pyruvate (via ALT) → Glucose; amino group → Urea
4. Serves dual purpose: gluconeogenesis + nitrogen transport

> **Clinical Pearl**: Glucose-6-phosphatase deficiency (Von Gierke disease / GSD Type I) causes inability to release free glucose from liver → severe fasting hypoglycemia, hepatomegaly, and lactic acidosis in Indian children.`,
        mnemonics: [
          { text: "Fat cannot make sugar", explanation: "Even-chain fatty acids produce acetyl-CoA, which cannot generate net glucose in humans (no glyoxylate cycle). Only glycerol (from triglyceride breakdown) and odd-chain FAs can contribute to gluconeogenesis" },
          { text: "Cori Cycle = Lactate shuttle between Muscle and Liver", explanation: "Muscle sends lactate to liver; liver converts it back to glucose and sends it back — named after Carl and Gerty Cori (Nobel Prize 1947)" }
        ],
        keyPoints: ["Gluconeogenesis: liver (90%) + kidney (10%); 4 bypass enzymes needed", "Bypass enzymes: Pyruvate carboxylase, PEPCK, FBPase-1, G6Pase", "G6Pase only in liver/kidney — muscle cannot export free glucose", "Substrates: lactate, alanine, glycerol, glucogenic AAs, propionate", "Even-chain FAs cannot make net glucose (acetyl-CoA cannot → OAA in mammals)", "Cori cycle: muscle lactate → liver glucose (costs 4 net ATP)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 19: Gluconeogenesis", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 16", edition: "9th" }] },
      { layer: 2, slug: "gluconeogenesis-mechanism", title: "Gluconeogenesis - Mechanism", estimatedMinutes: 30,
        summary: "Detailed regulation of gluconeogenesis by hormones, allosteric effectors, and reciprocal control with glycolysis. OAA transport and compartmentalization.",
        contentMd: `# Gluconeogenesis: Detailed Mechanisms

## Reciprocal Regulation of Glycolysis and Gluconeogenesis

| Regulator | Glycolysis (PFK-1) | Gluconeogenesis (FBPase-1) |
|-----------|-------------------|---------------------------|
| F2,6BP | Activates | Inhibits |
| AMP | Activates | Inhibits |
| ATP | Inhibits | Activates |
| Citrate | Inhibits | Activates |

### Hormonal Control
- **Glucagon (Fasting)**: ↑ cAMP → PKA → phosphorylates PFK-2/FBPase-2 bifunctional enzyme
  - FBPase-2 active → F2,6BP decreases
  - Glycolysis OFF, Gluconeogenesis ON
  - Also: induces PEPCK gene expression

- **Insulin (Fed)**: Dephosphorylates PFK-2/FBPase-2
  - PFK-2 active → F2,6BP increases
  - Glycolysis ON, Gluconeogenesis OFF
  - Represses PEPCK gene expression

## OAA Transport Problem
- OAA cannot cross mitochondrial membrane directly
- **Malate shuttle**: OAA → Malate (by MDH, using NADH) → crosses membrane → Malate → OAA (cytoplasm)
- Alternatively: OAA → Aspartate (by AST) → crosses membrane → Aspartate → OAA

## Metformin and Gluconeogenesis
- **Metformin**: First-line drug for Type 2 Diabetes
- Mechanism: Activates **AMPK** (AMP-activated protein kinase)
- AMPK inhibits gluconeogenesis in liver
- Also: inhibits Complex I → increases AMP/ATP ratio → AMPK activation
- Does NOT cause hypoglycemia (does not stimulate insulin secretion)

## Ethanol and Gluconeogenesis
- Alcohol metabolism: Ethanol → Acetaldehyde → Acetate (by ADH and ALDH)
- Both reactions use **NAD+** → produce NADH
- High NADH/NAD+ ratio shifts:
  - Pyruvate → Lactate (cannot be used for gluconeogenesis)
  - OAA → Malate (OAA unavailable for PEPCK)
- Result: **Inhibited gluconeogenesis** → **Alcohol-induced hypoglycemia**
- Particularly dangerous in fasting state

## Gluconeogenesis from Amino Acids
- **Glucogenic amino acids**: Can be converted to TCA intermediates → OAA → glucose
  - Most amino acids are glucogenic
  - **Leucine and Lysine**: Purely ketogenic (only produce acetyl-CoA)
  - Some are both glucogenic and ketogenic (Ile, Phe, Trp, Tyr, Thr)

### Alanine is the Most Important Glucogenic AA
- Main amino acid released from muscle during fasting
- Transported to liver via glucose-alanine cycle
- Transaminase (ALT) converts alanine → pyruvate → gluconeogenesis

> **Clinical Pearl**: Alcohol-induced hypoglycemia is a significant clinical problem in India, especially in malnourished individuals who drink on an empty stomach. The mechanism is NAD+ depletion inhibiting gluconeogenesis. Treatment: IV dextrose + thiamine (to prevent Wernicke encephalopathy).`,
        mnemonics: [
          { text: "Leucine and Lysine are ONLY Ketogenic (LL = Ketogenic)", explanation: "Only two amino acids that are purely ketogenic (produce only acetyl-CoA, no glucose): Leucine and Lysine" },
          { text: "Alcohol STEALS NAD+ → KILLS gluconeogenesis", explanation: "Ethanol metabolism consumes NAD+ → high NADH/NAD+ → pyruvate shunted to lactate, OAA to malate → gluconeogenesis blocked → hypoglycemia" }
        ],
        keyPoints: ["Reciprocal regulation: F2,6BP activates PFK-1 (glycolysis) and inhibits FBPase-1 (gluconeogenesis)", "Glucagon → PKA → ↓F2,6BP → gluconeogenesis ON; Insulin → opposite", "Metformin activates AMPK → inhibits hepatic gluconeogenesis", "Ethanol: NAD+ depletion → inhibits gluconeogenesis → hypoglycemia", "Leucine and Lysine are purely ketogenic (cannot make glucose)", "OAA must exit mitochondria as malate or aspartate (cannot cross directly)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 19-20", edition: "31st" }] },
      { layer: 3, slug: "gluconeogenesis-clinical", title: "Gluconeogenesis - Clinical", estimatedMinutes: 20,
        summary: "Clinical scenarios: fasting hypoglycemia, Von Gierke disease, alcohol-induced hypoglycemia, and diabetes management relevance.",
        contentMd: `# Clinical Applications

## Von Gierke Disease (GSD Type I)
- **Deficiency**: Glucose-6-phosphatase
- Cannot convert G6P → free glucose
- **Features**: Severe fasting hypoglycemia, hepatomegaly (glycogen + fat), lactic acidosis, hyperuricemia, hypertriglyceridemia, hyperlipidemia
- **Doll-like facies** (fat cheeks from fat deposition)
- **Treatment**: Frequent meals, cornstarch supplementation (slow glucose release)

## Fasting Hypoglycemia
- Causes:
  - Insulin overdose (most common in diabetics)
  - Insulinoma (pancreatic beta-cell tumor)
  - Alcohol-induced (NAD+ depletion)
  - GSD Type I
  - Adrenal insufficiency (cortisol needed for gluconeogenesis)
- **Whipple's triad**: Symptoms of hypoglycemia + low plasma glucose + relief with glucose administration

## Gluconeogenesis and Diabetes
- In Type 2 Diabetes: **hepatic gluconeogenesis is inappropriately elevated**
- Glucagon signaling is excessive; insulin resistance prevents suppression
- **Metformin**: Reduces hepatic glucose output (first-line drug)
- Fasting hyperglycemia in diabetes is largely due to uncontrolled gluconeogenesis

## Cortisol and Gluconeogenesis
- Cortisol (glucocorticoid) promotes gluconeogenesis by:
  - Inducing PEPCK and G6Pase gene expression
  - Promoting muscle protein breakdown → amino acids for gluconeogenesis
  - Promoting lipolysis → glycerol for gluconeogenesis
- **Cushing syndrome**: Excess cortisol → hyperglycemia (steroid diabetes)
- **Addison disease**: Cortisol deficiency → hypoglycemia (impaired gluconeogenesis)

## Neonatal Hypoglycemia
- Neonates (especially premature, SGA) have limited glycogen stores
- Gluconeogenesis is immature at birth
- **Indian context**: Common in LBW babies in NICUs; requires early feeding or IV dextrose
- Prolonged hypoglycemia → brain damage (brain depends on glucose)

> **Clinical Pearl**: In Indian hospitals, the most common cause of hypoglycemia in a diabetic patient is insulin or sulfonylurea overdose. However, in a non-diabetic, consider alcohol, malnutrition, or adrenal insufficiency. The glucose-alanine cycle is particularly important during prolonged fasting in malnourished patients.`,
        mnemonics: [
          { text: "Von Gierke = Very Glycogen-loaded liver + Hypoglycemia", explanation: "GSD Type I: G6Pase deficiency → cannot release glucose from G6P → hepatomegaly (glycogen + lipid accumulation) + severe fasting hypoglycemia" }
        ],
        keyPoints: ["Von Gierke (GSD I): G6Pase deficiency → fasting hypoglycemia, hepatomegaly, lactic acidosis", "Alcohol-induced hypoglycemia: NAD+ depletion blocks gluconeogenesis", "Metformin: inhibits hepatic gluconeogenesis via AMPK (first-line for T2DM)", "Cortisol promotes gluconeogenesis; deficiency (Addison) → hypoglycemia", "Neonatal hypoglycemia: immature gluconeogenesis, critical in Indian LBW babies"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 19", edition: "31st" }, { book: "Harsh Mohan Pathology", chapter: "Ch 21", edition: "8th" }] },
      { layer: 4, slug: "gluconeogenesis-exam", title: "Gluconeogenesis - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield gluconeogenesis points for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Location: **Liver (90%) + Kidney (10%)**
- 4 bypass enzymes: **Pyruvate carboxylase, PEPCK, FBPase-1, G6Pase**
- Rate-limiting step: **FBPase-1** (some sources say pyruvate carboxylase)
- G6Pase absent in: **Muscle and Brain**
- Von Gierke disease: **G6Pase deficiency**
- Energy cost: **6 ATP equivalents per glucose** (4 ATP + 2 GTP)
- Key activator of pyruvate carboxylase: **Acetyl-CoA**
- Purely ketogenic AAs: **Leucine, Lysine**
- Cori cycle: **Muscle lactate → Liver glucose**
- Glucose-alanine cycle: **Muscle alanine → Liver glucose + urea**
- Alcohol inhibits gluconeogenesis via: **NAD+ depletion (high NADH/NAD+)**
- Metformin mechanism: **AMPK activation → inhibits hepatic gluconeogenesis**
- Glucagon induces: **PEPCK gene expression**
- F2,6BP: **Activates PFK-1, Inhibits FBPase-1**

## Cannot-Make-Glucose Rule
- **Even-chain fatty acids** → Acetyl-CoA → CANNOT make net glucose
- **Odd-chain fatty acids** → Propionyl-CoA → Succinyl-CoA → CAN make glucose
- **Glycerol** (from fat) → CAN make glucose

## Pattern Recognition
- Q: "Fasting hypoglycemia + hepatomegaly + lactic acidosis in child" → **Von Gierke (GSD I)**
- Q: "Hypoglycemia after alcohol on empty stomach" → **Alcohol-induced (NAD+ depletion)**
- Q: "Why can't muscle release glucose?" → **Lacks G6Pase**`,
        mnemonics: [
          { text: "FBPase-1 is the Fasting Brake-Point for gluconeogenesis regulation", explanation: "FBPase-1 is the key regulated step: activated in fasting (low F2,6BP), inhibited in fed state (high F2,6BP)" }
        ],
        keyPoints: ["4 bypass enzymes: Pyruvate carboxylase, PEPCK, FBPase-1, G6Pase", "G6Pase only in liver/kidney", "Even-chain FA cannot make glucose; odd-chain can", "Von Gierke = G6Pase deficiency"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 19", edition: "31st" }] },
      { layer: 5, slug: "gluconeogenesis-recall", title: "Gluconeogenesis - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test for gluconeogenesis.",
        contentMd: `# Active Recall

**Q1:** Where does gluconeogenesis occur?
> Liver (90%) and Kidney (10%) — both have G6Pase

**Q2:** Name the 4 bypass enzymes of gluconeogenesis.
> Pyruvate carboxylase, PEPCK, Fructose-1,6-bisphosphatase, Glucose-6-phosphatase

**Q3:** Why can't even-chain fatty acids produce net glucose?
> They are broken down to acetyl-CoA, which cannot be converted to OAA in mammals (no glyoxylate cycle)

**Q4:** What is the Cori cycle?
> Muscle sends lactate to liver; liver converts it to glucose and sends it back

**Q5:** Why does alcohol cause hypoglycemia?
> Ethanol metabolism consumes NAD+ → high NADH/NAD+ ratio → pyruvate shunted to lactate, OAA to malate → gluconeogenesis blocked

**Q6:** Which enzyme is deficient in Von Gierke disease?
> Glucose-6-phosphatase (GSD Type I)

**Q7:** Why can't skeletal muscle release free glucose into blood?
> Muscle lacks glucose-6-phosphatase

**Q8:** What activates pyruvate carboxylase?
> Acetyl-CoA (signals that OAA is needed to accept more acetyl-CoA in TCA or for gluconeogenesis)

**Q9:** Name the two purely ketogenic amino acids.
> Leucine and Lysine

**Q10:** How does metformin reduce blood glucose?
> Activates AMPK → inhibits hepatic gluconeogenesis (reduces hepatic glucose output)`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering bypass enzymes, substrates, cycles, and clinical disorders"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 19", edition: "31st" }] },
    ],
  },

  // ─── Topic 4: Glycogen Metabolism ─────────────────────────────
  {
    topicCode: "BI-MOD-03-TOP-04",
    layers: [
      { layer: 1, slug: "glycogen-metabolism-foundation", title: "Glycogen Metabolism - Foundation", estimatedMinutes: 20,
        summary: "Glycogen is the storage form of glucose in liver and muscle. Glycogenesis (synthesis) and glycogenolysis (breakdown) are reciprocally regulated by insulin and glucagon/epinephrine. Glycogen storage diseases result from enzyme deficiencies.",
        contentMd: `# Glycogen Metabolism

## Glycogen Structure
- Branched polymer of glucose (alpha-1,4 linear + alpha-1,6 branch points)
- Branches every **8-12 glucose residues**
- Stored as **granules** in cytoplasm with associated enzymes
- **Liver**: 6-8% by weight (maintains blood glucose)
- **Muscle**: 1-2% by weight (fuel for contraction, NOT exported)

## Glycogenesis (Glycogen Synthesis)

| Step | Enzyme | Reaction |
|------|--------|----------|
| 1 | Hexokinase/Glucokinase | Glucose → G6P |
| 2 | Phosphoglucomutase | G6P → G1P |
| 3 | UDP-glucose pyrophosphorylase | G1P + UTP → **UDP-glucose** |
| 4 | **Glycogen synthase** | UDP-glucose + glycogen primer → alpha-1,4 linkages |
| 5 | **Branching enzyme** (amylo-1,4→1,6-transglucosidase) | Creates alpha-1,6 branch points |

- **Glycogenin**: Primer protein, self-glycosylates (adds first ~8 glucose units)
- **Rate-limiting enzyme**: Glycogen synthase
- Active form: **Dephosphorylated** (glycogen synthase a)

## Glycogenolysis (Glycogen Breakdown)

| Step | Enzyme | Reaction |
|------|--------|----------|
| 1 | **Glycogen phosphorylase** | Cleaves alpha-1,4 bonds → **Glucose-1-phosphate** |
| 2 | Debranching enzyme (2 activities) | Transferase: moves 3 glucose units; alpha-1,6-glucosidase: cleaves branch point → free glucose |
| 3 | Phosphoglucomutase | G1P → G6P |
| 4 | G6Pase (liver only) | G6P → Glucose (released to blood) |

- **Rate-limiting enzyme**: Glycogen phosphorylase
- Active form: **Phosphorylated** (phosphorylase a)
- Uses **PLP (B6)** as cofactor

## Hormonal Regulation

| Hormone | Glycogenesis | Glycogenolysis | Mechanism |
|---------|-------------|----------------|-----------|
| Insulin | Stimulates | Inhibits | Activates PP1 (dephosphorylation) |
| Glucagon (liver) | Inhibits | Stimulates | cAMP → PKA → phosphorylation |
| Epinephrine (muscle) | Inhibits | Stimulates | cAMP → PKA; also Ca2+ pathway |

## Glycogen Storage Diseases (GSD)

| Type | Name | Enzyme Deficiency | Features |
|------|------|-------------------|----------|
| I | Von Gierke | Glucose-6-phosphatase | Severe hypoglycemia, hepatomegaly, lactic acidosis |
| II | Pompe | Acid maltase (alpha-1,4-glucosidase) | Cardiomegaly, lysosomal storage |
| III | Cori (Forbes) | Debranching enzyme | Milder hypoglycemia, short outer chains |
| IV | Andersen | Branching enzyme | Cirrhosis (abnormal glycogen = amylopectin-like) |
| V | McArdle | Muscle phosphorylase | Exercise intolerance, myoglobinuria, no rise in blood lactate |
| VI | Hers | Liver phosphorylase | Mild hepatomegaly, mild hypoglycemia |

> **Clinical Pearl**: McArdle disease (GSD V) patients cannot break down muscle glycogen → no lactate production during exercise → ischemic forearm test shows no rise in venous lactate. They experience the 'second wind' phenomenon when fatty acids become available for energy after initial exercise intolerance.`,
        mnemonics: [
          { text: "Very Poor Carbohydrate And Muscle Handling (GSDs I-VI)", explanation: "Von Gierke (I), Pompe (II), Cori (III), Andersen (IV), McArdle (V), Hers (VI) — in order" },
          { text: "Phosphorylase is Phosphorylated = Active; Synthase is Dephosphorylated = Active", explanation: "Opposite phosphorylation states: Phosphorylase a (active) = phosphorylated; Synthase a (active) = dephosphorylated" }
        ],
        keyPoints: ["Glycogen synthase: rate-limiting for synthesis, active when dephosphorylated", "Glycogen phosphorylase: rate-limiting for breakdown, active when phosphorylated (uses PLP)", "Branching enzyme creates alpha-1,6 bonds; debranching enzyme removes them", "Liver glycogen: blood glucose maintenance; Muscle glycogen: local fuel only", "Von Gierke (I): G6Pase; Pompe (II): acid maltase; McArdle (V): muscle phosphorylase", "McArdle: exercise intolerance, no lactate rise, myoglobinuria"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 18: Glycogen Metabolism", edition: "31st" }, { book: "DM Vasudevan", chapter: "Ch 11", edition: "9th" }] },
      { layer: 2, slug: "glycogen-metabolism-mechanism", title: "Glycogen Metabolism - Mechanism", estimatedMinutes: 25,
        summary: "Detailed phosphorylation cascade for glycogen regulation, calcium-mediated activation in muscle, and insulin signaling for glycogen synthesis.",
        contentMd: `# Glycogen Metabolism: Detailed Mechanisms

## Phosphorylation Cascade (Glucagon/Epinephrine)

1. Glucagon (liver) or Epinephrine (muscle) → GPCR → Gs-alpha → **Adenylyl cyclase**
2. Adenylyl cyclase → **cAMP** from ATP
3. cAMP activates **PKA** (Protein Kinase A)
4. PKA phosphorylates:
   - **Phosphorylase kinase** → activates it
   - **Glycogen synthase** → inactivates it (synthase a → b)
5. Active phosphorylase kinase phosphorylates **glycogen phosphorylase** (b → a)
6. **Net result**: Glycogenolysis ON, Glycogenesis OFF

## Calcium Pathway (Muscle — Epinephrine + Neural)
- Muscle contraction releases Ca2+ from sarcoplasmic reticulum
- Ca2+ binds **calmodulin** (regulatory subunit of phosphorylase kinase)
- Phosphorylase kinase activated DIRECTLY by Ca2+ (even without cAMP)
- This ensures glycogenolysis during exercise

## Insulin Signaling → Glycogenesis
1. Insulin → Receptor tyrosine kinase → IRS → PI3K → Akt (PKB)
2. Akt activates **Protein Phosphatase 1 (PP1)**
3. PP1 dephosphorylates:
   - Glycogen synthase (b → a) → ACTIVATED → glycogenesis ON
   - Glycogen phosphorylase (a → b) → INACTIVATED → glycogenolysis OFF
   - Phosphorylase kinase → INACTIVATED
4. Insulin also promotes **GLUT4 translocation** → glucose uptake

## Regulation Summary Table

| Enzyme | Active Form | Activated By | Inactivated By |
|--------|-------------|-------------|----------------|
| Glycogen synthase | Dephosphorylated (a) | PP1 (insulin) | PKA (glucagon) |
| Glycogen phosphorylase | Phosphorylated (a) | Phosphorylase kinase | PP1 (insulin) |
| Phosphorylase kinase | Phosphorylated + Ca2+ | PKA + Ca2+/calmodulin | PP1 |

## Liver vs Muscle Glycogen Differences

| Feature | Liver | Muscle |
|---------|-------|--------|
| Amount | 6-8% by weight (~100g) | 1-2% (~400g total) |
| Purpose | Blood glucose homeostasis | Local fuel for contraction |
| G6Pase | Present | Absent |
| Releases glucose to blood | Yes | No |
| Hormonal response | Glucagon + Insulin | Epinephrine + Insulin |
| Glucagon receptors | Yes | No |
| Ca2+ regulation | Minimal | Major (exercise) |

> **Clinical Pearl**: Understanding the phosphorylation cascade is essential for diabetes pharmacology. GLP-1 receptor agonists and DPP-4 inhibitors (incretins) enhance insulin secretion and thus promote glycogen synthesis in the fed state. These drugs are increasingly used in Indian diabetic management.`,
        mnemonics: [
          { text: "cAMP → PKA → Phosphorylase kinase → Phosphorylase a (CASCADE)", explanation: "The amplification cascade: each step amplifies the signal — one glucagon molecule can mobilize millions of glucose molecules from glycogen" }
        ],
        keyPoints: ["Glucagon → cAMP → PKA → phosphorylation cascade → glycogenolysis", "Ca2+/calmodulin directly activates phosphorylase kinase in muscle", "Insulin → PP1 → dephosphorylation → glycogenesis ON", "Liver has G6Pase (releases glucose to blood); Muscle does NOT", "Muscle uses Ca2+ pathway during exercise; Liver uses glucagon/cAMP pathway"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 18", edition: "31st" }] },
      { layer: 3, slug: "glycogen-metabolism-clinical", title: "Glycogen Metabolism - Clinical", estimatedMinutes: 20,
        summary: "Detailed clinical features and management of glycogen storage diseases, with Indian clinical context.",
        contentMd: `# Clinical Applications

## GSD Type I (Von Gierke)
- **Enzyme**: Glucose-6-phosphatase
- **Pathophysiology**: G6P trapped → excess glycogen + diverted to glycolysis (lactate), HMP shunt (uric acid), and lipogenesis
- **Features**: Severe fasting hypoglycemia (within 3-4 hours), massive hepatomegaly, doll-like facies, lactic acidosis, hyperuricemia → gout, hypertriglyceridemia, growth retardation
- **NO ketosis** (continuous glycolysis provides acetyl-CoA but insulin keeps malonyl-CoA high)
- **Diagnosis**: Liver biopsy, enzyme assay, glucagon stimulation test (no glucose rise but lactate rises)
- **Treatment**: Frequent feeds, uncooked cornstarch (slow glucose release), avoid fructose/galactose

## GSD Type II (Pompe)
- **Enzyme**: Acid alpha-glucosidase (acid maltase) — LYSOSOMAL enzyme
- **Pathophysiology**: Glycogen accumulates in LYSOSOMES (not cytoplasm) → organ damage
- **Infantile form**: Severe cardiomegaly (hypertrophic cardiomyopathy), hypotonia (floppy baby), macroglossia, death by age 2
- **Late-onset**: Progressive proximal myopathy, respiratory failure
- **Only GSD with lysosomal involvement**
- **Treatment**: **ERT** (Enzyme Replacement Therapy — alglucosidase alfa)

## GSD Type V (McArdle)
- **Enzyme**: Muscle glycogen phosphorylase (myophosphorylase)
- **Pathophysiology**: Cannot break down muscle glycogen during exercise
- **Features**: Exercise intolerance, muscle cramps, myoglobinuria (dark urine after exercise)
- **Second wind phenomenon**: After 10 minutes of exercise, fatty acids become available → symptoms improve
- **Ischemic forearm test**: NO rise in venous lactate (diagnostic)
- **Blood glucose**: Normal (liver glycogen metabolism intact)

## GSD Type III (Cori/Forbes)
- **Enzyme**: Debranching enzyme
- **Features**: Similar to Von Gierke but MILDER — because outer chain glucose can still be released
- Abnormal glycogen with short outer branches (limit dextrin)
- Hepatomegaly improves with age (unlike Von Gierke)

## GSD Type IV (Andersen)
- **Enzyme**: Branching enzyme
- **Features**: Abnormal glycogen (amylopectin-like, long unbranched chains)
- Progressive hepatic cirrhosis → liver failure
- Most severe hepatic GSD → often fatal without liver transplant

> **Clinical Pearl**: In India, GSDs are underdiagnosed but becoming more recognized with improved newborn screening. Pompe disease ERT (alglucosidase alfa) is expensive but available through government programs in some states. Early diagnosis through newborn screening is critical for infantile Pompe disease.`,
        mnemonics: [
          { text: "Pompe = Pump is broken (heart)", explanation: "Pompe disease causes severe cardiomegaly — think of the heart pump being damaged by lysosomal glycogen accumulation" },
          { text: "McArdle = Muscle cramps after exercise, NO lactate rise", explanation: "McArdle (GSD V) = muscle phosphorylase deficiency → cannot break muscle glycogen → exercise intolerance + no lactate on ischemic forearm test" }
        ],
        keyPoints: ["Von Gierke (I): G6Pase def → severe hypoglycemia, hepatomegaly, no ketosis", "Pompe (II): only lysosomal GSD, cardiomegaly, ERT available", "McArdle (V): muscle phosphorylase def, exercise intolerance, no lactate rise, second wind", "Cori (III): debranching enzyme → milder than Von Gierke", "Andersen (IV): branching enzyme → cirrhosis (amylopectin-like glycogen)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 18", edition: "31st" }, { book: "Robbins Pathology", chapter: "Ch 6", edition: "10th" }] },
      { layer: 4, slug: "glycogen-metabolism-exam", title: "Glycogen Metabolism - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield GSD comparison table and one-liners for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Glycogen synthase active form: **Dephosphorylated (a)**
- Glycogen phosphorylase active form: **Phosphorylated (a)**, uses **PLP (B6)**
- Primer for glycogen synthesis: **Glycogenin**
- Branching enzyme creates: **alpha-1,6 bonds**
- UDP-glucose is the activated form of glucose for: **Glycogen synthesis**
- Glucagon acts on: **Liver (not muscle)**
- Epinephrine acts on: **Both liver and muscle**
- Muscle cannot release free glucose because: **Lacks G6Pase**
- Only lysosomal GSD: **Pompe (Type II)**
- GSD with cardiomegaly: **Pompe**
- GSD with no lactate rise on exercise: **McArdle (Type V)**
- GSD with cirrhosis: **Andersen (Type IV)**
- Second wind phenomenon: **McArdle disease**

## Master GSD Comparison

| Type | Enzyme | Key Feature |
|------|--------|-------------|
| I (Von Gierke) | G6Pase | Severe hypoglycemia, hepatomegaly |
| II (Pompe) | Acid maltase | Cardiomegaly, lysosomal |
| III (Cori) | Debranching | Milder Von Gierke |
| IV (Andersen) | Branching | Cirrhosis |
| V (McArdle) | Muscle phosphorylase | Exercise intolerance |
| VI (Hers) | Liver phosphorylase | Mild hepatomegaly |

## Pattern Recognition
- Q: "Hepatomegaly + severe hypoglycemia + lactic acidosis in infant" → **Von Gierke**
- Q: "Floppy baby + cardiomegaly" → **Pompe**
- Q: "Exercise intolerance + myoglobinuria + no lactate rise" → **McArdle**
- Q: "Child with progressive cirrhosis" → **Andersen**`,
        mnemonics: [
          { text: "Very Poor Carbohydrate And Muscle Handling", explanation: "GSD Types I-VI: Von Gierke, Pompe, Cori, Andersen, McArdle, Hers" }
        ],
        keyPoints: ["Phosphorylase: active when phosphorylated; Synthase: active when dephosphorylated", "Von Gierke = G6Pase; Pompe = acid maltase (lysosomal); McArdle = muscle phosphorylase", "Only Pompe is lysosomal; Only McArdle has no lactate rise"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 18", edition: "31st" }] },
      { layer: 5, slug: "glycogen-metabolism-recall", title: "Glycogen Metabolism - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test for glycogen metabolism and GSDs.",
        contentMd: `# Active Recall

**Q1:** What is the rate-limiting enzyme of glycogenesis?
> Glycogen synthase (active when dephosphorylated = synthase a)

**Q2:** What is the rate-limiting enzyme of glycogenolysis?
> Glycogen phosphorylase (active when phosphorylated = phosphorylase a)

**Q3:** What cofactor does glycogen phosphorylase require?
> PLP (Pyridoxal phosphate, from vitamin B6)

**Q4:** Why can't muscle export free glucose?
> Muscle lacks glucose-6-phosphatase

**Q5:** What enzyme is deficient in Von Gierke disease?
> Glucose-6-phosphatase (GSD Type I)

**Q6:** What is unique about Pompe disease compared to other GSDs?
> It is the only GSD involving lysosomal enzyme (acid maltase) deficiency

**Q7:** What is the second wind phenomenon?
> In McArdle disease, initial exercise intolerance improves after ~10 min when fatty acids become available as fuel

**Q8:** What does glucagon do to glycogen metabolism in liver?
> Activates adenylyl cyclase → cAMP → PKA → phosphorylates phosphorylase kinase → activates glycogen phosphorylase → glycogenolysis; simultaneously inactivates glycogen synthase

**Q9:** What activates phosphorylase kinase in exercising muscle?
> Ca2+ (released from sarcoplasmic reticulum) binds calmodulin subunit of phosphorylase kinase

**Q10:** What is glycogenin?
> Primer protein for glycogen synthesis; self-glycosylates to add the first ~8 glucose residues`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering glycogen synthesis, breakdown, regulation, and storage diseases"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 18", edition: "31st" }] },
    ],
  },

  // ─── Topic 5: HMP Shunt & Other Pathways ──────────────────────
  {
    topicCode: "BI-MOD-03-TOP-05",
    layers: [
      { layer: 1, slug: "hmp-shunt-foundation", title: "HMP Shunt & Other Pathways - Foundation", estimatedMinutes: 20,
        summary: "The HMP shunt (Pentose Phosphate Pathway) generates NADPH and ribose-5-phosphate. G6PD deficiency is the most common enzymopathy worldwide, highly prevalent in malaria-endemic areas of India.",
        contentMd: `# HMP Shunt (Pentose Phosphate Pathway / Hexose Monophosphate Shunt)

## Overview
- **Location**: Cytoplasm
- **Substrate**: Glucose-6-phosphate (from glycolysis Step 1)
- **Products**: **NADPH** + **Ribose-5-phosphate**
- **Two phases**: Oxidative (irreversible) + Non-oxidative (reversible)

## Oxidative Phase (Irreversible)
| Step | Enzyme | Reaction | Product |
|------|--------|----------|---------|
| 1 | **G6PD** (Glucose-6-phosphate dehydrogenase) | G6P → 6-PG | **NADPH** |
| 2 | 6-Phosphogluconate dehydrogenase | 6-PG → Ribulose-5-P | **NADPH + CO2** |

- **Rate-limiting enzyme**: **G6PD** (Step 1)
- Produces **2 NADPH per glucose** entering the pathway

## Non-Oxidative Phase (Reversible)
- Interconversion of sugars:
  - Ribulose-5-P → **Ribose-5-P** (for nucleotide synthesis)
  - Ribulose-5-P → Xylulose-5-P
- **Transketolase** (needs TPP/B1) and **Transaldolase** shuffle carbons
- Can regenerate G6P → allows continuous NADPH production
- Products: Fructose-6-P and Glyceraldehyde-3-P (re-enter glycolysis)

## Functions of NADPH
| Function | Process |
|----------|---------|
| Fatty acid synthesis | Reductive biosynthesis |
| Cholesterol synthesis | Reductive biosynthesis |
| Steroid hormone synthesis | CYP450 reactions |
| **Glutathione reduction** | GSH regeneration (protects against oxidative stress) |
| **Respiratory burst** | Phagocyte NADPH oxidase (kills bacteria) |
| Nitric oxide synthesis | NOS requires NADPH |
| Drug detoxification | CYP450 monooxygenase system |
| Methemoglobin reduction | Methylene blue pathway |

## Active Tissues (High NADPH Demand)
- **Liver** (fatty acid + cholesterol synthesis)
- **Adrenal cortex** (steroid synthesis)
- **Gonads** (steroid synthesis)
- **Lactating mammary gland** (fat synthesis in milk)
- **RBCs** (glutathione reduction — no other NADPH source)
- **WBCs** (respiratory burst)

## G6PD Deficiency
- **Most common enzymopathy in the world** (~400 million affected)
- **X-linked recessive** (males predominantly affected)
- **Prevalence**: High in malaria-endemic areas (India, Africa, Mediterranean, SE Asia)
- **Indian prevalence**: 5-15% in various populations (tribal, scheduled castes)
- **Mechanism**: Cannot generate NADPH → cannot reduce glutathione → RBCs vulnerable to oxidative stress → hemolysis

### Triggers for Hemolysis
- **Drugs**: Primaquine, dapsone, sulfonamides, nitrofurantoin, aspirin (high dose)
- **Infections**: Most common trigger
- **Fava beans** (favism) — contain oxidants (vicine, convicine)
- **Naphthalene** (moth balls)
- **Henna** (relevant in Indian context — used in festivals)

### Clinical Features
- Episodic hemolytic anemia (triggered)
- **Jaundice** (unconjugated hyperbilirubinemia)
- **Dark urine** (hemoglobinuria)
- Peripheral smear: **Heinz bodies** (denatured Hb) and **Bite cells** (after splenic removal of Heinz bodies)

> **Clinical Pearl**: G6PD deficiency is protective against Plasmodium falciparum malaria — similar to sickle cell trait. In India, it is prevalent in tribal areas of Odisha, Gujarat, and Maharashtra that are also malaria-endemic. Always screen for G6PD before prescribing primaquine for P. vivax radical cure.`,
        mnemonics: [
          { text: "G6PD makes NADPH; NADPH protects RBCs (via GSH)", explanation: "G6PD → NADPH → glutathione reductase → reduced glutathione (GSH) → neutralizes reactive oxygen species. Without G6PD, RBCs cannot handle oxidative stress → hemolysis" },
          { text: "HEINZ bodies + BITE cells = G6PD deficiency", explanation: "Heinz bodies are precipitated denatured hemoglobin (seen with crystal violet stain). Bite cells result from splenic macrophages 'biting out' the Heinz bodies" }
        ],
        keyPoints: ["HMP shunt: cytoplasm; produces NADPH + Ribose-5-P", "G6PD is rate-limiting; 2 NADPH per G6P in oxidative phase", "NADPH: fatty acid synthesis, glutathione reduction, respiratory burst, steroid synthesis", "G6PD deficiency: most common enzymopathy, X-linked, protective against malaria", "Triggers: primaquine, dapsone, infections, fava beans, naphthalene, henna", "Peripheral smear: Heinz bodies (denatured Hb) + Bite cells"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 20: HMP Shunt", edition: "31st" }, { book: "Harsh Mohan Pathology", chapter: "Ch 12", edition: "8th" }] },
      { layer: 2, slug: "hmp-shunt-mechanism", title: "HMP Shunt & Other Pathways - Mechanism", estimatedMinutes: 30,
        summary: "Detailed glutathione defense mechanism, NADPH oxidase respiratory burst, polyol pathway, and uronic acid pathway. Regulation of HMP shunt by NADPH/NADP+ ratio.",
        contentMd: `# HMP Shunt: Detailed Mechanisms

## Glutathione Defense System
1. **NADPH** (from HMP shunt) → **Glutathione reductase** → regenerates **GSH** (reduced glutathione) from GSSG
2. **GSH** → **Glutathione peroxidase** (selenium-dependent) → neutralizes H2O2 and lipid peroxides
3. **GSH** → directly scavenges free radicals
4. In G6PD deficiency: NADPH depleted → GSH cannot be regenerated → H2O2 accumulates → oxidizes Hb → Heinz bodies → hemolysis

## Respiratory Burst (NADPH Oxidase)
- **Phagocytes** (neutrophils, macrophages) use NADPH oxidase to kill bacteria
- NADPH + O2 → NADP+ + **superoxide (O2-)**
- Superoxide → H2O2 (by superoxide dismutase)
- H2O2 + Cl- → **HOCl** (hypochlorous acid — by myeloperoxidase, MPO)
- **Chronic Granulomatous Disease (CGD)**: NADPH oxidase deficiency → cannot generate respiratory burst → recurrent infections with catalase-positive organisms (S. aureus, Aspergillus, Serratia, Nocardia, Burkholderia)
- **NBT test** (Nitroblue Tetrazolium): Negative in CGD (no superoxide to reduce NBT dye)

## Regulation of HMP Shunt
- **NADP+/NADPH ratio**: Main regulator
- When NADPH is consumed (FA synthesis, oxidative stress) → NADP+ rises → G6PD activated → more NADPH produced
- **Insulin** stimulates G6PD expression
- **Lipogenesis** (fed state) increases NADPH consumption → drives HMP shunt

## Other Pathways of Glucose Metabolism

### Polyol Pathway (Sorbitol Pathway)
1. **Aldose reductase**: Glucose → **Sorbitol** (uses NADPH)
2. **Sorbitol dehydrogenase**: Sorbitol → **Fructose** (produces NADH)

- Normally minor pathway
- In **diabetes** (hyperglycemia): Excess glucose enters polyol pathway
- Sorbitol cannot cross cell membranes → **osmotic damage**
- Lens: Sorbitol accumulates → **diabetic cataracts**
- Schwann cells: → **diabetic neuropathy**
- Retina: → **diabetic retinopathy**
- **Galactosemia**: Galactose → Galactitol (by aldose reductase) → cataracts

### Uronic Acid Pathway
1. G6P → G1P → UDP-glucose → UDP-glucuronic acid → **Glucuronate**
2. Glucuronic acid → L-gulonate → L-xylulose → Xylitol → HMP shunt entry
3. Also: L-gulonate → Ascorbic acid (vitamin C) in most animals
4. **Humans, primates, guinea pigs** CANNOT synthesize vitamin C (lack L-gulonolactone oxidase)

### Essential Pentosuria
- Deficiency of **L-xylulose reductase** (in uronic acid pathway)
- L-xylulose excreted in urine
- **Benign** condition — often discovered incidentally
- Not to be confused with diabetes (pentose, not glucose, in urine)

### Fructose Metabolism
- **Fructokinase** (liver): Fructose → Fructose-1-phosphate (F1P)
- **Aldolase B**: F1P → DHAP + Glyceraldehyde
- Fructose bypasses PFK-1 regulation → rapid entry into glycolysis → may contribute to fatty liver and metabolic syndrome

> **Clinical Pearl**: Diabetic complications from the polyol pathway are particularly relevant in India, where diabetic neuropathy and cataracts are among the most common presentations. Aldose reductase inhibitors have been investigated but none are widely used clinically. Strict glycemic control remains the primary prevention strategy.`,
        mnemonics: [
          { text: "CGD = Catalase-positive Granulomatous Disease", explanation: "In CGD, NADPH oxidase is deficient → no H2O2. Catalase-negative bacteria (like Strep) produce their own H2O2 which neutrophils can use. Catalase-positive bacteria (Staph, Aspergillus) destroy their own H2O2 → neutrophils have no killing mechanism" },
          { text: "SorBLINDol (Sorbitol makes you blind)", explanation: "Sorbitol accumulation from polyol pathway in diabetes causes osmotic damage → cataracts (blindness), neuropathy, retinopathy" }
        ],
        keyPoints: ["Glutathione defense: NADPH → glutathione reductase → GSH → glutathione peroxidase → neutralizes H2O2", "CGD: NADPH oxidase deficiency → recurrent catalase-positive infections; diagnosed by NBT test", "Polyol pathway: aldose reductase converts glucose → sorbitol → diabetic cataracts/neuropathy", "Humans cannot synthesize vitamin C (lack L-gulonolactone oxidase)", "Fructose bypasses PFK-1 → unregulated entry into glycolysis → metabolic consequences"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 20-21", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 20", edition: "9th" }] },
      { layer: 3, slug: "hmp-shunt-clinical", title: "HMP Shunt & Other Pathways - Clinical", estimatedMinutes: 20,
        summary: "Clinical details of G6PD deficiency management, diabetic polyol pathway complications, and CGD in Indian context.",
        contentMd: `# Clinical Applications

## G6PD Deficiency — Management
- **Prevention**: Avoid triggers (drug list, fava beans, naphthalene)
- **Acute hemolysis**: Supportive (hydration, transfusion if severe, treat infection)
- **Screening**: Before prescribing primaquine, dapsone, or rasburicase
- **Neonatal jaundice**: G6PD deficiency is an important cause in India; may need phototherapy/exchange transfusion
- **WHO Class variants**:
  - Class I: Chronic non-spherocytic hemolytic anemia (severe)
  - Class II: Mediterranean variant (<10% activity, severe)
  - Class III: A- variant (10-60%, moderate — common in Africa)
  - Class IV: Normal activity
  - Class V: Increased activity

### G6PD Deficiency and Malaria in India
- G6PD deficiency prevalent in tribal areas overlapping with malaria zones
- **P. vivax treatment requires primaquine** (14-day radical cure for liver hypnozoites)
- Screening for G6PD is essential before primaquine
- **Tafenoquine** (new 8-aminoquinoline): Also requires G6PD screening
- India's National Malaria Control Programme recommends G6PD testing before primaquine

## Diabetic Complications (Polyol Pathway)
- **Cataracts**: Most common eye complication in Indian diabetics
  - Mechanism: Sorbitol/galactitol accumulation → osmotic swelling → lens opacity
  - Aldose reductase inhibitors (under research)
- **Peripheral neuropathy**: Affects 20-30% of Indian diabetics
  - Polyol pathway + advanced glycation end products (AGEs) + oxidative stress
- **Retinopathy**: Leading cause of preventable blindness in working-age Indians
  - Annual fundoscopy screening recommended

## Chronic Granulomatous Disease (CGD)
- **X-linked** (most common form, 65%) or Autosomal recessive
- Deficiency of NADPH oxidase components (gp91-phox, p47-phox, etc.)
- **Recurrent infections** with catalase-positive organisms:
  - **S. aureus** (most common)
  - **Aspergillus** (most common cause of death)
  - Serratia, Nocardia, Burkholderia cepacia
- **Granuloma formation** (macrophages wall off organisms they cannot kill)
- **Diagnosis**: DHR flow cytometry (replacing NBT test)
- **Treatment**: Prophylactic TMP-SMX + itraconazole; IFN-gamma; bone marrow transplant (curative)

## Transketolase and Wernicke
- Transketolase (non-oxidative HMP) requires **TPP (Thiamine/B1)**
- **Erythrocyte transketolase activity** is the gold standard test for B1 deficiency
- TPP added to blood sample → if activity increases > 25%, it confirms B1 deficiency

> **Clinical Pearl**: In India's National Vector Borne Disease Control Programme, G6PD testing is now recommended before administering primaquine for P. vivax malaria. Point-of-care G6PD tests (like BinaxNOW) are being introduced in endemic districts for field-level screening.`,
        mnemonics: [
          { text: "SNAB for CGD organisms", explanation: "Catalase-positive organisms in CGD: Staphylococcus aureus, Nocardia, Aspergillus, Burkholderia cepacia (+ Serratia)" }
        ],
        keyPoints: ["G6PD: screen before primaquine in India's malaria areas; important cause of neonatal jaundice", "G6PD A- variant (Africa), Mediterranean variant (more severe)", "Polyol pathway: diabetic cataracts/neuropathy/retinopathy (very common in India)", "CGD: NADPH oxidase def → catalase-positive infections (S. aureus, Aspergillus)", "Transketolase: requires TPP; erythrocyte transketolase activity tests B1 status"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 20", edition: "31st" }, { book: "Robbins Pathology", chapter: "Ch 5, 12", edition: "10th" }] },
      { layer: 4, slug: "hmp-shunt-exam", title: "HMP Shunt & Other Pathways - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield HMP shunt and G6PD deficiency points for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- HMP shunt location: **Cytoplasm**
- Rate-limiting enzyme: **G6PD**
- Products: **NADPH + Ribose-5-phosphate**
- NADPH used for: **FA synthesis, GSH reduction, respiratory burst, steroid synthesis**
- G6PD deficiency inheritance: **X-linked recessive**
- Most common enzymopathy: **G6PD deficiency**
- G6PD deficiency protective against: **Plasmodium falciparum malaria**
- Heinz bodies: **Denatured Hb precipitates** (seen with crystal violet stain)
- Bite cells: **RBCs after splenic removal of Heinz bodies**
- Primaquine hemolysis mechanism: **Oxidative stress in G6PD-deficient RBCs**
- NADPH oxidase deficiency: **CGD**
- NBT test: **Negative in CGD**
- Polyol pathway enzyme: **Aldose reductase** (glucose → sorbitol)
- Humans cannot make vitamin C because: **Lack L-gulonolactone oxidase**
- Transketolase cofactor: **TPP (Thiamine/B1)**

## Comparison: G6PD Deficiency vs PK Deficiency

| Feature | G6PD Deficiency | PK Deficiency |
|---------|----------------|---------------|
| Pathway | HMP shunt | Glycolysis |
| Inheritance | X-linked | Autosomal recessive |
| Hemolysis | Episodic (triggered) | Chronic |
| Peripheral smear | Heinz bodies, bite cells | Echinocytes |
| 2,3-BPG | Normal | Increased |

## Pattern Recognition
- Q: "Hemolysis after primaquine" → **G6PD deficiency**
- Q: "Heinz bodies on smear" → **G6PD deficiency**
- Q: "Recurrent catalase-positive infections + granulomas" → **CGD**
- Q: "Diabetic cataract mechanism" → **Polyol pathway (sorbitol accumulation)**`,
        mnemonics: [
          { text: "G6PD = Guard 6 Protecting against Damage", explanation: "G6PD generates NADPH which regenerates GSH (glutathione) that guards RBCs against oxidative damage" }
        ],
        keyPoints: ["G6PD: X-linked, most common enzymopathy, Heinz bodies + bite cells", "CGD: NADPH oxidase def, catalase-positive infections, NBT test negative", "Polyol pathway: aldose reductase, diabetic cataracts/neuropathy", "Transketolase needs TPP (B1)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 20", edition: "31st" }] },
      { layer: 5, slug: "hmp-shunt-recall", title: "HMP Shunt & Other Pathways - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test for HMP shunt, G6PD deficiency, and related pathways.",
        contentMd: `# Active Recall

**Q1:** What are the two products of the HMP shunt?
> NADPH and Ribose-5-phosphate

**Q2:** What is the rate-limiting enzyme of the HMP shunt?
> G6PD (Glucose-6-phosphate dehydrogenase)

**Q3:** How does G6PD deficiency cause hemolysis?
> No NADPH → cannot regenerate GSH → H2O2 accumulates → oxidizes Hb → Heinz bodies → RBC destruction

**Q4:** Name 3 drugs that trigger hemolysis in G6PD deficiency.
> Primaquine, Dapsone, Sulfonamides (also nitrofurantoin, aspirin in high dose)

**Q5:** What are Heinz bodies and bite cells?
> Heinz bodies: precipitated denatured Hb (crystal violet stain). Bite cells: RBCs after splenic macrophages remove Heinz bodies

**Q6:** What is NADPH oxidase and what happens when it is deficient?
> Enzyme in phagocytes that generates superoxide for bacterial killing. Deficiency → CGD → recurrent catalase-positive infections

**Q7:** What does the polyol pathway convert glucose to?
> Sorbitol (via aldose reductase, using NADPH), then Fructose (via sorbitol dehydrogenase)

**Q8:** Why do humans need dietary vitamin C?
> We lack L-gulonolactone oxidase (last enzyme in vitamin C synthesis from the uronic acid pathway)

**Q9:** What cofactor does transketolase need?
> TPP (Thiamine pyrophosphate, from vitamin B1)

**Q10:** Why is G6PD screening required before primaquine in India?
> G6PD deficiency is common in malaria-endemic tribal areas; primaquine causes oxidative hemolysis in G6PD-deficient patients`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering HMP shunt, G6PD deficiency, CGD, polyol pathway, and vitamin C"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 20", edition: "31st" }] },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // MODULE 4: LIPID METABOLISM (BI-MOD-04) — 5 Topics
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: Beta-Oxidation of Fatty Acids ──────────────────
  {
    topicCode: "BI-MOD-04-TOP-01",
    layers: [
      { layer: 1, slug: "beta-oxidation-foundation", title: "Beta-Oxidation of Fatty Acids - Foundation", estimatedMinutes: 20,
        summary: "Beta-oxidation is the mitochondrial pathway for fatty acid breakdown. Fatty acids are activated to acyl-CoA, transported via the carnitine shuttle, and sequentially cleaved into acetyl-CoA units generating NADH and FADH2.",
        contentMd: `# Beta-Oxidation of Fatty Acids

## Overview
- **Location**: Mitochondrial matrix (also peroxisomes for very long-chain FA)
- **Function**: Oxidizes fatty acids to acetyl-CoA → enters TCA cycle → ATP
- **When**: Fasting, starvation, prolonged exercise (major fuel source)
- Named beta-oxidation because oxidation occurs at the **beta-carbon** (C-3)

## Three Stages

### Stage 1: Activation (Cytoplasm)
- Fatty acid + CoA + ATP → **Fatty acyl-CoA** + AMP + PPi
- Enzyme: **Acyl-CoA synthetase** (thiokinase) — outer mitochondrial membrane
- Costs **2 ATP equivalents** (ATP → AMP, equivalent to 2 ATP → 2 ADP)

### Stage 2: Transport (Carnitine Shuttle)
Long-chain acyl-CoA cannot cross inner mitochondrial membrane directly:

1. **CPT-I** (Carnitine Palmitoyltransferase I) — outer membrane
   - Acyl-CoA + Carnitine → **Acyl-carnitine** + CoA
   - **Rate-limiting step** of beta-oxidation
   - Inhibited by **Malonyl-CoA** (fed state signal — prevents FA oxidation when synthesis is active)

2. **Translocase** (Carnitine-acylcarnitine translocase) — inner membrane
   - Shuttles acyl-carnitine IN, free carnitine OUT

3. **CPT-II** — inner membrane (matrix side)
   - Acyl-carnitine + CoA → **Acyl-CoA** + Carnitine

### Stage 3: Beta-Oxidation Spiral (Mitochondrial Matrix)
Each cycle removes 2 carbons as acetyl-CoA:

| Step | Enzyme | Coenzyme | Product |
|------|--------|----------|---------|
| 1. Oxidation | Acyl-CoA dehydrogenase | FAD → **FADH2** | Enoyl-CoA |
| 2. Hydration | Enoyl-CoA hydratase | H2O | L-3-Hydroxyacyl-CoA |
| 3. Oxidation | L-3-Hydroxyacyl-CoA dehydrogenase | NAD+ → **NADH** | 3-Ketoacyl-CoA |
| 4. Thiolysis | Thiolase (beta-ketothiolase) | CoA | **Acetyl-CoA** + shortened acyl-CoA |

## Energy Yield: Palmitate (C16:0) — Most Common FA

- Number of cycles: **(n/2) - 1 = 7 cycles** (for 16C)
- Products: **8 Acetyl-CoA** + **7 FADH2** + **7 NADH**
- ATP calculation:
  - 8 Acetyl-CoA × 10 ATP (TCA+ETC) = 80 ATP
  - 7 NADH × 2.5 = 17.5 ATP
  - 7 FADH2 × 1.5 = 10.5 ATP
  - Minus 2 ATP (activation)
  - **Total: 106 ATP** per palmitate

## Odd-Chain Fatty Acid Oxidation
- Last cycle yields **propionyl-CoA (3C)** instead of acetyl-CoA
- Propionyl-CoA → Methylmalonyl-CoA → Succinyl-CoA
- Requires: **Biotin** (carboxylation) and **Vitamin B12** (isomerization)
- Succinyl-CoA enters TCA cycle → this is gluconeogenic (unlike acetyl-CoA)

> **Clinical Pearl**: Carnitine deficiency can be primary (genetic transporter defect) or secondary (valproic acid therapy, hemodialysis). It causes muscle weakness, cardiomyopathy, and hypoketotic hypoglycemia because fatty acids cannot enter mitochondria for oxidation.`,
        mnemonics: [
          { text: "CPT-I = Carnitine Permits Transport In (rate-limiting, inhibited by malonyl-CoA)", explanation: "CPT-I on the outer mitochondrial membrane is the rate-limiting step; malonyl-CoA (from FA synthesis) inhibits it, preventing futile cycling" },
          { text: "106 ATP from Palmitate (C16)", explanation: "Palmitate (16C) yields 8 acetyl-CoA + 7 FADH2 + 7 NADH = 108 ATP minus 2 for activation = 106 net ATP" }
        ],
        keyPoints: ["Beta-oxidation: mitochondrial matrix; activated FA transported via carnitine shuttle", "CPT-I: rate-limiting step, inhibited by malonyl-CoA (fed state signal)", "Each cycle: 1 FADH2 + 1 NADH + 1 Acetyl-CoA; n/2 - 1 cycles for n-carbon FA", "Palmitate (C16): 106 net ATP", "Odd-chain FA → propionyl-CoA → methylmalonyl-CoA → succinyl-CoA (needs B12, biotin)", "Carnitine deficiency: hypoketotic hypoglycemia, cardiomyopathy"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 22: Oxidation of Fatty Acids", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 22", edition: "9th" }] },
      { layer: 2, slug: "beta-oxidation-mechanism", title: "Beta-Oxidation of Fatty Acids - Mechanism", estimatedMinutes: 30,
        summary: "Regulation of beta-oxidation, MCAD deficiency, peroxisomal oxidation, and omega-oxidation. Reciprocal regulation with fatty acid synthesis.",
        contentMd: `# Beta-Oxidation: Detailed Mechanisms

## Regulation

### Fed State (Insulin)
- Acetyl-CoA carboxylase (ACC) active → **Malonyl-CoA** high
- Malonyl-CoA inhibits **CPT-I** → beta-oxidation OFF
- FA synthesis ON, FA oxidation OFF

### Fasted State (Glucagon/Epinephrine)
- ACC phosphorylated (by AMPK) → INACTIVE → Malonyl-CoA low
- CPT-I uninhibited → beta-oxidation ON
- Hormone-sensitive lipase activated → FFA released from adipose → transported to liver → oxidized

### Key Regulatory Principle
**Malonyl-CoA** is the master switch:
- High malonyl-CoA (fed) → FA synthesis ON, beta-oxidation OFF
- Low malonyl-CoA (fasted) → FA synthesis OFF, beta-oxidation ON
- This prevents futile cycling of simultaneous synthesis and degradation

## Unsaturated Fatty Acid Oxidation
- Extra enzymes needed for double bonds:
  - **Enoyl-CoA isomerase**: Converts cis-delta-3 → trans-delta-2 (for odd-positioned double bonds)
  - **2,4-Dienoyl-CoA reductase**: Uses NADPH (for even-positioned double bonds)
- Net: 1 less FADH2 produced per pre-existing double bond (one oxidation step skipped)

## Medium-Chain Acyl-CoA Dehydrogenase (MCAD) Deficiency
- **Most common inherited disorder of fatty acid oxidation**
- **Autosomal recessive**; Common in Northern European descent
- Cannot oxidize medium-chain (C6-C12) fatty acids
- **Clinical presentation**: Hypoketotic hypoglycemia (no ketones despite fasting)
- Triggered by **prolonged fasting** or illness in children
- **Diagnosis**: Elevated plasma octanoylcarnitine (C8); urine organic acids show medium-chain dicarboxylic acids
- **Treatment**: Avoid fasting, frequent meals, carnitine supplementation

## Peroxisomal Beta-Oxidation
- Oxidizes **very long-chain fatty acids** (VLCFA, > C20)
- First step uses **oxidase** (produces H2O2, not FADH2)
- H2O2 broken down by **catalase**
- Shortened chains (< C8) transferred to mitochondria for completion
- **Zellweger syndrome**: Peroxisome assembly defect → VLCFA accumulation, severe neurological disease, death in infancy
- **X-linked adrenoleukodystrophy (X-ALD)**: VLCFA accumulation in adrenal cortex and brain white matter (featured in the movie "Lorenzo's Oil")

## Alpha-Oxidation
- Oxidation at the **alpha-carbon** (C-2)
- Used for branched-chain fatty acids (e.g., **phytanic acid** from dairy, meat)
- **Refsum disease**: Alpha-oxidase (phytanoyl-CoA hydroxylase) deficiency → phytanic acid accumulates
- Features: Peripheral neuropathy, cerebellar ataxia, retinitis pigmentosa

## Omega-Oxidation
- Oxidation at the **terminal methyl group** (omega carbon)
- Minor pathway (ER microsomes)
- Produces **dicarboxylic acids**
- Becomes significant when beta-oxidation is impaired (provides alternative)

> **Clinical Pearl**: MCAD deficiency is included in newborn screening programs in many countries. It presents as sudden death in infants during an intercurrent illness — often initially mistaken for SIDS. In India, tandem mass spectrometry-based newborn screening is being introduced in some centers and can detect MCAD deficiency.`,
        mnemonics: [
          { text: "Malonyl-CoA = Master OFF switch for beta-oxidation", explanation: "Malonyl-CoA (first intermediate of FA synthesis) inhibits CPT-I, preventing FA entry into mitochondria. This ensures FA synthesis and degradation don't occur simultaneously" },
          { text: "MCAD = Medium Chain Avoids Degradation (most common FA oxidation disorder)", explanation: "MCAD deficiency: cannot oxidize C6-C12 FAs → hypoketotic hypoglycemia during fasting" }
        ],
        keyPoints: ["Malonyl-CoA: fed → high (inhibits CPT-I, beta-ox OFF); fasted → low (CPT-I active, beta-ox ON)", "MCAD deficiency: most common FA oxidation disorder; hypoketotic hypoglycemia", "Peroxisomes oxidize VLCFA (>C20); Zellweger syndrome = peroxisome biogenesis defect", "X-ALD: VLCFA accumulation in brain/adrenal; X-linked", "Refsum disease: phytanic acid accumulation (alpha-oxidation defect)", "Unsaturated FA: need isomerase and reductase; 1 less FADH2 per double bond"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 22", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 22", edition: "9th" }] },
      { layer: 3, slug: "beta-oxidation-clinical", title: "Beta-Oxidation of Fatty Acids - Clinical", estimatedMinutes: 20,
        summary: "Clinical disorders of fatty acid oxidation: carnitine deficiency, MCAD, peroxisomal disorders, and Jamaican vomiting sickness.",
        contentMd: `# Clinical Applications

## Carnitine Deficiency
- **Primary**: Genetic defect in OCTN2 carnitine transporter → systemic carnitine loss
- **Secondary**: Valproic acid, hemodialysis, organic acidemias, vegetarian diet (carnitine mainly from meat)
- **Features**: Hypoketotic hypoglycemia, muscle weakness, cardiomyopathy
- **Diagnosis**: Low plasma free carnitine, elevated acylcarnitine/free carnitine ratio
- **Treatment**: L-carnitine supplementation

## CPT-I Deficiency (Hepatic)
- Cannot transport long-chain FA into liver mitochondria
- **Hypoketotic hypoglycemia** (liver cannot oxidize FA → cannot make ketones)
- Elevated long-chain acylcarnitines in blood
- Hepatomegaly, liver failure during fasting

## CPT-II Deficiency
- **Most common inherited disorder of lipid metabolism in adults**
- Presents with: Recurrent **rhabdomyolysis** (muscle pain, myoglobinuria) triggered by prolonged exercise, fasting, cold
- Serum CK markedly elevated during attacks
- More severe neonatal form: cardiomyopathy, seizures

## Jamaican Vomiting Sickness
- Caused by **Hypoglycin A** (in unripe ackee fruit)
- Inhibits short- and medium-chain acyl-CoA dehydrogenases
- Results in: Severe hypoglycemia, vomiting, liver failure, coma
- Similar biochemical picture to MCAD deficiency

## Dicarboxylic Aciduria
- When beta-oxidation is impaired → omega-oxidation becomes prominent
- Medium-chain fatty acids undergo omega-oxidation → dicarboxylic acids in urine
- Seen in: MCAD deficiency, carnitine deficiency, Reye syndrome

## Reye Syndrome
- Acute encephalopathy + fatty liver in children
- Associated with: Aspirin use during viral infections (influenza, chickenpox)
- **Mechanism**: Mitochondrial damage → impaired beta-oxidation and urea cycle
- Microvesicular fatty liver, cerebral edema
- **Prevention**: Avoid aspirin in children (use paracetamol instead)

> **Clinical Pearl**: In India, Reye syndrome has been reported with aspirin use in children during dengue and other viral fevers. The Indian Academy of Pediatrics (IAP) strongly recommends against aspirin use in children under 12. Paracetamol is the preferred antipyretic in pediatric practice.`,
        mnemonics: [
          { text: "Hypo-Keto-Hypo-Glycemia = FA Oxidation Defects", explanation: "Hypoketotic hypoglycemia is the hallmark of fatty acid oxidation disorders (MCAD, carnitine def, CPT-I def) — liver cannot make ketones from FA, and gluconeogenesis fails without FA-derived ATP" }
        ],
        keyPoints: ["Carnitine deficiency: hypoketotic hypoglycemia, cardiomyopathy; secondary causes include valproic acid", "CPT-II deficiency: most common adult lipid disorder, recurrent rhabdomyolysis", "MCAD: most common inherited FA oxidation defect; hypoketotic hypoglycemia in children", "Reye syndrome: aspirin + viral infection → fatty liver + encephalopathy; avoid aspirin in children", "Hypoketotic hypoglycemia = hallmark of FA oxidation defects"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 22", edition: "31st" }, { book: "Nelson Pediatrics", chapter: "Metabolic Diseases", edition: "21st" }] },
      { layer: 4, slug: "beta-oxidation-exam", title: "Beta-Oxidation of Fatty Acids - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield beta-oxidation points for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Beta-oxidation location: **Mitochondrial matrix**
- Rate-limiting step: **CPT-I** (inhibited by malonyl-CoA)
- Activation cost: **2 ATP equivalents** (ATP → AMP + PPi)
- Palmitate (C16) ATP yield: **106 net ATP**
- Cycles for C16: **7 cycles** (n/2 - 1)
- Products per cycle: **1 FADH2 + 1 NADH + 1 Acetyl-CoA**
- Odd-chain FA final product: **Propionyl-CoA** (→ succinyl-CoA, needs B12 + biotin)
- Most common FA oxidation defect: **MCAD deficiency**
- MCAD diagnosis: **Elevated C8 (octanoylcarnitine)**
- Hallmark of FA oxidation defects: **Hypoketotic hypoglycemia**
- VLCFA oxidation: **Peroxisomes** (first step makes H2O2)
- Zellweger syndrome: **Peroxisome biogenesis defect**
- X-ALD: **VLCFA accumulation in brain + adrenal**
- Refsum disease: **Phytanic acid (alpha-oxidation defect)**
- Reye syndrome trigger: **Aspirin in children during viral infection**

## Pattern Recognition
- Q: "Fasting infant with hypoglycemia and NO ketones" → **FA oxidation defect (MCAD, carnitine def)**
- Q: "Adult with recurrent rhabdomyolysis after exercise" → **CPT-II deficiency**
- Q: "Infant with dysmorphism + VLCFA elevated" → **Zellweger syndrome**
- Q: "Peripheral neuropathy + retinitis pigmentosa + ataxia" → **Refsum disease**`,
        mnemonics: [
          { text: "CPT-I: rate-limiting; Malonyl-CoA: master inhibitor", explanation: "CPT-I is the committed step; Malonyl-CoA from FA synthesis inhibits it to prevent futile cycling" }
        ],
        keyPoints: ["CPT-I rate-limiting, malonyl-CoA inhibits", "Palmitate: 106 ATP, 7 cycles", "MCAD: most common, hypoketotic hypoglycemia, C8 elevated", "Peroxisomes for VLCFA; Zellweger = peroxisome assembly defect"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 22", edition: "31st" }] },
      { layer: 5, slug: "beta-oxidation-recall", title: "Beta-Oxidation of Fatty Acids - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test for fatty acid oxidation.",
        contentMd: `# Active Recall

**Q1:** Where does beta-oxidation occur?
> Mitochondrial matrix (peroxisomes for VLCFA)

**Q2:** What is the rate-limiting step of beta-oxidation?
> CPT-I (carnitine palmitoyltransferase I) — inhibited by malonyl-CoA

**Q3:** How many ATP does complete oxidation of palmitate (C16) yield?
> 106 net ATP (8 acetyl-CoA + 7 FADH2 + 7 NADH minus 2 for activation)

**Q4:** What is the product of odd-chain FA oxidation?
> Propionyl-CoA (3C) → converted to succinyl-CoA (needs biotin + B12)

**Q5:** What is the hallmark of fatty acid oxidation disorders?
> Hypoketotic hypoglycemia (liver cannot make ketones from FA)

**Q6:** What is the most common inherited FA oxidation disorder?
> MCAD deficiency (Medium-chain Acyl-CoA Dehydrogenase)

**Q7:** What is the carnitine shuttle?
> CPT-I (acyl-CoA → acyl-carnitine, outer membrane) → translocase → CPT-II (acyl-carnitine → acyl-CoA, inner membrane)

**Q8:** What causes Zellweger syndrome?
> Peroxisome biogenesis defect → cannot oxidize VLCFA → VLCFA accumulation

**Q9:** What is Reye syndrome?
> Aspirin use during viral infection in children → acute encephalopathy + fatty liver (impaired mitochondrial FA oxidation)

**Q10:** Why does malonyl-CoA inhibit CPT-I?
> Prevents simultaneous FA synthesis and degradation (futile cycle); malonyl-CoA is the first committed intermediate of FA synthesis`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering carnitine shuttle, energetics, disorders, and regulation"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 22", edition: "31st" }] },
    ],
  },

  // ─── Topic 2: Ketone Body Metabolism ──────────────────────────
  {
    topicCode: "BI-MOD-04-TOP-02",
    layers: [
      { layer: 1, slug: "ketone-bodies-foundation", title: "Ketone Body Metabolism - Foundation", estimatedMinutes: 20,
        summary: "Ketone bodies (acetoacetate, beta-hydroxybutyrate, acetone) are synthesized in the liver from acetyl-CoA during fasting/starvation. They serve as alternative fuel for brain, heart, and muscle when glucose is scarce.",
        contentMd: `# Ketone Body Metabolism

## The Three Ketone Bodies
1. **Acetoacetate** (AcAc) — primary ketone body
2. **Beta-hydroxybutyrate** (BHB) — most abundant in blood (not a true ketone chemically)
3. **Acetone** — formed by spontaneous decarboxylation of AcAc; volatile, exhaled

## Ketogenesis (Synthesis — LIVER Only)

### Location: Hepatic mitochondrial matrix
### Substrate: Acetyl-CoA (from beta-oxidation of fatty acids)

### Pathway
1. 2 Acetyl-CoA → **Acetoacetyl-CoA** (by thiolase)
2. Acetoacetyl-CoA + Acetyl-CoA → **HMG-CoA** (by **HMG-CoA synthase** — **rate-limiting**)
3. HMG-CoA → **Acetoacetate** + Acetyl-CoA (by **HMG-CoA lyase**)
4. Acetoacetate → **Beta-hydroxybutyrate** (by BHB dehydrogenase, using NADH)
5. Acetoacetate → **Acetone** (spontaneous decarboxylation, non-enzymatic)

> **Important**: HMG-CoA synthase (mitochondrial, ketogenesis) is DIFFERENT from HMG-CoA reductase (ER, cholesterol synthesis)

### Conditions Favoring Ketogenesis
- Excess acetyl-CoA (from increased beta-oxidation during fasting)
- OAA depleted (diverted to gluconeogenesis) → acetyl-CoA cannot enter TCA
- High glucagon/insulin ratio → lipolysis → FA oxidation → ketogenesis

## Ketolysis (Utilization — Peripheral Tissues)

### Tissues: Brain, Heart, Skeletal muscle, Kidney (NOT liver)
### Liver CANNOT use ketone bodies (lacks **succinyl-CoA:acetoacetate CoA transferase** / thiophorase)

### Pathway
1. BHB → Acetoacetate (by BHB dehydrogenase)
2. Acetoacetate + Succinyl-CoA → **Acetoacetyl-CoA** + Succinate (by **thiophorase**)
3. Acetoacetyl-CoA → 2 Acetyl-CoA (by thiolase) → TCA cycle

## Ketone Bodies as Fuel
- During **prolonged starvation** (>3 days): Brain adapts to use ketone bodies (up to 75% of brain energy)
- This spares glucose and reduces muscle protein breakdown
- Heart PREFERENTIALLY uses ketone bodies over glucose

## Normal vs Pathological Ketosis
| Feature | Fasting Ketosis | Diabetic Ketoacidosis (DKA) |
|---------|-----------------|----------------------------|
| Insulin | Low (appropriate) | Very low or absent |
| Glucagon | Elevated | Very elevated |
| Blood glucose | Low-normal | Very high (>250 mg/dL) |
| Blood pH | Normal or mild decrease | Markedly low (<7.3) |
| Ketones | Mildly elevated | Massively elevated |
| Clinical | Physiological adaptation | Medical emergency |

> **Clinical Pearl**: In India, DKA is a common presentation of newly diagnosed Type 1 diabetes in children and is the leading cause of diabetes-related mortality in this age group. It can also occur in Type 2 diabetes during severe infections or medication non-compliance — called 'ketosis-prone Type 2 diabetes,' which is more common in certain Indian subpopulations.`,
        mnemonics: [
          { text: "HMG-CoA Synthase = Ketone Synthesis (mitochondrial); HMG-CoA Reductase = Cholesterol Synthesis (ER)", explanation: "Both use HMG-CoA but in different compartments for completely different purposes. Synthase (mitochondria) makes ketones; Reductase (ER) makes cholesterol" },
          { text: "Liver MAKES ketones but CAN'T USE them (no thiophorase)", explanation: "Liver lacks succinyl-CoA:acetoacetate CoA transferase (thiophorase), so it produces ketone bodies as fuel for other organs" }
        ],
        keyPoints: ["3 ketone bodies: Acetoacetate, Beta-hydroxybutyrate (most abundant), Acetone", "Ketogenesis: liver mitochondria; rate-limiting = HMG-CoA synthase (mitochondrial)", "Liver makes but cannot use ketone bodies (lacks thiophorase)", "Brain uses ketone bodies in prolonged starvation (up to 75% energy)", "Ketolysis uses thiophorase (succinyl-CoA:AcAc CoA transferase)", "DKA: insulin deficiency → massive ketogenesis → metabolic acidosis"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 22: Oxidation of Fatty Acids — Ketogenesis", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 22", edition: "9th" }] },
      { layer: 2, slug: "ketone-bodies-mechanism", title: "Ketone Body Metabolism - Mechanism", estimatedMinutes: 25,
        summary: "Biochemical basis of DKA, ketone body regulation, starvation metabolism, and the relationship between ketogenesis and gluconeogenesis.",
        contentMd: `# Ketone Bodies: Detailed Mechanisms

## Why Ketogenesis Increases in Fasting/DKA

### The OAA Problem
- During fasting: Glucagon promotes gluconeogenesis → OAA consumed for glucose synthesis
- Without OAA: Acetyl-CoA cannot enter TCA cycle (citrate synthase needs OAA)
- Excess acetyl-CoA is channeled to **ketogenesis**
- Additionally: High NADH/NAD+ ratio (from beta-oxidation) shifts OAA → Malate

### Hormonal Control
- **Glucagon** (high): Activates hormone-sensitive lipase → FFA release → beta-oxidation → acetyl-CoA → ketogenesis
- **Insulin** (low): Cannot suppress lipolysis → uncontrolled FA release
- In DKA: Extreme insulin deficiency → massive uncontrolled lipolysis → overwhelming ketogenesis

## DKA Pathophysiology
1. **Insulin deficiency** → Glucose cannot enter cells → Hyperglycemia
2. Uncontrolled lipolysis → Massive FA release → Excessive beta-oxidation
3. Acetyl-CoA overwhelms TCA → **Ketone body overproduction**
4. Ketone bodies are **acids** → consume bicarbonate → **Metabolic acidosis** (anion gap)
5. Osmotic diuresis (glucose + ketones) → **Dehydration** + electrolyte loss
6. **Kussmaul breathing** (deep, rapid) → respiratory compensation for acidosis
7. **Fruity breath** (acetone)

### Lab Findings in DKA
| Parameter | Finding |
|-----------|---------|
| Blood glucose | > 250 mg/dL (often 400-800) |
| pH | < 7.3 (acidosis) |
| Bicarbonate | < 18 mEq/L |
| Anion gap | Elevated (> 12) |
| Serum ketones | Strongly positive |
| Potassium | Initially high (shifts from cells), but TOTAL body K+ is low |
| BHB/AcAc ratio | Increased (>3:1, normally 1:1) |

### DKA Treatment
1. **IV fluids** (NS initially — massive dehydration correction)
2. **IV Insulin** (low-dose continuous infusion)
3. **Potassium replacement** (must check K+ before insulin — insulin drives K+ into cells)
4. **Monitor and replace electrolytes** (Na+, K+, PO4)
5. **Bicarbonate** only if pH < 6.9

## Starvation Metabolism Timeline
| Duration | Primary Fuel | Brain Fuel |
|----------|-------------|-----------|
| 0-4 hours (fed) | Glucose (from diet) | Glucose |
| 4-16 hours | Hepatic glycogenolysis | Glucose |
| 16-48 hours | Gluconeogenesis + early ketogenesis | Glucose + ketones |
| 2-7 days | FA oxidation + ketogenesis | Ketones (2/3) + Glucose (1/3) |
| > 7 days | FA oxidation + ketogenesis | Ketones (75%) + Glucose (25%) |

## Ketogenic Diet
- High fat, very low carbohydrate diet → mimics fasting state
- Induces ketosis → ketone bodies become primary fuel
- Used clinically for: **Refractory epilepsy** in children, PDH deficiency
- Also: weight loss (controversial), some cancer protocols (under investigation)

> **Clinical Pearl**: In Indian emergency departments, DKA in children often presents late with severe dehydration. The most dangerous complication of treatment is **cerebral edema** from too-rapid fluid correction. Indian Diabetes Guidelines recommend cautious fluid replacement over 48 hours in pediatric DKA.`,
        mnemonics: [
          { text: "DKA = Dehydration + Ketoacidosis + Anion gap", explanation: "DKA triad: Dehydration (osmotic diuresis), Ketoacidosis (metabolic acidosis from ketone accumulation), Anion gap elevated (unmeasured anions = ketone bodies)" },
          { text: "Check K+ Before Insulin in DKA", explanation: "Insulin drives K+ into cells → can cause fatal hypokalemia. Always check serum K+ and replace if < 3.3 mEq/L BEFORE starting insulin" }
        ],
        keyPoints: ["OAA depletion (gluconeogenesis) diverts acetyl-CoA to ketogenesis", "DKA: insulin deficiency → hyperglycemia + massive ketogenesis → acidosis + dehydration", "DKA treatment: fluids first, then insulin + K+ monitoring", "BHB/AcAc ratio increased in DKA (more NADH from beta-oxidation)", "Brain adapts to ketone bodies after 2-3 days of starvation", "Ketogenic diet used for refractory epilepsy and PDH deficiency"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 22", edition: "31st" }, { book: "Harrison's Medicine", chapter: "Ch 399: DKA", edition: "21st" }] },
      { layer: 3, slug: "ketone-bodies-clinical", title: "Ketone Body Metabolism - Clinical", estimatedMinutes: 20,
        summary: "DKA management in Indian context, alcoholic ketoacidosis, starvation ketosis, and inborn errors of ketone body metabolism.",
        contentMd: `# Clinical Applications

## DKA in Indian Practice
- **Common triggers**: New-onset T1DM, infections (UTI, pneumonia, dengue), insulin omission, pancreatitis
- **Indian-specific considerations**:
  - Late presentation due to delayed recognition
  - Infections are the most common precipitant (vs insulin omission in Western countries)
  - Mucormycosis risk during DKA (especially post-COVID, as seen during India's COVID-19 waves)
  - Ketosis-prone T2DM more common in Indian populations
- **Monitoring**: Hourly blood glucose, 2-hourly electrolytes, ABG every 4 hours

## Alcoholic Ketoacidosis (AKA)
- Occurs in chronic alcoholics after binge drinking + poor nutrition
- **Mechanism**: Alcohol metabolism → high NADH/NAD+ → shifts to BHB from AcAc
- **Triad**: History of alcohol, vomiting/abdominal pain, metabolic acidosis
- Blood glucose: Low to normal (unlike DKA)
- **Nitroprusside test** (for ketones) may be negative (detects AcAc, not BHB — and BHB predominates in AKA)
- **Treatment**: IV dextrose + thiamine + fluids (resolves faster than DKA)

## Inborn Errors of Ketone Body Metabolism
| Disorder | Enzyme Deficiency | Features |
|----------|-------------------|----------|
| HMG-CoA lyase deficiency | HMG-CoA lyase | Hypoketotic hypoglycemia, metabolic acidosis (cannot make ketones) |
| Succinyl-CoA transferase deficiency | Thiophorase | Persistent ketonuria (cannot utilize ketones) |
| BHB dehydrogenase deficiency | BHB dehydrogenase | Ketonuria with elevated AcAc |

## Ketone Body Testing
- **Urine ketone strips** (nitroprusside reaction): Detect AcAc only, NOT BHB
- **Blood BHB**: More accurate, especially in DKA monitoring
- False negatives in urine ketones: When BHB >> AcAc (AKA, early DKA)
- As DKA resolves with insulin, BHB converts to AcAc → urine ketones may paradoxically INCREASE initially

> **Clinical Pearl**: During the COVID-19 pandemic in India (2021), DKA combined with mucormycosis became a devastating complication. Hyperglycemia + acidosis + immunosuppression (from steroids) created the perfect environment for Mucor invasion. This led India to declare mucormycosis a notifiable disease.`,
        mnemonics: [
          { text: "Nitroprusside detects AcAc, NOT BHB", explanation: "Standard urine ketone tests use nitroprusside reagent that detects acetoacetate and acetone but NOT beta-hydroxybutyrate. In AKA and early DKA, BHB predominates → false negative urine ketones" }
        ],
        keyPoints: ["DKA triggers in India: infections most common (vs insulin omission in West)", "Mucormycosis risk in DKA (especially post-COVID Indian context)", "AKA: high NADH → BHB predominates → nitroprusside test may be falsely negative", "AKA treatment: dextrose + thiamine + fluids (simpler than DKA)", "Blood BHB is more accurate than urine ketone strips for monitoring"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 22", edition: "31st" }, { book: "Davidson's Medicine", chapter: "Ch 21: Diabetes", edition: "24th" }] },
      { layer: 4, slug: "ketone-bodies-exam", title: "Ketone Body Metabolism - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield ketone body metabolism points for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- 3 ketone bodies: **Acetoacetate, Beta-hydroxybutyrate, Acetone**
- Most abundant in blood: **Beta-hydroxybutyrate**
- Ketogenesis location: **Liver mitochondria only**
- Rate-limiting enzyme: **HMG-CoA synthase (mitochondrial)**
- Liver cannot use ketone bodies because: **Lacks thiophorase (succinyl-CoA:AcAc CoA transferase)**
- Key ketolysis enzyme: **Thiophorase**
- Brain uses ketone bodies after: **2-3 days of starvation**
- DKA: Blood glucose > **250 mg/dL**, pH < **7.3**, Anion gap: **Elevated**
- First treatment in DKA: **IV Normal Saline** (fluids)
- Check before giving insulin in DKA: **Serum Potassium**
- Fruity breath in DKA: **Acetone** (volatile, exhaled)
- Kussmaul breathing: **Deep, rapid respiratory compensation for acidosis**
- Nitroprusside test detects: **Acetoacetate** (not BHB)
- BHB/AcAc ratio in DKA: **>3:1 (normally 1:1)**

## Pattern Recognition
- Q: "Type 1 diabetic with vomiting, fruity breath, Kussmaul breathing" → **DKA**
- Q: "Alcoholic with acidosis, low glucose, negative urine ketones" → **Alcoholic ketoacidosis**
- Q: "Organ that makes but cannot use ketone bodies" → **Liver**
- Q: "Brain fuel in prolonged starvation" → **Ketone bodies (75%)**`,
        mnemonics: [
          { text: "Liver = Ketone FACTORY (makes, doesn't use)", explanation: "Liver produces ketone bodies for peripheral tissues but cannot metabolize them itself (no thiophorase)" }
        ],
        keyPoints: ["HMG-CoA synthase (mitochondrial) = rate-limiting for ketogenesis", "Liver makes but cannot use ketones (no thiophorase)", "DKA: fluids first, check K+ before insulin", "Nitroprusside detects AcAc only; blood BHB is more accurate"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 22", edition: "31st" }] },
      { layer: 5, slug: "ketone-bodies-recall", title: "Ketone Body Metabolism - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test for ketone body metabolism.",
        contentMd: `# Active Recall

**Q1:** Name the three ketone bodies.
> Acetoacetate, Beta-hydroxybutyrate (most abundant), Acetone

**Q2:** Where are ketone bodies synthesized?
> Liver mitochondria only

**Q3:** What is the rate-limiting enzyme of ketogenesis?
> HMG-CoA synthase (mitochondrial)

**Q4:** Why can't the liver use ketone bodies?
> Liver lacks thiophorase (succinyl-CoA:acetoacetate CoA transferase)

**Q5:** What causes the fruity breath in DKA?
> Acetone (volatile, exhaled through lungs)

**Q6:** What must be checked before starting insulin in DKA?
> Serum potassium (insulin drives K+ into cells → risk of fatal hypokalemia)

**Q7:** What is the first treatment in DKA?
> IV Normal Saline (address dehydration first)

**Q8:** Why might urine ketone tests be falsely negative in alcoholic ketoacidosis?
> Nitroprusside reagent detects acetoacetate but NOT beta-hydroxybutyrate, which predominates in AKA

**Q9:** After how many days of starvation does the brain start using ketone bodies?
> 2-3 days; by day 7+, ketone bodies provide up to 75% of brain energy

**Q10:** What is the difference between HMG-CoA synthase and HMG-CoA reductase?
> Synthase (mitochondrial): ketogenesis; Reductase (ER): cholesterol synthesis`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering ketogenesis, ketolysis, DKA, and starvation metabolism"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 22", edition: "31st" }] },
    ],
  },

  // ─── Topic 3: Cholesterol & Lipoproteins ──────────────────────
  {
    topicCode: "BI-MOD-04-TOP-03",
    layers: [
      { layer: 1, slug: "cholesterol-lipoproteins-foundation", title: "Cholesterol & Lipoproteins - Foundation", estimatedMinutes: 20,
        summary: "Cholesterol synthesis occurs in the liver cytoplasm from acetyl-CoA. HMG-CoA reductase is the rate-limiting enzyme (target of statins). Lipoproteins transport lipids in blood: chylomicrons, VLDL, LDL, and HDL.",
        contentMd: `# Cholesterol & Lipoproteins

## Cholesterol Synthesis

### Overview
- **Location**: Cytoplasm (mainly liver, also intestine, adrenal, gonads)
- **Substrate**: Acetyl-CoA (from glucose/FA metabolism)
- **Rate-limiting enzyme**: **HMG-CoA reductase** (converts HMG-CoA → Mevalonate)
- Total pathway: Acetyl-CoA → HMG-CoA → Mevalonate → Squalene → Cholesterol
- Requires: **NADPH** (from HMP shunt), **O2**, and **ATP**

### Key Steps
1. **3 Acetyl-CoA → HMG-CoA** (cytoplasmic HMG-CoA synthase)
2. **HMG-CoA → Mevalonate** (HMG-CoA reductase — rate-limiting, target of **statins**)
3. Mevalonate → Isopentenyl-PP (uses ATP)
4. Isopentenyl-PP → Squalene (30C) (via geranyl-PP, farnesyl-PP)
5. Squalene → Lanosterol → **Cholesterol** (27C)

### Regulation of HMG-CoA Reductase
| Regulator | Effect |
|-----------|--------|
| Insulin | Activates (dephosphorylation) |
| Glucagon | Inhibits (phosphorylation via AMPK) |
| Cholesterol (dietary) | Inhibits (feedback) |
| Statins | Competitive inhibitors |
| Thyroid hormone | Increases receptor expression (↑ LDL clearance) |
| SREBP-2 | Upregulates gene when cholesterol is low |

## Lipoproteins

### Structure
- **Spherical particles**: Hydrophobic core (TAG + cholesterol esters) + Amphipathic shell (phospholipids + free cholesterol + apolipoproteins)

### Classification (by density — increasing)

| Lipoprotein | Density | Main Lipid | Source | Key Apolipoprotein |
|-------------|---------|-----------|--------|-------------------|
| Chylomicrons | Lowest | Dietary TAG | Intestine | ApoB-48, ApoC-II, ApoE |
| VLDL | Very low | Endogenous TAG | Liver | ApoB-100, ApoC-II, ApoE |
| IDL | Intermediate | Cholesterol + TAG | VLDL remnant | ApoB-100, ApoE |
| LDL | Low | **Cholesterol** | IDL | ApoB-100 |
| HDL | Highest | Phospholipids | Liver, Intestine | ApoA-I, ApoA-II |

### Key Apolipoproteins
| Apolipoprotein | Function |
|---------------|----------|
| **ApoB-48** | Chylomicron assembly (intestine) |
| **ApoB-100** | VLDL/LDL recognition by LDL receptor |
| **ApoC-II** | Activates **lipoprotein lipase (LPL)** |
| **ApoE** | Receptor recognition (remnant clearance) |
| **ApoA-I** | Activates **LCAT** (HDL maturation) |

## Lipoprotein Metabolism Overview
1. **Exogenous pathway**: Dietary fat → Chylomicrons → LPL removes TAG → Chylomicron remnants → Liver (ApoE receptor)
2. **Endogenous pathway**: Liver TAG → VLDL → LPL removes TAG → IDL → Hepatic lipase → LDL
3. **Reverse cholesterol transport**: Peripheral cholesterol → HDL (via ABCA1) → LCAT esterifies → CETP transfers to VLDL/LDL → Liver (SR-B1 receptor)

> **Clinical Pearl**: In India, the dyslipidemia pattern is often 'atherogenic dyslipidemia' — high triglycerides + low HDL + small dense LDL — which increases cardiovascular risk even with normal total cholesterol. This pattern is common in the 'thin-fat Indian' phenotype and in metabolic syndrome.`,
        mnemonics: [
          { text: "C-II activates LPL; A-I activates LCAT", explanation: "ApoC-II is the activator of Lipoprotein Lipase (clears TAG from chylomicrons/VLDL). ApoA-I activates LCAT (esterifies cholesterol on HDL)" },
          { text: "LDL = Lethal (bad); HDL = Healthy (good)", explanation: "LDL deposits cholesterol in arteries (atherogenic). HDL removes cholesterol from arteries (reverse cholesterol transport — cardioprotective)" }
        ],
        keyPoints: ["Cholesterol synthesis: cytoplasm; HMG-CoA reductase = rate-limiting (statins target)", "Statins: competitive inhibitors of HMG-CoA reductase", "Lipoproteins by density: Chylomicrons < VLDL < IDL < LDL < HDL", "ApoB-48 (chylomicrons), ApoB-100 (VLDL/LDL), ApoC-II (activates LPL), ApoA-I (activates LCAT)", "LDL: main carrier of cholesterol to tissues (atherogenic)", "HDL: reverse cholesterol transport (cardioprotective)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 26: Cholesterol Synthesis, Transport", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 26", edition: "9th" }] },
      { layer: 2, slug: "cholesterol-lipoproteins-mechanism", title: "Cholesterol & Lipoproteins - Mechanism", estimatedMinutes: 30,
        summary: "LDL receptor pathway, SREBP regulation, reverse cholesterol transport, bile acid synthesis, and statin mechanism of action.",
        contentMd: `# Cholesterol & Lipoproteins: Detailed Mechanisms

## LDL Receptor Pathway (Brown & Goldstein — Nobel Prize 1985)
1. LDL binds **LDL receptor** on cell surface (via ApoB-100)
2. Receptor-LDL complex enters cell via **clathrin-coated pits** (receptor-mediated endocytosis)
3. Endosome → Lysosome: LDL degraded, cholesterol esters hydrolyzed → free cholesterol
4. Free cholesterol has 3 effects:
   - Inhibits **HMG-CoA reductase** (cholesterol synthesis down)
   - Activates **ACAT** (acyl-CoA cholesterol acyltransferase → esterifies cholesterol for storage)
   - Suppresses **LDL receptor expression** (SREBP-2 pathway)
5. LDL receptor recycled to cell surface

## SREBP Pathway
- **SREBP** (Sterol Regulatory Element Binding Protein): Transcription factor
- When cholesterol is LOW: SREBP activated → moves to nucleus → upregulates HMG-CoA reductase gene + LDL receptor gene
- When cholesterol is HIGH: SREBP retained in ER → genes NOT activated
- Statins → lower cholesterol → SREBP activated → MORE LDL receptors → MORE LDL cleared from blood

## Bile Acid Synthesis (Major Route of Cholesterol Excretion)
- **Rate-limiting enzyme**: **Cholesterol 7-alpha-hydroxylase** (CYP7A1)
- **Primary bile acids**: Cholic acid + Chenodeoxycholic acid (synthesized in liver)
- **Secondary bile acids**: Deoxycholic acid + Lithocholic acid (converted by gut bacteria)
- Conjugated with glycine or taurine → bile salts → secreted into bile
- **Enterohepatic circulation**: 95% of bile acids reabsorbed in terminal ileum → returned to liver
- **Bile acid sequestrants** (cholestyramine): Bind bile acids in gut → prevent reabsorption → liver uses more cholesterol for bile acid synthesis → lowers LDL

## Statins: Mechanism and Effects
- **Competitive inhibitors** of HMG-CoA reductase
- Lower intracellular cholesterol → SREBP activation → upregulate LDL receptors → increased LDL clearance from blood
- **Effects**: LDL ↓ 30-50%, HDL ↑ 5-15%, TAG ↓ 10-20%
- **Pleiotropic effects**: Anti-inflammatory, endothelial function improvement, plaque stabilization
- **Side effects**: Myopathy (CK elevation), rhabdomyolysis (rare), hepatotoxicity, new-onset diabetes
- **Atorvastatin, Rosuvastatin**: Most commonly prescribed in India

## CETP (Cholesteryl Ester Transfer Protein)
- Transfers cholesteryl esters from HDL → VLDL/LDL in exchange for TAG
- CETP inhibitors → raise HDL (but clinical trials had mixed results)

## PCSK9 Inhibitors (Newer Drugs)
- PCSK9 normally degrades LDL receptors → fewer LDL receptors → higher LDL
- **PCSK9 inhibitors** (evolocumab, alirocumab): Prevent LDL receptor degradation → more LDL clearance → dramatic LDL reduction
- Used in familial hypercholesterolemia refractory to statins

> **Clinical Pearl**: Atorvastatin 40 mg is the most commonly prescribed statin in Indian cardiology practice. The ACC/AHA guidelines recommend high-intensity statins for all patients with atherosclerotic CVD. Indian data shows significant cardiovascular benefit even in South Asian populations with the 'atherogenic dyslipidemia' pattern.`,
        mnemonics: [
          { text: "Statins → SRE-BP → more LDL Receptors → less LDL in blood", explanation: "Statins inhibit HMG-CoA reductase → less cholesterol → SREBP activates → more LDL receptor expression → more LDL cleared from blood" },
          { text: "7-alpha-hydroxylase is the Rate-Limiting enzyme for Bile acid synthesis", explanation: "CYP7A1 (cholesterol 7-alpha-hydroxylase) catalyzes the first and rate-limiting step in conversion of cholesterol to bile acids — the major route of cholesterol elimination" }
        ],
        keyPoints: ["LDL receptor pathway: ApoB-100 binding → clathrin pits → endocytosis → cholesterol release", "SREBP: low cholesterol → activates HMG-CoA reductase + LDL receptor genes", "Statins: inhibit HMG-CoA reductase → SREBP → more LDL receptors → lower LDL", "Bile acid synthesis: 7-alpha-hydroxylase rate-limiting; enterohepatic circulation recycles 95%", "PCSK9 inhibitors: prevent LDL receptor degradation → dramatic LDL reduction", "Cholestyramine: bile acid sequestrant → more cholesterol → bile acids → lowers LDL"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 26", edition: "31st" }, { book: "KD Tripathi Pharmacology", chapter: "Ch 44: Hypolipidemic Drugs", edition: "8th" }] },
      { layer: 3, slug: "cholesterol-lipoproteins-clinical", title: "Cholesterol & Lipoproteins - Clinical", estimatedMinutes: 20,
        summary: "Familial hypercholesterolemia, hyperlipidemias, atherosclerosis, and lipid-lowering drug strategies in Indian context.",
        contentMd: `# Clinical Applications

## Familial Hypercholesterolemia (FH)
- **Defect**: LDL receptor mutations (most common), or ApoB-100 mutation, or PCSK9 gain-of-function
- **Heterozygous FH**: 1 in 250; LDL ~300-500 mg/dL; MI in 30s-40s
- **Homozygous FH**: Very rare; LDL ~600-1000 mg/dL; MI in childhood
- **Clinical features**: Tendon xanthomas (Achilles, hand extensors), xanthelasma, corneal arcus (before age 45), premature atherosclerosis
- **Treatment**: High-dose statins + ezetimibe + PCSK9 inhibitors; LDL apheresis for homozygous

## Fredrickson Classification of Hyperlipidemias

| Type | Elevated Lipoprotein | Elevated Lipid | Appearance of Serum |
|------|---------------------|----------------|---------------------|
| I | Chylomicrons | TAG | Creamy top layer |
| IIa | LDL | Cholesterol | Clear |
| IIb | LDL + VLDL | Cholesterol + TAG | Slightly turbid |
| III | IDL (beta-VLDL) | Cholesterol + TAG | Turbid |
| IV | VLDL | TAG | Turbid |
| V | Chylomicrons + VLDL | TAG | Creamy + turbid |

## Lipid-Lowering Drugs

| Drug Class | Mechanism | Primary Effect | Side Effects |
|-----------|-----------|---------------|-------------|
| Statins | HMG-CoA reductase inhibitor | ↓ LDL 30-50% | Myopathy, rhabdomyolysis |
| Ezetimibe | Blocks NPC1L1 (cholesterol absorption) | ↓ LDL 15-20% | Diarrhea |
| Fibrates | PPAR-alpha activation | ↓ TAG 30-50%, ↑ HDL | Myopathy, gallstones |
| Bile acid sequestrants | Bind bile acids in gut | ↓ LDL 15-30% | GI upset, ↑ TAG |
| PCSK9 inhibitors | Prevent LDL receptor degradation | ↓ LDL 50-70% | Injection site reactions |
| Niacin | Multiple mechanisms | ↑ HDL (most effective), ↓ TAG | Flushing, hyperglycemia |
| Omega-3 FA | Decrease VLDL production | ↓ TAG | Fishy taste, bleeding |

## Atherosclerosis
- LDL crosses endothelium → oxidized LDL → taken up by macrophages (via scavenger receptors) → **foam cells** → fatty streak → plaque
- **Scavenger receptor pathway**: NOT downregulated by cholesterol (unlike LDL receptor) → unlimited uptake → foam cell formation
- Oxidized LDL is the key initiator of atherosclerosis

## Indian Cardiovascular Risk
- Indians develop CAD 10-15 years earlier than Western populations
- Higher prevalence of metabolic syndrome, insulin resistance
- Atherogenic dyslipidemia (high TG, low HDL, small dense LDL)
- INTERHEART study: 9 modifiable risk factors account for >90% of MI risk

> **Clinical Pearl**: The Indian Heart Study and INTERHEART data show that South Asians have a unique cardiovascular risk profile. Aggressive statin therapy is recommended even at lower LDL thresholds than Western guidelines suggest. Family screening for FH should be done when a young Indian patient presents with premature MI.`,
        mnemonics: [
          { text: "Xanthomas on Tendons = Familial Hypercholesterolemia", explanation: "Tendon xanthomas (especially Achilles tendon and hand extensor tendons) are pathognomonic for familial hypercholesterolemia" }
        ],
        keyPoints: ["FH: LDL receptor defect, tendon xanthomas, premature MI; treat with statins + PCSK9i", "Statins: most effective LDL-lowering drugs; side effects include myopathy", "Fibrates: best for lowering TAG (PPAR-alpha agonists)", "Oxidized LDL → scavenger receptor → foam cells → atherosclerosis", "Indians develop CAD 10-15 years earlier; atherogenic dyslipidemia pattern common"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 26", edition: "31st" }, { book: "KD Tripathi Pharmacology", chapter: "Ch 44", edition: "8th" }] },
      { layer: 4, slug: "cholesterol-lipoproteins-exam", title: "Cholesterol & Lipoproteins - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield cholesterol and lipoprotein points for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Rate-limiting enzyme of cholesterol synthesis: **HMG-CoA reductase**
- Statins are: **Competitive inhibitors of HMG-CoA reductase**
- LDL receptor recognizes: **ApoB-100**
- ApoC-II activates: **Lipoprotein lipase (LPL)**
- ApoA-I activates: **LCAT**
- Most atherogenic lipoprotein: **LDL (especially oxidized small dense LDL)**
- Anti-atherogenic lipoprotein: **HDL (reverse cholesterol transport)**
- Rate-limiting enzyme of bile acid synthesis: **7-alpha-hydroxylase (CYP7A1)**
- Primary bile acids: **Cholic acid + Chenodeoxycholic acid**
- Bile acid reabsorption: **95% in terminal ileum**
- FH defect: **LDL receptor mutations** (most common)
- Tendon xanthomas: **Familial Hypercholesterolemia**
- ApoB-48: **Chylomicrons** (intestine)
- ApoB-100: **VLDL, IDL, LDL** (liver)
- PCSK9 inhibitors: **Prevent LDL receptor degradation**

## Pattern Recognition
- Q: "Young patient with MI + tendon xanthomas" → **Familial Hypercholesterolemia**
- Q: "Creamy serum, pancreatitis, very high TAG" → **Type I (chylomicronemia) or Type V**
- Q: "Drug that causes flushing" → **Niacin**
- Q: "Drug that causes myopathy + rhabdomyolysis" → **Statins (especially with fibrate combination)**`,
        mnemonics: [
          { text: "B-48 = Belly (intestine); B-100 = Blood-borne (liver)", explanation: "ApoB-48 is made by intestine (chylomicrons); ApoB-100 is made by liver (VLDL, IDL, LDL)" }
        ],
        keyPoints: ["HMG-CoA reductase = rate-limiting; target of statins", "ApoB-100 for LDL receptor; ApoC-II for LPL; ApoA-I for LCAT", "LDL = bad; HDL = good; oxidized LDL initiates atherosclerosis", "FH: LDL receptor mutations → tendon xanthomas → premature MI"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 26", edition: "31st" }] },
      { layer: 5, slug: "cholesterol-lipoproteins-recall", title: "Cholesterol & Lipoproteins - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test for cholesterol and lipoprotein metabolism.",
        contentMd: `# Active Recall

**Q1:** What is the rate-limiting enzyme of cholesterol synthesis?
> HMG-CoA reductase (converts HMG-CoA to mevalonate)

**Q2:** How do statins lower LDL?
> Inhibit HMG-CoA reductase → less intracellular cholesterol → SREBP activates → more LDL receptors → more LDL clearance from blood

**Q3:** Which apolipoprotein does the LDL receptor recognize?
> ApoB-100

**Q4:** What activates lipoprotein lipase?
> ApoC-II (found on chylomicrons and VLDL)

**Q5:** What is reverse cholesterol transport?
> HDL picks up cholesterol from peripheral tissues (via ABCA1) → LCAT esterifies it → delivered to liver (via SR-B1) or transferred to VLDL/LDL (via CETP)

**Q6:** What is the rate-limiting enzyme of bile acid synthesis?
> Cholesterol 7-alpha-hydroxylase (CYP7A1)

**Q7:** What are tendon xanthomas pathognomonic for?
> Familial Hypercholesterolemia (LDL receptor mutations)

**Q8:** What makes oxidized LDL particularly dangerous?
> Taken up by macrophages via scavenger receptors (not downregulated) → unlimited uptake → foam cells → atherosclerosis

**Q9:** What is the function of PCSK9?
> Degrades LDL receptors; PCSK9 inhibitors prevent this → more LDL receptors → lower LDL

**Q10:** What is the most common apolipoprotein abnormality causing type III hyperlipoproteinemia?
> ApoE2/E2 homozygosity (defective remnant clearance)`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering cholesterol synthesis, statins, lipoproteins, and clinical disorders"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 26", edition: "31st" }] },
    ],
  },

  // ─── Topic 4: Fatty Acid Synthesis ────────────────────────────
  {
    topicCode: "BI-MOD-04-TOP-04",
    layers: [
      { layer: 1, slug: "fa-synthesis-foundation", title: "Fatty Acid Synthesis - Foundation", estimatedMinutes: 20,
        summary: "Fatty acid synthesis (lipogenesis) occurs in the cytoplasm, primarily in liver. Acetyl-CoA carboxylase (ACC) is the rate-limiting enzyme producing malonyl-CoA. Fatty acid synthase (FAS) is the multi-enzyme complex that builds the chain.",
        contentMd: `# Fatty Acid Synthesis (De Novo Lipogenesis)

## Overview
- **Location**: Cytoplasm (mainly liver; also adipose, lactating mammary gland)
- **Substrate**: Acetyl-CoA (from glucose metabolism via citrate shuttle)
- **Product**: Palmitate (C16:0) — the primary product
- **Rate-limiting enzyme**: **Acetyl-CoA Carboxylase (ACC)**
- **Key coenzymes**: NADPH, Biotin, Mn2+

## Acetyl-CoA Transport: Citrate Shuttle
- Acetyl-CoA is produced in mitochondria (from PDH, beta-oxidation)
- Cannot cross inner mitochondrial membrane directly
- **Citrate shuttle**:
  1. Acetyl-CoA + OAA → **Citrate** (by citrate synthase, in mitochondria)
  2. Citrate exits mitochondria via citrate transporter
  3. **ATP-citrate lyase** (cytoplasm): Citrate → Acetyl-CoA + OAA
  4. OAA → Malate (MDH) → Pyruvate (malic enzyme, produces NADPH) → returns to mitochondria

## Step 1: Acetyl-CoA Carboxylase (ACC) — Rate-Limiting
- **Reaction**: Acetyl-CoA + CO2 → **Malonyl-CoA** (uses biotin + ATP)
- **Regulation**:
  - Activated by: **Citrate** (feedforward), **Insulin** (dephosphorylation)
  - Inhibited by: **Palmitoyl-CoA** (product feedback), **Glucagon/Epinephrine** (phosphorylation via AMPK)
- Malonyl-CoA also **inhibits CPT-I** → prevents beta-oxidation during synthesis

## Step 2: Fatty Acid Synthase (FAS) — Multi-Enzyme Complex
- **Homodimer** with 7 enzymatic activities + ACP (acyl carrier protein)
- ACP contains **phosphopantetheine** (from CoA/pantothenic acid/B5)
- Builds palmitate by adding **2 carbons at a time** from malonyl-CoA
- Each cycle: Condensation → Reduction (NADPH) → Dehydration → Reduction (NADPH)
- **7 cycles** needed: 1 Acetyl-CoA primer + 7 Malonyl-CoA → Palmitate (C16)

## Stoichiometry
$$Acetyl\\text{-}CoA + 7\\ Malonyl\\text{-}CoA + 14\\ NADPH + 14\\ H^+ → Palmitate + 7\\ CO_2 + 8\\ CoA + 14\\ NADP^+ + 6\\ H_2O$$

## Sources of NADPH for FA Synthesis
1. **HMP shunt** (G6PD and 6-PG dehydrogenase) — major source
2. **Malic enzyme** (from citrate shuttle: malate → pyruvate + NADPH)
3. **Isocitrate dehydrogenase** (cytoplasmic, minor)

## Further Modification of Palmitate
- **Elongation**: ER (endoplasmic reticulum), adds 2C at a time using malonyl-CoA + NADPH
- **Desaturation**: ER desaturases introduce double bonds
  - Humans have: delta-9, delta-6, delta-5 desaturases
  - Humans LACK: **delta-12 and delta-15** desaturases → cannot make linoleic and linolenic acids (essential FAs)

> **Clinical Pearl**: De novo lipogenesis is upregulated in conditions of excess carbohydrate intake (high rice/carb Indian diets). This contributes to non-alcoholic fatty liver disease (NAFLD), increasingly prevalent in urban India. The enzyme ACC is a therapeutic target — ACC inhibitors are being developed for NAFLD treatment.`,
        mnemonics: [
          { text: "ACC = rate-limiting; FAS = Fatty Acid Assembly line", explanation: "ACC converts acetyl-CoA to malonyl-CoA (committed step). FAS is the multi-enzyme complex that assembles the fatty acid chain from malonyl-CoA units" },
          { text: "14 NADPH for 1 Palmitate", explanation: "FA synthesis requires 14 NADPH: 7 from HMP shunt + 7 from malic enzyme (citrate shuttle). This is why HMP shunt is active in lipogenic tissues" }
        ],
        keyPoints: ["FA synthesis: cytoplasm; ACC = rate-limiting (biotin, makes malonyl-CoA)", "FAS: homodimer with 7 activities + ACP; makes palmitate (C16) in 7 cycles", "Citrate shuttle exports acetyl-CoA from mitochondria to cytoplasm", "NADPH sources: HMP shunt (major) + malic enzyme", "ACC activated by citrate, insulin; inhibited by palmitoyl-CoA, glucagon (AMPK)", "Humans lack delta-12/15 desaturases → essential FAs must come from diet"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 23: Biosynthesis of Fatty Acids", edition: "31st" }, { book: "Stryer Biochemistry", chapter: "Ch 22", edition: "9th" }] },
      { layer: 2, slug: "fa-synthesis-mechanism", title: "Fatty Acid Synthesis - Mechanism", estimatedMinutes: 25,
        summary: "Detailed FAS mechanism, regulation by fed/fasted states, transcriptional control (SREBP-1c, ChREBP), and comparison with beta-oxidation.",
        contentMd: `# FA Synthesis: Detailed Mechanisms

## FAS Reaction Cycle (Each of 7 Cycles)
1. **Condensation**: Acetyl-ACP + Malonyl-ACP → Acetoacetyl-ACP + CO2 (by beta-ketoacyl synthase)
2. **Reduction**: Acetoacetyl-ACP → beta-Hydroxybutyryl-ACP (by beta-ketoacyl reductase, uses NADPH)
3. **Dehydration**: β-Hydroxybutyryl-ACP → Crotonyl-ACP (by dehydratase)
4. **Reduction**: Crotonyl-ACP → Butyryl-ACP (by enoyl reductase, uses NADPH)
- Chain grows by 2C each cycle; CO2 added by ACC is released in condensation step
- After 7 cycles: **Thioesterase** releases free palmitate from ACP

## Comparison: FA Synthesis vs Beta-Oxidation

| Feature | FA Synthesis | Beta-Oxidation |
|---------|-------------|----------------|
| Location | Cytoplasm | Mitochondrial matrix |
| Carrier | ACP (phosphopantetheine) | CoA |
| 2C unit | Malonyl-CoA | Acetyl-CoA |
| Coenzyme | NADPH (donates) | NAD+/FAD (accept) |
| Rate-limiting | ACC | CPT-I |
| Product | Palmitate | Acetyl-CoA |
| Fed/Fasted | Fed (insulin) | Fasted (glucagon) |
| Inhibitor connection | Malonyl-CoA inhibits CPT-I | — |

## Transcriptional Regulation

### SREBP-1c (Sterol Regulatory Element Binding Protein 1c)
- Activated by **insulin**
- Upregulates: ACC, FAS, ATP-citrate lyase, malic enzyme
- Master regulator of lipogenic gene expression

### ChREBP (Carbohydrate Response Element Binding Protein)
- Activated by **glucose metabolites** (xylulose-5-phosphate from HMP shunt)
- Upregulates same lipogenic genes as SREBP-1c
- Links high carbohydrate intake to fat synthesis

### AMPK (AMP-Activated Protein Kinase)
- Activated by low energy (high AMP/ATP ratio), exercise, metformin
- **Phosphorylates ACC → INACTIVATES it** → malonyl-CoA decreases → FA synthesis OFF + beta-oxidation ON
- Master metabolic energy sensor

## Regulation Summary

| Condition | ACC | FA Synthesis | CPT-I | Beta-Oxidation |
|-----------|-----|-------------|-------|----------------|
| Fed (Insulin) | Active (dephosphorylated) | ON | Inhibited (high malonyl-CoA) | OFF |
| Fasted (Glucagon) | Inactive (phosphorylated) | OFF | Active (low malonyl-CoA) | ON |
| Exercise (AMPK) | Inactive | OFF | Active | ON |

> **Clinical Pearl**: NAFLD is now the most common liver disease in urban India, driven by high carbohydrate diets that upregulate SREBP-1c and ChREBP → increased de novo lipogenesis. Lifestyle modification (diet + exercise) activates AMPK, which simultaneously reduces FA synthesis and promotes FA oxidation — the biochemical basis for exercise benefits in fatty liver.`,
        mnemonics: [
          { text: "AMPK = Anti-fat Master Protein Kinase", explanation: "AMPK phosphorylates ACC → inactive → malonyl-CoA drops → FA synthesis OFF + beta-oxidation ON. Activated by exercise, fasting, metformin" },
          { text: "ACP = Acyl Carrier Protein (synthesis); CoA = carrier in oxidation", explanation: "FA synthesis uses ACP arm; Beta-oxidation uses CoA. Both contain phosphopantetheine from vitamin B5" }
        ],
        keyPoints: ["FAS: 4-step cycle (condense, reduce, dehydrate, reduce) x 7 = palmitate", "Synthesis uses NADPH and ACP; Oxidation uses NAD+/FAD and CoA", "SREBP-1c (insulin) and ChREBP (glucose) upregulate lipogenic genes", "AMPK: master energy sensor; phosphorylates ACC → turns off FA synthesis, turns on beta-oxidation", "Malonyl-CoA is the key switch: high = synthesis ON/oxidation OFF"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 23", edition: "31st" }] },
      { layer: 3, slug: "fa-synthesis-clinical", title: "Fatty Acid Synthesis - Clinical", estimatedMinutes: 15,
        summary: "Clinical relevance: NAFLD, obesity, ACC as drug target, and metabolic consequences of excess lipogenesis.",
        contentMd: `# Clinical Applications

## Non-Alcoholic Fatty Liver Disease (NAFLD)
- **Most common liver disease globally** and increasingly in India
- Spectrum: Steatosis → NASH (steatohepatitis) → Fibrosis → Cirrhosis → HCC
- **Mechanism**: Insulin resistance → hyperinsulinemia → SREBP-1c upregulation → increased de novo lipogenesis → hepatic fat accumulation
- **Indian context**: Urban prevalence 25-30%; linked to high-carbohydrate diets, metabolic syndrome, 'thin-fat Indian' phenotype
- **Treatment**: Weight loss (7-10%), exercise, pioglitazone (NASH), vitamin E, bariatric surgery

## Obesity and Lipogenesis
- Excess caloric intake (especially carbohydrates) → increased acetyl-CoA → upregulated ACC and FAS → more fat synthesis
- **Insulin resistance**: Paradoxically, hepatic lipogenesis remains insulin-sensitive (via SREBP-1c) while gluconeogenesis becomes insulin-resistant → simultaneous hyperglycemia AND fatty liver

## ACC Inhibitors (Novel Drugs)
- **Firsocostat**: ACC1/ACC2 inhibitor being developed for NASH
- Reduces hepatic lipogenesis and promotes FA oxidation
- Clinical trials ongoing

## Cerulenin and C75
- **Cerulenin**: Natural FAS inhibitor (from fungi) — anti-cancer interest
- **C75**: Synthetic FAS inhibitor → reduces food intake and body weight in animal models
- FAS is upregulated in many cancers → potential therapeutic target

> **Clinical Pearl**: In Indian dietary counseling for NAFLD, reducing refined carbohydrate intake (white rice, sweets, sugary beverages) is as important as reducing fat intake. The biochemical rationale: excess carbohydrates → increased citrate shuttle activity → acetyl-CoA → ACC → malonyl-CoA → palmitate → hepatic triglycerides.`,
        mnemonics: [
          { text: "NAFLD = New Age Fatty Liver from Diet", explanation: "NAFLD is driven by modern high-carb diets and sedentary lifestyle → upregulated de novo lipogenesis via SREBP-1c and ChREBP" }
        ],
        keyPoints: ["NAFLD: most common liver disease; driven by insulin resistance and excess lipogenesis", "SREBP-1c: insulin-driven lipogenic transcription factor; stays active in insulin resistance", "AMPK activation (exercise, metformin) inhibits ACC → reduces lipogenesis", "FAS is upregulated in many cancers → potential drug target", "Reducing carbs is key dietary advice for NAFLD in Indian patients"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 23", edition: "31st" }, { book: "Harrison's Medicine", chapter: "Ch 337: NAFLD", edition: "21st" }] },
      { layer: 4, slug: "fa-synthesis-exam", title: "Fatty Acid Synthesis - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield FA synthesis points for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- FA synthesis location: **Cytoplasm**
- Rate-limiting enzyme: **Acetyl-CoA Carboxylase (ACC)**
- ACC requires: **Biotin** + ATP
- ACC product: **Malonyl-CoA**
- Multi-enzyme complex: **Fatty Acid Synthase (FAS)**
- FAS product: **Palmitate (C16:0)**
- Number of NADPH per palmitate: **14**
- NADPH sources: **HMP shunt + Malic enzyme**
- Citrate shuttle exports: **Acetyl-CoA from mitochondria to cytoplasm**
- ACC activated by: **Citrate, Insulin**
- ACC inhibited by: **Palmitoyl-CoA, Glucagon, AMPK**
- Carrier in FA synthesis: **ACP (with phosphopantetheine)**
- Carrier in beta-oxidation: **CoA**
- Humans lack: **Delta-12 and Delta-15 desaturases** (essential FA reason)
- SREBP-1c activated by: **Insulin** (lipogenic gene expression)
- AMPK activated by: **Low energy, exercise, metformin**

## Comparison Quick Table
| Parameter | Synthesis | Oxidation |
|-----------|----------|-----------|
| Location | Cytoplasm | Mitochondria |
| Coenzyme | NADPH | NAD+/FAD |
| 2C unit | Malonyl-CoA | Acetyl-CoA |
| Regulated by | Insulin (ON) | Glucagon (ON) |
| Rate-limiting | ACC | CPT-I |`,
        mnemonics: [
          { text: "ACC: Activated by Citrate, Carbohydrates (insulin); inhibited by AMPK", explanation: "ACC is the gatekeeper: Citrate from mitochondria signals substrate availability; Insulin signals fed state; AMPK signals low energy → shut down synthesis" }
        ],
        keyPoints: ["ACC = rate-limiting; uses biotin; makes malonyl-CoA", "14 NADPH per palmitate; 7 cycles of FAS", "Insulin → SREBP-1c → lipogenic genes ON", "AMPK → ACC phosphorylation → FA synthesis OFF"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 23", edition: "31st" }] },
      { layer: 5, slug: "fa-synthesis-recall", title: "Fatty Acid Synthesis - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test for fatty acid synthesis.",
        contentMd: `# Active Recall

**Q1:** Where does fatty acid synthesis occur?
> Cytoplasm (mainly liver)

**Q2:** What is the rate-limiting enzyme of FA synthesis?
> Acetyl-CoA carboxylase (ACC) — requires biotin

**Q3:** What is the product of ACC?
> Malonyl-CoA

**Q4:** How many NADPH are needed to make one palmitate?
> 14 NADPH

**Q5:** What are the sources of NADPH for FA synthesis?
> HMP shunt (G6PD pathway) and Malic enzyme (citrate shuttle)

**Q6:** How does acetyl-CoA exit the mitochondria for FA synthesis?
> Citrate shuttle: Acetyl-CoA + OAA → Citrate (exits mitochondria) → ATP-citrate lyase → Acetyl-CoA + OAA

**Q7:** Why can't humans synthesize linoleic and linolenic acid?
> We lack delta-12 and delta-15 desaturases

**Q8:** What does AMPK do to ACC?
> Phosphorylates and inactivates ACC → malonyl-CoA drops → FA synthesis OFF + beta-oxidation ON

**Q9:** What transcription factor does insulin activate for lipogenic genes?
> SREBP-1c (upregulates ACC, FAS, ATP-citrate lyase)

**Q10:** How does malonyl-CoA prevent futile cycling?
> Malonyl-CoA (from ACC during FA synthesis) inhibits CPT-I → blocks FA entry into mitochondria for beta-oxidation`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering ACC, FAS, NADPH sources, citrate shuttle, and regulation"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 23", edition: "31st" }] },
    ],
  },

  // ─── Topic 5: Lipid Storage Diseases ──────────────────────────
  {
    topicCode: "BI-MOD-04-TOP-05",
    layers: [
      { layer: 1, slug: "lipid-storage-diseases-foundation", title: "Lipid Storage Diseases - Foundation", estimatedMinutes: 20,
        summary: "Lipid storage diseases (sphingolipidoses) are lysosomal storage disorders caused by deficiency of enzymes degrading sphingolipids. Each has characteristic substrate accumulation and clinical features.",
        contentMd: `# Lipid Storage Diseases (Sphingolipidoses)

## Overview
- **Lysosomal storage disorders**: Deficiency of specific lysosomal hydrolases
- **Substrate accumulates** in lysosomes → cell dysfunction → organ damage
- All are **autosomal recessive** EXCEPT **Fabry disease** (X-linked recessive)
- Primarily affect **nervous system** (brain rich in sphingolipids)

## Major Sphingolipidoses

| Disease | Enzyme Deficiency | Accumulated Substrate | Key Features |
|---------|-------------------|----------------------|-------------|
| **Gaucher** | Glucocerebrosidase (beta-glucosidase) | Glucocerebroside | Most common; hepatosplenomegaly, Gaucher cells, bone crises |
| **Tay-Sachs** | Hexosaminidase A | GM2 ganglioside | Cherry-red macula, progressive neurodegeneration, death by 2-4 years |
| **Niemann-Pick** (A,B) | Sphingomyelinase | Sphingomyelin | Hepatosplenomegaly, cherry-red macula (Type A), foam cells |
| **Fabry** | Alpha-galactosidase A | Globotriaosylceramide (Gb3) | X-linked; angiokeratomas, renal failure, neuropathic pain |
| **Krabbe** | Galactocerebroside beta-galactosidase (Galactosylceramidase) | Galactocerebroside | Globoid cells, severe CNS degeneration, peripheral neuropathy |
| **Metachromatic Leukodystrophy** | Arylsulfatase A | Sulfatide (cerebroside sulfate) | Demyelination, metachromatic granules |
| **Farber** | Ceramidase | Ceramide | Hoarse cry, joint deformity, subcutaneous nodules |

## Gaucher Disease (Most Common Sphingolipidosis)
- **Type 1 (Non-neuronopathic)**: 99% of cases; adult; hepatosplenomegaly, bone crises (avascular necrosis), Erlenmeyer flask deformity of femur, pancytopenia
- **Type 2 (Acute neuronopathic)**: Infantile; severe CNS disease, death by age 2
- **Type 3 (Subacute neuronopathic)**: Childhood; moderate CNS + visceral disease
- **Histology**: **Gaucher cells** — large macrophages with "crinkled tissue paper" cytoplasm
- **Treatment**: **ERT** (Imiglucerase/Velaglucerase) — first lysosomal disease treated with ERT
- **Substrate reduction therapy**: Miglustat (inhibits glucosylceramide synthase)

## Tay-Sachs Disease
- **Hexosaminidase A** deficiency → GM2 ganglioside accumulates in neurons
- **Ashkenazi Jewish** population (1 in 30 carrier frequency)
- **Infantile form**: Normal at birth → progressive neurodegeneration from 3-6 months
- **Cherry-red spot** on macula (ganglioside-laden neurons surround the fovea; fovea appears red because it lacks ganglion cells)
- **Startle response** (hyperacusis) to loud sounds
- **No hepatosplenomegaly** (unlike Niemann-Pick)
- Diagnosis: Enzyme assay for Hex A activity
- **No treatment available**; death by 2-4 years

## Niemann-Pick Disease
- **Type A**: Infantile, severe; sphingomyelinase deficiency; hepatosplenomegaly + cherry-red spot + foam cells; death by age 3
- **Type B**: Later onset; visceral disease without CNS; compatible with longer survival
- **Type C**: Different gene (NPC1); cholesterol trafficking defect; vertical supranuclear gaze palsy

> **Clinical Pearl**: Gaucher disease is the most common lysosomal storage disorder globally. In India, it is increasingly being diagnosed with improved awareness. ERT (imiglucerase) is available but expensive. The Indian government has included Gaucher disease under the National Policy for Rare Diseases (2021), providing partial funding for treatment.`,
        mnemonics: [
          { text: "No-man PICKS his nose with his SPHINGER (sphingomyelinase)", explanation: "Niemann-Pick: Sphingomyelinase deficiency → Sphingomyelin accumulates" },
          { text: "TAY-SAChS = Hexosaminidase A = GM2 ganglioside = Cherry-red spot", explanation: "Tay-Sachs: Hexosaminidase A deficient → GM2 ganglioside accumulates in neurons → cherry-red macula" }
        ],
        keyPoints: ["All sphingolipidoses are AR EXCEPT Fabry (X-linked)", "Gaucher: most common; glucocerebrosidase def; Gaucher cells (crinkled tissue paper); ERT available", "Tay-Sachs: Hex A def; GM2 ganglioside; cherry-red spot; NO hepatosplenomegaly; death by 2-4 years", "Niemann-Pick A: sphingomyelinase def; cherry-red spot WITH hepatosplenomegaly + foam cells", "Fabry: X-linked; alpha-gal A def; angiokeratomas, renal failure, neuropathic pain", "Krabbe: galactosylceramidase def; globoid cells; severe CNS degeneration"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 24: Sphingolipid Metabolism", edition: "31st" }, { book: "Robbins Pathology", chapter: "Ch 6: Genetic Disorders", edition: "10th" }] },
      { layer: 2, slug: "lipid-storage-diseases-mechanism", title: "Lipid Storage Diseases - Mechanism", estimatedMinutes: 25,
        summary: "Sphingolipid degradation pathway, molecular basis of substrate accumulation, and how ERT and substrate reduction therapy work.",
        contentMd: `# Lipid Storage Diseases: Detailed Mechanisms

## Sphingolipid Degradation Pathway
Sphingolipids are degraded sequentially in lysosomes, each step requiring a specific enzyme:

Ganglioside GM1 → (beta-galactosidase) → GM2
GM2 → (Hexosaminidase A) → GM3
GM3 → (neuraminidase) → Lactosylceramide
Lactosylceramide → (beta-galactosidase) → Glucocerebroside
Glucocerebroside → (Glucocerebrosidase) → Ceramide
Sphingomyelin → (Sphingomyelinase) → Ceramide
Ceramide → (Ceramidase) → Sphingosine + Fatty acid

## Why Nervous System is Predominantly Affected
- Brain has the **highest concentration of gangliosides** (especially GM1, GM2)
- Gangliosides are crucial for neuronal membrane function and signaling
- Accumulation disrupts neuronal function → neurodegeneration
- Blood-brain barrier limits ERT effectiveness for CNS disease

## Enzyme Replacement Therapy (ERT)
| Disease | ERT Drug | Route |
|---------|----------|-------|
| Gaucher | Imiglucerase, Velaglucerase | IV (targets macrophages via mannose receptors) |
| Fabry | Agalsidase alfa, Agalsidase beta | IV |
| MPS I (Hurler) | Laronidase | IV |
| Pompe | Alglucosidase alfa | IV |

- **Limitations**: Cannot cross BBB → ineffective for CNS disease
- Effective for visceral and bone manifestations

## Substrate Reduction Therapy (SRT)
- **Miglustat**: Inhibits glucosylceramide synthase → reduces substrate production
- Used in: Gaucher Type 1 (mild), Niemann-Pick Type C
- **Eliglustat**: More specific SRT for Gaucher (oral, first-line option now)
- Advantage: Oral administration, crosses BBB partially

## Chaperone Therapy
- Small molecules that stabilize misfolded enzyme → improve its trafficking to lysosomes
- **Migalastat**: For Fabry disease (works for amenable GLA mutations)

## Activator Protein Defects
- Some sphingolipid hydrolases need **activator proteins** (saposins)
- Deficiency of activator proteins → same clinical picture as enzyme deficiency
- **Saposin B deficiency**: Mimics Metachromatic Leukodystrophy
- **GM2 activator deficiency**: AB variant of Tay-Sachs (normal Hex A but cannot access substrate)

## Gaucher Cells — Histological Detail
- Macrophages with glucocerebroside-filled lysosomes
- **Crinkled tissue paper** or **wrinkled paper** appearance on light microscopy
- PAS-positive, acid phosphatase positive
- Found in: Spleen, liver, bone marrow

## Fabry Disease — Detailed
- X-linked → males predominantly affected; carrier females may have mild disease
- **Angiokeratomas**: Dark red papules (bathing trunk distribution)
- **Corneal dystrophy** (cornea verticillata — whorl-like)
- **Neuropathic pain**: Burning pain in hands and feet (acroparesthesias), especially in heat/exercise
- **Renal failure**: Progressive (most common cause of death)
- Cardiac: LVH, arrhythmias
- Cerebrovascular: Young stroke

> **Clinical Pearl**: In India, Fabry disease is often misdiagnosed as rheumatic fever (due to acroparesthesias in children) or idiopathic renal failure in young adults. Maintaining clinical suspicion in young males with unexplained neuropathic pain, proteinuria, and LVH is important. Dried blood spot testing can be used for screening.`,
        mnemonics: [
          { text: "Gaucher cells = Crinkled tissue paper macrophages", explanation: "The characteristic histological appearance of glucocerebroside-laden macrophages in Gaucher disease resembles crinkled tissue paper or wrinkled paper" },
          { text: "Fabry = X-linked = renal Failure + Angiokeratomas + Burning pain + corneal Y-whorl", explanation: "Fabry is the only X-linked sphingolipidosis: alpha-galactosidase A deficiency → Gb3 accumulation → multi-organ disease" }
        ],
        keyPoints: ["Sphingolipid degradation: sequential lysosomal enzyme pathway", "ERT: targets visceral disease (mannose receptor targeting) but cannot cross BBB for CNS disease", "SRT (miglustat, eliglustat): reduces substrate production; oral alternative for Gaucher", "Gaucher cells: crinkled tissue paper macrophages; PAS+, acid phosphatase+", "Fabry: only X-linked sphingolipidosis; angiokeratomas, renal failure, neuropathic pain", "Activator protein defects can mimic enzyme deficiency (saposins)"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 24", edition: "31st" }, { book: "Robbins Pathology", chapter: "Ch 6", edition: "10th" }] },
      { layer: 3, slug: "lipid-storage-diseases-clinical", title: "Lipid Storage Diseases - Clinical", estimatedMinutes: 20,
        summary: "Diagnostic approach, cherry-red spot differential, newborn screening, and Indian context for rare disease management.",
        contentMd: `# Clinical Applications

## Cherry-Red Spot — Differential Diagnosis
| Disease | Enzyme | Cherry-Red Spot | Hepatosplenomegaly |
|---------|--------|----------------|-------------------|
| Tay-Sachs | Hex A | YES | NO |
| Niemann-Pick A | Sphingomyelinase | YES | YES |
| Sandhoff | Hex A + Hex B | YES | YES |
| GM1 Gangliosidosis | beta-galactosidase | YES | YES |

**Key distinction**: Tay-Sachs = cherry-red spot WITHOUT hepatosplenomegaly

## Diagnostic Approach
1. **Clinical suspicion**: Neurodegenerative disease in infant, hepatosplenomegaly, specific features
2. **Enzyme assay**: Gold standard — measure specific enzyme activity in leukocytes or fibroblasts
3. **Genetic testing**: Confirm mutation, carrier testing, prenatal diagnosis
4. **Biomarkers**: Chitotriosidase (elevated in Gaucher), lyso-Gb3 (Fabry)
5. **Bone marrow biopsy**: Gaucher cells (not routinely needed if enzyme confirmed)
6. **Prenatal diagnosis**: CVS at 10-12 weeks or amniocentesis at 16 weeks

## Newborn Screening
- Dried blood spot (DBS) testing using tandem mass spectrometry
- Screening for: Gaucher, Fabry, Pompe, MPS I (varies by country)
- Early detection → early ERT → better outcomes
- **India**: Being introduced at select centers (AIIMS, CMC Vellore, NIMHANS)

## Indian Context for Rare Diseases
- National Policy for Rare Diseases (2021):
  - Category 1: One-time curative (e.g., bone marrow transplant) — funded up to 50 lakhs
  - Category 2: Diseases requiring lifelong therapy (e.g., Gaucher, Fabry) — crowdfunding support
  - Category 3: Diseases with experimental treatments — research funding
- **Challenges**: High cost of ERT, limited access in rural areas, delayed diagnosis
- **Consanguinity**: Higher rates in some Indian communities → increased recurrence risk

## Gene Therapy (Future)
- Lentiviral/AAV vector-based gene therapy under investigation for several sphingolipidoses
- **Gaucher**: Gene therapy trials showing promising results
- **Krabbe/MLD**: Hematopoietic stem cell gene therapy in clinical trials
- Potential to address CNS disease (which ERT cannot)

> **Clinical Pearl**: In India, marriage within the same community (endogamy) and consanguineous marriages increase the risk of autosomal recessive disorders including sphingolipidoses. Genetic counseling and carrier screening in high-risk communities can help with prevention. Organizations like LSDSS (Lysosomal Storage Disorders Support Society) in India provide patient advocacy and support.`,
        mnemonics: [
          { text: "Tay-Sachs: Cherry spot WITHOUT big liver/spleen; Niemann-Pick: Cherry spot WITH big liver/spleen", explanation: "Key differentiating point for exam: Both have cherry-red spot, but Tay-Sachs has NO hepatosplenomegaly while Niemann-Pick A has hepatosplenomegaly" }
        ],
        keyPoints: ["Cherry-red spot differential: Tay-Sachs (no HSM) vs Niemann-Pick A (with HSM)", "Enzyme assay on leukocytes/fibroblasts is gold standard diagnosis", "Prenatal diagnosis possible via CVS/amniocentesis", "India's Rare Disease Policy (2021) provides some financial support", "ERT available for Gaucher, Fabry, Pompe; cannot cross BBB for CNS disease", "Consanguinity in Indian communities increases sphingolipidosis risk"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 24", edition: "31st" }, { book: "Robbins Pathology", chapter: "Ch 6", edition: "10th" }] },
      { layer: 4, slug: "lipid-storage-diseases-exam", title: "Lipid Storage Diseases - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield sphingolipidosis comparison table and one-liners for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## Master Table (Must Memorize)

| Disease | Enzyme | Substrate | Key Feature |
|---------|--------|-----------|-------------|
| Gaucher | Glucocerebrosidase | Glucocerebroside | Most common; crinkled paper cells |
| Tay-Sachs | Hex A | GM2 ganglioside | Cherry-red spot, NO HSM |
| Niemann-Pick A | Sphingomyelinase | Sphingomyelin | Cherry-red spot + HSM + foam cells |
| Fabry | alpha-Gal A | Gb3 | X-linked; angiokeratomas, renal failure |
| Krabbe | Galactosylceramidase | Galactocerebroside | Globoid cells |
| MLD | Arylsulfatase A | Sulfatide | Metachromatic granules, demyelination |

## One-Liners
- Only X-linked sphingolipidosis: **Fabry disease**
- Most common sphingolipidosis: **Gaucher disease**
- Crinkled tissue paper cells: **Gaucher**
- Foam cells (lipid-laden macrophages): **Niemann-Pick**
- Globoid cells: **Krabbe disease**
- Cherry-red spot WITHOUT hepatosplenomegaly: **Tay-Sachs**
- Cherry-red spot WITH hepatosplenomegaly: **Niemann-Pick A (also Sandhoff, GM1)**
- Startle response (hyperacusis): **Tay-Sachs**
- Angiokeratomas + renal failure: **Fabry**
- First disease treated with ERT: **Gaucher (imiglucerase)**
- Substrate reduction therapy: **Miglustat, Eliglustat (Gaucher)**

## Pattern Recognition
- Q: "Ashkenazi Jewish infant with developmental regression + cherry-red spot" → **Tay-Sachs**
- Q: "Adult with hepatosplenomegaly + bone pain + Erlenmeyer flask deformity" → **Gaucher Type 1**
- Q: "Young male with burning pain in extremities + angiokeratomas" → **Fabry**
- Q: "Infant with progressive CNS disease + globoid cells on biopsy" → **Krabbe**`,
        mnemonics: [
          { text: "Fabry is the LONE X-linked sphinx (sphingolipidosis)", explanation: "All sphingolipidoses are autosomal recessive EXCEPT Fabry disease, which is X-linked recessive" }
        ],
        keyPoints: ["Gaucher = most common; Fabry = only X-linked", "Cherry-red spot without HSM = Tay-Sachs; with HSM = Niemann-Pick A", "Gaucher cells = crinkled tissue paper; Krabbe = globoid cells; Niemann-Pick = foam cells", "ERT first used for Gaucher; SRT (eliglustat) now oral first-line for Gaucher type 1"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 24", edition: "31st" }] },
      { layer: 5, slug: "lipid-storage-diseases-recall", title: "Lipid Storage Diseases - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test for lipid storage diseases.",
        contentMd: `# Active Recall

**Q1:** What is the most common sphingolipidosis?
> Gaucher disease (glucocerebrosidase deficiency)

**Q2:** What accumulates in Tay-Sachs disease?
> GM2 ganglioside (due to Hexosaminidase A deficiency)

**Q3:** How do you differentiate Tay-Sachs from Niemann-Pick A on exam?
> Both have cherry-red macula, but Tay-Sachs has NO hepatosplenomegaly; Niemann-Pick A has hepatosplenomegaly + foam cells

**Q4:** Which is the only X-linked sphingolipidosis?
> Fabry disease (alpha-galactosidase A deficiency)

**Q5:** What are the characteristic cells in Gaucher disease?
> Gaucher cells — macrophages with crinkled tissue paper cytoplasm (glucocerebroside-laden)

**Q6:** What is the enzyme deficiency in Krabbe disease?
> Galactosylceramidase (galactocerebroside beta-galactosidase) — globoid cells on histology

**Q7:** What treatment is available for Gaucher disease?
> ERT (imiglucerase, velaglucerase) or SRT (eliglustat, miglustat)

**Q8:** What is the clinical triad of Fabry disease?
> Angiokeratomas + neuropathic pain (acroparesthesias) + renal failure

**Q9:** Why can't ERT treat the CNS manifestations of sphingolipidoses?
> ERT enzymes cannot cross the blood-brain barrier

**Q10:** What is Niemann-Pick Type C?
> Cholesterol trafficking defect (NPC1 gene) — different from Types A/B; presents with vertical supranuclear gaze palsy + neurodegeneration`,
        mnemonics: [],
        keyPoints: ["10 recall questions covering all major sphingolipidoses, their enzyme defects, and clinical features"],
        textbookRefs: [{ book: "Harper's Biochemistry", chapter: "Ch 24", edition: "31st" }] },
    ],
  },
];
