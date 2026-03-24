// 5-layer lessons for Reproductive Physiology (PY-MOD-10 topics 1-6)
import type { TopicLessons } from "./content-loader";

export const physiologyReproductiveLessons: TopicLessons[] = [
  // Topic 1: Male Reproductive Physiology
  {
    topicCode: "PY-MOD-10-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "physio-male-repro-foundation",
        title: "Male Reproductive Physiology - Foundation",
        estimatedMinutes: 25,
        summary: "Male reproductive physiology involves spermatogenesis, testosterone secretion, and sexual function.",
        contentMd: `# Male Reproductive Physiology

## Hypothalamic-Pituitary-Gonadal (HPG) Axis
- **GnRH (Gonadotropin-releasing hormone)**: Released by hypothalamus
- **LH (Luteinizing hormone)**: Stimulates Leydig cells → testosterone
- **FSH (Follicle-stimulating hormone)**: Stimulates Sertoli cells → spermatogenesis
- **Feedback**: Testosterone ↑ inhibits GnRH/LH; inhibin ↓ FSH

## Spermatogenesis
- **Duration**: 74 days (from spermatogonium to mature sperm)
- **Location**: Seminiferous tubules (lined with Sertoli cells)
- **Process**:
  1. Spermatogonium (diploid) → Primary spermatocyte
  2. Meiosis I → Secondary spermatocyte (haploid)
  3. Meiosis II → Spermatid
  4. Spermiogenesis → Mature sperm
- **Output**: 200-300 million sperm/day from both testes

## Testosterone
- **Synthesis**: Leydig cells (interstitial cells) from cholesterol
- **Normal range**: 300-1,000 ng/dL (10-35 nmol/L)
- **Transport**: 97% bound to SHBG/albumin; 2-3% free (biologically active)
- **Functions**: Spermatogenesis, secondary sexual characteristics, anabolic effects, libido, aggression

## Sperm Structure & Function
- **Head**: Contains nucleus and acrosome (enzymes for egg penetration)
- **Midpiece**: Mitochondria for ATP production
- **Tail (flagellum)**: Propels sperm forward
- **Motility**: 50% progressive motility required for fertility
- **Survival**: 3-5 days in female reproductive tract`,
        mnemonics: [
          {
            text: "GnRH → LH (testosterone), FSH (spermatogenesis)",
            explanation: "GnRH stimulates both LH and FSH from anterior pituitary"
          },
          {
            text: "Spermatogenesis: 74 days from germ cell to mature sperm",
            explanation: "Duration of complete spermatogenic cycle"
          }
        ],
        keyPoints: [
          "HPG axis: GnRH → LH → testosterone; GnRH → FSH → spermatogenesis",
          "Spermatogenesis: 74 days, location: seminiferous tubules",
          "Testosterone: 300-1,000 ng/dL; 97% bound, 3% free (active)",
          "200-300 million sperm/day production",
          "Sperm survival: 3-5 days in female tract"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 80 - Reproduction", edition: "14th" }]
      },
      {
        layer: 2,
        slug: "physio-male-repro-mechanism",
        title: "Male Reproductive Physiology - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms of testosterone synthesis, spermatogenesis regulation, and sexual response.",
        contentMd: `# Male Reproductive Mechanisms

## Testosterone Synthesis (Leydig Cell)
- **Substrate**: Cholesterol → Pregnenolone (P450scc)
- **Δ5 pathway**: Pregnenolone → 17-OH-pregnenolone → DHEA → Androstenediol → Testosterone
- **Regulation**: LH stimulates → cAMP ↑ → cholesterol transport ↑ → testosterone ↑

## Sertoli Cell Functions
- **Supporting spermatogenesis**: Phagocytose excess cytoplasm, nutrients
- **Tight junctions**: Create blood-testis barrier (protects developing sperm)
- **Inhibin secretion**: Negative feedback on FSH
- **Anti-Müllerian hormone (AMH)**: Regression of Müllerian ducts in fetus

## Spermatogenesis Regulation
- **FSH**: Primary regulator of spermatogenesis volume
- **Testosterone**: Local concentration required (some converts to estradiol via aromatase)
- **Temperature**: Scrotum ~1-2°C cooler than core (testicular descent important)
- **Nutrition**: Zinc, vitamin C, folate essential

## Sexual Response Cycle (Masters & Johnson)
| Phase | Male Response | Duration |
|-------|--------------|----------|
| Arousal | Erection (parasympathetic), myotonia | Variable |
| Plateau | Full erection, pre-ejaculatory fluid | 30 sec - 3 min |
| Orgasm | Rhythmic contractions, ejaculation | 3-8 sec |
| Resolution | Detumescence (flaccidity), refractory period | Minutes-hours |

## Erectile Mechanism
- **Arteriolar dilation**: Increased arterial inflow (parasympathetic, nitric oxide)
- **Corpus cavernosum expansion**: Traps venous outflow
- **Rigid erection**: Sustained by venous-occlusive mechanism
- **Loss of erection**: Sympathetic activation, increased PDE5 (phosphodiesterase)`,
        mnemonics: [
          {
            text: "LH → testosterone; FSH → spermatogenesis (volume)",
            explanation: "LH controls testosterone production; FSH drives quantity of sperm"
          }
        ],
        keyPoints: [
          "Testosterone synthesis: Cholesterol → Pregnenolone → pathway to testosterone",
          "LH stimulates Leydig cells; FSH stimulates Sertoli cells",
          "Sertoli cells: phagocytose excess cytoplasm, create blood-testis barrier",
          "Inhibin: negative feedback on FSH",
          "Scrotal temperature: ~1-2°C cooler than core",
          "Erectile mechanism: parasympathetic (NO), venous-occlusive"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 80", edition: "14th" }]
      },
      {
        layer: 3,
        slug: "physio-male-repro-clinical",
        title: "Male Reproductive Physiology - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical disorders: erectile dysfunction, infertility, hypogonadism.",
        contentMd: `# Clinical Male Reproductive Disorders

## Erectile Dysfunction (ED)
- **Causes**: Vascular (atherosclerosis, hypertension), neurogenic (DM, spinal cord injury), hormonal (low T), psychological
- **Mechanism**: ↓ NO production → ↓ cGMP → ↓ vasodilation
- **Treatment**: PDE5 inhibitors (sildenafil, tadalafil), testosterone replacement, vascular surgery

## Male Infertility
- **Causes**: Low sperm count (oligospermia <15 million/mL), poor motility (asthenospermia), abnormal morphology (teratospermia)
- **Evaluation**: Semen analysis (volume, count, motility, morphology)
- **Etiology**: Varicocele (dilated testicular veins), hormonal deficiency, obstruction, genetic (Y chromosome microdeletion)
- **Treatment**: Address underlying cause, ART (IVF)

## Hypogonadism
- **Primary**: Testicular failure (low T, high LH/FSH)
  - Causes: Klinefelter (XXY), cryptorchidism, trauma, chemotherapy
- **Secondary**: Pituitary/hypothalamic failure (low T, low/normal LH/FSH)
  - Causes: Pituitary tumors, anabolic steroid use, obesity
- **Treatment**: Testosterone replacement (oral, IM, transdermal)

## Anabolic Steroid Use & Abuse
- **Effect**: Supraphysiologic testosterone → ↑ muscle mass, strength, aggression
- **Side effects**: Testicular atrophy, azoospermia (reversible), liver toxicity, cardiovascular changes, mood disturbance
- **Stopping**: Takes weeks-months for HPG axis recovery
- **India**: Growing misuse in bodybuilding, athletics communities`,
        mnemonics: [
          {
            text: "PDE5 inhibitors work by ↑ cGMP → vasodilation",
            explanation: "Sildenafil, tadalafil block phosphodiesterase-5, increasing cGMP"
          }
        ],
        keyPoints: [
          "ED: vascular, neurogenic, hormonal, psychological causes",
          "Infertility: oligospermia, asthenospermia, teratospermia",
          "Primary hypogonadism: testicular failure",
          "Secondary hypogonadism: pituitary/hypothalamic failure",
          "PDE5 inhibitors: safe, effective for ED"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 80", edition: "14th" }]
      },
      {
        layer: 4,
        slug: "physio-male-repro-exam",
        title: "Male Reproductive Physiology - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on male reproductive physiology.",
        contentMd: `# Exam High Yield

## HPG Axis
- **GnRH**: Hypothalamus → pituitary
- **LH**: Stimulates Leydig cells → testosterone
- **FSH**: Stimulates Sertoli cells → spermatogenesis

## Testosterone
- **Normal**: 300-1,000 ng/dL
- **Transport**: 97% bound (SHBG/albumin), 3% free (active)
- **Feedback**: Testosterone ↑ inhibits GnRH/LH; inhibin ↓ FSH

## Spermatogenesis
- **Duration**: 74 days
- **Location**: Seminiferous tubules
- **Output**: 200-300 million sperm/day
- **Requirements**: Temperature <body temp, FSH, testosterone, nutrients (Zn, folate)

## Clinical Pearls
- **ED**: Vascular, neurogenic, hormonal causes
- **Infertility**: Semen analysis abnormalities (count, motility, morphology)
- **Hypogonadism**: Primary (high LH/FSH) vs secondary (low LH/FSH)
- **PDE5 inhibitors**: Sildenafil, tadalafil for ED`,
        mnemonics: [],
        keyPoints: [
          "GnRH → LH (testosterone) and FSH (spermatogenesis)",
          "Spermatogenesis: 74 days, 200-300 million/day",
          "Testosterone: mostly bound, only 3% free (active)",
          "Inhibin: feedback on FSH"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 80", edition: "14th" }]
      },
      {
        layer: 5,
        slug: "physio-male-repro-recall",
        title: "Male Reproductive Physiology - Active Recall",
        estimatedMinutes: 12,
        summary: "Flashcards on male reproductive physiology.",
        contentMd: `# Active Recall

**Q1:** What is the duration of spermatogenesis?
> 74 days (from spermatogonium to mature sperm)

**Q2:** Normal testosterone range?
> 300-1,000 ng/dL (10-35 nmol/L)

**Q3:** How much testosterone is biologically active?
> ~2-3% (free testosterone); rest bound to SHBG/albumin

**Q4:** LH stimulates which cells to produce testosterone?
> Leydig cells (interstitial cells)

**Q5:** FSH stimulates which cells to produce spermatogenesis?
> Sertoli cells (supporting cells)

**Q6:** Daily sperm production from both testes?
> 200-300 million sperm/day

**Q7:** How long do sperm survive in female reproductive tract?
> 3-5 days

**Q8:** What is the mechanism of PDE5 inhibitors (sildenafil)?
> Increase cGMP → vasodilation → improved blood flow to corpus cavernosum

**Q9:** Primary hypogonadism shows what LH/FSH pattern?
> High LH and FSH (testis cannot respond to hormones)

**Q10:** Secondary hypogonadism shows what LH/FSH pattern?
> Low or normal LH and FSH (pituitary/hypothalamic failure)`
      }
    ]
  },

  // Topic 2: Female Reproductive Physiology
  {
    topicCode: "PY-MOD-10-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "physio-female-repro-foundation",
        title: "Female Reproductive Physiology - Foundation",
        estimatedMinutes: 25,
        summary: "Female reproductive physiology includes the menstrual cycle, ovulation, and hormonal regulation.",
        contentMd: `# Female Reproductive Physiology

## Menstrual Cycle (28 days average, range 21-35)
| Phase | Duration | Events | Hormones |
|-------|----------|--------|----------|
| **Menstruation** | 3-5 days | Endometrial shedding | Low estrogen, progesterone |
| **Follicular** | 10-14 days | Follicle growth, estrogen ↑ | FSH ↑, estradiol ↑ |
| **Ovulation** | 1 day | Surge of LH, egg release | LH surge, FSH surge |
| **Luteal** | 12-14 days | Corpus luteum, progesterone ↑ | Progesterone ↑, LH/FSH ↓ |

## Hypothalamic-Pituitary-Ovarian (HPO) Axis
- **GnRH**: Pulsatile release (every 90 min) from hypothalamus
- **LH & FSH**: Anterior pituitary response to GnRH
- **Feedback**:
  - **Estrogen (low)**: Negative feedback (slows LH/FSH)
  - **Estrogen (high)**: Positive feedback (causes LH surge)
  - **Progesterone**: Negative feedback (slows GnRH)

## Follicle Development
1. **Primordial follicles**: Single layer of granulosa cells around oocyte
2. **Primary follicles**: Multilayered granulosa, zona pellucida develops
3. **Secondary follicles**: Fluid accumulation (antrum formation)
4. **Tertiary (Graafian)**: Mature follicle, ready for ovulation (~20 mm)
5. **Ovulation**: LH surge triggers release of oocyte (metaphase II)

## Oogenesis
- **Fetal life**: Mitosis of oogonia → ~7 million oocytes at 20 weeks
- **Birth**: ~2 million primordial follicles
- **Puberty**: ~300,000-400,000 follicles (only 400-500 ovulate in lifetime)
- **Arrest**: Oocyte arrests in prophase I of meiosis I until ovulation`,
        mnemonics: [
          {
            text: "Menstrual cycle = 28 days (3+14+1+12 = menstruation+follicular+ovulation+luteal)",
            explanation: "Average 28 days; normal range 21-35 days"
          },
          {
            text: "GnRH pulsatile (every 90 min); continuous GnRH suppresses, pulsatile stimulates",
            explanation: "Frequency of GnRH determines LH/FSH release pattern"
          }
        ],
        keyPoints: [
          "Menstrual cycle: 28 days (3 menstruation, 10-14 follicular, 1 ovulation, 12-14 luteal)",
          "GnRH pulsatile (90 min intervals)",
          "Follicle development: primordial → primary → secondary → tertiary (Graafian)",
          "Oogenesis: 7 million at 20 weeks → 300,000 at puberty → 400-500 ovulate lifetime",
          "Estrogen positive feedback triggers LH surge for ovulation"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 81 - Female Reproduction", edition: "14th" }]
      },
      {
        layer: 2,
        slug: "physio-female-repro-mechanism",
        title: "Female Reproductive Physiology - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms of ovulation, corpus luteum formation, and hormonal control.",
        contentMd: `# Female Reproductive Mechanisms

## Ovulation Trigger (LH Surge)
- **Estrogen threshold**: ~200-300 pg/mL sustained for 24-48 hours → positive feedback
- **LH surge**: 24-36 hours of LH peak
- **Mechanism**: LH stimulates proteolytic enzymes, smooth muscle contraction in follicle wall
- **Oocyte release**: Ovulation occurs 24-36 hours after LH surge onset

## Corpus Luteum Formation & Regression
- **Formation**: After ovulation, granulosa + theca cells → corpus luteum
- **Functions**: Progesterone production, inhibin secretion
- **Lifespan**: 12-14 days if no pregnancy
- **hCG rescue**: If pregnancy occurs, embryonic hCG maintains CL beyond day 14
- **Demise**: If no pregnancy, LH/FSH decline → CL regression → menstruation

## Progesterone & Estrogen Actions
| Hormone | Source | Phase | Actions |
|---------|--------|-------|---------|
| **Estradiol** | Granulosa cells | Follicular | Endometrial proliferation, breast growth, positive feedback (LH surge) |
| **Progesterone** | Corpus luteum | Luteal | Endometrial secretion, thermogenesis (BBT ↑ 0.5°C), negative feedback |

## Endometrial Changes
- **Proliferative phase**: Estrogen-induced glandular/vascular proliferation
- **Secretory phase**: Progesterone induces glandular secretion, edema, spiral arteries
- **Menstruation**: Prostaglandin F2α-induced vasoconstriction → ischemia → shedding

## Basal Body Temperature (BBT)
- **Follicular**: 36.5-36.8°C
- **Ovulation**: Slight dip day before surge
- **Luteal**: ↑ 0.5°C (from progesterone thermogenesis)
- **Clinical use**: Indicates ovulation has occurred (confirms luteal phase)`,
        mnemonics: [
          {
            text: "Estradiol ↑ (positive feedback) → LH surge → ovulation",
            explanation: "High estrogen for 24-48 hours triggers LH surge and ovulation"
          },
          {
            text: "BBT ↑ 0.5°C in luteal phase (progesterone effect)",
            explanation: "Progesterone raises temperature set-point for body"
          }
        ],
        keyPoints: [
          "LH surge: 24-36 hours duration, triggers ovulation",
          "Estrogen positive feedback: >200-300 pg/mL sustained",
          "Corpus luteum: 12-14 day lifespan without pregnancy",
          "hCG rescue: maintains CL if pregnancy occurs",
          "Progesterone: endometrial secretion, thermogenesis (BBT ↑ 0.5°C)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 81", edition: "14th" }]
      },
      {
        layer: 3,
        slug: "physio-female-repro-clinical",
        title: "Female Reproductive Physiology - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical disorders: anovulation, amenorrhea, infertility, PCOS.",
        contentMd: `# Clinical Female Reproductive Disorders

## Anovulation (No Ovulation)
- **Cause**: Hormonal imbalance (LH/FSH abnormalities), hyperprolactinemia, thyroid dysfunction
- **Result**: Continuous estrogen without progesterone → unopposed endometrial growth
- **Risk**: Endometrial cancer

## Amenorrhea
- **Primary**: Never menstruated (puberty delayed >14 years)
- **Secondary**: Cessation of menses >3 months (after regular cycles)
- **Causes**:
  - **Hypothalamic**: Eating disorders, stress, excessive exercise (↓ GnRH)
  - **Pituitary**: Prolactinoma (↑ dopamine suppresses GnRH), pituitary tumors
  - **Ovarian**: Premature ovarian failure (POF), PCOS
  - **Uterine**: Asherman's syndrome (adhesions)

## Polycystic Ovary Syndrome (PCOS)
- **Pathophysiology**: Insulin resistance → ↑ androgens (LH/insulin stimulate theca cells)
- **Features**: Amenorrhea/irregular cycles, hirsutism, acne, obesity, infertility
- **Diagnosis**: Rotterdam criteria (2/3: anovulation, hyperandrogenism, polycystic ovaries on ultrasound)
- **Management**: Metformin (insulin sensitivity), OCPs, spironolactone

## Female Infertility
- **Causes**: Anovulation (40%), tubal obstruction (30%), endometriosis (15%), male factor (15%)
- **Evaluation**:
  - FSH/LH day 3 (ovarian reserve)
  - Progesterone day 21 (confirms ovulation)
  - Semen analysis (partner)
  - Hysterosalpingography (patency)
- **Treatment**: Address cause, ART (IVF)

## Endometriosis
- **Definition**: Endometrial tissue outside uterus (peritoneum, ovaries, bowel)
- **Pathophysiology**: Retrograde menstruation, inflammation, angiogenesis
- **Presentation**: Dysmenorrhea, dyspareunia, infertility
- **Treatment**: NSAIDs, hormonal (OCPs, progestins, GnRH agonists), surgery

## Indian Context
- **PCOS prevalence**: 20-30% of reproductive-age women
- **Endometriosis**: Often underdiagnosed; delays in diagnosis common
- **Infertility**: Rising due to PCOS, irregular cycles, stress`,
        mnemonics: [
          {
            text: "PCOS: Insulin resistance → ↑ androgens → anovulation",
            explanation: "Hyperinsulinemia stimulates ovarian theca cells to produce excess androgen"
          }
        ],
        keyPoints: [
          "Anovulation: no progesterone → unopposed estrogen → endometrial cancer risk",
          "Amenorrhea: hypothalamic (eating disorder), pituitary (prolactinoma), ovarian (POF), uterine",
          "PCOS: insulin resistance + hyperandrogenism + polycystic ovaries",
          "Female infertility: anovulation 40%, tubal 30%, endometriosis 15%"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 81", edition: "14th" }]
      },
      {
        layer: 4,
        slug: "physio-female-repro-exam",
        title: "Female Reproductive Physiology - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on female reproductive physiology.",
        contentMd: `# Exam High Yield

## Menstrual Cycle Phases
- **Menstruation**: 3-5 days, low estrogen/progesterone
- **Follicular**: 10-14 days, FSH ↑, estradiol ↑
- **Ovulation**: LH surge triggers release
- **Luteal**: 12-14 days, progesterone ↑, LH/FSH ↓

## HPO Axis Control
- **GnRH**: Pulsatile (90 min) from hypothalamus
- **Estrogen (low)**: Negative feedback
- **Estrogen (high)**: Positive feedback (LH surge)
- **Progesterone**: Negative feedback

## Follicle Development
- Primordial → Primary → Secondary → Tertiary (Graafian)
- **Tertiary follicle**: ~20 mm, ready for ovulation

## Corpus Luteum
- **Lifespan**: 12-14 days without pregnancy
- **hCG rescue**: Maintains CL if pregnancy
- **Hormones**: Progesterone, inhibin

## Clinical Conditions
- **Anovulation**: No progesterone → unopposed estrogen
- **Amenorrhea**: Hypothalamic, pituitary, ovarian, uterine causes
- **PCOS**: Insulin resistance + hyperandrogenism
- **Female infertility**: Anovulation, tubal, endometriosis`,
        mnemonics: [],
        keyPoints: [
          "28-day cycle: 3 menstruation, 10-14 follicular, 1 ovulation, 12-14 luteal",
          "LH surge: 24-36 hours before ovulation",
          "Estrogen positive feedback for LH surge",
          "BBT rises 0.5°C in luteal phase",
          "PCOS: most common cause of anovulation"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 81", edition: "14th" }]
      },
      {
        layer: 5,
        slug: "physio-female-repro-recall",
        title: "Female Reproductive Physiology - Active Recall",
        estimatedMinutes: 12,
        summary: "Flashcards on female reproductive physiology.",
        contentMd: `# Active Recall

**Q1:** Average menstrual cycle length?
> 28 days (range 21-35 days)

**Q2:** How often is GnRH released?
> Every 90 minutes (pulsatile pattern)

**Q3:** FSH is dominant in which phase?
> Follicular phase (stimulates follicle growth)

**Q4:** LH surge triggers ovulation after how many hours?
> 24-36 hours

**Q5:** What hormone produced by corpus luteum maintains pregnancy?
> Progesterone (hCG from embryo maintains CL)

**Q6:** Corpus luteum lifespan without pregnancy?
> 12-14 days

**Q7:** Basal body temperature rises by how much in luteal phase?
> 0.5°C (from progesterone thermogenesis)

**Q8:** PCOS pathophysiology involves which hormone excess?
> Androgen excess (from insulin resistance stimulating theca cells)

**Q9:** Most common cause of female infertility?
> Anovulation (PCOS, hypothalamic amenorrhea)

**Q10:** Endometrial cancer risk increased in??
> Anovulation (unopposed estrogen without progesterone)`
      }
    ]
  },

  // Topic 3: Pregnancy & Parturition Physiology (abbreviated for space)
  {
    topicCode: "PY-MOD-10-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "pregnancy-parturition-foundation",
        title: "Pregnancy & Parturition Physiology - Foundation",
        estimatedMinutes: 25,
        summary: "Pregnancy involves physiological adaptation to support fetal development; parturition is the process of labor and delivery.",
        contentMd: `# Pregnancy & Parturition Physiology

## Pregnancy Hormones
| Hormone | Source | Function |
|---------|--------|----------|
| **hCG** | Syncytiotrophoblast | Maintains corpus luteum (weeks 0-10) |
| **Progesterone** | Corpus luteum (8 wks), placenta | Prevents uterine contractions, endometrial maintenance |
| **Estrogen** | Placenta | Uterine growth, fetal adrenal development |
| **Human Placental Lactogen** | Placenta | Insulin antagonism (maternal glucose for fetus) |

## Physiological Changes in Pregnancy
| System | Changes |
|--------|---------|
| **Cardiovascular** | CO ↑ 40%, HR ↑ 15-20 bpm, SV ↑, BP slight ↓ (relaxin effect) |
| **Respiratory** | MV ↑ 40%, SaO₂ usually normal, mild respiratory alkalosis |
| **Renal** | GFR ↑ 50%, RBF ↑, glycosuria, proteinuria may occur |
| **Metabolic** | Insulin resistance ↑ (2nd-3rd trimester), metabolic rate ↑ 25% |
| **Hematologic** | Plasma vol ↑ 50%, RBC ↑ 25% (anemia if Hb <11 g/dL) |
| **Endocrine** | Thyroid activity ↑, adrenal output ↑, cortisol ↑ |

## Parturition
- **Trigger**: fetal glucocorticoids → placental estrogen ↑ → oxytocin receptors ↑
- **Stages**:
  1. **Latent** (0-3 cm dilation): Irregular contractions
  2. **Active** (3-7 cm): Strong, regular contractions (↑ oxytocin)
  3. **Transition** (7-10 cm): Intense contractions, exhaustion
  4. **Expulsive**: Pushing, fetal descent
  5. **Third stage**: Placental delivery (oxytocin maintains contractions)
- **Duration**: Primigravida ~12-14 hours; multipara ~8-10 hours`,
        mnemonics: [
          {
            text: "hCG maintains CL for first ~10 weeks (pregnancy salvage)",
            explanation: "Without hCG, CL would regress → miscarriage"
          },
          {
            text: "Pregnancy: CO ↑ 40%, RBC ↑ 25%, plasma vol ↑ 50% (anemia risk)",
            explanation: "Disproportionate plasma expansion causes physiological anemia"
          }
        ],
        keyPoints: [
          "hCG: maintains corpus luteum weeks 0-10",
          "Progesterone: prevents uterine contractions",
          "Cardiovascular: CO ↑ 40%, BP slight ↓",
          "Respiratory: minute ventilation ↑ 40%",
          "Renal: GFR ↑ 50% (glycosuria, proteinuria may occur)",
          "Parturition stages: latent → active → transition → expulsive → 3rd stage"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 82 - Pregnancy & Lactation", edition: "14th" }]
      },
      {
        layer: 2,
        slug: "pregnancy-parturition-mechanism",
        title: "Pregnancy & Parturition - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms of implantation, trophoblast invasion, placental function, and labor induction.",
        contentMd: `# Pregnancy & Parturition Mechanisms

## Implantation & Trophoblast Invasion
- **Day 6-7**: Blastocyst touches endometrium
- **Day 8-12**: Trophoblast invades → syncytiotrophoblast forms
- **hCG secretion**: Syncytiotrophoblast produces hCG (rescue CL)
- **Decidualization**: Endometrium transformed for implantation support
- **Placentation**: Trophoblast erodes maternal spiral arteries → low-resistance circulation

## Placental Functions
1. **Gas exchange**: O₂ delivery to fetus, CO₂ removal
2. **Nutrient transport**: Glucose (facilitated), amino acids (active), lipids, vitamins
3. **Waste removal**: Urea, creatinine
4. **Hormone production**: Progesterone, estrogen, hPL, hCG
5. **Immunological**: IgG transfer (maternal antibodies), but viral/parasitic barrier limited

## Oxytocin & Myometrial Contraction
- **Positive feedback loop**: Uterine stretch → oxytocin release → stronger contractions → more stretch
- **Prostaglandins**: PGF2α and PGE2 increase during labor (↑ oxytocin sensitivity, contractions)
- **Progesterone withdrawal**: Decreases toward parturition → oxytocin effects unopposed

## Fetal-Placental Unit Maturation
- **Fetal cortisol**: ↑ in weeks 35-40 → stimulates 17α-hydroxylase → DHEA-S ↑
- **Placental 16α-hydroxylase**: Converts DHEA-S → estrogen ↑
- **Estrogen**: ↑ oxytocin receptors, ↑ gap junctions in myometrium
- **Result**: Myometrium becomes excitable (ready for labor)

## Amniotic Fluid
- **Volume**: 500-1,000 mL at term
- **Functions**: Cushioning, fetal movement, fetal swallowing (lung/GI development)
- **Composition**: Water, electrolytes, proteins, fetal cells, meconium (varies by gestation)`,
        mnemonics: [
          {
            text: "Positive feedback: Oxytocin → contractions → stretch → more oxytocin",
            explanation: "Self-reinforcing cycle amplifies contractions during labor"
          }
        ],
        keyPoints: [
          "Implantation: blastocyst-endometrium interaction, day 6-12",
          "Trophoblast invasion: erodes spiral arteries",
          "hCG: prevents CL regression",
          "Placental barrier: limited to viruses, parasites",
          "Fetal cortisol maturation: triggers estrogen ↑ → labor readiness"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 82", edition: "14th" }]
      },
      {
        layer: 3,
        slug: "pregnancy-parturition-clinical",
        title: "Pregnancy & Parturition - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical complications: hypertension, diabetes, placental abnormalities.",
        contentMd: `# Clinical Pregnancy Disorders

## Gestational Hypertension & Preeclampsia
- **Gestational hypertension**: BP ≥140/90 after 20 weeks, no proteinuria
- **Preeclampsia**: Hypertension + proteinuria (≥0.3 g/24 hr) after 20 weeks
- **Mechanism**: Placental insufficiency (poor trophoblast invasion) → ↑ circulating factors → endothelial dysfunction
- **Severe features**: SBP ≥160, DBP ≥110, proteinuria >5 g/24 hr, thrombocytopenia, HELLP syndrome
- **Eclampsia**: Preeclampsia + seizures (medical emergency)
- **Management**: Delivery (definitive); methyldopa, labetalol, nifedipine antepartum; magnesium sulphate (seizure prophylaxis)

## Gestational Diabetes Mellitus (GDM)
- **Prevalence**: ~7-10% of pregnancies
- **Pathophysiology**: Insulin resistance from hPL/cortisol; inadequate β-cell response
- **Screening**: 75 g OGTT at 24-28 weeks
- **Complications**: Fetal hyperinsulinemia → macrosomia, hypoglycemia, RDS after birth
- **Management**: Diet, exercise, insulin if needed

## Placental Abnormalities
- **Placenta previa**: Placenta covers cervical opening (bleeding risk)
- **Placental abruption**: Premature separation (maternal bleeding, fetal compromise)
- **Placental insufficiency**: Inadequate gas/nutrient exchange (intrauterine growth restriction)

## Indian Context
- **Maternal mortality**: ~100-150 per 100,000 live births (preeclampsia, hemorrhage, infection)
- **Anemia in pregnancy**: Common (iron deficiency) → supplementation essential
- **Institutional delivery**: Increasing; reduces complications
- **Folic acid supplementation**: Critical to prevent neural tube defects (ICMR RDA 600 mcg)`,
        mnemonics: [
          {
            text: "Preeclampsia: Hypertension + Proteinuria (after 20 wks)",
            explanation: "HELLP = Hemolysis, Elevated Liver enzymes, Low Platelets (severe)"
          }
        ],
        keyPoints: [
          "Preeclampsia: placental insufficiency → endothelial dysfunction",
          "GDM: insulin resistance from hPL + cortisol",
          "Folic acid: prevents neural tube defects (critical in 1st trimester)",
          "Placenta previa: bleeding risk; abruption: fetal emergency"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 82", edition: "14th" }]
      },
      {
        layer: 4,
        slug: "pregnancy-parturition-exam",
        title: "Pregnancy & Parturition - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on pregnancy and parturition.",
        contentMd: `# Exam High Yield

## Key Hormones
- **hCG**: Maintains CL (weeks 0-10)
- **Progesterone**: Prevents contractions, endometrial maintenance
- **Estrogen**: Uterine growth, fetal adrenal development
- **hPL**: Insulin antagonism, maternal glucose for fetus

## Physiological Changes
- **CO**: ↑ 40%
- **Minute ventilation**: ↑ 40%
- **GFR**: ↑ 50% (glycosuria, proteinuria may occur)
- **Hemoglobin**: Anemia if <11 g/dL (plasma vol ↑ 50%, RBC ↑ 25%)

## Parturition Stages
1. Latent: 0-3 cm dilation
2. Active: 3-7 cm dilation
3. Transition: 7-10 cm dilation
4. Expulsive: Pushing
5. Third stage: Placental delivery

## Clinical Conditions
- **Preeclampsia**: Hypertension + proteinuria after 20 weeks
- **GDM**: Insulin resistance from hPL/cortisol
- **Placenta previa**: Covers cervix (bleeding)
- **Placental abruption**: Premature separation (emergency)`,
        mnemonics: [],
        keyPoints: [
          "hCG rescue CL until week 10",
          "Pregnancy: CO ↑40%, HR ↑15-20, BP slight ↓",
          "Preeclampsia: poor trophoblast invasion",
          "GDM: hPL increases insulin resistance"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 82", edition: "14th" }]
      },
      {
        layer: 5,
        slug: "pregnancy-parturition-recall",
        title: "Pregnancy & Parturition - Active Recall",
        estimatedMinutes: 12,
        summary: "Flashcards on pregnancy and parturition.",
        contentMd: `# Active Recall

**Q1:** Which hormone maintains corpus luteum in early pregnancy?
> hCG (human chorionic gonadotropin) from syncytiotrophoblast

**Q2:** Cardiac output increases by what percentage in pregnancy?
> 40% (from baseline)

**Q3:** At what week does placental progesterone take over from corpus luteum?
> Week 8-10 (then CL regresses)

**Q4:** Minute ventilation increases by what percentage in pregnancy?
> 40% (mild respiratory alkalosis common)

**Q5:** GFR increases by how much in pregnancy?
> 50% (can lead to glycosuria, proteinuria)

**Q6:** What is the trigger for labor (fetal perspective)?
> Fetal cortisol → placental estrogen ↑ → oxytocin receptors ↑

**Q7:** Stages of labor: what is dilation range for active phase?
> 3-7 cm dilation

**Q8:** Preeclampsia is defined as??
> Hypertension + proteinuria after 20 weeks gestation

**Q9:** GDM is mainly caused by??
> Insulin resistance from hPL and cortisol production

**Q10:** Most common cause of third trimester bleeding?
> Placenta previa or placental abruption`
      }
    ]
  },

  // Topics 4-6: Lactation, Contraception, Yoga (abbreviated summaries for completion)
  // Due to token limits, these include foundational layers with full detail in subsequent layers

  // Topic 4: Lactation Physiology (Summary)
  {
    topicCode: "PY-MOD-10-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "lactation-foundation",
        title: "Lactation Physiology - Foundation",
        estimatedMinutes: 25,
        summary: "Lactation involves milk production (galactopoiesis) and milk ejection (oxytocin reflex).",
        contentMd: `# Lactation Physiology

## Lactogenesis Stages
- **Stage 1** (weeks 16 of pregnancy - 2 days postpartum): Colostrum production (high proteins, antibodies)
- **Stage 2** (day 2-5 postpartum): Transitional milk
- **Stage 3** (>2 weeks postpartum): Mature milk

## Prolactin & Lactation
- **Stimulus**: Infant suckling → sensory input → hypothalamus → ↓ dopamine
- **Result**: ↑ Prolactin from anterior pituitary
- **Effect**: Milk synthesis in lacteal cells
- **Milk volume**: Establishes with frequent emptying (supply & demand)

## Oxytocin Reflex (Milk Letdown)
- **Stimulus**: Suckling, infant cry, breast touch
- **Pathway**: Sensory → hypothalamus → posterior pituitary oxytocin release
- **Effect**: Myoepithelial cell contraction → milk ejection
- **Duration**: 1-2 minutes (reflex ejection)

## Milk Composition
| Component | Colostrum | Mature Milk |
|-----------|-----------|-------------|
| **Proteins** | 2.0 g/dL | 1.3 g/dL |
| **Fat** | 2.9 g/dL | 4.2 g/dL |
| **Lactose** | 5.3 g/dL | 7.0 g/dL |
| **IgA** | High | Moderate |
| **Caloric content** | 67 kcal/dL | 70 kcal/dL |

## Duration & Maintenance
- **Peak production**: 2-6 months postpartum
- **Maintenance**: Sustained by frequent feeding (8-12 times/day)
- **Weaning**: Gradual reduction in feeding → prolactin ↓ → lactation ceases`,
        mnemonics: [
          {
            text: "Prolactin: milk production (suckling inhibits dopamine)",
            explanation: "Dopamine inhibits prolactin; suckling reduces dopamine → prolactin rises"
          },
          {
            text: "Oxytocin: milk letdown (quick reflex from suckling)",
            explanation: "Oxytocin reflex mediated by sensory input; immediate response"
          }
        ],
        keyPoints: [
          "Lactogenesis stage 1: colostrum (weeks 16-2 days)",
          "Prolactin: stimulated by suckling, mediates milk production",
          "Oxytocin: mediates milk letdown (1-2 min reflex)",
          "Milk supply: demand-driven (frequent emptying)",
          "Colostrum: high protein/antibodies; mature milk: higher fat/lactose"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 82", edition: "14th" }]
      },
      {
        layer: 2,
        slug: "lactation-mechanism",
        title: "Lactation Physiology - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms of milk synthesis, hormonal control, and nutritional value.",
        contentMd: `# Lactation Mechanisms

## Milk Synthesis Biochemistry
- **Lactose synthesis**: Glucose → Lactose (in Golgi apparatus)
- **Fat synthesis**: Acetyl-CoA → Fatty acids (in mammary epithelial cells)
- **Protein synthesis**: Casein, lactalbumin, lactoglobulin from amino acids
- **Mineral composition**: Ca²⁺, Mg²⁺, PO₄³⁻, Na⁺, K⁺ transport into milk

## Hormonal Control
| Hormone | Action |
|---------|--------|
| **Prolactin** | Milk synthesis (sustains lactation) |
| **Oxytocin** | Milk letdown (myoepithelial contraction) |
| **Insulin** | Facilitates lactose synthesis |
| **Thyroid hormone** | Supports lactation (↓ if insufficiency) |
| **Cortisol** | Facilitates milk ejection |

## Lactational Infertility (Lactational Amenorrhea Method)
- **Mechanism**: High prolactin → inhibits GnRH → suppresses ovulation
- **Effectiveness**: ~98% if exclusive breastfeeding, <6 months postpartum
- **Duration**: Until weaning or supplementary feeding starts

## Milk Antibodies & Immune Benefits
- **IgA**: Abundant in colostrum; protects infant GI tract
- **Macrophages**: White blood cells in milk
- **Lysozyme**: Antibacterial enzyme
- **Bifidus factor**: Promotes beneficial bacteria growth in infant gut

## Maternal Nutritional Needs
- **Additional calories**: 500 kcal/day for lactation
- **Fluid**: 2-3 L/day (increased intake needed)
- **Protein**: 65-75 g/day (vs. 50-60 g non-lactating)
- **Calcium**: 1,000 mg/day (maternal bone loss if inadequate)`,
        mnemonics: [
          {
            text: "LAM (Lactational Amenorrhea Method): 98% effective with exclusive breastfeeding <6 months",
            explanation: "Prolactin suppresses ovulation (natural contraception)"
          }
        ],
        keyPoints: [
          "Lactose synthesis: glucose in Golgi apparatus",
          "Prolactin: sustains milk synthesis",
          "Oxytocin: milk letdown reflex",
          "IgA: protection in colostrum",
          "LAM: prolactin suppresses ovulation",
          "Maternal needs: +500 kcal, increased protein/calcium"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 82", edition: "14th" }]
      },
      {
        layer: 3,
        slug: "lactation-clinical",
        title: "Lactation Physiology - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical issues: lactation problems, contraindications, benefits.",
        contentMd: `# Clinical Lactation Issues

## Lactation Disorders
- **Hypogalactia** (insufficient milk): Poor latch, infrequent feeding, maternal illness
- **Engorgement**: Painful breast swelling (prevent with frequent feeding)
- **Mastitis**: Breast infection (Staph aureus common) → fever, pain, inflammation
- **Breast abscess**: Collection of pus (may need drainage)

## Contraindications to Breastfeeding
- **Maternal**: Untreated TB, HIV, herpes simplex (breast lesions), certain medications (e.g., chemotherapy)
- **Infant**: Galactosemia (rare), PKU (special management)
- **Relative**: Maternal infection (most compatible with breastfeeding)

## Benefits of Breastfeeding
- **Infant**: IgA protection, reduced infections, reduced SIDS/obesity/DM risk
- **Maternal**: Reduced breast/ovarian cancer risk, faster postpartum recovery, natural contraception (LAM)
- **Economic**: No formula cost (major benefit in low-resource settings)

## WHO/UNICEF Recommendations
- **Exclusive breastfeeding**: First 6 months
- **Continued breastfeeding**: Until 2 years with complementary foods
- **Indian ICMR**: Similar recommendations; emphasis on colostrum in 1st hour

## Common Myths & Facts
- **Myth**: "Breastfeeding ruins breast shape" → **Fact**: Pregnancy changes breasts; breastfeeding doesn't
- **Myth**: "Working mothers can't breastfeed" → **Fact**: Expressing/pumping allows continued breastfeeding
- **Myth**: "Certain foods decrease milk" → **Fact**: Adequate nutrition most important; most foods compatible`,
        mnemonics: [
          {
            text: "Mastitis: fever + breast pain + inflammation (treat with antibiotics + continue feeding)",
            explanation: "Staph aureus most common; feeding helps empty breast, prevent abscess"
          }
        ],
        keyPoints: [
          "Engorgement: prevent with frequent feeding",
          "Mastitis: infection (continue breastfeeding, antibiotics)",
          "IgA in milk protects infant gut",
          "LAM: 98% effective contraception if exclusive <6 months",
          "Maternal benefit: ↓ cancer, faster uterine involution"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 82", edition: "14th" }]
      },
      {
        layer: 4,
        slug: "lactation-exam",
        title: "Lactation Physiology - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on lactation.",
        contentMd: `# Exam High Yield

## Hormones
- **Prolactin**: Milk synthesis
- **Oxytocin**: Milk letdown

## Lactogenesis Stages
- Stage 1: Colostrum (weeks 16-2 days postpartum)
- Stage 2: Transitional (day 2-5)
- Stage 3: Mature (>2 weeks)

## Milk Composition
- Colostrum: High protein, IgA
- Mature: Higher fat, lactose (70 kcal/dL)

## Clinical Points
- Engorgement: Prevent with frequent feeding
- Mastitis: Staph aureus; continue breastfeeding + antibiotics
- LAM: 98% effective (exclusive <6 months)

## Maternal Nutrition
- +500 kcal/day
- 65-75 g protein/day
- 1,000 mg calcium/day`,
        mnemonics: [],
        keyPoints: [
          "Prolactin: sustained by frequent suckling",
          "Oxytocin: quick reflex letdown (1-2 min)",
          "Colostrum: first 2 days",
          "Exclusive breastfeeding: first 6 months",
          "LAM: natural contraception"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 82", edition: "14th" }]
      },
      {
        layer: 5,
        slug: "lactation-recall",
        title: "Lactation Physiology - Active Recall",
        estimatedMinutes: 12,
        summary: "Flashcards on lactation.",
        contentMd: `# Active Recall

**Q1:** Which hormone stimulates milk synthesis?
> Prolactin (from anterior pituitary, stimulated by suckling)

**Q2:** Which hormone mediates milk letdown?
> Oxytocin (from posterior pituitary)

**Q3:** Colostrum is produced when?
> First 2 days postpartum

**Q4:** Mature milk caloric content?
> 70 kcal/dL

**Q5:** What is LAM?
> Lactational Amenorrhea Method (natural contraception via prolactin-induced anovulation)

**Q6:** Effectiveness of LAM?
> 98% if exclusive breastfeeding for <6 months

**Q7:** Most common causative organism of mastitis?
> Staphylococcus aureus

**Q8:** Management of mastitis?
> Continue breastfeeding, antibiotics, warm compresses

**Q9:** WHO recommendation for exclusive breastfeeding?
> First 6 months

**Q10:** Additional calories needed for lactation?
> 500 kcal/day`
      }
    ]
  },

  // ─── Topic: Contraception Physiology ─────────────────────────
  {
    topicCode: "PY-MOD-10-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "contraception-physiology-foundation",
        title: "Contraception Physiology - Foundation",
        estimatedMinutes: 20,
        summary: "Physiological basis of contraceptive methods including hormonal, barrier, intrauterine, and permanent methods.",
        contentMd: `# Contraception Physiology

## Classification of Contraceptive Methods
| Category | Examples | Mechanism |
|----------|----------|-----------|
| **Barrier** | Condom, diaphragm, cervical cap | Physical prevention of sperm-oocyte contact |
| **Hormonal** | COC, POP, DMPA, implants, patch | Suppress ovulation, thicken cervical mucus |
| **Intrauterine** | Cu-IUD, LNG-IUS (Mirena) | Foreign body reaction, local inflammation |
| **Natural** | Rhythm, BBT, lactational amenorrhea | Fertility awareness |
| **Permanent** | Vasectomy, tubectomy | Surgical interruption of gamete transport |
| **Emergency** | Levonorgestrel, ulipristal, Cu-IUD | Post-coital prevention |

## Hormonal Contraception Physiology
Combined Oral Contraceptives (COC) contain estrogen + progestogen:
- **Estrogen (ethinylestradiol)**: Suppresses FSH → prevents follicular development
- **Progestogen**: Suppresses LH surge → prevents ovulation; thickens cervical mucus; thins endometrium

## Pearl Index
Measures contraceptive effectiveness (pregnancies per 100 woman-years):
- Implant: 0.05, IUD: 0.2-0.8, COC: 0.3 (perfect use), Condom: 2-15

## Indian National Family Planning Program
India was the first country to adopt a national family planning program (1952). Current methods promoted include Cu-T 380A, injectable MPA (Antara), condoms, and sterilization.`,
        mnemonics: [
          { text: "SOME DEVICE Fails for Pearl Index order", explanation: "Sterilization < implants < IUD < injectables < Pills < condoms < withdrawal < none" },
          { text: "COC = FSH down + LH down", explanation: "Estrogen suppresses FSH (no follicle), Progestogen suppresses LH surge (no ovulation)" },
        ],
        keyPoints: [
          "COC primarily prevents ovulation via suppressing GnRH/FSH/LH axis",
          "Progestogens thicken cervical mucus and thin endometrium as secondary mechanisms",
          "Cu-IUD works by local inflammatory reaction toxic to sperm and ovum",
          "Pearl Index: lower number = more effective contraception",
          "India's family planning program started in 1952, first in the world",
        ],
        textbookRefs: [
          { book: "Guyton and Hall Textbook of Medical Physiology", chapter: "Chapter 82: Female Fertility", edition: "14th" },
        ],
      },
      {
        layer: 2,
        slug: "contraception-physiology-mechanism",
        title: "Contraception Physiology - Mechanism",
        estimatedMinutes: 25,
        summary: "Detailed mechanisms of hormonal and non-hormonal contraception at the molecular and cellular level.",
        contentMd: `# Mechanisms of Contraception

## Hormonal Mechanisms in Detail

### GnRH Axis Suppression
- Exogenous estrogen + progestogen → negative feedback on hypothalamus
- Reduced GnRH pulse frequency → decreased FSH and LH secretion
- No follicular recruitment, no dominant follicle, no LH surge

### Progestogen-Only Effects
- Does NOT reliably suppress ovulation (only ~60% of cycles)
- Primary mechanism: cervical mucus thickening (impenetrable to sperm)
- Endometrial atrophy: unreceptive to implantation
- Reduced tubal motility

### Emergency Contraception
- **Levonorgestrel (1.5mg)**: Delays/prevents ovulation if taken pre-LH surge
- **Ulipristal acetate**: Selective progesterone receptor modulator, delays ovulation even after LH surge has begun
- **Cu-IUD**: Most effective emergency contraception (>99%), toxic to sperm and prevents implantation

## Non-Hormonal Mechanisms

### Copper IUD
- Cu²⁺ ions create sterile inflammatory reaction in endometrium
- Toxic to sperm (impairs motility and viability)
- Prevents fertilization (primary) and implantation (secondary)
- Effective for up to 10 years (Cu-T 380A)

### Barrier Methods
- Physical barrier prevents sperm entry into cervical canal
- Spermicides (nonoxynol-9) disrupt sperm cell membrane`,
        mnemonics: [
          { text: "POP Thickens Mucus", explanation: "Progestogen-Only Pill primarily Thickens cervical Mucus (not reliable ovulation suppression)" },
          { text: "Cu = Copper Unfriendly to sperm", explanation: "Copper ions create toxic environment for sperm in uterine cavity" },
        ],
        keyPoints: [
          "COC suppresses ovulation via negative feedback on GnRH-FSH-LH axis",
          "Progestogen-only methods primarily thicken cervical mucus, not suppress ovulation",
          "Cu-IUD works by local copper ion toxicity to sperm, effective 10 years",
          "Emergency LNG works ONLY if given before LH surge begins",
          "Ulipristal works even after LH surge onset — more effective than LNG",
        ],
        textbookRefs: [
          { book: "Guyton and Hall Textbook of Medical Physiology", chapter: "Chapter 82", edition: "14th" },
        ],
      },
      {
        layer: 3,
        slug: "contraception-physiology-clinical",
        title: "Contraception Physiology - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical applications, contraindications, side effects, and choice of contraceptive methods.",
        contentMd: `# Clinical Aspects of Contraception

## COC Contraindications (WHO MEC Category 4)
- History of DVT/PE or thrombophilia
- Migraine with aura
- Active breast cancer
- Smoker age >35 years
- Severe hypertension (>160/100)
- Current liver disease

## Side Effects of Hormonal Contraception
| Estrogen Effects | Progestogen Effects |
|-----------------|-------------------|
| Nausea, breast tenderness | Weight gain |
| Fluid retention | Acne, mood changes |
| Headache | Breakthrough bleeding |
| **VTE risk (3-4x)** | Depression |

## Choosing Contraception in Indian Practice
- **Newly married**: COC or condoms
- **Postpartum breastfeeding**: POP or Cu-IUD (avoid COC — reduces milk)
- **Completed family**: Tubectomy or vasectomy
- **Adolescent**: Barrier methods, counseling for dual protection (STI + pregnancy)
- **Emergency**: Cu-IUD (most effective) or LNG within 72 hours

## Injectable Contraception (DMPA/Antara Program)
- Depot medroxyprogesterone acetate 150mg IM every 3 months
- Launched under Antara program by Government of India
- Common side effect: irregular bleeding initially, then amenorrhea`,
        mnemonics: [
          { text: "ACHES for COC danger signs", explanation: "Abdominal pain, Chest pain, Headache severe, Eye problems, Severe leg pain — stop COC immediately" },
          { text: "No COC in SHALE", explanation: "Smoking >35, Hypertension, Aura migraine, Liver disease, Embolism history" },
        ],
        keyPoints: [
          "COC is contraindicated in smokers >35 years due to VTE risk",
          "Migraine with aura is an absolute contraindication for COC",
          "Breastfeeding women should use POP, not COC (estrogen reduces milk)",
          "DMPA (Antara) given IM every 3 months, causes amenorrhea long-term",
          "Cu-IUD is the most effective emergency contraception method",
        ],
        textbookRefs: [
          { book: "Guyton and Hall Textbook of Medical Physiology", chapter: "Chapter 82", edition: "14th" },
          { book: "DC Dutta's Textbook of Obstetrics", chapter: "Contraception", edition: "9th" },
        ],
      },
      {
        layer: 4,
        slug: "contraception-physiology-exam-prep",
        title: "Contraception Physiology - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts, comparisons, and exam-focused review of contraception physiology.",
        contentMd: `# Exam Prep: Contraception Physiology

## Most Frequently Tested Points

| Question Pattern | Answer |
|-----------------|--------|
| Most effective reversible contraception | Implant (etonogestrel) |
| Most effective emergency contraception | Cu-IUD (within 5 days) |
| Contraception safe in breastfeeding | POP, Cu-IUD, DMPA |
| COC absolute contraindication | Migraine WITH aura |
| First country with family planning program | India (1952) |
| Failure rate measure | Pearl Index |
| Hormone that thickens cervical mucus | Progesterone |
| Vasectomy effective after | 3 months / 20 ejaculations |

## Comparison: COC vs POP
| Feature | COC | POP |
|---------|-----|-----|
| Estrogen | Yes | No |
| Ovulation suppression | Reliable | Inconsistent |
| Primary mechanism | Ovulation block | Cervical mucus |
| VTE risk | Increased 3-4x | No increase |
| Breastfeeding | Contraindicated | Safe |
| Pill-free interval | 7 days | None (continuous) |

## NEXT Pattern High-Yield
- Cu-T 380A duration: 10 years
- Mirena (LNG-IUS) duration: 5 years
- DMPA: repeat every 12 weeks
- Most common reason for OCP discontinuation: breakthrough bleeding`,
        mnemonics: [
          { text: "Pearl Index = Pregnancies per 100 women-years", explanation: "Lower Pearl Index = better contraception. Implant (0.05) < IUD (0.2) < COC (0.3) < condom (2)" },
          { text: "DMPA = 3 months, Cu-T = 10 years, Mirena = 5 years", explanation: "Duration mnemonics for long-acting methods" },
        ],
        keyPoints: [
          "Implant is the most effective reversible contraception (Pearl Index 0.05)",
          "Cu-IUD is best emergency contraception AND lasts 10 years",
          "COC suppresses ovulation; POP primarily thickens cervical mucus",
          "VTE risk is increased with COC (estrogen component) not with POP",
          "India's family planning program (1952) was world's first national program",
        ],
        textbookRefs: [
          { book: "Guyton and Hall Textbook of Medical Physiology", chapter: "Chapter 82", edition: "14th" },
        ],
      },
      {
        layer: 5,
        slug: "contraception-physiology-active-recall",
        title: "Contraception Physiology - Active Recall",
        estimatedMinutes: 12,
        summary: "Flashcard-style Q&A for rapid review of contraception physiology.",
        contentMd: `# Active Recall: Contraception Physiology

**Q1:** What is the primary mechanism of COC?
> Suppression of ovulation via negative feedback on GnRH-FSH-LH axis

**Q2:** What is the primary mechanism of progestogen-only pill?
> Thickening of cervical mucus (ovulation suppression is unreliable)

**Q3:** How does Cu-IUD prevent pregnancy?
> Cu²⁺ ions create sterile inflammatory reaction toxic to sperm; prevents fertilization

**Q4:** Most effective emergency contraception?
> Cu-IUD (>99% effective, can be inserted up to 5 days after unprotected intercourse)

**Q5:** Why is COC contraindicated in migraine with aura?
> Estrogen increases stroke risk in patients with migraine with aura (thrombotic)

**Q6:** What is Pearl Index?
> Number of pregnancies per 100 woman-years of use. Lower = more effective.

**Q7:** Duration of Cu-T 380A?
> 10 years

**Q8:** Why avoid COC in breastfeeding?
> Estrogen reduces milk production. Use POP or Cu-IUD instead.

**Q9:** DMPA injection schedule?
> 150mg IM every 3 months (12 weeks)

**Q10:** First country to adopt national family planning program?
> India (1952)

**Q11:** ACHES danger signs for COC?
> Abdominal pain, Chest pain, Headaches (severe), Eye problems, Severe leg pain

**Q12:** What does Antara program provide?
> Injectable DMPA (medroxyprogesterone) contraception in government facilities`
      }
    ]
  },

  // ─── Topic: Yoga & Meditation Physiology ─────────────────────────
  {
    topicCode: "PY-MOD-10-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "yoga-meditation-physiology-foundation",
        title: "Yoga & Meditation Physiology - Foundation",
        estimatedMinutes: 20,
        summary: "Scientific basis of yoga and meditation including effects on the autonomic nervous system, neuroendocrine responses, and overall health.",
        contentMd: `# Yoga & Meditation Physiology

## Introduction
Yoga is an ancient Indian practice now recognized by modern medicine for its physiological benefits. The AYUSH Ministry promotes yoga as part of India's healthcare system. The International Day of Yoga (June 21) was adopted by the UN in 2014.

## Components of Yoga Practice
| Component | Description | Primary Physiological Effect |
|-----------|-------------|---------------------------|
| **Asana** | Physical postures | Musculoskeletal flexibility, balance, strength |
| **Pranayama** | Breathing exercises | Autonomic regulation, respiratory efficiency |
| **Dhyana** | Meditation | Cortical restructuring, stress reduction |
| **Pratyahara** | Sensory withdrawal | Parasympathetic activation |

## Autonomic Nervous System Effects
Yoga shifts autonomic balance from sympathetic to parasympathetic dominance:
- Increased vagal tone (measured by HRV — Heart Rate Variability)
- Reduced resting heart rate and blood pressure
- Decreased cortisol and catecholamine levels
- Enhanced baroreflex sensitivity

## Key Pranayama Techniques
- **Anulom-Vilom** (alternate nostril breathing): Balances sympathovagal tone
- **Kapalbhati**: Rapid diaphragmatic exhalations, increases core body temperature
- **Bhramari**: Humming exhalation, increases nitric oxide in paranasal sinuses
- **Ujjayi**: Partial glottis closure, increases airway resistance, strengthens respiratory muscles`,
        mnemonics: [
          { text: "YOGA = Your Own Growth Approach", explanation: "Yoga addresses physical (asana), respiratory (pranayama), mental (dhyana), and spiritual dimensions" },
          { text: "PNS UP in yoga", explanation: "ParasympatheticNervousSystem goes UP with regular yoga practice — vagal tone increases" },
        ],
        keyPoints: [
          "Yoga shifts autonomic balance toward parasympathetic dominance",
          "HRV (Heart Rate Variability) increases with regular yoga practice",
          "Pranayama improves respiratory efficiency and lung capacity",
          "Cortisol levels decrease with regular meditation practice",
          "India's AYUSH Ministry promotes yoga as part of national healthcare",
          "International Day of Yoga is June 21 (UN resolution 2014, proposed by India)",
        ],
        textbookRefs: [
          { book: "Guyton and Hall Textbook of Medical Physiology", chapter: "Chapter 61: Autonomic Nervous System", edition: "14th" },
        ],
      },
      {
        layer: 2,
        slug: "yoga-meditation-physiology-mechanism",
        title: "Yoga & Meditation Physiology - Mechanism",
        estimatedMinutes: 25,
        summary: "Neurophysiological and molecular mechanisms underlying yoga and meditation effects.",
        contentMd: `# Mechanisms of Yoga & Meditation

## Neuroendocrine Mechanisms

### HPA Axis Modulation
- Regular meditation reduces cortisol secretion (10-20% reduction documented)
- Decreased CRH from hypothalamus → reduced ACTH → lower cortisol
- Lower cortisol reduces insulin resistance, visceral fat, and immune suppression

### Autonomic Mechanisms of Pranayama
- Slow deep breathing (6 breaths/min) optimizes baroreflex sensitivity
- Stimulates pulmonary stretch receptors → vagal afferents → NTS → increased vagal efferent activity
- Result: reduced heart rate, reduced blood pressure, increased HRV

### GABA Hypothesis of Yoga
- Yoga practice increases brain GABA levels (demonstrated by MRS — magnetic resonance spectroscopy)
- GABA is the main inhibitory neurotransmitter → reduces anxiety
- Explains anxiolytic effect of yoga comparable to pharmacotherapy in some studies

## Cardiovascular Mechanisms
- Baroreflex sensitivity improvement → better BP regulation
- Endothelial function: increased NO bioavailability
- Reduced inflammatory markers (CRP, IL-6, TNF-alpha)
- Improved lipid profile: reduced LDL, increased HDL

## Respiratory Mechanisms of Pranayama
- Increased tidal volume with decreased respiratory rate
- Improved ventilatory efficiency (better V/Q matching)
- Strengthened respiratory muscles (diaphragm, intercostals)
- Increased lung compliance and vital capacity`,
        mnemonics: [
          { text: "Slow Breathing = 6 per minute for Baroreflex", explanation: "6 breaths/min is the optimal frequency for maximizing baroreflex sensitivity and HRV" },
          { text: "Yoga GAINS: GABA up, ANS balanced, Inflammation down, NO up, Stress hormones down", explanation: "Summary of key physiological mechanisms of yoga" },
        ],
        keyPoints: [
          "Yoga reduces cortisol via HPA axis modulation (CRH → ACTH → cortisol all decrease)",
          "Slow pranayama (6/min) maximizes baroreflex sensitivity via vagal stimulation",
          "Yoga increases brain GABA levels, explaining its anxiolytic effects",
          "Endothelial NO production increases with yoga, improving vascular health",
          "Inflammatory markers (CRP, IL-6, TNF-alpha) decrease with regular practice",
        ],
        textbookRefs: [
          { book: "Guyton and Hall Textbook of Medical Physiology", chapter: "Chapter 61: Autonomic Nervous System", edition: "14th" },
        ],
      },
      {
        layer: 3,
        slug: "yoga-meditation-physiology-clinical",
        title: "Yoga & Meditation Physiology - Clinical",
        estimatedMinutes: 20,
        summary: "Evidence-based clinical applications of yoga in disease management and preventive health.",
        contentMd: `# Clinical Applications of Yoga

## Evidence-Based Benefits by System
| System | Condition | Evidence Level |
|--------|-----------|---------------|
| **Cardiovascular** | Hypertension (BP reduction 5-10 mmHg) | Strong |
| **Metabolic** | Type 2 DM (HbA1c reduction, insulin sensitivity) | Moderate-Strong |
| **Respiratory** | Asthma (FEV1 improvement, reduced rescue inhaler use) | Moderate |
| **Musculoskeletal** | Chronic low back pain | Strong |
| **Psychiatric** | Depression, anxiety (comparable to SSRIs in mild-moderate) | Moderate |
| **Neurological** | Epilepsy (adjunct — reduced seizure frequency) | Emerging |

## Yoga in Indian Public Health
- AYUSH Ministry integrates yoga into PHC/CHC services
- Yoga therapy included in National AYUSH Mission
- AIIMS yoga departments conduct clinical research
- Yoga for Diabetes (Y4D) programs in community settings

## Contraindications & Precautions
- Acute disc prolapse: avoid forward bends
- Uncontrolled hypertension: avoid inversions (Sirsasana)
- Pregnancy: modified asanas, avoid prone positions
- Glaucoma: avoid inversions (increased IOP)
- Recent surgery: individualized gentle program

## Meditation for Mental Health
- Mindfulness-Based Stress Reduction (MBSR): 8-week structured program
- Vipassana meditation: traditional Indian practice, 10-day courses
- Yoga Nidra: guided deep relaxation, reduces anxiety and insomnia`,
        mnemonics: [
          { text: "Yoga lowers BP by 5-10", explanation: "Regular yoga practice reduces systolic BP by approximately 5-10 mmHg in hypertensive patients" },
          { text: "No Inversions in GHP", explanation: "Avoid inversions in Glaucoma, Hypertension (uncontrolled), Pregnancy" },
        ],
        keyPoints: [
          "Yoga reduces BP by 5-10 mmHg — useful adjunct in hypertension management",
          "Type 2 DM: yoga improves insulin sensitivity and reduces HbA1c",
          "Chronic low back pain: yoga has strong evidence as effective non-pharmacological therapy",
          "Inversions contraindicated in glaucoma, uncontrolled HTN, and pregnancy",
          "AYUSH Ministry integrates yoga into India's primary healthcare system",
        ],
        textbookRefs: [
          { book: "Guyton and Hall Textbook of Medical Physiology", chapter: "Chapter 61", edition: "14th" },
        ],
      },
      {
        layer: 4,
        slug: "yoga-meditation-physiology-exam-prep",
        title: "Yoga & Meditation Physiology - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam facts on yoga and meditation physiology.",
        contentMd: `# Exam Prep: Yoga & Meditation Physiology

## Frequently Tested Points

| Topic | Key Fact |
|-------|----------|
| Primary ANS effect of yoga | Parasympathetic dominance (vagal tone ↑) |
| Best measure of autonomic balance | Heart Rate Variability (HRV) |
| Optimal breathing rate for baroreflex | 6 breaths per minute |
| Pranayama that increases NO | Bhramari (humming) |
| Stress hormone reduced by meditation | Cortisol |
| Neurotransmitter increased by yoga | GABA |
| BP reduction with regular yoga | 5-10 mmHg systolic |
| International Day of Yoga | June 21 |
| Ministry overseeing yoga in India | AYUSH Ministry |
| Main contraindication for inversions | Glaucoma, uncontrolled HTN |

## Yoga Physiology Comparisons
| Parameter | Pre-Yoga | Post-Regular Yoga |
|-----------|----------|-------------------|
| Heart Rate | Higher | Lower (5-10 bpm) |
| Blood Pressure | Higher | Lower (5-10 mmHg) |
| HRV | Lower | Higher |
| Cortisol | Higher | Lower (10-20%) |
| GABA | Lower | Higher |
| CRP | Higher | Lower |`,
        mnemonics: [
          { text: "HRV = Health of Relaxation Via Vagus", explanation: "HRV measures vagal tone — higher HRV means better parasympathetic function" },
          { text: "June 21 = Yoga Day, 6 = breaths/min optimal", explanation: "Both use '6' — International Yoga Day and optimal pranayama rate" },
        ],
        keyPoints: [
          "HRV is the gold standard measure for yoga's autonomic effects",
          "6 breaths/min is the optimal pranayama frequency for baroreflex",
          "Bhramari pranayama increases nasal NO production",
          "GABA increase is the neurochemical basis of yoga's anxiolytic effect",
          "Yoga for hypertension: expect 5-10 mmHg systolic BP reduction",
        ],
        textbookRefs: [
          { book: "Guyton and Hall Textbook of Medical Physiology", chapter: "Chapter 61", edition: "14th" },
        ],
      },
      {
        layer: 5,
        slug: "yoga-meditation-physiology-active-recall",
        title: "Yoga & Meditation Physiology - Active Recall",
        estimatedMinutes: 12,
        summary: "Flashcard-style Q&A for rapid review of yoga and meditation physiology.",
        contentMd: `# Active Recall: Yoga & Meditation Physiology

**Q1:** What is the primary autonomic effect of regular yoga practice?
> Shift toward parasympathetic dominance (increased vagal tone)

**Q2:** What parameter best measures yoga's autonomic effects?
> Heart Rate Variability (HRV) — higher HRV indicates better vagal tone

**Q3:** What is the optimal breathing rate for maximizing baroreflex sensitivity?
> 6 breaths per minute (slow deep breathing)

**Q4:** Which neurotransmitter increases with yoga practice?
> GABA (gamma-aminobutyric acid) — explains anxiolytic effect

**Q5:** Which pranayama technique increases nitric oxide production?
> Bhramari (humming exhalation) — increases NO in paranasal sinuses

**Q6:** How much BP reduction does yoga achieve in hypertension?
> Approximately 5-10 mmHg systolic reduction

**Q7:** What is the International Day of Yoga and who proposed it?
> June 21, proposed by India and adopted by UN General Assembly in 2014

**Q8:** Which ministry oversees yoga integration in Indian healthcare?
> AYUSH Ministry (Ayurveda, Yoga, Unani, Siddha, Homeopathy)

**Q9:** Name 3 contraindications for yoga inversions.
> Glaucoma, uncontrolled hypertension, pregnancy

**Q10:** What happens to cortisol levels with regular meditation?
> Cortisol decreases by 10-20% due to HPA axis downregulation

**Q11:** What are the 4 components of yoga practice?
> Asana (postures), Pranayama (breathing), Dhyana (meditation), Pratyahara (sensory withdrawal)

**Q12:** How does slow pranayama reduce heart rate?
> Stimulates pulmonary stretch receptors → vagal afferents to NTS → increased vagal efferent outflow`
      }
    ]
  }
];
