export const regenBatch6Lessons = [
  {
    topicCode: "FM-MOD-03-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "thermal-electrical-injuries-foundation",
        title: "Thermal & Electrical Injuries - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of thermal and electrical injuries, pathophysiology, and classification systems used in forensic medicine.",
        contentMd: "# Thermal & Electrical Injuries\n\n## Thermal Injuries\nThermal injuries result from exposure to high temperatures causing tissue damage. Severity depends on temperature, duration of exposure, and surface area involved.\n\n## Electrical Injuries\nElectrical injuries occur when current passes through body tissues. The path of current (\"hand-to-hand\" vs \"hand-to-foot\") significantly affects severity.\n\n## Classification\nBurns are classified by depth: superficial (1st degree), partial thickness (2nd degree), full thickness (3rd degree), and deep tissue involvement (4th degree).",
        mnemonics: [
          { text: "ABCDE of Burn Assessment", explanation: "Airway, Breathing, Circulation, Disability, Exposure" },
          { text: "Rule of Nines (Adult)", explanation: "Head 9%, Each arm 9%, Anterior trunk 18%, Posterior trunk 18%, Each leg 18%, Perineum 1%" }
        ],
        keyPoints: [
          "First-degree burns affect epidermis only",
          "Second-degree burns extend into dermis (painful, blistered)",
          "Third-degree burns destroy full thickness (painless, leathery)",
          "Electrical current measured in amperes; fatal level is 0.1A AC current",
          "Ohm's law: I = V/R determines current flow"
        ],
        textbookRefs: [
          { book: "Modi's Medical Jurisprudence & Toxicology", chapter: "Injuries by Heat & Electricity", edition: "24th" },
          { book: "Reddy's Medical Jurisprudence", chapter: "Thermal & Electrical Injuries", edition: "34th" }
        ]
      },
      {
        layer: 2,
        slug: "thermal-electrical-injuries-mechanism",
        title: "Thermal & Electrical Injuries - Mechanism",
        estimatedMinutes: 25,
        summary: "Detailed pathophysiology of thermal and electrical injuries at tissue and systemic levels.",
        contentMd: "# Pathophysiology of Thermal & Electrical Injuries\n\n## Thermal Injury Mechanisms\nDirect protein denaturation occurs above 44°C. Heat causes collagen contraction, vascular thrombosis, and cellular necrosis. The zone of coagulation (dead tissue) is surrounded by zone of stasis (compromised microcirculation) and zone of hyperemia (reversible damage).\n\n## Electrical Injury Mechanisms\nCurrent causes tissue heating (I²R effect), direct electrolysis of cellular fluids, and disruption of electrical signaling in nerve and muscle. Alternating current (AC) causes tetany of respiratory muscles; direct current (DC) causes single violent muscular contraction.\n\n## Systemic Effects\nThermal injuries trigger inflammatory cascade with release of cytokines, fluid shifts, and potential multi-organ failure. Electrical injuries may cause cardiac arrhythmias (VF from AC current), respiratory paralysis, and neurological injury.",
        mnemonics: [
          { text: "Zones of Burn Injury", explanation: "Coagulation (center) → Stasis (middle) → Hyperemia (outer)" },
          { text: "AC vs DC Effects", explanation: "AC causes tetany; DC causes explosive muscular contraction" }
        ],
        keyPoints: [
          "Thermal injury creates concentric zones of damage",
          "Vascular thrombosis prevents blood flow and causes progressive necrosis",
          "AC current at 50-60 Hz is more dangerous than DC",
          "Frequency <10 Hz: muscular contraction; 10-100 Hz: VF; >100 Hz: less cardiac effect but deep heating",
          "High-voltage injuries cause deep muscle necrosis despite superficial appearing wounds"
        ],
        textbookRefs: [
          { book: "Forensic Medicine by Pillay", chapter: "Electrical Injuries", edition: "4th" },
          { book: "Vaya's Textbook of Forensic Medicine", chapter: "Thermal Injuries", edition: "3rd" }
        ]
      },
      {
        layer: 3,
        slug: "thermal-electrical-injuries-clinical",
        title: "Thermal & Electrical Injuries - Clinical",
        estimatedMinutes: 30,
        summary: "Clinical presentation, complications, and management of thermal and electrical injuries in Indian healthcare settings.",
        contentMd: "# Clinical Aspects of Thermal & Electrical Injuries\n\n## Thermal Injury Assessment\nBurn percentage calculated using Rule of Nines or Lund-Browder chart (more accurate for children). Depth classification guides management. Major burns (>20% in adults, >10% in children) require hospitalization.\n\n## Complications\nHypovolemic shock from fluid loss (Parkland formula: 4 × %burn × body weight in mL over 24 hours). Inhalation injury from smoke/toxic fumes. Infection is leading cause of death in delayed phase. Fluid overload can cause compartment syndrome.\n\n## Electrical Injury Assessment\nEntry and exit wounds help determine current path. High-voltage injuries (>1000V) cause extensive deep damage. Low-voltage household current (110-240V) may cause cardiac dysrhythmias even without visible burns.",
        mnemonics: [
          { text: "Parkland Formula", explanation: "4 × %burn × body weight (kg) in mL LR over 24 hours; give half in first 8 hours" },
          { text: "High-Voltage Injury Features", explanation: "Deep tissue damage, entry/exit wounds, potential compartment syndrome, rhabdomyolysis" }
        ],
        keyPoints: [
          "Fluid resuscitation prevents hypovolemic shock and organ failure",
          "Escharotomy required if circumferential burn impairs circulation",
          "Inhalation injury significantly increases mortality",
          "Electrical injuries require continuous cardiac monitoring for 24 hours minimum",
          "Crush injuries from muscle necrosis can cause acute kidney injury from myoglobinuria",
          "Pain management is critical; opioids often necessary"
        ],
        textbookRefs: [
          { book: "Sabiston Textbook of Surgery", chapter: "Burns", edition: "21st" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Thermal Injuries", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "thermal-electrical-injuries-exam-prep",
        title: "Thermal & Electrical Injuries - Exam Prep",
        estimatedMinutes: 25,
        summary: "Examination-focused content on classification, medicolegal aspects, and high-yield facts for thermal and electrical injuries.",
        contentMd: "# Examination Focus: Thermal & Electrical Injuries\n\n## Classification Systems\nBurn classification by degree: 1st (erythema), 2nd (blistering), 3rd (full thickness), 4th (charring). TBSA assessment critical for burn unit admission criteria. Electrical voltage classification: low (<1000V), high (>1000V); current type (AC vs DC) affects severity.\n\n## Medicolegal Aspects\nForensic identification of burn patterns: contact burns show distinct object marks; immersion burns show clear demarcation lines; splash patterns suggest scalding. Electrical injuries show characteristic \"entry\" and \"exit\" wounds with surrounding singeing of hair.\n\n## High-Yield Facts\nLethality threshold: 15-20% in children, 40% in adults, 80% is usually fatal. Electrical current: 1mA = tingling, 5mA = painful, 10-20mA = muscle tetany, 50mA = VF, 100mA = asystole. Lightning strikes cause unique patterns with Lichtenberg figures.",
        mnemonics: [
          { text: "Burn Severity Thresholds", explanation: "Minor <10%, Moderate 10-20%, Major >20% (or >10% in children)" },
          { text: "Electrical Current Effects (in mA)", explanation: "1=tingling, 5=pain, 10-20=tetany, 50=VF, 100+=asystole" }
        ],
        keyPoints: [
          "Circumferential burns prone to compartment syndrome requiring escharotomy",
          "Inhalation injury increases mortality 3-4 fold",
          "Electrical burns may have extensive internal damage despite minimal external burns",
          "Lightning strike victims may appear lifeless but can be resuscitated",
          "Hypothermia from electrical current may require aggressive rewarming"
        ],
        textbookRefs: [
          { book: "Textbook of Forensic Medicine and Toxicology by Dr. K S Narayan Reddy", chapter: "Injuries by Electricity", edition: "34th" },
          { book: "Burns Care & Treatment by David N Herndon", chapter: "Assessment of Burn Injury", edition: "2nd" }
        ]
      },
      {
        layer: 5,
        slug: "thermal-electrical-injuries-active-recall",
        title: "Thermal & Electrical Injuries - Active Recall",
        estimatedMinutes: 20,
        summary: "Self-assessment questions and clinical scenarios for thermal and electrical injuries.",
        contentMd: "# Active Recall Questions\n\n## Scenario 1: Thermal Injury\nA 35-year-old male admitted with 40% TBSA burns from house fire. Using Parkland formula with 70kg body weight, calculate fluid requirement and explain how to monitor adequacy of resuscitation.\n\nAnswer: 4 × 40 × 70 = 11,200 mL LR over 24 hours. Give 5,600 mL in first 8 hours. Monitor urine output (target: 0.5 mL/kg/hr for non-burn, may need higher for extensive burns).\n\n## Scenario 2: Electrical Injury\nA 28-year-old lineman sustained high-voltage injury (11,000V). Entry wound on left hand, exit wound on right foot. What investigations and monitoring are mandatory?\n\nAnswer: ECG, troponin, serum creatinine (myoglobinuria risk), urine myoglobin, compartment pressure measurement, CT spine (if loss of consciousness). 24-hour cardiac monitoring minimum.\n\n## Scenario 3: Forensic Identification\nA body found with contact burn marks. Describe the appearance and forensic significance of contact burns versus immersion scalds.",
        mnemonics: [
          { text: "Burn Depth Recognition", explanation: "1st=erythema only, 2nd=blistered/moist, 3rd=white/leathery, 4th=charred/brown" },
          { text: "Electrical Injury Severity Predictors", explanation: "Voltage, current path (hand-to-foot worse), duration, AC vs DC" }
        ],
        keyPoints: [
          "Parkland formula: 4 × %burn × kg in mL LR over 24h (half in first 8h)",
          "Urine output target: 0.5-1 mL/kg/hr; may need 1-2 mL/kg/hr in severe burns",
          "High-voltage = deep muscle injury despite minimal surface burns",
          "Rhabdomyolysis monitoring essential; aggressive hydration to prevent AKI",
          "Lightning strike victims: look for loss of consciousness, arrhythmias, thermal burns from ignition"
        ],
        textbookRefs: [
          { book: "American Burn Association Guidelines", chapter: "Fluid Resuscitation", edition: "2016" },
          { book: "Emergency Medicine: Clinical Practice by Keith D Wrenn", chapter: "Electrical Injuries", edition: "2nd" }
        ]
      }
    ]
  },
  {
    topicCode: "MI-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "sterilization-disinfection-foundation",
        title: "Sterilization & Disinfection - Foundation",
        estimatedMinutes: 20,
        summary: "Basic definitions and principles of sterilization and disinfection in microbiology and infection control.",
        contentMd: "# Sterilization & Disinfection Fundamentals\n\n## Definitions\nSterilization is the complete elimination of all microorganisms including spores, resulting in a sterile product. Disinfection is the process that kills most pathogenic microorganisms except bacterial spores. Antisepsis is disinfection of skin/mucous membranes.\n\n## Levels of Microbial Control\nSterilization (complete kill), High-level disinfection (kills vegetative bacteria, fungi, viruses, and most spores), Intermediate-level disinfection (kills most microorganisms except spores), Low-level disinfection (kills vegetative bacteria and some viruses).\n\n## Microbial Resistance Hierarchy\nMost resistant: Bacterial spores. Moderately resistant: Mycobacteria, non-enveloped viruses. Least resistant: Enveloped viruses, vegetative bacteria, fungi.",
        mnemonics: [
          { text: "Resistance Hierarchy (Most to Least)", explanation: "Spores > Mycobacteria > Fungi > Non-enveloped viruses > Enveloped viruses > Vegetative bacteria" },
          { text: "SADT", explanation: "Sterilization, Antisepsis, Disinfection, Tyndallization" }
        ],
        keyPoints: [
          "Sterilization kills all organisms including spores",
          "Disinfection kills most pathogens but not necessarily spores",
          "Antisepsis is disinfection applied to living tissues",
          "Sanitization reduces microbial load to safe levels",
          "D-value (decimal reduction time) is time to reduce population by 90%",
          "Z-value is temperature change to reduce D-value by 90%"
        ],
        textbookRefs: [
          { book: "Textbook of Microbiology by Ananthanarayan & Paniker", chapter: "Sterilization & Disinfection", edition: "10th" },
          { book: "Medical Microbiology by Jawetz, Melnick & Adelberg", chapter: "Sterilization", edition: "27th" }
        ]
      },
      {
        layer: 2,
        slug: "sterilization-disinfection-mechanism",
        title: "Sterilization & Disinfection - Mechanism",
        estimatedMinutes: 25,
        summary: "Mechanisms of action of sterilizing and disinfecting agents at cellular and molecular levels.",
        contentMd: "# Mechanisms of Sterilization & Disinfection\n\n## Physical Methods\nHeat denatures proteins and damages cell membranes. Moist heat (autoclaving) is more effective than dry heat. Radiation (ionizing and non-ionizing) causes DNA damage. Filtration physically removes microorganisms without chemical action.\n\n## Chemical Mechanisms\nAldehydes cross-link proteins irreversibly. Alcohols denature proteins and dissolve lipids. Halogens (chlorine, iodine) oxidize microbial proteins. Phenolics disrupt cell membranes and denature proteins. Biguanides disrupt cell membranes. Oxidizing agents damage DNA and proteins through free radicals.\n\n## Factors Affecting Efficacy\nMicrobial load, type of microorganism, presence of organic matter, pH, temperature, contact time, and concentration of agent all influence sterilization/disinfection effectiveness.",
        mnemonics: [
          { text: "Heat Sterilization", explanation: "Moist >121°C (autoclaving), Dry >160°C (hot air), Incineration >1000°C" },
          { text: "Chemical Agent Mechanisms", explanation: "Aldehydes=protein cross-link, Alcohols=denature, Halogens=oxidize, Phenolics=membrane disrupt" }
        ],
        keyPoints: [
          "Autoclaving (121°C, 15 psi, 15-30 min) is gold standard for sterilization",
          "Organic matter reduces effectiveness by shielding microorganisms",
          "Spores are killed by sustained high temperature or chemical action",
          "Protein cross-linking is irreversible (aldehydes)",
          "Quaternary ammonium compounds effective against Gram-positive bacteria",
          "Glutaraldehyde requires 3-10 hours for high-level disinfection"
        ],
        textbookRefs: [
          { book: "Medical Microbiology by Parija", chapter: "Sterilization & Disinfection", edition: "3rd" },
          { book: "Prescott's Microbiology by Willey et al.", chapter: "Control of Microorganisms", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "sterilization-disinfection-clinical",
        title: "Sterilization & Disinfection - Clinical",
        estimatedMinutes: 30,
        summary: "Clinical application of sterilization and disinfection in Indian hospitals and infection control practices.",
        contentMd: "# Clinical Application & Infection Control\n\n## Hospital Sterilization Practices\nAutoclaves (steam pressure) for surgical instruments and dressings. Dry heat ovens for oils and powders. Gas sterilization (ethylene oxide) for heat-sensitive items. Low-temperature hydrogen peroxide plasma for delicate equipment.\n\n## Disinfection in Clinical Settings\nHigh-level disinfection for endoscopes using glutaraldehyde or peracetic acid. Intermediate-level for patient care equipment using chlorine-based solutions. Low-level for environmental surfaces using quaternary ammonium compounds.\n\n## Indian Hospital Infection Control Standards\nNational Infection Prevention and Control guidelines mandate segregation of biomedical waste, use of appropriate disinfectants based on microorganism type, and documentation of sterilization records. Standard precautions and transmission-based precautions are fundamental.",
        mnemonics: [
          { text: "Disinfectant Selection", explanation: "Blood/body fluids=chlorine 0.5%, Routine surfaces=0.05% chlorine, Endoscopes=glutaraldehyde 2%" },
          { text: "Biomedical Waste Categories (India)", explanation: "Yellow=human anatomical, Red=contaminated, Blue=glassware, Black=general" }
        ],
        keyPoints: [
          "Autoclaving at 121°C for 15-30 minutes is standard sterilization",
          "Surgical instruments must be sterilized before each use",
          "Disinfectant concentration and contact time must be validated",
          "Personal protective equipment required when handling disinfectants",
          "Environmental surfaces require daily cleaning and disinfection",
          "Sharps and contaminated materials require segregation and special disposal"
        ],
        textbookRefs: [
          { book: "National Infection Prevention and Control Guidelines", chapter: "Disinfection & Sterilization", edition: "2022" },
          { book: "Hospital Infection Control by Chadha et al.", chapter: "Sterilization Methods", edition: "2nd" }
        ]
      },
      {
        layer: 4,
        slug: "sterilization-disinfection-exam-prep",
        title: "Sterilization & Disinfection - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield examination content on sterilization methods, disinfectants, and clinical applications.",
        contentMd: "# Examination Focus: Sterilization & Disinfection\n\n## Sterilization Methods Comparison\nAutoclaving (121°C, 15-30 min, moist heat) is most common. Dry heat (160-180°C, 1-2 hours) for oils. Gas sterilization (ethylene oxide, 12 hours) for plastics. Filtration (0.22 μm) for heat-labile solutions. Radiation (UV 260 nm, gamma) for materials. Tyndallization (fractional heating) for culture media.\n\n## Disinfectants & Antiseptics\nChlorhexidine (0.5% for skin, 0.12% for oral rinse) effective against Gram-positive bacteria. Povidone-iodine (7.5% for skin, 1% for oral) broad spectrum. Alcohol (70% ethanol) fast-acting but not sporicidal. Quaternary ammonium compounds for surfaces. Phenolics (5-10%) for environmental disinfection.\n\n## Clinical Decision-Making\nChoose sterilization based on material (heat-sensitive vs heat-stable). Use high-level disinfection for items entering sterile sites (endoscopes). Environmental surfaces need low-level disinfection. Consider microbial load and organic matter presence.",
        mnemonics: [
          { text: "Sporicidal Agents", explanation: "Aldehydes (formaldehyde, glutaraldehyde), Oxidizing agents (hydrogen peroxide, peracetic acid), Alkylating agents" },
          { text: "Fastest Disinfectants", explanation: "Alcohol (seconds), Iodine (seconds-minutes), Chlorine (minutes), Phenolics (hours)" }
        ],
        keyPoints: [
          "Autoclaving: 121°C, 15 psi, 15-30 minutes (add 3 min per 25mm thickness)",
          "Glutaraldehyde: 2% solution, 3-10 hours for spore kill",
          "Peracetic acid: 0.2-0.35%, fast acting, less toxic",
          "Chlorine: 0.5% for blood/body fluids, 0.05% for routine cleaning",
          "D-value crucial for understanding sterilization parameters",
          "Sterility assurance level (SAL) of 10^-6 standard for medical devices"
        ],
        textbookRefs: [
          { book: "Textbook of Microbiology by Ananthanarayan & Paniker", chapter: "Sterilization & Disinfection", edition: "10th" },
          { book: "WHO Guidelines on Disinfection & Sterilization", chapter: "Chemical Agents", edition: "2022" }
        ]
      },
      {
        layer: 5,
        slug: "sterilization-disinfection-active-recall",
        title: "Sterilization & Disinfection - Active Recall",
        estimatedMinutes: 20,
        summary: "Self-assessment with clinical scenarios for sterilization and disinfection concepts.",
        contentMd: "# Active Recall Questions\n\n## Question 1: Method Selection\nA surgical instrument is made of plastic and cannot withstand high heat. Which sterilization method would you use and why?\n\nAnswer: Ethylene oxide gas sterilization or low-temperature hydrogen peroxide plasma. These preserve material integrity while achieving sterility. Gas sterilization takes 12-24 hours including aeration.\n\n## Question 2: Disinfectant Concentration\nA patient's blood is spilled on a surface. What concentration of chlorine and contact time is required for disinfection?\n\nAnswer: 0.5% sodium hypochlorite with 30 minutes contact time for blood/body fluids. Higher concentration needed due to organic matter interfering with disinfectant action.\n\n## Question 3: Resistance Hierarchy\nWhy are bacterial spores the most resistant organisms? Explain their structure that confers resistance.\n\nAnswer: Spores have thick peptidoglycan cell wall, dehydrated cytoplasm, and lack metabolic activity. Calcium-dipicolinate complexes protect DNA. This structure resists heat, chemicals, and radiation far better than vegetative cells.",
        mnemonics: [
          { text: "Sterilization Time Factors", explanation: "Temperature ↑ = time ↓; Moisture = faster kill; Spores = longer time needed" },
          { text: "Disinfectant-Organism Combinations", explanation: "Alcohol vs enveloped virus (effective), Alcohol vs spores (ineffective)" }
        ],
        keyPoints: [
          "Autoclaving kills spores in 15-30 minutes; dry heat needs 1-2 hours",
          "Glutaraldehyde requires 3-10 hours to kill spores",
          "Peracetic acid kills spores rapidly (15-30 minutes at 0.35%)",
          "Organic matter (blood, pus) reduces disinfectant effectiveness",
          "Contact time is critical; apply disinfectant and wait specified duration",
          "Validate sterilization/disinfection through biological indicators (spore tests)"
        ],
        textbookRefs: [
          { book: "Microbiology Practical Manual by Leboffe & Pierce", chapter: "Sterilization", edition: "3rd" },
          { book: "Clinical Microbiology Procedures Handbook", chapter: "Disinfection & Sterilization", edition: "4th" }
        ]
      }
    ]
  },
  {
    topicCode: "MI-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "microscopy-staining-foundation",
        title: "Microscopy & Staining - Foundation",
        estimatedMinutes: 20,
        summary: "Basic principles of microscopy, microscope components, and fundamental staining concepts in microbiology.",
        contentMd: "# Microscopy & Staining Fundamentals\n\n## Microscope Types\nLight microscopy (bright-field, dark-field, phase-contrast, fluorescence) uses visible light. Electron microscopy (transmission, scanning) uses electrons for higher magnification. Resolution is determined by wavelength of light/electrons and numerical aperture of lens.\n\n## Microscope Components\nObjective lenses (4x, 10x, 40x, 100x magnification), eyepiece lens (10x), stage, fine and coarse adjustment knobs, condenser (controls light path), diaphragm (controls light intensity). Oil immersion (100x objective) uses immersion oil to increase numerical aperture.\n\n## Staining Principles\nStains are colored molecules that bind to cellular components through ionic, covalent, or hydrophobic interactions. Positive stains bind to cellular structures; negative stains color the background. Mordants enhance stain binding.",
        mnemonics: [
          { text: "Magnification Calculation", explanation: "Total magnification = Objective lens × Eyepiece lens (e.g., 100x × 10x = 1000x)" },
          { text: "Common Objectives", explanation: "4x=scanning, 10x=low power, 40x=high dry, 100x=oil immersion" }
        ],
        keyPoints: [
          "Resolution is diffraction-limited; light microscopy maximum ~200nm",
          "Numerical aperture (NA) indicates light-gathering ability",
          "Oil immersion increases NA from 0.95 to 1.4",
          "Refractive index of oil (1.515) matches glass (1.515)",
          "Stains must not kill or distort microorganisms being observed",
          "pH affects staining (acidic dyes bind to basic components)"
        ],
        textbookRefs: [
          { book: "Textbook of Microbiology by Ananthanarayan & Paniker", chapter: "Microscopy & Staining", edition: "10th" },
          { book: "Basics of Microbiology by Pelczar, Chan & Krieg", chapter: "Microscopy", edition: "5th" }
        ]
      },
      {
        layer: 2,
        slug: "microscopy-staining-mechanism",
        title: "Microscopy & Staining - Mechanism",
        estimatedMinutes: 25,
        summary: "Chemical mechanisms of staining, interaction of dyes with cellular components, and properties of common stains.",
        contentMd: "# Mechanisms of Staining\n\n## Dye-Cell Interactions\nAcidic dyes (negatively charged) bind to cationic (basic) cellular components like proteins and nucleic acids. Basic dyes (positively charged) bind to anionic (acidic) components. Mordants are metal salts (iron, chromium) that form bridges between dye and cellular component, increasing binding affinity.\n\n## Common Staining Mechanisms\nSimple staining uses single dye; Gram staining uses multiple dyes with differential retention based on cell wall structure (Gram-positive retain crystal violet-iodine complex; Gram-negative do not). Acid-fast staining uses carbolfuchsin and alcohol, binding mycolic acids in mycobacteria. Spore staining uses heat to drive dye into spore core.\n\n## Cellular Components Stained\nProteins (basic dyes), nucleic acids (basic dyes), lipids (alcohol/acetone-based dyes), carbohydrates (periodic acid-Schiff), cell walls (specific dyes).",
        mnemonics: [
          { text: "Gram Stain Steps (mnemonic: Crystal, Gram, Safranin)", explanation: "Crystal violet (all purple), Gram iodine (mordant), Alcohol (decolorizer removes from Gram-neg), Safranin (Gram-neg pink, Gram-pos purple)" },
          { text: "Acid-Fast Stain", explanation: "Heat + carbolfuchsin binds mycolic acids; alcohol/acetone cannot remove (\"acid-fast\"); methylene blue counterstain" }
        ],
        keyPoints: [
          "Gram-positive: thick peptidoglycan (60-90% of cell wall) retains dye",
          "Gram-negative: thin peptidoglycan (5-10%) with outer membrane loses dye",
          "Mycolic acids in mycobacteria are waxy, retain fuchsin despite alcohol treatment",
          "Iodine acts as mordant in Gram stain, increases crystal violet binding",
          "Alcohol is decolorizer; timing critical in Gram staining",
          "Counterstains (safranin, methylene blue) color decolorized cells"
        ],
        textbookRefs: [
          { book: "Medical Microbiology by Jawetz, Melnick & Adelberg", chapter: "Staining", edition: "27th" },
          { book: "Practical Microbiology by Ananthanarayan", chapter: "Microscopy & Staining", edition: "2nd" }
        ]
      },
      {
        layer: 3,
        slug: "microscopy-staining-clinical",
        title: "Microscopy & Staining - Clinical",
        estimatedMinutes: 30,
        summary: "Clinical application of microscopy and staining techniques in diagnostic microbiology in Indian laboratories.",
        contentMd: "# Clinical Microscopy & Staining Applications\n\n## Common Diagnostic Stains\nGram stain is gold standard for bacterial identification. Ziehl-Neelsen (ZN) stain identifies tuberculosis and mycobacteria. Methylene blue for spirochetes. Giemsa for Plasmodium and Chlamydia. India ink for Cryptococcus neoformans (negative stain). PAS stain for fungi and carbohydrates.\n\n## Sample Preparation in Indian Labs\nSputum samples for TB using ZN stain; cervical swabs for Chlamydia using Giemsa or immunofluorescence; blood films for malaria parasites. Proper sample collection and fixation critical for diagnostic accuracy. Air-drying and heat fixation prevent cell disruption.\n\n## Quality Assurance\nPositive and negative controls run with every batch. Stain standardization using standard strains. Regular equipment maintenance including lens cleaning and microscope calibration. Documentation of results with photomicrographs when required.",
        mnemonics: [
          { text: "Diagnostic Stain Selection", explanation: "Bacteria=Gram, TB=ZN, Fungi=PAS/GMS, Parasites=Giemsa, Crypto=India ink" },
          { text: "ZN Stain Organisms", explanation: "Mycobacterium tuberculosis, M. leprae, Nocardia, Cryptosporidium" }
        ],
        keyPoints: [
          "Gram stain: most widely used bacterial identification in clinical labs",
          "ZN stain: high specificity for tuberculosis (TB is reportable)",
          "Heat fixation (flaming) kills organisms and adheres them to slide",
          "Thick vs thin blood films: thick for screening, thin for identification",
          "Fluorescence microscopy increases sensitivity for acid-fast organisms",
          "Immunofluorescence staining for Chlamydia, Legionella, viral pathogens"
        ],
        textbookRefs: [
          { book: "Clinical Microbiology: A Guide to Diagnosis and Management by Cimolai", chapter: "Microscopy", edition: "2nd" },
          { book: "Laboratory Diagnosis of Infectious Diseases by Maheshwari", chapter: "Staining Techniques", edition: "1st" }
        ]
      },
      {
        layer: 4,
        slug: "microscopy-staining-exam-prep",
        title: "Microscopy & Staining - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield examination content on staining procedures, microscope parts, and diagnostic applications.",
        contentMd: "# Examination Focus: Microscopy & Staining\n\n## Gram Stain Procedure\n1. Heat fixation on slide\n2. Crystal violet (1 minute)\n3. Gram iodine (1 minute) - mordant\n4. Acetone or acetone-alcohol (a few seconds) - decolorizer\n5. Safranin (30 seconds) - counterstain\n\nGram-positive appear purple (thick PG), Gram-negative appear pink (thin PG).\n\n## Ziehl-Neelsen Stain\n1. Carbolfuchsin with heat (steaming 5 minutes)\n2. Decolorize with acid-alcohol or HCl-alcohol\n3. Methylene blue counterstain\nAcid-fast organisms: red (hold fuchsin); non-acid-fast: blue (methylene blue).\n\n## Microscope Care & Resolution\nNumerical aperture (NA) of 40x objective = 0.65; 100x oil = 1.4. Resolution = 0.61 × wavelength / NA. Kohler illumination ensures optimal imaging. Clean lenses with lens paper and xylene, not acetone.",
        mnemonics: [
          { text: "Gram Stain Mnemonic", explanation: "CVIASs: Crystal Violet, Iodine, Alcohol (decolorize), Safranin" },
          { text: "Resolution Improves With", explanation: "Shorter wavelength (UV < visible), Higher NA (oil > air), Better optics" }
        ],
        keyPoints: [
          "Gram-positive bacteria have thick peptidoglycan layer (retains CV-I complex)",
          "Gram-negative bacteria have thin peptidoglycan + outer membrane (loses CV-I)",
          "Decolorization step critical: timing determines results",
          "Acid-fast organisms have mycolic acids (waxy layer)",
          "ZN stain temperature important: steam for 5 minutes with carbolfuchsin",
          "100x oil immersion doubles numerical aperture vs dry objectives"
        ],
        textbookRefs: [
          { book: "Textbook of Microbiology by Ananthanarayan & Paniker", chapter: "Microscopy & Staining", edition: "10th" },
          { book: "Clinical Microbiology Procedures Handbook by Garcia et al.", chapter: "Microscopy", edition: "4th" }
        ]
      },
      {
        layer: 5,
        slug: "microscopy-staining-active-recall",
        title: "Microscopy & Staining - Active Recall",
        estimatedMinutes: 20,
        summary: "Self-assessment questions on staining procedures and microscopy interpretation.",
        contentMd: "# Active Recall Questions\n\n## Question 1: Gram Stain Interpretation\nYou observe a sputum sample under microscope after Gram staining. You see purple cocci in clusters. Identify the organism and its likely clinical significance.\n\nAnswer: Staphylococcus aureus (Gram-positive cocci in clusters). Clinical significance: potential respiratory pathogen, consider respiratory infection. Antibiotic sensitivity testing recommended.\n\n## Question 2: Staining Problem\nDuring a Gram staining procedure, you forgot to add iodine. What would be the expected result?\n\nAnswer: Without mordant (iodine), the crystal violet-cell wall complex would be weak. Both Gram-positive and Gram-negative cells would decolorize more easily, resulting in many bacteria appearing pink or unclear. Iodine is essential for formation of large CV-I complex that Gram-positive cell walls can retain.\n\n## Question 3: ZN Stain Interpretation\nA sputum sample shows acid-fast positive bacilli in ZN staining. What further tests would confirm tuberculosis diagnosis?\n\nAnswer: Culture on Lowenstein-Jensen or MGIT media (gold standard), GeneXpert MTB/RIF PCR (rapid, WHO-recommended), TB antigen tests. ZN staining shows mycobacteria but not species; additional testing confirms M. tuberculosis.",
        mnemonics: [
          { text: "Staining Artifact Prevention", explanation: "Proper fixation = no cell distortion, Correct decolorization time = accurate results, Correct stain concentration = proper coloring" },
          { text: "Gram-Stain Result Troubleshooting", explanation: "All pink = over-decolorization or Gram-neg; All purple = under-decolorization or Gram-pos" }
        ],
        keyPoints: [
          "Gram stain timing critical: crystal violet 1 min, iodine 1 min, decolorizer 3-10 sec",
          "Over-decolorization = all pink (false negative Gram-positive)",
          "Under-decolorization = all purple (false positive Gram-positive)",
          "ZN stain requires heating to drive carbolfuchsin into spores",
          "Oil immersion must use appropriate lens (100x only)",
          "Always include positive and negative control slides"
        ],
        textbookRefs: [
          { book: "Laboratory Diagnosis of Infectious Diseases by Maheshwari", chapter: "Staining Procedures", edition: "1st" },
          { book: "Microbiology Laboratory Manual by Leboffe & Pierce", chapter: "Microscopy & Staining", edition: "3rd" }
        ]
      }
    ]
  },
  {
    topicCode: "MI-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "bacterial-growth-culture-foundation",
        title: "Bacterial Growth & Culture - Foundation",
        estimatedMinutes: 20,
        summary: "Basic principles of bacterial growth, culture media types, and requirements for cultivation.",
        contentMd: "# Bacterial Growth & Culture Fundamentals\n\n## Bacterial Growth Phases\nLag phase (adjustment period, no division), Log/Exponential phase (maximum growth rate, bacterial doubling time), Stationary phase (growth rate equals death rate), Death/Decline phase (more cells die than divide).\n\n## Culture Media Types\nBased on physical state: Solid (agar plates), Semi-solid (agar with 0.3-0.5% agar), Liquid (broth). Based on chemical composition: Defined/Synthetic (known chemical composition), Complex/Undefined (ingredients not precisely known). Based on function: General-purpose (supports most organisms), Enriched (added nutrients), Enriched selective (inhibits unwanted organisms), Differential (identifies organisms).\n\n## Growth Requirements\nCarbon source (organic molecules), nitrogen source (amino acids, nitrates), inorganic salts (phosphorus, sulfur, iron), growth factors (vitamins for auxotrophs), oxygen (aerobic, anaerobic, facultative), pH (typically 6.5-7.5), temperature (psychrophiles, mesophiles, thermophiles).",
        mnemonics: [
          { text: "Growth Phases (mnemonic: L-E-S-D)", explanation: "Lag (adaptation), Exponential (doubling), Stationary (equilibrium), Decline (death)" },
          { text: "Media Classification", explanation: "Physical: Solid/Liquid; Chemical: Defined/Complex; Functional: General/Selective/Differential" }
        ],
        keyPoints: [
          "Log phase bacteria have maximum growth rate and fastest doubling time",
          "Doubling time varies by organism (20 min for E. coli to hours for mycobacteria)",
          "Agar is polysaccharide from seaweed; solidifies at ~40°C",
          "Complex media preferred when exact composition not critical",
          "Defined media used for research and growth factor studies",
          "Selective media contain inhibitory substances for unwanted organisms"
        ],
        textbookRefs: [
          { book: "Textbook of Microbiology by Ananthanarayan & Paniker", chapter: "Bacterial Growth & Culture", edition: "10th" },
          { book: "Prescott's Microbiology by Willey et al.", chapter: "Growth of Microorganisms", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "bacterial-growth-culture-mechanism",
        title: "Bacterial Growth & Culture - Mechanism",
        estimatedMinutes: 25,
        summary: "Biochemical mechanisms of bacterial growth, nutrient uptake, and population dynamics.",
        contentMd: "# Mechanisms of Bacterial Growth\n\n## Nutrient Uptake\nPassive transport (diffusion across concentration gradient), Facilitated diffusion (channel proteins), Active transport (energy-dependent pump), Group translocation (phosphotransferase system for sugars). Specific carrier proteins recognize and transport nutrients.\n\n## Growth Rate Kinetics\nBacterial growth follows exponential (or log) kinetics: N(t) = N₀ × e^(μt), where μ is specific growth rate. Doubling time (generation time) = ln(2)/μ. Growth rate depends on nutrient availability, temperature, pH, and oxygen availability.\n\n## Yield and Efficiency\nYield coefficient (Y) = grams of biomass / grams of substrate consumed. Energy yield differs: aerobic respiration (38 ATP/glucose) >> anaerobic fermentation (2 ATP/glucose). Higher yields achieved with oxidative metabolism.\n\n## Continuous vs Batch Culture\nBatch culture is closed system (finite nutrients); Continuous culture (chemostat) maintains nutrient limitation and steady-state growth. Chemostats used for research and industrial production.",
        mnemonics: [
          { text: "Growth Equation", explanation: "N(t) = N₀ × 2^(t/g), where g = generation time (doubling time)" },
          { text: "Energy Yield", explanation: "Aerobic respiration >> Fermentation; O₂ availability critical for growth efficiency" }
        ],
        keyPoints: [
          "Specific growth rate (μ) = (ln N₂ - ln N₁)/(t₂ - t₁)",
          "E. coli doubling time: ~20 minutes in optimal conditions",
          "Nutrient limitation shifts growth to stationary phase",
          "pH changes from acid production during growth",
          "Accumulation of metabolic waste causes decline phase",
          "Growth rate follows Monod kinetics: μ = (μmax × S)/(Ks + S)"
        ],
        textbookRefs: [
          { book: "Biochemistry by Lehninger et al.", chapter: "Bacterial Metabolism", edition: "8th" },
          { book: "Molecular Biology of the Gene by Watson et al.", chapter: "Growth & Gene Regulation", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "bacterial-growth-culture-clinical",
        title: "Bacterial Growth & Culture - Clinical",
        estimatedMinutes: 30,
        summary: "Clinical cultivation techniques, culture conditions for common pathogens, and diagnostic culture methods.",
        contentMd: "# Clinical Culture Techniques\n\n## Common Culture Media in Clinical Labs\nBlood Agar (enriched, shows hemolysis patterns), MacConkey Agar (selective/differential for Gram-negatives, lactose fermentation), Chocolate Agar (for Haemophilus, Neisseria), Sabouraud Dextrose Agar (for fungi), Lowenstein-Jensen (for mycobacteria). Each medium selects for specific organisms and provides identifying characteristics.\n\n## Specimen Culture & Incubation\nBlood cultures from bacteremia patients (aerobic and anaerobic bottles). Sputum/respiratory samples on appropriate media based on suspected organism. CSF on enriched media (chocolate agar, blood agar). Stool on selective media (MacConkey, HE agar). Anaerobic cultures require CO₂ incubator or anaerobic jar. Temperature: 35-37°C for human pathogens.\n\n## Colony Characteristics\nMorphology (size, shape, surface), Color (pigmentation), Hemolysis (alpha/beta/gamma on blood agar), Lactose fermentation (on MacConkey). These help presumptive identification before biochemical/molecular confirmation.",
        mnemonics: [
          { text: "Culture Media Selection", explanation: "Blood=5% CO₂, Respiratory=regular air, CSF=enriched+CO₂, Anaerobes=anaerobic jar" },
          { text: "Hemolysis Types", explanation: "Alpha=green/translucent (Streptococcus viridans), Beta=clear zone (S. pyogenes), Gamma=no change (E. faecalis)" }
        ],
        keyPoints: [
          "Blood cultures require 2 sets from different sites (assess contamination)",
          "Incubation time varies: most bacteria 24-48 hours, mycobacteria weeks to months",
          "CO₂ enhances growth of Neisseria, Haemophilus, Streptococcus",
          "Anaerobic organisms need CO₂ but no free oxygen (use anaerobic jar)",
          "Temperature control critical: 35-37°C for human pathogens",
          "Colony morphology helps presumptive identification for rapid reporting"
        ],
        textbookRefs: [
          { book: "Clinical Microbiology: A Guide to Diagnosis & Management by Cimolai", chapter: "Culture Methods", edition: "2nd" },
          { book: "Bailey & Scott's Diagnostic Microbiology by Mahon et al.", chapter: "Culture Techniques", edition: "14th" }
        ]
      },
      {
        layer: 4,
        slug: "bacterial-growth-culture-exam-prep",
        title: "Bacterial Growth & Culture - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield examination content on growth kinetics, media selection, and culture interpretation.",
        contentMd: "# Examination Focus: Bacterial Growth & Culture\n\n## Growth Kinetics Calculation\nDoubling time: g = 0.301 × t / (log N₂ - log N₁). Log phase population doubles at regular intervals. Growth rate constant (μ) = (ln 2) / generation time ≈ 0.693 / g.\n\n## Media Characteristics\nDifferential media: contain indicators (pH, reducers) to identify organisms (MacConkey for lactose fermentation, blood agar for hemolysis). Selective media: inhibit unwanted organisms (Thayer-Martin for Neisseria with antibiotics). Enrichment media: enhance growth of target organism (thioglycollate for anaerobes).\n\n## Incubation Requirements\nAerobic bacteria: 35-37°C, ambient air (5% CO₂ beneficial for some). Anaerobes: 35-37°C, anaerobic conditions (CO₂ present, no O₂). Mycobacteria: 35-37°C (slow growth, 2-8 weeks). Fungi: 25-30°C preferred (slower growth than bacteria). Time: 24-48 hours standard, longer for slow-growing organisms.",
        mnemonics: [
          { text: "Media Selection Algorithm", explanation: "Identify likely organism → Select differential/selective media → Check temperature/atmosphere requirements" },
          { text: "Presumptive Identification", explanation: "Gram stain morphology + colony appearance + hemolysis + growth on specific media" }
        ],
        keyPoints: [
          "Exponential growth: N = N₀ × 2^(t/g)",
          "Stationary phase reached when nutrient depletion or waste accumulation occurs",
          "MacConkey agar: lactose fermenters (pink) vs non-fermenters (colorless)",
          "Blood agar: hemolysis indicates virulence factor (streptolysin)",
          "Anaerobic jar uses pyrogallol + NaOH to absorb O₂",
          "GasPak system: chemical CO₂/H₂ generation for anaerobic culture"
        ],
        textbookRefs: [
          { book: "Textbook of Microbiology by Ananthanarayan & Paniker", chapter: "Bacterial Growth", edition: "10th" },
          { book: "Clinical Microbiology Procedures Handbook by Garcia et al.", chapter: "Specimen Collection & Culture", edition: "4th" }
        ]
      },
      {
        layer: 5,
        slug: "bacterial-growth-culture-active-recall",
        title: "Bacterial Growth & Culture - Active Recall",
        estimatedMinutes: 20,
        summary: "Self-assessment on growth kinetics, media selection, and culture interpretation.",
        contentMd: "# Active Recall Questions\n\n## Question 1: Growth Calculation\nA bacterial culture had 1×10⁵ CFU/mL at start. After 2 hours, population is 1×10⁷ CFU/mL. Calculate the generation time (doubling time).\n\nAnswer: Using formula: g = 0.301 × t / (log N₂ - log N₁) = 0.301 × 120 min / (log 10⁷ - log 10⁵) = 36.12 / 2 = 18 minutes.\n\n## Question 2: Media Selection\nA 2-year-old with fever and petechial rash. Suspected meningococcemia. What culture media and incubation conditions would you use for CSF?\n\nAnswer: Chocolate agar and blood agar plates. Incubate at 35-37°C with 5% CO₂ for 24-48 hours. Thayer-Martin selective medium if obtaining from genital/respiratory sites. N. meningitidis requires enriched media and CO₂.\n\n## Question 3: Colony Interpretation\nOn blood agar, you observe small, transparent colonies with beta-hemolysis. Gram stain shows cocci in chains. Identify probable organism.\n\nAnswer: Streptococcus pyogenes (Group A Streptococcus). Beta-hemolysis (complete clear zones) is characteristic. Chains of Gram-positive cocci confirm. Further confirmation: Bacitracin sensitivity (inhibition around disk).",
        mnemonics: [
          { text: "Generation Time Factors", explanation: "Temperature ↑ (optimal range), Nutrients optimal, pH optimal → g ↓" },
          { text: "Growth Phase Characteristics", explanation: "Lag=RNA synthesis ↑; Log=protein synthesis ↑, max rate; Stationary=maintenance energy" }
        ],
        keyPoints: [
          "E. coli generation time: 20 minutes optimal; ~24 hours in stationary",
          "Mycobacterium tuberculosis: 15-20 hours generation time (slow grower)",
          "Anaerobes need <2% O₂; use anaerobic jar or incubator",
          "Media must have appropriate pH buffer (usually phosphate buffer)",
          "Selective media effectiveness depends on inhibitor concentration",
          "Contamination risk: handle cultures aseptically, use proper hood, disinfect work area"
        ],
        textbookRefs: [
          { book: "Prescott's Microbiology by Willey et al.", chapter: "Growth Kinetics", edition: "10th" },
          { book: "Laboratory Diagnosis of Infectious Diseases by Maheshwari", chapter: "Culture & Identification", edition: "1st" }
        ]
      }
    ]
  }
];
