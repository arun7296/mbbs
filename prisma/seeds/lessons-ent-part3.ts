import type { TopicLessons } from "./content-loader";

// EN-MOD-03 Topics 2-4, EN-MOD-04 Topics 1-3, EN-MOD-05 Topics 1-3
export const entPart3Lessons: TopicLessons[] = [
  {
    topicCode: "EN-MOD-03-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "pharyngitis-ptabs-layer-1-foundation",
        title: "Pharyngitis & Peritonsillar Abscess - Foundation",
        estimatedMinutes: 20,
        summary: "Classification, etiology, and pathogenesis of pharyngitis and peritonsillar abscess with anatomical basis.",
        contentMd: `# Pharyngitis and Peritonsillar Abscess - Foundation\n\n## Pharyngitis Definition\nInflammation of the pharyngeal mucosa, most common infection in ENT practice\n\n### Types by Etiology\n1. **Acute Pharyngitis** (viral 60-90%)\n   - Viral: Rhinovirus (most common), EBV, CMV, HSV, Adenovirus, Influenza, Parainfluenza\n   - Bacterial: Group A Streptococcus (GAS, 20%), Staph aureus, Streptococcus pneumoniae\n   - Fungal: Candida albicans (immunocompromised, prolonged antibiotics)\n   - Other: Non-infectious (irritant, allergic, reflux)\n\n2. **Chronic Pharyngitis**\n   - Recurrent infections\n   - Smoking, alcohol, air pollution\n   - Postnasal drip, reflux\n\n## Peritonsillar Abscess (Quinsy)\n- **Definition**: Localized collection of pus between tonsillar capsule and pharyngeal constrictor muscle\n- **Incidence**: Rare (<1% of acute tonsillitis cases)\n- **Peak Age**: 15-35 years\n- **Bilateral**: 5-10% of cases\n\n### Anatomical Basis\n- **Location**: Supratonsillar (lateral and superior pole)\n- **Boundary**: Between tonsillar capsule medially and pharyngeal constrictor laterally\n- **Formation**: Secondary to acute tonsillitis with progression to abscess formation\n- **Organisms**: GAS (most common), Staph, Streptococcus pneumoniae, anaerobes\n\n## Risk Factors\n- Inadequate antibiotic treatment of acute tonsillitis\n- Immunosuppression\n- Severe initial tonsillitis\n- Young adults (15-35 years)\n- Males > Females (2:1)`,
        mnemonics: [
          { text: "Pharyngitis agents - SCREAMING", explanation: "Streptococcus, CMV, Rhinovirus, EBV, Adenovirus, Mycoplasma, Influenza, Neisseria, Gonorrhea" },
          { text: "Quinsy location - SUPRATONSILLAR", explanation: "Superior and lateral pole of tonsil, between capsule and pharyngeal constrictor" },
          { text: "Abscess risk - IAMB", explanation: "Inadequate Antibiotics, young Adult Males, severe Bacterial tonsillitis" }
        ],
        keyPoints: [
          "Pharyngitis: inflammation of pharyngeal mucosa; viral > bacterial (60-90% viral)",
          "Peritonsillar abscess (quinsy): pus collection between tonsillar capsule and pharyngeal constrictor",
          "Incidence of quinsy: <1% of acute tonsillitis, peak age 15-35 years",
          "Location: supratonsillar (lateral/superior pole of tonsil)",
          "Most common organisms: GAS, Staph aureus, anaerobes"
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 34: Pharyngitis", edition: "7th" },
          { book: "PL Dhingra Textbook of ENT", chapter: "Chapter 35: Tonsillitis and Peritonsillar Abscess", edition: "7th" }
        ]
      },
      {
        layer: 2,
        slug: "pharyngitis-ptabs-layer-2-mechanism",
        title: "Pharyngitis & Peritonsillar Abscess - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathophysiology of pharyngitis and abscess formation with immune response mechanisms.",
        contentMd: `# Pharyngitis and Peritonsillar Abscess - Pathophysiology\n\n## Pathophysiology of Acute Pharyngitis\n\n### Viral Pharyngitis\n1. **Viral Entry**: Direct inoculation of respiratory epithelium\n2. **Local Replication**: Within mucosal epithelial cells\n3. **Immune Response**:\n   - IgA, IgM, IgG antibodies\n   - Interferon (IFN-α, IFN-γ) production\n   - T-cell mediated immunity\n4. **Mucosal Inflammation**: Edema, hyperemia, exudate formation\n5. **Resolution**: Usually self-limited (3-7 days)\n\n### Bacterial Pharyngitis (GAS)\n1. **Virulence Factors**:\n   - M protein (antiphagocytic)\n   - Hyaluronic acid capsule (mimics host antigen)\n   - Streptolysins (O and S): hemolysis and tissue damage\n   - Streptococcal pyrogenic exotoxins (SPE)\n2. **Immune Response**:\n   - IgG antibodies against M protein\n   - Complement activation\n   - Opsonization and phagocytosis\n3. **Tissue Damage**: Direct toxin effect and immune-mediated injury\n\n## Peritonsillar Abscess Formation\n\n### Sequential Development\n1. **Stage 1: Acute Tonsillitis**\n   - Infiltration of tonsillar parenchyma\n   - Neutrophil accumulation\n   - Abscess formation within tonsillar crypts\n\n2. **Stage 2: Capsular Breakthrough**\n   - Abscess rupture through tonsillar capsule\n   - Pus collection between capsule and pharyngeal constrictor\n   - Loculation occurs due to surgical anatomy\n\n3. **Stage 3: Abscess Maturation**\n   - Formation of capsule around pus collection\n   - Complete localization\n   - Potential complications if untreated\n\n### Anatomical Factors Promoting Abscess\n- **Pharyngeal Constrictor**: Acts as barrier, creating potential space\n- **Tonsillar Capsule**: Limits pus expansion medially\n- **Limited Vascularity**: Supratonsillar region has reduced blood supply\n- **Lymphatic Drainage**: Impaired during inflammation\n\n## Microbial Progression\n- Initial: Single organism (usually GAS)\n- Abscess stage: Mixed flora (aerobes + anaerobes)\n- Anaerobes: Prevotella, Fusobacterium, Peptostreptococcus\n\n## Host Factors in Progression\n- **Immunoglobulin Deficiency**: IgA, IgG deficiency increases risk\n- **Complement Deficiency**: Impaired opsonization\n- **Functional Asplenia**: Increased GAS infection severity\n- **Young Age Paradox**: Better immune response but more severe disease`,
        mnemonics: [
          { text: "GAS virulence - M.S.H.", explanation: "M protein (antiphagocytic), Streptolysins (hemolysis), Hyaluronic capsule (immune mimicry)" },
          { text: "Abscess stages - PAIN", explanation: "Pus forms, Abscess breakthrough, Isolation (capsule), Necrosis/localization" },
          { text: "Viral response - I.I.T.", explanation: "Interferon, IgA (mucosal), T-cells (CD8 cytotoxic)" }
        ],
        keyPoints: [
          "Viral pharyngitis: direct mucosal infection with interferon and IgA response; self-limited",
          "GAS virulence: M protein prevents phagocytosis, streptolysins cause tissue damage",
          "Abscess formation: tonsillitis → capsular breakthrough → pus between capsule and constrictor",
          "Anatomical confinement: pharyngeal constrictor and tonsillar capsule create potential space",
          "Microbial progression: initial GAS infection → mixed aerobic/anaerobic flora in abscess"
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 34: Pathophysiology of Pharyngitis", edition: "7th" },
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 8: Acute and Chronic Inflammation", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "pharyngitis-ptabs-layer-3-clinical",
        title: "Pharyngitis & Peritonsillar Abscess - Clinical",
        estimatedMinutes: 30,
        summary: "Clinical presentation, diagnosis, and management of pharyngitis and peritonsillar abscess.",
        contentMd: `# Pharyngitis and Peritonsillar Abscess - Clinical\n\n## Clinical Presentation of Acute Pharyngitis\n\n### Viral Pharyngitis\n- **Prodrome**: Rhinorrhea, cough (indicates viral origin)\n- **Onset**: Gradual (1-2 days)\n- **Sore Throat**: Mild to moderate, bilateral\n- **Fever**: Usually <38.5°C\n- **Associated Symptoms**: Cough, nasal congestion, malaise\n- **Duration**: 3-7 days\n- **Examination**: Erythematous pharynx, mild edema, exudate (may be present)\n\n### Bacterial Pharyngitis (GAS)\n- **Onset**: Acute (12-24 hours)\n- **Sore Throat**: Severe, bilateral\n- **Fever**: Often >38.5°C, abrupt onset\n- **Associated Symptoms**: Headache, myalgia, no cough (differentiates from viral)\n- **Examination**:\n  - Bright red pharynx\n  - Yellowish exudate on tonsils\n  - Cervical lymphadenopathy (tender, enlarged)\n  - Petechial rash on soft palate (highly specific for GAS)\n\n### Candida Pharyngitis\n- **Risk**: Immunocompromised patients, prolonged antibiotics\n- **Findings**: White plaques on pharynx/tongue, painful swallowing\n- **Systemic Symptoms**: Usually absent\n\n## Clinical Presentation of Peritonsillar Abscess\n\n### Classic Triad\n1. **Severe Unilateral Throat Pain** (hallmark sign)\n   - Much worse than typical tonsillitis\n   - Radiates to ear (otalgia)\n   - Difficulty swallowing (dysphagia)\n\n2. **Difficulty Opening Mouth (Trismus)**\n   - Involvement of medial pterygoid muscle\n   - Progressive worsening\n   - Can progress to complete inability to open mouth\n\n3. **Hot Potato Voice**\n   - Muffled speech\n   - As if holding hot potato in mouth\n   - Due to soft palate displacement\n\n### Associated Symptoms\n- **Fever**: Usually high (>39°C)\n- **Malaise, Headache**: Marked\n- **Odynophagia**: Severe, may be unable to swallow saliva\n- **Halitosis**: Bad breath due to pus\n\n### Physical Examination Findings\n- **Soft Palate Displacement**:\n  - Pushed medially and downward on affected side\n  - Creates asymmetrical appearance\n  - May obstruct airway partially\n\n- **Intraoral Swelling**: Bulging in lateral oropharynx\n- **Tonsil Position**: Pushed medially (away from lateral pharyngeal wall)\n- **Cervical Lymphadenopathy**: Ipsilateral\n- **Edema**: Extending beyond tonsil\n\n## Diagnosis\n\n### Acute Pharyngitis\n- **Clinical Assessment**: History and examination\n- **Rapid Strep Test**:\n  - GAS-specific rapid diagnostic test\n  - Sensitivity 90%, Specificity 95%\n  - Positive if GAS features present\n\n- **Throat Culture**: Gold standard (24-48 hour delay)\n- **Centor Score**: Predicts GAS (fever, exudate, adenopathy, no cough)\n\n### Peritonsillar Abscess\n- **Clinical Diagnosis**: Often sufficient\n- **Imaging**:\n  - **Intraoral Ultrasound**: Quick, no radiation, high sensitivity\n  - **CT Scan**: Defines extent, complications, assists drainage planning\n  - **MRI**: Limited in acute setting due to time/access\n- **Needle Aspiration**: Diagnostic if imaging uncertain\n\n## Management\n\n### Acute Pharyngitis\n- **Supportive Care**:\n  - Analgesics (paracetamol, ibuprofen)\n  - Throat lozenges\n  - Warm salt water gargles\n  - Hydration\n\n- **Viral**: Symptomatic, no antibiotic\n- **Bacterial (GAS)**:\n  - Penicillin V 500 mg QID × 10 days (first-line)\n  - Amoxicillin 500 mg TID × 10 days (alternative)\n  - Azithromycin 500 mg day 1, then 250 mg × 4 days (if penicillin allergy)\n\n### Peritonsillar Abscess\n1. **Immediate Management**:\n   - IV antibiotics: Co-amoxiclav 1.2 g IV TDS\n   - Alternative: Clindamycin 600 mg IV QID\n   - Analgesics, antipyretics\n   - Hydration (IV if unable to swallow)\n   - Airway assessment\n\n2. **Drainage** (essential):\n   - **Intraoral Drainage**: Needle aspiration or scalpel drainage\n   - **Technique**: Under local anesthesia, aspirate with 18G needle\n   - **Immediate Relief**: Pain improves within hours\n   - Culture pus for organism identification\n\n3. **Post-Drainage**:\n   - Continue IV antibiotics 3-5 days, then oral 7-10 days total\n   - Oral hygiene\n   - Follow-up assessment\n   - Elective tonsillectomy: Indicated 4-6 weeks after resolution (prevents recurrence)\n\n## Complications\n\n### Untreated Pharyngitis/Abscess\n- **Local Spread**:\n  - Deep neck space infections (parapharyngeal, retropharyngeal)\n  - Mediastinitis\n  - Lemierre's syndrome (suppurative thrombophlebitis of internal jugular vein)\n\n- **Systemic**:\n  - Septicemia\n  - Post-streptococcal: Rheumatic fever, glomerulonephritis (if untreated GAS)\n\n- **Airway**:\n  - Obstruction (life-threatening)\n  - Requires airway intervention\n\n### Post-Abscess\n- Recurrence: 5-18% if tonsils not removed\n- Scar formation: Limited if properly treated`,
        mnemonics: [
          { text: "GAS vs Viral - NCDC", explanation: "No cough (GAS), petechial rash (Candida too), exudate, Centor score >3 → likely GAS" },
          { text: "Quinsy signs - HPS", explanation: "Hot potato voice, Pain (severe unilateral), Soft palate bulging" },
          { text: "LEMIERRE mnemonic - LEMIERRE", explanation: "Lateral pharyngeal space, Extension (mediastinal), Mediastinitis, Internal jugular vein, Extension to lungs, Rampant anaerobes, Rarely seen but deadly, Emergency" },
          { text: "Drainage indication - UAT", explanation: "Unable to swallow, Abscess confirmed, Trismus severe" }
        ],
        keyPoints: [
          "Viral pharyngitis: gradual onset, cough present, fever <38.5°C, self-limited in 3-7 days",
          "GAS pharyngitis: acute onset, no cough, fever >38.5°C, petechiae on soft palate, needs antibiotics",
          "Peritonsillar abscess: unilateral severe pain, trismus, hot potato voice, soft palate bulging medially",
          "Diagnosis: clinical + imaging (ultrasound/CT) for abscess; rapid strep test for GAS pharyngitis",
          "Management: abscess requires drainage (needle aspiration), IV antibiotics, followed by elective tonsillectomy"
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 34-35: Pharyngitis and Quinsy", edition: "7th" },
          { book: "Cummings Otolaryngology Head & Neck Surgery", chapter: "Chapter 11: Pharyngitis", edition: "7th" }
        ]
      },
      {
        layer: 4,
        slug: "pharyngitis-ptabs-layer-4-exam",
        title: "Pharyngitis & Peritonsillar Abscess - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield exam facts, differentials, and NEXT-pattern MCQ tips.",
        contentMd: `# Pharyngitis and Peritonsillar Abscess - Exam Prep\n\n## High-Yield Facts\n\n### Pharyngitis\n- **Most Common Infection**: ENT practice (acute pharyngitis)\n- **Viral vs Bacterial**: Viral 60-90% (rhinovirus #1); Bacterial 10-40% (GAS #1)\n- **Centor Score >3**: 50% probability of GAS; ≥2 features warrant testing/treatment\n- **Penicillin**: Gold standard for GAS (10 days required for rheumatic fever prevention)\n- **No Cough**: Distinguishes bacterial from viral (cough suggests viral)\n\n### Peritonsillar Abscess\n- **Rare**: <1% of acute tonsillitis, but 5-18% recurrence if tonsils not removed\n- **Location**: Supratonsillar (lateral/superior pole)\n- **Peak Age**: 15-35 years (young adults)\n- **Classic Triad**: Unilateral severe pain + trismus + hot potato voice\n- **Soft Palate Sign**: Pushed medially and downward (pathognomonic)\n- **Drainage**: Essential (needle aspiration); immediate pain relief confirms diagnosis\n- **Tonsillectomy**: Elective, 4-6 weeks post-abscess (prevents recurrence)\n\n## Key Facts\nManagement: abscess requires drainage + IV antibiotics + elective tonsillectomy`,
        mnemonics: [
          { text: "Centor Criteria - FAP", explanation: "Fever >38.5°C, Absence of cough, Pharyngeal adenopathy; score ≥3 → test/treat GAS" },
          { text: "Red flags - LEA", explanation: "Lemierre's (JV thrombosis), Epiglottitis (stridor), Airway obstruction (emergency)" },
          { text: "Abscess = Ultrasound", explanation: "Quick, accurate, guides drainage planning" }
        ],
        keyPoints: [
          "Pharyngitis: viral 60-90% (rhinovirus most common), GAS 20-30%, Centor ≥3 indicates GAS",
          "GAS pharyngitis: Penicillin V 10 days (not shorter) to prevent rheumatic fever",
          "Peritonsillar abscess: <1% incidence, but 5-18% recurrence without elective tonsillectomy",
          "Classic abscess signs: unilateral pain, trismus, hot potato voice, soft palate bulging medially",
          "Abscess management: drainage first (needle aspiration), then antibiotics; tonsyllectomy at 4-6 weeks"
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 34-35: Quinsy and Complications", edition: "7th" }
        ]
      },
      {
        layer: 5,
        slug: "pharyngitis-ptabs-layer-5-active-recall",
        title: "Pharyngitis & Peritonsillar Abscess - Active Recall",
        estimatedMinutes: 20,
        summary: "Flashcard Q&A and mnemonic review for pharyngitis and peritonsillar abscess.",
        contentMd: `# Pharyngitis and Peritonsillar Abscess - Active Recall\n\n## Flashcard Q&A\n\n### Q1: What is the most common cause of acute pharyngitis?\n**A**: Viral etiology (rhinovirus #1 viral cause). Viral pharyngitis accounts for 60-90% of cases; bacterial (GAS) is only 20-30%.\n\n### Q2: Define peritonsillar abscess (quinsy) and its location.\n**A**: Localized pus collection between tonsillar capsule (medial) and pharyngeal constrictor muscle (lateral). Location: supratonsillar (lateral and superior pole of tonsil).\n\n### Q3: What is the classic triad of peritonsillar abscess?\n**A**: (1) Severe unilateral throat pain (radiating to ear), (2) Trismus (difficulty opening mouth), (3) "Hot potato voice" (muffled speech).\n\n### Q4: How do you differentiate bacterial (GAS) from viral pharyngitis?\n**A**: Absence of cough, fever >38.5°C, petechiae on soft palate, exudate, cervical lymphadenopathy → GAS. Centor score ≥3 → likely GAS (50% probability).\n\n### Q5: What is the gold standard antibiotic for GAS pharyngitis and why 10 days?\n**A**: Penicillin V 500 mg QID × 10 days. Duration of 10 days is essential for eradication of rheumatic fever risk; shorter courses (5-7 days) are inadequate.\n\n### Q6: What are the classic physical findings of peritonsillar abscess?\n**A**: Soft palate pushed medially and downward, intraoral bulging in lateral oropharynx, asymmetrical pharynx, ipsilateral cervical lymphadenopathy.\n\n### Q7: How is peritonsillar abscess diagnosed?\n**A**: Clinical diagnosis (triad + findings) + imaging confirmation. Intraoral ultrasound (preferred: no radiation, rapid, sensitive) or CT scan (defines extent).\n\n### Q8: What is the immediate management of peritonsillar abscess?\n**A**: Needle aspiration drainage (18G needle, local anesthesia) + IV antibiotics (Co-amoxiclav 1.2 g TDS or Clindamycin 600 mg QID).\n\n### Q9: Why is tonsillectomy indicated after peritonsillar abscess?\n**A**: Recurrence rate is 5-18% if tonsils retained, but <5% if tonsillectomy performed. Elective tonsillectomy at 4-6 weeks post-abscess prevents recurrent abscesses.\n\n### Q10: What are the main complications of untreated pharyngitis/peritonsillar abscess?\n**A**: Local: deep neck space infections, mediastinitis, Lemierre's syndrome (JV thrombophlebitis), airway obstruction. Systemic: septicemia, rheumatic fever, acute glomerulonephritis.\n\n### Q11: What is Lemierre's syndrome and how does it relate to pharyngitis?\n**A**: Suppurative thrombophlebitis of the internal jugular vein. Rare but serious complication of inadequately treated pharyngitis/tonsillitis. Mortality 5-15%.\n\n### Q12: What organisms are found in peritonsillar abscess?\n**A**: Initial: Group A Streptococcus (most common), Staph aureus. Later: mixed flora including anaerobes (Prevotella, Fusobacterium, Peptostreptococcus).\n\n### Q13: What is the Centor Score and its clinical significance?\n**A**: Scores presence of: Fever >38.5°C, Absence of cough, Pharyngeal exudate, Tender cervical nodes. Score ≥3 indicates 50% probability of GAS.\n\n### Q14: What is the risk of rheumatic fever from untreated GAS pharyngitis?\n**A**: Untreated GAS pharyngitis: 3% risk of acute rheumatic fever (ARF). With treatment: risk drops to <0.1%.\n\n### Q15: Describe the pathophysiology of abscess formation from acute tonsillitis.\n**A**: Tonsillitis → neutrophil infiltration and abscess formation within tonsillar crypts → breakthrough through tonsillar capsule → pus collection between capsule and pharyngeal constrictor.\n\n## Key Review Points\n\n1. **Viral vs GAS**: Cough presence, fever height, exudate character\n2. **Centor Score**: Simple bedside tool; ≥3 → test/treat\n3. **Abscess Location**: Supratonsillar (not inferior or deeper)\n4. **Soft Palate Sign**: Pushed MEDIALLY (toward opposite side)\n5. **Drainage**: Immediate pain relief confirms diagnosis\n6. **Antibiotics**: 10 days for GAS (no shorter courses)\n7. **Tonsillectomy**: Prevent 5-18% recurrence\n8. **Red Flags**: Airway obstruction, Lemierre's, mediastinitis`,
        mnemonics: [
          { text: "Flashcard Review - VBT", explanation: "Viral (60-90%), Bacterial GAS (20-30%), Treatment depends on etiology" },
          { text: "Abscess Recall - DUALS", explanation: "Drainage needed immediately, Unable to swallow/open mouth, Abscess between capsule & constrictor" }
        ],
        keyPoints: [
          "Viral pharyngitis: rhinovirus most common, 60-90% of cases, self-limited 3-7 days",
          "GAS pharyngitis: Centor ≥3, Penicillin V 10 days mandatory for rheumatic fever prevention",
          "Peritonsillar abscess: supratonsillar location, unilateral pain/trismus/hot potato voice",
          "Diagnosis: intraoral ultrasound (fastest), CT for complications, clinical findings highly suggestive",
          "Management: needle aspiration drainage + IV antibiotics, then elective tonsillectomy at 4-6 weeks"
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 34-35: Pharyngitis and Peritonsillar Abscess", edition: "7th" }
        ]
      }
    ]
  }
];

export default entPart3Lessons;
