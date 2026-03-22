// 5-layer lessons for all Pelvis & Perineum topics (Module AN-MOD-05)
import type { TopicLessons } from "./content-loader";

export const pelvisLessons: TopicLessons[] = [
  // ─── Topic 1: Bony Pelvis & Pelvic Floor ──────────────────
  {
    topicCode: "AN-MOD-05-TOP-01",
    layers: [
      { layer: 1, slug: "bony-pelvis-foundation", title: "Bony Pelvis & Pelvic Floor - Foundation", estimatedMinutes: 20,
        summary: "The bony pelvis is formed by two hip bones, sacrum, and coccyx. The pelvic floor is a muscular diaphragm supporting pelvic viscera, with levator ani as its chief component.",
        contentMd: `# Bony Pelvis & Pelvic Floor

## Bones of the Pelvis
The bony pelvis is formed by:
- **2 Hip (innominate) bones** - each formed by fusion of ilium, ischium, and pubis
- **Sacrum** - 5 fused vertebrae
- **Coccyx** - 3-5 fused vertebrae

## Joints of the Pelvis
| Joint | Type | Movement |
|-------|------|----------|
| Sacroiliac joint | Synovial (upper), Syndesmosis (lower) | Minimal; slight rotation |
| Pubic symphysis | Secondary cartilaginous | Minimal; widens in pregnancy |
| Sacrococcygeal | Secondary cartilaginous | Extension during defecation & delivery |

## Pelvic Brim (Linea Terminalis)
Divides the pelvis into:
- **Greater (false) pelvis**: above the brim, part of abdominal cavity
- **Lesser (true) pelvis**: below the brim, contains pelvic organs

The pelvic brim is formed by:
- Sacral promontory (posteriorly)
- Ala of sacrum
- Arcuate line of ilium
- Pectineal line of pubis
- Pubic crest and symphysis (anteriorly)

## Male vs Female Pelvis

| Feature | Male | Female |
|---------|------|--------|
| General shape | Heart-shaped inlet | Oval/round inlet |
| Subpubic angle | < 70 degrees | > 80 degrees |
| Pelvic cavity | Narrow, deep, funnel-shaped | Wide, shallow, cylindrical |
| Obturator foramen | Round | Oval |
| Greater sciatic notch | Narrow | Wide |
| Sacrum | Long, narrow, curved | Short, wide, flat |
| Ischial tuberosities | Inverted | Everted |
| Acetabulum | Large | Small |

## Pelvic Diameters (Female)

### Inlet (Brim)
- **Anteroposterior (conjugate)**: 11 cm (true conjugate = 10 cm)
- **Transverse**: 13 cm (widest)
- **Oblique**: 12 cm

### Outlet
- **AP diameter**: 13 cm (increases with coccyx extension)
- **Transverse (between ischial tuberosities)**: 11 cm

> **Clinical Pearl**: The diagonal conjugate (12.5 cm) is measured on vaginal examination. True conjugate = diagonal conjugate - 1.5 cm. Minimum AP diameter for normal delivery is 10 cm.

## Pelvic Floor (Pelvic Diaphragm)
The pelvic diaphragm is formed by:
1. **Levator ani** (main muscle)
2. **Coccygeus (ischiococcygeus)**

### Levator Ani - Parts
| Part | Origin | Insertion | Function |
|------|--------|-----------|----------|
| Pubococcygeus | Pubic bone | Coccyx, anococcygeal raphe | Supports pelvic viscera |
| Puborectalis | Pubic bone | Sling around anorectal junction | Maintains anorectal angle (key for continence) |
| Iliococcygeus | Tendinous arch of obturator internus | Coccyx, anococcygeal raphe | Supports pelvic floor |

### Nerve Supply of Levator Ani
- **S3, S4** (perineal branch of pudendal nerve + direct branches from S3, S4)

### Gaps in the Pelvic Diaphragm
- **Urogenital hiatus**: Passage for urethra (and vagina in females)
- **Rectal hiatus**: Passage for rectum/anal canal`,
        mnemonics: [
          { text: "PICOP for pelvic brim", explanation: "Promontory, Ilium (arcuate line), Crest of pubis, Obturator (pectineal line), Pubic symphysis - structures forming the pelvic brim from posterior to anterior" },
          { text: "PIP for levator ani parts", explanation: "Pubococcygeus, Iliococcygeus, Puborectalis - the three parts of levator ani muscle" }
        ],
        keyPoints: [
          "Pelvis formed by 2 hip bones, sacrum, and coccyx",
          "Pelvic brim divides greater (false) from lesser (true) pelvis",
          "Female pelvis: wider, shallower, round inlet, wider subpubic angle (>80 degrees)",
          "Levator ani (3 parts) is the chief muscle of pelvic floor, supplied by S3, S4",
          "Puborectalis maintains anorectal angle - key for fecal continence",
          "True conjugate (10 cm) is the minimum AP diameter for normal delivery"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 19-20", edition: "8th" }] },

      { layer: 2, slug: "bony-pelvis-mechanism", title: "Bony Pelvis & Pelvic Floor - Mechanism", estimatedMinutes: 30,
        summary: "Detailed anatomy of pelvic walls, blood supply, sacral plexus, and the mechanism of pelvic floor support including fascial condensations and ligaments.",
        contentMd: `# Bony Pelvis & Pelvic Floor - Detailed Anatomy

## Walls of the True Pelvis

### Anterior Wall
- Pubic symphysis, pubic bodies, pubic rami

### Posterior Wall
- Sacrum, coccyx, piriformis muscle, sacral plexus

### Lateral Wall
- Hip bone below the pelvic brim
- Obturator internus muscle (covers obturator foramen)
- Obturator nerve and vessels

## Muscles of the Pelvic Wall

| Muscle | Origin | Insertion | Nerve | Action |
|--------|--------|-----------|-------|--------|
| Obturator internus | Pelvic surface of obturator membrane | Greater trochanter | Nerve to obturator internus (L5, S1, S2) | Lateral rotation of thigh |
| Piriformis | Anterior surface of S2-S4 | Greater trochanter | S1, S2 | Lateral rotation, abduction |

> **Clinical Pearl**: Piriformis exits through the greater sciatic foramen, dividing it into suprapiriform and infrapiriform compartments. Structures below piriformis include the sciatic nerve, pudendal nerve, and inferior gluteal vessels.

## Sacral Plexus (L4-S4)

### Branches

| Nerve | Root Value | Exits Through |
|-------|------------|---------------|
| Superior gluteal | L4, L5, S1 | Above piriformis |
| Inferior gluteal | L5, S1, S2 | Below piriformis |
| Sciatic | L4, L5, S1, S2, S3 | Below piriformis |
| Pudendal | S2, S3, S4 | Below piriformis |
| Nerve to obturator internus | L5, S1, S2 | Below piriformis |
| Posterior cutaneous nerve of thigh | S1, S2, S3 | Below piriformis |
| Pelvic splanchnics (parasympathetic) | S2, S3, S4 | To pelvic viscera |

## Blood Supply of the Pelvis

### Internal Iliac Artery (Main arterial supply)
Divides into **anterior** and **posterior** divisions at the greater sciatic foramen.

**Anterior Division Branches:**
| Branch | Supplies |
|--------|----------|
| Obturator artery | Medial compartment of thigh |
| Umbilical artery (obliterated) | Medial umbilical ligament; superior vesical from patent part |
| Inferior vesical (male) / Vaginal (female) | Bladder base, prostate/vagina |
| Middle rectal | Rectum (middle third) |
| Uterine artery (female) | Uterus |
| Internal pudendal | Perineum, external genitalia |
| Inferior gluteal | Gluteal region |

**Posterior Division Branches:**
- Iliolumbar artery
- Lateral sacral artery
- Superior gluteal artery (largest branch of internal iliac)

## Pelvic Fascial Condensations (Ligaments)

| Ligament | From | To | Significance |
|----------|------|----|--------------|
| Cardinal (transverse cervical / Mackenrodt) | Cervix | Lateral pelvic wall | Chief support of uterus |
| Uterosacral | Cervix | Sacrum (S2-S4) | Maintains uterine anteversion |
| Pubocervical | Cervix | Pubis | Supports bladder base |
| Puboprostatic (male) | Prostate | Pubis | Supports prostate |

> **Clinical Pearl**: The cardinal ligament is the CHIEF support of the uterus. Damage during childbirth leads to uterine prolapse, common in multiparous Indian women. Uterosacral ligaments maintain the anteverted-anteflexed position.

## Mechanism of Pelvic Floor Support
Three-tier support system:
1. **Level I** - Cardinal + uterosacral ligaments (suspension)
2. **Level II** - Paravaginal attachments to arcus tendineus (lateral attachment)
3. **Level III** - Perineal body + urogenital diaphragm (fusion/direct support)`,
        mnemonics: [
          { text: "I LOUISAM for anterior division of internal iliac", explanation: "Inferior gluteal, Lateral (not present - skip), Obturator, Umbilical, Internal pudendal, Superior vesical (from patent umbilical), Artery to uterus (uterine), Middle rectal" },
          { text: "ILS for posterior division of internal iliac", explanation: "Iliolumbar, Lateral sacral, Superior gluteal - only 3 branches in the posterior division" }
        ],
        keyPoints: [
          "Internal iliac artery divides into anterior and posterior divisions",
          "Superior gluteal artery is the largest branch of internal iliac",
          "Pudendal nerve (S2,S3,S4) is the main nerve of the perineum",
          "Cardinal (Mackenrodt) ligament is the chief support of the uterus",
          "Three-level pelvic support: Level I (suspension), Level II (attachment), Level III (fusion)",
          "Piriformis divides greater sciatic foramen into supra- and infra-piriform compartments"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 19-20", edition: "8th" }] },

      { layer: 3, slug: "bony-pelvis-clinical", title: "Bony Pelvis & Pelvic Floor - Clinical", estimatedMinutes: 20,
        summary: "Clinical anatomy of pelvic fractures, pelvic floor disorders, obstetric pelvis assessment, and pudendal nerve block.",
        contentMd: `# Clinical Correlations

## Pelvic Fractures
- **Stable fractures**: Single break in pelvic ring (e.g., isolated pubic ramus fracture)
- **Unstable fractures**: Double break in pelvic ring (e.g., Malgaigne fracture - vertical shear injury)
- Associated injuries: bladder rupture, urethral injury, hemorrhage from internal iliac vessels
- **Open book fracture**: Anteroposterior compression disrupts pubic symphysis

> **Clinical Pearl**: Pelvic fractures can cause life-threatening hemorrhage from the rich pelvic venous plexus. The first step in management is pelvic binder application.

## Obstetric Pelvis Assessment
Four types of female pelvis (Caldwell-Moloy classification):

| Type | Shape of Inlet | Frequency | Prognosis |
|------|---------------|-----------|-----------|
| Gynecoid | Round | 50% (most common) | Best for vaginal delivery |
| Android | Heart-shaped | 20% | Poor (male-type pelvis) |
| Anthropoid | AP oval | 25% | Fair, face-to-pubis delivery |
| Platypelloid | Transverse oval | 5% | Poor, transverse arrest |

## Pelvic Floor Disorders

### Uterine Prolapse
- **Grade I**: Cervix descends within vagina
- **Grade II**: Cervix at introitus
- **Grade III (Procidentia)**: Complete uterus outside vagina
- Caused by: weakness of cardinal + uterosacral ligaments, levator ani
- Common in multiparous women, chronic cough, heavy lifting
- Treatment: Pelvic floor exercises (Kegel), ring pessary, surgery (vaginal hysterectomy with pelvic floor repair)

### Cystocele and Rectocele
- **Cystocele**: Prolapse of bladder into anterior vaginal wall (pubocervical fascia weakness)
- **Rectocele**: Prolapse of rectum into posterior vaginal wall (rectovaginal septum weakness)

## Pudendal Nerve Block
- **Landmark**: Ischial spine (palpated transvaginally)
- Blocks perineal sensation for episiotomy and assisted delivery
- Nerve enters perineum through lesser sciatic foramen, below sacrospinous ligament
- Structures at risk: pudendal artery, inferior rectal nerve

## Sacroiliac Joint Dysfunction
- Common cause of low back pain in pregnancy (hormonal ligament laxity due to relaxin)
- Pain referred to buttock and posterior thigh
- Tests: FABER test, Gaenslen test`,
        mnemonics: [
          { text: "GAPP for pelvis types", explanation: "Gynecoid (round, 50%, best), Android (heart, 20%, poor), Platypelloid (flat, 5%, poor), Anthropoid (AP oval, 25%, fair)" },
          { text: "S2 S3 S4 keeps the pelvic floor off the floor", explanation: "Pudendal nerve root value S2, S3, S4 - supplies the pelvic floor and perineum; also remember pelvic splanchnic nerves are S2, S3, S4" }
        ],
        keyPoints: [
          "Gynecoid pelvis is most common (50%) and best for vaginal delivery",
          "Pudendal nerve block given at the ischial spine",
          "Uterine prolapse: Grade III (procidentia) = complete uterus outside vagina",
          "Pelvic fractures can cause life-threatening hemorrhage from internal iliac vessels",
          "Cardinal ligament weakness leads to uterine prolapse"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 19-20", edition: "8th" }] },

      { layer: 4, slug: "bony-pelvis-exam", title: "Bony Pelvis & Pelvic Floor - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG points on bony pelvis, pelvic floor, and obstetric pelvis.",
        contentMd: `# Exam High Yield

## One-Liner Table

| Question | Answer |
|----------|--------|
| Chief muscle of pelvic floor | **Levator ani** |
| Nerve supply of levator ani | **S3, S4 (perineal branch of pudendal + direct branches)** |
| Part of levator ani maintaining fecal continence | **Puborectalis** (maintains anorectal angle) |
| Chief support of uterus | **Cardinal (transverse cervical / Mackenrodt) ligament** |
| Ligament maintaining anteversion of uterus | **Uterosacral ligament** |
| Most common type of female pelvis | **Gynecoid (50%)** |
| Best pelvis for vaginal delivery | **Gynecoid** |
| Subpubic angle in female | **> 80 degrees** |
| True conjugate diameter | **10 cm** |
| Widest diameter of pelvic inlet | **Transverse (13 cm)** |
| Widest diameter of pelvic outlet | **AP (13 cm)** |
| Landmark for pudendal nerve block | **Ischial spine** |
| Root value of pudendal nerve | **S2, S3, S4** |
| Largest branch of internal iliac artery | **Superior gluteal artery** |
| Sacral parasympathetics (pelvic splanchnics) | **S2, S3, S4** |
| Nerve passing above piriformis | **Superior gluteal nerve** |
| Diagonal conjugate measured by | **Vaginal examination (= 12.5 cm)** |
| True conjugate from diagonal conjugate | **Diagonal conjugate minus 1.5 cm** |

## Comparison: Male vs Female Pelvis (Key Exam Points)

| Feature | Male | Female |
|---------|------|--------|
| Inlet shape | Heart | Round/Oval |
| Subpubic angle | < 70 degrees | > 80 degrees |
| Greater sciatic notch | Narrow | Wide |
| Cavity | Deep, narrow | Shallow, wide |
| Sacrum | Long, narrow, more curved | Short, wide, less curved |`,
        mnemonics: [
          { text: "At The Outlet, AP is the widest; At The Inlet, Transverse is the widest", explanation: "Inlet: transverse (13 cm) > AP (11 cm). Outlet: AP (13 cm) > transverse (11 cm). The diameters swap between inlet and outlet." },
          { text: "CUP supports the uterus", explanation: "Cardinal ligament (chief support), Uterosacral ligament (maintains anteversion), Pubocervical ligament (supports bladder base)" }
        ],
        keyPoints: [
          "Levator ani = chief muscle of pelvic floor, S3 S4",
          "Cardinal ligament = chief support of uterus",
          "Gynecoid pelvis = most common + best for delivery",
          "Pudendal nerve block at ischial spine",
          "Superior gluteal artery = largest branch of internal iliac"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 19-20", edition: "8th" }] },

      { layer: 5, slug: "bony-pelvis-recall", title: "Bony Pelvis & Pelvic Floor - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for bony pelvis and pelvic floor.",
        contentMd: `# Active Recall

**Q1:** Name the 3 parts of levator ani.
> Pubococcygeus, Iliococcygeus, Puborectalis

**Q2:** Which part of levator ani maintains the anorectal angle?
> Puborectalis

**Q3:** What is the chief support of the uterus?
> Cardinal (transverse cervical / Mackenrodt) ligament

**Q4:** What is the most common type of female pelvis?
> Gynecoid (50%) - round inlet, best for vaginal delivery

**Q5:** What is the widest diameter of the pelvic inlet?
> Transverse diameter (13 cm)

**Q6:** What is the root value of the pudendal nerve?
> S2, S3, S4

**Q7:** Where is the pudendal nerve block given?
> At the ischial spine (palpated transvaginally)

**Q8:** What is the largest branch of the internal iliac artery?
> Superior gluteal artery`,
        mnemonics: [], keyPoints: ["8 recall questions covering pelvic bones, floor, diameters, and clinical applications"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 19-20", edition: "8th" }] },
    ],
  },

  // ─── Topic 2: Male Reproductive Organs ─────────────────────
  {
    topicCode: "AN-MOD-05-TOP-02",
    layers: [
      { layer: 1, slug: "male-repro-foundation", title: "Male Reproductive Organs - Foundation", estimatedMinutes: 20,
        summary: "The male reproductive system includes testis, epididymis, vas deferens, seminal vesicles, prostate, and penis. The testis is the primary male gonad producing spermatozoa and testosterone.",
        contentMd: `# Male Reproductive Organs

## Testis
- **Location**: Within the scrotum; left testis hangs lower than right
- **Size**: 4-5 cm long, 2.5 cm wide
- **Coverings (outside in)**: Skin, Dartos, External spermatic fascia, Cremasteric fascia + cremaster, Internal spermatic fascia, Tunica vaginalis (parietal + visceral), Tunica albuginea
- **Structure**: Divided into 200-300 lobules, each containing 1-3 seminiferous tubules
- **Cells**: Sertoli cells (support + blood-testis barrier), Leydig cells (interstitial, produce testosterone)

### Blood Supply
- **Testicular artery**: Branch of abdominal aorta (L2 level)
- **Venous drainage**: Pampiniform plexus → testicular vein
  - Right testicular vein → IVC
  - Left testicular vein → Left renal vein

### Lymphatic Drainage
- **Para-aortic (lumbar) lymph nodes** (NOT inguinal nodes)

> **Clinical Pearl**: Since the testis develops retroperitoneally and descends, its lymph drains to para-aortic nodes, not inguinal nodes. The scrotum (unlike the testis) drains to superficial inguinal nodes.

## Epididymis
- **Location**: Posterior border of testis
- **Parts**: Head (receives efferent ductules), Body, Tail (continues as vas deferens)
- **Function**: Storage and maturation of spermatozoa (12-21 days)

## Vas Deferens (Ductus Deferens)
- **Course**: Tail of epididymis → inguinal canal → crosses external iliac vessels → posterior to bladder
- **Length**: ~45 cm
- **Characteristic**: Thick muscular wall, narrow lumen ("cord-like" on palpation)
- **Ampulla**: Dilated terminal part behind bladder base
- Joins duct of seminal vesicle to form **ejaculatory duct**

## Seminal Vesicles
- **Location**: Posterior to bladder, lateral to ampulla of vas
- Produce ~70% of seminal fluid (fructose-rich, alkaline)
- NOT a storage site for sperm (despite the name)

## Prostate Gland
- **Shape**: Inverted cone, size of a walnut
- **Location**: Below bladder neck, surrounds prostatic urethra
- **Lobes**: 5 lobes (anterior, posterior, median, 2 lateral)
- **Zones (McNeal)**: Peripheral (70%), Central (25%), Transitional (5%), Periurethral

| Zone | Percentage | Clinical Significance |
|------|-----------|----------------------|
| Peripheral | 70% | Most common site of carcinoma |
| Central | 25% | Resistant to disease |
| Transitional | 5% | Site of BPH (benign prostatic hyperplasia) |

### Relations
- **Above**: Bladder neck
- **Below**: Urogenital diaphragm
- **Anterior**: Pubic symphysis (puboprostatic ligaments)
- **Posterior**: Rectum (separated by Denonvilliers fascia) - allows DRE

## Penis
- **Parts**: Root (bulb + 2 crura), Body (shaft), Glans
- **Erectile tissue**: 2 corpora cavernosa (dorsal) + 1 corpus spongiosum (ventral, surrounds urethra)
- **Blood supply**: Internal pudendal artery → dorsal artery, deep artery (cavernous), bulbourethral artery`,
        mnemonics: [
          { text: "Some Days Eddie Catches Internal Trouble - for testicular coverings", explanation: "Skin, Dartos, External spermatic fascia, Cremasteric fascia, Internal spermatic fascia, Tunica vaginalis - coverings from outside to inside" },
          { text: "Right to IVC, Left to Left Renal Vein - testicular vein drainage", explanation: "Right testicular vein drains directly to IVC; Left testicular vein drains to left renal vein (important for varicocele)" }
        ],
        keyPoints: [
          "Testis lymph drains to para-aortic nodes (NOT inguinal - retroperitoneal origin)",
          "Left testicular vein drains to left renal vein (right to IVC)",
          "Prostate peripheral zone: 70%, most common site of carcinoma",
          "Prostate transitional zone: site of BPH",
          "Seminal vesicles produce 70% of seminal fluid (fructose-rich)",
          "Ejaculatory duct = vas deferens + duct of seminal vesicle"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 21-23", edition: "8th" }] },

      { layer: 2, slug: "male-repro-mechanism", title: "Male Reproductive Organs - Mechanism", estimatedMinutes: 30,
        summary: "Detailed anatomy of spermatic cord, inguinal canal, descent of testis, prostatic anatomy, and the mechanism of erection.",
        contentMd: `# Male Reproductive Organs - Detailed Anatomy

## Spermatic Cord
Extends from deep inguinal ring to posterior border of testis.

### Contents
| Content | Origin |
|---------|--------|
| Vas deferens | Mesonephric (Wolffian) duct |
| Testicular artery | Abdominal aorta |
| Artery to vas (deferential artery) | Superior/Inferior vesical artery |
| Cremasteric artery | Inferior epigastric artery |
| Pampiniform venous plexus | Drains to testicular vein |
| Genital branch of genitofemoral nerve | L1, L2 (cremasteric reflex) |
| Sympathetic nerves | From T10 (renal/aortic plexus) |
| Lymphatics | To para-aortic nodes |
| Processus vaginalis (remnant) | Obliterated in normal |

> **Clinical Pearl**: The pampiniform plexus acts as a counter-current heat exchanger, cooling arterial blood to keep testicular temperature 2-3 degrees C below body temperature, essential for spermatogenesis.

## Inguinal Canal
- **Length**: ~4 cm in adults
- **Direction**: Oblique, runs inferomedially

### Boundaries
| Wall | Structure |
|------|-----------|
| Anterior | External oblique aponeurosis (full length); Internal oblique (lateral 1/3) |
| Posterior | Transversalis fascia (full length); Conjoint tendon (medial 1/3) |
| Roof | Arching fibers of internal oblique + transversus abdominis |
| Floor | Inguinal ligament + lacunar ligament (medially) |

### Rings
- **Deep ring**: Opening in transversalis fascia, lateral to inferior epigastric artery
- **Superficial ring**: Opening in external oblique aponeurosis, above pubic tubercle

## Descent of Testis
- Testis develops retroperitoneally at T10 level
- Begins descent at 7th month of intrauterine life
- Guided by the **gubernaculum testis**
- Passes through the inguinal canal
- Reaches scrotum by 9th month or at birth

### Undescended Testis (Cryptorchidism)
- Incidence: ~3% at birth in full-term, higher in preterm
- Right side more common
- Complications: infertility, increased risk of malignancy (seminoma), torsion
- Treatment: Orchiopexy (ideally by 6-12 months of age)

## Prostate - Detailed Anatomy

### Capsule
- True capsule (fibrous) and false capsule (part of pelvic fascia)
- **Denonvilliers fascia** (rectovesical septum): between prostate/seminal vesicles and rectum

### Blood Supply
- **Arterial**: Inferior vesical artery (main), middle rectal artery
- **Venous**: Prostatic venous plexus → internal iliac vein
  - Connects with internal vertebral venous plexus (Batson plexus) - route for metastasis to vertebrae

### Nerve Supply
- Prostatic plexus from inferior hypogastric plexus
- Contains both sympathetic and parasympathetic fibers
- **Cavernous nerves** (nervi erigentes) run along posterolateral aspect - at risk during radical prostatectomy

## Mechanism of Erection
- **Parasympathetic** (S2, S3, S4 - pelvic splanchnic nerves / nervi erigentes)
- Arteriolar dilatation → filling of cavernous spaces → compression of venous outflow
- Ischiocavernosus and bulbospongiosus muscles assist in maintaining erection

## Mechanism of Ejaculation
- **Sympathetic** (L1, L2 - hypogastric nerve)
- Emission: Peristalsis of vas deferens, contraction of seminal vesicles and prostate
- Expulsion: Rhythmic contraction of bulbospongiosus muscle (pudendal nerve S2,3,4)`,
        mnemonics: [
          { text: "POINT S for erection and ejaculation", explanation: "Point = Parasympathetic (erection - S2,S3,S4 nervi erigentes); Shoot = Sympathetic (ejaculation - L1,L2 hypogastric nerve). Point and Shoot mnemonic." },
          { text: "3 arteries, 3 nerves, 3 fasciae for spermatic cord", explanation: "3 arteries (testicular, deferential, cremasteric), 3 nerves (genital branch of genitofemoral, sympathetic, ilioinguinal on cord not in it), 3 fasciae (external spermatic, cremasteric, internal spermatic)" }
        ],
        keyPoints: [
          "Spermatic cord: 3 arteries, 3 nerves, pampiniform plexus, vas deferens",
          "Deep inguinal ring is lateral to inferior epigastric artery",
          "Prostatic venous plexus connects to Batson plexus - vertebral metastasis route",
          "Erection = Parasympathetic (S2,3,4 Point); Ejaculation = Sympathetic (L1,2 Shoot)",
          "Gubernaculum guides testicular descent; cryptorchidism increases seminoma risk",
          "Pampiniform plexus acts as counter-current heat exchanger for spermatogenesis"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 21-23", edition: "8th" }] },

      { layer: 3, slug: "male-repro-clinical", title: "Male Reproductive Organs - Clinical", estimatedMinutes: 20,
        summary: "Clinical anatomy of varicocele, hydrocele, inguinal hernias, BPH, prostate carcinoma, and testicular torsion.",
        contentMd: `# Clinical Correlations

## Varicocele
- Abnormal dilatation of pampiniform venous plexus
- **Left side more common (90%)** because:
  - Left testicular vein drains into left renal vein at right angle
  - Left testicular vein is longer
  - Left renal vein may be compressed between aorta and SMA (nutcracker effect)
- Feels like a "bag of worms" on palpation
- Can cause infertility (raised scrotal temperature)
- Sudden onset right-sided varicocele suggests IVC obstruction or renal tumor

## Hydrocele
- Collection of fluid within tunica vaginalis
- **Types**: Vaginal (most common in adults), Congenital (patent processus vaginalis), Infantile, Encysted of cord
- Transillumination test: POSITIVE (unlike solid tumors)
- Treatment: Lord's plication or Jaboulay's eversion

## Testicular Torsion
- Twisting of spermatic cord → compromised blood supply
- **Bell-clapper deformity**: horizontal lie of testis (predisposing factor)
- Surgical emergency - must be corrected within 6 hours
- Absent cremasteric reflex is an important sign
- Prehn sign NEGATIVE (elevation does not relieve pain, unlike epididymitis)

## Inguinal Hernia

| Feature | Indirect | Direct |
|---------|----------|--------|
| Route | Through deep ring → canal → superficial ring | Through posterior wall (Hesselbach triangle) |
| Relation to inferior epigastric artery | Lateral | Medial |
| Coverings | All 3 spermatic cord coverings | Only external spermatic fascia |
| Age | Young (congenital patent processus) | Elderly (weak abdominal wall) |
| Reducibility | May descend into scrotum | Rarely enters scrotum |
| Deep ring occlusion test | Controlled | NOT controlled |

### Hesselbach Triangle (Direct Hernia Site)
- **Medial**: Lateral border of rectus abdominis
- **Lateral**: Inferior epigastric artery
- **Inferior**: Inguinal ligament

## Benign Prostatic Hyperplasia (BPH)
- Arises from **transitional zone** (periurethral glands)
- Symptoms: frequency, urgency, hesitancy, poor stream, nocturia (LUTS)
- Causes bladder outlet obstruction
- Treated with alpha-blockers (tamsulosin), 5-alpha reductase inhibitors (finasteride), TURP

## Prostate Carcinoma
- Arises from **peripheral zone** (70% of gland)
- Detected on DRE as hard, irregular nodule in posterior lobe
- Tumor marker: **PSA (Prostate Specific Antigen)**
- Spreads to vertebrae via **Batson plexus** (valveless internal vertebral venous plexus)
- Osteoblastic (sclerotic) bone metastases (unlike most cancers which are osteolytic)

> **Clinical Pearl**: During radical prostatectomy, the cavernous nerves (nervi erigentes) running along the posterolateral aspect of the prostate may be damaged, causing erectile dysfunction. Nerve-sparing surgery preserves these.

## Vasectomy
- Vas deferens cut and ligated in the scrotum
- Performed through a small scrotal incision
- The vas is palpable as a cord-like structure in the spermatic cord`,
        mnemonics: [
          { text: "MIL for Hesselbach triangle", explanation: "Medial border = rectus abdominis (lateral edge), Inferior epigastric artery (Lateral), Inguinal Ligament (Inferior) - boundaries of the triangle for direct hernia" },
          { text: "BPH = Transitional zone, CA = Peripheral zone", explanation: "BPH arises from the Transitional zone (5% of prostate, periurethral), Carcinoma from Peripheral zone (70% of prostate). Remember T for Transitional and benign, P for Peripheral and cancer." }
        ],
        keyPoints: [
          "Varicocele: left side 90%, bag of worms, due to left testicular vein anatomy",
          "Indirect inguinal hernia is lateral to inferior epigastric artery",
          "Hesselbach triangle boundaries: rectus, inferior epigastric artery, inguinal ligament",
          "Prostate carcinoma: peripheral zone, spreads to vertebrae via Batson plexus, osteoblastic mets",
          "Testicular torsion: 6-hour window, absent cremasteric reflex, bell-clapper deformity"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 21-23", edition: "8th" }] },

      { layer: 4, slug: "male-repro-exam", title: "Male Reproductive Organs - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG points on male reproductive anatomy.",
        contentMd: `# Exam High Yield

## One-Liner Table

| Question | Answer |
|----------|--------|
| Testis lymphatic drainage | **Para-aortic (lumbar) lymph nodes** |
| Scrotum lymphatic drainage | **Superficial inguinal nodes** |
| Left testicular vein drains into | **Left renal vein** |
| Right testicular vein drains into | **IVC** |
| Most common side for varicocele | **Left (90%)** |
| Site of BPH | **Transitional zone** (periurethral glands) |
| Most common site of prostate carcinoma | **Peripheral zone** |
| Route of prostate metastasis to spine | **Batson plexus** (internal vertebral venous plexus) |
| Prostate bone metastases type | **Osteoblastic (sclerotic)** |
| Indirect hernia: relation to inferior epigastric | **Lateral** |
| Direct hernia: relation to inferior epigastric | **Medial** (through Hesselbach triangle) |
| Erection nerve supply | **Parasympathetic S2, S3, S4 (nervi erigentes)** |
| Ejaculation nerve supply | **Sympathetic L1, L2 (hypogastric nerve)** |
| Cremasteric reflex afferent | **Ilioinguinal nerve (L1)** |
| Cremasteric reflex efferent | **Genital branch of genitofemoral nerve (L1, L2)** |
| Testicular artery branch of | **Abdominal aorta at L2** |
| Guides testicular descent | **Gubernaculum testis** |
| Seminal vesicle contribution to semen | **~70%** (fructose-rich) |
| Fascia between prostate and rectum | **Denonvilliers fascia** |
| Landmark for deep inguinal ring | **Lateral to inferior epigastric artery, above midpoint of inguinal ligament** |

## Comparison Table: Hydrocele vs Testicular Tumor

| Feature | Hydrocele | Tumor |
|---------|-----------|-------|
| Transillumination | Positive | Negative |
| Getting above swelling | Can | Can |
| Testis palpable | No (surrounded by fluid) | Mass arising from testis |
| Fluctuation | Positive | Negative |`,
        mnemonics: [
          { text: "Point and Shoot", explanation: "Point = Parasympathetic (Erection, S2,3,4); Shoot = Sympathetic (Ejaculation, L1,2)" },
          { text: "Left RENAL for Left testicular vein", explanation: "Left testicular vein drains to Left Renal vein (not IVC). Right testicular vein goes directly to IVC. This is why varicocele is more common on the left." }
        ],
        keyPoints: [
          "Testis → para-aortic nodes; Scrotum → superficial inguinal nodes",
          "BPH = transitional zone; CA prostate = peripheral zone",
          "Prostate mets via Batson plexus = osteoblastic",
          "Point (erection, parasympathetic) and Shoot (ejaculation, sympathetic)",
          "Indirect hernia = lateral to inferior epigastric; Direct = medial"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 21-23", edition: "8th" }] },

      { layer: 5, slug: "male-repro-recall", title: "Male Reproductive Organs - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for male reproductive organs.",
        contentMd: `# Active Recall

**Q1:** Where does the left testicular vein drain?
> Left renal vein (right testicular vein drains to IVC)

**Q2:** What is the lymphatic drainage of the testis?
> Para-aortic (lumbar) lymph nodes (NOT inguinal - due to retroperitoneal origin)

**Q3:** Which zone of the prostate is the site of BPH?
> Transitional zone (periurethral glands, 5% of prostate)

**Q4:** Which zone of the prostate is the most common site of carcinoma?
> Peripheral zone (70% of prostate)

**Q5:** What guides testicular descent?
> Gubernaculum testis

**Q6:** Name the boundaries of Hesselbach triangle.
> Medial: lateral border of rectus abdominis. Lateral: inferior epigastric artery. Inferior: inguinal ligament.

**Q7:** What is the nerve supply for erection?
> Parasympathetic: S2, S3, S4 (nervi erigentes / pelvic splanchnic nerves)

**Q8:** Why is varicocele more common on the left?
> Left testicular vein drains into left renal vein at right angle (longer course, nutcracker compression)`,
        mnemonics: [], keyPoints: ["8 recall questions covering testis, prostate, inguinal canal, and clinical anatomy"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 21-23", edition: "8th" }] },
    ],
  },

  // ─── Topic 3: Female Reproductive Organs ───────────────────
  {
    topicCode: "AN-MOD-05-TOP-03",
    layers: [
      { layer: 1, slug: "female-repro-foundation", title: "Female Reproductive Organs - Foundation", estimatedMinutes: 20,
        summary: "The female reproductive organs include the uterus, ovaries, fallopian tubes, vagina, and their supporting ligaments. The uterus is a hollow muscular organ in the normal anteverted and anteflexed position.",
        contentMd: `# Female Reproductive Organs

## Uterus
- **Shape**: Inverted pear-shaped, flattened anteroposteriorly
- **Size**: 7.5 cm long, 5 cm wide, 2.5 cm thick (nulliparous)
- **Position**: Anteverted (angle between cervix and vagina) and Anteflexed (angle between body and cervix)

### Parts
| Part | Description |
|------|-------------|
| Fundus | Dome-shaped, above the openings of fallopian tubes |
| Body | Main part, triangular cavity |
| Isthmus | Constricted part between body and cervix (becomes lower uterine segment in pregnancy) |
| Cervix | Lower cylindrical part; supravaginal (2/3) and vaginal (1/3) portions |

### Layers of Uterine Wall
1. **Perimetrium** - Serous coat (peritoneum)
2. **Myometrium** - Thick smooth muscle (3 layers)
3. **Endometrium** - Mucosal lining (undergoes cyclical changes)

### Relations
- **Anterior**: Vesicouterine pouch, urinary bladder
- **Posterior**: Rectouterine pouch (of Douglas) - deepest part of peritoneal cavity in female
- **Lateral**: Broad ligament, uterine artery, ureter

### Blood Supply
- **Uterine artery** (branch of anterior division of internal iliac artery)
- Crosses the ureter at the level of the internal os ("Water under the bridge")
- Anastomoses with ovarian artery along the lateral border

### Supports of the Uterus
| Support | Ligament/Structure |
|---------|--------------------|
| Primary support | Levator ani (pelvic floor) |
| Chief ligament support | Cardinal (transverse cervical) ligament |
| Maintains anteversion | Uterosacral ligament |
| Anterior support | Pubocervical ligament |
| Keeps uterus anteverted | Round ligament (maintains anteversion, NOT a support) |

## Ovaries
- **Location**: On lateral pelvic wall in the ovarian fossa
- **Size**: 3 cm x 1.5 cm x 1 cm (almond-shaped)
- **Peritoneal status**: INTRAPERITONEAL (only intraperitoneal organ not covered by peritoneum - covered by germinal epithelium)
- **Blood supply**: Ovarian artery (from abdominal aorta at L2)
- **Venous drainage**: Same as testis (right → IVC, left → left renal vein)
- **Lymph drainage**: Para-aortic lymph nodes
- **Attached by**: Mesovarium (to broad ligament), Ovarian ligament (to uterus), Suspensory ligament/Infundibulopelvic ligament (to pelvic wall, contains ovarian vessels)

## Fallopian Tubes (Uterine Tubes)
- **Length**: ~10 cm

| Part | Description | Clinical |
|------|-------------|----------|
| Intramural (interstitial) | Within uterine wall, narrowest part | Cornual ectopic |
| Isthmus | Narrow, thick-walled | Tubectomy site |
| Ampulla | Widest, longest part | Most common site of fertilization AND ectopic pregnancy |
| Infundibulum | Funnel-shaped, opens into peritoneal cavity | Fimbriae catch ovum |

> **Clinical Pearl**: The fallopian tube opens into the peritoneal cavity at the infundibulum. This means the female peritoneal cavity communicates with the exterior via tube → uterus → vagina. This is clinically significant for spread of infections (ascending PID).

## Broad Ligament
- Double fold of peritoneum extending from lateral border of uterus to pelvic wall
- Contains:
  - **Mesometrium**: Largest part, between uterine body and pelvic wall
  - **Mesosalpinx**: Between tube and mesovarium; contains tubal vessels
  - **Mesovarium**: Suspends ovary, transmits ovarian vessels to hilum

## Vagina
- Fibromuscular canal, 7-9 cm long
- **Anterior wall shorter (7 cm)** than posterior wall (9 cm)
- Fornices: anterior, posterior (deepest - related to pouch of Douglas), and 2 lateral
- **Relations**: Anterior - bladder + urethra; Posterior - pouch of Douglas (upper 1/4), rectum`,
        mnemonics: [
          { text: "Water Under the Bridge for uterine artery and ureter", explanation: "Uterine artery (Water) crosses OVER the ureter (bridge) at the level of internal os, about 2 cm lateral to the cervix. Ureter is at risk during hysterectomy." },
          { text: "AIIF for fallopian tube parts (medial to lateral)", explanation: "A = Ampulla is where fertilization and ectopic happen (most common site), I = Isthmus (tubectomy site), I = Intramural (narrowest), F = Fimbriae catch the ovum. Remember medial to lateral as the tube opens laterally." }
        ],
        keyPoints: [
          "Uterus is anteverted and anteflexed in normal position",
          "Uterine artery crosses over ureter (water under the bridge) - ureter at risk during hysterectomy",
          "Ampulla of fallopian tube: most common site of fertilization AND ectopic pregnancy",
          "Pouch of Douglas: deepest part of peritoneal cavity in female (posterior to uterus)",
          "Ovary: only intraperitoneal organ NOT covered by peritoneum (germinal epithelium instead)",
          "Cardinal ligament is the chief ligament support of the uterus"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 24-25", edition: "8th" }] },

      { layer: 2, slug: "female-repro-mechanism", title: "Female Reproductive Organs - Mechanism", estimatedMinutes: 30,
        summary: "Detailed anatomy of uterine blood supply and anastomoses, broad ligament contents, ovarian ligaments, lymphatic drainage pathways, and nerve supply of female reproductive organs.",
        contentMd: `# Female Reproductive Organs - Detailed Anatomy

## Uterine Artery - Detailed Course
1. Arises from anterior division of internal iliac artery
2. Runs medially in the base of broad ligament
3. **Crosses ureter** at internal os level (2 cm lateral to cervix)
4. Ascends along lateral border of uterus (tortuous course)
5. Gives ascending and descending branches
6. Anastomoses with ovarian artery at the cornua

### Uterine Artery Branches
| Branch | Supplies |
|--------|----------|
| Ascending branch | Body and fundus of uterus |
| Descending (vaginal) branch | Cervix and upper vagina |
| Tubal branch | Medial 2/3 of tube |
| Ovarian branch | Medial part of ovary |
| Arcuate arteries | Within myometrium, encircle uterus |
| Radial arteries | Perpendicular branches to endometrium |
| Spiral arteries | Terminal branches in endometrium (shed during menstruation) |

## Ligaments of the Uterus and Ovary

| Ligament | From → To | Contents | Clinical Significance |
|----------|-----------|----------|----------------------|
| Broad ligament | Uterus → pelvic wall | Tube, round lig, ovarian lig, uterine vessels, ureter | Double peritoneal fold |
| Round ligament | Cornu of uterus → labia majora (through inguinal canal) | Sampson artery | Maintains anteversion; corresponds to gubernaculum |
| Ovarian ligament | Ovary → cornu of uterus | Small vessels | Connects ovary to uterus |
| Suspensory (infundibulopelvic) lig | Ovary → pelvic brim | **Ovarian artery + vein** | Must be ligated during oophorectomy |
| Cardinal (Mackenrodt) lig | Cervix → pelvic wall | Uterine artery + vein | Chief support |
| Uterosacral lig | Cervix → sacrum (S2-S4) | Nerves | Maintains anteversion |
| Pubocervical lig | Cervix → pubis | — | Supports bladder base |

> **Clinical Pearl**: The suspensory (infundibulopelvic) ligament contains the ovarian vessels and must be carefully ligated during oophorectomy. Injury to the ureter is a risk as it runs in close proximity.

## Lymphatic Drainage

| Structure | Lymph Nodes |
|-----------|-------------|
| Fundus of uterus | Para-aortic nodes (along ovarian vessels) |
| Body of uterus | External iliac nodes |
| Cervix | Internal iliac + external iliac + sacral nodes |
| Along round ligament | Superficial inguinal nodes |
| Ovary | Para-aortic nodes (like testis) |
| Upper vagina | Internal and external iliac nodes |
| Lower vagina | Superficial inguinal nodes |

## Nerve Supply

### Uterus
- **Sympathetic**: T10-L2 (via hypogastric plexus) - uterine contraction
- **Parasympathetic**: S2, S3, S4 (pelvic splanchnic) - uterine relaxation
- Pain from body: via sympathetic (T10-L2 dermatomes)
- Pain from cervix: via parasympathetic (S2-S4)

### Ovary
- Sympathetic: T10 (via aortic plexus along ovarian artery)
- Pain referred to periumbilical region (T10 dermatome)

## Pouch of Douglas (Rectouterine Pouch)
- Deepest part of peritoneal cavity in female
- Bounded by uterosacral folds laterally
- Examined by posterior fornix palpation or culdocentesis
- Collections (blood/pus) can accumulate here due to gravity
- Used for culdocentesis in suspected ruptured ectopic pregnancy`,
        mnemonics: [
          { text: "Round ligament = Round (through inguinal canal to labia majora, like gubernaculum)", explanation: "The round ligament of the uterus passes through the inguinal canal to end in the labia majora, analogous to the gubernaculum in males. It maintains anteversion but is NOT a true support." },
          { text: "SOUR for suspensory ligament", explanation: "Suspensory ligament (infundibulopelvic) contains Ovarian artery, Ureter nearby (at risk), Reaches pelvic brim - must be ligated during oophorectomy" }
        ],
        keyPoints: [
          "Uterine artery gives spiral arteries that shed during menstruation",
          "Suspensory (infundibulopelvic) ligament contains ovarian vessels - ligate during oophorectomy",
          "Round ligament passes through inguinal canal to labia majora (homologue of gubernaculum)",
          "Fundus lymph → para-aortic; Cervix lymph → internal iliac + external iliac",
          "Pouch of Douglas is the deepest peritoneal point - culdocentesis access via posterior fornix",
          "Ovarian pain referred to periumbilical region (T10 dermatome)"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 24-25", edition: "8th" }] },

      { layer: 3, slug: "female-repro-clinical", title: "Female Reproductive Organs - Clinical", estimatedMinutes: 20,
        summary: "Clinical anatomy of ectopic pregnancy, hysterectomy complications, uterine prolapse, cervical cancer spread, and ovarian tumors.",
        contentMd: `# Clinical Correlations

## Ectopic Pregnancy
- Most common site: **Ampulla of fallopian tube** (70%)
- Risk factors: PID, previous ectopic, tubal surgery, IUD
- Presentation: Amenorrhea, abdominal pain, vaginal bleeding
- Ruptured ectopic → hemoperitoneum → blood collects in pouch of Douglas
- **Culdocentesis**: Needle through posterior fornix into pouch of Douglas to detect blood

## Hysterectomy - Structures at Risk

| Structure at Risk | Mechanism of Injury |
|-------------------|-------------------|
| **Ureter** | Crossed by uterine artery (water under bridge) - most common site of injury |
| Uterine artery | During clamping of cardinal ligament |
| Bladder | During mobilization from anterior uterine wall |
| Rectum | During posterior dissection |
| Ovarian vessels | During ligation of infundibulopelvic ligament |

> **Clinical Pearl**: The ureter is most vulnerable during hysterectomy at the point where the uterine artery crosses it (2 cm lateral to the cervix at the internal os level). In India, ureteric injury during hysterectomy is a significant medicolegal issue.

## Cervical Carcinoma
- Arises most commonly at the **squamocolumnar junction (transformation zone)**
- Spreads:
  - **Laterally**: Through cardinal (parametrial) ligament to pelvic wall (Stage IIIB)
  - **Anteriorly**: To bladder
  - **Posteriorly**: To rectum
  - **Lymphatic**: Internal iliac → external iliac → common iliac → para-aortic
- Staging by FIGO classification (clinical staging, not surgical)
- Ureter compressed at parametrium → hydronephrosis (Stage IIIB)

## Ovarian Tumors
- Ovarian malignancy: "Silent killer" - presents late with abdominal distension (ascites)
- Transcoelomic spread across peritoneal cavity
- Krukenberg tumor: Ovarian metastasis from gastric carcinoma (signet ring cells)
- Ovary accessed surgically through the broad ligament

## Uterine Prolapse (Review)
- Weakness of cardinal + uterosacral ligaments + levator ani
- Risk factors: multiparous women, chronic cough, heavy lifting, post-menopausal atrophy
- Associated: cystocele (anterior), rectocele (posterior), enterocele

## Tubal Ligation (Tubectomy)
- **Site**: Isthmus of the fallopian tube
- Methods: Pomeroy, Modified Pomeroy, Fimbriectomy, clip/ring application
- Isthmus chosen because: narrow, easy to identify, good blood supply for healing

## Fibroid (Leiomyoma) Uterus
- Most common benign tumor of the uterus
- Types: Subserosal, Intramural (most common), Submucosal (most symptomatic - menorrhagia)
- Blood supply: uterine artery
- Treatment: Myomectomy (fertility-sparing) or hysterectomy`,
        mnemonics: [
          { text: "ATI for ectopic pregnancy sites (frequency)", explanation: "Ampulla (70%, most common), Tubal isthmus (12%), Interstitial/cornual (2%). Ampulla is the most common site." },
          { text: "WOMB at risk during hysterectomy", explanation: "Water under bridge (ureter injury), Ovarian vessels (infundibulopelvic lig), Muscular bladder (anterior relation), Bowel/rectum (posterior)" }
        ],
        keyPoints: [
          "Ampulla is the most common site of ectopic pregnancy (70%)",
          "Ureter is the most vulnerable structure during hysterectomy",
          "Cervical carcinoma arises at squamocolumnar junction (transformation zone)",
          "Cervical cancer spreads laterally through cardinal ligament to pelvic wall",
          "Tubectomy is done at the isthmus of the fallopian tube"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 24-25", edition: "8th" }] },

      { layer: 4, slug: "female-repro-exam", title: "Female Reproductive Organs - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG points on female reproductive anatomy.",
        contentMd: `# Exam High Yield

## One-Liner Table

| Question | Answer |
|----------|--------|
| Normal position of uterus | **Anteverted and anteflexed** |
| Chief support of uterus | **Cardinal (transverse cervical / Mackenrodt) ligament** |
| Ligament maintaining anteversion | **Round ligament** (and uterosacral) |
| Round ligament passes through | **Inguinal canal** (to labia majora) |
| Homologue of gubernaculum in female | **Round ligament of uterus** |
| Uterine artery relation to ureter | **Crosses OVER ureter (water under bridge)** |
| Level of uterine artery-ureter crossing | **Internal os, 2 cm lateral to cervix** |
| Deepest peritoneal pouch in female | **Pouch of Douglas (rectouterine)** |
| Most common site of ectopic pregnancy | **Ampulla of fallopian tube** |
| Most common site of fertilization | **Ampulla of fallopian tube** |
| Narrowest part of fallopian tube | **Intramural (interstitial)** |
| Site of tubectomy | **Isthmus of fallopian tube** |
| Ligament containing ovarian vessels | **Suspensory (infundibulopelvic) ligament** |
| Ovarian lymph drainage | **Para-aortic nodes** |
| Ovarian artery branch of | **Abdominal aorta at L2** |
| Cervix lymph drainage | **Internal iliac + external iliac nodes** |
| Cervical cancer arises at | **Squamocolumnar junction (transformation zone)** |
| Most common benign uterine tumor | **Fibroid (leiomyoma)** |
| Isthmus becomes in pregnancy | **Lower uterine segment** |
| Ovary covered by | **Germinal epithelium** (NOT peritoneum) |
| Pouch of Douglas accessed via | **Posterior fornix (culdocentesis)** |
| Structure most at risk during hysterectomy | **Ureter** |

## Comparison: Ovarian vs Uterine Blood Supply

| Feature | Ovary | Uterus |
|---------|-------|--------|
| Artery | Ovarian (aorta, L2) | Uterine (internal iliac) |
| Vein | Right → IVC; Left → renal vein | Uterine venous plexus → internal iliac |
| Lymph | Para-aortic | Body: external iliac; Cervix: internal iliac |`,
        mnemonics: [
          { text: "Water Under the Bridge", explanation: "Uterine artery (Water) crosses OVER the ureter (Under the Bridge) at the internal os level. The ureter is at risk during hysterectomy. Key exam mnemonic." },
          { text: "Ampulla = A for All (fertilization + ectopic + longest part)", explanation: "Ampulla of fallopian tube: most common site of fertilization, most common site of ectopic pregnancy, longest and widest part of the tube" }
        ],
        keyPoints: [
          "Uterine artery crosses over ureter at internal os (water under bridge)",
          "Ampulla: fertilization + ectopic pregnancy (most common site for both)",
          "Suspensory ligament contains ovarian vessels",
          "Pouch of Douglas: deepest peritoneal point in female",
          "Ureter is the structure most at risk during hysterectomy"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 24-25", edition: "8th" }] },

      { layer: 5, slug: "female-repro-recall", title: "Female Reproductive Organs - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for female reproductive organs.",
        contentMd: `# Active Recall

**Q1:** What is the normal position of the uterus?
> Anteverted (angle between cervix and vagina) and Anteflexed (angle between body and cervix)

**Q2:** What is the relationship between the uterine artery and ureter?
> Uterine artery crosses OVER the ureter at the level of the internal os, 2 cm lateral to the cervix ("water under the bridge")

**Q3:** What is the most common site of ectopic pregnancy?
> Ampulla of the fallopian tube (70%)

**Q4:** Which ligament is the chief support of the uterus?
> Cardinal (transverse cervical / Mackenrodt) ligament

**Q5:** What is the deepest part of the peritoneal cavity in a female?
> Pouch of Douglas (rectouterine pouch)

**Q6:** Which ligament contains the ovarian vessels?
> Suspensory (infundibulopelvic) ligament

**Q7:** What is the site of tubectomy?
> Isthmus of the fallopian tube

**Q8:** Where does ovarian cancer commonly spread?
> Transcoelomic spread across the peritoneal cavity (ovarian cancer is the "silent killer")`,
        mnemonics: [], keyPoints: ["8 recall questions covering uterine position, blood supply, ectopic pregnancy, ligaments, and clinical correlations"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 24-25", edition: "8th" }] },
    ],
  },

  // ─── Topic 4: Urinary Bladder & Urethra ───────────────────
  {
    topicCode: "AN-MOD-05-TOP-04",
    layers: [
      { layer: 1, slug: "bladder-urethra-foundation", title: "Urinary Bladder & Urethra - Foundation", estimatedMinutes: 20,
        summary: "The urinary bladder is a hollow muscular organ for urine storage, located in the lesser pelvis behind the pubic symphysis. The urethra differs significantly between males and females.",
        contentMd: `# Urinary Bladder & Urethra

## Urinary Bladder
- **Shape**: Tetrahedral when empty; ovoid when distended
- **Capacity**: ~500 mL (desire to void at 200-300 mL)
- **Location**: Behind pubic symphysis, in the lesser pelvis

### Surfaces (When Empty)
| Surface | Related Structure |
|---------|-------------------|
| Superior | Peritoneum-covered; related to sigmoid colon and small intestine |
| Posteroinferior (Base) | In males: seminal vesicles, vas deferens, rectum. In females: vagina, cervix |
| 2 Inferolateral | Retropubic fat, levator ani, obturator internus |

### Apex, Neck, and Ureters
- **Apex**: Connected to umbilicus by median umbilical ligament (obliterated urachus)
- **Neck**: Rests on prostate (male) or pelvic floor (female); leads into urethra
- **Ureters**: Enter posterolaterally, travel obliquely through wall (anti-reflux mechanism)

### Interior of the Bladder
- **Trigone**: Smooth triangular area on the base
  - Superior angles: 2 ureteric orifices
  - Inferior angle: internal urethral orifice
  - Interureteric ridge (bar) connects the 2 ureteric orifices
  - Derived from mesonephric duct (NOT endoderm like the rest of the bladder)
- **Detrusor muscle**: 3 layers of smooth muscle (inner longitudinal, middle circular, outer longitudinal)

### Blood Supply
- **Superior vesical artery** (from patent part of umbilical artery)
- **Inferior vesical artery** (from internal iliac, in males) / Vaginal artery (in females)
- **Venous drainage**: Vesical venous plexus → internal iliac vein

### Nerve Supply
- **Motor (detrusor)**: Parasympathetic S2, S3, S4 (pelvic splanchnic nerves) - contraction
- **Motor (internal sphincter)**: Sympathetic T11-L2 - contraction (continence)
- **Sensory (stretch)**: Via parasympathetic afferents (S2-S4)

### Lymphatic Drainage
- External iliac and internal iliac lymph nodes

## Male Urethra
- **Length**: ~20 cm (from bladder neck to external urethral meatus)

| Part | Length | Features | Narrowing |
|------|--------|----------|-----------|
| Prostatic | 3 cm | Widest, most dilatable; urethral crest, prostatic utricle, ejaculatory duct openings | No |
| Membranous | 1-2 cm | Shortest, least dilatable, NARROWEST FIXED PART; pierces urogenital diaphragm | Yes (external sphincter) |
| Spongy (penile) | 15 cm | Within corpus spongiosum; navicular fossa near tip | Navicular fossa + external meatus |

### Constrictions of Male Urethra (3)
1. **Internal urethral orifice** (bladder neck)
2. **Membranous urethra** (narrowest fixed part)
3. **External urethral meatus** (narrowest overall point)

### Curvatures of Male Urethra (2)
1. **Preprostatic (infrapubic) curve** - Fixed, concavity forward
2. **Prepubic curve** - Obliterated when penis is raised

## Female Urethra
- **Length**: ~4 cm (short and straight)
- Opens into vestibule, anterior to vaginal orifice
- Embedded in anterior vaginal wall
- More prone to UTI due to short length and proximity to vaginal/anal openings

> **Clinical Pearl**: The female urethra is only 4 cm long compared to 20 cm in males. This shorter length, combined with proximity to the vaginal and anal openings, explains the much higher incidence of UTI in women.`,
        mnemonics: [
          { text: "PSM for male urethra parts (proximal to distal)", explanation: "Prostatic (3 cm, widest), Spongy/penile (15 cm, longest), Membranous (1-2 cm, shortest and narrowest). PSM from proximal to distal." },
          { text: "3 Constrictions of male urethra: I ME", explanation: "Internal meatus (bladder neck), Membranous urethra (narrowest fixed), External meatus (narrowest overall). I ME." }
        ],
        keyPoints: [
          "Trigone: smooth area on bladder base with 2 ureteric and 1 urethral orifice",
          "Trigone derived from mesonephric duct (not endoderm like rest of bladder)",
          "Detrusor muscle: parasympathetic S2,3,4 (contraction); sympathetic T11-L2 (relaxation for filling)",
          "Male urethra: 20 cm, 3 parts (prostatic, membranous, spongy)",
          "Membranous urethra: shortest, least dilatable, narrowest fixed part",
          "Female urethra: 4 cm, short and straight - higher UTI risk"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 26", edition: "8th" }] },

      { layer: 2, slug: "bladder-urethra-mechanism", title: "Urinary Bladder & Urethra - Mechanism", estimatedMinutes: 30,
        summary: "Detailed relations of the bladder, mechanism of continence and micturition, prostatic urethra features, and ureter anatomy at the vesicoureteric junction.",
        contentMd: `# Urinary Bladder & Urethra - Detailed Anatomy

## Detailed Relations of the Bladder

### In Males
| Relation | Structure |
|----------|-----------|
| Superior | Peritoneum, sigmoid colon, ileal loops |
| Posteroinferior (Base) | Seminal vesicles (lateral), Vas deferens (medial), Rectum (behind Denonvilliers fascia) |
| Inferolateral | Retropubic space (of Retzius), puboprostatic ligaments, obturator internus |
| Inferior (Neck) | Prostate gland |

### In Females
| Relation | Structure |
|----------|-----------|
| Superior | Peritoneum, uterus (vesicouterine pouch) |
| Posteroinferior (Base) | Vagina, cervix |
| Inferior (Neck) | Pelvic floor (levator ani), urogenital diaphragm |

## Vesicoureteric Junction (Anti-reflux Mechanism)
- Ureter enters bladder wall obliquely (traverses 1.5-2 cm of wall)
- During bladder filling, intravesical pressure compresses the intramural ureter
- Acts as a **one-way valve** preventing vesicoureteric reflux (VUR)
- Short intramural tunnel (congenital) leads to VUR in children

## Prostatic Urethra - Detailed Features
- **Urethral crest**: Longitudinal ridge on posterior wall
- **Prostatic sinus**: Grooves on either side of crest (prostatic ducts open here)
- **Seminal colliculus (verumontanum)**: Elevation on the urethral crest
  - **Prostatic utricle**: Small blind sac (homologue of uterus and vagina)
  - **Ejaculatory duct orifices**: One on each side of prostatic utricle

## Mechanism of Continence

| Sphincter | Type | Nerve | Function |
|-----------|------|-------|----------|
| Internal urethral sphincter | Smooth muscle (involuntary) | Sympathetic (L1-L2) | Maintains tonic contraction at rest |
| External urethral sphincter (rhabdosphincter) | Skeletal muscle (voluntary) | Pudendal nerve (S2,3,4) | Voluntary continence |

### Micturition Reflex
1. Bladder filling detected by stretch receptors (parasympathetic afferents S2-4)
2. Signal to micturition center in sacral spinal cord (S2-4)
3. Parasympathetic efferents contract detrusor muscle
4. Simultaneously: sympathetic inhibition → internal sphincter relaxation
5. Voluntary relaxation of external sphincter (pudendal nerve)
6. Coordinated by pontine micturition center (Barrington nucleus)

## Ureter - Pelvic Course
- Crosses pelvic brim at the bifurcation of common iliac artery
- Runs along lateral pelvic wall, anterior to internal iliac artery
- In males: crosses under vas deferens near seminal vesicle
- In females: passes through base of broad ligament, crossed by uterine artery

### Ureter Constrictions (3 sites of stone impaction)
1. **Pelviureteric junction (PUJ)**: Renal pelvis → ureter
2. **Pelvic brim**: Ureter crosses common iliac artery
3. **Vesicoureteric junction (VUJ)**: Narrowest point, entering bladder

> **Clinical Pearl**: The VUJ (where ureter enters bladder) is the narrowest point of the ureter and the most common site for ureteric stone impaction. Pain refers to the groin/genitalia (L1 dermatome).`,
        mnemonics: [
          { text: "PBV for 3 sites of ureteric stone impaction", explanation: "Pelviureteric junction, Brim of pelvis (iliac artery crossing), Vesicoureteric junction (narrowest, most common impaction site)" },
          { text: "Parasympathetic Pisses, Sympathetic Stores", explanation: "Parasympathetic (S2,3,4) contracts detrusor for micturition. Sympathetic (T11-L2) contracts internal sphincter for storage. Simple way to remember autonomic control of bladder." }
        ],
        keyPoints: [
          "Oblique passage of ureter through bladder wall creates anti-reflux valve mechanism",
          "3 ureteric constrictions: PUJ, pelvic brim, VUJ (narrowest)",
          "Internal sphincter: sympathetic (storage), External sphincter: pudendal nerve (voluntary)",
          "Micturition reflex: stretch → S2-4 parasympathetic → detrusor contraction",
          "Prostatic utricle = homologue of uterus + vagina in males",
          "Pontine micturition center (Barrington nucleus) coordinates the reflex"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 26", edition: "8th" }] },

      { layer: 3, slug: "bladder-urethra-clinical", title: "Urinary Bladder & Urethra - Clinical", estimatedMinutes: 20,
        summary: "Clinical anatomy of urethral injuries, catheterization, bladder rupture, vesicoureteric reflux, and neurogenic bladder.",
        contentMd: `# Clinical Correlations

## Urethral Injury in Males

### Membranous Urethra Injury
- Caused by **pelvic fracture** (posterior urethral injury)
- Urine extravasates into retropubic space (space of Retzius)
- Blood at urethral meatus - DO NOT catheterize
- Diagnosis: Retrograde urethrogram
- Associated with disruption of urogenital diaphragm

### Spongy (Bulbar) Urethra Injury
- Caused by **straddle injury** (fall on bicycle crossbar, kick to perineum)
- Anterior urethral injury
- Urine extravasates into superficial perineal pouch (within Colles fascia)
- Urine can track to: anterior abdominal wall (within Scarpa fascia), scrotum, penis
- Does NOT extend to: thigh (attached to fascia lata), ischiorectal fossa, anal triangle

> **Clinical Pearl**: In straddle injury, urine extravasation follows the attachments of Colles fascia (superficial perineal fascia). It spreads to the scrotum, penis, and anterior abdominal wall but NOT to the thighs or posterior perineum.

## Urethral Catheterization
- Male: 3 anatomical curves must be navigated
  1. Prepubic curve (straightened by lifting penis)
  2. Infrapubic curve (fixed)
  3. Through external sphincter (resistance point)
- Use Foley catheter (16-18 Fr for adults)
- Risk: **false passage** if forceful, especially at membranous urethra

## Bladder Rupture

| Type | Cause | Extravasation |
|------|-------|---------------|
| Intraperitoneal | Blow to distended bladder (full bladder, seatbelt injury) | Into peritoneal cavity (suprapubic tenderness, peritonitis) |
| Extraperitoneal | Pelvic fracture (bony fragment lacerates bladder) | Into retropubic space, perivesical tissues |

## Vesicoureteric Reflux (VUR)
- Congenital short intramural tunnel of ureter
- Urine refluxes from bladder to ureter/kidney during voiding
- Leads to recurrent UTI and reflux nephropathy
- Diagnosed by micturating cystourethrogram (MCU/VCUG)
- Grading: I-V (V = gross reflux with dilated tortuous ureter)
- Treatment: Mild → antibiotic prophylaxis; Severe → ureteric reimplantation (Cohen procedure)

## Neurogenic Bladder

| Type | Lesion | Features |
|------|--------|----------|
| Atonic (LMN type) | Sacral cord (S2-4) or cauda equina | Overflow incontinence, large residual volume, absent bladder sensation |
| Spastic (UMN type) | Above sacral cord (spinal cord injury) | Small capacity, involuntary contractions, reflex voiding |
| Autonomous | Complete sacral cord destruction | No reflex, no voluntary control |

## Suprapubic Cystostomy
- Trocar inserted 2 cm above pubic symphysis in midline
- Bladder must be distended (rises above pubic symphysis)
- Avoids peritoneum as extraperitoneal bladder wall is accessed
- Used when urethral catheterization is contraindicated`,
        mnemonics: [
          { text: "Pelvic fracture = Posterior urethra; Straddle = Spongy (anterior)", explanation: "Pelvic fracture damages the membranous (posterior) urethra. Straddle injury damages the spongy/bulbar (anterior) urethra. P for Pelvic and Posterior, S for Straddle and Spongy." },
          { text: "Colles goes to SPAS not to Thighs", explanation: "Colles fascia allows extravasation to Scrotum, Penis, Anterior abdominal wall, but Stops at thigh (attached to fascia lata)" }
        ],
        keyPoints: [
          "Posterior urethral injury: pelvic fracture → membranous urethra → blood at meatus → DO NOT catheterize",
          "Anterior urethral injury: straddle injury → spongy urethra → extravasation into superficial perineal pouch",
          "Colles fascia limits extravasation: goes to scrotum, penis, anterior abdominal wall but NOT thigh",
          "Intraperitoneal bladder rupture: blow to full bladder; Extraperitoneal: pelvic fracture",
          "VUR: short intramural tunnel, diagnosed by VCUG"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 26", edition: "8th" }] },

      { layer: 4, slug: "bladder-urethra-exam", title: "Urinary Bladder & Urethra - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG points on urinary bladder and urethra.",
        contentMd: `# Exam High Yield

## One-Liner Table

| Question | Answer |
|----------|--------|
| Trigone of bladder derived from | **Mesonephric duct** (rest of bladder from endoderm) |
| Narrowest fixed part of male urethra | **Membranous urethra** |
| Narrowest overall point of male urethra | **External urethral meatus** |
| Widest and most dilatable part | **Prostatic urethra** |
| Length of male urethra | **~20 cm** |
| Length of female urethra | **~4 cm** |
| Motor nerve to detrusor muscle | **Parasympathetic S2, S3, S4** |
| Internal sphincter nerve supply | **Sympathetic L1, L2** |
| External sphincter nerve supply | **Pudendal nerve S2, S3, S4** |
| Narrowest point of ureter | **Vesicoureteric junction (VUJ)** |
| Posterior urethral injury caused by | **Pelvic fracture** |
| Anterior urethral injury caused by | **Straddle injury** |
| Straddle injury: extravasation limited by | **Colles fascia** (superficial perineal fascia) |
| Blood at meatus after pelvic fracture → next step | **Retrograde urethrogram** (DO NOT catheterize) |
| Intraperitoneal bladder rupture cause | **Blow to full/distended bladder** |
| VUR diagnosed by | **Micturating cystourethrogram (MCU/VCUG)** |
| Prostatic utricle is homologue of | **Uterus + vagina** in females |
| Ejaculatory duct opens at | **Seminal colliculus (verumontanum)** in prostatic urethra |
| Median umbilical ligament is remnant of | **Urachus** |
| Medial umbilical ligament is remnant of | **Umbilical artery** |

## Comparison: Male vs Female Urethra

| Feature | Male | Female |
|---------|------|--------|
| Length | ~20 cm | ~4 cm |
| Parts | 3 (prostatic, membranous, spongy) | Single, no parts |
| Course | Curved (2 curvatures) | Short, straight |
| Sphincters | Internal + external | External (less developed) |
| UTI risk | Lower | Higher (short, proximity to vagina/anus) |
| Catheterization | Difficult (curves, prostate) | Easy |`,
        mnemonics: [
          { text: "MEN have MEMbranous narrowing", explanation: "Membranous urethra is the narrowest fixed part of the male urethra, pierced by external sphincter, injured in pelvic fractures" },
          { text: "Median = Urachus; Medial = Umbilical artery", explanation: "Median umbilical ligament = obliterated urachus (1, midline). Medial umbilical ligaments (2, paired) = obliterated umbilical arteries. Lateral umbilical folds contain inferior epigastric vessels." }
        ],
        keyPoints: [
          "Membranous urethra = narrowest fixed part; external meatus = narrowest overall",
          "Trigone from mesonephric duct; rest of bladder from endoderm",
          "Posterior urethral injury = pelvic fracture; Anterior = straddle injury",
          "Blood at meatus → retrograde urethrogram, NOT catheterization",
          "Parasympathetic pisses (S2,3,4 detrusor); Sympathetic stores (L1,2 internal sphincter)"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 26", edition: "8th" }] },

      { layer: 5, slug: "bladder-urethra-recall", title: "Urinary Bladder & Urethra - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for urinary bladder and urethra.",
        contentMd: `# Active Recall

**Q1:** What are the 3 parts of the male urethra?
> Prostatic (3 cm, widest), Membranous (1-2 cm, narrowest fixed part), Spongy (15 cm, longest)

**Q2:** From where is the trigone of the bladder derived?
> Mesonephric (Wolffian) duct (rest of bladder from endoderm of urogenital sinus)

**Q3:** What are the 3 sites of ureteric constriction?
> Pelviureteric junction (PUJ), Pelvic brim (iliac artery crossing), Vesicoureteric junction (VUJ, narrowest)

**Q4:** What type of urethral injury results from a pelvic fracture?
> Posterior urethral injury (membranous urethra torn from urogenital diaphragm)

**Q5:** In straddle injury, where does urine extravasate?
> Superficial perineal pouch (Colles fascia) → scrotum, penis, anterior abdominal wall (NOT thighs)

**Q6:** What nerve contracts the detrusor muscle for micturition?
> Parasympathetic S2, S3, S4 (pelvic splanchnic nerves)

**Q7:** What is the prostatic utricle a homologue of?
> Uterus and vagina in the female (Mullerian duct remnant)

**Q8:** Why is UTI more common in females?
> Short urethra (4 cm), straight course, proximity to vaginal and anal openings`,
        mnemonics: [], keyPoints: ["8 recall questions covering male/female urethra, bladder anatomy, injuries, and embryology"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 26", edition: "8th" }] },
    ],
  },

  // ─── Topic 5: Perineum ────────────────────────────────────
  {
    topicCode: "AN-MOD-05-TOP-05",
    layers: [
      { layer: 1, slug: "perineum-foundation", title: "Perineum - Foundation", estimatedMinutes: 20,
        summary: "The perineum is the diamond-shaped area below the pelvic diaphragm, divided by the transverse perineal line into the urogenital triangle (anterior) and the anal triangle (posterior).",
        contentMd: `# Perineum

## Definition and Boundaries
The perineum is the region below the pelvic diaphragm (levator ani), bounded by the pelvic outlet.

### Boundaries (Diamond-shaped)
- **Anteriorly**: Pubic symphysis
- **Posteriorly**: Tip of coccyx
- **Anterolaterally**: Inferior pubic rami + ischial rami
- **Posterolaterally**: Sacrotuberous ligaments
- **Laterally**: Ischial tuberosities

## Division into Two Triangles
An imaginary **transverse perineal line** between the two ischial tuberosities divides the perineum into:

| Triangle | Location | Contents |
|----------|----------|----------|
| Urogenital (UG) triangle | Anterior | External genitalia, urethra, perineal muscles, perineal pouches |
| Anal triangle | Posterior | Anal canal, ischiorectal fossae, external anal sphincter |

## Urogenital Triangle

### Perineal Membrane (Inferior Fascia of UG Diaphragm)
- Strong triangular fascial sheet
- Spans between the two ischiopubic rami
- Pierced by urethra (and vagina in females)

### Superficial Perineal Pouch (Space)
Between **Colles fascia** (superficial) and **perineal membrane** (deep).

**Contents in Males:**
| Structure | Function |
|-----------|----------|
| Root of penis (2 crura + bulb) | Erectile tissue |
| Ischiocavernosus muscle | Covers crura, maintains erection |
| Bulbospongiosus muscle | Covers bulb, aids in ejaculation and micturition |
| Superficial transverse perineal muscle | Supports perineal body |
| Branches of internal pudendal artery | Blood supply |
| Pudendal nerve branches | Innervation |

**Contents in Females:**
- Clitoris (2 crura + glans), vestibular bulbs
- Greater vestibular (Bartholin) glands
- Same 3 muscles as in males (modified)

### Deep Perineal Pouch (Space)
Between **perineal membrane** (inferior) and **superior fascia of UG diaphragm**.

**Contents:**
- External urethral sphincter (rhabdosphincter)
- Deep transverse perineal muscle
- Internal pudendal vessels and dorsal nerve of penis/clitoris
- Bulbourethral glands (of Cowper) in males
- Membranous urethra passes through this space

## Anal Triangle

### Anal Canal
- **Length**: ~4 cm (from anorectal junction to anus)
- **Pectinate (dentate) line**: Important landmark at the level of anal valves

| Feature | Above Pectinate Line | Below Pectinate Line |
|---------|---------------------|---------------------|
| Epithelium | Columnar | Stratified squamous |
| Arterial supply | Superior rectal (IMA) | Inferior rectal (internal pudendal) |
| Venous drainage | Superior rectal → portal | Inferior rectal → systemic (IVC) |
| Lymph drainage | Internal iliac nodes | Superficial inguinal nodes |
| Nerve supply | Autonomic (painless) | Somatic/pudendal (PAINFUL) |
| Embryological origin | Hindgut (endoderm) | Proctodeum (ectoderm) |

### External Anal Sphincter
- **Voluntary** (skeletal muscle)
- Supplied by **inferior rectal nerve** (branch of pudendal, S2,3,4)
- 3 parts: Subcutaneous, Superficial, Deep

### Internal Anal Sphincter
- **Involuntary** (smooth muscle - thickened circular muscle coat of rectum)
- Tonically contracted (maintains ~70% of resting anal tone)
- Sympathetic supply maintains contraction

## Perineal Body (Central Perineal Tendon)
- **Location**: Midpoint between anus and vagina (female) or bulb of penis (male)
- Fibromuscular node where multiple muscles converge:
  - Bulbospongiosus
  - External anal sphincter
  - Superficial and deep transverse perineal muscles
  - Levator ani (pubococcygeus)
  - External urethral sphincter fibers
- **Key support structure** - damage during childbirth leads to perineal tear and prolapse`,
        mnemonics: [
          { text: "PAID S for pectinate line: above = Portal, Autonomic, Internal iliac, Dull pain; below = Systemic, Somatic, Superficial inguinal, Sharp pain", explanation: "Above pectinate: Portal venous drainage, Autonomic nerve supply (painless), Internal iliac lymph nodes. Below pectinate: Systemic venous drainage, Somatic (pudendal) nerve supply (painful), Superficial inguinal lymph nodes." },
          { text: "BIS for superficial perineal pouch muscles", explanation: "Bulbospongiosus, Ischiocavernosus, Superficial transverse perineal - the 3 muscles in the superficial perineal pouch" }
        ],
        keyPoints: [
          "Perineum divided into UG triangle (anterior) and anal triangle (posterior) by transverse perineal line",
          "Pectinate line: crucial landmark separating different blood supply, lymph drainage, nerve supply, and embryology",
          "Above pectinate: portal drainage, autonomic (painless); Below: systemic, somatic (painful)",
          "Perineal body: fibromuscular node where 8+ muscles converge - key support structure",
          "External anal sphincter: voluntary, pudendal nerve (S2,3,4)",
          "Internal anal sphincter provides 70% of resting anal tone"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 27-28", edition: "8th" }] },

      { layer: 2, slug: "perineum-mechanism", title: "Perineum - Mechanism", estimatedMinutes: 30,
        summary: "Detailed anatomy of the ischiorectal (ischioanal) fossa, pudendal canal, pudendal nerve course and branches, perineal fasciae, and mechanism of anal continence.",
        contentMd: `# Perineum - Detailed Anatomy

## Ischiorectal (Ischioanal) Fossa
A wedge-shaped fat-filled space on each side of the anal canal.

### Boundaries
| Wall | Structure |
|------|-----------|
| Medial (superomedial) | Levator ani muscle, external anal sphincter below it |
| Lateral (superolateral) | Obturator internus fascia (pudendal canal is in this wall) |
| Posterior | Sacrotuberous ligament, gluteus maximus |
| Anterior | Posterior aspect of UG diaphragm |
| Floor/Base | Skin of anal region |
| Roof/Apex | Meeting point of levator ani and obturator internus |

### Contents
- Fat (supports anal canal, allows expansion during defecation)
- Inferior rectal nerve and vessels
- Perineal branch of S4
- Posterior scrotal/labial nerves

### Extensions
- **Anterior recess**: Above perineal membrane, behind pubic symphysis
- **Posterior recess**: Deep to gluteus maximus, above sacrotuberous ligament
- **Horseshoe abscess**: Infection spreading from one fossa to the other behind the anal canal (through the deep postanal space, below anococcygeal raphe)

## Pudendal Canal (Alcock Canal)
- **Location**: Within the obturator internus fascia on the lateral wall of the ischiorectal fossa
- Runs from lesser sciatic foramen to the perineum
- Contains the **pudendal nerve** (S2,3,4) and **internal pudendal vessels**

## Pudendal Nerve (S2, S3, S4) - The Nerve of the Perineum

### Course
1. Exits pelvis through **greater sciatic foramen** (below piriformis)
2. Crosses ischial spine (landmark for pudendal nerve block)
3. Enters perineum through **lesser sciatic foramen**
4. Travels in **pudendal (Alcock) canal** on lateral wall of ischiorectal fossa

### Branches (in order)
| Branch | Supplies | Clinical |
|--------|----------|----------|
| Inferior rectal nerve | External anal sphincter, perianal skin | Fecal continence |
| Perineal nerve | Superficial perineal muscles, scrotal/labial skin | Perineal sensation |
| Dorsal nerve of penis/clitoris | Skin of penis/clitoris (sensory) | Deep to perineal membrane |

## Perineal Fasciae

### Colles Fascia (Superficial Perineal Fascia)
- Membranous layer of superficial fascia in the perineum
- **Continuous with**: Scarpa fascia of anterior abdominal wall, Dartos of scrotum, fascia of penis
- **Attachments**:
  - Laterally: Ischiopubic rami
  - Posteriorly: Posterior border of perineal membrane + perineal body
  - Does NOT extend into anal triangle or thigh
- Determines spread of urine extravasation in anterior urethral injury

### Buck Fascia (Deep Fascia of Penis)
- Covers the erectile bodies individually
- Limits extravasation within penis in injury to penile urethra

## Mechanism of Anal Continence

### At Rest (70% from internal sphincter)
- Internal anal sphincter: Tonic contraction via sympathetic nerves
- Puborectalis: Maintains anorectal angle (80-90 degrees)

### Voluntary Continence
- External anal sphincter: Pudendal nerve (S2,3,4)
- Puborectalis: Pulls anorectal junction forward (creates a flap valve)

### Defecation
1. Stretch receptors in rectal wall detect distension
2. Parasympathetic (S2-4): Relaxation of internal sphincter (rectoanal inhibitory reflex)
3. Voluntary relaxation of external sphincter and puborectalis
4. Anorectal angle straightens (from 80 to 130 degrees)
5. Increased intra-abdominal pressure (Valsalva) aids expulsion

> **Clinical Pearl**: The puborectalis sling creates the anorectal angle, which acts as a flap valve. This is the most important mechanism for gross fecal continence. Damage to puborectalis (e.g., obstetric injury, surgery) leads to severe fecal incontinence.`,
        mnemonics: [
          { text: "S2 S3 S4 keeps the guts off the floor and wipes the pee off the floor", explanation: "Pudendal nerve (S2,3,4) supplies pelvic floor (levator ani), external anal sphincter, external urethral sphincter, and perineal muscles. It is the nerve of the perineum." },
          { text: "I.P.D for pudendal nerve branches (order of exit)", explanation: "Inferior rectal nerve (first branch), Perineal nerve (muscles and skin), Dorsal nerve of penis/clitoris (terminal branch). Given in order of branching from pudendal canal." }
        ],
        keyPoints: [
          "Ischiorectal fossa: wedge-shaped, fat-filled, between levator ani and obturator internus",
          "Pudendal canal (Alcock canal) is in the lateral wall of ischiorectal fossa",
          "Pudendal nerve: exits greater sciatic foramen, crosses ischial spine, enters via lesser sciatic foramen",
          "Pudendal nerve branches: inferior rectal → perineal → dorsal nerve of penis/clitoris",
          "Puborectalis maintains anorectal angle (most important mechanism for fecal continence)",
          "Colles fascia determines the spread pattern of urine extravasation in anterior urethral injuries"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 27-28", edition: "8th" }] },

      { layer: 3, slug: "perineum-clinical", title: "Perineum - Clinical", estimatedMinutes: 20,
        summary: "Clinical anatomy of ischiorectal abscess, hemorrhoids, anal fissure, episiotomy, pudendal nerve block, and perineal tears.",
        contentMd: `# Clinical Correlations

## Ischiorectal Abscess
- Most common type of perianal abscess
- Arises from infection of anal glands (cryptoglandular theory)
- Fat in ischiorectal fossa is poorly vascularized → prone to infection
- **Horseshoe abscess**: Spreads from one ischiorectal fossa to the other through the deep postanal space (behind anal canal, below anococcygeal raphe)
- Treatment: Incision and drainage; may require seton for fistula

## Hemorrhoids (Piles)

### Internal Hemorrhoids (Above Pectinate Line)
- Varicosities of **superior rectal venous plexus**
- **Positions**: 3, 7, 11 o'clock (in lithotomy position)
- Painless (autonomic nerve supply above pectinate line)
- Present with painless bleeding per rectum
- Grading: I (bleeding only), II (prolapse reduces spontaneously), III (manual reduction), IV (irreducible)

### External Hemorrhoids (Below Pectinate Line)
- Varicosities of **inferior rectal venous plexus**
- **Painful** (somatic nerve supply by pudendal nerve)
- Thrombosed external hemorrhoid: Acute, tender, bluish perianal swelling

> **Clinical Pearl**: Internal hemorrhoids are at 3, 7, and 11 o'clock positions corresponding to the terminal branches of the superior rectal artery. They are painless because they arise above the pectinate line (autonomic innervation). External hemorrhoids are painful (somatic innervation below pectinate line).

## Anal Fissure
- Longitudinal tear in the anal mucosa below the pectinate line
- Most common site: **6 o'clock position (posterior midline)** - poorest blood supply
- Extremely painful (somatic nerve supply below pectinate line)
- Causes spasm of internal sphincter → creates a vicious cycle of pain and spasm
- Treatment: GTN ointment, diltiazem, botulinum toxin, lateral internal sphincterotomy

## Episiotomy
- Surgical incision of the perineum during childbirth
- **Mediolateral episiotomy** (preferred in India): From midline of fourchette, directed posterolaterally
  - Cuts: Vaginal epithelium, perineal skin, bulbospongiosus, superficial and deep transverse perineal muscles
  - Avoids the external anal sphincter
- **Median episiotomy**: Midline incision - risk of extending to anal sphincter (3rd/4th degree tear)

## Perineal Tears During Childbirth

| Degree | Structures Involved |
|--------|-------------------|
| 1st | Perineal skin + vaginal mucosa only |
| 2nd | Perineal muscles (but NOT anal sphincter) |
| 3rd | External anal sphincter torn (partial or complete) |
| 3a | < 50% external sphincter |
| 3b | > 50% external sphincter |
| 3c | Internal sphincter also torn |
| 4th | Anal sphincter + rectal mucosa torn |

## Pudendal Nerve Block
- **Indication**: Pain relief during second stage of labor, episiotomy
- **Technique**: Transvaginal approach, needle directed toward ischial spine
- **Landmark**: Ischial spine (palpated through vagina)
- Blocks: Inferior rectal, perineal, and dorsal nerve of clitoris
- Anesthetizes the entire perineum

## Anal Fistula
- Abnormal communication between anal canal and perianal skin
- **Goodsall rule**: Posterior fistulae have curved tracks opening at 6 o'clock midline; anterior fistulae open radially
- Treatment: Fistulotomy, seton placement, LIFT procedure`,
        mnemonics: [
          { text: "3-7-11 for internal hemorrhoid positions", explanation: "Internal hemorrhoids occur at 3, 7, and 11 o'clock positions (in lithotomy position), corresponding to the 3 terminal branches of the superior rectal artery" },
          { text: "6 o'clock = Fissure at the back", explanation: "Posterior midline (6 o'clock in lithotomy) is the most common site for anal fissure due to poorest blood supply from the inferior rectal artery" }
        ],
        keyPoints: [
          "Internal hemorrhoids: 3, 7, 11 o'clock, painless, above pectinate line",
          "Anal fissure: posterior midline (6 o'clock), extremely painful, below pectinate line",
          "Mediolateral episiotomy preferred in India - avoids external anal sphincter",
          "4th degree perineal tear involves rectal mucosa",
          "Pudendal nerve block at ischial spine - blocks entire perineum"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 27-28", edition: "8th" }] },

      { layer: 4, slug: "perineum-exam", title: "Perineum - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG points on perineum anatomy.",
        contentMd: `# Exam High Yield

## One-Liner Table

| Question | Answer |
|----------|--------|
| Perineum divided into 2 triangles by | **Transverse perineal line (between ischial tuberosities)** |
| Anterior triangle of perineum | **Urogenital triangle** |
| Posterior triangle of perineum | **Anal triangle** |
| Main nerve of the perineum | **Pudendal nerve (S2, S3, S4)** |
| Landmark for pudendal nerve block | **Ischial spine** |
| Pudendal canal (Alcock canal) location | **Lateral wall of ischiorectal fossa (in obturator internus fascia)** |
| Branches of pudendal nerve (in order) | **Inferior rectal → Perineal → Dorsal nerve of penis/clitoris** |
| Most important muscle for fecal continence | **Puborectalis** (anorectal angle) |
| Resting anal tone maintained mainly by | **Internal anal sphincter (70%)** |
| External anal sphincter nerve | **Inferior rectal nerve (branch of pudendal, S2,3,4)** |
| Positions of internal hemorrhoids | **3, 7, 11 o'clock (lithotomy position)** |
| Most common site of anal fissure | **Posterior midline (6 o'clock)** |
| Above pectinate line: venous drainage to | **Portal system (via superior rectal vein)** |
| Below pectinate line: venous drainage to | **Systemic (via inferior rectal vein → IVC)** |
| Above pectinate line: lymph drainage to | **Internal iliac nodes** |
| Below pectinate line: lymph drainage to | **Superficial inguinal nodes** |
| Perineal body location | **Midpoint between anus and vagina (female) / bulb of penis (male)** |
| 4th degree perineal tear involves | **Anal sphincter + rectal mucosa** |
| Colles fascia continuous with | **Scarpa fascia of anterior abdominal wall** |
| Horseshoe abscess spreads through | **Deep postanal space** |
| Content of superficial perineal pouch (muscles) | **Bulbospongiosus, Ischiocavernosus, Superficial transverse perineal** |
| Bulbourethral glands (Cowper) located in | **Deep perineal pouch** |
| Greater vestibular (Bartholin) glands located in | **Superficial perineal pouch** |

## Comparison: Above vs Below Pectinate Line

| Feature | Above | Below |
|---------|-------|-------|
| Epithelium | Columnar | Squamous |
| Artery | Superior rectal (IMA) | Inferior rectal (pudendal) |
| Vein | Superior rectal (Portal) | Inferior rectal (Systemic) |
| Lymph | Internal iliac | Superficial inguinal |
| Nerve | Autonomic (painless) | Somatic (painful) |
| Embryology | Hindgut (endoderm) | Proctodeum (ectoderm) |
| Hemorrhoids | Internal (painless) | External (painful) |`,
        mnemonics: [
          { text: "Above pectinate = PAIN-less (Autonomic); Below pectinate = PAIN-ful (Somatic/pudendal)", explanation: "The key differentiator: above pectinate line has autonomic innervation (visceral, painless), below has somatic innervation from pudendal nerve (sharp, well-localized pain)" },
          { text: "Cowper = Deep; Bartholin = Superficial (CBD - Cowper Below Deep)", explanation: "Cowper (bulbourethral) glands are in the deep perineal pouch. Bartholin (greater vestibular) glands are in the superficial perineal pouch." }
        ],
        keyPoints: [
          "Pectinate line is the most important landmark in the perineum",
          "Pudendal nerve (S2,3,4): main nerve of perineum, blocked at ischial spine",
          "Internal hemorrhoids: 3-7-11, painless; Fissure: 6 o'clock, painful",
          "Puborectalis = most important for fecal continence (anorectal angle)",
          "Cowper glands in deep pouch; Bartholin glands in superficial pouch"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 27-28", edition: "8th" }] },

      { layer: 5, slug: "perineum-recall", title: "Perineum - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for perineum anatomy.",
        contentMd: `# Active Recall

**Q1:** What divides the perineum into urogenital and anal triangles?
> Transverse perineal line (between the two ischial tuberosities)

**Q2:** Name the 3 branches of the pudendal nerve in order.
> Inferior rectal nerve, Perineal nerve, Dorsal nerve of penis/clitoris

**Q3:** At what positions do internal hemorrhoids occur?
> 3, 7, and 11 o'clock in lithotomy position

**Q4:** What is the most common site of anal fissure?
> Posterior midline (6 o'clock in lithotomy position) - poorest blood supply

**Q5:** Where is the pudendal canal (Alcock canal) located?
> In the obturator internus fascia on the lateral wall of the ischiorectal fossa

**Q6:** What is the difference in venous drainage above and below the pectinate line?
> Above: Superior rectal vein → portal system. Below: Inferior rectal vein → systemic (IVC)

**Q7:** What structure maintains the anorectal angle for fecal continence?
> Puborectalis muscle (part of levator ani) - maintains angle at 80-90 degrees

**Q8:** What structures are cut in a mediolateral episiotomy?
> Vaginal mucosa, perineal skin, bulbospongiosus, superficial and deep transverse perineal muscles (avoids external anal sphincter)`,
        mnemonics: [], keyPoints: ["8 recall questions covering perineal triangles, pudendal nerve, hemorrhoids, fissure, and anal continence"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Lower Limb & Abdomen - Vol 2, Ch 27-28", edition: "8th" }] },
    ],
  },
];
