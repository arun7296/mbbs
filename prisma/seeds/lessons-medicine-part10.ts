// Medicine Part 10: IM-MOD-06 (Leukemias & Lymphomas, Bleeding Disorders) + IM-MOD-07 (Neurology)

export const medicinePart10Lessons = [
  {
    topicCode: "IM-MOD-06-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "leukemia-lymphoma-layer-1-foundation",
        title: "Leukemias & Lymphomas - Foundation",
        estimatedMinutes: 20,
        summary: "Hematopoiesis overview, classification of leukemias and lymphomas (acute vs chronic, lymphoid vs myeloid), WHO classification basics, epidemiology by age groups, and introduction to Hodgkin's vs Non-Hodgkin's lymphoma.",
        contentMd: `# Leukemias & Lymphomas - Foundation

## Hematopoiesis Overview
- **Hematopoietic stem cell (HSC):** Bone marrow origin, pluripotent
- **Two main lineages:**
  - **Myeloid:** RBCs, platelets, granulocytes (neutrophils, eosinophils, basophils), monocytes/macrophages
  - **Lymphoid:** B cells, T cells, NK cells
- **Process:** HSC → progenitor → precursor → mature cell (takes 7-10 days for granulocytes)
- **Normal bone marrow:** 20-30% cellularity, myeloid-to-erythroid ratio 3:1

## Classification of Leukemias

**By onset (acute vs chronic):**
- **Acute:** Rapid onset (weeks to months), immature blasts proliferate, highly aggressive
- **Chronic:** Insidious onset (months to years), mature cells proliferate, slower progression

**By cell lineage (lymphoid vs myeloid):**
- **Lymphoid leukemias:** Malignant transformation of B cells or T cells
  - ALL (acute lymphoblastic leukemia)
  - CLL (chronic lymphocytic leukemia)
- **Myeloid leukemias:** Malignant transformation of myeloid precursors
  - AML (acute myeloid leukemia)
  - CML (chronic myeloid leukemia)

**Four main types:**
1. **Acute Lymphoblastic Leukemia (ALL)**
2. **Acute Myeloid Leukemia (AML)**
3. **Chronic Lymphocytic Leukemia (CLL)**
4. **Chronic Myeloid Leukemia (CML)**

## WHO Classification

**Acute leukemias:** >20% blasts in bone marrow/peripheral blood
- **AML:** Myeloid lineage blasts >20%
- **ALL:** Lymphoid lineage blasts >20%

**Chronic leukemias:** <20% blasts (at diagnosis)
- **CML:** Philadelphia chromosome t(9;22), BCR-ABL fusion
- **CLL:** Clonal expansion of mature B lymphocytes

**Lymphomas:** Malignant lymphoid tumors arising in lymph nodes/lymphoid tissue
- **Hodgkin's lymphoma (HL):** Reed-Sternberg cells, 4 histologic subtypes
- **Non-Hodgkin's lymphoma (NHL):** Diverse group, >60 subtypes (B-cell, T-cell, natural killer cell)

## Epidemiology

**ALL (Acute Lymphoblastic Leukemia):**
- Most common malignancy in children (<15 years): 75-80% of childhood leukemias
- Peak incidence: 2-5 years
- Rare in adults: only 15-20% of adult acute leukemias

**AML (Acute Myeloid Leukemia):**
- Most common acute leukemia in adults: 80% of adult acute leukemias
- Median age at diagnosis: 65 years
- Rare in children (<2% of childhood leukemias)
- Increased incidence with age, prior chemotherapy, benzene exposure, myelodysplastic syndrome

**CML (Chronic Myeloid Leukemia):**
- Accounts for 15-20% of all adult leukemias
- Median age: 45-55 years
- Incidence: 1-2 per 100,000/year
- Associated with ionizing radiation exposure (Hiroshima survivors had high incidence)

**CLL (Chronic Lymphocytic Leukemia):**
- Most common leukemia in Western countries
- Rare in India (environmental/genetic factors)
- Median age: 65-70 years
- 2-3 times more common in males

**Hodgkin's Lymphoma (HL):**
- Bimodal age distribution: peak 20-30 years (nodular sclerosis) and 50-70 years (mixed cellularity)
- Incidence: 2-3 per 100,000/year
- Associated with EBV (especially in developing countries), immunosuppression

**Non-Hodgkin's Lymphoma (NHL):**
- Incidence increases with age (median 55-60 years)
- More common than HL
- Indolent (low-grade) vs aggressive (high-grade) subtypes
- Associated with HIV, hepatitis C, HTLV-1, immunosuppression, prior chemotherapy

## Hodgkin's vs Non-Hodgkin's Lymphoma

**Hodgkin's Lymphoma (HL):**
- **Histology:** Reed-Sternberg (RS) cells (large cells with mirror-image nuclei, "owl's eye" appearance)
- **Subtypes:** Nodular sclerosis (60%), mixed cellularity (15-25%), lymphocyte-rich (5%), lymphocyte-depleted (<1%)
- **Presentation:** Often mediastinal mass, supraclavicular/mediastinal adenopathy, B symptoms (fever, night sweats, weight loss)
- **Metastasis pattern:** Orderly, contiguous lymph node spread (stage by adjacent nodes)
- **Prognosis:** Better overall (70-80% 5-year survival), more predictable

**Non-Hodgkin's Lymphoma (NHL):**
- **Histology:** Diverse (follicular, diffuse large B-cell, Burkitt's, T-cell subtypes, etc.)
- **No RS cells:** Key distinguishing feature
- **Presentation:** Variable (nodal or extranodal), peripheral adenopathy more common
- **Metastasis pattern:** Random, often widespread at presentation
- **Prognosis:** Varies widely by subtype (follicular 10-15 year survival, Burkitt's aggressive but curable with chemotherapy)

## Key Definitions

- **Blasts:** Immature hematopoietic cells (in acute leukemias, >20%)
- **Leukoerythroblastic picture:** Presence of immature WBC and RBC precursors in peripheral blood
- **Leukostasis:** Elevated WBC leading to capillary occlusion (CNS, pulmonary)
- **Tumor lysis syndrome (TLS):** Rapid cell death releasing intracellular contents (K+, phosphate, uric acid), causing hyperkalemia, hyperphosphatemia, hyperuricemia, renal failure
- **Differentiation syndrome (APL):** Fever, respiratory distress, fluid retention during treatment (especially ATRA in APL)
- **Remission:** <5% blasts in marrow, normal counts (complete remission CR)
`,
        mnemonics: [
          { text: "ALAC: ALL in children, AML in adults, CML chronic, CLL rare India", explanation: "Epidemiology by age and geography in India" },
          { text: "RS cells Reed-Sternberg = Hodgkin", explanation: "Reed-Sternberg cells (owl-eye nuclei) pathognomonic for Hodgkin's lymphoma" },
          { text: ">20% blasts = Acute leukemia", explanation: ">20% blasts in marrow/PB distinguishes acute from chronic" },
        ],
        keyPoints: [
          "ALL most common in children; AML in adults",
          "Acute: >20% blasts, rapid; Chronic: <20% blasts, slow",
          "Myeloid (AML, CML) vs Lymphoid (ALL, CLL) lineages",
          "HL: orderly spread, RS cells; NHL: random spread, no RS cells",
          "CML associated with t(9;22) Philadelphia chromosome",
          "EBV associated with Hodgkin's and Burkitt's lymphomas",
          "CLL rare in India; HL shows bimodal age distribution",
          "Leukostasis, TLS, DIC major complications of acute leukemias",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Acute Leukemias", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Hematolymphoid Malignancies", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Leukemias and Lymphomas", edition: "24th" },
        ],
      },
      {
        layer: 2,
        slug: "leukemia-lymphoma-layer-2-mechanism",
        title: "Leukemias & Lymphomas - Mechanism",
        estimatedMinutes: 30,
        summary: "Molecular pathogenesis of leukemias: Philadelphia chromosome in CML, t(15;17) PML-RARA in APL, t(8;14) c-MYC in Burkitt's, JAK2 in myeloproliferative disorders, EBV in lymphomas, clonal evolution, and transformation in blast crisis.",
        contentMd: `# Leukemias & Lymphomas - Molecular Pathogenesis

## Chronic Myeloid Leukemia (CML) - BCR-ABL

**Philadelphia chromosome t(9;22):**
- Translocation between chromosome 9 (ABL oncogene) and chromosome 22 (BCR gene)
- Present in 95% of CML cases
- **BCR-ABL fusion gene:** Produces constitutively active tyrosine kinase
- **Mechanism:**
  - Normal ABL: tightly regulated tyrosine kinase
  - BCR-ABL: always "on", phosphorylates multiple substrates
  - Drives uncontrolled myeloid proliferation without need for growth factors
  - Interferes with DNA repair (genomic instability)
  - Inhibits apoptosis (overexpression of anti-apoptotic proteins)

**Molecular consequences:**
- Increased RAS/MAPK signaling (proliferation)
- Increased PI3K/AKT signaling (survival)
- Impaired p53 function (loss of DNA damage checkpoint)
- Reduced DNA repair (RAD51 downregulation)

**Clinical phases (CML progression):**
1. **Chronic phase:** Slow accumulation of mutations, stable disease for 3-5 years on imatinib
2. **Accelerated phase:** >15% blasts, >30% basophils/eosinophils, extramedullary involvement
3. **Blast crisis:** >30% blasts, acute leukemia-like state, fatal without treatment (median survival months)

## Acute Promyelocytic Leukemia (APL) - t(15;17) PML-RARA

**t(15;17) translocation:**
- **Fusion gene:** PML-RARA (promyelocytic leukemia–retinoic acid receptor alpha)
- **Normal RARA function:** Binds retinoic acid, activates differentiation genes
- **PML-RARA fusion:** Abnormal repression of differentiation (blocks APL cell maturation)

**Molecular mechanism:**
- PML-RARA recruits histone deacetylase, silencing retinoic acid-responsive genes
- Blocks differentiation of promyelocytes
- Accumulation of abnormal promyelocytes with Auer rods (pathognomonic)

**Treatment advantage (ATRA/Arsenic):**
- **ATRA (all-trans retinoic acid):** Binds RARA component of fusion, causes differentiation
- Promotes maturation of leukemic promyelocytes → apoptosis
- **Arsenic trioxide:** Causes PML-RARA protein degradation
- Combined ATRA + arsenic: >90% complete remission rate (best outcome among AML subtypes)

**Clinical consequence:** DIC (disseminated intravascular coagulation) prominent due to promyelocytic granule content (tissue factor, phospholipid release)

## Burkitt's Lymphoma - t(8;14) c-MYC

**t(8;14)(q24;q32) translocation:**
- **c-MYC oncogene** (chromosome 8) translocates adjacent to **immunoglobulin heavy chain (IgH)** promoter (chromosome 14)
- **Result:** c-MYC driven by strong IgH promoter → constitutive c-MYC expression

**Molecular mechanism:**
- c-MYC is transcription factor driving proliferation/apoptosis balance
- Overexpression of c-MYC: uncontrolled cell cycle progression
- Bypass of normal checks (G1/S checkpoint)
- Extremely high proliferation rate (Ki-67 >95%)

**Associated with EBV:**
- **EBV-associated cases:** Immunocompromised (HIV CD4 <50, post-transplant), endemic regions
- **EBV-negative cases:** Sporadic Burkitt's (more common in developed countries)
- **EBV mechanism:** Immortalizes B cells, second "hit" (c-MYC translocation) transforms to lymphoma

**Clinical:** Highly aggressive lymphoma but chemotherapy-sensitive (high cure rate if treated)

## Myeloproliferative Neoplasms - JAK2, CALR, MPL

**JAK2 V617F mutation:**
- **Gene:** Janus kinase 2 (JAK2) on chromosome 9
- **Mutation type:** Valine → Phenylalanine at codon 617 (V617F)
- **Mechanism:** Hyperactivates JAK-STAT signaling (erythropoietin and thrombopoietin independence)
- **Prevalence:** 50-60% of polycythemia vera, 50% of essential thrombocythemia, 50% of primary myelofibrosis

**CALR (calreticulin) mutations:**
- 25% of essential thrombocythemia and myelofibrosis (JAK2-negative cases)
- Type I or II mutations in exon 9
- Activates STAT signaling

**MPL (thrombopoietin receptor):**
- 3-5% of myelofibrosis
- Gain-of-function mutations

**Clinical consequence:** Autonomous erythroid/platelet production independent of hormones (high RBC/platelets but not responsive to phlebotomy/agents in same way)

## Hodgkin's and Non-Hodgkin's Lymphoma Pathogenesis

**Hodgkin's Lymphoma:**
- **Reed-Sternberg cells:** Large cells with mirror-image nuclei ("owl-eye" appearance)
- **Origin:** Crippled B cells (non-functional B-cell receptor)
- **EBV association:** 40-50% cases in developed countries, 75-100% in developing countries
- **EBV mechanism:** EBNA-1 (nuclear antigen) drives proliferation, LMP-1 (latent membrane protein) activates NF-κB
- **Immune evasion:**
  - Loss of MHC class I (escapes CD8+ T cells)
  - Recruitment of T cells, eosinophils (non-malignant, majority of tumor microenvironment)
  - RS cells <1% of cellularity (mainly supporting cells)

**Non-Hodgkin's Lymphoma (selected subtypes):**
- **DLBCL (diffuse large B-cell lymphoma):**
  - t(14;18) BCL2 translocation (15-20% cases) → anti-apoptotic
  - Mutations in MYD88, CD79B (NF-κB pathway)
  - Complex karyotype
  - 50-70% 5-year survival with chemoimmunotherapy
- **Follicular lymphoma:**
  - t(14;18) BCL2 (90% cases) → constitutional anti-apoptosis
  - Germinal center origin
  - Slow growth, late diagnosis (stage III-IV)
  - Indolent but difficult to cure
- **Mantle cell lymphoma:**
  - t(11;14) cyclin D1 translocation (100% cases)
  - Aggressive, poor prognosis
  - GI tract involvement
- **Burkitt's:** (see above, t(8;14) c-MYC)

## Clonal Evolution and Blast Crisis

**Chronic phase → Blast crisis progression:**
1. **Early CML:** Single BCR-ABL clone, stable
2. **Accumulated mutations:** p53 inactivation, loss of RB pathway, myc upregulation, others
3. **Clonal evolution:** Emergence of second, third clones with growth advantage
4. **Blast crisis:** >30% blasts, rapid progression, fatal without treatment

**Other leukemias:**
- **Secondary AML:** Prior MDS (myelodysplastic syndrome) or chemotherapy exposure
- **TP53 mutations:** Confer poor prognosis (accelerated transformation)
- **Complex karyotype:** Predictor of advanced disease

## Tumor Lysis Syndrome (TLS)

**Pathophysiology:**
- Rapid cell death (chemotherapy-induced) → release intracellular contents
- **Hyperkalemia:** K+ release from cells (>5.5 mEq/L, can cause cardiac arrhythmias)
- **Hyperphosphatemia:** Phosphate release (>4.5 mg/dL)
- **Hyperuricemia:** Purine catabolism to uric acid (>7-8 mg/dL, crystallizes in renal tubules)
- **Secondary hypocalcemia:** Calcium-phosphate precipitation (low ionized Ca2+, seizures/tetany)

**At-risk malignancies:**
- Acute leukemias (especially ALL with high blast burden)
- Burkitt's lymphoma (high proliferation rate)
- Other lymphomas if bulky disease

**Prevention:** Allopurinol (xanthine oxidase inhibitor) or rasburicase (urate oxidase), aggressive hydration, avoid urate-elevating drugs
`,
        mnemonics: [
          { text: "BCR-ABL (9;22): CML Philadelphia", explanation: "Translocation creates constitutively active tyrosine kinase BCR-ABL" },
          { text: "PML-RARA (15;17): APL + DIC, responds to ATRA/arsenic", explanation: "Fusion gene blocks differentiation; ATRA reverses by binding RARA component" },
          { text: "c-MYC (8;14): Burkitt's + EBV, aggressive but curable", explanation: "c-MYC driven by IgH promoter; translocation + EBV = lymphoma" },
          { text: "JAK2 V617F: MPD (PV, ET, MF)", explanation: "Gain-of-function JAK-STAT signaling in myeloproliferative neoplasms" },
        ],
        keyPoints: [
          "BCR-ABL in CML: constitutive TK activity, blocks apoptosis, accelerates progression",
          "CML phases: chronic (stable years) → accelerated → blast crisis (rapid, fatal)",
          "APL t(15;17): PML-RARA blocks differentiation; ATRA/arsenic cure 90%",
          "Burkitt's t(8;14): c-MYC overexpression, high proliferation, EBV-associated",
          "JAK2 V617F: autonomous erythroid/platelet production in MPD",
          "HL: EBV-driven RS cells with non-malignant inflammatory infiltrate",
          "NHL: diverse translocations (BCL2, cyclin D1, c-MYC) and mutations",
          "TLS: hyperkalemia, hyperphosphatemia, hyperuricemia after treatment",
          "Clonal evolution: sequential mutations drive CML progression to blast crisis",
          "p53 loss: accelerated transformation, worse prognosis",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Molecular Basis of Cancer", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Molecular Pathogenesis of Leukemias", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Cytogenetics of Hematologic Malignancies", edition: "24th" },
        ],
      },
      {
        layer: 3,
        slug: "leukemia-lymphoma-layer-3-clinical",
        title: "Leukemias & Lymphomas - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical features of acute and chronic leukemias, lymphomas, investigations (CBC, smear, flow cytometry, cytogenetics), Ann Arbor staging for lymphomas, treatment approaches (chemotherapy, targeted therapy, supportive care) in Indian context.",
        contentMd: `# Leukemias & Lymphomas - Clinical Presentation & Management

## Acute Leukemias Clinical Features

**ALL (Acute Lymphoblastic Leukemia):**
- **Onset:** Sudden (days to weeks)
- **Bone pain:** Due to expansion of marrow cavity, may be severe (especially long bones)
- **Constitutional symptoms:** Fever (from infection), fatigue, weight loss
- **Hepatosplenomegaly:** 60% at presentation (leukemic infiltration)
- **Lymphadenopathy:** 70-80% (cervical, axillary, inguinal)
- **Bleeding:** Thrombocytopenia from marrow replacement; petechiae, ecchymosis, mucosal bleeding
- **CNS involvement:** 5-10% at diagnosis (headache, cranial nerve palsies, if untreated progresses to meningitis)
- **Mediastinal mass:** Especially T-cell ALL (chest pain, dyspnea, superior vena cava syndrome)

**AML (Acute Myeloid Leukemia):**
- **Onset:** Often acute but sometimes preceded by MDS
- **Gingival hyperplasia:** Pathognomonic (monocytic differentiation), bleeding gums, poor oral hygiene
- **Bleeding manifestations:** DIC common (especially APL), mucosal bleeding, ecchymosis
- **Infection:** Neutropenia (paradoxically, despite high WBC, many immature non-functional)
- **Leukostasis:** High WBC (>100,000/μL) → CNS (confusion, stroke) or pulmonary (dyspnea, hypoxia)
- **Hepatosplenomegaly:** Less frequent than ALL (~30%)
- **Bone pain:** Less prominent than ALL

**APL (Acute Promyelocytic Leukemia, AML-M3):**
- **DIC:** Severe, life-threatening (abnormal promyelocytic granules release tissue factor)
- **Hemorrhage:** Intracranial, GI, pulmonary (often fatal)
- **Differentiation syndrome:** With ATRA or arsenic treatment (fever, respiratory distress, fluid retention, cardiac tamponade)
- **Auer rods:** Pathognomonic (faggot cells with bundles of Auer rods)

## Chronic Leukemias Clinical Features

**CML (Chronic Myeloid Leukemia):**
- **Often asymptomatic:** Discovered incidentally on routine CBC
- **Massive splenomegaly:** Marked (splenic infarction, left upper quadrant pain possible)
- **Hepatomegaly:** 50% at presentation
- **Constitutional symptoms:** Fatigue, weight loss, night sweats (if advanced)
- **Leukostasis:** Less common than ALL (WBCs are mature, less adhesive)
- **Gout/hyperuricemia:** From high cell turnover
- **Blast crisis:** Acute transformation (fever, rapid deterioration, >30% blasts)

**CLL (Chronic Lymphocytic Leukemia):**
- **Often asymptomatic:** Discovered on routine CBC or when evaluating lymphadenopathy
- **Lymphadenopathy:** Painless, rubbery, non-tender nodes (cervical, axillary, inguinal)
- **Splenomegaly:** 50-60%
- **Hepatomegaly:** 10-20%
- **Autoimmune complications:**
  - **Autoimmune hemolytic anemia (AIHA):** 4-5% (positive direct Coombs), jaundice
  - **Immune thrombocytopenia (ITP):** 2-3%, bleeding
  - **Pure red cell aplasia:** Rare
- **Infections:** Hypogammaglobulinemia (especially IgG), recurrent bacterial infections
- **Progressive disease:** Lymphocytosis increases over time, marrow replacement

## Lymphoma Clinical Features

**Hodgkin's Lymphoma (HL):**
- **B symptoms:** Fever (often Pel-Ebstein: cyclical fever patterns), night sweats, weight loss (>10% body weight)
  - 25-30% at presentation
  - Associated with advanced stage, worse prognosis
- **Lymphadenopathy:** Painless, firm, rubbery nodes
  - **Supraclavicular/mediastinal:** Most common (chest mass on CXR)
  - Orderly spread along lymphatics
- **Pruritus:** Paraneoplastic (worse with alcohol, responds to NSAIDs)
- **Pel-Ebstein fever:** Cyclical pattern (characteristic but uncommon)
- **Complications:** Superior vena cava syndrome (mediastinal mass), spinal cord compression

**Non-Hodgkin's Lymphoma (NHL):**
- **Lymphadenopathy:** Generalized, asymmetric, more likely extranodal involvement
- **Extranodal disease:** GI (Burkitt's, MALT), CNS (lymphomatoid granulomatosis), bone marrow
- **B symptoms:** Less frequent than HL (15-20%)
- **Presentation:** Often advanced stage (III-IV) at diagnosis
- **Specific subtypes:**
  - **Burkitt's:** Young patients, jaw/abdomen masses, rapidly enlarging, CNS involvement
  - **Follicular:** Indolent, slow growth, stage IV common
  - **DLBCL:** Rapid growth, CNS risk, chemotherapy-responsive

## Investigations

**Complete Blood Count (CBC):**
- **Hemoglobin:** Anemia (normocytic, from marrow replacement)
- **WBC:** Elevated (except early CLL/HL may be normal)
  - ALL: 30,000-100,000+/μL (often)
  - CML: 100,000-1,000,000/μL (very high, mature forms)
  - CLL: 5,000-50,000/μL (lymphocytes)
- **Platelets:** Reduced (marrow replacement, DIC in APL)

**Peripheral Blood Smear:**
- **ALL:** Blasts with high nuclear-cytoplasmic ratio, fine chromatin, nucleoli, cytoplasm sparse/basophilic
- **AML:** Blasts larger, may have Auer rods (APL), some myeloid differentiation
- **CML:** Full spectrum myeloid maturation (immature to mature), left shift
- **CLL:** Small lymphocytes, smudge cells (fragile lymphocytes), narrow cytoplasm

**Flow Cytometry:**
- **Immunophenotyping:** B-cell markers (CD19, CD20), T-cell (CD3, CD5), myeloid (CD13, CD33)
- **ALL:** Blasts express lymphoid markers (CD19/CD20 for B-ALL, CD3/CD7 for T-ALL)
- **AML:** Blasts express myeloid markers
- **CLL:** CD5+ CD19+ CD23+ B cells (T-cell CLL: CD3+, CD4+/CD8+)
- **Blast percentage:** >20% confirms acute leukemia

**Bone Marrow Aspiration & Biopsy:**
- **Aspiration:** Morphology, blasts percentage, differential
- **Biopsy:** Marrow cellularity, fibrosis, megakaryocytes
- **Diagnostic gold standard** for leukemias

**Cytogenetics & Molecular Studies:**
- **Karyotype:** t(9;22) in CML, t(15;17) in APL, t(8;14) in Burkitt's
- **FISH (fluorescence in situ hybridization):** Philadelphia chromosome, other translocations
- **PCR:** BCR-ABL transcript levels (CML monitoring), c-MYC (Burkitt's)
- **Prognostic:** Complex karyotype = poor prognosis

**Staging for Lymphomas (Ann Arbor Staging):**
- **Stage I:** Single lymph node region
- **Stage II:** Two or more node regions on same side of diaphragm
- **Stage III:** Nodes on both sides of diaphragm ± spleen (IIIS if spleen involved)
- **Stage IV:** Extranodal involvement (organ involvement)
- **A/B suffix:** A = no B symptoms, B = B symptoms (fever, sweats, weight loss)

**Imaging:**
- **CXR:** Mediastinal mass (HL, lymphoma), pleural effusion
- **CT chest/abdomen/pelvis:** Staging lymphomas, assess extranodal disease
- **PET-CT:** Prognostic, often used for HL and NHL staging

## Indian Context Management

**Challenges:**
- Late presentation (advanced stage at diagnosis)
- Limited access to targeted therapy (imatinib, BCR-ABL inhibitors expensive)
- Infection risk (tuberculosis, opportunistic infections)
- Tumor lysis syndrome (high disease burden)

**Standard Treatment Approaches:**

**ALL in children:**
- Chemotherapy protocols (pediatric ALL: INDALL, AIEOP-BFM)
- Induction (vincristine, daunorubicin, asparaginase, prednisolone)
- Consolidation, maintenance (6-24 months)
- CNS prophylaxis (intrathecal methotrexate, cranial radiation if high-risk)
- 70-80% 5-year survival in developed centers, 40-50% in India

**AML in adults:**
- Induction chemotherapy (3+7 regimen: cytarabine + daunorubicin)
- Consolidation with high-dose cytarabine
- Allogeneic stem cell transplantation (if fit, matched donor available)
- Supportive care (transfusions, infection prophylaxis, TLS prevention)
- 30-40% 5-year survival

**APL:**
- **ATRA + arsenic trioxide:** Gold standard, 80-90% 5-year survival
- Combination highly effective with minimal toxicity
- Early recognition of DIC/differentiation syndrome critical
- All-trans retinoic acid (ATRA): 45 mg/m2/day divided doses
- Arsenic trioxide: 0.15 mg/kg/day IV

**CML:**
- **Imatinib:** First-line tyrosine kinase inhibitor, 800 mg/day
- **Cost limiting in India:** Attempts for generic imatinib
- **BCR-ABL transcript monitoring:** Quantitative RT-PCR every 3-6 months
- Milestones: >3 log reduction = major molecular response (MMR)
- Resistance/intolerance: second-generation TKI (nilotinib, dasatinib)
- Prognosis with imatinib: 90% 5-year survival

**CLL:**
- Often observation (watchful waiting) if asymptomatic
- Chemotherapy when indicated (fludarabine, chlorambucil)
- Monoclonal antibodies: rituximab (anti-CD20)
- Allogeneic transplant if young, fit, high-risk disease
- Median survival: 5-10 years (varies by prognostic factors)

**Hodgkin's Lymphoma:**
- **ABVD chemotherapy:** Adriamycin (doxorubicin), bleomycin, vinblastine, dacarbazine
- Typically 6 cycles ± radiation to involved fields
- **Stage I-II:** Chemotherapy ± radiation (90% 5-year survival)
- **Stage III-IV:** Chemotherapy ± radiation (80% 5-year survival)
- Modern therapy: Brentuximab vedotin (anti-CD30), nivolumab (checkpoint inhibitor)

**Non-Hodgkin's Lymphoma (DLBCL):**
- **R-CHOP:** Rituximab (monoclonal anti-CD20) + chemotherapy (cyclophosphamide, doxorubicin, vincristine, prednisolone)
- 6-8 cycles, ± radiation
- **60-70% 5-year survival**
- Follicular NHL: Indolent, similar chemotherapy but longer follow-up needed

**Supportive Care (all leukemias/lymphomas):**
- **Transfusions:** RBC, platelets as needed
- **Infection prophylaxis:** TMP-SMX (P. jirovecii), fluconazole (Candida), acyclovir if high-risk
- **TLS prevention:** Allopurinol or rasburicase, aggressive hydration
- **Anti-emetics:** For chemotherapy
- **Growth factors:** G-CSF for neutropenia if indicated
`,
        mnemonics: [
          { text: "ALL: bone pain, hepatosplenomegaly; AML: gingival hyperplasia, DIC", explanation: "Key clinical distinguishing features" },
          { text: "CML: massive spleen; CLL: lymphadenopathy, AIHA", explanation: "Chronic leukemia presentations" },
          { text: "HL: B symptoms, mediastinal mass, orderly spread; NHL: extranodal, random", explanation: "Lymphoma differences" },
          { text: "Ann Arbor: I single node, II both sides same, III both sides, IV extranodal", explanation: "Lymphoma staging" },
        ],
        keyPoints: [
          "ALL: bone pain, fever, hepatosplenomegaly, mediastinal mass; DIC rare",
          "AML: gingival hyperplasia, DIC (especially APL), leukostasis",
          "APL: severe DIC, Auer rods, ATRA/arsenic 80-90% cure",
          "CML: massive splenomegaly, blast crisis 3-5 years without treatment",
          "CLL: asymptomatic (often), lymphadenopathy, AIHA/ITP complications",
          "HL: B symptoms, mediastinal mass, supraclavicular adenopathy, orderly spread",
          "NHL: extranodal disease, stage IV at diagnosis (40%), advanced prognosis",
          "CBC, smear, flow cytometry, cytogenetics/FISH diagnostic",
          "APL: recognize DIC risk, differentiation syndrome with ATRA",
          "CML imatinib: BCR-ABL monitoring (MMR target), resistance management",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Clinical Aspects of Leukemias and Lymphomas", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Diagnosis and Management of Acute Leukemias", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Chemotherapy and Symptom Management", edition: "24th" },
        ],
      },
      {
        layer: 4,
        slug: "leukemia-lymphoma-layer-4-exam",
        title: "Leukemias & Lymphomas - Exam Prep",
        estimatedMinutes: 20,
        summary: "NEXT-pattern MCQs, pathognomonic clinical findings, cytogenetics-diagnosis associations, and clinical vignettes for exam preparation.",
        contentMd: `# Leukemias & Lymphomas - Exam Preparation

## Pathognomonic Findings Table

| Finding | Diagnosis |
|---------|-----------|
| Reed-Sternberg cells (mirror-image nuclei, owl-eye) | Hodgkin's lymphoma |
| Auer rods / Faggot cells | Acute myeloid leukemia (especially APL) |
| Gingival hyperplasia | AML (monocytic) |
| Philadelphia chromosome t(9;22) BCR-ABL | CML |
| PML-RARA t(15;17) with DIC | Acute promyelocytic leukemia (APL) |
| c-MYC translocation t(8;14) | Burkitt's lymphoma |
| Starry-sky pattern (histology) | Burkitt's lymphoma |
| Smudge cells | CLL |
| Fish-mouth cells | AML M4/M5 |
| Auer rods bundles (Faggot formation) | M3 (APL) |
| Basophilia >2% | CML (chronic phase) |
| Massive splenomegaly | CML |
| Bone pain, hepatosplenomegaly | ALL |
| Mediastinal mass | T-cell ALL, Hodgkin's (sclerosis) |
| B symptoms + supraclavicular adenopathy | Hodgkin's lymphoma |
| Extranodal involvement, stage IV at diagnosis | NHL |
| Petechial rash | Leukostasis or DIC |
| Gum bleeding, hyperplasia | AML M4/M5 (monocytic) |

## Cytogenetics-Diagnosis Associations

| Cytogenetics | Diagnosis | Mechanism | Prognosis |
|--------------|-----------|-----------|-----------|
| t(9;22) BCR-ABL | CML | Constitutive TK | Good with imatinib |
| t(15;17) PML-RARA | APL (AML-M3) | Blocks differentiation | Excellent (ATRA/arsenic) |
| t(8;14) c-MYC | Burkitt's NHL | c-MYC overexpression | Excellent (chemo-sensitive) |
| t(14;18) BCL2 | Follicular NHL, DLBCL | Anti-apoptosis | Moderate (indolent) |
| t(11;14) Cyclin D1 | Mantle cell NHL | Cell cycle dysregulation | Poor |
| JAK2 V617F | MPD (PV, ET, MF) | STAT signaling | Varies |
| Complex karyotype | AML, advanced disease | Multiple hits | Poor |
| del(5q) | MDS | Loss of tumor suppressors | Good |

## Clinical Vignette Patterns for Exams

**Vignette 1: Child with bone pain and hepatosplenomegaly**
- Presentation: 5-year-old, bone pain (femur), fever, fatigue, bruising
- Labs: Hemoglobin 7.5 g/dL, WBC 45,000/μL (blasts 80%), platelets 20,000/μL
- Peripheral smear: Blasts with high N:C ratio, fine chromatin, nucleoli
- **Answer:** Acute lymphoblastic leukemia (ALL)
- Management: Induction chemotherapy (INDALL protocol), CNS prophylaxis
- Prognosis: 70-80% 5-year survival with modern therapy

**Vignette 2: Middle-aged patient with massive splenomegaly, left upper quadrant pain**
- Presentation: 50-year-old, left upper quadrant pain, fatigue, weight loss
- Labs: WBC 250,000/μL (full myeloid spectrum), hemoglobin low, platelets normal/elevated initially
- Smear: Myelocytes, metamyelocytes, bands, mature neutrophils (left shift)
- Cytogenetics: t(9;22) Philadelphia chromosome positive, BCR-ABL fusion
- **Answer:** Chronic myeloid leukemia (CML)
- Management: Imatinib 800 mg/day, BCR-ABL transcript monitoring
- Prognosis: 90% 5-year survival with imatinib

**Vignette 3: Young adult with fever, night sweats, weight loss, mediastinal mass on CXR**
- Presentation: 28-year-old, fever (Pel-Ebstein pattern), night sweats, 5 kg weight loss, chest pain
- Exam: Firm, rubbery supraclavicular lymph nodes
- CXR: Large mediastinal mass
- Pathology: Reed-Sternberg cells with lymphocytic background
- **Answer:** Hodgkin's lymphoma (nodular sclerosis subtype)
- Staging: Ann Arbor staging, PET-CT for prognosis
- Management: ABVD chemotherapy ± mediastinal radiation
- Prognosis: 85% 5-year survival

**Vignette 4: Elderly patient with painless lymphadenopathy, discovered on routine exam**
- Presentation: 72-year-old, asymptomatic, found to have cervical/axillary lymphadenopathy
- Labs: WBC 12,000/μL (absolute lymphocytes 8,000/μL), hemoglobin 11 g/dL, normal platelets
- Smear: Small lymphocytes, some smudge cells
- Flow cytometry: CD5+ CD19+ CD23+ (B-cell markers)
- **Answer:** Chronic lymphocytic leukemia (CLL)
- Management: Observation if asymptomatic (watchful waiting)
- Prognosis: Median 5-10 years

**Vignette 5: Young woman with severe coagulopathy, Auer rods on smear**
- Presentation: 32-year-old, fever, bleeding from gums/nose, bruising, severe coagulopathy
- Labs: WBC 8,000/μL (abnormal promyelocytes), hemoglobin 7.5 g/dL, platelets 15,000/μL
- PT/INR: Prolonged, fibrinogen low, D-dimer markedly elevated
- Smear: Abnormal promyelocytes with Auer rods, some faggot cells (bundles of Auer rods)
- Cytogenetics: t(15;17) PML-RARA
- **Answer:** Acute promyelocytic leukemia (APL, AML-M3)
- **CRITICAL:** Recognize DIC, immediate ATRA + arsenic trioxide, supportive transfusions
- Prognosis: 80-90% 5-year survival

**Vignette 6: Rapidly enlarging abdominal mass in adolescent**
- Presentation: 17-year-old, rapidly enlarging abdominal mass, fever, weight loss
- Labs: WBC 15,000/μL (mostly mature blasts/lymphocytes), hemoglobin 8.5 g/dL
- Smear: Blasts with coarse chromatin, moderate cytoplasm, high mitotic rate
- Cytogenetics: t(8;14) c-MYC translocation
- **Answer:** Burkitt's lymphoma
- **Alert:** Risk of tumor lysis syndrome (high cell turnover, aggressive)
- Management: Prophylactic allopurinol/rasburicase, aggressive hydration, chemotherapy (high-dose, CNS prophylaxis)
- Prognosis: 70-90% 5-year survival with modern therapy

## Problem-Solving Q&A Examples (NEXT-pattern)

**Q (Analysis): A 55-year-old with newly diagnosed AML has complex karyotype with monosomy 7 and t(5;11). What is the primary implication?**
- A) Good prognosis with intensive chemotherapy alone
- B) High-risk disease with poor prognosis; allogeneic transplant recommended
- C) Excellent response to ATRA monotherapy
- D) Optimal treatment with single-agent cytarabine
- **Answer: B** (Analysis-level: interpretation of cytogenetics in prognosis)

**Q (Problem-solving): A 12-year-old with ALL has been in complete remission for 8 months. She now presents with fever, bone pain, hepatosplenomegaly recurrence. What is the appropriate next step?**
- A) Reassure parents, continue maintenance chemotherapy
- B) Restart from induction phase; consider allogeneic transplantation
- C) Switch to ATRA-based therapy
- D) Admit for blood transfusion only
- **Answer: B** (Problem-solving: requires recognition of relapse and adjusted strategy)

**Q (Problem-solving): A 65-year-old with CML chronic phase on imatinib for 3 years now has BCR-ABL transcript elevation (10-fold increase) and appearance of T315I mutation. What is the best management?**
- A) Increase imatinib dose to 1200 mg/day
- B) Switch to second-generation TKI (nilotinib or dasatinib)
- C) Immediate palliative care; prognosis poor
- D) Add hydroxyurea to imatinib
- **Answer: B** (Problem-solving: recognize TKI resistance and appropriate escalation; T315I specifically requires ponatinib)

**Q (Recall): Which cytogenetic abnormality is associated with excellent prognosis in AML when treated with ATRA and arsenic trioxide?**
- A) t(9;22)
- B) Complex karyotype
- C) t(15;17)
- D) del(5q)
- **Answer: C** (Recall: t(15;17) APL with ATRA/arsenic = 80-90% cure)

## Exam Strategy Points

1. **Recognize pathognomonic findings:** Reed-Sternberg cells = HL, Auer rods = AML, Philadelphia = CML
2. **Age epidemiology:** ALL in children, AML in elderly, CLL rare in India
3. **Cytogenetics drive treatment:** APL t(15;17) gets ATRA/arsenic (not standard chemo), Burkitt's t(8;14) intense chemo
4. **Distinguish acute vs chronic:** Blasts >20% = acute (regardless of symptoms)
5. **Flow cytometry immunophenotype:** CD5+CD19+CD23+ = CLL; CD33+CD13+ blasts = AML
6. **DIC in APL:** Life-threatening, recognize early (coagulopathy, thrombocytopenia), ATRA reverses
7. **TLS risk:** High cell turnover malignancies (ALL, Burkitt's), prevent with allopurinol/rasburicase
8. **HL vs NHL:** HL orderly spread (stage by adjacent nodes), NHL random/extranodal
9. **Indian context:** Limited access to newer agents, late presentation, infection risk
10. **Prognosis factors:** Cytogenetics, age, WBC at diagnosis, response to initial therapy
`,
        mnemonics: [
          { text: "RS = Reed-Sternberg = Hodgkin", explanation: "Pathognomonic cell for HL diagnosis" },
          { text: "Auer + monocytic = APL DIC", explanation: "AML-M3 with Auer rods, severe DIC, ATRA responsive" },
          { text: "Philadelphia t(9;22) = CML imatinib", explanation: "Tyrosine kinase target, good prognosis" },
          { text: "Burkitt t(8;14) c-MYC = aggressive but curable", explanation: "High proliferation, chemo-sensitive" },
        ],
        keyPoints: [
          "Reed-Sternberg cells → Hodgkin's lymphoma (diagnostic)",
          "Auer rods → AML (especially APL)",
          "Gingival hyperplasia → AML monocytic (M4/M5)",
          "t(9;22) → CML (BCR-ABL, imatinib responsive)",
          "t(15;17) → APL (ATRA/arsenic 80-90% cure)",
          "t(8;14) → Burkitt's (c-MYC, high-dose chemo)",
          "Smudge cells → CLL",
          "Massive spleen → CML",
          "Bone pain + hepatosplenomegaly → ALL",
          "Complex karyotype → poor prognosis AML",
          "B symptoms + mediastinal mass → HL",
          "Extranodal stage IV at diagnosis → NHL",
          "ALL: 70-80% survival (children); AML: 30-40%; APL: 80-90%; CML: 90%; HL: 85%; NHL: 60-70%",
          "DIC recognition in APL critical (coagulopathy, low fibrinogen, elevated D-dimer)",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Case-Based Learning: Leukemias and Lymphomas", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "NEXT-Pattern Questions on Hematologic Malignancies", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Clinical Scenarios in Oncology", edition: "24th" },
        ],
      },
      {
        layer: 5,
        slug: "leukemia-lymphoma-layer-5-active-recall",
        title: "Leukemias & Lymphomas - Active Recall",
        estimatedMinutes: 15,
        summary: "10+ flashcard Q&A pairs for active recall and reinforcement of key concepts in leukemias and lymphomas.",
        contentMd: `# Active Recall Flashcards: Leukemias & Lymphomas

## Flashcard Q&A Set

**Q1: What is the Philadelphia chromosome and which leukemia is it pathognomonic for?**
> **A1:** The Philadelphia chromosome is a translocation t(9;22) involving the ABL gene (chromosome 9) and BCR gene (chromosome 22), producing a BCR-ABL fusion gene that encodes a constitutively active tyrosine kinase. It is pathognomonic for CML (found in 95% of cases) and is the molecular basis for targeted therapy with imatinib (tyrosine kinase inhibitor).

**Q2: How do you distinguish ALL from AML based on clinical presentation?**
> **A2:** ALL: bone pain, fever, hepatosplenomegaly (common in children). AML: gingival hyperplasia (pathognomonic for monocytic AML), DIC (especially APL with severe coagulopathy), leukostasis with very high WBC counts. APL specifically presents with severe bleeding from DIC. Age: ALL peaks 2-5 years (children); AML peaks in elderly (>65 years).

**Q3: What is ATRA and why is it effective in APL?**
> **A3:** ATRA (all-trans retinoic acid) is a derivative of vitamin A that binds to the RARA component of the PML-RARA fusion protein (from t(15;17) translocation in APL). This binding reverses the abnormal gene repression caused by the fusion protein, allowing differentiation of the leukemic promyelocytes. Combined with arsenic trioxide, ATRA achieves 80-90% complete remission and 5-year survival in APL, far superior to standard chemotherapy alone.

**Q4: What is tumor lysis syndrome (TLS) and which malignancies carry highest risk?**
> **A4:** TLS is acute hyperkalemia, hyperphosphatemia, hyperuricemia, and secondary hypocalcemia resulting from massive cell death (chemotherapy-induced). Highest risk: ALL (high blast burden), Burkitt's lymphoma (very high cell proliferation rate), other aggressive lymphomas with bulky disease. Prevention: allopurinol (xanthine oxidase inhibitor), rasburicase (urate oxidase), aggressive IV hydration. Monitor K+, phosphate, uric acid, calcium.

**Q5: Distinguish Hodgkin's from Non-Hodgkin's lymphoma in terms of pathology, spread pattern, and prognosis.**
> **A5:** Hodgkin's: Reed-Sternberg cells (pathognomonic), orderly contiguous spread along lymphatics, better overall prognosis (70-80% 5-year survival), more predictable staging. Non-Hodgkin's: no RS cells, diverse histology (60+ subtypes), random/extranodal spread, variable prognosis by subtype (follicular indolent ~10-15 year survival; Burkitt's aggressive but curable 70-90%; DLBCL 60-70%).

**Q6: What are the cytogenetic abnormalities associated with Burkitt's lymphoma and what is the molecular consequence?**
> **A6:** Burkitt's lymphoma is associated with t(8;14)(q24;q32) involving the c-MYC oncogene (chromosome 8) and the immunoglobulin heavy chain (IgH) promoter (chromosome 14). This juxtaposition places c-MYC under control of the strong IgH promoter, resulting in constitutive c-MYC overexpression and uncontrolled cell cycle progression. This is one of the most aggressive lymphomas but highly chemotherapy-sensitive (70-90% cure with high-dose chemotherapy and CNS prophylaxis). Often associated with EBV, especially in immunocompromised patients.

**Q7: How do you manage DIC in APL? Why is early recognition critical?**
> **A7:** DIC in APL (AML-M3) results from abnormal promyelocytic granules releasing tissue factor into circulation. Management: (1) Immediate ATRA + arsenic trioxide (reverses DIC), (2) supportive transfusions (RBC, FFP, platelets, cryoprecipitate), (3) avoid vitamin K, NSAIDs; (4) monitor PT/INR, fibrinogen, D-dimer, platelet count; (5) anticoagulation controversial (some use heparin if worsening). Early recognition is critical because untreated DIC leads to life-threatening hemorrhage (intracranial, GI, pulmonary). ATRA begins reversing coagulopathy within 24-48 hours.

**Q8: What is the standard empirical chemotherapy regimen for Hodgkin's lymphoma?**
> **A8:** ABVD chemotherapy:
- Adriamycin (doxorubicin)
- Bleomycin
- Vinblastine
- Dacarbazine
Typically 6 cycles, often followed by radiation to involved-field regions. Achieves 80-90% 5-year survival for localized disease, 70-80% for advanced. Newer regimens include brentuximab vedotin (anti-CD30 monoclonal antibody) and checkpoint inhibitors (nivolumab) for relapsed/refractory disease.

**Q9: Describe the phases of CML progression and what precipitates transformation to blast crisis.**
> **A9:** CML has three phases: (1) Chronic phase: stable disease for 3-5 years on imatinib, <15% blasts; (2) Accelerated phase: >15% blasts, >30% basophils/eosinophils, extramedullary involvement, emerging resistance to imatinib; (3) Blast crisis: >30% blasts, acute leukemia-like picture, rapid deterioration, median survival months without treatment. Transformation driven by sequential mutations in addition to BCR-ABL (p53 loss, RB inactivation, myc upregulation). BCR-ABL transcript monitoring detects rising levels before morphologic blast crisis. TKI resistance (especially T315I mutation) necessitates switch to second-generation TKI (nilotinib, dasatinib) or ponatinib.

**Q10: What is the pathophysiology of Hodgkin's lymphoma and why is the cell burden often low despite high symptoms?**
> **A10:** Hodgkin's lymphoma arises from crippled germinal center B cells (non-functional B-cell receptor). The malignant Reed-Sternberg cells comprise <1% of the tumor cellularity; the majority (99%+) are non-malignant cells: T cells (CD8+, CD4+), eosinophils, and macrophages recruited by the RS cells through cytokine production (IL-5, eotaxin, CCL17). This unique microenvironment explains why HL often presents with high tumor burden/high symptoms but relatively low blast percentage on blood smear. EBV drives proliferation through EBNA-1 and LMP-1 signaling (40-50% cases in developed countries, 75-100% in developing countries). RS cells evade immune response by loss of MHC class I.

**Q11: What is the management of CLL when asymptomatic versus when treatment is indicated?**
> **A11:** Asymptomatic CLL (most at diagnosis): watchful waiting/observation, routine follow-up CBC every 3-6 months, monitor for complications (AIHA, ITP, infections). Treatment indicated when: (1) progressive marrow failure (anemia, thrombocytopenia); (2) massive lymphadenopathy/organomegaly; (3) autoimmune complications unresponsive to steroids; (4) clinical symptoms. Standard chemotherapy: fludarabine, cyclophosphamide, or chlorambucil. Monoclonal antibodies: rituximab (anti-CD20) improves outcomes. Allogeneic stem cell transplantation for young, fit patients with high-risk disease (del(17p), TP53 mutation). Median survival: 5-10 years (varies widely).

**Q12: What is the immediate management of a patient presenting with suspected ALL and very high WBC (>100,000/μL)?**
> **A12:** High WBC with high blast percentage carries risk of leukostasis (CNS and pulmonary). Immediate management: (1) gentle hydration with normal saline (avoid diuretics; maintain adequate kidney perfusion for TLS prevention); (2) avoid transfusions unless absolutely necessary (increase viscosity, worsen leukostasis); (3) monitor for CNS symptoms (confusion, stroke) and pulmonary symptoms (dyspnea, hypoxia); (4) consider cytoreduction with hydroxyurea or low-dose cytarabine to rapidly lower WBC if symptoms present; (5) TLS prophylaxis: allopurinol or rasburicase, aggressive hydration; (6) initiate induction chemotherapy urgently once TLS prevented. Mechanical ventilation may be needed for leukostatic pulmonary infiltrates.

**Q13: What are the poor prognostic factors in AML?**
> **A13:** Poor prognostic factors in AML: (1) Age >60 years (worse chemotherapy tolerance, higher mortality); (2) Complex karyotype (multiple cytogenetic abnormalities, 5-year survival <10%); (3) TP53 mutations (catastrophic, often complex karyotype); (4) Monosomy 7 or 5 (loss of chromosomes with tumor suppressors); (5) Secondary AML (prior MDS or chemotherapy); (6) High white blood cell count at diagnosis; (7) Poor response to induction therapy (not achieving complete remission); (8) High-risk fusion genes (PMLRARA, RUNX1RUNX1T1 generally good, but in context of other mutations can be poor). Good prognostic: t(15;17), t(8;21), inv(16), favorable cytogenetics, younger age, rapid response to chemotherapy.

**Q14: What is the Ann Arbor staging system for lymphomas and why is it important for prognosis?**
> **A14:** Ann Arbor Staging: (I) single lymph node region; (II) two or more node regions on same side of diaphragm; (III) nodes on both sides of diaphragm, may include spleen (IIIS); (IV) extranodal involvement (organs). A/B suffix: A = no B symptoms, B = B symptoms (fever >38.5°C, night sweats, unintentional weight loss >10% body weight in 6 months). Importance for prognosis: (1) Stage I-II HL: 90%+ 5-year survival; (2) Stage III-IV HL: 70-80% 5-year survival; (3) NHL staging less predictive (stage IV common); (4) B symptoms indicate worse prognosis; (5) Guides treatment intensity and radiation fields.

**Q15: How does BCR-ABL transcript monitoring guide management in CML?**
> **A15:** Quantitative RT-PCR measures BCR-ABL transcript levels (expressed as ratio to normal ABL gene or as absolute number of copies/mL blood). Monitoring performed every 3-6 months on imatinib therapy. Target: major molecular response (MMR), defined as >3-log reduction of BCR-ABL transcript from baseline (>4.5-log indicates complete molecular response). Milestones: (1) 3 months: >1-log reduction expected; (2) 6 months: >2-log; (3) 12 months: >3-log (MMR). Failure to achieve milestones suggests: (1) inadequate adherence; (2) imatinib resistance (mutant BCR-ABL, most common T315I); (3) need for dose escalation or TKI switch (nilotinib, dasatinib, or ponatinib for T315I). Rising transcript levels predict blast crisis 3-6 months ahead, allowing preemptive intervention.
`,
        mnemonics: [
          { text: "Philadelphia = BCR-ABL = CML = imatinib", explanation: "Key association for exam; targeted TK therapy" },
          { text: "ATRA reverses APL DIC", explanation: "Mechanism: binds RARA component of PML-RARA, restores differentiation" },
          { text: "RS cells <1%, non-malignant 99% = HL", explanation: "Unique tumor microenvironment" },
          { text: "t(8;14) c-MYC = Burkitt's + EBV + aggressive + curable", explanation: "Translocation drives constitutive proliferation" },
        ],
        keyPoints: [
          "Philadelphia t(9;22) BCR-ABL: imatinib responsive, 90% 5-year survival",
          "APL DIC: recognize coagulopathy; ATRA/arsenic reversal; monitor PT, fibrinogen, D-dimer",
          "Burkitt's: high proliferation, TLS risk, CNS prophylaxis, 70-90% cure",
          "CML phases: chronic (years) → accelerated → blast crisis (fatal without Rx)",
          "HL: RS cells pathognomonic, orderly spread, B symptoms indicate worse prognosis",
          "NHL: no RS cells, diverse subtypes, random spread, stage IV common",
          "ALL: bone pain, hepatosplenomegaly, mediastinal mass, CNS prophylaxis critical",
          "AML: gingival hyperplasia, DIC (APL), leukostasis, poor prognostic factors",
          "CLL: asymptomatic (observation), AIHA/ITP complications, median 5-10 years",
          "TLS: high-risk (ALL, Burkitt's); prevent with allopurinol/rasburicase, hydration",
          "BCR-ABL monitoring: MMR target >3-log reduction, TKI resistance (T315I)",
          "Cytogenetics drive treatment: APL gets ATRA, Burkitt's gets high-dose chemo",
          "Prognosis: HL 85%, APL 80-90%, CML 90%, Burkitt's 70-90%, DLBCL 60-70%, ALL children 70-80%",
          "Indian context: late presentation, limited imatinib access, infection/TB risk",
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Active Recall Scenarios in Hematology", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "Board Exam Questions on Leukemias/Lymphomas", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "Clinical Problem Solving in Oncology", edition: "24th" },
        ],
      },
    ],
  },
];

export default medicinePart10Lessons;
