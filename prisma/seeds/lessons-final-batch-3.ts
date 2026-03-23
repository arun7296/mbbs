import type { TopicLessons } from "./content-loader";

/**
 * 5-layer lessons for final batch 3.
 * Covers: Somatoform & Dissociative Disorders (PS-MOD-03-TOP-03),
 * Opioid & Other Substance Use (PS-MOD-04-TOP-02).
 */
export const finalBatch3Lessons: TopicLessons[] = [
  // ═══════════════════════════════════════════════════════════════
  // PS-MOD-03-TOP-03: Somatoform & Dissociative Disorders
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "PS-MOD-03-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "somatoform-dissociative-layer-1-foundation",
        title: "Somatoform & Dissociative Disorders - Foundation",
        estimatedMinutes: 20,
        summary: "Somatic symptom disorders present with physical symptoms not fully explained by medical conditions. Dissociative disorders involve disruption of consciousness, identity, or motor function.",
        contentMd: `# Somatoform & Dissociative Disorders - Foundation

## Somatic Symptom and Related Disorders (DSM-5)

### Somatic Symptom Disorder (SSD)
- Physical symptoms causing distress with excessive health anxiety
- Duration: >6 months
- Not malingering or factitious (patient genuinely suffers)
- Common in primary care (5-7%); up to 20-30% in India

### Conversion Disorder (Functional Neurologic Symptom Disorder)
- Neurologic symptoms (paralysis, blindness, tremor) incompatible with known neurologic disease
- Often preceded by psychological stressor
- **La belle indifference**: Patient unconcerned about severity
- **Hoover sign**: Involuntary hip extension when testing opposite leg

### Illness Anxiety Disorder (Hypochondriasis)
- Preoccupation with having serious disease despite minimal/no symptoms
- Excessive health-related behaviors (checking, reassurance-seeking)
- Duration: >6 months

### Factitious Disorder (Munchausen Syndrome)
- Intentional production of symptoms for sick role
- No external incentive (vs malingering)
- **Munchausen by proxy**: Caregiver produces illness in another (usually child)

### Malingering (NOT a psychiatric disorder)
- Intentional symptom production for external gain (compensation, avoiding duty)
- Not a mental illness; medicolegal issue

## Dissociative Disorders

### Dissociative Amnesia
- Inability to recall important personal information (usually traumatic)
- Too extensive to be normal forgetting
- **Dissociative fugue**: Sudden travel away from home with amnesia for identity

### Dissociative Identity Disorder (Multiple Personality)
- Two or more distinct personality states
- Gaps in recall of events, personal information
- Most controversial diagnosis; rare

### Depersonalization/Derealization Disorder
- Feeling detached from self (depersonalization) or surroundings (derealization)
- Reality testing intact (patient knows it is abnormal)

> **Clinical Pearl**: In India, conversion disorder and dissociative disorders are very common presentations, especially in young women, and are often mistaken for neurological disease.`,
        mnemonics: [
          { text: "SSD = Suffering is real; Factitious = Faking for role; Malingering = Money/gain", explanation: "Three conditions with physical symptoms but different motivations" },
          { text: "La belle indifference = beautiful indifference to symptoms", explanation: "Classic feature of conversion disorder" }
        ],
        keyPoints: [
          "Somatic symptom disorder: genuine distress, excessive health anxiety, >6 months",
          "Conversion: neurologic symptoms incompatible with disease, often post-stress",
          "Factitious: intentional symptoms for sick role (no external gain)",
          "Malingering: intentional symptoms for external gain (not psychiatric disorder)",
          "Dissociative amnesia: cannot recall traumatic personal information",
          "La belle indifference and Hoover sign help identify conversion"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Somatoform Disorders", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Chapter 13: Somatic Symptom Disorders", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "somatoform-dissociative-layer-2-mechanism",
        title: "Somatoform & Dissociative Disorders - Mechanism",
        estimatedMinutes: 30,
        summary: "Psychodynamic mechanisms (primary/secondary gain), neurobiological basis of conversion, somatization theories, and dissociation as defense mechanism.",
        contentMd: `# Somatoform & Dissociative Disorders - Mechanism

## Psychodynamic Theories

### Conversion Disorder Mechanism (Freud)
- **Primary gain**: Unconscious conflict converted to physical symptom (reduces anxiety)
- **Secondary gain**: External benefits from being ill (attention, avoiding responsibility)
- **Symbolism**: Symptom may symbolize the conflict (e.g., hand paralysis after desire to strike)

### Somatization Mechanism
- Alexithymia: difficulty identifying and expressing emotions
- Psychological distress expressed through bodily symptoms
- Cultural factors: somatic expression of distress common in Indian culture

## Neurobiological Basis

### Conversion Disorder Neuroimaging
- Decreased activity in motor cortex during paralysis (fMRI)
- Increased activity in emotion-processing areas (amygdala, anterior cingulate)
- Disrupted connectivity between intention and execution areas
- NOT voluntary suppression (different from malingering)

### Dissociation Neurobiological Model
- Disruption of normal integrative functions of consciousness
- Prefrontal cortex hypoactivation (reduced executive control)
- Amygdala hyperactivation (threat processing)
- Default mode network dysregulation

## Diagnostic Approach

### Clinical Signs for Conversion
| Sign | Test | Interpretation |
|------|------|---------------|
| Hoover sign | Test hip extension while flexing opposite hip | Involuntary extension = conversion |
| Tremor entrainment | Ask patient to tap rhythm with unaffected hand | Conversion tremor entrains to rhythm |
| Drift without pronation | Arm drift test | Organic: pronator drift; conversion: drift without pronation |
| Stocking-glove sensory | Sensory testing | Non-dermatomal distribution |

### Differentiating from Malingering
| Feature | Conversion | Malingering |
|---------|-----------|-------------|
| Awareness | Unconscious | Conscious |
| Motivation | Primary gain | External gain |
| Consistency | May be inconsistent | Often inconsistent |
| La belle indifference | Present | Absent (dramatic) |
| Response to suggestion | Improves | May not |
| Legal/financial context | Absent | Present |

## ICD-11 Classification
- **Bodily distress disorder**: Replaces multiple somatoform categories
- **Dissociative neurological symptom disorder**: Replaces conversion disorder
- Emphasizes positive diagnostic criteria over exclusion`,
        mnemonics: [
          { text: "Primary gain = internal (anxiety reduction); Secondary gain = external (attention)", explanation: "Two types of psychological benefit from symptoms" },
          { text: "Hoover = Hip extension test for conversion", explanation: "Positive Hoover sign: involuntary hip extension when flexing opposite leg" }
        ],
        keyPoints: [
          "Primary gain: unconscious anxiety reduction; secondary gain: external benefits",
          "Conversion neuroimaging: decreased motor cortex, increased emotional areas",
          "Hoover sign, tremor entrainment, drift without pronation help diagnose conversion",
          "Malingering is conscious and motivated by external gain",
          "Dissociation: disruption of integrative functions of consciousness",
          "ICD-11: bodily distress disorder replaces somatoform"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Somatoform Mechanisms", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Chapter 13", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "somatoform-dissociative-layer-3-clinical",
        title: "Somatoform & Dissociative Disorders - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical management: biopsychosocial approach, CBT, pharmacotherapy, managing the doctor-patient relationship, and India-specific cultural considerations.",
        contentMd: `# Somatoform & Dissociative Disorders - Clinical

## Management Principles

### Somatic Symptom Disorder
1. **Validate symptoms**: Accept the patient's suffering as real
2. **Single physician**: Designate one doctor to reduce doctor-shopping
3. **Regular appointments**: Scheduled visits, not symptom-driven
4. **Gradual activity increase**: Physical rehabilitation
5. **CBT**: Cognitive behavioral therapy (most effective)
6. **SSRIs**: If comorbid depression/anxiety (fluoxetine, sertraline)
7. **Avoid unnecessary investigations**: Reduces reinforcement

### Conversion Disorder
1. **Positive diagnosis**: Explain that tests show the nervous system is intact
2. **Physiotherapy**: Gradual functional rehabilitation
3. **Suggestion and reassurance**: Often effective acutely
4. **Address psychological stressor**: Identify and process trigger
5. **Abreaction**: Amytal interview in resistant cases (rarely used now)
6. **CBT**: Long-term prevention of recurrence

### Factitious Disorder
- Non-confrontational approach
- Engage psychiatric team early
- Address underlying emotional needs
- Munchausen by proxy: mandatory child protection referral

### Dissociative Disorders
- Safety and stabilization first
- Trauma-focused psychotherapy
- EMDR (Eye Movement Desensitization and Reprocessing)
- Hypnotherapy for dissociative amnesia (controversial)
- Benzodiazepines for acute dissociative episodes

## India-Specific Considerations
- **Possession trance**: Common presentation; may be dissociative
- **Mass hysteria**: Conversion symptoms in groups (schools, factories)
- **Somatization of distress**: Physical symptoms for emotional suffering is culturally normative
- **Stigma**: Mental health stigma leads to preference for medical explanation
- **Traditional healers**: Many patients first consult traditional healers

## Doctor-Patient Communication
- Avoid saying "it's all in your head"
- Explain mind-body connection using culturally appropriate language
- Use stress-diathesis model to explain vulnerability
- Emphasize that treatment is effective

> **Clinical Pearl**: In India, mass hysteria outbreaks in schools often present with conversion symptoms (fainting, tremors). Management involves separating affected individuals and providing calm reassurance rather than extensive medical workup.`,
        mnemonics: [
          { text: "SVRCCA for SSD management", explanation: "Single doctor, Validate, Regular visits, CBT, Curtail investigations, Activity increase" },
          { text: "Never say 'it is in your head' to somatizing patients", explanation: "Validation and mind-body explanation work better than dismissal" }
        ],
        keyPoints: [
          "Validate symptoms, designate single physician, scheduled regular visits",
          "CBT is most effective therapy for somatic symptom disorders",
          "SSRIs for comorbid depression/anxiety",
          "Conversion: positive diagnosis + physiotherapy + address stressor",
          "India: possession trance and mass hysteria are common presentations",
          "Munchausen by proxy: mandatory child protection referral"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Treatment", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Chapter 13", edition: "12th" }
        ]
      },
      {
        layer: 4,
        slug: "somatoform-dissociative-layer-4-exam-prep",
        title: "Somatoform & Dissociative Disorders - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield comparison tables, diagnostic criteria, clinical signs, and classification changes for NEXT/NEET PG.",
        contentMd: `# Somatoform & Dissociative - Exam High Yield

## Key Differentiators
| Condition | Symptom Origin | Motivation | Awareness |
|-----------|---------------|------------|-----------|
| SSD | Genuine distress | None (suffering) | Unaware |
| Conversion | Unconscious | Primary gain | Unaware |
| Factitious | Intentional | Sick role | Aware |
| Malingering | Intentional | External gain | Aware |

## Conversion Disorder Signs
| Sign | Finding |
|------|---------|
| La belle indifference | Unconcerned about severe symptom |
| Hoover sign | Involuntary hip extension |
| Stocking-glove | Non-dermatomal sensory loss |
| Tremor entrainment | Tremor frequency matches tapping |
| Astasia-abasia | Cannot stand/walk but normal in bed |

## Dissociative Disorders Comparison
| Type | Core Feature |
|------|-------------|
| Dissociative amnesia | Cannot recall traumatic information |
| Dissociative fugue | Sudden travel + identity amnesia |
| DID | Multiple personality states |
| Depersonalization | Detachment from self/surroundings |

## One-Liners
- SSD replaces somatization disorder in DSM-5
- ICD-11: bodily distress disorder replaces somatoform
- Conversion = functional neurologic symptom disorder (DSM-5)
- CBT is first-line therapy for all somatic symptom disorders
- Amytal interview: for abreaction in conversion (rarely used)
- Munchausen by proxy = factitious disorder imposed on another
- Mass hysteria = epidemic conversion disorder

## Previous Year Themes
- La belle indifference definition
- Difference between factitious and malingering
- Hoover sign interpretation
- ICD-10 vs DSM-5 terminology
- Treatment approach to somatization`,
        mnemonics: [
          { text: "Factitious = Feigned for Fun (sick role); Malingering = Money", explanation: "Quick differentiator for exam questions" },
          { text: "CBT = Best Treatment for somatoform", explanation: "Cognitive behavioral therapy is most evidence-based" }
        ],
        keyPoints: [
          "SSD: genuine distress, unaware; Factitious: intentional, sick role; Malingering: intentional, external gain",
          "La belle indifference and Hoover sign are classic conversion features",
          "CBT is first-line for all somatic symptom disorders",
          "ICD-11: bodily distress disorder; DSM-5: somatic symptom disorder",
          "Dissociative fugue = sudden travel + identity amnesia",
          "Munchausen by proxy = factitious imposed on another"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Review", edition: "3rd" }
        ]
      },
      {
        layer: 5,
        slug: "somatoform-dissociative-layer-5-active-recall",
        title: "Somatoform & Dissociative Disorders - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for somatoform classification, conversion signs, dissociative disorders, and management principles.",
        contentMd: `# Somatoform & Dissociative - Active Recall

**Q1:** What is somatic symptom disorder?
> Physical symptoms causing distress with excessive health anxiety for >6 months. Not explained by medical condition alone. Patient genuinely suffers

**Q2:** Difference between conversion, factitious, and malingering?
> Conversion: unconscious, primary gain. Factitious: conscious, sick role. Malingering: conscious, external gain (not a psychiatric diagnosis)

**Q3:** What is la belle indifference?
> Patient with conversion disorder shows surprising unconcern about severe neurologic symptoms

**Q4:** What is Hoover sign?
> Test for conversion: involuntary hip extension when testing opposite leg flexion. Positive = conversion (true weakness shows no involuntary extension)

**Q5:** What is dissociative fugue?
> Sudden unexpected travel away from home with inability to recall identity. Subtype of dissociative amnesia

**Q6:** First-line therapy for somatic symptom disorders?
> CBT (Cognitive Behavioral Therapy). Also: single physician, regular visits, validate symptoms

**Q7:** What drug class for comorbid depression in SSD?
> SSRIs (fluoxetine, sertraline)

**Q8:** What is Munchausen by proxy?
> Factitious disorder imposed on another - caregiver intentionally causes illness in child. Mandatory child protection referral

**Q9:** What replaces somatoform in ICD-11?
> Bodily distress disorder (ICD-11). Somatic symptom disorder (DSM-5)

**Q10:** What is mass hysteria?
> Epidemic conversion disorder: conversion symptoms spreading in a group (common in schools in India). Manage with separation and reassurance

**Q11:** What is primary gain vs secondary gain?
> Primary: unconscious anxiety reduction from symptom. Secondary: external benefits (attention, avoiding work)

**Q12:** What is abreaction/amytal interview?
> IV amobarbital to facilitate recall of repressed material in conversion/dissociative disorder. Rarely used now; replaced by CBT`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards covering somatoform and dissociative disorders",
          "Tests classification, diagnostic signs, and management",
          "Includes India-specific presentations (mass hysteria, possession trance)",
          "Reinforces differential diagnosis between conversion, factitious, malingering"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Somatoform", edition: "3rd" }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PS-MOD-04-TOP-02: Opioid & Other Substance Use
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "PS-MOD-04-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "opioid-substance-use-layer-1-foundation",
        title: "Opioid & Other Substance Use - Foundation",
        estimatedMinutes: 20,
        summary: "Substance use disorders involve compulsive use despite harm. Opioids (heroin, morphine) are the most common injecting drug, while cannabis and tobacco are most prevalent overall in India.",
        contentMd: `# Opioid & Other Substance Use - Foundation

## Key Definitions
- **Substance use disorder**: Maladaptive pattern of use leading to impairment/distress
- **Dependence**: Tolerance + withdrawal + compulsive use
- **Tolerance**: Need for increasing dose for same effect
- **Withdrawal**: Physical/psychological symptoms on cessation
- **Intoxication**: Reversible substance-specific syndrome

## Classification of Substances
| Category | Examples |
|----------|---------|
| Opioids | Heroin, morphine, codeine, fentanyl, tramadol |
| Sedatives | Benzodiazepines, barbiturates, alcohol |
| Stimulants | Cocaine, amphetamine, methamphetamine |
| Cannabis | Marijuana, hashish, bhang |
| Hallucinogens | LSD, psilocybin, PCP |
| Inhalants | Glue, paint thinner, nitrous oxide |
| Tobacco/Nicotine | Cigarettes, bidi, gutka, paan masala |

## Opioid Use Disorder

### Pharmacology
- Act on mu (analgesia, euphoria, respiratory depression), kappa, delta receptors
- Heroin (diacetylmorphine): most commonly abused injecting opioid
- Routes: IV injection (mainlining), smoking (chasing the dragon), snorting

### Epidemiology (India)
- Estimated 2.8 million opioid users in India
- Punjab, northeast India: highest prevalence
- IV drug use: major HIV/Hepatitis C transmission route
- Tramadol abuse: emerging problem

### Clinical Features of Opioid Intoxication
- Euphoria, drowsiness, slurred speech
- **Miosis** (pinpoint pupils) - pathognomonic
- Respiratory depression (most dangerous)
- Hypotension, bradycardia
- Constipation, urinary retention

### Opioid Withdrawal
- Onset: 8-12 hours after last dose (heroin)
- Peak: 48-72 hours
- Duration: 5-7 days (acute)
- **Features**: Lacrimation, rhinorrhea, yawning, piloerection (gooseflesh), mydriasis, diarrhea, muscle cramps, insomnia, anxiety

> **Clinical Pearl**: Opioid overdose causes the classic triad: miosis, respiratory depression, and coma. Naloxone is the lifesaving antidote.`,
        mnemonics: [
          { text: "Opioid triad: Miosis + Respiratory depression + Coma", explanation: "Three cardinal features of opioid overdose" },
          { text: "Withdrawal = opposite of intoxication: mydriasis, diarrhea, lacrimation", explanation: "Withdrawal features are sympathetic overactivity (opposite of opioid effects)" }
        ],
        keyPoints: [
          "Substance dependence = tolerance + withdrawal + compulsive use",
          "Opioids act on mu receptors (analgesia, euphoria, respiratory depression)",
          "Miosis (pinpoint pupils) is pathognomonic for opioid intoxication",
          "Respiratory depression is the lethal effect of opioid overdose",
          "Withdrawal: lacrimation, rhinorrhea, piloerection, mydriasis, diarrhea",
          "India: Punjab and NE India have highest opioid use"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Substance Use Disorders", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Chapter 20: Substance Use", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "opioid-substance-use-layer-2-mechanism",
        title: "Opioid & Other Substance Use - Mechanism",
        estimatedMinutes: 30,
        summary: "Neurobiological basis of addiction (reward pathway), opioid receptor pharmacology, mechanisms of tolerance and withdrawal, and other substance mechanisms.",
        contentMd: `# Opioid & Substance Use - Mechanism

## Reward Pathway (Mesolimbic Dopamine System)
- **Ventral Tegmental Area (VTA)** -> Nucleus Accumbens -> Prefrontal Cortex
- All drugs of abuse increase dopamine in nucleus accumbens
- Natural rewards (food, sex) also use this pathway but less intensely
- Chronic use: downregulation of D2 receptors -> anhedonia -> continued use

## Opioid Receptor Pharmacology
| Receptor | Effects | Agonists |
|----------|---------|----------|
| Mu (MOR) | Analgesia, euphoria, resp depression, miosis, constipation | Morphine, heroin, fentanyl |
| Kappa (KOR) | Analgesia, dysphoria, sedation | Pentazocine, butorphanol |
| Delta (DOR) | Analgesia, mood modulation | Enkephalins |

## Tolerance Mechanism
- Receptor desensitization (phosphorylation, internalization)
- Upregulation of cAMP pathway (compensatory)
- Cross-tolerance between opioids (basis for substitution therapy)

## Withdrawal Mechanism
- Abrupt removal of opioid -> unopposed compensatory mechanisms
- cAMP surge -> noradrenergic hyperactivity (locus coeruleus)
- Result: sympathetic overactivity (tachycardia, hypertension, sweating, diarrhea)
- Opposite of intoxication effects

## Other Substance Mechanisms
| Substance | Primary Mechanism | Key Effect |
|-----------|------------------|------------|
| Cannabis | CB1/CB2 agonist | Euphoria, appetite, impaired memory |
| Cocaine | Dopamine reuptake inhibitor | Euphoria, sympathetic activation |
| Amphetamine | Dopamine/NE release + reuptake block | Stimulation, anorexia |
| Benzodiazepines | GABA-A potentiation | Anxiolysis, sedation |
| Alcohol | GABA enhancement + NMDA inhibition | Sedation, disinhibition |
| Nicotine | Nicotinic ACh receptor agonist | Alertness, dependence |
| LSD | 5-HT2A agonist | Hallucinations, synesthesia |

## Cannabis Pharmacology
- THC (delta-9-tetrahydrocannabinol): psychoactive component
- CBD (cannabidiol): non-psychoactive, potential therapeutic
- CB1 receptors: brain (euphoria, memory impairment)
- CB2 receptors: immune system
- India: cannabis commonly used as bhang during festivals`,
        mnemonics: [
          { text: "VTA -> NAc -> PFC: Reward pathway for all addictions", explanation: "Ventral Tegmental Area to Nucleus Accumbens to Prefrontal Cortex" },
          { text: "Mu = Morphine = Most important opioid receptor", explanation: "Mu receptor mediates analgesia, euphoria, and respiratory depression" }
        ],
        keyPoints: [
          "All drugs of abuse increase dopamine in nucleus accumbens",
          "Mu receptor: analgesia, euphoria, respiratory depression, miosis",
          "Tolerance: receptor desensitization + compensatory cAMP upregulation",
          "Withdrawal: cAMP surge -> noradrenergic hyperactivity -> sympathetic storm",
          "Cocaine blocks dopamine reuptake; amphetamine releases dopamine",
          "Cannabis: THC acts on CB1 (brain) and CB2 (immune)"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Neurobiology of Addiction", edition: "3rd" },
          { book: "KD Tripathi Essentials of Pharmacology", chapter: "Chapter 35: Opioids", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "opioid-substance-use-layer-3-clinical",
        title: "Opioid & Other Substance Use - Clinical Application",
        estimatedMinutes: 20,
        summary: "Management of opioid overdose (naloxone), withdrawal treatment (buprenorphine, methadone), opioid substitution therapy, and harm reduction strategies in India.",
        contentMd: `# Opioid & Substance Use - Clinical Management

## Opioid Overdose Emergency
1. **ABC**: Secure airway, assist ventilation
2. **Naloxone** (opioid antagonist): 0.4-2 mg IV/IM/IN, repeat every 2-3 min
3. **Monitor**: Respiratory rate, SpO2, consciousness
4. **Observe**: At least 2 hours (short-acting naloxone may wear off before opioid)
5. **Supportive**: IV fluids, warming

## Opioid Withdrawal Management
| Drug | Mechanism | Use |
|------|-----------|-----|
| Buprenorphine | Partial mu agonist | Withdrawal + maintenance |
| Methadone | Full mu agonist | Withdrawal + maintenance |
| Clonidine | Alpha-2 agonist | Symptomatic relief (autonomic) |
| Loperamide | Peripheral mu agonist | Diarrhea |
| NSAIDs | Anti-inflammatory | Body aches |
| Benzodiazepines | GABA-A | Insomnia, anxiety |

## Opioid Substitution Therapy (OST)
- **Methadone**: Long-acting, once-daily dosing. Supervised dispensing
- **Buprenorphine/naloxone (Suboxone)**: Safer (ceiling on respiratory depression)
- **India**: NACO-supported OST centers in major cities
- Duration: Long-term (minimum 1-2 years, often indefinite)
- **Benefits**: Reduces IV drug use, reduces HIV/HCV transmission, improves social function

## Harm Reduction (India)
- Needle and syringe exchange programs (NSP)
- Opioid substitution therapy (OST)
- Condom distribution
- HIV/HCV testing and counseling
- NACO (National AIDS Control Organization) support

## Cannabis Use Disorder
- No specific pharmacotherapy with strong evidence
- CBT and motivational interviewing
- Address comorbid mental health conditions
- India: legal for bhang in many states; illegal for ganja

## Tobacco Cessation
- **Nicotine replacement** (patch, gum, lozenge)
- **Bupropion**: Dopamine/NE reuptake inhibitor
- **Varenicline**: Partial nicotinic agonist (most effective)
- Counseling (5As: Ask, Advise, Assess, Assist, Arrange)

## Benzodiazepine Dependence
- Gradual taper over weeks to months (NEVER abrupt cessation)
- Switch to long-acting (diazepam) for taper
- Abrupt withdrawal risk: seizures, delirium (can be fatal)

> **Clinical Pearl**: In India, injection drug use is a major driver of HIV and Hepatitis C in northeastern states and Punjab. Harm reduction programs are critical public health interventions.`,
        mnemonics: [
          { text: "Naloxone = Narcotic (opioid) antagonist for overdose", explanation: "Reverses respiratory depression; short-acting so monitor for re-sedation" },
          { text: "Buprenorphine = Partial agonist (safer ceiling)", explanation: "Partial mu agonist has ceiling effect on respiratory depression" }
        ],
        keyPoints: [
          "Naloxone: opioid antagonist for overdose (0.4-2mg IV, repeat q2-3min)",
          "Buprenorphine (partial agonist) and methadone (full agonist) for OST",
          "Harm reduction: needle exchange + OST + HIV testing",
          "BZD withdrawal: gradual taper (abrupt cessation can cause fatal seizures)",
          "Varenicline: most effective for tobacco cessation",
          "India: NACO supports OST centers for injection drug users"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Substance Use Treatment", edition: "3rd" },
          { book: "KD Tripathi Essentials of Pharmacology", chapter: "Chapter 35", edition: "8th" }
        ]
      },
      {
        layer: 4,
        slug: "opioid-substance-use-layer-4-exam-prep",
        title: "Opioid & Other Substance Use - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield intoxication/withdrawal comparison, antidotes, substitution therapies, and substance-specific features for NEXT/NEET PG.",
        contentMd: `# Opioid & Substance Use - Exam High Yield

## Intoxication vs Withdrawal Comparison
| Substance | Intoxication | Withdrawal |
|-----------|-------------|-----------|
| Opioid | Miosis, resp depression, euphoria | Mydriasis, lacrimation, diarrhea |
| Alcohol | Disinhibition, ataxia, nystagmus | Tremors, seizures, DT |
| BZD | Sedation, ataxia, amnesia | Seizures, anxiety, insomnia |
| Cannabis | Red eyes, appetite, impaired memory | Irritability, insomnia |
| Cocaine | Mydriasis, euphoria, tachycardia | Depression, fatigue, craving |

## Antidotes
| Substance | Antidote |
|-----------|---------|
| Opioid | Naloxone |
| Benzodiazepine | Flumazenil |
| Organophosphate | Atropine + pralidoxime |
| Alcohol (methanol) | Ethanol or fomepizole |
| Paracetamol | N-acetylcysteine |

## Substitution Therapies
| Substance | Substitute |
|-----------|-----------|
| Opioid | Methadone, buprenorphine |
| Nicotine | NRT, varenicline, bupropion |
| Alcohol | Disulfiram, naltrexone, acamprosate |

## One-Liners
- Miosis = opioid; Mydriasis = cocaine/amphetamine
- Opioid withdrawal is NOT life-threatening (unlike alcohol/BZD)
- Alcohol and BZD withdrawal CAN be fatal (seizures, DT)
- Wernicke encephalopathy: confusion + ataxia + ophthalmoplegia (thiamine deficiency)
- Delirium tremens: 48-72h after alcohol cessation
- Disulfiram: aldehyde dehydrogenase inhibitor (aversion therapy)
- Naltrexone: opioid antagonist for relapse prevention (alcohol and opioid)

## Previous Year Themes
- Opioid overdose triad
- Naloxone mechanism and dosing
- Methadone vs buprenorphine
- Alcohol withdrawal timeline
- Delirium tremens management
- Cannabis intoxication features`,
        mnemonics: [
          { text: "Miosis = Opioid; Mydriasis = Stimulant", explanation: "Pupil size differentiates opioid from stimulant intoxication" },
          { text: "Alcohol and BZD withdrawal = can KILL; Opioid withdrawal = miserable but safe", explanation: "Key safety distinction between withdrawal syndromes" }
        ],
        keyPoints: [
          "Opioid intoxication: miosis + respiratory depression + coma",
          "Opioid withdrawal: NOT fatal; alcohol/BZD withdrawal CAN be fatal",
          "Naloxone for opioid overdose; flumazenil for BZD",
          "Methadone and buprenorphine for opioid substitution",
          "Varenicline most effective for tobacco; disulfiram for alcohol aversion",
          "Wernicke = confusion + ataxia + ophthalmoplegia (treat with thiamine)"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Review", edition: "3rd" }
        ]
      },
      {
        layer: 5,
        slug: "opioid-substance-use-layer-5-active-recall",
        title: "Opioid & Other Substance Use - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for opioid pharmacology, overdose management, withdrawal, substitution therapy, and other substance use disorders.",
        contentMd: `# Opioid & Substance Use - Active Recall

**Q1:** Classic triad of opioid overdose?
> Miosis (pinpoint pupils) + Respiratory depression + Coma/sedation

**Q2:** Antidote for opioid overdose? Dose?
> Naloxone 0.4-2 mg IV/IM/IN. Repeat every 2-3 minutes. Short-acting: monitor for re-sedation

**Q3:** Features of opioid withdrawal?
> Lacrimation, rhinorrhea, yawning, piloerection, mydriasis, diarrhea, muscle cramps, insomnia

**Q4:** Is opioid withdrawal life-threatening?
> No. Very distressing but NOT fatal (unlike alcohol and benzodiazepine withdrawal)

**Q5:** Name two drugs for opioid substitution therapy.
> Methadone (full mu agonist, once-daily) and Buprenorphine (partial mu agonist, safer ceiling)

**Q6:** What is the reward pathway for addiction?
> VTA -> Nucleus Accumbens -> Prefrontal Cortex (mesolimbic dopamine system)

**Q7:** Mechanism of cocaine intoxication?
> Blocks dopamine reuptake -> increased synaptic dopamine -> euphoria, tachycardia, mydriasis

**Q8:** Which withdrawal syndromes can be fatal?
> Alcohol and benzodiazepine withdrawal (seizures, delirium tremens)

**Q9:** What is Wernicke encephalopathy?
> Confusion + ataxia + ophthalmoplegia. Due to thiamine (B1) deficiency in alcoholism. Emergency: IV thiamine

**Q10:** Most effective drug for tobacco cessation?
> Varenicline (partial nicotinic receptor agonist)

**Q11:** What are the components of harm reduction?
> Needle/syringe exchange, OST (methadone/buprenorphine), condom distribution, HIV/HCV testing

**Q12:** What is disulfiram? Mechanism?
> Aversion therapy for alcohol. Inhibits aldehyde dehydrogenase -> acetaldehyde accumulation -> nausea/flushing if alcohol consumed`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards covering opioid, alcohol, BZD, cannabis, and tobacco",
          "Tests overdose management, withdrawal features, and substitution therapy",
          "Includes harm reduction and India-specific drug use patterns",
          "Reinforces safety distinction: opioid withdrawal vs alcohol/BZD withdrawal"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Substance Use", edition: "3rd" }
        ]
      }
    ]
  }
];
