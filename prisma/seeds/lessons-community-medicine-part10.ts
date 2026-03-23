import type { TopicLessons } from "./content-loader";

export const communityMedicineLessonsPartX: TopicLessons[] = [
  {
    topicCode: "CM-MOD-03-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "cm-mental-health-layer-1-foundation",
        title: "Mental Health & Substance Abuse - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of National Mental Health Program (NMHP), epidemiology of psychiatric disorders in India, and integration of mental health into primary healthcare.",
        contentMd: `# Mental Health & Substance Abuse - Foundation

## National Mental Health Program (NMHP)

### History & Objectives
**Launched**: 1982

**Key Objectives**:
- Ensure availability and accessibility of minimum mental health care for all
- Encourage application of mental health knowledge in general healthcare and social development
- Promote community participation in mental health development
- Integrate mental health with general healthcare
- Reduce stigma and discrimination

### Current Implementation
- Mental health integrated at District Mental Health Centers (DMHC)
- Training of primary health center workers
- Community-based care model
- Focus on severe mental illness and substance use disorders

## Epidemiology in India

### Mental Illness Burden
- **Prevalence**: ~1 in 10 Indians suffers from mental illness (NMHS 2016)
- **Disease burden**: Mental health accounts for ~6% of disability-adjusted life years (DALYs)
- **Common disorders**:
  - Depression (35-40% of mental illness)
  - Anxiety disorders (20-25%)
  - Schizophrenia (1-2%)
  - Substance use disorders (10-15%)
  - Others: Bipolar disorder, dementia, intellectual disability

### Risk Factors for Mental Illness
- Poverty and low socioeconomic status
- Unemployment and job loss
- Marital conflict and family disruption
- Chronic medical illness
- Substance abuse
- Social isolation and lack of support
- Gender-based violence

### Gender Differences
- Depression: 1.5-2× higher in women
- Anxiety: Females > males
- Substance abuse: Males > females (3-4×)
- Suicide: Males 3-4× higher completion rate

## Substance Abuse in India

### Epidemiology
**Most common substances** (in order):
1. **Alcohol**: ~60% of substance abuse (15-20 million dependent)
2. **Cannabis**: Second most common (10-15 million users)
3. **Tobacco**: Largest public health impact (200+ million users)
4. **Opioids**: Heroin, prescription opioids (1-2 million dependent)
5. **Others**: Amphetamines, benzodiazepines, cocaine

### Alcohol Abuse Patterns
- Higher prevalence in males (10-15% vs. 1-2% females)
- More common in rural areas
- Associated with psychiatric comorbidity (depression, anxiety)
- Leads to cirrhosis, accidents, domestic violence

### Opioid Crisis
- Heroin most common opioid of abuse
- Prescription opioid misuse emerging (pain management)
- Associated with injection drug use and HIV transmission
- High risk of overdose and death

## Mental Health Integration Model (NMHP)

### Three-Tier System

**District Level**: District Mental Health Center (DMHC)
- Psychiatrist-led facility
- In-patient beds for severe cases
- Outpatient services
- Training and supervision

**Community Health Center (CHC)**:
- Mental health officer (psychologist/nurse)
- Outpatient care for common disorders
- Referral to DMHC for severe cases

**Primary Health Center (PHC)**:
- Health worker trained in mental health
- Identify and manage common disorders
- Counseling and support
- Referral pathway to CHC/DMHC

### Key Components of Community-Based Model
- **Early identification**: Recognizing mental illness in community
- **First-line treatment**: Counseling, supportive care, basic psychotropic drugs
- **Referral system**: Linking to specialist care when needed
- **Follow-up care**: Ensure adherence, monitor outcomes
- **Stigma reduction**: Community awareness and acceptance

## Common Mental Disorders in Primary Care

### Depression
- Persistent sadness, loss of interest/pleasure
- Sleep disturbance, appetite changes
- Guilt, worthlessness, concentration difficulty
- Suicidal thoughts in severe cases
- Prevalence: 5-10% in primary care

### Anxiety Disorders
- Excessive worry, nervousness
- Physical symptoms: Palpitations, sweating, tremor
- Panic attacks (sudden onset terror)
- Social/situational triggers
- Prevalence: 3-5% in primary care

### Psychosis
- Delusions (false fixed beliefs)
- Hallucinations (usually auditory)
- Disorganized thinking and speech
- Behavior changes, social withdrawal
- Schizophrenia most common (1-2% lifetime prevalence)

## Substance Use Disorders

### Diagnostic Criteria (DSM-5/ICD-10)
**Dependence**:
- Tolerance (need more to get effect)
- Withdrawal (physical symptoms if stopped)
- Continued use despite harmful effects
- Loss of control over use
- Time spent obtaining/using substance
- Neglect of other activities

**Hazardous Use**:
- Using despite risk of harm
- No dependence criteria yet
- Requires intervention

## Mental Health & Substance Abuse Integration

### Dual Diagnosis Common
- Depression + Alcohol abuse
- Anxiety + Substance use
- Schizophrenia + Cannabis abuse
- Requires integrated treatment

### Treatment Approach
- Assess both conditions
- Treat concurrent disorders
- Psychosocial interventions
- Medication management
- Rehabilitation and support`,
        mnemonics: [
          {
            text: "NMHP OBJECTIVES: Availability, Knowledge application, Community participation, Integration, Stigma reduction",
            explanation: "Five pillars of National Mental Health Program"
          },
          {
            text: "MENTAL ILLNESS PREVALENCE: Depression 35-40%, Anxiety 20-25%, Schizophrenia 1-2%, Substance abuse 10-15%",
            explanation: "Relative prevalence of major mental disorders in India"
          },
          {
            text: "SUBSTANCE ABUSE HIERARCHY: Alcohol 60%, Cannabis 15%, Tobacco 200m+ users, Opioids 1-2m",
            explanation: "Most common substances of abuse in India"
          }
        ],
        keyPoints: [
          "NMHP launched 1982 emphasizes integration of mental health with general healthcare",
          "1 in 10 Indians suffer mental illness; depression most common (35-40%)",
          "Three-tier system: DMHC (district), CHC (community), PHC (primary care)",
          "Alcohol abuse most common (60%), associated with psychiatric comorbidity",
          "Dual diagnosis (mental illness + substance abuse) requires integrated treatment",
          "Community-based care model with referral pathways reduces stigma and improves access"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Mental Health and Substance Abuse Programs", edition: "26th" },
          { book: "National Mental Health Survey India", chapter: "Epidemiology and Service Utilization" }
        ]
      },
      {
        layer: 2,
        slug: "cm-mental-health-layer-2-mechanism",
        title: "Mental Health & Substance Abuse - Mechanism",
        estimatedMinutes: 25,
        summary: "Neurobiological mechanisms of mental illness and substance abuse, addiction pathophysiology.",
        contentMd: `# Mental Health & Substance Abuse - Mechanism

## Neurobiological Basis of Mental Illness

### Neurotransmitter Abnormalities

**Monoamine Hypothesis of Depression**:
- **Serotonin (5-HT) deficiency**: Regulates mood, sleep, appetite
  - Low serotonin → depression, insomnia, anhedonia
  - SSRIs increase available serotonin

- **Norepinephrine (NE) deficiency**: Regulates arousal, attention
  - Low NE → fatigue, poor concentration, apathy

- **Dopamine (DA) deficiency**: Regulates motivation, reward
  - Low DA → anhedonia (loss of pleasure), apathy, fatigue

### Dopamine Hypothesis in Schizophrenia
- **Mesolimbic system**: Excess DA → positive symptoms (delusions, hallucinations)
- **Mesocortical system**: Deficient DA → negative symptoms (apathy, anhedonia, social withdrawal)
- **Nigrostriatal system**: DA blockade → extrapyramidal side effects (antipsychotics)

### GABA and Anxiety
- GABA: Inhibitory neurotransmitter, reduces CNS activity
- Low GABA → anxiety, seizures
- Benzodiazepines enhance GABA action

### Glutamate Excitotoxicity
- Excess glutamate (excitatory) → neuronal damage
- Implicated in schizophrenia, bipolar disorder, cognitive decline
- PCP blocks NMDA receptors (acute psychosis model)

## Neurobiological Changes in Addiction

### Reward Pathway
- **Ventral tegmental area (VTA)**: Dopamine neurons
- **Nucleus accumbens**: Pleasure center
- **Prefrontal cortex**: Decision-making, impulse control
- Addiction hijacks reward system

### Stages of Addiction

**Stage 1: Intoxication**
- Drug/alcohol activates reward pathway
- Dopamine release → euphoria, pleasure
- Behavioral reinforcement (brain remembers)

**Stage 2: Withdrawal**
- Neuroadaptation: Brain reduces natural dopamine production
- When drug stopped: Low dopamine → dysphoria, anxiety, physical symptoms
- Negative reinforcement (use to avoid withdrawal)

**Stage 3: Preoccupation/Anticipation**
- Environmental cues trigger craving
- Altered memory and learning pathways
- High relapse risk even after abstinence

### Tolerance Mechanism
- **Receptor downregulation**: Fewer receptors with chronic use
- **Tolerance develops**: Need more drug to achieve same effect
- **Cross-tolerance**: Similar drugs have shared tolerance

## Addiction Neurobiology

### Structural Brain Changes
- **Prefrontal cortex**: Reduced gray matter, impaired decision-making
- **Hippocampus**: Memory impairment
- **Striatum**: Enhanced cue reactivity
- **Amygdala**: Enhanced fear/stress response

### Opioid Addiction Mechanism
1. Opioid binds μ-receptors (reward pathway, pain suppression)
2. Dopamine release → euphoria
3. Neuroadaptation → reduced endogenous opioid production
4. Withdrawal: Physical (tremor, sweating, pain) and psychological symptoms
5. High relapse risk from environmental cues

### Alcohol Dependence Mechanism
1. GABA enhancement → CNS depression, sedation
2. Glutamate inhibition → reduced excitability
3. Chronic use → upregulation of glutamate receptors
4. Tolerance develops (need more alcohol)
5. Withdrawal: GABA/glutamate imbalance → tremor, seizures, delirium tremens

### Nicotine Addiction
- Nicotine activates acetylcholine receptors
- Dopamine release (reward)
- High psychological and physical dependence
- Withdrawal: Irritability, anxiety, poor concentration

## Stress and Mental Illness

### Hypothalamic-Pituitary-Adrenal (HPA) Axis
- Chronic stress → abnormal cortisol regulation
- Excess cortisol → hippocampal atrophy, mood disturbance
- Underlying mechanism for depression, anxiety

### Inflammatory Hypothesis
- Chronic stress and depression → elevated cytokines (IL-6, TNF-α, CRP)
- Neuro-inflammation may contribute to depression and cognitive decline
- Some antidepressants have anti-inflammatory effects

## Psychosocial Factors

### Cognitive Distortions in Depression
- Negative automatic thoughts
- Rumination and worry
- Catastrophizing
- Hopelessness and helplessness

### Behavioral Reinforcement
- Avoidance behavior → anxiety persists (escape/avoidance reinforces)
- Social withdrawal → isolation → worsening mood
- Alcohol use → temporary relief → reinforces use`,
        mnemonics: [
          {
            text: "MONOAMINE DEPRESSION: Low Serotonin (mood), Norepinephrine (arousal), Dopamine (pleasure) = 5-HT-NE-DA triad",
            explanation: "Three neurotransmitters implicated in depression"
          },
          {
            text: "DOPAMINE SCHIZOPHRENIA: Excess mesolimbic (positive symptoms), Deficit mesocortical (negative symptoms)",
            explanation: "Dopamine hypothesis explains both positive and negative symptoms"
          },
          {
            text: "ADDICTION STAGES: Intoxication (dopamine rise), Withdrawal (dopamine drop), Craving (cue-induced)",
            explanation: "Three-stage model of addiction development"
          }
        ],
        keyPoints: [
          "Depression: Serotonin, norepinephrine, dopamine deficiency; SSRIs increase serotonin availability",
          "Schizophrenia: Dopamine excess (mesolimbic) → positive symptoms; dopamine deficit (mesocortical) → negative symptoms",
          "Addiction: Dopamine release in reward pathway; neuroadaptation leads to tolerance and withdrawal",
          "Withdrawal: Brain reduced natural neurotransmitter production; physical and psychological symptoms",
          "Stress → HPA axis dysfunction → elevated cortisol → mood disturbance and cognitive changes",
          "Environmental cues trigger craving via altered memory pathways (high relapse risk)"
        ],
        textbookRefs: [
          { book: "Neurobiology of Mental Illness", chapter: "Neurochemistry of Depression and Anxiety", edition: "4th" },
          { book: "Principles of Addiction Medicine", chapter: "Pharmacology of Substance Abuse", edition: "6th" }
        ]
      },
      {
        layer: 3,
        slug: "cm-mental-health-layer-3-clinical",
        title: "Mental Health & Substance Abuse - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical assessment, diagnosis, and management of common mental disorders and substance use.",
        contentMd: `# Mental Health & Substance Abuse - Clinical

## Clinical Assessment

### Mental Status Examination (MSE)
**Appearance & Behavior**:
- Grooming, dress, hygiene
- Psychomotor activity (agitation vs. retardation)
- Eye contact, demeanor

**Speech & Thought Process**:
- Rate, rhythm, volume
- Coherence, organization
- Flight of ideas (bipolar), tangentiality (psychosis), circumstantiality

**Mood & Affect**:
- Subjective mood (what patient reports)
- Objective affect (what examiner observes)
- Congruence (match between mood and content)
- Range and lability

**Thought Content**:
- Delusions (false fixed beliefs)
- Obsessions (intrusive thoughts)
- Suicidal/homicidal ideation
- Preoccupations

**Perception**:
- Hallucinations (any sense: visual, auditory, tactile)
- Illusions (misinterpretation of real stimuli)

**Cognition**:
- Orientation (person, place, time)
- Memory (immediate, short-term, long-term)
- Concentration, attention

**Insight & Judgment**:
- Awareness of illness
- Understanding of need for treatment
- Decision-making ability

## Depression Management

### Diagnosis (ICD-10)
- Core symptoms: Persistent depression/anhedonia ≥2 weeks
- Associated symptoms: Sleep change, appetite change, fatigue, guilt, concentration difficulty, motor changes, suicidal thoughts
- Mild (2-3 symptoms), Moderate (4-5), Severe (6+ with psychotic features possible)

### First-Line Treatment (NMHP Guidelines)
**Psychosocial**:
- Cognitive behavioral therapy (CBT)
- Behavioral activation
- Interpersonal therapy
- Counseling and support

**Pharmacological**:
- SSRIs first-line (fluoxetine, sertraline, paroxetine)
- Dosing: 2-4 weeks for effect, 6-12 weeks for full response
- Duration: 6-12 months minimum after remission

### Management Algorithm
1. Assess severity and suicide risk
2. Psychosocial support (mandatory)
3. SSRI if moderate-severe or persistent
4. Monitor: Response (4-6 weeks), side effects
5. Follow-up: Monthly initially, then 3-monthly
6. Referral to psychiatry if no response after 2 SSRIs

### Suicide Risk Assessment
- **High risk**: Plan, method, intent, recent loss, psychosis, substance abuse
- **Low risk**: Vague thoughts, inconsistent plan
- **Protective factors**: Family support, religious beliefs, hope
- **Management**: Safety planning, close follow-up, hospitalization if high risk

## Anxiety Disorders Management

### Diagnosis
- Excessive worry ≥6 months, difficult to control
- Somatic symptoms: Palpitations, tremor, sweating, shortness of breath
- Panic attacks: Sudden onset terror with physical symptoms

### Treatment
**First-line psychosocial**:
- Relaxation training, breathing exercises
- CBT (cognitive restructuring, exposure)
- Regular exercise

**Pharmacological**:
- SSRIs/SNRIs (paroxetine, venlafaxine) for persistent anxiety
- Benzodiazepines only short-term (addiction risk)
- Beta-blockers for physical symptoms

## Substance Use Disorder Management

### Assessment
- **CAGE questionnaire** (Alcohol):
  - Cut down attempts?
  - Annoyed by criticism?
  - Guilty about use?
  - Eye-opener drinks?

- **AUDIT** (Alcohol Use Disorders Identification Test): 10 questions, scores 0-40

- **NIDA Quick Screen** (all substances)

### Withdrawal Management

**Alcohol Withdrawal**:
- Symptoms: Tremor (6-12h), seizures (12-48h), delirium tremens (24-96h)
- Treatment: Benzodiazepines (chlordiazepoxide), thiamine, glucose, supportive care
- ICU if severe (delirium tremens)

**Opioid Withdrawal**:
- Symptoms: Anxiety, sweating, muscle aches, GI upset, insomnia (NOT life-threatening)
- Treatment: Methadone maintenance or buprenorphine substitution, symptomatic care
- Avoid abrupt cessation

### Rehabilitation & Recovery
- **Detoxification**: Medical management of withdrawal
- **Rehabilitation**: In-patient or out-patient programs
- **Pharmacotherapy**: Methadone/buprenorphine (opioids), naltrexone, acamprosate (alcohol)
- **Psychosocial**: Counseling, peer support groups, family therapy
- **Occupational therapy**: Skill-building, employment support

## Community-Based Mental Health Services

### Primary Care Role
- Early identification and diagnosis
- First-line treatment of common disorders
- Monitoring and follow-up
- Referral to specialists if needed

### Rehabilitation in Community
- Supported employment
- Peer support groups
- Family psychoeducation
- Gradual reintegration

### Stigma Reduction
- Community awareness programs
- Advocacy campaigns
- Involvement of affected individuals and families
- Training health workers in non-discriminatory care`,
        mnemonics: [
          {
            text: "DEPRESSION CRITERIA: Anhedonia/Depressed mood + 4-8 symptoms ≥2 weeks",
            explanation: "Diagnostic criteria for major depression"
          },
          {
            text: "SSRI TIMELINE: 2-4 weeks effect, 6-12 weeks full response, 6-12 months duration",
            explanation: "Antidepressant timeline expectation"
          },
          {
            text: "CAGE SCREENING: Cut down, Annoyed, Guilty, Eye-opener (alcohol abuse)",
            explanation: "Simple 4-question alcohol screening tool"
          },
          {
            text: "WITHDRAWAL: Alcohol (seizures, delirium), Opioids (physical but not life-threatening)",
            explanation: "Difference in alcohol vs opioid withdrawal severity"
          }
        ],
        keyPoints: [
          "MSE: Appearance, speech, mood/affect, thought content, perception, cognition, insight, judgment",
          "Depression: Mild-moderate treated in PHC with CBT + SSRI; severe requires psychiatrist referral",
          "SSRI first-line; effect at 2-4 weeks, full response 6-12 weeks; continue 6-12 months post-remission",
          "Anxiety: CBT and relaxation first-line; SSRIs for persistent; avoid benzos (addiction risk)",
          "Substance withdrawal: Alcohol (benzodiazepines, ICU if delirium); Opioid (buprenorphine, symptomatic)",
          "Community rehabilitation: Peer support, occupational therapy, family psychoeducation, stigma reduction"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Clinical Management - Mental Health", edition: "26th" },
          { book: "NMHP Program Guidelines", chapter: "District and Primary Care Implementation" }
        ]
      },
      {
        layer: 4,
        slug: "cm-mental-health-layer-4-exam",
        title: "Mental Health & Substance Abuse - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ preparation on NMHP, epidemiology, clinical diagnosis, and management.",
        contentMd: `# Mental Health & Substance Abuse - Exam Preparation

## High-Yield Facts

**NMHP Overview**:
- Launched 1978 (objectives: Availability, Knowledge, Community participation, Integration)
- Three-tier system: DMHC (district), CHC (community), PHC (primary)
- Community-based model with referral pathways

**Epidemiology**:
- 1 in 10 Indians mental illness
- Depression (35-40%), Anxiety (20-25%), Schizophrenia (1-2%)
- Alcohol 60%, Cannabis 15%, Tobacco most users
- Males 3-4× more substance abuse; Females more depression

**Depression Diagnosis**:
- Core: Depressed mood or anhedonia ≥2 weeks
- Plus 4-8 symptoms: Sleep, appetite, fatigue, guilt, concentration, motor, suicidal
- Mild (2-3), Moderate (4-5), Severe (6+) with possible psychosis

**Treatment First-Line**:
- Psychosocial: CBT, counseling, behavioral activation
- SSRI: Fluoxetine, sertraline, paroxetine (2-4 weeks effect, 6-12 weeks full)
- Duration: 6-12 months minimum post-remission

**Substance Use Disorders**:
- Dependence: Tolerance, withdrawal, continued use, loss of control
- Withdrawal: Alcohol (seizures, delirium tremens), Opioids (physical, non-lethal)
- Treatment: Detoxification, rehabilitation, pharmacotherapy, psychosocial

## Problem-Solving Cases

**Case 1: Depression Diagnosis**
- 35-year-old with 3 weeks depressed mood
- Sleep disturbance, fatigue, guilt, concentration difficulty
- Mild depression diagnosis
- Management: Counseling, CBT, supportive care (SSRI if persistent)

**Case 2: Anxiety Management**
- 28-year-old with 6 months excessive worry
- Tremor, palpitations, frequent urination
- Generalized anxiety diagnosis
- First-line: Relaxation, CBT, exercise (SSRI if persistent)

**Case 3: Alcohol Dependence**
- 45-year-old with morning tremor, blackouts
- CAGE score 3/4
- Alcohol dependence diagnosis
- Management: Assess withdrawal risk, benzodiazepines, thiamine, referral

## Analysis Topics

- Why NMHP emphasizes community-based care over hospital-only model
- Mechanisms of SSRI efficacy in depression
- Alcohol withdrawal more dangerous than opioid withdrawal
- Psychosocial interventions as first-line for anxiety`,
        mnemonics: [
          {
            text: "NMHP THREE-TIER: DMHC (psychiatrist, in-patient), CHC (psychologist, outpatient), PHC (health worker, counseling)",
            explanation: "Three-level service delivery structure"
          },
          {
            text: "DEPRESSION CORE PLUS: Anhedonia/Depressed + 4-8 symptoms ≥2 weeks",
            explanation: "Diagnostic criteria core and duration"
          },
          {
            text: "SSRI TIMELINE: Effect 2-4w, Full 6-12w, Continue 6-12m post-remission",
            explanation: "What to tell patient about antidepressant timeline"
          },
          {
            text: "ALCOHOL WITHDRAWAL DANGER: Seizures (12-48h), Delirium tremens (24-96h), ICU needed",
            explanation: "Potentially life-threatening withdrawal"
          }
        ],
        keyPoints: [
          "NMHP objectives: Availability, Knowledge application, Community participation, Integration, Stigma reduction",
          "Three-tier NMHP: DMHC (district), CHC (community), PHC (primary care) with referral pathways",
          "1 in 10 Indians mental illness; depression most common (35-40%)",
          "Depression mild-moderate treated in PHC with CBT + SSRI; severe → psychiatry",
          "Anxiety: First-line psychosocial (CBT, relaxation); SSRI for persistent",
          "Alcohol withdrawal (seizures, delirium) more dangerous than opioid withdrawal"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Mental Health Programs", edition: "26th" },
          { book: "NMHP Guidelines", chapter: "Service Delivery and Program Implementation" }
        ]
      },
      {
        layer: 5,
        slug: "cm-mental-health-layer-5-active-recall",
        title: "Mental Health & Substance Abuse - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall of NMHP program, depression diagnosis, substance withdrawal, and treatment principles.",
        contentMd: `# Active Recall - Mental Health & Substance Abuse

**Q1:** What are the five key objectives of the National Mental Health Program (NMHP) launched in 1982?
> 1) Ensure availability and accessibility of mental health care for all. 2) Encourage application of mental health knowledge in general healthcare. 3) Promote community participation in mental health development. 4) Integrate mental health with general healthcare. 5) Reduce stigma and discrimination against persons with mental illness.

**Q2:** Describe the three-tier service delivery system of NMHP in India.
> 1) District Mental Health Center (DMHC): Psychiatrist-led, in-patient and outpatient care for severe cases. 2) Community Health Center (CHC): Psychologist/mental health officer, outpatient care with referral to DMHC. 3) Primary Health Center (PHC): Trained health worker for identification, counseling, and referral to CHC/DMHC.

**Q3:** What is the epidemiology of mental illness in India according to NMHS 2016?
> 1 in 10 Indians (~100 million) suffer mental illness. Major disorders: Depression 35-40%, Anxiety 20-25%, Schizophrenia 1-2%, Substance abuse 10-15%. Mental health accounts for ~6% of DALYs. Women 1.5-2× more depression; Men 3-4× more substance abuse.

**Q4:** Describe the diagnostic criteria for major depressive disorder.
> Core: Depressed mood or anhedonia (loss of interest/pleasure) ≥2 weeks. Associated symptoms (need 4-8): Sleep disturbance, appetite change, fatigue, guilt/worthlessness, concentration difficulty, psychomotor changes, suicidal ideation. Severity: Mild (2-3 symptoms), Moderate (4-5), Severe (6+ with possible psychosis).

**Q5:** What is the first-line treatment approach for mild to moderate depression in primary care?
> Psychosocial first-line: Counseling, cognitive behavioral therapy (CBT), behavioral activation (engagement in activities), supportive care. SSRI (fluoxetine, sertraline, paroxetine) if moderate or symptoms persist. Timeline: Effect at 2-4 weeks, full response 6-12 weeks. Continue 6-12 months minimum after remission.

**Q6:** Explain the timeline and expected effects of SSRI antidepressants.
> SSRI effect: 2-4 weeks for initial effect (patient may notice mood improvement). 6-12 weeks for full therapeutic response. Full assessment of efficacy at 12 weeks. Minimum duration: 6-12 months after remission achieved. Abrupt discontinuation may cause withdrawal syndrome.

**Q7:** What is the difference between alcohol and opioid withdrawal in terms of severity and treatment?
> Alcohol withdrawal: Potentially life-threatening (tremor 6-12h, seizures 12-48h, delirium tremens 24-96h). Treatment: Benzodiazepines, thiamine, glucose, ICU if severe. Opioid withdrawal: Uncomfortable but not life-threatening (anxiety, sweating, muscle pain, GI upset). Treatment: Buprenorphine/methadone substitution, symptomatic care.

**Q8:** Define substance use dependence and list its diagnostic criteria.
> Dependence requires 3+ criteria: Tolerance (need more for effect), Withdrawal (physical symptoms if stopped), Continued use despite harmful effects, Loss of control over use, Time spent obtaining/using substance, Neglect of other activities/interests. Distinguished from hazardous use (risk without dependence).

**Q9:** Describe the role of community-based rehabilitation in mental health and substance abuse recovery.
> Community rehabilitation includes: Supported employment (occupational therapy, skill-building), Peer support groups (mutual support, shared experience), Family psychoeducation (educate families about condition and support), Gradual reintegration into community roles, Stigma reduction through community awareness and advocacy.

**Q10:** What is the CAGE questionnaire and how is it used for screening alcohol abuse?
> CAGE: Four questions: 1) Cut down attempts? 2) Annoyed by criticism? 3) Guilty about use? 4) Eye-opener drinks? Scoring: Each yes = 1 point. Score ≥2: Positive for alcohol abuse, requires further assessment. Simple, quick tool for primary care screening.`,
        mnemonics: [
          {
            text: "NMHP OBJECTIVES: Availability, Knowledge, Community, Integration, Eliminate stigma",
            explanation: "Five key objectives of National Mental Health Program"
          },
          {
            text: "DEPRESSION DIAGNOSIS: Anhedonia/Depressed + 4-8 symptoms ≥2 weeks",
            explanation: "Core criterion plus associated symptoms"
          },
          {
            text: "SSRI TIMELINE: 2-4 weeks effect, 6-12 weeks full, 6-12 months duration",
            explanation: "Patient expectation setting for antidepressants"
          },
          {
            text: "ALCOHOL WITHDRAWAL DANGER: 6-12h (tremor), 12-48h (seizures), 24-96h (delirium tremens)",
            explanation: "Timing of potentially life-threatening alcohol withdrawal"
          },
          {
            text: "CAGE SCREENING: Cut, Annoyed, Guilty, Eye-opener (≥2 = positive for alcohol abuse)",
            explanation: "Simple alcohol abuse screening questionnaire"
          }
        ],
        keyPoints: [
          "NMHP launched 1982; five objectives include integration, community participation, stigma reduction",
          "Three-tier: DMHC (district psychiatrist), CHC (community psychologist), PHC (primary health worker)",
          "1 in 10 Indians mental illness; depression most common; 6% of disease burden",
          "Depression: Core (anhedonia/depressed ≥2w) + 4-8 symptoms; treat psychosocial + SSRI in primary care",
          "SSRI: Effect 2-4w, full 6-12w, continue 6-12m post-remission",
          "Alcohol withdrawal life-threatening (seizures, delirium); opioid withdrawal uncomfortable but non-lethal"
        ],
        textbookRefs: [
          { book: "Park's Textbook of Preventive and Social Medicine", chapter: "Mental Health and Substance Abuse Programs", edition: "26th" },
          { book: "NMHP Program Implementation Guidelines", chapter: "District and Community-Based Services" }
        ]
      }
    ]
  }
];
