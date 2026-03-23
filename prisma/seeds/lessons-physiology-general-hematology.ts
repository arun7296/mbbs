// 5-layer lessons for Physiology — General Physiology + Hematology & Immunology
import type { TopicLessons } from "./content-loader";

export const physiologyGeneralHematologyLessons: TopicLessons[] = [
  // ═══════════════════════════════════════════════════════════════
  // PY-MOD-01-TOP-02: Resting Membrane Potential
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "PY-MOD-01-TOP-02",
    layers: [
      { layer: 1, slug: "layer-1-foundation", title: "Resting Membrane Potential - Foundation", estimatedMinutes: 20,
        summary: "The resting membrane potential (RMP) is the electrical potential difference across the cell membrane at rest, typically -70 mV in neurons. It arises from unequal ion distribution maintained by the Na+/K+-ATPase pump and selective membrane permeability to K+.",
        contentMd: `# Resting Membrane Potential (RMP)

## Definition
The electrical potential difference across the cell membrane when the cell is at rest, typically **-70 mV** in neurons (inside negative relative to outside).

## Ion Distribution Across Membrane

| Ion | Intracellular (mM) | Extracellular (mM) | Ratio |
|-----|-------------------|-------------------|-------|
| K+ | 140 | 5 | 28:1 (in:out) |
| Na+ | 10 | 145 | 1:14.5 |
| Cl- | 10 | 110 | 1:11 |
| Proteins/Phosphates | 155 | Negligible | - |

## Normal RMP Values

| Cell Type | RMP (mV) |
|-----------|----------|
| Neuron | -70 |
| Cardiac myocyte | -85 to -90 |
| Skeletal muscle | -85 to -90 |
| Smooth muscle | -50 to -60 |
| RBC | -8.6 |

## Factors Responsible for RMP
1. **Unequal ion distribution** (maintained by Na+/K+-ATPase)
2. **Selective membrane permeability** (K+ permeability >> Na+ permeability)
3. **Non-diffusible intracellular anions** (proteins, phosphates)
4. **Na+/K+-ATPase pump** (electrogenic: 3 Na+ out, 2 K+ in per ATP)
5. **Gibbs-Donnan equilibrium** effects

## Na+/K+-ATPase (The Sodium-Potassium Pump)
- **Location**: Plasma membrane of all cells
- **Function**: Maintains ion gradients essential for RMP
- **Transport**: 3 Na+ OUT, 2 K+ IN per ATP hydrolyzed
- **Electrogenic effect**: Net outward movement of positive charge (contributes ~-4 mV to RMP)
- **Energy requirement**: Consumes ~20-40% of resting cellular ATP
- **Inhibition**: Cardiac glycosides (digoxin, ouabain), anoxia

## Key Concept
RMP is primarily determined by **K+ equilibrium** because the membrane at rest is ~100 times more permeable to K+ than to Na+. K+ leaks out through leak channels, leaving behind negative charges (proteins), creating the negative inside potential.`,
        mnemonics: [
          { text: "K-OUT, Na-IN: K+ high inside, Na+ high outside", explanation: "Key ion distribution across cell membrane at rest; K+ concentration is high intracellularly (140 mM) and Na+ is high extracellularly (145 mM)" },
          { text: "3-2 pump: 3 Na+ out, 2 K+ in = electrogenic (net positive charge out)", explanation: "Na+/K+-ATPase pumps 3 sodium ions out and 2 potassium ions in per ATP, creating net outward positive current" }
        ],
        keyPoints: [
          "RMP is approximately -70 mV in neurons (inside negative)",
          "K+ is the primary ion determining RMP due to highest resting permeability",
          "Na+/K+-ATPase pumps 3 Na+ out and 2 K+ in per ATP (electrogenic)",
          "Membrane is ~100x more permeable to K+ than Na+ at rest",
          "Na+/K+-ATPase consumes 20-40% of cellular ATP",
          "Cardiac glycosides (digoxin) inhibit Na+/K+-ATPase"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 5 - Membrane Potentials and Action Potentials", edition: "14th" }] },

      { layer: 2, slug: "layer-2-mechanism", title: "Resting Membrane Potential - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms underlying RMP generation including the Nernst equation for individual ion equilibrium potentials, Goldman-Hodgkin-Katz equation for multi-ion systems, and the role of chloride and Gibbs-Donnan equilibrium.",
        contentMd: `# Resting Membrane Potential - Mechanisms

## Nernst Equation
Calculates the equilibrium potential for a single ion:
\`\`\`
E = (RT/zF) x ln([ion]outside / [ion]inside)
At 37 degrees C: E = (61.5/z) x log([ion]outside / [ion]inside)
\`\`\`

### Equilibrium Potentials

| Ion | Equilibrium Potential (mV) |
|-----|--------------------------|
| K+ (EK) | -94 |
| Na+ (ENa) | +61 |
| Cl- (ECl) | -76 |

- RMP (-70 mV) is close to EK (-94) but not equal, because Na+ permeability is not zero

## Goldman-Hodgkin-Katz (GHK) Equation
Accounts for multiple ions and their relative permeabilities:
\`\`\`
Vm = (RT/F) x ln[(PK[K+]o + PNa[Na+]o + PCl[Cl-]i) / (PK[K+]i + PNa[Na+]i + PCl[Cl-]o)]
\`\`\`
- At rest: PK : PNa : PCl = 1 : 0.01 : 0.45
- During action potential peak: PK : PNa : PCl = 1 : 20 : 0.45

## Step-by-Step Genesis of RMP
1. Na+/K+-ATPase creates and maintains ion concentration gradients
2. At rest, K+ leak channels are predominantly open
3. K+ diffuses out along its concentration gradient (high inside to low outside)
4. Non-diffusible intracellular anions (proteins) remain inside
5. This creates a charge separation: negative inside, positive outside
6. Equilibrium reached when electrical force pulling K+ back in = chemical force pushing K+ out
7. Na+/K+-ATPase contributes additional -4 mV (electrogenic contribution)
8. Small but constant Na+ leak inward prevents RMP from reaching EK

## Role of Chloride
- Cl- distributes passively according to RMP in most cells
- In neurons with active Cl- transport (KCC2 cotransporter), ECl may differ from RMP
- Important for inhibitory synaptic transmission (GABA-A receptor opens Cl- channels)

## Gibbs-Donnan Equilibrium
- Non-diffusible intracellular proteins carry net negative charge
- This causes unequal distribution of diffusible ions across the membrane
- Results in slightly more cations inside and slightly more anions outside than predicted by concentration alone
- Contributes to the osmotic gradient that would cause cell swelling without Na+/K+-ATPase compensation

## Factors Altering RMP

| Factor | Effect on RMP | Mechanism |
|--------|--------------|-----------|
| Hyperkalemia | Depolarization (less negative) | Decreased K+ gradient |
| Hypokalemia | Hyperpolarization (more negative) | Increased K+ gradient |
| Increased Na+ permeability | Depolarization | Na+ influx |
| Ouabain/Digoxin | Depolarization | Na+/K+-ATPase inhibition |
| Hypothermia | Depolarization | Reduced pump activity |
| Anoxia | Depolarization | ATP depletion, pump failure |`,
        mnemonics: [
          { text: "NERNST = Ninety-four for K+ (EK = -94 mV)", explanation: "The Nernst equilibrium potential for potassium is -94 mV; RMP (-70 mV) is close but not equal due to some Na+ permeability" },
          { text: "HyperK = Hyper-excitable (depolarized); HypoK = Hypo-excitable (hyperpolarized)", explanation: "Hyperkalemia depolarizes the membrane (closer to threshold), while hypokalemia hyperpolarizes it (further from threshold)" }
        ],
        keyPoints: [
          "Nernst equation gives equilibrium potential for single ion; GHK equation for multiple ions",
          "EK = -94 mV, ENa = +61 mV; RMP (-70 mV) is closer to EK due to high K+ permeability",
          "At rest PK:PNa:PCl = 1:0.01:0.45; during AP peak Na+ permeability increases 5000-fold",
          "Hyperkalemia causes depolarization; hypokalemia causes hyperpolarization",
          "Gibbs-Donnan equilibrium results from non-diffusible intracellular anions",
          "Na+/K+-ATPase contributes approximately -4 mV to RMP (electrogenic)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 5 - Membrane Potentials and Action Potentials", edition: "14th" }, { book: "Ganong", chapter: "Ch 2 - Excitable Tissue: Nerve", edition: "26th" }] },

      { layer: 3, slug: "layer-3-clinical", title: "Resting Membrane Potential - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical conditions related to RMP disturbances including hyperkalemia and hypokalemia, digoxin toxicity, local anesthetic mechanism, and channelopathies.",
        contentMd: `# Resting Membrane Potential - Clinical Application

## Hyperkalemia (Serum K+ > 5.5 mEq/L)
- **Mechanism**: Decreased K+ gradient --> membrane depolarization
- **Mild depolarization**: Increased excitability (closer to threshold)
- **Severe depolarization**: Inactivation of Na+ channels --> decreased excitability, paralysis
- **ECG changes** (progressive):
  1. Peaked T waves (earliest sign, K+ > 5.5)
  2. Prolonged PR interval (K+ > 6.5)
  3. Widened QRS complex (K+ > 7.0)
  4. Sine wave pattern --> cardiac arrest (K+ > 8.0)
- **Causes in India**: Acute kidney injury, rhabdomyolysis, crush injuries (earthquake, building collapse), ACEi/ARB + spironolactone
- **Emergency treatment**: IV Calcium gluconate (membrane stabilizer), insulin + glucose (shifts K+ intracellularly), nebulized salbutamol

## Hypokalemia (Serum K+ < 3.5 mEq/L)
- **Mechanism**: Increased K+ gradient --> membrane hyperpolarization
- **Effect**: Difficult to reach threshold --> muscle weakness, paralysis
- **ECG changes**: Flattened T waves, U waves, ST depression, prolonged QT
- **Causes in India**: Diarrheal diseases (cholera, gastroenteritis), diuretic use, RTA
- **Complication**: Hypokalemia potentiates digoxin toxicity

## Digoxin and Na+/K+-ATPase
- **Mechanism**: Digoxin inhibits Na+/K+-ATPase --> intracellular Na+ increases --> Na+/Ca2+ exchanger reverses --> intracellular Ca2+ increases --> increased contractility (positive inotrope)
- **Therapeutic use**: Heart failure (increases contractility), atrial fibrillation (slows AV conduction)
- **Toxicity features**: Nausea, vomiting, visual disturbances (yellow vision), arrhythmias
- **Hypokalemia worsens toxicity**: Both digoxin and K+ compete for the same binding site on Na+/K+-ATPase

## Local Anesthetics
- **Mechanism**: Block voltage-gated Na+ channels from the intracellular side
- **Effect**: Prevent depolarization and action potential generation
- **Order of block**: Pain (C fibers) > temperature > touch > pressure > motor (A-alpha fibers)
- **Clinical significance**: Preferential block of small unmyelinated fibers first

## Channelopathies (Genetic Ion Channel Disorders)

| Condition | Channel Affected | Clinical Feature |
|-----------|-----------------|-----------------|
| Long QT syndrome | K+ or Na+ channels | Syncope, sudden cardiac death |
| Myotonia congenita | Cl- channels (ClC-1) | Muscle stiffness, difficulty relaxing |
| Hyperkalemic periodic paralysis | Na+ channels (SCN4A) | Episodic paralysis with hyperkalemia |
| Hypokalemic periodic paralysis | Ca2+ or Na+ channels | Episodic paralysis with hypokalemia |
| Cystic fibrosis | CFTR (Cl- channel) | Thick mucus, lung infections |

> **Clinical Pearl**: In Indian emergency departments, hyperkalemia from acute kidney injury and diarrheal hypokalemia are among the most common electrolyte emergencies. Always check serum potassium in patients with muscle weakness or cardiac arrhythmias.`,
        mnemonics: [
          { text: "Peaked T for Tall Potassium (hyperkalemia's earliest ECG sign)", explanation: "Peaked (tall, narrow) T waves are the earliest ECG manifestation of hyperkalemia, appearing at K+ > 5.5 mEq/L" },
          { text: "Dig-K competition: Low K+ = high Dig toxicity", explanation: "Digoxin and potassium compete for the same binding site on Na+/K+-ATPase; hypokalemia increases digoxin binding and toxicity" }
        ],
        keyPoints: [
          "Hyperkalemia causes progressive ECG changes: peaked T -> wide QRS -> sine wave -> arrest",
          "Hypokalemia causes U waves and potentiates digoxin toxicity",
          "Digoxin inhibits Na+/K+-ATPase leading to increased intracellular Ca2+ via Na+/Ca2+ exchange",
          "Local anesthetics block Na+ channels; small fibers (pain) blocked first",
          "IV calcium gluconate is the first-line emergency treatment for severe hyperkalemia"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 5 - Membrane Potentials", edition: "14th" }, { book: "KD Tripathi", chapter: "Ch 37 - Cardiac Glycosides", edition: "8th" }] },

      { layer: 4, slug: "layer-4-exam-prep", title: "Resting Membrane Potential - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield one-liners and comparison tables for RMP, Nernst equation, and clinical correlations.",
        contentMd: `# Exam Preparation - Resting Membrane Potential

## One-Liners
- RMP of neuron: **-70 mV**
- RMP of cardiac myocyte: **-85 to -90 mV**
- RMP of smooth muscle: **-50 to -60 mV**
- Ion primarily responsible for RMP: **K+ (highest resting permeability)**
- EK (Nernst for K+): **-94 mV**
- ENa (Nernst for Na+): **+61 mV**
- Na+/K+-ATPase ratio: **3 Na+ out : 2 K+ in per ATP**
- Electrogenic contribution of pump: **-4 mV**
- Energy consumed by pump: **20-40% of cellular ATP**
- Pump inhibitor: **Digoxin/Ouabain**
- Resting permeability ratio: **PK : PNa = 100 : 1**
- Hyperkalemia first ECG sign: **Peaked T waves**
- Hypokalemia ECG sign: **U waves**
- GHK equation accounts for: **Multiple ions and their permeabilities**
- Nernst equation accounts for: **Single ion equilibrium**

## Comparison: Nernst vs Goldman Equation

| Feature | Nernst | Goldman (GHK) |
|---------|--------|---------------|
| Ions considered | Single ion | Multiple ions |
| Permeability | Not considered | Included |
| Output | Equilibrium potential (E_ion) | Membrane potential (Vm) |
| Clinical use | Calculate individual E_ion | Calculate actual RMP |

## Comparison: Effects of K+ Imbalance

| Feature | Hyperkalemia | Hypokalemia |
|---------|-------------|-------------|
| RMP effect | Depolarization | Hyperpolarization |
| Excitability | Initially increased, then decreased | Decreased |
| ECG | Peaked T, wide QRS | U waves, flat T |
| Muscle effect | Weakness/paralysis | Weakness/paralysis |
| Cardiac risk | Asystole/VF | Torsades de pointes |
| Digoxin interaction | Reduced toxicity | Increased toxicity |

## Previous Year Question Themes
- Genesis of RMP and role of Na+/K+-ATPase
- Nernst vs Goldman equation
- Effect of hyperkalemia and hypokalemia on RMP
- Mechanism of digoxin action
- Ion channel diseases
- Electrogenic nature of Na+/K+-ATPase`,
        mnemonics: [
          { text: "GOLD-man for MULTI-ion, NERNST for SINGLE ion", explanation: "Goldman-Hodgkin-Katz equation considers multiple ions and their permeabilities; Nernst equation calculates equilibrium for one ion at a time" }
        ],
        keyPoints: [
          "RMP (-70 mV) is closer to EK (-94) than ENa (+61) due to high K+ permeability",
          "Nernst = single ion; Goldman = multiple ions with permeabilities",
          "Both hyper- and hypokalemia ultimately cause muscle weakness (different mechanisms)",
          "Digoxin toxicity is potentiated by hypokalemia",
          "Na+/K+-ATPase is electrogenic: contributes -4 mV to RMP"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 5", edition: "14th" }] },

      { layer: 5, slug: "layer-5-active-recall", title: "Resting Membrane Potential - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on resting membrane potential concepts.",
        contentMd: `# Active Recall - Resting Membrane Potential

**Q1:** What is the normal RMP of a neuron?
> -70 mV (inside negative relative to outside)

**Q2:** Which ion is primarily responsible for maintaining the RMP and why?
> K+ because the membrane at rest is approximately 100 times more permeable to K+ than Na+

**Q3:** What does the Na+/K+-ATPase pump and in what ratio?
> 3 Na+ out and 2 K+ in per ATP hydrolyzed; it is electrogenic (contributes ~-4 mV)

**Q4:** What is the Nernst equilibrium potential for K+ and Na+?
> EK = -94 mV; ENa = +61 mV

**Q5:** Why is the actual RMP (-70 mV) different from EK (-94 mV)?
> Because Na+ permeability is not zero; small constant Na+ leak depolarizes the membrane slightly toward ENa

**Q6:** What is the difference between Nernst and Goldman equations?
> Nernst calculates equilibrium potential for one ion; Goldman (GHK) accounts for multiple ions and their relative permeabilities

**Q7:** How does hyperkalemia affect the RMP?
> Causes depolarization (less negative RMP) because the K+ concentration gradient decreases

**Q8:** What are the progressive ECG changes in hyperkalemia?
> Peaked T waves -> prolonged PR -> widened QRS -> sine wave -> cardiac arrest

**Q9:** How does digoxin increase cardiac contractility?
> Inhibits Na+/K+-ATPase -> increased intracellular Na+ -> Na+/Ca2+ exchanger reverses -> increased intracellular Ca2+ -> increased contractility

**Q10:** Why does hypokalemia increase digoxin toxicity?
> Digoxin and K+ compete for the same binding site on Na+/K+-ATPase; low K+ increases digoxin binding

**Q11:** What percentage of cellular ATP is consumed by the Na+/K+-ATPase?
> 20-40% of resting cellular ATP

**Q12:** What is the Gibbs-Donnan equilibrium?
> Unequal distribution of diffusible ions across a membrane due to the presence of non-diffusible intracellular anions (proteins)`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering RMP genesis, equations, ion channels, and clinical correlations",
          "Practice writing out the Nernst equation from memory",
          "Know the ECG progression in hyperkalemia",
          "Understand the digoxin-potassium interaction mechanism",
          "Compare RMP values across different cell types"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 5", edition: "14th" }] },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PY-MOD-01-TOP-04: Body Fluids & Compartments
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "PY-MOD-01-TOP-04",
    layers: [
      { layer: 1, slug: "layer-1-foundation", title: "Body Fluids & Compartments - Foundation", estimatedMinutes: 20,
        summary: "Total body water (TBW) is approximately 60% of body weight in adult males. It is distributed between intracellular (ICF, 2/3) and extracellular (ECF, 1/3) compartments. ECF is further divided into interstitial fluid and plasma.",
        contentMd: `# Body Fluids & Compartments - Foundation

## Total Body Water (TBW)
- **60% of body weight** in adult males (42 L in 70 kg man)
- **50%** in adult females (more adipose tissue, less water)
- **75-80%** in neonates (higher in premature infants)
- Decreases with age and increasing body fat

## Fluid Compartments

| Compartment | % Body Weight | Volume (70 kg) | Fraction of TBW |
|-------------|--------------|-----------------|-----------------|
| TBW | 60% | 42 L | 100% |
| ICF | 40% | 28 L | 2/3 (67%) |
| ECF | 20% | 14 L | 1/3 (33%) |
| Interstitial fluid | 15% | 10.5 L | 25% |
| Plasma | 5% | 3.5 L | 8% |
| Transcellular | 1-2% | 1 L | - |

## Transcellular Fluids
- CSF, synovial fluid, aqueous humor, peritoneal fluid, pericardial fluid, pleural fluid
- Not in equilibrium with ECF; separated by epithelial barriers

## Composition Differences

| Parameter | ICF | ECF (Plasma) |
|-----------|-----|-------------|
| Major cation | K+ (140 mEq/L) | Na+ (142 mEq/L) |
| Major anion | Phosphates, proteins | Cl- (103), HCO3- (24) |
| Osmolality | 290 mOsm/kg | 290 mOsm/kg |
| Protein | High | 7 g/dL (plasma) |
| pH | 7.0-7.2 | 7.35-7.45 |

## Measurement of Body Fluid Volumes (Indicator Dilution Principle)
\`\`\`
Volume = Amount of indicator administered / Concentration of indicator in sample
\`\`\`

### Indicators for Each Compartment

| Compartment | Indicator | Principle |
|-------------|-----------|-----------|
| TBW | Tritiated water (3H2O), deuterium oxide (D2O), antipyrine | Distributes in all water |
| ECF | Inulin, mannitol, sucrose, Na+, Br- | Cannot enter cells |
| Plasma | Evans blue dye (T-1824), 131I-albumin, 51Cr-RBCs | Stays in vessels |
| ICF | TBW - ECF (calculated) | Cannot be measured directly |
| Blood volume | 51Cr-labeled RBCs (direct), from PV and Hct | Direct RBC label |
| Interstitial | ECF - Plasma (calculated) | Cannot be measured directly |

## Starling Forces (Fluid Exchange Across Capillaries)
- **Capillary hydrostatic pressure** (Pc): Pushes fluid OUT (35 mmHg arterial end, 15 mmHg venous end)
- **Interstitial hydrostatic pressure** (Pi): Pushes fluid IN (usually slightly negative, -3 mmHg)
- **Plasma oncotic pressure** (pi-p): Pulls fluid IN (25 mmHg, due to albumin)
- **Interstitial oncotic pressure** (pi-i): Pulls fluid OUT (8 mmHg)
- **Net filtration pressure** = (Pc + pi-i) - (Pi + pi-p)`,
        mnemonics: [
          { text: "60-40-20 Rule: TBW 60%, ICF 40%, ECF 20% of body weight", explanation: "Simple rule for remembering fluid compartment distribution as percentage of body weight in adult males" },
          { text: "ICF = K+ kingdom; ECF = Na+ nation", explanation: "Potassium is the major intracellular cation (140 mEq/L); sodium is the major extracellular cation (142 mEq/L)" }
        ],
        keyPoints: [
          "TBW = 60% body weight in males; ICF = 2/3 of TBW, ECF = 1/3 of TBW",
          "Major ICF cation is K+; major ECF cation is Na+",
          "ICF volume is calculated (TBW - ECF), never measured directly",
          "Evans blue dye (T-1824) measures plasma volume",
          "Tritiated water or deuterium oxide measures total body water",
          "Osmolality is equal across compartments (290 mOsm/kg)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 25 - The Body Fluid Compartments", edition: "14th" }] },

      { layer: 2, slug: "layer-2-mechanism", title: "Body Fluids & Compartments - Mechanism", estimatedMinutes: 30,
        summary: "Mechanisms of fluid exchange between compartments, osmosis and tonicity, Starling forces in detail, and regulation of ECF volume and osmolality by ADH and aldosterone.",
        contentMd: `# Body Fluids & Compartments - Mechanisms

## Osmosis and Tonicity
- **Osmolarity**: Total solute concentration in a solution (mOsm/L)
- **Osmolality**: Total solute concentration per kg of solvent (mOsm/kg) - clinically preferred
- **Tonicity (effective osmolality)**: Osmolality due to NON-PENETRATING solutes only
- Normal plasma osmolality: **290 mOsm/kg**
- Calculated: 2[Na+] + [Glucose]/18 + [BUN]/2.8

### Tonicity vs Osmolality

| Solution | Osmolality | Tonicity | Effect on Cell |
|----------|-----------|---------|----------------|
| 0.9% NaCl | 308 (iso) | Isotonic | No change |
| 5% Dextrose | 278 (iso) | Hypotonic (glucose metabolized) | Cell swelling |
| 3% NaCl | 1026 (hyper) | Hypertonic | Cell shrinkage |
| Urea solution | Hyperosmolar | Isotonic (urea penetrates) | No change |

## Water Movement Between Compartments
- Water moves from LOW to HIGH osmolality (toward more concentrated side)
- **Adding isotonic NaCl**: Expands ECF only (Na+ stays extracellular)
- **Adding pure water**: Expands both ICF and ECF proportionally
- **Adding hypertonic NaCl**: Expands ECF, shrinks ICF (water moves out of cells)
- **Losing isotonic fluid** (hemorrhage): ECF shrinks only
- **Losing pure water** (insensible loss): Both compartments shrink proportionally

## Starling Forces in Detail

### At Arteriolar End of Capillary
\`\`\`
NFP = (Pc + pi-i) - (Pi + pi-p)
NFP = (35 + 8) - (-3 + 25) = 43 - 22 = +21 mmHg (NET FILTRATION)
\`\`\`

### At Venular End of Capillary
\`\`\`
NFP = (15 + 8) - (-3 + 25) = 23 - 22 = +1 mmHg (slight filtration or near equilibrium)
\`\`\`

- Excess filtered fluid returned by **lymphatic system** (2-3 L/day)
- Lymphatic failure --> edema

## Edema Formation Mechanisms
1. **Increased capillary hydrostatic pressure**: Heart failure, venous obstruction, fluid overload
2. **Decreased plasma oncotic pressure**: Nephrotic syndrome (albumin loss), liver failure (decreased synthesis), malnutrition (kwashiorkor)
3. **Increased capillary permeability**: Inflammation, burns, sepsis, anaphylaxis
4. **Lymphatic obstruction**: Filariasis (elephantiasis - common in India), post-surgical, malignancy

## Regulation of ECF Volume and Osmolality

### ADH (Vasopressin) - Controls Osmolality
- Released from posterior pituitary when osmolality rises above **280 mOsm/kg**
- Acts on **V2 receptors** in collecting duct --> inserts aquaporin-2 channels
- **Increases water reabsorption** (concentrates urine)
- **Osmoreceptors** in hypothalamus (OVLT, SFO) detect plasma osmolality changes

### Aldosterone - Controls Volume
- Released from zona glomerulosa (stimulated by Ang II, hyperkalemia)
- Acts on principal cells of collecting duct
- **Increases Na+ reabsorption and K+ secretion**
- Volume expansion without change in osmolality (water follows Na+)

### Thirst Mechanism
- Activated by: Increased osmolality, decreased blood volume, angiotensin II
- Thirst center: **Lateral hypothalamus**
- Threshold: Plasma osmolality > **290 mOsm/kg**`,
        mnemonics: [
          { text: "ADH = Anti-Dilution Hormone (retains water, concentrates urine)", explanation: "ADH acts on collecting duct to insert aquaporin-2 channels, increasing water reabsorption and concentrating urine" },
          { text: "LEAKS cause edema: Lymphatic block, Elevated capillary pressure, Albumin low, Kapillary permeability up, Sodium retention", explanation: "Five mechanisms of edema formation using the mnemonic LEAKS" }
        ],
        keyPoints: [
          "Tonicity considers only non-penetrating solutes (urea is an ineffective osmole)",
          "5% dextrose is isotonic in bag but hypotonic in vivo (glucose metabolized)",
          "Adding isotonic NaCl expands only ECF; adding water expands both ICF and ECF",
          "Starling equation determines capillary filtration; excess returned by lymphatics",
          "ADH controls osmolality (water reabsorption); aldosterone controls volume (Na+ reabsorption)",
          "Filariasis causing lymphatic edema (elephantiasis) is common in tropical India"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 25 - Body Fluid Compartments; Ch 28 - Renal Concentration and Dilution", edition: "14th" }] },

      { layer: 3, slug: "layer-3-clinical", title: "Body Fluids & Compartments - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical conditions related to fluid and electrolyte imbalances including dehydration, edema, hyponatremia, hypernatremia, and IV fluid therapy principles.",
        contentMd: `# Body Fluids & Compartments - Clinical Application

## Dehydration
### Types by Tonicity

| Type | Serum Na+ | ECF | ICF | Cause |
|------|----------|-----|-----|-------|
| Isotonic | Normal (135-145) | Decreased | Normal | Diarrhea, hemorrhage |
| Hypotonic | < 135 | Decreased | Increased (swollen cells) | Diuretics, adrenal insufficiency |
| Hypertonic | > 145 | Decreased | Decreased (shrunken cells) | Diabetes insipidus, inadequate water intake |

### Clinical Assessment of Dehydration (WHO Classification - Indian Practice)

| Degree | Fluid Loss | Signs |
|--------|-----------|-------|
| Mild (< 5%) | < 50 mL/kg | Thirst, dry mouth |
| Moderate (5-10%) | 50-100 mL/kg | Sunken eyes, decreased skin turgor, tachycardia |
| Severe (> 10%) | > 100 mL/kg | Shock, absent tears, delayed capillary refill |

## Edema - Clinical Correlations

| Condition | Mechanism | Distribution |
|-----------|-----------|-------------|
| Heart failure | Increased Pc (venous pressure) | Dependent (legs upright, sacral supine) |
| Nephrotic syndrome | Decreased pi-p (albumin loss) | Periorbital, generalized |
| Liver cirrhosis | Decreased albumin + portal HTN | Ascites, peripheral |
| Kwashiorkor | Decreased albumin (malnutrition) | Generalized, pedal |
| Filariasis | Lymphatic obstruction | Limbs (elephantiasis) |
| Angioedema | Increased permeability (histamine) | Face, lips, larynx |

## Hyponatremia (Na+ < 135 mEq/L)
- **Most common electrolyte abnormality** in hospitalized patients
- Symptoms: Nausea, headache, confusion, seizures, coma (brain edema)
- **SIADH**: Excess ADH --> water retention --> dilutional hyponatremia
- **Treatment**: Water restriction (mild); 3% NaCl for severe/symptomatic
- **Correction rate**: Do NOT exceed 8-10 mEq/L per 24 hours (risk of osmotic demyelination syndrome/central pontine myelinolysis)

## Hypernatremia (Na+ > 145 mEq/L)
- Always indicates water deficit relative to sodium
- Causes: Diabetes insipidus (central or nephrogenic), inadequate water intake, excess saline
- Symptoms: Thirst, confusion, seizures (brain shrinkage)
- **Treatment**: Slow correction with hypotonic fluids (D5W or 0.45% NaCl)

## IV Fluid Therapy

| Fluid | Na+ | Cl- | K+ | Osmolality | Uses |
|-------|-----|-----|-----|-----------|------|
| Normal Saline (0.9% NaCl) | 154 | 154 | 0 | 308 | Volume resuscitation |
| Ringer's Lactate | 130 | 109 | 4 | 273 | Balanced resuscitation |
| 5% Dextrose | 0 | 0 | 0 | 278 | Free water replacement |
| 3% NaCl | 513 | 513 | 0 | 1026 | Severe hyponatremia |
| DNS (Dextrose-NS) | 154 | 154 | 0 | 586 | Maintenance |

> **Clinical Pearl**: In Indian clinical practice, ORS (Oral Rehydration Solution) remains the cornerstone of managing diarrheal dehydration, especially in children. WHO low-osmolarity ORS (245 mOsm/L) has reduced stool output and vomiting compared to older formulations. IV Ringer's lactate is preferred over normal saline for volume resuscitation to avoid hyperchloremic acidosis.`,
        mnemonics: [
          { text: "Hyponatremia correction: 8-10 rule (max 8-10 mEq/L per 24 hrs) to avoid CPM", explanation: "Central pontine myelinolysis (osmotic demyelination syndrome) occurs with overly rapid correction of chronic hyponatremia" },
          { text: "SIADH = Sodium Is Always Decreased in Hypothalamic (inappropriate ADH)", explanation: "Syndrome of Inappropriate ADH secretion leads to dilutional hyponatremia from excess water retention" }
        ],
        keyPoints: [
          "Isotonic dehydration from diarrhea is most common in India (ECF loss only)",
          "Nephrotic syndrome causes periorbital edema due to albumin loss",
          "Hyponatremia correction must not exceed 8-10 mEq/L/24hr (risk of CPM)",
          "ORS is the cornerstone of diarrheal dehydration management in India",
          "Ringer's lactate is preferred over NS for resuscitation (balanced electrolytes)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 25 - Body Fluid Compartments", edition: "14th" }, { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 49 - Fluid and Electrolyte Disturbances", edition: "21st" }] },

      { layer: 4, slug: "layer-4-exam-prep", title: "Body Fluids & Compartments - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield one-liners, comparison tables, and previous year themes for body fluids and compartments.",
        contentMd: `# Exam Preparation - Body Fluids & Compartments

## One-Liners
- TBW as % body weight in adult male: **60%**
- ICF as % of TBW: **2/3 (67%)**
- ECF as % of body weight: **20%**
- Plasma volume: **3.5 L (5% of body weight)**
- Major ICF cation: **K+ (140 mEq/L)**
- Major ECF cation: **Na+ (142 mEq/L)**
- Normal plasma osmolality: **290 mOsm/kg**
- Indicator for TBW: **Tritiated water (D2O, antipyrine)**
- Indicator for ECF: **Inulin (mannitol, sucrose)**
- Indicator for plasma volume: **Evans blue dye (T-1824), 131I-albumin**
- ICF volume measurement: **Calculated (TBW - ECF)**, cannot be measured directly
- ADH acts on: **V2 receptors, collecting duct (aquaporin-2 insertion)**
- Osmolality formula: **2[Na+] + glucose/18 + BUN/2.8**
- 5% dextrose is: **Isotonic in bag, hypotonic in vivo (glucose metabolized)**
- Maximum hyponatremia correction: **8-10 mEq/L per 24 hours**
- Complication of rapid correction: **Central pontine myelinolysis (ODS)**

## Comparison: Effect of Different IV Fluids on Compartments

| Fluid Added | ECF | ICF | Osmolality |
|-------------|-----|-----|-----------|
| Isotonic NaCl | Increases | No change | No change |
| Pure water | Slight increase | Increases | Decreases |
| Hypertonic NaCl | Increases markedly | Decreases | Increases |
| Isotonic loss (hemorrhage) | Decreases | No change | No change |

## Comparison: ADH vs Aldosterone

| Feature | ADH | Aldosterone |
|---------|-----|-------------|
| Source | Posterior pituitary | Zona glomerulosa |
| Stimulus | Increased osmolality | Ang II, hyperkalemia |
| Target | Collecting duct (V2) | Principal cells (MR) |
| Action | Water reabsorption | Na+ reabsorption, K+ secretion |
| Controls | Osmolality | Volume |
| Deficiency | Diabetes insipidus | Addison disease |
| Excess | SIADH | Conn syndrome |

## Previous Year Question Themes
- Indicator dilution principle and specific indicators
- Effect of adding different fluids on compartment volumes
- Starling forces and edema formation
- ADH vs aldosterone comparison
- Hyponatremia and hypernatremia management
- Osmolality calculation`,
        mnemonics: [
          { text: "TIP for indicators: Tritiated water = Total, Inulin = Interstitial/ECF, Plasma = Evans blue dye (Paint)", explanation: "Mnemonic for remembering which indicator measures which compartment" }
        ],
        keyPoints: [
          "ICF cannot be measured directly; always calculated as TBW - ECF",
          "5% dextrose is effectively hypotonic (glucose metabolized to water)",
          "ADH controls osmolality; aldosterone controls volume",
          "Evans blue dye (T-1824) measures plasma volume by binding albumin",
          "Rapid correction of hyponatremia causes osmotic demyelination (CPM)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 25", edition: "14th" }] },

      { layer: 5, slug: "layer-5-active-recall", title: "Body Fluids & Compartments - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on body fluid compartments.",
        contentMd: `# Active Recall - Body Fluids & Compartments

**Q1:** What percentage of body weight is TBW in an adult male?
> 60% (approximately 42 L in a 70 kg man)

**Q2:** What are the two major fluid compartments and their proportions?
> ICF = 2/3 of TBW (28 L); ECF = 1/3 of TBW (14 L)

**Q3:** What is the major cation in ICF vs ECF?
> ICF: K+ (140 mEq/L); ECF: Na+ (142 mEq/L)

**Q4:** How is plasma volume measured?
> Evans blue dye (T-1824) or 131I-labeled albumin using indicator dilution principle

**Q5:** Why can ICF volume not be measured directly?
> No indicator distributes exclusively in ICF; it is calculated as TBW - ECF

**Q6:** What happens when you add isotonic saline to the body?
> ECF expands; ICF unchanged; osmolality unchanged (Na+ stays extracellular)

**Q7:** Why is 5% dextrose effectively hypotonic in vivo?
> Glucose is rapidly metabolized, leaving only free water that distributes to all compartments

**Q8:** What are the four Starling forces governing capillary fluid exchange?
> Capillary hydrostatic pressure (Pc), interstitial hydrostatic pressure (Pi), plasma oncotic pressure (pi-p), interstitial oncotic pressure (pi-i)

**Q9:** Name four mechanisms of edema formation.
> Increased capillary hydrostatic pressure, decreased plasma oncotic pressure, increased capillary permeability, lymphatic obstruction

**Q10:** What is the difference between ADH and aldosterone in fluid regulation?
> ADH controls osmolality (water reabsorption via aquaporin-2); aldosterone controls volume (Na+ reabsorption in collecting duct)

**Q11:** What is the maximum safe rate of correcting hyponatremia?
> 8-10 mEq/L per 24 hours; exceeding this risks osmotic demyelination syndrome (central pontine myelinolysis)

**Q12:** What is the formula for calculating plasma osmolality?
> 2[Na+] + [Glucose]/18 + [BUN]/2.8; normal value approximately 290 mOsm/kg`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering fluid compartments, indicators, Starling forces, and regulation",
          "Practice the indicator dilution calculation from memory",
          "Know effects of adding different IV fluids on compartment volumes",
          "Compare ADH and aldosterone functions",
          "Understand clinical edema mechanisms with examples"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 25", edition: "14th" }] },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PY-MOD-01-TOP-05: Homeostasis & Feedback Mechanisms
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "PY-MOD-01-TOP-05",
    layers: [
      { layer: 1, slug: "layer-1-foundation", title: "Homeostasis & Feedback Mechanisms - Foundation", estimatedMinutes: 20,
        summary: "Homeostasis is the maintenance of a relatively stable internal environment despite changes in external conditions. It operates through negative feedback loops (most common) and positive feedback loops (rare, amplifying). The key regulated variables include temperature, blood glucose, pH, osmolality, and blood pressure.",
        contentMd: `# Homeostasis & Feedback Mechanisms - Foundation

## Definition
**Homeostasis** (Walter Cannon, 1929): The ability of the body to maintain a relatively stable internal environment (milieu interieur, Claude Bernard) despite changing external conditions.

## Components of a Feedback System
1. **Sensor (Receptor)**: Detects changes in the regulated variable
2. **Control center (Integrator)**: Processes information and determines response (often hypothalamus or medulla)
3. **Effector**: Carries out the corrective response (muscles, glands, organs)

## Negative Feedback (Most Common)
- **Definition**: The response opposes the initial change, restoring the variable toward the set-point
- **Purpose**: Stability and maintenance of homeostasis

### Examples

| Variable | Sensor | Control Center | Effector | Response |
|----------|--------|---------------|----------|----------|
| Blood glucose (high) | Pancreatic beta cells | Beta cells | Liver, muscle | Insulin secretion, glucose uptake |
| Blood glucose (low) | Pancreatic alpha cells | Alpha cells | Liver | Glucagon secretion, glycogenolysis |
| Body temperature (high) | Thermoreceptors | Hypothalamus (POA) | Skin vessels, sweat glands | Vasodilation, sweating |
| Blood pressure (high) | Baroreceptors | Medulla (NTS) | Heart, blood vessels | Bradycardia, vasodilation |
| Blood Ca2+ (low) | Parathyroid chief cells | Parathyroid | Bone, kidney, gut | PTH secretion |

## Positive Feedback (Amplification, Rare)
- **Definition**: The response amplifies the initial change (deviation from set-point increases)
- Usually leads to an explosive event, then terminated
- **NOT** for maintaining steady state; used for specific physiological events

### Examples
1. **Blood clotting cascade**: Thrombin activates more prothrombin conversion (amplification until clot forms)
2. **Oxytocin in labor**: Cervical stretch --> oxytocin release --> stronger contractions --> more stretch --> more oxytocin (Ferguson reflex)
3. **LH surge at ovulation**: Rising estrogen stimulates more LH release (positive feedback when estrogen > 200 pg/mL for > 48 hrs)
4. **Action potential generation**: Na+ entry --> depolarization --> more Na+ channel opening --> more depolarization (until peak reached)
5. **Milk ejection reflex**: Suckling --> oxytocin --> milk ejection --> more suckling

## Key Regulated Variables

| Variable | Normal Range | Primary Regulator |
|----------|-------------|-------------------|
| Core body temperature | 36.5-37.5 C | Hypothalamus (preoptic area) |
| Blood glucose | 70-110 mg/dL (fasting) | Pancreatic islets (insulin/glucagon) |
| Blood pH | 7.35-7.45 | Lungs (CO2) and kidneys (HCO3-) |
| Plasma osmolality | 280-295 mOsm/kg | Hypothalamus-ADH axis |
| Blood pressure | 120/80 mmHg | Baroreceptors, RAAS, kidneys |
| Blood Ca2+ | 8.5-10.5 mg/dL | PTH, calcitonin, vitamin D |
| PaO2 / PaCO2 | 80-100 / 35-45 mmHg | Peripheral and central chemoreceptors |`,
        mnemonics: [
          { text: "Negative feedback = Normal (maintains homeostasis); Positive feedback = Pushes to Peak (amplification)", explanation: "Negative feedback opposes change to maintain stability; positive feedback amplifies change until a specific event is completed" },
          { text: "SCREW homeostasis variables: Sugar, Ca2+, Respiratory gases, Electrolytes (Na+/K+), Water (osmolality)", explanation: "Key variables maintained by homeostatic mechanisms" }
        ],
        keyPoints: [
          "Homeostasis maintains internal stability through feedback mechanisms",
          "Negative feedback is the predominant mechanism (opposes change, restores set-point)",
          "Positive feedback amplifies change and is used in specific events (clotting, labor, ovulation)",
          "Feedback loop has three components: sensor, control center, effector",
          "Hypothalamus is the master regulator of many homeostatic functions",
          "Claude Bernard coined 'milieu interieur'; Walter Cannon coined 'homeostasis'"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 1 - Functional Organization of the Human Body and Control of the Internal Environment", edition: "14th" }] },

      { layer: 2, slug: "layer-2-mechanism", title: "Homeostasis & Feedback Mechanisms - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of thermoregulation, blood glucose homeostasis, pH regulation, and the gain of feedback systems. Explains set-point theory, feed-forward control, and adaptive responses.",
        contentMd: `# Homeostasis & Feedback Mechanisms - Mechanisms

## Gain of a Feedback System
\`\`\`
Gain = Correction / Remaining Error
OR
Gain = (Amount of abnormality that would occur without feedback - Actual abnormality) / Actual abnormality
\`\`\`
- **Baroreceptor reflex gain**: ~2 (moderately effective)
- **Pressure-natriuresis gain**: Infinity (perfect long-term BP control)
- Higher gain = more effective feedback control

## Thermoregulation - Detailed Mechanism

### Heat Gain Mechanisms (Cold Response)
1. **Cutaneous vasoconstriction**: Sympathetic alpha-adrenergic --> reduced skin blood flow
2. **Shivering**: Involuntary rhythmic muscle contractions (shivering center in posterior hypothalamus)
3. **Non-shivering thermogenesis**: Brown adipose tissue (important in neonates); UCP-1 (thermogenin) uncouples oxidative phosphorylation
4. **Behavioral**: Wearing clothes, seeking shelter, curling up
5. **Thyroid hormones**: Chronic cold exposure --> increased T3/T4 --> increased BMR
6. **Piloerection**: Hair standing (goosebumps); effective in animals, vestigial in humans

### Heat Loss Mechanisms (Hot Response)
1. **Cutaneous vasodilation**: Sympathetic withdrawal + active vasodilation (bradykinin, NO)
2. **Sweating**: Eccrine glands, sympathetic cholinergic (ACh); up to 2 L/hr; evaporation is most effective mechanism
3. **Increased respiration**: Panting (minimal role in humans)
4. **Behavioral**: Removing clothes, fanning, moving to shade

### Set-Point
- Normal set-point: **37 degrees C** (98.6 F)
- **Pyrogens**: Bacterial endotoxins --> IL-1, TNF-alpha, IL-6 --> hypothalamic PGE2 --> raised set-point = FEVER
- **Antipyretics** (paracetamol, ibuprofen): Block COX --> reduced PGE2 --> lower set-point
- Fever vs Hyperthermia: Fever = raised set-point (regulated); hyperthermia = overwhelming heat load (unregulated)

## Blood Glucose Homeostasis - Mechanism

### Insulin (Fed State)
- Secreted by **beta cells** of pancreatic islets
- **Stimulus**: Blood glucose > 100 mg/dL, amino acids, GIP (incretin effect)
- **Actions**: Promotes glucose uptake (GLUT-4 in muscle/fat), glycogenesis, lipogenesis, protein synthesis
- **Inhibits**: Glycogenolysis, gluconeogenesis, lipolysis, ketogenesis

### Glucagon (Fasting State)
- Secreted by **alpha cells**
- **Stimulus**: Low blood glucose, amino acids, sympathetic stimulation
- **Actions**: Glycogenolysis, gluconeogenesis (liver), lipolysis, ketogenesis
- Insulin:Glucagon ratio determines metabolic state

## pH Regulation (Acid-Base Homeostasis)
Three lines of defense (increasing response time):

### 1. Chemical Buffers (Immediate, seconds)
- **Bicarbonate buffer**: H+ + HCO3- <--> H2CO3 <--> CO2 + H2O (most important in ECF)
- **Phosphate buffer**: Important in ICF and urine
- **Protein buffer**: Hemoglobin (in RBCs), albumin (in plasma)

### 2. Respiratory Compensation (Minutes)
- **Central chemoreceptors** (medulla): Respond to CSF H+ (from CO2)
- **Peripheral chemoreceptors** (carotid body): Respond to low pH, low PaO2, high PaCO2
- Acidosis --> hyperventilation --> CO2 blown off --> pH rises

### 3. Renal Compensation (Hours to Days)
- **H+ secretion** in proximal and distal tubules
- **HCO3- regeneration** and reabsorption
- **Ammonium (NH4+) excretion** as urinary buffer
- Most complete correction but slowest

## Feed-Forward Control
- **Definition**: Anticipatory response BEFORE a disturbance occurs
- **Example**: Cephalic phase of gastric secretion (seeing/smelling food triggers acid secretion before food enters stomach)
- **Example**: Anticipatory rise in HR before exercise begins
- Different from feedback (which responds AFTER the change occurs)`,
        mnemonics: [
          { text: "FEVER = Fire set by Endogenous pyrogens, Via PGE2, Elevating the hypothalamic thermostat, Reversed by antipyretics", explanation: "Fever mechanism: endogenous pyrogens (IL-1, TNF, IL-6) stimulate PGE2 in hypothalamus, raising the temperature set-point" },
          { text: "pH defense: Buffers Beat it (seconds), Breathing Blows it (minutes), Be patient - kidneys (hours-days)", explanation: "Three lines of defense against pH changes in order of response time: chemical buffers, respiratory compensation, renal compensation" }
        ],
        keyPoints: [
          "Gain of feedback = correction / remaining error; infinite gain = perfect control",
          "Fever is a regulated rise in set-point (pyrogens -> PGE2); hyperthermia is unregulated heat overload",
          "Insulin promotes anabolism (fed state); glucagon promotes catabolism (fasting state)",
          "Three pH defense lines: buffers (seconds), lungs (minutes), kidneys (hours-days)",
          "Feed-forward control is anticipatory (before disturbance); feedback is reactive (after disturbance)",
          "Non-shivering thermogenesis uses UCP-1 in brown fat (important in neonates)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 1, Ch 73 - Body Temperature Regulation, Ch 79 - Insulin", edition: "14th" }] },

      { layer: 3, slug: "layer-3-clinical", title: "Homeostasis & Feedback Mechanisms - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical conditions arising from homeostatic failure including fever, heat stroke, diabetes mellitus, acid-base disorders, and endocrine feedback disruptions.",
        contentMd: `# Homeostasis - Clinical Application

## Temperature Dysregulation

### Fever
- **Mechanism**: Pyrogens --> IL-1, TNF, IL-6 --> hypothalamic PGE2 --> raised set-point
- **Beneficial effects**: Enhanced immune function, inhibited bacterial growth
- **Treatment**: Antipyretics (paracetamol, NSAIDs) block COX --> reduce PGE2
- **Indian context**: Dengue fever is common; avoid aspirin/NSAIDs (risk of bleeding); paracetamol is preferred

### Heat Stroke (Medical Emergency)
- **Definition**: Core temperature > 40.5 C with CNS dysfunction
- **Mechanism**: Overwhelmed thermoregulatory mechanisms (NOT raised set-point)
- **Two types**: Exertional (young athletes) and Classic (elderly, heatwave)
- **Treatment**: Aggressive cooling (ice packs, cold water immersion), IV fluids
- **Indian relevance**: Heat waves cause significant mortality, especially in Rajasthan, UP, and AP

### Hypothermia
- Core temperature < 35 C
- Causes: Cold exposure, alcohol intoxication, hypothyroidism, sepsis
- **J waves (Osborn waves)** on ECG are pathognomonic

## Diabetes Mellitus (Glucose Homeostasis Failure)

| Feature | Type 1 DM | Type 2 DM |
|---------|----------|----------|
| Age of onset | Young (< 30) | Adult (> 40) |
| Body habitus | Lean | Obese |
| Insulin | Absent (beta cell destruction) | Resistant (initially high) |
| Ketosis | Common (DKA) | Rare (HHS) |
| Autoimmune | Yes (anti-GAD, anti-islet) | No |
| Genetics | HLA-DR3/DR4 | Strong polygenic |
| Treatment | Insulin mandatory | Lifestyle + OHA + insulin |

- **India**: Diabetes capital of the world; Type 2 DM epidemic driven by urbanization, sedentary lifestyle, genetic predisposition
- **DKA**: Life-threatening complication of Type 1; presents with Kussmaul breathing (deep, rapid), fruity breath, dehydration
- **HHS**: Severe hyperglycemia (> 600 mg/dL) with profound dehydration; more common in Type 2

## Acid-Base Disorders

| Disorder | pH | Primary Change | Compensation |
|----------|-----|---------------|-------------|
| Metabolic acidosis | < 7.35 | Low HCO3- | Hyperventilation (low PCO2) |
| Metabolic alkalosis | > 7.45 | High HCO3- | Hypoventilation (high PCO2) |
| Respiratory acidosis | < 7.35 | High PCO2 | Renal HCO3- retention |
| Respiratory alkalosis | > 7.45 | Low PCO2 | Renal HCO3- excretion |

## Endocrine Feedback Disruptions
- **Cushing syndrome**: Excess cortisol suppresses CRH/ACTH (but autonomous source continues)
- **Graves disease**: TSI mimics TSH (positive feedback-like; ignores negative feedback)
- **Acromegaly**: Excess GH not suppressed by glucose load (used in diagnosis: OGTT fails to suppress GH)

> **Clinical Pearl**: In Indian emergency medicine, DKA with Kussmaul breathing and metabolic acidosis is a common presentation. Always check ABG and serum electrolytes. Correct potassium before or with insulin therapy, as insulin drives K+ into cells and can cause fatal hypokalemia.`,
        mnemonics: [
          { text: "MUDPILES for anion gap metabolic acidosis: Methanol, Uremia, DKA, Propylene glycol, INH/Iron, Lactic acidosis, Ethylene glycol, Salicylates", explanation: "Causes of high anion gap metabolic acidosis - a commonly tested list in NEXT/NEET PG" },
          { text: "DKA = Dehydrated, Kussmaul breathing, Acidotic (fruity breath)", explanation: "Three hallmark features of diabetic ketoacidosis presentation" }
        ],
        keyPoints: [
          "Fever is regulated (raised set-point by PGE2); heat stroke is unregulated (overwhelmed mechanisms)",
          "Heat stroke is a medical emergency with mortality > 50% if untreated",
          "India is the diabetes capital; Type 2 DM epidemic due to urbanization and genetic predisposition",
          "DKA presents with Kussmaul breathing; correct K+ before or with insulin",
          "Acid-base compensation is always partial (except chronic respiratory disorders)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 1, 73, 79", edition: "14th" }, { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 396 - Diabetes Mellitus", edition: "21st" }] },

      { layer: 4, slug: "layer-4-exam-prep", title: "Homeostasis & Feedback Mechanisms - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield one-liners and comparison tables for homeostasis and feedback mechanisms.",
        contentMd: `# Exam Preparation - Homeostasis & Feedback

## One-Liners
- Coined 'milieu interieur': **Claude Bernard**
- Coined 'homeostasis': **Walter Cannon**
- Most common feedback type: **Negative feedback**
- Positive feedback examples: **Clotting cascade, oxytocin in labor, LH surge, AP generation, milk ejection**
- Body temperature set-point: **37 degrees C (preoptic area of hypothalamus)**
- Fever mediator: **PGE2** in hypothalamus
- Brown fat uncoupler: **UCP-1 (thermogenin)**
- Non-shivering thermogenesis important in: **Neonates**
- Shivering center: **Posterior hypothalamus**
- Heat loss center: **Anterior hypothalamus (preoptic area)**
- Most effective heat loss mechanism: **Evaporation (sweating)**
- Heat stroke temperature: **> 40.5 C with CNS dysfunction**
- Osborn (J) waves seen in: **Hypothermia**
- ECF buffer system: **Bicarbonate (most important)**
- Respiratory chemoreceptor for CO2: **Central (medullary)**
- Peripheral chemoreceptors location: **Carotid body (CN IX), aortic body (CN X)**
- Feed-forward example: **Cephalic phase of gastric secretion**

## Comparison: Negative vs Positive Feedback

| Feature | Negative Feedback | Positive Feedback |
|---------|------------------|-------------------|
| Direction | Opposes change | Amplifies change |
| Purpose | Maintain stability | Complete an event |
| Frequency | Common (most systems) | Rare (specific events) |
| Set-point | Returns to set-point | Moves away from set-point |
| Self-limiting | Yes (inherent) | No (needs external termination) |
| Examples | BP regulation, glucose | Clotting, labor, ovulation |

## Comparison: Fever vs Heat Stroke

| Feature | Fever | Heat Stroke |
|---------|-------|------------|
| Set-point | Raised | Normal |
| Regulation | Intact (regulated) | Failed (unregulated) |
| Mechanism | PGE2-mediated | Overwhelmed mechanisms |
| Sweating | Present | Absent (classic type) |
| Treatment | Antipyretics | Physical cooling |
| Cause | Infection, inflammation | Environmental heat, exertion |

## Previous Year Question Themes
- Negative vs positive feedback with examples
- Thermoregulation mechanisms
- Fever vs hyperthermia
- Blood glucose regulation (insulin vs glucagon)
- Acid-base compensation patterns
- Feed-forward control concept`,
        mnemonics: [
          { text: "Anterior hypothalamus = Anti-heat (cooling); Posterior = Production of heat (shivering)", explanation: "Anterior hypothalamus controls heat loss mechanisms; posterior hypothalamus controls heat production/conservation" }
        ],
        keyPoints: [
          "Positive feedback examples: clotting, labor (oxytocin), LH surge, action potential, milk ejection",
          "Anterior hypothalamus = heat loss center; posterior = heat conservation/shivering center",
          "Fever = raised set-point (PGE2); heat stroke = thermoregulatory failure",
          "UCP-1 in brown fat is key for non-shivering thermogenesis in neonates",
          "Most effective heat loss mechanism is evaporation of sweat"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 1, 73", edition: "14th" }] },

      { layer: 5, slug: "layer-5-active-recall", title: "Homeostasis & Feedback Mechanisms - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on homeostasis and feedback mechanisms.",
        contentMd: `# Active Recall - Homeostasis & Feedback

**Q1:** Define homeostasis and who coined the term?
> Maintenance of a stable internal environment despite external changes; coined by Walter Cannon (1929). Claude Bernard described the concept as 'milieu interieur'.

**Q2:** Name the three components of a feedback system.
> Sensor (receptor), Control center (integrator), Effector

**Q3:** Give five examples of positive feedback in the body.
> Blood clotting cascade, oxytocin in labor (Ferguson reflex), LH surge at ovulation, action potential generation, milk ejection reflex

**Q4:** What is the gain of a feedback system?
> Gain = Correction / Remaining error. Higher gain means more effective control. Pressure-natriuresis has infinite gain.

**Q5:** How does fever differ from heat stroke?
> Fever: raised set-point by PGE2 (regulated, sweating present). Heat stroke: normal set-point but thermoregulatory failure (unregulated, sweating absent in classic type)

**Q6:** What mediates fever at the hypothalamic level?
> PGE2 (prostaglandin E2), induced by endogenous pyrogens (IL-1, TNF-alpha, IL-6)

**Q7:** What is non-shivering thermogenesis and where does it occur?
> Heat production without muscle contraction; occurs in brown adipose tissue via UCP-1 (thermogenin) which uncouples oxidative phosphorylation. Important in neonates.

**Q8:** What are the three lines of defense against pH change?
> Chemical buffers (seconds), respiratory compensation (minutes), renal compensation (hours-days)

**Q9:** What is the difference between feed-forward and feedback control?
> Feed-forward is anticipatory (acts before disturbance occurs, e.g., cephalic phase of digestion). Feedback is reactive (responds after change is detected).

**Q10:** How do insulin and glucagon maintain glucose homeostasis?
> Insulin (beta cells): promotes glucose uptake, glycogenesis, lipogenesis in fed state. Glucagon (alpha cells): promotes glycogenolysis, gluconeogenesis, lipolysis in fasting state.

**Q11:** Which hypothalamic region controls heat loss vs heat production?
> Anterior (preoptic area) = heat loss (vasodilation, sweating). Posterior = heat conservation and shivering.

**Q12:** What is the Osborn wave and when is it seen?
> J wave on ECG, pathognomonic of hypothermia (core temperature < 35 C)`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering feedback types, thermoregulation, glucose homeostasis, and pH regulation",
          "Practice distinguishing fever from heat stroke",
          "Know all five positive feedback examples",
          "Understand feed-forward vs feedback with clinical examples",
          "Review thermoregulation centers in hypothalamus"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 1, 73", edition: "14th" }] },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PY-MOD-02-TOP-01: Blood: Composition & Functions
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "PY-MOD-02-TOP-01",
    layers: [
      { layer: 1, slug: "layer-1-foundation", title: "Blood: Composition & Functions - Foundation", estimatedMinutes: 20,
        summary: "Blood is a specialized connective tissue comprising plasma (55%) and formed elements (45%). Total blood volume is ~5 L. Blood performs transport, defense, hemostasis, and homeostatic functions. Hematocrit (PCV) is the percentage of blood occupied by RBCs.",
        contentMd: `# Blood: Composition & Functions - Foundation

## Basic Properties
- **Type**: Specialized connective tissue (mesodermal origin)
- **Total blood volume**: ~5 L (7-8% of body weight, ~70 mL/kg)
- **pH**: 7.35-7.45
- **Specific gravity**: Whole blood 1.055-1.065; plasma 1.025-1.029
- **Viscosity**: 3-4 times that of water (whole blood); 1.5-2 times (plasma)
- **Osmolality**: 290 mOsm/kg

## Composition of Blood

### Plasma (55% of blood volume)
- **Water**: 91-92%
- **Proteins**: 7-8% (6-8 g/dL)
- **Inorganic salts, lipids, glucose, hormones, gases**: 1-2%

### Formed Elements (45% of blood volume)
- **RBCs**: 99% of formed elements
- **WBCs**: < 1%
- **Platelets**: < 1%

## Plasma Proteins

| Protein | Concentration | Function |
|---------|--------------|----------|
| **Albumin** | 3.5-5.0 g/dL | Oncotic pressure (80%), transport (bilirubin, drugs, fatty acids), buffer |
| **Globulins** | 2.0-3.5 g/dL | Alpha/beta (transport, enzymes); gamma (immunoglobulins) |
| **Fibrinogen** | 200-400 mg/dL | Coagulation (clot formation) |
| **Prothrombin** | 10 mg/dL | Coagulation factor II |

- **A/G ratio**: 1.2-1.6 (albumin:globulin); reversed in liver disease, myeloma
- **Site of synthesis**: Liver (albumin, fibrinogen, most globulins); gamma globulins from B-lymphocytes/plasma cells
- **Serum**: Plasma minus fibrinogen (and other clotting factors consumed in clotting)

## Functions of Blood

### 1. Transport
- **O2**: From lungs to tissues (Hb in RBCs)
- **CO2**: From tissues to lungs (as HCO3-, carbamino compounds, dissolved)
- **Nutrients**: Glucose, amino acids, lipids, vitamins
- **Hormones**: Endocrine signaling
- **Waste products**: Urea, creatinine, bilirubin (to kidneys/liver)
- **Heat**: From core to periphery (thermoregulation)

### 2. Defense (Immunity)
- **WBCs**: Neutrophils (phagocytosis), lymphocytes (adaptive immunity), monocytes (tissue macrophages)
- **Immunoglobulins**: Antibody-mediated defense
- **Complement system**: Opsonization, MAC formation, inflammation

### 3. Hemostasis
- **Platelets**: Primary hemostasis (platelet plug)
- **Coagulation factors**: Secondary hemostasis (fibrin clot)
- **Fibrinolytic system**: Clot dissolution (plasmin)

### 4. Homeostasis
- **Buffer function**: Hb buffer, bicarbonate, proteins
- **Oncotic pressure maintenance**: Albumin (Starling forces)
- **Temperature regulation**: Blood distributes heat

## Hematocrit (Packed Cell Volume - PCV)
- **Definition**: Percentage of blood volume occupied by RBCs
- **Normal**: Males 40-45% (mean 42%); Females 36-40% (mean 38%)
- **Increased**: Polycythemia, dehydration
- **Decreased**: Anemia, fluid overload
- **Measurement**: Wintrobe or microhematocrit method

## Complete Blood Count (CBC) - Normal Values

| Parameter | Males | Females |
|-----------|-------|---------|
| RBC count | 4.5-5.5 million/mm3 | 3.8-4.8 million/mm3 |
| Hb | 14-17 g/dL | 12-15 g/dL |
| PCV (Hct) | 40-45% | 36-40% |
| WBC count | 4000-11000/mm3 | 4000-11000/mm3 |
| Platelet count | 1.5-4 lakh/mm3 | 1.5-4 lakh/mm3 |
| ESR | 0-10 mm/hr | 0-20 mm/hr |`,
        mnemonics: [
          { text: "Plasma proteins = AFG (Albumin > Fibrinogen > Globulins, wait, actually AGF in amount: Albumin 4g > Globulin 2.5g > Fibrinogen 0.3g)", explanation: "Albumin is most abundant plasma protein (3.5-5 g/dL), responsible for 80% of plasma oncotic pressure" },
          { text: "BLOOD functions = THUD: Transport, Homeostasis, (host) Defense, Hemostasis", explanation: "Four major functional categories of blood" }
        ],
        keyPoints: [
          "Total blood volume is ~5 L (7-8% of body weight, 70 mL/kg)",
          "Plasma = 55%, formed elements = 45% of blood volume",
          "Albumin is most abundant plasma protein and maintains 80% of plasma oncotic pressure",
          "Hematocrit (PCV) = % blood volume occupied by RBCs; 42% males, 38% females",
          "Serum = plasma minus fibrinogen and consumed clotting factors",
          "Plasma proteins synthesized mainly in liver (except immunoglobulins from B cells)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 33 - Red Blood Cells, Anemia, and Polycythemia", edition: "14th" }, { book: "Sembulingam", chapter: "Ch 2 - Blood", edition: "8th" }] },

      { layer: 2, slug: "layer-2-mechanism", title: "Blood: Composition & Functions - Mechanism", estimatedMinutes: 30,
        summary: "Mechanisms of plasma protein functions, ESR determination, blood viscosity regulation, and the role of bone marrow in hematopoiesis.",
        contentMd: `# Blood: Composition & Functions - Mechanisms

## Plasma Protein Functions in Detail

### Albumin - Oncotic Pressure
- **Gibbs-Donnan effect**: Albumin (net negative charge) holds cations in plasma, amplifying oncotic pressure
- **Effective oncotic pressure**: ~25 mmHg (albumin contributes ~80%)
- **Low albumin**: Edema (reduced oncotic pressure), increased free drug levels (less protein binding)
- **Transport function**: Bilirubin, free fatty acids, thyroid hormones (T3/T4), calcium, drugs (warfarin, diazepam, phenytoin)

### Globulins - Subtypes and Functions

| Type | Examples | Function |
|------|---------|----------|
| Alpha-1 | Alpha-1 antitrypsin, TBG | Protease inhibitor, thyroid hormone transport |
| Alpha-2 | Haptoglobin, ceruloplasmin | Binds free Hb, copper transport |
| Beta | Transferrin, LDL, C3, fibrinogen | Iron transport, lipid transport, complement |
| Gamma | IgG, IgA, IgM, IgD, IgE | Immunoglobulins (adaptive immunity) |

### Fibrinogen and Coagulation
- Converted to fibrin by thrombin (factor IIa)
- Largest plasma protein (~340 kDa)
- **Acute phase reactant**: Increased in inflammation, infection, pregnancy
- Elevated fibrinogen increases ESR

## Erythrocyte Sedimentation Rate (ESR)

### Mechanism
- RBCs normally repel each other due to negative surface charge (zeta potential)
- In inflammation: Increased fibrinogen and globulins neutralize surface charge
- RBCs aggregate into **rouleaux** (stacks like coins) --> heavier, sediment faster

### Factors Affecting ESR

| Increase ESR | Decrease ESR |
|-------------|-------------|
| Increased fibrinogen (inflammation) | Polycythemia |
| Increased globulins (myeloma) | Sickle cell disease (abnormal shape) |
| Anemia (fewer RBCs) | Spherocytosis |
| Pregnancy | Microcytosis |
| Malignancy | Heart failure |
| Macrocytosis | Hypofibrinogenemia |

### Methods
- **Westergren method**: Gold standard; using 200 mm tube
- **Wintrobe method**: Can also measure PCV; uses 100 mm tube

## Hematopoiesis

### Sites by Age
- **Embryo (0-2 months)**: Yolk sac (mesoblastic phase)
- **Fetus (2-7 months)**: Liver and spleen (hepatic phase)
- **Fetus (5 months onwards) and postnatal**: Bone marrow (myeloid phase)
- **Adult**: Red marrow (vertebrae, sternum, ribs, pelvis, skull, proximal femur/humerus)
- By age 25: Long bone shafts converted to yellow (fatty) marrow

### Hematopoietic Hierarchy
\`\`\`
Pluripotent stem cell (HSC)
  |
  |--> Common myeloid progenitor (CMP)
  |      |--> Erythrocytes (RBCs)
  |      |--> Megakaryocytes --> Platelets
  |      |--> Granulocytes (neutrophils, eosinophils, basophils)
  |      |--> Monocytes --> Macrophages
  |
  |--> Common lymphoid progenitor (CLP)
         |--> T lymphocytes (thymus)
         |--> B lymphocytes (bone marrow)
         |--> NK cells
\`\`\`

### Growth Factors

| Factor | Target Cell | Source |
|--------|------------|-------|
| Erythropoietin (EPO) | Erythroid progenitors | Kidney (90%), liver (10%) |
| Thrombopoietin (TPO) | Megakaryocytes | Liver |
| G-CSF | Neutrophil precursors | Endothelium, fibroblasts |
| GM-CSF | Granulocyte/monocyte precursors | T cells, macrophages |
| M-CSF | Monocyte precursors | Various |
| IL-3 | Multi-lineage | T cells |

## Blood Viscosity
- Determined by: Hematocrit (primary), plasma proteins (fibrinogen), temperature, vessel diameter
- **Fahraeus-Lindqvist effect**: Viscosity decreases in small vessels (< 300 micrometers) due to axial streaming of RBCs
- **Polycythemia**: Dramatically increased viscosity --> impaired flow --> thrombosis risk
- **Anemia**: Decreased viscosity --> decreased O2 carrying capacity despite better flow`,
        mnemonics: [
          { text: "ESR rises with RAIL: Rouleaux formation, Anemia, Inflammation/Infection, Large (macro) RBCs", explanation: "Key factors that increase ESR - all promote rouleaux formation or reduce RBC resistance to sedimentation" },
          { text: "Hematopoiesis sites by age: Young = Yolk sac, Liver, Marrow (YoLk to Liver to Marrow = Youth, Life, Maturity)", explanation: "Sequential sites of blood cell formation during development" }
        ],
        keyPoints: [
          "Albumin maintains 80% of plasma oncotic pressure via Gibbs-Donnan effect",
          "ESR increases due to rouleaux formation from increased fibrinogen/globulins",
          "Westergren method is the gold standard for ESR measurement",
          "Hematopoiesis progresses from yolk sac to liver to bone marrow",
          "EPO is produced 90% by kidney, 10% by liver",
          "Fahraeus-Lindqvist effect: blood viscosity decreases in small vessels"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 33 - RBCs, Anemia, Polycythemia; Ch 34 - Resistance to Infection", edition: "14th" }] },

      { layer: 3, slug: "layer-3-clinical", title: "Blood: Composition & Functions - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical interpretation of CBC, ESR in disease states, plasma protein disorders, and hematopoietic stem cell transplantation.",
        contentMd: `# Blood: Composition & Functions - Clinical Application

## CBC Interpretation

### Anemia (Low Hb)
- **Microcytic (MCV < 80)**: Iron deficiency (most common worldwide and in India), thalassemia, chronic disease
- **Normocytic (MCV 80-100)**: Acute blood loss, chronic disease, renal failure
- **Macrocytic (MCV > 100)**: Vitamin B12 deficiency, folate deficiency, liver disease

### Leukocytosis (WBC > 11,000)
- **Neutrophilia**: Bacterial infection, stress, corticosteroids
- **Lymphocytosis**: Viral infection, CLL
- **Eosinophilia**: Parasitic infections (very common in India), allergies, asthma

### Leukopenia (WBC < 4000)
- Viral infections (dengue - important in India), aplastic anemia, chemotherapy, typhoid

### Thrombocytopenia (Platelets < 1.5 lakh)
- Dengue fever (most common cause in Indian emergency departments)
- ITP, TTP, DIC, aplastic anemia, hypersplenism

## ESR - Clinical Applications
- **Very high ESR (> 100 mm/hr)**: Multiple myeloma, tuberculosis (common in India), malignancy, temporal arteritis
- **Moderate elevation**: Infections, rheumatoid arthritis, anemia
- **Normal/low ESR**: Sickle cell disease, polycythemia, heart failure
- **CRP vs ESR**: CRP rises and falls faster (12-24 hrs); ESR takes days. CRP better for acute monitoring.

## Plasma Protein Disorders

| Condition | Protein Change | Clinical Feature |
|-----------|---------------|-----------------|
| Nephrotic syndrome | Low albumin (urinary loss) | Edema, hyperlipidemia |
| Liver cirrhosis | Low albumin (reduced synthesis) | Ascites, edema |
| Multiple myeloma | High globulins (M spike) | Very high ESR, bone lesions |
| Alpha-1 antitrypsin deficiency | Low alpha-1 | Emphysema, liver disease |
| Wilson disease | Low ceruloplasmin | Hepatolenticular degeneration, KF rings |
| Hemochromatosis | High ferritin, high transferrin saturation | Iron overload, bronze diabetes |

## Blood Banking Basics
- **Storage temperature**: 2-6 C (whole blood, packed RBCs)
- **Anticoagulant**: CPDA-1 (Citrate-Phosphate-Dextrose-Adenine); shelf life 35 days
- **Platelet storage**: 20-24 C with constant agitation; shelf life 5 days
- **Fresh Frozen Plasma (FFP)**: Stored at -18 C or below; shelf life 1 year
- **Massive transfusion**: > 10 units in 24 hrs; complications include hypothermia, hyperkalemia, citrate toxicity (hypocalcemia)

## Hematopoietic Stem Cell Transplant (HSCT)
- **Autologous**: Patient's own stem cells (for lymphoma, myeloma)
- **Allogeneic**: From HLA-matched donor (for leukemia, aplastic anemia)
- **Complications**: Graft-versus-host disease (GVHD), infection, graft failure
- **Indian context**: Thalassemia major is one of the most common indications for HSCT in India

> **Clinical Pearl**: In Indian clinical practice, iron deficiency anemia and thalassemia trait are the two most common causes of microcytic anemia. Peripheral smear showing target cells, elevated HbA2 (> 3.5%) on HPLC, and positive family history favor thalassemia trait over iron deficiency.`,
        mnemonics: [
          { text: "Microcytic anemia causes = TAILS: Thalassemia, Anemia of chronic disease, Iron deficiency, Lead poisoning, Sideroblastic anemia", explanation: "Five causes of microcytic hypochromic anemia" },
          { text: "Dengue = Drop in PLT (Platelets, Leukocytes, and Total protein)", explanation: "Dengue fever characteristically causes thrombocytopenia and leukopenia" }
        ],
        keyPoints: [
          "Iron deficiency is the most common cause of anemia worldwide and in India",
          "ESR > 100 mm/hr: think multiple myeloma, TB, or malignancy",
          "Dengue is the most common cause of thrombocytopenia in Indian emergency settings",
          "CRP is better than ESR for acute monitoring (rises and falls faster)",
          "Thalassemia major is a common indication for bone marrow transplant in India"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 33, 34", edition: "14th" }, { book: "Harsh Mohan", chapter: "Ch 12 - Hematopoietic System", edition: "8th" }] },

      { layer: 4, slug: "layer-4-exam-prep", title: "Blood: Composition & Functions - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield one-liners and comparison tables for blood composition and functions.",
        contentMd: `# Exam Preparation - Blood: Composition & Functions

## One-Liners
- Total blood volume: **5 L (70 mL/kg, 7-8% body weight)**
- Plasma percentage of blood: **55%**
- Most abundant plasma protein: **Albumin (3.5-5.0 g/dL)**
- Oncotic pressure maintained by: **Albumin (80%)**
- Serum = Plasma minus: **Fibrinogen** (and consumed clotting factors)
- Normal hematocrit males/females: **42% / 38%**
- Normal Hb males/females: **14-17 g/dL / 12-15 g/dL**
- Normal WBC count: **4000-11000/mm3**
- Normal platelet count: **1.5-4 lakh/mm3**
- ESR gold standard method: **Westergren**
- Rouleaux formation causes: **Increased ESR**
- EPO source: **Kidney (90%)**
- Adult hematopoiesis site: **Red bone marrow**
- Yolk sac hematopoiesis: **0-2 months embryonic**
- Hepatic hematopoiesis: **2-7 months fetal**
- A/G ratio: **1.2-1.6; reversed in liver disease, myeloma**
- Largest plasma protein: **Fibrinogen (340 kDa)**
- Smallest plasma protein (most abundant): **Albumin (69 kDa)**

## Comparison: Plasma vs Serum

| Feature | Plasma | Serum |
|---------|--------|-------|
| Fibrinogen | Present | Absent (consumed in clotting) |
| Obtained from | Anticoagulated blood | Clotted blood |
| Appearance | Straw-colored | Straw-colored |
| Volume | Slightly more | Slightly less |
| Clinical use | Coagulation studies | Biochemistry tests |

## Comparison: Westergren vs Wintrobe ESR

| Feature | Westergren | Wintrobe |
|---------|-----------|---------|
| Tube length | 200 mm | 100 mm |
| Gold standard | Yes | No |
| Anticoagulant | 3.8% sodium citrate | EDTA (dry) |
| Advantage | Higher range | Can also measure PCV |
| Disadvantage | Does not measure PCV | Lower range, misses high ESR |

## Previous Year Question Themes
- Plasma protein functions and types
- ESR mechanism and clinical significance
- Hematopoiesis sites by age
- Normal CBC values
- Difference between plasma and serum
- Albumin functions and edema formation`,
        mnemonics: [
          { text: "Plasma has Fibrinogen, Serum does not (Serum = Sans Fibrinogen)", explanation: "Key difference between plasma and serum - serum is obtained after blood clots and fibrinogen is consumed" }
        ],
        keyPoints: [
          "Albumin is smallest but most abundant plasma protein; responsible for 80% oncotic pressure",
          "Serum = plasma without fibrinogen (obtained from clotted blood)",
          "Westergren is gold standard for ESR (200 mm tube, citrate anticoagulant)",
          "Hematopoiesis: yolk sac (0-2 months) -> liver (2-7 months) -> bone marrow (5 months onwards)",
          "EPO is produced 90% by kidney peritubular interstitial cells"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 33", edition: "14th" }] },

      { layer: 5, slug: "layer-5-active-recall", title: "Blood: Composition & Functions - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on blood composition and functions.",
        contentMd: `# Active Recall - Blood: Composition & Functions

**Q1:** What is the total blood volume and what percentage of body weight does it represent?
> Approximately 5 L; 7-8% of body weight (70 mL/kg)

**Q2:** What percentage of blood is plasma vs formed elements?
> Plasma = 55%; Formed elements = 45%

**Q3:** Name the three main plasma proteins and their functions.
> Albumin (oncotic pressure, transport), Globulins (transport, immunity), Fibrinogen (coagulation)

**Q4:** What is the difference between plasma and serum?
> Serum = plasma minus fibrinogen and other clotting factors consumed during coagulation

**Q5:** What is hematocrit and its normal values?
> Percentage of blood volume occupied by RBCs; Males: 40-45%, Females: 36-40%

**Q6:** What causes rouleaux formation and how does it affect ESR?
> Increased fibrinogen and globulins neutralize RBC surface charge, allowing stacking; this increases ESR

**Q7:** List the sites of hematopoiesis in chronological order.
> Yolk sac (0-2 months) -> Liver and spleen (2-7 months) -> Bone marrow (5 months onwards through adult life)

**Q8:** Where is erythropoietin produced?
> 90% by peritubular interstitial cells of the kidney; 10% by liver

**Q9:** What is the most abundant plasma protein and what percentage of oncotic pressure does it maintain?
> Albumin (3.5-5.0 g/dL); maintains approximately 80% of plasma oncotic pressure

**Q10:** Name three conditions causing very high ESR (> 100 mm/hr).
> Multiple myeloma, tuberculosis, malignancy (also temporal arteritis, SLE, severe infection)

**Q11:** What is the Fahraeus-Lindqvist effect?
> Blood viscosity decreases in small vessels (< 300 micrometers) due to axial streaming of RBCs away from vessel walls

**Q12:** Why is Westergren method preferred over Wintrobe for ESR?
> Westergren uses a longer tube (200 mm vs 100 mm) giving a wider detection range; it is the internationally standardized method`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering blood composition, plasma proteins, ESR, and hematopoiesis",
          "Practice comparing plasma vs serum characteristics",
          "Know ESR values in clinical conditions (very high = myeloma/TB/malignancy)",
          "Review hematopoietic growth factors and their targets",
          "Understand albumin's multiple roles: oncotic pressure, transport, buffer"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 33, 34", edition: "14th" }] },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PY-MOD-02-TOP-02: Red Blood Cells & Hemoglobin
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "PY-MOD-02-TOP-02",
    layers: [
      { layer: 1, slug: "layer-1-foundation", title: "Red Blood Cells & Hemoglobin - Foundation", estimatedMinutes: 20,
        summary: "RBCs are biconcave disc-shaped cells without nucleus, containing hemoglobin for O2 transport. Normal count is 4.5-5.5 million/mm3 in males. Hemoglobin is a tetramer with four heme groups, each carrying one O2 molecule. Normal adult Hb (HbA) has alpha2-beta2 structure.",
        contentMd: `# Red Blood Cells & Hemoglobin - Foundation

## RBC Characteristics
- **Shape**: Biconcave disc (7.2 micrometers diameter, 2.2 micrometers thick, 1 micrometer at center)
- **No nucleus**: Expelled during maturation (reticulocyte stage)
- **No mitochondria**: Relies on anaerobic glycolysis (Embden-Meyerhof pathway)
- **Lifespan**: **120 days**
- **Site of destruction**: Spleen (primarily), liver, bone marrow (reticuloendothelial system)

## Normal RBC Values

| Parameter | Males | Females |
|-----------|-------|---------|
| RBC count | 4.5-5.5 million/mm3 | 3.8-4.8 million/mm3 |
| Hemoglobin | 14-17 g/dL | 12-15 g/dL |
| PCV (Hct) | 40-45% | 36-40% |
| Reticulocyte count | 0.5-1.5% | 0.5-1.5% |
| MCV | 80-100 fL | 80-100 fL |
| MCH | 27-33 pg | 27-33 pg |
| MCHC | 32-36 g/dL | 32-36 g/dL |

## Advantages of Biconcave Shape
1. **Increased surface area:volume ratio**: Better gas exchange (40% more surface than sphere of same volume)
2. **Flexibility**: Can pass through narrow capillaries (3-5 micrometers)
3. **Rapid diffusion distance**: Short distance from surface to center for O2/CO2

## Hemoglobin Structure
- **Molecular weight**: 64,500 Da (Daltons)
- **Tetramer**: 4 globin chains + 4 heme groups
- **Heme**: Protoporphyrin IX + Fe2+ (ferrous iron)
- Each Hb molecule binds **4 O2 molecules** (one per heme)
- **1 g Hb carries 1.34 mL O2** (Hufner's constant)

## Types of Hemoglobin

| Type | Structure | Percentage |
|------|-----------|-----------|
| HbA (adult) | Alpha2-Beta2 | 96-98% |
| HbA2 | Alpha2-Delta2 | 1.5-3.5% |
| HbF (fetal) | Alpha2-Gamma2 | < 1% in adults |

- **HbF**: Higher O2 affinity than HbA (left-shifted curve); predominates in fetal life
- **HbF advantage**: Can extract O2 from maternal HbA across placenta

## RBC Indices (Wintrobe Indices)

| Index | Formula | Normal | Significance |
|-------|---------|--------|-------------|
| MCV | PCV/RBC count x 10 | 80-100 fL | Cell size |
| MCH | Hb/RBC count x 10 | 27-33 pg | Hb per cell |
| MCHC | Hb/PCV x 100 | 32-36 g/dL | Hb concentration per cell |

## Erythropoiesis
- **Site**: Red bone marrow (adults)
- **Duration**: ~7 days from stem cell to mature RBC
- **Sequence**: Proerythroblast --> Basophilic --> Polychromatic --> Orthochromatic --> Reticulocyte --> Mature RBC
- **Reticulocyte**: Contains residual RNA (stained by supravital dyes like brilliant cresyl blue); matures in blood in 1-2 days
- **Erythropoietin (EPO)**: Primary regulator; released by kidney in response to hypoxia

## Requirements for Erythropoiesis
- **Iron**: For heme synthesis (essential)
- **Vitamin B12 and Folate**: For DNA synthesis (nuclear maturation)
- **Vitamin B6 (pyridoxine)**: Cofactor for ALA synthase (first step of heme synthesis)
- **Copper**: For ceruloplasmin (iron absorption)
- **Proteins**: For globin chain synthesis`,
        mnemonics: [
          { text: "RBC lifespan = 120 days = '4 months to die' (one-twenty days)", explanation: "RBC lifespan is 120 days; destroyed primarily in the spleen by reticuloendothelial macrophages" },
          { text: "HbA = Adult (alpha2-beta2); HbF = Fetal (alpha2-gamma2); HbA2 = Alpha2-Delta2", explanation: "Three normal hemoglobin types distinguished by their globin chain composition" },
          { text: "1 Hb = 1.34 mL O2 (Hufner's number: One-Three-Four)", explanation: "Each gram of hemoglobin can carry 1.34 mL of oxygen when fully saturated" }
        ],
        keyPoints: [
          "RBCs are biconcave discs, 7.2 micrometers, no nucleus, lifespan 120 days",
          "Hemoglobin is a tetramer (4 globin chains + 4 heme groups); 1 g Hb carries 1.34 mL O2",
          "HbA (alpha2-beta2) = 96-98%; HbA2 (alpha2-delta2) = 1.5-3.5%; HbF (alpha2-gamma2) < 1%",
          "HbF has higher O2 affinity than HbA (facilitates transplacental O2 transfer)",
          "Erythropoietin from kidney is the primary regulator of erythropoiesis",
          "Iron, B12, and folate are essential requirements for normal erythropoiesis"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 33 - Red Blood Cells, Anemia, and Polycythemia", edition: "14th" }] },

      { layer: 2, slug: "layer-2-mechanism", title: "Red Blood Cells & Hemoglobin - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of oxygen-hemoglobin dissociation, cooperative binding, Bohr effect, 2,3-DPG role, carbon dioxide transport, and iron metabolism including absorption, transport, and storage.",
        contentMd: `# Red Blood Cells & Hemoglobin - Mechanisms

## Oxygen-Hemoglobin Dissociation Curve (ODC)
- **Sigmoid (S-shaped)** curve due to cooperative binding
- **P50**: PaO2 at which Hb is 50% saturated = **26.6 mmHg**
- At normal arterial PaO2 (100 mmHg): SaO2 = **97-98%**
- At venous PaO2 (40 mmHg): SvO2 = **75%**

### Cooperative Binding
- Binding of first O2 to Hb increases affinity for subsequent O2 molecules
- **T-state (Taut/Deoxy)**: Low O2 affinity (deoxyhemoglobin)
- **R-state (Relaxed/Oxy)**: High O2 affinity (oxyhemoglobin)
- O2 binding shifts Hb from T to R state progressively

## Factors Shifting the ODC

### Right Shift (Decreased Affinity, Increased O2 Unloading)
- Increased temperature
- Increased PaCO2
- Increased H+ (decreased pH) = **Bohr effect**
- Increased **2,3-DPG** (2,3-diphosphoglycerate)
- Exercise (all above factors increase at exercising tissues)

### Left Shift (Increased Affinity, Decreased O2 Unloading)
- Decreased temperature
- Decreased PaCO2
- Increased pH (alkalosis)
- Decreased 2,3-DPG
- **HbF** (fetal hemoglobin - does not bind 2,3-DPG)
- **CO** (carbon monoxide - binds with 200x affinity of O2)
- **Methemoglobin** (Fe3+ instead of Fe2+)

## Bohr Effect
- Increased CO2 and H+ decrease Hb-O2 affinity (right shift)
- **Physiological significance**: At tissues (high CO2, low pH) --> Hb releases more O2
- At lungs (low CO2, high pH) --> Hb picks up more O2
- **Double Bohr effect** in placenta: Ensures efficient O2 transfer from mother to fetus

## 2,3-DPG (2,3-Diphosphoglycerate)
- Produced by RBCs during glycolysis (Rapoport-Luebering shunt)
- Binds to beta chains of deoxy-Hb, stabilizing T-state
- **Increased in**: Chronic hypoxia, anemia, high altitude, pyruvate kinase deficiency
- **Decreased in**: Stored blood (after 1-2 weeks), hexokinase deficiency
- **HbF does not bind 2,3-DPG** (gamma chains lack binding site) --> left-shifted curve

## Carbon Dioxide Transport

| Form | Percentage | Mechanism |
|------|-----------|-----------|
| Dissolved CO2 | 7% | Directly in plasma |
| Carbamino compounds | 23% | CO2 binds amino groups of Hb and plasma proteins |
| Bicarbonate (HCO3-) | 70% | CO2 + H2O --> H2CO3 --> H+ + HCO3- (carbonic anhydrase in RBCs) |

### Chloride Shift (Hamburger Phenomenon)
- HCO3- generated in RBCs exits to plasma via **Band 3 protein** (AE1 anion exchanger)
- Cl- enters RBC to maintain electrical neutrality
- At lungs: Reverse process occurs (CO2 exhaled)

## Haldane Effect
- Deoxygenated Hb carries MORE CO2 than oxygenated Hb
- At tissues: O2 released --> more CO2 can be carried
- At lungs: O2 bound --> CO2 released more easily

## Iron Metabolism

### Absorption
- Absorbed in **duodenum and upper jejunum**
- **Fe2+ (ferrous)**: Absorbed via DMT-1 transporter; facilitated by vitamin C
- **Fe3+ (ferric)**: Must be reduced to Fe2+ first by ferric reductase (Dcytb)
- **Hepcidin** (liver): Master regulator; inhibits ferroportin --> reduces iron absorption
- Absorption increased by: Iron deficiency, erythropoiesis, pregnancy, vitamin C
- Absorption decreased by: Hepcidin, phytates, tannins (tea), calcium

### Transport and Storage
- **Transferrin**: Iron transport protein in blood (binds 2 Fe3+)
- **Ferritin**: Intracellular iron storage (liver, spleen, bone marrow)
- **Hemosiderin**: Insoluble iron storage (in iron overload)
- **Total body iron**: 3-5 g (65% in Hb, 25% storage, 5% myoglobin)`,
        mnemonics: [
          { text: "Right shift = CADET face Right: CO2, Acid, 2,3-DPG, Exercise, Temperature (all increased)", explanation: "Factors that shift the oxygen-hemoglobin dissociation curve to the right (decreased Hb-O2 affinity, increased O2 unloading at tissues)" },
          { text: "Hepcidin = Hepatic peptide that HIDES iron (inhibits absorption)", explanation: "Hepcidin blocks ferroportin, the iron export channel on enterocytes and macrophages, reducing iron availability" }
        ],
        keyPoints: [
          "ODC is sigmoid due to cooperative binding; P50 = 26.6 mmHg",
          "Right shift (CADET) = increased O2 unloading at tissues",
          "Bohr effect: increased CO2/H+ decreases Hb-O2 affinity (facilitates tissue O2 delivery)",
          "70% of CO2 transported as bicarbonate; chloride shift maintains RBC electrical neutrality",
          "2,3-DPG stabilizes T-state of Hb; HbF cannot bind 2,3-DPG (left-shifted curve)",
          "Hepcidin is the master regulator of iron absorption (blocks ferroportin)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 33 - RBCs; Ch 41 - Transport of O2 and CO2", edition: "14th" }] },

      { layer: 3, slug: "layer-3-clinical", title: "Red Blood Cells & Hemoglobin - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical conditions related to RBC and Hb abnormalities including iron deficiency anemia, megaloblastic anemia, thalassemia, sickle cell disease, polycythemia, and hemoglobin variants.",
        contentMd: `# Red Blood Cells & Hemoglobin - Clinical Application

## Iron Deficiency Anemia
- **Most common anemia worldwide** and in India
- Causes: Inadequate intake, chronic blood loss (hookworm - common in India, menorrhagia), malabsorption
- **Lab findings**: Low MCV (microcytic), low MCHC (hypochromic), low serum ferritin, low serum iron, high TIBC
- **Peripheral smear**: Microcytic hypochromic RBCs, target cells, pencil cells
- **Treatment**: Oral ferrous sulfate (best absorbed on empty stomach with vitamin C)

## Megaloblastic Anemia (B12/Folate Deficiency)
- **Mechanism**: Impaired DNA synthesis --> large cells with immature nuclei
- **B12 deficiency**: Pernicious anemia (anti-IF antibodies), strict vegetarian diet (common in India), ileal disease
- **Folate deficiency**: Malnutrition, pregnancy, drugs (methotrexate, phenytoin)
- **Lab**: High MCV (> 100 fL), macro-ovalocytes, hypersegmented neutrophils (> 5 lobes)
- **B12 unique features**: Subacute combined degeneration of spinal cord (posterior and lateral columns)
- **Schilling test**: Diagnoses cause of B12 deficiency (intrinsic factor vs malabsorption)

## Thalassemia
- **Alpha thalassemia**: Reduced alpha chain synthesis (chromosome 16)
- **Beta thalassemia**: Reduced beta chain synthesis (chromosome 11)
- **Beta-thal trait**: Mild anemia, HbA2 > 3.5%, target cells; very common in India
- **Beta-thal major (Cooley anemia)**: Severe transfusion-dependent anemia from 6 months age; HbF elevated
- **Clinical features**: Hepatosplenomegaly, expansion of bone marrow (crew-cut skull, chipmunk facies), iron overload
- **Treatment**: Regular transfusion + iron chelation (desferrioxamine); curative: bone marrow transplant

## Sickle Cell Disease
- **HbS**: Glutamate --> Valine at position 6 of beta chain (point mutation)
- **Sickling**: Under deoxygenation, HbS polymerizes --> RBCs assume sickle shape
- **Vaso-occlusive crises**: Painful episodes, organ infarction
- **Protective**: Sickle cell trait (HbAS) confers resistance to **Plasmodium falciparum** malaria
- **Common in central India**: Tribal populations of Chhattisgarh, Jharkhand, Maharashtra, Gujarat

## Polycythemia

| Feature | Primary (Vera) | Secondary |
|---------|---------------|-----------|
| Cause | JAK2 mutation (myeloproliferative) | Chronic hypoxia, EPO-secreting tumors |
| EPO | Low | High |
| Hematocrit | Very high (> 55%) | Moderately high |
| Spleen | Enlarged | Normal |
| RBC mass | Increased | Increased |
| Examples | PV (JAK2 V617F in 95%) | COPD, high altitude, renal tumors |

## Carbon Monoxide Poisoning
- CO binds Hb with **200-250x affinity** of O2
- Forms **carboxyhemoglobin (COHb)**: Shifts ODC to LEFT (O2 not released to tissues)
- **Cherry-red color** of skin and blood
- **Pulse oximetry** may be falsely normal (cannot distinguish COHb from O2Hb)
- Treatment: **100% O2** (reduces CO half-life from 4-6 hrs to 45 min); hyperbaric O2 for severe cases
- Indian relevance: Common in winter due to coal/charcoal burning in closed rooms

## Methemoglobinemia
- Fe2+ oxidized to Fe3+ (methemoglobin); cannot bind O2
- Causes: Dapsone (used for leprosy - common in India), nitrites, local anesthetics (prilocaine)
- **Chocolate-brown blood** that does not turn red with O2 exposure
- Treatment: **IV methylene blue** (reduces Fe3+ back to Fe2+ via NADPH pathway)

> **Clinical Pearl**: In India, sickle cell trait and thalassemia trait overlap in certain regions. Always perform Hb electrophoresis/HPLC for definitive diagnosis. National screening programs exist for both conditions.`,
        mnemonics: [
          { text: "CADET shifts right (more O2 to tissues); CO and HbF shift LEFT (hold on to O2)", explanation: "Right shift factors (CO2, Acid, 2,3-DPG, Exercise, Temperature) vs left shift factors in clinical context" },
          { text: "Sickle cell = GAG to GTG (Glutamate to Valine at beta-6)", explanation: "The point mutation causing sickle cell disease: GAG codon changed to GTG, replacing glutamic acid with valine at position 6 of the beta globin chain" }
        ],
        keyPoints: [
          "Iron deficiency anemia: microcytic hypochromic, low ferritin, high TIBC",
          "B12 deficiency causes megaloblastic anemia AND subacute combined degeneration of cord",
          "Beta-thalassemia trait: HbA2 > 3.5% on HPLC (common in India)",
          "HbS = Glu to Val at beta-6; sickle trait protects against falciparum malaria",
          "CO has 200x affinity for Hb; cherry-red color; treat with 100% O2",
          "Methemoglobinemia: chocolate-brown blood; treat with IV methylene blue"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 33, 41", edition: "14th" }, { book: "Harsh Mohan", chapter: "Ch 12 - Anemias", edition: "8th" }] },

      { layer: 4, slug: "layer-4-exam-prep", title: "Red Blood Cells & Hemoglobin - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield one-liners, comparison tables, and previous year themes for RBCs and hemoglobin.",
        contentMd: `# Exam Preparation - RBCs & Hemoglobin

## One-Liners
- RBC diameter: **7.2 micrometers**
- RBC lifespan: **120 days**
- RBC destruction site: **Spleen (extravascular hemolysis)**
- RBC energy source: **Anaerobic glycolysis (Embden-Meyerhof)**
- Hufner's constant: **1.34 mL O2 per gram Hb**
- P50 of ODC: **26.6 mmHg**
- Normal SaO2 at PaO2 100: **97-98%**
- HbA structure: **Alpha2-Beta2 (96-98%)**
- HbF structure: **Alpha2-Gamma2 (< 1% in adults)**
- HbF advantage: **Higher O2 affinity (does not bind 2,3-DPG)**
- Bohr effect: **Increased CO2/H+ decreases Hb-O2 affinity**
- Haldane effect: **Deoxy-Hb carries more CO2**
- CO2 transport (main form): **Bicarbonate (70%)**
- Chloride shift protein: **Band 3 (AE1)**
- Iron absorption site: **Duodenum and upper jejunum**
- Iron absorption enhancer: **Vitamin C (ascorbic acid)**
- Iron absorption inhibitor: **Hepcidin, phytates, tannins**
- Iron transport protein: **Transferrin**
- Iron storage protein: **Ferritin (soluble), hemosiderin (insoluble)**
- CO affinity for Hb: **200-250 times that of O2**
- Methemoglobin treatment: **IV Methylene blue**
- HbS mutation: **Glu to Val at beta-6 position**

## Comparison: Right Shift vs Left Shift of ODC

| Right Shift (CADET) | Left Shift |
|---------------------|-----------|
| Increased CO2 | Decreased CO2 |
| Acidosis (low pH) | Alkalosis (high pH) |
| Increased 2,3-DPG | Decreased 2,3-DPG |
| Exercise | Rest |
| Increased Temperature | Decreased Temperature |
| HbS | HbF, COHb, MetHb |
| P50 increases | P50 decreases |
| More O2 to tissues | Less O2 to tissues |

## Comparison: Iron Deficiency vs Thalassemia Trait

| Feature | Iron Deficiency | Beta-Thal Trait |
|---------|----------------|-----------------|
| MCV | Low | Low |
| RBC count | Low | Normal or high |
| RDW | High | Normal |
| Serum ferritin | Low | Normal |
| Serum iron | Low | Normal |
| TIBC | High | Normal |
| HbA2 | Normal | > 3.5% |
| Response to iron | Yes | No |
| Mentzer index (MCV/RBC) | > 13 | < 13 |

## Previous Year Question Themes
- Oxygen-hemoglobin dissociation curve and shifts
- Bohr effect and its physiological significance
- CO2 transport mechanisms (chloride shift)
- Iron metabolism and hepcidin
- Hemoglobin types and thalassemia
- CO poisoning mechanism
- RBC indices and their calculation`,
        mnemonics: [
          { text: "Mentzer index: IRON > THIRTEEN; THAL < THIRTEEN (MCV/RBC count)", explanation: "Mentzer index helps differentiate iron deficiency (> 13) from thalassemia trait (< 13) in microcytic anemia" }
        ],
        keyPoints: [
          "CADET = right shift factors for ODC (increased O2 delivery to tissues)",
          "Bohr effect is at tissues; Haldane effect at lungs; both optimize gas exchange",
          "Iron deficiency vs thalassemia trait: Mentzer index > 13 vs < 13; ferritin low vs normal",
          "HbF left-shifts ODC because gamma chains cannot bind 2,3-DPG",
          "CO binds 200x stronger than O2; pulse oximetry falsely normal in CO poisoning"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 33, 41", edition: "14th" }] },

      { layer: 5, slug: "layer-5-active-recall", title: "Red Blood Cells & Hemoglobin - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on RBC and hemoglobin concepts.",
        contentMd: `# Active Recall - Red Blood Cells & Hemoglobin

**Q1:** What is the shape, size, and lifespan of a normal RBC?
> Biconcave disc, 7.2 micrometers diameter, lifespan 120 days; destroyed in spleen

**Q2:** How many O2 molecules can one hemoglobin molecule carry?
> 4 (one per heme group); 1 g Hb carries 1.34 mL O2 (Hufner's constant)

**Q3:** What is the structure of HbA, HbA2, and HbF?
> HbA = alpha2-beta2 (96-98%); HbA2 = alpha2-delta2 (1.5-3.5%); HbF = alpha2-gamma2 (< 1%)

**Q4:** Why does HbF have a higher O2 affinity than HbA?
> HbF gamma chains cannot bind 2,3-DPG, so the ODC is left-shifted (higher affinity, lower P50)

**Q5:** List five factors that cause a right shift of the ODC.
> Increased CO2, decreased pH (acidosis), increased 2,3-DPG, increased temperature, exercise (CADET)

**Q6:** Explain the Bohr effect and its physiological significance.
> Increased CO2/H+ decreases Hb-O2 affinity; at tissues (high CO2) O2 is released; at lungs (low CO2) O2 is loaded

**Q7:** How is most CO2 transported in blood?
> As bicarbonate (70%); CO2 + H2O -> H2CO3 -> H+ + HCO3- (catalyzed by carbonic anhydrase in RBCs)

**Q8:** What is the chloride shift?
> HCO3- exits RBCs to plasma via Band 3 protein (AE1); Cl- enters RBCs to maintain electrical neutrality

**Q9:** Where is iron absorbed and what regulates its absorption?
> Absorbed in duodenum and upper jejunum; hepcidin (from liver) is the master negative regulator

**Q10:** How does carbon monoxide cause toxicity?
> CO binds Hb with 200-250x affinity of O2, forming COHb; also shifts ODC left, preventing O2 release to tissues

**Q11:** What is the Mentzer index and how is it used?
> MCV / RBC count; > 13 suggests iron deficiency; < 13 suggests thalassemia trait

**Q12:** What is the mutation in sickle cell disease?
> Point mutation: GAG to GTG at codon 6 of beta-globin gene; glutamic acid replaced by valine`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering RBC morphology, hemoglobin, ODC, CO2 transport, and clinical conditions",
          "Practice drawing and labeling the ODC with right and left shift factors",
          "Know the iron metabolism pathway: absorption, transport, storage, regulation",
          "Compare iron deficiency and thalassemia trait using lab parameters",
          "Understand the clinical significance of Bohr and Haldane effects"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 33, 41", edition: "14th" }] },
    ],
  },
];
