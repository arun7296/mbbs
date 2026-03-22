import type { TopicLessons } from "./content-loader";

export const pharmacologyPart1Lessons: TopicLessons[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODULE 1 — GENERAL PHARMACOLOGY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ─── Topic 1: Routes of Drug Administration ─────────────────
  {
    topicCode: "PH-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "routes-drug-admin-foundation",
        title: "Routes of Drug Administration - Foundation",
        estimatedMinutes: 20,
        summary:
          "Drug routes are broadly enteral (oral, sublingual, rectal) and parenteral (IV, IM, SC, intradermal). Choice depends on onset needed, drug properties, patient compliance, and first-pass metabolism.",
        contentMd: `# Routes of Drug Administration

## Why Route Matters
The route determines **bioavailability**, **onset of action**, and **patient compliance**. A drug given IV has 100% bioavailability; the same drug orally may have only 20-30% due to first-pass metabolism.

## Classification

### 1. Enteral Routes (via GI tract)

| Route | Examples | Onset | First-Pass |
|-------|----------|-------|------------|
| **Oral** | Tablets, capsules, syrups | 30-60 min | Yes |
| **Sublingual** | GTN, buprenorphine | 1-2 min | No |
| **Buccal** | Fentanyl lozenge | 2-5 min | No |
| **Rectal** | Diazepam suppository, bisacodyl | 15-30 min | Partial (50%) |

### 2. Parenteral Routes (bypass GI tract)

| Route | Onset | Volume | Notes |
|-------|-------|--------|-------|
| **Intravenous (IV)** | Immediate | Large volumes possible | 100% bioavailability, risk of embolism |
| **Intramuscular (IM)** | 10-30 min | Up to 5 mL (deltoid 2 mL) | Depot formulations possible |
| **Subcutaneous (SC)** | 15-30 min | Up to 2 mL | Insulin, heparin, vaccines |
| **Intradermal (ID)** | Slow | 0.1 mL | Mantoux test, BCG vaccine |

### 3. Topical & Other Routes
- **Transdermal**: Patches (fentanyl, nicotine, estradiol) - sustained release over 24-72 hours
- **Inhalation**: Salbutamol, beclomethasone - rapid onset, local action in lungs
- **Intrathecal**: Methotrexate, baclofen - directly into CSF
- **Intra-articular**: Corticosteroid injection into joint

## First-Pass Metabolism
Oral drugs absorbed from GI tract travel via **portal vein to liver** before reaching systemic circulation. Liver enzymes (CYP450) metabolize a fraction of the drug, reducing bioavailability.

> **Clinical Pearl**: Drugs with high first-pass metabolism (GTN, lidocaine, propranolol, morphine) have much lower oral bioavailability compared to parenteral.

## Bioavailability
$$F = \\frac{AUC_{oral}}{AUC_{IV}} \\times 100\\%$$

Where AUC = Area Under the plasma concentration-time Curve.`,
        mnemonics: [
          {
            text: "SL-NO-FP: SubLingual has NO First Pass",
            explanation:
              "Sublingual drugs (GTN, buprenorphine) bypass first-pass metabolism by draining into superior vena cava via lingual veins, not portal circulation.",
          },
          {
            text: "LIMP drugs have Low oral bioavailability",
            explanation:
              "Lidocaine, Isoprenaline, Morphine, Propranolol - all have high first-pass effect, so oral bioavailability is low.",
          },
        ],
        keyPoints: [
          "Oral route: most common, subject to first-pass metabolism",
          "Sublingual: bypasses first-pass, rapid onset (GTN for angina)",
          "IV: 100% bioavailability, immediate onset, used for emergencies",
          "Rectal: 50% bypasses first-pass (lower rectal veins drain into IVC)",
          "Bioavailability = AUC oral / AUC IV x 100%",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 1 - Introduction, Routes", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 2 - Pharmacokinetics", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "routes-drug-admin-mechanism",
        title: "Routes of Drug Administration - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed pharmacokinetics of each route: absorption barriers, factors affecting absorption, rate vs extent of absorption, and special delivery systems used in Indian clinical practice.",
        contentMd: `# Mechanisms of Drug Absorption by Route

## Oral Absorption
Absorption occurs mainly in the **small intestine** (large surface area, rich blood supply).

### Factors Affecting Oral Absorption
| Factor | Effect |
|--------|--------|
| **Lipid solubility** | Higher = better passive diffusion |
| **Ionization (pKa)** | Un-ionized form absorbs better |
| **GI motility** | Increased motility = decreased absorption |
| **Blood flow** | Increased splanchnic flow = more absorption |
| **Food** | May delay (most drugs) or enhance (griseofulvin) |
| **Drug formulation** | Solution > suspension > capsule > tablet > coated tablet |
| **Particle size** | Smaller = faster dissolution |

### Henderson-Hasselbalch Equation
For weak acids: $$\\frac{[Ionized]}{[Un\\text{-}ionized]} = 10^{(pH - pKa)}$$

For weak bases: $$\\frac{[Ionized]}{[Un\\text{-}ionized]} = 10^{(pKa - pH)}$$

> **Key Principle**: Weak acids are better absorbed in acidic pH (stomach); weak bases in alkaline pH (intestine). But practically, most absorption occurs in the intestine due to its large surface area.

## Ion Trapping
A weak acid in acidic environment remains un-ionized and crosses membranes. Once it reaches the other side (alkaline), it ionizes and gets "trapped."

**Clinical Application**: Alkalinizing urine (NaHCO3) traps aspirin (weak acid, pKa 3.5) in urine, enhancing excretion in overdose.

## Parenteral Route Mechanisms

### IV Infusion Kinetics
- **Loading dose** = Target Cp x Vd
- **Maintenance dose** = Target Cp x Clearance
- Steady state reached in **4-5 half-lives**

### IM/SC Absorption
- Absorption via capillary diffusion
- Depends on: blood flow to site, water solubility, injection volume
- Depot preparations: oily vehicles or crystalline suspensions (e.g., depot medroxyprogesterone for contraception - available under NFPP)

## Special Delivery Systems in Indian Practice
| System | Example | Duration |
|--------|---------|----------|
| Transdermal patch | Fentanyl (cancer pain) | 72 hours |
| Implant | Etonogestrel (contraceptive) | 3 years |
| DPI (Dry Powder Inhaler) | Budesonide Rotacaps | Per dose |
| MDI (Metered Dose Inhaler) | Salbutamol | Per dose |
| Nebulization | Ipratropium + salbutamol | ER use |
| Liposomal | Amphotericin B (lipid) | Reduced toxicity |`,
        mnemonics: [
          {
            text: "SOLID order of drug absorption speed",
            explanation:
              "Solution > Oil/suspension > Loose capsule > Immediate tablet > Delayed/coated tablet - absorption rate from fastest to slowest oral formulation.",
          },
        ],
        keyPoints: [
          "Un-ionized form crosses membranes better (lipid-soluble)",
          "Henderson-Hasselbalch: weak acids absorbed in acidic pH, weak bases in alkaline",
          "Ion trapping used clinically: alkalinize urine for aspirin overdose",
          "Steady state = 4-5 half-lives of continuous dosing",
          "Loading dose = Cp x Vd; Maintenance dose = Cp x Clearance",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 2 - Pharmacokinetics", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 2 - Pharmacokinetics", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "routes-drug-admin-clinical",
        title: "Routes of Drug Administration - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical scenarios: choosing routes in emergencies, pediatric/geriatric dosing, route-related ADRs, and Indian healthcare context for drug delivery.",
        contentMd: `# Clinical Applications

## Emergency Route Selection
| Scenario | Preferred Route | Drug Example |
|----------|----------------|--------------|
| Anaphylaxis | **IM** (anterolateral thigh) | Adrenaline 0.5 mg |
| Status epilepticus | **IV** (then rectal if no access) | Diazepam / Lorazepam |
| Acute MI (chest pain) | **Sublingual** | GTN 0.5 mg |
| Acute severe asthma | **Nebulization** then IV | Salbutamol + ipratropium |
| Organophosphate poisoning | **IV** | Atropine + Pralidoxime |

> **Clinical Pearl**: In anaphylaxis, adrenaline is given IM (not SC) - the anterolateral thigh provides faster absorption than deltoid. IV adrenaline only in cardiac arrest or refractory cases in ICU.

## Pediatric Route Considerations
- Oral (syrup/drops) preferred for outpatient
- Rectal route for seizing child (rectal diazepam)
- IM vaccinations at vastus lateralis in infants
- Avoid IM in premature neonates (poor muscle mass)

## Route-Related Adverse Effects
| Route | Adverse Effect |
|-------|---------------|
| IV | Thrombophlebitis, air embolism, sepsis |
| IM | Abscess, nerve injury (sciatic from gluteal injection) |
| Oral | GI irritation, first-pass limits bioavailability |
| Transdermal | Contact dermatitis at patch site |
| Inhalation | Oral candidiasis (inhaled corticosteroids) |

## Indian Clinical Context
- **National Immunization Schedule**: OPV (oral), IPV (IM/SC), BCG (intradermal), Hepatitis B (IM)
- **Insulin delivery**: Pen devices increasingly used over syringes; NPH and premixed insulins widely prescribed
- **DOTS (TB)**: Oral directly observed therapy, thrice-weekly regimen
- **Jan Aushadhi stores**: Generic oral formulations at reduced cost
- **Nebulization**: Widely available even in PHCs for acute asthma`,
        mnemonics: [
          {
            text: "IM for Anaphylaxis = I Must Act Fast",
            explanation:
              "In anaphylaxis, adrenaline 0.5 mg IM into anterolateral thigh is the first-line treatment. IM provides reliable absorption even in shock (unlike SC).",
          },
        ],
        keyPoints: [
          "Anaphylaxis: adrenaline 0.5 mg IM anterolateral thigh",
          "Status epilepticus: IV diazepam, or rectal if no IV access",
          "IM injection in infants: vastus lateralis (not gluteal - risk of sciatic injury)",
          "Inhaled corticosteroids cause oral candidiasis - rinse mouth after use",
          "Indian immunization: BCG intradermal, OPV oral, IPV IM",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 1 - Routes of Administration", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 2", edition: "13th" },
        ],
      },
      {
        layer: 4,
        slug: "routes-drug-admin-exam",
        title: "Routes of Drug Administration - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield one-liners and comparison tables on drug routes frequently tested in NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Route with 100% bioavailability: **IV**
- Sublingual drug for angina: **GTN (glyceryl trinitrate)**
- Route bypassing first-pass completely: **IV, sublingual, inhalation, transdermal**
- Rectal absorption: **50% bypasses first-pass** (lower rectal veins -> IVC)
- Mantoux test route: **Intradermal**
- BCG vaccine route: **Intradermal (left deltoid)**
- Insulin cannot be given orally because: **Peptide - destroyed by GI enzymes**
- Adrenaline in anaphylaxis: **IM anterolateral thigh**
- Drug with near-zero oral bioavailability: **Lidocaine (extensive first-pass)**
- Nitroglycerin given sublingual because: **90% first-pass metabolism orally**

## Comparison Table: Enteral Routes

| Feature | Oral | Sublingual | Rectal |
|---------|------|-----------|--------|
| First-pass | Full | None | Partial (50%) |
| Onset | 30-60 min | 1-2 min | 15-30 min |
| Patient compliance | Best | Moderate | Poor |
| Self-administration | Easy | Easy | Difficult |
| Emesis concern | Yes | No | No |

## Previous Year Themes
- Bioavailability calculation from AUC
- First-pass metabolism drugs (GTN, lidocaine, propranolol)
- Route selection in clinical scenarios
- Henderson-Hasselbalch application
- Ion trapping in poisoning management`,
        mnemonics: [
          {
            text: "NO FIRST PASS: IV-SL-INH-TD-Rectal(partial)",
            explanation:
              "Routes that bypass first-pass metabolism: IV (completely), Sublingual, Inhalation, Transdermal, Rectal (partially, ~50%).",
          },
        ],
        keyPoints: [
          "IV = 100% bioavailability",
          "Sublingual bypasses first-pass completely",
          "Rectal: 50% bypasses first-pass",
          "Lidocaine and GTN have extensive first-pass - not given orally",
          "Adrenaline IM for anaphylaxis - not SC",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 1-2", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "routes-drug-admin-recall",
        title: "Routes of Drug Administration - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on routes of drug administration.",
        contentMd: `# Active Recall

**Q1:** Which route has 100% bioavailability?
> Intravenous (IV)

**Q2:** Why is GTN given sublingually and not orally?
> GTN undergoes ~90% first-pass metabolism if given orally. Sublingual route bypasses first-pass, entering systemic circulation directly.

**Q3:** What fraction of rectal drug absorption bypasses first-pass?
> Approximately 50% (lower rectal veins drain into IVC, upper into portal vein)

**Q4:** Why can insulin not be given orally?
> Insulin is a peptide hormone destroyed by GI proteolytic enzymes.

**Q5:** In anaphylaxis, what is the route and site for adrenaline?
> IM injection into anterolateral thigh (0.5 mg of 1:1000)

**Q6:** What is the Henderson-Hasselbalch principle for drug absorption?
> Weak acids are better absorbed in acidic pH (un-ionized form); weak bases in alkaline pH.

**Q7:** How is aspirin overdose managed using ion trapping?
> Alkalinize urine with IV NaHCO3 - aspirin (weak acid) ionizes in alkaline urine and gets trapped, enhancing excretion.

**Q8:** Steady state is reached after how many half-lives?
> 4-5 half-lives of continuous dosing`,
        mnemonics: [],
        keyPoints: [
          "8 recall questions covering routes, first-pass, bioavailability, and clinical applications",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 1-2", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 2: Pharmacokinetics: ADME ────────────────────────
  {
    topicCode: "PH-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "pharmacokinetics-adme-foundation",
        title: "Pharmacokinetics: ADME - Foundation",
        estimatedMinutes: 20,
        summary:
          "Pharmacokinetics is what the body does to the drug. ADME: Absorption, Distribution, Metabolism, Excretion. Key parameters include bioavailability, Vd, clearance, and half-life.",
        contentMd: `# Pharmacokinetics: ADME

## Overview
**Pharmacokinetics** = "What the body does to the drug"
**Pharmacodynamics** = "What the drug does to the body"

## A - Absorption
Transfer of drug from site of administration to systemic circulation.
- Mechanisms: passive diffusion (most drugs), facilitated diffusion, active transport, pinocytosis
- Rate depends on: lipid solubility, molecular size, ionization, blood flow, surface area

## D - Distribution
Movement of drug from blood to tissues.

### Volume of Distribution (Vd)
$$V_d = \\frac{\\text{Total amount of drug in body}}{\\text{Plasma concentration}}$$

| Vd Range | Interpretation | Example |
|----------|---------------|---------|
| ~3-5 L | Confined to plasma | Heparin, warfarin (highly protein-bound) |
| ~15-20 L | Distributed to ECF | Aminoglycosides |
| >40 L | Distributed to total body water/tissues | Chloroquine (Vd ~200 L), digoxin |

### Plasma Protein Binding
- **Albumin**: Binds acidic drugs (warfarin, phenytoin, aspirin)
- **Alpha-1 acid glycoprotein**: Binds basic drugs (propranolol, lidocaine)
- Only **free (unbound) drug** is pharmacologically active

## M - Metabolism (Biotransformation)
Primarily in **liver** (also gut, lung, kidney).

### Phase I (Functionalization)
- Oxidation, reduction, hydrolysis
- **CYP450 system** (microsomes): CYP3A4 (most important, metabolizes ~50% of drugs), CYP2D6, CYP2C9
- Introduces or unmasks a functional group (-OH, -NH2, -SH)

### Phase II (Conjugation)
- Glucuronidation (most common), acetylation, sulfation, methylation, glutathione conjugation
- Makes drugs water-soluble for excretion

## E - Excretion
Primarily via **kidneys** (also bile, lungs, sweat, milk).

### Renal Excretion
1. Glomerular filtration (free drug only)
2. Tubular secretion (active - both free and bound drug)
3. Tubular reabsorption (passive - un-ionized drug reabsorbed)

### Half-Life
$$t_{1/2} = \\frac{0.693 \\times V_d}{Clearance}$$`,
        mnemonics: [
          {
            text: "ADME = Administration Determines My Elimination",
            explanation:
              "Absorption, Distribution, Metabolism, Excretion - the four pharmacokinetic processes that determine drug levels in the body.",
          },
          {
            text: "CYP3A4 is the KING - metabolizes 50% of drugs",
            explanation:
              "CYP3A4 is the most important cytochrome P450 enzyme, responsible for metabolizing approximately 50% of all clinically used drugs.",
          },
        ],
        keyPoints: [
          "Pharmacokinetics = what body does to drug (ADME)",
          "Vd: low = plasma-confined (heparin); high = tissue-distributed (chloroquine)",
          "Only free (unbound) drug is active; albumin binds acidic drugs",
          "CYP3A4 metabolizes ~50% of drugs (Phase I)",
          "Half-life = 0.693 x Vd / Clearance",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 2 - Pharmacokinetics", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 2 - Pharmacokinetics", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "pharmacokinetics-adme-mechanism",
        title: "Pharmacokinetics: ADME - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed kinetics: zero-order vs first-order, CYP450 inducers/inhibitors, enzyme polymorphisms, clearance concepts, and compartment models.",
        contentMd: `# ADME - Detailed Mechanisms

## Order of Kinetics

| Feature | First-Order | Zero-Order |
|---------|-------------|------------|
| Rate depends on | Drug concentration | Constant (independent) |
| Fraction eliminated | Constant fraction/time | Constant amount/time |
| Half-life | Constant | Changes with dose |
| Cp vs time plot | Exponential decay | Linear decline |
| Most drugs | Yes | Phenytoin, ethanol, aspirin (at high doses) |

> **Clinical Pearl**: Phenytoin follows first-order kinetics at low doses but switches to zero-order at therapeutic doses (saturation kinetics / Michaelis-Menten). Small dose changes can cause toxicity.

## CYP450 Enzyme Inducers and Inhibitors

### Inducers (increase metabolism, reduce drug effect)

| Inducer | Mnemonic |
|---------|----------|
| Rifampicin | **R** |
| Phenytoin | **P** |
| Carbamazepine | **C** |
| Phenobarbitone | **P** |
| Chronic alcohol | **C** |
| Smoking | **S** |
| St. John's Wort | **S** |

### Inhibitors (decrease metabolism, increase drug effect/toxicity)

| Inhibitor | Mnemonic |
|-----------|----------|
| Cimetidine | **C** |
| Erythromycin/Clarithromycin | **E** |
| Ketoconazole/Itraconazole | **K** |
| Grapefruit juice | **G** |
| Isoniazid | **I** |
| Ciprofloxacin | **C** |
| Acute alcohol | **A** |
| Ritonavir | **R** |

## Genetic Polymorphisms
| Enzyme | Polymorphism | Clinical Relevance |
|--------|--------------|--------------------|
| CYP2D6 | Poor metabolizers (7% Caucasians) | Codeine not converted to morphine - no analgesia |
| NAT2 | Slow acetylators (60% Indians) | Isoniazid toxicity (peripheral neuropathy) |
| CYP2C19 | Poor metabolizers | Increased effect of omeprazole, clopidogrel resistance |
| Pseudocholinesterase | Atypical form | Prolonged apnea with succinylcholine |

## Clearance
$$Cl = \\frac{\\text{Rate of elimination}}{\\text{Plasma concentration}}$$
$$Cl_{total} = Cl_{renal} + Cl_{hepatic} + Cl_{other}$$

## Compartment Models
- **One-compartment**: Drug distributes instantaneously (rapid equilibrium)
- **Two-compartment**: Distribution phase (alpha) + elimination phase (beta)
- Alpha phase: rapid distribution to well-perfused organs
- Beta phase: slower elimination`,
        mnemonics: [
          {
            text: "PCPA-CSS for CYP450 Inducers",
            explanation:
              "Phenytoin, Carbamazepine, Phenobarbitone, Alcohol (chronic), Cigarettes/Smoking, St. John's Wort - plus Rifampicin (the most potent inducer).",
          },
          {
            text: "CEKGICA for CYP450 Inhibitors",
            explanation:
              "Cimetidine, Erythromycin, Ketoconazole, Grapefruit, Isoniazid, Ciprofloxacin, Acute alcohol (+ Ritonavir).",
          },
        ],
        keyPoints: [
          "Most drugs: first-order kinetics; Phenytoin, ethanol: zero-order at high doses",
          "Rifampicin: most potent CYP inducer - reduces efficacy of OCP, warfarin",
          "Slow acetylators (60% Indians): higher risk of INH peripheral neuropathy",
          "Grapefruit juice inhibits CYP3A4 in gut wall",
          "Two-compartment model: alpha (distribution) + beta (elimination) phases",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 2-3", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 2-3", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "pharmacokinetics-adme-clinical",
        title: "Pharmacokinetics: ADME - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical implications: dose adjustment in renal/hepatic failure, drug interactions due to enzyme induction/inhibition, therapeutic drug monitoring, and special populations.",
        contentMd: `# ADME - Clinical Applications

## Therapeutic Drug Monitoring (TDM)
Drugs requiring TDM (narrow therapeutic index):

| Drug | Therapeutic Range | Toxicity Signs |
|------|------------------|----------------|
| Phenytoin | 10-20 mcg/mL | Nystagmus, ataxia, gum hypertrophy |
| Lithium | 0.6-1.2 mEq/L | Tremor, polyuria, thyroid dysfunction |
| Digoxin | 0.5-2 ng/mL | Arrhythmias, yellow vision, nausea |
| Aminoglycosides | Peak/trough | Ototoxicity, nephrotoxicity |
| Vancomycin | Trough 10-20 mcg/mL | Nephrotoxicity, red man syndrome |
| Theophylline | 10-20 mcg/mL | Seizures, arrhythmias |

## Dose Adjustment in Renal Failure
- Reduce dose or increase interval for renally excreted drugs
- Use **Cockcroft-Gault equation** to estimate CrCl
- Drugs needing renal dose adjustment: aminoglycosides, digoxin, metformin, lithium, vancomycin
- **Metformin**: contraindicated if eGFR < 30 mL/min (lactic acidosis risk)

## Dose Adjustment in Hepatic Failure
- Reduce dose for hepatically metabolized drugs
- Avoid: paracetamol (high doses), methotrexate, statins in severe liver disease
- Child-Pugh score guides dose adjustment

## Clinically Important Drug Interactions

### Enzyme Induction Examples
| Inducer | Affected Drug | Clinical Consequence |
|---------|--------------|---------------------|
| Rifampicin | OCP (ethinylestradiol) | Contraceptive failure |
| Rifampicin | Warfarin | Reduced anticoagulation, clot risk |
| Carbamazepine | Phenytoin | Reduced phenytoin levels |
| Phenytoin | Dexamethasone | Reduced steroid effect |

### Enzyme Inhibition Examples
| Inhibitor | Affected Drug | Clinical Consequence |
|-----------|--------------|---------------------|
| Erythromycin | Theophylline | Theophylline toxicity (seizures) |
| Ketoconazole | Cyclosporine | Cyclosporine toxicity |
| Cimetidine | Warfarin | Bleeding risk |
| Grapefruit juice | Statins (simvastatin) | Rhabdomyolysis risk |

> **Clinical Pearl (Indian context)**: When starting ATT with rifampicin in a woman on OCP, always counsel about alternative contraception. Rifampicin induces CYP3A4, reducing ethinylestradiol levels by >50%.`,
        mnemonics: [
          {
            text: "DLPAT need TDM: Digoxin, Lithium, Phenytoin, Aminoglycosides, Theophylline",
            explanation:
              "These drugs have narrow therapeutic indices and require regular blood level monitoring to avoid toxicity.",
          },
        ],
        keyPoints: [
          "TDM needed for narrow TI drugs: digoxin, lithium, phenytoin, aminoglycosides, theophylline",
          "Rifampicin + OCP = contraceptive failure (CYP3A4 induction)",
          "Metformin contraindicated if eGFR < 30 (lactic acidosis)",
          "Erythromycin + theophylline = toxicity (CYP inhibition)",
          "Slow acetylators (common in India): INH dose-related neuropathy - give pyridoxine",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 2-4", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 2-3", edition: "13th" },
        ],
      },
      {
        layer: 4,
        slug: "pharmacokinetics-adme-exam",
        title: "Pharmacokinetics: ADME - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield one-liners and comparison tables for NEXT/NEET PG on pharmacokinetics.",
        contentMd: `# Exam High Yield

## One-Liners
- Vd of heparin: **Very low (~5 L)** - confined to plasma
- Vd of chloroquine: **Very high (~200 L)** - extensive tissue binding
- Most important CYP enzyme: **CYP3A4** (50% of drugs)
- Most potent CYP inducer: **Rifampicin**
- Zero-order kinetics drugs: **Phenytoin, ethanol, aspirin (high dose)**
- Phase II reaction: **Glucuronidation** (most common conjugation)
- Slow acetylator status: **60% of Indians** - INH neuropathy
- Drug NOT metabolized by liver: **Lithium** (excreted unchanged by kidneys)
- Drug 100% renally excreted: **Aminoglycosides**
- Prodrug activated by CYP2C19: **Clopidogrel**
- Enzyme deficiency causing succinylcholine apnea: **Pseudocholinesterase**
- Drug displaced from albumin by sulfonamides: **Warfarin** - bleeding
- Phenytoin kinetics: **Michaelis-Menten (zero-order at therapeutic doses)**

## Calculation Formulae
| Parameter | Formula |
|-----------|---------|
| Bioavailability (F) | AUC(oral) / AUC(IV) x 100% |
| Volume of distribution | Dose / Plasma concentration |
| Half-life | 0.693 x Vd / Clearance |
| Loading dose | Cp(target) x Vd |
| Maintenance dose | Cp(target) x Clearance |
| Steady state | 4-5 half-lives |

## Previous Year Themes
- Calculation of Vd, half-life, loading dose
- CYP inducers/inhibitors in clinical scenarios
- Protein binding displacement interactions
- Phenytoin zero-order kinetics
- Slow/fast acetylator clinical relevance`,
        mnemonics: [
          {
            text: "PEA = Zero-order: Phenytoin, Ethanol, Aspirin (high dose)",
            explanation:
              "These three drugs follow zero-order (saturation) kinetics at high/therapeutic doses. Half-life is not constant and small dose changes cause large changes in plasma levels.",
          },
        ],
        keyPoints: [
          "Zero-order drugs: PEA (Phenytoin, Ethanol, Aspirin high dose)",
          "CYP3A4 = most important; Rifampicin = most potent inducer",
          "60% Indians are slow acetylators",
          "Loading dose = Cp x Vd; Maintenance = Cp x CL",
          "Steady state in 4-5 half-lives",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 2-3", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "pharmacokinetics-adme-recall",
        title: "Pharmacokinetics: ADME - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on ADME.",
        contentMd: `# Active Recall

**Q1:** What is the formula for half-life?
> t1/2 = 0.693 x Vd / Clearance

**Q2:** Name 3 drugs that follow zero-order kinetics.
> Phenytoin, ethanol, aspirin (at high doses)

**Q3:** Which CYP enzyme metabolizes ~50% of drugs?
> CYP3A4

**Q4:** What is the most potent CYP450 inducer?
> Rifampicin

**Q5:** What percentage of Indians are slow acetylators and which drug is affected?
> ~60%; Isoniazid (INH) - increased risk of peripheral neuropathy.

**Q6:** What does a very high Vd indicate?
> Drug is extensively distributed to tissues (e.g., chloroquine, Vd ~200 L)

**Q7:** How many half-lives to reach steady state?
> 4-5 half-lives

**Q8:** Phase II metabolism - most common reaction?
> Glucuronidation`,
        mnemonics: [],
        keyPoints: ["8 recall questions covering ADME principles, kinetics, and clinical applications"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 2-3", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 3: Pharmacodynamics ──────────────────────────────
  {
    topicCode: "PH-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "pharmacodynamics-foundation",
        title: "Pharmacodynamics - Foundation",
        estimatedMinutes: 20,
        summary:
          "Pharmacodynamics is what the drug does to the body. Covers receptors, drug-receptor interactions, agonists, antagonists, dose-response relationships, and therapeutic index.",
        contentMd: `# Pharmacodynamics

## Definition
**Pharmacodynamics** = What the drug does to the body (mechanism of action, effects)

## Drug Targets
| Target | Example |
|--------|---------|
| **Receptors** | Beta-2 agonist (salbutamol) |
| **Enzymes** | ACE inhibitor (enalapril) |
| **Ion channels** | Ca2+ channel blocker (amlodipine) |
| **Transporters** | Proton pump inhibitor (omeprazole) |
| **Nucleic acids** | Alkylating agents (cyclophosphamide) |

## Receptor Types
| Type | Mechanism | Onset | Example |
|------|-----------|-------|---------|
| **Ligand-gated ion channel** | Ion flux | Milliseconds | Nicotinic ACh receptor, GABA-A |
| **G-protein coupled (GPCR)** | Second messengers | Seconds-minutes | Muscarinic, adrenergic, opioid |
| **Enzyme-linked** | Tyrosine kinase | Minutes-hours | Insulin receptor, growth factors |
| **Nuclear/Intracellular** | Gene transcription | Hours-days | Steroid, thyroid, vitamin D receptors |

## Key Definitions
- **Agonist**: Binds receptor + produces response (has affinity + efficacy)
- **Antagonist**: Binds receptor but NO response (has affinity, zero efficacy)
- **Partial agonist**: Sub-maximal response even at full receptor occupancy
- **Inverse agonist**: Produces opposite effect to agonist (reduces constitutive activity)

## Dose-Response Curves
- **Potency**: Position on x-axis (EC50) - lower EC50 = more potent
- **Efficacy**: Maximum response (Emax) on y-axis
- A drug can be more potent but less efficacious than another

## Therapeutic Index
$$TI = \\frac{TD_{50}}{ED_{50}}$$

Higher TI = safer drug. Narrow TI drugs need TDM.`,
        mnemonics: [
          {
            text: "GLEN for receptor types fast to slow",
            explanation:
              "G-protein coupled, Ligand-gated ion channel, Enzyme-linked, Nuclear - but ordered by speed: Ligand-gated (ms) > GPCR (s-min) > Enzyme-linked (min-hr) > Nuclear (hr-days).",
          },
          {
            text: "AffiniTY + EfficaCY = AgoniST activity",
            explanation:
              "An agonist needs both affinity (binding to receptor) and efficacy (producing a response). Antagonists have affinity but zero efficacy.",
          },
        ],
        keyPoints: [
          "Pharmacodynamics = what drug does to body",
          "4 receptor types: ion channel (fastest), GPCR, enzyme-linked, nuclear (slowest)",
          "Agonist = affinity + efficacy; Antagonist = affinity only",
          "Potency = EC50 (position); Efficacy = Emax (height)",
          "Therapeutic Index = TD50/ED50; higher = safer",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 3 - Pharmacodynamics", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 3 - Pharmacodynamics", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "pharmacodynamics-mechanism",
        title: "Pharmacodynamics - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed GPCR signaling pathways, competitive vs non-competitive antagonism, receptor regulation, and second messenger systems.",
        contentMd: `# Pharmacodynamics - Detailed Mechanisms

## GPCR Second Messenger Systems

| G-protein | Second Messenger | Effect | Receptor Examples |
|-----------|-----------------|--------|-------------------|
| **Gs** | cAMP increase | Activates PKA | Beta-1, Beta-2, D1, H2, V2 |
| **Gi** | cAMP decrease | Inhibits PKA | Alpha-2, M2, D2, Opioid (mu) |
| **Gq** | IP3 + DAG | Ca2+ release, PKC activation | Alpha-1, M1, M3, H1, V1, AT1 |

> **Clinical Pearl**: Understanding Gs/Gi/Gq explains drug effects. Beta-2 agonist (salbutamol) works via Gs -> cAMP increase -> bronchodilation. M3 blockade (ipratropium) prevents Gq-mediated bronchoconstriction.

## Types of Antagonism

### Competitive (Surmountable)
- Antagonist competes with agonist at same binding site
- Increasing agonist concentration overcomes block
- **Dose-response curve**: Shifts RIGHT, Emax unchanged
- Example: Atropine vs ACh, Naloxone vs morphine

### Non-competitive (Insurmountable)
- Antagonist binds at different site or irreversibly
- Increasing agonist CANNOT overcome block
- **Dose-response curve**: Emax REDUCED, no shift
- Example: Phenoxybenzamine (irreversible alpha block), diazepam at GABA receptor

### Other Types
| Type | Mechanism | Example |
|------|-----------|---------|
| **Physiological** | Opposite effects via different receptors | Histamine (vasodilation) vs adrenaline (vasoconstriction) |
| **Chemical** | Direct chemical inactivation | Protamine neutralizes heparin |
| **Pharmacokinetic** | Alters ADME of other drug | Phenobarbitone induces warfarin metabolism |

## Receptor Regulation
- **Desensitization/Tachyphylaxis**: Rapid decrease in response (receptor phosphorylation, internalization)
  - Example: Repeated use of nasal decongestant (oxymetazoline)
- **Down-regulation**: Chronic agonist exposure reduces receptor number
  - Example: Chronic beta-agonist use in asthma
- **Up-regulation**: Chronic antagonist use increases receptor number
  - Example: Sudden withdrawal of beta-blocker -> rebound hypertension/tachycardia
- **Supersensitivity**: Denervation increases receptor sensitivity

## Spare Receptors
Not all receptors need to be occupied for maximum response. Emax achieved at <100% receptor occupancy. Explains high potency of some agonists.`,
        mnemonics: [
          {
            text: "Gs = Stimulates cAMP; Gi = Inhibits cAMP; Gq = Quite different (IP3/DAG)",
            explanation:
              "Gs activates adenylyl cyclase (cAMP up), Gi inhibits it (cAMP down), Gq activates phospholipase C (produces IP3 and DAG).",
          },
          {
            text: "HAM-1 for Gq receptors: H1, Alpha-1, M1/M3",
            explanation:
              "H1 (histamine), Alpha-1 (adrenergic), M1 and M3 (muscarinic) - all signal through Gq-PLC-IP3/DAG pathway.",
          },
        ],
        keyPoints: [
          "Gs -> cAMP increase (beta receptors); Gi -> cAMP decrease (alpha-2, M2); Gq -> IP3/DAG (alpha-1, M1, M3, H1)",
          "Competitive antagonism: rightward shift, same Emax",
          "Non-competitive: reduced Emax, no shift",
          "Down-regulation from chronic agonist use; Up-regulation from chronic antagonist use",
          "Spare receptors: max response at <100% occupancy",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 3-4", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 3", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "pharmacodynamics-clinical",
        title: "Pharmacodynamics - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical scenarios demonstrating pharmacodynamic principles: drug combinations, receptor up/down-regulation, tachyphylaxis, and therapeutic applications.",
        contentMd: `# Clinical Applications

## Beta-Blocker Withdrawal Syndrome
- Chronic beta-blocker use causes **up-regulation** of beta-receptors
- Sudden withdrawal -> rebound tachycardia, hypertension, angina exacerbation
- **Always taper** beta-blockers over 1-2 weeks

## Tachyphylaxis Examples
| Drug | Mechanism | Clinical Issue |
|------|-----------|---------------|
| Ephedrine | Depletion of NE stores | Repeated doses less effective |
| Oxymetazoline (nasal spray) | Receptor desensitization | Rebound congestion (rhinitis medicamentosa) |
| Nitrates (GTN) | Sulfhydryl group depletion | Tolerance - need nitrate-free interval |
| Nicotine | Receptor desensitization | Need increasing doses |

## Partial Agonist Clinical Uses
| Drug | Receptor | Clinical Use |
|------|----------|-------------|
| Buprenorphine | Mu-opioid partial agonist | Opioid dependence (ceiling on respiratory depression) |
| Aripiprazole | D2 partial agonist | Schizophrenia (less EPS than typical antipsychotics) |
| Pindolol | Beta partial agonist (ISA) | Hypertension in patients with bradycardia |
| Tamoxifen | Estrogen partial agonist | Breast cancer (antagonist in breast, agonist in bone) |

> **Clinical Pearl**: Tamoxifen is an estrogen partial agonist - it blocks estrogen in breast tissue (treating ER+ breast cancer) but acts as agonist in bone (preventing osteoporosis) and endometrium (risk of endometrial cancer).

## Drug Combinations Using PD Principles
| Combination | Principle | Clinical Use |
|-------------|-----------|-------------|
| Levodopa + Carbidopa | Enzyme inhibition (peripheral) | Parkinson's disease |
| Amoxicillin + Clavulanate | Beta-lactamase inhibition | Resistant infections |
| Trimethoprim + Sulfamethoxazole | Sequential blockade | UTI, PCP prophylaxis |
| Adrenaline + Lidocaine | Vasoconstriction prolongs local effect | Local anesthesia |

## Indian Clinical Context
- Generic prescribing mandated by MCI/NMC guidelines
- National List of Essential Medicines (NLEM) updated periodically
- DPCO (Drug Price Control Order) regulates pricing of essential drugs
- Fixed-dose combinations (FDCs) widely used: e.g., ATT FDCs under RNTCP/NTEP`,
        mnemonics: [
          {
            text: "TONE for tachyphylaxis examples",
            explanation:
              "Tolerance to GTN (nitrate-free interval), Oxymetazoline (rebound congestion), Nicotine (escalating doses), Ephedrine (NE depletion).",
          },
        ],
        keyPoints: [
          "Never stop beta-blockers abruptly - taper over 1-2 weeks (up-regulation rebound)",
          "Nitrate tolerance managed by nitrate-free interval (8-12 hours overnight)",
          "Tamoxifen: antagonist in breast, partial agonist in bone and endometrium",
          "Buprenorphine: partial mu agonist - ceiling on respiratory depression",
          "Indian context: NLEM, DPCO price control, FDCs for TB under NTEP",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 3-4", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "pharmacodynamics-exam",
        title: "Pharmacodynamics - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield pharmacodynamics points for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Fastest receptor type: **Ligand-gated ion channel** (milliseconds)
- Slowest receptor type: **Nuclear/intracellular** (hours-days)
- Gs-coupled receptors: **Beta-1, Beta-2, D1, H2**
- Gq-coupled receptors: **Alpha-1, M1, M3, H1, AT1**
- Competitive antagonism on DRC: **Right shift, same Emax**
- Non-competitive antagonism: **Reduced Emax**
- Irreversible alpha-blocker: **Phenoxybenzamine**
- Physiological antagonism example: **Adrenaline vs histamine**
- Chemical antagonism example: **Protamine vs heparin**
- Drug showing tachyphylaxis by NE depletion: **Ephedrine**
- Partial agonist at mu-opioid receptor: **Buprenorphine**
- Partial agonist at D2 receptor: **Aripiprazole**
- Therapeutic index formula: **TD50/ED50**
- Drug with very narrow TI: **Digoxin, lithium, warfarin, phenytoin**

## Dose-Response Curve Shifts
| Scenario | Emax | EC50 (potency) | Curve |
|----------|------|-----------------|-------|
| Competitive antagonist | Same | Increased (right) | Right shift |
| Non-competitive antagonist | Reduced | Same | Depressed |
| Partial agonist alone | Lower than full agonist | Variable | Lower plateau |
| Partial agonist + full agonist | Reduced (acts as antagonist) | - | Antagonism |`,
        mnemonics: [
          {
            text: "Narrow TI = DLWP: Digoxin, Lithium, Warfarin, Phenytoin",
            explanation:
              "These 4 drugs have the narrowest therapeutic indices and are most commonly asked in exams regarding TDM.",
          },
        ],
        keyPoints: [
          "Ion channel receptors = fastest (ms); Nuclear = slowest (hours-days)",
          "Competitive = right shift, same Emax; Non-competitive = reduced Emax",
          "Narrow TI drugs: DLWP (Digoxin, Lithium, Warfarin, Phenytoin)",
          "Phenoxybenzamine = irreversible alpha-blocker",
          "Partial agonist + full agonist = net antagonism",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 3", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "pharmacodynamics-recall",
        title: "Pharmacodynamics - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for pharmacodynamics self-testing.",
        contentMd: `# Active Recall

**Q1:** Name the 4 types of receptors from fastest to slowest.
> Ligand-gated ion channel (ms) > GPCR (s-min) > Enzyme-linked (min-hr) > Nuclear (hr-days)

**Q2:** What is the difference between potency and efficacy?
> Potency = dose needed for effect (EC50, x-axis); Efficacy = maximum effect achievable (Emax, y-axis)

**Q3:** What happens to DRC with competitive antagonist?
> Right shift, Emax unchanged (surmountable)

**Q4:** Which G-protein increases cAMP?
> Gs (stimulatory) - activates adenylyl cyclase

**Q5:** Give an example of chemical antagonism.
> Protamine sulfate neutralizes heparin

**Q6:** Why should beta-blockers not be stopped suddenly?
> Chronic use causes receptor up-regulation. Sudden withdrawal leads to rebound tachycardia and hypertension.

**Q7:** What is a partial agonist? Give 2 examples.
> Produces sub-maximal response even at full receptor occupancy. Examples: buprenorphine (mu-opioid), aripiprazole (D2).

**Q8:** Therapeutic Index formula?
> TI = TD50 / ED50. Higher TI = safer drug.`,
        mnemonics: [],
        keyPoints: ["8 recall questions on receptor types, antagonism, G-proteins, and clinical applications"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 3", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 4: Adverse Drug Reactions ────────────────────────
  {
    topicCode: "PH-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "adverse-drug-reactions-foundation",
        title: "Adverse Drug Reactions - Foundation",
        estimatedMinutes: 20,
        summary:
          "ADRs are unwanted effects of drugs at therapeutic doses. Classified as Type A (augmented, dose-dependent) and Type B (bizarre, idiosyncratic). Pharmacovigilance and drug interactions are key concepts.",
        contentMd: `# Adverse Drug Reactions (ADRs)

## Definition
An ADR is any noxious, unintended, and undesired effect that occurs at doses used for prophylaxis, diagnosis, or treatment (WHO definition).

## Rawlins-Thompson Classification

### Type A - Augmented (80% of ADRs)
- **Dose-dependent**, predictable, related to drug's pharmacological action
- High morbidity, low mortality
- Example: Hypoglycemia with insulin, bleeding with warfarin, sedation with antihistamines

### Type B - Bizarre (Idiosyncratic)
- **Dose-independent**, unpredictable, NOT related to pharmacological action
- Low morbidity, HIGH mortality
- Often immunological or genetic basis
- Example: Anaphylaxis with penicillin, malignant hyperthermia with halothane, aplastic anemia with chloramphenicol

### Extended Classification
| Type | Name | Feature | Example |
|------|------|---------|---------|
| C | Chronic | Dose + time dependent | Cushing's with chronic steroids |
| D | Delayed | Appears after years | Carcinogenesis (cyclophosphamide), teratogenesis (thalidomide) |
| E | End of use | Withdrawal reactions | Rebound hypertension (clonidine), seizures (benzodiazepine withdrawal) |
| F | Failure | Unexpected therapeutic failure | OCP failure with rifampicin |

## Drug Interactions
### Types
1. **Pharmaceutical**: Physical/chemical incompatibility (e.g., mixing drugs in same IV line)
2. **Pharmacokinetic**: Altered ADME (enzyme induction/inhibition, protein binding displacement)
3. **Pharmacodynamic**: Synergism or antagonism at effector site

## Pharmacovigilance
- Post-marketing surveillance of drug safety
- **ADR reporting**: Via IPC (Indian Pharmacopoeia Commission) - PvPI (Pharmacovigilance Programme of India)
- Yellow card system (UK), MedWatch (US FDA), VigiBase (WHO-Uppsala)`,
        mnemonics: [
          {
            text: "Type A = Augmented = dose-dependent; Type B = Bizarre = unpredictable",
            explanation:
              "Type A reactions are extensions of pharmacological action (predictable, common). Type B are idiosyncratic (rare but dangerous, often immune-mediated).",
          },
          {
            text: "ABCDEF for ADR types",
            explanation:
              "Augmented, Bizarre, Chronic, Delayed, End-of-use, Failure - the extended Rawlins-Thompson classification.",
          },
        ],
        keyPoints: [
          "Type A (80%): dose-dependent, predictable, high morbidity, low mortality",
          "Type B: dose-independent, idiosyncratic, low incidence, high mortality",
          "Drug interactions: pharmaceutical, pharmacokinetic, pharmacodynamic",
          "PvPI: India's pharmacovigilance program under IPC",
          "Type D: delayed ADRs (teratogenesis, carcinogenesis)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 5 - Adverse Drug Effects", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 4 - Drug Toxicity", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "adverse-drug-reactions-mechanism",
        title: "Adverse Drug Reactions - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Mechanisms of ADRs: drug hypersensitivity (Gell-Coombs classification), organ-specific toxicity, teratogenicity, and drug-drug interaction mechanisms in detail.",
        contentMd: `# ADR Mechanisms

## Drug Hypersensitivity (Gell & Coombs Classification)

| Type | Name | Mechanism | Timing | Example |
|------|------|-----------|--------|---------|
| I | Anaphylactic | IgE-mediated, mast cell degranulation | Minutes | Penicillin anaphylaxis, aspirin-induced asthma |
| II | Cytotoxic | IgG/IgM against cell-surface antigens | Hours | Methyldopa hemolytic anemia, heparin-induced thrombocytopenia |
| III | Immune complex | Ag-Ab complexes deposit in tissues | Days-weeks | Serum sickness (penicillin), SLE-like (hydralazine, procainamide) |
| IV | Delayed | T-cell mediated | 48-72 hours | Contact dermatitis (neomycin), Stevens-Johnson syndrome |

## Organ-Specific Drug Toxicity

| Organ | Drug | Toxicity |
|-------|------|----------|
| **Liver** | Paracetamol (overdose) | Centrilobular necrosis (NAPQI accumulation) |
| **Liver** | Isoniazid | Hepatitis (acetylhydrazine) |
| **Kidney** | Aminoglycosides | Proximal tubular necrosis |
| **Kidney** | Amphotericin B | Distal tubular damage, hypokalemia |
| **Ear** | Aminoglycosides | Ototoxicity (vestibular + cochlear) |
| **Lung** | Bleomycin, amiodarone | Pulmonary fibrosis |
| **Heart** | Doxorubicin | Cardiomyopathy (dose-dependent) |
| **Bone marrow** | Chloramphenicol | Aplastic anemia (idiosyncratic) |
| **Eye** | Chloroquine | Retinopathy (bull's eye maculopathy) |
| **Tendon** | Fluoroquinolones | Tendon rupture (Achilles) |

## Teratogenicity

### FDA Pregnancy Categories (Historical)
| Category | Risk | Examples |
|----------|------|---------|
| X | Contraindicated | Thalidomide, isotretinoin, methotrexate, warfarin, statins |
| D | Evidence of risk | Phenytoin, valproate, lithium, tetracycline |
| C | Risk cannot be ruled out | Most drugs |
| B | No risk in animal studies | Paracetamol, penicillins |
| A | Safe | Folic acid, levothyroxine |

> **Clinical Pearl**: Thalidomide was the drug that led to modern drug safety regulations. It caused phocomelia (limb defects) when used as an antiemetic in pregnancy in the 1960s.

## Drug-Induced SLE
Drugs: Hydralazine, Procainamide, Isoniazid, Minocycline, Phenytoin
- Anti-histone antibodies (not anti-dsDNA)
- Resolves on stopping the drug`,
        mnemonics: [
          {
            text: "HIPMP for Drug-Induced SLE",
            explanation:
              "Hydralazine, Isoniazid, Procainamide, Minocycline, Phenytoin - common drugs causing drug-induced lupus with anti-histone antibodies.",
          },
          {
            text: "Type I = Immediate (IgE); Type IV = Delayed (T-cell)",
            explanation:
              "Gell-Coombs: Type I is fastest (anaphylaxis in minutes); Type IV is slowest (contact dermatitis in 48-72 hours). Types II and III fall in between.",
          },
        ],
        keyPoints: [
          "Type I hypersensitivity: IgE-mediated anaphylaxis (penicillin)",
          "Type IV: T-cell mediated delayed hypersensitivity (SJS, contact dermatitis)",
          "Paracetamol overdose: NAPQI -> centrilobular necrosis; antidote = NAC",
          "Category X drugs: thalidomide, isotretinoin, methotrexate, warfarin, statins",
          "Drug-induced SLE: anti-histone antibodies (HIPMP drugs)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 5", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 4", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "adverse-drug-reactions-clinical",
        title: "Adverse Drug Reactions - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical management of ADRs: paracetamol overdose, drug-induced liver injury, Stevens-Johnson syndrome, and ADR reporting in India.",
        contentMd: `# Clinical Applications

## Paracetamol Overdose Management
- Toxic dose: >150 mg/kg or >7.5 g in adults
- Mechanism: CYP2E1 produces NAPQI -> glutathione depletion -> hepatic necrosis
- **Antidote**: N-acetylcysteine (NAC) - replenishes glutathione
- Rumack-Matthew nomogram to assess risk
- King's College criteria for liver transplant

> **Clinical Pearl (Indian context)**: Paracetamol poisoning is one of the most common drug overdoses in India. NAC is available as IV (20-hour protocol) and oral (72-hour protocol). IV NAC is preferred.

## Stevens-Johnson Syndrome / Toxic Epidermal Necrolysis
- Severe Type IV hypersensitivity reaction
- SJS: <10% BSA detachment; TEN: >30% BSA
- Common causes: Allopurinol, Carbamazepine, Phenytoin, Sulfonamides, Lamotrigine, Nevirapine
- Management: Stop offending drug, ICU care, IV immunoglobulin (controversial)

## Important Drug Antidotes
| Drug/Poison | Antidote |
|-------------|----------|
| Paracetamol | N-acetylcysteine (NAC) |
| Opioids (morphine) | Naloxone |
| Benzodiazepines | Flumazenil |
| Warfarin | Vitamin K, FFP, PCC |
| Heparin | Protamine sulfate |
| Organophosphates | Atropine + Pralidoxime |
| Iron | Desferrioxamine |
| Digoxin | Digoxin-specific Fab antibodies |
| Methanol/ethylene glycol | Fomepizole or ethanol |
| Beta-blocker OD | Glucagon |
| Methotrexate | Leucovorin (folinic acid) |
| Lead | EDTA, succimer (DMSA) |

## ADR Reporting in India (PvPI)
- Under Indian Pharmacopoeia Commission (IPC), Ghaziabad
- Healthcare professionals report via: Vigiflow app, toll-free helpline, email
- Suspected ADRs to any drug, vaccine, herbal/traditional medicine
- CDSCO (Central Drugs Standard Control Organisation) is the regulatory body`,
        mnemonics: [
          {
            text: "SJS culprits: CAPS-LN",
            explanation:
              "Carbamazepine, Allopurinol, Phenytoin, Sulfonamides, Lamotrigine, Nevirapine - most common drugs causing Stevens-Johnson Syndrome.",
          },
        ],
        keyPoints: [
          "Paracetamol overdose antidote: NAC (replenishes glutathione)",
          "SJS/TEN: stop offending drug immediately, ICU care",
          "Naloxone for opioid OD, Flumazenil for benzo OD",
          "Protamine for heparin, Vitamin K for warfarin",
          "PvPI under IPC - ADR reporting mandatory for healthcare professionals in India",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 5, Ch 65 (Poisoning)", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "adverse-drug-reactions-exam",
        title: "Adverse Drug Reactions - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield ADR facts for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Type A ADR: **Dose-dependent**, predictable
- Type B ADR: **Dose-independent**, idiosyncratic
- Paracetamol toxic metabolite: **NAPQI**
- Paracetamol antidote: **N-acetylcysteine (NAC)**
- Drug-induced SLE: **Hydralazine, procainamide** (anti-histone Ab)
- Drug-induced lupus antibody: **Anti-histone** (NOT anti-dsDNA)
- Grey baby syndrome: **Chloramphenicol** (glucuronidation deficiency in neonates)
- Red man syndrome: **Vancomycin** (histamine release, not true allergy)
- Fetal warfarin syndrome: **Nasal hypoplasia, stippled epiphyses**
- Drug causing phocomelia: **Thalidomide**
- Retinopathy (bull's eye): **Chloroquine/Hydroxychloroquine**
- Pulmonary fibrosis drugs: **Bleomycin, Amiodarone, Busulfan, Methotrexate, Nitrofurantoin**
- Ototoxic drugs: **Aminoglycosides, loop diuretics, cisplatin, quinine**

## Must-Know Antidote Pairs
| Poison | Antidote |
|--------|----------|
| Organophosphate | Atropine + Pralidoxime (PAM) |
| Morphine OD | Naloxone |
| Paracetamol OD | NAC |
| Warfarin OD | Vitamin K / FFP |
| Heparin OD | Protamine sulfate |
| Digoxin toxicity | Digibind (Fab fragments) |
| Iron poisoning | Desferrioxamine |
| Copper (Wilson's) | D-penicillamine |`,
        mnemonics: [
          {
            text: "BAMNP for pulmonary fibrosis drugs",
            explanation:
              "Bleomycin, Amiodarone, Methotrexate, Nitrofurantoin, Busulfan (Paraquat also causes it, but not a drug).",
          },
        ],
        keyPoints: [
          "Type A = dose-dependent (80%); Type B = idiosyncratic (high mortality)",
          "NAPQI = toxic metabolite of paracetamol; NAC = antidote",
          "Drug-induced SLE: anti-histone Ab (not anti-dsDNA)",
          "Grey baby syndrome: chloramphenicol in neonates",
          "Must know: antidote pairs for common poisonings",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 5, 65", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "adverse-drug-reactions-recall",
        title: "Adverse Drug Reactions - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on ADRs.",
        contentMd: `# Active Recall

**Q1:** Classify Type A vs Type B ADRs.
> Type A: dose-dependent, predictable, common, low mortality. Type B: dose-independent, idiosyncratic, rare, high mortality.

**Q2:** What is NAPQI and how does NAC work?
> NAPQI is the toxic metabolite of paracetamol formed by CYP2E1. NAC provides cysteine to replenish glutathione, which detoxifies NAPQI.

**Q3:** Name 3 drugs causing drug-induced SLE. What antibody is positive?
> Hydralazine, Procainamide, Isoniazid. Anti-histone antibodies (NOT anti-dsDNA).

**Q4:** What is the antidote for heparin?
> Protamine sulfate (1 mg neutralizes ~100 units of heparin)

**Q5:** Which drugs cause pulmonary fibrosis?
> Bleomycin, Amiodarone, Methotrexate, Nitrofurantoin, Busulfan

**Q6:** What is Grey baby syndrome?
> Chloramphenicol toxicity in neonates due to immature hepatic glucuronidation. Presents with grey discoloration, vomiting, circulatory collapse.

**Q7:** Name the Gell-Coombs types I and IV with examples.
> Type I: IgE-mediated anaphylaxis (penicillin). Type IV: T-cell mediated delayed (SJS, contact dermatitis).

**Q8:** What is the antidote for organophosphate poisoning?
> Atropine (blocks muscarinic effects) + Pralidoxime/PAM (reactivates AChE if given within 6 hours).`,
        mnemonics: [],
        keyPoints: ["8 recall questions on ADR classification, antidotes, and organ toxicity"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 5", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 5: Drug Development & Regulations ────────────────
  {
    topicCode: "PH-MOD-01-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "drug-development-regulations-foundation",
        title: "Drug Development & Regulations - Foundation",
        estimatedMinutes: 20,
        summary:
          "Drug development progresses from discovery through preclinical testing, 4 phases of clinical trials, to post-marketing surveillance. Indian drug regulation is under CDSCO and Drugs & Cosmetics Act.",
        contentMd: `# Drug Development & Regulations

## Drug Discovery Pipeline
1. **Target identification** -> Lead compound discovery
2. **Preclinical studies**: In vitro + animal studies (toxicity, pharmacokinetics)
3. **IND application** (Investigational New Drug)
4. **Clinical trials** (Phases I-III)
5. **NDA/Marketing approval** (New Drug Application)
6. **Post-marketing surveillance** (Phase IV)

## Clinical Trial Phases

| Phase | Subjects | Size | Purpose | Duration |
|-------|----------|------|---------|----------|
| **Phase I** | Healthy volunteers | 20-100 | Safety, pharmacokinetics, dose-finding | Months |
| **Phase II** | Patients with disease | 100-500 | Efficacy, dose-response, ADRs | 1-2 years |
| **Phase III** | Large patient groups | 1000-5000 | Confirm efficacy, compare with standard | 2-4 years |
| **Phase IV** | General population | Post-marketing | Rare ADRs, long-term effects | Ongoing |

> **Key Point**: Phase III is the pivotal trial for drug approval. Usually randomized, double-blind, placebo/active-controlled.

## Essential Drug Concept
- **WHO Essential Medicines List**: Drugs that satisfy priority healthcare needs
- **NLEM (National List of Essential Medicines)**: Indian list updated by MoHFW
- Drugs on NLEM under price control via **DPCO (Drug Price Control Order)**
- **NPPA (National Pharmaceutical Pricing Authority)** enforces price ceilings

## Indian Drug Regulatory Framework
- **CDSCO**: Central Drugs Standard Control Organisation (Indian FDA equivalent)
- **DCGI**: Drugs Controller General of India (head of CDSCO)
- **Drugs & Cosmetics Act, 1940**: Primary legislation
- **Schedule H**: Prescription-only drugs
- **Schedule H1**: Drugs requiring records (antibiotics, anti-TB)
- **Schedule X**: Narcotics and psychotropics
- **Schedule G**: Drugs requiring caution label`,
        mnemonics: [
          {
            text: "Phase 1-2-3-4: Safety-Efficacy-Confirm-Surveillance",
            explanation:
              "Phase I: Is it safe? Phase II: Does it work? Phase III: Confirm it works (large RCT). Phase IV: Post-marketing - rare ADRs.",
          },
          {
            text: "H-H1-X for Indian drug schedules",
            explanation:
              "Schedule H: prescription-only. H1: prescription with record (antibiotics). X: narcotics/psychotropics (strictest control).",
          },
        ],
        keyPoints: [
          "Phase I: safety in healthy volunteers; Phase III: pivotal efficacy trial",
          "NLEM drugs under price control by DPCO/NPPA",
          "CDSCO headed by DCGI regulates drug approval in India",
          "Schedule H1: antibiotics and anti-TB drugs require record-keeping",
          "Essential medicines concept: priority healthcare needs at affordable cost",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 6 - New Drug Development", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 1", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "drug-development-regulations-mechanism",
        title: "Drug Development & Regulations - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed clinical trial methodology: RCTs, blinding, endpoints, bioethics, and Indian regulatory pathway for new drug approval.",
        contentMd: `# Detailed Mechanisms

## Clinical Trial Design

### Randomized Controlled Trial (RCT)
- **Gold standard** for establishing drug efficacy
- Random allocation to treatment vs control group
- Controls: placebo, active comparator, or historical

### Blinding
| Type | Description |
|------|-------------|
| Single-blind | Patient does not know assignment |
| Double-blind | Neither patient nor investigator knows |
| Triple-blind | Patient, investigator, and analyst blinded |
| Open-label | Everyone knows (used when blinding impractical) |

### Study Endpoints
- **Primary**: Main outcome measure (e.g., mortality, HbA1c reduction)
- **Secondary**: Additional outcomes
- **Surrogate**: Lab marker used as proxy (e.g., BP reduction instead of stroke prevention)
- **Composite**: Combination of events (e.g., MACE = MI + stroke + CV death)

### Statistical Concepts
- **p-value**: <0.05 considered statistically significant
- **NNT**: Number needed to treat = 1/ARR (absolute risk reduction)
- **NNH**: Number needed to harm
- **Intention-to-treat (ITT)**: Analyze all patients as randomized (prevents bias)
- **Per-protocol**: Analyze only those who completed study

## Ethics in Clinical Trials
- **Declaration of Helsinki**: Ethical principles for human research
- **ICH-GCP**: International guidelines for trial conduct
- **Informed consent**: Mandatory, in patient's language
- **IEC/IRB**: Institutional Ethics Committee must approve
- **ICMR Guidelines**: Indian Council of Medical Research guidelines for biomedical research

## Orphan Drugs
- Drugs for rare diseases (<5 in 10,000 population)
- Incentives: tax credits, extended patent, fee waivers
- India: Rare Disease Policy 2021 provides some support

## Biosimilars
- Not identical to biologics (unlike generics which are identical to small molecules)
- Require abbreviated clinical trials (not just bioequivalence)
- India is a major biosimilar producer (Biocon, Dr. Reddy's)`,
        mnemonics: [
          {
            text: "RCT-DB is GOLD: Randomized Controlled Trial, Double-Blind",
            explanation:
              "Double-blind RCT is the gold standard for establishing drug efficacy. It minimizes both selection bias and observer bias.",
          },
        ],
        keyPoints: [
          "Double-blind RCT = gold standard for drug efficacy",
          "ITT analysis: all patients analyzed as randomized (reduces bias)",
          "NNT = 1/ARR - lower is better",
          "Declaration of Helsinki: ethical basis for clinical trials",
          "Biosimilars need abbreviated clinical trials, not just bioequivalence",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 6-7", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "drug-development-regulations-clinical",
        title: "Drug Development & Regulations - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Practical aspects: prescription writing, drug information sources, rational drug use, and Indian pharmaceutical industry context.",
        contentMd: `# Clinical Applications

## Rational Prescription Writing
A complete prescription must include:
1. **Prescriber details**: Name, qualification, registration number
2. **Date**
3. **Patient details**: Name, age, sex, address
4. **Superscription**: Rx (Latin: Recipe = "Take thou")
5. **Inscription**: Drug name (generic preferred), dose, form
6. **Subscription**: Quantity, number of doses
7. **Signature (Signa)**: Directions for use
8. **Prescriber's signature**

> **Indian Context**: MCI/NMC mandates generic prescribing. Under Schedule H1, pharmacist must maintain records of dispensed antibiotics and anti-TB drugs.

## P-Drug Concept (WHO)
- Personal drug: First-choice drug for a specific condition
- Selected based on: efficacy, safety, suitability, cost
- Students should develop their own P-drug list during training

## Drug Information Sources
| Source | Type |
|--------|------|
| CIMS (Current Index of Medical Specialities) | Indian drug compendium |
| IDR (Indian Drug Review) | Indian formulary |
| BNF (British National Formulary) | Drug reference |
| NF (National Formulary of India) | Official Indian formulary |
| Micromedex, UpToDate | Evidence-based databases |
| Cochrane Reviews | Systematic reviews (gold standard for evidence) |

## Jan Aushadhi & PMBJP
- Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)
- Government stores selling quality generic medicines at 50-90% discount
- Over 9000 Jan Aushadhi Kendras across India
- All drugs manufactured in WHO-GMP certified plants

## Fixed-Dose Combinations (FDCs) in India
- Widely used: e.g., ATT (HRZE), ORS, Co-amoxiclav
- Many irrational FDCs banned by CDSCO
- Rational FDC criteria: synergistic action, improved compliance, reduced ADRs`,
        mnemonics: [
          {
            text: "Rx = Recipe (Latin: Take Thou)",
            explanation:
              "The symbol Rx at the top of a prescription comes from the Latin word 'Recipe' meaning 'Take thou' - an instruction to the pharmacist.",
          },
        ],
        keyPoints: [
          "Generic prescribing mandatory per NMC guidelines",
          "P-drug concept: personal choice drug based on efficacy, safety, cost",
          "Jan Aushadhi: government generic medicine stores at 50-90% discount",
          "Schedule H1 drugs need pharmacist record-keeping",
          "Cochrane Reviews: highest level of evidence for drug efficacy",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 6-7, Appendix", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "drug-development-regulations-exam",
        title: "Drug Development & Regulations - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield drug development and regulation facts for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Phase I trial subjects: **Healthy volunteers**
- Phase that determines drug efficacy for approval: **Phase III**
- Post-marketing surveillance: **Phase IV**
- Gold standard study design: **Double-blind RCT**
- NNT formula: **1/ARR (Absolute Risk Reduction)**
- Indian drug regulatory body: **CDSCO (under DCGI)**
- Primary drug legislation in India: **Drugs & Cosmetics Act, 1940**
- Schedule H1 drugs: **Antibiotics, anti-TB, narcotics-like** (need records)
- Schedule X: **Narcotics and psychotropics**
- Drug price control body: **NPPA under DPCO**
- Generic medicine stores: **Jan Aushadhi / PMBJP**
- Orphan drug: For diseases affecting **<5 per 10,000**
- Declaration governing clinical trial ethics: **Helsinki**
- Ethical committee: **IEC (Institutional Ethics Committee)**
- Indian biomedical research guidelines: **ICMR**

## Previous Year Themes
- Clinical trial phases and their characteristics
- Drug scheduling in India
- Essential medicines concept
- P-drug and rational prescribing
- Pharmacovigilance and ADR reporting`,
        mnemonics: [
          {
            text: "Phase 1 = Fun with healthy Friends; Phase 3 = Final and Factual",
            explanation:
              "Phase I uses healthy volunteers for safety testing. Phase III is the final large-scale trial that provides factual evidence for drug approval.",
          },
        ],
        keyPoints: [
          "Phase I: healthy volunteers, safety; Phase III: patients, efficacy confirmation",
          "CDSCO / DCGI: Indian drug regulator",
          "Schedule H1: antibiotics need records; Schedule X: narcotics",
          "NPPA enforces drug price control under DPCO",
          "Helsinki Declaration: ethical basis for human research",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 6-7", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "drug-development-regulations-recall",
        title: "Drug Development & Regulations - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on drug development and regulations.",
        contentMd: `# Active Recall

**Q1:** What are the 4 phases of clinical trials?
> Phase I: Safety (healthy volunteers). Phase II: Efficacy + dose (patients). Phase III: Confirm efficacy (large RCT). Phase IV: Post-marketing surveillance.

**Q2:** Gold standard study design for drug efficacy?
> Double-blind Randomized Controlled Trial (DB-RCT)

**Q3:** What is NNT?
> Number Needed to Treat = 1/ARR. The number of patients who need to be treated for one additional patient to benefit.

**Q4:** What is the Indian equivalent of the FDA?
> CDSCO (Central Drugs Standard Control Organisation), headed by DCGI.

**Q5:** What is Schedule H1?
> Indian drug schedule requiring prescription AND pharmacist record-keeping - includes antibiotics, anti-TB drugs. Aims to reduce antimicrobial resistance.

**Q6:** What is Jan Aushadhi Scheme?
> Government initiative (PMBJP) providing quality generic medicines at 50-90% lower cost through Jan Aushadhi Kendras.

**Q7:** What ethical declaration governs clinical trial conduct?
> Declaration of Helsinki (World Medical Association)

**Q8:** What is a P-drug?
> Personal drug - the first-choice drug selected by a physician for a specific condition based on efficacy, safety, suitability, and cost (WHO concept).`,
        mnemonics: [],
        keyPoints: ["8 recall questions on clinical trials, Indian drug regulation, and ethics"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 6-7", edition: "8th" },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODULE 2 — AUTONOMIC NERVOUS SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ─── Topic 1: Cholinergic Drugs ─────────────────────────────
  {
    topicCode: "PH-MOD-02-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "cholinergic-drugs-foundation",
        title: "Cholinergic Drugs - Foundation",
        estimatedMinutes: 20,
        summary:
          "Cholinergic drugs mimic acetylcholine (ACh) at muscarinic and nicotinic receptors. They include direct-acting cholinomimetics and indirect-acting anticholinesterases.",
        contentMd: `# Cholinergic Drugs

## The Cholinergic System
Acetylcholine (ACh) is the neurotransmitter at:
- **All preganglionic neurons** (sympathetic + parasympathetic)
- **All parasympathetic postganglionic neurons** (muscarinic)
- **Neuromuscular junction** (nicotinic Nm)
- **Sympathetic postganglionic** to sweat glands (muscarinic)

## Cholinergic Receptor Types

| Receptor | Location | G-protein | Effect |
|----------|----------|-----------|--------|
| **M1** | CNS, gastric parietal cells | Gq | Gastric acid secretion, cognition |
| **M2** | Heart (SA/AV node) | Gi | Decreases HR, conduction |
| **M3** | Smooth muscle, glands, endothelium | Gq | Contraction, secretion, NO release |
| **Nn** | Autonomic ganglia | Ion channel | Ganglionic transmission |
| **Nm** | Skeletal muscle NMJ | Ion channel | Muscle contraction |

## Classification of Cholinergic Drugs

### A. Direct-Acting (Cholinomimetics)

| Drug | Type | Clinical Use |
|------|------|-------------|
| **Pilocarpine** | Muscarinic agonist | Glaucoma (miosis), dry mouth (Sjogren's) |
| **Bethanechol** | Muscarinic agonist | Post-op urinary retention, paralytic ileus |
| **Carbachol** | Mixed (M + N) | Glaucoma (intraocular) |
| **Methacholine** | Muscarinic agonist | Bronchial provocation test |

### B. Indirect-Acting (Anticholinesterases - AChE Inhibitors)

| Drug | Type | Clinical Use |
|------|------|-------------|
| **Physostigmine** | Reversible | Glaucoma, atropine poisoning |
| **Neostigmine** | Reversible | Myasthenia gravis, reversal of NMB |
| **Pyridostigmine** | Reversible | Myasthenia gravis (longer acting) |
| **Edrophonium** | Ultra-short reversible | Tensilon test for MG diagnosis |
| **Donepezil** | Reversible (CNS) | Alzheimer's disease |
| **Organophosphates** | Irreversible | Insecticides (malathion, parathion) - POISONING |

## DUMBELLS Mnemonic for Muscarinic Effects
**D**iarrhea, **U**rination, **M**iosis, **B**radycardia, **E**mesis, **L**acrimation, **L**ethargy, **S**alivation/Sweating`,
        mnemonics: [
          {
            text: "DUMBELLS for cholinergic excess",
            explanation:
              "Diarrhea, Urination, Miosis, Bradycardia, Emesis, Lacrimation, Lethargy, Salivation/Sweating - signs of muscarinic overstimulation (OP poisoning).",
          },
          {
            text: "Pilocarpine PILOts the eye (miosis for glaucoma)",
            explanation:
              "Pilocarpine causes miosis (pupil constriction) by contracting the sphincter pupillae, opening the trabecular meshwork to increase aqueous outflow in glaucoma.",
          },
        ],
        keyPoints: [
          "ACh acts on muscarinic (M1-M3) and nicotinic (Nn, Nm) receptors",
          "M2 (heart, Gi): bradycardia; M3 (smooth muscle, Gq): contraction, secretion",
          "Pilocarpine: miosis for glaucoma; Bethanechol: urinary retention",
          "Neostigmine: myasthenia gravis and reversal of NMJ block",
          "DUMBELLS = cholinergic excess signs (OP poisoning)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 7 - Cholinergic System", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 9-10", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "cholinergic-drugs-mechanism",
        title: "Cholinergic Drugs - Mechanism",
        estimatedMinutes: 30,
        summary:
          "ACh synthesis, release, degradation. Mechanisms of AChE inhibitors (reversible vs irreversible). Organophosphate poisoning pathophysiology and aging of AChE.",
        contentMd: `# Cholinergic Drugs - Mechanisms

## ACh Lifecycle
1. **Synthesis**: Choline + Acetyl-CoA -> ACh (by choline acetyltransferase, ChAT)
2. **Storage**: In vesicles via VAChT (vesicular ACh transporter)
3. **Release**: Ca2+-dependent exocytosis
4. **Action**: Binds muscarinic (GPCR) or nicotinic (ion channel) receptors
5. **Degradation**: AChE (acetylcholinesterase) -> Choline + Acetate
6. **Choline re-uptake**: Back into nerve terminal

> Hemicholinium blocks choline uptake; Botulinum toxin blocks ACh release; Vesamicol blocks vesicular storage.

## AChE Inhibitor Mechanisms

### Reversible Inhibitors
- Bind to esteratic site of AChE, form carbamylated enzyme
- Spontaneously decarbamylated in 30 min - 6 hours
- **Neostigmine**: quaternary amine, does NOT cross BBB
- **Physostigmine**: tertiary amine, crosses BBB (used for atropine/central anticholinergic poisoning)
- **Donepezil, Rivastigmine, Galantamine**: cross BBB, used for Alzheimer's

### Irreversible Inhibitors (Organophosphates)
- Phosphorylate serine residue at esteratic site of AChE
- Initial binding reversible (can be reactivated by pralidoxime/2-PAM)
- **Aging**: After 24-48 hours, bond becomes irreversible (dealkylation)
- New AChE must be synthesized (takes weeks)

## Organophosphate Poisoning

### Mechanism
OP compounds -> irreversible AChE inhibition -> ACh accumulation at ALL cholinergic sites

### Effects by Site
| Site | Receptor | Effects |
|------|----------|---------|
| Muscarinic (DUMBELLS) | M1-M3 | Salivation, lacrimation, urination, diarrhea, miosis, bradycardia, bronchospasm |
| Nicotinic (NMJ) | Nm | Fasciculations -> paralysis |
| Nicotinic (Ganglia) | Nn | Tachycardia, hypertension (early) |
| CNS | Mixed | Anxiety, seizures, coma, respiratory center depression |

### Cause of Death: **Respiratory failure** (bronchospasm + secretions + respiratory muscle paralysis + central depression)

## Treatment of OP Poisoning
1. **Decontamination**: Remove clothes, wash skin, gastric lavage
2. **Atropine**: Blocks muscarinic effects (give until secretions dry up - may need massive doses)
3. **Pralidoxime (2-PAM)**: Reactivates AChE (must give within 24h before aging)
4. **Diazepam**: For seizures
5. **Supportive**: Intubation, ventilation as needed`,
        mnemonics: [
          {
            text: "Physostigmine crosses BBB (PHYSio = physical = can get through)",
            explanation:
              "Physostigmine is a tertiary amine that crosses the BBB - used for central anticholinergic poisoning. Neostigmine is quaternary - cannot cross BBB.",
          },
          {
            text: "PAM Before Aging Matters: Pralidoxime within 24 hours",
            explanation:
              "Pralidoxime (2-PAM) reactivates phosphorylated AChE only before aging occurs (24-48h). After aging, the bond is irreversible.",
          },
        ],
        keyPoints: [
          "AChE rapidly hydrolyzes ACh; inhibiting AChE increases ACh at all cholinergic sites",
          "Physostigmine crosses BBB (tertiary); Neostigmine does not (quaternary)",
          "OP poisoning: irreversible AChE inhibition -> DUMBELLS + fasciculations + CNS effects",
          "Death from OP poisoning: respiratory failure (triple mechanism)",
          "Treatment: Atropine (muscarinic block) + Pralidoxime (AChE reactivation within 24h) + Diazepam (seizures)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 7-8", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 10", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "cholinergic-drugs-clinical",
        title: "Cholinergic Drugs - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical use of cholinergic drugs in myasthenia gravis, glaucoma, Alzheimer's, OP poisoning management, and Indian clinical context.",
        contentMd: `# Clinical Applications

## Myasthenia Gravis
- Autoimmune destruction of nicotinic receptors at NMJ
- **Diagnosis**: Edrophonium (Tensilon) test - rapid improvement for 5 min
- **Treatment**: Neostigmine or Pyridostigmine (longer-acting, preferred)
- **Cholinergic crisis** vs **Myasthenic crisis**: Both cause weakness. Edrophonium test differentiates - improves myasthenic crisis, worsens cholinergic crisis.

> **Clinical Pearl**: Pyridostigmine is preferred over neostigmine for chronic MG management due to longer duration (4-6h vs 2-4h) and smoother action.

## Glaucoma
- **Pilocarpine** (direct M3 agonist): Constricts sphincter pupillae (miosis) -> opens trabecular meshwork -> increases aqueous outflow
- Used for acute angle-closure glaucoma (emergency)
- **Physostigmine**: Also used but less common now

## Alzheimer's Disease
- Central cholinergic deficit (nucleus basalis of Meynert degeneration)
- **Donepezil**: Most widely used, once daily, selective AChE inhibitor
- **Rivastigmine**: Inhibits both AChE and BuChE, available as patch
- **Galantamine**: Also modulates nicotinic receptors (dual mechanism)
- Memantine (NMDA antagonist) used in moderate-severe AD

## OP Poisoning in India
- Common in rural India (agricultural pesticides: malathion, parathion, monocrotophos)
- One of the leading causes of poisoning deaths in India
- **Atropinization endpoint**: Dry secretions, clear lungs, dilated pupils, HR > 80/min
- Pralidoxime: 1-2 g IV loading, then infusion
- Maintain atropine infusion - may be needed for days

## Nerve Agents
- Sarin, VX, Tabun - military OP compounds
- Same treatment as OP pesticide poisoning
- Auto-injectors containing atropine + pralidoxime used by military`,
        mnemonics: [
          {
            text: "MG treatment: Py-rid of weakness with Pyridostigmine",
            explanation:
              "Pyridostigmine is the preferred AChE inhibitor for chronic myasthenia gravis management - longer-acting and smoother than neostigmine.",
          },
        ],
        keyPoints: [
          "MG: Pyridostigmine for chronic management; Edrophonium for diagnosis",
          "Pilocarpine for acute angle-closure glaucoma (miosis opens trabecular meshwork)",
          "Donepezil: first-line AChE inhibitor for Alzheimer's",
          "OP poisoning common in rural India; atropinization + pralidoxime within 24h",
          "Cholinergic crisis vs Myasthenic crisis: Edrophonium test differentiates",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 7-8, Ch 65", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "cholinergic-drugs-exam",
        title: "Cholinergic Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield cholinergic pharmacology for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- DOC for myasthenia gravis: **Pyridostigmine**
- Test for MG diagnosis: **Edrophonium (Tensilon) test**
- AChE inhibitor crossing BBB: **Physostigmine** (tertiary amine)
- AChE inhibitor NOT crossing BBB: **Neostigmine** (quaternary)
- DOC for Alzheimer's: **Donepezil**
- Drug for post-op urinary retention: **Bethanechol**
- Drug for glaucoma (miotic): **Pilocarpine**
- OP poisoning antidote: **Atropine + Pralidoxime (2-PAM)**
- Pralidoxime must be given within: **24 hours** (before aging)
- Cause of death in OP poisoning: **Respiratory failure**
- Aging of AChE: **Irreversible dealkylation of OP-AChE complex**
- Edrophonium: **Ultra-short acting** (5 min) - diagnostic only
- Methacholine: Used for **bronchial provocation test**
- Botulinum toxin: Prevents **ACh vesicle release**

## Comparison: Neostigmine vs Physostigmine
| Feature | Neostigmine | Physostigmine |
|---------|-------------|---------------|
| Amine type | Quaternary | Tertiary |
| Crosses BBB | No | Yes |
| Main use | MG, reversal of NMB | Glaucoma, atropine OD |
| Oral bioavailability | Poor | Good |
| Duration | 2-4 hours | 1-2 hours |`,
        mnemonics: [
          {
            text: "Neo = New = Needs to stay out (does NOT cross BBB)",
            explanation:
              "Neostigmine is a quaternary amine (charged) so it cannot cross the blood-brain barrier. Physostigmine is tertiary and can cross.",
          },
        ],
        keyPoints: [
          "Pyridostigmine for MG; Edrophonium for diagnosis",
          "Physostigmine (tertiary) crosses BBB; Neostigmine (quaternary) does not",
          "OP poisoning: Atropine + PAM within 24h; death from respiratory failure",
          "Donepezil: first-line for Alzheimer's",
          "Bethanechol: urinary retention; Pilocarpine: glaucoma",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 7-8", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "cholinergic-drugs-recall",
        title: "Cholinergic Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on cholinergic pharmacology.",
        contentMd: `# Active Recall

**Q1:** Name the mnemonic for cholinergic excess symptoms.
> DUMBELLS: Diarrhea, Urination, Miosis, Bradycardia, Emesis, Lacrimation, Lethargy, Salivation/Sweating

**Q2:** Which AChE inhibitor crosses the BBB and which does not?
> Physostigmine (tertiary) crosses BBB. Neostigmine (quaternary) does NOT.

**Q3:** What is the treatment triad for OP poisoning?
> Atropine (blocks muscarinic effects) + Pralidoxime (reactivates AChE) + Diazepam (for seizures)

**Q4:** Why must pralidoxime be given within 24 hours?
> After 24-48 hours, the OP-AChE bond undergoes "aging" (dealkylation), becoming irreversible.

**Q5:** DOC for chronic myasthenia gravis?
> Pyridostigmine (longer acting than neostigmine, smoother action)

**Q6:** How does pilocarpine help in glaucoma?
> M3 agonist -> contracts sphincter pupillae (miosis) -> opens trabecular meshwork -> increases aqueous humor outflow -> reduces IOP.

**Q7:** What is the cause of death in OP poisoning?
> Respiratory failure from bronchospasm + excessive secretions + respiratory muscle paralysis + central respiratory depression.

**Q8:** Name 3 AChE inhibitors used in Alzheimer's disease.
> Donepezil, Rivastigmine, Galantamine`,
        mnemonics: [],
        keyPoints: ["8 recall questions on cholinergic drugs, OP poisoning, MG, and glaucoma"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 7-8", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 2: Anticholinergic Drugs ─────────────────────────
  {
    topicCode: "PH-MOD-02-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "anticholinergic-drugs-foundation",
        title: "Anticholinergic Drugs - Foundation",
        estimatedMinutes: 20,
        summary:
          "Anticholinergic drugs block muscarinic receptors. Atropine is the prototype. Effects include mydriasis, tachycardia, dry mouth, urinary retention, and reduced secretions.",
        contentMd: `# Anticholinergic (Antimuscarinic) Drugs

## Prototype: Atropine
Natural belladonna alkaloid from Atropa belladonna ("beautiful lady" - Italian women used it for dilated pupils).

## Classification

### Natural Alkaloids
- **Atropine**: Non-selective muscarinic blocker
- **Hyoscine (Scopolamine)**: More CNS effects (anti-motion sickness)

### Synthetic/Semisynthetic
| Drug | Selectivity | Clinical Use |
|------|------------|-------------|
| **Ipratropium** | M3 (inhaled) | COPD, acute asthma |
| **Tiotropium** | M3 (long-acting) | COPD maintenance |
| **Oxybutynin** | M3 (bladder) | Overactive bladder |
| **Tropicamide** | M3 (eye) | Mydriasis for fundoscopy (short-acting) |
| **Cyclopentolate** | M3 (eye) | Cycloplegia for refraction in children |
| **Homatropine** | M3 (eye) | Mydriasis (moderate duration) |
| **Glycopyrrolate** | Non-selective | Pre-anesthetic (reduces secretions) |
| **Pirenzepine** | M1 selective | Peptic ulcer (rarely used now) |

## Effects of Atropine (Dose-Dependent Order)
1. **Lowest dose**: Decreased salivation, sweating, bronchial secretions
2. **Moderate dose**: Mydriasis, cycloplegia, tachycardia
3. **Higher dose**: Urinary retention, constipation (decreased GI motility)
4. **Toxic dose**: Hyperthermia, delirium, hallucinations, coma

> **Remember**: "Hot as a hare, Blind as a bat, Dry as a bone, Red as a beet, Mad as a hatter" - atropine toxicity.`,
        mnemonics: [
          {
            text: "Hot as Hare, Blind as Bat, Dry as Bone, Red as Beet, Mad as Hatter",
            explanation:
              "Atropine toxicity: Hyperthermia (hot), Mydriasis/cycloplegia (blind), Anhydrosis + dry mouth (dry), Flushing (red), Delirium (mad).",
          },
          {
            text: "ATROPINE effects: tAchycardia, Temperature up, Reduced secretions, cOnstipation, Pupil dilation, Intraocular pressure up, No urination, Excitement/delirium",
            explanation:
              "Systematic listing of atropine's muscarinic blocking effects on each organ system.",
          },
        ],
        keyPoints: [
          "Atropine: non-selective muscarinic blocker; first effect = reduced secretions",
          "Toxicity: Hot, Blind, Dry, Red, Mad",
          "Ipratropium/Tiotropium: inhaled antimuscarinics for COPD",
          "Tropicamide: short-acting mydriatic for fundoscopy",
          "Glycopyrrolate: pre-anesthetic antisecretory (does not cross BBB)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 9 - Anticholinergic Drugs", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 9", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "anticholinergic-drugs-mechanism",
        title: "Anticholinergic Drugs - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed pharmacology of atropine: organ-wise effects, dose-response peculiarities, CVS effects (biphasic on HR), and comparison of antimuscarinic drugs.",
        contentMd: `# Mechanism Details

## Atropine: Organ-Wise Effects

### Eye
- **Mydriasis**: M3 block on sphincter pupillae -> passive dilation
- **Cycloplegia**: M3 block on ciliary muscle -> loss of accommodation
- **Increased IOP**: Dilated iris blocks drainage angle (dangerous in narrow-angle glaucoma)
- Duration: Mydriasis 7-10 days; Cycloplegia 5-7 days (very long!)

### Heart (Biphasic Effect)
- **Low dose**: Initial BRADYCARDIA (blocks presynaptic M1 autoreceptors on vagus -> increased ACh release)
- **Moderate dose**: TACHYCARDIA (blocks M2 on SA node -> removes vagal tone)
- This biphasic effect is frequently tested in exams

### Smooth Muscle
- Relaxes GI, urinary bladder, bronchial smooth muscle
- Reduces GI motility and secretions

### Glands
- Decreases all secretions: salivary, bronchial, sweat, gastric
- Sweat glands receive sympathetic cholinergic innervation (muscarinic)

### CNS
- Atropine: mild stimulation at therapeutic doses, delirium at toxic doses
- Hyoscine: CNS depression (sedation, anti-emetic, anti-motion sickness)

## Comparison of Mydriatics
| Drug | Mydriasis | Cycloplegia | Duration | Use |
|------|-----------|-------------|----------|-----|
| Atropine | +++ | +++ | 7-10 days | Refraction in children <5 yr |
| Homatropine | ++ | ++ | 1-3 days | Uveitis |
| Cyclopentolate | ++ | ++ | 1 day | Refraction in children 5-15 yr |
| Tropicamide | + | + | 4-6 hours | Fundoscopy (shortest) |
| Phenylephrine | ++ | 0 | 3-6 hours | Mydriasis only (alpha-1 agonist, not anticholinergic) |

## Atropine Pharmacokinetics
- Well absorbed orally, topically (eye drops), IM, IV
- Crosses BBB (tertiary amine)
- t1/2: ~4 hours
- Hepatic metabolism + renal excretion`,
        mnemonics: [
          {
            text: "Atropine low dose = BRADY (paradoxical); high dose = TACHY",
            explanation:
              "At low doses, atropine blocks presynaptic M1 autoreceptors causing increased ACh release -> initial bradycardia. At higher doses, it blocks postsynaptic M2 on SA node -> tachycardia.",
          },
        ],
        keyPoints: [
          "Atropine on heart: biphasic - low dose bradycardia, higher dose tachycardia",
          "Atropine mydriasis lasts 7-10 days (very prolonged!)",
          "Tropicamide: shortest-acting mydriatic (4-6h) - best for fundoscopy",
          "Hyoscine: CNS depressant (anti-motion sickness) vs Atropine: CNS stimulant",
          "Atropine contraindicated in narrow-angle glaucoma (raises IOP)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 9", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "anticholinergic-drugs-clinical",
        title: "Anticholinergic Drugs - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical uses of antimuscarinics: pre-anesthetic medication, COPD, overactive bladder, motion sickness, bradycardia, and poisoning management.",
        contentMd: `# Clinical Applications

## Pre-Anesthetic Medication
- **Glycopyrrolate** (preferred): Reduces secretions, does NOT cross BBB (no CNS effects)
- **Atropine**: Also used, but crosses BBB (may cause postoperative delirium in elderly)
- Given to prevent bradycardia from intubation/anesthetic agents

## COPD & Asthma
- **Ipratropium** (short-acting, 4-6h): Acute exacerbation (with salbutamol nebulization)
- **Tiotropium** (long-acting, 24h): COPD maintenance therapy
- Both are inhaled -> minimal systemic effects
- In COPD, anticholinergics are MORE effective than beta-2 agonists (vagal tone predominates)

## Overactive Bladder / Urge Incontinence
- **Oxybutynin**: M3 blocker, reduces detrusor contractions
- **Tolterodine**: Better tolerated (less dry mouth)
- **Solifenacin, Darifenacin**: Newer, more bladder-selective
- **Mirabegron**: Beta-3 agonist alternative (not anticholinergic)

## Motion Sickness
- **Hyoscine (Scopolamine)**: Most effective drug for motion sickness
- Available as transdermal patch (applied behind ear, 72h duration)
- Works on vestibular system and vomiting center

## Atropine in Bradycardia
- First-line for symptomatic sinus bradycardia (0.5-1 mg IV)
- Part of ACLS protocol
- Blocks vagal input to SA node

## Atropine Poisoning Management
- **Physostigmine** (crosses BBB): Antidote of choice
- NOT neostigmine (does not cross BBB, cannot reverse central effects)

> **Indian Context**: Dhatura (Datura stramonium) poisoning common in India - contains atropine-like alkaloids. Presents with classic anticholinergic toxidrome. Treatment: physostigmine + supportive care.`,
        mnemonics: [
          {
            text: "Glyco = Glycopyrrolate = GOOD pre-anesthetic (no BBB crossing)",
            explanation:
              "Glycopyrrolate is preferred over atropine for pre-anesthetic use because it is a quaternary amine that does not cross BBB, avoiding postoperative confusion.",
          },
        ],
        keyPoints: [
          "Glycopyrrolate preferred pre-anesthetic (no BBB crossing)",
          "Tiotropium: long-acting inhaled anticholinergic for COPD maintenance",
          "Hyoscine: most effective for motion sickness (transdermal patch)",
          "Atropine 0.5-1 mg IV: first-line for symptomatic bradycardia",
          "Physostigmine (not neostigmine): antidote for atropine/Dhatura poisoning",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 9, 16, 20", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "anticholinergic-drugs-exam",
        title: "Anticholinergic Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield anticholinergic pharmacology for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Atropine toxicity mnemonic: **Hot, Blind, Dry, Red, Mad**
- Antidote for atropine poisoning: **Physostigmine**
- Most effective drug for motion sickness: **Hyoscine (scopolamine)**
- Shortest-acting mydriatic: **Tropicamide** (4-6 hours)
- Longest-acting mydriatic: **Atropine** (7-10 days)
- Preferred pre-anesthetic antisecretory: **Glycopyrrolate**
- Long-acting inhaled anticholinergic for COPD: **Tiotropium**
- Anticholinergic for overactive bladder: **Oxybutynin / Tolterodine**
- Atropine contraindication: **Narrow-angle glaucoma**
- Biphasic CVS effect of atropine: **Low dose = bradycardia; high dose = tachycardia**
- Atropine in ACLS: **0.5-1 mg IV for symptomatic bradycardia**
- M1 selective blocker: **Pirenzepine**
- Dhatura poisoning mimics: **Atropine poisoning**

## Contraindications of Atropine
- Narrow-angle glaucoma
- BPH (urinary retention worsens)
- Paralytic ileus
- Myasthenia gravis (blocks already compromised NMJ)`,
        mnemonics: [
          {
            text: "TCHA for mydriatic duration: Tropicamide < Cyclopentolate < Homatropine < Atropine",
            explanation:
              "From shortest to longest acting mydriatic: Tropicamide (4-6h), Cyclopentolate (1 day), Homatropine (1-3 days), Atropine (7-10 days).",
          },
        ],
        keyPoints: [
          "Atropine: Hot Blind Dry Red Mad (toxicity)",
          "Physostigmine = antidote (crosses BBB)",
          "Tropicamide shortest; Atropine longest mydriatic",
          "Tiotropium for COPD maintenance",
          "Atropine contraindicated in narrow-angle glaucoma and BPH",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 9", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "anticholinergic-drugs-recall",
        title: "Anticholinergic Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on anticholinergic drugs.",
        contentMd: `# Active Recall

**Q1:** What is the classic mnemonic for atropine toxicity?
> Hot as a hare, Blind as a bat, Dry as a bone, Red as a beet, Mad as a hatter

**Q2:** Why does low-dose atropine cause bradycardia?
> It blocks presynaptic M1 autoreceptors on the vagus nerve, causing increased ACh release, which stimulates M2 on the SA node.

**Q3:** What is the antidote for atropine poisoning?
> Physostigmine (tertiary amine that crosses BBB to reverse both peripheral and central effects)

**Q4:** Best drug for motion sickness?
> Hyoscine (Scopolamine) - available as transdermal patch behind the ear

**Q5:** Why is glycopyrrolate preferred over atropine as pre-anesthetic?
> Glycopyrrolate is a quaternary amine - does not cross BBB, so no postoperative CNS effects (delirium).

**Q6:** Which mydriatic is best for routine fundoscopy?
> Tropicamide (shortest acting, 4-6 hours, minimal cycloplegia)

**Q7:** Why is atropine contraindicated in narrow-angle glaucoma?
> Mydriasis causes the iris to bunch up at the drainage angle, blocking aqueous outflow and acutely raising IOP.

**Q8:** In COPD, are anticholinergics more or less effective than beta-2 agonists?
> More effective - because vagal (cholinergic) tone is the primary reversible component of airway obstruction in COPD.`,
        mnemonics: [],
        keyPoints: ["8 recall questions on anticholinergic pharmacology"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 9", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 3: Adrenergic Agonists ──────────────────────────
  {
    topicCode: "PH-MOD-02-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "adrenergic-agonists-foundation",
        title: "Adrenergic Agonists - Foundation",
        estimatedMinutes: 20,
        summary:
          "Adrenergic agonists (sympathomimetics) act on alpha and beta receptors. Classified as catecholamines (adrenaline, noradrenaline, dopamine) and non-catecholamines (phenylephrine, salbutamol).",
        contentMd: `# Adrenergic Agonists (Sympathomimetics)

## Adrenergic Receptors

| Receptor | G-protein | Location | Effect |
|----------|-----------|----------|--------|
| **Alpha-1** | Gq | Vascular smooth muscle, iris dilator, sphincters | Vasoconstriction, mydriasis |
| **Alpha-2** | Gi | Presynaptic nerve terminals, CNS | Decreased NE release, sedation |
| **Beta-1** | Gs | Heart (SA, AV, ventricles) | Increased HR, contractility, conduction |
| **Beta-2** | Gs | Bronchi, uterus, blood vessels (skeletal muscle) | Bronchodilation, vasodilation, tocolysis |
| **Beta-3** | Gs | Adipose tissue, bladder | Lipolysis, bladder relaxation |
| **D1** | Gs | Renal, mesenteric, coronary vessels | Vasodilation |

## Classification

### Direct-Acting (act on receptors)
| Drug | Receptor Selectivity | Key Use |
|------|---------------------|---------|
| **Adrenaline** | Alpha-1,2 + Beta-1,2 | Anaphylaxis, cardiac arrest |
| **Noradrenaline** | Alpha-1,2 + Beta-1 (weak Beta-2) | Septic shock (vasopressor) |
| **Dopamine** | D1 > Beta-1 > Alpha-1 (dose-dependent) | Cardiogenic shock |
| **Phenylephrine** | Alpha-1 selective | Nasal decongestant, mydriasis |
| **Salbutamol** | Beta-2 selective | Asthma |
| **Dobutamine** | Beta-1 selective | Acute heart failure |
| **Clonidine** | Alpha-2 selective | Hypertension |

### Indirect-Acting (release NE stores)
- **Amphetamine**, **Tyramine** (in cheese, wine)

### Mixed (direct + indirect)
- **Ephedrine**, **Pseudoephedrine** (nasal decongestant)

## Adrenaline: The Most Important Sympathomimetic
- Natural catecholamine from adrenal medulla
- Acts on ALL adrenergic receptors (alpha and beta)
- **Dose-dependent effects**: Low dose -> Beta effects (vasodilation); High dose -> Alpha effects (vasoconstriction)`,
        mnemonics: [
          {
            text: "Alpha-1 = Artery constriction; Beta-1 = Beat faster; Beta-2 = Breathe easy",
            explanation:
              "Alpha-1: vasoconstriction (arteries). Beta-1: cardiac stimulation (heartbeat). Beta-2: bronchodilation (breathing).",
          },
          {
            text: "SAND for Adrenaline uses: Shock (anaphylactic), Asthma, Nasal bleed, Dental (with local anesthetics)",
            explanation:
              "Major clinical uses of adrenaline: anaphylaxis, acute severe asthma, epistaxis (topical), combined with local anesthetics for prolonged action.",
          },
        ],
        keyPoints: [
          "Alpha-1 (Gq): vasoconstriction; Beta-1 (Gs): cardiac stimulation; Beta-2 (Gs): bronchodilation",
          "Adrenaline: all alpha + beta; Noradrenaline: alpha + beta-1 (no beta-2)",
          "Dopamine: dose-dependent - D1 (low), Beta-1 (medium), Alpha-1 (high)",
          "Salbutamol: selective beta-2 agonist for asthma",
          "Phenylephrine: selective alpha-1 for nasal decongesion and mydriasis",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 10 - Adrenergic System", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 12", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "adrenergic-agonists-mechanism",
        title: "Adrenergic Agonists - Mechanism",
        estimatedMinutes: 30,
        summary:
          "NE synthesis and release, receptor signaling, CVS effects of adrenaline vs noradrenaline, dopamine dose-dependent actions, and catecholamine metabolism.",
        contentMd: `# Mechanisms

## Norepinephrine Synthesis Pathway
Tyrosine -> (Tyrosine hydroxylase, rate-limiting) -> DOPA -> (DOPA decarboxylase) -> Dopamine -> (Dopamine beta-hydroxylase) -> Norepinephrine -> (PNMT, in adrenal medulla) -> Epinephrine

## Catecholamine Metabolism
- **MAO** (Monoamine Oxidase): Intraneuronal metabolism
- **COMT** (Catechol-O-Methyltransferase): Extraneuronal metabolism
- Final metabolite: **VMA (Vanillylmandelic acid)** - measured in urine for pheochromocytoma

## CVS Effects: Adrenaline vs Noradrenaline

| Parameter | Adrenaline | Noradrenaline |
|-----------|------------|---------------|
| Heart rate | Increases (Beta-1) | Decreases (reflex bradycardia) |
| Systolic BP | Increases (Beta-1 + Alpha-1) | Increases (Alpha-1) |
| Diastolic BP | Decreases at low dose (Beta-2 vasodilation) | Increases (Alpha-1, no Beta-2) |
| Mean BP | Variable | Increases |
| Cardiac output | Increases | Decreases or unchanged |
| TPR | Decreases at low dose | Increases |

> **Key Concept**: Noradrenaline lacks significant Beta-2 activity, so no vasodilation -> pure vasoconstriction -> reflex bradycardia. Adrenaline at low doses shows Beta-2 vasodilation, reducing diastolic BP.

## Adrenaline Reversal (Dale's Phenomenon)
- When alpha-blocker (e.g., phentolamine) is given before adrenaline:
- Alpha-1 vasoconstriction is blocked
- Unopposed Beta-2 vasodilation -> BP FALLS instead of rising
- This "reversal" only occurs with adrenaline (mixed agonist), NOT with noradrenaline (predominantly alpha)

## Dopamine Dose-Dependent Actions
| Dose | Receptor | Effect | Clinical Use |
|------|----------|--------|-------------|
| Low (1-5 mcg/kg/min) | D1 | Renal vasodilation | "Renal dose" dopamine |
| Medium (5-10 mcg/kg/min) | Beta-1 | Increased CO, contractility | Heart failure |
| High (>10 mcg/kg/min) | Alpha-1 | Vasoconstriction | Shock (last resort) |`,
        mnemonics: [
          {
            text: "Tyrosine -> DOPA -> DOpamine -> NorEpinephrine -> Epinephrine (TDD-NE)",
            explanation:
              "Catecholamine synthesis pathway. Rate-limiting step: Tyrosine hydroxylase. PNMT converts NE to Epinephrine only in adrenal medulla.",
          },
          {
            text: "Dale's Reversal: Alpha-blocker + Adrenaline = BP falls (Dale's vasodilation)",
            explanation:
              "After alpha blockade, adrenaline's unopposed Beta-2 effect causes vasodilation and BP fall. Only with mixed agonists, not pure alpha agonists.",
          },
        ],
        keyPoints: [
          "NE synthesis: Tyrosine -> DOPA -> Dopamine -> NE -> Epinephrine",
          "VMA in urine: diagnostic for pheochromocytoma",
          "NE causes reflex bradycardia (no beta-2); Adrenaline causes tachycardia",
          "Dale's reversal: alpha-blocker + adrenaline -> BP falls (beta-2 vasodilation)",
          "Dopamine: low dose = renal; medium = cardiac; high = vasoconstriction",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 10-11", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "adrenergic-agonists-clinical",
        title: "Adrenergic Agonists - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical uses in anaphylaxis, shock, asthma, cardiac arrest, and nasal decongestion. Indian formulary and emergency protocols.",
        contentMd: `# Clinical Applications

## Adrenaline in Anaphylaxis
- **DOC for anaphylaxis**: Adrenaline 0.5 mg IM (1:1000 = 1 mg/mL)
- Anterolateral thigh, can repeat every 5-15 min
- Works via: Alpha-1 (reverses hypotension + reduces edema), Beta-1 (cardiac stimulation), Beta-2 (bronchodilation, mast cell stabilization)
- **IV adrenaline only in ICU** for refractory cases (1:10,000 dilution)

## Adrenaline in Cardiac Arrest (ACLS)
- 1 mg IV (1:10,000) every 3-5 minutes
- For VF/pulseless VT and asystole/PEA

## Vasopressors in Shock
| Shock Type | First-Line Vasopressor |
|------------|----------------------|
| Septic shock | **Noradrenaline** (Alpha-1 + Beta-1) |
| Cardiogenic shock | **Dobutamine** (Beta-1) + Noradrenaline |
| Anaphylactic shock | **Adrenaline** IM/IV |
| Neurogenic shock | **Noradrenaline** or Phenylephrine |

## Beta-2 Agonists in Asthma
- **Salbutamol (Albuterol)**: SABA, DOC for acute asthma
- Inhaled (MDI/nebulizer) for quick relief (onset 5 min, duration 4-6h)
- **Salmeterol, Formoterol**: LABA (12h), used with ICS for maintenance
- Systemic ADRs at high doses: tremor, tachycardia, hypokalemia

## Tocolysis
- **Isoxsuprine** (Beta-2 agonist): Used to suppress premature labor in India
- **Ritodrine**: Also a tocolytic (less used now)

## Nasal Decongestion
- **Xylometazoline, Oxymetazoline**: Alpha-1 agonist nasal drops
- Short-term use only (3-5 days) to avoid rhinitis medicamentosa (rebound congestion)

> **Indian Context**: Adrenaline auto-injectors (EpiPen) are expensive in India. Prefilled adrenaline syringes are available. Emergency departments should stock 1:1000 adrenaline ampoules.`,
        mnemonics: [
          {
            text: "Anaphylaxis = Adrenaline IM 0.5 mg (1 in 1000) - ALWAYS",
            explanation:
              "In anaphylaxis, adrenaline 0.5 mg IM (1:1000 concentration) into anterolateral thigh is the absolute first-line treatment. Delay increases mortality.",
          },
        ],
        keyPoints: [
          "Adrenaline 0.5 mg IM (1:1000): first-line for anaphylaxis",
          "Noradrenaline: first-line vasopressor for septic shock",
          "Dobutamine: inotrope for cardiogenic shock",
          "Salbutamol: SABA for acute asthma; Salmeterol/Formoterol: LABA maintenance",
          "Nasal decongestants (xylometazoline): max 3-5 days to avoid rebound",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 10-11", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "adrenergic-agonists-exam",
        title: "Adrenergic Agonists - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield adrenergic agonist facts for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- DOC for anaphylaxis: **Adrenaline 0.5 mg IM (1:1000)**
- First-line vasopressor in septic shock: **Noradrenaline**
- Inotrope for cardiogenic shock: **Dobutamine** (Beta-1 selective)
- Drug showing Dale's phenomenon: **Adrenaline** (after alpha blockade)
- SABA for acute asthma: **Salbutamol (albuterol)**
- Nasal decongestant alpha-1 agonist: **Xylometazoline, Oxymetazoline**
- Urinary VMA elevated in: **Pheochromocytoma**
- Rate-limiting step in catecholamine synthesis: **Tyrosine hydroxylase**
- Catecholamine metabolizing enzymes: **MAO (intraneuronal) + COMT (extraneuronal)**
- Drug causing reflex bradycardia: **Noradrenaline** (pure vasoconstriction, no Beta-2)
- Dopamine "renal dose": **1-5 mcg/kg/min** (D1 receptor activation)
- Drug causing adrenaline reversal: **Phentolamine** (alpha-blocker)
- LABA examples: **Salmeterol, Formoterol** (12h duration)
- Rhinitis medicamentosa caused by: **Prolonged nasal decongestant use**

## Comparison: Adrenaline vs Noradrenaline
| Feature | Adrenaline | Noradrenaline |
|---------|------------|---------------|
| Beta-2 action | Strong | Minimal |
| Heart rate | Increases | Reflex decrease |
| Diastolic BP | Decreases (low dose) | Increases |
| Dale's reversal | Yes | No |
| Main use | Anaphylaxis | Septic shock |`,
        mnemonics: [
          {
            text: "NorAd = No Beta-2 = No vasodilation = No Dale's reversal",
            explanation:
              "Noradrenaline lacks significant Beta-2 activity, so it causes pure vasoconstriction without vasodilation, and Dale's reversal does not occur.",
          },
        ],
        keyPoints: [
          "Adrenaline: anaphylaxis; Noradrenaline: septic shock; Dobutamine: cardiogenic shock",
          "Dale's reversal: only with adrenaline (mixed agonist) after alpha blockade",
          "NE causes reflex bradycardia; Adrenaline causes tachycardia",
          "Tyrosine hydroxylase: rate-limiting in catecholamine synthesis",
          "VMA: urinary marker for pheochromocytoma",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 10-11", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "adrenergic-agonists-recall",
        title: "Adrenergic Agonists - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on adrenergic agonists.",
        contentMd: `# Active Recall

**Q1:** What is the dose and route of adrenaline in anaphylaxis?
> 0.5 mg IM (1:1000 concentration) into anterolateral thigh

**Q2:** First-line vasopressor for septic shock?
> Noradrenaline (Alpha-1 + Beta-1, raises SVR and MAP)

**Q3:** What is Dale's vasomotor reversal?
> After alpha blockade, adrenaline causes BP to fall instead of rise, due to unopposed Beta-2 vasodilation.

**Q4:** Rate-limiting enzyme in catecholamine synthesis?
> Tyrosine hydroxylase (converts tyrosine to DOPA)

**Q5:** What are the dose-dependent effects of dopamine?
> Low (1-5): D1 renal vasodilation. Medium (5-10): Beta-1 cardiac stimulation. High (>10): Alpha-1 vasoconstriction.

**Q6:** Why does noradrenaline cause reflex bradycardia?
> NE has minimal Beta-2 activity -> pure vasoconstriction -> baroreceptor reflex -> vagal activation -> bradycardia.

**Q7:** SABA for acute asthma?
> Salbutamol (albuterol) - inhaled via MDI or nebulizer, onset 5 minutes.

**Q8:** What is rhinitis medicamentosa?
> Rebound nasal congestion from prolonged use (>5 days) of topical alpha-1 agonist nasal decongestants (xylometazoline, oxymetazoline).`,
        mnemonics: [],
        keyPoints: ["8 recall questions on adrenergic agonists"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 10-11", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 4: Adrenergic Antagonists ────────────────────────
  {
    topicCode: "PH-MOD-02-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "adrenergic-antagonists-foundation",
        title: "Adrenergic Antagonists - Foundation",
        estimatedMinutes: 20,
        summary:
          "Adrenergic antagonists block alpha or beta receptors. Alpha-blockers (prazosin, phentolamine) and beta-blockers (propranolol, atenolol, metoprolol) are essential cardiovascular drugs.",
        contentMd: `# Adrenergic Antagonists

## Classification

### Alpha-Blockers
| Drug | Selectivity | Key Use |
|------|------------|---------|
| **Phentolamine** | Non-selective (alpha-1 + alpha-2) | Pheochromocytoma (acute) |
| **Phenoxybenzamine** | Non-selective, IRREVERSIBLE | Pheochromocytoma (pre-op) |
| **Prazosin** | Alpha-1 selective | Hypertension, BPH |
| **Terazosin, Doxazosin** | Alpha-1 selective | Hypertension, BPH |
| **Tamsulosin** | Alpha-1A selective (prostate) | BPH (minimal hypotension) |

### Beta-Blockers
| Drug | Selectivity | Special Properties |
|------|------------|-------------------|
| **Propranolol** | Non-selective (B1 + B2) | Membrane stabilizing activity, lipophilic |
| **Atenolol** | Beta-1 selective (cardioselective) | Hydrophilic, renal excretion |
| **Metoprolol** | Beta-1 selective | Lipophilic, hepatic metabolism |
| **Bisoprolol** | Beta-1 selective | Most cardioselective |
| **Carvedilol** | Non-selective + Alpha-1 block | Heart failure (vasodilating beta-blocker) |
| **Nebivolol** | Beta-1 selective + NO release | Hypertension (vasodilating) |
| **Labetalol** | Non-selective + Alpha-1 block | Hypertensive emergencies, pregnancy |
| **Esmolol** | Beta-1, ultra-short acting | Intraoperative tachycardia |
| **Timolol** | Non-selective | Glaucoma (topical eye drops) |
| **Pindolol** | Non-selective + ISA | Hypertension with bradycardia |

## Key Concepts
- **Cardioselective** (Beta-1): Atenolol, Metoprolol, Bisoprolol - safer in asthmatics (but still use with caution)
- **ISA (Intrinsic Sympathomimetic Activity)**: Pindolol, Acebutolol - partial agonist activity, less bradycardia
- **Lipophilic** (Propranolol, Metoprolol): Cross BBB -> CNS effects (nightmares, depression)
- **Hydrophilic** (Atenolol): Do NOT cross BBB, renally excreted`,
        mnemonics: [
          {
            text: "A-BEAM for cardioselective beta-blockers: Atenolol, Bisoprolol, Esmolol, Acebutolol, Metoprolol",
            explanation:
              "These beta-blockers are Beta-1 selective (cardioselective) - relatively safer in asthma and diabetes compared to non-selective ones.",
          },
          {
            text: "Tamsulosin TARGETs the prostate (Alpha-1A selective)",
            explanation:
              "Tamsulosin selectively blocks Alpha-1A receptors in the prostate, relieving BPH symptoms with minimal blood pressure effects.",
          },
        ],
        keyPoints: [
          "Phenoxybenzamine: irreversible alpha-blocker for pheochromocytoma pre-op",
          "Prazosin/Tamsulosin: alpha-1 blockers for BPH",
          "Propranolol: non-selective beta-blocker (prototype)",
          "Cardioselective (A-BEAM): relatively safer in asthma, DM",
          "Carvedilol/Labetalol: combined alpha + beta blockers",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 11 - Adrenergic Blocking Agents", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 12", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "adrenergic-antagonists-mechanism",
        title: "Adrenergic Antagonists - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Mechanisms of alpha and beta blockade: hemodynamic effects, first-dose phenomenon, beta-blocker pharmacology in detail.",
        contentMd: `# Mechanisms

## Alpha-Blocker Mechanisms

### Prazosin (Alpha-1 Selective)
- Blocks Alpha-1 on vascular smooth muscle -> vasodilation -> decreased BP
- **First-dose phenomenon**: Marked postural hypotension with first dose
  - Prevention: Start low dose at bedtime
- Does NOT block Alpha-2 (presynaptic) -> no reflex tachycardia (unlike phentolamine)
- Additional: Relaxes prostatic smooth muscle (BPH relief)

### Phentolamine (Non-selective)
- Blocks both Alpha-1 and Alpha-2
- Alpha-2 block -> increased NE release -> reflex tachycardia
- Used in pheochromocytoma diagnosis (phentolamine test - now rarely used)

## Beta-Blocker Mechanisms

### CVS Effects
| Effect | Mechanism |
|--------|-----------|
| Negative chronotropy | Beta-1 block on SA node -> decreased HR |
| Negative inotropy | Beta-1 block on myocardium -> decreased contractility |
| Negative dromotropy | Beta-1 block on AV node -> decreased conduction |
| Decreased BP | Reduced CO + decreased renin release |
| Anti-anginal | Reduced myocardial O2 demand |

### Metabolic Effects
| Effect | Mechanism | Clinical Importance |
|--------|-----------|-------------------|
| Mask hypoglycemia | Block Beta-2 mediated symptoms (tremor, tachycardia) | Dangerous in diabetics on insulin |
| Worsen bronchospasm | Block Beta-2 bronchodilation | Contraindicated in asthma (non-selective) |
| Worsen Raynaud's | Block Beta-2 vasodilation in extremities | Cold extremities |
| Increase triglycerides | Alter lipid metabolism | Metabolic syndrome |

### Propranolol Special Properties
- Membrane stabilizing activity (local anesthetic effect at high doses)
- Crosses BBB -> CNS effects (anxiolytic, anti-tremor for stage fright)
- Inhibits T4 -> T3 conversion (useful in thyroid storm)
- Blocks portal hypertension -> prevents variceal bleeding (reduces portal pressure)

## Pheochromocytoma Management
- Always give alpha-blocker FIRST (phenoxybenzamine), then beta-blocker
- If beta-blocker given first -> unopposed alpha stimulation -> hypertensive crisis
- "Alpha Before Beta" rule`,
        mnemonics: [
          {
            text: "Alpha Before Beta in pheochromocytoma (ABCs of pheo)",
            explanation:
              "In pheochromocytoma, always start alpha-blockade (phenoxybenzamine) before adding beta-blockade. Beta-blocker alone causes unopposed alpha vasoconstriction -> hypertensive crisis.",
          },
          {
            text: "Propranolol: Lipophilic = crosses BBB = Lots of CNS effects",
            explanation:
              "Propranolol is lipophilic, crosses the BBB, and causes CNS effects like nightmares, depression. Also useful for stage fright and essential tremor.",
          },
        ],
        keyPoints: [
          "Prazosin: first-dose hypotension (start low, bedtime dosing)",
          "Non-selective alpha block (phentolamine): reflex tachycardia",
          "Beta-blockers mask hypoglycemia symptoms in diabetics",
          "Non-selective beta-blockers contraindicated in asthma",
          "Pheochromocytoma: Alpha Before Beta (ABCs of pheo)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 11", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "adrenergic-antagonists-clinical",
        title: "Adrenergic Antagonists - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical uses: hypertension, heart failure, BPH, pheochromocytoma, thyrotoxicosis, migraine, and portal hypertension.",
        contentMd: `# Clinical Applications

## Beta-Blockers in Heart Failure
- Historically contraindicated (negative inotropy), now FIRST-LINE
- Proven mortality benefit: **Carvedilol, Metoprolol succinate, Bisoprolol**
- Start low, go slow (titrate gradually)
- Reduce mortality by blocking chronic sympathetic activation

## Beta-Blockers in Hypertension
- No longer first-line (JNC-8, Indian HTN guidelines)
- Indicated when: heart failure coexists, post-MI, rate control in AF, migraine
- **Labetalol**: Safe in pregnancy-induced hypertension (PIH)

## Alpha-Blockers for BPH
- **Tamsulosin**: Most used in India for BPH (uroselective alpha-1A)
- **Intraoperative Floppy Iris Syndrome (IFIS)**: Complication during cataract surgery in patients on tamsulosin - inform ophthalmologist

## Pheochromocytoma
- Pre-operative alpha blockade: **Phenoxybenzamine** for 10-14 days
- Then add beta-blocker (propranolol or atenolol) for tachycardia
- Intraoperative BP control: **Phentolamine** IV or nitroprusside
- Definitive treatment: Surgical excision

## Other Clinical Uses
| Condition | Beta-Blocker | Mechanism |
|-----------|-------------|-----------|
| Migraine prophylaxis | Propranolol | Not fully understood (CNS effect) |
| Essential tremor | Propranolol | CNS Beta-block |
| Stage fright | Propranolol | Blocks peripheral sympathetic manifestations |
| Thyroid storm | Propranolol | Reduces HR + inhibits T4->T3 conversion |
| Portal hypertension | Propranolol/Nadolol | Reduces portal pressure (variceal bleed prevention) |
| Glaucoma | Timolol (topical) | Reduces aqueous humor production |
| Post-MI | Metoprolol, Carvedilol | Reduces mortality, prevents remodeling |

> **Indian Context**: Atenolol was previously the most prescribed antihypertensive in India. Current guidelines prefer amlodipine or telmisartan as first-line. Beta-blockers reserved for specific indications.`,
        mnemonics: [
          {
            text: "CMB for heart failure beta-blockers: Carvedilol, Metoprolol succinate, Bisoprolol",
            explanation:
              "Only these 3 beta-blockers have proven mortality benefit in heart failure. Start low, go slow.",
          },
        ],
        keyPoints: [
          "Heart failure: Carvedilol, Metoprolol succinate, Bisoprolol (proven mortality benefit)",
          "Labetalol: safe antihypertensive in pregnancy",
          "Tamsulosin for BPH; warn about IFIS before cataract surgery",
          "Propranolol: migraine prophylaxis, thyroid storm, portal hypertension",
          "Timolol eye drops: reduce aqueous humor production in glaucoma",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 11, 38, 39", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "adrenergic-antagonists-exam",
        title: "Adrenergic Antagonists - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield adrenergic antagonist facts for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Irreversible alpha-blocker: **Phenoxybenzamine**
- Alpha-1 selective blocker for BPH: **Tamsulosin (alpha-1A)**
- First-dose hypotension seen with: **Prazosin**
- Cardioselective beta-blockers: **A-BEAM** (Atenolol, Bisoprolol, Esmolol, Acebutolol, Metoprolol)
- Beta-blocker with ISA: **Pindolol** (partial agonist)
- Ultra-short acting beta-blocker: **Esmolol** (t1/2 = 9 min)
- Beta-blocker safe in pregnancy: **Labetalol**
- Beta-blockers with mortality benefit in HF: **Carvedilol, Metoprolol succinate, Bisoprolol**
- Beta-blocker for thyroid storm: **Propranolol** (also inhibits T4->T3)
- Beta-blocker for glaucoma: **Timolol** (topical)
- Propranolol used for: **Migraine, tremor, stage fright, thyrotoxicosis, portal HTN**
- Beta-blockers mask: **Hypoglycemia symptoms** (dangerous in DM)
- In pheochromocytoma: **Alpha before beta** (never beta alone)
- IFIS complication: **Tamsulosin** during cataract surgery

## Contraindications of Beta-Blockers
- Asthma (non-selective beta-blockers)
- Decompensated heart failure (acute)
- Heart block (2nd/3rd degree)
- Severe bradycardia
- Prinzmetal's angina (may worsen vasospasm)`,
        mnemonics: [
          {
            text: "ABCDE contraindications: Asthma, Block (heart), CHF (acute), Diabetes (mask hypo), Extremity (Raynaud's)",
            explanation:
              "Major contraindications and cautions for non-selective beta-blockers: Asthma, AV Block, acute CHF, Diabetes (masking hypoglycemia), Extremity vasospasm.",
          },
        ],
        keyPoints: [
          "Phenoxybenzamine: irreversible alpha-blocker for pheo pre-op",
          "A-BEAM: cardioselective beta-blockers",
          "Labetalol: safe in pregnancy hypertension",
          "Beta-blockers contraindicated in asthma and acute heart failure",
          "Alpha Before Beta in pheochromocytoma",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 11", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "adrenergic-antagonists-recall",
        title: "Adrenergic Antagonists - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on adrenergic antagonists.",
        contentMd: `# Active Recall

**Q1:** Name the irreversible alpha-blocker. What is it used for?
> Phenoxybenzamine. Pre-operative alpha blockade in pheochromocytoma (10-14 days before surgery).

**Q2:** What is the first-dose phenomenon with prazosin?
> Marked postural hypotension after the first dose. Prevented by starting with a low dose at bedtime.

**Q3:** Why must alpha-blockers be given before beta-blockers in pheochromocytoma?
> Beta-blocker alone blocks Beta-2 vasodilation, leaving unopposed alpha vasoconstriction -> hypertensive crisis.

**Q4:** Name 3 beta-blockers proven to reduce mortality in heart failure.
> Carvedilol, Metoprolol succinate, Bisoprolol. Start low, go slow.

**Q5:** Why is propranolol used in thyroid storm?
> Reduces heart rate (Beta-1 block) AND inhibits peripheral T4 to T3 conversion.

**Q6:** Which beta-blocker is safe in pregnancy?
> Labetalol (combined alpha + beta blocker)

**Q7:** Why are non-selective beta-blockers dangerous in asthmatics?
> They block Beta-2 receptors in bronchial smooth muscle, causing bronchoconstriction and potentially fatal bronchospasm.

**Q8:** What is IFIS and which drug causes it?
> Intraoperative Floppy Iris Syndrome - iris billows and prolapses during cataract surgery. Caused by tamsulosin (alpha-1A blocker for BPH).`,
        mnemonics: [],
        keyPoints: ["8 recall questions on alpha and beta blockers"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 11", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 5: Neuromuscular Blocking Agents ─────────────────
  {
    topicCode: "PH-MOD-02-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "nmb-agents-foundation",
        title: "Neuromuscular Blocking Agents - Foundation",
        estimatedMinutes: 20,
        summary:
          "NMJ blockers are used for muscle relaxation during surgery. Two types: depolarizing (succinylcholine) and non-depolarizing (tubocurarine, atracurium, vecuronium).",
        contentMd: `# Neuromuscular Blocking Agents

## NMJ Physiology
- Motor nerve releases ACh -> binds Nm receptors (nicotinic muscle) -> Na+ influx -> end-plate potential -> muscle contraction
- Nm receptor: ligand-gated Na+ channel (2 alpha subunits for ACh binding)

## Classification

### Depolarizing (Phase I Block)
- **Succinylcholine (Suxamethonium)**: Only clinically used depolarizing blocker
- Mimics ACh, causes initial depolarization (fasciculations) then sustained block
- Ultra-short acting (5-10 min) - rapidly hydrolyzed by **pseudocholinesterase (butyrylcholinesterase)**
- Used for: rapid sequence intubation (RSI), ECT

### Non-Depolarizing (Competitive Block)
| Drug | Duration | Special Features |
|------|----------|-----------------|
| **Tubocurarine** | Long | Histamine release, ganglion block (hypotension) - rarely used |
| **Pancuronium** | Long | Vagolytic (tachycardia), no histamine release |
| **Atracurium** | Intermediate | Hofmann degradation (pH/temperature dependent, organ-independent) |
| **Cisatracurium** | Intermediate | Isomer of atracurium, less histamine release |
| **Vecuronium** | Intermediate | Minimal CVS effects - most widely used |
| **Rocuronium** | Intermediate | Fastest onset among NDMBs (60-90 sec) |
| **Mivacurium** | Short | Hydrolyzed by pseudocholinesterase |

## Key Differences
| Feature | Depolarizing | Non-Depolarizing |
|---------|-------------|-----------------|
| Mechanism | Persistent depolarization | Competitive ACh block |
| Fasciculations | Yes (initial) | No |
| Reversed by AChE inhibitors | No (worsens Phase II) | Yes (neostigmine) |
| Prototype | Succinylcholine | d-Tubocurarine |`,
        mnemonics: [
          {
            text: "SUCC = Short, Ultra-fast, Causes fasciculations, Cholinesterase-degraded",
            explanation:
              "Succinylcholine: ultra-short acting (5-10 min), causes fasciculations (depolarizing), degraded by pseudocholinesterase (butyrylcholinesterase).",
          },
          {
            text: "RAVE for intermediate-acting NDMBs: Rocuronium, Atracurium, Vecuronium, (+ cisatracuriuEm)",
            explanation:
              "The three most clinically important non-depolarizing muscle relaxants. Vecuronium is most widely used, Rocuronium has fastest onset.",
          },
        ],
        keyPoints: [
          "Succinylcholine: only depolarizing blocker, ultra-short acting, for RSI",
          "Non-depolarizing: competitive block, reversed by neostigmine",
          "Vecuronium: most commonly used NDMB (minimal CVS effects)",
          "Rocuronium: fastest-onset NDMB (60-90 sec)",
          "Atracurium: Hofmann degradation (safe in renal/hepatic failure)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 12 - Skeletal Muscle Relaxants", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 11", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "nmb-agents-mechanism",
        title: "Neuromuscular Blocking Agents - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed mechanisms of depolarizing vs non-depolarizing block, Phase I vs Phase II block, succinylcholine adverse effects, and reversal agents.",
        contentMd: `# Mechanisms

## Succinylcholine: Phase I and Phase II Block

### Phase I (Depolarizing Block)
- Succinylcholine binds Nm receptor -> persistent depolarization
- Initial fasciculations (brief muscle contractions)
- Then flaccid paralysis (receptors remain depolarized, cannot respond to further stimulation)
- **Not reversed by neostigmine** (AChE inhibitor worsens it)

### Phase II (Desensitization Block)
- Occurs with prolonged succinylcholine infusion or repeated doses
- Receptors become desensitized (similar to non-depolarizing block)
- CAN be partially reversed by neostigmine

## Succinylcholine Adverse Effects
| ADR | Mechanism |
|-----|-----------|
| **Hyperkalemia** | Depolarization releases K+ from muscle (dangerous in burns, crush injury, denervation) |
| **Malignant hyperthermia** | Genetic (RYR1 mutation) - uncontrolled Ca2+ release from SR |
| **Bradycardia** | Stimulates muscarinic receptors (especially with 2nd dose) |
| **Raised IOP** | Extraocular muscle contraction |
| **Raised intragastric pressure** | Fasciculations -> risk of aspiration |
| **Muscle pain** | Post-operative myalgia from fasciculations |
| **Prolonged apnea** | Atypical pseudocholinesterase (genetic variant) |

### Malignant Hyperthermia
- Triggered by succinylcholine + volatile anesthetics (halothane, isoflurane)
- Massive Ca2+ release -> muscle rigidity + hyperthermia + rhabdomyolysis
- **Treatment**: **Dantrolene** (blocks RYR1 Ca2+ channels in SR)

## Non-Depolarizing Block Reversal
- **Neostigmine + Glycopyrrolate**: Standard reversal
  - Neostigmine inhibits AChE -> increased ACh competes with NDMB
  - Glycopyrrolate: blocks muscarinic effects of excess ACh (bradycardia, secretions)
- **Sugammadex**: Novel reversal agent, specifically encapsulates rocuronium/vecuronium
  - Rapid, complete reversal even from deep block
  - Increasingly available in Indian tertiary centers

## Atracurium: Hofmann Degradation
- Non-enzymatic breakdown at physiological pH and temperature
- **Organ-independent elimination** (ideal for renal/hepatic failure patients)
- Produces laudanosine (CNS stimulant at high levels - theoretical concern)`,
        mnemonics: [
          {
            text: "MH = Malignant Hyperthermia = Must give Dantrolene",
            explanation:
              "Malignant hyperthermia from succinylcholine/volatile anesthetics is treated with Dantrolene (blocks RYR1 ryanodine receptor on sarcoplasmic reticulum).",
          },
          {
            text: "SUCC-K: Succinylcholine raises K+ (avoid in burns, crush, denervation)",
            explanation:
              "Succinylcholine causes depolarization-induced K+ release. In burns (>24h), crush injuries, and denervation, up-regulation of nicotinic receptors leads to dangerous hyperkalemia.",
          },
        ],
        keyPoints: [
          "Phase I block: not reversed by neostigmine; Phase II: partially reversed",
          "Succinylcholine hyperkalemia: dangerous in burns, crush injury, denervation",
          "Malignant hyperthermia: Dantrolene is the specific treatment",
          "Neostigmine + glycopyrrolate: standard NDMB reversal",
          "Sugammadex: encapsulates rocuronium/vecuronium for rapid reversal",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 12", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "nmb-agents-clinical",
        title: "Neuromuscular Blocking Agents - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical scenarios: RSI, choice of NMB for surgery, management of malignant hyperthermia, and myasthenia gravis considerations.",
        contentMd: `# Clinical Applications

## Rapid Sequence Intubation (RSI)
- Emergency intubation (aspiration risk: full stomach, trauma)
- **Succinylcholine 1-1.5 mg/kg IV**: Onset 30-60 sec, duration 5-10 min
- Or **Rocuronium 1.2 mg/kg**: Onset 60-90 sec (can be reversed with sugammadex)
- Preceded by preoxygenation and induction agent (propofol/thiopentone)

## Choice of NMB for Surgery
| Scenario | Preferred Drug | Reason |
|----------|---------------|--------|
| Short procedure (<15 min) | Succinylcholine or Mivacurium | Ultra-short/short duration |
| Standard surgery | Vecuronium or Atracurium | Intermediate, predictable |
| Renal failure patient | Atracurium/Cisatracurium | Hofmann degradation (organ-independent) |
| Hepatic failure | Atracurium/Cisatracurium | Same reason |
| Rapid intubation needed | Succinylcholine or Rocuronium (high dose) | Fastest onset |

## Myasthenia Gravis Considerations
- Highly sensitive to non-depolarizing agents (reduced functional Nm receptors)
- Use 1/10th normal dose of NDMBs
- Relatively resistant to succinylcholine
- Monitor with peripheral nerve stimulator (train-of-four)

## Malignant Hyperthermia Protocol
1. Stop triggering agents immediately
2. **Dantrolene 2.5 mg/kg IV** (repeat as needed up to 10 mg/kg)
3. Cooling measures (ice packs, cold IV fluids)
4. Treat hyperkalemia (insulin + glucose, calcium gluconate)
5. Treat acidosis (NaHCO3)
6. Monitor CK, myoglobin (rhabdomyolysis)

> **Indian Context**: Succinylcholine remains widely used in India for RSI and ECT despite side effects, due to its low cost and reliability. Sugammadex is available but expensive.`,
        mnemonics: [
          {
            text: "RSI = Rapid Sux Intubation (Succinylcholine for RSI)",
            explanation:
              "Succinylcholine is the traditional drug for Rapid Sequence Intubation due to its ultra-fast onset (30-60 sec) and short duration. Rocuronium is an alternative with sugammadex for reversal.",
          },
        ],
        keyPoints: [
          "RSI: Succinylcholine 1.5 mg/kg (onset 30s) or Rocuronium 1.2 mg/kg (onset 60s)",
          "Atracurium/Cisatracurium: safe in renal and hepatic failure (Hofmann degradation)",
          "MG patients: 1/10th dose of NDMBs (hypersensitive)",
          "MH treatment: Stop trigger + Dantrolene 2.5 mg/kg IV + cooling",
          "Succinylcholine: avoid in burns >24h, crush injury, spinal cord injury (hyperkalemia)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 12, 25", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "nmb-agents-exam",
        title: "Neuromuscular Blocking Agents - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield NMB agent facts for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Only depolarizing NMB: **Succinylcholine**
- Succinylcholine metabolized by: **Pseudocholinesterase (butyrylcholinesterase)**
- Succinylcholine causes: **Fasciculations then paralysis**
- Dangerous hyperkalemia with succinylcholine in: **Burns (>24h), crush injury, denervation, paraplegia**
- Malignant hyperthermia treatment: **Dantrolene**
- MH triggers: **Succinylcholine + volatile anesthetics (halothane, isoflurane)**
- Drug for RSI: **Succinylcholine** (or Rocuronium)
- Fastest-onset NDMB: **Rocuronium** (60-90 sec)
- NDMB safe in renal failure: **Atracurium** (Hofmann degradation)
- NDMB with minimal CVS effects: **Vecuronium** (most commonly used)
- NDMB causing histamine release: **Tubocurarine, Atracurium (mild)**
- Reversal of NDMB: **Neostigmine + Glycopyrrolate**
- Selective reversal of rocuronium: **Sugammadex** (encapsulation)
- Prolonged apnea with succinylcholine: **Atypical pseudocholinesterase**
- Dibucaine number measures: **Pseudocholinesterase quality** (normal >70)

## Comparison Table
| Feature | Succinylcholine | Vecuronium |
|---------|----------------|------------|
| Type | Depolarizing | Non-depolarizing |
| Onset | 30-60 sec | 2-3 min |
| Duration | 5-10 min | 30-40 min |
| Fasciculations | Yes | No |
| Reversed by neostigmine | No | Yes |
| Hyperkalemia | Yes | No |`,
        mnemonics: [
          {
            text: "Dibucaine Number >70 = Normal pseudocholinesterase",
            explanation:
              "Dibucaine number tests quality of pseudocholinesterase. Normal >70 (typical enzyme, inhibited by dibucaine). Atypical enzyme: <30 (succinylcholine apnea risk).",
          },
        ],
        keyPoints: [
          "Succinylcholine: only depolarizing agent, ultra-short, for RSI/ECT",
          "Avoid Sux in burns >24h, denervation (hyperkalemia)",
          "Dantrolene for malignant hyperthermia",
          "Atracurium: organ-independent (Hofmann degradation)",
          "Sugammadex: encapsulates rocuronium for rapid reversal",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 12", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "nmb-agents-recall",
        title: "Neuromuscular Blocking Agents - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on neuromuscular blocking agents.",
        contentMd: `# Active Recall

**Q1:** Name the only clinically used depolarizing NMB agent.
> Succinylcholine (suxamethonium)

**Q2:** Why is succinylcholine contraindicated in burn patients after 24 hours?
> Up-regulation of nicotinic receptors across the muscle membrane causes massive K+ release upon depolarization -> fatal hyperkalemia.

**Q3:** How is malignant hyperthermia treated?
> Stop triggering agents + Dantrolene 2.5 mg/kg IV + active cooling + treat hyperkalemia and acidosis.

**Q4:** How is non-depolarizing block reversed?
> Neostigmine (increases ACh to compete with NDMB) + Glycopyrrolate (blocks muscarinic side effects). Or Sugammadex for rocuronium/vecuronium.

**Q5:** Which NDMB is safe in renal failure? Why?
> Atracurium/Cisatracurium - eliminated by Hofmann degradation (non-enzymatic, organ-independent).

**Q6:** Fastest onset NDMB for intubation?
> Rocuronium (60-90 seconds at 1.2 mg/kg dose)

**Q7:** What enzyme metabolizes succinylcholine?
> Pseudocholinesterase (butyrylcholinesterase/plasma cholinesterase). Atypical variant causes prolonged apnea.

**Q8:** What is the Dibucaine number?
> Test for pseudocholinesterase quality. Normal >70 (typical enzyme). <30 = atypical (increased risk of prolonged succinylcholine apnea).`,
        mnemonics: [],
        keyPoints: ["8 recall questions on NMB agents"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 12", edition: "8th" },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODULE 3 — CARDIOVASCULAR PHARMACOLOGY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ─── Topic 1: Antihypertensive Drugs ────────────────────────
  {
    topicCode: "PH-MOD-03-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "antihypertensive-drugs-foundation",
        title: "Antihypertensive Drugs - Foundation",
        estimatedMinutes: 20,
        summary:
          "Hypertension affects ~30% of Indian adults. Major drug classes: ACE inhibitors, ARBs, CCBs, diuretics, and beta-blockers. Treatment follows stepped-care approach based on JNC and Indian guidelines.",
        contentMd: `# Antihypertensive Drugs

## Hypertension Classification (JNC-8 / ISH 2020)
| Category | Systolic (mmHg) | Diastolic (mmHg) |
|----------|----------------|------------------|
| Normal | <120 | <80 |
| Elevated | 120-129 | <80 |
| Stage 1 HTN | 130-139 | 80-89 |
| Stage 2 HTN | >=140 | >=90 |
| Hypertensive crisis | >180 | >120 |

## Drug Classes

### 1. ACE Inhibitors (-pril)
- **Enalapril, Ramipril, Lisinopril, Perindopril**
- MOA: Inhibit ACE -> reduce Angiotensin II -> vasodilation + decreased aldosterone
- Also reduce bradykinin degradation -> vasodilation but also DRY COUGH

### 2. Angiotensin Receptor Blockers (-sartan)
- **Losartan, Telmisartan, Valsartan, Olmesartan**
- Block AT1 receptors -> similar effects to ACEi but NO cough (no bradykinin effect)
- Telmisartan: Longest half-life, PPAR-gamma activity (metabolic benefits)

### 3. Calcium Channel Blockers
| Type | Drugs | Main Effect |
|------|-------|-------------|
| **Dihydropyridine** (-dipine) | Amlodipine, Nifedipine | Vasodilation (vessels > heart) |
| **Non-dihydropyridine** | Verapamil, Diltiazem | Heart rate control + vasodilation |

### 4. Diuretics
| Type | Drug | Site of Action |
|------|------|---------------|
| **Thiazide** | Hydrochlorothiazide, Chlorthalidone | DCT |
| **Loop** | Furosemide | Thick ascending loop |
| **K+-sparing** | Spironolactone, Amiloride | Collecting duct |

### 5. Beta-Blockers
- Metoprolol, Atenolol, Bisoprolol - reduce HR, CO, renin release

### 6. Others
- **Clonidine**: Central alpha-2 agonist
- **Methyldopa**: Central alpha-2 agonist (safe in pregnancy)
- **Hydralazine**: Direct arteriolar vasodilator (pregnancy)
- **Prazosin**: Alpha-1 blocker
- **Minoxidil**: K+ channel opener (severe resistant HTN)`,
        mnemonics: [
          {
            text: "ACEi = A Cough Expected (always); ARBs = Alternative, Rarely cough at all (Better tolerated)",
            explanation:
              "ACE inhibitors cause dry cough in 10-15% (bradykinin accumulation). ARBs do not affect bradykinin -> no cough. Switch ACEi to ARB if cough occurs.",
          },
          {
            text: "ABCD of first-line antihypertensives: ACEi/ARB, Beta-blocker (selected), CCB, Diuretic",
            explanation:
              "The four main classes used in stepped-care therapy for hypertension. Current Indian/international guidelines prefer ACEi/ARB + CCB or diuretic.",
          },
        ],
        keyPoints: [
          "ACEi (-pril): reduce Ang II, cause dry cough (bradykinin)",
          "ARBs (-sartan): block AT1, no cough, good alternative to ACEi",
          "Amlodipine: most commonly prescribed CCB for HTN in India",
          "Thiazides: first-line for uncomplicated HTN in elderly",
          "Methyldopa/Labetalol: safe antihypertensives in pregnancy",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 38 - Antihypertensive Drugs", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 28", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "antihypertensive-drugs-mechanism",
        title: "Antihypertensive Drugs - Mechanism",
        estimatedMinutes: 30,
        summary:
          "RAAS system, ACEi/ARB mechanisms, CCB subtypes, diuretic mechanisms, and stepped-care approach for hypertension treatment.",
        contentMd: `# Mechanisms

## Renin-Angiotensin-Aldosterone System (RAAS)
Renin (from JGA) -> Angiotensinogen -> Angiotensin I -> (ACE in lungs) -> Angiotensin II -> AT1 receptor effects:
1. Vasoconstriction (direct)
2. Aldosterone secretion (Na+/water retention)
3. ADH release
4. Sympathetic stimulation
5. Cardiac/vascular remodeling

## ACE Inhibitor Mechanism
- Inhibit ACE -> decreased Ang II + increased bradykinin
- Bradykinin -> NO + prostaglandins -> vasodilation
- Bradykinin accumulation -> DRY COUGH (10-15%), rarely angioedema
- **Renoprotective**: Dilate efferent arteriole -> reduce intraglomerular pressure
- Reduce proteinuria in diabetic nephropathy

## ARB Mechanism
- Block AT1 receptors selectively
- Ang II levels rise but cannot act (AT1 blocked)
- May stimulate AT2 receptors (vasodilation, anti-proliferation)
- NO bradykinin effect -> no cough

## CCB Mechanism
### Dihydropyridines (Amlodipine, Nifedipine)
- Block L-type Ca2+ channels in vascular smooth muscle > heart
- Vasodilation >> cardiac depression
- Reflex tachycardia may occur with short-acting nifedipine (avoid sublingual nifedipine in emergencies)
- Amlodipine: long t1/2 (35-50h), once daily, minimal reflex tachycardia

### Non-Dihydropyridines (Verapamil, Diltiazem)
- Block L-type Ca2+ channels in heart > vessels
- Reduce HR, contractility, AV conduction
- Verapamil: most potent negative inotrope CCB, causes constipation
- Diltiazem: intermediate between DHP and verapamil

## Stepped-Care Approach (Indian HTN Guidelines)
1. Stage 1: Monotherapy (ACEi/ARB or CCB or thiazide)
2. Stage 2: Dual therapy (ACEi/ARB + CCB or ACEi/ARB + diuretic)
3. Resistant: Triple therapy (ACEi/ARB + CCB + diuretic)
4. Add spironolactone for truly resistant HTN

> **Key**: NEVER combine ACEi + ARB (ONTARGET trial - increased hyperkalemia, renal failure, no benefit).`,
        mnemonics: [
          {
            text: "RAAS cascade: Really Angry Arteries Ache (Renin -> Angiotensinogen -> Ang I -> Ang II -> AT1)",
            explanation:
              "The RAAS pathway leads to vasoconstriction and Na+/water retention. ACEi block the conversion of Ang I to Ang II; ARBs block the AT1 receptor.",
          },
          {
            text: "ACEi are RENOPROTECTIVE: Efferent arteriole dilation reduces glomerular pressure",
            explanation:
              "ACE inhibitors preferentially dilate the efferent arteriole, reducing intraglomerular pressure and proteinuria - protective in diabetic nephropathy.",
          },
        ],
        keyPoints: [
          "RAAS: Ang II causes vasoconstriction, aldosterone release, remodeling",
          "ACEi: reduce Ang II + increase bradykinin -> cough but renoprotective",
          "ARBs: block AT1, no bradykinin effect, no cough",
          "Amlodipine: long-acting DHP CCB, first-line in India",
          "Never combine ACEi + ARB (increased adverse events, no added benefit)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 38", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "antihypertensive-drugs-clinical",
        title: "Antihypertensive Drugs - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Hypertension treatment in special populations: diabetes, CKD, pregnancy, elderly. Hypertensive emergencies and Indian prescribing patterns.",
        contentMd: `# Clinical Applications

## HTN in Special Populations

| Population | Preferred Drug | Avoid |
|------------|---------------|-------|
| **Diabetes + HTN** | ACEi/ARB (renoprotective) | Thiazides (worsen glucose) |
| **CKD + proteinuria** | ACEi/ARB | NSAIDs |
| **Pregnancy** | Methyldopa, Labetalol, Nifedipine | ACEi, ARBs (teratogenic!) |
| **Heart failure** | ACEi/ARB + Beta-blocker + Spironolactone | Verapamil, Diltiazem |
| **Post-MI** | ACEi + Beta-blocker | Short-acting nifedipine |
| **Elderly (isolated systolic)** | Amlodipine or Thiazide | Alpha-blockers (postural hypotension) |
| **BPH + HTN** | Alpha-1 blocker (Prazosin/Tamsulosin) | - |

## ACEi/ARB Contraindications
- Pregnancy (teratogenic - renal agenesis, oligohydramnios)
- Bilateral renal artery stenosis (depends on Ang II for GFR)
- Hyperkalemia (K+ > 5.5 mEq/L)
- Angioedema history (for ACEi)

## Hypertensive Emergency
- BP >180/120 with target organ damage
- **IV drugs**: Labetalol, Nitroprusside, Nitroglycerin, Nicardipine, Enalaprilat
- **Goal**: Reduce MAP by 25% in first hour
- Nitroprusside: fastest acting but cyanide toxicity risk with prolonged use

## Hypertensive Urgency
- BP >180/120 WITHOUT organ damage
- Oral drugs: Captopril (sublingual), Clonidine, Labetalol oral
- Reduce BP over 24-48 hours (not too fast)

> **Indian Context**: Amlodipine + Telmisartan FDC is the most commonly prescribed antihypertensive combination in India. Generic versions widely available through Jan Aushadhi. Salt restriction (<5 g/day) and DASH diet are lifestyle modifications emphasized in Indian guidelines.`,
        mnemonics: [
          {
            text: "ACEi/ARB in Pregnancy = ABSOLUTELY CONTRAINDICATED (renal agenesis)",
            explanation:
              "ACE inhibitors and ARBs are teratogenic (Category X in 2nd/3rd trimester). They cause fetal renal agenesis, oligohydramnios, and skull defects. Use methyldopa or labetalol instead.",
          },
        ],
        keyPoints: [
          "Diabetic HTN: ACEi/ARB first-line (renoprotective)",
          "Pregnancy HTN: Methyldopa or Labetalol; NEVER ACEi/ARBs",
          "Hypertensive emergency: IV labetalol or nitroprusside; reduce MAP 25% in 1st hour",
          "Amlodipine + Telmisartan: most prescribed combo in India",
          "Never combine ACEi + ARB; Bilateral RAS: ACEi/ARB contraindicated",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 38-39", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "antihypertensive-drugs-exam",
        title: "Antihypertensive Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield antihypertensive facts for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- ACEi cough mechanism: **Bradykinin accumulation**
- DOC for diabetic HTN with proteinuria: **ACEi (Ramipril/Enalapril) or ARB**
- DOC for HTN in pregnancy: **Methyldopa** (safest, most experience)
- ACEi teratogenic effect: **Renal agenesis, oligohydramnios**
- CCB causing constipation: **Verapamil**
- Most commonly used CCB in India: **Amlodipine**
- CCB contraindicated in heart failure: **Verapamil, Diltiazem** (negative inotropy)
- Fastest IV antihypertensive: **Sodium nitroprusside**
- Nitroprusside toxicity: **Cyanide poisoning** (treat with thiosulfate)
- Drug for hypertensive emergency in pregnancy: **IV Labetalol**
- ACEi/ARB contraindicated in: **Pregnancy, bilateral RAS, hyperkalemia**
- ARB with longest t1/2 and PPAR-gamma activity: **Telmisartan**
- Diuretic preferred in resistant HTN: **Spironolactone**
- Direct renin inhibitor: **Aliskiren**
- Thiazide ADRs: **HypoNa, hypoK, hyperCa, hyperuricemia, hyperglycemia**

## Diuretic ADR Comparison
| Diuretic | K+ | Na+ | Ca2+ | Uric Acid |
|----------|-----|-----|------|-----------|
| Thiazide | Low | Low | High | High |
| Loop | Low | Low | Low | High |
| K+-sparing | High | Low | - | Low |`,
        mnemonics: [
          {
            text: "Thiazide HYPOs: HypoNa, HypoK, HypoMg; HYPERs: HyperCa, HyperGlycemia, HyperUricemia, HyperLipidemia",
            explanation:
              "Thiazide diuretics cause multiple electrolyte and metabolic disturbances. Remember: things that are normally low go lower (Na, K, Mg), things that are high go higher (Ca, glucose, uric acid, lipids).",
          },
        ],
        keyPoints: [
          "ACEi cough = bradykinin; switch to ARB",
          "Methyldopa: safest in pregnancy HTN",
          "Verapamil: constipation + negative inotropy (avoid in HF)",
          "Nitroprusside: fastest IV antihypertensive, risk of cyanide toxicity",
          "Thiazide: HypoNa, HypoK, HyperCa, HyperUricemia, HyperGlycemia",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 38-39", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "antihypertensive-drugs-recall",
        title: "Antihypertensive Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on antihypertensive drugs.",
        contentMd: `# Active Recall

**Q1:** Why do ACE inhibitors cause cough?
> ACEi inhibit bradykinin degradation -> bradykinin accumulates -> stimulates cough receptors in airways. Affects 10-15% of patients.

**Q2:** Why are ACEi/ARBs preferred in diabetic hypertension?
> They are renoprotective - dilate efferent arteriole, reduce intraglomerular pressure and proteinuria, slowing diabetic nephropathy progression.

**Q3:** Name 3 antihypertensives safe in pregnancy.
> Methyldopa (safest), Labetalol, Nifedipine (extended release)

**Q4:** What happens if you give ACEi in bilateral renal artery stenosis?
> Both kidneys depend on Ang II-mediated efferent arteriolar constriction for GFR. ACEi removes this -> acute renal failure.

**Q5:** Fastest-acting IV antihypertensive?
> Sodium nitroprusside (onset in seconds). Risk: cyanide toxicity with prolonged use.

**Q6:** Why should ACEi and ARB NOT be combined?
> ONTARGET trial showed combination increases hyperkalemia and renal dysfunction without additional cardiovascular benefit.

**Q7:** What are the metabolic ADRs of thiazide diuretics?
> HypoNa, HypoK, HypoMg, HyperCa, HyperGlycemia, HyperUricemia, HyperLipidemia.

**Q8:** Which CCB causes constipation and why?
> Verapamil - blocks Ca2+ channels in GI smooth muscle, reducing motility.`,
        mnemonics: [],
        keyPoints: ["8 recall questions on antihypertensive drugs"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 38-39", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 2: Antianginal Drugs ─────────────────────────────
  {
    topicCode: "PH-MOD-03-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "antianginal-drugs-foundation",
        title: "Antianginal Drugs - Foundation",
        estimatedMinutes: 20,
        summary:
          "Angina results from myocardial O2 demand exceeding supply. Three drug classes: nitrates (GTN), beta-blockers, and calcium channel blockers. Treatment strategy reduces demand and/or increases supply.",
        contentMd: `# Antianginal Drugs

## Pathophysiology of Angina
**Angina = Myocardial O2 demand > O2 supply**

### Types of Angina
| Type | Mechanism | Treatment |
|------|-----------|-----------|
| **Stable (exertional)** | Fixed atherosclerotic plaque | Nitrates + Beta-blocker/CCB |
| **Unstable** | Plaque rupture + thrombosis | Antiplatelets + anticoagulants + antianginals |
| **Variant (Prinzmetal)** | Coronary vasospasm | CCB + nitrates (NO beta-blockers!) |

## Drug Classes

### 1. Nitrates
| Drug | Route | Onset | Duration |
|------|-------|-------|----------|
| **GTN (Nitroglycerin)** | Sublingual | 1-2 min | 30 min |
| **GTN patch** | Transdermal | 30 min | 8-12h (remove at night) |
| **Isosorbide dinitrate (ISDN)** | Oral | 30 min | 4-6h |
| **Isosorbide mononitrate (ISMN)** | Oral | 30-60 min | 8-12h |

### 2. Beta-Blockers
- Metoprolol, Atenolol, Propranolol
- Reduce HR, contractility, BP -> decrease O2 demand
- First-line for stable angina prophylaxis

### 3. Calcium Channel Blockers
- **Amlodipine, Nifedipine**: Vasodilation (reduce afterload)
- **Verapamil, Diltiazem**: Reduce HR + vasodilation
- Verapamil/Diltiazem for Prinzmetal angina (coronary vasospasm)

### 4. Newer Agents
- **Ranolazine**: Inhibits late Na+ current -> reduces Ca2+ overload
- **Ivabradine**: Selective If channel blocker -> reduces HR without affecting contractility
- **Trimetazidine**: Metabolic modulator (shifts metabolism from fatty acid to glucose oxidation)`,
        mnemonics: [
          {
            text: "Prinzmetal = SPAsm = CCB, not Beta-Blockers (BB may worsen spasm)",
            explanation:
              "In Prinzmetal (variant) angina caused by coronary vasospasm, CCBs (verapamil, diltiazem, amlodipine) are preferred. Beta-blockers may worsen spasm by allowing unopposed alpha-mediated vasoconstriction.",
          },
          {
            text: "GTN works in 1-2 min SubLingual because it bypasses first-pass",
            explanation:
              "GTN undergoes 90% first-pass metabolism orally. Sublingual route provides rapid onset for acute angina relief.",
          },
        ],
        keyPoints: [
          "Angina = O2 demand > supply; treatment reduces demand or increases supply",
          "GTN sublingual: acute angina relief (onset 1-2 min)",
          "Beta-blockers: first-line prophylaxis for stable angina",
          "Prinzmetal angina: CCBs preferred, avoid beta-blockers",
          "Nitrate tolerance: managed with 8-12h nitrate-free interval",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 39 - Antianginal Drugs", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 27", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "antianginal-drugs-mechanism",
        title: "Antianginal Drugs - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Nitrate mechanism (NO -> cGMP -> vasodilation), nitrate tolerance, beta-blocker and CCB mechanisms in angina, and coronary steal phenomenon.",
        contentMd: `# Mechanisms

## Nitrate Mechanism
GTN -> (in smooth muscle) -> **NO (nitric oxide)** -> activates **guanylyl cyclase** -> increases **cGMP** -> smooth muscle relaxation

### Hemodynamic Effects
| Effect | Mechanism | Consequence |
|--------|-----------|-------------|
| **Venodilation** (primary at low doses) | Reduces preload | Decreases ventricular wall tension and O2 demand |
| **Arteriolar dilation** (at higher doses) | Reduces afterload | Decreases BP and O2 demand |
| **Coronary dilation** | Dilates epicardial coronary arteries | Increases O2 supply (especially in vasospasm) |
| **Collateral dilation** | Opens collateral vessels | Redirects flow to ischemic areas |

### Nitrate Tolerance
- Continuous nitrate exposure -> decreased response
- Mechanism: Sulfhydryl group depletion in smooth muscle (cannot convert GTN to NO)
- **Prevention**: 8-12 hour nitrate-free interval (remove patch at night)
- N-acetylcysteine may help restore sulfhydryl groups

## Beta-Blocker Mechanism in Angina
- Reduce HR (decreased O2 demand) - most important effect
- Reduce contractility (decreased O2 demand)
- Reduce BP (decreased afterload)
- Increase diastolic filling time (increased coronary perfusion)
- Contraindicated in Prinzmetal angina (may worsen spasm)

## CCB Mechanism in Angina
- **DHPs (Amlodipine)**: Reduce afterload (vasodilation), mild reflex tachycardia
- **Non-DHPs (Verapamil, Diltiazem)**: Reduce HR + afterload, dilate coronaries
- In Prinzmetal angina: Directly relieve coronary vasospasm

## Coronary Steal Phenomenon
- Dipyridamole dilates normal coronaries but NOT stenosed ones
- Blood diverted FROM ischemic areas (with fixed stenosis) TO normal areas
- Used diagnostically (dipyridamole stress test) but NOT for angina treatment

## Drug Interactions
- **GTN + Sildenafil** (PDE5 inhibitor): SEVERE HYPOTENSION - contraindicated!
  - Both increase cGMP -> additive vasodilation
  - Wait 24h after sildenafil, 48h after tadalafil before giving nitrates`,
        mnemonics: [
          {
            text: "NO-cGMP-relax: Nitrates release NO -> cGMP up -> smooth muscle relaxation",
            explanation:
              "Nitrate mechanism: Drug -> NO -> activates guanylyl cyclase -> cGMP increase -> dephosphorylation of myosin light chain -> smooth muscle relaxation -> vasodilation.",
          },
          {
            text: "NEVER GTN + Viagra (both increase cGMP = FATAL hypotension)",
            explanation:
              "Sildenafil (Viagra) inhibits PDE5 which breaks down cGMP. Combined with nitrates (which increase cGMP), this causes dangerous additive vasodilation and severe hypotension.",
          },
        ],
        keyPoints: [
          "Nitrates: NO -> cGMP -> smooth muscle relaxation; primarily venodilation",
          "Nitrate tolerance: sulfhydryl depletion; prevent with nitrate-free interval",
          "GTN + PDE5 inhibitors (sildenafil): CONTRAINDICATED (severe hypotension)",
          "Beta-blockers: reduce HR = most important antianginal effect",
          "Coronary steal: dipyridamole diverts blood from ischemic areas",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 39", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "antianginal-drugs-clinical",
        title: "Antianginal Drugs - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Management of stable angina, ACS, Prinzmetal angina, and revascularization decisions. Indian clinical practice.",
        contentMd: `# Clinical Applications

## Acute Angina Attack
- **GTN 0.5 mg sublingual** (can repeat every 5 min x 3 doses)
- If no relief after 3 doses -> suspect MI -> activate emergency protocol
- Sit or lie down before taking GTN (postural hypotension risk)

## Stable Angina Prophylaxis
1. **First-line**: Beta-blocker (metoprolol) OR rate-limiting CCB (diltiazem)
2. **Add-on**: Long-acting nitrate (ISMN) with nitrate-free interval
3. **Newer options**: Ivabradine (if beta-blocker contraindicated or intolerant), Ranolazine, Trimetazidine
4. **Always add**: Aspirin + Statin (ASCVD risk reduction)

## Acute Coronary Syndrome (ACS) Management
- **MONA**: Morphine, Oxygen, Nitrates, Aspirin (+ Clopidogrel/Ticagrelor)
- IV GTN infusion for ongoing ischemia
- Beta-blocker within 24h (if no contraindications)
- Heparin (UFH or LMWH) for anticoagulation
- PCI (Percutaneous Coronary Intervention) for STEMI

## Prinzmetal (Variant) Angina
- **CCBs are DOC**: Amlodipine, Diltiazem, or Verapamil
- Long-acting nitrates as adjunct
- **Avoid beta-blockers** (may worsen vasospasm by unopposed alpha stimulation)

> **Indian Context**: Generic ISMN and amlodipine are widely available and affordable through Jan Aushadhi. Stent-based PCI is available at many district hospitals under Ayushman Bharat for ACS.

## Important Clinical Points
- GTN spray preferred over tablets (longer shelf life, more reliable)
- Headache is the most common ADR of nitrates (meningeal vasodilation)
- Methemoglobinemia: rare but serious ADR of nitrates at very high doses`,
        mnemonics: [
          {
            text: "MONA for ACS: Morphine, Oxygen, Nitrates, Aspirin",
            explanation:
              "Initial management of acute coronary syndrome. Note: Routine oxygen is no longer recommended unless SpO2 < 90%. Aspirin 325 mg chewed immediately is critical.",
          },
        ],
        keyPoints: [
          "GTN SL for acute angina; up to 3 doses every 5 min, then suspect MI",
          "Stable angina: Beta-blocker first-line + Aspirin + Statin",
          "ACS: MONA + Anticoagulation + PCI for STEMI",
          "Prinzmetal: CCB first-line, avoid beta-blockers",
          "GTN + Sildenafil: ABSOLUTELY CONTRAINDICATED",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 39", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "antianginal-drugs-exam",
        title: "Antianginal Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield antianginal facts for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Nitrate mechanism: **NO -> cGMP -> smooth muscle relaxation**
- GTN primary hemodynamic effect: **Venodilation (reduces preload)**
- Nitrate tolerance mechanism: **Sulfhydryl group depletion**
- Nitrate tolerance prevention: **8-12h nitrate-free interval**
- GTN contraindication: **Concurrent PDE5 inhibitor (sildenafil)**
- DOC for Prinzmetal angina: **Calcium channel blocker**
- Drug contraindicated in Prinzmetal angina: **Beta-blocker**
- Coronary steal caused by: **Dipyridamole**
- Selective If channel blocker: **Ivabradine** (pure HR reduction)
- Metabolic antianginal: **Trimetazidine** (shifts to glucose oxidation)
- Late Na+ current blocker: **Ranolazine**
- Most common ADR of nitrates: **Headache** (meningeal vasodilation)
- GTN shelf life problem solved by: **GTN spray** (vs tablets)

## Drug Comparison for Angina Types
| Angina Type | First-Line | Avoid |
|-------------|-----------|-------|
| Stable | Beta-blocker + PRN GTN | - |
| Unstable/ACS | Antiplatelet + Anticoagulant + Beta-blocker + Nitrate | - |
| Prinzmetal | CCB (verapamil/amlodipine) | Beta-blocker |`,
        mnemonics: [
          {
            text: "Ivabradine = I Only Reduce Heart Rate (If channel, no BP effect)",
            explanation:
              "Ivabradine selectively blocks the If (funny) channel in the SA node, reducing heart rate without affecting BP or contractility. Used when beta-blockers are contraindicated.",
          },
        ],
        keyPoints: [
          "GTN: NO -> cGMP; primarily venodilation; tolerance = SH depletion",
          "GTN + sildenafil = contraindicated (fatal hypotension)",
          "Prinzmetal: CCB first-line, NO beta-blockers",
          "Ivabradine: pure HR reduction (If channel block)",
          "Dipyridamole causes coronary steal - not used therapeutically for angina",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 39", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "antianginal-drugs-recall",
        title: "Antianginal Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on antianginal drugs.",
        contentMd: `# Active Recall

**Q1:** Mechanism of action of nitrates?
> Nitrates release NO in smooth muscle -> activates guanylyl cyclase -> increases cGMP -> smooth muscle relaxation -> vasodilation (primarily venodilation).

**Q2:** Why does nitrate tolerance develop and how is it prevented?
> Tolerance due to sulfhydryl group depletion in vascular smooth muscle. Prevented by 8-12h nitrate-free interval (e.g., remove GTN patch at night).

**Q3:** Why is GTN contraindicated with sildenafil?
> Both increase cGMP (GTN produces NO -> cGMP; Sildenafil inhibits PDE5 that breaks down cGMP). Combined = severe, potentially fatal hypotension.

**Q4:** DOC for Prinzmetal angina? What to avoid?
> CCBs (verapamil, amlodipine) are DOC. Avoid beta-blockers (may worsen coronary vasospasm via unopposed alpha stimulation).

**Q5:** What is coronary steal phenomenon?
> Dipyridamole dilates normal coronary arteries but not stenosed ones, diverting blood away from ischemic myocardium. Used for diagnostic stress testing, not therapy.

**Q6:** What is ivabradine's mechanism?
> Selective If (funny) channel blocker in SA node. Reduces HR without affecting BP, contractility, or conduction.

**Q7:** Acute angina management protocol?
> GTN 0.5 mg sublingual, repeat every 5 min up to 3 doses. No relief after 15 min -> suspect MI -> emergency activation.

**Q8:** Most common ADR of nitrates?
> Headache (due to meningeal artery vasodilation). Usually subsides with continued use.`,
        mnemonics: [],
        keyPoints: ["8 recall questions on antianginal drugs"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 39", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 3: Drugs for Heart Failure ───────────────────────
  {
    topicCode: "PH-MOD-03-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "heart-failure-drugs-foundation",
        title: "Drugs for Heart Failure - Foundation",
        estimatedMinutes: 20,
        summary:
          "Heart failure treatment aims to reduce mortality and symptoms. Core drugs: ACEi/ARB, beta-blockers (specific ones), diuretics, spironolactone, and digoxin.",
        contentMd: `# Drugs for Heart Failure

## Heart Failure Basics
- Systolic HF (HFrEF): EF < 40% - impaired contractility
- Diastolic HF (HFpEF): EF preserved - impaired relaxation
- Most drug evidence is for HFrEF

## Drug Classes in HFrEF

### Mortality-Reducing Drugs (THE BIG FOUR)
1. **ACEi/ARB** (Enalapril, Ramipril / Valsartan)
2. **Beta-blockers** (Carvedilol, Metoprolol succinate, Bisoprolol ONLY)
3. **Mineralocorticoid Receptor Antagonists** (Spironolactone, Eplerenone)
4. **ARNI**: Sacubitril/Valsartan (Entresto) - superior to ACEi alone

### Symptom-Relieving Drugs
- **Diuretics** (Furosemide): Volume overload, edema relief
- **Digoxin**: Improves symptoms, does NOT reduce mortality

### Newer Additions
- **SGLT2 inhibitors** (Dapagliflozin, Empagliflozin): Mortality benefit in HF (even non-diabetics!)
- **Ivabradine**: If HR > 70 despite beta-blocker

## Digoxin (Cardiac Glycoside)
- MOA: Inhibits Na+/K+ ATPase -> increases intracellular Na+ -> Na+/Ca2+ exchanger reversal -> increased intracellular Ca2+ -> increased contractility (positive inotropy)
- Also increases vagal tone (slows HR - useful in AF)
- Narrow therapeutic index (0.5-2 ng/mL)
- NOT renally adjusted but renally excreted
- Toxicity enhanced by: HypoK, HyperCa, hypoMg, renal failure

## Diuretics in HF
| Diuretic | Use |
|----------|-----|
| **Furosemide** | Acute decompensated HF (IV), chronic volume overload |
| **Spironolactone** | Mortality reduction (RALES trial), reduces remodeling |
| **Thiazide** | Added to loop if resistant edema |`,
        mnemonics: [
          {
            text: "HF mortality drugs = ABMS: ACEi, Beta-blocker, MRA (spironolactone), SGLT2i",
            explanation:
              "Four drug classes with proven mortality benefit in HFrEF. All patients with HFrEF should be on all four unless contraindicated.",
          },
          {
            text: "Only CMB beta-blockers in HF: Carvedilol, Metoprolol succinate, Bisoprolol",
            explanation:
              "NOT all beta-blockers work in HF. Only these three have RCT evidence for mortality reduction. Other beta-blockers may worsen HF.",
          },
        ],
        keyPoints: [
          "HFrEF core therapy: ACEi/ARB + Beta-blocker (CMB) + MRA + SGLT2i",
          "Digoxin: positive inotropy via Na/K ATPase inhibition; narrow TI",
          "Diuretics (furosemide): symptom relief only, no mortality benefit",
          "Spironolactone: mortality benefit (RALES trial) + K+-sparing",
          "ARNI (Sacubitril/Valsartan): superior to ACEi alone in HFrEF",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 37 - Drugs for Heart Failure", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 29", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "heart-failure-drugs-mechanism",
        title: "Drugs for Heart Failure - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Digoxin mechanism in detail, neurohormonal blockade in HF, ARNI mechanism, SGLT2 inhibitor mechanism in HF, and inotrope pharmacology.",
        contentMd: `# Mechanisms

## Digoxin Detailed Mechanism
1. Inhibits Na+/K+ ATPase on myocyte membrane
2. Intracellular Na+ rises
3. Na+/Ca2+ exchanger (NCX) cannot export Ca2+ efficiently (less Na+ gradient)
4. Intracellular Ca2+ rises
5. More Ca2+ available for contraction -> **positive inotropy**

### Digoxin Vagal Effects
- Stimulates vagus nerve -> slows SA node (negative chronotropy)
- Prolongs AV node refractory period -> controls ventricular rate in AF
- "Regularizes irregularly irregular rhythm"

### Digoxin ECG Changes
- **Therapeutic**: ST depression ("Salvador Dali sagging"), T wave inversion, shortened QTc, PR prolongation
- **Toxic**: ANY arrhythmia (bidirectional VT pathognomonic), AV block, PAT with block

## Neurohormonal Blockade (Why Drugs Work in HF)
In HF, compensatory mechanisms become maladaptive:
- RAAS activation -> ACEi/ARB block this
- Sympathetic activation -> Beta-blockers block this
- Aldosterone -> MRA blocks this
- All reduce remodeling (fibrosis, hypertrophy, apoptosis)

## ARNI: Sacubitril/Valsartan
- **Sacubitril**: Neprilysin inhibitor -> increases natriuretic peptides (ANP, BNP) -> vasodilation, natriuresis, reduces fibrosis
- **Valsartan**: ARB -> blocks RAAS
- Combined = dual neurohormonal blockade
- PARADIGM-HF trial: 20% mortality reduction vs enalapril
- Cannot combine with ACEi (36h washout needed - angioedema risk)

## SGLT2 Inhibitors in HF
- Dapagliflozin (DAPA-HF), Empagliflozin (EMPEROR-Reduced)
- Mechanism in HF: Osmotic diuresis, reduced preload, improved cardiac energetics, reduced inflammation
- Benefit independent of diabetes status

## IV Inotropes (Acute Decompensated HF)
| Drug | Mechanism | Use |
|------|-----------|-----|
| **Dobutamine** | Beta-1 agonist | Cardiogenic shock |
| **Milrinone** | PDE3 inhibitor (increases cAMP) | Acute HF, bridge to transplant |
| **Levosimendan** | Ca2+ sensitizer | Acute decompensated HF |`,
        mnemonics: [
          {
            text: "Digoxin: Na/K ATPase -> Na up -> Ca up -> Contraction UP",
            explanation:
              "Digoxin inhibits Na/K ATPase -> Na accumulates inside cell -> NCX exchanger cannot pump Ca out -> Ca rises -> stronger contraction.",
          },
          {
            text: "PARADIGM for ARNI: PARADIGM-HF trial proved Sacubitril/Valsartan superior to Enalapril",
            explanation:
              "The PARADIGM-HF trial showed Sacubitril/Valsartan reduced mortality by 20% compared to enalapril in HFrEF, making it a landmark heart failure drug.",
          },
        ],
        keyPoints: [
          "Digoxin: Na/K ATPase inhibition -> increased intracellular Ca -> positive inotropy",
          "Digoxin also increases vagal tone (controls AF rate)",
          "ARNI (Sacubitril/Valsartan): neprilysin inhibition + ARB, 20% mortality reduction",
          "SGLT2i in HF: benefit independent of diabetes (DAPA-HF, EMPEROR-Reduced)",
          "IV inotropes for acute HF: Dobutamine, Milrinone, Levosimendan",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 37", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "heart-failure-drugs-clinical",
        title: "Drugs for Heart Failure - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Practical HF management: acute vs chronic, digoxin toxicity management, and Indian clinical context.",
        contentMd: `# Clinical Applications

## Chronic HFrEF: Step-Wise Therapy
1. **All patients**: ACEi/ARB (or ARNI) + Beta-blocker (CMB) + MRA
2. **Add SGLT2i** (Dapagliflozin/Empagliflozin)
3. **Diuretics** for volume overload (furosemide PRN)
4. **Digoxin** if still symptomatic or for rate control in AF
5. **Ivabradine** if HR > 70 despite maximal beta-blocker
6. **Device therapy**: ICD, CRT for selected patients

## Acute Decompensated Heart Failure
- **IV Furosemide**: First-line for volume overload
- **IV Nitroglycerin**: If SBP > 110 (reduces preload)
- **Dobutamine/Milrinone**: If cardiogenic shock (low BP, poor perfusion)
- **Noradrenaline**: If sepsis-related cardiogenic shock

## Digoxin Toxicity
### Risk Factors
- **HypoK** (most important!) - competes with digoxin for Na/K ATPase binding
- HyperCa, HypoMg
- Renal failure (digoxin is renally excreted)
- Drug interactions: Quinidine, Verapamil, Amiodarone (displace digoxin from tissue, reduce renal clearance)

### Clinical Features
- GI: Nausea, vomiting, anorexia
- CVS: ANY arrhythmia (bidirectional VT is pathognomonic), AV block, PAT with block
- CNS: Yellow vision (xanthopsia), confusion

### Treatment
- Stop digoxin + correct hypoK/hypoMg
- **Digoxin-specific Fab antibodies (Digibind)** for severe toxicity
- Atropine for bradyarrhythmias
- Avoid cardioversion (may cause fatal VF)

> **Indian Context**: Digoxin is still widely used in India due to low cost (Rs 2-5 per tablet). K+ monitoring is essential but often neglected in rural settings. SGLT2 inhibitors becoming more accessible with generic Indian manufacturers.`,
        mnemonics: [
          {
            text: "Digoxin toxicity = ANY arrhythmia + yellow vision + GI symptoms",
            explanation:
              "Digoxin toxicity can cause virtually any arrhythmia. Bidirectional VT is pathognomonic. Yellow vision (xanthopsia) and GI symptoms (nausea, vomiting) are classic features.",
          },
        ],
        keyPoints: [
          "HFrEF: ACEi/ARNI + CMB beta-blocker + MRA + SGLT2i (quadruple therapy)",
          "Digoxin toxicity: hypoK is the most important risk factor",
          "Bidirectional VT is pathognomonic of digoxin toxicity",
          "Digibind (Fab antibodies) for severe digoxin toxicity",
          "Acute HF: IV furosemide for volume overload, dobutamine for shock",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 37", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "heart-failure-drugs-exam",
        title: "Drugs for Heart Failure - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield heart failure pharmacology for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Digoxin MOA: **Inhibits Na+/K+ ATPase**
- Digoxin therapeutic range: **0.5-2 ng/mL**
- Pathognomonic arrhythmia of digoxin toxicity: **Bidirectional VT**
- Most important factor precipitating digoxin toxicity: **Hypokalemia**
- Digoxin antidote: **Digoxin-specific Fab antibodies (Digibind)**
- Drugs increasing digoxin levels: **Quinidine, Verapamil, Amiodarone**
- ECG of digoxin effect (not toxicity): **ST depression (reverse tick/Salvador Dali sagging)**
- Beta-blockers in HF: **Only Carvedilol, Metoprolol succinate, Bisoprolol**
- ARNI components: **Sacubitril (neprilysin inhibitor) + Valsartan (ARB)**
- PARADIGM-HF trial: **Sacubitril/Valsartan > Enalapril in HFrEF**
- MRA reducing mortality in HF: **Spironolactone (RALES trial)**
- Digoxin vision change: **Xanthopsia (yellow vision)**
- PDE3 inhibitor for acute HF: **Milrinone**
- Avoid in digoxin toxicity: **Cardioversion** (risk of fatal VF)
- Digoxin NOT used in: **HFpEF, hypertrophic cardiomyopathy**

## HF Drug Trials
| Trial | Drug | Finding |
|-------|------|---------|
| PARADIGM-HF | Sacubitril/Valsartan | Superior to enalapril |
| RALES | Spironolactone | Mortality reduction |
| DAPA-HF | Dapagliflozin | Mortality reduction (even non-DM) |
| MERIT-HF | Metoprolol succinate | Mortality reduction |
| COPERNICUS | Carvedilol | Mortality reduction |`,
        mnemonics: [
          {
            text: "Digoxin + HypoK = Disaster (K competes with digoxin for Na/K ATPase)",
            explanation:
              "HypoK is the most important precipitant of digoxin toxicity. Low K means more digoxin binds to Na/K ATPase -> toxicity. Always check K before starting digoxin.",
          },
        ],
        keyPoints: [
          "Digoxin: Na/K ATPase inhibitor, narrow TI, hypoK precipitates toxicity",
          "Bidirectional VT = pathognomonic of digoxin toxicity",
          "HF mortality drugs: ACEi/ARNI + CMB + MRA + SGLT2i",
          "PARADIGM-HF: Sacubitril/Valsartan > Enalapril",
          "RALES: Spironolactone reduces mortality in HF",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 37", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "heart-failure-drugs-recall",
        title: "Drugs for Heart Failure - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on heart failure drugs.",
        contentMd: `# Active Recall

**Q1:** Mechanism of digoxin's positive inotropic effect?
> Inhibits Na+/K+ ATPase -> intracellular Na+ rises -> Na+/Ca2+ exchanger (NCX) reverses -> intracellular Ca2+ increases -> stronger contraction.

**Q2:** Name the 3 beta-blockers with proven mortality benefit in HF.
> Carvedilol, Metoprolol succinate, Bisoprolol (CMB)

**Q3:** What is the pathognomonic arrhythmia of digoxin toxicity?
> Bidirectional ventricular tachycardia

**Q4:** Most important electrolyte abnormality precipitating digoxin toxicity?
> Hypokalemia (K+ competes with digoxin for binding to Na/K ATPase)

**Q5:** What is Sacubitril/Valsartan and which trial proved its benefit?
> ARNI: Sacubitril (neprilysin inhibitor) + Valsartan (ARB). PARADIGM-HF trial showed 20% mortality reduction vs enalapril in HFrEF.

**Q6:** Do SGLT2 inhibitors benefit non-diabetic HF patients?
> Yes. DAPA-HF and EMPEROR-Reduced trials showed mortality/hospitalization reduction in HFrEF regardless of diabetes status.

**Q7:** How is severe digoxin toxicity treated?
> Stop digoxin, correct hypoK/hypoMg, Digoxin-specific Fab antibodies (Digibind). Atropine for bradyarrhythmias. Avoid cardioversion.

**Q8:** Drugs that increase digoxin levels?
> Quinidine, Verapamil, Amiodarone (all displace digoxin from tissue binding sites and/or reduce renal clearance).`,
        mnemonics: [],
        keyPoints: ["8 recall questions on heart failure pharmacotherapy"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 37", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 4: Antiarrhythmic Drugs ──────────────────────────
  {
    topicCode: "PH-MOD-03-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "antiarrhythmic-drugs-foundation",
        title: "Antiarrhythmic Drugs - Foundation",
        estimatedMinutes: 20,
        summary:
          "Antiarrhythmics are classified by the Vaughan-Williams system into 4 classes based on mechanism. Amiodarone is the most versatile. Treatment depends on arrhythmia type.",
        contentMd: `# Antiarrhythmic Drugs

## Vaughan-Williams Classification

| Class | Mechanism | Drugs | ECG Effect |
|-------|-----------|-------|------------|
| **Ia** | Na+ channel block (moderate) | Quinidine, Procainamide, Disopyramide | Prolongs QT |
| **Ib** | Na+ channel block (mild, fast kinetics) | Lidocaine, Mexiletine, Phenytoin | Shortens/no change QT |
| **Ic** | Na+ channel block (strong) | Flecainide, Propafenone | Widens QRS |
| **II** | Beta-blockers | Propranolol, Metoprolol, Esmolol | Slows HR, prolongs PR |
| **III** | K+ channel block | Amiodarone, Sotalol, Dofetilide | Prolongs QT |
| **IV** | Ca2+ channel block | Verapamil, Diltiazem | Slows AV conduction, prolongs PR |

## Other Antiarrhythmics (Not in V-W Classification)
- **Adenosine**: Purine nucleoside, activates A1 receptors -> opens K+ channels in AV node -> transient AV block. DOC for SVT (PSVT).
- **Digoxin**: Slows AV conduction via vagal stimulation. Rate control in AF.
- **MgSO4**: For Torsades de Pointes (polymorphic VT with long QT)
- **Atropine**: For symptomatic bradycardia

## Key Drug: Amiodarone
- Has properties of ALL 4 classes (Na+, Beta, K+, Ca2+ channel block)
- Most effective antiarrhythmic for both atrial and ventricular arrhythmias
- Very long half-life: **40-55 days** (accumulates in tissues)
- Numerous serious ADRs (thyroid, pulmonary, hepatic, corneal, skin)`,
        mnemonics: [
          {
            text: "Some Block Potassium Channels: Sodium (I), Beta (II), Potassium (III), Calcium (IV)",
            explanation:
              "Vaughan-Williams classes I-IV correspond to Na+ channel block, Beta-blockade, K+ channel block, and Ca2+ channel block respectively.",
          },
          {
            text: "Lidocaine = 1B = 1 Best for ventricular arrhythmias post-MI",
            explanation:
              "Class Ib drugs (Lidocaine, Mexiletine) are effective for ventricular arrhythmias, especially post-MI. Lidocaine is given IV only (high first-pass effect).",
          },
        ],
        keyPoints: [
          "V-W Classification: I (Na), II (Beta), III (K), IV (Ca)",
          "Amiodarone: properties of all 4 classes, most effective, very long t1/2",
          "Adenosine: DOC for PSVT (transient AV block)",
          "MgSO4: DOC for Torsades de Pointes",
          "Class Ia and III prolong QT (risk of Torsades)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 40 - Antiarrhythmic Drugs", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 30", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "antiarrhythmic-drugs-mechanism",
        title: "Antiarrhythmic Drugs - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed cardiac electrophysiology, Na/K/Ca channel effects on action potential, amiodarone pharmacology, and proarrhythmic risk.",
        contentMd: `# Mechanisms

## Cardiac Action Potential Phases
| Phase | Ion Current | V-W Class Acting |
|-------|-------------|-----------------|
| 0 (Rapid depolarization) | Na+ influx | Class I blocks this |
| 1 (Early repolarization) | K+ efflux | - |
| 2 (Plateau) | Ca2+ influx = K+ efflux | Class IV blocks Ca2+ |
| 3 (Repolarization) | K+ efflux | Class III blocks this |
| 4 (Resting/pacemaker) | If current (SA/AV nodes) | Ivabradine blocks If |

## Class I Subclassification

| Subclass | Na+ Block Kinetics | APD | QT | Use |
|----------|-------------------|-----|----|-----|
| Ia | Intermediate | Prolongs | Prolongs | Atrial + ventricular |
| Ib | Fast (bind depolarized tissue) | Shortens | No change | Ventricular only |
| Ic | Slow (strongest block) | No change | No change | Atrial (SVT, AF) |

## Amiodarone Detailed Pharmacology
- **Class I**: Na+ channel block
- **Class II**: Non-competitive beta-blockade
- **Class III**: K+ channel block (most important - prolongs APD and ERP)
- **Class IV**: Ca2+ channel block
- Also: Vasodilation, coronary dilation
- **t1/2: 40-55 days** (lipophilic, accumulates in tissues)
- Contains iodine (37% by weight) -> thyroid effects

### Amiodarone ADRs (BITCH)
| Organ | ADR |
|-------|-----|
| **B**ronchopulmonary | Pulmonary fibrosis (potentially fatal) |
| **I**odine/thyroid | Hypothyroidism or hyperthyroidism |
| **T**oxic to liver | Hepatotoxicity |
| **C**ornea | Corneal microdeposits (nearly 100%, usually benign) |
| **H**eart | Bradycardia, QT prolongation, Torsades |
| Skin | Blue-grey discoloration (photodermatosis) |
| Peripheral nerves | Peripheral neuropathy |

## Proarrhythmic Risk
- Class Ia and III prolong QT -> risk of Torsades de Pointes
- Class Ic: Can worsen arrhythmias in structural heart disease (CAST trial - increased mortality)
- Amiodarone: Lowest proarrhythmic risk among Class III drugs despite QT prolongation`,
        mnemonics: [
          {
            text: "BITCH for Amiodarone ADRs",
            explanation:
              "Bronchopulmonary fibrosis, Iodine/thyroid dysfunction, Toxic to liver (hepatotoxicity), Corneal microdeposits, Heart (bradycardia/QT prolongation). Plus: blue-grey skin, peripheral neuropathy.",
          },
          {
            text: "Class Ic CAST out post-MI (CAST trial: Flecainide increased mortality post-MI)",
            explanation:
              "The CAST trial showed Class Ic drugs (flecainide, encainide) increased mortality in post-MI patients despite suppressing PVCs. Avoid in structural heart disease.",
          },
        ],
        keyPoints: [
          "Phase 0 = Na+ (Class I blocks); Phase 3 = K+ (Class III blocks); Phase 2 = Ca2+ (Class IV)",
          "Amiodarone: all 4 class properties, t1/2 40-55 days, 37% iodine",
          "Amiodarone ADRs: BITCH + blue-grey skin + peripheral neuropathy",
          "Class Ic contraindicated post-MI (CAST trial - increased mortality)",
          "QT prolongation from Class Ia, III -> Torsades de Pointes risk",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 40", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "antiarrhythmic-drugs-clinical",
        title: "Antiarrhythmic Drugs - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Arrhythmia-specific drug choices, ACLS protocols, AF management, and Torsades treatment.",
        contentMd: `# Clinical Applications

## Arrhythmia-Specific Drug Choice
| Arrhythmia | First-Line Drug |
|------------|----------------|
| **PSVT (acute)** | Adenosine 6 mg rapid IV push (then 12 mg) |
| **Atrial fibrillation (rate control)** | Beta-blocker or Diltiazem/Verapamil |
| **AF (rhythm control)** | Amiodarone or Flecainide (no structural heart disease) |
| **Ventricular tachycardia (stable)** | Amiodarone IV |
| **VF/Pulseless VT** | Defibrillation + Amiodarone 300 mg IV bolus |
| **Torsades de Pointes** | IV MgSO4 2 g + overdrive pacing |
| **Symptomatic bradycardia** | Atropine 0.5-1 mg IV |

## Adenosine for SVT
- 6 mg rapid IV push into large vein followed by saline flush
- If no response in 1-2 min: 12 mg, then another 12 mg
- Very short t1/2 (~10 seconds) - must be given FAST
- Causes transient AV block (P waves march through without QRS)
- Contraindicated in: Asthma (bronchospasm), WPW with AF (use procainamide)
- Theophylline antagonizes adenosine; Dipyridamole potentiates it

## AF Management Strategy
### Rate Control (preferred for most patients)
- Target HR < 110 bpm at rest
- **Metoprolol, Diltiazem, Verapamil** (acute and chronic)
- **Digoxin**: If HF coexists
- Amiodarone: If above fail

### Rhythm Control
- Cardioversion (electrical or pharmacological)
- **Amiodarone**: Most effective for maintaining sinus rhythm
- **Flecainide**: "Pill in the pocket" approach for paroxysmal AF (NO structural heart disease)

### Anticoagulation in AF
- CHA2DS2-VASc score determines need
- Warfarin or DOACs (dabigatran, rivaroxaban, apixaban)

> **Indian Context**: Amiodarone is the most commonly used antiarrhythmic in Indian hospitals. Adenosine is widely available but expensive per vial. Rate control strategy preferred in Indian AF management given follow-up challenges.`,
        mnemonics: [
          {
            text: "Adenosine 6-12-12 for SVT: rapid IV push + flush",
            explanation:
              "Adenosine dosing for PSVT: 6 mg first, then 12 mg if no response, then another 12 mg. Must be given as rapid bolus into proximal vein with immediate saline flush.",
          },
        ],
        keyPoints: [
          "PSVT: Adenosine 6-12-12 mg rapid IV push",
          "AF rate control: Beta-blocker or Diltiazem; rhythm: Amiodarone",
          "VF/Pulseless VT: Defibrillation + Amiodarone 300 mg IV",
          "Torsades de Pointes: IV MgSO4 2 g",
          "Adenosine contraindicated in asthma and WPW with AF",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 40", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "antiarrhythmic-drugs-exam",
        title: "Antiarrhythmic Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield antiarrhythmic facts for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- DOC for PSVT: **Adenosine** (6 mg rapid IV push)
- DOC for Torsades de Pointes: **IV MgSO4**
- Most effective antiarrhythmic: **Amiodarone** (all 4 class properties)
- Amiodarone half-life: **40-55 days**
- Amiodarone contains: **37% iodine** (causes thyroid dysfunction)
- Amiodarone corneal deposits: **Nearly 100%** (usually benign)
- Amiodarone pulmonary ADR: **Pulmonary fibrosis** (fatal)
- Class Ic drug contraindicated post-MI: **Flecainide** (CAST trial)
- Drug for VF in ACLS: **Amiodarone 300 mg IV after defibrillation**
- Lidocaine: Class **Ib**, only IV, for **ventricular arrhythmias**
- Drug causing Torsades: **Quinidine, Sotalol** (QT prolongation)
- Quinidine paradoxical effect: **Quinidine syncope** (Torsades)
- Shortest-acting antiarrhythmic: **Adenosine** (t1/2 ~10 seconds)
- Drug antagonizing adenosine: **Theophylline/Caffeine**
- Drug potentiating adenosine: **Dipyridamole**
- Blue-grey skin discoloration: **Amiodarone**

## V-W Quick Reference
| Class | Ion | Prototype | QT Effect |
|-------|-----|-----------|-----------|
| Ia | Na+ (moderate) | Quinidine | Prolongs |
| Ib | Na+ (fast) | Lidocaine | Shortens |
| Ic | Na+ (slow) | Flecainide | No change |
| II | Beta-block | Propranolol | No change |
| III | K+ | Amiodarone | Prolongs |
| IV | Ca2+ | Verapamil | No change |`,
        mnemonics: [
          {
            text: "Double Quarter Pounder: Drugs that prolong QT = Quinidine, Procainamide, Sotalol, Amiodarone, Dofetilide",
            explanation:
              "Class Ia (Quinidine, Procainamide) and Class III (Sotalol, Amiodarone, Dofetilide) prolong QT interval and carry risk of Torsades de Pointes.",
          },
        ],
        keyPoints: [
          "Adenosine: DOC for PSVT, t1/2 10 seconds",
          "Amiodarone: most effective, all 4 classes, t1/2 40-55 days",
          "BITCH mnemonic for amiodarone ADRs",
          "Class Ic post-MI = increased mortality (CAST trial)",
          "Torsades: IV MgSO4 + overdrive pacing",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 40", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "antiarrhythmic-drugs-recall",
        title: "Antiarrhythmic Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on antiarrhythmic drugs.",
        contentMd: `# Active Recall

**Q1:** Name the 4 classes of V-W classification with their ion targets.
> I: Na+ channel block, II: Beta-blockade, III: K+ channel block, IV: Ca2+ channel block

**Q2:** DOC for acute PSVT?
> Adenosine 6 mg rapid IV push (repeat 12 mg x 2 if needed). t1/2 ~10 seconds.

**Q3:** DOC for Torsades de Pointes?
> IV MgSO4 2 g bolus + overdrive pacing. Stop the offending QT-prolonging drug.

**Q4:** Why is amiodarone considered the most effective antiarrhythmic?
> It has properties of all 4 V-W classes (Na+, Beta, K+, Ca2+ channel block). Effective for both atrial and ventricular arrhythmias.

**Q5:** Name 5 ADRs of amiodarone.
> Pulmonary fibrosis, thyroid dysfunction (hypo/hyper), hepatotoxicity, corneal microdeposits, blue-grey skin discoloration, peripheral neuropathy.

**Q6:** Why is flecainide contraindicated post-MI?
> CAST trial showed Class Ic drugs increased mortality in post-MI patients despite suppressing PVCs (proarrhythmic in structural heart disease).

**Q7:** Contraindications to adenosine?
> Asthma (causes bronchospasm), WPW with AF (may accelerate conduction through accessory pathway -> VF), 2nd/3rd degree heart block.

**Q8:** Which antiarrhythmic has a half-life of 40-55 days?
> Amiodarone. It is highly lipophilic and accumulates in tissues (lung, thyroid, liver, cornea, skin).`,
        mnemonics: [],
        keyPoints: ["8 recall questions on antiarrhythmic drugs"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 40", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 5: Anticoagulants & Thrombolytics ────────────────
  {
    topicCode: "PH-MOD-03-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "anticoagulants-thrombolytics-foundation",
        title: "Anticoagulants & Thrombolytics - Foundation",
        estimatedMinutes: 20,
        summary:
          "Anticoagulants prevent clot formation (heparin, warfarin, DOACs). Antiplatelets prevent platelet aggregation (aspirin, clopidogrel). Thrombolytics dissolve existing clots (streptokinase, alteplase).",
        contentMd: `# Anticoagulants, Antiplatelets & Thrombolytics

## Coagulation Cascade (Simplified)
- **Intrinsic pathway**: XII -> XI -> IX -> X (measured by aPTT)
- **Extrinsic pathway**: VII -> X (measured by PT/INR)
- **Common pathway**: X -> Thrombin -> Fibrin clot

## Classification

### Anticoagulants (Prevent Clot Formation)
| Drug | Mechanism | Monitoring | Reversal |
|------|-----------|-----------|----------|
| **Heparin (UFH)** | Activates Antithrombin III -> inhibits IIa + Xa | aPTT | Protamine sulfate |
| **LMWH (Enoxaparin)** | Activates AT-III -> mainly anti-Xa | Anti-Xa levels (usually not needed) | Protamine (partial) |
| **Warfarin** | Inhibits vitamin K epoxide reductase -> reduces II, VII, IX, X | PT/INR (target 2-3) | Vitamin K, FFP, PCC |
| **Dabigatran** | Direct thrombin (IIa) inhibitor | Usually not needed | Idarucizumab |
| **Rivaroxaban, Apixaban** | Direct Xa inhibitor | Usually not needed | Andexanet alfa |

### Antiplatelets
| Drug | Mechanism |
|------|-----------|
| **Aspirin** | Irreversible COX-1 inhibition -> blocks TXA2 |
| **Clopidogrel** | Irreversible P2Y12 (ADP receptor) block |
| **Ticagrelor** | Reversible P2Y12 block |
| **Prasugrel** | Irreversible P2Y12 block (most potent) |
| **Abciximab** | GP IIb/IIIa inhibitor (prevents fibrinogen binding) |

### Thrombolytics (Fibrinolytics)
| Drug | Type | Special Features |
|------|------|-----------------|
| **Streptokinase** | Non-fibrin specific | Cheapest, antigenic (can only use once), available widely in India |
| **Alteplase (tPA)** | Fibrin-specific | Preferred for stroke, less systemic bleeding |
| **Tenecteplase** | Fibrin-specific | Single bolus dosing, convenient |
| **Reteplase** | Fibrin-specific | Double bolus |`,
        mnemonics: [
          {
            text: "Warfarin inhibits factors 1972: II, VII, IX, X (and Protein C, S)",
            explanation:
              "Warfarin inhibits vitamin K-dependent factors: II, VII, IX, X (plus anticoagulant proteins C and S). Factor VII has the shortest t1/2 (6h), so PT/INR rises first.",
          },
          {
            text: "HIT = Heparin-Induced Thrombocytopenia (paradoxical thrombosis!)",
            explanation:
              "HIT Type II: Antibodies against heparin-PF4 complex -> platelet activation -> thrombocytopenia + paradoxical thrombosis. Treat with direct thrombin inhibitor (argatroban).",
          },
        ],
        keyPoints: [
          "Heparin: activates AT-III, monitored by aPTT, reversed by protamine",
          "Warfarin: inhibits Vit K-dependent factors (II, VII, IX, X), monitored by INR",
          "Aspirin: irreversible COX-1 inhibition -> blocks TXA2 -> anti-platelet",
          "Streptokinase: cheapest thrombolytic, widely used in India for STEMI",
          "DOACs (Dabigatran, Rivaroxaban): fixed dose, no routine monitoring",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 44 - Drugs Affecting Coagulation", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 32", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "anticoagulants-thrombolytics-mechanism",
        title: "Anticoagulants & Thrombolytics - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed mechanisms: heparin-ATIII interaction, warfarin pharmacology, DOACs, aspirin antiplatelet mechanism, and fibrinolytic pathway.",
        contentMd: `# Mechanisms

## Heparin Mechanism
- UFH binds AT-III via a specific pentasaccharide sequence
- AT-III conformational change -> 1000x enhanced inhibition of thrombin (IIa) and Factor Xa
- UFH inhibits BOTH IIa and Xa (requires long chain for IIa inhibition)
- **LMWH** (Enoxaparin, Dalteparin): Shorter chains -> mainly anti-Xa (less IIa)
- **Fondaparinux**: Synthetic pentasaccharide -> pure anti-Xa

### HIT (Heparin-Induced Thrombocytopenia)
- **Type I**: Non-immune, mild (platelet count 100-150K), occurs in 10-20%, benign
- **Type II**: Immune-mediated (IgG against heparin-PF4 complex)
  - Platelet activation -> thrombocytopenia + THROMBOSIS (paradoxical)
  - Occurs day 5-10 of heparin therapy
  - Treatment: STOP all heparin + start Argatroban (direct thrombin inhibitor) or Fondaparinux

## Warfarin Mechanism
- Inhibits **Vitamin K epoxide reductase** (VKORC1)
- Reduces synthesis of active Vit K-dependent factors: **II, VII, IX, X** + Protein C, S
- Protein C has shortest t1/2 -> initial PROCOAGULANT effect (warfarin-induced skin necrosis)
- Full anticoagulant effect takes 4-5 days (factor II t1/2 = 60h)
- Numerous drug interactions (CYP2C9 substrate)

## Aspirin Antiplatelet Mechanism
- Low-dose aspirin (75-150 mg) irreversibly acetylates COX-1 in platelets
- Blocks TXA2 synthesis (platelet aggregation promoter)
- Platelets lack nucleus -> cannot regenerate COX-1 -> effect lasts lifetime of platelet (7-10 days)
- Higher doses also block endothelial COX-2 (prostacyclin) -> reduces antiplatelet benefit
- **Low dose = antiplatelet; High dose = anti-inflammatory/analgesic**

## Clopidogrel Mechanism
- Prodrug: Requires CYP2C19 activation (2-step hepatic metabolism)
- Active metabolite irreversibly blocks P2Y12 (ADP receptor) on platelets
- CYP2C19 poor metabolizers: Reduced clopidogrel efficacy (resistance)
- **Prasugrel**: More reliable activation, more potent, more bleeding risk
- **Ticagrelor**: Direct-acting (not prodrug), reversible P2Y12 block

## Thrombolytic Mechanism
- Activate plasminogen -> plasmin -> degrades fibrin clot
- Streptokinase: Forms complex with plasminogen -> activates other plasminogen molecules
- tPA (Alteplase): Binds fibrin -> activates plasminogen ON the clot surface (fibrin-specific)`,
        mnemonics: [
          {
            text: "Warfarin = Wait 4-5 days for full effect (factor II has 60h half-life)",
            explanation:
              "Although INR may rise early (factor VII t1/2 = 6h), full anticoagulation requires factor II depletion (t1/2 = 60h). Bridge with heparin for 4-5 days.",
          },
        ],
        keyPoints: [
          "UFH: anti-IIa + anti-Xa; LMWH: mainly anti-Xa; Fondaparinux: pure anti-Xa",
          "HIT Type II: immune-mediated, paradoxical thrombosis, treat with argatroban",
          "Warfarin: initial procoagulant (Protein C falls first) -> skin necrosis risk",
          "Low-dose aspirin irreversibly blocks COX-1 in platelets for 7-10 days",
          "Clopidogrel is a CYP2C19-activated prodrug; poor metabolizers have resistance",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 44", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "anticoagulants-thrombolytics-clinical",
        title: "Anticoagulants & Thrombolytics - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical use in DVT/PE, AF, mechanical valves, ACS, stroke, and Indian clinical context.",
        contentMd: `# Clinical Applications

## Indications by Drug
| Drug | Indications |
|------|------------|
| **UFH** | ACS, PE (massive), DIC, hemodialysis, cardiac surgery |
| **LMWH** | DVT treatment/prophylaxis, ACS, surgical prophylaxis |
| **Warfarin** | AF, mechanical heart valves, DVT/PE (long-term) |
| **DOACs** | AF (non-valvular), DVT/PE |
| **Aspirin** | ACS, secondary prevention of MI/stroke, primary prevention (selected) |
| **Clopidogrel + Aspirin** | DAPT post-PCI stent (6-12 months), ACS |
| **Streptokinase** | STEMI (<12h), massive PE |
| **Alteplase (tPA)** | Acute ischemic stroke (<4.5h), massive PE |

## Warfarin Management
- Target INR: 2-3 for AF, DVT/PE; 2.5-3.5 for mechanical valves
- Start with heparin bridge (4-5 days overlap)
- Drug interactions: Augmented by - CYP inhibitors (cimetidine, azole antifungals, amiodarone); Reduced by - CYP inducers (rifampicin, phenytoin, carbamazepine)
- Food interaction: Vitamin K-rich foods (green leafy vegetables) reduce warfarin effect

## Streptokinase in Indian Practice
- **Most commonly used thrombolytic in India** (cost: Rs 1000-3000 vs Rs 30,000+ for tPA)
- Dose: 1.5 million units IV over 60 min for STEMI
- Antigenic - can only be used ONCE (antibodies develop)
- Contraindicated if used in previous 6 months
- Window: Within 12 hours of STEMI onset

## DOACs: Advantages over Warfarin
- Fixed dosing, no routine monitoring needed
- Fewer drug/food interactions
- Rapid onset (no bridging needed)
- Limitations: More expensive, no use for mechanical valves, renal dose adjustment

> **Indian Context**: Warfarin is still the most common oral anticoagulant in India due to cost. INR monitoring availability has improved with point-of-care devices. DOACs increasingly prescribed in urban centers. Streptokinase remains first-line thrombolytic for STEMI in most Indian hospitals due to cost constraints.`,
        mnemonics: [
          {
            text: "STEMI in India = Streptokinase (cost-effective, widely available)",
            explanation:
              "Streptokinase 1.5 MU IV over 60 min within 12h of symptom onset is the standard thrombolytic for STEMI in India due to affordability. tPA preferred for stroke (within 4.5h).",
          },
        ],
        keyPoints: [
          "Warfarin: INR 2-3 for AF; 2.5-3.5 for mechanical valves; bridge with heparin",
          "DAPT (Aspirin + Clopidogrel): 6-12 months post-PCI stent",
          "Streptokinase: first-line for STEMI in India (cost advantage)",
          "tPA (Alteplase): preferred for acute ischemic stroke within 4.5h",
          "DOACs: no routine monitoring, but NOT for mechanical valves",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 44", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "anticoagulants-thrombolytics-exam",
        title: "Anticoagulants & Thrombolytics - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield anticoagulation facts for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Heparin monitoring: **aPTT**; Warfarin monitoring: **PT/INR**
- Heparin antidote: **Protamine sulfate**
- Warfarin antidote: **Vitamin K (slow), FFP/PCC (rapid)**
- Warfarin inhibits: **Vitamin K epoxide reductase (VKORC1)**
- Vit K-dependent factors: **II, VII, IX, X + Protein C, S**
- HIT Type II: **Antibody against heparin-PF4, paradoxical thrombosis**
- HIT treatment: **Argatroban** (direct thrombin inhibitor)
- DOC for DVT prophylaxis in surgery: **LMWH (Enoxaparin)**
- Target INR for AF: **2-3**; Mechanical valve: **2.5-3.5**
- Aspirin irreversibly blocks: **COX-1 -> TXA2** in platelets
- Clopidogrel activated by: **CYP2C19** (poor metabolizers = resistance)
- Dabigatran reversal agent: **Idarucizumab**
- Thrombolytic for stroke: **Alteplase (tPA)** within 4.5h
- Cheapest thrombolytic: **Streptokinase** (antigenic, one-time use)
- Warfarin-induced skin necrosis mechanism: **Protein C depleted first** (short t1/2)

## Antidote Quick Reference
| Drug | Antidote |
|------|----------|
| UFH | Protamine sulfate |
| LMWH | Protamine (partial reversal) |
| Warfarin | Vitamin K + FFP/PCC |
| Dabigatran | Idarucizumab |
| Rivaroxaban/Apixaban | Andexanet alfa |
| Streptokinase (bleeding) | Tranexamic acid + FFP |`,
        mnemonics: [
          {
            text: "1972 for Warfarin factors: Factors 10, 9, 7, 2 (X, IX, VII, II)",
            explanation:
              "Warfarin inhibits synthesis of Vit K-dependent clotting factors: 10 (X), 9 (IX), 7 (VII), 2 (II). Remember as the year 1972.",
          },
        ],
        keyPoints: [
          "Heparin: aPTT, protamine reversal; Warfarin: INR, Vitamin K reversal",
          "HIT Type II: paradoxical thrombosis, use argatroban",
          "Factors 1972: Warfarin blocks II, VII, IX, X",
          "Clopidogrel resistance: CYP2C19 poor metabolizers",
          "Streptokinase: cheapest, antigenic; tPA: fibrin-specific, preferred for stroke",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 44", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "anticoagulants-thrombolytics-recall",
        title: "Anticoagulants & Thrombolytics - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on anticoagulants and thrombolytics.",
        contentMd: `# Active Recall

**Q1:** Heparin vs Warfarin: monitoring tests?
> Heparin: aPTT (intrinsic pathway). Warfarin: PT/INR (extrinsic pathway - factor VII first).

**Q2:** What is HIT Type II? How is it treated?
> Immune-mediated thrombocytopenia with paradoxical thrombosis. Antibodies against heparin-PF4 complex. Stop all heparin, start argatroban.

**Q3:** Why does warfarin cause initial skin necrosis?
> Protein C (anticoagulant) has shortest t1/2 (8h) -> depleted first -> transient procoagulant state -> microvascular thrombosis in skin/fat.

**Q4:** What is DAPT and when is it used?
> Dual Antiplatelet Therapy (Aspirin + Clopidogrel/Ticagrelor). Used after PCI with stent placement (6-12 months) and in ACS.

**Q5:** Why is streptokinase used only once?
> Streptokinase is a bacterial protein (Group C Streptococcus) -> antibodies develop after first use -> anaphylaxis risk on re-exposure.

**Q6:** DOC thrombolytic for acute ischemic stroke?
> Alteplase (tPA) within 4.5 hours of symptom onset. Fibrin-specific, less systemic bleeding than streptokinase.

**Q7:** Aspirin's antiplatelet dose and mechanism?
> Low-dose 75-150 mg. Irreversibly acetylates COX-1 in platelets -> blocks TXA2 -> reduces platelet aggregation for 7-10 days.

**Q8:** Name 3 DOACs and their mechanisms.
> Dabigatran (direct thrombin/IIa inhibitor), Rivaroxaban (direct Xa inhibitor), Apixaban (direct Xa inhibitor).`,
        mnemonics: [],
        keyPoints: ["8 recall questions on anticoagulants, antiplatelets, and thrombolytics"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 44", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 6: Hypolipidemic Drugs ──────────────────────────
  {
    topicCode: "PH-MOD-03-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "hypolipidemic-drugs-foundation",
        title: "Hypolipidemic Drugs - Foundation",
        estimatedMinutes: 20,
        summary:
          "Statins are the cornerstone of lipid management. Other classes include fibrates, ezetimibe, bile acid sequestrants, niacin, and PCSK9 inhibitors.",
        contentMd: `# Hypolipidemic Drugs

## Lipid Profile Components
| Parameter | Normal | Target (High Risk) |
|-----------|--------|-------------------|
| Total cholesterol | <200 mg/dL | <150 |
| LDL-C | <100 mg/dL | <70 (very high risk: <55) |
| HDL-C | >40 (M), >50 (F) | Higher is better |
| Triglycerides | <150 mg/dL | <150 |

## Drug Classification

### 1. Statins (HMG-CoA Reductase Inhibitors) - FIRST LINE
| Drug | Potency | Special Features |
|------|---------|-----------------|
| **Atorvastatin** | High | Most commonly prescribed in India |
| **Rosuvastatin** | Highest | Most potent LDL lowering |
| **Simvastatin** | Moderate | CYP3A4 substrate (many interactions) |
| **Pravastatin** | Low-moderate | Hydrophilic, fewer interactions |
| **Fluvastatin** | Low | CYP2C9 metabolism |

### 2. Fibrates (PPAR-alpha Agonists)
- **Fenofibrate, Gemfibrozil**
- Primarily lower triglycerides (30-50%), increase HDL
- Activate PPAR-alpha -> increase lipoprotein lipase

### 3. Ezetimibe
- Inhibits NPC1L1 cholesterol transporter in intestine
- Reduces cholesterol absorption by ~50%
- Often combined with statin for additional LDL lowering

### 4. Bile Acid Sequestrants
- **Cholestyramine, Colesevelam**
- Bind bile acids in gut -> interrupt enterohepatic circulation
- Increase LDL receptor expression

### 5. PCSK9 Inhibitors
- **Evolocumab, Alirocumab** (monoclonal antibodies)
- PCSK9 normally degrades LDL receptors
- Blocking PCSK9 -> more LDL receptors -> dramatically lower LDL (50-60%)
- Very expensive, reserved for familial hypercholesterolemia or statin intolerance`,
        mnemonics: [
          {
            text: "STATINS: So Tremendously Active at Totally INhibiting cholesterol Synthesis",
            explanation:
              "Statins inhibit HMG-CoA reductase, the rate-limiting enzyme in cholesterol synthesis. This upregulates hepatic LDL receptors, increasing LDL clearance from blood.",
          },
          {
            text: "Rosuvastatin = ROSU = most ROBUST statin (highest potency)",
            explanation:
              "Rosuvastatin is the most potent statin for LDL reduction (up to 55-60% at maximum dose), followed by atorvastatin.",
          },
        ],
        keyPoints: [
          "Statins: first-line for LDL reduction, inhibit HMG-CoA reductase",
          "Atorvastatin: most commonly prescribed in India; Rosuvastatin: most potent",
          "Fibrates: primarily for hypertriglyceridemia, activate PPAR-alpha",
          "Ezetimibe: blocks intestinal cholesterol absorption (NPC1L1)",
          "PCSK9 inhibitors: for familial hypercholesterolemia, dramatically lower LDL",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 45 - Hypolipidemic Drugs", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 33", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "hypolipidemic-drugs-mechanism",
        title: "Hypolipidemic Drugs - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Statin mechanism, pleiotropic effects, myopathy risk, and comparison with other lipid-lowering agents.",
        contentMd: `# Mechanisms

## Statin Mechanism of Action
1. Competitive inhibition of **HMG-CoA reductase** (rate-limiting enzyme in mevalonate pathway)
2. Reduced intracellular cholesterol synthesis in liver
3. **Upregulation of LDL receptors** on hepatocytes
4. Increased clearance of LDL-C from blood
5. LDL reduction: 30-55% depending on statin and dose

## Statin Pleiotropic Effects (Beyond LDL Lowering)
- Anti-inflammatory (reduce CRP)
- Endothelial function improvement (increase NO)
- Plaque stabilization
- Antithrombotic effect
- These contribute to cardiovascular benefit beyond LDL reduction

## Statin ADRs
| ADR | Details |
|-----|---------|
| **Myopathy** | Myalgia -> myositis -> rhabdomyolysis (rare but serious) |
| **Hepatotoxicity** | Transaminase elevation (monitor LFTs) |
| **New-onset diabetes** | ~10% increased risk |
| **Teratogenic** | Category X - contraindicated in pregnancy |

### Rhabdomyolysis Risk Factors
- High statin dose
- Combination with **fibrates** (especially gemfibrozil + statin)
- CYP3A4 inhibitors with simvastatin/atorvastatin (azole antifungals, erythromycin, grapefruit)
- Renal impairment
- Hypothyroidism (reduces statin clearance)
- Elderly, small body frame

## Fibrate Mechanism
- PPAR-alpha agonists -> increase lipoprotein lipase (LPL)
- Increased TG catabolism, increased VLDL clearance
- Increase HDL by upregulating Apo A-I
- Primary indication: **Hypertriglyceridemia** (TG > 500 - pancreatitis risk)

## Ezetimibe Mechanism
- Blocks NPC1L1 (Niemann-Pick C1-Like 1) transporter at intestinal brush border
- Reduces cholesterol absorption by ~50%
- Complementary to statins (different mechanisms)
- IMPROVE-IT trial: Ezetimibe + Simvastatin > Simvastatin alone for ACS

## PCSK9 Pathway
- PCSK9 protein binds to LDL receptor -> internalized and degraded
- Normally limits number of LDL receptors on hepatocyte surface
- PCSK9 inhibitors (mAbs) block this -> more LDL receptors survive -> more LDL clearance
- Gain-of-function PCSK9 mutations -> familial hypercholesterolemia`,
        mnemonics: [
          {
            text: "Statin + Gemfibrozil = GEM of a bad combination (rhabdomyolysis risk!)",
            explanation:
              "Gemfibrozil inhibits statin glucuronidation, greatly increasing myopathy/rhabdomyolysis risk. If TG elevation needs treatment with statin, use fenofibrate instead.",
          },
        ],
        keyPoints: [
          "Statins: inhibit HMG-CoA reductase -> upregulate LDL receptors -> LDL clearance",
          "Pleiotropic effects: anti-inflammatory, plaque stabilization, endothelial improvement",
          "Statin + Gemfibrozil: highest rhabdomyolysis risk (use fenofibrate instead)",
          "Statins: Category X (teratogenic), monitor LFTs, watch for myopathy",
          "PCSK9 inhibitors: prevent LDL receptor degradation -> dramatic LDL lowering",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 45", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "hypolipidemic-drugs-clinical",
        title: "Hypolipidemic Drugs - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Statin therapy guidelines, primary and secondary prevention, management of familial hypercholesterolemia, and Indian prescribing patterns.",
        contentMd: `# Clinical Applications

## Statin Intensity Classification
| Intensity | LDL Reduction | Drugs |
|-----------|--------------|-------|
| **High** | >=50% | Atorvastatin 40-80 mg, Rosuvastatin 20-40 mg |
| **Moderate** | 30-49% | Atorvastatin 10-20 mg, Rosuvastatin 5-10 mg, Simvastatin 20-40 mg |
| **Low** | <30% | Simvastatin 10 mg, Pravastatin 10-20 mg |

## When to Start Statins
- **Secondary prevention** (known ASCVD): High-intensity statin for ALL
- **Primary prevention**: Based on 10-year ASCVD risk score
  - Diabetes age 40-75: Moderate-to-high intensity
  - LDL >= 190 (familial hypercholesterolemia): High-intensity
  - 10-year ASCVD risk >= 7.5%: Moderate-to-high intensity

## Familial Hypercholesterolemia (FH)
- Genetic disorder: LDL receptor mutations -> very high LDL from childhood
- Heterozygous FH: LDL 300-500 mg/dL -> premature ASCVD
- Homozygous FH: LDL > 500 mg/dL -> ASCVD in childhood
- Treatment: Maximum statin + Ezetimibe + PCSK9 inhibitor, LDL apheresis

## Indian Clinical Context
- Atorvastatin 10-20 mg is the most commonly prescribed statin in India
- Generic atorvastatin: Rs 2-5 per tablet (highly affordable)
- Indian population has higher ASCVD risk at lower LDL levels
- South Asian paradox: higher cardiovascular events despite lower average BMI
- NLEM includes atorvastatin and rosuvastatin

## Practical Points
- Take statins at night (cholesterol synthesis peaks at night) - except atorvastatin/rosuvastatin (long t1/2, any time)
- Check baseline LFTs, repeat at 3 months; check CK if myalgia develops
- Do NOT stop statin for mild transaminase elevation (<3x ULN)
- If statin-intolerant: Try alternate statin, lower dose, alternate-day dosing, or ezetimibe`,
        mnemonics: [
          {
            text: "ASCVD = All Should Consider Very strong (statin) Dosing",
            explanation:
              "All patients with established ASCVD (MI, stroke, PAD) should receive high-intensity statin therapy regardless of baseline LDL.",
          },
        ],
        keyPoints: [
          "High-intensity statin for all ASCVD patients (secondary prevention)",
          "Atorvastatin: most prescribed in India, long t1/2, can take any time",
          "FH: max statin + ezetimibe + PCSK9 inhibitor",
          "Take short-acting statins (simvastatin) at night; long-acting any time",
          "Indian population: higher ASCVD risk at lower LDL thresholds",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 45", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "hypolipidemic-drugs-exam",
        title: "Hypolipidemic Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield hypolipidemic drug facts for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Statin mechanism: **HMG-CoA reductase inhibition**
- Most potent statin: **Rosuvastatin**
- Most prescribed statin in India: **Atorvastatin**
- Statins are Category: **X** (contraindicated in pregnancy)
- Most serious statin ADR: **Rhabdomyolysis** (CK >10x ULN, myoglobinuria, renal failure)
- Statin + gemfibrozil: **Highest rhabdomyolysis risk** (avoid combination)
- Drug primarily for hypertriglyceridemia: **Fibrates** (Fenofibrate, Gemfibrozil)
- Fibrate mechanism: **PPAR-alpha agonist** -> increases lipoprotein lipase
- Ezetimibe blocks: **NPC1L1** transporter (intestinal cholesterol absorption)
- PCSK9 inhibitor example: **Evolocumab** (monoclonal antibody)
- PCSK9 role: **Degrades LDL receptors** (inhibiting it = more receptors = lower LDL)
- Bile acid sequestrant: **Cholestyramine** (also treats pruritus in cholestasis)
- Niacin ADR: **Flushing** (prostaglandin-mediated, reduced by aspirin pre-treatment)
- Statin pleiotropic effects: **Anti-inflammatory, plaque stabilization, endothelial function**
- When to take simvastatin: **At night** (short t1/2, cholesterol synthesis peaks nocturnally)

## Drug Choice by Lipid Abnormality
| Abnormality | First-Line |
|-------------|-----------|
| Raised LDL | Statin |
| Raised TG (>500) | Fibrate |
| Mixed dyslipidemia | Statin + Fenofibrate |
| Statin intolerance | Ezetimibe |
| FH refractory | PCSK9 inhibitor |`,
        mnemonics: [
          {
            text: "Statins: S for Synthesis inhibition, S for Safe with fenofibrate (not gemfibrozil)",
            explanation:
              "Statins inhibit cholesterol synthesis. When combining with a fibrate, use fenofibrate (safer) not gemfibrozil (rhabdomyolysis risk).",
          },
        ],
        keyPoints: [
          "Rosuvastatin: most potent; Atorvastatin: most prescribed in India",
          "Statins: Category X, rhabdomyolysis risk (especially with gemfibrozil)",
          "Fibrates for TG >500 (pancreatitis prevention)",
          "Ezetimibe: NPC1L1 blocker, additive with statins",
          "PCSK9 inhibitors for refractory FH",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 45", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "hypolipidemic-drugs-recall",
        title: "Hypolipidemic Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on hypolipidemic drugs.",
        contentMd: `# Active Recall

**Q1:** MOA of statins?
> Competitively inhibit HMG-CoA reductase (rate-limiting enzyme in cholesterol synthesis) -> upregulate hepatic LDL receptors -> increase LDL clearance.

**Q2:** Most potent statin?
> Rosuvastatin (up to 55-60% LDL reduction at maximum dose)

**Q3:** Why should gemfibrozil NOT be combined with statins?
> Gemfibrozil inhibits statin glucuronidation, dramatically increasing statin plasma levels and rhabdomyolysis risk. Use fenofibrate instead if needed.

**Q4:** Primary indication for fibrates?
> Severe hypertriglyceridemia (TG > 500 mg/dL) to prevent pancreatitis. Also raise HDL.

**Q5:** How does ezetimibe work?
> Blocks NPC1L1 (Niemann-Pick C1-Like 1) cholesterol transporter at the intestinal brush border, reducing cholesterol absorption by ~50%.

**Q6:** What are PCSK9 inhibitors and when are they used?
> Monoclonal antibodies (evolocumab, alirocumab) that block PCSK9 protein, preventing LDL receptor degradation. Used in FH or statin-intolerant patients.

**Q7:** Why should simvastatin be taken at night?
> Simvastatin has a short half-life. Cholesterol synthesis peaks at night (diurnal rhythm), so nighttime dosing provides maximum enzyme inhibition. Atorvastatin/rosuvastatin (long t1/2) can be taken any time.

**Q8:** Name 3 pleiotropic effects of statins beyond LDL lowering.
> Anti-inflammatory (reduce CRP), plaque stabilization, endothelial function improvement (increase NO), antithrombotic effect.`,
        mnemonics: [],
        keyPoints: ["8 recall questions on hypolipidemic drugs"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 45", edition: "8th" },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODULE 4 — CNS PHARMACOLOGY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ─── Topic 1: General & Local Anesthetics ───────────────────
  {
    topicCode: "PH-MOD-04-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "anesthetics-foundation",
        title: "General & Local Anesthetics - Foundation",
        estimatedMinutes: 20,
        summary:
          "General anesthetics produce unconsciousness, analgesia, and muscle relaxation. Local anesthetics block nerve conduction reversibly. Key drugs: halothane, isoflurane, propofol, thiopentone, lidocaine, bupivacaine.",
        contentMd: `# General & Local Anesthetics

## General Anesthetics (GA)

### Inhalational Agents
| Drug | MAC | Special Features |
|------|-----|-----------------|
| **Halothane** | 0.75 | Hepatotoxic (halothane hepatitis), sensitizes heart to catecholamines, pleasant smell |
| **Isoflurane** | 1.15 | Coronary steal (theoretical), most widely used |
| **Sevoflurane** | 2.0 | Best for inhalational induction (non-pungent), pediatric use |
| **Desflurane** | 6.0 | Fastest recovery (lowest blood:gas partition), pungent (not for induction) |
| **Nitrous Oxide (N2O)** | 105 | Analgesic, not potent enough alone, diffusion hypoxia, Vit B12 inactivation |

**MAC (Minimum Alveolar Concentration)**: Concentration at which 50% of patients do not respond to surgical incision. Lower MAC = more potent.

### Intravenous Agents
| Drug | Key Features |
|------|-------------|
| **Thiopentone** | Ultra-short barbiturate, redistribution-terminated, reduces ICP |
| **Propofol** | Most commonly used IV agent, antiemetic, painful on injection, lipid emulsion |
| **Ketamine** | Dissociative anesthesia, INCREASES BP/HR, bronchodilator, emergence phenomena |
| **Etomidate** | Hemodynamically stable, adrenal suppression (not for infusion) |
| **Midazolam** | Benzodiazepine, anxiolysis + amnesia, reversed by flumazenil |

## Local Anesthetics (LA)

### Classification
| Type | Drugs | Allergy Risk |
|------|-------|-------------|
| **Esters** | Procaine, Cocaine, Tetracaine, Benzocaine | Higher (PABA metabolite) |
| **Amides** | Lidocaine, Bupivacaine, Ropivacaine, Prilocaine | Lower |

### Mechanism
- Block voltage-gated Na+ channels in nerve membranes
- Prevent depolarization -> block nerve impulse conduction
- Bind OPEN/INACTIVATED channels (use-dependent block)
- Small, myelinated fibers blocked first (pain, temperature) -> motor fibers last

### Order of Nerve Block
Pain (C fibers) > Temperature > Touch > Proprioception > Motor (A-alpha)`,
        mnemonics: [
          {
            text: "MAC = Measure of Anesthetic Concentration (lower = more potent)",
            explanation:
              "MAC is inversely proportional to potency. Halothane (MAC 0.75) is more potent than N2O (MAC 105). N2O cannot produce surgical anesthesia alone (MAC > 100).",
          },
          {
            text: "Esters have one I, Amides have two I's: EstIr vs LidocaIne (2 i's in amide drug name)",
            explanation:
              "Quick way to distinguish: Amide local anesthetics have two 'i' letters in their name before '-aine' (lidocaine, bupivacaine, prilocaine). Esters have one 'i' or none.",
          },
        ],
        keyPoints: [
          "MAC: lower = more potent (Halothane most potent inhalational after methoxyflurane)",
          "Propofol: most common IV induction agent, antiemetic property",
          "Ketamine: only GA that increases BP and provides analgesia",
          "LA: block Na+ channels, pain fibers blocked first, motor last",
          "Amides (lidocaine, bupivacaine): lower allergy risk than esters",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 25 - General Anesthetics; Ch 26 - Local Anesthetics", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 21-22", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "anesthetics-mechanism",
        title: "General & Local Anesthetics - Mechanism",
        estimatedMinutes: 30,
        summary:
          "GA theories (Meyer-Overton, GABA enhancement), stages of anesthesia, IV agent pharmacology, LA mechanism (use-dependent block), and toxicity.",
        contentMd: `# Mechanisms

## Stages of General Anesthesia (Guedel's Classification - with Ether)
| Stage | Name | Features |
|-------|------|----------|
| I | Analgesia | Consciousness retained, pain reduced |
| II | Excitement/Delirium | Unconscious, irregular breathing, vomiting risk (DANGEROUS) |
| III | Surgical Anesthesia | Regular respiration, muscle relaxation (4 planes) |
| IV | Medullary Depression | Respiratory/cardiovascular collapse (OVERDOSE) |

> Modern anesthesia with IV induction + inhalational maintenance skips Stage II.

## GA Mechanisms
- **GABA-A receptor enhancement**: Most inhalational agents, propofol, barbiturates, etomidate
- **NMDA receptor antagonism**: Ketamine, N2O
- **Meyer-Overton correlation**: Potency correlates with lipid solubility

## Ketamine: Unique Properties
- NMDA receptor antagonist -> "dissociative anesthesia"
- Only GA that stimulates CVS (increases HR, BP via sympathetic stimulation)
- Only GA with analgesic property at sub-anesthetic doses
- Bronchodilator (useful in asthmatic patients)
- ADRs: Emergence phenomena (hallucinations, vivid dreams) - prevented by midazolam
- Increases ICP and IOP -> avoid in head injury and glaucoma

## Propofol Pharmacology
- Enhances GABA-A receptor activity
- Lipid emulsion (white, milky appearance) - "milk of amnesia"
- Ultra-short acting (redistribution + rapid metabolism)
- Antiemetic at sub-anesthetic doses
- **Propofol infusion syndrome**: Rare but fatal with prolonged ICU use (metabolic acidosis, rhabdomyolysis, cardiac failure)

## LA: Use-Dependent Block
- LAs preferentially bind Na+ channels in open/inactivated states
- Rapidly firing nerves (pain fibers) have more channels in open/inactivated state
- Therefore pain fibers blocked more effectively than resting motor fibers
- This is "use-dependent" or "frequency-dependent" block

## Bupivacaine Cardiotoxicity
- Bupivacaine has high affinity for cardiac Na+ channels
- Accidental IV injection -> fatal cardiac arrest (resistant to resuscitation)
- **Lipid emulsion (Intralipid 20%)**: Rescue therapy for LA systemic toxicity (LAST)
- **Ropivacaine**: S-enantiomer, less cardiotoxic, similar efficacy

## Adrenaline with LA
- Added to LA (1:200,000) to cause local vasoconstriction
- Prolongs LA duration, reduces systemic absorption, provides hemostasis
- Contraindicated at end-arteries: fingers, toes, nose, ears, penis (risk of gangrene)`,
        mnemonics: [
          {
            text: "Ketamine = Keeps BP Up (only GA that raises BP)",
            explanation:
              "Ketamine stimulates sympathetic nervous system -> increases HR and BP. Useful in hypovolemic/shocked patients but contraindicated in raised ICP.",
          },
          {
            text: "NO Adrenaline at End-Arteries: Nose, Ears, Fingers, Toes, Penis",
            explanation:
              "Adrenaline with local anesthetics is contraindicated at sites with end-arteries due to risk of vasospasm-induced gangrene.",
          },
        ],
        keyPoints: [
          "Modern anesthesia skips Guedel's Stage II (IV induction)",
          "Ketamine: only GA increasing BP, provides analgesia, bronchodilates",
          "Propofol: GABA-A enhancement, antiemetic, propofol infusion syndrome risk",
          "Bupivacaine: cardiotoxic (binds cardiac Na+ channels); Intralipid rescue",
          "Adrenaline with LA: prolongs action, avoid at end-arteries",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 25-26", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "anesthetics-clinical",
        title: "General & Local Anesthetics - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical anesthesia: balanced anesthesia, regional blocks (spinal, epidural), LAST management, and Indian anesthesia practice.",
        contentMd: `# Clinical Applications

## Balanced Anesthesia
Modern surgery uses combination of agents for the 3 components:
1. **Unconsciousness**: Propofol (IV induction) + Sevoflurane (maintenance)
2. **Analgesia**: Fentanyl (opioid)
3. **Muscle relaxation**: Vecuronium or Atracurium (NDMB)

## Regional Anesthesia Types
| Technique | Drug | Level | Use |
|-----------|------|-------|-----|
| **Spinal** | Bupivacaine (heavy, hyperbaric) | Subarachnoid space | Lower abdominal, lower limb surgery |
| **Epidural** | Bupivacaine / Ropivacaine | Epidural space | Labor analgesia, post-op pain |
| **Nerve block** | Lidocaine / Bupivacaine | Peripheral nerve | Upper/lower limb surgery |
| **Topical** | Lidocaine gel/spray/EMLA | Skin/mucosa | Procedures, venipuncture |
| **Infiltration** | Lidocaine + Adrenaline | Subcutaneous | Minor surgery |

## LAST (Local Anesthetic Systemic Toxicity)
- Occurs with accidental IV injection or excessive dose
- **CNS first**: Perioral tingling, tinnitus, visual disturbance -> seizures -> coma
- **CVS second**: Hypotension, bradycardia, ventricular arrhythmias, cardiac arrest
- **Treatment**: Stop LA, ABC, IV lipid emulsion (Intralipid 20% bolus 1.5 mL/kg), treat seizures with midazolam

## Malignant Hyperthermia (Revisited)
- Triggered by: Succinylcholine + volatile anesthetics (halothane, isoflurane, sevoflurane)
- NOT triggered by: N2O, propofol, ketamine, local anesthetics
- Treatment: Dantrolene

> **Indian Context**: Halothane is still used in some smaller centers in India due to cost, though isoflurane and sevoflurane are now standard. Ketamine is widely used for emergency procedures in resource-limited settings (no ventilator needed). Bupivacaine spinal anesthesia is the most common regional technique in India.`,
        mnemonics: [
          {
            text: "LAST = Lipid rescue: Always Start Treatment with Intralipid 20%",
            explanation:
              "For Local Anesthetic Systemic Toxicity, the rescue treatment is IV lipid emulsion (Intralipid 20%). Lipid acts as a 'sink' sequestering lipophilic LA from cardiac tissue.",
          },
        ],
        keyPoints: [
          "Balanced anesthesia: propofol + volatile agent + opioid + NMB",
          "Spinal anesthesia: hyperbaric bupivacaine most commonly used in India",
          "LAST: CNS toxicity first (seizures) then CVS (cardiac arrest); Intralipid rescue",
          "Malignant hyperthermia: volatile agents + succinylcholine; Dantrolene",
          "Ketamine: useful in resource-limited settings (maintains airway reflexes)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 25-26", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "anesthetics-exam",
        title: "General & Local Anesthetics - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield anesthesia pharmacology for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Most potent inhalational agent: **Methoxyflurane** (rarely used); among common: **Halothane** (MAC 0.75)
- Least potent inhalational agent: **N2O** (MAC 105)
- Fastest recovery: **Desflurane** (lowest blood:gas partition coefficient)
- Best for inhalational induction (pediatric): **Sevoflurane** (non-pungent)
- GA causing hepatotoxicity: **Halothane** (halothane hepatitis)
- GA sensitizing myocardium to catecholamines: **Halothane**
- Only GA raising BP: **Ketamine** (sympathomimetic)
- Dissociative anesthesia: **Ketamine** (NMDA antagonist)
- Most commonly used IV induction agent: **Propofol**
- Propofol also acts as: **Antiemetic**
- Malignant hyperthermia triggers: **Succinylcholine + volatile agents**
- MH treatment: **Dantrolene**
- LA causing cardiotoxicity: **Bupivacaine** (cardiac Na+ channel affinity)
- LAST rescue: **IV Intralipid 20%**
- LA blocked first: **Pain (C fibers)**, blocked last: **Motor (A-alpha)**
- Ester LA metabolized to: **PABA** (higher allergy risk)
- LA + Adrenaline contraindicated at: **End-arteries (fingers, toes, nose, ears, penis)**

## Comparison: Spinal vs Epidural
| Feature | Spinal | Epidural |
|---------|--------|----------|
| Space | Subarachnoid | Epidural |
| Needle | 25-27G | 16-18G (Tuohy) |
| Onset | Fast (5 min) | Slower (15-20 min) |
| Level | Below L2 (adults) | Any level |
| Catheter | Usually single shot | Continuous catheter possible |
| Main complication | Post-dural puncture headache | Epidural hematoma |`,
        mnemonics: [
          {
            text: "Desflurane = Des-fast-flurane (fastest recovery); Sevoflurane = Sevo-smooth-flurane (smoothest induction)",
            explanation:
              "Desflurane has the lowest blood:gas partition coefficient -> fastest wash-out and recovery. Sevoflurane is non-pungent -> smoothest inhalational induction (ideal for children).",
          },
        ],
        keyPoints: [
          "Halothane: hepatotoxic, sensitizes heart to catecholamines",
          "Ketamine: only GA raising BP, dissociative, bronchodilator",
          "Propofol: most used IV agent, antiemetic, propofol infusion syndrome",
          "Bupivacaine: cardiotoxic; rescue with Intralipid",
          "Sevoflurane: pediatric induction; Desflurane: fastest recovery",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 25-26", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "anesthetics-recall",
        title: "General & Local Anesthetics - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on anesthetics.",
        contentMd: `# Active Recall

**Q1:** What is MAC? Which common agent has the lowest MAC?
> Minimum Alveolar Concentration at which 50% patients don't respond to surgery. Halothane (0.75) among commonly used agents. Lower MAC = more potent.

**Q2:** Only GA that increases BP?
> Ketamine (stimulates sympathetic NS, NMDA antagonist). Useful in shock/hypovolemia.

**Q3:** What is propofol infusion syndrome?
> Rare fatal complication with prolonged IV propofol infusion in ICU. Features: metabolic acidosis, rhabdomyolysis, hyperkalemia, cardiac failure, lipemia.

**Q4:** Why is bupivacaine more cardiotoxic than lidocaine?
> Bupivacaine has high affinity for cardiac Na+ channels and dissociates slowly (slow off-rate), causing sustained cardiac depression and resistant arrhythmias.

**Q5:** Rescue treatment for LAST?
> IV Intralipid 20% (1.5 mL/kg bolus then infusion). Acts as a lipid sink, sequestering LA from cardiac tissue.

**Q6:** Order of nerve fiber block with LA?
> Pain/temperature (small C fibers) first -> touch -> proprioception -> motor (large A-alpha fibers) last. Use-dependent block.

**Q7:** MH triggers and treatment?
> Triggers: Succinylcholine + volatile anesthetics (halothane, isoflurane, sevoflurane). Treatment: Dantrolene (blocks RYR1 Ca2+ release from SR).

**Q8:** Best inhalational agent for pediatric induction? Why?
> Sevoflurane. Non-pungent, pleasant smell, does not irritate airways, allows smooth mask induction in children.`,
        mnemonics: [],
        keyPoints: ["8 recall questions on general and local anesthetics"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 25-26", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 2: Sedatives & Hypnotics ─────────────────────────
  {
    topicCode: "PH-MOD-04-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "sedatives-hypnotics-foundation",
        title: "Sedatives & Hypnotics - Foundation",
        estimatedMinutes: 20,
        summary:
          "Benzodiazepines are the mainstay for anxiety and insomnia. Barbiturates are older agents. Newer non-BZD hypnotics (Z-drugs) are used for insomnia. All act on GABA-A receptor complex.",
        contentMd: `# Sedatives & Hypnotics

## GABA-A Receptor Complex
- Ligand-gated Cl- channel (pentameric: 2 alpha, 2 beta, 1 gamma subunit)
- GABA binds at alpha-beta interface -> opens Cl- channel -> hyperpolarization
- **Benzodiazepine binding site**: Alpha-gamma interface
- **Barbiturate binding site**: Beta subunit

## Benzodiazepines (BZDs)

### Classification by Duration
| Duration | Drug | t1/2 | Key Use |
|----------|------|------|---------|
| **Ultra-short** | Midazolam | 2-4h | Pre-anesthetic, procedural sedation |
| **Short** | Triazolam, Oxazepam | 3-8h | Insomnia |
| **Intermediate** | Lorazepam, Alprazolam | 8-15h | Anxiety, status epilepticus (lorazepam) |
| **Long** | Diazepam, Chlordiazepoxide, Clonazepam | 20-100h | Anxiety, alcohol withdrawal, seizures |

### BZD Mechanism
- **Increase FREQUENCY** of GABA-A Cl- channel opening
- Do NOT directly open channel (require GABA to be present)
- **Ceiling effect**: Cannot cause full anesthesia alone -> safer than barbiturates

## Barbiturates
- **Increase DURATION** of GABA-A Cl- channel opening
- At high doses: DIRECTLY open Cl- channel (even without GABA)
- **No ceiling effect** -> overdose causes fatal respiratory depression
- Highly addictive, narrow TI

| Drug | Duration | Use |
|------|----------|-----|
| **Thiopentone** | Ultra-short | IV anesthetic induction |
| **Phenobarbitone** | Long-acting | Epilepsy, neonatal seizures |

## Z-Drugs (Non-BZD Hypnotics)
- **Zolpidem, Zaleplon, Zopiclone**
- Selective for alpha-1 subunit of GABA-A (sedative without anxiolytic/muscle relaxant)
- Shorter duration, less residual drowsiness, less dependence than BZDs
- Zolpidem: Most commonly prescribed for insomnia

## BZD Antagonist
- **Flumazenil**: Competitive antagonist at BZD binding site
- Reverses BZD sedation/overdose
- Short t1/2 (1h) -> may need repeated doses
- Caution: May precipitate seizures in chronic BZD users or mixed OD`,
        mnemonics: [
          {
            text: "BZDs increase FREQUENCY; Barbiturates increase DURATION of Cl- channel opening",
            explanation:
              "Both enhance GABA-A function but differently. BZDs increase the frequency of channel opening (need GABA present). Barbiturates increase the duration (and can directly open at high doses).",
          },
          {
            text: "Flumazenil FLUSHES out BZDs (competitive antagonist at BZD site)",
            explanation:
              "Flumazenil is the specific antidote for benzodiazepine overdose. It has a short half-life, so re-sedation can occur with long-acting BZDs.",
          },
        ],
        keyPoints: [
          "BZDs increase FREQUENCY of Cl- channel opening; Barbiturates increase DURATION",
          "BZDs have ceiling effect (safer); Barbiturates can directly open channels (dangerous OD)",
          "Flumazenil: BZD antagonist for reversal (short t1/2, may precipitate seizures)",
          "Z-drugs (Zolpidem): alpha-1 selective, less next-day drowsiness",
          "Diazepam: long-acting BZD for anxiety, seizures, alcohol withdrawal",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 28 - Sedative-Hypnotics", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 17", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "sedatives-hypnotics-mechanism",
        title: "Sedatives & Hypnotics - Mechanism",
        estimatedMinutes: 30,
        summary:
          "GABA-A receptor subunit pharmacology, BZD pharmacokinetics, tolerance/dependence mechanisms, and sleep architecture effects.",
        contentMd: `# Mechanisms

## GABA-A Subunit Specificity
| Subunit | Effect When Activated | Drug Selectivity |
|---------|----------------------|-----------------|
| Alpha-1 | Sedation, amnesia | Z-drugs (Zolpidem) |
| Alpha-2 | Anxiolysis | BZDs (non-selective) |
| Alpha-3 | Muscle relaxation | BZDs (non-selective) |
| Alpha-5 | Memory, cognition | - |

## BZD Pharmacokinetics
### Active Metabolites
- Diazepam -> Nordiazepam (t1/2 60-100h) -> Oxazepam
- Chlordiazepoxide -> Desmethyldiazepam -> Oxazepam
- Both produce long-lasting active metabolites

### BZDs Safe in Liver Disease (LOT drugs)
- **L**orazepam, **O**xazepam, **T**emazepam
- These undergo direct glucuronidation (Phase II only) - no Phase I (oxidation)
- Safe in elderly and liver disease (no active metabolites)

## Tolerance and Dependence
### BZD Tolerance
- Develops to sedative and anticonvulsant effects (days-weeks)
- Less tolerance to anxiolytic effects
- Mechanism: GABA-A receptor downregulation and uncoupling

### BZD Dependence and Withdrawal
- Physical dependence with chronic use (>4 weeks)
- Withdrawal: Anxiety, insomnia, tremor, SEIZURES (potentially fatal)
- Taper gradually over weeks (do NOT stop abruptly)
- Longer-acting BZDs (diazepam) used for tapering

## Effects on Sleep Architecture
| Drug | REM Sleep | Stage 3-4 (SWS) | Total Sleep |
|------|-----------|------------------|-------------|
| BZDs | Decreased | Decreased | Increased |
| Barbiturates | Decreased | Decreased | Increased |
| Zolpidem | Minimal change | Preserved | Increased |
| Alcohol | Decreased | Decreased | Initial increase, then disrupted |

> **Key**: BZDs suppress REM and slow-wave sleep. Rebound REM on withdrawal causes nightmares. Zolpidem better preserves sleep architecture.`,
        mnemonics: [
          {
            text: "LOT drugs for Liver disease: Lorazepam, Oxazepam, Temazepam",
            explanation:
              "These BZDs undergo only Phase II (glucuronidation) metabolism - no CYP450 oxidation. Safe in hepatic impairment and elderly as they produce no active metabolites.",
          },
        ],
        keyPoints: [
          "Alpha-1: sedation (Z-drugs target this); Alpha-2: anxiolysis",
          "LOT drugs safe in liver disease: direct glucuronidation, no active metabolites",
          "BZD withdrawal can cause fatal seizures - always taper gradually",
          "BZDs suppress REM and slow-wave sleep; Zolpidem preserves sleep architecture",
          "Diazepam has active metabolite (nordiazepam t1/2 60-100h)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 28", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "sedatives-hypnotics-clinical",
        title: "Sedatives & Hypnotics - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical uses: anxiety disorders, insomnia, status epilepticus, alcohol withdrawal, pre-anesthetic medication, and BZD overdose management.",
        contentMd: `# Clinical Applications

## Anxiety Disorders
- **Acute anxiety**: BZDs (lorazepam, alprazolam) - short-term only
- **Chronic anxiety (GAD)**: SSRIs (escitalopram) first-line; BZDs as adjunct initially
- **Panic disorder**: SSRIs + short-term alprazolam
- **Social anxiety**: SSRIs or propranolol (for performance anxiety)

## Insomnia
- **First-line**: Sleep hygiene, CBT-I (non-pharmacological)
- **Short-term**: Zolpidem (Z-drug, alpha-1 selective)
- **Short-acting BZDs**: Triazolam for sleep-onset insomnia
- **Avoid long-term BZDs** for insomnia (tolerance, dependence)
- **Ramelteon**: Melatonin receptor agonist (MT1/MT2) - no abuse potential

## Status Epilepticus
- **IV Lorazepam** (preferred) or **IV Diazepam** (faster onset but shorter duration)
- Lorazepam preferred: longer anticonvulsant duration (12-24h vs 20 min for diazepam)
- Rectal diazepam: If no IV access (pediatric emergency)

## Alcohol Withdrawal
- **Chlordiazepoxide** or **Diazepam**: Long-acting, smooth withdrawal
- Lorazepam: If liver disease coexists
- Fixed-dose or symptom-triggered (CIWA protocol)
- Also give: Thiamine (prevent Wernicke's), IV fluids, electrolytes

## BZD Overdose
- **ABCs** + supportive care
- **Flumazenil**: Specific antidote (0.2 mg IV, repeat to max 3 mg)
- Caution with flumazenil: Avoid in chronic BZD users (seizures), mixed OD (unmasks proconvulsant), epilepsy patients
- Pure BZD OD rarely fatal (ceiling effect) unless combined with alcohol/opioids

> **Indian Context**: Alprazolam is one of the most prescribed (and misused) BZDs in India. Schedule H1 restrictions on BZDs have been implemented. Zolpidem is increasingly prescribed as a safer hypnotic.`,
        mnemonics: [
          {
            text: "Lorazepam LASTS Longer in Status Epilepticus",
            explanation:
              "Lorazepam is preferred over diazepam for status epilepticus because its anticonvulsant effect lasts 12-24 hours (vs 20 min for diazepam, which redistributes quickly).",
          },
        ],
        keyPoints: [
          "Status epilepticus: IV lorazepam preferred (longer anticonvulsant action)",
          "Alcohol withdrawal: long-acting BZDs (chlordiazepoxide, diazepam) + thiamine",
          "BZD OD: flumazenil (avoid in chronic users - seizure risk)",
          "Chronic insomnia: CBT-I first-line, then Z-drugs; avoid long-term BZDs",
          "Alprazolam widely misused in India; Schedule H1 regulation",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 28, 30", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "sedatives-hypnotics-exam",
        title: "Sedatives & Hypnotics - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield sedative-hypnotic facts for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- BZDs increase: **Frequency** of Cl- channel opening
- Barbiturates increase: **Duration** of Cl- channel opening
- BZD antagonist: **Flumazenil**
- BZD safe in liver disease: **LOT** (Lorazepam, Oxazepam, Temazepam)
- DOC for status epilepticus: **IV Lorazepam**
- DOC for alcohol withdrawal: **Chlordiazepoxide/Diazepam**
- Z-drug for insomnia: **Zolpidem** (alpha-1 selective)
- BZD with longest t1/2: **Diazepam** (active metabolite nordiazepam: 60-100h)
- BZD withdrawal can cause: **Seizures** (potentially fatal)
- Pre-anesthetic BZD: **Midazolam** (amnesia + anxiolysis)
- Melatonin agonist for insomnia: **Ramelteon** (MT1/MT2)
- Barbiturate for neonatal seizures: **Phenobarbitone**
- Barbiturate as IV anesthetic: **Thiopentone**
- Diazepam active metabolite: **Nordiazepam (desmethyldiazepam)**
- Flumazenil caution: **Chronic BZD users** (precipitates withdrawal seizures)

## BZD vs Barbiturate Comparison
| Feature | BZDs | Barbiturates |
|---------|------|-------------|
| GABA-A effect | Increase frequency | Increase duration |
| Direct channel opening | No | Yes (at high dose) |
| Ceiling effect | Yes (safer) | No (fatal OD) |
| Antidote | Flumazenil | None specific |
| Abuse potential | Moderate | High |
| Therapeutic index | Wide | Narrow |`,
        mnemonics: [
          {
            text: "BZD = Benign (ceiling effect, wide TI); Barbiturate = Bad OD (no ceiling, narrow TI)",
            explanation:
              "BZDs are inherently safer than barbiturates. BZDs have a ceiling effect (cannot fully activate GABA-A without GABA), while barbiturates can directly open Cl- channels leading to fatal respiratory depression.",
          },
        ],
        keyPoints: [
          "BZD: frequency of Cl- opening; Barbiturate: duration",
          "LOT safe in liver disease (glucuronidation only)",
          "Status epilepticus: IV Lorazepam; Alcohol withdrawal: Chlordiazepoxide",
          "Flumazenil: BZD antidote (avoid in chronic BZD users)",
          "BZDs safer than barbiturates (ceiling effect, wider TI)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 28", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "sedatives-hypnotics-recall",
        title: "Sedatives & Hypnotics - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on sedatives and hypnotics.",
        contentMd: `# Active Recall

**Q1:** BZDs vs Barbiturates: effect on GABA-A Cl- channel?
> BZDs increase frequency of opening (need GABA present). Barbiturates increase duration (and can directly open at high doses without GABA).

**Q2:** Why are BZDs safer in overdose than barbiturates?
> BZDs have a ceiling effect - they cannot maximally activate GABA-A alone, so respiratory depression is limited. Barbiturates directly open channels at high doses -> fatal respiratory depression.

**Q3:** Which BZDs are safe in liver disease? Why?
> LOT: Lorazepam, Oxazepam, Temazepam. They undergo only Phase II glucuronidation (no CYP450 oxidation), producing no active metabolites.

**Q4:** DOC for status epilepticus?
> IV Lorazepam (preferred over diazepam due to longer anticonvulsant duration 12-24h).

**Q5:** What is the antidote for BZD overdose?
> Flumazenil (competitive antagonist at BZD binding site, 0.2 mg IV). Caution: may precipitate seizures in chronic BZD users.

**Q6:** Why is zolpidem preferred over BZDs for insomnia?
> Zolpidem selectively targets alpha-1 subunit (sedative) of GABA-A. Less anxiolytic, less muscle relaxation, better preserved sleep architecture, less dependence.

**Q7:** Drug for alcohol withdrawal in a patient with liver disease?
> Lorazepam (LOT drug - safe in liver disease, glucuronidation only).

**Q8:** Active metabolite of diazepam with very long half-life?
> Nordiazepam (desmethyldiazepam), t1/2 60-100 hours. This is why diazepam effects can persist for days.`,
        mnemonics: [],
        keyPoints: ["8 recall questions on sedatives and hypnotics"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 28", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 3: Antiepileptic Drugs ──────────────────────────
  {
    topicCode: "PH-MOD-04-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "antiepileptic-drugs-foundation",
        title: "Antiepileptic Drugs - Foundation",
        estimatedMinutes: 20,
        summary:
          "Antiepileptic drugs (AEDs) suppress seizures. Choice depends on seizure type. Key drugs: phenytoin, carbamazepine, valproate, levetiracetam, lamotrigine.",
        contentMd: `# Antiepileptic Drugs

## Seizure Types and Drug Choice
| Seizure Type | First-Line Drug |
|-------------|----------------|
| **Generalized Tonic-Clonic (GTCS)** | Valproate, Levetiracetam, Phenytoin |
| **Absence (Petit Mal)** | Ethosuximide (pure absence), Valproate (if mixed) |
| **Myoclonic** | Valproate, Levetiracetam |
| **Focal (Partial)** | Carbamazepine, Oxcarbazepine, Levetiracetam, Lamotrigine |
| **Status Epilepticus** | Lorazepam/Diazepam -> Phenytoin/Fosphenytoin -> Phenobarbitone -> Thiopentone |
| **Infantile spasms** | ACTH, Vigabatrin |
| **Neonatal seizures** | Phenobarbitone |

## Drug Classification by Mechanism
| Mechanism | Drugs |
|-----------|-------|
| **Na+ channel block** | Phenytoin, Carbamazepine, Oxcarbazepine, Lamotrigine, Lacosamide |
| **Ca2+ channel block (T-type)** | Ethosuximide, Valproate |
| **GABA enhancement** | Benzodiazepines, Phenobarbitone, Valproate, Vigabatrin, Tiagabine |
| **SV2A binding** | Levetiracetam, Brivaracetam |
| **Glutamate (AMPA) block** | Perampanel |
| **Multiple mechanisms** | Valproate (Na+, Ca2+ T-type, GABA), Topiramate |

## Key Drug: Valproate (Sodium Valproate)
- **Broadest spectrum AED** - effective against almost all seizure types
- Mechanisms: Na+ channel block + T-type Ca2+ block + GABA enhancement
- ADRs: Hepatotoxicity (children <2 yr), weight gain, tremor, hair loss, pancreatitis
- **Highly teratogenic**: Neural tube defects (spina bifida) - AVOID in women of childbearing age

## Key Drug: Phenytoin
- Na+ channel blocker (use-dependent)
- **Zero-order kinetics** at therapeutic doses -> small dose changes cause large level changes
- ADRs: Gum hypertrophy, hirsutism, acne, cerebellar ataxia, nystagmus, osteomalacia, megaloblastic anemia`,
        mnemonics: [
          {
            text: "VALPROATE = Very Active against aLL seizure types",
            explanation:
              "Valproate (sodium valproate) is the broadest spectrum AED, effective against GTCS, absence, myoclonic, and focal seizures. But avoid in pregnancy (teratogenic - neural tube defects).",
          },
          {
            text: "Ethosuximide = Ethosux for ABSENCE (sucks absence seizures away)",
            explanation:
              "Ethosuximide blocks T-type Ca2+ channels in thalamic neurons. It is DOC for pure absence seizures but has NO effect on GTCS.",
          },
        ],
        keyPoints: [
          "Valproate: broadest spectrum, multiple mechanisms, highly teratogenic (NTD)",
          "Ethosuximide: DOC for pure absence seizures (T-type Ca2+ block)",
          "Phenytoin: Na+ channel blocker, zero-order kinetics, gum hypertrophy",
          "Status epilepticus: Lorazepam -> Phenytoin -> Phenobarbitone -> GA",
          "Levetiracetam: newer AED, SV2A binding, few interactions, increasingly preferred",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 30 - Antiepileptic Drugs", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 21", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "antiepileptic-drugs-mechanism",
        title: "Antiepileptic Drugs - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed mechanisms of Na+ channel blockers, T-type Ca2+ block, GABA enhancement, SV2A binding, and pharmacokinetics of key AEDs.",
        contentMd: `# Mechanisms

## Na+ Channel Blockers (Phenytoin, CBZ, Lamotrigine)
- Bind preferentially to INACTIVATED Na+ channels
- Prolong inactivation -> prevent rapid repetitive firing
- **Use-dependent block**: More effective in rapidly firing neurons (seizure focus)
- Normal neuronal activity minimally affected

## Phenytoin Pharmacokinetics (Unique!)
- **Michaelis-Menten (zero-order) kinetics** at therapeutic doses
- Enzyme saturation -> small dose increase causes disproportionate plasma level rise
- Therapeutic range: 10-20 mcg/mL (narrow TI, requires TDM)
- Highly protein-bound (90% to albumin)
- **CYP2C9/2C19** metabolized; potent CYP inducer

## Carbamazepine Pharmacokinetics
- **Auto-induction**: Induces its own CYP3A4 metabolism over 2-4 weeks
- Initial t1/2: 36h -> After auto-induction: 12-17h
- Active metabolite: Carbamazepine-10,11-epoxide
- ADRs: Hyponatremia (SIADH), aplastic anemia (rare), SJS (HLA-B*1502 in Asian populations)

## Valproate Mechanisms
1. Na+ channel block (weaker than phenytoin)
2. T-type Ca2+ channel block (anti-absence)
3. Increases GABA (inhibits GABA transaminase + enhances GAD)
4. Inhibits histone deacetylase (epigenetic effects)

### Valproate Drug Interactions
- **Inhibits** CYP2C9, UGT -> increases levels of phenytoin, lamotrigine, phenobarbitone
- Valproate + Lamotrigine: Increased risk of SJS (reduce lamotrigine dose by 50%)

## Levetiracetam
- Binds SV2A (synaptic vesicle protein 2A) -> modulates neurotransmitter release
- Minimal drug interactions (not CYP metabolized, renally excreted)
- No TDM needed, linear kinetics
- ADRs: Behavioral changes (irritability, aggression), sedation
- Increasingly preferred as first-line in India

## Status Epilepticus Protocol
1. **0-5 min**: ABC, check glucose, IV access
2. **5-20 min**: IV Lorazepam 0.1 mg/kg (or Diazepam 0.15 mg/kg)
3. **20-40 min**: IV Phenytoin 20 mg/kg (or Fosphenytoin)
4. **40-60 min**: IV Phenobarbitone 20 mg/kg
5. **>60 min (refractory)**: Midazolam/Propofol/Thiopentone infusion (ICU)`,
        mnemonics: [
          {
            text: "Phenytoin PHOLLOWS zero-order (Phenytoin Has Zero-Order saturation kinetics)",
            explanation:
              "Phenytoin follows Michaelis-Menten kinetics at therapeutic doses. Small dose changes cause large changes in plasma levels -> toxicity. Requires TDM.",
          },
          {
            text: "CBZ induces its own metabolism = AUTO-induction over 2-4 weeks",
            explanation:
              "Carbamazepine induces CYP3A4, which metabolizes itself. After 2-4 weeks, its own levels drop and dose may need to be increased.",
          },
        ],
        keyPoints: [
          "Phenytoin: zero-order kinetics, narrow TI, needs TDM (10-20 mcg/mL)",
          "Carbamazepine: auto-induction, HLA-B*1502 testing in Asians (SJS risk)",
          "Valproate + Lamotrigine: increased SJS risk (reduce lamotrigine dose 50%)",
          "Levetiracetam: SV2A binding, minimal interactions, linear kinetics",
          "SE protocol: Lorazepam -> Phenytoin -> Phenobarbitone -> GA",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 30", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "antiepileptic-drugs-clinical",
        title: "Antiepileptic Drugs - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "AED selection in special populations (pregnancy, elderly, children), drug interactions, teratogenicity, and Indian prescribing context.",
        contentMd: `# Clinical Applications

## AEDs in Pregnancy
- **Valproate**: MOST teratogenic AED -> neural tube defects (spina bifida), cardiac defects, autism
  - Absolutely AVOID in women of childbearing age unless no alternative
- **Phenytoin**: Fetal hydantoin syndrome (cleft lip, digit hypoplasia, growth retardation)
- **Carbamazepine**: Neural tube defects (lower risk than valproate)
- **Safest AEDs in pregnancy**: Lamotrigine, Levetiracetam
- **All epileptic women**: Folic acid 5 mg/day (before conception and throughout pregnancy)
- **Vitamin K** to mother before delivery (AEDs induce fetal Vit K deficiency -> neonatal bleeding)

## AEDs and Contraception
- Enzyme-inducing AEDs (Phenytoin, CBZ, Phenobarbitone) reduce OCP efficacy
- Use higher-dose OCP or non-hormonal contraception
- Valproate, Levetiracetam, Lamotrigine: Do NOT affect OCP levels

## AEDs in Elderly
- Start low, go slow
- Avoid phenytoin (zero-order kinetics, many interactions)
- Preferred: Levetiracetam, Lamotrigine (fewer interactions)

## When to Withdraw AEDs
- Seizure-free for 2-3 years on EEG normal
- Taper gradually over 3-6 months (risk of withdrawal seizures)
- Higher relapse risk: Abnormal EEG, JME (usually lifelong treatment)

## Indian Clinical Context
- Phenytoin still widely used in India (affordable: Rs 2-5/tablet)
- Levetiracetam increasingly prescribed (generic now available)
- Valproate widely used for GTCS in males; avoided in females of childbearing age
- Government epilepsy programs provide free AEDs through district hospitals

> **Clinical Pearl**: HLA-B*1502 testing before starting carbamazepine is recommended in Indian patients (South Asian population has higher prevalence of this allele linked to SJS/TEN).`,
        mnemonics: [
          {
            text: "Valproate in Pregnancy = Very Problematic (neural tube defects!)",
            explanation:
              "Valproate is the most teratogenic AED. Causes spina bifida, cardiac defects, and developmental delay/autism. Women of childbearing age should use lamotrigine or levetiracetam instead.",
          },
        ],
        keyPoints: [
          "Valproate: most teratogenic AED, avoid in pregnancy (NTDs, cardiac defects, autism)",
          "Safest AEDs in pregnancy: Lamotrigine, Levetiracetam + Folic acid 5 mg",
          "Enzyme-inducing AEDs (Phenytoin, CBZ) reduce OCP efficacy",
          "HLA-B*1502 testing in Indian patients before CBZ (SJS risk)",
          "AED withdrawal after 2-3 seizure-free years; taper gradually",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 30", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "antiepileptic-drugs-exam",
        title: "Antiepileptic Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield AED facts for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- DOC for absence seizures: **Ethosuximide** (pure absence); **Valproate** (if GTCS coexists)
- DOC for GTCS: **Valproate, Levetiracetam, Phenytoin**
- DOC for focal seizures: **Carbamazepine, Oxcarbazepine, Levetiracetam**
- DOC for myoclonic epilepsy: **Valproate**
- DOC for infantile spasms: **ACTH, Vigabatrin**
- DOC for neonatal seizures: **Phenobarbitone**
- DOC for status epilepticus: **IV Lorazepam**
- Broadest spectrum AED: **Valproate**
- Most teratogenic AED: **Valproate** (neural tube defects)
- AED with zero-order kinetics: **Phenytoin**
- AED causing gum hypertrophy: **Phenytoin**
- AED causing SIADH/hyponatremia: **Carbamazepine, Oxcarbazepine**
- AED auto-induction: **Carbamazepine** (CYP3A4)
- AED with HLA-B*1502 SJS risk: **Carbamazepine** (test in Asians)
- Safest AEDs in pregnancy: **Lamotrigine, Levetiracetam**
- AED causing hair loss + weight gain: **Valproate**
- AED causing weight loss: **Topiramate**
- Valproate + Lamotrigine interaction: **Increased SJS risk** (reduce lamotrigine dose)

## Phenytoin Toxicity (Dose-Dependent)
| Level | Manifestation |
|-------|--------------|
| 20-30 mcg/mL | Nystagmus (earliest sign) |
| 30-40 mcg/mL | Ataxia, slurred speech |
| >40 mcg/mL | Lethargy, coma |
| Chronic | Gum hypertrophy, hirsutism, acne, osteomalacia, megaloblastic anemia |`,
        mnemonics: [
          {
            text: "Phenytoin toxicity progression: N-A-C (Nystagmus -> Ataxia -> Coma)",
            explanation:
              "Phenytoin toxicity manifests progressively: Nystagmus (20-30 mcg/mL), Ataxia (30-40), Coma (>40). Nystagmus is the EARLIEST sign of toxicity.",
          },
        ],
        keyPoints: [
          "Ethosuximide: DOC for pure absence; Valproate: broadest spectrum",
          "Phenytoin: zero-order kinetics, gum hypertrophy, nystagmus first sign of toxicity",
          "Valproate: most teratogenic, avoid in pregnancy",
          "Carbamazepine: auto-induction, SIADH, HLA-B*1502 SJS",
          "SE: Lorazepam -> Phenytoin -> Phenobarbitone -> GA",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 30", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "antiepileptic-drugs-recall",
        title: "Antiepileptic Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on antiepileptic drugs.",
        contentMd: `# Active Recall

**Q1:** DOC for pure absence seizures?
> Ethosuximide (blocks T-type Ca2+ channels in thalamic neurons). If GTCS coexists, use valproate.

**Q2:** Which AED follows zero-order kinetics?
> Phenytoin. At therapeutic doses, metabolism is saturated (Michaelis-Menten). Small dose changes cause large plasma level changes.

**Q3:** Most teratogenic AED?
> Valproate. Causes neural tube defects (spina bifida), cardiac defects, developmental delay/autism. Avoid in women of childbearing age.

**Q4:** Earliest sign of phenytoin toxicity?
> Nystagmus (at plasma levels 20-30 mcg/mL). Followed by ataxia, then coma at higher levels.

**Q5:** What is carbamazepine auto-induction?
> CBZ induces CYP3A4, which metabolizes CBZ itself. After 2-4 weeks, its own levels drop and dose needs increasing.

**Q6:** Protocol for status epilepticus?
> Lorazepam IV -> Phenytoin IV -> Phenobarbitone IV -> General anesthesia (midazolam/propofol/thiopentone infusion in ICU).

**Q7:** Safest AEDs in pregnancy?
> Lamotrigine and Levetiracetam. Always supplement with folic acid 5 mg/day. Avoid valproate.

**Q8:** Why test HLA-B*1502 before starting carbamazepine in Indian patients?
> HLA-B*1502 allele is more prevalent in South Asian populations and is strongly associated with carbamazepine-induced SJS/TEN. Testing prevents this serious ADR.`,
        mnemonics: [],
        keyPoints: ["8 recall questions on antiepileptic drugs"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 30", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 4: Antipsychotics & Antidepressants ──────────────
  {
    topicCode: "PH-MOD-04-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "antipsychotics-antidepressants-foundation",
        title: "Antipsychotics & Antidepressants - Foundation",
        estimatedMinutes: 20,
        summary:
          "Antipsychotics (typical and atypical) treat schizophrenia by blocking D2 receptors. Antidepressants (SSRIs, TCAs, SNRIs) treat depression by enhancing serotonin and/or norepinephrine. Lithium is the gold standard for bipolar disorder.",
        contentMd: `# Antipsychotics & Antidepressants

## Antipsychotics (Neuroleptics)

### Typical (First-Generation) - Block D2 Receptors
| Drug | Potency | Special Features |
|------|---------|-----------------|
| **Chlorpromazine** | Low | Sedation, postural hypotension, prototypical |
| **Haloperidol** | High | Less sedation, MORE EPS, DOC for acute psychosis |
| **Fluphenazine** | High | Depot injection (every 2-4 weeks) |

### Atypical (Second-Generation) - Block D2 + 5-HT2A
| Drug | Special Features |
|------|-----------------|
| **Clozapine** | Most effective for treatment-resistant schizophrenia; risk of agranulocytosis |
| **Olanzapine** | Weight gain, metabolic syndrome |
| **Risperidone** | Most commonly used atypical; hyperprolactinemia |
| **Quetiapine** | Sedating, used for bipolar depression |
| **Aripiprazole** | D2 partial agonist (less EPS, less metabolic ADRs) |
| **Ziprasidone** | QT prolongation risk, less weight gain |

## Antidepressants

| Class | Drugs | Mechanism |
|-------|-------|-----------|
| **SSRIs** | Fluoxetine, Sertraline, Escitalopram, Paroxetine | Block serotonin (5-HT) reuptake |
| **SNRIs** | Venlafaxine, Duloxetine | Block 5-HT + NE reuptake |
| **TCAs** | Amitriptyline, Imipramine, Nortriptyline | Block 5-HT + NE reuptake + multiple receptor block |
| **MAOIs** | Phenelzine, Tranylcypromine, Moclobemide | Inhibit MAO (A and/or B) |
| **Atypical** | Bupropion, Mirtazapine, Trazodone | Various mechanisms |

## Mood Stabilizers
- **Lithium**: Gold standard for bipolar disorder (acute mania + prophylaxis)
- **Valproate**: Alternative for acute mania
- **Carbamazepine**: For rapid-cycling bipolar
- **Lamotrigine**: Bipolar depression prophylaxis`,
        mnemonics: [
          {
            text: "SGA = Serotonin + D2 block: Cloz-Olan-Risp-Quet-Arip (CORQA)",
            explanation:
              "Second-generation (atypical) antipsychotics block both D2 and 5-HT2A receptors: Clozapine, Olanzapine, Risperidone, Quetiapine, Aripiprazole.",
          },
          {
            text: "SSRIs: Sertraline, fluoXetine, Escitalopram, Paroxetine, Fluvoxamine = Safe First-Line",
            explanation:
              "SSRIs are first-line antidepressants due to their favorable side-effect profile compared to TCAs and MAOIs.",
          },
        ],
        keyPoints: [
          "Typical antipsychotics: D2 block (haloperidol = high potency, more EPS)",
          "Atypical: D2 + 5-HT2A block (less EPS, but metabolic ADRs)",
          "Clozapine: most effective for resistant schizophrenia; agranulocytosis risk",
          "SSRIs: first-line antidepressants (fluoxetine, escitalopram)",
          "Lithium: gold standard mood stabilizer for bipolar disorder",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 31 - Antipsychotics; Ch 32 - Antidepressants", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 16", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "antipsychotics-antidepressants-mechanism",
        title: "Antipsychotics & Antidepressants - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Dopamine pathways, EPS mechanism, NMS, serotonin syndrome, monoamine hypothesis of depression, and lithium pharmacology.",
        contentMd: `# Mechanisms

## Dopamine Pathways and Antipsychotic Effects
| Pathway | Normal Function | Effect of D2 Block |
|---------|----------------|-------------------|
| **Mesolimbic** | Reward, motivation | Reduces positive symptoms (hallucinations, delusions) - DESIRED |
| **Mesocortical** | Cognition, executive function | May worsen negative symptoms (apathy, social withdrawal) |
| **Nigrostriatal** | Motor control | EPS (Parkinsonism, dystonia, akathisia, tardive dyskinesia) |
| **Tuberoinfundibular** | Inhibits prolactin | Hyperprolactinemia (galactorrhea, amenorrhea, gynecomastia) |

## Extrapyramidal Side Effects (EPS)
| EPS Type | Timing | Features | Treatment |
|----------|--------|----------|-----------|
| **Acute dystonia** | Hours-days | Torticollis, oculogyric crisis | IV Diphenhydramine or Benztropine |
| **Akathisia** | Days-weeks | Restlessness, inability to sit | Beta-blocker (propranolol), BZD |
| **Parkinsonism** | Weeks-months | Tremor, rigidity, bradykinesia | Trihexyphenidyl (anticholinergic) |
| **Tardive dyskinesia** | Months-years | Orofacial dyskinesia (lip smacking, tongue protrusion) | Switch to clozapine, Valbenazine |

## Neuroleptic Malignant Syndrome (NMS)
- **Life-threatening** emergency from antipsychotic use (especially high-potency typical)
- Features: **FEVER** (high), **Rigidity** (lead-pipe), **Autonomic instability**, **Elevated CK**, **Altered consciousness**
- Treatment: **Stop antipsychotic** + Dantrolene + Bromocriptine + supportive (cooling, hydration)
- Differentiate from serotonin syndrome (see below)

## Monoamine Hypothesis of Depression
- Depression = deficiency of serotonin (5-HT) and/or norepinephrine (NE) in brain
- Antidepressants increase monoamine availability
- Therapeutic effect takes 2-4 weeks (receptor adaptation and neuroplasticity needed)

## Serotonin Syndrome
- Excess serotonergic activity (SSRI + MAOI, SSRI + tramadol, SSRI + linezolid)
- Features: **CLONUS** (myoclonus), hyperreflexia, agitation, hyperthermia, diarrhea
- Treatment: Stop serotonergic drugs + cyproheptadine (5-HT antagonist) + cooling

## NMS vs Serotonin Syndrome
| Feature | NMS | Serotonin Syndrome |
|---------|-----|-------------------|
| Cause | Antipsychotics (D2 block) | Serotonergic drugs |
| Onset | Days-weeks | Hours |
| Muscle | Lead-pipe rigidity | Clonus, hyperreflexia |
| Treatment | Dantrolene + Bromocriptine | Cyproheptadine |

## Lithium Pharmacology
- Mechanism: Inhibits inositol monophosphatase (depletes IP3/DAG signaling), modulates GSK-3beta
- Narrow TI: 0.6-1.2 mEq/L (therapeutic), >1.5 = toxic
- Excreted by kidneys (80% reabsorbed in PCT, competes with Na+)
- Na+ depletion increases lithium reabsorption -> toxicity (diuretics, dehydration)
- Toxicity: Tremor, GI disturbance, polyuria, hypothyroidism, nephrogenic DI, cardiac arrhythmias`,
        mnemonics: [
          {
            text: "NMS = Neuroleptics Make you Stiff and hot (rigidity + fever)",
            explanation:
              "NMS is caused by antipsychotics (neuroleptics). Cardinal features: Lead-pipe rigidity + Hyperthermia + Elevated CK + Autonomic instability. Treat with Dantrolene + Bromocriptine.",
          },
          {
            text: "Serotonin Syndrome = CLONUS (myoclonus, hyperreflexia, agitation)",
            explanation:
              "Serotonin syndrome features clonus and hyperreflexia (vs lead-pipe rigidity in NMS). Caused by serotonergic drugs (SSRI+MAOI). Treat with cyproheptadine.",
          },
        ],
        keyPoints: [
          "4 dopamine pathways: mesolimbic (positive Sx), nigrostriatal (EPS), tuberoinfundibular (prolactin)",
          "EPS: dystonia (acute) -> akathisia -> parkinsonism -> tardive dyskinesia (late)",
          "NMS: rigidity + fever + elevated CK; treat with Dantrolene + Bromocriptine",
          "Serotonin syndrome: clonus + hyperreflexia + agitation; treat with Cyproheptadine",
          "Lithium: narrow TI (0.6-1.2), Na+ depletion increases toxicity",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 31-32", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "antipsychotics-antidepressants-clinical",
        title: "Antipsychotics & Antidepressants - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Drug choice for schizophrenia, depression, bipolar disorder, and special clinical scenarios. Indian mental health context.",
        contentMd: `# Clinical Applications

## Schizophrenia Treatment
- **Acute psychosis**: Haloperidol IM (rapid tranquilization) or Olanzapine IM
- **Maintenance**: Atypical antipsychotics (Risperidone, Olanzapine) first-line
- **Treatment-resistant** (failed 2 antipsychotics): **Clozapine** (most effective)
- **Clozapine monitoring**: Weekly CBC for 6 months, then biweekly (agranulocytosis risk 1-2%)

## Depression Treatment
- **Mild-Moderate**: CBT + SSRI (Escitalopram or Sertraline)
- **Severe/Suicidal**: SSRI + short-term BZD; ECT for immediate risk
- **Duration**: Continue 6-9 months after remission (first episode); lifelong if recurrent
- **Treatment-resistant**: Augment with Lithium, Aripiprazole, or switch to SNRI/TCA

## SSRI Side Effects
- GI (nausea, diarrhea) - usually transient
- Sexual dysfunction (decreased libido, anorgasmia) - most common reason for discontinuation
- Weight gain (paroxetine > others)
- Hyponatremia (SIADH - especially in elderly)
- Serotonin syndrome (when combined with MAOIs - CONTRAINDICATED!)
- Discontinuation syndrome (abrupt stop of short-acting SSRIs like paroxetine)

## TCA Overdose
- Dangerous! Narrow TI compared to SSRIs
- Features: Anticholinergic toxicity + Cardiac arrhythmias (prolonged QRS, VT) + Seizures + Coma
- ECG: Widened QRS >100 ms is concerning
- Treatment: IV NaHCO3 (alkalinization), supportive care

## Bipolar Disorder
- **Acute mania**: Lithium + Antipsychotic (Olanzapine or Haloperidol)
- **Maintenance**: Lithium (gold standard) or Valproate
- **Bipolar depression**: Quetiapine, Lamotrigine (avoid antidepressants alone - may trigger mania)

> **Indian Context**: Mental Healthcare Act 2017 decriminalized suicide attempts in India. District Mental Health Programme (DMHP) provides free psychiatric medications including haloperidol, chlorpromazine, and fluoxetine at PHC level. Stigma remains a major barrier to treatment.`,
        mnemonics: [
          {
            text: "Clozapine = CLOZ-est to cure (most effective antipsychotic, but needs CBC monitoring)",
            explanation:
              "Clozapine is the most effective antipsychotic for treatment-resistant schizophrenia. But 1-2% risk of agranulocytosis requires regular CBC monitoring.",
          },
        ],
        keyPoints: [
          "Treatment-resistant schizophrenia: Clozapine (weekly CBC for agranulocytosis)",
          "SSRIs: first-line antidepressants; sexual dysfunction is main reason for stopping",
          "SSRI + MAOI: ABSOLUTELY CONTRAINDICATED (serotonin syndrome)",
          "TCA overdose: cardiac arrhythmias (widened QRS); treat with IV NaHCO3",
          "Bipolar: Lithium gold standard; avoid antidepressants alone (trigger mania)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 31-32", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "antipsychotics-antidepressants-exam",
        title: "Antipsychotics & Antidepressants - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield psychiatry pharmacology for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Most effective antipsychotic: **Clozapine** (treatment-resistant schizophrenia)
- Clozapine serious ADR: **Agranulocytosis** (1-2%, needs weekly CBC)
- D2 partial agonist antipsychotic: **Aripiprazole** (least EPS and metabolic ADRs)
- Antipsychotic with most weight gain: **Olanzapine, Clozapine**
- DOC for acute psychosis: **Haloperidol** (high potency typical)
- NMS treatment: **Dantrolene + Bromocriptine**
- Serotonin syndrome treatment: **Cyproheptadine** (5-HT antagonist)
- SSRI + MAOI combination: **CONTRAINDICATED** (serotonin syndrome)
- First-line antidepressant: **SSRI** (Escitalopram/Sertraline)
- TCA overdose ECG finding: **Widened QRS** (>100 ms)
- TCA overdose treatment: **IV NaHCO3** (alkalinization)
- DOC for enuresis: **Imipramine** (TCA)
- DOC for neuropathic pain: **Amitriptyline** (TCA) or Duloxetine (SNRI)
- Antidepressant safest in cardiac patients: **Sertraline**
- Lithium therapeutic range: **0.6-1.2 mEq/L**
- Lithium causes: **Nephrogenic DI, Hypothyroidism, Tremor, Ebstein anomaly (teratogenic)**
- Tardive dyskinesia: **Late-onset** orofacial dyskinesia from chronic antipsychotic use

## SSRI vs TCA Safety Profile
| Feature | SSRIs | TCAs |
|---------|-------|------|
| Therapeutic index | Wide | Narrow |
| Overdose risk | Low | High (cardiac) |
| Anticholinergic effects | Minimal | Significant |
| First-line status | Yes | Second-line |
| Sexual dysfunction | Common | Less common |`,
        mnemonics: [
          {
            text: "Lithium LENT: Lithium causes Ebstein anomaly (teratogenic), Nephrogenic DI, Thyroid (hypo), Tremor",
            explanation:
              "Lithium ADRs to remember: Ebstein anomaly (cardiac teratogenicity), Nephrogenic diabetes insipidus (polyuria), Hypothyroidism, Fine tremor.",
          },
        ],
        keyPoints: [
          "Clozapine: most effective, agranulocytosis risk",
          "NMS: rigidity + fever + CK up -> Dantrolene + Bromocriptine",
          "SSRI + MAOI = serotonin syndrome (NEVER combine)",
          "TCA OD: widened QRS, treat with NaHCO3",
          "Lithium: LENT (Ebstein, Nephrogenic DI, Thyroid, Tremor), narrow TI",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 31-32", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "antipsychotics-antidepressants-recall",
        title: "Antipsychotics & Antidepressants - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on antipsychotics, antidepressants, and mood stabilizers.",
        contentMd: `# Active Recall

**Q1:** Most effective antipsychotic for treatment-resistant schizophrenia?
> Clozapine. Requires regular CBC monitoring (weekly for 6 months then biweekly) due to 1-2% risk of agranulocytosis.

**Q2:** Differentiate NMS from serotonin syndrome.
> NMS: caused by antipsychotics, lead-pipe rigidity, fever, elevated CK, treated with dantrolene + bromocriptine. SS: caused by serotonergic drugs, clonus/hyperreflexia, treated with cyproheptadine.

**Q3:** Why are SSRIs first-line antidepressants over TCAs?
> SSRIs have wider therapeutic index (safer in overdose), fewer anticholinergic effects, and less cardiotoxicity. TCAs cause fatal cardiac arrhythmias in overdose.

**Q4:** What is the danger of combining SSRIs with MAOIs?
> Serotonin syndrome - potentially fatal serotonergic excess. Must have 2-week washout period (5 weeks for fluoxetine due to long t1/2).

**Q5:** Lithium therapeutic range and major toxicities?
> 0.6-1.2 mEq/L. Toxicities: Nephrogenic DI (polyuria), Hypothyroidism, Tremor, Ebstein anomaly (teratogenic), Renal impairment.

**Q6:** Treatment of acute dystonia from antipsychotics?
> IV Diphenhydramine (antihistamine) or IV Benztropine (anticholinergic). Works within minutes.

**Q7:** Why does Na+ depletion increase lithium toxicity?
> Lithium is reabsorbed in the PCT competing with Na+. When Na+ is depleted (diuretics, dehydration, low-salt diet), more lithium is reabsorbed -> toxicity.

**Q8:** What is tardive dyskinesia?
> Late-onset (months-years) involuntary orofacial movements (lip smacking, tongue protrusion) from chronic antipsychotic use. Due to D2 receptor supersensitivity. Treat: switch to clozapine, valbenazine.`,
        mnemonics: [],
        keyPoints: ["8 recall questions on antipsychotics, antidepressants, and mood stabilizers"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 31-32", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 5: Opioid Analgesics ─────────────────────────────
  {
    topicCode: "PH-MOD-04-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "opioid-analgesics-foundation",
        title: "Opioid Analgesics - Foundation",
        estimatedMinutes: 20,
        summary:
          "Opioids act on mu, kappa, and delta receptors to produce analgesia. Morphine is the prototype. Key considerations: respiratory depression, tolerance, dependence, and constipation.",
        contentMd: `# Opioid Analgesics

## Opioid Receptors
| Receptor | G-protein | Effects | Agonist |
|----------|-----------|---------|---------|
| **Mu (MOP)** | Gi | Analgesia (supraspinal), euphoria, respiratory depression, miosis, constipation, dependence | Morphine, Fentanyl |
| **Kappa (KOP)** | Gi | Analgesia (spinal), sedation, dysphoria | Pentazocine |
| **Delta (DOP)** | Gi | Analgesia, mood modulation | Enkephalins |

## Classification
### Strong Agonists
| Drug | Route | Special Features |
|------|-------|-----------------|
| **Morphine** | IV, IM, oral, SC | Prototype, releases histamine |
| **Fentanyl** | IV, transdermal, transmucosal | 100x more potent than morphine, short-acting IV |
| **Pethidine (Meperidine)** | IV, IM | Atropine-like effects (no miosis), norpethidine causes seizures |
| **Methadone** | Oral | Long-acting, used for opioid de-addiction, prevents withdrawal |
| **Hydromorphone** | IV, oral | 5x morphine potency |

### Moderate Agonists
- **Codeine**: Mild-moderate pain, antitussive (prodrug -> morphine via CYP2D6)
- **Tramadol**: Weak mu agonist + NE/5-HT reuptake inhibitor; seizure risk

### Partial Agonists / Mixed
- **Buprenorphine**: Partial mu agonist - ceiling on respiratory depression, used in opioid dependence
- **Pentazocine**: Kappa agonist + weak mu antagonist - may cause dysphoria, less dependence

### Antagonists
- **Naloxone**: IV, short-acting (30-60 min), DOC for opioid overdose
- **Naltrexone**: Oral, long-acting, used for alcohol/opioid dependence maintenance

## Morphine Effects
- **CNS**: Analgesia, euphoria, sedation, respiratory depression, miosis (pinpoint pupils), antitussive, emesis (CTZ)
- **CVS**: Hypotension (histamine release + vagal stimulation), bradycardia
- **GI**: Constipation (most persistent effect - no tolerance develops), spasm of sphincter of Oddi
- **Smooth muscle**: Bronchospasm (histamine), urinary retention`,
        mnemonics: [
          {
            text: "MOP = Mu Opioid Produces: Miosis, O-constipation, Pain relief, respiratory depression",
            explanation:
              "Mu receptor activation causes the classic opioid triad: miosis (pinpoint pupils), respiratory depression, and constipation. Plus analgesia and euphoria.",
          },
          {
            text: "Fentanyl is 100x Fearsome (100x more potent than morphine)",
            explanation:
              "Fentanyl is 100 times more potent than morphine. Used IV during anesthesia and as transdermal patches for chronic cancer pain.",
          },
        ],
        keyPoints: [
          "Mu receptor: analgesia, euphoria, respiratory depression, constipation, dependence",
          "Morphine: prototype, causes histamine release, constipation (no tolerance)",
          "Fentanyl: 100x morphine potency, transdermal patches for cancer pain",
          "Naloxone: DOC for opioid overdose (IV, short-acting)",
          "Buprenorphine: partial mu agonist, ceiling on respiratory depression, for de-addiction",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 34 - Opioid Analgesics", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 20", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "opioid-analgesics-mechanism",
        title: "Opioid Analgesics - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Opioid receptor signaling, tolerance and dependence mechanisms, opioid overdose pharmacology, and WHO pain ladder.",
        contentMd: `# Mechanisms

## Opioid Receptor Signaling
All opioid receptors are Gi/Go-coupled GPCRs:
1. **Inhibit adenylyl cyclase** -> decrease cAMP
2. **Open K+ channels** -> hyperpolarization (postsynaptic)
3. **Close Ca2+ channels** -> decrease neurotransmitter release (presynaptic)
4. Net effect: Inhibition of pain signal transmission

## Pain Pathways Affected
- **Spinal**: Opioids in dorsal horn inhibit substance P and glutamate release
- **Supraspinal**: PAG (periaqueductal gray) activation -> descending inhibition of pain
- **Peripheral**: Opioid receptors on inflamed tissue (peripheral analgesia)

## Tolerance
- Develops to: Analgesia, euphoria, respiratory depression, sedation, emesis
- Does NOT develop to: **Constipation** and **miosis** (these persist with chronic use)
- Mechanism: Mu receptor desensitization (phosphorylation, uncoupling, internalization)
- Cross-tolerance between opioids (incomplete - basis for opioid rotation)

## Physical Dependence and Withdrawal
### Withdrawal Syndrome (opposite of opioid effects)
- Lacrimation, rhinorrhea, yawning
- Mydriasis (opposite of miosis)
- Diarrhea (opposite of constipation)
- Piloerection ("goose bumps" - "cold turkey")
- Muscle cramps, anxiety, insomnia
- Onset: 6-12h after last morphine dose; peaks at 36-72h

### Treatment of Opioid Dependence
- **Methadone substitution**: Long-acting oral opioid, prevents withdrawal, reduces cravings
- **Buprenorphine/Naloxone (Suboxone)**: Partial agonist, ceiling effect safer
- **Naltrexone**: Long-acting antagonist, prevents relapse after detox

## WHO Analgesic Ladder (Cancer Pain)
| Step | Pain | Treatment |
|------|------|-----------|
| 1 | Mild | Paracetamol / NSAIDs |
| 2 | Moderate | Weak opioid (Codeine, Tramadol) +/- Step 1 |
| 3 | Severe | Strong opioid (Morphine, Fentanyl) +/- Step 1 |

- Adjuvants at any step: Antidepressants (neuropathic pain), Anticonvulsants (gabapentin), Corticosteroids`,
        mnemonics: [
          {
            text: "No Tolerance to COnstipation and MIosis (CO-MI persist forever with opioids)",
            explanation:
              "Tolerance develops to most opioid effects (analgesia, euphoria, respiratory depression) but NOT to constipation and miosis - these persist with chronic use.",
          },
          {
            text: "Opioid Withdrawal = Opposite: Mydriasis, Diarrhea, Piloerection (opposite of miosis, constipation, smooth muscle relaxation)",
            explanation:
              "Opioid withdrawal produces effects opposite to chronic opioid actions: mydriasis (vs miosis), diarrhea (vs constipation), lacrimation, rhinorrhea, piloerection.",
          },
        ],
        keyPoints: [
          "Opioid receptors: Gi-coupled -> decrease cAMP, open K+, close Ca2+ channels",
          "No tolerance to constipation and miosis (persist with chronic use)",
          "Withdrawal: mydriasis, diarrhea, piloerection (opposite of opioid effects)",
          "Methadone/Buprenorphine: opioid substitution therapy for dependence",
          "WHO pain ladder: Paracetamol/NSAID -> Weak opioid -> Strong opioid",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 34", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "opioid-analgesics-clinical",
        title: "Opioid Analgesics - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Opioid overdose management, cancer pain, opioid-sparing strategies, and Indian regulatory context.",
        contentMd: `# Clinical Applications

## Opioid Overdose
### Clinical Triad
1. **Pinpoint pupils** (miosis)
2. **Respiratory depression** (bradypnea, apnea)
3. **CNS depression** (unconsciousness)

### Management
- **ABCs** (secure airway, ventilate)
- **Naloxone 0.4-2 mg IV** (repeat every 2-3 min as needed)
- Naloxone t1/2 (30-60 min) < most opioids -> re-sedation risk -> may need infusion
- For long-acting opioids (methadone): prolonged naloxone infusion

> **Clinical Pearl**: In suspected opioid OD, naloxone is both diagnostic and therapeutic. If no response to 10 mg total naloxone, reconsider diagnosis.

## Cancer Pain Management
- Follow WHO analgesic ladder
- **Oral morphine**: Mainstay for severe cancer pain
- Immediate release (q4h) for titration; Extended release (q12h) for maintenance
- **Breakthrough pain**: Additional immediate-release dose (10-15% of 24h total)
- **Fentanyl transdermal patch**: For stable pain (72h duration)
- **Opioid rotation**: If tolerance develops, switch to different opioid (incomplete cross-tolerance)
- Always prescribe **laxatives** with chronic opioids (constipation is inevitable)

## Opioid-Sparing Strategies
- Multimodal analgesia: opioid + paracetamol + NSAID + regional block
- Reduces opioid dose and ADRs
- Adjuvants: Gabapentin/Pregabalin for neuropathic component

## Tramadol: Dual Mechanism
- Weak mu agonist + inhibits NE and 5-HT reuptake
- Useful for moderate pain and neuropathic pain
- ADRs: Seizures (lowers threshold), serotonin syndrome (with SSRIs)
- Less constipation and respiratory depression than morphine

## Indian Regulatory Context
- **NDPS Act (Narcotic Drugs and Psychotropic Substances Act, 1985)**: Regulates opioid prescribing
- **2014 amendment**: Simplified opioid access for cancer pain (recognized essential medicines)
- Oral morphine classified as essential medicine by NLEM and WHO
- Despite reforms, opioid access for cancer pain remains limited in rural India
- **Opioid Substitution Therapy (OST)**: Available through NACO for IV drug users (methadone, buprenorphine)`,
        mnemonics: [
          {
            text: "Opioid OD triad: Pin-Point-Pupils + Respiratory Depression + Unconsciousness -> give Naloxone",
            explanation:
              "The classic triad of opioid overdose: Miosis (pinpoint pupils), respiratory depression, and CNS depression. Naloxone IV reverses all effects rapidly.",
          },
        ],
        keyPoints: [
          "Opioid OD: miosis + respiratory depression + CNS depression -> Naloxone IV",
          "Naloxone short-acting (30-60 min) - may need repeated doses or infusion",
          "Cancer pain: oral morphine is mainstay, always co-prescribe laxatives",
          "Tramadol: weak mu agonist + NE/5-HT reuptake inhibitor, seizure risk",
          "India: NDPS Act amended 2014 to improve cancer pain opioid access",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 34", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "opioid-analgesics-exam",
        title: "Opioid Analgesics - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield opioid pharmacology for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Opioid overdose antidote: **Naloxone** (IV, short-acting)
- Opioid causing seizures (norpethidine): **Pethidine (Meperidine)**
- Most potent common opioid: **Fentanyl** (100x morphine)
- Partial mu agonist for de-addiction: **Buprenorphine**
- Long-acting opioid for de-addiction: **Methadone**
- Opioid NOT causing miosis: **Pethidine** (atropine-like action)
- Opioid effect with NO tolerance: **Constipation, Miosis**
- Opioid causing histamine release: **Morphine** (bronchospasm, hypotension)
- Opioid contraindicated in raised ICP: **Morphine** (causes CO2 retention -> cerebral vasodilation)
- Opioid contraindicated in biliary colic: **Morphine** (spasms sphincter of Oddi) - use pethidine
- WHO Pain Step 3: **Strong opioids** (Morphine, Fentanyl)
- Kappa agonist causing dysphoria: **Pentazocine**
- Opioid withdrawal feature: **Piloerection ("goose bumps")**
- Opioid prodrug activated by CYP2D6: **Codeine** (converted to morphine)
- Tramadol unique risk: **Seizures + Serotonin syndrome**

## Naloxone vs Naltrexone
| Feature | Naloxone | Naltrexone |
|---------|----------|-----------|
| Route | IV, IM | Oral |
| Onset | 1-2 min IV | 15-30 min |
| Duration | 30-60 min | 24-72h |
| Use | Acute OD | Maintenance (alcohol + opioid dependence) |`,
        mnemonics: [
          {
            text: "Morphine Spasms Sphincter of Oddi = Avoid in Biliary colic (use Pethidine)",
            explanation:
              "Morphine causes contraction of the sphincter of Oddi, worsening biliary colic pain. Pethidine (meperidine) has less effect on biliary smooth muscle. However, some guidelines now prefer fentanyl.",
          },
        ],
        keyPoints: [
          "Naloxone: acute opioid OD reversal; Naltrexone: long-term maintenance",
          "Fentanyl: 100x morphine; Pethidine: seizures (norpethidine), no miosis",
          "No tolerance to constipation and miosis",
          "Morphine: avoid in biliary colic (spasms sphincter of Oddi) and raised ICP",
          "Codeine: CYP2D6 prodrug -> morphine; poor metabolizers get no effect",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 34", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "opioid-analgesics-recall",
        title: "Opioid Analgesics - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on opioid analgesics.",
        contentMd: `# Active Recall

**Q1:** Classic triad of opioid overdose?
> Pinpoint pupils (miosis) + Respiratory depression + CNS depression. Treat with IV naloxone.

**Q2:** Which opioid effects do NOT develop tolerance?
> Constipation and miosis. These persist with chronic use and tolerance does not develop.

**Q3:** Fentanyl vs Morphine: potency ratio?
> Fentanyl is 100x more potent than morphine. Used as transdermal patches (72h) for cancer pain and IV during anesthesia.

**Q4:** Why is morphine contraindicated in biliary colic?
> Morphine causes spasm of the sphincter of Oddi, worsening biliary pain. Use pethidine or fentanyl instead.

**Q5:** Drugs used for opioid de-addiction?
> Methadone (long-acting oral opioid substitution), Buprenorphine (partial mu agonist with ceiling), Naltrexone (long-acting oral antagonist for relapse prevention).

**Q6:** What is the WHO analgesic ladder?
> Step 1: Non-opioid (paracetamol/NSAID). Step 2: Weak opioid (codeine/tramadol). Step 3: Strong opioid (morphine/fentanyl). Plus adjuvants at any step.

**Q7:** Why must naloxone sometimes be given as an infusion?
> Naloxone has a short half-life (30-60 min), shorter than most opioids. Patients can re-sedate after naloxone wears off, requiring repeated doses or continuous infusion.

**Q8:** Tramadol unique mechanism and risks?
> Dual mechanism: weak mu agonist + NE/5-HT reuptake inhibitor. Risks: seizures (lowers threshold) and serotonin syndrome (especially with SSRIs).`,
        mnemonics: [],
        keyPoints: ["8 recall questions on opioid analgesics"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 34", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 6: Anti-Parkinsonism Drugs ───────────────────────
  {
    topicCode: "PH-MOD-04-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "anti-parkinsonism-drugs-foundation",
        title: "Anti-Parkinsonism Drugs - Foundation",
        estimatedMinutes: 20,
        summary:
          "Parkinson's disease results from dopamine deficiency in the nigrostriatal pathway. Treatment aims to restore dopaminergic-cholinergic balance. Levodopa + Carbidopa is the gold standard.",
        contentMd: `# Anti-Parkinsonism Drugs

## Pathophysiology
- Degeneration of **dopaminergic neurons in substantia nigra pars compacta**
- Reduced dopamine in **nigrostriatal pathway** -> striatum
- **Dopamine-ACh imbalance**: Relative excess of ACh activity
- Cardinal features: **TRAP** = Tremor (resting, pill-rolling), Rigidity (cogwheel), Akinesia/Bradykinesia, Postural instability

## Drug Classification

### 1. Dopaminergic Drugs (Increase Dopamine)

| Strategy | Drug | Mechanism |
|----------|------|-----------|
| **DA precursor** | Levodopa + Carbidopa (Sinemet) | L-DOPA converted to DA in brain |
| **DA agonists** | Pramipexole, Ropinirole, Bromocriptine, Rotigotine | Directly stimulate D2/D3 receptors |
| **MAO-B inhibitor** | Selegiline, Rasagiline | Prevent DA breakdown |
| **COMT inhibitor** | Entacapone, Tolcapone | Prevent peripheral L-DOPA degradation |
| **DA releaser** | Amantadine | Increases DA release + NMDA antagonism |

### 2. Anticholinergic Drugs (Reduce ACh)
- **Trihexyphenidyl (Benzhexol)**, Benztropine
- Mainly for tremor (less effective for bradykinesia)
- ADRs: Dry mouth, urinary retention, confusion (especially in elderly)

## Levodopa + Carbidopa: The Gold Standard
- **Levodopa**: DA precursor, crosses BBB, converted to DA by DOPA decarboxylase
- **Carbidopa**: Peripheral DOPA decarboxylase inhibitor (does NOT cross BBB)
  - Prevents peripheral conversion of L-DOPA to DA
  - Reduces nausea, vomiting, cardiac ADRs
  - Increases L-DOPA bioavailability to brain by 4-5x
- Alternative: Levodopa + Benserazide (Madopar)

## Why Not Give Dopamine Directly?
Dopamine does NOT cross the BBB. Levodopa (its precursor) does cross, and is converted to dopamine inside the brain.`,
        mnemonics: [
          {
            text: "TRAP for Parkinsonism: Tremor, Rigidity, Akinesia, Postural instability",
            explanation:
              "The four cardinal features of Parkinson's disease. Tremor is resting (pill-rolling, 4-6 Hz), rigidity is cogwheel, and bradykinesia is the most disabling feature.",
          },
          {
            text: "CarbiDOPA CARBs the peripheral DOPA decarboxylase (does not cross BBB)",
            explanation:
              "Carbidopa inhibits DOPA decarboxylase ONLY peripherally (cannot cross BBB). This prevents wasteful peripheral conversion of L-DOPA to DA, reducing ADRs and increasing brain DA.",
          },
        ],
        keyPoints: [
          "PD: dopamine deficiency in nigrostriatal pathway -> ACh excess",
          "TRAP: Tremor, Rigidity, Akinesia, Postural instability",
          "Levodopa + Carbidopa: gold standard; Carbidopa blocks peripheral decarboxylase",
          "Dopamine itself cannot cross BBB; Levodopa can",
          "Anticholinergics (Trihexyphenidyl): mainly for tremor, avoid in elderly",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 29 - Antiparkinsonism Drugs", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 18", edition: "13th" },
        ],
      },
      {
        layer: 2,
        slug: "anti-parkinsonism-drugs-mechanism",
        title: "Anti-Parkinsonism Drugs - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Levodopa pharmacokinetics, wearing-off and on-off phenomena, dyskinesias, DA agonist pharmacology, and MAO-B/COMT inhibitor roles.",
        contentMd: `# Mechanisms

## Levodopa Pharmacokinetics
- Absorbed from small intestine via amino acid transporter
- **Dietary protein competes** for absorption (take on empty stomach or reduce protein at same meal)
- Peripheral conversion: 95% converted to DA peripherally without carbidopa -> only 1-2% reaches brain
- With carbidopa: 10-15% reaches brain (4-5x increase)
- Brain conversion: DOPA decarboxylase -> Dopamine

## Long-Term Levodopa Complications

### Motor Fluctuations
| Complication | Timing | Description |
|-------------|--------|-------------|
| **Wearing-off** | 2-5 years | Effect wears off before next dose (predictable) |
| **On-off phenomenon** | Later | Unpredictable switches between mobile (on) and immobile (off) |
| **Dyskinesias** | Chronic use | Involuntary choreoathetoid movements at peak dose |
| **Freezing** | Variable | Sudden inability to move (gait freezing) |

### Management of Motor Fluctuations
- Wearing-off: Add COMT inhibitor (entacapone), MAO-B inhibitor, or DA agonist
- Dyskinesia: Reduce levodopa dose, add amantadine (anti-dyskinetic)
- On-off: Continuous duodenal levodopa gel infusion, apomorphine SC rescue

## Dopamine Agonists
- **Non-ergot**: Pramipexole, Ropinirole, Rotigotine (patch) - PREFERRED
- **Ergot**: Bromocriptine, Cabergoline - risk of cardiac valve fibrosis (rarely used for PD)
- Advantages: Longer duration than levodopa, less dyskinesia, can be used as monotherapy early
- ADRs: Impulse control disorders (gambling, hypersexuality, compulsive shopping), hallucinations, orthostatic hypotension, somnolence

## MAO-B Inhibitors
- **Selegiline, Rasagiline, Safinamide**
- Selective MAO-B inhibition -> prevent DA breakdown in brain
- Selegiline is metabolized to amphetamine/methamphetamine (insomnia)
- Rasagiline: no amphetamine metabolites, once daily
- Can be used as monotherapy in early PD or adjunct to levodopa

## COMT Inhibitors
- **Entacapone**: Peripheral only, given with each levodopa dose
- **Tolcapone**: Peripheral + central, risk of hepatotoxicity (needs LFT monitoring)
- Prevent methylation of L-DOPA to 3-O-methyldopa -> more L-DOPA available for brain
- **Stalevo** = Levodopa + Carbidopa + Entacapone (triple combination)

## Amantadine
- Multiple mechanisms: Increases DA release, blocks DA reuptake, NMDA antagonist
- Used early PD (mild benefit) and for **levodopa-induced dyskinesias** (NMDA block)
- ADR: Livedo reticularis (mottled skin), peripheral edema, hallucinations`,
        mnemonics: [
          {
            text: "WOFF for Levodopa complications: Wearing-Off, On-oFF, Freezing, (dys)Kinesia",
            explanation:
              "Long-term levodopa motor complications: Wearing-off (predictable end-of-dose), On-off (unpredictable switching), Freezing (sudden gait arrest), and peak-dose dyskinesias.",
          },
          {
            text: "Entacapone = ENTERs only periphery; Tolcapone = TOTALly enters both (peripheral + central)",
            explanation:
              "Entacapone: peripheral COMT inhibitor only (safe). Tolcapone: enters brain too (more effective but hepatotoxic - needs LFT monitoring).",
          },
        ],
        keyPoints: [
          "Levodopa long-term: wearing-off, on-off, dyskinesias (after 2-5 years)",
          "Protein competes with levodopa absorption (amino acid transporter)",
          "DA agonists (pramipexole, ropinirole): less dyskinesia but impulse control disorders",
          "Entacapone: peripheral COMT inhibitor, added to levodopa for wearing-off",
          "Amantadine: for levodopa-induced dyskinesias (NMDA antagonist)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 29", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "anti-parkinsonism-drugs-clinical",
        title: "Anti-Parkinsonism Drugs - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Treatment strategy by disease stage, drug-induced Parkinsonism, and Indian clinical context.",
        contentMd: `# Clinical Applications

## Treatment Strategy by Stage

### Early PD (Mild Symptoms)
- **Young patients (<60)**: Start with DA agonist (pramipexole/ropinirole) to delay levodopa
- **Older patients (>60)**: Start with Levodopa + Carbidopa directly
- MAO-B inhibitor (rasagiline): Can be used as initial monotherapy
- Reason to delay levodopa in young: Motor complications develop over time

### Moderate PD
- Levodopa + Carbidopa (mainstay)
- Add DA agonist or COMT/MAO-B inhibitor for wearing-off

### Advanced PD with Motor Fluctuations
- Optimize levodopa (smaller, more frequent doses)
- Add entacapone (COMT inhibitor) or rasagiline (MAO-B inhibitor)
- Amantadine for dyskinesias
- Continuous duodenal levodopa gel (Duodopa) for severe fluctuations
- Deep Brain Stimulation (DBS) of subthalamic nucleus for refractory cases

## Drug-Induced Parkinsonism
- Caused by: Antipsychotics (haloperidol > risperidone), Metoclopramide, Prochlorperazine
- All block D2 receptors -> mimic PD
- **Do NOT give Levodopa** (will compete with antipsychotic at D2 receptor, no benefit)
- Treatment: Stop/reduce offending drug, or switch to quetiapine/clozapine (less D2 block)
- Anticholinergics (Trihexyphenidyl): Used for antipsychotic-induced parkinsonism

## Levodopa Drug Interactions
| Drug | Interaction | Effect |
|------|-----------|--------|
| Pyridoxine (Vit B6) | Increases peripheral DOPA decarboxylase | Reduces levodopa effect (only without carbidopa) |
| MAOIs (non-selective) | Inhibit all MAO | Hypertensive crisis (tyramine effect) |
| Antipsychotics | Block D2 | Antagonize levodopa effect |
| Protein-rich meals | Compete for absorption | Reduce levodopa levels |

> **Indian Context**: Levodopa + Carbidopa (Syndopa) is affordable and widely available in India (~Rs 5-10/tablet). DA agonists are more expensive but increasingly used. Parkinsonism diagnosis is often delayed in rural India; anticholinergics are sometimes given empirically by GPs.`,
        mnemonics: [
          {
            text: "Young PD = DA agonist first (Delay Levodopa); Old PD = Levodopa first (Direct approach)",
            explanation:
              "In young PD patients, start with DA agonists to delay levodopa motor complications. In elderly, start levodopa directly (better efficacy, fewer DA agonist ADRs like hallucinations).",
          },
        ],
        keyPoints: [
          "Young PD: DA agonist first (delay levodopa complications); Elderly: Levodopa directly",
          "Drug-induced Parkinsonism: stop offending drug, use anticholinergics; DO NOT give Levodopa",
          "Wearing-off: add entacapone or rasagiline to levodopa",
          "Advanced PD: amantadine for dyskinesias, DBS for refractory",
          "Levodopa + Carbidopa (Syndopa) affordable in India",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 29", edition: "8th" },
        ],
      },
      {
        layer: 4,
        slug: "anti-parkinsonism-drugs-exam",
        title: "Anti-Parkinsonism Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield anti-Parkinsonism drug facts for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- DOC for Parkinson's disease: **Levodopa + Carbidopa**
- Carbidopa is: **Peripheral DOPA decarboxylase inhibitor** (does not cross BBB)
- Why not give DA directly: **DA does NOT cross BBB** (L-DOPA does)
- Levodopa on-off phenomenon: **Unpredictable motor fluctuation** (late complication)
- Treatment of levodopa-induced dyskinesia: **Amantadine**
- Non-ergot DA agonists: **Pramipexole, Ropinirole** (preferred, no valve fibrosis)
- Ergot DA agonist risk: **Cardiac valve fibrosis** (Bromocriptine, Cabergoline)
- DA agonist impulse control ADR: **Gambling, hypersexuality, compulsive shopping**
- MAO-B inhibitor: **Rasagiline** (no amphetamine metabolites, unlike selegiline)
- Peripheral COMT inhibitor: **Entacapone**; Central + peripheral: **Tolcapone** (hepatotoxic)
- Anticholinergic for PD tremor: **Trihexyphenidyl (Benzhexol)**
- Drug-induced PD: **Haloperidol, Metoclopramide** (D2 blockers)
- Drug-induced PD treatment: **Stop offending drug + Anticholinergic** (NOT levodopa)
- Stalevo =: **Levodopa + Carbidopa + Entacapone**
- Amantadine ADR: **Livedo reticularis**
- Protein-rich meals: **Reduce levodopa absorption** (competitive)

## Comparison: DA Agonists vs Levodopa
| Feature | DA Agonists | Levodopa |
|---------|------------|----------|
| Efficacy | Moderate | Most effective |
| Dyskinesia risk | Lower | Higher (long-term) |
| Impulse control | Higher risk | Lower risk |
| When to use first | Young patients | Elderly patients |`,
        mnemonics: [
          {
            text: "SELEGILINE -> methAMPHETAMINE metabolite (insomnia); RASAGILINE -> no amphetamine",
            explanation:
              "Selegiline is metabolized to amphetamine and methamphetamine (causes insomnia, avoid evening dosing). Rasagiline does not have this issue and is preferred.",
          },
        ],
        keyPoints: [
          "Levodopa + Carbidopa: most effective PD treatment",
          "Motor complications develop after 2-5 years of levodopa",
          "Amantadine for dyskinesias (NMDA antagonist)",
          "DA agonists: impulse control disorders (gambling, hypersexuality)",
          "Drug-induced PD: stop D2 blocker, give anticholinergic (NOT levodopa)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 29", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "anti-parkinsonism-drugs-recall",
        title: "Anti-Parkinsonism Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A on anti-Parkinsonism drugs.",
        contentMd: `# Active Recall

**Q1:** Why is levodopa given with carbidopa?
> Carbidopa inhibits peripheral DOPA decarboxylase, preventing wasteful conversion of L-DOPA to DA outside the brain. This reduces peripheral ADRs (nausea, hypotension) and increases brain bioavailability 4-5x.

**Q2:** Why can dopamine not be given directly for PD?
> Dopamine does not cross the blood-brain barrier. Levodopa (its precursor) can cross the BBB and is converted to dopamine within the brain.

**Q3:** Name 3 long-term motor complications of levodopa.
> Wearing-off (end-of-dose deterioration), On-off phenomenon (unpredictable fluctuations), Peak-dose dyskinesias (involuntary choreoathetoid movements).

**Q4:** Treatment for levodopa-induced dyskinesias?
> Amantadine (NMDA receptor antagonist). Also reduce levodopa dose if possible.

**Q5:** Why start with DA agonists in young PD patients?
> To delay levodopa introduction and postpone motor complications (wearing-off, dyskinesias). Young patients have decades of treatment ahead.

**Q6:** How is drug-induced Parkinsonism treated?
> Stop the offending D2-blocking drug (antipsychotics, metoclopramide). If antipsychotic needed, switch to quetiapine/clozapine. Anticholinergics (trihexyphenidyl) for symptomatic relief. Do NOT give levodopa.

**Q7:** Entacapone vs Tolcapone?
> Both are COMT inhibitors. Entacapone: peripheral only, safe. Tolcapone: crosses BBB (peripheral + central), more effective but hepatotoxic (needs LFT monitoring).

**Q8:** What is livedo reticularis and which PD drug causes it?
> Mottled, net-like purplish skin discoloration, usually on legs. Caused by amantadine. Generally reversible on stopping the drug.`,
        mnemonics: [],
        keyPoints: ["8 recall questions on anti-Parkinsonism drugs"],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 29", edition: "8th" },
        ],
      },
    ],
  },
];
