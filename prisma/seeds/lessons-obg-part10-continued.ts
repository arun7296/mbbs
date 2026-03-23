import type { TopicLessons } from "./content-loader";

export const obgLessonsPartTenContinued: TopicLessons[] = [
  {
    topicCode: "OG-MOD-05-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "uterine-fibroids-layer-1-foundation",
        title: "Uterine Fibroids (Leiomyoma) - Foundation",
        estimatedMinutes: 20,
        summary: "Uterine fibroids are benign smooth muscle tumors affecting 20-30% of reproductive-age women. Classification by location (submucosal, intramural, subserosal) determines symptoms and management. Most common pelvic tumor in women.",
        contentMd: `# Uterine Fibroids - Foundation

## Epidemiology
- **Prevalence**: 20-30% of reproductive-age women (40-80% at autopsy)
- **Peak incidence**: Age 40-50 years
- **Ethnicity**: 2-3x higher in African-American women
- **Risk factors**: Age, family history, nulliparity, obesity, hypertension

## Nomenclature and Classification

### Leiomyoma vs Fibroid
- **Leiomyoma**: Medical term (smooth muscle tumor)
- **Fibroid**: Common term (benign fibromuscular tumor)
- Both terms used interchangeably

### Classification by Location (FIGO)

**Type 0 (Pedunculated Submucosal)**:
- Entirely within uterine cavity
- Stalk attaches to endometrium
- Can prolapse through cervix

**Type 1 (Submucosal)**:
- <50% of fibroid protrudes into cavity
- >50% within myometrium
- Distorts endometrial cavity

**Type 2 (Submucosal-Intramural)**:
- >50% protrudes into cavity
- <50% within myometrium
- Significant cavity distortion

**Type 3 (Intramural)**:
- Entirely within myometrium
- Does not distort endometrium
- Does not protrude into cavity

**Type 4 (Subserosal-Intramural)**:
- >50% within myometrium
- <50% protrudes toward serosa

**Type 5 (Subserosal)**:
- <50% within myometrium
- >50% protrudes toward serosa

**Type 6 (Pedunculated Subserosal)**:
- Attached by stalk to serosa
- Entirely outside myometrium
- Minimal uterine distortion

### Simple Classification
- **Submucosal**: Protrudes into endometrial cavity → Heavy bleeding
- **Intramural**: Within myometrium → Uterine enlargement, pressure symptoms
- **Subserosal**: Protrudes toward peritoneum → Minimal bleeding, pressure symptoms

## Clinical Features

### Asymptomatic
- 50% of women with fibroids are asymptomatic
- Often discovered incidentally on imaging

### Symptomatic Presentations

**Menstrual abnormalities**:
- Heavy menstrual bleeding (menorrhagia) - most common
- Irregular bleeding
- Prolonged menstruation

**Pelvic symptoms**:
- Pelvic pressure/heaviness
- Abdominal distension
- Urinary frequency/urgency (if anterior fibroids)
- Constipation (if posterior fibroids)

**Reproductive issues**:
- Infertility (30% of women seeking fertility)
- Recurrent miscarriage (if submucosal)
- Preterm labor (if large intramural)

**Pain**:
- Dysmenorrhea (usually mild unless red degeneration)
- Pelvic pain (chronic, intermittent)
- **Red degeneration**: Acute pain, tenderness, fever (hemorrhagic infarction)

## Pathophysiology Overview
- **Smooth muscle hyperplasia**: Abnormal growth of myometrial smooth muscle
- **Genetic abnormalities**: MED12 mutations most common (70% of fibroids)
- **Growth factors**: TGF-β, FGF, VEGF elevated
- **Angiogenesis**: Increased vascular proliferation
- **Estrogen/progesterone**: Upregulated receptors, abnormal signaling`,
        mnemonics: [
          { text: "Fibroid Location: SISS", explanation: "Submucosal (in cavity), Intramural (in muscle), Subserosal (toward serosa), Stalk (pedunculated)" },
          { text: "Fibroid Symptoms: PUSH", explanation: "Pressure, Urinary/bowel symptoms, Spotting/heavy bleeding, Heavy abdomen" }
        ],
        keyPoints: [
          "Fibroids affect 20-30% of reproductive-age women; higher in African-American women",
          "Submucosal fibroids cause heavy bleeding; intramural cause pressure symptoms",
          "50% of women with fibroids are asymptomatic",
          "Heavy menstrual bleeding is most common symptom",
          "Red degeneration (hemorrhagic infarction) causes acute pain and fever"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Uterine Fibroids", edition: "9th" },
          { book: "Williams Gynecology", chapter: "Leiomyomas", edition: "4th" }
        ]
      },
      {
        layer: 2,
        slug: "uterine-fibroids-layer-2-mechanism",
        title: "Uterine Fibroids - Mechanism",
        estimatedMinutes: 30,
        summary: "Fibroids develop from monoclonal smooth muscle proliferation driven by genetic mutations, growth factors, and aberrant hormone signaling. Submucosal fibroids cause bleeding through abnormal vasculature and prostaglandin production.",
        contentMd: `# Uterine Fibroids - Mechanism

## Cellular and Molecular Pathophysiology

### Genetic Origins
1. **Clonal proliferation**:
   - Fibroids are monoclonal (derived from single smooth muscle cell)
   - Different fibroids in same uterus are separate clones
   - Supports "neoplastic" nature (tumor-like origin)

2. **MED12 mutations** (most common, ~70%):
   - MED12 = Mediator complex subunit 12
   - Regulates transcription
   - Mutation leads to dysregulation of smooth muscle genes

3. **Other mutations**:
   - **HMGA2**: Architectural protein gene
   - **RAD21**: Cohesin complex protein
   - **PTEN**: Tumor suppressor (loss allows proliferation)
   - **KRAS**: Oncogene (activating mutations)

### Growth Factor Signaling
1. **TGF-β pathway** (transforming growth factor-beta):
   - TGF-β overexpressed in fibroids
   - Activates SMAD signaling
   - Promotes myofibroblast differentiation
   - Increases collagen synthesis

2. **FGF pathway** (fibroblast growth factor):
   - FGF2 overexpressed
   - Promotes smooth muscle proliferation
   - Autocrine/paracrine signaling

3. **VEGF** (vascular endothelial growth factor):
   - Promotes angiogenesis
   - Essential for fibroid blood supply
   - Hypoxia-inducible factor (HIF-1α) activates VEGF

### Angiogenesis and Vasculature
1. **Abnormal vasculature**:
   - Increased vessel density
   - Larger caliber vessels
   - Abnormal vessel architecture

2. **Mechanical consequences**:
   - **Increased blood flow**: To fibroid tissue
   - **Abnormal arteriovenous shunting**
   - **Vessel rupture risk**: During degeneration

3. **VEGF-mediated**:
   - Growth factor promotes new vessel formation
   - Vessels are immature/leaky
   - Explains tendency for hemorrhage

### Extracellular Matrix (ECM) Changes
1. **Collagen deposition**:
   - Excessive collagen type I and III
   - Fibroblasts produce more collagen in fibroid vs myometrium
   - Creates firm, encapsulated fibroid

2. **ECM remodeling enzymes**:
   - Matrix metalloproteinases (MMPs) dysregulated
   - TIMP (tissue inhibitors) also abnormal
   - Imbalance promotes ECM accumulation

### Estrogen and Progesterone Signaling

**Estrogen Effects**:
1. **Estrogen receptor (ER) overexpression**:
   - Fibroids have higher ER-α and ER-β than myometrium
   - More responsive to estrogen stimulation

2. **Aromatase activity increased**:
   - Local estrogen synthesis from androgens
   - Higher estrogen levels within fibroid vs myometrium

3. **Proliferation**:
   - Estrogen → Increased growth factor production
   - Estrogen → Increased mitotic activity

**Progesterone Resistance**:
1. **Altered progesterone receptor (PR) expression**:
   - Abnormal PR-A/PR-B ratio
   - Reduced PR expression in fibroids
   - Explains poor response to progestin therapy

2. **Impaired progesterone signaling**:
   - Defects in coactivator proteins
   - Impaired FOXO1 signaling
   - Loss of anti-proliferative response

## Mechanism of Symptoms

### Heavy Menstrual Bleeding (Submucosal Fibroids)
1. **Increased vasculature**:
   - More blood vessels in and around fibroid
   - Thinner endometrium overlying fibroid
   - Ulcerated endometrial surface

2. **Altered prostaglandin production**:
   - Fibroids increase PGE2 and PGF2α
   - PGF2α increases myometrial contractions
   - Increases bleeding and dysmenorrhea

3. **Altered hemostasis**:
   - Reduced tissue factor pathway inhibitor (TFPI)
   - Impaired coagulation cascade localization
   - Bleeding tendency

4. **Mechanical distortion**:
   - Increased endometrial surface area (submucosal)
   - Impaired vessel compression (contractions less effective)

### Pressure Symptoms (Large Intramural/Subserosal)
1. **Mass effect**:
   - Fibroids expand myometrium
   - Uterine enlargement → Abdominal distension
   - Organ compression

2. **Bladder compression**:
   - Anterior wall fibroids
   - Reduced bladder capacity
   - Urinary frequency/urgency

3. **Bowel compression**:
   - Posterior wall fibroids
   - Rectal compression
   - Constipation, defecation difficulty

### Red Degeneration (Hemorrhagic Infarction)
1. **Mechanism**:
   - Fibroid growth outpaces blood supply
   - Central hypoxia
   - Tumor necrosis and hemorrhage

2. **Typical presentation**:
   - Acute pain (severe, localized)
   - Tenderness, guarding
   - Fever (from necrosis)
   - Can mimic appendicitis

3. **Timing**:
   - Most common in second trimester of pregnancy
   - Can occur anytime fibroid rapidly enlarges
   - Associated with rapid growth, large size

## Growth Dynamics
1. **Estrogen-dependent growth**:
   - Fibroids grow during reproductive years
   - Regress after menopause (loss of estrogen)
   - Stimulated by pregnancy (high estrogen)

2. **Variable growth rates**:
   - Some fibroids grow rapidly
   - Others remain stable for years
   - Cannot predict growth rate from baseline size

3. **Menopause effect**:
   - Estrogen withdrawal → Fibroid shrinkage
   - 35-50% reduction in volume by 1 year post-menopause
   - Explains symptom improvement in older women`,
        mnemonics: [
          { text: "Fibroid Mutations: MHARK", explanation: "MED12 (most common), HMGA2, RAD21, KRAS, and other genes" },
          { text: "Growth Factor Cascade: TFV", explanation: "TGF-β, FGF, VEGF drive growth and angiogenesis" }
        ],
        keyPoints: [
          "Fibroids are monoclonal tumors with specific genetic mutations (MED12 most common)",
          "Estrogen promotes growth; fibroids have higher ER expression",
          "Progesterone resistance explains poor response to progestin therapy",
          "Angiogenesis is key driver; VEGF promotes abnormal blood vessels",
          "Submucosal fibroids bleed due to increased vasculature and altered hemostasis"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Pathophysiology of Fibroids", edition: "9th" },
          { book: "Williams Gynecology", chapter: "Molecular Basis of Leiomyomas", edition: "4th" }
        ]
      },
      {
        layer: 3,
        slug: "uterine-fibroids-layer-3-clinical",
        title: "Uterine Fibroids - Clinical Management",
        estimatedMinutes: 25,
        summary: "Clinical management includes assessment, imaging, and treatment selection ranging from observation to medical (GnRH agonists, SERMs, SPRMs) or surgical (hysteroscopic, laparoscopic, abdominal myomectomy, hysterectomy).",
        contentMd: `# Uterine Fibroids - Clinical Management

## Clinical Evaluation

### History
- **Menstrual history**: Duration of heavy bleeding, passage of clots, anemia symptoms
- **Pressure symptoms**: Abdominal bloating, urinary frequency, bowel dysfunction
- **Reproductive history**: Infertility, recurrent miscarriage, obstetric complications
- **Impact on quality of life**: Work absence, activity limitation
- **Red degeneration history**: Acute pain episodes

### Examination
- **Abdominal exam**: Masses, distension, tenderness
- **Pelvic exam**: Uterine size, consistency, masses, mobility
- **Bimanual exam**: Assess fibroid size, location, surrounding uterus

### Imaging

**Ultrasound (First-line)**:
- **Transvaginal**: Best for submucosal and small fibroids
- **Transabdominal**: Best for large fibroids, overall assessment
- **Findings**: Location (FIGO type), size, number, degree of distortion
- **Limitations**: May underestimate number/size

**MRI (Gold standard for mapping)**:
- **Indications**:
  - Preoperative surgical planning
  - Complex anatomy
  - Uncertain diagnosis
  - Multiple fibroids (precise mapping)
  - Fertility preservation cases
- **Advantages**: Best contrast resolution, can identify adenomyosis
- **Cost**: Higher cost, time-consuming

### Laboratory
- **CBC**: Assess for anemia (common with heavy bleeding)
- **Iron studies**: Ferritin, serum iron (guide supplementation)
- **Thyroid**: Rule out thyroid disease (can cause bleeding)

## Management Strategy

### Asymptomatic Fibroids
- **Observation**: No treatment needed
- **Surveillance**: Ultrasound annually or per symptoms
- **Exception**: Large fibroids with pregnancy planned → Consider preoperative myomectomy

### Symptomatic Fibroids: First-Line Medical Therapy

#### NSAIDs
- **Mechanism**: Reduce prostaglandins
- **Efficacy**: 20-30% reduction in bleeding
- **Limitation**: Does not shrink fibroids
- **Use**: For dysmenorrhea, mild bleeding

#### Hormonal Contraceptives
- **OCPs**: Can reduce bleeding 40-50%
- **Mechanism**: Thin endometrium, suppress ovulation
- **Limitation**: Does not shrink fibroids, may increase fibroid growth (controversial)

#### Progestins
- **IUD**: Levonorgestrel IUD (Mirena)
  - Most effective medical option: 90% reduction in bleeding
  - Local progestin to endometrium
  - Does not shrink fibroids
  - Good for menorrhagia, less effective if cavity significantly distorted

- **Oral progestins**: Norethisterone, medroxyprogesterone
  - Less effective than IUD
  - May improve dysmenorrhea

### Second-Line Medical Therapy

#### GnRH Agonists
- **Mechanism**: Downregulate GnRH → Reduce FSH/LH → Reduce estrogen → Shrink fibroids
- **Efficacy**: 40-60% volume reduction over 3-6 months
- **Clinical effect**: Amenorrhea (symptom relief), improved anemia before surgery
- **Duration**: 3-6 months maximum (longer use risks osteoporosis)
- **Indications**:
  - Anemia requiring stabilization before surgery
  - Preoperative volume reduction (make large fibroids operable)
  - Symptom relief in approaching menopause
- **Side effects**: Hot flashes, vaginal dryness, decreased libido, bone loss
- **Add-back therapy**: Hormone therapy after 3 months to prevent bone loss

#### Selective Progesterone Receptor Modulators (SPRMs)
- **Mifepristone** (FDA approved): Selective PR agonist/antagonist
  - Causes fibroid shrinkage (25-50% by 3-6 months)
  - Improves bleeding control
  - Amenorrhea common
  - Risk of endometrial changes (atypical hyperplasia)
  - Not standard in India yet

#### Selective Estrogen Receptor Degraders (SERDs) - Newer
- **Ulipristal acetate (SERM)**: Selective PR modulator
  - Improves bleeding, shrinks fibroids
  - Recently approved in some countries

#### GnRH Antagonists - Newer
- **Elagolix**, **Relugolix**: GnRH antagonists (not agonists)
  - Faster onset than agonists (no flare phase)
  - Options in some countries

### Surgical Options

#### Hysteroscopic Myomectomy
- **Indications**: Submucosal fibroids (FIGO 0-2) distorting endometrium
- **Technique**: Resectoscope removes fibroid from within cavity
- **Success rate**: 70-80% symptom resolution
- **Complications**: Uterine perforation, fluid absorption, scar formation
- **Requirement**: <50% intramural extension (FIGO type 2 maximum for experienced surgeons)

#### Laparoscopic Myomectomy
- **Indications**: Intramural (FIGO 3-4) and subserosal (FIGO 5-6) fibroids
- **Technique**: Remove fibroids via laparoscope, reconstruct myometrium
- **Success rate**: 70-80% for selected fibroids
- **Fibroid size limit**: Usually <8 cm (larger fibroids need open approach)
- **Limitation**: May not remove all fibroids (if multiple)
- **Advantage**: Preserves fertility, minimal recovery

#### Abdominal Myomectomy (Open/Laparotomy)
- **Indications**: Large, numerous, or complex fibroids
- **Technique**: Open abdominal approach, remove fibroids, reconstruct uterus
- **Success rate**: >90% symptom relief
- **Recovery**: 6-8 weeks
- **Limitation**: Abdominal scarring, longer recovery
- **Impact on fertility**: Cesarean section recommended if large uterine defect

#### Hysterectomy
- **Indications**:
  - Large/multiple fibroids not suitable for myomectomy
  - Significant adenomyosis also present
  - Completed childbearing
  - Failed other therapies
- **Definitive solution**: 100% symptom relief, no recurrence
- **Technique**: Vaginal, laparoscopic, or abdominal
- **Disadvantage**: Loss of fertility, hormonal effects (if ovaries removed)

#### Uterine Artery Embolization (UAE)
- **Mechanism**: Interventional radiology blocks blood supply to fibroids
- **Efficacy**: 85-90% symptom improvement
- **Advantages**: Non-surgical, good for multiple fibroids
- **Disadvantages**: Fertility outcomes uncertain, rare necrosis of uterus, not standardly available in India
- **Indications**: Heavy bleeding refractory to medical therapy, preoperative volume reduction

#### Focused Ultrasound Surgery (MRgFUS)
- **Mechanism**: MRI-guided focused ultrasound destroys fibroid tissue
- **Efficacy**: 50-75% symptom improvement
- **Advantages**: Non-invasive
- **Limitations**: Only works for non-submucosal fibroids, expensive, not widely available

## Management Algorithms

### For Heavy Menstrual Bleeding (FIGO PALM Classification)
1. **First-line**: NSAIDs, oral contraceptives, or Mirena IUD
2. **Second-line** (if first fails): GnRH agonist 3-6 months
3. **Surgical option** (if medical fails or patient prefers):
   - Submucosal: Hysteroscopic myomectomy
   - Intramural: Laparoscopic or abdominal myomectomy
   - Hysterectomy if completed childbearing

### For Pressure Symptoms
1. **First-line**: Observation, analgesics
2. **Consider surgery** if significantly impacting quality of life
3. **Surgical options**:
   - Laparoscopic myomectomy (if preserving fertility)
   - Hysterectomy (if completed childbearing)
   - Abdominal myomectomy (if complex anatomy)

### For Infertility
- **Submucosal fibroids** distorting cavity: Hysteroscopic myomectomy before fertility treatment
- **Intramural fibroids** not distorting cavity: Controversial; consider myomectomy if large (>4 cm)
- **Intramural fibroids** minimally affecting cavity: Fertility treatment without myomectomy usually tried first`,
        mnemonics: [
          { text: "Fibroid Treatment Ladder: MISHR", explanation: "Medical (NSAID, IUD, OCPs), Interventional (UAE, FUS), Surgery (myomectomy), Hysterectomy, Reconsider" },
          { text: "Surgical Approach by Location: HLL", explanation: "Hysteroscopic (submucosal), Laparoscopic (intramural/subserosal <8cm), Laparotomy (large/complex)" }
        ],
        keyPoints: [
          "Ultrasound is first-line imaging; MRI for surgical planning in complex cases",
          "Mirena IUD most effective medical option (90% bleeding reduction)",
          "GnRH agonists cause fibroid shrinkage but limited to 3-6 months (bone loss risk)",
          "Hysteroscopic myomectomy for submucosal fibroids distorting cavity; success rate 70-80%",
          "Hysterectomy definitive treatment but reserved for completed childbearing or failed myomectomy"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Management of Uterine Fibroids", edition: "9th" },
          { book: "Williams Gynecology", chapter: "Treatment of Leiomyomas", edition: "4th" }
        ]
      },
      {
        layer: 4,
        slug: "uterine-fibroids-layer-4-exam",
        title: "Uterine Fibroids - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points: FIGO classification, diagnosis/imaging, medical vs surgical management selection, red degeneration, and fertility implications.",
        contentMd: `# Uterine Fibroids - Exam Prep

## High-Yield Exam Facts

### 1. FIGO Classification (MUST MEMORIZE)
| Type | Location | Distinguishing Feature |
|------|----------|----------------------|
| **0** | Pedunculated submucosal | Entirely in cavity, attached by stalk |
| **1** | Submucosal | <50% in cavity, >50% in myometrium |
| **2** | Submucosal-intramural | >50% in cavity, <50% in myometrium |
| **3** | Intramural | Entirely in myometrium |
| **4** | Subserosal-intramural | >50% in myometrium, <50% toward serosa |
| **5** | Subserosal | <50% in myometrium, >50% toward serosa |
| **6** | Pedunculated subserosal | Attached by stalk to serosa, outside uterus |

**Clinical correlations**:
- **Submucosal (0-2)** → **Heavy bleeding** (HMB)
- **Intramural (3-4)** → **Pressure symptoms** + possible bleeding
- **Subserosal (5-6)** → **Minimal bleeding**, pressure symptoms

### 2. Fibroid vs Normal Uterus on Exam
- **Normal uterus**: Pear-shaped, mobile, firm, <12 cm
- **With fibroids**: Enlarged, irregular contour, firm/hard, fixed, tender

### 3. Diagnosis
- **Imaging first-line**: Transvaginal or transabdominal ultrasound
- **MRI gold standard** for mapping (preoperative planning)
- **Diagnosis certain** if characteristic ultrasound features

### 4. Red Degeneration (Hemorrhagic Infarction)
**Classic presentation**:
- Acute severe pelvic/abdominal pain
- Tenderness, guarding (localized)
- Fever
- Nausea/vomiting
- Usually second trimester pregnancy
- **Mimics** appendicitis, ovarian rupture

**Mechanism**: Fibroid growth outpaces blood supply → Necrosis + hemorrhage

**Management**: Supportive (analgesics, rest), NSAIDs (controversial in pregnancy), rarely surgery

### 5. First-Line Management Decision
**Asymptomatic**: Observation

**Symptomatic HMB**:
1. First-line: NSAIDs, OCPs, or Mirena IUD (90% effective)
2. If fails: GnRH agonist 3-6 months (40-60% volume reduction)
3. If fails/patient prefers surgery: Hysteroscopic myomectomy (if submucosal)

**Pressure symptoms**: Observation initially; surgery if QOL significantly affected

### 6. Surgical Approach Selection
| Fibroid Type | If Symptomatic/Fertility Desired | If Completed Childbearing |
|---|---|---|
| **Submucosal** | Hysteroscopic myomectomy | Hysterectomy |
| **Intramural <4 cm** | Observation or laparoscopic myomectomy | Hysterectomy if symptomatic |
| **Intramural >4 cm** | Laparoscopic or abdominal myomectomy | Hysterectomy |
| **Subserosal** | Laparoscopic myomectomy | Hysterectomy if symptomatic |
| **Multiple/Complex** | Abdominal myomectomy | Hysterectomy |

### 7. Fertility Implications
- **Submucosal fibroids** distorting cavity → **Treat before fertility** (hysteroscopic myomectomy)
- **Intramural <4 cm** not distorting cavity → Fertility treatment often successful without myomectomy
- **Intramural >4 cm** distorting cavity → Consider myomectomy before fertility treatment
- **Subserosal fibroids** → Minimal fertility impact

### 8. Mirena IUD for Fibroids
- **Mechanism**: Localizes progestin, reduces bleeding
- **Efficacy**: 90% reduction in bleeding (best medical option)
- **Does NOT shrink** fibroids (contrast to GnRH agonists)
- **Advantage**: Long-term use (5 years), no bone loss
- **Limitation**: May not work if fibroid significantly distorts cavity

### 9. GnRH Agonists for Fibroids
- **Mechanism**: ↓ FSH/LH → ↓ Estrogen → Fibroid shrinkage
- **Efficacy**: 40-60% volume reduction over 3-6 months
- **Use**: Preoperative (reduce fibroid size for easier surgery, reduce bleeding), symptom relief
- **Maximum duration**: 3-6 months (beyond this, bone loss risk)
- **Add-back therapy**: After 3 months to prevent osteoporosis

### 10. Hysteroscopic Myomectomy Success
- **Indications**: Submucosal fibroids (FIGO 0-2), distorting endometrial cavity
- **Success rate**: 70-80% symptom resolution
- **Limits**: Usually <50% intramural extension (FIGO type 2 threshold)
- **Advantage**: Minimal recovery (office procedure or same-day surgery)
- **Risks**: Uterine perforation (1-2%), fluid overload (TURP syndrome), scar formation

### 11. Uterine Artery Embolization (UAE)
- **Mechanism**: IR blocks blood vessels → Ischemia → Fibroid necrosis
- **Efficacy**: 85-90% symptom improvement
- **Advantages**: Non-surgical, works for multiple fibroids
- **Disadvantages**: Fertility impact uncertain, uterine necrosis risk (rare), requires IR expertise, not widely available in India
- **Not standard** first-line in India

### 12. Hysterectomy for Fibroids
- **Indications**: Large/multiple/complex fibroids OR completed childbearing OR failed myomectomy
- **Definitive**: 100% symptom relief, 0% recurrence risk
- **Techniques**: Vaginal (if feasible), laparoscopic, abdominal
- **Disadvantage**: Loss of fertility, hormonal effects if ovaries removed

### 13. Exam Scenarios

**Scenario 1**: 35-year-old with menorrhagia, fibroids on ultrasound. Wants more children.
- **Answer**: First-line Mirena IUD or NSAIDs/OCPs. If fails → GnRH agonist 3-6 months. Then fertility treatment.

**Scenario 2**: 28-year-old infertile, submucosal fibroid distorting cavity.
- **Answer**: Hysteroscopic myomectomy first, then fertility treatment.

**Scenario 3**: 42-year-old with pressure symptoms from large intramural fibroid, anemic.
- **Answer**: GnRH agonist 3-6 months (stabilize anemia, shrink fibroid), then myomectomy or hysterectomy.

**Scenario 4**: Acute severe pelvic pain, fever, 16-week pregnancy, known large fibroid.
- **Answer**: Red degeneration. Manage supportively (analgesics, bed rest, hydration). Ultrasound confirms diagnosis. Surgery rarely needed.`,
        mnemonics: [
          { text: "Fibroid Type Symptoms: SHMP", explanation: "Submucosal = HMB, Heavy bleeding, Intramural = Mass, Pressure, Subserosal = Pressure minimal" },
          { text: "Red Degeneration: AFP", explanation: "Acute pain, Fever, Pregnancy (second trimester) - mimics appendicitis" },
          { text: "Treatment Ladder: MIT", explanation: "Medical first (NSAIDs, OCPs, IUD), If fails try GnRH, Then surgery" }
        ],
        keyPoints: [
          "Submucosal fibroids cause heavy bleeding; intramural/subserosal cause pressure symptoms",
          "Hysteroscopic myomectomy for submucosal fibroids distorting cavity (success 70-80%)",
          "Mirena IUD best medical option (90% bleeding reduction)",
          "GnRH agonists shrink fibroids 40-60% over 3-6 months; use preoperatively",
          "Hysterectomy definitive but reserved for completed childbearing or failed myomectomy"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Fibroids: Diagnosis & Management", edition: "9th" },
          { book: "Williams Gynecology", chapter: "Leiomyomas: Clinical Management", edition: "4th" }
        ]
      },
      {
        layer: 5,
        slug: "uterine-fibroids-layer-5-active-recall",
        title: "Uterine Fibroids - Active Recall",
        estimatedMinutes: 10,
        summary: "10 key Q&A covering classification, symptoms, imaging, management, and complications of uterine fibroids.",
        contentMd: `# Uterine Fibroids - Active Recall

## Questions & Answers

**Q1: Classify fibroid location using FIGO system and match to clinical presentation.**
A: **Submucosal (Types 0-2)**: Protrude into endometrial cavity → Heavy menstrual bleeding (menorrhagia). **Type 0** entirely in cavity (pedunculated), **Type 1** <50% in cavity, **Type 2** >50% in cavity. **Intramural (Types 3-4)**: Within myometrium → Uterine enlargement, pressure symptoms, pelvic pain. **Type 3** entirely in myometrium, **Type 4** mostly in myometrium with subserosal extension. **Subserosal (Types 5-6)**: Toward peritoneum → Minimal bleeding, pressure symptoms if large. **Type 5** <50% in myometrium, **Type 6** pedunculated stalk to serosa.

**Q2: A 32-year-old with heavy periods and fibroid 3 cm on ultrasound wants to preserve fertility. What is first-line treatment?**
A: Depends on fibroid type: (1) **If submucosal**: Hysteroscopic myomectomy (remove fibroid, preserve uterus/fertility). (2) **If intramural <4 cm not distorting cavity**: NSAIDs or Mirena IUD first (Mirena reduces bleeding 90%). If fails → GnRH agonist 3-6 months. Then proceed to fertility. (3) **If intramural >4 cm distorting cavity**: Consider laparoscopic myomectomy before fertility, or GnRH agonist first to shrink, then myomectomy.

**Q3: Explain red degeneration of a fibroid. What are clinical features and management?**
A: **Red degeneration** = Hemorrhagic infarction of fibroid tissue. Occurs when fibroid growth exceeds blood supply, causing ischemia and necrosis with hemorrhage. **Features**: (1) **Acute severe pain** (localized, severe), (2) **Fever** (from necrosis), (3) **Tenderness** with guarding (localized), (4) **Nausea/vomiting**, (5) **Usually second trimester pregnancy** (high estrogen promotes growth). **Mimics**: Appendicitis, ovarian rupture. **Management**: Supportive care (analgesics, bed rest, hydration, ice). NSAIDs controversial in pregnancy. Ultrasound confirms diagnosis. Surgery rarely needed; self-limited process.

**Q4: Compare Mirena IUD and GnRH agonists for fibroid management.**
A: **Mirena IUD**: (1) Localizes progestin to endometrium, (2) Reduces bleeding 90% (most effective medical option), (3) Does NOT shrink fibroids, (4) Long-term use (5 years), (5) No bone loss, (6) Good for menorrhagia. **GnRH agonists** (leuprolide, goserelin): (1) Systemic ↓ estrogen, (2) Reduce fibroid volume 40-60% over 3-6 months, (3) Amenorrhea common, (4) Limited to 3-6 months maximum (bone loss), (5) Add-back therapy after 3 months, (6) Use preoperatively to shrink fibroids and stabilize anemia. **Choice**: Mirena if long-term bleeding control; GnRH if need fibroid shrinkage or preoperative preparation.

**Q5: 35-year-old with infertility, submucosal fibroid (FIGO type 2) distorting cavity. Management?**
A: Submucosal fibroids distorting the endometrial cavity impair fertility (implantation failure, increased miscarriage). **Management**: (1) **Hysteroscopic myomectomy FIRST** (remove fibroid through hysteroscope, success rate 70-80%), (2) Postoperative ultrasound to confirm cavity restoration, (3) Then proceed to fertility treatment (IUI, ART) after uterine healing (1-2 months). **Indication for myomectomy**: Submucosal fibroid distorting cavity, even if <4 cm, before fertility.

**Q6: What is the maximum safe duration of GnRH agonist therapy for fibroids, and why?**
A: **Maximum 3-6 months**. **Why**: GnRH agonists suppress estrogen completely → Causes significant bone loss (osteoporosis risk) with prolonged use. After 3 months, must add back hormone therapy (estrogen/progesterone) to prevent further bone loss. **"Add-back" therapy**: Conjugated estrogen + norethisterone (or medroxyprogesterone). Maintains suppression of fibroids while protecting bone. **Exception**: In perimenopausal women approaching menopause, longer use may be considered.

**Q7: Compare hysteroscopic myomectomy and laparoscopic myomectomy in terms of indications and success rates.**
A: **Hysteroscopic myomectomy**: (1) **Indications**: Submucosal fibroids (FIGO 0-2) distorting endometrial cavity, (2) **Technique**: Resectoscope removes fibroid from within cavity, (3) **Success rate**: 70-80% symptom relief, (4) **Recovery**: Minimal (office or same-day), (5) **Risks**: Uterine perforation (1-2%), fluid absorption (TURP syndrome), scar formation, (6) **Limitation**: <50% intramural extension (FIGO type 2 maximum). **Laparoscopic myomectomy**: (1) **Indications**: Intramural (FIGO 3-4) and subserosal (FIGO 5-6) fibroids, (2) **Technique**: Remove via laparoscope, (3) **Success rate**: 70-80% symptom relief, (4) **Size limit**: Usually <8 cm (larger need open approach), (5) **Recovery**: 1-2 weeks, (6) **Advantage**: Minimally invasive, preserves fertility, (7) **Limitation**: Difficulty if multiple fibroids.

**Q8: A 45-year-old with completed childbearing has large symptomatic fibroids, anemia from menorrhagia. Treatment approach?**
A: (1) **Stabilize anemia**: GnRH agonist 3-6 months (improves bleeding, shrinks fibroids, stabilizes Hb). Add iron supplementation, transfuse if severe. (2) **After GnRH**: Consider surgery. **Options**: (a) **Abdominal myomectomy** if wants to preserve uterus (unusual at this age with large fibroids), (b) **Hysterectomy** (most likely, definitive, 100% symptom relief, no recurrence). **Hysterectomy advantages**: Completed childbearing, eliminates risk of endometrial hyperplasia from unopposed estrogen (fibroids causing anovulation), definitive solution.

**Q9: What is the role of transvaginal ultrasound versus MRI in evaluating fibroids?**
A: **Transvaginal ultrasound**: (1) First-line imaging, (2) Best for submucosal and small fibroids, (3) Assesses FIGO type, location, size, (4) Cheap, accessible, no radiation, (5) Limited in large uteri or multiple fibroids (may miss some). **MRI**: (1) Gold standard for mapping complex fibroid anatomy, (2) **Indications**: Multiple fibroids (need precise mapping), preoperative surgical planning, uncertain diagnosis, adenomyosis workup, (3) **Advantages**: Best contrast resolution, counts all fibroids, identifies adenomyosis, (4) **Cost**: Higher, time-consuming, (5) **Not routine** for initial diagnosis. **Summary**: Ultrasound diagnoses; MRI maps for surgery.

**Q10: A 28-year-old presents with severe dysmenorrhea and heavy periods for 2 years. Ultrasound shows multiple small intramural fibroids (<2 cm each, normal cavity). Diagnosis and management?**
A: **Diagnosis**: Multiple intramural fibroids (FIGO type 3) causing dysmenorrhea (fibroids increase prostaglandins) and menorrhagia. **Management**: (1) **First-line**: NSAIDs for pain and bleeding (reduce prostaglandins), (2) **OCPs or Mirena IUD**: Thin endometrium, reduce bleeding, (3) **Observation**: Small fibroids with successful medical management may not need surgery, (4) **If planning fertility soon**: GnRH agonist not indicated (fibroids <4 cm, cavity not distorted), (5) **Surgery**: Only if medical fails or patient preferences. **Key point**: Not all intramural fibroids require surgery; small fibroids often respond to medical management.`,
        mnemonics: [],
        keyPoints: [
          "Submucosal fibroids → hysteroscopic myomectomy; intramural/subserosal → laparoscopic/abdominal",
          "Mirena IUD 90% effective for bleeding; GnRH agonists shrink fibroids 40-60%",
          "Maximum GnRH duration 3-6 months due to bone loss; add-back therapy after 3 months",
          "Red degeneration: acute pain + fever, second trimester pregnancy, manage supportively",
          "Hysterectomy definitive for completed childbearing; eliminates unopposed estrogen risk"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Fibroids: Complete Management", edition: "9th" },
          { book: "Williams Gynecology", chapter: "Leiomyomas & Patient Care", edition: "4th" }
        ]
      }
    ]
  }
];
