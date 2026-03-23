import type { TopicLessons } from "./content-loader";

export const pediatricsPart3Lessons: TopicLessons[] = [
  {
    topicCode: "PE-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "developmental-milestones-foundation",
        title: "Developmental Milestones - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of developmental milestones across infancy and childhood; gross motor, fine motor, language, and social-emotional domains.",
        contentMd: `# Developmental Milestones - Foundation

## Definition and Importance of Developmental Milestones

### What are Developmental Milestones?
- **Milestones**: Specific skills or behaviors that most children can do by a certain age
- **Developmental domains**: Gross motor (large body movements), Fine motor (hand/finger skills), Language (speech/understanding), Social-emotional (interaction, emotions)
- **Importance**: Early identification of delays allows for early intervention; critical for long-term outcomes

## Gross Motor Development

### Infancy (0-12 months)
- **1 month**: Lifts head slightly, jerky limb movements
- **2 months**: Better head control, smiles socially
- **3 months**: Holds head steady, pushes with legs when feet on surface
- **4 months**: Rolls over (tummy to back), supports some weight on legs
- **5 months**: Rolls both ways (back to tummy and tummy to back)
- **6 months**: Sits with minimal support, reaches for toys
- **7 months**: Sits without support momentarily
- **8 months**: Sits well without support
- **9 months**: Crawls, pulls self up to standing (furniture)
- **10 months**: Stands holding furniture, cruises along furniture
- **12 months**: Stands alone briefly, takes first steps (within age range 10-14 months typical)

### Toddler (1-3 years)
- **15 months**: Walks well without assistance (may still be wobbly)
- **18 months**: Runs (stiffly), climbs stairs with help, sits in small chair
- **2 years**: Runs well, climbs stairs using railings, kicks ball
- **3 years**: Pedals tricycle, climbs stairs alternating feet, runs smoothly

## Fine Motor Development

### Infancy (0-12 months)
- **3 months**: Swipes at dangling objects
- **4 months**: Transfers objects hand to hand
- **5 months**: Rakes grasp (uses all fingers to grasp)
- **6 months**: Radial palmar grasp (thumb + fingers, still crude)
- **7-8 months**: Radial digital grasp developing (thumb + fingertips)
- **9-10 months**: Pincer grasp (thumb + index finger, true opposition)
- **12 months**: Uses pincer grasp well, bangs objects, offers toys

### Toddler (1-3 years)
- **15 months**: Builds tower of 2 blocks, scribbles with crayon
- **18 months**: Builds tower of 3 blocks, turns pages of book
- **2 years**: Builds tower of 6-7 blocks, scribbles, eats with spoon (messy)
- **3 years**: Builds tower of 10 blocks, copies circle, uses spoon well

## Language Development

### Infancy (0-12 months)
- **2 months**: Coos (makes vowel sounds)
- **4 months**: Laughs out loud, responds to name
- **6 months**: Babbles ("ba-ba," "da-da" - no meaning yet)
- **8 months**: Babbling with consonants; understands simple words like "no"
- **10 months**: Waves bye-bye, says "dada" or "mama" (still without understanding)
- **12 months**: Says first words with meaning ("dada," "mama," "dog"); understands simple commands

### Toddler (1-3 years)
- **15 months**: Says 5-10 words; points to objects when named
- **18 months**: Says 10-20 words; points to familiar people/objects; simple commands understood
- **2 years**: 50-200 word vocabulary; two-word phrases ("mama up," "more milk"); understands most simple speech
- **3 years**: 200-300+ word vocabulary; 2-3 word phrases; understands conversational speech

## Social-Emotional Development

### Infancy (0-12 months)
- **2 months**: Social smile
- **4-6 months**: Laughs, shows preference for familiar people
- **6 months**: Stranger anxiety begins
- **8-9 months**: Separation anxiety develops, waves bye-bye
- **12 months**: Shows affection, imitates actions, understands simple games (peek-a-boo)

### Toddler (1-3 years)
- **15 months**: Shows affection, plays simple games, points to show interest
- **18 months**: Shows pride in accomplishments, follows simple 1-step commands
- **2 years**: Plays alongside other children (parallel play), shows interest in peers, tantrums appear
- **3 years**: Plays with other children (interactive play), shows variety of emotions, begins following rules

## Self-Care Skills (Personal and Social)

### Feeding
- **6 months**: Brings hand to mouth reliably
- **8-9 months**: Rakes food, begins self-feeding
- **12 months**: Eats with fingers, brings cup to mouth
- **18 months**: Eats with spoon with spillage, drinks from cup with help
- **2 years**: Eats with spoon (still messy), drinks from cup
- **3 years**: Uses spoon and fork, eats independently

### Toileting
- **18 months**: Shows interest in toileting
- **2 years**: Can indicate need for toileting, daytime dryness possible
- **3 years**: Daytime training often achievable; nighttime often not until 5-6 years
`,
        mnemonics: [
          {
            text: "GROSS MOTOR TIMELINE = Sits 6mo, Crawls 9mo, Stands 12mo, Walks 12-14mo, Runs 18mo, Climbs stairs 2-3yrs",
            explanation: "Key gross motor milestones by age in normal development"
          },
          {
            text: "FINE MOTOR PROGRESSION = Raking 5mo, Radial palmar 6mo, Pincer 9-10mo, Builds tower of 2 blocks 15mo",
            explanation: "Development of grasping and manipulation skills"
          },
          {
            text: "LANGUAGE FIRST WORDS = 12 months (meaningful); Babbling (6-10mo, no meaning); Cooing (2-4mo)",
            explanation: "Sequence and timing of language development"
          },
          {
            text: "ANXIETY TIMELINE = Stranger anxiety (6mo), Separation anxiety (8-9mo), Social fears (2-3yrs)",
            explanation: "Emotional development and normal anxiety patterns"
          }
        ],
        keyPoints: [
          "Gross motor milestones proceed cephalocaudal (head to tail) and proximal to distal (shoulder/hip to hands/feet)",
          "Pincer grasp (thumb + index finger) develops by 9-10 months; earliest sign of fine motor maturity",
          "First words with meaning appear around 12 months; babbling before that has no meaningful content",
          "Stranger and separation anxiety are normal; peak 8-18 months; gradually resolve with maturation",
          "Wide variability exists within normal range; concern only if significantly delayed or not progressing"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Growth and Development", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "7: Assessment of Growth and Development", edition: "21st" },
          { book: "CDC Developmental Milestones Checklist", chapter: "Birth to 3 Years", edition: "2023" }
        ]
      },
      {
        layer: 2,
        slug: "developmental-milestones-mechanism",
        title: "Developmental Milestones - Mechanism",
        estimatedMinutes: 23,
        summary: "Neurobiological mechanisms underlying motor, cognitive, and social-emotional development; brain maturation and neural plasticity.",
        contentMd: `# Developmental Milestones - Mechanism

## Neurobiological Basis of Development

### Brain Development Timeline

**Prenatal (0-40 weeks):**
- **First 8 weeks**: Neurulation, formation of neural tube → primary brain structures
- **8-12 weeks**: Major anatomical structures forming; basic connectivity
- **20-28 weeks**: Cortical layering establishing; primary sensory areas developing
- **28-36 weeks**: Cortical folding, white matter development; rapid synaptogenesis
- **36-40 weeks**: Fine-tuning of connections, myelination beginning

**Postnatal (0-3 years):**
- **0-3 months**: Rapid synapse formation (synaptogenesis); peak density by 6-9 months
- **3-12 months**: Selective pruning (elimination of unused connections); myelination progresses
- **1-3 years**: Continued pruning, myelination; cortical maturation

### Myelination Timeline and Motor Development

**Myelination** (insulation of nerve fibers) → allows faster neural transmission:
- **Brainstem/spinal cord**: Myelinated in utero and early infancy → basic reflexes present at birth
- **Cerebellum**: Myelination 0-6 months → balance, coordination improve
- **Motor cortex**: Myelination 0-12 months → voluntary control develops
- **Frontal lobe**: Myelination continues 1-3 years and beyond → impulse control, planning improve
- **Language areas (Broca, Wernicke)**: Myelination 6 months-3 years → language development
- **Association cortices**: Myelination continues throughout childhood → higher cognitive functions

### Reflex Development and Integration

**Primitive Reflexes** (present at birth, should disappear by certain ages):
- **Moro reflex**: Present at birth, diminishes by 5-6 months (as motor cortex matures)
- **Rooting reflex**: Present at birth, disappears by 3-4 months
- **Grasp reflex**: Present at birth (palmar), disappears by 5-6 months
- **Stepping reflex**: Present at birth, disappears by 1-2 months, returns as voluntary stepping develops
- **Tonic neck reflex**: Present at birth, disappears by 5-6 months

**Integration of primitive reflexes** into voluntary control represents CNS maturation. Persistence of primitive reflexes beyond expected age may indicate neurological abnormality.

## Motor Development Mechanisms

### Gross Motor Control Development

**0-2 months (Brainstem/Spinal Control):**
- Primitive reflexes dominate
- Jerky movements (lack cortical control)
- Gravity effects on tone; hypotonia in preterm

**3-6 months (Midbrain and Cerebellum):**
- Myelination of cerebellum and motor pathways
- Primitive reflexes fading
- Head control develops (cerebellum organizing balance)
- Reaching improves (developing cortical connections)

**6-12 months (Cortical and Motor Cortex):**
- Myelination of motor cortex and cerebellar pathways
- Voluntary control emerging
- Sitting → crawling → standing (increasingly complex antigravity control)
- Balance developing

**12-24 months (Cortical Refinement):**
- Motor cortex connections refined and pruned
- Walking emerges (requires balance, coordination)
- Running develops (more complex motor planning)

### Fine Motor Development Mechanism

**Grasp Development:**
- **Primitive grasp (0-3 months)**: Subcortical (brainstem-mediated)
- **Raking grasp (4-6 months)**: Developing cortical involvement; cannot yet oppose thumb
- **Radial palmar grasp (6-7 months)**: Thumb opposes fingers; cortical control improving
- **Radial digital/pincer grasp (9-10 months)**: Precise opposition of thumb and index finger; mature cortical control

**Mechanism**: Anterior cerebral artery territories (supplying motor cortex hand area) develop connections allowing increasingly precise voluntary control. Mirror neurons develop, allowing imitation.

## Cognitive Development

### Sensory Processing Development
- **0-3 months**: Visual tracking developing; prefers face patterns
- **3-6 months**: Binocular vision, depth perception improving; object tracking smoother
- **6-9 months**: Object permanence beginning (understanding that objects exist even when hidden)
- **9-12 months**: Searching for hidden objects; cause-and-effect understanding

### Language Development Neurobiology

**Brain Areas Involved:**
- **Wernicke's area (temporal-parietal)**: Language comprehension
- **Broca's area (inferior frontal)**: Language production
- **Superior temporal gyrus**: Speech perception
- **Corpus callosum**: Interhemispheric communication

**Development Timeline:**
- **0-6 months**: Receptive language area developing; infant listening to speech patterns
- **6-12 months**: Language areas increasingly myelinated; babbling reflects phoneme discrimination
- **12-24 months**: Broca's area maturation; expressive language emerges
- **2-3 years**: Language areas increasingly myelinated; vocabulary expansion

**Mechanism of First Words**: Infant hears repeated word sounds → neural patterns established in Wernicke's area (understanding) → with motor output maturation (Broca's area), can produce words → meaning association develops.

## Social-Emotional Development Mechanisms

### Attachment Development (Bowlby's Theory)

**Neurobiological Basis:**
- **Oxytocin system**: Bonding hormone; activated in parent-infant interaction
- **Limbic system development**: Amygdala, hippocampus, and anterior cingulate developing
- **Mirroring and empathy**: Mirror neurons develop (9-12 months onward)

**Developmental Stages:**
- **0-2 months**: Undiscriminating responsiveness (responds to any caregiver)
- **2-4 months**: Discriminating responsiveness (prefers familiar caregiver)
- **4-8 months**: Attachments forming; stranger anxiety emerges
- **8-18 months**: Focused attachment; separation anxiety peaks
- **18-24 months**: Secure base/safe haven concept; beginning independence with reassurance

### Emotion Regulation Development

**Early Infancy (0-3 months):**
- Emotions driven by physiological states (hunger, discomfort)
- Caregiver must soothe (external regulation)

**3-6 months:**
- Self-soothing behaviors developing (thumb sucking)
- Caregiver support still primary

**6-12 months:**
- Increased self-directed coping (covering face to reduce stimulation)
- Caregiver remains important for emotional co-regulation

**12-24 months:**
- Frustration tolerance increasing (though tantrums appear)
- Language developing for emotion expression
- Caregiver guidance essential

**24-36 months:**
- Verbal expression of emotions
- Impulse control improving but still limited
- Peer interactions emerging; empathy developing

### Theory of Mind Development

- **Before 12 months**: Limited understanding of others' mental states
- **12-18 months**: Beginning to understand others have intentions (pointing for joint attention)
- **18-24 months**: Representational thinking; understanding symbolic games
- **2-3 years**: Beginning to understand others have beliefs/desires different from own
- **3+ years**: More developed theory of mind; understanding deception possible

**Neurobiological basis**: Temporal-parietal junction, prefrontal cortex, amygdala development allows increasing sophistication in social cognition.

## Factors Affecting Normal Development

### Genetic Factors
- Growth factors, neurotransmitters determine neuronal development
- Genetic timing controls myelination, synaptogenesis
- Genetic variation explains normal range of developmental timing

### Environmental Factors

**Enrichment:**
- Language exposure → language development
- Social interaction → social-emotional development
- Play/exploration → motor and cognitive development
- **Critical/sensitive periods**: Optimal windows for skill acquisition (language exposure most critical 6 months - 3 years)

**Deprivation Effects:**
- Language deprivation → lasting language impairment
- Social deprivation → attachment disorders, behavioral problems
- Sensory deprivation → sensory processing deficits
- **Evidence**: Studies of institutionalized children show significant delays reversible with enrichment if intervention early enough

### Nutritional Factors
- Protein, iron, iodine, vitamin B12 → myelin formation and neural function
- Deficiency → developmental delays that may or may not be reversible depending on timing and severity

### Stress and Trauma
- Chronic stress → elevated cortisol → affects hippocampal development
- Trauma in early childhood → amygdala hyperactivity, prefrontal cortex underactivity
- Effects on emotion regulation, learning, behavior
`,
        mnemonics: [
          {
            text: "MYELINATION SEQUENCE = Brainstem (reflex), Cerebellum (balance), Motor cortex (voluntary movement), Language areas (6mo-3yr)",
            explanation: "Order and timing of myelination explaining emergence of motor and language skills"
          },
          {
            text: "GRASP DEVELOPMENT = Primitive (subcortical) → Raking (4-6mo, no thumb) → Radial palmar (6mo, thumb involved) → Pincer (9-10mo, precise)",
            explanation: "Progressive cortical involvement in grasp development"
          },
          {
            text: "ATTACHMENT STAGES = Undiscriminating (0-2mo) → Discriminating (2-4mo) → Stranger anxiety (4-8mo) → Separation anxiety (8-18mo)",
            explanation: "Developmental progression of social attachment and anxiety"
          },
          {
            text: "EMOTION REGULATION = Extrinsic (0-3mo, caregiver sooths) → Self-soothing (3-6mo) → Co-regulation (6-12mo) → Self-directed (12mo+)",
            explanation: "Maturation of self-regulation abilities with caregiver support"
          }
        ],
        keyPoints: [
          "Myelination occurs in rostrocaudal and centripetal direction; allows increasingly complex motor and cognitive functions",
          "Primitive reflexes present at birth; integration into voluntary control represents CNS maturation; persistence beyond expected age indicates abnormality",
          "Language development requires both receptive and expressive areas; critical period 6 months-3 years for optimal language acquisition",
          "Attachment formation neurobiology involves oxytocin system, limbic structures; secure attachment foundational for emotional regulation",
          "Environmental enrichment (language, social interaction, play) crucial during sensitive periods; deprivation effects partially reversible with early intervention"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Growth and Development", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "7: Assessment of Growth and Development", edition: "21st" },
          { book: "Kandel's Principles of Neural Science", chapter: "Development of the Nervous System", edition: "6th" }
        ]
      },
      {
        layer: 3,
        slug: "developmental-milestones-clinical",
        title: "Developmental Milestones - Clinical",
        estimatedMinutes: 25,
        summary: "Clinical assessment of development; identification of delays; early intervention strategies; common red flags.",
        contentMd: `# Developmental Milestones - Clinical

## Clinical Assessment of Development

### History
- **Birth history**: Gestational age, complications, APGAR, NICU stay
- **Developmental history**: Age of milestone achievement (sitting, walking, first words)
- **Feeding and growth**: Developmental delays often accompanied by growth issues
- **Medical history**: Infections (meningitis), seizures, head trauma, chronic illness
- **Family history**: Developmental delays, autism, learning disorders, hearing loss
- **Environmental factors**: Socioeconomic status, parental education, language(s) spoken at home, caregiver consistency

### Physical Examination

**General Assessment:**
- Tone (hypotonia = floppiness, hypertonia = stiffness; abnormal suggests neurological issue)
- Posture and alignment
- Involuntary movements (tremor, athetosis may indicate CNS dysfunction)
- Dysmorphic features (suggest genetic syndromes)
- Primitive reflexes (persistence beyond expected age abnormal)

**Neurological Examination:**
- Cranial nerves (hearing, vision function)
- Motor strength and tone
- Reflexes (deep tendon, plantar)
- Gait (if walking age)
- Coordination (finger-to-nose test older children)
- Sensation assessment

**Developmental Testing:**
- **Subjective (parent report)**: Parent questionnaires (ASQ, PEDS), interview
- **Objective**: Standardized tools:
  - **Denver Developmental Screening Test (DDST)**: Screens 4 domains (gross motor, fine motor, language, social-personal); simple office screening
  - **Bayley Scales of Infant and Toddler Development**: Comprehensive assessment; requires trained assessor
  - **Mullen Scales**: Comprehensive cognitive assessment
  - **Autism Spectrum Disorder screening**: M-CHAT (18-24 months), SCQ

## Normal Developmental Variation

### Expected Range
- **Sitting**: 4-8 months (normal but concerning <4 mo or >10 mo)
- **Walking**: 10-18 months (normal but concerning if <8 mo or >20 mo)
- **First words**: 10-18 months (normal but concerning if <8 mo or >24 mo)
- **Two-word phrases**: 18-30 months

### What is NOT Necessarily Abnormal

**Late talker (normal language development):**
- 18-24 months: <50 words, no two-word phrases, BUT normal comprehension and non-verbal communication
- Often "late talker, early reader" pattern
- Prognosis: Most catch up by age 3 without intervention; some benefit from speech stimulation

**Early walker/Talker:**
- May also have higher accident risk (exploration + limited judgment)
- Generally good prognosis

**Gross motor variation:**
- Some children scoot (bottom scooting) instead of crawling; still develop normally
- Walking pattern variability (toe-walking, bowlegged) often resolves with maturation

## Developmental Delay: Identification and Management

### Definition of Developmental Delay
- **Significant delay**: Performing at <75% of expected ability for age in one domain
- **Global delay**: Delays in ≥2 developmental domains
- **Concern**: Scoring >2 SD below mean on standardized assessment

### Red Flags for Developmental Concern

**Gross Motor Red Flags:**
- No head control by 3-4 months
- Extreme hypotonia (floppy baby)
- Extreme hypertonia or stiffness
- No sitting by 9 months
- No standing by 18 months
- Asymmetrical movement (suggests hemiplegia)
- Persistent toe-walking after 2 years

**Fine Motor Red Flags:**
- No reaching by 6-7 months
- No pincer grasp by 12 months
- No scribbling by 18 months
- Persistent hand preference before 12 months (may indicate weakness opposite side)

**Language Red Flags:**
- No babbling by 6-9 months
- No response to name by 12 months
- No first words with meaning by 18 months
- Regression (loss of previously acquired skills)
- Limited comprehension of simple commands by 2 years
- Hearing loss (screen all infants; newborn hearing screening universal in India now)

**Social-Emotional Red Flags:**
- No social smile by 3 months
- No interest in social interaction (does not engage, avoids eye contact)
- No awareness of familiar people by 6-9 months
- No imitation by 12-18 months
- No pretend play by 2-3 years
- Severe tantrums, aggression, self-harm

**Autism Spectrum Disorder Screening (high-yield for exams):**
- Lack of joint attention (not pointing to show)
- Limited imitation
- Restricted/repetitive interests
- Limited social reciprocity
- Language delay (though not always present)
- Sensory sensitivities
- **Screening tools**: M-CHAT (18-24 months), SCQ (4+ years)
- **Diagnosis**: Requires developmental pediatrician or specialist; based on DSM-5 criteria

## Early Intervention

### Early Intervention Programs

**What is Early Intervention?**
- Services for children birth-3 years with developmental delays or disabilities
- Multidisciplinary approach (speech therapy, physical therapy, occupational therapy, developmental services)
- Home-based or center-based
- **Evidence-based**: Significantly improves outcomes if started early

**Access in India:**
- ICDS (Integrated Child Development Services) provides screening and basic services
- Private services (pediatric physical therapists, speech-language pathologists)
- Inclusive schools/centers for older children

### Intervention Strategies by Domain

**Speech and Language Delay:**
- Speech therapy: Articulation, language development, feeding/swallowing if needed
- Environmental language stimulation: Parent coaching on language exposure
- **Evidence**: Early therapy (before 3 years) associated with better long-term language outcomes

**Motor Delay:**
- Physical therapy: Facilitating movement patterns, strengthening, balance training
- Occupational therapy: Fine motor, self-care skills, adaptive equipment
- **Evidence**: Early PT/OT improves functional outcomes, may prevent contractures in conditions like cerebral palsy

**Social-Emotional and Behavioral:**
- Parent-child interaction therapy
- Cognitive-behavioral approaches (older children)
- Positive behavior support strategies
- Sensory integration therapy

**Autism Spectrum Disorder:**
- Early intensive behavioral intervention (EIBI)
- Applied Behavior Analysis (ABA)
- Social skills training
- Speech and occupational therapy
- **Timing**: Services begun by age 2-3 associated with better outcomes

## Special Populations

### Preterm Infants
- Use **corrected age** (chronological - weeks of prematurity) until age 3 years
- Expect delays if assessed by chronological age (appears delayed when normal by corrected age)
- Catch-up occurs by 18-24 months with adequate nutrition if no other complications

### Down Syndrome and Genetic Conditions
- Developmental delays expected; intervention tailored to syndrome
- Early intervention essential; many achieve relative independence with support
- Reassess abilities periodically; abilities often underestimated

### Children with Hearing Loss
- Critical to identify early (newborn screening)
- Cochlear implants or hearing aids + speech therapy → much better language outcomes
- Early exposure to sign language also important if using ASL

### Cerebral Palsy
- Abnormal tone (spasticity, athetosis, ataxia), weakness
- PT/OT essential; prevent contractures, improve function
- Speech/language therapy if involved
- Early intervention improves functional outcomes significantly

## Documentation and Referral

### When to Refer for Comprehensive Evaluation
- Significant deviation from expected milestones
- Concern for autism spectrum disorder
- Hearing loss
- Vision abnormalities
- Persistent primitive reflexes
- Regression of milestones
- Parent or professional concern despite screening tests reassuring

### Referral Options
- **Developmental pediatrician**: Comprehensive evaluation, management
- **Pediatric neurologist**: If concern for neurological disorder
- **Speech-language pathologist**: Language/feeding concerns
- **Physical/Occupational therapist**: Motor concerns
- **Psychologist**: Behavioral, emotional concerns
- **Ophthalmologist, Audiologist**: Vision/hearing concerns
`,
        mnemonics: [
          {
            text: "RED FLAG SUMMARY = No babbling (6-9mo) + No words (18mo) + No social smile (3mo) + No imitation (12mo) + Regression",
            explanation: "Critical developmental red flags across domains requiring evaluation"
          },
          {
            text: "CORRECTED AGE USE = Chronologic age minus weeks of prematurity; used until 3 years for assessment (not vaccination)",
            explanation: "Essential concept for preterm infant developmental assessment"
          },
          {
            text: "EARLY INTERVENTION TIMING = Most critical birth-3 years; speech/language, motor, behavioral therapy evidence-based",
            explanation: "Optimal window and intervention approaches for developmental delays"
          },
          {
            text: "AUTISM SCREENING = Lack of joint attention + Limited imitation + Repetitive interests + Language delay + Social difficulty",
            explanation: "Key features of autism spectrum disorder in early childhood"
          }
        ],
        keyPoints: [
          "Significant developmental delays are within 75% of expected ability for age or >2SD below mean; warrant evaluation and intervention",
          "Red flags include absence of developmental skills beyond expected age, regression, abnormal tone/movements, and lack of social engagement",
          "Corrected age essential for preterm infants until 3 years to avoid misdiagnosis of developmental delay",
          "Early intervention (birth-3 years) programs evidence-based for improving language, motor, and behavioral outcomes",
          "Autism spectrum disorder screening with M-CHAT at 18-24 months identifies children needing comprehensive evaluation"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Assessment of Growth and Development", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "7: Assessment of Growth and Development", edition: "21st" },
          { book: "DSM-5", chapter: "Neurodevelopmental Disorders (Autism Spectrum Disorder)", edition: "5th" }
        ]
      },
      {
        layer: 4,
        slug: "developmental-milestones-exam",
        title: "Developmental Milestones - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts: milestone ages, red flags, corrected age calculation, early intervention indications.",
        contentMd: `# Developmental Milestones - Exam Preparation

## Critical Age Milestones (MUST MEMORIZE)

### Major Gross Motor Milestones
- **Holds head up**: 2-3 months
- **Rolls over (tummy to back)**: 4-5 months
- **Sits with minimal support**: 6 months
- **Sits without support**: 8 months
- **Crawls**: 8-10 months
- **Pulls to stand**: 9-10 months
- **Stands with support (cruises)**: 10-12 months
- **Walks**: 12-14 months (range 10-18 months normal)
- **Runs**: 18-24 months
- **Climbs stairs**: 2-3 years

### Major Fine Motor Milestones
- **Raking grasp**: 5-6 months
- **Radial palmar grasp**: 6-7 months
- **Pincer grasp** (thumb + index): 9-10 months
- **Builds tower of 2 blocks**: 15 months
- **Scribbles with crayon**: 15-18 months
- **Builds tower of 6-7 blocks**: 2 years
- **Draws circle**: 3 years
- **Copies cross**: 4-5 years

### Major Language Milestones
- **Coos**: 2 months
- **Babbles** ("ba-ba," "da-da"): 6-9 months (NO MEANING)
- **Says first words with meaning**: 12 months (dada, mama, dog)
- **5-10 words**: 15 months
- **Two-word phrases**: 18-24 months (mama up, more milk)
- **50-word vocabulary**: 18-20 months
- **Two to three word sentences**: 2-3 years
- **Uses full sentences**: 3-4 years

### Major Social-Emotional Milestones
- **Social smile**: 2 months
- **Preference for familiar people**: 3-4 months
- **Stranger anxiety begins**: 6-8 months
- **Separation anxiety peaks**: 8-18 months
- **Waves bye-bye**: 8-10 months
- **Plays peek-a-boo**: 9-12 months
- **Shows affection**: 12 months
- **Parallel play** (plays alongside): 18-24 months
- **Interactive play** (plays with other children): 2-3 years

## Critical Red Flags by Age

### By 3 Months
- No head control
- Severe hypotonia or hypertonia
- No social smile
- Extreme irritability or lethargy

### By 6 Months
- No reaching/grasping
- Cannot sit with support
- No babbling
- No response to sounds
- Asymmetrical movement

### By 12 Months
- No pincer grasp (still raking at 12 mo)
- Not standing with support
- No babbling with consonants
- No first words (even without meaning)
- No eye contact or social engagement

### By 18 Months
- Not walking
- <10 words
- Not following simple commands
- No imitation of actions
- Severe behavioral problems

### By 24 Months
- <50 words vocabulary
- No two-word phrases
- Limited comprehension
- Not engaging with peers
- Signs of autism (no joint attention, limited imitation, restricted play)

### By 3 Years
- <200-word vocabulary
- No 2-3 word phrases
- Severe behavioral dyscontrol
- No interactive play
- Persistent primitive reflexes

## Corrected Age Calculation (CRITICAL for Preterm)

**Formula**: Corrected age = Chronological age - weeks of prematurity

**Example 1**: Child born at 28 weeks, now 6 months old
- Weeks of prematurity = 40 - 28 = 12 weeks = 2.8 months
- Corrected age = 6 - 2.8 = 3.2 months
- Assessment: Should be at 3-month milestones, NOT 6-month

**Example 2**: Child born at 32 weeks, now 18 months old
- Weeks of prematurity = 40 - 32 = 8 weeks = 1.85 months (approximately 2 months)
- Corrected age = 18 - 2 = 16 months
- Assessment: Should be at 16-month milestones

**When to stop using corrected age**: Until 3 years chronological age; after that use chronological age

**Important for vaccinations**: Use CHRONOLOGICAL age (not corrected) for vaccination schedule

## Early Intervention Indications

### Refer for Evaluation If:
- Significant delay in any domain (>25% below expected for age)
- Global delay (multiple domains affected)
- Red flags for autism (lack of joint attention, limited social engagement, restricted play, language delay)
- Regression of previously acquired skills
- Abnormal tone or movements
- Vision or hearing problems
- Parent or professional concern

### Evidence-Based Interventions
- **Speech therapy**: Language delay, articulation problems, feeding difficulties
- **Physical therapy**: Gross motor delays, abnormal tone, movement dysfunction
- **Occupational therapy**: Fine motor, self-care skills, sensory issues
- **Early behavioral intervention**: Autism spectrum disorder, behavioral problems
- **Prognosis**: Earlier intervention (before age 3) associated with better outcomes

## Special Populations: Key Points

### Late Talker (Important to Distinguish from Autism)
- **Definition**: <50 words by 24 months, no two-word phrases, BUT normal comprehension and social skills
- **Prognosis**: Most catch up by 3 years without formal therapy
- **What's NORMAL about late talkers**: Understand language, point to show, imitate actions, engage socially, play appropriately
- **Risk factors for worse prognosis**: Family history of speech delay, low comprehension, poor social engagement

### Down Syndrome
- Expect delays; develop at slower pace
- Early intervention essential; many achieve functional independence
- Evaluation of abilities should account for developmental level, not chronological age

### Cerebral Palsy
- Abnormalities of movement/tone earliest sign
- Early PT/OT prevents complications (contractures, deformities)
- Cognitive ability variable (not all have intellectual disability)

### Autism Spectrum Disorder
- **Key early signs**: Lack of joint attention (not pointing to show), limited imitation, repetitive behaviors, restricted interests, language delay, limited social reciprocity
- **Screening**: M-CHAT at 18-24 months; high specificity/sensitivity
- **Diagnosis age**: Can be reliable from 18-24 months onward
- **Intervention**: Early intensive behavioral intervention (EIBI) has best evidence for improving outcomes

## Frequently Asked Exam Questions

**Q: At what age does a child typically walk?**
A: 12-14 months on average; normal range 10-18 months

**Q: What is the most common first word spoken by an infant?**
A: Dada or mama (around 12 months); should be with meaning

**Q: What is corrected age and when is it used?**
A: Corrected age = chronological age - weeks of prematurity; used until 3 years for developmental assessment (not for vaccinations)

**Q: Child born at 30 weeks, now 12 months old. What corrected age should you assess?**
A: Weeks prematurity = 40 - 30 = 10 weeks = 2.3 months. Corrected age = 12 - 2.3 = 9.7 months (approximately 10 months)

**Q: What is the pincer grasp and at what age does it develop?**
A: Thumb + index finger opposition; develops at 9-10 months; sign of fine motor maturity

**Q: A 24-month-old has only 15 words and no two-word phrases. Is this developmental delay?**
A: Likely yes. Normal 24 months: 50+ words, two-word phrases. However, if comprehension and social skills normal, could be "late talker" (better prognosis). Would refer for speech evaluation.

**Q: List three red flags for autism spectrum disorder.**
A: (1) Lack of joint attention (not pointing to show), (2) Limited imitation of actions, (3) Restricted/repetitive interests, (4) Limited social reciprocity, (5) Language delay

**Q: At what age can you reliably diagnose autism?**
A: 18-24 months and onwards; M-CHAT screening sensitive at this age. Earlier identification allows earlier intervention.

**Q: What is the most important early intervention for a child with speech delay?**
A: Speech therapy, plus environmental language stimulation (parent coaching); both evidence-based. Best outcomes with early intervention (before 3 years).
`,
        mnemonics: [
          {
            text: "WALKING MILESTONES = Pulls to stand (9-10mo), Cruises (10-12mo), First steps (12-14mo), Runs (18-24mo)",
            explanation: "Sequence of gross motor development leading to independent walking"
          },
          {
            text: "FIRST WORDS = Babbling (6-9mo, NO meaning) vs First words (12mo, WITH meaning = dada, mama, dog)",
            explanation: "Critical distinction between babbling and meaningful language"
          },
          {
            text: "PINCER GRASP = 9-10 months (thumb + index); sign of fine motor maturity; after develops hand preference",
            explanation: "Key fine motor milestone indicating cortical maturation"
          },
          {
            text: "RED FLAGS = No babbling (9mo), No words (18mo), No walking (18-20mo), Regression, Autism signs (joint attention+imitation)",
            explanation: "High-yield red flags across ages for developmental concern"
          }
        ],
        keyPoints: [
          "First words with meaning appear around 12 months; babbling (6-9 months) is not meaningful language",
          "Pincer grasp (9-10 months) is a key fine motor milestone indicating maturation of motor cortex",
          "Corrected age used for preterm infants until 3 years; chronological age used for vaccinations",
          "Autism spectrum disorder red flags include lack of joint attention, limited imitation, and restricted play; M-CHAT screening at 18-24 months",
          "Early intervention (birth-3 years) is evidence-based and most effective when started early; referral indicated for delays or red flags"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Growth and Development", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "7: Assessment of Growth and Development", edition: "21st" },
          { book: "CDC Milestone Tracker", chapter: "Developmental Milestones by Age", edition: "2023" }
        ]
      },
      {
        layer: 5,
        slug: "developmental-milestones-active-recall",
        title: "Developmental Milestones - Active Recall",
        estimatedMinutes: 25,
        summary: "Q&A on milestone assessment, corrected age use, red flags, autism screening, and early intervention strategies.",
        contentMd: `# Developmental Milestones - Active Recall Q&A

## Flashcard Q&A Pairs

**Q1: A 10-month-old infant has no pincer grasp (still raking), is not pulling to stand, and says no meaningful words. When should you be concerned and what is your next step?**
A: By 10 months, infant should show pincer grasp (9-10 months normal), pulling to stand (9-10 months normal), and may have first word attempts. Absence of all three suggests delay or neurological issue. Next steps: (1) Detailed history: Birth history (gestational age, complications), milestones achieved to date, growth parameters, family history, language exposure. (2) Physical exam: Tone (hypotonia/hypertonia?), strength, primitive reflexes (should be mostly integrated by 10 months), asymmetry (suggest hemiparesis), general development appearance. (3) If concern confirmed: Referral to developmental pediatrician or early intervention program for comprehensive evaluation. (4) Possible underlying causes: Cerebral palsy (tone abnormality), intellectual disability, hearing loss (would explain lack of language response), nutritional deficiency, hypothyroidism (TSH/FT4 check). Do NOT reassure; refer for formal evaluation.

**Q2: A 14-month-old born at 28 weeks gestation is evaluated. Parents say the child is not yet walking independently. Is this concern?**
A: Calculate corrected age: Born at 28 weeks = 12 weeks prematurity = 3 months. Corrected age at 14 months chronological = 14 - 3 = 11 months. At 11 months corrected, expected milestone is pulling to stand/cruising, NOT walking independently. Walking typically 12-14 months corrected age (14-16 months chronological in this preterm child). So this is NORMAL for corrected age. Must counsel parents: "Your child is 11 months corrected (like an 11-month-old), not 14 months; developmental milestones normal for age." This prevents misdiagnosis of developmental delay in preterm infants.

**Q3: An 18-month-old has only 5 words, no two-word phrases, but mother says he understands "get your shoes" and "where's your bottle." He waves bye-bye, plays peek-a-boo, and engages well socially. Is this a red flag?**
A: By 18 months, expected: 10-20 words, understanding simple commands (which he has), social engagement (which he has). Child is low-end of normal for expressive language but has good comprehension and social skills. This is consistent with "late talker" pattern (delayed expressive language but normal comprehension and social skills). Red flags would be: Poor comprehension, lack of joint attention, limited social engagement, lack of imitation. Those are ABSENT here. Management: (1) Reassure parents; many late talkers catch up by 3 years without therapy, (2) Recommend language-rich environment (talking, reading, singing), (3) Recheck in 6 months; if caught up, no intervention needed, (4) If still significantly delayed by 2.5-3 years, refer for speech evaluation. This is NOT autism (good social skills, understanding language, joint attention normal). Most favorable prognosis among language-delay children.

**Q4: An 18-month-old is referred because he does not point to show things, engages minimally in social games, has limited vocabulary (8 words), and tends to line up toys repetitively rather than pretend play. What are your concerns?**
A: Multiple red flags for autism spectrum disorder: (1) Lack of joint attention (not pointing to show = one of earliest, most specific autism signs), (2) Limited social reciprocity (minimal engagement in games like peek-a-boo, limited imitation likely), (3) Language delay (8 words at 18 months is below expected), (4) Restricted/repetitive behavior (lining up toys is typical restricted play pattern; not pretend play). Management: (1) Administer M-CHAT screening (formal autism screener for 16-30 months); likely to be positive, (2) Refer for comprehensive developmental and autism diagnostic evaluation (developmental pediatrician or autism specialist), (3) If diagnosis confirmed: Refer for early intensive behavioral intervention (EIBI)/ABA (evidence-based for autism), speech/language therapy, occupational therapy, (4) Early intervention most important; outcomes better with early, intensive services. (5) Counsel parents: Can provide functional skills, improve communication, though core autism traits remain. Prognosis variable depending on baseline IQ, language, other factors.

**Q5: A 12-month-old born at 35 weeks has no meaningful words (though babbles), not pulling to stand, and mother notes episodes of stiffness in legs, especially when startled. What is your concern and management?**
A: Corrected age = 12 - (40-35) = 12 - 5 = 7 months. At 7 months corrected, no meaningful words expected yet (normal). Not pulling to stand expected at 7 months (will happen 9-10 months corrected = 14-15 months chronological). HOWEVER, the stiffness in legs, especially with startle, is concerning for HYPERTONIA → possible cerebral palsy (spasticity pattern). Management: (1) Detailed history: Neonatal complications (IVH, PVL, sepsis, seizures, other), feeding/suck quality, developmental progress, (2) Physical exam: Tone assessment (normal variation vs. hypertonia), strength, reflexes (brisk may indicate spasticity), ankle clonus (sign of spasticity), asymmetry (unilateral spasticity suggests hemiplegia), scarf sign (flexibility), popliteal angle (knee extension), heel-to-ear (hamstring tightness), (3) Imaging: MRI brain if available to assess for PVL (periventricular leukomalacia) or other structural abnormality from perinatal injury. (4) Referral to developmental pediatrician and pediatric physical therapist for: (a) Confirmation of cerebral palsy diagnosis, (b) Early PT to prevent contractures, improve motor function, (c) Monitor for associated conditions (seizures, vision problems, hearing loss, developmental delay). (5) Prognosis: Early intervention with PT improves functional outcomes significantly. Type (spastic dipleg ia, hemiplegia, quadriplegia), severity, presence of other disabilities determine long-term functional level.

**Q6: An 18-month-old from a multilingual household (parents speak Hindi and English) is slow to develop language. How do you counsel the parents?**
A: Multilingual exposure does NOT delay language development in typically developing children. The child is learning multiple languages simultaneously; total vocabulary across both languages may be 50+ words even if each language has fewer. To evaluate: (1) Count words in BOTH languages combined, not just English, (2) Normal 18 months: 10-20 words in single language OR equivalent vocabulary across both languages combined, (3) Comprehension: Ask if understands commands in both languages. Language is usually not the main issue in multilingual children. However, if: (1) Both languages combined show <10 words, (2) Poor comprehension in both languages, (3) Delayed motor milestones also, (4) Not engaging socially → then true developmental delay (not language-specific). Otherwise: Reassure parents; multilingualism is advantage, not disadvantage. Continue exposure to both languages. Many multilingual children continue with both languages, though may have academic preference for dominant language at school-age.

**Q7: How do you distinguish developmental delay from normal variation in development?**
A: Critical to avoid both over-diagnosis (unnecessary worry, overtreatment) and under-diagnosis (missing real delay). Key distinctions: (1) **Timeline assessment**: Milestone achieved later than expected but WITHIN normal range (upper limit of normal range) = normal variation. Example: Walking at 17 months (normal range 10-18 months) is normal, though late. (2) **Velocity assessment**: Is child progressing? Even if delayed, if advancing milestones steadily month-to-month, likely developmental variation. Example: At 20 months, child goes from no words to 10 words in past 2 months = positive velocity, likely catching up. (3) **Domain specificity**: Delay in ONE domain (e.g., language only, with normal gross motor, social skills) suggests domain-specific issue (late talker, speech delay), not global developmental disorder. (4) **Associated findings**: Abnormal tone, asymmetry, other neurological signs suggest pathology. Normal neuro exam + delay in one domain = more likely normal variation. (5) **Comprehension and social skills**: If normal comprehension and good social engagement → better prognosis, more likely normal variation. (6) **Growth parameters**: Proportionate growth despite delay → more likely normal development. Severe malnutrition causing delay would have poor growth. (7) **Family history**: Family history of late language development → familial pattern, better prognosis. Management approach: Distinguish by these factors; refer for evaluation if concern, but reassure if within normal variation.

**Q8: A 3-year-old is referred for evaluation due to apparent short stature and developmental delay. What does this combined finding suggest and what is your evaluation?**
A: Combined short stature + developmental delay (global) → suggests systemic disorder, NOT just developmental variation. Differential diagnosis: (1) **Chronic malnutrition**: Stunted growth + developmental delay common in undernutrition. Check growth chart, dietary history, socioeconomic factors. (2) **Hypothyroidism**: Short stature + delayed bone age + developmental delay. Check TSH, FT4. (3) **Down syndrome or other genetic syndrome**: Check dysmorphic features, family history, consider karyotype. (4) **Chronic illness**: TB, chronic kidney disease, etc. History important. (5) **CNS disorder**: Cerebral palsy or other neurological condition. Check tone, reflexes, neuroimaging. (6) **GH deficiency**: Less common but possible. Multiple pituitary hormone deficiency would have other signs (hypoglycemia, etc.). Evaluation: (1) Detailed history: Birth history, illnesses, feeding, family history, growth parameters, milestones, (2) Physical exam: Dysmorphic features, tone, neurological signs, general appearance, (3) Laboratory: Growth parameters (height, weight, head circumference on chart), TSH/FT4 (thyroid), CBC (anemia?), albumin/protein (nutrition), (4) Imaging: Chest X-ray if TB suspected, MRI brain if neurological concern, bone age X-ray if growth disorder suspected, (5) Referrals: Endocrinology (growth disorder), developmental pediatrics, genetics (if dysmorphic). Do NOT attribute to simple developmental variation; investigate underlying cause.

**Q9: A 2-month-old has no social smile and seems hypotonic. Parents say he was full term and healthy at birth. What is concerning?**
A: At 2 months, expected: Social smile is a major milestone; absence is red flag. Combined with hypotonia (floppy baby) → suggests significant neurological or metabolic disorder. Differential: (1) **Severe hypotonia + developmental delay**: Central hypotonia (brain/spinal cord), peripheral (anterior horn cell disease, muscle), or metabolic. (2) **Cerebral palsy** (rarely presents this early with hypotonia, more often later with spasticity), (3) **Severe nutritional deficiency** (unlikely with healthy-appearing term infant), (4) **Metabolic disorder**: Amino acid disorder (maple syrup urine disease), mitochondrial disease, metabolic acidosis. (5) **Infection** (TORCH, meningitis): Would expect fever, other signs. (6) **Spinal muscular atrophy** (SMA): Genetic disorder causing motor neuron degeneration; presents with hypotonia + weakness. Evaluation: (1) Urgent physical exam: Tone assessment (where is hypotonia? global? selective?), strength assessment (power in antigravity muscles), deep tendon reflexes (brisk, normal, or absent?), (2) Investigations: CBC (infection), metabolic panel (electrolytes, glucose, liver function), amino acid analysis or urine organic acids (metabolic disease), CK if muscle suspected, (3) Imaging: MRI brain if CNS concern, (4) Specialist referral: Urgent developmental pediatrics or neurology. Do NOT reassure; this is red flag requiring urgent evaluation. Prognosis varies widely depending on diagnosis; early recognition critical for some conditions.

**Q10: Compare late talker vs. autism spectrum disorder in an 18-month-old. What are the KEY distinguishing features?**
A: 

**LATE TALKER:**
- Definition: <50 words, no two-word phrases at 24 months (or fewer words at 18 months), BUT NORMAL EVERYTHING ELSE
- Language: Delayed expressive language; comprehension normal
- Social skills: NORMAL (good engagement, eye contact, social reciprocity)
- Imitation: Normal imitation of actions
- Play: Normal pretend play, not repetitive
- Non-verbal communication: Normal pointing, gesturing, showing toys to adults
- Joint attention: Normal (points to show things)
- Prognosis: Most catch up by age 3-4 without therapy
- Intervention: Optional; parent coaching on language stimulation often sufficient

**AUTISM SPECTRUM DISORDER:**
- Language: May be delayed expressive AND receptive; understanding limited
- Social skills: ABNORMAL (poor eye contact, limited social interest, minimal engagement)
- Imitation: Limited imitation of actions or gestures
- Play: Restricted/repetitive play (lining up toys, not pretend play)
- Non-verbal communication: Limited pointing to show, reduced gesturing
- Joint attention: LACKING (most specific early autism sign - not pointing to show)
- Behavior: Restricted interests, repetitive behaviors, sensory sensitivities
- Prognosis: Lifelong condition; intervention changes trajectory but doesn't resolve
- Intervention: Early intensive behavioral intervention (EIBI) evidence-based

**KEY DISTINCTION**: Social engagement and joint attention NORMAL in late talker, ABNORMAL in autism. If you see poor eye contact, no joint attention, and limited imitation = RED FLAG for autism, NOT late talker.
`,
        mnemonics: [
          {
            text: "CORRECTED AGE = Chronological - weeks prematurity; use until 3yrs for assessment; chronological age for vaccinations",
            explanation: "Critical calculation and timing for preterm infant assessment"
          },
          {
            text: "AUTISM RED FLAGS = No joint attention (not pointing to show) + Limited imitation + Restricted play + Language delay + Social difficulty",
            explanation: "Key distinguishing features of autism spectrum disorder"
          },
          {
            text: "LATE TALKER vs AUTISM = Late talker (NORMAL social/imitation/joint attention, delayed words only) vs ASD (ABNORMAL social/play/joint attention)",
            explanation: "Critical distinction for counseling and referral appropriateness"
          },
          {
            text: "RED FLAG AGES = 3mo (no smile), 6mo (no reaching), 9mo (no babbling), 12mo (no words), 18mo (no phrases), 24mo (no imitation)",
            explanation: "Timeline of developmental red flags across major domains"
          }
        ],
        keyPoints: [
          "Corrected age essential for preterm infants until 3 years; prevents misdiagnosis of developmental delay",
          "Late talker pattern (language delay only, with normal comprehension and social skills) has good prognosis; many catch up by age 3-4",
          "Autism spectrum disorder characterized by lack of joint attention, limited imitation, restricted play, AND language delay; early screening with M-CHAT at 18-24 months recommended",
          "Combined short stature and developmental delay suggests systemic disorder (malnutrition, hypothyroidism, genetic syndrome); requires investigation, not reassurance",
          "Early intervention (speech, PT, behavioral) evidence-based for improving outcomes in developmental delays if started before age 3"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Growth and Development", edition: "9th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "7: Assessment of Growth and Development", edition: "21st" },
          { book: "DSM-5 Diagnostic Criteria", chapter: "Autism Spectrum Disorder and Neurodevelopmental Disorders", edition: "5th" }
        ]
      }
    ]
  }
];
