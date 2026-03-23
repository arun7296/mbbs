export const newBatch4Lessons = [
  {
    topicCode: "CM-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "epidemiological-methods-foundation",
        title: "Epidemiological Methods - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to epidemiological study designs, measurements, and basic concepts in disease occurrence",
        contentMd: "# Epidemiological Methods - Foundation\n\n## Definition & Importance\nEpidemiology is the study of disease distribution and determinants in populations. Key to understanding disease patterns in India.\n\n## Basic Measures of Disease\n- **Incidence**: New cases in specific time period\n- **Prevalence**: Existing cases at specific point/period\n- **Mortality Rate**: Deaths from specific cause\n- **Morbidity**: Disease or illness in population\n\n## Classification of Studies\n- **Observational**: Descriptive, Analytical (Case-Control, Cohort)\n- **Experimental**: RCTs, Community trials\n\n## Study Design Hierarchy\nRCT > Cohort > Case-Control > Cross-sectional > Case reports\n\n## Key Terms\n- **Bias**: Systematic error affecting results\n- **Confounding**: Third variable affects exposure-outcome\n- **Validity**: Internal vs External",
        mnemonics: [
          { text: "PAID", explanation: "Prevalence, Association, Incidence, Difference" },
          { text: "OECA", explanation: "Observational, Experimental, Case-Control, Analytical" }
        ],
        keyPoints: [
          "Incidence measures new cases; Prevalence measures existing cases",
          "Observational studies describe patterns; experimental studies test interventions",
          "Study hierarchy: RCT > Cohort > Case-Control",
          "Bias affects validity; confounding affects interpretation"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Ch 1", edition: "24th" },
          { book: "Gupta & Bhat", chapter: "Ch 2", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "epidemiological-methods-mechanism",
        title: "Epidemiological Methods - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed understanding of study design methodology, statistical measures, and disease association calculations",
        contentMd: "# Epidemiological Methods - Mechanism\n\n## Study Design Details\n\n### Descriptive Studies\n- Case reports, case series, cross-sectional surveys\n- Describe \"who, where, when, what\"\n- Generate hypotheses for analytical studies\n\n### Analytical Studies\n\n**Case-Control Study**\n- Starts with outcome, traces back to exposure\n- Calculates Odds Ratio (OR)\n- OR = (a×d)/(b×c)\n- Efficient for rare diseases, quick, inexpensive\n\n**Cohort Study**\n- Starts with exposure, follows to outcome\n- Calculates Relative Risk (RR)\n- RR = Risk in exposed / Risk in unexposed\n- Can establish temporal relationship\n\n## Statistical Measures\n- **Sensitivity**: Ability to detect disease (TP/TP+FN)\n- **Specificity**: Ability to detect non-disease (TN/TN+FP)\n- **Positive Predictive Value**: Probability disease present if test positive\n- **Negative Predictive Value**: Probability disease absent if test negative\n\n## Association Measures\n- **Absolute Risk Reduction**: |Risk1 - Risk2|\n- **Number Needed to Treat**: 1/ARR\n- **Attributable Risk**: RR - 1",
        mnemonics: [
          { text: "SNOUT", explanation: "Sensitive test, Negative result rules Out disease" },
          { text: "SPIN", explanation: "Specific test, Positive result rules In disease" }
        ],
        keyPoints: [
          "Case-Control: Start with outcome, calculate OR; good for rare diseases",
          "Cohort: Start with exposure, calculate RR; establishes temporal sequence",
          "Sensitivity/Specificity independent of disease prevalence",
          "PPV/NPV depend on disease prevalence in population",
          "NNT = 1/ARR represents number needed to treat to prevent one event"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Ch 3", edition: "27th" },
          { book: "BDC", chapter: "Ch 1-2", edition: "24th" }
        ]
      },
      {
        layer: 3,
        slug: "epidemiological-methods-clinical",
        title: "Epidemiological Methods - Clinical",
        estimatedMinutes: 20,
        summary: "Application of epidemiological methods in Indian healthcare settings and disease surveillance",
        contentMd: "# Epidemiological Methods - Clinical\n\n## Indian Context\n\n### Disease Surveillance in India\n- IDSP (Integrated Disease Surveillance Programme) monitors notifiable diseases\n- State surveillance systems track TB, Malaria, Dengue, COVID-19\n- Emphasis on early detection and rapid response\n\n### Common Epidemiological Studies in India\n- Community health surveys (household coverage, sanitation)\n- Communicable disease outbreak investigations\n- Non-communicable disease risk factor surveys (STEPS approach)\n- Vaccine effectiveness studies\n\n## Outbreak Investigation Steps\n1. Confirm outbreak exists\n2. Define and find cases\n3. Perform descriptive epidemiology\n4. Generate hypotheses\n5. Test hypotheses (analytical epidemiology)\n6. Implement control measures\n7. Communicate findings\n\n## Diagnostic Test Evaluation in Practice\n- Sensitivity important for screening (detect all disease)\n- Specificity important for confirmation (few false positives)\n- Likelihood ratios help in clinical interpretation\n- Prevalence affects test utility\n\n## Quality Control in Studies\n- Standardized case definitions\n- Quality assurance in data collection\n- Management of missing data\n- Follow-up protocols",
        mnemonics: [
          { text: "IDSP", explanation: "Integrated Disease Surveillance Programme in India" },
          { text: "STEPS", explanation: "Standard, Protocol, Endorsed by WHO for NCD surveys" }
        ],
        keyPoints: [
          "IDSP is primary surveillance system in India",
          "Outbreak investigation follows systematic 7-step approach",
          "Sensitivity critical for screening; specificity for confirmation",
          "Prevalence affects PPV/NPV significantly",
          "Data quality essential for valid study conclusions"
        ],
        textbookRefs: [
          { book: "Park's PSM", chapter: "Ch 4-5", edition: "27th" },
          { book: "NMC CBME Guidelines", chapter: "CM Competencies", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "epidemiological-methods-exam",
        title: "Epidemiological Methods - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield MCQ pattern points and comparison tables for board exams",
        contentMd: "# Epidemiological Methods - Exam Prep\n\n## High-Yield Comparisons\n\n| Feature | Case-Control | Cohort | Cross-sectional |\n|---------|--------------|--------|------------------|\n| Start point | Outcome | Exposure | Both |\n| Time frame | Retrospective | Prospective | Point in time |\n| Calculates | Odds Ratio | Relative Risk | Prevalence |\n| Speed | Fast | Slow | Fast |\n| Cost | Cheap | Expensive | Moderate |\n| Bias risk | Selection, Recall | Loss to follow-up | Survivor bias |\n| Best for | Rare outcomes | Common outcomes | Frequency data |\n\n## NEXT-Pattern Questions\n\n**Problem-Solving**: A researcher wants to study TB incidence in rural area. Best design?\n- Answer: Prospective cohort (can establish temporal relationship)\n\n**Analysis**: Sensitivity 95%, Specificity 80%, Disease prevalence 10%. Calculate PPV.\n- PPV = (0.95 × 0.1) / [(0.95 × 0.1) + (0.2 × 0.9)] = 34.5%\n\n**Recall**: OR = 1 means?\n- No association between exposure and outcome\n\n## Key Formulas\n- Sensitivity = TP/(TP+FN) × 100\n- Specificity = TN/(TN+FP) × 100\n- NNT = 1/ARR\n- RR = P1/P2\n- Attributable Risk% = (RR-1)/RR × 100",
        mnemonics: [
          { text: "ROCA", explanation: "RCT, Observational, Case-control, Analytical" },
          { text: "Sensitivity = a/(a+c)", explanation: "Disease divided by true positives + false negatives" }
        ],
        keyPoints: [
          "OR used in case-control; RR in cohort; neither in cross-sectional",
          "Sensitivity/Specificity DON'T change with prevalence",
          "PPV/NPV CHANGE with prevalence",
          "NNT = 1/ARR (lower is better)",
          "RR > 1 = increased risk; RR < 1 = decreased risk"
        ],
        textbookRefs: [
          { book: "NEXT-PG Review Series", chapter: "Epidemiology", edition: "Latest" },
          { book: "Park's PSM", chapter: "Ch 2-3", edition: "27th" }
        ]
      },
      {
        layer: 5,
        slug: "epidemiological-methods-recall",
        title: "Epidemiological Methods - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-format Q&A for spaced repetition learning",
        contentMd: "# Epidemiological Methods - Active Recall\n\n## Q&A Flashcards\n\n**Q: Define incidence**\nA: New cases of disease in defined population during specified time period\n\n**Q: When is case-control study preferred?**\nA: For rare diseases/outcomes where cohort study would be impractical\n\n**Q: What is measured in cohort study?**\nA: Relative Risk (RR) = Risk in exposed/Risk in unexposed\n\n**Q: What is measured in case-control study?**\nA: Odds Ratio (OR) = (a×d)/(b×c)\n\n**Q: True or False: Sensitivity depends on disease prevalence?**\nA: False - Sensitivity and Specificity are independent of prevalence\n\n**Q: Which is better for screening: high sensitivity or specificity?**\nA: High sensitivity (to catch all cases)\n\n**Q: Which is better for confirmation: high sensitivity or specificity?**\nA: High specificity (to avoid false positives)\n\n**Q: What does OR = 1 mean?**\nA: No association between exposure and outcome\n\n**Q: What does RR = 1 mean?**\nA: Same risk in exposed and unexposed groups\n\n**Q: Calculate NNT if ARR = 0.05**\nA: NNT = 1/0.05 = 20 (treat 20 patients to prevent 1 event)",
        mnemonics: [
          { text: "Incidence vs Prevalence", explanation: "Incidence = new; Prevalence = existing" }
        ],
        keyPoints: [
          "10 rapid-fire concepts covered",
          "Focus on definitions and formulas",
          "Emphasis on study design selection",
          "Sensitivity/Specificity concepts reinforced"
        ],
        textbookRefs: [
          { book: "NEXT-PG MCQ series", chapter: "Epidemiology", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "CM-MOD-07-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "healthcare-delivery-foundation",
        title: "Healthcare Delivery System in India - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of Indian healthcare system structure, levels of care, and health programs",
        contentMd: "# Healthcare Delivery System in India - Foundation\n\n## Healthcare System Overview\n\n### Structure\n- **Public Sector**: Government health institutions (80% population coverage goal)\n- **Private Sector**: Private hospitals, clinics, practitioners\n- **NGO/Voluntary Sector**: Non-profit organizations\n\n## Levels of Healthcare\n\n**Primary Health Centers (PHC)**\n- First contact with health system\n- One ANM (Auxiliary Nurse Midwife) and multipurpose worker\n- Covers ~10,000 population\n- Services: immunization, maternal health, family planning, curative care\n\n**Community Health Centers (CHC)**\n- Referral center for 4-6 PHCs\n- Covers ~100,000 population\n- 30-bed capacity, basic surgical facilities\n- Obstetric and pediatric services\n\n**District Hospital**\n- Tertiary care facility\n- 500+ bed capacity\n- Specialized services\n- Training institution\n\n## Health Programs\n- National Health Mission (NHM)\n- Reproductive and Child Health (RCH)\n- Disease surveillance programs\n- Immunization programs\n- Disease eradication programs",
        mnemonics: [
          { text: "PHC-CHC-DH", explanation: "Primary (10K), Community (100K), District (tertiary)" }
        ],
        keyPoints: [
          "Three levels of care with increasing complexity",
          "PHC is first contact point",
          "Referral system coordinates care",
          "Public sector provides 80% coverage",
          "Integration of health programs at all levels"
        ],
        textbookRefs: [
          { book: "Park's PSM", chapter: "Ch 15", edition: "27th" },
          { book: "Gupta & Bhat", chapter: "Ch 10", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "healthcare-delivery-mechanism",
        title: "Healthcare Delivery System in India - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed structure, staffing patterns, resource allocation, and program implementation mechanisms",
        contentMd: "# Healthcare Delivery System in India - Mechanism\n\n## Organizational Structure\n\n### District Level\n- District Health Officer (Chief Health Officer)\n- District Disease Surveillance Officer\n- District Immunization Officer\n- District Family Planning Bureau\n\n### State Level\n- Directorate of Health Services\n- Medical Education Department\n- Autonomous institutions (AIIMS, medical colleges)\n\n### National Level\n- Ministry of Health and Family Welfare\n- ICMR, NCDC, NCCDC\n- Health program coordination bodies\n\n## Resource Allocation\n- **Budget**: ~3-4% of state budget typically allocated to health\n- **Personnel**: Shortage of doctors, nurses in rural areas\n- **Infrastructure**: Unequal distribution between urban/rural\n- **Equipment**: Limited advanced technology in peripheral centers\n\n## Staffing Pattern\n\n| Level | Key Staff |\n|-------|----------|\n| PHC | ANM, MPW |\n| CHC | Doctor, Nursing staff, Lab technician |\n| District | Specialist doctors, Administrative staff |\n\n## Health Program Implementation\n- Decentralized planning and implementation\n- Community participation through Village Health Guides\n- Regular review and monitoring through HMIS\n- Integration with ASHA (Accredited Social Health Activists) workers\n\n## Challenges\n- Urban-rural disparity\n- Doctor distribution issues\n- Limited resources\n- Infrastructure gaps",
        mnemonics: [
          { text: "ASHA", explanation: "Accredited Social Health Activists - bridge between community and health system" }
        ],
        keyPoints: [
          "Health system is hierarchical and decentralized",
          "Each level has specific roles and staffing",
          "Resource constraints affect service delivery",
          "Community health workers integrate into system",
          "Data flows through HMIS for monitoring"
        ],
        textbookRefs: [
          { book: "Park's PSM", chapter: "Ch 15-16", edition: "27th" },
          { book: "NMC CBME Manual", chapter: "Community Medicine", edition: "Latest" }
        ]
      },
      {
        layer: 3,
        slug: "healthcare-delivery-clinical",
        title: "Healthcare Delivery System in India - Clinical",
        estimatedMinutes: 20,
        summary: "Practical application in clinical settings, patient referral pathways, and quality assurance",
        contentMd: "# Healthcare Delivery System in India - Clinical\n\n## Clinical Service Delivery\n\n### Patient Pathways in PHC\n- Registration and vital sign monitoring\n- Simple procedures (immunization, wound care, family planning)\n- Referral for complicated cases\n- Follow-up care coordination\n\n### Referral Protocol\n- Clear referral criteria from PHC to CHC\n- Documented referral letters with relevant investigations\n- Back referral for continuing/follow-up care\n- Feedback mechanism\n\n## Quality Assurance Measures\n\n**At PHC Level**\n- Regular supervision from CHC\n- Performance monitoring through indicators\n- Patient satisfaction surveys\n- Infection control practices\n\n**At CHC Level**\n- Clinical audit\n- Case fatality review\n- Peer review of procedures\n- Staff training programs\n\n## Integration with Clinical Practice\n- Antenatal care through PHC network\n- Child health and immunization programs\n- Disease screening programs (TB, Hypertension, Diabetes)\n- Mental health services coordination\n\n## Patient Load Management\n- OPD scheduling to prevent overcrowding\n- Triage system for urgent cases\n- Appointment systems where feasible\n- Coordination with private practitioners",
        mnemonics: [
          { text: "CARE", explanation: "Clinical audit, Appraisal, Regular review, Evidence-based" }
        ],
        keyPoints: [
          "Clear referral protocols ensure continuity",
          "Quality measures at each level",
          "Back referral completes care cycle",
          "Integration with community screening programs",
          "Patient safety paramount in referral process"
        ],
        textbookRefs: [
          { book: "Park's PSM", chapter: "Ch 15", edition: "27th" },
          { book: "National Health Mission Guidelines", chapter: "Service Delivery", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "healthcare-delivery-exam",
        title: "Healthcare Delivery System in India - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and comparison tables for board examination preparation",
        contentMd: "# Healthcare Delivery System in India - Exam Prep\n\n## Key Facts - High Yield\n\n| Feature | PHC | CHC | District Hospital |\n|---------|-----|-----|-------------------|\n| Population served | 10,000 | 100,000 | Tertiary |\n| Beds | 0 | 30 | 500+ |\n| Doctor availability | Occasional | Yes | Yes |\n| Referral capacity | Yes | Yes | Final level |\n| Surgical facilities | No | Basic | Full |\n| OBG services | Maternal health | Full | Full |\n\n## Key Programs (NEXT-Pattern)\n\n**Problem-Solving**: A woman in 8th month of pregnancy develops complications. Where should she be managed?\n- Answer: CHC or District Hospital (has obstetric facilities)\n\n**Analysis**: How does ASHA worker contribute to health system?\n- Answer: Bridges community and health system; health promotion, awareness, counseling\n\n**Recall**: What is NHM?\n- Answer: National Health Mission - umbrella program for health service delivery\n\n## Important Definitions\n- **PHC**: Entry point to health system\n- **CHC**: Referral center with 30 beds\n- **ASHA**: Community health worker (1 per 1000 population)\n- **ANM**: Auxiliary Nurse Midwife at PHC\n- **MPW**: Multipurpose Worker (Health)\n\n## Statistics\n- PHC-CHC ratio: 1:4 to 1:6\n- Average distance to CHC: 20-30 km in rural areas\n- Typical population served by district hospital: 1-2 million",
        mnemonics: [
          { text: "NHM", explanation: "National Health Mission - Primary + Secondary + Tertiary care" }
        ],
        keyPoints: [
          "PHC = 10,000 population, no beds",
          "CHC = 100,000 population, 30 beds",
          "District Hospital = Tertiary care, 500+ beds",
          "ASHA = Community bridge (1 per 1000)",
          "Clear referral pathway: PHC → CHC → District"
        ],
        textbookRefs: [
          { book: "NEXT-PG CM Series", chapter: "Health System", edition: "Latest" },
          { book: "Park's PSM", chapter: "Ch 15", edition: "27th" }
        ]
      },
      {
        layer: 5,
        slug: "healthcare-delivery-recall",
        title: "Healthcare Delivery System in India - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid-fire Q&A flashcards for spaced repetition",
        contentMd: "# Healthcare Delivery System in India - Active Recall\n\n## Flashcard Q&A\n\n**Q: Define PHC**\nA: Primary Health Center - entry point serving ~10,000 population\n\n**Q: How many beds in CHC?**\nA: 30 beds (basic surgical facilities)\n\n**Q: What does ASHA stand for?**\nA: Accredited Social Health Activists\n\n**Q: ASHA-to-population ratio?**\nA: 1 ASHA per 1000 population\n\n**Q: Three levels of health care?**\nA: Primary (PHC), Secondary (CHC), Tertiary (District Hospital)\n\n**Q: Where are vaccines given?**\nA: PHC under national immunization program\n\n**Q: Define CHC population coverage**\nA: ~100,000 population (4-6 PHCs)\n\n**Q: Key function of District Hospital?**\nA: Tertiary care, training, specialist services, research\n\n**Q: What is back referral?**\nA: Referring patient from higher to lower level after stabilization\n\n**Q: NHM focus areas?**\nA: Reproductive health, child health, communicable disease control",
        mnemonics: [
          { text: "PHC-ANM", explanation: "PHC staffed by Auxiliary Nurse Midwife" }
        ],
        keyPoints: [
          "10 essential definitions and facts",
          "Focus on population numbers",
          "Staffing patterns at each level",
          "Program coordination emphasis"
        ],
        textbookRefs: [
          { book: "Park's PSM MCQ book", chapter: "Health System", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "DR-MOD-03-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "pemphigus-bullous-foundation",
        title: "Pemphigus & Bullous Pemphigoid - Foundation",
        estimatedMinutes: 20,
        summary: "Basic definition, classification, and clinical features of autoimmune blistering diseases",
        contentMd: "# Pemphigus & Bullous Pemphigoid - Foundation\n\n## Definition\n\n**Pemphigus**: Autoimmune blistering disorder with intraepidermal acantholysis (loss of cell-to-cell adhesion)\n\n**Bullous Pemphigoid**: Autoimmune blistering disorder with subepidermal bullae formation\n\n## Classification of Pemphigus\n\n1. **Pemphigus Vulgaris** (PV) - Most common\n2. **Pemphigus Foliaceus** (PF)\n3. Mucosal dominant pemphigus\n4. Drug-induced pemphigus\n\n## Clinical Features - Pemphigus Vulgaris\n- Flaccid blisters that rupture easily\n- Erosions and crusts\n- Oral involvement (painful ulcers)\n- Positive Nikolsky sign\n- Pruritus may precede blisters\n\n## Clinical Features - Bullous Pemphigoid\n- Tense, firm blisters (don't rupture easily)\n- Urticarial or eczematous base\n- Older age group typically\n- Less oral involvement\n- Negative Nikolsky sign\n\n## Key Differences\n- Pemphigus: intraepidermal, flaccid, oral common\n- Bullous Pemphigoid: subepidermal, tense, oral rare",
        mnemonics: [
          { text: "PV = Flaccid, PF = Superficial", explanation: "Pemphigus Vulgaris deeper; Pemphigus Foliaceus on surface" },
          { text: "BP = Basement membrane", explanation: "Bullous Pemphigoid affects basement membrane zone" }
        ],
        keyPoints: [
          "Pemphigus = intraepidermal acantholysis",
          "Bullous Pemphigoid = subepidermal bullae",
          "Pemphigus blisters are flaccid and fragile",
          "Bullous Pemphigoid blisters are tense and firm",
          "Nikolsky sign positive in pemphigus"
        ],
        textbookRefs: [
          { book: "Fitzpatrick's Dermatology", chapter: "Bullous Disorders", edition: "10th" },
          { book: "Khatri & Sharma", chapter: "Autoimmune Blistering", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "pemphigus-bullous-mechanism",
        title: "Pemphigus & Bullous Pemphigoid - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology, immunological basis, and histopathological findings",
        contentMd: "# Pemphigus & Bullous Pemphigoid - Mechanism\n\n## Pathophysiology - Pemphigus\n\n### Autoimmune Mechanism\n- IgG autoantibodies against desmogleins (desmoglein 3 in PV, desmoglein 1 in PF)\n- Desmogleins are adhesion molecules in desmosomes\n- Antibody binding → loss of cell-to-cell adhesion → acantholysis\n\n### Histopathology - PV\n- Suprabasal acantholysis\n- Basal cells remain attached (\"tombstone cells\")\n- Intraepidermal blister formation\n- Suprabasal location\n\n## Pathophysiology - Bullous Pemphigoid\n\n### Autoimmune Mechanism\n- IgG and IgE autoantibodies against BP180 and BP230 (hemidesmosomal proteins)\n- Complement activation → inflammation at dermal-epidermal junction\n- Blister forms below basal lamina\n\n### Histopathology - BP\n- Subepidermal blister with inflammatory infiltrate\n- Basal cells intact at blister floor\n- \"Lichenoid\" infiltrate in dermis\n- Linear IgG deposition along basement membrane zone\n\n## Immunological Tests\n\n**Direct Immunofluorescence (DIF)**\n- PV: Intercellular IgG and C3 (\"chicken wire\" pattern)\n- BP: Linear IgG + C3 along basement membrane\n\n**Indirect Immunofluorescence (IIF)**\n- Detects circulating autoantibodies\n- Correlates with disease activity\n\n**ELISA**\n- Measures anti-desmoglein antibodies\n- Anti-desmoglein 3 = mucosal involvement\n- Anti-desmoglein 1 = mucocutaneous involvement",
        mnemonics: [
          { text: "Desmoglein hypothesis", explanation: "Anti-desmoglein antibodies cause loss of cell adhesion" },
          { text: "DIF ladder", explanation: "Intercellular pattern (PV) vs Linear pattern (BP)" }
        ],
        keyPoints: [
          "Pemphigus: anti-desmoglein IgG antibodies",
          "Bullous Pemphigoid: anti-hemidesmosomal IgG/IgE antibodies",
          "DIF shows 'chicken wire' pattern in pemphigus",
          "DIF shows linear pattern in bullous pemphigoid",
          "Antibody levels correlate with disease activity"
        ],
        textbookRefs: [
          { book: "Fitzpatrick's Dermatology", chapter: "Immunodermatology", edition: "10th" },
          { book: "Andrews' Diseases of the Skin", chapter: "Bullous Diseases", edition: "13th" }
        ]
      },
      {
        layer: 3,
        slug: "pemphigus-bullous-clinical",
        title: "Pemphigus & Bullous Pemphigoid - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical presentation, diagnosis, and management in Indian context",
        contentMd: "# Pemphigus & Bullous Pemphigoid - Clinical\n\n## Clinical Presentation in India\n\n### Pemphigus Vulgaris\n- Peak age: 40-60 years\n- More common in dark-skinned individuals\n- Starts with oral erosions (80% of cases)\n- Painful, bleeding gums\n- Progressive to cutaneous involvement\n- Lesions on scalp, face, chest, axillae (intertriginous areas)\n\n### Bullous Pemphigoid\n- Peak age: 60+ years (elderly)\n- Rare in young adults\n- Urticarial lesions precede bullae\n- Flexural areas (inguinal, axillae)\n- Less systematic involvement than PV\n\n## Diagnosis\n\n**Clinical Suspicion**\n- Recurrent erosions/ulcers\n- Positive Nikolsky sign (PV)\n- Flaccid blisters (PV) vs tense blisters (BP)\n\n**Confirmatory Tests**\n1. Skin biopsy for histopathology\n2. Direct immunofluorescence (DIF) - gold standard\n3. Indirect immunofluorescence (IIF)\n4. ELISA for anti-desmoglein antibodies\n\n## Management\n\n**Pemphigus Vulgaris**\n- Systemic corticosteroids (0.5-2 mg/kg prednisolone)\n- Steroid-sparing agents: Azathioprine, Mycophenolate mofetil\n- Topical corticosteroids for oral/cutaneous lesions\n- Antibiotics for secondary infection\n- Supportive care: Oral hygiene, soft diet\n\n**Bullous Pemphigoid**\n- Lower steroid requirement than PV\n- Topical corticosteroids (initial choice if localized)\n- Systemic steroids for extensive disease\n- Steroid-sparing agents: Azathioprine, Cyclosporine\n\n## Complications\n- Secondary infection\n- Sepsis (mortality if untreated)\n- Nutritional deficiency\n- Electrolyte imbalance\n- Steroid-induced complications",
        mnemonics: [
          { text: "PV = Prednisolone + Purine antagonists", explanation: "Treatment with steroids and steroid-sparing agents" },
          { text: "BP = Better prognosis", explanation: "Less severe, better treatment response than PV" }
        ],
        keyPoints: [
          "PV presents with oral erosions typically",
          "BP presents with urticarial lesions preceding bullae",
          "DIF is confirmatory investigation",
          "Systemic steroids are mainstay of treatment",
          "Steroid-sparing agents reduce long-term complications"
        ],
        textbookRefs: [
          { book: "Khatri & Sharma", chapter: "Autoimmune Blistering", edition: "3rd" },
          { book: "Fitzpatrick's Dermatology", chapter: "Bullous Disorders", edition: "10th" }
        ]
      },
      {
        layer: 4,
        slug: "pemphigus-bullous-exam",
        title: "Pemphigus & Bullous Pemphigoid - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield comparison tables and NEXT-pattern MCQ concepts",
        contentMd: "# Pemphigus & Bullous Pemphigoid - Exam Prep\n\n## Comparison Table\n\n| Feature | PV | BP |\n|---------|----|-----------|\n| Location | Intraepidermal | Subepidermal |\n| Blister type | Flaccid | Tense |\n| Nikolsky | Positive | Negative |\n| Oral | Common (80%) | Rare |\n| Age | 40-60 years | 60+ years |\n| Antigen | Desmoglein | Hemidesmosomal proteins |\n| DIF pattern | Intercellular | Linear |\n| Prognosis | Worse | Better |\n| Steroid requirement | High | Lower |\n\n## High-Yield Facts\n\n**Pemphigus Foliaceus (vs Vulgaris)**\n- Superficial acantholysis (subcorneal)\n- No oral involvement\n- Positive desmoglein 1 antibodies\n- Better prognosis\n\n## NEXT-Pattern MCQ Examples\n\n**Problem-Solving**: Woman with painful oral erosions and flaccid blisters on skin. Nikolsky positive. Diagnosis?\n- Answer: Pemphigus Vulgaris (flaccid + Nikolsky + oral involvement)\n\n**Analysis**: Why is DIF more specific than IIF?\n- Answer: DIF detects antibodies in tissue; IIF may be negative in controlled disease\n\n**Recall**: What does linear IgG deposition indicate?\n- Answer: Bullous Pemphigoid (basement membrane zone involvement)\n\n## Key Mnemonics\n- **PV**: Positive Nikolsky, Painful mouth, Prednisolone needed\n- **BP**: Basement membrane, Better prognosis, Bullae firm",
        mnemonics: [
          { text: "Intra vs Sub", explanation: "PV = Intraepidermal; BP = Subepidermal" }
        ],
        keyPoints: [
          "Flaccid blisters = Pemphigus",
          "Tense blisters = Bullous Pemphigoid",
          "Positive Nikolsky = Pemphigus",
          "Negative Nikolsky = Bullous Pemphigoid",
          "Intercellular DIF = Pemphigus; Linear DIF = Bullous Pemphigoid"
        ],
        textbookRefs: [
          { book: "NEXT-PG Dermatology Series", chapter: "Bullous Disorders", edition: "Latest" },
          { book: "Khatri & Sharma MCQs", chapter: "Autoimmune", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "pemphigus-bullous-recall",
        title: "Pemphigus & Bullous Pemphigoid - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Pemphigus & Bullous Pemphigoid - Active Recall\n\n## Flashcards\n\n**Q: Nikolsky sign indicates what?**\nA: Pemphigus Vulgaris (not Bullous Pemphigoid)\n\n**Q: Location of blister in PV?**\nA: Intraepidermal (above basal layer)\n\n**Q: Location of blister in BP?**\nA: Subepidermal (below basal lamina)\n\n**Q: What antibody is positive in PV?**\nA: Anti-desmoglein (specifically anti-Dsg3 in mucosal)\n\n**Q: What antibody is positive in BP?**\nA: Anti-BP180 and Anti-BP230 (hemidesmosomal proteins)\n\n**Q: DIF pattern in pemphigus?**\nA: Intercellular IgG deposition (chicken wire pattern)\n\n**Q: DIF pattern in bullous pemphigoid?**\nA: Linear IgG deposition along basement membrane\n\n**Q: Most common site affected first in PV?**\nA: Oral mucosa\n\n**Q: Age of onset - PV vs BP?**\nA: PV: 40-60 years; BP: 60+ years\n\n**Q: First-line treatment for PV?**\nA: Systemic corticosteroids (prednisolone 0.5-2 mg/kg)",
        mnemonics: [
          { text: "PV-BP alphabet", explanation: "PV = Positive Nikolsky; BP = Basement membrane" }
        ],
        keyPoints: [
          "10 essential recall questions",
          "Focus on differentiating PV from BP",
          "DIF patterns emphasized",
          "Treatment principles reinforced"
        ],
        textbookRefs: [
          { book: "Khatri & Sharma MCQ", chapter: "Bullous Diseases", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "DR-MOD-05-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "skin-tumors-melanoma-foundation",
        title: "Skin Tumors & Melanoma - Foundation",
        estimatedMinutes: 20,
        summary: "Classification of skin tumors and basic features of benign and malignant lesions",
        contentMd: "# Skin Tumors & Melanoma - Foundation\n\n## Classification of Skin Tumors\n\n### Benign Tumors\n- **Melanocytic**: Nevi (moles), lentigo\n- **Non-melanocytic**: Seborrheic keratosis, wart, lipoma, cyst\n- **Vascular**: Hemangioma, port-wine stain\n\n### Malignant Tumors\n- **Melanoma**: Arises from melanocytes\n- **Non-melanoma skin cancer (NMSC)**:\n  - Basal cell carcinoma (BCC)\n  - Squamous cell carcinoma (SCC)\n\n## Melanoma Basics\n- Arises from melanocytes in epidermis\n- Most aggressive skin cancer\n- Increasing incidence in India\n- Better prognosis if detected early\n\n## ABCDE Rule for Melanoma\n- **A**symmetry: Lesion asymmetrical\n- **B**order: Irregular, ill-defined border\n- **C**olor: Multiple colors (brown, black, red, blue)\n- **D**iameter: >6 mm concerning\n- **E**volution: Changing size, shape, color\n\n## Clinical Features - Early Melanoma\n- Slowly enlarging lesion\n- Irregular pigmentation\n- Possible itching or bleeding\n- Family history often present\n- Sun exposure is risk factor",
        mnemonics: [
          { text: "ABCDE", explanation: "Asymmetry, Border, Color, Diameter, Evolution" },
          { text: "BCC-SCC-MM", explanation: "Non-melanoma vs Melanoma cancers" }
        ],
        keyPoints: [
          "Melanoma arises from melanocytes",
          "ABCDE rule helps identify suspicious lesions",
          "Early detection crucial for prognosis",
          "UV exposure is major risk factor",
          "Changing lesion requires evaluation"
        ],
        textbookRefs: [
          { book: "Fitzpatrick's Dermatology", chapter: "Melanoma", edition: "10th" },
          { book: "Khatri & Sharma", chapter: "Skin Cancer", edition: "3rd" }
        ]
      },
      {
        layer: 2,
        slug: "skin-tumors-melanoma-mechanism",
        title: "Skin Tumors & Melanoma - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology, classification systems, and staging of melanoma",
        contentMd: "# Skin Tumors & Melanoma - Mechanism\n\n## Melanoma Classification\n\n### Histological Types\n1. **Superficial Spreading Melanoma** (70%)\n   - Horizontal growth phase initially\n   - Later vertical growth\n   - Better prognosis if caught early\n\n2. **Nodular Melanoma** (15-20%)\n   - Rapid growth\n   - Poor prognosis\n   - Deeply invasive from start\n\n3. **Lentigo Maligna Melanoma** (5-10%)\n   - Arises from lentigo maligna\n   - Sun-exposed areas (face)\n   - Better prognosis\n\n4. **Acral Lentiginous** (5-10%)\n   - Palms, soles, nail beds\n   - More common in dark-skinned individuals\n   - Poor prognosis (often late diagnosis)\n\n## Pathophysiology\n\n### Molecular Changes\n- BRAF mutation (40-50% of melanomas)\n- NRAS mutation (15-20%)\n- KIT mutation\n- TP53 mutation\n- Loss of tumor suppressors\n\n### Progression\n- Benign nevus → Atypical nevus → Melanoma → Metastatic melanoma\n- Radial growth phase (confined to epidermis)\n- Vertical growth phase (invasion into dermis/subcutis)\n\n## Clark's Levels (Histopathological Depth)\n- Level 1: Epidermis only\n- Level 2: Papillary dermis involvement\n- Level 3: Fills papillary dermis\n- Level 4: Reticular dermis involvement\n- Level 5: Subcutaneous fat involvement\n\n## Breslow Thickness\n- Most important prognostic factor\n- Measured from granular layer to deepest tumor cell\n- <0.75 mm: Excellent prognosis\n- 0.75-1.5 mm: Good prognosis\n- 1.5-4 mm: Intermediate\n- >4 mm: Poor prognosis\n\n## TNM Staging\n- T: Thickness and ulceration\n- N: Lymph node involvement\n- M: Metastatic disease",
        mnemonics: [
          { text: "SSM>NM>LMM>ALM", explanation: "Superficial > Nodular > Lentigo > Acral (frequency)" },
          { text: "BRAF-K-IT", explanation: "Common mutations in melanoma" }
        ],
        keyPoints: [
          "Superficial spreading melanoma most common",
          "Breslow thickness is key prognostic factor",
          "Clark's levels describe histological depth",
          "BRAF mutations found in 40-50% of cases",
          "Vertical growth phase indicates invasion"
        ],
        textbookRefs: [
          { book: "Fitzpatrick's Dermatology", chapter: "Melanoma Pathology", edition: "10th" },
          { book: "AJCC Cancer Staging Manual", chapter: "Melanoma", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "skin-tumors-melanoma-clinical",
        title: "Skin Tumors & Melanoma - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis, management, and follow-up in Indian practice",
        contentMd: "# Skin Tumors & Melanoma - Clinical\n\n## Clinical Diagnosis\n\n### Diagnostic Approach\n1. Clinical examination using ABCDE rule\n2. Dermoscopy for detailed morphological assessment\n3. Excisional biopsy - gold standard\n4. Histopathology with Breslow measurement\n\n### Risk Factors in Indian Context\n- Fair skin (higher risk in North India)\n- Family history of melanoma\n- Multiple nevi\n- Atypical nevi\n- Previous non-melanoma skin cancer\n- Occupational UV exposure\n\n## Management\n\n### Surgical Management\n**Wide Local Excision**\n- Margins depend on Breslow thickness:\n  - <1 mm: 1 cm margin\n  - 1-2 mm: 1-2 cm margin\n  - 2-4 mm: 2-3 cm margin\n  - >4 mm: 3 cm margin\n\n### Lymph Node Assessment\n- Sentinel lymph node biopsy for intermediate thickness (1-4 mm)\n- Elective lymph node dissection in node-positive disease\n- Regular lymph node examination\n\n### Systemic Therapy\n- **Early stage**: Surgery alone\n- **Advanced (Stage III-IV)**:\n  - Immunotherapy (Pembrolizumab, Nivolumab)\n  - BRAF/MEK inhibitors (for BRAF-mutant melanoma)\n  - Dacarbazine (traditional chemotherapy)\n\n## Follow-up\n- Regular skin self-examination\n- Surveillance for metastases\n- Imaging (CT, MRI, PET) as indicated\n- Frequency depends on stage\n- Lifetime follow-up recommended\n\n## Prevention (Indian Context)\n- Sun protection: Sunscreen (SPF 30+), protective clothing\n- Avoid peak sun hours (10 AM - 4 PM)\n- Early identification and excision of suspicious lesions\n- Public awareness programs",
        mnemonics: [
          { text: "Margins by Breslow", explanation: "<1mm:1cm, 1-2mm:1-2cm, 2-4mm:2-3cm, >4mm:3cm" },
          { text: "SLNB", explanation: "Sentinel Lymph Node Biopsy for intermediate thickness" }
        ],
        keyPoints: [
          "Excisional biopsy is diagnostic gold standard",
          "Surgical margins based on Breslow thickness",
          "SLNB for intermediate thickness tumors",
          "Immunotherapy and targeted therapy for advanced disease",
          "Lifetime follow-up essential"
        ],
        textbookRefs: [
          { book: "Khatri & Sharma", chapter: "Melanoma Management", edition: "3rd" },
          { book: "Fitzpatrick's Dermatology", chapter: "Melanoma Treatment", edition: "10th" }
        ]
      },
      {
        layer: 4,
        slug: "skin-tumors-melanoma-exam",
        title: "Skin Tumors & Melanoma - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield MCQ concepts and comparison tables",
        contentMd: "# Skin Tumors & Melanoma - Exam Prep\n\n## Key Comparison Table\n\n| Aspect | BCC | SCC | Melanoma |\n|--------|-----|-----|----------|\n| Origin | Basal cells | Squamous cells | Melanocytes |\n| Incidence | Most common | 2nd most common | 1-2% of skin cancers |\n| Metastasis | Rare | Occasional | Common if thick |\n| Prognosis | Best | Good | Variable |\n| Depth | Superficial | Varies | Into dermis/subcutis |\n\n## ABCDE High-Yield Facts\n\n**Problem-Solving**: A 50-year-old with irregular, multi-colored lesion 8mm on back. Management?\n- Answer: Excisional biopsy (suspicious for melanoma based on ABCDE)\n\n**Analysis**: Breslow 2.5mm melanoma. What about SLNB?\n- Answer: Indicated (intermediate thickness 1-4 mm)\n\n**Recall**: Most common type of melanoma?\n- Answer: Superficial spreading melanoma (70%)\n\n## Prognostic Factors\n- **Best**: Breslow <0.75 mm, no ulceration\n- **Intermediate**: Breslow 1-4 mm, no node involvement\n- **Worst**: >4 mm, ulceration, node/distant metastases\n\n## Key Facts\n- Clark's levels describe histological depth\n- Breslow thickness is most important prognostic factor\n- Sentinel lymph node biopsy for 1-4 mm lesions\n- Excisional biopsy margins depend on thickness\n- 5-year survival Stage I: 95%, Stage IV: 5-10%",
        mnemonics: [
          { text: "BCCABCDE", explanation: "BCC vs Melanoma (ABCDE rule)" }
        ],
        keyPoints: [
          "BCC most common, best prognosis",
          "Melanoma rare but aggressive",
          "ABCDE rule identifies suspicious lesions",
          "Breslow thickness predicts prognosis",
          "Excision margins critical for melanoma"
        ],
        textbookRefs: [
          { book: "NEXT-PG Dermatology", chapter: "Skin Cancer", edition: "Latest" },
          { book: "Khatri & Sharma MCQ", chapter: "Tumors", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "skin-tumors-melanoma-recall",
        title: "Skin Tumors & Melanoma - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Skin Tumors & Melanoma - Active Recall\n\n## Flashcards\n\n**Q: ABCDE rule stands for?**\nA: Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolution\n\n**Q: What is Breslow thickness?**\nA: Distance from granular layer to deepest tumor cell; key prognostic factor\n\n**Q: <0.75 mm Breslow = what prognosis?**\nA: Excellent (>95% 5-year survival)\n\n**Q: Most common type of melanoma?**\nA: Superficial spreading melanoma (70%)\n\n**Q: Most aggressive type of melanoma?**\nA: Nodular melanoma (poor prognosis)\n\n**Q: Which melanoma type affects palms/soles?**\nA: Acral lentiginous (more common in dark skin)\n\n**Q: Surgical margin for Breslow 2mm?**\nA: 1-2 cm margin\n\n**Q: When to do SLNB?**\nA: Breslow thickness 1-4 mm\n\n**Q: Most common mutation in melanoma?**\nA: BRAF mutation (40-50%)\n\n**Q: Immunotherapy drug for melanoma?**\nA: Pembrolizumab or Nivolumab (checkpoint inhibitors)",
        mnemonics: [
          { text: "BCC-SCC-MM pyramid", explanation: "Frequency: BCC > SCC > MM" }
        ],
        keyPoints: [
          "10 rapid-fire questions on melanoma",
          "ABCDE rule emphasized",
          "Breslow thickness prognostic value",
          "Treatment principles reinforced"
        ],
        textbookRefs: [
          { book: "Khatri & Sharma MCQ", chapter: "Melanoma", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "EN-MOD-02-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "nose-sinuses-anatomy-foundation",
        title: "Anatomy of Nose & Sinuses - Foundation",
        estimatedMinutes: 20,
        summary: "Basic anatomical structure of external, internal nose and paranasal sinuses",
        contentMd: "# Anatomy of Nose & Sinuses - Foundation\n\n## External Nose\n- **Bony framework**: Nasal bones, maxilla, septum\n- **Cartilaginous framework**: Upper and lower lateral cartilages, septum\n- **Nares**: Anterior nasal openings\n- **Apex, dorsum, alae, columella**: Anatomical landmarks\n\n## Internal Nose (Nasal Cavity)\n\n**Divisions**\n- Separated by nasal septum (midline)\n- Right and left nasal cavities\n\n**Walls**\n- Medial: Nasal septum\n- Lateral: Nasal conchae (turbinates) - superior, middle, inferior\n- Floor: Hard palate\n- Roof: Cribriform plate\n\n**Conchae/Turbinates**\n- Superior, middle, inferior (from top to bottom)\n- Create meatuses (superior, middle, inferior)\n- Increase surface area for air warming/humidifying\n\n## Paranasal Sinuses\n\n**Four pairs of sinuses**\n1. **Maxillary sinuses**: Largest, under cheekbones\n2. **Frontal sinuses**: In forehead\n3. **Ethmoid sinuses**: Between eyes (multiple small cells)\n4. **Sphenoid sinus**: Deep in skull\n\n**Functions**\n- Lighten skull weight\n- Insulate brain from temperature changes\n- Voice resonance\n- Absorb shock/trauma\n\n## Blood Supply & Innervation\n- **Arterial**: Anterior/posterior ethmoidal, sphenopalatine arteries\n- **Innervation**: V1 (ophthalmic), V2 (maxillary) divisions of trigeminal",
        mnemonics: [
          { text: "MEFS", explanation: "Maxillary, Ethmoid, Frontal, Sphenoid sinuses" },
          { text: "SMI", explanation: "Superior, Middle, Inferior turbinates" }
        ],
        keyPoints: [
          "4 pairs of paranasal sinuses",
          "3 turbinates increase surface area",
          "Maxillary sinus is largest",
          "Ethmoid sinus is multiple small cells",
          "Nasal septum divides nasal cavities"
        ],
        textbookRefs: [
          { book: "Anatomy by BD Chaurasia", chapter: "Head and Neck", edition: "8th" },
          { book: "Logans' Anatomy", chapter: "Nose", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "nose-sinuses-anatomy-mechanism",
        title: "Anatomy of Nose & Sinuses - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed anatomical relationships, drainage patterns, and neurovascular supply",
        contentMd: "# Anatomy of Nose & Sinuses - Mechanism\n\n## Detailed Anatomical Structure\n\n### Nasal Septum\n- **Anterior 1/3**: Cartilaginous\n- **Posterior 2/3**: Bony (vomer, perpendicular plate of ethmoid)\n- **Vomeronasal organ**: Accessory olfactory structure\n- **Deviated septum**: Common anatomical variation\n\n### Olfactory Region\n- **Location**: Superior part of nasal cavity\n- **Olfactory epithelium**: Specialized sensory mucosa\n- **Olfactory nerves**: Pass through cribriform plate\n- **Connection**: To olfactory bulb and brain\n\n### Ostiomeatal Complex\n- **Location**: Middle meatus region\n- **Components**: Hiatus semilunaris, uncinate process\n- **Importance**: Common drainage site for maxillary, anterior ethmoid, frontal sinuses\n- **Clinical relevance**: Site of obstruction in rhinosinusitis\n\n## Sinus Drainage Patterns\n\n**Maxillary Sinus**\n- Ostium opens into middle meatus\n- Gravity-assisted drainage\n- Located inferior to ostiomeatal complex\n\n**Anterior Ethmoid**\n- Drains into middle meatus\n- Via ostiomeatal complex\n\n**Frontal Sinus**\n- Drains via frontonasal duct into middle meatus\n- Via hiatus semilunaris\n\n**Posterior Ethmoid & Sphenoid**\n- Drain into superior meatus\n- Sphenoid also directly into nasopharynx\n\n## Neurovascular Supply\n\n**Arterial Supply**\n- **Anterior ethmoidal artery**: Via medial canthal approach\n- **Posterior ethmoidal artery**: Along roof of ethmoid\n- **Sphenopalatine artery**: Terminal branch of maxillary artery (supplies lateral wall)\n- **Greater palatine artery**: Supplies hard palate\n\n**Venous Drainage**\n- To facial vein, ophthalmic vein\n- Cavernous sinus connections (clinical danger)\n\n**Nerve Supply**\n- **V1 (Ophthalmic)**: Anterior ethmoidal nerve, olfactory\n- **V2 (Maxillary)**: Posterior superior alveolar, greater/lesser palatine, nasopalatine\n- **Parasympathetic**: SPHENOPALATINE GANGLION via maxillary nerve",
        mnemonics: [
          { text: "OMC", explanation: "Ostiomeatal Complex - key drainage area" },
          { text: "GSG", explanation: "Greater Sphenopalatine Ganglion (parasympathetic)" }
        ],
        keyPoints: [
          "Ostiomeatal complex is key drainage point",
          "Sphenopalatine ganglion provides parasympathetic supply",
          "Anterior/posterior ethmoidal arteries supply ethmoid roof",
          "Cavernous sinus connections important clinically",
          "Drainage patterns important in rhinosinusitis"
        ],
        textbookRefs: [
          { book: "Anatomy by BD Chaurasia", chapter: "Detailed Anatomy", edition: "8th" },
          { book: "Endoscopic Anatomy by Stammberger", chapter: "Nose & Sinuses", edition: "3rd" }
        ]
      },
      {
        layer: 3,
        slug: "nose-sinuses-anatomy-clinical",
        title: "Anatomy of Nose & Sinuses - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical anatomy relevant to ENT conditions, procedures, and complications",
        contentMd: "# Anatomy of Nose & Sinuses - Clinical\n\n## Clinically Important Anatomical Points\n\n### Anatomical Variations\n- **Deviated septum**: Common, may cause nasal obstruction\n- **Uncinate process variations**: Affects sinus drainage\n- **Concha bullosa**: Pneumatized middle turbinate\n- **Paradoxical turbinate**: Medially curved middle turbinate\n- **Nasal polyps**: Arise from ostiomeatal complex region\n\n### Dangerous Areas\n\n**Anterior Ethmoidal Artery**\n- Located at roof of anterior ethmoid\n- Risk during FESS (Functional Endoscopic Sinus Surgery)\n- Bleeding here can cause retrobulbar hematoma\n- Located 24-26 mm from nasal dorsum\n\n**Cribriform Plate**\n- Thin horizontal bone separating nasal cavity from anterior fossa\n- Risk during aggressive ethmoid surgery\n- CSF leak complication possible\n- Olfactory nerves pass through\n\n**Cavernous Sinus**\n- Connected via ophthalmic veins\n- Risk of thrombosis from sphenoid/ethmoid infections\n- Clinical significance: ethmoiditis → cavernous sinus thrombosis\n\n## Endoscopic Anatomy\n\n### Endoscopic Landmarks\n- **Axilla of middle turbinate**: Anatomical landmark\n- **Sphenoid sinus ostium**: In sphenoid recess\n- **Superior turbinate**: Behind roof of ethmoid\n- **Uncinate process**: Anterior boundary of ostiomeatal complex\n\n### Endoscopic Procedures\n- FESS: Minimize trauma, preserve normal anatomy\n- Sinus lift for implants: Requires anatomical knowledge\n- Pituitary surgery approach: Through sphenoid\n\n## Applied Anatomy in Conditions\n\n**Sinusitis**\n- Ostiomeatal complex obstruction → drainage impairment\n- Gravity affects maxillary sinus drainage\n- Age-related changes in sinus development\n\n**Septal Deviation**\n- Affects airflow dynamics\n- May cause obstructive sleep apnea\n- Surgery requires understanding of support structures\n\n**Epistaxis Management**\n- Anterior epistaxis: Usually septal branches\n- Posterior epistaxis: Sphenopalatine artery territory\n- Anatomical knowledge guides cauterization/ligation",
        mnemonics: [
          { text: "DANGER", explanation: "Dangerously thin: Cribriform plate, Lamina cribrosa, Anterior roof" },
          { text: "AAA", explanation: "Anterior Ethmoidal Artery - at 24-26mm from dorsum" }
        ],
        keyPoints: [
          "Ostiomeatal complex is common obstruction site",
          "Anterior ethmoidal artery at risk during FESS",
          "Cribriform plate separation between nose and brain",
          "Cavernous sinus connection risk for infection spread",
          "Anatomical variations affect surgical approach"
        ],
        textbookRefs: [
          { book: "Scott-Brown ENT", chapter: "Nose Anatomy", edition: "9th" },
          { book: "Endoscopic Sinus Surgery by Kennedy", chapter: "Anatomy", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "nose-sinuses-anatomy-exam",
        title: "Anatomy of Nose & Sinuses - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield anatomical facts and NEXT-pattern MCQ concepts",
        contentMd: "# Anatomy of Nose & Sinuses - Exam Prep\n\n## High-Yield Anatomical Facts\n\n| Structure | Location | Clinical Significance |\n|-----------|----------|----------------------|\n| Ostiomeatal Complex | Middle meatus | Common drainage point for 3 sinuses |\n| Cribriform Plate | Roof of ethmoid | CSF leak risk during surgery |\n| Ant. Ethmoidal Artery | At 24-26mm from dorsum | Risk during FESS (retrobulbar bleed) |\n| Sphenopalatine Ganglion | Pterygopalatine fossa | Parasympathetic supply (VIP important) |\n| Vomer | Posterior nasal septum | Bony component of septum |\n\n## NEXT-Pattern MCQ Examples\n\n**Problem-Solving**: Patient with CSF rhinorrhea after nasal surgery. Most likely damaged structure?\n- Answer: Cribriform plate (thin horizontal bone at roof)\n\n**Analysis**: Why does uncinate process relate to sinusitis?\n- Answer: It forms medial boundary of ostiomeatal complex; obstruction prevents drainage\n\n**Recall**: Location of sphenoid sinus ostium?\n- Answer: Sphenoid recess (posterior to superior turbinate)\n\n## Key Distances\n- **Ant. ethmoidal artery to nasal dorsum**: 24-26 mm\n- **Post. ethmoidal artery to nasal dorsum**: 34 mm\n- **Cribriform plate height**: 2-3 mm thick\n- **Sphenoid sinus**: 25-30 mm from nasal dorsum\n\n## Important Relationships\n- Maxillary sinus ostium: Below roof (gravity disadvantage)\n- Anterior ethmoid drainage: Via ostiomeatal complex\n- Frontal sinus drainage: Via frontonasal duct to middle meatus\n- Posterior ethmoid: Via superior meatus",
        mnemonics: [
          { text: "AFSS", explanation: "Anterior Frontal, Sphenoid ostium positions" }
        ],
        keyPoints: [
          "4 sinuses with 3 major drainage points",
          "Ostiomeatal complex is 'bottleneck'",
          "Anterior ethmoidal artery critical landmark",
          "Cribriform plate thin and dangerous",
          "Sphenopalatine ganglion = parasympathetic hub"
        ],
        textbookRefs: [
          { book: "NEXT-PG ENT Series", chapter: "Anatomy", edition: "Latest" },
          { book: "Scott-Brown ENT MCQ", chapter: "Nose", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "nose-sinuses-anatomy-recall",
        title: "Anatomy of Nose & Sinuses - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Anatomy of Nose & Sinuses - Active Recall\n\n## Flashcards\n\n**Q: How many paranasal sinuses?**\nA: 4 pairs (Maxillary, Frontal, Ethmoid, Sphenoid)\n\n**Q: How many nasal turbinates?**\nA: 3 on each side (Superior, Middle, Inferior)\n\n**Q: Which sinus is largest?**\nA: Maxillary sinus\n\n**Q: Where does anterior ethmoidal artery run?**\nA: At roof of anterior ethmoid, 24-26mm from nasal dorsum\n\n**Q: What separates nose from brain?**\nA: Cribriform plate (thin bone)\n\n**Q: Ostiomeatal complex drains which sinuses?**\nA: Maxillary, anterior ethmoid, and frontal sinuses\n\n**Q: Location of sphenopalatine ganglion?**\nA: Pterygopalatine fossa (branches from V2)\n\n**Q: Blood supply to lateral nasal wall?**\nA: Sphenopalatine artery (terminal maxillary artery)\n\n**Q: Which nerve carries olfaction?**\nA: CN I (Olfactory nerve through cribriform plate)\n\n**Q: Venous drainage connections of nose?**\nA: To cavernous sinus via ophthalmic veins (danger!)",
        mnemonics: [
          { text: "MEFS", explanation: "Maxillary, Ethmoid, Frontal, Sphenoid" }
        ],
        keyPoints: [
          "10 rapid-fire anatomy questions",
          "Focus on sinus drainage patterns",
          "Dangerous structures emphasized",
          "Neurovascular supply reinforced"
        ],
        textbookRefs: [
          { book: "Scott-Brown ENT MCQ", chapter: "Anatomy", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "EN-MOD-03-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "pharyngitis-peritonsillar-foundation",
        title: "Pharyngitis & Peritonsillar Abscess - Foundation",
        estimatedMinutes: 20,
        summary: "Definition, classification, and clinical presentation of pharyngeal infections",
        contentMd: "# Pharyngitis & Peritonsillar Abscess - Foundation\n\n## Pharyngitis Definition\nInflammation of pharyngeal mucosa from viral/bacterial infection\n\n## Etiology\n\n**Viral (80%)**\n- Adenovirus, Rhinovirus, Coxsackievirus\n- EBV, CMV, HSV\n- COVID-19, Influenza\n\n**Bacterial (20%)**\n- Group A Streptococcus (GAS) - Most common\n- Streptococcus pyogenes\n- H. influenzae, N. meningitidis (rare)\n\n## Clinical Features - Acute Pharyngitis\n- Sore throat, dysphagia, fever\n- Erythema of pharyngeal mucosa\n- Exudates on tonsils (suggests bacterial)\n- Cervical lymphadenopathy\n- Headache, malaise\n\n## Peritonsillar Abscess (Quinsy)\nLocalized collection of pus lateral to tonsil\n\n**Clinical Features**\n- Unilateral severe throat pain\n- Asymmetrical swelling\n- Deviated uvula\n- Drooling, dysphagia\n- Fever, toxemia\n- Difficulty opening mouth\n\n## Differentiating Viral vs Bacterial\n- **Bacterial (GAS)**: Sudden onset, high fever, exudate\n- **Viral**: Gradual onset, mild-moderate fever, no exudate\n- **Centor Criteria**: Helps predict GAS infection",
        mnemonics: [
          { text: "CENTOR", explanation: "Criteria for GAS pharyngitis diagnosis" },
          { text: "Quinsy", explanation: "Peritonsillar abscess (Queen's sore throat)" }
        ],
        keyPoints: [
          "80% pharyngitis is viral",
          "GAS most common bacterial cause",
          "Exudates suggest bacterial infection",
          "Peritonsillar abscess is unilateral complication",
          "Deviated uvula in peritonsillar abscess"
        ],
        textbookRefs: [
          { book: "Scott-Brown ENT", chapter: "Pharyngitis", edition: "9th" },
          { book: "Harrison's Principles", chapter: "Pharyngitis", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "pharyngitis-peritonsillar-mechanism",
        title: "Pharyngitis & Peritonsillar Abscess - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology, complications, and formation of abscess",
        contentMd: "# Pharyngitis & Peritonsillar Abscess - Mechanism\n\n## Pathophysiology - Acute Pharyngitis\n\n### Viral Infection\n- Direct viral infection of pharyngeal epithelium\n- Inflammatory response with exudation\n- Self-limited course (3-7 days)\n- Post-viral cough common\n\n### Bacterial Infection (GAS)\n- Colonization of pharyngeal mucosa\n- M protein → tissue invasion\n- Streptolysis production → tissue damage\n- Inflammatory response\n\n## Peritonsillar Abscess Formation\n\n### Sequence\n1. Tonsillitis (bacterial, usually Group A Strep)\n2. Invasion beyond tonsillar capsule\n3. Accumulation of pus in peritonsillar space\n4. Pressure effects on surrounding structures\n\n### Anatomy\n- **Location**: Between tonsillar capsule and pharyngeal constrictor muscle\n- **Boundaries**: Tonsil medially, pharyngeal constrictor laterally\n- **Most common site**: Superior pole (Anterior pillar)\n\n### Pressure Effects\n- Deviation of soft palate/uvula\n- Trismus (limited mouth opening)\n- Dysphagia\n- Airway compromise (rare but serious)\n\n## Complications\n\n**Local Complications**\n- Airway obstruction\n- Aspiration\n- Spread to parapharyngeal space\n- Mediastinitis\n\n**Systemic Complications of GAS Pharyngitis**\n- **Acute Rheumatic Fever (ARF)**: Post-streptococcal sequela (1-3 weeks)\n- **Post-streptococcal glomerulonephritis (PSGN)**: Immune complex disease\n- **Scarlet fever**: With characteristic rash\n- **PANDAS**: Pediatric Autoimmune Neuropsychiatric Disorders (controversial)\n\n## Immunological Aspects\n- Cross-reactivity: GAS antigens cross-react with myocardium/heart\n- Type III hypersensitivity mechanism in ARF\n- Immune complex deposition in PSGN",
        mnemonics: [
          { text: "ARF-PSGN", explanation: "Post-streptococcal sequelae: Rheumatic Fever, GlomeruloNephritis" },
          { text: "M-protein", explanation: "Virulence factor in GAS enabling invasion" }
        ],
        keyPoints: [
          "Peritonsillar abscess usually at superior pole",
          "Tonsillitis precedes abscess formation",
          "Pressure effects cause deviated uvula/trismus",
          "ARF complicates 0.3-3% of untreated GAS pharyngitis",
          "PSGN less common (< 1%), occurs in any streptococcal infection"
        ],
        textbookRefs: [
          { book: "Scott-Brown ENT", chapter: "Complications of Pharyngitis", edition: "9th" },
          { book: "Harrison's Principles", chapter: "Post-streptococcal sequelae", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "pharyngitis-peritonsillar-clinical",
        title: "Pharyngitis & Peritonsillar Abscess - Clinical",
        estimatedMinutes: 20,
        summary: "Diagnostic approach, management, and prevention in Indian practice",
        contentMd: "# Pharyngitis & Peritonsillar Abscess - Clinical\n\n## Diagnostic Approach\n\n**Centor Criteria (for GAS)** - Score 1 for each:\n1. Fever >38.5°C\n2. Absence of cough\n3. Pharyngeal exudate\n4. Cervical lymphadenopathy\n- Score 3-4: High risk of GAS, treat empirically\n- Score 0-2: Low risk, symptomatic treatment\n\n**Investigations**\n- **Throat culture**: Gold standard for GAS (confirms diagnosis)\n- **Rapid Strep test**: Quick diagnosis\n- **ASO titer**: For post-streptococcal sequelae\n- **Imaging (CT)**: For peritonsillar abscess if diagnosis uncertain\n\n## Management - Acute Pharyngitis\n\n**Symptomatic Treatment**\n- Analgesics: Paracetamol, NSAIDs\n- Throat lozenges, salt water gargles\n- Adequate hydration\n- Rest\n\n**Antibiotic Treatment (if GAS suspected)**\n- **First-line**: Penicillin V (500mg QID × 10 days)\n- **Allergy**: Cephalosporin (cross-reactivity < 1%)\n- **True PCN allergy**: Macrolide (Erythromycin, Azithromycin)\n- **Clindamycin**: Alternative option\n\n## Management - Peritonsillar Abscess\n\n**Conservative (Early stage)**\n- Antibiotics: High-dose penicillin IV/IM\n- Analgesics\n- Anti-inflammatory: Dexamethasone\n- Airway monitoring\n\n**Drainage**\n- **Needle aspiration**: Diagnostic and therapeutic\n- **Incision and drainage**: If needle aspiration fails\n- **Tonsillectomy**: During abscess (interval or acute)\n\n## Prevention\n- Early detection and treatment of pharyngitis\n- Complete antibiotic course (reduce ARF risk)\n- Good hygiene practices\n- Prompt treatment prevents progression to abscess\n\n## Secondary Prophylaxis (Post-ARF)\n- Long-term penicillin to prevent recurrent GAS infections\n- Duration depends on ARF severity and carditis",
        mnemonics: [
          { text: "BENCH", explanation: "Benzylpenicillin, ENT emergency, Needle aspiration, Culture, High-dose antibiotics" }
        ],
        keyPoints: [
          "Centor score guides GAS treatment decisions",
          "Penicillin remains first-line for GAS",
          "10-day course needed to prevent ARF",
          "Peritonsillar abscess often needs drainage",
          "Secondary prophylaxis important post-ARF"
        ],
        textbookRefs: [
          { book: "Scott-Brown ENT", chapter: "Management", edition: "9th" },
          { book: "NMC CBME ENT Guidelines", chapter: "Infections", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "pharyngitis-peritonsillar-exam",
        title: "Pharyngitis & Peritonsillar Abscess - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and NEXT-pattern MCQ concepts",
        contentMd: "# Pharyngitis & Peritonsillar Abscess - Exam Prep\n\n## Centor Score Table\n\n| Criterion | Score |\n|-----------|-------|\n| Fever >38.5°C | 1 |\n| No cough | 1 |\n| Pharyngeal exudate | 1 |\n| Cervical lymphadenopathy | 1 |\n| Total | ≤4 |\n\n**Interpretation**: Score 3-4 = Treat for GAS\n\n## High-Yield Facts\n\n**Problem-Solving**: Child with fever, sore throat, exudate, cervical nodes. Diagnosis?\n- Answer: GAS pharyngitis (Centor score 4, treat with penicillin)\n\n**Analysis**: Why treat GAS pharyngitis even if self-limiting?\n- Answer: Prevent post-streptococcal sequelae (ARF, PSGN)\n\n**Recall**: First-line antibiotic for GAS?\n- Answer: Penicillin V 500mg QID × 10 days\n\n## Key Differentiators\n\n| Feature | Viral | Bacterial (GAS) |\n|---------|-------|----------|\n| Onset | Gradual | Sudden |\n| Fever | Mild-moderate | High (>38.5°C) |\n| Exudate | Absent | Present |\n| Cough | Common | Absent |\n| Centor | 0-2 | 3-4 |\n\n## Peritonsillar Abscess High-Yield\n- Location: Superior pole 80% of cases\n- Complications: Airway obstruction, mediastinitis\n- Treatment: Aspiration ± incision, antibiotics\n- Difference from tonsillitis: Unilateral, severe pain, deviated uvula",
        mnemonics: [
          { text: "SORE", explanation: "Superior pole, Obstruction risk, Rupture risk, ENT emergency" }
        ],
        keyPoints: [
          "Centor score 3-4 = empiric GAS treatment",
          "Penicillin × 10 days prevents ARF",
          "Peritonsillar abscess at superior pole",
          "Airway monitoring crucial",
          "ARF prevention justifies antibiotic use"
        ],
        textbookRefs: [
          { book: "NEXT-PG ENT Series", chapter: "Pharyngitis", edition: "Latest" },
          { book: "Scott-Brown MCQ", chapter: "Infection", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "pharyngitis-peritonsillar-recall",
        title: "Pharyngitis & Peritonsillar Abscess - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Pharyngitis & Peritonsillar Abscess - Active Recall\n\n## Flashcards\n\n**Q: Most common bacterial cause of pharyngitis?**\nA: Group A Streptococcus (Streptococcus pyogenes)\n\n**Q: What is Centor score used for?**\nA: To predict likelihood of GAS pharyngitis; guides treatment decision\n\n**Q: Centor score of 3-4 means?**\nA: High risk of GAS, treat empirically with antibiotics\n\n**Q: First-line antibiotic for GAS?**\nA: Penicillin V 500mg QID × 10 days\n\n**Q: Why treat GAS pharyngitis for 10 days?**\nA: To prevent post-streptococcal sequelae (ARF, PSGN)\n\n**Q: What is a peritonsillar abscess?**\nA: Collection of pus between tonsillar capsule and pharyngeal constrictor\n\n**Q: Most common location of peritonsillar abscess?**\nA: Superior pole of tonsil\n\n**Q: Classic sign of peritonsillar abscess?**\nA: Deviated uvula (unilateral, away from abscess)\n\n**Q: ARF incidence if GAS pharyngitis untreated?**\nA: 0.3-3% (depending on population)\n\n**Q: Treatment of peritonsillar abscess?**\nA: Needle aspiration ± incision and drainage + antibiotics",
        mnemonics: [
          { text: "GAS-Pen", explanation: "Group A Streptococcus treated with Penicillin" }
        ],
        keyPoints: [
          "10 rapid-fire questions",
          "Centor score emphasis",
          "Treatment principles",
          "Complications focus"
        ],
        textbookRefs: [
          { book: "Scott-Brown MCQ", chapter: "Pharyngitis", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "FM-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "consent-negligence-foundation",
        title: "Consent & Negligence - Foundation",
        estimatedMinutes: 20,
        summary: "Legal principles of consent, autonomy, and negligence in medicine",
        contentMd: "# Consent & Negligence - Foundation\n\n## Informed Consent - Definition\nVoluntary agreement to treatment after understanding nature, risks, benefits, and alternatives\n\n## Components of Valid Consent\n1. **Disclosure**: Information about procedure/treatment\n2. **Comprehension**: Patient understands information\n3. **Voluntariness**: Free from coercion\n4. **Competence**: Patient mentally capable\n\n## Types of Consent\n- **Explicit**: Written or verbal\n- **Implied**: Patient's actions suggest agreement (emergency)\n- **Presumed**: Unconscious patient, life-saving treatment\n\n## When Consent NOT Required\n- Emergency (unconscious, life-threatening)\n- Public health measures (vaccination, quarantine)\n- Court order\n- Parental refusal: Child welfare override\n\n## Negligence - Definition\nFailure to exercise reasonable care resulting in harm\n\n## Elements of Negligence (Four Ds)\n1. **Duty**: Physician has duty of care to patient\n2. **Dereliction**: Breach of duty (deviation from standard)\n3. **Damage**: Harm/injury to patient\n4. **Direct causation**: Breach caused the damage\n\n## Standard of Care\n- \"Reasonable doctor\" standard\n- Local/regional standards considered\n- Specialist held to higher standard",
        mnemonics: [
          { text: "DCDD", explanation: "Duty, Causation, Dereliction, Damage (Four Ds)" },
          { text: "DICV", explanation: "Disclosure, Informed, Competence, Voluntary" }
        ],
        keyPoints: [
          "Consent requires information and comprehension",
          "Patient autonomy is fundamental principle",
          "Negligence requires all four elements",
          "Standard of care is 'reasonable doctor'",
          "Emergency exceptions to consent"
        ],
        textbookRefs: [
          { book: "Parikh's Medical Jurisprudence", chapter: "Consent", edition: "6th" },
          { book: "BDC Forensic Medicine", chapter: "Medico-Legal", edition: "24th" }
        ]
      },
      {
        layer: 2,
        slug: "consent-negligence-mechanism",
        title: "Consent & Negligence - Mechanism",
        estimatedMinutes: 30,
        summary: "Legal framework, exceptions, and liability standards",
        contentMd: "# Consent & Negligence - Mechanism\n\n## Legal Framework - Indian Law\n\n**Indian Penal Code (IPC)**\n- Section 52: Consent to act\n- Section 92: Act in good faith for benefit (no consent needed in emergency)\n- Touch without consent = Assault (IPC 352)\n\n**Indian Contract Act**\n- Consent must be free\n- Valid for competent person with capacity\n\n**Medical Council Regulations**\n- GMC Code of Ethics: Requires informed consent\n- Duties to patient clearly defined\n\n## Consent in Special Situations\n\n**Minor (< 18 years)**\n- Parent/guardian gives consent\n- Minor's assent increasingly recognized\n- **Gillick competence**: Mature minor may consent\n- Life-saving exceptions override parent refusal\n\n**Incompetent Adult**\n- Legally appointed guardian gives consent\n- If none: Next of kin (parents, spouse, adult children)\n- Living will/advance directive considered\n\n**Medical Emergency**\n- Presumed consent allowed\n- Doctrine of necessity\n- Reasonable person standard applied\n\n## Negligence in Medical Practice\n\n### Standards\n- **Bolam Test**: Accepted practice in medical profession\n- **Bolitha Test**: Reasonable opinion based on logic\n- Indian courts adapt these principles\n\n### Res Ipsa Loquitur\n- \"The thing speaks for itself\"\n- Negligence inferred from circumstances\n- Example: Retained surgical instruments\n\n## Liability Types\n- **Criminal negligence**: Recklessness (IPC 304A - death; 337-338 injuries)\n- **Civil negligence**: Compensation claim\n- **Professional negligence**: Breach of standard of care\n\n## Vicarious Liability\n- Hospital liable for staff negligence\n- Employer responsible for employee actions\n- Important for institutional accountability",
        mnemonics: [
          { text: "Bolam", explanation: "Standard practice in medical profession (Bolam Test)" },
          { text: "RIPL", explanation: "Res Ipsa Loquitur - Negligence inferred from facts" }
        ],
        keyPoints: [
          "IPC Section 52 and 92 define consent/emergency",
          "Gillick competence for mature minors",
          "Bolam Test standard of care",
          "Res Ipsa Loquitur shifts burden of proof",
          "Vicarious liability for institutional negligence"
        ],
        textbookRefs: [
          { book: "Parikh's Medical Jurisprudence", chapter: "Negligence", edition: "6th" },
          { book: "Indian Penal Code", chapter: "Ch 4-5", edition: "Current" }
        ]
      },
      {
        layer: 3,
        slug: "consent-negligence-clinical",
        title: "Consent & Negligence - Clinical",
        estimatedMinutes: 20,
        summary: "Practical application in clinical practice and documentation",
        contentMd: "# Consent & Negligence - Clinical\n\n## Obtaining Informed Consent - Best Practice\n\n**Pre-Procedure Discussion**\n1. Explain procedure in language patient understands\n2. Discuss risks (common, serious)\n3. Benefits of procedure\n4. Alternative treatments\n5. Consequences of refusing treatment\n6. Allow time for questions\n\n**Documentation**\n- Written consent form signed\n- Witness signature important\n- Date and time documented\n- Note what was explained\n- Record patient understanding\n\n## Special Clinical Situations\n\n**Risky Procedures**\n- Greater disclosure needed\n- Document discussion thoroughly\n- Obtain written consent\n- Witness signature\n\n**Routine Procedures**\n- General consent may suffice initially\n- Still need adequate explanation\n- Consent for specific additional procedures required\n\n**Refusal of Treatment**\n- Respect autonomy (even if medically unwise)\n- Document refusal in detail\n- Explain consequences\n- Witness refusal\n- Optional: Take signature\n\n## Preventing Negligence in Practice\n\n**Quality Care Standards**\n- Follow established protocols\n- Maintain competence through CPD\n- Use evidence-based practices\n- Document care adequately\n- Communicate with patient\n\n**Documentation Tips**\n- Timely, legible, complete records\n- Objective findings\n- Clinical reasoning\n- Interventions and rationale\n- Patient consent noted\n- Complications documented\n\n**Common Negligence Scenarios**\n- Misdiagnosis (failure to investigate adequately)\n- Surgical errors (retained instruments, wrong site)\n- Medication errors (wrong dose, drug)\n- Failure to follow up (missed diagnosis)\n- Inadequate consent (no disclosure)",
        mnemonics: [
          { text: "CARE", explanation: "Competence, Adequate disclosure, Respect autonomy, Evidence-based care" }
        ],
        keyPoints: [
          "Written consent preferred for invasive procedures",
          "Document discussion and patient understanding",
          "Respect patient autonomy in refusal",
          "Maintain detailed clinical records",
          "Follow evidence-based protocols to prevent negligence"
        ],
        textbookRefs: [
          { book: "NMC Code of Ethics", chapter: "Conduct", edition: "Latest" },
          { book: "Parikh's Medical Jurisprudence", chapter: "Clinical Practice", edition: "6th" }
        ]
      },
      {
        layer: 4,
        slug: "consent-negligence-exam",
        title: "Consent & Negligence - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield legal concepts and NEXT-pattern MCQ examples",
        contentMd: "# Consent & Negligence - Exam Prep\n\n## Key Legal Definitions\n\n**Consent vs Assault**\n| Aspect | With Consent | Without Consent |\n|--------|--------------|-----|\n| Touch/procedure | Lawful | Assault (IPC 352) |\n| Patient right | Respected | Violated |\n| Liability | None if proper | Criminal + Civil |\n\n## Four Ds of Negligence (Must ALL be present)\n1. **Duty of care**: Doctor-patient relationship\n2. **Dereliction/Breach**: Failed to meet standard\n3. **Damage**: Harm/injury\n4. **Direct causation**: Breach caused damage\n\n## NEXT-Pattern MCQs\n\n**Problem-Solving**: Competent adult refuses blood transfusion (religious grounds). Doctor gives transfusion. What is liability?\n- Answer: Assault/battery (no consent) + possible negligence\n\n**Analysis**: Why is negligence hard to prove in India despite errors?\n- Answer: Need to prove breach of reasonable doctor standard; burden on plaintiff\n\n**Recall**: IPC section for death from negligence?\n- Answer: Section 304A (causing death by negligence)\n\n## High-Yield Distinctions\n\n**Negligence vs Malpractice**\n- Negligence: Deviation from standard care\n- Malpractice: Professional negligence (broader)\n\n**Criminal vs Civil Liability**\n- Criminal: Serious breach, intent element (IPC 304A)\n- Civil: Compensation claim (no intent needed)\n\n**Implied vs Presumed Consent**\n- Implied: Patient's behavior suggests agreement\n- Presumed: Emergency overrides; consent assumed\n\n## Bolam & Bolitha Tests\n- Bolam: What reasonable doctor would do\n- Bolitha: Logical basis for doctor's opinion\n- Indian courts use both principles",
        mnemonics: [
          { text: "DUDD", explanation: "Duty, Dereliction, Damage, Direct causation" }
        ],
        keyPoints: [
          "All 4 Ds of negligence must be present",
          "Consent protects autonomy and prevents liability",
          "Standard of care is 'reasonable doctor'",
          "IPC 304A for criminal negligence",
          "Bolam Test applies in Indian courts"
        ],
        textbookRefs: [
          { book: "NEXT-PG FM Series", chapter: "Consent & Negligence", edition: "Latest" },
          { book: "Parikh's MCQ", chapter: "Medico-Legal", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "consent-negligence-recall",
        title: "Consent & Negligence - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Consent & Negligence - Active Recall\n\n## Flashcards\n\n**Q: What is informed consent?**\nA: Voluntary agreement to treatment after understanding nature, risks, benefits, alternatives\n\n**Q: Can a 16-year-old give valid consent?**\nA: Yes, if Gillick competent (understands nature and consequences); context-dependent\n\n**Q: What is presumed consent?**\nA: Consent assumed in medical emergency when patient unconscious\n\n**Q: IPC section for assault without consent?**\nA: Section 352 (force or assault)\n\n**Q: What are the 4 Ds of negligence?**\nA: Duty, Dereliction, Damage, Direct causation\n\n**Q: Bolam Test defines?**\nA: Standard of care = what reasonable doctor would do\n\n**Q: What is res ipsa loquitur?**\nA: \"The thing speaks for itself\" - negligence inferred from circumstances\n\n**Q: IPC section for death from negligence?**\nA: Section 304A\n\n**Q: Can hospital be liable for doctor's negligence?**\nA: Yes, under vicarious liability\n\n**Q: What must consent document include?**\nA: Procedure explained, risks/benefits discussed, alternatives mentioned, patient signature, witness",
        mnemonics: [
          { text: "DCDC", explanation: "Disclosure, Consent, Documentation, Clinical care" }
        ],
        keyPoints: [
          "10 rapid-fire medico-legal questions",
          "Consent and negligence principles",
          "IPC sections emphasized",
          "Legal tests and standards"
        ],
        textbookRefs: [
          { book: "Parikh's MCQ", chapter: "Medico-Legal", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "FM-MOD-03-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "regional-injuries-trauma-foundation",
        title: "Regional Injuries & Trauma - Foundation",
        estimatedMinutes: 20,
        summary: "Classification of trauma and regional injury patterns",
        contentMd: "# Regional Injuries & Trauma - Foundation\n\n## Trauma Classification\n\n**By Mechanism**\n- **Blunt trauma**: Falls, RTA, assaults (majority of trauma)\n- **Penetrating**: Stab wounds, gunshot, impalement\n- **Burn injuries**: Thermal, chemical, electrical\n\n**By Severity**\n- Minor: Low energy, simple injuries\n- Moderate: Multi-system but stable\n- Severe: Life-threatening, multi-organ failure risk\n- Critical: Unstable, requires ICU\n\n## Common Regional Injuries\n\n**Head Injury**\n- Scalp lacerations, skull fractures\n- Epidural/subdural hematoma\n- Brain contusion, diffuse axonal injury\n\n**Chest Injury**\n- Rib fractures, flail chest\n- Pneumothorax, hemothorax\n- Cardiac/vascular injury\n\n**Abdominal Injury**\n- Solid organ: Liver, spleen laceration\n- Hollow organ: Bowel perforation\n- Vascular: Aortic injury\n\n**Limb Injuries**\n- Fractures, dislocations\n- Soft tissue damage\n- Vascular/nerve injury\n\n## Primary Survey (ABCDE)\n- **A**irway\n- **B**reathing\n- **C**irculation\n- **D**isability\n- **E**xposure",
        mnemonics: [
          { text: "ABCDE", explanation: "Primary survey in trauma management" }
        ],
        keyPoints: [
          "Blunt trauma more common than penetrating",
          "Head, chest, abdomen are critical regions",
          "Primary survey (ABCDE) guides initial management",
          "Regional approach to injury assessment",
          "Severity determines management intensity"
        ],
        textbookRefs: [
          { book: "BDC Forensic Medicine", chapter: "Trauma", edition: "24th" },
          { book: "Trauma Manual IATSIC", chapter: "Initial Assessment", edition: "Latest" }
        ]
      },
      {
        layer: 2,
        slug: "regional-injuries-trauma-mechanism",
        title: "Regional Injuries & Trauma - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of regional injuries and organ-specific damage patterns",
        contentMd: "# Regional Injuries & Trauma - Mechanism\n\n## Blunt Head Injury Pathophysiology\n\n**Primary Brain Injury**\n- Direct tissue damage at impact\n- Diffuse axonal injury (DAI) from shear forces\n- Contusion and laceration\n- Non-reversible immediate damage\n\n**Secondary Brain Injury**\n- Cerebral edema → raised ICP\n- Hypoxia, hypercapnia\n- Ischemia from low cerebral perfusion\n- Infection, seizures\n- Preventable with early intervention\n\n**Intracranial Hemorrhage Types**\n- **Epidural**: Between skull and dura; arterial bleeding (middle meningeal artery)\n- **Subdural**: Between dura and brain; venous bleeding\n- **Subarachnoid**: Between arachnoid and pia; rupture of circle of Willis\n- **Intracerebral**: Within brain parenchyma\n\n## Chest Injury Pathophysiology\n\n**Tension Pneumothorax**\n- Progressive air accumulation\n- Compression of heart, mediastinal shift\n- Cardiovascular collapse if untreated\n- Emergency: Needle decompression needed\n\n**Flail Chest**\n- Multiple rib fractures in 2+ places\n- Segment moves paradoxically (inward on inspiration)\n- Underlying pulmonary contusion (major issue)\n- Pain limits breathing → hypoventilation\n\n**Hemothorax**\n- Blood accumulation in pleural space\n- Compression atelectasis\n- Hypovolemia from blood loss\n- Requires chest tube/drainage\n\n## Abdominal Injury Pathophysiology\n\n**Solid Organ Injury** (Liver, Spleen)\n- Laceration/rupture → hemorrhage\n- Risk of delayed rupture\n- Peritoneal irritation\n- Shock from blood loss\n\n**Hollow Organ Perforation** (Bowel)\n- Bacterial contamination → peritonitis\n- Sepsis risk\n- Diffuse peritoneal signs\n- Requires urgent surgical repair\n\n## Shock in Trauma\n- **Hypovolemic**: Most common (hemorrhagic shock)\n- **Cardiogenic**: Cardiac contusion, tamponade\n- **Neurogenic**: Spinal cord injury (high thoracic/cervical)\n- **Septic**: Delayed, from infection",
        mnemonics: [
          { text: "Primary vs Secondary", explanation: "Primary = immediate; Secondary = preventable ICP issues" },
          { text: "Epidural-Subdural", explanation: "Epidural = arterial (middle meningeal); Subdural = venous" }
        ],
        keyPoints: [
          "Secondary brain injury preventable with early management",
          "Tension pneumothorax needs needle decompression",
          "Flail chest: major issue is contusion, not mechanics",
          "Hollow organ perforation requires surgery",
          "Hypovolemic shock most common in trauma"
        ],
        textbookRefs: [
          { book: "Trauma Manual", chapter: "Pathophysiology", edition: "Latest" },
          { book: "BDC Forensic Medicine", chapter: "Injury Mechanisms", edition: "24th" }
        ]
      },
      {
        layer: 3,
        slug: "regional-injuries-trauma-clinical",
        title: "Regional Injuries & Trauma - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical assessment, investigations, and management of regional injuries",
        contentMd: "# Regional Injuries & Trauma - Clinical\n\n## Primary Survey & Resuscitation\n\n**Airway (A) + Cervical Spine Protection**\n- Clear airway (suction, remove foreign body)\n- Head tilt-chin lift (if no C-spine injury risk)\n- Jaw thrust (if C-spine injury suspected)\n- Intubation if unable to maintain airway\n- Cricothyrotomy if unsuccessful\n\n**Breathing (B) Assessment**\n- Count respiratory rate\n- Listen for air entry bilaterally\n- Look for chest wall movement\n- Management: Oxygen, ventilation\n\n**Circulation (C) Assessment**\n- Check pulse (carotid if shock)\n- Blood pressure and HR\n- Skin perfusion (cap refill <2 sec normal)\n- Bleeding control: Direct pressure, tourniquets\n- IV access: Two large-bore cannulae\n- Fluid resuscitation: Balanced crystalloid\n\n**Disability (D) Assessment**\n- GCS score (Eye, Verbal, Motor)\n- Pupil size and reaction\n- Focal neurological deficits\n\n**Exposure (E)**\n- Remove clothing to assess injuries\n- Prevent hypothermia\n\n## Regional Injury Management\n\n**Head Injury**\n- CT head (if GCS <15, mechanism worrisome, alcohol intoxication)\n- Neurosurgical consultation\n- ICP monitoring if severe\n- Avoid hypoxia/hypercapnia\n\n**Chest Injury**\n- Chest X-ray (portable initially)\n- Needle decompression for tension pneumothorax\n- Chest tube for hemothorax/pneumothorax\n- Cardiac imaging if cardiac contusion suspected\n\n**Abdominal Injury**\n- FAST exam (Focused Assessment with Sonography in Trauma)\n- Detects free fluid in pelvis, pericardium, abdomen\n- CT abdomen (if stable)\n- Surgical exploration if peritoneal signs\n\n**Limb Injury**\n- Neurovascular exam (pulse, sensory, motor)\n- Fracture reduction\n- Splinting/immobilization\n- Vascular repair if needed",
        mnemonics: [
          { text: "FAST", explanation: "Focused Assessment with Sonography in Trauma" },
          { text: "GCS", explanation: "Glasgow Coma Scale: Eye (4), Verbal (5), Motor (6)" }
        ],
        keyPoints: [
          "Primary survey (ABCDE) guides management sequence",
          "FAST exam rapid assessment for intra-abdominal bleeding",
          "Tension pneumothorax needs immediate needle decompression",
          "GCS guides neurological injury severity",
          "Neurovascular exam critical for limb injuries"
        ],
        textbookRefs: [
          { book: "Trauma Manual", chapter: "Management", edition: "Latest" },
          { book: "BDC Forensic Medicine", chapter: "Clinical Assessment", edition: "24th" }
        ]
      },
      {
        layer: 4,
        slug: "regional-injuries-trauma-exam",
        title: "Regional Injuries & Trauma - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and NEXT-pattern MCQ concepts",
        contentMd: "# Regional Injuries & Trauma - Exam Prep\n\n## ABCDE of Trauma\n\n| Stage | Focus | Actions |\n|-------|-------|----------|\n| A | Airway + C-spine | Suction, intubation, cricothyrotomy |\n| B | Breathing | O2, ventilation, decompress tension PTX |\n| C | Circulation | IV access, fluid, hemorrhage control |\n| D | Disability | GCS, pupils, neuro exam |\n| E | Exposure | Assess all injuries, prevent hypothermia |\n\n## Glasgow Coma Scale (GCS)\n- **Mild**: GCS 13-15\n- **Moderate**: GCS 9-12\n- **Severe**: GCS ≤ 8 (intubate)\n- **Total**: 3-15 (lower = worse)\n\n## NEXT-Pattern MCQs\n\n**Problem-Solving**: Patient with decreased breath sounds, tachycardia, hypotension. Diagnosis?\n- Answer: Tension pneumothorax → immediate needle decompression\n\n**Analysis**: Why is flail chest dangerous?\n- Answer: Underlying pulmonary contusion causes respiratory embarrassment\n\n**Recall**: FAST stands for?\n- Answer: Focused Assessment with Sonography in Trauma\n\n## Key Management Points\n- Tension PTX: Needle decompression 2nd ICS midclavicular\n- Flail chest: Analgesia, respiratory support, not strapping\n- Abdominal injury: FAST or CT assessment\n- Head injury: CT if GCS <15 or mechanism\n\n## Hemorrhage Control\n- Direct pressure\n- Tourniquet above wound if limb\n- Packing for junctional hemorrhage\n- Avoid clamping (risk of vessel damage)",
        mnemonics: [
          { text: "PTX", explanation: "Pneumothorax: Tension needs needle decompression" }
        ],
        keyPoints: [
          "ABCDE systematic approach to all trauma",
          "GCS ≤8 indication for intubation",
          "Tension PTX is cardiorespiratory emergency",
          "FAST exam rapid and noninvasive",
          "Hemorrhage control priority after ABCs"
        ],
        textbookRefs: [
          { book: "NEXT-PG FM Series", chapter: "Trauma", edition: "Latest" },
          { book: "Trauma Manual MCQ", chapter: "Management", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "regional-injuries-trauma-recall",
        title: "Regional Injuries & Trauma - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Regional Injuries & Trauma - Active Recall\n\n## Flashcards\n\n**Q: What does ABCDE stand for in trauma?**\nA: Airway, Breathing, Circulation, Disability, Exposure\n\n**Q: GCS score of 8 requires?**\nA: Intubation (severe brain injury)\n\n**Q: Tension pneumothorax treatment?**\nA: Needle decompression (2nd ICS, midclavicular line)\n\n**Q: Most common type of shock in trauma?**\nA: Hypovolemic (from hemorrhage)\n\n**Q: What is FAST exam?**\nA: Focused Assessment with Sonography in Trauma\n\n**Q: Primary brain injury can be prevented?**\nA: No, but secondary injury can be prevented with early management\n\n**Q: Epidural hematoma: which artery?**\nA: Middle meningeal artery\n\n**Q: Subdural hematoma: what type of bleeding?**\nA: Venous (from bridging veins)\n\n**Q: Management of flail chest?**\nA: Analgesia, respiratory support, treat contusion (not strapping)\n\n**Q: Hollow organ perforation: main danger?**\nA: Peritonitis and sepsis (requires surgery)",
        mnemonics: [
          { text: "ABCDE", explanation: "Trauma primary survey systematic approach" }
        ],
        keyPoints: [
          "10 rapid-fire trauma questions",
          "ABCDE emphasis",
          "GCS scoring",
          "Tension PTX emergency management"
        ],
        textbookRefs: [
          { book: "Trauma Manual MCQ", chapter: "Assessment", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "IM-MOD-02-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "pneumonia-foundation",
        title: "Pneumonia - Foundation",
        estimatedMinutes: 20,
        summary: "Definition, classification, and epidemiology of pneumonia",
        contentMd: "# Pneumonia - Foundation\n\n## Definition\nInflammation of lung parenchyma (alveolar consolidation) with presence of inflammatory cells\n\n## Classification by Acquisition\n- **CAP**: Community-acquired pneumonia (not hospitalized in past 14 days)\n- **HAP**: Hospital-acquired pneumonia (>48 hours after admission)\n- **VAP**: Ventilator-associated pneumonia (on mechanical ventilation)\n- **HCAP**: Healthcare-associated pneumonia\n\n## Classification by Pathogen\n\n**Bacterial (80%)**\n- Streptococcus pneumoniae (most common)\n- Haemophilus influenzae\n- Klebsiella pneumoniae\n- Staphylococcus aureus (including MRSA)\n- Pseudomonas aeruginosa\n- Moraxella catarrhalis\n\n**Viral (20%)**\n- Influenza, RSV, Parainfluenza, Coronaviruses\n- Often precedes bacterial superinfection\n\n**Atypical**\n- Legionella, Mycoplasma, Chlamydia\n- Less common but important\n\n## Clinical Features\n- Cough (productive or dry)\n- Fever (may be absent in elderly)\n- Dyspnea, chest pain\n- Malaise, headache\n- Hypoxia\n\n## Risk Factors\n- Age (>65 years), smoking\n- Chronic lung disease (COPD, asthma)\n- Cardiovascular disease\n- Immunosuppression\n- Aspiration risk",
        mnemonics: [
          { text: "CAP-HAP-VAP", explanation: "Community, Hospital-acquired, Ventilator-associated Pneumonia" },
          { text: "SHIPS", explanation: "Streptococcus, Haemophilus, Influenza virus, Pseudomonas, S. aureus" }
        ],
        keyPoints: [
          "CAP most common; S. pneumoniae most frequent organism",
          "Classification by acquisition site guides antibiotic choice",
          "Viral pneumonia precedes bacterial superinfection",
          "Age and comorbidities are key risk factors",
          "Classic presentation: fever, cough, dyspnea"
        ],
        textbookRefs: [
          { book: "Harrison's Principles", chapter: "Pneumonia", edition: "21st" },
          { book: "BDC Medicine", chapter: "Respiratory Infections", edition: "24th" }
        ]
      },
      {
        layer: 2,
        slug: "pneumonia-mechanism",
        title: "Pneumonia - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology, inflammation, and organ dysfunction in pneumonia",
        contentMd: "# Pneumonia - Mechanism\n\n## Pathophysiology\n\n### Pathogen Entry Routes\n1. **Aspiration**: From oropharyngeal secretions (most common)\n2. **Inhalation**: Of infected droplets or aerosols\n3. **Hematogenous**: Septic emboli from bloodstream\n4. **Direct spread**: From adjacent infection\n\n### Host Defense Failure\n- **Mechanical**: Impaired mucociliary clearance, cough reflex\n- **Immune**: Neutrophil dysfunction, opsonin deficiency\n- **Anatomical**: Aspiration risk from swallowing dysfunction\n\n## Inflammatory Response\n\n**Stage 1: Consolidation (24-48 hours)**\n- Alveolar edema (red hepatization)\n- Fibrin deposition\n- PMN infiltration\n- Bacteria multiplication\n\n**Stage 2: Early Resolution (3-7 days)**\n- Macrophage infiltration\n- Fibrin lysis\n- Bacteria killing\n\n**Stage 3: Resolution**\n- Resorption of inflammatory exudate\n- Macrophage clearance\n- Tissue repair\n\n## Organ Dysfunction - SIRS/SEPSIS\n\n**Systemic Inflammatory Response**\n- Fever, tachycardia, tachypnea\n- Leukocytosis/leukopenia\n- Elevated CRP/procalcitonin\n\n**Sepsis Cascades**\n- Inflammatory cytokine release (TNF-α, IL-6)\n- Endothelial activation\n- Increased vascular permeability\n- Capillary leak → hypotension\n- Multi-organ dysfunction\n\n## Microbiology-Pathogenesis Link\n\n**S. pneumoniae**\n- Capsule prevents phagocytosis\n- Pneumolysin toxin damages lung\n- Most common CAP\n\n**H. influenzae**\n- Pili for adherence\n- IgA protease production\n- Capsule protects from immunity\n\n**Atypical organisms**\n- Intracellular (Mycoplasma, Legionella)\n- Direct lung inflammation\n- Extrapulmonary manifestations\n\n**MRSA**\n- Produces Panton-Valentine leukocidin\n- Severe necrotizing infection\n- Post-influenza superinfection",
        mnemonics: [
          { text: "SIRS criteria", explanation: "Systemic inflammatory response hallmark of pneumonia" }
        ],
        keyPoints: [
          "Aspiration most common pathogen entry route",
          "Inflammation evolves through stages (consolidation→resolution)",
          "SIRS/sepsis cascade in severe pneumonia",
          "Organism virulence factors determine severity",
          "Immune dysfunction predisposes to severe disease"
        ],
        textbookRefs: [
          { book: "Robbins & Cotran Pathology", chapter: "Lung Infection", edition: "10th" },
          { book: "Harrison's Principles", chapter: "Pathophysiology of Pneumonia", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "pneumonia-clinical",
        title: "Pneumonia - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis, severity assessment, and management in Indian context",
        contentMd: "# Pneumonia - Clinical\n\n## Diagnostic Approach\n\n**Clinical Examination**\n- Vital signs (fever, HR, RR, SpO2, BP)\n- Chest auscultation: Crackles (late-inspiratory), bronchial breath sounds\n- Percussion: Dullness over consolidation\n- Egophony, bronchophony\n\n**Investigations**\n- **CXR**: Gold standard; infiltrates (lobar/interstitial)\n- **CBC**: Leukocytosis (left shift), though may be normal in viral\n- **Blood culture**: For bacteremia (positive in 10-20%)\n- **Sputum culture**: Before antibiotics; guides therapy\n- **Rapid viral tests**: For influenza, RSV (guide antivirals)\n\n## Severity Assessment\n\n**CURB-65 Score** (for CAP)\n- **C**onfusion (new onset)\n- **U**rea >7 mmol/L\n- **R**espiratory rate ≥30/min\n- **B**lood pressure (SBP <90 or DBP <60)\n- **Age ≥65** years\n- Score 0-1: Outpatient; 2: Consider admission; 3-5: Admit/ICU\n\n**PSI (PNEUMONIA SEVERITY INDEX)**\n- More complex but more accurate\n- Considers age, comorbidities, vital signs, labs\n- Risk stratification for mortality\n\n## Management - CAP in India\n\n**Empiric Antibiotic Therapy** (guided by severity, risk)\n\n**Mild-Moderate (Outpatient)**\n- Amoxicillin-clavulanate OR\n- Fluoroquinolone (Levofloxacin, Moxifloxacin)\n\n**Moderate-Severe (Admission)**\n- β-lactam + macrolide: Ceftriaxone + Azithromycin OR\n- Fluoroquinolone (high-dose)\n- Consider atypical coverage (especially with CURB ≥2)\n\n**Severe (ICU)**\n- Ceftriaxone/Cefotaxime + Azithromycin\n- Add Vancomycin if MRSA risk\n- Add Antipseudomonal agent if Pseudomonas risk\n\n**Duration**: Typically 5-7 days (shorter with fluoroquinolone)\n\n## Supportive Care\n- Oxygen to target SpO2 >90%\n- Fluid management\n- Cough suppressants (minimal)\n- Analgesics for chest pain\n- Monitor for complications\n\n## Monitoring & Follow-up\n- Clinical response in 48-72 hours\n- Repeat CXR at 6 weeks (confirm resolution, rule out mass)\n- Address underlying risk factors",
        mnemonics: [
          { text: "CURB-65", explanation: "Severity assessment score for CAP" }
        ],
        keyPoints: [
          "CXR gold standard for diagnosis",
          "CURB-65 guides admission and severity",
          "Empiric therapy covers typical organisms",
          "Atypical coverage if CURB ≥2",
          "Clinical response expected in 48-72 hours"
        ],
        textbookRefs: [
          { book: "BDC Medicine", chapter: "Pneumonia Management", edition: "24th" },
          { book: "IDSA Guidelines", chapter: "CAP", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "pneumonia-exam",
        title: "Pneumonia - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield NEXT-pattern MCQ concepts and comparison tables",
        contentMd: "# Pneumonia - Exam Prep\n\n## CURB-65 Risk Stratification\n\n| Score | Risk | Management |\n|-------|------|------------|\n| 0-1 | Low | Outpatient |\n| 2 | Intermediate | Consider admission |\n| 3-5 | High | Admit/ICU |\n\n## Common CAP Organisms & Treatment\n\n| Organism | % of CAP | Empiric Coverage |\n|----------|----------|------------------|\n| S. pneumoniae | 40-50 | Beta-lactam |\n| H. influenzae | 5-10 | Amoxicillin-clav |\n| Atypical | 10-15 | Macrolide/FQ |\n| Viral | 20-30 | Supportive |\n\n## NEXT-Pattern MCQs\n\n**Problem-Solving**: 70-year-old CAP, BP 85/50, Urea 10, RR 32, confused. CURB-65 score?\n- Answer: 5 (age, urea, RR, BP, confusion) = ICU admission\n\n**Analysis**: Why is atypical coverage needed in CURB ≥2?\n- Answer: Atypical organisms (Mycoplasma, Legionella) associated with severe CAP\n\n**Recall**: Most common organism in CAP?\n- Answer: Streptococcus pneumoniae (40-50%)\n\n## Key Antibiotic Choices\n- **Mild-moderate**: Oral amoxicillin-clavulanate, FQ\n- **Moderate-severe**: Ceftriaxone + Azithromycin\n- **Severe/ICU**: Ceftriaxone + Azithromycin ± Vancomycin ± Pseudomonal cover\n\n## High-Yield Facts\n- Blood cultures positive in only 10-20% (low yield but helpful)\n- Sputum culture often contaminated; timing and quality important\n- Rapid viral testing guides stoppage of antibiotics in viral cases\n- CXR infiltrate may lag symptom resolution by 7-14 days",
        mnemonics: [
          { text: "S-H-A-P", explanation: "Streptococcus, Haemophilus, Atypical, Pseudomonas (CAP organisms)" }
        ],
        keyPoints: [
          "CURB-65 predicts mortality and guides admission",
          "S. pneumoniae most common CAP cause",
          "Empiric therapy empiric with atypical coverage if severe",
          "Duration 5-7 days with good response",
          "Repeat CXR at 6 weeks for resolution"
        ],
        textbookRefs: [
          { book: "NEXT-PG IM Series", chapter: "Pneumonia", edition: "Latest" },
          { book: "IDSA CAP Guidelines", chapter: "Management", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "pneumonia-recall",
        title: "Pneumonia - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Pneumonia - Active Recall\n\n## Flashcards\n\n**Q: Most common cause of CAP?**\nA: Streptococcus pneumoniae (40-50%)\n\n**Q: What does CURB-65 stand for?**\nA: Confusion, Urea >7, RR ≥30, BP low, Age ≥65\n\n**Q: CURB-65 score 3-5 management?**\nA: Admit to hospital/ICU\n\n**Q: First-line antibiotic for mild CAP?**\nA: Amoxicillin-clavulanate or Fluoroquinolone (oral)\n\n**Q: First-line for moderate-severe CAP?**\nA: Ceftriaxone + Azithromycin\n\n**Q: When to add atypical coverage?**\nA: CURB-65 score ≥2\n\n**Q: Gold standard investigation for pneumonia?**\nA: Chest X-ray\n\n**Q: Typical antibiotic duration for CAP?**\nA: 5-7 days\n\n**Q: Expected clinical response to antibiotics?**\nA: Within 48-72 hours\n\n**Q: When to repeat CXR after pneumonia?**\nA: At 6 weeks (to confirm resolution, exclude underlying mass)",
        mnemonics: [
          { text: "SpS-H-A", explanation: "S. pneumoniae (Sp), Haemophilus, Atypical common CAP organisms" }
        ],
        keyPoints: [
          "10 rapid-fire pneumonia questions",
          "CURB-65 scoring emphasis",
          "Empiric therapy selection",
          "Duration and follow-up"
        ],
        textbookRefs: [
          { book: "NEXT-PG IM MCQ", chapter: "Pneumonia", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "IM-MOD-10-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "poisoning-overdose-foundation",
        title: "Poisoning & Overdose - Foundation",
        estimatedMinutes: 20,
        summary: "Classification of poisons and overview of common toxidromes",
        contentMd: "# Poisoning & Overdose - Foundation\n\n## Poison Definition\nSubstance in doses capable of causing injury, illness, death\n\n## Classification\n\n**By Source**\n- **Exogenous**: Drugs, chemicals, plants, metals\n- **Endogenous**: Bacterial toxins, auto-toxemia\n\n**By Exposure Route**\n- Ingestion (most common)\n- Inhalation\n- Dermal absorption\n- Injection\n- Transmucosal\n\n## Common Poisons in India\n- **Drugs**: Sedatives, NSAIDs, antibiotics, anticonvulsants\n- **Organophosphates**: Pesticide poisoning (common in rural areas)\n- **Plant toxins**: Oleander, cyanogenic plants, fungi\n- **Corrosives**: Acids, alkalis\n- **Heavy metals**: Arsenic, mercury, lead\n- **Carbon monoxide**: Accidental/deliberate\n\n## Toxidromes (Symptom Clusters)\n- **Cholinergic**: Miosis, salivation, muscle fasciculations\n- **Anticholinergic**: Mydriasis, dry mouth, urinary retention\n- **Opioid**: Miosis, respiratory depression, coma\n- **Stimulant**: Tachycardia, hypertension, agitation\n- **Sedative**: CNS depression, respiratory depression\n\n## Acute Poisoning Presentation\n- Altered mental status (common)\n- Respiratory depression\n- Cardiovascular instability\n- GI symptoms (nausea, vomiting)\n- Metabolic derangements",
        mnemonics: [
          { text: "OILRIG", explanation: "Organophosphate, Insecticide: Lacrimation, Salivation, Rhinorrhea, Increased bronchial secretions, GI symptoms, miosis" }
        ],
        keyPoints: [
          "Ingestion most common route of poisoning",
          "Toxidromes help identify poison class",
          "Cholinergic crisis from organophosphates common in India",
          "Initial assessment focuses on ABCs",
          "Decontamination important early step"
        ],
        textbookRefs: [
          { book: "BDC Forensic Medicine", chapter: "Poisoning", edition: "24th" },
          { book: "Harrison's Principles", chapter: "Toxicology", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "poisoning-overdose-mechanism",
        title: "Poisoning & Overdose - Mechanism",
        estimatedMinutes: 30,
        summary: "Toxicodynamics, metabolic effects, and organ-system damage",
        contentMd: "# Poisoning & Overdose - Mechanism\n\n## Pharmacokinetics in Poisoning\n\n**Absorption Phase**\n- Route-dependent (GI slowest unless liquid)\n- First-pass metabolism bypassed in IV, inhalation\n- Peak levels reached earlier in overdose\n\n**Distribution**\n- Volume of distribution critical\n- Lipophilic drugs accumulate in fat\n- Protein binding affects free drug concentration\n- BBB penetration determines CNS effects\n\n**Metabolism/Elimination**\n- Hepatic metabolism (Phase I, II, III)\n- Renal elimination important\n- Saturation kinetics in overdose (zero-order not first-order)\n- Accumulation if metabolism overwhelmed\n\n## Cholinergic Crisis (Organophosphates)\n\n**Mechanism**\n- Irreversible inhibition of acetylcholinesterase\n- Accumulation of acetylcholine\n- Continuous muscarinic and nicotinic stimulation\n\n**Effects**\n- **Muscarinic**: DUMBELS (Defecation, Urination, Miosis, Bradycardia, Emesis, Lacrimation, Salivation)\n- **Nicotinic**: Muscle fasciculations, paralysis, respiratory failure\n\n## Organ System Dysfunction\n\n**CNS Depression**\n- Decreased GABA transmission\n- Respiratory drive depression\n- Aspiration risk\n- Hypoventilation → hypercapnia, hypoxia\n\n**Cardiac Effects**\n- Arrhythmias (QT prolongation with some drugs)\n- Myocardial depression\n- Hypotension\n- Cardiogenic shock\n\n**Hepatotoxicity**\n- Paracetamol: Glutathione depletion → hepatic necrosis\n- Organophosphates: Hepatic enzyme induction\n- Metals: Cirrhosis risk\n\n**Renal Dysfunction**\n- Direct nephrotoxic effect\n- Myoglobinuria (rhabdomyolysis)\n- Acute tubular necrosis\n\n**Metabolic Derangements**\n- Acidosis (from lactic acid, ketones)\n- Hypoglycemia\n- Electrolyte imbalance\n- Hyperthermia/hypothermia",
        mnemonics: [
          { text: "DUMBELS", explanation: "Muscarinic effects of cholinergic crisis" },
          { text: "Zero-order kinetics", explanation: "In overdose, metabolism saturates → constant elimination rate" }
        ],
        keyPoints: [
          "Organophosphates cause cholinergic crisis via AChE inhibition",
          "Metabolism may be saturated in overdose (zero-order kinetics)",
          "Multi-organ dysfunction common in severe poisoning",
          "CNS and respiratory depression life-threatening",
          "Acidosis and electrolyte abnormalities common"
        ],
        textbookRefs: [
          { book: "Robbins & Cotran Pathology", chapter: "Chemical Injury", edition: "10th" },
          { book: "Casarett & Doull Toxicology", chapter: "General Principles", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "poisoning-overdose-clinical",
        title: "Poisoning & Overdose - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical management and Indian context of common poisons",
        contentMd: "# Poisoning & Overdose - Clinical\n\n## Initial Management (Poison Center Approach)\n\n**Decontamination**\n- Activated charcoal (if ingestion, <4 hours): 1 g/kg PO\n- Gastric lavage (if within 1-2 hours, copious vomiting risk)\n- Skin decontamination: Soap and water\n- Eye: Irrigation with saline\n\n**Supportive Care - ABCs**\n- Airway: Intubate if GCS ≤8, aspiration risk\n- Breathing: Supplemental O2, ventilation if needed\n- Circulation: IV access, fluids, vasopressors\n- Glucose check, temperature management\n\n## Specific Antidotes\n\n**Organophosphate Poisoning**\n- **Atropine**: 0.5-1 mg IV, repeat every 5-10 min (titrate to control bronchospasm)\n- **Pralidoxime (2-PAM)**: 1-2 g IV slowly, repeats after 30 min\n- Both agents needed for full recovery\n\n**Paracetamol Overdose**\n- **N-acetylcysteine (NAC)**: Repletes glutathione\n- Dosing: 150 mg/kg loading, then 50 mg/kg at 4 hours, 100 mg/kg at 16 hours\n- Start if level high or if high-risk features\n\n**Opioid Overdose**\n- **Naloxone**: 0.4-2 mg IV/IM, repeat every 2-3 min PRN\n- Reverses respiratory depression\n- Watch for withdrawal symptoms\n\n**Iron Poisoning**\n- **Deferoxamine**: Chelates iron\n- Use if serum iron >350 μg/dL\n\n## Enhanced Elimination\n- **Dialysis**: For water-soluble agents (organophosphates, salicylates, methanol, ethylene glycol)\n- **Hemoperfusion**: Limited use now\n- **Urinary alkalinization**: For salicylates, phenobarbital\n- **Exchange transfusion**: Rarely for heavy metal poisoning\n\n## Monitoring & Complications\n- Serial toxin levels (if available)\n- Organ function tests (liver, kidney)\n- Watch for pulmonary edema, aspiration\n- Prevent muscle breakdown with aggressive IV hydration\n- Secondary infection prevention",
        mnemonics: [
          { text: "AAP", explanation: "Atropine, Antidote, Pralidoxime (organophosphate treatment)" }
        ],
        keyPoints: [
          "Activated charcoal <4 hours after ingestion",
          "ABCs prioritized in all poisoning cases",
          "Specific antidotes available for many poisons",
          "Atropine + pralidoxime for organophosphate poisoning",
          "NAC reduces mortality in paracetamol overdose"
        ],
        textbookRefs: [
          { book: "BDC Forensic Medicine", chapter: "Poison Management", edition: "24th" },
          { book: "National Poisons Centre Guidelines", chapter: "Treatment", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "poisoning-overdose-exam",
        title: "Poisoning & Overdose - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and toxidrome identification",
        contentMd: "# Poisoning & Overdose - Exam Prep\n\n## Toxidrome Quick Identification\n\n| Toxidrome | Pupils | HR | BP | RR | Key Features |\n|-----------|--------|----|----|----|--------------|\n| Cholinergic | Miotic | ↓ | ↓ | ↑ | DUMBELS, fasciculations |\n| Anticholinergic | Mydriatic | ↑ | ↑ | ↑ | Dry, hot, mad |\n| Opioid | Miotic | ↓ | ↓ | ↓ | CNS depression, pinpoint |\n| Stimulant | Mydriatic | ↑ | ↑ | ↑ | Agitation, seizures |\n| Sedative | Normal | ↓ | ↓ | ↓ | CNS depression |\n\n## NEXT-Pattern MCQs\n\n**Problem-Solving**: Patient with miosis, salivation, fasciculations, respiratory distress. Diagnosis?\n- Answer: Organophosphate poisoning (cholinergic crisis)\n\n**Analysis**: Why is pralidoxime more effective if given early?\n- Answer: Before AChE-inhibitor bond becomes irreversible (aging)\n\n**Recall**: First antidote given in organophosphate poisoning?\n- Answer: Atropine (addresses life-threatening symptoms immediately)\n\n## Activation Charcoal\n- Dose: 1 g/kg (typically 25-50g)\n- Timing: <4 hours (optimal); up to 12 hours in some cases\n- Contraindicated: Ingestion of corrosives, hydrocarbons, metals\n- Multiple doses for some drugs (phenobarbital, theophylline)\n\n## High-Risk Poisons in India\n1. Organophosphates (pesticide)\n2. Paracetamol\n3. Corrosives (acids, alkalis)\n4. Medicinal drugs (sedatives, anticonvulsants)\n5. Plant toxins (oleander)",
        mnemonics: [
          { text: "Miosis = DOPE", explanation: "Miotic pupils: Organophosphate, Opioid, Poisoning, Eserine" }
        ],
        keyPoints: [
          "Identify toxidrome from vital signs and signs",
          "Miotic = cholinergic or opioid",
          "Mydriatic = anticholinergic or stimulant",
          "Activated charcoal within 4 hours",
          "Specific antidotes available for key poisons"
        ],
        textbookRefs: [
          { book: "NEXT-PG FM Series", chapter: "Toxicology", edition: "Latest" },
          { book: "Poison MCQ Book", chapter: "Toxidromes", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "poisoning-overdose-recall",
        title: "Poisoning & Overdose - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Poisoning & Overdose - Active Recall\n\n## Flashcards\n\n**Q: Most common route of poisoning?**\nA: Ingestion\n\n**Q: DUMBELS stands for?**\nA: Defecation, Urination, Miosis, Bradycardia, Emesis, Lacrimation, Salivation\n\n**Q: What causes DUMBELS?**\nA: Organophosphate poisoning (cholinergic crisis)\n\n**Q: First antidote in organophosphate poisoning?**\nA: Atropine\n\n**Q: Second antidote in organophosphate poisoning?**\nA: Pralidoxime (2-PAM)\n\n**Q: Dose of activated charcoal?**\nA: 1 g/kg (typically 25-50 g)\n\n**Q: Time window for activated charcoal?**\nA: <4 hours optimal; up to 12 hours in some cases\n\n**Q: Antidote for paracetamol overdose?**\nA: N-acetylcysteine (NAC)\n\n**Q: Antidote for opioid overdose?**\nA: Naloxone\n\n**Q: Miotic pupils indicate?**\nA: Organophosphate or Opioid poisoning",
        mnemonics: [
          { text: "AAA", explanation: "Antidote, Atropine, Activated charcoal" }
        ],
        keyPoints: [
          "10 rapid-fire toxicology questions",
          "Toxidrome identification emphasis",
          "Specific antidotes for common poisons",
          "Decontamination principles"
        ],
        textbookRefs: [
          { book: "Poison MCQ Series", chapter: "Common Agents", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "MI-MOD-05-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "arboviruses-rabies-foundation",
        title: "Arboviruses & Rabies - Foundation",
        estimatedMinutes: 20,
        summary: "Definition and classification of arboviral infections and rabies",
        contentMd: "# Arboviruses & Rabies - Foundation\n\n## Arboviruses Definition\nArthropod-borne viruses transmitted by arthropod vectors (mainly mosquitoes, ticks)\n\n## Common Arboviruses in India\n- **Dengue**: Flavivirus, transmitted by Aedes mosquito (urban)\n- **Chikungunya**: Alphavirus, Aedes mosquito\n- **Japanese Encephalitis (JE)**: Flavivirus, Culex mosquito (rural)\n- **West Nile Virus**: Flavivirus, Culex mosquito\n- **Zika**: Flavivirus, Aedes mosquito (emerging)\n\n## Clinical Features - Dengue\n- Fever, headache, myalgia, arthralgia\n- Rash (maculopapular)\n- Severe forms: Dengue hemorrhagic fever (DHF), dengue shock syndrome (DSS)\n- Bleeding manifestations in severe cases\n\n## Clinical Features - Japanese Encephalitis\n- High fever, altered mental status\n- Seizures, focal neurological deficits\n- Case fatality rate: 30% (high mortality)\n- Survivors: Neurological sequelae common\n\n## Rabies Definition\nFatal viral encephalitis transmitted by infected animal saliva (mainly dogs)\n\n## Rabies in India\n- Most rabies deaths globally occur in India\n- Mainly from dog bites (99% transmission from dogs)\n- Post-exposure prophylaxis (PEP) is effective\n- Once clinical symptoms appear, nearly 100% fatal\n\n## Incubation & Progression\n- Incubation: 1-3 months (range 1 week to 1 year)\n- Prodromal phase: Fever, pain at bite site\n- Furious or Paralytic forms\n- Death within 7-10 days of symptom onset (rare survival)",
        mnemonics: [
          { text: "DJCWZ", explanation: "Dengue, JE, Chikungunya, West Nile, Zika - arboviruses in India" }
        ],
        keyPoints: [
          "Arboviruses transmitted by mosquitoes/ticks",
          "Dengue most common arboviral infection in India",
          "Japanese Encephalitis high mortality if symptomatic",
          "Rabies: 99% from dogs; nearly 100% fatal if symptomatic",
          "PEP effective for rabies if given promptly"
        ],
        textbookRefs: [
          { book: "BDC Medicine", chapter: "Viral Infections", edition: "24th" },
          { book: "Harrison's Principles", chapter: "Arboviruses & Rabies", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "arboviruses-rabies-mechanism",
        title: "Arboviruses & Rabies - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology, transmission, and viral pathogenesis",
        contentMd: "# Arboviruses & Rabies - Mechanism\n\n## Dengue Pathophysiology\n\n**Viral Replication**\n- Replication in mosquito midgut\n- Viremia in infected human (2-14 days)\n- High viral load during febrile phase\n\n**Immune Response**\n- Antibody production (IgM then IgG)\n- Immune complex deposition\n- Complement activation\n- Secondary dengue: More severe (antibody-dependent enhancement)\n\n**DHF/DSS Mechanism**\n- Plasma leakage (vascular permeability)\n- Thrombocytopenia\n- Hemorrhagic manifestations\n- Shock from intravascular volume depletion\n- Multi-organ dysfunction\n\n## Japanese Encephalitis Pathophysiology\n\n**CNS Invasion**\n- Crosses blood-brain barrier\n- Infects neurons and glial cells\n- Inflammatory response\n\n**Brain Damage**\n- Neuronal necrosis\n- Perivascular inflammation\n- Basal ganglia, brainstem, thalamus preferentially affected\n- Neurological sequelae from permanent damage\n\n## Rabies Pathophysiology\n\n**Transmission & Invasion**\n- Saliva from infected animal (mainly dogs) inoculated\n- Virus enters via bite wound/mucosal surface\n- Replicates at injection site\n- Ascends nerves (retrograde axonal transport)\n- Reaches spinal cord then brain\n\n**CNS Infection**\n- Replicates in neurons (especially hippocampus, cortex, medulla)\n- Produces Negri bodies (pathognomonic but rare)\n- Massive inflammatory response\n- Neuronal death\n- Fatal encephalitis\n\n**Pathogenesis**\n- Hydrophobia: From medullary involvement\n- Paralysis: Spinal cord involvement\n- Autonomic dysfunction: Brainstem involvement\n- Death: From respiratory failure (medullary)\n\n## Immune Response - Rabies\n- Antibody response develops but too slow\n- Once CNS infection established, immune response inadequate\n- Vaccination stimulates pre-exposure immunity\n- Post-exposure prophylaxis (PEP) works before CNS infection",
        mnemonics: [
          { text: "Plasma leak = DHF-DSS", explanation: "Increased vascular permeability in severe dengue" },
          { text: "Retrograde transport", explanation: "Rabies virus travels back along peripheral nerves to brain" }
        ],
        keyPoints: [
          "Secondary dengue more severe (antibody-dependent enhancement)",
          "Japanese Encephalitis causes permanent neurological damage",
          "Rabies spreads retrogradely via nerves",
          "Negri bodies pathognomonic but rarely found",
          "Rabies CNS invasion is point of no return"
        ],
        textbookRefs: [
          { book: "Robbins & Cotran Pathology", chapter: "Viral Infections", edition: "10th" },
          { book: "Harrison's Principles", chapter: "Pathophysiology", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "arboviruses-rabies-clinical",
        title: "Arboviruses & Rabies - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis, management, and prevention in Indian context",
        contentMd: "# Arboviruses & Rabies - Clinical\n\n## Dengue Management\n\n**Diagnosis**\n- **NS1 antigen**: Positive first 4 days (acute phase)\n- **IgM antibody**: After 4-5 days (becomes positive, stays positive)\n- **Viral culture**: Reference test\n- CBC: Thrombocytopenia, hemoconcentration\n\n**Severe Dengue Warning Signs**\n- Abdominal pain/tenderness\n- Persistent vomiting\n- Bleeding (petechiae, purpura, mucosal)\n- Lethargy or restlessness\n- Liver enlargement >2cm\n- Rapid fall in platelet with rise in hematocrit\n\n**Management**\n- Supportive care: Fluids, antipyretics (avoid NSAIDs)\n- Platelet transfusion if <20,000 or bleeding\n- Fresh frozen plasma for coagulopathy\n- ICU if DSS develops\n- No specific antiviral available\n\n## Japanese Encephalitis Management\n\n**Diagnosis**\n- CSF IgM antibodies (gold standard)\n- MRI: T2 hyperintensity in basal ganglia, thalamus\n- Viral isolation/PCR: Reference test\n\n**Management**\n- Supportive care (airway, ventilation if needed)\n- Seizure control\n- Manage raised intracranial pressure\n- Prevention: JE vaccine (Vero cell, live attenuated)\n\n## Rabies Post-Exposure Prophylaxis (PEP)\n\n**Wound Management**\n- Immediately wash with soap and water × 15 min\n- Povidone-iodine or alcohol-based antiseptic\n- Do NOT suture (allow drainage)\n\n**Category of Exposure**\n- **Category I**: Touching, feeding (no bite) → Observation\n- **Category II**: Single/minor bite → RIG + vaccine\n- **Category III**: Multiple/deep bites, scratches → RIG + vaccine (urgent)\n\n**Vaccine Protocol (Indian)**\n- 5-dose schedule: Days 0, 3, 7, 14, 28 (Intramuscular)\n- OR 4-dose schedule: Days 0, 3, 7, 14 (intradermal, if available)\n- Cell culture vaccines (more expensive) vs nerve tissue vaccines\n\n**Rabies Immunoglobulin (RIG)**\n- Human RIG (HRIG): 20 IU/kg\n- Equine RIG: 40 IU/kg\n- Infiltrate around bite, rest IV\n- Given once (delay if available)\n\n## Prevention\n- Dog bite prevention (avoid stray dogs)\n- Mass dog vaccination programs\n- JE vaccination in endemic areas\n- Dengue: Mosquito control (source reduction)",
        mnemonics: [
          { text: "NS1-IgM timing", explanation: "NS1 first 4 days; IgM after 4-5 days in dengue" },
          { text: "PEP timing", explanation: "Post-exposure prophylaxis effective within days (before CNS invasion)" }
        ],
        keyPoints: [
          "NS1 antigen useful for early dengue diagnosis",
          "Supportive care mainstay for dengue management",
          "JE vaccine available for endemic areas",
          "Rabies PEP urgent within days of exposure",
          "RIG infiltrated around bite wound"
        ],
        textbookRefs: [
          { book: "BDC Medicine", chapter: "Viral Infections Management", edition: "24th" },
          { book: "National Rabies Guidelines", chapter: "PEP", edition: "Latest" }
        ]
      },
      {
        layer: 4,
        slug: "arboviruses-rabies-exam",
        title: "Arboviruses & Rabies - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and NEXT-pattern MCQ concepts",
        contentMd: "# Arboviruses & Rabies - Exam Prep\n\n## Dengue vs Japanese Encephalitis\n\n| Feature | Dengue | JE |\n|---------|--------|----|\n| Vector | Aedes (day) | Culex (night) |\n| Season | Monsoon | Monsoon-winter |\n| Rash | Maculopapular | Absent |\n| CNS | Rare | Common |\n| Mortality | <1% (DHF 2-5%) | 20-30% |\n| Sequelae | Rare | Common |\n\n## Rabies Exposure Categories\n\n| Category | Type | Management |\n|----------|------|------------|\n| I | Touching, feeding | Observation |\n| II | Single minor bite | RIG + Vaccine |\n| III | Multiple/deep bites | RIG + Vaccine (urgent) |\n\n## NEXT-Pattern MCQs\n\n**Problem-Solving**: Patient with fever, rash, thrombocytopenia on day 5. Diagnosis?\n- Answer: Dengue fever (IgM antibodies positive)\n\n**Analysis**: Why is secondary dengue more severe?\n- Answer: Antibody-dependent enhancement (non-neutralizing antibodies facilitate infection)\n\n**Recall**: Most common rabies vector in India?\n- Answer: Dogs (99%)\n\n## High-Yield Rabies Facts\n- Incubation: 1-3 months (can extend to 1 year)\n- CNS invasion = 100% fatal (nearly)\n- PEP effective before CNS infection\n- 5-dose vaccine schedule (Days 0, 3, 7, 14, 28)\n- RIG must infiltrate wound",
        mnemonics: [
          { text: "ADE = Antibody-Dependent Enhancement", explanation: "Worse dengue from prior exposure" }
        ],
        keyPoints: [
          "NS1 and IgM for dengue diagnosis",
          "JE higher mortality and neurological sequelae",
          "Rabies PEP within days of exposure",
          "Category III exposure = urgent PEP",
          "RIG + vaccine combination for significant bites"
        ],
        textbookRefs: [
          { book: "NEXT-PG Microbiology Series", chapter: "Viral Infections", edition: "Latest" },
          { book: "Rabies MCQ Book", chapter: "PEP & Management", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "arboviruses-rabies-recall",
        title: "Arboviruses & Rabies - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Arboviruses & Rabies - Active Recall\n\n## Flashcards\n\n**Q: Most common arboviral infection in India?**\nA: Dengue\n\n**Q: Vector for dengue?**\nA: Aedes mosquito (daytime feeder)\n\n**Q: Vector for Japanese Encephalitis?**\nA: Culex mosquito (nighttime feeder)\n\n**Q: Diagnostic test for dengue first 4 days?**\nA: NS1 antigen\n\n**Q: Dengue diagnostic test after 4-5 days?**\nA: IgM antibodies\n\n**Q: Most common rabies vector globally?**\nA: Dogs\n\n**Q: Rabies incubation period?**\nA: 1-3 months (range 1 week to 1 year)\n\n**Q: Mortality once rabies symptoms appear?**\nA: Nearly 100% (almost always fatal)\n\n**Q: Rabies PEP vaccine schedule?**\nA: 5 doses on days 0, 3, 7, 14, 28 (Intramuscular)\n\n**Q: Dose of RIG for rabies PEP?**\nA: HRIG 20 IU/kg; infiltrate around wound",
        mnemonics: [
          { text: "AJ-C-WZ", explanation: "Arboviruses in India: Dengue, JE, Chikungunya, West Nile, Zika" }
        ],
        keyPoints: [
          "10 rapid-fire questions on arboviruses and rabies",
          "Diagnostic tests for dengue emphasis",
          "Rabies PEP urgency and protocol",
          "Vector identification"
        ],
        textbookRefs: [
          { book: "Microbiology MCQ Series", chapter: "Viral Infections", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "OG-MOD-05-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "endometriosis-adenomyosis-foundation",
        title: "Endometriosis & Adenomyosis - Foundation",
        estimatedMinutes: 20,
        summary: "Definition and classification of endometrial disorders",
        contentMd: "# Endometriosis & Adenomyosis - Foundation\n\n## Endometriosis Definition\nPresence of endometrial tissue (glands and stroma) outside the uterine cavity\n\n## Sites of Endometriosis\n- **Ovaries** (chocolate cysts): Most common\n- **Peritoneum**: Nodules, implants\n- **Fallopian tubes**: Adhesions risk\n- **Bladder, rectum**: Rarely involved\n\n## Classification\n\n**rASRM Classification**\n- Stage I (minimal): <5 cm\n- Stage II (mild): 5-20 cm\n- Stage III (moderate): 20+ cm, infiltration\n- Stage IV (severe): Extensive disease, fixed organs\n\n## Clinical Features\n- Dysmenorrhea (progressive, severe)\n- Dyspareunia (deep, cyclical)\n- Chronic pelvic pain\n- Infertility (25-50% of women)\n- Dyschezia, dysuria\n\n## Adenomyosis Definition\nInvasion of endometrial glands and stroma into myometrium (>2.5 mm depth)\n\n## Key Differences\n\n| Feature | Endometriosis | Adenomyosis |\n|---------|---------------|----------|\n| Location | Outside uterus | Within myometrium |\n| Diagnosis | Laparoscopy/imaging | MRI/ultrasound |\n| Age | Reproductive age | 40+ years typically |\n| Infertility | Common | Uncommon |\n| Dysmenorrhea | Progressive | Severe |\n\n## Risk Factors - Endometriosis\n- Nulliparity\n- Early menarche\n- Short menstrual cycle\n- Heavy/prolonged periods\n- Genetic predisposition",
        mnemonics: [
          { text: "ASRM stages", explanation: "American Society for Reproductive Medicine classification" }
        ],
        keyPoints: [
          "Endometriosis = tissue outside uterus",
          "Adenomyosis = tissue inside myometrium",
          "Ovary is most common site for endometriosis",
          "Stage determined by extent and depth",
          "Progressive dysmenorrhea classic presenting symptom"
        ],
        textbookRefs: [
          { book: "Reproductive Endocrinology & Infertility", chapter: "Endometriosis", edition: "8th" },
          { book: "Williams Obstetrics", chapter: "Endometriosis", edition: "25th" }
        ]
      },
      {
        layer: 2,
        slug: "endometriosis-adenomyosis-mechanism",
        title: "Endometriosis & Adenomyosis - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiological mechanisms and theories of endometrial disease",
        contentMd: "# Endometriosis & Adenomyosis - Mechanism\n\n## Theories of Endometriosis\n\n**Sampson's Theory (Implantation)**\n- Retrograde menstruation\n- Viable endometrial cells in peritoneal fluid\n- Implantation on peritoneal surfaces\n- Supported by finding endometrial cells in peritoneal fluid\n\n**Stem Cell Theory**\n- Bone marrow-derived stem cells\n- Migration to ectopic sites\n- Differentiation into endometrial tissue\n- Explains extensive disease\n\n**Tissue Injury & Repair (TIAR)**\n- Repeated menstruation causing microtrauma\n- Aberrant wound healing\n- Neovascularization\n- Neuroangiogenesis\n\n**Metaplasia Theory**\n- Peritoneal cells metastasize to endometrial cells\n- Less evidence, mainly historical\n\n## Pathophysiology - Adenomyosis\n\n**Junctional Zone Abnormality**\n- Increased thickness of junctional zone\n- Impaired myometrial contractility\n- Disorganized peristalsis\n- Altered blood flow\n\n**Invagination Mechanism**\n- Downward invagination of basalis endometrium\n- Breaking down of endo-myometrial interface\n- Progressive myometrial infiltration\n\n**Aberrant Estrogen Signaling**\n- Increased estrogen production locally\n- Altered estrogen receptor expression (high ERα, low ERβ)\n- Increased aromatase in ectopic/adenomyotic tissue\n- Continued estrogen stimulation\n\n**Inflammation in Endometriosis**\n- Increased peritoneal fluid macrophages\n- Elevated cytokines (TNF-α, IL-8, IL-6)\n- Increased angiogenesis (VEGF)\n- Neuroangiogenesis (sensory nerve fiber proliferation)\n- Pain amplification\n\n**Infertility Mechanisms**\n- Impaired oocyte quality\n- Altered endometrial receptivity\n- Inflammation affecting sperm/embryo\n- Adenomyosis: Abnormal junctional zone, impaired implantation",
        mnemonics: [
          { text: "Sampson + Stem Cells + TIAR", explanation: "Three main theories of endometriosis pathogenesis" }
        ],
        keyPoints: [
          "Sampson's theory: Retrograde menstruation and implantation",
          "Adenomyosis: JZ thickening and basalis invagination",
          "Aberrant estrogen signaling perpetuates disease",
          "Neuroangiogenesis contributes to pain",
          "Inflammation causes infertility effects"
        ],
        textbookRefs: [
          { book: "Robbins & Cotran Pathology", chapter: "Female Reproductive System", edition: "10th" },
          { book: "Reprod Endocrinol & Infert", chapter: "Pathophysiology", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "endometriosis-adenomyosis-clinical",
        title: "Endometriosis & Adenomyosis - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis and management strategies",
        contentMd: "# Endometriosis & Adenomyosis - Clinical\n\n## Diagnostic Approach - Endometriosis\n\n**Clinical Suspicion**\n- Progressive dysmenorrhea\n- Pelvic pain\n- Infertility with negative basic workup\n\n**Imaging**\n- **Transvaginal ultrasound**: Ovarian cysts (chocolate cysts), nodules\n- **MRI**: Better for deep infiltration, adenomyosis assessment\n- Limited sensitivity but high specificity\n\n**Gold Standard**\n- **Laparoscopy**: Visual confirmation, biopsy\n- Direct visualization of lesions\n- Staging possible\n- Therapeutic (ablation, excision) concurrent\n\n**Biomarkers (Research)**\n- CA-125 elevation (not diagnostic, monitoring)\n- Peritoneal fluid markers\n- Molecular signatures (evolving)\n\n## Diagnostic Approach - Adenomyosis\n\n**Imaging**\n- **Transvaginal ultrasound**: JZ thickening (>12 mm), heterogeneous appearance\n- **MRI**: Gold standard; T2 signal abnormalities\n- More accurate than ultrasound\n\n**Diagnosis**\n- Clinical: MRI findings + symptoms\n- Confirmed: Hysterectomy pathology\n\n## Management - Endometriosis\n\n**First-Line: NSAIDs**\n- Ibuprofen, Naproxen\n- For pain management\n- Limited efficacy if advanced disease\n\n**Hormonal Therapy**\n- **OCPs**: Continuous dosing preferred\n- **Progestins**: Medroxyprogesterone acetate (MPA), levonorgestrel IUD\n- **GnRH agonists**: Leuprolide, goserelin (3-6 months)\n  - Side effects: Vasomotor, bone loss\n  - Add-back therapy (norethindrone) reduces side effects\n- **Aromatase inhibitors**: Letrozole (off-label)\n\n**Surgical Management**\n- Laparoscopic excision or ablation\n- For ovarian endometrioma: Cystectomy preferred\n- Restores fertility in infertile women\n- Hysterectomy: Last resort if conservative fails\n\n## Management - Adenomyosis\n\n**Medical**\n- **NSAIDs**: For pain\n- **Progestins**: Levonorgestrel IUD (Mirena), oral MPA\n- **OCPs**: Continuous dosing\n- **GnRH agonists**: If others fail\n\n**Surgical**\n- **Hysterectomy**: Definitive (not fertility-preserving)\n- Ablation techniques: Emerging, variable results\n- Requires symptoms resistant to medical therapy\n\n## Fertility Management\n- Early diagnosis in infertile women\n- Laparoscopy ± surgery improves conception\n- ART if surgery ineffective\n- Adenomyosis: Reduced ART success; surgery debated",
        mnemonics: [
          { text: "Laparoscopy = Gold standard", explanation: "Definitive diagnosis of endometriosis" }
        ],
        keyPoints: [
          "TVS useful for ovarian endometrioma diagnosis",
          "Laparoscopy gold standard for endometriosis",
          "MRI best for adenomyosis diagnosis",
          "NSAIDs first-line for pain",
          "GnRH agonists effective but side effects limit use"
        ],
        textbookRefs: [
          { book: "Reprod Endocrinol & Infert", chapter: "Management", edition: "8th" },
          { book: "Williams Obstetrics", chapter: "Treatment", edition: "25th" }
        ]
      },
      {
        layer: 4,
        slug: "endometriosis-adenomyosis-exam",
        title: "Endometriosis & Adenomyosis - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and NEXT-pattern MCQ concepts",
        contentMd: "# Endometriosis & Adenomyosis - Exam Prep\n\n## Key Comparison Table\n\n| Aspect | Endometriosis | Adenomyosis |\n|--------|---------------|----------|\n| Tissue location | Outside uterus | Within myometrium |\n| Age of onset | Reproductive | 40+ years |\n| Dysmenorrhea | Progressive | Severe, persistent |\n| Dyspareunia | Deep, cyclical | Varies |\n| Infertility | 25-50% common | Uncommon |\n| Imaging | TVS, MRI | MRI superior |\n| Definitive Dx | Laparoscopy | Hysterectomy pathology |\n| Treatment | Medical/surgical | Medical; hysterectomy definitive |\n\n## NEXT-Pattern MCQs\n\n**Problem-Solving**: Woman with progressive dysmenorrhea, pelvic pain, infertility. Most likely diagnosis?\n- Answer: Endometriosis (classic presentation)\n\n**Analysis**: Why is GnRH agonist limited to 6 months?\n- Answer: Side effects (bone loss, vasomotor symptoms) limit longer use\n\n**Recall**: Gold standard imaging for adenomyosis?\n- Answer: MRI (T2 weighted)\n\n## rASRM Staging Quick Reference\n- **Stage I**: Minimal (<5 cm)\n- **Stage II**: Mild (5-20 cm)\n- **Stage III**: Moderate (>20 cm, infiltration)\n- **Stage IV**: Severe (extensive, fixed organs)\n\n## Sampson Theory Key Point\n- Retrograde menstruation → Viable cells in peritoneal fluid → Implantation and growth",
        mnemonics: [
          { text: "JZ thickening = Adenomyosis", explanation: "Junctional zone >12mm on ultrasound" }
        ],
        keyPoints: [
          "Laparoscopy diagnostic gold standard for endometriosis",
          "MRI diagnostic gold standard for adenomyosis",
          "Progressive dysmenorrhea = endometriosis",
          "GnRH agonists effective but limited to 6 months",
          "Hysterectomy definitive only for adenomyosis"
        ],
        textbookRefs: [
          { book: "NEXT-PG OG Series", chapter: "Endometriosis", edition: "Latest" },
          { book: "OG MCQ Book", chapter: "Gynecological Conditions", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "endometriosis-adenomyosis-recall",
        title: "Endometriosis & Adenomyosis - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Endometriosis & Adenomyosis - Active Recall\n\n## Flashcards\n\n**Q: Most common site for endometriosis?**\nA: Ovaries (chocolate cysts)\n\n**Q: Definition of adenomyosis?**\nA: Invasion of endometrial glands and stroma >2.5mm into myometrium\n\n**Q: Key difference in location?**\nA: Endometriosis outside uterus; Adenomyosis inside myometrium\n\n**Q: Typical age for adenomyosis?**\nA: 40+ years (reproductive years but older)\n\n**Q: Gold standard diagnosis for endometriosis?**\nA: Laparoscopy with visualization and biopsy\n\n**Q: Best imaging for adenomyosis?**\nA: MRI (T2 weighted images)\n\n**Q: Classic presenting symptom?**\nA: Progressive dysmenorrhea (worsens over months/years)\n\n**Q: First-line treatment for pain?**\nA: NSAIDs\n\n**Q: GnRH agonist duration limit?**\nA: 6 months (due to bone loss and vasomotor side effects)\n\n**Q: Definitive treatment for adenomyosis?**\nA: Hysterectomy",
        mnemonics: [
          { text: "Out vs In", explanation: "Endometriosis outside uterus; Adenomyosis inside" }
        ],
        keyPoints: [
          "10 rapid-fire questions",
          "Key diagnostic modalities",
          "Treatment principles",
          "Pathophysiology emphasis"
        ],
        textbookRefs: [
          { book: "OG MCQ Series", chapter: "Endometrial Disorders", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "OP-MOD-04-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "optic-nerve-diseases-foundation",
        title: "Optic Nerve Diseases - Foundation",
        estimatedMinutes: 20,
        summary: "Anatomy and classification of optic nerve pathology",
        contentMd: "# Optic Nerve Diseases - Foundation\n\n## Optic Nerve Anatomy\n- **Length**: ~50 mm (8mm intraocular, 30mm orbital, 12mm intracranial)\n- **Composition**: 1.2 million RGC axons\n- **Blood supply**: Posterior ciliary arteries (optic nerve head), central retinal artery (optic disc)\n- **Optic disc**: Where axons exit the eye (blind spot)\n\n## Structural Layers\n- Nerve fiber layer (RGC axons)\n- Ganglion cell layer\n- Inner nuclear layer\n- Inner plexiform layer\n\n## Classification of Optic Nerve Diseases\n\n**By Mechanism**\n- **Compression**: Tumors, aneurysms, mass lesions\n- **Inflammation**: Optic neuritis, papillitis\n- **Ischemia**: AION, central retinal artery occlusion\n- **Degeneration**: Glaucoma, atrophy\n- **Congenital**: Hypoplasia, coloboma\n\n## Common Presentations\n- Vision loss (painless or painful)\n- Field defects (scotoma, hemianopia)\n- Relative afferent pupillary defect (RAPD)\n- Color vision loss (desaturated reds)\n- Pale optic disc (atrophy)\n- Swollen optic disc (papilledema, papillitis)\n\n## Key Signs\n- **RAPD**: Afferent pupillary defect indicates optic nerve pathology\n- **APD**: Afferent vs different arms\n- **Marcus Gunn Pupil**: Swinging flashlight sign positive in optic nerve disease",
        mnemonics: [
          { text: "RAPD", explanation: "Relative Afferent Pupillary Defect in optic nerve disease" },
          { text: "1.2M axons", explanation: "Optic nerve contains ~1.2 million retinal ganglion cell axons" }
        ],
        keyPoints: [
          "Optic nerve carries axons from RGCs to brain",
          "RAPD indicates optic nerve (not retinal) pathology",
          "Compression, inflammation, ischemia, degeneration main mechanisms",
          "Optic disc location where axons exit eye",
          "Vision loss and field defects common presentations"
        ],
        textbookRefs: [
          { book: "Khurana Comprehensive Ophthalmology", chapter: "Optic Nerve", edition: "7th" },
          { book: "Clinical Ophthalmology", chapter: "Neuro-Ophthalmology", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "optic-nerve-diseases-mechanism",
        title: "Optic Nerve Diseases - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of major optic nerve conditions",
        contentMd: "# Optic Nerve Diseases - Mechanism\n\n## Anterior Ischemic Optic Neuropathy (AION)\n\n**Pathophysiology**\n- Infarction of optic nerve head\n- Arterial insufficiency (posterior ciliary arteries)\n- **AAION**: Arteritis (giant cell arteritis in elderly)\n- **NAION**: Non-arteritic (hypertension, diabetes, smoking)\n\n**Mechanism**\n- Small optic nerve head with crowded disc\n- Perfusion pressure drop → ischemia\n- Sudden, painless vision loss\n- Altitudinal field defect (altitudinal: upper or lower half)\n\n## Optic Neuritis\n\n**Pathophysiology**\n- Demyelination of optic nerve axons\n- Often associated with MS (25-50% will develop MS)\n- Inflammation → loss of myelin → slowed conduction\n- Optic nerve swelling (papillitis if anterior)\n\n**Mechanism**\n- Immune attack on myelin sheath\n- CNS demyelinating disease\n- **Optic neuritis vs Papillitis**:\n  - Optic neuritis: Retrobulbar (behind globe), no disc swelling, RAPD present\n  - Papillitis: Anterior (optic disc), disc swelling, RAPD present\n\n## Glaucomatous Optic Nerve Damage\n\n**Pathophysiology**\n- Elevated intraocular pressure (primary glaucoma)\n- Progressive axonal loss from RGCs\n- Cupping of optic disc\n- Irreversible vision loss (late detection)\n\n**Mechanism**\n- IOP → axonal ischemia → apoptosis\n- Mechanical compression\n- Vascular insufficiency\n- Progressive cupping (excavation of disc)\n\n## Central Retinal Artery Occlusion (CRAO)\n\n**Pathophysiology**\n- Sudden arterial occlusion (embolic or thrombotic)\n- Ischemia of inner retina supplied by CRA\n- Sudden, painless, severe vision loss\n- Cherry-red spot at macula (characteristic)\n\n## Papilledema\n\n**Pathophysiology**\n- Increased intracranial pressure\n- Impaired axoplasmic flow in optic nerve\n- Optic disc swelling\n- Bilateral (if from raised ICP)\n- Gradual if chronic, sudden if acute\n\n**Stages**\n- Early: Blurred margins at disc poles\n- Moderate: Disc elevation, obscuration\n- Severe: Exudates, hemorrhages, Paton's lines",
        mnemonics: [
          { text: "NAION vs AAION", explanation: "Non-arteritic (common) vs Arteritic (elderly, GCA)" },
          { text: "Altitudinal = AION", explanation: "Altitudinal field defect is hallmark of ischemic neuropathy" }
        ],
        keyPoints: [
          "AION causes sudden altitudinal field loss",
          "Optic neuritis often first sign of MS",
          "Glaucoma: Progressive cupping with elevated IOP",
          "CRAO: Cherry-red spot + sudden vision loss",
          "Papilledema: Bilateral disc swelling from raised ICP"
        ],
        textbookRefs: [
          { book: "Clinical Ophthalmology", chapter: "Optic Nerve Pathophysiology", edition: "10th" },
          { book: "Khurana Ophthalmology", chapter: "Neuro-Ophthalmology", edition: "7th" }
        ]
      },
      {
        layer: 3,
        slug: "optic-nerve-diseases-clinical",
        title: "Optic Nerve Diseases - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical assessment and management of optic nerve disease",
        contentMd: "# Optic Nerve Diseases - Clinical\n\n## Clinical Examination\n\n**Visual Acuity & Fields**\n- Assess VA at distance and near\n- Visual field testing (confrontation, perimetry)\n- APD assessment (swinging flashlight test)\n\n**Optic Disc Assessment**\n- Color: Pale (atrophy), hyperemic (papillitis/edema)\n- Margins: Sharp (normal), blurred (papilledema/papillitis)\n- Cupping: Cup-to-disc ratio (normal <0.3; glaucoma >0.5)\n- Hemorrhages, exudates, hard drusen\n\n**Pupillary Reflex**\n- Marcus Gunn pupil: Indicates relative APD\n- Confirms afferent (optic nerve) vs efferent (CN III) lesion\n\n## Investigations\n\n**Imaging**\n- **MRI brain + orbits**: Demyelination (optic neuritis), tumors, MS\n- **OCT optic nerve head**: Measures nerve fiber layer thickness\n- **Visual evoked potentials (VEP)**: Demyelination evidence\n\n**Perimetry**\n- **Automated visual field**: Quantifies field defects\n- **Altitudinal defect**: AION pattern\n- **Central scotoma**: Optic neuritis pattern\n- **Arcuate defect**: Glaucoma pattern\n\n**Additional**\n- Fluorescein angiography: Assesses perfusion\n- Intraocular pressure measurement: Glaucoma screening\n- Blood tests: ESR, CRP (GCA), glucose, lipids\n\n## Management by Condition\n\n**Optic Neuritis**\n- **Acute phase**: IV methylprednisolone (1g daily × 3 days)\n- Followed by oral taper\n- Reduces risk of MS development\n- MRI to assess MS risk\n\n**AION**\n- **NAION**: Supportive, risk factor modification\n- **AAION (GCA)**: Urgent steroids (GCA is medical emergency)\n- Temporal artery biopsy if GCA suspected\n\n**Glaucoma**\n- IOP-lowering therapy (topical agents, lasers, surgery)\n- Early detection crucial for vision preservation\n\n**Papilledema**\n- Treat underlying cause (raised ICP)\n- Imaging to identify lesion\n- Acetazolamide if IIH (idiopathic intracranial hypertension)\n\n## Prevention\n- Regular eye exams (glaucoma screening)\n- Risk factor control (HTN, DM, smoking)\n- Early detection and treatment",
        mnemonics: [
          { text: "IV MP", explanation: "IV methylprednisolone for optic neuritis" }
        ],
        keyPoints: [
          "RAPD confirms optic nerve pathology",
          "MRI useful for demyelination and tumors",
          "OCT measures nerve fiber layer thinning",
          "Visual field pattern helps diagnosis (altitudinal, arcuate, central)",
          "Early treatment of optic neuritis may slow MS development"
        ],
        textbookRefs: [
          { book: "Khurana Ophthalmology", chapter: "Management", edition: "7th" },
          { book: "Clinical Ophthalmology", chapter: "Treatment", edition: "10th" }
        ]
      },
      {
        layer: 4,
        slug: "optic-nerve-diseases-exam",
        title: "Optic Nerve Diseases - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and NEXT-pattern MCQ concepts",
        contentMd: "# Optic Nerve Diseases - Exam Prep\n\n## Field Defect Patterns\n\n| Condition | Field Defect | Disc Appearance |\n|-----------|-------------|----------------|\n| AION | Altitudinal | Pale, edema |\n| Optic neuritis | Central scotoma | Normal or papillitis |\n| Glaucoma | Arcuate, nasal step | Cupped |\n| CRAO | Whole visual loss | Cherry-red spot |\n| Papilledema | Obscuration | Swollen, blurred |\n\n## NEXT-Pattern MCQs\n\n**Problem-Solving**: Young woman with optic neuritis, MRI shows plaques. Diagnosis?\n- Answer: Multiple sclerosis (optic neuritis often first MS sign)\n\n**Analysis**: Why is IV methylprednisolone used in acute optic neuritis?\n- Answer: Reduces inflammation and speeds recovery; may slow MS development\n\n**Recall**: What is Marcus Gunn pupil?\n- Answer: Afferent pupillary defect seen in optic nerve disease; swinging flashlight test positive\n\n## High-Yield Associations\n- **Optic neuritis**: MS (25-50% develop MS in 15 years)\n- **AAION**: Giant cell arteritis (emergency)\n- **Papilledema**: Increased ICP (brain tumor, hydrocephalus, IIH)\n- **CRAO**: Embolic source (atrial fibrillation, carotid disease)",
        mnemonics: [
          { text: "Altitudinal = AION", explanation: "Half-field vision loss is hallmark of ischemic neuropathy" }
        ],
        keyPoints: [
          "RAPD indicates optic nerve (not retinal) disease",
          "Optic neuritis associated with MS (25-50%)",
          "GCA/AAION is medical emergency",
          "IV methylprednisolone standard for optic neuritis",
          "Visual field pattern helps localize lesion"
        ],
        textbookRefs: [
          { book: "NEXT-PG Ophthalmology Series", chapter: "Optic Nerve", edition: "Latest" },
          { book: "Ophthalmology MCQ Book", chapter: "Neuro-Ophthalm", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "optic-nerve-diseases-recall",
        title: "Optic Nerve Diseases - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Optic Nerve Diseases - Active Recall\n\n## Flashcards\n\n**Q: What is RAPD?**\nA: Relative Afferent Pupillary Defect; indicates optic nerve pathology\n\n**Q: Which condition presents with cherry-red spot?**\nA: Central Retinal Artery Occlusion (CRAO)\n\n**Q: Classic field defect in AION?**\nA: Altitudinal (upper or lower half vision loss)\n\n**Q: What is the relationship between optic neuritis and MS?**\nA: Optic neuritis is first sign of MS in 25-50% of cases; 50% develop MS in 15 years\n\n**Q: Treatment for acute optic neuritis?**\nA: IV methylprednisolone 1g daily × 3 days\n\n**Q: Most common cause of papilledema?**\nA: Increased intracranial pressure\n\n**Q: What field defect suggests glaucoma?**\nA: Arcuate defect or nasal step\n\n**Q: Emergency diagnosis if elderly with AION?**\nA: Giant cell arteritis (GCA); check ESR, CRP, get temporal artery biopsy\n\n**Q: What does OCT measure?**\nA: Optic nerve fiber layer thickness\n\n**Q: How many axons in optic nerve?**\nA: Approximately 1.2 million RGC axons",
        mnemonics: [
          { text: "RAPD = Optic Nerve", explanation: "Afferent pupillary defect localizes to optic nerve" }
        ],
        keyPoints: [
          "10 rapid-fire optic nerve questions",
          "Field defect patterns emphasis",
          "RAPD significance",
          "MS and optic neuritis association"
        ],
        textbookRefs: [
          { book: "Ophthalmology MCQ Series", chapter: "Optic Nerve", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "OR-MOD-02-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "forearm-wrist-fractures-foundation",
        title: "Forearm & Wrist Fractures - Foundation",
        estimatedMinutes: 20,
        summary: "Classification and overview of forearm and wrist fractures",
        contentMd: "# Forearm & Wrist Fractures - Foundation\n\n## Forearm Anatomy\n- **Radius**: Lateral bone, mobile, pronation/supination\n- **Ulna**: Medial bone, fixed, insertion point for muscles\n- **Interosseous membrane**: Connects radius-ulna\n\n## Common Forearm Fractures\n\n**Radius Fractures**\n- **Colles fracture** (distal radius, most common)\n- **Smith fracture** (volar displacement, reverse Colles)\n- **Barton fracture** (intra-articular with dislocation)\n- **Radial head fracture**\n- **Radial neck fracture**\n- **Radial shaft fracture**\n\n**Ulna Fractures**\n- **Ulnar shaft fracture** (nightstick fracture)\n- **Olecranon fracture**\n- **Coronoid fracture**\n\n**Combined Fractures**\n- **Monteggia fracture**: Ulnar shaft fracture + radial head dislocation\n- **Galeazzi fracture**: Radial shaft fracture + DRUJ dislocation\n\n## Wrist Fractures\n- **Scaphoid fracture** (most common carpal bone)\n- **Lunate fracture** (risk of avascular necrosis)\n- **Pisiform, triquetrum, trapezium** (less common)\n\n## Colles Fracture Features\n- **Cause**: Fall on outstretched hand (FOOSH)\n- **Deformity**: \"Dinner fork\" appearance (dorsal displacement)\n- **Age**: Common in elderly (osteoporosis) and children\n- **Associated**: Often with ulnar styloid fracture",
        mnemonics: [
          { text: "Monteggia-Galeazzi", explanation: "Ulna fracture + radius dislocation vs Radius fracture + DRUJ dislocation" }
        ],
        keyPoints: [
          "Colles fracture most common distal radius fracture",
          "FOOSH mechanism causes Colles fracture",
          "Monteggia and Galeazzi need reduction of both bones",
          "Scaphoid fracture requires immobilization despite minimal displacement",
          "Nonunion and AVN are complications"
        ],
        textbookRefs: [
          { book: "Rockwood & Green Fractures", chapter: "Forearm & Wrist", edition: "9th" },
          { book: "Apley's Orthopedics", chapter: "Upper Limb", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "forearm-wrist-fractures-mechanism",
        title: "Forearm & Wrist Fractures - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology and fracture mechanics",
        contentMd: "# Forearm & Wrist Fractures - Mechanism\n\n## Colles Fracture Mechanics\n\n**Injury Mechanism**\n- FOOSH (Fall on Outstretched Hand) with wrist extended\n- Dorsal displacement of distal fragment\n- Metaphyseal fracture ~2cm from joint\n- Dorsal angulation (\"dinner fork\" deformity)\n- Often with ulnar styloid fracture (50%)\n\n**Associated Injuries**\n- Disruption of DRUJ (distal radioulnar joint)\n- Soft tissue injuries (ligament sprains)\n- Intra-articular component increases complications\n\n## Smith Fracture (Reverse Colles)\n\n**Mechanism**\n- Fall on flexed wrist\n- Volar (palmar) displacement\n- Less common than Colles\n- Often from direct blow or high-energy trauma\n\n## Monteggia Fracture\n\n**Mechanism**\n- Fall on extended elbow\n- Proximal ulnar fracture (any level)\n- Anterior radial head dislocation (90%)\n- Posterior dislocation rare\n- Important: Radial head dislocation easily missed\n\n## Galeazzi Fracture\n\n**Mechanism**\n- Fall on extended arm with pronation\n- Radial shaft fracture (distal 1/3)\n- DRUJ disruption with radial displacement\n- Unstable fracture\n- Intra-articular component common\n\n## Scaphoid Fracture\n\n**Mechanism**\n- FOOSH with wrist extended\n- Compression across scaphoid\n- Blood supply: Distal retrograde (proximal pole avascular risk)\n- Waist (50%) > proximal pole (20%) > distal pole (30%)\n\n**Complication Risks**\n- **Nonunion**: 10-12% (especially proximal pole)\n- **AVN (Avascular Necrosis)**: Proximal pole (no blood supply)\n- **Post-traumatic arthritis**: Long-term\n- Delayed diagnosis → complications\n\n## Forces & Instability\n- **Radius pronation/supination**: Rotation about biceps-pronator axis\n- **DRUJ stability**: Relies on interosseous membrane and ligaments\n- **Fracture displacement**: Results in loss of pronation/supination\n- **Both bones fractured**: Loss of stable axis",
        mnemonics: [
          { text: "FOOSH", explanation: "Fall On Outstretched Hand - causes Colles and scaphoid" },
          { text: "Proximal scaphoid = AVN risk", explanation: "Blood supply enters distally; proximal pole avascular" }
        ],
        keyPoints: [
          "Colles from FOOSH with extension; Smith from flexion",
          "Monteggia fracture-dislocation is specific combination",
          "Galeazzi fracture inherently unstable (DRUJ disrupted)",
          "Scaphoid proximal pole at high AVN risk",
          "Both-bone forearm fractures lose rotation"
        ],
        textbookRefs: [
          { book: "Rockwood & Green", chapter: "Fracture Mechanics", edition: "9th" },
          { book: "Orthopedic Pathology", chapter: "Trauma", edition: "Latest" }
        ]
      },
      {
        layer: 3,
        slug: "forearm-wrist-fractures-clinical",
        title: "Forearm & Wrist Fractures - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical assessment and management strategies",
        contentMd: "# Forearm & Wrist Fractures - Clinical\n\n## Clinical Assessment\n\n**Examination**\n- Swelling, deformity (dinner fork in Colles)\n- Palpate radial head (dislocation)\n- Assess neurovascular status (AIN, PIN nerves)\n- Check pronation/supination (loss = both bones fractured)\n- Measure wrist ROM\n\n**Imaging**\n- **AP, lateral, oblique X-rays**: Standard views\n- **Scaphoid series**: 4 views to detect fracture\n- **CT**: For intra-articular fractures, pre-operative planning\n- **MRI**: Early scaphoid fracture detection, osteonecrosis assessment\n\n## Colles Fracture Management\n\n**Non-operative** (Undisplaced, non-comminuted)\n- Reduction under anesthesia\n- Plaster of Paris cast (3-6 weeks)\n- Follow-up X-rays to check alignment\n- Then removable splint for 2-3 weeks\n- Total immobilization: 6-8 weeks\n\n**Operative** (Displaced, comminuted, intra-articular)\n- **ORIF** (Open Reduction Internal Fixation): Plates, screws\n- **Percutaneous pinning**: Kirschner wires\n- **External fixation**: For soft tissue damage\n- Better outcomes for displaced/complex fractures\n\n## Scaphoid Fracture Management\n\n**Immobilization** (Mainstay of treatment)\n- **Thumb spica cast**: 8-12 weeks (waist fractures)\n- **Long arm**: First 4-6 weeks, then short arm\n- Immobilization even if minimally displaced (displacement risk)\n- Follow-up X-rays at 2, 6, 12 weeks\n\n**Operative Indications**\n- Displaced >2mm\n- Nonunion\n- Proximal pole fracture (AVN risk)\n- Non-compliance with cast\n- Screw fixation allows early mobilization\n\n## Monteggia Fracture Management\n\n**Reduction Priority**\n- Reduce ulnar fracture first\n- Often reduces radial head\n- If radial head still displaced: Surgical reduction\n- Maintain reduction with plate/screws\n\n## Galeazzi Fracture Management\n\n**Operative Only**\n- ORIF of radial fracture (compression plating)\n- DRUJ assessment and reduction\n- If DRUJ unstable: Percutaneous pinning 6 weeks\n- Early mobilization after fixation\n\n## Complications\n- **Nonunion**: Scaphoid (high rate), especially proximal\n- **AVN**: Scaphoid proximal pole\n- **Post-traumatic arthritis**: Long-term\n- **Stiffness**: From prolonged immobilization\n- **Malunion**: Loss of alignment → loss of function",
        mnemonics: [
          { text: "Thumb spica", explanation: "Immobilization for scaphoid fracture" }
        ],
        keyPoints: [
          "Colles: Undisplaced → conservative; displaced → surgery",
          "Scaphoid: Immobilized even if minimally displaced",
          "Monteggia: Ulna fracture reduces radial head (check!)",
          "Galeazzi: Operative (unstable DRUJ)",
          "Scaphoid nonunion and AVN major complications"
        ],
        textbookRefs: [
          { book: "Rockwood & Green", chapter: "Management", edition: "9th" },
          { book: "Apley's Orthopedics", chapter: "Treatment", edition: "10th" }
        ]
      },
      {
        layer: 4,
        slug: "forearm-wrist-fractures-exam",
        title: "Forearm & Wrist Fractures - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and NEXT-pattern MCQ concepts",
        contentMd: "# Forearm & Wrist Fractures - Exam Prep\n\n## Fracture Type Comparison\n\n| Fracture | Mechanism | Key Feature | Treatment |\n|----------|-----------|------------|----------|\n| Colles | FOOSH extended | Dinner fork | Reduce, cast/surgery |\n| Smith | FOOSH flexed | Volar displacement | Reduce, cast/surgery |\n| Monteggia | Blow to ulna | Radial head dislocation | Plate + check reduction |\n| Galeazzi | Pronation | DRUJ disrupted | ORIF mandatory |\n| Scaphoid | FOOSH | Proximal pole AVN risk | Cast long-term |\n\n## NEXT-Pattern MCQs\n\n**Problem-Solving**: Elderly woman with FOOSH, dorsal displacement on X-ray. Management?\n- Answer: Closed reduction, cast initially; operative if comminuted or intra-articular\n\n**Analysis**: Why is scaphoid immobilized despite minimal displacement?\n- Answer: High risk of nonunion and displacement progression\n\n**Recall**: Most dangerous complication of scaphoid fracture?\n- Answer: Avascular necrosis of proximal pole (no blood supply)\n\n## High-Yield Facts\n- **Colles**: Dinner fork; reduce and immobilize\n- **Scaphoid**: Immobilize even if \"normal\" appearance on X-ray\n- **Monteggia**: Don't miss radial head dislocation\n- **Galeazzi**: Inherently unstable; needs surgery\n- **Both bones**: Loss of pronation/supination",
        mnemonics: [
          { text: "Dinner fork = Colles", explanation: "Dorsal displacement characteristic of Colles fracture" }
        ],
        keyPoints: [
          "FOOSH extended = Colles; flexed = Smith",
          "Monteggia = Ulna fracture + radial head dislocation",
          "Galeazzi = Radius fracture + DRUJ disruption",
          "Scaphoid immobilization critical (nonunion risk)",
          "Proximal scaphoid pole at high AVN risk"
        ],
        textbookRefs: [
          { book: "NEXT-PG Orthopedics Series", chapter: "Upper Limb Fractures", edition: "Latest" },
          { book: "Orthopedic MCQ Book", chapter: "Forearm & Wrist", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "forearm-wrist-fractures-recall",
        title: "Forearm & Wrist Fractures - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Forearm & Wrist Fractures - Active Recall\n\n## Flashcards\n\n**Q: Most common forearm fracture?**\nA: Colles fracture (distal radius)\n\n**Q: What does \"dinner fork\" deformity indicate?**\nA: Dorsal displacement in Colles fracture\n\n**Q: Mechanism of Colles fracture?**\nA: FOOSH (Fall On Outstretched Hand) with wrist extended\n\n**Q: Smith fracture is what?**\nA: Reverse Colles - volar displacement of distal radius\n\n**Q: What is Monteggia fracture?**\nA: Ulnar shaft fracture + anterior radial head dislocation\n\n**Q: Key feature of Galeazzi fracture?**\nA: Inherently unstable due to DRUJ disruption\n\n**Q: Most common carpal bone fracture?**\nA: Scaphoid\n\n**Q: Why is scaphoid proximal pole high risk?**\nA: Blood supply enters distally; proximal pole is avascular\n\n**Q: Duration of immobilization for scaphoid?**\nA: 8-12 weeks (thumb spica cast)\n\n**Q: Complication if scaphoid not immobilized?**\nA: Nonunion (10-12%) or AVN of proximal pole",
        mnemonics: [
          { text: "Colles-Smith contrast", explanation: "Colles dorsal (extended FOOSH); Smith volar (flexed FOOSH)" }
        ],
        keyPoints: [
          "10 rapid-fire forearm/wrist fracture questions",
          "Mechanism and deformity emphasis",
          "Monteggia and Galeazzi specifics",
          "Scaphoid complications"
        ],
        textbookRefs: [
          { book: "Orthopedic MCQ Series", chapter: "Forearm Fractures", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "PE-MOD-08-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "status-epilepticus-foundation",
        title: "Status Epilepticus - Foundation",
        estimatedMinutes: 20,
        summary: "Definition and classification of status epilepticus",
        contentMd: "# Status Epilepticus - Foundation\n\n## Definition\nProlonged seizure activity (>5 minutes) OR recurrent seizures without consciousness between episodes\n\n## Current Definition (2015 Update)\n- **≥5 minutes**: Operational definition for treatment initiation\n- **Discrete seizures without full recovery**: Between seizures\n- Reflects need for immediate treatment\n\n## Types of Status Epilepticus\n\n**Convulsive SE (CSE)**\n- **Tonic-clonic**: Most common (80%)\n- Muscle contractions, respiratory compromise\n- High mortality if untreated\n\n**Non-Convulsive SE (NCSE)**\n- Absence SE: Behavioral changes, confusion\n- Focal NCSE: Limited to one region\n- Difficult diagnosis (requires EEG)\n- Often missed clinically\n\n## Etiology\n\n**Known Epilepsy** (50%)\n- Poor compliance with AEDs\n- Medication withdrawal\n- Drug interactions\n\n**Acute Provocation** (40%)\n- Fever (most common in children)\n- Infection (meningitis, encephalitis)\n- Hypoglycemia, electrolyte abnormalities\n- Stroke, head trauma\n- Toxins, withdrawal (alcohol, benzodiazepines)\n\n**De Novo** (10%)\n- First seizure\n- Underlying brain pathology\n\n## Clinical Features\n- Continuous seizure activity or clusters\n- Altered consciousness\n- Respiratory distress\n- Hyperthermia\n- Tachycardia, hypertension (initially)\n- Risk of aspiration, rhabdomyolysis\n\n## Mortality & Morbidity\n- Mortality: 15-20% (untreated higher)\n- Morbidity: Hypoxic brain injury if prolonged\n- Time-dependent: Earlier treatment = better outcomes",
        mnemonics: [
          { text: "5-minute rule", explanation: "≥5 min seizure = status epilepticus requiring immediate treatment" }
        ],
        keyPoints: [
          "Status epilepticus is medical emergency",
          "Convulsive SE more common than non-convulsive",
          "Non-convulsive often missed (requires EEG)",
          "Multiple etiologies possible",
          "Mortality 15-20%; brain damage risk if prolonged"
        ],
        textbookRefs: [
          { book: "Neurology Harrison's", chapter: "Status Epilepticus", edition: "21st" },
          { book: "BDC Medicine", chapter: "Seizure Disorders", edition: "24th" }
        ]
      },
      {
        layer: 2,
        slug: "status-epilepticus-mechanism",
        title: "Status Epilepticus - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology and neurochemical changes in status epilepticus",
        contentMd: "# Status Epilepticus - Mechanism\n\n## Neurochemical Changes\n\n**GABA Receptor Desensitization**\n- Initial seizures: BZD-responsive\n- Prolonged seizures: GABA receptor trafficking away from synapse\n- GABA receptors internalized (desensitization)\n- Loss of BZD efficacy after 30-60 minutes\n- Explains why late treatment less effective\n\n**Glutamate Excitotoxicity**\n- NMDA receptor activation\n- Calcium influx into neurons\n- Mitochondrial dysfunction\n- Free radical formation\n- Neuronal death pathway activation\n\n**Ion Channel Changes**\n- Shift from inhibition (GABA) to excitation (Glutamate)\n- Self-sustaining seizure activity\n- Loss of normal seizure termination mechanisms\n\n## Systemic Effects\n\n**Cardiovascular**\n- Initial: Sympathetic surge (↑HR, ↑BP)\n- Prolonged: Hypotension, arrhythmias\n- Risk of sudden unexplained nocturnal death in epilepsy (SUDEP)\n\n**Respiratory**\n- Initial hyperpnea (respiratory alkalosis)\n- Muscle fatigue → hypoventilation\n- Aspiration risk\n- Hypoxia (major cause of secondary injury)\n\n**Metabolic**\n- Hyperthermia (from sustained muscle contraction)\n- Metabolic acidosis (lactate production)\n- Hypoglycemia (glucose consumption)\n- Hyperkalemia (released from muscles)\n- Rhabdomyolysis (muscle breakdown)\n\n**Renal**\n- Myoglobinuria (from rhabdomyolysis)\n- Acute kidney injury risk\n- Hyperkalemia → cardiac arrhythmias\n\n## Brain Damage Progression\n\n**Immediate (Minutes)**\n- Hypoxia, hypercapnia\n- Acidosis, ion imbalance\n- Excitotoxic cascade begins\n\n**Short-term (30-60 minutes)**\n- Neuronal calcium overload\n- Mitochondrial dysfunction\n- Apoptosis pathway activation\n\n**Long-term (>1 hour)**\n- Irreversible neuronal necrosis\n- Chronic sequelae (memory loss, behavior changes)\n- Risk increases dramatically after 30 minutes",
        mnemonics: [
          { text: "30-minute threshold", explanation: "After 30 min, BZD resistance develops; brain damage accelerates" }
        ],
        keyPoints: [
          "GABA receptor desensitization explains treatment resistance",
          "Glutamate excitotoxicity causes neuronal death",
          "Systemic effects include hyperthermia, acidosis, rhabdomyolysis",
          "Hypoxia is major cause of secondary brain injury",
          "30-minute window critical: Earlier treatment = better outcomes"
        ],
        textbookRefs: [
          { book: "Robbins & Cotran Pathology", chapter: "Nervous System", edition: "10th" },
          { book: "Neurology Pathophysiology", chapter: "Seizures", edition: "Latest" }
        ]
      },
      {
        layer: 3,
        slug: "status-epilepticus-clinical",
        title: "Status Epilepticus - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical management and emergency treatment protocol",
        contentMd: "# Status Epilepticus - Clinical\n\n## Immediate Management (First-line)\n\n**ABCs**\n- Airway: Clear airway, place in recovery position\n- Breathing: O2 supplementation, monitor SpO2\n- Circulation: IV access, monitor cardiac rhythm\n- Assess glucose (hypoglycemia treatable)\n\n## Seizure Termination (Time-dependent)\n\n**0-5 minutes: Benzodiazepines** (First-line)\n- **IV Lorazepam**: 0.1 mg/kg (4-8 mg typical adult)\n- **IV Diazepam**: 0.15 mg/kg (alternative if no IV)\n- **IM Midazolam**: 10 mg (if no IV access)\n- Onset: Minutes; duration 4-6 hours\n\n**5-20 minutes: Second-line agents** (If BZD fails)\n- **IV Phenytoin**: 15-20 mg/kg at <50 mg/min\n- **IV Valproate**: 15-30 mg/kg\n- **IV Levetiracetam**: 1-2 g IV\n- **IV Lacosamide**: 200-400 mg\n- Slower onset than BZDs but longer duration\n\n**>20 minutes: Refractory SE**\n- **IV Propofol**: 2 mg/kg bolus, infusion 50-100 μg/kg/min\n- **IV Midazolam**: 0.2 mg/kg bolus, infusion 0.75-10 μg/kg/min\n- **IV Phenobarbital**: 10-15 mg/kg\n- Anesthesia induction; intubation required\n\n## Supportive Care\n\n**Temperature Control**\n- Cooling measures (cooling blanket, tepid sponging)\n- Acetaminophen (limited benefit)\n\n**Rhabdomyolysis Management**\n- Aggressive IV hydration (maintain urine output 200-300 mL/hr)\n- Sodium bicarbonate to alkalinize urine\n- Monitor CK, electrolytes, kidney function\n- Dialysis if needed\n\n**Airway Management**\n- Intubate if refractory SE (comatose state)\n- Secure airway to prevent aspiration\n- Ventilation support\n\n## Etiological Investigation\n\n**Immediate**\n- Blood glucose\n- Electrolytes, calcium, magnesium\n- Liver, kidney function\n- Blood cultures (fever)\n- Lumbar puncture if meningitis suspected\n- CT head if trauma/intracranial pathology suspected\n\n**EEG**\n- **Critical for NCSE diagnosis**\n- Continuous monitoring in refractory cases\n- Assess seizure frequency, background\n\n**Imaging**\n- **CT**: Acute setting (rule out bleed, mass)\n- **MRI**: Later (identifies structural cause)\n- **PET, SPECT**: For resistant cases\n\n## Long-term Management\n- Address underlying cause\n- Establish AED regimen\n- Compliance counseling\n- Lifestyle modifications",
        mnemonics: [
          { text: "BZD → Phenytoin → Propofol", explanation: "Escalating protocol for SE termination" }
        ],
        keyPoints: [
          "Lorazepam first-line (IV preferred)",
          "30-minute threshold: After this, risk of permanent damage",
          "Refractory SE requires anesthesia",
          "Rhabdomyolysis: Aggressive fluid, urine alkalinization",
          "EEG critical for diagnosis (especially NCSE)"
        ],
        textbookRefs: [
          { book: "Neurology Management Protocols", chapter: "Status Epilepticus", edition: "Latest" },
          { book: "BDC Medicine", chapter: "SE Management", edition: "24th" }
        ]
      },
      {
        layer: 4,
        slug: "status-epilepticus-exam",
        title: "Status Epilepticus - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and NEXT-pattern MCQ concepts",
        contentMd: "# Status Epilepticus - Exam Prep\n\n## Treatment Protocol Hierarchy\n\n| Time | Agent | Dose | Route |\n|------|-------|------|-------|\n| 0-5 min | Lorazepam | 0.1 mg/kg | IV (first-line) |\n| 5-20 min | Phenytoin/Valproate | 15-20 mg/kg | IV |\n| >20 min | Propofol/Midazolam | 2 mg/kg bolus | IV + infusion |\n\n## NEXT-Pattern MCQs\n\n**Problem-Solving**: Patient with continuous seizures × 20 minutes, unresponsive to lorazepam. Next step?\n- Answer: Phenytoin or valproate IV; prepare for intubation\n\n**Analysis**: Why does benzodiazepine efficacy decrease with time?\n- Answer: GABA receptor desensitization and internalization (after 30-60 min)\n\n**Recall**: Most common cause of status epilepticus in India?\n- Answer: Non-compliance with AEDs (in known epilepsy); fever (in children)\n\n## Critical Points\n- **5-minute threshold**: Definition for treatment initiation\n- **30-minute threshold**: Risk of permanent brain damage\n- **BZD + phenytoin**: Combined approach for refractory cases\n- **Mortality**: 15-20% overall; higher if delayed treatment\n- **NCSE**: Often missed; requires EEG for diagnosis",
        mnemonics: [
          { text: "5-30-60 minutes", explanation: "5min threshold, 30min brain damage risk, 60min BZD resistance" }
        ],
        keyPoints: [
          "Lorazepam IV is first-line drug",
          "Phenytoin/valproate for BZD failure",
          "Propofol for refractory (anesthesia)",
          "Rhabdomyolysis management critical",
          "EEG essential for NCSE diagnosis"
        ],
        textbookRefs: [
          { book: "NEXT-PG Neurology Series", chapter: "Status Epilepticus", edition: "Latest" },
          { book: "Epilepsy MCQ Book", chapter: "Acute Management", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "status-epilepticus-recall",
        title: "Status Epilepticus - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Status Epilepticus - Active Recall\n\n## Flashcards\n\n**Q: Define status epilepticus**\nA: Seizure lasting ≥5 minutes OR recurrent seizures without full recovery\n\n**Q: Most common type of SE?**\nA: Tonic-clonic (convulsive) status epilepticus\n\n**Q: First-line drug for SE?**\nA: Lorazepam IV (0.1 mg/kg)\n\n**Q: Route if no IV access?**\nA: IM Midazolam or IV diazepam\n\n**Q: Second-line if BZD fails?**\nA: IV Phenytoin, Valproate, Levetiracetam, or Lacosamide\n\n**Q: Treatment for refractory SE?**\nA: Propofol or Midazolam infusion (requires intubation)\n\n**Q: Most common cause of SE in known epilepsy?**\nA: Non-compliance with anti-epileptic drugs\n\n**Q: Critical time window for brain damage?**\nA: 30 minutes (risk escalates after 30 min)\n\n**Q: What is rhabdomyolysis?**\nA: Muscle breakdown releasing myoglobin into urine; causes kidney damage\n\n**Q: Management of rhabdomyolysis?**\nA: Aggressive IV hydration and urine alkalinization",
        mnemonics: [
          { text: "LBP", explanation: "Lorazepam, Benzodiazepine, Phenytoin escalation" }
        ],
        keyPoints: [
          "10 rapid-fire SE questions",
          "Drug protocols emphasized",
          "Time-dependent treatment",
          "Complications management"
        ],
        textbookRefs: [
          { book: "Epilepsy MCQ Series", chapter: "Status Epilepticus", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "PH-MOD-06-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "histamine-antihistamines-foundation",
        title: "Histamine & Antihistamines - Foundation",
        estimatedMinutes: 20,
        summary: "Histamine physiology and antihistamine classification",
        contentMd: "# Histamine & Antihistamines - Foundation\n\n## Histamine Synthesis & Storage\n- **Synthesis**: Histidine → Histamine (via histidine decarboxylase)\n- **Storage**: Mast cells (50%), basophils, neurons, gastric parietal cells\n- **Half-life**: Very short (minutes)\n- **Metabolism**: MAO, diamine oxidase (DAO)\n\n## Histamine Receptor Types\n\n**H1 Receptors**\n- Smooth muscle, endothelium, CNS\n- Effects: Itching, bronchoconstriction, vasodilation\n- Location: Brain (sleep regulation), GI tract\n\n**H2 Receptors**\n- Gastric parietal cells, heart\n- Effects: Acid secretion, positive chronotrope\n- Location: Stomach (primary)\n\n**H3 Receptors**\n- Presynaptic neurons (CNS, periphery)\n- Effects: Inhibit histamine release, neuromodulation\n\n**H4 Receptors**\n- Immune cells (mast cells, eosinophils)\n- Effects: Chemotaxis, inflammation modulation\n\n## Histamine Release Triggers\n- **Allergic reactions**: IgE-mediated mast cell degranulation\n- **Physical**: Pressure, temperature, scratching\n- **Drugs**: Morphine, NSAIDs, muscle relaxants\n- **Foods**: Histamine-rich (aged cheese, cured meats)\n- **Infections**: Bacterial, viral\n\n## Histamine Effects\n- **Skin**: Urticaria, pruritus, flushing\n- **GI**: Acid secretion, cramping\n- **Cardiovascular**: Hypotension, tachycardia\n- **Respiratory**: Bronchoconstriction, rhinitis\n- **CNS**: Sedation, appetite regulation",
        mnemonics: [
          { text: "H1-H2-H3-H4", explanation: "Four histamine receptor types with distinct locations and effects" }
        ],
        keyPoints: [
          "H1 receptors cause allergy symptoms",
          "H2 receptors regulate gastric acid",
          "Histamine short half-life (rapid metabolism)",
          "Mast cell degranulation main histamine source",
          "Multiple triggers for histamine release"
        ],
        textbookRefs: [
          { book: "Pharmacology by Tripathi", chapter: "Antihistamines", edition: "10th" },
          { book: "Katzung Pharmacology", chapter: "Histamine & Antihistamines", edition: "15th" }
        ]
      },
      {
        layer: 2,
        slug: "histamine-antihistamines-mechanism",
        title: "Histamine & Antihistamines - Mechanism",
        estimatedMinutes: 30,
        summary: "Pharmacology of antihistamine agents and receptor mechanisms",
        contentMd: "# Histamine & Antihistamines - Mechanism\n\n## H1 Receptor Antagonists (Classical Antihistamines)\n\n### First-Generation (Sedating)\n**Mechanism**: Lipophilic, crosses BBB\n- **Chlorpheniramine**: Competitive antagonist\n- **Diphenhydramine**: Also anticholinergic properties\n- **Promethazine**: Strong sedation, antiemetic\n- **Hydroxyzine**: Anxiolytic, antipruritic\n\n**Effects**\n- Block H1 receptors (competitive)\n- CNS penetration (sedation, anticholinergic)\n- Peripheral effects: Antiemetic, anticholinergic\n- Slower onset (30-60 min), longer duration (4-6 hrs)\n\n### Second-Generation (Non-sedating)\n**Mechanism**: Hydrophilic, poor BBB penetration\n- **Cetirizine**: Selective H1 antagonist\n- **Desloratadine**: Long-acting\n- **Fexofenadine**: Non-metabolized\n- **Loratadine**: Prodrug (metabolized to desloratadine)\n\n**Advantages**\n- Non-sedating (hydrophilic, no BBB crossing)\n- Selective for H1 (no muscarinic blockade)\n- Longer duration (12-24 hrs)\n- Better for chronic use\n- Fewer drug interactions\n\n## H2 Receptor Antagonists\n\n**Agents**\n- **Cimetidine**: First, with CYP450 inhibition\n- **Ranitidine**: Withdrawn (impurity concerns)\n- **Famotidine**: Minimal drug interactions\n- **Nizatidine**: Intermediate\n\n**Mechanism**: Competitive H2 antagonism\n- Block parietal cell acid secretion\n- Reduce gastric acid production 50-70%\n- Heal ulcers, reduce reflux\n- Cimetidine inhibits CYP3A4 (drug interactions)\n\n## Cellular Mechanism of Action\n\n**H1 Antagonism**\n- Competitive inhibition of H1 receptors\n- Prevents bronchoconstriction, vasodilation, smooth muscle contraction\n- Anti-inflammatory effect (mild)\n- Anticholinergic effects (first-generation)\n\n**H2 Antagonism**\n- Blocks Gs-protein coupling\n- Decreases intracellular cAMP\n- Reduces acid secretion by parietal cells\n\n## Antihistamine Efficacy\n\n**H1 Antagonists Best For**\n- Allergic rhinitis (seasonal, perennial)\n- Urticaria and pruritus\n- Allergic conjunctivitis\n- Drug-induced allergic reactions\n\n**Limitations**\n- Cannot reverse established histamine effects (competitive, not insurmountable)\n- Ineffective in anaphylaxis (epinephrine needed)\n- Limited anti-inflammatory action\n- Tolerance may develop with continuous use",
        mnemonics: [
          { text: "Cetirizine, Desloratadine, Fexofenadine", explanation: "Second-generation non-sedating antihistamines" }
        ],
        keyPoints: [
          "First-generation: Sedating, cross BBB, faster acting",
          "Second-generation: Non-sedating, hydrophilic, longer-acting",
          "H2 antagonists reduce gastric acid 50-70%",
          "Competitive antagonism; cannot reverse established effects",
          "Cimetidine induces drug interactions via CYP450"
        ],
        textbookRefs: [
          { book: "Katzung Pharmacology", chapter: "Receptor Mechanisms", edition: "15th" },
          { book: "Goodman & Gilman Pharmacology", chapter: "Antihistamines", edition: "13th" }
        ]
      },
      {
        layer: 3,
        slug: "histamine-antihistamines-clinical",
        title: "Histamine & Antihistamines - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical use and adverse effects of antihistamines",
        contentMd: "# Histamine & Antihistamines - Clinical\n\n## Indications for Antihistamines\n\n**Allergic Conditions**\n- **Allergic Rhinitis**: 2nd-gen preferred (cetirizine 10mg OD)\n- **Urticaria**: 2nd-gen as first-line; 1st-gen for pruritus if needed\n- **Allergic Conjunctivitis**: Topical ophthalmic agents\n- **Pruritus**: 1st-gen for sedation + antipruritic (hydroxyzine)\n\n**Drug-Induced Allergies**\n- Pre-medication before chemotherapy/dye studies\n- Drug reaction management\n- First-generation preferred (anticholinergic + sedation)\n\n**Antiemetic Use**\n- **Promethazine**: Strong antiemetic (motion sickness, post-op nausea)\n- Anticholinergic properties help (antimuscarinic)\n\n**Sleep Disorders**\n- Diphenhydramine as sleep aid (over-the-counter)\n- Hydroxyzine for anxiety + sleep\n- First-generation CNS effects used therapeutically\n\n## H2 Antagonists - Clinical Use\n\n**Peptic Ulcer Disease**\n- Healing: Famotidine 40mg BD × 8-12 weeks\n- Reduced effectiveness in H. pylori era\n\n**GERD Management**\n- Mild-moderate symptoms\n- Often combined with proton pump inhibitors\n\n**Stress Ulcer Prophylaxis**\n- ICU patients\n- Critically ill (high stress-induced acid secretion)\n\n## Adverse Effects\n\n**First-Generation Antihistamines**\n- **CNS**: Sedation (major), paradoxical stimulation (rare, especially children)\n- **Anticholinergic**: Dry mouth, urinary retention, constipation\n- **Cardiac**: QT prolongation (rare)\n- **Addiction**: Potential with chronic use (anticholinergic effects)\n\n**Second-Generation Antihistamines**\n- **Minimal**: Rare sedation (hydrophilic)\n- **Cardiac**: QT prolongation possible (especially fexofenadine with high doses)\n- **Safe in pregnancy**: Category A/B\n- **Pediatric**: Generally safe\n\n**H2 Antagonists**\n- **Cimetidine**: Drug interactions (CYP3A4, 1A2, 2C9, 2C19 inhibition)\n- **Famotidine**: Minimal interactions, preferred\n- **Rare**: Headache, diarrhea, gynecomastia (cimetidine)\n- **Safety**: Generally well-tolerated\n\n## Drug Interactions & Cautions\n\n**Cimetidine**\n- Inhibits CYP450 (multiple isoforms)\n- Increases levels of: Warfarin, Theophylline, Phenytoin, TCAs\n- Reduced efficacy of prodrugs (codeine, clopidogrel)\n- Preferred alternatives: Famotidine, ranitidine (now off market)\n\n**Antihistamines + Alcohol**\n- Additive CNS depression\n- Avoid in drivers, machinery operators\n- First-generation worse than second-generation\n\n**Special Populations**\n- **Pregnancy**: 2nd-gen preferred; some 1st-gen safe\n- **Elderly**: Start low dose (sensitivity), avoid 1st-gen (anticholinergic risk)\n- **Children**: Age-appropriate dosing; avoid 1st-gen in young children",
        mnemonics: [
          { text: "Cetirizine = Correct choice for chronic allergy", explanation: "Non-sedating, long-acting, minimal interactions" }
        ],
        keyPoints: [
          "2nd-gen preferred for chronic allergic conditions",
          "1st-gen for acute + sedation/antiemetic effect",
          "H2 antagonists reduce GERD/ulcer symptoms",
          "Cimetidine major drug interactions (avoid if possible)",
          "First-generation: Anticholinergic caution in elderly"
        ],
        textbookRefs: [
          { book: "BDC Pharmacology", chapter: "Antihistamines", edition: "24th" },
          { book: "Katzung Pharmacology", chapter: "Clinical Use", edition: "15th" }
        ]
      },
      {
        layer: 4,
        slug: "histamine-antihistamines-exam",
        title: "Histamine & Antihistamines - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and NEXT-pattern MCQ concepts",
        contentMd: "# Histamine & Antihistamines - Exam Prep\n\n## Antihistamine Comparison Table\n\n| Drug | Generation | Sedation | Duration | Use |\n|------|-----------|----------|----------|-----|\n| Diphenhydramine | 1st | Marked | 4-6 hrs | Allergy, sleep, antiemetic |\n| Promethazine | 1st | Marked | 4-6 hrs | Antiemetic, motion sickness |\n| Cetirizine | 2nd | Minimal | 12-24 hrs | Allergic rhinitis (first-line) |\n| Loratadine | 2nd | None | 12-24 hrs | Chronic rhinitis |\n| Famotidine | H2 | - | 8-12 hrs | GERD, ulcer prophylaxis |\n\n## NEXT-Pattern MCQs\n\n**Problem-Solving**: Patient with allergic rhinitis requiring daytime function. Which drug?\n- Answer: Cetirizine or desloratadine (2nd-gen, non-sedating)\n\n**Analysis**: Why is 2nd-generation preferred over 1st-generation?\n- Answer: Non-sedating (hydrophilic), no BBB crossing, safer for chronic use\n\n**Recall**: Which H2 antagonist has fewest drug interactions?\n- Answer: Famotidine (cimetidine has major CYP450 inhibition)\n\n## High-Yield Facts\n- **H1 antagonism**: Allergies, urticaria, itching\n- **H2 antagonism**: GERD, ulcers, stress prophylaxis\n- **First-generation**: Anticholinergic + sedation (short-term use)\n- **Second-generation**: Non-sedating (chronic use)\n- **Cimetidine**: Major drug interactions (avoid if possible)",
        mnemonics: [
          { text: "2nd-gen = Correct choice chronically", explanation: "Non-sedating allows daytime function" }
        ],
        keyPoints: [
          "Cetirizine is first-line for allergic rhinitis",
          "Diphenhydramine for acute allergy + sedation needed",
          "Promethazine for antiemetic effect",
          "Famotidine for GERD (minimal interactions)",
          "Avoid 1st-gen in elderly (anticholinergic risk)"
        ],
        textbookRefs: [
          { book: "NEXT-PG Pharmacology Series", chapter: "Antihistamines", edition: "Latest" },
          { book: "Pharmacology MCQ Book", chapter: "Histamine & Drugs", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "histamine-antihistamines-recall",
        title: "Histamine & Antihistamines - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Histamine & Antihistamines - Active Recall\n\n## Flashcards\n\n**Q: Which receptor causes allergic symptoms?**\nA: H1 receptor (smooth muscle, endothelium)\n\n**Q: Which receptor controls gastric acid?**\nA: H2 receptor (parietal cells)\n\n**Q: First-generation antihistamine side effect?**\nA: Sedation, anticholinergic effects (dry mouth, urinary retention)\n\n**Q: Best antihistamine for chronic allergic rhinitis?**\nA: Cetirizine 10mg OD (2nd-gen, non-sedating)\n\n**Q: First-generation antihistamine for sedation benefit?**\nA: Diphenhydramine (sleep aid) or Hydroxyzine (anxiety + sleep)\n\n**Q: Best H2 antagonist (fewest interactions)?**\nA: Famotidine\n\n**Q: Cimetidine problem?**\nA: Inhibits CYP450, major drug interactions\n\n**Q: Can antihistamines treat anaphylaxis alone?**\nA: No, epinephrine is needed (antihistamines complement treatment)\n\n**Q: Promethazine best use?**\nA: Antiemetic (motion sickness, post-op nausea)\n\n**Q: Mechanism of H1 antagonists?**\nA: Competitive antagonism at H1 receptors",
        mnemonics: [
          { text: "H1 allergy; H2 acid", explanation: "H1 = Histamine/allergy receptors; H2 = Acid secretion" }
        ],
        keyPoints: [
          "10 rapid-fire histamine/antihistamine questions",
          "Drug selection based on indication",
          "First vs second-generation emphasis",
          "H2 antagonist use in GERD/ulcers"
        ],
        textbookRefs: [
          { book: "Pharmacology MCQ Series", chapter: "Antihistamines", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "PH-MOD-07-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "corticosteroids-foundation",
        title: "Corticosteroids - Foundation",
        estimatedMinutes: 20,
        summary: "Glucocorticoid physiology and classification",
        contentMd: "# Corticosteroids - Foundation\n\n## Physiology of Cortisol\n- **Synthesis**: In zona fasciculata of adrenal cortex\n- **Control**: HPA axis (hypothalamus → pituitary → adrenal)\n- **CRH → ACTH → Cortisol** (negative feedback)\n- **Half-life**: 60-90 minutes (short)\n- **Binding**: CBG (cortisol-binding globulin) in plasma\n- **Free cortisol**: Active form (5-10% of total)\n\n## Actions of Glucocorticoids\n\n**Metabolic**\n- Increase blood glucose (gluconeogenesis)\n- Promote protein catabolism\n- Increase lipolysis (fat redistribution)\n- Decrease glucose utilization\n\n**Anti-inflammatory**\n- Inhibit phospholipase A2 (decreases prostaglandins, leukotrienes)\n- Reduce leukocyte migration\n- Suppress cytokine production\n- Reduce vascular permeability\n\n**Immunosuppressive**\n- Lymphocyte apoptosis\n- Reduce antibody formation\n- Decrease complement activation\n\n**Other**\n- Maintain vascular tone\n- Increase cardiac output\n- Suppress TSH (minor)\n- CNS effects (mood, behavior)\n\n## Classification of Corticosteroids\n\n**Duration of Action**\n- **Short-acting**: Hydrocortisone (cortisol), cortisone (8-12 hrs)\n- **Intermediate**: Prednisone, prednisolone, methylprednisolone (18-36 hrs)\n- **Long-acting**: Dexamethasone, betamethasone (36-72 hrs)\n\n**Potency Relative to Hydrocortisone**\n- Hydrocortisone: 1.0\n- Prednisone: 4-5.0\n- Methylprednisolone: 5-6.0\n- Dexamethasone: 25-30.0\n- Betamethasone: 25-30.0",
        mnemonics: [
          { text: "HPA axis", explanation: "Hypothalamus-Pituitary-Adrenal regulation of cortisol" }
        ],
        keyPoints: [
          "Hydrocortisone = natural cortisol",
          "Prednisone 4-5× more potent than hydrocortisone",
          "Dexamethasone 25-30× more potent (longest-acting)",
          "Anti-inflammatory effect due to phospholipase A2 inhibition",
          "Immunosuppression via lymphocyte apoptosis"
        ],
        textbookRefs: [
          { book: "Pharmacology by Tripathi", chapter: "Corticosteroids", edition: "10th" },
          { book: "Katzung Pharmacology", chapter: "Adrenocorticosteroids", edition: "15th" }
        ]
      },
      {
        layer: 2,
        slug: "corticosteroids-mechanism",
        title: "Corticosteroids - Mechanism",
        estimatedMinutes: 30,
        summary: "Molecular mechanisms and gene regulation",
        contentMd: "# Corticosteroids - Mechanism\n\n## Molecular Mechanism of Action\n\n**Receptor-Mediated**\n- Glucocorticoid receptors (GR) in cytoplasm\n- Ligand (corticosteroid) binding\n- Conformational change, HSP90 release\n- Nuclear translocation\n- GR dimerization\n- Binding to glucocorticoid response elements (GREs) in DNA\n- Gene transcription up/downregulation\n\n## Gene Expression Changes\n\n**Upregulated Genes**\n- Lipocortin-1 (annexin-1): Phospholipase A2 inhibition\n- FKBP5: Stress response modulation\n- Glucose-6-phosphatase: Gluconeogenesis\n- Tyrosine aminotransferase: Protein catabolism\n\n**Downregulated Genes**\n- COX-2: Reduced prostaglandins\n- IL-2, TNF-α, IL-6: Cytokine suppression\n- Adhesion molecules (ICAM, VCAM): Reduced leukocyte migration\n- iNOS: Reduced nitric oxide\n\n## Anti-inflammatory Mechanisms\n\n**Direct Effects**\n1. **Lipocortin-1 induction**: Inhibits phospholipase A2\n   - Decreases arachidonic acid release\n   - Reduced prostaglandin (PG) and leukotriene (LT) synthesis\n2. **Cytokine suppression**: Direct transcriptional effects\n3. **Leukocyte recruitment block**: Adhesion molecule downregulation\n4. **Vascular permeability reduction**: Endothelial stabilization\n\n## Immunosuppressive Mechanisms\n\n**Lymphocyte Effects**\n- **CD4+ T cell apoptosis**: FasL pathway activation\n- **B cell suppression**: IL-2 and other cytokine reduction\n- **Antibody formation reduction**: Less T cell help\n- **NK cell function suppression**: Cytokine-dependent\n\n**Phagocyte Effects**\n- **Migration reduction**: Adhesion molecule downregulation\n- **Killing capacity reduction**: Cytokine suppression\n- **Presentation reduction**: MHC expression decreased\n\n## Time Course\n- **Rapid effects** (minutes-hours): Non-genomic (membrane receptor)\n- **Classic effects** (hours-days): Genomic (nuclear receptor)\n- **Full anti-inflammatory effect**: 6-12 hours\n- **Maximum immunosuppression**: 24-72 hours\n\n## Mineralocorticoid Activity\n- **Hydrocortisone**: 1.0 mineralocorticoid activity\n- **Prednisone**: 0.8 (mostly glucocorticoid)\n- **Dexamethasone**: Negligible (pure glucocorticoid)\n- Explains sodium retention with high-dose hydrocortisone",
        mnemonics: [
          { text: "GR-GRE-Gene expression", explanation: "Glucocorticoid Receptor binds GRE to regulate genes" }
        ],
        keyPoints: [
          "Glucocorticoid receptor mediates all effects",
          "Lipocortin-1 central to anti-inflammatory effect",
          "Cytokine suppression (IL-2, TNF-α, IL-6)",
          "Lymphocyte apoptosis for immunosuppression",
          "Time course: Minutes (non-genomic) to days (genomic)"
        ],
        textbookRefs: [
          { book: "Katzung Pharmacology", chapter: "Receptor Mechanisms", edition: "15th" },
          { book: "Goodman & Gilman", chapter: "Steroid Hormone Mechanisms", edition: "13th" }
        ]
      },
      {
        layer: 3,
        slug: "corticosteroids-clinical",
        title: "Corticosteroids - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical uses and adverse effects management",
        contentMd: "# Corticosteroids - Clinical\n\n## Replacement Therapy\n\n**Adrenal Insufficiency**\n- **Acute (Addisonian crisis)**: IV hydrocortisone 50-100mg Q4-6H\n- **Chronic**: Hydrocortisone 15-20mg/day (2/3 morning, 1/3 afternoon)\n- **Add mineralocorticoid**: Fludrocortisone 0.1-0.2mg/day\n\n## Anti-inflammatory Uses\n\n**Rheumatological**\n- RA: Prednisone 7.5-10mg/day (lowest effective dose)\n- SLE: Higher doses (0.5-1 mg/kg) for flares\n\n**Respiratory**\n- Asthma exacerbation: Prednisone 1mg/kg × 5-7 days\n- COPD exacerbation: Methylprednisolone 40-60mg IV Q6H × 3-7 days\n- Pulmonary fibrosis: Prednisone 1mg/kg × 4-6 weeks\n\n**Allergic/Dermatological**\n- Severe urticaria: Prednisone 0.5-1 mg/kg × 5-7 days\n- Lichen planus: Topical or systemic steroids\n- Contact dermatitis: Short course (7-10 days)\n\n**Neurological**\n- Optic neuritis: IV methylprednisolone 1g × 3 days\n- Cerebral edema: Dexamethasone 4-10mg IV Q6H\n- Spinal cord injury: High-dose methylprednisolone bolus (controversial)\n\n**GI/Hepatic**\n- Severe IBD flare: Prednisolone 0.5-1 mg/kg/day\n- Autoimmune hepatitis: Prednisone 1mg/kg tapered\n\n## Adverse Effects - Acute\n- Hyperglycemia\n- Insomnia, mood changes\n- Increased appetite\n- GI upset\n- Immunosuppression (infection risk)\n\n## Adverse Effects - Chronic (with prolonged use)\n\n**Metabolic**\n- Hyperglycemia, diabetes worsening\n- Hyperlipidemia\n- Weight gain, central obesity\n- Glucose intolerance\n\n**Skeletal**\n- **Osteoporosis**: 50% risk if >5mg prednisone ≥3 months\n- Bone pain, compression fractures\n- Osteonecrosis (femoral head)\n\n**Infections**\n- Opportunistic (PCP, TB, CMV)\n- Fungal (Candida, Aspergillus)\n- Bacterial superinfections\n\n**Dermatological**\n- Skin atrophy (local/systemic)\n- Striae\n- Acne\n- Poor wound healing\n\n**CNS**\n- Psychosis, depression, anxiety\n- Steroid myopathy (proximal weakness)\n- Insomnia\n\n**Endocrine**\n- HPA axis suppression (withdrawal risk)\n- Hypertension (mineralocorticoid effect)\n\n## Steroid Sparing & Mitigation\n\n**HPA Axis Protection**\n- Taper slowly (decrease 2.5-5 mg/week)\n- ACTH testing if prolonged use\n- Stress dosing (surgery, illness)\n\n**Osteoporosis Prevention**\n- Calcium + Vitamin D supplementation\n- Bisphosphonates (alendronate) if chronic steroids >3 months\n- Weight-bearing exercises\n\n**Infection Prevention**\n- TB screening pre-treatment\n- PCP prophylaxis (TMP-SMX) if <200 CD4 equivalent\n- Vaccinations (before immunosuppression if possible)\n\n**GI Protection**\n- PPI if high-dose steroids\n- Antacids PRN\n\n**Steroid-Sparing Agents**\n- Methotrexate (RA, SLE)\n- Azathioprine, Mycophenolate (immunosuppression)\n- Biologics (TNF inhibitors, IL-6 inhibitors)",
        mnemonics: [
          { text: "Taper slowly", explanation: "Prevent HPA axis suppression; risk of withdrawal symptoms" }
        ],
        keyPoints: [
          "Lowest effective dose for shortest duration",
          "Osteoporosis risk if >5mg prednisone ≥3 months",
          "HPA suppression with prolonged use (taper needed)",
          "Opportunistic infections with immunosuppression",
          "Steroid-sparing agents reduce long-term complications"
        ],
        textbookRefs: [
          { book: "BDC Pharmacology", chapter: "Steroid Use", edition: "24th" },
          { book: "Katzung Pharmacology", chapter: "Clinical Management", edition: "15th" }
        ]
      },
      {
        layer: 4,
        slug: "corticosteroids-exam",
        title: "Corticosteroids - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and NEXT-pattern MCQ concepts",
        contentMd: "# Corticosteroids - Exam Prep\n\n## Corticosteroid Potency & Duration\n\n| Drug | Potency | Duration | Use |\n|------|---------|----------|-----|\n| Hydrocortisone | 1.0 | 8-12 hrs | Replacement, acute |\n| Prednisone | 4-5 | 18-36 hrs | Chronic maintenance |\n| Methylprednisolone | 5-6 | 18-36 hrs | IV acute, asthma |\n| Dexamethasone | 25-30 | 36-72 hrs | Cerebral edema, long-acting |\n\n## NEXT-Pattern MCQs\n\n**Problem-Solving**: Patient on prednisone 20mg daily × 6 months. How to discontinue?\n- Answer: Slow taper (reduce 2.5-5 mg/week) to prevent HPA suppression\n\n**Analysis**: Why high-dose hydrocortisone causes sodium retention but dexamethasone doesn't?\n- Answer: Hydrocortisone has mineralocorticoid activity; dexamethasone is pure glucocorticoid\n\n**Recall**: Mechanism of corticosteroid anti-inflammatory effect?\n- Answer: Inhibits phospholipase A2 via lipocortin-1, reducing PG/LT production\n\n## High-Yield Adverse Effects\n- **Osteoporosis**: If >5mg prednisone ≥3 months\n- **Infections**: Opportunistic (TB, PCP) with immunosuppression\n- **HPA suppression**: Requires slow taper\n- **Hyperglycemia**: Monitor glucose\n- **Psychosis**: Rare but serious\n\n## Prevention Strategies\n- Use lowest effective dose\n- Shortest duration possible\n- Taper slowly\n- Calcium + Vitamin D\n- Bisphosphonates for chronic use",
        mnemonics: [
          { text: "Prednisone = 4-5× potent than hydrocortisone", explanation: "Easy conversion for dosing" }
        ],
        keyPoints: [
          "HPA suppression risk with prolonged steroids",
          "Slow taper prevents withdrawal symptoms",
          "Osteoporosis risk significant with chronic use",
          "Opportunistic infection monitoring needed",
          "Steroid-sparing agents reduce side effects"
        ],
        textbookRefs: [
          { book: "NEXT-PG Pharmacology Series", chapter: "Corticosteroids", edition: "Latest" },
          { book: "Pharmacology MCQ Book", chapter: "Steroid Hormones", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "corticosteroids-recall",
        title: "Corticosteroids - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Corticosteroids - Active Recall\n\n## Flashcards\n\n**Q: Most potent naturally-occurring corticosteroid?**\nA: Cortisol (hydrocortisone) = baseline (potency 1.0)\n\n**Q: Potency of prednisone vs hydrocortisone?**\nA: Prednisone 4-5× more potent\n\n**Q: Potency of dexamethasone vs hydrocortisone?**\nA: Dexamethasone 25-30× more potent\n\n**Q: Mechanism of anti-inflammatory effect?**\nA: Inhibits phospholipase A2 via lipocortin-1 (decreases PGs and leukotrienes)\n\n**Q: Duration of dexamethasone?**\nA: 36-72 hours (long-acting)\n\n**Q: Duration of prednisone?**\nA: 18-36 hours (intermediate)\n\n**Q: Risk of osteoporosis with corticosteroids?**\nA: If >5mg prednisone ≥3 months\n\n**Q: How to prevent HPA suppression?**\nA: Slow taper (reduce 2.5-5 mg/week), not abrupt cessation\n\n**Q: Dexamethasone mineralocorticoid activity?**\nA: Negligible (pure glucocorticoid)\n\n**Q: Major infection risk with chronic steroids?**\nA: Opportunistic (TB, PCP, fungal infections)",
        mnemonics: [
          { text: "Pred(nisone) = 4-5; Dexa = 25-30", explanation: "Easy potency comparison" }
        ],
        keyPoints: [
          "10 rapid-fire corticosteroid questions",
          "Potency and duration comparison",
          "Mechanism of action",
          "Adverse effects and prevention"
        ],
        textbookRefs: [
          { book: "Pharmacology MCQ Series", chapter: "Steroids", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "PS-MOD-02-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "bipolar-affective-disorder-foundation",
        title: "Bipolar Affective Disorder - Foundation",
        estimatedMinutes: 20,
        summary: "Definition and classification of bipolar disorder",
        contentMd: "# Bipolar Affective Disorder - Foundation\n\n## Definition\nRecurrent mood episodes with at least one manic/hypomanic episode, with or without major depressive episodes\n\n## Classification (DSM-5)\n\n**Bipolar I Disorder**\n- ≥1 manic episode (required)\n- Usually has depressive episodes\n- Most severe form\n- Hospitalization often needed\n- Psychotic features possible\n\n**Bipolar II Disorder**\n- ≥1 hypomanic episode AND ≥1 major depressive episode\n- No full manic episodes\n- More common than Bipolar I\n- Often misdiagnosed as depression\n\n**Cyclothymia**\n- Chronic mood instability (≥2 years)\n- Hypomania and mild depression (not full episodes)\n- Significant dysfunction\n- Increased bipolar I/II risk\n\n## Manic Episode (Bipolar I) - Criteria\n\n**Minimum: 1 week duration** with ≥3 symptoms (4 if irritable mood)\n- Elevated, expansive, or irritable mood\n- Grandiosity, inflated self-esteem\n- Decreased need for sleep (feels rested after 3 hours)\n- Racing thoughts, flight of ideas\n- Increased goal-directed activity\n- Talkativeness, pressured speech\n- Excessive involvement in risky activities\n- Distractibility\n\n**Associated Features**\n- Impaired judgment\n- Increased sexual activity\n- Excessive spending/debt\n- Psychotic features (delusions, hallucinations)\n- No depressive symptoms simultaneously\n\n## Hypomanic Episode (Bipolar II) - Criteria\n\n**Minimum: 4 days duration** with ≥3 symptoms (4 if irritable)\n- Same symptoms as mania BUT MILDER\n- No psychotic features\n- NO significant impairment in functioning\n- Distinguishes Bipolar II from Bipolar I\n\n## Major Depressive Episode - Criteria\n\n**Minimum: 2 weeks duration** with ≥5 symptoms (1 must be core)\n- Depressed mood or anhedonia (core)\n- Guilt, worthlessness\n- Sleep disturbance\n- Appetite/weight change\n- Fatigue, loss of energy\n- Concentration difficulty\n- Psychomotor retardation/agitation\n- Recurrent suicidal ideation/attempts\n\n## Epidemiology\n- **Lifetime prevalence**: 1-2% (Bipolar I: 0.5-1.0%, Bipolar II: 1-2%)\n- **Age of onset**: Usually 15-25 years\n- **Equal gender distribution** (unlike major depression)\n- **Genetic predisposition**: 80-90% heritability\n- **10-15% suicide risk** if untreated",
        mnemonics: [
          { text: "GRAM CAP", explanation: "Grandiosity, Racing thoughts, Agitation, Mood elevation; CAP: Decreased sleep, Activity, Projects risky" },
          { text: "Bipolar I = Manic; II = Hypomanic", explanation: "Severity difference: full mania vs milder hypomania" }
        ],
        keyPoints: [
          "Bipolar I: ≥1 manic episode (full severity)",
          "Bipolar II: Hypomanic + depressive episodes (no full mania)",
          "Mania ≥1 week; hypomania ≥4 days",
          "Bipolar II often misdiagnosed as depression",
          "10-15% suicide risk if untreated"
        ],
        textbookRefs: [
          { book: "DSM-5 Diagnostic Manual", chapter: "Bipolar Disorders", edition: "5th" },
          { book: "Kaplan & Sadock Psychiatry", chapter: "Bipolar Disorder", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "bipolar-affective-disorder-mechanism",
        title: "Bipolar Affective Disorder - Mechanism",
        estimatedMinutes: 30,
        summary: "Neurobiological basis and mood cycling mechanisms",
        contentMd: "# Bipolar Affective Disorder - Mechanism\n\n## Neurotransmitter Dysfunction\n\n**Monoamine Hypothesis**\n- **Mania**: Excess dopamine, norepinephrine, low serotonin\n- **Depression**: Low dopamine, norepinephrine, serotonin\n- Neurotransmitter balance dysregulation\n- Explains mood polarity (opposite states)\n\n**Dopamine Dysregulation**\n- Excessive DA in mania (reward, goal-directed activity)\n- Low DA in depression (anhedonia, psychomotor retardation)\n- Mesolimbic hyperactivity in mania\n- Ventral striatum involved in reward processing\n\n**Serotonin Dysfunction**\n- 5-HT dysregulation in mood regulation\n- Serotonin transporter (SERT) abnormalities\n- Impaired serotonergic neurotransmission\n- Mood stabilizers enhance 5-HT function\n\n## Neural Circuit Abnormalities\n\n**Prefrontal Cortex (PFC)**\n- Emotion regulation hub\n- Reduced PFC volume (bipolar)\n- Impaired top-down regulation of limbic activity\n- Leads to emotional dyscontrol\n\n**Amygdala**\n- Exaggerated reactivity to emotional stimuli\n- Hyperactivation in bipolar (emotional hypersensitivity)\n- Enlargement in some studies\n- Poor communication with PFC\n\n**Anterior Cingulate Cortex (ACC)**\n- Emotion evaluation and integration\n- Abnormal activation in bipolar disorder\n- Impaired emotion regulation\n- Affects mood response patterns\n\n**Ventral Tegmental Area (VTA)**\n- Dopamine source\n- Hyperactivity in mania\n- Hypoactivity in depression\n- Reward sensitivity abnormality\n\n## Circadian Rhythm Dysfunction\n\n**Sleep-Wake Cycle Abnormalities**\n- Decreased need for sleep (hallmark of mania)\n- Circadian rhythm instability\n- Genetic polymorphisms in clock genes\n- Sleep deprivation can trigger mania\n\n## Genetic Factors\n\n**Inheritance Pattern**\n- Monozygotic concordance: 50-80% (strong heritability)\n- Dizygotic concordance: 10-20%\n- Not purely genetic (50% environmental)\n- Complex inheritance (polygenetic)\n\n**Candidate Genes**\n- Clock genes (circadian rhythmicity)\n- Catecholamine genes (DA, NE metabolism)\n- Serotonin transporter gene\n- Brain-derived neurotrophic factor (BDNF)\n- Glycogen synthase kinase 3 (GSK-3) polymorphisms\n\n## Stress-Diathesis Model\n\n**Predisposition (Diathesis)**\n- Genetic vulnerability\n- Neurotransmitter dysregulation\n- Circuit abnormalities\n\n**Environmental Stressors (Stress)**\n- Life events, trauma\n- Sleep deprivation\n- Substance use (especially stimulants)\n- Psychosocial stress\n- Seasonal factors\n\n**Episode Trigger**\n- Stress × Diathesis interaction\n- Negative life events can precipitate mania or depression\n- Sleep loss particularly triggers mania",
        mnemonics: [
          { text: "Manic = Mania-associated monoamines high; Depressed = low", explanation: "Opposite neurotransmitter patterns" }
        ],
        keyPoints: [
          "Dopamine hyperactivity in mania",
          "Serotonin dysregulation both poles",
          "PFC-amygdala dysconnection in bipolar",
          "Circadian rhythm abnormalities (especially sleep)",
          "Stress-diathesis interaction triggers episodes"
        ],
        textbookRefs: [
          { book: "Neurobiology of Bipolar Disorder", chapter: "Mechanisms", edition: "Latest" },
          { book: "Kaplan & Sadock", chapter: "Neurobiological Bases", edition: "11th" }
        ]
      },
      {
        layer: 3,
        slug: "bipolar-affective-disorder-clinical",
        title: "Bipolar Affective Disorder - Clinical",
        estimatedMinutes: 20,
        summary: "Diagnosis and management in Indian clinical context",
        contentMd: "# Bipolar Affective Disorder - Clinical\n\n## Diagnostic Assessment\n\n**Clinical Interview**\n- Detailed mood history (timeline of episodes)\n- Seasonal pattern (seasonal affective disorder possible)\n- Substance use history (stimulants can mimic/trigger mania)\n- Sleep patterns\n- Psychotic features\n- Functional impairment\n- Family history of bipolar/psychiatric illness\n\n**Mood Charting**\n- Patient/family report of mood patterns\n- Episode duration and frequency\n- Severity of mania vs depression\n- Triggers identified\n\n**Investigations**\n- **CBC, TSH**: Rule out medical causes (thyroid dysfunction)\n- **EEG**: If psychotic features or seizure risk\n- **Brain MRI**: If first episode (structural lesions)\n- **Drug screening**: Detect substance-induced bipolar\n\n## Acute Mania Management\n\n**First-line Mood Stabilizers**\n- **Lithium**: 600-1200 mg/day (therapeutic level 0.6-1.2 mEq/L)\n  - Onset: 1-2 weeks\n  - Narrow therapeutic window\n  - Requires monitoring: TFT, renal function, lithium levels\n  - Teratogenic (avoid in pregnancy)\n  - Effective for maintenance\n\n**Anticonvulsants**\n- **Valproate**: 750-3000 mg/day (Level 50-100 μg/mL)\n  - Faster onset than lithium (days)\n  - Hepatotoxicity risk (rare)\n  - Teratogenic\n  - Good for rapid cycling\n\n**Atypical Antipsychotics** (adjunctive or monotherapy)\n- **Olanzapine**: 5-20 mg/day (most effective for mania)\n- **Quetiapine**: 300-600 mg/day (sedating, useful for agitation)\n- **Risperidone**: 2-6 mg/day (extrapyramidal side effects)\n- **Aripiprazole**: 10-30 mg/day\n- Onset: Days (faster than mood stabilizers)\n- Metabolic side effects (weight, glucose, lipids)\n\n**Acute Agitation**\n- Benzodiazepines: Lorazepam 2-4 mg IM/IV Q2H PRN\n- Used acutely; not long-term\n\n## Acute Depression Management\n\n**Antidepressants** (with mood stabilizer cover)\n- SSRI: Fluoxetine 20-40 mg, Sertraline 50-100 mg, Escitalopram 10-20 mg\n- Tricyclic: Amitriptyline (less preferred due to mania risk)\n- **Caution**: Monotherapy causes mania (rapid cycling)\n- Always use with mood stabilizer\n\n**Mood Stabilizers**\n- Lithium, valproate effective for bipolar depression\n- Continue from acute mania phase\n\n**Augmentation**\n- Lamotrigine: Particularly for bipolar depression (not acute mania)\n- Bupropion: For anhedonia (mania risk; use cautiously)\n\n## Maintenance Treatment\n\n**Goals**\n- Prevent episode recurrence\n- Minimize symptom residue\n- Restore social/occupational function\n- Reduce suicide risk\n\n**Strategies**\n- Lithium: Gold standard for maintenance (especially Bipolar I)\n- Valproate, lamotrigine: Alternatives\n- Atypical antipsychotics: For those with recurrent mania\n- Psychotherapy: CBT, family therapy, psychoeducation\n- Sleep hygiene: Critical (sleep loss triggers mania)\n\n## Psychosocial Interventions\n- **Psychoeducation**: Understanding bipolar, triggers, early warning signs\n- **Family-Focused Therapy**: Family involvement in treatment\n- **Cognitive Behavioral Therapy (CBT)**: For mood management\n- **Interpersonal and Social Rhythm Therapy (IPSRT)**: Sleep/activity stabilization\n- **Vocational rehabilitation**: Occupational functioning\n\n## Special Considerations - Indian Context\n\n**Stigma & Compliance**\n- High social stigma in India\n- Family-centered treatment approach important\n- Cultural factors in diagnosis (religious/spiritual experiences vs delusions)\n- Adherence monitoring essential (relapse risk)\n\n**Cost & Access**\n- Lithium affordable; requires monitoring labs\n- Valproate widely available\n- Psychosocial services limited\n- Rural access to specialist care poor",
        mnemonics: [
          { text: "Lithium = Gold standard", explanation: "Best long-term maintenance for bipolar disorder" }
        ],
        keyPoints: [
          "Lithium first-line for maintenance (especially Bipolar I)",
          "Valproate faster onset for acute mania",
          "Atypical antipsychotics adjunctive or monotherapy",
          "SSRIs for depression (always with mood stabilizer)",
          "Psychotherapy essential complement to medications"
        ],
        textbookRefs: [
          { book: "Kaplan & Sadock Psychiatry", chapter: "Treatment", edition: "11th" },
          { book: "BDC Psychiatry", chapter: "Bipolar Management", edition: "24th" }
        ]
      },
      {
        layer: 4,
        slug: "bipolar-affective-disorder-exam",
        title: "Bipolar Affective Disorder - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and NEXT-pattern MCQ concepts",
        contentMd: "# Bipolar Affective Disorder - Exam Prep\n\n## Bipolar I vs II Comparison\n\n| Feature | Bipolar I | Bipolar II |\n|---------|-----------|----------|\n| Manic episode | Yes (≥1 week) | No |\n| Hypomanic episode | May have | Yes (≥4 days) |\n| Depressive episode | Usually | Required |\n| Psychosis | Possible | No |\n| Functional impairment | Marked | Mild-moderate |\n| Hospitalization | Often needed | Rarely |\n| Gender ratio | Equal | Equal |\n| Suicide risk | 10-15% | 10-15% |\n\n## NEXT-Pattern MCQs\n\n**Problem-Solving**: Patient with 5 days of elevated mood, grandiosity, increased activity, no psychosis. Functioning intact. Diagnosis?\n- Answer: Hypomanic episode (≥4 days, not full mania) → Bipolar II\n\n**Analysis**: Why are antidepressants alone risky in bipolar depression?\n- Answer: Can precipitate rapid cycling or switch to mania (require mood stabilizer cover)\n\n**Recall**: Most important monitoring parameter for lithium?\n- Answer: Lithium levels (narrow therapeutic window 0.6-1.2 mEq/L) + renal/thyroid function\n\n## High-Yield Drug Comparisons\n\n**Lithium**\n- Onset: 1-2 weeks\n- Maintenance: 600-1200 mg/day\n- Monitor: Levels, TSH, renal function\n- Teratogenic\n- Best for maintenance\n\n**Valproate**\n- Onset: Days\n- Dose: 750-3000 mg/day\n- Better for rapid cycling\n- Teratogenic\n\n**Atypical Antipsychotics**\n- Onset: Days (fastest)\n- Most effective for acute mania\n- Weight gain risk\n- Adjunctive or monotherapy",
        mnemonics: [
          { text: "1 week mania = Bipolar I; 4 days hypomania = Bipolar II", explanation: "Duration differentiates full vs partial episodes" }
        ],
        keyPoints: [
          "Bipolar II often misdiagnosed as depression",
          "Antidepressants require mood stabilizer cover",
          "Lithium gold standard but requires monitoring",
          "Atypical antipsychotics fastest acting",
          "Sleep hygiene critical (sleep loss triggers mania)"
        ],
        textbookRefs: [
          { book: "NEXT-PG Psychiatry Series", chapter: "Bipolar Disorder", edition: "Latest" },
          { book: "Psychiatry MCQ Book", chapter: "Mood Disorders", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "bipolar-affective-disorder-recall",
        title: "Bipolar Affective Disorder - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Bipolar Affective Disorder - Active Recall\n\n## Flashcards\n\n**Q: Minimum duration for manic episode?**\nA: 1 week (with ≥3 symptoms)\n\n**Q: Minimum duration for hypomanic episode?**\nA: 4 days (with ≥3 symptoms)\n\n**Q: Key difference between Bipolar I and II?**\nA: Bipolar I has full mania; Bipolar II has hypomania only (no full mania)\n\n**Q: What is decreased need for sleep?**\nA: Feeling rested after only 3 hours (hallmark of mania)\n\n**Q: Most common misdiagnosis of Bipolar II?**\nA: Major depressive disorder (depressive episodes prominent)\n\n**Q: Lifetime suicide risk in bipolar disorder?**\nA: 10-15%\n\n**Q: Gold standard mood stabilizer?**\nA: Lithium\n\n**Q: Lithium therapeutic level?**\nA: 0.6-1.2 mEq/L\n\n**Q: Antidepressant risk in bipolar?**\nA: Can trigger mania or rapid cycling (use with mood stabilizer)\n\n**Q: Fastest-acting agent for mania?**\nA: Atypical antipsychotics (days) vs lithium (1-2 weeks)",
        mnemonics: [
          { text: "1-4: 1week mania, 4days hypomania", explanation: "Duration threshold for diagnosis" }
        ],
        keyPoints: [
          "10 rapid-fire bipolar disorder questions",
          "Duration criteria for episodes",
          "Differentiation of Bipolar I vs II",
          "Treatment principles emphasized"
        ],
        textbookRefs: [
          { book: "Psychiatry MCQ Series", chapter: "Bipolar Disorder", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "PY-MOD-01-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "homeostasis-feedback-mechanisms-foundation",
        title: "Homeostasis & Feedback Mechanisms - Foundation",
        estimatedMinutes: 20,
        summary: "Basic concepts of homeostasis and physiological control systems",
        contentMd: "# Homeostasis & Feedback Mechanisms - Foundation\n\n## Homeostasis Definition\nMaintenance of internal environment (extracellular fluid) relatively constant despite external changes\n\n## Key Homeostatic Parameters\n- **Body Temperature**: 37°C ±0.5°C\n- **Blood Glucose**: 70-100 mg/dL (fasting)\n- **Blood pH**: 7.35-7.45\n- **Osmolarity**: 280-310 mOsm/kg\n- **Blood Pressure**: 120/80 mmHg (normal)\n- **Electrolytes**: Na+ (135-145), K+ (3.5-5.0), Ca2+ (8.5-10.5) mEq/L\n- **Oxygen/CO2**: pO2 80-100, pCO2 35-45 mmHg\n\n## Feedback Control Systems\n\n**Components**\n1. **Sensor (Receptor)**: Detects deviation from setpoint\n2. **Integrating Center (Brain)**: Compares actual vs setpoint\n3. **Effector**: Executes corrective response\n4. **Feedback**: Returns information about correction\n\n**Negative Feedback Loop**\n- Response opposes the initial change\n- Restores parameter to setpoint\n- Most common physiological mechanism\n- Examples: Thermoregulation, glucose control\n\n**Positive Feedback Loop**\n- Response amplifies the initial change\n- Moves away from setpoint\n- Rare in physiology (usually pathological)\n- Examples: Childbirth (oxytocin), blood clotting\n\n## Regulation Mechanisms\n\n**Nervous System (Neural)**\n- Rapid response (milliseconds)\n- Example: Baroreceptor reflex\n\n**Endocrine System (Hormonal)**\n- Slower response (minutes-hours)\n- Longer duration\n- Example: Insulin, cortisol\n\n**Metabolic/Biochemical**\n- Local regulation\n- Direct chemical effects\n- Example: Phosphofructokinase inhibition by ATP\n\n## Setpoint vs Actual Value\n- **Setpoint**: Target value for parameter\n- **Actual value**: Current physiological parameter\n- **Error signal**: Difference between actual and setpoint\n- **Correction**: Drives effector response",
        mnemonics: [
          { text: "SIE feedback", explanation: "Sensor, Integrating center, Effector = feedback loop" }
        ],
        keyPoints: [
          "Homeostasis maintains internal constancy",
          "Negative feedback most common (opposes change)",
          "Positive feedback rare (amplifies change)",
          "Three components: Sensor, integrator, effector",
          "Multiple setpoints for different parameters"
        ],
        textbookRefs: [
          { book: "Guyton & Hall Physiology", chapter: "Introduction to Physiology", edition: "14th" },
          { book: "Vander Human Physiology", chapter: "Homeostasis", edition: "15th" }
        ]
      },
      {
        layer: 2,
        slug: "homeostasis-feedback-mechanisms-mechanism",
        title: "Homeostasis & Feedback Mechanisms - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms of major homeostatic control systems",
        contentMd: "# Homeostasis & Feedback Mechanisms - Mechanism\n\n## Thermoregulation\n\n**Temperature Setpoint**\n- ~37°C (set by hypothalamus)\n- Anterior hypothalamus increases setpoint in fever\n- Posterior hypothalamus executes responses\n\n**Cold Response (Temperature ↓)**\n- Sensors: Skin cold receptors (cold-sensitive neurons)\n- CNS: Thermoregulatory center in posterior hypothalamus\n- Effector responses:\n  - Vasoconstriction (reduce heat loss)\n  - Shivering thermogenesis (increase heat production)\n  - Increased metabolism\n  - Behavioral changes (seek warmth)\n\n**Heat Response (Temperature ↑)**\n- Sensors: Skin warm receptors, core temperature sensors\n- CNS: Anterior hypothalamus integrates\n- Effector responses:\n  - Vasodilation (increase heat loss)\n  - Sweating (evaporative cooling)\n  - Decreased metabolism\n  - Behavioral changes (seek cool environment)\n\n## Blood Glucose Regulation\n\n**Normal Fasting: 70-100 mg/dL**\n\n**Hyperglycemia Response (↑ Glucose)**\n- Pancreatic β-cells (sensor): Detect elevated glucose\n- Stimulus: Glucose uptake and metabolism\n- Response: **Insulin secretion**\n  - Increases glucose uptake (muscle, adipose, liver)\n  - Promotes glycogen synthesis\n  - Inhibits gluconeogenesis\n  - Result: Glucose ↓ toward setpoint\n\n**Hypoglycemia Response (↓ Glucose)**\n- Pancreatic α-cells (sensor): Detect low glucose\n- Stimulus: Lack of glucose metabolism\n- Response: **Glucagon secretion**\n  - Increases glucose output from liver\n  - Stimulates glycogenolysis\n  - Stimulates gluconeogenesis\n  - Result: Glucose ↑ toward setpoint\n\n**Hormonal Augmentation**\n- Epinephrine, cortisol, GH: Increase glucose in stress\n- Somatostatin: Inhibits both insulin and glucagon\n\n## pH Regulation (Acid-Base)\n\n**Normal Blood pH: 7.35-7.45**\n\n**Respiratory Regulation**\n- Chemoreceptors sense H+ and CO2\n- CO2 → H2CO3 → H+ + HCO3-\n- Hypoventilation: ↑ CO2 → ↓ pH (acidosis)\n- Hyperventilation: ↓ CO2 → ↑ pH (alkalosis)\n- **Rapid response** (minutes)\n\n**Renal Regulation**\n- **H+ secretion**: In proximal tubule and collecting duct\n- **HCO3- reabsorption**: In proximal tubule\n- **Ammonia excretion**: Chronic acidosis\n- **Longer response** (hours-days)\n- More powerful than respiratory\n\n## Osmolarity Regulation\n\n**Normal: 280-310 mOsm/kg**\n\n**Osmoreceptors**\n- Located in hypothalamus\n- Sense osmolarity of plasma\n\n**High Osmolarity (Hyperosmolarity)**\n- Stimulus: Dehydration, high Na+\n- Response: ADH (vasopressin) release\n  - Increases water reabsorption (aquaporins)\n  - Dilutes plasma osmolarity\n  - Urine becomes concentrated\n- Behavioral: Thirst (drinking)\n\n**Low Osmolarity (Hypoosmolarity)**\n- Stimulus: Overhydration\n- Response: ADH inhibition\n  - Decreases water reabsorption\n  - Increases urine output\n  - Osmolarity normalizes\n\n## Blood Pressure Regulation\n\n**Baroreceptor Reflex** (Rapid)\n- Sensors: Baroreceptors in carotid sinus, aortic arch\n- High BP: Parasympathetic outflow ↑ → ↓ HR, ↓ contractility\n- Low BP: Sympathetic outflow ↑ → ↑ HR, ↑ contractility\n- Restores BP toward normal\n\n**Renin-Angiotensin-Aldosterone (RAAS)** (Slower)\n- Juxtaglomerular cells: Sense BP, Na+, osmolarity\n- Low BP: Renin release → Angiotensin II → Aldosterone\n- Increases Na+ reabsorption → volume expansion → ↑ BP\n- More persistent control than baroreceptor reflex",
        mnemonics: [
          { text: "Insulin ↓ glucose; Glucagon ↑ glucose", explanation: "Opposite effects for glucose homeostasis" },
          { text: "ADH = Aquaporins = Antidiuresis", explanation: "ADH increases aquaporin expression for water reabsorption" }
        ],
        keyPoints: [
          "Temperature setpoint in hypothalamus",
          "Insulin/glucagon reciprocal regulation of glucose",
          "Respiratory and renal systems for pH control",
          "ADH for osmolarity regulation",
          "Baroreceptor reflex for rapid BP adjustment"
        ],
        textbookRefs: [
          { book: "Guyton & Hall Physiology", chapter: "Homeostatic Mechanisms", edition: "14th" },
          { book: "Vander Human Physiology", chapter: "Integration of Cardiovascular/Endocrine", edition: "15th" }
        ]
      },
      {
        layer: 3,
        slug: "homeostasis-feedback-mechanisms-clinical",
        title: "Homeostasis & Feedback Mechanisms - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical application and pathophysiology of homeostatic failure",
        contentMd: "# Homeostasis & Feedback Mechanisms - Clinical\n\n## Failure of Homeostatic Systems - Pathophysiology\n\n**Type 1 (Insufficient Response)**\n- Sensor or effector malfunction\n- Example: Pancreatic β-cell failure in Type 1 Diabetes\n  - Glucose setpoint cannot be defended\n  - Hyperglycemia uncontrolled\n\n**Type 2 (Resistance)**\n- Effector becomes insensitive\n- Example: Insulin resistance in Type 2 Diabetes\n  - Insulin produced but cells don't respond\n  - Glucose still elevated despite increased insulin\n\n**Type 3 (Feedback Loop Break)**\n- Negative feedback impaired\n- Example: Hypothyroid → TSH ↑ but no thyroid response\n  - Feedback loop broken\n  - No correction of low T4\n\n## Clinical Examples\n\n**Fever**\n- Pyrogens (bacterial endotoxins) reset hypothalamic setpoint ↑\n- Body perceives self as \"cold\"\n- Vasoconstriction, shivering → generates heat\n- New setpoint defended until pyrogens cleared\n- Antipyretics lower setpoint (not treating underlying infection)\n\n**Diabetes Mellitus**\n- Type 1: Insulin deficiency (sensor dysfunction)\n  - Glucose cannot be lowered despite high levels\n  - Glucagon continues to ↑ glucose\n\n- Type 2: Insulin resistance (effector dysfunction)\n  - Insulin produced but ineffective\n  - Glucose setpoint defended at high level\n  - Eventual β-cell failure (exhaustion)\n\n**Acidosis**\n- Metabolic: HCO3- ↓ or H+ ↑\n  - Respiratory compensation: Hyperventilation (↓ CO2)\n  - Renal compensation: ↑ H+ excretion\n  - If kidneys fail: No renal compensation possible\n\n- Respiratory: CO2 ↑\n  - Metabolic compensation: HCO3- ↑ (renal H+ excretion)\n  - If kidneys fail: Cannot compensate\n\n**Hyponatremia (↓ Na+)**\n- Osmolarity ↓\n- ADH suppressed (normal response)\n- Urine becomes dilute\n- If kidneys cannot respond: SIADH (inappropriate ADH secretion)\n  - ADH not suppressed → excessive water reabsorption\n  - Hyponatremia worsens\n\n## Aging & Homeostasis\n\n**Changes with Age**\n- Setpoint shifts: Core temperature ↓ with age\n- Slower response: Thermal adjustment takes longer\n- Reduced thirst sensation: Dehydration risk in elderly\n- Impaired glucose tolerance: Slower insulin response\n- Blood pressure regulation less efficient\n\n**Clinical Implications**\n- Elderly susceptible to hypothermia\n- Dehydration more common\n- Glucose dysregulation\n- Fall risk from orthostatic hypotension\n\n## Therapeutic Applications\n\n**Using Negative Feedback**\n- **Insulin**: Mimics β-cell response in diabetes\n- **Vasopressor**: Supports BP in shock\n- **Antipyretics**: Work through setpoint lowering (not ideal)\n\n**Supporting Homeostasis**\n- **IV fluids**: Support osmolarity/volume regulation\n- **Oxygen**: Supports respiratory acid-base compensation\n- **Dialysis**: Replaces renal acid-base and osmolarity control\n\n**Caution: Interfering with Feedback**\n- **Steroids**: Suppress fever response (masks infection)\n- **Anticholinergics**: Impair sweating (overheating risk)\n- **Loop diuretics**: Disrupt volume regulation",
        mnemonics: [
          { text: "Setpoint shift = Fever response", explanation: "Hypothalamus raises temperature setpoint; body generates heat to meet new setpoint" }
        ],
        keyPoints: [
          "Three types of homeostatic failure: insufficient response, resistance, loop break",
          "Fever is example of resetting setpoint (not malfunction)",
          "Type 2 diabetes: resistance (effector dysfunction)",
          "Compensation mechanisms in acid-base disorders",
          "Aging reduces homeostatic efficiency"
        ],
        textbookRefs: [
          { book: "Harrison's Internal Medicine", chapter: "Homeostasis", edition: "21st" },
          { book: "Vander Human Physiology", chapter: "Clinical Applications", edition: "15th" }
        ]
      },
      {
        layer: 4,
        slug: "homeostasis-feedback-mechanisms-exam",
        title: "Homeostasis & Feedback Mechanisms - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and NEXT-pattern MCQ concepts",
        contentMd: "# Homeostasis & Feedback Mechanisms - Exam Prep\n\n## Major Homeostatic Control Systems\n\n| Parameter | Setpoint | Sensor | Effector | Response |\n|-----------|----------|--------|----------|----------|\n| Temperature | 37°C | Hypothalamus | Metabolism, sweating | ±0.5°C maintained |\n| Glucose | 70-100 | β-cells | Insulin/Glucagon | Tight control |\n| pH | 7.35-7.45 | Chemoreceptors | Lungs/Kidneys | Rapid resp, slow renal |\n| Osmolarity | 280-310 | Osmoreceptors | ADH, thirst | H2O balance |\n| BP | 120/80 | Baroreceptors | Sympathetic/Parasym | Beat-to-beat control |\n\n## NEXT-Pattern MCQs\n\n**Problem-Solving**: Patient with fever 39°C. Give antipyretics or antibiotics first?\n- Answer: Antibiotics (treat underlying cause); antipyretics work through setpoint change, not treating infection\n\n**Analysis**: Why does metabolic acidosis cause hyperventilation?\n- Answer: Respiratory compensation (↓ CO2 to ↑ pH toward normal)\n\n**Recall**: What happens in Type 2 Diabetes regarding glucose homeostasis?\n- Answer: Insulin resistance (effector dysfunction); glucose setpoint defended at high level\n\n## High-Yield Principles\n- **Negative feedback**: Opposes change, maintains setpoint\n- **Positive feedback**: Amplifies change (rare, usually pathological)\n- **Setpoint**: Target value; actual may vary ±5-10%\n- **Three-component loop**: Sensor → Integrator → Effector\n- **Compensation**: Secondary systems help maintain parameter when primary fails",
        mnemonics: [
          { text: "Negative = Normal; Positive = Pathological", explanation: "Most homeostasis uses negative feedback" }
        ],
        keyPoints: [
          "Negative feedback maintains homeostasis",
          "Setpoint established by CNS/endocrine",
          "Rapid responses (nervous) and slow responses (endocrine)",
          "Multiple compensatory mechanisms for critical parameters",
          "Aging reduces homeostatic reserve"
        ],
        textbookRefs: [
          { book: "NEXT-PG Physiology Series", chapter: "Homeostasis", edition: "Latest" },
          { book: "Physiology MCQ Book", chapter: "Feedback Mechanisms", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "homeostasis-feedback-mechanisms-recall",
        title: "Homeostasis & Feedback Mechanisms - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid Q&A flashcards for spaced repetition",
        contentMd: "# Homeostasis & Feedback Mechanisms - Active Recall\n\n## Flashcards\n\n**Q: Define homeostasis**\nA: Maintenance of internal environment (body parameters) relatively constant despite external changes\n\n**Q: Most common feedback mechanism?**\nA: Negative feedback (opposes change, restores setpoint)\n\n**Q: Three components of feedback loop?**\nA: Sensor (detects change), Integrator (brain), Effector (produces response)\n\n**Q: Normal body temperature setpoint?**\nA: 37°C (±0.5°C)\n\n**Q: Insulin and glucagon relationship?**\nA: Reciprocal (insulin ↓ glucose, glucagon ↑ glucose)\n\n**Q: Most powerful pH regulation system?**\nA: Renal regulation (slower but more powerful than respiratory)\n\n**Q: Osmolarity sensor?**\nA: Osmoreceptors in hypothalamus\n\n**Q: ADH mechanism of action?**\nA: Increases aquaporins in collecting duct → water reabsorption\n\n**Q: BP sensor?**\nA: Baroreceptors in carotid sinus and aortic arch\n\n**Q: What happens to setpoint in fever?**\nA: Hypothalamic setpoint increases (from pyrogens); body tries to reach new higher temperature",
        mnemonics: [
          { text: "Setpoint = Set by CNS/Endocrine", explanation: "Brain sets target value to defend" }
        ],
        keyPoints: [
          "10 rapid-fire homeostasis questions",
          "Negative feedback principle",
          "Major control systems and their setpoints",
          "Compensation mechanisms"
        ],
        textbookRefs: [
          { book: "Physiology MCQ Series", chapter: "Homeostasis", edition: "Latest" }
        ]
      }
    ]
  }
];
