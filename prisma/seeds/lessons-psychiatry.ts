import type { TopicLessons } from "./content-loader";

export const psychiatryLessons: TopicLessons[] = [
  // PS-MOD-02-TOP-01: Schizophrenia
  {
    topicCode: "PS-MOD-02-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "schizophrenia-layer-1-foundation",
        title: "Schizophrenia - Foundation",
        estimatedMinutes: 25,
        summary: "Definition, epidemiology, diagnostic criteria, positive and negative symptoms.",
        contentMd: `# Schizophrenia - Foundation

## Definition & Epidemiology
- **Schizophrenia**: Chronic psychotic disorder characterized by delusions, hallucinations, disorganized behavior
- **Prevalence**: 1% lifetime risk across populations, 5-10/10,000 in India
- **Age of onset**: Typically 15-40 years (peak 20-25 years males, 25-30 females)
- **Gender ratio**: Equal prevalence, but earlier onset in males
- **Course**: Often chronic/relapsing, with progressive social/occupational decline if untreated

## DSM-5 Diagnostic Criteria
Requires ≥2 of the following for ≥1 month (1 must be delusions, hallucinations, or disorganized speech):
1. **Delusions**: Fixed false beliefs not corrected by evidence
2. **Hallucinations**: Perceptions without external stimulus (most commonly auditory)
3. **Disorganized speech**: Tangential, circumstantial, or incoherent
4. **Disorganized or catatonic behavior**: Unpredictable agitation, mutism, waxy flexibility
5. **Negative symptoms**: Diminished emotional expression, avolition, alogia

## Positive vs Negative Symptoms
### Positive Symptoms (Additive, "Adding on" abnormal content)
- **Delusions**: Persecutory (most common), grandiose, referential, somatic, nihilistic
- **Hallucinations**: Auditory (70-80%, often voices giving commands), visual, olfactory, gustatory
- **Formal thought disorder**: Loose associations, flight of ideas, word salad
- **Behavioral disturbance**: Agitation, unpredictability

### Negative Symptoms (Subtractive, "Loss of" normal functioning)
- **Alogia**: Poverty of speech/thought
- **Avolition**: Loss of motivation, apathy
- **Anhedonia**: Inability to feel pleasure
- **Affective flattening**: Restricted emotional range
- **Alogic**: Inability to organize thoughts logically

## ICD-11 Diagnostic Criteria (Indian Standard)
- Prominent psychotic symptoms (delusions, hallucinations, perceptual disturbances)
- Functional decline
- Duration ≥1 month (or ≥2 weeks if symptoms extremely severe)
- Other causes excluded

## Clinical Subtypes (ICD-10 Context)
- **Paranoid**: Delusions/hallucinations prominent; relatively good prognosis
- **Disorganized (Hebephrenic)**: Disorganized behavior/speech; poor prognosis
- **Catatonic**: Psychomotor disturbance; rare in modern era
- **Undifferentiated**: Meets criteria but no predominant subtype`,
        mnemonics: [
          { text: "DDHDN = Delusions, Disorganized speech, Hallucinations, Disorganized behavior, Negative symptoms (need ≥2)", explanation: "Diagnostic criteria mnemonic" },
          { text: "Positive symptoms = abnormal additions (delusions, hallucinations), Negative = abnormal subtractions (alogia, avolition, anhedonia, affective flattening)", explanation: "Symptom classification" },
          { text: "1% lifetime risk, 5-10/10,000 India, peak onset 20-25M/25-30F", explanation: "Epidemiology" },
          { text: "Paranoid (best prognosis) > Undifferentiated > Disorganized (worst), Catatonic (rare)", explanation: "Subtype prognosis" }
        ],
        keyPoints: [
          "Schizophrenia requires ≥2 psychotic symptoms for ≥1 month; 1 must be specific (delusions/hallucinations/disorganized speech)",
          "Positive symptoms (delusions, hallucinations, disorganized behavior) respond better to antipsychotics than negative symptoms",
          "Negative symptoms (alogia, avolition, anhedonia) associated with poor functional outcome and treatment resistance",
          "Equal gender prevalence but earlier onset in males; relapsing-remitting course common",
          "Premorbid decline in functioning (school/work performance) often precedes first psychotic episode"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Schizophrenia and Related Disorders", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Schizophrenia Spectrum and Other Psychotic Disorders", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "schizophrenia-layer-2-mechanism",
        title: "Schizophrenia - Mechanism",
        estimatedMinutes: 30,
        summary: "Neurobiological basis, neurotransmitter hypothesis, neuroimaging findings, genetic factors.",
        contentMd: `# Schizophrenia - Mechanism

## Neurotransmitter Hypothesis
### Dopamine Hypothesis (Primary)
- **Mesolimbic pathway**: Elevated dopamine → positive symptoms (delusions, hallucinations)
  - Explains therapeutic effect of dopamine antagonists (antipsychotics)
  - Reward dysregulation leads to aberrant salience (attributing significance to irrelevant stimuli)
- **Mesocortical pathway**: Reduced dopamine in prefrontal cortex → negative symptoms (alogia, avolition)
  - Explains cognitive deficits, poor executive function
  - Resistant to typical antipsychotics (dopamine blockade worsens prefrontal hypoactivity)
- **Nigrostriatal pathway**: Dopamine blockade by antipsychotics → extrapyramidal side effects

### Glutamate Hypothesis (NMDA Receptor)
- **Glutamatergic hypofunction**: Reduced NMDA receptor signaling
- **Evidence**: Phencyclidine (PCP), ketamine (NMDA antagonists) produce schizophrenia-like psychosis
- **Relevance**: Explains cognitive deficits, negative symptoms (not responsive to dopamine antagonists)
- **Therapeutic target**: Glycine, D-serine (NMDA co-agonists) enhance glutamate signaling

### Other Neurotransmitter Abnormalities
- **GABA hypofunction**: Reduced inhibitory control; parvalbumin-positive interneurons affected
- **Serotonin**: 5-HT dysfunction may contribute to cognitive/mood symptoms
- **Acetylcholine**: Nicotinic receptor dysfunction (explains high smoking rates)

## Brain Structural Abnormalities
### Gray Matter Changes
- **Lateral ventricular enlargement**: Non-specific but consistent finding
- **Reduced prefrontal cortex volume**: Particularly dorsolateral prefrontal cortex (DLPFC)
- **Hippocampal changes**: Reduced volume; memory/emotion dysfunction
- **Temporal lobe abnormalities**: Superior temporal gyrus (language processing), amygdala
- **Thalamus**: Reduced volume; relay station for sensory information
- **Progressive changes**: Some gray matter loss progressive during illness course

### White Matter Changes
- **Reduced integrity**: Decreased white matter in frontal-temporal connections
- **Tractography findings**: Disrupted fiber tracts (superior longitudinal fasciculus, uncinate fasciculus)
- **Consequence**: Poor communication between brain regions (integration deficit theory)

## Functional Brain Abnormalities
### Neuroimaging Findings
- **Hypofrontality**: Reduced prefrontal cortex activation during cognitive tasks
- **Hyperactivity in limbic regions**: Excessive amygdala/striatum activation
- **Disrupted connectivity**: Poor integration between prefrontal cortex and limbic system (salience network dysfunction)
- **Default mode network (DMN) dysfunction**: Abnormal at-rest brain activity patterns

## Genetic Factors
### Heritability
- **Concordance**: Monozygotic 45-50%, dizygotic 15-20%
- **Heritability estimate**: 60-80% (highly heritable; environmental factors also important)
- **Inheritance pattern**: Polygenic (multiple genes, not single Mendelian inheritance)

### High-Risk Genes
- **DISC1** (Disrupted in Schizophrenia 1): Synaptic plasticity, neurogenesis
- **NRG1** (Neuregulin-1): NMDA receptor modulation
- **COMT** (Catechol-O-methyltransferase): Dopamine metabolism; Val158Met polymorphism
- **Neuregulin-ErbB signaling**: Glutamate neurotransmission
- **Copy number variations (CNVs)**: 22q11 deletion, 1q21 duplication increase risk

### Gene-Environment Interaction
- **Genetic vulnerability** + **environmental stress** = schizophrenia onset
- **Environmental risk factors**: Prenatal (maternal infection, nutritional deficiency), perinatal (birth complications, hypoxia), postnatal (cannabis use adolescence, urban living, migration, childhood trauma)

## Neuropathology
### Cytoarchitectural Abnormalities
- **Reduced dendritic spine density**: Particularly in prefrontal cortex (synaptic loss)
- **Altered pyramidal neuron organization**: Disorganized cortical lamination
- **Reduced soma size**: Cortical neurons appear smaller
- **Glial abnormalities**: Reduced oligodendrocytes, astrocytes (myelin dysfunction)

### Developmental Neurobiology
- **Neurodevelopmental hypothesis**: Schizophrenia reflects disrupted brain development
- **Abnormal synaptic pruning**: Excessive adolescent pruning of synapses (normally occurs ages 12-25)
- **Excessive dopamine release**: Mesolimbic system hypersensitivity to stress
- **Prefrontal maturation lag**: Prefrontal cortex (executive function) slower to mature

## Integrative Models
### Salience Network Dysfunction
- **Aberrant salience**: Brain attributes excessive significance to irrelevant stimuli
- **Mechanism**: Hyperactive anterior insula/ventral striatum + hypoactive prefrontal cortex
- **Explains**: Delusions (misattribution of meaning), negative symptoms (devaluation of reward)

### Cognitive Dysmetria
- **Integration deficit**: Poor cerebellar-cerebral coordination
- **Consequence**: Failure to integrate sensory input, memory, emotion
- **Clinical result**: Disorganized thinking, hallucinations`,
        mnemonics: [
          { text: "Dopamine dysregulation: Mesolimbic UP (positive symptoms), Mesocortical DOWN (negative symptoms), Nigrostriatal blocked (EPS)", explanation: "Pathway-specific effects" },
          { text: "Gray matter: Ventricles enlarged, Prefrontal reduced, Hippocampus small, Temporal abnormal", explanation: "Structural changes" },
          { text: "Heritability 60-80%, Monozygotic 45-50%, Dizygotic 15-20% concordance", explanation: "Genetic contribution" },
          { text: "Developmental hypothesis: Excessive adolescent pruning + prefrontal lag = psychosis", explanation: "Developmental model" }
        ],
        keyPoints: [
          "Dopamine hyperactivity in mesolimbic system causes positive symptoms; hypofunctioning in mesocortical system causes negative symptoms",
          "Glutamate hypofunction at NMDA receptors contributes to cognitive deficits and treatment-resistant negative symptoms",
          "Brain imaging shows reduced prefrontal volume, enlarged ventricles, hippocampal abnormalities, disrupted connectivity",
          "Highly heritable (60-80%) but polygenic; multiple genes + environmental stress required for illness onset",
          "Neurodevelopmental model: excessive adolescent synaptic pruning + prefrontal maturation lag + stress = psychosis"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Neurobiology of Schizophrenia", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Neurobiological Basis of Psychotic Disorders", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "schizophrenia-layer-3-clinical",
        title: "Schizophrenia - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical presentation, prodromal phase, diagnostic assessment, differential diagnosis, management.",
        contentMd: `# Schizophrenia - Clinical

## Clinical Presentation Phases

### Premorbid Phase
- **Subtle personality changes**: Social withdrawal, poor hygiene, academic decline
- **Duration**: Months to years before first psychotic episode
- **Not diagnostic**: Gradual onset; changes only noticed retrospectively

### Prodromal Phase (At-Risk Mental State)
- **Attenuated psychotic symptoms**: Vague ideas of reference, illusions (not full delusions/hallucinations)
- **Cognitive decline**: Poor concentration, memory problems
- **Social/occupational decline**: Withdrawal from activities
- **Duration**: Weeks to months
- **Significance**: 20-40% convert to psychosis within 2 years
- **Clinical pearl**: Early intervention during prodrome improves outcome

### First Episode Psychosis (FEP)
- **Acute presentation**: Rapid onset delusions, hallucinations, disorganized behavior
- **Duration of untreated psychosis (DUP)**: Time from symptom onset to treatment (median 1-2 years in India; longer delays worsen prognosis)
- **Stressors often present**: May be precipitated by cannabis use, sleep deprivation, interpersonal conflict
- **Treatment response**: 60-70% respond to first antipsychotic trial

### Maintenance Phase
- **Chronic course**: Relapsing-remitting (70%), continuous (20%), or single episode remission (10%)
- **Residual symptoms**: Even on medication, negative symptoms, cognitive deficits persist
- **Progressive decline**: Social/occupational functioning gradually worsens (social drift)

## Clinical Features by Symptom Type

### Positive Symptoms (Presentation)
#### Delusions
- **Persecutory** (most common, ~50%): Beliefs of being spied on, plotted against
- **Referential**: Neutral events have special meaning directed at patient (TV program speaking to them)
- **Grandiose**: Inflated self-worth, special powers, famous identity
- **Somatic**: Fixed beliefs about body (organs rotting, insects in skin)
- **Nihilistic**: Denial of reality (limb doesn't exist, organs nonfunctional)

#### Hallucinations
- **Auditory** (70-80%): Most common; often voices commenting, criticizing, giving commands
  - Second/third person voices (referential)
  - Running commentary (narrative)
  - Command hallucinations (dangerous if violent commands)
- **Visual**: Less common; rarely purely visual (usually with auditory)
- **Olfactory/gustatory**: Rare; often unpleasant
- **Tactile**: Formication (feeling of insects on skin)

#### Formal Thought Disorder (Disorganized Speech)
- **Loose associations**: Thoughts jump from one idea to unrelated idea
- **Tangential thinking**: Answers question but goes off-topic, never returns
- **Circumstantial**: Excessive detail; eventually gets to point
- **Flight of ideas**: Rapid speech, rhyming, clang associations
- **Word salad**: Incomprehensible mixture of words
- **Neologisms**: Made-up words

### Negative Symptoms (Consequence)
- **Alogia**: Poverty of speech; minimal spontaneous speech, brief responses
- **Avolition**: Loss of motivation; inability to initiate goal-directed activity
- **Anhedonia**: Inability to experience pleasure; loss of interest in activities
- **Affective flattening**: Restricted emotional range; monotone voice, blank face
- **Social withdrawal**: Avoidance of social contact

### Cognitive Symptoms
- **Executive dysfunction**: Poor planning, decision-making, organizing
- **Working memory deficits**: Difficulty holding information temporarily
- **Processing speed**: Slowed thinking, slow responses
- **Verbal fluency**: Difficulty generating words
- **Attention/concentration**: Distractibility, difficulty sustaining focus

## Diagnostic Assessment

### Mental Status Examination Findings
- **Appearance/behavior**: May be disheveled, unmotivated, psychomotor retardation or agitation
- **Speech**: Disorganized, coherence impaired, rate variable
- **Mood/affect**: Affect flattened or incongruent; mood may be dysphoric
- **Thought process**: Loose associations, tangential, circumstantial
- **Thought content**: Delusions, hallucinations, ideas of reference
- **Cognition**: Alert but poor attention/concentration; disorientation rare (differentiates from delirium)
- **Insight**: Typically absent ("I'm not ill, they're out to get me")
- **Judgment**: Impaired; poor reality testing

### Diagnostic Criteria (ICD-10 & DSM-5)
**ICD-10**: Characteristic psychotic symptoms + social/occupational decline + duration ≥1 month + exclusion of organic causes, substance, mood disorders

**DSM-5**: ≥2 symptoms for ≥1 month (1 must be delusions/hallucinations/disorganized speech) + ≥6 months total (including prodromal) + functional impairment + exclusion of other causes

## Differential Diagnosis

| Diagnosis | Distinguishing Feature |
|-----------|------------------------|
| Brief Psychotic Disorder | Psychosis <1 month |
| Schizophreniform | Psychosis 1-6 months |
| Delusional Disorder | Delusions only; no hallucinations, other psychotic symptoms |
| Mood Disorder with Psychosis | Psychosis only during mood episodes (mania/depression) |
| Substance-Induced Psychosis | Temporal relationship to drug use; resolves with abstinence |
| Psychosis due to Medical Condition | Clear medical cause (infection, seizure, tumor) |
| Autism Spectrum Disorder | Onset childhood; social deficits lifelong; no psychosis |
| Delirium | Acute onset, fluctuating consciousness, disorientation, inattention |

## Management

### First-Episode Psychosis (FEP) Approach
1. **Comprehensive assessment**: Medical/neurological exam, labs (CBC, electrolytes, thyroid, prolactin), neuroimaging (MRI brain to rule out organic causes)
2. **Antipsychotic initiation**: Start low-dose first-generation (FGA) or second-generation antipsychotic (SGA)
   - **SGAs preferred**: Lower EPS risk; risperidone, olanzapine, aripiprazole common choices
   - **FGAs alternative**: Haloperidol if cost-limiting (common in India)
   - **Response**: 60-70% respond to first trial; partial responders at 6 weeks → increase dose or switch
3. **Psychosocial interventions**: Family psychoeducation, cognitive therapy, occupational rehabilitation
4. **Coordinated specialty care (CSC)**: Team approach (psychiatrist, psychologist, social worker, peer specialist)

### Maintenance Phase
- **Antipsychotic**: Long-acting injectables (LAIs) improve adherence
- **Psychosocial**: Cognitive remediation, social skills training, occupational therapy
- **Relapse prevention**: Family intervention, stress management, substance avoidance
- **Comorbidity management**: Depression, anxiety, substance use common

### Special Considerations
- **Cannabis**: Associated with earlier onset, worse prognosis; cessation critical
- **Substance use**: Dual diagnosis common; integrated treatment needed
- **Suicidal ideation**: 10% lifetime suicide rate; screen at every visit
- **Metabolic monitoring**: Antipsychotics cause weight gain, hyperglycemia, dyslipidemia; regular monitoring essential`,
        mnemonics: [
          { text: "Premorbid → Prodromal → First Episode → Maintenance (4 phases of illness)", explanation: "Disease course" },
          { text: "Positive: Delusions (Persecutory, Referential, Grandiose, Somatic, Nihilistic), Hallucinations, Disorganized speech", explanation: "Positive symptom types" },
          { text: "Negative: Alogia, Avolition, Anhedonia, Affective flattening (AAAA), plus social withdrawal", explanation: "Negative symptom mnemonic" },
          { text: "DUP (Duration of Untreated Psychosis): Longer DUP = worse prognosis; early intervention critical", explanation: "Clinical pearl" }
        ],
        keyPoints: [
          "Prodromal phase identifies at-risk individuals; early intervention during this phase improves long-term outcome",
          "First-episode psychosis optimal treatment window; rapid antipsychotic initiation essential (60-70% respond)",
          "Negative symptoms and cognitive deficits persist despite antipsychotics; drive long-term disability",
          "Duration of untreated psychosis (DUP) major predictor of outcome; reduce DUP through early detection programs",
          "Second-generation antipsychotics preferred for first-episode (lower EPS risk); LAIs improve adherence in maintenance"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Management of Schizophrenia", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Schizophrenia: Clinical Presentation and Diagnostic Evaluation", edition: "12th" }
        ]
      },
      {
        layer: 4,
        slug: "schizophrenia-layer-4-exam-prep",
        title: "Schizophrenia - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, diagnostic criteria, treatment algorithms, common exam questions.",
        contentMd: `# Schizophrenia - Exam Prep

## High-Yield Quick Facts
- **Prevalence**: 1% lifetime risk globally; 5-10/10,000 in India
- **Onset**: Peak 20-25M, 25-30F (males earlier)
- **Gender ratio**: Equal
- **Course**: 70% relapsing-remitting, 20% continuous, 10% single episode remission
- **Suicide rate**: 10% lifetime (screen every visit)
- **Treatment response**: 60-70% first antipsychotic; 20-30% treatment-resistant

## Diagnostic Criteria Quick Reference

### ICD-10 (Used in India)
- **Code**: F20 (paranoid F20.0, disorganized F20.1, catatonic F20.2, undifferentiated F20.3)
- **Duration**: ≥1 month characteristic symptoms + social/occupational decline
- **Exclusions**: Organic brain disease, substance use, mood disorder

### DSM-5
- **≥2 of 5 symptoms** (1 must be delusions/hallucinations/disorganized speech):
  1. Delusions
  2. Hallucinations
  3. Disorganized speech
  4. Disorganized/catatonic behavior
  5. Negative symptoms
- **Duration**: ≥1 month (≥6 months total including prodrome)
- **Functional impairment required**

## Key Diagnostic Distinctions

| Diagnosis | Duration | Key Features | Prognosis |
|-----------|----------|-------------|-----------|
| Brief Psychotic | <1 month | Acute psychosis, often stressor-related | Excellent |
| Schizophreniform | 1-6 months | Meets schizophrenia criteria but shorter duration | Good (50% convert) |
| Schizophrenia | ≥6 months | Meets criteria + functional decline | Guarded (chronic) |
| Delusional Disorder | ≥1 month | ONLY delusions; no hallucinations/disorganization | Better than schizophrenia |

## Neurotransmitter Abnormalities (Exam Focus)

### Dopamine Dysregulation (Most Important)
- **Mesolimbic**: ↑ dopamine → positive symptoms (responds to dopamine antagonists)
- **Mesocortical**: ↓ dopamine → negative symptoms, cognitive deficits (worsens with dopamine blockade)
- **Nigrostriatal**: dopamine ↓ by antipsychotics → EPS

### Other Mechanisms
- **Glutamate hypofunction**: NMDA antagonist model; explains cognitive deficits (non-dopamine responsive)
- **GABA dysfunction**: Reduced inhibitory control

## Antipsychotic Treatment

### First-Generation (Typical) Antipsychotics
- **Examples**: Haloperidol, chlorpromazine, fluphenazine
- **Mechanism**: D2 dopamine antagonism
- **Efficacy**: Good for positive symptoms; poor for negative symptoms/cognitive
- **Side effects**: High EPS risk, tardive dyskinesia, neuroleptic malignant syndrome (NMS)
- **Cost**: Cheap (preferred in resource-limited India settings)

### Second-Generation (Atypical) Antipsychotics
- **Examples**: Risperidone, olanzapine, quetiapine, aripiprazole
- **Mechanism**: D2 antagonism + 5-HT2A antagonism
- **Efficacy**: Better for negative symptoms/cognitive; improved EPS profile
- **Side effects**: Weight gain, metabolic syndrome, prolactin elevation (risperidone > olanzapine > aripiprazole)
- **Aripiprazole**: Partial D2 agonist; least metabolic side effects

### Treatment-Resistant Schizophrenia (TRS)
- **Definition**: <20% symptom reduction after 2 adequate antipsychotic trials (6-8 weeks at therapeutic doses)
- **Prevalence**: 20-30% of patients
- **Management**: Clozapine (superior for TRS; require blood monitoring WBC)

### Long-Acting Injectables (LAIs)
- **Indications**: Poor adherence, relapse prevention, maintenance
- **Examples**: Paliperidone palmitate (monthly), fluphenazine decanoate (3-weekly)
- **Advantage**: Improved adherence, fewer relapses

## Common Exam Questions & Answers

**Q1: 25-year-old man with 2-month history of hearing voices commanding him to hurt himself, fixed belief that neighbors plotting against him, disorganized speech. No prior psychiatric illness. Diagnosis?**
A: **Schizophreniform disorder** (not schizophrenia yet; <6 months duration). Meets psychotic symptom criteria ≥1 month. Prognosis depends on conversion likelihood.

**Q2: Which finding best differentiates schizophrenia from delusional disorder?**
A: **Hallucinations absent in delusional disorder** (delusions only). Schizophrenia requires ≥2 symptoms (can include hallucinations).

**Q3: Negative symptom example that responds LEAST to dopamine antagonists?**
A: **All negative symptoms** relatively resistant to typical antipsychotics (dopamine blockade worsens prefrontal hypofunction). SGAs slightly better; psychosocial interventions primary.

**Q4: Which antipsychotic has LOWEST metabolic side effects?**
A: **Aripiprazole** (partial D2 agonist; minimal weight/glucose effects) > quetiapine > risperidone > olanzapine (highest metabolic risk).

**Q5: 28-year-old with schizophrenia on haloperidol develops fever, rigidity, confusion. Most likely diagnosis?**
A: **Neuroleptic Malignant Syndrome (NMS)** - medical emergency. STAT: stop haloperidol, supportive care, dantrolene/bromocriptine, ICU monitoring.

**Q6: What is Duration of Untreated Psychosis (DUP)?**
A: **Time from symptom onset to antipsychotic initiation**. Longer DUP = worse prognosis (progressive brain changes). India median DUP 1-2 years (high due to stigma, access barriers).

**Q7: 30-year-old man on risperidone for 2 years reports amenorrhea, sexual dysfunction. Most likely cause?**
A: **Hyperprolactinemia** - risperidone highest EPS/prolactin risk among SGAs. Options: switch to aripiprazole, add dopamine agonist, reduce dose.

**Q8: Which phase has best treatment response?**
A: **First-episode psychosis** - 60-70% respond to first antipsychotic; never-treated psychosis better prognosis than chronic cases.

## Clinical Pearl Mnemonics
- **Dopamine hypothesis**: Meso-Limbic UP = Psychosis; Meso-Cortical DOWN = Negative
- **FGA vs SGA**: FGA = cheap, high EPS; SGA = better negative symptom/cognitive response, more metabolic side effects
- **Duration matters**: <1m = brief, 1-6m = schizophreniform, >6m = schizophrenia
- **Treatment targets**: Positive (dopamine antagonists) vs Negative (psychosocial, low-dose dopamine) ≠ same treatment
- **Relapse prevention**: Antipsychotic adherence critical; LAIs useful; family intervention improves outcomes`,
        mnemonics: [
          { text: "Diagnostic timeline: <1m = Brief, 1-6m = Schizophreniform, ≥6m = Schizophrenia", explanation: "Duration-based classification" },
          { text: "Mesolimbic ↑ DA = positive symptoms; Mesocortical ↓ DA = negative symptoms; Nigrostriatal = EPS", explanation: "Pathway-specific effects" },
          { text: "FGA cheap+high EPS; SGA better negative/cognitive but metabolic risk; Aripiprazole least metabolic", explanation: "Treatment comparison" },
          { text: "DUP = Duration of Untreated Psychosis; longer = worse outcome; reduce through early detection", explanation: "Clinical importance" }
        ],
        keyPoints: [
          "Schizophrenia requires ≥2 psychotic symptoms (one specific) for ≥1 month; distinguish from schizophreniform (<6m) and brief psychotic (<1m)",
          "Dopamine hypothesis: hyperactivity mesolimbic (positive), hypoactivity mesocortical (negative); explains treatment response heterogeneity",
          "Second-generation antipsychotics preferred first-line (lower EPS, better negative symptom/cognitive response); cost may limit in India",
          "Treatment-resistant schizophrenia (20-30% prevalence): defined as <20% improvement after 2 adequate trials; clozapine gold standard",
          "Duration of untreated psychosis (DUP) critical prognostic factor; median 1-2 years India; early intervention improves long-term outcome"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Schizophrenia: Diagnosis and Treatment", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Treatment of Schizophrenia", edition: "12th" }
        ]
      },
      {
        layer: 5,
        slug: "schizophrenia-layer-5-active-recall",
        title: "Schizophrenia - Active Recall",
        estimatedMinutes: 20,
        summary: "12 diagnostic cases, differential diagnosis scenarios, treatment decisions.",
        contentMd: `# Schizophrenia - Active Recall

## Q1: First-Episode Psychosis vs Medical Cause
**Case**: 19-year-old man with 1-week sudden onset delusions of persecution, hearing voices. Temperature 38.2C, neck stiffness, photophobia.
**Q**: What's your immediate action before diagnosing schizophrenia?
A: **Lumbar puncture** to rule out meningitis/encephalitis. Fever + meningeal signs = medical emergency. Psychosis due to medical condition must be excluded. **Learning**: Always perform medical/neurological exam in first psychotic episode; fever, focal neurological signs, sudden onset suggest organic cause.

## Q2: Prodromal Phase Recognition
**Case**: 21-year-old student with 6-month subtle withdrawal from friends, declining grades, vague ideas that people looking at him strangely (not fully convinced). No hallucinations. Still functions.
**Q**: Diagnosis and management?
A: **At-risk mental state (Prodromal Phase)**. Not yet schizophrenia (no clear psychotic symptoms). **Management**: Regular psychiatric follow-up (convert risk 20-40% over 2 years), psychoeducation, cognitive therapy, consider ultra-low antipsychotics if high-risk features. **Learning**: Early intervention in prodromal phase improves outcome; don't wait for full psychosis.

## Q3: Disorganized vs Paranoid Schizophrenia
**Case-A**: 28-year-old with 6-month bizarre delusions (organs rotting), incoherent speech, giggling inappropriately, poor hygiene. **Case-B**: 32-year-old with 6-month persecutory delusions (boss poisoning food), guarded behavior but speech organized, maintains employment.
**Q**: Prognosis comparison?
A: **Case-A (Disorganized): Poor prognosis** - negative symptoms, cognitive decline, social withdrawal, poor treatment response. **Case-B (Paranoid): Better prognosis** - fewer negative symptoms, better insight, maintained functioning, good treatment response. **Learning**: Paranoid subtype relatively good prognosis; disorganized worst.

## Q4: Negative Symptoms vs Depression
**Case**: 26-year-old with schizophrenia on antipsychotic complains of "not enjoying anything, no motivation to do anything, feels empty." No sleep loss, no guilt/hopelessness.
**Q**: How differentiate anhedonia (negative symptom) from depression?
A: **Anhedonia** = loss of pleasure capacity; depressed mood ABSENT. **Depression** = depressed mood + guilt/hopelessness + neurovegetative (sleep, appetite). This patient: anhedonia without mood depression = negative symptom (primary). **Management**: Psychosocial (behavioral activation), not antidepressants primary. **Learning**: Negative symptoms primary burden in schizophrenia; require different interventions than mood disorders.

## Q5: Antipsychotic-Induced Akathisia
**Case**: 27-year-old started on haloperidol 3 days ago. Now complaining of restlessness, "need to move," inner tension, difficulty sitting still. No tremor or rigidity on exam.
**Q**: What is this? How manage?
A: **Akathisia** (subjective restlessness + objective motor restlessness). Early EPS side effect (days to weeks). **Management**: (1) Reduce dose, (2) Add beta-blocker (propranolol) or benzodiazepine (lorazepam), (3) Consider switch to SGA. **Learning**: Akathisia often missed (patient uncomfortable, may worsen agitation/suicide risk); distinguish from psychotic agitation.

## Q6: Treatment-Resistant Schizophrenia
**Case**: 35-year-old with 15-year schizophrenia. Tried 5 different antipsychotics (risperidone, olanzapine, haloperidol, quetiapine, aripiprazole) at adequate doses for 6-8 weeks each. <20% symptom improvement with each.
**Q**: Next step?
A: **Clozapine** - gold standard for treatment-resistant schizophrenia (TRS). Superior efficacy vs all others; 30-50% respond when others fail. **Requirement**: Baseline WBC/differential (AGRANULOCYTOSIS risk), then weekly monitoring 6 months, then biweekly. **Special monitoring**: Seizure risk (dose-dependent), myocarditis (rare, early), metabolic syndrome (highest among antipsychotics). **Learning**: Clozapine underused due to monitoring burden; essential for TRS.

## Q7: Substance-Induced vs Primary Psychosis
**Case-A**: 22-year-old after first cannabis joint develops paranoid delusions, resolves when substance wears off (next day). **Case-B**: 22-year-old smoker of cannabis weekly × 2 years; gradually developed persecutory delusions persistent even when not high.
**Q**: Differentiate.
A: **Case-A: Substance-induced psychotic disorder** - temporal link (during/shortly after intoxication), resolves with abstinence. **Case-B: Schizophrenia in cannabis-using patient** - persistent psychosis beyond intoxication period; genetic vulnerability likely (gene-environment interaction). **Management-A**: Supportive care, reassurance, avoid repeated use. **Management-B**: Antipsychotic + cannabis cessation critical. **Learning**: Cannabis risk factor for schizophrenia (earlier onset, worse prognosis); ask all at-risk patients about use.

## Q8: Adherence & Relapse Prevention
**Case**: 33-year-old man, diagnosed schizophrenia 5 years ago, stable on oral antipsychotic. Psychiatrist recommends switch to long-acting injectable (LAI). Patient refuses, says "I'll take pills, don't want injections."
**Q**: Persuasion points?
A: **LAI advantages**: (1) Better adherence (injected monthly vs pills daily), (2) Fewer relapses (30-40% reduction vs oral), (3) Simpler regimen, (4) No need to remember daily. **Disadvantages**: Can't stop immediately if side effects (vs pills). **Approach**: Shared decision-making; offer trial. **Data**: Meta-analyses show LAI superior for relapse prevention. **Learning**: Poor adherence major cause of relapse (50% non-adherent at 1 year); LAIs practical solution.

## Q9: Cognitive Deficits Resistant to Antipsychotics
**Case**: 28-year-old on antipsychotic for 3 years, positive symptoms well-controlled. But working memory, processing speed, attention all severely impaired; lost job, living with parents.
**Q**: Why not improving with antipsychotic? How manage?
A: **Cognitive deficits driven by glutamate hypofunction + structural brain changes**, NOT dopamine. Dopamine antagonists DON'T improve cognition. **Management**: (1) Psychosocial - cognitive remediation (computerized training), (2) Low-dose stimulants (methylphenidate) may help some, (3) Ensure antipsychotic adequate (some better: risperidone > haloperidol for cognition), (4) Occupational rehabilitation, (5) Supported employment. **Learning**: Cognitive deficits major functional limitation; require non-pharmacological approaches; antipsychotics can't fix glutamatergic problems.

## Q10: Suicidal Risk in Schizophrenia
**Case**: 26-year-old with schizophrenia, well-managed positive symptoms on antipsychotic, but tells psychiatrist "I have no future, might as well be dead." No prior suicide attempts. What's his risk?
A: **10% lifetime suicide rate in schizophrenia** (one of highest psychiatric conditions). **Risk factors**: Male, young age, depression comorbidity, substance use, poor insight (paradoxically, better insight = higher risk with awareness of chronicity), command hallucinations telling to harm self. **Assessment**: Ask about access to means, specific plan, previous attempts. **Management**: (1) Hospitalization if imminent risk, (2) Psychosocial support, (3) Screen for/treat depression (mood stabilizers, antidepressants), (4) Family involvement, (5) Substance cessation. **Learning**: Suicide screening essential at every visit; often overlooked in schizophrenia.

## Q11: Family Intervention Impact
**Case**: 30-year-old with schizophrenia. Family extremely critical ("lazy, makes no effort"), blaming. Prior 2 relapses when on medication. Psychiatrist recommends family therapy.
**Q**: Why? Evidence?
A: **Expressed Emotion (EE) - High EE families** (critical, hostile comments) associated with higher relapse rates (60% in 9 months vs 15% low-EE families). **Family intervention**: Psychoeducation (what is schizophrenia), communication skills, reducing criticism. **Evidence**: Meta-analyses show family therapy + antipsychotic reduces relapse 20-30% vs antipsychotic alone. **Learning**: Schizophrenia not just individual illness; family factors critical for outcome. Coordinated specialty care includes family work.

## Q12: Cannabis & Schizophrenia Risk
**Case**: 18-year-old son of schizophrenia parent asks psychiatrist if he can use cannabis recreationally. Worried about schizophrenia risk given family history.
**Q**: What's the evidence-based answer?
A: **Cannabis increases schizophrenia risk through multiple pathways**: (1) Genetic susceptibility gene-environment interaction (cannabinoid receptor gene × THC exposure), (2) Early use (adolescence) when brain developing = higher risk, (3) THC-potent strains higher risk than historically lower-THC cannabis. **Relative risk**: Cannabis users have 1.4-2× lifetime schizophrenia risk vs non-users; effect stronger with early/heavy use. **Recommendation**: Given family history (already 10% risk from genetics), cannabis use substantially increases risk. **Avoidance advised**. **Learning**: Cannabis preventable risk factor for schizophrenia; counsel all at-risk individuals (family history, prodromal symptoms).`,
        mnemonics: [
          { text: "Prodromal features: Subtle social withdrawal, grades declining, vague ideas of reference, NOT full psychosis yet", explanation: "Early detection window" },
          { text: "Paranoid (best prognosis) > Undifferentiated > Disorganized (worst); Catatonic rare", explanation: "Subtype outcomes" },
          { text: "Negative symptoms NOT dopamine-responsive; cognitive deficits glutamate-related; psychosocial interventions primary", explanation: "Treatment mismatch" },
          { text: "Expressed Emotion (EE) high = relapse risk 60%; Family therapy reduces relapse 20-30%", explanation: "Family influence" }
        ],
        keyPoints: [
          "Prodromal phase (at-risk mental state) identifies high-converters; early intervention improves long-term outcome",
          "Negative symptoms and cognitive deficits most disabling aspects; resistant to dopamine antagonists, require psychosocial approaches",
          "Treatment-resistant schizophrenia (20-30%): clozapine gold standard but requires strict monitoring (agranulocytosis, myocarditis, seizures)",
          "Substance-induced psychosis (especially cannabis) must be distinguished from primary schizophrenia; temporal relationship key",
          "Family expressed emotion (high EE) predicts relapse; family intervention essential component of comprehensive treatment; 10% suicide risk requires vigilance"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Schizophrenia: Clinical Case Scenarios", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Schizophrenia: Long-term Outcome and Management", edition: "12th" }
        ]
      }
    ]
  }
];
