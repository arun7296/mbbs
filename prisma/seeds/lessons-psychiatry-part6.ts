import type { TopicLessons } from "./content-loader";

export const psychiatryPart6Lessons: TopicLessons[] = [
  {
    topicCode: "PS-MOD-02-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "depressive-disorders-layer-1-foundation",
        title: "Depressive Disorders - Foundation",
        estimatedMinutes: 25,
        summary: "Definition, epidemiology, DSM-5/ICD-10 criteria, major depression vs dysthymia.",
        contentMd: `# Depressive Disorders - Foundation

## Definition & Epidemiology
- **Depression**: Persistent depressed mood or anhedonia with associated neurovegetative symptoms
- **Prevalence**: 5-10% lifetime risk (women 2:1 men); higher in developing countries
- **Age of onset**: Bimodal (early 20s, mid-50s); can start any age
- **Course**: 50% relapsing, 20% chronic, 30% single episode
- **Disability**: Second leading cause of disability worldwide (WHO)

## Major Depressive Disorder (MDD) - DSM-5
**Diagnostic Criteria**: ≥5 symptoms × ≥2 weeks (one must be mood/anhedonia)
1. Depressed mood (nearly every day)
2. Anhedonia (loss of pleasure)
3. Appetite/weight change (↓ or ↑)
4. Sleep disturbance (insomnia or hypersomnia)
5. Psychomotor retardation/agitation
6. Fatigue/low energy
7. Guilt/worthlessness
8. Concentration difficulty
9. Suicidal ideation/intent/plan

## Persistent Depressive Disorder (Dysthymia) - DSM-5
- **Depressed mood ≥2 years** (1 year children/adolescents)
- **≥2 symptoms** during mood disturbance
- **Never symptom-free >2 months**
- **More chronic, less severe than MDD**

## ICD-10 Depressive Episode Categories
- **Mild**: 2-3 symptoms + functional impairment mild
- **Moderate**: 4+ symptoms + functional impairment moderate
- **Severe without psychosis**: 4-5 symptoms + severe impairment
- **Severe with psychosis**: Psychotic features (mood-congruent delusions/hallucinations)

## Depressive Subtypes
- **Melancholic**: Early morning awakening, guilt, appetite/weight loss
- **Atypical**: Hypersomnia, hyperphagia, mood reactivity, fatigue
- **Catatonic**: Psychomotor retardation/excitement, mutism, waxy flexibility
- **Peripartum**: Onset pregnancy or 4 weeks postpartum
- **Seasonal**: Pattern with season change`,
        mnemonics: [
          { text: "MDD = ≥5 symptoms × ≥2 weeks (one: mood/anhedonia); Dysthymia = ≥2 symptoms × ≥2 years", explanation: "Diagnostic distinction" },
          { text: "Depression most common psychiatric disorder; women 2:1; second leading disability cause", explanation: "Epidemiology" },
          { text: "Melancholic = morning awakening + guilt; Atypical = hypersomnia + hyperphagia; Seasonal = pattern", explanation: "Subtypes" },
          { text: "Depression with psychosis = mood-congruent delusions (worthlessness, poverty, guilt)", explanation: "Psychotic features" }
        ],
        keyPoints: [
          "MDD requires ≥5 symptoms (one mood/anhedonia) for ≥2 weeks; psychotic features possible",
          "Dysthymia chronic low-grade depression ≥2 years; less severe than MDD but longer duration",
          "Female predominance 2:1; higher rates in developing countries",
          "Suicidality critical assessment: ideation, intent, plan, means, protective factors",
          "Subtypes guide treatment: melancholic (antidepressant), atypical (SSRI), seasonal (light therapy)"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Depressive Disorders", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Depressive Disorders", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "depressive-disorders-layer-2-mechanism",
        title: "Depressive Disorders - Mechanism",
        estimatedMinutes: 30,
        summary: "Neurotransmitter dysfunction, neuroplasticity, genetic factors, stress-diathesis model.",
        contentMd: `# Depressive Disorders - Mechanism

## Monoamine Hypothesis
- **Serotonin (5-HT)**: Reduced activity in mood regulation circuits
- **Norepinephrine (NE)**: Deficiency in attention, arousal, motivation
- **Dopamine (DA)**: Reduced in reward, motivation, psychomotor activity
- **Mechanism**: Antidepressants increase monoamine availability (reuptake inhibition)

## Brain Circuit Dysfunction
### Ventral Striatum (Reward) Hypoactivity
- **Reduced reward responsiveness** - anhedonia
- **Motivation/energy deficits** - avolition, fatigue
- **Treatment**: SSRIs, dopaminergic agents

### Prefrontal Cortex (Cognition) Dysfunction
- **Executive dysfunction**: Planning, decision-making impaired
- **Rumination**: Repetitive negative thoughts (overactive in depression)
- **Hyperactivity of subgenual cingulate** linked to rumination

### Amygdala (Emotion) Hyperactivity
- **Negative emotion processing**: Overactive to sad/threat stimuli
- **Hypervigilance**: Increased attention to negative information
- **Consequence**: Rumination, negative bias

## Genetic Factors
- **Heritability**: 30-40% (less than schizophrenia/bipolar)
- **Gene-environment interaction**: Genetic vulnerability + stressors → depression
- **5-HTTLPR polymorphism**: Serotonin transporter gene; risk allele increases depression risk with stress

## Stress-Diathesis Model
- **Diathesis** (predisposition): Genetic vulnerability, early trauma, personality
- **Stress** (trigger): Life stressors (loss, trauma, medical illness, job loss)
- **Depression results** when stress exceeds coping capacity in vulnerable individual

## HPA Axis Dysfunction
- **Cortisol elevation**: Chronic stress → hyperactive HPA axis
- **Negative feedback loss**: Normal cortisol suppression impaired
- **Consequence**: Sleep disruption, immune suppression, metabolic dysfunction`,
        mnemonics: [
          { text: "5-HT ↓ = mood; NE ↓ = attention/energy; DA ↓ = reward/motivation", explanation: "Monoamine roles" },
          { text: "Ventral striatum ↓ = anhedonia; Prefrontal cortex rumination; Amygdala ↑ = negative bias", explanation: "Circuit dysfunction" },
          { text: "Heritability 30-40%; Gene-environment interaction critical", explanation: "Genetic contribution" },
          { text: "HPA axis hyperactivity → cortisol ↑ → sleep ↓, immune ↓", explanation: "Stress response" }
        ],
        keyPoints: [
          "Monoamine hypothesis: 5-HT, NE, DA deficiency explain symptoms; antidepressants restore balance",
          "Brain circuits: Hypoactive reward (anhedonia), prefrontal (rumination), hyperactive amygdala (negative bias)",
          "Genetic vulnerability moderate (30-40%); stress-diathesis model explains onset",
          "HPA axis hyperactivation chronic; cortisol elevation disrupts sleep, immune, metabolism",
          "Neuroplasticity changes with chronicity; early treatment prevents structural brain changes"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Neurobiology of Mood Disorders", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Neurobiological Basis of Depression", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "depressive-disorders-layer-3-clinical",
        title: "Depressive Disorders - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical presentation, assessment, differential diagnosis, management strategies.",
        contentMd: `# Depressive Disorders - Clinical

## Clinical Presentation by Symptom Domain

### Mood & Affect
- **Depressed mood**: "Empty, hopeless, worst I've felt"
- **Affect**: Blunted, restricted, congruent with mood
- **Diurnal variation**: Often worse mornings (melancholic)

### Neurovegetative Symptoms
- **Sleep**: Insomnia (early morning worst) vs hypersomnia (atypical)
- **Appetite/weight**: Decreased (melancholic) or increased (atypical)
- **Energy**: Fatigue, psychomotor retardation
- **Sexual function**: Decreased libido

### Cognitive Symptoms
- **Negative thoughts**: Guilt, worthlessness, hopelessness
- **Concentration**: Poor focus, memory impairment
- **Cognitive style**: Negative bias, rumination, hopelessness

### Suicidality Assessment
- **Ideation**: Passive (wishing dead) vs active (planning harm)
- **Intent**: Determined vs ambivalent
- **Plan**: Specificity, feasibility, access to means
- **High-risk features**: Male, age >40, prior attempts, access to means, social isolation

## Assessment Tools
- **PHQ-9** (Patient Health Questionnaire): 9-item self-report; score ≥10 indicates depression
- **HAM-D** (Hamilton Depression Rating Scale): 17-item clinician-rated
- **Beck Depression Inventory**: 21-item self-report

## Differential Diagnosis

| Diagnosis | Distinguishing Feature | Duration |
|-----------|------------------------|----------|
| MDD | ≥5 symptoms (one mood/anhedonia) | ≥2 weeks |
| Dysthymia | ≥2 symptoms | ≥2 years |
| Adjustment disorder | Stressor-related, limited symptoms | <3 months after stressor |
| Bipolar depression | Prior manic/hypomanic episodes | Variable |
| Substance-induced | Temporal relation to drug use | During use |
| Medical (hypothyroidism) | Physical findings, labs abnormal | Depends on condition |

## Management - Integrated Approach

### First-Line Pharmacotherapy
- **SSRIs**: Sertraline, paroxetine, fluoxetine (60-70% response)
- **SNRIs**: Venlafaxine, duloxetine
- **Others**: Bupropion (NDRI; good for fatigue, sexual dysfunction)
- **Onset**: 2-4 weeks, full response 8-12 weeks

### Psychotherapy
- **CBT**: Gold standard; cognitive restructuring, behavioral activation
- **IPT**: Interpersonal therapy; addresses relationships, grief
- **Efficacy**: 60-70% remission, comparable to medication

### Behavioral Interventions
- **Exercise**: Regular aerobic exercise depression-reducing (30 min 3x/week)
- **Sleep hygiene**: Critical for mood regulation
- **Social activation**: Behavioral activation combats anhedonia/isolation
- **Routine establishment**: Structured daily schedule improves mood

### Hospitalization Indications
- **Imminent suicide risk** (intent + plan + means)
- **Psychotic depression** (suicidal risk very high)
- **Severe functional impairment** (unable to self-care)
- **Medical comorbidity** affecting safety`,
        mnemonics: [
          { text: "Depression assessment: PHQ-9 ≥10 (mild-moderate), ≥20 (severe)", explanation: "Screening tool" },
          { text: "MDD ≥5 × ≥2w; Dysthymia ≥2 × ≥2y; Adjustment <3m after stressor", explanation: "Diagnostic distinctions" },
          { text: "SSRI 2-4w onset, 60-70% response; CBT 60-70% efficacy", explanation: "Treatment response" },
          { text: "Suicide risk: Assess Ideation, Intent, Plan, Means, Protective factors", explanation: "Risk assessment" }
        ],
        keyPoints: [
          "MDD diagnosis requires ≥5 symptoms (one mood/anhedonia) for ≥2 weeks; assess functional impairment",
          "SSRI + psychotherapy most effective combination; either alone achieves 60-70% remission",
          "Suicidal risk assessment critical: 10-15% lifetime suicide rate in untreated MDD",
          "Early intervention prevents chronicity, suicide, disability; first episode critical for prognosis",
          "Behavioral interventions (exercise, activation, sleep) as important as medication/therapy"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Management of Depression", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Depressive Disorders: Assessment and Treatment", edition: "12th" }
        ]
      },
      {
        layer: 4,
        slug: "depressive-disorders-layer-4-exam-prep",
        title: "Depressive Disorders - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield diagnostic criteria, treatment algorithms, exam questions.",
        contentMd: `# Depressive Disorders - Exam Prep

## Diagnostic Criteria Quick Reference
- **MDD**: ≥5 symptoms × ≥2 weeks (one: mood/anhedonia)
- **Dysthymia**: ≥2 symptoms × ≥2 years, never >2m symptom-free
- **PHQ-9 scoring**: ≥10 (mild-moderate), ≥20 (severe)
- **Suicide screening**: ALWAYS assess ideation, intent, plan, means
- **Response timeline**: Week 2-4 physical improvement, 8-12 weeks mood improvement`,
        mnemonics: [
          { text: "MDD ≥5 × 2w, Dysthymia ≥2 × 2y, Adjustment <3m post-stressor", explanation: "Criteria" },
          { text: "SSRI 60-70%, CBT 60-70%, Combination best", explanation: "Treatment efficacy" },
          { text: "Suicidal risk: high if Intent + Plan + Means + No protective factors", explanation: "Risk assessment" },
          { text: "Psychotic depression = mood-congruent delusions; suicide risk very high", explanation: "Emergency features" }
        ],
        keyPoints: [
          "MDD vs Dysthymia: Duration (2w vs 2y), severity (≥5 vs ≥2 symptoms)",
          "Non-response: <20% improvement 8-12 weeks; try augmentation or switch",
          "Postpartum depression: SSRI safe with breastfeeding; suicide/infanticide risk assessment critical",
          "Seasonal depression: Light therapy 10,000 lux mornings first-line",
          "Treatment-resistant depression: ECT gold standard (80% response)"
        ],
        textbookRefs: [
          { book: "ICD-10 Clinical Descriptions", chapter: "Depressive Disorders", edition: "10th" },
          { book: "DSM-5 Manual", chapter: "Depressive Disorders", edition: "5th" }
        ]
      },
      {
        layer: 5,
        slug: "depressive-disorders-layer-5-active-recall",
        title: "Depressive Disorders - Active Recall",
        estimatedMinutes: 20,
        summary: "10+ clinical scenarios testing diagnosis and management.",
        contentMd: `# Depressive Disorders - Active Recall

## Q1: MDD with Psychosis + Suicidality
**Case**: 55-year-old with 1-month depressed mood, guilt, worthlessness, insomnia, hearing voice saying "kill yourself," believes he caused wife's illness.
**Q**: Diagnosis and urgency?
A: **MDD with psychotic features + active suicidal ideation** = EMERGENCY. Suicide risk 30-40%. **Management**: Immediate hospitalization, antipsychotic + antidepressant, daily risk assessment, consider ECT.

## Q2: Dysthymia with Superimposed MDD
**Case**: 42-year-old with 8-year low mood (2-3 symptoms), now 3-week acute worsening (5 symptoms).
**Q**: Diagnosis?
A: **Dysthymia (baseline) + superimposed MDD (acute episode)**. Requires antidepressant; longer to treat than MDD alone.

## Q3: Melancholic vs Atypical
**Case-A**: Early morning awakening, weight loss, guilt, psychomotor retardation. **Case-B**: Hypersomnia, weight gain, hyperphagia, fatigue.
**Q**: Subtypes and treatment?
A: **Case-A: Melancholic** - responds to TCA or bupropion. **Case-B: Atypical** - responds to SSRI/MAOI.

## Q4: SSRI Non-Response
**Case**: 48-year-old on sertraline 100mg × 8 weeks, <10% improvement.
**Q**: Next step?
A: Increase dose OR add augmentation (bupropion, buspirone) OR switch antidepressant. 30-50% respond to second agent.

## Q5: Postpartum Depression
**Case**: 28-year-old, 3 weeks postpartum, severe depression with thought "baby would be better without me."
**Q**: Management?
A: **Psychiatric emergency**. SSRI safe with breastfeeding; assess suicide/infanticide risk; hospitalization if severe.

## Q6: Suicidality Risk Stratification
**Case-A**: Passive ideation, vague method, strong protective factor (children), no access. **Case-B**: Clear intent, plan, means available, timeline.
**Q**: Hospitalization decision?
A: **Case-A**: Outpatient with close follow-up, optimize antidepressant. **Case-B**: IMMEDIATE HOSPITALIZATION.

## Q7: Medical Comorbidity
**Case**: 60-year-old with depression, fatigue, weight gain, elevated TSH.
**Q**: What's the differential?
A: **Both hypothyroidism AND depression**. Treat thyroid first, add antidepressant if depression persists.

## Q8: Treatment-Resistant Depression
**Case**: 52-year-old, 6 antidepressants tried, <20% improvement.
**Q**: Next?
A: **TRD diagnosis** (≥2 adequate trials failed). **First-line**: ECT (80% response). Also consider: TMS, ketamine, augmentation strategies.

## Q9: Seasonal Affective Disorder
**Case**: 35-year-old winter depression Nov-March (hypersomnia, hyperphagia, fatigue), full recovery spring.
**Q**: Management?
A: **SAD diagnosis**. Light therapy 10,000 lux 30m mornings first-line (60-80% response). Prophylactic SSRI if severe.

## Q10: SSRI Discontinuation Syndrome
**Case**: 42-year-old on paroxetine × 2 years, stopped abruptly. Day 2: severe anxiety, dizziness, electric shock, diarrhea.
**Q**: Management?
A: **Serotonin discontinuation syndrome**. Restart paroxetine, then slow taper 10%/week. Always taper SSRI, never abrupt.`,
        mnemonics: [
          { text: "Psychotic depression = suicide risk very high; requires hospitalization, antipsychotic + antidepressant", explanation: "Emergency" },
          { text: "PHQ-9 screening: ≥10 mild-moderate, ≥20 severe; useful for primary care", explanation: "Assessment" },
          { text: "TRD = ≥2 adequate trials failed; ECT gold standard 80% response rate", explanation: "Resistant depression" },
          { text: "Peripartum depression: SSRI safe, suicide/infanticide risk HIGH, hospitalization consideration", explanation: "Special population" }
        ],
        keyPoints: [
          "MDD ≥5 symptoms (one mood/anhedonia) × ≥2 weeks; 10-15% suicide lifetime risk",
          "SSRI + CBT most effective; either alone 60-70% response; augmentation/switch if non-response",
          "Melancholic vs Atypical subtypes guide treatment choice (TCA vs SSRI)",
          "Postpartum depression serious; SSRI safe; suicide/infanticide assessment essential",
          "Seasonal depression light therapy first-line; TRD ECT gold standard"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Depressive Disorders: Advanced Cases", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Depressive Disorders: Comprehensive Management", edition: "12th" }
        ]
      }
    ]
  }
];
