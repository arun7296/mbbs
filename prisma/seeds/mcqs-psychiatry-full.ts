export const psychiatryMcqs = [
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old male presents with 4-month history of auditory hallucinations hearing voices commenting on his actions and thoughts. He believes his thoughts are being broadcast to others. What is the most likely diagnosis?",
    clinicalVignette:
      "A 28-year-old male with first-episode psychosis, 4 months of voices and thought broadcasting delusion.",
    options: [
      {
        id: "a",
        text: "Brief psychotic disorder",
        isCorrect: false,
        explanation:
          "Brief psychotic disorder lasts 1 day to 1 month. This patient's 4-month duration exceeds this criterion.",
      },
      {
        id: "b",
        text: "Schizophreniform disorder",
        isCorrect: false,
        explanation:
          "Schizophreniform disorder lasts 1-6 months with prodrome/decline in functioning. At 4 months, if functional decline present, this is possible but schizophrenia becomes more likely if lasting >6 months.",
      },
      {
        id: "c",
        text: "Schizophrenia",
        isCorrect: true,
        explanation:
          "Schizophrenia requires: (1) two or more psychotic symptoms for ≥1 month (this patient has auditory hallucinations and thought broadcasting delusion for 4 months), (2) functional decline, (3) symptoms for ≥6 months total (including prodrome). Auditory hallucinations commenting on behavior and thought broadcasting are first-rank symptoms of schizophrenia.",
      },
      {
        id: "d",
        text: "Persistent delusional disorder",
        isCorrect: false,
        explanation:
          "Persistent delusional disorder presents with fixed delusions but no prominent hallucinations or functional decline as prominent features.",
      },
    ],
    explanation:
      "Schizophrenia diagnosis requires two or more characteristic symptoms from five domains for ≥1 month: (1) delusions, (2) hallucinations, (3) disorganized speech, (4) disorganized/catatonic behavior, (5) negative symptoms. Plus: (1) decline in functioning, (2) symptoms for ≥6 months total. First-rank symptoms (specific to schizophrenia): auditory hallucinations commenting on behavior, thought broadcasting, thought withdrawal, somatic hallucinations. This patient meets criteria for schizophrenia with 4 months of two symptoms (hallucinations + delusion) and likely prodromal period extending total duration beyond 6 months.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-01-TOP-001",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Schizophrenia Spectrum", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old female presents with depressed mood for 6 weeks, insomnia, guilt, and concentration difficulty. Additionally, she hears voices saying 'you deserve to die' and believes that her organs are being destroyed. What is the most appropriate diagnosis?",
    clinicalVignette:
      "A 35-year-old female with depression symptoms plus auditory hallucinations and somatic delusions for 6 weeks.",
    options: [
      {
        id: "a",
        text: "Major depressive disorder",
        isCorrect: false,
        explanation:
          "MDD can include psychotic features, but the presence of psychosis requires specification.",
      },
      {
        id: "b",
        text: "Major depressive disorder with psychotic features",
        isCorrect: true,
        explanation:
          "This patient has 5 symptoms of MDD (depressed mood, insomnia, guilt, concentration difficulty, plus likely anhedonia) lasting 6 weeks with functional impairment plus psychotic features (hallucinations and delusions). The psychotic features are mood-congruent (themes of worthlessness and bodily decay fitting depressive mood). Diagnosis is MDD with psychotic features.",
      },
      {
        id: "c",
        text: "Schizophrenia",
        isCorrect: false,
        explanation:
          "The psychotic features are clearly mood-congruent and occur in context of prominent depressive symptoms. Primary psychotic disorder would have psychotic symptoms preceding or independent of mood symptoms.",
      },
      {
        id: "d",
        text: "Schizoaffective disorder",
        isCorrect: false,
        explanation:
          "Schizoaffective requires psychotic symptoms present for ≥2 weeks without mood symptoms and separate mood episodes lasting ≥2 weeks. This patient's psychotic symptoms appear secondary to mood episode.",
      },
    ],
    explanation:
      "MDD with psychotic features occurs when psychotic symptoms are mood-congruent (consistent with depressive themes) and occur exclusively during mood episodes. Mood-congruent psychosis includes: (1) delusions of poverty, guilt, body decay, (2) hallucinations with depressive themes. Mood-incongruent psychosis (incongruent with mood) suggests schizoaffective or primary psychotic disorder. This patient's 6-week duration, prominent depressive symptoms, and mood-congruent psychotic features support MDD with psychotic features. Treatment includes antidepressants plus antipsychotics.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-02-TOP-002",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Depressive Disorders", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 32-year-old male presents with grandiose delusions ('I am the richest man in India'), decreased need for sleep (3 hours), flight of ideas, and increased goal-directed activity for 2 weeks. He has spent 50 lakh rupees on a new business. What is the appropriate initial management?",
    clinicalVignette:
      "A 32-year-old male with manic episode: grandiosity, decreased sleep need, racing thoughts, increased activity, financial recklessness.",
    options: [
      {
        id: "a",
        text: "Psychotherapy alone",
        isCorrect: false,
        explanation:
          "Acute mania requires psychopharmacological intervention. Psychotherapy is adjunctive.",
      },
      {
        id: "b",
        text: "Benzodiazepines for sedation and mood stabilizer for long-term control",
        isCorrect: true,
        explanation:
          "Acute mania management: (1) mood stabilizer (lithium, valproate, lamotrigine, quetiapine) for acute control and maintenance, (2) benzodiazepines (lorazepam 1-2 mg TID) for acute agitation and insomnia, (3) antipsychotic (risperidone, olanzapine, quetiapine) if psychotic features. Start mood stabilizer immediately as this is acute mania with risky behavior.",
      },
      {
        id: "c",
        text: "Antidepressant monotherapy",
        isCorrect: false,
        explanation:
          "Antidepressants alone can worsen mania. Mood stabilizers are essential.",
      },
      {
        id: "d",
        text: "Observe without medication, family counseling only",
        isCorrect: false,
        explanation:
          "Observation risks escalation and financial/legal consequences. Medication needed.",
      },
    ],
    explanation:
      "Bipolar I disorder, manic episode presents with 3+ symptoms: (1) inflated self-esteem/grandiosity, (2) decreased need for sleep, (3) flight of ideas, (4) distractibility, (5) increased goal-directed activity, (6) excessive involvement in risky activities. Acute management requires: (1) mood stabilizer (lithium, valproate, carbamazepine, lamotrigine), (2) benzodiazepines for acute sedation, (3) antipsychotics if psychotic or severe agitation. Patient needs hospitalization given risky financial behavior. Mood stabilizers are long-term maintenance to prevent relapse. Lithium levels monitored (therapeutic 0.6-1.2 mEq/L).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-03-TOP-003",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Bipolar Disorder", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old female presents with intrusive obsessive thoughts about contamination despite repeated hand washing. The hand washing causes significant distress and interferes with daily life. What is the most likely diagnosis?",
    clinicalVignette:
      "A 28-year-old female with contamination obsessions and compulsive hand washing causing distress and functional impairment.",
    options: [
      {
        id: "a",
        text: "Generalized anxiety disorder",
        isCorrect: false,
        explanation:
          "GAD involves worry about multiple life domains, not focused obsessions and compulsions.",
      },
      {
        id: "b",
        text: "Obsessive-compulsive disorder",
        isCorrect: true,
        explanation:
          "OCD requires: (1) obsessions (intrusive, unwanted thoughts about contamination) causing anxiety, (2) compulsions (hand washing) performed to reduce anxiety, (3) recognition that thoughts are irrational, (4) significant distress or functional impairment, (5) time-consuming (>1 hour daily). Common themes: contamination, harm, sexuality, religion, symmetry.",
      },
      {
        id: "c",
        text: "Body-focused repetitive behavior disorder",
        isCorrect: false,
        explanation:
          "BFRB involves hair pulling, skin picking without obsessive ideation.",
      },
      {
        id: "d",
        text: "Illness anxiety disorder",
        isCorrect: false,
        explanation:
          "Illness anxiety is preoccupation with having/getting illness, not contamination obsessions.",
      },
    ],
    explanation:
      "OCD is characterized by obsessions (intrusive, unwanted thoughts causing distress) and compulsions (repetitive behaviors performed to reduce anxiety). Common obsessions: contamination, harm, sexuality, religion, symmetry, aggressive/violent thoughts. Common compulsions: washing, checking, ordering, counting, seeking reassurance. The person recognizes the thoughts as irrational but feels unable to control them. Compulsions provide temporary relief followed by anxiety return. Treatment: SSRIs (first-line pharmacotherapy), cognitive-behavioral therapy (ERP - exposure and response prevention), cognitive therapy. CBT is often more effective than medication alone for OCD.",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-04-TOP-004",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Obsessive-Compulsive Disorder", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 32-year-old male with chronic PTSD from war trauma is prescribed sertraline 50 mg daily. After 3 weeks, he reports continued nightmares and flashbacks with hypervigilance. What is the most appropriate next step?",
    clinicalVignette:
      "A 32-year-old male with PTSD on sertraline, showing insufficient response at 3 weeks.",
    options: [
      {
        id: "a",
        text: "Continue sertraline at current dose; allow 8-12 weeks for full response",
        isCorrect: true,
        explanation:
          "SSRIs require 4-6 weeks minimum for anxiety disorder response, 8-12 weeks for full PTSD response. Dose of 50 mg is subtherapeutic; typical therapeutic dose is 100-200 mg. Management: (1) increase sertraline gradually to 100-200 mg, (2) continue for at least 8 weeks before assessing response, (3) add psychotherapy (CPT, PE) as these are equally effective to medications.",
      },
      {
        id: "b",
        text: "Switch to paroxetine immediately",
        isCorrect: false,
        explanation:
          "Sertraline dose is subtherapeutic. Dose escalation should precede switching.",
      },
      {
        id: "c",
        text: "Add benzodiazepines for symptom relief",
        isCorrect: false,
        explanation:
          "Benzodiazepines increase dependence risk in PTSD and are not first-line treatment.",
      },
      {
        id: "d",
        text: "Discontinue sertraline and start antipsychotic",
        isCorrect: false,
        explanation:
          "Antipsychotics are not first-line for PTSD. SSRI dose escalation is appropriate.",
      },
    ],
    explanation:
      "PTSD treatment requires: (1) SSRIs (sertraline, paroxetine, fluoxetine) at adequate doses (100-200 mg) for 8-12 weeks, (2) psychotherapy (Cognitive Processing Therapy, Prolonged Exposure, EMDR) which are gold-standard, (3) benzodiazepines only short-term for acute agitation (high addiction risk), (4) prazosin for nightmares. This patient needs SSRI dose escalation to 100-200 mg and addition of evidence-based psychotherapy. Response rates: 60% with medication, 50% with therapy, 80% with combined.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-05-TOP-005",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "PTSD and Trauma", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male with alcohol use disorder presents with acute agitation, tremors, hallucinations, and autonomic instability (HR 110, BP 150/90, fever 38.2°C) 48 hours after his last drink. What is the most likely complication?",
    clinicalVignette:
      "A 45-year-old male with AUD presenting with agitation, tremors, hallucinations, tachycardia, hypertension, fever.",
    options: [
      {
        id: "a",
        text: "Alcohol hallucinosis",
        isCorrect: false,
        explanation:
          "Alcohol hallucinosis presents with clear sensorium and without autonomic instability.",
      },
      {
        id: "b",
        text: "Delirium tremens (alcohol withdrawal delirium)",
        isCorrect: true,
        explanation:
          "Delirium tremens is the most severe form of alcohol withdrawal occurring 48-96 hours after last drink. Features: (1) delirium (confusion, disorientation), (2) visual/tactile hallucinations, (3) autonomic instability (tachycardia, hypertension, fever, diaphoresis), (4) tremor, agitation. Mortality 5-10% if untreated. Requires ICU management with benzodiazepines.",
      },
      {
        id: "c",
        text: "Wernicke's encephalopathy",
        isCorrect: false,
        explanation:
          "Wernicke's presents with ataxia, ophthalmoplegia, confusion (not acute autonomic instability as primary feature).",
      },
      {
        id: "d",
        text: "Hepatic encephalopathy",
        isCorrect: false,
        explanation:
          "Hepatic encephalopathy presents with altered sensorium but not acute autonomic instability as described.",
      },
    ],
    explanation:
      "Alcohol withdrawal syndrome has three stages: (1) Minor withdrawal (tremor, diaphoresis, tachycardia, anxiety) 6-24 hours, (2) Hallucinosis (visual hallucinations with clear sensorium) 12-48 hours, (3) Withdrawal seizures (generalized tonic-clonic) 12-48 hours, (4) Delirium tremens (confusion + hallucinations + autonomic instability) 48-96 hours. DTs represent medical emergency with 5-10% mortality from cardiac arrhythmias, seizures, hyperthermia. Management: (1) benzodiazepines IV (lorazepam 2-4 mg IV q5-10min until calm), (2) thiamine 100 mg IV/IM, (3) glucose and electrolytes correction, (4) supportive care in ICU. Prevention: benzodiazepines if at high risk.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-06-TOP-006",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Substance Use Disorders", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 24-year-old male presents with acute onset confusion, disorientation, visual hallucinations, and agitation beginning 2 hours after sustaining a head injury. He is febrile (38.5°C) with no localizing neurological signs. What is the most likely diagnosis?",
    clinicalVignette:
      "A 24-year-old male with acute-onset delirium hours after head injury with fever, confusion, hallucinations.",
    options: [
      {
        id: "a",
        text: "Delirium due to head injury and systemic inflammation",
        isCorrect: true,
        explanation:
          "Delirium is an acute, fluctuating disorder of consciousness and attention with disorganized thinking caused by medical conditions or substances. In this case: (1) head injury causing direct neurological effect, (2) fever suggesting systemic inflammation/infection, (3) acute onset within hours of event. Delirium can present with agitation (hyperactive), lethargy (hypoactive), or mixed. Visual hallucinations common in delirium.",
      },
      {
        id: "b",
        text: "Acute psychotic disorder",
        isCorrect: false,
        explanation:
          "Psychosis would have intact consciousness/attention; this patient has delirium with altered consciousness.",
      },
      {
        id: "c",
        text: "Post-traumatic stress disorder",
        isCorrect: false,
        explanation:
          "PTSD does not present with acute delirium and fever.",
      },
      {
        id: "d",
        text: "Conversion disorder",
        isCorrect: false,
        explanation:
          "Conversion presents with neurological symptoms without physiological cause, not delirium.",
      },
    ],
    explanation:
      "Delirium is defined by: (1) acute onset (hours to days), (2) fluctuating course, (3) disorder of consciousness/attention (reduced ability to focus/sustain), (4) disorganized thinking, (5) additional features (perceptual disturbances, sleep-wake disturbance, emotional changes). Common causes: infection, trauma, metabolic abnormalities, medications, hypoxia. Hyperactive delirium (agitation, hallucinations) is more recognizable but hypoactive delirium (lethargy) more common in elderly. Management: treat underlying cause, supportive care, environmental modification, avoid antipsychotics if possible (associated with worse outcomes in medical delirium).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-07-TOP-007",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Neurocognitive Disorders", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 6-year-old child presents with persistent difficulty paying attention, leaving tasks incomplete, excessive fidgeting, interrupting others, and difficulty waiting turns for 8 months. What is the most likely diagnosis?",
    clinicalVignette:
      "A 6-year-old child with persistent symptoms of inattention, hyperactivity, and impulsivity affecting school performance.",
    options: [
      {
        id: "a",
        text: "Oppositional defiant disorder",
        isCorrect: false,
        explanation:
          "ODD involves defiance and hostility, not primarily inattention and hyperactivity.",
      },
      {
        id: "b",
        text: "Attention-deficit/hyperactivity disorder",
        isCorrect: true,
        explanation:
          "ADHD requires: (1) 6+ symptoms of inattention OR hyperactivity-impulsivity for ≥6 months, (2) onset before age 12, (3) symptoms in multiple settings (home, school), (4) functional impairment. This child has inattention (difficulty focusing, incomplete tasks), hyperactivity (fidgeting), and impulsivity (interrupting, difficulty waiting). Symptoms present for 8 months and affecting school.",
      },
      {
        id: "c",
        text: "Anxiety disorder",
        isCorrect: false,
        explanation:
          "Anxiety can cause inattention but does not typically present with prominent hyperactivity and impulsivity.",
      },
      {
        id: "d",
        text: "Adjustment disorder",
        isCorrect: false,
        explanation:
          "Adjustment disorder symptoms last ≤6 months after stressor. This child has 8-month history.",
      },
    ],
    explanation:
      "ADHD has three presentations: (1) Predominantly inattentive (poor focus, forgetfulness, disorganization), (2) Predominantly hyperactive-impulsive (fidgeting, restlessness, interrupting, impulsive actions), (3) Combined. Prevalence 5% in children. Causes: genetic (70-80% heritability), neurobiological (dopamine dysregulation in prefrontal cortex and striatum). Assessment requires: (1) detailed history from parent and school, (2) rating scales (VANDERBILT, CONNERS), (3) exclusion of medical causes. Treatment: (1) behavioral interventions (classroom accommodations, parent training), (2) medication (stimulants: methylphenidate, amphetamines; non-stimulants: atomoxetine, guanfacine).",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-08-TOP-008",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "ADHD", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 4-year-old boy shows persistent difficulty with eye contact, repetitive hand movements, restricted interest in spinning objects, and delayed speech development. He does not play with other children. What is the primary deficit in autism spectrum disorder that explains these findings?",
    clinicalVignette:
      "A 4-year-old with social withdrawal, repetitive behaviors, restricted interests, and speech delay.",
    options: [
      {
        id: "a",
        text: "Intellectual disability",
        isCorrect: false,
        explanation:
          "While intellectual disability can coexist, autism core deficit is social-communicative.",
      },
      {
        id: "b",
        text: "Impairment in social communication and interaction plus restricted, repetitive patterns of behavior",
        isCorrect: true,
        explanation:
          "ASD requires: (1) persistent deficits in social communication (social interaction, communication, reciprocity), (2) restricted, repetitive patterns (repetitive movements, resistance to change, restricted interests). Onset in early childhood. This child shows: (1) social deficits (no eye contact, no peer play), (2) communication delay, (3) restricted interests (spinning objects) and repetitive movements (hand movements).",
      },
      {
        id: "c",
        text: "Language disorder",
        isCorrect: false,
        explanation:
          "While language delay is present, the core deficit involves social-communicative impairment beyond language.",
      },
      {
        id: "d",
        text: "Motor disorder",
        isCorrect: false,
        explanation:
          "Motor abnormalities may occur but are not the defining feature of autism.",
      },
    ],
    explanation:
      "Autism spectrum disorder is characterized by: (1) Persistent deficits in social communication: reduced social-emotional reciprocity, nonverbal communication deficits (eye contact, gestures, facial expressions), difficulty developing/maintaining relationships, (2) Restricted, repetitive patterns: repetitive motor movements or speech, adherence to routines, restricted interests, unusual sensory responses. Onset in early childhood but may not become fully evident until social demands exceed capabilities. Severity ranges from requiring support to requiring very substantial support. Intellectual ability and language vary widely across spectrum.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-09-TOP-009",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Autism Spectrum Disorder", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 26-year-old female presents with depressed mood for 3 months, anhedonia, fatigue, poor concentration, and insomnia. She denies suicidal ideation. She was prescribed fluoxetine 20 mg daily 2 months ago with minimal improvement. What is the next management step?",
    clinicalVignette:
      "A 26-year-old female with major depressive disorder on fluoxetine for 2 months with inadequate response.",
    options: [
      {
        id: "a",
        text: "Continue fluoxetine and wait 4 more weeks",
        isCorrect: false,
        explanation:
          "After 8 weeks (2 months) of adequate-dose SSRI, if no response, continuation alone is not indicated.",
      },
      {
        id: "b",
        text: "Increase fluoxetine dose to 40 mg, or switch to alternate SSRI/SNRI, or augment with second agent",
        isCorrect: true,
        explanation:
          "Treatment-resistant depression (TRD) is defined as failure of 2+ antidepressants. After 8 weeks of adequate dose, if no response, options: (1) increase dose, (2) switch to different class (SNRI, TCA, atypical), (3) augment (add aripiprazole, bupropion, T3 thyroid hormone). Psychotherapy should also be added. CBT is effective for TRD.",
      },
      {
        id: "c",
        text: "Switch to benzodiazepines for mood improvement",
        isCorrect: false,
        explanation:
          "Benzodiazepines are not antidepressants and worsen long-term depression outcome.",
      },
      {
        id: "d",
        text: "Recommend hospitalization for ECT",
        isCorrect: false,
        explanation:
          "ECT is for severe/psychotic depression or TRD after medication trials, not first-line here.",
      },
    ],
    explanation:
      "Major depressive disorder treatment: (1) First-line: SSRIs, SNRIs, bupropion, (2) Assess after 4-6 weeks, full response by 8-12 weeks. If inadequate response at 8 weeks: (1) dose increase, (2) switch agents, (3) augmentation (add second agent). TRD (failure of ≥2 agents at adequate doses for 4+ weeks) occurs in 30% of depression. Augmentation agents: aripiprazole, bupropion, lithium, T3 hormone. Combined medication + psychotherapy more effective than either alone. ECT, transcranial magnetic stimulation (rTMS), and esketamine for severe/refractory cases.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-02-TOP-010",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Depressive Disorders", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male with schizophrenia presents with severe negative symptoms (apathy, alogia, anhedonia) despite adequate antipsychotic therapy for 2 years. What is the most likely mechanism of these negative symptoms?",
    clinicalVignette:
      "A 45-year-old male with schizophrenia with persistent primary negative symptoms despite antipsychotics.",
    options: [
      {
        id: "a",
        text: "Extrapyramidal side effects from antipsychotic medication",
        isCorrect: false,
        explanation:
          "EPS causes parkinsonism and akathisia (movement disorders), not primary negative symptoms.",
      },
      {
        id: "b",
        text: "Dopamine hypoactivity in mesolimbic and mesocortical pathways (primary negative symptoms)",
        isCorrect: true,
        explanation:
          "Negative symptoms in schizophrenia result from dopamine hypoactivity in mesolimbic (motivation/reward) and mesocortical (prefrontal) pathways. Antipsychotics block dopamine in mesolimbic pathway (therapeutic for positive symptoms) but also reduce already-low dopamine in mesocortical pathway, worsening negative symptoms. Primary negative symptoms (intrinsic to illness) are treatment-resistant.",
      },
      {
        id: "c",
        text: "Glutamate excess in prefrontal cortex",
        isCorrect: false,
        explanation:
          "Glutamate dysfunction contributes to schizophrenia, but negative symptoms are primarily dopamine-related.",
      },
      {
        id: "d",
        text: "Depression secondary to chronic illness",
        isCorrect: false,
        explanation:
          "While depression can occur, these are primary negative symptoms intrinsic to schizophrenia.",
      },
    ],
    explanation:
      "Schizophrenia involves dopamine dysregulation: (1) mesolimbic hyperactivity (positive symptoms), (2) mesocortical hypoactivity (negative symptoms). Negative symptoms: apathy (lack of motivation), alogia (poverty of speech), anhedonia (lack of pleasure), affective blunting, social withdrawal. Antipsychotics are more effective for positive than negative symptoms because they block dopamine in all pathways. Primary negative symptoms (intrinsic to illness) are treatment-resistant. Secondary negative symptoms can result from depression, EPS, or hospitalization (modifiable). Treatment: (1) optimize antipsychotic choice (some atypical agents may be slightly better), (2) add psychosocial interventions (CBT, psychoeducation), (3) treat comorbid depression.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-01-TOP-011",
    textbookRefs: [
      { book: "Schizophrenia and Related Disorders", chapter: "Neurochemistry", edition: "Current" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old female with bipolar I disorder has been stable on lithium for 3 years. She now presents with polyuria, polydipsia, and lab findings showing elevated creatinine (1.8) and high sodium (148). What is the most likely diagnosis?",
    clinicalVignette:
      "A 35-year-old female on lithium long-term with polyuria, polydipsia, renal function decline, and hypernatremia.",
    options: [
      {
        id: "a",
        text: "Lithium-induced nephrogenic diabetes insipidus",
        isCorrect: true,
        explanation:
          "Chronic lithium use (>5 years, or >10 g cumulative) causes nephrogenic diabetes insipidus in 20-40% of patients. Mechanism: lithium inhibits ADH effect on collecting duct via adenylyl cyclase blockade. Results in: polyuria, polydipsia, hypernatremia, elevated creatinine. Symptoms present when lithium dose is high or duration prolonged. Management: (1) polyuria monitoring, (2) amiloride (blocks lithium entry into collecting duct cells), (3) consider alternative mood stabilizer.",
      },
      {
        id: "b",
        text: "Acute lithium toxicity",
        isCorrect: false,
        explanation:
          "Acute toxicity presents with tremor, confusion, arrhythmias. This is chronic nephrogenic DI.",
      },
      {
        id: "c",
        text: "Type 2 diabetes mellitus",
        isCorrect: false,
        explanation:
          "While lithium can cause hyperglycemia, the presentation is more consistent with nephrogenic DI.",
      },
      {
        id: "d",
        text: "Central diabetes insipidus from pituitary damage",
        isCorrect: false,
        explanation:
          "Central DI would result from hypothalamic-pituitary pathology, not from lithium's effect on kidneys.",
      },
    ],
    explanation:
      "Lithium side effects: (1) Acute toxicity: tremor, confusion, ataxia, arrhythmias (levels >1.5 mEq/L), (2) Chronic effects: nephrogenic DI (20-40% with prolonged use), chronic kidney disease, hypothyroidism, cardiac conduction abnormalities, weight gain. Nephrogenic DI: polyuria (up to 3-5 L/day), polydipsia to maintain hydration, elevated sodium/creatinine. Risk factors: high dose, prolonged duration, dehydration. Management: (1) thiazide diuretics (paradoxical effect), (2) amiloride (preferred, blocks lithium entry), (3) NSAIDs reduce urine output. Regular monitoring: lithium levels (therapeutic 0.6-1.2), renal function (creatinine, eGFR), thyroid function annually.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-03-TOP-012",
    textbookRefs: [
      { book: "Psychopharmacology", chapter: "Mood Stabilizers", edition: "Current" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old female presents with persistent fear of social situations where she might be embarrassed or scrutinized, leading to avoidance of public speaking, eating in public, and parties. What is the underlying cognitive mechanism?",
    clinicalVignette:
      "A 28-year-old female with social anxiety disorder with specific fears and avoidance behaviors.",
    options: [
      {
        id: "a",
        text: "Catastrophic thinking about negative social evaluation and fear of embarrassment",
        isCorrect: true,
        explanation:
          "Social anxiety disorder is characterized by excessive fear of social situations where one might be scrutinized, evaluated, or embarrassed. Core cognitive mechanism: (1) overestimation of threat/negative evaluation by others, (2) underestimation of ability to cope, (3) catastrophic interpretation of ambiguous social cues, (4) negative self-focus. Behavioral response: avoidance of feared situations, which maintains anxiety through prevention of habituation.",
      },
      {
        id: "b",
        text: "Panic attacks triggered by unexpected physiological sensations",
        isCorrect: false,
        explanation:
          "Panic disorder involves unexpected panic attacks; SAD involves anticipatory anxiety in social situations.",
      },
      {
        id: "c",
        text: "Generalized worry about multiple life domains",
        isCorrect: false,
        explanation:
          "GAD involves worry about finances, health, family; SAD focuses on social evaluation fears.",
      },
      {
        id: "d",
        text: "Persistent intrusive thoughts about contamination",
        isCorrect: false,
        explanation:
          "Contamination obsessions characterize OCD, not social anxiety.",
      },
    ],
    explanation:
      "Social anxiety disorder (SAD) is persistent, excessive fear of social performance situations. Diagnostic criteria: (1) fear of social situations where judgment possible, (2) anxiety/panic response, (3) avoidance of feared situations, (4) distress/functional impairment, (5) duration ≥6 months. Cognitive model: negative automatic thoughts about social evaluation → anxiety → avoidance → continued fear. Treatment: (1) SSRIs (first-line pharmacotherapy), (2) CBT with exposure therapy most effective, (3) benzodiazepines short-term only. Cognitive therapy addresses catastrophic thinking patterns.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-10-TOP-013",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Anxiety Disorders", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 40-year-old male with schizophrenia has been on risperidone 4 mg daily for 5 years. He develops high prolactin levels, erectile dysfunction, and breast tenderness. What is the mechanism of this adverse effect?",
    clinicalVignette:
      "A 40-year-old male on risperidone with prolactin-related side effects (elevated prolactin, erectile dysfunction, gynecomastia).",
    options: [
      {
        id: "a",
        text: "Direct stimulation of lactotroph cells in pituitary",
        isCorrect: false,
        explanation:
          "Risperidone does not directly stimulate lactotrophs.",
      },
      {
        id: "b",
        text: "D2 dopamine receptor blockade in tuberoinfundibular pathway disinhibiting prolactin release",
        isCorrect: true,
        explanation:
          "Dopamine normally inhibits prolactin release. Antipsychotics that block D2 receptors (risperidone, paliperidone, amisulpride) inhibit dopamine's inhibitory effect, leading to prolactin elevation (hyperprolactinemia). Results: erectile dysfunction, galactorrhea, gynecomastia, menstrual irregularities. Aripiprazole, quetiapine, clozapine have minimal prolactin elevation because they have lower D2 affinity or partial agonism.",
      },
      {
        id: "c",
        text: "Blockade of serotonin receptors increasing TRH",
        isCorrect: false,
        explanation:
          "Serotonin antagonism does not typically increase prolactin via TRH.",
      },
      {
        id: "d",
        text: "Direct hepatic effect reducing prolactin metabolism",
        isCorrect: false,
        explanation:
          "The mechanism is central (pituitary), not hepatic.",
      },
    ],
    explanation:
      "Antipsychotic-induced hyperprolactinemia occurs with D2 receptor blockade in tuberoinfundibular pathway. Dopamine normally tonically inhibits prolactin release via D2 receptors on lactotroph cells. D2 blockade removes this inhibition, leading to prolactin elevation. Clinical consequences: (1) sexual dysfunction (erectile dysfunction, decreased libido), (2) galactorrhea, (3) gynecomastia, (4) menstrual irregularities, (5) osteoporosis risk (from hypogonadism). Antipsychotics by prolactin effect: high (risperidone, paliperidone, amisulpride) → intermediate (haloperidol, chlorpromazine, olanzapine) → low (quetiapine, clozapine, aripiprazole). Management: switch to low-prolactin agent or add dopamine agonist (bromocriptine).",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-01-TOP-014",
    textbookRefs: [
      { book: "Psychopharmacology", chapter: "Antipsychotics", edition: "Current" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male presents with gradually progressive memory loss, difficulty finding words, and disorientation to time and place over 18 months. MRI shows hippocampal atrophy. What is the most likely diagnosis?",
    clinicalVignette:
      "A 55-year-old male with progressive cognitive decline, memory impairment, language difficulties, and hippocampal atrophy.",
    options: [
      {
        id: "a",
        text: "Major depressive disorder",
        isCorrect: false,
        explanation:
          "Depression causes pseudodementia (cognitive complaints, but objective testing normal). This patient has objective hippocampal atrophy.",
      },
      {
        id: "b",
        text: "Dementia of Alzheimer type",
        isCorrect: true,
        explanation:
          "Alzheimer's disease is characterized by: (1) insidious onset with progressive cognitive decline over years, (2) memory impairment (earliest sign), (3) language difficulties (anomia, repetition), (4) disorientation, (5) neuropathology: amyloid plaques and tau tangles. Imaging shows hippocampal and temporal lobe atrophy. This patient has 18-month progressive course with hippocampal atrophy on MRI.",
      },
      {
        id: "c",
        text: "Vascular dementia",
        isCorrect: false,
        explanation:
          "Vascular dementia typically has stepwise progression with focal neurological signs. MRI would show infarcts, not just hippocampal atrophy.",
      },
      {
        id: "d",
        text: "Frontotemporal dementia",
        isCorrect: false,
        explanation:
          "FTD typically presents with behavioral changes/personality change before memory loss, with frontal atrophy.",
      },
    ],
    explanation:
      "Alzheimer's disease is the most common dementia (60-80% of cases). Pathology: amyloid-beta plaques and phosphorylated tau tangles. Stages: (1) Preclinical (amyloid/tau pathology, no symptoms), (2) MCI (mild cognitive impairment, can perform ADLs), (3) Dementia (significant impairment in ADLs). Clinical progression: memory loss → language disturbance → disorientation → behavioral changes → eventual dependence on care. Imaging: hippocampal/temporal atrophy. Risk factors: age (>65), apoE4 genotype, head injury, cardiovascular risk factors. Treatment: cholinesterase inhibitors (donepezil, rivastigmine) provide modest cognitive slowing. Recent: amyloid-targeting monoclonal antibodies (aducanumab, lecanemab) show promise.",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-11-TOP-015",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Neurocognitive Disorders", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 32-year-old female with bipolar I disorder presents in a depressed mood (anhedonia, guilt, hopelessness) and expresses fleeting suicidal thoughts 'if this pain continues'. She has a past attempt 3 years ago. What is the critical assessment needed?",
    clinicalVignette:
      "A 32-year-old female with bipolar depression, passive suicidal ideation, history of attempt.",
    options: [
      {
        id: "a",
        text: "Detailed suicide risk assessment including intent, plan, access to means, protective factors",
        isCorrect: true,
        explanation:
          "Suicide risk assessment evaluates: (1) current ideation intensity/frequency, (2) intent (passive vs active), (3) plan specificity, (4) access to means, (5) history of attempts (major risk factor), (6) protective factors (relationships, reasons to live), (7) recent mood/medication changes. This patient has risk factors (depression, passive ideation, prior attempt). Risk fluctuates and requires ongoing assessment. Management based on risk level.",
      },
      {
        id: "b",
        text: "Reassure the patient that these thoughts are normal in depression",
        isCorrect: false,
        explanation:
          "While ideation can occur in depression, minimizing or reassuring inappropriately delays intervention.",
      },
      {
        id: "c",
        text: "Prescribe antidepressant and schedule follow-up in 2 weeks",
        isCorrect: false,
        explanation:
          "While antidepressants are indicated, immediate risk assessment and safety planning needed first.",
      },
      {
        id: "d",
        text: "Admit to psychiatric hospital and initiate electroconvulsive therapy",
        isCorrect: false,
        explanation:
          "Hospitalization and ECT may be indicated depending on risk assessment, but assessment is first.",
      },
    ],
    explanation:
      "Suicide risk assessment is essential in psychiatric patients, especially with mood disorders and ideation. Risk factors for suicide in bipolar depression: (1) current depressive episode, (2) suicidal ideation with plan, (3) previous attempt(s), (4) access to means, (5) hopelessness. Protective factors: social support, reasons to live, treatment engagement, religious beliefs. Assessment determines intervention level: (1) Low risk: outpatient management with close follow-up, (2) Moderate risk: intensive outpatient or partial hospitalization, (3) High risk: inpatient psychiatric hospitalization. Management: (1) medication optimization (antidepressants + mood stabilizers), (2) psychotherapy, (3) means restriction, (4) frequent monitoring.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-02-TOP-016",
    textbookRefs: [
      { book: "Suicide Assessment and Management", chapter: "Risk Evaluation", edition: "Current" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 42-year-old male presents with grandiosity, decreased need for sleep (4 hours), spending sprees, and pressured speech. He denies any prior mood episodes. What is the critical distinction that affects treatment?",
    clinicalVignette:
      "A 42-year-old male with first manic episode: grandiosity, decreased sleep, increased activity.",
    options: [
      {
        id: "a",
        text: "Determine if this is Bipolar I (distinct manic episode) vs Bipolar II (hypomanic episode with major depressive episodes)",
        isCorrect: true,
        explanation:
          "Bipolar I: distinct manic episodes (≥7 days with severe symptoms requiring hospitalization/causing marked impairment) ± depressive episodes. Bipolar II: hypomanic episodes (≥4 days, less severe than mania, no psychosis, no hospitalization) + major depressive episodes. This patient has full manic episode criteria → Bipolar I diagnosis. This affects long-term treatment: lithium/mood stabilizers required for Bipolar I.",
      },
      {
        id: "b",
        text: "Assess whether this is a first manic episode or prior hypomanic episodes occurred",
        isCorrect: false,
        explanation:
          "While this is part of assessment, the primary distinction is I vs II based on mania severity.",
      },
      {
        id: "c",
        text: "Determine if substance use is contributing to manic symptoms",
        isCorrect: false,
        explanation:
          "Substance screening is important but does not change the Bipolar I vs II distinction.",
      },
      {
        id: "d",
        text: "Assess for psychotic features to determine if antipsychotics needed",
        isCorrect: false,
        explanation:
          "Psychosis assessment is important but not the primary distinguishing feature between Bipolar I and II.",
      },
    ],
    explanation:
      "Bipolar I disorder is characterized by one or more manic episodes (≥7 days, often requiring hospitalization) with or without depressive episodes. Bipolar II disorder: one or more hypomanic episodes (≥4 days) plus one or more major depressive episodes, but NO manic episodes. Key differences: (1) severity (mania causes marked impairment/psychosis, hypomania does not), (2) duration (7 vs 4 days), (3) hospitalization need. This patient has distinct manic episode → Bipolar I. Prognosis: Bipolar I more severe with higher relapse rates. Treatment: mood stabilizers (lithium, valproate, lamotrigine) essential for Bipolar I maintenance to prevent relapse.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-03-TOP-017",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Bipolar Disorder", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 58-year-old male with major depressive disorder has been treated with sertraline 150 mg for 8 weeks with persistent anhedonia, fatigue, and insomnia. He has no medical comorbidities. What is the most appropriate next intervention?",
    clinicalVignette:
      "A 58-year-old male with inadequate response to SSRI after adequate duration and dose.",
    options: [
      {
        id: "a",
        text: "Add bupropion XL 300 mg for augmentation targeting dopamine/norepinephrine",
        isCorrect: true,
        explanation:
          "Bupropion augmentation is effective for SSRI-resistant depression because: (1) different mechanism (dopamine/norepinephrine vs serotonin), (2) addresses anhedonia/fatigue (dopamine effects), (3) may counter sexual dysfunction from SSRI, (4) activating rather than sedating. Typical augmentation: start 150 mg XL, increase to 300 mg. Alternative approaches: switch to SNRI, add aripiprazole, or add thyroid hormone.",
      },
      {
        id: "b",
        text: "Switch to different SSRI monotherapy",
        isCorrect: false,
        explanation:
          "Response rates to sequential SSRIs are similar (~25%). Augmentation more effective than switching.",
      },
      {
        id: "c",
        text: "Add benzodiazepine for anxiety and sleep",
        isCorrect: false,
        explanation:
          "Benzodiazepines are not antidepressants and worsen long-term outcomes in depression.",
      },
      {
        id: "d",
        text: "Recommend psychotherapy without medication changes",
        isCorrect: false,
        explanation:
          "While psychotherapy is helpful, medication optimization needed first given inadequate response.",
      },
    ],
    explanation:
      "Depression treatment strategies for inadequate response: (1) Dose optimization: increase SSRI dose (may help 20%), (2) Time: continue 8-12 weeks before concluding failure, (3) Switch: change to different antidepressant class (SNRI, bupropion, TCA) - response rate ~25%, (4) Augmentation: add second agent - more effective than switching. Augmentation agents: aripiprazole, bupropion, lithium, T3 thyroid hormone, buspirone. Bupropion is ideal for anhedonia/fatigue-predominant depression. Combined therapy (medication + psychotherapy) most effective. This patient needs intervention now given 8-week adequate trial.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-02-TOP-018",
    textbookRefs: [
      { book: "Psychopharmacology", chapter: "Antidepressants", edition: "Current" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 38-year-old female with generalized anxiety disorder presents with persistent worry about finances, health, and family relationships for 8 months, accompanied by muscle tension, irritability, and sleep disturbance. What is the pathophysiological basis for her anxiety?",
    clinicalVignette:
      "A 38-year-old female with GAD with worry, somatic symptoms, and sleep disturbance.",
    options: [
      {
        id: "a",
        text: "Hyperactivity of amygdala and reduced prefrontal inhibition of threat processing",
        isCorrect: true,
        explanation:
          "GAD neurobiological model: (1) hyperactive amygdala (fear/threat circuitry overactive), (2) reduced prefrontal cortex activation (impaired emotional regulation), (3) reduced GABA inhibitory neurotransmission (resulting in hyperarousal), (4) elevated glutamate excitatory neurotransmission. This leads to excessive worry and physiological arousal (muscle tension, sleep disturbance).",
      },
      {
        id: "b",
        text: "Dopamine deficiency in ventral striatum",
        isCorrect: false,
        explanation:
          "Dopamine dysfunction is more characteristic of depression and ADHD, not GAD.",
      },
      {
        id: "c",
        text: "Serotonin excess in nucleus accumbens",
        isCorrect: false,
        explanation:
          "GAD involves serotonin insufficiency, and SSRIs (serotonin enhancers) are treatment.",
      },
      {
        id: "d",
        text: "Acetylcholine hyperactivity in hippocampus",
        isCorrect: false,
        explanation:
          "Acetylcholine dysfunction is not the primary mechanism in GAD.",
      },
    ],
    explanation:
      "GAD pathophysiology involves: (1) Genetic predisposition (heritability ~30-40%), (2) Neurobiological factors: reduced GABA/glutamate imbalance (GABA-ergic hypoactivity), hyperactive amygdala, reduced ventromedial prefrontal cortex control of threat processing, (3) Serotonin insufficiency (SSRIs are first-line), (4) Cognitive factors: threat overestimation, difficulty tolerating uncertainty. Treatment mechanisms: (1) SSRIs/SNRIs enhance serotonin/norepinephrine, (2) Benzodiazepines enhance GABA (short-term only), (3) CBT targets catastrophic thinking and worry.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-10-TOP-019",
    textbookRefs: [
      { book: "Neurobiology of Anxiety Disorders", chapter: "GAD Mechanisms", edition: "Current" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 26-year-old male with schizophrenia has been stable on olanzapine 15 mg daily for 2 years. He now complains of significant weight gain (15 kg in 2 years), elevated fasting glucose (120 mg/dL), and high cholesterol (260 mg/dL). What is the mechanism of metabolic side effects?",
    clinicalVignette:
      "A 26-year-old male on olanzapine with weight gain and metabolic abnormalities (hyperglycemia, hyperlipidemia).",
    options: [
      {
        id: "a",
        text: "H1 histamine receptor blockade increasing appetite and weight gain, combined with insulin resistance",
        isCorrect: true,
        explanation:
          "Atypical antipsychotics (particularly olanzapine, clozapine) cause metabolic syndrome through: (1) H1 receptor antagonism → appetite stimulation and weight gain, (2) 5-HT2C receptor antagonism → impaired appetite suppression, (3) Direct insulin resistance (independent of weight), (4) Lipid metabolism effects. Results: weight gain, hyperglycemia, dyslipidemia. Risk for diabetes increases 2-4 fold.",
      },
      {
        id: "b",
        text: "Dopamine blockade causing decreased activity and weight gain",
        isCorrect: false,
        explanation:
          "While decreased activity contributes, the mechanism involves receptor subtypes affecting metabolism.",
      },
      {
        id: "c",
        text: "Direct effect on pancreatic beta cells reducing insulin secretion",
        isCorrect: false,
        explanation:
          "Antipsychotics cause insulin resistance, not beta cell failure.",
      },
      {
        id: "d",
        text: "Medication interaction with diet",
        isCorrect: false,
        explanation:
          "The metabolic effects are direct, not from diet interaction.",
      },
    ],
    explanation:
      "Atypical antipsychotics have varying metabolic risk profiles. High risk: clozapine, olanzapine. Moderate: risperidone, paliperidone. Low risk: aripiprazole, quetiapine. Mechanisms: (1) H1/5-HT2C antagonism → appetite/weight, (2) Direct insulin resistance from receptor signaling, (3) Hyperglycemia independent of weight, (4) Dyslipidemia. Consequences: metabolic syndrome (obesity, diabetes, hypertension, dyslipidemia) → cardiovascular mortality. Prevention/management: (1) lifestyle intervention (diet, exercise), (2) monitor weight, glucose, lipids regularly, (3) switch to lower-risk agent (aripiprazole, quetiapine), (4) add metformin for glucose control. Recent guidelines recommend baseline and regular metabolic monitoring.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-01-TOP-020",
    textbookRefs: [
      { book: "Psychopharmacology", chapter: "Antipsychotics and Metabolic Effects", edition: "Current" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old female presents with persistent difficulty falling asleep despite feeling tired, frequent nighttime awakenings, and unrefreshed sleep for 3 months affecting work performance. What is the most likely diagnosis?",
    clinicalVignette:
      "A 45-year-old female with insomnia characterized by sleep initiation and maintenance difficulties.",
    options: [
      {
        id: "a",
        text: "Insomnia disorder",
        isCorrect: true,
        explanation:
          "Insomnia disorder requires: (1) difficulty initiating/maintaining sleep or nonrestorative sleep, (2) ≥3 nights/week for ≥3 months, (3) daytime consequences (fatigue, cognitive impairment), (4) not explained by insufficient sleep opportunity or medical/psychiatric condition. This patient has difficulty falling and staying asleep, 3-month duration, and functional impairment. Common causes: stress, anxiety, poor sleep hygiene, aging.",
      },
      {
        id: "b",
        text: "Sleep apnea",
        isCorrect: false,
        explanation:
          "Sleep apnea presents with loud snoring and witnessed apneas, not just difficulty falling asleep.",
      },
      {
        id: "c",
        text: "Restless leg syndrome",
        isCorrect: false,
        explanation:
          "RLS presents with uncomfortable sensations in legs before sleep, not difficulty initiating sleep.",
      },
      {
        id: "d",
        text: "Circadian rhythm sleep disorder",
        isCorrect: false,
        explanation:
          "Circadian disorders present with inability to sleep at conventional times, not general difficulty sleeping.",
      },
    ],
    explanation:
      "Insomnia disorder is characterized by persistent dissatisfaction with sleep quality/quantity. Subtypes: (1) Onset insomnia (difficulty initiating), (2) Maintenance insomnia (frequent awakenings), (3) Terminal insomnia (early morning awakening), (4) Mixed. Assessment requires: exclusion of underlying sleep disorders (sleep apnea, RLS), medications causing insomnia, substance use, psychiatric/medical conditions. Treatment: (1) Cognitive behavioral therapy for insomnia (CBTi) is gold standard, (2) Sleep hygiene optimization, (3) Medications (sedating antidepressants, melatonin, benzodiazepines for short-term only). This patient's presentation warrants CBTi and sleep hygiene evaluation before medication.",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-12-TOP-021",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Sleep Disorders", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 30-year-old female with major depressive disorder is started on sertraline and after 1 week reports new-onset suicidal ideation. She denies any suicidal intent before treatment. What is the most likely explanation?",
    clinicalVignette:
      "A 30-year-old female developing suicidal ideation shortly after SSRI initiation.",
    options: [
      {
        id: "a",
        text: "Akathisia and behavioral activation from SSRI causing suicidal ideation",
        isCorrect: true,
        explanation:
          "Black box warning: SSRIs can cause suicidality, particularly in young adults (age <25) and early treatment (first 1-2 weeks). Mechanism: (1) behavioral activation (increased energy/motivation) before mood improvement → can energize depressed patient to act on passive ideation, (2) akathisia (restlessness) causing agitation and behavioral disinhibition, (3) serotonin effects on impulsivity. Risk highest in first 2 weeks of treatment or dose changes.",
      },
      {
        id: "b",
        text: "Underlying personality disorder manifesting",
        isCorrect: false,
        explanation:
          "New-onset ideation temporally related to SSRI suggests medication effect, not personality pathology.",
      },
      {
        id: "c",
        text: "Serotonin syndrome causing suicidality",
        isCorrect: false,
        explanation:
          "Serotonin syndrome presents with tremor, hyperthermia, rigidity, not primarily suicidal ideation.",
      },
      {
        id: "d",
        text: "Worsening of depression requiring hospitalization",
        isCorrect: false,
        explanation:
          "While hospitalization may be needed, the mechanism is SSRI-induced behavioral activation.",
      },
    ],
    explanation:
      "SSRI-induced suicidality: FDA black box warning (2004) for antidepressants in children, adolescents, young adults (age <25). Mechanism: (1) behavioral activation before mood improvement (antidepressants increase energy/motivation), (2) akathisia/agitation from serotonin effects, (3) impulsivity increase from serotonin effects, (4) disinhibition. Risk highest: first 1-2 weeks, dose increases. Management: (1) informed consent about risk, (2) close monitoring (weekly first 2-4 weeks), (3) family involvement, (4) continue despite ideation if not at immediate risk, (5) adjust dose/switch if severe, (6) hospitalization if intent develops. Benefits typically outweigh risks in proper monitoring context.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-02-TOP-022",
    textbookRefs: [
      { book: "Psychopharmacology", chapter: "SSRI Safety", edition: "Current" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old male with schizophrenia presents with muscle rigidity, fever (39.2°C), elevated CPK (1200 U/L), and confusion despite only 2 weeks on haloperidol 10 mg daily. What is the most likely diagnosis and immediate management?",
    clinicalVignette:
      "A 28-year-old male on haloperidol with rigidity, fever, altered mental status, elevated CPK.",
    options: [
      {
        id: "a",
        text: "Neuroleptic malignant syndrome (NMS); discontinue haloperidol immediately, supportive care, dantrolene/bromocriptine",
        isCorrect: true,
        explanation:
          "NMS is rare but life-threatening antipsychotic adverse effect. Features: (1) hyperthermia (>38.5°C), (2) muscle rigidity (lead-pipe), (3) altered mental status (confusion, catatonia), (4) autonomic instability (tachycardia, hypertension, diaphoresis), (5) elevated CPK (muscle breakdown). Management: (1) IMMEDIATE discontinuation of antipsychotic, (2) supportive care (IV hydration, cooling), (3) dantrolene (blocks muscle calcium release), (4) bromocriptine (dopamine agonist), (5) ICU monitoring for complications (rhabdomyolysis, ARF, DIC).",
      },
      {
        id: "b",
        text: "Infection requiring antibiotics",
        isCorrect: false,
        explanation:
          "While infection must be ruled out, the clinical presentation and temporal relationship to haloperidol strongly suggest NMS.",
      },
      {
        id: "c",
        text: "Serotonin syndrome from drug interaction",
        isCorrect: false,
        explanation:
          "Serotonin syndrome occurs with serotonergic agents, not haloperidol alone.",
      },
      {
        id: "d",
        text: "Acute dystonic reaction requiring anticholinergic medication",
        isCorrect: false,
        explanation:
          "Acute dystonia presents with muscle spasm, not rigidity, fever, and altered mental status.",
      },
    ],
    explanation:
      "Neuroleptic malignant syndrome is a rare (0.1-2% of antipsychotic exposure) but medical emergency with 10% mortality if untreated. Presentation: tetrad of hyperthermia, rigidity, altered mental status, autonomic instability (can be incomplete). Risk factors: high-potency typical antipsychotics (haloperidol, fluphenazine), intramuscular injection, dehydration, agitation, previous NMS episode. Complications: rhabdomyolysis → acute renal failure, DIC, cardiac arrhythmias. Management: immediate antipsychotic discontinuation, aggressive supportive care, dantrolene (2.5-10 mg/kg IV), bromocriptine (5-15 mg TID). Recovery typically 24 hours to 1 week. Rechallenging antipsychotics after NMS is controversial; if necessary, use low-potency atypical agent with careful monitoring.",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-01-TOP-023",
    textbookRefs: [
      { book: "Psychopharmacology", chapter: "Antipsychotic Adverse Effects", edition: "Current" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male with chronic schizophrenia has been on antipsychotics for 15 years and develops involuntary lip smacking, tongue protrusion, and jaw movements. What is the mechanism of this adverse effect?",
    clinicalVignette:
      "A 50-year-old male with tardive dyskinesia after prolonged antipsychotic exposure.",
    options: [
      {
        id: "a",
        text: "Dopamine receptor supersensitivity in basal ganglia from chronic D2 blockade",
        isCorrect: true,
        explanation:
          "Tardive dyskinesia develops from chronic antipsychotic-induced dopamine receptor supersensitivity. Mechanism: (1) chronic D2 blockade → compensatory upregulation of dopamine receptors in basal ganglia, (2) when antipsychotic maintained, supersensitive receptors hyperstimulated by available dopamine, (3) results in involuntary movements. Risk factors: older age, female sex, longer duration, higher dose, typical antipsychotics. Symptoms may persist despite medication discontinuation.",
      },
      {
        id: "b",
        text: "GABA deficiency in basal ganglia",
        isCorrect: false,
        explanation:
          "While GABA dysfunction occurs, dopamine supersensitivity is the primary mechanism.",
      },
      {
        id: "c",
        text: "Serotonin excess from antipsychotic metabolism",
        isCorrect: false,
        explanation:
          "Serotonin is not the primary mechanism in tardive dyskinesia.",
      },
      {
        id: "d",
        text: "Permanent neuronal damage from medication toxicity",
        isCorrect: false,
        explanation:
          "While some structural changes can occur, the mechanism is functional dopamine supersensitivity.",
      },
    ],
    explanation:
      "Tardive dyskinesia is a delayed antipsychotic adverse effect appearing after months/years of treatment. Symptoms: involuntary oral-facial movements (lip smacking, tongue protrusion, jaw clenching), limb movements, trunk dyskinesia. Pathophysiology: chronic dopamine D2 receptor blockade → compensatory upregulation of dopamine receptors and increased dopamine sensitivity → hyperactive dopaminergic transmission. Risk: older age (50+ years), female, longer duration, higher doses, typical antipsychotics. Atypical antipsychotics have lower TD risk. Management: (1) prevention (minimize antipsychotic dose/duration), (2) early detection (regular examination with AIMS scale), (3) dose reduction if possible, (4) switch to different antipsychotic, (5) vestigial compounds (deutetrabenazine, valbenazine - VMAT2 inhibitors) slow progression.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-01-TOP-024",
    textbookRefs: [
      { book: "Psychopharmacology", chapter: "Tardive Dyskinesia", edition: "Current" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old male with borderline personality disorder presents with intense fear of abandonment, unstable relationships, impulsive spending/substance use, and recurrent self-harm. What is the primary therapeutic approach?",
    clinicalVignette:
      "A 35-year-old male with BPD manifesting emotional dysregulation, unstable relationships, and impulsive behaviors.",
    options: [
      {
        id: "a",
        text: "Dialectical behavior therapy (DBT) for emotional regulation and behavioral change",
        isCorrect: true,
        explanation:
          "DBT is the gold-standard treatment for BPD. Developed specifically for BPD by Marsha Linehan. Components: (1) individual therapy targeting behaviors in order (suicide prevention, therapy interference, quality of life), (2) skills training (mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness), (3) phone coaching, (4) therapist consultation team. Evidence shows DBT significantly reduces self-harm, suicidality, and hospitalizations. Treatment duration typically 1-2 years.",
      },
      {
        id: "b",
        text: "Psychopharmacology with mood stabilizers and antipsychotics",
        isCorrect: false,
        explanation:
          "Medication has limited efficacy in BPD core symptoms. Psychotherapy is primary; medications adjunctive for comorbid conditions.",
      },
      {
        id: "c",
        text: "Psychoanalysis focused on childhood trauma",
        isCorrect: false,
        explanation:
          "While trauma exploration may be part of therapy, DBT is more effective than psychoanalysis for BPD.",
      },
      {
        id: "d",
        text: "Hospitalization and behavioral restriction",
        isCorrect: false,
        explanation:
          "Hospitalization should be brief and crisis-focused; long-term treatment is outpatient.",
      },
    ],
    explanation:
      "Borderline personality disorder is characterized by: (1) pervasive instability in relationships, self-image, affect, behavior, (2) fear of abandonment, (3) impulsivity in ≥2 harmful domains, (4) recurrent suicidal/self-harm behavior, (5) identity disturbance, (6) chronic emptiness, (7) inappropriate anger, (8) transient paranoia/dissociation. Prevalence 1-2%, more common in women. Etiology: genetic predisposition, environmental trauma, neurobiology (serotonin/dopamine dysregulation). Treatment: DBT is most effective, other psychotherapies (MBT, mentalization-based therapy) also helpful. Medications treat comorbid conditions (depression, anxiety, ADHD) but do not treat BPD core symptoms.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-13-TOP-025",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Personality Disorders", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 32-year-old female presents with recurrent panic attacks (unexpected surges of fear with heart palpitations, sweating, chest pain) occurring 2-3 times per week for 2 months, leading to agoraphobia (fear of leaving home). What is the primary fear in agoraphobia?",
    clinicalVignette:
      "A 32-year-old female with panic disorder and agoraphobia from fear of panic consequences.",
    options: [
      {
        id: "a",
        text: "Fear of having panic attacks in situations where escape is difficult or help unavailable",
        isCorrect: true,
        explanation:
          "Agoraphobia in the context of panic disorder develops from anxiety about having panic attacks in situations where one cannot escape or get help. This fear leads to avoidance of: (1) crowded places, (2) public transportation, (3) being outside home alone. Panic is the primary disorder; agoraphobia is secondary to fear of panic consequences.",
      },
      {
        id: "b",
        text: "Fear of crowded places and social situations",
        isCorrect: false,
        explanation:
          "Social phobia involves fear of social evaluation, not fear of panic attacks.",
      },
      {
        id: "c",
        text: "Fear of separation from caregiver",
        isCorrect: false,
        explanation:
          "Separation anxiety involves fear of being separated, not agoraphobia mechanisms.",
      },
      {
        id: "d",
        text: "Fear of contamination or disease in public places",
        isCorrect: false,
        explanation:
          "Contamination fear characterizes OCD, not agoraphobia.",
      },
    ],
    explanation:
      "Panic disorder presents with recurrent unexpected panic attacks (sudden fear surge with physical symptoms: palpitations, sweating, chest pain, dyspnea, dizziness, derealization). Agoraphobia often develops secondary to panic disorder as patient fears having panic attacks in situations where escape is difficult. Avoidance patterns expand over time, potentially leading to housebound status. Treatment: (1) SSRIs/SNRIs for panic, (2) CBT with exposure therapy most effective, (3) benzodiazepines short-term only for breakthrough symptoms, (4) behavioral intervention: gradual exposure to feared situations. Cognitive therapy addresses catastrophic misinterpretation of panic symptoms (chest pain → heart attack).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-10-TOP-026",
    textbookRefs: [
      { book: "DSM-5 Diagnostic and Statistical Manual", chapter: "Anxiety Disorders", edition: "5th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 40-year-old male with major depressive disorder is prescribed fluoxetine and cocaine use, resulting in tremor, confusion, hyperthermia (38.8°C), and hyperreflexia. What is the primary complication and management?",
    clinicalVignette:
      "A 40-year-old male on SSRI with cocaine use presenting with serotonin syndrome symptoms.",
    options: [
      {
        id: "a",
        text: "Serotonin syndrome from combined serotonergic effect; discontinue SSRI and cocaine, supportive care",
        isCorrect: true,
        explanation:
          "Serotonin syndrome results from excessive serotonergic activity. Triggers: (1) SSRIs + stimulants (cocaine, amphetamines), (2) SSRIs + other serotonergic drugs (MAOIs, tramadol, TCAs), (3) High-dose SSRIs. Features: tremor, hyperreflexia, hyperthermia, confusion, agitation, muscle rigidity. Management: (1) discontinue serotonergic drugs, (2) supportive care (cooling, hydration), (3) benzodiazepines for agitation/seizures, (4) cyproheptadine (5-HT antagonist) for severe cases.",
      },
      {
        id: "b",
        text: "Neuroleptic malignant syndrome from antipsychotic use",
        isCorrect: false,
        explanation:
          "NMS occurs with antipsychotics, not SSRIs. This is serotonin syndrome.",
      },
      {
        id: "c",
        text: "Cocaine overdose requiring cardiac monitoring",
        isCorrect: false,
        explanation:
          "While cocaine is involved, the acute presentation is serotonin syndrome.",
      },
      {
        id: "d",
        text: "Acute psychosis from cocaine requiring antipsychotics",
        isCorrect: false,
        explanation:
          "While cocaine psychosis can occur, this patient's presentation is serotonin syndrome.",
      },
    ],
    explanation:
      "Serotonin syndrome is a potentially life-threatening condition from excessive serotonergic activity. Triggering combinations: (1) SSRI + stimulants (cocaine, amphetamines, methylphenidate), (2) SSRI + other serotonergics (MAOI, tramadol, linezolid, tryptophan, St. John's Wort), (3) High-dose SSRIs. Hunter Criteria: (1) recent serotonergic agent use, (2) spontaneous clonus, OR (3) inducible/ocular clonus plus agitation/confusion/hypertension. Management: immediate discontinuation of serotonergic agents, supportive care, benzodiazepines for symptoms, cyproheptadine (non-selective 5-HT antagonist) for severe cases, ICU for severe hyperthermia or complications.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-02-TOP-027",
    textbookRefs: [
      { book: "Psychopharmacology", chapter: "Drug Interactions", edition: "Current" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old female with bipolar II disorder has been stable on lamotrigine 200 mg daily for 18 months. She becomes pregnant. What is the critical management decision regarding lamotrigine?",
    clinicalVignette:
      "A 28-year-old female with bipolar II disorder on lamotrigine, now pregnant.",
    options: [
      {
        id: "a",
        text: "Abruptly discontinue lamotrigine to protect fetus",
        isCorrect: false,
        explanation:
          "Abrupt discontinuation increases mood episode risk. Gradual taper if needed, with careful mood monitoring.",
      },
      {
        id: "b",
        text: "Continue lamotrigine at current dose with close mood and lamotrigine level monitoring for possible concentration changes",
        isCorrect: true,
        explanation:
          "Lamotrigine is pregnancy category C (older classification; FDA now uses different system). It has lower teratogenic risk than lithium or valproate. Pregnancy increases lamotrigine metabolism (due to progesterone-induced glucuronidation) → lower serum levels. Management: (1) continue current dose, (2) monitor lamotrigine levels (may need increase), (3) close psychiatric monitoring for mood destabilization, (4) discuss risks/benefits with patient, (5) coordinate with obstetrics.",
      },
      {
        id: "c",
        text: "Switch to lithium which is safer in pregnancy",
        isCorrect: false,
        explanation:
          "Lithium has higher teratogenic risk (fetal cardiac anomalies) than lamotrigine.",
      },
      {
        id: "d",
        text: "Switch to valproate for better mood control",
        isCorrect: false,
        explanation:
          "Valproate is highly teratogenic (neural tube defects, developmental delays). Avoid in pregnancy.",
      },
    ],
    explanation:
      "Psychiatric medication in pregnancy requires risk-benefit analysis. Mood disorder relapse in pregnancy carries maternal/fetal risks. Teratogenic risk by mood stabilizer: (1) Lithium: 1-2% increased cardiac defects (Ebstein anomaly), especially if used in first trimester, (2) Valproate: 1-2% neural tube defects, developmental delays - AVOID, (3) Carbamazepine: 1% neural tube defects, (4) Lamotrigine: <1% teratogenic risk, relatively safest option. Challenge with lamotrigine: pregnancy increases metabolism → lower levels → mood destabilization risk. Management requires lamotrigine level monitoring and psychiatric follow-up. SSRIs and atypical antipsychotics also used in pregnancy (relatively safer).",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-03-TOP-028",
    textbookRefs: [
      { book: "Psychopharmacology in Pregnancy", chapter: "Mood Stabilizers", edition: "Current" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male with Alzheimer's disease develops agitation, aggression, and refusal to bathe. Antipsychotic haloperidol is prescribed. After 3 doses, he develops acute confusion, rigidity, and fever. What is the clinical significance?",
    clinicalVignette:
      "A 55-year-old male with Alzheimer's disease on haloperidol developing acute neurological changes.",
    options: [
      {
        id: "a",
        text: "Increased sensitivity to antipsychotics in elderly with dementia; higher risk of stroke, mortality, NMS",
        isCorrect: true,
        explanation:
          "Elderly with dementia have increased antipsychotic sensitivity. FDA black box warning: antipsychotics increase mortality (stroke, infection, cardiac) and serious adverse events in elderly with dementia. Mechanism: (1) altered pharmacokinetics/pharmacodynamics, (2) comorbid conditions, (3) polypharmacy. NMS risk significantly elevated. This patient likely has antipsychotic-induced NMS or severe EPS.",
      },
      {
        id: "b",
        text: "Normal expected response requiring continued antipsychotic therapy",
        isCorrect: false,
        explanation:
          "The acute symptoms indicate adverse effect, not expected response.",
      },
      {
        id: "c",
        text: "Infection developing coincidentally requiring antibiotics",
        isCorrect: false,
        explanation:
          "The temporal relationship to antipsychotic suggests medication-induced, not infection.",
      },
      {
        id: "d",
        text: "Progression of Alzheimer's disease requiring higher antipsychotic doses",
        isCorrect: false,
        explanation:
          "Acute neurological changes indicate medication effect, not disease progression.",
      },
    ],
    explanation:
      "Antipsychotics in elderly with dementia: FDA black box warning (2005) warns of increased mortality and serious adverse events. Increased risks: (1) stroke (2-3 fold), (2) mortality (1.5-2 fold), (3) NMS (higher incidence), (4) EPS (tardive dyskinesia). Causes: increased sensitivity, polypharmacy, comorbidities. Treatment of behavioral symptoms in dementia: (1) non-pharmacological first-line (environmental modification, structured activities, music), (2) if pharmacotherapy needed, use lowest dose for shortest duration, (3) atypical antipsychotics preferred over typical (lower risk), (4) alternatives: SSRIs for anxiety/agitation, trazodone for sleep, carbamazepine for agitation. This patient needs immediate haloperidol discontinuation and supportive care.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-11-TOP-029",
    textbookRefs: [
      { book: "Psychopharmacology", chapter: "Antipsychotics in Elderly", edition: "Current" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 32-year-old female with bipolar I disorder, depressed, is prescribed sertraline. One week later, she develops elevated mood, racing thoughts, and decreased need for sleep. What is the clinical concern?",
    clinicalVignette:
      "A 32-year-old female with bipolar depression on SSRI developing manic symptoms.",
    options: [
      {
        id: "a",
        text: "Antidepressant-induced mood switching/mania in bipolar disorder",
        isCorrect: true,
        explanation:
          "Antidepressants (SSRIs, SNRIs, TCAs) can trigger mood switching (mania/hypomania) in bipolar disorder. Risk higher: (1) Bipolar I (10-50% risk) vs Bipolar II, (2) Tricyclic antidepressants > SSRIs, (3) SNRI > SSRI. Mechanism: serotonin increases without dopamine regulation → destabilization of mood. Prevention: always use mood stabilizer before/with antidepressant in bipolar depression. This patient should have been on mood stabilizer first.",
      },
      {
        id: "b",
        text: "Natural improvement of depression showing treatment response",
        isCorrect: false,
        explanation:
          "Elevated mood with decreased sleep suggests mania, not depression improvement.",
      },
      {
        id: "c",
        text: "Serotonin syndrome from medication",
        isCorrect: false,
        explanation:
          "This patient is on monotherapy; serotonin syndrome requires drug combinations.",
      },
      {
        id: "d",
        text: "Anxiety worsening requiring antipsychotic addition",
        isCorrect: false,
        explanation:
          "The presentation suggests mood switching, not anxiety worsening.",
      },
    ],
    explanation:
      "Antidepressant use in bipolar disorder is controversial and carries mood switch risk. Current guidelines: (1) bipolar depression is preferably treated with mood stabilizers, lamotrigine, or atypical antipsychotics, (2) if antidepressant used, must combine with mood stabilizer/antipsychotic, (3) avoid tricyclic antidepressants (highest mood switch risk), (4) SSRIs lower risk than SNRIs. Mood switch: acceleration of depressed mood to mania/hypomania within days/weeks. Management of antidepressant-induced mood switch: (1) discontinue antidepressant, (2) initiate/optimize mood stabilizer, (3) add antipsychotic if needed for acute mania control. Prevention: always use mood stabilizer before antidepressant in bipolar patients.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "PS",
    topicCode: "PS-MOD-03-TOP-030",
    textbookRefs: [
      { book: "Psychopharmacology", chapter: "Bipolar Treatment", edition: "Current" },
    ],
  },
];
