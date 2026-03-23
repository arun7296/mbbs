import type { TopicLessons } from "./content-loader";

export const surgeryLessonsPartXXI: TopicLessons[] = [
  {
    topicCode: "SU-MOD-09-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "surgical-oncology-layer-1-foundation",
        title: "Surgical Oncology Principles - Foundation",
        estimatedMinutes: 22,
        summary: "Cancer biology basics, tumor staging, grading, and principles of surgical oncology.",
        contentMd: `# Surgical Oncology Principles - Foundation

## Cancer Biology Essentials
### Hallmarks of Cancer (Hanahan & Weinberg)
- Sustained proliferative signaling
- Evading growth suppressors
- Resisting cell death (apoptosis)
- Enabling replicative immortality (telomerase)
- Inducing angiogenesis (VEGF)
- Activating invasion and metastasis
- Additional: Reprogramming energy metabolism, evading immune destruction

### Tumor Nomenclature
- Benign: -oma (lipoma, fibroma, adenoma)
- Malignant epithelial: Carcinoma (adenocarcinoma, squamous cell carcinoma)
- Malignant mesenchymal: Sarcoma (osteosarcoma, liposarcoma)
- Exceptions: Melanoma, lymphoma, seminoma (malignant despite -oma suffix)

### Routes of Spread
- **Local**: Direct invasion of adjacent tissues
- **Lymphatic**: Most common route for carcinomas; regional lymph nodes first
- **Hematogenous**: Most common route for sarcomas; lung and liver most common sites
- **Transcoelomic**: Across body cavities (e.g., peritoneal seeding, Krukenberg tumor)
- **Perineural**: Along nerve sheaths (e.g., adenoid cystic carcinoma)

## Staging Systems
### TNM Staging (AJCC/UICC)
- **T (Tumor)**: Size and local extent (T1-T4)
- **N (Nodes)**: Regional lymph node involvement (N0-N3)
- **M (Metastasis)**: Distant spread (M0/M1)
- Clinical staging (cTNM): Based on examination and imaging
- Pathological staging (pTNM): Based on surgical specimen

### Stage Grouping
- Stage I: Small tumor, no nodes, no mets (best prognosis)
- Stage II: Larger tumor or limited extension, no nodes
- Stage III: Lymph node involvement
- Stage IV: Distant metastases (worst prognosis)

## Tumor Grading
- Histological assessment of differentiation
- **Well-differentiated (G1)**: Resembles normal tissue; better prognosis
- **Moderately differentiated (G2)**: Some resemblance to normal
- **Poorly differentiated (G3)**: Little resemblance; worse prognosis
- **Undifferentiated (G4)**: No resemblance; worst prognosis
- Grading reflects tumor biology; staging reflects tumor burden

## Principles of Surgical Oncology
### Goals of Surgery in Cancer
- **Curative (R0 resection)**: Complete removal of tumor with negative margins
- **Palliative**: Symptom relief (bypass obstruction, control bleeding, debulking)
- **Diagnostic**: Biopsy for tissue diagnosis
- **Prophylactic**: Remove premalignant lesions (e.g., colectomy in FAP)
- **Reconstructive**: Restore form and function after cancer surgery

### Surgical Margins
- R0: Microscopically negative margins (aim of curative surgery)
- R1: Microscopically positive margins (tumor at margin)
- R2: Macroscopically positive margins (gross residual tumor)`,
        mnemonics: [
          { text: "TNM: Tumor size, Node involvement, Metastasis = Staging", explanation: "Universal cancer staging system; determines treatment and prognosis" },
          { text: "Carcinoma = Lymphatic spread; Sarcoma = Hematogenous spread", explanation: "Primary route of metastasis differs by tumor origin" },
        ],
        keyPoints: [
          "Hallmarks of cancer: sustained proliferation, evading apoptosis, angiogenesis, invasion/metastasis",
          "TNM staging: T=tumor extent, N=nodes, M=metastasis; determines stage I-IV",
          "R0 resection: microscopically negative margins; goal of curative surgery",
          "Carcinomas spread via lymphatics; sarcomas spread via blood (hematogenous)",
          "Grading reflects differentiation (biology); staging reflects extent (burden)",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 8: Surgical Oncology", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 9: Principles of Oncology", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "surgical-oncology-layer-2-mechanism",
        title: "Surgical Oncology Principles - Mechanism",
        estimatedMinutes: 25,
        summary: "Molecular oncology, tumor markers, cancer genetics, and mechanisms of chemotherapy and radiotherapy.",
        contentMd: `# Surgical Oncology Principles - Mechanism

## Oncogenes and Tumor Suppressors
### Oncogenes (Gain of Function - Dominant)
- **RAS** (KRAS, NRAS): Most commonly mutated oncogene; GTPase signaling
- **MYC**: Transcription factor; Burkitt lymphoma
- **HER2/neu (ERBB2)**: Breast cancer; target for trastuzumab
- **BCR-ABL**: Philadelphia chromosome; CML; target for imatinib
- **RET**: MEN 2 syndromes; medullary thyroid carcinoma

### Tumor Suppressors (Loss of Function - Recessive)
- **p53**: "Guardian of the genome"; most commonly mutated gene in cancer; Li-Fraumeni syndrome
- **RB**: Retinoblastoma; cell cycle G1-S checkpoint
- **APC**: Familial adenomatous polyposis; Wnt pathway
- **BRCA1/2**: Breast and ovarian cancer; DNA repair
- **VHL**: Von Hippel-Lindau; renal cell carcinoma

## Tumor Markers
| Marker | Cancer |
|--------|--------|
| CEA | Colorectal (monitoring) |
| AFP | Hepatocellular, testicular (yolk sac) |
| CA-125 | Ovarian cancer |
| CA 19-9 | Pancreatic cancer |
| PSA | Prostate cancer |
| Beta-hCG | Choriocarcinoma, testicular |
| Calcitonin | Medullary thyroid carcinoma |
| S-100 | Melanoma |
- Markers are for monitoring, NOT definitive diagnosis

## Mechanisms of Treatment
### Chemotherapy Mechanisms
- **Alkylating agents** (cyclophosphamide): Cross-link DNA strands
- **Antimetabolites** (5-FU, methotrexate): Mimic normal substrates; block DNA synthesis
- **Vinca alkaloids** (vincristine): Inhibit microtubule assembly (M phase)
- **Taxanes** (paclitaxel): Stabilize microtubules; prevent disassembly
- **Platinum compounds** (cisplatin): DNA cross-linking
- **Anthracyclines** (doxorubicin): Topoisomerase II inhibition; DNA intercalation

### Radiotherapy Mechanism
- Ionizing radiation causes DNA double-strand breaks
- Direct effect: Radiation directly damages DNA
- Indirect effect: Free radical generation (oxygen effect) damages DNA
- Radiosensitivity depends on: Cell cycle phase (M and G2 most sensitive), oxygenation, differentiation
- Fractionation: Multiple small doses allow normal tissue recovery between treatments

### Targeted Therapy
- **Imatinib**: BCR-ABL tyrosine kinase inhibitor (CML)
- **Trastuzumab**: Anti-HER2 monoclonal antibody (breast cancer)
- **Bevacizumab**: Anti-VEGF (colorectal, renal)
- **Rituximab**: Anti-CD20 (B-cell lymphoma)
- **Pembrolizumab/Nivolumab**: Anti-PD-1 immune checkpoint inhibitors

## Hereditary Cancer Syndromes
- **FAP**: APC gene; colorectal cancer
- **Lynch syndrome (HNPCC)**: MMR genes; CRC + endometrial + others
- **Li-Fraumeni**: p53; multiple cancers (sarcoma, breast, brain, adrenal)
- **MEN 1**: Menin gene; parathyroid + pituitary + pancreas
- **MEN 2**: RET proto-oncogene; medullary thyroid + pheochromocytoma`,
        mnemonics: [
          { text: "p53 = Guardian of the Genome; most commonly mutated gene in human cancer", explanation: "p53 regulates cell cycle arrest, DNA repair, and apoptosis; lost in >50% of cancers" },
          { text: "Tumor markers: CEA=Colon, AFP=liver/testis, CA125=Ovary, CA19-9=Pancreas, PSA=Prostate", explanation: "Key marker-cancer associations for exams" },
        ],
        keyPoints: [
          "p53: most commonly mutated tumor suppressor; RAS: most commonly mutated oncogene",
          "Tumor markers for monitoring, NOT definitive diagnosis",
          "Chemotherapy: alkylating agents, antimetabolites, vinca alkaloids, taxanes, platinum",
          "Radiotherapy: DNA damage via direct and indirect (free radical) mechanisms",
          "Targeted therapy: imatinib (CML), trastuzumab (HER2+ breast), bevacizumab (anti-VEGF)",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 8", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 9", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "surgical-oncology-layer-3-clinical",
        title: "Surgical Oncology Principles - Clinical",
        estimatedMinutes: 25,
        summary: "Biopsy techniques, multidisciplinary approach, neoadjuvant/adjuvant therapy, and cancer screening in India.",
        contentMd: `# Surgical Oncology Principles - Clinical Application

## Biopsy Techniques
### Incisional Biopsy
- Remove a portion of tumor for diagnosis
- For large masses where excision would be mutilating
- Important: Biopsy track must be in line with future definitive excision

### Excisional Biopsy
- Complete removal of lesion with margin
- For small, accessible lesions (<3 cm)
- Serves as both diagnosis and treatment if margins adequate

### Core Needle Biopsy (Tru-Cut)
- Large-bore needle obtains tissue core
- Preserves architecture (unlike FNAC)
- Image-guided for deep lesions
- Preferred for breast, soft tissue, liver masses

### FNAC (Fine Needle Aspiration Cytology)
- Quick, simple, office procedure
- Provides cytology only (no architecture)
- Good for thyroid, lymph nodes, breast
- Cannot differentiate invasive from in-situ carcinoma

### Sentinel Lymph Node Biopsy (SLNB)
- Identifies first draining lymph node(s)
- Technetium-99m colloid and/or blue dye injected around tumor
- If sentinel node negative: Skip full lymph node dissection
- Standard in breast cancer and melanoma staging

## Multidisciplinary Team (MDT)
- Surgeon, medical oncologist, radiation oncologist, pathologist, radiologist
- Tumor board meetings for treatment planning
- Evidence-based decision-making
- Increasingly standard in Indian cancer centers

## Neoadjuvant vs Adjuvant Therapy
### Neoadjuvant (Before Surgery)
- Downstage tumor to allow resection
- Assess tumor response to therapy (in vivo sensitivity testing)
- Examples: Rectal cancer (chemoRT before TME), breast cancer (chemo before surgery for large tumors)
- Pathological complete response (pCR): No residual tumor = excellent prognosis

### Adjuvant (After Surgery)
- Eliminate micrometastatic disease
- Reduce recurrence risk
- Examples: FOLFOX after Stage III colon cancer, tamoxifen after ER+ breast cancer
- Decision based on staging, tumor biology, patient fitness

## Cancer Screening in India
### National Cancer Screening Programme
- Oral cancer: Visual inspection with acetic acid (VIA); for tobacco users
- Cervical cancer: VIA or Pap smear; ages 30-65
- Breast cancer: Clinical breast examination (CBE); ages 30-65
- Population-based screening in many states

### Important Screening Tests
- **Mammography**: Breast cancer; from age 40-50 (varies by guidelines)
- **Pap smear/HPV testing**: Cervical cancer; every 3-5 years
- **Colonoscopy**: Colorectal cancer; from age 50
- **PSA + DRE**: Prostate cancer (controversial; shared decision-making)
- **Low-dose CT**: Lung cancer in heavy smokers (>30 pack-years)

## Palliative Surgery in Cancer
- Bypass procedures: Gastrojejunostomy for gastric outlet obstruction
- Stenting: Esophageal, biliary, colonic stents for obstruction
- Diverting stoma: Colostomy for obstructing rectal cancer
- Debulking: Ovarian cancer (optimal cytoreduction)
- Pain relief: Celiac plexus block for pancreatic cancer pain`,
        mnemonics: [
          { text: "Neoadjuvant = Before surgery (downstage); Adjuvant = After surgery (prevent recurrence)", explanation: "Timing of chemotherapy/radiotherapy relative to surgery" },
          { text: "SLNB: Sentinel Lymph Node = First station = If negative, skip dissection", explanation: "Sentinel node concept: if first draining node is clear, skip extensive lymph node surgery" },
        ],
        keyPoints: [
          "Biopsy track must be in line with future definitive excision incision",
          "SLNB: standard in breast cancer and melanoma; avoids unnecessary lymph node dissection",
          "Neoadjuvant: before surgery to downstage; Adjuvant: after surgery to prevent recurrence",
          "MDT/tumor board: standard of care for cancer management",
          "Indian screening: oral (VIA for tobacco users), cervical (VIA/Pap), breast (CBE)",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 8", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 9", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "surgical-oncology-layer-4-exam",
        title: "Surgical Oncology Principles - Exam Prep",
        estimatedMinutes: 18,
        summary: "High-yield exam facts on surgical oncology for NEXT pattern questions.",
        contentMd: `# Surgical Oncology Principles - Exam Prep

## Must-Know Facts
- Most commonly mutated oncogene: RAS
- Most commonly mutated tumor suppressor: p53
- Carcinoma spreads via lymphatics; Sarcoma via blood
- R0 = negative margins (curative intent); R1 = microscopic residual; R2 = gross residual
- SLNB: Standard in breast cancer and melanoma staging
- pCR after neoadjuvant = excellent prognosis

## Common Exam Traps
- "Tumor markers" = For monitoring, NOT diagnosis or screening (except PSA controversial)
- "FNAC shows malignancy" = Cannot tell invasive vs in-situ; need core biopsy for architecture
- "Biopsy through wrong incision" = Compromises future surgery; must align with definitive incision
- "Large inoperable tumor" = Consider neoadjuvant chemotherapy to downstage
- "Stage IV cancer" = Not necessarily inoperable; palliative surgery may be indicated

## Oncogene-Cancer Associations
| Gene | Cancer | Drug |
|------|--------|------|
| BCR-ABL | CML | Imatinib |
| HER2 | Breast | Trastuzumab |
| KRAS | CRC, Pancreas | Anti-EGFR if wild-type |
| BRAF | Melanoma | Vemurafenib |
| RET | MTC (MEN2) | Vandetanib |
| ALK | Lung (NSCLC) | Crizotinib |

## High-Yield Questions
- Hallmarks of cancer: 6 original + 2 emerging (Hanahan & Weinberg)
- Guardian of genome = p53
- Philadelphia chromosome = BCR-ABL = CML = Imatinib
- Most common site of distant metastasis for GI cancers = Liver
- Krukenberg tumor = Ovarian metastasis from GI primary (transcoelomic)
- Virchow node (left supraclavicular) = Signal node for abdominal malignancy`,
        mnemonics: [
          { text: "R0 = Resection complete; R1 = Residual micro; R2 = Residual macro", explanation: "Surgical margin classification determining prognosis" },
          { text: "Philadelphia = Ph = BCR-ABL = CML = Imatinib", explanation: "Classic molecular oncology chain for exams" },
        ],
        keyPoints: [
          "RAS: most common oncogene; p53: most common tumor suppressor mutation",
          "Tumor markers for monitoring only; CEA=colon, AFP=liver, CA125=ovary, PSA=prostate",
          "R0 resection = goal of curative surgery; biopsy must align with definitive incision",
          "BCR-ABL/Imatinib, HER2/Trastuzumab: prototype targeted therapies",
          "SLNB standard for breast and melanoma; sentinel negative = skip full dissection",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 8", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "surgical-oncology-layer-5-active-recall",
        title: "Surgical Oncology Principles - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on surgical oncology principles.",
        contentMd: `# Active Recall - Surgical Oncology Principles

**Q1:** What are the hallmarks of cancer?
**A1:** Sustained proliferative signaling, evading growth suppressors, resisting apoptosis, enabling replicative immortality, inducing angiogenesis, activating invasion/metastasis. Emerging: reprogramming energy metabolism, evading immune destruction.

**Q2:** What is the difference between staging and grading?
**A2:** Staging (TNM): Extent of tumor burden (size, nodes, metastasis). Grading: Histological differentiation (G1-G4). Staging determines treatment; grading reflects biology/aggressiveness.

**Q3:** What does R0, R1, R2 mean?
**A3:** R0: Microscopically clear margins (curative resection). R1: Microscopic residual tumor at margin. R2: Gross residual tumor left behind.

**Q4:** What is sentinel lymph node biopsy?
**A4:** Identifies first draining lymph node using radiotracer/blue dye. If sentinel node is negative for metastasis, full lymph node dissection is avoided. Standard in breast cancer and melanoma.

**Q5:** What is the most commonly mutated gene in human cancer?
**A5:** p53 (tumor suppressor). Mutated in >50% of all cancers. "Guardian of the genome" - regulates cell cycle arrest, DNA repair, and apoptosis. Li-Fraumeni syndrome when germline mutated.

**Q6:** What is the difference between neoadjuvant and adjuvant therapy?
**A6:** Neoadjuvant: Before surgery; aims to downstage tumor, assess response. Adjuvant: After surgery; aims to eliminate micrometastases and reduce recurrence.

**Q7:** Name key tumor marker associations.
**A7:** CEA: Colorectal. AFP: Liver/Yolk sac tumor. CA-125: Ovarian. CA 19-9: Pancreatic. PSA: Prostate. Beta-hCG: Choriocarcinoma. Calcitonin: Medullary thyroid. All for monitoring, NOT diagnosis.

**Q8:** What is the Philadelphia chromosome?
**A8:** Translocation t(9;22) creating BCR-ABL fusion gene. Found in CML (95%). Targeted by imatinib (tyrosine kinase inhibitor). Revolutionary example of targeted therapy.

**Q9:** How do carcinomas vs sarcomas spread?
**A9:** Carcinomas: Primarily lymphatic (to regional nodes first). Sarcomas: Primarily hematogenous (to lungs). Both can use either route.

**Q10:** What is a Krukenberg tumor?
**A10:** Bilateral ovarian metastasis from GI primary (usually stomach). Spread via transcoelomic route (peritoneal seeding). Contains signet ring cells.

**Q11:** What biopsy technique preserves tissue architecture?
**A11:** Core needle biopsy (Tru-Cut). FNAC provides cytology only (no architecture). Core biopsy can differentiate invasive from in-situ carcinoma, unlike FNAC.

**Q12:** What cancers are screened under India's national programme?
**A12:** Oral cancer (VIA for tobacco users), cervical cancer (VIA/Pap smear, ages 30-65), and breast cancer (clinical breast examination, ages 30-65).`,
        mnemonics: [
          { text: "Li-Fraumeni = p53 germline = SBLA (Sarcoma, Breast, Leukemia, Adrenal)", explanation: "Hereditary cancer syndrome from germline p53 mutation" },
          { text: "Screening in India: Oral (VIA) + Cervical (VIA/Pap) + Breast (CBE)", explanation: "Three cancers in India's national screening programme" },
        ],
        keyPoints: [
          "Hallmarks of cancer: 6+2 features defining malignant transformation",
          "TNM staging determines treatment; grading reflects differentiation/aggressiveness",
          "R0 = curative intent; SLNB avoids unnecessary lymph node dissection",
          "p53 most mutated gene; RAS most mutated oncogene; tumor markers for monitoring",
          "Neoadjuvant (before) to downstage; Adjuvant (after) to prevent recurrence",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 8", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 9", edition: "28th" },
        ],
      },
    ],
  },
];
