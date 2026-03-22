// 5-layer lessons for all Embryology topics (Module AN-MOD-10)
import type { TopicLessons } from "./content-loader";

export const embryologyLessons: TopicLessons[] = [
  // ─── Topic 1: Gametogenesis & Fertilization ─────────────────
  {
    topicCode: "AN-MOD-10-TOP-01",
    layers: [
      { layer: 1, slug: "gametogenesis-fertilization-foundation", title: "Gametogenesis & Fertilization - Foundation", estimatedMinutes: 20,
        summary: "Gametogenesis is the process of forming mature gametes (sperm and ova) through meiosis. Fertilization is the union of sperm and ovum, normally occurring in the ampulla of the uterine tube.",
        contentMd: `# Gametogenesis & Fertilization

## Spermatogenesis
- Occurs in the **seminiferous tubules** of the testis
- Begins at **puberty**, continues throughout life
- Duration: approximately **74 days** (64 days spermatogenesis + 10 days epididymal transit)
- Sequence: Spermatogonium (2n) → Primary spermatocyte (2n) → Secondary spermatocyte (n) → Spermatid (n) → Spermatozoon (n)
- **Sertoli cells**: Provide nutritional and structural support, form blood-testis barrier
- **Leydig cells**: Produce testosterone (interstitial cells)

## Oogenesis
- Begins during **fetal life** (3rd month of intrauterine life)
- Primary oocytes are arrested in **Prophase I (Dictyotene stage)** from birth until ovulation
- At ovulation: Primary oocyte completes Meiosis I → Secondary oocyte + 1st polar body
- Secondary oocyte is arrested in **Metaphase II** until fertilization
- Meiosis II completed only after sperm penetration
- Total ova at birth: ~2 million; at puberty: ~40,000; ovulated in lifetime: ~400

## Sperm Structure
- **Head**: Acrosome (enzymes) + Nucleus (DNA)
- **Neck**: Connecting piece with centriole
- **Middle piece**: Mitochondrial sheath (energy)
- **Tail (Principal piece)**: Flagellum for motility

## Capacitation
- Functional maturation of sperm in the **female reproductive tract**
- Takes approximately **7 hours**
- Removal of glycoprotein coat and cholesterol from sperm membrane
- Sperm becomes hyperactive with whiplash motility
- Occurs in the **uterus and uterine tube**

## Acrosome Reaction
- Release of acrosomal enzymes when sperm contacts **zona pellucida**
- Key enzymes: **Acrosin** (penetrates zona pellucida), Hyaluronidase (disperses corona radiata)
- Triggered by binding to **ZP3 glycoprotein** on zona pellucida

## Fertilization
- **Site**: Ampulla of the uterine tube (most common)
- **Time**: Within 24 hours of ovulation
- Steps:
  1. Sperm passes through corona radiata (hyaluronidase)
  2. Sperm binds ZP3 on zona pellucida → acrosome reaction
  3. Sperm penetrates zona pellucida (acrosin)
  4. Sperm-oocyte membrane fusion
  5. **Cortical reaction** → zona reaction (blocks polyspermy)
  6. Completion of Meiosis II → female pronucleus
  7. Formation of male pronucleus
  8. Fusion of pronuclei (syngamy) → Zygote (2n)

## Results of Fertilization
- Restoration of diploid number (46 chromosomes)
- Determination of sex (XX or XY)
- Initiation of cleavage
- Metabolic activation of the ovum`,
        mnemonics: [
          { text: "SCAM for fertilization steps", explanation: "Sperm capacitation → Corona radiata penetration → Acrosome reaction at zona → Membrane fusion and cortical reaction" },
          { text: "Primary oocyte: DICTATOR waits", explanation: "Dictyotene stage arrest of primary oocyte — waits from birth till ovulation, like a dictator who pauses before acting" }
        ],
        keyPoints: [
          "Spermatogenesis takes 74 days, begins at puberty, continuous throughout life",
          "Oogenesis begins in fetal life; primary oocyte arrested in Prophase I (Dictyotene)",
          "Secondary oocyte arrested in Metaphase II, completed only after sperm penetration",
          "Capacitation occurs in female reproductive tract over ~7 hours",
          "Fertilization occurs in ampulla of uterine tube within 24 hours of ovulation",
          "Cortical reaction prevents polyspermy",
          "ZP3 glycoprotein triggers acrosome reaction"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 2 - Gametogenesis", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 3", edition: "8th" }
        ] },
      { layer: 2, slug: "gametogenesis-fertilization-mechanism", title: "Gametogenesis & Fertilization - Mechanism", estimatedMinutes: 30,
        summary: "Detailed molecular mechanisms of meiotic divisions in gametogenesis, sperm-zona binding, cortical granule exocytosis, and the signaling cascades that prevent polyspermy.",
        contentMd: `# Detailed Mechanisms

## Meiosis in Gametogenesis

### Spermatogenesis vs Oogenesis

| Feature | Spermatogenesis | Oogenesis |
|---------|----------------|-----------|
| Onset | Puberty | Fetal life (3rd month IUL) |
| Duration | Continuous (74 days/cycle) | Discontinuous (decades) |
| End products | 4 spermatozoa per primary spermatocyte | 1 ovum + 3 polar bodies |
| Arrest | No arrest | Prophase I (birth), Metaphase II (ovulation) |
| Completion | Completed in testis | Completed only after fertilization |
| Size | Small, motile | Large, non-motile |
| Cytoplasm | Minimal | Abundant (nutrients for embryo) |

## Stages of Spermatogenesis (Detailed)
1. **Spermatocytogenesis**: Spermatogonia (type A, B) → Primary spermatocyte (mitosis)
2. **Meiosis I**: Primary spermatocyte → 2 Secondary spermatocytes (crossing over occurs)
3. **Meiosis II**: Secondary spermatocyte → 2 Spermatids (haploid)
4. **Spermiogenesis**: Spermatid → Spermatozoon (no division, only morphological transformation)
   - Golgi phase → Cap phase → Acrosome phase → Maturation phase
   - Acrosome from Golgi apparatus
   - Flagellum from distal centriole
   - Mitochondria arrange as spiral sheath

## Hormonal Control of Spermatogenesis
- **FSH** → acts on Sertoli cells → ABP (Androgen Binding Protein) + Inhibin
- **LH** → acts on Leydig cells → Testosterone
- Testosterone + ABP maintain high local concentration for spermatogenesis
- **Inhibin** → negative feedback on FSH

## Molecular Mechanism of Fertilization

### Zona Pellucida Glycoproteins
| Glycoprotein | Function |
|-------------|----------|
| ZP1 | Cross-links ZP2 and ZP3 (structural) |
| ZP2 | Secondary sperm receptor (binds inner acrosomal membrane) |
| ZP3 | Primary sperm receptor (triggers acrosome reaction) |
| ZP4 | Sperm binding (recently identified) |

### Cortical Reaction (Block to Polyspermy)
1. Sperm-oocyte fusion → calcium wave in oocyte cytoplasm
2. Cortical granules release enzymes by exocytosis
3. **ZP3 modification** → no longer binds sperm (zona reaction)
4. **ZP2 cleavage** → zona hardens (slow block)
5. Fast block: membrane depolarization (transient)

### Pronucleus Formation
- Female pronucleus: completion of Meiosis II after sperm entry
- Male pronucleus: sperm nucleus decondenses, protamines replaced by histones
- Both pronuclei replicate DNA (S phase)
- Pronuclei approach each other → nuclear envelopes break down → **Syngamy**
- First mitotic division begins → 2-cell stage (cleavage)

## Cross-link: Biochemistry
- Ca2+ signaling via **IP3 pathway** triggers cortical reaction
- **PLC-zeta** (from sperm) activates the calcium oscillations
- Zona pellucida is composed of sulfated glycoproteins synthesized by the oocyte`,
        mnemonics: [
          { text: "Spermiogenesis: Go-CAM (Golgi-Cap-Acrosome-Maturation)", explanation: "The 4 phases of spermiogenesis: Golgi phase, Cap phase, Acrosome phase, Maturation phase — transforms spermatid into spermatozoon" },
          { text: "FSH-Sertoli, LH-Leydig (FS-LL)", explanation: "FSH acts on Sertoli cells (both have S), LH acts on Leydig cells (both have L)" }
        ],
        keyPoints: [
          "Spermatogenesis produces 4 spermatozoa; oogenesis produces 1 ovum + 3 polar bodies",
          "Spermiogenesis has 4 phases: Golgi, Cap, Acrosome, Maturation (no cell division)",
          "ZP3 is the primary sperm receptor triggering acrosome reaction",
          "Cortical reaction causes zona hardening to block polyspermy",
          "PLC-zeta from sperm triggers calcium oscillations in oocyte",
          "FSH acts on Sertoli cells; LH acts on Leydig cells"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 2-3", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 3", edition: "8th" }
        ] },
      { layer: 3, slug: "gametogenesis-fertilization-clinical", title: "Gametogenesis & Fertilization - Clinical", estimatedMinutes: 20,
        summary: "Clinical correlations of gametogenesis and fertilization defects including infertility, ectopic pregnancy, IVF techniques, and errors in meiosis leading to chromosomal abnormalities.",
        contentMd: `# Clinical Correlations

## Infertility — Indian Context
- Affects approximately **15% of Indian couples**
- Male factors account for ~40% of cases
- **Oligospermia**: <15 million sperm/mL (WHO 2010)
- **Azoospermia**: No sperm in ejaculate
- **Asthenospermia**: Reduced motility (<40% total motility)
- Normal semen analysis (WHO): Volume >1.5 mL, Count >15 million/mL, Motility >40%, Morphology >4% normal forms

## Assisted Reproductive Technologies (ART)
- **IVF (In Vitro Fertilization)**: Oocyte and sperm united outside the body; embryo transferred to uterus
- **ICSI (Intracytoplasmic Sperm Injection)**: Single sperm injected directly into oocyte; used in severe male factor infertility
- **IUI (Intrauterine Insemination)**: Washed sperm placed directly in uterus
- India is a major hub for ART — ART (Regulation) Act 2021 governs surrogacy and ART clinics

## Ectopic Fertilization/Implantation
- Fertilization normally in ampulla; implantation outside uterus = **ectopic pregnancy**
- Most common site: **Ampulla of uterine tube** (70%)
- Risk factors: PID (Pelvic Inflammatory Disease), previous tubal surgery, endometriosis
- Presents with: amenorrhea, abdominal pain, vaginal bleeding, positive pregnancy test
- Ruptured ectopic is a **surgical emergency** — common cause of maternal mortality in India

## Errors in Meiosis → Chromosomal Anomalies
| Condition | Chromosomal Basis | Clinical Features |
|-----------|------------------|-------------------|
| Down syndrome | Trisomy 21 (non-disjunction) | Intellectual disability, flat face, simian crease |
| Turner syndrome | 45,X (monosomy X) | Short stature, webbed neck, coarctation of aorta |
| Klinefelter syndrome | 47,XXY | Tall, gynecomastia, infertility |
| Patau syndrome | Trisomy 13 | Cleft lip/palate, polydactyly, holoprosencephaly |
| Edwards syndrome | Trisomy 18 | Clenched fists, rocker-bottom feet, VSD |

> **Clinical Pearl**: Risk of Down syndrome increases with maternal age (1 in 25 at age 45). Prenatal screening includes Triple test/Quadruple test and amniocentesis.

## Hydatidiform Mole
- **Complete mole**: 46,XX (all paternal) — empty ovum fertilized by sperm that duplicates; no fetal tissue; risk of choriocarcinoma
- **Partial mole**: 69,XXY (triploid) — two sperm fertilize one ovum; fetal tissue present
- Presents with: grape-like vesicles, high beta-hCG, snowstorm appearance on USG

## Consanguinity and Genetic Risk
- Consanguineous marriages are prevalent in parts of India (South India, certain communities)
- Increased risk of autosomal recessive disorders
- Genetic counseling is essential in consanguineous families`,
        mnemonics: [
          { text: "ECTOPIC risk: STEP UP", explanation: "Surgery (tubal), Tobacco, Endometriosis, PID, Use of IUD, Previous ectopic" },
          { text: "Edwards = E-18 (E is the 18th... no, E=clenched fists at 18)", explanation: "Edwards syndrome = Trisomy 18; remember E-18 and clenched fist deformity" }
        ],
        keyPoints: [
          "Most common site of ectopic pregnancy: ampulla of uterine tube",
          "Non-disjunction during meiosis causes trisomies (Down, Edwards, Patau)",
          "Down syndrome risk increases with maternal age",
          "Complete hydatidiform mole is 46,XX (all paternal origin) with risk of choriocarcinoma",
          "ICSI is used for severe male factor infertility",
          "Consanguinity increases autosomal recessive disorder risk — relevant in Indian context"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 3-4", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 3", edition: "8th" }
        ] },
      { layer: 4, slug: "gametogenesis-fertilization-exam", title: "Gametogenesis & Fertilization - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield facts and frequently tested MCQ themes on gametogenesis and fertilization for NEXT and NEET PG examinations.",
        contentMd: `# Exam High Yield

## One-Liners
- Site of fertilization: **Ampulla of uterine tube**
- Primary oocyte arrested at: **Prophase I (Dictyotene stage)**
- Secondary oocyte arrested at: **Metaphase II**
- Meiosis II of oocyte completed: **After sperm penetration**
- Duration of spermatogenesis: **74 days**
- Capacitation occurs in: **Female reproductive tract (uterus/tube)**
- Acrosome reaction triggered by: **ZP3 glycoprotein**
- Block to polyspermy: **Cortical reaction (zona reaction)**
- Spermiogenesis is: **Transformation of spermatid to spermatozoon (NO cell division)**
- Number of ova ovulated in lifetime: **~400**
- Sertoli cells produce: **ABP, Inhibin, AMH**
- Leydig cells produce: **Testosterone**

## Comparison Table: Complete vs Partial Mole

| Feature | Complete Mole | Partial Mole |
|---------|--------------|--------------|
| Karyotype | 46,XX (all paternal) | 69,XXY (triploid) |
| Fetal tissue | Absent | Present |
| Uterine size | Large for dates | Small for dates |
| beta-hCG | Very high | Less elevated |
| Malignancy risk | 15-20% choriocarcinoma | <5% |
| USG | Snowstorm pattern | — |

## Previous Year Themes
- Arrest stages of oocyte (asked repeatedly in NEET PG and university exams)
- Site of fertilization — ampulla vs isthmus (commonly confused)
- ZP3 vs ZP2 — primary vs secondary receptor
- Chromosomal basis of trisomies
- Spermiogenesis vs spermatogenesis (difference)
- Capacitation — where it occurs and what changes

## Pattern Recognition
- Question about "first meiotic arrest" → **Dictyotene (Prophase I)**
- Question about "completed only after fertilization" → **Meiosis II of oocyte**
- Question about "no cell division but morphological change" → **Spermiogenesis**
- Question about "grape-like vesicles + high hCG" → **Hydatidiform mole**
- Question about "all chromosomes paternal" → **Complete mole**`,
        mnemonics: [
          { text: "DIM arrest: Dictyotene In Metaphase", explanation: "Primary oocyte in Dictyotene (Prophase I); Secondary oocyte In Metaphase II — DIM reminds you of the two arrest points" },
          { text: "Complete mole = Complete paternal (CP)", explanation: "Complete mole has only Complete Paternal chromosomes (46,XX all from father)" }
        ],
        keyPoints: [
          "Primary oocyte arrested in Dictyotene (Prophase I); secondary oocyte in Metaphase II",
          "Fertilization occurs in ampulla of uterine tube",
          "ZP3 is the primary sperm receptor",
          "Spermiogenesis involves NO cell division",
          "Complete mole is 46,XX (all paternal), high choriocarcinoma risk"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 2-4", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 3", edition: "8th" }
        ] },
      { layer: 5, slug: "gametogenesis-fertilization-recall", title: "Gametogenesis & Fertilization - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards and rapid-fire Q&A covering gametogenesis, capacitation, acrosome reaction, and fertilization.",
        contentMd: `# Active Recall

**Q1:** At what stage is the primary oocyte arrested from birth?
> Prophase I (Dictyotene stage)

**Q2:** At what stage is the secondary oocyte arrested?
> Metaphase II (completed only after sperm penetration)

**Q3:** Where does fertilization normally occur?
> Ampulla of the uterine tube

**Q4:** What is the duration of spermatogenesis?
> 74 days (64 days spermatogenesis + 10 days epididymal transit)

**Q5:** What triggers the acrosome reaction?
> ZP3 glycoprotein on the zona pellucida

**Q6:** What prevents polyspermy?
> Cortical reaction (cortical granule exocytosis → zona reaction/hardening)

**Q7:** What is the difference between spermatogenesis and spermiogenesis?
> Spermatogenesis: entire process of sperm formation (includes meiosis). Spermiogenesis: morphological transformation of spermatid to spermatozoon (NO cell division)

**Q8:** Where does capacitation occur?
> Female reproductive tract (uterus and uterine tube), takes ~7 hours

**Q9:** How many functional gametes are produced from one primary spermatocyte vs one primary oocyte?
> Spermatocyte → 4 spermatozoa; Oocyte → 1 ovum + 3 polar bodies

**Q10:** What is the karyotype of a complete hydatidiform mole?
> 46,XX — all chromosomes of paternal origin

**Q11:** What do Sertoli cells produce?
> ABP (Androgen Binding Protein), Inhibin, AMH (Anti-Mullerian Hormone)

**Q12:** What is the most common site of ectopic pregnancy?
> Ampulla of the uterine tube (70%)`,
        mnemonics: [],
        keyPoints: ["12 recall questions covering gametogenesis, fertilization, and clinical correlations"],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 2-4", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 3", edition: "8th" }
        ] },
    ],
  },

  // ─── Topic 2: Implantation & Placenta ───────────────────────
  {
    topicCode: "AN-MOD-10-TOP-02",
    layers: [
      { layer: 1, slug: "implantation-placenta-foundation", title: "Implantation & Placenta - Foundation", estimatedMinutes: 20,
        summary: "After fertilization, the zygote undergoes cleavage forming a blastocyst which implants in the posterior wall of the uterus. The placenta develops as a fetomaternal organ for nutrient and gas exchange.",
        contentMd: `# Implantation & Placenta

## From Zygote to Blastocyst
- **Zygote** (Day 1): Single cell after fertilization in ampulla
- **Cleavage** (Days 1-3): Series of mitotic divisions → 2-cell → 4-cell → 8-cell → Morula
  - Cleavage divisions occur as zygote travels through the uterine tube
- **Morula** (Day 3-4): Solid ball of 16 cells; enters uterine cavity
- **Blastocyst** (Day 4-5): Fluid-filled cavity (blastocele) appears
  - **Inner Cell Mass (Embryoblast)**: Forms the embryo
  - **Outer Cell Mass (Trophoblast)**: Forms the placenta and membranes
  - **Blastocele**: Fluid-filled cavity

## Implantation
- **Day 6-7**: Blastocyst attaches to uterine wall (endometrium)
- **Normal site**: Posterior wall of body of uterus (upper part)
- **Implantation window**: Days 20-23 of menstrual cycle (Days 6-9 after ovulation)
- Endometrium at implantation is in the **secretory phase** (under progesterone influence)

### Stages of Implantation
1. **Apposition**: Blastocyst loosely attaches to endometrium
2. **Adhesion**: Trophoblast firmly adheres via integrins and selectins
3. **Invasion**: Trophoblast invades endometrial stroma
   - **Syncytiotrophoblast**: Outer multinucleated mass, invasive, produces hCG
   - **Cytotrophoblast**: Inner layer, distinct cell borders, mitotically active

## Decidual Reaction
- Transformation of endometrial stromal cells under progesterone influence
- **Decidua basalis**: Under the embryo (forms maternal part of placenta)
- **Decidua capsularis**: Overlying the embryo
- **Decidua parietalis**: Rest of the endometrium

## Placenta — Basic Structure
- **Type**: Hemochorial (maternal blood directly bathes fetal trophoblast)
- **Shape**: Discoid, 15-20 cm diameter, 2-3 cm thick, weight ~500 g at term
- **Fetal surface**: Smooth, shiny (covered by amnion), umbilical cord attachment
- **Maternal surface**: Rough, divided into 15-20 cotyledons (lobes)

## Placental Components
- **Fetal part**: Chorion frondosum (derived from trophoblast)
- **Maternal part**: Decidua basalis (derived from endometrium)

## Placental Barrier (at term)
1. Syncytiotrophoblast
2. Cytotrophoblast (disappears by 20 weeks)
3. Basement membrane of trophoblast
4. Connective tissue
5. Basement membrane of fetal capillary
6. Fetal capillary endothelium

## Functions of Placenta
- **Respiratory**: O2 and CO2 exchange
- **Nutritive**: Transfer of glucose, amino acids, fatty acids
- **Excretory**: Removal of fetal waste products
- **Endocrine**: hCG, hPL, estrogen, progesterone
- **Immunological**: Transfer of IgG (passive immunity)
- **Barrier**: Prevents most bacteria (but NOT viruses, Treponema, Toxoplasma)`,
        mnemonics: [
          { text: "BCD for trophoblast layers: B-Blast (cytotrophoblast inside), C-Cyto, D-Dirty sync (syncytio outside)", explanation: "Inner layer is Cytotrophoblast (distinct cells, dividing); Outer layer is Syncytiotrophoblast (no distinct borders, invasive, secretory)" },
          { text: "Implantation on Day SIX: SIX starts with S like Secretory phase", explanation: "Implantation begins on Day 6 in the Secretory phase of the endometrium under progesterone" }
        ],
        keyPoints: [
          "Blastocyst implants on Day 6-7 on the posterior wall of uterus",
          "Implantation window: Days 20-23 of menstrual cycle (secretory phase)",
          "Trophoblast has 2 layers: inner cytotrophoblast and outer syncytiotrophoblast",
          "Syncytiotrophoblast is invasive and produces hCG",
          "Placenta is hemochorial type; fetal part = chorion frondosum, maternal part = decidua basalis",
          "Placental barrier has 6 layers early, reduces to 4 by 20 weeks",
          "Placenta transfers IgG but NOT IgM"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 4-6 (Implantation, Placenta)", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 4-5", edition: "8th" }
        ] },
      { layer: 2, slug: "implantation-placenta-mechanism", title: "Implantation & Placenta - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of trophoblast invasion, villous development, uteroplacental circulation, and the molecular basis of implantation including integrin-selectin interactions.",
        contentMd: `# Detailed Mechanisms

## Molecular Basis of Implantation
- **L-selectin** on trophoblast binds oligosaccharide ligands on endometrium (apposition)
- **Integrins** (alpha-v-beta-3) on endometrium mediate firm adhesion
- **Matrix metalloproteinases (MMPs)** secreted by trophoblast degrade extracellular matrix for invasion
- **LIF (Leukemia Inhibitory Factor)** from endometrium essential for implantation
- **Pinopodes** on endometrial surface indicate receptivity

## Trophoblast Differentiation

### Villous Development Timeline
| Week | Villus Type | Structure |
|------|------------|-----------|
| Week 1-2 | Primary villi | Cytotrophoblast core covered by syncytiotrophoblast |
| Week 3 | Secondary villi | Mesoderm core added |
| Week 3 end | Tertiary villi | Blood vessels form in mesoderm core (vasculogenesis) |

### Chorionic Villi Distribution
- **Chorion frondosum**: Villi facing decidua basalis (persist, form fetal placenta)
- **Chorion laeve**: Villi facing decidua capsularis (degenerate, become smooth)

## Uteroplacental Circulation
- **Maternal blood** enters intervillous space via **spiral arteries** of decidua basalis
- Blood bathes the chorionic villi (exchange surface)
- Blood drains via **endometrial veins**
- At term: ~600 mL/min of maternal blood flows through intervillous space

### Spiral Artery Remodeling
- Extravillous trophoblast invades spiral arteries
- Muscular and elastic tissue replaced by fibrinoid material
- Arteries become **low-resistance, high-flow** vessels
- **Failure of spiral artery remodeling** → Pre-eclampsia

## Placental Hormones

| Hormone | Source | Function |
|---------|--------|----------|
| hCG | Syncytiotrophoblast | Maintains corpus luteum; basis of pregnancy test |
| hPL (Human Placental Lactogen) | Syncytiotrophoblast | Diabetogenic; mobilizes fatty acids; promotes breast development |
| Progesterone | Syncytiotrophoblast (after 8 weeks) | Maintains endometrium; initially from corpus luteum |
| Estrogen (estriol) | Syncytiotrophoblast | Uterine growth; requires fetal DHEA-S as precursor |

### Luteoplacental Shift
- Corpus luteum produces progesterone for first 8 weeks
- By **8-10 weeks**, placenta takes over progesterone production
- This transition = **luteoplacental shift**

## Placental Transfer Mechanisms

| Mechanism | Substances |
|-----------|-----------|
| Simple diffusion | O2, CO2, water, electrolytes, urea |
| Facilitated diffusion | Glucose (GLUT transporters) |
| Active transport | Amino acids, calcium, iron, vitamins |
| Pinocytosis | IgG antibodies, lipoproteins |
| Breaks in barrier | Fetal RBCs (Rh sensitization) |

## Umbilical Cord
- Length: **50 cm** (average), diameter: 2 cm
- Contains: **2 arteries** (deoxygenated blood from fetus) + **1 vein** (oxygenated blood to fetus)
- Surrounded by **Wharton's jelly** (mucous connective tissue)
- Single umbilical artery: associated with congenital anomalies (renal)`,
        mnemonics: [
          { text: "PST for villi: Primary-Secondary-Tertiary (1-2-3 weeks)", explanation: "Primary villi (week 1-2): trophoblast only. Secondary (week 3): + mesoderm. Tertiary (week 3 end): + blood vessels" },
          { text: "AVA for umbilical cord: 2 Arteries, 1 Vein, surrounded by (Wharton's jelly)", explanation: "Remember AVA — Artery-Vein-Artery; 2 arteries carry DEoxygenated blood FROM fetus, 1 vein carries Oxygenated blood TO fetus" }
        ],
        keyPoints: [
          "Primary → Secondary → Tertiary villi develop during weeks 1-3",
          "Chorion frondosum forms fetal placenta; chorion laeve becomes smooth",
          "Failure of spiral artery remodeling leads to pre-eclampsia",
          "Luteoplacental shift occurs at 8-10 weeks",
          "hCG maintains corpus luteum; produced by syncytiotrophoblast",
          "Umbilical cord: 2 arteries + 1 vein in Wharton's jelly"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 5-6", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 4-5", edition: "8th" }
        ] },
      { layer: 3, slug: "implantation-placenta-clinical", title: "Implantation & Placenta - Clinical", estimatedMinutes: 20,
        summary: "Clinical conditions related to implantation and placental pathology including ectopic pregnancy, placenta previa, pre-eclampsia, IUGR, and Rh incompatibility in Indian clinical practice.",
        contentMd: `# Clinical Correlations

## Abnormal Implantation Sites

### Ectopic Pregnancy
- Implantation outside the uterine cavity
- Most common site: **Ampulla of uterine tube** (70%)
- Other sites: Isthmus, fimbrial, ovarian, cervical, abdominal
- **Triad**: Amenorrhea + abdominal pain + vaginal bleeding
- Diagnosis: Transvaginal USG + serial beta-hCG
- Treatment: Methotrexate (medical) or Salpingectomy (surgical)

### Placenta Previa
- Placenta implants in the **lower uterine segment**, partially or completely covering the internal os
- **Types**: Low-lying, Marginal, Partial, Complete (Total)
- Presents with: **Painless bright red vaginal bleeding** in 2nd/3rd trimester
- Risk factors: Previous C-section, multiparity, advanced maternal age
- Diagnosis: Transvaginal USG
- Treatment: Cesarean section (if complete previa)

> **Clinical Pearl**: In India, high multiparity and previous cesarean sections make placenta previa a commonly encountered obstetric emergency.

## Placental Abruption (Abruptio Placentae)
- Premature separation of normally implanted placenta
- Presents with: **Painful dark vaginal bleeding**, tender rigid uterus, fetal distress
- Risk factors: Hypertension, trauma, smoking, cocaine
- Couvelaire uterus: blood infiltrates myometrium

## Abnormal Placental Attachment

| Condition | Depth of Invasion |
|-----------|------------------|
| Placenta accreta | Attaches to myometrium (no decidua basalis) |
| Placenta increta | Invades into myometrium |
| Placenta percreta | Penetrates through myometrium to serosa/bladder |

- Risk increases with previous C-sections
- May cause life-threatening hemorrhage at delivery

## Pre-eclampsia
- **Triad**: Hypertension (>140/90) + Proteinuria + Edema (after 20 weeks)
- Pathogenesis: **Failure of spiral artery remodeling** by trophoblast
- Leads to placental ischemia → endothelial dysfunction
- **Eclampsia**: Pre-eclampsia + seizures (medical emergency)
- Treatment: MgSO4 (for seizure prophylaxis), antihypertensives, definitive treatment is delivery
- In India: Pre-eclampsia/eclampsia remains a leading cause of maternal mortality

## Rh Incompatibility (Erythroblastosis Fetalis)
- Rh-negative mother + Rh-positive fetus → maternal anti-D antibodies
- First pregnancy usually unaffected (sensitization occurs at delivery)
- Subsequent pregnancies: **IgG anti-D crosses placenta** → fetal hemolysis
- Prevention: **Anti-D immunoglobulin (RhoGAM)** at 28 weeks and within 72 hours of delivery
- In India: Rh negativity ~5% in the population (lower than Western countries)

## IUGR (Intrauterine Growth Restriction)
- Fetal weight below 10th percentile for gestational age
- Causes: Placental insufficiency, maternal hypertension, infections (TORCH), smoking
- **Asymmetric IUGR** (80%): Head sparing, late onset, placental cause
- **Symmetric IUGR** (20%): Proportionate, early onset, chromosomal/infectious cause

## Folic Acid Supplementation — Indian Guidelines
- Recommended: **400 mcg/day** starting before conception
- Prevents neural tube defects (NTDs)
- Government of India: Iron-Folic acid supplementation program for pregnant women
- 5 mg/day if previous history of NTD-affected pregnancy`,
        mnemonics: [
          { text: "AIP for abnormal placenta: Accreta-Increta-Percreta (depth increases)", explanation: "Accreta: Attaches to myometrium. Increta: Invades Into myometrium. Percreta: Penetrates through (Perforates). Depth of invasion increases alphabetically." },
          { text: "PREVIA = Painless, Red, External bleeding, Vaginal, In lower segment, Antepartum", explanation: "Placenta previa presents with Painless bright Red vaginal bleeding — contrast with Abruption which is Painful Dark bleeding" }
        ],
        keyPoints: [
          "Placenta previa: painless bright red bleeding; abruption: painful dark bleeding",
          "Accreta → Increta → Percreta: increasing depth of placental invasion",
          "Pre-eclampsia caused by failure of spiral artery remodeling",
          "Rh incompatibility prevention: Anti-D (RhoGAM) at 28 weeks and post-delivery",
          "Folic acid 400 mcg/day recommended before conception in India",
          "Pre-eclampsia/eclampsia is a leading cause of maternal mortality in India"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 5-6 (Clinical)", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 4-5", edition: "8th" },
          { book: "DC Dutta Obstetrics", chapter: "Ch 17-19", edition: "9th" }
        ] },
      { layer: 4, slug: "implantation-placenta-exam", title: "Implantation & Placenta - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam facts and pattern recognition for implantation and placenta topics in NEXT, NEET PG, and university examinations.",
        contentMd: `# Exam High Yield

## One-Liners
- Normal site of implantation: **Posterior wall of body of uterus**
- Implantation begins on: **Day 6** (completed by Day 11-12)
- Implantation window: **Days 20-23 of menstrual cycle**
- Layer that invades endometrium: **Syncytiotrophoblast**
- hCG produced by: **Syncytiotrophoblast**
- Placenta type in humans: **Hemochorial**
- Fetal part of placenta: **Chorion frondosum**
- Maternal part of placenta: **Decidua basalis**
- Luteoplacental shift occurs at: **8-10 weeks**
- Umbilical cord contains: **2 arteries + 1 vein**
- Antibody crossing placenta: **IgG (only class)**
- Placenta previa presents with: **Painless bleeding**
- Abruption presents with: **Painful bleeding**

## Comparison: Placenta Previa vs Abruption

| Feature | Previa | Abruption |
|---------|--------|-----------|
| Bleeding | Painless, bright red | Painful, dark |
| Uterus | Soft, non-tender | Tender, rigid |
| Fetal distress | Late | Early |
| Association | Previous C-section | Hypertension |
| Delivery | Cesarean | Emergency delivery |

## Comparison: Decidual Parts

| Part | Location | Significance |
|------|----------|-------------|
| Decidua basalis | Deep to embryo | Forms maternal placenta |
| Decidua capsularis | Superficial to embryo | Covers embryo |
| Decidua parietalis | Rest of uterus | Lines remaining cavity |

## Previous Year Themes
- Day of implantation and implantation window (very frequently asked)
- Syncytiotrophoblast vs cytotrophoblast functions
- Layers of placental barrier
- hCG source and function
- Placenta previa vs abruption differentiation
- Rh incompatibility mechanism and prevention
- Ectopic pregnancy sites

## Pattern Recognition
- "Painless vaginal bleeding in 3rd trimester" → **Placenta previa**
- "Painful bleeding with rigid uterus" → **Placental abruption**
- "Produces hCG, invades endometrium" → **Syncytiotrophoblast**
- "Day 6-7 event in posterior wall" → **Implantation**
- "Only immunoglobulin crossing placenta" → **IgG**
- "2 arteries and 1 vein" → **Umbilical cord**`,
        mnemonics: [
          { text: "Syncytio-S: Secretes and Surges (hCG)", explanation: "Syncytiotrophoblast Secretes hCG (basis of pregnancy tests) and is the invasive Surging layer" },
          { text: "IgG = Ig-Goes (across placenta)", explanation: "IgG is the only immunoglobulin that Goes across the placenta to provide passive immunity to the fetus" }
        ],
        keyPoints: [
          "Implantation Day 6-7 on posterior wall of uterus",
          "Syncytiotrophoblast: invasive, produces hCG",
          "Only IgG crosses the placenta",
          "Previa = painless; Abruption = painful bleeding",
          "Luteoplacental shift at 8-10 weeks"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 4-6", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 4-5", edition: "8th" }
        ] },
      { layer: 5, slug: "implantation-placenta-recall", title: "Implantation & Placenta - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards covering implantation timeline, placental structure, functions, and clinical abnormalities.",
        contentMd: `# Active Recall

**Q1:** On which day does implantation begin?
> Day 6 (completed by Day 11-12)

**Q2:** What is the normal site of implantation?
> Posterior wall of the body of uterus (upper part)

**Q3:** Name the two layers of trophoblast.
> Inner: Cytotrophoblast (Langhans layer). Outer: Syncytiotrophoblast

**Q4:** Which trophoblast layer produces hCG?
> Syncytiotrophoblast

**Q5:** What type of placenta do humans have?
> Hemochorial (maternal blood directly contacts trophoblast)

**Q6:** What are the fetal and maternal components of placenta?
> Fetal: Chorion frondosum. Maternal: Decidua basalis

**Q7:** When does the luteoplacental shift occur?
> 8-10 weeks of gestation

**Q8:** What does the umbilical cord contain?
> 2 umbilical arteries (deoxygenated) + 1 umbilical vein (oxygenated) in Wharton's jelly

**Q9:** Which immunoglobulin crosses the placenta?
> IgG (only class that crosses)

**Q10:** Differentiate placenta previa from abruption bleeding.
> Previa: painless, bright red. Abruption: painful, dark

**Q11:** What is the pathogenesis of pre-eclampsia?
> Failure of trophoblast remodeling of spiral arteries → placental ischemia → endothelial dysfunction

**Q12:** What prevents Rh sensitization?
> Anti-D immunoglobulin (RhoGAM) at 28 weeks and within 72 hours of delivery`,
        mnemonics: [],
        keyPoints: ["12 recall questions covering implantation, placenta, and clinical correlations"],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 4-6", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 4-5", edition: "8th" }
        ] },
    ],
  },

  // ─── Topic 3: Embryonic Period & Folding ────────────────────
  {
    topicCode: "AN-MOD-10-TOP-03",
    layers: [
      { layer: 1, slug: "embryonic-period-folding-foundation", title: "Embryonic Period & Folding - Foundation", estimatedMinutes: 20,
        summary: "The embryonic period (weeks 3-8) is when all major organ systems are established. Key events include gastrulation, neurulation, body folding, somite formation, and pharyngeal arch development.",
        contentMd: `# Embryonic Period & Folding

## Overview of Embryonic Period
- **Week 3-8**: Period of organogenesis — most critical for development
- This is when the embryo is most susceptible to **teratogens**
- By end of week 8, all major organ systems have been established

## Gastrulation (Week 3)
- Conversion of **bilaminar disc** (epiblast + hypoblast) into **trilaminar disc** (ectoderm, mesoderm, endoderm)
- Begins with formation of the **Primitive Streak** on the epiblast surface
- **Primitive node (Hensen's node)**: Cranial end of the primitive streak; organizer region

### Formation of Germ Layers
- **Epiblast** gives rise to ALL three germ layers
- Cells migrate through the primitive streak:
  - Cells replacing hypoblast → **Endoderm**
  - Cells between epiblast and endoderm → **Mesoderm** (intraembryonic)
  - Remaining epiblast → **Ectoderm**

### Germ Layer Derivatives

| Ectoderm | Mesoderm | Endoderm |
|----------|----------|----------|
| Skin epidermis | Muscles (skeletal, smooth, cardiac) | GI tract epithelium |
| CNS (brain, spinal cord) | Bones, cartilage | Liver, pancreas |
| Neural crest cells | Kidneys, gonads | Thyroid, parathyroid |
| Lens of eye | Cardiovascular system | Lungs (epithelium) |
| Anterior pituitary | Spleen | Urinary bladder epithelium |
| Tooth enamel | Blood cells | Tympanic cavity, auditory tube |

## Notochord
- Develops from cells migrating through the **primitive node** (Hensen's node)
- Defines the **axis** of the embryo
- **Induces** the overlying ectoderm to form the neural plate (neurulation)
- Remnant in adult: **Nucleus pulposus** of intervertebral disc

## Neurulation (Weeks 3-4)
- Notochord induces ectoderm → **Neural plate** (Day 18)
- Neural plate → **Neural groove** → **Neural folds**
- Neural folds fuse → **Neural tube** (begins at Day 22 in cervical region)
- Fusion proceeds cranially and caudally
- **Anterior neuropore** closes: Day 25
- **Posterior neuropore** closes: Day 27
- Neural tube → Brain + Spinal cord
- **Neural crest cells**: Migrate from the edges of neural folds

## Body Folding (Week 4)
- Converts flat trilaminar disc into a cylindrical embryo
- **Cranio-caudal folding**: Head fold + Tail fold
  - Incorporates part of yolk sac as **primitive gut**
- **Lateral folding**: Right and left sides fold ventrally
  - Forms the body wall
  - Encloses the gut tube

## Somites
- Formed from **paraxial mesoderm**
- First pair appears on Day 20; ~42-44 pairs total
- Each somite differentiates into:
  - **Sclerotome** → Vertebral column + ribs
  - **Myotome** → Skeletal muscles of body wall and limbs
  - **Dermatome** → Dermis of skin

## Pharyngeal (Branchial) Arches
- Appear in **Weeks 4-5**
- 6 arches (5th is rudimentary)
- Each arch contains: artery, nerve, cartilage, muscle

### Pharyngeal Arch Derivatives

| Arch | Nerve | Cartilage | Muscles |
|------|-------|-----------|---------|
| 1st (Mandibular) | V (Trigeminal) | Meckel's → Malleus, Incus | Muscles of mastication, Mylohyoid, Ant. belly digastric |
| 2nd (Hyoid) | VII (Facial) | Reichert's → Stapes, Styloid, Lesser horn hyoid | Muscles of facial expression, Stapedius, Stylohyoid |
| 3rd | IX (Glossopharyngeal) | Greater horn of hyoid | Stylopharyngeus |
| 4th | X (Vagus - SLN) | Thyroid cartilage | Cricothyroid, Constrictors |
| 6th | X (Vagus - RLN) | Cricoid, Arytenoid | Intrinsic muscles of larynx (except cricothyroid) |`,
        mnemonics: [
          { text: "ACNE for anterior neuropore closing day: A=Anterior, C=Closes, N=Neuropore, E=25 (Twenty-fivE)", explanation: "Anterior neuropore closes on Day 25; Posterior neuropore closes on Day 27 (2 days later)" },
          { text: "1-2-3 Pharyngeal arch nerves: 1=V (trigeminal), 2=VII (facial), 3=IX (glossopharyngeal)", explanation: "Arch 1,2,3 nerves are cranial nerves 5,7,9 — odd numbers increasing. Arches 4 and 6 are both Vagus (X): SLN and RLN respectively" }
        ],
        keyPoints: [
          "Gastrulation converts bilaminar disc to trilaminar disc via primitive streak",
          "Epiblast gives rise to ALL three germ layers",
          "Notochord induces neural plate formation; remnant = nucleus pulposus",
          "Anterior neuropore closes Day 25; posterior neuropore Day 27",
          "Body folding (cranio-caudal + lateral) converts flat disc to cylindrical embryo",
          "Somites differentiate into sclerotome, myotome, dermatome",
          "Pharyngeal arches 1-3 have nerves V, VII, IX; arches 4 and 6 have vagus (X)"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 6-9 (Gastrulation, Neurulation, Folding)", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 5-7", edition: "8th" }
        ] },
      { layer: 2, slug: "embryonic-period-folding-mechanism", title: "Embryonic Period & Folding - Mechanism", estimatedMinutes: 30,
        summary: "Detailed molecular signaling in gastrulation (Nodal, BMP, Wnt), neural induction, neural crest cell migration, somitogenesis clock, and pharyngeal pouch and cleft derivatives.",
        contentMd: `# Detailed Mechanisms

## Molecular Signaling in Gastrulation

### Primitive Streak Formation
- **Nodal** (TGF-beta family) initiates primitive streak formation
- **BMP4** establishes ventral mesoderm fate
- **Chordin/Noggin** (BMP antagonists from node) → dorsalize mesoderm

### Left-Right Axis Determination
- **Nodal cilia** at the primitive node create leftward fluid flow
- This activates **Nodal signaling** on the left side
- **PITX2** transcription factor → left-sided organ development
- Disruption → **Situs inversus** (complete mirror reversal of organs)

## Neural Induction — Molecular Basis
- Default fate of ectoderm is **neural** (not epidermal)
- BMP4 from mesoderm normally converts ectoderm to epidermis
- Notochord secretes **BMP antagonists** (Chordin, Noggin, Follistatin)
- These block BMP4 → ectoderm follows default neural fate → **Neural plate**
- This is the "**default model**" of neural induction

## Neural Crest Cells — Derivatives

Neural crest cells are sometimes called the "4th germ layer" due to their extraordinary range of derivatives:

| System | Derivatives |
|--------|------------|
| Nervous system | Sensory ganglia (DRG), autonomic ganglia, Schwann cells, satellite cells |
| Endocrine | Adrenal medulla, C cells of thyroid (parafollicular), carotid body type I cells |
| Pigment | Melanocytes |
| Skeletal (head) | Craniofacial bones, dentine of teeth, pharyngeal arch cartilages |
| Connective tissue | Dermis of face/neck, corneal stroma |
| Cardiovascular | Aorticopulmonary septum, conotruncal ridges |
| Others | Meninges (pia and arachnoid of brain), ciliary muscle, pupillary muscles |

> **Key Concept**: Neural crest defects cause many clinical conditions — Hirschsprung disease (aganglionic bowel), DiGeorge syndrome (pharyngeal arch defects), Waardenburg syndrome (melanocyte defects).

## Somitogenesis — The Segmentation Clock
- Somites form in a **cranial to caudal** sequence
- **Notch-Delta signaling** pathway acts as a molecular oscillator
- **Hairy/Hes genes** oscillate with a ~90 minute period in humans
- **FGF gradient** (high caudally) determines where segmentation boundary forms
- **Retinoic acid gradient** (high cranially) opposes FGF

## Fate of Intraembryonic Mesoderm

| Mesoderm Division | Location | Derivatives |
|-------------------|----------|------------|
| Paraxial | Adjacent to neural tube | Somites → vertebrae, muscles, dermis |
| Intermediate | Between paraxial and lateral plate | Kidneys, gonads, genital ducts |
| Lateral plate - Somatic | Lines body wall (with ectoderm) | Bones of limbs, sternum, body wall muscles, parietal serous membranes |
| Lateral plate - Splanchnic | Lines gut (with endoderm) | Smooth muscle/CT of gut, heart, visceral serous membranes |

## Pharyngeal Apparatus — Detailed Derivatives

### Pharyngeal Pouches (Endoderm)

| Pouch | Derivatives |
|-------|------------|
| 1st | Tubotympanic recess → Middle ear cavity + Eustachian tube |
| 2nd | Palatine tonsils (tonsillar fossa) |
| 3rd | Dorsal: Inferior parathyroid glands; Ventral: Thymus |
| 4th | Dorsal: Superior parathyroid glands; Ventral: Ultimobranchial body (C cells/parafollicular cells) |

> **Important**: 3rd pouch → Inferior parathyroid (not superior). They migrate further caudally. This is why inferior parathyroids are more variable in position.

### Pharyngeal Clefts (Ectoderm)
- **1st cleft** → External acoustic meatus (only cleft that persists)
- 2nd-4th clefts normally obliterated by growth of 2nd arch
- Failure of obliteration → **Branchial cyst/fistula** (anterior to SCM)

### Pharyngeal Membranes
- **1st membrane** → Tympanic membrane (all 3 layers)

## Body Folding — Detailed

### Cranio-caudal (Head-Tail) Folding
- **Head fold**: Brings developing brain cranially; incorporates foregut
  - Septum transversum (future diaphragm) moves ventral and caudal
  - Cardiogenic area moves ventral to foregut
- **Tail fold**: Incorporates hindgut; allantois comes to lie ventral

### Lateral Folding
- Somatopleure (ectoderm + somatic mesoderm) folds ventrally
- Encloses gut tube from splanchnopleure (endoderm + splanchnic mesoderm)
- Gut tube connected to yolk sac by **vitelline duct (yolk stalk)**
- Body wall closes ventrally (failure → omphalocele, gastroschisis)`,
        mnemonics: [
          { text: "3rd pouch = 3 letters: Thy (Thymus) + Inf (Inferior parathyroid)", explanation: "3rd pharyngeal pouch gives rise to Thymus and Inferior parathyroid. Remember: 3 migrates further down, so gives INFERIOR parathyroid (counterintuitive)" },
          { text: "Neural crest = SCHEME: Schwann cells, C cells, Head skeleton, Endocardial cushions, Melanocytes, Enteric ganglia", explanation: "SCHEME helps remember the diverse derivatives of neural crest cells — the so-called 4th germ layer" }
        ],
        keyPoints: [
          "Neural induction: Notochord secretes BMP antagonists (Chordin, Noggin) → neural plate",
          "Neural crest cells give rise to diverse structures including DRG, adrenal medulla, melanocytes, and craniofacial skeleton",
          "3rd pharyngeal pouch gives inferior parathyroid and thymus (migrates further caudally)",
          "1st pharyngeal cleft is the only one that persists (forms external ear canal)",
          "Somitogenesis uses Notch-Delta signaling with ~90 min oscillation period",
          "Lateral plate mesoderm splits into somatic and splanchnic layers"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 6-10", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 5-8", edition: "8th" }
        ] },
      { layer: 3, slug: "embryonic-period-folding-clinical", title: "Embryonic Period & Folding - Clinical", estimatedMinutes: 20,
        summary: "Clinical correlations of embryonic period defects including neural tube defects, pharyngeal arch anomalies, situs inversus, body wall defects, and neurocristopathies relevant to Indian clinical practice.",
        contentMd: `# Clinical Correlations

## Neural Tube Defects (NTDs)

### Failure of Anterior Neuropore Closure (Day 25)
- **Anencephaly**: Absence of brain vault (calvaria) and cerebral hemispheres
  - Incompatible with life
  - Elevated maternal serum **AFP (alpha-fetoprotein)**
  - USG: Absent skull vault (frog-like appearance)

- **Meningoencephalocele**: Brain tissue herniating through skull defect
  - Most common in occipital region in India

### Failure of Posterior Neuropore Closure (Day 27)
- **Spina bifida**: Failure of vertebral arches to fuse

| Type | Description | Severity |
|------|------------|----------|
| Spina bifida occulta | Bony defect only, skin intact, tuft of hair | Mildest, often asymptomatic |
| Meningocele | Meninges herniate through defect | Moderate |
| Meningomyelocele | Meninges + spinal cord herniate | Severe, neurological deficits |
| Myeloschisis (Rachischisis) | Neural folds fail to close entirely | Most severe |

> **Indian Context**: NTDs are among the most common congenital anomalies in India. Prevalence is 4-5 per 1000 births in some regions. The Government of India's National Iron+ Initiative provides IFA supplementation to prevent NTDs.

### Prevention of NTDs
- **Folic acid 400 mcg/day** starting at least 1 month before conception
- **5 mg/day** if previous NTD-affected pregnancy or on anti-epileptic drugs
- Mandatory folic acid fortification of wheat flour proposed in India

## Pharyngeal Arch Anomalies

### DiGeorge Syndrome (22q11.2 Deletion)
- Failure of 3rd and 4th pharyngeal pouch development
- Clinical features (CATCH-22):
  - **C**ardiac defects (Tetralogy of Fallot, truncus arteriosus)
  - **A**bnormal facies
  - **T**hymic aplasia/hypoplasia → T-cell immunodeficiency
  - **C**left palate
  - **H**ypocalcemia (absent parathyroids)
- Chromosome: **22q11.2** microdeletion

### Branchial (Pharyngeal) Cyst/Fistula
- Failure of obliteration of 2nd-4th pharyngeal clefts
- Presents as swelling or discharging sinus anterior to sternocleidomastoid
- Most common: 2nd arch anomaly (opening along anterior border of SCM)

### First Arch Syndrome
- **Treacher Collins syndrome** (mandibulofacial dysostosis): Mandibular and zygomatic hypoplasia
- **Pierre Robin sequence**: Micrognathia, glossoptosis, cleft palate

## Body Wall Defects

| Condition | Mechanism | Features |
|-----------|-----------|----------|
| Omphalocele | Failure of gut to return from physiological hernia | Midline, covered by peritoneum + amnion |
| Gastroschisis | Defect in body wall (usually right of umbilicus) | NOT covered by membrane, exposed bowel |

## Neurocristopathies (Neural Crest Defects)
- **Hirschsprung disease**: Failure of neural crest migration to distal colon → aganglionic megacolon
- **Waardenburg syndrome**: White forelock, heterochromia, sensorineural deafness
- **CHARGE syndrome**: Coloboma, Heart defects, Atresia choanae, Retarded growth, Genital hypoplasia, Ear anomalies

## Situs Inversus
- Complete mirror-image reversal of thoracic and abdominal organs
- Due to defect in **nodal ciliary function** (left-right axis determination)
- **Kartagener syndrome**: Situs inversus + bronchiectasis + sinusitis (immotile cilia syndrome)`,
        mnemonics: [
          { text: "CATCH-22 for DiGeorge", explanation: "Cardiac defects, Abnormal facies, Thymic aplasia, Cleft palate, Hypocalcemia — deletion on chromosome 22" },
          { text: "Spina bifida types: OMMR (from mild to severe)", explanation: "Occulta (mildest) → Meningocele → Meningomyelocele → Rachischisis/Myeloschisis (most severe)" }
        ],
        keyPoints: [
          "Anterior neuropore failure → Anencephaly (Day 25); Posterior neuropore failure → Spina bifida (Day 27)",
          "Folic acid 400 mcg/day prevents NTDs — essential pre-conception supplementation",
          "DiGeorge syndrome (22q11.2 deletion): CATCH-22 features, 3rd/4th pouch defect",
          "Omphalocele is covered by membrane; gastroschisis is NOT covered",
          "Hirschsprung disease results from failure of neural crest cell migration",
          "NTD prevalence is high in India (4-5/1000 births in some regions)"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 7-10 (Clinical Correlations)", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 6-8", edition: "8th" }
        ] },
      { layer: 4, slug: "embryonic-period-folding-exam", title: "Embryonic Period & Folding - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam-focused points on embryonic period events, germ layer derivatives, pharyngeal arch structures, and folding defects for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Gastrulation establishes: **Three germ layers** (ectoderm, mesoderm, endoderm)
- All three germ layers derived from: **Epiblast**
- Organizer region of embryo: **Primitive node (Hensen's node)**
- Notochord remnant in adult: **Nucleus pulposus**
- Neural plate induced by: **Notochord** (via BMP antagonists Chordin/Noggin)
- Anterior neuropore closes: **Day 25**
- Posterior neuropore closes: **Day 27**
- Total somite pairs: **42-44**
- Somite → Sclerotome gives: **Vertebrae and ribs**
- 1st pharyngeal arch nerve: **Trigeminal (V)**
- 2nd pharyngeal arch nerve: **Facial (VII)**
- 3rd pharyngeal pouch gives: **Inferior parathyroid + Thymus**
- Only pharyngeal cleft to persist: **1st (external acoustic meatus)**

## Germ Layer Derivatives — Frequently Tested

| Question Stem | Answer | Germ Layer |
|--------------|--------|------------|
| Tooth enamel | Enamel organ | Ectoderm |
| Tooth dentine | Dental papilla | Neural crest (ectomesenchyme) |
| Liver parenchyma | Hepatocytes | Endoderm |
| Suprarenal medulla | Chromaffin cells | Neural crest |
| Suprarenal cortex | Steroid-producing cells | Mesoderm (intermediate) |
| Skeletal muscle | Myoblasts | Mesoderm (myotome of somite) |
| Smooth muscle of gut | Splanchnic mesoderm | Mesoderm (lateral plate) |
| Melanocytes | Neural crest | Ectoderm (neural crest) |
| Kidney | Intermediate mesoderm | Mesoderm |
| Heart | Splanchnic mesoderm | Mesoderm |
| Spleen | Mesenchyme | Mesoderm |

## Pharyngeal Arch Table (MUST MEMORIZE)

| Arch | Nerve | Key Cartilage | Key Muscle |
|------|-------|---------------|------------|
| 1st | V3 (Mandibular) | Meckel's → Malleus, Incus | Muscles of mastication |
| 2nd | VII (Facial) | Reichert's → Stapes, Styloid | Muscles of facial expression |
| 3rd | IX (Glossopharyngeal) | Greater horn hyoid | Stylopharyngeus (ONLY muscle) |
| 4th | X - SLN | Thyroid cartilage | Cricothyroid |
| 6th | X - RLN | Cricoid, Arytenoid | Intrinsic laryngeal (except cricothyroid) |

## Pattern Recognition
- "Failure of anterior neuropore closure" → **Anencephaly**
- "Failure of posterior neuropore closure" → **Spina bifida**
- "Tuft of hair on lower back" → **Spina bifida occulta**
- "Absent thymus + hypocalcemia + cardiac defect" → **DiGeorge syndrome (22q11.2)**
- "Aganglionic megacolon" → **Hirschsprung disease (neural crest failure)**
- "Mirror-image organs + sinusitis + bronchiectasis" → **Kartagener syndrome**
- "Gut outside abdomen covered by membrane" → **Omphalocele**
- "Gut outside abdomen NOT covered" → **Gastroschisis**
- "Derived from all 3 germ layers + neural crest" → **Tympanic membrane (1st pharyngeal membrane)**`,
        mnemonics: [
          { text: "Father of arch 3 is IX: only child is Stylopharyngeus", explanation: "3rd pharyngeal arch: nerve is IX (glossopharyngeal), and it gives rise to only ONE muscle — Stylopharyngeus" },
          { text: "25-Anterior, 27-Posterior (neuropore closure days)", explanation: "Anterior neuropore closes first on Day 25, Posterior closes on Day 27. A comes before P alphabetically, 25 before 27" }
        ],
        keyPoints: [
          "All germ layers from epiblast; notochord induces neural plate",
          "Day 25 anterior neuropore; Day 27 posterior neuropore closure",
          "3rd pouch = inferior parathyroid + thymus; 4th pouch = superior parathyroid",
          "Pharyngeal arch nerves: V, VII, IX, X(SLN), X(RLN) for arches 1,2,3,4,6",
          "3rd arch has only ONE muscle: Stylopharyngeus"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 6-10", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 5-8", edition: "8th" }
        ] },
      { layer: 5, slug: "embryonic-period-folding-recall", title: "Embryonic Period & Folding - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards for gastrulation, neurulation, body folding, somites, and pharyngeal arch derivatives.",
        contentMd: `# Active Recall

**Q1:** What does gastrulation convert the bilaminar disc into?
> Trilaminar disc (ectoderm, mesoderm, endoderm) via primitive streak

**Q2:** Which structure gives rise to all three germ layers?
> Epiblast

**Q3:** What is the adult remnant of the notochord?
> Nucleus pulposus of the intervertebral disc

**Q4:** On what days do the anterior and posterior neuropores close?
> Anterior: Day 25. Posterior: Day 27

**Q5:** What are the 3 components of a somite?
> Sclerotome (vertebrae/ribs), Myotome (skeletal muscles), Dermatome (dermis)

**Q6:** Name the nerve of the 1st, 2nd, and 3rd pharyngeal arches.
> 1st: Trigeminal (V); 2nd: Facial (VII); 3rd: Glossopharyngeal (IX)

**Q7:** What does the 3rd pharyngeal pouch give rise to?
> Inferior parathyroid (dorsal) + Thymus (ventral)

**Q8:** Which is the only pharyngeal cleft that persists?
> 1st cleft → External acoustic meatus

**Q9:** What is DiGeorge syndrome?
> 22q11.2 deletion → CATCH-22 (Cardiac, Abnormal facies, Thymic aplasia, Cleft palate, Hypocalcemia)

**Q10:** Failure of anterior neuropore closure causes?
> Anencephaly

**Q11:** What is the difference between omphalocele and gastroschisis?
> Omphalocele: midline, covered by peritoneum/amnion. Gastroschisis: paraumbilical (usually right), NOT covered

**Q12:** What does neural crest give rise to? (Name 5 derivatives)
> Sensory ganglia (DRG), adrenal medulla, melanocytes, Schwann cells, craniofacial bones, C cells of thyroid, enteric ganglia`,
        mnemonics: [],
        keyPoints: ["12 recall questions covering gastrulation, neurulation, somites, and pharyngeal arches"],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 6-10", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 5-8", edition: "8th" }
        ] },
    ],
  },

  // ─── Topic 4: Developmental Anomalies ──────────────────────
  {
    topicCode: "AN-MOD-10-TOP-04",
    layers: [
      { layer: 1, slug: "developmental-anomalies-foundation", title: "Developmental Anomalies - Foundation", estimatedMinutes: 20,
        summary: "Developmental anomalies (congenital malformations) result from genetic factors, environmental teratogens, or multifactorial causes. This topic covers the major anomalies across organ systems with emphasis on those commonly encountered in Indian clinical practice.",
        contentMd: `# Developmental Anomalies

## Basic Concepts

### Terminology
- **Malformation**: Intrinsic abnormality in morphogenesis (genetic/chromosomal cause)
- **Disruption**: Breakdown of a previously normal structure (e.g., amniotic band syndrome)
- **Deformation**: Abnormal mechanical forces on normal tissue (e.g., club foot from oligohydramnios)
- **Dysplasia**: Abnormal cellular organization in a tissue (e.g., skeletal dysplasia)

### Causes of Congenital Anomalies
| Cause | Percentage |
|-------|-----------|
| Genetic (chromosomal + single gene) | 25-30% |
| Environmental (teratogens) | 5-10% |
| Multifactorial | 20-25% |
| Unknown | 40-50% |

## Neural Tube Defects (NTDs)
- **Most common structural CNS anomalies**
- Caused by failure of neural tube closure during Week 4
- Types (cranial → caudal):
  - **Anencephaly**: Absent brain vault — incompatible with life
  - **Encephalocele**: Brain herniation through skull defect (occipital most common)
  - **Spina bifida**: Failure of vertebral arch closure (lumbar/sacral most common)
- **Prevention**: Folic acid 400 mcg/day pre-conception
- **Diagnosis**: Elevated maternal serum AFP, USG, amniocentesis

## Cardiac Anomalies
- Most common congenital anomalies overall (**8 per 1000 live births**)

| Anomaly | Embryological Basis | Key Features |
|---------|-------------------|--------------|
| VSD | Failure of interventricular septum closure | Most common CHD overall |
| ASD | Failure of interatrial septum formation | Secundum type most common |
| Tetralogy of Fallot | Unequal division of conotruncus | VSD + Overriding aorta + Pulmonary stenosis + RVH; most common cyanotic CHD |
| TGA | Failure of aorticopulmonary septum rotation | Aorta from RV, Pulmonary from LV |
| PDA | Failure of ductus arteriosus closure | Continuous machinery murmur |
| Coarctation of aorta | Narrowing of aorta near ductus | Upper limb hypertension, rib notching |

## GI Anomalies

| Anomaly | Embryological Basis |
|---------|-------------------|
| Tracheoesophageal fistula (TEF) | Abnormal separation of trachea from esophagus |
| Meckel's diverticulum | Persistent vitelline/omphalomesenteric duct |
| Omphalocele | Failure of midgut return from physiological hernia |
| Gastroschisis | Defect in anterior body wall |
| Duodenal atresia | Failure of recanalization of duodenum |
| Imperforate anus | Failure of rupture of anal membrane |
| Hirschsprung disease | Failure of neural crest migration to distal bowel |

## Urogenital Anomalies

| Anomaly | Embryological Basis |
|---------|-------------------|
| Horseshoe kidney | Fusion of lower poles, trapped by IMA |
| Polycystic kidney | Failure of union of collecting and secretory parts |
| Hypospadias | Failure of urethral fold fusion |
| Epispadias | Defect of genital tubercle |
| Undescended testis (Cryptorchidism) | Failure of testicular descent |
| Uterine anomalies (bicornuate, septate) | Failure of Mullerian duct fusion |

## Teratogens — Important for Indian Context

| Teratogen | Effect on Fetus |
|-----------|----------------|
| Thalidomide | Phocomelia (limb reduction) |
| Alcohol (FAS) | Microcephaly, smooth philtrum, cardiac defects |
| Rubella (1st trimester) | Congenital rubella syndrome: Cataracts, Deafness, PDA |
| Isotretinoin (Vitamin A) | Craniofacial, cardiac, CNS defects |
| Phenytoin | Fetal hydantoin syndrome: cleft lip, nail hypoplasia |
| Valproic acid | Neural tube defects (spina bifida) |
| Warfarin | Nasal hypoplasia, stippled epiphyses |
| Diabetes (maternal) | Caudal regression syndrome, cardiac defects, macrosomia |
| TORCH infections | Various malformations depending on organism |`,
        mnemonics: [
          { text: "TOF has 4 features: Think of 4 fingers — VSD, Overriding aorta, Pulmonary stenosis, RVH", explanation: "Tetralogy of Fallot = 4 defects: VSD + Overriding aorta + Pulmonary stenosis + Right Ventricular Hypertrophy. Most common cyanotic CHD." },
          { text: "Meckel's diverticulum: Rule of 2s", explanation: "2% of population, 2 feet from ileocecal junction, 2 inches long, 2 types of ectopic tissue (gastric + pancreatic), presents before age 2, males 2x more" }
        ],
        keyPoints: [
          "CHD is the most common congenital anomaly; VSD is the most common CHD",
          "Tetralogy of Fallot is the most common cyanotic CHD",
          "NTDs prevented by folic acid supplementation (400 mcg/day pre-conception)",
          "Meckel's diverticulum follows the Rule of 2s",
          "Horseshoe kidney trapped by inferior mesenteric artery at L3",
          "Rubella in 1st trimester causes cataracts, deafness, PDA",
          "Most congenital anomalies have unknown etiology (40-50%)"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 10-20 (System-wise anomalies)", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 8-15", edition: "8th" }
        ] },
      { layer: 2, slug: "developmental-anomalies-mechanism", title: "Developmental Anomalies - Mechanism", estimatedMinutes: 30,
        summary: "Detailed embryological mechanisms underlying major congenital anomalies, including cardiac septation defects, gut rotation errors, renal development failure, and molecular basis of teratogenesis.",
        contentMd: `# Detailed Mechanisms

## Cardiac Development & Anomalies

### Normal Cardiac Septation
- **Atrial septation**: Septum primum → foramen secundum → Septum secundum → Foramen ovale
- **Ventricular septation**: Muscular (grows upward) + Membranous (grows downward from endocardial cushion)
- **Aorticopulmonary septation**: Spiral septum divides truncus arteriosus into aorta and pulmonary trunk

### VSD Mechanism
- **Membranous VSD** (most common): Failure of membranous portion of interventricular septum to close
- Requires contributions from: endocardial cushion + conotruncal ridges + muscular septum
- Blood shunts Left → Right initially → pulmonary hypertension → Eisenmenger syndrome (reversal)

### Tetralogy of Fallot — Embryological Basis
- **Unequal division of conotruncus** (anterior deviation of aorticopulmonary septum)
- This single error produces all 4 features:
  1. **Pulmonary stenosis**: Narrowed right ventricular outflow
  2. **VSD**: Malalignment of septum
  3. **Overriding aorta**: Aorta positioned over VSD
  4. **RVH**: Secondary to pulmonary stenosis

### Transposition of Great Arteries (TGA)
- **Failure of spiral rotation** of the aorticopulmonary septum
- Aorta arises from RV, Pulmonary artery from LV
- Two parallel circulations → incompatible with life unless mixing occurs (PDA, ASD, VSD)

## GI Development & Anomalies

### Midgut Rotation
- Normal: **270 degrees counterclockwise** around SMA axis
- **Malrotation**: Incomplete rotation → Ladd's bands → duodenal obstruction → midgut volvulus
- **Non-rotation**: Gut does not rotate → right-sided colon, left-sided small bowel
- **Reversed rotation**: Clockwise rotation → transverse colon behind SMA

### Tracheoesophageal Fistula (TEF)
- Most common type: **Type C (85%)** — Proximal esophageal atresia + distal TEF
- Due to abnormal deviation of the tracheoesophageal septum
- Presents with: polyhydramnios, inability to pass NG tube, coughing/choking with feeds

### Duodenal Atresia
- Failure of recanalization of duodenal lumen (solid cord stage in week 5-6)
- **Double bubble sign** on X-ray (stomach + dilated proximal duodenum)
- Associated with **Down syndrome** (30% of cases)

### Hirschsprung Disease (Aganglionic Megacolon)
- Failure of neural crest cell migration to distal colon
- Aganglionic segment unable to relax → functional obstruction
- **Rectosigmoid** most commonly affected
- Diagnosis: Rectal biopsy showing absent ganglion cells (Meissner's and Auerbach's plexuses)
- Acetylcholinesterase activity increased in aganglionic segment

## Renal Development & Anomalies

### Three Kidney Systems
1. **Pronephros** (week 4): Rudimentary, non-functional, degenerates
2. **Mesonephros** (weeks 4-8): Functions temporarily; duct persists as Wolffian duct
3. **Metanephros** (week 5 onwards): Permanent kidney
   - **Ureteric bud** (from mesonephric duct) → collecting system (collecting ducts, calyces, renal pelvis, ureter)
   - **Metanephric mesoderm** (blastema) → secretory system (nephrons: glomerulus to DCT)

### Horseshoe Kidney
- Lower poles fuse across midline during ascent
- Gets trapped by the **inferior mesenteric artery (IMA)** at vertebral level **L3**
- Usually asymptomatic; increased risk of infection and stones
- Most common renal fusion anomaly

### Polycystic Kidney Disease
- **ARPKD** (Autosomal Recessive): Mutation in PKHD1 gene; bilateral enlarged kidneys in infants
- **ADPKD** (Autosomal Dominant): Mutation in PKD1/PKD2; adult onset; bilateral cysts

### Hypospadias vs Epispadias

| Feature | Hypospadias | Epispadias |
|---------|-------------|-----------|
| Defect | Urethral opening on ventral (under) surface | Urethral opening on dorsal (upper) surface |
| Embryology | Failure of urethral fold fusion | Defective genital tubercle development |
| Frequency | 1 in 300 males (common) | Rare |
| Association | — | Exstrophy of bladder |

## Teratogenesis — Mechanisms

### Critical Periods of Susceptibility
- **Weeks 3-8** (Embryonic period): Most sensitive to teratogens → major malformations
- **Weeks 1-2**: All-or-none effect (death or normal development)
- **Weeks 9-38** (Fetal period): Functional defects and minor anomalies

### Molecular Mechanisms of Teratogens
- **Thalidomide**: Inhibits angiogenesis → limb reduction defects (phocomelia)
- **Retinoic acid (isotretinoin)**: Disrupts Hox gene expression → craniofacial and cardiac defects
- **Alcohol**: Disrupts neural crest cell migration and proliferation → FAS
- **Valproic acid**: Inhibits folate metabolism → neural tube defects
- **Phenytoin**: Free radical damage → fetal hydantoin syndrome
- **Maternal diabetes**: Hyperglycemia → caudal regression (sacral agenesis), cardiac defects`,
        mnemonics: [
          { text: "Midgut rotates 270 CCW: 2-Seven-0 like 2 parts of gut, Seven days a week, 0 problems if it works", explanation: "Midgut normally rotates 270 degrees counter-clockwise around the SMA axis. Failure leads to malrotation and volvulus." },
          { text: "TEF Type C = 85% = most Common (C for Common)", explanation: "Type C TEF (proximal esophageal atresia with distal fistula) is the most Common type, accounting for 85% of cases" }
        ],
        keyPoints: [
          "TOF: single embryological error (anterior deviation of AP septum) produces all 4 features",
          "TGA: failure of spiral rotation of aorticopulmonary septum",
          "Type C TEF (85%): proximal atresia + distal fistula",
          "Duodenal atresia: double bubble sign, associated with Down syndrome",
          "Metanephros: ureteric bud → collecting system; metanephric mesoderm → nephrons",
          "Horseshoe kidney trapped by IMA at L3",
          "Weeks 3-8 is the most critical period for teratogenic effects"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 12-20 (System Development)", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 10-15", edition: "8th" }
        ] },
      { layer: 3, slug: "developmental-anomalies-clinical", title: "Developmental Anomalies - Clinical", estimatedMinutes: 20,
        summary: "Clinical presentation, diagnosis, and management of common developmental anomalies with emphasis on Indian healthcare context, consanguinity-related anomalies, TORCH screening, and national health programs.",
        contentMd: `# Clinical Correlations

## Congenital Heart Disease in India
- Prevalence: **8-10 per 1000 live births**
- Leading cause of infant mortality from congenital anomalies
- Many cases present late due to limited access to pediatric cardiac care
- **Rashtriya Bal Swasthya Karyakram (RBSK)**: Government screening program for congenital defects

### Clinical Presentation Patterns
- **Acyanotic (Left-to-Right shunt)**: VSD, ASD, PDA → increased pulmonary blood flow, heart failure
- **Cyanotic (Right-to-Left shunt)**: TOF, TGA → reduced pulmonary blood flow, cyanosis

> **Clinical Pearl**: In India, late presentation of CHD is common. A child presenting with recurrent pneumonia and failure to thrive should be evaluated for underlying CHD (especially VSD).

### Tetralogy of Fallot — Clinical
- Cyanotic spells (Tet spells) in infancy — squatting relieves symptoms
- Boot-shaped heart on X-ray
- Treatment: Blalock-Taussig shunt (palliative) → Definitive surgical repair

## TORCH Infections — Indian Context
| Organism | Congenital Defects | Indian Relevance |
|----------|-------------------|------------------|
| **T**oxoplasma | Hydrocephalus, intracranial calcifications, chorioretinitis | Food hygiene, cat exposure |
| **O**thers (Syphilis, Varicella, Zika) | Various | Syphilis screening in pregnancy |
| **R**ubella | Cataracts, deafness, PDA, blueberry muffin rash | Rubella vaccination (MR vaccine under UIP) |
| **C**MV | Periventricular calcifications, microcephaly, hepatosplenomegaly | Most common congenital infection worldwide |
| **H**erpes simplex | Skin vesicles, encephalitis | Active lesions at delivery → Cesarean |

> **Indian Context**: Rubella vaccination was introduced in India's Universal Immunization Programme (UIP) as MR vaccine. Congenital rubella syndrome was a significant cause of deafness and blindness.

## Consanguinity and Congenital Anomalies in India
- Consanguineous marriage rate: **10-30%** in parts of South India
- Increases risk of **autosomal recessive disorders**:
  - Thalassemia (highly prevalent in India)
  - Sickle cell disease (tribal populations)
  - Cystic fibrosis (rare but present)
  - Inborn errors of metabolism
- **Genetic counseling** and carrier screening essential in consanguineous families

## Neural Tube Defects — Indian Scenario
- Prevalence: **4-5 per 1000 births** in some Indian states (vs 1 per 1000 in developed countries)
- Higher in northern Indian states
- Contributing factors: Poor nutrition, folate deficiency, lack of periconceptional supplementation
- **National Iron+ Initiative**: Provides IFA tablets to women of reproductive age
- Prenatal screening: Maternal serum AFP + USG at 16-18 weeks

## Prenatal Diagnosis Methods

| Method | Timing | Detects |
|--------|--------|---------|
| USG | 11-14 weeks (NT scan), 18-20 weeks (anomaly scan) | Structural anomalies |
| Triple/Quadruple test | 15-20 weeks | Trisomy 21, NTDs (AFP) |
| Amniocentesis | 15-18 weeks | Chromosomal anomalies, AFP |
| CVS (Chorionic Villus Sampling) | 10-13 weeks | Chromosomal/genetic disorders |
| Cell-free fetal DNA | >10 weeks | Trisomy 21, 18, 13 (non-invasive) |

> **Note**: Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act in India prohibits sex determination during prenatal testing.

## Tracheoesophageal Fistula — Clinical
- **3 Cs**: Coughing, Choking, Cyanosis during feeding
- Inability to pass nasogastric tube → coils in blind pouch (X-ray)
- Associated anomalies: VACTERL (Vertebral, Anal, Cardiac, TEF, Esophageal, Renal, Limb)

## Meckel's Diverticulum — Clinical
- Painless rectal bleeding in a child (ectopic gastric mucosa → ulceration)
- Diagnosis: **Technetium-99m pertechnetate scan** (Meckel's scan — detects ectopic gastric mucosa)
- May present as intestinal obstruction, intussusception, or diverticulitis`,
        mnemonics: [
          { text: "VACTERL for TEF-associated anomalies", explanation: "Vertebral, Anal atresia, Cardiac defects, TEF, Esophageal atresia, Renal anomalies, Limb defects — spectrum of associated anomalies" },
          { text: "TORCH: order helps remember — T.O.R.C.H.", explanation: "Toxoplasma, Others (Syphilis/Varicella/Zika), Rubella, CMV, Herpes simplex — prenatal infections causing congenital anomalies" }
        ],
        keyPoints: [
          "CHD affects 8-10 per 1000 live births in India; RBSK screens for congenital defects",
          "TOF: most common cyanotic CHD; boot-shaped heart on X-ray; squatting relieves Tet spells",
          "TORCH infections: Rubella causes cataracts + deafness + PDA; CMV is most common congenital infection",
          "Consanguinity (10-30% in South India) increases autosomal recessive disorders",
          "PCPNDT Act prohibits sex determination during prenatal diagnosis",
          "TEF presents with 3 Cs and has VACTERL associations"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 10-20 (Clinical Correlations)", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 10-15", edition: "8th" },
          { book: "OP Ghai Pediatrics", chapter: "Congenital Anomalies", edition: "9th" }
        ] },
      { layer: 4, slug: "developmental-anomalies-exam", title: "Developmental Anomalies - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield exam points covering the most frequently tested congenital anomalies, teratogens, and their embryological basis for NEXT and NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Most common congenital anomaly overall: **CHD (Congenital Heart Disease)**
- Most common CHD: **VSD**
- Most common cyanotic CHD: **Tetralogy of Fallot**
- Most common type of TEF: **Type C (proximal atresia + distal fistula, 85%)**
- Most common renal fusion anomaly: **Horseshoe kidney (trapped by IMA at L3)**
- Most common congenital infection: **CMV**
- Most teratogen-sensitive period: **Weeks 3-8 (embryonic period)**
- Most common site of Meckel's diverticulum: **2 feet from ileocecal junction**
- Duodenal atresia associated with: **Down syndrome (Trisomy 21)**
- Aganglionic megacolon: **Hirschsprung disease (neural crest failure)**
- Rubella in 1st trimester: **Cataracts + Deafness + PDA**
- Thalidomide causes: **Phocomelia (limb reduction)**
- Isotretinoin causes: **Craniofacial + cardiac + CNS defects**
- Valproic acid causes: **Neural tube defects**
- Maternal diabetes causes: **Caudal regression syndrome**
- Fetal alcohol syndrome: **Microcephaly + smooth philtrum + cardiac defects**

## Comparison: Acyanotic vs Cyanotic CHD

| Feature | Acyanotic | Cyanotic |
|---------|-----------|---------|
| Shunt direction | Left → Right | Right → Left |
| Examples | VSD, ASD, PDA | TOF, TGA, Truncus |
| Pulmonary blood flow | Increased | Decreased (TOF) or abnormal (TGA) |
| Heart failure | Common | Variable |
| Cyanosis | Late (Eisenmenger) | Early |

## Comparison: Omphalocele vs Gastroschisis

| Feature | Omphalocele | Gastroschisis |
|---------|-------------|--------------|
| Location | Midline (umbilicus) | Right of umbilicus |
| Covering | Peritoneum + amnion | NO covering |
| Contents | Bowel +/- liver | Bowel only |
| Associations | Trisomy 13, 18; Beckwith-Wiedemann | Usually isolated |

## Teratogen Quick Reference

| Drug | Mnemonic | Effect |
|------|----------|--------|
| Thalidomide | "Thali-limb-ide" | Limb defects (phocomelia) |
| Warfarin | "War-nose" | Nasal hypoplasia |
| Phenytoin | "Pheny-COIN" | Cleft lip, nail hypoplasia |
| Alcohol | "FAS = Flat philtrum" | Microcephaly, smooth philtrum |
| Valproic acid | "Val-NTD" | Neural tube defects |

## Pattern Recognition
- "Boot-shaped heart + cyanosis + squatting" → **TOF**
- "Egg-on-string appearance on X-ray" → **TGA**
- "Double bubble sign on X-ray" → **Duodenal atresia**
- "3 Cs (Cough, Choke, Cyanosis) on first feed" → **TEF**
- "Painless rectal bleeding in child + Meckel's scan positive" → **Meckel's diverticulum**
- "Child with constipation since birth + absent ganglion cells" → **Hirschsprung disease**
- "Horseshoe-shaped kidney at L3" → **Trapped by IMA**
- "Mother on valproate → baby with spina bifida" → **Valproic acid teratogenesis**
- "Maternal rubella → deaf child with cataracts" → **Congenital rubella syndrome**
- "Consanguineous parents → autosomal recessive disorder" → **Screen for carrier status**`,
        mnemonics: [
          { text: "VSD = Very Significant Defect (Most common CHD)", explanation: "VSD is the most common congenital heart defect. Remember V for Very common, and it is indeed the most Significant Defect by frequency." },
          { text: "Thali-LIMB-ide (Thalidomide causes limb defects)", explanation: "Thalidomide causes phocomelia (limb reduction defects). Break the word: Thali-LIMB-ide to remember the target organ." }
        ],
        keyPoints: [
          "VSD is most common CHD; TOF is most common cyanotic CHD",
          "Weeks 3-8 is the most teratogen-sensitive period",
          "Duodenal atresia = double bubble sign + associated with Down syndrome",
          "Type C TEF is most common (85%); presents with 3 Cs",
          "Maternal diabetes → caudal regression; Valproic acid → NTDs; Rubella → Cataracts + Deafness + PDA"
        ],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 10-20", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 8-15", edition: "8th" }
        ] },
      { layer: 5, slug: "developmental-anomalies-recall", title: "Developmental Anomalies - Active Recall", estimatedMinutes: 10,
        summary: "Self-test flashcards covering common congenital anomalies, teratogens, and their embryological basis across all organ systems.",
        contentMd: `# Active Recall

**Q1:** What is the most common congenital heart defect?
> VSD (Ventricular Septal Defect)

**Q2:** What is the most common cyanotic CHD?
> Tetralogy of Fallot

**Q3:** Name the 4 features of Tetralogy of Fallot.
> VSD, Overriding aorta, Pulmonary stenosis, Right Ventricular Hypertrophy

**Q4:** What is the embryological basis of TGA?
> Failure of spiral rotation of the aorticopulmonary septum

**Q5:** What is the most common type of TEF and its frequency?
> Type C (proximal esophageal atresia + distal fistula) — 85%

**Q6:** What X-ray sign is characteristic of duodenal atresia?
> Double bubble sign (associated with Down syndrome)

**Q7:** What is the Rule of 2s for Meckel's diverticulum?
> 2% of population, 2 feet from ileocecal junction, 2 inches long, 2 types of ectopic tissue, presents before age 2, 2x more in males

**Q8:** What artery traps horseshoe kidney?
> Inferior mesenteric artery (IMA) at L3 vertebral level

**Q9:** What does maternal rubella in the 1st trimester cause?
> Congenital rubella syndrome: Cataracts, Deafness, PDA

**Q10:** What is the most critical period for teratogenic effects?
> Weeks 3-8 (embryonic period / organogenesis)

**Q11:** Name 3 teratogens and their effects.
> Thalidomide → phocomelia; Valproic acid → NTDs; Alcohol → FAS (microcephaly, smooth philtrum)

**Q12:** What congenital anomaly is caused by failure of neural crest cell migration to the bowel?
> Hirschsprung disease (aganglionic megacolon)

**Q13:** Difference between omphalocele and gastroschisis?
> Omphalocele: midline, covered by membrane, may contain liver. Gastroschisis: right paraumbilical, NOT covered, bowel only

**Q14:** What does the PCPNDT Act in India prohibit?
> Sex determination during prenatal diagnostic procedures

**Q15:** What dose of folic acid prevents NTDs?
> 400 mcg/day pre-conception (5 mg/day if previous NTD)`,
        mnemonics: [],
        keyPoints: ["15 recall questions covering developmental anomalies across all organ systems"],
        textbookRefs: [
          { book: "IB Singh Embryology", chapter: "Ch 10-20", edition: "11th" },
          { book: "BD Chaurasia", chapter: "Human Embryology - Ch 8-15", edition: "8th" }
        ] },
    ],
  },
];
