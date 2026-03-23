import type { TopicLessons } from "./content-loader";

export const obgLessonsPartTen: TopicLessons[] = [
  {
    topicCode: "OG-MOD-05-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "menstrual-disorders-layer-1-foundation",
        title: "Menstrual Disorders (AUB, Amenorrhea, Dysmenorrhea) - Foundation",
        estimatedMinutes: 20,
        summary: "Menstrual disorders including abnormal uterine bleeding (AUB), amenorrhea, and dysmenorrhea are common gynecological complaints. Understanding normal menstrual physiology and classification systems is essential for diagnosis and management.",
        contentMd: `# Menstrual Disorders - Foundation

## Normal Menstrual Cycle
- **Cycle length**: 21-35 days (average 28 days)
- **Duration**: 3-7 days of bleeding
- **Volume**: 30-40 mL per cycle (normal), >80 mL = heavy menstrual bleeding
- **Composition**: Blood, endometrial tissue, cervical mucus

## Abnormal Uterine Bleeding (AUB)

### FIGO Classification (PALM-COEIN)
**Structural causes (PALM)**:
1. **Polyps** - Endometrial/cervical
2. **Adenomyosis** - Abnormal junctional zone
3. **Leiomyoma** - Fibroids
4. **Malignancy** - Endometrial cancer, sarcoma

**Non-structural causes (COEIN)**:
1. **Coagulopathy** - Von Willebrand, platelet disorders
2. **Ovulatory dysfunction** - Irregular cycles
3. **Endometrial** - Endometritis, hyperplasia
4. **Iatrogenic** - Anticoagulants, IUD
5. **Not classified** - Other causes

### Types of AUB
- **Menorrhagia**: Heavy menstrual bleeding (>80 mL) at normal intervals
- **Metrorrhagia**: Bleeding at irregular intervals
- **Polymenorrhea**: Frequent cycles (<21 days)
- **Oligomenorrhea**: Infrequent cycles (>35 days)
- **Menometrorrhagia**: Heavy irregular bleeding

## Amenorrhea

### Primary Amenorrhea
- Absence of menses by **age 15 years** (or 2-3 years after pubarche)
- **Frequency**: 2-3% of adolescents

### Secondary Amenorrhea
- Cessation of menses for **≥3 months** in woman with previous menstruation
- **Frequency**: 3-4% of reproductive-age women

## Dysmenorrhea

### Primary Dysmenorrhea
- **Definition**: Painful menstruation without structural pelvic pathology
- **Onset**: Within 1-2 years of menarche
- **Mechanism**: Increased prostaglandin F2α production
- **Prevalence**: 50-90% of reproductive-age women

### Secondary Dysmenorrhea
- **Definition**: Painful menstruation due to structural pelvic disease
- **Onset**: Usually after age 25 years
- **Common causes**: Endometriosis, adenomyosis, fibroids, PID

## Key Pathophysiological Links
1. **Ovulation** → Progesterone → Endometrial proliferation → Menstruation
2. **Anovulation** → No progesterone → Unopposed estrogen → Abnormal bleeding
3. **Prostaglandins** → Myometrial contractions → Dysmenorrhea/cramping
4. **Hypothalamic-Pituitary** → GnRH → FSH/LH → Ovulation`,
        mnemonics: [
          { text: "AUB Causes: PALM-COEIN", explanation: "Polyps, Adenomyosis, Leiomyoma, Malignancy - Coagulopathy, Ovulatory, Endometrial, Iatrogenic, Not classified" },
          { text: "Dysmenorrhea: APEP", explanation: "Absence of pathology (primary) vs Anatomic pathology (secondary), Prostaglandins, Excessive pain, Primary < Secondary age" }
        ],
        keyPoints: [
          "Normal menstrual cycle: 21-35 days, 3-7 days duration, 30-40 mL volume",
          "AUB classified by FIGO into structural (PALM) and non-structural (COEIN) causes",
          "Primary amenorrhea by age 15; secondary amenorrhea cessation for ≥3 months",
          "Primary dysmenorrhea has no structural pathology; secondary dysmenorrhea has underlying disease",
          "Prostaglandins mediate myometrial contractions causing dysmenorrhea symptoms"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Menstrual Disorders", edition: "9th" },
          { book: "Williams Gynecology", chapter: "Abnormal Uterine Bleeding", edition: "4th" }
        ]
      },
      {
        layer: 2,
        slug: "menstrual-disorders-layer-2-mechanism",
        title: "Menstrual Disorders - Mechanism",
        estimatedMinutes: 30,
        summary: "Understanding the hormonal mechanisms, endometrial changes, and prostaglandin physiology explains the pathogenesis of various menstrual disorders and guides targeted therapy.",
        contentMd: `# Menstrual Disorders - Mechanism

## Hormonal Regulation of Menstrual Cycle

### Follicular Phase (Days 1-14)
1. **FSH surge** from anterior pituitary
2. **Ovarian follicle development** → Increases estrogen
3. **Endometrial proliferation** from rising estrogen
4. **Estrogen positive feedback** → LH surge at mid-cycle
5. **Ovulation** triggered by LH surge

### Luteal Phase (Days 15-28)
1. **Corpus luteum formation** after ovulation
2. **Progesterone secretion** peaks mid-luteal phase
3. **Progesterone effect on endometrium**: Secretory changes
4. **Progesterone negative feedback** inhibits FSH/LH
5. **Corpus luteum regression** at end of cycle → Progesterone drop
6. **Menstruation triggered** by progesterone withdrawal

## Mechanism of AUB

### Ovulatory Dysfunction
- **Anovulation**: No ovulation → No corpus luteum → No progesterone
- **Unopposed estrogen**: Continuous endometrial proliferation
- **Result**: Irregular, heavy bleeding
- **Causes**: PCOS, thyroid disease, hyperprolactinemia, stress

### Structural Abnormalities
- **Leiomyoma (fibroids)**:
  - Submucosal fibroids distort endometrium → Heavy bleeding
  - Mechanism: Abnormal vasculature, increased surface area

- **Polyps**:
  - Benign endometrial growths
  - Mechanism: Increased vascularity, surface area

- **Adenomyosis**:
  - Ectopic endometrium in myometrium
  - Mechanism: Increased prostaglandins, myometrial contractions

### Coagulopathy
- **Von Willebrand disease**: Most common (75% of inherited bleeding disorders)
  - Deficient vWF → Poor platelet adhesion → Excessive bleeding
- **Platelet disorders**: Thrombocytopenia, dysfunction
- **Coagulation factor deficiencies**: Factor XI, prothrombin, fibrinogen

## Mechanism of Dysmenorrhea

### Primary Dysmenorrhea Pathway
1. **Progesterone withdrawal** at menstruation
2. **Upregulation of COX-2** in endometrium
3. **Increased PGF2α synthesis** in endometrial tissue
4. **Excessive myometrial contractions** from PGF2α
5. **Increased intrauterine pressure** (40-60 mmHg, normal 10-20)
6. **Local tissue ischemia** from sustained contractions
7. **Pain** from uterine ischemia and prostaglandins

### Secondary Dysmenorrhea Pathways
- **Endometriosis**: Ectopic endometrium produces excessive prostaglandins
- **Adenomyosis**: Junctional zone dysfunction, myometrial contractions
- **Fibroids**: Mechanical obstruction, distorted contractions
- **Adhesions**: Mechanical obstruction from previous surgery/infection

## Mechanism of Amenorrhea

### Primary Amenorrhea Classification
1. **Hypothalamic/Pituitary dysfunction**:
   - CNS lesions (tumor, trauma)
   - Functional (stress, exercise, nutrition)
   - Result: Low GnRH → Low FSH/LH → No ovulation

2. **Gonadal dysgenesis**:
   - Turner syndrome (45,X): Absent/hypoplastic ovaries
   - Pure gonadal dysgenesis: Normal karyotype but streak gonads
   - Result: No ovarian follicles → No estrogen/progesterone

3. **Müllerian agenesis**:
   - Absent uterus/upper vagina
   - Normal ovarian function, but no menstruation possible
   - Androgen insensitivity syndrome: Female external genitalia but no internal structures

4. **Imperforate hymen/cervical agenesis**:
   - Mechanical obstruction
   - Normal hormone function but menses cannot escape

### Secondary Amenorrhea Classification
1. **Hypothalamic suppression**:
   - Stress, excessive exercise, low weight
   - Mechanism: Reduced GnRH pulsatility

2. **Pregnancy** (most common cause)

3. **Hyperprolactinemia**:
   - Pituitary adenoma, drugs (antipsychotics)
   - Mechanism: Prolactin inhibits GnRH

4. **Thyroid disease**:
   - Hyperthyroidism or hypothyroidism
   - Mechanism: Altered estrogen metabolism

5. **Ovarian failure**:
   - Premature ovarian insufficiency (POI)
   - Mechanism: Loss of ovarian follicles

## Endometrial Changes in Menstrual Cycle

### Proliferative Phase
- Estrogen stimulates endometrial growth
- Glands appear straight
- Stroma mitotically active
- Thickness increases 2-4 mm

### Secretory Phase
- Progesterone causes glandular tortuosity
- Secretory material in glands
- Stromal edema increases
- Thickness remains 5-6 mm

### Menstrual Phase
- Progesterone withdrawal
- Endometrial shedding
- Prostaglandins mediate contraction/shedding
- Loss of 3-4 mm endometrium

### Excessive Endometrial Growth (AUB)
- Unopposed estrogen (anovulation)
- Prolonged proliferative phase
- Increased endometrial thickness
- Risk of endometrial hyperplasia/cancer`,
        mnemonics: [
          { text: "Prostaglandin Effect: CUTE", explanation: "Contractions, Uterine ischemia, Tissue pain, Excessive (high levels)" },
          { text: "Amenorrhea Causes: HPG", explanation: "Hypothalamic/Pituitary, Gonadal, Genital tract obstruction" }
        ],
        keyPoints: [
          "Anovulation causes unopposed estrogen → Irregular heavy bleeding",
          "Progesterone withdrawal at menstruation triggers menstruation and increases PGF2α",
          "Primary dysmenorrhea from excessive prostaglandins causing myometrial contractions",
          "Secondary amenorrhea most commonly from pregnancy, stress, or ovarian insufficiency",
          "Coagulopathy in 10-20% of women with heavy menstrual bleeding"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Physiology of Menstruation", edition: "9th" },
          { book: "Williams Gynecology", chapter: "Menstrual Cycle Physiology", edition: "4th" }
        ]
      },
      {
        layer: 3,
        slug: "menstrual-disorders-layer-3-clinical",
        title: "Menstrual Disorders - Clinical Applications",
        estimatedMinutes: 25,
        summary: "Clinical assessment includes detailed history, examination, investigations (ultrasound, blood tests), and management based on FIGO classification. Treatment options range from medical to surgical.",
        contentMd: `# Menstrual Disorders - Clinical Applications

## Clinical Assessment of AUB

### History
- **Bleeding pattern**: Duration, frequency, volume
- **Associated symptoms**: Pain, anemia, impact on quality of life
- **Medications**: Anticoagulants, hormonal contraceptives
- **Coagulopathy history**: Excessive bleeding after surgery, teeth extraction, transfusion history
- **BMI and lifestyle**: Stress, exercise

### Examination
- **Vital signs**: Anemia assessment (pallor, tachycardia)
- **Abdominal exam**: Masses, tenderness
- **Pelvic exam**: Polyps, masses, cervical lesions, uterine size/consistency
- **Skin signs**: Petechiae, ecchymosis (suggest coagulopathy)

### Investigations

#### Ultrasound (First-line)
- **Transabdominal**: Assess uterine size, endometrial thickness, adenomyosis
- **Transvaginal**: Better assessment of endometrial pathology, polyps, fibroids
- **Doppler**: Adenomyosis shows increased vascularity
- **Endometrial thickness**:
  - <5 mm: Unlikely cancer
  - 5-16 mm: Further evaluation needed
  - >16 mm: Hyperplasia/cancer risk

#### Blood Tests
- **CBC**: Assess anemia severity (Hb, ferritin)
- **Coagulation screen**: If heavy bleeding + family history
- **Thyroid function**: TSH (rule out thyroid disease)
- **Pelvic ultrasound** before endometrial biopsy

#### Endometrial Biopsy
- **Indications**:
  - Abnormal ultrasound findings
  - Age >45 with persistent AUB despite treatment
  - Unopposed estrogen states (obesity, PCOS, anovulation)
  - Endometrial thickness >16 mm
- **Method**: Pipelle biopsy (office procedure)
- **Findings**: Hyperplasia, malignancy, atrophic endometrium

## Management of AUB

### First-Line Medical Therapy
1. **NSAIDs**:
   - Reduce prostaglandins → Decrease bleeding by 20-30%
   - Ibuprofen 800 mg TID or naproxen 500 mg BID during menses
   - Effective in primary dysmenorrhea

2. **Hormonal contraceptives**:
   - Combined oral contraceptive pills (COCs)
   - Mechanism: Suppress ovulation, thin endometrium
   - Reduces bleeding by 40-50%
   - Contraindicated in coagulopathy (? thrombosis risk)

3. **Levonorgestrel IUD (Mirena)**:
   - Localizes progestin to endometrium
   - Reduces bleeding by 90% in first 3 months
   - Does not suppress ovulation
   - Good for fibroids/adenomyosis

4. **Tranexamic acid**:
   - Antifibrinolytic
   - Reduces bleeding by 40-50%
   - Use during menses only (1 gram TID)
   - Avoid in thrombophilia

### Second-Line Therapy
- **Progestin therapy**: Norethisterone, medroxyprogesterone acetate
- **GnRH agonists**: For severe cases before surgery
- **Danazol**: Androgenic progestin (side effects limit use)

### Surgical Options
1. **Hysteroscopic resection**:
   - **D&C**: Diagnostic and therapeutic (curettage of hyperplastic endometrium)
   - **Myomectomy**: Resection of submucosal fibroids
   - **Polypectomy**: Removal of polyps
   - Success rate: 70-80%

2. **Endometrial ablation**:
   - Destroys endometrium → Amenorrhea in 40-50%
   - Indications: Intractable bleeding, failed medical therapy
   - Contraindicated: Pregnancy desired, suspicion of malignancy

3. **Hysterectomy**:
   - Definitive treatment
   - Reserved for failed other treatments, comorbidity, or patient request

## Management of Amenorrhea

### Primary Amenorrhea Workup
1. **Assess pubertal development**:
   - Tanner staging (breast, pubic hair)
   - If pubertal development absent → Evaluate hypothalamic-pituitary-gonadal axis

2. **Imaging**:
   - **Pelvic ultrasound**: Assess uterus, ovaries
   - **If no uterus**: Müllerian agenesis likely (normal ovaries)
   - **If no ovaries/streak gonads**: Gonadal dysgenesis

3. **Hormone tests**:
   - **FSH, LH, estradiol**: Assess ovarian function
   - **High FSH + low estradiol**: Ovarian failure
   - **Low FSH + low LH + low estradiol**: Hypothalamic-pituitary dysfunction
   - **Prolactin**: Rule out hyperprolactinemia

4. **Karyotype**:
   - If gonadal dysgenesis suspected (Müllerian agenesis normal karyotype 46,XX)

### Secondary Amenorrhea Workup
1. **Pregnancy test**: First step (MUST rule out pregnancy)
2. **Thyroid function**: TSH
3. **Prolactin**: If elevated, imaging (MRI pituitary)
4. **FSH/LH**: If ovarian failure suspected
5. **Pelvic ultrasound**: Assess ovaries, endometrium

### Primary Amenorrhea Treatment
- **Gonadal dysgenesis**: Hormone replacement therapy (estrogen + progesterone)
- **Müllerian agenesis**: Vaginal dilation or surgical creation (reproductive goal)
- **Hypothalamic amenorrhea**: Correct underlying cause (weight gain, stress reduction, exercise reduction)
- **Imperforate hymen**: Surgical incision

### Secondary Amenorrhea Treatment
- **Pregnancy**: Supportive care
- **Hyperprolactinemia**: Bromocriptine/dopamine agonist, or surgery if adenoma
- **Thyroid disease**: Levothyroxine (hypothyroidism) or PTU/methimazole (hyperthyroidism)
- **Hypothalamic amenorrhea**: Lifestyle modification, weight gain
- **Premature ovarian insufficiency**: Hormone replacement therapy (not contraceptive)

## Management of Dysmenorrhea

### Primary Dysmenorrhea Treatment
1. **NSAIDs** (first-line):
   - Start at menarche of pain or 1-2 days before expected pain
   - Naproxen 500 mg BID, ibuprofen 800 mg TID, mefenamic acid 500 mg TID
   - Effectiveness: 60-70% pain relief in 80% of women

2. **Heat therapy**: Local heat (heating pad) = NSAID efficacy in studies

3. **Hormonal contraceptives**:
   - Suppress ovulation → Reduce prostaglandins
   - Extended-cycle pills reduce menstrual days
   - Effectiveness: 50-60% improvement

4. **Lifestyle**: Regular exercise reduces dysmenorrhea

### Secondary Dysmenorrhea Treatment
- **Treat underlying condition**: Endometriosis, adenomyosis, fibroids
- **NSAIDs**: For symptom management
- **Hormonal contraceptives**: Suppress endometriosis, adenomyosis
- **Surgery**: GnRH agonists, laparoscopy for endometriosis`,
        mnemonics: [
          { text: "AUB Workup: CHIBP", explanation: "Coagulation, History, Imaging (ultrasound), Biopsy, Pregnancy test" },
          { text: "First-Line AUB Treatment: HINT", explanation: "Hormonal contraceptives, IUD (Mirena), NSAIDs, Tranexamic acid" }
        ],
        keyPoints: [
          "Transvaginal ultrasound best assesses endometrial pathology and adenomyosis",
          "NSAIDs and hormonal contraceptives are first-line for both AUB and primary dysmenorrhea",
          "Endometrial biopsy indicated for persistent AUB age >45 or endometrial thickening >16 mm",
          "Primary amenorrhea workup assesses pubertal development, then imaging/hormones",
          "Secondary amenorrhea most common cause is pregnancy; rule this out first"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Management of Menstrual Disorders", edition: "9th" },
          { book: "Williams Gynecology", chapter: "Clinical Management of Abnormal Bleeding", edition: "4th" }
        ]
      },
      {
        layer: 4,
        slug: "menstrual-disorders-layer-4-exam",
        title: "Menstrual Disorders - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam concepts: FIGO AUB classification, normal menstrual parameters, dysmenorrhea mechanisms, amenorrhea differential diagnosis, and evidence-based management.",
        contentMd: `# Menstrual Disorders - Exam Prep

## High-Yield Exam Facts

### 1. Normal Menstrual Cycle (MUST KNOW)
- **Cycle length**: 21-35 days
- **Bleeding duration**: 3-7 days
- **Normal blood loss**: 30-40 mL/cycle
- **Abnormal heavy bleeding**: >80 mL/cycle

### 2. FIGO Classification (PALM-COEIN) - MEMORIZE
**Structural (PALM)**:
- **P**olyps (endometrial/cervical)
- **A**denomyosis (ectopic endometrium in myometrium)
- **L**eiomyoma (fibroids)
- **M**alignancy (endometrial cancer, sarcoma)

**Non-structural (COEIN)**:
- **C**oagulopathy (von Willebrand, platelet disorder)
- **O**vulatory dysfunction (PCOS, anovulation)
- **E**ndometrial disorder (hyperplasia, atrophic endometritis)
- **I**atrogenic (anticoagulants, IUD)
- **N**ot classified (other causes)

### 3. Types of Abnormal Bleeding (Terminology)
| Term | Definition |
|------|-----------|
| **Menorrhagia** | Heavy menstrual bleeding at normal intervals |
| **Metrorrhagia** | Bleeding at irregular intervals |
| **Polymenorrhea** | Frequent cycles (<21 days) |
| **Oligomenorrhea** | Infrequent cycles (>35 days) |
| **Menometrorrhagia** | Heavy irregular bleeding |

### 4. Dysmenorrhea Classification
**Primary**:
- No structural pathology
- Mechanism: Prostaglandins → Myometrial contractions → Ischemia
- Onset: 1-2 years after menarche
- Treatment: NSAIDs (first-line), heat, hormonal contraceptives
- Prevalence: 50-90% of reproductive-age women

**Secondary**:
- Has underlying anatomic disease
- Common causes: Endometriosis, adenomyosis, fibroids
- Onset: Usually >25 years
- Treatment: Address underlying disease + symptomatic management

### 5. Amenorrhea Classification

**Primary Amenorrhea** (by age 15 or 3 years after pubarche):
1. **Hypothalamic-Pituitary**: CNS lesions, stress, exercise, low weight
2. **Gonadal**: Turner syndrome (45,X), pure gonadal dysgenesis
3. **Genital tract**: Müllerian agenesis, imperforate hymen, cervical stenosis
4. **Androgen insensitivity**: Female external genitalia, no internal structures

**Secondary Amenorrhea** (cessation for ≥3 months):
1. **Pregnancy** (most common)
2. **Hypothalamic suppression**: Stress, exercise, weight loss
3. **Hyperprolactinemia**: Pituitary adenoma, antipsychotics
4. **Thyroid dysfunction**: Hyper/hypothyroidism
5. **Ovarian**: Premature ovarian insufficiency (POI)

### 6. Hormone Patterns in Amenorrhea
| Condition | FSH | LH | Estradiol | Prolactin |
|-----------|-----|----|-----------|-----------|
| **Hypothalamic** | Low | Low | Low | Normal |
| **Pituitary tumor** | Low | Low | Low | High |
| **Ovarian failure** | High | High | Low | Normal |
| **Hyperprolactinemia** | Low | Low | Low | HIGH |
| **Thyroid disease** | Variable | Variable | Variable | Normal |

### 7. First-Line Imaging
- **Transvaginal ultrasound**: Best for endometrial pathology, adenomyosis, fibroids
- **Endometrial thickness**: <5 mm = reassuring, 5-16 mm = intermediate, >16 mm = concerning

### 8. Endometrial Biopsy Indications
- Age >45 with persistent AUB despite treatment
- Endometrial thickness >16 mm
- Abnormal imaging findings
- Unopposed estrogen (obesity, PCOS, anovulation)

### 9. First-Line Treatment for AUB
1. **NSAIDs**: Reduce bleeding by 20-30%, improve dysmenorrhea
2. **Hormonal contraceptives**: Thin endometrium, suppress ovulation
3. **Levonorgestrel IUD (Mirena)**: Reduces bleeding by 90%, localizes progestin
4. **Tranexamic acid**: Reduces bleeding by 40-50%, use during menses

### 10. First-Line Treatment for Primary Dysmenorrhea
- **NSAIDs**: Start at onset of pain or 1-2 days before
  - Naproxen 500 mg BID
  - Ibuprofen 800 mg TID
  - Mefenamic acid 500 mg TID
- **Effectiveness**: 60-70% pain relief in 80% of women
- **Alternative**: Hormonal contraceptives (50-60% improvement)

### 11. Exam Scenario: Heavy Bleeding
**Question**: 28-year-old with menorrhagia. What is the first investigation?
- **Answer**: Transvaginal ultrasound (assess for PALM causes)
- **Second step**: If normal ultrasound, CBC for anemia, coagulation screen if family history
- **If fibroids found**: Check hemoglobin, consider treatment
- **If hyperplastic endometrium**: Biopsy to rule out cancer risk

### 12. Exam Scenario: Amenorrhea
**Question**: 24-year-old nullipara with 6 months amenorrhea, regular cycle before. Next step?
- **Answer**: Pregnancy test FIRST (most common cause)
- **If negative**: TSH, prolactin
- **If normal labs**: Consider hypothalamic amenorrhea (stress, exercise, weight loss)
- **If high prolactin**: Pituitary MRI

### 13. Coagulopathy in AUB
- **Prevalence**: 10-20% of women with heavy menstrual bleeding
- **Most common**: Von Willebrand disease (75% of inherited bleeding disorders)
- **Screening**: Ask about bleeding with teeth extraction, surgery, transfusions
- **Tests**: PT, aPTT, von Willebrand factor antigen/activity, platelet count

### 14. Prostaglandin Mechanism
- **PGF2α** increases at menstruation
- **Causes**: Myometrial contractions, local ischemia, pain
- **NSAIDs block**: Cyclooxygenase → Reduce prostaglandins
- **Result**: Decreased contractions, bleeding, pain
- **Timing**: Start NSAID at onset of pain for best effect`,
        mnemonics: [
          { text: "AUB First Workup: TUP", explanation: "Transvaginal ultrasound, Urine/serum pregnancy test, Prolactin/TSH" },
          { text: "Dysmenorrhea Differentiation: SOAP", explanation: "Secondary = anatomic, Onset after age 25, Adenomyosis/endometriosis/fibroids, Primary = prostaglandins" },
          { text: "Amenorrhea Top Causes: POTTY", explanation: "Pregnancy, Ovarian failure, Thyroid, Tumor (prolactin), Hypothalamic" }
        ],
        keyPoints: [
          "Normal menstruation: 21-35 days, 3-7 days duration, 30-40 mL volume",
          "FIGO PALM-COEIN classification guides AUB diagnosis",
          "First-line AUB treatment: NSAIDs, hormonal contraceptives, Mirena IUD, tranexamic acid",
          "NSAIDs first-line for primary dysmenorrhea; start at pain onset",
          "Pregnancy is most common cause of secondary amenorrhea; always rule out first"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Menstrual Disorders", edition: "9th" },
          { book: "Williams Gynecology", chapter: "Abnormal Uterine Bleeding", edition: "4th" }
        ]
      },
      {
        layer: 5,
        slug: "menstrual-disorders-layer-5-active-recall",
        title: "Menstrual Disorders - Active Recall",
        estimatedMinutes: 10,
        summary: "8 key Q&A covering classification, diagnosis, management, and complications of menstrual disorders.",
        contentMd: `# Menstrual Disorders - Active Recall

## Questions & Answers

**Q1: Define menorrhagia and distinguish it from metrorrhagia.**
A: **Menorrhagia** = Heavy menstrual bleeding (>80 mL) at **normal intervals** (cycle length 21-35 days). **Metrorrhagia** = Bleeding at **irregular intervals**. Example: Menorrhagia is regular heavy periods; metrorrhagia is unexpected bleeding between periods or prolonged cycles.

**Q2: What is the FIGO classification for abnormal uterine bleeding?**
A: **PALM-COEIN**. **PALM** (structural): **P**olyps, **A**denomyosis, **L**eiomyoma, **M**alignancy. **COEIN** (non-structural): **C**oagulopathy, **O**vulatory dysfunction, **E**ndometrial disorder, **I**atrogenic, **N**ot classified. This classification guides diagnosis and management.

**Q3: Explain the mechanism of primary dysmenorrhea and why NSAIDs are effective.**
A: **Mechanism**: Progesterone withdrawal at menstruation triggers endometrial production of PGF2α (prostaglandins). PGF2α causes excessive myometrial contractions, leading to intrauterine ischemia and pain. **NSAID effect**: NSAIDs block cyclooxygenase → Reduce prostaglandin synthesis → Decrease myometrial contractions and ischemia → Pain relief. Effectiveness: 60-70% pain reduction in 80% of women.

**Q4: What is the first investigation for a 32-year-old woman with menorrhagia?**
A: **Transvaginal ultrasound** (first-line imaging). Assesses for structural causes (PALM): polyps, adenomyosis, leiomyoma, endometrial thickening suggesting hyperplasia/malignancy. If ultrasound normal, proceed with CBC (anemia assessment) and coagulation screen if family history of bleeding.

**Q5: At what endometrial thickness should endometrial biopsy be considered for a 48-year-old with AUB?**
A: **Endometrial thickness >16 mm** is concerning and warrants endometrial biopsy (or D&C) to rule out hyperplasia/malignancy. Thickness 5-16 mm is intermediate; <5 mm is reassuring. Additionally, biopsy indicated if age >45 with persistent AUB despite treatment, or unopposed estrogen states.

**Q6: A 20-year-old reports severe lower abdominal pain starting at menarche, occurring with each period, lasting 2-3 days. Exam and ultrasound normal. Diagnosis and treatment?**
A: **Diagnosis**: Primary dysmenorrhea (no anatomic pathology found). **Treatment**: **First-line**: NSAIDs (ibuprofen 800 mg TID, naproxen 500 mg BID) starting at onset of pain or 1-2 days before. Heat therapy (heating pad) equally effective in studies. **Alternative**: Hormonal contraceptives (suppress ovulation). Prognosis: Often improves over time; explains why secondary dysmenorrhea typically starts after age 25.

**Q7: What is the most common cause of secondary amenorrhea, and how should you evaluate it?**
A: **Most common cause**: **Pregnancy**. **Evaluation** (in order): (1) **Urine or serum pregnancy test FIRST** (beta-hCG). If negative: (2) **TSH** (rule out thyroid disease), (3) **Prolactin** (if elevated, MRI pituitary to rule out adenoma), (4) **FSH/LH** (if ovarian failure suspected based on age/hot flashes), (5) **Pelvic ultrasound** (if structural cause suspected). Always rule out pregnancy before other investigations.

**Q8: A 27-year-old has had secondary amenorrhea for 4 months. Pregnancy test negative, TSH normal, prolactin normal. What is the most likely diagnosis, and how do you manage it?**
A: **Most likely**: **Hypothalamic amenorrhea** (from stress, exercise, weight loss, or psychological factors). **Management**: (1) Identify and correct underlying cause (reduce exercise, stress reduction, weight gain if underweight), (2) Monitor for return of menses (may take months), (3) Assess for bone density loss (if prolonged), (4) Consider hormone replacement if prolonged or bone loss present, (5) Reassure that fertility usually returns with correction.`,
        mnemonics: [],
        keyPoints: [
          "Primary dysmenorrhea: normal imaging, prostaglandins → NSAIDs first-line",
          "Menorrhagia at normal intervals; metrorrhagia at irregular intervals",
          "First-line AUB investigations: transvaginal ultrasound, then CBC and coagulation screen",
          "Pregnancy most common cause secondary amenorrhea; always test first",
          "Mirena IUD most effective for heavy bleeding (90% reduction)"
        ],
        textbookRefs: [
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Menstrual Disorders", edition: "9th" },
          { book: "Williams Gynecology", chapter: "Abnormal Uterine Bleeding", edition: "4th" }
        ]
      }
    ]
  }
];
