export const regenBatch3Lessons = [
  {
    topicCode: "PH-MOD-05-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "penicillins-cephalosporins-foundation",
        title: "Penicillins & Cephalosporins - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of beta-lactam antibiotics: penicillins and cephalosporins. Structure, classification, and basic mechanism of action against bacterial cell walls.",
        contentMd: "# Penicillins & Cephalosporins - Foundation\n\n## Introduction\nBeta-lactam antibiotics are the most commonly prescribed antibiotics. They work by inhibiting bacterial cell wall synthesis through penicillin-binding proteins (PBPs).\n\n## Historical Context\nPenicillin, discovered by Fleming in 1928, revolutionized antibiotic therapy. Cephalosporins were later developed as semi-synthetic derivatives with improved spectrum and stability.\n\n## Beta-Lactam Structure\nAll contain a beta-lactam ring (4-membered lactam ring fused to a thiazolidine ring in penicillins). This ring is essential for antibacterial activity.\n\n## Classification\n**Penicillins:**\n- Natural penicillins (Penicillin G, V)\n- Aminopenicillins (Ampicillin, Amoxicillin)\n- Antistaphylococcal penicillins (Cloxacillin, Dicloxacillin)\n- Antipseudomonal penicillins (Piperacillin, Ticarcillin)\n\n**Cephalosporins:**\n- First generation (Cephalexin, Cefazolin)\n- Second generation (Cefaclor, Cefuroxime)\n- Third generation (Ceftriaxone, Cefixime)\n- Fourth generation (Cefepime)\n- Fifth generation (Ceftaroline)\n\n## Spectrum of Activity\nPenicillins primarily cover Gram-positive bacteria. Extended-spectrum agents (aminopenicillins) cover some Gram-negatives. Cephalosporins have broader Gram-negative coverage with increasing generation.\n\n## Advantages\n- Bactericidal action\n- Excellent tissue penetration\n- Safe in pregnancy\n- Low toxicity\n- Cost-effective",
        mnemonics: [
          { text: "PACE", explanation: "Penicillins: Aminopenicillins, Cephalosporins, Extended-spectrum" },
          { text: "Beta-lactams = Bell shape + ring", explanation: "Remember the beta-lactam ring structure that kills bacteria" }
        ],
        keyPoints: [
          "Beta-lactam ring is the active moiety",
          "Cell wall inhibition is bactericidal",
          "Generations of cephalosporins have increasing Gram-negative coverage",
          "Cross-reactivity in beta-lactam allergy is about 1-3%",
          "Time-dependent killing—maintain levels above MIC"
        ],
        textbookRefs: [
          { book: "Katzung Basic & Clinical Pharmacology", chapter: "43", edition: "15th" },
          { book: "Rang & Dale's Pharmacology", chapter: "50", edition: "9th" },
          { book: "Goodman & Gilman's", chapter: "55", edition: "13th" }
        ]
      },
      {
        layer: 2,
        slug: "penicillins-cephalosporins-mechanism",
        title: "Penicillins & Cephalosporins - Mechanism",
        estimatedMinutes: 25,
        summary: "Detailed mechanism of action: penicillin-binding proteins, cell wall disruption, bactericidal activity, and resistance mechanisms (beta-lactamases, altered PBPs).",
        contentMd: "# Penicillins & Cephalosporins - Mechanism\n\n## Cell Wall Structure\nBacterial cell walls contain peptidoglycan: polysaccharide backbone crosslinked by peptide bridges. This structure is absent in eukaryotes, making it an excellent drug target.\n\n## Mechanism of Action\n1. **Beta-lactam binding**: Drug binds to penicillin-binding proteins (PBPs)\n2. **Inhibition of transpeptidases**: PBPs catalyze crosslinking of peptidoglycan strands\n3. **Weakened cell wall**: Loss of structural integrity\n4. **Cell lysis**: Osmotic pressure ruptures bacterial membrane\n5. **Bactericidal effect**: Direct bacterial death\n\n## Penicillin-Binding Proteins\nMultiple PBPs exist (PBP1, 2, 3 in E. coli). Different beta-lactams have varying affinities for different PBPs, affecting their spectrum.\n\n## Why Bactericidal?\nUnlike protein synthesis inhibitors (static), beta-lactams actively destroy the cell wall structure. Growing bacteria are most susceptible as they remodel peptidoglycan.\n\n## Resistance Mechanisms\n**Beta-lactamase Production**: Gram-positive and Gram-negative bacteria produce beta-lactamases that hydrolyze the beta-lactam ring. Solution: Beta-lactamase inhibitors (clavulanic acid, sulbactam, tazobactam).\n\n**Altered PBPs**: MRSA and ESBL producers modify PBP structure, reducing beta-lactam binding.\n\n**Reduced Penetration**: Gram-negative outer membrane limits penicillin entry.\n\n**Efflux Pumps**: Active removal of the drug from bacterial cells.\n\n## Synergy and Combinations\nBeta-lactams + aminoglycosides show synergy against Enterococcus and Pseudomonas.",
        mnemonics: [
          { text: "PBP = Penicillin Binding Protein", explanation: "The target enzyme that beta-lactams inhibit" },
          { text: "BLIP", explanation: "Beta-Lactam Inhibitor Proteins (clavulanic acid, sulbactam)" }
        ],
        keyPoints: [
          "Beta-lactams inhibit transpeptidase activity of PBPs",
          "Result is loss of peptidoglycan crosslinking",
          "Bactericidal through cell wall lysis",
          "Selective toxicity: bacteria have cell walls, humans don't",
          "Beta-lactamase is the primary resistance mechanism",
          "Beta-lactamase inhibitors restore activity against resistant organisms"
        ],
        textbookRefs: [
          { book: "Katzung Basic & Clinical Pharmacology", chapter: "43", edition: "15th" },
          { book: "Lehninger Principles of Biochemistry", chapter: "10", edition: "7th" },
          { book: "Stryer's Biochemistry", chapter: "9", edition: "9th" }
        ]
      },
      {
        layer: 3,
        slug: "penicillins-cephalosporins-clinical",
        title: "Penicillins & Cephalosporins - Clinical",
        estimatedMinutes: 30,
        summary: "Clinical use in India: indications, dosing, adverse effects, allergy management, and drug interactions in Indian healthcare settings.",
        contentMd: "# Penicillins & Cephalosporins - Clinical Use\n\n## Penicillin G (Benzylpenicillin)\n**Indications**: Meningitis, endocarditis, syphilis, streptococcal infections\n**Dosing**: 2-4 million units IV/IM 4-6 hourly for severe infections\n**Route**: IV preferred for serious infections; IM acceptable\n**CNS Penetration**: Excellent with meningeal inflammation\n\n## Amoxicillin\n**Indications**: Respiratory tract infections, otitis media, UTIs, H. pylori eradication\n**Dosing**: 250-500 mg 8-hourly orally; up to 1g 8-hourly for severe infections\n**Advantage**: Oral absorption better than ampicillin\n**Common in India**: Available as generic, inexpensive\n\n## Cephalexin (1st Gen)\n**Indications**: Skin/soft tissue infections, respiratory infections, UTIs\n**Dosing**: 500 mg 6-hourly orally (usually 4-6 weeks in India)\n**Oral option**: First-line for mild-moderate community infections\n\n## Ceftriaxone (3rd Gen)\n**Indications**: Meningitis, sepsis, severe pneumonia, typhoid, gonorrhea\n**Dosing**: 1-2 g IV/IM 12-hourly; 2 g 12-hourly for meningitis\n**Indian Context**: Extensively used for hospital-acquired infections, typhoid\n**Advantage**: Long half-life, once or twice daily dosing\n\n## Piperacillin-Tazobactam\n**Indications**: Polymicrobial infections, ESBL producers, hospital-acquired infections\n**Dosing**: 4.5 g IV 6-hourly (4g piperacillin + 0.5g tazobactam)\n**Use in India**: Growing prevalence due to MDR organisms\n\n## Adverse Effects\n**Common**:\n- Diarrhea (Clostridioides difficile-associated diarrhea with prolonged use)\n- Nausea, vomiting\n- Rash (not true allergy)\n\n**Serious**:\n- Anaphylaxis (0.01-0.1% with penicillins)\n- Stevens-Johnson syndrome\n- Hemolytic anemia\n- Interstitial nephritis\n- Neurotoxicity (high-dose penicillin, especially in renal failure)\n\n## Allergy Management\n**True IgE-mediated allergy**: Anaphylaxis, urticaria, angioedema\n**Cross-reactivity**: Penicillins 1-3%, Cephalosporins 1-5% (higher with first-generation)\n**Management**: Avoid beta-lactams in true allergy; use alternatives (fluoroquinolones, macrolides)\n**Cephalosporin use in penicillin allergy**: Safe in non-anaphylactic reactions; exercise caution if severe anaphylaxis history\n\n## Drug Interactions\n- Probenecid reduces renal excretion (increases levels)\n- May reduce efficacy of oral contraceptives\n- Warfarin interaction (minor)\n- Methotrexate: Reduced clearance\n\n## Renal Function Adjustments\n- Ampicillin: Minimal adjustment needed\n- Penicillin G: CrCl <10 mL/min—reduce dose\n- Cephalosporins: Significant renal excretion—dose adjust for CrCl <30 mL/min",
        mnemonics: [
          { text: "CAP3", explanation: "Ceftriaxone, Amoxicillin, Piperacillin (with tazobactam) - Common in India" },
          { text: "MEL", explanation: "Meningitis, Endocarditis, syphilis - Penicillin G uses" }
        ],
        keyPoints: [
          "Amoxicillin is preferred oral penicillin for community infections",
          "Ceftriaxone is workhorse for severe/hospital infections in India",
          "Piperacillin-tazobactam for ESBL and polymicrobial infections",
          "True allergy is rare; non-specific rashes common",
          "Prolonged use risks C. difficile colitis",
          "Monitor renal function for dosing adjustments",
          "Time-dependent killing: maintain adequate concentration"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "195", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Infectious Diseases", edition: "11th" },
          { book: "Goodman & Gilman's", chapter: "55", edition: "13th" }
        ]
      },
      {
        layer: 4,
        slug: "penicillins-cephalosporins-exam",
        title: "Penicillins & Cephalosporins - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield exam points: resistance patterns, beta-lactamase inhibitors, cephalosporin generations, allergy considerations, and India-specific MCQ patterns.",
        contentMd: "# Penicillins & Cephalosporins - Exam Prep\n\n## High-Yield Facts\n1. **Beta-lactam ring**: Essential for activity; hydrolyzed by beta-lactamases\n2. **Transpeptidase inhibition**: Prevents peptidoglycan crosslinking\n3. **Time-dependent killing**: Efficacy depends on time above MIC, not AUC/MIC ratio\n4. **Cephalosporin generations**:\n   - 1st Gen: Gram-positive, some E. coli/Proteus\n   - 2nd Gen: Improved Gram-negative, anaerobes\n   - 3rd Gen: Broad Gram-negative, CNS penetration, less Gram-positive\n   - 4th Gen: Anti-pseudomonal, broad spectrum\n\n## Resistance Patterns (India-Specific)\n- ESBL E. coli, Klebsiella → Cephalosporin resistance\n- MRSA → All beta-lactams resistant (except 5th gen ceftaroline)\n- Salmonella typhi (typhoid) → Often ampicillin-resistant in India; use ceftriaxone\n- Pseudomonas → Needs antipseudomonal agents (piperacillin-tazobactam, carbapenems)\n\n## Beta-Lactamase Inhibitors\n- Clavulanic acid (Amoxicillin-clavulanate): Inhibits TEM and SHV beta-lactamases\n- Sulbactam: Used with ampicillin; better Acinetobacter coverage\n- Tazobactam: Used with piperacillin; best spectrum\n\n## Common Exam Questions\n**Q: Young girl with fever, meningitis. Which drug penetrates CSF best?**\nA: Penicillin G or Ceftriaxone (both excellent CNS penetration)\n\n**Q: Patient with typhoid fever in India, resistant to ampicillin. Treatment?**\nA: Ceftriaxone 2 g IV 12-hourly for 10-14 days\n\n**Q: ESBL-positive E. coli. Safe to use cephalosporin?**\nA: No; ESBL producers are resistant to 3rd-gen cephalosporins. Use carbapenem.\n\n**Q: Penicillin allergy history with rash. Can give cephalosporin?**\nA: Yes, if not anaphylactic reaction. Only 1-5% cross-reactivity with cephalosporins.\n\n## Key Differences\n| Feature | Penicillin G | Ampicillin | Cephalexin | Ceftriaxone |\n|---------|-------------|-----------|-----------|------------|\n| **Route** | IV/IM only | Oral/IV/IM | Oral | IV/IM |\n| **Gram+ coverage** | ++++ | ++++ | ++++ | +++ |\n| **Gram- coverage** | - | ++ | + | ++++ |\n| **Beta-lactamase stable** | No | No | No | Mostly |\n| **CNS penetration** | +++  | ++ | - | ++++ |\n| **Half-life** | 0.5 h | 1 h | 1 h | 8 h |\n\n## Allergy Cross-Reactivity\n- Penicillin to Cephalosporin: 1-5% (1-3% if no anaphylaxis)\n- Penicillin to Carbapenem: <1%\n- First-gen Cephalosporin to Penicillin: Higher than 3rd gen\n\n## Dosing in Renal Impairment\n- CrCl 10-50 mL/min: 50% dose\n- CrCl <10 mL/min: 25% dose or longer intervals\n- Cephalosporins affected more than penicillins",
        mnemonics: [
          { text: "TIME-DEPENDENT", explanation: "Penicillins kill bacteria based on time above MIC, not peak level" },
          { text: "ESBL = Extended-Spectrum Beta-Lactamase", explanation: "Resistant to 3rd gen cephalosporins; use carbapenem" },
          { text: "MRSA = Methicillin-Resistant S. aureus", explanation: "Resistant to all beta-lactams except 5th gen ceftaroline" }
        ],
        keyPoints: [
          "Beta-lactam ring hydrolysis = primary resistance",
          "Time above MIC determines efficacy",
          "ESBL and MRSA are major resistance patterns in India",
          "Cephalosporin generations: increasing Gram-negative coverage with loss of Gram-positive",
          "CNS penetration best with penicillin G and ceftriaxone",
          "Cross-reactivity between penicillins and cephalosporins is low",
          "C. difficile risk increases with prolonged use"
        ],
        textbookRefs: [
          { book: "Katzung Basic & Clinical Pharmacology", chapter: "43", edition: "15th" },
          { book: "NEET-SS Pharmacology Review", section: "Antibiotics", edition: "2024" },
          { book: "API Textbook of Medicine", chapter: "Sepsis", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "penicillins-cephalosporins-recall",
        title: "Penicillins & Cephalosporins - Active Recall",
        estimatedMinutes: 15,
        summary: "Quick recall questions, clinical scenarios, and flashcard-style facts for spaced repetition. Test your knowledge of indications, dosing, resistance, and allergy management.",
        contentMd: "# Penicillins & Cephalosporins - Active Recall\n\n## Recall Questions\n\n**Q1: What is the mechanism of action of penicillins?**\nA: Inhibition of bacterial transpeptidase (via PBP binding), preventing peptidoglycan crosslinking, leading to cell wall lysis and bactericidal effect.\n\n**Q2: Name the primary resistance mechanism to beta-lactams.**\nA: Beta-lactamase production (enzymatic hydrolysis of beta-lactam ring). Secondary mechanisms: altered PBPs, reduced penetration, efflux pumps.\n\n**Q3: Which cephalosporin has the best CNS penetration?**\nA: Ceftriaxone (3rd generation) and Ceftazidime. Among penicillins: Penicillin G.\n\n**Q4: What is the cross-reactivity between penicillins and cephalosporins?**\nA: 1-5% (1-3% in non-anaphylactic reactions). Safe to use cephalosporins in penicillin allergy unless severe anaphylaxis.\n\n**Q5: Which drug should NOT be used empirically in India for community respiratory infections?**\nA: Ampicillin alone (high resistance rates); Amoxicillin-clavulanate or cephalosporin preferred.\n\n**Q6: What is the relationship between killing and drug concentration?**\nA: Time-dependent killing. Efficacy depends on time above MIC, not peak level. Dosing: continuous infusion or frequent doses optimal.\n\n**Q7: MRSA sepsis in India. First-line antibiotic?**\nA: NOT penicillin/cephalosporin. Use vancomycin, linezolid, or daptomycin.\n\n**Q8: Typhoid fever resistant to ampicillin. Treatment dose and duration?**\nA: Ceftriaxone 2 g IV 12-hourly × 10-14 days.\n\n**Q9: Which beta-lactamase inhibitor is used with ampicillin?**\nA: Sulbactam (1:1 ratio). Clavulanic acid is used with amoxicillin.\n\n**Q10: When do you need to adjust penicillin/cephalosporin dosing in renal failure?**\nA: Cephalosporins: CrCl <30 mL/min. Penicillins: Variable; penicillin G at CrCl <10 mL/min.\n\n## Clinical Scenarios\n\n**Scenario 1**: 28-year-old with acute bacterial meningitis (CSF glucose low, protein high, PMN pleocytosis). What is your first antibiotic choice?\n**Answer**: Ceftriaxone 2 g IV 12-hourly ± vancomycin (until S. pneumoniae susceptibility known). Penicillin G alternative if cephalosporin unavailable.\n\n**Scenario 2**: H. pylori eradication in India. Which penicillin-based regimen?\n**Answer**: Amoxicillin 1 g + clarithromycin 500 mg + PPI (triple therapy) for 10-14 days.\n\n**Scenario 3**: Skin abscess culture shows MRSA. Patient has severe penicillin allergy (anaphylaxis 10 years ago). Management?\n**Answer**: Avoid beta-lactams entirely. Use vancomycin, linezolid, or doxycycline based on susceptibility. Do NOT use cephalosporins due to anaphylaxis history.\n\n**Scenario 4**: 65-year-old with CrCl 15 mL/min presenting with aspiration pneumonia. Amoxicillin-clavulanate prescribed. Dose adjustment needed?\n**Answer**: Yes. Amoxicillin half-life prolonged. Reduce to 250 mg-500 mg 12-hourly (or 250 mg 8-hourly). Monitor renal function.\n\n## Flashcard Facts\n- **Penicillin G half-life**: 0.5 hours (frequent dosing required)\n- **Ceftriaxone half-life**: 8 hours (12-hourly dosing adequate)\n- **BLIP drugs**: Clavulanic acid, Sulbactam, Tazobactam\n- **Beta-lactamase producers**: Staph aureus, H. influenzae, Gram-negatives (Enterobacteriaceae)\n- **ESBL definition**: Susceptible to cephalosporins in vitro but resistant in vivo (phenotypic resistance)\n- **Allergy incidence**: 1% population (self-reported), 0.04% confirmed IgE (anaphylaxis rare)\n\n## Important Indian Context Facts\n1. **Ampicillin-resistant S. typhi**: Common since 1980s-90s in India; use ceftriaxone\n2. **Fluoroquinolone-resistant S. typhi**: Increasingly common; ceftriaxone now preferred\n3. **ESBL prevalence**: ~40-50% E. coli in Indian hospitals; cephalosporins not reliable\n4. **Generic availability**: Amoxicillin, Ampicillin, Cephalexin widely available, inexpensive\n5. **Combination products**: Amoxicillin-clavulanate (Augmentin) common in practice\n\n## Common Errors to Avoid\n- Assuming cephalosporin is safe in all penicillin allergies (risk in anaphylaxis)\n- Using ampicillin for typhoid without culture susceptibility\n- Not accounting for time-dependent killing in dosing intervals\n- Ignoring renal impairment when dosing beta-lactams\n- Assuming ESBL= cephalosporin resistance (correct) but forgetting carbapenem is still effective",
        mnemonics: [
          { text: "TPNI", explanation: "Time-dependent, PBP inhibitor, No allergy cross-reactivity (usual), Inexpensive" },
          { text: "MRSA = Vancomycin", explanation: "Remember: all beta-lactams fail in MRSA" },
          { text: "India + Typhoid = Ceftriaxone", explanation: "Ampicillin resistance common; use 3rd gen" }
        ],
        keyPoints: [
          "Always ask about true anaphylaxis vs. rash before using cephalosporins",
          "Time above MIC drives efficacy; use frequent dosing or infusion",
          "Renal dosing essential for cephalosporins and some penicillins",
          "ESBL and MRSA require non-beta-lactam alternatives",
          "Indian context: High resistance rates; choose 2nd/3rd-gen agents empirically",
          "C. difficile risk: Especially with prolonged/broad-spectrum agents",
          "Always pair with beta-lactamase inhibitor for resistant organisms"
        ],
        textbookRefs: [
          { book: "Katzung Basic & Clinical Pharmacology", chapter: "43", edition: "15th" },
          { book: "API Textbook of Medicine", chapter: "Infectious Diseases", edition: "11th" },
          { book: "NEET-SS Review Notes", section: "Pharmacology", edition: "2024" }
        ]
      }
    ]
  },
  {
    topicCode: "PH-MOD-05-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "aminoglycosides-macrolides-quinolones-foundation",
        title: "Aminoglycosides, Macrolides & Quinolones - Foundation",
        estimatedMinutes: 25,
        summary: "Three major antibiotic classes: aminoglycosides (protein synthesis inhibition), macrolides (similar mechanism), and fluoroquinolones (DNA gyrase inhibition). Structure, classification, and basic properties.",
        contentMd: "# Aminoglycosides, Macrolides & Quinolones - Foundation\n\n## Aminoglycosides Overview\n**Definition**: Amino-sugar-containing antibiotics that inhibit bacterial protein synthesis.\n\n**Classification**:\n- **First-generation**: Streptomycin (rarely used now)\n- **Second-generation**: Gentamicin, Tobramycin, Netilmicin\n- **Third-generation**: Amikacin\n\n**Structure**: Amino-modified glucose molecules linked to aminocyclitol ring.\n\n## Macrolides Overview\n**Definition**: Macrocyclic lactone antibiotics; also inhibit protein synthesis.\n\n**Classification**:\n- **Older macrolides**: Erythromycin, Oleandomycin\n- **Newer macrolides**: Azithromycin, Clarithromycin\n- **Ketolides**: Telithromycin (5-membered ring)\n\n**Structure**: 12-16-membered macrocyclic lactone ring with attached sugar moieties.\n\n## Fluoroquinolones Overview\n**Definition**: Synthetic antibiotics targeting bacterial DNA gyrase and topoisomerase IV.\n\n**Classification**:\n- **First-generation**: Nalidixic acid, Oxolinic acid (historical)\n- **Second-generation**: Ciprofloxacin, Norfloxacin, Ofloxacin\n- **Third-generation**: Levofloxacin, Moxifloxacin (enhanced Gram-positive coverage)\n- **Fourth-generation**: Gemifloxacin\n\n**Structure**: Quinolone core (bicyclic) with fluorine at position 6.\n\n## Spectrum Comparison\n| Antibiotic Class | Gram-Positive | Gram-Negative | Anaerobes | Atypicals |\n|------------------|--------------|--------------|-----------|----------|\n| **Aminoglycosides** | - | +++ | - | - |\n| **Macrolides** | ++ | + | + | +++ |\n| **Fluoroquinolones** | ++ | +++ | - | ++ |\n\n## Aminoglycoside Properties\n- Concentration-dependent killing\n- Require aerobic conditions for uptake\n- Excellent lung and bone penetration\n- Poor CNS penetration\n- Nephrotoxic and ototoxic\n\n## Macrolide Properties\n- Time-dependent killing\n- Good intracellular penetration\n- Hepatic metabolism (drug interactions common)\n- Generally well-tolerated\n- Excellent for atypical organisms\n\n## Fluoroquinolone Properties\n- Concentration-dependent killing\n- Excellent oral bioavailability\n- Broad tissue penetration\n- CNS penetration better than aminoglycosides\n- Tendon toxicity and QT prolongation concerns",
        mnemonics: [
          { text: "AGM-FQ", explanation: "AminoGlycosides, Macrolides, FluoroQuinolones - the three classes" },
          { text: "AGE", explanation: "AminoGlycosides = Excellent for Gram-negative, Enter aerobic cells" },
          { text: "MAQ", explanation: "Macrolides = Atypicals, Quinolones = DNA targets" }
        ],
        keyPoints: [
          "Aminoglycosides: Gram-negative coverage, concentration-dependent, nephrotoxic",
          "Macrolides: Atypical coverage, hepatic interactions, good intracellular penetration",
          "Fluoroquinolones: Broad spectrum, oral/IV options, excellent tissue penetration",
          "Each class has different killing kinetics (concentration vs. time-dependent)",
          "Aminoglycosides require aerobic environment for activity",
          "Macrolides first-line for respiratory infections due to atypical coverage"
        ],
        textbookRefs: [
          { book: "Katzung Basic & Clinical Pharmacology", chapter: "44", edition: "15th" },
          { book: "Rang & Dale's Pharmacology", chapter: "51", edition: "9th" },
          { book: "Goodman & Gilman's", chapter: "56-57", edition: "13th" }
        ]
      },
      {
        layer: 2,
        slug: "aminoglycosides-macrolides-quinolones-mechanism",
        title: "Aminoglycosides, Macrolides & Quinolones - Mechanism",
        estimatedMinutes: 30,
        summary: "Molecular mechanisms: 30S ribosomal inhibition (aminoglycosides/macrolides), DNA gyrase inhibition (quinolones), post-antibiotic effect, and synergy patterns.",
        contentMd: "# Aminoglycosides, Macrolides & Quinolones - Mechanism\n\n## Aminoglycoside Mechanism\n**Primary Target**: 30S ribosomal subunit\n\n**Mechanism**:\n1. **Uptake**: Requires aerobic transport into bacterial cytoplasm\n2. **Ribosomal binding**: Binds 30S subunit, interfering with initiation complex\n3. **Misreading**: Causes misincorporation of amino acids into proteins\n4. **Frameshifting**: Creates aberrant, non-functional proteins\n5. **Result**: Bactericidal effect (death, not just inhibition)\n\n**Why Bactericidal?** Unlike tetracyclines (static), aminoglycosides cause lethal misreading of the genetic code.\n\n**Uptake Mechanism**: Phase-dependent uptake\n- **Phase I**: Ion-dependent uptake (requires aerobic respiration)\n- **Phase II**: Protein synthesis-dependent uptake (self-promoted)\n- **Phase III**: Irreversible bactericidal effect\n\n**Oxygen Dependence**: Anaerobes naturally resistant because they cannot transport aminoglycosides.\n\n## Macrolide Mechanism\n**Primary Target**: 50S ribosomal subunit (more selective than aminoglycosides)\n\n**Mechanism**:\n1. **Binding**: Reversibly binds 50S subunit\n2. **Inhibition**: Prevents translocation of peptides\n3. **Result**: Protein synthesis inhibition (bacteriostatic, usually)\n\n**Why Time-Dependent?** Activity depends on duration of 50S binding, not concentration achieved.\n\n**Intracellular Penetration**: Excellent due to lipophilicity; especially good for intracellular pathogens (Legionella, Mycoplasma, Chlamydia).\n\n## Fluoroquinolone Mechanism\n**Primary Target**: Bacterial DNA gyrase (topoisomerase II) and topoisomerase IV\n\n**Mechanism**:\n1. **DNA gyrase inhibition**: Prevents DNA unwinding and replication\n2. **Topoisomerase IV inhibition**: Prevents DNA decatenation (separation of daughter chromosomes)\n3. **Result**: Bactericidal effect through DNA damage\n\n**Target Difference by Organism**:\n- Gram-negatives: DNA gyrase primary target\n- Gram-positives: Topoisomerase IV primary target\n- Newer quinolones: More balanced targeting\n\n**Killing Pattern**: Concentration-dependent; rapid, bactericidal.\n\n## Synergy Patterns\n**Aminoglycoside + Beta-lactam (Synergy)**:\n- Beta-lactam weakens cell wall → Enhanced aminoglycoside uptake\n- Used for: Enterococcus, Pseudomonas, Gram-negative rods\n\n**Macrolide + Beta-lactam (Additive)**:\n- Both inhibit growth/protein synthesis at different sites\n- No major synergy\n\n**Fluoroquinolone + Beta-lactam (Additive)**:\n- Different targets (DNA vs. cell wall)\n- Used for severe infections\n\n## Post-Antibiotic Effect (PAE)\n**Aminoglycosides**: Significant PAE (up to 2-8 hours) → allows once-daily dosing despite short half-life\n\n**Macrolides**: Minimal PAE\n\n**Fluoroquinolones**: Moderate PAE (1-2 hours)\n\nPAE = Continued bacterial growth inhibition after drug removal; depends on drug class and organism.\n\n## Resistance Mechanisms\n**Aminoglycosides**:\n- **Enzymatic inactivation**: Aminoglycoside-modifying enzymes (AAC, ANT, APH) most common\n- **Ribosomal methylation**: 16S rRNA methylation (rare, but high-level resistance)\n- **Reduced uptake**: Loss of aerobic transport\n\n**Macrolides**:\n- **Ribosomal methylation**: MLSB resistance (macrolide-lincosamide-streptogramin B)\n- **Efflux pumps**: Active drug removal\n- **Enzymatic inactivation**: Less common than in aminoglycosides\n\n**Fluoroquinolones**:\n- **Target mutation**: DNA gyrase and topoisomerase mutations (most common)\n- **Efflux pumps**: Qnr proteins reduce drug accumulation\n- **Reduced permeability**: Less common",
        mnemonics: [
          { text: "30S = AminoGlycosides + MACrolides = STATic(50S)", explanation: "Ribosomal targets differ between classes" },
          { text: "GAIT", explanation: "Gyrase And topoisomerase IV Inhibition = quinolones Topoisomerase" },
          { text: "AG = Aerobic + Bactericidal", explanation: "Aminoglycosides need oxygen and kill bacteria" },
          { text: "MAC = Membrane (50S) + Atypical Coverage", explanation: "Macrolides bind 50S and cover atypicals" }
        ],
        keyPoints: [
          "Aminoglycosides: 30S ribosomal inhibition, bactericidal, oxygen-dependent uptake",
          "Macrolides: 50S ribosomal inhibition, bacteriostatic, excellent intracellular penetration",
          "Fluoroquinolones: DNA gyrase/topoisomerase inhibition, bactericidal, concentration-dependent",
          "Aminoglycoside + beta-lactam shows synergy due to enhanced cell wall penetration",
          "Aminoglycosides have significant post-antibiotic effect (allows once-daily dosing)",
          "Anaerobes resistant to aminoglycosides due to lack of aerobic transport",
          "MLSB resistance confers cross-resistance to all three drug classes"
        ],
        textbookRefs: [
          { book: "Katzung Basic & Clinical Pharmacology", chapter: "44", edition: "15th" },
          { book: "Lehninger Principles of Biochemistry", chapter: "28", edition: "7th" },
          { book: "Goodman & Gilman's", chapter: "56-57", edition: "13th" }
        ]
      },
      {
        layer: 3,
        slug: "aminoglycosides-macrolides-quinolones-clinical",
        title: "Aminoglycosides, Macrolides & Quinolones - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical use in India: indications, dosing, adverse effects, monitoring, and drug interactions for each class in Indian healthcare practice.",
        contentMd: "# Aminoglycosides, Macrolides & Quinolones - Clinical Use\n\n## Gentamicin (Aminoglycoside)\n**Indications**: Gram-negative sepsis, Pseudomonas, Staphylococcal infections (often synergy), Enterococcal endocarditis (with penicillin)\n**Dosing**: \n- **Traditional**: 5-7 mg/kg/day divided into 3 doses (q8h)\n- **Once-daily (high-dose)**: 5-7 mg/kg once daily (optimal due to PAE)\n**Monitoring**: \n- Serum levels (peak 5-10 µg/mL, trough <2 µg/mL)\n- Baseline: BUN, creatinine, audiometry\n- Weekly: Renal function, repeat levels if abnormality\n**Toxicity Risk**: Nephrotoxicity 5-10%, ototoxicity 1-3%\n**Renal Adjustment**: CrCl <50 mL/min—adjust interval or dose\n\n## Tobramycin\n**Indications**: Similar to gentamicin; preferred for Pseudomonas (better lung penetration)\n**Dosing**: 5 mg/kg once daily IV/IM\n**Special Use**: Cystic fibrosis (aerosolized tobramycin available)\n**Monitoring**: Similar to gentamicin\n\n## Amikacin (Aminoglycoside)\n**Indications**: Resistant Gram-negative organisms (resistant to gentamicin/tobramycin), MDR-TB (as adjunct)\n**Dosing**: 15 mg/kg once daily IV/IM\n**Advantage**: Resistant to many aminoglycoside-modifying enzymes\n**Monitoring**: Serum levels (peak 15-30 µg/mL, trough <5 µg/mL)\n**Use in India**: Growing prevalence for MDR organisms\n\n## Azithromycin (Macrolide)\n**Indications**: \n- Community-acquired pneumonia (CAP)\n- H. pylori eradication (triple/quadruple therapy)\n- Respiratory tract infections\n- STIs (Chlamydia, Gonorrhea susceptible)\n- Atypical organisms (Legionella, Mycoplasma)\n**Dosing**: 500 mg day 1, then 250 mg daily × 4 days (common regimen); or 500 mg daily × 5 days\n**Advantage**: Excellent tissue penetration, intracellular accumulation, long half-life (allows shorter duration)\n**Drug Interactions**: CYP3A4 inhibition (significant with statins, warfarin)\n**QT Prolongation**: Risk, especially with other QT-prolonging drugs\n\n## Clarithromycin (Macrolide)\n**Indications**: H. pylori, MAC prophylaxis (HIV), respiratory infections\n**Dosing**: 500 mg 12-hourly\n**H. pylori Regimens**: Clarithromycin 500 mg + Amoxicillin 1 g + PPI × 10-14 days (India standard)\n**Metabolism**: Active metabolite (14-OH clarithromycin); hepatic CYP3A4 metabolism\n\n## Ciprofloxacin (Fluoroquinolone)\n**Indications**: \n- UTIs (Gram-negative bacilli)\n- Enteric infections (Shigella, Salmonella, E. coli)\n- Typhoid (increasingly less preferred due to resistance)\n- Pseudomonas respiratory infections\n- Empiric traveler's diarrhea (common in India)\n**Dosing**: 500 mg 12-hourly (oral); 400 mg 12-hourly IV\n**Advantage**: Excellent oral bioavailability; compliance better than IV agents\n**CNS Penetration**: Good (better than aminoglycosides)\n**Drug Interactions**: Antacids, dairy products (reduce absorption); warfarin interaction\n\n## Levofloxacin (Fluoroquinolone)\n**Indications**: CAP, respiratory infections, similar spectrum to ciprofloxacin but better Gram-positive coverage\n**Dosing**: 500 mg-750 mg daily (IV or oral)\n**Advantage**: Once-daily dosing; better S. pneumoniae coverage\n**Use in India**: Increasingly preferred for respiratory infections\n\n## Moxifloxacin (Fluoroquinolone)\n**Indications**: CAP (especially with atypicals), abdominal infections, skin infections\n**Dosing**: 400 mg daily (IV or oral)\n**Advantage**: Best Gram-positive and atypical coverage among quinolones; anaerobe coverage\n**Use in India**: Good choice for hospital-acquired infections\n**Drug Interactions**: Similar to other quinolones\n\n## Adverse Effects Summary\n**Aminoglycosides**:\n- **Nephrotoxicity**: Dose-related; reversible if detected early; risk with prolonged use, advanced age, dehydration\n- **Ototoxicity**: Irreversible (permanent hearing loss); more common with tobramycin; dosing interval critical\n- **Neuromuscular Blockade**: Rare but serious; myasthenia gravis, anesthesia risks\n\n**Macrolides**:\n- **GI Effects**: Nausea, vomiting, diarrhea (especially clarithromycin)\n- **QT Prolongation**: Significant with azithromycin/clarithromycin\n- **Hepatotoxicity**: Rare; cholestasis possible\n- **Drug Interactions**: Major CYP3A4 inhibition\n\n**Fluoroquinolones**:\n- **Tendon Rupture**: Especially Achilles; risk with age, corticosteroid use, strenuous activity\n- **Qart Prolongation**: Less than macrolides but present (especially moxifloxacin)\n- **CNS Effects**: Dizziness, headache, insomnia; rare seizures\n- **Photosensitivity**: Phototoxic; avoid sun exposure\n- **Peripheral Neuropathy**: Rare but documented\n- **Cartilage Toxicity**: Avoid in children (FDA warning, though increasing use in pediatrics)\n\n## Drug Interactions\n**Aminoglycosides + NSAIDs**: Increased nephrotoxicity\n**Aminoglycosides + Loop Diuretics**: Increased ototoxicity\n**Macrolides + Statins**: Increased myopathy risk\n**Fluoroquinolones + Warfarin**: Enhanced anticoagulation\n**Fluoroquinolones + Antacids/Dairy**: Reduced absorption (take 2 hours apart)\n\n## Special Populations\n**Pregnancy**:\n- Aminoglycosides: Category B (with caution)\n- Macrolides: Category A/B (generally safe; avoid clarithromycin if possible)\n- Fluoroquinolones: Category C (avoid if possible; emerging data on safety)\n\n**Renal Impairment**:\n- Aminoglycosides: Significant adjustment needed\n- Macrolides: Minimal adjustment\n- Fluoroquinolones: Minimal to moderate adjustment\n\n**Liver Disease**:\n- Aminoglycosides: No change needed\n- Macrolides: Reduce dose or avoid\n- Fluoroquinolones: Minimal adjustment",
        mnemonics: [
          { text: "AGM = Aerobic Gram-negative, once-daily dosing, Monitor levels", explanation: "Key points for aminoglycosides" },
          { text: "MAC = Macrolides = Atypicals, Clarithromycin, H. pylori", explanation: "Common clinical uses" },
          { text: "FQ-TEN", explanation: "FluoroQuinolones = TENdon rupture risk, especially Achilles" },
          { text: "AGM = Nephro + Ototoxicity", explanation: "Monitor serum creatinine and hearing in elderly" }
        ],
        keyPoints: [
          "Gentamicin once-daily dosing (high-dose) preferred over traditional divided dosing",
          "Always monitor aminoglycoside levels and renal function",
          "Azithromycin preferred for atypical coverage; avoid QT-prolonging drugs",
          "H. pylori: Clarithromycin or azithromycin + amoxicillin + PPI (India standard)",
          "Ciprofloxacin excellent for UTIs and enteric infections in India",
          "Fluoroquinolone resistance increasing in S. typhi (typhoid); reassess use",
          "Tendon rupture risk with fluoroquinolones; elderly and corticosteroid use increase risk",
          "Aminoglycosides contraindicated in anaerobic infections",
          "Hepatic metabolism of macrolides; significant drug interactions",
          "Once-daily aminoglycoside dosing exploits post-antibiotic effect"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "195", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Infectious Diseases", edition: "11th" },
          { book: "Goodman & Gilman's", chapter: "56-57", edition: "13th" }
        ]
      },
      {
        layer: 4,
        slug: "aminoglycosides-macrolides-quinolones-exam",
        title: "Aminoglycosides, Macrolides & Quinolones - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield exam facts: killing kinetics, resistance patterns, major clinical uses, adverse effects, India-specific scenarios, and common NEET-SS patterns.",
        contentMd: "# Aminoglycosides, Macrolides & Quinolones - Exam Prep\n\n## High-Yield Killing Kinetics\n| Class | Killing Pattern | Optimal Dosing | Examples |\n|-------|-----------------|---------------|-----------|\n| **Aminoglycosides** | Concentration-dependent | Once-daily (high-dose) | Gentamicin, Amikacin |\n| **Macrolides** | Time-dependent | Divided doses or extended interval | Azithromycin, Clarithromycin |\n| **Fluoroquinolones** | Concentration-dependent | Once/twice daily; high doses better | Ciprofloxacin, Levofloxacin |\n\n## Key Resistance Patterns (India-Specific)\n**Aminoglycosides**:\n- High-level resistance: Gram-negative rods (Enterobacteriaceae, Pseudomonas)\n- Aminoglycoside-modifying enzymes most common\n- Amikacin resistant to some enzymes (reserve drug)\n\n**Macrolides**:\n- MLSB resistance (macrolide-lincosamide-streptogramin B) in Streptococcus\n- H. pylori resistance increasing in India (affects triple therapy success)\n\n**Fluoroquinolones**:\n- S. typhi: Fluoroquinolone-resistant (FQRS) prevalence 40-50% in India\n- E. coli: 30-50% resistance in community infections\n- Gram-positive: Growing resistance in Staphylococcus\n\n## Exam Question Patterns\n\n**Q: 45-year-old man with fever, WBC 15K, suspected UTI. Which is single-agent therapy of choice?**\nA: Ciprofloxacin 500 mg 12-hourly (Gram-negative coverage, oral bioavailability, easy compliance)\n\n**Q: 32-year-old female with CAP, presumed atypicals (Mycoplasma). First-line?**\nA: Azithromycin 500 mg day 1, then 250 mg daily × 4 days OR Levofloxacin 500 mg once daily\n\n**Q: H. pylori eradication in India. Standard regimen?**\nA: Clarithromycin 500 mg + Amoxicillin 1 g + PPI (omeprazole 20 mg) × 10-14 days (triple therapy)\n\n**Q: Pseudomonas aeruginosa in cystic fibrosis. Which aminoglycoside preferred?**\nA: Tobramycin (better lung penetration; aerosolized form available)\n\n**Q: 65-year-old with pyelonephritis, CrCl 30 mL/min. Gentamicin dosing?**\nA: Adjust interval to q24-48h OR reduce dose; use extended interval dosing due to poor renal clearance\n\n**Q: Patient developing irreversible hearing loss on aminoglycoside. Mechanism?**\nA: Ototoxicity from aminoglycoside accumulation in cochlear endolymph; irreversible damage to hair cells\n\n**Q: Typhoid fever in India; fluoroquinolone-resistant strain. Preferred agent?**\nA: Ceftriaxone (because fluoroquinolone resistance widespread) OR azithromycin if susceptible\n\n## Common Adverse Effect Associations\n**Aminoglycosides**:\n- Nephrotoxicity: Occurs in 5-10%; reversible if detected early\n- Ototoxicity: Irreversible; higher with tobramycin than gentamicin\n- Risk factors: Prolonged therapy, advanced age, renal impairment, dehydration, concurrent loop diuretics\n\n**Macrolides**:\n- QT prolongation: Azithromycin > Clarithromycin > Erythromycin\n- Contraindicated with: Antiarrhythmics, other QT-prolonging drugs, electrolyte abnormalities\n- GI upset common; diarrhea with extended-spectrum coverage\n\n**Fluoroquinolones**:\n- Tendon rupture: Achilles most common; 3-4 cases per 100,000 prescriptions\n- Risk factors: Age >60, corticosteroid use, strenuous activity\n- CNS: Dizziness, headache (more common than seizures)\n- Phototoxicity: Especially older quinolones\n\n## India-Specific High-Yield Facts\n1. **Typhoid resistance pattern**: CIP-resistant S. typhi common; use ceftriaxone, not fluoroquinolone\n2. **MDR organisms**: Increasing prevalence; amikacin or carbapenems for resistant Gram-negatives\n3. **H. pylori**: Clarithromycin resistance increasing; triple or quadruple therapy\n4. **CAP empiric**: Levofloxacin or moxifloxacin + amoxicillin-clavulanate for atypical coverage\n5. **Gentamicin monitoring**: Essential in India (high baseline renal dysfunction, malnutrition)\n\n## Synergy and Combinations\n**Aminoglycoside + Beta-lactam (SYNERGISTIC)**:\n- Used for Enterococcus, Pseudomonas, Gram-negative rods in endocarditis\n- Mechanism: Beta-lactam disrupts cell wall, enhancing aminoglycoside penetration\n\n**Fluoroquinolone + Beta-lactam (ADDITIVE)**:\n- Used for resistant organisms; no major synergy\n- Used for Pseudomonas (piperacillin-tazobactam + ciprofloxacin)\n\n## Dosing in Special Conditions\n**Renal Impairment**:\n- **Aminoglycosides**: CrCl <50 mL/min—use extended interval (q24-48h) OR reduce dose\n- **Macrolides**: Minimal adjustment\n- **Fluoroquinolones**: CrCl <30 mL/min—reduce dose or extend interval\n\n**Hepatic Impairment**:\n- **Aminoglycosides**: No change\n- **Macrolides**: Reduce dose or avoid (hepatic metabolism)\n- **Fluoroquinolones**: Minimal change\n\n## Cross-Resistance Patterns\n**MLSB Resistance**: Confers cross-resistance to macrolides, linezolid, and chloramphenicol\n**ESBL Producers**: Resistant to 3rd-gen cephalosporins; aminoglycosides may work as adjunct but not monotherapy",
        mnemonics: [
          { text: "AGM = Once-daily, Level monitoring, Nephro-ototoxicity", explanation: "Remember AG dosing strategy and toxicity surveillance" },
          { text: "MAC-QT", explanation: "Macrolides prolongQT; avoid with other QT drugs" },
          { text: "FQ-TEN-PHOTO", explanation: "FluoroQuinolones cause TENdon rupture and PHOTOsensitivity" },
          { text: "India + CAP = Levo/Moxi + Amox-Clav", explanation: "Atypical coverage essential" },
          { text: "India + Typhoid = NOT Ciprofloxacin", explanation: "FQ-resistant; use cephalosporin" }
        ],
        keyPoints: [
          "Concentration-dependent (AG, FQ) vs. time-dependent (MAC) killing drives dosing strategy",
          "Once-daily aminoglycoside dosing is standard (post-antibiotic effect)",
          "MLSB resistance is inducible or constitutive; affects all three drug classes",
          "Fluoroquinolone resistance in S. typhi renders ciprofloxacin unreliable in India",
          "Azithromycin preferred for atypicals; macrolide resistance increasing for H. pylori",
          "Aminoglycoside ototoxicity is irreversible; monitor with baseline and serial audiometry",
          "Tendon rupture risk increases with age, corticosteroids, and strenuous activity",
          "H. pylori triple therapy: Clarithromycin common; quadruple therapy if resistant"
        ],
        textbookRefs: [
          { book: "Katzung Basic & Clinical Pharmacology", chapter: "44", edition: "15th" },
          { book: "NEET-SS Pharmacology Review", section: "Antibiotics", edition: "2024" },
          { book: "API Textbook of Medicine", chapter: "Infectious Diseases", edition: "11th" }
        ]
      },
      {
        layer: 5,
        slug: "aminoglycosides-macrolides-quinolones-recall",
        title: "Aminoglycosides, Macrolides & Quinolones - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard-style quick recall, clinical scenarios, and spaced repetition questions to test knowledge of mechanism, dosing, resistance, and Indian clinical practice.",
        contentMd: "# Aminoglycosides, Macrolides & Quinolones - Active Recall\n\n## Recall Questions\n\n**Q1: What is the mechanism of aminoglycoside action?**\nA: 30S ribosomal subunit binding → misreading of genetic code → synthesis of nonfunctional proteins → bactericidal effect.\n\n**Q2: Why are aminoglycosides ineffective against anaerobes?**\nA: Aminoglycosides require aerobic transport into bacterial cells. Anaerobes lack aerobic electron transport chains; hence no drug uptake.\n\n**Q3: What is post-antibiotic effect (PAE)?**\nA: Continued bacterial growth inhibition after drug removal. Aminoglycosides have significant PAE (2-8 hours), allowing once-daily dosing.\n\n**Q4: How do macrolides inhibit protein synthesis?**\nA: Bind 50S ribosomal subunit reversibly → inhibit peptide translocation → bacteriostatic effect (growth inhibition, not killing).\n\n**Q5: Mechanism of fluoroquinolone action?**\nA: Inhibit bacterial DNA gyrase (topoisomerase II) and topoisomerase IV → prevent DNA unwinding and replication → bactericidal effect.\n\n**Q6: Gram-negatives vs. Gram-positives: Which topoisomerase is primary target for quinolones?**\nA: Gram-negatives: DNA gyrase. Gram-positives: Topoisomerase IV.\n\n**Q7: Why is once-daily aminoglycoside dosing preferred over traditional divided dosing?**\nA: Exploits post-antibiotic effect and concentration-dependent killing. Higher peaks achieve better bactericidal effect.\n\n**Q8: Name the three major aminoglycoside-modifying enzyme categories.**\nA: AAC (aminoglycoside acetyltransferase), ANT (adenylyltransferase), APH (phosphotransferase).\n\n**Q9: What is MLSB resistance? Which organisms have it?**\nA: Macrolide-Lincosamide-Streptogramin B resistance via 23S rRNA methylation. Streptococcus pneumoniae and Group A Strep commonly have this.\n\n**Q10: Why is ciprofloxacin less reliable for typhoid in India?**\nA: Fluoroquinolone-resistant S. typhi (FQ-RS) prevalence 40-50% in India due to widespread use and plasmid-mediated resistance.\n\n## Clinical Scenarios\n\n**Scenario 1**: 55-year-old male with Pseudomonas aeruginosa pneumonia (hospital-acquired). Which aminoglycoside and dosing regimen?\n**Answer**: Tobramycin 5 mg/kg IV once daily (better lung penetration than gentamicin). Alternative: Gentamicin 5-7 mg/kg once daily. Ensure serum level monitoring and baseline hearing assessment.\n\n**Scenario 2**: H. pylori-positive patient in India. What is the standard triple therapy regimen and duration?\n**Answer**: Clarithromycin 500 mg + Amoxicillin 1 g + PPI (omeprazole 20 mg or pantoprazole 40 mg) twice daily × 10-14 days. Success rate 85-90% if susceptible.\n\n**Scenario 3**: 28-year-old female with community-acquired pneumonia. Suspected Mycoplasma. First-line therapy?\n**Answer**: Azithromycin 500 mg day 1, then 250 mg daily × 4 days. Alternative: Levofloxacin 500 mg daily × 5 days.\n\n**Scenario 4**: 72-year-old with UTI, CrCl 25 mL/min. Ciprofloxacin prescribed. Dosing adjustment needed?\n**Answer**: Yes. CrCl 25 mL/min—reduce to 250-500 mg 12-hourly (vs. standard 500 mg 12-hourly) OR 500 mg daily if less severe.\n\n**Scenario 5**: Patient on tobramycin for 3 weeks develops high-frequency hearing loss (vertigo, tinnitus). Assessment?\n**Answer**: Probable ototoxicity. STOP tobramycin immediately; irreversible damage likely. Baseline and serial audiometry should have been done. Risk factors: prolonged use, high cumulative dose, advanced age.\n\n**Scenario 6**: H. pylori resistant to clarithromycin. Next step?\n**Answer**: Switch to quadruple therapy: PPI + Bismuth subsalicylate + Tetracycline 500 mg + Metronidazole 400-500 mg, all 4 times daily × 10-14 days. Or: Levofloxacin-based salvage therapy.\n\n## Flashcard Facts\n\n**Aminoglycoside Facts**:\n- Half-life: 2-3 hours (rapid renal excretion)\n- Peak levels (gentamicin): 5-10 µg/mL; trough: <2 µg/mL\n- PAE: 2-8 hours (significant)\n- Nephrotoxicity: 5-10% incidence; reversible if early\n- Ototoxicity: 1-3% incidence; IRREVERSIBLE\n- CNS penetration: Poor (does NOT cross BBB well)\n- Activity: Aerobic Gram-negatives ONLY (inactive in anaerobes)\n\n**Macrolide Facts**:\n- Half-life (azithromycin): 68 hours (long); allows short course\n- Metabolism: Hepatic CYP3A4 (major drug interactions)\n- MLSB resistance: Inducible or constitutive\n- Intracellular levels: 10-100 times higher than serum\n- Killing: Time-dependent (bacteriostatic)\n- Activity: Gram-positives, atypicals, anaerobes (macrolides only)\n- GI effects: Common; associated with C. difficile risk\n\n**Fluoroquinolone Facts**:\n- Half-life: 3-12 hours (depending on agent)\n- Metabolism: Minimal hepatic (renal excretion predominant)\n- Bioavailability: Excellent oral (>90%)\n- CNS penetration: Good (better than aminoglycosides)\n- Killing: Concentration-dependent\n- QT prolongation: Moxifloxacin > Levofloxacin > Ciprofloxacin\n- Tendon rupture: 3-4 per 100,000 prescriptions; Achilles most common\n- Photosensitivity: Older quinolones > newer (still present)\n\n## Important India-Specific Recall\n1. **S. typhi resistance**: FQ-resistant, ESBL, MDR common; use ceftriaxone, azithromycin, or carbapenems\n2. **E. coli (community UTIs)**: 30-50% fluoroquinolone resistance; consider nitrofurantoin instead\n3. **H. pylori**: 15-20% clarithromycin resistance in India; quadruple therapy increasingly used\n4. **CAP**: Atypicals common; levofloxacin/moxifloxacin or macrolide essential\n5. **Gentamicin monitoring**: Essential in India; high baseline renal dysfunction and malnutrition\n6. **MDR Gram-negatives**: Increasing prevalence; reserve amikacin and carbapenems\n\n## Common Errors to Avoid\n- Assuming all aminoglycosides have same spectrum (tobramycin best for Pseudomonas)\n- Forgetting MLSB resistance confers cross-resistance across macrolides, linezolid, and clindamycin\n- Not adjusting fluoroquinolone dose in renal impairment\n- Using ciprofloxacin for typhoid in India (FQ-resistant)\n- Prescribing macrolides without considering QT prolongation risk\n- Not monitoring aminoglycoside levels and renal function\n- Continuing aminoglycoside after ototoxicity symptoms appear (damage becomes irreversible)\n- Forgetting macrolides are time-dependent (prolonged intervals worsen efficacy)\n\n## Quick Reference: Choosing an Agent\n**CAP (Community-acquired Pneumonia)**:\n- Atypicals suspected → Azithromycin or Levofloxacin\n- Gram-positive predominant → Levofloxacin or Moxifloxacin\n- Pseudomonas → Ciprofloxacin or antipseudomonal beta-lactam\n\n**Gram-Negative Sepsis**:\n- No Pseudomonas → Ciprofloxacin (oral) or IV cephalosporin\n- Pseudomonas → Tobramycin or gentamicin + antipseudomonal beta-lactam\n\n**Enteric Infections (Traveler's Diarrhea, Typhoid)**:\n- Salmonella (community) → Fluoroquinolone if susceptible (uncommon in India)\n- S. typhi (India) → Ceftriaxone (NOT fluoroquinolone)\n\n**H. pylori**:\n- First-line → Clarithromycin + Amoxicillin + PPI\n- Resistant → Quadruple therapy or levofloxacin-based salvage",
        mnemonics: [
          { text: "AGM = Aerobic + G-negative + Monitoring", explanation: "Aminoglycosides for Gram-negatives; need drug level monitoring" },
          { text: "MAC = Mycoplasma/Atypicals + 50S + CYP3A4", explanation: "Macrolides cover atypicals; hepatic metabolism" },
          { text: "FQ = Fluoroquinolones = DNA target + TENdon", explanation: "Quinolones inhibit DNA gyrase; watch for tendon rupture" },
          { text: "INDIA TYPHOID = Ceftriaxone NOT Cipro", explanation: "FQ-resistant S. typhi prevalent" }
        ],
        keyPoints: [
          "Aminoglycosides: Concentration-dependent, aerobic Gram-negatives, ototoxic (irreversible), PAE allows once-daily dosing",
          "Macrolides: Time-dependent, atypical coverage, hepatic metabolism (CYP3A4), QT prolongation risk",
          "Fluoroquinolones: Concentration-dependent, broad spectrum, good oral bioavailability, tendon rupture risk, photosensitivity",
          "MLSB resistance affects all three classes; ESBL and fluoroquinolone resistance common in India",
          "H. pylori therapy: Clarithromycin-based first-line; quadruple if resistant",
          "Typhoid in India: Use ceftriaxone, NOT fluoroquinolone (FQ-resistant prevalent)",
          "Aminoglycoside monitoring essential: serum levels, renal function, hearing assessment",
          "Synergy: Aminoglycoside + beta-lactam (Enterococcus, Pseudomonas)",
          "CAP: Atypical coverage essential; levofloxacin, moxifloxacin, or macrolide"
        ],
        textbookRefs: [
          { book: "Katzung Basic & Clinical Pharmacology", chapter: "44", edition: "15th" },
          { book: "API Textbook of Medicine", chapter: "Infectious Diseases", edition: "11th" },
          { book: "NEET-SS Review Notes", section: "Pharmacology", edition: "2024" }
        ]
      }
    ]
  }
];
