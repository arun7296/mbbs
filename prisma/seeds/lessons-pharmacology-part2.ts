import type { TopicLessons } from "./content-loader";

export const pharmacologyPart2Lessons: TopicLessons[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MODULE 5 — CHEMOTHERAPY (Topics 1-4)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ─── Topic 1: Penicillins & Cephalosporins ─────────────────
  {
    topicCode: "PH-MOD-05-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "penicillins-cephalosporins-foundation",
        title: "Penicillins & Cephalosporins - Foundation",
        estimatedMinutes: 20,
        summary:
          "Beta-lactam antibiotics share a common beta-lactam ring and act by inhibiting cell wall synthesis. Penicillins are classified into natural, aminopenicillins, antistaphylococcal, and antipseudomonal groups. Cephalosporins span five generations with progressively broader Gram-negative coverage.",
        contentMd: `# Penicillins & Cephalosporins

## Beta-Lactam Ring
All beta-lactams contain a **four-membered beta-lactam ring** fused to a thiazolidine ring (penicillins) or dihydrothiazine ring (cephalosporins). This ring is essential for antibacterial activity.

## Classification of Penicillins

| Group | Drugs | Spectrum |
|-------|-------|----------|
| **Natural penicillins** | Penicillin G (benzyl), Penicillin V | Gram-positive cocci, spirochetes |
| **Aminopenicillins** | Ampicillin, Amoxicillin | Extended Gram-negative (E. coli, H. influenzae) |
| **Antistaphylococcal** | Cloxacillin, Methicillin, Nafcillin | Beta-lactamase producing Staphylococci |
| **Antipseudomonal** | Piperacillin, Ticarcillin | Pseudomonas aeruginosa |
| **Beta-lactamase inhibitor combos** | Amoxicillin + Clavulanate, Piperacillin + Tazobactam | Broadened by enzyme inhibition |

## Mechanism Overview
Beta-lactams bind to **Penicillin-Binding Proteins (PBPs)** on the bacterial cell membrane, inhibiting the transpeptidase that cross-links peptidoglycan chains during cell wall synthesis. Result: osmotically fragile cell that lyses.

## Classification of Cephalosporins

| Generation | Drugs | Spectrum | Clinical Use |
|-----------|-------|----------|-------------|
| **1st** | Cefazolin, Cefalexin | Gram-positive (best) | Surgical prophylaxis, UTI |
| **2nd** | Cefuroxime, Cefaclor | Better Gram-negative | LRTI, sinusitis |
| **3rd** | Ceftriaxone, Cefotaxime, Ceftazidime | Excellent Gram-negative, crosses BBB | Meningitis, typhoid, gonorrhoea |
| **4th** | Cefepime | Gram-positive + Gram-negative + Pseudomonas | Febrile neutropenia |
| **5th** | Ceftaroline | MRSA coverage | Skin infections, CAP with MRSA |

## Carbapenems & Monobactams
- **Carbapenems** (Imipenem, Meropenem): broadest spectrum beta-lactams; reserve drugs
- **Monobactams** (Aztreonam): only Gram-negative activity; safe in penicillin allergy

> **Clinical Pearl**: Ceftriaxone is the most commonly used injectable cephalosporin in India - used empirically for meningitis, pneumonia, typhoid, and gonorrhoea. Available in Jan Aushadhi stores.`,
        mnemonics: [
          {
            text: "PEACE with Penicillins: PBP binding, Enzyme (transpeptidase) inhibition, Autolysis, Cell wall defect, E. coli killed (amino-penicillins)",
            explanation:
              "Summarizes the mechanism and spectrum of penicillins - they bind PBPs, inhibit transpeptidase, trigger autolysins, create cell wall defects, and aminopenicillins cover E. coli.",
          },
          {
            text: "Ceph Generations: 1-Kiss Gram+, 2-Kiss both, 3-Kiss Gram-, 4-Kiss all, 5-Kiss MRSA",
            explanation:
              "1st gen best Gram-positive; 2nd gen improved Gram-negative; 3rd gen excellent Gram-negative and CNS penetration; 4th gen broadest; 5th gen adds MRSA.",
          },
        ],
        keyPoints: [
          "Beta-lactam ring is essential for antibacterial activity - binds PBPs",
          "Penicillin G: natural penicillin, Gram-positive cocci and spirochetes",
          "Aminopenicillins (ampicillin, amoxicillin): extended to cover Gram-negative rods",
          "Cephalosporin generations: 1st best Gram+, 3rd best Gram-, 5th covers MRSA",
          "Beta-lactamase inhibitors (clavulanate, sulbactam, tazobactam) have no intrinsic antibacterial activity",
          "Carbapenems are the broadest-spectrum beta-lactams, reserved for MDR infections",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 51 - Beta-Lactam Antibiotics", page: "727-752", edition: "8th" },
          { book: "Rang & Dale", chapter: "Ch 51 - Antibacterial Drugs", edition: "9th" },
        ],
      },
      {
        layer: 2,
        slug: "penicillins-cephalosporins-mechanism",
        title: "Penicillins & Cephalosporins - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed mechanism of beta-lactam action, resistance mechanisms (beta-lactamases, altered PBPs, efflux pumps), pharmacokinetics of individual drugs, and the role of beta-lactamase inhibitors.",
        contentMd: `# Mechanism of Beta-Lactam Action

## Step-by-Step Mechanism
1. Drug enters periplasmic space through **porins** (OmpF, OmpC in Gram-negatives)
2. Binds to **PBPs** (transpeptidases, carboxypeptidases, endopeptidases)
3. Inhibits **transpeptidation** - the final cross-linking step of peptidoglycan synthesis
4. Activates bacterial **autolysins** (murein hydrolases)
5. Cell wall becomes osmotically unstable and the bacterium **lyses**

> **Key Concept**: Beta-lactams are **bactericidal** and work best on actively dividing bacteria (time-dependent killing).

## PBP Targets
| PBP | Function | Drug Preference |
|-----|----------|----------------|
| PBP 1a, 1b | Transglycosylase + transpeptidase | Cell lysis when inhibited |
| PBP 2 | Maintains rod shape | Mecillinam targets PBP2 |
| PBP 3 | Septum formation | Cephalosporins prefer PBP3 |

## Resistance Mechanisms

### 1. Beta-Lactamase Production (Most Common)
- **Penicillinases**: Staphylococcal, encoded by plasmid
- **ESBLs** (Extended Spectrum Beta-Lactamases): Hydrolyze 3rd-gen cephalosporins (E. coli, Klebsiella)
- **AmpC**: Chromosomal, inducible (Enterobacter, Citrobacter)
- **Carbapenemases** (NDM-1, KPC): Hydrolyze carbapenems - major threat in Indian hospitals

### 2. Altered PBPs
- **MRSA**: Acquires mecA gene encoding PBP2a with low affinity for beta-lactams
- **Penicillin-resistant Pneumococcus**: Altered PBP composition

### 3. Reduced Permeability
- Loss of porin channels (OprD in Pseudomonas - carbapenem resistance)

### 4. Efflux Pumps
- Active expulsion of drug from periplasmic space

## Beta-Lactamase Inhibitors
| Inhibitor | Combination | Clinical Use |
|-----------|-------------|-------------|
| **Clavulanic acid** | Amoxicillin-Clavulanate (Augmentin) | Community UTI, RTI |
| **Sulbactam** | Ampicillin-Sulbactam | Intra-abdominal infections |
| **Tazobactam** | Piperacillin-Tazobactam | Hospital-acquired infections |
| **Avibactam** | Ceftazidime-Avibactam | CRE infections (not NDM) |

## Pharmacokinetics
| Parameter | Penicillin G | Amoxicillin | Ceftriaxone |
|-----------|-------------|-------------|-------------|
| Route | IM/IV | Oral | IM/IV |
| Absorption | Acid-labile | Acid-stable (90% oral) | Not absorbed orally |
| Protein binding | 60% | 20% | 90% |
| Half-life | 30 min | 1 hr | 6-8 hr (longest cephalosporin) |
| Excretion | Renal (tubular secretion) | Renal | Biliary + Renal |
| CSF penetration | Poor (unless inflamed meninges) | Poor | Good |

## Time-Dependent vs Concentration-Dependent Killing
- **Beta-lactams**: Time-dependent - efficacy depends on **time above MIC** (fT > MIC)
- Goal: maintain plasma levels above MIC for >50% of dosing interval
- This is why beta-lactams are given in **frequent divided doses** or continuous infusion`,
        mnemonics: [
          {
            text: "BLAME for Beta-lactam resistance: Beta-Lactamase, Loss of porins, Altered PBPs, Mutation in PBPs, Efflux pumps",
            explanation:
              "Five mechanisms by which bacteria resist beta-lactams: enzyme destruction, reduced entry, target modification, chromosomal mutations, and active drug expulsion.",
          },
        ],
        keyPoints: [
          "Beta-lactams inhibit transpeptidase (PBP) causing defective peptidoglycan cross-linking",
          "Bactericidal, time-dependent killing - need time above MIC > 50%",
          "Most common resistance: beta-lactamase production (plasmid-mediated)",
          "MRSA has altered PBP2a encoded by mecA gene - resistant to all beta-lactams except ceftaroline",
          "NDM-1 carbapenemase is a major concern in Indian hospitals - hydrolyzes all beta-lactams",
          "Ceftriaxone has the longest half-life among cephalosporins (6-8 hours)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 51 - Beta-Lactam Antibiotics", page: "730-745", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 57 - Penicillins, Cephalosporins", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "penicillins-cephalosporins-clinical",
        title: "Penicillins & Cephalosporins - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical prescribing of beta-lactams: indication-based drug selection, dosing in Indian practice, penicillin allergy management, surgical prophylaxis, and ADRs including Jarisch-Herxheimer reaction.",
        contentMd: `# Clinical Applications

## Indication-Based Drug Selection

| Infection | Drug of Choice | Dose |
|-----------|---------------|------|
| Streptococcal pharyngitis | Penicillin V (oral) or Benzathine Pen G (IM) | 1.2 MU IM single dose |
| Syphilis (primary) | Benzathine Penicillin G | 2.4 MU IM single dose |
| Neurosyphilis | Crystalline Penicillin G IV | 18-24 MU/day x 14 days |
| Bacterial meningitis (empiric) | Ceftriaxone | 2g IV q12h |
| Enteric fever (typhoid) | Ceftriaxone | 2g IV OD x 10-14 days |
| Gonorrhoea | Ceftriaxone | 500 mg IM single dose |
| Community UTI | Amoxicillin-Clavulanate | 625 mg TDS x 5 days |
| Hospital-acquired pneumonia | Piperacillin-Tazobactam | 4.5g IV q6h |
| Surgical prophylaxis | Cefazolin | 2g IV before incision |
| Febrile neutropenia | Cefepime or Pip-Taz | IV empiric |

> **Clinical Pearl**: In India, ceftriaxone is the workhorse injectable antibiotic. Always reconstitute with lidocaine for IM injection to reduce pain. Never mix with calcium-containing solutions (risk of precipitation, especially in neonates).

## Penicillin Allergy
- **Type I (immediate)**: Anaphylaxis, urticaria, bronchospasm (0.05% of patients)
- **Type IV (delayed)**: Maculopapular rash (most common)
- Cross-reactivity: Penicillins and cephalosporins share ~5-10% cross-reactivity
- **Safe alternatives in true penicillin anaphylaxis**: Aztreonam (monobactam), fluoroquinolones

## Jarisch-Herxheimer Reaction
- Occurs after treating spirochetal infections (syphilis, leptospirosis) with penicillin
- Caused by massive release of endotoxins from killed organisms
- Features: fever, rigors, hypotension within 2-8 hours of first dose
- Management: supportive, not an allergy (continue antibiotics)

## Adverse Drug Reactions

| ADR | Drug | Mechanism |
|-----|------|-----------|
| Anaphylaxis | All penicillins | Type I hypersensitivity |
| Ampicillin rash | Ampicillin (with EBV/CLL) | Non-allergic, maculopapular |
| Biliary sludge | Ceftriaxone | Calcium salt precipitation |
| Disulfiram-like reaction | Cefoperazone | MTT side chain |
| Hypoprothrombinemia | Cefoperazone, Moxalactam | MTT side chain, inhibits vitamin K |
| Seizures | Imipenem (high dose) | CNS excitation |
| C. difficile colitis | All broad-spectrum | Gut flora disruption |

## Indian Prescribing Context
- **NLEM (National List of Essential Medicines)**: Amoxicillin, amoxicillin-clavulanate, ceftriaxone, cefazolin included
- **Jan Aushadhi**: Generic amoxicillin capsules at 1/10th branded price
- **AMR concern**: Avoid empiric 3rd-gen cephalosporins for uncomplicated infections
- **ICMR guidelines**: De-escalation strategy recommended`,
        mnemonics: [
          {
            text: "CEFTRIAXONE cautions: Calcium (no co-infusion), Elderly (biliary sludge), Fat (biliary), Third-gen (resistance), Reconstitute with lidocaine, IM pain, Avoid in Neonates (calcium), ONE dose for gonorrhoea",
            explanation:
              "Key prescribing points for ceftriaxone: avoid calcium co-infusion, risk of biliary sludge, and neonatal precipitation. Single dose for gonorrhoea.",
          },
          {
            text: "SAFE in penicillin allergy: carbapenems (cautious), aztreonam, fluoroquinolones",
            explanation:
              "Aztreonam has no cross-reactivity with penicillins. Carbapenems have <1% cross-reactivity. Cephalosporins have 5-10% cross-reactivity.",
          },
        ],
        keyPoints: [
          "Benzathine penicillin G: DOC for syphilis (2.4 MU IM single dose) and rheumatic fever prophylaxis",
          "Ceftriaxone: DOC for meningitis, typhoid, and gonorrhoea in Indian practice",
          "Never mix ceftriaxone with calcium - risk of fatal precipitation in neonates",
          "Ampicillin rash with EBV (infectious mononucleosis) is non-allergic",
          "Cefoperazone: disulfiram-like reaction with alcohol and hypoprothrombinemia",
          "Imipenem combined with cilastatin to prevent renal dehydropeptidase metabolism",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 51 - Beta-Lactam Antibiotics", page: "745-752", edition: "8th" },
          { book: "Harrison's", chapter: "Treatment of Bacterial Infections", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "penicillins-cephalosporins-exam",
        title: "Penicillins & Cephalosporins - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield one-liners, comparison tables, and frequently tested MCQ themes on beta-lactam antibiotics for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- DOC for syphilis: **Benzathine Penicillin G**
- Only penicillin effective orally: **Penicillin V (acid-stable)**
- Amoxicillin vs Ampicillin: amoxicillin has **better oral absorption (90% vs 40%)**
- Penicillinase-resistant penicillin: **Cloxacillin, Methicillin, Nafcillin**
- Broadest-spectrum beta-lactam: **Carbapenems (Meropenem)**
- Only beta-lactam safe in penicillin anaphylaxis: **Aztreonam**
- Cephalosporin that causes disulfiram-like reaction: **Cefoperazone**
- Cephalosporin with longest half-life: **Ceftriaxone (6-8 hr)**
- Cephalosporin for MRSA: **Ceftaroline (5th gen)**
- Cilastatin inhibits: **Renal dehydropeptidase-I (protects imipenem)**
- Cephalosporin causing biliary sludge: **Ceftriaxone**
- Probenecid increases penicillin levels by: **Blocking tubular secretion**

## Comparison: Penicillin Generations

| Feature | Natural | Aminopenicillin | Antistaphylococcal | Antipseudomonal |
|---------|---------|----------------|-------------------|----------------|
| Example | Pen G | Amoxicillin | Cloxacillin | Piperacillin |
| Gram+ | +++ | ++ | +++ (Staph) | + |
| Gram- | - | ++ | - | +++ |
| Pseudomonas | - | - | - | +++ |
| Beta-lactamase stable | No | No | Yes | No |

## Comparison: Cephalosporin Generations

| Feature | 1st Gen | 2nd Gen | 3rd Gen | 4th Gen | 5th Gen |
|---------|---------|---------|---------|---------|---------|
| Gram+ | +++ | ++ | + | ++ | +++ (MRSA) |
| Gram- | + | ++ | +++ | +++ | ++ |
| CNS penetration | No | Variable | Yes | Yes | Variable |
| Anti-Pseudomonas | No | No | Ceftazidime | Cefepime | No |

## Previous Year Themes
- Beta-lactamase inhibitor combinations
- Cephalosporin generation and spectrum
- MRSA treatment options
- Penicillin allergy cross-reactivity percentages
- Ceftriaxone contraindications in neonates
- Mechanism of beta-lactam resistance (ESBL, NDM-1)
- Surgical prophylaxis drug selection`,
        mnemonics: [
          {
            text: "MTT side chain causes 3 problems: Methylthiotetrazole = Maalox (antacid needed), Thrombocytopenia (hypoprothrombinemia), Tipsy (disulfiram reaction)",
            explanation:
              "Cephalosporins with MTT side chain (cefoperazone, moxalactam, cefamandole) cause disulfiram-like reaction with alcohol and bleeding due to hypoprothrombinemia.",
          },
        ],
        keyPoints: [
          "Amoxicillin: 90% oral bioavailability vs ampicillin 40%",
          "Ceftriaxone: longest half-life, biliary excretion, biliary sludge risk",
          "Ceftaroline: only cephalosporin active against MRSA",
          "Aztreonam: no cross-reactivity with penicillins - safe in anaphylaxis",
          "MTT side chain drugs: disulfiram reaction + hypoprothrombinemia",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 51 - Beta-Lactam Antibiotics", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "penicillins-cephalosporins-recall",
        title: "Penicillins & Cephalosporins - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on beta-lactam antibiotics.",
        contentMd: `# Active Recall

**Q1:** What is the target of beta-lactam antibiotics?
> PBPs (Penicillin-Binding Proteins) - specifically transpeptidase that cross-links peptidoglycan in the bacterial cell wall.

**Q2:** What is the DOC for syphilis?
> Benzathine Penicillin G (2.4 MU IM single dose for primary syphilis).

**Q3:** Name the most common mechanism of beta-lactam resistance.
> Beta-lactamase production (enzymatic hydrolysis of the beta-lactam ring).

**Q4:** What is the mecA gene and what resistance does it confer?
> mecA encodes PBP2a with low affinity for beta-lactams, causing MRSA (Methicillin-Resistant Staphylococcus aureus).

**Q5:** Why is cilastatin given with imipenem?
> Cilastatin inhibits renal dehydropeptidase-I, which otherwise degrades imipenem in the kidney.

**Q6:** Which cephalosporin should not be co-infused with calcium?
> Ceftriaxone - risk of calcium-ceftriaxone precipitation, especially dangerous in neonates.

**Q7:** What is the Jarisch-Herxheimer reaction?
> Fever, rigors, and hypotension occurring 2-8 hours after starting penicillin for syphilis, caused by endotoxin release from killed spirochetes. Not an allergy.

**Q8:** Name the beta-lactamase inhibitors.
> Clavulanic acid, Sulbactam, Tazobactam, Avibactam, Vaborbactam. They have no intrinsic antibacterial activity.

**Q9:** Which beta-lactam is safe in true penicillin anaphylaxis?
> Aztreonam (monobactam) - no cross-reactivity with penicillins.

**Q10:** Which cephalosporin covers MRSA?
> Ceftaroline (5th generation cephalosporin).

**Q11:** What is the ampicillin rash in EBV?
> Non-allergic maculopapular rash occurring in patients with infectious mononucleosis (EBV) given ampicillin. Not a true penicillin allergy.

**Q12:** What is the difference in oral bioavailability between amoxicillin and ampicillin?
> Amoxicillin 90% vs Ampicillin 40%. Amoxicillin is preferred for oral use.`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering mechanism, resistance, clinical use, ADRs, and pharmacokinetics of beta-lactams",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 51 - Beta-Lactam Antibiotics", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 2: Aminoglycosides, Macrolides & Quinolones ─────
  {
    topicCode: "PH-MOD-05-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "aminoglycosides-macrolides-quinolones-foundation",
        title: "Aminoglycosides, Macrolides & Quinolones - Foundation",
        estimatedMinutes: 20,
        summary:
          "Three major antibiotic classes: aminoglycosides (bactericidal, 30S ribosomal inhibitors), macrolides (bacteriostatic, 50S inhibitors), and fluoroquinolones (bactericidal, DNA gyrase/topoisomerase IV inhibitors). Each has a distinct spectrum, mechanism, and toxicity profile.",
        contentMd: `# Aminoglycosides, Macrolides & Quinolones

## Aminoglycosides

### Classification
| Drug | Route | Primary Use |
|------|-------|-------------|
| **Gentamicin** | IV/IM | Serious Gram-negative infections, synergy with beta-lactams |
| **Amikacin** | IV/IM | MDR Gram-negative, TB (2nd line) |
| **Tobramycin** | IV/IM/Nebulized | Pseudomonas (CF patients) |
| **Streptomycin** | IM | TB (2nd line), plague, brucellosis |
| **Neomycin** | Topical/Oral | Topical skin, hepatic encephalopathy (oral) |

### Mechanism
- Bind **30S ribosomal subunit** (irreversibly)
- Cause **misreading of mRNA** and block translocation
- Concentration-dependent, bactericidal
- Post-antibiotic effect (PAE): bacteria suppressed even after drug levels fall

## Macrolides

### Classification
| Drug | Generation | Key Feature |
|------|-----------|-------------|
| **Erythromycin** | 1st | GI side effects, CYP3A4 inhibitor |
| **Azithromycin** | 2nd | Long half-life (68 hr), tissue concentration high |
| **Clarithromycin** | 2nd | Better H. pylori activity, CYP3A4 inhibitor |
| **Roxithromycin** | 2nd | Better tolerated |

### Mechanism
- Bind **50S ribosomal subunit**
- Block translocation step of protein synthesis
- Primarily **bacteriostatic** (bactericidal at high concentrations)

## Fluoroquinolones

### Classification
| Generation | Drugs | Spectrum |
|-----------|-------|----------|
| **1st** | Nalidixic acid | Urinary Gram-negative only |
| **2nd** | Ciprofloxacin, Ofloxacin, Norfloxacin | Gram-negative, atypicals |
| **3rd** | Levofloxacin, Sparfloxacin | Respiratory (pneumococcus) |
| **4th** | Moxifloxacin, Gatifloxacin | Respiratory + anaerobes |

### Mechanism
- Inhibit **DNA gyrase** (topoisomerase II) in Gram-negatives
- Inhibit **topoisomerase IV** in Gram-positives
- Bactericidal, concentration-dependent killing

> **Clinical Pearl**: Azithromycin is the most prescribed antibiotic in India for RTIs. Its long half-life allows 3-day or 5-day courses. Single 1g dose cures Chlamydia.`,
        mnemonics: [
          {
            text: "AMiNO = A Mighty Nephro-Ototoxin: aminoglycosides cause nephrotoxicity and ototoxicity",
            explanation:
              "The two major dose-limiting toxicities of aminoglycosides are nephrotoxicity (reversible) and ototoxicity (often irreversible, both cochlear and vestibular).",
          },
          {
            text: "BUY AT 30, SELL AT 50: aminoglycosides Buy (bind) at 30S, macrolides Sell (stall) at 50S",
            explanation:
              "Aminoglycosides bind the 30S ribosomal subunit, while macrolides bind the 50S subunit. A quick way to remember which subunit each targets.",
          },
        ],
        keyPoints: [
          "Aminoglycosides: 30S ribosomal subunit, bactericidal, concentration-dependent, nephro/ototoxic",
          "Macrolides: 50S ribosomal subunit, primarily bacteriostatic, CYP3A4 inhibitors",
          "Fluoroquinolones: DNA gyrase (Gram-) and topoisomerase IV (Gram+) inhibitors, bactericidal",
          "Azithromycin: longest half-life (68 hr), tissue concentration >> plasma",
          "Aminoglycosides have post-antibiotic effect (PAE) allowing once-daily dosing",
          "All three classes are concentration-dependent killers (aminoglycosides and quinolones)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 52-54 - Aminoglycosides, Macrolides, Quinolones", edition: "8th" },
          { book: "Rang & Dale", chapter: "Ch 51 - Antibacterial Drugs", edition: "9th" },
        ],
      },
      {
        layer: 2,
        slug: "aminoglycosides-macrolides-quinolones-mechanism",
        title: "Aminoglycosides, Macrolides & Quinolones - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed mechanisms of action and resistance for aminoglycosides, macrolides, and quinolones. Pharmacokinetics including distribution, metabolism, and excretion. Drug interactions particularly CYP3A4 effects of macrolides.",
        contentMd: `# Detailed Mechanisms

## Aminoglycoside Mechanism (Detail)
1. Drug enters bacterial cell via **oxygen-dependent transport** (ineffective against anaerobes)
2. Irreversibly binds 16S rRNA of **30S ribosomal subunit**
3. Causes **misreading of mRNA codons** (wrong amino acids inserted)
4. Blocks **translocation** from A-site to P-site
5. Abnormal proteins insert into cell membrane, increasing permeability
6. More drug enters - **positive feedback loop** leading to cell death

### Why Aminoglycosides Are Ineffective Against Anaerobes
Transport into bacterial cell requires **electron transport chain** (oxygen-dependent active transport). Anaerobes lack this system.

### Resistance Mechanisms
- **Aminoglycoside-modifying enzymes** (AMEs): acetyltransferases, phosphotransferases, nucleotidyltransferases (most common)
- **Ribosomal methylation**: 16S rRNA methylases (armA gene)
- **Efflux pumps** and reduced permeability

### Pharmacokinetics
| Parameter | Value |
|-----------|-------|
| Absorption | Not absorbed orally (polycationic) |
| Distribution | ECF only (Vd ~0.25 L/kg), poor CNS penetration |
| Protein binding | <10% |
| Metabolism | None (excreted unchanged) |
| Excretion | Renal (glomerular filtration) |
| Half-life | 2-3 hours |

### Once-Daily Dosing (Extended Interval)
- Exploits **concentration-dependent killing** and **PAE**
- Higher peak = better efficacy; longer drug-free interval = less toxicity
- Example: Gentamicin 5-7 mg/kg once daily instead of 1.5 mg/kg TDS

## Macrolide Mechanism (Detail)
1. Bind to **23S rRNA** of 50S subunit
2. Block the peptidyl-tRNA translocation from A-site to P-site
3. Prevent elongation of peptide chain
4. Primarily bacteriostatic

### Macrolide Resistance
- **Ribosomal methylation** (erm genes): methylation of 23S rRNA causing cross-resistance to macrolides, lincosamides, streptogramin B (MLS_B resistance)
- **Efflux pumps** (mef genes)
- **Enzymatic modification** (rare)

### Macrolide Drug Interactions (CYP3A4)
| Macrolide | CYP3A4 Inhibition | Interactions |
|-----------|-------------------|--------------|
| Erythromycin | Strong | Theophylline, warfarin, carbamazepine, statins |
| Clarithromycin | Strong | Same as erythromycin |
| Azithromycin | Minimal | Safest macrolide for interactions |

> **Important**: Erythromycin + statins (simvastatin) can cause rhabdomyolysis due to CYP3A4 inhibition.

## Quinolone Mechanism (Detail)
1. Enter cell via porins and diffusion
2. Bind to **DNA gyrase-DNA complex** (Gram-negatives) or **topoisomerase IV-DNA complex** (Gram-positives)
3. Stabilize the enzyme-DNA complex, preventing re-ligation of DNA strands
4. Generate double-strand DNA breaks leading to cell death

### Quinolone Resistance
- **Mutations in gyrA/gyrB** (DNA gyrase) and **parC/parE** (topoisomerase IV)
- **Efflux pumps** (norA in Staphylococci)
- **Plasmid-mediated** (qnr genes): protect gyrase from quinolone binding

### Quinolone Pharmacokinetics
- Excellent oral bioavailability (>90%)
- Wide tissue distribution including prostate, bone, respiratory secretions
- **Chelation**: reduced absorption with antacids (Al, Mg, Ca), iron, zinc - give 2 hours apart
- Moxifloxacin: hepatic metabolism (no dose adjustment in renal failure)
- Ciprofloxacin: mixed renal + hepatic elimination`,
        mnemonics: [
          {
            text: "Aminoglycosides need OXYGEN to enter: that is why they fail against ANAerobes",
            explanation:
              "Aminoglycoside uptake requires oxygen-dependent active transport. Anaerobic bacteria lack the electron transport chain needed for this uptake, making aminoglycosides ineffective.",
          },
        ],
        keyPoints: [
          "Aminoglycosides require oxygen-dependent transport - ineffective against anaerobes",
          "Aminoglycoside resistance: modifying enzymes (AMEs) are most common",
          "MLS-B resistance: erm gene methylates 23S rRNA, cross-resistance to macrolides-lincosamides-streptogramin B",
          "Erythromycin and clarithromycin are strong CYP3A4 inhibitors; azithromycin is not",
          "Quinolones chelated by divalent cations (antacids, iron) - separate dosing by 2 hours",
          "Once-daily aminoglycoside dosing exploits concentration-dependent killing and PAE",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 52-54", page: "753-790", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 58-59", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "aminoglycosides-macrolides-quinolones-clinical",
        title: "Aminoglycosides, Macrolides & Quinolones - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical use, adverse effects, contraindications, and Indian prescribing context for aminoglycosides, macrolides, and fluoroquinolones.",
        contentMd: `# Clinical Applications

## Aminoglycoside Clinical Use

| Indication | Drug | Notes |
|-----------|------|-------|
| Gram-negative sepsis | Gentamicin + beta-lactam | Synergistic combination |
| Infective endocarditis (Enterococcus) | Gentamicin + Ampicillin | Low-dose synergy |
| MDR TB (2nd line) | Amikacin/Streptomycin | Inject IM |
| Plague, tularemia | Streptomycin/Gentamicin | DOC |
| Hepatic encephalopathy | Neomycin (oral) | Reduces ammonia-producing gut bacteria |
| Pseudomonas (CF) | Tobramycin (nebulized) | Direct airway delivery |

### Aminoglycoside Toxicity
| Toxicity | Features | Monitoring |
|----------|----------|------------|
| **Nephrotoxicity** | Rising creatinine, non-oliguric renal failure | Trough levels, creatinine |
| **Ototoxicity** | Cochlear (hearing loss) or Vestibular (vertigo) | Audiometry |
| **Neuromuscular blockade** | Curare-like effect, respiratory paralysis | Avoid with NMJ blockers |

> **Clinical Pearl**: Gentamicin is predominantly vestibulotoxic; amikacin and neomycin are predominantly cochleotoxic. Ototoxicity is usually irreversible.

## Macrolide Clinical Use

| Indication | Drug | Regimen |
|-----------|------|---------|
| Community-acquired pneumonia (atypical) | Azithromycin | 500 mg day 1, 250 mg day 2-5 |
| Chlamydia trachomatis | Azithromycin | 1g single dose |
| H. pylori (triple therapy) | Clarithromycin | 500 mg BD with PPI + amoxicillin |
| Pertussis | Azithromycin | 5-day course |
| Diphtheria | Erythromycin | With antitoxin |
| Gastroparesis | Erythromycin | Prokinetic (motilin agonist) |
| MAC prophylaxis (HIV) | Azithromycin | 1200 mg weekly |

### Macrolide ADRs
- **GI** (most common): nausea, vomiting, diarrhea (erythromycin worst - motilin agonist)
- **QT prolongation**: erythromycin > clarithromycin > azithromycin
- **Cholestatic jaundice**: erythromycin estolate (avoid in pregnancy)
- **Drug interactions**: CYP3A4 inhibition (erythromycin, clarithromycin)

## Quinolone Clinical Use

| Indication | Drug | Notes |
|-----------|------|-------|
| UTI (uncomplicated) | Norfloxacin/Ciprofloxacin | Avoid empirically if resistance >20% |
| Typhoid | Ofloxacin/Ciprofloxacin | Resistance increasing in India |
| Traveler's diarrhea | Ciprofloxacin | 3-day course |
| Chronic prostatitis | Ciprofloxacin/Levofloxacin | Good prostate penetration |
| CAP (respiratory quinolone) | Levofloxacin/Moxifloxacin | Excellent pneumococcal coverage |
| TB (MDR, 2nd line) | Levofloxacin/Moxifloxacin | Part of shorter MDR-TB regimen |
| Anthrax | Ciprofloxacin | DOC |

### Quinolone ADRs
- **Tendon rupture** (Achilles): risk increased in elderly, steroids, renal failure
- **QT prolongation**: sparfloxacin > moxifloxacin > others
- **Cartilage damage**: contraindicated in children <18 years and pregnancy
- **CNS**: headache, insomnia, seizures (lower seizure threshold)
- **Dysglycemia**: hypoglycemia/hyperglycemia (gatifloxacin withdrawn in India)
- **Peripheral neuropathy**: FDA black box warning

> **Indian Context**: Gatifloxacin was withdrawn from the Indian market due to severe dysglycemia. Quinolone resistance in typhoid is increasing - ceftriaxone is now preferred empiric therapy.`,
        mnemonics: [
          {
            text: "Quinolone TENT damage: Tendon rupture, Elderly risk, No children, Teratogenic",
            explanation:
              "Quinolones damage tendons (especially Achilles), are riskier in elderly patients, are contraindicated in children due to cartilage toxicity, and are teratogenic in pregnancy.",
          },
          {
            text: "Genta-VEST, Amika-COCH: Gentamicin is Vestibulotoxic, Amikacin is Cochleotoxic",
            explanation:
              "Helps distinguish the pattern of ototoxicity: gentamicin preferentially damages vestibular apparatus (vertigo), while amikacin preferentially damages cochlea (hearing loss).",
          },
        ],
        keyPoints: [
          "Gentamicin: vestibulotoxic; Amikacin: cochleotoxic; ototoxicity is irreversible",
          "Azithromycin: single 1g dose cures Chlamydia; 5-day course for pneumonia",
          "Erythromycin: motilin agonist (prokinetic) but also causes GI side effects",
          "Quinolones contraindicated in children (<18 yr) and pregnancy (cartilage damage)",
          "Gatifloxacin withdrawn in India due to severe dysglycemia",
          "Quinolone tendon rupture: Achilles most common, risk with steroids and elderly",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 52-54", edition: "8th" },
          { book: "Harrison's", chapter: "Treatment of Bacterial Infections", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "aminoglycosides-macrolides-quinolones-exam",
        title: "Aminoglycosides, Macrolides & Quinolones - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield points, comparison tables, and previous year themes for aminoglycosides, macrolides, and fluoroquinolones.",
        contentMd: `# Exam High Yield

## One-Liners
- Aminoglycoside that is NOT nephrotoxic: **Streptomycin (least nephrotoxic)**
- Aminoglycoside used topically only: **Neomycin (too toxic for systemic use)**
- Macrolide used as prokinetic: **Erythromycin (motilin agonist)**
- Safest macrolide in pregnancy: **Azithromycin (Category B)**
- Macrolide causing cholestatic jaundice: **Erythromycin estolate**
- Quinolone with best anaerobic coverage: **Moxifloxacin**
- Quinolone withdrawn in India for dysglycemia: **Gatifloxacin**
- Quinolone with best anti-pseudomonal activity: **Ciprofloxacin**
- Aminoglycoside not affected by aminoglycoside-modifying enzymes: **Amikacin (least susceptible)**
- DOC for Legionella: **Azithromycin / Levofloxacin**
- DOC for Chlamydia: **Azithromycin 1g single dose**
- Antibiotic with longest half-life: **Azithromycin (68 hours)**

## Comparison: Protein Synthesis Inhibitors

| Feature | Aminoglycosides | Macrolides | Tetracyclines | Chloramphenicol |
|---------|----------------|-----------|---------------|----------------|
| Subunit | 30S | 50S | 30S | 50S |
| Action | Bactericidal | Bacteriostatic | Bacteriostatic | Bacteriostatic |
| Killing | Concentration-dep | Time-dep | Time-dep | Time-dep |
| Oral absorption | None | Good | Good | Good |
| Major toxicity | Nephro/Ototoxicity | GI, QT | Teeth/bone | Aplastic anemia |

## Comparison: Quinolone Generations

| Feature | 1st Gen | 2nd Gen | 3rd Gen | 4th Gen |
|---------|---------|---------|---------|---------|
| Drug | Nalidixic acid | Ciprofloxacin | Levofloxacin | Moxifloxacin |
| Gram-negative | Urinary only | Systemic | Systemic | Systemic |
| Gram-positive | - | + | ++ (pneumococcus) | +++ |
| Anaerobes | - | - | - | ++ |
| Atypicals | - | + | ++ | ++ |
| Name | Urinary quinolone | Systemic | Respiratory | Respiratory + anaerobe |

## Previous Year Themes
- Aminoglycoside toxicity and monitoring
- Once-daily dosing rationale (concentration-dependent killing + PAE)
- CYP3A4 interactions of macrolides
- Quinolone contraindications (children, pregnancy)
- Drug of choice questions (Chlamydia, Legionella, H. pylori)
- Chelation of quinolones with antacids`,
        mnemonics: [
          {
            text: "30S killers: A-T (Aminoglycosides, Tetracyclines); 50S stallers: C-M-L (Chloramphenicol, Macrolides, Lincosamides)",
            explanation:
              "Quick way to remember ribosomal targets: 30S = aminoglycosides and tetracyclines; 50S = chloramphenicol, macrolides, and lincosamides (clindamycin).",
          },
        ],
        keyPoints: [
          "Aminoglycosides: 30S, bactericidal, concentration-dependent",
          "Macrolides: 50S, bacteriostatic, erythromycin/clarithromycin are CYP3A4 inhibitors",
          "Azithromycin: longest half-life (68 hr), minimal CYP interactions",
          "Quinolones: DNA gyrase inhibitors, contraindicated in children and pregnancy",
          "Moxifloxacin: best Gram-positive and anaerobic coverage among quinolones",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 52-54", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "aminoglycosides-macrolides-quinolones-recall",
        title: "Aminoglycosides, Macrolides & Quinolones - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for aminoglycosides, macrolides, and quinolones.",
        contentMd: `# Active Recall

**Q1:** Which ribosomal subunit do aminoglycosides target?
> 30S ribosomal subunit (irreversibly).

**Q2:** Why are aminoglycosides ineffective against anaerobes?
> Aminoglycoside uptake requires oxygen-dependent active transport, which anaerobes lack.

**Q3:** What are the two major toxicities of aminoglycosides?
> Nephrotoxicity (reversible) and ototoxicity (often irreversible).

**Q4:** What is the difference in ototoxicity between gentamicin and amikacin?
> Gentamicin is predominantly vestibulotoxic (vertigo); amikacin is cochleotoxic (hearing loss).

**Q5:** Which macrolide is a motilin agonist?
> Erythromycin - used as a prokinetic agent in gastroparesis.

**Q6:** What is the single-dose treatment for Chlamydia trachomatis?
> Azithromycin 1g oral single dose.

**Q7:** Why should quinolones not be given with antacids?
> Divalent/trivalent cations (Al, Mg, Ca, Fe) chelate quinolones, reducing absorption. Separate by 2 hours.

**Q8:** Why are quinolones contraindicated in children?
> Quinolones damage growing cartilage (shown in animal studies) - contraindicated in children <18 years.

**Q9:** Which quinolone was withdrawn in India and why?
> Gatifloxacin - withdrawn due to severe dysglycemia (both hypoglycemia and hyperglycemia).

**Q10:** What is MLS-B resistance?
> Methylation of 23S rRNA (erm genes) causing cross-resistance to Macrolides, Lincosamides, and Streptogramin B.

**Q11:** Name the macrolide that is safest in terms of drug interactions.
> Azithromycin - minimal CYP3A4 inhibition compared to erythromycin and clarithromycin.

**Q12:** What is the rationale for once-daily aminoglycoside dosing?
> Concentration-dependent killing (higher peak = better efficacy) + post-antibiotic effect (PAE) allows drug-free intervals reducing toxicity.`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering mechanisms, toxicity, clinical use, and resistance patterns",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 52-54", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 3: Antitubercular Drugs ─────────────────────────
  {
    topicCode: "PH-MOD-05-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "antitubercular-drugs-foundation",
        title: "Antitubercular Drugs - Foundation",
        estimatedMinutes: 20,
        summary:
          "Antitubercular drugs are classified into first-line (RHZE + S) and second-line agents. Treatment requires multi-drug combinations for 6+ months to prevent resistance. India's RNTCP/NTEP uses standardized regimens under DOTS strategy.",
        contentMd: `# Antitubercular Drugs

## Why Combination Therapy?
M. tuberculosis has a natural mutation rate of 1 in 10^6 for each drug. Using a single drug selects for resistant mutants. Combining 3-4 drugs reduces the probability of resistance to essentially zero.

## Classification

### First-Line Drugs (RHZE-S)
| Drug | Abbreviation | Mechanism | Key Feature |
|------|-------------|-----------|-------------|
| **Rifampicin** | R | RNA polymerase inhibitor | Most potent sterilizing agent |
| **Isoniazid (INH)** | H | Mycolic acid synthesis inhibitor | Most potent bactericidal |
| **Pyrazinamide** | Z | Unknown (acidic pH dependent) | Kills intracellular bacilli |
| **Ethambutol** | E | Arabinosyl transferase inhibitor | Prevents resistance |
| **Streptomycin** | S | 30S ribosomal inhibitor | Active against extracellular bacilli |

### Second-Line Drugs
- **Fluoroquinolones**: Levofloxacin, Moxifloxacin
- **Injectable agents**: Amikacin, Kanamycin, Capreomycin
- **Others**: Ethionamide, Cycloserine, PAS, Linezolid, Bedaquiline, Delamanid

## Bacterial Populations in TB
| Population | Location | Drug Effective |
|-----------|----------|----------------|
| Rapidly multiplying | Cavity wall | Isoniazid (kills most bacilli) |
| Slow/intermittent multiplying | Caseous lesion | Rifampicin (sterilizing) |
| Semi-dormant (acidic pH) | Inside macrophages | Pyrazinamide |
| Dormant persisters | Various | No drug fully effective |

## Standard Regimen (NTEP India)
**New TB (drug-sensitive)**: 2HRZE / 4HRE (total 6 months)
- **Intensive phase**: 2 months of HRZE (daily)
- **Continuation phase**: 4 months of HRE (daily)
- Note: Daily regimen replaced intermittent thrice-weekly regimen in India since 2017

> **Clinical Pearl**: Under NTEP (National TB Elimination Programme, formerly RNTCP), all TB drugs are provided free as Fixed-Dose Combinations (FDCs). India aims to eliminate TB by 2025 (WHO target: 2030).`,
        mnemonics: [
          {
            text: "RHZE = Rifampicin Helps Zero-in (on) Elimination: the four first-line drugs",
            explanation:
              "R (Rifampicin), H (Isoniazid), Z (Pyrazinamide), E (Ethambutol) - the standard first-line combination for TB treatment.",
          },
          {
            text: "INH is the HERO: H = most potent bactericidal, E = early rapid kill, R = resistance preventer (in combo), O = oral and well absorbed",
            explanation:
              "Isoniazid (INH/H) is the most potent bactericidal drug against actively multiplying M. tuberculosis.",
          },
        ],
        keyPoints: [
          "Combination therapy prevents resistance emergence (natural mutation rate ~10^-6 per drug)",
          "First-line drugs: RHZE (Rifampicin, INH, Pyrazinamide, Ethambutol) + Streptomycin",
          "INH: most bactericidal; Rifampicin: most sterilizing; PZA: kills intracellular bacilli at acidic pH",
          "India uses daily DOTS regimen: 2HRZE/4HRE (6 months total)",
          "NTEP provides free FDCs to all TB patients in India",
          "Three bacterial populations targeted: rapidly multiplying (INH), slow (RIF), semi-dormant (PZA)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 55 - Antitubercular Drugs", page: "791-810", edition: "8th" },
          { book: "Rang & Dale", chapter: "Ch 52 - Antimycobacterial Drugs", edition: "9th" },
        ],
      },
      {
        layer: 2,
        slug: "antitubercular-drugs-mechanism",
        title: "Antitubercular Drugs - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed mechanisms of action, resistance mechanisms, pharmacokinetics, and drug interactions of first-line and key second-line antitubercular drugs.",
        contentMd: `# Mechanisms of Antitubercular Drugs

## Isoniazid (INH)
### Mechanism
- **Prodrug**: Activated by mycobacterial enzyme **KatG** (catalase-peroxidase)
- Active metabolite inhibits **InhA** (enoyl-ACP reductase)
- Blocks **mycolic acid synthesis** (essential for mycobacterial cell wall)
- Bactericidal against actively growing bacilli

### Metabolism
- Hepatic **acetylation** (NAT2 enzyme)
- **Fast acetylators**: Higher dose needed (common in Japanese, Eskimos)
- **Slow acetylators**: More toxicity, lower dose sufficient (common in Indians, Egyptians)

### Resistance
- Mutations in **katG gene** (most common): drug cannot be activated
- Mutations in **inhA gene**: target modification

### Key ADRs
- **Peripheral neuropathy**: Due to pyridoxine (B6) depletion (INH complexes with B6)
  - Prevention: Co-prescribe pyridoxine 10 mg/day
- **Hepatotoxicity**: Acetylhydrazine metabolite
- **SLE-like syndrome**: In slow acetylators
- **Pellagra**: INH competes with niacin metabolism

## Rifampicin
### Mechanism
- Binds **beta-subunit of bacterial DNA-dependent RNA polymerase**
- Blocks RNA synthesis at initiation step
- Bactericidal and **sterilizing** (kills semi-dormant bacilli)

### Key Features
- **Potent CYP450 inducer** (CYP3A4, CYP2C9): reduces levels of OCP, warfarin, HIV drugs, cyclosporine
- Colors secretions **orange-red** (urine, tears, sweat)
- Resistance: mutations in **rpoB gene** (RNA polymerase beta subunit)

### Drug Interactions (CYP450 Induction)
| Drug Affected | Clinical Consequence |
|--------------|---------------------|
| Oral contraceptives | Contraceptive failure |
| Warfarin | Reduced anticoagulation |
| Cyclosporine | Transplant rejection |
| Protease inhibitors (HIV) | Treatment failure |
| Corticosteroids | Reduced efficacy |
| Phenytoin | Subtherapeutic levels |

## Pyrazinamide (PZA)
### Mechanism
- Prodrug activated by mycobacterial **pyrazinamidase** to **pyrazinoic acid**
- Active at **acidic pH** (inside macrophages, caseous tissue)
- Disrupts membrane potential and fatty acid synthesis
- Uniquely effective against **semi-dormant intracellular bacilli**

### Key ADRs
- **Hyperuricemia** (inhibits uric acid excretion): may precipitate gout
- **Hepatotoxicity** (dose-related)
- **Non-gouty polyarthralgia**

## Ethambutol
### Mechanism
- Inhibits **arabinosyl transferase** (EmbB)
- Blocks synthesis of **arabinogalactan** (cell wall component)
- Bacteriostatic at standard doses

### Key ADRs
- **Retrobulbar optic neuritis**: dose-related, initially loss of red-green color vision, then visual acuity
- Requires visual acuity and color vision testing before and during treatment

## Newer Drugs
| Drug | Mechanism | Role |
|------|-----------|------|
| **Bedaquiline** | ATP synthase inhibitor | MDR-TB |
| **Delamanid** | Mycolic acid synthesis inhibitor | MDR-TB |
| **Pretomanid** | Cell wall + respiratory chain | XDR-TB (BPaL regimen) |
| **Linezolid** | 50S ribosomal inhibitor | XDR-TB |`,
        mnemonics: [
          {
            text: "Rifampicin makes everything RED and REDUCES drug levels: Red secretions + CYP inducer",
            explanation:
              "Rifampicin is a potent CYP450 enzyme inducer (reducing levels of many drugs) and colors all body secretions orange-red.",
          },
          {
            text: "INH + B6 deficiency = PNP: Peripheral Neuropathy Prevention with Pyridoxine",
            explanation:
              "INH depletes pyridoxine (vitamin B6) causing peripheral neuropathy. Prevented by co-prescribing pyridoxine 10 mg/day.",
          },
        ],
        keyPoints: [
          "INH: prodrug activated by KatG, inhibits InhA (mycolic acid synthesis), katG mutation = most common resistance",
          "Rifampicin: inhibits DNA-dependent RNA polymerase, potent CYP450 inducer, rpoB mutation = resistance",
          "PZA: active only at acidic pH (inside macrophages), causes hyperuricemia",
          "Ethambutol: inhibits arabinosyl transferase, causes retrobulbar optic neuritis",
          "INH acetylation polymorphism: slow acetylators have more toxicity (neuropathy, SLE-like)",
          "Rifampicin drug interactions: reduces efficacy of OCPs, warfarin, HIV drugs, cyclosporine",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 55 - Antitubercular Drugs", page: "793-805", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 60 - Antimycobacterial Agents", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "antitubercular-drugs-clinical",
        title: "Antitubercular Drugs - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "NTEP treatment regimens, management of drug-resistant TB (MDR, XDR), adverse effect monitoring, TB in special populations (HIV, pregnancy, children), and Indian public health context.",
        contentMd: `# Clinical Applications

## NTEP (National TB Elimination Programme) Regimens

### Drug-Sensitive TB
**2HRZE / 4HRE** (daily regimen)
- Intensive phase: 2 months of Isoniazid + Rifampicin + Pyrazinamide + Ethambutol (daily)
- Continuation phase: 4 months of Isoniazid + Rifampicin + Ethambutol (daily)
- All drugs given as **weight-band-based FDCs**

| Weight Band | H (mg) | R (mg) | Z (mg) | E (mg) |
|------------|--------|--------|--------|--------|
| 25-39 kg | 150 | 300 | 750 | 550 |
| 40-54 kg | 225 | 450 | 1000 | 800 |
| 55-69 kg | 300 | 600 | 1500 | 1100 |
| >70 kg | 375 | 750 | 2000 | 1375 |

### MDR-TB (Resistant to at least INH + Rifampicin)
- Shorter regimen (9-11 months): Bedaquiline + Levofloxacin + Ethionamide + Ethambutol + INH(high dose) + Pyrazinamide + Clofazimine
- Longer regimen (18-20 months): Individualized based on DST
- All MDR-TB patients must undergo **CBNAAT/Xpert MTB/RIF** or **LPA (Line Probe Assay)** for rapid resistance detection

### XDR-TB
- MDR + resistance to fluoroquinolone + one injectable
- Treatment: BPaL regimen (Bedaquiline + Pretomanid + Linezolid) for 6-9 months
- Newer regimen under NTEP

## Adverse Effect Monitoring

| Drug | ADR to Monitor | Test |
|------|---------------|------|
| INH | Peripheral neuropathy, hepatitis | LFTs monthly, clinical neuropathy |
| Rifampicin | Hepatitis, thrombocytopenia, flu-like syndrome | LFTs, CBC |
| PZA | Hepatitis, hyperuricemia | LFTs, serum uric acid |
| Ethambutol | Optic neuritis | Visual acuity + color vision baseline and monthly |
| Streptomycin | Ototoxicity, nephrotoxicity | Audiometry, creatinine |

### Hepatotoxicity Management
- If any ATT drug causes symptomatic hepatitis (jaundice or ALT >5x normal):
  1. **Stop all hepatotoxic drugs** (H, R, Z)
  2. Continue Ethambutol + Streptomycin (non-hepatotoxic)
  3. Reintroduce one at a time: R first (least hepatotoxic among the three), then H, then Z (most hepatotoxic)

## TB in Special Populations

### HIV-TB Co-infection
- Start ATT first, then ART within 2-8 weeks
- Rifampicin interacts with protease inhibitors - use Rifabutin (less CYP induction) instead
- Immune Reconstitution Inflammatory Syndrome (IRIS) may occur

### Pregnancy
- **Safe**: Rifampicin, INH, Ethambutol
- **Avoid**: Streptomycin (fetal ototoxicity), PZA (limited safety data in some guidelines, but WHO recommends)
- Always co-prescribe pyridoxine with INH

### Children
- Same drugs, weight-based dosing
- Ethambutol can be used in children (previously avoided due to difficulty testing vision)

> **Clinical Pearl**: Under Nikshay Poshan Yojana, NTEP provides Rs 500/month nutritional support to TB patients. All TB cases must be mandatorily notified on Nikshay portal.`,
        mnemonics: [
          {
            text: "Reintroduce ATT after hepatitis: R-H-Z (R first = least hepatotoxic, Z last = most hepatotoxic)",
            explanation:
              "When reintroducing anti-TB drugs after drug-induced hepatitis, add Rifampicin first (least hepatotoxic), then Isoniazid, then Pyrazinamide (most hepatotoxic) last.",
          },
          {
            text: "NTEP support: Nikshay Notification, TB free India 2025, Elimination Programme, Poshan Yojana Rs 500",
            explanation:
              "Key NTEP points: mandatory Nikshay notification, India's target to eliminate TB by 2025, nutritional support of Rs 500/month under Nikshay Poshan Yojana.",
          },
        ],
        keyPoints: [
          "Standard regimen: 2HRZE/4HRE daily (replaced thrice-weekly since 2017 in India)",
          "MDR-TB: resistant to at least INH + Rifampicin, diagnosed by CBNAAT/Xpert MTB/RIF",
          "Hepatotoxicity reintroduction order: R first (safest), then H, then Z (most hepatotoxic)",
          "HIV-TB: use Rifabutin instead of Rifampicin with protease inhibitors",
          "Streptomycin contraindicated in pregnancy (fetal ototoxicity)",
          "Mandatory notification of all TB cases on Nikshay portal under NTEP",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 55 - Antitubercular Drugs", page: "805-810", edition: "8th" },
          { book: "Park's Textbook", chapter: "Tuberculosis", edition: "26th" },
        ],
      },
      {
        layer: 4,
        slug: "antitubercular-drugs-exam",
        title: "Antitubercular Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield one-liners, comparison tables, and previous year question patterns for antitubercular drugs.",
        contentMd: `# Exam High Yield

## One-Liners
- Most potent bactericidal anti-TB drug: **Isoniazid**
- Most potent sterilizing anti-TB drug: **Rifampicin**
- Anti-TB drug active at acidic pH (intracellular): **Pyrazinamide**
- Anti-TB drug causing optic neuritis: **Ethambutol (retrobulbar)**
- Anti-TB drug causing peripheral neuropathy: **INH (pyridoxine depletion)**
- Anti-TB drug causing orange-red secretions: **Rifampicin**
- Anti-TB drug causing hyperuricemia: **Pyrazinamide**
- Most hepatotoxic first-line ATT drug: **Pyrazinamide**
- Anti-TB drug causing SLE-like syndrome: **INH (in slow acetylators)**
- Most common mechanism of INH resistance: **katG gene mutation**
- Most common mechanism of Rifampicin resistance: **rpoB gene mutation**
- Anti-TB drug that is a CYP450 inducer: **Rifampicin (potent)**
- Newer anti-TB drug inhibiting ATP synthase: **Bedaquiline**
- INH metabolism shows: **Genetic polymorphism (acetylation)**
- Enzyme activating INH: **KatG (catalase-peroxidase)**

## Comparison: First-Line ATT

| Feature | INH | Rifampicin | PZA | Ethambutol | Streptomycin |
|---------|-----|-----------|-----|-----------|-------------|
| Type | Bactericidal | Bactericidal + Sterilizing | Sterilizing | Bacteriostatic | Bactericidal |
| Target | InhA (mycolic acid) | RNA polymerase | Membrane function | Arabinosyl transferase | 30S ribosome |
| Key ADR | Neuropathy, hepatitis | Hepatitis, CYP induction | Hyperuricemia, hepatitis | Optic neuritis | Ototoxicity |
| Resistance gene | katG | rpoB | pncA | embB | rrs |
| Pregnancy | Safe (+ pyridoxine) | Safe | Caution | Safe | Contraindicated |
| Special | Acetylation polymorphism | Orange secretions | Acidic pH only | Color vision testing | IM only |

## Drug-Resistant TB Definitions

| Type | Resistance Pattern |
|------|-------------------|
| **MDR-TB** | INH + Rifampicin (at least) |
| **Pre-XDR** | MDR + Fluoroquinolone resistance |
| **XDR-TB** | MDR + FQ + one Group A drug (bedaquiline/linezolid) |
| **Rifampicin mono-resistant** | Only Rifampicin (treat as MDR) |

## Previous Year Themes
- Mechanism of each first-line drug
- ATT drug toxicity identification (clinical vignette)
- INH acetylation polymorphism
- Rifampicin drug interactions
- NTEP regimen questions
- MDR-TB definition and treatment
- Hepatotoxicity management and drug reintroduction order`,
        mnemonics: [
          {
            text: "Resistance genes: KatG (INH), rpoB (Rif), pncA (PZA), embB (Ethamb): Kat-Rope-Peanut-Embalm",
            explanation:
              "Memory aid for resistance genes of first-line ATT: KatG for INH, rpoB for Rifampicin, pncA for Pyrazinamide, embB for Ethambutol.",
          },
        ],
        keyPoints: [
          "INH: most bactericidal; Rifampicin: most sterilizing",
          "PZA: most hepatotoxic first-line drug, causes hyperuricemia",
          "Ethambutol: retrobulbar optic neuritis (red-green color blindness first)",
          "MDR-TB = resistance to at least INH + Rifampicin",
          "CBNAAT/GeneXpert: rapid diagnosis of Rifampicin resistance (rpoB mutation)",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 55", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "antitubercular-drugs-recall",
        title: "Antitubercular Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on antitubercular drugs.",
        contentMd: `# Active Recall

**Q1:** Name the first-line anti-TB drugs.
> RHZE-S: Rifampicin, Isoniazid (INH), Pyrazinamide, Ethambutol, Streptomycin.

**Q2:** Which anti-TB drug is the most bactericidal?
> Isoniazid (INH) - kills rapidly multiplying bacilli in the cavity wall.

**Q3:** Which anti-TB drug is the most sterilizing?
> Rifampicin - kills slow/intermittent multipliers, responsible for preventing relapse.

**Q4:** What is the mechanism of INH?
> Prodrug activated by KatG (catalase-peroxidase), inhibits InhA (enoyl-ACP reductase), blocking mycolic acid synthesis.

**Q5:** What is the mechanism of Rifampicin?
> Binds the beta-subunit of DNA-dependent RNA polymerase, blocking RNA synthesis.

**Q6:** Why is pyrazinamide uniquely effective against intracellular TB bacilli?
> PZA is activated to pyrazinoic acid by pyrazinamidase and works only at acidic pH, which exists inside macrophage phagolysosomes.

**Q7:** What visual complication does ethambutol cause?
> Retrobulbar optic neuritis - initially loss of red-green color discrimination, then decreased visual acuity. Dose-related and usually reversible.

**Q8:** How do you prevent INH-induced peripheral neuropathy?
> Co-prescribe pyridoxine (vitamin B6) 10 mg/day. INH depletes B6 by forming a complex with pyridoxal phosphate.

**Q9:** What is the standard NTEP regimen for new drug-sensitive TB?
> 2HRZE / 4HRE (2 months intensive phase with 4 drugs, 4 months continuation with 3 drugs, all daily).

**Q10:** Define MDR-TB.
> TB resistant to at least Isoniazid AND Rifampicin (the two most important first-line drugs).

**Q11:** In ATT-induced hepatitis, which drug do you reintroduce first?
> Rifampicin (least hepatotoxic among H, R, Z). Then INH. Then PZA (most hepatotoxic) last.

**Q12:** Why is Rifampicin problematic in HIV-TB co-infection?
> Rifampicin is a potent CYP450 inducer that drastically reduces levels of protease inhibitors and some NNRTIs. Rifabutin (weaker inducer) is used instead.

**Q13:** What nutritional support does NTEP provide to TB patients?
> Rs 500/month under Nikshay Poshan Yojana for nutritional support during treatment.`,
        mnemonics: [],
        keyPoints: [
          "13 recall questions covering mechanisms, ADRs, regimens, resistance, and NTEP policies",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 55", edition: "8th" },
        ],
      },
    ],
  },

  // ─── Topic 4: Antimalarial Drugs ───────────────────────────
  {
    topicCode: "PH-MOD-05-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "antimalarial-drugs-foundation",
        title: "Antimalarial Drugs - Foundation",
        estimatedMinutes: 20,
        summary:
          "Antimalarial drugs target different stages of the Plasmodium life cycle. Key drugs include chloroquine, ACT (artemisinin-based combination therapy), primaquine for radical cure of P. vivax, and chemoprophylaxis agents. India's NVBDCP guidelines govern malaria treatment.",
        contentMd: `# Antimalarial Drugs

## Plasmodium Life Cycle & Drug Targets
Understanding the parasite life cycle is essential for rational antimalarial therapy.

### Stages and Drug Targets
| Stage | Location | Drug Target |
|-------|----------|-------------|
| **Sporozoites** | Blood (from mosquito) | No drug effective (too brief) |
| **Hepatic schizogony (pre-erythrocytic)** | Liver | Primaquine, Atovaquone-proguanil |
| **Erythrocytic schizogony** | RBCs | Chloroquine, ACT, Quinine, Mefloquine |
| **Hypnozoites** | Liver (P. vivax, P. ovale) | Primaquine, Tafenoquine (radical cure) |
| **Gametocytes** | Blood | Primaquine (kills gametocytes of all species) |

## Classification by Stage of Action

### Blood Schizonticides (treat acute attack)
- **Chloroquine**: DOC for P. vivax and chloroquine-sensitive P. falciparum
- **Artemisinin derivatives**: Artesunate, Artemether - fastest acting
- **Quinine**: Reserve for severe malaria
- **Mefloquine**: Prophylaxis and treatment

### Tissue Schizonticides
- **Primaquine**: Kills hypnozoites (radical cure P. vivax/ovale) + gametocytes

### Sporontocides (block transmission)
- **Primaquine**: Kills gametocytes, blocks transmission

## Key Drugs

### Chloroquine
- Concentrates in parasite food vacuole, inhibits heme polymerase
- Heme (toxic) accumulates and kills the parasite
- Highly effective against P. vivax (India: most vivax is chloroquine-sensitive)

### Artemisinin-Based Combination Therapy (ACT)
- **Artesunate + Sulphadoxine-Pyrimethamine (AS+SP)**: First-line for P. falciparum in India
- **Artemether-Lumefantrine**: WHO recommended
- Artemisinins produce free radicals that damage parasite proteins

### Primaquine
- Only drug killing hypnozoites (radical cure for P. vivax relapse)
- **Contraindicated in G6PD deficiency** (causes hemolytic anemia)
- Also kills gametocytes of P. falciparum (blocks transmission)

> **Clinical Pearl**: India's NVBDCP guidelines: P. vivax treated with Chloroquine + Primaquine (14 days). P. falciparum treated with ACT (AS+SP) + single dose Primaquine (gametocytocidal).`,
        mnemonics: [
          {
            text: "PRIMAL cure: PRIMaquine for ALL hypnozoites (P. vivax radical cure) and ALL gametocytes",
            explanation:
              "Primaquine is the only drug that kills hypnozoites (preventing relapse of P. vivax/ovale) and gametocytes of all species (blocking transmission).",
          },
          {
            text: "CQ in VACUOLE: Chloroquine concentrates in Vacuole, Accumulates heme, Causes Unchecked toxicity, Obliterates Lysosome function, Eliminates parasite",
            explanation:
              "Chloroquine's mechanism: concentrates in the parasite food vacuole, inhibits heme polymerase, and causes toxic heme (ferriprotoporphyrin IX) accumulation.",
          },
        ],
        keyPoints: [
          "Antimalarials target different stages: blood schizonticides (CQ, ACT), tissue schizonticides (primaquine), sporontocides (primaquine)",
          "Chloroquine: DOC for P. vivax, inhibits heme polymerase in food vacuole",
          "ACT (Artesunate + SP): first-line for P. falciparum in India",
          "Primaquine: only drug killing hypnozoites (radical cure) and gametocytes (blocks transmission)",
          "Primaquine contraindicated in G6PD deficiency (hemolytic anemia)",
          "NVBDCP governs malaria treatment guidelines in India",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 56 - Antimalarial Drugs", page: "811-830", edition: "8th" },
          { book: "Park's Textbook", chapter: "Malaria", edition: "26th" },
        ],
      },
      {
        layer: 2,
        slug: "antimalarial-drugs-mechanism",
        title: "Antimalarial Drugs - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed mechanisms of chloroquine, artemisinins, primaquine, quinine, and antifolate antimalarials. Resistance mechanisms including chloroquine-resistant P. falciparum and artemisinin resistance.",
        contentMd: `# Mechanisms of Antimalarial Drugs

## Chloroquine - Detailed Mechanism
1. Chloroquine (a weak base) enters the acidic food vacuole of the parasite
2. Gets protonated and **trapped** (ion trapping)
3. Inhibits **heme polymerase** (hemozoin formation)
4. Free heme (ferriprotoporphyrin IX) accumulates - highly toxic
5. Membrane damage and parasite death

### Pharmacokinetics
- Excellent oral absorption, very large Vd (200+ L/kg due to tissue binding)
- Half-life: 1-2 months (slow elimination from tissues)
- Hepatic metabolism, renal excretion

### Chloroquine Resistance (P. falciparum)
- Mutation in **PfCRT gene** (Plasmodium falciparum Chloroquine Resistance Transporter)
- Mutant transporter pumps chloroquine OUT of the food vacuole
- Reversed by verapamil (calcium channel blocker) in vitro

## Artemisinin Derivatives
### Mechanism
1. Contain an **endoperoxide bridge** (essential for activity)
2. Fe2+ (from heme) cleaves the endoperoxide bridge
3. Generates **free radicals** (carbon-centered radicals)
4. Free radicals alkylate and damage parasite proteins and lipids
5. Fastest parasite clearance of any antimalarial

### Pharmacokinetics
| Drug | Route | Half-life | Notes |
|------|-------|-----------|-------|
| **Artesunate** | IV/IM/Oral | 1 hr (active metabolite DHA) | DOC for severe malaria |
| **Artemether** | IM/Oral | 3-4 hr | Oil-based IM |
| **Dihydroartemisinin (DHA)** | Oral | 1 hr | Active metabolite |

- Short half-life necessitates combination with longer-acting partner drug (ACT)

### Artemisinin Resistance
- Mutations in **Kelch13 gene** (K13 propeller domain)
- Emerging in Southeast Asia (Cambodia, Myanmar)
- Manifests as **delayed parasite clearance** (not complete treatment failure yet)

## Primaquine
### Mechanism
- Generates **reactive oxygen species** inside parasite mitochondria
- Disrupts electron transport chain
- Effective against hypnozoites and gametocytes (both metabolically active in different ways)

### G6PD Deficiency Risk
- Primaquine metabolites cause oxidative stress in RBCs
- Normal RBCs: G6PD maintains glutathione levels to neutralize oxidants
- G6PD-deficient RBCs: cannot handle oxidative stress, leading to **hemolytic anemia**
- **Must test G6PD before prescribing primaquine**

## Antifolate Antimalarials
| Drug | Target | Role |
|------|--------|------|
| **Pyrimethamine** | Dihydrofolate reductase (DHFR) | Blood schizonticide |
| **Sulphadoxine** | Dihydropteroate synthase (DHPS) | Synergistic with pyrimethamine |
| **Proguanil** | DHFR (via active metabolite cycloguanil) | Prophylaxis |

- Sulphadoxine-Pyrimethamine (SP): used as partner drug in ACT for P. falciparum
- Resistance: mutations in **dhfr** and **dhps** genes`,
        mnemonics: [
          {
            text: "Artemisinin needs IRON to work: Fe2+ cleaves EndoPeroxide bridge generating free Radicals",
            explanation:
              "The endoperoxide bridge in artemisinins is activated by ferrous iron (Fe2+) from parasite heme, generating cytotoxic free radicals that kill the parasite.",
          },
          {
            text: "PfCRT Pumps CQ out: the resistance transporter in P. falciparum",
            explanation:
              "Chloroquine resistance in P. falciparum is due to mutations in PfCRT gene that encodes a transporter pumping chloroquine out of the food vacuole, preventing heme accumulation.",
          },
        ],
        keyPoints: [
          "Chloroquine: ion trapping in food vacuole, inhibits heme polymerase, toxic heme accumulates",
          "CQ resistance: PfCRT mutation pumps CQ out of food vacuole",
          "Artemisinins: endoperoxide bridge activated by Fe2+, free radical generation, fastest acting",
          "Artemisinin resistance: Kelch13 (K13) gene mutations, delayed parasite clearance",
          "Primaquine: generates ROS, risk of hemolysis in G6PD deficiency - must test before use",
          "SP (sulphadoxine-pyrimethamine): sequential folate pathway blockade, partner in ACT",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 56 - Antimalarial Drugs", page: "815-825", edition: "8th" },
          { book: "Goodman & Gilman", chapter: "Ch 61 - Chemotherapy of Malaria", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "antimalarial-drugs-clinical",
        title: "Antimalarial Drugs - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Treatment of uncomplicated and severe malaria per NVBDCP guidelines, chemoprophylaxis, malaria in pregnancy, and the Indian public health context.",
        contentMd: `# Clinical Applications

## NVBDCP Treatment Guidelines (India)

### P. vivax Malaria
- **Chloroquine**: 25 mg/kg over 3 days (10 mg/kg day 1 & 2, 5 mg/kg day 3)
- **Primaquine**: 0.25 mg/kg/day x 14 days (radical cure to eliminate hypnozoites)
- Must test for **G6PD deficiency** before primaquine

### P. falciparum Malaria (Uncomplicated)
- **ACT**: Artesunate (4 mg/kg/day x 3 days) + Sulphadoxine-Pyrimethamine (single dose on day 1)
- **Primaquine**: 0.75 mg/kg single dose on day 2 (gametocytocidal only, NOT radical cure)

### Severe/Complicated Malaria (any species)
- **IV Artesunate**: 2.4 mg/kg at 0, 12, 24 hours, then daily until oral tolerated
- Switch to full oral ACT course when patient can take orally
- Alternatives: IV Quinine (if artesunate unavailable)

> **Clinical Pearl**: Quinine can cause "Cinchonism" - tinnitus, headache, nausea, visual disturbances. Also causes hypoglycemia by stimulating insulin secretion.

## Chemoprophylaxis

| Situation | Drug | Regimen |
|-----------|------|---------|
| Short-term travel (CQ-sensitive area) | Chloroquine | 500 mg weekly, start 1 week before |
| CQ-resistant area | Mefloquine | 250 mg weekly, start 2 weeks before |
| CQ-resistant area (alternative) | Doxycycline | 100 mg daily, start 2 days before |
| CQ-resistant area (alternative) | Atovaquone-Proguanil | Start 2 days before, continue 7 days after |

## Malaria in Pregnancy
| Trimester | P. vivax | P. falciparum |
|-----------|---------|--------------|
| 1st trimester | Chloroquine (primaquine deferred to postpartum) | Quinine + Clindamycin (7 days) |
| 2nd/3rd trimester | Chloroquine + defer primaquine | ACT (Artesunate + SP or AL) |
| Severe malaria | IV Artesunate (all trimesters) | Same |

- **Primaquine contraindicated in pregnancy** (hemolysis risk, fetal G6PD status unknown)
- **Doxycycline and tetracycline contraindicated** in pregnancy

## Adverse Effects Summary

| Drug | Major ADRs |
|------|-----------|
| Chloroquine | Retinopathy (chronic use), pruritus (dark skin), QT prolongation |
| Artemisinins | Generally well-tolerated, rare neurotoxicity (high dose) |
| Primaquine | Hemolytic anemia (G6PD deficiency), methemoglobinemia |
| Quinine | Cinchonism, hypoglycemia, blackwater fever, QT prolongation |
| Mefloquine | Neuropsychiatric (vivid dreams, anxiety, psychosis), contraindicated in epilepsy |
| SP | Stevens-Johnson syndrome, agranulocytosis (rare) |

## Indian Public Health Context
- India contributes ~3% of global malaria cases (declining trend)
- P. vivax predominates in most states; P. falciparum dominates in NE India, Odisha, Jharkhand, Chhattisgarh
- Rapid Diagnostic Tests (RDTs) deployed at all levels including ASHAs
- Free ACT and chloroquine through NVBDCP
- Vector control: ITNs (insecticide-treated nets), IRS (indoor residual spraying)`,
        mnemonics: [
          {
            text: "Quinine CINCH: Cinchonism, Insulin release (hypoglycemia), Narrow therapeutic index, Cardiac (QT), Hemolysis (blackwater fever)",
            explanation:
              "Major adverse effects of quinine: cinchonism (tinnitus, visual/hearing disturbance), hypoglycemia from insulin release, narrow therapeutic window, cardiac arrhythmia, and blackwater fever (intravascular hemolysis).",
          },
          {
            text: "G6PD before PQ: test Glucose-6-Phosphate Dehydrogenase before giving Primaquine",
            explanation:
              "Primaquine causes hemolytic anemia in G6PD-deficient patients. Must perform G6PD screening before prescribing primaquine for radical cure.",
          },
        ],
        keyPoints: [
          "P. vivax: Chloroquine + Primaquine 14 days (radical cure); P. falciparum: ACT + single-dose Primaquine",
          "Severe malaria: IV Artesunate (DOC), not quinine as first-line",
          "G6PD testing mandatory before primaquine administration",
          "Quinine ADRs: cinchonism, hypoglycemia, blackwater fever, QT prolongation",
          "Primaquine contraindicated in pregnancy and G6PD deficiency",
          "Mefloquine: neuropsychiatric side effects, contraindicated in epilepsy",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 56 - Antimalarial Drugs", page: "825-830", edition: "8th" },
          { book: "Park's Textbook", chapter: "Malaria - NVBDCP", edition: "26th" },
        ],
      },
      {
        layer: 4,
        slug: "antimalarial-drugs-exam",
        title: "Antimalarial Drugs - Exam Prep",
        estimatedMinutes: 15,
        summary:
          "High-yield one-liners, comparison tables, and commonly tested MCQ patterns on antimalarial pharmacology.",
        contentMd: `# Exam High Yield

## One-Liners
- DOC for P. vivax: **Chloroquine** (blood schizonticide)
- Drug for radical cure of P. vivax: **Primaquine** (kills hypnozoites)
- DOC for severe malaria: **IV Artesunate**
- Fastest-acting antimalarial: **Artesunate** (rapid parasite clearance)
- Antimalarial causing cinchonism: **Quinine**
- Antimalarial causing hypoglycemia: **Quinine** (stimulates insulin secretion)
- Antimalarial contraindicated in G6PD deficiency: **Primaquine**
- Antimalarial causing blackwater fever: **Quinine**
- Antimalarial with neuropsychiatric effects: **Mefloquine**
- Chloroquine resistance mechanism: **PfCRT gene mutation** (efflux from vacuole)
- Artemisinin resistance gene: **Kelch13 (K13)**
- Chloroquine concentrates in: **Parasite food vacuole (acidic)**
- Artemisinin bridge essential for activity: **Endoperoxide bridge**
- Antimalarial used as anti-inflammatory: **Chloroquine/Hydroxychloroquine** (SLE, RA)
- Drug blocking malaria transmission: **Primaquine** (gametocytocidal)

## Comparison: Key Antimalarials

| Feature | Chloroquine | Artesunate | Primaquine | Quinine |
|---------|------------|-----------|-----------|---------|
| Mechanism | Heme polymerase inhibitor | Free radical generation | ROS in mitochondria | Multiple |
| Stage | Blood schizonticide | Blood schizonticide | Tissue schizonticide + gametocytocide | Blood schizonticide |
| Route | Oral/IM | IV/IM/Oral | Oral only | IV/Oral |
| Key ADR | Retinopathy | Well-tolerated | Hemolysis (G6PD) | Cinchonism |
| Resistance gene | PfCRT | K13 | Not significant | - |
| Use in pregnancy | Safe | Safe (2nd/3rd) | Contraindicated | Safe but 2nd line |

## Antifolate Combination Rationale
$$\\text{PABA} \\xrightarrow{\\text{DHPS (blocked by Sulphadoxine)}} \\text{Dihydrofolate} \\xrightarrow{\\text{DHFR (blocked by Pyrimethamine)}} \\text{Tetrahydrofolate}$$

Sequential blockade = synergistic effect.

## Previous Year Themes
- Life cycle stages and drug targets
- Chloroquine mechanism and resistance (PfCRT)
- G6PD deficiency and primaquine
- Severe malaria treatment (IV artesunate)
- Cinchonism and quinine toxicity
- ACT rationale and components
- Malaria in pregnancy treatment`,
        mnemonics: [
          {
            text: "CLAMP the malaria life cycle: Chloroquine (blood), Lumefantrine (blood partner), Artesunate (blood, fast), Mefloquine (prophylaxis), Primaquine (liver + gametocytes)",
            explanation:
              "Key antimalarials and their primary stage of action: CQ and lumefantrine for blood stages, artesunate for rapid blood clearance, mefloquine for prophylaxis, primaquine for liver stages and gametocytes.",
          },
        ],
        keyPoints: [
          "CQ: blood schizonticide, heme polymerase inhibitor, PfCRT resistance",
          "Artesunate: fastest acting, endoperoxide bridge + Fe2+ = free radicals",
          "Primaquine: only drug for radical cure (hypnozoites) and gametocytes",
          "Quinine: cinchonism, hypoglycemia, blackwater fever",
          "K13 mutation: artemisinin resistance in SE Asia",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 56", edition: "8th" },
        ],
      },
      {
        layer: 5,
        slug: "antimalarial-drugs-recall",
        title: "Antimalarial Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on antimalarial drugs.",
        contentMd: `# Active Recall

**Q1:** What is the mechanism of chloroquine?
> Chloroquine concentrates in the acidic food vacuole of Plasmodium, inhibits heme polymerase, causing toxic free heme (ferriprotoporphyrin IX) accumulation that kills the parasite.

**Q2:** What is the DOC for severe malaria?
> IV Artesunate (2.4 mg/kg at 0, 12, 24 hours, then daily).

**Q3:** Why is primaquine essential for P. vivax treatment?
> Primaquine is the only drug that kills hypnozoites in the liver, preventing relapse (radical cure). Without it, P. vivax can relapse from dormant liver stages.

**Q4:** Why must G6PD be tested before primaquine?
> Primaquine metabolites generate oxidative stress. G6PD-deficient RBCs cannot maintain glutathione levels, leading to hemolytic anemia.

**Q5:** What is the mechanism of chloroquine resistance?
> PfCRT (P. falciparum Chloroquine Resistance Transporter) gene mutation causes a transporter to pump chloroquine out of the food vacuole.

**Q6:** How do artemisinins work?
> The endoperoxide bridge is cleaved by Fe2+ (from parasite heme), generating carbon-centered free radicals that damage parasite proteins and membranes.

**Q7:** What is cinchonism?
> A syndrome caused by quinine: tinnitus, headache, nausea, blurred vision, and disturbed hearing. Occurs at therapeutic doses.

**Q8:** What antimalarial blocks malaria transmission?
> Primaquine - kills gametocytes in the blood, preventing mosquitoes from picking up the parasite.

**Q9:** Name the ACT regimen used in India for P. falciparum.
> Artesunate + Sulphadoxine-Pyrimethamine (AS + SP), plus single-dose primaquine for gametocytocidal action.

**Q10:** Why are artemisinins always given as combination therapy?
> Artemisinins have very short half-lives (~1 hour). A longer-acting partner drug (lumefantrine, SP, mefloquine) is needed to kill remaining parasites and prevent resistance.

**Q11:** What antimalarial is safe in all trimesters for severe malaria?
> IV Artesunate - recommended even in 1st trimester for severe/life-threatening malaria.

**Q12:** What is the K13 (Kelch13) gene?
> Gene whose mutations cause artemisinin resistance, manifesting as delayed parasite clearance. Emerging in Southeast Asia.`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering mechanisms, resistance, treatment guidelines, and clinical pharmacology of antimalarials",
        ],
        textbookRefs: [
          { book: "KD Tripathi", chapter: "Ch 56", edition: "8th" },
        ],
      },
    ],
  },
];
