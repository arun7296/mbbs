import type { TopicLessons } from "./content-loader";

export const pediatricsLessonsPart19: TopicLessons[] = [
  {
    topicCode: "PE-MOD-07-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "genetic-disorders-layer-1-foundation",
        title: "Down Syndrome & Genetic Disorders - Foundation",
        estimatedMinutes: 25,
        summary: "Down syndrome (trisomy 21) is the most common autosomal chromosome disorder (1 in 700 births). Caused by nondisjunction (95%), translocation (3-4%), or mosaicism (1-2%). Characterized by intellectual disability, distinctive facial features (flat facies, up-slanting palpebral fissures, epicanthal fold), cardiac anomalies (AV canal, VSD), GI abnormalities, and increased risk of hematologic malignancies.",
        contentMd: `# Down Syndrome & Genetic Disorders - Foundation

## Introduction
**Down Syndrome (Trisomy 21):**
- Most common autosomal chromosome disorder
- Incidence: 1 in 700 live births (higher in advanced maternal age)
- Intellectual disability, characteristic features, multiple organ involvement
- Life expectancy: 50-60 years (improved with medical care)

## Cytogenetics & Inheritance

### Karyotypic Types
1. **Regular Trisomy 21** (95%): Three complete copies of chromosome 21
   - Result of nondisjunction during meiosis
   - Risk increases with maternal age (especially >35 years)
   - Not heritable (random event in meiosis)

2. **Translocation Down Syndrome** (3-4%):
   - Extra chromosome 21 attached to another chromosome (often 14)
   - Karyotype: 46 chromosomes with extra material
   - Can be heritable (if parent is balanced translocation carrier)
   - Same clinical features as regular trisomy 21

3. **Mosaic Down Syndrome** (1-2%):
   - Some cells have trisomy 21; others are normal (46 chromosomes)
   - Often milder phenotype than regular trisomy 21
   - Variable expression depending on proportion of affected cells

## Maternal Risk Factors for Trisomy 21
- **Advanced maternal age**: Risk 1/1,500 at age 20; 1/100 at age 40
- **Previous child with trisomy 21**: 1-2% recurrence risk
- **Parental balanced translocation**: 10-15% recurrence if mother is carrier

## Clinical Features

### Craniofacial Features
- **Flat facies**: Hypoplastic nasal bridge
- **Up-slanting palpebral fissures**: Upward slant of eyes
- **Epicanthal folds**: Skin fold above inner canthus
- **Brushfield spots**: White spots on iris
- **Ear abnormalities**: Low-set ears, abnormal shape
- **Macroglossia**: Large tongue (protrusion out of mouth)
- **Dental abnormalities**: Delayed eruption, malposition

### Body Habitus
- **Short stature**: Often 15-20 cm below normal height
- **Muscle hypotonia**: Floppiness (floppy infant)
- **Broad hands**: Single palmar crease (simian crease)
- **Spacing**: Wide space between 1st and 2nd toes (sandal gap)
- **Dorsiflexion**: Increased flexibility of joints

### Cognitive Development
- **Intellectual disability**: Mild to moderate (IQ 30-70)
- **Developmental delay**: Especially in motor skills
- **Language delay**: Speech more affected than understanding
- **Learning capacity**: Can learn with appropriate education

### Cardiac Abnormalities (40-50%)
- **Atrioventricular (AV) canal defect**: Most common (30-40%)
- **Ventricular septal defect (VSD)**: 25-30%
- **Atrial septal defect (ASD)**: 10%
- **Patent ductus arteriosus (PDA)**: 5-10%
- **Tetralogy of Fallot (rare)**: 3%
- **Risk**: Pulmonary hypertension, heart failure

### Gastrointestinal Abnormalities
- **Duodenal atresia/stenosis**: 8-10% (presents with vomiting, polyhydramnios)
- **Anal atresia/stenosis**: 1%
- **Tracheoesophageal fistula (rare)**
- **Hirschsprung disease**: Increased risk

### Other Organ Involvement
- **Hematologic**: Increased risk of leukemia (ALL, AML), 15-20 times higher
- **Thyroid**: Hypothyroidism (15-20%), thyroid antibodies
- **Vision**: Strabismus (30%), myopia, cataracts
- **Hearing**: Conductive hearing loss (60-70%) from ear infections
- **Atlanto-axial instability**: Risk of spinal cord compression (5-15%)`,
        mnemonics: [
          {
            text: "Down Syndrome Features - FACES",
            explanation: "Flat facies, Atrioventricular canal (cardiac), Crease (palmar/simian), Ears (low-set), Sandal gap (wide spacing 1st-2nd toe)"
          },
          {
            text: "Trisomy 21 Types - NTM",
            explanation: "Nondisjunction (95%), Translocation (3-4%), Mosaic (1-2%)"
          }
        ],
        keyPoints: [
          "Down syndrome: Incidence 1/700; increases with maternal age >35",
          "Clinical: Flat facies, up-slanting eyes, epicanthal fold, macroglossia, hypotonia",
          "Cardiac: AV canal most common (30-40%); requires echocardiogram",
          "GI: Duodenal atresia (8-10%); presents with polyhydramnios/vomiting",
          "Hematologic: Increased leukemia risk (15-20 times higher); monitor for signs",
          "Most common autosomal chromosome disorder with viable phenotype"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 3: Genetics", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 81: Trisomy 21", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "genetic-disorders-layer-2-mechanism",
        title: "Down Syndrome - Molecular Basis",
        estimatedMinutes: 30,
        summary: "Trisomy 21: Three copies of chromosome 21 → 50% increase in chromosome 21 gene products → Dosage imbalance. Gene-dose imbalance affects neuronal development (decreased neurogenesis), cardiac development (septation defects), and hematopoiesis (leukemia predisposition). Maternal age effect linked to meiotic nondisjunction; exact mechanism remains unclear.",
        contentMd: `# Down Syndrome - Molecular Basis

## Chromosome 21 and Gene Dosage Imbalance

### Normal vs Trisomy 21 Gene Expression
- **Normal (2 copies)**: 100% chromosome 21 gene expression
- **Trisomy 21 (3 copies)**: 150% chromosome 21 gene expression
- **Dosage effect**: 50% increase in protein products from chromosome 21 genes
- **Critical imbalance**: Gene dosage sensitivity; 50% increase pathogenic

### Gene Dosage Sensitive Genes on Chromosome 21

**DSCR1 (Down Syndrome Critical Region 1):**
- Expressed at higher levels in trisomy 21
- Involved in NFAT signaling (calcium-dependent pathway)
- Altered cardiac development
- Contributes to intellectual disability

**APP (Amyloid Precursor Protein):**
- Overexpression → Increased Aβ (amyloid-beta) production
- Neuronal toxicity, neurodegeneration
- Earlier onset Alzheimer pathology in Down syndrome adults

**OLIG1, OLIG2 (Oligodendrocyte factors):**
- Abnormal oligodendrocyte development
- Reduced myelination of neurons
- Contributes to developmental delay

**NFAT5, DYRK1A (Kinases):**
- Altered intracellular signaling
- Disturbed neuronal development
- Intellectual disability pathogenesis

## Developmental Consequences of Gene Dosage Imbalance

### Neural Development Disruption

**Neurogenesis Impairment:**
1. **Reduced neural progenitor cell proliferation**: Decreased neuronal production
2. **Abnormal neuronal migration**: Disrupted cortical lamination
3. **Dendritic abnormalities**: Fewer dendritic spines; reduced synaptic density
4. **Synaptic dysfunction**: Impaired neurotransmission

**Result**: Intellectual disability (IQ 30-70), developmental delay

### Cardiac Development Defects

**Septal Development Abnormality:**
1. **Endocardial cushion development**: Disrupted
2. **Neural crest cell migration**: Impaired (DSCR1, other genes)
3. **Atrioventricular canal failure to close**: AV canal defect
4. **Ventricular septation failure**: VSD

**Molecular basis**:
- Gene dosage imbalance of transcription factors (RUNX2, SOX9)
- Altered cell migration signaling
- Abnormal extracellular matrix formation

**Result**: Cardiac defects in 40-50% (AV canal most common)

### Hematopoietic System Changes

**Leukemia Predisposition (15-20x increased risk):**
1. **Transient myeloproliferative disorder (TMD)**: First weeks of life (5-10% of infants)
   - Blast cells in blood/bone marrow
   - Usually self-limited
   - Risk of progression to acute megakaryoblastic leukemia (AMKL)

2. **GATA1 mutations**: Acquired somatic mutations
   - GATA1 involved in hematopoietic differentiation
   - Trisomy 21 provides permissive background for GATA1 mutations
   - Higher mutational burden in Down syndrome

3. **Molecular basis**:
   - Gene dosage imbalance of chromosome 21 genes involved in cell cycle, apoptosis
   - ERG (ETS-related gene) overexpression: Oncogenic potential
   - Altered apoptotic pathway: Reduced cell death of abnormal clones

**Result**: Increased ALL (most common), AML risk

### Gastrointestinal Development Defects

**Duodenal Atresia Pathogenesis:**
- Abnormal duodenal epithelial development
- Failed recanalization of duodenal lumen (occurs ~week 8-10 of gestation)
- Partial or complete obstruction
- Gene dosage effects on developmental signaling pathways (hedgehog, Wnt, Notch)

## Meiotic Nondisjunction and Maternal Age

### Nondisjunction Mechanism
- **Normal meiosis**: Homologous chromosomes separate (one to each daughter cell)
- **Nondisjunction**: Chromosomes fail to separate
- **Result**: One gamete gets 2 copies; other gets none
- **Fertilization**: 2 + 1 = 3 chromosomes (trisomy); 0 + 1 = monosomy (usually lethal)

### Maternal Age Effect
- **Age 20**: Trisomy 21 risk ~1/1,500
- **Age 30**: Risk ~1/900
- **Age 40**: Risk ~1/100
- **Age 45**: Risk ~1/30

**Proposed mechanisms:**
1. **Maternal meiotic checkpoint hypothesis**: Oocytes arrested in prophase I from birth; delayed checkpoint control with aging
2. **Oocyte aging**: Accumulated damage, reduced cohesion proteins (cohesin degradation)
3. **Cohesin hypothesis**: Age-dependent loss of cohesin proteins → weakened chromatid cohesion → nondisjunction
4. **Lack of checkpoints repair**: Cumulative DNA damage; reduced repair mechanisms

**Result**: Maternal age is most significant risk factor for trisomy 21`,
        mnemonics: [
          {
            text: "Gene Dosage Imbalance in Trisomy 21 - APP",
            explanation: "Amyloid Precursor Protein (neurodegeneration), DSCR1 (cardiac/signaling), DYRK1A (neural development)"
          },
          {
            text: "Maternal Age Risk - 3 decades rule",
            explanation: "Age 20: 1/1,500; Age 30: 1/900; Age 40: 1/100; Age 45: 1/30"
          }
        ],
        keyPoints: [
          "Gene dosage imbalance: 50% increase in chromosome 21 gene expression is pathogenic",
          "Intellectual disability: Reduced neurogenesis, abnormal neuronal migration, synaptic dysfunction",
          "Cardiac defects: Neural crest cell migration disruption → AV canal, VSD",
          "Leukemia risk: 15-20x higher; GATA1 mutations + permissive trisomy 21 background",
          "TMD (transient myeloproliferative disorder): 5-10% of infants; usually self-limited",
          "Maternal age effect: Cohesin protein loss → chromatid cohesion failure → nondisjunction",
          "Duodenal atresia: Developmental signaling pathway disruption (Wnt, hedgehog, Notch)"
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Chapter 5: Genetic Disorders", edition: "10th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 81: Trisomy 21", edition: "21st" }
        ]
      },
      {
        layer: 3,
        slug: "genetic-disorders-layer-3-clinical",
        title: "Down Syndrome - Diagnosis & Screening",
        estimatedMinutes: 25,
        summary: "Prenatal: NIPT (cell-free DNA testing) >99% sensitive; triple/quad screen, ultrasound findings (NT thickening, AV canal, duodenal bubble). Postnatal: Clinical features + karyotyping or FISH. Maternal age >35 is significant risk factor. Diagnosis often made at birth; counseling and multidisciplinary evaluation essential.",
        contentMd: `# Down Syndrome - Diagnosis & Screening

## Prenatal Screening & Diagnosis

### Non-Invasive Prenatal Testing (NIPT)

**Cell-free DNA Testing (Preferred first-line screen):**
- **Sensitivity**: >99% for trisomy 21
- **Specificity**: >99%
- **Timing**: After 9-10 weeks gestation
- **Method**: Analyzes fetal DNA in maternal blood
- **Advantages**: Minimal risk, easy to perform, quick results (days)
- **Disadvantage**: Can miss mosaicism

**Who should have NIPT:**
- **Advanced maternal age** (>35 years)
- **Abnormal ultrasound findings** (NT thickening, cardiac defects, polyhydramnios)
- **Family history** of Down syndrome
- **Abnormal first/second trimester screening results**

### Traditional Biochemical Screening

**First Trimester (11-14 weeks):**
- **Maternal age**
- **PAPP-A** (pregnancy-associated plasma protein A): Decreased in trisomy 21
- **hCG** (human chorionic gonadotropin): Increased in trisomy 21
- **Nuchal translucency (NT)**: Ultrasound measurement; increased NT (>3mm) suggests aneuploidy
- **Detection rate**: 85-90%

**Second Trimester (15-20 weeks) - Quad Screen:**
- **Maternal serum markers**:
  - **AFP** (alpha-fetoprotein): Decreased in trisomy 21
  - **hCG**: Increased
  - **uE3** (unconjugated estriol): Decreased
  - **Inhibin A**: Increased
- **Detection rate**: 80-85%

### Ultrasound Findings (Suggestive of Down Syndrome)

**First Trimester:**
- **Nuchal translucency >3 mm** (11-14 weeks): Most significant marker
- **Nasal bone hypoplasia** (11-14 weeks): Absent or very small

**Second Trimester:**
- **Cardiac defects** (AV canal, VSD, PDA): Present in 40-50%
- **Duodenal atresia**: "Double bubble" sign
- **Renal abnormalities**: Pyelectasis, cysts
- **Echogenic intracardiac focus**: Soft marker
- **Fetal growth restriction**: Mild growth lag
- **Polyhydramnios**: Excessive amniotic fluid
- **Ventriculomegaly**: Mild ventricular enlargement

## Postnatal Diagnosis

### Clinical Features at Birth (Classic Presentation)

**Most recognizable signs:**
1. **Hypotonia**: "Floppy baby"
2. **Facial features**: Flat facies, up-slanting eyes, epicanthal folds
3. **Palmar crease**: Single simian crease across palm
4. **Sandal gap**: Wide spacing between 1st-2nd toes
5. **Broad hands**: Short, broad with incurved 5th finger
6. **Macroglossia**: Large tongue

**Frequency of clinical signs at birth:**
- Hypotonia: 100% of neonates
- Flat facies: 90%
- Up-slanting palpebral fissures: 80%
- Simian crease: 50%
- Sandal gap: 50%
- Structural abnormality (cardiac, GI): 40-50%

### Confirmatory Testing

**Karyotyping (Gold Standard):**
- **Method**: Chromosome analysis of peripheral blood lymphocytes
- **Cost**: ~$500-1000 in India
- **Turnaround**: 7-14 days
- **Shows**: 47 chromosomes with three copies of chromosome 21 (regular trisomy 21)
- **Translocation variants**: Can identify if present

**Fluorescence In Situ Hybridization (FISH):**
- **Faster**: Results in 24-48 hours
- **Method**: Fluorescent probes for chromosome 21
- **Advantage**: Rapid confirmation; useful in neonatal period
- **Disadvantage**: Cannot detect balanced translocations

**Array CGH (Chromosomal Microarray Analysis):**
- **Detects**: Submicroscopic chromosomal imbalances
- **Used if**: FISH/karyotyping inconclusive; detect mosaicism

## Differential Diagnosis (Other Genetic Syndromes)

| Syndrome | Karyotype | Key Features |
|---|---|---|
| **Trisomy 18** (Edwards) | 47, XX/XY, +18 | Severe IUGR, severe facial abnormalities, clenched fists, rocker-bottom feet, early lethality |
| **Trisomy 13** (Patau) | 47, XX/XY, +13 | Severe facial cleft, holoprosencephaly, polydactyly, scalp defects, early lethality |
| **Turner** (Monosomy X) | 45, X | Short stature, webbed neck, coarctation, infertility, female only |
| **Klinefelter** (XXY) | 47, XXY | Tall stature, infertility, mild learning disability, male only |

## Postnatal Evaluation and Management Plan

**Immediate (First days of life):**
1. **Pediatric cardiologist referral**: Echocardiogram to evaluate for cardiac defects
2. **Feeding assessment**: Hypotonia may affect feeding; support needed
3. **Genetic counseling**: Family discussion, implications, prognosis
4. **Karyotyping/FISH**: Confirmatory testing

**First weeks:**
1. **Thyroid screening**: TSH at 3-5 days and 2 weeks (congenital hypothyroidism screening)
2. **Audiology**: Formal hearing assessment (conductive loss common)
3. **Ophthalmology**: Vision screening (strabismus, refractive errors)
4. **Developmental assessment**: Early intervention services

**Ongoing:**
1. **Neurological monitoring**: Atlanto-axial instability screening
2. **Hematologic surveillance**: Monitor for signs of leukemia (CBC periodically)
3. **Growth monitoring**: Special growth charts for Down syndrome
4. **Educatio**: Early childhood intervention programs`,
        mnemonics: [
          {
            text: "Prenatal Screening - NIPT/Quad",
            explanation: "NIPT (>99% sensitive), or Quad screen (AFP, hCG, uE3, Inhibin A)"
          },
          {
            text: "Clinical Features at Birth - FACES2",
            explanation: "Flat facies, up-slanting eyes, Crease (simian), Ears (low-set), Sandal gap, Hypotonia (most universal)"
          }
        ],
        keyPoints: [
          "NIPT: >99% sensitive and specific; preferred first-line prenatal screen",
          "Maternal age >35: Significant risk factor; should offer prenatal screening",
          "Ultrasound findings: NT >3mm, duodenal atresia ('double bubble'), cardiac defects",
          "Clinical diagnosis: Hypotonia, flat facies, simian crease, sandal gap, structural defects",
          "Karyotyping: Confirmatory test; identifies regular vs translocation vs mosaic types",
          "FISH: Faster results (24-48 hours); useful for rapid neonatal confirmation",
          "Counseling critical: Discuss prognosis, life expectancy (50-60 years), intervention services"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 3: Genetics", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 81: Trisomy 21", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "genetic-disorders-layer-4-exam",
        title: "Down Syndrome - Management & Complications",
        estimatedMinutes: 25,
        summary: "Early intervention services (physical therapy, speech therapy, developmental assessment). Cardiac management: Echocardiogram screening; surgical repair if indicated. Thyroid screening (hypothyroidism 15-20%). Hearing evaluation (conductive loss common). Monitor for leukemia, atlanto-axial instability, GI complications. Educational support and social integration.",
        contentMd: `# Down Syndrome - Management & Complications

## Multidisciplinary Care Approach

### Initial Evaluation

**Cardiac Assessment:**
- **Echocardiogram**: Mandatory for all newborns with Down syndrome
- **Indications for repair**:
  - AV canal defect (most common cardiac anomaly)
  - Large VSD (>0.5 cm²)
  - Symptoms of heart failure (poor feeding, failure to thrive)
  - Pulmonary hypertension risk
- **Timing of repair**: Usually 4-6 months of age (weight >3-4 kg)
- **Outcome**: Good with modern surgical technique; can achieve normal functional status

**Thyroid Screening:**
- **TSH/free T4**: Screen at birth (within 3-5 days) and 2 weeks
- **Congenital hypothyroidism**: 1:200 in Down syndrome (vs 1:4000 in general population)
- **Management**: Levothyroxine replacement if TSH elevated
- **Periodic reassessment**: TSH checks annually (acquired hypothyroidism also increased)
- **Benefit**: Early treatment prevents developmental delay

**Hearing Assessment:**
- **Conductive hearing loss**: 50-70% have some degree
- **Sensorineural**: 15-20%
- **Cause**: Otitis media with effusion (small ear canal, eustachian tube dysfunction)
- **Assessment**: Audiology evaluation in first weeks; formal testing at 3 months
- **Management**:
  - Watchful waiting initially (often resolves)
  - Hearing aids if persistent loss
  - Tympanostomy tubes if recurrent otitis media

**Vision Assessment:**
- **Strabismus**: 30-40% (can require surgery for ocular alignment)
- **Refractive errors**: Myopia, hyperopia, astigmatism common
- **Other**: Cataracts (rare), keratoconus
- **Ophthalmology evaluation**: In first weeks of life

### Developmental Intervention

**Early Intervention Programs (Birth-3 years):**
- **Physical therapy**: Improve muscle tone, mobility, prevent contractures
- **Occupational therapy**: Fine motor skills, adaptive feeding
- **Speech-language pathology**: Language development, communication strategies
- **Developmental assessment**: Monitor progress; adjust interventions
- **Family support**: Parent education, counseling

**Educational Support (School-age):**
- **Individualized Education Plan (IEP)**: Tailored to child's abilities
- **Special education services**: Depending on intellectual ability
- **Inclusive education**: Integration with typically developing peers when possible
- **Vocational training**: Adolescents; supported employment programs

## Complications and Monitoring

### Gastrointestinal Complications

**Duodenal Atresia/Stenosis (8-10%):**
- **Presentation**: Vomiting (bilious), polyhydramnios prenatally, abdominal distension
- **Diagnosis**: "Double bubble" on abdominal X-ray (gastric bubble + duodenal bubble)
- **Management**: Surgical repair (duodenoduodenostomy) in first weeks of life
- **Prognosis**: Good with surgical intervention

**Hirschsprung Disease (1%):**
- **Presentation**: Failure to pass meconium, enterocolitis, abdominal distension
- **Diagnosis**: Contrast enema (transition zone), rectal biopsy (absent ganglion cells)
- **Management**: Surgical resection of aganglionic segment

**Celiac Disease (5-10%):**
- **Increased risk**: Autoimmune mechanism
- **Screening**: Tissue transglutaminase (tTG) antibodies annually
- **Management**: Gluten-free diet if confirmed

**Feeding Difficulties:**
- **Hypotonia**: Weak suck, poor feeding
- **Macroglossia**: May interfere with feeding
- **Management**: Speech therapy, adaptive feeding techniques, nasogastric feeding if needed

### Hematologic Complications

**Transient Myeloproliferative Disorder (TMD):**
- **Incidence**: 5-10% of Down syndrome infants
- **Presentation**: Jaundice, hepatosplenomegaly, blasts in blood
- **Age of onset**: First weeks of life
- **Natural history**: Usually self-limited (resolves by 3 months)
- **Risk**: 30-40% progress to acute leukemia (especially AMKL)
- **Monitoring**: CBC; watch for signs of progression

**Acute Leukemia:**
- **Risk**: 15-20 times higher than general population; 1/150 in Down syndrome
- **Types**: ALL (60-70%), AMKL (acute megakaryoblastic, unique to Down syndrome; 30-40%)
- **Presentation**: Anemia, thrombocytopenia, bleeding, infections, hepatosplenomegaly
- **Prognosis**: Better in Down syndrome than non-Down syndrome leukemia (better chemotherapy tolerance, fewer toxicities)
- **Monitoring**: CBC annually or if symptoms (fatigue, bleeding, infections)

### Orthopedic Complications

**Atlanto-axial Instability (AAI):**
- **Incidence**: 10-15% with radiographic evidence; 1-2% symptomatic
- **Mechanism**: Joint laxity from ligamentous laxity; risk of spinal cord compression
- **Screening**: Neck X-rays (lateral view in flexion/extension) at age 3-5 years
- **Monitoring**: Restrict activities (contact sports, gymnastics) if instability present
- **Surgical intervention**: Fusion if symptomatic (rare)
- **Red flags**: Neck pain, progressive neurological deficit, loss of motor skills

**Patellar Dislocation:**
- **Increased risk**: Due to generalized joint laxity, muscle weakness
- **Management**: Physical therapy; surgical correction if recurrent

### Endocrine & Metabolic

**Hypothyroidism:**
- **Congenital**: 1/200 (vs 1/4000 general population)
- **Acquired**: Increases with age; ~20% by adulthood
- **Screening**: Initial (birth), then annually
- **Management**: Levothyroxine replacement; monitor TSH

**Obesity:**
- **Increased risk**: Reduced activity, metabolic factors
- **Management**: Dietary counseling, exercise programs, family support

### Behavioral & Mental Health

**Behavioral Issues:**
- **Oppositional behavior**: Common in early childhood
- **Attention deficit**: Can require management strategies
- **Management**: Behavioral approaches, parental support; rarely medications

**Mental Health:**
- **Depression**: More common in adolescents/adults
- **Anxiety disorders**: Can occur
- **Early identification**: Mental health screening, psychological support`,
        mnemonics: [
          {
            text: "Down Syndrome Management - FETCH",
            explanation: "Feeding (PT, OT), Early intervention (speech, PT, development), Thyroid (TSH screen), Cardiac (echo), Hearing (audiology)"
          },
          {
            text: "Complications Monitoring - BEACH",
            explanation: "Behavior, Endocrine (thyroid), Atlanto-axial instability, Cardiac, Hematologic (leukemia)"
          }
        ],
        keyPoints: [
          "Cardiac defects: AV canal most common (30-40%); echocardiogram mandatory",
          "Surgical repair timing: 4-6 months of age for AV canal; good outcomes",
          "Thyroid screening: Birth + annually; hypothyroidism 1/200 vs 1/4000 general",
          "Hearing: 50-70% conductive loss (otitis media); audiology evaluation essential",
          "Early intervention: PT, OT, speech therapy critical for developmental outcomes",
          "Leukemia risk: 15-20x higher; monitor with annual CBC",
          "TMD: Self-limited in 60-70%; 30-40% progress to acute leukemia",
          "Atlanto-axial instability: 1-2% symptomatic; restrict contact sports",
          "Life expectancy: 50-60 years with good medical care and support"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 3: Genetics", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 81: Trisomy 21", edition: "21st" }
        ]
      },
      {
        layer: 5,
        slug: "genetic-disorders-layer-5-active-recall",
        title: "Down Syndrome - Active Recall",
        estimatedMinutes: 15,
        summary: "Test your knowledge of Down syndrome genetics, diagnosis, and clinical management with case-based questions.",
        contentMd: `# Active Recall - Down Syndrome & Genetic Disorders

**Q1: A pregnant woman aged 42 is offered prenatal screening for chromosomal abnormalities. What is the risk of trisomy 21 at her age, and what test would you recommend?**
> At age 42, risk of trisomy 21 is approximately 1/100 (much higher than general population 1/700). Recommended test: **NIPT (Non-Invasive Prenatal Testing)** - sensitivity >99%, specificity >99%, can be done from 9-10 weeks gestation. If NIPT abnormal or unavailable, offer invasive testing (CVS at 11-14 weeks or amniocentesis at 15-20 weeks) for definitive karyotyping.

**Q2: An infant born with "floppy baby" presentation, flat facies, up-slanting eyes, single palmar crease, and sandal gap between 1st-2nd toes. Clinical diagnosis suspected. What confirmatory test and timeline?**
> **Suspected diagnosis**: Down syndrome. **Confirmatory tests**: (1) **FISH** (fastest - 24-48 hours; detects trisomy 21), or (2) **Karyotyping** (gold standard; 7-14 days; identifies type: regular trisomy 21, translocation, or mosaic). Order both if possible. **Clinical presentation**: Most signs present at birth (flat facies 90%, hypotonia 100%, up-slanting eyes 80%, simian crease 50%).

**Q3: Why does maternal age >35 significantly increase the risk of trisomy 21? Explain the molecular mechanism.**
> **Maternal age effect**: Due to **cohesin protein loss**. (1) Oocytes arrested in prophase I from birth; with aging, cohesin proteins degrade (2) Loss of cohesin → Weakened sister chromatid cohesion (3) Meiosis I nondisjunction → Chromosome 21 fails to separate (4) Results in gamete with 2 copies chromosome 21. (5) Fertilization: 2 + 1 = trisomy 21 (47, XX/XY, +21).

**Q4: A newborn with Down syndrome has an echocardiogram showing AV canal defect. Explain the embryologic basis and management plan.**
> **Embryologic basis**: AV canal defect from abnormal neural crest cell migration and endocardial cushion development. Gene dosage imbalance of chromosome 21 genes (DSCR1, transcription factors) disrupts developmental signaling. **AV canal defect features**: Complete form has ostium primum ASD + inlet VSD + common AV valve. **Management**: (1) Monitor for signs of heart failure, (2) Surgical repair at 4-6 months of age (when weight >3 kg), (3) Good prognosis with modern surgery.

**Q5: A 2-week-old with Down syndrome has a TSH of 8.5 mIU/L (elevated) and free T4 of 0.8 ng/dL (low-normal). Diagnosis and management?**
> **Diagnosis**: Congenital hypothyroidism (TSH elevated, free T4 low). **Incidence**: 1/200 in Down syndrome (vs 1/4000 general population). **Management**: Start **levothyroxine replacement** at 10-15 mcg/kg/day (adjust based on TSH/free T4 response). **Benefit**: Early treatment prevents intellectual disability, growth failure. **Monitoring**: Recheck TSH/free T4 at 4-6 weeks, then periodically; screen annually (acquired hypothyroidism also common).

**Q6: A 3-year-old with Down syndrome undergoes developmental screening showing significant delay. What early intervention services are essential?**
> **Essential services**: (1) **Physical therapy**: Improve muscle tone, mobility (hypotonia is universal), prevent contractures. (2) **Occupational therapy**: Fine motor skills, adaptive feeding (macroglossia/hypotonia affect feeding). (3) **Speech-language pathology**: Language development (speech more delayed than comprehension); communication strategies. (4) **Developmental assessment**: Ongoing monitoring; adjust interventions. (5) **Family support**: Parent education, counseling. Benefit: Better outcomes with early intensive intervention before age 3.

**Q7: A 5-year-old with Down syndrome has audiologic testing showing conductive hearing loss (air-bone gap). Explain the mechanism and management.**
> **Mechanism**: 50-70% of Down syndrome children have conductive hearing loss. **Cause**: Otitis media with effusion (OME) - small ear canals, eustachian tube dysfunction, increased infection risk. **Diagnosis**: Tympanometry shows Type B (flat) curve; audiometry shows air-bone gap. **Management**: (1) Watch and wait initially (often resolves spontaneously), (2) If persistent >3 months or affecting speech development: tympanostomy tubes, (3) Hearing aids if permanent loss, (4) Periodic follow-up.

**Q8: A 7-year-old with Down syndrome presents with jaundice, hepatosplenomegaly, and blasts in peripheral blood. CBC shows: WBC 45,000/μL, Hgb 8 g/dL, Plt 50,000/μL. Diagnosis?**
> **Diagnosis**: Either (1) **Transient Myeloproliferative Disorder (TMD)** - if age <1 year (5-10% of Down syndrome infants; self-limited in ~60%), or (2) **Acute Leukemia** - if older. **In this 7-year-old**: Likely acute leukemia (30-40% AMKL - acute megakaryoblastic leukemia; 60-70% ALL). **Risk**: 15-20x higher in Down syndrome than general population. **Prognosis**: Better in Down syndrome (fewer treatment toxicities, better chemotherapy tolerance). **Management**: Referral to pediatric oncology; chemotherapy.

**Q9: Explain why Down syndrome children have increased risk of acute megakaryoblastic leukemia (AMKL), and what is the molecular basis?**
> **Gene dosage imbalance**: 3 copies of chromosome 21 → 50% overexpression of chromosome 21 genes. **Molecular basis**: (1) **ERG overexpression** (chromosome 21 gene) → Oncogenic potential. (2) **GATA1 mutations**: Acquired somatic mutations in hematopoietic precursor cells. Down syndrome provides permissive background (altered cell cycle, apoptosis regulation). (3) **Result**: GATA1 mutations + gene dosage imbalance → Selective advantage for megakaryoblastic lineage. **Unique to Down syndrome**: AMKL rare outside Down syndrome; 50x more common in Down syndrome.

**Q10: A 4-year-old with Down syndrome presents with progressive neck pain and weakness in lower extremities. Imaging ordered. What complication are you concerned about?**
> **Complication**: **Atlanto-axial instability (AAI)** - abnormal motion between C1 (atlas) and C2 (axis) from generalized joint laxity. **Incidence**: 10-15% radiographic evidence; 1-2% symptomatic. **Pathophysiology**: Looseness of transverse atlantal ligament; risk of spinal cord compression with neck movement. **Management**: (1) **Neck X-rays** (lateral views in flexion/extension) for assessment, (2) Restrict contact sports, gymnastics, high-impact activities, (3) Surgical fusion (C1-C2) if symptomatic or imaging shows severe instability. **Prevention**: Avoid trauma; screen at age 3-5 years.

**Q11: A 2-month-old with Down syndrome has CBC showing: WBC 18,000/μL, with blasts present, Hgb 10 g/dL, Plt 75,000/μL. Bone marrow biopsy shows megakaryoblasts. Diagnosis and prognosis?**
> **Diagnosis**: **Transient Myeloproliferative Disorder (TMD)** (also called transient abnormal myelopoiesis). **Features**: Self-limited myeloproliferation in first weeks-months of life; unique to Down syndrome. **Natural history**: (1) 60-70% resolve spontaneously by 3 months, (2) 30-40% progress to acute leukemia (usually AMKL) by age 3-5 years. **Management**: (1) Monitor with serial CBC, (2) Cytarabine (low-dose) may be used if life-threatening, (3) Prepare family for possible progression to acute leukemia; intensive monitoring required.

**Q12: Describe the comprehensive screening and monitoring plan for a newborn with confirmed Down syndrome.**
> **Immediate (first week)**: (1) **Cardiac**: Echocardiogram to screen for AV canal, VSD, other defects. (2) **Thyroid**: TSH/free T4 (part of newborn screening); repeat at 2 weeks. (3) **Genetic counseling**: Family discussion, recurrence risk, prognosis. (4) **Feeding assessment**: Support for hypotonia-related feeding difficulties.

> **First month**: (1) **Audiology**: Formal hearing assessment (conductive loss common; otoacoustic emissions, audiology evaluation). (2) **Ophthalmology**: Vision screening (strabismus, refractive errors). (3) **Early intervention referral**: Physical, occupational, speech therapy.

> **Ongoing (First year)**: (1) **Thyroid**: Repeat TSH at 3-6 months, then annually. (2) **Hematologic**: CBC at diagnosis, monitor for TMD or leukemia signs. (3) **Growth**: Special Down syndrome growth charts; monitor growth velocity. (4) **Developmental**: Regular developmental assessment; adjust early intervention.

> **Age 3-5 years**: (1) **Atlanto-axial screening**: Neck X-rays (flexion/extension views). (2) **Celiac screening**: tTG antibodies (5-10% have celiac disease). (3) **Educational planning**: Transition to school; IEP development.`,
        mnemonics: [
          {
            text: "Down Syndrome Screening - CHEF",
            explanation: "Cardiac (echo), Hearing (audiology), Endocrine (TSH), Feeding (PT/OT)"
          },
          {
            text: "Leukemia Risk Factors - GEAT",
            explanation: "Gene dosage (50% increase), ERG overexpression, GATA1 mutations, Age-dependent accumulation"
          }
        ],
        keyPoints: [
          "Maternal age >35: Risk 1/100 at age 40; genetic counseling and NIPT screening essential",
          "NIPT: Preferred first-line test; >99% sensitive/specific for trisomy 21",
          "Clinical features at birth: Hypotonia (100%), flat facies (90%), up-slanting eyes (80%), simian crease (50%)",
          "Cardiac defects: AV canal (30-40%); surgical repair at 4-6 months age with good prognosis",
          "Thyroid screening: Mandatory; congenital hypothyroidism 1/200 (50x higher than general)",
          "Hearing: 50-70% conductive loss; tympanostomy tubes often needed",
          "Early intervention critical: PT, OT, speech therapy before age 3 for best outcomes",
          "Leukemia risk: 15-20x higher; AMKL unique to Down syndrome",
          "TMD: Self-limited 60-70%; 30-40% progress to acute leukemia",
          "Life expectancy: 50-60 years with comprehensive medical care and support"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 3: Genetics", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 81: Trisomy 21", edition: "21st" }
        ]
      }
    ]
  }
];
