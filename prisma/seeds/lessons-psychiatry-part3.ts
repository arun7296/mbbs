import type { TopicLessons } from "./content-loader";

export const psychiatryPart3Lessons: TopicLessons[] = [
  {
    topicCode: "PS-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "psychiatric-assessment-mse-layer-1-foundation",
        title: "Psychiatric Assessment & MSE - Foundation",
        estimatedMinutes: 25,
        summary: "Mental Status Examination components, history taking, psychiatric interview techniques.",
        contentMd: `# Psychiatric Assessment & Mental Status Examination - Foundation

## Psychiatric Interview Principles
- **Empathy & rapport**: Essential for patient comfort and disclosure
- **Open-ended questions**: Allows patient to express concerns fully
- **Active listening**: Paraphrasing, summarizing shows understanding
- **Non-judgmental**: Acceptance of patient's experience without criticism
- **Confidentiality**: Reassure patient unless safety concern

## History Taking Framework
### Chief Complaint & Presenting Illness
- Onset: acute vs insidious, date
- Duration: weeks, months, years
- Progression: improving, static, worsening
- Precipitating factors: stressful events, substance use, medical illness
- Associated symptoms: full symptom timeline

### Personal History
- **Birth & development**: Pregnancy complications, birth weight, developmental milestones
- **Childhood**: Family atmosphere, schooling, bullying, trauma
- **Adolescence**: Peer relationships, substance use onset, behavioral changes
- **Adulthood**: Education, occupation, relationships, major life events

### Psychiatric History
- Prior episodes: When, duration, severity, hospitalization, treatment response
- Suicidal/homicidal ideation/attempts: When, method, intent, current risk
- Treatment: Medications tried, psychotherapy, outcomes

### Family History
- First-degree relatives: Depression, schizophrenia, bipolar, substance use, suicide
- Pattern: Early-onset illness suggests genetic vulnerability

### Medical History
- Chronic conditions: Diabetes, hypertension, asthma (psychiatric comorbidity)
- Medications: SSRIs, antipsychotics, steroids (psychiatric side effects)
- Surgeries: Complications, recovery issues
- Allergies: Drug reactions, adverse events

### Substance Use History
- Alcohol: Quantity, frequency, consequences (liver disease, accident risk)
- Illicit drugs: Type, frequency, route, addiction history
- Tobacco: Quantity, duration, withdrawal history
- Caffeine: Cups/day (can worsen anxiety)

## Mental Status Examination (MSE)
### Appearance & General
- **Grooming**: Well-groomed, neglected, disheveled (self-care indicator)
- **Hygiene**: Clean vs dirty clothing (negative symptoms, depression)
- **Dress**: Inappropriate (mania, disinhibition), unusual (thought disorder)
- **Eye contact**: Appropriate vs avoiding (anxiety, paranoia) vs excessive (mania)
- **Facial expression**: Animated vs flat affect (depression, schizophrenia)

### Behavior & Psychomotor Activity
- **Cooperation**: Friendly, irritable, suspicious, hostile
- **Psychomotor**: Normal vs retarded (depression, catatonia) vs agitated (mania, anxiety)
- **Mannerisms**: Stereotypies, grimacing (antipsychotic side effects or catatonia)
- **Violence risk**: Threatening gestures, aggressive tone, content about harming

### Speech
- **Rate**: Normal, tachyphonic (mania), bradyphonic (depression)
- **Volume**: Normal, loud (mania), quiet (depression)
- **Rhythm**: Smooth vs halting, stuttering
- **Tone**: Monotone (depression, schizophrenia), expressive (normal)
- **Coherence**: Clear vs disorganized, word salad (psychosis)

### Mood & Affect
- **Mood**: Subjective emotional state (dysphoric, euthymic, elevated, anxious)
- **Affect**: Objective emotional expression (restricted, blunted, flat, appropriate)
- **Congruence**: Does affect match content? (incongruent = psychosis risk)

### Thought Process
- **Organization**: Logical vs disorganized
- **Tangential**: Answers go off-topic, never return
- **Circumstantial**: Excessive detail, eventually gets to point
- **Flight of ideas**: Rapid jumping between topics, rhyming, associations
- **Word salad**: Incomprehensible mixing of words

### Thought Content
- **Delusions**: Fixed false beliefs (persecutory, grandiose, referential, somatic, nihilistic)
- **Hallucinations**: Perceptual experiences without stimulus (auditory, visual, tactile)
- **Obsessions**: Intrusive thoughts, ego-dystonic, cause distress
- **Suicidal ideation**: Current thoughts, plans, intent, access to means
- **Homicidal ideation**: Similarly assess intention and planning

### Cognition
- **Orientation**: Person, place, time, situation (abnormal in delirium)
- **Memory**: Immediate (digit span), short-term (recent events), long-term (name)
- **Attention/Concentration**: Digit span backward, serial 7s
- **Calculation**: Simple arithmetic (impaired in dementia, delirium)
- **Abstraction**: Proverb interpretation (impaired in psychosis, cognitive impairment)

### Insight & Judgment
- **Insight**: Awareness of illness ("Do you think you're ill?")
- **Judgment**: Decision-making, understanding consequences of actions
- **Reality testing**: Ability to distinguish reality from unreality`,
        mnemonics: [
          { text: "MSE domains: Appearance, Behavior, Speech, Mood/Affect, Thought (Process & Content), Cognition, Insight, Judgment", explanation: "8 domains" },
          { text: "Mood = subjective (what patient says), Affect = objective (what clinician observes)", explanation: "Mood vs Affect" },
          { text: "MMSE = 30-point score (≥23 normal, <23 possible cognitive impairment)", explanation: "Quick cognitive screen" },
          { text: "Suicide assessment: Intent, Plan, Means, Buffers (protective factors)", explanation: "Risk assessment" }
        ],
        keyPoints: [
          "Psychiatric interview requires empathy, active listening, non-judgmental stance, confidentiality",
          "History taking systematic: chief complaint, personal/family/medical/substance history, psychiatric history",
          "MSE objective, reproducible assessment of mental state; critical for diagnosis",
          "Mood (subjective) vs Affect (objective) distinction important; congruence critical",
          "Suicidal/homicidal ideation must be directly asked; assess intent, plan, access to means"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Psychiatric Assessment", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "The Psychiatric Interview and Mental Status Examination", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "psychiatric-assessment-mse-layer-2-mechanism",
        title: "Psychiatric Assessment & MSE - Mechanism",
        estimatedMinutes: 30,
        summary: "Neurocognitive basis, formal cognitive testing, correlation with brain regions.",
        contentMd: `# Psychiatric Assessment & MSE - Mechanism

## Neurocognitive Basis of MSE Components
### Mood/Affect Regulation (Limbic System)
- **Amygdala**: Fear, anxiety, emotional processing
- **Orbitofrontal cortex**: Emotional decision-making, reward processing
- **Anterior cingulate**: Conflict monitoring, emotion regulation
- **Dysfunction**: Depression (amygdala hyperactivity), anxiety (amygdala hyperactivity), affect dysregulation (prefrontal hypoactivity)

### Thought Process (Prefrontal Cortex)
- **DLPFC (Dorsolateral Prefrontal Cortex)**: Organizing thoughts, working memory
- **Anterior cingulate**: Cognitive control, monitoring
- **Superior temporal gyrus**: Language comprehension, semantic processing
- **Dysfunction**: Disorganized speech (temporal lobe), tangential thinking (prefrontal), flight of ideas (mania/hypofrontality)

### Cognition (Distributed Networks)
- **Prefrontal cortex**: Executive function, working memory, planning
- **Parietal cortex**: Attention, spatial processing
- **Temporal lobes**: Memory consolidation
- **Subcortical**: Thalamus (relay), basal ganglia (motor control)

### Psychomotor Activity (Basal Ganglia & Motor Cortex)
- **Basal ganglia**: Motor planning, movement initiation
- **Substantia nigra**: Dopamine production (motor control)
- **Subthalamic nucleus**: Motor inhibition
- **Dysfunction**: Retardation (dopamine ↓, depression), agitation (dopamine ↑, mania)

## Formal Cognitive Assessment Tools

### Mini-Mental State Examination (MMSE)
- **Domains**: Orientation (10), memory (3), attention (3), calculation (1), language (8), visual-spatial (1)
- **Score**: 30 points; ≥23 normal, 18-22 mild cognitive impairment, <18 moderate-severe
- **Limitations**: Language-dependent, education-biased, insensitive to frontal lobe dysfunction

### Montreal Cognitive Assessment (MoCA)
- **Domains**: Visuospatial, executive, memory, attention, language, orientation
- **Score**: 30 points; ≥26 normal, age-adjusted cutoffs
- **Advantage**: More sensitive to mild cognitive impairment than MMSE, includes executive function

### Mini-Cog
- **Brief**: 3-minute clock drawing test + 3-word recall
- **Purpose**: Screening for dementia in primary care
- **Advantage**: Quick, no equipment needed

### Wisconsin Card Sorting Test (WCST)
- **Measures**: Executive function, abstract reasoning, learning from feedback
- **Abnormal**: Perseveration (inability to switch sets), seen in frontal lobe dysfunction (schizophrenia, dementia)

## Psychometric Properties of MSE
### Reliability
- **Inter-rater reliability**: Varies by component (speech, affect most reliable; insight least)
- **Kappa coefficients**: 0.6-0.8 for most components (moderate-good agreement)
- **Training improves**: Standardized assessment tools improve reliability

### Validity
- **Construct validity**: MSE components predict underlying brain pathology
- **Criterion validity**: MSE findings correlate with imaging (SPECT, fMRI)
- **Discriminant validity**: MSE distinguishes psychosis from nonpsychotic disorders`,
        mnemonics: [
          { text: "MMSE 30 points: Orientation 10, Memory 3, Attention 3, Calculation 1, Language 8, Visuospatial 1", explanation: "Domain breakdown" },
          { text: "Affective symptoms = limbic (amygdala, ACC, OFC); Cognitive = prefrontal (DLPFC), parietal (attention), temporal (memory)", explanation: "Brain regions" },
          { text: "Psychomotor retardation = dopamine ↓; Agitation = dopamine ↑ (or anxiety/mania)", explanation: "Neurochemistry of activity" },
          { text: "Frontal lobe = executive, motor, personality; Temporal = memory, emotion; Parietal = attention; Occipital = vision", explanation: "Lobe-specific functions" }
        ],
        keyPoints: [
          "MMSE quick screening; MoCA more sensitive to mild cognitive impairment",
          "Mood/affect regulated by limbic system (amygdala, OFC, ACC); dysfunction in depression, anxiety, bipolar",
          "Thought process depends on prefrontal cortex organization; disorganized speech indicates cortical/temporal dysfunction",
          "Psychomotor activity correlates with dopamine levels: retardation in depression, agitation in mania",
          "Cognitive impairment indicates subcortical/cortical pathology; location determines specific deficits"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Cognitive Assessment", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Neuropsychological and Neuroimaging Assessments", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "psychiatric-assessment-mse-layer-3-clinical",
        title: "Psychiatric Assessment & MSE - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical application of MSE, interpretation, differential diagnosis based on findings.",
        contentMd: `# Psychiatric Assessment & MSE - Clinical

## Structured Diagnostic Interview Tools
### SCID-5 (Structured Clinical Interview for DSM-5)
- **Purpose**: Systematic assessment of DSM-5 diagnostic criteria
- **Domains**: Psychotic, mood, anxiety, substance use, neurodevelopmental, personality
- **Advantage**: High reliability, comprehensive; time-consuming

### Mini International Neuropsychiatric Interview (MINI)
- **Duration**: 15 minutes
- **Coverage**: Psychotic disorders, mood, anxiety, substance use, ADHD, personality
- **Use**: Rapid psychiatric screening in primary care

### PSYCH-K
- **Screening questionnaire**: Identifies likely psychiatric diagnoses
- **Brief**: 10-minute self-report

## Interpreting MSE Findings by Diagnosis

### Major Depression
- **Appearance**: Neglected grooming/hygiene, poor eye contact
- **Behavior**: Psychomotor retardation (slow movements, slow speech)
- **Speech**: Soft, slow, monotone
- **Mood/Affect**: Dysphoric mood, blunted/restricted affect, congruent
- **Thought process**: Organized but slowed
- **Thought content**: Guilt, hopelessness, suicidal ideation
- **Cognition**: Impaired attention/concentration (pseudo-dementia in older adults)
- **Insight/Judgment**: Intact

### Mania
- **Appearance**: Bright clothing, excessive makeup/jewelry, poor hygiene (grandiosity)
- **Behavior**: Psychomotor agitation, aggressive, irritable, distractible
- **Speech**: Fast (tachyphonia), loud, pressured, flight of ideas
- **Mood/Affect**: Elevated/expansive mood, incongruent affect (laughing inappropriately)
- **Thought process**: Tangential, flight of ideas, easily distracted
- **Thought content**: Grandiose delusions, decreased need for sleep (but feeling rested)
- **Cognition**: Racing thoughts, poor concentration due to distractibility
- **Insight/Judgment**: Poor (denies illness, poor judgment about risky behavior)

### Schizophrenia
- **Appearance**: Variable; may be disheveled, bizarre dress
- **Behavior**: Variable; may be withdrawn or agitated, violence risk
- **Speech**: Disorganized, incoherent, neologisms
- **Mood/Affect**: Flat/blunted affect, incongruent (laughing at sad content)
- **Thought process**: Loose associations, flight of ideas, thought blocking
- **Thought content**: Persecutory/grandiose delusions, hallucinations (usually auditory)
- **Cognition**: Disorganized, poor concentration
- **Insight/Judgment**: Very poor (denies psychosis)

### Anxiety Disorder
- **Appearance**: Normal grooming
- **Behavior**: May appear restless (akathisia), hypervigilant
- **Speech**: Normal rate but may stutter or stammer
- **Mood/Affect**: Anxious mood, appropriate affect
- **Thought process**: Logical but preoccupied with worry
- **Thought content**: Excessive worry, catastrophic thinking, but no delusions
- **Cognition**: Impaired concentration due to worry
- **Insight/Judgment**: Intact (recognizes anxiety is excessive)

### Delirium
- **Appearance**: May appear confused, disoriented
- **Behavior**: Agitated or withdrawn, variable throughout day (fluctuating)
- **Speech**: Disorganized, incoherent
- **Mood/Affect**: Variable, often frightened
- **Thought process**: Disorganized, incoherent
- **Thought content**: Hallucinations (often visual, tactile), delusions
- **Cognition**: DISORIENTED (critical finding), impaired memory, attention severely impaired
- **Key difference**: ACUTE onset, FLUCTUATING consciousness (unlike schizophrenia)

### Dementia
- **Appearance**: May be disheveled in advanced stages
- **Behavior**: Apathetic, may wander, personality changes
- **Speech**: Anomia (word-finding difficulty), repetitive
- **Mood/Affect**: Apathetic or irritable
- **Thought process**: Concrete, cannot abstract
- **Thought content**: May have delusions/hallucinations (later stages)
- **Cognition**: INSIDIOUS onset, PROGRESSIVE memory loss, disorientation (late), intact consciousness (unlike delirium)
- **Key difference**: CHRONIC/PROGRESSIVE, not acute fluctuating

## Risk Assessment

### Suicidal Risk
**Assessment components**:
- **Ideation**: Passive (wishing dead) vs active (wanting to die)
- **Plan**: Specificity, feasibility
- **Intent**: Determined to act vs ambivalent
- **Means**: Access to lethal methods (firearms, medications, pesticides)
- **Protective factors**: Family support, religious beliefs, future plans

**High-risk profile**: Male, age >40, depression, substance use, previous attempts, access to means, social isolation, medical illness

### Homicidal Risk
**Assessment components**:
- **Ideation**: Thoughts of harming others
- **Plan**: Specificity (who, when, how)
- **Intent**: Determined vs passive fantasy
- **Target**: Identified victim, specific relationship
- **Means**: Access to weapons
- **Motive**: Revenge, paranoia, command hallucinations

**Clinical judgment**: Duty to warn/protect if imminent risk (varies by jurisdiction)

## Special Populations

### Pediatric Assessment
- **Age-appropriate language**: Use simpler vocabulary, play-based assessment
- **Developmental stage**: Consider normal developmental behaviors (imaginary friends, magical thinking)
- **Parent/caregiver history**: Essential (children unreliable historians)
- **School functioning**: Academic, behavioral observations important

### Geriatric Assessment
- **Sensory impairment**: Hearing/vision loss may mimic cognitive impairment
- **Medical comorbidity**: Medications affecting mental state
- **Dementia screening**: Memory impairment, functional decline
- **Depression common**: Often underdiagnosed, presents atypically (somatic complaints)

### Substance Intoxication/Withdrawal
- **Intoxication**: Slurred speech, impaired cognition, emotional lability
- **Withdrawal**: Anxiety, tremor, hallucinations (alcohol), depression (stimulants)
- **Temporal relationship**: Crucial for distinguishing substance-induced from primary psychiatric`,
        mnemonics: [
          { text: "Depression MSE: Retarded, blunt affect, guilt/hopelessness, suicidal, poor grooming", explanation: "Classic presentation" },
          { text: "Mania MSE: Agitation, pressured speech, grandiose, incongruent affect, poor judgment", explanation: "Classic presentation" },
          { text: "Schizophrenia MSE: Disorganized, flat affect, hallucinations, paranoia, poor insight", explanation: "Classic presentation" },
          { text: "Delirium = ACUTE + FLUCTUATING + DISORIENTED (consciousness abnormal); Dementia = CHRONIC + PROGRESSIVE", explanation: "Key distinction" }
        ],
        keyPoints: [
          "MSE findings highly specific to diagnoses; patterns help narrow differential",
          "Affect congruence critical: incongruent suggests psychosis, congruent depression/anxiety",
          "Delirium acute with fluctuating consciousness, disorientation; dementia insidious, progressive, consciousness intact",
          "Suicide/homicide risk assessment essential; directly ask about intent, plan, means, protective factors",
          "Special populations (pediatric, geriatric) require age-adapted assessment and interpretation"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Application of MSE", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Psychiatric Examination in Different Settings", edition: "12th" }
        ]
      },
      {
        layer: 4,
        slug: "psychiatric-assessment-mse-layer-4-exam-prep",
        title: "Psychiatric Assessment & MSE - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield MSE findings, diagnostic patterns, common exam questions.",
        contentMd: `# Psychiatric Assessment & MSE - Exam Prep

## High-Yield MSE Patterns by Diagnosis

| Diagnosis | Key MSE Finding | Classic Presentation |
|-----------|-----------------|---------------------|
| Major Depression | Psychomotor retardation, blunted affect, guilt | Slowed speech, sad mood, guilt/hopelessness |
| Mania | Pressured speech, inflated affect, risky behavior | Tachyphonia, elevated mood, grandiose delusions |
| Schizophrenia | Flat affect, disorganized thinking, hallucinations | Incoherent, paranoid delusions, poor insight |
| Anxiety | Anxious mood, hypervigilance, intact insight | Worried appearance, tremor, acknowledges worry excessive |
| Delirium | ACUTE disorientation, FLUCTUATING consciousness | Confused, disoriented, variable attention |
| Dementia | PROGRESSIVE memory loss, insidious onset | Forgetfulness, difficulty with words, chronic course |

## MSE Components - High-Yield Facts
- **Blunted affect**: Loss of emotional range; speech low volume (depression, schizophrenia)
- **Restricted affect**: Narrower range but appropriate (anxiety, catatonia)
- **Flat affect**: Absence of emotional expression; monotone speech (schizophrenia, Parkinson's)
- **Inappropriate affect**: Laughing at sad content (psychosis, dementia)
- **Labile affect**: Rapid emotional shifts (organic brain syndrome, emotional dyscontrol)

## MSE Components - Thought Process
- **Tangential**: Answers never return to original question (schizophrenia)
- **Circumstantial**: Gets to point but via excessive detail (mania, anxiety)
- **Flight of ideas**: Rapid jumping between loosely connected ideas (mania)
- **Loose associations**: Ideas lack logical connections (schizophrenia)
- **Thought blocking**: Sudden interruption of thoughts; patient loses track (schizophrenia)
- **Perseveration**: Repetition of previous response despite new question (brain damage, catatonia)

## MSE Components - Thought Content
- **Delusions**: Fixed false beliefs; types by content (persecutory, grandiose, referential, somatic, nihilistic)
- **Hallucinations**: Perceptions without stimulus; auditory most common in schizophrenia; visual in delirium/dementia
- **Obsessions**: Intrusive thoughts, ego-dystonic, cause anxiety (OCD)
- **Compulsions**: Repetitive behaviors to reduce anxiety (OCD)
- **Magical thinking**: Belief that thoughts can affect external events (schizotypal, psychosis)
- **Ideas of reference**: Belief that external events have special meaning directed at self (paranoia, schizotypal)

## MMSE Quick Reference
- **30 points total**: Orientation 10, Memory 3, Attention 3, Calculation 1, Language 8, Visuospatial 1
- **≥23 normal**: <23 suggests cognitive impairment
- **Limitations**: Education-dependent, language-dependent, insensitive to frontal dysfunction
- **Clock drawing test**: Good screening for visuospatial, executive dysfunction

## Cognitive Screening Tools Comparison
| Tool | Time | Domains | Sensitivity | Use |
|------|------|---------|-------------|-----|
| MMSE | 5-10m | Global | Moderate | Quick screen |
| MoCA | 10m | Global + executive | High | Better than MMSE |
| Mini-Cog | 3m | Memory, executive | Moderate | Primary care screening |
| FAB | 8m | Executive only | High | Frontal lobe assessment |

## Common Exam Questions
**Q1: Patient with slowed speech, psychomotor retardation, blunted affect, guilt. Most likely diagnosis?**
A: Major Depression - classic presentation

**Q2: Pressured speech, flight of ideas, grandiose delusions, increased energy. Diagnosis?**
A: Mania (Bipolar I current manic episode)

**Q3: Disorganized incoherent speech, flat affect, auditory hallucinations, poor insight. Diagnosis?**
A: Schizophrenia (positive and negative symptoms)

**Q4: ACUTE confusion, disorientation, FLUCTUATING consciousness. What's different from dementia?**
A: This is DELIRIUM (acute onset, fluctuation); dementia is insidious, progressive, consciousness intact

**Q5: MMSE score 18. What does this indicate?**
A: Mild-moderate cognitive impairment (score <23 abnormal)

**Q6: Patient laughing while talking about death of family member. What's this?**
A: Inappropriate affect (incongruent) - suggests psychosis, dementia, or organic brain syndrome

**Q7: Patient keeps repeating first answer even though question changed. What's this?**
A: Perseveration (impaired cognitive flexibility; brain pathology, catatonia)

**Q8: Patient states "The TV is sending me messages." What's this?**
A: Ideas of reference (paranoid thinking; schizophrenia, paranoid personality)

**Q9: How differentiate restricted vs flat affect?**
A: Restricted = narrower emotional range but still present; Flat = absent emotional expression`,
        mnemonics: [
          { text: "Depression: Retard (psychomotor), Blunt affect, Guilt, Hopelessness, Suicide", explanation: "Classic MSE" },
          { text: "Mania: Pressured speech, Flight of ideas, Grandiose, Risky, Irritable", explanation: "Classic MSE" },
          { text: "Schizophrenia: Disorganized, Flat affect, Hallucinations, Paranoia, Poor insight", explanation: "Classic MSE" },
          { text: "Delirium vs Dementia: Delirium = ACUTE+FLUCTUATING; Dementia = CHRONIC+PROGRESSIVE", explanation: "Key distinction" }
        ],
        keyPoints: [
          "MSE patterns highly specific; Depression (retarded, blunt), Mania (pressured, grandiose), Schizophrenia (disorganized, paranoid)",
          "Affect congruence critical: incongruent affect (laughing at sad) suggests psychosis; congruent with mood normal",
          "Delirium acute with fluctuating consciousness and disorientation; dementia insidious with progressive memory loss",
          "MMSE score <23 indicates cognitive impairment; MoCA more sensitive than MMSE for mild impairment",
          "Suicide/homicide risk must be directly assessed: intent, plan, means, protective factors"
        ],
        textbookRefs: [
          { book: "ICD-10 Clinical Descriptions", chapter: "MSE and Diagnostic Assessment", edition: "10th" },
          { book: "DSM-5 Manual", chapter: "Psychiatric Interview and Mental Status Examination", edition: "5th" }
        ]
      },
      {
        layer: 5,
        slug: "psychiatric-assessment-mse-layer-5-active-recall",
        title: "Psychiatric Assessment & MSE - Active Recall",
        estimatedMinutes: 20,
        summary: "10 case scenarios testing MSE interpretation and differential diagnosis.",
        contentMd: `# Psychiatric Assessment & MSE - Active Recall

## Q1: Depression with Pseudo-Dementia
**Case**: 72-year-old woman with 3-month gradual memory loss, difficulty concentrating, slow speech. Daughter concerned about dementia.
**Q**: How differentiate depression-induced cognitive impairment from dementia via MSE?
A: **Depression key findings**: Recent onset (3 months vs years), blunted affect, depressed mood prominent, guilt/hopelessness present. **MSE detail**: Psychomotor retardation (slow responses), "Don't know" answers (vs factually wrong in dementia), complains of memory loss, depressed affect. **Dementia**: Insidious onset over years, unaware of memory loss (anosognosia), factually incorrect answers. **MMSE**: May score <23 in both; but depression pattern = mood-driven cognition. **Management**: Treat depression; cognitive improvement expected with antidepressants. **Test response**: Depressed cognition reversible; dementia progressive.

## Q2: Mania vs ADHD - Differentiation
**Case**: 19-year-old college student with 2-week pressured speech, racing thoughts, goal-directed activity (started 3 new projects), risky sex, decreased need for sleep (3 hrs, feeling rested). Also reports lifelong ADHD diagnosis, impulsivity since childhood.
**Q**: How differentiate first manic episode from ADHD exacerbation?
A: **Manic episode key**: ACUTE onset (2 weeks), distinct change from baseline (previously not this extreme), decreased need for sleep (rested despite little sleep - unique to mania), pressured speech, flight of ideas, grandiose thinking likely. **ADHD**: Lifelong pattern, not episodic, no distinct mood episodes, normal sleep needs (just difficulty settling). **Differentiation**: Temporal pattern critical - mania = ACUTE episodic change; ADHD = chronic baseline. **MSE findings**: Mania = flight of ideas, grandiosity, incongruent affect; ADHD = attention problems, impulsivity but organized thinking. **Management**: First manic episode = mood stabilizer (lithium, valproate); ADHD = stimulant. **Critical learning**: 20% ADHD patients have comorbid bipolar disorder; temporal onset distinguishes.

## Q3: Psychotic Disorder vs Autism Spectrum
**Case**: 24-year-old man with lifelong social withdrawal, difficulty with eye contact, takes words literally, restricted interests (trains - extensive knowledge). Now reports hearing voice say his name occasionally, believes others talking about him.
**Q**: Distinguish autism spectrum from emerging psychotic disorder?
A: **Autism spectrum key**: Lifelong onset (not acute), social reciprocity difficulty, repetitive behaviors, literal language interpretation, restricted interests (this patient's train obsession). **Psychosis key**: Acute/recent hallucinations and delusions, no lifelong pattern. **This case**: Autism spectrum with possible psychotic symptoms (hallucinations, ideas of reference new). **Differentiation**: Autism = developmental disorder (lifelong); Psychosis = illness (episodic acute). **MSE**: Autism = normal affect (may be socially inappropriate but not emotionally blunted), organized thinking, no hallucinations. Psychosis = may have blunted affect, disorganized thinking, clear hallucinations/delusions. **Management**: Autism needs social support, structured environment. If psychotic symptoms confirmed, low-dose antipsychotic appropriate (autism-comorbid psychosis possible). **Learning**: Autism spectrum and psychosis can coexist; separate assessment needed.

## Q4: Delirium Superimposed on Dementia
**Case**: 80-year-old man with baseline dementia (forgets recent events, difficulty with words). Admitted to hospital for pneumonia. Now acutely confused, disoriented to place/time (was oriented yesterday), talking to people not present (hallucinating), agitated, FLUCTUATING attention (periods of clarity then confusion).
**Q**: What's happening and why critical to identify?
A: **Delirium superimposed on dementia**. Key findings: **Acute onset** (admission day), **fluctuating consciousness** (hour-to-hour changes), **visual hallucinations** (common in delirium), **disorientation** (new or worsened). **Baseline dementia**: Baseline memory loss, difficulty with words (chronic). **Critical**: Delirium is REVERSIBLE if underlying cause treated (infection, medication, metabolic imbalance). **Management**: (1) Identify cause - check CXR (pneumonia), CBC (infection), electrolytes, urinalysis, medications (anticholinergics worsen delirium); (2) Treat underlying condition (antibiotics for pneumonia); (3) Support care (reorientation, safe environment, avoid sedation if possible); (4) Low-dose antipsychotic if severely agitated. **Why critical**: Delirium = medical emergency; high mortality if untreated. Families often think dementia worsened (not true - delirium temporary).

## Q5: Affect Incongruence - Red Flag for Psychosis
**Case**: 32-year-old woman describes dead cat on doorstep (sad topic) but laughs while describing. Reports neighbor poisoning her. No depressed mood, no elation.
**Q**: Why is affect incongruence significant?
A: **Incongruence = big red flag for psychosis**. Normal: Affect matches mood/content (sad topic = sad expression). This patient: Laughing about sad content + paranoid delusions (neighbor poisoning). **Significance**: Suggests thought disorder, psychosis. **Other causes**: Dementia, traumatic brain injury, organic brain syndrome. **MSE finding**: Document exactly - "Flat affect while describing poisoning delusions" or "Inappropriate laughter when discussing persecutory beliefs." **Differential**: (1) Schizophrenia (most common with affect incongruence), (2) Bipolar with psychosis, (3) Organic brain syndrome. **Management**: Antipsychotic needed; rule out organic causes first (imaging, labs).

## Q6: Flight of Ideas vs Loose Associations
**Case-A**: Manic patient: "I'm going to Vegas to gamble, the cards are in my favor, favors remind me of Italian food, I love Italy, Rome is eternal, eternal means forever, forever young..." (rhyming, connected loosely by association). **Case-B**: Schizophrenic patient: "The government is watching me through the TV. Breakfast is the most important meal. My mother likes purple." (no connection between ideas).
**Q**: Differentiate these thought disorders?
A: **Flight of ideas (Case-A)**: Ideas ARE connected but by loose associations (words rhyme, semantic link); thought pattern visible. Typical of mania/hypomania. **Loose associations (Case-B)**: Ideas UNCONNECTED, no logical or semantic link; thought pattern disorganized. Typical of schizophrenia. **Clinical distinction**: Flight of ideas = mania (can follow associative chains even if loose); Loose associations = schizophrenia (completely unrelated ideas). **MSE documentation**: Flight = "Patient jumping between topics with loose connections (Vegas→cards→Italian→Rome)" vs Loose = "Patient expressing unrelated ideas without connecting theme (government→breakfast→mother)." **Prognosis**: Flight of ideas reversible with mood stabilization. Loose associations chronic in schizophrenia.

## Q7: Suicide Risk Assessment - Intent vs Ideation
**Case**: 42-year-old depressed man reports "I've been thinking it would be better if I wasn't around, maybe I could take pills." When asked about plan: "I don't have a real plan, just thoughts. I have my 10-year-old daughter who needs me."
**Q**: Assess suicide risk - high vs low?
A: **Suicidal ideation present**: Yes (thoughts of not being around, passive ideation). **Plan**: Vague (mentions pills but no specifics - obtain? timing?). **Intent**: Key question: "Are you planning to hurt yourself?" Answer: Implies NO intent, reluctance. **Protective factors**: Daughter (strong protective factor). **Risk level**: MODERATE - ideation + vague plan, but ambivalent, has protective factors. **Management**: (1) Directly ask: "Are you planning to take action on these thoughts?" (2) Assess access to means (pills at home?); (3) Increase monitoring (follow-up in 1-2 days); (4) Optimize antidepressant; (5) Psychotherapy. **Not hospitalization-level** (intent low, protective factors strong) unless intent escalates. **Learning**: Ideation ≠ Intent. Passive ideation + protective factors = lower risk than active plan + intent + access to means.

## Q8: MMSE vs MoCA - When to Use Which
**Case-A**: 78-year-old with memory complaints, otherwise functioning well. Primary care needs quick screen.
**Case-B**: 65-year-old with subtle cognitive decline, history of transient ischemic attack (TIA). Concerned about mild cognitive impairment.
**Q**: Which tool for which case?
A: **Case-A (MMSE)**: Quick primary care screening, 5 minutes, detects moderate-severe impairment. **Score interpretation**: ≥23 normal, 18-22 mild, <18 moderate-severe. Limitation: May miss mild impairment. **Case-B (MoCA)**: Better for detecting mild cognitive impairment, includes executive function (sensitive to vascular dementia risk post-TIA), 10 minutes. **Score interpretation**: ≥26 normal, 18-25 mild, <18 moderate. **Advantage**: MoCA superior sensitivity to mild impairment, includes visuospatial (clock drawing). **Clinical use**: MoCA becoming standard for early detection; MMSE still widely used for quick screening. **Learning**: Choose based on clinical context - MMSE for quick screen, MoCA when mild impairment suspected.

## Q9: Tangential vs Circumstantial Thinking
**Case-A**: Asked "What brought you to the hospital?" Answers: "Well, I woke up with chest pain, which reminds me, my grandmother had a heart attack, she lived in New York, have you been to New York..." (never returns to original question).
**Case-B**: Asked "What brought you to the hospital?" Answers: "I woke up, checked the time, was 6 AM, had breakfast, felt ill, dressed myself, drove here, took the highway, hospital is on the east side..." (eventually gets to point but with excessive detail).
**Q**: Differentiate tangential from circumstantial?
A: **Tangential (Case-A)**: Loses track of original topic; goes on tangent (New York). **Never returns** to answer question. Typical of schizophrenia, ADHD. **Circumstantial (Case-B)**: Gets to point but takes scenic route with excessive detail. **Eventually returns** to original question. Typical of mania (flight of ideas variant), anxiety (rumination). **MSE documentation**: Tangential = "Unable to return to topic, goes on tangents"; Circumstantial = "Indirect, with excessive detail, but eventually reaches point." **Clinical significance**: Tangential more disorganized (schizophrenia risk), circumstantial more verbose (mania, anxiety). **Prognosis**: Tangential harder to treat; circumstantial may improve with treatment.

## Q10: Catatonia Examination
**Case**: 35-year-old woman unresponsive to commands. Stands in peculiar posture (arms outstretched), does not blink, shows waxy flexibility (examiner can move her arm, it stays in new position), mutism.
**Q**: What's this? How assess for catatonia?
A: **Catatonia**: Psychomotor disorder with mutism, immobility/rigidity, waxy flexibility, posturing, negativism. **Key signs**: (1) Waxy flexibility = passive resistance to passive movement (arm moves, holds position - characteristic), (2) Mutism = no speech, (3) Negativism = resistance to commands, (4) Posturing = assumption of unusual body positions, (5) Stupor = reduced responsiveness. **Bush-Francis Catatonia Rating Scale**: Standardized assessment (14 items). **Causes**: Schizophrenia, mood disorders (depression with catatonic features, bipolar), medical (encephalitis, metabolic, neuroleptic malignant syndrome). **Management**: (1) Rule out organic causes (CT brain, labs, infection screen); (2) Benzodiazepine trial (lorazepam) - if responds = confirms catatonia; (3) If severe → electroconvulsive therapy (ECT); (4) Antipsychotic if psychotic component. **Learning**: Catatonia rare but serious; benzodiazepine challenge diagnostic and therapeutic.`,
        mnemonics: [
          { text: "Depression = Retarded, Blunt affect, Guilt, Hopelessness", explanation: "MSE pattern" },
          { text: "Mania = Pressured speech, Flight of ideas, Grandiose, Risky", explanation: "MSE pattern" },
          { text: "Schizophrenia = Disorganized, Flat affect, Hallucinations, Paranoia", explanation: "MSE pattern" },
          { text: "Delirium = ACUTE + FLUCTUATING + DISORIENTED; Dementia = CHRONIC + PROGRESSIVE", explanation: "Key distinction" }
        ],
        keyPoints: [
          "MSE findings highly specific to diagnoses; Depression (retarded, blunt), Mania (pressured, grandiose), Schizophrenia (disorganized)",
          "Affect incongruence (laughing at sad) is red flag for psychosis; distinguish from appropriate congruent affects",
          "Delirium acute with fluctuating consciousness and disorientation; dementia insidious with progressive memory loss",
          "Tangential thought (never returns to topic) suggests schizophrenia; circumstantial (verbose but returns) suggests mania",
          "Suicide assessment: Ideation ≠ Intent. Assess intent, plan, means, protective factors; passive ideation + protective factors = lower risk"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "MSE Clinical Case Scenarios", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Clinical Assessment and Diagnostic Formulation", edition: "12th" }
        ]
      }
    ]
  }
];
