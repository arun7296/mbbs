import type { TopicLessons } from "./content-loader";

export const psychiatryLessonsPart8: TopicLessons[] = [
  {
    topicCode: "PS-MOD-04-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "alcohol-use-disorder-layer-1-foundation",
        title: "Alcohol Use Disorder - Foundation",
        estimatedMinutes: 25,
        summary: "Definition, epidemiology, diagnostic criteria, harmful use vs dependence.",
        contentMd: `# Alcohol Use Disorder - Foundation

## Epidemiology
- **Global**: 3 million deaths annually (5% of all deaths)
- **India**: 13.7 million with alcohol use disorder (NMHS 2016); male predominance (90%)
- **Prevalence**: 3-5% general population; higher in males
- **Age of onset**: Early-mid 20s; earlier in males (vs females)
- **Mortality**: Cirrhosis, accidents, suicide, complications

## Diagnostic Criteria (DSM-5 Alcohol Use Disorder)

**≥2 of 11 criteria × 12 months**:
1. **Tolerance**: Need more alcohol for same effect
2. **Withdrawal**: Physical symptoms when stopped (tremor, seizure, delirium)
3. **Larger amounts**: Consuming more than intended
4. **Unsuccessful cut-down**: Repeated unsuccessful attempts to reduce
5. **Time spent**: Excessive time obtaining/using/recovering
6. **Activities abandoned**: Giving up important activities
7. **Continued despite harm**: Using despite physical/psychological problems
8. **Hazardous use**: Recurrent use in situations where dangerous
9. **Psychological problems**: Recurrent use worsens psychological problems
10. **Continued after cognizance**: Use despite knowing it causes problems
11. **Craving**: Strong desire/urge to use

**Severity**: Mild (2-3), Moderate (4-5), Severe (≥6 criteria)

## ICD-10 Alcohol Dependence Syndrome
- **Core features**: Tolerance, withdrawal, compulsive drinking, continued use despite harm
- **Code**: F10.2 (alcohol dependence), F10.1 (harmful use)
- **Diagnostic emphasis**: Loss of control, increased tolerance, withdrawal symptoms

## Harmful Use vs Dependence
- **Harmful use** (F10.1): Drinking causing health/social harm but NO dependence features
- **Dependence** (F10.2): ≥3 features (tolerance, withdrawal, compulsive drinking)
- **Key distinction**: Harmful use = behavioral consequences; Dependence = physiological + psychological`,
        mnemonics: [
          { text: "AUD ≥2 criteria × 12 months (Tolerance, Withdrawal, Larger amounts, unsuccessful Cut-down, Time spent, Activities abandoned, Continued despite harm, Hazardous, Psychological, Cognizance, craving)", explanation: "TWLUCTACHPC" },
          { text: "Alcohol highest mortality cause of death in India after malaria; 13.7M with AUD in India (90% male)", explanation: "Epidemiology" },
          { text: "Harmful use = behavioral consequences; Dependence = tolerance + withdrawal + compulsive", explanation: "Diagnostic distinction" },
          { text: "Mild AUD (2-3 criteria), Moderate (4-5), Severe (≥6); dependence implies severe", explanation: "Severity rating" }
        ],
        keyPoints: [
          "AUD most common substance use disorder; affecting ~14M Indians",
          "Male predominance (90%); earlier onset in males",
          "Harmful use (behavioral) vs Dependence (physiological + loss of control)",
          "Tolerance, withdrawal, compulsive drinking core dependence features",
          "3 million annual deaths globally; India high mortality (cirrhosis, accidents, suicide)"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Alcohol-Related Disorders", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Substance-Related and Addictive Disorders", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "alcohol-use-disorder-layer-2-mechanism",
        title: "Alcohol Use Disorder - Mechanism",
        estimatedMinutes: 30,
        summary: "GABA & glutamate mechanisms, alcohol effects on brain, dependence development.",
        contentMd: `# Alcohol Use Disorder - Mechanism

## Alcohol's Neurochemical Effects

### GABA Enhancement (Inhibitory)
- **Acute**: Alcohol enhances GABA-A receptors → CNS depression, anxiolytic, sedation
- **Mechanism**: Positive allosteric modulation of GABA-A (similar to benzodiazepines)
- **Chronic**: GABA-A receptors downregulate (tolerance develops)

### Glutamate Inhibition (Excitatory)
- **Acute**: Alcohol blocks NMDA (glutamate) receptors → reduced excitation
- **Chronic**: NMDA receptors upregulate (compensatory)
- **Withdrawal**: Upregulated NMDA unopposed (excessive excitation)

### Dopamine & Reward System
- **Mesolimbic dopamine release**: Alcohol triggers dopamine → reward, reinforcement
- **Chronic use**: Dopamine dysregulation, reduced reward sensitivity (anhedonia)
- **Addiction cycle**: Cravings driven by dopamine dysregulation

## Dependence Development

### Tolerance
- **Cellular adaptation**: Reduced response to same alcohol dose
- **Mechanism**: Receptor downregulation (GABA-A ↓), upregulation (NMDA ↑)
- **Consequence**: Escalating consumption to achieve same effect

### Withdrawal Syndrome
- **Timing**: 6-48 hours after last drink (peak 24-48h)
- **Mechanism**: Unopposed glutamate activity (NMDA upregulated from chronic blockade)
- **Spectrum**: Mild (tremor, sweating) → Seizures → Delirium tremens

### Liver Damage (Hepatotoxicity)
- **Mechanism**: Acetaldehyde (toxic metabolite) → oxidative stress, inflammation
- **Progression**: Fatty liver → Alcoholic hepatitis → Cirrhosis
- **Timeline**: Varies; cirrhosis can develop 5-15 years with heavy use

## Wernicke's Encephalopathy
- **Cause**: Thiamine (B1) deficiency from alcohol malnutrition
- **Features**: Confusion, ataxia, ophthalmoplegia (eye movement paralysis)
- **Treatment**: Urgent thiamine IV (emergency)`,
        mnemonics: [
          { text: "Acute: GABA ↑ + NMDA ↓ = depression; Chronic: GABA ↓ + NMDA ↑ = upregulation", explanation: "Adaptive mechanisms" },
          { text: "Withdrawal = unopposed NMDA (excitation): tremor → seizures → delirium tremens", explanation: "Withdrawal cascade" },
          { text: "Wernicke = Thiamine deficiency (malnutrition) → confusion, ataxia, eye movement; EMERGENCY (IV thiamine)", explanation: "Complication" },
          { text: "Dopamine mesolimbic = reward/cravings; downregulation with chronic use = anhedonia", explanation: "Addiction mechanism" }
        ],
        keyPoints: [
          "Alcohol GABA agonist (acute); chronic use → GABA receptors downregulate (tolerance)",
          "Alcohol NMDA antagonist (acute); chronic use → NMDA receptors upregulate",
          "Withdrawal unopposed NMDA = excessive excitation (tremor → seizures → delirium tremens)",
          "Thiamine deficiency → Wernicke's encephalopathy (emergency); IV thiamine required",
          "Dopamine dysregulation drives addiction cycle; anhedonia after chronic use"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Neurobiology of Alcohol Dependence", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Neurobiological Basis of Addiction", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "alcohol-use-disorder-layer-3-clinical",
        title: "Alcohol Use Disorder - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical presentation, complications, assessment, withdrawal management, treatment.",
        contentMd: `# Alcohol Use Disorder - Clinical

## Clinical Presentation

### Early Stage (Harmful Use)
- Social drinking → increased frequency/quantity
- Behavioral consequences (fights, blackouts, DUI)
- Social/occupational problems emerging
- Denial of problem

### Advanced Stage (Dependence)
- Tolerance prominent (drinking more, needing more)
- Withdrawal symptoms (tremor, anxiety, sweating)
- Morning drinking (to relieve withdrawal)
- Loss of control (can't stick to limits)
- Continued despite obvious harm

## Screening Tools
- **CAGE**: Cut-down, Angry, Guilty, Eye-opener (4-item sensitive screening)
- **AUDIT**: Alcohol Use Disorders Identification Test (10-item, WHO standard)
- **AUDIT-C**: Brief 3-item version (consumption focus)

## Medical Complications

### Withdrawal Spectrum (ICD-10: F10.3)
- **Mild**: Tremor, sweating, anxiety, tachycardia (6-12 hours)
- **Hallucinations**: Visual/tactile (12-48 hours; alcoholic hallucinosis)
- **Seizures**: Generalized tonic-clonic (6-48 hours; withdrawal seizures)
- **Delirium tremens (DTs)**: Hallucinations, autonomic hyperactivity, delirium (48-96 hours); mortality 5-15% if untreated

### Organ Damage
- **Liver**: Fatty infiltration → alcoholic hepatitis → cirrhosis
- **Pancreas**: Alcoholic pancreatitis (acute, chronic)
- **Gastrointestinal**: Ulcers, gastritis, esophageal varices
- **Nervous system**: Peripheral neuropathy, cerebellar degeneration, Wernicke's encephalopathy

## Management Approach

### Detoxification (Withdrawal Management)
- **Benzodiazepines first-line**: Chlordiazepoxide, diazepam (long-acting, GABA-A enhancers)
- **Dosing**: Use CIWA-Ar scale (Clinical Institute Withdrawal Assessment) to titrate
- **Thiamine**: IV thiamine 100mg STAT (prevent Wernicke's)
- **Supportive care**: Fluids, electrolyte replacement, nutrition
- **Seizure precautions**: If prior withdrawal seizures or high-risk

### Rehabilitation & Maintenance
- **Abstinence**: Gold standard for dependence
- **Pharmacotherapy**: Naltrexone (opioid antagonist, reduces cravings), Acamprosate (GABA/glutamate modulation), Disulfiram (aversion therapy)
- **Psychotherapy**: CBT, motivational interviewing, relapse prevention
- **12-step programs**: AA (Alcoholics Anonymous) - peer support
- **Rehabilitation programs**: Inpatient/outpatient rehabilitation centers

## Special Considerations

### Pregnancy
- **Fetal Alcohol Spectrum**: Prenatal alcohol exposure → intellectual disability, behavioral problems
- **Management**: Abstinence counseled; treatment during pregnancy if dependent

### Comorbidity
- **Depression/anxiety common**: Treat underlying psychiatric disorder
- **Dual diagnosis treatment**: Address both substance use and psychiatric illness

### Relapse Prevention
- **Identify triggers**: Social situations, stress, specific people/places
- **Coping strategies**: Exercise, social activities, psychotherapy
- **Medication adherence**: Naltrexone, acamprosate improve outcomes when combined with therapy`,
        mnemonics: [
          { text: "CAGE screening: Cut-down (cut back difficulty), Angry (irritable when cut back), Guilty (guilt about drinking), Eye-opener (drink morning to avoid shakes)", explanation: "Screening tool" },
          { text: "Withdrawal timeline: 6-12h tremor → 12-48h hallucinations → 6-48h seizures → 48-96h DTs", explanation: "Progression" },
          { text: "Detoxification: Benzodiazepine + Thiamine IV + Supportive care + CIWA monitoring", explanation: "Management" },
          { text: "Medications: Naltrexone (reduce cravings), Acamprosate (GABA/glutamate), Disulfiram (aversion)", explanation: "Pharmacotherapy" }
        ],
        keyPoints: [
          "Withdrawal serious medical emergency; tremor → seizures → delirium tremens (5-15% mortality untreated)",
          "Benzodiazepines + thiamine first-line for withdrawal; use CIWA-Ar to monitor severity",
          "Liver complications major morbidity; screen for cirrhosis (ultrasound, liver function tests)",
          "Naltrexone, acamprosate, disulfiram helpful for relapse prevention when combined with therapy",
          "12-step programs (AA) effective for many; peer support critical component of long-term recovery"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Management of Alcohol Use Disorder", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Alcohol-Related Disorders: Treatment", edition: "12th" }
        ]
      },
      {
        layer: 4,
        slug: "alcohol-use-disorder-layer-4-exam-prep",
        title: "Alcohol Use Disorder - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield diagnostic criteria, withdrawal management, medication algorithms.",
        contentMd: `# Alcohol Use Disorder - Exam Prep

## Diagnostic Criteria Quick Reference
- **Harmful use**: Drinking causing health/social harm, no dependence features
- **Dependence**: ≥3 of: tolerance, withdrawal, compulsive drinking, continued despite harm
- **AUD**: ≥2 criteria × 12 months
- **Withdrawal**: 6-48h after last drink; spectrum: tremor → hallucinations → seizures → DTs

## CIWA-Ar Scale (Withdrawal Assessment)
- **Score <10**: No significant withdrawal; may not need medication
- **Score 10-15**: Mild-moderate withdrawal; benzodiazepine dosing
- **Score >15**: Severe withdrawal; higher benzodiazepine doses, ICU consideration

## Withdrawal Management Algorithm
1. **Assess severity** (CIWA-Ar scale)
2. **Benzodiazepine** (chlordiazepoxide or diazepam)
3. **Thiamine 100mg IV** STAT (prevent Wernicke's)
4. **Supportive care**: Fluids, electrolytes (low K+, Mg2+), nutrition
5. **Seizure precautions**: If prior withdrawal seizures

## High-Yield Clinical Facts
- **Withdrawal onset**: 6 hours-4 days after last drink
- **Delirium tremens**: 48-96 hours; mortality 5-15% untreated
- **Wernicke's**: Acute confusion + ataxia + ophthalmoplegia; IV thiamine emergency
- **CAGE screening**: Simple, quick, sensitive
- **Naltrexone**: Reduces cravings by blocking opioid receptors

## Common Exam Questions

**Q1: 42-year-old, 24 hours since last drink. Tremor, sweating, tachycardia, anxiety. Management?**
A: Withdrawal (mild-moderate). Benzodiazepine (chlordiazepoxide or diazepam) + thiamine IV. Use CIWA-Ar to titrate dose.

**Q2: Patient with alcohol dependence, acute confusion, ataxia, eye movement paralysis. Diagnosis?**
A: Wernicke's encephalopathy (thiamine deficiency). EMERGENCY - IV thiamine STAT. May prevent permanent Korsakoff syndrome.

**Q3: Which medication reduces alcohol cravings?**
A: Naltrexone (opioid antagonist). Also acamprosate. Disulfiram causes aversion (unpleasant reaction if drink alcohol).

**Q4: How differentiate harmful use from dependence?**
A: Harmful use = behavioral consequences; Dependence = tolerance + withdrawal + compulsive drinking + loss of control

**Q5: What's the gold standard long-term alcohol management?**
A: Abstinence + therapy (CBT, motivational interviewing) + peer support (AA) + medication if needed (naltrexone)`,
        mnemonics: [
          { text: "AUD ≥2 criteria × 12 months; Harmful use <2 criteria; Dependence ≥3 (tolerance, withdrawal, compulsive)", explanation: "Diagnostic hierarchy" },
          { text: "Withdrawal: 6h tremor, 12h hallucinations, 24h seizures, 48h DTs; Use benzodiazepine + thiamine", explanation: "Timeline & treatment" },
          { text: "CIWA-Ar <10 no meds, 10-15 benzodiazepine, >15 severe/ICU", explanation: "Severity scale" },
          { text: "Wernicke = Thiamine deficiency emergency; IV thiamine STAT prevents Korsakoff", explanation: "Medical emergency" }
        ],
        keyPoints: [
          "Alcohol Use Disorder ≥2 criteria × 12 months; includes tolerance, withdrawal, compulsive drinking",
          "Withdrawal serious: tremor (6h) → seizures (24h) → delirium tremens (48h); 5-15% mortality untreated",
          "Benzodiazepines + thiamine IV first-line for withdrawal; use CIWA-Ar to monitor",
          "Wernicke's encephalopathy medical emergency (confusion, ataxia, eye movement); IV thiamine urgently",
          "Long-term: Abstinence + therapy + peer support + medication (naltrexone) most effective"
        ],
        textbookRefs: [
          { book: "ICD-10 Clinical Descriptions", chapter: "Alcohol-Related Disorders", edition: "10th" },
          { book: "DSM-5 Manual", chapter: "Substance-Related and Addictive Disorders", edition: "5th" }
        ]
      },
      {
        layer: 5,
        slug: "alcohol-use-disorder-layer-5-active-recall",
        title: "Alcohol Use Disorder - Active Recall",
        estimatedMinutes: 20,
        summary: "10 clinical scenarios testing diagnosis, withdrawal management, treatment.",
        contentMd: `# Alcohol Use Disorder - Active Recall

## Q1: Harmful Use vs Dependence
**Case-A**: 35-year-old drinks 8 beers daily, lost job due to absences, wife threatening divorce, but denies tolerance/withdrawal symptoms. **Case-B**: 38-year-old drinks 6-8 beers daily, needs more for same effect (tolerance), morning tremor if doesn't drink, tried to quit but can't.
**Q**: Diagnosis for each?
A: **Case-A: Harmful use** - behavioral consequences (job, marriage) but no dependence features (no tolerance, no withdrawal). **Case-B: Alcohol dependence** - tolerance + withdrawal + compulsive drinking = meets dependence criteria. **Management-A**: Psychosocial (CBT, AA), consider naltrexone. **Management-B**: Detoxification first (benzodiazepine + thiamine), then rehabilitation.

## Q2: Withdrawal Seizure - Emergency
**Case**: 42-year-old last drink 24 hours ago. Now develops generalized seizure, post-ictal state.
**Q**: What's happening? Management?
A: **Withdrawal seizure** (alcohol withdrawal symptom). Develops 6-48 hours after last drink; can have multiple seizures. **Management**: (1) Safety (airway, breathing), (2) Benzodiazepine IV (not oral, intra-seizure) - lorazepam 2-4mg IV, (3) Thiamine 100mg IV, (4) Admit to ICU/monitored setting, (5) Continue benzodiazepine dosing (may need escalation), (6) Seizure precautions. **Prognosis**: Good if benzodiazepine given promptly; recurrent seizures if inadequately treated.

## Q3: Wernicke's Encephalopathy - Medical Emergency
**Case**: 52-year-old alcoholic presents with acute confusion, ataxia (unsteady gait), bilateral eye deviation inward (ophthalmoplegia).
**Q**: Diagnosis? Urgency? Management?
A: **Wernicke's encephalopathy** - acute thiamine (B1) deficiency from alcohol malnutrition. MEDICAL EMERGENCY (can progress to irreversible Korsakoff syndrome - permanent memory loss). **Immediate management**: (1) IV thiamine 100mg STAT (don't wait for lab confirmation; more harm delaying), (2) Also give glucose only after thiamine (glucose alone worsens without thiamine), (3) ICU if severe, (4) Supportive care. **Prognosis**: If treated early, confusion/ataxia resolve; eye movement may persist. If untreated/delayed → Korsakoff (irreversible).

## Q4: Delirium Tremens - Most Severe Withdrawal
**Case**: 48-year-old, 72 hours since last drink. Severely agitated, confused, seeing frightening hallucinations (snakes, insects), autonomic hyperactivity (HR 110, BP 160/100, temp 38.5C).
**Q**: What is this? Mortality risk? Management?
A: **Delirium tremens (DTs)** - most severe alcohol withdrawal. Develops 48-96 hours post-last drink. **Mortality**: 5-15% if untreated (cardiac arrhythmias, seizures, hyperthermia). **Management**: (1) **Intensive care unit admission** (ICU), (2) **High-dose benzodiazepines** - may need lorazepam 5-10mg IV/IM Q1-2h, (3) **Thiamine 100mg IV**, (4) **Supportive care**: Cooling measures (temp 38.5C), fluids, electrolytes, cardiac monitoring, (5) Antipsychotic if severe hallucinations after benzodiazepine (haloperidol, quetiapine). **Prognosis**: Most recover with treatment; ICU critical.

## Q5: Naltrexone for Relapse Prevention
**Case**: 45-year-old completed alcohol rehab, 2-month abstinent. High risk of relapse. Psychiatrist recommends naltrexone.
**Q**: How does naltrexone help? Expected outcome?
A: **Naltrexone mechanism**: Opioid antagonist → blocks endogenous opioid release from alcohol use → reduces reward/pleasure from drinking, reduces cravings. **Expected**: ~50% more likely to maintain abstinence with naltrexone + therapy vs therapy alone. **Requires**: Abstinent for 7-10 days before starting (avoid precipitated withdrawal if still using). **Dosing**: 50mg daily oral or 380mg IM monthly (extended-release). **Compliance**: Monitor drug taking (can't monitor compliance with oral; IM more reliable).

## Q6: CAGE Screening - Recognition
**Case**: 38-year-old at primary care. Physician asks: "Have you tried to Cut down on drinking? Do you get Angry when someone mentions your drinking? Feel Guilty about drinking? Have an Eye-opener drink in morning?" Answers YES to 2 questions.
**Q**: Significance? What's next?
A: **CAGE ≥2 = positive screening** for alcohol problems. **Sensitivity**: 85-90% for identifying alcohol dependence/problematic drinking. **Next steps**: (1) Direct assessment for AUD criteria (tolerance, withdrawal, compulsive drinking), (2) AUDIT full assessment if CAGE positive, (3) Substance use history, (4) Liver function tests, (5) Referral to psychiatry/addiction medicine if AUD confirmed.

## Q7: Dual Diagnosis - Alcohol Dependence + Depression
**Case**: 50-year-old with 10-year alcohol dependence, now also with persistent depression (anhedonia, hopelessness, suicidal ideation). Tried stopping alcohol multiple times but "depression gets worse," so drinks again.
**Q**: What's the relationship? Management implications?
A: **Alcohol-induced depression** OR **primary depression predating alcohol** (bidirectional relationship common). **Crucial distinction**: Alcohol worsens depression; depression drives alcohol use for self-medication. **Management**: (1) **Abstinence critical** (alcohol treatment first), (2) **Antidepressant** (SSRI) - start even during detoxification (improves mood, reduces relapse), (3) **Psychotherapy**: CBT for both depression + substance use, (4) **AA + dual-diagnosis support groups**, (5) **Monitor suicide risk closely** (highest in dual diagnosis). **Prognosis**: Both improve with integrated treatment addressing both disorders.

## Q8: Liver Disease - Screening & Monitoring
**Case**: 55-year-old with 20-year heavy alcohol use. Now reports fatigue, jaundice. ALT 180, AST 240, bilirubin 2.5.
**Q**: What's the liver status? Prognosis with continued drinking?
A: **Elevated transaminases** suggest alcoholic liver disease (likely alcoholic hepatitis or cirrhosis). **Investigations needed**: Ultrasound liver (assess cirrhosis, portal hypertension), coagulation (PT/INR - liver synthetic function), albumin (low indicates severe damage). **Prognosis with continued drinking**: Progression to cirrhosis likely (5-15 years heavy use). **Prognosis with abstinence**: Fatty liver reversible; hepatitis may improve; cirrhosis may stabilize (not reverse). **Management**: Abstinence (most important), nutritional support, monitor for complications (variceal bleeding, encephalopathy).

## Q9: Benzodiazepine Dependence - Iatrogenic Complication
**Case**: 48-year-old with alcohol dependence, detoxified with benzodiazepines (chlordiazepoxide taper, 2-week course). Now, 3 months later, reports anxiety again. Prescribed long-term diazepam for anxiety. Now 6 months on benzodiazepine, wants to increase dose (tolerance).
**Q**: What's the problem? How prevent?
A: **Iatrogenic benzodiazepine dependence** - very common in alcohol-dependent patients (cross-addiction). Benzodiazepine should be SHORT-TERM (2-4 weeks) during detoxification ONLY, then taper off. **Problem**: Trading alcohol for benzodiazepine dependence. **Prevention**: (1) Short benzodiazepine course (taper schedule clear), (2) Non-benzodiazepine alternatives for chronic anxiety (SSRI, buspirone, CBT), (3) Educate patient about benzodiazepine dependence risk. **Management if occurred**: Slow benzodiazepine taper (10%/week), add SSRI, psychotherapy.

## Q10: Alcohol Withdrawal vs Other Medical Emergencies
**Case**: 52-year-old, last drink 36 hours ago. Presents with confusion, elevated HR 115, BP 160/95, temp 38.2C. Differential: alcohol withdrawal vs sepsis vs other?
**Q**: How differentiate? Investigation?
A: **Overlapping presentations** - withdrawal, sepsis, both possible. **Differentiation**: (1) **History**: Alcohol use documented? Fever/chills prior (sepsis)? (2) **Exam**: Focal infection signs (sepsis)? Specific withdrawal signs (tremor, hallucinations)? (3) **Labs**: WBC (elevated sepsis), blood culture (sepsis), liver function, glucose, electrolytes. (4) **Check for both**: Alcohol withdrawal can occur WITH infection. **Management**: Don't wait for cultures - if sepsis suspected, start antibiotics. If withdrawal, start benzodiazepine. **Critical**: Sepsis + alcohol withdrawal = very high mortality; aggressive management both.`,
        mnemonics: [
          { text: "Harmful use = behavioral consequences; Dependence = tolerance + withdrawal + compulsive + loss of control", explanation: "Diagnostic distinction" },
          { text: "Withdrawal timeline: 6h tremor, 12h hallucinations, 24h seizures, 48h DTs; Use benzodiazepine + thiamine", explanation: "Management sequence" },
          { text: "Wernicke = acute confusion + ataxia + ophthalmoplegia = IV thiamine EMERGENCY", explanation: "Medical emergency" },
          { text: "Naltrexone (craving reduction), Acamprosate (GABA/glutamate), Disulfiram (aversion); all need abstinence + therapy", explanation: "Pharmacotherapy" }
        ],
        keyPoints: [
          "Alcohol dependence ≥3 of: tolerance, withdrawal, compulsive use, continued despite harm; withdrawal serious medical emergency",
          "Delirium tremens (48-96h post-drink) 5-15% mortality untreated; ICU + high-dose benzodiazepines + thiamine required",
          "Wernicke's encephalopathy (thiamine deficiency) medical emergency; IV thiamine prevents irreversible Korsakoff syndrome",
          "Dual diagnosis (alcohol + depression) very common; integrated treatment of both essential; high suicide risk",
          "Benzodiazepines short-term only during detoxification; long-term causes iatrogenic dependence; use SSRI/buspirone for chronic anxiety"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Alcohol Use Disorder: Clinical Cases", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Alcohol-Related Disorders: Management and Prognosis", edition: "12th" }
        ]
      }
    ]
  }
];
