import type { TopicLessons } from "./content-loader";

export const psychiatryPart4Lessons: TopicLessons[] = [
  {
    topicCode: "PS-MOD-03-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "anxiety-disorders-layer-1-foundation",
        title: "Anxiety Disorders - Foundation",
        estimatedMinutes: 25,
        summary: "Definition, epidemiology, DSM-5/ICD-10 criteria, types of anxiety disorders.",
        contentMd: `# Anxiety Disorders - Foundation

## Definition & Epidemiology
- **Anxiety**: Anticipatory fear response to perceived threat; physiological arousal, cognitive worry
- **Anxiety disorders**: Excessive, persistent anxiety disproportionate to actual danger
- **Prevalence**: 15-20% lifetime risk (most common psychiatric disorder); higher in women (2:1 ratio)
- **Age of onset**: Typically late teens to mid-20s (earlier than depression, schizophrenia)
- **Course**: Often chronic if untreated; relapsing-remitting

## Neurobiology of Anxiety
- **Amygdala**: Fear center; hyperactive in anxiety disorders
- **Prefrontal cortex**: Cognitive control, fear extinction; hypoactive in anxiety
- **Anterior cingulate**: Error monitoring, conflict detection
- **Locus coeruleus**: Norepinephrine release; arousal

## Major Anxiety Disorder Types

### Generalized Anxiety Disorder (GAD)
- **Criteria**: Excessive worry ≥6 months about multiple domains (work, family, health, finances)
- **Prevalence**: 3% population; female 2:1
- **Associated symptoms**: ≥3 of: restlessness, fatigue, concentration impairment, irritability, muscle tension, sleep disturbance
- **Course**: Chronic if untreated

### Panic Disorder
- **Diagnostic feature**: Recurrent unexpected panic attacks + anticipatory anxiety about future attacks
- **Panic attack**: Sudden intense fear ≥4 physical symptoms (palpitations, sweating, tremor, chest pain, dizziness, dyspnea)
- **Duration**: Attack peaks in 5-10 minutes
- **Agoraphobia**: Often develops secondarily (fear of being trapped, avoiding situations)

### Social Anxiety Disorder
- **Core feature**: Marked fear of social situations where embarrassment possible
- **Prevalence**: 7% population; often starts in adolescence
- **Avoidance**: Avoids situations, leading to occupational/social impairment
- **Types**: Performance (public speaking), interactional (casual conversation)

### Specific Phobias
- **Definition**: Irrational fear of specific object/situation
- **Common types**: Heights, animals, blood, flying, enclosed spaces
- **Prevalence**: 10% population (most common anxiety disorder by prevalence)
- **Avoidance behavior**: Central feature

### Agoraphobia
- **Definition**: Fear of open/crowded spaces, fear of escape difficult if panic occurs
- **Often secondary**: Develops after panic disorder onset
- **Severe form**: Complete homebound; cannot leave house unaccompanied

## ICD-10 Anxiety Disorder Codes
- **F40**: Phobic anxiety disorders (agoraphobia F40.0, social F40.1, specific F40.2)
- **F41**: Other anxiety disorders (panic F41.0, GAD F41.1)
- **F42**: OCD (F42.0 obsessions, F42.1 compulsions, F42.2 mixed)`,
        mnemonics: [
          { text: "Anxiety disorders most common psychiatric illness (15-20% lifetime); 2:1 female predominance", explanation: "Epidemiology" },
          { text: "Panic attack: ≥4 symptoms (Palpitations, Perspiration, Pounding, Pain, Pacing...PPPP+)", explanation: "Panic criteria" },
          { text: "GAD = Worry ≥6 months + ≥3 symptoms (Restlessness, Fatigue, Concentration, Irritability, Muscle tension, Sleep)", explanation: "GAD criteria" },
          { text: "Phobias most common (10%), Agoraphobia often secondary to panic, Social anxiety early onset adolescence", explanation: "Disorder patterns" }
        ],
        keyPoints: [
          "Anxiety disorders cluster of excessive fear/worry causing distress and impairment",
          "Female predominance 2:1 across all anxiety disorders",
          "Panic attacks sudden, peak 5-10 minutes, can feel like heart attack",
          "GAD chronic worry across multiple life domains ≥6 months",
          "Specific phobias most common anxiety disorder by prevalence (10%); avoidance reinforces fear"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Anxiety Disorders", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Anxiety Disorders", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "anxiety-disorders-layer-2-mechanism",
        title: "Anxiety Disorders - Mechanism",
        estimatedMinutes: 30,
        summary: "Neurotransmitter dysfunction, fear conditioning, genetic factors, fear circuit dysfunction.",
        contentMd: `# Anxiety Disorders - Mechanism

## Neurotransmitter Abnormalities
### GABA Hypofunction
- **GABA**: Primary inhibitory neurotransmitter
- **Dysfunction**: Insufficient GABAergic inhibition → heightened arousal
- **Treatment**: Benzodiazepines (GABA-A enhancers) - rapid but tolerance develops

### Serotonin Dysregulation
- **5-HT dysfunction**: Reduced serotonergic activity in cingulate, prefrontal cortex
- **Pathways affected**: Dorsal raphe nucleus connects to limbic structures, modulates fear
- **Treatment**: SSRIs increase 5-HT availability; first-line treatment

### Norepinephrine Hyperactivity
- **Locus coeruleus**: NE production; hyperactive in anxiety
- **Effects**: Increased arousal, vigilance, physical symptoms (tachycardia, sweating)
- **Treatment**: SNRIs, alpha-2 agonists

### Glutamate Excess
- **Glutamate**: Excitatory neurotransmitter
- **Dysfunction**: Excessive glutamatergic activity (opposite of schizophrenia hypofunction)
- **Mechanism**: NMDA receptor dysregulation
- **Target**: Compounds modulating NMDA signaling (experimental)

## Fear Conditioning & Extinction
### Classical Fear Conditioning
- **Process**: Neural pairing of neutral stimulus (CS) with fear-inducing stimulus (US) → learned fear
- **Circuitry**: Lateral amygdala → central amygdala → behavioral/autonomic fear responses
- **Key role**: Sensory cortex → thalamus → amygdala (direct pathway, fast; also cortical pathway, slower)

### Fear Extinction
- **Process**: Repeated exposure to CS without US → inhibition of fear response
- **Mechanism**: Prefrontal cortex (IL-PFC, infralimbic) → inhibits central amygdala
- **Dysfunction in anxiety**: Impaired extinction learning (overactive amygdala, weak prefrontal control)

## Brain Circuitry
### Fear Circuit (Amygdala-Based)
- **Amygdala hyperactivity**: Exaggerated threat detection
- **Prefrontal cortex hypoactivity**: Weak top-down control of fear
- **Anterior cingulate**: Error monitoring; hyperactive (excessive threat vigilance)
- **Insula**: Interoceptive awareness; hyperactive (bodily sensation overinterpretation)

### Salience Network Dysfunction
- **Ventral striatum, insula, anterior cingulate**: Hyperactive to threat cues
- **Consequence**: Attribution of threat significance to minor cues (hypervigilance)

## Genetic Factors
- **Heritability**: 30-50% (less heritable than schizophrenia but significant)
- **Shared genetic risk**: Anxiety and depression overlap genetically (comorbidity)
- **Gene-environment interaction**: Genetic vulnerability + environmental stress → anxiety disorder

## Behavioral Factors
### Avoidance Behavior
- **Negative reinforcement**: Avoidance reduces anxiety → behavior reinforced
- **Maintenance**: Avoidance prevents extinction learning (never learns threat is safe)
- **Consequence**: Progressive life restriction`,
        mnemonics: [
          { text: "GABA ↓ = anxiety (benzodiazepine target); 5-HT ↓ = anxiety (SSRI target); NE ↑ = anxiety (SNRI target)", explanation: "Neurotransmitter dysregulation" },
          { text: "Fear conditioning = pairing CS with US; Fear extinction = repeated CS without US (impaired in anxiety)", explanation: "Learning mechanisms" },
          { text: "Amygdala hyperactivity + Prefrontal cortex hypoactivity = imbalance causing anxiety", explanation: "Circuit dysfunction" },
          { text: "Avoidance negatively reinforced (reduces anxiety) but prevents extinction learning", explanation: "Behavioral maintenance" }
        ],
        keyPoints: [
          "GABA, 5-HT, NE dysregulation explain medication targets (benzodiazepines, SSRIs, SNRIs)",
          "Fear circuit dysfunction: hyperactive amygdala + hypoactive prefrontal cortex",
          "Fear extinction impaired in anxiety disorders; impaired ability to learn threat is safe",
          "Avoidance behavior negatively reinforced but maintains anxiety by preventing extinction",
          "Genetic vulnerability (30-50% heritability) + environmental stress trigger anxiety onset"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Neurobiology of Anxiety", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Neurobiological Basis of Anxiety Disorders", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "anxiety-disorders-layer-3-clinical",
        title: "Anxiety Disorders - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical presentation, assessment tools, differential diagnosis, management approaches.",
        contentMd: `# Anxiety Disorders - Clinical

## Clinical Assessment

### Symptom Evaluation
- **Physical symptoms**: Palpitations, sweating, tremor, chest pain, dyspnea, dizziness, GI distress
- **Cognitive symptoms**: Worry, catastrophic thinking, difficulty concentrating, sense of doom
- **Behavioral**: Avoidance, restlessness, difficulty relaxing
- **Duration/frequency**: Episodic (panic) vs continuous (GAD)

### Assessment Tools
- **GAD-7**: 7-item self-report for generalized anxiety (each item 0-3, total 0-21; ≥10 suggests disorder)
- **Panic Disorder Severity Scale (PDSS)**: Assesses panic attack frequency, severity, anticipatory anxiety
- **Social Phobia Scale**: Assesses fear and avoidance in social situations
- **Hamilton Anxiety Rating Scale (HAM-A)**: 14-item clinician-rated (gold standard for severity)

## Diagnostic Patterns by Anxiety Disorder

### Generalized Anxiety Disorder
- **MSE findings**: Anxious appearance, restlessness, difficulty concentrating
- **History**: Worry about multiple domains (work, family, health, finances, relationships)
- **Physical symptoms**: Muscle tension, headaches, GI symptoms
- **Course**: Chronic, waxing/waning
- **Medical differential**: Thyroid disease (hyperthyroidism), cardiac arrhythmia, caffeine excess

### Panic Disorder
- **Panic attack**: Sudden fear ≥4 symptoms (palpitations, sweating, tremor, chest pain, dyspnea, dizziness, derealization, fear of dying)
- **Timing**: Attacks last 5-20 minutes, peak 10 minutes
- **Triggers**: Often spontaneous (not situation-specific like phobias)
- **Agoraphobia development**: Fear of having attack in inescapable situation
- **Disability**: Significant restriction of activities

### Social Anxiety Disorder
- **Fear focus**: Performance (public speaking, eating in front of others) or interactional (conversation, being observed)
- **MSE**: Avoidant, blushing, stammering, sweating
- **Onset**: Often adolescence
- **Avoidance**: Progressive (avoids situations, worsens over time)

### Specific Phobias
- **Irrational fear**: Object/situation not actually dangerous
- **Avoidance**: Central feature; can be severe (arachnophobia limiting outdoor activities)
- **Insight**: Patients know fear excessive (unlike psychotic delusions)
- **Subtypes**: Animal (spiders, snakes), natural environment (heights, water), blood-injection-injury, situational (flying, elevators), other

## Differential Diagnosis

| Diagnosis | Distinguishing Feature | Duration |
|-----------|------------------------|----------|
| Panic Disorder | Recurrent panic attacks, anticipatory anxiety | Attacks 5-20 min; disorder chronic |
| GAD | Excessive worry across domains | Continuous ≥6 months |
| Social Anxiety | Fear specific to social situations | Persistent, situation-dependent |
| Specific Phobia | Irrational fear specific object/situation | Persistent |
| Agoraphobia | Fear of situations difficult to escape from | Chronic, often secondary to panic |
| PTSD | Trauma-related, avoidance of reminders | ≥1 month after trauma |
| OCD | Intrusive obsessions + compulsions | Compulsions attempt to reduce obsessive anxiety |
| Medical causes | Hypothyroidism, hyperthyroidism, cardiac arrhythmia | Temporal relationship to medical condition |

## Management Strategies

### First-Line Pharmacotherapy
- **SSRIs**: Paroxetine, sertraline (standard first-line); onset 2-4 weeks; efficacy 60-70%
- **SNRIs**: Venlafaxine, duloxetine (similar efficacy to SSRIs)
- **Second-line**: Buspirone (partial 5-HT1A agonist; less effective, slower onset)
- **Benzodiazepines**: Rapid onset but tolerance, dependence risk; use short-term only with SSRI

### Psychotherapy
- **CBT (Cognitive-Behavioral Therapy)**: Gold standard; exposure therapy + cognitive restructuring
- **Exposure**: Repeated exposure to feared stimulus without avoidance; extinction learning
- **Cognitive restructuring**: Challenge catastrophic thoughts
- **Efficacy**: 60-70% remission with CBT, comparable to medication

### Lifestyle Interventions
- **Exercise**: Regular aerobic exercise anxiety-reducing
- **Sleep hygiene**: Anxiety worsens with poor sleep
- **Caffeine/alcohol avoidance**: Both worsen anxiety
- **Relaxation techniques**: Progressive muscle relaxation, diaphragmatic breathing`,
        mnemonics: [
          { text: "GAD-7 score ≥10 suggests disorder; Panic attack ≥4 symptoms × 5-20 min", explanation: "Diagnostic thresholds" },
          { text: "SSRI first-line (paroxetine, sertraline); Benzodiazepine short-term only", explanation: "Pharmacotherapy" },
          { text: "Exposure + Cognitive restructuring = CBT efficacy 60-70%", explanation: "Psychotherapy core" },
          { text: "Agoraphobia often secondary to panic disorder; fear develops from fear of panic in public", explanation: "Comorbidity pattern" }
        ],
        keyPoints: [
          "Anxiety disorders highly treatable; combination SSRI + CBT most effective",
          "Panic attacks sudden, peak 10 minutes, feel like heart attack; distinguish from cardiac causes",
          "GAD chronic worry ≥6 months; generalized across life domains",
          "Avoidance maintains anxiety; exposure therapy targets avoidance by preventing extinction",
          "Benzodiazepines rapid but tolerance develops; use adjunctively with SSRI, not monotherapy"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Management of Anxiety Disorders", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Anxiety Disorders: Clinical Assessment and Treatment", edition: "12th" }
        ]
      },
      {
        layer: 4,
        slug: "anxiety-disorders-layer-4-exam-prep",
        title: "Anxiety Disorders - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield diagnostic criteria, treatment algorithms, exam questions.",
        contentMd: `# Anxiety Disorders - Exam Prep

## Anxiety Disorder Diagnostic Criteria Summary

| Disorder | Key Feature | Duration | Predominant Symptom |
|----------|-------------|----------|---------------------|
| GAD | Worry ≥6 months | ≥6 months | Excessive worry multiple domains |
| Panic Disorder | Recurrent unexpected panic attacks | Attacks 5-20m; disorder chronic | Panic + anticipatory anxiety |
| Social Anxiety | Fear of social situations | Chronic if untreated | Performance or interactional anxiety |
| Specific Phobia | Irrational fear specific object | Persistent | Avoidance of trigger |
| Agoraphobia | Fear of escape-difficult situations | Often secondary | Avoidance of public places |

## GAD-7 Quick Reference
- **Scoring**: 7 items × 4 points = 28 total
- **≥10**: Suggests GAD diagnosis
- **≥15**: Moderate-severe anxiety
- **<5**: Minimal anxiety

## High-Yield Clinical Facts
- **Panic attack**: ≥4 symptoms, sudden onset, peak 5-10 minutes (NOT hours)
- **Agoraphobia**: Often develops after panic (fear of having panic in public)
- **Social anxiety**: Often starts adolescence; impacts dating, career
- **Specific phobias**: Most common anxiety disorder (10% prevalence)
- **Female predominance**: 2:1 across all anxiety disorders

## SSRI Treatment Response
- **Onset**: 2-4 weeks minimum for noticeable improvement
- **Full response**: 8-12 weeks
- **Efficacy**: 60-70% remission with adequate dose/duration
- **First-line SSRIs**: Paroxetine (especially panic), sertraline

## Benzodiazepine Use
- **Onset**: Minutes to hours (rapid)
- **Mechanism**: GABA-A enhancement
- **Duration**: Short-acting (lorazepam) vs long-acting (clonazepam)
- **Issues**: Tolerance (weeks-months), dependence, abuse potential
- **Role**: Adjunctive with SSRI for acute distress, NOT monotherapy

## Common Exam Questions

**Q1: 35-year-old with ≥6-month worry about work, family, health, finances + muscle tension, insomnia. Diagnosis?**
A: GAD - worry ≥6 months across multiple domains

**Q2: 28-year-old with sudden palpitations, sweating, chest pain, dizziness, lasts 10 minutes, resolves. Recurrent. Diagnosis?**
A: Panic Disorder - recurrent panic attacks (≥4 symptoms, 5-10 min duration)

**Q3: 24-year-old avoids public speaking, eating in restaurants (fear of embarrassment). Diagnosis?**
A: Social Anxiety Disorder - fear in social situations

**Q4: Which SSRI most effective for panic disorder?**
A: Paroxetine - specifically FDA-approved for panic

**Q5: Patient on benzodiazepine 3 months. Now needs increasing dose for same effect. What's this?**
A: Tolerance - develops in weeks to months; reason benzodiazepines not long-term monotherapy

**Q6: Fear of spiders, avoids outdoor activities. Diagnosis?**
A: Specific Phobia - irrational fear specific object

**Q7: How differentiate panic disorder from cardiac condition?**
A: Cardiac workup (EKG, troponin, echo); panic is functional (normal cardiac studies); timing (panic 5-10m vs sustained); reassurance helps panic but not cardiac

**Q8: Which is second-line anxiety treatment if SSRI fails?**
A: SNRI (venlafaxine, duloxetine) or buspirone; trial another SSRI also option`,
        mnemonics: [
          { text: "Panic = Sudden + ≥4 symptoms + Peak 10 min + Recurrent + Anticipatory anxiety", explanation: "Diagnostic criteria" },
          { text: "GAD = Worry ≥6 months + Multiple domains + ≥3 associated symptoms", explanation: "Criteria" },
          { text: "SSRI first-line (2-4 week onset, 60-70% response); Benzodiazepine adjunctive only", explanation: "Treatment" },
          { text: "Female 2:1, Specific phobia most common (10%), GAD 3%, Panic 2-3%", explanation: "Epidemiology" }
        ],
        keyPoints: [
          "Panic attacks sudden, peak 10 minutes, can mimic cardiac emergencies; cardiac workup normal",
          "GAD chronic worry ≥6 months across multiple life domains (work, family, health, finances)",
          "SSRI first-line; benzodiazepines only adjunctive (tolerance, dependence risk)",
          "CBT (exposure + cognitive restructuring) as effective as medication (60-70% remission)",
          "Female predominance 2:1; specific phobias most common anxiety disorder by prevalence"
        ],
        textbookRefs: [
          { book: "ICD-10 Clinical Descriptions", chapter: "Anxiety Disorders", edition: "10th" },
          { book: "DSM-5 Manual", chapter: "Anxiety Disorders", edition: "5th" }
        ]
      },
      {
        layer: 5,
        slug: "anxiety-disorders-layer-5-active-recall",
        title: "Anxiety Disorders - Active Recall",
        estimatedMinutes: 20,
        summary: "10 case scenarios testing differential diagnosis and treatment decisions.",
        contentMd: `# Anxiety Disorders - Active Recall

## Q1: Panic Disorder vs Cardiac Arrhythmia
**Case**: 32-year-old woman with sudden onset palpitations, chest pain, shortness of breath, lasting 20 minutes. Happens unpredictably 2-3 times/month. EKG normal, troponin negative, echo normal.
**Q**: Panic disorder or cardiac cause?
A: **Panic disorder** - key features: (1) Normal cardiac workup (rules out cardiac cause), (2) Sudden unpredictable onset (panic characteristic), (3) Associated symptoms anxiety/fear (cardiac would have more persistent findings), (4) Duration 20 min (cardiac events more prolonged). **Management**: SSRI (sertraline, paroxetine), CBT with exposure to bodily sensations (interoceptive exposure), reassurance about cardiac safety.

## Q2: GAD vs Normal Worry
**Case**: 40-year-old businessman worries about work deadlines, finances, health. Has muscle tension, insomnia, difficulty concentrating. Wife says "This is how you've been for 8 years - stress of job."
**Q**: Is this GAD or normal worry?
A: **GAD** - key features distinguishing from normal worry: (1) Duration ≥6 months (8 years), (2) Excessive (disproportionate to actual threat), (3) Difficult to control, (4) Associated symptoms (muscle tension, insomnia, concentration), (5) Functional impairment (difficulty working). **Normal worry**: Situation-specific (upcoming deadline), brief, stops when situation resolves. **Management**: SSRI (sertraline, venlafaxine), CBT (worry time, cognitive restructuring, relaxation).

## Q3: Agoraphobia Secondary to Panic
**Case**: 28-year-old man with 2-year history panic attacks (sweating, palpitations, fear, 10 min duration). Now increasingly avoiding public places, supermarkets, crowds. "I'm afraid I'll have attack in public and be trapped."
**Q**: What's the relationship between panic and agoraphobia?
A: **Agoraphobia secondary to panic disorder** - fear of HAVING panic attack in inescapable situation. **Vicious cycle**: Panic attack → fear of next attack → avoidance → avoidance reinforced (doesn't have attack) → wider avoidance (supermarkets, crowds, driving). **Consequence**: Progressively restricted life. **Management**: (1) SSRI essential (reduces panic frequency), (2) CBT - exposure to feared situations while staying (prevents avoidance), (3) May need benzodiazepine short-term for crisis (but not monotherapy). **Prognosis**: Good with adequate treatment (60-70% remission).

## Q4: Social Anxiety vs Shyness
**Case**: 19-year-old college freshman avoids classroom participation (anxiety about being judged), avoids group projects (fear others will notice nervous), declining grades from avoidance. "I've been shy since childhood."
**Q**: Social anxiety disorder or normal shyness?
A: **Social Anxiety Disorder** - key distinction from shyness: (1) Shyness = mild discomfort in social situations, manageable; Social anxiety = marked fear, intense distress, (2) Shyness = present but doesn't prevent functioning; Social anxiety = avoidance causing functional impairment (grades declining), (3) Shyness = over time improves; Social anxiety = often worsens if untreated (avoidance reinforces), (4) Early adolescent onset suggests social anxiety. **Management**: SSRI (paroxetine FDA-approved), CBT with in vivo exposure (practice public speaking, group interactions), social skills training.

## Q5: Specific Phobia - When to Treat
**Case**: 35-year-old woman fearful of spiders. Avoids basements, outdoor areas. Distressed when spiders encountered. Otherwise functioning well (career OK, relationships intact, no major avoidance affecting life).
**Q**: Does she need treatment?
A: **Mild phobia without significant functional impairment** - treatment optional. **Consider treatment if**: (1) Significant functional impairment (limiting activities, career, relationships), (2) Marked distress. **This patient**: Functional limitation (avoids basements, outdoors) + distress = suggest treatment. **First-line treatment**: Exposure therapy (graduated exposure to spiders: pictures → video → rubber spider → live spider). **Efficacy**: 60-80% with exposure. **Medication**: Not first-line for specific phobia (exposure alone sufficient for most).

## Q6: Drug-Induced Anxiety
**Case**: 42-year-old started on methylphenidate (ADHD treatment) 2 weeks ago. Now reports increased anxiety, palpitations, insomnia, jitteriness. "This is new - didn't have anxiety before medication."
**Q**: What's happening?
A: **Stimulant-induced anxiety** (methylphenidate side effect). **Distinguishing**: Temporal relationship (anxiety started with medication), no prior anxiety history, dose-dependent (typically 2-4 weeks post-initiation). **Management**: (1) Reduce methylphenidate dose (most effective), (2) Switch to longer-acting formulation (reduces fluctuations), (3) Add SSRI if necessary (slower onset), (4) Avoid benzodiazepines (addiction potential, worsens ADHD). **Learning**: Stimulants can cause anxiety in susceptible individuals; titrate carefully.

## Q7: SSRI Initiation - Anxiety Worsening
**Case**: 29-year-old with GAD started on sertraline 50mg. After 1 week, reports increased anxiety, jitteriness, insomnia. "The medication is making it worse!"
**Q**: Continue or switch?
A: **Expected SSRI initial worsening** - 10-20% experience anxiety increase in first 1-2 weeks due to serotonergic activation, increased alertness. **Management**: (1) Reassure this is temporary (improves week 3-4), (2) Add low-dose benzodiazepine briefly (lorazepam 0.5mg BID) for first 2-4 weeks, (3) Continue sertraline - DO NOT STOP, (4) Educate patient about timeline (full response 8-12 weeks). **Alternative**: Start lower dose (25mg) if intolerant. **Learning**: Inform patients at baseline about possible initial worsening; prevents discontinuation.

## Q8: Benzodiazepine Dependence Risk
**Case**: 38-year-old on lorazepam 1mg TID for 6 months for anxiety. Now "I can't function without it. Feels like I need more to work." Tried to reduce but gets anxious, shaky.
**Q**: What's happening and management?
A: **Benzodiazepine dependence/tolerance** - lorazepam lost efficacy (tolerance) and patient dependent. **Management**: (1) Switch to SSRI if not already on one (treat underlying anxiety), (2) Taper lorazepam slowly (10% reduction/week to avoid withdrawal), (3) Use longer-acting benzodiazepine (clonazepam) during taper to smooth withdrawal, (4) Support with CBT. **Timeline**: 4-8 week taper. **Why slow taper**: Sudden discontinuation causes withdrawal (seizures, delirium in severe cases). **Learning**: Benzodiazepines NOT long-term anxiety treatment; use 2-4 weeks only while starting SSRI.

## Q9: Medication-Induced Anxiety - Stimulants
**Case**: 45-year-old with 10-year caffeine consumption (6-8 cups coffee daily). Reports persistent anxiety, palpitations, insomnia. Started seeing psychiatrist, thinking psychiatric illness.
**Q**: Psychiatric diagnosis or substance-induced?
A: **Caffeine-induced anxiety** (not psychiatric disorder). **Distinguishing**: Temporal relationship (anxiety correlates with caffeine consumption), excessive caffeine intake, physical symptoms consistent (palpitations, insomnia, tremor = caffeine effects), improvement with caffeine reduction. **Management**: (1) Reduce caffeine gradually (avoid withdrawal headache) to <200mg/day, (2) Caffeine already has withdrawal syndrome (headache, fatigue), (3) Psychiatric medication NOT needed if purely caffeine-related. **Alternative cause**: Other stimulants (pseudoephedrine, amphetamines, thyroid hormone excess).

## Q10: Comorbid GAD & Depression
**Case**: 38-year-old with 1-year persistent worry (GAD) and for 3 months also depressed mood, anhedonia, suicidal ideation. On no medication.
**Q**: Treatment approach?
A: **GAD + Major Depression comorbidity** (50% of anxious patients also depressed). **Management**: SSRI first-line for BOTH conditions (equally effective for anxiety + depression). **Paroxetine optimal** (FDA-approved for both GAD and panic). **Benzodiazepine adjunctive** if severe anxiety. **Suicide risk**: HIGH with comorbid depression + anxiety; evaluate closely (suicidal ideation present). **Hospitalization**: If suicide risk imminent. **Timeline**: 8-12 weeks for full response. **Prognosis**: Both conditions improve with adequate SSRI + CBT; combination superior to either alone.`,
        mnemonics: [
          { text: "Panic = Sudden, ≥4 symptoms, Peak 10min, Recurrent, Anticipatory; Worry = Gradual, Situation-specific, Persistent", explanation: "Panic vs worry" },
          { text: "GAD = Worry ≥6 months + ≥3 symptoms; Social anxiety = Fear social situations; Phobia = Fear specific object", explanation: "Diagnoses" },
          { text: "SSRI first-line (2-4w onset, 60-70% response); Benzodiazepine adjunctive <4 weeks; CBT 60-70% efficacy", explanation: "Treatment" },
          { text: "Medication-induced anxiety = Stimulants (caffeine, ADHD meds, pseudoephedrine), Hyperthyroidism, Steroids", explanation: "Differential diagnosis" }
        ],
        keyPoints: [
          "Panic attacks sudden, 5-10 min, mimic cardiac emergencies; cardiac workup reassures",
          "GAD chronic worry ≥6 months across multiple domains; worsens with stress",
          "Agoraphobia often secondary to panic; vicious cycle of avoidance reinforcement",
          "SSRI first-line (paroxetine for panic/GAD); benzodiazepine adjunctive only (2-4 weeks)",
          "CBT efficacy 60-70%; exposure therapy (panic, phobias), cognitive restructuring (worry), social skills (social anxiety)"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Anxiety Disorders: Case-Based Learning", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Anxiety Disorders: Clinical Management", edition: "12th" }
        ]
      }
    ]
  }
];
