export const regenBatch8LessonsFinal = [
  {
    topicCode: "PS-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "psychopharmacology-basics-foundation",
        title: "Psychopharmacology Basics - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to psychiatric medications and neurotransmitter systems.",
        contentMd: "# Psychopharmacology Basics - Foundation\n\n## Neurotransmitter Systems\nMonoamines:\n- Serotonin (5-HT): Mood, anxiety, sleep, impulse control\n- Dopamine (DA): Motivation, pleasure, motor control\n- Norepinephrine (NE): Arousal, attention, mood\n- Acetylcholine: Cognition, motor control\n- GABA: Inhibition, anxiety reduction\n- Glutamate: Excitation, learning\n\n## Major Drug Classes\nAntidepressants: SSRIs, SNRIs, TCAs, MAOIs\nAntipsychotics: First-generation, Second-generation\nMood Stabilizers: Lithium, Anticonvulsants, Atypicals\nAnxiolytics: Benzodiazepines, Buspirone, SSRIs\nStimulants: Amphetamines, Methylphenidate\n\n## Mechanisms of Action\nInhibit reuptake: Block serotonin/dopamine/NE reuptake\nBlock receptors: Dopamine D2, alpha-adrenergic, histamine\nEnhance GABA: Benzodiazepines, Barbiturates\nInhibit breakdown: MAOIs prevent monoamine degradation\n\n## Pharmacokinetics\nAbsorption: How drug enters body\nDistribution: Where drug goes\nMetabolism: How drug broken down (liver)\nElimination: How drug excreted (kidneys, feces)\nHalf-life: Time to reduce 50% concentration",
        mnemonics: [
          { text: "MONOAMINES", explanation: "Mood serotonin, Motivation dopamine, Norepinephrine arousal, Other GABA/glutamate" }
        ],
        keyPoints: [
          "Serotonin: Mood, anxiety, sleep",
          "Dopamine: Motivation, pleasure, motor",
          "SSRIs: Serotonin reuptake inhibition",
          "Antipsychotics: Dopamine antagonism",
          "Benzodiazepines: GABA enhancement",
          "Lithium: Mood stabilizer, mechanism unclear"
        ],
        textbookRefs: [
          { book: "Psychopharmacology: Drugs, the Brain, and Behavior", chapter: "Basic Neurotransmission", edition: "3rd" },
          { book: "Stahl's Essential Psychopharmacology", chapter: "Neurotransmitter Systems", edition: "5th" }
        ]
      },
      {
        layer: 2,
        slug: "psychopharmacology-basics-mechanism",
        title: "Psychopharmacology Basics - Mechanism",
        estimatedMinutes: 25,
        summary: "Detailed drug mechanisms and receptor pharmacology.",
        contentMd: "# Psychopharmacology Basics - Mechanism\n\n## SSRI Mechanism\nSelectively inhibit serotonin reuptake transporter (SERT)\nIncrease synaptic serotonin\nDownregulation of presynaptic receptors (delayed)\nTherapeutic effect takes 2-4 weeks\nExamples: Fluoxetine, Sertraline, Paroxetine, Escitalopram\n\n## SNRI Mechanism\nInhibit serotonin AND norepinephrine reuptake\nBetter for pain syndromes (NE component)\nExamples: Venlafaxine, Duloxetine, Desvenlafaxine\n\n## TCA Mechanism\nNon-selective reuptake inhibition (serotonin > NE > dopamine)\nMultiple receptor blockade (anticholinergic side effects)\nCardiac effects (QT prolongation)\nToxic in overdose\nExamples: Amitriptyline, Nortriptyline, Imipramine\n\n## MAOI Mechanism\nInhibit monoamine oxidase (breaks down serotonin, dopamine, NE)\nIncrease all monoamines\nFood interactions (tyramine → hypertensive crisis)\nDrug interactions (serotonin syndrome risk)\nExamples: Phenelzine, Tranylcypromine\n\n## Antipsychotic Mechanism\nFirst-generation (Haloperidol): D2 dopamine antagonism\nSecond-generation (Olanzapine, Risperidone): D2 + 5-HT2A\nD2 blockade → antipsychotic effect (1-2 weeks)\nMotor side effects (EPS) → extrapyramidal side effects\nMetabolic effects (weight gain, metabolic syndrome)\n\n## Benzodiazepine Mechanism\nGABA-A receptor agonist\nEnhance inhibitory neurotransmission\nOnset: Minutes-hours\nAddictive potential: Tolerance, dependence\nWithdrawal: Potentially dangerous (seizures)\nExamples: Diazepam, Lorazepam, Alprazolam\n\n## Lithium Mechanism\nUnclear exact mechanism\nMay affect IP3 signaling\nMonoamine modulation\nNeuroprotection effects\nNarrow therapeutic window (0.5-1.2 mEq/L)\nRequires monitoring: Renal, thyroid function\n\n## Anticonvulsant Mood Stabilizers\nValproate: Increases GABA, inhibits histone deacetylase\nCarbamazepine: Sodium channel blockade\nLamotrigine: Glutamate inhibition\nMore tolerable than lithium, fewer interactions\n\n## Stimulant Mechanism\nAmphetamines: Release dopamine/norepinephrine\nMethylphenidate: Blocks DA/NE reuptake\nOnset: 30 minutes-1 hour\nAbuse potential\nExamples: Methylphenidate, Amphetamine, Lisdexamfetamine",
        mnemonics: [
          { text: "MECHANISM-SSRI", explanation: "Monoamine reuptake inhibition, Elevated synaptic concentration, Correction of monoamine deficiency, Healed neural circuits, Antidepressant effect (delayed), Network modulation, Individual variation, Specific serotonin, Synaptic plasticity, Reuptake blockade, In weeks 2-4" }
        ],
        keyPoints: [
          "SSRIs: Serotonin reuptake blockade, 2-4 week lag",
          "SNRIs: Serotonin + norepinephrine",
          "TCAs: Multiple effects, anticholinergic side effects",
          "MAOIs: Monoamine oxidase inhibition, food interactions",
          "Antipsychotics: D2 dopamine antagonism",
          "Benzodiazepines: GABA enhancement, addiction risk",
          "Lithium: Narrow therapeutic window, monitoring required",
          "Stimulants: Dopamine/NE release"
        ],
        textbookRefs: [
          { book: "Stahl's Essential Psychopharmacology", chapter: "Antidepressants", edition: "5th" },
          { book: "Journal of Clinical Psychiatry", chapter: "Mechanism of Action", edition: "2023" }
        ]
      },
      {
        layer: 3,
        slug: "psychopharmacology-basics-clinical",
        title: "Psychopharmacology Basics - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical use, side effects, and Indian context prescribing.",
        contentMd: "# Psychopharmacology Basics - Clinical\n\n## SSRI Clinical Use\nIndications: Depression, anxiety disorders, OCD, PTSD, eating disorders\nOnset: 2-4 weeks\nDose range: 20-80 mg daily (fluoxetine typical)\nSide effects: Sexual dysfunction (50%), GI upset, insomnia, weight gain\nDisadvantages: Serotonin syndrome (with other serotonergic drugs)\nCost: Cheap, most commonly used in India\n\n## SNRI Clinical Use\nIndications: Depression, anxiety, pain syndromes (fibromyalgia)\nOnset: 1-2 weeks\nDose range: 75-375 mg daily (venlafaxine)\nSide effects: Sexual dysfunction, hypertension (NE effect), withdrawal syndrome\nAdvantages: Good for pain\nCost: Moderate, increasingly used in India\n\n## TCA Clinical Use\nIndications: Depression, neuropathic pain, migraine prophylaxis, enuresis\nOnset: 1-2 weeks\nDose range: 50-300 mg daily\nSide effects: Anticholinergic (dry mouth, constipation, urinary retention), cardiac\nAdvantages: Cheap, pain relief\nDisadvantages: Toxicity in overdose, EKG changes\nCost: Very cheap, still commonly used in India\n\n## MAOI Clinical Use\nIndications: Atypical depression, treatment-resistant depression\nOnset: 2-4 weeks\nDose range: 30-90 mg daily (phenelzine)\nSide effects: Orthostatic hypotension, weight gain, insomnia\nAdvantages: Effective for resistant cases\nDisadvantages: Dietary restrictions, drug interactions, hypertensive crisis risk\nCost: Moderate, rarely used in India\n\n## Antipsychotic Use\nFirst-generation (Haloperidol):\n- Cheap\n- High risk EPS, tardive dyskinesia\n- Still commonly used in India\n- Typical dose: 5-20 mg daily\n\nSecond-generation (Risperidone, Olanzapine, Quetiapine):\n- Better side effect profile\n- Metabolic effects (weight gain)\n- Expensive\n- Increasing use in India\n- Typical dose: Risperidone 2-6 mg, Olanzapine 5-20 mg\n\n## Benzodiazepine Use\nIndications: Acute anxiety, agitation, sleep, seizures, withdrawal\nOnset: Minutes\nDuration: Short-acting (4-6h) vs long-acting (24h+)\nSide effects: Sedation, dependence, withdrawal\nWithdrawal: Potentially dangerous (seizures)\nAbuse potential: High\nCost: Cheap\nIssue: Commonly overused in India\n\n## Lithium Use\nIndications: Bipolar mania, bipolar maintenance, depression augmentation\nOnset: 1-2 weeks\nDose: 900-1800 mg daily (therapeutic level 0.5-1.2 mEq/L)\nMonitoring: Lithium levels, renal function, thyroid, EKG\nSide effects: Tremor, polyuria, polydipsia, thyroid dysfunction, renal damage\nToxicity: Narrow range, dangerous at high levels\nCost: Very cheap\nChallenge in India: Compliance, monitoring access\n\n## Anticonvulsant Mood Stabilizers\nValproate: Mania indication, effective, tolerates\nCarbamazepine: Bipolar depression, but induces CYP450\nLamotrigine: Bipolar depression, especially women\nCost: Moderate, less available in India\n\n## Stimulant Use\nIndications: ADHD (methylphenidate, amphetamines)\nOnset: 30 minutes-1 hour\nDuration: Short-acting (4-6h), extended-release (8-12h)\nSide effects: Insomnia, appetite loss, tachycardia, anxiety\nAbuse potential: High (Schedule II)\nCost: Moderate\nIssue in India: Often underutilized, access limited\n\n## Indian Prescribing Context\nCost: Major determinant\n- SSRIs/TCAs: Cheap, widely available\n- Antipsychotics: First-gen cheapest, second-gen expensive\n- Benzodiazepines: Very cheap, overused\n- Lithium: Cheap but monitoring difficult\n- MAOIs: Cost reasonable but rarely used\n\nAccess:\n- Metro hospitals: Full range available\n- Primary care: Limited to SSRIs, TCAs, first-gen antipsychotics\n- Rural: Even fewer options\n- Government: Budget constraints\n\nCompliance:\n- Cost: Major barrier\n- Side effects: Poor acceptance\n- Stigma: Stops treatment\n- Follow-up: Limited monitoring\n\nLegal Issues:\n- Controlled drugs: Schedule regulations\n- Benzodiazepines: IV schedule (prescription restrictions)\n- Stimulants: II schedule (strict monitoring)\n- Recording: Maintaining registers",
        mnemonics: [
          { text: "PRESCRIBE-CONTEXT", explanation: "Patient factors, Response time, Efficacy proven, Serious adverse effects, Cost considerations, Risk-benefit ratio, Individual tolerance, Benefits weighing, Experience/evidence-based" }
        ],
        keyPoints: [
          "SSRIs: First-line depression, 2-4 week lag, sexual dysfunction",
          "TCAs: Cheap, pain relief, anticholinergic effects",
          "SNRIs: Good for pain, hypertension risk",
          "Antipsychotics: First-gen cheap but EPS, second-gen better",
          "Benzodiazepines: Rapid onset, addiction risk, often overused India",
          "Lithium: Narrow window, needs monitoring, compliance issue",
          "Cost determines usage in India",
          "Monitoring access limited, especially rural",
          "Compliance affected by side effects, cost, stigma"
        ],
        textbookRefs: [
          { book: "Kaplan & Sadock Psychiatric Drug Handbook", chapter: "Clinical Use", edition: "2023" },
          { book: "Indian Psychiatric Society Psychopharmacology Guidelines", chapter: "Prescribing Principles", edition: "2023" }
        ]
      },
      {
        layer: 4,
        slug: "psychopharmacology-basics-exam",
        title: "Psychopharmacology Basics - Exam Prep",
        estimatedMinutes: 20,
        summary: "Side effects, interactions, monitoring, and management algorithms.",
        contentMd: "# Psychopharmacology Basics - Exam Prep\n\n## Side Effect Profiles\n\nSSRI Side Effects:\n- Sexual dysfunction: Most common (50%)\n- Nausea: Early, usually resolves\n- Insomnia/sedation: Varies\n- GI upset: Common initially\n- Weight gain: Long-term\n- Serotonin syndrome: With other serotonergic drugs\n\nTCA Side Effects:\n- Anticholinergic: Dry mouth, constipation, urinary retention, blurred vision\n- Sedation: Significant\n- Orthostatic hypotension: Especially elderly\n- Cardiac: QT prolongation, arrhythmias\n- Toxicity: Lethal in overdose\n\nAntipsychotic Side Effects:\nFirst-generation:\n- EPS: Acute dystonia, akathisia, parkinsonism (reversible)\n- Tardive dyskinesia: Late-onset involuntary movements (irreversible)\n- Neuroleptic malignant syndrome: Rare, life-threatening\n\nSecond-generation:\n- Weight gain: Significant\n- Metabolic syndrome: Obesity, diabetes, hyperlipidemia\n- Sexual dysfunction\n- Prolactin elevation: Less than first-gen\n\nBenzodiazepine Side Effects:\n- Sedation: Expected\n- Dependence: With prolonged use\n- Withdrawal: Dangerous (seizures)\n- Tolerance: Develops over weeks\n- Paradoxical disinhibition: Rare\n- Over-sedation: Respiratory depression risk\n\nLithium Side Effects:\n- Tremor: Early, often improves\n- Polyuria/polydipsia: Common\n- Thyroid dysfunction: Hypothyroidism 10-20%\n- Renal damage: Chronic use risk\n- Teratogenicity: Ebstein's anomaly risk\n- Toxicity: Narrow range\n\n## Drug Interactions\n\nSerotonin Syndrome Risk:\nCombinations to avoid:\n- SSRI + MAOI (wait 2-4 weeks)\n- SSRI + Tramadol\n- SSRI + Linezolid\n- SSRI + Methylene blue\n- Symptoms: Agitation, confusion, tremor, fever, muscle rigidity, autonomic instability\n- Management: Discontinue, supportive care, benzodiazepines if severe\n\nCYP450 Interactions:\n- Fluoxetine: Inhibits CYP2D6 (increases TCA levels)\n- Carbamazepine: Induces CYP450 (reduces many drugs)\n- Lithium: No metabolism (renal excretion) - ACE inhibitors increase levels\n\nQT Prolongation Risk:\n- TCAs\n- Antipsychotics\n- Macrolide antibiotics\n- Fluoroquinolones\n- Monitoring: EKG baseline, especially high-risk\n\n## Monitoring Requirements\n\nSSRI Monitoring:\n- 1st visit: Baseline\n- Weeks 2-4: Response, side effects\n- Monthly: Until stable\n- Baseline labs: Usually not needed\n\nTCA Monitoring:\n- Baseline EKG (QT interval)\n- Therapeutic drug levels (if needed, 100-250 ng/mL)\n- Monitor cardiac symptoms\n\nAntipsychotic Monitoring:\n- Baseline: Weight, BMI, waist circumference, glucose, lipids\n- Month 3: Repeat metabolic panel\n- Annual: Lipids, glucose, weight\n- Motor: EPS assessment (AIMS, BARS scales)\n- Prolactin: If galactorrhea/sexual dysfunction\n\nLithium Monitoring:\n- Baseline renal function: BUN, creatinine\n- Baseline thyroid: TSH\n- Lithium level: 5-7 days after start/change, then every 3-6 months\n- Therapeutic: 0.5-1.2 mEq/L\n- Toxicity: >1.5 mEq/L\n- Annual: Renal function, thyroid\n\nBenzodiazepine Monitoring:\n- Baseline: Respiratory assessment\n- Ongoing: Dependence/tolerance development\n- Plan: Taper before discontinuation\n\n## Management Algorithms\n\nTreatment Resistance (No response after 8-12 weeks):\n1. Verify diagnosis\n2. Check compliance\n3. Check therapeutic levels (TCA, lithium)\n4. Optimize current dose\n5. If still no response:\n   - Augmentation (add lithium, T3, antipsychotic)\n   - Switch to different class\n   - Combined therapy\n\nSide Effect Management:\nSexual dysfunction from SSRI:\n- Wait (may improve)\n- Dose reduction\n- Drug holiday (risky, not recommended)\n- Switch SSRI (fluoxetine/sertraline less likely)\n- Add bupropion (dopaminergic)\n\nNausea from SSRI:\n- Take with food\n- Reduce dose temporarily\n- Switch to different SSRI\n- Add antiemetic temporarily\n\nInsomnia from SSRI:\n- Take morning\n- Reduce dose\n- Add sedating agent (trazodone)\n\nWeight gain from antipsychotic:\n- Diet, exercise\n- Reduce dose if possible\n- Switch to less metabolic antipsychotic\n- Add metformin\n\n## Benzodiazepine Withdrawal\nTaper schedule (slow, 2-4 weeks minimum):\n- Reduce 10% weekly\n- Longer if used chronically (months)\n- Monitor for symptoms: Anxiety, tremor, seizures\n- Emergency: High-dose benzodiazepine\n\nSymptoms of withdrawal:\n- Rebound anxiety/insomnia\n- Autonomic: Tremor, sweating, tachycardia\n- Serious: Seizures, psychosis\n- Timeline: 1-4 weeks after last dose",
        mnemonics: [
          { text: "MONITOR-MEDS", explanation: "Metabolic effects, Organ function (kidney, liver), Neurologic effects, Interactions check, Toxicity levels, Ongoing assessment, Response evaluation, Motor effects" }
        ],
        keyPoints: [
          "SSRI: Sexual dysfunction, serotonin syndrome risk",
          "TCA: EKG needed, anticholinergic effects, toxic overdose",
          "Antipsychotic: Weight gain, metabolic monitoring",
          "Benzodiazepine: Addiction risk, dangerous withdrawal",
          "Lithium: Narrow window, renal/thyroid monitoring",
          "Serotonin syndrome: SSRI + MAOI/tramadol/linezolid",
          "QT prolongation: TCAs, antipsychotics, antibiotics",
          "Treatment resistance: 8-12 weeks, then optimize/switch",
          "Benzodiazepine taper: Slow, 2-4 weeks minimum"
        ],
        textbookRefs: [
          { book: "Pharmacology for Psychiatrists", chapter: "Drug Interactions and Adverse Effects", edition: "2nd" },
          { book: "Clinical Psychopharmacology", chapter: "Monitoring and Management", edition: "2023" }
        ]
      },
      {
        layer: 5,
        slug: "psychopharmacology-basics-recall",
        title: "Psychopharmacology Basics - Active Recall",
        estimatedMinutes: 15,
        summary: "Critical facts, side effects, and rapid decision-making.",
        contentMd: "# Psychopharmacology Basics - Active Recall\n\n## MUST KNOW Mechanisms\nSSRI: Blocks serotonin reuptake (2-4 week lag)\nSNRI: Blocks serotonin + norepinephrine\nTCA: Non-selective monoamine blockade\nMAOI: Blocks monoamine oxidase breakdown\nAntipsychotic: D2 dopamine antagonism\nBenzodiazepine: GABA enhancement\nLithium: Unclear, IP3 signaling?\nStimulant: Releases dopamine/NE\n\n## First-Line Treatments by Diagnosis\nMajor Depression: SSRI (fluoxetine, sertraline)\nGeneralized Anxiety: SSRI, buspirone, benzodiazepine (short-term)\nPanic Disorder: SSRI, benzodiazepine\nOCD: SSRI (higher dose)\nPTSD: SSRI (sertraline, paroxetine)\nSchizophrenia: Antipsychotic (second-gen preferred)\nBipolar Mania: Lithium, divalproex, antipsychotic\nBipolar Depression: Lamotrigine, SSRI + mood stabilizer\nADHD: Methylphenidate, amphetamine\n\n## Fastest Onset\nBenzodiazepine: Minutes\nStimulant: 30 min - 1 hour\nAntipsychotic (acute): 1-2 days\nAntipsychotic (full): 2-4 weeks\nSSRI: 2-4 weeks\nLithium: 1-2 weeks\n\n## Side Effect Red Flags\nSerotonin Syndrome:\n- Confusion, agitation, tremor\n- Fever, muscle rigidity\n- Autonomic instability\n- Risk: SSRI + MAOI, tramadol, linezolid\n- Treatment: Stop drug, benzodiazepines\n\nNeuroleptic Malignant Syndrome:\n- Fever, muscle rigidity, altered mental\n- High creatine kinase\n- Autonomic instability\n- Risk: All antipsychotics (first-gen > second-gen)\n- Treatment: Stop antipsychotic, dantrolene, ICU care\n- Mortality: 5-10% if untreated\n\nTardive Dyskinesia:\n- Involuntary movements (orofacial, limb, trunk)\n- Develops after prolonged antipsychotic (months-years)\n- First-gen: 5% per year\n- Second-gen: 1% per year\n- Irreversible, risk of disabling\n- Prevention: Lowest dose, shortest duration\n\nBenzodiazepine Withdrawal Seizure:\n- After abrupt discontinuation\n- Life-threatening\n- Prevention: Slow taper (2-4 weeks)\n- Management: Reinstate and taper slowly\n\n## Drug Interactions to Avoid\n- SSRI + MAOI (serotonin syndrome)\n- SSRI + Tramadol (serotonin syndrome)\n- TCA + Antipsychotic (cardiac, EPS)\n- Lithium + ACE inhibitors (lithium toxicity)\n- Lithium + NSAIDs (lithium toxicity)\n- Benzodiazepine + Opioids (respiratory depression)\n\n## Monitoring Essentials\nSSRI: None routinely needed\nTCA: Baseline EKG (QT), therapeutic drug level\nAntipsychotic: Metabolic panel (glucose, lipids), weight, waist circumference, motor assessment (AIMS)\nLithium: Lithium level (5-7 days, then 3-6 months), renal function, TSH\nBenzodiazepine: Assess dependence risk\n\n## Cost in India\nVery Cheap: Lithium, TCAs, benzodiazepines, first-gen antipsychotics\nCheap: SSRIs, most anticonvulsants\nModerate: SNRIs, carbamazepine\nExpensive: Second-gen antipsychotics, some newer agents\n\n## Sexual Dysfunction Management\nCaused by: SSRI (50%), antipsychotic\nManagement:\n1. Wait (may improve weeks)\n2. Dose reduction\n3. Switch SSRI\n4. Add bupropion (dopaminergic)\n5. Sildenafil (if not contraindicated)\n\n## Pregnancy Considerations\nSafe in pregnancy:\n- SSRIs (category C, generally safe)\n- TCAs (long safety record)\n\nAvoid in pregnancy:\n- Lithium (Ebstein's anomaly risk)\n- Benzodiazepines (teratogenicity)\n- Some anticonvulsants\n\n## Overdose Toxicity\nSSRI: Usually safe (serotoninergic)\nTCA: HIGHLY TOXIC (cardiac, seizures, death)\nBenzodiazepine: Respiratory depression (with other depressants)\nLithium: Toxicity narrow (>1.5 mEq/L), renal failure\nAntipsychotic: Usually safe (low LD50)\n\n## Special Populations\nElderly: Reduce dose, monitor for falls, confusion\nRenal impairment: Adjust lithium, benzodiazepines, some anticonvulsants\nHepatI impairment: Reduce doses of all drugs\nPregnancy: Weigh risks-benefits, prefer older drugs\nChildren: ADHD (stimulants, atomoxetine), Depression (SSRI), Anxiety (SSRI, benzodiazepine)\n\n## Exam Strategy\n1. Identify disorder\n2. Choose first-line drug\n3. Verify onset time (patient expectations)\n4. Check side effect profile (patient tolerability)\n5. Assess interactions (safe combination)\n6. Plan monitoring (if needed)\n7. Set expectations (2-4 week lag)\n\n## Common Pitfalls\n- Using benzodiazepine as monotherapy for depression (ineffective)\n- Not checking EKG before TCA (missed QT prolongation)\n- Over-interpreting early SSRI side effects (usually improve)\n- Stopping medication too early (needs 4-6 weeks minimum)\n- Benzodiazepine overuse (dependence risk)\n- Not monitoring lithium (toxicity risk)",
        mnemonics: [
          { text: "PSYCHO-RECALL", explanation: "Pharmacology first-line, Symptom onset time, Years drug history, Contraindications check, Half-life kinetics, Onset 2-4 weeks (SSRI), Respiratory depression (benzos), Efficacy expected, Cardiovascular (monitor TCA), Addiction potential (benzos), Long-term side effects, Laboratory monitoring" }
        ],
        keyPoints: [
          "SSRI: 2-4 week lag, sexual dysfunction, serotonin syndrome",
          "TCA: Cheaper, toxic overdose, EKG needed",
          "Antipsychotic: First-gen EPS/tardive dyskinesia, second-gen metabolic",
          "Benzodiazepine: Rapid onset, addiction/withdrawal risk",
          "Lithium: Narrow window, monitoring essential",
          "NMS: Fever, rigidity, altered mental, stop antipsychotic",
          "Tardive dyskinesia: Irreversible, prevent with low dose",
          "Serotonin syndrome: SSRI + MAOI/tramadol",
          "Sexual dysfunction: Most SSRI-related, add bupropion",
          "Cost: TCAs, lithium, benzos very cheap in India",
          "First-line: SSRI depression, antipsychotic schizophrenia, lithium bipolar"
        ],
        textbookRefs: [
          { book: "Stahl's Essential Psychopharmacology", chapter: "Practical Examples", edition: "5th" },
          { book: "Psychiatric Drug Handbook", chapter: "Clinical Pearls", edition: "2023" }
        ]
      }
    ]
  },
  {
    topicCode: "PY-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "resting-membrane-potential-foundation",
        title: "Resting Membrane Potential - Foundation",
        estimatedMinutes: 20,
        summary: "Basic ion distribution and electrical properties of cell membranes.",
        contentMd: "# Resting Membrane Potential - Foundation\n\n## Definition\nResting Membrane Potential (RMP): Electrical potential difference across cell membrane at rest, typically -70 mV in neurons.\n\n## Ion Concentration Gradients\nIntra-cellular (High): K+ (140 mEq/L), Low Na+ (12 mEq/L)\nExtra-cellular (Low): K+ (5 mEq/L), High Na+ (145 mEq/L)\nCl-: High extra-cellular (110 mEq/L), Low intra-cellular (10 mEq/L)\nCa2+: Very low intra-cellular (0.1 μM), High extra-cellular (2 mM)\n\n## Membrane Properties\nSelectivity: More permeable to K+ than Na+ at rest\nPump: Na+-K+-ATPase maintains gradients\nChannels: Ion-selective channels allow passage\nLipid bilayer: Impermeable to ions\n\n## Factors Determining RMP\n1. Ion concentration gradients (chemical driving force)\n2. Membrane permeability (electrical driving force)\n3. Na+-K+-ATPase activity (pump)\n4. Ion channel selectivity",
        mnemonics: [
          { text: "K-IN-NA-OUT", explanation: "Potassium inside high, Sodium outside high, Negative inside, Nernst equation, ATP pump (Na-K-ATPase)" }
        ],
        keyPoints: [
          "RMP: -70 mV in neurons",
          "K+ high inside, low outside",
          "Na+ low inside, high outside",
          "Membrane more permeable to K+ at rest",
          "Na+-K+-ATPase maintains gradients"
        ],
        textbookRefs: [
          { book: "Guyton and Hall Textbook of Medical Physiology", chapter: "Membrane Transport", edition: "14th" },
          { book: "Principles of Neural Science", chapter: "Ion Channels", edition: "6th" }
        ]
      },
      {
        layer: 2,
        slug: "resting-membrane-potential-mechanism",
        title: "Resting Membrane Potential - Mechanism",
        estimatedMinutes: 25,
        summary: "Mathematical basis and sodium-potassium pump function.",
        contentMd: "# Resting Membrane Potential - Mechanism\n\n## Nernst Equation\nCalculates equilibrium potential for single ion:\nEion = (RT/zF) × ln([Ion]out/[Ion]in)\nSimplified (37°C): Eion = (61/z) × log([Ion]out/[Ion]in)\n\nFor K+ (z=+1):\nEK = 61 × log(5/140) = 61 × (-1.45) = -89 mV\n\nFor Na+ (z=+1):\nENa = 61 × log(145/12) = 61 × (1.08) = +66 mV\n\n## Goldman-Hodgkin-Katz (GHK) Equation\nCalculates membrane potential considering multiple ions:\nVm = (RT/F) × ln([PK × [K]out + PNa × [Na]out + PCl × [Cl]in] / [PK × [K]in + PNa × [Na]in + PCl × [Cl]out])\n\nWhere P = permeability\nAt rest: PK >> PNa > PCl\nResult: ~-70 mV (between EK and ENa, closer to EK)\n\n## Na+-K+-ATPase\nStructure:\n- Embedded in membrane\n- α subunit: Catalytic\n- β subunit: Regulatory\n- Forms 3:2 exchange ratio (3 Na+ out, 2 K+ in)\n\nMechanism:\n1. ATP binding to α-subunit\n2. Na+ binding (inside)\n3. ATP hydrolysis\n4. Phosphorylated intermediate\n5. Na+ release (outside)\n6. K+ binding (outside)\n7. Dephosphorylation\n8. K+ release (inside)\n9. Return to resting state\n\nEnergy Cost:\n- 1 ATP → 3 Na+ out, 2 K+ in\n- Net: Removes 1 positive charge/cycle\n- Contributes ~-5 to -10 mV to membrane potential\n\n## Equilibrium Potentials\nEK: -89 mV (K+ equilibrium)\nENa: +66 mV (Na+ equilibrium)\nECl: -85 mV (Cl- equilibrium)\nRMP at -70 mV: Between EK and ENa, reflects K+ dominance\n\n## Ion Channel Role\nSelective permeability:\n- K+ channels: Selective for K+\n- Na+ channels: Selective for Na+\n- Cl- channels: Selective for Cl-\n- At rest: K+ channels open (PK high)\n- Result: Membrane potential close to EK\n\n## Factors Affecting RMP\n- Temperature: ↑T → more permeable\n- pH: Affects channel opening\n- Ionic strength: Changes gradient\n- Metabolism: ↓ATP → Na+-K+-ATPase ↓\n- Cell size: Affects ion concentration changes\n- Pathology: Hyperkalemia/hypokalemia shifts RMP",
        mnemonics: [
          { text: "NERNST-GHK", explanation: "Nernst: single ion equilibrium, Goldman: multiple ions weighted by permeability, Hodgkin: dynamic resting potential, Katz: reflects ion distribution" }
        ],
        keyPoints: [
          "Nernst: Single ion equilibrium potential",
          "GHK: Multiple ions, weighted by permeability",
          "RMP at -70 mV reflects K+ dominance",
          "Na+-K+-ATPase: 3 Na+ out, 2 K+ in",
          "ATP contributes -5 to -10 mV",
          "K+ channels dominant at rest"
        ],
        textbookRefs: [
          { book: "Cellular and Molecular Physiology", chapter: "Ion Transport", edition: "4th" },
          { book: "Essential Neurophysiology", chapter: "Membrane Potential", edition: "2nd" }
        ]
      },
      {
        layer: 3,
        slug: "resting-membrane-potential-clinical",
        title: "Resting Membrane Potential - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical disorders and Indian health context.",
        contentMd: "# Resting Membrane Potential - Clinical\n\n## Hyperkalemia (K+ >5.5 mEq/L)\nEffect on RMP:\n- EK shifts toward 0 (less negative)\n- RMP becomes less negative (depolarized)\n- Threshold moves closer to resting potential\n- Cells more excitable initially\n- Later: Inactivation → less excitable\n\nClinical Presentation:\n- Weakness\n- Cardiac arrhythmias (peaked T waves, widened QRS)\n- Paresthesias\n- Respiratory muscle weakness\n- Rhabdomyolysis risk\n\nECG Changes:\n- Peaked T waves\n- Widened QRS\n- PR prolongation\n- ST depression\n- Late: Sine wave pattern\n\nCauses:\n- Renal failure\n- ACE inhibitors, NSAIDs\n- Aldosterone deficiency\n- Cell destruction (trauma, hemolysis)\n- Acidosis (H+ exchanges for K+)\n\n## Hypokalemia (K+ <3.5 mEq/L)\nEffect on RMP:\n- EK shifts away from 0 (more negative)\n- RMP becomes more negative (hyperpolarized)\n- Cells less excitable\n- Threshold moves away\n\nClinical Presentation:\n- Weakness\n- Cardiac arrhythmias\n- Constipation\n- Polyuria (nephrogenic DI)\n- Muscle cramps\n\nECG Changes:\n- Flat T waves\n- ST depression\n- U waves (hallmark)\n- PR prolongation\n\nCauses:\n- Diuretics (thiazides, loop)\n- Diarrhea\n- Vomiting\n- Alkalosis (K+ shifts into cells)\n- Insulin (drives K+ into cells)\n\n## Hypernatremia (Na+ >150 mEq/L)\nEffect:\n- Osmotic gradient out of cell\n- Cell shrinkage\n- RMP less affected directly\n- Indirect effects through water shift\n\nClinical:\n- Thirst\n- Hyperreflexia\n- Confusion, lethargy\n- Seizures (severe)\n- Muscle stiffness\n\n## Hyponatremia (Na+ <130 mEq/L)\nEffect:\n- Osmotic gradient into cell\n- Cell swelling\n- Cerebral edema (if acute)\n\nClinical:\n- Confusion, lethargy\n- Seizures\n- Coma (severe)\n- Headache\n- Nausea\n\n## Hypocalcemia\nEffect:\n- Decreased Cl- permeability somehow related\n- Increased nerve excitability\n- Spontaneous firing\n\nClinical:\n- Paresthesias (perioral)\n- Tetany (Chvostek's sign, Trousseau's sign)\n- Seizures (severe)\n- QT prolongation\n\n## Hypermagnesemia\nEffect:\n- Blocks Ca2+ channels\n- Hyperpolarizes cell\n- Decreased excitability\n\nClinical:\n- Weakness\n- Hyporeflexia\n- Cardiac conduction slowing\n- Respiratory depression\n\n## Indian Context\nHyperkalemia:\n- Common: Renal failure prevalence\n- Medications: ACE inhibitors widely used\n- NSAIDs: Over-the-counter use\n- Risk: Limited ICU monitoring\n\nHypokalemia:\n- Common: Diarrhea from infections\n- Diuretics: Widely used for hypertension\n- Malnutrition: Chronic depletion\n- Poor monitoring: Limited renal function testing",
        mnemonics: [
          { text: "ELECTROLYTE-RMP", explanation: "Excess potassium raises RMP, Lacks potassium lowers RMP, Excess sodium: osmotic, Calcium: excitability, Trousseau (hypocalcemia), Reflection of ion shifts" }
        ],
        keyPoints: [
          "Hyperkalemia: RMP depolarized, peaked T waves, arrhythmias",
          "Hypokalemia: RMP hyperpolarized, U waves, arrhythmias",
          "Hypernatremia: Osmotic, cell shrinkage",
          "Hyponatremia: Osmotic, cell swelling, seizures",
          "Hypocalcemia: Increased excitability, tetany",
          "Hypermagnesemia: Decreased excitability"
        ],
        textbookRefs: [
          { book: "Fluid and Electrolyte Disorders", chapter: "Potassium Disorders", edition: "3rd" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Hypokalemia", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "resting-membrane-potential-exam",
        title: "Resting Membrane Potential - Exam Prep",
        estimatedMinutes: 20,
        summary: "Calculation problems and clinical management strategies.",
        contentMd: "# Resting Membrane Potential - Exam Prep\n\n## Nernst Calculation Practice\nProblem: Calculate EK at 37°C\nGiven: [K+]out = 5 mEq/L, [K+]in = 140 mEq/L\nEK = 61 × log(5/140)\nEK = 61 × (-1.45)\nEK = -88.5 mV ≈ -89 mV\n\nProblem: Calculate ENa\nGiven: [Na+]out = 145 mEq/L, [Na+]in = 12 mEq/L\nENa = 61 × log(145/12)\nENa = 61 × (1.08)\nENa = +65.9 mV ≈ +66 mV\n\n## RMP Interpretation\nNormal RMP: -70 mV (average neuron)\nRange: -60 to -90 mV (varies by cell type)\n\nIf measured RMP more positive than expected:\n- Consider hyperkalemia\n- Depolarization\n- Less negative = more excitable\n\nIf measured RMP more negative than expected:\n- Consider hypokalemia\n- Hyperpolarization\n- More negative = less excitable\n\n## ECG Changes by Electrolyte\nHyperkalemia (K+ >5.5):\n- Peaked T waves (earliest sign)\n- Widened QRS\n- PR prolongation\n- ST depression\n- Sine wave (late, very dangerous)\n\nHypokalemia (K+ <3.5):\n- U wave (characteristic, after T)\n- Flat/low T waves\n- ST depression\n- PR prolongation\n- Risk: TdP (Torsades de Pointes)\n\nHypocalcemia (Ca <8 mg/dL):\n- QT prolongation (increased ST segment)\n- T wave changes\n\nHypermagnesemia (Mg >4 mg/dL):\n- PR prolongation\n- QRS widening\n- QT prolongation\n\n## Management Algorithms\n\nHyperkalemia (Acute, K+ >6):\n1. EMERGENCY assessment\n2. ECG monitoring\n3. Calcium gluconate: Protects cardiac (10-20 mL IV)\n4. Insulin + glucose: Shifts K+ into cells\n   - Regular insulin 10 units IV + 25g dextrose\n   - Effect: 30 min, peak 1-2 hours\n5. Albuterol: β2 agonist shifts K+ in (10-20 mg)\n6. Sodium bicarbonate: In acidosis (50-100 mEq IV)\n7. Diuretic: Furosemide if renal output intact\n8. Dialysis: If renal failure, peak <6.5\n9. Calcium polystyrene sulfonate: Binding resin (chronic)\n10. Address cause: Stop ACE inhibitor, NSAIDs, etc.\n\nHypokalemia (K+ <2.5 or symptoms):\n1. Cautious replacement (risk: hyperkalemia overshoot)\n2. IV: 10-20 mEq K+ per hour (max 40 mEq/hour)\n3. Oral: 20-40 mEq daily (safer)\n4. ECG monitoring\n5. Address cause: Replace diuretics, correct diarrhea\n6. Magnesium: Often need to replace (50% have hypomagnesemia)\n\nHypernatremia (Na+ >150):\n1. Identify cause (insensible loss vs inadequate intake)\n2. Slow correction (max 10 mEq/24 hours to avoid edema)\n3. Calculate free water deficit:\n   FWD = 0.6 × body weight × (1 - 140/Na+)\n4. Hypotonic fluids (D5W, 0.45% saline)\n5. Address cause\n\nHyponatremia (Na+ <125):\n1. Assess volume status\n2. If symptomatic (seizures, confusion):\n   - 3% hypertonic saline IV\n   - Correct slowly (max 10 mEq/24 hours)\n3. Calculate sodium deficit:\n   NaD = 0.6 × body weight × (140 - Na+)\n4. Identify cause: SIADH, volume depletion, etc.\n5. Address underlying cause\n\n## ICU Monitoring\nK+ levels: Daily if on diuretics/ARBs\nMgnesium: With hypokalemia (often coexistent)\nCa2+: Especially if hypokalemia\nECG: Serial if electrolyte changes\nRenal function: BUN, creatinine\nAcid-base: Affects K+ shifts",
        mnemonics: [
          { text: "ACUTE-HYPOKALEMIA", explanation: "Always calculate from Nernst, Check ECG urgently, Urgent calcium (hyperK), Treatment insulin/glucose, Emergency management, Hypokalemia U waves, Identify cause, Protocol fluids/ions, Order labs, Kidney function" }
        ],
        keyPoints: [
          "Nernst calculates single ion equilibrium",
          "Hyperkalemia: Peaked T, widened QRS, sine wave late",
          "Hypokalemia: U waves, flat T, arrhythmia risk",
          "Acute hyperkalemia: Calcium, insulin, albuterol",
          "Chronic hyperkalemia: Potassium binder, address cause",
          "Hypokalemia correction: Slow, monitor magnesium",
          "Hyponatremia: Symptomatic needs hypertonic saline",
          "Hypernatremia: Slow correction, free water deficit"
        ],
        textbookRefs: [
          { book: "Clinical Physiology of Acid-Base and Electrolyte Disorders", chapter: "Potassium", edition: "5th" },
          { book: "Critical Care Nephrology", chapter: "Electrolyte Emergencies", edition: "3rd" }
        ]
      },
      {
        layer: 5,
        slug: "resting-membrane-potential-recall",
        title: "Resting Membrane Potential - Active Recall",
        estimatedMinutes: 15,
        summary: "Critical facts and rapid diagnostic/treatment decisions.",
        contentMd: "# Resting Membrane Potential - Active Recall\n\n## MUST KNOW Facts\n1. RMP: -70 mV (neurons)\n2. EK: -89 mV\n3. ENa: +66 mV\n4. RMP closer to EK (K+ dominance at rest)\n5. K+ high in, low out\n6. Na+ low in, high out\n7. Na+-K+-ATPase: 3 Na+ out, 2 K+ in\n8. GHK: RMP = weighted average of equilibrium potentials\n\n## Hyperkalemia Diagnosis\nSigns:\n- Weakness\n- Peaked T waves (earliest ECG)\n- Widened QRS\n- Numbness/paresthesias\n- Arrhythmias\n\nRMP Effect: Depolarized (less negative), cells more excitable\n\nTreatment (Acute >6):\n1. Calcium gluconate (protect cardiac) - immediate\n2. Insulin + dextrose (shift K+ in) - 30 min onset\n3. Albuterol (β2 effect) - 10-20 min onset\n4. Sodium bicarbonate (if acidotic)\n5. Dialysis (if renal failure)\n\n## Hypokalemia Diagnosis\nSigns:\n- Weakness\n- U waves (characteristic)\n- Flat T waves\n- Constipation\n- Polyuria\n\nRMP Effect: Hyperpolarized (more negative), cells less excitable\n\nTreatment:\n1. Calculate deficit\n2. IV replacement slowly (10-20 mEq/hour)\n3. Check magnesium (co-deplete)\n4. Address cause\n5. ECG monitoring\n\n## ECG Quick Recognition\nHyperkalemia: Peaked T, widened QRS, sine wave\nHypokalemia: U waves, flat T, ST depression\nHypocalcemia: Prolonged QT\nHypermagnesemia: Prolonged PR, widened QRS\n\n## Nernst Equation Quick\nEion = 61 × log([out]/[in])\nFor K+: 61 × log(5/140) = 61 × (-1.45) = -89 mV\nFor Na+: 61 × log(145/12) = 61 × (1.08) = +66 mV\n\n## GHK Concept\nRMP depends on:\n- All ion gradients (Nernst each)\n- Permeabilities (weighting)\n- At rest: PK >> PNa, so RMP closer to EK\n- During activity: PNa increases, RMP toward ENa\n\n## Ion Cause of Disorders\nHyperkalemia causes:\n- Renal failure (most common)\n- ACE/ARB use\n- NSAIDs\n- Potassium supplements\n- Transcellular shift (acidosis, insulin lack)\n\nHypokalemia causes:\n- Diuretics (most common)\n- Diarrhea\n- Vomiting\n- Alkalosis\n- Insulin (drives K+ in)\n\n## Special Situations\nAcidosis: Drives K+ OUT (hyperkalemia)\nAlkalosis: Drives K+ IN (hypokalemia)\nInsulin: Drives K+ IN (hypokalemia)\nCatecholamines: Drive K+ IN (hypokalemia)\n\n## Exam Question Strategy\n1. Calculate/estimate RMP based on scenario\n2. Determine if depolarized (hyperkalemia) or hyperpolarized (hypokalemia)\n3. Predict excitability (depolarized = more excitable initially)\n4. Recognize ECG pattern\n5. Select appropriate treatment\n\n## Clinical Pearl Differences\n- Hyperkalemia ECG: PEAKED T (earliest and most characteristic)\n- Hypokalemia ECG: U WAVES (most characteristic after T)\n- Hypocalcemia: Prolonged QT (ST + T length)\n- Urgent treatment: Hyperkalemia > Hypokalemia (cardiac risk higher)\n\n## Emergency Recognition\nPatient with peaked T waves:\n→ Suspect hyperkalemia\n→ STAT K+ level\n→ ECG monitor\n→ Calcium gluconate immediately\n→ Insulin + glucose\n→ Check renal function\n\nPatient with weakness + U waves:\n→ Suspect hypokalemia\n→ STAT K+ level\n→ Check Mg level\n→ Replace cautiously\n→ ECG monitor\n→ Address cause\n\n## India-Specific Issues\n- Hyperkalemia: Renal disease, ACE inhibitors common\n- Hypokalemia: Diuretics for HTN, diarrhea from infections\n- Monitoring: Limited serum electrolyte access, rural areas\n- Calcium: Often deficient, public health issue\n- Magnesium: Co-depletion with diuretics common",
        mnemonics: [
          { text: "RMP-RECALL", explanation: "Resting membrane potential -70mV, Membrane selectively permeable, Permeability dominates (K at rest), Reverse Nernst/GHK weighted, Equilibrium potentials frame range, Create ion gradients (ATPase), All electrolytes affect", }
        ],
        keyPoints: [
          "RMP -70 mV in neurons",
          "EK -89 mV, ENa +66 mV",
          "RMP closer to EK (K+ dominance)",
          "Hyperkalemia: Peaked T, widened QRS",
          "Hypokalemia: U waves, flat T",
          "Hyperkalemia emergency: Calcium → insulin → albuterol",
          "Hypokalemia: Slow replacement, check magnesium",
          "Acidosis: K+ up (hyperkalemia)",
          "Alkalosis: K+ down (hypokalemia)",
          "Na+-K+-ATPase: 3 Na+ out, 2 K+ in"
        ],
        textbookRefs: [
          { book: "Essential Medical Physiology", chapter: "Resting Membrane Potential", edition: "5th" },
          { book: "Board Review Series Physiology", chapter: "Membrane Transport", edition: "6th" }
        ]
      }
    ]
  }
];
