import type { TopicLessons } from "./content-loader";

export const pathologyGapLessons: TopicLessons[] = [
  {
    topicCode: "PA-MOD-01-TOP-08",
    layers: [
      {
        layer: 1,
        slug: "neoplasia-foundation",
        title: "Neoplasia - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to neoplasia with nomenclature, classification of benign vs malignant tumors, and basic characteristics distinguishing them.",
        contentMd: `# Neoplasia - Foundation

## Definition & Terminology
- **Neoplasm**: New growth; uncontrolled proliferation of cells
- **Tumor**: Swelling; can be neoplastic or non-neoplastic
- **Cancer**: Malignant neoplasm with invasive and metastatic properties
- **Oncology**: Study of tumors

## Nomenclature of Tumors

### Benign Tumors
- Suffix: **-oma**
- Examples:
  - **Lipoma**: Benign tumor of adipose tissue
  - **Adenoma**: Benign glandular tumor
  - **Fibroma**: Benign fibrous connective tissue tumor
  - **Hemangioma**: Benign vascular tumor
  - **Osteoma**: Benign bone tumor
  - **Myoma**: Benign smooth muscle tumor

### Malignant Tumors

#### From Epithelial Origin (Carcinomas)
- Suffix: **-carcinoma**
- **Adenocarcinoma**: From glandular epithelium (stomach, colon, breast)
- **Squamous cell carcinoma**: From squamous epithelium (lung, esophagus, skin)
- **Transitional cell carcinoma**: From transitional epithelium (bladder)
- **Small cell carcinoma**: From neuroendocrine cells (lung)

#### From Mesenchymal Origin (Sarcomas)
- Suffix: **-sarcoma**
- **Osteosarcoma**: Malignant bone tumor
- **Rhabdomyosarcoma**: Malignant skeletal muscle tumor
- **Leiomyosarcoma**: Malignant smooth muscle tumor
- **Fibrosarcoma**: Malignant fibrous tissue tumor

#### From Hematologic Origin
- **Leukemia**: Malignancy of bone marrow (WBC)
- **Lymphoma**: Malignancy of lymphoid tissue
- **Multiple myeloma**: Malignancy of plasma cells

## Characteristics Distinguishing Benign from Malignant Tumors

| Feature | Benign | Malignant |
|---------|--------|-----------|
| **Growth rate** | Slow, years to decades | Rapid, months to years |
| **Invasion** | Encapsulated, pushing borders | Infiltrative, invading adjacent tissues |
| **Metastasis** | Absent | Present |
| **Cellular differentiation** | Well-differentiated (low grade) | Poorly differentiated (high grade) |
| **Mitotic figures** | Few, normal mitoses | Abundant, abnormal mitoses |
| **Necrosis** | Absent or minimal | Present |
| **Hemorrhage** | Absent or minimal | Present |
| **Ulceration** | Absent | May be present |
| **Prognosis** | Excellent | Poor without treatment |

## Grades and Stages

### Grading (Histologic Differentiation)
- **Grade 1 (Low grade)**: Well-differentiated, low malignancy potential
- **Grade 2 (Intermediate)**: Moderately differentiated, intermediate malignancy
- **Grade 3 (High grade)**: Poorly differentiated, high malignancy potential
- **Grade 4 (Anaplastic)**: Undifferentiated, highest malignancy potential

### Staging (Clinical Extent of Disease)
- **Stage I**: Localized to organ of origin
- **Stage II**: Local invasion, regional spread
- **Stage III**: Extensive regional involvement, lymph node involvement
- **Stage IV**: Distant metastasis

## Common Benign Tumors in India

### Skin
- **Seborrheic keratosis**: Common, benign epithelial growth
- **Nevus**: Benign melanocytic lesion
- **Lipoma**: Subcutaneous fatty tumor

### GI Tract
- **Adenomatous polyp**: Benign but precancerous
- **Hamartoma**: Developmental abnormality

### Female Reproductive
- **Fibroadenoma**: Benign breast tumor (young women)
- **Fibroid (Leiomyoma)**: Benign uterine smooth muscle tumor

### Bone
- **Osteochondroma**: Benign cartilage-capped bone projection
- **Giant cell tumor**: Benign bone tumor (distal femur, proximal tibia)`,
        mnemonics: [
          { text: "TUMOR SUFFIX: Benign=-oma (lipoma, adenoma), Malignant epithelial=-carcinoma, Malignant mesenchymal=-sarcoma", explanation: "Nomenclature rules for naming tumors" },
          { text: "BENIGN: Slow growth, Encapsulated, No metastasis, Well-differentiated, Few mitoses", explanation: "5 characteristics of benign tumors" },
          { text: "MALIGNANT: Rapid, Infiltrative, Metastases, Poorly differentiated, Abundant abnormal mitoses", explanation: "5 characteristics of malignant tumors" },
          { text: "GRADING: Grade 1-4 = histologic differentiation (1=well, 4=anaplastic)", explanation: "Grades assess cellular differentiation" },
          { text: "STAGING: Stage I-IV = clinical extent (I=local, IV=metastatic)", explanation: "Stages assess spread of disease" }
        ],
        keyPoints: [
          "Neoplasia is abnormal, uncontrolled cell proliferation; benign (encapsulated, no metastasis) vs malignant (invasive, metastatic)",
          "Nomenclature: benign tumors end in -oma (lipoma); malignant epithelial in -carcinoma (adenocarcinoma); malignant mesenchymal in -sarcoma (osteosarcoma)",
          "Benign tumors grow slowly, are well-differentiated, have few mitoses, lack necrosis; malignant tumors show opposite features",
          "Grading (1-4) reflects histologic differentiation; staging (I-IV) reflects clinical extent of disease",
          "Grade and stage are independent but both predict prognosis; stage is more important for treatment decisions"
        ],
        textbookRefs: [
          { book: "Robbins and Cotran Pathologic Basis of Disease", chapter: "8: Neoplasia", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Neoplasia", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "neoplasia-mechanism",
        title: "Neoplasia - Mechanism",
        estimatedMinutes: 25,
        summary: "Molecular mechanisms of carcinogenesis including oncogenes, tumor suppressors, multi-hit model, and hallmarks of cancer.",
        contentMd: `# Neoplasia - Mechanisms of Carcinogenesis

## Multi-Hit Hypothesis (Knudson)
- Carcinogenesis requires **multiple mutations** (typically 4-7)
- Each mutation is sequential and irreversible
- Explains why cancer incidence increases with age
- Example: Colorectal cancer requires APC → KRAS → TP53 → Other mutations

## Oncogenes and Tumor Suppressors

### Oncogenes (Proto-oncogenes)
- **Definition**: Genes that promote cell growth and proliferation
- **Mutation**: Gain-of-function (one mutant allele is sufficient)
- **Result**: Constitutive activation of growth pathways
- **Examples**:
  - **RAS**: Most common (20-30% of cancers); GTPase controlling cell proliferation
  - **MYC**: Transcription factor; amplified in many cancers (breast, lymphoma)
  - **HER2/NEU**: Growth factor receptor; amplified in breast cancer
  - **BCR-ABL**: Philadelphia chromosome in CML; constitutively active tyrosine kinase

### Tumor Suppressors
- **Definition**: Genes that inhibit cell growth and proliferation
- **Mutation**: Loss-of-function (both alleles must be inactivated; Knudson "two-hit" model)
- **Mechanisms of loss**: Mutation, deletion, epigenetic silencing (methylation)
- **Key suppressors**:
  - **TP53 (p53)**: "Guardian of the genome"; mutated in ~50% of cancers
    - Functions: Cell cycle arrest (G1/S), DNA repair, apoptosis
    - Loss leads to genomic instability, accumulation of mutations
  - **RB (Retinoblastoma)**: Controls G1/S checkpoint; loss causes uncontrolled proliferation
  - **APC**: Involved in Wnt signaling; loss in colorectal cancer
  - **BRCA1, BRCA2**: DNA repair genes; loss causes breast and ovarian cancer
  - **NF1**: Controls RAS pathway; neurofibromatosis

## Carcinogens and Mutagenesis

### Chemical Carcinogens
- **Tobacco smoke**: Polycyclic aromatic hydrocarbons (PAH), nitrosamines → lung, bladder cancers
- **Asbestos**: Mesothelioma, lung cancer
- **Aflatoxin B1**: Aspergillus contamination in food → hepatocellular carcinoma
- **Nitrosamines**: Cured meats → gastric cancer
- **Benzene**: Acute myeloid leukemia

### Biological Carcinogens
- **Oncogenic viruses**:
  - **HPV (16, 18)**: Cervical, anal, oropharyngeal cancers; inactivates p53 and RB
  - **HBV, HCV**: Hepatocellular carcinoma
  - **EBV**: Nasopharyngeal carcinoma, Burkitt lymphoma
  - **HTLV-1**: Adult T-cell leukemia/lymphoma (endemic in India)
  - **HHV-8**: Kaposi sarcoma (AIDS patients)
- **Bacteria**: H. pylori → gastric cancer

### Physical Carcinogens
- **Ionizing radiation**: UV (skin cancer), X-rays, gamma rays (leukemia, thyroid)
- **Chronic irritation**: Scars (Marjolin ulcer), chronic ulcers

## Hallmarks of Cancer (Hanahan & Weinberg)

1. **Self-sufficiency in growth signals**: Oncogene activation
2. **Insensitivity to growth-inhibitory signals**: Loss of tumor suppressors
3. **Evasion of apoptosis**: Anti-apoptotic genes (BCL-2)
4. **Unlimited replicative potential**: Telomerase reactivation
5. **Sustained angiogenesis**: Neovascularization (VEGF)
6. **Invasion and metastasis**: Loss of adhesion molecules (E-cadherin), gain of EMT
7. **Reprogrammed energy metabolism**: Warburg effect (aerobic glycolysis)
8. **Tumor-promoting inflammation**: Cytokines, immune evasion

## Molecular Pathways in Cancer

### Wnt Signaling
- Normally: APC inhibits β-catenin
- In cancer: APC loss → β-catenin accumulation → TCF activation → proliferation
- Common in colorectal cancer

### p53 Pathway
- DNA damage → p53 activation
- p53 induces: p21 (cell cycle arrest) or BAX (apoptosis)
- Loss of p53 → failure to arrest or undergo apoptosis
- Li-Fraumeni syndrome: familial p53 mutations

### RB Pathway
- Hypophosphorylated RB binds E2F → transcription blocked
- Growth signals → CDK4/6 activation → RB phosphorylation → E2F release → S phase entry
- RB loss → uncontrolled G1/S progression

## Epidemiology of Cancer in India

### Common Cancers
1. **Oral cancer**: Tobacco/betel nut chewing (40% of global burden)
2. **Cervical cancer**: HPV infection (high mortality due to late detection)
3. **Breast cancer**: Rising incidence in urban areas
4. **Gastric cancer**: H. pylori infection, dietary factors
5. **Lung cancer**: Tobacco smoking and air pollution (Delhi)
6. **Hepatocellular carcinoma**: HBV, HCV, aflatoxin contamination
7. **Colorectal cancer**: Dietary, lifestyle changes in urban India`,
        mnemonics: [
          { text: "MULTI-HIT: 4-7 mutations required sequentially → carcinogenesis", explanation: "Knudson multi-hit hypothesis explains age-related cancer incidence" },
          { text: "ONCOGENES: Gain-of-function, 1 mutant allele, RAS/MYC/HER2/BCR-ABL", explanation: "Proto-oncogenes activated in cancer" },
          { text: "SUPPRESSORS: Loss-of-function, 2-hit inactivation (Knudson), p53/RB/APC/BRCA", explanation: "Tumor suppressors require both alleles lost" },
          { text: "HALLMARKS: Growth signals, Apoptosis evasion, Replicative potential, Angiogenesis, Invasion, Inflammation, Metabolism, Immune evasion", explanation: "8 hallmarks of cancer" },
          { text: "CARCINOGENS: Chemical (tobacco, aflatoxin), Biological (HPV, H.pylori), Physical (UV, radiation)", explanation: "Three types of carcinogenic exposure" }
        ],
        keyPoints: [
          "Carcinogenesis requires 4-7 sequential mutations (multi-hit hypothesis); explains why cancer incidence increases with age",
          "Oncogenes: gain-of-function mutations (RAS, MYC, HER2); tumor suppressors: loss-of-function mutations (p53, RB, APC, BRCA)",
          "p53 is the most commonly mutated gene in cancer (~50%); guards genome by inducing cell cycle arrest or apoptosis",
          "HPV, HBV, EBV, HTLV-1 are oncogenic viruses; H. pylori is oncogenic bacterium; chemical (tobacco, aflatoxin), physical (UV, radiation) are carcinogens",
          "8 hallmarks of cancer include self-sufficiency in growth, apoptosis evasion, unlimited replication, angiogenesis, invasion, inflammation, altered metabolism, immune evasion"
        ],
        textbookRefs: [
          { book: "Robbins and Cotran Pathologic Basis of Disease", chapter: "8: Neoplasia", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Carcinogenesis", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "neoplasia-clinical",
        title: "Neoplasia - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical manifestations, paraneoplastic syndromes, tumor markers, and management principles for benign and malignant neoplasms.",
        contentMd: `# Neoplasia - Clinical Manifestations & Management

## Local Effects of Tumors

### Mass Effect
- **Pain**: Compression of nerves (neural foraminal stenosis, periosteal infiltration)
- **Obstruction**: Luminal narrowing (esophageal cancer → dysphagia, bowel cancer → obstruction)
- **Compression**: Vena cava (superior vena cava syndrome), spinal cord (paraplegia)
- **Displacement**: Neighboring organs
- **Ulceration**: Bleeding (gastric cancer → hemorrhage)

### Functional Loss
- **Hormonal deficit**: Pituitary adenoma → hypopituitarism
- **Neurologic deficit**: Brain tumor → weakness, ataxia, cognitive changes
- **Organ failure**: Liver cancer → hepatic dysfunction

## Systemic Effects of Malignancy

### Cachexia (Cancer Wasting Syndrome)
- **Mechanism**: Cytokine release (TNF-α, IL-6), metabolic alterations
- **Features**: Weight loss, muscle wasting, fat loss, weakness, anemia
- **Prevalence**: 30-80% of advanced cancer patients
- **Prognosis**: Associated with poor outcomes

### Anemia of Chronic Disease
- Mechanism: Cytokines (IL-6) → hepcidin ↑ → iron sequestration; EPO blunted response
- Hemoglobin typically 7-10 g/dL
- Normocytic, normochromic

### Thrombosis
- **Mechanism**: Tissue factor release by tumors, platelet activation
- **Common in**: Lung, stomach, ovarian, pancreatic cancers
- **Types**: DVT, PE, DIC

## Paraneoplastic Syndromes

### Endocrine
- **Inappropriate ADH (SIADH)**: Small cell lung cancer → hyponatremia
- **Hypercalcemia**: PTHrP secretion (lung, breast, kidney) → polyuria, altered consciousness
- **Hypoglycemia**: Insulin secretion (hepatoma), glucose consumption (sarcoma)
- **Cushing syndrome**: ACTH secretion (small cell lung cancer)

### Hematologic
- **Thrombocytosis**: Cytokine secretion (gastric, lung, breast cancers)
- **Polycythemia**: EPO secretion (renal cell carcinoma, hemangioblastoma)
- **Leukemoid reaction**: WBC elevation without leukemia (paraneoplastic response)

### Rheumatologic
- **Hypertrophic osteoarthropathy**: Clubbing + arthritis + periosteal new bone (lung cancer)
- **Dermatomyositis**: Antibodies to myositis-associated antigens (ovarian, gastric cancer)
- **Systemic lupus erythematosus-like**: SLE-like autoimmune syndrome

### Neurologic
- **Cerebellar degeneration**: Anti-Yo antibodies (breast, ovarian cancer)
- **Lambert-Eaton syndrome**: Anti-VGCC antibodies (small cell lung cancer)
- **Paraneoplastic encephalitis**: Anti-Hu antibodies (lung cancer)

### Cutaneous
- **Acanthosis nigricans**: Velvety hyperpigmentation in flexures (gastric, lung cancers)
- **Tripe palms**: Exaggerated ridging of palms (various cancers)
- **Erythema multiforme**: Immune-mediated reaction

## Tumor Markers

### Carcinoembryonic Antigen (CEA)
- **Tumor types**: Colorectal, gastric, pancreatic, lung (adenocarcinoma)
- **Normal**: <5 ng/mL
- **Use**: Monitoring treatment response and recurrence; NOT for screening
- **Limitations**: Elevated in smoking, inflammatory bowel disease

### PSA (Prostate-Specific Antigen)
- **Tumor**: Prostate cancer
- **Normal**: <4 ng/mL
- **Use**: Screening (controversial), monitoring
- **Limitations**: Elevated in benign prostatic hyperplasia, prostatitis

### AFP (Alpha-Fetoprotein)
- **Tumor types**: Hepatocellular carcinoma, testicular germ cell tumors
- **Normal**: <20 ng/mL
- **Sensitivity**: 60-70% in HCC
- **Value**: Combined with ultrasound for HCC diagnosis

### hCG (Human Chorionic Gonadotropin)
- **Tumor types**: Testicular seminoma/non-seminoma, gestational trophoblastic disease
- **Sensitivity**: 80-90% in non-seminomatous testicular cancer

### CA-125 (Cancer Antigen 125)
- **Tumor types**: Ovarian, breast, pancreatic, GI cancers
- **Normal**: <35 U/mL
- **Use**: Monitoring ovarian cancer treatment; NOT for screening
- **Limitations**: Elevated in endometriosis, menstruation, benign gynecologic disease

### PSA, CEA, AFP, HCG, CA-125
- Mnemonic: "COACH" — CEA, CA-125, hCG, Prostate-specific antigen, AFP

## Cancer Screening in India

### High-Priority Screening
1. **Cervical cancer**: Pap smear, HPV testing (reduce mortality 70%)
2. **Breast cancer**: Mammography, clinical examination
3. **Colorectal cancer**: FOBT, colonoscopy (high-risk populations)
4. **Oral cancer**: Visual inspection (tobacco/betel nut users)

### Indian Context
- Limited resources; focus on high-burden cancers
- Tobacco cessation critical for oral and lung cancers
- HPV vaccination for cervical cancer prevention
- Early detection programs in government hospitals (NCRP)

## Management Principles

### Benign Tumors
- **Observation**: If asymptomatic (lipoma, small hemangioma)
- **Surgery**: If symptomatic, large, or cosmetically concerning
- **Prognosis**: Excellent; recurrence rare

### Malignant Tumors (Multimodal Approach)
1. **Surgery**: Primary treatment if resectable; margin-negative resection
2. **Chemotherapy**: Systemic, adjuvant (post-op), neoadjuvant (pre-op), palliative
3. **Radiation**: Adjuvant, locoregional control, bone metastases
4. **Immunotherapy**: Checkpoint inhibitors (PD-1, PD-L1), CAR-T cells
5. **Targeted therapy**: Against specific mutations (HER2 in breast, EGFR in lung)
6. **Palliative care**: Pain control, symptom management, end-of-life support`,
        mnemonics: [
          { text: "LOCAL EFFECTS: Pain (nerve compression), Obstruction (luminal), Compression (vessels/spinal), Ulceration (bleeding)", explanation: "Effects from tumor mass" },
          { text: "PARANEOPLASTIC: Endocrine (SIADH, PTHrP), Hematologic (thrombosis, polycythemia), Neurologic (Lambert-Eaton), Dermatologic (acanthosis nigricans)", explanation: "Systemic effects not from mass" },
          { text: "TUMOR MARKERS: CEA (colorectal), PSA (prostate), AFP (HCC/testicular), hCG (testicular), CA-125 (ovarian)", explanation: "Common markers for monitoring, not screening" },
          { text: "CANCER CACHEXIA: TNF-α, IL-6 release → weight loss, muscle wasting, anemia, poor prognosis", explanation: "Systemic metabolic effects" },
          { text: "TREATMENT: Surgery (primary), Chemotherapy (systemic), Radiation (locoregional), Immunotherapy (checkpoint), Targeted (molecular)" }
        ],
        keyPoints: [
          "Local effects: pain, obstruction, compression, hemorrhage; systemic effects: cachexia, anemia, thrombosis",
          "Paraneoplastic syndromes: SIADH/hypercalcemia (endocrine), thrombosis (hematologic), dermatomyositis (rheumatologic), cerebellar degeneration (neurologic)",
          "Tumor markers (CEA, PSA, AFP, hCG, CA-125) useful for monitoring treatment, not screening",
          "Cancer cachexia from cytokine release (TNF-α, IL-6) → weight loss, poor prognosis; affects 30-80% of advanced cancer",
          "Multimodal treatment: surgery (primary), chemotherapy (systemic), radiation (locoregional), immunotherapy, targeted therapy, palliative care"
        ],
        textbookRefs: [
          { book: "Robbins and Cotran Pathologic Basis of Disease", chapter: "8: Neoplasia", edition: "10th" },
          { book: "API Textbook of Medicine", chapter: "Paraneoplastic Syndromes", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "neoplasia-exam",
        title: "Neoplasia - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam facts, common clinical scenarios, and key differentials for neoplasia topics.",
        contentMd: `# Neoplasia - Exam Preparation

## High-Yield Facts

### Nomenclature
- Benign: -oma (lipoma, adenoma, fibroma)
- Malignant epithelial: -carcinoma (adenocarcinoma, squamous cell carcinoma)
- Malignant mesenchymal: -sarcoma (osteosarcoma, leiomyosarcoma)
- Hematologic: leukemia, lymphoma, myeloma

### Benign vs Malignant
| Feature | Benign | Malignant |
|---------|--------|-----------|
| Growth | Slow | Rapid |
| Border | Encapsulated | Infiltrative |
| Metastasis | No | Yes |
| Differentiation | Good | Poor |
| Mitoses | Few, normal | Many, abnormal |
| Necrosis | No | Yes |

### Grading & Staging
- **Grade**: 1-4 = histologic differentiation (1=well, 4=anaplastic)
- **Stage**: I-IV = clinical extent (I=local, II=local+regional, III=extensive regional, IV=metastatic)
- Stage more important for prognosis than grade

### Oncogenes (Gain-of-Function; 1 Allele)
- **RAS**: 20-30% of cancers; GTPase
- **MYC**: Amplified in breast cancer, lymphoma
- **HER2/NEU**: Amplified in breast cancer (HER2+ breast cancer)
- **BCR-ABL**: Philadelphia chromosome in CML

### Tumor Suppressors (Loss-of-Function; 2 Alleles)
- **p53**: ~50% of cancers; apoptosis, G1/S checkpoint
- **RB**: G1/S checkpoint; retinoblastoma
- **APC**: Wnt pathway; colorectal cancer
- **BRCA1/2**: DNA repair; breast/ovarian cancer

### p53 ("Guardian of Genome")
- Mutated in ~50% of human cancers
- Binds DNA damage → induces p21 (cell cycle arrest) or BAX (apoptosis)
- Loss → genomic instability, accumulation of mutations
- Li-Fraumeni: familial p53 mutations → multiple cancer types

### Carcinogens
- **Chemical**: Tobacco (lung), asbestos (mesothelioma), aflatoxin (HCC)
- **Biologic**: HPV16/18 (cervical), HBV (HCC), EBV (nasopharyngeal), H. pylori (gastric)
- **Physical**: UV (melanoma), ionizing radiation (leukemia)

### Hallmarks of Cancer (8)
1. Self-sufficiency in growth
2. Insensitivity to growth inhibition
3. Apoptosis evasion (BCL-2)
4. Unlimited replication (telomerase)
5. Sustained angiogenesis (VEGF)
6. Invasion and metastasis (EMT, loss of E-cadherin)
7. Altered metabolism (Warburg effect)
8. Inflammation and immune evasion

### Paraneoplastic Syndromes
- **SIADH**: Small cell lung cancer → hyponatremia
- **Hypercalcemia**: PTHrP (lung, breast, kidney)
- **Thrombocytosis**: Gastric, lung, breast cancers
- **Polycythemia**: EPO (renal cell carcinoma)
- **Hypertrophic osteoarthropathy**: Clubbing + arthritis (lung cancer)
- **Dermatomyositis**: Anti-myositis antibodies (ovarian, gastric cancer)
- **Acanthosis nigricans**: Hyperpigmentation (gastric, lung cancer)
- **Lambert-Eaton**: Anti-VGCC (small cell lung cancer)

### Tumor Markers (Monitoring, NOT Screening)
- **CEA**: Colorectal, gastric, pancreatic (normal <5 ng/mL)
- **PSA**: Prostate (normal <4 ng/mL)
- **AFP**: HCC, testicular (normal <20 ng/mL)
- **hCG**: Testicular (seminoma/non-seminoma), molar pregnancy
- **CA-125**: Ovarian, gastric, pancreatic (normal <35 U/mL)

## Common Exam Scenarios

**Q1: 45-year-old with p53 mutation presents with multiple cancers (breast, colon, CNS). Diagnosis?**
A: Li-Fraumeni syndrome. Autosomal dominant inheritance of p53 mutation; multiple cancer susceptibility.

**Q2: Benign tumor with well-differentiated cells, few mitoses, no necrosis. What's the prognosis?**
A: Excellent. Benign tumors rarely recur or metastasize; simple observation or surgery if symptomatic.

**Q3: 50-year-old male with BCR-ABL fusion gene on karyotype. Cancer type?**
A: Chronic myeloid leukemia (CML). Philadelphia chromosome (9;22); responsive to tyrosine kinase inhibitors (imatinib).

**Q4: Which tumor marker is most specific for hepatocellular carcinoma?**
A: AFP + ultrasound findings. AFPalone not sufficient; combined with imaging for diagnosis.

**Q5: Patient with small cell lung cancer develops hyponatremia. Mechanism?**
A: SIADH (inappropriate ADH secretion). Paraneoplastic syndrome; treat with fluid restriction.

**Q6: HER2-positive breast cancer. Mechanism of trastuzumab (Herceptin) action?**
A: Monoclonal antibody against HER2 (growth factor receptor); blocks growth signaling.

**Q7: What is the Warburg effect?**
A: Cancer cells preferentially metabolize glucose via anaerobic glycolysis (lactate production) despite oxygen availability; generates ATP faster than oxidative phosphorylation.`,
        mnemonics: [
          { text: "GRADE 1-4: 1=well-differentiated, 2=moderately, 3=poorly, 4=anaplastic (undifferentiated)", explanation: "Grades assess histologic differentiation" },
          { text: "ONCOGENES: RAS (20-30% cancers), MYC (breast/lymphoma), HER2 (breast), BCR-ABL (CML)", explanation: "Common gain-of-function mutations" },
          { text: "SUPPRESSORS: p53 (50% cancers, apoptosis), RB (G1/S), APC (colorectal), BRCA (breast/ovarian)", explanation: "Common loss-of-function mutations" },
          { text: "HALLMARKS: Growth, Inhibition evasion, Apoptosis evasion, Unlimited replication, Angiogenesis, Invasion, Metabolism, Immune evasion", explanation: "8 hallmarks of cancer" },
          { text: "MARKERS: CEA (colon), PSA (prostate), AFP (HCC), hCG (testicular), CA-125 (ovarian) - for monitoring, not screening", explanation: "Common tumor markers" }
        ],
        keyPoints: [
          "Benign: slow growth, encapsulated, no metastasis, well-differentiated, few mitoses; malignant: opposite",
          "Grade (1-4) = histologic differentiation; stage (I-IV) = clinical extent; stage more important for prognosis",
          "Oncogenes: gain-of-function (RAS, MYC, HER2, BCR-ABL); tumor suppressors: loss-of-function (p53, RB, APC, BRCA)",
          "p53 mutations in ~50% of cancers; Li-Fraumeni is familial p53 syndrome",
          "Tumor markers useful for monitoring (CEA, PSA, AFP, hCG, CA-125), not for screening"
        ],
        textbookRefs: [
          { book: "Robbins and Cotran Pathologic Basis of Disease", chapter: "8: Neoplasia", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Neoplasia", edition: "8th" }
        ]
      },
      {
        layer: 5,
        slug: "neoplasia-active-recall",
        title: "Neoplasia - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-based active recall for rapid retention of neoplasia key concepts.",
        contentMd: `# Neoplasia - Active Recall Flashcards

**Q1: What suffix is used for benign tumors, and list 5 examples.**
A: -oma. Lipoma (fat), adenoma (gland), fibroma (fibrous), hemangioma (vessels), osteoma (bone).

**Q2: Distinguish between carcinoma and sarcoma in terms of origin and examples.**
A: Carcinoma = epithelial origin (adenocarcinoma, squamous cell CA). Sarcoma = mesenchymal origin (osteosarcoma, leiomyosarcoma, fibrosarcoma).

**Q3: List 5 features distinguishing benign from malignant tumors.**
A: 1) Growth rate: slow vs rapid. 2) Border: encapsulated vs infiltrative. 3) Metastasis: absent vs present. 4) Differentiation: good vs poor. 5) Mitoses: few/normal vs many/abnormal.

**Q4: What is the multi-hit hypothesis and how many mutations does carcinogenesis require?**
A: Carcinogenesis requires 4-7 sequential, irreversible mutations. Each mutation confers growth advantage; explains age-related cancer incidence (Knudson hypothesis).

**Q5: Define oncogenes and tumor suppressors in terms of gain or loss of function.**
A: Oncogenes = proto-oncogenes with gain-of-function; 1 mutant allele sufficient (dominant). Tumor suppressors = loss-of-function; both alleles must be inactivated (recessive, Knudson 2-hit).

**Q6: What does p53 do, and what percentage of cancers have p53 mutations?**
A: p53 is "guardian of genome"; senses DNA damage → p21 (cell cycle arrest) or BAX (apoptosis). Mutated in ~50% of cancers. Loss → genomic instability.

**Q7: List 5 common carcinogens and the cancers they cause.**
A: 1) Tobacco → lung, oral, bladder. 2) Asbestos → mesothelioma, lung. 3) Aflatoxin → HCC. 4) HPV → cervical, anal. 5) H. pylori → gastric.

**Q8: What are the 8 hallmarks of cancer?**
A: Self-sufficiency in growth, insensitivity to growth inhibition, apoptosis evasion, unlimited replication, sustained angiogenesis, invasion & metastasis, altered metabolism, tumor-promoting inflammation.

**Q9: What is hypertrophic osteoarthropathy and which cancer is it associated with?**
A: Clubbing + arthritis + periosteal new bone formation. Most common with lung cancer. Paraneoplastic syndrome.

**Q10: SIADH in cancer: which cancer, mechanism, and presenting sign.**
A: Small cell lung cancer. Ectopic ADH secretion. Presents with hyponatremia, confusion, seizures.

**Q11: What is acanthosis nigricans and list 3 cancers associated with it.**
A: Velvety hyperpigmentation in skin folds (axilla, neck). Associated with gastric, lung, ovarian cancers.

**Q12: Tumor markers: which 5 are high-yield and which cancers do they indicate?**
A: 1) CEA = colorectal. 2) PSA = prostate. 3) AFP = HCC, testicular. 4) hCG = testicular, molar pregnancy. 5) CA-125 = ovarian.

**Q13: How do benign and malignant tumors differ in terms of patient prognosis?**
A: Benign: excellent prognosis; can observe or surgically remove. Malignant: variable; depends on grade, stage, treatment response; many require multimodal therapy.

**Q14: What is the Warburg effect and what does it indicate about cancer metabolism?**
A: Cancer cells use anaerobic glycolysis even with oxygen available; produces lactate. Favors rapid ATP production over efficient energy metabolism; hallmark of metabolic reprogramming.

**Q15: In a malignant tumor, which is more important for prognosis: grade or stage?**
A: Stage is more important. Stage I (localized) has better prognosis than stage IV (metastatic), regardless of grade. Stage guides treatment decisions.`
      }
    ]
  },
  {
    topicCode: "PA-MOD-03-TOP-07",
    layers: [
      {
        layer: 1,
        slug: "transfusion-medicine-foundation",
        title: "Transfusion Medicine - Foundation",
        estimatedMinutes: 20,
        summary: "Blood group systems, ABO and Rh compatibility, cross-matching principles, and blood component therapy.",
        contentMd: `# Transfusion Medicine - Foundation

## Blood Groups

### ABO System
- **Genetics**: Autosomal loci with three alleles (A, B, O)
- **Phenotypes and Genotypes**:
  - **Type A**: AA or AO (antigen A on RBC)
  - **Type B**: BB or BO (antigen B on RBC)
  - **Type AB**: AB (both A and B antigens)
  - **Type O**: OO (no A or B antigens, universal donor)

- **Antibodies** (Natural, IgM):
  - Type A: Anti-B antibodies
  - Type B: Anti-A antibodies
  - Type AB: No anti-A, no anti-B (universal recipient)
  - Type O: Anti-A and anti-B (naturally occurring)

- **Compatibility**:
  - O negative: Universal donor (no A, B, or D antigens)
  - AB positive: Universal recipient

### Rh System
- **Genetics**: Single gene locus; Rh-positive (D antigen present) or Rh-negative (D antigen absent)
- **Frequency**: 85% Rh-positive, 15% Rh-negative (in Caucasians); higher positive rate in Indian population
- **Antibodies**: Rh antibodies are IgG (develop after exposure)
- **Clinical significance**:
  - Rh-negative individuals can receive Rh-negative blood
  - Rh-negative individuals should NOT receive Rh-positive blood (risk of sensitization)
  - Rh-positive individuals can receive Rh-positive or Rh-negative blood

### Other Blood Group Systems
- **Kell**: Kell antigen; important in transfusion
- **Kidd**: May cause transfusion reactions
- **MNS**: Generally clinically insignificant
- **Lutheran**: Rare but can cause hemolytic transfusion reactions
- **Duffy**: Important in certain populations

## Blood Transfusion Compatibility

### Pre-transfusion Testing (Compatibility Matching)

1. **Type and Screen**
   - ABO and Rh typing of recipient
   - Screen recipient serum for unexpected antibodies

2. **Type and Cross-match**
   - ABO and Rh typing of both donor and recipient
   - Cross-match: Mix donor RBCs with recipient serum
   - **Major cross-match**: Donor RBCs + recipient serum (detects recipient antibodies against donor RBCs)
   - **Minor cross-match**: Recipient RBCs + donor serum (detects donor antibodies against recipient RBCs; usually less clinically significant)
   - Incubation at 37°C and room temperature to detect IgG and IgM

3. **Direct and Indirect Antiglobulin Test (Coombs Test)**
   - **DAT (Direct)**: Detects antibodies or complement bound to RBC surface
   - **IAT (Indirect)**: Detects antibodies in serum

## Blood Products & Components

### RBC Transfusion
- **Indications**: Hemoglobin <7 g/dL (generally); <8 if cardiac disease
- **Dose**: 1 unit raises hemoglobin ~1 g/dL
- **Storage**: 4°C, 42 days (packed RBCs)
- **Complications**: Transfusion reactions, iron overload (chronic transfusion)

### Plasma (Fresh Frozen Plasma, FFP)
- **Composition**: All coagulation factors, albumin, immunoglobulins
- **Indications**: Coagulation factor deficiency, massive transfusion, DIC, liver disease
- **Dose**: 10-15 mL/kg
- **Storage**: -18°C or colder; 1 year

### Platelets
- **Indications**: Platelet count <10,000 (prophylactic), <20,000 with fever/active bleeding
- **Dose**: 1 unit = 5-6 × 10⁹ platelets
- **Storage**: Room temperature (20-24°C), 5 days (risk of bacterial contamination)

### Cryoprecipitate
- **Composition**: Fibrinogen, factor VIII, vWF, fibronectin, factor XIII
- **Indications**: Fibrinogen <100 mg/dL, DIC, massive transfusion
- **Dose**: 10 units

## Massive Transfusion Protocol

- **Definition**: Transfusion of >4 units of RBC in <12 hours (or anticipated)
- **Complications**:
  - Dilutional coagulopathy (loss of coagulation factors)
  - Hypothermia
  - Hyperkalemia
  - Metabolic alkalosis (from citrate metabolism)
- **Management**:
  - Ratio of RBC:Plasma:Platelets = 1:1:1 (optimal)
  - Monitor PT, PTT, CBC, electrolytes
  - Warm blood products
  - Consider TXA (tranexamic acid) for trauma

## Indian Context of Transfusion Medicine

### Blood Donor Selection
- Voluntary non-remunerated donors preferred (lower infection risk than replacement donors)
- Donor screening: Health history, vital signs, hemoglobin, blood pressure
- Infectious disease testing: HIV, HBsAg, Anti-HCV, RPR/VDRL, Anti-Malarial antigen

### Challenges in India
- High prevalence of infectious diseases (HIV, HBV, HCV, syphilis)
- Limited refrigerated storage capacity in peripheral hospitals
- Need for emergency transfusions in trauma/obstetric hemorrhage
- Blood group frequency: A and B groups more common than O in Indian population`,
        mnemonics: [
          { text: "ABO SYSTEM: A=AA/AO (anti-B), B=BB/BO (anti-A), AB=AB (neither), O=OO (both antibodies)", explanation: "ABO genotypes and antibodies" },
          { text: "UNIVERSAL: O- donor (no antigens), AB+ recipient (accepts all)", explanation: "Universal compatibility" },
          { text: "Rh SENSITIZATION: Rh- person exposed to Rh+ blood → anti-D antibodies (IgG) → hemolytic transfusion reaction on next exposure", explanation: "Rh alloimmunization mechanism" },
          { text: "CROSS-MATCH: Major (donor RBC + recipient serum), Minor (recipient RBC + donor serum)", explanation: "Two types of compatibility testing" },
          { text: "MASSIVE TRANSFUSION RATIO: 1:1:1 = RBC:Plasma:Platelets", explanation: "Ratio to avoid dilutional coagulopathy" }
        ],
        keyPoints: [
          "ABO system: O-negative is universal donor (no A, B, D antigens); AB-positive is universal recipient",
          "ABO antibodies are IgM (natural); Rh antibodies are IgG (develop after sensitization)",
          "Major cross-match (donor RBC + recipient serum) is critical; detects recipient antibodies against donor RBCs",
          "Rh-negative individuals should only receive Rh-negative blood to prevent alloimmunization",
          "Massive transfusion (>4 units RBC/12 hrs): use 1:1:1 ratio (RBC:FFP:Platelets) to prevent dilutional coagulopathy"
        ],
        textbookRefs: [
          { book: "Robbins and Cotran Pathologic Basis of Disease", chapter: "Hemostasis & Thrombosis", edition: "10th" },
          { book: "Wintrobe's Clinical Hematology", chapter: "Blood Transfusion", edition: "14th" }
        ]
      },
      {
        layer: 2,
        slug: "transfusion-medicine-mechanism",
        title: "Transfusion Medicine - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathophysiology of transfusion reactions, hemolysis mechanisms, immunology of transfusion, and prevention strategies.",
        contentMd: `# Transfusion Medicine - Mechanisms

## Hemolysis in Blood Transfusion

### Intravascular Hemolysis
- **Mechanism**: Antibody-mediated RBC lysis by complement in bloodstream
- **Occurs with**: ABO incompatibility (IgM antibodies fix complement)
- **Result**: Hemoglobin released into plasma; hemoglobinuria

### Extravascular Hemolysis
- **Mechanism**: RBCs coated with IgG antibodies → opsonization → destruction in spleen (RES system)
- **Occurs with**: Non-ABO blood group incompatibilities (Kell, Kidd, MNS)
- **Time course**: More gradual (hours to days) vs intravascular (minutes)

## Transfusion Reactions (Pathophysiology)

### Acute Hemolytic Transfusion Reaction
- **Timing**: Minutes to hours
- **Cause**: ABO incompatibility or major blood group mismatch
- **Mechanism**: Intravascular hemolysis → free hemoglobin → acute kidney injury
- **Presentation**: Fever, chills, back pain, dyspnea, hypotension, hemoglobinuria (dark urine)
- **Lab findings**: ↓Hb, ↑LDH, ↓haptoglobin, hemoglobinuria, elevated creatinine
- **Management**: Stop transfusion immediately, maintain urine output (IV fluids, loop diuretics), alkalinize urine (sodium bicarbonate)

### Delayed Hemolytic Transfusion Reaction
- **Timing**: Days to weeks after transfusion
- **Cause**: Minor blood group incompatibilities (Kidd, Duffy, MNS); anamnestic immune response
- **Mechanism**: IgG antibodies to minor antigens → extravascular hemolysis in spleen
- **Presentation**: Mild fever, mild jaundice, anemia
- **Lab findings**: ↓Hb, ↑indirect bilirubin, positive DAT, negative cross-match (antibodies may not be detected initially)

### Febrile Non-Hemolytic Transfusion Reaction (FNHTR)
- **Timing**: During or shortly after transfusion
- **Cause**: HLA alloimmunization; cytokines released from WBCs in transfused blood
- **Mechanism**: Recipient antibodies against donor WBC HLA antigens → cytokine release
- **Presentation**: Fever (>1°C rise), chills, rigors; no hemolysis
- **Management**: Antipyretics, slower transfusion rate; consider pre-transfusion medications (diphenhydramine, acetaminophen)

### Allergic Transfusion Reaction
- **Timing**: During transfusion
- **Cause**: Recipient IgE antibodies against donor plasma proteins
- **Mechanism**: Mast cell degranulation → histamine release
- **Presentation**: Urticaria, pruritus, mild angioedema
- **Management**: Antihistamines (diphenhydramine), corticosteroids; usually continue transfusion

### Anaphylactic Transfusion Reaction
- **Cause**: IgA deficiency (recipient has anti-IgA antibodies) → reaction to donor IgA
- **Mechanism**: IgE-mediated (severe, uncommon)
- **Presentation**: Severe: hypotension, bronchospasm, stridor, laryngeal edema (within minutes)
- **Management**: STOP transfusion, epinephrine 0.3-0.5 mg IM, IV access, airway management

### Transfusion-Related Acute Lung Injury (TRALI)
- **Timing**: Within 6 hours of transfusion
- **Cause**: HLA or HNA (Human Neutrophil Antigen) antibodies in donor plasma against recipient WBCs
- **Mechanism**: Complement activation, neutrophil sequestration in lungs → increased vascular permeability
- **Presentation**: Dyspnea, hypoxemia, bilateral pulmonary infiltrates on chest X-ray, fever
- **Lab findings**: Normal cardiac function (distinguishes from fluid overload)
- **Management**: Supportive (O₂, mechanical ventilation if needed); mortality 5-10%

### Transfusion-Associated Circulatory Overload (TACO)
- **Cause**: Rapid or excessive transfusion in patients with cardiac/renal disease
- **Mechanism**: Volume overload → left heart failure
- **Presentation**: Dyspnea, pulmonary edema, hypertension, JVD
- **Lab findings**: BNP elevated
- **Management**: Diuretics, slow transfusion rate

### Bacterial Contamination
- **Cause**: Growth of bacteria in transfused blood (especially platelets; stored at room temp)
- **Presentation**: High fever, sepsis, hypotension, DIC
- **Management**: Antibiotics, supportive care; mortality high

## Immunology of Transfusion

### Alloimmunization
- **Definition**: Development of antibodies against non-self antigens (HLA, blood group antigens)
- **Risk factors**: Multiple transfusions, pregnancy
- **Consequences**: Transfusion incompatibility, hemolytic transfusion reactions
- **Prevention**: Leuko-reduction (removal of WBCs from blood products)

### Transfusion-Related Immune Modulation (TRIM)
- **Effect**: Transfusion may suppress immune function
- **Mechanism**: Donor dendritic cells, cytokines
- **Clinical relevance**: May increase post-operative infection risk, cancer recurrence

## Prevention of Transfusion Reactions

1. **Proper blood typing and cross-matching**
2. **Leuko-reduction filters** (prevent FNHTR, alloimmunization)
3. **Pathogen reduction** (for infectious disease prevention)
4. **Careful transfusion technique** (slow initial rate, monitor vitals)
5. **Double-check systems** before transfusion
6. **Appropriate transfusion triggers** (avoid unnecessary transfusion)`,
        mnemonics: [
          { text: "ACUTE HEMOLYTIC: ABO incompatibility, intravascular hemolysis, fever+back pain+dark urine, stop transfusion, IV fluids", explanation: "Most dangerous transfusion reaction" },
          { text: "DELAYED HEMOLYTIC: Minor blood groups, days-weeks, mild fever/jaundice, extravascular hemolysis", explanation: "Anamnestic immune response" },
          { text: "FEBRILE NHTR: HLA alloimmunization, fever, no hemolysis, antipyretics+antihistamines", explanation: "Most common transfusion reaction" },
          { text: "ALLERGIC: Recipient IgE vs donor proteins, urticaria/pruritus, continue transfusion with antihistamines", explanation: "Usually mild, self-limited" },
          { text: "ANAPHYLACTIC: IgA deficiency (anti-IgA antibodies), hypotension+bronchospasm, epinephrine", explanation: "Severe, life-threatening" },
          { text: "TRALI: HLA antibodies in donor, dyspnea+hypoxemia+bilateral infiltrates, supportive care", explanation: "Immune-mediated lung injury" }
        ],
        keyPoints: [
          "Acute hemolytic: ABO incompatibility, intravascular hemolysis, fever + back pain + dark urine; stop transfusion, maintain urine output",
          "Delayed hemolytic: minor blood group incompatibility, IgG antibodies, extravascular hemolysis days-weeks after transfusion",
          "FNHTR: most common reaction; HLA alloimmunization, cytokine-mediated, fever without hemolysis",
          "TRALI: HLA/HNA antibodies in donor plasma, acute lung injury with hypoxemia and bilateral infiltrates within 6 hours",
          "Anaphylaxis: IgA deficiency with anti-IgA antibodies; epinephrine, airway support required"
        ],
        textbookRefs: [
          { book: "Robbins and Cotran Pathologic Basis of Disease", chapter: "Hemostasis & Thrombosis", edition: "10th" },
          { book: "Wintrobe's Clinical Hematology", chapter: "Blood Transfusion & Complications", edition: "14th" }
        ]
      },
      {
        layer: 3,
        slug: "transfusion-medicine-clinical",
        title: "Transfusion Medicine - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical indications for transfusion, blood component therapy, management of transfusion reactions, and special populations.",
        contentMd: `# Transfusion Medicine - Clinical Management

## Transfusion Indications

### RBC Transfusion
- **Hemoglobin trigger**: <7 g/dL in most patients
- **<8 g/dL in**: Coronary artery disease, heart failure, critical illness, ongoing bleeding
- **Restrictive strategy**: Better outcomes in most critically ill patients (TRICC trial)
- **1 unit RBC**: Raises Hb by ~1 g/dL; 4-5 units for acute massive bleeding

### FFP (Fresh Frozen Plasma)
- **PT >1.5 × normal** with active bleeding
- **aPTT >1.5 × normal** with active bleeding
- **Massive transfusion** protocol (>4 units RBC/12 hrs)
- **DIC** with bleeding
- **Liver disease** with coagulopathy
- **Warfarin reversal** (though prefer PCC - Prothrombin Complex Concentrate)
- **Dose**: 10-15 mL/kg (4-6 units)

### Platelet Transfusion
- **Prophylactic**: Platelet count <10,000 (or <20,000 with fever/active bleeding)
- **Therapeutic**: Active bleeding with thrombocytopenia
- **Post-transfusion**: Check platelet count increment; <5000/unit = platelet refractoriness
- **Dose**: 1 unit = 5-6 × 10⁹ platelets

### Cryoprecipitate
- **Fibrinogen <100 mg/dL** with bleeding or anticipated surgery
- **DIC** with fibrinogen <100 mg/dL
- **Massive transfusion** (give with RBC and FFP)
- **von Willebrand disease** (with low fibrinogen)
- **Dose**: 10 units (raises fibrinogen ~100 mg/dL)

### Prothrombin Complex Concentrate (PCC)
- **Warfarin reversal** (preferred over FFP; rapid, no volume overload)
- **Vitamin K deficiency** coagulopathy
- **Dose**: Varies by factor concentration and INR

## Management of Transfusion Reactions (Clinical Approach)

### Step 1: Immediate Actions
- **STOP transfusion immediately**
- Disconnect blood bag; keep IV patent with NS
- Check patient identity, blood bag labels
- Obtain vital signs, physical examination

### Step 2: Assessment & Monitoring
- **Fever + hemoglobinuria** → Acute hemolytic reaction
- **Fever only** → Febrile NHTR
- **Urticaria/pruritus** → Allergic reaction
- **Dyspnea + hypoxemia** → TRALI or fluid overload
- **Hypotension + bronchospasm** → Anaphylaxis

### Step 3: Laboratory Testing
- **Repeat type and cross-match**
- **Direct Coombs test** (DAT)
- **CBC, BMP** (creatinine, potassium)
- **LDH, bilirubin, haptoglobin**
- **PT, PTT, fibrinogen** (for DIC)
- **Blood cultures** (if fever or sepsis suspected)
- **Dipstick urine** (hemoglobinuria)

### Step 4: Specific Management

**Acute Hemolytic:**
- IV fluids (goal: maintain UOP >200 mL/hr)
- Loop diuretics (furosemide 40-80 mg IV)
- Alkalinize urine: NaHCO₃ IV (keep pH >6.5 to prevent Hb precipitation)
- Monitor renal function; avoid ACE-I
- Treat hyperkalemia if present (calcium gluconate, insulin + dextrose, kayexalate)

**Delayed Hemolytic:**
- Supportive care (usually mild)
- Monitor for worsening anemia
- Transfuse if needed; cross-match against patient's serum

**Febrile NHTR:**
- Antipyretics (acetaminophen)
- Antihistamines (diphenhydramine)
- Slow transfusion rate or resume after symptom control
- Consider pre-medication for future transfusions

**Allergic:**
- Antihistamines (diphenhydramine 25-50 mg IV)
- Corticosteroids if urticaria extensive
- Continue transfusion once symptoms resolve

**Anaphylactic:**
- **EPINEPHRINE 0.3-0.5 mg IM** (or IV if no IV access; dilute 1:10,000)
- Establish IV access, give fluids
- H1 and H2 blockers (diphenhydramine, famotidine)
- Corticosteroids (methylprednisolone 1-2 g IV)
- Airway management if needed
- **Do NOT give transfusions with IgA** in future (use IgA-deficient products)

**TRALI:**
- Supportive: O₂, mechanical ventilation if needed
- No diuretics (distinguish from TACO; normal cardiac function in TRALI)
- Monitor for resolution over 48-96 hours
- Report to blood bank (identifies problematic donor plasma)

**TACO:**
- Diuretics (furosemide 40-80 mg IV)
- Slow transfusion rate or stop
- BNP elevated (helpful in differentiating from TRALI)

## Special Populations

### Sickle Cell Disease
- **Transfusion indications**: Stroke prevention, acute vaso-occlusive crisis (if Hb <5 or cardiopulmonary compromise)
- **Issue**: Multiple transfusions → iron overload, alloimmunization (40% of patients)
- **Strategy**: Exchange transfusion to reduce sickle cell percentage; careful antigen matching

### Massive Hemorrhage / Trauma
- **Activate massive transfusion protocol** (1:1:1 ratio)
- **Include**: Tranexamic acid (TXA) if <3 hours from injury (reduces mortality in bleeding trauma)
- **Monitor**: PT/PTT/fibrinogen, lactate (marker of shock)
- **Goal**: Prevent dilutional coagulopathy

### Obstetric Hemorrhage (Postpartum)
- **Uterotonic agents** (oxytocin, misoprostol, methylergonovine) first-line
- **Transfusion**: RBC for Hb <7 g/dL, FFP/cryo for coagulopathy, platelets if <50,000 with bleeding
- **Special consideration**: Rh-negative women → RhoGAM (anti-D immunoglobulin) within 72 hours if transfused with Rh-positive blood

### Jehovah's Witnesses
- **Religious refusal of blood transfusion** (including RBC, FFP, platelets)
- **Alternatives**: Cell salvage, isovolemic hemodilution, volume expanders, recombinant erythropoietin, coagulation factors
- **Advance directives**: Obtain written advance directive documenting refusal`,
        mnemonics: [
          { text: "RBC TRIGGER: <7 in most, <8 in cardiac/critically ill, <10 in massive bleeding", explanation: "Hemoglobin transfusion thresholds" },
          { text: "FFP INDICATIONS: PT >1.5 × normal + bleeding, massive transfusion, DIC, liver disease", explanation: "When to give Fresh Frozen Plasma" },
          { text: "ACUTE HEMOLYTIC: STOP, IV fluids (UOP >200), furosemide, alkalinize urine, check labs", explanation: "Most dangerous; requires immediate intervention" },
          { text: "TRALI vs TACO: TRALI=hypoxemia+bilateral infiltrates+NO diuretics; TACO=pulmonary edema+diuretics+BNP↑", explanation: "Both present with dyspnea; different management" },
          { text: "ANAPHYLAXIS: Epinephrine 0.3-0.5 mg IM, IV access, H1/H2/steroids, airway support", explanation: "IgA deficiency with anti-IgA antibodies" }
        ],
        keyPoints: [
          "Restrictive transfusion (Hb trigger <7) better than liberal in most patients; exceptions: CAD, heart failure, ongoing bleeding",
          "Acute hemolytic: stop transfusion, aggressive IV hydration (UOP >200 mL/hr), furosemide, alkalinize urine, treat hyperkalemia",
          "Delayed hemolytic: mild, days-weeks; usually supportive care; avoid future transfusions with incompatible antigen",
          "FNHTR: most common; HLA-mediated; manage with antipyretics, antihistamines, slower rate",
          "Anaphylactic (IgA deficiency): epinephrine IM, airway management, future transfusions must be IgA-depleted"
        ],
        textbookRefs: [
          { book: "Robbins and Cotran Pathologic Basis of Disease", chapter: "Hemostasis & Thrombosis", edition: "10th" },
          { book: "API Textbook of Medicine", chapter: "Blood Transfusion", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "transfusion-medicine-exam",
        title: "Transfusion Medicine - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam facts, common clinical scenarios, and key differentials in transfusion medicine.",
        contentMd: `# Transfusion Medicine - Exam Preparation

## High-Yield Facts

### ABO System
- **O**: Universal donor (OO genotype; no A or B antigen)
- **AB**: Universal recipient (has both A and B antigens; no anti-A/anti-B)
- **ABO antibodies**: IgM (natural, present from birth)
- **Compatibility**: ABO incompatibility → acute hemolytic reaction (IgM + complement)

### Rh System
- **Rh-positive**: Has D antigen (85% of Caucasians; higher in Indian population)
- **Rh-negative**: No D antigen (15% Caucasians)
- **Rh antibodies**: IgG (develop after sensitization; NOT natural)
- **Risk**: Rh-negative receiving Rh-positive → alloimmunization

### Cross-Match
- **Major**: Donor RBC + Recipient serum (detects recipient antibodies against donor)
- **Minor**: Recipient RBC + Donor serum (detects donor antibodies against recipient)
- **Major cross-match**: Most clinically important

### Universal Compatibility
- **Donor**: O Rh-negative (universal: no A/B/D antigens)
- **Recipient**: AB Rh-positive (universal: accepts all antigens)

### Blood Components Storage
- **RBC**: 4°C, 42 days
- **FFP**: -18°C or colder, 1 year
- **Platelets**: Room temperature (20-24°C), 5 days
- **Cryoprecipitate**: -18°C or colder, 1 year

### Transfusion Triggers
- **RBC**: Hb <7 (most patients); <8 in CAD, HF, critical illness
- **Platelets**: <10,000 (prophylactic); <20,000 if fever/bleeding
- **FFP**: PT >1.5 × normal with active bleeding
- **Cryo**: Fibrinogen <100 mg/dL with bleeding

### 1 Unit RBC
- Raises hemoglobin by ~1 g/dL
- Raises hematocrit by ~3%

### Acute Hemolytic Transfusion Reaction
- **Cause**: ABO incompatibility
- **Timing**: Minutes to hours
- **Presentation**: Fever, chills, back pain, dyspnea, hemoglobinuria (dark urine)
- **Mechanism**: IgM antibodies + complement → intravascular hemolysis
- **Lab**: ↑LDH, ↑unconjugated bilirubin, ↓haptoglobin, ↑creatinine, hemoglobinuria
- **Management**: STOP, IV fluids, furosemide, alkalinize urine, treat hyperkalemia

### Delayed Hemolytic Transfusion Reaction
- **Timing**: Days to weeks
- **Cause**: Minor blood group incompatibilities (Kidd, Duffy, Kell)
- **Mechanism**: IgG antibodies → extravascular hemolysis in spleen
- **Presentation**: Mild fever, jaundice, anemia
- **Lab**: ↑indirect bilirubin, positive DAT (but cross-match may be negative initially!)

### Febrile Non-Hemolytic Transfusion Reaction (FNHTR)
- **Most common** transfusion reaction
- **Cause**: HLA alloimmunization; cytokines from WBCs
- **Presentation**: Fever (>1°C rise), chills; NO hemolysis
- **Management**: Antipyretics, antihistamines, slower transfusion

### Anaphylactic Transfusion Reaction
- **Cause**: IgA deficiency (recipient has anti-IgA antibodies)
- **Presentation**: Hypotension, bronchospasm, stridor (within minutes)
- **Management**: **Epinephrine 0.3-0.5 mg IM**, IV fluids, H1/H2 blockers, steroids
- **Prevention**: Use IgA-depleted blood products

### TRALI (Transfusion-Related Acute Lung Injury)
- **Timing**: Within 6 hours
- **Cause**: HLA antibodies in donor plasma
- **Presentation**: Dyspnea, hypoxemia, bilateral infiltrates
- **Management**: Supportive (O₂, mechanical ventilation); NO diuretics
- **Prognosis**: Mortality 5-10%; usually resolve 48-96 hours

### TACO (Transfusion-Associated Circulatory Overload)
- **Cause**: Volume overload (rapid/excessive transfusion in cardiac/renal disease)
- **Presentation**: Pulmonary edema, hypertension, JVD
- **Lab**: BNP elevated
- **Management**: Diuretics, slow transfusion rate
- **Difference from TRALI**: Normal cardiac function in TRALI; elevated BNP in TACO

### Massive Transfusion Protocol
- **Definition**: >4 units RBC in <12 hours
- **Ratio**: 1:1:1 (RBC:FFP:Platelets)
- **Why**: Prevent dilutional coagulopathy
- **Add**: Tranexamic acid (TXA) if <3 hours from injury

## Common Exam Scenarios

**Q1: Rh-negative woman delivers Rh-positive baby. What must be given?**
A: RhoGAM (anti-D immunoglobulin) within 72 hours to prevent Rh alloimmunization.

**Q2: Patient develops fever, chills, dark urine 30 min into transfusion. Most likely?**
A: Acute hemolytic transfusion reaction (ABO incompatibility). Stop transfusion, IV fluids, maintain UOP >200 mL/hr.

**Q3: Delayed hemolytic reaction: cross-match is negative. Why?**
A: Antibodies to minor blood groups (IgG) may not be detected if cross-match done before sensitization. DAT will be positive.

**Q4: FNHTR vs acute hemolytic: differentiate.**
A: FNHTR = fever only, no hemolysis, no jaundice. Acute hemolytic = fever + hemoglobinuria + jaundice + elevated creatinine.

**Q5: Patient with IgA deficiency experiences anaphylaxis during transfusion. Management?**
A: Epinephrine 0.3-0.5 mg IM, IV access, airway support. Use IgA-depleted products in future.

**Q6: TRALI vs TACO on chest X-ray: bilateral infiltrates, hypoxemia. Differentiate.**
A: TRALI = normal cardiac function, normal BNP, NO diuretics. TACO = pulmonary edema, elevated BNP, give diuretics.

**Q7: 65-year-old male with Hb 7.5, no active bleeding, normal cardiac exam. Transfuse?**
A: No. Trigger is <7 in most patients. Restrictive strategy better outcomes. Observe.`,
        mnemonics: [
          { text: "UNIVERSAL: O- donor (no antigens), AB+ recipient (all antigens OK)", explanation: "Universal compatibility" },
          { text: "ABO ANTIBODIES: IgM (natural, present at birth); Rh ANTIBODIES: IgG (develop after sensitization)", explanation: "Key immunologic difference" },
          { text: "ACUTE HEMOLYTIC: ABO incomp, fever+dark urine+back pain, STOP transfusion, fluids+furosemide+alkalinize urine", explanation: "Most dangerous; minutes-hours" },
          { text: "DELAYED HEMOLYTIC: Minor blood groups, days-weeks, mild fever+jaundice, DAT+ but cross-match may be negative", explanation: "Anamnestic response" },
          { text: "FNHTR: Most common, HLA-mediated, fever only, antipyretics+antihistamines", explanation: "Cytokine-mediated" },
          { text: "TRALI: HLA antibodies in donor, dyspnea+bilateral infiltrates+hypoxemia, NO diuretics, supportive", explanation: "Immune-mediated acute lung injury" },
          { text: "MASSIVE TRANSFUSION: >4 units RBC/12 hrs, 1:1:1 ratio (RBC:FFP:Platelets), add TXA", explanation: "Prevent dilutional coagulopathy" }
        ],
        keyPoints: [
          "ABO incompatibility → acute hemolytic reaction (IgM + complement); most dangerous transfusion reaction",
          "Rh-negative individuals can only receive Rh-negative blood; develop IgG anti-D after exposure",
          "Major cross-match (donor RBC + recipient serum) prevents incompatibility",
          "Acute hemolytic: stop, fluids (UOP >200 mL/hr), furosemide, alkalinize urine, treat hyperkalemia",
          "FNHTR most common; TRALI life-threatening but rare; TACO preventable with slow transfusion rate"
        ],
        textbookRefs: [
          { book: "Robbins and Cotran Pathologic Basis of Disease", chapter: "Hemostasis & Thrombosis", edition: "10th" },
          { book: "Wintrobe's Clinical Hematology", chapter: "Blood Transfusion", edition: "14th" }
        ]
      },
      {
        layer: 5,
        slug: "transfusion-medicine-active-recall",
        title: "Transfusion Medicine - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-based active recall for rapid retention of transfusion medicine key concepts.",
        contentMd: `# Transfusion Medicine - Active Recall Flashcards

**Q1: What is the ABO blood group of each genotype and what antibodies does each have?**
A: A (AA/AO) has anti-B; B (BB/BO) has anti-A; AB (AB) has neither; O (OO) has both anti-A and anti-B.

**Q2: Which blood type is the universal donor and which is the universal recipient?**
A: O-negative is universal donor (lacks A, B, D antigens). AB-positive is universal recipient (has all antigens).

**Q3: Describe the difference between ABO and Rh antibodies.**
A: ABO = IgM (natural, present from birth, cause immediate hemolysis via complement). Rh = IgG (develop after sensitization, cause delayed hemolysis via RES).

**Q4: What is a major cross-match and why is it clinically important?**
A: Major cross-match = donor RBC + recipient serum. Detects recipient antibodies against donor RBCs. Prevents hemolytic transfusion reactions.

**Q5: List the storage temperature, shelf life, and contraindications for RBC, FFP, and platelets.**
A: RBC: 4°C, 42 days. FFP: -18°C or colder, 1 year. Platelets: room temp (20-24°C), 5 days (risk of bacterial contamination).

**Q6: What is the difference between acute and delayed hemolytic transfusion reactions?**
A: Acute = ABO incomp, intravascular hemolysis, IgM + complement, minutes-hours, hemoglobinuria. Delayed = minor blood groups, extravascular hemolysis (spleen), IgG, days-weeks, anamnestic.

**Q7: A patient develops fever, chills, dark urine 20 min into transfusion. Management steps?**
A: STOP transfusion, keep IV patent with NS. Check vitals, patient ID, blood labels. IV fluids (goal UOP >200 mL/hr), furosemide, alkalinize urine (NaHCO₃), treat hyperkalemia if present.

**Q8: FNHTR presents with fever only, no hemolysis. What causes it and how is it managed?**
A: HLA alloimmunization; cytokines from donor WBCs. Manage with antipyretics, antihistamines, slower transfusion rate. Consider pre-medication for future transfusions (diphenhydramine, acetaminophen).

**Q9: What is the pathophysiology of anaphylactic transfusion reaction and what is the first-line treatment?**
A: IgA deficiency in recipient → anti-IgA antibodies → mast cell degranulation → anaphylaxis. First-line: **Epinephrine 0.3-0.5 mg IM**. Then: IV access, H1/H2 blockers, steroids, airway management.

**Q10: TRALI: timing, cause, presentation, and management.**
A: Within 6 hours. HLA/HNA antibodies in donor plasma. Dyspnea + hypoxemia + bilateral infiltrates + fever. Management: supportive (O₂, mechanical ventilation); NO diuretics. Mortality 5-10%.

**Q11: How do you differentiate TRALI from TACO?**
A: TRALI = hypoxemia + bilateral infiltrates + normal cardiac function + normal BNP + NO diuretics. TACO = pulmonary edema + elevated BNP + hypertension + give diuretics.

**Q12: What is massive transfusion protocol and what ratio of blood products should be used?**
A: Transfusion of >4 units RBC in <12 hours. Use 1:1:1 ratio (RBC:FFP:Platelets) to prevent dilutional coagulopathy. Add TXA if <3 hours from injury.

**Q13: What transfusion is indicated for each Hb level in different clinical scenarios?**
A: <7 g/dL in most patients; <8 in CAD, heart failure, critical illness; <10 in massive acute bleeding. Follow restrictive strategy (low trigger) unless specific indication.

**Q14: Rh-negative woman delivers Rh-positive baby. What needs to be done and within what timeframe?**
A: Administer RhoGAM (anti-D immunoglobulin) within 72 hours to prevent Rh alloimmunization in subsequent pregnancies.

**Q15: What is Jehovah's Witnesses' position on blood transfusion and what are alternatives?**
A: Religious refusal of blood and blood products. Alternatives: cell salvage, isovolemic hemodilution, volume expanders, recombinant EPO, coagulation factors. Obtain advance directive.`
      }
    ]
  },
  {
    topicCode: "PA-MOD-04-TOP-07",
    layers: [
      {
        layer: 1,
        slug: "pleural-mediastinal-foundation",
        title: "Pleural & Mediastinal Diseases - Foundation",
        estimatedMinutes: 20,
        summary: "Anatomy of pleura and mediastinum, pleural effusion types, pneumothorax classification, and mediastinal disease overview.",
        contentMd: `# Pleural & Mediastinal Diseases - Foundation

## Anatomy of Pleura

### Structure
- **Visceral pleura**: Adheres to lung surface
- **Parietal pleura**: Lines chest wall, mediastinum, diaphragm
- **Pleural space**: Potential space between visceral and parietal pleura (normally <5 mL serous fluid)
- **Function**: Lubrication; allows lung movement during respiration

### Innervation
- **Visceral pleura**: Autonomic (pain insensitive)
- **Parietal pleura**: Somatic nerves (pain sensitive) → referred pain to shoulder/back

## Pleural Effusion

### Definition & Pathophysiology
- **Effusion**: Abnormal fluid accumulation in pleural space (>5 mL)
- **Mechanisms**:
  - Increased hydrostatic pressure (CHF, cirrhosis)
  - Decreased oncotic pressure (liver disease, nephrotic syndrome, malnutrition)
  - Increased vascular permeability (inflammation, infection, malignancy)
  - Decreased lymphatic drainage (malignancy, fibrothorax)

### Light's Criteria (Exudate vs Transudate)
- **Transudate**: Filtrate from undamaged capillaries
  - Pleural/plasma protein ratio <0.5
  - Pleural/plasma LDH ratio <0.6
  - LDH <200 IU/L
  - Causes: CHF, cirrhosis, nephrotic syndrome, PE, atelectasis

- **Exudate**: Inflammation/increased permeability
  - ≥1 criterion: Protein ratio >0.5, LDH ratio >0.6, or LDH >200 IU/L
  - Causes: Infection (pneumonia, TB), malignancy, PE, autoimmune (SLE, RA)

### Common Causes in India
1. **Tuberculosis**: Most common exudative cause in India; lymphocytic predominance
2. **Pneumonia**: Parapneumonic effusion; neutrophilic
3. **Malignancy**: Lung, breast, lymphoma; exudative
4. **CHF**: Most common transudate in developed countries
5. **Cirrhosis**: Transudate; portal hypertension
6. **PE**: Exudative; hemorrhagic if infarction
7. **Pancreatitis**: Elevated amylase in effusion

### Pleural Fluid Analysis
- **Cell count**: RBC (hemorrhagic), WBC (infection, inflammation)
- **Differential**: Lymphocytes (TB, malignancy), neutrophils (acute infection, PE), eosinophils (asbestos, fungal), macrophages
- **Biochemistry**: Protein, LDH, glucose, amylase, ADA (TB)
- **Microbiology**: Gram stain, culture, acid-fast bacilli (TB)
- **Cytology**: Malignant cells

### Specific Pleural Fluid Findings
- **TB**: ADA >10 U/L (adenosine deaminase) → TB likely
- **Pneumonia**: PMN predominant, positive culture
- **Rheumatoid effusion**: Low glucose (<30 mg/dL), cholesterol crystals, high LDH
- **Lupus**: Positive ANA, LE cells

## Pneumothorax

### Definition
- Air in pleural space causing lung collapse

### Classification

#### Spontaneous Pneumothorax
- **Primary**: No underlying lung disease; rupture of apical blebs
  - More common in tall, thin males
  - Young age (20-40 years)
- **Secondary**: Underlying lung disease (COPD, TB, cystic fibrosis, asthma, bullae)
  - Older age, smokers

#### Traumatic Pneumothorax
- Penetrating or blunt chest trauma

#### Iatrogenic Pneumothorax
- Procedure-related (chest tube placement, transbronchial biopsy, central line)

### Severity Classification
- **Small**: Apical distance <2 cm or <20% on CT
- **Large**: Apical distance ≥2 cm or ≥20% on CT

### Symptoms
- **Mild**: Asymptomatic (incidental finding)
- **Severe**: Acute dyspnea, chest pain (usually sharp, pleuritic), tachycardia

### Tension Pneumothorax (Medical Emergency)
- Positive pressure in pleural space
- Causes: Tracheal deviation, JVD, hypotension, hypoxemia
- **Management**: Immediate needle decompression (2nd ICS, midclavicular line)

## Mediastinal Anatomy & Divisions

### Mediastinal Compartments
- **Superior mediastinum**: Above T1; contains great vessels, trachea, esophagus
- **Anterior mediastinum**: Anteriorly to pericardium/sternum; extends from T1 to diaphragm
- **Middle mediastinum**: Heart, pericardium, main bronchi
- **Posterior mediastinum**: Posteriorly to pericardium; esophagus, thoracic aorta, azygos system

## Mediastinal Diseases

### Mediastinitis (Acute)
- **Causes**: Esophageal perforation (Boerhaave syndrome), cardiac surgery, tracheal/bronchial injury, odontogenic
- **Presentation**: Chest pain, fever, subcutaneous emphysema
- **Diagnosis**: CT with contrast (air, fluid)
- **Management**: Antibiotics, drainage, treat underlying cause

### Mediastinal Tumors (Primary)
- **4 T's** by location:
  1. **Anterior**: Thymoma, Teratoma, Thyroid, Lymphoma
  2. **Middle**: Lymphoma, Pericardial cyst
  3. **Posterior**: Neurogenic (neurofibroma, ganglioneuroma), esophageal lesions
  4. **Superior**: Great vessels, thyroid

- **Thymoma**: Most common in adult anterior mediastinum; myasthenia gravis association
- **Germ cell tumors**: Teratoma (benign) vs dysgerminoma, choriocarcinoma (malignant)
- **Lymphoma**: Can occur in any compartment; usually Hodgkin or diffuse large B-cell

### Mediastinal Lymphadenopathy
- **Causes**: Lymphoma, TB, sarcoidosis, malignancy (metastatic), fungal infections
- **Diagnosis**: CT chest, PET-CT, lymph node biopsy

## Indian Clinical Context

### TB Pleural Effusion
- Highly prevalent in India
- Lymphocytic exudate; ADA >10 U/L
- Culture negative (TB in tissue, not fluid)
- Treatment: Anti-TB drugs; may need pleural biopsy for diagnosis

### Pneumothorax in TB
- TB can cause pneumothorax (rupture of cavity into pleural space)
- TB pneumothorax + massive hemoptysis = surgical emergency

### Esophageal Perforation
- Often missed; high mortality if delayed
- Common: Instrumentation, foreign body, Boerhaave (vomiting/straining)
- Present with mediastinitis: chest pain, shock`,
        mnemonics: [
          { text: "LIGHTS CRITERIA EXUDATE: Protein ratio >0.5 OR LDH ratio >0.6 OR LDH >200", explanation: "If ANY criterion met = exudate" },
          { text: "TRANSUDATE CAUSES: CHF, Cirrhosis, Nephrotic, PE", explanation: "Filtrates from undamaged capillaries" },
          { text: "EXUDATE CAUSES: Infection, malignancy, PE, autoimmune, TB, pancreatitis", explanation: "Inflammation or increased permeability" },
          { text: "TB EFFUSION: ADA >10 U/L, lymphocytes >80%, negative culture (TB in tissue), pleural biopsy confirmatory", explanation: "Most common exudate in India" },
          { text: "PNEUMOTHORAX: Primary (no lung disease), Secondary (COPD/TB/CF), Traumatic, Iatrogenic, Tension (emergency)", explanation: "Classification of pneumothorax" },
          { text: "MEDIASTINAL TUMORS 4Ts: Anterior=Thymoma/Teratoma/Thyroid/Lymphoma, Posterior=Neurogenic/esophageal", explanation: "Location predicts tumor type" }
        ],
        keyPoints: [
          "Pleural effusion: transudates from undamaged capillaries (CHF, cirrhosis); exudates from inflammation (infection, TB, malignancy)",
          "Light's criteria: exudate if protein ratio >0.5 OR LDH ratio >0.6 OR LDH >200 IU/L",
          "TB is most common exudative cause in India; ADA >10 U/L highly specific; culture often negative",
          "Pneumothorax: primary (young, tall, thin, no lung disease), secondary (COPD, TB, CF); tension is medical emergency",
          "Mediastinal tumors by location: anterior (thymoma, teratoma), posterior (neurogenic), superior (thyroid, great vessels)"
        ],
        textbookRefs: [
          { book: "Robbins and Cotran Pathologic Basis of Disease", chapter: "Lung", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Respiratory Pathology", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "pleural-mediastinal-mechanism",
        title: "Pleural & Mediastinal Diseases - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathophysiology of pleural effusion formation, mechanisms of pneumothorax, and pathogenesis of mediastinal diseases.",
        contentMd: `# Pleural & Mediastinal Diseases - Pathophysiologic Mechanisms

## Pathophysiology of Pleural Effusion Formation

### Starling Equation & Fluid Dynamics
- Fluid movement = Kf × [(Pc - Pi) - σ(πc - πi)]
- Where: P = hydrostatic pressure, π = oncotic pressure, c = capillary, i = interstitial

### Mechanisms Causing Transudate

**1. Increased Hydrostatic Pressure**
- CHF: ↑ venous pressure → ↑ capillary hydrostatic pressure
- Cirrhosis: Portal hypertension → right-sided heart strain
- Constrictive pericarditis: ↑ venous pressure

**2. Decreased Oncotic Pressure**
- Hypoproteinemia: <2 g/dL → decreased plasma oncotic pressure
- Nephrotic syndrome: Proteinuria → ↓ plasma proteins
- Cirrhosis: ↓ albumin synthesis
- Malnutrition: ↓ protein stores

**3. Impaired Lymphatic Drainage** (Mixed)
- Fibrosis limiting drainage

### Mechanisms Causing Exudate

**1. Increased Capillary Permeability** (Inflammation)
- Inflammatory mediators (histamine, bradykinin, leukotrienes, complement)
- Increased capillary surface area
- Endothelial activation
- Causes: Infection, TB, autoimmune, malignancy, PE with infarction

**2. Decreased Lymphatic Drainage**
- Tumor infiltration of lymphatics
- Mediastinal lymphadenopathy
- Pericardial involvement
- Result: Malignant effusions typically are exudates

**3. Direct Entry of Fluid** (Rupture/Perforation)
- Esophageal rupture → esophageal fluid enters pleura
- Pancreatic rupture → amylase-rich fluid
- Bile leak → bilious pleural effusion

## TB Pleural Effusion Mechanism

### Pathophysiology
- **TB involves**: Pleural tissue (inflammation/granuloma) rather than pleural fluid itself
- **Hypersensitivity reaction**: Delayed-type (Type IV) hypersensitivity to mycobacterial antigens
- **Result**: Lymphocytic exudate; organisms rarely cultured from fluid

### ADA (Adenosine Deaminase) Elevation
- **Mechanism**: ADA released from T lymphocytes (especially CD8+ cells) during TB immune response
- **ADA >10 U/L**: ~95% sensitivity and specificity for TB in pleural fluid
- **Useful in**: High TB prevalence areas (India, SE Asia)

## Pneumothorax Pathophysiology

### Mechanisms of Air Entry

**Primary Spontaneous:**
- **Bleb rupture**: Apical blebs/bullae from unknown etiology
- **Mechanism**: Increased compliance at apices; mechanical stress
- **Risk factors**: Tall, thin, male, smoking (↑ blebs)
- **Recurrence**: 20-25%

**Secondary Spontaneous:**
- **Underlying lung disease rupture**:
  - COPD: Rupture of emphysematous bulla
  - TB: Cavity rupture into pleura (TB pneumothorax)
  - Cystic fibrosis: Rupture of subpleural cysts
  - Asthma: Air trapping → rupture
  - PCP (in AIDS): Pneumathorax common

**Traumatic:**
- Penetrating: Direct lung injury
- Blunt: Rib fracture laceration, high-pressure mechanism

**Iatrogenic:**
- CVP line placement
- Transbronchial biopsy
- Chest tube removal (small pneumothorax)

### Tension Pneumothorax
- **Mechanism**: Flap-valve mechanism; air enters but cannot exit
- **Causes**: Rib fracture with torn lung, bronchial injury, positive pressure ventilation
- **Physiology**: ↑ Intrapleural pressure → mediastinal shift → ↓ venous return → ↓ cardiac output
- **Result**: Hemodynamic collapse, death if untreated

## Mesothelioma Pathophysiology

### Asbestos-Related Mechanism
- **Exposure**: Occupational (mining, shipyard, construction, insulation)
- **Mechanism**: Asbestos fibers → pleural irritation → inflammation → pleural thickening → malignant transformation
- **Latency**: 20-50 years post-exposure
- **Types**:
  - **Epithelioid** (best prognosis): Cuboidal cells
  - **Sarcomatoid** (worst prognosis): Spindle cells
  - **Mixed**

### Molecular Pathology
- **Loss of function**: Inactivation of p53, RB, PTEN
- **Viral involvement**: SV40 virus in some cases (found in mesothelioma tissue)
- **Mesothelial transformation**: → malignant proliferation

## Mediastinitis Pathophysiology

### Esophageal Perforation (Boerhaave)
- **Mechanism**: Transmural tear from forceful vomiting/retching/straining
- **Consequence**: Esophageal contents (saliva, bacteria, food) → mediastinal contamination
- **Inflammatory cascade**: Acute inflammation → purulent fluid → sepsis if delayed treatment

### Cardiac Surgery-Related
- **Mechanism**: Sternal wound infection → mediastinal infection
- **Causative organisms**: S. aureus, Streptococci, Gram-negative rods
- **Risk factors**: Obesity, diabetes, COPD, prolonged surgery, renal failure

### Descending Necrotizing Mediastinitis (DNMT)
- **Pathway**: Oropharyngeal infection → cervical spaces → descending along fascial planes
- **Organisms**: Polymicrobial oral flora (anaerobes)
- **Mortality**: 10-40% despite treatment

## Thymoma Pathophysiology

### Myasthenia Gravis Association
- **Mechanism**: Aberrant MHC expression → autoimmune response to acetylcholine receptor
- **Frequency**: 30-50% of thymoma patients have MG; 10-15% of MG patients have thymoma
- **Treatment**: Thymectomy can improve MG

### Malignant Potential
- **WHO Classification**: A, AB, B1, B2, B3, C (malignancy increases A→C)
- **Invasion**: Adjacent structures, vascular invasion predicts poor prognosis
- **Metastases**: Pleural dissemination, hematogenous spread in advanced disease`,
        mnemonics: [
          { text: "STARLING: Hydrostatic ↑ vs Oncotic ↓ = Transudate", explanation: "Transudate from imbalance in pressures" },
          { text: "TB EFFUSION: Type IV hypersensitivity, lymphocytes release ADA (>10 = TB), organisms rare in fluid", explanation: "TB in tissue, not fluid" },
          { text: "PRIMARY PTX: Apical bleb rupture, young tall thin males, smoking, 20-25% recurrence", explanation: "No underlying lung disease" },
          { text: "SECONDARY PTX: COPD/TB/CF/asthma bullae rupture, older age", explanation: "Underlying lung disease" },
          { text: "TENSION PTX: Flap-valve mechanism, air in but not out, mediastinal shift, hemodynamic collapse → needle decompression", explanation: "Medical emergency" },
          { text: "MESOTHELIOMA: Asbestos exposure, 20-50 year latency, pleural fibrosis → malignant transformation, p53/RB inactivation", explanation: "Occupational lung cancer" }
        ],
        keyPoints: [
          "Transudate: imbalance in hydrostatic/oncotic pressures (CHF, cirrhosis, nephrotic); exudate: inflammation or lymphatic obstruction (TB, malignancy)",
          "TB pleural effusion: Type IV hypersensitivity, lymphocytic, ADA >10 U/L specific, organisms rarely cultured",
          "Primary pneumothorax: bleb rupture, young males, smoking; secondary: underlying lung disease (COPD, TB, CF)",
          "Tension pneumothorax: flap-valve mechanism, mediastinal shift, hemodynamic compromise; emergency needle decompression at 2nd ICS midclavicular",
          "Mesothelioma: asbestos exposure → pleural inflammation → malignant transformation; latency 20-50 years"
        ],
        textbookRefs: [
          { book: "Robbins and Cotran Pathologic Basis of Disease", chapter: "Lung", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Respiratory Pathology", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "pleural-mediastinal-clinical",
        title: "Pleural & Mediastinal Diseases - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical diagnosis and management of pleural effusion, pneumothorax, mesothelioma, and mediastinal disorders.",
        contentMd: `# Pleural & Mediastinal Diseases - Clinical Management

## Pleural Effusion: Clinical Approach

### Presentation
- Dyspnea (most common)
- Pleuritic chest pain (especially with pneumonia)
- Cough
- May be asymptomatic (incidental CXR finding)

### Diagnostic Approach

**Step 1: Imaging**
- **CXR**: Blunting of costophrenic angle (>200 mL needed for visible blunting)
- **Ultrasound**: Detects as little as 50 mL; guides thoracentesis
- **CT**: Assess for loculation, underlying mass, mediastinal involvement

**Step 2: Thoracentesis (Diagnostic & Therapeutic)**
- **Indications**:
  - First undiagnosed effusion (new onset)
  - >1 cm on ultrasound and dyspnea
  - Bilateral effusions with recent risk factor (no need for tap if CHF)
- **Complications**: Pneumothorax (1-5%), hemothorax, infection, RV puncture
- **Contraindications**: Only anticoagulation (if urgent) or thrombocytopenia <20,000

**Step 3: Pleural Fluid Analysis**
- **Cell count & differential**: Lymphocytes (TB), PMN (acute infection), RBC (malignancy, PE, trauma)
- **Chemistry**: Protein, LDH, glucose, amylase, bilirubin, triglycerides
- **Light's criteria**: Distinguish exudate vs transudate
- **Special stains**: AFB (TB), Gram stain (bacteria)
- **Culture**: Blood, acid-fast, fungal
- **Cytology**: Malignant cells
- **Immunology**: ANA (lupus), RF (RA), complement

### Management by Cause

**TB Pleural Effusion**
- **Diagnosis**: Pleural biopsy (higher yield than fluid culture); ADA >10 U/L; clinical + imaging
- **Treatment**: Standard anti-TB therapy (RIPE × 2 months, then INH+RIF × 4 months)
- **Prognosis**: Good if diagnosed early

**Parapneumonic Effusion**
- **Classification**:
  - **Uncomplicated**: Serous fluid, negative culture, resolves with antibiotics
  - **Complicated**: Fibrin deposit, elevated LDH/low glucose, pH <7, high LDH
  - **Empyema**: Positive culture or positive Gram stain (pus in pleural space)
- **Management**:
  - Uncomplicated: Antibiotics alone
  - Complicated/Empyema: Antibiotics + tube thoracostomy or chest tube
  - Loculated: Fibrinolytic agents (tPA + DNase) or VATS

**Malignant Effusion**
- **Diagnosis**: Pleural fluid cytology (60-90% sensitive); pleural biopsy if negative
- **Management**: Treat underlying cancer; palliative care
- **Pleurodesis**: Talc slurry or tetracycline for recurrent symptomatic effusion
- **Prognosis**: Median survival 6-12 months

**CHF-Related Effusion**
- **Features**: Bilateral (70%), right >left, proteinaceous (can mimic exudate by Light's), usually no symptoms from effusion
- **Management**: Diuretics (furosemide), ACE-I, beta-blockers, treat heart failure
- **Drainage**: Rarely needed unless large effusion causing dyspnea

**PE-Related Effusion**
- **Type**: Exudative, hemorrhagic (10-15%), small-moderate
- **Management**: Anticoagulation (DOAC or heparin)

## Pneumothorax: Clinical Management

### Presentation
- **Small/Stable**: May be asymptomatic; incidental finding
- **Large**: Acute dyspnea, chest pain, tachycardia, reduced breath sounds

### Diagnosis
- **CXR**: Lung collapse (visceral pleural line visible), mediastinal shift (tension)
- **CT**: More sensitive; useful if diagnosis unclear
- **ABG**: Hypoxemia (if large)

### Management

**Primary Spontaneous, Small (<2 cm apical distance)**
- Observation: Can reabsorb spontaneously (air is resorbed at ~1-2% per day)
- Close outpatient follow-up with repeat CXR at 2-4 weeks
- Activity restriction (no flying, strenuous exercise)
- Avoid positive pressure (can worsen)

**Primary Spontaneous, Large (≥2 cm) or Symptomatic**
- **Needle aspiration**: 14-16 gauge needle, aspirate until resistance, success rate 60-75%
- If aspiration fails → **chest tube** (tube thoracostomy)

**Secondary Pneumothorax**
- Generally need intervention due to limited lung reserve
- **Chest tube drainage** if >2 cm or symptomatic
- **Observation** only if <2 cm AND asymptomatic AND close follow-up available

**Tension Pneumothorax** (Medical Emergency)
- **Immediate**: Needle decompression at 2nd ICS, midclavicular line
- Followed by chest tube placement
- Do NOT delay for imaging

**Iatrogenic/Traumatic**
- **Small**: Observation
- **Large**: Chest tube placement

**Persistent Air Leak**
- If continues >7-10 days → consider:
  - VATS (video-assisted thoracoscopic surgery)
  - Chemical pleurodesis (talc, tetracycline)
  - Mechanical pleurodesis (parietal pleural abrasion)
- **Recurrence rate**: 10-20% for primary, 40% for secondary

## Mesothelioma: Clinical Diagnosis & Management

### Presentation
- **Pleural disease** (80%): Chest wall pain, dyspnea, cough, pleural effusion
- **Peritoneal disease** (20%): Abdominal pain, ascites, bowel obstruction
- **Latency**: 20-50 years after asbestos exposure

### Diagnosis
- **CXR/CT**: Pleural thickening, effusion, nodularity, mass
- **Pleural biopsy**: Immunohistochemistry (CK5/6+, calretinin+, WT-1+, EpCAM-, MOC31-)
- **Histology**: Epithelioid (best), sarcomatoid (worst), mixed
- **Staging**: TNM system; pleural involvement, chest wall, mediastinum, hematogenous

### Management
- **Surgery**: Pleurectomy/decortication (less morbid) or extrapleural pneumonectomy
- **Chemotherapy**: Cisplatin + pemetrexed (extends median survival to 12-16 months)
- **Radiation**: Adjuvant or palliative
- **Prognosis**: Median survival 12-21 months with treatment; poor overall

## Mediastinal Diseases: Clinical Approach

### Mediastinitis (Acute)
- **Presentation**: Fever, chest pain, shock, subcutaneous emphysema
- **Diagnosis**: CT with contrast (air, fluid, collection)
- **Management**:
  - **Empiric antibiotics**: Broad-spectrum (covers S. aureus, Gram-negative, anaerobes)
  - **Drainage**: CT-guided or surgical
  - **Source control**: Treat esophageal perforation (endoscopy/surgery), repair cardiac wound
  - **Mortality**: 40-50% if delayed treatment

### Thymoma
- **Presentation**: Incidental mediastinal mass, myasthenia gravis (30-50%)
- **Diagnosis**: CT chest, biopsy
- **Management**:
  - **Early-stage**: Complete surgical resection (curative in many)
  - **Advanced**: Surgery + chemotherapy ± radiation
  - **MG associated**: Thymectomy improves MG in >80% of thymoma patients

### Germ Cell Tumors
- **Teratoma**: Benign; contains mature tissues (hair, bone, fat); no treatment often needed
- **Dysgerminoma/Choriocarcinoma**: Malignant; chemotherapy (BEP: bleomycin, etoposide, cisplatin)

### Neurogenic Tumors
- **Neurofibroma** (most common posterior mediastinal tumor): Usually asymptomatic; surgical resection
- **Ganglioneuroma**: Benign; watch or resect if large
- **Neuroblastoma** (in children): Malignant; chemotherapy + surgery`,
        mnemonics: [
          { text: "LIGHT'S CRITERIA: ≥1 of Protein ratio >0.5, LDH ratio >0.6, LDH >200 IU/L = EXUDATE", explanation: "Distinguishes exudate from transudate" },
          { text: "TB DIAGNOSIS: ADA >10, pleural biopsy (higher yield), AFB culture often negative", explanation: "Best diagnostic approach" },
          { text: "PARAPNEUMONIC: Uncomplicated=serous/negative culture, Complicated=fibrin/low pH/high LDH, Empyema=positive culture/pus", explanation: "Severity classification" },
          { text: "PTX MANAGEMENT: Small primary=observation, Large=aspiration/chest tube, Tension=immediate needle decompression", explanation: "Treatment based on size/symptoms" },
          { text: "MESOTHELIOMA: Asbestos exposure, pleural thickening/effusion/nodules, biopsy with immunohistochemistry, cisplatin+pemetrexed", explanation: "Diagnostic and treatment approach" }
        ],
        keyPoints: [
          "Pleural effusion diagnosis: imaging, then thoracentesis with fluid analysis; Light's criteria to distinguish exudate vs transudate",
          "TB pleural effusion: ADA >10 U/L, pleural biopsy confirmatory, treat with anti-TB drugs",
          "Pneumothorax: small primary can observe (air resorbs spontaneously); large/secondary needs intervention (needle aspiration, chest tube)",
          "Tension pneumothorax: immediate needle decompression at 2nd ICS midclavicular, then chest tube",
          "Mesothelioma: asbestos exposure history, CT for thickening/effusion, pleural biopsy, poor prognosis (median 12-21 months)"
        ],
        textbookRefs: [
          { book: "Robbins and Cotran Pathologic Basis of Disease", chapter: "Lung", edition: "10th" },
          { book: "API Textbook of Medicine", chapter: "Pleural Disorders", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "pleural-mediastinal-exam",
        title: "Pleural & Mediastinal Diseases - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam facts, common scenarios, and key differentials for pleural and mediastinal diseases.",
        contentMd: `# Pleural & Mediastinal Diseases - Exam Preparation

## High-Yield Facts

### Light's Criteria for Exudate
- ≥1 of:
  - Pleural/plasma protein >0.5
  - Pleural/plasma LDH >0.6
  - LDH >200 IU/L
- If ≥1 criterion → EXUDATE
- Sensitivity ~98%; specificity ~97%

### Common Pleural Effusion Causes
- **Transudate**: CHF, cirrhosis, nephrotic, PE, atelectasis (CHFNEA)
- **Exudate**: TB, pneumonia, malignancy, PE, autoimmune (TPMEA)

### TB Pleural Effusion
- **ADA >10 U/L**: ~95% sensitivity, ~95% specificity
- **Lymphocytes**: >80% (usually)
- **Glucose**: Low (but not as low as rheumatoid)
- **Culture**: Negative (TB in tissue, not fluid)
- **Diagnosis**: Pleural biopsy (better yield than culture)

### Pleural Fluid Findings by Cause
| Cause | Cell Type | Glucose | LDH | Culture | Special |
|-------|-----------|---------|-----|---------|---------|
| TB | Lymph | Low | ↑ | Negative | ADA >10 |
| Pneumonia | PMN | Normal | ↑ | Positive | Turbid/yellow |
| Rheumatoid | Lymph | <30 | Very ↑ | Negative | Cholesterol crystals |
| Lupus | Lymph | Normal | Normal | Negative | ANA+ |
| Malignancy | Mixed | Normal | ↑ | Negative | Malignant cells |
| PE | Mixed/Lymph | Normal | ↑ | Negative | Hemorrhagic |

### Pneumothorax Classification
- **Primary**: No lung disease; tall, thin young males; smoking
- **Secondary**: Underlying disease (COPD, TB, CF, asthma, PCP)
- **Traumatic**: Rib fracture, penetrating injury
- **Iatrogenic**: Procedure-related
- **Tension**: Emergency; mediastinal shift, hemodynamic collapse

### Pneumothorax Size Classification
- **Small**: Apical distance <2 cm (or <20% on CT)
- **Large**: Apical distance ≥2 cm (or ≥20% on CT)

### Pneumothorax Management
- **Primary, small**: Observation (air resorbs at 1-2%/day)
- **Primary, large/symptomatic**: Needle aspiration or chest tube
- **Secondary**: Usually needs intervention (limited reserve)
- **Tension**: Emergency needle decompression at 2nd ICS, midclavicular → chest tube

### Mesothelioma
- **Etiology**: Asbestos exposure (occupational)
- **Latency**: 20-50 years
- **Pathology**: Epithelioid (best prognosis), sarcomatoid (worst), mixed
- **Presentation**: Pleural effusion, chest pain, dyspnea
- **Diagnosis**: Pleural biopsy; immunohistochemistry (CK5/6+, calretinin+, WT-1+)
- **Treatment**: Surgery + chemotherapy (cisplatin + pemetrexed)
- **Prognosis**: Median survival 12-21 months

### Mediastinal Tumors (4 T's)

**Anterior Mediastinum:**
- Thymoma (most common adult anterior mediastinal tumor)
- Teratoma (most common anterior mediastinal tumor overall)
- Thyroid (ectopic thyroid)
- "T-cell" lymphoma

**Middle Mediastinum:**
- Lymphoma
- Pericardial cyst

**Posterior Mediastinum:**
- Neurogenic tumors (neurofibroma, ganglioneuroma, neuroblastoma)
- Esophageal pathology

**Superior Mediastinum:**
- Great vessels
- Ectopic thyroid

### Thymoma
- **Association**: Myasthenia gravis (30-50% of thymoma; 10-15% of MG have thymoma)
- **Treatment**: Thymectomy beneficial for MG
- **WHO classification**: A-C (C most malignant)
- **Surgery**: Complete resection curative in early stages

### Mediastinitis
- **Common cause**: Esophageal perforation (Boerhaave syndrome)
- **Others**: Post-cardiac surgery, odontogenic, tracheal injury
- **Presentation**: Fever, chest pain, subcutaneous emphysema, shock
- **Diagnosis**: CT with contrast (air/fluid collection)
- **Management**: Broad-spectrum antibiotics, source control (surgery/endoscopy)

## Common Exam Questions

**Q1: Patient with TB presents with lymphocytic pleural effusion, ADA 15 U/L. Diagnosis?**
A: TB pleural effusion. ADA >10 with lymphocytes and clinical suspicion is diagnostic. Pleural biopsy if confirmation needed.

**Q2: Acute dyspnea, sharp pleuritic pain, reduced breath sounds on left. CXR shows visceral pleural line. Diagnosis?**
A: Spontaneous pneumothorax. Assess if primary (young, no lung disease) or secondary (COPD, TB). Determine size; manage based on size and symptoms.

**Q3: Tall, 22-year-old male with small pneumothorax (<2 cm), minimal symptoms. Management?**
A: Observation. Primary spontaneous pneumothorax, small, asymptomatic can be managed conservatively; reabsorbs at 1-2%/day. Close follow-up with repeat CXR.

**Q4: Patient with COPD, 8 cm pneumothorax, severe dyspnea. Management?**
A: Chest tube placement (secondary pneumothorax with large size and symptoms). Needle aspiration has lower success rate in secondary.

**Q5: Acute onset fever, chest pain, subcutaneous emphysema post-esophageal procedure. Diagnosis?**
A: Acute mediastinitis (from esophageal perforation). CT confirms air/fluid. Immediate antibiotics + surgical drainage/esophageal repair.

**Q6: Pleural effusion with protein ratio 0.45, LDH 150. Light's criteria?**
A: Transudate (ALL criteria <threshold). Causes: CHF, cirrhosis, nephrotic, PE, atelectasis.

**Q7: 65-year-old smoker with pleural effusion, malignant cells on cytology. Prognosis?**
A: Malignant effusion. Median survival 6-12 months. Manage with pleurodesis if symptomatic/recurrent (talc slurry or chemotherapy).`,
        mnemonics: [
          { text: "LIGHT'S: ≥1 of Protein ratio >0.5, LDH ratio >0.6, LDH >200 = EXUDATE", explanation: "Exudate criteria" },
          { text: "TB EFFUSION: ADA >10, Lymph >80%, Negative culture, Pleural biopsy confirmatory", explanation: "TB-specific findings" },
          { text: "PTX MANAGEMENT: Primary small=observe, Primary large=aspiration/tube, Secondary=usually tube, Tension=needle decomp", explanation: "Size and type determine management" },
          { text: "MEDIASTINAL TUMORS: Anterior=4Ts (Thymoma, Teratoma, Thyroid, Lymphoma), Posterior=Neurogenic, Superior=Thyroid/vessels", explanation: "Location predicts tumor" },
          { text: "THYMOMA: MG association 30-50%, thymectomy improves MG, WHO A-C classification", explanation: "Clinical features and treatment" }
        ],
        keyPoints: [
          "Light's criteria: exudate if ≥1 of protein ratio >0.5, LDH ratio >0.6, or LDH >200 IU/L",
          "TB pleural effusion: ADA >10, lymphocytic, culture negative (TB in tissue); pleural biopsy confirmatory",
          "Pneumothorax management: small primary observe; large/secondary need intervention; tension needs emergency needle decompression",
          "Mediastinal tumors: anterior (thymoma, teratoma), posterior (neurogenic), superior (thyroid, great vessels)",
          "Mesothelioma: asbestos exposure, 20-50 year latency, poor prognosis (median 12-21 months)"
        ],
        textbookRefs: [
          { book: "Robbins and Cotran Pathologic Basis of Disease", chapter: "Lung", edition: "10th" },
          { book: "Harsh Mohan Textbook of Pathology", chapter: "Respiratory Pathology", edition: "8th" }
        ]
      },
      {
        layer: 5,
        slug: "pleural-mediastinal-active-recall",
        title: "Pleural & Mediastinal Diseases - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-based active recall for pleural and mediastinal disease key concepts.",
        contentMd: `# Pleural & Mediastinal Diseases - Active Recall Flashcards

**Q1: What are Light's criteria for determining if an effusion is an exudate?**
A: An effusion is exudate if it meets ≥1 criterion: 1) Pleural/plasma protein ratio >0.5; 2) Pleural/plasma LDH ratio >0.6; 3) LDH >200 IU/L. Sensitivity ~98%, specificity ~97%.

**Q2: List 5 causes of transudate and 5 causes of exudate.**
A: Transudates: CHF, cirrhosis, nephrotic syndrome, PE, atelectasis. Exudates: TB, pneumonia, malignancy, autoimmune (lupus, RA), pancreatitis.

**Q3: What is ADA and why is it useful in TB pleural effusion?**
A: ADA (adenosine deaminase) is released from T lymphocytes during TB immune response. ADA >10 U/L has ~95% sensitivity and specificity for TB in pleural fluid; useful in high TB prevalence areas like India.

**Q4: Why is TB pleural fluid culture often negative despite TB diagnosis?**
A: TB primarily affects pleural tissue (granulomas), not the fluid itself. Organisms are in tissue, not in fluid, so culture of pleural fluid is often negative. Pleural biopsy has higher yield.

**Q5: Classify pneumothorax types: primary vs secondary.**
A: Primary: no underlying lung disease; rupture of apical blebs; young, tall, thin males; smoking. Secondary: underlying disease (COPD, TB, CF, asthma, PCP); older, smokers; worse prognosis; lower reabsorption rate.

**Q6: What are the size definitions for pneumothorax and management?**
A: Small: apical distance <2 cm (or <20% on CT). Large: ≥2 cm (or ≥20%). Small primary = observe (resorbs 1-2%/day). Large or symptomatic = needle aspiration/chest tube. Secondary = usually intervention.

**Q7: Describe the management of tension pneumothorax and why it's an emergency.**
A: Tension pneumothorax: air enters pleura but cannot exit (flap-valve). Causes mediastinal shift → ↓ venous return → ↓ cardiac output → hemodynamic collapse. EMERGENCY: immediate needle decompression at 2nd ICS midclavicular line, then chest tube.

**Q8: What is mesothelioma and what is its association with asbestos?**
A: Mesothelioma is malignant transformation of pleura from asbestos exposure. Latency 20-50 years. Occupational exposure (mining, shipyard, insulation). Pleural thickening/effusion/nodules on imaging. Diagnosed via pleural biopsy with immunohistochemistry.

**Q9: How are mesothelioma types classified and which has best/worst prognosis?**
A: Epithelioid (cuboidal cells) = best prognosis. Sarcomatoid (spindle cells) = worst prognosis. Mixed = intermediate. WHO classification (A-C) also stratifies by malignancy; C most aggressive.

**Q10: What is the "4 T's" rule for anterior mediastinal masses?**
A: Anterior mediastinal masses: Thymoma (most common in adults), Teratoma (most common overall), Thyroid (ectopic), "T-cell" lymphoma. Mnemonic helps identify probable diagnosis by location.

**Q11: Thymoma and myasthenia gravis: what is the relationship and management?**
A: 30-50% of thymoma patients have MG; 10-15% of MG patients have thymoma. MG mechanism: thymoma → aberrant MHC → autoimmune response to acetylcholine receptor. Treatment: thymectomy improves MG in >80%.

**Q12: Posterior mediastinal tumors: what is the most common type and how is it managed?**
A: Neurofibroma is most common posterior mediastinal tumor. Usually asymptomatic, incidental finding. Management: surgical resection if large or symptomatic. Benign course.

**Q13: What causes acute mediastinitis and what is the most common etiology?**
A: Acute mediastinitis from esophageal perforation (Boerhaave from forceful vomiting), cardiac surgery, tracheal injury, odontogenic infection. Boerhaave most common cause. Presents with fever, chest pain, shock, subcutaneous emphysema.

**Q14: How is acute mediastinitis diagnosed and what is the management approach?**
A: Diagnosis: CT with IV contrast (shows air, fluid, collection in mediastinum). Management: broad-spectrum antibiotics (covers S. aureus, Gram-neg, anaerobes), CT-guided or surgical drainage, source control (esophageal repair, cardiac wound closure). Mortality 40-50% if delayed.

**Q15: Parapneumonic effusion classification: what are the 3 types and management?**
A: 1) Uncomplicated: serous, negative culture, resolves with antibiotics. 2) Complicated: fibrin deposition, low pH, high LDH, elevated proteins; treat with antibiotics + consider drainage. 3) Empyema: positive culture/pus; antibiotics + chest tube or VATS.`
      }
    ]
  }
];
