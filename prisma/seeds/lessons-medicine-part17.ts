import type { TopicLessons } from "./content-loader";

export const medicineLessonsPart17: TopicLessons[] = [
  {
    topicCode: "IM-MOD-09-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "hiv-aids-layer-1-foundation",
        title: "HIV/AIDS & Opportunistic Infections - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to HIV virology, structure, and epidemiology. Understanding HIV as a retrovirus, its genetic material, and the Indian epidemiological landscape of HIV/AIDS.",
        contentMd: `# HIV/AIDS Foundation: Virology and Epidemiology

## What is HIV?

Human Immunodeficiency Virus (HIV) is a **lentivirus** belonging to the retrovirus family. It is an enveloped, single-stranded RNA virus that specifically targets the human immune system, particularly CD4+ T lymphocytes, macrophages, and dendritic cells.

### Key Characteristics of Retroviruses

Retroviruses are unique RNA viruses that encode **reverse transcriptase**, an enzyme that allows them to convert their RNA genome into DNA. This DNA can then integrate into the host cell's genome, establishing persistent infection.

## HIV Structure

Understanding HIV structure is fundamental to comprehending its pathogenesis and targeting it with antiretroviral drugs.

### Viral Envelope Components

The outermost layer of HIV contains **lipid bilayer** derived from the host cell membrane. Embedded within this envelope are two critical glycoproteins:

1. **gp120 (Surface Glycoprotein)**: This protein is responsible for initial binding to CD4 receptors on target cells. It is highly variable, explaining why HIV can evade antibodies. The gp120-CD4 interaction is the first step in viral attachment.

2. **gp41 (Transmembrane Glycoprotein)**: This protein mediates fusion between the viral envelope and the host cell membrane, allowing viral entry. After gp120 binds CD4, conformational changes expose gp41, which then inserts into the host membrane.

### Core Components

The HIV core contains:

1. **Reverse Transcriptase (RT)**: A polymerase enzyme with three enzymatic activities:
   - DNA synthesis from RNA template (RNA-dependent DNA polymerase)
   - Degradation of original RNA (RNase H)
   - DNA synthesis from DNA template (DNA-dependent DNA polymerase)

2. **Integrase**: This enzyme catalyzes the integration of viral DNA into the host cell genome, allowing for stable, persistent infection.

3. **Protease**: A viral aspartate protease that cleaves viral polyproteins into mature, functional proteins. Protease inhibitors target this enzyme.

4. **p24 (Capsid Protein)**: This protein forms the core shell containing viral RNA and enzymes. p24 levels in blood correlate with viral load and are used clinically as biomarkers.

5. **Viral RNA**: HIV contains two copies of single-stranded, positive-sense RNA (~9.7 kb), making it one of the smallest DNA viruses when considering genetic economy.

## HIV-1 vs HIV-2

### HIV-1
- Most common globally and in India
- More pathogenic, faster disease progression
- Higher viral load and transmissibility
- Responsible for majority of AIDS cases

### HIV-2
- Found primarily in West Africa
- Less transmissible, slower progression
- Often diagnosed incidentally
- Requires different diagnostic algorithms (some ELISA/rapid tests may miss HIV-2)

## Indian Epidemiology

### NACO (National AIDS Control Organization) Data

According to current NACO estimates:

- **Estimated PLHIV (People Living with HIV)**: Approximately 24 lakh (2.4 million)
- **Prevalence**: 0.29% among general population
- **Key Affected Populations**: Men who have sex with men (MSM), sex workers, transgender individuals, incarcerated persons, healthcare workers
- **Geographic Distribution**: Highest in Southern and Northeastern states (Andhra Pradesh, Karnataka, Maharashtra, Manipur, Nagaland)

### Transmission in Indian Context

India follows patterns typical of heterosexual epidemiology with emerging MSM transmission:

1. **Sexual Transmission** (85%): Unprotected heterosexual and homosexual contact
2. **Blood and Blood Products** (10%): Blood transfusions, needle sharing among PWID (People Who Inject Drugs)
3. **Mother-to-Child Transmission** (5%): During pregnancy, labor, or breastfeeding

## Natural History Timeline

The infection progresses through predictable stages:

1. **Acute HIV Infection** (2-4 weeks): Acute retroviral syndrome with high viral load
2. **Early Chronic Phase** (months to years): Asymptomatic with gradual CD4 decline
3. **Advanced HIV Disease** (CD4 <200): Opportunistic infections begin
4. **AIDS** (CD4 <50 with opportunistic infections): Without ART, median survival is 9-11 months

## Transmission Routes

### Sexual Transmission
- Highest risk: Receptive anal intercourse, unprotected vaginal intercourse
- Genital inflammation increases risk
- Circumcision reduces transmission risk

### Blood-Borne Transmission
- Needle sharing among PWID
- Occupational exposure (needlestick injury)
- Contaminated blood products (rare in developed blood banks)

### Mother-to-Child Transmission
- Vertical transmission risk without prophylaxis: 15-45%
- Highest during labor and delivery
- Breastfeeding increases risk substantially in resource-limited settings

## Tropism and Cell Targets

HIV specifically targets cells expressing:

1. **CD4 Receptor**: Present on CD4+ T cells, macrophages, dendritic cells
2. **Co-receptors**: Either CCR5 (R5 tropism) or CXCR4 (X4 tropism)
   - R5-tropic virus typically predominates during early infection
   - X4-tropic virus emerges during disease progression
   - The CCR5-delta32 mutation confers resistance to R5-tropic virus

This tropism pattern is important because it explains disease progression and influences treatment decisions.

## Clinical Significance in Foundation Understanding

Understanding HIV structure, tropism, and epidemiology forms the basis for:
- Explaining mechanisms of viral entry and replication (Layer 2)
- Understanding how clinical complications arise (Layer 3)
- Interpreting laboratory tests (Layer 4)
- Quick recall of key facts (Layer 5)`,
        mnemonics: [
          {
            text: "GRIN",
            explanation: "GP120 = envelope (G), Reverse Transcriptase = converts RNA (R), INtegrase = inserts DNA. Remembers key HIV enzymes."
          },
          {
            text: "TRIP",
            explanation: "Transmission Routes in India: sexual, blood, mother-to-child (perinatal) - three main routes."
          }
        ],
        keyPoints: [
          "HIV is a lentivirus with RNA genome and reverse transcriptase enzyme",
          "gp120/gp41 mediate attachment and fusion; p24, RT, integrase, protease are core functional proteins",
          "HIV-1 is most common; HIV-2 less transmissible but found in West Africa",
          "India has ~24 lakh PLHIV with heterosexual transmission predominating, highest in Southern and NE states",
          "CCR5 and CXCR4 co-receptors determine viral tropism and disease progression pattern"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "123: Human Immunodeficiency Virus Infection and AIDS", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "10.10: HIV Infection and AIDS", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "14: HIV Infection and AIDS", edition: "24th" }
        ]
      },
      {
        layer: 2,
        slug: "hiv-aids-layer-2-mechanism",
        title: "HIV/AIDS & Opportunistic Infections - Mechanism",
        estimatedMinutes: 30,
        summary: "Deep dive into HIV replication cycle, viral entry mechanisms, CD4 T-cell depletion, immune reconstitution, and the progression from acute to latent to AIDS phases.",
        contentMd: `# HIV Replication Cycle and Pathophysiology

## Complete HIV Replication Cycle

The HIV replication cycle is the molecular foundation of infection. Understanding each step is crucial for grasping how antiretroviral drugs work.

### Step 1: Attachment (Binding)

HIV attachment occurs through a two-step binding process:

1. **Initial Recognition**: gp120 on the HIV surface binds to **CD4 receptors** on target cells (CD4+ T cells, macrophages, dendritic cells)

2. **Co-receptor Binding**: After CD4 binding, gp120 undergoes conformational change, exposing the binding site for **CCR5** or **CXCR4** co-receptors

The choice of co-receptor is critical:
- **R5-tropic HIV**: Uses CCR5 chemokine receptor
  - Predominates early in infection
  - Found in macrophage-tropic strains
  - Blocked by the CCR5-delta32 mutation (which confers natural resistance)

- **X4-tropic HIV**: Uses CXCR4 chemokine receptor
  - Emerges during disease progression
  - Associated with faster CD4 decline
  - Marker of advancing immunosuppression

### Step 2: Fusion

Once co-receptor binding occurs:

1. **gp41 Exposure**: The fusion protein gp41 becomes exposed and inserts into the host cell membrane

2. **Membrane Fusion**: gp41 mediates fusion between viral and cellular membranes, allowing viral core entry

**Clinical Relevance**: Fusion inhibitors (e.g., enfuvirtide) block this step.

### Step 3: Reverse Transcription

Inside the target cell, reverse transcriptase converts the viral RNA genome into DNA:

1. **First Strand Synthesis**: RT uses viral RNA as template to synthesize complementary DNA (cDNA)

2. **RNA Degradation**: The RNase H activity of RT degrades the original RNA template

3. **Second Strand Synthesis**: RT synthesizes the second DNA strand, creating double-stranded DNA

This step is error-prone due to RT lacking proofreading ability, generating mutations at a rate of ~10^-4 to 10^-5 per nucleotide per replication cycle. This high mutation rate explains:
- Rapid development of drug resistance
- Viral escape from immune responses
- Quasi-species dynamics (swarm of slightly different viral variants)

**Clinical Relevance**: Nucleoside/nucleotide and non-nucleoside RT inhibitors block this step.

### Step 4: Integration

The newly synthesized viral DNA enters the nucleus where integrase catalyzes its integration into the host genome:

1. **Strand Cleavage**: Integrase makes staggered cuts in both viral DNA and host chromosomal DNA

2. **DNA Transfer**: Viral DNA is inserted between host DNA sequences

3. **Gap Filling**: Host cell DNA repair machinery fills in the gaps and ligates the DNA

Once integrated, the viral DNA (provirus) becomes a permanent part of the host genome and is replicated along with host DNA during cell division.

**Clinical Significance**: This integration explains why HIV establishes latent reservoirs that persist despite ART. Integrase inhibitors block this step.

### Step 5: Transcription and Translation

After integration, viral genes are transcribed into mRNA by host RNA polymerase II:

1. **Spliced and Unspliced mRNAs**: Different viral genes are expressed via alternative splicing
   - Early genes: regulatory proteins (Tat, Rev)
   - Late genes: structural and enzymatic proteins

2. **Translation**: Viral mRNAs are translated into viral proteins at host ribosomes

3. **Post-Translational Modifications**: Viral proteins undergo modifications (phosphorylation, glycosylation, ubiquitination)

### Step 6: Assembly and Budding

Viral proteins and RNA self-assemble at the host cell membrane:

1. **Immature Particle Formation**: Gag polyproteins, RNA, and enzymes accumulate at the cell membrane

2. **Budding**: The immature particle acquires a lipid bilayer from the host cell membrane and buds from the cell

3. **Maturation**: Viral protease cleaves Gag and Gag-Pol polyproteins into mature, functional proteins

**Clinical Significance**: Protease inhibitors block protease function, resulting in non-infectious immature particles.

## CD4+ T-Cell Depletion Mechanisms

Multiple mechanisms contribute to CD4+ T-cell depletion in HIV infection:

### Direct Viral Cytopathic Effect

- **Uninfected Bystander Killing**: The gp120-gp41 envelope proteins expressed on infected cell surface can bind to CD4 and co-receptors on uninfected neighboring cells, causing syncytium formation and cell death

- **Proteasome-Mediated Degradation**: Viral proteins (especially Vpr and Nef) promote degradation of CD4 and class I MHC molecules

- **Apoptosis Induction**: Accumulation of reverse-transcribed unintegrated DNA and viral proteins triggers apoptosis through intrinsic and extrinsic pathways

### Chronic Immune Activation

- **Residual Viremia**: Even with ART, low-level viral replication and immune activation persist

- **Persistent Antigenic Stimulation**: Continuous T-cell activation against HIV antigens drives proliferation and exhaustion

- **CD4 T-Cell Exhaustion**: Repeated activation induces upregulation of inhibitory receptors (PD-1, TIM-3, LAG-3), rendering cells dysfunctional

- **Th17 Cell Loss**: Selective depletion of Th17 cells compromises mucosal barrier function and increases susceptibility to bacterial infections

### Lymph Node Disruption

- **Fibrosis**: Progressive fibrosis of lymph node germinal centers impairs T-cell generation and survival

- **Microbial Translocation**: Loss of Th17 cells and mucosal integrity allows bacterial translocation from the gut, perpetuating immune activation

## Progression Model: Acute → Latent → AIDS

### Acute HIV Infection (2-4 weeks)

**Virological Features**:
- Explosive viral replication with plasma viral load > 1 million copies/mL
- Rapid CD4 decline (can drop 200-400 cells/μL)
- High infectivity period

**Clinical Features**:
- Acute retroviral syndrome (fever, rash, lymphadenopathy, myalgias)
- High levels of p24 antigen and viral RNA
- Weak or absent antibodies initially

**Immune Response**:
- Emergence of CTL (cytotoxic T lymphocyte) response
- Development of antibodies (seroconversion)
- Partial containment of viral replication

### Clinical Latency (months to years)

**Virological Features**:
- Viral load stabilizes at "set point" (usually 1000-100,000 copies/mL)
- Set point determined by:
  - Viral characteristics (replication capacity)
  - Host immune competence
  - HLA type (certain HLA alleles control infection better)
  - Genetic factors (CCR5-delta32 mutation)

**Clinical Features**:
- Asymptomatic or minimal symptoms
- CD4 count gradually declines (typically 40-100 cells/μL/year)
- Persistent lymphadenopathy may be present

**Immunological Features**:
- Strong CD4+ and CD8+ T-cell responses
- Persistent viral replication in lymphoid tissues despite undetectable plasma levels

### Advanced HIV Disease and AIDS (CD4 <200)

**Virological Features**:
- Breakthrough in viral containment
- Increase in viral load and X4-tropic virus emergence
- Accelerated CD4 decline

**Clinical Features**:
- Opportunistic infections and malignancies
- Constitutional symptoms (fever, weight loss, diarrhea)
- Progressive immunosuppression

**Immunological Collapse**:
- Severe loss of CD4+ T-cell help
- Failure of antibody responses
- Loss of delayed-type hypersensitivity (unable to mount Th1 responses)

## Immune Reconstitution Inflammatory Syndrome (IRIS)

When ART is initiated in patients with advanced immunosuppression (CD4 <50), two types of IRIS can occur:

### Unmasking IRIS (Paradoxical IRIS)

- Occurs when subclinical opportunistic infection becomes clinically apparent as immune system recovers
- Examples: TB lymphadenitis, PCP, CMV
- Mechanism: Restoration of cell-mediated immunity against previously controlled organisms

### Exacerbation IRIS

- Worsening of known opportunistic infection despite clinical improvement
- Occurs after ART initiation in patients already being treated for OI
- Mechanism: Excessive inflammatory response against OI antigens

**Management**: Continuation of ART plus anti-inflammatory therapy (corticosteroids) in severe cases.

## Viral Set Point and Progression Rate

The viral set point (steady-state plasma viral load) is the best single predictor of disease progression:

- **Set point <1,000 copies/mL**: Slow progression (>10 years to AIDS without ART)
- **Set point 1,000-10,000 copies/mL**: Intermediate progression (5-10 years)
- **Set point >100,000 copies/mL**: Rapid progression (<3 years to AIDS)

Factors determining set point:
1. **HLA Type**: Certain HLA-B alleles (e.g., B57, B58) are associated with better viral control
2. **Viral Genotype**: Replication capacity of the infecting strain
3. **CCR5-delta32 Mutation**: Confers resistance to R5-tropic virus; heterozygotes have slower progression
4. **CD8+ T-cell Response**: Strength of CTL response influences early set point
5. **Integration Burden**: Number of integrated proviruses in long-lived cells

## Clinical Implications of Mechanism Understanding

These mechanisms explain why:
- Early treatment is beneficial (preserves immune function)
- Adherence to ART is critical (prevents resistance)
- CD4 count recovery is slow despite viral load suppression (requires thymic reconstitution)
- Long-lived latent reservoirs persist despite undetectable viral load (integrated provirus)
- OI prophylaxis is essential (when CD4 <200 or <50)
- Regular viral load and CD4 monitoring guides clinical decisions`,
        mnemonics: [
          {
            text: "ATTACH-FUSE-REV-INT-TRANS-ASSEM",
            explanation: "Six main steps of HIV replication: ATTACHment (gp120-CD4-CCR5/CXCR4), FUSEion (gp41), REVerse transcription (RT), INTegration (integrase), TRANScription, and ASSEMbly/Budding (protease)."
          },
          {
            text: "R5-Early, X4-Late",
            explanation: "R5-tropic HIV (CCR5) predominates EARLY in infection; X4-tropic (CXCR4) emerges LATE during disease progression and predicts faster CD4 decline."
          },
          {
            text: "SET POINT Predicts Progression",
            explanation: "Set point (steady viral load) determines speed to AIDS. Less than 1,000 = slow; 1,000-10,000 = intermediate; more than 100,000 = rapid progression."
          }
        ],
        keyPoints: [
          "HIV replication involves six sequential steps: attachment via gp120-CD4-co-receptor, fusion via gp41, reverse transcription, integration, transcription/translation, and assembly with protease maturation",
          "R5-tropic virus (CCR5) dominates early infection while X4-tropic virus (CXCR4) emerges late; CCR5-delta32 mutation provides R5 resistance",
          "CD4 depletion results from direct cytopathic effects, chronic immune activation, Th17 loss, and lymph node fibrosis",
          "Viral set point (steady-state viral load) is the strongest predictor of progression rate; HLA type and CCR5 genotype influence set point",
          "ART-induced immune reconstitution can cause IRIS (unmasking or exacerbation type), especially in CD4 <50 patients with occult opportunistic infections"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "123: Human Immunodeficiency Virus Infection and AIDS", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "10.10: HIV Infection and AIDS", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "14: HIV Infection and AIDS", edition: "24th" }
        ]
      },
      {
        layer: 3,
        slug: "hiv-aids-layer-3-clinical",
        title: "HIV/AIDS & Opportunistic Infections - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical staging, opportunistic infections by CD4 count, diagnosis algorithms including NACO 3-test strategy, and antiretroviral therapy per Indian guidelines.",
        contentMd: `# Clinical Management of HIV/AIDS and Opportunistic Infections

## WHO Clinical Staging and CDC Classification

### WHO Clinical Staging System (1-4)

**Stage 1 (Primary HIV Infection)**
- No symptoms or asymptomatic lymphadenopathy
- CD4 count usually preserved
- Examples: Acute retroviral syndrome, persistent generalized lymphadenopathy

**Stage 2 (Early HIV Disease)**
- Persistent fever >37.5°C for >1 month
- Persistent diarrhea for >1 month
- Persistent cough for >1 month (not TB)
- Skin/nail manifestations (seborrheic dermatitis, tinea, molluscum)
- Oral ulcers
- Persistent generalized lymphadenopathy

**Stage 3 (Advanced HIV Disease)**
- Wasting syndrome (involuntary weight loss >10%)
- Pneumocystis jirovecii pneumonia (PCP)
- Toxoplasmosis of brain
- Cryptosporidiosis (>1 month)
- Cryptococcosis
- Tuberculosis (pulmonary or extrapulmonary)
- Candidiasis (esophageal, tracheal, bronchial)
- Cytomegalovirus (CMV) disease
- Herpes simplex (ulcers >1 month)
- Kaposi sarcoma
- Other serious infections

**Stage 4 (AIDS)**
- CD4 count <50 cells/μL with severe immunodeficiency
- Opportunistic infections with CD4 <50:
  - MAC (Mycobacterium avium complex)
  - CMV retinitis
  - Cryptococcal meningitis
  - Toxoplasma encephalitis
  - Progressive multifocal leukoencephalopathy (PML)
  - Histoplasmosis
- AIDS-defining malignancies

### CDC Classification

The CDC uses CD4 count categories:

- **CD4 ≥500 cells/μL**: Category 1
- **CD4 200-499 cells/μL**: Category 2
- **CD4 <200 cells/μL**: Category 3 (AIDS)

## Opportunistic Infections by CD4 Count

Understanding the CD4 thresholds for OI occurrence is critical for clinical practice and prophylaxis decisions.

### CD4 <500 cells/μL

**Tuberculosis (TB)**
- Most common OI in resource-limited settings and India
- Can occur at any CD4 count but more frequent and severe below 500
- Presents as pulmonary TB (atypical presentations common)
- Extrapulmonary TB: lymphadenitis, pericarditis, meningitis
- High mortality if not treated

**Oral Candidiasis**
- First sign of immunosuppression in many patients
- Presents as white plaques (pseudomembranous), erythema (atrophic), or angular cheilitis
- Responsive to topical or systemic antifungals

**Cytomegalovirus (CMV) Infection**
- Can involve esophagus (odynophagia), colon, or other organs
- CMV retinitis primarily at CD4 <50

**Herpes Simplex Virus (HSV)**
- Mucosal ulcers, perirectal herpes, disseminated disease
- More common in patients with low CD4

### CD4 <200 cells/μL

**Pneumocystis jirovecii Pneumonia (PCP)**
- Subacute presentation: dyspnea, fever, cough, chest pain
- Chest X-ray: bilateral interstitial infiltrates (or normal early)
- LDH markedly elevated, oxygen-alveolar gradient widened
- PCP prophylaxis indicated: TMP-SMX, atovaquone, pentamidine
- **Indian prevalence**: Less common than in Western countries but increasing

**Toxoplasmosis**
- Most common cause of brain lesions at CD4 <100
- Presents with focal neurological signs, seizures, headache
- Brain imaging: multiple ring-enhancing lesions
- Prophylaxis: TMP-SMX (also covers PCP)
- More common in Latin America and Africa; rare in India

**Cryptococcosis**
- Cryptococcal meningitis (most common CNS infection at CD4 <100)
- Presents with insidious meningitis: fever, headache, confusion
- Cryptococcal antigen in CSF/serum is diagnostic
- India has significant burden; can be fulminant
- Prophylaxis with fluconazole controversial in India

**Esophageal Candidiasis**
- Presents with odynophagia and dysphagia
- Endoscopy shows white plaques or ulcers
- Treated with systemic azoles (fluconazole, itraconazole)

### CD4 <100 cells/μL

**Mycobacterium avium Complex (MAC)**
- Disseminated infection: bacteremia, fever, anemia, hepatosplenomegaly
- Rare in patients receiving ART; prophylaxis with azithromycin if CD4 <50
- Occurs primarily when CD4 <50

**Cytomegalovirus (CMV) Retinitis**
- Progressive visual loss, floaters, field defects
- Requires urgent ophthalmology evaluation
- Treated with intravenous ganciclovir or foscarnet
- CMV prophylaxis not standard; immune recovery with ART is primary treatment

**Progressive Multifocal Leukoencephalopathy (PML)**
- JC virus (John Cunningham virus) reactivation
- Subacute onset: cognitive decline, weakness, speech disturbance
- White matter lesions on MRI
- Poor prognosis; immune reconstitution with ART is main treatment
- Rare in India; higher in Western populations

### CD4 <50 cells/μL

**CMV Disease**
- Retinitis, colitis, esophagitis, pneumonitis
- CMV prophylaxis: valganciclovir if CD4 <50

**Cryptococcal Meningitis**
- Cryptococcal antigen testing is life-saving
- Fluconazole for CNS prophylaxis if antigen positive

**Histoplasmosis**
- Disseminated disease with fever, hepatosplenomegaly, respiratory symptoms
- Less common in India; more prevalent in endemic regions (Central America, Africa)

## Diagnosis of HIV

### NACO 3-Test Strategy (India)

India follows a sequential testing algorithm recommended by NACO:

**Test 1: ELISA (Enzyme-Linked Immunosorbent Assay)**
- Detects anti-HIV antibodies and p24 antigen
- High sensitivity (>99%) and specificity (>95%)
- Window period: 23-24 days (antibodies appear)
- First-line screening test

**Test 2: Rapid Test**
- Performed if Test 1 is positive
- Alternative algorithm if Test 1 negative
- High specificity (>98%)
- Confirms initial test result

**Test 3: Western Blot or HIV Differentiation Immunoassay**
- Performed if Tests 1 and 2 are concordant positive
- Differentiates HIV-1 from HIV-2
- Resolves discordant results

**In case of discordant results**: Repeat testing in 2 weeks or use HIV RNA (viral load) testing

### Additional Diagnostic Tests

**p24 Antigen Testing**
- Detects viral antigen in blood
- Useful in window period (before antibodies appear)
- Positive during acute infection
- Becomes negative as antibodies develop

**HIV RNA Testing (Viral Load)**
- Gold standard for diagnosis and monitoring
- Detects virus directly (not antibodies)
- Quantifies viral load (copies/mL)
- Useful in:
  - Window period diagnosis
  - Discordant serology results
  - Monitoring treatment response
  - Assessing treatment failure

**CD4+ T-Cell Count**
- Essential for staging and OI prophylaxis decisions
- Normal: 600-1500 cells/μL
- Baseline CD4 determines initial OI prophylaxis
- Used to monitor immune reconstitution on ART

### Baseline Evaluation (at diagnosis)

All newly diagnosed HIV patients should have:
1. CD4 count and viral load
2. Complete blood count
3. Renal function (creatinine, eGFR)
4. Liver function tests
5. Tuberculosis screening (TB symptoms, TB spot test if available, chest X-ray)
6. STI screening (syphilis, gonorrhea, chlamydia, hepatitis B and C)
7. HLA-B5701 testing (before abacavir-containing regimens)
8. Pregnancy test (women of childbearing age)

## Antiretroviral Therapy (ART) in India

### Current NACO Guidelines (2023-24)

**When to Start ART**
- All people with HIV should start ART regardless of CD4 count
- Ideally within 2 weeks of diagnosis
- START strategy (Start Treatment At Recall, Target Everyone)

**First-Line ART Regimens**

**Preferred Regimen (TLD/TLE)**:
- **TLD**: Tenofovir (TDF) + Lamivudine (3TC) + Dolutegravir (DTG)
- **TLE**: Tenofovir (TDF) + Lamivudine (3TC) + Efavirenz (EFV)
- DTG is preferred over EFV (faster CD4 recovery, fewer side effects, once-daily dosing)

**Core Components**:
1. **Nucleoside Reverse Transcriptase Inhibitors (NRTIs)**:
   - Tenofovir (TDF): First-line, excellent barrier to resistance
   - Lamivudine (3TC): Component of most regimens
   - Abacavir (ABC): Alternative (requires HLA-B5701 negative)

2. **Integrase Strand Transfer Inhibitor (INSTI)**:
   - Dolutegravir (DTG): Preferred; rapid CD4 recovery
   - Raltegravir (RAL): Alternative; twice-daily dosing
   - Bictegravir: Alternative

3. **Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs)**:
   - Efavirenz (EFV): Component of TLE; less preferred due to side effects
   - Rilpivirine: Alternative; better tolerability

**Second-Line Regimens** (for treatment failure):
- Usually involve protease inhibitors (PI): Lopinavir/Ritonavir (LPV/r), Atazanavir/Ritonavir
- Combined with NRTIs and sometimes integrase inhibitors

### Monitoring on ART

**Initial Phase** (weeks 0-24):
- Viral load at weeks 2, 4, 12, 24
- CD4 count at weeks 4, 12, 24
- Clinical monitoring for adverse effects
- Adherence assessment

**Maintenance Phase** (after 6 months)**:
- Viral load every 3-6 months
- CD4 count annually (when CD4 >500)
- Clinical assessment for adverse effects and OI

**Success Definition**:
- Viral load <50 copies/mL by 24 weeks
- CD4 recovery: ~50-100 cells/month initially, slower later
- Clinical improvement and resolution of opportunistic infections

### Special Populations

**Pregnancy**
- All pregnant women with HIV should be on ART
- Continue throughout pregnancy and postpartum
- Preferred: DTG-based or PI-based regimens
- CD4 count, viral load, and clinical monitoring as above

**TB-HIV Coinfection**
- Integrate TB and HIV treatment
- TB medications can be given with ART
- Rifampicin reduces DTG levels; use higher DTG dose or switch integrase inhibitor
- Start TB treatment first, ART within 2 weeks for CD4 <50

**Hepatitis B or C Coinfection**
- Use TDF + 3TC (both have activity against HBV)
- Monitor liver enzymes
- Consider HCV treatment with DAAs (direct-acting antivirals)

## Prevention of Mother-to-Child Transmission (PMTCT)

### Mechanism of Transmission

- **In utero** (10-15%): Transplacental transmission
- **Intrapartum** (60-75%): During labor and delivery (highest risk)
- **Postpartum** (5-20%): Through breastfeeding

### PMTCT Strategy (India)

**Mother**:
- Initiate ART immediately upon diagnosis
- Goal: viral load <50 copies/mL before delivery
- Continue throughout pregnancy, labor, and postpartum

**Infant**:
- Antiretroviral prophylaxis: AZT from birth until 4-6 weeks
- Higher doses if mother had detectable viral load
- Combination prophylaxis (AZT + 3TC + nevirapine) if maternal VL >1000
- Avoidance of breastfeeding in India (mixed feeding increases risk)

**Results**: With optimal PMTCT, transmission risk <2%

## Post-Exposure Prophylaxis (PEP)

### Occupational PEP (Healthcare Workers)

**Indication**: After needlestick injury or mucosal exposure to HIV-positive blood

**Risk Assessment**:
- High risk: Deep injury, visible blood, needle directly from vein/artery (risk ~0.3%)
- Low risk: Superficial injury, blood on skin (risk ~0.03%)

**PEP Regimen**:
- Start within 2 hours (maximum 72 hours)
- 28 days duration
- Combination ART: 3-drug regimen (e.g., TDF + 3TC + DTG)
- Follow-up: Baseline and 6-week HIV test

### Non-Occupational PEP (Sexual or Drug Exposure)

**Indication**: After potential sexual exposure (unprotected intercourse, condom breakage) or needle sharing

**Administration**:
- Start within 72 hours of exposure
- 28 days duration
- Same ART as occupational PEP

**Adherence**: Critical for efficacy; >90% adherence needed for optimal protection

## Clinical Features of Common OIs in India

### Tuberculosis (Most Common in India)

- Pulmonary TB: cough, fever, night sweats, weight loss
- Atypical presentations common (minimal cavitation, diffuse infiltrates)
- Extrapulmonary: lymphadenitis, meningitis, pericarditis
- Diagnosis: Sputum microscopy, culture, GeneXpert MTB/RIF
- Treatment: Standard ATT regimen; drug interactions with DTG

### Oral Candidiasis

- White plaques on tongue, hard palate, oropharynx
- Erythematous patches (atrophic candidiasis)
- Angular cheilitis (cracks at corner of mouth)
- Treatment: Topical antifungals (nystatin, miconazole) or systemic (fluconazole)

### Cryptococcal Meningitis

- Subacute meningitis: fever, headache, confusion, meningeal signs often absent
- CSF: elevated protein, low glucose, positive cryptococcal antigen
- India has high burden; consider in all CD4 <100 with fever/headache
- Treatment: Amphotericin B (induction) + fluconazole (consolidation and maintenance)

### CMV Retinitis

- Progressive visual loss, floaters, scotomas
- Ophthalmology finding: hemorrhagic retinal infiltrates
- Treatment: IV ganciclovir or foscarnet
- Prognosis: Depends on immune recovery with ART`,
        mnemonics: [
          {
            text: "TB <500, PCP/Toxo/Crypto <200, MAC <50",
            explanation: "CD4 thresholds for major OIs: TB can occur >500 but worsens below; PCP, toxo, crypto <200; MAC primarily <50. India: TB predominates at all CD4 levels."
          },
          {
            text: "NACO 3-Test: ELISA-Rapid-Western Blot",
            explanation: "Indian testing algorithm: Test 1 (ELISA), Test 2 (Rapid test), Test 3 (Western Blot/Differentiation Immunoassay). Three confirmatory tests before diagnosis."
          },
          {
            text: "TLD = TDF + 3TC + DTG",
            explanation: "Tenofovir + Lamivudine + Dolutegravir - preferred first-line ART in India. Covers NRTIs, integrase inhibitor (fast CD4 recovery)."
          },
          {
            text: "Start ART NOW, regardless of CD4",
            explanation: "Current NACO guideline: Universal treatment (START: Start Treatment At Recall, Target Everyone). All diagnosed patients start ART immediately."
          }
        ],
        keyPoints: [
          "WHO Stage 1-4 and CDC CD4 classification guide OI prophylaxis; TB most common OI in India (can occur at any CD4), PCP/toxo/crypto at CD4 <200, MAC at CD4 <50",
          "NACO 3-test strategy: ELISA → Rapid test → Western Blot; p24 antigen testing useful in window period; viral load gold standard for diagnosis and monitoring",
          "First-line ART: TLD (TDF + 3TC + DTG) preferred; all patients start ART immediately regardless of CD4 count per current NACO guidelines",
          "Prophylaxis: TMP-SMX at CD4 <200 (covers PCP, toxo, bacterial infections); azithromycin at CD4 <50 (MAC prophylaxis)",
          "PMTCT strategy: Maternal ART to achieve VL <50, infant AZT prophylaxis, avoidance of breastfeeding in India reduces transmission to <2%; PEP after occupational/sexual exposure: 28-day ART within 72 hours"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "123: Human Immunodeficiency Virus Infection and AIDS", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "10.10: HIV Infection and AIDS", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "14: HIV Infection and AIDS", edition: "24th" }
        ]
      },
      {
        layer: 4,
        slug: "hiv-aids-layer-4-exam",
        title: "HIV/AIDS & Opportunistic Infections - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield exam facts: CD4-OI correlation table, ART drug classes and mechanisms, IRIS pathophysiology, and clinical vignettes for rapid recall.",
        contentMd: `# HIV/AIDS Exam Essentials and Clinical Vignettes

## CD4 Count and OI Correlation Quick Reference

| CD4 Count | Key OI | Prophylaxis | Mechanism |
|-----------|--------|-------------|-----------|
| >200 | Oral candidiasis, HSV | None; treat symptomatically | Early immunosuppression marker |
| 200 | PCP, Toxoplasmosis, Cryptococcus, Esophageal candidiasis | TMP-SMX or alternatives | Severe T-cell depletion |
| <100 | Add: Cryptococcal meningitis, CMV, PML, Histoplasmosis | As above + fluconazole | Very severe immunodeficiency |
| <50 | Add: MAC, CMV retinitis, CMV colitis, Cryptococcal meningitis | Azithromycin + above | Profound immunosuppression |

## ART Drug Classes: Mechanisms and Effects

### Nucleoside/Nucleotide RT Inhibitors (NRTIs/NtRTIs)

**Mechanism**: Compete with natural nucleotides for incorporation into growing DNA chain; lack 3'OH group so chain termination occurs

**Examples**:
- Tenofovir (TDF/TAF): First-line; bone and renal toxicity monitoring
- Lamivudine (3TC): Dual activity against HBV; M184V resistance mutation
- Abacavir (ABC): Risk of hypersensitivity reaction; requires HLA-B5701 screening
- Zidovudine (AZT): Historical; bone marrow suppression

**Advantages**: Low cost, oral, once-daily options
**Disadvantages**: Resistance mutations, mitochondrial toxicity (rare with newer agents)

### Non-Nucleoside RT Inhibitors (NNRTIs)

**Mechanism**: Allosteric inhibition of RT; binds to hydrophobic pocket distinct from substrate binding site

**Examples**:
- Efavirenz (EFV): CNS side effects (dizziness, nightmares); teratogenic in first trimester
- Rilpivirine (RPV): Better tolerability; requires acidic pH for absorption
- Doravirine (DOR): Newer; improved resistance profile

**Advantages**: Once-daily dosing, good CNS penetration (EFV)
**Disadvantages**: Low genetic barrier to resistance (single mutation often sufficient); drug interactions

### Protease Inhibitors (PIs)

**Mechanism**: Block protease cleavage of viral polyproteins; results in non-infectious immature particles

**Examples**:
- Lopinavir/Ritonavir (LPV/r): Most commonly used PI; requires boosting with ritonavir
- Atazanavir/Ritonavir (ATV/r): Once-daily option
- Darunavir/Ritonavir (DRV/r): High genetic barrier; most active against resistant virus

**Advantages**: High genetic barrier to resistance (multiple mutations needed)
**Disadvantages**: GI side effects, lipid elevation, metabolic effects, complex drug interactions due to CYP450 metabolism

### Integrase Strand Transfer Inhibitors (INSTIs)

**Mechanism**: Block integrase-catalyzed integration of viral DNA into host chromosome

**Examples**:
- Dolutegravir (DTG): Preferred; once-daily, rapid CD4 recovery, high barrier to resistance
- Raltegravir (RAL): Twice-daily option; well-tolerated
- Bictegravir (BIC): Single-tablet regimen option
- Elvitegravir (EVG): Requires ritonavir boosting

**Advantages**: Fast-acting, high genetic barrier (high barrier with DTG), good tolerability
**Disadvantages**: Cost; potential neuropsychiatric effects (rare)

### Fusion and Entry Inhibitors

**Mechanism**: Block viral attachment (CCR5 antagonists), co-receptor binding, or membrane fusion

**Examples**:
- Maraviroc (MVC): CCR5 antagonist; requires tropism testing
- Enfuvirtide (T-20): Fusion inhibitor; SC injection; rare in routine care

**Use**: Salvage therapy for resistant virus; maraviroc in R5-tropic resistant cases

### Pharmacokinetic Boosters

**Ritonavir (RTV)**: Low-dose ritonavir used to boost PI and EVG levels (CYP3A4 inhibition)

**Cobicistat (COBI)**: Alternative booster; fewer drug interactions than RTV but renally cleared

## Resistance Development

### Mechanisms

1. **Reverse Transcriptase Inhibitor Resistance**:
   - NRTIs: Thymidine analog mutations (TAMs), M184V
   - NNRTIs: Single amino acid changes (K103N) confer high-level resistance
   - NRTI + NNRTI: Usually confer cross-class resistance

2. **Protease Inhibitor Resistance**:
   - Multiple mutations required (high genetic barrier)
   - Causes reduced but not absent PI activity
   - Hypersusceptibility mutations exist

3. **Integrase Inhibitor Resistance**:
   - DTG: High barrier; Q148H/R/K mutations
   - RAL: Lower barrier; N155H mutations

4. **Risk Factors**: Poor adherence (most important), high viral load, low CD4 count

### Management

- Baseline resistance testing (genotype or phenotype)
- Resistance testing if VL >50 on ART
- Switch regimens based on resistance results
- Adherence counseling critical

## Immune Reconstitution Inflammatory Syndrome (IRIS): Exam-Focused

### Unmasking IRIS

**Classic Presentation**: Start ART → CD4 rises → OI becomes symptomatic

**Common Causes**:
- TB IRIS: Lymph node enlargement, fever (within 2 weeks of starting ART)
- PCP IRIS: Worsening dyspnea, CXR infiltrates
- CMV IRIS: Visual symptoms, retinitis worsening
- Cryptococcal meningitis IRIS: Meningitis signs reappearing

**Pathophysiology**: Restoration of CD4 T-cell response against previously controlled pathogen antigens

**Management**:
- Continue ART (critical!)
- Anti-inflammatory: NSAIDs initially
- Severe IRIS: Corticosteroids (prednisolone 1 mg/kg/day, taper over 4-6 weeks)
- Treat underlying OI

### Exacerbation IRIS

**Scenario**: Patient on ART + TB treatment → increased inflammatory symptoms

**Management**: Similar to unmasking IRIS; continue all medications

## Clinical Vignettes for Rapid Recall

### Vignette 1: Acute Retroviral Syndrome

**Presentation**: 28-year-old male with 3-week history of fever, rash, lymphadenopathy, malaise

**Lab**: CD4 500, VL 500,000 copies/mL, negative ELISA on day 5 of illness, positive p24 antigen

**Diagnosis**: Acute HIV infection (window period)

**Key Points**:
- High viral load, rash (can be mistaken for drug reaction or other viral illness)
- Antibodies not yet developed (negative ELISA)
- p24 antigen positive (diagnostic during window period)
- VL peak during acute phase; set point will be established in weeks

**Management**: Start ART immediately; rapid test and Western blot may be falsely negative initially

### Vignette 2: CD4 <200 with Fever and Headache

**Presentation**: 35-year-old female, CD4 120, on ART for 3 months, develops fever and headache

**CSF Analysis**: Protein 150 mg/dL, glucose 40 mg/dL, opening pressure 25 cm H2O, India ink smear shows yeast

**Diagnosis**: Cryptococcal meningitis

**Management**:
- Cryptococcal antigen (CSF/serum) confirms diagnosis
- Amphotericin B deoxycholate IV (induction phase) + flucytosine
- Fluconazole for consolidation/maintenance
- Manage elevated intracranial pressure (repeat LPs if needed)
- Continue ART; IRIS may develop as CD4 rises

**Key Exam Point**: India has high burden of cryptococcal disease; think of it in all CD4 <100 with meningitis

### Vignette 3: Treatment Failure with CD4 >200 but Persistent VL

**Presentation**: 40-year-old male on TLD for 12 months; VL still 5,000 copies/mL, CD4 300

**Likely Causes**:
1. Poor adherence (most common)
2. Drug interactions
3. Viral resistance

**Assessment Steps**:
1. Assess adherence (structured interview, pill counts)
2. Obtain resistance testing
3. Consider DI (TB drugs, other meds)
4. Repeat VL after adherence counseling

**Key Point**: Do NOT switch regimen without adherence optimization and resistance testing

### Vignette 4: TB-HIV Coinfection

**Presentation**: 30-year-old with CD4 50 and recently diagnosed TB (sputum GeneXpert positive)

**When to Start ART?**
- CD4 <50: Start ART within 2 weeks of TB treatment initiation
- CD4 50-200: Start within 2 weeks
- CD4 >200: Can delay ART slightly to ensure TB diagnosis confirmed

**Which ART?**
- Avoid DTG (rifampicin induces DTG metabolism; DTG levels subtherapeutic)
- Use PI-based: LPV/r can be used (requires higher doses with rifampicin)
- Alternative: EFV-based regimen (though EFV has CNS effects)

**Monitoring**:
- TB symptoms improvement
- CD4 recovery
- IRIS risk (especially TB IRIS with lymph node enlargement, fever)

**Key Point**: Integrate TB and HIV treatment; drug interactions are significant

### Vignette 5: Pregnancy with HIV

**Presentation**: 26-year-old G2P1 newly diagnosed with HIV at 20 weeks gestation

**Counseling**:
- Risk of mother-to-child transmission without treatment: 15-45%
- With optimal PMTCT: <2%
- ART is safe in pregnancy; benefit outweighs risks
- Continue ART throughout pregnancy and postpartum

**ART Choice**:
- Preferred: DTG-based or PI-based (EFV teratogenic in 1st trimester)
- Current NACO: TLD can be used if CD4 >500; otherwise PI-based initially

**Delivery**:
- Elective C-section if VL >1,000
- Vaginal delivery acceptable if VL <50

**Infant Prophylaxis**:
- AZT from birth for 4-6 weeks
- Combined prophylaxis (AZT + 3TC + NVP) if maternal VL >1,000
- Infant testing: At birth (PCR), 6 weeks, 3 months, 6 months

**Key Point**: Maternal viral suppression is key to preventing vertical transmission

## High-Yield Exam Facts

1. **Viral load**, not CD4, predicts infectivity and sexual transmission risk
2. **p24 antigen** becomes positive before antibodies (window period diagnosis)
3. **Western blot** (or differentiation immunoassay) differentiates HIV-1 from HIV-2
4. **IRIS** occurs when CD4 rises; continue ART, don't stop (common exam trap)
5. **TMP-SMX** provides prophylaxis for PCP, toxo, and some bacterial infections at CD4 <200
6. **DTG** preferred INSTI due to high genetic barrier and rapid CD4 recovery
7. **Single-tablet regimens** (Bictegravir-TAF-FTC, Dolutegravir-TAF-FTC) improve adherence
8. **MAC** prophylaxis (azithromycin) starts at CD4 <50, not earlier
9. **TB-HIV**: Rifampicin reduces many drug levels; DTG contraindicated without adjustment
10. **PEP**: 28 days, start within 72 hours, must include 3-drug ART for efficacy`,
        mnemonics: [
          {
            text: "NRTI-NNRTI-PI-INSTI",
            explanation: "Four main ART classes: NRTIs (chain termination), NNRTIs (allosteric inhibition), PIs (protease block), INSTIs (integrase block). Each has distinct mechanism."
          },
          {
            text: "DTG > EFV > RAL",
            explanation: "Ranking of preferred INSTIs and NNRTIs: Dolutegravir best (high barrier, fast CD4 recovery), Efavirenz intermediate, Raltegravir third (RAL older)."
          },
          {
            text: "IRIS = Continue ART!",
            explanation: "Key exam point: IRIS is immune recovery, not treatment failure. Always CONTINUE ART, add anti-inflammatory/steroids if severe."
          }
        ],
        keyPoints: [
          "CD4 <200: PCP, toxo, crypto, esophageal candida prophylaxis with TMP-SMX or alternatives; CD4 <50: add MAC prophylaxis with azithromycin",
          "NRTIs work by chain termination; NNRTIs by allosteric inhibition (low barrier); PIs block protease (high barrier); INSTIs block integration (DTG has highest barrier)",
          "IRIS (immune reconstitution inflammatory syndrome) occurs when CD4 rises after ART start; unmasking type reveals occult OI; continue ART and use anti-inflammatory therapy",
          "DTG preferred integrase inhibitor: once-daily, rapid CD4 recovery, high genetic barrier; avoid with rifampicin (TB) without DTG dose increase",
          "TB-HIV: Start ART within 2 weeks of TB treatment; use PI-based or EFV-based (avoid DTG with rifampicin); risk of TB-IRIS with CD4 <50"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "123: Human Immunodeficiency Virus Infection and AIDS", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "10.10: HIV Infection and AIDS", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "14: HIV Infection and AIDS", edition: "24th" }
        ]
      },
      {
        layer: 5,
        slug: "hiv-aids-layer-5-active-recall",
        title: "HIV/AIDS & Opportunistic Infections - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-style Q&A pairs for rapid recall of critical HIV/AIDS facts, OI management, and ART decisions.",
        contentMd: `# Active Recall: HIV/AIDS Flashcard Questions

## Question 1: HIV Structure and Tropism
**Q: What is the function of gp120 and gp41, and which co-receptors do they use?**

A: gp120 binds to CD4 receptors on target cells (initial attachment); gp41 mediates membrane fusion. Co-receptors are CCR5 (R5-tropic, early infection) or CXCR4 (X4-tropic, late disease). CCR5-delta32 mutation confers R5 resistance.

---

## Question 2: HIV Replication Cycle
**Q: Name the six steps of HIV replication in order.**

A: (1) Attachment via gp120-CD4-co-receptor binding, (2) Fusion via gp41, (3) Reverse transcription (RNA to DNA), (4) Integration by integrase, (5) Transcription and translation, (6) Assembly and budding with protease maturation.

---

## Question 3: CD4 Count and OI Threshold
**Q: At what CD4 count does Pneumocystis jirovecii pneumonia (PCP) typically occur, and what is the prophylaxis?**

A: PCP occurs at CD4 <200 cells/μL. Prophylaxis is TMP-SMX (trimethoprim-sulfamethoxazole) first-line; alternatives include atovaquone, pentamidine, or dapsone + pyrimethamine.

---

## Question 4: Cryptococcal Meningitis
**Q: A patient with CD4 80 presents with insidious meningitis (fever, headache, confusion). What is the diagnosis and how is it confirmed?**

A: Cryptococcal meningitis. Confirmed by CSF India ink stain (yeast visible), CSF cryptococcal antigen (>95% sensitivity), and serum cryptococcal antigen. CSF shows elevated protein, low glucose, and cryptococcal growth on culture.

---

## Question 5: NACO 3-Test Strategy
**Q: What is the NACO 3-test algorithm for HIV diagnosis in India?**

A: Test 1: ELISA (detects antibodies and p24 antigen). Test 2: Rapid test (confirms Test 1 if positive). Test 3: Western blot or HIV differentiation immunoassay (confirms both tests and differentiates HIV-1 from HIV-2). If discordant, repeat or use viral load testing.

---

## Question 6: Acute HIV Infection
**Q: A patient has fever, rash, and lymphadenopathy for 3 weeks but ELISA is negative. What is the diagnosis, and why is the ELISA negative?**

A: Acute HIV infection (acute retroviral syndrome). ELISA is negative because of the window period (before antibodies appear). Diagnosis is confirmed by positive p24 antigen or viral load testing.

---

## Question 7: Viral Load and Set Point
**Q: What is the viral set point, and why is it clinically important?**

A: Viral set point is the steady-state plasma viral load after acute infection resolves (typically 1,000-100,000 copies/mL). It is the best predictor of disease progression: set point <1,000 predicts slow progression (>10 years); >100,000 predicts rapid progression (<3 years).

---

## Question 8: First-Line ART in India
**Q: What is the preferred first-line ART regimen in India according to NACO guidelines, and why is it preferred?**

A: TLD (Tenofovir + Lamivudine + Dolutegravir) is preferred. DTG (integrase inhibitor) offers rapid CD4 recovery, once-daily dosing, high genetic barrier to resistance, and good tolerability compared to EFV (TLE).

---

## Question 9: CD4 Recovery on ART
**Q: How quickly does CD4 count recover after starting ART?**

A: Initial recovery is rapid (~50-100 cells/μL per month) for the first 3 months, then slower. CD4 >200 typically achieved within 6-12 months; full recovery to normal levels (600-1,500) may take 2-3 years or longer.

---

## Question 10: TB-HIV Coinfection
**Q: A patient with CD4 50 is diagnosed with TB. When should ART be started, and which ART regimen should be avoided?**

A: Start ART within 2 weeks of TB treatment initiation (standard timing for CD4 <50). AVOID DTG because rifampicin (TB drug) induces DTG metabolism, making DTG levels subtherapeutic. Use PI-based (LPV/r) or EFV-based regimens instead.

---

## Question 11: IRIS Pathophysiology
**Q: What is immune reconstitution inflammatory syndrome (IRIS), and what is the management?**

A: IRIS is worsening of symptoms or appearance of new opportunistic infection as CD4 count recovers after ART initiation. Caused by restoration of immune response against OI antigens. Management: CONTINUE ART (critical!), treat underlying OI, use NSAIDs or corticosteroids if severe.

---

## Question 12: Tuberculosis as Most Common OI
**Q: Why is tuberculosis the most common opportunistic infection in India, even at CD4 counts >500?**

A: TB is endemic in India with high community prevalence. HIV-infected individuals have 20-30 times higher TB risk at any CD4 count compared to non-HIV. TB can reactivate (latent infection) at CD4 >200, unlike other OIs.

---

## Question 13: MAC Prophylaxis
**Q: At what CD4 count is MAC (Mycobacterium avium complex) prophylaxis indicated, and with what drug?**

A: MAC prophylaxis is indicated at CD4 <50 cells/μL using azithromycin (1200 mg once weekly). It can be discontinued when CD4 >50 on ART for 3 months.

---

## Question 14: Mother-to-Child Transmission
**Q: What is the risk of mother-to-child transmission of HIV without treatment, and what is the risk with optimal PMTCT?**

A: Without treatment: 15-45% (approximately 30% average). With optimal PMTCT (maternal ART to undetectable VL, infant AZT prophylaxis, elective C-section if VL >1,000, avoidance of breastfeeding): <2%.

---

## Question 15: Post-Exposure Prophylaxis Timing
**Q: What is the window period for starting PEP after occupational exposure to HIV, and what is the duration of PEP?**

A: PEP must be started as soon as possible but no later than 72 hours post-exposure (ideally within 2 hours). Duration is 28 days with a 3-drug ART regimen (e.g., TDF + 3TC + DTG). Follow-up HIV testing at 6 weeks.`,
        mnemonics: [
          {
            text: "gp120-CCR5 Early, gp41-CXCR4 Late",
            explanation: "gp120 binds CD4 + CCR5 (R5) early in infection; later, X4-tropic emerges via CXCR4 co-receptor. CCR5-delta32 = natural R5 resistance."
          },
          {
            text: "TB <500, MAC <50, IRIS with CD4 rise",
            explanation: "TB at any CD4; MAC prophylaxis <50; IRIS occurs as CD4 increases on ART—always continue ART during IRIS."
          },
          {
            text: "DTG beats EFV for speed and resistance",
            explanation: "Dolutegravir preferred: fast CD4 recovery, once-daily, high genetic barrier. Efavirenz has CNS effects, lower barrier."
          },
          {
            text: "PEP = 72 hours, 28 days, 3 drugs",
            explanation: "Post-exposure prophylaxis: within 72-hour window, 28-day duration, 3-drug ART (TDF+3TC+DTG or equivalent)."
          },
          {
            text: "PMTCT: Undetectable = Untransmittable (U=U)",
            explanation: "Maternal viral load <50 copies/mL with ART = essentially zero transmission risk. Most important PMTCT factor."
          }
        ],
        keyPoints: [
          "gp120 binds CD4; gp41 mediates fusion; CCR5 (R5) early, CXCR4 (X4) late; CCR5-delta32 = natural resistance",
          "HIV replication: Attach → Fuse → Reverse transcribe → Integrate → Transcribe → Assemble/Bud with protease cleavage",
          "Window period diagnosis: p24 antigen or viral load positive, ELISA negative; seroconversion occurs 23-24 days",
          "CD4 <200: PCP (TMP-SMX), toxo (TMP-SMX), crypto (fluconazole consideration); CD4 <50: MAC (azithro), CMV prophylaxis (valganciclovir)",
          "ART initiation: All patients immediately per NACO (START strategy); TLD preferred (DTG-based fast recovery); TB-HIV avoid DTG + rifampicin; IRIS management: continue ART + anti-inflammatory"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "123: Human Immunodeficiency Virus Infection and AIDS", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "10.10: HIV Infection and AIDS", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "14: HIV Infection and AIDS", edition: "24th" }
        ]
      }
    ]
  }
];
