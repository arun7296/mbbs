import type { TopicLessons } from "./content-loader";

export const obgLessonsPartEleven: TopicLessons[] = [
  {
    topicCode: "OG-MOD-05-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "endometriosis-layer-1-foundation",
        title: "Endometriosis & Adenomyosis - Foundation",
        estimatedMinutes: 20,
        summary: "Endometriosis (ectopic endometrium outside uterus) and adenomyosis (ectopic endometrium within myometrium) are both estrogen-dependent conditions causing dysmenorrhea, infertility, and pelvic pain. Distinct but sometimes coexistent.",
        contentMd: `# Endometriosis & Adenomyosis - Foundation

## Endometriosis

### Definition
Ectopic endometrial tissue (glands and stroma) present in locations outside the uterus.

### Prevalence
- **Overall**: 10-15% of reproductive-age women
- **In infertile women**: 20-30%
- **In women with dysmenorrhea**: 40-60%

### Sites of Involvement (in order of frequency)
1. **Ovary** (most common, 50-60%)
2. **Peritoneum** (pelvic peritoneum, bowel serosa)
3. **Rectosigmoid colon** (most common bowel site)
4. **Fallopian tubes**
5. **Round ligaments**
6. **Rectovaginal septum**
7. **Rare sites**: Bladder, ureter, lungs, brain, scars (surgical)

### Classification: ASRM Staging
- **Stage I (Minimal)**: <1 cm
- **Stage II (Mild)**: 1-5 cm
- **Stage III (Moderate)**: 5-15 cm
- **Stage IV (Severe)**: >15 cm or dense adhesions

### Morphological Types
1. **Peritoneal endometriosis**: Superficial (peritoneal implants)
2. **Ovarian endometriomas**: "Chocolate cysts" (blood-filled)
3. **Deep infiltrating endometriosis (DIE)**: Infiltrates myometrium or deeper structures

### Clinical Features
- **Dysmenorrhea** (80% of women with endometriosis) - severe, progressive
- **Dyspareunia** (especially if deep infiltrating disease)
- **Pelvic pain** (chronic, cyclic or acyclic)
- **Infertility** (30-50% of women with endometriosis)
- **Diarrhea/constipation** (if bowel involvement)
- **Asymptomatic** (10-15% of cases, discovered incidentally)

## Adenomyosis

### Definition
Presence of endometrial glands and stroma invading the myometrium (typically >2.5 mm beyond the junctional zone).

### Prevalence
- **Overall**: 10-15% of reproductive-age women, increases with age
- **In women with dysmenorrhea**: 15-30%
- **In women with infertility**: 10-20%

### Classification
**By Extent**:
1. **Diffuse adenomyosis**: Widespread myometrial invasion
2. **Focal adenomyosis**: Localized area (adenomyoma)

**By Imaging/Pathology**:
- **Mild**: <25% of myometrial depth involved
- **Moderate**: 25-75% involvement
- **Severe**: >75% involvement

### Clinical Features
- **Dysmenorrhea**: 30-40% (often severe, progressive, dull aching)
- **Menorrhagia**: Heavy menstrual bleeding (50%)
- **Pelvic pain**: Chronic, often pre-menstrual
- **Infertility**: Present in 20% of adenomyosis patients
- **Tender, enlarged uterus**: On bimanual pelvic exam

## Key Differences: Endometriosis vs Adenomyosis

| Feature | Endometriosis | Adenomyosis |
|---------|---------------|-------------|
| **Location** | Outside uterus | Within myometrium |
| **Age** | Younger (20-40) | Older (40-50) |
| **Menorrhagia** | Uncommon | Common (50%) |
| **Dysmenorrhea** | Severe, sharp | Severe, dull, progressive |
| **Exam finding** | Nodules, masses | Enlarged tender uterus |
| **Imaging** | Ovarian cysts, peritoneal lesions | Junctional zone thickening |
| **Infertility** | Common (30-50%) | Moderate (10-20%) |
| **Coexistence** | 15-20% have both | 15-20% have both |

## Pathophysiological Overview
- **Retrograde menstruation** (endometriosis): Menstrual debris flows backward into peritoneum
- **Coelomic metaplasia**: Primitive coelomic tissue differentiates into endometrium
- **Bone marrow stem cell homing**: Progenitor cells migrate to ectopic sites
- **Myometrial invasion** (adenomyosis): Endometrial basalis layer invades myometrium
- **Estrogen dependence**: Both conditions ER-α overexpressed, aromatase upregulated
- **Prostaglandin excess**: PGE2, PGF2α elevated → Pain, inflammation
- **Inflammation**: Macrophages, IL-8, TNF-α, IL-6 elevated`,
        mnemonics: [
          {
            text: "Endometriosis Locations: OPTICS",
            explanation: "Ovary, Peritoneum, Tubes, Intestine (colon), Cervix, Scars"
          },
          {
            text: "Adenomyosis Features: JAM",
            explanation: "Junctional zone thickening, Age older, Myometrial invasion"
          }
        ],
        keyPoints: [
          "Endometriosis: ectopic endometrium outside uterus; prevalence 10-15%",
          "Adenomyosis: endometrial invasion within myometrium; increases with age",
          "Both cause dysmenorrhea and infertility; adenomyosis more often causes menorrhagia",
          "Ovary most common site for endometriosis (chocolate cysts)",
          "15-20% of women have both endometriosis and adenomyosis"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 19", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 28", edition: "17th" }
        ]
      },
      {
        layer: 2,
        slug: "endometriosis-layer-2-mechanism",
        title: "Endometriosis & Adenomyosis - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology involves retrograde menstruation, ectopic endometrial implantation, chronic inflammation, angiogenesis, prostaglandin production, and estrogen dysregulation. Understanding these mechanisms guides targeted therapy.",
        contentMd: `# Endometriosis & Adenomyosis - Mechanism

## Endometriosis Pathophysiology

### Theory 1: Retrograde Menstruation (Sampson Theory)
1. **Normal menstruation**: Anterograde flow (toward cervix)
2. **Retrograde menstruation**: 75-90% of women have some reflux through fallopian tubes
3. **Peritoneal spillage**: Menstrual debris (endometrial cells, blood, tissue) enters peritoneal cavity
4. **Implantation**: Endometrial cells implant on peritoneal surface
5. **Survival and growth**: Immune dysfunction allows cell survival and proliferation

### Theory 2: Coelomic Metaplasia
- Coelomic epithelium (peritoneum, ovarian surface) differentiates into endometrial tissue
- Triggered by inflammation, growth factors, hormones
- Explains endometriosis in locations without menstrual access

### Theory 3: Bone Marrow-Derived Stem Cell Theory
- Progenitor cells from bone marrow migrate to ectopic sites
- Differentiate into endometrial cells
- May explain endometriosis in unusual locations

## Cellular and Molecular Mechanisms

### 1. Immune Dysfunction
**Reduced immune clearance**:
- **NK (natural killer) cells**: Reduced number and function
- **Macrophages**: Increased but paradoxically fail to clear ectopic cells
- **T lymphocytes**: Reduced Th1, increased Th2 response (poor cell-mediated immunity)
**Result**: Ectopic endometrial cells escape immune destruction

### 2. Angiogenesis
- **VEGF** (vascular endothelial growth factor) upregulated in ectopic endometrium
- **Hypoxia-inducible factor-1α (HIF-1α)**: Activates VEGF
- **FGF** (fibroblast growth factor): Promotes new vessel formation
**Result**: Abnormal vessel growth supporting ectopic lesions

### 3. Inflammatory Mediators
**Prostaglandins**:
- **PGE2** and **PGF2α**: Markedly elevated in peritoneal fluid and ectopic lesions
- **Mechanism**: COX-2 upregulation in ectopic endometrium
- **Effects**: Myometrial contractions, uterine ischemia, pain

**Cytokines**:
- **TNF-α**: Promotes inflammation, growth of ectopic tissue
- **IL-6, IL-8**: Promote angiogenesis, cell survival
- **Result**: Chronic inflammatory state perpetuates endometriosis

### 4. Estrogen Dysregulation
**Estrogen receptor abnormalities**:
- **ER-α overexpression**: Increased estrogen responsiveness in ectopic endometrium
- **ER-β downregulation**: Loss of protective effect

**Local estrogen production**:
- **Aromatase upregulation**: ↑ Conversion of androgens to estrogen locally
- **Result**: High local estrogen in lesions (20x higher than normal endometrium)

### 5. Progesterone Resistance
- **Progesterone receptor (PR)** expression altered in ectopic endometrium
- **Abnormal PR-A/PR-B ratio**: Loss of progesterone's anti-inflammatory effect
- **Result**: Ectopic endometrium fails to respond to progestins/progesterone

### 6. Neuroangiogenesis
- **Nerve fiber density**: Increased in peritoneal endometriosis lesions
- **Neurotrophins**: NGF (nerve growth factor) elevated
- **Result**: Increased innervation explains severe pain

## Adenomyosis Pathophysiology

### 1. Junctional Zone Dysfunction
**In adenomyosis**:
- Junctional zone thickened (>14 mm on MRI)
- Irregular junctional zone interface
- Disrupted smooth muscle architecture
- Abnormal myometrial contractions (increased frequency, reduced coordination)

**Consequence**: Abnormal peristalsis → Impaired sperm transport, embryo implantation

### 2. Endometrial-Myometrial Interface Disruption
- **Normal interface**: Distinct basement membrane separates endometrium from myometrium
- **In adenomyosis**: Basement membrane fragmentation
- **Loss of markers**: Laminin, integrin-α6 β4 reduced
- **Result**: Endometrial cells invade myometrium (depth >2.5 mm)

### 3. Angiogenesis and Vascularity
- **VEGF upregulation**: Excessive vessel formation in adenomyotic lesions
- **Altered vascular architecture**: Dilated vessels, poor vasodilation response
- **Hypoxia-reperfusion cycles**: Abnormal contractions create ischemia → Reperfusion inflammation
- **Result**: Adenomyotic lesions have poor perfusion → Pain from hypoxia

### 4. Estrogen Excess and Progesterone Resistance
- Similar to endometriosis: ER-α overexpression, aromatase upregulation
- Local estrogen synthesis from androgens
- **Progesterone resistance**: PR-B downregulation, abnormal PR signaling
- **Result**: Dysmenorrhea, bleeding, resistance to progestin therapy

### 5. Myometrial Contractility Abnormality
- **Increased contractions**: Higher frequency and amplitude than normal myometrium
- **Loss of coordination**: Abnormal peristaltic waves (non-physiological)
- **Timing**: Increased during menstruation
- **Mechanism**: Estrogen-dependent, prostaglandin-mediated
- **Result**: Dysmenorrhea (painful contractions), reduced fertility

### 6. Inflammation in Adenomyosis
- **Macrophages**: Increased infiltration
- **Cytokines**: TNF-α, IL-6, IL-8 elevated
- **Prostaglandins**: PGE2, PGF2α elevated
- **Result**: Chronic inflammation driving pain and infertility

## Adenomyosis and Infertility Mechanisms
1. **Abnormal myometrial contractions**: Reduce embryo implantation, increase miscarriage
2. **Impaired endometrial receptivity**: Abnormal expression of adhesion molecules (integrins)
3. **Elevated prostaglandins**: Increase uterine contractions
4. **Chronic inflammation**: Toxic to embryo
5. **Reduced uterine blood flow**: In adenomyotic regions`,
        mnemonics: [
          {
            text: "Endometriosis Mechanisms: RAIGE",
            explanation: "Retrograde menstruation, Angiogenesis, Inflammation, Growth factors, Estrogen excess"
          },
          {
            text: "Adenomyosis Junctional Zone: JAM",
            explanation: "JZ thickening, Abnormal contractions, Myometrial invasion"
          }
        ],
        keyPoints: [
          "Retrograde menstruation deposits endometrial cells in peritoneum; immune dysfunction allows implantation",
          "Endometriosis involves angiogenesis, local aromatase activity, prostaglandin excess, progesterone resistance",
          "Adenomyosis causes junctional zone disruption, abnormal contractions, myometrial invasion",
          "Both conditions share estrogen dependence, inflammation, and progesterone resistance",
          "NK cell dysfunction and abnormal macrophage function key to endometriosis pathology"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 19", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 28", edition: "17th" }
        ]
      },
      {
        layer: 3,
        slug: "endometriosis-layer-3-clinical",
        title: "Endometriosis & Adenomyosis - Clinical",
        estimatedMinutes: 20,
        summary: "Diagnosis relies on imaging, laparoscopy for endometriosis, and MRI/ultrasound for adenomyosis. Management includes medical (NSAIDs, hormonal, GnRH agonists) and surgical options tailored to symptoms and fertility goals.",
        contentMd: `# Endometriosis & Adenomyosis - Clinical

## Clinical Evaluation

### History
- **Dysmenorrhea**: Severity, onset, progression
- **Dyspareunia**: Deep dyspareunia suggests deep infiltrating endometriosis
- **Pelvic pain**: Cyclic vs acyclic, severity, impact
- **Infertility**: Duration, prior investigations
- **Menorrhagia**: Presence, severity (more common in adenomyosis)
- **GI symptoms**: Diarrhea, constipation, painful defecation (bowel involvement)
- **Urinary symptoms**: Dysuria, hematuria (bladder involvement)

### Physical Examination
- **Abdomen**: Tenderness, masses, guarding
- **Pelvic examination**:
  - **Endometriosis**: Nodules in pouch of Douglas, uterosacral ligaments, tender adnexal masses (endometriomas)
  - **Adenomyosis**: Tender, boggy, enlarged uterus (usually symmetric)

## Diagnostic Investigations

### For Endometriosis

**Imaging First-line**:
- **Transvaginal ultrasound**: Best for ovarian endometriomas
  - Findings: Cysts with diffuse low-level echoes ("chocolate cysts"), homogeneous appearance
  - Sensitivity: 60-80% for ovarian endometriomas
  - Limited for peritoneal/deep disease

- **MRI**: Best for deep infiltrating endometriosis, peritoneal disease
  - T1-weighted + gadolinium shows hemorrhagic lesions
  - Sensitivity: 85-90% for DIE
  - **Gold standard** for pre-operative mapping of DIE

**Diagnostic Laparoscopy**:
- **Gold standard** for diagnosis of endometriosis (especially peritoneal)
- **Visual findings**: Peritoneal lesions (red, black, clear, white), endometriomas, adhesions
- **Biopsy**: Histology confirms diagnosis

### For Adenomyosis

**Imaging**:
- **MRI** (gold standard):
  - Junctional zone thickening (>12-14 mm)
  - Irregular junctional zone interface
  - T2-weighted shows altered signal intensity
  - Sensitivity/Specificity: 70-90%

- **Transvaginal ultrasound**:
  - Junctional zone thickening, heterogeneity
  - Hyperechoic lesions (adenomyomas)
  - Sensitivity/Specificity: 60-85% (operator-dependent)
  - **3D ultrasound**: Improved accuracy

## Management

### First-Line: Medical Management

#### NSAIDs
- **Mechanism**: Reduce prostaglandins
- **Efficacy**: 20-30% pain reduction for dysmenorrhea
- **Dosing**: Naproxen 500 mg BID, ibuprofen 800 mg TID during menses
- **Limitation**: Does not treat underlying disease

#### Hormonal Contraceptives
- **OCPs**: Combined oral contraceptive pills suppress ovulation, thin endometrium
- **Continuous use** reduces dysmenorrhea more than cyclic
- **Efficacy**: 40-50% improvement
- **Effectiveness**: Better for endometriosis than adenomyosis

#### Progestins/Progesterone
- **Levonorgestrel IUD (Mirena)**:
  - Localizes progestin, reduces pain
  - Amenorrhea in 20% of users
  - Efficacy: 50-60% pain reduction
  - Good option if also need contraception

- **Oral progestins**:
  - Norethisterone, medroxyprogesterone acetate
  - Efficacy: Variable, often moderate

#### Gonadotropin-Releasing Hormone (GnRH) Agonists
- **Mechanism**: Downregulate GnRH → ↓ FSH/LH → ↓ Estrogen → Pain relief, lesion suppression
- **Duration**: 3-6 months maximum (bone loss risk)
- **Efficacy**: 80-90% pain reduction
- **Side effects**: Hot flashes, vaginal dryness, headache, mood changes, bone loss
- **Add-back therapy**: After 3 months (estrogen + progestin) to prevent osteoporosis
- **Indications**: Severe pain unresponsive to other options, before surgery

### Second-Line: Surgical Management

#### For Endometriosis
**Laparoscopic excision**:
- **Indications**: Moderate-severe pain, failed medical therapy, bowel/bladder involvement
- **Technique**: Excision of endometrial lesions, adherence lysis
- **Efficacy**: 60-80% pain improvement at 6-12 months
- **Limitations**: Recurrence rate 20-40% over 2-3 years

#### For Adenomyosis
**Hysterectomy**:
- **Definitive treatment**: Only curative option
- **Indication**: Intractable symptoms, completed childbearing
- **Efficacy**: 80-90% symptom relief
- **Disadvantages**: Loss of uterus/fertility, surgical risks

**Conservative options** (if fertility desired):
- **Endometrial ablation**: Destroys endometrium → Reduces bleeding/pain (40-50% improvement)
- **Adenomyomectomy**: Resection of discrete adenomyoma (variable efficacy)

### Fertility Management

#### Endometriosis-Related Infertility
1. **First-line**: Expectant management or ovulation induction + IUI for mild disease
2. **Second-line**: IVF for moderate-severe disease or failed other treatments
3. **Pre-IVF considerations**:
   - Ovarian endometriomas: Aspiration vs surgical excision (surgical impairs ovarian reserve)
   - GnRH agonist pretreatment: May improve outcomes

#### Adenomyosis-Related Infertility
1. **Medical management**: GnRH agonists, combined with IVF
2. **IVF**: Improved implantation with GnRH agonist pre-treatment
3. **Limited surgical options**: Adenomyomectomy rarely possible
4. **Prognosis**: Poorer outcomes than endometriosis-related infertility`,
        mnemonics: [
          {
            text: "Endometriosis Diagnosis: LUM",
            explanation: "Laparoscopy (gold standard), Ultrasound (ovarian cysts), MRI (deep disease)"
          },
          {
            text: "Adenomyosis Imaging: JZT",
            explanation: "Junctional Zone Thickening (>12-14 mm), MRI gold standard, Ultrasound also helpful"
          },
          {
            text: "First-Line Treatment: HIP",
            explanation: "Hormonal (OCPs, Mirena, progestins), Ibuprofen/NSAIDs, Progesterone-based options"
          }
        ],
        keyPoints: [
          "Laparoscopy gold standard for endometriosis diagnosis; MRI best for deep disease",
          "MRI gold standard for adenomyosis diagnosis (junctional zone thickening)",
          "First-line: NSAIDs + hormonal contraceptives (OCPs, Mirena, progestins)",
          "GnRH agonists for severe pain refractory to medical management; maximum 3-6 months",
          "Endometriosis: laparoscopic excision effective; adenomyosis: hysterectomy definitive"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 19", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 28", edition: "17th" }
        ]
      },
      {
        layer: 4,
        slug: "endometriosis-layer-4-exam",
        title: "Endometriosis & Adenomyosis - Exam Prep",
        estimatedMinutes: 15,
        summary: "Key exam concepts: pathophysiology (retrograde menstruation vs junctional zone invasion), diagnostic modalities, medical vs surgical management selection, and fertility implications.",
        contentMd: `# Endometriosis & Adenomyosis - Exam Prep

## High-Yield Facts

### 1. Diagnostic Modality Selection
**Endometriosis**:
- **Laparoscopy**: Gold standard (visual + biopsy diagnosis)
- **Ultrasound**: Best for ovarian endometriomas
- **MRI**: Best for deep infiltrating disease, peritoneal disease

**Adenomyosis**:
- **MRI**: Gold standard (junctional zone assessment)
- **Ultrasound**: Transvaginal, 3D improves accuracy
- **Clinical diagnosis**: Based on imaging + symptoms

### 2. Imaging Findings
**Endometriosis**:
- Ovarian cysts: "Chocolate cysts" (low-level echoes, homogeneous)
- MRI: T1 hyperintense lesions (hemorrhage)

**Adenomyosis**:
- Junctional zone thickening: >12-14 mm (normal <12 mm)
- Irregular JZ interface
- Hyperechoic/isochoic lesions (adenomyomas)

### 3. First-Line Medical Management
**All symptomatic endometriosis/adenomyosis**:
1. **NSAIDs**: Naproxen, ibuprofen (prostaglandin reduction)
2. **Hormonal contraceptives**: OCPs (continuous dosing better than cyclic)
3. **Progestins**: Mirena IUD, oral progestins

### 4. GnRH Agonists Details
- **Indications**: Severe pain refractory to medical therapy
- **Mechanism**: Suppress FSH/LH → Estrogen deprivation
- **Efficacy**: 80-90% pain reduction
- **Duration**: 3-6 months MAXIMUM (bone loss risk)
- **Add-back therapy**: Required after 3 months
- **Side effects**: Hot flashes, vaginal dryness, mood changes, bone loss

### 5. Key Differences (Exam Favorite)
| Feature | Endometriosis | Adenomyosis |
|---------|---------------|------------|
| **Location** | Outside uterus | Within myometrium |
| **Diagnostic test** | Laparoscopy | MRI (imaging) |
| **Bleeding** | Minimal | Common (menorrhagia) |
| **Dysmenorrhea** | Severe, sharp | Severe, dull, progressive |
| **Age group** | Younger (20-40) | Older (40-50) |
| **Infertility** | 30-50% | 10-20% |
| **Surgical option** | Laparoscopic excision | Hysterectomy (definitive) |

### 6. Adenomyosis and Infertility
- Impairs fertility through: Abnormal contractions, reduced endometrial receptivity, chronic inflammation
- Medical: Pretreatment with GnRH agonist improves IVF outcomes
- Prognosis: Lower success rates than endometriosis-related infertility

### 7. Endometriosis Surgery Outcomes
- **Laparoscopic excision**: 60-80% pain improvement at 6-12 months
- **Recurrence**: 20-40% within 2-3 years
- **For IVF**: Often proceed directly to IVF for moderate-severe disease

### 8. Exam Scenario
**Woman with adenomyosis, infertility. IVF planned**:
- **Answer**: Pretreatment with GnRH agonist (3 months) before IVF improves implantation rates`,
        mnemonics: [
          {
            text: "Adenomyosis Features: JTU",
            explanation: "Junctional zone (thickened), Tender uterus, Older age"
          },
          {
            text: "Endometriosis Diagnosis: LUM",
            explanation: "Laparoscopy (gold), Ultrasound (ovarian cysts), MRI (deep disease)"
          },
          {
            text: "GnRH Add-Back: EN",
            explanation: "Estrogen + Norethisterone (after 3 months to prevent bone loss)"
          }
        ],
        keyPoints: [
          "Laparoscopy gold standard for endometriosis; MRI gold standard for adenomyosis",
          "First-line medical: NSAIDs + OCPs (continuous better than cyclic)",
          "GnRH agonists 3-6 months max; require add-back therapy after 3 months for bone protection",
          "Adenomyosis causes enlarged tender uterus; endometriosis causes tender nodules",
          "Adenomyosis: hysterectomy definitive; endometriosis: recurrent after laparoscopic excision"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 19", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 28", edition: "17th" }
        ]
      },
      {
        layer: 5,
        slug: "endometriosis-layer-5-active-recall",
        title: "Endometriosis & Adenomyosis - Active Recall",
        estimatedMinutes: 10,
        contentMd: `# Active Recall - Endometriosis & Adenomyosis

**Q1**: Explain the retrograde menstruation theory of endometriosis. Why doesn't every woman develop endometriosis?
> **A**: Retrograde menstruation occurs when menstrual fluid flows backward through fallopian tubes into peritoneal cavity (occurs in 75-90% of women). Menstrual tissue/cells deposit on peritoneal surfaces. **Why not all develop endometriosis**: Normal immune function (NK cells, macrophages, T cells) clears ectopic endometrial cells. In endometriosis, **immune dysfunction** allows escape of ectopic cells from immune destruction. Reduced NK cell numbers/function, macrophages fail to eliminate cells.

**Q2**: What is the gold standard diagnostic test for endometriosis? Can adenomyosis be definitively diagnosed without hysterectomy?
> **A**: **Endometriosis**: **Laparoscopy** (visual inspection + biopsy confirms histology). **Adenomyosis**: No definitive diagnostic test without hysterectomy. Diagnosis based on **imaging (MRI)** + **clinical features**. MRI shows junctional zone thickening (>12-14 mm), irregular interface. Only histology after hysterectomy = definitive.

**Q3**: A 32-year-old has severe progressive dysmenorrhea. MRI shows junctional zone thickening (14 mm) with irregular interface. OCPs for 4 months not helpful. Next step?
> **A**: **Diagnosis**: Adenomyosis (JZ thickening). **Failed first-line** (OCPs). **Next management**: (1) **GnRH agonist** 3-6 months (e.g., leuprolide IM monthly), (2) After 3 months, add **add-back therapy**: conjugated estrogen 0.625 mg + norethisterone 2.5 mg daily to prevent bone loss. (3) If GnRH fails or side effects intolerable → **Hysterectomy** (definitive treatment).

**Q4**: Explain the progesterone resistance in endometriosis. How does this affect treatment options?
> **A**: **Mechanism**: Ectopic endometrium has abnormal **progesterone receptor (PR)** expression. PR-B (mediates anti-inflammatory, anti-proliferative effects) **downregulated**. **Result**: Ectopic endometrium fails to respond to progesterone/progestins normally. **Treatment implications**: (1) **Progestin-only therapy** may be **less effective**. (2) **Combined approach** often needed: OCPs (suppress ovulation) + GnRH agonists (block estrogen). (3) **Aromatase inhibitors** reduce local estrogen production.

**Q5**: Compare the dysmenorrhea in endometriosis vs adenomyosis. What is the pain mechanism in each?
> **A**: **Endometriosis dysmenorrhea**: **Sharp, cramping** pain, **well-localized**. Mechanism: (1) **Prostaglandins** (PGE2, PGF2α) elevated in lesions → Myometrial contractions, (2) **Neuroangiogenesis**: Increased nerve fiber innervation in peritoneal lesions. **Adenomyosis dysmenorrhea**: **Dull, aching** pain, **diffuse**, **progressive**. Mechanism: (1) **Abnormal myometrial contractions**: Junctional zone dysfunction causes discoordinated contractions, (2) **Tissue hypoxia**: Poor perfusion from abnormal vasculature → Ischemic pain, (3) **Prostaglandins elevated**.

**Q6**: A woman with endometriosis on GnRH agonist develops hot flashes, headaches, and bone density loss concerns at 4 months. How do you manage?
> **A**: (1) **Hot flashes/headaches**: Expected side effects from estrogen deprivation. (2) **Bone density loss**: GnRH agonists cause rapid bone loss (2-3% per year). **After 3 months**, must add **add-back therapy**: **Conjugated estrogen 0.625 mg + norethisterone 2.5 mg daily**. Add-back maintains lesion suppression while protecting bone. (3) **Total duration GnRH**: Maximum 6 months. (4) **Calcium/vitamin D**: Supplement throughout.

**Q7**: A 30-year-old with ovarian endometriomas (bilateral, 4 cm each) desires fertility. Should she have laparoscopic ovarian cystectomy?
> **A**: **Consideration**: Laparoscopic ovarian cystectomy can impair ovarian reserve (damage to healthy ovarian tissue). **Options**: (1) **If pursuing IVF**: Often **skip surgery**, proceed directly to IVF (avoids surgery delay, ovarian damage). (2) **If symptoms severe/recurrent**: Surgery may be warranted. **Summary**: For fertility, strongly consider IVF rather than surgery.

**Q8**: Explain adenomyosis-related infertility mechanisms. Is it as common as endometriosis-related infertility?
> **A**: **Adenomyosis infertility mechanisms**: (1) **Abnormal myometrial contractions**: Junctional zone dysfunction → Impair sperm transport and embryo movement, (2) **Impaired endometrial receptivity**: Abnormal adhesion molecule expression, (3) **Chronic inflammation**: High prostaglandins, TNF-α toxic to embryo. **Prevalence**: Present in 10-20% of infertile women vs 20-30% for endometriosis. **Severity**: Generally causes **lower fertility reduction** than endometriosis-related infertility.

**Q9**: A woman with adenomyosis and menorrhagia received Mirena IUD. She has good bleeding control but persistent dysmenorrhea. Why isn't pain controlled?
> **A**: Mirena IUD **excellent for menorrhagia** but **dysmenorrhea in adenomyosis** caused by **myometrial dysfunction**, NOT just endometrial bleeding. Mirena's local progestin doesn't adequately suppress myometrial contractions. **Management**: (1) Add **NSAIDs** for pain, (2) Add **OCPs** (systemic hormone suppression), (3) If inadequate → **GnRH agonist**, (4) If all fails → **Hysterectomy**.

**Q10**: What is the difference between "chocolate cysts" and adenomyomas? Are they adenomyosis?
> **A**: **Chocolate cysts** = Ovarian **endometriomas** (from endometriosis), NOT adenomyosis. Location: **Outside uterus** (in ovary). **Adenomyomas** = Discrete focal area of **adenomyosis** within myometrium. Location: **Within myometrium** (inside uterus). **Relationship**: Chocolate cysts are endometriosis; adenomyomas are adenomyosis. Different entities.`,
        mnemonics: [],
        keyPoints: [
          "Retrograde menstruation deposits cells; immune dysfunction allows survival and implantation",
          "Laparoscopy gold standard for endometriosis; MRI for adenomyosis imaging",
          "First-line: NSAIDs + OCPs (continuous); GnRH agonist for refractory disease",
          "GnRH max 3-6 months; add-back therapy after 3 months for bone protection",
          "Adenomyosis causes junctional zone dysfunction; requires systemic (not local) hormone suppression"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Gynaecology", chapter: "Ch 19", edition: "8th" },
          { book: "Shaw's Textbook of Gynaecology", chapter: "Ch 28", edition: "17th" }
        ]
      }
    ]
  }
];
`,
