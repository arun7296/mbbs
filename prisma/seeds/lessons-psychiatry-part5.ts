import type { TopicLessons } from "./content-loader";

export const psychiatryPart5Lessons: TopicLessons[] = [
  {
    topicCode: "PS-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "psychopharmacology-basics-layer-1-foundation",
        title: "Psychopharmacology Basics - Foundation",
        estimatedMinutes: 25,
        summary: "Drug classes, mechanisms, neurotransmitters, basic pharmacokinetics, receptor types.",
        contentMd: `# Psychopharmacology Basics - Foundation

## Major Psychiatric Drug Classes

### Antidepressants
- **SSRIs** (Selective Serotonin Reuptake Inhibitors): Paroxetine, sertraline, fluoxetine
- **SNRIs** (Serotonin-Norepinephrine Reuptake Inhibitors): Venlafaxine, duloxetine
- **Tricyclic antidepressants (TCAs)**: Amitriptyline, nortriptyline (older, more side effects)
- **Monoamine oxidase inhibitors (MAOIs)**: Phenelzine, tranylcypromine (food interactions)

### Antipsychotics
- **First-generation (Typical)**: Haloperidol, chlorpromazine (high EPS risk)
- **Second-generation (Atypical)**: Risperidone, olanzapine, aripiprazole (lower EPS, metabolic risks)

### Anxiolytics/Hypnotics
- **Benzodiazepines**: Lorazepam, alprazolam, diazepam (GABA enhancers)
- **Non-benzodiazepine hypnotics**: Zolpidem, zaleplon (Z-drugs)
- **Buspirone**: 5-HT1A partial agonist (non-benzodiazepine)

### Mood Stabilizers
- **Lithium**: Gold standard for bipolar (requires monitoring)
- **Anticonvulsants**: Valproate, carbamazepine, lamotrigine
- **Atypical antipsychotics**: Effective for mood stabilization

## Neurotransmitter Targets

### Serotonin (5-HT)
- **Depression**: Decreased 5-HT activity
- **Anxiety**: 5-HT dysregulation
- **Drug targets**: SSRIs/SNRIs increase 5-HT

### Norepinephrine (NE)
- **Depression**: Decreased NE activity
- **Attention**: NE deficiency in ADHD
- **Drug targets**: SNRIs, TCAs, stimulants increase NE

### Dopamine (DA)
- **Psychosis**: Excess DA (mesolimbic), deficiency (mesocortical)
- **Motivation**: DA-dependent (avolition in depression, schizophrenia)
- **Drug targets**: Antipsychotics block D2 receptors

### GABA
- **Anxiety/seizures**: GABA hypofunction
- **Drug targets**: Benzodiazepines enhance GABA-A

## Receptor Types & Functions
- **D2 dopamine**: Antipsychotic target; motor, reward
- **5-HT1A**: Anxiety regulation; buspirone target
- **5-HT2A**: Mood regulation
- **H1 histamine**: Sedation (antihistamines cause drowsiness)
- **M1 muscarinic**: Memory, cognition (anticholinergics impair)

## Basic Pharmacokinetics
- **Absorption**: Varies by drug, food effects
- **Distribution**: CNS penetration depends on lipophilicity, blood-brain barrier
- **Metabolism**: Hepatic (CYP450 enzymes); interactions common
- **Elimination**: Renal; renal impairment increases drug levels
- **Half-life**: Time to 50% elimination; determines dosing frequency`,
        mnemonics: [
          { text: "SSRI = Serotonin; SNRI = Serotonin + Norepinephrine; TCA = Tricyclic (older)", explanation: "Antidepressant classes" },
          { text: "DA excess mesolimbic = psychosis; DA deficiency mesocortical = negative symptoms", explanation: "Dopamine hypothesis" },
          { text: "GABA ↓ = anxiety, seizures; Benzodiazepines enhance GABA-A", explanation: "Anxiolytic mechanism" },
          { text: "Lithium requires monitoring (level 0.6-1.2 mEq/L); renal/thyroid toxicity risk", explanation: "Mood stabilizer" }
        ],
        keyPoints: [
          "Neurotransmitter dysregulation drives psychiatric symptoms; drugs target specific transmitters",
          "SSRIs/SNRIs first-line antidepressants (depression, anxiety); TCAs less used due to side effects",
          "Antipsychotics: FGA cheap but high EPS; SGA better tolerability but metabolic risk",
          "Benzodiazepines rapid anxiolytic but tolerance develops; use short-term only",
          "Lithium gold standard bipolar but requires monitoring (levels, renal, thyroid function)"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Psychopharmacology: Basics", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Biological Therapies", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "psychopharmacology-basics-layer-2-mechanism",
        title: "Psychopharmacology Basics - Mechanism",
        estimatedMinutes: 30,
        summary: "Drug mechanisms at molecular level, receptor binding, synaptic effects, neuroplasticity.",
        contentMd: `# Psychopharmacology Basics - Mechanism

## Drug Mechanisms of Action

### SSRI Mechanism
- **Action**: Inhibit reuptake of serotonin at presynaptic terminal
- **Effect**: Increased synaptic 5-HT concentration
- **Timeline**: Immediate reuptake block, but behavioral effects delayed 2-4 weeks (adaptive changes)
- **Selectivity**: Variable selectivity for SERT (serotonin transporter)

### Antipsychotic Mechanism
- **D2 blockade**: Main antipsychotic mechanism (blocks dopamine D2 receptors)
- **Positive symptoms**: Mesolimbic D2 blockade reduces delusions/hallucinations (70-80% responsive)
- **Negative symptoms**: Mesocortical D2 blockade may worsen (dopamine hypofunction)
- **SGA advantage**: 5-HT2A blockade modulates mesocortical effects

### Benzodiazepine Mechanism
- **GABA-A enhancement**: Positive allosteric modulation increases Cl- influx
- **Effect**: Neuronal hyperpolarization, reduced firing
- **CNS effects**: Anxiolytic, sedative, anticonvulsant, muscle relaxant

## Adaptive Changes (Neuroplasticity)
### Serotonin System Adaptation
- **Autoreceptor desensitization**: 5-HT1A receptors on raphe neurons become less sensitive
- **Gene expression**: Transcription factors (CREB) activated; long-term changes
- **Timeline**: 2-4 weeks for behavioral effects despite immediate reuptake inhibition
- **Consequence**: Explains lag between drug initiation and symptom improvement

### Dopamine System Changes
- **D2 supersensitivity**: Chronic dopamine antagonism → increased D2 receptors
- **Tardive dyskinesia**: Long-term consequence of dopamine blockade
- **Withdrawal dysphoria**: Dopamine system adjustment after drug discontinuation

## Receptor Binding Properties
- **Affinity**: Strength of drug-receptor binding; higher = more potent
- **Selectivity**: Specificity for target receptor; higher = fewer side effects
- **Occupancy**: Percentage of receptors occupied (relates to efficacy, side effects)
- **Off-target effects**: Binding to unintended receptors causes side effects`,
        mnemonics: [
          { text: "SSRI blocks 5-HT reuptake immediately, but behavior changes take 2-4 weeks (autoreceptor desensitization)", explanation: "Mechanism vs timeline" },
          { text: "Antipsychotic blocks D2: mesolimbic ↓ psychosis, mesocortical worsens negative; SGA adds 5-HT2A blockade", explanation: "Dopamine hypothesis" },
          { text: "Benzodiazepine enhances GABA-A → Cl- influx → neuronal hyperpolarization → anxiolytic", explanation: "GABA mechanism" },
          { text: "Tardive dyskinesia = consequence of D2 supersensitivity from chronic blockade", explanation: "Long-term effect" }
        ],
        keyPoints: [
          "SSRI mechanism immediate (reuptake inhibition) but behavioral effects delayed 2-4 weeks (adaptive changes)",
          "Antipsychotic blocks D2; positive symptoms respond but negative symptoms may worsen",
          "Benzodiazepines enhance GABA; tolerance develops, limiting long-term use",
          "Off-target receptor binding causes side effects (antihistamine = sedation, antimuscarinic = memory impairment)",
          "Chronic drug use causes neuroplastic changes; discontinuation causes withdrawal/rebound symptoms"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Drug Mechanisms", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Molecular and Cellular Biology of Drugs", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "psychopharmacology-basics-layer-3-clinical",
        title: "Psychopharmacology Basics - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical application, side effect management, drug interactions, special populations.",
        contentMd: `# Psychopharmacology Basics - Clinical

## SSRI Clinical Use & Efficacy

### Indication-Specific Dosing
- **Depression**: 20-40mg/day (fluoxetine 20mg, sertraline 50-100mg, paroxetine 20mg)
- **Panic/GAD**: May need higher doses (paroxetine 40-60mg for panic)
- **Onset**: 2-4 weeks noticeable, 8-12 weeks full response

### Side Effects & Management
- **Sexual dysfunction**: 30-50% incidence; management options: dose reduction, drug holiday, switch antidepressant
- **SIADH**: Hyponatremia (especially elderly); monitor sodium, restrict fluids
- **GI upset**: Take with food; transient, resolves in 1-2 weeks
- **Activation/anxiety**: First 1-2 weeks; add benzodiazepine temporarily

### Drug Interactions (CYP450)
- **Paroxetine & fluoxetine**: Strong CYP2D6 inhibitors (multiple interactions)
- **Sertraline**: Moderate inhibitor (fewer interactions, preferred)
- **Important interaction**: SSRI + MAOI = serotonin syndrome (rare but serious)

## Antipsychotic Selection

### First-Generation (FGA)
- **Examples**: Haloperidol, chlorpromazine
- **Efficacy**: Good for positive symptoms
- **Side effects**: HIGH EPS risk, tardive dyskinesia, neuroleptic malignant syndrome
- **Cost**: Cheap (important in India)
- **Use**: Limited to resource-settings or refractory cases

### Second-Generation (SGA)
- **Examples**: Risperidone, olanzapine, aripiprazole, quetiapine
- **Efficacy**: Better for negative symptoms/cognition
- **Side effects**: Lower EPS, but metabolic (weight, diabetes, dyslipidemia)
- **Metabolic risk ranking**: Olanzapine ≥ clozapine > risperidone > quetiapine > aripiprazole
- **Cost**: Higher than FGA

## Managing Antipsychotic Side Effects

### Extrapyramidal Side Effects (EPS)
- **Acute dystonia**: Muscle spasm; treat with benztropine (anticholinergic)
- **Akathisia**: Restlessness; treat with propranolol (beta-blocker) or reduce dose
- **Parkinsonism**: Tremor, rigidity; treat with benztropine or amantadine
- **Tardive dyskinesia**: Involuntary movements (late-onset, potentially irreversible); prevent with lowest effective dose

### Metabolic Monitoring
- **Baseline**: Weight, glucose (fasting), lipid panel, metabolic syndrome parameters
- **Follow-up**: Weight check at weeks 4, 8, 12; labs at 3, 6 months
- **Management**: Diet/exercise counseling, switch to lower-metabolic SGA, add metformin

## Special Populations

### Pregnancy
- **SSRI (especially 2nd/3rd trimester)**: Generally safe; paroxetine slight risk (category C)
- **Antipsychotics**: Essential if psychotic; metabolic monitoring critical
- **Benzodiazepines**: Avoid if possible (3rd trimester risk cleft)
- **Lithium**: Teratogenic (1st trimester cardiac risk); requires careful monitoring

### Elderly
- **Pharmacokinetics**: Reduced metabolism, increased drug levels; start low, go slow
- **Sensitivity**: Enhanced antipsychotic effects (neuroleptic sensitivity syndrome risk)
- **Drug interactions**: Polypharmacy common; check CYP450
- **Falls**: Antipsychotics, benzodiazepines increase fall risk

### Renal Impairment
- **Lithium**: 50-75% reduction in dose (renal clearance impaired)
- **Other drugs**: Adjust based on renal function (some metabolites accumulate)
- **Monitoring**: Drug levels, renal function periodically

## Drug Interactions

### Major Interactions
- **SSRI + MAOI**: Serotonin syndrome (rare but serious; avoid combination)
- **SSRI + Warfarin**: Increased bleeding risk (inhibit platelet aggregation)
- **Antipsychotic + Anticholinergic**: Additive anticholinergic effects (urinary retention, confusion)
- **Benzodiazepine + Opioid**: Respiratory depression risk (combined CNS depression)`,
        mnemonics: [
          { text: "SSRI onset 2-4 weeks; full response 8-12 weeks. Sexual dysfunction 30-50%, SIADH/hyponatremia risk", explanation: "Clinical timeline & side effects" },
          { text: "FGA cheap, high EPS; SGA better negative symptoms/cognition, metabolic risk (olanzapine worst, aripiprazole best)", explanation: "Antipsychotic comparison" },
          { text: "Akathisia = restlessness (propranolol/reduce dose); Dystonia = spasm (benztropine); Parkinsonism = tremor/rigidity (benztropine)", explanation: "EPS management" },
          { text: "Lithium requires monitoring (level 0.6-1.2, renal function, thyroid function); reduce dose in renal impairment", explanation: "Mood stabilizer" }
        ],
        keyPoints: [
          "SSRI onset 2-4 weeks noticeable, 8-12 weeks full; sexual dysfunction common (30-50%)",
          "Antipsychotic selection: FGA cheap but high EPS; SGA better tolerability but metabolic cost",
          "Extrapyramidal side effects: acute dystonia (benztropine), akathisia (propranolol), tardive dyskinesia (prevention critical)",
          "Metabolic monitoring essential for antipsychotics: weight, glucose, lipids at baseline, 3/6 months",
          "Special populations: Pregnancy (SSRIs safer than antipsychotics, but antipsychotics essential if psychotic), Elderly (start low, drug interactions), Renal (lithium requires dose reduction)"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Psychopharmacology", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Psychopharmacology and Drug Interactions", edition: "12th" }
        ]
      },
      {
        layer: 4,
        slug: "psychopharmacology-basics-layer-4-exam-prep",
        title: "Psychopharmacology Basics - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield drug facts, dosing, side effects, common exam questions.",
        contentMd: `# Psychopharmacology Basics - Exam Prep

## High-Yield Drug Information

| Drug Class | Example | Dose Range | Onset | Common SE |
|-----------|---------|-----------|-------|-----------|
| SSRI | Sertraline | 50-200mg | 2-4w | Sexual dysfunction, SIADH |
| SNRI | Venlafaxine | 75-375mg | 2-4w | Hypertension, sexual dysfunction |
| Antipsychotic-FGA | Haloperidol | 5-20mg | Days | EPS, tardive dyskinesia |
| Antipsychotic-SGA | Risperidone | 4-16mg | 1-2w | Metabolic, prolactin ↑ |
| Mood stabilizer | Lithium | 0.6-1.2 mEq/L | Days-weeks | Tremor, polyuria, nephrotoxicity |
| Anxiolytic | Lorazepam | 0.5-2mg TID | Minutes | Tolerance, dependence |

## SSRI Selection by Indication
- **Depression, anxiety**: Sertraline, paroxetine
- **Panic disorder**: Paroxetine (FDA-approved specifically)
- **OCD**: Fluoxetine, sertraline (higher doses needed)
- **PTSD**: Sertraline, paroxetine
- **Least interactions**: Sertraline (moderate CYP2D6 inhibitor)
- **Most interactions**: Paroxetine, fluoxetine (strong CYP2D6)

## Antipsychotic Side Effect Ranking
- **EPS risk**: Haloperidol >> Risperidone > Olanzapine ≈ Quetiapine > Aripiprazole
- **Metabolic risk**: Olanzapine ≥ Clozapine >> Risperidone > Quetiapine >> Aripiprazole
- **Prolactin elevation**: Risperidone ≥ Haloperidol > Olanzapine > Quetiapine > Aripiprazole

## Lithium Monitoring
- **Therapeutic level**: 0.6-1.2 mEq/L (get level 5 days post-initiation)
- **Monitoring**: Thyroid (TSH), renal (creatinine) every 6-12 months
- **Toxicity signs**: Tremor, confusion, vomiting, diarrhea, ataxia (at >1.5 mEq/L)
- **Drug interactions**: NSAIDs, thiazide diuretics (increase levels)
- **Renal impairment**: Reduce dose 50-75%

## Common Exam Questions

**Q1: 35-year-old on sertraline 50mg × 2 weeks reports increased anxiety, insomnia. Patient wants to stop.**
A: Continue - SSRI initial activation (1-2w) is expected; anxiety improves week 3-4; add benzodiazepine temporarily if severe

**Q2: 28-year-old on haloperidol develops acute muscle spasm, jaw clenching. Management?**
A: Acute dystonia - give benztropine (anticholinergic) IM/IV; rapid relief

**Q3: 40-year-old on olanzapine 10mg × 6 months gained 12 kg, glucose 150 (elevated). Management?**
A: Metabolic side effects from olanzapine; options: (1) Switch to aripiprazole (lower metabolic risk), (2) Add metformin, (3) Diet/exercise, (4) Reduce dose if possible

**Q4: Which antidepressant most likely to cause hyponatremia?**
A: All SSRIs can (SIADH), but paroxetine and fluoxetine have higher risk

**Q5: Lithium level 1.8 mEq/L. Patient has tremor, confusion, ataxia. Management?**
A: Lithium toxicity - STOP lithium, supportive care, IV fluids (enhance renal clearance), consider dialysis if severe

**Q6: Patient on SSRI + MAOI develops agitation, muscle rigidity, fever. Diagnosis?**
A: Serotonin syndrome - STOP both drugs, supportive care, benzodiazepines for agitation

**Q7: Which benzodiazepine has LONGEST half-life?**
A: Diazepam (long-acting, 30-100h) - best for alcohol withdrawal; lorazepam short-acting (8-15h)

**Q8: Elderly patient on antipsychotic. Main safety concern?**
A: Falls/hip fracture risk (antipsychotics impair balance, cognition)`,
        mnemonics: [
          { text: "SSRI 2-4 week onset, sexual dysfunction 30-50%, SIADH/hyponatremia", explanation: "Clinical profile" },
          { text: "EPS: Acute dystonia (benztropine), Akathisia (propranolol), Tardive dyskinesia (prevention)", explanation: "Treatment" },
          { text: "Haloperidol cheap but high EPS; Aripiprazole low EPS, low metabolic risk", explanation: "Choice factors" },
          { text: "Lithium level 0.6-1.2, monitor TSH/creatinine, reduce in renal failure", explanation: "Monitoring" }
        ],
        keyPoints: [
          "SSRI: Sertraline (fewest interactions), Paroxetine (best for panic), Fluoxetine (longer half-life)",
          "Antipsychotic: FGA cheap but EPS; SGA better negative symptoms but metabolic risks (monitor weight, glucose)",
          "EPS management: Acute dystonia (benztropine), Akathisia (propranolol), Tardive dyskinesia (prevention critical)",
          "Lithium: Therapeutic level 0.6-1.2; monitor TSH/renal function; reduce dose in renal impairment",
          "Benzodiazepines: Fast-acting but tolerance develops; use <4 weeks with SSRI, not monotherapy"
        ],
        textbookRefs: [
          { book: "ICD-10 Clinical Descriptions", chapter: "Psychopharmacology Quick Reference", edition: "10th" },
          { book: "DSM-5 Manual Supplement", chapter: "Psychotropic Medications", edition: "5th" }
        ]
      },
      {
        layer: 5,
        slug: "psychopharmacology-basics-layer-5-active-recall",
        title: "Psychopharmacology Basics - Active Recall",
        estimatedMinutes: 20,
        summary: "12 clinical scenarios testing drug selection, dosing, side effect management.",
        contentMd: `# Psychopharmacology Basics - Active Recall

## Q1: SSRI Selection with Drug Interactions
**Case**: 42-year-old taking warfarin (anticoagulation). Started on SSRI for depression. Which SSRI safest?
A: **Sertraline** - moderate CYP2D6/3A4 inhibitor; less interaction than paroxetine/fluoxetine. **Caution**: SSRI inhibits platelet aggregation → increased bleeding risk with warfarin. **Management**: Monitor INR closely, check at 1-2 weeks post-initiation. **Alternative**: Paroxetine if warfarin interaction tolerable (stronger interaction but manageable with monitoring).

## Q2: Antipsychotic Choice - Cost vs Efficacy
**Case**: 28-year-old first-episode schizophrenia in rural India. Cost-limiting. Options: haloperidol (FGA, cheap) vs risperidone (SGA, expensive).
A: **Haloperidol cost-effective** - 50-70% respond to first antipsychotic. **Trade-off**: High EPS risk (dystonia, akathisia, parkinsonism). **Management**: (1) Start low (5mg/day), (2) Add benztropine prophylactically (reduces dystonia/parkinsonism risk), (3) Monitor closely for akathisia. **When to switch**: If severe EPS or poor response at 6 weeks. **Learning**: FGA acceptable first-line in resource-limited settings with EPS monitoring.

## Q3: SSRI Initiation - Anxiety Worsening
**Case**: 29-year-old with GAD started sertraline 50mg. Week 1: increased anxiety, insomnia, jitteriness. "Medicine making it worse!"
A: **Expected SSRI activation** (10-20% initially worsen anxiety). **Management**: (1) Reassure temporary (improves week 3-4), (2) Add benzodiazepine (lorazepam 0.5mg BID) for first 2-4 weeks, (3) CONTINUE sertraline (do NOT stop), (4) Education critical. **Alternative**: Start lower (25mg). **Timeline**: Full response 8-12 weeks. **Learning**: Many patients discontinue prematurely; anticipatory guidance prevents premature dropout.

## Q4: Drug Interaction - Serotonin Syndrome Risk
**Case**: 35-year-old on sertraline (100mg) for depression. Psychiatrist unaware patient also taking tranylcypromine (MAOI) prescribed by another doctor.
A: **SSRI + MAOI = serotonin syndrome** (rare but serious). **Signs**: Agitation, muscle rigidity, hyperthermia (>38.5C), tremor, hyperreflexia, myoclonus. **Management**: (1) STOP both drugs, (2) Supportive care (cooling, fluids), (3) Benzodiazepines for agitation, (4) Hospitalization if severe. **Prevention**: Detailed drug history, coordinate care with other providers. **Safe interval**: 2-week washout between SSRI and MAOI.

## Q5: Antipsychotic Dosing - First Episode
**Case**: 26-year-old first psychotic episode. Psychiatrist started risperidone 2mg at night. Patient sleeping 14 hours, still hallucinating.
A: **Underdosed** - standard range 4-8mg/day (2mg too low). **Management**: Increase gradually (0.5-1mg increments) to therapeutic dose (risperidone 4-6mg), assess response at weeks 2, 4, 6. **If inadequate at 6 weeks**: Increase further to max 16mg or switch antipsychotic. **Excessive sedation despite adequate dose**: Switch antipsychotic (quetiapine very sedating, aripiprazole less so).

## Q6: Lithium Toxicity - Emergency
**Case**: 52-year-old on lithium (level 1.5) presents with tremor, confusion, vomiting, ataxia. Admitted for dehydration (diarrhea, fever).
A: **Lithium toxicity** - dehydration increased lithium reabsorption/level. **Management**: (1) STOP lithium, (2) IV saline (hydrate, enhance renal clearance), (3) Supportive care, (4) Check lithium level (if >2.0 or neurological signs severe → consider hemodialysis), (5) Monitor renal function. **Prevention**: Patient education (maintain hydration, salt intake; don't restrict salt/fluid); NSAIDs, thiazides increase lithium level.

## Q7: Extrapyramidal Side Effect - Acute Dystonia
**Case**: 30-year-old on haloperidol 10mg for psychosis. Day 2: develops acute jaw clenching, eye deviation upward, muscle spasm.
A: **Acute dystonia** - anticholinergic crisis from dopamine blockade. **Immediate treatment**: Benztropine 1-2mg IM/IV - relief within 5-15 minutes. **Prevention**: Prophylactic benztropine (1-2mg daily) for FGA use. **Why acute**: Individual predisposition (younger age, male, high-potency antipsychotic). **Long-term**: Switch to SGA or maintain benztropine.

## Q8: Metabolic Monitoring - Olanzapine
**Case**: 38-year-old started olanzapine 10mg for bipolar mania. At 3 months: weight +8kg, fasting glucose 128 (elevated), triglycerides 200.
A: **Metabolic syndrome developing** - olanzapine highest metabolic risk among SGAs. **Management**: (1) Diet/exercise counseling, (2) Consider switch to aripiprazole (minimal metabolic risk), (3) Add metformin (helps weight/glucose), (4) Repeat labs in 3 months. **If continued**: Baseline weight/glucose/lipids, then monitor at weeks 4, 8, 12, then quarterly. **Timeline**: Metabolic changes develop early (weeks 1-4); weight gain progressive.

## Q9: Benzodiazepine Dependence
**Case**: 45-year-old on lorazepam 2mg TID × 8 months for anxiety. Now anxious despite medication, wants increase. Tried to stop, withdrew with anxiety, tremor.
A: **Benzodiazepine dependence** - tolerance developed, now ineffective; withdrawal on cessation. **Management**: (1) Add SSRI (if not already on one; takes 2-4 weeks), (2) Slow taper of lorazepam (10%/week to avoid seizures), (3) Switch to longer-acting (clonazepam) if withdrawal severe, (4) Support with CBT. **Timeline**: 8-10 week taper. **Why slow taper**: Abrupt discontinuation causes withdrawal (seizures, delirium, death in severe). **Prevention**: Use benzodiazepines <4 weeks; always pair with SSRI.

## Q10: SSRI Sexual Dysfunction - Management
**Case**: 35-year-old on paroxetine 20mg for depression (4 months, well-controlled). Now reports erectile dysfunction, anorgasmia. Affecting relationship.
A: **SSRI-induced sexual dysfunction** (30-50% incidence, highest with paroxetine). **Options**: (1) **Dose reduction** (paroxetine 10-15mg if effective), (2) **Drug holiday** (skip dose 24-48h before intercourse; works for some), (3) **Adjunctive** - sildenafil, bupropion (add-on), (4) **Switch antidepressant** (bupropion, mirtazapine, duloxetine less sexual dysfunction). **Discuss**: Avoid abrupt changes; weigh efficacy against sexual side effects. **Learning**: Sexual dysfunction major cause SSRI discontinuation; address proactively.

## Q11: Antipsychotic Choice - Negative Symptoms
**Case**: 32-year-old with schizophrenia, well-controlled positive symptoms on haloperidol, but severe negative symptoms (alogia, avolition). Functional decline.
A: **Negative symptoms poorly responsive to FGA** (haloperidol) - D2 blockade in mesocortical cortex may worsen. **Management**: Switch to SGA (risperidone, olanzapine) - better for negative symptoms/cognition. **Why better**: SGA 5-HT2A + D2 blockade provides prefrontal facilitation. **Monitor**: Metabolic effects (weight, glucose, lipids). **Timeline**: 6-8 weeks for full response. **Learning**: Negative symptoms major disability; require SGA consideration.

## Q12: Prophylactic Benztropine - Risk-Benefit
**Case**: 25-year-old starting haloperidol for first psychotic episode. Psychiatrist recommends prophylactic benztropine (1mg daily).
A: **Prophylactic benztropine reduces EPS** (particularly dystonia, parkinsonism) without worsening efficacy. **Benefit**: Lower EPS incidence (25-30% vs 50-60% without). **Risk**: Anticholinergic side effects (dry mouth, urinary retention, memory impairment, glaucoma). **Alternative**: Start haloperidol without benztropine, add only if EPS develops (avoid unnecessary anticholinergic). **Age factor**: Younger patients more EPS risk (may warrant prophylaxis). **Modern approach**: Use SGA (lower EPS risk) first-line rather than FGA + benztropine.`,
        mnemonics: [
          { text: "SSRI + MAOI = serotonin syndrome; SSRI + warfarin = bleeding; Sertraline safest interactions", explanation: "Drug interactions" },
          { text: "Haloperidol cheap but high EPS; use benztropine; switch to SGA if inadequate", explanation: "FGA approach" },
          { text: "Olanzapine weight/glucose risk highest; aripiprazole safest metabolic; monitor all at baseline/3-6 months", explanation: "Metabolic monitoring" },
          { text: "Lithium level 0.6-1.2; toxicity >1.5 (tremor, confusion); dehydration increases level", explanation: "Safety margins" }
        ],
        keyPoints: [
          "SSRI initial activation (anxiety/insomnia) expected 1-2 weeks; reassure, add benzodiazepine temporarily, continue SSRI",
          "SSRI + MAOI = serotonin syndrome (rare); sertraline has fewer interactions than paroxetine/fluoxetine",
          "Antipsychotic choice: FGA cheap+high EPS, SGA better negative symptoms+metabolic risk; SGA preferred if cost allows",
          "Extrapyramidal side effects: acute dystonia (benztropine rapid relief), akathisia (propranolol), tardive dyskinesia (prevention)",
          "Benzodiazepines dependence develops; use ≤4 weeks with SSRI; slow taper if discontinuing (10%/week, seizure risk)"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Psychopharmacology: Clinical Cases", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Psychopharmacology: Clinical Management", edition: "12th" }
        ]
      }
    ]
  }
];
