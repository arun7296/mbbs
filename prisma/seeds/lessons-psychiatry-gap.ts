import type { TopicLessons } from "./content-loader";

export const psychiatryGapLessons: TopicLessons[] = [
  // PS-MOD-01-TOP-04: Classification & Assessment in Psychiatry
  {
    topicCode: "PS-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "classification-assessment-layer-1-foundation",
        title: "Classification & Assessment - Foundation",
        estimatedMinutes: 25,
        summary: "ICD-11 and DSM-5 classification systems, diagnostic frameworks, psychiatric interview structure, mental status examination components.",
        contentMd: `# Classification & Assessment in Psychiatry - Foundation

## Classification Systems Overview

### ICD-11 (International Classification of Diseases, 11th Edition)
- **Adopted by India**: Official diagnostic system for Indian healthcare
- **Mental Health Chapter**: 6C Mental, behavioral and neurodevelopmental disorders
- **Structure**: Hierarchical from broad categories to specific conditions
- **Dimensional approach**: Recognizes symptom overlap across disorders
- **Key updates from ICD-10**:
  - Removed subtypes (e.g., paranoid schizophrenia no longer classified)
  - Introduced dimensional severity ratings
  - Expanded autism spectrum, ADHD specifications
  - Recognized complex PTSD as distinct category
- **Clinical codes**: F codes (F1X = substance, F2X = psychotic, F3X = mood, F4X = anxiety, F6X = personality, etc.)

### DSM-5 (Diagnostic and Statistical Manual, 5th Edition)
- **Used globally**: Reference standard for research, North American practice
- **Dimensional criteria**: Uses specifiers to capture disease variation
- **Structure**: 20 diagnostic categories (neurodevelopmental through other conditions)
- **Key differences from DSM-IV**:
  - Removed diagnostic hierarchies (can co-diagnose)
  - Integrated substance-related and addictive disorders
  - Introduced severity specifiers for many disorders
  - Changed diagnostic thresholds based on research
  - Major Neurocognitive Disorder replaces dementia terminology
- **Cultural formulation**: Systematic assessment of cultural factors affecting diagnosis/treatment

## Psychiatric Interview Structure

### Initial Engagement (5-10 minutes)
- **Setting**: Private, comfortable, safe space; minimal interruptions
- **Introduction**: Establish rapport, explain interview purpose, confidentiality boundaries
- **Chief complaint**: Open-ended question ("What brings you here today?")
- **Permission to take notes**: Explains documentation practice
- **Non-verbal communication**: Attentive posture, eye contact, non-judgmental demeanor

### History of Present Illness (HPI) - Core Interview (20-30 minutes)
- **Onset**: When did symptoms start? Acute vs insidious?
- **Course**: Constant, episodic, worsening, improving?
- **Severity**: Impact on functioning (work, relationships, self-care)?
- **Associated symptoms**: Full symptom cluster assessment
- **Precipitating factors**: Identifiable stressors, life events?
- **Previous episodes**: Prior psychiatric history, treatment response?
- **Substance/alcohol use**: Temporal relationship to symptoms?

### Past Psychiatric History
- **Prior diagnoses**: When diagnosed, by whom?
- **Previous hospitalizations**: Duration, outcomes, suicide attempts?
- **Medication trials**: What worked, side effects, adherence?
- **Psychosocial treatments**: Therapy types, duration, helpfulness?

### Past Medical History
- **Neurological conditions**: Seizures, TBI, movement disorders?
- **Endocrine/metabolic**: Thyroid disease, diabetes relevant to psychiatric symptoms?
- **Cardiovascular**: Baseline for antipsychotic metabolic monitoring?
- **Infectious history**: HIV, syphilis screening relevant?
- **Current medications**: Drug interactions with psychiatric meds?

### Family History
- **Psychiatric disorders**: Schizophrenia, bipolar, depression, suicide, alcoholism in relatives?
- **Genetic loading**: Multiple affected family members = higher risk offspring?
- **Treatment response patterns**: If relatives treated, what worked?
- **Age of onset in relatives**: Early-onset = more genetic loading?

### Social History
- **Birth/developmental**: Pregnancy complications, developmental milestones?
- **Childhood trauma**: Abuse, neglect, loss (major risk factor)?
- **Education**: School performance, learning disabilities?
- **Employment**: Job history, current job, disability status?
- **Relationships**: Marital status, quality of relationships, social support?
- **Living situation**: Stable housing, family support system?
- **Substance use**: Alcohol, tobacco, cannabis, other drugs frequency/quantity?
- **Legal issues**: Criminal history, arrests related to behavior?
- **Spiritual/cultural**: Religious beliefs, cultural practices affecting treatment?

### Review of Neurovegetative Functions (Critical for Mood Disorders)
- **Sleep**: Duration, quality, early morning awakening, nightmares?
- **Appetite**: Increased/decreased, weight changes?
- **Energy**: Fatigue, lethargy vs agitation?
- **Concentration**: Difficulty focusing, memory changes?
- **Libido**: Decreased interest in sex (depression marker)?
- **Psychomotor activity**: Agitation vs retardation?

## Mental Status Examination (MSE)

### Appearance & Behavior
- **Grooming/hygiene**: Immaculate (mania, OCD) vs poor (depression, psychosis)?
- **Clothing appropriateness**: Matching weather, social context?
- **Apparent age**: Looks stated age, or older/younger?
- **Body habitus**: Weight, muscle mass (relevant for metabolic monitoring)?
- **Notable features**: Tattoos, scars, visible disabilities?
- **Psychomotor activity**: Normal, agitated, retarded, stereotyped?
- **Eye contact**: Normal, avoidant (anxiety, autism), excessive (mania)?
- **Mannerisms**: Tics, tremor, catatonic features?

### Speech
- **Rate**: Normal, pressured (mania), slowed (depression/neuroleptics)?
- **Volume**: Normal, loud (mania), whispered (paranoia)?
- **Rhythm**: Normal fluency vs stuttering, cluttering?
- **Articulation**: Clear vs dysarthric (neurological)?
- **Spontaneity**: Forthcoming vs sparse (alogia)?

### Mood vs Affect
- **Mood**: Subjective internal emotional state (ask "How do you feel emotionally?")
  - Types: Euthymic (normal), depressed, elevated/expansive, irritable, anxious, empty, angry
- **Affect**: Objective observable emotional expression
  - Range: Full vs restricted/blunted
  - Congruence: Matches content of thought (incongruent = bizarre affect in schizophrenia)
  - Stability: Stable, labile (rapid shifts), reactive (responds to environment)

### Thought Process (How thinking organized)
- **Flow**: Coherent, logical → loose associations (schizophrenia) → word salad (severe disorganization) → tangential (never returns to topic)
- **Productivity**: Spontaneous, normal volume → poverty of speech (alogia) → circumstantial (excessive detail) → flight of ideas (rapid, rhyming)
- **Blocking**: Sudden stop mid-sentence; associated with thought insertion
- **Perseveration**: Repetition of same idea despite topic change (neurological sign)

### Thought Content
- **Delusions**: Fixed false beliefs (paranoid, grandiose, somatic, nihilistic, referential)
- **Hallucinations**: Perceptions without external stimulus (auditory most common; command hallucinations = high risk)
- **Obsessions**: Intrusive repetitive thoughts patient recognizes as irrational
- **Preoccupations**: Excessive focus on particular worry
- **Suicidal/homicidal ideation**: Presence, intent, plan, means?

### Cognition (Objective testing)
- **Orientation**: Person, place, time (disorientation suggests delirium/dementia)
- **Attention/concentration**: Digit span, months backward, serial 7s
- **Memory**: Immediate (repeat 3 words), short-term (recall 3 words after 5 min), long-term (autobiographical, remote)
- **Calculation**: Serial 7s, basic arithmetic
- **Abstraction**: Interpret proverbs ("People in glass houses..." = don't throw stones)
- **Fund of knowledge**: Questions appropriate to education level

### Insight & Judgment
- **Insight**: Does patient recognize illness? Understanding of symptoms as pathological?
  - Grades: Absent (denies illness), partial (recognizes something wrong), good (understands condition, accepts treatment)
- **Judgment**: Ability to make decisions, understand consequences?
  - Example: "If you smelled gas in a house, what would you do?" → logical response = intact

## Diagnostic Formulation

### Multiaxial Approach (DSM-5-Style)
1. **Primary psychiatric diagnosis**: Based on criteria from classification system
2. **Medical conditions relevant to psychiatry**: Thyroid disease, neurological, endocrine
3. **Substance use**: Active use, remission, dependence?
4. **Psychosocial/environmental stressors**: Major recent events (loss, job, housing)?
5. **Global assessment**: Functional impairment rating (0-100 scale)

### Differential Diagnosis Development
- **Rule out medical causes**: Labs (CBC, CMP, TSH, B12, RPR, HIV), neuroimaging if indicated
- **Rule out substance-induced**: Temporal relationship to drug use?
- **Rule out other psychiatric**: Apply criteria to rule out other diagnoses
- **Consider comorbidities**: Anxiety, substance use, personality factors often co-occur`,
        mnemonics: [
          { text: "ICD-11: India's official system; F codes (F2X=psychotic, F3X=mood, F4X=anxiety, F6X=personality)", explanation: "Classification structure" },
          { text: "HPI = Onset, Course, Severity, Associated symptoms, Precipitants, Previous episodes", explanation: "Interview components" },
          { text: "MSE = Appearance, Speech, Mood/Affect, Thought Process, Thought Content, Cognition, Insight/Judgment", explanation: "Examination structure" },
          { text: "Mood = subjective feeling; Affect = observable expression; Congruence = match between them", explanation: "Mood vs affect distinction" }
        ],
        keyPoints: [
          "ICD-11 adopted by India; removes diagnostic subtypes (e.g., paranoid schizophrenia), uses dimensional severity ratings",
          "Psychiatric interview has structured components: HPI, past psychiatric/medical/family/social history, neurovegetative review",
          "Mental status examination systematically assesses appearance, speech, mood/affect, thought process, thought content, cognition, insight",
          "Diagnostic formulation requires multiaxial assessment: primary diagnosis, medical conditions, substances, stressors, functioning level",
          "Differential diagnosis critical: rule out medical causes (labs, neuroimaging), substance-induced effects, other psychiatric conditions"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Psychiatric Assessment and Diagnosis", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Psychiatric Interview, History, and Mental Status Examination", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "classification-assessment-layer-2-mechanism",
        title: "Classification & Assessment - Mechanism",
        estimatedMinutes: 30,
        summary: "Psychometric assessment instruments, reliability and validity concepts, dimensional vs categorical diagnosis, assessment bias and cultural factors.",
        contentMd: `# Classification & Assessment - Mechanism

## Psychometric Assessment Instruments

### Screening Instruments (Brief, general population use)

#### Patient Health Questionnaire-9 (PHQ-9) - Depression
- **Items**: 9 questions on depressive symptoms (0-3 scale)
- **Scoring**: 0-4 minimal, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20+ severe
- **Cutoff**: Score ≥10 sensitivity/specificity 88% for major depression
- **Advantage**: Rapid (~2 min), free, widely validated in India
- **Limitation**: Not diagnostic alone; requires clinical judgment

#### Generalized Anxiety Disorder-7 (GAD-7) - Anxiety
- **Items**: 7 questions on anxiety symptoms (0-3 scale)
- **Scoring**: 0-4 minimal, 5-9 mild, 10-14 moderate, 15+ severe
- **Cutoff**: Score ≥10 good sensitivity/specificity for GAD
- **Use**: Primary care screening, symptom severity tracking
- **Strength**: Brief, validated across cultures including India

#### CAGE Questionnaire - Alcohol Use Disorder
- **Items**: 4 items (Cut down, Annoyed, Guilty, Eye-opener)
- **Scoring**: ≥2 positive = high risk for AUD
- **Advantage**: Very brief, memorable acronym
- **Limitation**: Lower sensitivity in women, non-White populations

#### Mini Cog - Cognitive Impairment Screening
- **Components**: 3-item recall test + clock drawing test
- **Duration**: ~3 minutes
- **Sensitivity**: ~80% for dementia when combined
- **Use**: Primary care, fast screen for cognitive decline

### Diagnostic Instruments (Establish diagnosis, structured interviews)

#### Structured Clinical Interview for DSM-5 (SCID-5)
- **Purpose**: Systematically assess DSM-5 diagnostic criteria
- **Format**: Clinician-administered (~45-90 min), semi-structured
- **Advantages**: High reliability, comprehensive, gold standard for research
- **Limitations**: Time-consuming, requires training
- **Use**: Research settings, complex diagnostic cases, second opinion

#### Mini International Neuropsychiatric Interview (M.I.N.I.)
- **Purpose**: Screen for major psychiatric disorders (11 modules)
- **Duration**: ~15 minutes
- **Coverage**: Psychotic, mood, anxiety, substance, ADHD, eating disorders
- **Advantage**: Fast, covers multiple disorders, validated internationally
- **Use**: Clinical intake, research screening, resource-limited settings (common in India)

#### Hamilton Depression Rating Scale (HAM-D)
- **Items**: 17-21 items rated 0-2 or 0-4
- **Scoring**: 0-7 normal, 8-16 mild, 17-23 moderate, ≥24 severe
- **Use**: Quantify depression severity, track treatment response
- **Limitation**: Observer-rated (requires training), some overlapping items with anxiety

#### Young Mania Rating Scale (YMRS)
- **Items**: 11 items rated 0-4, some weighted double
- **Scoring**: ≥16 suggests mania, ≥20 likely mania
- **Use**: Assess manic severity, monitor mood stabilizer response
- **Strength**: Specifically designed for mania (not just elevated mood)

#### Positive and Negative Syndrome Scale (PANSS) - Schizophrenia
- **Items**: 30 items (7 positive, 7 negative, 16 general)
- **Scoring**: 1-7 per item; positive/negative score 7-49, general 16-112
- **Use**: Comprehensive psychotic symptom assessment, treatment monitoring
- **Advantage**: Quantifies positive and negative separately
- **Limitation**: Observer-rated, requires training, time-consuming (~40 min)

### Neuropsychological Assessment Instruments (Cognitive function)

#### Montreal Cognitive Assessment (MoCA)
- **Items**: 30 points across domains (visuospatial, naming, memory, attention, language, abstraction, orientation)
- **Duration**: ~10 minutes
- **Scoring**: ≥26 normal, 18-25 mild cognitive impairment, <18 significant impairment
- **Advantage**: More sensitive than MMSE for mild cognitive impairment
- **Use**: Dementia screening, post-stroke assessment

#### Mini-Mental State Examination (MMSE)
- **Items**: 30 points (orientation ×2, registration, attention/calculation, recall, language, visuospatial)
- **Scoring**: ≥27 normal, 21-26 mild, 11-20 moderate, ≤10 severe impairment
- **Advantage**: Widely known, brief
- **Limitation**: Less sensitive for mild impairment, ceiling effects in highly educated

#### Wisconsin Card Sorting Test (WCST)
- **Purpose**: Executive function, cognitive flexibility, prefrontal cortex assessment
- **Task**: Match cards by rule (color, number, shape) that changes without warning
- **Measure**: Categories achieved, perseverative errors
- **Use**: Research, detailed neuropsych evaluation (not routine screening)
- **Findings**: Schizophrenia, ADHD show increased perseverative errors

## Reliability and Validity Concepts

### Reliability (Consistency)
- **Test-retest reliability**: Same result on repeat administration (temporal consistency)
  - Example: PHQ-9 scores stable over 1 week if no treatment
- **Inter-rater reliability**: Different raters get same score (observer consistency)
  - Example: Two psychiatrists administer PANSS, scores similar (kappa >0.80 good)
- **Internal consistency**: Different items measuring same construct correlate
  - Example: HAM-D depression items (guilt, sleep, appetite) should correlate (Cronbach's alpha >0.70 good)
- **Importance**: Unreliable instrument can't accurately measure anything

### Validity (Accuracy - does it measure what claims to measure?)
- **Content validity**: Does instrument cover domain fully?
  - Example: PHQ-9 includes sleep, energy, concentration (comprehensive depression coverage)
- **Construct validity**: Does instrument measure theoretical construct?
  - Example: PANSS positive scale measures psychotic symptoms (delusions, hallucinations correlate)
- **Criterion validity**:
  - **Concurrent**: Score correlates with current gold standard (SCID-5 diagnosis = criterion)
  - **Predictive**: Score predicts future outcomes (PHQ-9 ≥10 predicts treatment response better than lower scores)
- **Discriminant validity**: Separates disorder from non-disorder and from other disorders
  - Example: HAM-D separates depression from anxiety (though overlap exists)

### Sensitivity and Specificity
- **Sensitivity**: True positive rate - ability to detect disease when present
  - Formula: TP / (TP + FN)
  - Example: PHQ-9 ≥10 sensitivity 88% = detects 88% of actual depression cases
  - High sensitivity = fewer false negatives (don't miss sick patients)
- **Specificity**: True negative rate - ability to identify non-disease when absent
  - Formula: TN / (TN + FP)
  - Example: PHQ-9 ≥10 specificity 88% = correctly identifies 88% of non-depressed
  - High specificity = fewer false positives (don't over-diagnose)
- **Trade-off**: Raising cutoff increases specificity, decreases sensitivity
  - Clinical decision: Screening (need high sensitivity) vs confirmation (need high specificity)

## Dimensional vs Categorical Approaches

### Categorical (Traditional)
- **Concept**: Disorder present or absent; discrete categories
- **DSM-5 approach**: Still primarily categorical (you either meet criteria or don't)
- **Advantage**: Simplicity, clear treatment boundaries, reimbursement coding
- **Limitation**: Ignores symptom overlap; arbitrary cutoffs; misses subsyndromal cases

### Dimensional (ICD-11 direction)
- **Concept**: Symptoms exist on continuum; severity grades measured
- **ICD-11 approach**: Dimensional severity specifiers (mild, moderate, severe)
  - Example: Schizophrenia can be rated mild-moderate-severe based on symptom intensity
- **Advantage**: Captures symptom variation, recognizes overlap (e.g., depression + anxiety co-occur), better research validity
- **Limitation**: More complex, unclear treatment cutoffs, harder to implement in busy clinics

### Hybrid Approach (Current practice)
- **Diagnosis**: Use categorical criteria (meets disorder threshold)
- **Severity rating**: Add dimensional severity (mild/moderate/severe/remission)
- **Specifiers**: Include dimensional details (psychotic features present, with anxious distress)
- **Use**: Combines categorical clarity with dimensional nuance

## Cultural Competence in Assessment

### Culture-Bound Syndromes (Culturally specific presentations)
- **Koro** (Southeast Asia): Belief that genitals retracting into body; panic, somatic preoccupation
- **Windigo** (Canadian First Nations): Cannibalistic obsession, fear of becoming cannibal
- **Susto** (Latin America): Soul loss from fright, depression/anxiety symptoms following trauma
- **Hwa-byung** (Korea): Syndrome of suppressed anger (palpitations, insomnia, fatigue)
- **Relevance to India**:
  - "Dhat syndrome" - excessive semen loss belief, associated anxiety/depression
  - Ghost possession belief in some regions (can mimic psychotic symptoms but culturally normative)
  - Somatization more common than emotion expression in some communities

### Assessment Bias Sources
- **Language**: Interpreter use may lose nuance; concepts of mental health differ across languages
  - Example: "Depression" English term maps to different concept in Hindi/Tamil
- **Eye contact norms**: Varies by culture (respect in some, disrespect in others); interviewer must not misinterpret
- **Emotional expression**: Cultures differ in emotional display appropriateness (affect range interpretations vary)
- **Somatic vs psychological**: Some cultures express mental distress through body (chest pain, dizziness) rather than mood terms
- **Family involvement**: Varies culturally; individualistic vs collectivist approaches to mental health
- **Stigma**: Mental illness stigma higher in some communities; affects disclosure

### Culturally Informed Assessment
- **Explain assessment purpose**: Many patients unfamiliar with psychiatric questioning
- **Use interpreter if needed**: Professional interpreters (not family) to avoid communication errors
- **Assess cultural background**: Understanding cultural context of symptoms
- **Adapt instruments**: Some instruments validated in India-specific versions (PHQ-9 validated), others may need adaptation
- **Include family**: If patient consents and culturally appropriate, family input valuable for history/context
- **Avoid assumptions**: Don't assume Western psychiatric paradigm applies equally across cultures`,
        mnemonics: [
          { text: "PHQ-9 ≥10 = 88% sensitive/specific for depression; GAD-7 ≥10 = anxiety screening", explanation: "Common screening cutoffs" },
          { text: "SCID-5 gold standard diagnostic interview; M.I.N.I. fast screening (15 min); HAM-D/YMRS/PANSS severity rating", explanation: "Instrument types and uses" },
          { text: "Reliability = consistency (test-retest, inter-rater, internal); Validity = accuracy (content, construct, criterion)", explanation: "Psychometric properties" },
          { text: "Sensitivity = detect disease when present; Specificity = identify non-disease when absent; trade-off inverse", explanation: "Diagnostic accuracy" }
        ],
        keyPoints: [
          "Common screening instruments: PHQ-9 (depression), GAD-7 (anxiety), CAGE (alcohol), M.I.N.I. (multimodal fast screening)",
          "Diagnostic instruments establish diagnosis: SCID-5 (gold standard, comprehensive), M.I.N.I. (brief, 11 modules), domain-specific scales (HAM-D, YMRS, PANSS)",
          "Reliability (consistency) and validity (accuracy) essential for psychometric instruments; sensitivity/specificity vary by cutoff",
          "Dimensional assessment (severity ratings) increasingly important; ICD-11 uses mild/moderate/severe specifiers alongside categorical diagnosis",
          "Cultural competence critical: culture-bound syndromes, language barriers, eye contact norms, somatic vs psychological expression all affect assessment accuracy"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Psychometric Assessment in Psychiatry", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Psychiatric Rating Scales and Psychological Tests", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "classification-assessment-layer-3-clinical",
        title: "Classification & Assessment - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical application of classification systems, diagnostic accuracy improvement, assessment in special populations, integration into treatment planning.",
        contentMd: `# Classification & Assessment - Clinical

## Clinical Application of Classification Systems

### ICD-11 in Indian Practice
- **Official adoption**: ICMR, NIMHANS, All India Institute of Medical Sciences adopted ICD-11
- **Coding structure**:
  - 6C00.0 = Schizophrenia (core diagnosis)
  - 6C00.1 = Code indicates severity (mild/moderate/severe)
  - 6C00.Z = Post-primary use (when not primary diagnosis)
- **Advantages in India**:
  - Removes arbitrary subtypes (paranoid, disorganized) - improves reliability
  - Dimensional severity allows nuanced rating
  - Aligns with WHO international standard
  - Better for research, quality improvement tracking
- **Learning curve**: Indian psychiatrists transitioning from ICD-10 (used 20+ years)

### DSM-5 Specifiers (Commonly used alongside ICD-11)
- **Specifiers narrow diagnosis**: Provide clinical detail beyond category
  - Example: "Major Depressive Disorder, single episode, moderate severity, with anxious distress"
- **Common psychiatric specifiers**:
  - **Severity**: Mild/Moderate/Severe (based on symptom count and functional impact)
  - **Course**: Recurrent/single episode, remission status
  - **Features**: Psychotic, anxious, mixed (mood disorders), peripartum (postpartum depression)
  - **Duration**: Persistent (dysthymia)
- **Indian context adaptation**: Use severity specifiers from both ICD-11 and DSM-5 for comprehensive assessment

## Diagnostic Accuracy and Common Errors

### Common Diagnostic Errors in Psychiatry
1. **Anchoring bias**: First impression anchors subsequent assessment; miss alternative diagnoses
   - Example: "Looks depressed" → diagnose depression; miss mania with depressive cognitions
   - Correction: Systematic assessment of all criteria for multiple diagnoses

2. **Premature closure**: Stop investigating after finding one diagnosis
   - Example: Diagnose major depression; miss bipolar II (hypomanic episodes missed because ask only about depression)
   - Correction: Screen specifically for manic/hypomanic episodes in all mood disorders

3. **Availability heuristic**: Overdiagnose recently encountered conditions
   - Example: Just saw schizophrenia case; next patient with delusions labeled schizophrenia (miss delusional disorder)
   - Correction: Apply full diagnostic criteria, rule out medical causes

4. **Cultural misinterpretation**: Pathologize culturally normative beliefs
   - Example: Patient describes spirit possession (culturally accepted in some regions); misdiagnose as psychosis
   - Correction: Assess cultural context, whether distressing/disabling

5. **Spectrum disorder confusion**: Assume linear relationship (e.g., severe depression → bipolar)
   - Example: Severe depression assumed to have hidden bipolarity
   - Correction: Bipolarity defined by manic/hypomanic episodes, not depression severity

### Improving Diagnostic Accuracy
1. **Use structured interviews**: SCID-5, M.I.N.I. reduce bias vs unstructured (reduce errors ~40%)
2. **Rule out medical**: Labs (TSH, B12, syphilis, HIV), neuroimaging if indicated
3. **Screen systematically**: Ask all symptom domains, not just presenting complaint
4. **Assess longitudinally**: Course over time better reflects true diagnosis (not single snapshot)
5. **Document rationale**: Why chosen diagnosis; how ruled out alternatives (improves accountability)

## Assessment in Special Populations

### Pediatric Psychiatry (Ages 3-17)
- **Challenges**:
  - Can't self-report symptoms reliably (younger kids)
  - Developmental norms vary by age (hyperactivity normal at age 3, abnormal at 15)
  - Comorbidity high (ADHD + anxiety, conduct + mood common)
- **Assessment approach**:
  - **Parent interview**: Primary data source (observe behavior, history)
  - **School report**: Academic/social functioning, teacher observations crucial
  - **Child interview**: Age-appropriate direct assessment, drawing/play with young kids
  - **Standardized instruments**: Vanderbilt ADHD (teachers/parents), Child Behavior Checklist (CBCL)
- **Diagnostic modifications**:
  - ADHD: Symptoms must be present before age 12 (DSM-5), cross-setting (home + school)
  - Depression: Can present as irritability in kids rather than mood sadness
  - Anxiety: Somatic complaints (headache, abdominal pain) often precede anxiety diagnosis

### Geriatric Psychiatry (Age ≥60)
- **Challenges**:
  - Medical comorbidity (effects of medications, medical conditions on mood/cognition)
  - Cognitive impairment (confuse delirium, dementia, depression - "pseudodementia")
  - Sensory impairment (hearing/vision loss) affects interview quality
  - Reduced reporter reliability (memory bias)
- **Assessment approach**:
  - **Cognitive screening**: MoCA or MMSE essential (baseline cognition)
  - **Medical workup**: Thyroid, B12, medications review (common culprits: steroids, beta-blockers cause depression)
  - **Informant interview**: Family essential (patient often unreliable)
  - **Instruments**: Geriatric Depression Scale (short form preferred over HAM-D; 15 items)
- **Key distinction**: Depression (treatable) vs dementia (progressive); overlap frequent ("depression dementia syndrome" when depression impairs cognition reversibly)

### Pregnant/Postpartum Women
- **Special considerations**:
  - Medication safety (what's safe in pregnancy?)
  - Hormonal changes affect mood stability (risk of relapse in bipolar/depression with delivery)
  - Screening for postpartum depression/psychosis essential
- **Edinburgh Postnatal Depression Scale (EPDS)**: 10 items, ≥13 screens for postpartum depression
- **Postpartum psychosis risk**: 1-2/1,000 deliveries; bipolar disorder, prior postpartum psychosis = highest risk
- **Assessment**: Routine screening at 2, 6, 12 weeks postpartum standard care

### Substance Use Disorders (Comorbid with many psychiatric conditions)
- **Temporal relationship critical**:
  - Which came first? Primary mental illness → self-medication with substance? OR substance-induced?
  - Example: Patient uses alcohol to manage anxiety (anxiety primary) vs alcohol causes anxiety (substance primary)
- **Assessment tools**: CAGE (alcohol), cannabis use frequency, stimulant use history
- **Dual diagnosis**: ~50% of psychiatric patients have substance use comorbidity; require integrated treatment
- **Urine drug screen**: Assess current use (not diagnostic but useful corroboration)

### Intellectual Disability (IQ <70 with adaptive dysfunction)
- **Assessment challenges**:
  - Reduced ability to communicate symptoms (self-report unreliable)
  - Behavioral changes indicate psychiatric illness in non-verbal individuals
  - Psychiatric prevalence 3-4× higher in ID populations
- **Interview approach**:
  - **Caregiver primary source**: Parent/care staff provide behavioral history
  - **Adaptive behavior scales**: Vineland Adaptive Behavior Scales; assess functioning decline
  - **Observe behavior**: Aggression, self-injury, stereotypies may indicate psychiatric illness in non-verbal
- **Diagnostic adaptation**: Criteria modified for ID; behavioral equivalents used (e.g., aggression = irritability in depression)

## Integration into Treatment Planning

### From Diagnosis to Treatment
- **Diagnosis provides**: Prognosis information, treatment options, predictable course
- **Not diagnostic alone**: "Treat the person, not the diagnosis"
- **Individual variation**: Two patients with same diagnosis may need different treatments (personality, comorbidities, social factors differ)

### Stepped Care Framework
1. **Psychoeducation**: Explain diagnosis, prognosis, treatment options
2. **Psychosocial first**: For mild-moderate, therapy (CBT for anxiety/depression, psychoeducation for bipolar)
3. **Add medication**: If moderate-severe or inadequate psychosocial response
4. **Combine treatments**: Evidence shows psychotherapy + medication superior to either alone
5. **Optimize dose/duration**: Adequate trial (8 weeks for antidepressant, 4-6 weeks for antipsychotic before judging response)

### Monitoring and Re-assessment
- **Baseline assessment**: Document baseline severity (HAM-D, YMRS, PANSS scores)
- **Regular reassessment**: Monthly initially, then per clinical need
- **Outcome tracking**: Symptom reduction, functional improvement, side effect burden
- **Adjust treatment**: If inadequate response after adequate trial, increase dose, switch medication, add augmentation, or add psychotherapy
- **Relapse prevention**: Maintenance treatment duration varies (depression 6-12 months minimum after first episode; bipolar indefinite; schizophrenia lifelong usually)`,
        mnemonics: [
          { text: "ICD-11 code: 6C00.0 (schizophrenia) + severity code (mild/moderate/severe)", explanation: "ICD-11 structure in India" },
          { text: "DSM-5 specifiers narrow diagnosis: severity, course, features, duration", explanation: "Specifier usage" },
          { text: "Anchoring bias, premature closure, availability heuristic common errors; use structured interviews to reduce", explanation: "Diagnostic accuracy" },
          { text: "Pediatric: parent/school primary, developmental norms matter; Geriatric: medical workup, informant essential; Substance: temporal relationship first question", explanation: "Special population assessment" }
        ],
        keyPoints: [
          "ICD-11 official in India; removes diagnostic subtypes, uses dimensional severity (mild/moderate/severe) alongside categorical diagnosis",
          "Common diagnostic errors: anchoring bias, premature closure, availability heuristic, cultural misinterpretation; structured interviews reduce errors 40%",
          "Special populations require modified assessment: pediatric (parent/school primary), geriatric (medical workup, cognitive screening), pregnant (postpartum screening)",
          "Integration into treatment: stepped care (psychoeducation → psychosocial → medication → combination); monitor regularly and adjust",
          "Diagnosis provides prognosis/treatment options but doesn't determine treatment entirely; individual factors, comorbidities, preferences influence treatment selection"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Diagnosis and Formulation in Special Populations", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Psychiatric Diagnosis in Children, Adolescents, and Geriatric Patients", edition: "12th" }
        ]
      },
      {
        layer: 4,
        slug: "classification-assessment-layer-4-exam-prep",
        title: "Classification & Assessment - Exam Prep",
        estimatedMinutes: 25,
        summary: "ICD-11 vs DSM-5 comparison, diagnostic criteria quick reference, high-yield facts, common exam scenarios.",
        contentMd: `# Classification & Assessment - Exam Prep

## ICD-11 vs DSM-5 Quick Comparison

| Feature | ICD-11 | DSM-5 |
|---------|--------|-------|
| **Origin** | WHO international | American Psychiatric Association |
| **Use in India** | Official (adopted by ICMR, NIMHANS) | Reference (research, international comparison) |
| **Categorical vs Dimensional** | Primarily dimensional severity ratings | Primarily categorical criteria + specifiers |
| **Subtypes** | Removed (no paranoid/disorganized schizophrenia) | Some disorders retained subtypes |
| **Hierarchical rules** | Removed | Removed (allows comorbid diagnoses) |
| **Anxiety + Depression** | Recognize spectrum (single mixed disorder possible) | Separate diagnoses with specifiers |
| **Coding system** | Alphanumeric (6C00.0) | Numeric (295.90) |
| **ADHD classification** | Neurodevelopmental focus, emphasis on environmental factors | Neurodevelopmental, compatible with ICD-11 |
| **Autism spectrum** | "Autism spectrum disorder" unified approach | "Autism Spectrum Disorder" with severity levels |
| **PTSD classification** | Both single-episode and complex PTSD recognized | PTSD only (complex PTSD not in DSM-5-TR) |
| **Psychotic spectrum** | Dimensional severity for schizophrenia | Severity specifiers complement categorical diagnosis |

## Mental Status Examination Quick Reference

### Components (7-point assessment)
1. **Appearance/Behavior**: Grooming, dress, psychomotor activity
2. **Speech**: Rate, volume, organization, spontaneity
3. **Mood/Affect**: Internal feeling + observable expression
4. **Thought Process**: How organized (coherent, loose associations, word salad)
5. **Thought Content**: What thinking about (delusions, hallucinations, obsessions)
6. **Cognition**: Orientation, attention, memory, calculation, abstraction
7. **Insight/Judgment**: Aware of illness? Decision-making ability?

### Abnormal Findings Rapid Reference

**Appearance/Behavior**:
- Disheveled = depression, psychosis, dementia
- Immaculate = mania, OCD
- Catatonia = stupor/waxy flexibility (schizophrenia, medical conditions)

**Speech**:
- Pressured = mania, anxiety
- Slowed = depression, antipsychotics
- Tangential = doesn't return to topic (schizophrenia)
- Incoherent = severe disorganization (schizophrenia, delirium)

**Affect**:
- Flat/blunted = negative symptoms (schizophrenia), depression, antipsychotics
- Labile = mood rapidly shifts (mania, dementia, borderline)
- Incongruent = affect doesn't match content (schizophrenia; laughing about sad topic)

**Thought Process**:
- Loose associations = schizophrenia
- Circumstantial = excessive detail (normal tendency, OCD extreme)
- Flight of ideas = mania
- Blocking = thought interruption (psychosis, anxiety)

**Thought Content**:
- Delusions = schizophrenia, mood disorder with psychosis, delusional disorder
- Hallucinations = schizophrenia, substance use, medical conditions (infection, delirium)
- Suicidal ideation = depression, borderline, schizophrenia (10% lifetime suicide)

**Cognition**:
- Disorientation = delirium (acute), dementia (gradual)
- Memory impairment = dementia, depression ("pseudodementia" reversible)
- Concrete thinking = schizophrenia, ID, dementia (can't interpret proverbs)

## Diagnostic Criteria Quick Facts

### ICD-11 Major Disorders (Exam focus)

**Schizophrenia (6C00)**
- Prominent psychotic symptoms (delusions, hallucinations)
- Functional decline present
- Duration ≥1 month (≥2 weeks if extremely severe)
- No other cause (medical, substance)
- Severity: mild/moderate/severe

**Major Depressive Disorder (6A70)**
- ≥5 of 9 symptoms (depressed mood or loss of interest required) for ≥2 weeks
- Significant distress/dysfunction
- No mania/hypomania
- Severity rating: mild/moderate/severe
- Specifier: with anxious distress, somatic symptoms, peripartum (if pregnancy/postpartum)

**Manic Episode (6A60)**
- Abnormally elevated/expansive/irritable mood ≥1 week
- ≥3 associated symptoms (decreased need sleep, racing thoughts, flight of ideas, distractibility, increased activity, risky behavior, excessive talking)
- Functional impairment or hospitalization
- No primary medical/substance cause

**Generalized Anxiety Disorder (6B80)**
- Excessive worry most days ≥6 months (≥1 month in children)
- Difficult to control worry
- ≥1 of: muscle tension, restlessness, fatigue, concentration difficulty, irritability, sleep disturbance
- Significant distress/dysfunction

## Psychometric Instruments Quick Reference (Exam focus)

| Instrument | Use | Duration | Cutoff | Notes |
|------------|-----|----------|--------|-------|
| **PHQ-9** | Depression screening | 2 min | ≥10 | 88% sensitive/specific |
| **GAD-7** | Anxiety screening | 2 min | ≥10 | 80% sensitive/specific |
| **HAM-D** | Depression severity rating | 15 min | 0-7=normal, 24+=severe | Observer-rated |
| **YMRS** | Mania severity rating | 10 min | ≥20 likely mania | Weighted items |
| **PANSS** | Psychotic symptoms severity | 40 min | Positive 7-49 | Gold standard for schizophrenia |
| **SCID-5** | Diagnostic interview | 60-90 min | Dichotomous (yes/no criteria) | Gold standard research |
| **M.I.N.I.** | Fast diagnostic screen | 15 min | 11 modules yes/no | 80% sensitivity for major disorders |
| **MMSE** | Cognitive screening | 10 min | ≥27 normal | Widely used but less sensitive than MoCA |
| **MoCA** | Cognitive screening | 10 min | ≥26 normal | More sensitive for mild impairment |

## Common Exam Questions

**Q1: 28-year-old man presents with 2-month depressed mood, lost interest in hobbies, insomnia, fatigue, poor concentration. No prior manic episodes. ICD-11 diagnosis?**
A: **Major Depressive Disorder (6A70)** - meets criteria (≥5 symptoms including depressed mood for ≥2 weeks). Severity depends on symptom count/dysfunction.

**Q2: Which ICD-11 change most affects schizophrenia diagnosis?**
A: **Removal of subtypes** (paranoid, disorganized, catatonic). Diagnosis now relies on symptom duration/functional decline/severity, not subtype categorization. Improves reliability.

**Q3: Patient scores 12 on PHQ-9. What does this mean?**
A: **Mild-moderate depression** (10-14 = moderate category). Score suggests probable depression but not diagnostic; requires clinical interview to confirm, rule out other causes.

**Q4: What's difference between insight and judgment?**
A: **Insight** = recognizing own illness ("I have depression, need treatment"). **Judgment** = decision-making ability ("If I smell gas, I'd leave house and call emergency"). Can have one without other.

**Q5: 35-year-old woman with severe depression denies suicidal ideation but appears tearful, slowed. How assess risk?**
A: **Explore deeper**: Ask directly about passive death wishes ("Better off dead?"), intent vs desire (different meanings), access to means. Recent loss/isolation/substance use increase risk. Assess repeatedly (risk fluctuates).

**Q6: ICD-11 codes for schizophrenia severity?**
A: **6C00.0** (core code) + severity specifier: **.1** mild, **.2** moderate, **.3** severe. Not subtype (paranoid), but functional severity.

**Q7: GAD-7 score 8, PHQ-9 score 11. Patient reports "anxious and a bit sad." Next step?**
A: **Full diagnostic interview** to assess criteria for both GAD and MDD. Comorbid anxiety + depression common (~60% of depressed have anxiety). Treat both; treatment targets overlap (SSRI helps both).

**Q8: Which assessment tool best for treatment monitoring in schizophrenia?**
A: **PANSS** quantifies positive/negative symptoms separately (treatment may improve positive but not negative). Baseline PANSS → repeat monthly/every 6 weeks → guide antipsychotic dose adjustment.`,
        mnemonics: [
          { text: "ICD-11 in India (official); DSM-5 reference standard; ICD-11 dimensional severity, DSM-5 categorical+specifiers", explanation: "System comparison" },
          { text: "MSE 7 components: Appearance, Speech, Mood/Affect, Thought Process, Thought Content, Cognition, Insight/Judgment", explanation: "Quick reference" },
          { text: "PHQ-9 ≥10 = depression, GAD-7 ≥10 = anxiety; HAM-D/YMRS/PANSS = severity rating (not screening)", explanation: "Instrument usage" },
          { text: "ICD-11 schizophrenia: psychotic symptoms + dysfunction + ≥1m duration; no subtypes (removed)", explanation: "Diagnostic criteria" }
        ],
        keyPoints: [
          "ICD-11 official in India, removes subtypes from schizophrenia, uses dimensional severity ratings; DSM-5 remains reference for international comparison",
          "Mental status examination has 7 components; abnormal findings point toward specific disorders (pressured speech = mania, flat affect = schizophrenia/depression)",
          "Psychometric instruments: screening (PHQ-9, GAD-7, CAGE brief), diagnostic (SCID-5 gold standard, M.I.N.I. fast), severity rating (HAM-D, YMRS, PANSS)",
          "Insight (recognize illness) and judgment (decision-making) separate functions; assess both in mental status examination",
          "Common exam error: confuse insight with judgment, misinterpret affect abnormalities, not assess suicidality thoroughly"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Classification and Diagnostic Assessment: ICD-11 and DSM-5", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Psychiatric Evaluation and Diagnostic Procedures", edition: "12th" }
        ]
      },
      {
        layer: 5,
        slug: "classification-assessment-layer-5-active-recall",
        title: "Classification & Assessment - Active Recall",
        estimatedMinutes: 20,
        summary: "12 assessment case scenarios, diagnostic decision-making, differential diagnosis, interview/MSE interpretation challenges.",
        contentMd: `# Classification & Assessment - Active Recall

## Case 1: Distinguishing Depression from Medical Cause

**Case**: 45-year-old woman presents with 8-week depressed mood, fatigue, weight loss (5 kg), concentration difficulty. Started thyroid replacement 2 months ago for hypothyroidism. On levothyroxine 50 mcg.

**Q**: How determine if symptoms depression or inadequate thyroid replacement?

**A**: **TSH level essential first step**. Hypothyroidism causes depression-like symptoms (fatigue, mood, slowed cognition). If TSH elevated/suboptimal despite replacement = thyroid cause, increase levothyroxine, reassess 6-8 weeks. If TSH normal/low = likely primary depression, initiate antidepressant. **Learning**: Medical workup mandatory before psychiatric diagnosis; thyroid most common medical depression mimic.

## Case 2: Cognitive Impairment Differential (Delirium vs Dementia vs Depression)

**Case**: 72-year-old hospitalized post-hip surgery. Acute confusion, disorientation, fluctuating consciousness (worse at night), inattention. Daughter says "Mom's always been forgetful but this different/acute."

**Q**: What's diagnosis? Which assessment first?

**A**: **Delirium (acute medical condition)** - acute onset, fluctuating course, inattention (pathognomonic). Dementia gradual, stable; depression doesn't cause disorientation/inattention. **Immediate workup**: Labs (infection, electrolytes, medications, pain), neuroimaging if indicated (stroke, bleed). **MoCA/MMSE not primary** (cognitive tests non-specific in delirium). **Learning**: Delirium medical emergency; assume medical cause until proven otherwise; fluctuation and inattention key features.

## Case 3: Insight Variation in Same Disorder

**Case-A**: 32-year-old with schizophrenia on antipsychotic; voices resolved, but tells psychiatrist "I'm not ill, you're conspirators, I'm stopping medication." **Case-B**: 32-year-old with schizophrenia on antipsychotic; residual voices but tells psychiatrist "I know I'm sick, voices scary, will take meds." Same diagnosis, different insight.

**Q**: How document? Does insight affect management?

**A**: **Insight rated on scale**: Absent (Case-A: completely denies illness), partial (partially aware), good (aware, accepts treatment). **Same diagnosis (schizophrenia) but different insight levels**. Management differs: Case-A requires **long-acting injectable (LAI)** + family involvement + legal authority if non-compliant (hospitalization consideration). Case-B outpatient management, adherence better. **Learning**: Insight critical prognostic factor; same diagnosis, different outcomes based on insight level.

## Case 4: Panic Attack vs Anxiety Disorder

**Case**: 28-year-old woman experiences sudden 10-minute episode of palpitations, chest pain, shortness of breath, dizziness, fear "I'm having heart attack." Medical workup (EKG, troponin) normal. Episodes occur ~2/month unpredictably.

**Q**: Diagnosis? How differentiate from anxiety disorder?

**A**: **Panic attacks (brief, intense) vs Panic Disorder (recurrent, unexpected attacks + persistent worry about recurrence)**. This patient: attacks unpredictable, occurring ≥2/month, causing worry = **Panic Disorder (ICD-11 6B71)**. If attacks triggered (e.g., crowded places) = conditional panic, suggests agoraphobia. **Assessment**: Explore triggers, frequency, anticipatory anxiety, avoidance behaviors. **Learning**: Panic attack is symptom; disorder is syndrome with recurrence/worry/avoidance.

## Case 5: Symptom Overlap - Bipolar vs Major Depression

**Case**: 35-year-old man with 6-month depressed mood, anhedonia, guilt, suicide ideation. Family history: father has "manic-depressive illness." Psychiatrist about to start antidepressant.

**Q**: What critical question before antidepressant? Why?

**A**: **Screen for manic/hypomanic episodes explicitly**: "Any periods of excessive energy, decreased sleep need, racing thoughts, increased spending, risky behavior?" Family history bipolar increases his risk. If history of mania/hypomania = **Bipolar Disorder** (SSRI alone worsens mood cycling; need mood stabilizer first). If no manic history = **Major Depressive Disorder**. **Learning**: Bipolar often misdiagnosed as depression; SSRI monotherapy contraindicated. Always screen manic spectrum when depression presents, especially family history.

## Case 6: Cultural Interpretation Challenge

**Case**: 38-year-old woman from rural India reports 3-week period where she felt "spirits entered body," heard divine voices, saw religious visions. Fasted for self-purification, distributed possessions. Family interpreted as spiritual awakening. No prior psychiatric history, functional decline. Resolved after 1 week prayer/ritual.

**Q**: Is this psychosis? How differentiate from cultural/spiritual experience?

**A**: **Assess distress and dysfunction**: Patient NOT distressed, episode resolved with accepted cultural ritual, no functional decline. If meets psychotic criteria (false beliefs, hallucinations) but culturally normative and NOT causing distress/dysfunction = likely **not psychiatric disorder**. If delusions/hallucinations persistent, interfering with functioning, causing distress = psychotic disorder despite cultural context. **Learning**: Culture-bound experiences exist; don't pathologize culturally accepted phenomena. Key: distress + dysfunction + persistence differentiate pathology from experience.

## Case 7: Diagnostic Revision with New Information

**Case**: 42-year-old diagnosed "Depression" 2 years ago, tried 3 antidepressants without response. Psychiatrist notes: "Patient reports 1-week periods yearly of needing only 4 hours sleep, lots of energy, projects started but incomplete, risky financial decisions." No prior screening.

**A**: **Revise diagnosis to Bipolar II Disorder**. Hypomanic episodes (≥4 consecutive days decreased sleep need, elevated energy, increased activity, risky behavior) indicate bipolar, not major depression. SSRI monotherapy ineffective/contraindicated. **Change treatment**: Stop SSRI, start mood stabilizer (lithium, valproate). **Learning**: Diagnostic revision common in psychiatry; longer observation period reveals true diagnosis. Treatment-resistant depression often undiagnosed bipolar.

## Case 8: Assessment in Non-English Speaker

**Case**: 52-year-old Marathi-speaking man, migrant worker, minimal English. Referral for psychiatric evaluation. Family brings him, anxious during interview.

**Q**: How conduct assessment? What pitfalls avoid?

**A**: **Use professional interpreter** (not family, to avoid bias/shame). **Slow down, speak clearly**. Provide **interpreter brief** on terms (psychiatric symptoms often no direct translation). **Use visual aids** (rating scales with faces: ☹️→😐→☺️) if language barrier. **Assess cultural background**: illness beliefs, stigma in community (less disclosure likely). **Include family but separately if possible** to confirm history without patient feeling watched. **Avoid idioms, colloquialisms**. **Pitfalls**: Using family as interpreter (confidentiality breach, information filtered), assuming mental illness concepts understood (may interpret emotional distress as spiritual/physical problem). **Learning**: Language barrier significant assessment challenge; professional interpreter essential, take extra time.

## Case 9: Comorbidity Assessment

**Case**: 26-year-old woman reports 4-month depressed mood, anhedonia, but also 10-year history of "nervousness," avoidance of social situations, panic-like episodes in crowds. Current: depressed + anxious + avoidant.

**Q**: Single diagnosis or multiple? How treat?

**A**: **Likely multiple diagnoses**: Primary **Social Anxiety Disorder (10-year onset)** + secondary **Major Depressive Disorder (4-month onset)** + **Panic attacks** in social situations. Comorbidity rule: if anxiety predates depression, anxiety likely primary (depression secondary to chronic anxiety distress). **Treatment addresses both**: SSRI effective for both anxiety and depression; add CBT (social anxiety exposure gradually; behavioral activation for depression). **Learning**: Anxiety/depression frequently comorbid (60% of depressed have anxiety); don't treat depression alone if anxiety primary; address both diagnoses.

## Case 10: Rating Scale Interpretation

**Case**: 51-year-old with schizophrenia. Baseline PANSS score: Positive 28, Negative 24. After 6 weeks antipsychotic: Positive 18, Negative 26.

**Q**: Is patient improving? What's happening?

**A**: **Positive symptoms improving** (28→18, ~36% reduction = good response). **Negative symptoms worsening/unchanged** (24→26; possibly antipsychotic-induced avolition or treatment-emergent deficit). **Interpretation**: Positive symptoms (dopamine-responsive) improve with antipsychotic. Negative symptoms (not dopamine-responsive) either treatment-resistant or induced by medication. **Next step**: Monitor closely, consider lowering antipsychotic dose if negative symptoms worsen further (antipsychotics can cause negative symptoms), add psychosocial interventions (cognitive remediation, behavioral activation). **Learning**: Antipsychotics improve positive but may worsen negative; separate monitoring essential.

## Case 11: Substance-Induced vs Primary Psychosis Timeline

**Case-A**: 24-year-old uses methamphetamine nightly for 2 weeks, develops paranoid delusions, hallucinations. Stops use, symptoms resolve in 5 days. **Case-B**: 24-year-old uses methamphetamine nightly for 2 weeks, develops paranoid delusions. Stops use, but delusions persist 6 weeks.

**Q**: Differentiate diagnoses.

**A**: **Case-A: Substance-induced psychotic disorder** - symptoms temporal to drug use, resolve with abstinence (typical timeline 3-7 days for stimulant psychosis). **Case-B: Schizophrenia spectrum** (methamphetamine unmasked/precipitated underlying vulnerability but not sole cause). **Criterion: Symptom persistence >1 month after abstinence** suggests primary psychotic disorder, not purely substance-induced. **Learning**: Temporal relationship critical; longer persistence post-substance = primary disorder likely.

## Case 12: Diagnostic Uncertainty and Documentation

**Case**: 38-year-old with 3-week onset depressed mood, insomnia, but also increased energy, racing thoughts. Meets criteria for both depression (5/9 symptoms) and hypomania (3/3 symptoms). Family history bipolar. Unclear if mixed state or two separate conditions.

**Q**: How document uncertain diagnosis? How proceed?

**A**: **Document both possibilities**: "Differential diagnosis: Mixed features (depression + hypomanic features) vs Bipolar II with depressive episode vs Major Depressive Disorder with mixed features." **Avoid premature closure**. **Longitudinal data essential**: Track course over 2-4 weeks; mixed states/bipolar reveal typical pattern. **Treatment decision**: If concern bipolar (family history, mixed features present) = start mood stabilizer (lithium, valproate) + low-dose antipsychotic, avoid SSRI monotherapy. **Re-assess**: Document plan to reassess in 2 weeks. **Learning**: Uncertain diagnoses common; document reasoning, avoid guessing, use observation period to clarify, treat conservatively (assume higher acuity).`,
        mnemonics: [
          { text: "Delirium = acute, fluctuating, inattention (medical emergency); Dementia = gradual, stable; Depression = no disorientation/inattention", explanation: "Cognitive impairment differential" },
          { text: "Insight levels: Absent (denies illness), Partial (aware but reluctant), Good (recognizes and accepts); affects management/prognosis", explanation: "Insight rating" },
          { text: "Panic attack = symptom (sudden 10 min); Panic Disorder = recurrent attacks + worry + avoidance", explanation: "Symptom vs disorder" },
          { text: "Bipolar screen: decreased sleep need, racing thoughts, risky behavior periods? If yes → mood stabilizer first, avoid SSRI monotherapy", explanation: "Bipolar recognition" }
        ],
        keyPoints: [
          "Medical workup mandatory before psychiatric diagnosis; thyroid, infection, medications, metabolic causes common depression mimics",
          "Delirium (acute, fluctuating, inattent ion) vs dementia (gradual, stable) vs depression (sad mood, not disoriented); delirium medical emergency",
          "Insight (recognize illness) separate from judgment (decision-making); insight level affects management strategy and prognosis",
          "Comorbid anxiety + depression common (60%); identify primary disorder (earlier onset usually primary) to guide treatment",
          "Substance-induced psychosis resolved with abstinence; persistence >1 month post-abstinence suggests primary psychotic disorder; temporal relationship critical"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Case Scenarios in Diagnosis and Assessment", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Diagnostic Challenges and Clinical Decision-Making", edition: "12th" }
        ]
      }
    ]
  },

  // PS-MOD-04-TOP-03: Child & Adolescent Psychiatry
  {
    topicCode: "PS-MOD-04-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "child-adolescent-layer-1-foundation",
        title: "Child & Adolescent Psychiatry - Foundation",
        estimatedMinutes: 25,
        summary: "Neurodevelopmental overview, ADHD definition and epidemiology, autism spectrum disorder basics, childhood behavioral disorders.",
        contentMd: `# Child & Adolescent Psychiatry - Foundation

## Developmental Context

### Normal Development Milestones (Context for abnormality)
- **0-2 years**: Object permanence, attachment formation, language emergence
- **2-5 years**: Symbolic play, peer interaction beginning, impulse control developing
- **5-10 years**: School adjustment, peer relationships critical, internalizing/externalizing patterns emerge
- **10-18 years**: Identity formation, abstract thinking, peer relationships central, risky behavior increases

### Key Principle
- **Abnormality = deviation from developmental norms AND functional impairment**
- Example: Hyperactivity normal at age 3 (toddler), abnormal at age 12 (suggests ADHD)
- Example: Separation anxiety normal at age 3, pathological at age 10

## ADHD (Attention-Deficit/Hyperactivity Disorder)

### Definition & Prevalence (ICD-11: 6D81)
- **Core feature**: Persistent pattern of inattention and/or hyperactivity-impulsivity interfering with functioning/development
- **Prevalence**: 5-7% children globally; 3-6% India (possibly underdiagnosed)
- **Gender ratio**: 3:1 male predominance (girls more inattentive, less disruptive; diagnosis often missed)
- **Onset**: Symptoms present before age 12 (DSM-5, ICD-11)
- **Course**: 40-60% persist into adulthood; others remit or residual symptoms

### Inattention Symptoms (≥6 required in children, ≥5 in adults)
- Fails to pay close attention, makes careless mistakes
- Difficulty sustaining attention in tasks/activities
- Doesn't listen when spoken to directly
- Fails to follow through on instructions
- Difficulty organizing tasks/activities
- Avoids sustained mental effort (homework, schoolwork)
- Loses necessary items (pencil, keys)
- Easily distracted by irrelevant stimuli
- Forgetful in daily activities

### Hyperactivity-Impulsivity Symptoms (≥6 required in children, ≥5 in adults)
- Fidgets, taps hands/feet, squirms in seat
- Leaves seat when staying seated expected
- Runs/climbs inappropriately (subjective restlessness in adolescents/adults)
- Unable to engage quietly in activities
- "On the go" or acts "driven by motor"
- Talks excessively
- Blurts out answers before question complete
- Difficulty waiting turn
- Interrupts/intrudes on others

### Presentation Types (ICD-11, DSM-5)
- **Predominantly inattentive**: Inattention symptoms primary, hyperactivity minimal
- **Predominantly hyperactive-impulsive**: Hyperactivity symptoms primary, inattention minimal
- **Combined**: Both symptom clusters present (most common, 70%)

### Comorbidities (50-70% have comorbid disorder)
- Learning disorders (reading, math, writing difficulties)
- Oppositional Defiant Disorder (ODD; 50% of ADHD children)
- Conduct Disorder (20-30% adolescents)
- Anxiety Disorders (25%)
- Depression (adolescents especially)
- Sleep disorders
- Motor coordination disorder (dyspraxia)

## Autism Spectrum Disorder (ASD) - ICD-11: 6D80

### Core Features
- **Persistent difficulties in social communication**: Limited eye contact, difficulty understanding/expressing nonverbal cues, reduced social/emotional reciprocity
- **Restricted, repetitive patterns of behavior/interests**: Rigid routines, stereotyped movements (hand flapping, spinning), intense narrow interests (facts about trains, dinosaurs)
- **Onset**: Features manifest in early childhood (though may be masked/not recognized until later)
- **Functional impairment**: Clinically significant limitation in personal/family/social/occupational functioning

### Prevalence (ICD-11 Recognition)
- **1-2%** in developed countries, rising partly due to improved recognition
- **Male predominance**: 3-4:1 (girls often diagnosed later, different presentation; interest in animals, animals, detailed interests mask core features)
- **Associated features**: Intellectual disability (30%), seizures (20-25%), sleep problems (80%), sensory sensitivities (picky eating, clothing discomfort)

### Severity Spectrum (ICD-11 Dimensional)
- **Requiring support level 1**: Minimal support needed; can work/study independently with accommodations
- **Requiring support level 2**: Substantial support; need structured environment, difficulty with transitions, significant social/communication challenges
- **Requiring support level 3**: Very substantial support; often non-speaking or minimally speaking, significant self-injurious/destructive behavior, 24-hour supervision often needed

### Differential Diagnosis Challenge
- **ADHD vs ASD**: ADHD = difficulty sustaining attention + hyperactivity; ASD = social/communication deficits + restrictive interests. Can coexist (20-30% comorbidity).
- **Social anxiety vs ASD**: Social anxiety = fear/avoidance of social situations; ASD = lack of social interest/understanding (passive indifference vs active fear)
- **Language disorder vs ASD**: Pure language disorder = delayed speech/language only; ASD = social communication + nonverbal deficits + repetitive patterns

## Intellectual Disability (Developmental Disorder - IQ <70) - ICD-11: 6D70

### Definition
- **IQ <70** (≤2 standard deviations below mean, ~2%)
- **Adaptive dysfunction**: Significant limitations in daily living (self-care, communication, social/occupational functioning)
- **Onset during developmental period** (<18 years)

### Severity Spectrum
- **Mild** (IQ 50-69): ~85% of ID population; can acquire academic/life skills; often live independently with support
- **Moderate** (IQ 35-49): Significant deficits; need substantial ongoing support; often institutional/group living
- **Severe** (IQ 20-34): Very limited adaptive functioning; need 24-hour supervision
- **Profound** (IQ <20): Severe motor/speech impairment; need complete care

### Etiology (Important for treatment/prognosis)
- **Genetic**: Down syndrome, Fragile X, genetic syndromes (30%)
- **Prenatal**: Maternal infection (rubella, CMV), fetal alcohol syndrome, maternal malnutrition, teratogens
- **Perinatal**: Birth hypoxia, prematurity, kernicterus (high bilirubin)
- **Postnatal**: Severe infection (meningitis, encephalitis), head trauma, lack of stimulation, severe neglect
- **Idiopathic**: No clear cause (~25%)

## Conduct Disorder - ICD-11: 6D82

### Core Features
- **Persistent pattern** (≥12 months) of aggressive/destructive/deceitful/rule-breaking behavior
- **Violates others' rights**: Physical fighting, bullying, theft, arson, vandalism, property destruction, sexual aggression
- **Violates age-appropriate rules**: Truancy, running away, staying out late, substance use
- **Significant dysfunction**: School/social/occupational impairment
- **Onset**: Usually mid-childhood; worse prognosis if early onset (<10 years)

### Subtypes & Associated Features
- **Childhood-onset** (<10 years): More physical aggression, males predominant, worse prognosis
- **Adolescent-onset** (≥10 years): Less physical aggression, more delinquency, better prognosis
- **Callous-unemotional traits** (lack of remorse/empathy): Strong predictor of adult antisocial personality; requires specialized intervention
- **Comorbidities**: ADHD (60%), ODD (80%), learning disorders, substance use (adolescents), anxiety/depression

### Prognosis
- **Poor outcome predictors**: Early onset, callous-unemotional traits, parental antisocial personality, severe conduct violations
- **Good outcome predictors**: Late onset, anxiety/guilt (indicates conscience), good IQ, warm caregiver relationship
- **Longitudinal**: ~40% progress to Antisocial Personality Disorder if untreated`,
        mnemonics: [
          { text: "ADHD: Inattention (6) + Hyperactivity-Impulsivity (6); onset <12; ≥6 months; cross-setting (home + school)", explanation: "Diagnostic criteria" },
          { text: "ASD: Social/communication deficits + Restricted/repetitive patterns; severity spectrum 1-3; male 3-4:1", explanation: "Core features and prevalence" },
          { text: "Conduct Disorder: Aggression/destructive/deceitful behavior; violates rights; ≥12 months; early onset = worse prognosis", explanation: "Definition and outcome" },
          { text: "Developmental abnormality = deviation from norms + functional impairment; hyperactivity normal age 3, abnormal age 12", explanation: "Context principle" }
        ],
        keyPoints: [
          "ADHD: Persistent inattention/hyperactivity-impulsivity; affects 5-7% children; male 3:1; 40-60% continue into adulthood; comorbidities (learning, ODD, anxiety) frequent",
          "Autism Spectrum Disorder: Social/communication deficits + restricted interests; 1-2% prevalence; male 3-4:1; girls often diagnosed late; severity levels 1-3",
          "Intellectual Disability: IQ <70 + adaptive dysfunction; mild (85% of ID) to profound; etiology varies (genetic 30%, perinatal, postnatal, idiopathic 25%)",
          "Conduct Disorder: Persistent aggression/rule-breaking; early onset (<10y) = worse prognosis; callous-unemotional traits predict adult antisocial behavior",
          "Comorbidity critical: ADHD-Learning disorders, ADHD-ODD, Conduct-ADHD (60%), Autism-ADHD (20-30%) common; assess all domains"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Neurodevelopmental Disorders in Children and Adolescents", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Disorders Usually First Diagnosed in Infancy, Childhood, or Adolescence", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "child-adolescent-layer-2-mechanism",
        title: "Child & Adolescent Psychiatry - Mechanism",
        estimatedMinutes: 30,
        summary: "Neurobiology of ADHD, dopamine dysregulation, brain development abnormalities, genetic factors, environmental influences, neural circuitry.",
        contentMd: `# Child & Adolescent Psychiatry - Mechanism

## ADHD Neurobiology

### Dopamine & Norepinephrine Dysregulation
- **Prefrontal cortex (PFC)** hypofunction: Executive function, impulse control, attention regulation
  - Reduced dopamine signaling → poor attention, impulse control deficits
  - Reduced norepinephrine → reduced arousal, difficulty sustaining attention
- **Anterior cingulate cortex** (error detection): Reduced activity → poor performance monitoring, high error rates
- **Striatum** (reward/motivation): Hyposensitivity to reward → reduced motivation for cognitively demanding tasks
- **Catecholamine hypothesis**: Amphetamines (stimulants) increase dopamine/norepinephrine in PFC → improve attention, impulse control

### Brain Structural Abnormalities
- **Prefrontal cortex**: 3-5% reduced volume; delayed maturation (typically 10-15 years, ADHD delayed to late teen/early adult)
- **Anterior cingulate**: Reduced volume; affects error detection/feedback response
- **Striatum**: Smaller; abnormal reward processing
- **Corpus callosum**: Thinner; may affect interhemispheric communication
- **White matter**: Reduced integrity in frontal-striatal tracts; disrupted connectivity between PFC and reward regions
- **Functional finding**: Increased impulsivity correlates with delayed PFC maturation (structural imaging predicts behavior)

### Developmental Trajectory
- **Critical period**: Adolescence (ages 10-25) when PFC matures; delayed maturation in ADHD → prolonged impulsivity
- **Gray matter**: Increases to age ~12, then prunes; ADHD shows extended accumulation phase
- **White matter**: Continues myelinating into early adulthood; ADHD shows slower myelination
- **Outcome implication**: Late maturation may explain why ADHD improves into adulthood (PFC finally develops)

## Autism Spectrum Disorder Neurobiology

### Theory of Mind (ToM) Deficits
- **ToM** = ability to understand others have thoughts/beliefs different from own
- **ASD amygdala/anterior insula reduced activation**: During ToM tasks (understanding intentions, beliefs)
- **Clinical consequence**: Difficulty inferring what others think/feel; misinterpret social cues; appear indifferent (actually don't understand)

### Connectivity Abnormalities (Underconnectivity Theory)
- **Local overconnectivity**: Excessive connections within local circuits (basal ganglia, motor circuits) → repetitive behaviors, narrow interests
- **Long-range underconnectivity**: Reduced connections between distant brain regions (temporal-parietal, prefrontal-limbic) → poor social integration
- **Default Mode Network (DMN)**: Abnormal synchronization → poor self-other distinction, difficulty with social imagination
- **Implication**: Brain is "hyperfocused" on details, poor integration of big picture (explains both narrow interests and poor social coordination)

### Executive Function Deficits
- **Cognitive flexibility**: Difficulty switching mental sets; rigidity, resistance to change
- **Central coherence theory**: "Weak central coherence" - processes details/parts better than wholes
  - Example: May notice one word in scene, miss overall context
  - Advantage: Detail orientation can be strength (engineering, programming, music)
  - Disadvantage: Cannot see forest for trees; poor coordination of complex social interactions

### Sensory Processing
- **Sensory hypersensitivity**: Heightened perception of sounds (noise covers ears), lights (squinting), textures (avoid certain clothing), tastes (picky eating)
- **Sensory underresponsiveness**: Reduced perception of some stimuli (pain, temperature, personal space)
- **Neural basis**: Abnormal thalamic filtering; sensory cortex hypersensitive
- **Clinical significance**: Explains extreme responses ("overreaction" to loud noise actually normal perception for their neurobiology)

## Genetic and Environmental Factors

### ADHD Genetics
- **Heritability**: 60-80% (highly heritable; environment also important)
- **Inheritance**: Polygenic (multiple genes); not Mendelian
- **High-risk genes**:
  - **COMT** (Catechol-O-methyltransferase): Dopamine metabolism; Met allele = slower dopamine clearance (protective)
  - **SLC6A3** (Dopamine transporter gene): Affects dopamine recycling
  - **DRD4** (Dopamine D4 receptor): 7-repeat allele associated with ADHD
- **Environmental modifiers**: Prenatal (maternal stress, smoking, alcohol), perinatal (prematurity, low birthweight), postnatal (lead exposure, early deprivation)

### Autism Genetics
- **Heritability**: 70-90% (highly heritable)
- **High-risk genes** (implicate synaptic function):
  - **CNTNAP2** (Contactin-associated protein-like 2): Synaptic connectivity, especially temporal-frontal connections
  - **NRXN/NLGN**: Neurexin-neuroligin proteins critical for synapse formation
  - **CHD8**: Chromatin remodeling, gene regulation during development
  - **Copy number variations (CNVs)**: Deletions/duplications affecting gene dosage (16p11, 1q21, 22q11)
- **Environmental modifiers**: Advanced paternal age (especially >35 years), prenatal infection (maternal viral infection in 2nd trimester; interferon hypothesis), prenatal valproate exposure, prematurity

### Immune/Inflammatory Hypothesis
- **Maternal immune activation (MIA)**: Severe maternal infection during pregnancy (influenza) associated with increased autism/schizophrenia risk in offspring
- **Mechanism**: Elevated IL-6 (interleukin-6) in maternal blood crosses placenta → neural inflammation → disrupted brain development
- **Relevance**: Explains environmental risk factor without "toxin"; points to immune modulation as potential prevention/intervention

## Brain Development Differences in ASD

### Timing of Growth Abnormality
- **Early overgrowth hypothesis**: Accelerated brain/head growth in infancy (ages 0-3) in autism
  - Excessive gray matter accumulation
  - Followed by slowed growth (age 3-10)
  - Results in transient larger brain volume (typically normalizes by adulthood)
- **Consequence**: Disrupted synaptic pruning timing; pruning removes necessary connections

### Synaptic Dysfunction Theory
- **E/I imbalance** (Excitation/Inhibition imbalance):
  - Normal development: balanced excitatory (glutamate) and inhibitory (GABA) signaling
  - ASD: Reduced inhibition relative to excitation
  - Result: Brain circuits "runaway" without brakes → intense focused attention, stimming (self-stimulatory behavior provides sensory control)
- **Clinical correlation**: Seizures (25% autism) result from runaway excitation; anticonvulsants sometimes help

## Adolescent Brain Development Context

### Typical Adolescent Development (Ages 10-18)
- **Prefrontal cortex maturation**: Responsible for impulse control, risk assessment, abstract thinking, delayed until mid-20s
- **Limbic system activation**: Emotional intensity, reward-seeking increased during adolescence; creates risk-taking
- **Social brain changes**: Peer relationships become central; social rejection activates pain circuits (extreme salience)
- **Sleep changes**: Circadian rhythm phase shifts later (later bedtime, later wakefulness) = natural sleep deprivation if school early

### Adolescent Psychiatry Implications
- **Mood disorders emerge**: Depression/anxiety peak emergence ages 12-18; often triggered by social stressors (peer conflict, academic pressure)
- **Substance use vulnerability**: Developing PFC = poor judgment about consequences; reward system hypersensitive; gateway often gateway to addiction
- **Identity formation**: Intensive peer focus; social media creates new stressors (cyberbullying, social comparison)
- **Suicide risk**: Second leading cause of death ages 15-24; risk increases if mood disorder + substance use + access to means`,
        mnemonics: [
          { text: "ADHD dopamine: PFC hypofunction (attention/impulse), Striatum hyposensitivity (low motivation), Stimulants increase DA/NE", explanation: "Neurochemistry" },
          { text: "ASD connectivity: Local overconnectivity (repetitive patterns), Long-range underconnectivity (poor social); weak central coherence", explanation: "Brain connectivity pattern" },
          { text: "ADHD heritability 60-80%, Autism 70-90%; both polygenic (multiple genes); environmental modifiers (prenatal, lead, deprivation)", explanation: "Genetic factors" },
          { text: "Adolescent brain: PFC develops until mid-20s; limbic hyperactive; social rejection = pain; suicide risk elevated with mood + substance + means", explanation: "Adolescent neurobiology" }
        ],
        keyPoints: [
          "ADHD: Dopamine/norepinephrine hypofunction in prefrontal cortex; reduced impulse control, poor attention, low motivation; stimulants increase DA/NE",
          "Autism: Theory of Mind deficits (difficulty understanding others' thoughts), underconnectivity between brain regions, weak central coherence (details not integrated)",
          "Brain development: ADHD shows delayed prefrontal maturation (improves into adulthood); Autism shows early overgrowth then plateau",
          "Genetic contribution high (ADHD 60-80%, Autism 70-90%); polygenic inheritance; environmental modifiers (prenatal stress/infection, lead, deprivation)",
          "Adolescent brain continues developing until mid-20s; increased reward-sensitivity + immature judgment = vulnerability to substance use, risky behavior, suicide"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Neurobiology of Child and Adolescent Psychiatric Disorders", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Brain Development and Developmental Disorders", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "child-adolescent-layer-3-clinical",
        title: "Child & Adolescent Psychiatry - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical presentation and assessment, comorbidity management, treatment approaches (medication, psychosocial), adolescent mental health issues.",
        contentMd: `# Child & Adolescent Psychiatry - Clinical

## ADHD: Clinical Presentation and Assessment

### Clinical Presentation Across Settings
- **School presentation**: Inattentive to instruction, makes careless mistakes, difficulty organizing assignments, easily distracted, forgetful, often loses materials, gets in trouble following classroom rules
- **Home presentation**: Fidgety, talks excessively, interrupts family members, difficulty waiting turns, leaves tasks unfinished, procrastinates on homework
- **Social**: Difficulty sustaining friendships (impulsivity, poor turn-taking in games), acts younger than peers, poor conflict resolution
- **Note**: Symptoms cross settings (home AND school) required for diagnosis; may be mildly manifest in one setting initially

### Assessment Approach (Multimodal Essential)
1. **Parental interview**: Developmental history, family history ADHD/psychiatry, pregnancy/birth complications, academic/social functioning
2. **Teacher report**: Vanderbilt ADHD rating scale (from school); academic performance, classroom behavior, peer relationships
3. **Child interview**: Age-appropriate direct assessment; self-report of symptoms (older kids), drawing/observation (younger)
4. **Cognitive testing**: Rule out learning disorder (low IQ vs ADHD); evaluate if academic problems disproportionate to ability
5. **Eliminate medical causes**: Thyroid, hearing, vision screening; rule out seizures (EEG if suspected)
6. **Continuous performance test (CPT)**: Computerized test of sustained attention; abnormal in ADHD (high error rate, slow reaction time)

### Diagnostic Accuracy
- **False positives common**: Teacher may report ADHD because class size, curriculum mismatch, oppositional behavior mistaken for inattention
- **False negatives**: Inattentive type often missed (less disruptive, girls); highly intelligent children may compensate (unrecognized until demands exceed capacity)
- **Prognosis factors**: Comorbidities (ODD, LD, anxiety) worsen outcomes; warm family relationship, good IQ improve prognosis

## ADHD Treatment

### Medication (First-line if moderate-severe or inadequate behavioral response)
- **Stimulants** (first-line, 70% respond):
  - **Methylphenidate** (Ritalin, Concerta): Dopamine reuptake inhibitor; fast-acting (4 hours IR, 8-12 hours extended-release)
  - **Amphetamine** (Adderall): Stronger dopamine releaser; longer duration; 6 hours IR, 8-12 hours XR
  - **Starting low, titrating slowly**: Minimize side effects; dosing weight-based
  - **Side effects**: Appetite suppression, sleep disturbance, increased heart rate/BP, growth suppression (mostly returns if medication paused)
  - **Monitoring**: Baseline height/weight/BP/heart rate; repeat every 3-6 months; school performance, side effects
  - **Safety**: Screen for cardiac risk (sudden cardiac death rare but serious); baseline ECG if family history cardiac issues/syncope

- **Non-stimulants** (if stimulants ineffective/contraindicated):
  - **Atomoxetine** (selective norepinephrine reuptake inhibitor): Slower onset (2-4 weeks) but more gradual effect; good for anxiety comorbidity
  - **Guanfacine ER** (Intuniv): Alpha-2 agonist; helps impulsivity, fewer appetite effects than stimulants
  - **Efficacy**: ~60% respond to non-stimulants if stimulant failed

### Psychosocial Interventions (Always include, even with medication)
- **Parent training**: Behavior modification, positive reinforcement, clear structure/routines, consistency between home/school
- **School accommodations**: Extra time for tests, separate testing environment, frequent breaks, written instructions, behavioral contracts
- **Cognitive-behavioral therapy (CBT)**: Teach organizational skills, coping for frustration, social skills training
- **Coaching**: Help with planning, organization, time management (particularly adolescents)
- **Combined approach**: Medication + behavioral treatment superior to either alone (MTA study landmark)

## Autism Spectrum Disorder: Clinical and Treatment

### Clinical Presentation (Varies by Severity, Intellect)
- **Language development**: Wide spectrum from non-speaking to highly articulate (pedantic speech)
- **Social interaction**: Difficulty with eye contact, joint attention (showing objects, sharing interests), understanding others' perspectives
- **Play**: Functional/repetitive (lining toys) rather than pretend; intense focused interests (dinosaurs, trains, facts)
- **Restricted behaviors**: Hand flapping, spinning, lining objects, resistance to change, strict routines
- **Sensory sensitivities**: Extreme responses to sounds, lights, tastes, textures; may cover ears, avoid crowds
- **Strengths**: Detail orientation, pattern recognition, memory (especially facts), intense focus in areas of interest

### Assessment
- **Autism Diagnostic Observation Schedule (ADOS)**: Gold standard; clinician-administered; observes social communication/restricted behaviors
- **Autism Diagnostic Interview-Revised (ADI-R)**: Parental interview; detailed developmental/behavioral history
- **Cognitive testing**: IQ evaluation (40% have intellectual disability; 30% gifted; 30% average); separate IQ from adaptive functioning
- **Medical workup**: Genetic testing (if family history, dysmorphic features); EEG if seizures; metabolic screening if severe developmental regression

### Treatment (No cure; focus on strengths, manage challenges)
- **Educational interventions** (core):
  - **Applied Behavior Analysis (ABA)**: Intensive behavioral therapy, 20-40 hours/week (young children); improves adaptive skills, reduces problem behaviors
  - **Special education**: Individualized Education Plan (IEP), accommodations, sensory integration, speech/occupational therapy
  - **Inclusive settings**: Ideally mainstream with supports rather than segregated (improves social skills, reduces stigma)

- **Social skills training**: Explicit teaching of social rules, conversation skills, friendship formation (doesn't come naturally)

- **Medication**: No treatment for core autism; use only for comorbidities:
  - **Stimulants**: If ADHD comorbidity (30% have ADHD traits)
  - **Antipsychotics** (risperidone, aripiprazole approved): For severe irritability, self-injury, aggression (FDA-approved doses)
  - **SSRIs**: If anxiety/depression comorbidity (though evidence mixed)

- **Family support**: Psychoeducation, respite care, realistic expectations, acceptance of differences (neurodiversity perspective)

## Adolescent Mental Health Issues

### Depression in Adolescents
- **Unique features**: Can present as irritability rather than sadness; anhedonia more prominent (lose interest in friends, activities)
- **Gender difference**: Girls 2× higher prevalence; earlier onset puberty → earlier depression
- **Risk factors**: Social stress (peer rejection, cyberbullying), academic pressure, family conflict, prior anxiety, genetics
- **Suicide risk**: Leading cause of death ages 15-24; 90% have psychiatric illness; warning signs (giving away possessions, saying goodbye, talk of death)
- **Treatment**: Psychotherapy (CBT) first-line (especially mild-moderate); antidepressants (SSRIs) if moderate-severe; monitor closely for suicidal ideation (SSRI can activate in first 2 weeks)

### Anxiety in Adolescents
- **Common types**: Social anxiety (fear of judgment), generalized anxiety (worry about everything), panic attacks
- **Developmental context**: Some anxiety normal (performance, social); pathological when excessive, persistent, causes avoidance/impairment
- **Comorbidity**: 60% also have depression; ADHD in 25%
- **Treatment**: CBT (cognitive restructuring, exposure), psychoeducation, parental involvement; anxiolytics (SSRIs) if moderate-severe; avoid long-term benzodiazepines

### Substance Use in Adolescents
- **Gateway progression**: Alcohol/tobacco → Cannabis → stimulants/opioids common but not inevitable
- **Risk factors**: Early onset alcohol (age <13 = higher addiction risk), peer influence, genetic vulnerability, self-medication of anxiety/depression, conduct disorder
- **Screening**: CRAFFT (Car, Relax, Alone, Forget, Friends, Trouble) - 6 questions, 4+ = concerning
- **Consequences**: Impaired brain development (especially hippocampus, prefrontal cortex), academic decline, mental health worsening
- **Treatment**: Motivational interviewing, family involvement, cognitive therapy, peer support groups, residential treatment if severe

### Self-Harm and Suicidality
- **Non-suicidal self-injury (NSSI)**: Cutting, burning, hitting self; NOT intended to die; often indicates emotional dysregulation, trauma history
- **Suicidal behavior spectrum**: Ideation (thoughts) → plan (specific method) → attempt → completion
- **Risk assessment**: Ask directly ("Have you had thoughts of harming yourself? Plan? Access to means?"); risk factors (depression, bipolar, substance use, prior attempt, male, access to means, social isolation)
- **Management**: Safety planning (remove means, identify supports), psychotherapy (especially DBT for NSSI/suicidality), medication if underlying depression/bipolar, hospitalization if imminent risk
- **Protective factors**: Strong family relationships, cultural/religious beliefs against suicide, good coping skills, mental health engagement`,
        mnemonics: [
          { text: "ADHD assessment multimodal: parent + teacher + child + cognitive testing + medical workup + CPT; symptoms cross home/school", explanation: "Assessment components" },
          { text: "ADHD treatment: stimulants 70% effective; side effects (appetite, sleep, growth); monitor height/weight/BP; behavioral intervention always", explanation: "Management approach" },
          { text: "ASD: Social/communication + restricted behaviors; ADOS/ADI-R gold standard; ABA early intensive; IEP; comorbid ADHD 30%", explanation: "Autism assessment and treatment" },
          { text: "Adolescent depression: irritability more than sadness; suicide leading cause death 15-24; SSRI + therapy; monitor for activation", explanation: "Adolescent depression" }
        ],
        keyPoints: [
          "ADHD assessment requires multimodal input (parent, teacher, child, cognitive testing, medical workup) and cross-setting confirmation; easily missed in inattentive type and high-IQ children",
          "ADHD treatment: stimulants first-line (70% effective) combined with behavioral intervention; non-stimulants if stimulant-failed or contraindicated; monitor growth/cardiovascular",
          "Autism: No cure; treatment focuses on strengths and skill-building (ABA, special education, social skills); medications only for comorbidities (ADHD, irritability); family support critical",
          "Adolescent mental health: depression often irritable (not sad); anxiety developmental but pathological when causes impairment; substance use gateway progression common",
          "Suicide assessment critical in adolescents (leading cause of death ages 15-24); direct questioning, risk/protective factors, safety planning, hospitalization if imminent risk"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Assessment and Treatment of Child and Adolescent Disorders", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Child and Adolescent Psychiatric Disorders: Clinical Presentation and Treatment", edition: "12th" }
        ]
      },
      {
        layer: 4,
        slug: "child-adolescent-layer-4-exam-prep",
        title: "Child & Adolescent Psychiatry - Exam Prep",
        estimatedMinutes: 25,
        summary: "Diagnostic criteria comparison, treatment algorithms, high-yield facts, common exam questions, ICD-11 codes.",
        contentMd: `# Child & Adolescent Psychiatry - Exam Prep

## Diagnostic Criteria Quick Reference

### ADHD (ICD-11: 6D81, DSM-5)
- **Inattention**: ≥6 symptoms (children), ≥5 (adults); fidgets, fails to pay attention, doesn't listen, doesn't follow through, disorganized, avoids sustained effort, loses things, distractible, forgetful
- **Hyperactivity-Impulsivity**: ≥6 symptoms (children), ≥5 (adults); fidgets, leaves seat, runs/climbs, can't engage quietly, always on-go, talks excessively, blurts answers, difficulty waiting, interrupts
- **Duration**: ≥6 months
- **Onset**: <12 years
- **Cross-setting**: Present in ≥2 settings (usually home + school)
- **Functional impairment**: Academic, social, occupational dysfunction
- **Not better explained by**: Other mental disorder, neurodevelopmental, medical condition

### Autism Spectrum Disorder (ICD-11: 6D80, DSM-5)
- **Social-communication deficits**: Reduced eye contact, limited nonverbal communication, difficulty understanding others' perspectives, reduced social reciprocity
- **Restricted/repetitive behaviors**: Stereotyped movements, rigid routines, intense narrow interests, sensory sensitivities
- **Onset**: Early childhood (though may manifest later with demands increase)
- **Functional impairment**: Clinically significant limitation in personal/social/occupational functioning
- **Severity specifiers**: Level 1 (requiring support), Level 2 (substantial support), Level 3 (very substantial support)
- **Note**: No longer separate from Asperger's (previously distinguished by IQ/language); now integrated as autism spectrum

### Intellectual Disability (ICD-11: 6D70)
- **IQ**: <70 (≤2 standard deviations below mean)
- **Adaptive dysfunction**: Significant limitations in daily living (self-care, social, communication, academic, occupational)
- **Onset**: During developmental period (<18 years)
- **Severity**: Mild (IQ 50-69), Moderate (35-49), Severe (20-34), Profound (<20)

### Conduct Disorder (ICD-11: 6D82)
- **Pattern of violating others' rights**:
  - **Aggression**: Physical fighting, bullying, armed weapon use, deliberate fire-setting with danger, sexual aggression
  - **Destructive behavior**: Deliberate property destruction, vandalism
  - **Deceitfulness/theft**: Lying, breaking into property, shoplifting, forgery
- **Pattern of rule violations**: Truancy, running away, staying out late, substance use
- **Duration**: ≥12 months
- **Functional impairment**: School/social/occupational decline
- **Onset types**: Childhood-onset (<10y, worse prognosis) vs Adolescent-onset (≥10y)

## High-Yield Facts Table

| Disorder | Prevalence | Gender | Onset | Prognosis | Key Treatment |
|----------|-----------|--------|-------|-----------|---------------|
| ADHD | 5-7% | 3M:1F | <12y | 40-60% continue | Stimulants + behavioral |
| Autism | 1-2% | 3-4M:1F | Early childhood | Lifelong; variable | Early ABA, IEP |
| ID-Mild | ~2% | Equal | <18y | Independent living possible | Special education |
| Conduct | 2-4% | 4M:1F | <10y childhood | Worse if early onset | Parent training, residential |

## Treatment Comparison

### ADHD Medications
| Medication | Class | Onset | Duration | Side Effects | Monitoring |
|-----------|-------|-------|----------|-------------|-----------|
| Methylphenidate | Stimulant | <1h IR | 4h IR, 12h ER | Appetite, sleep, HR/BP ↑ | Height/weight, BP, HR, Q3mo |
| Amphetamine | Stimulant | <1h | 4-6h IR, 12h XR | Similar to methylphenidate | Same as above |
| Atomoxetine | NRI | 1-2w | 12-16h | Nausea, mood swings, rare liver | LFTs baseline |
| Guanfacine ER | α2 agonist | 1-3w | 24h | Sedation, hypotension | BP monitoring |

### ADHD Behavioral Interventions
- **Parent training**: Positive reinforcement, clear expectations, consistent consequences, behavioral contracts
- **School accommodations**: Extended time, separate testing, frequent breaks, written instructions
- **Skills training**: Organization, time management, frustration tolerance, social skills
- **Coaching**: Help planning complex tasks (especially adolescents)

### Autism Interventions
- **ABA** (Applied Behavior Analysis): 20-40 h/week; evidence-based; intensive; improves adaptive skills
- **Special education**: IEP, sensory integration, speech/OT therapy, inclusive mainstreaming when possible
- **Social skills**: Explicit teaching (doesn't develop naturally); groups, peer mentors, role-playing
- **Medication**: None for core autism; address comorbidities (ADHD, anxiety, irritability)

## Common Exam Questions

**Q1: 7-year-old boy reported by teacher as "very fidgety, can't sit still, interrupts constantly, loses assignments, forgetful." Mother says "My husband was ADHD; son same way." What's next?**
A: **Screen for ADHD**: Administer **Vanderbilt ADHD parent/teacher rating** (confirms inattention + hyperactivity cross-settings). If confirmed, rule out medical causes (thyroid, hearing, seizures), assess for learning disorder/comorbidities (ODD, anxiety), then initiate treatment (behavioral first; stimulant if moderate-severe or inadequate behavioral response).

**Q2: 4-year-old never makes eye contact, lines up toys instead of playing, says few words, distressed by changes in routine. What's diagnosis?**
A: **Autism Spectrum Disorder** - social/communication deficits (poor eye contact, limited words) + restricted/repetitive behaviors (lining toys, resistance to change). Onset early childhood. **Next: ADOS/ADI-R, cognitive testing, medical workup, IEP planning.**

**Q3: Which finding most predicts poor prognosis in Conduct Disorder?**
A: **Early onset (before age 10)** + **callous-unemotional traits** (lack of remorse/empathy). Early onset = more generalized aggression; CU traits = poor treatment response, predict adult antisocial personality.

**Q4: 15-year-old girl with depressed mood × 3 weeks, anhedonia, sleep ↓, concentration difficulty, irritability. Suicidal ideation but no plan. You prescribe SSRI. Important monitoring?**
A: **Monitor closely for increased suicidality in first 2 weeks** (paradoxical "activation" can occur). Baseline suicidal risk, follow-up in 1 week, teach family warning signs. Regular mood/behavior assessment. Combined with CBT (superior to SSRI alone).

**Q5: 6-year-old with IQ 55, needs help with dressing/toileting, attends special education. Diagnosis?**
A: **Intellectual Disability, Moderate severity** (IQ 35-49, though this IQ 55 = Mild). Requires adaptive functioning assessment (self-care limitations confirm). Etiology workup (genetic, perinatal causes?). Special education, vocational training, family support essential.

**Q6: 13-year-old started methylphenidate. After 2 weeks: decreased appetite, difficulty falling asleep, heart rate elevated. Management?**
A: **Expected stimulant side effects**. Options: (1) Reduce dose, (2) Give dose earlier in day (sleep issue), (3) Ensure snack before dinner, (4) Add sleep hygiene, (5) Consider extended-release (fewer peaks). Monitor height/weight/BP regularly. If side effects persist after adjustments → consider non-stimulant (atomoxetine, guanfacine).

**Q7: ICD-11 code for autism?**
A: **6D80** (Autism Spectrum Disorder). Schizophrenia 6C00, ADHD 6D81, ID 6D70.

**Q8: What percentage of ADHD children diagnosed in adulthood?**
A: **~80% of adults with ADHD undiagnosed in childhood** - particularly inattentive type and girls (less disruptive, compensate with intelligence until academic/occupational demands exceed capacity). Recognize adult ADHD presentations.`,
        mnemonics: [
          { text: "ADHD ≥6/9 inattention + ≥6/9 hyperactivity; <12y onset; 6m duration; cross-setting (home+school)", explanation: "Diagnostic criteria" },
          { text: "Autism: Social deficit + restricted behavior; severity 1-3; onset early childhood; comorbid ADHD 30%; ABA core treatment", explanation: "Key features" },
          { text: "ID diagnosis: IQ <70 + adaptive dysfunction; mild 50-69 (independent possible), moderate 35-49 (need support), severe/profound", explanation: "Severity levels" },
          { text: "Conduct early-onset + callous-unemotional = worst prognosis; adolescent-onset better; guilt/anxiety = better outcome", explanation: "Prognostic factors" }
        ],
        keyPoints: [
          "ADHD: ≥6 inattention + ≥6 hyperactivity (children), <12 onset, 6 months, cross-setting; stimulants 70% effective; behavioral intervention essential",
          "Autism: Social/communication + restricted behavior; ADOS/ADI-R diagnostic; ABA early intensive, IEP, special education; core treatment autism spectrum unified",
          "Intellectual Disability: IQ <70 + adaptive dysfunction; severity mild-moderate-severe-profound; etiology varies; special education/vocational support",
          "Conduct Disorder: Early onset (<10) worse prognosis; callous-unemotional traits predict antisocial personality; parent training/residential treatment",
          "Adolescent mood: Depression often irritable, suicide leading cause of death ages 15-24; SSRI + therapy, monitor activation; anxiety developmental but impairing"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Child and Adolescent Psychiatry: Diagnostic Criteria and Treatment", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Diagnostic Criteria for Child and Adolescent Disorders", edition: "12th" }
        ]
      },
      {
        layer: 5,
        slug: "child-adolescent-layer-5-active-recall",
        title: "Child & Adolescent Psychiatry - Active Recall",
        estimatedMinutes: 20,
        summary: "12 clinical case scenarios, diagnostic decision-making, treatment planning challenges, comorbidity management in youth.",
        contentMd: `# Child & Adolescent Psychiatry - Active Recall

## Case 1: Girls Underdiagnosis in ADHD

**Case**: 12-year-old girl brought by parents: "Gets good grades, but forgets homework, disorganized, loses things, daydreams in class." Pediatrician said "Just being a girl, she's fine." History: Older brother diagnosed ADHD at age 8.

**Q**: Why often missed in girls? What's next?

**A**: **Girls with ADHD often inattentive type (less disruptive), hence less noticed**. Good grades mask difficulties until demands exceed ability (later grades). Brother's diagnosis = genetic loading. **Screen formally**: Vanderbilt parent/teacher rating; if positive despite good grades, diagnose ADHD. **Learning**: ADHD girls underdiagnosed; onset diagnosis often adolescence when academic/organizational demands exceed compensatory ability.

## Case 2: ADHD-Conduct Disorder Comorbidity

**Case**: 9-year-old boy with known ADHD (on methylphenidate), now aggressive toward peers, deliberately destroyed classroom materials, suspended twice. ADHD symptoms controlled on medication.

**Q**: Why escalation in behavior? How differentiate from ADHD?

**A**: **ADHD impulsivity ≠ Conduct Disorder aggression**. ADHD impulsive acts are unplanned (reacts without thinking); Conduct aggression is planned/deliberate or persistently reactive. This child likely **developed Conduct Disorder comorbidly** (50% ADHD kids). **Perpetuating factors**: Peer rejection (from ADHD behavior even when medicated), oppositional defiance may develop. **Management**: Continue ADHD treatment, ADD behavioral parent training (aggression management, consequences), possibly antipsychotic if severe aggression/behavioral control extremely poor, school consultation.

## Case 3: Learning Disorder vs ADHD

**Case-A**: 8-year-old with inattention, restlessness, can't complete schoolwork; IQ 85, reading 2 grades below, math 1 grade below. **Case-B**: 8-year-old with inattention, restlessness, can't complete schoolwork; IQ 95, reading at grade level, math at grade level.

**Q**: Which likely ADHD? Why?

**A**: **Case-B more likely ADHD** (good IQ, skills at level despite inattention = ADHD, not disability). **Case-A likely has Learning Disorder (reading)** - IQ 85 average, but specific deficits below level (reading delay >1y = LD despite average IQ). ADHD and LD can coexist. **Key**: Assess cognitive profile (WISC, Woodcock-Johnson); specific deficits vs global deficits; inattention in ADHD present during easy tasks too (not just hard ones).

## Case 4: Autism-ADHD Comorbidity

**Case**: 7-year-old boy diagnosed autism (nonverbal, stereotyped interests, social communication deficits), now on ABA. Teacher reports: "Can't sit still in group activities, very impulsive, difficulty with attending to instructions (despite capable cognitively)." Parent: "Hyperactivity not so noticeable at home, but more in structured environment."

**Q**: Diagnosis? Management?

**A**: **Comorbid ADHD likely** (20-30% autism also ADHD). Hyperactivity more apparent in structured settings (demands for sustained attention). **Diagnosis**: Clarify if movement is stimming (autism-related repetitive behavior) vs true ADHD restlessness (can overlap). **Management**: (1) Continue ABA, (2) Consider stimulant (methylphenidate, amphetamine) if ADHD confirmed (safe in autism), (3) Structured breaks during group activities, (4) Sensory accommodations (reduce overstimulation triggering hyperactivity). **Learning**: Both conditions coexist; treat both.

## Case 5: Adolescent Treatment-Resistant Depression

**Case**: 16-year-old boy with depression × 4 months (anhedonia, guilt, sleep ↓, concentration ↓). Started sertraline 6 weeks ago (therapeutic dose 150 mg), still depressed. No suicidal ideation currently, but "life pointless."

**Q**: Next management step?

**A**: **Inadequate trial duration** (only 6 weeks; adequate = 8-12 weeks). **Option 1: Continue sertraline through 8-10 weeks**. **If still inadequate response**: (1) Check adherence (medication not being taken?), (2) Assess for bipolar features (hidden hypomania? sertraline can cause mood cycling), (3) Switch SSRI (paroxetine), (4) Augment with low-dose antipsychotic (aripiprazole), (5) Intensify CBT (cognitive therapy, behavioral activation, social engagement). **Ensure therapy ongoing** (CBT + medication superior to either alone). **Monitor suicidality** (even if not current, monitor for activation).

## Case 6: Substance Use Gateway Adolescent

**Case**: 14-year-old girl started smoking cigarettes at 13, now drinks alcohol with friends "like most kids," recently tried cannabis "to see what it's like." No psychiatric history, good family relationships. She says "Just experimenting, I'm fine."

**A**: **Gateway progression**: Tobacco → Alcohol → Cannabis → Other drugs typical but not inevitable. **Risk assessment**: Early alcohol onset (age <13 = high addiction risk in future; she's on trajectory). Early substances predict adult substance use disorder. **Protective factors**: Good family relationships, no psychiatric history (positive). **Intervention**: Brief intervention (motivational interviewing), psychoeducation about gateway risk + brain development impact (ages 14-25 critical brain development), parental involvement (nonjudgmental conversation about substance risk). **Follow-up**: Monitor for escalation; if continues → consider substance abuse prevention group.

## Case 7: Autism and Intellectual Disability Interaction

**Case**: 9-year-old nonverbal autistic boy, IQ 42, does not recognize himself in mirror, requires total assistance with self-care. Suddenly starts hitting himself, covers ears whenever family eats crunchy foods.

**Q**: Interpret new behaviors.

**A**: **Self-injury likely pain expression** (limited communication ability; hitting may indicate headache, ear pain, or emotional distress). **Sound sensitivity** (sensory hypersensitivity in autism) → covers ears at specific trigger. **Assessment**: Medical workup first (rule out ear infection, headache, dental pain causing self-injury). **Management**: (1) Identify triggers (loud noise, certain textures), (2) Provide accommodation (noise-canceling headphones, visual warnings before eating), (3) AAC device/visual communication if possible to understand pain, (4) Antipsychotic low-dose if self-injury severe/persistent (evidence supports use in autism with severe irritability/self-injury). **Learning**: Autism + ID → limited communication; behavioral changes signal distress; medical and sensory causes most common.

## Case 8: Conduct Disorder Prognosis Factors

**Case-A**: 11-year-old with recent fighting at school (first aggression), stealing from store (first), remorseful. Parents loving, responsive, good limit-setting. Father had some conduct issues at 14-15 but now stable. **Case-B**: 8-year-old with long history aggression, multiple school suspensions, kicked dog "for fun" (no remorse), lies easily, mother depressed and uninvolved, father incarcerated.

**Q**: Which prognosis worse? Why?

**A**: **Case-B worse prognosis**: Early onset (age 8 vs 11), callous-unemotional traits (kicked dog without remorse), parental factors (depressed mother, incarcerated father = poor supervision/modeling), multiple conduct violations. **Case-A better prognosis**: Later onset, remorse/guilt (indicates conscience), warm parental relationship, first offense. **Risk factors for poor outcome**: Early onset, CU traits, parental antisocial behavior, low IQ, peer deviance. **Management**: Case-A = brief intervention, parent skills training, restitution. Case-B = intensive parent training + possible residential placement + potential antipsychotic if severe aggression.

## Case 9: ADHD Medication Paradoxical Effect

**Case**: 7-year-old with ADHD started methylphenidate; mother reports "Calmer, can focus better, completes homework now." But "He seems sad, not laughing, quieter than usual."

**Q**: Dose side effect or emerging depression?

**A**: **Likely overstimulation** (too high dose for this child) creating apathy/emotional blunting. **Options**: (1) Reduce dose (goal is optimal functioning, not elimination of all symptoms), (2) Monitor closely (apathy from stimulant typically resolves with dose reduction; true depression emergent in <5%), (3) Psychological assessment (ensure behavior change isn't response to medication-related anxiety if perfectionistic expectations increased). **Key**: Parents often report "too quiet" initially as stimulant reaches therapeutic level (less impulsivity = less talking); differentiate from true emotional blunting/apathy → dose reduction if concern.

## Case 10: Cultural Context - Suicidality Adolescent

**Case**: 16-year-old boy from family with strong religious beliefs against suicide, brought to ER after saying "I'm better off dead" during family conflict. No specific plan, denies intent, saying "Just expressing anger." Parents minimize ("He didn't mean it, just emotional").

**Q**: Assess. Risk vs culture?

**A**: **Religious beliefs don't eliminate suicide risk** (actually may reduce it - protective factor). **Still assess seriously**: "If you did harm yourself, how?" (explore plan/means access), "Have these thoughts before?" (history), "What would stop you?" (protective factors: faith, family relationships if valued). **This presentation**: Angry outburst (not intent), no plan → lower risk. **BUT family minimization is risk factor** (reduces supervision, treatment engagement). **Management**: (1) Validate seriousness of assessment (even if low current risk), (2) Create safety plan, (3) Educate family (not dismissing = protective), (4) Address precipitant (family conflict → family therapy), (5) Follow-up psychiatry assessment. **Learning**: Culture matters but doesn't negate assessment; protective factors (religion, family) must be engaged for safety.

## Case 11: Autism Early Intervention Window

**Case**: 24-month-old shows limited eye contact, few words (10-15 words total), lining toys, resistance to transitions. Pediatrician says "Just slow developer, will catch up." Parents worried given maternal cousin has autism.

**Q**: Recommendations?

**A**: **Early identification critical** (brain most plastic ages 0-5). **Recommend**: (1) Formal evaluation (developmental pediatrics/autism specialist; M-CHAT screening positive likely), (2) Early intervention services (ages 0-3: state-funded speech/OT/developmental therapy; no need for diagnosis to qualify), (3) If autism confirmed: ABA (evidence-based, intensive), parent coaching (naturalistic teaching), continuation through school age. **Prognosis**: Early intervention improves outcomes (best gains when starting <3 years); delays diagnosis = loses critical window. **Learning**: Don't reassure without evaluation; genetic loading (cousin with autism) + red flags warrant formal assessment.

## Case 12: Adolescent Substance Use and Mental Health

**Case**: 17-year-old boy brought by parents: depression × 3 months, increased substance use (cannabis nightly, alcohol weekends). States "Weed helps my anxiety, I feel better when high." Denies other symptoms of anxiety disorder. Grades declining, withdrawn from friends.

**Q**: Primary condition? Management approach?

**A**: **Determine which came first**: If anxiety predated substance use → anxiety primary, cannabis complicating. If depression predated use → depression primary, substance use secondary coping. **This case**: Anhedonia prominent (depression) + self-medication pattern (cannabis for anxiety relief). **Likely**: Depression (primary) → anxiety secondary → cannabis self-medication. **Critical**: Cannabis high THC strains = worsens depression, anxiety, psychosis risk in long term (though feels better acutely). **Management**: (1) Motivational interviewing (not preachy; explore ambivalence about use), (2) Antidepressant + anxiety treatment (SSRI), (3) CBT for depression + substance reduction, (4) Family involvement (address enabling), (5) Monitor for psychosis (regular cannabis use linked to psychotic disorders especially if genetic loading), (6) Substance treatment if escalating. **Learning**: Dual diagnosis (psychiatric + substance) requires integrated treatment; address psychiatric illness, not just substance use.`,
        mnemonics: [
          { text: "ADHD girls underdiagnosed: inattentive (less disruptive), good grades mask until demands exceed ability (adolescence diagnosis common)", explanation: "Gender difference" },
          { text: "ADHD-Conduct comorbidity: 50% overlap; ADHD impulsive/unplanned; Conduct deliberate/persistent aggression; both require treatment", explanation: "Comorbidity distinction" },
          { text: "Conduct prognosis: Early onset (<10) + CU traits + parental APD = worst; guilt/remorse + late onset = better", explanation: "Risk factors" },
          { text: "Stimulant side effect: 'Quiet/apathy' usually dose-related; reduce dose before attributing to depression; true depression emergent rare (<5%)", explanation: "Medication interpretation" }
        ],
        keyPoints: [
          "ADHD girls underdiagnosed: inattentive type less disruptive, compensate with intelligence until demands exceed capacity (often diagnosed adolescence)",
          "ADHD-Conduct comorbidity common (50%); distinguish impulsive acts (ADHD) from deliberate aggression (Conduct); require separate interventions",
          "Autism-ADHD coexist (20-30%); both treatable; stimulants safe in autism, combine with ABA and sensory accommodation",
          "Adolescent depression often irritable, suicidality second leading cause death ages 15-24; SSRI + CBT, monitor for activation and emerging bipolarity",
          "Substance use adolescent: identify primary condition (psychiatric vs substance-induced); gateway progression common; early use high addiction risk; integrated treatment needed"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Case Scenarios: Child and Adolescent Psychiatry", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Child and Adolescent Psychiatry: Case-Based Learning", edition: "12th" }
        ]
      }
    ]
  },

  // PS-MOD-05-TOP-03: Forensic Psychiatry & Ethics
  {
    topicCode: "PS-MOD-05-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "forensic-ethics-layer-1-foundation",
        title: "Forensic Psychiatry & Ethics - Foundation",
        estimatedMinutes: 25,
        summary: "Mental Healthcare Act 2017 India, criminal responsibility, fitness to stand trial, testamentary capacity, involuntary admission, medical and psychiatric ethics.",
        contentMd: `# Forensic Psychiatry & Ethics - Foundation

## Mental Healthcare Act 2017 (India) - Key Provisions

### Official Recognition & Framework
- **Enacted**: 2017 (replaces Mental Health Act 1982)
- **Alignment**: WHO mental health policy, UN Convention on Rights of Persons with Disabilities
- **Philosophy shift**: Person-centered, recovery-oriented, rights-based approach (vs. earlier custodial model)
- **Scope**: Persons with mental illness, mental disability, substance use (unified under "mental health")

### Rights of Persons with Mental Illness (Chapter II)
- **Right to access mental health services**: Government responsible for basic services
- **Right to dignity and respect**: Treating facility must maintain confidentiality, human dignity
- **Right to be treated with least restriction**: Least restrictive environment, maximum autonomy
- **Right to refuse treatment**: Except involuntary cases (with legal safeguards)
- **Right to free legal aid**: During involuntary admission/treatment
- **Right to know medication/side effects**: Informed consent (exceptions: emergency, incapacity)
- **Right to confidentiality**: Privacy of medical information protected

### Involuntary Admission (Section 86-92)
- **When allowed**: Person with severe mental illness requires hospitalization BUT unwilling OR unable to consent
  - Definition "severe mental illness": Schizophrenia, bipolar disorder, depression with suicidal ideation, substance intoxication/withdrawal, psychosis
- **Who authorizes**:
  - **Police officer** (first 48 hours emergency) if danger to self/others AND no family available
  - **Psychiatrist** (direct admission for longer term if meets criteria)
  - **Mental health professional** (nurse, social worker) can make initial assessment
- **Process**:
  1. Person apprehended by police or brought to facility
  2. Assessment by psychiatrist/medical officer within 24 hours
  3. If involuntary admission justified → Magistrate approval within 30 days (or earlier at request)
  4. Magisterial inquest within 30 days of admission
- **Duration**: Involuntary status reviewed regularly; maximum 30 days without magisterial approval
- **Appeal**: Person has right to challenge involuntary status before Chief Psychiatrist/Magistrate

### Confidentiality & Information Disclosure (Section 24)
- **Basic rule**: No disclosure of patient information without explicit consent
- **Exceptions** (disclosure allowed without consent):
  - Court order/legal authority
  - Public health emergency
  - Serious threat to public safety
  - Disclosure in patient's own interest (emergency)
  - Professional consultation with other practitioners
- **Breach consequences**: Civil liability, possible criminal prosecution

### Advance Directives & Substitute Decision-Making (Chapter III)
- **Advance directive**: Person with mental illness (when capable) can prepare written directive about future care preferences
  - Example: "If I become severely ill, I prefer lithium over other medications"
- **Nominated representative**: Person can nominate someone to make healthcare decisions if incapacitated
- **Protection**: Representative must follow advance directive, act in patient's best interest
- **Relevance**: Respects autonomy, reduces involuntary treatment when preferences documented

### Mental Health Care & Treatment (Section 18)
- **Voluntary admission**: Person consents to inpatient treatment; can leave any time (with notice)
- **Treatment approach**: Least restrictive means; emphasis on rehabilitation, recovery
- **Electroconvulsive therapy (ECT)**:
  - Only with informed consent (written) OR court/magistrate approval if involuntary patient
  - Anesthesia mandatory (unlike older practice)
  - Evidence-based indications: severe depression with psychosis, catatonia, malignant neuroleptic syndrome
- **Sterilization**: NOT permitted under any circumstances (protection against abuse historically)

### Substance Use Disorders (Chapter IX)
- **Unified definition**: Substance use disorders treated as mental health condition (not criminal)
- **Voluntary treatment**: Person can seek treatment voluntarily
- **Compulsory treatment**: If person poses danger to self/others OR lacks capacity to consent
- **Rehabilitation focus**: Emphasis on harm reduction, recovery, reintegration vs. punishment

## Fitness to Stand Trial (Competency to Stand Trial)

### Definition & Legal Standard
- **Fitness**: Mental capacity to participate in own legal defense; NOT verdict of guilt/innocence
- **Legal test** (Varies by jurisdiction; Indian model similar):
  - Does person understand charges against them?
  - Does person understand consequences of conviction?
  - Can person communicate with lawyer and participate in defense?
  - Does mental illness/intellectual disability prevent fair trial participation?
- **Timing**: Evaluated at time of trial (not at time of alleged crime)

### Psychiatric Assessment
- **Who evaluates**: Independent forensic psychiatrist (appointed by court)
- **Components**:
  - **Cognition**: Basic understanding (alert, oriented, memory adequate for trial)
  - **Mental illness**: Presence of psychosis/delusion affecting trial participation? (e.g., paranoid delusions about judge = compromised trial ability)
  - **Intellectual capacity**: Can person meaningfully participate? (severe ID may render unfit)
  - **Medication effects**: Can person function despite stabilizing medication? (on medication = fit; without = unfit)
  - **Communication**: Can person articulate thoughts to lawyer?
- **Report contents**: Findings, opinion on fitness, recommendations (treatment to restore, alternative procedures if permanently unfit)

### Outcomes (Indian framework)
- **Fit to stand trial**: Proceed with legal proceedings
- **Unfit**: May be hospitalized/treated to restore fitness; trial postponed (wait for improvement)
- **Permanently unfit**: May be acquitted/case dismissed, alternative civil/medical management (institutionalization or guardian if unable to manage affairs)

## Testamentary Capacity (Will-Making Capacity)

### Definition
- **Testamentary capacity**: Sufficient mental competence to execute valid will
- **Lower bar than** general competency (specialized capacity assessment)
- **Legal elements** (Indian law perspective):
  1. **Understanding the nature of making a will** (not just signing document)
  2. **Knowledge of extent of property** (general idea of estate worth)
  3. **Knowledge of natural heirs** (who would typically inherit)
  4. **Understanding disposition being made** (who getting what)
  5. **Absence of delusions/mental illness affecting will disposition** (delusions about wealth, heirs, dispositions = capacity compromised)
  6. **Rational connection** between mental state and provisions (delusions targeting specific beneficiary = capacity compromised)

### Psychiatric Assessment
- **Timing**: Usually post-mortem (after death, will challenge in court); sometimes pre-mortem (anticipatory assessment if elder, declining health)
- **Components**:
  - **Mental status at time of will** (best if document signed, observed by witnesses who can testify)
  - **Cognitive assessment**: Memory, orientation, understanding of property/heirs
  - **Delusions/mood**: Specific delusions about wealth, heirs, disposition? Depression causing nihilistic beliefs about heirs ("none deserve it")?
  - **Substance/medication**: Intoxication, dementia medications affecting cognition at time of signing?
- **Key finding**: If mental illness (psychosis, dementia, depression) present but **NOT affecting will provisions** = capacity intact
  - Example: Dementia patient who still remembers heirs, understands distribution, not delusional = testamentary capacity
  - Example: Psychotic patient with persecutory delusions about neighbor BUT will leaves entire estate to devoted daughter (delusions not affecting disposition) = capacity likely intact

### Challenges
- **Undue influence**: Outside person coercing/manipulating will (separate from mental capacity)
  - Example: Adult child isolates parent, coerces will change (not lack of capacity but undue influence)
  - Psychiatry assesses capacity; fraud/undue influence = legal issue
- **Specific vs. general capacity**: Person may lack capacity for complex business but have capacity for simple will
  - Example: Dementia patient unable to manage finances BUT understands simple estate distribution = testamentary capacity

## Ethical Principles in Psychiatry

### Core Ethical Principles (Indian Medical Council framework + general psychiatry)

**1. Autonomy/Respect for Persons**
- Person has right to make decisions about own care
- Informed consent essential (discuss diagnosis, treatment options, risks/benefits, alternatives)
- Exceptions: Emergency (imminent danger), incapacity (legal determination of inability to consent)
- Application: Allow choice in treatment when possible (SSRI vs SNRI, therapy modality), respct advance directives

**2. Beneficence (Do Good)**
- Duty to act in patient's best interest
- Provide best available evidence-based treatment
- Promote recovery, improve functioning, reduce suffering
- Application: Prescribe appropriate medications, offer psychotherapy, discharge when safe

**3. Non-Maleficence (Do No Harm)**
- Avoid interventions causing harm
- Monitor for medication side effects, unnecessary procedures
- Risk-benefit ratio: Interventions benefit > harm
- Application: Don't over-prescribe antipsychotics in mild anxiety; assess metabolic monitoring in antipsychotic use

**4. Justice**
- Fair distribution of resources
- Equal treatment of patients
- Advocate for mental health services access
- Anti-discrimination: Protect vulnerable populations
- Application: Treat poor/rich equally; advocate for mental health funding; don't discriminate based on gender, caste, religion

### Confidentiality (Special emphasis India)

**Absolute rule**: Information shared by patient remains confidential; cannot be disclosed without explicit written consent

**Exceptions** (breach allowed without consent):
- **Court order**: Legally compelled to disclose (testimony, medical records)
- **Public health emergency**: Communicable disease, epidemiological need (tuberculosis notification)
- **Serious threat to safety**: Patient says will harm specific identifiable person → psychiatrist can breach (Tarasoff duty)
- **Child abuse/elder abuse**: Mandatory reporting in many jurisdictions
- **Professional consultation**: Discussing case with supervisor/colleague for clinical guidance (patient identity not disclosed)

**Indian context considerations**:
- **Family involvement**: Indian practice often includes family in treatment; patient may expect family informed (clarify expectations)
- **Workplace/school access**: Employer/teacher may pressure for information; legally protectable (don't disclose without consent)

## Ethical Dilemmas in Psychiatry

### Involuntary Treatment vs. Autonomy
- **Tension**: Right to refuse care vs. duty to prevent harm
- **Indian Law**: MHA 2017 allows involuntary treatment when severe mental illness + danger/incapacity, WITH legal safeguards (magistrate oversight)
- **Ethical resolution**: Use least restrictive means, periodically review, offer choice when possible

### Dual Roles (Treating vs. Forensic Evaluation)
- **Conflict**: Can't be treating psychiatrist AND expert witness (dual role compromises objectivity)
- **Ethical practice**: Clarify role at outset ("I'm evaluating your fitness; I'm not your treating doctor")
- **Exception**: Emergency treatment permitted even in forensic context (life-saving overrides dual role concern)

### Substance Use & Confidentiality
- **Scenario**: Patient discloses substance use; worried about legal consequences (drug laws)
- **Ethical stance**: Maintain confidentiality (disclosure only with consent or legal compulsion)
- **Practical support**: Offer treatment (emphasis on health, not criminal); clarify limits of confidentiality upfront
- **Advocacy**: Support decriminalization, treatment-focused policy (MHA 2017 recognizes this)`,
        mnemonics: [
          { text: "MHA 2017 shifts from custodial to recovery-oriented, rights-based approach; Involuntary admission requires magistrate approval within 30 days", explanation: "Key law framework" },
          { text: "Fitness to stand trial: Can person understand charges, consequences, communicate with lawyer?", explanation: "Legal test" },
          { text: "Testamentary capacity: Know nature of will, extent of property, heirs, what's being given; delusions don't disqualify IF not affecting disposition", explanation: "Will-making capacity" },
          { text: "Four ethics: Autonomy (informed consent), Beneficence (do good), Non-maleficence (avoid harm), Justice (fair treatment)", explanation: "Core ethical principles" }
        ],
        keyPoints: [
          "Mental Healthcare Act 2017 (India): Person-centered, recovery-oriented, rights-based; rights include dignity, least restriction, free legal aid, refuse treatment",
          "Involuntary admission: Police 48h emergency → psychiatric evaluation → magistrate approval within 30 days; regular review, right to appeal",
          "Fitness to stand trial: Evaluate at time of trial (not crime time); assess understanding of charges/consequences, ability to communicate with lawyer",
          "Testamentary capacity: Understand will-making, property extent, heirs, disposition; delusions disqualify only if affecting disposition; lower bar than general competency",
          "Ethics: Autonomy (informed consent), Beneficence (best care), Non-maleficence (minimize harm), Justice (fair treatment); confidentiality sacred except court orders, safety threats, child abuse"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Forensic Psychiatry and Mental Health Law in India", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Psychiatry and the Law; Ethics in Psychiatry", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "forensic-ethics-layer-2-mechanism",
        title: "Forensic Psychiatry & Ethics - Mechanism",
        estimatedMinutes: 30,
        summary: "Criminal responsibility and insanity tests, McNaughten rule, IPC Section 84, diminished responsibility, psychological autopsy concepts, ethical decision-making frameworks.",
        contentMd: `# Forensic Psychiatry & Ethics - Mechanism

## Criminal Responsibility & Insanity Tests

### Fundamental Concept
- **Criminal responsibility**: Legal question (not medical); asks whether person is legally culpable for act
- **Insanity defense**: Legal claim that mental illness/defect negates criminal responsibility
- **Psychiatry role**: Evaluate mental state, inform legal system; judge/jury decides responsibility (legal determination)

### Legal Tests for Insanity (Vary by jurisdiction)

#### McNaughten Rule (UK origin; influence in India, Canada, Australia)
- **Test**: At time of act, did person:
  1. Know nature and quality of act? (cognitive - understand what doing)
  2. Know act was wrong? (moral/legal wrong)
- **Caveat**: Knowledge alone insufficient if person compelled by mental illness to act despite knowing wrongness
- **Relevance**: Most restrictive test (protects public, few acquittals)
- **Example**: Schizophrenic patient hears voices commanding "Kill him" → even if cognitively knows killing wrong, compulsion may negate responsibility

#### Indian Penal Code Section 84 (Based on McNaughten)
**"Act of person who, at time of committing it, by reason of unsoundness of mind, either did not know nature of act, or its quality, or that it was wrong"**

- **"Unsoundness of mind"**: Mental illness causing cognitive/volitional impairment at time of crime
- **"Did not know nature of act"**: Not understand what was doing (severe cognitive defect)
- **"Did not know quality of act"**: Not understand consequence/seriousness
- **"Did not know it was wrong"**: Didn't know act morally/legally wrong (due to mental illness, not just poor judgment)
- **Burden of proof**: Burden on accused to prove insanity on balance of probabilities (lower threshold than criminal guilt "beyond doubt")
- **Outcome**: Acquittal if insanity established BUT person may be confined in psychiatric facility pending recovery (not released)

#### M'Naghten Alternatives (Used in some jurisdictions)

**Irresistible Impulse Test**
- Person knew act was wrong BUT mental illness compelled act despite knowing
- More lenient than pure M'Naghten
- Acknowledges mental illness can override volition (knowing-doing gap)

**Durability Test** (Durham Rule)
- Act was "product of" mental illness
- Most expansive test; criticized for overuse (too few convictions)
- Rarely used now

### Diminished Responsibility (vs. Insanity)
- **Difference from insanity**: Doesn't negate responsibility BUT reduces culpability (mitigating factor)
- **Application**: Mental illness present but doesn't meet insanity criteria (knew wrong, had some control) → reduces sentence
- **Example**: Depressed person kills spouse during severe depressive episode with guilt, despair (didn't fully meet insanity but depression mitigates)
- **Outcome**: Found guilty but reduced sentence (life → 10-15 years possible)

## Psychological Autopsy & Equivocal Death

### Definition & Purpose
- **Psychological autopsy**: Retrospective psychiatric evaluation of deceased person's mental state at time of death
- **Purpose**: Clarify mode of death when equivocal (suicide vs. accident vs. homicide)
- **Use cases**:
  - Person found dead (no witnesses) - was fall accidental or suicide?
  - Vehicle death - driver fell asleep (accident) or deliberate (suicide)?
  - Overdose death - accidental or intentional?

### Methodology
- **Interviews**: Family, friends, colleagues about deceased's mental state weeks/months before death
  - Recent mood, behavior changes?
  - Depressed, hopeless, giving away possessions?
  - Previous suicide attempts/statements?
  - Recent stressors (relationship loss, job loss)?
  - Substance use escalation?
- **Record review**: Medical records (psychiatric history, recent hospitalizations, prescriptions)
  - Prior suicide attempts?
  - Psychiatric diagnoses?
  - Medication changes?
- **Scene investigation**: Physical evidence (suicide note, locked room, method accessibility, staged scene suggesting accident)
- **Reconstruction**: Synthesize data to determine probable mental state/intent at time of death

### Limitations
- **Retrospective bias**: Informants may over/under-report concerning behaviors
- **Incomplete data**: If deceased isolated, few informants available
- **Probability not certainty**: Can only establish probable intent (mode of death may never be 100% certain)
- **Ethical sensitivity**: Family grief; accusations of suicide can be traumatic/stigmatizing

## Ethical Decision-Making Framework

### Approach to Ethical Dilemmas

**Step 1: Identify the ethical issue**
- Who are stakeholders? (patient, family, public, institution?)
- What values conflict? (autonomy vs. beneficence, individual vs. public safety?)

**Step 2: Gather information**
- What are facts? (diagnosis, capacity, danger level, legal requirements)
- What are patient's preferences? (advance directive, values, goals?)
- What legal/professional standards apply? (MHA 2017, GMC guidelines, institutional policy)

**Step 3: Consider multiple perspectives**
- Patient perspective: Autonomy, preferences, fears, goals
- Family perspective: Caregiving burden, financial impact, cultural/religious values
- Professional perspective: Duty to beneficence, non-maleficence, justice
- Societal perspective: Public health/safety, resource allocation

**Step 4: Apply ethical principles**
- **Autonomy**: Maximize patient choice (informed consent, shared decision-making)
- **Beneficence**: What treatment provides maximum benefit?
- **Non-maleficence**: What are harms? Risk-benefit ratio acceptable?
- **Justice**: Is approach fair? Discriminatory? Allocates resources equitably?

**Step 5: Consider professional standards/law**
- MHA 2017 (Indian legal framework)
- Indian Medical Association Code of Ethics
- Professional guidelines (NIMHANS, Indian Psychiatric Society)
- Case law precedents

**Step 6: Decision & documentation**
- Document reasoning: Why this decision over alternatives?
- Communicate clearly with patient/family
- Implement decision with care
- Review periodically (are outcomes as intended?)

### Common Ethical Dilemma Examples

**Case: Involuntary Admission for Refuser**
- Patient has schizophrenia, paranoid delusions, states "I don't need hospital, you're poisoning me"
- Patient refusing admission, wants to leave
- **Ethical issue**: Autonomy (right to refuse) vs. Beneficence (need for treatment/safety)
- **Framework application**:
  - Autonomy: Does patient have capacity to refuse? (delusions impairing judgment → incapacity likely)
  - Beneficence: Will hospitalization help? (psychosis, no treatment = deterioration likely; antipsychotic needed)
  - Non-maleficence: Risks of hospitalization? (confinement stress) vs. risks of refusing? (psychotic crisis, harm to self/others)
  - Justice: Fair process? (Magistrate oversight, legal aid, appeal rights provided?)
- **Resolution**: Involuntary admission justified (incapacity, danger); ensure legal safeguards (magistrate approval), least restrictive care, regular review, involve family when possible

## Forensic Interviewing & Risk Assessment

### Structured Risk Assessment
- **Purpose**: Estimate likelihood of future violence/harm to self/others
- **Tools**:
  - **HCR-20** (Historical Clinical Risk): 20-item assessment (history, clinical, risk factors)
  - **PCL-5** (PTSD Checklist): Trauma-related violence risk
  - **START** (Structured Assessment of Risk and Protective Factors): 20 items (dynamic factors)
- **Components assessed**:
  - **Historical**: Prior violence, substance abuse, psychiatric history, childhood abuse
  - **Clinical**: Current psychotic symptoms (especially command hallucinations), mood state, impulsivity, anger
  - **Risk factors**: Access to weapons, social isolation, recent stressors
  - **Protective factors**: Medication compliance, positive relationships, employment, insight
- **Outcome**: Risk level (low/medium/high) + recommendations (supervision level, medication, monitoring)

### Special Considerations

**Command Hallucinations & Violence**
- **Risk**: Command hallucinations ordering violence increase risk BUT not all obey
- **Assessment**: Nature of commands (specific person? violent?), past compliance, insight (does person recognize as illness vs. reality?)
- **Distinction**: Person obeying commands to harm specific individual vs. vague internal pressure

**Substance Use & Disinhibition**
- **Risk**: Intoxication (especially alcohol, stimulants) disinhibits judgment, impulsivity increases
- **Assessment**: Pattern of violence when intoxicated? Lucidity when sober? Substance dependence severity?

**Sexual Offenses & Paraphilias**
- **Risk**: Static risk (prior convictions) + dynamic (access, victim availability, supervision)
- **Assessment**: Paraphilia present? (pedophilia, exhibitionism) Treatment compliance? Recidivism risk (~30-40% sexual offenders re-offend)

## Confidentiality Breaches & Duty to Warn (Tarasoff Duty)

### Legal Standard (Influenced by US Tarasoff case; less clear in India)

**When can psychiatrist breach confidentiality?**
- **Imminent danger to identifiable person**: Patient states will harm specific person (or family members)
- **Duty to warn**: Psychiatrist may have legal obligation to inform likely victim, police
- **Duty to protect**: Psychiatrist may hospitalize (involuntary) to prevent harm

### Indian Context
- MHA 2017 allows disclosure for "serious threat to public safety"
- Not completely clear on individual victim disclosure vs. police notification
- Generally: Imminent danger to specific person → can breach, notify law enforcement/victim

### Clinical Application
- **Assessment**: Is threat credible? (specific plan vs. vague anger? capability to carry out? past violence?)
- **Documentation**: Document threat, reasoning for breach, who informed, when
- **Communication**: Inform patient (if safe) of breach; explain legal obligation
- **Risk reduction**: Hospitalization, medication intensification, police involvement depending on risk level

### Balancing Confidentiality & Safety
- **Presumption**: Maintain confidentiality (sacred trust)
- **Exception**: Imminent danger to identifiable person overrides confidentiality
- **Attempt to manage risk within confidentiality first**: Intensify treatment, hospitalize, involve family (if possible) before breaching
- **Last resort**: Breach only when other measures inadequate and risk imminent`,
        mnemonics: [
          { text: "IPC Section 84: Know nature, know quality, know wrongness (M'Naghten); burden on accused to prove; acquittal + psychiatric confinement if insanity", explanation: "Criminal responsibility test" },
          { text: "Psychological autopsy: Interviews family/friends, review records, analyze scene; retrospective evaluation of intent; not 100% certain", explanation: "Methodology" },
          { text: "Ethical framework: Identify issue → gather info → perspectives → principles (autonomy/beneficence/non-maleficence/justice) → standards/law → decision + doc", explanation: "Decision-making steps" },
          { text: "Tarasoff/duty to warn: Imminent danger to identifiable person → can breach confidentiality, notify police/victim; attempt other measures first", explanation: "Breach conditions" }
        ],
        keyPoints: [
          "IPC Section 84 insanity: Person didn't know nature/quality/wrongness of act due to mental illness; burden on accused; acquittal → psychiatric confinement possible",
          "Diminished responsibility: Mental illness present but doesn't negate responsibility; reduces culpability/sentence (mitigating factor)",
          "Psychological autopsy: Retrospective evaluation to clarify equivocal death (suicide vs. accident); methodology includes interviews, records, scene analysis; retrospective bias limit",
          "Ethical decision-making: Systematic framework (identify → gather info → perspectives → principles → standards → decision); applies to all dilemmas",
          "Confidentiality breach: Justified only for imminent danger to identifiable person (Tarasoff duty); attempt risk management within confidentiality first; document thoroughly"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Criminal Responsibility and Insanity; Risk Assessment", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Forensic Issues; Ethical Decision-Making in Psychiatry", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "forensic-ethics-layer-3-clinical",
        title: "Forensic Psychiatry & Ethics - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical application of forensic concepts, managing dual roles, implementing ethics in practice, cultural competence in forensic work, case examples.",
        contentMd: `# Forensic Psychiatry & Ethics - Clinical

## Forensic Evaluation in Practice

### Assessment of Fitness to Stand Trial (Practical)

**Clinical Scenario**
- 34-year-old man accused of burglary, arrested, referred for fitness evaluation
- Diagnosis: Schizophrenia, paranoid type, on no medication (refused at arrest)
- Symptoms: Paranoid delusions (police officers are aliens), command hallucinations, disorganized speech

**Evaluation Process**
1. **Establish role**: "I'm evaluating whether you're able to participate in your trial. This is not for treatment, and I'm not your doctor."
2. **Assess cognition**: Oriented to person, place, time? Memory adequate? (immediate, short-term, long-term)
3. **Assess understanding**:
   - "What are you accused of?" (judge if accurate understanding of charges)
   - "What could happen if you're convicted?" (consequences understanding)
   - "Can you explain to your lawyer what you did that day?" (participatory capacity)
4. **Assess mental illness impact**: "These beliefs about police being aliens - does this affect your trust in the judge? Your lawyer?"
5. **Assess medication effects**: If medicated, would person be able to function? (trial capacity with treatment possible?)

**Findings & Report**
- If currently unfit due to psychosis: "Unfit to stand trial at present due to untreated schizophrenia causing paranoia impairing judgment, inability to trust legal team. With antipsychotic medication, likely to restore fitness in 2-4 weeks."
- Recommendation: Psychiatric hospitalization to treat psychosis, then reassessment

### Assessment of Criminal Responsibility (IPC Section 84)

**Clinical Scenario**
- 28-year-old man charged with assaulting wife; wife says he attacked her during paranoid episode
- Diagnosed schizophrenia, untreated (wife reports he hears voices "telling him to punish her")
- History: No prior violence; stable for 5 years on antipsychotics previously, recently stopped medication

**Evaluation**
1. **Establish timeline**: When did psychosis begin? Before or after assault?
2. **Assess knowledge at time of crime**:
   - Did he know hitting wife was wrong? (probably yes - knows societal norm against violence)
   - Was he responding to command hallucinations or delusions? (voices saying wife poisoning him → might negate knowing wrongness)
3. **Assess volitional capacity**: "Even if you knew hitting was wrong, could you stop yourself?" (command hallucinations overpowering; delusions creating false reality)
4. **Rule out other causes**: Intoxication? (increases culpability) Intellectual disability? (known prior?)

**Conclusion**
- "At time of assault, person was experiencing acute psychotic episode (voices, paranoid delusions). Knowledge of wrongness likely impaired by false beliefs that wife posed imminent threat. Conduct likely compelled by psychotic symptoms. Opinion: **Meets criteria for insanity under IPC Section 84.**"
- **Outcome**: Acquittal → psychiatric hospitalization/treatment (not criminal punishment)

## Ethical Issues in Treating Patients in Legal/Forensic System

### Dual Role Dilemma: Treating vs. Evaluating

**Scenario**: Psychiatrist treating patient for 2 years for bipolar disorder. Patient charged with reckless driving (injured someone). Lawyer requests psychiatrist be expert witness on mental state at time of accident.

**Ethical Problem**:
- Treating relationship: Trust, confidentiality, best-interest focused
- Expert witness role: Objective, adversarial, courtroom oriented
- **Conflict**: Treating psychiatrist has therapeutic alliance compromising objectivity; may unconsciously bias toward defendant

**Ethical Resolution**:
1. **Refuse dual role**: Decline to be both treating and expert
2. **Refer alternative expert**: "I'll arrange for another psychiatrist to evaluate you independently. I'll continue treating you."
3. **If absolutely unavoidable**: Disclose conflict transparently; acknowledge bias risk to court; recuse from testimony if possible

### Consent & Confidentiality in Forensic Evaluations

**Scenario**: Court orders evaluation of defendant for fitness. Defendant says "Can you keep this confidential? I don't want prosecution knowing what I tell you."

**Clarification needed**:
- **This is NOT confidential** (unlike treatment relationship)
- Evaluation is for court; findings will be disclosed (defendant may lose right to confidentiality once court-ordered)
- Defendant should understand: Incriminating statements in evaluation will be shared
- **Explanation**: "This evaluation is for the court, not for your treatment. Anything you tell me will be in my report to the judge. You have the right not to answer questions, but refusal to cooperate may be noted."

### Informed Consent for Treatment in Forensic Settings

**Scenario**: Involuntary patient (criminally insane acquittal, hospitalized) refuses antipsychotic medication. Psychiatrist wants to administer involuntary.

**Ethical-Legal approach**:
1. **Capacity to refuse**: Evaluate if patient can understand medication decision
2. **If capable**:
   - Respect refusal (even if unwise)
   - Document refusal in detail
   - Offer alternative treatments
   - Reassess periodically
3. **If incapable** (severe psychosis preventing understanding):
   - **Involuntary administration justified** (analogous to involuntary admission; person can't consent)
   - Seek second opinion, document reasoning
   - Monitor for side effects
   - Reassess capacity regularly

## Cultural Competence in Forensic Work

### Cultural Variations in Mental Health Presentation

**Scenario**: 35-year-old man from rural background accused of trespassing, claiming "spirits told me to go to temple." Psychiatrist evaluates for fitness.

**Considerations**:
- **Spiritual experiences**: In some cultures, hearing divine voices/spirit communication is normal religious experience (not psychosis)
- **Differentiation**: Is person distressed/disabled by experiences? Do they interfere with functioning? Is the person convinced it's illness vs. spiritual?
- **Forensic relevance**: If person genuinely believes spirits compelled trespass AND psychiatric evaluator diagnoses "command hallucinations" → may inappropriately apply insanity
- **Approach**: Assess whether person's cultural/spiritual perspective differs from psychiatrist's; consider expert in person's faith tradition; don't pathologize cultural normative experiences

### Cultural Attitudes Toward Mental Illness & Legal System

**Scenario**: Family of accused refuses psychiatric evaluation, believing "Shame will ruin our daughter's marriage prospects; keep it secret."

**Ethical tension**:
- **Family values**: Collectivist culture values family honor over individual legal process
- **Legal requirement**: Court-ordered evaluation mandatory (law supersedes family wishes)
- **Psychiatry role**: Respect cultural values but cannot violate court order

**Approach**:
1. Explain legal requirement (not optional)
2. Acknowledge family's concerns (shame, reputation)
3. Offer culturally sensitive interventions (family included in treatment if possible; avoid public disclosure)
4. Work with cultural brokers (family elders, religious leaders) to facilitate acceptance

## Clinical Application: Implementing Ethics Daily

### Confidentiality in Busy Clinic

**Scenario**: Psychiatrist running outpatient clinic. Nurse mentions patient's diagnosis within earshot of waiting room; other staff discuss medication changes in hallway.

**Ethical breach**: HIPAA/medical confidentiality violated (information disclosed to unnecessary parties, overheard)

**Corrections**:
1. **Private discussions**: All clinical discussions in private rooms (not public)
2. **Staff training**: All staff educated on confidentiality
3. **Locked records**: Patient files not visible to non-clinical staff
4. **Secure communications**: Electronic records password-protected
5. **Accountability**: Review breach incidents, discipline if needed

### Substance-Abusing Physician

**Scenario**: Senior psychiatrist colleagues notice colleague coming to work smelling of alcohol, increasingly irritable, missing morning rounds.

**Ethical issues**:
- Patient safety risk (impaired physician treating patients)
- Professional integrity
- **Duty to report** (not just personal concern but legal/ethical obligation)

**Appropriate action**:
1. **Concern conversation**: Approach colleague privately, non-accusatory
2. **Encourage help**: "I've noticed changes; are you okay? We have resources."
3. **Report if needed**: If colleague refuses help, report to medical council (maintain public trust)
4. **Support recovery**: Psychiatry can support colleague in treatment (separate from reporting function)

### Boundary Violations

**Scenario**: Psychiatrist treating female patient with severe depression. Over months, discussions extend beyond clinical (personal life sharing). Psychiatrist gives patient his personal phone number. At 6-month mark, psychiatrist and patient become romantically involved.

**Major ethical violations**:
1. **Dual relationship**: Romantic + therapeutic incompatible
2. **Power imbalance**: Psychiatrist in position of power; patient vulnerable (depression)
3. **Exploitation**: Patient may have confused therapeutic care with romance
4. **Breach of boundaries**: Personal phone number, extended non-clinical conversations early warning signs

**Prevention**:
1. **Professional boundaries**: Maintain clear clinician-patient relationship
2. **Self-awareness**: Recognize attraction, discuss with supervisor
3. **Referral**: If attracted to patient, refer to colleague (don't treat while attracted)
4. **Documentation**: Keep focused clinical notes (not personal details)
5. **Consequences**: Sexual contact with patient = license revocation, criminal charges (India now has specific laws)

## Advocacy & Systemic Ethics

### Advocating for Vulnerable Populations

**Issue**: Persons with severe mental illness disproportionately in prison (many could be in psychiatric facilities instead)

**Psychiatrist advocacy**:
1. **Individual level**: Fitness evaluations, recommending psychiatric hospitalization when appropriate (not incarceration)
2. **System level**: Advocate for mental health courts, diversion programs, better forensic psychiatric beds
3. **Policy**: Support MHA 2017 implementation, oppose punitive approaches to mental illness

### Resource Allocation Ethically

**Issue**: Limited psychiatric beds; both acutely suicidal patient and chronic schizophrenia patient needing hospitalization

**Ethical approach**:
- **Acute danger** (suicidal imminent) typically takes priority (life-preservation principle)
- **Chronic patient**: Outpatient management intensification, crisis plan, day hospitalization if available
- **Not "first come first served"**: Severity/acuity determines priority
- **Document rationale**: Why this patient admitted, that one not; appears fair, transparent

### Opposing Unethical Legal Practices

**Scenario**: Police request psychiatrist to conduct "fitness evaluation" without court order, to determine if detainee should be released or kept in custody

**Ethical problem**:
- Evaluation outside legal framework (not court-ordered)
- Potential for misuse (police may use psychiatry to detain person indefinitely)
- Psychiatry should not support unlawful detention

**Appropriate response**:
1. Decline evaluation (explain it must be court-ordered)
2. Advise police of legal requirements (MHA 2017)
3. If person in unlawful detention, advocate for release/legal review
4. Report to authorities if systematic abuse (medical council, human rights organizations)`,
        mnemonics: [
          { text: "Fitness evaluation: Cognition? Understanding charges/consequences? Participate in defense? Mental illness impact? Medication would help?", explanation: "Assessment components" },
          { text: "IPC 84 evaluation: Know nature/quality/wrongness? How mental illness impaired knowledge/volition? Compare at-time-of-crime vs. current state", explanation: "Criminal responsibility assessment" },
          { text: "Dual role conflict: Refuse (best); if unavoidable, disclose conflict transparently; recuse if possible", explanation: "Treating vs. forensic" },
          { text: "Ethical principles daily: Confidentiality (private discussions, locked records), Boundaries (professional relationship), Advocacy (vulnerable populations), Accountability", explanation: "Clinical ethics practice" }
        ],
        keyPoints: [
          "Fitness to stand trial: Assess cognition, understand charges/consequences, participate in defense; if unfit due to treatable condition, recommend psychiatric treatment and reassessment",
          "Criminal responsibility: Evaluate knowledge/volition at time of crime; distinguish from current state; IPC 84 requires person didn't know nature/quality/wrongness due to mental illness",
          "Dual roles (treating + evaluating): Ethical conflict exists; best practice is decline and refer; if unavoidable, disclose conflict and attempt to recuse from testimony",
          "Forensic consent: Court-ordered evaluations not confidential (unlike treatment); must explain to patient upfront; incriminating statements will be disclosed",
          "Cultural competence: Differentiate spiritual experiences from pathological; respect cultural values while maintaining legal obligations; involve cultural brokers when possible"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Forensic Psychiatry: Assessment and Ethical Practice", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Clinical Applications of Forensic Psychiatry", edition: "12th" }
        ]
      },
      {
        layer: 4,
        slug: "forensic-ethics-layer-4-exam-prep",
        title: "Forensic Psychiatry & Ethics - Exam Prep",
        estimatedMinutes: 25,
        summary: "IPC Section 84, MHA 2017 key provisions, legal concepts quick reference, high-yield facts, common exam scenarios.",
        contentMd: `# Forensic Psychiatry & Ethics - Exam Prep

## IPC Section 84: Quick Reference

**"Act of person who, at time of committing it, by reason of unsoundness of mind, either did not know nature of act, or its quality, or that it was wrong"**

### Three Prongs (All must typically be evaluated)
1. **"By reason of unsoundness of mind"**: Mental illness/defect at time of act (must be present)
2. **"Did not know nature of act"**: Didn't understand what was doing (cognitive defect)
3. **"Did not know quality of act"**: Didn't understand consequence/seriousness
4. **"Did not know it was wrong"**: Didn't know morally/legally wrong (due to mental illness)

### Requirements
- **Knowledge** of wrongness required (not just knowledge of legality)
- **Due to mental illness**: Causal connection between illness and knowledge loss
- **At time of act**: Mental state evaluated when crime committed (not before/after)
- **Burden of proof**: Accused must prove on balance of probabilities (not beyond doubt)

### Outcome
- **If established**: Acquittal → Person NOT criminally culpable
- **But person may be confined**: Court may order psychiatric hospitalization "during President's pleasure" (indefinite but not criminal punishment)
- **Release conditions**: When recovered, can petition for release; no longer mental health risk

### Common Exam Questions on Section 84

**Q**: Man with acute psychosis believes wife is devil; kills her. Does IPC 84 apply?
A: **Yes, likely**. At time of crime, paranoid delusions prevented knowing wife was wife (nature lost) and that killing was wrong (delusional belief = wife was demon, not human). Meets IPC 84.

**Q**: Depressed man, fully aware depressing killing wife is wrong, but does it anyway due to depression. IPC 84?
A: **No**. He KNEW it was wrong (cognitive knowledge intact); depression influenced decision but didn't negate knowing. This is **diminished responsibility** (sentence reduction), not insanity.

**Q**: Intoxicated man kills someone. Later says "I didn't know I was killing anyone." IPC 84?
A: **Probably no**. Intoxication (even severe) typically doesn't negate responsibility under IPC 84. Only mental illness (schizophrenia, dementia, ID) recognized. (Though intoxication could be diminished responsibility.)

## MHA 2017: High-Yield Provisions

| Topic | Key Provision |
|-------|--------------|
| **Rights** | Dignity, least restriction, refuse treatment*, free legal aid, confidentiality (*except court orders, public safety) |
| **Involuntary admission** | Severe mental illness + danger to self/others; police 48h, psychiatrist evaluation, magistrate approval within 30 days |
| **ECT** | Only with consent (written) or court/magistrate approval; anesthesia mandatory |
| **Confidentiality** | Can breach for: court order, public safety threat, child/elder abuse, professional consultation (with identity protected) |
| **Advance directive** | Person can state future care preferences when capable; binding on nominated representative |
| **Substance use** | Treated as mental health condition, not criminal; voluntary/compulsory treatment depending on risk |
| **Capacity** | Presumed capable until proven; supports autonomy, least restriction philosophy |
| **Children** | Special protections; parental consent for treatment (except emergencies); child rights respected |

## Fitness to Stand Trial vs. Criminal Responsibility

| Feature | Fitness | Responsibility |
|---------|---------|-----------------|
| **Question asked** | Can person participate in trial? | Is person culpable for crime? |
| **Timing** | At trial time | At crime time |
| **Focus** | Procedural (trial participation) | Substantive (mental state at crime) |
| **Outcome if Yes** | Proceed with trial | Found guilty, standard sentencing |
| **Outcome if No** | Trial postponed (treatment to restore) | Acquitted (may be confined in psychiatric facility) |
| **Example** | Schizophrenic unfit to stand trial (treat, then trial) | Schizophrenic at crime time → acquitted under IPC 84 |

## Testamentary Capacity Quick Reference

**5-Point Test**:
1. Understand nature of making a will (not just signing paper)
2. Know extent of property
3. Know natural heirs
4. Understand disposition being made
5. Absence of delusions affecting will provisions

**Key principle**: Delusions don't disqualify unless they affect the specific disposition.
- **Capacious example**: Dementia patient with memory gaps but still knows major heirs, leaves estate appropriately → capacity intact
- **Incapacious example**: Paranoid delusions that daughter is poisoning → excludes her from will without rational basis → capacity compromised

## Four Core Ethical Principles (Medical Ethics Basics)

| Principle | Definition | Application |
|-----------|-----------|------------|
| **Autonomy** | Respect for person's decision-making | Informed consent, shared decision-making, respect refusal |
| **Beneficence** | Do good, act in best interest | Prescribe evidence-based treatment, promote recovery |
| **Non-maleficence** | Do no harm, minimize suffering | Monitor medication side effects, avoid unnecessary procedures |
| **Justice** | Fair treatment, equitable resources | Treat all equally, advocate for vulnerable, anti-discrimination |

## Common Exam Questions

**Q1: 45-year-old man charged with murder claims insanity. Has schizophrenia diagnosed 10 years ago, treated with antipsychotics. At crime time, had stopped medication 2 months prior, had command hallucinations "Kill your rival." What's your opinion on IPC 84?**

A: **Likely meets IPC 84**. Unsoundness of mind present (schizophrenia). Due to untreated psychosis (off medication 2 months), likely did not know killing was wrong (command hallucinations compelling, paranoid beliefs). Causal connection between illness and crime evident. **Opinion: Satisfies IPC 84; likely acquittal with psychiatric confinement.**

**Q2: Woman brought by police for "fitness evaluation" without court order. She hasn't been formally charged yet. You should:**

A: **Decline evaluation**. Fitness evaluation must be court-ordered (legal proceeding requirement). Consent/authority must come from court, not police. Explain to police MHA 2017 legal framework. If woman detained, assess if unlawful detention and advocate for legal process.

**Q3: Your patient (anxiety disorder, under treatment) asks for recommendation letter for insurance, requests you keep content confidential from employer. Appropriate response?**

A: **Can provide letter** (with patient consent). Confidentiality maintained between you and insurance (you don't disclose to employer unless patient authorizes). BUT patient should understand insurance will know diagnosis/treatment details. Clarify: Confidentiality with insurance, not employer (unless specific authorization).

**Q4: Psychiatrist asked to evaluate criminal defendant; defendant asks "Can you keep my statements confidential?" Correct response?**

A: **No**. "This is a court-ordered forensic evaluation, not a treatment relationship. My findings will be shared with the court in my report. You're not entitled to confidentiality here. You have the right not to answer, but refusal may be noted. Do you understand?"

**Q5: ICD-11 code for involuntary patient's schizophrenia?**

A: **6C00.0** (schizophrenia core code) + severity specifier (mild/moderate/severe). Involuntary status is legal designation, not diagnostic code; same diagnostic code for voluntary/involuntary patients with schizophrenia.

**Q6: Difference between fitness to stand trial and responsibility under IPC 84?**

A: **Fitness** = can person participate in trial NOW? (procedural). **Responsibility** = did person know act was wrong at CRIME TIME? (substantive). Fitness unfit → trial postponed. Responsibility → acquitted if insane (or guilty if sane) independent of fitness status.

**Q7: Patient with major depression, guilt, suicidal ideation. You hospitalize involuntarily under MHA 2017. Duration allowed without magistrate approval?**

A: **72 hours** (some sources say 48-72; magistrate approval needed by **30 days at latest** for longer confinement). Regular review, right to appeal.

**Q8: Which breach of confidentiality allowed under MHA 2017?**

A: **Court order** (mandatory), **public safety threat** (imminent danger), **child/elder abuse** (mandatory reporting), **professional consultation** (anonymized preferred), **emergency** (patient's benefit).`,
        mnemonics: [
          { text: "IPC 84: Unsoundness of mind + Did not know nature/quality/wrongness → Acquittal + Psychiatric confinement", explanation: "Insanity test" },
          { text: "Fitness: Trial time, procedural, can participate? Responsibility: Crime time, substantive, knew wrong?", explanation: "Distinction" },
          { text: "Testamentary capacity: Nature, extent, heirs, disposition, no delusions affecting will", explanation: "5 points" },
          { text: "Ethics: Autonomy (consent), Beneficence (do good), Non-maleficence (no harm), Justice (fair treatment)", explanation: "Core principles" }
        ],
        keyPoints: [
          "IPC Section 84: Unsoundness of mind + didn't know nature/quality/wrongness of act → acquittal; burden on accused; outcome = psychiatric confinement (not criminal punishment)",
          "MHA 2017 key provisions: Rights (dignity, least restriction, free legal aid), Involuntary (magistrate approval within 30 days), ECT (consent/court approval), Confidentiality (breach allowed for court orders, safety threats, abuse)",
          "Fitness to stand trial vs. Criminal responsibility: Fitness = procedural (trial participation NOW), Responsibility = substantive (knew wrongness at CRIME TIME); independent determinations",
          "Testamentary capacity: Lower bar than general competency; must understand will-making, property extent, heirs, disposition; delusions disqualify only if affecting specific provisions",
          "Four ethical principles: Autonomy (informed consent), Beneficence (best treatment), Non-maleficence (minimize harm), Justice (equitable treatment)"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Forensic Psychiatry Quick Reference: IPC 84, MHA 2017, Ethics", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Psychiatry and the Law: Exam Preparation", edition: "12th" }
        ]
      },
      {
        layer: 5,
        slug: "forensic-ethics-layer-5-active-recall",
        title: "Forensic Psychiatry & Ethics - Active Recall",
        estimatedMinutes: 20,
        summary: "12 forensic/ethical case scenarios, diagnostic decision-making, legal application, ethical reasoning under pressure.",
        contentMd: `# Forensic Psychiatry & Ethics - Active Recall

## Case 1: IPC 84 Complex - Intoxication + Mental Illness

**Case**: 32-year-old man killed neighbor during drunken argument. Also has untreated bipolar disorder (manic at time of crime, not taking lithium). Police claim "Just drunk aggression," defense claims "Manic episode compelled him."

**Q**: Does IPC 84 apply? How differentiate intoxication from mental illness?

**A**: **Intoxication alone typically NOT grounds for IPC 84** (law doesn't excuse due to voluntary intoxication). **BUT underlying mental illness (untreated mania) may apply IF can demonstrate manic symptoms (not just alcohol) prevented knowing wrongness**. **Approach**: Establish timeline - was mania present before drinking? Did manic symptoms (grandiose delusions, impulsivity, recklessness) drive violent act, independent of intoxication? If yes → IPC 84 possible. If mania secondary to alcohol → no. **Learning**: Distinguish primary mental illness (culpable) from alcohol effect (not excused); both present = both examined.

## Case 2: Fitness Restoration Vs. Permanent Unfitness

**Case**: 55-year-old man charged with assault, found unfit (severe dementia with moderate cognitive impairment). Wife asks "Will he ever be fit? Can he be tried?"

**Q**: Can dementia patient be fit? What's prognosis?

**A**: **Dementia progressive** → unlikely restoration of fitness. **Options**: (1) If mildly demented, aggressive treatment of reversible causes (medication effects, delirium, infection) may improve cognition → fitness restoration possible, (2) If severe/progressive, permanent unfitness likely → case may be dismissed, alternative civil management (guardianship for property/medical decisions). **Prognosis**: Age, dementia severity, progression rate determine if restoration possible. **Learning**: Some unfitness permanent (dementia, severe ID); restoration not always goal (sometimes better to manage in psychiatric/civil framework than criminal).

## Case 3: Confidentiality - Family Pressure

**Case**: Psychiatrist treating depressed patient (confidential treatment). Patient's wife calls: "I'm worried about him, is he suicidal? Tell me so I can help." Patient has not authorized disclosure; psychiatrist hasn't assessed imminent suicide risk (patient says thoughts but no plan).

**Q**: Can psychiatrist tell wife?

**A**: **No**. Even family can't get information without explicit patient consent (unless emergency/imminent danger). **Response to wife**: "I can't discuss your husband's specific diagnosis/treatment without his permission. What I can do: (1) suggest you ask him to authorize family meetings, (2) suggest you speak with him about your concerns, (3) if you're worried about immediate safety, call emergency services." **Exception**: If actual imminent suicide (plan + means), psychiatrist could breach to notify family (safety exception). **Learning**: Family wants to help but don't have automatic right to information; patient autonomy/confidentiality protected.

## Case 4: Advance Directive & Conflict with Current Wishes

**Case**: Patient with schizophrenia wrote advance directive 2 years ago (when stable) stating "Please give me antipsychotics if I become psychotic; I know I refuse them when sick." Now acutely psychotic, paranoid, refusing medication ("You're poisoning me"). Advance directive requests medication.

**Q**: Should psychiatrist give medication against current refusal?

**A**: **Yes, advance directive has moral/ethical weight**. Patient anticipated this scenario, documented wishes when capable. **Steps**: (1) Explain advance directive to patient, (2) if patient still refuses, explain advance directive allows for involuntary treatment, (3) administer medication (with proper legal safeguards if involuntary), (4) document thoroughly (advance directive, patient refusal, rationale for proceeding). **This respects autonomy**: Patient's earlier capable self making decision for incapable self is acceptable. **Learning**: Advance directives excellent tools in psychiatry (prevent unnecessary involuntary treatment, respect autonomy).

## Case 5: Testamentary Capacity - Contested Will

**Case**: 78-year-old woman dies; will leaves bulk of estate to caregiver (hired 6 months before death), small amount to children. Children contest will, allege testamentary incapacity. Woman had mild cognitive impairment, took sedating medications. Medical records show: "Knows children, but forgetful about dates."

**Q**: Likely have capacity? Factors supporting/against?

**A**: **Potentially intact capacity despite mild cognitive impairment**:
- Knows heirs (children) ✓
- Knows nature of will-making ✓
- No delusions documented ✓
- Disposition rational (left to longtime companion; not bizarre) ✓

**Against**:
- Mild cognitive impairment (memory decline)
- Sedating medications (may affect cognition)
- Unequal distribution (children get less) - BUT not enough alone to negate capacity

**Psychological autopsy needed**: Review records (when was will signed relative to cognitive decline?), interview witnesses (did she seem alert when signing?), medical timeline (medication doses affecting cognition at will-signing time?). **Likely findings**: Mild impairment doesn't negate capacity if person understood what was doing. **Undue influence** (not capacity issue) = better legal argument (caregiver influenced her to change will). **Learning**: Capacity assessment requires objective evidence; emotional reaction to unequal distribution not basis for incapacity.

## Case 6: Dual Role Risk - Research vs. Treatment

**Case**: Psychiatrist conducting research on treatment outcomes in schizophrenia. Enrolls own patient (treating for 2 years) in research. Patient enthusiastically enrolls thinking "My doctor knows best treatment." Researcher assigns patient to control group (standard care), other patients get experimental agent.

**Q**: Ethical issues?

**A**: **Major conflicts**:
1. **Treating psychiatrist bias**: May unconsciously downgrade experimental group (prefers known treatment for own patient)
2. **Patient confusion**: Patient may think experimental is better (researcher bias)
3. **Therapeutic misconception**: Patient in research may not understand difference between research benefit and treatment benefit
4. **Informed consent compromised**: Power differential (treating doctor + researcher) makes true informed consent difficult

**Better approach**: Refer patient to independent psychiatrist for research; treating psychiatrist doesn't enroll own patients in research. **If unavoidable**: Extremely transparent consent process, independent data monitoring, explicit discussion of conflicts. **Learning**: Research + treatment roles create inherent conflict; best practice = separate them.

## Case 7: Police Coercion & Involuntary Evaluation

**Case**: Police bring man to psychiatric facility, claim "Mental patient, must be evaluated; we'll charge him if you don't." No court order, no family present. Man says "I'm fine, don't need evaluation."

**Q**: Should psychiatrist evaluate?

**A**: **Legal/ethical issues**:
- **No court authorization**: Psychiatrist shouldn't conduct forensic evaluation without legal order (police request insufficient)
- **Potential coercion**: Police threat of charges is concerning; may constitute unlawful detention
- **Autonomy violation**: Person explicitly refusing, no medical emergency

**Appropriate response**:
1. Tell police: Evaluation requires court order
2. Advise man of rights: "You can refuse evaluation; if you believe you're being unlawfully detained, you can petition court/request legal aid"
3. If man in custody without charges/legal process → **Advocate for immediate release or legal procedure** (contact legal aid, human rights organizations if repeated pattern)
4. Document interaction: Record what police said, man's refusal, your advice

**Learning**: Psychiatry should not be tool for unlawful detention; follow legal processes; advocate for rights.

## Case 8: Suicidality & Tarasoff - Specific vs. Vague Threat

**Case-A**: Patient in therapy says "I'm so tired of living, might as well be dead." No specific plan, thoughts but not active intent. **Case-B**: Same patient week later says "I'm going to kill myself by shooting. I've bought a gun. My ex-wife's new boyfriend ruined my life; he deserves to die too."

**Q**: When breach confidentiality? Difference?

**A**: **Case-A (vague)**: Assess risk (suicidal ideation without plan/intent = lower risk but not no risk). Intensify monitoring, hospitalize if risk increases, support family involvement. **No breach needed** (risk managed within treatment relationship).

**Case-B (specific plan)**: Imminent danger to self (gun access) + identified third party threat (ex-wife's boyfriend). **Breach justified**:
1. Hospitalize immediately (danger to self)
2. Notify police (specific threat to identifiable person - duty to warn)
3. Document: Imminent danger, specific plan, means access, notification made

**Distinction**: Tarasoff (duty to warn) applies when **imminent danger to IDENTIFIED third party**. Suicidal ideation alone = not Tarasoff breach (though safety management necessary). **Learning**: Vague ideation = increased monitoring; specific plan with means = action (breach, hospitalize, warn).

## Case 9: Ethical Reporting of Peer Misconduct

**Case**: Psychiatrist discovers senior colleague is in romantic relationship with current patient (violation of professional ethics/boundaries). Colleague says "Don't tell anyone, I'll end it, she consented, it's not hurting anyone."

**Q**: What's your obligation?

**A**: **Must report** (colleague's assertion that it's consensual/harmless doesn't remove ethical obligation):
1. **Power imbalance**: Psychiatrist-patient relationship inherently unequal; consent questionable
2. **Professional duty**: Protect patients from exploitation
3. **Public trust**: Medical profession's credibility depends on policing own
4. **Legal**: Many jurisdictions have legal prohibition on sexual contact with patients (criminal)

**Action**:
1. Document colleague's admission (date, what said)
2. Report to medical council/ethics committee (or institutional if hospital)
3. Inform patient of reporting (patient may need support/therapy referral to independent provider)
4. Protect yourself: Don't continue covering up; don't directly confront unless trained in intervention

**Difficult but necessary**: Reporting colleague harms relationship but protects future patients. **Learning**: Personal loyalty to colleague doesn't override duty to prevent patient harm.

## Case 10: Cultural Interpretation - Possession vs. Psychosis

**Case**: 28-year-old woman from strongly religious family reports "A demon possesses me; I hear evil voices, feel presences." Family interprets as spiritual attack; wants exorcism. Psychiatric assessment shows: hallucinations (voices), delusions (possessed), but no formal thought disorder, some insight ("Feels real but maybe illness?"), functioning moderately impaired.

**Q**: Psychotic disorder or spiritual crisis? How manage?

**A**: **Could be either or both**:
1. **Psychiatric perspective**: Hallucinations, delusions = meets psychotic disorder criteria (brief psychotic, schizophrenia spectrum)
2. **Religious perspective**: Spiritual possession genuine experience in their cosmology (not delusion to them)
3. **Differential**: Does person distressed by experiences? (Yes = pathological, even if culturally contextualized) Does person want psychiatric help or religious intervention? (Often both valued)

**Management**:
- **Respect both frameworks**: "Your experience is real to you. From medical perspective, voices/visions can occur in illness treatable with medication. From spiritual perspective, these may be spiritual experiences. Both perspectives valid; we can address both."
- **Offer psychiatric treatment**: "Medication may reduce voice severity; prayer/ritual might also help. Both compatible."
- **Family involvement**: Engage family in treatment (culturally appropriate); explain psychiatric treatment doesn't deny spiritual reality
- **Outcome**: Many patients accept both psychiatric + religious interventions; voices reduce with medication, but spiritual meaning maintained

**Learning**: Don't dismiss cultural/spiritual frameworks as "mere delusion"; integrate with psychiatric care.

## Case 11: Confidentiality & Social Media

**Case**: Psychiatrist's patient posts on public Facebook about his bipolar disorder, medication, treatment ("So grateful for Dr. Smith who helped me..."). Patient tags psychiatrist. Other patients/psychiatrist's family see post.

**Q**: Has confidentiality been breached?

**A**: **No breach by psychiatrist** (patient voluntarily posted). **BUT ethical considerations**:
1. **Patient autonomy**: Patient has right to disclose own diagnosis (choice to be public)
2. **Psychiatrist response**: Should psychiatrist "like" post, comment, engage? (Creates blurred boundaries, mixes professional + social media)
3. **Professional best practice**: Even if patient posts, psychiatrist should not engage on social media (maintain boundaries)

**Appropriate action**:
- Don't "like," comment, or share patient's posts
- If patient asks "Why didn't you comment?" explain: "Professional boundaries; I'm your doctor, not your social media friend. Your decision to share is yours; I maintain separation."
- If concerned about patient's disclosures (reckless oversharing?): Address in therapy ("You're sharing medical info publicly; risks?")

**Learning**: Patient's confidentiality right includes disclosing own information; psychiatrist shouldn't use that opening to blur professional boundaries.

## Case 12: Capacity & Depressive Hopelessness

**Case**: 45-year-old man with severe depression, nihilistic thoughts ("Everyone better off without me"), declining hospitalization despite high suicide risk. States "I don't want treatment, I'm a burden, let me die."

**Q**: Assess capacity to refuse treatment. Can psychiatrist hospitalize involuntarily?

**A**: **Assess capacity to refuse**:
- Does he understand diagnosis? (Yes, acknowledges depression)
- Does he understand proposed treatment/benefits? (Probably; knows antidepressants, hospitalization protective)
- **Does depression impair reasoning about treatment?** (Critical question - depressive cognitions [hopelessness, worthlessness] distort judgment about living/dying)
- Can he appreciate how depression affects his decision? ("I'm suicidal because illness makes life seem worthless, not because life objectively worthless")

**Likely finding**: **Lacks capacity to refuse** (depressive cognitive distortion prevents rational decision-making about life-death choice; suicidality + cognitive impairment = incapacity)

**Action**: **Involuntary hospitalization justified** (incapacity to refuse, imminent danger [suicide])

**Duration**: Stabilize on antidepressant (4-6 weeks usually), reassess capacity (often restored when mood improves); discharge when safe

**Learning**: Severe depression/suicide commonly impairs capacity even if person articulate about illness; suicidality + cognitive distortion = incapacity presumption.`,
        mnemonics: [
          { text: "IPC 84 + intoxication: Intoxication alone not excused; underlying mental illness examined separately; both present = both analyzed", explanation: "Complexity with dual presentation" },
          { text: "Breach confidentiality: Imminent danger to identifiable person (Tarasoff); vague suicidality = no breach but monitor; specific plan = breach, hospitalize, warn", explanation: "Breach threshold" },
          { text: "Dual role (treating + research): Major conflict; best = separate roles; if unavoidable, extreme transparency, independent monitoring", explanation: "Conflict management" },
          { text: "Peer misconduct: Report (patient protection > colleague loyalty); document, report to council, support victim", explanation: "Ethical obligation" }
        ],
        keyPoints: [
          "IPC 84 with intoxication: Distinguish primary mental illness from alcohol effect; intoxication doesn't excuse but underlying mental illness may if prevented knowing wrongness",
          "Fitness restoration: Some permanent (dementia, severe ID); alternative management (civil, psychiatric) sometimes better than criminal trial",
          "Confidentiality: Family doesn't have automatic right without consent; exceptions (emergency, safety threat) rare; advance directives valuable for future care preferences",
          "Testamentary capacity: Mild cognitive impairment doesn't negate capacity if person understands will-making; unequal distribution not evidence of incapacity; undue influence separate issue",
          "Tarasoff duty: Imminent danger to identified person justifies breach; vague ideation doesn't trigger breach (but requires monitoring); specific plan + means + threat = action"
        ],
        textbookRefs: [
          { book: "Ahuja's Textbook of Postgraduate Psychiatry", chapter: "Clinical Forensic Case Scenarios and Ethical Dilemmas", edition: "3rd" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Forensic and Ethical Case-Based Learning in Psychiatry", edition: "12th" }
        ]
      }
    ]
  }
];

