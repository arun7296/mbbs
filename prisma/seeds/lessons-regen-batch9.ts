export const regenBatch9Lessons = [
  {
    topicCode: "PY-MOD-02-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "wbc-immunity-foundation",
        title: "White Blood Cells & Immunity - Foundation",
        estimatedMinutes: 25,
        summary: "Overview of WBC types, normal counts, and basic immune functions in health and disease.",
        contentMd: "# White Blood Cells & Immunity\n\n## WBC Classification\nWBCs divided into granulocytes (neutrophils, eosinophils, basophils) and agranulocytes (lymphocytes, monocytes).\n\n## Normal WBC Counts\nTotal WBC: 4500-11000/µL. Neutrophils 40-75%, Lymphocytes 20-40%, Monocytes 2-10%, Eosinophils 1-4%, Basophils 0-1%.\n\n## Functions\nDefense against pathogens, phagocytosis, immune response initiation, cytokine production.",
        mnemonics: [
          { text: "GRAN (Granulocytes)", explanation: "Granules visible: Neutrophils, Eosinophils, Basophils" },
          { text: "LyMo (Lymphocytes, Monocytes)", explanation: "Agranulocytes, no visible granules" }
        ],
        keyPoints: [
          "Neutrophils are most abundant WBC",
          "Band cells indicate infection severity",
          "Left shift = immature neutrophil release"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Blood and Body Fluids", edition: "8th" },
          { book: "Guyton", chapter: "Resistance to Infection", edition: "13th" }
        ]
      },
      {
        layer: 2,
        slug: "wbc-immunity-mechanism",
        title: "White Blood Cells & Immunity - Mechanism",
        estimatedMinutes: 35,
        summary: "Detailed mechanisms of WBC production, maturation, function, and immune response pathways.",
        contentMd: "# WBC Development and Mechanisms\n\n## Hematopoiesis\nGranulopoiesis: Myeloblast → Promyelocyte → Myelocyte → Metamyelocyte → Band → Mature neutrophil (7-10 days).\n\n## Neutrophil Function\n1. Chemotaxis via IL-8, complement C5a\n2. Phagocytosis with NADPH oxidase\n3. Degranulation releasing proteases\n4. NETosis (programmed cell death)\n\n## Lymphocyte Types\nT-cells (thymus-derived): CD4+ helper, CD8+ cytotoxic. B-cells (bone marrow): antibody production. NK cells: viral surveillance.\n\n## Monocyte Role\nTissue macrophages, antigen presentation, cytokine production (TNF, IL-6, IL-1).",
        mnemonics: [
          { text: "MMMP (Myeloblast-Promyelocyte-Myelocyte-Metamyelocyte)", explanation: "Granulopoiesis early stages" },
          { text: "CD4 Helper, CD8 Killer", explanation: "T-cell subsets and functions" }
        ],
        keyPoints: [
          "G-CSF drives neutrophil production",
          "Neutrophils live 6-8 hours in circulation",
          "Macrophages derived from monocytes",
          "T-cells undergo selection in thymus"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Blood and Body Fluids", edition: "8th" },
          { book: "Robbins", chapter: "Hemostasis and Blood Disorders", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "wbc-immunity-clinical",
        title: "White Blood Cells & Immunity - Clinical",
        estimatedMinutes: 40,
        summary: "Clinical presentation of WBC disorders and immune dysfunctions in Indian clinical settings.",
        contentMd: "# Clinical Manifestations of WBC Disorders\n\n## Leukopenia (WBC <4500/µL)\nCauses: Chemotherapy, HIV, SLE, aplastic anemia, sepsis.\nFeatures: Recurrent infections, oral ulcers, fever.\n\n## Leukocytosis (WBC >11000/µL)\nInfections: Bacterial, viral, TB. Stress, smoking, exercise.\nLeukemia: Blast cells on smear, organomegaly.\n\n## Immunodeficiency\nPrimary: DiGeorge (T-cell), SCID (T+B cells), IgA deficiency.\nSecondary: HIV/AIDS (CD4 <200), malnutrition, corticosteroids.\n\n## Lymphoid Malignancies\nHodgkin lymphoma: B symptoms, mediastinal mass.\nNHL: Extranodal involvement, Indian variants (Burkitt, diffuse large B-cell).",
        mnemonics: [
          { text: "LINFECT (Leukopenia = INFECTions)", explanation: "Low WBC = infection risk" },
          { text: "TB + HIV = LINFECT++", explanation: "Tuberculosis common in Indian immunocompromised" }
        ],
        keyPoints: [
          "TB is leading cause of secondary immunodeficiency in India",
          "Stress leukocytosis is benign",
          "Left shift indicates severe infection",
          "Blast cells never normal in peripheral blood"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Blood Disorders", edition: "8th" },
          { book: "Harrison", chapter: "Hematologic Malignancies", edition: "21st" },
          { book: "Parikh", chapter: "Hematology", edition: "5th" }
        ]
      },
      {
        layer: 4,
        slug: "wbc-immunity-exam-prep",
        title: "White Blood Cells & Immunity - Exam Prep",
        estimatedMinutes: 30,
        summary: "High-yield facts and common exam patterns for WBC and immunity questions.",
        contentMd: "# Exam-Focused WBC & Immunity\n\n## High-Yield Facts\n- Normal WBC: 4500-11000/µL, shift to left = infection\n- Relative lymphocytosis in viral illness\n- Absolute eosinophilia >1500: parasites, asthma, drugs\n- Basophils elevated in CML (myeloproliferative)\n- Monocytes elevated in TB, fungal, chronic infection\n\n## NMC Competencies\nNMC-A1.4: Interpret blood tests. NMC-B1.2: Recognize immune dysfunction.\n\n## Common Exam Patterns\n1. \"Shift to left\" = immature neutrophils = infection severity\n2. \"Atypical lymphocytes\" in EBV infection\n3. Hypersegmented neutrophils in B12/folate deficiency\n4. \"Toxic granules\" in severe infection",
        mnemonics: [
          { text: "ASS (Absolute, Shift, Severity)", explanation: "Three parts of WBC interpretation" },
          { text: "EBV → Atypical lymphocytes", explanation: "Activated T-cells responding to infection" }
        ],
        keyPoints: [
          "Relative vs absolute counts matter",
          "Young WBCs = serious infection",
          "Eosinophilia 1-4% normal, >1500 absolute is abnormal",
          "Basophils rare but important in CML"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Quick Reference", edition: "8th" }
        ]
      },
      {
        layer: 5,
        slug: "wbc-immunity-recall",
        title: "White Blood Cells & Immunity - Active Recall",
        estimatedMinutes: 15,
        summary: "Spaced repetition prompts and active recall questions for long-term retention.",
        contentMd: "# Active Recall: WBC & Immunity\n\n## Recall Questions\n1. List 5 causes of absolute neutrophilia and 3 causes of neutropenia.\n2. What is the normal half-life of circulating neutrophils? Where do 90% go?\n3. Describe the steps of neutrophil phagocytosis and killing mechanisms.\n4. CD4 count <200 in HIV = highest risk OI? Why TB in India?\n5. Differentiate relative vs absolute lymphocytosis.\n6. What blood findings suggest acute leukemia vs reactive leukocytosis?\n7. Explain left shift and toxic changes in sepsis.\n8. Indian context: Why is TB the leading OI in AIDS here?",
        mnemonics: [
          { text: "PHAGOCYTOSIS: Chemo-Adhesion-Ingestion-Killing-Exocytosis", explanation: "Five steps of neutrophil function" }
        ],
        keyPoints: [
          "Reproduce differential count from memory",
          "Link WBC findings to clinical presentation",
          "Connect immunodeficiency to OI prevalence in India"
        ],
        textbookRefs: []
      }
    ]
  },
  {
    topicCode: "PY-MOD-02-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "hemostasis-foundation",
        title: "Hemostasis & Coagulation - Foundation",
        estimatedMinutes: 25,
        summary: "Basic concepts of blood clotting, coagulation cascade, and normal hemostasis.",
        contentMd: "# Hemostasis and Coagulation\n\n## Hemostasis Overview\nProcess preventing blood loss: primary hemostasis (platelets), secondary (coagulation), tertiary (fibrinolysis).\n\n## Three Phases\n1. Vascular response: Vasoconstriction\n2. Platelet aggregation: ADP, thromboxane A2\n3. Coagulation cascade: Extrinsic, intrinsic, common pathways\n\n## Key Factors\nFibrinogen (Factor I), Prothrombin (II), Factor V, VII, VIII, IX, X, XI, XII, XIII.",
        mnemonics: [
          { text: "PVK (Prothrombin, Vitamin K factors)", explanation: "Factors II, VII, IX, X need vitamin K" },
          { text: "1-5-8-13 (Fibrinogen, V, VIII, XIII)", explanation: "Factors not requiring vitamin K" }
        ],
        keyPoints: [
          "Coagulation cascade has 3 pathways",
          "PT tests extrinsic pathway",
          "aPTT tests intrinsic pathway",
          "Thrombin time tests fibrin formation"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Hemostasis", edition: "8th" },
          { book: "Guyton", chapter: "Hemostasis and Blood Coagulation", edition: "13th" }
        ]
      },
      {
        layer: 2,
        slug: "hemostasis-mechanism",
        title: "Hemostasis & Coagulation - Mechanism",
        estimatedMinutes: 40,
        summary: "Detailed mechanisms of coagulation cascade, platelet function, and fibrinolysis.",
        contentMd: "# Coagulation Mechanisms\n\n## Extrinsic Pathway\nTissue Factor (TF) + Factor VII → activates Factor X (PT tests this).\n\n## Intrinsic Pathway\nFactor XII → XI → IX (with VIII) → X (aPTT tests through here).\n\n## Common Pathway\nFactor X → II (prothrombin) → IIa (thrombin) → Fibrinogen → Fibrin + FDPs.\n\n## Platelet Aggregation\n1. Adhesion via vWF\n2. Activation by ADP, thrombin\n3. Aggregation via fibrinogen bridges\n4. Granule secretion (dense bodies, alpha granules)\n\n## Fibrinolysis\nPlasminogen → plasmin (via tPA, urokinase) → fibrin degradation → D-dimer increase.",
        mnemonics: [
          { text: "EXTRINSIC = 7 (TF + VII)", explanation: "One factor, quick pathway" },
          { text: "INTRINSIC = 12-11-9-8 (numbers)", explanation: "Multiple factors, slower" },
          { text: "COMMON = 10-2-1-13 (merges pathways)", explanation: "Final common pathway" }
        ],
        keyPoints: [
          "Thrombin is most potent activator",
          "Protein C anticoagulant needs vWF",
          "tPA degrades fibrin (used in MI)",
          "D-dimer elevated in thrombosis/DIC"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Hemostasis", edition: "8th" },
          { book: "Robbins", chapter: "Hemostasis", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "hemostasis-clinical",
        title: "Hemostasis & Coagulation - Clinical",
        estimatedMinutes: 45,
        summary: "Clinical coagulation disorders and bleeding management in Indian healthcare settings.",
        contentMd: "# Clinical Coagulation Disorders\n\n## Bleeding Disorders\nHemophilia A (Factor VIII deficiency): X-linked, severe spontaneous bleeding. Hemophilia B (Factor IX): less common.\nVon Willebrand disease: most common inherited disorder, mucosal bleeding.\n\n## Acquired Defects\nVitamin K deficiency: liver disease, antibiotics, malabsorption. DIC: sepsis, obstetric causes, TTP.\n\n## Thrombotic Disorders\nThromboembolic events: immobility, surgery, cancer. Thrombophilia: Factor V Leiden, prothrombin G20210A.\n\n## Indian Clinical Context\nThalassemia major: transfusion iron overload. Malaria + DIC. TB + vitamin K deficiency. Snake bite coagulopathy.\n\n## Management\nWarfarin: vitamin K antagonist (INR monitoring). Heparin: unfractionated (aPTT) or LMWH (anti-Xa). DOACs.",
        mnemonics: [
          { text: "H-O-S-S (Hemophilia, Obstetrics, Surgery, Sepsis)", explanation: "Common bleeding vs thrombotic causes" },
          { text: "V-I-T (Vitamin K deficiency, coagulopathy, malabsorption)", explanation: "Causes in India" }
        ],
        keyPoints: [
          "Hemophilia A much more common than B",
          "DIC = consumption of all factors",
          "Malaria complicated by DIC in India",
          "INR 2-3 for most indications with warfarin"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Bleeding Disorders", edition: "8th" },
          { book: "Harrison", chapter: "Hemorrhagic Disorders", edition: "21st" },
          { book: "Parikh", chapter: "Coagulation Disorders", edition: "5th" }
        ]
      },
      {
        layer: 4,
        slug: "hemostasis-exam-prep",
        title: "Hemostasis & Coagulation - Exam Prep",
        estimatedMinutes: 30,
        summary: "High-yield coagulation facts and diagnostic test interpretation.",
        contentMd: "# Exam-Focused Hemostasis\n\n## Test Interpretation\nPT elevated: extrinsic/common pathway defect (Factors II, V, VII, X, fibrinogen, warfarin).\naPTT elevated: intrinsic/common pathway (Factors VIII, IX, XI, XII, heparin).\nBoth elevated: common pathway or multiple defects (DIC, liver disease).\nThrombin time elevated: hypofibrinogenemia, dysfibrinogenemia, heparin.\n\n## NMC Competencies\nNMC-A1.4: Interpret coagulation tests. NMC-B1.1: Manage bleeding.\n\n## Common Exam Patterns\n1. Prolonged PT alone = Factor VII or warfarin\n2. Prolonged aPTT alone = hemophilia or heparin\n3. Prolonged both = liver disease or DIC\n4. Normal PT/aPTT + bleeding = vWD or platelet disorder",
        mnemonics: [
          { text: "PT-aPTT-TT (PT=Extrinsic, aPTT=Intrinsic, TT=Fibrin)", explanation: "Test interpretation" },
          { text: "1-5-Common (VII elevated=PT alone)", explanation: "PT-only defects" }
        ],
        keyPoints: [
          "Differentiate inherited vs acquired",
          "Know factor levels needed for hemostasis",
          "INR for warfarin monitoring (0.8-1.1 normal)",
          "aPTT for heparin (1.5-2.5x baseline)"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Hemostasis Quick Ref", edition: "8th" }
        ]
      },
      {
        layer: 5,
        slug: "hemostasis-recall",
        title: "Hemostasis & Coagulation - Active Recall",
        estimatedMinutes: 15,
        summary: "Spaced repetition for coagulation cascade and bleeding disorder diagnosis.",
        contentMd: "# Active Recall: Hemostasis\n\n## Recall Questions\n1. Draw the coagulation cascade from memory (extrinsic, intrinsic, common).\n2. Which factors need vitamin K? Which are consumed in DIC?\n3. Interpret: PT prolonged, aPTT normal. Differential?\n4. How do warfarin and heparin work differently?\n5. vWD vs hemophilia A: distinguish on labs.\n6. Snake bite victim: DIC pattern of PT/aPTT/fibrinogen/D-dimer?\n7. What is critical factor level for hemostasis in major surgery?\n8. Malaria with DIC: which clotting factors fail first?",
        mnemonics: [
          { text: "COAGULATION ACRONYM: C-F-V-II-VII-VIII-IX-X-XI-XII-XIII", explanation: "All factors in order" }
        ],
        keyPoints: [
          "Reproduce factor cascade with mechanism",
          "Link lab findings to specific defects",
          "Connect Indian disease patterns to coagulation"
        ],
        textbookRefs: []
      }
    ]
  },
  {
    topicCode: "PY-MOD-02-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "blood-groups-foundation",
        title: "Blood Groups & Transfusion - Foundation",
        estimatedMinutes: 25,
        summary: "ABO and Rh blood group systems, typing, and basic transfusion principles.",
        contentMd: "# Blood Groups and Transfusion\n\n## ABO System\nType A: A antigen, anti-B antibody. Type B: B antigen, anti-A antibody. Type AB: both antigens, no antibodies (universal recipient). Type O: no antigens, both antibodies (universal donor).\n\n## Rh System\nRh-positive: D antigen present. Rh-negative: D antigen absent. Anti-D antibodies form after sensitization.\n\n## Blood Typing\nForward: patient RBCs + antisera (anti-A, anti-B). Reverse: patient serum + reagent RBCs.",
        mnemonics: [
          { text: "AB has both, O has none", explanation: "ABO antigen distribution" },
          { text: "O is donor, AB is recipient", explanation: "Universal types" }
        ],
        keyPoints: [
          "ABO incompatibility = immediate hemolysis",
          "Rh incompatibility = delayed (sensitization needed)",
          "Natural ABO antibodies are IgM (cold)",
          "Anti-D is IgG (warm)"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Blood Groups and Transfusion", edition: "8th" },
          { book: "Guyton", chapter: "Blood Types", edition: "13th" }
        ]
      },
      {
        layer: 2,
        slug: "blood-groups-mechanism",
        title: "Blood Groups & Transfusion - Mechanism",
        estimatedMinutes: 40,
        summary: "Immunology of blood groups, alloimmunization, and hemolytic transfusion reactions.",
        contentMd: "# Blood Group Immunology\n\n## Other Blood Group Systems\nMNS: M and N antigens. Kidd: Jka and Jkb (WAIHA in renal transplant). Duffy: Fya/Fyb (malaria susceptibility). Kell: K antigen.\n\n## Alloimmunization\nPrimary response (first exposure): IgM after 2-4 weeks. Secondary (reexposure): IgG rapid rise. Anti-D most common (Rh-negative transfused with Rh+).\n\n## Hemolytic Transfusion Reactions\nImmediate: ABO incompatibility (intravascular hemolysis, shock). Delayed: other systems (extravascular, spleen hemolysis).\n\n## Hemolytic Disease of Newborn\nRh incompatibility: sensitization during pregnancy/delivery. Anti-D prophylaxis prevents. ABO HDN milder (maternal IgG weak).",
        mnemonics: [
          { text: "IgM cold, IgG warm", explanation: "Antibody types in transfusion" },
          { text: "IMMEDIATE = ABO, DELAYED = others", explanation: "Reaction timing" }
        ],
        keyPoints: [
          "Duffy antigen affects malaria (blood group and infection link)",
          "Kidd antibodies cause severe WAIHA post-transplant",
          "HDN: Rh>ABO in severity",
          "Anti-D given at 500 IU/mL fetal RBCs"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Blood Groups", edition: "8th" },
          { book: "Robbins", chapter: "Hemolytic Anemias", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "blood-groups-clinical",
        title: "Blood Groups & Transfusion - Clinical",
        estimatedMinutes: 45,
        summary: "Clinical transfusion practice, complications, and Indian blood banking standards.",
        contentMd: "# Clinical Transfusion Management\n\n## Transfusion Indications\nAcute hemorrhage: Hb <7 g/dL (or <8 in cardiac disease). Chronic anemia: Hb <5-6 g/dL. Platelets: <10000 or <20000 with bleeding.\n\n## Blood Products\nWhole blood: rare (RBC + plasma + platelets). Packed RBC: for anemia. FFP: coagulation factors. Cryoprecipitate: fibrinogen. Platelets: thrombocytopenia.\n\n## Transfusion Reactions\nImmediate hemolytic: fever, chills, DIC, hemoglobinuria. TRALI (transfusion-related lung injury): dyspnea, pulmonary edema. TACO (transfusion-associated circulatory overload).\n\n## Indian Context\nHigh transfusion demand (TB, malaria, surgery). Blood donation safety (HIV, HBV, HCV screening mandatory). Rare blood units in India difficult to obtain. Autotransfusion in elective surgery.\n\n## Complications\nIron overload: >20 units transfused. Infection risk. Hypothermia (cold blood). Hyperkalemia (old blood).",
        mnemonics: [
          { text: "FEVER = HEMOLYSIS (in transfusion)", explanation: "Immediate reaction sign" },
          { text: "D-I-N (Donation, Infectious, Noninfectious)", explanation: "Transfusion complication types" }
        ],
        keyPoints: [
          "ABO-compatible ALWAYS (life-threatening if not)",
          "Rh-compatible for Rh- patients with D-antigen prophylaxis",
          "Type & Cross mandatory before transfusion",
          "Keep blood at 1-6°C, use within 42 days PRBC"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Transfusion", edition: "8th" },
          { book: "Harrison", chapter: "Hemolytic Anemias", edition: "21st" },
          { book: "Parikh", chapter: "Blood Banking", edition: "5th" }
        ]
      },
      {
        layer: 4,
        slug: "blood-groups-exam-prep",
        title: "Blood Groups & Transfusion - Exam Prep",
        estimatedMinutes: 30,
        summary: "High-yield blood group facts and transfusion decision-making.",
        contentMd: "# Exam-Focused Blood Groups\n\n## Key Facts\nABO typing: forward + reverse (confirmatory). Weak D: test with anti-D (may need special handling). O Rh- is universal donor (RBC). AB plasma is universal.\n\n## NMC Competencies\nNMC-A1.5: Transfuse blood safely. NMC-C1.1: Manage acute hemorrhage.\n\n## Common Exam Patterns\n1. \"Fever + hemoglobinuria during transfusion\" = ABO mismatch\n2. \"Jaundice after transfusion\" = delayed hemolytic reaction\n3. \"Rh- woman pregnant\" = anti-D at 28 weeks + postpartum\n4. \"O Rh- blood\" = universal donor (RBC only)\n5. \"AB plasma\" = universal plasma\n\n## Rare Bloods\nDuffy negative (Fy-): common in African descent (India via migration). Kell negative (K-): alloimmunized patients.",
        mnemonics: [
          { text: "O-AB Rule (O=Donor, AB=Recipient)", explanation: "Universal types" },
          { text: "Rh- + D-antigen = anti-D prophylaxis", explanation: "Sensitization prevention" }
        ],
        keyPoints: [
          "Type and crossmatch take 30-45 min",
          "Type and screen sufficient if no crossmatch needed",
          "Emergency O Rh- without testing",
          "Anti-D within 72 hours of Rh+ transfusion"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Blood Groups Quick Ref", edition: "8th" }
        ]
      },
      {
        layer: 5,
        slug: "blood-groups-recall",
        title: "Blood Groups & Transfusion - Active Recall",
        estimatedMinutes: 15,
        summary: "Spaced repetition for blood banking and transfusion decisions.",
        contentMd: "# Active Recall: Blood Groups\n\n## Recall Questions\n1. Draw ABO/Rh grid with antigens and antibodies from memory.\n2. How does forward typing differ from reverse typing?\n3. Rh- nonpregnant woman gets Rh+ PRBC: what happens immediately and at 28 weeks?\n4. Duffy antigen connection to malaria: clinical relevance?\n5. Explain immediate vs delayed hemolytic transfusion reaction.\n6. Type O woman, Rh+: can receive what blood types?\n7. HDN severity: Rh vs ABO incompatibility—why the difference?\n8. Blood product choice for acute hemorrhage vs chronic anemia?",
        mnemonics: [
          { text: "ABO RULE: Antigen on RBC, Antibody in plasma (opposite)", explanation: "Always opposite" }
        ],
        keyPoints: [
          "Know all ABO/Rh combinations",
          "Memorize transfusion product indications",
          "Link blood groups to geographic ancestry (Indian context)"
        ],
        textbookRefs: []
      }
    ]
  },
  {
    topicCode: "PY-MOD-02-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "anemias-foundation",
        title: "Anemias & Bleeding Disorders - Foundation",
        estimatedMinutes: 25,
        summary: "Classification of anemias by mechanism and basic bleeding disorder types.",
        contentMd: "# Anemias and Bleeding Disorders\n\n## Anemia Classification\nBy mechanism: blood loss, decreased production, increased destruction. By RBC size: microcytic, normocytic, macrocytic. Microcytic: iron deficiency, thalassemia, sideroblastic. Macrocytic: B12/folate, hypothyroidism. Normocytic: hemolytic, renal disease.\n\n## Bleeding Disorders\nVascular: scurvy, Ehlers-Danlos. Platelet: thrombocytopenia, platelet dysfunction. Coagulation: hemophilia, vWD.\n\n## Lab Markers\nReticulocyte count: bone marrow response. Peripheral smear: RBC morphology. Coagulation tests: PT, aPTT, TT.",
        mnemonics: [
          { text: "MICRO = Iron/Thal/Sidero", explanation: "Low MCV causes" },
          { text: "MACRO = B12/Folate/Hypo", explanation: "High MCV causes" }
        ],
        keyPoints: [
          "Hemoglobin <12 g/dL women, <13.5 men = anemia",
          "Reticulocyte count >2% = hemolysis or response",
          "MCV guides further workup"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Anemias", edition: "8th" },
          { book: "Robbins", chapter: "Hemolytic Anemias", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "anemias-mechanism",
        title: "Anemias & Bleeding Disorders - Mechanism",
        estimatedMinutes: 45,
        summary: "Pathophysiology of major anemias and bleeding disorder mechanisms.",
        contentMd: "# Anemia Pathophysiology\n\n## Iron Deficiency\nCauses: blood loss (GI bleed, heavy periods), malabsorption, poor intake. Lab: low ferritin, high TIBC, low iron, microcytic hypochromic. Mechanism: inadequate hemoglobin synthesis.\n\n## Hemolytic Anemias\nIntrinsic: hereditary spherocytosis, G6PD (oxidative stress), sickle cell. Extrinsic: autoimmune (AIHA, WAIHA), infection (malaria in India), transfusion reaction, DIC. Lab: high reticulocytes, high LDH, low haptoglobin, high indirect bilirubin.\n\n## B12/Folate Deficiency\nB12: pernicious anemia (intrinsic factor antibodies), dietary (vegetarian). Folate: malabsorption, methotrexate. Lab: macrocytic, hypersegmented neutrophils, methylmalonic acid (B12). Mechanism: impaired DNA synthesis.\n\n## Bleeding Mechanisms\nThrombocytopenia: decreased production (aplasia, chemo), increased destruction (ITP, DIC, splenomegaly), dilution (massive transfusion). Platelet dysfunction: aspirin, uremia, liver disease.",
        mnemonics: [
          { text: "I-T-L (Iron, TIBC, Ferritin)", explanation: "Iron deficiency labs" },
          { text: "RLD-BH (Reticulocytes-LDH-Indirect bili, low Haptoglobin)", explanation: "Hemolysis markers" }
        ],
        keyPoints: [
          "G6PD hemolysis after oxidative trigger (fava, sulfa, infections)",
          "Malaria + anemia common in India (intravascular + extravascular hemolysis)",
          "Sickle cell: sickling RBCs cause vaso-occlusion",
          "ITP: antibodies against platelet surface"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Anemias and Bleeding", edition: "8th" },
          { book: "Robbins", chapter: "Hemostasis and Hemolytic Anemias", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "anemias-clinical",
        title: "Anemias & Bleeding Disorders - Clinical",
        estimatedMinutes: 50,
        summary: "Clinical presentation and management of anemias in Indian context.",
        contentMd: "# Clinical Anemias Management\n\n## Iron Deficiency Anemia\nFeatures: fatigue, pallor, koilonychia, glossitis, dysphagia (Plummer-Vinson). Management: oral iron (ferrous sulfate) or IV if malabsorption. Monitor Hb response (increase 1-2 g/dL/month).\n\n## Thalassemia\nThalassemia major (homozygous): transfusion-dependent, splenomegaly, iron overload, cardiac complications. Thalassemia minor: asymptomatic, microcytosis. Genetic counseling in India (carrier frequency 1-15%).\n\n## Sickle Cell\nVaso-occlusive crisis: pain, acute chest syndrome, splenic infarction. Hemolytic crisis: high reticulocytes. Aplastic crisis: reticulocytopenia (parvovirus B19). Management: hydroxyurea, exchange transfusion, hydration.\n\n## G6PD Deficiency\nAcute hemolytic episode with oxidative trigger (fava beans, sulfa drugs, infections). Mediterranean and African variants. Indian prevalence 2-5%. Management: avoid triggers, supportive care.\n\n## ITP\nAcute (children, after infection): usually resolves. Chronic (adults): antiplatelet antibodies. Management: corticosteroids, IVIG, platelet transfusion if <10,000 with bleeding.\n\n## Indian Context\nThalassemia burden: ~3-5 million affected in India. G6PD: tribal populations affected. Malaria-induced hemolytic anemia. Nutritional anemia: common due to poverty.",
        mnemonics: [
          { text: "IRON: Ferrous better, food reduces absorption", explanation: "Iron supplement advice" },
          { text: "THALASSA = SEA (Mediterranean, African origin)", explanation: "Geography" }
        ],
        keyPoints: [
          "Splenomegaly extramedullary hematopoiesis in thalassemia",
          "Acute chest syndrome high mortality in sickle cell",
          "G6PD X-linked (males affected more)",
          "ITP diagnosis: low platelets, normal coagulation"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Anemias Clinical", edition: "8th" },
          { book: "Harrison", chapter: "Hemolytic Anemias", edition: "21st" },
          { book: "Parikh", chapter: "Hemolytic Anemias", edition: "5th" }
        ]
      },
      {
        layer: 4,
        slug: "anemias-exam-prep",
        title: "Anemias & Bleeding Disorders - Exam Prep",
        estimatedMinutes: 30,
        summary: "High-yield anemia facts and diagnostic algorithms.",
        contentMd: "# Exam-Focused Anemias\n\n## Diagnostic Approach\n1. Hemoglobin level\n2. MCV (micro/macro/normo)\n3. Reticulocyte count (response?)\n4. Peripheral smear\n5. Specific labs (iron, B12, folate, LDH, bilirubin)\n\n## NMC Competencies\nNMC-A1.3: Diagnose anemia. NMC-A1.5: Transfuse when needed.\n\n## High-Yield Patterns\n1. Microcytic + high reticulocytes after transfusion = hemolysis\n2. Macrocytic + hypersegmented neutrophils = B12 deficiency\n3. Spherocytes on smear + osmotic fragility = hereditary spherocytosis\n4. Schistocytes on smear = DIC, TTP, MAHA\n5. Target cells = liver disease or thalassemia\n6. Platelets <10,000 + normal coagulation = ITP\n\n## Common Mistakes\n- Reticulocyte count elevated in ALL anemias (is it high enough?)\n- Iron studies hard to interpret (ferritin can be normal in inflammation)\n- B12 normal but methylmalonic acid elevated = deficiency",
        mnemonics: [
          { text: "MCV Decision Tree (Micro/Macro/Normo → specific test)", explanation: "First step anemia workup" }
        ],
        keyPoints: [
          "Corrected reticulocyte count more useful than raw %",
          "Smear morphology guides diagnosis (spheres, sickle, targets)",
          "Folate deficiency in alcoholics common"
        ],
        textbookRefs: [
          { book: "BDC", chapter: "Anemias Quick Ref", edition: "8th" }
        ]
      },
      {
        layer: 5,
        slug: "anemias-recall",
        title: "Anemias & Bleeding Disorders - Active Recall",
        estimatedMinutes: 15,
        summary: "Spaced repetition for anemia classification and management.",
        contentMd: "# Active Recall: Anemias\n\n## Recall Questions\n1. Classify anemias 3 ways: by mechanism, RBC size, reticulocyte response.\n2. Microcytic anemia workup: if iron studies normal, next step?\n3. Macrocytic without hypersegmented neutrophils: differential?\n4. High reticulocytes but Hb not rising: what's happening?\n5. Thalassemia vs iron deficiency: distinguish on 5 labs.\n6. G6PD acute attack: trigger list and management.\n7. Sickle cell vaso-occlusive vs hemolytic crisis: differentiate.\n8. ITP management algorithm: when steroids vs IVIG vs splenectomy?\n9. Indian context: thalassemia in South India (carrier frequency)?",
        mnemonics: [
          { text: "MICRO-MACRO-NORMO (Then reticulocytes then smear)", explanation: "Anemia diagnostic tree" }
        ],
        keyPoints: [
          "Know mechanism for each anemia type",
          "Reproduce management algorithms",
          "Predict complications (cardiac in thalassemia, stroke in sickle)"
        ],
        textbookRefs: []
      }
    ]
  },
  {
    topicCode: "RD-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "imaging-modalities-foundation",
        title: "Imaging Modalities Overview - Foundation",
        estimatedMinutes: 25,
        summary: "Basic principles and classification of medical imaging modalities.",
        contentMd: "# Imaging Modalities Overview\n\n## Classification\n1. Radiographic: X-ray (ionizing radiation)\n2. Cross-sectional: CT (computed tomography), MRI (magnetic resonance), ultrasound\n3. Nuclear: PET, SPECT, scintigraphy\n4. Hybrid: PET-CT, SPECT-CT\n\n## Radiation Dose\nX-ray: low dose. CT: medium dose. PET: high dose. MRI: no ionizing radiation.\n\n## Basic Principles\nX-ray: photons absorbed based on tissue density. CT: multiple projections reconstructed. MRI: magnetic field + radiofrequency. Ultrasound: sound waves, no radiation.\n\n## Image Properties\nResolution, contrast, field of view, speed, cost, availability.",
        mnemonics: [
          { text: "XCN (X-ray, CT, Nuclear)", explanation: "Radiation-based imaging" },
          { text: "MUS (MRI, Ultrasound, none = no radiation)", explanation: "Non-radiation imaging" }
        ],
        keyPoints: [
          "Ionizing radiation risk vs diagnostic benefit",
          "MRI contraindicated with metal implants",
          "Ultrasound real-time, operator-dependent",
          "CT fastest for acute trauma"
        ],
        textbookRefs: [
          { book: "Textbook of Radiology", chapter: "Imaging Modalities", edition: "3rd" },
          { book: "Radiological Anatomy", chapter: "Imaging Overview", edition: "2nd" }
        ]
      },
      {
        layer: 2,
        slug: "imaging-modalities-mechanism",
        title: "Imaging Modalities Overview - Mechanism",
        estimatedMinutes: 40,
        summary: "Physical principles underlying different imaging modalities.",
        contentMd: "# Imaging Physics\n\n## X-ray Production\nElectrons accelerated, strike tungsten target, produce Bremsstrahlung radiation. Photons travel through body, absorbed by tissue density (bones dense = white, air = black).\n\n## CT Scanning\nX-ray source rotates around patient. Multiple projections reconstructed via Fourier transform. Hounsfield units: -1000 (air), 0 (water), +1000 (bone). Spiral/helical for continuous data.\n\n## MRI Physics\n1. Magnetic field (1.5-3 Tesla) aligns hydrogen nuclei\n2. Radiofrequency pulse excites spins\n3. Spins relax, emit signal (T1, T2 relaxation)\n4. Coils detect signal → image reconstruction\n\n## Ultrasound\nPiezoelectric transducers generate 2-18 MHz sound waves. Reflection at tissue interfaces (acoustic impedance mismatch). Time-of-flight to measure depth.\n\n## PET\nRadioactive tracer (18FDG, 11C) emits positrons. Annihilation produces gamma rays detected in coincidence by ring of detectors.",
        mnemonics: [
          { text: "HU Scale: Air(-1000) Water(0) Bone(+1000)", explanation: "CT density scale" },
          { text: "T1 vs T2 (T1 fast relax=fat bright, T2 slow relax=fluid bright)", explanation: "MRI contrast" }
        ],
        keyPoints: [
          "CT uses mathematical reconstruction (allows thin slices)",
          "MRI excellent soft tissue contrast (no bone artifact)",
          "Ultrasound limited by bone/air (no penetration)",
          "PET functional imaging (metabolism), CT anatomical"
        ],
        textbookRefs: [
          { book: "Radiological Physics", chapter: "Imaging Modalities", edition: "4th" },
          { book: "MRI Physics", chapter: "Nuclear Magnetic Resonance", edition: "3rd" }
        ]
      },
      {
        layer: 3,
        slug: "imaging-modalities-clinical",
        title: "Imaging Modalities Overview - Clinical",
        estimatedMinutes: 45,
        summary: "Clinical applications and appropriateness of imaging modalities in Indian healthcare.",
        contentMd: "# Clinical Imaging Applications\n\n## First-Line Imaging by System\nChest: CXR (pneumonia, TB, mass). Abdomen: ultrasound (appendicitis, cholecystitis, pregnancy). Extremity: X-ray (fracture, arthritis). Head: CT (acute stroke, trauma), MRI (demyelination, tumor). Spine: MRI (cord pathology), CT (fracture stability).\n\n## Emergency Settings\nTrauma: FAST ultrasound + CT. Stroke: non-contrast CT (exclude hemorrhage) then MRI (ischemia). MI: ECG, troponin; chest X-ray for complications.\n\n## Cost and Availability in India\nX-ray: ubiquitous, cheapest. Ultrasound: widely available, very cheap. CT: major cities, moderate cost. MRI: limited availability, expensive. PET: rare, tertiary centers only.\n\n## Radiation Dose Considerations\nPregnancy: ultrasound preferred, avoid ionizing radiation. Children: minimize CT, use ultrasound. Repeated imaging: cumulative dose risk (cancer, cataracts).\n\n## Contrast Agents\nIodinated (CT): risk of allergy, renal damage in diabetics. Gadolinium (MRI): contraindicated in renal failure (NSF risk). Barium (GI): simple, cheap.",
        mnemonics: [
          { text: "FIRST-LINE: CXR-US-XR-CT-MRI (in order of availability/cost)", explanation: "Indian healthcare pragmatism" }
        ],
        keyPoints: [
          "TB screening via CXR nationwide in India",
          "Ultrasound best for OB/GYN in resource-limited settings",
          "CT overuse risk vs diagnostic yield",
          "Iodine contrast caution in renal disease"
        ],
        textbookRefs: [
          { book: "Harrison", chapter: "Imaging Diagnosis", edition: "21st" },
          { book: "Clinical Radiology", chapter: "Imaging Appropriateness", edition: "2nd" }
        ]
      },
      {
        layer: 4,
        slug: "imaging-modalities-exam-prep",
        title: "Imaging Modalities Overview - Exam Prep",
        estimatedMinutes: 30,
        summary: "High-yield imaging facts and clinical decision-making.",
        contentMd: "# Exam-Focused Imaging\n\n## NMC Competencies\nNMC-A1.7: Order appropriate investigations. NMC-A3.1: Interpret imaging findings.\n\n## Comparison Table\nX-ray: fast, cheap, low dose, 2D. CT: detailed, cross-sectional, radiation. MRI: excellent soft tissue, no radiation, slow, expensive. US: real-time, no radiation, operator-dependent.\n\n## Common Exam Patterns\n1. \"Pregnant with acute abdomen\" = ultrasound (no radiation)\n2. \"Acute stroke\" = non-contrast CT (rapid hemorrhage exclusion)\n3. \"MS patient with symptoms\" = brain MRI (demyelination)\n4. \"Pulmonary TB suspected\" = CXR + sputum AFB\n5. \"Renal function declining\" = avoid contrast or use iso-osmolar\n\n## Appropriateness\nDon't order: routine CT for simple fracture (X-ray sufficient), MRI in acute trauma (CT faster), repeat imaging without clinical change.",
        mnemonics: [
          { text: "RAD = Rapid, Anatomic, Detailed (CT best for this)", explanation: "Why CT in trauma" }
        ],
        keyPoints: [
          "ALARA principle: As Low As Reasonably Achievable (radiation)",
          "Contraindications: pacemakers for MRI, allergy for contrast",
          "Document pregnancy status before contrast"
        ],
        textbookRefs: [
          { book: "Textbook of Radiology", chapter: "Imaging Appropriateness", edition: "3rd" }
        ]
      },
      {
        layer: 5,
        slug: "imaging-modalities-recall",
        title: "Imaging Modalities Overview - Active Recall",
        estimatedMinutes: 15,
        summary: "Spaced repetition for imaging modality selection and principles.",
        contentMd: "# Active Recall: Imaging\n\n## Recall Questions\n1. List 5 imaging modalities and radiation exposure (lowest to highest).\n2. Describe Hounsfield units and CT contrast scale.\n3. MRI: explain T1, T2, T1-weighted image appearance (fat, water, blood).\n4. Why is MRI contraindicated with pacemakers?\n5. Ultrasound: why can't you image lungs or bone?\n6. PET imaging: what physiologic process does it measure? Clinical use?\n7. Pregnant patient with suspected appendicitis: imaging choice and why?\n8. Acute MI: initial imaging and role (diagnosis, complications)?\n9. Indian context: CXR in TB screening—sensitivity/specificity?",
        mnemonics: [
          { text: "MOST COMMON: CXR (chest), US (abdomen), XR (bone), CT (complex)", explanation: "By organ system" }
        ],
        keyPoints: [
          "Know when each modality is first-line",
          "Understand physical principle behind contrast",
          "Recall contraindications (metal, iodine allergy, renal disease)"
        ],
        textbookRefs: []
      }
    ]
  },
  {
    topicCode: "RD-MOD-02-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "pulmonary-imaging-foundation",
        title: "Pulmonary Imaging - Foundation",
        estimatedMinutes: 25,
        summary: "Basic chest X-ray anatomy and interpretation principles.",
        contentMd: "# Pulmonary Imaging Basics\n\n## CXR Views\nPA (posteroanterior): standard upright, best cardiac silhouette. AP (anteroposterior): portable, magnifies heart. Lateral: depth localization. Lateral decubitus: detect free fluid.\n\n## Normal Anatomy\nMediastinum: heart, great vessels. Lungs: right 3 lobes, left 2 lobes. Hila: pulmonary arteries, veins, bronchi, lymph nodes. Diaphragm: right higher (liver), left lower (stomach).\n\n## Radiodensity\nAir: black. Fat/soft tissue: gray. Bone/metal: white. Hyperinflation: dark lungs. Consolidation: white infiltrate.",
        mnemonics: [
          { text: "PA good, AP portable (remember cardiac magnification)", explanation: "CXR technique" },
          { text: "Right-Left (3 lobes right, 2 left)", explanation: "Lung anatomy" }
        ],
        keyPoints: [
          "PA view standard for interpretation",
          "11 ribs visible = normal inspiration",
          "Silhouette sign: consolidation at lobe edge blurs outline",
          "Air-bronchogram: bronchi visible in consolidated lung"
        ],
        textbookRefs: [
          { book: "Textbook of Radiology", chapter: "Chest X-ray Interpretation", edition: "3rd" },
          { book: "CXR Essentials", chapter: "Normal Anatomy", edition: "2nd" }
        ]
      },
      {
        layer: 2,
        slug: "pulmonary-imaging-mechanism",
        title: "Pulmonary Imaging - Mechanism",
        estimatedMinutes: 40,
        summary: "Pathologic patterns on pulmonary imaging and their mechanisms.",
        contentMd: "# Pulmonary Pathology Patterns\n\n## Infiltrates\nConsolidation: lobar pneumonia (air-bronchogram). Ground-glass: atypical pneumonia, edema, PCP (in immunocompromised). Reticular: interstitial thickening (fibrosis, edema). Nodular: granulomas, metastases.\n\n## TB Patterns\nClassic: upper lobe consolidation (apical-posterior segments), cavitation. Endobronchial: bronchial walls thickened. Miliary: 1-3mm nodules throughout (hematogenous dissemination). Hilar lymphadenopathy common in India.\n\n## Other Infections\nBacterial pneumonia: lobar, air-bronchogram. Viral: bilateral interstitial. Fungal: nodules, cavitation. Atypical organisms: subtle, diffuse.\n\n## Edema\nCardiogenic: bat-wing (central perihilar), fluid in fissures, Kerley B lines (septal). Non-cardiogenic (ARDS): diffuse bilateral ground-glass, sparing periphery.\n\n## Other Patterns\nPulmonary embolism: Hampton hump (wedge infarct), oligemia. Pleural effusion: blunted costophrenic angle, meniscus sign. Pneumothorax: absent lung markings, visceral pleura line.",
        mnemonics: [
          { text: "AIR-BRONCHO = Bacterial consolidation (pneumococcus)", explanation: "Specific pattern" },
          { text: "CAVITY = TB or fungal (must exclude", explanation: "Infectious cavitation" }
        ],
        keyPoints: [
          "TB upper lobe due to high O2 (reactivation typical)",
          "Kerley B lines = pulmonary edema (septal thickening)",
          "Hampton hump = pulmonary infarct (PE rare <10% emboli)",
          "Silhouette sign: right middle + lower = consolidation right"
        ],
        textbookRefs: [
          { book: "Textbook of Radiology", chapter: "Chest Pathology", edition: "3rd" },
          { book: "Harrison", chapter: "Respiratory Imaging", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "pulmonary-imaging-clinical",
        title: "Pulmonary Imaging - Clinical",
        estimatedMinutes: 45,
        summary: "Clinical interpretation of pulmonary imaging in Indian TB-endemic settings.",
        contentMd: "# Clinical Pulmonary Imaging\n\n## TB in India\nHigh prevalence: mandatory CXR screening in symptomatic patients. Active TB: upper lobe cavitation (apical-posterior). Inactive: fibrosis, calcification. Miliary: high mortality, requires rapid diagnosis.\n\n## Pneumonia Assessment\nLobar consolidation + fever + cough = bacterial pneumonia (Pneumococcus, H. influenzae). Ground-glass + insidious onset = atypical (Mycoplasma, Legionella). PCP (CD4 <200): bilateral ground-glass, normal CXR early.\n\n## Heart Size\nCardiothoracic ratio: cardiac width / thoracic width. Normal <0.5. >0.6 suggests cardiomegaly. Context: pregnancy, obesity, AP view magnification.\n\n## Tubes and Lines\nETT (endotracheal tube): tip 2-5 cm above carina. Central venous catheter: tip in SVC. Chest tube: plural space confirmation.\n\n## COVID-19 (Learning from Recent)  \nBilateral peripheral ground-glass opacities, consolidation progressing over days. Resembles ARDS pattern. Severity staging via imaging helps triage.\n\n## Indian Healthcare\nCXR overutilization common. CXR for every cough = radiation exposure. Ultrasound increasingly used for pneumonia (consolidation, effusion). Tuberculosis requiring serial CXR for treatment response.",
        mnemonics: [
          { text: "TB = UPPER LOBE (reactivation classic location)", explanation: "Geography in lungs" },
          { text: "CAP = LOBAR (community-acquired pneumonia pattern)", explanation: "Bacterial typical" }
        ],
        keyPoints: [
          "TB miliary = hematogenous spread (bad prognosis)",
          "Normal CXR does not exclude TB (15-20% have normal CXR)",
          "Cavitation = infectious (TB, fungal, abscess)",
          "Cardiothoracic ratio unreliable on AP films"
        ],
        textbookRefs: [
          { book: "Harrison", chapter: "Respiratory Infections", edition: "21st" },
          { book: "TB Chest X-ray Interpretation", chapter: "Patterns", edition: "5th" },
          { book: "Parikh", chapter: "Respiratory Imaging", edition: "5th" }
        ]
      },
      {
        layer: 4,
        slug: "pulmonary-imaging-exam-prep",
        title: "Pulmonary Imaging - Exam Prep",
        estimatedMinutes: 30,
        summary: "High-yield pulmonary imaging findings and diagnostic algorithms.",
        contentMd: "# Exam-Focused Pulmonary Imaging\n\n## NMC Competencies\nNMC-A1.7: Order appropriate imaging. NMC-A3.1: Interpret chest X-rays. NMC-B2.3: Diagnosis of TB.\n\n## High-Yield Patterns\n1. Upper lobe cavitation + fever = TB (sputum AFB confirm)\n2. Lobar consolidation + air-bronchogram = bacterial pneumonia\n3. Bilateral ground-glass + insidious onset = atypical pneumonia or PCP\n4. Bilateral perihilar infiltrates + Kerley B lines = pulmonary edema\n5. Wedge infarct (Hampton hump) = pulmonary embolism (rare finding)\n6. Blunted costophrenic angle = pleural effusion\n7. Hyperinflation (11+ ribs, flat diaphragm) = COPD or asthma\n\n## Common Mistakes\n- Missing TB because it looks \"just like pneumonia\"\n- Misinterpreting silhouette sign (don't know which lobe)\n- Assuming normal CXR = no TB (15-20% TB have normal CXR)\n- Not assessing cardiac silhouette size",
        mnemonics: [
          { text: "SILHOUETTE (Consolidation at edge blurs lobe outline = specific lobe)", explanation: "Localization tool" }
        ],
        keyPoints: [
          "TB: upper + cavitation (almost always TB until proven)",
          "Pneumonia: lobar + air-bronchogram (usually bacterial)",
          "PCP: bilateral ground-glass (CD4 clue)",
          "Edema: perihilar + Kerley B + cardiomegaly"
        ],
        textbookRefs: [
          { book: "CXR Interpretation Handbook", chapter: "Pattern Recognition", edition: "2nd" }
        ]
      },
      {
        layer: 5,
        slug: "pulmonary-imaging-recall",
        title: "Pulmonary Imaging - Active Recall",
        estimatedMinutes: 15,
        summary: "Spaced repetition for chest X-ray interpretation and diagnosis.",
        contentMd: "# Active Recall: Pulmonary Imaging\n\n## Recall Questions\n1. Draw normal CXR anatomy from memory: lobes, hila, diaphragm, mediastinum.\n2. Describe 5 patterns of TB on CXR and their meanings (reactivation vs progressive).\n3. Distinguish lobar pneumonia from atypical pneumonia on imaging.\n4. What is silhouette sign? Use 2 examples (RML consolidation, LLL consolidation).\n5. Interpret: cardiomegaly + Kerley B + bilateral infiltrates = diagnosis?\n6. PCP presentation in AIDS: CXR finding and why it looks this way.\n7. Cavitary lesions: differential (TB, fungal, abscess, infarct).\n8. Miliary TB: what is happening physiologically and prognosis?\n9. Indian context: sensitivity/specificity CXR in TB diagnosis?",
        mnemonics: [
          { text: "PATTERN RECOGNITION: Upper/Cavity=TB, Lobar=CAP, Bilateral=Atypical/Edema", explanation: "Diagnosis anchors" }
        ],
        keyPoints: [
          "Know all TB patterns (classic, miliary, endobronchial)",
          "Reproduce silhouette sign examples for each lobe",
          "Link imaging to physiology (why certain patterns)"
        ],
        textbookRefs: []
      }
    ]
  }
];
