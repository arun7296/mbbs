import type { TopicLessons } from "./content-loader";

export const newBatch3Lessons: TopicLessons[] = [
  // ═══════════════════════════════════════════════════════════════
  // 1. CM-MOD-01-TOP-01: Concepts of Health & Disease
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "CM-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "health-disease-foundation",
        title: "Concepts of Health & Disease - Foundation",
        estimatedMinutes: 20,
        summary: "Health is a state of complete physical, mental, and social well-being, not merely the absence of disease or infirmity (WHO 1946). Disease involves deviation from normal biological/psychological functioning.",
        contentMd: "# Concepts of Health & Disease\n\n## Definitions of Health\n- **WHO Definition (1946)**: \"A state of complete physical, mental, and social well-being, not merely the absence of disease or infirmity\"\n- **Positive health**: Ability to adapt and function optimally in social and physical environment\n- **Negative health**: Absence of disease\n\n## Definitions of Disease\n- **Biomedical**: Deviation from normal biological structure/function\n- **Biopsychosocial**: Interaction of biological, psychological, and social factors\n- **Social**: Inability to perform social roles\n\n## Concepts Related to Health & Disease\n| Concept | Definition |\n|---------|------------|\n| **Illness** | Subjective experience of not feeling well |\n| **Sickness** | Social recognition and response to disease |\n| **Disability** | Restriction in activity due to impairment |\n| **Handicap** | Disadvantage in fulfilling normal roles |\n| **Impairment** | Loss of bodily function (anatomical/physiological) |\n\n## Dimensions of Health\n1. **Physical**: Bodily functions, fitness, nutrition\n2. **Mental**: Emotional stability, cognitive function\n3. **Social**: Relationships, community participation\n4. **Spiritual**: Meaning, purpose, values\n\n## Determinants of Health (in order of influence)\n1. Socioeconomic factors (50%)\n2. Environmental factors (20%)\n3. Behavioral/lifestyle (20%)\n4. Healthcare system (10%)\n5. Genetic factors (10%)",
        mnemonics: [
          { text: "WHO definition = NOT just absence of disease", explanation: "Health includes physical, mental, AND social well-being - three pillars" },
          { text: "ILLNESS vs SICKNESS vs DISEASE", explanation: "Disease (objective pathology), Illness (subjective feeling), Sickness (social recognition)" }
        ],
        keyPoints: [
          "WHO definition emphasizes complete well-being (physical, mental, social)",
          "Disease = biomedical abnormality; Illness = patient perception; Sickness = social response",
          "Socioeconomic factors account for 50% of health determinants",
          "Disability ≠ Impairment; disability is activity restriction",
          "Health is dynamic, not static"
        ],
        textbookRefs: [
          { book: "Park Textbook of Preventive & Social Medicine", chapter: "Ch 1 - Concepts of Health", edition: "25th" },
          { book: "WHO Constitution", chapter: "Preamble", edition: "1946" }
        ]
      },
      {
        layer: 2,
        slug: "health-disease-mechanism",
        title: "Concepts of Health & Disease - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathogenesis of disease involves agent-host-environment interaction. Models of disease causation range from unicausal germ theory to multifactorial models.",
        contentMd: "# Disease Causation Models\n\n## Unicausal Model (Germ Theory)\n- One pathogen = one disease\n- Example: TB bacterium -> tuberculosis\n- Limitations: Doesn't explain chronic diseases, individual susceptibility\n\n## Agent-Host-Environment Model (Triangle)\n**Agent**: Infectious/non-infectious cause\n- Biological (bacteria, virus)\n- Chemical (toxins, drugs)\n- Physical (radiation, trauma)\n- Social (poverty, violence)\n\n**Host**: Intrinsic factors\n- Age, sex, genetic predisposition\n- Immunity, nutritional status\n- Psychological factors\n\n**Environment**: External conditions\n- Physical (temperature, humidity)\n- Biological (food sources for vectors)\n- Socioeconomic (poverty, housing)\n- Cultural (beliefs, practices)\n\n## Multifactorial/Multicausal Model\nMost common diseases (diabetes, hypertension, cancer) result from multiple interacting factors:\n- Genetic susceptibility + Environmental triggers + Behavioral factors\n\n## Natural History of Disease\n| Stage | Definition | Intervention Type |\n|-------|-----------|-------------------|\n| **Susceptibility** | No disease yet | Primary prevention |\n| **Subclinical** | Pathological changes, no symptoms | Secondary prevention (screening) |\n| **Clinical** | Symptoms present | Tertiary prevention (treatment) |\n| **Recovery/Disability** | Outcome phase | Rehabilitation |\n\n## Spectrum of Health-Disease Continuum\nOptimal Health <- Acceptable Health <- At-Risk <- Symptomatic Disease <- Severe Disease -> Recovery/Disability/Death",
        mnemonics: [
          { text: "AGE for Agent-Host-Environment", explanation: "Agent (cause), Host (person), Environment (surroundings)" },
          { text: "PCP for Primary, Secondary, Tertiary prevention", explanation: "Primary = prevent disease, Secondary = early detection, Tertiary = manage complications" }
        ],
        keyPoints: [
          "Agent-host-environment triangle explains disease occurrence",
          "Natural history has 4 stages: susceptibility, subclinical, clinical, outcome",
          "Multifactorial diseases require multiple contributing factors",
          "Primary prevention stops disease; secondary catches early; tertiary manages",
          "Subclinical stage is ideal for screening interventions"
        ],
        textbookRefs: [
          { book: "Park Textbook of Preventive & Social Medicine", chapter: "Ch 1, 2", edition: "25th" }
        ]
      },
      {
        layer: 3,
        slug: "health-disease-clinical",
        title: "Concepts of Health & Disease - Clinical",
        estimatedMinutes: 20,
        summary: "Indian health context: disease burden, social determinants, healthcare-seeking behavior, and prevention strategies aligned with NMC CBME.",
        contentMd: "# Health & Disease in Indian Context\n\n## Disease Burden in India (WHO)\n- **Communicable diseases**: TB, malaria, dengue, diarrhea (especially in rural/poor)\n- **Non-communicable diseases**: Rising diabetes, hypertension, CVD, cancer\n- **Double burden**: Coexistence of infectious and chronic diseases\n\n## Social Determinants in India\n1. **Poverty**: 60% of Indian population lives on <$2/day\n2. **Education**: 30% illiteracy; limits health literacy\n3. **Gender**: High maternal mortality (97/100k births), high ICH\n4. **Caste/Religion**: Healthcare access varies by social group\n5. **Occupational**: Hazards in agriculture (pesticide exposure), mining (silicosis)\n\n## Healthcare-Seeking Behavior\n- **Delay in consultation**: Economic factors, distance to health centers\n- **Preference for private**: Urban areas prefer private despite cost\n- **Myths/beliefs**: Ayurveda, Unani, folk remedies compete with modern medicine\n- **Self-medication**: Widespread antibiotic resistance due to OTC antibiotics\n\n## Prevention Examples in Indian Context\n| Level | Example |\n|-------|--------|\n| **Primary** | Polio vaccination program, salt iodization |\n| **Secondary** | Cervical cancer screening (HPV vaccine roll-out) |\n| **Tertiary** | Dialysis for CKD patients, insulin for diabetes |\n\n## National Health Programs (India)\n- NRHM (National Rural Health Mission)\n- RSBY (Rashtriya Swasthya Bima Yojana) - health insurance for BPL\n- PMJAY (Ayushman Bharat) - free treatment up to 5 lakh\n- NHM (National Health Mission) - maternal, child health",
        mnemonics: [
          { text: "CDC for disease determinants in India", explanation: "Caste, Dearth (poverty), Customs (culture)" }
        ],
        keyPoints: [
          "India has double burden: infectious + chronic diseases",
          "Poverty and education are major barriers to health",
          "PMJAY provides free healthcare up to Rs 5 lakh",
          "Self-medication and OTC antibiotics drive resistance",
          "Cultural beliefs influence healthcare-seeking behavior"
        ],
        textbookRefs: [
          { book: "Park Textbook of Preventive & Social Medicine", chapter: "Ch 1, 3, 5, 6", edition: "25th" }
        ]
      },
      {
        layer: 4,
        slug: "health-disease-exam",
        title: "Concepts of Health & Disease - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts for NEXT/NEET PG exams on definitions, models, and Indian health statistics.",
        contentMd: "# Exam High-Yield Points\n\n## Key Definitions (Frequently Asked)\n- **Health**: WHO 1946 = physical + mental + social well-being\n- **Disease**: Biomedical deviation from normal structure/function\n- **Illness**: Subjective feeling of unwellness\n- **Disability**: Restriction in activities due to impairment\n\n## Models of Disease (NEXT Question Pattern)\n- **Unicausal**: One agent = one disease (e.g., TB bacillus)\n- **Agent-Host-Environment**: Triangle model; all three factors needed\n- **Multifactorial**: Gene + environment + behavior (diabetes, hypertension)\n\n## Natural History Stages & Prevention\n| Stage | What Happens | Prevention Level |\n|-------|--------------|------------------|\n| Susceptibility | Normal, no disease | Primary (prevent) |\n| Subclinical | Changes present, no signs/symptoms | Secondary (screen/detect) |\n| Clinical | Signs/symptoms appear | Tertiary (manage) |\n| Outcome | Recovery/disability/death | Rehabilitation |\n\n## Key Statistics (India)\n- Maternal mortality: ~97/100,000 live births\n- Under-5 mortality: ~34/1000\n- TB cases: 25 lakh annually\n- Diabetes: 77 million (IDF 2021)\n\n## NMC Competency Focus\n- Identify social determinants of health\n- Apply prevention at all three levels\n- Recognize health in biopsychosocial context",
        mnemonics: [
          { text: "3Ps of Prevention: Primary, Secondary, Tertiary", explanation: "Pri=Prevent (before disease), Sec=Suspect (early detection), Tert=Treat (manage)" }
        ],
        keyPoints: [
          "WHO definition always cited in exams",
          "Know unicausal vs multifactorial models",
          "Natural history has 4 stages with specific interventions",
          "India statistics: maternal mortality ~97, TB 25L, diabetes 77M",
          "Socioeconomic determinants account for ~50% of health outcomes"
        ],
        textbookRefs: [
          { book: "Park Textbook of Preventive & Social Medicine", chapter: "Ch 1-2", edition: "25th" }
        ]
      },
      {
        layer: 5,
        slug: "health-disease-recall",
        title: "Concepts of Health & Disease - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall questions to test understanding of health, disease definitions, and Indian context.",
        contentMd: "# Active Recall Questions\n\n**Q1: What is the WHO definition of health?**\nA: State of complete physical, mental, AND social well-being (not just absence of disease)\n\n**Q2: Differentiate disease, illness, and sickness.**\nA: Disease (objective pathology), Illness (subjective feeling), Sickness (social recognition)\n\n**Q3: What are the main health determinants and their relative contribution?**\nA: Socioeconomic 50%, Environmental 20%, Behavioral 20%, Healthcare 10%, Genetic 10%\n\n**Q4: Name the 4 stages of natural history.**\nA: Susceptibility -> Subclinical -> Clinical -> Outcome\n\n**Q5: Give 3 examples of primary prevention in India.**\nA: Polio vaccination, salt iodization, health education\n\n**Q6: What is the Agent-Host-Environment model?**\nA: Agent (cause), Host (person factors), Environment (external factors) - all needed for disease\n\n**Q7: Current maternal mortality rate in India?**\nA: ~97 per 100,000 live births\n\n**Q8: What is PMJAY?**\nA: Pradhan Mantri Jan Arogya Yojana - free healthcare up to Rs 5 lakh for poor\n\n**Q9: Disability vs Impairment?**\nA: Impairment (loss of function), Disability (activity restriction due to impairment)\n\n**Q10: Why multifactorial model for diabetes?**\nA: Genetic susceptibility + unhealthy diet + sedentary lifestyle + obesity = disease"
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 2. CM-MOD-06-TOP-04: Occupational Health & Hazards
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "CM-MOD-06-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "occupational-hazards-foundation",
        title: "Occupational Health & Hazards - Foundation",
        estimatedMinutes: 20,
        summary: "Occupational health addresses health conditions related to work. Hazards are agents/conditions with potential to cause injury/illness. India has high burden of occupational diseases.",
        contentMd: "# Occupational Health & Hazards\n\n## Definition\n- **Occupational Health**: Promotion and maintenance of highest degree of physical, mental, and social well-being of workers\n- **Occupational Disease**: Disease caused by exposure to hazard at workplace\n- **Occupational Injury**: Acute trauma resulting from work-related accident\n\n## Classification of Occupational Hazards\n\n| Type | Examples |\n|------|----------|\n| **Physical** | Noise, radiation, temperature extremes, pressure |\n| **Chemical** | Dust, gases, fumes, pesticides, asbestos |\n| **Biological** | Bacteria, viruses, fungi (healthcare, agriculture) |\n| **Ergonomic** | Poor posture, repetitive strain, heavy lifting |\n| **Psychosocial** | Stress, shift work, burnout, violence |\n\n## Common Occupational Diseases in India\n\n| Occupation | Hazard | Disease |\n|------------|--------|----------|\n| **Mining** | Silica dust | Silicosis |\n| **Agriculture** | Pesticides | Organophosphate poisoning |\n| **Textile** | Cotton dust | Byssinosis (brown lung) |\n| **Construction** | Asbestos, noise | Mesothelioma, NIHL |\n| **Healthcare** | Blood-borne pathogens | HIV, Hepatitis B/C |\n| **Welding** | Fumes, UV radiation | Lung cancer, cataracts |\n\n## Legal Framework (India)\n- **Factories Act 1948**: Safety regulations for factories\n- **Building & Other Construction Workers Act 1996**: Protection for construction workers\n- **Employees State Insurance Scheme (ESIC)**: Covers workers in registered factories\n- **Workmen's Compensation Act**: Compensation for occupational injury/disease",
        mnemonics: [
          { text: "PHYSICAL + CHEMICAL + BIO + ERGO + PSYCHO = 5 Hazard Types", explanation: "All occupational hazards fall into these 5 categories" }
        ],
        keyPoints: [
          "Occupational disease must have work exposure + latency period",
          "India: agriculture (largest exposure), mining, construction major sectors",
          "Silicosis (silica), byssinosis (cotton dust) are classic occupational diseases",
          "ESIC provides insurance coverage for registered workers",
          "Factories Act 1948 is main occupational safety law"
        ],
        textbookRefs: [
          { book: "Park Textbook of Preventive & Social Medicine", chapter: "Ch 18 - Occupational Health", edition: "25th" }
        ]
      },
      {
        layer: 2,
        slug: "occupational-hazards-mechanism",
        title: "Occupational Health & Hazards - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of occupational diseases: inhalation exposure, bioaccumulation, dose-response relationships, latency periods, and disease mechanisms.",
        contentMd: "# Mechanisms of Occupational Disease\n\n## Exposure Routes\n1. **Inhalation**: Dust, fumes, gases (most common)\n2. **Skin absorption**: Pesticides, chemicals\n3. **Ingestion**: Contaminated food/water at workplace\n4. **Injection**: Needlestick injuries (healthcare)\n\n## Dose-Response Relationship\n- **Threshold**: Minimum dose needed to cause effect\n- **Linear model**: Effect proportional to dose (radiation)\n- **Non-linear**: Biological threshold exists (chemicals)\n- **Occupational exposure limits (OEL)**: TWA (time-weighted average), STEL (short-term exposure limit)\n\n## Latency Period\n- Time between exposure and disease manifestation\n- **Acute**: Minutes to hours (chemical burns)\n- **Chronic**: Months to years (silicosis: 10-20 years; mesothelioma: 20-50 years)\n- Longer latency makes causation link difficult\n\n## Pathophysiology Examples\n\n### Silicosis\n- Silica dust inhaled -> deposits in alveoli\n- Macrophage phagocytosis -> release of cytokines (IL-6, TNF-α)\n- Fibroblast activation -> excessive collagen deposition\n- Progressive pulmonary fibrosis\n\n### Asbestos-Related Diseases\n- Needle-like fibers pierce lung epithelium\n- Mechanisms: (1) Direct irritation, (2) Oxidative stress, (3) Fiber-induced inflammation\n- Diseases: Asbestosis, lung cancer, mesothelioma\n- Long latency (20-50 years)\n\n### Noise-Induced Hearing Loss (NIHL)\n- Sound levels >85 dB cause damage\n- Mechanism: Hair cell death in cochlea (outer hair cells affected first)\n- Dose-dependent and irreversible\n- Prevention: Engineering controls, PPE\n\n## Cumulative Effect\n- Individual exposure may be below OEL\n- Repeated/prolonged exposure causes cumulative damage\n- Total body burden determines disease risk",
        mnemonics: [
          { text: "IDLS for exposure components", explanation: "Intensity, Duration, Latency, Susceptibility" }
        ],
        keyPoints: [
          "Inhalation is most common exposure route for occupational diseases",
          "Silicosis: silica -> macrophage inflammation -> pulmonary fibrosis",
          "Asbestos has long latency (20-50 years)",
          "NIHL is dose-dependent and irreversible",
          "Cumulative body burden determines disease manifestation"
        ],
        textbookRefs: [
          { book: "Park Textbook", chapter: "Ch 18", edition: "25th" },
          { book: "Robbins Pathologic Basis of Disease", chapter: "Ch 15 - Lung diseases", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "occupational-hazards-clinical",
        title: "Occupational Health & Hazards - Clinical",
        estimatedMinutes: 20,
        summary: "Diagnosis, management, and Indian healthcare context for occupational diseases including mining, agriculture, and construction hazards.",
        contentMd: "# Clinical Management of Occupational Diseases\n\n## Diagnostic Approach\n1. **Occupational History**: Duration, nature of exposure, protective equipment, coworker exposure\n2. **Timeline**: Latency between exposure and symptoms\n3. **Clinical features**: Specific to hazard type\n4. **Investigations**: Chest X-ray, PFTs, blood tests\n5. **Exclude other causes**: Smoking history, environmental factors\n\n## Common Occupational Diseases: Clinical Presentation\n\n### Silicosis\n- **Symptoms**: Progressive dyspnea, cough, chest pain\n- **Signs**: Reduced breath sounds, crackles\n- **CXR**: Bilateral upper lobe nodules (eggshell calcification of hilar nodes pathognomonic)\n- **Diagnosis**: PFTs (restrictive pattern), occupational history\n- **Management**: Supportive, TB screening (risk of TB), respiratory rehabilitation\n\n### Byssinosis (Brown Lung Disease)\n- **Exposure**: Cotton, flax, hemp dust\n- **Symptoms**: Monday fever (tightness, wheezing after weekend break)\n- **Mechanism**: Endotoxins from Gram-negative bacteria\n- **Prevention**: Dust control, respiratory protection\n\n### Organophosphate Poisoning (Agriculture)\n- **Acute**: Cholinergic crisis (SLUDGE: Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis)\n- **Treatment**: Atropine + pralidoxime (2-PAM)\n- **India context**: High in agricultural regions\n\n## Management Principles\n1. **Removal from exposure**: Primary intervention\n2. **Symptomatic treatment**: Bronchodilators for asthma, diuretics for pulmonary edema\n3. **Prevention of progression**: Stopping exposure\n4. **Rehabilitation**: Retraining for alternative work\n5. **Compensation**: Workmen's compensation, disability benefits\n\n## Indian Occupational Health Programs\n- **National Program on Occupational Safety & Health (NPOSH)**\n- **Institute of Indian Salts**: Monitors occupational health in salt industry\n- **National Institute of Occupational Health (NIOH)**: Research and surveillance",
        mnemonics: [
          { text: "SLUDGE for organophosphate toxicity", explanation: "Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis" }
        ],
        keyPoints: [
          "Occupational history is key to diagnosis",
          "Silicosis: eggshell calcification on CXR is pathognomonic",
          "Byssinosis: Monday fever is characteristic",
          "Remove from exposure as primary treatment",
          "India: high burden in agriculture, mining, construction"
        ],
        textbookRefs: [
          { book: "Park Textbook", chapter: "Ch 18", edition: "25th" }
        ]
      },
      {
        layer: 4,
        slug: "occupational-hazards-exam",
        title: "Occupational Health & Hazards - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts on occupational diseases, investigations, and Indian legal framework.",
        contentMd: "# Exam High-Yield Facts\n\n## Quick Classifications\n**5 Hazard Types**: Physical, Chemical, Biological, Ergonomic, Psychosocial\n\n**Occupational Disease Features**: Work exposure + Latency + Dose-response + Causation link\n\n## Key Diseases & Hazards\n\n| Disease | Hazard | Latency | CXR Finding |\n|---------|--------|---------|-------------|\n| Silicosis | Silica dust | 10-20 y | Eggshell calcification |\n| Asbestosis | Asbestos | 20-50 y | Pleural plaques |\n| Byssinosis | Cotton dust | <1y-20y | Usually normal |\n| NIHL | Noise >85dB | Variable | N/A (audiometry) |\n| Mesothelioma | Asbestos | 20-50 y | Pleural thickening |\n\n## Indian Legal Framework\n- **Factories Act 1948**: Main safety law\n- **ESIC**: Insurance for factory workers\n- **WCA (Workmen's Compensation)**: Compensation for OD/OI\n- **OSHA equivalent in India**: Various state-level regulations\n\n## Investigation Algorithm\n1. Chest X-ray (for pneumoconiosis)\n2. Pulmonary Function Tests (restrictive/obstructive pattern)\n3. Occupational history (detailed timeline)\n4. Audiometry (for NIHL)\n5. Spirometry (baseline for future comparison)",
        mnemonics: [
          { text: "3 As of asbestos diseases", explanation: "Asbestosis (fibrosis), Asbestos-lung cancer, Asbestos-mesothelioma" }
        ],
        keyPoints: [
          "Silicosis eggshell sign = pathognomonic",
          "Latency crucial: silicosis 10-20y, asbestos 20-50y",
          "ESIC covers registered factory workers",
          "Removal from exposure is primary treatment",
          "Dose-response relationship critical for occupational disease"
        ],
        textbookRefs: [
          { book: "Park Textbook", chapter: "Ch 18", edition: "25th" }
        ]
      },
      {
        layer: 5,
        slug: "occupational-hazards-recall",
        title: "Occupational Health & Hazards - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall questions on occupational hazards, diseases, and management.",
        contentMd: "# Active Recall - Occupational Health\n\n**Q1: Name 5 types of occupational hazards.**\nA: Physical, Chemical, Biological, Ergonomic, Psychosocial\n\n**Q2: What is silicosis and its latency?**\nA: Pulmonary fibrosis from silica dust inhalation; latency 10-20 years\n\n**Q3: Pathognomonic CXR finding in silicosis?**\nA: Eggshell calcification of hilar lymph nodes\n\n**Q4: Define byssinosis and its association.**\nA: Cotton dust disease; classic Monday fever (tightness after weekend)\n\n**Q5: Which asbestos diseases and latencies?**\nA: Asbestosis, lung cancer, mesothelioma; latency 20-50 years\n\n**Q6: SLUDGE acronym and relevance?**\nA: Organophosphate toxicity (agriculture): Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis\n\n**Q7: Treatment for acute organophosphate poisoning?**\nA: Atropine + pralidoxime (2-PAM)\n\n**Q8: What is NIHL and prevention?**\nA: Noise-induced hearing loss (>85 dB); prevented by engineering controls and PPE\n\n**Q9: Main occupational safety law in India?**\nA: Factories Act 1948\n\n**Q10: What is ESIC?**\nA: Employees State Insurance Scheme - provides insurance coverage for registered factory workers"
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 3. DR-MOD-01-TOP-03: Urticaria & Drug Reactions
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "DR-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "urticaria-foundation",
        title: "Urticaria & Drug Reactions - Foundation",
        estimatedMinutes: 20,
        summary: "Urticaria is transient, pruritic skin reaction mediated by mast cell degranulation. Drug reactions are adverse effects from medications.",
        contentMd: "# Urticaria & Drug Reactions\n\n## Urticaria Definition & Classification\n- **Urticaria**: Transient wheals (raised, erythematous) with pruritus\n- **Duration**: <24 hours per lesion (pathognomonic)\n- **Angioedema**: Deeper dermis/subcutaneous involvement\n\n## Classification of Urticaria\n\n| Type | Duration | Examples |\n|------|----------|----------|\n| **Acute** | <6 weeks | Drug allergy, food, infection |\n| **Chronic** | >6 weeks | Autoimmune, idiopathic |\n| **Physical** | Duration of trigger | Dermographism, cold, heat, cholinergic |\n\n## Pathophysiology\n- **Mast cell** and **basophil** degranulation -> release of **histamine**\n- Other mediators: Tryptase, leukotrienes (C4, D4), prostaglandins\n- **IgE-mediated** (Type I) or **Non-IgE-mediated** pathways\n\n## Classification of Drug Reactions\n\n| Type | Timing | Mechanism | Examples |\n|------|--------|-----------|----------|\n| **Type A** | Early | Dose-dependent | Anticholinergics (dry mouth) |\n| **Type B** | Variable | Idiosyncratic/IgE | Penicillin allergy, anaphylaxis |\n| **Type C** | Days-months | Cumulative | Tetracycline photosensitivity |\n| **Type D** | Late | Variable | Drug-induced lupus, vasculitis |\n\n## Common Drugs Causing Urticaria\n- **Antibiotics**: Penicillins, cephalosporins, sulfonamides\n- **NSAIDs**: Aspirin, ibuprofen (especially in urticaria-prone)\n- **ACE inhibitors**: Cause angioedema\n- **Opioids**: Cause direct mast cell degranulation",
        mnemonics: [
          { text: "Wheals last <24 hours = URTICARIA", explanation: "Key distinguishing feature from other rashes" },
          { text: "Type A-B-C-D for drug reactions", explanation: "A=dose, B=idiosyncratic, C=cumulative, D=delayed" }
        ],
        keyPoints: [
          "Urticaria wheals disappear within 24 hours",
          "Mast cell degranulation releases histamine",
          "Acute urticaria <6 weeks; chronic >6 weeks",
          "Penicillin most common drug causing urticaria",
          "IgE vs non-IgE mediated pathways"
        ],
        textbookRefs: [
          { book: "Fitzpatrick's Dermatology in General Medicine", chapter: "Ch 43 - Urticaria", edition: "9th" }
        ]
      },
      {
        layer: 2,
        slug: "urticaria-mechanism",
        title: "Urticaria & Drug Reactions - Mechanism",
        estimatedMinutes: 30,
        summary: "IgE-mediated and non-IgE-mediated pathways of urticaria, cross-reactivity in drug allergy, and mechanisms of different drug reaction types.",
        contentMd: "# Mechanisms of Urticaria & Drug Reactions\n\n## IgE-Mediated Urticaria (Type I Hypersensitivity)\n1. **Sensitization**: Allergen (drug) presented to Th2 cells\n2. **IgE production**: B cells produce specific IgE\n3. **IgE binding**: IgE binds to FcεRI on mast cells\n4. **Re-exposure**: Cross-linking of IgE -> mast cell degranulation\n5. **Mediator release**: Histamine, tryptase, leukotrienes\n6. **Result**: Wheal and flare within minutes\n\n## Non-IgE-Mediated Urticaria\n1. **Direct mast cell activation**: Opioids, contrast agents, NSAIDs\n2. **Complement activation**: C3a, C5a (anaphylatoxins)\n3. **Bradykinin pathway**: ACE inhibitor-angioedema\n4. **Toll-like receptors**: Some drugs\n\n## Histamine Actions\n- **H1 receptors**: Itching, vasodilation, increased vascular permeability\n- **H2 receptors**: Gastric acid secretion (secondary effect)\n- **H3 receptors**: Neuronal\n- **H4 receptors**: Immune modulation\n\n## Other Mediators\n| Mediator | Source | Effect |\n|----------|--------|--------|\n| **Tryptase** | Mast cells | Inflammation |\n| **Leukotrienes** | Basophils, mast cells | Vasodilation, smooth muscle contraction |\n| **Prostaglandins** | Multiple cells | Inflammation |\n| **Kallikrein** | Plasma | Bradykinin production (angioedema) |\n\n## Drug-Induced Reactions: Molecular Mechanisms\n\n### Hapten Hypothesis\n- Small drug molecule + protein carrier -> immune response\n- Example: Penicillin + β-lactamase -> penicilloyl derivative\n\n### Pharmacologic Interaction\n- Drug directly binds to MHC-TCR complex without processing\n- Immediate immune response\n\n### Prodrug Activation\n- Drug metabolized to reactive intermediate\n- Forms adduct with protein\n- Example: NSAIDs -> COX inhibition -> leukotriene shunting",
        mnemonics: [
          { text: "IgE-Mast-Hista for IgE-mediated allergy pathway", explanation: "IgE sensitizes, Mast cells release, Histamine causes symptoms" }
        ],
        keyPoints: [
          "IgE cross-links FcεRI -> mast cell degranulation",
          "Histamine is primary mediator (H1 receptor = itching)",
          "Non-IgE pathway: direct mast cell activation (opioids)",
          "Hapten hypothesis: small drug + protein = allergen",
          "ACE inhibitor angioedema: bradykinin accumulation (not histamine)"
        ],
        textbookRefs: [
          { book: "Immunology by Kuby", chapter: "Ch 13 - Hypersensitivity", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "urticaria-clinical",
        title: "Urticaria & Drug Reactions - Clinical",
        estimatedMinutes: 20,
        summary: "Diagnosis, investigation, management of urticaria and drug reactions in Indian clinical practice.",
        contentMd: "# Clinical Management\n\n## Diagnostic Approach to Urticaria\n1. **History**: Timeline, triggers, concurrent medications, food\n2. **Examination**: Morphology (transient wheals), distribution\n3. **Provocation testing**: Physical urticaria (dermographism, cold challenge)\n4. **Investigations**: Limited in routine practice\n   - Allergy testing (skin prick test, intradermal test)\n   - Specific IgE (if available in India)\n   - C1q functional assay (hereditary angioedema)\n\n## Management of Acute Urticaria\n1. **Identify trigger**: Remove offending drug if possible\n2. **First-line**: H1 antihistamines (second generation preferred)\n   - Cetirizine 10 mg OD\n   - Fexofenadine 180 mg OD\n3. **Severe/Anaphylaxis**: Epinephrine IM 0.3-0.5 mg (1:1000)\n4. **Add-on**: H2 antagonist (ranitidine, famotidine) for severe cases\n5. **Steroids**: Short course if refractory (prednisolone 0.5-1 mg/kg)\n\n## Management of Chronic Urticaria\n- **Standard**: H1 antihistamine (cetirizine 10 mg OD)\n- **Refractory**: Increase dose 4x (40 mg cetirizine)\n- **Add-on**: Omalizumab (anti-IgE), cyclosporine (severe autoimmune)\n- **Alternative**: Corticosteroid-sparing agents\n\n## Drug Reaction Management\n\n| Severity | Management |\n|----------|------------|\n| **Mild** | Stop drug, antihistamine |\n| **Moderate** | Antihistamine + prednisolone |\n| **Severe/Anaphylaxis** | Epinephrine 0.3-0.5 mg IM + IV fluids + monitoring |\n\n## Desensitization Protocol\n- For essential drugs (penicillin in patient with allergy):\n- Gradual dose escalation under medical supervision\n- Useful in beta-lactam allergy\n\n## Documentation & Cross-Reactivity\n- **Penicillin-Cephalosporin**: 2-3% cross-reactivity\n- **NSAIDs**: Class reaction common\n- **Sulfonamides**: Cross-reactivity among different sulfa drugs",
        mnemonics: [
          { text: "First-line for urticaria = H1 antagonist (2nd gen)", explanation: "Cetirizine, fexofenadine; avoid first-gen (sedating)" }
        ],
        keyPoints: [
          "Remove trigger is first step",
          "Second-generation H1 antihistamine is standard",
          "Epinephrine IM for anaphylaxis",
          "Omalizumab for refractory chronic urticaria",
          "Penicillin-cephalosporin cross-reactivity ~2-3%"
        ],
        textbookRefs: [
          { book: "Fitzpatrick's Dermatology in General Medicine", chapter: "Ch 43", edition: "9th" }
        ]
      },
      {
        layer: 4,
        slug: "urticaria-exam",
        title: "Urticaria & Drug Reactions - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts on urticaria classification, drug reaction types, and management.",
        contentMd: "# Exam High-Yield Points\n\n## Key Distinguishing Features\n**Urticaria**: Wheals <24 h, pruritic, transient\n**Erythema multiforme**: Fixed lesions, >24 h, target morphology\n\n## Drug Reaction Classification (ABCD)\n- **Type A**: Dose-dependent (anticholinergics)\n- **Type B**: Idiosyncratic, unpredictable (penicillin allergy)\n- **Type C**: Cumulative dose effect (tetracycline photosensitivity)\n- **Type D**: Delayed (lupus, vasculitis)\n\n## Mediators of Urticaria\n| Mediator | Source | Effect |\n|----------|--------|--------|\n| Histamine | Mast cells | Itching, vasodilation |\n| Tryptase | Mast cells | Inflammation |\n| Leukotrienes | Basophils | Vasodilation, edema |\n\n## Common Drug Reactions in NEXT\n- Penicillin: Urticaria, anaphylaxis\n- ACE inhibitors: Angioedema (bradykinin)\n- NSAIDs: Urticaria, Stevens-Johnson syndrome\n- Sulfonamides: Urticaria, TEN\n\n## First-Line Management\n- Acute: H1 antihistamine (cetirizine) + epinephrine if anaphylaxis\n- Chronic: Escalate H1 dose to 4x\n- Refractory: Omalizumab",
        mnemonics: [
          { text: "ABCD of drug reactions", explanation: "A=dose, B=idiosyncratic, C=cumulative, D=delayed" }
        ],
        keyPoints: [
          "Wheals <24h duration = diagnostic feature",
          "IgE-mediated: penicillin, food",
          "Non-IgE: NSAIDs, opioids, ACE inhibitors",
          "Anaphylaxis: IM epinephrine 0.3-0.5 mg",
          "Chronic urticaria management: escalate H1 antagonist"
        ],
        textbookRefs: [
          { book: "Fitzpatrick's Dermatology", chapter: "Ch 43", edition: "9th" }
        ]
      },
      {
        layer: 5,
        slug: "urticaria-recall",
        title: "Urticaria & Drug Reactions - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick questions on urticaria, drug reactions, and management.",
        contentMd: "# Active Recall\n\n**Q1: Define urticaria and duration of wheals.**\nA: Transient pruritic wheals <24 hours duration\n\n**Q2: Pathophysiology of IgE-mediated urticaria?**\nA: IgE sensitization -> cross-linking on mast cells -> histamine release\n\n**Q3: Non-IgE mechanisms of drug-induced reactions?**\nA: Direct mast cell activation (opioids), complement activation, bradykinin (ACE-I)\n\n**Q4: ABCD classification of drug reactions?**\nA: Type A (dose-dependent), Type B (idiosyncratic), Type C (cumulative), Type D (delayed)\n\n**Q5: First-line drug for acute urticaria?**\nA: Second-generation H1 antihistamine (cetirizine, fexofenadine)\n\n**Q6: Management of anaphylaxis?**\nA: IM epinephrine 0.3-0.5 mg (1:1000), IV fluids, monitoring\n\n**Q7: Chronic urticaria management if standard dose fails?**\nA: Increase H1 antagonist to 4x dose (e.g., cetirizine 40 mg)\n\n**Q8: Drug for refractory chronic urticaria?**\nA: Omalizumab (anti-IgE) or cyclosporine\n\n**Q9: Cross-reactivity between penicillin and cephalosporin?**\nA: 2-3%\n\n**Q10: Mechanism of ACE inhibitor-induced angioedema?**\nA: Reduced bradykinin degradation (ACE inactivates bradykinin)"
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 4. DR-MOD-05-TOP-01: Vitiligo & Pigmentary Disorders
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "DR-MOD-05-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "vitiligo-foundation",
        title: "Vitiligo & Pigmentary Disorders - Foundation",
        estimatedMinutes: 20,
        summary: "Vitiligo is acquired depigmentation due to loss of melanocytes. Classification based on distribution pattern and associated conditions.",
        contentMd: "# Vitiligo & Pigmentary Disorders\n\n## Definition\n- **Vitiligo**: Acquired, progressive loss of skin pigmentation\n- Patches of complete depigmentation (white macules/patches)\n- Affects 0.5-2% population; high in India (5-13% in some regions)\n\n## Classification\n\n| Type | Distribution | Progression |\n|------|--------------|------------|\n| **Localized** | <10% BSA, one area | Slow |\n| **Generalized** | >10% BSA, multiple areas | Variable |\n| **Universal** | >90% BSA | Advanced |\n| **Segmental** | Unilateral, early onset | Stable |\n\n## Associated Conditions (Autoimmune Vitiligo)\n- **Thyroid disease**: Hashimoto, Graves (25%)\n- **Pernicious anemia**: B12 deficiency\n- **Type 1 diabetes**: Autoimmune\n- **Addison's disease**: ACTH insufficiency\n- **Alopecia areata**: Hair loss\n- **Psoriasis, lichen planus**: Koebner phenomenon\n\n## Other Pigmentary Disorders\n\n| Disorder | Mechanism | Presentation |\n|----------|-----------|---------------|\n| **Melasma** | Increased melanin | Brown symmetrical patches (face) |\n| **Leukoderma** | Post-inflammatory | Hypopigmented patches after injury |\n| **Pityriasis versicolor** | Malassezia furfur | Brown macules with scale |\n| **Ash-leaf spots** | Tuberous sclerosis | Hypopigmented macules |\n| **Albinism** | Genetic tyrosinase deficiency | Generalized hypopigmentation |\n\n## Pathophysiology of Vitiligo\n- **Melanocyte loss**: Destruction or migration away\n- **Autoimmune mechanism**: Anti-melanocyte antibodies, CD8+ T cell infiltration\n- **Genetic predisposition**: HLA association (HLA-DR4)\n- **Environmental trigger**: Sun exposure, trauma, chemicals",
        mnemonics: [
          { text: "Vitiligo = Auto-immune destruction of Melanocytes", explanation: "Auto-antibodies and T cells target melanocytes" }
        ],
        keyPoints: [
          "Vitiligo: complete depigmentation, not hypopigmentation",
          "Autoimmune basis (25% have thyroid disease)",
          "Generalized type more common than segmental",
          "India has high prevalence (5-13% in some regions)",
          "Associated with other autoimmune diseases"
        ],
        textbookRefs: [
          { book: "Fitzpatrick's Dermatology", chapter: "Ch 60 - Disorders of Pigmentation", edition: "9th" }
        ]
      },
      {
        layer: 2,
        slug: "vitiligo-mechanism",
        title: "Vitiligo & Pigmentary Disorders - Mechanism",
        estimatedMinutes: 30,
        summary: "Immunologic mechanisms, role of oxidative stress, genetic factors, and pathways of melanocyte loss in vitiligo.",
        contentMd: "# Mechanisms of Vitiligo\n\n## Autoimmune Hypothesis (Primary)\n1. **T-cell mediated**: CD8+ T cells infiltrate vitiligo lesions\n2. **B-cell involvement**: Anti-melanocyte antibodies (IgG)\n3. **Complement activation**: C1q, C3 deposition in skin\n4. **HLA association**: HLA-DR4, HLA-DQ3 (genetic predisposition)\n5. **Target antigens**: Tyrosinase, TRP-1, PMEL17\n\n## Oxidative Stress Theory\n- **Melanin metabolism**: Generates hydrogen peroxide\n- **H2O2 accumulation**: Oxidative damage to melanocytes\n- **Antioxidant deficiency**: Catalase, SOD decreased\n- **Result**: Melanocyte apoptosis\n\n## Genetic Factors\n- **Familial vitiligo**: 30% have positive family history\n- **NLRP1 gene**: Inflammasome activation\n- **PTPN22**: T-cell signaling\n- **HLA loci**: Multiple associations\n\n## Melanocyte Loss Mechanisms\n1. **Apoptosis**: Programmed cell death (oxidative stress-induced)\n2. **Migration**: Away from lesional skin\n3. **Exhaustion**: Depletion of melanocyte stem cells\n4. **Dysfunction**: Loss of enzymatic activity\n\n## Koebner Phenomenon\n- Trauma/injury triggers vitiligo development at affected site\n- Mechanism: Enhanced immune response at site of skin injury\n- Delayed: 7-14 days after injury\n\n## Neurogenic Theory (Secondary)\n- Neuropeptides released by nerves\n- Loss of neurotrophic factors\n- Catecholamine accumulation -> toxicity",
        mnemonics: [
          { text: "ATOM for vitiligo mechanisms", explanation: "Autoimmune (T-cells, antibodies), Tyrosinase (target), Oxidative stress (H2O2), Melanocyte loss" }
        ],
        keyPoints: [
          "CD8+ T cells are primary mediators",
          "H2O2 accumulation and catalase deficiency key in oxidative stress",
          "HLA-DR4 genetic association",
          "Koebner phenomenon: trauma triggers vitiligo",
          "Multiple mechanisms: autoimmune, oxidative, genetic, neurogenic"
        ],
        textbookRefs: [
          { book: "Fitzpatrick's Dermatology", chapter: "Ch 60", edition: "9th" }
        ]
      },
      {
        layer: 3,
        slug: "vitiligo-clinical",
        title: "Vitiligo & Pigmentary Disorders - Clinical",
        estimatedMinutes: 20,
        summary: "Diagnosis, investigation, and management of vitiligo in Indian context including cosmetic and medical approaches.",
        contentMd: "# Clinical Management of Vitiligo\n\n## Diagnostic Features\n- **Well-demarcated white patches**: Complete depigmentation\n- **Positive Wood's lamp**: Enhanced visualization of hypopigmented areas\n- **Distribution**: Face, hands, genital area, koebner sites\n- **Trichrome lesions**: Border shows intermediate pigmentation\n\n## Investigations\n1. **Clinical diagnosis**: Usually sufficient\n2. **Wood's lamp**: Confirms depigmentation\n3. **Dermoscopy**: Rules out other conditions\n4. **Baseline assessment**: Measure BSA affected (rule of nines)\n5. **Screen for associated**: TSH, B12, CBC, fasting glucose\n\n## First-Line Management\n\n### Topical Agents\n- **Potent corticosteroids**: Fluticasone propionate 0.05% (face caution)\n- **Calcineurin inhibitors**: Tacrolimus 0.1% (safe for face, neck)\n- **Vitamin D analogs**: Calcipotriol\n- **Topical tacrolimus + NBUVB**: Combined approach\n\n### Phototherapy (Most Effective)\n- **NBUVB (Narrow Band UVB)**: 2-3 times/week, 311 nm\n  - Repigmentation in 60-75% at 6-12 months\n  - Stimulates melanocyte proliferation and migration\n- **Excimer laser**: 308 nm, targeted for localized lesions\n- **PUVA**: Less commonly used now\n\n### Systemic Treatment\n- **Oral corticosteroids**: Prednisolone 0.5 mg/kg for rapidly progressive vitiligo\n- **Oral tacrolimus/azathioprine**: Refractory cases\n\n### Surgical Interventions (Stable Vitiligo)\n- **Skin grafting**: Autologous melanocyte transplantation\n- **Intradermal melanocyte injection**: Precision delivery\n- **Punch grafting**: For small stable patches\n\n## Cosmetic Approaches\n- **Cover-up**: Dermacol, stage makeup\n- **Temporary tattooing**: Micropigmentation\n- **Permanent tattooing**: Micropigmentation (Indian preference in many cases)\n\n## Counseling\n- **Reassure**: Not infectious, not life-threatening\n- **Sunscreen**: SPF 50+ to prevent sunburn on affected skin\n- **Avoid trauma**: Prevent Koebner phenomenon\n- **Psychological support**: High suicide risk in Indian population (cultural stigma)\n\n## Indian Context\n- High prevalence and cultural stigma\n- Early intervention crucial for psychological well-being\n- Combination therapy (topical + phototherapy) most effective\n- Surgical options more accepted in India now",
        mnemonics: [
          { text: "TNMCS for vitiligo management", explanation: "Topical (steroids/tacrolimus), NBUVB (phototherapy), Medical (oral), Cosmetic (cover/tattoo), Surgical (grafting)" }
        ],
        keyPoints: [
          "NBUVB 2-3x/week is gold standard phototherapy",
          "Topical tacrolimus safe for face (no atrophy risk)",
          "Early intervention improves outcomes",
          "Combination therapy (topical + phototherapy) most effective",
          "Psychological support crucial in India due to cultural stigma"
        ],
        textbookRefs: [
          { book: "Fitzpatrick's Dermatology", chapter: "Ch 60", edition: "9th" }
        ]
      },
      {
        layer: 4,
        slug: "vitiligo-exam",
        title: "Vitiligo & Pigmentary Disorders - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts on vitiligo classification, management, and associated conditions.",
        contentMd: "# Exam High-Yield Facts\n\n## Key Features of Vitiligo\n- **Complete depigmentation** (not hypopigmentation)\n- **Autoimmune basis**: CD8+ T cells, anti-melanocyte antibodies\n- **Associated with**: Thyroid (25%), diabetes, Addison's, pernicious anemia\n- **Genetic**: HLA-DR4, NLRP1\n\n## Classification Quick Reference\n\n| Type | % BSA | Progression | Features |\n|------|-------|-------------|----------|\n| Localized | <10% | Slow | Single area |\n| Generalized | >10% | Variable | Multiple areas |\n| Segmental | Variable | Stable | Unilateral early |\n| Universal | >90% | Advanced | Global |\n\n## Management Algorithm\n1. **Mild/Localized**: Topical corticosteroids or tacrolimus\n2. **Moderate**: Add NBUVB (2-3x/week)\n3. **Extensive/Progressive**: Systemic steroids + phototherapy\n4. **Stable/Cosmetic**: Surgical options (melanocyte grafting)\n\n## Gold Standard Phototherapy\n- **NBUVB 311 nm**: Most effective\n- Frequency: 2-3 times/week\n- Repigmentation: 60-75% at 6-12 months\n\n## Associated Autoimmune Diseases\n- Thyroid disease (Hashimoto >Graves)\n- Type 1 diabetes\n- Pernicious anemia\n- Addison's disease\n- Alopecia areata",
        mnemonics: [
          { text: "VITILIGO = Auto-Immune destruction of Melanocytes", explanation: "V=Vitiligo, I=Immune, T=Thyroid (associated), etc." }
        ],
        keyPoints: [
          "Wood's lamp confirms depigmentation",
          "NBUVB most effective phototherapy",
          "HLA-DR4 genetic association",
          "30% have family history",
          "25% have thyroid disease"
        ],
        textbookRefs: [
          { book: "Fitzpatrick's Dermatology", chapter: "Ch 60", edition: "9th" }
        ]
      },
      {
        layer: 5,
        slug: "vitiligo-recall",
        title: "Vitiligo & Pigmentary Disorders - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall questions on vitiligo pathophysiology, management, and associations.",
        contentMd: "# Active Recall\n\n**Q1: Define vitiligo.**\nA: Acquired loss of skin pigmentation due to melanocyte destruction\n\n**Q2: Three main pathogenic mechanisms in vitiligo?**\nA: Autoimmune (CD8+ T cells), Oxidative stress (H2O2), Genetic predisposition\n\n**Q3: Four associated autoimmune diseases?**\nA: Thyroid disease (25%), Type 1 diabetes, Pernicious anemia, Addison's\n\n**Q4: What is Koebner phenomenon in vitiligo?**\nA: Trauma/injury triggers vitiligo at that site; delayed 7-14 days\n\n**Q5: Most effective phototherapy for vitiligo?**\nA: NBUVB (311 nm), 2-3 times/week\n\n**Q6: Repigmentation rate with NBUVB over 6-12 months?**\nA: 60-75%\n\n**Q7: Topical agent safe for face in vitiligo?**\nA: Tacrolimus 0.1% (no atrophy risk unlike steroids)\n\n**Q8: First-line management for localized stable vitiligo?**\nA: Topical corticosteroids or tacrolimus\n\n**Q9: Surgical option for stable vitiligo patches?**\nA: Autologous melanocyte transplantation or punch grafting\n\n**Q10: Why is psychological support crucial in India?**\nA: High cultural stigma and cosmetic concern; high suicide risk"
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 5-20: Remaining topics (condensed format to fit all 20)
  // ═══════════════════════════════════════════════════════════════

  // 5. EN-MOD-01-TOP-05: Otosclerosis & Ear Tumors
  {
    topicCode: "EN-MOD-01-TOP-05",
    layers: [
      { layer: 1, slug: "otosclerosis-foundation", title: "Otosclerosis & Ear Tumors - Foundation", estimatedMinutes: 20, summary: "Otosclerosis is abnormal bone growth in middle ear causing conductive hearing loss. Ear tumors include ceruminoma, glomus tumors.", contentMd: "# Otosclerosis & Ear Tumors\n\n## Otosclerosis Definition\n- Abnormal bone remodeling around oval window\n- Fixation of stapes footplate\n- Conductive or mixed hearing loss\n- Autosomal dominant inheritance (60%)\n- Female predominance (2:1), symptom onset 20-40 years\n\n## Pathophysiology\n- Abnormal osteoblastic activity\n- Bone resorption and new bone formation\n- Stapes fixation -> reduced ossicular mobility\n- Weber (conductive loss) and Rinne (bone better than air) findings\n\n## Ear Tumors Classification\n\n| Tumor | Type | Presentation | Management |\n|-------|------|--------------|-------------|\n| **Ceruminoma** | Benign | Ear discharge, pain | Excision |\n| **Glomus tympanicum** | Benign vascular | Pulsatile tinnitus | Surgery/embolization |\n| **Glomus jugulare** | Benign vascular | Conductive loss + tinnitus | Surgery/embolization |\n| **Acoustic neuroma** | Benign nerve tumor | Unilateral hearing loss | Surgery/gamma knife |\n| **SCC (external canal)** | Malignant | Ear discharge, bleeding | Wide excision + radiation |\n\n## Hearing Loss in Otosclerosis\n- Carhart's notch: Bone conduction dip at 2 kHz\n- Progressive conductive loss (initially)\n- Sensorineural component develops (cochlear involvement)",
        mnemonics: [
          { text: "Otosclerosis = STAPES FIXation", explanation: "Stapedial fixation causes conductive loss" }
        ],
        keyPoints: [
          "Autosomal dominant inheritance",
          "Female:male = 2:1",
          "Carhart's notch at 2 kHz on audiometry",
          "Stapes fixation on microscopy",
          "Hearing aids or surgery (stapedectomy) for management"
        ],
        textbookRefs: [
          { book: "Logan Turner's Diseases of the Ear, Nose and Throat", chapter: "Ch 5 - Middle Ear", edition: "11th" }
        ]
      },
      { layer: 2, slug: "otosclerosis-mechanism", title: "Otosclerosis & Ear Tumors - Mechanism", estimatedMinutes: 30, summary: "Bone remodeling abnormality in otosclerosis, hormonal factors, and tumor pathogenesis in ear tumors.", contentMd: "# Mechanisms\n\n## Otosclerosis Pathogenesis\n- Abnormal osteoclast/osteoblast activity\n- IL-6, TNF-α upregulation\n- RANKL pathway overactivation\n- Estrogen sensitivity (explains female predominance)\n- Genetic loci: OTSC1 (chromosome 8), others\n\n## Cochlear Involvement\n- Cochlear otosclerosis: 25-40% cases\n- Sensorineural component develops\n- Cochlear nerve compression\n- Toxic bone mediators diffuse to cochlea\n\n## Glomus Tumor Biology\n- Arise from chemoreceptor cells\n- Highly vascular\n- Can secrete catecholamines\n- Slow growth\n\n## Acoustic Neuroma (Vestibular Schwannoma)\n- Arises from VIII nerve sheath\n- Bilateral in NF2 (Neurofibromatosis type 2)\n- Growth variable (5-20% grow per year)\n- Can cause hydrocephalus if large",
        mnemonics: [
          { text: "Glomus = Vascular tumor", explanation: "Highly vascular origin from chemoreceptor cells" }
        ],
        keyPoints: [
          "Estrogen sensitivity in otosclerosis",
          "Cochlear otosclerosis in 25-40% cases",
          "Glomus tumors highly vascular",
          "Acoustic neuroma bilateral in NF2",
          "RANKL pathway overactive in otosclerosis"
        ],
        textbookRefs: [
          { book: "Logan Turner's Diseases of Ear, Nose, Throat", chapter: "Ch 5", edition: "11th" }
        ]
      },
      { layer: 3, slug: "otosclerosis-clinical", title: "Otosclerosis & Ear Tumors - Clinical", estimatedMinutes: 20, summary: "Diagnosis and management of otosclerosis and ear tumors in Indian ENT practice.", contentMd: "# Clinical Management\n\n## Otosclerosis Diagnosis\n- **Symptoms**: Progressive conductive hearing loss, tinnitus, vertigo\n- **Otoscopy**: Schwartze sign (redness at oval window)\n- **Audiometry**: Carhart's notch, conductive loss\n- **CT imaging**: Osteosclerotic foci around oval window\n- **Impedance audiometry**: Type A tympanogram\n\n## Otosclerosis Management\n\n**Conservative**:\n- Hearing aids\n- Vitamin D + sodium fluoride (controversial efficacy)\n\n**Surgical**:\n- **Stapedectomy**: Gold standard\n- Replace stapes with prosthesis\n- 90-95% success rate\n- Risks: Sensorineural loss, vertigo\n\n## Glomus Tumor Management\n- **Small asymptomatic**: Observe with imaging\n- **Angiographic embolization**: Pre-operative\n- **Surgical excision**: Via transmeatal or transmastoid\n- **Radiation**: For poor surgical candidates\n\n## Acoustic Neuroma Management\n- **Small (<2 cm, asymptomatic)**: Observe with MRI surveillance\n- **Symptomatic/growing**: Surgery or gamma knife\n- **Translabyrinthine approach**: For hearing loss cases\n- **Retrosigmoid approach**: Hearing preservation attempts\n\n## Ceruminoma Management\n- **Wide local excision** with adequate margins\n- Avoid canal reconstruction if possible\n- MRI to assess bone erosion\n- Local radiation if incomplete excision",
        mnemonics: [
          { text: "Schwartze sign = RED at oval window in otosclerosis", explanation: "Indicates active osteosclerotic process" }
        ],
        keyPoints: [
          "Stapedectomy is gold standard for symptomatic otosclerosis",
          "Glomus tumors need preoperative embolization",
          "Acoustic neuroma observation safe if small and stable",
          "Carhart's notch pathognomonic for otosclerosis",
          "Ceruminoma requires wide excision"
        ],
        textbookRefs: [
          { book: "Logan Turner's Diseases of Ear, Nose, Throat", chapter: "Ch 5", edition: "11th" }
        ]
      },
      { layer: 4, slug: "otosclerosis-exam", title: "Otosclerosis & Ear Tumors - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on otosclerosis and ear tumors.", contentMd: "# High-Yield Points\n\n## Otosclerosis Features\n- Autosomal dominant (60%), female:male 2:1\n- Age of onset: 20-40 years\n- Conductive or mixed hearing loss\n- Carhart's notch at 2 kHz\n- Schwartze sign (active disease)\n- Stapedectomy: 90-95% success\n\n## Ear Tumors Summary\n- **Acoustic neuroma**: CN VIII, observe if small\n- **Glomus tympanicum**: Pulsatile tinnitus, conductive loss\n- **Glomus jugulare**: Pulsatile tinnitus + temporal bone erosion\n- **Ceruminoma**: Benign, needs wide excision\n\n## Audiometry Findings in Otosclerosis\n- Weber: Lateralizes to affected ear (conductive component)\n- Rinne: Bone > Air (conductive)\n- Carhart's notch: 2 kHz bone conduction dip",
        mnemonics: [
          { text: "Otosclerosis = 2:1 Female:Male, age 20-40", explanation: "Estrogen related, common presentation age" }
        ],
        keyPoints: [
          "Carhart's notch is diagnostic",
          "Stapedectomy gold standard",
          "Small acoustic neuromas can be observed",
          "Schwartze sign indicates active otosclerosis",
          "Glomus tumors need embolization"
        ],
        textbookRefs: [
          { book: "Logan Turner's Diseases of Ear, Nose, Throat", chapter: "Ch 5", edition: "11th" }
        ]
      },
      { layer: 5, slug: "otosclerosis-recall", title: "Otosclerosis & Ear Tumors - Active Recall", estimatedMinutes: 10, summary: "Quick recall on otosclerosis and ear tumors.", contentMd: "# Active Recall\n\n**Q1: Carhart's notch location and significance?**\nA: 2 kHz bone conduction dip; pathognomonic for otosclerosis\n\n**Q2: Inheritance pattern and female:male ratio in otosclerosis?**\nA: Autosomal dominant (60%), female:male 2:1\n\n**Q3: Schwartze sign in otosclerosis?**\nA: Red discoloration around oval window; indicates active osteosclerotic process\n\n**Q4: Gold standard treatment for symptomatic otosclerosis?**\nA: Stapedectomy with prosthetic replacement\n\n**Q5: Management of small asymptomatic acoustic neuroma?**\nA: Observation with serial MRI imaging\n\n**Q6: Glomus tumors and characteristic symptom?**\nA: Pulsatile tinnitus (objective)\n\n**Q7: Preoperative preparation for glomus tumor surgery?**\nA: Angiographic embolization to reduce bleeding\n\n**Q8: Ceruminoma management?**\nA: Wide local excision with adequate margins\n\n**Q9: Bilateral acoustic neuromas suggest?**\nA: Neurofibromatosis type 2 (NF2)\n\n**Q10: Audiometry finding in conductive loss?**\nA: Rinne: Bone > Air; Weber: Lateralizes to affected ear"
      }
    ]
  },

  // 6. EN-MOD-03-TOP-01: Tonsillitis & Adenoids
  {
    topicCode: "EN-MOD-03-TOP-01",
    layers: [
      { layer: 1, slug: "tonsillitis-foundation", title: "Tonsillitis & Adenoids - Foundation", estimatedMinutes: 20, summary: "Tonsillitis is inflammation of palatine tonsils. Can be acute viral, acute bacterial, or chronic. Adenoiditis presents with nasal obstruction.", contentMd: "# Tonsillitis & Adenoids\n\n## Tonsillitis Definition & Classification\n- **Acute viral tonsillitis**: Rhinovirus, EBV, adenovirus\n- **Acute bacterial tonsillitis**: GABHS (Group A Beta-hemolytic Streptococcus)\n- **Chronic tonsillitis**: Recurrent infections (≥5 episodes/year)\n- **Acute suppurative**: Abscess formation (peritonsillar, retropharyngeal)\n\n## Clinical Features: Viral vs Bacterial\n\n| Feature | Viral | Bacterial (GABHS) |\n|---------|-------|-------------------|\n| **Onset** | Gradual | Sudden |\n| **Fever** | Low-grade | High (>38.5°C) |\n| **Exudate** | Minimal/absent | Thick, purulent |\n| **Lymphadenopathy** | Mild | Prominent, bilateral |\n| **Systemic symptoms** | Present | Minimal except fever |\n\n## Adenoid Hypertrophy\n- **Obstructive adenoiditis**: Nasal obstruction, hyponasal speech\n- **Infective adenoiditis**: Acute infection with fever\n- **Adenoid facies**: Long face, open mouth, malocclusion\n- **Sleep apnea**: Severe obstruction\n\n## Indications for Tonsillectomy\n1. **Obstructive**: Airway obstruction, OSA\n2. **Recurrent infections**: ≥7 in 1 year, ≥5 in 2 years\n3. **Peritonsillar abscess**: Unresponsive to antibiotics\n4. **Halitosis**: Despite poor response to treatment\n5. **Malignancy**: Suspected lymphoma\n\n## Complications\n- **Acute**: Airway obstruction, dehydration\n- **Chronic**: Recurrent sinusitis, otitis media\n- **Post-streptococcal**: PSGN, acute rheumatic fever",
        mnemonics: [
          { text: "GABHS = Group A Beta-Hemolytic Streptococcus", explanation: "Most common cause of acute bacterial tonsillitis" }
        ],
        keyPoints: [
          "GABHS is most common bacterial cause",
          "Recurrent infections defined as ≥5 per year",
          "Adenoiditis causes nasal obstruction and hyponasal speech",
          "Obstructive sleep apnea indication for surgery",
          "Post-streptococcal PSGN, ARF complications"
        ],
        textbookRefs: [
          { book: "Logan Turner's Diseases of Ear, Nose and Throat", chapter: "Ch 7 - Pharynx", edition: "11th" }
        ]
      },
      { layer: 2, slug: "tonsillitis-mechanism", title: "Tonsillitis & Adenoids - Mechanism", estimatedMinutes: 30, summary: "Pathophysiology of viral and bacterial tonsillitis, immune response, and complications.", contentMd: "# Mechanisms\n\n## Viral Tonsillitis\n- Direct viral invasion of tonsillar epithelium\n- Inflammatory response with lymphocytic infiltration\n- Mucosal edema and hyperemia\n- May progress to secondary bacterial infection\n\n## Bacterial Tonsillitis (GABHS)\n1. **Adhesion**: M-protein aids streptococcal binding\n2. **Toxin production**: Streptolysins, pyrogenic exotoxins\n3. **Immune response**: IgA, IgM antibodies\n4. **Inflammation**: Neutrophil infiltration, exudate formation\n5. **Abscess**: Pus collection between tonsil and capsule\n\n## Peritonsillar Abscess Formation\n- Purulent exudate in tonsil -> pus accumulates\n- Tissues separate -> abscess cavity\n- Can compress airway\n- Risk of rupture into airway\n\n## Post-Streptococcal Sequelae\n- **PSGN** (Post-streptococcal glomerulonephritis): Immune complex deposition\n- **ARF** (Acute rheumatic fever): Molecular mimicry (streptococcal antigens mimic cardiac proteins)\n- Latency: 2-3 weeks after infection\n\n## Adenoid Hypertrophy Mechanism\n- **Lymphoid hyperplasia**: Response to repeated infections\n- **Size increases**: Can obstruct nasopharynx\n- **Airway obstruction**: Narrowing of airway\n- **Sleep apnea**: Supine position worsens obstruction\n\n## Halitosis Mechanism\n- Biofilm formation on tonsillar surface\n- Anaerobic bacteria proliferation\n- Volatile sulfur compound production",
        mnemonics: [
          { text: "M-protein in GABHS", explanation: "Enables adhesion and immune evasion" }
        ],
        keyPoints: [
          "M-protein aids GABHS adhesion and virulence",
          "Exotoxins cause systemic symptoms",
          "PSGN: immune complex-mediated",
          "ARF: molecular mimicry mechanism",
          "Adenoid hypertrophy from repeated infections"
        ],
        textbookRefs: [
          { book: "Logan Turner's Diseases of Ear, Nose and Throat", chapter: "Ch 7", edition: "11th" }
        ]
      },
      { layer: 3, slug: "tonsillitis-clinical", title: "Tonsillitis & Adenoids - Clinical", estimatedMinutes: 20, summary: "Diagnosis and management of tonsillitis and adenoiditis in Indian clinical practice.", contentMd: "# Clinical Management\n\n## Diagnosis\n- **History**: Onset, severity, duration, recurrence\n- **Examination**: Throat inspection, lymph node palpation\n- **Investigations**: \n  - Throat swab culture (if bacterial suspected)\n  - Monospot (if infectious mononucleosis suspected)\n  - CBC (elevated WBC in bacterial)\n\n## Management of Acute Tonsillitis\n\n**Supportive**:\n- Rest, hydration, soft diet\n- Analgesics (paracetamol, ibuprofen)\n- Gargling with salt water\n\n**Antibiotics** (if bacterial/GABHS):\n- First-line: Amoxicillin 500 mg TDS x 7 days\n- Alternative (penicillin allergy): Erythromycin, azithromycin\n\n**Severe/Obstruction**:\n- Consider IV antibiotics + hospitalization\n- Airway management if compromise\n\n## Peritonsillar Abscess Management\n- **Needle aspiration** or **incision and drainage**\n- Antibiotics (β-lactam + inhibitor or broad-spectrum)\n- If unresponsive or recurrent: Immediate tonsillectomy\n\n## Adenoidectomy Indications\n1. Obstructive sleep apnea\n2. Recurrent acute adenoiditis (≥4 episodes/year)\n3. Chronic nasal obstruction with symptoms\n4. Sleep disturbance due to obstruction\n\n## Tonsillectomy Approach\n- **Cold steel dissection**: Less bleeding, slower\n- **Electrocautery**: Faster, more hemostasis\n- **Coblation**: Less postoperative pain\n- **Laser-assisted**: Precise, less collateral damage\n\n## Complications Management\n- **Airway obstruction**: Urgent intervention\n- **Dehydration**: IV fluids\n- **Secondary bacterial infection**: Antibiotics\n- **Post-operative bleeding**: Pressure, ice, surgery if severe",
        mnemonics: [
          { text: "Amoxicillin 500 TDS x7 for GABHS", explanation: "First-line antibiotic for acute bacterial tonsillitis" }
        ],
        keyPoints: [
          "Amoxicillin is first-line for bacterial tonsillitis",
          "7-day course completes to prevent ARF/PSGN",
          "Needle aspiration diagnostic and therapeutic",
          "Recurrent infections (≥5/year) indication for tonsillectomy",
          "Post-operative bleeding main complication"
        ],
        textbookRefs: [
          { book: "Logan Turner's Diseases of Ear, Nose and Throat", chapter: "Ch 7", edition: "11th" }
        ]
      },
      { layer: 4, slug: "tonsillitis-exam", title: "Tonsillitis & Adenoids - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on tonsillitis, adenoiditis, and surgical indications.", contentMd: "# Exam High-Yield Points\n\n## Key Features\n- **GABHS**: Most common bacterial cause\n- **Viral**: Mild symptoms, minimal exudate\n- **Bacterial**: Sudden onset, high fever, purulent exudate\n- **Recurrent**: ≥5 per year or ≥7 in 1 year\n\n## Complications\n- PSGN (2-3 weeks post-infection)\n- ARF (molecular mimicry)\n- Peritonsillar abscess\n- Airway obstruction\n\n## Tonsillectomy Indications\n1. Obstructive sleep apnea\n2. Recurrent acute tonsillitis (≥7/year)\n3. Peritonsillar abscess (unresponsive/recurrent)\n4. Suspected malignancy\n\n## Adenoidectomy Indications\n1. Obstructive sleep apnea\n2. Recurrent acute adenoiditis (≥4/year)\n3. Chronic nasal obstruction with sleep disturbance\n\n## First-Line Antibiotic\n- Amoxicillin 500 mg TDS x 7 days",
        mnemonics: [
          { text: "Recurrent tonsillitis = ≥5 per year", explanation: "Common exam question: definition of recurrent" }
        ],
        keyPoints: [
          "Peritonsillar abscess requires drainage",
          "PSGN and ARF major post-streptococcal complications",
          "Adenoid facies: long face, open mouth, malocclusion",
          "Sleep apnea indication for both tonsillectomy and adenoidectomy",
          "Culture confirms GABHS for treatment guidance"
        ],
        textbookRefs: [
          { book: "Logan Turner's Diseases of Ear, Nose and Throat", chapter: "Ch 7", edition: "11th" }
        ]
      },
      { layer: 5, slug: "tonsillitis-recall", title: "Tonsillitis & Adenoids - Active Recall", estimatedMinutes: 10, summary: "Quick recall on tonsillitis and adenoiditis.", contentMd: "# Active Recall\n\n**Q1: Most common cause of acute bacterial tonsillitis?**\nA: GABHS (Group A Beta-hemolytic Streptococcus)\n\n**Q2: Viral vs bacterial tonsillitis differentiation?**\nA: Viral=gradual, low-grade fever, minimal exudate; Bacterial=sudden, high fever, purulent exudate\n\n**Q3: Definition of recurrent tonsillitis?**\nA: ≥5 episodes per year or ≥7 in 1 year\n\n**Q4: Post-streptococcal sequelae and timeline?**\nA: PSGN and ARF, latency 2-3 weeks\n\n**Q5: First-line antibiotic for GABHS tonsillitis?**\nA: Amoxicillin 500 mg TDS x 7 days\n\n**Q6: Peritonsillar abscess management?**\nA: Needle aspiration/I&D + antibiotics; tonsillectomy if recurrent\n\n**Q7: Adenoid facies features?**\nA: Long face, open mouth, malocclusion\n\n**Q8: Sleep apnea indications for adenoidectomy?**\nA: Obstructive adenoid hypertrophy causing sleep-disordered breathing\n\n**Q9: Main complication of tonsillectomy?**\nA: Post-operative bleeding (primary or secondary)\n\n**Q10: Halitosis mechanism in chronic tonsillitis?**\nA: Biofilm + anaerobic bacteria -> volatile sulfur compounds"
      }
    ]
  },

  // 7. FM-MOD-01-TOP-01: Medical Ethics & Code of Conduct
  {
    topicCode: "FM-MOD-01-TOP-01",
    layers: [
      { layer: 1, slug: "medical-ethics-foundation", title: "Medical Ethics & Code of Conduct - Foundation", estimatedMinutes: 20, summary: "Medical ethics based on four principles: autonomy, beneficence, non-maleficence, justice. GMC and Indian Medical Council guidelines.", contentMd: "# Medical Ethics & Code of Conduct\n\n## Four Principles of Medical Ethics\n\n| Principle | Definition | Examples |\n|-----------|-----------|----------|\n| **Autonomy** | Right of patient to make decisions | Informed consent, patient choice |\n| **Beneficence** | Do good, act in patient's interest | Treatment, prevention |\n| **Non-maleficence** | Do no harm | Avoid negligence, risks |\n| **Justice** | Fair distribution of resources | Equality, fairness |\n\n## Indian Medical Council Code of Conduct\n- **IMC (Indian Medical Council) Act 1956**: Regulates medical practice\n- **NMC (National Medical Commission) 2019**: Supersedes MCI\n- **Code of Ethics**: Duties to patient, society, profession, self\n\n## Key Ethical Concepts\n- **Confidentiality**: Patient data privacy (exceptions: legal duty, public health)\n- **Consent**: Informed consent required before treatment\n- **Professional integrity**: Honesty, not exploiting patients\n- **Competence**: Update knowledge, refer when necessary\n\n## Types of Consent\n1. **Informed consent**: Patient understands risks/benefits\n2. **Implied consent**: Emergency, unconscious patient\n3. **Consent by proxy**: Parents/guardians for minors\n\n## Duties of a Doctor\n1. Respect patient autonomy\n2. Maintain confidentiality\n3. Provide competent care\n4. Avoid conflicts of interest\n5. Report professional misconduct",
        mnemonics: [
          { text: "ABNJs of medical ethics", explanation: "Autonomy, Beneficence, Non-maleficence, Justice" }
        ],
        keyPoints: [
          "Four principles foundation of medical ethics",
          "Informed consent required before treatment",
          "Confidentiality has legal exceptions",
          "NMC 2019 now regulates Indian doctors",
          "Justice ensures fair resource allocation"
        ],
        textbookRefs: [
          { book: "NMC Code of Conduct Regulations 2023", chapter: "Principles of Ethics", edition: "Current" }
        ]
      },
      { layer: 2, slug: "medical-ethics-mechanism", title: "Medical Ethics & Code of Conduct - Mechanism", estimatedMinutes: 30, summary: "Frameworks for ethical decision-making, conflict resolution, and application in Indian healthcare context.", contentMd: "# Ethical Decision-Making Framework\n\n## Framework for Ethical Dilemmas\n1. **Identify the issue**: What is the ethical problem?\n2. **Gather information**: Facts about the situation\n3. **Stakeholders**: Patient, family, doctors, society\n4. **Principles applicable**: Autonomy, beneficence, non-maleficence, justice\n5. **Alternative actions**: What options exist?\n6. **Consequences**: What are outcomes of each?\n7. **Decision**: Choose best action\n8. **Reflection**: Learn for future cases\n\n## Ethical Dilemmas in Indian Context\n\n### Truth-telling vs Beneficence\n- **Dilemma**: Should we always tell patient bad diagnosis?\n- **Principle conflict**: Autonomy (truth) vs beneficence (avoiding harm)\n- **Indian approach**: Family often informed first, cultural consideration\n- **Best practice**: Balanced approach, respect patient wishes\n\n### Resource Allocation in Limited Settings\n- **Dilemma**: Limited ICU beds, who gets priority?\n- **Justice principle**: Fair distribution\n- **Criteria**: Severity, prognosis, fairness, utility\n\n### Conflict of Interest\n- Pharmaceutical gifts\n- Unnecessary procedures for profit\n- Private vs public patient care disparity\n\n## Informed Consent Components\n1. **Information**: Condition, treatment, alternatives, risks/benefits\n2. **Understanding**: Patient comprehends information\n3. **Voluntariness**: Free choice, no coercion\n4. **Capacity**: Patient competent to decide\n\n## Exceptions to Consent\n1. **Emergency**: Life-threatening, unconscious\n2. **Waiver**: Patient explicitly waives consent\n3. **Therapeutic privilege**: Withholding dire information if harmful\n4. **Public health**: Mandatory reporting (TB, HIV, etc.)",
        mnemonics: [
          { text: "IUVC for informed consent", explanation: "Information, Understanding, Voluntariness, Capacity" }
        ],
        keyPoints: [
          "Ethical framework: identify → gather → stakeholders → principles → alternatives → decide",
          "Informed consent requires information, understanding, voluntariness, capacity",
          "Justice in healthcare: fair resource distribution",
          "Indian context: family involvement in decision-making",
          "Conflicts of interest must be disclosed"
        ],
        textbookRefs: [
          { book: "NMC Code of Conduct Regulations", chapter: "Decision-Making", edition: "2023" }
        ]
      },
      { layer: 3, slug: "medical-ethics-clinical", title: "Medical Ethics & Code of Conduct - Clinical", estimatedMinutes: 20, summary: "Application of ethics in Indian healthcare, confidentiality laws, and NMC regulations.", contentMd: "# Clinical Application of Ethics\n\n## Indian Laws & Ethics\n- **Indian Penal Code**: Professional negligence (Section 304A)\n- **Tort law**: Malpractice, breach of duty\n- **Privacy laws**: No specific federal law (but HIPAA-like protection in certain states)\n- **Mandatory reporting**: TB (NTEP), HIV, communicable diseases\n\n## Confidentiality Management\n\n**Confidential information protected**:\n- Medical history, diagnoses, test results\n- Treatment details, counseling\n\n**Exceptions (can disclose)**:\n- Legal requirement (court order, police investigation)\n- Patient consent\n- Public health (infectious disease)\n- Self-defense (doctor threatened)\n- Third-party safety (contagious disease)\n\n## Case Scenarios\n\n### Scenario 1: Patient Refuses Treatment\n- **Autonomy principle**: Respect refusal even if detrimental\n- **Action**: Document refusal, provide information, offer alternatives\n- **Legal**: Patient can sue for negligence if harm results\n\n### Scenario 2: Conflict Between Patient & Family\n- **Assessment**: Patient's mental capacity\n- **If competent**: Respect patient's wishes\n- **If incompetent**: Family proxy with patient's best interests\n\n### Scenario 3: Breach of Confidentiality Suspected\n- **Report to NMC**: Professional misconduct\n- **Investigation**: NMC conducts inquiry\n- **Penalty**: Suspension, cancellation of registration\n\n## NMC Standards\n- Keep good medical records\n- Maintain professional competence\n- Avoid conflicts of interest\n- Report misconduct of colleagues\n- Respect patient autonomy",
        mnemonics: [
          { text: "TACOS for exceptions to confidentiality", explanation: "Threat (to self/others), Attorney (legal), Communicable disease, Official duty, Safety" }
        ],
        keyPoints: [
          "IPC 304A for professional negligence",
          "Confidentiality exceptions: legal, public health, self-defense, third-party",
          "Mandatory reporting: TB, HIV, communicable diseases",
          "Patient autonomy respected even if decision harmful",
          "NMC regulates professional conduct"
        ],
        textbookRefs: [
          { book: "NMC Code of Conduct Regulations 2023", chapter: "Professional Standards", edition: "Current" }
        ]
      },
      { layer: 4, slug: "medical-ethics-exam", title: "Medical Ethics & Code of Conduct - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on ethics principles, laws, and NMC regulations.", contentMd: "# High-Yield Facts\n\n## Four Principles (ALWAYS asked)\n- **Autonomy**: Patient self-determination\n- **Beneficence**: Act in patient's interest\n- **Non-maleficence**: Do no harm\n- **Justice**: Fair resource allocation\n\n## Informed Consent Requirements\n- Information about condition, treatment, risks, alternatives\n- Patient understanding and comprehension\n- Voluntary choice without coercion\n- Mental capacity to decide\n\n## Confidentiality Exceptions\n- Legal requirement (court)\n- Public health (communicable disease)\n- Threat to self/others\n- Patient consent\n\n## NMC Regulations 2023\n- Duties to patients: competence, confidentiality, respect autonomy\n- Duties to society: public health, professional standards\n- Avoid conflicts of interest\n\n## Mandatory Reporting (India)\n- TB (under NTEP)\n- HIV/AIDS\n- Communicable diseases\n- Abuse (child, elder, domestic violence)",
        mnemonics: [
          { text: "ABNJ repeated = 4 Principles", explanation: "Autonomy, Beneficence, Non-maleficence, Justice - tested often" }
        ],
        keyPoints: [
          "ABNJs are cornerstone of medical ethics",
          "Informed consent is legal requirement",
          "Confidentiality is duty but has exceptions",
          "NMC 2019 is current regulatory body",
          "Mandatory reporting is ethical and legal duty"
        ],
        textbookRefs: [
          { book: "NMC Code of Conduct 2023", chapter: "Core Principles", edition: "Current" }
        ]
      },
      { layer: 5, slug: "medical-ethics-recall", title: "Medical Ethics & Code of Conduct - Active Recall", estimatedMinutes: 10, summary: "Quick recall on ethical principles and regulations.", contentMd: "# Active Recall\n\n**Q1: Four principles of medical ethics?**\nA: Autonomy, Beneficence, Non-maleficence, Justice\n\n**Q2: Define autonomy in medical ethics.**\nA: Patient's right to make decisions about their healthcare\n\n**Q3: Components of informed consent?**\nA: Information, Understanding, Voluntariness, Capacity\n\n**Q4: When is confidentiality NOT required (exceptions)?**\nA: Legal requirement, public health, threat to self/others, patient consent\n\n**Q5: Current regulatory body for doctors in India?**\nA: NMC (National Medical Commission) since 2019\n\n**Q6: Mandatory reporting conditions in India?**\nA: TB, HIV, communicable diseases, abuse cases\n\n**Q7: Professional negligence under Indian law?**\nA: IPC Section 304A\n\n**Q8: Conflict of interest example?**\nA: Pharmaceutical gifts, unnecessary procedures for profit\n\n**Q9: Can doctors refuse to treat a patient?**\nA: No, unless genuine incompetence or ethical issue; must refer\n\n**Q10: Duty to report colleague misconduct?**\nA: Yes, to NMC or appropriate authority"
      }
    ]
  },

  // Continuing with remaining topics in condensed format to fit all 20...
  // 8. FM-MOD-03-TOP-02: Firearm Injuries
  {
    topicCode: "FM-MOD-03-TOP-02",
    layers: [
      { layer: 1, slug: "firearm-injuries-foundation", title: "Firearm Injuries - Foundation", estimatedMinutes: 20, summary: "Firearm injuries result from projectile trauma. Classification based on velocity and distance. Forensic examination for legal proof.", contentMd: "# Firearm Injuries\n\n## Types of Weapons\n- **Low-velocity weapons**: Bow, arrow (<60 m/s)\n- **Medium-velocity weapons**: Rifles, handguns (60-900 m/s)\n- **High-velocity weapons**: Military weapons (>900 m/s)\n\n## Phases of Firearm Injury\n1. **Contact phase**: Projectile travels from gun to body\n2. **Wounding phase**: Temporary and permanent cavity\n3. **Closing phase**: Permanent cavity remains\n\n## Classification by Distance\n\n| Distance | Features | Findings |\n|----------|----------|----------|\n| **Contact** | Gun touching skin | Soot, powder in wound |\n| **Close range** | <1 meter | Powder tattooing on skin |\n| **Intermediate** | 1-10 meters | Powder around wound, no tattooing |\n| **Long range** | >10 meters | Only entry wound, no powder |\n\n## Wound Characteristics\n- **Entry wound**: Smaller, inverted edges, punched-in appearance\n- **Exit wound**: Larger, everted edges, irregular shape\n- **Intermediate trajectory**: Determines wound severity",
        mnemonics: [
          { text: "Entry wound = PINhole; Exit wound = EXPLOSION", explanation: "Entry punched-in small; Exit explosive large" }
        ],
        keyPoints: [
          "Contact wound most distinctive for forensic evidence",
          "Powder tattooing indicates close range (<1m)",
          "Exit wounds larger than entry wounds",
          "Velocity determines cavitation and tissue damage",
          "Distance estimation crucial for forensic investigation"
        ],
        textbookRefs: [
          { book: "Parikh's Textbook of Medical Jurisprudence, Forensic Medicine and Toxicology", chapter: "Ch 12 - Firearm Injuries", edition: "7th" }
        ]
      },
      { layer: 2, slug: "firearm-injuries-mechanism", title: "Firearm Injuries - Mechanism", estimatedMinutes: 30, summary: "Tissue damage mechanisms: temporary cavity, permanent cavity, shock waves, projectile characteristics.", contentMd: "# Mechanisms of Tissue Damage\n\n## Temporary Cavity\n- Created by projectile's pressure wave\n- Radial stretching of tissue\n- Collapse after projectile passes\n- Larger with high-velocity weapons\n- Can cause significant damage even if not directly in trajectory\n\n## Permanent Cavity\n- Direct path of projectile through tissue\n- Devitalization of tissue in track\n- Contamination with foreign material\n- Size proportional to projectile diameter and energy\n\n## Shock Wave Effect\n- High-velocity projectiles create blast wave\n- Pressure wave travels ahead of projectile\n- Can damage organs not directly struck\n- \"Blast\" effect in high-velocity weapons\n\n## Factors Affecting Severity\n1. **Projectile mass**: Heavier = more energy\n2. **Velocity**: Higher = greater damage (energy ∝ V²)\n3. **Deformation**: Expanding bullets cause wider cavity\n4. **Tissue resistance**: Dense tissue resists better\n5. **Distance**: Velocity decreases with distance\n\n## Organ-Specific Injuries\n- **Brain**: Rapid hemorrhage, brain herniation\n- **Heart**: Exsanguination\n- **Lungs**: Hemothorax, pneumothorax\n- **Abdomen**: Visceral damage, peritonitis\n- **Vessels**: Hemorrhagic shock",
        mnemonics: [
          { text: "TVP for cavities", explanation: "Temporary (pressure wave), Permanent (projectile track)" }
        ],
        keyPoints: [
          "Temporary cavity can damage beyond projectile track",
          "Permanent cavity is actual tissue defect",
          "Energy = ½ MV²; velocity has greater effect than mass",
          "Shock wave precedes projectile",
          "Multi-organ involvement determines prognosis"
        ],
        textbookRefs: [
          { book: "Parikh's Textbook", chapter: "Ch 12", edition: "7th" }
        ]
      },
      { layer: 3, slug: "firearm-injuries-clinical", title: "Firearm Injuries - Clinical", estimatedMinutes: 20, summary: "Management, forensic investigation, and legal aspects of firearm injuries in India.", contentMd: "# Clinical & Forensic Management\n\n## Immediate Management\n1. **ABC protocol**: Airway, Breathing, Circulation\n2. **Hemorrhage control**: Direct pressure, tourniquet if needed\n3. **Imaging**: CT/X-ray to determine projectile trajectory\n4. **Surgical intervention**: Remove devitalized tissue, repair organs\n5. **Contamination prevention**: Antibiotics (high infection risk)\n\n## Forensic Examination\n1. **Photograph wounds**: Before cleaning, document\n2. **Document distance**: Powder residue analysis\n3. **Record angle**: Entry/exit trajectory\n4. **Preserve evidence**: Clothing, projectile if removed\n5. **Note vital signs**: Suggest survival time\n\n## Forensic Indicators of Distance\n\n| Distance | Indicators |\n|----------|----------|\n| **Contact** | Muzzle imprint, soot in wound track |\n| **Close** | Powder tattooing, soot around wound |\n| **Intermediate** | Soot without tattooing |\n| **Long range** | Smooth entry wound, no soot |\n\n## Legal Aspects (India)\n- **FIR reporting**: Required by police\n- **Post-mortem**: If death, mandatory autopsy\n- **Evidence preservation**: Chain of custody\n- **IPC sections**: 307 (attempt murder), 302 (murder), 337-338 (hurt)\n\n## Determination of Survival\n- **Vital reaction**: Hemorrhage, inflammatory response\n- **Time indicators**: Muscle hypostasis, decomposition\n- **Blood aspiration**: Shows survival (not post-mortem)\n\n## Suicide vs Homicide vs Accident\n- **Suicide**: Usually contact/close range to head/chest\n- **Homicide**: Variable ranges, may have multiple wounds\n- **Accident**: Context dependent",
        mnemonics: [
          { text: "ABC for emergency management", explanation: "Airway, Breathing, Circulation" }
        ],
        keyPoints: [
          "Powder tattooing indicates close range",
          "Vital reaction proves survival after injury",
          "Muzzle imprint diagnostic for contact wound",
          "Multiple wounds suggest homicide",
          "FIR required; mandatory autopsy if death"
        ],
        textbookRefs: [
          { book: "Parikh's Textbook", chapter: "Ch 12", edition: "7th" }
        ]
      },
      { layer: 4, slug: "firearm-injuries-exam", title: "Firearm Injuries - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on firearm injuries and forensic identification.", contentMd: "# High-Yield Points\n\n## Key Distinctions\n- **Entry wound**: Small, inverted edges, punch-hole appearance\n- **Exit wound**: Large, everted edges, irregular shape\n- **Intermediate zone**: Between entry and exit\n\n## Distance Classification\n- **Contact**: Soot, muzzle imprint\n- **Close (<1m)**: Powder tattooing\n- **Intermediate (1-10m)**: Soot, no tattooing\n- **Long range (>10m)**: Entry wound only\n\n## Energy Formula\n- Kinetic energy = ½ MV²\n- Velocity has exponential effect on damage\n- High-velocity = large temporary cavity\n\n## Forensic Features\n- Vital reaction = survived injury\n- Hemorrhage/inflammation = post-injury\n- No vital reaction = death before injury\n\n## Legal Classification (IPC)\n- Attempt murder: IPC 307\n- Murder: IPC 302\n- Grievous hurt: IPC 325",
        mnemonics: [
          { text: "CEIB for injury types", explanation: "Contact, Entry, Intermediate, Bullet track" }
        ],
        keyPoints: [
          "Entry wound: small, punch-hole, inverted edges",
          "Exit wound: large, explosive, everted edges",
          "Powder tattooing = close range indicator",
          "High-velocity creates large temporary cavity",
          "Vital reaction = post-mortem survival indicator"
        ],
        textbookRefs: [
          { book: "Parikh's Textbook", chapter: "Ch 12", edition: "7th" }
        ]
      },
      { layer: 5, slug: "firearm-injuries-recall", title: "Firearm Injuries - Active Recall", estimatedMinutes: 10, summary: "Quick recall on firearm injuries and forensic analysis.", contentMd: "# Active Recall\n\n**Q1: Distinguish entry and exit wounds.**\nA: Entry=small punch-hole inverted edges; Exit=large explosive everted edges\n\n**Q2: Powder tattooing distance range?**\nA: <1 meter (close range)\n\n**Q3: Contact wound forensic findings?**\nA: Muzzle imprint, soot in wound track, burned/charred edges\n\n**Q4: How is distance estimated in gunshot?**\nA: Powder pattern analysis; presence/absence of soot and tattooing\n\n**Q5: Kinetic energy formula?**\nA: E = ½ MV²; velocity has greater effect than mass\n\n**Q6: Two types of cavities created?**\nA: Temporary cavity (pressure wave), Permanent cavity (projectile track)\n\n**Q7: What is vital reaction?**\nA: Hemorrhage and inflammatory response indicating post-injury survival\n\n**Q8: Suicide vs homicide distinction?**\nA: Suicide=contact/close range to head/chest; Homicide=variable, context\n\n**Q9: IPC sections for firearm injuries?**\nA: 307 (attempt), 302 (murder), 325 (grievous)\n\n**Q10: High-velocity weapon effects?**\nA: Large temporary cavity, shock wave, multi-organ damage"
      }
    ]
  },
  // 9. IM-MOD-02-TOP-02: Bronchial Asthma
  {
    topicCode: "IM-MOD-02-TOP-02",
    layers: [
      { layer: 1, slug: "asthma-foundation", title: "Bronchial Asthma - Foundation", estimatedMinutes: 20, summary: "Asthma is chronic airway inflammation causing reversible obstruction, bronchial hyperresponsiveness, and variable airflow limitation.", contentMd: "# Bronchial Asthma\n\n## Definition\n- Chronic inflammatory disorder of airways\n- Characterized by reversible airflow obstruction\n- Bronchial hyperresponsiveness\n- Airway inflammation (eosinophils, mast cells, T lymphocytes)\n\n## Classification by Severity\n\n| Severity | Symptoms | PEF | FEV1 |\n|----------|----------|-----|------|\n| **Intermittent** | <2 days/week | >80% | >80% |\n| **Mild persistent** | >2 days/week, <1x/day | >80% | >80% |\n| **Moderate persistent** | Daily, >1x/week | 60-80% | 60-80% |\n| **Severe persistent** | Continuous, frequent | <60% | <60% |\n\n## Triggers/Provocative Factors\n- Allergens (dust, pollen, animal dander)\n- Exercise\n- Respiratory infections\n- Emotional stress\n- Weather changes\n- NSAIDs, aspirin\n- Air pollution\n\n## Pathophysiology Overview\n- Airway hyperresponsiveness\n- Smooth muscle contraction\n- Mucosal edema\n- Mucus hypersecretion\n- Result: Increased airway resistance\n\n## Clinical Presentation\n- Symptoms: Wheeze, dyspnea, cough, chest tightness\n- Worse at night/early morning\n- Variable peak flow",
        mnemonics: [
          { text: "Asthma = WHEEZY", explanation: "Wheeze, Hyperresponsiveness, Edema, Eosinophils, Zymosis (allergy), Y=spasm" }
        ],
        keyPoints: [
          "Reversible airflow obstruction is key feature",
          "Bronchial hyperresponsiveness to various triggers",
          "Four severity classes based on FEV1 and symptoms",
          "Inflammation with eosinophils and T cells",
          "Triggers: allergens, exercise, infections, NSAIDs"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 248 - Asthma", edition: "21st" }
        ]
      },
      { layer: 2, slug: "asthma-mechanism", title: "Bronchial Asthma - Mechanism", estimatedMinutes: 30, summary: "IgE-mediated and non-IgE-mediated pathways, airway remodeling, smooth muscle dysfunction, inflammatory cascades.", contentMd: "# Mechanisms of Airway Obstruction\n\n## IgE-Mediated (Allergic) Asthma\n1. Allergen presentation to Th2 cells\n2. IgE production\n3. IgE binds to FcεRI on mast cells\n4. Re-exposure → cross-linking → degranulation\n5. Release of histamine, tryptase, leukotrienes\n6. Immediate bronchoconstriction (minutes)\n\n## Non-IgE-Mediated Pathways\n1. **Aspirin/NSAIDs**: COX inhibition → leukotriene shunting\n2. **Exercise**: Heat and hyperventilation\n3. **Infections**: Viral-induced inflammation\n4. **Occupational**: Sensitization to workplace agents\n\n## Inflammatory Cascade\n- **Th2 cells** produce IL-4, IL-5, IL-13\n- **Eosinophils** release major basic protein, ECP\n- **Mast cells** release histamine, leukotrienes, prostaglandins\n- **Epithelial damage**: Loss of barrier function\n\n## Airway Remodeling (Chronic Asthma)\n- Smooth muscle hypertrophy\n- Collagen deposition in subepithelial layer\n- Fibrosis\n- Permanent airflow obstruction\n- Fixed obstruction develops\n\n## Bronchial Smooth Muscle Contraction\n- **Calcium influx** into smooth muscle\n- Increased intracellular [Ca²⁺] → contraction\n- Myosin-actin cross-bridges\n- Results in increased airway resistance\n\n## Loss of Bronchodilation\n- Reduced β2-adrenergic responsiveness\n- Impaired nitric oxide pathway\n- Loss of epithelial-derived relaxing factors",
        mnemonics: [
          { text: "Th2 cytokines: IL-4, IL-5, IL-13", explanation: "Th2 dominance in allergic asthma pathogenesis" }
        ],
        keyPoints: [
          "IgE-mast cell axis key in allergic asthma",
          "Eosinophils cause epithelial damage",
          "Chronic asthma causes airway remodeling",
          "Calcium influx causes smooth muscle contraction",
          "β2 receptor desensitization reduces bronchodilation"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 248", edition: "21st" }
        ]
      },
      { layer: 3, slug: "asthma-clinical", title: "Bronchial Asthma - Clinical", estimatedMinutes: 20, summary: "Diagnosis, investigation, management algorithm, and acute asthma attack management in India.", contentMd: "# Clinical Management\n\n## Diagnosis\n- **History**: Symptoms, triggers, family history\n- **Spirometry**: FEV1/FVC <0.70 (obstructive)\n- **Bronchodilator response**: 12% improvement in FEV1\n- **Peak flow variability**: >20% between readings\n- **FeNO**: Fractional exhaled NO (>25 ppb suggests eosinophilic)\n\n## Management Algorithm\n\n**Step 1 (Intermittent)**:\n- SABA as needed (salbutamol inhaler)\n\n**Step 2 (Mild persistent)**:\n- ICS (inhaled corticosteroid: fluticasone, budesonide) + SABA PRN\n\n**Step 3 (Moderate persistent)**:\n- ICS-LABA combination (salmeterol/fluticasone) + SABA PRN\n\n**Step 4 (Severe persistent)**:\n- High-dose ICS-LABA + LTRA (montelukast) + SABA PRN\n\n**Step 5 (Refractory)**:\n- Add omalizumab (anti-IgE) or mepolizumab (anti-IL-5)\n\n## Acute Asthma Attack Management\n1. **SABA**: Salbutamol 2-4 puffs immediately (nebulized if severe)\n2. **Systemic steroids**: Prednisolone 0.5-1 mg/kg\n3. **Oxygen**: Target SpO2 >90%\n4. **IV access**: Prepare for emergency\n5. **Magnesium sulfate**: 2g IV if life-threatening (bronchodilation)\n6. **ICU**: If no response in 1-2 hours\n\n## Severe/Life-Threatening Features\n- Silent chest (no wheeze)\n- Inability to speak\n- Confusion/altered sensorium\n- Severe hypoxemia\n- Peak flow <33% predicted",
        mnemonics: [
          { text: "GINA Steps 1-5 for asthma severity", explanation: "1=SABA, 2=ICS, 3=LABA, 4=LTRA, 5=Biologic" }
        ],
        keyPoints: [
          "FEV1/FVC <0.70 diagnostic for airflow obstruction",
          "ICS is standard controller therapy",
          "LABA added for moderate-severe disease",
          "Salbutamol first-line for acute attack",
          "Systemic steroids in moderate-severe exacerbation"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 248", edition: "21st" }
        ]
      },
      { layer: 4, slug: "asthma-exam", title: "Bronchial Asthma - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on asthma classification, management steps, and acute attack.", contentMd: "# High-Yield Facts\n\n## Key Features\n- Reversible airflow obstruction\n- FEV1/FVC <0.70\n- Bronchodilator response 12% improvement\n- Peak flow variability >20%\n\n## Management Pyramid (GINA)\n1. Intermittent: SABA\n2. Mild: ICS\n3. Moderate: ICS-LABA\n4. Severe: High-dose ICS-LABA + add-on\n5. Refractory: Biologic agents\n\n## Acute Management\n- Salbutamol 2-4 puffs/nebulized\n- Prednisolone 0.5-1 mg/kg\n- O2 to maintain SpO2 >90%\n- Magnesium 2g IV if severe\n\n## Spirometry in Asthma\n- FEV1/FVC <0.70 = obstructive\n- Bronchodilator reversibility\n- Variable obstruction",
        mnemonics: [
          { text: "GINA steps = Control escalation", explanation: "Step up if uncontrolled, step down if controlled" }
        ],
        keyPoints: [
          "Reversibility distinguishes asthma from COPD",
          "ICS is gold standard controller",
          "LABA never alone (increased mortality)",
          "GINA 5 steps for management",
          "Acute: salbutamol + steroids"
        ],
        textbookRefs: [
          { book: "GINA Guidelines 2023", chapter: "Asthma Management", edition: "Current" }
        ]
      },
      { layer: 5, slug: "asthma-recall", title: "Bronchial Asthma - Active Recall", estimatedMinutes: 10, summary: "Quick recall on asthma diagnosis and management.", contentMd: "# Active Recall\n\n**Q1: Define asthma.**\nA: Chronic inflammatory airway disorder with reversible obstruction and bronchial hyperresponsiveness\n\n**Q2: FEV1/FVC ratio in asthma?**\nA: <0.70 (obstructive pattern)\n\n**Q3: Bronchodilator reversibility criterion?**\nA: 12% improvement in FEV1 after SABA\n\n**Q4: GINA step classification?**\nA: 1=SABA PRN, 2=ICS, 3=ICS-LABA, 4=High ICS-LABA+addon, 5=Biologic\n\n**Q5: First-line controller therapy?**\nA: Inhaled corticosteroid (ICS)\n\n**Q6: Why not LABA monotherapy?**\nA: Increased mortality risk; always with ICS\n\n**Q7: Acute asthma attack first-line?**\nA: Salbutamol inhaler or nebulized\n\n**Q8: Systemic steroid in exacerbation?**\nA: Prednisolone 0.5-1 mg/kg daily x 5-7 days\n\n**Q9: Life-threatening asthma features?**\nA: Silent chest, inability to speak, confusion, SpO2 <90%\n\n**Q10: Magnesium sulfate use in asthma?**\nA: 2g IV in life-threatening, refractory to initial SABA/steroids"
      }
    ]
  },

  // 10. IM-MOD-03-TOP-03: Hepatitis & Cirrhosis
  {
    topicCode: "IM-MOD-03-TOP-03",
    layers: [
      { layer: 1, slug: "hepatitis-cirrhosis-foundation", title: "Hepatitis & Cirrhosis - Foundation", estimatedMinutes: 20, summary: "Hepatitis is liver inflammation; cirrhosis is end-stage with irreversible fibrosis. Classification by etiology: viral, alcoholic, autoimmune, metabolic.", contentMd: "# Hepatitis & Cirrhosis\n\n## Viral Hepatitis Subtypes\n\n| Virus | Route | Incubation | Chronicity | Prevention |\n|-------|-------|-----------|-----------|------------|\n| **HAV** | Fecal-oral | 15-45 days | No | Vaccine |\n| **HBV** | Blood, sexual | 45-180 days | 5-10% | Vaccine |\n| **HCV** | Blood | 14-180 days | 80% | No vaccine |\n| **HDV** | Blood (needs HBV) | 15-64 days | With HBV | HBV vaccine |\n| **HEV** | Fecal-oral | 15-60 days | No (except immunocompromised) | Under trial |\n\n## Clinical Features of Acute Hepatitis\n- Jaundice, dark urine, pale stools\n- RUQ pain, hepatomegaly\n- ALT >1000 IU/L (viral), >400 (alcoholic)\n- Bilirubin elevated\n- PT prolongation\n\n## Cirrhosis Definition\n- Irreversible liver fibrosis\n- Architectural distortion\n- Loss of hepatocyte function\n- Portal hypertension\n\n## Child-Pugh Score (Cirrhosis Severity)\n\n| Variable | 1 Point | 2 Points | 3 Points |\n|----------|---------|----------|----------|\n| **Albumin** | >3.5 | 2.8-3.5 | <2.8 |\n| **Bilirubin** | <2 | 2-3 | >3 |\n| **PT** | <4 sec prolonged | 4-6 sec | >6 sec |\n| **Ascites** | None | Mild | Moderate/severe |\n| **Encephalopathy** | None | Grade 1-2 | Grade 3-4 |\n\nClass A (5-6) = 100% 1-year survival; Class C (11-15) = 45% 1-year",
        mnemonics: [
          { text: "HAV = fecal, HBV = Blood", explanation: "HAV prevents by hygiene; HBV by vaccine" }
        ],
        keyPoints: [
          "HCV is most common cause of cirrhosis globally",
          "Hepatitis A does not cause cirrhosis",
          "HBV causes 5-10% chronicity; HCV 80%",
          "Child-Pugh classifies cirrhosis severity",
          "Alcohol is second most common cirrhosis cause in India"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 323-325 - Hepatitis", edition: "21st" }
        ]
      },
      { layer: 2, slug: "hepatitis-cirrhosis-mechanism", title: "Hepatitis & Cirrhosis - Mechanism", estimatedMinutes: 30, summary: "Viral replication, immune-mediated hepatocyte damage, fibrosis pathogenesis, and cirrhosis development.", contentMd: "# Pathogenic Mechanisms\n\n## Viral Hepatitis Pathogenesis\n\n### HBV\n- Replicates in hepatocytes\n- Immune response (CTL) damages infected cells\n- Integration into genome (persistent infection)\n- Chronic inflammation → fibrosis\n\n### HCV\n- RNA virus, high mutation rate\n- Immune escape variants\n- 80% become chronic\n- Protease NS3/4A targets MAVS (blocks IFN)\n\n### HAV\n- Acute inflammation, self-limited\n- No chronic persistence\n- Fecal shedding\n\n## Hepatic Fibrosis Progression\n1. **Stellate cell activation**: TGF-β, TNF-α stimulation\n2. **Collagen deposition**: Type I and III collagen\n3. **Loss of fenestration**: Endothelial dysfunction\n4. **Portal hypertension**: Increased vascular resistance\n5. **Cirrhosis**: Irreversible architectural change\n\n## Mechanisms of Cirrhosis Development\n- **Repetitive injury**: Chronic viral hepatitis\n- **Inflammation**: Th1/Th2 imbalance\n- **Fibrosis**: Excessive collagen deposition\n- **Angiogenesis**: New vessel formation\n- **Microvascular dysfunction**: Loss of autoregulation\n\n## Portal Hypertension Consequences\n- Splenic enlargement\n- Ascites formation (SAAG >1.1)\n- Esophageal varices\n- Hepatic encephalopathy (ammonia accumulation)\n- Hepatorenal syndrome",
        mnemonics: [
          { text: "SOS for fibrosis", explanation: "Stellate cells, Oxidative stress, Stellate cell → myofibroblast" }
        ],
        keyPoints: [
          "HBV: immune-mediated CTL damage",
          "HCV: high mutation rate, immune escape",
          "TGF-β drives stellate cell activation",
          "Portal hypertension from increased resistance",
          "Cirrhosis: irreversible fibrosis with architectural distortion"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 323-325", edition: "21st" }
        ]
      },
      { layer: 3, slug: "hepatitis-cirrhosis-clinical", title: "Hepatitis & Cirrhosis - Clinical", estimatedMinutes: 20, summary: "Diagnosis, management of hepatitis and cirrhosis, and complications in Indian healthcare context.", contentMd: "# Clinical Management\n\n## Diagnosis of Viral Hepatitis\n- **HAV**: IgM anti-HAV (acute), IgG anti-HAV (immunity)\n- **HBV**: HBsAg (surface antigen), anti-HBc, HBeAg, HBV DNA PCR\n- **HCV**: Anti-HCV (antibody), HCV RNA PCR (viremia)\n- **Transaminases**: ALT >1000 in viral (100-500 in alcoholic)\n\n## Management of Acute Hepatitis\n- **Supportive**: Rest, nutrition, hydration\n- **Avoid hepatotoxins**: Alcohol, acetaminophen\n- **Monitor**: PT, bilirubin, ALT\n- **Antivirals**: For severe acute HBV or HCV (if available)\n\n## Treatment of Chronic Viral Hepatitis\n\n**HBV**:\n- NAs (nucleos(t)ide analogs): Entecavir, tenofovir\n- INF: Interferon-α (if HBeAg+)\n- Indications: HBV DNA >2000, ALT >1x ULN\n\n**HCV**:\n- DAAs (Direct-acting antivirals): Sofosbuvir, daclatasvir\n- SVR (Sustained virologic response) >95%\n- India: Generic DAAs at lower cost\n\n## Management of Cirrhosis Complications\n\n**Ascites**:\n- Sodium restriction, diuretics (spironolactone, furosemide)\n- Paracentesis if tense\n- TIPS if refractory\n\n**Varices**:\n- Primary prophylaxis: β-blockers (propranolol, carvedilol)\n- Variceal bleeding: Octreotide, endoscopic sclerotherapy/banding\n\n**Encephalopathy**:\n- Lactulose, rifaxomicin\n- Correct precipitants (infection, bleeding)\n\n## Screening (India)\n- **HBV**: Vaccine at birth, catch-up in non-immune\n- **HCV**: Screening in high-risk (IVDU, healthcare workers)\n- **HBV/HCV**: Antenatal screening for prevention of transmission",
        mnemonics: [
          { text: "NAs for HBV (Nucleos(t)ide Analogs)", explanation: "Entecavir, Tenofovir most common" }
        ],
        keyPoints: [
          "HAV self-limited; no chronic therapy",
          "HBV: NAs are first-line antivirals",
          "HCV: DAAs achieve >95% SVR",
          "Spironolactone for ascites (potassium-sparing)",
          "β-blockers for primary variceal prophylaxis"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 323-325", edition: "21st" }
        ]
      },
      { layer: 4, slug: "hepatitis-cirrhosis-exam", title: "Hepatitis & Cirrhosis - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on viral hepatitis serologies, cirrhosis staging, and complications.", contentMd: "# High-Yield Facts\n\n## Viral Hepatitis Serology\n- **HAV**: IgM anti-HAV (acute diagnosis)\n- **HBV**: HBsAg + anti-HBc = current/past; HBV DNA (viremia)\n- **HCV**: Anti-HCV + HCV RNA = chronic HCV\n\n## ALT Elevation Levels\n- Viral hepatitis: >1000 IU/L\n- Alcoholic: 100-400 IU/L\n- AST/ALT >2:1 in alcoholic liver disease\n\n## Cirrhosis Staging (Child-Pugh)\n- Class A: 5-6 points (good prognosis)\n- Class B: 7-9 points (intermediate)\n- Class C: 10-15 points (poor prognosis)\n\n## Portal Hypertension Manifestations\n- Ascites (SAAG >1.1)\n- Varices (esophageal, gastric)\n- Splenomegaly\n- Hepatic encephalopathy\n\n## Antiviral Efficacy\n- HBV NAs: DNA suppression >95%\n- HCV DAAs: SVR >95%",
        mnemonics: [
          { text: "IgM = acute; IgG = immunity/past", explanation: "Antibody type indicates timing" }
        ],
        keyPoints: [
          "IgM anti-HAV is acute hepatitis marker",
          "HBsAg persistence = chronic HBV",
          "HCV RNA presence = viremia/infectivity",
          "Child-Pugh scores cirrhosis severity",
          "DAAs are curative for HCV"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 323-325", edition: "21st" }
        ]
      },
      { layer: 5, slug: "hepatitis-cirrhosis-recall", title: "Hepatitis & Cirrhosis - Active Recall", estimatedMinutes: 10, summary: "Quick recall on viral hepatitis and cirrhosis.", contentMd: "# Active Recall\n\n**Q1: Route of transmission for HAV, HBV, HCV?**\nA: HAV=fecal-oral, HBV=blood/sexual, HCV=blood\n\n**Q2: Chronicity rates for each virus?**\nA: HAV=none, HBV=5-10%, HCV=80%, HDV=depends on HBV\n\n**Q3: IgM anti-HAV significance?**\nA: Acute hepatitis A infection\n\n**Q4: HBsAg and anti-HBc interpretation?**\nA: Both positive = current/chronic HBV infection\n\n**Q5: HCV diagnosis markers?**\nA: Anti-HCV (antibody) + HCV RNA PCR (viremia)\n\n**Q6: First-line antiviral for HBV?**\nA: Nucleos(t)ide analogs (entecavir, tenofovir)\n\n**Q7: DAA treatment for HCV?**\nA: 12 weeks, >95% SVR (sustained virologic response)\n\n**Q8: Child-Pugh classification use?**\nA: Stages cirrhosis severity; prognostic indicator\n\n**Q9: SAAG calculation purpose?**\nA: Determines if ascites is portal hypertension-related\n\n**Q10: β-blocker use in cirrhosis?**\nA: Primary prophylaxis for esophageal varices"
      }
    ]
  },

  // 11. MI-MOD-05-TOP-05: Respiratory & Enteric Viruses
  {
    topicCode: "MI-MOD-05-TOP-05",
    layers: [
      { layer: 1, slug: "respiratory-enteric-viruses-foundation", title: "Respiratory & Enteric Viruses - Foundation", estimatedMinutes: 20, summary: "RNA viruses causing respiratory and GI infections. Classification, epidemiology, and clinical manifestations.", contentMd: "# Respiratory & Enteric Viruses\n\n## Respiratory Viruses\n\n| Virus | Transmission | Season | Complications |\n|-------|--------------|--------|----------------|\n| **RSV** | Respiratory droplets | Winter | Bronchiolitis, pneumonia |\n| **Influenza** | Respiratory droplets | Winter | Pneumonia, secondary bacterial |\n| **Parainfluenza** | Respiratory droplets | Fall/winter | Croup |\n| **Rhinovirus** | Respiratory/contact | Year-round | Asthma exacerbation |\n| **Adenovirus** | Respiratory | Year-round | Pneumonia, pharyngitis |\n| **Coronavirus** | Respiratory droplets | Winter | ARDS, multi-organ |\n\n## Enteric Viruses\n\n| Virus | Transmission | Age Group | Presentation |\n|-------|--------------|-----------|---------------|\n| **Rotavirus** | Fecal-oral | <5 years | Watery diarrhea, severe dehydration |\n| **Norovirus** | Fecal-oral | Any | Acute gastroenteritis, outbreaks |\n| **Enterovirus** | Fecal-oral | Children | Diarrhea, hand-foot-mouth |\n| **Polio** | Fecal-oral | Vaccine gap | Paralysis |\n\n## Respiratory Virus Clinical Syndromes\n- **Upper respiratory**: Rhinitis, pharyngitis, sinusitis\n- **Lower respiratory**: Bronchitis, bronchiolitis, pneumonia\n- **Systemic**: Fever, malaise, myalgia\n\n## Enteric Virus Manifestations\n- Watery/bloody diarrhea\n- Vomiting, abdominal pain\n- Dehydration\n- Complications: Seizures, encephalitis, myocarditis",
        mnemonics: [
          { text: "RSV and Parainfluenza cause CROUP", explanation: "Croup in children = respiratory syncytial virus or parainfluenza" }
        ],
        keyPoints: [
          "RSV most common lower respiratory pathogen in young children",
          "Influenza and coronavirus: winter epidemics",
          "Rotavirus most common diarrhea in young children <5 years",
          "Norovirus causes outbreaks in closed settings",
          "Enterovirus hand-foot-mouth disease"
        ],
        textbookRefs: [
          { book: "Medical Microbiology by Jawetz, Melnick & Adelberg", chapter: "Ch 36-40 - Viruses", edition: "27th" }
        ]
      },
      { layer: 2, slug: "respiratory-enteric-viruses-mechanism", title: "Respiratory & Enteric Viruses - Mechanism", estimatedMinutes: 30, summary: "Viral replication, pathogenic mechanisms, immune responses, and cell damage pathways.", contentMd: "# Viral Pathogenesis\n\n## Respiratory Virus Replication\n- Bind to cell surface receptor (RSV = F protein)\n- Enter epithelial cells (ciliated columnar)\n- Replicate in cytoplasm (influenza) or nucleus (parainfluenza)\n- Release → cell lysis → epithelial damage\n- Impaired mucociliary clearance\n\n## RSV Pathogenesis\n- Invades epithelial cells → syncytia formation\n- Bronchiole obstruction with mucus\n- Inflammatory cell infiltration\n- Bronchiolitis: inflammation of terminal bronchioles\n\n## Influenza\n- Hemagglutinin (HA) = binding\n- Neuraminidase (NA) = release\n- Antigenic drift = seasonal vaccine update\n- Antigenic shift = pandemic potential\n\n## Enteric Virus Pathogenesis\n- Acid-stable (survive stomach)\n- Replicate in small intestine epithelium\n- Villous damage → decreased absorptive surface\n- Osmotic and secretory diarrhea\n- Rarely invade beyond lamina propria\n\n## Immune Response\n- **Innate**: Interferon-α/β, NK cells\n- **Adaptive**: IgG, IgA, IgM\n- **Mucosal**: IgA (important for respiratory/GI)\n- **Cell-mediated**: CTL response (important for viral clearance)\n\n## Viral Persistence & Reactivation\n- Some enteroviruses persist in GI tract\n- Poliovirus in immunocompromised individuals\n- Chronic shedding possible",
        mnemonics: [
          { text: "HANA for influenza", explanation: "Hemagglutinin (binding), Neuraminidase (release), Antigenic drift/shift" }
        ],
        keyPoints: [
          "RSV syncytia formation characteristic",
          "Influenza antigenic drift (mutation) and shift (reassortment)",
          "Enteroviruses acid-stable",
          "Villous damage in enteric infection",
          "IgA important in mucosal immunity"
        ],
        textbookRefs: [
          { book: "Medical Microbiology", chapter: "Ch 36-40", edition: "27th" }
        ]
      },
      { layer: 3, slug: "respiratory-enteric-viruses-clinical", title: "Respiratory & Enteric Viruses - Clinical", estimatedMinutes: 20, summary: "Diagnosis, management, and prevention of respiratory and enteric viral infections.", contentMd: "# Clinical Management\n\n## Diagnosis\n- **Respiratory**: Rapid antigen test, PCR, culture\n- **Enteric**: Stool PCR, rotavirus antigen (ELISA), electron microscopy\n\n## Management of Respiratory Infections\n\n**RSV Bronchiolitis**:\n- Supportive: Oxygen, hydration, assisted ventilation if needed\n- Ribavirin: Reserved for severe/immunocompromised\n- No routine corticosteroids\n\n**Influenza**:\n- Antivirals: Oseltamivir (Tamiflu), zanamivir, baloxavir\n- Effective <48 hours from onset\n- Vaccination: Annual (split or quadrivalent)\n\n**Parainfluenza (Croup)**:\n- Humidified air, corticosteroids (dexamethasone 0.6 mg/kg)\n- Epinephrine (racemic or L-) if severe\n\n## Management of Enteric Infections\n\n**Rotavirus**:\n- ORS (Oral rehydration solution): WHO/UNICEF formula\n- Zinc supplementation: 10-14 mg daily x 10-14 days (India protocol)\n- Antiemetics cautiously\n- Rotavirus vaccine (India: introduced 2023 in UIP)\n\n**Norovirus**:\n- Supportive care, ORS\n- Isolation to prevent spread\n- No specific antiviral\n\n## Prevention\n- **Respiratory**: Vaccination (flu, RSV recently approved)\n- **Enteric**: Rotavirus vaccine, hand hygiene, sanitation\n- **Polio**: Vaccination (OPV/IPV) - India certified polio-free",
        mnemonics: [
          { text: "ORS for diarrhea = WHO formula", explanation: "Sodium chloride, glucose, potassium in specific ratios" }
        ],
        keyPoints: [
          "Oseltamivir effective <48 hours from flu onset",
          "Dexamethasone reduces croup severity",
          "Zinc reduces rotavirus diarrhea duration",
          "ORS gold standard for dehydration",
          "Rotavirus vaccine now in India's UIP"
        ],
        textbookRefs: [
          { book: "Medical Microbiology", chapter: "Ch 36-40", edition: "27th" }
        ]
      },
      { layer: 4, slug: "respiratory-enteric-viruses-exam", title: "Respiratory & Enteric Viruses - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on viral identification, antivirals, and prevention.", contentMd: "# High-Yield Facts\n\n## Virus-Disease Associations\n- RSV = Bronchiolitis (winter, infants)\n- Parainfluenza = Croup (barking cough)\n- Rotavirus = Watery diarrhea (<5 years)\n- Norovirus = Gastroenteritis outbreaks\n- Enterovirus = Hand-foot-mouth disease\n\n## Antivirals by Virus\n- Influenza: Oseltamivir, zanamivir\n- RSV: Ribavirin (severe only)\n- Enteroviruses: Supportive only (no specific antiviral)\n\n## Vaccination\n- Influenza: Annual, 2 doses in infants\n- Rotavirus: Pentavalent (now in India UIP)\n- Polio: IPV (inactivated) in India since 2014\n\n## Key Diagnostic Tests\n- Rapid antigen: RSV, influenza\n- PCR: Gold standard for all viruses\n- Electron microscopy: Rotavirus",
        mnemonics: [
          { text: "RAP for diagnosis", explanation: "Rapid antigen, Antigen ELISA, PCR (gold standard)" }
        ],
        keyPoints: [
          "Oseltamivir best started <48 hours",
          "Dexamethasone for parainfluenza croup",
          "Zinc shortens rotavirus diarrhea",
          "Rotavirus vaccine reduces hospitalization 75%",
          "Hand-foot-mouth (enterovirus) self-limited"
        ],
        textbookRefs: [
          { book: "Medical Microbiology", chapter: "Ch 36-40", edition: "27th" }
        ]
      },
      { layer: 5, slug: "respiratory-enteric-viruses-recall", title: "Respiratory & Enteric Viruses - Active Recall", estimatedMinutes: 10, summary: "Quick recall on viral infections, diagnosis, and treatment.", contentMd: "# Active Recall\n\n**Q1: Most common lower respiratory pathogen in infants?**\nA: RSV (respiratory syncytial virus)\n\n**Q2: Croup caused by which viruses?**\nA: Parainfluenza (most common), RSV, influenza, rhinovirus\n\n**Q3: Most common gastroenteritis in children <5 years?**\nA: Rotavirus\n\n**Q4: Treatment for parainfluenza croup?**\nA: Dexamethasone 0.6 mg/kg; epinephrine if severe\n\n**Q5: Antiviral for influenza?**\nA: Oseltamivir (Tamiflu) <48 hours from onset\n\n**Q6: ORS composition (WHO formula)?**\nA: Sodium 75 mmol/L, Glucose 75 mmol/L, Potassium 20 mmol/L, Chloride 65 mmol/L\n\n**Q7: Zinc supplementation in rotavirus?**\nA: 10-14 mg daily x 10-14 days (reduces duration by 1 day)\n\n**Q8: Rotavirus vaccine in India?**\nA: Pentavalent, introduced 2023 in UIP\n\n**Q9: Diagnostic test of choice for viruses?**\nA: RT-PCR (gold standard)\n\n**Q10: Parainfluenza season?**\nA: Fall and early winter"
      }
    ]
  },

  // 12-20: Additional topics in concise format
  // 12. OG-MOD-05-TOP-02: PCOS
  {
    topicCode: "OG-MOD-05-TOP-02",
    layers: [
      { layer: 1, slug: "pcos-foundation", title: "PCOS - Foundation", estimatedMinutes: 20, summary: "Polycystic ovary syndrome: hyperandrogenism, ovulatory dysfunction, and polycystic ovaries. Most common endocrine disorder in reproductive women.", contentMd: "# PCOS - Polycystic Ovary Syndrome\n\n## Rotterdam Criteria (2003) - 2/3 Required\n1. **Oligo/anovulation**: Irregular or absent periods\n2. **Hyperandrogenism**: Clinical (hirsutism, acne) or biochemical (elevated testosterone)\n3. **Polycystic ovaries on ultrasound**: 12+ follicles per ovary\n\nExclude other causes (Cushing, hyperprolactinemia, thyroid disorder)\n\n## Pathophysiology Overview\n- Hyperinsulinemia → LH excess → androgen overproduction\n- Impaired FSH signaling → arrested follicle development\n- Result: Anovulation and hirsutism\n\n## Clinical Features\n- **Reproductive**: Anovulation, infertility, miscarriage\n- **Metabolic**: Obesity (50%), insulin resistance (70%)\n- **Endocrine**: Hirsutism, acne, male pattern baldness\n- **Cardiovascular**: Dyslipidemia, hypertension\n- **Psychological**: Depression, anxiety\n\n## Complications\n- Type 2 diabetes (40% by age 40)\n- Endometrial hyperplasia/cancer (unopposed estrogen)\n- Metabolic syndrome\n- Sleep apnea\n- Infertility",
        mnemonics: [
          { text: "PCOS = Anovulation + Hyperandrogenism + Polycystic ovaries (2/3)", explanation: "Rotterdam criteria diagnosis" }
        ],
        keyPoints: [
          "Most common endocrine disorder in women",
          "Rotterdam criteria: need 2/3 features",
          "Hyperinsulinemia drives pathophysiology",
          "50% have obesity; 70% insulin resistant",
          "High risk of type 2 diabetes"
        ],
        textbookRefs: [
          { book: "Williams Obstetrics", chapter: "Ch 29 - Reproductive Endocrinology", edition: "26th" }
        ]
      },
      { layer: 2, slug: "pcos-mechanism", title: "PCOS - Mechanism", estimatedMinutes: 30, summary: "Insulin resistance pathways, LH/FSH dysregulation, androgen synthesis, and metabolic consequences.", contentMd: "# PCOS Pathogenesis\n\n## Insulin Resistance Mechanism\n- **Post-receptor defect**: IRS-1 phosphorylation impaired\n- **Compensatory hyperinsulinemia**: Pancreas increases insulin output\n- **Androgen stimulation**: Insulin stimulates theca cells → excess androgen\n- **LH excess**: Hyperinsulinemia increases GnRH pulsatility → LH surge\n\n## Androgen Overproduction\n- **Theca cell hyperplasia**: Stimulated by LH and insulin\n- **Increased 17-hydroxylase activity**: CYP17A1 expression\n- **Result**: Testosterone, androstenedione elevated\n- **Peripheral conversion**: To DHT and estrone\n\n## FSH/LH Dysregulation\n- **Elevated LH/FSH ratio**: >2:1 or 3:1\n- **LH pulsatility increased**: High-frequency GnRH pulses\n- **Impaired FSH signaling**: Due to hyperandrogenism and anti-Müllerian hormone (AMH)\n- **Arrested follicle development**: Stuck at antral stage\n\n## Metabolic Dysfunction\n- Dyslipidemia: High triglycerides, low HDL\n- Impaired glucose tolerance\n- Central obesity: Visceral fat deposition\n- Inflammatory cytokines: IL-6, TNF-α\n\n## Endometrial Complications\n- **Unopposed estrogen**: No progesterone (anovulation)\n- **Endometrial hyperplasia**: Simple → complex → atypia\n- **Endometrial cancer risk**: Increased 3x",
        mnemonics: [
          { text: "HIRMA for PCOS features", explanation: "Hyperinsulinemia, Insulin resistance, Resistant follicles, Metabolic dysfunction, Androgen excess" }
        ],
        keyPoints: [
          "Post-receptor insulin resistance (IRS-1)",
          "Hyperinsulinemia stimulates androgen production",
          "LH/FSH ratio elevated (usually >2:1)",
          "Unopposed estrogen causes endometrial hyperplasia",
          "Chronic inflammation (elevated IL-6, TNF-α)"
        ],
        textbookRefs: [
          { book: "Williams Obstetrics", chapter: "Ch 29", edition: "26th" }
        ]
      },
      { layer: 3, slug: "pcos-clinical", title: "PCOS - Clinical", estimatedMinutes: 20, summary: "Diagnosis, investigations, and management of PCOS in Indian women.", contentMd: "# Clinical Diagnosis & Management\n\n## Investigations\n- **Hormones**: Testosterone (elevated), LH, FSH, DHEA-S\n- **Metabolic**: Fasting glucose, insulin, HOMA-IR, lipid profile\n- **Thyroid**: TSH, free T4 (exclude thyroid disease)\n- **Ultrasound**: Transvaginal (polycystic ovaries)\n\n## Management\n\n**Lifestyle (First-line)**:\n- Weight loss 5-10% → improves ovulation\n- Exercise: 150 min/week moderate intensity\n- Diet: Low glycemic index, high protein\n\n**Pharmacological**:\n- **Infertility**: Clomiphene citrate (first-line), letrozole, metformin\n- **Menstrual regulation**: OCPs (combined estrogen-progesterone)\n- **Hirsutism**: Spironolactone 100-200 mg daily\n- **Metabolic**: Metformin 1500-2000 mg daily (improves insulin sensitivity)\n- **Diabetes prevention**: Metformin if impaired glucose tolerance\n\n**Assisted Reproduction**:\n- IVF: For clomiphene-resistant or severe disease\n- Ovarian drilling: Rarely used now\n\n## Management of Endometrial Risk\n- Progesterone: 5-7 days/month if amenorrheic\n- OCPs: Provide progesterone if taking for contraception\n- Endometrial biopsy: If abnormal bleeding\n\n## Indian Context\n- PCOS common in urban areas (prevalence 5-26%)\n- Rising due to sedentary lifestyle, diet changes\n- Genetic predisposition in certain populations",
        mnemonics: [
          { text: "CLiM for infertility management", explanation: "Clomiphene, Letrozole, Metformin" }
        ],
        keyPoints: [
          "Lifestyle modification most important",
          "Clomiphene 50-100mg x 5 days: first-line ovulation induction",
          "Metformin improves insulin sensitivity",
          "Spironolactone for hirsutism",
          "Weight loss 5-10% restores ovulation"
        ],
        textbookRefs: [
          { book: "Williams Obstetrics", chapter: "Ch 29", edition: "26th" }
        ]
      },
      { layer: 4, slug: "pcos-exam", title: "PCOS - Exam Prep", estimatedMinutes: 15, summary: "High-yield PCOS facts for NEXT/NEET exams.", contentMd: "# High-Yield Facts\n\n## Rotterdam Diagnostic Criteria\n- Oligo/anovulation\n- Hyperandrogenism (clinical/biochemical)\n- Polycystic ovaries on USG\n- (Need 2/3; exclude other causes)\n\n## Key Lab Findings\n- LH/FSH ratio >2:1 or 3:1\n- Elevated testosterone, DHEA-S\n- Elevated fasting insulin (if insulin resistant)\n- Normal/elevated AMH\n\n## Management Approach\n1. Lifestyle modification (weight loss 5-10%)\n2. Metformin (improves insulin sensitivity, ovulation)\n3. OCPs (menstrual regulation, hirsutism)\n4. Clomiphene (ovulation induction if infertile)\n\n## Complications\n- Type 2 diabetes (40% by age 40)\n- Endometrial cancer (3x increased risk)\n- Metabolic syndrome\n\n## Progesterone Therapy Indication\n- Amenorrheic patients: Prevent endometrial hyperplasia",
        mnemonics: [
          { text: "LFH > 2:1 (or 3:1)", explanation: "LH/FSH ratio elevated in PCOS" }
        ],
        keyPoints: [
          "Rotterdam criteria: 2/3 features required",
          "Hyperinsulinemia drives hyperandrogenism",
          "Lifestyle: weight loss, exercise, diet",
          "Metformin: first-line pharmacotherapy",
          "Clomiphene: ovulation induction"
        ],
        textbookRefs: [
          { book: "Williams Obstetrics", chapter: "Ch 29", edition: "26th" }
        ]
      },
      { layer: 5, slug: "pcos-recall", title: "PCOS - Active Recall", estimatedMinutes: 10, summary: "Quick recall on PCOS diagnosis and management.", contentMd: "# Active Recall\n\n**Q1: Rotterdam criteria (2/3)?**\nA: Oligo/anovulation, Hyperandrogenism, Polycystic ovaries on USG\n\n**Q2: LH/FSH ratio in PCOS?**\nA: Elevated (usually >2:1, can be 3:1)\n\n**Q3: Main pathophysiologic problem?**\nA: Insulin resistance → hyperinsulinemia → LH excess → androgen overproduction\n\n**Q4: First-line management?**\nA: Lifestyle modification (weight loss, exercise, diet)\n\n**Q5: Pharmacotherapy for ovulation?**\nA: Clomiphene 50-100 mg daily x 5 days\n\n**Q6: Metformin dose and benefit?**\nA: 1500-2000 mg daily; improves insulin sensitivity and ovulation\n\n**Q7: Hirsutism management?**\nA: Spironolactone 100-200 mg daily (blocks androgen receptor)\n\n**Q8: Endometrial cancer risk in PCOS?**\nA: 3x increased due to unopposed estrogen\n\n**Q9: Prevention of endometrial hyperplasia?**\nA: Cyclic progesterone if amenorrheic\n\n**Q10: Type 2 diabetes risk by age 40?**\nA: 40% of PCOS women"
      }
    ]
  },
  // 13. OP-MOD-04-TOP-02: Retinal Detachment & ARMD
  { topicCode: "OP-MOD-04-TOP-02", layers: [
    { layer: 1, slug: "retinal-detachment-foundation", title: "Retinal Detachment & ARMD - Foundation", estimatedMinutes: 20, summary: "Retinal detachment: separation of neurosensory retina from RPE. ARMD: age-related macular degeneration. Leading causes of vision loss.", contentMd: "# Retinal Detachment & ARMD\n\n## Retinal Detachment Classification\n\n**Rhegmatogenous (RRD)**: Retinal break → vitreous seepage\n- Risk factors: High myopia, lattice degeneration, trauma\n- Symptoms: Floaters, flashing lights, shadow spreading\n- Urgent referral required\n\n**Tractional**: Scar tissue pulls retina\n- Diabetes, proliferative retinopathy\n- Gradual vision loss\n\n**Exudative**: Fluid under intact retina\n- Choroiditis, hypertensive retinopathy\n- Reabsorption possible\n\n## ARMD Classification\n\n**Dry (Non-neovascular)**: 80%\n- Drusen (hard, soft)\n- Geographic atrophy\n- Slow progression\n\n**Wet (Neovascular)**: 20%\n- Choroidal neovascularization (CNV)\n- Rapid vision loss\n- Requires urgent treatment\n\n## Epidemiology\n- RRD: 1 in 10,000 per year\n- ARMD: Leading cause of blindness >50 years in developed countries\n- India: Rising incidence with aging population",
        mnemonics: [
          { text: "RRD = Rhegmatogenous (break), TED = Tractional/Exudative", explanation: "Types of retinal detachment" }
        ],
        keyPoints: [
          "RRD emergency: requires vitreoretinal surgery",
          "ARMD wet form: neovascularization",
          "Floaters + flashing lights = retinal detachment until proven otherwise",
          "Dry ARMD: drusen, geographic atrophy",
          "High myopia risk factor for RRD"
        ],
        textbookRefs: [
          { book: "Clinical Ophthalmology by Kanski", chapter: "Ch 9 - Retinal Detachment", edition: "9th" }
        ]
      },
      { layer: 2, slug: "retinal-detachment-mechanism", title: "Retinal Detachment & ARMD - Mechanism", estimatedMinutes: 30, summary: "Pathophysiology of retinal break formation, vitreous traction, ARMD pathogenesis with drusen and CNV.", contentMd: "# Pathophysiology\n\n## RRD Mechanism\n1. **Retinal break formation**: Stress from vitreous traction\n2. **Vitreous liquefaction**: Age-related, allows fluid entry\n3. **Fluid accumulation**: Under retina through break\n4. **Progressive detachment**: Spreads along retina\n5. **Photoreceptor ischemia**: Vision loss (macula at risk)\n\n## Dry ARMD\n- **Drusen accumulation**: Lipid-protein deposits in Bruch's membrane\n- **RPE dysfunction**: Reduced waste clearance\n- **Photoreceptor degeneration**: Loss of vision\n- **Oxidative stress**: ROS-mediated damage\n- **Inflammation**: Complement activation, immune infiltration\n\n## Wet ARMD (CNV)\n- **VEGF upregulation**: Hypoxia-driven\n- **CNV formation**: Abnormal new vessels\n- **Vessel permeability**: Exudate, hemorrhage\n- **RPE damage**: Rapid photoreceptor loss\n- **Scarring**: Disciform scar formation\n\n## Risk Factors\n- **Genetics**: High heritability\n- **Age**: >50 years\n- **Smoking**: Major modifiable risk\n- **Hypertension**: Vascular damage\n- **Nutritional deficiency**: Antioxidants (vitamins C, E, lutein)",
        mnemonics: [
          { text: "AREDS = Antioxidants for ARMD", explanation: "Vitamins A, C, E, Zinc, Lutein" }
        ],
        keyPoints: [
          "Retinal break → vitreous seepage → detachment",
          "Myopia causes posterior pole stretching",
          "Drusen markers for ARMD severity",
          "CNV leads to rapid vision loss in wet ARMD",
          "AREDS formula reduces ARMD progression"
        ],
        textbookRefs: [
          { book: "Clinical Ophthalmology", chapter: "Ch 9-10", edition: "9th" }
        ]
      },
      { layer: 3, slug: "retinal-detachment-clinical", title: "Retinal Detachment & ARMD - Clinical", estimatedMinutes: 20, summary: "Diagnosis and management of RRD and ARMD in Indian ophthalmic practice.", contentMd: "# Clinical Management\n\n## RRD Diagnosis & Management\n\n**Presentation**:\n- Floaters (vitreous hemorrhage)\n- Photopsia (flashing lights)\n- Shadow/curtain in visual field\n- Scotoma if macula involved\n\n**Urgent referral to vitreoretinal surgeon**:\n- **Scleral buckle**: External support\n- **Vitrectomy**: Internal tamponade with gas/silicon oil\n- **Pneumatic retinopexy**: Gas bubble for superior detachment\n- **Cryotherapy/Laser**: Around break to create chorioretinal adhesion\n\n## ARMD Management\n\n**Dry ARMD**:\n- Vitamins: AREDS formula (vitamins C, E, beta-carotene, zinc)\n- Lutein/zeaxanthin: Macular pigment\n- Smoking cessation\n- Low vision aids\n\n**Wet ARMD**:\n- **Anti-VEGF injections**: Bevacizumab, ranibizumab, aflibercept (intravitreal)\n- **PDT (Photodynamic therapy)**: Verteporfin activation\n- **Laser photocoagulation**: Extrafoveal CNV\n- Monthly monitoring: OCT imaging\n\n## Monitoring\n- **OCT imaging**: Gold standard for CNV and fluid\n- **Amsler grid**: Home monitoring for dry ARMD\n- **Fundus photography**: Document extent",
        mnemonics: [
          { text: "Anti-VEGF = gold standard for wet ARMD", explanation: "Intravitreal injections monthly" }
        ],
        keyPoints: [
          "RRD: urgent surgical emergency",
          "Scleral buckle success rate >90%",
          "AREDS vitamins slow dry ARMD progression",
          "Anti-VEGF injections for wet ARMD",
          "OCT imaging guides treatment decisions"
        ],
        textbookRefs: [
          { book: "Clinical Ophthalmology", chapter: "Ch 9-10", edition: "9th" }
        ]
      },
      { layer: 4, slug: "retinal-detachment-exam", title: "Retinal Detachment & ARMD - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on retinal detachment types and ARMD management.", contentMd: "# Exam Points\n\n## Key Features\n- **RRD**: Emergency, myopia risk factor\n- **Dry ARMD**: Drusen, atrophy, slow\n- **Wet ARMD**: CNV, fast, neovascularization\n\n## Management\n- RRD: Vitrectomy, scleral buckle, cryotherapy\n- Dry ARMD: AREDS vitamins\n- Wet ARMD: Anti-VEGF intravitreal injections\n\n## Diagnostic Tests\n- B-scan ultrasound: If media opacity\n- OCT: CNV and fluid\n- Amsler grid: Home monitoring",
        mnemonics: [
          { text: "RRD Emergency!", explanation: "Rhegmatogenous retinal detachment requires urgent surgery" }
        ],
        keyPoints: [
          "Floaters + photopsia = RRD until proven otherwise",
          "High myopia main RRD risk factor",
          "Anti-VEGF injections standard wet ARMD treatment",
          "AREDS reduces dry ARMD progression by 25%",
          "OCT detects CNV and fluid"
        ],
        textbookRefs: [
          { book: "Clinical Ophthalmology", chapter: "Ch 9-10", edition: "9th" }
        ]
      },
      { layer: 5, slug: "retinal-detachment-recall", title: "Retinal Detachment & ARMD - Active Recall", estimatedMinutes: 10, summary: "Quick recall on RRD and ARMD.", contentMd: "# Active Recall\n\n**Q1: RRD vs TED classification?**\nA: RRD=retinal break, TED=Tractional/Exudative (intact retina)\n\n**Q2: RRD emergency symptoms?**\nA: Floaters, photopsia, shadow/curtain in field\n\n**Q3: RRD surgical options?**\nA: Vitrectomy, scleral buckle, pneumatic retinopexy, cryotherapy\n\n**Q4: Dry vs wet ARMD?**\nA: Dry=drusen+atrophy+slow; Wet=CNV+fast vision loss\n\n**Q5: AREDS formula components?**\nA: Vitamins C, E, beta-carotene, Zinc, Lutein\n\n**Q6: Wet ARMD treatment?**\nA: Intravitreal anti-VEGF (bevacizumab, ranibizumab)\n\n**Q7: Main RRD risk factor?**\nA: High myopia\n\n**Q8: CNV characteristic finding?**\nA: Choroidal neovascularization on angiography/OCT\n\n**Q9: Amsler grid purpose?**\nA: Home monitoring for metamorphopsia (distorted lines)\n\n**Q10: Success rate of scleral buckle?**\nA: >90% for primary RRD"
      }
    ]
  },

  // 14. OR-MOD-02-TOP-02: Humerus Fractures
  { topicCode: "OR-MOD-02-TOP-02", layers: [
    { layer: 1, slug: "humerus-fractures-foundation", title: "Humerus Fractures - Foundation", estimatedMinutes: 20, summary: "Humerus fractures: proximal (surgical neck, anatomical neck), shaft, and distal (supracondylar, condylar). Classification, complications, and management.", contentMd: "# Humerus Fractures\n\n## Anatomical Classification\n\n**Proximal Humerus**:\n- Surgical neck fractures (most common)\n- Anatomical neck\n- Greater/lesser tuberosity\n\n**Shaft (Diaphysis)**:\n- Spiral, oblique, comminuted\n- Risk: Radial nerve injury (posterior)\n\n**Distal Humerus**:\n- Supracondylar (most common in children)\n- Transcondylar\n- Condylar (lateral, medial)\n- T-type, Y-type\n\n## Neer Classification (Proximal)\n- **1-part**: Minimal displacement\n- **2-part**: Surgical neck, greater tuberosity\n- **3-part**: 2-part + other component displaced\n- **4-part**: All major fragments displaced\n\n## Complications\n- **Radial nerve**: Posterior arm (motor: wrist extension)\n- **Axillary nerve**: Proximal (motor: deltoid; sensory: regimental badge area)\n- **Brachial artery**: Vascular injury\n- **Varus/valgus deformity**: Malunion\n- **Stiffness**: Loss of ROM",
        mnemonics: [
          { text: "Neer 1,2,3,4-part classification", explanation: "Number of displaced fragments in proximal humerus" }
        ],
        keyPoints: [
          "Surgical neck most common proximal fracture",
          "Supracondylar most common distal (children)",
          "Radial nerve: posterior arm injury risk",
          "Axillary nerve: deltoid paralysis",
          "Varus deformity in 4-part fractures"
        ],
        textbookRefs: [
          { book: "Miller's Review of Orthopaedics", chapter: "Ch 17 - Shoulder", edition: "6th" }
        ]
      },
      { layer: 2, slug: "humerus-fractures-mechanism", title: "Humerus Fractures - Mechanism", estimatedMinutes: 30, summary: "Injury mechanisms, anatomical variations affecting fracture patterns, and injury to neurovascular structures.", contentMd: "# Mechanisms\n\n## Proximal Humerus Fractures\n- **Direct trauma**: Fall on shoulder\n- **Indirect**: Fall on outstretched hand (FOOSH)\n- **Pathologic**: Osteoporosis (elderly), metastases\n- **Mechanism**: Impaction, avulsion by rotator cuff\n\n## Radial Nerve Injury\n- Location: Posterior arm in spiral groove\n- Mechanism: Direct trauma, traction, bone fragment\n- Injury rate: 10% in shaft fractures\n- Function: Wrist extension (dorsal hand sensory loss)\n\n## Axillary Nerve Injury\n- Location: Below shoulder joint\n- Mechanism: Displacement of proximal fracture\n- Function: Deltoid (shoulder abduction), sensory regimental badge\n\n## Supracondylar Fractures (Children)\n- **Extension type**: 95% (fall on extended elbow)\n- **Flexion type**: 5%\n- **Complications**: Vascular (brachial artery), nerve (anterior interosseous)\n\n## Anatomical Factors\n- **Cortical bone strength**: Decreased with age\n- **Soft tissue attachment**: Rotator cuff tension increases displacement\n- **Medullary canal diameter**: Affects internal fixation choice",
        mnemonics: [
          { text: "FRAN for radial nerve (Forearm, Radial nerve, Anterior interosseous, wrist extensors)", explanation: "Functions of radial nerve" }
        ],
        keyPoints: [
          "Radial nerve injury in 10% of shaft fractures",
          "Axillary nerve injury with proximal displacement",
          "Supracondylar extension type 95%",
          "Brachial artery compression in supracondylar",
          "Pathologic fractures in elderly with osteoporosis"
        ],
        textbookRefs: [
          { book: "Miller's Review of Orthopaedics", chapter: "Ch 17", edition: "6th" }
        ]
      },
      { layer: 3, slug: "humerus-fractures-clinical", title: "Humerus Fractures - Clinical", estimatedMinutes: 20, summary: "Diagnosis, imaging, and management of humerus fractures with complications.", contentMd: "# Clinical Management\n\n## Diagnosis\n- X-ray: AP, lateral, axillary views\n- CT: 3D reconstruction for complex fractures\n- Neurovascular exam: BEFORE reduction\n- Motor: Wrist extension (C6, C7, C8), deltoid (C5)\n- Sensory: Regimental badge (axillary), dorsal hand (radial)\n\n## Management\n\n**Proximal Humerus**:\n- **1-part/minimal displacement**: Sling, physiotherapy\n- **2-part (displaced)**: Internal fixation (ORIF) vs conservative\n- **3-4 part**: ORIF (PHILOS plate, intramedullary nailing)\n- **Avascular necrosis risk**: >65 years, >4-part\n\n**Shaft Fractures**:\n- **Non-displaced/minimal**: Functional bracing (Sarmiento)\n- **Displaced**: ORIF (compression plating) or intramedullary nailing\n- **Radial nerve**: Explore if irreducible or iatrogenic injury\n\n**Distal Humerus**:\n- **Supracondylar**: Emergency reduction (vascular compromise)\n- **Non-operative**: Minimal displacement, extension immobilization\n- **Operative**: ORIF with percutaneous K-wires or plates\n- **Condylar**: ORIF to restore joint surface\n\n## Radial Nerve Injury Management\n- **Posterior interosseous nerve (PIN)**: Wrist drop\n- **If acute**: Splint, neurosurgery consultation\n- **If delayed onset post-reduction**: Likely neuropraxia\n- **If persistent**: EMG at 3 weeks, surgery if no recovery by 3 months",
        mnemonics: [
          { text: "PHILOS = Proximal Humerus Internal Locking Osteosynthesis", explanation: "Common plate for proximal humerus ORIF" }
        ],
        keyPoints: [
          "Supracondylar reduction emergency (vascular)",
          "PHILOS plate for proximal humerus ORIF",
          "Functional bracing effective for shaft fractures",
          "Radial nerve neurapraxia usually recovers",
          "AVN risk in 4-part proximal fractures"
        ],
        textbookRefs: [
          { book: "Miller's Review of Orthopaedics", chapter: "Ch 17", edition: "6th" }
        ]
      },
      { layer: 4, slug: "humerus-fractures-exam", title: "Humerus Fractures - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on humerus fracture types and management.", contentMd: "# High-Yield Facts\n\n## Neer Classification (Proximal)\n- 1-part: No displacement\n- 2-part: One displaced fragment\n- 3-part: Two displaced fragments\n- 4-part: All major fragments displaced\n\n## Nerve Injuries\n- Radial nerve: Posterior arm, wrist drop\n- Axillary nerve: Deltoid paralysis, sensory badge area\n\n## Supracondylar (Children)\n- Extension type: 95%\n- Emergency: Vascular compromise\n- Percutaneous K-wires fixation\n\n## Management by Type\n- Proximal 1-part: Conservative\n- Shaft: Functional bracing or ORIF\n- Distal: Usually requires ORIF for joint restoration",
        mnemonics: [
          { text: "Supracondylar = Pediatric EMERGENCY", explanation: "Risk of vascular compromise" }
        ],
        keyPoints: [
          "Surgical neck most common proximal fracture",
          "PHILOS plate gold standard for ORIF",
          "Radial nerve 10% in shaft fractures",
          "Supracondylar extension type 95%",
          "Non-operative 1-part proximal fractures"
        ],
        textbookRefs: [
          { book: "Miller's Review of Orthopaedics", chapter: "Ch 17", edition: "6th" }
        ]
      },
      { layer: 5, slug: "humerus-fractures-recall", title: "Humerus Fractures - Active Recall", estimatedMinutes: 10, summary: "Quick recall on humerus fractures and complications.", contentMd: "# Active Recall\n\n**Q1: Most common proximal humerus fracture?**\nA: Surgical neck fracture\n\n**Q2: Neer 4-part fracture characteristics?**\nA: All major fragments displaced (high AVN risk)\n\n**Q3: Radial nerve injury location?**\nA: Posterior arm in spiral groove\n\n**Q4: Radial nerve injury sign?**\nA: Wrist drop (inability to extend wrist)\n\n**Q5: Axillary nerve injury sign?**\nA: Deltoid paralysis (loss of shoulder abduction)\n\n**Q6: Supracondylar fracture most common type?**\nA: Extension type (95%)\n\n**Q7: Supracondylar fracture emergency?**\nA: Vascular compromise from displacement\n\n**Q8: PHILOS plate indication?**\nA: Proximal humerus ORIF (2-4 part)\n\n**Q9: Management of 1-part proximal fracture?**\nA: Conservative (sling, physiotherapy)\n\n**Q10: Functional bracing indication?**\nA: Non-displaced/minimally displaced shaft fractures"
      }
    ]
  },

  // 15-20: Remaining topics in brief format (5 layers each)
  { topicCode: "PE-MOD-03-TOP-02", layers: [{ layer: 1, slug: "pem-foundation", title: "Protein-Energy Malnutrition - Foundation", estimatedMinutes: 20, summary: "PEM: deficiency of protein and/or energy. Marasmus vs kwashiorkor. Most common nutritional deficiency globally.", contentMd: "# PEM Classification\n\n**Kwashiorkor**: Protein deficiency, adequate carbs\n- Edema, ascites, fatty liver\n- Hair depigmentation\n- Dermatitis\n\n**Marasmus**: Energy deficiency\n- Wasting, growth retardation\n- No edema\n- Loose skin\n\n**Marasmic-kwashiorkor**: Mixed\n\nIndia: High prevalence in rural areas, poor access to nutritious food", mnemonics: [{ text: "Kwashiorkor = edema; Marasmus = wasting", explanation: "K has fluid; M is malnourished" }], keyPoints: ["PEM leads to immunosuppression", "Edema present in kwashiorkor only", "Growth stunting and wasting in children", "Reversible if intervention early"], textbookRefs: [{ book: "Park Textbook of Preventive & Social Medicine", chapter: "Ch 10 - Malnutrition", edition: "25th" }] }, { layer: 2, slug: "pem-mechanism", title: "Protein-Energy Malnutrition - Mechanism", estimatedMinutes: 30, summary: "Adaptive responses, immune dysfunction, metabolic changes in PEM.", contentMd: "# PEM Pathophysiology\n\n## Metabolic Adaptation\n- Reduced basal metabolic rate (20-30%)\n- Decreased protein synthesis\n- Liver glycogen depletion\n- Muscle breakdown for gluconeogenesis\n\n## Immune Dysfunction\n- Impaired cell-mediated immunity\n- Reduced antibody response\n- Decreased complement levels\n- Opportunistic infections\n\n## Organ-Specific Changes\n- **Liver**: Fatty infiltration, cirrhosis\n- **Heart**: Dilated cardiomyopathy\n- **GI**: Villous atrophy, reduced absorption\n- **Thyroid**: Reduced T3, TSH\n\n## Kwashiorkor Specifics\n- Albumin significantly decreased\n- Edema from osmotic changes\n- Fatty liver (hepatic steatosis)\n\n## Refeeding Syndrome Risk\n- Hypophosphatemia, hypokalemia\n- Cardiac arrhythmias\n- Fluid overload", mnemonics: [{ text: "FISH for refeeding syndrome", explanation: "Fluid, Insulin, Shifts, Hypophosphatemia" }], keyPoints: ["Metabolic rate decreased 20-30%", "Cell-mediated immunity impaired", "Albumin significantly low in kwashiorkor", "Refeeding must be gradual", "Villous atrophy reduces absorption"], textbookRefs: [{ book: "Park Textbook", chapter: "Ch 10", edition: "25th" }] }, { layer: 3, slug: "pem-clinical", title: "Protein-Energy Malnutrition - Clinical", estimatedMinutes: 20, summary: "Diagnosis, assessment, and management of PEM in Indian children.", contentMd: "# Clinical Assessment & Management\n\n## Grading (IAP)\n- **Normal**: 71-100% expected weight for age\n- **Grade I**: 51-70% (mild)\n- **Grade II**: 41-50% (moderate)\n- **Grade III**: 31-40% (severe)\n- **Grade IV**: <30% (very severe)\n\n## Management\n\n**Nutritional Rehabilitation**:\n- Gradual caloric increase (10-15 kcal/kg/day initially)\n- Micronutrients: Vitamin A, B, C, iron, zinc\n- Treat infections aggressively\n- Physiotherapy and immunization\n\n**Complications Management**:\n- Refeeding syndrome: Monitor electrolytes\n- Infections: Antibiotics if pneumonia, diarrhea\n- Cardiac: Monitor for dilated cardiomyopathy\n\n**Prevention (India)**:\n- ICDS (Integrated Child Development Services)\n- School nutrition programs\n- Anganwadi centers\n\n## Prognosis\n- Early intervention: Good recovery\n- Delayed: Permanent cognitive impairment\n- Mortality: 5-10% during rehabilitation", mnemonics: [{ text: "IAP Grading by weight for age percentage", explanation: "71-100%=normal, 51-70%=Grade I, <30%=Grade IV" }], keyPoints: ["Gradual nutritional rehabilitation", "Monitor for refeeding syndrome", "Micronutrients essential", "Immunizations deferred until recovered", "Early intervention crucial for brain development"], textbookRefs: [{ book: "Park Textbook", chapter: "Ch 10", edition: "25th" }] }, { layer: 4, slug: "pem-exam", title: "Protein-Energy Malnutrition - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on PEM classification and management.", contentMd: "# High-Yield Points\n\n**Kwashiorkor Features**: Edema, ascites, fatty liver, skin changes\n**Marasmus**: Wasting, no edema, skin and bones visible\n\n**IAP Classification**: 51-70% = Grade I, <30% = Grade IV\n\n**Management**: Gradual caloric increase, micronutrients\n\n**Complication**: Refeeding syndrome (hypophosphatemia, hypokalemia)\n\n**Prevention**: ICDS, school nutrition", mnemonics: [{ text: "K = Kwashiorkor with edema; M = Marasmus without", explanation: "Edema differentiates the two" }], keyPoints: ["Edema diagnostic of kwashiorkor", "Gradual nutrition critical", "Infections common cause of death", "Micronutrients (vitamin A) prevent xerophthalmia", "Early treatment prevents permanent disability"], textbookRefs: [{ book: "Park Textbook", chapter: "Ch 10", edition: "25th" }] }, { layer: 5, slug: "pem-recall", title: "Protein-Energy Malnutrition - Active Recall", estimatedMinutes: 10, summary: "Quick recall on PEM types and management.", contentMd: "# Active Recall\n\n**Q1: Kwashiorkor vs marasmus edema?**\nA: Kwashiorkor has edema, marasmus does not\n\n**Q2: IAP classification for 40% weight for age?**\nA: Grade III (severe)\n\n**Q3: Liver finding in kwashiorkor?**\nA: Fatty infiltration, hepatomegaly\n\n**Q4: Skin changes in kwashiorkor?**\nA: Depigmentation, hyperkeratosis, peeling\n\n**Q5: Initial caloric intake in rehabilitation?**\nA: 10-15 kcal/kg/day (gradual increase)\n\n**Q6: Refeeding syndrome risk electrolytes?**\nA: Hypophosphatemia, hypokalemia\n\n**Q7: Most common cause of death in PEM?**\nA: Infections (measles, diarrhea, pneumonia)\n\n**Q8: Albumin level in kwashiorkor?**\nA: Significantly decreased (<2.5 g/dL)\n\n**Q9: Immune dysfunction in PEM?**\nA: Impaired cell-mediated immunity, reduced antibody response\n\n**Q10: Prevention strategy in India?**\nA: ICDS (Integrated Child Development Services), anganwadi centers"
      }
    ]
  },

  // Remaining 5 topics in concise format to complete 20 total
  { topicCode: "PH-MOD-05-TOP-06", layers: [{ layer: 1, slug: "anthelmintics-foundation", title: "Anthelmintics & Antiprotozoals - Foundation", estimatedMinutes: 20, summary: "Drugs for helminths and protozoa. Classification and mechanisms of action against parasites.", contentMd: "# Anthelmintics & Antiprotozoals\n\n## Common Helminths (India)\n- **Roundworms**: Ascaris, hookworm, pinworm\n- **Tapeworms**: Taenia solium (neurocysticercosis)\n- **Flukes**: Schistosoma\n\n## Common Protozoans\n- **Malaria**: Plasmodium (P. vivax, P. falciparum)\n- **Amoebiasis**: E. histolytica\n- **Giardiasis**: G. lamblia\n- **Leishmaniasis**: Leishmania donovani\n\n## Major Anthelmintics\n- **Albendazole**: Broad-spectrum, first-line\n- **Mebendazole**: Pinworm, roundworm\n- **Praziquantel**: Tapeworms, flukes\n- **Ivermectin**: Onchocerciasis, filariasis\n\n## Common Antiprotozoals\n- **Chloroquine**: Malaria (P. vivax, sensitive P. falciparum)\n- **Artemisinins**: Severe malaria, resistant P. falciparum\n- **Metronidazole**: Amoebiasis, giardiasis\n- **Amphotericin B**: Leishmaniasis (visceral)", mnemonics: [{ text: "ABP for anthelmintics", explanation: "Albendazole (broad-spectrum), Benzimidazoles, Praziquantel" }], keyPoints: ["Albendazole most commonly used", "Neurocysticercosis: albendazole + steroids", "Malaria treatment depends on resistance pattern", "Chloroquine still effective in India for P. vivax", "Artemisinin combination therapy gold standard"], textbookRefs: [{ book: "KDT Pharmacology", chapter: "Ch 44-45 - Antimalarials & Antihelmintics", edition: "9th" }] }, { layer: 2, slug: "anthelmintics-mechanism", title: "Anthelmintics & Antiprotozoals - Mechanism", estimatedMinutes: 30, summary: "Mechanisms of antiparasitic action: microtubule disruption, metabolic inhibition, immune modulation.", contentMd: "# Mechanisms of Action\n\n## Benzimidazoles (Albendazole, Mebendazole)\n- **Target**: Helminth tubulin\n- **Mechanism**: Inhibit microtubule polymerization\n- **Effect**: Paralysis, inability to feed\n- **Selectivity**: Helminth tubulin > human\n\n## Praziquantel\n- **Target**: Trematode and cestode muscles\n- **Mechanism**: Increases calcium permeability\n- **Effect**: Spastic paralysis, dislodgement\n- **Also works**: Anti-inflammatory effect\n\n## Antimalarials\n\n**Chloroquine**:\n- Accumulates in parasite food vacuole\n- Blocks heme detoxification\n- Leads to toxic heme accumulation\n- Resistance: P. falciparum (mainly)\n\n**Artemisinins**:\n- Rapid action (fast parasite clearance)\n- Activate by parasite heme\n- Free radical formation\n- Rapid acting, few parasites recrudescence\n\n## Metronidazole (Protozoans)\n- Anaerobic activation (prodrug)\n- DNA strand breaks\n- Effective for E. histolytica, G. lamblia\n\n## Amphotericin B (Leishmaniasis)\n- Binds ergosterol in parasite membrane\n- Causes membrane rupture\n- Effective but toxic (renal)", mnemonics: [{ text: "MAMA for antimalarials", explanation: "Metronidazole (amoeba), Artemisinins, Mebendazole/Albendazole" }], keyPoints: ["Albendazole inhibits microtubule polymerization", "Praziquantel increases calcium permeability", "Artemisinins fastest-acting antimalarials", "Chloroquine still first-line in India for P. vivax", "Resistance widespread for P. falciparum"], textbookRefs: [{ book: "KDT Pharmacology", chapter: "Ch 44-45", edition: "9th" }] }, { layer: 3, slug: "anthelmintics-clinical", title: "Anthelmintics & Antiprotozoals - Clinical", estimatedMinutes: 20, summary: "Treatment regimens and management of helminthic and parasitic infections in India.", contentMd: "# Clinical Use\n\n## Ascaris Lumbricoides\n- **Drug**: Albendazole 400mg single dose\n- **Alternatives**: Mebendazole, pyrantel\n\n## Hookworm\n- **Drug**: Albendazole 400mg x 3 days\n- **Iron supplementation**: Critical\n\n## Taenia solium (Neurocysticercosis)\n- **Drug**: Albendazole 15 mg/kg/day x 7-28 days\n- **Must add**: Corticosteroids + anticonvulsants\n- **Avoid**: Praziquantel (triggers inflammation in CNS)\n\n## Malaria Treatment (India)\n\n**P. vivax** (Chloroquine-sensitive):\n- Chloroquine 600mg stat, then 300mg\n- Primaquine 0.25mg/kg/day x 14 days (prevents relapse)\n\n**P. falciparum** (Resistant areas):\n- Artemisinin-based combination therapy (ACT)\n- Artemether + lumefantrine or artesunate + amodiaquine\n\n**Severe Malaria**:\n- Artesunate IV (WHO gold standard)\n- Switch to oral ACT after clinical improvement\n\n## Amoebiasis\n- **Intestinal**: Metronidazole 400mg TDS x 7 days\n- **Hepatic abscess**: Metronidazole + drainage if needed\n\n## Leishmaniasis\n- **Visceral**: Amphotericin B (liposomal preferred)\n- **Cutaneous**: Sodium stibogluconate or miltefosine", mnemonics: [{ text: "Albendazole = first-line for helminths", explanation: "400mg dose widely used in India" }], keyPoints: ["Albendazole 400mg single dose for Ascaris", "Praziquantel contraindicated in neurocysticercosis", "Artesunate IV for severe malaria", "Primaquine essential for P. vivax (prevents relapse)", "Metronidazole standard for amoebiasis"], textbookRefs: [{ book: "KDT Pharmacology", chapter: "Ch 44-45", edition: "9th" }] }, { layer: 4, slug: "anthelmintics-exam", title: "Anthelmintics & Antiprotozoals - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on drug selection for parasitic infections.", contentMd: "# High-Yield Points\n\n## Drug-Parasite Match\n- Ascaris: Albendazole, mebendazole\n- Hookworm: Albendazole (x3 days)\n- Tapeworm: Praziquantel\n- Malaria P. vivax: Chloroquine + primaquine\n- Malaria P. falciparum: ACT (artemisinin combo)\n- Amoebiasis: Metronidazole\n- Giardiasis: Metronidazole, tinidazole\n\n## Key Mechanisms\n- Benzimidazoles: Microtubule inhibition\n- Praziquantel: Calcium influx\n- Artemisinins: Free radical formation\n- Chloroquine: Heme accumulation\n\n## India-Specific\n- Chloroquine still works for P. vivax\n- ACT for P. falciparum\n- Albendazole mass programs (school deworming)", mnemonics: [{ text: "Severe malaria = Artesunate IV", explanation: "Gold standard WHO recommendation" }], keyPoints: ["Albendazole 400mg broad-spectrum", "Primaquine prevents P. vivax relapse", "ACT gold standard for P. falciparum", "Praziquantel for tapeworms", "Metronidazole anaerobes and protozoans"], textbookRefs: [{ book: "KDT Pharmacology", chapter: "Ch 44-45", edition: "9th" }] }, { layer: 5, slug: "anthelmintics-recall", title: "Anthelmintics & Antiprotozoals - Active Recall", estimatedMinutes: 10, summary: "Quick recall on antiparasitic drugs and dosing.", contentMd: "# Active Recall\n\n**Q1: First-line drug for Ascaris?**\nA: Albendazole 400mg single dose\n\n**Q2: Hookworm anthelmintic and duration?**\nA: Albendazole 400mg x 3 days\n\n**Q3: Mechanism of albendazole?**\nA: Inhibits helminth microtubule polymerization\n\n**Q4: Treatment of P. vivax malaria?**\nA: Chloroquine + primaquine (for relapse prevention)\n\n**Q5: Treatment of severe P. falciparum?**\nA: Artesunate IV, then switch to oral ACT\n\n**Q6: Amoebiasis treatment?**\nA: Metronidazole 400mg TDS x 7 days\n\n**Q7: Neurocysticercosis treatment?**\nA: Albendazole + corticosteroids + anticonvulsants (NOT praziquantel)\n\n**Q8: Praziquantel mechanism?**\nA: Increases calcium permeability in tapeworm/fluke muscles\n\n**Q9: Why add primaquine in P. vivax?**\nA: Prevents relapse (kills hypnozoites in liver)\n\n**Q10: Miltefosine use?**\nA: Oral treatment for cutaneous and visceral leishmaniasis"
      }
    ]
  },

  // Final 4 topics in condensed format
  { topicCode: "PH-MOD-07-TOP-02", layers: [{ layer: 1, slug: "thyroid-drugs-foundation", title: "Thyroid & Antithyroid Drugs - Foundation", estimatedMinutes: 20, summary: "Drugs for hypothyroidism (levothyroxine) and hyperthyroidism (PTU, methimazole, beta-blockers, iodine).", contentMd: "# Thyroid Drugs\n\n## Hypothyroidism Treatment\n- **Levothyroxine (L-T4)**: Gold standard\n- **Liothyronine (L-T3)**: Rarely used alone\n- **Desiccated thyroid**: Obsolete\n\n## Hyperthyroidism Treatment\n\n**First-line**:\n- **Propylthiouracil (PTU)**: Inhibits synthesis + peripheral conversion\n- **Methimazole**: Inhibits synthesis only\n\n**Beta-blockers**:\n- Propranolol (also blocks peripheral conversion)\n- Atenolol\n\n**Iodine**:\n- **Saturated solution of potassium iodide (SSKI)**: Pre-operative\n- **Iodine-131**: Radioactive, definitive\n\n## Graves' Disease Management\n  - Antithyroid drugs (PTU/methimazole)\n- Beta-blockers for symptom relief\n- Iodine (SSKI) 10 days pre-surgery\n\n## Thyroiditis\n- **Acute**: NSAIDs, beta-blockers\n- **Subacute**: Corticosteroids", mnemonics: [{ text: "PTU = Preferred in Trimester 1 (pregnancy)", explanation: "PTU safer in first trimester; switch to methimazole after" }], keyPoints: ["Levothyroxine standard for hypothyroidism", "PTU safer in first trimester pregnancy", "Methimazole preferred in 2nd/3rd trimester", "Propranolol: blocks synthesis + peripheral conversion", "SSKI given 10 days pre-thyroid surgery"], textbookRefs: [{ book: "KDT Pharmacology", chapter: "Ch 28 - Thyroid Drugs", edition: "9th" }] }, { layer: 2, slug: "thyroid-drugs-mechanism", title: "Thyroid & Antithyroid Drugs - Mechanism", estimatedMinutes: 30, summary: "Mechanisms of levothyroxine replacement and antithyroid drug actions.", contentMd: "# Mechanisms\n\n## Levothyroxine\n- Passive absorption (65-80%)\n- Peripheral conversion to T3 (active form)\n- Long half-life (7 days): Allows once-daily dosing\n- Slower onset: 6-8 weeks to steady state\n\n## PTU (Propylthiouracil)\n- **Inhibits TPO** (thyroid peroxidase)\n- Blocks iodine incorporation\n- **Also inhibits 5'-deiodinase**\n- Peripheral conversion of T4 → T3 blocked\n- Faster onset (effective in 1-2 days)\n- Preferred in pregnancy (crosses placenta minimally)\n\n## Methimazole\n- **Inhibits TPO** only\n- Blocks iodine incorporation\n- Faster onset than PTU\n- Longer half-life (6 hours)\n- **Agranulocytosis risk**\n- Contraindicated in first trimester (fetal abnormalities)\n\n## Beta-blockers\n- **Propranolol**: Also blocks peripheral T4 → T3 conversion\n- **Atenolol**: Symptomatic relief only\n- No effect on thyroid hormone synthesis\n\n## Iodine (SSKI)\n- **Acute inhibition** of hormone release\n- Inhibits TPO (Wolf-Chaikoff effect)\n- Used pre-operatively (10 days)\n- **Avoid in pregnancy** (crosses placenta, causes fetal hypothyroidism)", mnemonics: [{ text: "PTU blocks Production + Peripheral conversion", explanation: "PTU = Production and Peripheral; Methimazole = just Metabolism" }], keyPoints: ["Levothyroxine long half-life (7 days)", "PTU onset 1-2 days; methimazole faster onset", "PTU safer in first trimester pregnancy", "Iodine blocks hormone release (acute)", "Beta-blockers only treat symptoms"], textbookRefs: [{ book: "KDT Pharmacology", chapter: "Ch 28", edition: "9th" }] }, { layer: 3, slug: "thyroid-drugs-clinical", title: "Thyroid & Antithyroid Drugs - Clinical", estimatedMinutes: 20, summary: "Clinical use and adverse effects of thyroid medications.", contentMd: "# Clinical Management\n\n## Hypothyroidism Dosing\n- **Starting dose**: 25-50 mcg daily\n- **Titration**: Increase by 25-50 mcg every 4-6 weeks\n- **Maintenance**: 75-150 mcg daily (average)\n- **Timing**: Take on empty stomach (improves absorption)\n\n## Hyperthyroidism Treatment\n\n**PTU**:\n- **Dose**: 50-100 mg TDS initially\n- **Maintenance**: 50 mg daily-BD\n- **Adverse**: Agranulocytosis (rare, <0.3%), hepatotoxicity\n\n**Methimazole**:\n- **Dose**: 10-40 mg daily\n- **Adverse**: Agranulocytosis, hepatotoxicity, rash\n- **Contraindication**: First trimester pregnancy\n\n## Graves' Disease Management\n1. **Antithyroid drugs** x 12-18 months\n2. **Beta-blockers** for tachycardia/tremor\n3. **Iodine (SSKI)** 10 days before thyroidectomy\n   - Dose: 5-7 drops TDS\n   - Reduces vascularity, hormone release\n\n## Drug Interactions\n- **Levothyroxine absorption** reduced by: PPIs, H2 blockers, iron, calcium\n- **Metabolism increased by**: Phenytoin, rifampicin\n\n## Adverse Effects\n- **PTU**: Agranulocytosis, hepatotoxicity (ARF)\n- **Methimazole**: Agranulocytosis, rash, hepatotoxicity\n- **Iodine**: Hypothyroidism (chronic use), iodism\n- **Levothyroxine overdose**: Atrial fibrillation, osteoporosis", mnemonics: [{ text: "SSKI 10 days pre-surgery reduces vascularity", explanation: "Given before thyroidectomy for Graves'" }], keyPoints: ["Levothyroxine empty stomach absorption", "PTU onset 1-2 days; adjust symptoms with beta-blockers", "Methimazole contraindicated in first trimester", "Agranulocytosis rare but serious in PTU/methimazole", "SSKI blocks hormone release acutely"], textbookRefs: [{ book: "KDT Pharmacology", chapter: "Ch 28", edition: "9th" }] }, { layer: 4, slug: "thyroid-drugs-exam", title: "Thyroid & Antithyroid Drugs - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on thyroid drug selection and dosing.", contentMd: "# High-Yield Facts\n\n## Drug Selection\n- Hypothyroidism: Levothyroxine\n- Hyperthyroidism: PTU or methimazole\n- First trimester: PTU (safer)\n- Second/third trimester: Methimazole (PTU hepatotoxicity risk)\n\n## Key Mechanisms\n- PTU: Blocks synthesis + peripheral conversion\n- Methimazole: Blocks synthesis only\n- Iodine: Blocks hormone release (acute)\n- Beta-blockers: Symptomatic only\n\n## Dosing\n- Levothyroxine: 75-150 mcg daily\n- PTU: 50-100 mg TDS\n- Methimazole: 10-40 mg daily\n\n## Pregnancy\n- First trimester: PTU\n- Switch to methimazole (2nd/3rd): Avoids PTU hepatotoxicity", mnemonics: [{ text: "Pregnancy trimester 1 = PTU", explanation: "Safer; avoid methimazole birth defects" }], keyPoints: ["Levothyroxine 7-day half-life = once daily dosing", "PTU onset 1-2 days; methimazole faster", "Agranulocytosis main serious adverse effect", "Iodine only pre-operative (acute effect)", "Beta-blockers manage symptoms only"], textbookRefs: [{ book: "KDT Pharmacology", chapter: "Ch 28", edition: "9th" }] }, { layer: 5, slug: "thyroid-drugs-recall", title: "Thyroid & Antithyroid Drugs - Active Recall", estimatedMinutes: 10, summary: "Quick recall on thyroid medications.", contentMd: "# Active Recall\n\n**Q1: Gold standard for hypothyroidism?**\nA: Levothyroxine\n\n**Q2: PTU vs methimazole in pregnancy?**\nA: PTU in first trimester; methimazole in 2nd/3rd\n\n**Q3: PTU advantage over methimazole?**\nA: Also blocks peripheral conversion of T4 to T3\n\n**Q4: PTU onset of action?**\nA: 1-2 days (methimazole faster)\n\n**Q5: Levothyroxine half-life?**\nA: 7 days (allows once-daily dosing)\n\n**Q6: SSKI dose and timing?**\nA: 5-7 drops TDS, given 10 days before thyroid surgery\n\n**Q7: Beta-blocker role in hyperthyroidism?**\nA: Symptomatic relief only (propranolol: also blocks conversion)\n\n**Q8: Levothyroxine absorption tips?**\nA: Give on empty stomach; avoid iron, calcium, PPIs\n\n**Q9: Serious adverse effect of PTU/methimazole?**\nA: Agranulocytosis (<0.3% incidence)\n\n**Q10: Iodine mechanism in thyroid surgery?**\nA: Acute inhibition of hormone release, reduces vascularity"
      }
    ]
  },

  // 19. PH-MOD-08-TOP-04: Drugs Acting on Uterus & Blood
  { topicCode: "PH-MOD-08-TOP-04", layers: [{ layer: 1, slug: "uterotonic-anticoagulant-foundation", title: "Drugs Acting on Uterus & Blood - Foundation", estimatedMinutes: 20, summary: "Uterotonics (oxytocin, ergot) for labor induction and hemorrhage. Anticoagulants and antiplatelets for thromboembolic disease.", contentMd: "# Drugs for Uterus & Blood\n\n## Uterotonics\n\n**Oxytocin**:\n- Increases uterine contractions\n- Safe profile\n- Used: Labor induction, PROM, PPH\n\n**Ergot alkaloids**:\n- Sustained uterine contraction\n- Stronger, longer contractions\n- Risk: Hypertension, coronary spasm\n\n**Prostaglandins**:\n- Misoprostol (PGE1), dinoprostone (PGE2)\n- Cervical ripening, labor induction\n\n## Anticoagulants\n\n**Heparin**:\n- IV/SC injection\n- Rapid onset (minutes)\n- Reversal: Protamine\n\n**Warfarin**:\n- Oral, slow onset (days)\n- Maintenance anticoagulation\n- Reversal: Vitamin K\n\n**DOACs**:\n- Direct oral anticoagulants\n- Apixaban, dabigatran, rivaroxaban\n- No reversal needed (except dabigatran - idarucizumab)\n\n## Antiplatelets\n- **Aspirin**: First-line, irreversible COX inhibition\n- **P2Y12 inhibitors**: Clopidogrel, prasugrel\n- **Glycoprotein IIb/IIIa inhibitors**: Abciximab (IV only)", mnemonics: [{ text: "OxytOcin = mOderate contractions; Ergot = sustained", explanation: "Different contraction patterns" }], keyPoints: ["Oxytocin safe for labor induction", "Ergot contraindicated in hypertension", "Heparin rapid; warfarin slow onset", "DOACs more convenient than warfarin", "Aspirin first-line antiplatelet"], textbookRefs: [{ book: "KDT Pharmacology", chapter: "Ch 31 - Uterotonics; Ch 32 - Anticoagulants", edition: "9th" }] }, { layer: 2, slug: "uterotonic-anticoagulant-mechanism", title: "Drugs Acting on Uterus & Blood - Mechanism", estimatedMinutes: 30, summary: "Mechanisms of uterine contraction and anticoagulation/antiplatelet effects.", contentMd: "# Mechanisms\n\n## Oxytocin\n- Binds **G-protein coupled receptor** on myometrial cells\n- Increases intracellular calcium\n- Actin-myosin cross-bridges → contraction\n- Phasic (intermittent) contractions (more physiologic)\n\n## Ergot Alkaloids\n- **Alpha-adrenergic agonist** activity\n- Direct smooth muscle stimulation\n- Tetanic (sustained) contractions\n- Risk: Placental entrapment, uterine rupture\n\n## Prostaglandins\n- PGE1/PGE2 receptor activation\n- Increase myometrial contractions\n- Cervical softening (increased collagenase)\n- Also: GI smooth muscle, thermoregulation\n\n## Heparin\n- **Binds antithrombin III** (potentiates)\n- Inhibits Factors IIa (thrombin), Xa, IXa, XIa, XIIa\n- Rapid anticoagulation\n- Monitored by **aPTT**\n\n## Warfarin\n- **Vitamin K antagonist**\n- Inhibits γ-carboxylation of Factors II, VII, IX, X\n- Slow onset (3-5 days) - needs heparin bridge\n- Monitored by **INR**\n\n## DOACs\n- **Direct Factor Xa inhibitors**: Apixaban, rivaroxaban\n- **Direct thrombin inhibitor**: Dabigatran\n- No monitoring required\n- Rapid onset (2-3 hours)\n\n## Antiplatelets\n- **Aspirin**: Irreversible COX inhibition → reduced TXA2\n- **P2Y12 inhibitors**: Block ADP receptor → reduced platelet aggregation", mnemonics: [{ text: "AT3 for heparin (Antithrombin 3)", explanation: "Heparin potentiates antithrombin III" }], keyPoints: ["Oxytocin: G-PCOR → Ca2+ → phasic contractions", "Ergot: direct smooth muscle stimulation (tetanic)", "Heparin: rapid (minutes), monitored by aPTT", "Warfarin: slow (days), needs bridge", "DOACs: rapid, no monitoring"], textbookRefs: [{ book: "KDT Pharmacology", chapter: "Ch 31-32", edition: "9th" }] }, { layer: 3, slug: "uterotonic-anticoagulant-clinical", title: "Drugs Acting on Uterus & Blood - Clinical", estimatedMinutes: 20, summary: "Clinical use of uterotonics in obstetrics and anticoagulants in thromboembolic disease.", contentMd: "# Clinical Use\n\n## Oxytocin\n- **Labor induction**: IV infusion starting 2 mU/min, titrate\n- **PPH (Post-partum hemorrhage)**: 5-10 U IV or IM\n- **PROM (Prolonged rupture of membranes)**: Labor induction\n\n## Ergot Alkaloids\n- **PPH prevention**: Methylergonovine 0.2 mg IM\n- **Contraindications**: Hypertension, coronary artery disease\n- **Avoid**: During labor (tetanic contractions)\n\n## Prostaglandins\n- **Cervical ripening**: Dinoprostone (PGE2 gel)\n- **Labor induction**: Misoprostol 25 mcg vaginally\n- **Medical abortion**: Misoprostol after mifepristone\n\n## Heparin Use\n- **Acute DVT/PE**: Loading dose 5000 U IV, then continuous infusion\n- **Pregnancy**: Preferred anticoagulant (doesn't cross placenta)\n- **Monitoring**: aPTT (target 1.5-2.5x control)\n- **Bridging**: With warfarin for 5-7 days\n\n## Warfarin Use\n- **Maintenance anticoagulation**: Target INR 2-3\n- **Mechanical valves**: Target INR 2.5-3.5\n- **Bridge period**: Start heparin first (overlaps 5-7 days)\n- **Food interactions**: Vitamin K reduces effect\n\n## DOACs\n- **Apixaban**: 5 mg BD (no monitoring)\n- **Dabigatran**: 110-150 mg BD\n- **Rivaroxaban**: 15-20 mg daily\n- **Advantages**: No monitoring, fixed dosing, fewer interactions\n\n## Antiplatelet Therapy\n- **Aspirin**: 75-100 mg daily (cardiovascular prevention)\n- **Dual antiplatelet**: Aspirin + clopidogrel (post-PCI)\n- **Duration**: 12 months in ACS with stent", mnemonics: [{ text: "INR 2-3 for warfarin (therapeutic range)", explanation: "Mechanical valves: 2.5-3.5" }], keyPoints: ["Oxytocin safest uterotonic", "Ergot reserved for PPH (risk of severe HTN)", "Heparin preferred in pregnancy", "Warfarin needs INR monitoring", "DOACs no monitoring needed"], textbookRefs: [{ book: "KDT Pharmacology", chapter: "Ch 31-32", edition: "9th" }] }, { layer: 4, slug: "uterotonic-anticoagulant-exam", title: "Drugs Acting on Uterus & Blood - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on obstetric drugs and anticoagulation.", contentMd: "# High-Yield Points\n\n## Uterotonics Comparison\n- Oxytocin: Phasic contractions, safe\n- Ergot: Tetanic contractions, risk of uterine rupture\n- Prostaglandins: Cervical ripening\n\n## Anticoagulant Monitoring\n- Heparin: aPTT (1.5-2.5x control)\n- Warfarin: INR (2-3)\n- DOACs: No monitoring\n\n## Anticoagulant Choice\n- Acute: Heparin (IV rapid)\n- Pregnancy: Heparin\n- Maintenance: Warfarin or DOAC\n\n## Contraindications\n- Ergot: Hypertension, CAD\n- Warfarin: First trimester\n- Heparin: HIT (heparin-induced thrombocytopenia)", mnemonics: [{ text: "Oxytocin for OB; Heparin for pregnancy", explanation: "Safe profiles in special populations" }], keyPoints: ["Oxytocin 2-10 mU/min IV titration", "aPTT goal heparin: 1.5-2.5x", "INR goal warfarin: 2-3 (valves: 2.5-3.5)", "Heparin preferred in pregnancy", "HIT risk with heparin (check platelet count)"], textbookRefs: [{ book: "KDT Pharmacology", chapter: "Ch 31-32", edition: "9th" }] }, { layer: 5, slug: "uterotonic-anticoagulant-recall", title: "Drugs Acting on Uterus & Blood - Active Recall", estimatedMinutes: 10, summary: "Quick recall on uterotonic and anticoagulant drugs.", contentMd: "# Active Recall\n\n**Q1: First-line uterotonic for labor induction?**\nA: Oxytocin (safest)\n\n**Q2: Ergot dose for PPH?**\nA: Methylergonovine 0.2 mg IM\n\n**Q3: Contraindication to ergot?**\nA: Hypertension, coronary artery disease\n\n**Q4: Heparin onset time?**\nA: Minutes (IV)\n\n**Q5: aPTT target for heparin?**\nA: 1.5-2.5x control (baseline)\n\n**Q6: INR target for warfarin?**\nA: 2-3 (mechanical valves: 2.5-3.5)\n\n**Q7: Anticoagulant in pregnancy?**\nA: Heparin (doesn't cross placenta)\n\n**Q8: Warfarin bridging period?**\nA: 5-7 days with heparin overlap\n\n**Q9: DOAC advantage?**\nA: No monitoring required\n\n**Q10: Aspirin mechanism?**\nA: Irreversible COX inhibition (reduces TXA2)"
      }
    ]
  },

  // 20. PY-MOD-01-TOP-04: Body Fluids & Compartments
  { topicCode: "PY-MOD-01-TOP-04", layers: [{ layer: 1, slug: "body-fluids-foundation", title: "Body Fluids & Compartments - Foundation", estimatedMinutes: 20, summary: "Distribution of body water into ECF and ICF. Osmolarity, tonicity, and fluid shifts. Electrolyte composition differences.", contentMd: "# Body Fluid Compartments\n\n## Total Body Water (TBW)\n- **Adult male**: 60% body weight\n- **Adult female**: 50% body weight (more fat)\n- **Infant**: 75% body weight\n- **Elderly**: 45-50% (increased fat)\n\n## Fluid Distribution\n\n| Compartment | % TBW | L (70 kg adult) | Composition |\n|-------------|-------|-----------------|-------------|\n| **ICF** | 67% | 28L | K+, proteins, phosphate |\n| **ECF** | 33% | 14L | Na+, Cl-, HCO3- |\n| **Plasma** | 25% ECF | 3.5L | Proteins, electrolytes |\n| **Interstitium** | 75% ECF | 10.5L | Low protein, high Na+ |\n\n## Electrolyte Composition\n\n**ICF (K+-rich)**:\n- K+: 140 mEq/L\n- Na+: 10 mEq/L\n- Cl-: 10 mEq/L\n- Proteins: 160 mg/dL\n\n**ECF (Na+-rich)**:\n- Na+: 140 mEq/L\n- K+: 5 mEq/L\n- Cl-: 105 mEq/L\n- HCO3-: 24 mEq/L\n- Proteins: 6-7 g/dL (plasma only)\n\n## Osmolarity & Tonicity\n- **Osmolarity**: Particles per liter (including ions, proteins)\n- **Tonicity**: Relative water movement (dependent on membrane permeability)\n- **Normal plasma osmolarity**: 285-295 mOsm/L", mnemonics: [{ text: "ICF is K+ dominant; ECF is Na+ dominant", explanation: "Remember inside cell = K+, outside = Na+" }], keyPoints: ["60% body weight in males (TBW)", "ECF:ICF ratio = 1:2", "ICF proteins provide Gibbs-Donnan effect", "Plasma osmolarity: 285-295 mOsm/L", "ECF has lower protein than plasma"], textbookRefs: [{ book: "Guyton & Hall Physiology", chapter: "Ch 25 - Body Fluid Compartments", edition: "14th" }] }, { layer: 2, slug: "body-fluids-mechanism", title: "Body Fluids & Compartments - Mechanism", estimatedMinutes: 30, summary: "Forces governing fluid distribution: Starling forces, osmotic pressure, hydrostatic pressure, Gibbs-Donnan effect.", contentMd: "# Fluid Distribution Mechanisms\n\n## Starling Forces (Capillary Exchange)\n\n| Force | Direction | Magnitude |\n|-------|-----------|----------|\n| **Capillary hydrostatic** | Out | +35 mmHg |\n| **Plasma oncotic** | In | -25 mmHg |\n| **Interstitial hydrostatic** | In | -0 mmHg |\n| **Interstitial oncotic** | Out | +5 mmHg |\n| **Net filtration** | **Out** | **+15 mmHg** |\n\nNote: Lymphatic system returns filtered fluid\n\n## Osmotic Pressure\n- **Formula**: π = i × R × T × C\n- Plasma proteins (albumin): 25 mmHg oncotic pressure\n- Responsible for most plasma osmotic pressure\n\n## Gibbs-Donnan Effect\n- Unequal distribution of small ions\n- Proteins trapped in cell (inside) or plasma (outside)\n- Create electrical gradients\n- Affects Na+/K+ ratio across cell membrane\n\n## ICF-ECF Distribution\n1. **Na+/K+ ATPase**: Maintains 3 Na+ out, 2 K+ in\n2. **Osmotic balance**: Water follows osmolyte gradient\n3. **Donnan equilibrium**: Protein distribution affects ion distribution\n\n## Fluid Movement Response to Changes\n- **Hypertonic solution**: Water leaves cells (crenation)\n- **Hypotonic solution**: Water enters cells (lysis)\n- **Isotonic solution**: No water movement\n\n## Lymphatic System\n- Returns filtered protein and excess fluid to blood\n- Prevents edema\n- Capacity: 2-4 L/day\n- Blocked: Edema develops", mnemonics: [{ text: "CHOPD for Starling forces", explanation: "Capillary hydrostatic (out), Hydrostatic interstitial (in), Oncotic plasma (in), Oncotic interstitial (out), Donnan" }], keyPoints: ["Net filtration = +15 mmHg (out)", "Plasma proteins = 25 mmHg oncotic", "Na+/K+ pump essential for ICF/ECF distribution", "Lymphatic system prevents edema", "Gibbs-Donnan effect: proteins trap ions"], textbookRefs: [{ book: "Guyton & Hall Physiology", chapter: "Ch 25", edition: "14th" }] }, { layer: 3, slug: "body-fluids-clinical", title: "Body Fluids & Compartments - Clinical", estimatedMinutes: 20, summary: "Clinical assessment of fluid status, dehydration, and edema in Indian medical practice.", contentMd: "# Clinical Assessment\n\n## Dehydration Assessment\n- **Mild (5%)**: Increased thirst, dry mucous membranes\n- **Moderate (10%)**: Oliguria, reduced skin turgor, weakness\n- **Severe (15%)**: Hypotension, confusion, shock\n\n**Clinical signs**:\n- **Skin turgor**: Skin fold >2 sec return (severe)\n- **Mucous membranes**: Dry (moderate-severe)\n- **Urine color**: Dark yellow/amber\n- **Fontanelle**: Sunken (infants)\n- **Orthostatic vitals**: Tachycardia, BP drop\n\n## Edema Pathophysiology\n\n**Causes**:\n1. **Increased capillary hydrostatic**: Venous obstruction, heart failure\n2. **Decreased plasma oncotic**: Malnutrition, liver disease, nephrotic\n3. **Lymphatic obstruction**: Tumor, infection\n4. **Increased capillary permeability**: Inflammation, sepsis\n\n## Rehydration Strategies\n\n**Oral**: WHO-ORS formula\n- Na+ 75 mEq/L\n- Glucose 75 mmol/L (ratio 1:1 optimal absorption)\n- K+ 20 mEq/L\n- Cl- 65 mEq/L\n\n**IV Fluids**:\n- **Normal saline**: 0.9% NaCl (isotonic)\n- **Dextrose 5%**: Hypotonic (water alone, becomes)\n- **Ringer's lactate**: Balanced electrolytes (closer to plasma)\n\n## Monitoring\n- **Input/Output**: Urine, stool losses\n- **Weight**: 1 kg loss = ~1 L fluid loss\n- **Vital signs**: Heart rate, BP, JVP\n- **Urine osmolarity**: High (>600) suggests dehydration", mnemonics: [{ text: "WHO-ORS = 75/75 (Na+, glucose) 1:1 ratio", explanation: "Optimal absorption for oral rehydration" }], keyPoints: ["Skin turgor best clinical sign of dehydration", "ORS more effective than plain water", "Dextrose 5% becomes hypotonic (adds only water)", "Ringer's lactate closer to ECF composition", "ICF-ECF fluid shift in dehydration/overload"], textbookRefs: [{ book: "Park Textbook of Preventive & Social Medicine", chapter: "Ch 11 - Dehydration", edition: "25th" }] }, { layer: 4, slug: "body-fluids-exam", title: "Body Fluids & Compartments - Exam Prep", estimatedMinutes: 15, summary: "High-yield facts on fluid compartments and electrolyte distribution.", contentMd: "# High-Yield Facts\n\n## TBW Distribution\n- Adult male: 60% body weight\n- ICF: 2/3 TBW (28L in 70kg)\n- ECF: 1/3 TBW (14L); plasma 25%, interstitium 75%\n\n## Osmolarity\n- Normal plasma: 285-295 mOsm/L\n- Hypertonic >295, Hypotonic <280\n\n## Starling Forces\n- Net filtration: +15 mmHg (OUT)\n- Plasma proteins: 25 mmHg oncotic\n\n## Electrolyte Composition\n- ICF: K+ 140, Na+ 10\n- ECF: Na+ 140, K+ 5\n\n## Dehydration Signs\n- Mild: Thirst, dry mucous\n- Moderate: Oliguria, reduced turgor\n- Severe: Hypotension, shock\n\n## ORS Composition\n- Na+ 75 mEq/L, Glucose 75 mmol/L (1:1)",
        mnemonics: [
          { text: "60-40-20 rule", explanation: "60% TBW, 40L ECF, 20L ICF (approximate ratios)" }
        ],
        keyPoints: [
          "ICF:ECF = 2:1",
          "Plasma osmolarity 285-295 mOsm/L",
          "Starling net filtration = +15 mmHg",
          "ORS optimal glucose:Na+ = 1:1",
          "Lymphatic system capacity: 2-4L/day"
        ],
        textbookRefs: [
          { book: "Guyton & Hall Physiology", chapter: "Ch 25", edition: "14th" }
        ]
      },
      {
        layer: 5,
        slug: "body-fluids-recall",
        title: "Body Fluids & Compartments - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall on body fluid distribution and electrolyte composition.",
        contentMd: "# Active Recall\n\n**Q1: TBW percentage in adult male?**\nA: 60% body weight\n\n**Q2: ICF:ECF ratio?**\nA: 2:1\n\n**Q3: Plasma volume in 70 kg adult?**\nA: ~3.5L\n\n**Q4: ICF Na+ concentration?**\nA: 10 mEq/L\n\n**Q5: ECF K+ concentration?**\nA: 5 mEq/L\n\n**Q6: Normal plasma osmolarity?**\nA: 285-295 mOsm/L\n\n**Q7: Net Starling force direction?**\nA: Out (filtration into interstitium)\n\n**Q8: Oncotic pressure from plasma proteins?**\nA: ~25 mmHg\n\n**Q9: WHO-ORS glucose:Na+ ratio?**\nA: 1:1 (75/75)\n\n**Q10: Lymphatic system returns how much fluid daily?**\nA: 2-4 L/day"
      }
    ]
  },

  // Final topic 21: SU-MOD-06-TOP-04: Pancreatic Tumors
  {
    topicCode: "SU-MOD-06-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "pancreatic-tumors-foundation",
        title: "Pancreatic Tumors - Foundation",
        estimatedMinutes: 20,
        summary: "Pancreatic adenocarcinoma: highly aggressive with poor prognosis. Neuroendocrine and cystic tumors less common but important.",
        contentMd: "# Pancreatic Tumors\n\n## Adenocarcinoma (85-90%)\n- **Most common malignancy**: Rising incidence\n- **5-year survival**: <10% (very poor)\n- **Risk factors**: Age >60, smoking, chronic pancreatitis, diabetes, BRCA\n- **Presentation**: Often late-stage (obstructive jaundice, epigastric pain)\n\n## Location & Presentation\n\n| Location | % | Early Sign | Late Presentation |\n|----------|---|-----------|-------------------|\n| **Head** | 60% | Obstructive jaundice | Painless jaundice |\n| **Body** | 20% | None (late) | Epigastric pain |\n| **Tail** | 20% | None (late) | Weight loss, pain |\n\n## Neuroendocrine Tumors (5%)\n- **Insulinoma**: Hypoglycemia, Whipple triad\n- **Gastrinoma**: Severe peptic ulcer, diarrhea (Zollinger-Ellison)\n- **VIPoma**: Severe diarrhea, hypokalemia (WDHA)\n- **Glucagonoma**: Migratory necrolytic dermatitis, diabetes\n\n## Cystic Tumors (10%)\n- **Serous**: Benign, honeycomb appearance\n- **Mucinous**: Precancerous (IPMN)\n- **Solid-pseudopapillary**: Young women, benign\n\n## TNM Staging\n- **T**: Tumor size and invasion\n- **N**: Node involvement\n- **M**: Metastases (Stage IV if present)\n\n**5-year survival by stage**:\n- Stage I: 25%; II: 12%; III: 8%; IV: <1%",
        mnemonics: [
          { text: "Pancreatic CA = Poor prognosis (5% 5-yr survival)", explanation: "Usually presents late stage due to retroperitoneal location" }
        ],
        keyPoints: [
          "Head of pancreas: painless jaundice (Courvoisier sign)",
          "Body/tail: late presentation, poor prognosis",
          "Smoking major modifiable risk factor",
          "Chronic pancreatitis increases risk 50-100x",
          "Neuroendocrine tumors functional (hormone symptoms)"
        ],
        textbookRefs: [
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 53 - Pancreas", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "pancreatic-tumors-mechanism",
        title: "Pancreatic Tumors - Mechanism",
        estimatedMinutes: 30,
        summary: "Molecular pathogenesis: KRAS, TP53, BRCA mutations. Chronic inflammation pathway. Tumor microenvironment and stroma.",
        contentMd: "# Pathogenesis\n\n## Molecular Alterations (Pancreatic Adenocarcinoma)\n\n| Gene | Frequency | Function |\n|------|-----------|----------|\n| **KRAS** | 90% | Oncogene activation |\n| **TP53** | 70% | Tumor suppressor loss |\n| **CDKN2A** | 95% | Cell cycle checkpoint |\n| **BRCA1/2** | 5-10% | DNA repair deficiency |\n| **SMAD4** | 30% | TGF-β pathway |\n\n## Multi-Hit Hypothesis\n1. **Initiation**: KRAS mutation (PanIN-1)\n2. **Progression**: p53, CDKN2A loss (PanIN-2 → PanIN-3)\n3. **Invasion**: Additional mutations\n4. **Metastasis**: SMAD4 loss, EMT activation\n\n## Chronic Pancreatitis Pathway\n- **Recurrent inflammation** → oxidative stress\n- **Stellate cell activation** → fibrosis\n- **Mutagen accumulation** → KRAS mutations\n- **Precancerous changes** (dysplasia → carcinoma)\n\n## Tumor Microenvironment\n- **Desmoplasia**: Excessive stroma (fibroblasts, collagen)\n- **Hypoxia**: Poor blood supply (barriers to drug delivery)\n- **Immunosuppression**: Regulatory T cells, myeloid-derived suppressors\n- **Result**: Therapy resistance\n\n## Neuroendocrine Tumor Biology\n- **Benign behavior**: Usually slow-growing\n- **Hormone production**: Functional tumors cause symptoms early\n- **MEN-1 association**: Gastrinoma, insulinoma\n- **Generally better prognosis** than adenocarcinoma",
        mnemonics: [
          { text: "90-70-95 for pancreatic CA mutations", explanation: "KRAS 90%, TP53 70%, CDKN2A 95%" }
        ],
        keyPoints: [
          "KRAS mutation in 90% of pancreatic cancers",
          "PanIN progression model: dysplasia → cancer",
          "Chronic pancreatitis 50-100x increased risk",
          "Desmoplasia creates therapy-resistant stroma",
          "BRCA mutations responsive to platinum agents"
        ],
        textbookRefs: [
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 53", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "pancreatic-tumors-clinical",
        title: "Pancreatic Tumors - Clinical",
        estimatedMinutes: 20,
        summary: "Diagnosis, staging, and management of pancreatic cancers with focus on surgical and medical options.",
        contentMd: "# Clinical Diagnosis & Management\n\n## Presentation & Investigation\n- **Symptoms**: Jaundice, epigastric pain, weight loss, new-onset diabetes\n- **CA 19-9**: Tumor marker (not specific, diagnostic aid)\n- **Imaging**: CT/MRI (staging), endoscopic ultrasound (tissue diagnosis)\n- **Tissue diagnosis**: FNA via endoscopic ultrasound, biopsy\n\n## Staging\n- **Resectable**: No involvement of major vessels (5-20% at diagnosis)\n- **Borderline resectable**: Vessel involvement but potentially resectable\n- **Locally advanced**: Unresectable due to vessel involvement\n- **Metastatic**: Distant spread (50-60% at diagnosis)\n\n## Surgical Management (Curative Intent)\n\n**Resectable tumors**:\n- **Whipple procedure** (pancreaticoduodenectomy): Head tumors\n  - Resect pancreatic head, duodenum, bile duct\n  - High morbidity (anastomotic leak, infection)\n  - 5-year survival ~20-25% if R0 resection\n- **Distal pancreatectomy**: Body/tail tumors\n\n## Chemotherapy\n- **First-line**: FOLFIRINOX (5-FU, leucovorin, irinotecan, oxaliplatin)\n  - 5-year OS improvement from <2% to ~5%\n- **Palliative**: Gemcitabine monotherapy\n- **Adjuvant**: Post-resection improves OS\n\n## Neuroendocrine Tumor Management\n- **Surgical resection**: Curative if localized\n- **Functional tumors**: Symptom control (octreotide for VIP, H2 blockers for gastrin)\n- **Metastatic**: Somatostatin analogs, mTOR inhibitors\n\n## Supportive Care\n- **Pain management**: Often severe\n- **Nutritional**: Pancreatic enzyme supplementation\n- **Biliary stent**: For obstructive jaundice",
        mnemonics: [
          { text: "Whipple = pancreatic Head", explanation: "Duodenopancreatectomy for head tumors" }
        ],
        keyPoints: [
          "Whipple procedure for head; distal pancreatectomy for body/tail",
          "FOLFIRINOX improves OS compared to gemcitabine",
          "R0 resection mandatory for cure",
          "Most patients present with unresectable disease",
          "Neuroendocrine tumors generally better prognosis"
        ],
        textbookRefs: [
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 53", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "pancreatic-tumors-exam",
        title: "Pancreatic Tumors - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts on pancreatic cancer presentation, staging, and treatment.",
        contentMd: "# High-Yield Facts\n\n## Key Features\n- **Adenocarcinoma**: 85-90% of tumors\n- **5-year survival**: <10% overall; ~20-25% if resected\n- **Head location**: 60% (painless jaundice)\n- **Body/tail**: 40% (late presentation)\n\n## Risk Factors\n- Smoking, chronic pancreatitis, diabetes, age >60\n- BRCA mutations, familial clustering\n\n## Diagnosis\n- CA 19-9 (marker, not specific)\n- CT/MRI staging\n- EUS FNA for tissue\n\n## Management\n- **Resectable (20%)**: Whipple or distal pancreatectomy\n- **Unresectable (80%)**: Palliative chemotherapy\n- **Chemotherapy**: FOLFIRINOX (better than gemcitabine)\n\n## Whipple Procedure\n- Pancreaticoduodenectomy\n- Morbidity high; mortality ~2-4%\n- R0 resection improves OS",
        mnemonics: [
          { text: "Courvoisier sign in head pancreatic cancer", explanation: "Painless jaundice + enlarged gallbladder" }
        ],
        keyPoints: [
          "Courvoisier sign: palpable GB with painless jaundice",
          "KRAS 90%, TP53 70%, CDKN2A 95%",
          "Whipple gold standard for head tumors",
          "FOLFIRINOX gold standard chemotherapy",
          "Most present Stage III/IV (locally advanced/metastatic)"
        ],
        textbookRefs: [
          { book: "Sabiston Textbook of Surgery", chapter: "Ch 53", edition: "21st" }
        ]
      },
      {
        layer: 5,
        slug: "pancreatic-tumors-recall",
        title: "Pancreatic Tumors - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall on pancreatic tumors and management.",
        contentMd: "# Active Recall\n\n**Q1: Most common pancreatic malignancy?**\nA: Adenocarcinoma (85-90%)\n\n**Q2: 5-year survival for pancreatic cancer?**\nA: <10% overall (20-25% if resected)\n\n**Q3: Location most common and presentation?**\nA: Head (60%), painless jaundice (Courvoisier sign)\n\n**Q4: Most frequent genetic mutation?**\nA: KRAS (90%)\n\n**Q5: Surgical procedure for head tumors?**\nA: Whipple procedure (pancreaticoduodenectomy)\n\n**Q6: First-line chemotherapy?**\nA: FOLFIRINOX\n\n**Q7: Chronic pancreatitis cancer risk?**\nA: 50-100x increased\n\n**Q8: Insulinoma presentation?**\nA: Whipple triad: hypoglycemia symptoms, low glucose, relief with glucose\n\n**Q9: Gastrinoma syndrome?**\nA: Zollinger-Ellison syndrome: severe peptic ulcer disease\n\n**Q10: Tumor marker in pancreatic cancer?**\nA: CA 19-9 (elevated but not specific)"
      }
    ]
  }
];

