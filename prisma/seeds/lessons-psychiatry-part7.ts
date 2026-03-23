import type { TopicLessons } from "./content-loader";

export const psychiatryLessonsPart7: TopicLessons[] = [
  {
    topicCode: "PS-MOD-02-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "suicide-risk-assessment-layer-1-foundation",
        title: "Suicide Risk Assessment - Foundation",
        estimatedMinutes: 25,
        summary: "Epidemiology, risk factors, protective factors, assessment framework.",
        contentMd: `# Suicide Risk Assessment - Foundation

## Epidemiology
- **Global**: 700,000+ annual suicides; 1 every 40 seconds
- **India**: 200,000+ annual suicides; high among youth, farmers
- **Mortality**: 10-15% in major depression, schizophrenia; 8-10% bipolar
- **Sex ratio**: Male 3:1 (males use more lethal means)
- **Age**: Peak in young adults (15-24) and elderly (>75)
- **Profession**: High-risk: farmers, physicians, military, indigenous populations

## Risk Factors by Category

### Demographic Risk Factors
- **Male gender**: 3-4× higher completion rate (despite fewer attempts)
- **Age**: Bimodal (teens-young adults, elderly >75)
- **Race/ethnicity**: In India, rural > urban; farmers vulnerable
- **Occupation**: Farmers, physicians, military
- **Marital status**: Single, divorced, widowed > married
- **Employment**: Unemployment increases risk

### Clinical Risk Factors
- **Psychiatric illness**: Depression (10-15%), schizophrenia (10%), bipolar (8-10%), substance abuse
- **Prior suicide attempts**: 10× increased risk
- **Severity of depression**: Severe depression → suicide risk increases
- **Psychotic symptoms**: Command hallucinations "kill yourself," mood-congruent delusions
- **Hopelessness**: Better predictor than depression itself

### Psychosocial Risk Factors
- **Social isolation**: Loss of relationships, social withdrawal
- **Recent losses**: Death of loved one, job loss, financial loss, relationship loss
- **Trauma**: Childhood abuse, sexual abuse, violence exposure
- **Life stressors**: Acute crises, chronic stressors piling up
- **Substance use**: Alcohol lowers impulse control; intoxication increases risk

### Protective Factors
- **Social support**: Family, friends, community involvement
- **Marriage/relationships**: Stable partnership protective
- **Employment**: Gainful employment protective
- **Religious/spiritual beliefs**: Religious affiliation protective (except extreme beliefs)
- **Future orientation**: Plans, goals, responsibilities (children, family)
- **Treatment engagement**: Psychiatric treatment, therapy compliance
- **Coping skills**: Problem-solving ability, adaptability

## Epidemiology India-Specific
- **Farmer suicides**: ~11,000 annually (agricultural debt, climate stress)
- **Gender**: Males ~71% (pesticide poisoning common method)
- **Methods**: Pesticide (30%), hanging (30%), other
- **Regional variation**: Higher in rural, agricultural states`,
        mnemonics: [
          { text: "Suicide epidemiology: Male 3:1, 700k annual, 1 every 40 seconds globally; India 200k+ annual", explanation: "Global & India data" },
          { text: "High-risk profile: Old male farmer with depression, prior attempt, substance use, isolated, hopeless", explanation: "Risk constellation" },
          { text: "Protective factors: Marriage, employment, religion, social support, future plans (children)", explanation: "Protective constellation" },
          { text: "Methods: Pesticide (30%) & hanging (30%) most common in India; males use more lethal methods", explanation: "Indian specifics" }
        ],
        keyPoints: [
          "10-15% mortality rate in major depression; suicide major preventable cause of death",
          "Male gender 3-4× higher completion (use more lethal means; fewer attempts but more fatal)",
          "Hopelessness better predictor than depression severity; critical assessment component",
          "Farmer suicides ~11,000 annually in India; agricultural debt, climate stress major stressors",
          "Social isolation, recent losses, psychotic symptoms significantly increase risk"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Suicidology and Suicide Prevention", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Suicide Risk Assessment", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "suicide-risk-assessment-layer-2-mechanism",
        title: "Suicide Risk Assessment - Mechanism",
        estimatedMinutes: 30,
        summary: "Neurobiology of suicidality, serotonin dysfunction, impulsivity mechanisms.",
        contentMd: `# Suicide Risk Assessment - Mechanism

## Neurobiological Basis
### Serotonin (5-HT) Dysfunction
- **Suicidal behavior linked to low 5-HT**: Reduced serotonin transporter binding in suicides
- **Impulsive suicides**: Particularly associated with 5-HT hypofunction
- **5-HTTLPR polymorphism**: Risk allele associated with suicide attempt history
- **Treatment implication**: SSRIs target 5-HT; reduce suicidal behavior in depression

### Stress-Diathesis Model of Suicidality
- **Diathesis**: Genetic vulnerability (low 5-HT), neuroticism, impulsivity, aggression
- **Stressors**: Psychiatric illness (depression, psychosis), social stressors, losses
- **Interaction**: Diathesis + stressor → suicidal ideation → attempt → completion

### Prefrontal Cortex (Cognitive Control) Hypoactivity
- **Reduced impulse control**: Inability to inhibit suicidal urge
- **Poor decision-making**: Limited problem-solving capacity
- **Hopelessness generation**: Inability to see alternatives
- **Consequence**: Impulsive acts, less likely to seek help

### Neurobiological States Elevating Risk
- **Acute intoxication**: Alcohol reduces prefrontal control → impulsive acts
- **Withdrawal states**: Anxiety, irritability, dysphoria from alcohol/benzodiazepine withdrawal
- **Sleep deprivation**: Impairs prefrontal function, increases mood dysregulation
- **Hormonal factors**: Testosterone ↑ in males (aggression, impulsivity); estrogen ↓ in females (mood dysregulation)`,
        mnemonics: [
          { text: "Low 5-HT = suicidality; SSRI increases 5-HT = reduces suicidal behavior; impulsive suicides particularly 5-HT related", explanation: "Serotonin hypothesis" },
          { text: "Stress-diathesis: Genetic vulnerability (impulsivity, low 5-HT) + stressors = suicidal behavior", explanation: "Interaction model" },
          { text: "Prefrontal hypoactivity = poor impulse control, hopelessness, poor problem-solving", explanation: "Cognitive dysfunction" },
          { text: "Acute intoxication, withdrawal, sleep deprivation ↑ risk (prefrontal dysfunction acutely)", explanation: "Acute state factors" }
        ],
        keyPoints: [
          "Serotonin hypofunction linked to impulsive suicidal behavior; SSRIs reduce risk",
          "Stress-diathesis model: genetic vulnerability + life stressors interact to produce suicidality",
          "Prefrontal cortex dysfunction: reduced impulse control, hopelessness, poor problem-solving",
          "Acute intoxication/withdrawal states high-risk; prefrontal function acutely impaired",
          "Sleep deprivation worsens mood dysregulation and suicide risk"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Neurobiological Aspects of Suicide", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Neurobiology of Suicidal Behavior", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "suicide-risk-assessment-layer-3-clinical",
        title: "Suicide Risk Assessment - Clinical",
        estimatedMinutes: 35,
        summary: "Structured risk assessment, lethality evaluation, safety planning, intervention.",
        contentMd: `# Suicide Risk Assessment - Clinical

## Structured Risk Assessment Framework

### Direct Questioning (ALWAYS ASK)
- **Ideation**: "Have you had thoughts of hurting/killing yourself?"
- **Intent**: "Are you planning to act on these thoughts?"
- **Plan**: "How would you do it?" (Specificity critical)
- **Means**: "Do you have access to [gun/pesticide/rope/pills]?"
- **Timeline**: "When are you thinking of doing this?"
- **Protective factors**: "What keeps you going? Family, religion, hopes?"

### Lethality Assessment (Risk Stratification)

#### IMMINENT RISK (Hospitalization Required)
- Clear intent + specific plan + readily available means + timeline definite
- Command hallucinations "kill yourself"
- Psychotic depression with hopelessness
- Recent serious suicide attempt
- Impulsive behavior with access to lethal means

#### HIGH RISK (Close Monitoring)
- Intent present but plan vague
- Access to means but ambivalent about using
- Multiple risk factors (depression, isolation, substance use)
- Prior suicide attempts
- Recent loss or acute stressor

#### MODERATE RISK (Outpatient Management with Support)
- Passive ideation ("better off dead") but no intent
- Remote plan, no current means access
- Protective factors present (family support, employment)
- Willing to engage in treatment

#### LOW RISK (Reassurance & Follow-up)
- No suicidal ideation
- No recent behavioral changes suggesting risk
- Good social support, protective factors
- Engaged in treatment

## Safety Planning
1. **Identify warning signs**: Triggers that increase suicidal thoughts
2. **Coping strategies**: Internal (distraction, self-soothing) and external (call friend, go to gym)
3. **Social support**: People to talk to, people to ask for help
4. **Professional resources**: Crisis line numbers, emergency contacts, therapist
5. **Ways to make environment safer**: Remove lethal means (pesticides, firearms, medications)

## Interventions by Risk Level

### Hospitalization (Imminent Risk)
- Involuntary admission if refusing voluntary
- Constant observation (1:1 watch)
- Remove all potential means
- Antipsychotic + antidepressant
- Daily risk reassessment

### Intensive Outpatient (High Risk)
- Multiple appointments/week
- Crisis line contact information
- Partial hospitalization program (PHP) option
- Close family involvement
- Remove lethal means from home

### Routine Outpatient (Moderate/Low Risk)
- Regular therapy (weekly)
- Psychiatry follow-up (2 weeks)
- Crisis plan reviewed
- Antidepressant optimization
- Family/social support involvement`,
        mnemonics: [
          { text: "Assess Ideation, Intent, Plan, Means, Timeline (I-I-P-M-T)", explanation: "Assessment sequence" },
          { text: "Lethality: Intent + Plan + Means + Timeline definite = IMMINENT risk (hospitalize)", explanation: "Risk stratification" },
          { text: "Safety plan: Warning signs, Coping, Social support, Resources, Means removal", explanation: "Planning components" },
          { text: "Hospitalization if: Clear intent + specific plan + available means + psychosis + serious attempt", explanation: "Admission criteria" }
        ],
        keyPoints: [
          "Direct questioning essential; always ask ideation, intent, plan, means, timeline",
          "Lethality depends on SPECIFICITY of plan and ACCESS to means (vague plan + no access = lower risk)",
          "Intoxication dramatically increases imminent risk (reduced impulse control)",
          "Safety planning critical: identify triggers, coping strategies, social support, professional resources",
          "Hospitalization if intent + plan + means + timeline; otherwise intensive outpatient with frequent contact"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Assessment and Management of Suicidal Patients", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Suicide Risk Assessment and Management", edition: "12th" }
        ]
      },
      {
        layer: 4,
        slug: "suicide-risk-assessment-layer-4-exam-prep",
        title: "Suicide Risk Assessment - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield risk factors, assessment mnemonics, hospitalization criteria.",
        contentMd: `# Suicide Risk Assessment - Exam Prep

## High-Risk Profile Mnemonic
**SAD PERSONS**: Sex (male), Age (teen or elderly), Depression, Psychiatric disorder, Ethanol use, Rational thought loss (psychosis), Social loss, Sickness (medical illness)

## Lethality Assessment Quick Reference
- **Intent**: Active vs passive ideation
- **Plan**: Specific vs vague (specific = higher risk)
- **Means**: Available vs not available (available = higher risk)
- **Access**: Immediate vs future (immediate = highest risk)
- **Protective factors**: Strong protective = lower risk even with ideation

## Risk Factors - Clinical Facts
- **Depression**: 10-15% lifetime risk
- **Prior attempts**: 10× increased risk per attempt
- **Psychosis**: Command hallucinations most dangerous
- **Age**: Teens/young adults (impulsivity), elderly (medical illness, isolation)
- **Gender**: Male 3:1 (more lethal methods)
- **Intoxication**: Acutely increases risk 10-fold
- **Recent loss**: Job, relationship, death of loved one within months

## Hospitalization Indications (Mandatory)
- Intent + specific plan + available means
- Acute intoxication + suicidal ideation
- Command hallucinations to harm self
- Severe psychotic depression
- Serious recent attempt
- Severe hopelessness + behavioral preparation

## Common Exam Questions

**Q1: 35-year-old "thinking it would be better if I wasn't around, maybe take pills" but denies plan/intent. No access to lethal means. Risk?**
A: Passive ideation, no clear intent, no access = MODERATE risk (if depressed) or LOW risk (if adequate protective factors). Outpatient with weekly follow-up, safety plan.

**Q2: 50-year-old states "I'm hanging myself tonight. I have the rope." Risk assessment?**
A: IMMINENT risk - Clear intent + specific plan + available means + timeline definite = MANDATORY HOSPITALIZATION (involuntary if refusing).

**Q3: Which is better predictor of suicide: depression severity or hopelessness?**
A: Hopelessness - more specific predictor than depression alone; hopelessness = higher suicide risk.

**Q4: Intoxicated patient with suicidal ideation. What's the acute risk?**
A: VERY HIGH - alcohol reduces prefrontal impulse control; impulsive acts likely. Close supervision, hospitalization consideration.

**Q5: Which psychiatric diagnosis has HIGHEST suicide risk?**
A: Major depression with psychotic features (30-40% risk); Bipolar disorder higher than unipolar depression`,
        mnemonics: [
          { text: "SAD PERSONS mnemonic: Sex (M), Age (teen/old), Depression, Psychiatric, Ethanol, Rational loss, Social loss, Sickness", explanation: "Risk factors" },
          { text: "Imminent = Intent + Plan + Means + Timeline → HOSPITALIZE; Passive ideation + no plan + protective factors → outpatient", explanation: "Risk stratification" },
          { text: "Hopelessness > depression severity as predictor; command hallucinations = very high risk", explanation: "Clinical pearls" },
          { text: "Intoxication acutely ↑ risk 10×; recent loss, prior attempts = chronic risk ↑", explanation: "Acute vs chronic risk" }
        ],
        keyPoints: [
          "SAD PERSONS: comprehensive risk factor mnemonic for screening",
          "Assess ideation, intent, plan, means, timeline systematically",
          "Hospitalization mandatory if: intent + specific plan + available means + imminent timeline",
          "Hopelessness better predictor than depression severity; always assess",
          "Male gender 3:1 higher completion rate; use more lethal means"
        ],
        textbookRefs: [
          { book: "ICD-10 Clinical Descriptions", chapter: "Suicide Risk Assessment", edition: "10th" },
          { book: "DSM-5 Manual", chapter: "Assessing Suicide Risk", edition: "5th" }
        ]
      },
      {
        layer: 5,
        slug: "suicide-risk-assessment-layer-5-active-recall",
        title: "Suicide Risk Assessment - Active Recall",
        estimatedMinutes: 20,
        summary: "10 case scenarios testing risk stratification and intervention decisions.",
        contentMd: `# Suicide Risk Assessment - Active Recall

## Q1: Imminent Risk - Emergency Hospitalization
**Case**: 42-year-old depressed man states "I'm going to kill myself tonight by hanging. I have rope in garage. My wife will be at work."
**Q**: Risk level and action?
A: **IMMINENT RISK** - Clear intent + specific plan + available means + definite timeline + opportunity. **Action**: MANDATORY HOSPITALIZATION (involuntary if refusing), immediate safety planning (remove rope), 1:1 constant observation, antipsychotic + antidepressant, admit to psychiatric unit.

## Q2: Passive Ideation - Outpatient Management
**Case**: 35-year-old depressed woman "I've thought life isn't worth living, but I wouldn't act on it. My kids need me." Denies plan/intent, no means access.
**Q**: Risk level and management?
A: **MODERATE-LOW RISK** - Passive ideation, no intent, strong protective factor (children). **Management**: Outpatient with weekly psychiatry, antidepressant optimization, therapy (CBT), safety plan created, emergency numbers given, follow-up in 3-5 days.

## Q3: Intoxication + Ideation - Acute Risk
**Case**: 45-year-old alcoholic, intoxicated, "I can't take this anymore, I might harm myself." Admits to gun at home.
**Q**: Acutely how risky?
A: **VERY HIGH ACUTE RISK** - Intoxication reduces prefrontal impulse control; suicidal + means available = imminent danger. **Action**: (1) Do NOT discharge, (2) Involuntary hospitalization if refusing voluntary, (3) Contact family to secure firearm, (4) Continuous observation, (5) Alcohol detoxification protocol, (6) Antidepressant/antipsychotic as needed.

## Q4: Prior Attempt - Risk Escalation
**Case**: 40-year-old with depression, prior suicide attempt (overdose 2 years ago, survived). Now reports new suicidal thoughts.
**Q**: How does prior attempt affect current risk?
A: **RISK ESCALATED** - Prior attempt = 10× increased risk for subsequent attempt. **This patient**: Prior serious attempt + current ideation = HIGH RISK. **Management**: Intensive monitoring, antidepressant optimization (if not on one, start), weekly psychiatry, psychotherapy, safety plan, consider hospitalization if intent/plan develop.

## Q5: Psychosis + Suicidal Command Hallucinations
**Case**: 28-year-old with schizophrenia, hearing voices command "kill yourself." Denies intent but states "voice is getting louder."
**Q**: Risk assessment?
A: **HIGH-IMMINENT RISK** - Command hallucinations to harm self is major risk factor. Resistance to command important (he denies intent now) but increasing loudness suggests escalating. **Management**: Hospitalization, antipsychotic optimization (may need increase/augmentation), safety monitoring, psychotherapy, assess for hopelessness/depression (which increases risk further).

## Q6: Hopelessness - Better Predictor
**Case**: 38-year-old depressed but mild-moderate severity. However, states "Nothing will ever change, I'm worthless, there's no point."
**Q**: Why is this concerning despite mild-moderate depression?
A: **Hopelessness = better predictor than depression severity**. This patient's hopelessness suggests HIGH suicide risk despite not severe depression. **Management**: Assess for suicidal ideation carefully, antidepressant + psychotherapy, safety plan, frequent contact. Hopelessness resolves slower than mood; needs targeted intervention (cognitive therapy for hopelessness).

## Q7: Loss & Acute Stressor
**Case**: 52-year-old farmer losing land due to debt. Wife left him; lost job. Now states "I can't handle this." Admits to pesticide access.
**Q**: Risk analysis?
A: **VERY HIGH RISK** - Multiple acute losses (property, marriage, employment) + access to lethal means (pesticide) + psychiatric risk (farmer high-risk group). **Management**: MUST directly assess for suicidality; if present = hospitalization. Even without current ideation = HIGH preventive risk. Debt counseling, family therapy, antidepressant, safety measures (pesticide secured/removed).

## Q8: Protective Factors - Risk Reduction
**Case**: 45-year-old with depression and suicidal ideation but strong marriage, gainful employment, religious faith, 2 young children, engaged in therapy.
**Q**: How do protective factors affect risk?
A: **MODERATE RISK → manageable with outpatient care**. Protective factors (marriage, employment, religion, children, therapy) are powerful counterbalances to ideation. **Management**: Can manage outpatient with frequent contact if intent/plan absent. Safety plan emphasizes protective factors (call wife, go to church, time with children). Regular follow-up, antidepressant, therapy continuation.

## Q9: Ambivalent Intent - Risk Stratification
**Case**: 40-year-old on antidepressant, reports "I've thought about it, I have pills, but part of me wants to live for my family."
**Q**: Risk level?
A: **HIGH but not IMMINENT** - Has means (pills), ideation present, but ambivalent intent (protective). **Management**: (1) Not emergency hospitalization required if willing to engage, (2) But close monitoring (phone call next day, appointment within week), (3) Secure medications (partner manages pills), (4) Crisis plan reviewed, (5) Remove suicidal ideation triggers if possible, (6) Optimize antidepressant (may take weeks to reduce ideation).

## Q10: Assessment Refusal - Clinical Dilemma
**Case**: 35-year-old refuses to answer suicide assessment questions ("That's private"). Has depression, social isolation, prior attempt, but reports "I'm fine."
**Q**: How proceed?
A: **Cannot assume low risk from refusal** - Refusal to discuss may indicate: (1) Shame/stigma, (2) Active ideation (reluctant to disclose), (3) Personality factors (privacy, mistrust). **Management**: (1) Normalize assessment ("suicide screening standard of care"), (2) Explain why important ("keeping you safe"), (3) Revisit assessment regularly (many disclose over time), (4) Collateral history (family, friends) with consent, (5) Document refusal, (6) Err toward safety = more frequent follow-up, safety planning if possible, hospitalization if concerning behaviors emerge.`,
        mnemonics: [
          { text: "Imminent = Intent + Plan + Means + Timeline = HOSPITALIZE; Passive + no plan + protective = outpatient", explanation: "Risk stratification" },
          { text: "Prior attempt = 10× risk; Command hallucinations = very high; Hopelessness > depression severity", explanation: "Risk elevators" },
          { text: "Intoxication ↑ risk 10-fold; Loss (job, marriage, property) acute stressor; Farmer high-risk group", explanation: "Acute risks" },
          { text: "Protective factors (marriage, employment, children, religion) reduce risk significantly", explanation: "Risk reducers" }
        ],
        keyPoints: [
          "Imminent risk = intent + specific plan + available means + timeline → mandatory hospitalization",
          "Hopelessness better predictor than depression severity; assess always",
          "Prior suicide attempt = 10× increased risk; command hallucinations = very high risk",
          "Intoxication acutely increases risk 10-fold; reduce impulse control dramatically",
          "Protective factors (family, employment, faith) powerful counterbalances; incorporate into safety planning"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Suicide Risk Assessment: Advanced Cases", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Suicide Prevention and Management", edition: "12th" }
        ]
      }
    ]
  }
];
