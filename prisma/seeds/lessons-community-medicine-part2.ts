import type { TopicLessons } from "./content-loader";

export const communityMedicinePart2Lessons: TopicLessons[] = [
  {
    topicCode: "CM-MOD-02-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "cm-tuberculosis-layer-1-foundation",
        title: "Tuberculosis - Foundation",
        estimatedMinutes: 20,
        summary: "Basic epidemiology, transmission, and pathophysiology of TB.",
        contentMd: `# Tuberculosis - Foundation

## Definition & Epidemiology
TB is a chronic infectious disease caused by Mycobacterium tuberculosis, spread via airborne droplets.

### Global & Indian Burden
- India: 27% of global TB cases (~2.7 million annually)
- Incidence: ~193/100,000 population
- Mortality: Leading infectious disease death cause in India
- Affects all age groups; peak in economically productive years

## Transmission
- **Route**: Airborne droplet nuclei (1-5 microns)
- **Source**: Active TB disease patients (especially pulmonary TB)
- **Infectivity**: High with cough/sneeze; max in first 2 weeks of treatment
- **Secondary infection risk**: 5-15% of exposed develop active TB

## Pathophysiology
1. **Initial infection**: Inhalation → alveolar lodgement
2. **Primary TB**: Local inflammation + hilar lymphadenitis
3. **Progressive TB**: Early dissemination (first 2 years)
4. **Post-primary TB**: Reactivation in apical-posterior zones

## Clinical Forms
- **Pulmonary TB**: Cough ≥3 weeks, fever, hemoptysis (85% of cases)
- **Extrapulmonary TB**: Lymph nodes, bones, meninges, abdomen (15%)
- **Latent TB**: Infected but non-infectious, asymptomatic

## Host Factors
- Immunosuppression (HIV, malnutrition, diabetes)
- Age (infants, elderly)
- Smoking & alcohol abuse
- Silicosis, diabetes, chronic kidney disease
`,
        mnemonics: [
          {
            text: "TB transmission = AIRBORNE droplets (1-5 microns)",
            explanation: "Key route of transmission"
          },
          {
            text: "India burden = 27% of global TB (2.7 million cases annually)",
            explanation: "India's TB epidemiology"
          },
          {
            text: "Risk after exposure = 5-15% develop active TB",
            explanation: "Probability of disease development"
          }
        ],
        keyPoints: [
          "TB caused by Mycobacterium tuberculosis",
          "India has 27% of global TB burden",
          "Airborne droplet transmission",
          "Infectivity highest first 2 weeks of treatment",
          "Clinical forms: Pulmonary (85%), Extrapulmonary (15%)",
          "Latent TB infection very common in India (~300 million people)"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Tuberculosis", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Tuberculosis Control", edition: "5th" }
        ]
      },
      {
        layer: 2,
        slug: "cm-tuberculosis-layer-2-mechanism",
        title: "Tuberculosis - Mechanism",
        estimatedMinutes: 25,
        summary: "Detailed pathophysiology and immune response mechanisms.",
        contentMd: `# Tuberculosis - Mechanism

## Pathophysiology of TB Infection

### Phase 1: Primary TB Complex
**After initial inhalation:**
- Bacilli lodge in alveoli (usually middle/lower lobes)
- Multiplication begins (doubling time 15-20 hours)
- Local inflammation develops
- Hilar lymph nodes involved (primary complex)
- Usually self-limiting in immunocompetent

### Phase 2: Dissemination (First 2 Years)
**Early progressive TB:**
- Bacilli reach bloodstream
- Seeding to lungs (cavitary disease), brain (meningitis), bones, kidneys
- Risk highest in immunocompromised (HIV, malnutrition)
- TB meningitis risk 1% if untreated primary TB

### Phase 3: Latent TB Infection (LTBI)
**Features:**
- Infection present but non-infectious
- Immune containment (granuloma formation)
- No symptoms, normal CXR (may have calcified lesion)
- 5-10% lifetime risk of progression to active TB
- Risk highest in first 2 years post-infection

### Phase 4: Post-Primary (Reactivation) TB
**Mechanism:**
- Reactivation of old lesions (apical-posterior lung zones)
- Usually occurs years after primary infection
- Cavitary disease common (75% smear-positive)
- Highly infectious (source of transmission)

## Immune Response

### Cellular Immunity Importance
- **Cell-mediated immunity (CMI)** = primary defense
- T-lymphocytes (Th1, Th17 responses)
- Macrophage activation essential for containment
- Tuberculin skin test (TST/Mantoux) = indicator of CMI

### Immunocompromise and TB Risk
- **HIV/AIDS**: 50-100x increased risk
- **Malnutrition**: Impairs immune response
- **TNF-alpha inhibitors**: Reactivation risk
- **Diabetes**: 2-3x increased risk
- **Chronic kidney disease**: Impaired immunity

## Clinical Manifestations by Organ System

### Pulmonary TB (85% cases)
- Cough ≥3 weeks (cardinal symptom)
- Hemoptysis, dyspnea
- Fever (typically afternoon spikes)
- Night sweats (may soak bed)
- Chest pain (pleuritic)

### Extrapulmonary TB (15% cases)
- **Lymph node TB**: Cervical (most common), mediastinal
- **Meningeal TB**: Highest mortality (60% untreated)
- **Bone/Joint TB**: Pott's disease (spine), weight loss
- **Abdominal TB**: Peritoneal involvement
- **Military TB**: Acute dissemination, high mortality

## Role of Host Factors

### Protective Factors
- **BCG vaccination**: 80% protection against severe TB (meningitis, military)
- **Prior TB infection**: Partial immunity to reinfection
- **Good nutrition**: Supports immune response
- **Young age**: Better immune containment

### Risk Factors for Progression
- HIV co-infection (50x risk)
- Malnutrition (3-4x risk)
- Silicosis/dust exposure (3x risk)
- Diabetes (2-3x risk)
- Smoking (2-3x risk)
`,
        mnemonics: [
          {
            text: "TB phases = Primary → Dissemination → Latent → Reactivation",
            explanation: "4 phases of TB infection progression"
          },
          {
            text: "LTBI risk = 5-10% lifetime progress to active TB",
            explanation: "Natural history of latent TB"
          },
          {
            text: "CMI important for TB = Cell-Mediated Immunity controls TB",
            explanation: "T-cells and macrophages essential for TB containment"
          }
        ],
        keyPoints: [
          "Primary TB complex: alveolar infection + hilar lymphadenitis",
          "Dissemination risk highest first 2 years of infection",
          "LTBI: 5-10% lifetime risk of progression to active disease",
          "Post-primary (reactivation) TB: apical-posterior cavitary disease",
          "Cell-mediated immunity essential for TB containment",
          "HIV/AIDS increases TB risk 50-100 fold",
          "Extrapulmonary TB more common in immunocompromised"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Pathophysiology of Tuberculosis", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "TB Mechanisms", edition: "5th" }
        ]
      },
      {
        layer: 3,
        slug: "cm-tuberculosis-layer-3-clinical",
        title: "Tuberculosis - Clinical Application",
        estimatedMinutes: 25,
        summary: "Diagnosis, treatment, and control programs in India.",
        contentMd: `# Tuberculosis - Clinical Application

## TB Diagnosis in Clinical Practice

### Symptomatic Screening
**Diagnostic symptoms (≥2 weeks):**
- Cough ≥3 weeks (cardinal symptom)
- Fever, night sweats, weight loss
- Hemoptysis, chest pain

**Clinical examination findings:**
- Lung crackles/cavitary signs
- Lymphadenopathy (extrapulmonary TB)
- Hepatomegaly/splenomegaly (disseminated TB)

### Diagnostic Methods

**Sputum Smear Microscopy (SSM):**
- 3 sputum samples (spot, early morning, spot)
- Ziehl-Neelsen (ZN) stain
- Sensitivity: 50-80% (depends on bacillary load)
- Standard in India (RNTCP protocol)

**CBNAAT (Cartridge Based Nucleic Acid Amplification Test):**
- Detects TB and rifampicin resistance in 2 hours
- Sensitivity: 95-98% (even paucibacillary)
- Recommended for all TB suspects in India
- WHO-endorsed, available in Indian labs

**Chest X-ray:**
- Apical-posterior consolidation (classic finding)
- Cavitation (indicates high infectivity)
- Used alongside sputum confirmation
- Helps diagnose extrapulmonary TB

**Tuberculin Skin Test (TST/Mantoux):**
- Indicates TB infection (not active disease)
- 0.1 ml of 5 TU intradermal
- Read at 48-72 hours (induration diameter)
- Interpretation: >5mm (close contacts), >10mm (others)

### Diagnostic Approach
1. Clinical suspicion (symptoms ≥2 weeks)
2. Sputum collection (3 samples)
3. CBNAAT or microscopy
4. CXR for confirmation
5. TST for contacts/LTBI

## RNTCP Program (Revised National TB Program)

### Key Components
**Case Detection:**
- Public health facilities (free diagnosis)
- DOTS (Directly Observed Therapy) centers
- PPM (Public-Private Mix) involvement
- ASHA/ANM involvement

**Treatment Protocol:**
- **Intensive phase (2 months)**: HRZE (Isoniazid, Rifampicin, Pyrazinamide, Ethambutol)
- **Continuation phase (4 months)**: HR
- **Total duration**: 6 months
- **DOT**: Healthcare worker observes each dose
- **Cure rate**: 95% with adherence

**Treatment Outcomes:**
- Cure: Negative smear at end of intensive + end of treatment
- Treatment completed: No smear documentation but completed therapy
- Failed: Smear positive after 5 months of therapy
- Died: Death during treatment (any cause)
- Lost to follow-up: Missing >3 consecutive doses
- Registered: Others (transferred out, not evaluated)

### Drug-Resistant TB Management
**MDR-TB (Multidrug-resistant TB):**
- Resistant to INH + rifampicin
- Treatment: 20 months (fluoroquinolone + injectable + pyrazinamide + ethionamide)
- Cure rate: ~55-65% with new drugs

**XDR-TB (Extensively drug-resistant TB):**
- Resistant to MDR-TB drugs + fluoroquinolone + injectable
- Treatment: Newer drugs (bedaquiline, linezolid, delamanid)
- More complex management

## TB Control Strategy

### Case Identification
- **Symptomatic screening**: Find TB suspects (cough ≥2 weeks)
- **Contact tracing**: Household contacts of TB patients
- **CBNAAT screening**: Rapid confirmation and drug sensitivity testing

### Treatment and Cure
- **DOTS**: Directly observed therapy ensures adherence
- **Fixed-dose combinations (FDC)**: Simplify regimen
- **Nutritional support**: Addresses malnutrition risk factor

### Prevention
- **BCG vaccination**: Prevents severe TB (80% protection meningitis/military)
- **LTBI therapy**: INH monotherapy for 6 months (3 months if on ART)
- **TB preventive therapy**: For PLHIV (INH monotherapy or 3HP)

### Infection Control
- **Early diagnosis**: Reduces transmission window
- **Patient isolation**: First 2 weeks of treatment critical
- **Ventilation**: In health facilities and homes
- **PPE use**: For healthcare workers (N95 mask)

## Special TB Situations

### TB in Children
- **Diagnosis challenging**: Lower bacillary load, less infectious
- **Clinical diagnosis**: Based on symptoms + CXR + contact history + TST
- **Treatment**: Same drugs, weight-based dosing
- **BCG**: Contraindicated in HIV+ children

### TB in HIV Co-infection
- **Immune reconstitution syndrome (IRIS)**: Worsening of TB within weeks of ART
- **Drug interactions**: Rifampicin reduces protease inhibitor levels
- **Treatment**: Same TB regimen + ART (start ART early: <2 weeks diagnosis if CD4 <50)
- **Mortality**: 10-20% with appropriate treatment

### Drug-Resistant TB
- **Second-line drugs**: More toxic, longer duration (20 months)
- **Monitoring**: Regular sputum, culture, drug sensitivity testing
- **Adherence challenging**: Longer, more toxic regimen
`,
        mnemonics: [
          {
            text: "TB diagnosis = SSM/CBNAAT (sputum) + CXR (imaging) + TST (infection)",
            explanation: "Three diagnostic modalities"
          },
          {
            text: "RNTCP regimen = HRZE (2mo) + HR (4mo) = 6 months total",
            explanation: "Standard TB treatment duration and drugs"
          },
          {
            text: "TB outcomes = Cure, Completed, Failed, Died, LFU, Registered",
            explanation: "6 treatment outcomes classification"
          }
        ],
        keyPoints: [
          "Cough ≥3 weeks = cardinal symptom requiring investigation",
          "SSM x3 + CBNAAT standard diagnostic approach in India",
          "CXR shows apical-posterior consolidation/cavitation",
          "TST indicates TB infection (not active disease)",
          "RNTCP DOT ensures 95% cure rate with adherence",
          "HRZE (2mo) + HR (4mo) = standard 6-month regimen",
          "Drug-resistant TB requires longer (20 months), more toxic therapy",
          "BCG prevents 80% of severe TB (meningitis, military)",
          "Contact tracing and LTBI therapy prevent new cases",
          "Early diagnosis crucial for interrupting transmission"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "TB Diagnosis and Treatment", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "TB Control Programs in India", edition: "5th" }
        ]
      },
      {
        layer: 4,
        slug: "cm-tuberculosis-layer-4-exam",
        title: "Tuberculosis - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Quick reference and commonly tested TB concepts.",
        contentMd: `# Tuberculosis - Exam Preparation

## Quick TB Reference

| Aspect | Details |
|--------|---------|
| Causative agent | Mycobacterium tuberculosis |
| Transmission | Airborne droplets (1-5 microns) |
| Incubation period | 4-12 weeks (TST conversion) |
| India TB incidence | ~193 per 100,000 population |
| India burden | 27% of global TB cases |
| Primary complex | Lung infiltrate + hilar lymphadenitis |
| LTBI lifetime risk | 5-10% progress to active TB |

## TB Diagnosis Summary

| Method | Sensitivity | Use |
|--------|-----------|-----|
| SSM (Sputum smear) | 50-80% | Standard RNTCP |
| CBNAAT | 95-98% | Rapid, WHO-endorsed |
| CXR | Supports diagnosis | Lung involvement |
| TST | Infection indicator | Contact screening |
| Culture | 100% (gold standard) | Drug sensitivity testing |

## RNTCP Treatment Regimen

**Standard TB (Drug-susceptible):**
- **Intensive (2 months):** HRZE daily
  - H = Isoniazid
  - R = Rifampicin
  - Z = Pyrazinamide
  - E = Ethambutol
- **Continuation (4 months):** HR daily
- **Total:** 6 months
- **DOT:** Directly observed each dose

**Outcomes:**
- Cure: Smear negative end of treatment
- Completed: Finished therapy without documentation
- Failed: Smear positive after 5 months
- Died: Death during treatment
- Lost to follow-up: >3 consecutive missed doses
- Registered: Others (transferred out, not evaluated)

## Common Exam Questions

**Q1: Define TB and its epidemiology in India.**
A: TB is chronic infectious disease caused by Mycobacterium tuberculosis. India: 27% global burden (~2.7 million/year), incidence ~193/100,000, leading infectious cause of death.

**Q2: How is TB transmitted and what is infectivity?**
A: Airborne droplet nuclei (1-5 microns). Infectivity highest first 2 weeks of treatment. 5-15% of exposed contacts develop active TB.

**Q3: What are the phases of TB infection?**
A: (1) Primary TB complex, (2) Dissemination (first 2 years, highest risk), (3) Latent TB (5-10% progress to active), (4) Post-primary/reactivation (apical-posterior cavitary).

**Q4: What is LTBI and risk of progression?**
A: LTBI = Infection present, non-infectious, asymptomatic. 5-10% lifetime risk of progression to active TB. Risk highest first 2 years.

**Q5: Describe RNTCP treatment regimen.**
A: HRZE (2 months intensive) + HR (4 months continuation) = 6 months total. DOT ensures adherence. 95% cure rate with compliance.

**Q6: What are TST interpretations in India?**
A: ≥5mm induration = TST positive (close contact, LTBI, TB). >10mm = positive (others). TST conversion (10mm increase within 1 year) = recent TB infection.

**Q7: Difference between SSM and CBNAAT.**
A: SSM: 50-80% sensitivity, cheap, requires microscopy skills. CBNAAT: 95-98% sensitivity, detects drug resistance, 2-hour result, WHO-endorsed, preferred in India.

**Q8: What is MDR-TB and treatment?**
A: MDR-TB = resistant to INH + rifampicin. Treatment: 20 months (fluoroquinolone + injectable + pyrazinamide + ethionamide). Cure rate 55-65%.

**Q9: TB diagnosis in children - challenges and approach.**
A: Children less infectious (paucibacillary). Clinical diagnosis based on: symptoms + CXR + contact history + TST. Same drug regimen, weight-based dosing.

**Q10: How does TB preventive therapy work? Who gets it?**
A: INH monotherapy (6 months) or 3HP (rifampicin+isoniazid 3 months). Given to LTBI contacts. Reduces TB development by 90%.
`,
        mnemonics: [
          {
            text: "India TB = 27% global, 193 per 100k incidence, ~2.7M cases/year",
            explanation: "Key epidemiological figures"
          },
          {
            text: "RNTCP = HRZE (2mo) + HR (4mo) with DOT supervision",
            explanation: "Standard regimen abbreviation"
          },
          {
            text: "TB outcomes = C-C-F-D-L-R (Cure, Completed, Failed, Died, LFU, Registered)",
            explanation: "6 possible treatment outcomes"
          }
        ],
        keyPoints: [
          "TB transmitted by airborne droplets; infectivity highest first 2 weeks",
          "LTBI: 5-10% lifetime risk of progression to active TB",
          "RNTCP: HRZE (2mo) + HR (4mo) = 6 months with DOT",
          "95% cure rate with adherence to RNTCP",
          "SSM x3 standard screening; CBNAAT for rapid diagnosis",
          "TST ≥5mm = positive (close contact); >10mm = positive (others)",
          "MDR-TB: 20 months treatment with 55-65% cure rate",
          "BCG protects 80% from severe TB (meningitis, military)",
          "Contact screening and LTBI therapy prevent new cases",
          "TB in HIV: Start ART within 2 weeks if CD4 <50"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Tuberculosis", edition: "26th" }
        ]
      },
      {
        layer: 5,
        slug: "cm-tuberculosis-layer-5-active-recall",
        title: "Tuberculosis - Active Recall",
        estimatedMinutes: 15,
        summary: "Self-assessment on TB concepts and management.",
        contentMd: `# Tuberculosis - Active Recall

## Q&A for Self-Assessment

**Q1: Write epidemiology of TB in India - incidence, mortality, burden.**
A: India has 27% of global TB burden (2.7 million cases/year). Incidence 193 per 100,000. Leading infectious cause of death. Affects all ages; peak in economically productive years.

**Q2: Explain TB transmission and infectivity pattern.**
A: Airborne transmission via droplet nuclei (1-5 microns) from patient cough/sneeze. 5-15% of exposed contacts develop active TB. Infectivity highest first 2 weeks of treatment; decreases significantly after 2 weeks of appropriate therapy.

**Q3: Describe natural history of TB - phases and timeline.**
A: (1) Primary TB complex (alveolar infection + hilar lymphadenitis), usually self-limiting, (2) Early dissemination (first 2 years, highest risk meningitis/military TB), (3) Latent TB (5-10% lifetime progress to active), (4) Post-primary/reactivation (apical-posterior cavitary disease, reactivation years later).

**Q4: What is LTBI and its significance in TB control?**
A: LTBI = infection present, non-infectious, asymptomatic. 23-25% of Indian population (~300 million) has LTBI. 5-10% lifetime progression risk. LTBI therapy (INH 6 months) prevents 90% of progression. Critical for TB elimination strategy.

**Q5: How do you diagnose TB in clinical practice? Diagnostic algorithm.**
A: (1) Clinical suspicion (cough ≥2 weeks + systemic symptoms), (2) Sputum collection (3 samples), (3) CBNAAT/SSM examination, (4) CXR confirmation, (5) TST for contacts. CBNAAT preferred (95-98% sensitivity, detects drug resistance).

**Q6: Explain RNTCP regimen - drugs, duration, dosing, DOT importance.**
A: HRZE (2 months intensive) + HR (4 months continuation) = 6 months total. Drugs: H=Isoniazid, R=Rifampicin, Z=Pyrazinamide, E=Ethambutol. DOT ensures adherence. 95% cure rate with compliance. Missing >3 doses = lost to follow-up.

**Q7: What are the 6 TB treatment outcomes and their definitions?**
A: (1) Cure = smear negative at end of intensive + end of treatment, (2) Completed = finished therapy without documentation, (3) Failed = smear positive after 5 months, (4) Died = death during treatment (any cause), (5) LFU = missing >3 consecutive doses, (6) Registered = others.

**Q8: Explain TST interpretation - induration readings and clinical significance.**
A: 0.1 ml of 5 TU intradermal. Read at 48-72 hours. ≥5mm = positive (close contact, LTBI). >10mm = positive (others). TST conversion (≥10mm increase within 1 year) = recent TB infection. TST indicates TB infection, NOT active disease.

**Q9: Difference between SSM and CBNAAT - sensitivity, use, advantages.**
A: SSM: 50-80% sensitivity, requires microscopy, cheap, standard RNTCP screening. CBNAAT: 95-98% sensitivity, detects drug resistance, 2-hour result, WHO-endorsed. CBNAAT preferred in India, especially HIV+ and drug-resistant cases.

**Q10: What is MDR-TB? How does it develop and how is it treated?**
A: MDR-TB = resistant to INH + rifampicin (develops from inadequate treatment). Treatment: 20 months (fluoroquinolone + injectable + pyrazinamide + ethionamide). Cure rate 55-65%. Second-line drugs more toxic, longer course.

**Q11: Explain role of BCG vaccination in TB prevention.**
A: BCG (Bacille Calmette-Guérin) protects 80% from severe TB forms (meningitis, military TB). Less effective against pulmonary TB. Given at birth as part of UIP. Does not prevent TB infection but prevents severe disseminated disease.

**Q12: How is TB diagnosed in children? Why is it different from adults?**
A: Children have lower bacillary load (less infectious). Clinical diagnosis based on: symptoms (cough, fever, night sweats) + CXR findings + contact history + TST positivity. Culture/SSM often negative. Diagnosis challenging but treatment same (weight-based dosing).

**Q13: Describe TB-HIV co-infection - epidemiology, diagnosis, treatment challenges.**
A: PLHIV have 50-100x increased TB risk. TB common AIDS-defining illness. Diagnosis challenging (may have negative SSM, atypical CXR). Treatment: Same TB regimen + ART (start ART <2 weeks if CD4 <50). IRIS risk first 2 weeks of ART.

**Q14: Explain TB preventive therapy (TPT) - indications, regimens, effectiveness.**
A: TPT = INH monotherapy (6 months) or 3HP (rifampicin+isoniazid 3 months). Given to LTBI contacts, PLHIV, immunocompromised. Reduces TB development by 90%. Critical for TB elimination in high-burden countries.

**Q15: What is the role of contact tracing in TB control?**
A: Contact tracing identifies exposed individuals early. Household contacts have 5% TB risk. TST screening identifies LTBI. TPT given to LTBI contacts. Prevents secondary cases. Part of RNTCP strategy to reduce transmission.

**Q16: How does malnutrition affect TB and what is its public health significance?**
A: Malnutrition impairs immune response (CMI), increases TB risk 3-4 fold, and worsens outcomes. Nutritional support part of TB management. Malnutrition common in TB patients (30-50%). Addressing nutrition improves cure rates.

**Q17: Explain immune response to TB - role of cell-mediated immunity and granuloma.**
A: TB controlled by Th1 cell-mediated immunity and macrophage activation. Granuloma = granulomatous inflammation containing TB bacilli, preventing dissemination. In immunocompromise (HIV), granuloma formation impaired → disseminated TB risk.

**Q18: What are special TB situations and their management approach?**
A: (1) TB meningitis: CNS involvement, high mortality, same drugs (penetrate CSF), longer treatment, steroids benefit, (2) Military TB: Acute dissemination, high mortality, same regimen, intensive monitoring, (3) TB peritonitis: Peritoneal involvement, same regimen, prolonged duration sometimes needed.
`,
        mnemonics: [
          {
            text: "TB diagnosis = Suspect (cough ≥2w) → Sputum → CBNAAT/SSM → CXR → TST",
            explanation: "Diagnostic algorithm"
          },
          {
            text: "RNTCP regimen = HRZE (60) + HR (120) = 180 total doses (6 months DOT)",
            explanation: "Drug and duration"
          },
          {
            text: "TB outcomes = Cure, Completed, Failed, Died, LFU, Registered (6 types)",
            explanation: "All possible treatment outcomes"
          }
        ],
        keyPoints: [
          "TB transmission: Airborne droplets; infectivity highest first 2 weeks",
          "LTBI: 5-10% lifetime progression; ~300 million in India; TPT prevents 90%",
          "Diagnosis: CBNAAT (95-98% sensitive) preferred; SSM still used in RNTCP",
          "RNTCP: HRZE (2mo) + HR (4mo) = 6 months with DOT supervision",
          "95% cure rate with adherence; <3% mortality with appropriate treatment",
          "TST ≥5mm positive in close contact; >10mm positive in others",
          "MDR-TB: 20 months treatment; develops from inadequate therapy",
          "BCG protects 80% from severe TB (meningitis, military TB)",
          "Contact tracing prevents secondary cases; TPT given to LTBI contacts",
          "TB-HIV: Higher TB risk, requires early ART (CD4 <50 within 2 weeks)"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Tuberculosis Control", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "TB Management and Control", edition: "5th" }
        ]
      }
    ]
  }
];
