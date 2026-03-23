import type { TopicLessons } from "./content-loader";

export const communityMedicineLessonsPartOne: TopicLessons[] = [
  {
    topicCode: "CM-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "health-disease-concepts-layer-1-foundation",
        title: "Concepts of Health & Disease - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to fundamental health and disease concepts in epidemiology.",
        contentMd: `# Concepts of Health & Disease - Foundation

## Definition of Health (WHO, 1946)
"Health is a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity."

## Holistic Health Components
1. **Physical Health**: Absence of disease, good nutrition, adequate rest
2. **Mental Health**: Emotional stability, psychological well-being
3. **Social Health**: Good relationships, community integration
4. **Spiritual Health**: Purpose, values, meaning

## Definition of Disease
An abnormal condition of body or mind characterized by altered structure or function, leading to reduced efficiency and well-being.

## Natural History of Disease
The progression of disease from start to end without medical intervention.

### Five Stages:
1. **Susceptibility**: Person at risk but no disease yet
2. **Subclinical/Latent**: Disease present but no symptoms (incubation period)
3. **Clinical**: Symptoms appear; patient seeks treatment
4. **Recovery/Disability**: Resolution or chronic disease with disability
5. **Death or Cure**: Final outcome

## Levels of Prevention (Leavell & Clark)
1. **Primary Prevention**: Prevent disease onset (vaccination, health education)
2. **Secondary Prevention**: Early detection, treat before symptoms severe
3. **Tertiary Prevention**: Manage established disease, prevent complications

## Causation Models

### Causation Triangle (Epidemiologic Triad)
- **Agent**: What causes disease (bacteria, virus, chemical)
- **Host**: The person (age, immunity, genetics)
- **Environment**: Living conditions, temperature, humidity

### Multifactorial Causation
Most diseases result from multiple factors:
- Genetic predisposition
- Environmental exposure
- Behavioral factors
- Socioeconomic status

## Disease Classification
- **Communicable**: Spread person-to-person (TB, malaria, HIV)
- **Non-communicable**: Not transmitted (diabetes, CVD, cancer)
- **Nutritional**: Deficiency diseases (anemia, goiter)
- **Genetic**: Inherited conditions
`,
        mnemonics: [
          {
            text: "Health = Physical + Mental + Social + Spiritual well-being (WHO definition)",
            explanation: "WHO defines health beyond absence of disease"
          },
          {
            text: "Natural History = SUSPICION (Susceptibility → Symptoms → Disease outcome)",
            explanation: "Stages of disease progression without intervention"
          },
          {
            text: "Triad = Agent + Host + Environment (epidemiologic causation)",
            explanation: "Three factors necessary for disease occurrence"
          }
        ],
        keyPoints: [
          "Health is multidimensional - physical, mental, social, spiritual",
          "Disease = altered structure/function with reduced efficiency",
          "Natural history has 5 stages from susceptibility to death/cure",
          "Prevention has 3 levels: primary (prevent), secondary (early detect), tertiary (manage)",
          "Causation involves agent, host, and environment interaction",
          "Modern diseases are multifactorial with genetic and environmental components"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Epidemiology: Introduction", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Health and Disease Concepts", edition: "5th" }
        ]
      },
      {
        layer: 2,
        slug: "health-disease-concepts-layer-2-mechanism",
        title: "Concepts of Health & Disease - Mechanism",
        estimatedMinutes: 25,
        summary: "Detailed pathophysiology of disease causation and natural history mechanisms.",
        contentMd: `# Concepts of Health & Disease - Mechanism

## Natural History and Pathogenesis

### Stage 1: Susceptibility (Pre-pathogenesis)
**Characteristics:**
- Person has risk factors but disease not yet present
- Pathological changes not yet initiated
- Host-agent-environment conditions favorable for disease

**Host factors affecting susceptibility:**
- Age (extremes vulnerable: infants, elderly)
- Immunity (specific antibodies, cell-mediated immunity)
- Nutritional status (protein-energy malnutrition increases infection risk)
- Genetics (family history of diabetes, hypertension)
- Behavioral (smoking, alcohol, sedentary lifestyle)

### Stage 2: Subclinical Disease (Incubation/Latent Period)
**Definition:** Pathological changes present but no clinical symptoms
- Incubation period: Time between exposure and symptom onset
- Length varies: Measles (10-14 days), TB (weeks-years)
- Infected persons may transmit disease

**Pathophysiological changes:**
- Tissue invasion and multiplication of agent
- Host immune response activation (antibodies, cytokines)
- Inflammatory changes at site of infection

### Stage 3: Clinical Disease (Clinical Horizon)
**Definition:** Symptoms become manifest and patient seeks care
- Clinical horizon: Threshold when signs/symptoms become apparent
- Severity depends on: Agent virulence, host immunity, organ involved

### Stage 4: Recovery or Disability
**Recovery pathways:**
- Complete recovery (infectious diseases, acute illness)
- Partial recovery with residual effects (stroke, TB)
- Chronic disease with disability (diabetes, arthritis)

### Stage 5: Death or Cure
**Factors influencing outcome:**
- Severity of disease
- Timeliness of diagnosis
- Effectiveness of treatment
- Host factors (age, comorbidities)

## Disease Causation Models

### Single Agent Model (Communicable Diseases)
**One agent causes disease:** TB = Mycobacterium tuberculosis

**Requirements (Koch's postulates):**
1. Organism isolated from diseased individuals
2. Grown in pure culture
3. Reproduces disease when inoculated into susceptible host
4. Organism recovered from experimental disease

### Multifactorial Model (Non-Communicable)
**Multiple factors → Disease**
Example - Type 2 Diabetes:
- Genetic predisposition
- Environmental (obesity, sedentary)
- Behavioral (diet, exercise)
- Aging (age >45)

## Levels of Prevention Mechanisms

### Primary Prevention
- **Health promotion**: Nutrition, exercise, education (universal)
- **Specific protection**: Vaccination, water treatment, food safety (targeted)

### Secondary Prevention
- **Screening**: Pre-symptomatic identification
- **Diagnosis and treatment**: Prompt management to prevent progression

### Tertiary Prevention
- **Rehabilitation**: Physical therapy, vocational training
- **Treatment optimization**: Drug compliance, lifestyle modification
- **Complication prevention**: Foot care in diabetes

## Iceberg of Disease

**Definition:** Most disease exists in subclinical form (below waterline)

**Clinical implications:**
- Screening identifies subclinical cases
- Only symptomatic cases reach clinical care
- Population burden > clinical burden
`,
        mnemonics: [
          {
            text: "5 Stages = Susceptibility → Subclinical → Clinical → Outcome (Recovery/Death)",
            explanation: "Natural history progression"
          },
          {
            text: "Prevention PPP = Primary (prevent), Secondary (detect), Tertiary (manage)",
            explanation: "Three levels of prevention with different timing"
          }
        ],
        keyPoints: [
          "Susceptibility stage: risk factors present, pathology not yet initiated",
          "Incubation period: disease present but asymptomatic; person may transmit",
          "Clinical horizon: threshold when symptoms become apparent",
          "Recovery stage: varies from complete recovery to chronic disability",
          "Primary prevention stops disease before exposure; secondary early detection",
          "Iceberg concept: subclinical disease burden >> clinical disease burden"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Natural History and Prevention of Disease", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Causation and Prevention", edition: "5th" }
        ]
      },
      {
        layer: 3,
        slug: "health-disease-concepts-layer-3-clinical",
        title: "Concepts of Health & Disease - Clinical Application",
        estimatedMinutes: 25,
        summary: "Clinical application of health/disease concepts in screening, diagnosis, and prevention programs.",
        contentMd: `# Concepts of Health & Disease - Clinical Application

## Screening Programs in India

### Universal Screening
**Target:** Entire population regardless of risk

**Types:**
1. **Antenatal screening** (ANC program, RCH):
   - Hypertension, anemia, HIV, gestational diabetes

2. **School health screening** (UHS program):
   - Height, weight, BMI, vision, hearing, dental, immunization

3. **Occupational screening:**
   - Pre-placement medical exam
   - Periodic health checks

### Targeted Screening (Risk-based)
**Examples in India:**
1. **TB screening:** Contacts, healthcare workers, PLHIV
2. **CVD screening:** Family history, age >40, metabolic syndrome
3. **Diabetes screening:** Family history, obesity, age >40

## Natural History Application in Disease Management

### TB: Application of Natural History
**Susceptibility stage:** BCG vaccination (80% effective in severe TB)
**Subclinical stage:** CBNAAT screening in contacts (30-40% find cases)
**Clinical stage:** RNTCP DOT therapy (95% cure if detected early)
**Outcome:** Rehabilitation, LTBI therapy prevents recurrence

### Diabetes: Natural History Application
**Susceptibility:** Weight reduction, exercise (30% reduce incidence)
**Subclinical:** Fasting glucose 100-125 mg/dl screening
**Clinical:** HbA1c screening finds 30% new cases
**Outcomes:** Foot care, eye screening, kidney monitoring

## Iceberg Concept: Indian Examples

### Diabetes Iceberg
**Clinical visible (50%):** Symptomatic, patient seeks care
**Subclinical (50%):** Asymptomatic, found only with screening
**Implication:** Screening reveals hidden disease burden

### Hypertension Iceberg
**Clinical (30%):** Aware of diagnosis
**Subclinical (70%):** Unaware, found by screening
**Impact:** Screening identifies 20-30% new cases

### TB Iceberg
**Clinical TB:** 25-30 per 100,000 incidence
**Latent TB:** 23-25% of population (~300 million)
**NTEP targets:** Both symptomatic (diagnosis) and asymptomatic (LTBI therapy)

## Planning Healthcare Services

### Population-based planning:
1. **Determine disease burden** (incidence, prevalence)
2. **Identify at-risk groups** (susceptibility factors)
3. **Plan interventions** at appropriate level:
   - Primary: School, community education
   - Secondary: Screening camps, case-finding
   - Tertiary: Specialist care, rehabilitation

### TB Control Strategy in India
- **Primary:** BCG vaccination (95% coverage UIP)
- **Secondary:** Case-finding through CBNAAT/screening
- **Tertiary:** DOT centers, drug-resistant TB management
`,
        mnemonics: [
          {
            text: "Screening steps = Susceptibility → Subclinical detection → Clinical confirmation → Outcome",
            explanation: "Sequence of screening and diagnosis process"
          },
          {
            text: "Iceberg insight = Subclinical bulk >> Clinical cases",
            explanation: "Why screening reveals hidden disease burden"
          }
        ],
        keyPoints: [
          "Universal screening targets entire population; targeted screening focuses on high-risk",
          "Diagnostic confirmation reduces false positives",
          "Iceberg: subclinical disease >> clinical disease burden",
          "Natural history guides intervention timing",
          "Screening effectiveness depends on disease prevalence and test accuracy",
          "Clinical programs address all stages: susceptibility through disability"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Screening in Disease Prevention", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Application of Prevention", edition: "5th" }
        ]
      },
      {
        layer: 4,
        slug: "health-disease-concepts-layer-4-exam",
        title: "Concepts of Health & Disease - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Quick reference tables and commonly tested exam concepts.",
        contentMd: `# Concepts of Health & Disease - Exam Preparation

## Quick Reference: Key Definitions

| Concept | Definition |
|---------|-----------|
| Health | Complete physical, mental, social well-being (not merely absence of disease) |
| Disease | Abnormal condition with altered structure/function |
| Susceptibility | State of being at risk for disease |
| Clinical horizon | Threshold when symptoms appear |
| Natural history | Disease progression without intervention |
| Iceberg of disease | Most disease exists subclinically |

## Prevention Levels: Quick Reference

| Level | Timing | Method | Example |
|-------|--------|--------|---------|
| Primary | Before disease | Health education, vaccination | BCG vaccination |
| Secondary | Early disease | Screening, early diagnosis | TB screening |
| Tertiary | Established disease | Treatment, rehab | DOT therapy |

## Common Exam Questions

**Q1: Define health according to WHO?**
A: "Health is a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity"

**Q2: What are the five stages of natural history?**
A: Susceptibility → Subclinical → Clinical → Recovery/Disability → Death/Cure

**Q3: Explain the iceberg concept.**
A: Most disease exists subclinically (below waterline). Only symptomatic cases visible. Clinical burden < total disease burden.

**Q4: Give three examples of primary prevention in India.**
A: (1) BCG vaccination, (2) Iodized salt, (3) Health education on hygiene

**Q5: What are Koch's postulates?**
A: (1) Organism isolated from diseased, (2) Grown in pure culture, (3) Reproduces disease when inoculated, (4) Recovered from experimental disease

**Q6: Define and distinguish between incidence and prevalence.**
A: Prevalence = existing cases at point/period in time. Incidence = new cases over time period. Relationship: Prevalence = Incidence × Duration

**Q7: Explain sensitivity and specificity.**
A: Sensitivity = TP/(TP+FN) = ability to identify disease. Specificity = TN/(TN+FP) = ability to identify non-disease

**Q8: Give Indian example of natural history application in disease management.**
A: TB - Susceptibility (BCG 80% effective), Subclinical (CBNAAT screening), Clinical (DOT 95% cure), Outcome (LTBI therapy prevents recurrence)

**Q9: What is the difference between health promotion and specific protection?**
A: Health promotion (universal) = nutrition, exercise, education. Specific protection (targeted) = vaccination, water treatment, food safety

**Q10: Explain how the iceberg concept applies to diabetes in India.**
A: 50% undiagnosed (subclinical), 50% diagnosed (clinical). Screening camps find 30% new cases. Already 30% have complications at diagnosis.
`,
        mnemonics: [
          {
            text: "WHO Health = Physical + Mental + Social well-being",
            explanation: "Positive state, not just absence of disease"
          },
          {
            text: "5 stages = SUCCD (Susceptibility, Undetected, Clinical, Cure/disability, Death)",
            explanation: "Natural history progression"
          },
          {
            text: "Prevention PPP = Primary, Secondary, Tertiary with timing",
            explanation: "Three levels of prevention"
          }
        ],
        keyPoints: [
          "Health is multidimensional (physical, mental, social)",
          "Natural history: 5 stages; intervention timing depends on stage",
          "Iceberg: subclinical disease >> clinical disease",
          "Screening identifies asymptomatic disease",
          "P = I × D: Prevalence = Incidence × Duration",
          "Know communicable vs multifactorial diseases"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Epidemiology Basics", edition: "26th" }
        ]
      },
      {
        layer: 5,
        slug: "health-disease-concepts-layer-5-active-recall",
        title: "Concepts of Health & Disease - Active Recall",
        estimatedMinutes: 15,
        summary: "Self-assessment questions on health and disease concepts.",
        contentMd: `# Concepts of Health & Disease - Active Recall

## Q&A for Self-Assessment

**Q1: Write WHO definition of health. Why positive rather than negative?**
A: "Health is a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity." Positive because it emphasizes presence of well-being (not just absence of illness).

**Q2: Explain natural history of disease with TB example.**
A: TB natural history: (1) Susceptibility - exposure to TB, (2) Subclinical - bacilli multiply, no symptoms (latent TB), (3) Clinical - cough ≥3 weeks, fever, hemoptysis, seeks care, (4) Recovery - sputum conversion with DOT (95% cure), (5) Outcome - cure or disability.

**Q3: Define clinical horizon and explain variation between diseases.**
A: Clinical horizon = threshold at which asymptomatic disease becomes symptomatic. Varies: TB (may be subclinical for years), Measles (symptoms 10-14 days post-exposure), Acute diarrhea (6-48 hours).

**Q4: What is iceberg of disease? Give two Indian examples.**
A: Most disease exists subclinically (below waterline). Clinical cases visible tip. Examples: (1) Diabetes - 50% undiagnosed, found only with screening; (2) Hypertension - 70% unaware of diagnosis.

**Q5: Explain three levels of prevention with examples.**
A: (1) Primary - prevent onset: BCG prevents TB. (2) Secondary - early detection: Sputum screening finds TB early. (3) Tertiary - manage disease: DOT ensures 95% cure, prevents drug resistance.

**Q6: Distinguish communicable from multifactorial causation.**
A: Communicable: single agent necessary and sufficient (TB = Mycobacterium TB). Multifactorial: multiple factors contribute (Type 2 diabetes = genetics + obesity + sedentary + diet).

**Q7: Explain epidemiologic triad. Apply to malaria.**
A: Triad = Agent + Host + Environment. Malaria: Agent = Plasmodium, Host = susceptible human (immunity, age, nutrition), Environment = mosquito breeding sites, temperature, rainfall.

**Q8: What is relationship between incidence and prevalence? Give example.**
A: Prevalence = Incidence × Duration. TB: Low incidence (180/100,000), high prevalence (25-30 million due to long duration). Acute diarrhea: High incidence, low prevalence.

**Q9: Explain why screening is important for disease burden identification. Use TB/diabetes example.**
A: Screening identifies subclinical disease (below clinical horizon). TB screening finds 30-40% additional cases. Diabetes screening camps find 30% new cases (asymptomatic). Only symptomatic cases reach care → true burden underestimated.

**Q10: Difference between health promotion and specific protection. Give Indian program examples.**
A: Health promotion (universal) = nutrition education, exercise, sanitation (UHS programs). Specific protection (targeted) = vaccination (UIP), iodized salt (prevent goiter), clean water (prevent diarrhea).

**Q11: Define disease. List three characteristics distinguishing disease from normal variation.**
A: Disease = abnormal condition with altered structure/function and reduced efficiency. Characteristics: (1) Clearly abnormal, (2) Associated with symptoms/signs, (3) Reduced function/well-being, (4) Responds to treatment.

**Q12: Explain how screening programs address natural history stages using TB example.**
A: Susceptibility: BCG vaccination (95% preventive). Subclinical: CBNAAT in contacts (finds asymptomatic). Clinical: Symptomatic screening identifies active cases. Outcome: DOT ensures cure, LTBI therapy prevents recurrence.

**Q13: What factors determine disease development after exposure? Use TB example.**
A: Host susceptibility: (1) Immunity (specific antibodies from vaccination/prior infection), (2) Age (extremes at higher risk), (3) Nutrition (malnutrition ↑ risk), (4) Genetics, (5) Behavioral. Example: TB exposure - 5-15% develop TB; others asymptomatic (latent).

**Q14: How is natural history understanding applied in resource allocation for health programs?**
A: Disease burden at different stages guides allocation: (1) High prevalence → need treatment centers (tertiary), (2) High incidence → focus on prevention (primary), (3) High subclinical → invest in screening (secondary). Example: Diabetes - high prevalence → many clinics; TB - focus on case-finding.

**Q15: Explain causation differences: TB vs hypertension.**
A: TB (communicable): Single agent (Mycobacterium TB) necessary but not sufficient. Hypertension (non-communicable): Multifactorial - genetics, salt, obesity, stress, age, alcohol; no single factor necessary alone.

**Q16: What is "preventability"? Give one example where disease is preventable.**
A: Preventability = ability to reduce/prevent disease through specific intervention. Example: Measles - preventable through vaccination (99% efficacy with 2 doses, 95% population coverage achieves herd immunity).

**Q17: Define incubation period vs latent period.**
A: Incubation = time from exposure to symptom onset (person infectious). Latent = time from infection to becoming infectious. For TB: latency < incubation (infectious before symptoms).

**Q18: Explain "preventability" and give one Indian example where applicable.**
A: Preventability = ability to reduce/prevent disease. Example: Measles vaccine (99% efficacy with 2 doses). India's vaccination program prevents millions of cases annually through herd immunity.
`,
        mnemonics: [
          {
            text: "Natural history = S-U-C-C-D (Susceptible → Undetected → Clinical → Cure/disability → Death)",
            explanation: "5 stages in order"
          },
          {
            text: "Prevention timing = Early better (Primary < Secondary < Tertiary in benefit)",
            explanation: "Earlier intervention more effective and cost-effective"
          },
          {
            text: "Iceberg insight = Subclinical majority, Clinical minority",
            explanation: "Why screening essential for disease burden assessment"
          }
        ],
        keyPoints: [
          "WHO definition includes physical, mental, social dimensions",
          "Natural history: 5 stages from susceptibility to death/cure",
          "Clinical horizon varies; some cross early (severe), others late (mild)",
          "Iceberg: subclinical >> clinical disease in population",
          "Prevention levels determined by natural history stage",
          "Communicable = single agent; non-communicable = multifactorial",
          "Screening reveals hidden disease burden; clinical cases only tip",
          "P = I × D: Prevalence = Incidence × Duration",
          "Host susceptibility: immunity, age, nutrition, genetics, behavior",
          "Tertiary prevention addresses disability and complications"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive & Social Medicine", chapter: "Health and Disease Concepts", edition: "26th" },
          { book: "Mahajan & Gupta Textbook of Preventive & Social Medicine", chapter: "Introduction to Community Medicine", edition: "5th" }
        ]
      }
    ]
  }
];
