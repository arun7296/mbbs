import type { TopicLessons } from "./content-loader";

/**
 * 5-layer lessons for the final 4 topics to achieve 100% NMC CBME + AIIMS coverage.
 * Topics:
 *   IM-MOD-05-TOP-07: Clinical Genetics & Genetic Counseling
 *   IM-MOD-05-TOP-08: Nutritional & Metabolic Disorders
 *   DR-MOD-01-TOP-05: Hair & Nail Disorders
 *   DR-MOD-05-TOP-04: Skin Manifestations of Systemic Diseases
 */
export const final4TopicLessons: TopicLessons[] = [

  // ═══════════════════════════════════════════════════════════════
  // IM-MOD-05-TOP-07: CLINICAL GENETICS & GENETIC COUNSELING
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "IM-MOD-05-TOP-07",
    layers: [
      {
        layer: 1,
        slug: "clinical-genetics-counseling-foundation",
        title: "Clinical Genetics & Genetic Counseling - Foundation",
        estimatedMinutes: 20,
        summary: "Fundamentals of clinical genetics including inheritance patterns, common chromosomal and single-gene disorders, and the role of genetic counseling in Indian healthcare.",
        contentMd: `# Clinical Genetics & Genetic Counseling

## Introduction
Clinical genetics bridges basic science and clinical medicine, encompassing the diagnosis, management, and prevention of genetic disorders. India has a high burden of genetic diseases due to consanguinity (especially in South India — 20-30% in some communities), founder effects in endogamous populations, and high carrier rates for hemoglobinopathies.

## Patterns of Inheritance

| Pattern | Characteristics | Examples |
|---------|----------------|----------|
| **Autosomal Dominant** | 50% risk per offspring; variable expressivity | Marfan syndrome, NF1, ADPKD, Huntington disease |
| **Autosomal Recessive** | 25% risk if both parents carriers; often enzyme deficiencies | Thalassemia, sickle cell, CF, Wilson disease |
| **X-linked Recessive** | Males affected, females carriers | Hemophilia A/B, G6PD deficiency, DMD |
| **X-linked Dominant** | Affects both sexes; may be lethal in males | Rett syndrome, incontinentia pigmenti |
| **Mitochondrial** | Maternal inheritance; variable heteroplasmy | MELAS, MERRF, Leber hereditary optic neuropathy |

## Common Chromosomal Disorders

### Down Syndrome (Trisomy 21)
- Most common chromosomal disorder: 1 in 700 live births
- Risk increases with maternal age (>35 years)
- Features: intellectual disability, flat facies, single palmar crease, epicanthic folds, Brushfield spots, AV canal defect
- Screening: First trimester combined test (NT + β-hCG + PAPP-A), quadruple test in 2nd trimester

### Turner Syndrome (45,X)
- 1 in 2500 female births
- Features: short stature, webbed neck, shield chest, coarctation of aorta, streak gonads, primary amenorrhea
- Diagnosis: karyotype; treat with GH + estrogen replacement

### Klinefelter Syndrome (47,XXY)
- 1 in 600 male births
- Features: tall stature, gynecomastia, small testes, infertility, learning difficulties
- Diagnosis: karyotype; testosterone replacement from puberty

## Indian Context
- **Consanguinity**: 20-30% in South Indian communities leads to high AR disease burden
- **Thalassemia**: India has 30-40 million carriers of β-thalassemia trait
- **Sickle cell**: High prevalence in tribal populations of central/western India
- **National programs**: RBSK (Rashtriya Bal Swasthya Karyakram) screens for birth defects

> **Clinical Pearl**: In India, always consider consanguinity when evaluating autosomal recessive conditions. A detailed three-generation pedigree is essential.`,
        mnemonics: [
          { text: "DOWN features: Duodenal atresia, One (single) palmar crease, Wide gap 1st-2nd toe, Nuchal translucency", explanation: "Key features of Down syndrome for quick recall" },
          { text: "TURNER: T-short stature, U-uterus absent (streak gonads), R-Renal horseshoe, N-Neck webbed, E-Estrogen absent, R-aorta (coarctation)", explanation: "Turner syndrome features" },
        ],
        keyPoints: [
          "Autosomal dominant: 50% risk, variable expressivity; Autosomal recessive: 25% risk, both parents must be carriers",
          "Down syndrome (Trisomy 21) is the most common chromosomal disorder; risk increases with maternal age >35",
          "India has 30-40 million β-thalassemia carriers — universal screening is recommended before marriage",
          "Consanguinity in India (20-30% in South Indian communities) increases autosomal recessive disease risk",
          "Turner syndrome (45,X): short stature, primary amenorrhea, coarctation of aorta",
          "Klinefelter syndrome (47,XXY): tall, gynecomastia, small testes, infertility",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Principles of Human Genetics", edition: "21st" },
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Genetics and Disease", edition: "26th" },
        ],
      },
      {
        layer: 2,
        slug: "clinical-genetics-counseling-mechanism",
        title: "Clinical Genetics & Genetic Counseling - Mechanism",
        estimatedMinutes: 25,
        summary: "Molecular mechanisms of genetic disease, prenatal diagnostic techniques, and pharmacogenomics principles.",
        contentMd: `# Genetic Mechanisms & Diagnostics

## Molecular Basis of Genetic Disease

### Single Gene Defects
- **Loss of function**: enzyme deficiency (e.g., PKU — phenylalanine hydroxylase)
- **Gain of function**: constitutive activation (e.g., achondroplasia — FGFR3)
- **Dominant negative**: mutant protein disrupts normal (e.g., osteogenesis imperfecta — collagen)

### Trinucleotide Repeat Disorders
| Disorder | Repeat | Gene | Anticipation |
|----------|--------|------|-------------|
| Huntington disease | CAG | HTT | Yes |
| Fragile X | CGG | FMR1 | Yes |
| Myotonic dystrophy | CTG | DMPK | Yes |
| Friedreich ataxia | GAA | FXN | No (AR) |

### Epigenetic Mechanisms
- **Genomic imprinting**: Prader-Willi (paternal deletion 15q) vs Angelman (maternal deletion 15q)
- **X-inactivation**: Random in females, explains variable expression in X-linked carriers

## Prenatal Diagnosis

| Test | Timing | What it detects | Risk |
|------|--------|----------------|------|
| **Chorionic Villus Sampling (CVS)** | 10-13 weeks | Karyotype, DNA analysis | 1% miscarriage |
| **Amniocentesis** | 15-18 weeks | Karyotype, AFP, DNA | 0.5% miscarriage |
| **Cordocentesis (PUBS)** | >18 weeks | Rapid karyotype, blood disorders | 1-2% |
| **Cell-free fetal DNA (NIPT)** | >10 weeks | Trisomy 13/18/21, sex | Non-invasive, no risk |
| **Preimplantation genetic testing** | Before implantation | Specific mutations | IVF required |

## Pharmacogenomics
- **CYP2D6**: Poor metabolizers at risk of codeine toxicity or therapeutic failure
- **HLA-B*5701**: Abacavir hypersensitivity screening mandatory before prescribing
- **TPMT**: Thiopurine metabolism; poor metabolizers need dose reduction for azathioprine
- **Warfarin**: CYP2C9 and VKORC1 polymorphisms affect dosing

> **Indian Relevance**: G6PD deficiency screening before prescribing primaquine for malaria is critical in endemic areas.`,
        mnemonics: [
          { text: "CAG-CTG-CGG: Huntington-Myotonic-Fragile X (trinucleotide repeats)", explanation: "The three most tested trinucleotide repeat disorders and their specific repeats" },
          { text: "CVS before Amnio: C (10-13 wks) comes before A (15-18 wks) alphabetically", explanation: "Timing of prenatal invasive procedures" },
        ],
        keyPoints: [
          "Trinucleotide repeat disorders show anticipation — earlier onset and severity in successive generations",
          "Genomic imprinting: Prader-Willi (paternal 15q deletion) vs Angelman (maternal 15q deletion) — same region, different phenotype",
          "CVS at 10-13 weeks (1% miscarriage risk) vs amniocentesis at 15-18 weeks (0.5% risk)",
          "Cell-free fetal DNA (NIPT) is non-invasive and detects trisomies 13/18/21 from 10 weeks",
          "CYP2D6 poor metabolizers: codeine toxicity; HLA-B*5701: abacavir hypersensitivity",
          "G6PD screening essential before primaquine in India's malaria-endemic regions",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Pharmacogenomics", edition: "21st" },
          { book: "Thompson & Thompson Genetics in Medicine", chapter: "Prenatal Diagnosis", edition: "8th" },
        ],
      },
      {
        layer: 3,
        slug: "clinical-genetics-counseling-clinical",
        title: "Clinical Genetics & Genetic Counseling - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical approach to genetic counseling, carrier screening, newborn screening, and management of common genetic disorders in India.",
        contentMd: `# Genetic Counseling & Clinical Management

## The Genetic Counseling Process
1. **Indication assessment**: family history, consanguinity, recurrent losses, advanced maternal age
2. **Pedigree construction**: minimum 3 generations, standardized symbols
3. **Risk calculation**: Mendelian ratios, Bayesian probability for carrier status
4. **Non-directive counseling**: provide information without recommending action
5. **Psychosocial support**: address guilt, grief, reproductive decisions

## Carrier Screening Programs in India

### Thalassemia Screening
- **Who**: All couples planning pregnancy in high-prevalence areas (Gujarat, Maharashtra, Punjab, Bengal)
- **Test**: HPLC (HbA2 >3.5% suggests β-thal trait), CBC (MCV <80, MCH <27)
- **If both carriers**: 25% risk of thalassemia major; offer prenatal diagnosis via CVS

### Sickle Cell Screening
- **Target**: Tribal populations of MP, Chhattisgarh, Maharashtra, Odisha, Gujarat
- **Test**: Solubility test (screening) → HPLC (confirmation)
- **National program**: NSSP (National Sickle Cell Anaemia Elimination Mission, 2023)

### Newborn Screening (NBS)
- India lacks universal NBS; pilot programs for CH, CAH, G6PD, PKU, galactosemia
- Recommended panel: congenital hypothyroidism (most common treatable cause of intellectual disability), CAH, sickle cell

## Management of Selected Genetic Disorders

### Thalassemia Major
- Regular transfusions (pre-transfusion Hb target: 9-10 g/dL)
- Iron chelation: deferasirox (oral, first-line), deferoxamine (SC infusion)
- Bone marrow transplant: curative; best results from matched sibling donor
- Gene therapy: emerging (betibeglogene autotemcel — approved in some countries)

### Wilson Disease
- Kayser-Fleischer rings, low ceruloplasmin, high 24h urine copper
- Treatment: D-penicillamine or trientine (chelation) + zinc (maintenance)
- Liver transplant for fulminant hepatic failure

> **Clinical Pearl**: In India, every case of unexplained cirrhosis in a young patient (<40 years) should be screened for Wilson disease with slit-lamp examination and ceruloplasmin.`,
        mnemonics: [
          { text: "THAL screen: T-Target high-prevalence areas, H-HPLC test, A-A2 >3.5%, L-Low MCV/MCH", explanation: "Systematic approach to thalassemia carrier screening" },
          { text: "Wilson's KFC: Kayser-Fleischer rings, F-low ceruloplasmin (Ferroxidase), C-Copper high in urine", explanation: "Diagnostic triad of Wilson disease" },
        ],
        keyPoints: [
          "Genetic counseling is non-directive — provide information and support without recommending a course of action",
          "β-thalassemia trait: HbA2 >3.5% on HPLC, MCV <80, MCH <27; both parents carriers = 25% risk of major",
          "National Sickle Cell Anaemia Elimination Mission (2023) targets tribal populations across central India",
          "India lacks universal newborn screening; congenital hypothyroidism screening is most cost-effective",
          "Wilson disease: K-F rings + low ceruloplasmin + high urine copper; treat with D-penicillamine",
          "Thalassemia major: regular transfusion + iron chelation; BMT is curative",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Genetic Counseling", edition: "21st" },
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Screening for Genetic Diseases", edition: "26th" },
        ],
      },
      {
        layer: 4,
        slug: "clinical-genetics-counseling-exam",
        title: "Clinical Genetics & Genetic Counseling - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam facts and NEXT-pattern clinical scenarios for clinical genetics.",
        contentMd: `# Clinical Genetics - Exam Prep

## High-Yield Table

| Disorder | Inheritance | Key Feature | Diagnostic Test |
|----------|------------|-------------|-----------------|
| Down syndrome | Trisomy 21 | Single palmar crease, AV canal | Karyotype; FISH |
| Turner syndrome | 45,X | Short stature, coarctation | Karyotype |
| Klinefelter | 47,XXY | Tall, gynecomastia, infertility | Karyotype; Barr body |
| Marfan | AD | Tall, arachnodactyly, aortic root | Clinical (Ghent criteria) |
| Fragile X | X-linked | Macro-orchidism, intellectual disability | Molecular (CGG repeats) |
| Huntington | AD, anticipation | Chorea, psychiatric, caudate atrophy | Molecular (CAG >36) |
| CF | AR | Lung + pancreas; sweat Cl >60 | Sweat chloride; CFTR mutation |
| PKU | AR | Musty odor, fair skin, ID | Guthrie test; Phe levels |
| Prader-Willi | Paternal 15q del | Hypotonia → obesity, hypogonadism | Methylation analysis |
| Angelman | Maternal 15q del | Happy puppet, seizures, ataxia | Methylation analysis |

## Common NEXT-Pattern Scenarios
- Consanguineous couple with affected child → calculate recurrence risk (AR = 25%)
- Maternal age 38 → offer NIPT or amniocentesis
- Young cirrhosis → screen for Wilson (K-F rings, ceruloplasmin)
- Repeated male infant deaths → think X-linked recessive
- Thalassemia trait couple → 25% risk; offer CVS at 11 weeks`,
        mnemonics: [
          { text: "Prader-Willi vs Angelman: Papa's deletion (Prader = Paternal) vs Mama's deletion (Angelman = Maternal)", explanation: "Imprinting disorders: which parent's deletion causes which syndrome" },
          { text: "MARFAN: Mitral valve prolapse, Arachnodactyly, Retinal detachment, Fibrillin-1, Aortic root dilation, Nearsightedness", explanation: "Key features of Marfan syndrome" },
        ],
        keyPoints: [
          "Down syndrome: most common trisomy; AV canal defect is the characteristic cardiac lesion",
          "Fragile X: most common inherited cause of intellectual disability; macro-orchidism after puberty",
          "Prader-Willi (paternal deletion): hypotonia in infancy, obesity later; Angelman (maternal): happy puppet syndrome",
          "Huntington: CAG >36 repeats; caudate atrophy on imaging; autosomal dominant with anticipation",
          "PKU: Guthrie test (newborn screening); musty/mousy odor; phenylalanine-restricted diet",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Chromosomal Disorders", edition: "21st" },
        ],
      },
      {
        layer: 5,
        slug: "clinical-genetics-counseling-recall",
        title: "Clinical Genetics & Genetic Counseling - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-style active recall for clinical genetics and genetic counseling.",
        contentMd: `# Active Recall — Clinical Genetics

**Q1:** What is the karyotype and most common cardiac defect in Down syndrome?
> Trisomy 21 (47,XX/XY,+21); AV canal defect (endocardial cushion defect)

**Q2:** A consanguineous couple has a child with an AR disorder. What is the recurrence risk?
> 25% for each subsequent pregnancy

**Q3:** What screening test detects β-thalassemia trait? What values confirm it?
> HPLC: HbA2 >3.5%; also MCV <80 fL, MCH <27 pg

**Q4:** Name the trinucleotide repeat and gene in Huntington disease.
> CAG repeat in HTT gene; >36 repeats = disease; anticipation with paternal transmission

**Q5:** Differentiate Prader-Willi from Angelman syndrome.
> Prader-Willi: paternal 15q deletion → neonatal hypotonia, later obesity, hypogonadism. Angelman: maternal 15q deletion → happy puppet, seizures, ataxia, absent speech

**Q6:** What pharmacogenomic test is mandatory before prescribing abacavir?
> HLA-B*5701 testing (positive = high risk of hypersensitivity reaction)

**Q7:** At what gestational age is CVS performed? What is the miscarriage risk?
> 10-13 weeks; approximately 1% procedure-related miscarriage

**Q8:** What is the diagnostic triad of Wilson disease?
> Kayser-Fleischer rings + low serum ceruloplasmin + elevated 24-hour urine copper

**Q9:** Which national program screens for sickle cell disease in Indian tribal areas?
> National Sickle Cell Anaemia Elimination Mission (NSSP, launched 2023)

**Q10:** A couple planning pregnancy: wife is β-thal trait, husband unknown. What do you advise?
> Screen husband with HPLC. If also carrier, 25% risk → offer prenatal diagnosis (CVS at 11 wks) or PGT

**Q11:** What distinguishes X-linked recessive inheritance from autosomal recessive?
> X-linked: only males affected (hemizygous), carrier females may have mild features, no male-to-male transmission

**Q12:** Name the most common treatable cause of intellectual disability detectable by newborn screening.
> Congenital hypothyroidism (TSH screening on day 3-5 of life)`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering inheritance, chromosomal disorders, screening, prenatal diagnosis, and pharmacogenomics",
          "Focus on Indian-context topics: thalassemia, sickle cell, consanguinity, Wilson disease",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Principles of Human Genetics", edition: "21st" },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // IM-MOD-05-TOP-08: NUTRITIONAL & METABOLIC DISORDERS
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "IM-MOD-05-TOP-08",
    layers: [
      {
        layer: 1,
        slug: "nutritional-metabolic-disorders-foundation",
        title: "Nutritional & Metabolic Disorders - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of protein-energy malnutrition, obesity, vitamin and mineral deficiencies with emphasis on the Indian nutritional landscape.",
        contentMd: `# Nutritional & Metabolic Disorders

## Protein-Energy Malnutrition (PEM)

### Classification (WHO)
| Type | Weight-for-Height | Edema | Features |
|------|-------------------|-------|----------|
| **Marasmus** | <-3 SD (severe wasting) | Absent | Skin and bone appearance, old-man face, alert |
| **Kwashiorkor** | Variable | Present (defining feature) | Edema, flaky-paint dermatosis, flag sign hair, apathy |
| **Marasmic-Kwashiorkor** | <-3 SD | Present | Combined wasting + edema — worst prognosis |

### Indian Classification (IAP)
- Grade I: 71-80% weight-for-age
- Grade II: 61-70%
- Grade III: 51-60%
- Grade IV: ≤50% (severe malnutrition)

## Obesity & Metabolic Syndrome

### BMI Classification (WHO — Asian cut-offs)
| Category | BMI (Asian) | BMI (WHO standard) |
|----------|------------|-------------------|
| Normal | 18.5-22.9 | 18.5-24.9 |
| Overweight | 23-24.9 | 25-29.9 |
| Obese I | 25-29.9 | 30-34.9 |
| Obese II | ≥30 | ≥35 |

### Metabolic Syndrome (IDF criteria — 3 of 5)
1. Waist circumference: ≥90 cm (M) / ≥80 cm (F) in South Asians
2. TG ≥150 mg/dL
3. HDL <40 mg/dL (M) / <50 mg/dL (F)
4. BP ≥130/85 mmHg
5. FBS ≥100 mg/dL

## Vitamin Deficiencies — India's Burden
- **Iron deficiency anemia**: Affects 50% of Indian women; Anemia Mukt Bharat program
- **Vitamin D deficiency**: Paradoxically common despite tropical sun (80% urban Indians)
- **Vitamin B12 deficiency**: Highly prevalent in vegetarian Indians (60-80% in some studies)
- **Iodine deficiency**: IDD controlled by universal salt iodization; still endemic in Himalayan belt

> **Clinical Pearl**: India has the "double burden of malnutrition" — undernutrition (stunting, wasting) coexists with overnutrition (obesity, metabolic syndrome) in the same community and sometimes the same household.`,
        mnemonics: [
          { text: "KWASH: K-edema (Kwashiorkor = edema), W-Wasting absent (initially), A-Apathetic, S-Skin flaky-paint, H-Hair flag sign", explanation: "Distinguishing features of kwashiorkor from marasmus" },
          { text: "MetS 5: Waist-TG-HDL-BP-Sugar (metabolic syndrome criteria)", explanation: "The 5 criteria for metabolic syndrome diagnosis — need 3 of 5" },
        ],
        keyPoints: [
          "Kwashiorkor = edema (defining), flaky-paint skin, flag sign hair; Marasmus = severe wasting without edema",
          "Asian BMI cut-offs are lower: overweight ≥23, obese ≥25 (vs 25 and 30 in WHO standard)",
          "Metabolic syndrome (IDF): waist ≥90/80 cm + 2 more of TG/HDL/BP/FBS criteria",
          "India's double burden: undernutrition + overnutrition coexist; 50% women are anemic",
          "Vitamin B12 deficiency is epidemic in vegetarian Indians (60-80%); megaloblastic anemia + neuropathy",
          "Anemia Mukt Bharat and universal salt iodization are key Indian national nutrition programs",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Malnutrition and Nutritional Assessment", edition: "21st" },
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Nutrition and Health", edition: "26th" },
        ],
      },
      {
        layer: 2,
        slug: "nutritional-metabolic-disorders-mechanism",
        title: "Nutritional & Metabolic Disorders - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathophysiology of malnutrition, vitamin deficiency mechanisms, and metabolic consequences of obesity.",
        contentMd: `# Mechanisms of Nutritional & Metabolic Disease

## Pathophysiology of PEM

### Marasmus (Caloric Deprivation)
- Total calorie deficit → glycogen depletion → lipolysis → protein catabolism
- Cortisol ↑, insulin ↓ → mobilization of peripheral fat and muscle
- Visceral protein relatively preserved → no edema initially
- Immune suppression: thymic atrophy, reduced T-cell function

### Kwashiorkor (Protein Deficiency with Adequate Calories)
- Protein deficit → ↓ albumin synthesis → ↓ oncotic pressure → edema
- Free radical hypothesis: oxidative stress from diet lacking antioxidants
- Fatty liver: inadequate apolipoprotein B → impaired VLDL export
- Aflatoxin exposure (from contaminated grains) may contribute

## Vitamin Deficiency Mechanisms

| Vitamin | Active Form | Mechanism of Disease | Classic Sign |
|---------|------------|---------------------|-------------|
| **A** | Retinal, retinoic acid | Impaired rhodopsin, epithelial differentiation | Night blindness, Bitot spots, xerophthalmia |
| **D** | 1,25-dihydroxycholecalciferol | ↓ Ca absorption → secondary hyperPTH → bone loss | Rickets (children), osteomalacia (adults) |
| **B1 (Thiamine)** | TPP | Impaired pyruvate dehydrogenase → energy failure | Beriberi (wet: heart failure; dry: neuropathy) |
| **B3 (Niacin)** | NAD/NADP | Impaired redox reactions | Pellagra (3 Ds: Dermatitis, Diarrhea, Dementia) |
| **B12** | Methylcobalamin | Impaired methionine synthase → megaloblastic | Megaloblastic anemia + subacute combined degeneration |
| **C** | Ascorbic acid | Defective collagen cross-linking | Scurvy (bleeding gums, perifollicular hemorrhage) |
| **K** | Phylloquinone | Impaired γ-carboxylation of clotting factors (II,VII,IX,X) | Bleeding; ↑ PT/INR |

## Metabolic Consequences of Obesity
- Insulin resistance → hyperinsulinemia → type 2 DM
- Visceral fat → ↑ TNF-α, IL-6, ↓ adiponectin → chronic inflammation
- ↑ Free fatty acids → hepatic steatosis (NAFLD → NASH → cirrhosis)
- Mechanical effects: OSA, osteoarthritis, GERD

## Refeeding Syndrome
- Occurs when malnourished patients receive nutrition rapidly
- Insulin surge → intracellular shift of PO₄³⁻, K⁺, Mg²⁺ → acute deficiency
- Complications: cardiac arrhythmias, seizures, respiratory failure
- Prevention: start at 50% caloric needs, supplement phosphate, monitor electrolytes daily`,
        mnemonics: [
          { text: "Pellagra 3 Ds + Death: Dermatitis, Diarrhea, Dementia (niacin/B3)", explanation: "Classic triad of niacin deficiency (pellagra); 4th D = Death if untreated" },
          { text: "REFEEDING shifts: Phosphate, Potassium, Magnesium all plummet (PPM)", explanation: "The three electrolytes that drop dangerously during refeeding syndrome" },
        ],
        keyPoints: [
          "Kwashiorkor edema: ↓ albumin → ↓ oncotic pressure; marasmus: total calorie deficit → wasting without edema",
          "Vitamin D deficiency → secondary hyperparathyroidism → bone loss (rickets in children, osteomalacia in adults)",
          "B12 deficiency causes both megaloblastic anemia AND subacute combined degeneration of spinal cord",
          "Pellagra (niacin/B3 deficiency): 3 Ds — Dermatitis (photosensitive), Diarrhea, Dementia",
          "Obesity → insulin resistance → metabolic syndrome → T2DM, NAFLD, CVD",
          "Refeeding syndrome: phosphate/K/Mg plummet → arrhythmias; start feeding slowly, supplement PO₄",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Vitamin and Trace Mineral Deficiency", edition: "21st" },
          { book: "Robbins Pathologic Basis of Disease", chapter: "Nutritional Diseases", edition: "10th" },
        ],
      },
      {
        layer: 3,
        slug: "nutritional-metabolic-disorders-clinical",
        title: "Nutritional & Metabolic Disorders - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical assessment, diagnosis, and management of malnutrition, vitamin deficiencies, and obesity in Indian settings.",
        contentMd: `# Clinical Management of Nutritional Disorders

## Assessment of Nutritional Status
- **Anthropometry**: BMI, MUAC (<11.5 cm = severe acute malnutrition in children), weight-for-height
- **Biochemical**: Albumin (<3.5 g/dL), pre-albumin (short-term indicator), transferrin
- **Clinical signs**: Koilonychia (iron), glossitis (B12/folate), angular stomatitis (B2), xerophthalmia (Vit A)
- **Dietary assessment**: 24-hour recall, food frequency questionnaire

## Management of Severe Acute Malnutrition (SAM)
### WHO 10-Step Protocol
1. Treat/prevent hypoglycemia (10% dextrose)
2. Treat/prevent hypothermia
3. Treat/prevent dehydration (ReSoMal, NOT standard ORS)
4. Correct electrolyte imbalance (K, Mg)
5. Treat infections (antibiotics routinely given)
6. Correct micronutrient deficiencies (Vit A, zinc, folic acid — NOT iron in first week)
7. Start cautious feeding (F-75 formula initially)
8. Achieve catch-up growth (F-100 formula)
9. Sensory stimulation
10. Prepare for follow-up

### Indian Context
- Nutritional Rehabilitation Centres (NRCs) under ICDS
- Community-based management of acute malnutrition (CMAM) with RUTF
- Mid-Day Meal Scheme: school-based nutrition for children

## Management of Obesity
- Lifestyle: caloric deficit of 500-750 kcal/day, 150 min/week moderate exercise
- Pharmacotherapy (BMI ≥30 or ≥27 with comorbidities): orlistat, liraglutide, semaglutide
- Bariatric surgery (BMI ≥40 or ≥35 with comorbidities; Asian cut-off ≥32.5 with T2DM):
  - Roux-en-Y gastric bypass, sleeve gastrectomy
  - >25% sustained weight loss; T2DM remission in 60-80%

## Specific Vitamin Replacement

| Deficiency | Treatment | Indian Relevance |
|-----------|-----------|-----------------|
| Iron | Ferrous sulfate 200mg TID + Vit C | Anemia Mukt Bharat: IFA tablets |
| B12 | IM methylcobalamin 1mg × 7 days, then monthly | Vegetarian diet; very common |
| Folate | 5mg/day oral | Preconception: 400μg/day for NTD prevention |
| Vitamin D | Cholecalciferol 60,000 IU/week × 8 wks, then monthly | 80% urban Indians deficient |
| Vitamin A | 200,000 IU oral every 6 months (children) | National Vitamin A Supplementation Programme |

> **Clinical Pearl**: In SAM, do NOT give iron in the first 7 days — it promotes bacterial growth. Start iron only during catch-up growth phase (F-100).`,
        mnemonics: [
          { text: "SAM 10 steps: Hypo-Hypo-Hydrate, Electrolytes, Infections, Micro, F75, F100, Stimulate, Follow-up", explanation: "WHO 10-step protocol for severe acute malnutrition management" },
          { text: "No IRON first week in SAM — bacteria love iron too!", explanation: "Critical rule: iron supplementation delayed in SAM to avoid feeding bacteria" },
        ],
        keyPoints: [
          "SAM in children: MUAC <11.5 cm or weight-for-height <-3 SD or bilateral pitting edema",
          "WHO 10-step SAM protocol: treat hypos first, use ReSoMal (not ORS), start F-75, NO iron in first week",
          "Bariatric surgery: Asian BMI cut-off ≥32.5 with T2DM; Roux-en-Y and sleeve gastrectomy most common",
          "Vitamin D: 60,000 IU/week × 8 weeks for deficiency; 80% of urban Indians are deficient",
          "B12 deficiency in vegetarian Indians: IM methylcobalamin 1mg × 7 days, then monthly maintenance",
          "National programs: Anemia Mukt Bharat (IFA), ICDS/Mid-Day Meal, Vitamin A supplementation",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Enteral and Parenteral Nutrition Therapy", edition: "21st" },
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Nutrition and Health", edition: "26th" },
        ],
      },
      {
        layer: 4,
        slug: "nutritional-metabolic-disorders-exam",
        title: "Nutritional & Metabolic Disorders - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and NEXT-pattern questions for nutritional and metabolic disorders.",
        contentMd: `# Nutritional Disorders - Exam Prep

## High-Yield Rapid Review

| Deficiency | Pathognomonic Sign | Most Tested Fact |
|-----------|-------------------|-----------------|
| Vitamin A | Bitot spots (conjunctival) | Leading cause of preventable blindness in children |
| Vitamin B1 | Wernicke encephalopathy (confusion, ataxia, ophthalmoplegia) | Give thiamine BEFORE glucose in alcoholics |
| Vitamin B3 | Casal necklace (photosensitive dermatitis) | Pellagra: 3 Ds + Death |
| Vitamin B12 | Subacute combined degeneration | Vegetarian Indians at highest risk |
| Vitamin C | Perifollicular hemorrhage, corkscrew hairs | Scurvy: bleeding gums + poor wound healing |
| Vitamin D | Craniotabes, Harrison's sulcus (rickets) | Most common vitamin deficiency worldwide |
| Vitamin K | Hemorrhagic disease of newborn | Vitamin K given IM at birth |
| Iron | Koilonychia, pica, Plummer-Vinson | Most common nutritional deficiency globally |
| Iodine | Cretinism (congenital), goiter (adult) | Universal salt iodization — India's success story |

## NEXT-Pattern Scenarios
- Child with edema + flaky skin + irritable → Kwashiorkor
- Alcoholic with confusion + ataxia + eye signs → Wernicke; give thiamine BEFORE glucose
- Vegetarian with megaloblastic anemia + neuropathy → B12 deficiency
- Severely malnourished child: what NOT to give first week → Iron
- Patient on warfarin with high INR → Vitamin K deficiency/excess anticoagulation`,
        mnemonics: [
          { text: "Wernicke CAO: Confusion, Ataxia, Ophthalmoplegia (thiamine deficiency)", explanation: "Classic triad of Wernicke encephalopathy — always give thiamine BEFORE dextrose" },
          { text: "Vitamin K dependent factors: 1972 (factors II, VII, IX, X) — remembering '1972' year", explanation: "Clotting factors that depend on vitamin K for γ-carboxylation" },
        ],
        keyPoints: [
          "Bitot spots = Vitamin A; Wernicke triad = B1; Pellagra 3Ds = B3; SACD = B12; Scurvy = C",
          "ALWAYS give thiamine BEFORE glucose in suspected Wernicke — glucose worsens the condition",
          "Vitamin K dependent clotting factors: II, VII, IX, X (and Protein C, S)",
          "SAM: no iron first week; use ReSoMal not standard ORS; F-75 before F-100",
          "Refeeding syndrome: phosphate crashes → monitor PO₄ closely when refeeding malnourished patients",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Vitamin and Trace Mineral Deficiency", edition: "21st" },
        ],
      },
      {
        layer: 5,
        slug: "nutritional-metabolic-disorders-recall",
        title: "Nutritional & Metabolic Disorders - Active Recall",
        estimatedMinutes: 15,
        summary: "Active recall flashcards for nutritional and metabolic disorders.",
        contentMd: `# Active Recall — Nutritional & Metabolic Disorders

**Q1:** Differentiate marasmus from kwashiorkor.
> Marasmus: severe wasting, no edema, alert; Kwashiorkor: edema (defining), flaky-paint skin, apathy, flag sign hair

**Q2:** What is the BMI cut-off for obesity in South Asians?
> ≥25 kg/m² (vs ≥30 in WHO standard); overweight ≥23

**Q3:** Name the 5 criteria for metabolic syndrome (IDF).
> Central obesity (waist ≥90/80 cm) + any 2 of: ↑TG, ↓HDL, ↑BP, ↑FBS

**Q4:** Why should thiamine be given BEFORE glucose in an alcoholic patient?
> Glucose metabolism consumes thiamine; giving glucose first may precipitate/worsen Wernicke encephalopathy

**Q5:** What vitamin deficiency causes subacute combined degeneration of the spinal cord?
> B12 (cobalamin) — affects dorsal columns (proprioception) and lateral corticospinal tracts (UMN signs)

**Q6:** A severely malnourished child is brought to NRC. Name 3 things NOT to do in the first week.
> No iron supplementation, no standard ORS (use ReSoMal), no rapid feeding (use F-75 not F-100)

**Q7:** What is refeeding syndrome? Which electrolyte is most critical to monitor?
> Metabolic derangement when malnourished patients fed too quickly; Phosphate (PO₄) — drops precipitously → arrhythmias, respiratory failure

**Q8:** Name the national program targeting anemia in India.
> Anemia Mukt Bharat (Anemia-Free India) — IFA supplementation for women, children, adolescents

**Q9:** What is the Vitamin A supplementation dose for children in India?
> 200,000 IU orally every 6 months (age 1-5 years); 100,000 IU for 6-12 months

**Q10:** A patient presents with photosensitive dermatitis, diarrhea, and confusion. Diagnosis?
> Pellagra (niacin/Vitamin B3 deficiency); classic 3 Ds: Dermatitis, Diarrhea, Dementia

**Q11:** What percentage of urban Indians are Vitamin D deficient?
> Approximately 80%; treat with cholecalciferol 60,000 IU/week × 8 weeks

**Q12:** What is the most common nutritional deficiency globally?
> Iron deficiency — causes microcytic hypochromic anemia; koilonychia, pica, Plummer-Vinson syndrome`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions spanning PEM, obesity, vitamin deficiencies, refeeding syndrome, and Indian programs",
          "Focus on clinical differentiation, management protocols, and India-specific nutritional epidemiology",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Malnutrition and Nutritional Assessment", edition: "21st" },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // DR-MOD-01-TOP-05: HAIR & NAIL DISORDERS
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "DR-MOD-01-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "hair-nail-disorders-foundation",
        title: "Hair & Nail Disorders - Foundation",
        estimatedMinutes: 20,
        summary: "Fundamentals of hair and nail structure, classification of alopecia, and common nail disorders encountered in Indian clinical practice.",
        contentMd: `# Hair & Nail Disorders

## Hair Structure & Growth Cycle
- **Anagen** (growth phase): 2-6 years; 85-90% of scalp hair
- **Catagen** (regression): 2-3 weeks; 1-2%
- **Telogen** (rest): 2-3 months; 10-15% → shedding (50-100 hairs/day is normal)

## Classification of Alopecia

### Non-Scarring (Follicle Preserved — Potentially Reversible)
| Condition | Key Features | Distinguishing Sign |
|-----------|-------------|-------------------|
| **Androgenic alopecia (Male)** | Hamilton-Norwood pattern; bitemporal + vertex | Miniaturized hairs on dermoscopy |
| **Androgenic alopecia (Female)** | Ludwig pattern; diffuse thinning, frontal hairline preserved | ↑ DHEA-S or free testosterone in some |
| **Alopecia areata** | Well-circumscribed patches, exclamation mark hairs | Autoimmune; nail pitting in 30% |
| **Telogen effluvium** | Diffuse shedding 2-3 months after trigger | Post-partum, surgery, fever, crash diet, iron deficiency |
| **Trichotillomania** | Irregular patches with broken hairs of different lengths | Psychiatric (OCD spectrum); children and young adults |

### Scarring (Follicle Destroyed — Irreversible)
- Lichen planopilaris, discoid lupus erythematosus (DLE), central centrifugal cicatricial alopecia
- Characterized by loss of follicular ostia, perifollicular erythema/scale

## Common Nail Disorders

| Disorder | Features | Association |
|----------|----------|------------|
| **Onychomycosis** | Distal subungual thickening, yellowing, crumbling | Dermatophytes (T. rubrum most common) |
| **Nail psoriasis** | Pitting, oil-drop sign, onycholysis, subungual hyperkeratosis | Psoriatic arthritis association |
| **Paronychia** | Painful swelling of nail fold; acute (S. aureus) vs chronic (Candida) | Chronic: wet-work occupation (housewives, cooks) |
| **Beau's lines** | Transverse grooves | Systemic illness, chemotherapy |
| **Koilonychia** | Spoon-shaped nails | Iron deficiency anemia |
| **Clubbing** | Loss of Lovibond angle (>180°) | Lung CA, ILD, IE, cyanotic heart disease |
| **Half-and-half nails** | Proximal white, distal brown | CKD (Lindsay nails) |

## Hirsutism
- Excess terminal hair in male pattern in females
- Most common cause: PCOS
- Evaluation: total/free testosterone, DHEA-S, 17-OH progesterone
- Ferriman-Gallwey score ≥8 = hirsutism

> **Indian Context**: Iron deficiency is the most common cause of diffuse hair loss in Indian women. Chronic paronychia is extremely common in Indian housewives due to prolonged water exposure.`,
        mnemonics: [
          { text: "ALOPECIA types: Areata (patchy, autoimmune), Androgenic (patterned), Telogen effluvium (diffuse shedding)", explanation: "The three most common non-scarring alopecias — each has a distinct pattern" },
          { text: "Nail psoriasis POSH: Pitting, Oil-drop, Subungual hyperkeratosis, Hyperkeratosis/onycholysis", explanation: "Key nail findings in psoriasis that distinguish from onychomycosis" },
        ],
        keyPoints: [
          "Normal hair loss: 50-100 hairs/day; telogen effluvium: diffuse shedding 2-3 months after a trigger",
          "Alopecia areata: autoimmune, exclamation mark hairs, 30% have nail pitting; may progress to totalis/universalis",
          "Androgenic alopecia: Hamilton-Norwood (males), Ludwig (females); miniaturized hairs on dermoscopy",
          "Onychomycosis: T. rubrum most common; nail psoriasis: pitting + oil-drop sign",
          "Chronic paronychia in Indian housewives: Candida from wet-work; treat underlying exposure",
          "Hirsutism evaluation: Ferriman-Gallwey ≥8; PCOS is the most common cause",
        ],
        textbookRefs: [
          { book: "Roxburgh's Common Skin Diseases", chapter: "Disorders of Hair and Nails", edition: "22nd" },
          { book: "IADVL Textbook of Dermatology", chapter: "Hair and Nail Disorders", edition: "4th" },
        ],
      },
      {
        layer: 2,
        slug: "hair-nail-disorders-mechanism",
        title: "Hair & Nail Disorders - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathogenesis of alopecia areata, androgenic alopecia, and nail pathology mechanisms.",
        contentMd: `# Hair & Nail Disorders - Mechanisms

## Androgenic Alopecia (AGA)
- **Key enzyme**: 5α-reductase type II converts testosterone → DHT
- **DHT effect on follicle**: binds androgen receptor → miniaturization of follicle → vellus transformation
- **Genetics**: polygenic; AR gene on X chromosome (maternal inheritance partial)
- **Pattern**: frontal + vertex affected because these follicles express more 5α-reductase

## Alopecia Areata — Autoimmune Mechanism
- Loss of immune privilege of hair follicle bulb (anagen phase)
- CD8+ T cells attack follicular matrix → premature catagen entry
- NKG2D+ cytotoxic T cells are the primary effectors
- Associated with: thyroid disease, vitiligo, atopic dermatitis, pernicious anemia
- **Exclamation mark hairs**: tapered, broken; pathognomonic finding

## Telogen Effluvium
- Trigger (fever, surgery, delivery, crash diet, drugs) →
- Synchronized shift of anagen follicles to telogen →
- 2-3 month delay (telogen duration) → diffuse shedding
- Self-limiting (3-6 months) if trigger removed

## Nail Pathology Mechanisms

### Onychomycosis
- Dermatophyte hyphae invade nail plate from distal/lateral edge
- Fungal keratinases digest nail keratin
- Subungual debris accumulates → nail thickening
- **Types**: distal subungual (most common), proximal subungual (immunosuppressed — think HIV), white superficial

### Nail Psoriasis
- Psoriatic inflammation affects nail matrix (→ pitting, ridging) and nail bed (→ oil-drop, onycholysis)
- Nail pitting: focal parakeratosis in nail plate from matrix involvement
- **Correlation**: nail psoriasis in 50% of psoriasis patients; 80% with psoriatic arthritis

## Hirsutism Mechanism
- ↑ Androgens (ovarian or adrenal) → conversion of vellus to terminal hair in androgen-sensitive areas
- PCOS: ↑ LH/FSH ratio → theca cell hyperplasia → ↑ androgen production
- 5α-reductase also plays a role in peripheral conversion at hair follicle`,
        mnemonics: [
          { text: "DHT = hair Death on Top: DHT causes miniaturization of scalp follicles in androgenic alopecia", explanation: "Remember that DHT shrinks scalp follicles (but grows body hair — paradox)" },
          { text: "Proximal subungual onychomycosis = think HIV (immunosuppression)", explanation: "Important clinical clue: proximal nail involvement suggests underlying immunodeficiency" },
        ],
        keyPoints: [
          "Androgenic alopecia: 5α-reductase converts testosterone → DHT → follicle miniaturization",
          "Alopecia areata: CD8+ T cells attack anagen follicle bulb; exclamation mark hairs are pathognomonic",
          "Telogen effluvium: synchronized anagen→telogen shift; 2-3 month delay before shedding; self-limiting",
          "Proximal subungual onychomycosis suggests immunosuppression (HIV) — important clinical clue",
          "Nail psoriasis: matrix involvement → pitting; bed involvement → oil-drop sign, onycholysis",
          "PCOS hirsutism: ↑ LH/FSH → theca cell hyperplasia → excess androgens → terminal hair conversion",
        ],
        textbookRefs: [
          { book: "Roxburgh's Common Skin Diseases", chapter: "Alopecia", edition: "22nd" },
          { book: "Fitzpatrick's Dermatology", chapter: "Biology of Hair and Nails", edition: "9th" },
        ],
      },
      {
        layer: 3,
        slug: "hair-nail-disorders-clinical",
        title: "Hair & Nail Disorders - Clinical",
        estimatedMinutes: 25,
        summary: "Diagnostic approach and management of common hair and nail disorders in Indian practice.",
        contentMd: `# Hair & Nail Disorders - Clinical Management

## Diagnostic Approach to Hair Loss
1. **History**: onset, pattern, triggers (2-3 months prior), family history, diet, medications
2. **Pull test**: grasp 40-60 hairs, gentle traction; >6 hairs = positive (active shedding)
3. **Dermoscopy (trichoscopy)**: miniaturized hairs (AGA), exclamation mark hairs (AA), yellow dots, black dots
4. **Labs**: CBC, ferritin (aim >40 ng/mL for hair), TSH, Vitamin D, B12; if hirsutism: testosterone, DHEA-S

## Treatment of Alopecia

### Androgenic Alopecia
- **Minoxidil 5% (topical)**: first-line for both sexes; response in 3-6 months
- **Finasteride 1mg/day (oral)**: men only — 5α-reductase inhibitor; contraindicated in women of childbearing age
- **PRP (platelet-rich plasma)**: emerging adjunct; 3-4 sessions quarterly
- **Hair transplant**: definitive for stable AGA (FUE or FUT technique)

### Alopecia Areata
- **Limited patches**: intralesional triamcinolone 5-10 mg/mL every 4-6 weeks
- **Extensive**: topical immunotherapy (DPCP), JAK inhibitors (baricitinib — FDA approved for AA)
- **Prognostic factors**: extensive disease, ophiasis pattern, nail involvement, atopy = poorer prognosis
- Many cases self-resolve within 1 year (especially first episode)

### Telogen Effluvium
- Identify and treat trigger (iron deficiency, thyroid, stress)
- Reassurance: hair regrowth in 3-6 months after trigger resolves
- No specific pharmacotherapy; optimize ferritin >40, vitamin D, B12

## Treatment of Nail Disorders

### Onychomycosis
- **Confirm diagnosis first**: KOH mount (hyphae) + fungal culture before treating
- **Toenails**: terbinafine 250mg/day × 12 weeks (first-line) OR itraconazole pulse therapy
- **Fingernails**: terbinafine × 6 weeks or itraconazole × 6 weeks
- **Topical**: ciclopirox/amorolfine nail lacquer for mild (<50% involvement, no matrix)

### Hirsutism
- **PCOS**: OCP (anti-androgen effect) + spironolactone 50-200mg/day
- **Physical**: laser hair removal (most effective), electrolysis, eflornithine cream (facial)
- **Idiopathic**: directly treat with anti-androgens + local measures

> **Indian Pearl**: Always check ferritin in any Indian woman presenting with diffuse hair loss. A ferritin <40 ng/mL (even without frank anemia) warrants iron supplementation for hair regrowth.`,
        mnemonics: [
          { text: "AGA treatment ladder: Minoxidil → Finasteride → PRP → Transplant (MFPT)", explanation: "Stepwise management of androgenic alopecia from topical to surgical" },
          { text: "Confirm before you treat: KOH + culture before antifungals for onychomycosis", explanation: "Never treat onychomycosis empirically — confirm with KOH mount first" },
        ],
        keyPoints: [
          "Hair loss workup: pull test, trichoscopy, ferritin (>40), TSH, B12, vitamin D",
          "Androgenic alopecia: minoxidil 5% topical (both sexes); finasteride 1mg oral (men only)",
          "Alopecia areata limited: intralesional triamcinolone; extensive: JAK inhibitors (baricitinib)",
          "Onychomycosis: ALWAYS confirm with KOH ± culture; terbinafine 250mg × 12 weeks for toenails",
          "PCOS hirsutism: OCP + spironolactone; laser is most effective physical treatment",
          "Ferritin <40 → supplement iron even without anemia for hair loss in Indian women",
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "Management of Hair Loss", edition: "4th" },
          { book: "Roxburgh's Common Skin Diseases", chapter: "Treatment of Hair and Nail Diseases", edition: "22nd" },
        ],
      },
      {
        layer: 4,
        slug: "hair-nail-disorders-exam",
        title: "Hair & Nail Disorders - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam facts for hair and nail disorders.",
        contentMd: `# Hair & Nail Disorders - Exam Prep

## Rapid Review Table

| Condition | Hallmark Finding | First-Line Treatment |
|-----------|-----------------|---------------------|
| Androgenic alopecia (male) | Hamilton-Norwood pattern, miniaturized hairs | Minoxidil 5% + Finasteride 1mg |
| Androgenic alopecia (female) | Ludwig pattern, preserved frontal hairline | Minoxidil 2-5% (NO finasteride) |
| Alopecia areata | Exclamation mark hairs, nail pitting | Intralesional triamcinolone |
| Telogen effluvium | Diffuse, positive pull test, 2-3 mo post-trigger | Treat cause; reassurance |
| Trichotillomania | Irregular, broken hairs of varying lengths | CBT; psychiatric referral |
| Onychomycosis | Distal subungual, KOH+ | Terbinafine 250mg × 12 wks |
| Nail psoriasis | Pitting + oil-drop sign | Treat underlying psoriasis |
| Chronic paronychia | Swollen nail fold, Candida | Avoid wet work; topical antifungal |

## Exam Traps
- Finasteride is CONTRAINDICATED in women of childbearing age (teratogenic)
- Proximal subungual onychomycosis → screen for HIV
- Alopecia areata with ophiasis pattern = worse prognosis
- Iron supplementation for hair loss even when Hb normal but ferritin <40
- Nail pitting: psoriasis (most common), but also AA, eczema, lichen planus`,
        mnemonics: [
          { text: "Exclamation mark hairs = Alopecia Areata (both start with 'A')", explanation: "Pathognomonic finding of alopecia areata" },
          { text: "Finasteride: Fine for men, Fatal for fetus (teratogenic)", explanation: "Critical to remember: never prescribe finasteride to women who may become pregnant" },
        ],
        keyPoints: [
          "Alopecia areata: exclamation mark hairs + nail pitting; autoimmune, may self-resolve",
          "Finasteride: men only; teratogenic in pregnancy (category X)",
          "Onychomycosis: confirm diagnosis before treatment; proximal type = think immunosuppression",
          "Nail pitting: most common in psoriasis; also seen in AA, eczema, lichen planus",
          "Ferritin target >40 ng/mL for hair regrowth even without frank anemia",
        ],
        textbookRefs: [
          { book: "Roxburgh's Common Skin Diseases", chapter: "Hair and Nail Disorders", edition: "22nd" },
        ],
      },
      {
        layer: 5,
        slug: "hair-nail-disorders-recall",
        title: "Hair & Nail Disorders - Active Recall",
        estimatedMinutes: 15,
        summary: "Active recall flashcards for hair and nail disorders.",
        contentMd: `# Active Recall — Hair & Nail Disorders

**Q1:** Name the pathognomonic finding in alopecia areata.
> Exclamation mark hairs (tapered, broken hairs at the margin of a patch)

**Q2:** What enzyme converts testosterone to DHT in androgenic alopecia?
> 5α-reductase type II

**Q3:** A woman has diffuse hair shedding 3 months after delivery. Diagnosis and management?
> Telogen effluvium (post-partum); self-limiting in 3-6 months; check and correct ferritin, thyroid

**Q4:** Why is finasteride contraindicated in women of childbearing age?
> Teratogenic — inhibits 5α-reductase → blocks DHT → can cause ambiguous genitalia in male fetus

**Q5:** What is the most common dermatophyte causing onychomycosis?
> Trichophyton rubrum

**Q6:** How do you differentiate nail psoriasis from onychomycosis?
> Psoriasis: pitting + oil-drop sign + association with skin/joint psoriasis; Onychomycosis: KOH shows hyphae, no pitting typically

**Q7:** What type of onychomycosis suggests HIV?
> Proximal subungual onychomycosis (starts at the cuticle end)

**Q8:** A young woman has hirsutism with irregular periods. Most likely cause and workup?
> PCOS; check free/total testosterone, DHEA-S, LH/FSH ratio, pelvic USG

**Q9:** What Ferriman-Gallwey score defines hirsutism?
> ≥8

**Q10:** Name the nail change associated with iron deficiency.
> Koilonychia (spoon-shaped nails)

**Q11:** What is the treatment of choice for limited alopecia areata (1-2 patches)?
> Intralesional triamcinolone acetonide 5-10 mg/mL every 4-6 weeks

**Q12:** An Indian housewife has chronic nail fold swelling. Most likely organism?
> Candida species (chronic paronychia from prolonged water/wet-work exposure)`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering all major hair and nail conditions",
          "Emphasizes clinical differentiation, Indian context, and exam-tested management decisions",
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "Hair and Nail Disorders", edition: "4th" },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // DR-MOD-05-TOP-04: SKIN MANIFESTATIONS OF SYSTEMIC DISEASES
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "DR-MOD-05-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "skin-systemic-diseases-foundation",
        title: "Skin Manifestations of Systemic Diseases - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of cutaneous markers of internal disease across diabetes, thyroid, autoimmune, liver, renal, HIV, and malignancy.",
        contentMd: `# Skin Manifestations of Systemic Diseases

The skin is the largest organ and often provides the first visible clues to underlying systemic disease. Recognizing cutaneous markers can enable early diagnosis and improve patient outcomes.

## Diabetes Mellitus
| Skin Manifestation | Key Features |
|-------------------|-------------|
| **Acanthosis nigricans** | Velvety, hyperpigmented plaques in axillae, neck; marker of insulin resistance |
| **Diabetic dermopathy** | Brown, atrophic macules on shins ("shin spots"); most common skin finding |
| **Necrobiosis lipoidica** | Yellow-brown waxy plaques on anterior shins; central atrophy, telangiectasia |
| **Granuloma annulare** | Ring-shaped, skin-colored papules; disseminated form associated with DM |
| **Diabetic foot** | Neuropathic ulcers, Charcot joint, infections |

## Thyroid Disorders
| Condition | Skin Findings |
|-----------|-------------|
| **Hypothyroidism** | Dry, coarse skin; diffuse alopecia; myxedema; periorbital puffiness |
| **Hyperthyroidism** | Warm, moist skin; pretibial myxedema (Graves'); onycholysis (Plummer nails) |

## Systemic Lupus Erythematosus
- **Butterfly (malar) rash**: bilateral, sparing nasolabial folds; photosensitive
- **Discoid LE**: scarring, coin-shaped plaques; follicular plugging; can occur without systemic disease
- **Oral ulcers**: painless palatal ulcers
- **Photosensitivity**: rash with sun exposure
- **Raynaud's phenomenon**: in 20-40% of SLE patients

## Liver Disease
| Sign | Mechanism |
|------|-----------|
| **Jaundice** | ↑ Bilirubin (>2-3 mg/dL for clinical detection) |
| **Spider nevi** | Estrogen excess (>5 spider nevi = significant) |
| **Palmar erythema** | Estrogen-mediated vasodilation |
| **Pruritus** | Bile salt deposition in skin (especially cholestatic disease) |
| **Caput medusae** | Portal hypertension → dilated periumbilical veins |

## HIV/AIDS
- **Oral candidiasis**: often the first sign of immunosuppression
- **Seborrheic dermatitis**: severe, widespread; early sign of HIV
- **Kaposi sarcoma**: violaceous nodules; HHV-8 associated
- **Molluscum contagiosum**: giant, widespread in advanced HIV

## Malignancy — Paraneoplastic Skin Signs
| Skin Sign | Associated Malignancy |
|-----------|---------------------|
| **Acanthosis nigricans (sudden, severe)** | Gastric adenocarcinoma |
| **Dermatomyositis** (heliotrope rash, Gottron papules) | Ovary, lung, GI, breast |
| **Sign of Leser-Trélat** (eruptive seborrheic keratoses) | GI adenocarcinoma |
| **Bazex syndrome** (acral psoriasiform) | Aerodigestive tract cancers |
| **Sweet syndrome** (neutrophilic dermatosis) | AML |

> **Indian Context**: Leprosy skin signs (anesthetic, hypopigmented patches) remain important in India. Kala-azar post-dermal leishmaniasis (PKDL) presents as nodular/macular lesions — important in Bihar, Jharkhand, UP.`,
        mnemonics: [
          { text: "Diabetes skin NANG: Necrobiosis lipoidica, Acanthosis nigricans, Neuropathic ulcers, Granuloma annulare", explanation: "Key cutaneous manifestations of diabetes mellitus" },
          { text: "Liver spider PAL: Spider nevi, Palmar erythema, And Liver disease", explanation: "Two estrogen-mediated cutaneous signs of chronic liver disease" },
        ],
        keyPoints: [
          "Acanthosis nigricans: insulin resistance marker if gradual; malignancy (gastric CA) if sudden/severe",
          "Butterfly rash of SLE spares nasolabial folds — key distinguishing feature",
          "Spider nevi: >5 suggests significant liver disease; estrogen-mediated",
          "Oral candidiasis is often the first clinical sign of HIV immunosuppression",
          "Dermatomyositis (heliotrope + Gottron papules) warrants malignancy screening — especially ovary, lung, GI",
          "PKDL (post-kala-azar dermal leishmaniasis) is important in Bihar/eastern UP — nodular skin lesions after VL treatment",
        ],
        textbookRefs: [
          { book: "Roxburgh's Common Skin Diseases", chapter: "Skin and Systemic Disease", edition: "22nd" },
          { book: "Fitzpatrick's Dermatology", chapter: "Cutaneous Manifestations of Internal Disease", edition: "9th" },
        ],
      },
      {
        layer: 2,
        slug: "skin-systemic-diseases-mechanism",
        title: "Skin Manifestations of Systemic Diseases - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathogenic mechanisms linking systemic diseases to their cutaneous manifestations.",
        contentMd: `# Mechanisms of Cutaneous Manifestations

## Diabetes → Skin
- **Acanthosis nigricans**: insulin/IGF-1 stimulates keratinocyte and fibroblast proliferation via IGF-1R
- **Necrobiosis lipoidica**: microangiopathy → collagen degeneration → granulomatous response
- **Diabetic neuropathy → foot ulcers**: loss of protective sensation + microangiopathy + infection

## SLE → Skin
- **Malar rash**: immune complex deposition at dermoepidermal junction (lupus band test positive)
- UV light → keratinocyte apoptosis → exposure of nuclear antigens → autoantibody response
- **Photosensitivity**: UVB induces translocation of Ro/La antigens to cell surface → anti-Ro/La mediated damage

## Liver Disease → Skin
- **Spider nevi & palmar erythema**: impaired hepatic estrogen metabolism → hyperestrogenemia → arteriolar vasodilation
- **Pruritus in cholestasis**: bile salt accumulation → activation of TGR5 receptors and lysophosphatidic acid pathway on sensory neurons
- **Jaundice**: conjugated/unconjugated bilirubin deposition in skin and sclera

## Paraneoplastic Mechanisms
- **Acanthosis nigricans (malignant)**: tumor-secreted TGF-α acts on epidermal growth factor receptor
- **Dermatomyositis**: autoimmune attack on capillaries in muscle AND skin (complement-mediated vasculopathy)
- **Sweet syndrome**: neutrophilic dermatosis; G-CSF and cytokines from AML blasts recruit neutrophils to skin

## HIV → Skin
- Progressive CD4 depletion → loss of mucosal immunity → Candida; loss of cellular immunity → Kaposi (HHV-8), molluscum
- **Seborrheic dermatitis in HIV**: Malassezia overgrowth due to impaired T-cell control; severity correlates with CD4 decline

## Renal Disease → Skin
- **Uremic frost**: urea crystals deposited on skin (very advanced uremia — now rare with dialysis)
- **Pruritus**: accumulation of uremic toxins, secondary hyperparathyroidism (Ca×PO₄ product deposition)
- **Half-and-half nails**: melanin deposition in nail bed (mechanism not fully understood)`,
        mnemonics: [
          { text: "AN mechanism: Insulin stimulates Skin growth (via IGF-1R)", explanation: "Acanthosis nigricans pathophysiology — insulin/IGF-1 receptor activation on keratinocytes" },
          { text: "SLE photosensitivity: UV → Ro/La surface → autoimmune attack", explanation: "Why lupus patients get worse with sun — UV exposes nuclear antigens" },
        ],
        keyPoints: [
          "Acanthosis nigricans: insulin/IGF-1 → keratinocyte proliferation (benign); TGF-α from tumor (malignant)",
          "SLE malar rash: immune complex deposition at DEJ; photosensitivity via UV-induced Ro/La translocation",
          "Liver spider nevi: impaired hepatic estrogen clearance → arteriolar vasodilation",
          "Cholestatic pruritus: bile salts activate TGR5 receptors on cutaneous sensory neurons",
          "Dermatomyositis: complement-mediated vasculopathy affecting skin and muscle capillaries",
          "HIV skin disease severity correlates with CD4 count; seborrheic dermatitis worsens as CD4 drops",
        ],
        textbookRefs: [
          { book: "Fitzpatrick's Dermatology", chapter: "Pathogenesis of Cutaneous Manifestations", edition: "9th" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Skin Manifestations of Internal Disease", edition: "21st" },
        ],
      },
      {
        layer: 3,
        slug: "skin-systemic-diseases-clinical",
        title: "Skin Manifestations of Systemic Diseases - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical approach to recognizing and managing cutaneous markers of internal disease.",
        contentMd: `# Clinical Approach to Skin Signs of Systemic Disease

## Diagnostic Framework
When you see a skin finding suggestive of systemic disease:
1. **Characterize the lesion**: morphology, distribution, onset
2. **Screen for associated systemic disease**: targeted investigations
3. **Treat underlying cause**: skin improves when systemic disease controlled
4. **Symptomatic skin care**: concurrent topical management

## Diabetes — Screening and Skin Care
- Acanthosis nigricans → check FBS, HbA1c, fasting insulin
- Skin improves with glycemic control and weight loss
- Diabetic foot care: daily inspection, proper footwear, podiatry referral
- Treat skin infections aggressively (increased risk of bacterial and fungal infections in DM)

## SLE — Skin Management
- **Malar rash**: strict photoprotection (SPF 50+), topical calcineurin inhibitors (tacrolimus), topical steroids
- **Discoid LE**: intralesional steroids, hydroxychloroquine (first-line systemic)
- **Diagnosis**: skin biopsy with direct immunofluorescence (lupus band test — IgG, IgM, C3 at DEJ)
- Hydroxychloroquine: ophthalmologic screening required (retinal toxicity)

## Dermatomyositis — Malignancy Workup
When dermatomyositis is diagnosed, mandatory screening includes:
- CT chest/abdomen/pelvis
- Pelvic USG + CA-125 in women
- Colonoscopy if age-appropriate
- Repeat screening for 3-5 years after diagnosis

## HIV — Skin as a Diagnostic Clue
| CD4 Count | Expected Skin Findings |
|-----------|----------------------|
| >500 | Seborrheic dermatitis, herpes zoster, oral hairy leukoplakia |
| 200-500 | Molluscum, papular pruritic eruption, worsening psoriasis |
| <200 | Kaposi sarcoma, extensive molluscum, chronic herpes simplex, cryptococcal skin lesions |
| <100 | Disseminated fungal infections, bacillary angiomatosis |

## Indian-Specific Considerations
- **Leprosy**: anesthetic hypopigmented patch → slit-skin smear; treat with MDT (WHO regimen)
- **PKDL**: post-kala-azar dermal leishmaniasis — macular/papular/nodular lesions after VL treatment; important reservoir
- **Pellagra skin**: photosensitive dermatitis (Casal's necklace) in maize-eating communities; think niacin deficiency

> **Clinical Pearl**: New-onset, rapidly progressive acanthosis nigricans in a non-obese elderly patient should trigger urgent malignancy workup, especially for gastric adenocarcinoma.`,
        mnemonics: [
          { text: "DM malignancy screen: CT-CAP + CA-125 + Colonoscopy (Dermatomyositis mandates malignancy search)", explanation: "Dermatomyositis requires malignancy screening for 3-5 years after diagnosis" },
          { text: "HIV skin by CD4: >500 mild, 200-500 moderate, <200 severe, <100 disseminated", explanation: "HIV-associated skin conditions correlate with CD4 count decline" },
        ],
        keyPoints: [
          "Acanthosis nigricans in elderly/non-obese: screen for gastric malignancy urgently",
          "SLE skin: photoprotection + hydroxychloroquine (requires ophthalmologic monitoring)",
          "Dermatomyositis: mandatory malignancy screening (CT CAP, CA-125, colonoscopy) for 3-5 years",
          "HIV skin findings correlate with CD4: seborrheic dermatitis early, Kaposi sarcoma late (<200)",
          "Leprosy in India: anesthetic hypopigmented patch, thickened nerves; slit-skin smear + MDT",
          "PKDL: important leishmania reservoir in Bihar; nodular/macular skin lesions post-VL treatment",
        ],
        textbookRefs: [
          { book: "IADVL Textbook of Dermatology", chapter: "Skin in Systemic Disease", edition: "4th" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Skin Manifestations of Internal Disease", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "skin-systemic-diseases-exam",
        title: "Skin Manifestations of Systemic Diseases - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam associations and NEXT-pattern scenarios for cutaneous markers.",
        contentMd: `# Skin & Systemic Disease - Exam Prep

## Must-Know Associations

| Skin Finding | Think... |
|-------------|---------|
| Butterfly rash, photosensitivity | SLE |
| Heliotrope rash + Gottron papules | Dermatomyositis → screen for malignancy |
| Sudden acanthosis nigricans (elderly) | Gastric adenocarcinoma |
| Erythema nodosum | Sarcoid, TB, IBD, streptococcal, drugs |
| Pyoderma gangrenosum | IBD (UC > Crohn), RA, myeloproliferative |
| Pretibial myxedema | Graves disease |
| Eruptive xanthomas | Severe hypertriglyceridemia (>1000) |
| Janeway lesions + Osler nodes | Infective endocarditis |
| Koilonychia | Iron deficiency |
| Half-and-half nails | CKD |
| Generalized pruritus | Cholestasis, CKD, lymphoma, polycythemia vera |
| Eruptive seborrheic keratoses (Leser-Trélat) | GI adenocarcinoma |

## Exam Traps
- Malar rash spares nasolabial folds; rosacea does NOT spare
- Acanthosis nigricans: insulin resistance if gradual, malignancy if sudden
- Pruritus with no visible skin lesion: rule out systemic cause (liver, kidney, lymphoma, PV)
- Erythema nodosum is a reaction pattern, NOT a specific diagnosis — always search for the cause
- Sweet syndrome (acute febrile neutrophilic dermatosis): think AML`,
        mnemonics: [
          { text: "Paraneoplastic skin: AN-DM-LT-BZ-SW (Acanthosis Nigricans-DermatoMyositis-Leser Trélat-Bazex-Sweet)", explanation: "The 5 major paraneoplastic cutaneous syndromes" },
          { text: "Erythema Nodosum causes: STREP-TB-Sarcoid-IBD-Drugs (STSID)", explanation: "Common causes of erythema nodosum — always search for underlying trigger" },
        ],
        keyPoints: [
          "Malar rash spares nasolabial folds (SLE); rosacea does not spare — key differentiator",
          "Dermatomyositis (heliotrope + Gottron): always screen for underlying malignancy",
          "Paraneoplastic skin signs: AN (gastric), dermatomyositis (ovary/lung), Leser-Trélat (GI), Sweet (AML)",
          "Generalized pruritus without rash: cholestasis, CKD, lymphoma (Hodgkin), polycythemia vera",
          "Erythema nodosum: reaction pattern — always find the cause (strep, TB, sarcoid, IBD)",
        ],
        textbookRefs: [
          { book: "Fitzpatrick's Dermatology", chapter: "Cutaneous Paraneoplastic Syndromes", edition: "9th" },
        ],
      },
      {
        layer: 5,
        slug: "skin-systemic-diseases-recall",
        title: "Skin Manifestations of Systemic Diseases - Active Recall",
        estimatedMinutes: 15,
        summary: "Active recall flashcards for skin manifestations of systemic diseases.",
        contentMd: `# Active Recall — Skin Manifestations of Systemic Disease

**Q1:** Name 4 skin manifestations of diabetes mellitus.
> Acanthosis nigricans, diabetic dermopathy (shin spots), necrobiosis lipoidica, granuloma annulare, neuropathic ulcers

**Q2:** What facial rash in SLE spares the nasolabial folds?
> Butterfly (malar) rash — bilateral erythema over cheeks and nose, sparing nasolabial folds

**Q3:** A patient has heliotrope rash and Gottron papules. What workup is mandatory?
> Malignancy screening: CT chest/abdomen/pelvis, pelvic USG + CA-125 (women), colonoscopy

**Q4:** Sudden-onset severe acanthosis nigricans in a thin elderly man. What malignancy?
> Gastric adenocarcinoma (tumor-secreted TGF-α → epidermal proliferation)

**Q5:** What are the two estrogen-mediated skin signs of chronic liver disease?
> Spider nevi (>5 = significant) and palmar erythema

**Q6:** What is the first skin sign of HIV that correlates with declining immunity?
> Severe seborrheic dermatitis (correlates with CD4 decline)

**Q7:** Name the classic nail finding in chronic kidney disease.
> Half-and-half nails (Lindsay nails): proximal white, distal brown/pink

**Q8:** An eruptive crop of seborrheic keratoses develops rapidly. What is this sign called and what does it suggest?
> Sign of Leser-Trélat; suggests underlying GI adenocarcinoma

**Q9:** What skin finding is associated with Graves disease specifically?
> Pretibial myxedema (non-pitting edema, peau d'orange, anterior shins)

**Q10:** A patient has generalized pruritus but no visible rash. Name 4 systemic causes.
> Cholestatic liver disease, CKD/uremia, Hodgkin lymphoma, polycythemia vera

**Q11:** What skin lesion in India is an anesthetic hypopigmented patch with thickened nerves?
> Leprosy (Hansen disease); diagnose with slit-skin smear; treat with WHO MDT regimen

**Q12:** Sweet syndrome (acute febrile neutrophilic dermatosis) is associated with which hematologic malignancy?
> Acute myeloid leukemia (AML)`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering diabetes, SLE, liver, HIV, renal, and paraneoplastic skin signs",
          "Emphasis on clinical pattern recognition and Indian-context conditions (leprosy, PKDL)",
        ],
        textbookRefs: [
          { book: "Roxburgh's Common Skin Diseases", chapter: "Skin and Systemic Disease", edition: "22nd" },
        ],
      },
    ],
  },
];
