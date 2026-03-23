import type { TopicLessons } from "./content-loader";

export const surgeryPart4Lessons: TopicLessons[] = [
  {
    topicCode: "SU-MOD-04-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "fibroadenoma-layer-1-foundation",
        title: "Fibroadenoma & Fibrocystic Disease - Foundation",
        estimatedMinutes: 20,
        summary: "Classification of benign breast diseases, fibroadenoma characteristics, fibrocystic changes, and ANDI classification.",
        contentMd: `# Fibroadenoma & Fibrocystic Disease - Foundation

## ANDI Classification (Aberrations of Normal Development and Involution)
- Normal processes of breast development, cyclical change, and involution can become aberrant
- Spectrum: Normal → Aberration → Disease
- Most benign breast conditions fall under ANDI

## Fibroadenoma
### Definition
- Most common benign solid tumor of the breast
- Biphasic tumor: Both epithelial and stromal components proliferate
- Peak age: 15-35 years (most common breast lump in women <30)

### Types
- **Simple fibroadenoma**: 1-3 cm, well-encapsulated, mobile
- **Giant fibroadenoma**: >5 cm (common in adolescents)
- **Phyllodes tumor**: Leaf-like pattern; can be benign, borderline, or malignant
- **Juvenile fibroadenoma**: Rapidly growing in adolescents

### Clinical Features
- Firm, smooth, well-defined, highly mobile ("breast mouse")
- Non-tender, rubbery consistency
- Usually solitary; multiple in 10-15%
- Does NOT increase cancer risk (except complex fibroadenoma)

## Fibrocystic Disease (Fibrocystic Change)
### Definition
- Most common cause of breast lump in women aged 30-50
- Cyclical hormonal stimulation leads to cyst formation, fibrosis, epithelial proliferation
- NOT a true disease; represents exaggerated normal physiological change

### Components
- **Cysts**: Fluid-filled, blue-domed (Bloodgood cyst); may be tense and painful
- **Fibrosis**: Stromal proliferation and scarring
- **Adenosis**: Increased number of acini; sclerosing adenosis mimics carcinoma
- **Epithelial hyperplasia**: With or without atypia

### Clinical Features
- Bilateral, cyclical mastalgia (worst premenstrually)
- Multiple lumps, often in upper outer quadrant
- Lumps fluctuate with menstrual cycle
- Nipple discharge may occur (usually green/brown)

## Other Benign Breast Conditions
- **Breast abscess**: Lactational (S. aureus) vs non-lactational (periductal mastitis)
- **Fat necrosis**: Post-trauma; mimics carcinoma on examination and mammography
- **Duct ectasia**: Periductal inflammation; green/brown nipple discharge; periareolar mass
- **Galactocele**: Milk-filled cyst in lactating women`,
        mnemonics: [
          { text: "Breast Mouse = Fibroadenoma", explanation: "Highly mobile, firm, smooth lump that slips under examining fingers like a mouse" },
          { text: "FCD: 30-50, FA: 15-35", explanation: "Fibrocystic disease peaks at 30-50 years; Fibroadenoma peaks at 15-35 years" },
        ],
        keyPoints: [
          "Fibroadenoma: most common benign breast tumor; peak age 15-35; 'breast mouse'",
          "Fibrocystic change: most common breast lump in women 30-50; cyclical mastalgia",
          "ANDI classification explains benign breast conditions as aberrations of normal processes",
          "Sclerosing adenosis can mimic carcinoma on mammography and histology",
          "Fat necrosis: post-trauma, mimics carcinoma; oil cyst on mammography",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 25: Breast", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 53: The Breast", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "fibroadenoma-layer-2-mechanism",
        title: "Fibroadenoma & Fibrocystic Disease - Mechanism",
        estimatedMinutes: 25,
        summary: "Hormonal pathophysiology of fibroadenoma and fibrocystic changes, estrogen-progesterone imbalance, and cancer risk stratification.",
        contentMd: `# Fibroadenoma & Fibrocystic Disease - Mechanism

## Hormonal Pathophysiology
### Normal Breast Physiology
- Estrogen: Stimulates ductal proliferation
- Progesterone: Stimulates lobular/acinar development
- Prolactin: Milk production
- Breast tissue undergoes cyclical changes with each menstrual cycle

### Fibroadenoma Pathogenesis
- Estrogen-sensitive: Grows under estrogen stimulation
- Both epithelial AND stromal components proliferate (biphasic)
- Monoclonal stromal proliferation with polyclonal epithelial component
- Enlarges during pregnancy (estrogen surge); may infarct
- Regresses after menopause (estrogen withdrawal)
- Histology: Pericanalicular (stromal compresses ducts) or Intracanalicular (stromal distorts ducts into slit-like spaces)

### Fibrocystic Change Pathogenesis
- Estrogen-progesterone imbalance (relative estrogen excess)
- Repeated cyclical stimulation with incomplete involution leads to cyst formation
- Lobular involution with fluid retention produces macrocysts (>3 mm) and microcysts
- Stromal response leads to fibrosis
- Epithelial proliferation results in hyperplasia with or without atypia

## Cancer Risk Stratification (Dupont & Page Classification)
### No Increased Risk (RR = 1.0)
- Simple cysts, mild hyperplasia without atypia, fibroadenoma (simple)
- Adenosis (non-sclerosing), fibrosis, duct ectasia

### Slightly Increased Risk (RR = 1.5-2.0)
- Moderate/florid hyperplasia without atypia
- Sclerosing adenosis, complex fibroadenoma
- Solitary papilloma

### Significantly Increased Risk (RR = 4-5)
- Atypical ductal hyperplasia (ADH)
- Atypical lobular hyperplasia (ALH)
- Risk doubles further with positive family history

## Phyllodes Tumor Pathology
- Leaf-like (phyllodes = leaf) stromal pattern
- Classified: Benign (60%), Borderline (20%), Malignant (20%)
- Malignant phyllodes: Stromal overgrowth, >10 mitoses/10 HPF, infiltrative margins
- Hematogenous spread (unlike carcinoma which spreads via lymphatics)
- Does NOT spread to axillary lymph nodes (stromal tumor)

## Molecular Mechanisms
- Fibroadenoma: MED12 mutations found in approximately 60% of cases
- Fibrocystic change: Altered estrogen receptor expression in breast tissue
- TGF-beta signaling dysregulation in stromal proliferation
- Apoptosis-proliferation imbalance during luteal phase`,
        mnemonics: [
          { text: "Dupont & Page: No atypia = No risk; Atypia = 4-5x risk", explanation: "Atypical hyperplasia (ADH/ALH) significantly increases breast cancer risk" },
          { text: "Phyllodes: Leaf pattern, Hematogenous spread, NO lymph node metastasis", explanation: "Stromal tumor spreads via blood, not lymphatics; axillary clearance not needed" },
        ],
        keyPoints: [
          "Fibroadenoma is estrogen-sensitive: grows in pregnancy, regresses after menopause",
          "Fibrocystic change: estrogen-progesterone imbalance with relative estrogen excess",
          "Atypical hyperplasia (ADH/ALH) increases breast cancer risk 4-5 fold",
          "Phyllodes tumor: stromal tumor with leaf-like pattern; hematogenous spread, NOT lymphatic",
          "Simple fibroadenoma and simple cysts do NOT increase breast cancer risk",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 25", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 53", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "fibroadenoma-layer-3-clinical",
        title: "Fibroadenoma & Fibrocystic Disease - Clinical",
        estimatedMinutes: 25,
        summary: "Triple assessment, FNAC, management of fibroadenoma and fibrocystic disease, and Indian clinical context.",
        contentMd: `# Fibroadenoma & Fibrocystic Disease - Clinical Management

## Triple Assessment (Gold Standard for Breast Lumps)
1. **Clinical examination**: History + physical examination
2. **Imaging**: Ultrasound (<35 years) or Mammography (>35 years)
3. **Pathology**: FNAC or Core biopsy
- All three must be concordant; discordance requires excision biopsy

## Imaging
### Ultrasound (First-line in young women <35)
- Fibroadenoma: Well-defined, oval, hypoechoic, homogeneous, wider than tall
- Cyst: Anechoic, well-defined, posterior acoustic enhancement
- BI-RADS classification guides management

### Mammography (>35 years or high-risk)
- Fibroadenoma: Well-circumscribed, may have coarse "popcorn" calcification
- Fibrocystic change: Bilateral density, scattered calcifications
- Fat necrosis: Oil cyst with rim calcification

## FNAC Findings
- **Fibroadenoma**: Cohesive sheets of ductal cells + bare bipolar nuclei (stromal fragments) + single cells; NO atypia
- **Cyst**: Straw-colored or greenish fluid; send for cytology if blood-stained
- **Fat necrosis**: Lipid-laden macrophages, inflammatory cells

## Management of Fibroadenoma
### Conservative (Observation)
- Age <35, lump <3 cm, triple assessment confirms fibroadenoma
- Follow-up ultrasound at 6 months then annually
- 10% resolve spontaneously; most remain stable

### Surgical Excision
- Indications: >3 cm, rapidly growing, patient anxiety, age >35, discordant triple assessment
- Excision biopsy (enucleation) through circumareolar or submammary incision
- Cosmetic consideration important in young women

### Phyllodes Tumor
- Wide local excision with 1 cm margin (minimum)
- Simple mastectomy if large relative to breast
- NO axillary dissection (stromal tumor, no LN spread)
- Malignant phyllodes: May need adjuvant radiotherapy

## Management of Fibrocystic Disease
### Conservative
- Reassurance (NOT premalignant in most cases)
- Well-fitting supportive bra
- Evening primrose oil (gamma-linolenic acid) for mastalgia
- Reduce caffeine and methylxanthines (limited evidence)
- NSAIDs for cyclical pain

### Medical
- Danazol: Anti-estrogen; effective but androgenic side effects
- Tamoxifen: For severe refractory mastalgia (off-label)
- OCP: Regulates hormonal fluctuation

### Cyst Aspiration
- Large symptomatic cysts: Aspirate under ultrasound guidance
- Clear fluid + cyst disappears = no further workup
- Blood-stained fluid requires cytology + core biopsy
- Recurrent cyst (>3 aspirations) requires excision biopsy

## Indian Context
- Fibroadenoma is extremely common in Indian women aged 15-30
- Late presentation common due to social stigma around breast examination
- Triple assessment available in most tertiary centers
- FNAC widely available and cost-effective as first-line pathological investigation`,
        mnemonics: [
          { text: "Triple Assessment: CEP", explanation: "Clinical examination, Examination by imaging (USG/mammogram), Pathology (FNAC/core biopsy)" },
          { text: "FNAC fibroadenoma: Sheets + Bare nuclei + No atypia", explanation: "Cohesive ductal cell sheets with scattered bare bipolar nuclei from stroma" },
        ],
        keyPoints: [
          "Triple assessment (clinical + imaging + pathology) is mandatory for all breast lumps",
          "Ultrasound first-line for women <35; mammography for >35",
          "Fibroadenoma <3 cm in young women: conservative follow-up is safe",
          "Phyllodes tumor: wide excision with 1 cm margin; NO axillary dissection",
          "Blood-stained cyst aspirate mandates cytology and further investigation",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 25", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 53", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "fibroadenoma-layer-4-exam",
        title: "Fibroadenoma & Fibrocystic Disease - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield exam facts on benign breast diseases for NEXT pattern questions.",
        contentMd: `# Fibroadenoma & Fibrocystic Disease - Exam Prep

## Quick Differential by Age
| Age Group | Most Common Lump | Key Feature |
|-----------|-----------------|-------------|
| 15-30 | Fibroadenoma | Firm, mobile, "breast mouse" |
| 30-50 | Fibrocystic change | Cyclical pain, bilateral |
| >50 | Carcinoma | Hard, fixed, irregular |

## Must-Know Facts
- Fibroadenoma: Most common benign solid breast tumor; peak 15-35
- Fibrocystic change: Most common breast lump overall in 30-50 age group
- Breast mouse = Fibroadenoma (highly mobile)
- Blue-domed cyst = Bloodgood cyst (fibrocystic change)
- Popcorn calcification on mammography = Old fibroadenoma
- Phyllodes tumor: Leaf-like pattern; hematogenous spread; NO axillary LN involvement

## Common Exam Traps
- "20-year-old with mobile breast lump" = Fibroadenoma (NOT cancer)
- "35-year-old with cyclical bilateral breast pain" = Fibrocystic change
- "Large rapidly growing breast mass in 45-year-old" = Think Phyllodes tumor
- "Post-trauma breast lump mimicking carcinoma" = Fat necrosis
- "Green nipple discharge with periareolar mass" = Duct ectasia
- "Atypical ductal hyperplasia on biopsy" = 4-5x cancer risk; close follow-up

## Cancer Risk Quick Reference
| Lesion | Relative Risk |
|--------|--------------|
| Simple cyst | 1.0 (no increase) |
| Simple fibroadenoma | 1.0 |
| Sclerosing adenosis | 1.5-2.0 |
| Atypical ductal hyperplasia | 4-5 |
| Atypical lobular hyperplasia | 4-5 |
| LCIS | 8-10 |

## High-Yield Questions
- Most common benign breast tumor = Fibroadenoma
- Most common cause of bloody nipple discharge = Intraductal papilloma
- Most common breast lump in 30-50 = Fibrocystic change
- Breast tumor with leaf-like pattern = Phyllodes tumor
- Investigation of choice for breast lump <35 years = Ultrasound
- First-line pathological investigation = FNAC
- Treatment of Phyllodes = Wide excision (1 cm margin), NO axillary clearance`,
        mnemonics: [
          { text: "Age-Lump Rule: FA<30, FCD 30-50, CA>50", explanation: "Fibroadenoma under 30, Fibrocystic disease 30-50, Carcinoma over 50" },
          { text: "Atypia = Alarm: ADH/ALH = 4-5x risk", explanation: "Atypical hyperplasia is the key risk factor for future breast cancer" },
        ],
        keyPoints: [
          "Fibroadenoma: most common benign breast tumor; breast mouse; peak 15-35",
          "Fibrocystic change: cyclical mastalgia, bilateral lumps, peak 30-50",
          "Phyllodes: leaf-like, wide excision, hematogenous spread, NO LN dissection",
          "ADH/ALH: 4-5x breast cancer risk; most important premalignant lesion",
          "Triple assessment mandatory for all breast lumps; FNAC is first-line pathology",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 25", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "fibroadenoma-layer-5-active-recall",
        title: "Fibroadenoma & Fibrocystic Disease - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on benign breast diseases.",
        contentMd: `# Active Recall - Fibroadenoma & Fibrocystic Disease

**Q1:** What is the most common benign solid tumor of the breast?
**A1:** Fibroadenoma. Peak age 15-35 years. Firm, smooth, mobile ("breast mouse").

**Q2:** What is the most common cause of breast lump in women aged 30-50?
**A2:** Fibrocystic change. Presents with cyclical mastalgia, bilateral lumps worst premenstrually.

**Q3:** What are the components of triple assessment?
**A3:** Clinical examination + Imaging (USG <35, mammogram >35) + Pathology (FNAC/core biopsy). All three must be concordant.

**Q4:** What is the FNAC finding in fibroadenoma?
**A4:** Cohesive sheets of ductal epithelial cells + scattered bare bipolar nuclei (from stroma) + no atypia.

**Q5:** What benign breast lesions increase cancer risk?
**A5:** Atypical ductal hyperplasia (ADH) and atypical lobular hyperplasia (ALH) increase risk 4-5 fold. Simple fibroadenoma and simple cysts have NO increased risk.

**Q6:** What is a Phyllodes tumor and how is it managed?
**A6:** Leaf-like stromal tumor (benign 60%, borderline 20%, malignant 20%). Wide local excision with 1 cm margin. NO axillary dissection as it spreads hematogenously, not via lymphatics.

**Q7:** What is a Bloodgood cyst?
**A7:** Blue-domed cyst seen in fibrocystic disease. Tense cyst with bluish discoloration visible through breast tissue.

**Q8:** When should a fibroadenoma be excised rather than observed?
**A8:** If >3 cm, rapidly growing, patient >35, discordant triple assessment, or causing significant anxiety.

**Q9:** What mammographic finding is characteristic of an old fibroadenoma?
**A9:** Coarse "popcorn" calcification. Well-circumscribed dense mass if not calcified.

**Q10:** What is the treatment for fibrocystic mastalgia?
**A10:** Reassurance, supportive bra, evening primrose oil, NSAIDs. Severe cases: Danazol or Tamoxifen.

**Q11:** When does cyst aspiration require further workup?
**A11:** Blood-stained aspirate requires cytology + core biopsy. Recurrent cyst (>3 aspirations) requires excision biopsy.

**Q12:** What is sclerosing adenosis and why is it important?
**A12:** Increased number of acini with fibrosis. Important because it can mimic carcinoma on mammography and histology. Slightly increased cancer risk (RR 1.5-2.0).`,
        mnemonics: [
          { text: "Breast Mouse = Fibroadenoma; Blue Dome = Bloodgood cyst", explanation: "Classic clinical descriptions for the two most common benign breast lesions" },
          { text: "Phyllodes: Leaf + Blood spread + No Nodes", explanation: "Leaf-like pattern, hematogenous metastasis, no axillary lymph node involvement" },
        ],
        keyPoints: [
          "Fibroadenoma: breast mouse, peak 15-35, FNAC shows bare bipolar nuclei",
          "Fibrocystic change: cyclical mastalgia, blue-domed cysts, peak 30-50",
          "Triple assessment mandatory; all three components must agree",
          "ADH/ALH: 4-5x cancer risk; most important finding in benign breast pathology",
          "Phyllodes: wide excision 1 cm margin, NO axillary clearance",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 25", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 53", edition: "28th" },
        ],
      },
    ],
  },
];
