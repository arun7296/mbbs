import type { TopicLessons } from "./content-loader";

export const surgeryPart7Lessons: TopicLessons[] = [
  {
    topicCode: "SU-MOD-05-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "colorectal-carcinoma-layer-1-foundation",
        title: "Colorectal Carcinoma - Foundation",
        estimatedMinutes: 22,
        summary: "Epidemiology, risk factors, adenoma-carcinoma sequence, and hereditary colorectal cancer syndromes.",
        contentMd: `# Colorectal Carcinoma - Foundation

## Epidemiology
- Third most common cancer worldwide; second most common cause of cancer death
- Rising incidence in India (especially urban populations)
- Peak age: 60-70 years; increasing in younger adults
- Male:Female ratio approximately 1.5:1
- Rectal cancer 40%, sigmoid 25%, caecum/ascending 15%, others 20%

## Risk Factors
### Non-Modifiable
- Age >50 years (90% of cases)
- Family history of CRC (first-degree relative: 2-3x risk)
- Hereditary syndromes: FAP, Lynch syndrome (HNPCC)
- Inflammatory bowel disease (UC > Crohn; risk increases with duration)
- Previous colorectal polyps or CRC

### Modifiable
- Diet: High red/processed meat, low fiber
- Obesity, physical inactivity
- Smoking, heavy alcohol use
- Type 2 diabetes mellitus

## Adenoma-Carcinoma Sequence (Vogelstein Model)
- Normal epithelium → Adenoma → Carcinoma (takes 10-15 years)
- Key mutations in sequence: APC (initiation) → KRAS (progression) → p53 (malignant transformation)
- APC gene mutation: Gatekeeper; loss of function initiates adenoma formation
- This sequence explains why polypectomy prevents CRC

## Hereditary Syndromes
### Familial Adenomatous Polyposis (FAP)
- Autosomal dominant; APC gene mutation (chromosome 5q21)
- >100 adenomatous polyps in colon by age 20
- 100% cancer risk if untreated
- Prophylactic proctocolectomy recommended
- Gardner syndrome: FAP + osteomas + desmoid tumors + epidermoid cysts
- Turcot syndrome: FAP + CNS tumors (medulloblastoma)

### Lynch Syndrome (HNPCC)
- Autosomal dominant; mismatch repair gene mutations (MLH1, MSH2, MSH6, PMS2)
- Amsterdam criteria: 3-2-1 rule (3 relatives, 2 generations, 1 <50 years)
- Right-sided predominance; better prognosis than sporadic CRC
- Also increases risk of endometrial, ovarian, gastric, urinary cancers
- Microsatellite instability (MSI) is hallmark

## Pathology
### Macroscopic Types
- Polypoid/fungating (right colon): Grows into lumen
- Annular/stricturing (left colon): Encircles and narrows lumen ("napkin ring")
- Ulcerative: Central ulceration with raised edges

### Histology
- Adenocarcinoma (95%); mucinous adenocarcinoma (10-15%, worse prognosis)
- Signet ring cell type: Rare, very poor prognosis`,
        mnemonics: [
          { text: "APC → KRAS → p53: Adenoma-Carcinoma Sequence", explanation: "Sequential mutations driving normal epithelium to carcinoma over 10-15 years" },
          { text: "Amsterdam 3-2-1: 3 relatives, 2 generations, 1 under 50", explanation: "Diagnostic criteria for Lynch syndrome (HNPCC)" },
        ],
        keyPoints: [
          "Adenoma-carcinoma sequence: APC → KRAS → p53; takes 10-15 years",
          "FAP: APC mutation, >100 polyps, 100% cancer risk; needs prophylactic colectomy",
          "Lynch syndrome: mismatch repair mutations, right-sided, MSI positive, better prognosis",
          "Right colon: polypoid/fungating; Left colon: annular/stricturing (napkin ring)",
          "Rising incidence in India especially in urban populations",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 24: Large Intestine", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 72: The Colon", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "colorectal-carcinoma-layer-2-mechanism",
        title: "Colorectal Carcinoma - Mechanism",
        estimatedMinutes: 25,
        summary: "Molecular pathways of colorectal carcinogenesis, staging systems, and patterns of spread.",
        contentMd: `# Colorectal Carcinoma - Mechanism

## Molecular Pathways
### Chromosomal Instability Pathway (CIN) - 85%
- Classic adenoma-carcinoma sequence
- Involves tumor suppressor genes (APC, p53) and oncogenes (KRAS)
- Aneuploidy and loss of heterozygosity
- Associated with sporadic CRC and FAP

### Microsatellite Instability Pathway (MSI) - 15%
- Defective DNA mismatch repair (MMR)
- Accumulation of errors in microsatellite repeats
- Associated with Lynch syndrome and some sporadic CRC
- MSI-high tumors: Better prognosis, respond to immunotherapy (PD-1 inhibitors)
- Sporadic MSI: Usually due to MLH1 promoter methylation

### Serrated Pathway
- Via serrated polyps (sessile serrated lesions)
- BRAF mutation + CpG island methylation
- Right-sided predilection; often missed on colonoscopy (flat morphology)

## Staging
### Dukes Classification (Historical)
- A: Confined to bowel wall (>90% 5-year survival)
- B: Through bowel wall, no nodes (65-75%)
- C: Lymph node involvement (30-50%)
- D: Distant metastases (<5%)

### TNM Staging (Current Standard)
- T1: Submucosa; T2: Muscularis propria; T3: Through muscularis into subserosa; T4: Penetrates visceral peritoneum or invades adjacent organs
- N0: No nodes; N1: 1-3 nodes; N2: >/=4 nodes
- M0: No distant metastasis; M1: Distant metastasis (liver, lung, peritoneum)

## Patterns of Spread
### Direct
- Circumferential (encircling bowel wall); longitudinal spread limited
- Into adjacent structures (T4): Bladder, uterus, abdominal wall

### Lymphatic
- Follows arterial supply: Epicolic → paracolic → intermediate → principal nodes
- Minimum 12 lymph nodes must be examined for adequate staging

### Hematogenous
- Via portal vein to liver (most common site of distant metastasis)
- Via systemic veins: Lung (second most common)
- Low rectal cancer: Via internal iliac veins to lung (bypasses liver)

### Transcoelomic
- Peritoneal seeding; produces Krukenberg tumors in ovaries
- Blumer shelf: Palpable mass in rectovesical/rectouterine pouch on PR exam

## Tumor Markers
- **CEA (Carcinoembryonic Antigen)**: NOT for screening; used for monitoring recurrence post-surgery
- Pre-op elevated CEA: Suggests advanced disease
- Post-op CEA rise: Indicates recurrence (sensitivity 80%)`,
        mnemonics: [
          { text: "Dukes ABCD: A=wall, B=beyond wall, C=nodes, D=distant", explanation: "Historical staging classification; correlates with prognosis" },
          { text: "CRC spreads to Liver first (portal vein), then Lung", explanation: "Most common metastatic sites in order; low rectal cancer can bypass liver" },
        ],
        keyPoints: [
          "CIN pathway (85%): APC/KRAS/p53 mutations; MSI pathway (15%): mismatch repair defects",
          "MSI-high tumors: better prognosis, respond to immunotherapy",
          "Liver is most common metastatic site (portal vein); lung second",
          "Minimum 12 lymph nodes must be examined for adequate staging",
          "CEA is for monitoring recurrence, NOT screening",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 24", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 72", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "colorectal-carcinoma-layer-3-clinical",
        title: "Colorectal Carcinoma - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical presentation, diagnostic workup, surgical management, and adjuvant therapy for colorectal carcinoma.",
        contentMd: `# Colorectal Carcinoma - Clinical Management

## Clinical Presentation
### Right-Sided Colon Cancer (Caecum, Ascending)
- Iron deficiency anemia (occult bleeding); fatigue, weakness
- Palpable abdominal mass (often late presentation)
- Rarely causes obstruction (large lumen, liquid stool)
- Weight loss, anorexia

### Left-Sided Colon Cancer (Descending, Sigmoid)
- Change in bowel habit (alternating constipation/diarrhea)
- Tenesmus, blood/mucus in stool
- Intestinal obstruction (common; narrow lumen, formed stool)
- "Napkin ring" stricture on barium enema

### Rectal Cancer
- Fresh bleeding per rectum (most common symptom)
- Tenesmus, sense of incomplete evacuation
- Palpable on digital rectal examination (within 8 cm of anal verge)

## Diagnostic Workup
### Colonoscopy (Gold Standard)
- Visualizes entire colon; allows biopsy
- Screening recommended from age 50 (earlier if high risk)
- Complete colonoscopy mandatory even if tumor found (synchronous tumors in 3-5%)

### Imaging
- **CT chest/abdomen/pelvis**: Staging (local extent + liver/lung metastases)
- **MRI pelvis**: Essential for rectal cancer (T and N staging, mesorectal fascia involvement)
- **PET-CT**: For suspected recurrence or equivocal metastases
- **Endorectal ultrasound**: T staging for early rectal cancer

### Blood Tests
- CBC (anemia), LFTs (liver metastases), CEA (baseline for monitoring)

## Surgical Management
### Colon Cancer
- **Right hemicolectomy**: Caecal and ascending colon tumors (includes hepatic flexure)
- **Extended right hemicolectomy**: Transverse colon tumors
- **Left hemicolectomy**: Descending colon tumors
- **Sigmoid colectomy**: Sigmoid tumors
- **Principles**: En bloc resection with adequate margins, high ligation of feeding vessels, minimum 12 lymph nodes

### Rectal Cancer
- **Anterior resection**: Upper and mid rectum; anastomosis preserves sphincter
- **Low anterior resection (LAR)**: Low rectum; may need defunctioning stoma
- **Abdominoperineal resection (APR)**: Very low tumors (<5 cm from anal verge); permanent colostomy
- **Total mesorectal excision (TME)**: Standard; sharp dissection of entire mesorectum; reduces local recurrence to <5%

### Emergency Presentation (Obstruction/Perforation)
- Right-sided: Right hemicolectomy + primary anastomosis
- Left-sided: Hartmann procedure (resection + end colostomy) or subtotal colectomy

## Adjuvant Therapy
- **Stage II (high risk)**: Consider adjuvant chemotherapy (MSI testing guides decision)
- **Stage III**: FOLFOX chemotherapy (5-FU + Leucovorin + Oxaliplatin) for 6 months
- **Rectal cancer**: Neoadjuvant chemoradiation (5-FU + RT) for T3/T4 or node-positive disease; improves local control and sphincter preservation

## Screening in India
- Average risk: Colonoscopy every 10 years from age 50
- High risk (family history, IBD): Earlier and more frequent screening
- FOBT (fecal occult blood test): Annual; less sensitive but widely available`,
        mnemonics: [
          { text: "Right = Red (anemia); Left = Altered bowel habit; Rectum = Red blood PR", explanation: "Classic presentation pattern by tumor location" },
          { text: "TME = Total Mesorectal Excision = Gold standard for rectal cancer", explanation: "Sharp mesorectal dissection reduces local recurrence from 30% to <5%" },
        ],
        keyPoints: [
          "Right colon: iron deficiency anemia; Left colon: obstruction/bowel habit change; Rectum: bleeding PR",
          "Colonoscopy is gold standard; complete colonoscopy mandatory (synchronous tumors 3-5%)",
          "TME is standard for rectal cancer surgery; reduces local recurrence to <5%",
          "Stage III: FOLFOX adjuvant chemotherapy; Rectal T3/T4: neoadjuvant chemoradiation",
          "Minimum 12 lymph nodes examined for adequate staging",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 24", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 72", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "colorectal-carcinoma-layer-4-exam",
        title: "Colorectal Carcinoma - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield exam facts on colorectal carcinoma for NEXT pattern questions.",
        contentMd: `# Colorectal Carcinoma - Exam Prep

## Must-Know Facts
- Most common cause of LBO: Colorectal carcinoma
- Most common site: Rectum (40%)
- Adenoma-carcinoma sequence: APC → KRAS → p53 (10-15 years)
- FAP: APC gene, >100 polyps, 100% cancer risk, prophylactic colectomy
- Lynch: MMR genes, right-sided, MSI-high, better prognosis
- CEA: Monitoring only (NOT screening)
- Minimum 12 nodes for staging; TME for rectal cancer

## Common Exam Traps
- "Iron deficiency anemia in elderly male" = Think right colon cancer (always investigate)
- "Change in bowel habit in >50" = Colonoscopy to rule out left colon cancer
- "Young patient with >100 polyps" = FAP (APC mutation)
- "Right-sided colon cancer, MSI-high, young patient" = Lynch syndrome
- "CEA elevated post-surgery" = Recurrence (not primary screening tool)
- "Apple core lesion on barium enema" = Annular carcinoma (left colon)

## Surgical Procedure by Site
| Tumor Location | Procedure |
|---------------|-----------|
| Caecum/Ascending | Right hemicolectomy |
| Hepatic flexure | Extended right hemicolectomy |
| Transverse | Extended right or transverse colectomy |
| Splenic flexure | Extended left hemicolectomy |
| Descending | Left hemicolectomy |
| Sigmoid | Sigmoid colectomy |
| Upper rectum | Anterior resection |
| Low rectum (>5cm) | Low anterior resection + TME |
| Very low rectum (<5cm) | APR + permanent colostomy |

## Staging Quick Reference
| Dukes | TNM | 5-Year Survival |
|-------|-----|----------------|
| A | T1-2 N0 | >90% |
| B | T3-4 N0 | 65-75% |
| C | Any T, N+ | 30-50% |
| D | M1 | <10% |

## High-Yield Questions
- Gene mutated in FAP = APC (chromosome 5q21)
- Genes mutated in Lynch = MLH1, MSH2, MSH6, PMS2
- Investigation of choice = Colonoscopy with biopsy
- Most common distant metastasis = Liver (portal vein drainage)
- Rectal cancer: Neoadjuvant chemoRT for T3/T4
- Tumor marker for monitoring = CEA`,
        mnemonics: [
          { text: "Apple Core = Annular carcinoma on barium enema (left colon)", explanation: "Classic radiological appearance of stricturing left colon cancer" },
          { text: "FAP = 5q21 = APC = 100 polyps = 100% cancer", explanation: "FAP genetics and natural history in one line" },
        ],
        keyPoints: [
          "Iron deficiency anemia in elderly = investigate for right colon cancer",
          "FAP: APC gene (5q21), >100 polyps, 100% cancer risk",
          "Lynch: MMR genes, Amsterdam 3-2-1 criteria, MSI-high",
          "Liver is most common metastatic site; CEA for monitoring recurrence",
          "APR with permanent colostomy for tumors <5 cm from anal verge",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 24", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "colorectal-carcinoma-layer-5-active-recall",
        title: "Colorectal Carcinoma - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on colorectal carcinoma.",
        contentMd: `# Active Recall - Colorectal Carcinoma

**Q1:** What is the adenoma-carcinoma sequence?
**A1:** Normal epithelium → Adenoma → Carcinoma. Key mutations: APC (initiation) → KRAS (progression) → p53 (malignant transformation). Takes 10-15 years.

**Q2:** What gene is mutated in FAP?
**A2:** APC gene on chromosome 5q21 (autosomal dominant). Produces >100 polyps by age 20. 100% cancer risk without prophylactic colectomy.

**Q3:** What are the Amsterdam criteria for Lynch syndrome?
**A3:** 3-2-1 rule: At least 3 relatives with CRC, across 2 generations, at least 1 diagnosed before age 50. Associated with mismatch repair gene mutations.

**Q4:** How does right-sided CRC present differently from left-sided?
**A4:** Right: Iron deficiency anemia, palpable mass, weight loss (rarely obstructs). Left: Change in bowel habit, obstruction, blood/mucus in stool (napkin ring stricture).

**Q5:** What is the gold standard investigation for CRC?
**A5:** Colonoscopy with biopsy. Complete colonoscopy mandatory even after finding a tumor (3-5% synchronous tumors). CT for staging.

**Q6:** What is TME?
**A6:** Total Mesorectal Excision. Sharp dissection of entire mesorectum as a unit. Reduced local recurrence in rectal cancer from 30% to <5%. Standard of care.

**Q7:** When is APR indicated?
**A7:** Abdominoperineal resection for very low rectal tumors (<5 cm from anal verge) where sphincter preservation is not possible. Results in permanent end colostomy.

**Q8:** What is the role of CEA?
**A8:** CEA is for post-operative monitoring of recurrence (NOT screening). Pre-op elevated CEA suggests advanced disease. Post-op rise indicates recurrence.

**Q9:** What adjuvant therapy is given for Stage III CRC?
**A9:** FOLFOX (5-FU + Leucovorin + Oxaliplatin) for 6 months. Improves survival significantly.

**Q10:** What is the significance of MSI-high status?
**A10:** MSI-high tumors have better prognosis and respond to immunotherapy (PD-1 inhibitors like pembrolizumab). Found in Lynch syndrome and some sporadic CRC.

**Q11:** What is the most common site of distant metastasis?
**A11:** Liver (via portal venous drainage). Lung is second most common. Low rectal cancer can metastasize to lung first (bypasses portal system via internal iliac veins).

**Q12:** What is Hartmann procedure?
**A12:** Resection of sigmoid/rectum with end colostomy and closure of rectal stump. Used in emergency left-sided CRC with obstruction or perforation.`,
        mnemonics: [
          { text: "Right = anemia, Left = obstruction, Rectum = bleeding", explanation: "Classic presentation pattern of CRC by anatomical location" },
          { text: "FOLFOX = 5-FU + Leucovorin + Oxaliplatin = Stage III adjuvant", explanation: "Standard adjuvant chemotherapy regimen for node-positive colorectal cancer" },
        ],
        keyPoints: [
          "Adenoma-carcinoma sequence: APC → KRAS → p53 over 10-15 years",
          "FAP: APC gene, >100 polyps, 100% cancer risk; Lynch: MMR genes, MSI-high",
          "Right CRC = anemia; Left = obstruction; Rectum = bleeding PR",
          "TME standard for rectal cancer; APR for very low tumors; FOLFOX for stage III",
          "Liver is most common metastatic site; CEA for monitoring, not screening",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 24", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 72", edition: "28th" },
        ],
      },
    ],
  },
];
