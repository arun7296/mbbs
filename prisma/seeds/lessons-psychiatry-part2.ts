import type { TopicLessons } from "./content-loader";

export const psychiatryPart2Lessons: TopicLessons[] = [
  // PS-MOD-01-TOP-02: Classification of Mental Disorders
  {
    topicCode: "PS-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "mental-disorder-classification-layer-1-foundation",
        title: "Classification of Mental Disorders - Foundation",
        estimatedMinutes: 25,
        summary: "ICD-10, DSM-5 classification systems, comparison, multiaxial assessment framework.",
        contentMd: `# Classification of Mental Disorders - Foundation

## ICD-10 Classification (Used in India)
### Structure
- **Code format**: F + two digits (F00-F99 for mental disorders)
- **Categories**: Organic, psychotic, mood, anxiety, behavioral syndromes, adult personality, developmental

### Major ICD-10 Categories
- **F00-F09**: Organic, including symptomatic mental disorders (dementia, delirium)
- **F10-F19**: Mental and behavioral disorders due to psychoactive substance use
- **F20-F29**: Schizophrenia, schizotypal, delusional disorders
- **F30-F39**: Mood (affective) disorders (depression, bipolar)
- **F40-F49**: Anxiety, stress-related, somatoform disorders
- **F50-F59**: Behavioral syndromes (eating, sleep, sexual)
- **F60-F69**: Adult personality disorders, specific behavior traits
- **F70-F79**: Intellectual disability (Mental Retardation)
- **F80-F89**: Developmental disorders (learning, speech, motor)

### ICD-10 Axes (WHO traditional)
- **Axis 1**: Clinical diagnosis (psychiatric disorder code)
- **Axis 2**: Personality disorders/problem aspects
- **Axis 3**: Somatic disorders (medical conditions)
- **Axis 4**: Psychosocial stressors (severity, duration)
- **Axis 5**: Disability rating (0-5 scale)

## DSM-5 Classification (Gold Standard Research)
### Structure
- **Code format**: Variable alphanumeric (varies by disorder)
- **Biopsychosocial approach**: Integrated severity/cultural factors
- **Dimensional approach**: Symptom severity ratings (mild/moderate/severe)

### Major DSM-5 Categories
- **Neurodevelopmental Disorders**: ADHD, autism spectrum, intellectual disability, learning disorders
- **Schizophrenia Spectrum & Other Psychotic Disorders**: Schizophrenia, brief psychotic disorder, delusional disorder
- **Bipolar & Related Disorders**: Bipolar I, Bipolar II, cyclothymia
- **Depressive Disorders**: Major depression, persistent depressive disorder (dysthymia)
- **Anxiety Disorders**: GAD, panic disorder, phobias, social anxiety, agoraphobia
- **Obsessive-Compulsive & Related Disorders**: OCD, body dysmorphic, hoarding, trichotillomania
- **Trauma & Stressor-Related Disorders**: PTSD, acute stress disorder, adjustment disorders
- **Dissociative Disorders**: DID, depersonalization, dissociative amnesia
- **Somatic Symptom & Related Disorders**: Somatic symptom disorder, illness anxiety disorder
- **Feeding & Eating Disorders**: Anorexia, bulimia, binge eating disorder
- **Sleep-Wake Disorders**: Insomnia, sleep apnea, narcolepsy, circadian rhythm
- **Sexual Dysfunction Disorders**: Erectile disorder, female sexual dysfunction
- **Gender Dysphoria**: Distress regarding assigned sex
- **Disruptive, Impulse-Control & Conduct Disorders**: ADHD, conduct disorder, oppositional defiant, pyromania, kleptomania
- **Substance-Related & Addictive Disorders**: Alcohol, opioid, cannabis, stimulant use disorders
- **Neurocognitive Disorders**: Dementia, Alzheimer's, Lewy body, Parkinson's disease dementia
- **Personality Disorders**: Cluster A (odd), Cluster B (dramatic), Cluster C (anxious)
- **Paraphilic Disorders**: Pedophilic, exhibitionist, frotteuristic disorders
- **Other Mental Disorders**: Unspecified, other specified

### DSM-5 Axes (Multiaxial Reformatted)
- **Axis I (Primary)**: Clinical diagnosis
- **Axis II (Secondary)**: Personality disorders, intellectual disability
- **Axis III (Medical)**: General medical conditions
- **Axis IV (Psychosocial)**: Psychosocial, occupational, environmental stressors
- **Axis V (GAF Score)**: Global Assessment of Functioning (0-100 scale)
  - 91-100: Superior functioning
  - 71-80: Minor symptoms/stress
  - 51-60: Moderate symptoms/stress
  - 31-40: Major impairment
  - 0-30: Severe impairment`,
        mnemonics: [
          { text: "ICD-10 = F codes (F00-F99), used in India; DSM-5 = alphanumeric, research standard", explanation: "Classification comparison" },
          { text: "ICD-10 5 axes: Diagnosis, Personality, Medical, Stressors, Disability", explanation: "Multiaxial framework" },
          { text: "DSM-5 18 categories from neurodevelop to personality disorders", explanation: "Major groupings" },
          { text: "GAF score = 91-100 superior, 71-80 minor, 51-60 moderate, 31-40 major, 0-30 severe", explanation: "Functioning scale" }
        ],
        keyPoints: [
          "ICD-10 standard in WHO countries including India; F-codes systematic",
          "DSM-5 dimensional approach includes severity ratings, cultural factors",
          "Multiaxial assessment captures full clinical picture (medical + psychiatric + psychosocial)",
          "GAF score objective measure of functioning/disability",
          "5-axis system comprehensive: diagnosis, personality, medical, stressors, functioning"
        ],
        textbookRefs: [
          { book: "ICD-10 Clinical Descriptions", chapter: "Mental Health Disorders", edition: "10th" },
          { book: "DSM-5 Manual", chapter: "Diagnostic Criteria", edition: "5th" }
        ]
      },
      {
        layer: 2,
        slug: "mental-disorder-classification-layer-2-mechanism",
        title: "Classification of Mental Disorders - Mechanism",
        estimatedMinutes: 30,
        summary: "Diagnostic criteria construction, validity, reliability, nosological principles, evolution.",
        contentMd: `# Classification of Mental Disorders - Mechanism

## Diagnostic Validity and Reliability
### Reliability
- **Inter-rater reliability**: Different clinicians agree on same diagnosis
- **Test-retest reliability**: Same clinician agrees with themselves over time
- **Measurement**: Kappa coefficient (0.61-0.8 = good, >0.8 = excellent)
- **ICD-10 vs DSM-5**: Both have similar reliability (kappa 0.6-0.8 for most diagnoses)

### Validity
- **Criterion validity**: Diagnosis predicts treatment response, prognosis
- **Construct validity**: Disorder reflects actual biological/psychological reality
- **Discriminant validity**: Disorder differs from other diagnoses
- **ICD-10/DSM-5 challenges**: Many overlap syndromes (e.g., depression + anxiety)

## Nosological Principles
### Categorical Approach (Traditional)
- **Assumption**: Disorders are distinct categories (you have/don't have condition)
- **ICD-10 basis**: Categories with inclusion/exclusion criteria
- **Limitation**: Doesn't account for symptom severity or subsyndromal presentations
- **Boundary problems**: Where does normal mood end and depression begin?

### Dimensional Approach (Modern)
- **Assumption**: Psychiatric symptoms exist on continuum (normal to severe)
- **DSM-5 innovation**: Severity specifiers (mild/moderate/severe) for most diagnoses
- **Advantage**: Captures partial symptom presentations, treatment response monitoring
- **Example**: Depression severity rated 1-3 (mild/moderate/severe)

## Diagnostic Criteria Construction
### Evidence-Based Approach
- **Field trials**: Clinicians test criteria in real-world settings
- **Factor analysis**: Identify core symptom clusters
- **Criterion validity**: Does diagnosis predict outcome, treatment response?
- **Iterative refinement**: Criteria evolve based on research

### Operationalized Criteria
- **Specific symptoms required**: E.g., major depression = ≥5 symptoms (DSM-5)
- **Duration requirement**: E.g., symptoms ≥2 weeks
- **Functional impairment**: Criteria require interference with functioning
- **Exclusion criteria**: Rule out medical, substance, other psychiatric causes

## ICD-10 vs DSM-5 Key Differences
### ICD-10 Emphasis
- **Dimensional**: Mild/moderate/severe specifiers for some (not all) disorders
- **Global application**: Developed for worldwide use (more cultural flexibility)
- **Simpler criteria**: Often fewer symptoms required than DSM-5
- **Medical model**: Integrated with general medical disorders

### DSM-5 Emphasis
- **Research-driven**: More rigorous validity testing
- **Dimensional severity**: ALL disorders include severity ratings
- **Cultural sensitivity**: Appendix on Cultural Formulation Interview
- **Specifiers**: Detailed modifiers (in remission, with anxious distress, etc.)
- **Biomarkers**: Moves toward biological validation of disorders

## Evolution of Psychiatric Nosology
### DSM History
- **DSM-I (1952)**: Reaction types (psychoses, neuroses, personality disorders)
- **DSM-II (1968)**: Psychoanalytic framework, categories less clear
- **DSM-III (1980)**: Revolution—operational criteria, multiaxial, eliminated neurosis
- **DSM-IV (1994)**: Refined criteria, field trials, improved reliability
- **DSM-5 (2013)**: Dimensional approach, cultural considerations, new disorders (Internet gaming addiction)

### ICD-10 Modernization
- **ICD-11 (2022)**: Coming to replace ICD-10
- **Major changes**: QD code system (alphanumeric like DSM-5), merger of similar conditions, dimensional severity
- **Controversial changes**: OCD moved to anxiety disorders (DSM-5 separated it), PTSD narrowed definition`,
        mnemonics: [
          { text: "Reliability = agreement (inter-rater, test-retest)", explanation: "Consistency of diagnosis" },
          { text: "Validity = diagnosis predicts outcome, treatment response", explanation: "Accuracy of diagnosis" },
          { text: "Categorical = have/don't have, Dimensional = continuum (mild-moderate-severe)", explanation: "Diagnostic approach" },
          { text: "DSM-5 = research gold, ICD-10 = worldwide standard, ICD-11 = future", explanation: "Nosological evolution" }
        ],
        keyPoints: [
          "Diagnostic criteria operationalized: specific symptoms, duration, functional impact",
          "ICD-10 and DSM-5 high inter-rater reliability (kappa 0.6-0.8)",
          "Dimensional approach better captures symptom spectrum than categorical",
          "Multiaxial assessment comprehensive: captures full clinical context",
          "ICD-11 moves toward dimensional, alphanumeric codes like DSM-5"
        ],
        textbookRefs: [
          { book: "DSM-5 Manual", chapter: "Development and Validation of Criteria", edition: "5th" },
          { book: "ICD-11 Clinical Descriptions", chapter: "Nosological Framework", edition: "2022" }
        ]
      },
      {
        layer: 3,
        slug: "mental-disorder-classification-layer-3-clinical",
        title: "Classification of Mental Disorders - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical assessment using multiaxial approach, diagnostic formulation, Indian context.",
        contentMd: `# Classification of Mental Disorders - Clinical

## Structured Diagnostic Assessment
### History Taking Framework
1. **Chief complaint & presenting illness**: Detailed symptom timeline
2. **Personal history**: Birth, development, education, work, relationships
3. **Family history**: Psychiatric illness in relatives (genetic risk)
4. **Medical history**: Comorbidities, medications (may cause psychiatric symptoms)
5. **Substance history**: Alcohol, drugs, smoking (withdrawal/intoxication states)
6. **Medication review**: Steroids (mood change), antipsychotics (side effects)

### Mental Status Examination (MSE)
- **Appearance**: Grooming, hygiene, clothing (self-care)
- **Behavior**: Psychomotor activity, violence risk, cooperation
- **Speech**: Rate, volume, coherence (fast speech = mania; slow = depression)
- **Mood vs Affect**: Subjective (mood) vs objective (affect = emotional expression)
- **Thought process**: Organized vs disorganized (tangential, circumstantial, incoherent)
- **Thought content**: Delusions, hallucinations, obsessions, suicidal ideation
- **Cognition**: Orientation, memory, attention, concentration, intelligence
- **Insight**: Awareness of illness
- **Judgment**: Decision-making capacity, reality testing

### Multiaxial Diagnostic Formulation
#### Axis I: Primary Psychiatric Diagnosis
- **Example**: Major Depressive Disorder (F32.2 ICD-10: moderate episode)
- **Specifiers**: With anxious distress, with peripartum onset, in partial remission

#### Axis II: Personality Disorders/Intellectual Disability
- **Example**: Borderline Personality Disorder (F60.3)
- **Note**: Comorbid personality disorders affect prognosis (worse outcome)

#### Axis III: General Medical Conditions
- **Medical comorbidities**: Thyroid disease (depression), chronic pain (anxiety)
- **Relevant medical history**: Diabetes (increases depression risk), heart disease
- **Medication effects**: SSRIs (sexual dysfunction), antipsychotics (metabolic syndrome)

#### Axis IV: Psychosocial Stressors
- **Categories**: Family (death, divorce), work (job loss), financial, housing, legal
- **Severity**: Mild, moderate, severe
- **Timing**: Acute (recent), chronic (ongoing)

#### Axis V: Global Assessment of Functioning (GAF)
- **Score 91-100**: Superior functioning, no symptoms
- **Score 71-80**: Minor symptoms or temporary impairment
- **Score 51-60**: Moderate symptoms/impairment (some difficulty in functioning)
- **Score 31-40**: Major impairment in several areas (unable to work)
- **Score 0-30**: Persistent inability to function (danger to self/others)

## Diagnostic Algorithms by Symptom Presentation
### Depressed Mood Algorithm
```
Depressed mood or anhedonia ≥2 weeks
  ├─ + ≥3 additional depression symptoms → Assess for major depression
  │   ├─ Single episode (first time) = Major Depressive Disorder
  │   ├─ Recurrent episodes = Major Depressive Disorder (recurrent)
  │   ├─ <2 weeks = Adjustment disorder with depressed mood (stressor-related)
  │   └─ Chronic (≥2 years) = Persistent Depressive Disorder (Dysthymia)
  ├─ + Manic/hypomanic episode = Bipolar Disorder
  ├─ + Trauma history + hyperarousal = PTSD or Trauma-related
  └─ + Anxiety symptoms = Depression with anxious distress
```

### Psychosis Algorithm
```
Delusions, hallucinations, or disorganized speech
  ├─ + Depressed/manic mood for full psychotic episode → Mood disorder with psychosis
  │   ├─ Manic episode with psychosis = Bipolar I
  │   └─ Depressive episode with psychosis = Major depression with psychotic features
  ├─ + Negative symptoms, social decline = Schizophrenia spectrum
  │   ├─ <1 month = Brief psychotic disorder
  │   ├─ 1-6 months = Schizophreniform disorder
  │   └─ ≥6 months = Schizophrenia
  ├─ + Prominent delusions, no other criteria = Delusional disorder
  ├─ + Substance intoxication/withdrawal = Substance-induced psychotic disorder
  └─ + Medical condition (infection, seizure) = Psychotic disorder due to medical condition
```

## Common Diagnostic Dilemmas in India
### Distinguishing Depression from Medically Explained Somatic Symptoms
- **Somatization common in India**: Patient presents with chest pain, headache, but psychiatric disorder underneath
- **Approach**: MSE to screen for depression (anhedonia, guilt, hopelessness) despite somatic focus
- **Cultural consideration**: Somatic expression of emotional distress more acceptable than "depression" label

### Substance Use Disorder vs Psychological Dependence
- **ICD-10/DSM-5 distinction**: Substance use disorder (compulsive use despite harm) vs recreational use
- **Criteria**: Tolerance, withdrawal, continued use despite harm (≥3 in DSM-5)
- **India context**: Alcohol use very common (high prevalence); distinguish harmful use from dependence

### Psychotic Disorders vs Religious/Cultural Experiences
- **Challenge in India**: Spiritual experiences, religious visions must be distinguished from delusions
- **DSM-5 Cultural Formulation Interview**: Explicitly asks about culturally normative experiences
- **Criteria**: Distress/impairment required (cultural acceptance ≠ psychiatric disorder)

## Indian Mental Health Context
### ICD-10 Prevalence Data (NMHS 2016)
- **Depression**: 45.7 million (higher prevalence, underdiagnosis common)
- **Anxiety**: High prevalence, often comorbid with depression
- **Substance use**: Alcohol most common (13.7 million; male predominance)
- **Schizophrenia**: 2-3 million (lower incidence, similar worldwide)

### Diagnostic Challenges in India
- **Limited psychiatric services**: Most primary care physicians diagnose (less training)
- **Diagnostic overshadowing**: Physical symptoms overshadow psychiatric diagnosis
- **Cultural factors**: Family-centered model; individual diagnosis less emphasized
- **Stigma**: Mental illness stigmatized; delayed presentation, underdiagnosis

### Practical Approach in Indian Settings
1. **Integrate psychiatric assessment in primary care**
2. **Screen for depression in medical patients** (high comorbidity)
3. **Consider cultural context**: Spiritual practices vs pathology
4. **Multidisciplinary approach**: Involve family, community health workers
5. **Use simplified tools**: PHQ-9 for depression, GAD-7 for anxiety screening`,
        mnemonics: [
          { text: "MSE mnemonic = AABCTCiJ (Appearance, Affect, Behavior, Cognition, Thought, Cognition, insight, Judgment)", explanation: "Assessment domains" },
          { text: "Axis I-V = Diagnosis, Personality, Medical, psychoSocial, Functioning", explanation: "Multiaxial framework" },
          { text: "Depression algorithm = Mood ≥2w + ≥3 symptoms = MDD", explanation: "Diagnostic criteria" },
          { text: "Psychosis algorithm = Delusions/hallucinations + mood OR negative symptoms OR 6 months", explanation: "Differential diagnosis" }
        ],
        keyPoints: [
          "Multiaxial assessment captures full clinical picture and context",
          "MSE objective tool for psychiatric evaluation; documenting specific findings critical",
          "ICD-10 standard in India; diagnoses based on operational criteria",
          "Cultural formulation essential: distinguish normative spiritual experiences from pathology",
          "GAF score objective measure of overall functioning/disability"
        ],
        textbookRefs: [
          { book: "Textbook of Psychiatry", chapter: "Diagnostic Assessment", edition: "6th" },
          { book: "NMHS India Report", chapter: "Epidemiology and Service Utilization", edition: "2016" }
        ]
      },
      {
        layer: 4,
        slug: "mental-disorder-classification-layer-4-exam-prep",
        title: "Classification of Mental Disorders - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, diagnostic criteria summaries, exclusion criteria, common exam questions.",
        contentMd: `# Classification of Mental Disorders - Exam Prep

## Quick Reference: ICD-10 Major Codes
| Category | Code Range | Examples |
|----------|-----------|----------|
| Organic | F00-F09 | Dementia, delirium, Alzheimer |
| Substance Use | F10-F19 | Alcohol, opioid, cannabis |
| Schizophrenia | F20-F29 | Schizophrenia F20, brief psychotic F23 |
| Mood | F30-F39 | Depression F32, bipolar F31 |
| Anxiety | F40-F49 | Panic F41, phobia F40, OCD F42 |
| Behavioral | F50-F59 | Eating disorders, sleep, sexual |
| Personality | F60-F69 | Personality disorders, IQ |
| Developmental | F80-F89 | ADHD, autism, learning disorders |

## High-Yield Exam Facts
- **ICD-10 standard in India**: F-codes, 5-axis system
- **DSM-5 research standard**: Alphanumeric codes, dimensional severity
- **Major depression**: ≥5 symptoms (including mood/anhedonia) × ≥2 weeks
- **Schizophrenia**: ≥2 psychotic symptoms × ≥1 month (one must be delusions/hallucinations/disorganized speech)
- **Bipolar I**: Manic episode (can alternate with depression)
- **Bipolar II**: Hypomanic + depressive episodes (NO full mania)
- **Generalized anxiety**: Worry ≥6 months + ≥3 anxiety symptoms
- **Panic disorder**: Recurrent unexpected panic attacks + concern about future attacks
- **PTSD**: Trauma exposure + intrusion (flashbacks), avoidance, negative mood, arousal ≥1 month
- **Adjustment disorder**: Stressor-induced symptoms <3 months after stressor onset (less severe than major disorders)

## GAF Score Quick Reference
- **91-100**: Superior; no more than minor symptoms
- **81-90**: Good functioning; minimal symptoms
- **71-80**: Minor symptoms or temporary impairment
- **61-70**: Mild symptoms but generally functioning
- **51-60**: Moderate symptoms; some difficulty functioning
- **41-50**: Serious symptoms; significant functional impairment
- **31-40**: Major impairment; difficulty in most areas
- **21-30**: Serious impairment; risk of harm
- **11-20**: Persistent severe impairment; danger to self/others
- **1-10**: Persistent danger to self/others

## Multiaxial Coding Example
**Case**: 45-year-old man with depression + hypertension + job loss + borderline personality traits
```
Axis I: Major Depressive Disorder, single episode, moderate (F32.1)
Axis II: Borderline Personality Traits (not full disorder)
Axis III: Hypertension (medically managed)
Axis IV: Job loss, financial stress (moderate severity)
Axis V: GAF = 45 (serious symptoms, significant functional impairment)
```

## Common Exam Question Patterns
- "Which is characterized by ≥2 manic episodes?" = Bipolar I or Bipolar II (specify hypomania)
- "≥2 weeks depressed mood + ≥3 additional symptoms?" = Major Depression (need to exclude other causes)
- "Psychosis + depression simultaneously?" = Major depression with psychotic features OR Bipolar I depressed with psychosis
- "Trauma + flashbacks + nightmares + avoidance?" = PTSD (≥1 month required)
- "Worry ≥6 months + somatic symptoms?" = Generalized Anxiety Disorder
- "What's the difference between Bipolar I and II?" = I has full mania; II has hypomanic episodes only
- "Adjustment disorder duration?" = <3 months AFTER stressor onset; resolves within 6 months
- "Which personality disorder cluster A?" = Odd cluster (Schizoid, Paranoid, Schizotypal)
- "Difference between normal sadness and major depression?" = Duration (≥2w), severity (≥5 symptoms), impairment required
- "GAF <30 implies?" = Persistent danger to self/others; hospitalization likely

## Diagnostic Pearls
- **Prodromal phase**: Early psychotic symptoms before full schizophrenia; shorter duration
- **Partial remission**: Disorder in remission but some residual symptoms persist
- **Specifiers matter**: "With psychotic features," "peripartum," "chronic," "in remission"
- **Exclusion criteria critical**: Always rule out medical causes, substance-induced, other psychiatric disorders
- **Cultural considerations**: DSM-5 includes cultural formulation (important in diverse populations)
- **Comorbidity common**: Depression + anxiety (50%), anxiety + sleep disorder, ADHD + ODD`,
        mnemonics: [
          { text: "MDD = Mood + ≥3 others × ≥2 weeks = Major depression", explanation: "Core criteria" },
          { text: "Schizophrenia = ≥2 psychotic × ≥1 month (one must be specific symptoms)", explanation: "2-1 rule" },
          { text: "Bipolar I = Mania ± Depression; Bipolar II = Hypomania + Depression", explanation: "Key distinction" },
          { text: "GAF >70 = functioning OK, <30 = danger to self/others", explanation: "Severity benchmark" }
        ],
        keyPoints: [
          "ICD-10 standard in India with F-codes and 5-axis system",
          "DSM-5 dimensional approach with severity specifiers",
          "Major depression requires mood symptoms plus additional features × 2 weeks minimum",
          "Always rule out medical/substance causes before diagnosing psychiatric disorder",
          "Multiaxial assessment essential for comprehensive formulation"
        ],
        textbookRefs: [
          { book: "ICD-10 Clinical Descriptions", chapter: "Diagnostic Criteria", edition: "10th" },
          { book: "DSM-5 Manual", chapter: "Quick Reference Guide", edition: "5th" }
        ]
      },
      {
        layer: 5,
        slug: "mental-disorder-classification-layer-5-active-recall",
        title: "Classification of Mental Disorders - Active Recall",
        estimatedMinutes: 20,
        summary: "10 diagnostic cases testing classification, multiaxial formulation, differential diagnosis.",
        contentMd: `# Classification of Mental Disorders - Active Recall

## Q1: Multiaxial Formulation - Complex Case
**Q: 38-year-old divorced woman with 3-week depressed mood, insomnia, guilt, crying daily. Also has long-standing difficulty trusting others, fear of abandonment, identity disturbance. Medical history: controlled diabetes. Recent stressor: daughter moved away. Formulate multiaxially.**

A: **Axis I: Major Depressive Disorder, single episode, moderate (F32.1)** - meets criteria (depressed mood ≥2 weeks + sleep, guilt = ≥3 symptoms). **Axis II: Borderline Personality Disorder features (F60.3)** - unstable relationships, identity disturbance, abandonment fear (chronic, not recent-onset). **Personality disorder worsens prognosis** (slower recovery, higher suicide risk). **Axis III: Type 2 Diabetes Mellitus** - medically managed; relevant (diabetes increases depression risk). **Axis IV: Psychosocial stressors = SEVERE** - daughter moving (loss), divorce history, marital discord, financial concerns (unemployment possible). **Axis V: GAF = 40** - major impairment (difficulty working, self-care, social functioning). **Clinical significance**: Comorbid personality disorder requires longer treatment, closer monitoring for suicide risk.

## Q2: Distinguishing Bipolar from Major Depression
**Q: 34-year-old man with 6-week history of decreased need for sleep (3 hrs/night, feeling rested), racing thoughts, increased talking, excessive spending ($10K on car), irritable mood, engaging in risky sex. No depressive episodes ever. Diagnosis?**

A: **Manic episode criteria met** - decreased need for sleep (not just insomnia, but feeling rested despite little sleep), racing thoughts (flight of ideas), increased goal-directed activity (spending), risky behavior (unprotected sex), inflated self-esteem implied. **Duration ≥7 days** (he had 6 weeks = more than sufficient). **Functional impairment**: Financial consequences (spending). **Diagnosis: Bipolar I Disorder, current episode manic (F31.1 ICD-10)** - one full manic episode sufficient (bipolar I). **Note on Bipolar II**: Requires hypomanic episodes (not full mania) + depressive episodes; this patient has FULL mania, so Bipolar I (not II). **Key distinction**: Bipolar II often UNDERDIAGNOSED if clinicians miss hypomanic episodes (shorter duration, less dramatic than mania). **Management**: Antimanic treatment urgently (lithium, valproate) + hospitalization if severe (suicide risk, poor judgment).

## Q3: Substance Use Disorder Diagnosis
**Q: 28-year-old man drinks alcohol daily (6-8 beers), reports tolerance (needs more to feel effect), has tried to quit without success, wife threatens divorce, misses work occasionally. Diagnosis vs recreational use?**

A: **Diagnostic criteria for Alcohol Use Disorder (F10.2 ICD-10)**: (1) Tolerance (needs more alcohol), (2) Persistent use despite harm (marital strain, work absence), (3) Unable to cut down (tried quitting unsuccessfully), (4) Large amount consumed (6-8 beers daily), (5) Withdrawal would occur if stopped (not explicitly stated but implied by inability to quit). **Meets ≥3 criteria** = Alcohol Use Disorder, moderate to severe severity. **Distinction from recreational use**: Recreational use = no loss of control, no harm, can stop anytime. This patient has compulsive use despite serious consequences (marital breakdown, job jeopardy). **Note on severity**: ICD-10 doesn't specify mild/moderate/severe as clearly as DSM-5; DSM-5 would rate based on number of criteria met (3-4 = moderate, ≥5 = severe). **Management**: Detoxification (if withdrawal risk = seizures, delirium tremens), psychosocial therapy, alcohol rehabilitation program, family counseling.

## Q4: Ruling Out Substance-Induced Psychosis
**Q: 26-year-old with acute onset paranoid delusions (believes coworkers plotting against him), hearing voices insulting him. Denies any psychiatric history. Urine drug screen positive for methamphetamine. Recent use (last week). Diagnosis?**

A: **Substance-induced psychotic disorder** (F1X.5 for stimulants, ICD-10) - temporal relationship between methamphetamine use and psychotic symptoms (onset within days of use), presence of clear psychotic symptoms. **Key diagnostic criterion**: Psychosis occurs DURING or shortly after substance intoxication/withdrawal; NOT a primary psychotic disorder. **Why not schizophrenia**: (1) No premorbid decline, (2) Acute sudden onset (schizophrenia develops insidiously), (3) Temporal relationship to drug use, (4) Full remission likely if abstinence achieved. **Management**: (1) Treat withdrawal symptoms (fatigue, depression, sleep), (2) Antipsychotic briefly if needed (symptoms may resolve without medication), (3) Substance use disorder treatment (rehabilitation), (4) Reassess in weeks to months - if psychosis persists after abstinence, consider primary psychotic disorder. **Critical learning**: Always screen for substance use before labeling primary psychotic disorder.

## Q5: Major Depressive vs Adjustment Disorder
**Q: 32-year-old woman presents 2 weeks after being laid off from job. Reports sadness, insomnia, difficulty concentrating. No prior depression. Exam: mild depressed mood, no guilt/hopelessness, functioning better than expected (joined gym, has plans). Diagnosis?**

A: **Adjustment Disorder with Depressed Mood (F43.21)** NOT Major Depression. **Reasoning**: (1) **Stressor clearly identified** (job loss), (2) **Timing: symptoms within 3 months of stressor onset** (2 weeks = within window), (3) **Duration insufficient for MDD**: Only 2 weeks have passed; MDD requires ≥2 weeks BUT also ≥5 symptoms (she reports 2-3). (4) **Functional impairment mild** - she's managing (gym, plans), not severe as in MDD. (5) **Absence of MDD features**: No guilt, no hopelessness (hallmarks of depression). **Key distinction**: Adjustment disorder = stressor-related, <3 months duration, RESOLVES within 6 months; MDD = can occur with or without stressor, no time limit on duration if recurrent. **Management**: Psychotherapy, stress management, occupational counseling. **Prognosis**: Good (most adjustment disorders resolve with time/support). **Reassessment**: If symptoms persist >3 months after stressor onset, OR if 5+ depressive symptoms develop, reclassify as MDD.

## Q6: Anxiety Disorder Differential Diagnosis
**Q: 40-year-old woman with 8-month worry about health (convinced she has cancer despite negative tests), physical tension, fatigue, difficulty concentrating, irritability. Worry occurred before and continues without specific panic attacks. Diagnosis?**

A: **Generalized Anxiety Disorder (F41.1)** - meets criteria: (1) Excessive worry ≥6 months (she has 8 months), (2) Worry difficult to control, (3) ≥3 associated symptoms (physical tension, fatigue, difficulty concentrating, irritability), (4) Worry about multiple areas (health focus, but also life in general likely). **Why not Panic Disorder**: No recurrent panic attacks mentioned (sudden intense fear with physical symptoms). **Why not Illness Anxiety Disorder**: While she's health-focused, she has significant other worries (not purely health-related). **Why not Major Depression**: Depressed mood not primary; anxiety predominates. **Medical workup**: Essential (rule out medical causes: thyroid, cardiac, neurological). **Management**: SSRIs (paroxetine, sertraline), psychotherapy (CBT), relaxation training. **Prognosis**: Chronic if untreated (tends to persist); treatment responsive.

## Q7: Brief Psychotic vs Schizophreniform vs Schizophrenia
**Q: Timeline comparison - young adult with first psychotic episode. A) psychosis 2 weeks → B) psychosis 5 months → C) psychosis 8 months. How diagnose each?**

A: **Diagnosis by duration**: (1) **A (2 weeks duration) = Brief Psychotic Disorder (F23, ICD-10)**: Presence of delusions/hallucinations/disorganized speech <1 month, with remission. Often stressor-triggered (situational). **Prognosis: excellent** (usually resolves within weeks). (2) **B (5 months duration) = Schizophreniform Disorder (F20.81, DSM-5 / F20.0 ICD-10)**: Meets schizophrenia criteria BUT duration <6 months (the defining feature). **Prognosis: intermediate** (30-50% convert to schizophrenia; 50% have good outcome). (3) **C (8 months duration) = Schizophrenia (F20, ICD-10)**: Meets schizophrenia criteria with duration ≥6 months (first episode). **Prognosis: more guarded** (chronic course, social/occupational decline if untreated). **Key learning**: Duration critical for diagnosis (1 month for brief psychotic, 6 months for schizophreniform/schizophrenia). **Management differences**: A = observation, supportive care (medication may not be needed); B-C = antipsychotic medication, psychosocial support.

## Q8: Personality Disorder Clusters in Diagnostic Formulation
**Q: Patient with lifelong pattern: excessive worry about being abandoned, unstable intense relationships, identity disturbance, risk-taking behavior, chronic emptiness, self-harm urges. Also has long-standing ideas of reference (believes others talking about him), suspicious thinking, social withdrawal. Axis II diagnosis?**

A: **Multiple personality disorder features identified**: (1) **Borderline PD features** (Cluster B - dramatic): Abandonment fear, unstable relationships, identity disturbance, impulsivity (risk-taking), chronic emptiness, emotional dysregulation (self-harm urges). (2) **Schizoid/Schizotypal PD features** (Cluster A - odd): Ideas of reference, suspiciousness, social withdrawal. **Possible diagnoses**: (1) **Primary: Borderline Personality Disorder (F60.3)** with some Cluster A features, OR (2) **Schizotypal Personality Disorder (F21)** with some Cluster B features. **Clinical approach**: Determine which pattern is PRIMARY and causing most dysfunction. **Formulation**: "Mixed personality disorder features, predominantly Borderline with Schizotypal traits" OR full Schizotypal if ideas of reference/suspiciousness/magical thinking predominate. **Significance**: Cluster A (odd) often more resistant to therapy; Cluster B (dramatic) more treatment-responsive but high-risk (suicide). **Management**: Long-term psychotherapy (DBT for Borderline, psychodynamic for Schizotypal), medication for comorbid depression/anxiety, close monitoring for suicide/self-harm risk.

## Q9: ICD-11 vs ICD-10 Changes
**Q: Which major changes does ICD-11 introduce compared to ICD-10? Name 3.**

A: (1) **Code format**: ICD-10 uses F-codes (F00-F99); ICD-11 uses alphanumeric QD codes (e.g., 6A40 for schizophrenia) - more similar to DSM-5 structure. (2) **Nosological changes**: OCD in ICD-10 is anxiety disorder (F42); ICD-11 moves OCD to separate obsessive-compulsive category. **PTSD definition narrowed**: ICD-11 PTSD has simpler criteria (3 core symptoms) vs ICD-10 (more symptoms required). (3) **Dimensional severity**: ICD-11 more dimensional; includes severity specifiers for most conditions (like DSM-5), moving away from categorical to dimensional approach. (4) **Merger of conditions**: Some conditions merged for simplification (e.g., some anxiety disorders combined). **Clinical impact**: ICD-11 adoption ongoing; most countries still using ICD-10 (including India currently, transitioning). **Exam relevance**: Know both ICD-10 (current standard in India) and DSM-5 (research gold standard).

## Q10: Cultural Formulation & Diagnostic Validity
**Q: 35-year-old man from rural India reports hearing voices of deceased grandfather giving guidance, no distress, maintains functioning, family views this as spiritual connection. How diagnose?**

A: **NOT PSYCHOTIC DISORDER** - this is culturally normative experience. **Key distinction**: DSM-5 Cultural Formulation Interview explicitly addresses this: (1) **Determine cultural origin**: Is this culturally accepted in his community? (Answer: yes, spiritual ancestor guidance common in Indian tradition). (2) **Assess distress/impairment**: Does he experience distress from voices? Is functioning impaired? (Answer: no distress, maintains work/relationships). (3) **Final determination**: Experience consistent with cultural norms, no impairment = NOT a psychiatric disorder. **Critical learning**: Psychiatric diagnosis requires distress OR functional impairment, PLUS cultural acceptance of experience ≠ pathology. **If presenting with distress**: Then may consider brief psychotic disorder or schizophreniform if other criteria met. **Clinical implication**: In India, culturally sensitive assessment essential; many spiritual/religious experiences misdiagnosed as psychiatric if clinician not aware of cultural context. **DSM-5 innovation**: Includes cultural formulation in appendix, now standard practice in diverse populations.`,
        mnemonics: [
          { text: "Axis I-V formulation: Diagnosis, Personality, Medical, psychoSocial stressors, Functioning (GAF)", explanation: "Multiaxial structure" },
          { text: "Bipolar I = full Mania; Bipolar II = Hypomania only (never full mania)", explanation: "Mood spectrum" },
          { text: "Adjustment disorder <3 months after stressor, resolves <6 months; MDD no time limit", explanation: "Time-based distinction" },
          { text: "Brief psychotic <1m, Schizophreniform 1-6m, Schizophrenia ≥6m (duration defines)", explanation: "Psychosis timeline" }
        ],
        keyPoints: [
          "Multiaxial assessment captures full clinical context: diagnosis, personality, medical, psychosocial, functioning",
          "GAF score objective measure of overall functioning; <30 indicates danger to self/others",
          "Substance-induced disorders must be distinguished from primary psychiatric diagnoses through temporal relationship and substance history",
          "Adjustment disorders brief, stressor-related, resolve within 6 months; major disorders have no time limit",
          "Cultural formulation essential in diverse populations; distinguish culturally normative experiences from psychiatric pathology"
        ],
        textbookRefs: [
          { book: "DSM-5 Manual", chapter: "Cultural Formulation Interview", edition: "5th" },
          { book: "ICD-10 Clinical Descriptions", chapter: "Diagnostic Procedures and Multiaxial Assessment", edition: "10th" }
        ]
      }
    ]
  }
];
