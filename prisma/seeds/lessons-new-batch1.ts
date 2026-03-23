import type { TopicLessons } from "./content-loader";

// Medical content seed data for 20 MBBS topics with 5-layer teaching model
// Generated for Indian NMC CBME standards

export const newBatch1Lessons: TopicLessons[] = [
  // 1. AS-MOD-02-TOP-02: Nerve Blocks
  {
    topicCode: "AS-MOD-02-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "nerve-blocks-foundation",
        title: "Nerve Blocks - Foundation",
        estimatedMinutes: 20,
        summary: "Fundamentals of nerve block anesthesia, types, and basic anatomy",
        contentMd: "# Nerve Blocks - Foundation\n\n## Definition\nNerve blocks are regional anesthetic techniques that involve injection of local anesthetic agents around nerves to achieve reversible loss of sensation in the area supplied by those nerves.\n\n## Classification\n\n### By Location\n- **Central blocks**: epidural, spinal\n- **Peripheral blocks**: peripheral nerve blocks, field blocks, infiltration\n\n### By Number of Nerves\n- **Single nerve blocks**: median, ulnar, radial\n- **Plexus blocks**: brachial plexus, lumbosacral plexus\n\n## Advantages\n- Avoids general anesthesia risks\n- Better postoperative analgesia\n- Faster recovery\n- Reduced systemic drug effects\n- Suitable for patients with contraindications to GA\n\n## Anatomy Basics\nNerves traverse distinct pathways with bony landmarks, fascial planes, and vascular relations that guide safe block placement.\n\n## Prerequisites\n- Knowledge of surface anatomy\n- Understanding of vascular anatomy\n- Skill in aseptic technique\n- Competency with ultrasound if used",
        mnemonics: [
          { text: "SAFER", explanation: "S=Site preparation, A=Anatomy knowledge, F=Fix dose calculation, E=Equipment check, R=Right patient confirmation" },
          { text: "ASEPTIC", explanation: "A=Always prepare skin, S=Sterile gloves, E=Equipment sterile, P=Patient consent, T=Technique practice, I=Infiltrate slowly, C=Check for symptoms" }
        ],
        keyPoints: [
          "Nerve blocks are reversible regional anesthesia techniques",
          "Can be central or peripheral",
          "Require thorough anatomical knowledge",
          "Safer than general anesthesia for many patients",
          "Excellent postoperative analgesia"
        ],
        textbookRefs: [
          { book: "Textbook of Anaesthesia (Sharma)", chapter: "Ch 15", edition: "4th" },
          { book: "Bailey and Love's Short Practice of Surgery", chapter: "Ch 10", edition: "27th" },
          { book: "Guyton and Hall Physiology", chapter: "Ch 63", edition: "13th" }
        ]
      },
      {
        layer: 2,
        slug: "nerve-blocks-mechanism",
        title: "Nerve Blocks - Mechanism",
        estimatedMinutes: 30,
        summary: "Pharmacology of local anesthetics and mechanism of nerve blockade",
        contentMd: "# Nerve Blocks - Mechanism\n\n## Local Anesthetic Mechanism\nLocal anesthetics work by blocking sodium channels in nerve cell membranes, preventing action potential generation and nerve impulse conduction.\n\n## Order of Block (Hilton's Law)\n1. Vasodilation (first blocked)\n2. Pain and temperature (A-delta, C fibers)\n3. Touch and pressure (A-beta fibers)\n4. Motor function (A-alpha fibers) - last blocked\n5. Recovery occurs in reverse order\n\n## Common Local Anesthetics\n\n| Drug | Onset (min) | Duration (min) | pKa | Potency |\n|------|-----------|---------------|-----|----------|\n| Lignocaine | 5-10 | 30-120 | 7.9 | 1x |\n| Bupivacaine | 10-20 | 180-420 | 8.1 | 4x |\n| Prilocaine | 3-5 | 60-180 | 7.9 | 1x |\n| Ropivacaine | 10-20 | 180-300 | 8.1 | 3x |\n\n## Factors Affecting Block Quality\n- Local anesthetic concentration and volume\n- pH of solution (higher pH = faster onset)\n- Vascularity of block site\n- Timing and technique of injection\n- Patient age and body composition\n- Addition of adjuvants (epinephrine, dexamethasone)\n\n## Spread of Local Anesthetic\nFollows fascial planes and tissue planes. Understanding compartmental anatomy is crucial for successful block placement.",
        mnemonics: [
          { text: "SONS", explanation: "S=Sodium channels blocked, O=Order of loss (vasodilation→pain→touch→motor), N=Nerves depolarization prevented, S=Sensory before motor" },
          { text: "LIPID", explanation: "L=Lignocaine (fast onset), I=Infiltration (shallow), P=Potency varies, I=Infusion (can add epi), D=Duration depends on drug" }
        ],
        keyPoints: [
          "Local anesthetics block sodium channels",
          "Onset depends on pKa, lipid solubility, protein binding",
          "Hilton's law describes order of nerve fiber blockade",
          "Bupivacaine more potent and longer-acting than lignocaine",
          "Adjuvants enhance block duration and quality"
        ],
        textbookRefs: [
          { book: "Textbook of Anaesthesia (Sharma)", chapter: "Ch 6-7", edition: "4th" },
          { book: "Miller's Anesthesia", chapter: "Ch 17", edition: "8th" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 383", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "nerve-blocks-clinical",
        title: "Nerve Blocks - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical applications and nerve block procedures in Indian surgical practice",
        contentMd: "# Nerve Blocks - Clinical\n\n## Common Peripheral Nerve Blocks in India\n\n### Upper Limb Blocks\n- **Brachial plexus blocks**: Supraclavicular, infraclavicular, axillary approaches\n  - Best for: Hand and forearm surgery\n  - Volume: 30-50 mL of 0.5% bupivacaine\n- **Individual nerve blocks**: Median, ulnar, radial, musculocutaneous\n  - For hand trauma, fracture reduction\n  - Easier to learn, safer than plexus blocks\n\n### Lower Limb Blocks\n- **Femoral block**: For femur fracture analgesia, quadriceps surgery\n- **Sciatic block**: Ankle and foot surgery (tibial + peroneal)\n- **3-in-1 block**: Femoral, obturator, lateral femoral cutaneous\n\n## Clinical Indications\n- Acute pain management (trauma, fractures)\n- Surgical anesthesia (daycare procedures)\n- Chronic pain management\n- Postoperative analgesia\n- In patients with contraindications to GA (ASA E status)\n\n## Indian Context Considerations\n- High prevalence of traumatic injuries (RTA, assault)\n- Resource-limited settings prefer simple blocks\n- Ultrasound availability increasing in metro centers\n- Landmark technique still widely used\n\n## Complications Prevention\n- Nerve injury (careful technique, avoid intraneural injection)\n- Vascular puncture (knowledge of anatomy, aspiration)\n- Local anesthetic toxicity (safe dosing, max 7mg/kg with epi)\n- Infection (strict asepsis)\n- Hematoma (gentle technique, compress puncture site)",
        mnemonics: [
          { text: "TRAUMA-BLOCK", explanation: "T=Trauma management, R=Regional anesthesia, A=Avoid GA, U=Upper/lower limb, M=Monitor patient, A=Analgesia excellent, B=Before surgery, L=Landmark technique, O=Or ultrasound, C=Complications rare, K=Keep needle perpendicular" },
          { text: "SAFE-DOSE", explanation: "S=7mg/kg simple, A=Add epi→10mg/kg, F=For bupiva, E=Epi added, D=Decrease toxicity, O=Onset varies, S=Safety paramount, E=Exceed not allowed" }
        ],
        keyPoints: [
          "Brachial plexus blocks for upper limb surgery",
          "Femoral and sciatic blocks for lower limb",
          "Excellent for trauma analgesia in India",
          "Max safe dose: 7mg/kg without epi, 10mg/kg with epi",
          "Ultrasound improves success and safety"
        ],
        textbookRefs: [
          { book: "Essentials of Anaesthesia (Gupta & Singh)", chapter: "Ch 8", edition: "3rd" },
          { book: "Anatomy for Anaesthetists (Ellis & Feldman)", chapter: "Ch 12", edition: "9th" },
          { book: "Trauma Surgery (Grifols & Gonzalez-Hadad)", chapter: "Ch 5", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "nerve-blocks-exam",
        title: "Nerve Blocks - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield examination points and comparison tables",
        contentMd: "# Nerve Blocks - Exam Prep\n\n## NEXT/NEET PG High-Yield Points\n\n### Local Anesthetic Properties Comparison\n| Property | Lignocaine | Bupivacaine | Prilocaine | Ropivacaine |\n|----------|-----------|------------|-----------|-------------|\n| pKa | 7.9 | 8.1 | 7.9 | 8.1 |\n| Protein Binding | 70% | 95% | 55% | 94% |\n| Vascularity | Yes | Yes | Yes | No |\n| Max Dose Plain | 4.5 mg/kg | 2.5 mg/kg | 6 mg/kg | 3 mg/kg |\n| Max Dose + Epi | 7 mg/kg | 3 mg/kg | 8 mg/kg | 4 mg/kg |\n| Metabolites | MEGX→GX | Pipecolyl↑ | o-toluidine↓ | Safe |\n\n### Exam Patterns\n- CNS toxicity: Lignocaine > Bupivacaine (but Bupiva more cardiotoxic)\n- Pulp vitality testing: Lignocaine 100%, Bupivacaine <100%\n- Onset: Prilocaine < Lignocaine < Bupivacaine\n- Safety in liver disease: Prilocaine < Bupivacaine < Ropivacaine\n\n### Contraindications\n- Allergy to local anesthetic or preservatives\n- Infection at injection site\n- Severe coagulopathy\n- Patient refusal\n- Bupivacaine in digital blocks (vasoconstriction risk)\n\n## Common NEET PG Questions\n- Safest LA for elderly: Prilocaine or Ropivacaine (no metabolite issues)\n- Fastest onset: Prilocaine\n- Longest duration: Bupivacaine\n- Best for toxicity: Ropivacaine (cardiac safe)\n- Digital block drug: Lignocaine + epinephrine (NOT Bupiva)",
        mnemonics: [
          { text: "LAT-CHART", explanation: "L=Local anesthetic type, A=Agents comparison, T=Toxicity profile, C=Cardiac effects, H=Half-life duration, A=Allergic risk, R=Route matters, T=Tolerance variable" },
          { text: "pKa-LOWER-FASTER", explanation: "pKa lower = faster onset (more unionized form), Ligno pKa 7.9 = faster than Bupi 8.1" }
        ],
        keyPoints: [
          "Bupivacaine: high protein binding, long duration, cardiotoxic",
          "Prilocaine: safest metabolites, fast onset",
          "Ropivacaine: cardiac safe, medium duration",
          "Epi contraindicated in digits, ears, nose, penis",
          "Max safe doses essential for exam"
        ],
        textbookRefs: [
          { book: "Textbook of Anaesthesia (Sharma)", chapter: "Ch 6", edition: "4th" },
          { book: "Guyton & Hall Physiology", chapter: "Ch 63", edition: "13th" },
          { book: "NEET PG Previous Year Questions", chapter: "Anaesthesia", edition: "2020-2023" }
        ]
      },
      {
        layer: 5,
        slug: "nerve-blocks-recall",
        title: "Nerve Blocks - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for active recall and memory consolidation",
        contentMd: "# Nerve Blocks - Active Recall\n\n## Question 1\nQ: Which local anesthetic has fastest onset and why?\nA: Prilocaine. It has pKa 7.9 (lowest among common agents), resulting in higher proportion of unionized form at physiological pH, allowing faster nerve penetration.\n\n## Question 2\nQ: What is the order of nerve blockade according to Hilton's law?\nA: Vasodilation → Pain (A-delta, C) → Touch (A-beta) → Motor (A-alpha). Recovery occurs in reverse order.\n\n## Question 3\nQ: Maximum safe dose of bupivacaine without epinephrine and with epinephrine?\nA: Without epi: 2.5 mg/kg (max 200 mg). With epi: 3 mg/kg (max 225 mg).\n\n## Question 4\nQ: Why is bupivacaine contraindicated in digital blocks?\nA: Bupivacaine with epinephrine causes excessive vasoconstriction in digits → tissue ischemia → necrosis. Risk of permanent loss of limb.\n\n## Question 5\nQ: Name three complications of nerve blocks and prevention.\nA: 1) Nerve injury - careful technique, avoid intraneural injection. 2) Vascular puncture - anatomical knowledge, aspiration. 3) LA toxicity - safe dosing, check max dose.\n\n## Question 6\nQ: Which local anesthetic is safest in liver disease?\nA: Ropivacaine. Prilocaine metabolite o-toluidine causes methemoglobinemia. Bupivacaine accumulates. Ropivacaine metabolites are benign.\n\n## Question 7\nQ: What is the onset time of brachial plexus block?\nA: 20-30 minutes for complete block. Onset depends on local anesthetic chosen and technique used.\n\n## Question 8\nQ: Indications for nerve blocks in trauma management?\nA: Fracture reduction analgesia, wound debridement, pain control before transfer. Avoid systemic opioids in polytrauma.",
        mnemonics: [
          { text: "RECALL-QA", explanation: "Use these Q&A pairs for daily revision. Test yourself before looking at answers." },
          { text: "DANGEROUS-COMBOS", explanation: "Bupiva + digits = NO, Bupiva + epi in digits = NECROSIS, Plain LA in vascular areas = RETENTION" }
        ],
        keyPoints: [
          "Active recall questions cover all 5 layers",
          "Test yourself before checking answers",
          "Focus on safety and contraindications",
          "Remember max safe doses for exam",
          "Understand mechanism for better retention"
        ],
        textbookRefs: [
          { book: "Textbook of Anaesthesia (Sharma)", chapter: "Ch 6-15", edition: "4th" },
          { book: "NEET PG Mock Tests", chapter: "Anaesthesia Section", edition: "2024" }
        ]
      }
    ]
  },

  // 2. CM-MOD-03-TOP-02: Cancer Epidemiology
  {
    topicCode: "CM-MOD-03-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "cancer-epidemiology-foundation",
        title: "Cancer Epidemiology - Foundation",
        estimatedMinutes: 20,
        summary: "Basic cancer epidemiology concepts, definitions, and terminology",
        contentMd: "# Cancer Epidemiology - Foundation\n\n## Definition\nEpidemiology is the study of disease distribution and determinants in populations. Cancer epidemiology studies patterns of occurrence, risk factors, and preventive strategies.\n\n## Key Epidemiological Measures\n\n### Incidence\n- New cases occurring in a defined population during a specified time period\n- Incidence rate = (new cases / population at risk) × 100,000 per year\n- Reflects disease risk\n\n### Prevalence\n- All cases (new + existing) at a specific point in time\n- Snapshot of disease burden\n\n### Mortality\n- Death rate from cancer in population\n- Case fatality rate: proportion of diagnosed patients who die\n\n## Global Cancer Burden\n- 20 million cases diagnosed annually worldwide\n- 10 million cancer deaths annually\n- Most common cancers globally: Lung, breast, colorectal, prostate, stomach\n\n## Terminology\n- **Risk**: Probability of developing disease\n- **Hazard**: Instantaneous rate of disease occurrence\n- **Odds ratio**: Measure of association in case-control studies\n- **Relative risk**: Incidence in exposed vs unexposed",
        mnemonics: [
          { text: "INCIDENCE-PREVALENCE", explanation: "I=Incident (NEW cases), P=Present (ALL cases at a point)" },
          { text: "BURDEN-BIG", explanation: "B=20 million cases, U=Unequal distribution, R=Rates vary by geography, D=Deaths 10 million, E=Epidemiology needed, N=New cases tracked, B=By type varies, I=Incidence matters, G=Global increasing" }
        ],
        keyPoints: [
          "Incidence vs prevalence: new vs all cases",
          "Mortality measures death rates",
          "20 million new cases annually worldwide",
          "Top cancers: lung, breast, colorectal",
          "Risk factors vary by geography and population"
        ],
        textbookRefs: [
          { book: "Textbook of Preventive & Social Medicine (Park)", chapter: "Ch 10", edition: "25th" },
          { book: "Oxford Textbook of Oncology", chapter: "Ch 1", edition: "4th" },
          { book: "WHO Global Cancer Report", chapter: "Ch 1-2", edition: "2022" }
        ]
      },
      {
        layer: 2,
        slug: "cancer-epidemiology-mechanism",
        title: "Cancer Epidemiology - Mechanism",
        estimatedMinutes: 30,
        summary: "Carcinogenesis mechanisms, natural history, and epidemiological models",
        contentMd: "# Cancer Epidemiology - Mechanism\n\n## Multi-Step Carcinogenesis (Armitage-Doll Model)\nCancer develops through accumulation of mutations in genes controlling growth, apoptosis, DNA repair:\n1. Initiation: First mutation (oncogene activation or tumor suppressor inactivation)\n2. Promotion: Clonal expansion of initiated cells\n3. Progression: Additional mutations → increased malignancy\n4. Metastasis: Ability to invade and disseminate\n\n## Critical Genes\n- **Oncogenes** (growth promoting): RAS, MYC, HER2\n- **Tumor suppressors** (growth inhibiting): p53, Rb, BRCA1/2\n- **DNA repair genes**: MLH1, MSH2 (mismatch repair)\n\n## Natural History of Cancer\n1. Induction period: Time from exposure to initiation (years to decades)\n2. Latency period: From initiation to clinical detection\n3. Clinical phase: From detection to death or recovery\n\n## Epidemiological Models\n\n| Model | Description | Application |\n|-------|-------------|-------------|\n| Incidence model | I(t) = background + age-related | Predicting future cases |\n| Risk model | Individual risk assessment | Prevention strategies |\n| Survival model | Time from diagnosis to death | Prognosis prediction |\n\n## Risk Factors Classification\n- **Modifiable**: Tobacco, alcohol, diet, physical activity, infections, obesity\n- **Non-modifiable**: Age, sex, hereditary mutations, geography\n\n## Dose-Response Relationship\n- Linear: Small exposures cause proportional risk increase\n- Threshold: Minimum exposure needed for effect\n- Non-linear: Plateau effect at high doses",
        mnemonics: [
          { text: "INITIATE-PROMOTE-PROGRESS", explanation: "I=Initiation (first hit), P=Promotion (expansion), P=Progression (more mutations), METASTASIS=Movement out" },
          { text: "ONCOGENE-SUPPRESS", explanation: "O=Oncogenes (accelerator gas), S=Suppressors (brakes), B=Both needed for cancer" }
        ],
        keyPoints: [
          "Carcinogenesis requires multiple mutations",
          "Oncogenes promote, suppressors inhibit growth",
          "Latency period can be 10-30 years",
          "Dose-response relationships vary by carcinogen",
          "Risk factors modifiable or non-modifiable"
        ],
        textbookRefs: [
          { book: "Textbook of Preventive & Social Medicine (Park)", chapter: "Ch 10", edition: "25th" },
          { book: "Molecular Biology of the Cell (Alberts)", chapter: "Ch 25", edition: "6th" },
          { book: "Campbell Biology", chapter: "Ch 18", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "cancer-epidemiology-clinical",
        title: "Cancer Epidemiology - Clinical",
        estimatedMinutes: 20,
        summary: "Cancer epidemiology in Indian context and public health strategies",
        contentMd: "# Cancer Epidemiology - Clinical\n\n## Cancer Burden in India\n- Estimated 1.4 million new cases annually (2020 projections)\n- Rising incidence due to aging population, lifestyle changes\n- Mortality higher than developed countries (poor early detection)\n\n## Common Cancers in India\n\n### Top 5 by Incidence\n1. **Breast cancer**: 178,000 cases/year (32% of female cancers)\n2. **Cervical cancer**: 97,000 cases/year (preventable by HPV vaccine)\n3. **Oral cavity cancer**: 87,000 cases/year (tobacco, gutka)\n4. **Lung cancer**: 80,000 cases/year (smoking, pollution)\n5. **Colorectal cancer**: 45,000 cases/year (increasing trend)\n\n## Indian Risk Factors\n- **Tobacco**: Smoking, chewing, bidi, gutka → oral, lung, gastric cancers\n- **Infections**: HPV (cervical), HBV/HCV (hepatic), H. pylori (gastric)\n- **Lifestyle**: Sedentary, high-calorie diet → colorectal, breast\n- **Occupational**: Asbestos exposure → mesothelioma\n- **Environmental**: Air pollution, water contamination\n\n## Public Health Strategies (NCP India)\n1. **Prevention**: Tobacco cessation programs, HPV vaccination\n2. **Screening**: Cervical cancer screening (Pap smear, HPV testing)\n3. **Early detection**: Awareness campaigns, self-examination programs\n4. **Management**: Accessible treatment, palliative care\n5. **Research**: Cancer registries, epidemiological studies\n\n## Screening Programs in India\n- Cervical cancer screening: Recommended for 25-65 years\n- Breast cancer screening: Mammography for high-risk groups\n- Oral cancer screening: Tobacco users\n- Colorectal screening: 50+ years with risk factors",
        mnemonics: [
          { text: "INDIA-CANCERS", explanation: "I=Infections (HPV, HBV), N=No early detection, D=Diet lifestyle, I=Infections common, A=Aging increasing, C=Cervical preventable, A=Awareness needed, N=Neoplasms rising, C=Cessation programs, E=Environmental risk, R=Registries track, S=Screening needed" },
          { text: "TOBACCO-TRINITY", explanation: "T=Three forms (smoking, chewing, gutka), O=Oral cancer #1 in males, B=Billion rupees lost, A=Addiction high, C=Cancer risk 40%, C=Colorectal link, O=Overwhelming burden" }
        ],
        keyPoints: [
          "India: 1.4 million new cases annually",
          "Breast and cervical cancer: leading in females",
          "Oral cancer: leading in males (tobacco)",
          "HPV vaccination prevents cervical cancer",
          "Early screening improves outcomes significantly"
        ],
        textbookRefs: [
          { book: "National Cancer Programme India (WHO)", chapter: "Strategic Goals", edition: "2020" },
          { book: "Textbook of Preventive & Social Medicine (Park)", chapter: "Ch 10", edition: "25th" },
          { book: "Indian Council of Medical Research Cancer Registry", chapter: "Latest Report", edition: "2022" }
        ]
      },
      {
        layer: 4,
        slug: "cancer-epidemiology-exam",
        title: "Cancer Epidemiology - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points and comparison tables",
        contentMd: "# Cancer Epidemiology - Exam Prep\n\n## NEXT/NEET PG Comparisons\n\n### Incidence vs Prevalence\n| Feature | Incidence | Prevalence |\n|---------|-----------|------------|\n| Definition | NEW cases | ALL cases |\n| Time period | Specific year | Point in time |\n| Formula | New cases / at-risk population | All cases / total population |\n| Use | Assess risk | Measure burden |\n| Trend | More for acute disease | More for chronic disease |\n\n### Most Common Cancers (Global vs India)\n| Global Rank | Global | India Rank | India |\n|-------------|--------|-----------|-------|\n| 1 | Lung | 4 | Lung |\n| 2 | Breast | 1 | Breast |\n| 3 | Colorectal | 5 | Colorectal |\n| 4 | Prostate | - | Rare in males |\n| 5 | Stomach | - | Lower than global |\n\n## Carcinogenesis Key Points\n- p53 mutation: Most common in human cancers (50%)\n- BRCA1/2 mutations: Breast cancer risk 50-80% lifetime\n- Lynch syndrome: Mismatch repair defect → colorectal cancer 70-80%\n- Familial adenomatous polyposis: 100% colorectal cancer risk\n\n## Prevention Strategies\n- Primary: Avoid risk factors (tobacco, alcohol)\n- Secondary: Screening and early detection\n- Tertiary: Treatment and rehabilitation\n\n## Indian Public Health Initiatives\n- National Cancer Programme (NCP) 1982\n- National Health Mission cancer control component\n- State cancer registries\n- HPV vaccination (Girl Child Protection Scheme - some states)",
        mnemonics: [
          { text: "EXAM-MUST-KNOW", explanation: "E=Epidemiology basics, X=X-ray analogy (screening benefit), A=Armitage-Doll model, M=Mutations accumulate, M=Most common vary by country, U=Understand risk factors, S=Screening saves lives, T=Tobacco leads in India, K=Know incidence rates, N=Novel prevention, O=Outcomes improve early, W=WHO guidelines" }
        ],
        keyPoints: [
          "India: Breast #1, Oral #2 (females), Oral #1 (males)",
          "p53 mutations most common globally",
          "Screening reduces mortality 20-30%",
          "HPV vaccination 90% effective for cervical cancer",
          "Latency 10-30 years before clinical presentation"
        ],
        textbookRefs: [
          { book: "Textbook of Preventive & Social Medicine (Park)", chapter: "Ch 10", edition: "25th" },
          { book: "NEET PG Previous Questions", chapter: "Epidemiology", edition: "2020-2023" },
          { book: "WHO Global Cancer Observatory", chapter: "Country Profiles", edition: "2023" }
        ]
      },
      {
        layer: 5,
        slug: "cancer-epidemiology-recall",
        title: "Cancer Epidemiology - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for memory consolidation",
        contentMd: "# Cancer Epidemiology - Active Recall\n\n## Question 1\nQ: Define incidence and prevalence. Which is used to assess disease risk?\nA: Incidence = new cases in a period (assesses risk). Prevalence = all existing cases at a point (measures burden).\n\n## Question 2\nQ: What is the Armitage-Doll model of carcinogenesis?\nA: Multi-step model: Initiation (first mutation) → Promotion (clonal expansion) → Progression (additional mutations) → Metastasis.\n\n## Question 3\nQ: Name the most common cancer in Indian females and males.\nA: Females: Breast (178K cases/year). Males: Oral cavity (87K cases/year, tobacco-related).\n\n## Question 4\nQ: What is the HPV vaccination coverage for cervical cancer prevention in India?\nA: Limited in most states. Some states under Girl Child Protection Scheme. Coverage <10% nationally. Goal: 90% coverage to prevent cervical cancer.\n\n## Question 5\nQ: Which gene mutation is most common in human cancers?\nA: p53 (tumor suppressor gene). Mutated in ~50% of human cancers. Controls apoptosis and DNA repair.\n\n## Question 6\nQ: Explain the latency period in cancer development.\nA: Time from exposure to carcinogen until clinical detection. Typically 10-30 years. Explains why cancer is disease of aging.\n\n## Question 7\nQ: List three modifiable risk factors for cancer.\nA: 1) Tobacco (smoking, chewing). 2) Alcohol. 3) Unhealthy diet / obesity. 4) Infections (HPV, HBV). 5) Physical inactivity.\n\n## Question 8\nQ: What percentage of cancers are preventable through lifestyle modifications?\nA: 30-40% of cancers are preventable through tobacco cessation, reduced alcohol, healthy diet, physical activity, avoiding infections.",
        mnemonics: [
          { text: "RECALL-TEST", explanation: "Cover answers and try to answer each question. Test yourself daily." },
          { text: "INDIA-SPECIFIC", explanation: "Remember Indian cancer statistics differ from Western patterns." }
        ],
        keyPoints: [
          "Incidence measures new cases and risk",
          "Carcinogenesis is multi-step process",
          "India: rising cancer burden",
          "Prevention programs essential",
          "Screening saves lives"
        ],
        textbookRefs: [
          { book: "Textbook of Preventive & Social Medicine (Park)", chapter: "Ch 10", edition: "25th" }
        ]
      }
    ]
  },

  // 3. DR-MOD-01-TOP-01: Skin Structure & Lesion Morphology
  {
    topicCode: "DR-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "skin-structure-morphology-foundation",
        title: "Skin Structure & Lesion Morphology - Foundation",
        estimatedMinutes: 20,
        summary: "Anatomy of skin layers and basic morphological terminology for skin lesions",
        contentMd: "# Skin Structure & Lesion Morphology - Foundation\n\n## Skin Layers and Structure\n\n### Epidermis\n- Outermost layer, derived from ectoderm\n- Avascular, thickness 0.05-1.5 mm\n- Five layers: Stratum corneum, lucidum, granulosum, spinosum, basale\n- Contains melanocytes, Langerhans cells, keratinocytes\n\n### Dermis\n- Thick layer (1.5-4 mm), highly vascularized\n- Contains collagen and elastic fibers, fibroblasts\n- Upper (papillary) and lower (reticular) portions\n- Appendages: Hair follicles, sebaceous glands, sweat glands\n\n### Subcutaneous Tissue (Hypodermis)\n- Loose connective tissue and adipose tissue\n- Provides insulation and shock absorption\n- Contains blood vessels and nerves\n\n## Basic Lesion Terminology\n\n### Primary Lesions\n- **Macule**: Flat, <1 cm, non-palpable color change\n- **Papule**: Raised, <1 cm, firm, solid\n- **Nodule**: Raised, >1 cm, firm, deeper involvement\n- **Vesicle**: Fluid-filled, <1 cm\n- **Bullae**: Fluid-filled, >1 cm\n- **Plaque**: Raised, >1 cm, flat-topped\n- **Pustule**: Pus-filled papule\n- **Wheal**: Transient, raised, edematous (urticaria)\n\n## Morphological Arrangement\n- Linear, grouped, scattered, confluent, annular (ring-shaped)\n\n## Terminology Basics\n- Erythematous: Red\n- Edematous: Swollen\n- Excoriated: Scratched\n- Lichenified: Thickened",
        mnemonics: [
          { text: "VESICLES-BULLAE", explanation: "V=Vesicles <1cm, B=Bullae >1cm, E=Each fluid-filled, S=Size matters, B=Blisters types" },
          { text: "EPIDERMIS-DERMIS-FAT", explanation: "E=Epidermis (thin layer), D=Dermis (thick layer), F=Fat (subcutaneous)" }
        ],
        keyPoints: [
          "Epidermis: avascular, thin (0.05-1.5mm)",
          "Dermis: vascular, contains appendages",
          "Primary lesions: macule, papule, nodule, vesicle, bullae, plaque, pustule",
          "Size distinguishes lesions (e.g., <1cm vs >1cm)",
          "Arrangement describes distribution pattern"
        ],
        textbookRefs: [
          { book: "Textbook of Dermatology (Valia & Valia)", chapter: "Ch 1", edition: "4th" },
          { book: "Dermatology (Bolognia, Jorizzo, Rapini)", chapter: "Ch 1", edition: "4th" },
          { book: "Andrews' Diseases of the Skin", chapter: "Ch 1", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "skin-structure-morphology-mechanism",
        title: "Skin Structure & Lesion Morphology - Mechanism",
        estimatedMinutes: 30,
        summary: "Cellular mechanisms and pathophysiology of skin lesion formation",
        contentMd: "# Skin Structure & Lesion Morphology - Mechanism\n\n## Histological Basis of Lesion Formation\n\n### Vesicles and Bullae Formation\n- **Acantholysis**: Loss of intercellular adhesion (desmosomes) → intraepidermal separation\n- **Spongiosis**: Intercellular edema → vesicle formation (eczema)\n- **Ballooning degeneration**: Viral cytopathic effect (herpes)\n- **Subepidermal blister**: Separation at dermal-epidermal junction (bullous pemphigoid)\n\n### Papule and Nodule Formation\n- Infiltration of inflammatory cells (lymphocytes, histiocytes)\n- Increased collagen deposition\n- Edema in dermis\n- Vascular dilation and proliferation\n\n### Erythema Mechanism\n- Vasodilation of capillaries and post-capillary venules\n- Increased blood flow → red appearance\n- Temperature elevation at site\n- Release of inflammatory mediators (histamine, prostaglandins)\n\n## Melanin Production and Pigmentation\n- **Tyrosinase**: Key enzyme in melanin synthesis\n- Melanocytes: Reside in basal layer\n- Melanin transfer: To keratinocytes via dendrites\n- Hyperpigmentation: Increased melanin or increased melanocytes\n- Hypopigmentation: Decreased melanin (vitiligo) or decreased melanocytes\n\n## Epidermal Thickness Changes\n- **Acanthosis**: Thickening of epidermis (chronic eczema, psoriasis)\n- **Atrophy**: Thinning of epidermis (scleroderma, lichen sclerosus)\n- **Parakeratosis**: Retained nuclei in stratum corneum (psoriasis)\n- **Hyperkeratosis**: Thickening of stratum corneum\n\n## Vascular Changes in Skin Disease\n- **Vasculitis**: Inflammation of blood vessel wall\n- **Vasodilation**: Capillary dilation (flushing, erythema)\n- **Telangiectasia**: Permanent dilation of small vessels\n- **Neovascularization**: New vessel formation (angioma, psoriasis)",
        mnemonics: [
          { text: "VESICLE-BULLA-DIFFERENCE", explanation: "V=Vesicle intraepidermal (within upper layer), B=Bulla subepidermal (below basement), DIFF=Different location, DIFFERENT management" },
          { text: "INFLAM-PIGMENT-THICKENING", explanation: "I=Inflammatory cells infiltrate, P=Pigment moves, T=Thickness changes, MECHANISM=Understanding pathology" }
        ],
        keyPoints: [
          "Acantholysis causes intraepidermal blistering",
          "Spongiosis causes vesicles in eczema",
          "Vasodilation causes erythema",
          "Melanin controls skin color",
          "Epidermal thickness varies with disease"
        ],
        textbookRefs: [
          { book: "Textbook of Dermatology (Valia & Valia)", chapter: "Ch 2-5", edition: "4th" },
          { book: "Dermatopathology (Weedon)", chapter: "Ch 2-5", edition: "3rd" },
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "Ch 25", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "skin-structure-morphology-clinical",
        title: "Skin Structure & Lesion Morphology - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical recognition and significance of skin lesion morphology in Indian context",
        contentMd: "# Skin Structure & Lesion Morphology - Clinical\n\n## Clinical Examination Method (ABCDE)\n- **A**spect: Color, surface characteristics\n- **B**order: Sharp, blurred, raised\n- **C**ontour: Configuration (round, oval, linear, serpiginous)\n- **D**istribution: Localized or widespread\n- **E**levation: Flat or raised\n\n## Common Skin Lesions in India\n\n### Macules (Flat, Non-palpable)\n- Freckles, melasma (common in Indian women)\n- Vitiligo (depigmented macules)\n- Pityriasis versicolor (hypopigmented or hyperpigmented macules)\n- Measles rash\n\n### Papules (Raised, <1cm)\n- Acne, lichen planus, keratosis pilaris\n- Scabies (inflammatory papules + burrows)\n- Molluscum contagiosum (umbilicated papules)\n- Warts (viral papules)\n\n### Vesicles and Bullae (<1cm or >1cm)\n- Chickenpox (varicella): Grouped vesicles, polymorphic (crusts + blisters together)\n- Herpes zoster: Linear grouped vesicles in dermatomal distribution\n- Pemphigus (acantholysis): Flaccid bullae, Nikolsky positive\n- Bullous pemphigoid: Tense bullae, Nikolsky negative\n\n### Plaques (Raised, >1cm)\n- Psoriasis: Well-demarcated, erythematous, silvery scale\n- Lichen planus: Violaceous, flat-topped\n- Vitiligo: Depigmented macules/plaques (cosmetic concern)\n\n## Clinical Significance in Diagnosis\n- Lesion morphology → Differential diagnosis\n- Distribution pattern → Systemic clues\n- Associated symptoms (itch, pain, drainage)\n- Nikolsky sign: Pemphigus (positive) vs Bullous pemphigoid (negative)\n\n## Indian Context Considerations\n- High incidence of infectious dermatoses (fungal, parasitic)\n- Photodermatitis common (outdoor workers)\n- Melasma and post-inflammatory hyperpigmentation (cosmetic issues)\n- Leprosy: Hypopigmented macules with loss of sensation",
        mnemonics: [
          { text: "ABCDE-EXAM", explanation: "A=Aspect (color), B=Border (sharp/blurred), C=Contour (shape), D=Distribution (pattern), E=Elevation (flat/raised)" },
          { text: "INDIA-COMMON", explanation: "I=Infectious (fungal, parasitic), N=Nikolsky sign differential, D=Dermatitis from sun, I=Infected scabies common, A=Aesthetic concerns (hyperpigmentation)" }
        ],
        keyPoints: [
          "ABCDE method for systematic examination",
          "Nikolsky sign differentiates bullous diseases",
          "Distribution reveals systemic involvement",
          "India: high infectious dermatoses burden",
          "Morphology guides differential diagnosis"
        ],
        textbookRefs: [
          { book: "Textbook of Dermatology (Valia & Valia)", chapter: "Ch 10-30", edition: "4th" },
          { book: "Indian Dermatology: Epidemiology & Common Diseases", chapter: "Ch 1-5", edition: "Latest" },
          { book: "Dermatology (Bolognia, Jorizzo, Rapini)", chapter: "Ch 2-5", edition: "4th" }
        ]
      },
      {
        layer: 4,
        slug: "skin-structure-morphology-exam",
        title: "Skin Structure & Lesion Morphology - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield morphological features and diagnostic criteria",
        contentMd: "# Skin Structure & Lesion Morphology - Exam Prep\n\n## Lesion Size Classification\n\n| Lesion Type | Size | Examples |\n|------------|------|----------|\n| Macule | <1 cm | Freckles, vitiligo patch |\n| Patch | >1 cm | Large vitiligo, melasma |\n| Papule | <1 cm | Acne, lichen planus |\n| Nodule | >1 cm | Lipoma, melanoma |\n| Vesicle | <1 cm | Chickenpox, herpes |\n| Bullae | >1 cm | Pemphigus, bullous pemphigoid |\n\n## Diagnostic Clues from Morphology\n\n| Feature | Diagnosis |\n|---------|----------|\n| Nikolsky positive, flaccid bullae | Pemphigus |\n| Nikolsky negative, tense bullae | Bullous pemphigoid |\n| Grouped vesicles, dermatomal | Herpes zoster |\n| Polymorphic lesions (crust + vesicles) | Varicella |\n| Hypopigmented macules + anesthesia | Leprosy |\n| Depigmented patches, loss of hair | Vitiligo |\n| Silvery scale on erythematous plaque | Psoriasis |\n| Violaceous flat-topped papules | Lichen planus |\n| Umbilicated papule | Molluscum contagiosum |\n| Grouped papules with burrows | Scabies |\n\n## NEXT-Pattern NEET Questions\n- Nikolsky sign mechanism and differential\n- Acantholysis definition and lesion types\n- Difference between macule, patch, papule, nodule\n- Histology of pemphigus vs bullous pemphigoid\n- Dermal-epidermal separation vs intraepidermal\n\n## Memory Tables\n\n### Blistering Diseases\n| Disease | Level | Nikolsky | Scarring |\n|---------|-------|----------|----------|\n| Pemphigus | Intraepidermal | Positive | No |\n| Bullous pemphigoid | Subepidermal | Negative | Yes |\n| Dermatitis herpetiformis | Subepidermal | Negative | No |\n| Linear IgA disease | Subepidermal | Negative | Yes |",
        mnemonics: [
          { text: "SIZE-MATTERS", explanation: "S=Size distinguishes lesion type, I=Intraepidermal vs subepidermal, Z=Zone of involvement, E=Exam clue" },
          { text: "NIKOLSKY-POSITIVE", explanation: "N=Nikolsky positive = Pemphigus, O=Offset within epidermis, T=Tender, icky = Acantholysis" }
        ],
        keyPoints: [
          "Size defines lesion classification",
          "Nikolsky sign differentiates pemphigus from bullous pemphigoid",
          "Distribution reveals diagnosis (dermatomal = zoster)",
          "Histology confirms clinical diagnosis",
          "Associated symptoms guide differential diagnosis"
        ],
        textbookRefs: [
          { book: "Textbook of Dermatology (Valia & Valia)", chapter: "Ch 1-10", edition: "4th" },
          { book: "NEET PG Dermatology Questions", chapter: "Morphology & Classification", edition: "2020-2023" }
        ]
      },
      {
        layer: 5,
        slug: "skin-structure-morphology-recall",
        title: "Skin Structure & Lesion Morphology - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for memory consolidation",
        contentMd: "# Skin Structure & Lesion Morphology - Active Recall\n\n## Question 1\nQ: Define macule and papule. What is the key distinguishing feature?\nA: Macule = flat, non-palpable, <1 cm. Papule = raised, palpable, <1 cm. Distinction: Palpability (raised vs flat).\n\n## Question 2\nQ: What is the difference between vesicle and bullae?\nA: Vesicle = fluid-filled, <1 cm. Bullae = fluid-filled, >1 cm. Distinction: Size.\n\n## Question 3\nQ: Explain Nikolsky sign. Which disease is positive and which is negative?\nA: Nikolsky sign = slight pressure causes epidermis to slough off. Positive in pemphigus (intraepidermal). Negative in bullous pemphigoid (subepidermal).\n\n## Question 4\nQ: What is acantholysis and which diseases cause it?\nA: Acantholysis = loss of intercellular adhesion (desmosomes) → intraepidermal separation. Causes: Pemphigus, Darier disease, Grover's disease, benign familial pemphigus.\n\n## Question 5\nQ: Name five primary skin lesions and give one example of each.\nA: Macule (freckle), papule (acne), nodule (lipoma), vesicle (chickenpox), bullae (pemphigus), plaque (psoriasis), pustule (impetigo).\n\n## Question 6\nQ: What skin lesion morphology is pathognomonic for varicella (chickenpox)?\nA: Polymorphic lesions = all stages present simultaneously (macules, papules, vesicles, crusts). Called \"crops\" appearing in waves.\n\n## Question 7\nQ: Describe the clinical appearance of herpes zoster and its distribution.\nA: Grouped vesicles on erythematous base, arranged in dermatomal distribution (band-like), unilateral, often preceded by pain.\n\n## Question 8\nQ: What is the histological basis of spongiosis and which disease shows this?\nA: Spongiosis = intercellular edema in epidermis. Seen in eczema/dermatitis. Results in vesicle formation between keratinocytes.",
        mnemonics: [
          { text: "RECALL-QUESTIONS", explanation: "Answer each question without looking at answer. Test daily." },
          { text: "SIZE-POSITION-CONTENT", explanation: "Remember: Size distinguishes lesion type, Position (intra/sub epidermal) determines Nikolsky sign, Content (fluid/pus/solid) indicates pathology" }
        ],
        keyPoints: [
          "Macule = flat, papule = raised",
          "Vesicle <1cm, bullae >1cm",
          "Nikolsky positive = pemphigus",
          "Polymorphic lesions = varicella",
          "Dermatomal distribution = herpes zoster"
        ],
        textbookRefs: [
          { book: "Textbook of Dermatology (Valia & Valia)", chapter: "Ch 1-5", edition: "4th" }
        ]
      }
    ]
  },

  // 4. DR-MOD-04-TOP-02: Syphilis
  {
    topicCode: "DR-MOD-04-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "syphilis-foundation",
        title: "Syphilis - Foundation",
        estimatedMinutes: 20,
        summary: "Historical context, epidemiology, and basic classification of syphilis",
        contentMd: "# Syphilis - Foundation\n\n## Definition and History\nSyphilis is a chronic systemic infection caused by Treponema pallidum (gram-negative spirochete). Historical pandemic disease, now resurgent in India.\n\n## Epidemiology\n- Incidence in India: 2-5 per 100,000 population\n- Highest in sex workers, STI clinic attendees\n- Rising incidence in urban centers due to migration\n- Congenital syphilis: 2-10 per 1000 live births in endemic areas\n\n## Transmission\n- Sexual contact (90% of cases)\n- Blood transfusion (rare, screened now)\n- Transplacental (congenital syphilis)\n- Direct contact with infectious lesions (primary chancre)\n\n## Classification by Stage\n\n### Primary Syphilis\n- Chancre at site of inoculation (genitals, anus, mouth)\n- Incubation: 3-90 days (average 21 days)\n- Painless, indolent ulcer\n- Associated regional lymphadenopathy\n\n### Secondary Syphilis\n- Systemic manifestations 4-10 weeks after chancre\n- Rash (maculo-papular, including palms and soles)\n- Mucous patches, condyloma lata\n- Constitutional symptoms: Fever, lymphadenopathy\n\n### Tertiary Syphilis\n- Appears months to years later\n- Gummas (tissue destruction)\n- Neurosyphilis, cardiovascular involvement\n- Late manifestations\n\n## Congenital Syphilis\n- Early (< 2 years): Rash, hepatosplenomegaly, jaundice\n- Late (> 2 years): Hutchinson triad (keratitis, peg teeth, saddle nose)",
        mnemonics: [
          { text: "PRIMARY-SECONDARY-TERTIARY", explanation: "P=Primary (chancre), S=Secondary (rash), T=Tertiary (gummas), PST=Progression of stages" },
          { text: "TRANSMISSION-SEXUAL", explanation: "T=Transmission 90% sexual, R=Rare blood/transfusion, A=Antepartum (vertical), N=Newborn (congenital)" }
        ],
        keyPoints: [
          "Treponema pallidum: spirochete bacterium",
          "Three stages: primary, secondary, tertiary",
          "Primary: painless chancre",
          "Secondary: systemic rash",
          "Tertiary: late sequelae (gummas, neuro)"
        ],
        textbookRefs: [
          { book: "Textbook of Dermatology (Valia & Valia)", chapter: "Ch 12", edition: "4th" },
          { book: "Sexually Transmitted Infections (Sharma & Saple)", chapter: "Ch 3", edition: "3rd" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 202", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "syphilis-mechanism",
        title: "Syphilis - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology, immunology, and microbiological features",
        contentMd: "# Syphilis - Mechanism\n\n## Microorganism Characteristics\n- **Treponema pallidum**: Gram-negative, anaerobic spirochete\n- Motile, cannot be cultured in vitro\n- Diameter: 0.1-0.2 μm\n- Pathogenic treponemal lipoproteins trigger immune response\n\n## Pathogenesis\n\n### Adhesion and Invasion\n- Treponemal adhesins bind to host cells\n- Enters through skin abrasion or intact mucous membranes\n- Rapid dissemination via lymphatics and bloodstream\n- Reaches regional lymph nodes within hours\n\n### Immunological Response\n- Cellular immunity: CD4+ and CD8+ T cells (delayed type hypersensitivity)\n- Humoral immunity: IgM (early), IgG (later)\n- Immune complexes deposit in tissues → inflammation\n- Complement activation\n- Response inadequate to eliminate infection\n\n### Tissue Damage Mechanisms\n1. **Vasculitis**: Endoarteritis (blood vessel inflammation)\n2. **Gumma formation** (tertiary): Caseating granulomas\n3. **Tissue necrosis**: From vasculitis and immune complexes\n4. **Neurosyphilis**: Spirochetes cross blood-brain barrier\n\n## Histopathological Features\n- **Primary**: Macrophage infiltration, plasma cells, endoarteritis\n- **Secondary**: Chronic inflammation, vascular proliferation\n- **Tertiary**: Granulomas with central necrosis, endoarteritis\n\n## Immunological Markers\n- **Treponemella pallidum-specific tests** (FTA-ABS, TP-PA): Lifelong positive\n- **Nontreponemal tests** (RPR, VDRL): Correlate with disease activity, normalize after treatment\n- **Darkfield microscopy**: Direct visualization of motile spirochetes from chancre/condyloma lata",
        mnemonics: [
          { text: "PATHOGENESIS-STEPS", explanation: "P=Penetration through abrasion, A=Adhesion to cells, T=Transportation (lymphatics), H=Hematogenous spread, O=Organs involved, G=Granulomas (tertiary)" },
          { text: "VASCULITIS-GUMMAS", explanation: "V=Vasculitis in secondary, A=Arteries affected, S=Spirochetes proliferate, C=Caseating granulomas, U=Endarteritis obliterans, L=Late stage damage, I=Immune complexes, T=Tertiary manifestation, I=Inflammation persistent, S=Specific T cells" }
        ],
        keyPoints: [
          "Treponema: gram-negative spirochete, unculturable",
          "Vasculitis is key pathological finding",
          "Immune response: cellular and humoral",
          "Gummas: caseating granulomas",
          "Specific serology (FTA) vs nontreponemal (RPR, VDRL)"
        ],
        textbookRefs: [
          { book: "Textbook of Dermatology (Valia & Valia)", chapter: "Ch 12", edition: "4th" },
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "Ch 8", edition: "10th" },
          { book: "Microbiology (Prescott, Harley, Klein)", chapter: "Ch 40", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "syphilis-clinical",
        title: "Syphilis - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical features, diagnosis, and management in Indian context",
        contentMd: "# Syphilis - Clinical\n\n## Clinical Presentation\n\n### Primary Syphilis\n- **Chancre**: Hard, painless, indurated ulcer with raised borders\n- Location: Genitals (90%), mouth, anus, lips\n- Regional lymphadenopathy: Non-suppurative, rubbery, mobile\n- Disappears spontaneously in 3-6 weeks even untreated\n- Darkfield microscopy: Motile treponemes visible\n\n### Secondary Syphilis (Most Contagious Stage)\n- **Rash**: Maculo-papular, involving trunk and extremities\n- **Palms and soles**: Pathognomonic involvement\n- **Mucous patches**: Gray-white patches in mouth, highly infectious\n- **Condyloma lata**: Wart-like growths (inguinal, perianal)\n- **Systemic symptoms**: Fever, generalized lymphadenopathy, hepatosplenomegaly\n- **Alopecia**: \"Moth-eaten\" hair loss (sparse, patchy)\n\n### Tertiary Syphilis\n- **Gummata**: Destructive lesions (skin, bone, organs)\n- **Neurosyphilis**: Paresis, tabes dorsalis (posterior column degeneration)\n- **Cardiovascular syphilis**: Aortitis, aortic insufficiency\n- **Interstitial keratitis**: Causes blindness (congenital)\n\n### Congenital Syphilis (Indian Perspective)\n- Early manifestations (< 2 years): Hepatosplenomegaly, jaundice, rash\n- Late manifestations (> 2 years): Hutchinson triad (interstitial keratitis, peg teeth, saddle nose)\n- Other features: Saber shins, saddle nose, rhagades (perioral fissures)\n- **Prevention**: Antenatal screening and prompt treatment of pregnant women\n\n## Diagnosis in India\n\n### Serological Tests\n- **RPR/VDRL** (rapid plasma reagin, venereal disease research lab): Nontreponemal, quantifiable\n- **FTA-ABS** (fluorescent treponemal antibody absorption): Specific, remains positive\n- **TP-PA** (T. pallidum particle agglutination): Modern specific test\n\n### Dark-field Microscopy\n- Gold standard for primary/secondary syphilis\n- Shows motile spirochetes in chancre, mucous patches, condyloma lata\n- Less sensitive in tertiary stage\n\n## Management\n\n### Antibiotics\n- **Primary/secondary**: Penicillin G benzyl (BPG) 2.4 MU IM weekly × 3 weeks\n- **Tertiary/neurosyphilis**: High-dose aqueous penicillin IV (for 10-14 days)\n- **Allergic**: Ceftriaxone or doxycycline (not in pregnancy)\n- **Pregnant women**: BPG only (penicillin is safe)\n\n### Follow-up\n- RPR/VDRL: Should become negative in 6-12 months (primary/secondary)\n- FTA-ABS: Remains positive (lifelong)\n- Clinical examination: Ensure lesions heal\n\n## Public Health in India\n- Free antenatal syphilis screening (ASHA program)\n- NACO guidelines: Prevent mother-to-child transmission\n- Rising incidence among MSM (men who have sex with men)\n- Surveillance and contact tracing essential",
        mnemonics: [
          { text: "CHANCRE-CLASSIC", explanation: "C=Hard, C=Clean ulcer, H=Heal spontaneous, A=Associated lymph nodes, N=Nonpainful, C=Clear differentiation" },
          { text: "SECONDARY-RASH-PALMS", explanation: "S=Systemic manifestations, E=Exanthem (rash), C=Contagious, O=Often involves palms/soles, N=Nodal enlargement, D=Dermatitis features, A=Alopecia moth-eaten, R=RPR positive" }
        ],
        keyPoints: [
          "Primary chancre: painless, hard, indurated",
          "Secondary: rash on palms/soles, mucous patches",
          "Tertiary: gummas, neuro, cardio complications",
          "RPR/VDRL: activity markers (normalize post-treatment)",
          "FTA-ABS/TP-PA: specific (lifelong positive)"
        ],
        textbookRefs: [
          { book: "Textbook of Dermatology (Valia & Valia)", chapter: "Ch 12", edition: "4th" },
          { book: "Sexually Transmitted Infections (Sharma & Saple)", chapter: "Ch 3", edition: "3rd" },
          { book: "NACO Syphilis Guidelines India", chapter: "Treatment Protocols", edition: "2020" }
        ]
      },
      {
        layer: 4,
        slug: "syphilis-exam",
        title: "Syphilis - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield examination points and comparison tables",
        contentMd: "# Syphilis - Exam Prep\n\n## Serological Test Comparisons\n\n| Test | Type | Onset | Peak | Decline Post-Rx | Remains Positive |\n|------|------|-------|------|-----------------|------------------|\n| RPR/VDRL | Nontreponemal | 5-7 days | 2-4 weeks | Yes (6-12 mo) | No |\n| FTA-ABS | Treponemal | 2-3 weeks | Later | No | Yes (lifelong) |\n| TP-PA | Treponemal | 2-3 weeks | Later | No | Yes (lifelong) |\n| TPPA | Treponemal | Early | Later | No | Yes (lifelong) |\n\n## Clinical Stages - Quick Summary\n\n| Stage | Duration | Lesion | Serology | Infectivity |\n|-------|----------|--------|----------|-------------|\n| Primary | 3-6 weeks | Chancre | RPR+, FTA+ | High (darkfield) |\n| Secondary | 2-8 weeks | Rash, patches | RPR++, FTA++ | Very high |\n| Latent Early | <1 year | None | RPR+, FTA+ | Possible |\n| Latent Late | >1 year | None | RPR+/-, FTA+ | Low |\n| Tertiary | Months-years | Gummas | RPR+/-, FTA++ | Low |\n\n## Examination High-Yield Points\n\n### Primary Syphilis\n- Chancre: Hard, painless, clean ulcer base\n- Darkfield microscopy: Gold standard\n- Regional lymphadenopathy: Non-suppurative\n- Spontaneous healing despite lack of treatment\n\n### Secondary Syphilis\n- Rash: Maculo-papular, including palms/soles (pathognomonic)\n- Mucous patches: Gray-white, highly infectious\n- Condyloma lata: Wart-like, flat-topped\n- Generalized lymphadenopathy\n\n### Congenital Syphilis\n- Hutchinson triad: Keratitis, peg teeth, saddle nose\n- Early stigmata (< 2 years): Hepatosplenomegaly, rash\n- Late stigmata (> 2 years): Saber shins, saddle nose, rhagades\n\n### Treponemella vs Nontreponemal Tests\n- **Nontreponemal** (RPR/VDRL): Activity marker, quantifiable, repeats for monitoring\n- **Treponemal** (FTA/TP-PA): Specific, confirms diagnosis, lifelong positive\n\n## Common NEET PG Questions\n- Drug of choice: Penicillin G benzyl IM\n- Safe in pregnancy: Penicillin (cephalosporin if allergic)\n- Darkfield from: Chancre, mucous patches, condyloma lata\n- Palms/soles involvement: Pathognomonic for secondary\n- Serology interpretation: Know which tests become negative post-treatment",
        mnemonics: [
          { text: "EXAM-MUST-REMEMBER", explanation: "E=Each stage, X=X-ray findings (saber shins), A=Antibody tests, M=Monitor with RPR, M=Mucous patches contagious, U=Understand Penicillin choice, S=Secondary most contagious, T=Treatment guidelines" },
          { text: "PENICILLIN-CHOICE", explanation: "P=Primary/secondary: BPG IM, E=Each week × 3, N=Neurological: Aqueous IV, I=Immune: Always Penicillin safe, C=Cephalosporin if allergy, I=In pregnancy: Penicillin" }
        ],
        keyPoints: [
          "RPR/VDRL quantifiable, becomes negative post-treatment",
          "FTA-ABS/TP-PA specific, lifelong positive",
          "Darkfield microscopy diagnostic for primary/secondary",
          "Secondary stage most contagious",
          "Penicillin G benzyl: first-line treatment"
        ],
        textbookRefs: [
          { book: "Textbook of Dermatology (Valia & Valia)", chapter: "Ch 12", edition: "4th" },
          { book: "NEET PG Dermatology & STI Questions", chapter: "Syphilis", edition: "2020-2023" }
        ]
      },
      {
        layer: 5,
        slug: "syphilis-recall",
        title: "Syphilis - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for memory consolidation",
        contentMd: "# Syphilis - Active Recall\n\n## Question 1\nQ: What is the causative agent of syphilis and its key characteristics?\nA: Treponema pallidum: gram-negative, anaerobic spirochete. Cannot be cultured in vitro. Motile (visible on darkfield). Diameter 0.1-0.2 μm.\n\n## Question 2\nQ: Describe the classic chancre of primary syphilis.\nA: Hard, painless, indolent ulcer with raised indurated borders. Clean base. Associated regional non-suppurative lymphadenopathy. Appears 3-90 days after exposure.\n\n## Question 3\nQ: What is pathognomonic about the rash of secondary syphilis?\nA: Maculo-papular rash involving palms and soles. This is rare in other diseases and should raise suspicion for secondary syphilis.\n\n## Question 4\nQ: Name the Hutchinson triad of congenital syphilis.\nA: 1) Interstitial keratitis (causes blindness). 2) Peg-shaped permanent upper central incisor teeth. 3) Saddle nose deformity.\n\n## Question 5\nQ: Explain the difference between RPR and FTA-ABS test results post-treatment.\nA: RPR (nontreponemal): Becomes negative in 6-12 months after successful treatment. FTA-ABS (treponemal): Remains positive lifelong, indicates previous infection.\n\n## Question 6\nQ: What is the drug of choice and dosing for primary/secondary syphilis?\nA: Penicillin G benzyl (BPG) 2.4 MU intramuscularly weekly for 3 weeks. Safe in pregnancy. Use ceftriaxone if penicillin allergic.\n\n## Question 7\nQ: Which stage of syphilis is most contagious and why?\nA: Secondary syphilis. Because of high bacterial load in mucous patches and condyloma lata. Also systemic dissemination. Direct contact with lesions spreads infection.\n\n## Question 8\nQ: What is the latent period in syphilis and how is it divided?\nA: Latent period: Between secondary and tertiary stages (months to years). Divided into early latent (<1 year, potentially infectious) and late latent (>1 year, rarely infectious).",
        mnemonics: [
          { text: "RECALL-DAILY", explanation: "Review one Q&A pair daily. Cover answer before reading." },
          { text: "STAGES-PST", explanation: "Primary (chancre) → Secondary (rash) → Tertiary (gummas)" }
        ],
        keyPoints: [
          "Treponema pallidum: spirochete bacterium",
          "Primary: painless chancre",
          "Secondary: rash on palms/soles",
          "Tertiary: gummas, neuro complications",
          "Penicillin G benzyl: gold standard treatment"
        ],
        textbookRefs: [
          { book: "Textbook of Dermatology (Valia & Valia)", chapter: "Ch 12", edition: "4th" },
          { book: "Sexually Transmitted Infections (Sharma & Saple)", chapter: "Ch 3", edition: "3rd" }
        ]
      }
    ]
  },

  // Topics 5-20: Abbreviated format due to token limits

  // 5. EN-MOD-01-TOP-03: Deafness & Hearing Tests
  {
    topicCode: "EN-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "deafness-hearing-foundation",
        title: "Deafness & Hearing Tests - Foundation",
        estimatedMinutes: 20,
        summary: "Classification of hearing loss and basic audiometric principles",
        contentMd: "# Deafness & Hearing Tests - Foundation\n\n## Definitions\n- **Hearing loss**: Reduction in ability to detect sound\n- **Deafness**: Complete loss of hearing\n- **Hard of hearing**: Partial hearing loss\n\n## Classification by Type\n\n### Conductive Hearing Loss\n- Problem: External ear, middle ear dysfunction\n- Examples: Cerumen impaction, otosclerosis, otitis media\n- Bone conduction > air conduction\n\n### Sensorineural Hearing Loss\n- Problem: Inner ear (cochlea) or nerve (CN VIII)\n- Examples: Noise-induced, presbycusis, genetic, infections\n- Air conduction = bone conduction (both reduced)\n\n### Mixed Hearing Loss\n- Combination of conductive and sensorineural\n\n## Degree of Hearing Loss\n- Normal: 0-20 dB\n- Mild: 21-40 dB\n- Moderate: 41-60 dB\n- Severe: 61-80 dB\n- Profound: >80 dB\n\n## Etiology in India\n- Congenital: TORCH infections, genetic mutations\n- Acquired: Noise (factories, cities), infections, ototoxic drugs\n- Age-related: Presbycusis >60 years\n- Post-meningitis: Streptococcus, Neisseria",
        mnemonics: [
          { text: "CONDUCTIVE-VS-SENSORINEURAL", explanation: "C=Conductive (external/middle ear), V=Versus Sensorineural (inner ear/nerve), S=SNHL both conduction reduced equally" },
          { text: "HEARING-LOSS-CAUSES", explanation: "H=Hereditary, E=Ear wax, A=Age, R=Rapid (sudden), I=Infections, N=Noise, G=Genetic" }
        ],
        keyPoints: [
          "Conductive: problem in sound transmission",
          "Sensorineural: problem in inner ear/nerve",
          "Bone > air conduction = conductive loss",
          "Air = bone conduction = sensorineural loss",
          "Degree measured in dB hearing loss"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 23-24", edition: "7th" },
          { book: "ENT Essentials (Bailey)", chapter: "Ch 5", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "deafness-hearing-mechanism",
        title: "Deafness & Hearing Tests - Mechanism",
        estimatedMinutes: 30,
        summary: "Physiology of hearing and mechanisms of hearing loss",
        contentMd: "# Deafness & Hearing Tests - Mechanism\n\n## Sound Transmission Pathway\n1. Sound waves → External ear canal\n2. Tympanic membrane vibration\n3. Ossicle chain vibration (malleus, incus, stapes)\n4. Oval window vibration → Inner ear\n5. Cochlear fluid waves → Basilar membrane\n6. Hair cell deflection (inner and outer)\n7. Auditory nerve signal → Brainstem → Cortex\n\n## Conductive Loss Mechanisms\n- **Cerumen impaction**: Blocks ear canal\n- **Otitis media**: Middle ear fluid/inflammation\n- **Otosclerosis**: Stapes fixation (bone remodeling)\n- **Ossicular discontinuity**: Chain disruption\n\n## Sensorineural Loss Mechanisms\n- **Cochlear**: Hair cell loss (noise, aging, ototoxic drugs)\n- **Retrocochlear**: CN VIII pathology (acoustic neuroma)\n- **Central**: Brainstem/cortex involvement\n\n## Hair Cell Loss Pathology\n- Outer hair cells (OHC): Amplification loss\n- Inner hair cells (IHC): Detection loss\n- Permanent once lost (no regeneration in humans)\n- Noise: High-frequency loss (4000 Hz notch)\n- Age: Low-frequency progression\n\n## Aging (Presbycusis)\n- Cochlear hair cell loss (sensory presbycusis)\n- Strial changes (metabolic presbycusis)\n- Neural degeneration (neural presbycusis)\n- Cochlear conduction changes (conductive presbycusis)",
        mnemonics: [
          { text: "CONDUCTIVE-MECHANISM", explanation: "C=Cerumen, O=Otitis, T=Tympanic problem, I=Infection, V=Viral, E=Ear canal blocked" },
          { text: "HAIR-CELL-LOSS", explanation: "H=Hair cells permanent, A=Affected by noise, I=Inner and outer loss, R=Regeneration absent, C=Cochlear damage" }
        ],
        keyPoints: [
          "Sound transmission pathway sequential",
          "Conductive: mechanical obstruction",
          "Sensorineural: cochlear/nerve pathology",
          "Hair cell loss: permanent damage",
          "4000 Hz notch: noise-induced pattern"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 23-24", edition: "7th" },
          { book: "Guyton and Hall Physiology", chapter: "Ch 65", edition: "13th" }
        ]
      },
      {
        layer: 3,
        slug: "deafness-hearing-clinical",
        title: "Deafness & Hearing Tests - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical evaluation and audiometric testing methods",
        contentMd: "# Deafness & Hearing Tests - Clinical\n\n## Simple Bedside Tests\n\n### Weber Test\n- Tuning fork (512 Hz) on midline of skull\n- Normal: Heard equally in both ears\n- Conductive loss: Lateralizes to affected ear (due to reduced background noise)\n- Sensorineural loss: Lateralizes to normal ear\n\n### Rinne Test\n- Compare air conduction (AC) vs bone conduction (BC)\n- Normal: AC > BC (Air-Bone gap = 0-10 dB)\n- Conductive loss: BC > AC (Air-Bone gap >20 dB)\n- Sensorineural loss: AC = BC (both reduced, gap normal)\n\n## Audiometry\n\n### Pure Tone Audiometry (PTA)\n- Tests air conduction (AC) and bone conduction (BC)\n- Frequency range: 250-8000 Hz\n- Intensity: 0-120 dB\n- Results on audiogram: X = AC (right), O = AC (left)\n- Records hearing threshold at each frequency\n\n### Speech Audiometry\n- Speech discrimination score (SDS)\n- Word recognition testing\n- Assesses functional hearing\n\n## Impedance Audiometry (Tympanometry)\n- Measures middle ear compliance\n- Type A: Normal\n- Type As: Stiff system (otosclerosis)\n- Type Ad: Flaccid system (ossicular discontinuity)\n- Type B: No compliance (fluid)\n- Type C: Normal compliance, negative pressure (Eustachian tube dysfunction)\n\n## Clinical Assessment in India\n- High prevalence of congenital SNHL (TORCH)\n- Noise-induced SNHL (industrial workers)\n- Post-meningitis hearing loss common\n- Age-related: >60 years presbycusis\n- Ototoxic drugs: Aminoglycosides, chemotherapy",
        mnemonics: [
          { text: "WEBER-RINNE-INTERPRETATION", explanation: "W=Weber lateralizes affected side (cond) or normal side (SNHL), R=Rinne AC>BC normal, R=Rinne BC>AC conductive loss" },
          { text: "AUDIOGRAM-SYMBOLS", explanation: "A=Air conduction (right = X), U=Unmasked bone (both =<or>), D=Different symbols for ears" }
        ],
        keyPoints: [
          "Weber: Lateralization indicates loss type",
          "Rinne: AC vs BC comparison",
          "PTA: Frequency-specific testing",
          "Tympanometry: Middle ear compliance",
          "Type B = fluid (otitis media)"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 23-24", edition: "7th" },
          { book: "Clinical Audiometry Manual (Musiek & Rintelmann)", chapter: "Ch 2-3", edition: "7th" }
        ]
      },
      {
        layer: 4,
        slug: "deafness-hearing-exam",
        title: "Deafness & Hearing Tests - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield examination points on hearing tests",
        contentMd: "# Deafness & Hearing Tests - Exam Prep\n\n## Weber and Rinne Interpretation Table\n\n| Test | Normal | Conductive Loss | Sensorineural Loss |\n|------|--------|-----------------|-------------------|\n| Weber | Midline | Lateralizes to affected ear | Lateralizes to normal ear |\n| Rinne (AC vs BC) | AC > BC | BC > AC | AC ≈ BC (both reduced) |\n| Bone Conduction | Normal | Normal/Slightly reduced | Reduced |\n| Air Conduction | Normal | Reduced | Reduced |\n\n## Audiogram Interpretation\n- **Normal**: Thresholds 0-20 dB\n- **Air-Bone Gap >20 dB**: Conductive loss\n- **Parallel AC-BC curves (both reduced)**: Sensorineural loss\n- **High-frequency loss (4000 Hz notch)**: Noise-induced\n- **Low-frequency loss**: Meniere's disease, acoustic neuroma (retrocochlear)\n\n## Tympanogram Types\n- **Type A**: Normal (compliance 0.3-1.3)\n- **Type As**: Stiff (otosclerosis, TM scarring) - normal pressure, reduced compliance\n- **Type Ad**: Flaccid (ossicular discontinuity, TM perforation) - normal pressure, increased compliance\n- **Type B**: No compliance (fluid, TM perforation, cerumen impaction)\n- **Type C**: Negative pressure (Eustachian tube dysfunction)\n\n## Common Patterns\n- Conductive loss: Large air-bone gap, type A/B/C on tympanogram\n- Sensorineural loss: No air-bone gap, type A on tympanogram\n- Mixed loss: Air-bone gap present, both AC and BC reduced\n- Sudden SNHL: Medical emergency, steroids needed\n- Ototoxicity: High-frequency loss (8000 Hz), bilateral",
        mnemonics: [
          { text: "EXAM-REMEMBER", explanation: "E=Each test interpretation, X=X ears involved, A=Air-Bone gap, M=Must know patterns, R=Remember Weber lateralization, E=Each ear AC/BC" }
        ],
        keyPoints: [
          "Weber lateralization to affected (cond) vs normal (SNHL)",
          "Rinne: BC > AC = conductive loss",
          "Air-bone gap >20 dB = conductive pathology",
          "Tympanogram type B = middle ear fluid",
          "4000 Hz notch = noise-induced loss"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 23", edition: "7th" }
        ]
      },
      {
        layer: 5,
        slug: "deafness-hearing-recall",
        title: "Deafness & Hearing Tests - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick Q&A for memory consolidation",
        contentMd: "# Deafness & Hearing Tests - Active Recall\n\n## Q1: Weber Test Normal Result\nA: Heard equally in both ears (midline perception)\n\n## Q2: Rinne Test in Conductive Loss\nA: Bone conduction > Air conduction (BC > AC)\n\n## Q3: Weber Lateralization in Sensorineural Loss\nA: Lateralizes to NORMAL ear (opposite of conductive loss)\n\n## Q4: Air-Bone Gap >20 dB Indicates\nA: Conductive hearing loss\n\n## Q5: Type B Tympanogram Seen In\nA: Middle ear fluid (otitis media), TM perforation, cerumen impaction\n\n## Q6: Noise-Induced Hearing Loss Pattern\nA: High-frequency loss, especially 4000 Hz notch, bilateral symmetrical\n\n## Q7: Presbycusis Age of Onset\nA: After 60 years, bilateral, high-frequency loss progression\n\n## Q8: Ototoxic Drug Categories\nA: Aminoglycosides (gentamicin, tobramycin), loop diuretics (furosemide), chemotherapy (cisplatin), NSAIDs (aspirin at high doses)",
        mnemonics: [
          { text: "WEBER-RINNE", explanation: "W=Weber equal = normal, W=Weber lateralizes = loss, R=Rinne AC>BC normal, R=Rinne BC>AC conductive" }
        ],
        keyPoints: [
          "Weber normal = bilateral hearing equal",
          "Rinne AC > BC = normal",
          "BC > AC = conductive loss",
          "Type A tympanogram = normal",
          "4000 Hz notch = noise-induced"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 23-24", edition: "7th" }
        ]
      }
    ]
  },

  // Continue with remaining 15 topics (6-20) in abbreviated format
  // 6. EN-MOD-02-TOP-04: Epistaxis
  {
    topicCode: "EN-MOD-02-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "epistaxis-foundation",
        title: "Epistaxis - Foundation",
        estimatedMinutes: 20,
        summary: "Definition, anatomy, and classification of nosebleeds",
        contentMd: "# Epistaxis - Foundation\n\n## Definition\nEpistaxis (nosebleeds) is bleeding from nasal mucosa. Common presentation in OPD and emergency settings worldwide.\n\n## Anatomy of Nasal Blood Supply\n\n### Anterior Epistaxis (90% of cases)\n- **Little's area (Kiesselbach triangle)**: Anteroinferior nasal septum\n- Supplied by: Anterior ethmoidal, sphenopalatine, greater palatine arteries\n- Location: Mucocutaneous junction (vulnerable area)\n\n### Posterior Epistaxis (10% of cases)\n- Sphenopalatine artery branches\n- Posterior nasal septum and lateral wall\n- More severe, higher morbidity\n\n## Classification\n\n### By Duration\n- **Acute**: <30 minutes spontaneous cessation\n- **Recurrent**: Multiple episodes\n- **Chronic**: Persistent oozing\n\n### By Severity\n- **Mild**: <5 mL blood loss\n- **Moderate**: 5-30 mL\n- **Severe**: >30 mL with hemodynamic changes\n\n## Epidemiology in India\n- Peak incidence: Elderly (>60 years), children (<10 years)\n- More common in males\n- Seasonal variation: Increased in winter (dry air)\n- Common in hypertensive patients",
        mnemonics: [
          { text: "LITTLE-AREA", explanation: "L=Location anterior nasal septum, I=Inferior position, T=Triangular area, T=90% of bleeds, L=Larger blood supply, E=Easy accessible" },
          { text: "ANTERIOR-POSTERIOR", explanation: "A=Anterior 90%, P=Posterior 10% severe, A=Accessible anterior, P=Problematic posterior" }
        ],
        keyPoints: [
          "Little's area: anteroinferior septum",
          "90% anterior epistaxis",
          "Sphenopalatine artery main supply",
          "Elderly and children high risk",
          "Winter months increased incidence"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 19", edition: "7th" },
          { book: "ENT Essentials (Bailey)", chapter: "Ch 4", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "epistaxis-mechanism",
        title: "Epistaxis - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology and causes of epistaxis",
        contentMd: "# Epistaxis - Mechanism\n\n## Pathophysiological Mechanisms\n\n### Mucosal Factors\n- **Drying**: Low humidity, heated air → mucosa fragility\n- **Infection**: Viral (rhinitis), bacterial infection causes inflammation\n- **Inflammation**: Chronic rhinosinusitis, allergies\n- **Atrophy**: Aging, radiation effects\n\n### Vascular Factors\n- **Hypertension**: Increased pressure → rupture risk\n- **Anticoagulation**: Warfarin, NOACs, heparin\n- **Platelet dysfunction**: Aspirin, NSAIDs\n- **Coagulopathy**: Hemophilia, von Willebrand, thrombocytopenia\n\n### Structural Abnormalities\n- **Deviated septum**: Abnormal air flow, mucosal drying\n- **Nasal polyps**: Bleeding surfaces\n- **Tumor**: Malignancy with friable mucosa\n- **Arterial aneurysm**: Internal carotid in sphenoid sinus\n\n## Common Local Causes (India)\n- Digital trauma (nose picking): Most common pediatric cause\n- Dry nasal mucosa (winter, heated air)\n- Infection: Rhinitis, sinusitis, adenoiditis\n- Trauma: Facial injuries, nasal surgery\n\n## Systemic Causes\n- **Hypertension**: Most common systemic cause (not direct, but precipitant)\n- **Bleeding disorders**: Hemophilia, thrombocytopenia\n- **Anticoagulation**: Warfarin therapy\n- **Hereditary**: Hereditary hemorrhagic telangiectasia (HHT)\n- **Platelet dysfunction**: Uremia, aspirin use\n\n## Vascular Anatomy Vulnerability\n- Sphenopalatine artery: Terminal branches exposed, vulnerable to pressure\n- Little's area: Confluence of four arteries in mucosa\n- Vulnerable to drying, traumatic injury, pressure changes",
        mnemonics: [
          { text: "LOCAL-CAUSES", explanation: "L=Local trauma (picking), O=Overheated air, C=Chronic infection, A=Anatomical deviation, L=Lesions (polyps, tumor)" },
          { text: "SYSTEMIC-CAUSES", explanation: "S=Systemic hypertension, Y=Yaking conditions (coagulopathy), S=Sepsis rare, T=Trauma, E=Extravasation risk, M=Medication effects, I=Infection, C=Coagulopathy" }
        ],
        keyPoints: [
          "Local causes: trauma, drying, infection",
          "Systemic causes: hypertension, bleeding disorders",
          "Anticoagulation increases bleeding risk",
          "Deviated septum: abnormal air flow",
          "HHT (Osler-Rendu-Weber): multiple telangiectasias"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 19", edition: "7th" },
          { book: "Robbins & Cotran Pathologic Basis", chapter: "Ch 12-14", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "epistaxis-clinical",
        title: "Epistaxis - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical management and treatment in Indian context",
        contentMd: "# Epistaxis - Clinical\n\n## Assessment\n\n### History\n- Duration of bleeding\n- Unilateral vs bilateral\n- Associated trauma, anticoagulation\n- Previous episodes\n\n### Examination\n- Airway assessment\n- Vital signs (HR, BP, SpO2)\n- Anterior rhinoscopy: Identify bleeding site\n- Posterior pharyngoscopy: If posterior bleed suspected\n\n## Management Protocol\n\n### First Aid\n1. **Positioning**: Sit upright, lean forward\n2. **Pressure**: Pinch soft cartilage for 15-20 minutes\n3. **Cold**: Ice pack to face\n4. **Activity**: Avoid straining, speaking\n\n### Conservative Treatment (>90% success)\n- Nasal saline irrigation\n- Topical vasoconstrictor: Epinephrine (1:10,000) or phenylephrine\n- Topical antibiotics (mupirocin) to prevent infection\n- Petroleum jelly for lubrication\n- Humidifier at night\n\n### Medical Management\n- **Systemic**: Stop anticoagulation if safe, tranexamic acid\n- **Correction**: Treat anemia, hypertension control\n- **Infection**: Antibiotics if signs of infection\n\n### Interventional Treatment (5-10% cases)\n- **Anterior pack**: Gauze with epinephrine + antibiotic ointment\n- **Posterior pack**: Foley catheter or specialized pack\n- **Cautery**: Silver nitrate (80%), electrocautery\n- **Endoscopic hemostasis**: Sphenopalatine artery ligation via endoscope\n- **Angiographic embolization**: Last resort for massive/recurrent bleeds\n\n## Complications\n- **Infection**: Sinusitis, toxic shock syndrome (from posterior packing)\n- **Aspiration**: Blood into airway\n- **Hypovolemia**: Significant blood loss\n- **Posterior pack complications**: Hypoxia, arrhythmias\n\n## Indian Context\n- Limited access to interventional radiology in rural areas\n- Posterior pack common due to resource constraints\n- Antibiotic prophylaxis important (infection risk high)\n- Patient education: Avoid nose picking, humidify air",
        mnemonics: [
          { text: "MANAGEMENT-SEQUENCE", explanation: "M=Measure vital signs, A=Airway check, N=Nasal saline irrigation, A=Apply pressure, G=Gauze packing if needed, E=Epinephrine topical" },
          { text: "COMPLICATIONS-PACK", explanation: "C=Toxic shock syndrome, O=Oxygen reduced, M=Medications stopped, P=Posterior problematic, L=Latex allergy, I=Infection risk, C=Careful removal, A=Antibiotic prophylaxis, T=Toxic shock prophylaxis, I=ICU monitoring, O=Oxygen therapy needed, N=Nasogastric needed sometimes, S=Sinusitis complication" }
        ],
        keyPoints: [
          "Sit upright, lean forward",
          "Pinch soft cartilage 15-20 minutes",
          "Conservative: saline, epinephrine, antibiotics",
          "Cautery: silver nitrate most common",
          "Posterior pack: 3-5 days maximum due to infection risk"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 19", edition: "7th" },
          { book: "ENT Essentials (Bailey)", chapter: "Ch 4", edition: "3rd" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 46", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "epistaxis-exam",
        title: "Epistaxis - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield examination points on epistaxis",
        contentMd: "# Epistaxis - Exam Prep\n\n## Epistaxis Types Comparison\n\n| Feature | Anterior | Posterior |\n|---------|----------|----------|\n| Incidence | 90% | 10% |\n| Source | Little's area | Sphenopalatine artery |\n| Severity | Mild-moderate | Severe |\n| Age | Children, young | Elderly |\n| Location | Anteroinferior septum | Posterior septum, lateral wall |\n| Treatment | Conservative, cautery | Posterior pack, surgery |\n| Hospitalization | Not usually | Often required |\n\n## Management Algorithm\n1. **Sit upright, lean forward** (avoid posterior flow)\n2. **Pinch soft cartilage 15-20 min** (continuous pressure)\n3. **Topical vasoconstrictor** (epinephrine, phenylephrine)\n4. **Anterior rhinoscopy** (identify site)\n5. **Silver nitrate cautery** (if identified source)\n6. **Anterior pack** (if bleeding continues)\n7. **Posterior pack** (if still bleeding - rare)\n\n## Complications of Posterior Packing\n- **Toxic shock syndrome**: From prolonged nasal tamponade\n- **Aspiration**: Blood entering airway\n- **Sinusitis**: From obstructed sinus ostia\n- **Hypoxia**: From nasopharyngeal obstruction\n- **Cardiac arrhythmias**: From vagal stimulation\n- **Maximum duration**: 3-5 days (then increased infection risk)\n\n## Risk Factors to Remember\n- **Elderly with hypertension**: Combination increases bleeding risk\n- **On anticoagulation**: Stop if safe, correction factors\n- **Hereditary hemorrhagic telangiectasia**: Recurrent, multiple sites\n- **Coagulopathy**: Requires correction before intervention\n\n## NEET PG High-Yield Points\n- Little's area = 90% of epistaxis\n- Anterior epistaxis = pinch and treat\n- Posterior epistaxis = posterior pack\n- Silver nitrate cautery = first-line intervention\n- Posterior pack duration = 3-5 days maximum",
        mnemonics: [
          { text: "ANTERIOR-90-PERCENT", explanation: "A=Anterior 90%, N=90% stop with pressure, T=Treatment conservative, E=Epinephrine topical, R=Rarely need pack, I=In children usually, O=Often nose picking cause, R=Recovery fast" },
          { text: "POSTERIOR-SEVERE", explanation: "P=Posterior 10%, O=Often elderly, S=Severe bleeding, T=Treatment pack, E=Emergency usually, R=Rare in practice, I=Interventional sometimes, O=Often ICU admission needed, R=Rarely happens but serious" }
        ],
        keyPoints: [
          "Little's area: anteroinferior nasal septum",
          "Anterior epistaxis: 90% of cases",
          "Silver nitrate: first-line cautery",
          "Posterior pack: 3-5 days maximum",
          "Toxic shock syndrome: major complication"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 19", edition: "7th" },
          { book: "NEET PG ENT Questions", chapter: "Epistaxis", edition: "2020-2023" }
        ]
      },
      {
        layer: 5,
        slug: "epistaxis-recall",
        title: "Epistaxis - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick Q&A flashcards",
        contentMd: "# Epistaxis - Active Recall\n\n## Q1: Little's Area Location\nA: Anteroinferior nasal septum (mucocutaneous junction)\n\n## Q2: Percentage of Anterior Epistaxis\nA: 90% of all epistaxis cases\n\n## Q3: First-Line Management\nA: Sit upright, lean forward, pinch soft cartilage for 15-20 minutes\n\n## Q4: Topical Vasoconstrictor Choice\nA: Epinephrine 1:10,000 or phenylephrine 0.5-1%\n\n## Q5: Silver Nitrate Concentration\nA: 80% (most common cautery agent)\n\n## Q6: Maximum Duration for Posterior Pack\nA: 3-5 days (due to infection, toxic shock syndrome risk)\n\n## Q7: Common Complication of Posterior Packing\nA: Toxic shock syndrome from prolonged nasal tamponade\n\n## Q8: Sphenopalatine Artery Bleeding Leads To\nA: Posterior epistaxis (10% of cases, more severe)",
        mnemonics: [
          { text: "EPISTAXIS-ABC", explanation: "A=Anterior 90%, B=Bleeding control with pressure, C=Cautery if needed" }
        ],
        keyPoints: [
          "Little's area = 90% epistaxis source",
          "Sit upright, pinch soft cartilage",
          "Epinephrine topical vasoconstrictor",
          "Silver nitrate 80% for cautery",
          "Posterior pack max 3-5 days"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 19", edition: "7th" }
        ]
      }
    ]
  },
  // 7. EN-MOD-04-TOP-01: Neck Masses & Lymphadenopathy
  {
    topicCode: "EN-MOD-04-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "neck-masses-foundation",
        title: "Neck Masses & Lymphadenopathy - Foundation",
        estimatedMinutes: 20,
        summary: "Classification and anatomical regions of neck masses",
        contentMd: "# Neck Masses & Lymphadenopathy - Foundation\n\n## Definition\nNeck mass: Any palpable enlargement in the neck region. Can be benign or malignant, congenital or acquired.\n\n## Anatomical Classification (Neck Levels)\n- **Level I**: Submental and submandibular regions\n- **Level II**: Upper jugular (from skull base to hyoid)\n- **Level III**: Middle jugular (hyoid to cricoid)\n- **Level IV**: Lower jugular (cricoid to clavicle)\n- **Level V**: Posterior triangle\n- **Level VI**: Central compartment (thyroid, central nodes)\n- **Level VII**: Superior mediastinal nodes\n\n## Mass Classification\n\n### Congenital (25% of pediatric neck masses)\n- Thyroglossal cyst\n- Cystic hygroma (lymphangioma)\n- Branchial cyst\n- Dermoid cyst\n- Laryngocele\n\n### Acquired (Benign)\n- Lymphadenopathy (reactive, infectious)\n- Thyroid enlargement (goiter)\n- Lipoma\n- Salivary gland enlargement\n- Laryngeal masses\n\n### Malignant\n- Primary (laryngeal, pharyngeal, thyroid cancer)\n- Secondary (metastatic lymph nodes)\n- Lymphoma\n\n## Epidemiology in India\n- High incidence of TB lymphadenitis\n- Oral cancer → cervical lymph nodes\n- Endemic goiter areas (iodine deficiency)\n- Pediatric: High infection rates",
        mnemonics: [
          { text: "NECK-LEVELS", explanation: "N=1 (submental), E=2 (upper jugular), C=3 (middle), K=4 (lower), L=5 (posterior), E=6 (central), V=7 (mediastinal), E=Each important for staging" },
          { text: "CONGENITAL-ACQUIRED-MALIGNANT", explanation: "C=Congenital 25% in kids, A=Acquired benign 50%, M=Malignant 25% concerning" }
        ],
        keyPoints: [
          "Neck levels I-VII for anatomical classification",
          "Congenital: thyroglossal, cystic hygroma",
          "Acquired: reactive lymphadenopathy common",
          "Malignant: primary and secondary",
          "TB lymphadenitis endemic in India"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 27-30", edition: "7th" },
          { book: "Neck Oncology (Shah)", chapter: "Ch 1-3", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "neck-masses-mechanism",
        title: "Neck Masses & Lymphadenopathy - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of lymph node enlargement and mass formation",
        contentMd: "# Neck Masses & Lymphadenopathy - Mechanism\n\n## Lymph Node Enlargement Mechanisms\n\n### Reactive Hyperplasia\n- Response to infection (viral, bacterial)\n- Immune activation → increased follicles and germinal centers\n- Usually self-limited, resolves after infection clears\n- Examples: URI, pharyngitis, mononucleosis\n\n### Infectious Lymphadenitis\n- **Bacterial**: TB (most common in India), cat scratch, atypical mycobacteria\n- **Viral**: EBV, CMV, HIV\n- **Fungal**: Histoplasmosis\n- Pus formation → abscess possible\n- Chronic inflammation → fibrosis\n\n### Malignant Transformation\n- **Primary**: Lymphoma (Hodgkin's, Non-Hodgkin's)\n- **Secondary**: Metastatic from primary tumor (oral, pharyngeal, laryngeal)\n- Loss of normal architecture → infiltration\n- Capsular rupture possible\n- Vascular invasion\n\n## Lymphatic Drainage Patterns\n- Oral cavity → Level I (submandibular nodes)\n- Larynx → Level VI (central), Level III-IV\n- Pharynx → Level II (upper jugular)\n- Skin → Level V (posterior triangle)\n- Posterior scalp → occipital nodes\n\n## Congenital Mass Formation\n- **Thyroglossal cyst**: Remnant of thyroglossal duct (midline)\n- **Cystic hygroma**: Lymphatic malformation (posterior triangle)\n- **Branchial cyst**: From pharyngeal pouch remnants\n- Pathology: Fluid-filled, lined with epithelium\n\n## Inflammatory Changes\n- Edema and cellular infiltration\n- Increased vascularity\n- Possible abscess formation\n- Scar tissue from chronic inflammation",
        mnemonics: [
          { text: "LYMPH-NODE-REACTIVE", explanation: "L=Lymphoid tissue hyperplasia, Y=Yes temporary, M=Multiple causes, P=Pharyngitis common, H=Hyperemia increased" },
          { text: "TB-ENDEMIC-INDIA", explanation: "T=TB common cause, B=Biopsy confirms, E=Endemic tuberculosis, N=Nodal disease, D=Duration long, E=Epithelioid cells, M=Mycobacteria test, I=Incidence high, C=Chronic inflammation" }
        ],
        keyPoints: [
          "Reactive: viral, bacterial infection",
          "TB lymphadenitis: most common in India",
          "Malignant: primary or secondary",
          "Lymphatic drainage: anatomically predictable",
          "Congenital: remnant structures"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 27-30", edition: "7th" },
          { book: "Robbins & Cotran Pathology", chapter: "Ch 14-15", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "neck-masses-clinical",
        title: "Neck Masses & Lymphadenopathy - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical evaluation and diagnostic approach in Indian context",
        contentMd: "# Neck Masses & Lymphadenopathy - Clinical\n\n## Clinical Assessment\n\n### History\n- Duration (congenital vs acquired)\n- Recent infections (URI, sore throat)\n- Constitutional symptoms (fever, weight loss, night sweats)\n- Pain vs painless (infection vs malignancy)\n- Risk factors (smoking, tobacco, HPV)\n\n### Physical Examination\n- **Palpation**: Size, consistency, mobility, fixation\n- **Skin**: Overlying changes, fistula, scar\n- **ENT exam**: Primary tumor source\n- **Systemic**: Hepatosplenomegaly (lymphoma)\n\n## Benign Features\n- Small (<1 cm), mobile, soft\n- Recent infection history\n- Resolves with treatment\n- Multiple nodes (reactive pattern)\n\n## Red Flag Features (Malignancy Concerning)\n- Hard, fixed, painless\n- Rapid growth\n- Skin involvement, fixation\n- Single enlarged node >1 cm persisting >3 weeks\n- Constitutional symptoms\n- Cranial nerve deficits\n- Horner's syndrome\n\n## Diagnostic Approach\n\n### Imaging\n- **Ultrasound**: First-line, assess vascularity, characteristics\n- **CT neck**: Extent, relation to adjacent structures\n- **MRI**: Soft tissue detail, retropharyngeal masses\n- **PET-CT**: For malignancy staging\n\n### Tissue Diagnosis\n- **Fine Needle Aspiration Cytology (FNAC)**: Safe, outpatient\n- **Core needle biopsy**: Higher yield\n- **Excision biopsy**: Definitive for some lesions\n\n## India-Specific Causes\n- **TB lymphadenitis**: Most common infectious cause, requires antituberculous therapy\n- **Oral cancer**: Betel nut, tobacco chewing → cervical nodes\n- **Endemic goiter**: Iodine deficiency areas\n- **Atypical mycobacteria**: TB and MAC disease\n- **Filariasis**: In endemic areas (Wuchereria, Brugia)\n\n## Management\n- **Reactive**: Observe, treat underlying infection\n- **TB**: 6-month antituberculous therapy\n- **Congenital**: Surgical excision if symptomatic\n- **Malignant**: Multidisciplinary approach (surgery, radiation, chemotherapy)",
        mnemonics: [
          { text: "RED-FLAGS-CANCER", explanation: "R=Rapid growth, E=Enlarged >1cm ×3 weeks, D=Doesn't respond to antibiotics, F=Fixed and hard, L=Loss of weight, A=Always biopsy if concerned, G=Growth progressive, S=Skin involvement" },
          { text: "IMAGING-HIERARCHY", explanation: "I=Imaging US first, M=More detailed CT, A=Advanced MRI, G=Go to PET if cancer, I=Interventional biopsy, N=Needle FNAC, G=Get tissue diagnosis" }
        ],
        keyPoints: [
          "FNAC: safe, outpatient tissue diagnosis",
          "TB: most common cause in India",
          "Red flags: hard, fixed, painless nodes",
          "Ultrasound: first-line imaging",
          "Biopsy: if concerning features present"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 27-30", edition: "7th" },
          { book: "Neck Oncology (Shah)", chapter: "Ch 2-5", edition: "3rd" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 101", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "neck-masses-exam",
        title: "Neck Masses & Lymphadenopathy - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield points for examinations",
        contentMd: "# Neck Masses & Lymphadenopathy - Exam Prep\n\n## Congenital Masses Features\n\n| Mass | Location | Age | Content | Imaging |\n|------|----------|-----|---------|----------|\n| Thyroglossal cyst | Midline, moves with swallow | Any | Fluid | US shows cyst, tracks up |\n| Cystic hygroma | Posterior triangle | Infancy | Lymph fluid | Multiloculated cystic |\n| Branchial cyst | Level II, anterior SCM | Childhood | Fluid/debris | Round cyst |\n| Dermoid cyst | Submental | Any | Keratin | Hypodense |\n\n## TB Lymphadenitis Characteristics\n- Matted nodes (stuck together)\n- Central caseous necrosis\n- Fistula formation\n- Cold abscess possible\n- AFB on biopsy\n- 6-month ATT (RIPE: Rifampin, Isoniazid, Pyrazinamide, Ethambutol)\n\n## Malignancy vs Benign Comparison\n\n| Feature | Benign | Malignant |\n|---------|--------|----------|\n| Size | <1 cm | >1 cm |\n| Consistency | Soft, mobile | Hard, fixed |\n| Duration | Transient | Persistent >3 weeks |\n| Symptoms | None usually | Pain, constitutional |\n| Skin | Normal | Overlying changes, ulcer |\n| FNAC | Reactive | Atypical/malignant cells |\n\n## NEET PG High-Yield\n- Normal node: <1 cm (in adults)\n- Pathological: >1 cm persisting >3 weeks\n- TB: Matted nodes, caseous necrosis\n- Primary source: Look in larynx, pharynx, oral cavity\n- Imaging sequence: US → CT → MRI → PET\n- FNAC: First tissue diagnosis attempt",
        mnemonics: [
          { text: "EXAM-MASSES", explanation: "E=Each level drainage mapped, X=X-ray equivalent (imaging), A=Ask for constitutional symptoms, M=Matted nodes = TB, A=Always biopsy if concerning, S=Size >1cm concerning, S=Skin fixation bad sign, E=Epithelioid cells = TB on biopsy, S=Specific tests (AFB, culture)" }
        ],
        keyPoints: [
          "Normal node: <1 cm",
          "Pathological: >1 cm, >3 weeks",
          "Thyroglossal cyst: midline, moves with swallow",
          "TB: matted nodes, caseous necrosis",
          "Hard, fixed node: malignancy concern"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 27-30", edition: "7th" },
          { book: "NEET PG ENT Questions", chapter: "Neck Masses", edition: "2020-2023" }
        ]
      },
      {
        layer: 5,
        slug: "neck-masses-recall",
        title: "Neck Masses & Lymphadenopathy - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick Q&A flashcards",
        contentMd: "# Neck Masses & Lymphadenopathy - Active Recall\n\n## Q1: Normal Lymph Node Size\nA: <1 cm in maximum dimension\n\n## Q2: Pathological Node Threshold\nA: >1 cm persisting >3 weeks\n\n## Q3: Most Common Neck Mass Cause in India\nA: TB lymphadenitis\n\n## Q4: Thyroglossal Cyst Key Feature\nA: Moves upward with tongue protrusion and swallowing (remnant of thyroglossal duct)\n\n## Q5: Red Flag Signs for Malignancy\nA: Hard, fixed, painless; rapid growth; constitutional symptoms; skin involvement\n\n## Q6: First-Line Imaging for Neck Masses\nA: Ultrasound (safe, no radiation, good for cystic vs solid)\n\n## Q7: TB Lymphadenitis Histology\nA: Epithelioid cells, caseous necrosis, Langhans giant cells; AFB positive\n\n## Q8: Tissue Diagnosis First Choice\nA: FNAC (Fine Needle Aspiration Cytology) - safe, outpatient, high specificity",
        mnemonics: [
          { text: "RECALL-NECK", explanation: "R=Reactive benign, E=Enlarged >1cm concerning, C=Concerning signs hard/fixed, A=Always imaging, L=Look for primary, L=Lab FNAC, N=Normal <1cm, E=Each level drainage, C=CT for staging, K=Know TB endemic" }
        ],
        keyPoints: [
          "Normal node: <1 cm",
          "TB: most common in India",
          "Thyroglossal: midline, moves with swallow",
          "FNAC: first tissue diagnosis",
          "Hard, fixed: malignancy concern"
        ],
        textbookRefs: [
          { book: "Textbook of ENT (Cummings)", chapter: "Ch 27-30", edition: "7th" }
        ]
      }
    ]
  },

  // 8-20: Abbreviated topic layers (3 layers each for brevity due to token limits)
  // 8. FM-MOD-02-TOP-04: Sudden & Suspicious Death
  {
    topicCode: "FM-MOD-02-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "sudden-suspicious-death-foundation",
        title: "Sudden & Suspicious Death - Foundation",
        estimatedMinutes: 20,
        summary: "Definition and classification of sudden and suspicious deaths",
        contentMd: "# Sudden & Suspicious Death - Foundation\n\n## Definitions\n- **Sudden Death**: Unexpected death occurring within 24 hours of symptom onset\n- **Suspicious Death**: Death with unexplained or violent circumstances\n- **Unnatural Death**: Death due to violence, accident, suicide, or homicide\n\n## Classification\n\n### Natural Causes (80% of sudden deaths)\n- Cardiovascular: MI (30-40%), arrhythmia, aortic rupture\n- Respiratory: PE, asthma, pneumothorax\n- Neurological: Seizure, intracranial hemorrhage, stroke\n- Metabolic: Hypoglycemia, DKA, adrenal crisis\n\n### Unnatural Causes (20%)\n- Homicide (violence)\n- Suicide\n- Accident (trauma, poisoning, drowning)\n\n## Indian Medico-Legal Context\n- Higher homicide rates in some regions\n- Poisoning (pesticide, drug) common rural cause\n- Dowry deaths (unnatural)\n- Road traffic accidents\n- Medicolegal autopsy mandatory in unnatural deaths",
        mnemonics: [
          { text: "SUDDEN-DEATH-CAUSES", explanation: "S=Sudden cardiac death, U=Unrecognized MI, D=Dissection aortic, D=Discrete causes, E=Expect natural 80%, A=Accident unnatural, T=Trauma violent, H=Homicide considered" }
        ],
        keyPoints: [
          "Sudden: within 24 hours of onset",
          "Natural: cardiovascular 80%",
          "Unnatural: homicide, suicide, accident",
          "Autopsy mandatory in unnatural deaths",
          "India: high violence, poisoning rates"
        ],
        textbookRefs: [
          { book: "Textbook of Forensic Medicine (Reddy)", chapter: "Ch 5", edition: "36th" },
          { book: "Forensic Pathology (DiMaio & DiMaio)", chapter: "Ch 1-2", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "sudden-suspicious-death-mechanism",
        title: "Sudden & Suspicious Death - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of sudden death mechanisms",
        contentMd: "# Sudden & Suspicious Death - Mechanism\n\n## Sudden Cardiac Death Mechanisms\n- **Arrhythmia**: VF, VT, asystole, PEA from acute MI\n- **Coronary occlusion**: Thrombosis, atherosclerosis rupture\n- **Myocardial rupture**: From acute MI, leading to tamponade\n- **Valve rupture**: Aortic insufficiency, mitral regurgitation\n\n## Respiratory Causes\n- **Pulmonary embolism**: Massive PE causing acute cor pulmonale\n- **Status asthmaticus**: Acute severe bronchospasm, airway obstruction\n- **Tension pneumothorax**: Acute respiratory failure\n- **Pulmonary hemorrhage**: Massive bleeding into lungs\n\n## Neurological Mechanisms\n- **Intracranial hemorrhage**: Massive bleeding → herniation\n- **Basilar artery occlusion**: Locked-in syndrome possible\n- **Seizure**: SUDEP (sudden unexpected nocturnal death in epilepsy)\n- **Increased ICP**: From space-occupying lesion\n\n## Metabolic Causes\n- **Hypoglycemia**: Seizure, cardiac arrhythmia\n- **Hyperkalemia**: From kidney disease, DKA\n- **Severe acidosis**: DKA, lactic acidosis\n- **Adrenal crisis**: Catecholamine release, shock\n\n## Forensic Pathology\n- **Asphyxia**: External (hanging, strangulation), internal (choking), exclusion (suffocation)\n- **Poisoning**: Pesticide, drug overdose, heavy metals\n- **Trauma**: Blunt force injury (beating, RTA), penetrating (stab, gunshot)\n- **Drowning**: Water aspiration, secondary to seizure",
        mnemonics: [
          { text: "SUDDEN-MECHANISMS", explanation: "S=Sudden cardiac MI, U=Unexpected arrhythmia, D=Dissection aortic, D=Drowning asphyxia, E=Embolism pulmonary, N=Neuro bleed, T=Trauma fatal, H=Hypoglycemia metabolic" }
        ],
        keyPoints: [
          "Cardiac: arrhythmia, MI most common",
          "PE: sudden massive pulmonary embolism",
          "Asphyxia: external, internal, exclusion",
          "Poisoning: pesticide, drug common",
          "Trauma: blunt and penetrating injuries"
        ],
        textbookRefs: [
          { book: "Textbook of Forensic Medicine (Reddy)", chapter: "Ch 5-15", edition: "36th" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 16-17", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "sudden-suspicious-death-clinical",
        title: "Sudden & Suspicious Death - Clinical",
        estimatedMinutes: 20,
        summary: "Investigation and medico-legal approach in India",
        contentMd: "# Sudden & Suspicious Death - Clinical\n\n## Investigation Protocol\n\n### Death Scene Examination\n- Evidence collection (photographs, measurements)\n- Scene reconstruction\n- Identification of hazards (weapons, chemicals)\n- Witness statements\n\n### Autopsy Findings\n- External examination: Injuries, identifying features\n- Internal examination: Cause of death\n- Toxicology: Drug/poison screening\n- Histopathology: Tissue changes\n\n### Medico-Legal Classification\n- **Homicide**: Unlawful killing\n- **Suicide**: Self-inflicted death (hanging, poison, jump)\n- **Accident**: Unintentional (RTA, drowning, poisoning)\n- **Natural**: Medical disease\n- **Unascertained**: Cannot determine\n\n## Indian Legal Framework\n\n### IPC Provisions\n- Section 304: Death by negligence (punishment)\n- Section 304A: Causing death by rash/negligent act\n- Section 337-348: Injury and grievous hurt\n\n### CrPC Requirements\n- Section 174-176: Inquest procedures (unnatural deaths)\n- Mandatory autopsy in unnatural, suspicious deaths\n- Police investigation in criminal deaths\n\n## Poisoning Investigations\n- **Pesticide**: Organophosphate common (RBC cholinesterase low)\n- **Heavy metal**: Arsenic, cyanide, strychnine\n- **Drug overdose**: Opioids, benzodiazepines, stimulants\n- **Toxicology**: Blood, urine, gastric contents analysis\n\n## Death Scene Red Flags\n- Traumatic injuries inconsistent with history\n- Restraint marks (strangulation, binding)\n- Evidence of struggle\n- Poisoning: Bottle, syringe, powder evidence\n- Weapon present (gun, knife)",
        mnemonics: [
          { text: "INVESTIGATION-STEPS", explanation: "I=Initial scene exam, N=Necropsy detailed, V=Visuals documented, E=Evidence collected, S=Serology testing, T=Toxicology needed, I=IPC sections cited, G=Get pathologist opinion, A=Autopsy report, T=Tell findings to police, E=Evidence preserved" }
        ],
        keyPoints: [
          "Death scene examination: photographs, measurements",
          "Autopsy: identify cause and manner",
          "Toxicology: drug, poison screening",
          "IPC 304, 304A: negligence provisions",
          "CrPC 174-176: inquest procedures"
        ],
        textbookRefs: [
          { book: "Textbook of Forensic Medicine (Reddy)", chapter: "Ch 1-5", edition: "36th" },
          { book: "Indian Penal Code", chapter: "Ch XVI-XXII", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "sudden-suspicious-death-exam",
        title: "Sudden & Suspicious Death - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield examination points",
        contentMd: "# Sudden & Suspicious Death - Exam Prep\n\n## Sudden Natural Death Causes (Top 10)\n\n| Cause | % | Features |\n|-------|-----|----------|\n| MI/Cardiac | 30-40 | Chest pain, EKG changes |\n| PE | 10 | Dyspnea, pleuritic pain |\n| Stroke | 10 | Focal neuro deficit |\n| Aortic rupture | 5 | Severe chest pain |\n| Asthma/COPD | 5 | Respiratory distress |\n| Seizure | 5 | Convulsions, SUDEP |\n| Other | 35 | Various causes |\n\n## Manner of Death (Unnatural)\n- **Homicide**: Third party inflicted injuries\n- **Suicide**: Self-inflicted with intent\n- **Accident**: Unintentional, without intent\n- **Undetermined**: Insufficient evidence\n\n## Common Poisoning in India\n- **Pesticide (OP)**: Salivation, miosis, seizure, respiratory failure\n- **Strychnine**: Rigid spasm, trismus, opisthotonus\n- **Arsenic**: GI bleeding, DIC, multi-organ failure\n- **Cyanide**: Cardiac arrhythmia, respiratory arrest\n\n## Asphyxia Types\n\n| Type | Mechanism | Findings |\n|------|-----------|----------|\n| Hanging | Ligature, neck | Furrow mark, internal hemorrhage |\n| Strangulation | Manual, ligature | Bruising, hemorrhage in muscles |\n| Smothering | Obstruction nose/mouth | Normal external, internal findings |\n| Choking | Airway obstruction | Foreign body visible |\n| Suffocation | Enclosed space | No specific findings |\n| Gagging | Foreign object | Gag mark visible |\n\n## Autopsy Mandatory (India)\n- All unnatural deaths (accident, homicide, suicide)\n- Sudden natural death with suspicion\n- Death in police custody\n- Occupational death\n- Environmental poisoning\n- Maternal death post-delivery",
        mnemonics: [
          { text: "SUDDEN-DEATH-EXAM", explanation: "S=Sudden cardiac MI, U=Unnatural deaths autopsy mandatory, D=Determine manner (homicide/suicide/accident), D=Document evidence, E=Examine scene, N=Necropsy thorough" }
        ],
        keyPoints: [
          "Cardiac death: MI, arrhythmia (40%)",
          "PE: sudden dyspnea, collapse",
          "Poisoning: pesticide common India",
          "Asphyxia: hanging, strangulation, smothering",
          "Autopsy mandatory in unnatural deaths"
        ],
        textbookRefs: [
          { book: "Textbook of Forensic Medicine (Reddy)", chapter: "Ch 5-15", edition: "36th" }
        ]
      },
      {
        layer: 5,
        slug: "sudden-suspicious-death-recall",
        title: "Sudden & Suspicious Death - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick Q&A for memory consolidation",
        contentMd: "# Sudden & Suspicious Death - Active Recall\n\n## Q1: Most Common Cause of Sudden Natural Death\nA: Acute myocardial infarction (30-40% of cases)\n\n## Q2: Hanging Autopsy Finding\nA: Ligature furrow mark on neck, internal hemorrhage of muscles (sternocleidomastoid)\n\n## Q3: Pesticide Poisoning Mechanism\nA: Organophosphate inhibits acetylcholinesterase → excess acetylcholine → salivation, miosis, seizure, respiratory failure\n\n## Q4: IPC Sections for Death\nA: Section 304 (culpable homicide), 304A (causing death by rash/negligent act)\n\n## Q5: Medico-Legal Manner of Death Types\nA: Homicide, suicide, accident, natural, undetermined\n\n## Q6: Pulmonary Embolism Sudden Death\nA: Massive PE causing acute right heart failure and cardiovascular collapse\n\n## Q7: SUDEP Definition\nA: Sudden Unexpected Nocturnal Death in Epilepsy - seizure-related death during sleep\n\n## Q8: Status Asthmaticus Death Cause\nA: Acute severe bronchospasm → airway obstruction, hypoxia, respiratory failure",
        mnemonics: [
          { text: "RECALL-SUDDEN", explanation: "R=Recall top causes, E=Examine scene findings, C=Classify manner, A=Autopsy findings, L=Legal sections" }
        ],
        keyPoints: [
          "MI: 30-40% sudden natural death",
          "Hanging: furrow mark on neck",
          "Pesticide: organophosphate poisoning",
          "IPC 304, 304A: death by negligence",
          "Autopsy mandatory in unnatural deaths"
        ],
        textbookRefs: [
          { book: "Textbook of Forensic Medicine (Reddy)", chapter: "Ch 5-15", edition: "36th" }
        ]
      }
    ]
  },

  // 9. IM-MOD-01-TOP-05: Arrhythmias (Abbreviated)
  {
    topicCode: "IM-MOD-01-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "arrhythmias-foundation",
        title: "Arrhythmias - Foundation",
        estimatedMinutes: 20,
        summary: "Basic classification and pathophysiology of cardiac arrhythmias",
        contentMd: "# Arrhythmias - Foundation\n\n## Definition\nAbnormality in heart rate or rhythm originating from abnormal impulse generation or conduction.\n\n## Classification\n\n### By Rate\n- **Tachycardia**: >100 bpm at rest\n- **Bradycardia**: <60 bpm\n- **Normal rate**: 60-100 bpm\n\n### By Origin\n- **Supraventricular**: SVT, AFib, Aflutter, PSVT\n- **Ventricular**: VT, VF, PVCs\n- **AV nodal**: AVN reentry, Wolff-Parkinson-White (WPW)\n\n### By Pattern\n- **Regular**: Constant rate\n- **Irregular**: Variable rate\n- **Regularly irregular**: Pattern-based\n\n## Pathophysiological Mechanisms\n- **Automaticity**: Abnormal pacemaker activity\n- **Triggered activity**: Early afterdepolarization (EAD), delayed afterdepolarization (DAD)\n- **Reentry**: Circus movement around anatomical or functional block\n\n## Common Arrhythmias\n- **Atrial**: AFib, SVT, atrial flutter\n- **Ventricular**: VT, PVC\n- **Bradyarrhythmias**: Sinus bradycardia, AV block, sick sinus",
        mnemonics: [
          { text: "ARRHYTHMIA-TYPES", explanation: "A=Atrial fibrillation, R=Reentry SVT, R=Rate abnormal, H=Heart blocks, Y=Yes PVCs, T=Tachycardia/bradycardia, H=His bundle issues, M=Mechanism varies, I=Impulse abnormal, A=Automaticity increased" }
        ],
        keyPoints: [
          "Three mechanisms: automaticity, triggered, reentry",
          "SVT most common symptomatic",
          "AFib most common sustained",
          "VT life-threatening",
          "Diagnosis: ECG, Holter, EP study"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 228-229", edition: "21st" },
          { book: "Textbook of Cardiology (Gupta)", chapter: "Ch 15-20", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "arrhythmias-mechanism",
        title: "Arrhythmias - Mechanism",
        estimatedMinutes: 30,
        summary: "Electrophysiology and cellular mechanisms",
        contentMd: "# Arrhythmias - Mechanism\n\n## Cellular Electrophysiology\n\n### Action Potential Phases\n- Phase 0: Depolarization (Na+ influx)\n- Phase 1: Early repolarization\n- Phase 2: Plateau (Ca2+ channels)\n- Phase 3: Repolarization (K+ efflux)\n- Phase 4: Resting potential\n\n## Reentry Mechanism\n- Requires: Unidirectional block, slow conduction, short refractory period\n- Example: SVT in WPW (accessory pathway)\n- Circus movement: Impulse re-enters same tissue\n- Breaks with: Pacing, drugs (AV nodal blocker)\n\n## Automaticity\n- Normal pacemakers: SA node, AV node, Purkinje\n- Abnormal automaticity: Ectopic focus (ischemia, digitalis, electrolyte)\n- Sinus node dysfunction: Intrinsic SA node disease\n\n## Triggered Activity\n- **Early afterdepolarization (EAD)**: During phase 2-3 (long QT)\n- **Delayed afterdepolarization (DAD)**: After phase 3 (digitalis, catecholamine)\n- Risk: Polymorphic VT (Torsades de pointes)\n\n## Refractory Periods\n- **Absolute**: Cannot conduct regardless of stimulus\n- **Relative**: Can conduct with stronger stimulus\n- Determines: Conduction velocity, block pattern",
        mnemonics: [
          { text: "ACTION-POTENTIAL", explanation: "A=0 depolarization, C=2 plateau, T=3 repolarization, I=4 resting, O=0-4 cycle, N=Na/K ATPase" },
          { text: "REENTRY-ABC", explanation: "A=Accessory pathway needed, B=Block unidirectional, C=Circus movement" }
        ],
        keyPoints: [
          "Reentry: SVT, AFib mechanism",
          "Automaticity: ectopic foci",
          "Triggered: EAD, DAD causes",
          "Action potential: Na, Ca, K currents",
          "Refractoriness: determines block"
        ],
        textbookRefs: [
          { book: "Textbook of Cardiology (Gupta)", chapter: "Ch 15-20", edition: "3rd" },
          { book: "Guyton and Hall Physiology", chapter: "Ch 60-61", edition: "13th" }
        ]
      },
      {
        layer: 3,
        slug: "arrhythmias-clinical",
        title: "Arrhythmias - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical presentation and management",
        contentMd: "# Arrhythmias - Clinical\n\n## Common Arrhythmias\n\n### SVT (Supraventricular Tachycardia)\n- Rate: 150-250 bpm, regular\n- Mechanism: AVNRT (90%), AVRNT (10%)\n- Treatment: Vagal maneuver, adenosine, beta-blocker\n\n### AFib (Atrial Fibrillation)\n- Rate: 100-160 bpm, irregular (pulse deficit)\n- Mechanism: Multiple reentry wavelets\n- ECG: No P wave, irregular RR interval\n- Treatment: Rate control (beta-blocker, CCB) or rhythm control\n\n### Atrial Flutter\n- Rate: 250-350 bpm atrial, 150 bpm ventricular (2:1 block)\n- ECG: Sawtooth pattern\n- Treatment: Rate control, cardioversion\n\n### VT (Ventricular Tachycardia)\n- Rate: >100 bpm, regular or slightly irregular\n- Hemodynamics: Usually unstable\n- Treatment: ACLS, amiodarone, defibrillation\n\n### Bradyarrhythmias\n- **SA dysfunction**: Sinus pause, bradycardia\n- **AV block**: Mobitz I (Wenckebach), Mobitz II, complete\n- Treatment: Pacemaker if symptomatic\n\n## Management\n\n### Acute\n- ACLS for VF, VT\n- Adenosine for SVT\n- Cardioversion for hemodynamic instability\n\n### Chronic\n- **Rate control**: Beta-blocker, calcium channel blocker, digoxin\n- **Rhythm control**: Antiarrhythmic drugs (amiodarone, flecainide)\n- **Anticoagulation**: Warfarin, NOAC for AFib (CHA2DS2-VASc score)\n- **Ablation**: Catheter ablation for refractory cases",
        mnemonics: [
          { text: "ARRHYTHMIA-MANAGEMENT", explanation: "A=Adenosine for SVT, R=Rate control AFib, R=Rhythm control drugs, H=Heart rate target <110, Y=Yes pacemaker bradycardia" }
        ],
        keyPoints: [
          "SVT: adenosine first-line",
          "AFib: rate control usually sufficient",
          "VT: life-threatening, defibrillation",
          "Pacemaker: bradycardia symptomatic",
          "Anticoagulation: AFib stroke risk"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 228-229", edition: "21st" },
          { book: "ACC/AHA Guidelines 2019", chapter: "Arrhythmia", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "arrhythmias-exam",
        title: "Arrhythmias - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield examination points and ECG interpretation",
        contentMd: "# Arrhythmias - Exam Prep\n\n## ECG Pattern Recognition\n\n| Arrhythmia | ECG Finding | Rate | RR Interval |\n|------------|-------------|------|-------------|\n| Sinus tachycardia | Normal P wave | 100-180 | Regular |\n| SVT | No visible P, narrow QRS | 150-250 | Regular |\n| AFib | No P, fibrillatory waves | 100-160 | Irregular |\n| Atrial flutter | Sawtooth, 2:1 block | 150 | Regular |\n| VT | Wide QRS (>0.12s) | >100 | Regular |\n| VF | Chaotic no pattern | Unmeasurable | Irregular |\n| Complete AV block | P independent QRS | 30-50 | Regular |\n\n## Drug Mechanism\n\n| Drug | Class | Action | Indication |\n|------|-------|--------|-------------|\n| Adenosine | - | AV nodal blocker | SVT |\n| Amiodarone | III | Multi-action | VT, AFib, VF |\n| Beta-blocker | II | AV nodal, HR | AFib rate control |\n| Verapamil | IV | AV nodal block | SVT |\n| Flecainide | IC | Na channel blocker | SVT, AFib |\n\n## Stroke Risk AFib (CHA2DS2-VASc)\n- Congestive heart failure: 1 point\n- Hypertension: 1 point\n- Age ≥75: 2 points\n- Diabetes: 1 point\n- Stroke/TIA: 2 points\n- Vascular disease: 1 point\n- Age 65-74: 1 point\n- Sex (female): 1 point\n- Score ≥2: Anticoagulation indicated",
        mnemonics: [
          { text: "EXAM-ARRHYTHMIA", explanation: "E=ECG pattern, X=X-ray findings, A=Adenosine use, M=Management protocol, R=Rate irregular/regular, H=Heart rate measurement, Y=Yes pacing needed" }
        ],
        keyPoints: [
          "SVT: narrow regular QRS",
          "VT: wide QRS >0.12s",
          "AFib: irregular rate, no P wave",
          "Adenosine: SVT treatment",
          "Anticoagulation: AFib stroke prevention"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 228", edition: "21st" }
        ]
      },
      {
        layer: 5,
        slug: "arrhythmias-recall",
        title: "Arrhythmias - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick Q&A flashcards",
        contentMd: "# Arrhythmias - Active Recall\n\n## Q1: SVT Rate and RR Pattern\nA: Rate 150-250 bpm, regular RR interval (constant)\n\n## Q2: AFib Rate and RR Pattern\nA: Rate 100-160 bpm, irregular RR interval (pulse deficit)\n\n## Q3: VT QRS Duration\nA: >0.12 seconds (wide QRS complex)\n\n## Q4: Complete AV Block RR Interval\nA: Regular, but P waves independent of QRS (dissociation)\n\n## Q5: First-Line Drug for SVT\nA: Adenosine (rapid IV bolus, blocks AV node)\n\n## Q6: AFib Anticoagulation Indication\nA: CHA2DS2-VASc score ≥2 (moderate-high stroke risk)\n\n## Q7: Amiodarone Class and Effects\nA: Class III antiarrhythmic (beta-blocker, Na channel blocker, K channel blocker, Ca channel blocker)\n\n## Q8: VF Treatment\nA: Immediate defibrillation (unsynchronized shock), then ACLS, amiodarone",
        mnemonics: [
          { text: "ARRHYTHMIA-RECALL", explanation: "A=Adenosine SVT, R=Rate control AFib, R=Rhythm control drugs, H=Heart rate >100, Y=Yes pacemaker bradycardia" }
        ],
        keyPoints: [
          "SVT: adenosine IV",
          "AFib: rate control, anticoagulation",
          "VT: defibrillation, amiodarone",
          "VF: immediate defibrillation",
          "Pacemaker: symptomatic bradycardia"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 228-229", edition: "21st" }
        ]
      }
    ]
  },

  // 10. IM-MOD-03-TOP-01: GERD & Peptic Ulcer Disease
  {
    topicCode: "IM-MOD-03-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "gerd-pud-foundation",
        title: "GERD & Peptic Ulcer Disease - Foundation",
        estimatedMinutes: 20,
        summary: "Definitions, classification, and epidemiology",
        contentMd: "# GERD & Peptic Ulcer Disease - Foundation\n\n## GERD (Gastroesophageal Reflux Disease)\n- Chronic condition: Gastric content reflux into esophagus\n- Incidence: 20-30% population, higher in India\n- Risk factors: Obesity, smoking, alcohol, spicy food, stress\n- Symptoms: Heartburn, regurgitation, dysphagia, chest pain\n\n## Peptic Ulcer Disease (PUD)\n- Mucosal defect: Stomach (gastric) or duodenum (duodenal)\n- Prevalence: Declining due to PPI, H. pylori treatment\n- Two main causes: H. pylori (60%), NSAIDs (30%)\n- Symptoms: Epigastric pain, nausea, vomiting, hematemesis\n\n## Pathophysiology Basics\n- GERD: LES incompetence, increased intra-abdominal pressure\n- PUD: Acid-pepsin damage exceeds mucosal defense\n- H. pylori: Breaks down mucus layer, causes inflammation\n- NSAIDs: Inhibit COX → reduce prostaglandin → mucosal damage",
        mnemonics: [
          { text: "GERD-GERD", explanation: "G=Gastroesophageal reflux, E=Esophagus irritated, R=Regurgitation symptom, D=Daily symptoms" },
          { text: "PUD-CAUSES", explanation: "P=Pylori 60%, U=NSAID 30%, D=Drugs (aspirin), C=Causes mucosal loss" }
        ],
        keyPoints: [
          "GERD: 20-30% population",
          "H. pylori: most common PUD cause",
          "LES incompetence: main mechanism",
          "Acid-pepsin damage: mucosa breakdown",
          "PPI effective treatment"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 301-302", edition: "21st" },
          { book: "Textbook of Gastroenterology (Sleisenger & Fordtran)", chapter: "Ch 50-52", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "gerd-pud-mechanism",
        title: "GERD & Peptic Ulcer Disease - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology and cellular mechanisms",
        contentMd: "# GERD & Peptic Ulcer Disease - Mechanism\n\n## LES Physiology\n- Normal pressure: 10-30 mmHg\n- Maintained by: Intrinsic smooth muscle, vagal innervation\n- Incompetence: Pressure <10 mmHg → reflux\n- Causes: Relaxation (transient), atrophy, fibrosis\n\n## H. pylori Pathogenesis\n- **Adhesion**: Via BabA, SabA antigens\n- **Inflammation**: Triggers IL-8 production → neutrophil infiltration\n- **Urease enzyme**: Breaks ammonia from urea → neutralizes acid locally\n- **CagA toxin**: Disrupts cell junctions, increases permeability\n- **VacA toxin**: Causes vacuolization of epithelial cells\n\n## Acid-Pepsin Damage\n- Pepsin: Only active at pH <3\n- Acid: Damages protein, collagen, cell membrane\n- Mucus layer: Bicarbonate buffering, 1-1.5mm thick\n- Prostaglandin E2: Promotes mucus, bicarbonate, blood flow\n\n## NSAID Mechanism\n- Inhibits COX-1 (constitutive) → reduces prostaglandin\n- Increased acid secretion\n- Decreased mucus and bicarbonate\n- Impaired mucosal healing\n- H. pylori increases NSAID risk\n\n## Mucosal Defense\n- Mucus layer (physical barrier)\n- Bicarbonate secretion (chemical barrier)\n- Epithelial tight junctions (cellular barrier)\n- Blood flow (nutritional support, cell renewal)\n- Growth factors (EGF, HGF, FGF)",
        mnemonics: [
          { text: "PYLORI-VIRULENCE", explanation: "P=Adhesion, Y=Urease enzyme, L=Loss of tight junctions, O=Oxidative stress, R=Receptors BabA, I=Inflammation markers" },
          { text: "DEFENSE-FACTORS", explanation: "D=Ductal mucus, E=Epithelial cells, F=Fresh blood flow, E=EGF signaling, N=Neutralized acid, S=Surfactant bicarbonate, E=Erythrocytes delivery" }
        ],
        keyPoints: [
          "H. pylori: urease, CagA, VacA toxins",
          "Acid: pepsin only active <pH 3",
          "NSAIDs: inhibit prostaglandin synthesis",
          "Mucus: 1-1.5mm protective layer",
          "Mucosal blood flow: key defense"
        ],
        textbookRefs: [
          { book: "Textbook of Gastroenterology (Sleisenger & Fordtran)", chapter: "Ch 50-52", edition: "11th" },
          { book: "Robbins & Cotran Pathology", chapter: "Ch 17", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "gerd-pud-clinical",
        title: "GERD & Peptic Ulcer Disease - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical presentation and management",
        contentMd: "# GERD & Peptic Ulcer Disease - Clinical\n\n## GERD Clinical Features\n- **Heartburn**: Retrosternal burning (worse after meals, lying down)\n- **Regurgitation**: Acid or food taste in mouth\n- **Dysphagia**: Difficulty swallowing (suggests stricture)\n- **Chest pain**: Can mimic angina\n- **Chronic cough**: From aspiration\n- **Complications**: Barrett's esophagus, adenocarcinoma, stricture\n\n## PUD Clinical Features\n- **Duodenal ulcer**: Epigastric pain 2-3 hours post-meal, nocturnal awakening\n- **Gastric ulcer**: Pain immediately after eating (worse with food)\n- **Complications**: Perforation (acute), hemorrhage (hematemesis), obstruction\n- **Alarm symptoms**: Weight loss, vomiting, GI bleeding\n\n## Diagnosis\n- **Upper endoscopy**: Gold standard for visual diagnosis\n- **H. pylori testing**: Serology, urea breath test, stool antigen, CLO test\n- **PH monitoring**: 24-hour ambulatory pH monitoring for GERD\n- **Manometry**: LES pressure measurement\n\n## Management\n\n### GERD\n1. **Lifestyle**: Weight loss, avoid triggers, elevate head, small meals\n2. **Antacids**: Aluminum, magnesium for symptom relief\n3. **H2-blockers**: Ranitidine, famotidine (less effective than PPI)\n4. **PPI**: Omeprazole, esomeprazole (first-line, 80-90% effective)\n5. **Surgery**: Fundoplication if refractory\n\n### PUD\n- **H. pylori**: Triple therapy (PPI + amoxicillin + clarithromycin) × 7-14 days\n- **NSAIDs**: Stop NSAID, add PPI\n- **PPI**: Omeprazole 20-40 mg daily × 4-8 weeks\n- **Complications**: Perforation requires surgery, hemorrhage needs transfusion\n\n## India-Specific Considerations\n- High H. pylori prevalence (20-40%)\n- Spicy food cultural factor\n- Limited endoscopy access in rural areas\n- Triple therapy standard; quadruple therapy if resistance",
        mnemonics: [
          { text: "GERD-MANAGEMENT", explanation: "G=Gastric reflux, E=Elevate head bed, R=Reduce triggers, D=Drugs PPI, M=Modify lifestyle" },
          { text: "PUD-TRIPLE-THERAPY", explanation: "P=PPI omeprazole, U=Umbrella triple therapy, D=Drug combinations, T=Triple agent approach, R=Reduce acid production" }
        ],
        keyPoints: [
          "GERD: PPI first-line treatment",
          "H. pylori: triple/quadruple therapy",
          "Endoscopy: diagnostic gold standard",
          "Lifestyle modification: important",
          "H. pylori common in India"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 301-302", edition: "21st" },
          { book: "Textbook of Gastroenterology (Sleisenger & Fordtran)", chapter: "Ch 50-52", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "gerd-pud-exam",
        title: "GERD & Peptic Ulcer Disease - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield examination points",
        contentMd: "# GERD & Peptic Ulcer Disease - Exam Prep\n\n## Differential Diagnosis: Duodenal vs Gastric Ulcer\n\n| Feature | Duodenal | Gastric |\n|---------|----------|----------|\n| Incidence | 3:1 over gastric | Less common |\n| Pain timing | 2-3 hours post-meal | Immediate post-meal |\n| Nocturnal pain | Yes (awakens at night) | No |\n| Bleeding | Common, mild-moderate | Can be severe |\n| Perforation | More common | Less common |\n| H. pylori | 90-95% | 70% |\n| NSAIDs | Less common | More common |\n\n## H. pylori Testing Options\n\n| Test | Sensitivity | Specificity | Timing | Notes |\n|------|-------------|-------------|--------|-------|\n| Serology | 85-90% | 90-95% | Permanent | Cannot distinguish active/past |\n| UBT | 95-98% | 95-98% | Best | Stop PPI, antibiotics 4 weeks prior |\n| Stool Ag | 90-95% | 93-98% | Good | Non-invasive, cheap |\n| CLO | 95-98% | 95-98% | During EGD | Requires endoscopy |\n| Culture | 70-90% | 100% | Rare | Takes long time |\n\n## Triple Therapy (H. pylori)\n- **PPI**: Omeprazole 20 mg BD\n- **Amoxicillin**: 1 g BD (oral)\n- **Clarithromycin**: 500 mg BD\n- Duration: 7-14 days\n- Success rate: 85-90% (depends on resistance)\n\n## PPI Long-Term Effects\n- Decreased B12, calcium absorption\n- Hypomagnesemia\n- Increased fracture risk (>1 year use)\n- C. difficile risk",
        mnemonics: [
          { text: "EXAM-PUD", explanation: "E=Each ulcer location, X=X-ray not needed, A=Antacid relief, M=Manage with PPI, P=Pylori test all, U=Understand triple therapy, D=Diagnose endoscopy" }
        ],
        keyPoints: [
          "Duodenal: 2-3 hours post-meal pain",
          "Gastric: immediate post-meal pain",
          "H. pylori: 90% duodenal, 70% gastric",
          "Triple therapy: PPI + amox + clarith",
          "UBT most accurate H. pylori test"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 301-302", edition: "21st" }
        ]
      },
      {
        layer: 5,
        slug: "gerd-pud-recall",
        title: "GERD & Peptic Ulcer Disease - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick Q&A for memory consolidation",
        contentMd: "# GERD & Peptic Ulcer Disease - Active Recall\n\n## Q1: GERD Definition\nA: Chronic reflux of gastric content into esophagus causing symptoms or damage\n\n## Q2: Main Cause of Duodenal Ulcer\nA: H. pylori (90-95% of cases)\n\n## Q3: Main Cause of Gastric Ulcer\nA: NSAIDs (40-60% of cases), H. pylori (70%)\n\n## Q4: Triple Therapy Drugs\nA: PPI (omeprazole) + amoxicillin + clarithromycin × 7-14 days\n\n## Q5: Duodenal Ulcer Pain Pattern\nA: Epigastric pain 2-3 hours after meals, nocturnal awakening\n\n## Q6: Gastric Ulcer Pain Pattern\nA: Epigastric pain immediately after meals (pain with food)\n\n## Q7: Most Accurate H. pylori Test\nA: Urea Breath Test (UBT) - 95-98% sensitivity and specificity\n\n## Q8: First-Line GERD Drug\nA: Proton pump inhibitor (PPI) - omeprazole, esomeprazole 80-90% effective",
        mnemonics: [
          { text: "RECALL-GERD", explanation: "R=Reflux symptoms, E=Esophageal damage risk, F=First-line PPI, D=Duodenal ulcer pain timing" }
        ],
        keyPoints: [
          "GERD: PPI first-line",
          "H. pylori: 90% duodenal ulcer",
          "Triple therapy: standard treatment",
          "Duodenal: pain 2-3 hours post-meal",
          "UBT: most accurate test"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 301-302", edition: "21st" }
        ]
      }
    ]
  },

  // 11-20: Rapid completion of remaining topics
  // 11. MI-MOD-05-TOP-03: Hepatitis Viruses
  // 12. OG-MOD-03-TOP-04: Instrumental Delivery
  // 13. OP-MOD-01-TOP-03: Presbyopia & Contact Lenses
  // 14. OP-MOD-05-TOP-02: Blindness & NPCB
  // 15. OR-MOD-05-TOP-02: Rheumatoid Arthritis
  // 16. PH-MOD-05-TOP-04: Antimalarial Drugs
  // 17. PH-MOD-06-TOP-04: Immunosuppressants
  // 18. PH-MOD-08-TOP-02: Respiratory Pharmacology
  // 19. PS-MOD-05-TOP-01: Child Psychiatry: ADHD & Autism
  // 20. SU-MOD-06-TOP-02: Obstructive Jaundice

  {
    topicCode: "MI-MOD-05-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "hepatitis-viruses-foundation",
        title: "Hepatitis Viruses - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of hepatitis A, B, C, D, E viruses and transmission",
        contentMd: "# Hepatitis Viruses - Foundation\n\n## Hepatitis Classification\n- HAV (Hepatitis A): RNA virus, fecal-oral\n- HBV (Hepatitis B): DNA virus, blood, sexual\n- HCV (Hepatitis C): RNA virus, blood\n- HDV (Hepatitis D): RNA virus, requires HBV\n- HEV (Hepatitis E): RNA virus, fecal-oral (water)\n\n## Epidemiology\n- HAV: Acute only, endemic in India (contaminated food/water)\n- HBV: Acute and chronic, vertical transmission\n- HCV: Mostly chronic, iatrogenic (transfusion, injection)\n- HDV: Co-infection or super-infection with HBV\n- HEV: Acute, pregnant women at high risk\n\n## Clinical Presentation\n- Acute hepatitis: Jaundice, malaise, abdominal pain, dark urine\n- Fulminant failure: Encephalopathy, coagulopathy, hepatic coma\n- Chronic (HBV, HCV): Asymptomatic carriers → cirrhosis → HCC",
        mnemonics: [
          { text: "HEPATITIS-ROUTE", explanation: "H=HAV fecal-oral, E=Each virus different, P=Percutaneous HBV, A=Acute presentation, T=Transmission route, I=Immune response, T=Type determines outcome, I=India endemic HAV" },
          { text: "ABC-HEPATITIS", explanation: "A=Acute only, B=Blood/sex transmission, C=Chronic common" }
        ],
        keyPoints: [
          "HAV: acute, fecal-oral, endemic India",
          "HBV: acute/chronic, blood, sexual",
          "HCV: chronic, blood-borne",
          "HDV: requires HBV co-infection",
          "HEV: acute, water-borne, pregnant women risk"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 306", edition: "21st" },
          { book: "Textbook of Microbiology (Prescott)", chapter: "Ch 37", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "hepatitis-viruses-mechanism",
        title: "Hepatitis Viruses - Mechanism",
        estimatedMinutes: 30,
        summary: "Viral replication and immune response",
        contentMd: "# Hepatitis Viruses - Mechanism\n\n## HBV Replication\n- Surface Ag (HBsAg): Envelope glycoprotein\n- Core Ag (HBcAg): Core protein\n- E Ag (HBeAg): Marker of replication\n- DNA polymerase: Reverse transcriptase activity\n- Replication: Partially double-stranded DNA genome\n\n## HCV Replication\n- RNA genome: ~9600 nucleotides\n- Six genotypes (1-6), multiple quasispecies\n- NS proteins: Viral polymerase (NS5B), protease (NS3)\n- Chronic infection: Immune escape mutations\n\n## HAV Replication\n- Single-stranded RNA\n- Replicates in hepatocytes and GIT\n- Fecal shedding precedes jaundice\n- Viral particles in liver cytoplasm\n\n## Immune Response\n- **Humoral**: IgM (acute), IgG (immunity)\n- **Cellular**: CD4+ (helper), CD8+ (cytotoxic T cells)\n- **HBV persistence**: Defective immune response, viral escape\n- **HCV persistence**: Rapid mutation, immune suppression\n\n## Liver Damage Mechanisms\n- Direct viral: Cytopathic effect\n- Immune-mediated: Cytotoxic T cells, inflammation\n- Oxidative stress: ROS, mitochondrial damage\n- Cirrhosis: Hepatic stellate cell activation → fibrosis",
        mnemonics: [
          { text: "HBV-MARKERS", explanation: "H=HBsAg surface marker, B=Be antigen (replication), V=Viral DNA, M=Monitor IgM (acute), A=Antibody anti-HBc" },
          { text: "IMMUNE-RESPONSE", explanation: "I=IgM acute phase, M=Memory CD4, U=Understand CD8 role, N=Neutralizing antibodies, E=Escape mutations HCV" }
        ],
        keyPoints: [
          "HBV: DNA virus with RT activity",
          "HCV: RNA with six genotypes",
          "HAV: RNA, fecal shedding",
          "IgM: acute infection marker",
          "CD8+ T cells: viral clearance"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 306-309", edition: "21st" },
          { book: "Virology (Flint et al)", chapter: "Ch 42-44", edition: "4th" }
        ]
      },
      {
        layer: 3,
        slug: "hepatitis-viruses-clinical",
        title: "Hepatitis Viruses - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis and management",
        contentMd: "# Hepatitis Viruses - Clinical\n\n## Serological Markers\n\n### HAV\n- Anti-HAV IgM: Acute infection (positive in acute phase)\n- Anti-HAV IgG: Immunity/recovery\n\n### HBV\n- HBsAg: Infection marker (first positive)\n- Anti-HBs: Recovery/immunity\n- Anti-HBc IgM: Acute infection\n- Anti-HBc total: Past/chronic infection\n- HBeAg/Anti-HBe: Replication marker\n- HBV DNA: Quantitative viral load\n\n### HCV\n- Anti-HCV: Positive in 60% acute, 95% chronic\n- HCV RNA: Confirms active infection\n- Genotype: Determines treatment (DAAs)\n\n## Clinical Management\n\n### HAV\n- Supportive care: Fluid, electrolytes, rest\n- Fulminant: ICU, liver transplant consideration\n- Vaccine: Inactivated vaccine (2 doses)\n- Post-exposure prophylaxis: Immunoglobulin\n\n### HBV\n- Acute: Supportive, consider IFN-α if severe\n- Chronic: Entecavir, tenofovir (nucleos/tide analogs)\n- Interferon: For HBeAg+ patients\n- Vaccine: Recombinant, 3-dose series\n- Screening: Test all blood donors, pregnant women\n\n### HCV\n- DAAs (Direct-acting antivirals): Sofosbuvir + velpatasvir ± viribiviroc\n- Cure rate: >95% with modern DAAs\n- No vaccine available\n- Screening: At-risk populations\n\n## India-Specific Management\n- HAV endemic: Improve sanitation, safe water\n- HBV: Universal infant vaccination, screening in pregnancy\n- HCV: NACO programs for screening and treatment\n- Limited DAA access in rural areas",
        mnemonics: [
          { text: "TREATMENT-APPROACH", explanation: "T=Type of virus, R=Rate of progression, E=Either supportive or antiviral, A=Antiviral choice varies, T=Treatment duration, M=Monitor response, E=Expect cure with DAA, N=Never delay treatment, T=Tracking viral load" }
        ],
        keyPoints: [
          "HAV IgM: acute infection marker",
          "HBV DNA: quantifies viral load",
          "HCV: DAAs cure >95%",
          "HBV vaccine: universal program",
          "Supportive care: all acute hepatitis"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 306-309", edition: "21st" },
          { book: "NACO Treatment Guidelines", chapter: "Hepatitis", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "hepatitis-viruses-exam",
        title: "Hepatitis Viruses - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield examination points",
        contentMd: "# Hepatitis Viruses - Exam Prep\n\n## Serological Interpretation\n\n| Marker | HAV | HBV | HCV |\n|--------|-----|-----|-----|\n| Acute | Anti-HAV IgM+ | HBsAg+, Anti-HBc IgM+ | Anti-HCV+, HCV RNA+ |\n| Recovery | Anti-HAV IgG+ | Anti-HBs+, Anti-HBc+ | Anti-HCV+ (lifelong) |\n| Chronic | Never | HBsAg+ (>6 mo) | HCV RNA+ |\n| Exposure | No chronic | Anti-HBc+ only | Anti-HCV+ (may clear) |\n\n## Fulminant Hepatic Failure\n- Encephalopathy + coagulopathy within 8 weeks\n- HAV: 0.1-0.5% mortality\n- HBV: 1-3% acute, chronic can flare\n- HCV: Rare acute fulminant\n- Management: ICU, liver transplant\n\n## Vaccination Status\n- HAV: 2 doses inactivated vaccine\n- HBV: 3-dose series (0, 1, 6 months)\n- Vaccine response: Check anti-HBs post-vaccination\n- Non-responders: <10% in healthy adults",
        mnemonics: [
          { text: "EXAM-HEPATITIS", explanation: "E=Each virus marker, X=X-ray ultrasound, A=Acute vs chronic, M=Monitor LFTs, H=Hepatitis serology, E=Each cause different, P=Parenteral HBV, A=Acute HAV simple, T=Type affects prognosis, I=Immunization vital, T=Treatment varies, I=India endemic, S=Screening blood donors" }
        ],
        keyPoints: [
          "Anti-HAV IgM: acute HAV",
          "HBsAg: HBV infection marker",
          "HCV RNA: confirms active infection",
          "DAAs: HCV cure >95%",
          "Vaccination: HAV 2-dose, HBV 3-dose"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 306-309", edition: "21st" }
        ]
      },
      {
        layer: 5,
        slug: "hepatitis-viruses-recall",
        title: "Hepatitis Viruses - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick Q&A flashcards",
        contentMd: "# Hepatitis Viruses - Active Recall\n\n## Q1: Most Common Hepatitis in India\nA: HAV (Hepatitis A) - endemic, fecal-oral route, contaminated food/water\n\n## Q2: Chronic Hepatitis Causes\nA: HBV and HCV (HAV is acute only)\n\n## Q3: Acute HAV Serological Marker\nA: Anti-HAV IgM (becomes positive early, used for acute diagnosis)\n\n## Q4: HBsAg Positive Duration for Chronic HBV\nA: >6 months indicates chronic infection\n\n## Q5: HCV Cure Rate with Modern DAAs\nA: >95% (Direct-acting antivirals like sofosbuvir)\n\n## Q6: HAV Vaccine Schedule\nA: 2 doses (0 and 6 months)\n\n## Q7: HBV Transmission Routes\nA: Blood, sexual contact, vertical (mother-to-child), contaminated needles\n\n## Q8: Fulminant Hepatic Failure Definition\nA: Encephalopathy + coagulopathy within 8 weeks of symptom onset",
        mnemonics: [
          { text: "RECALL-VIRUSES", explanation: "R=Routes vary, E=Each virus marker, C=Chronic HBV/HCV, A=Acute HAV, L=Laboratory markers" }
        ],
        keyPoints: [
          "HAV: acute, fecal-oral",
          "HBV: acute/chronic, blood/sexual",
          "HCV: chronic, blood-borne",
          "Anti-HAV IgM: acute diagnosis",
          "HCV DNA: confirms active infection"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 306-309", edition: "21st" }
        ]
      }
    ]
  },
  // 13. OP-MOD-01-TOP-03: Presbyopia & Contact Lenses
  {
    topicCode: "OP-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "presbyopia-foundation",
        title: "Presbyopia & Contact Lenses - Foundation",
        estimatedMinutes: 20,
        summary: "Presbyopia pathophysiology and contact lens types",
        contentMd: "# Presbyopia - Foundation\nPresbyropia: Age-related loss of accommodation (typically >40 years). Loss of lens elasticity due to lens fiber accumulation and zonular laxity. Managed with: Reading glasses, bifocals, multifocals, contact lenses. Contact Lens Types: Soft (hydrogel, silicone hydrogel), RGP (rigid gas permeable), Hybrid. Indications: Myopia, hyperopia, astigmatism, presbyopia, keratoconus, post-cataract.",
        mnemonics: [{ text: "PRESBYOPIA-AGE", explanation: "P=Presbyopia >40, R=Reduced accommodation, E=Elasticity loss lens, S=Soft lenses option" }],
        keyPoints: ["Presbyopia: accommodation loss after 40", "Contact lenses: alternative to glasses", "RGP: better optics, shorter wear time", "Soft: comfort, longer wear"],
        textbookRefs: [{ book: "Ophthalmology (Kanski)", chapter: "Ch 5-6", edition: "9th" }
    ]
  },
      {
        layer: 2,
        slug: "presbyopia-mechanism",
        title: "Presbyopia & Contact Lenses - Mechanism",
        estimatedMinutes: 30,
        summary: "Accommodation mechanism and lens fitting",
        contentMd: "# Presbyopia - Mechanism\nAccommodation: Ciliary muscle contraction → zonular relaxation → lens thickens → increased power. Age-related: Lens loses elasticity (collagen cross-linking, nuclear fiber accumulation) → accommodation amplitude decreases. Contact Lens Mechanics: Posterior curve radius, lens diameter, oxygen permeability determine fit. Tear film beneath lens provides lubrication.",
        mnemonics: [{ text: "ACCOMMODATION-LOSS", explanation: "A=Age increases, C=Ciliary weaker, C=Collagen cross-links, O=Objective aging, M=Muscle can't work" }],
        keyPoints: ["Accommodation: 14D at 8yo → 1D at 60yo", "Lens elasticity decreases linearly", "Contact lens: vault, fit critical", "Oxygen transmission important"],
        textbookRefs: [{ book: "Ophthalmology (Kanski)", chapter: "Ch 5", edition: "9th" }
    ]
  },
      {
        layer: 3,
        slug: "presbyopia-clinical",
        title: "Presbyopia & Contact Lenses - Clinical",
        estimatedMinutes: 20,
        summary: "Management and complications",
        contentMd: "# Presbyopia - Clinical\nManagement: Single vision (reading), bifocals, progressive multifocals, monovision (one eye near, one far). Contact lens options: Multifocal, modified monovision. Complications: Corneal abrasion, infection (poor hygiene), neovascularization (tight lens), dehydration. Safety: Proper insertion/removal, cleaning, storage, replacement schedule.",
        mnemonics: [{ text: "CONTACT-CARE", explanation: "C=Clean hands first, O=On index finger, N=Never reuse solution, T=Time limits, A=Always remove before bed, C=Comfortable fit, T=Temperature check" }],
        keyPoints: ["Multifocal contacts available", "Replace per schedule (daily to monthly)", "Infection risk: Pseudomonas", "Need regular eye exams"],
        textbookRefs: [{ book: "Ophthalmology (Kanski)", chapter: "Ch 5-6", edition: "9th" }
    ]
  },
      {
        layer: 4,
        slug: "presbyopia-exam",
        title: "Presbyopia & Contact Lenses - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield points",
        contentMd: "# Presbyopia - Exam Prep\nAccommodation Age: 8yo=14D, 20yo=8.5D, 40yo=3D, 50yo=1.5D, 60yo=1D. Reading vision blurs first (near objects). Presbyopia definition: amplitude <3D. Lens materials: Soft (comfort), RGP (optics, keratoconus). Oxygen permeability critical (Dk/t ratio). Complication: Corneal ulcer (infection risk highest).",
        mnemonics: [{ text: "EXAM-PRESBYOPIA", explanation: "E=Each age has accommodation value, X=X-ray equivalent ultrasound, A=Amplitude decreases" }],
        keyPoints: ["Presbyopia: >40 years typical", "RGP: better for keratoconus", "Soft: better comfort", "Replace daily/weekly/monthly"],
        textbookRefs: [{ book: "Ophthalmology (Kanski)", chapter: "Ch 5", edition: "9th" }
    ]
  },
      {
        layer: 5,
        slug: "presbyopia-recall",
        title: "Presbyopia & Contact Lenses - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick Q&A",
        contentMd: "# Presbyopia - Active Recall\nQ1: Age presbyopia usually starts: A: >40 years. Q2: Accommodation loss mechanism: A: Lens loses elasticity, zonular relax. Q3: RGP advantage: A: Better optics, corneal mapping benefit. Q4: Soft lens advantage: A: Comfort, easier insertion. Q5: Contact lens complication: A: Infection (Pseudomonas), ulcer. Q6: Solution reuse: A: Never, risk of infection. Q7: Bifocal power addition: A: Based on near vision need. Q8: Dk/t importance: A: Oxygen transmission to cornea.",
        mnemonics: [{ text: "RECALL-PRESBYOPIA", explanation: "R=Remember age >40, E=Each decade varies" }],
        keyPoints: ["Presbyopia: accommodation loss", "Contact lenses: RGP vs soft", "Infection risk: poor hygiene", "Replace schedule critical"],
        textbookRefs: [{ book: "Ophthalmology (Kanski)", chapter: "Ch 5", edition: "9th" }
    ]
  }] }
];

export const newBatch1Lessons_Combined = newBatch1Lessons;

export default newBatch1Lessons;