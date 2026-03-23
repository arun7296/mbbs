import type { TopicLessons } from "./content-loader";

/**
 * 5-layer lessons for final batch 4.
 * Covers: Peripheral Nerve Injuries (OR-MOD-06-TOP-04),
 * Child Psychiatry: ADHD & ASD (PS-MOD-05-TOP-01).
 */
export const finalBatch4Lessons: TopicLessons[] = [
  // ═══════════════════════════════════════════════════════════════
  // OR-MOD-06-TOP-04: Peripheral Nerve Injuries
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "OR-MOD-06-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "peripheral-nerve-injuries-layer-1-foundation",
        title: "Peripheral Nerve Injuries - Foundation",
        estimatedMinutes: 20,
        summary: "Peripheral nerve injuries are classified by Seddon (neurapraxia, axonotmesis, neurotmesis) and Sunderland (Grades I-V). Common injuries include radial, ulnar, median, and common peroneal nerve injuries.",
        contentMd: `# Peripheral Nerve Injuries - Foundation

## Seddon Classification (1943)
| Type | Pathology | Wallerian Degeneration | Recovery |
|------|-----------|----------------------|----------|
| **Neurapraxia** | Myelin damage only | No | Complete (weeks-months) |
| **Axonotmesis** | Axon disrupted, endoneurium intact | Yes | Good (1mm/day, months) |
| **Neurotmesis** | Complete nerve transection | Yes (complete) | None without surgery |

## Sunderland Classification (1951)
| Grade | Structure | Equivalent | Recovery |
|-------|-----------|-----------|----------|
| I | Myelin only | Neurapraxia | Complete |
| II | Axon + myelin | Axonotmesis | Good |
| III | + Endoneurium | - | Fair |
| IV | + Perineurium | - | Poor |
| V | Complete transection | Neurotmesis | None |

## Wallerian Degeneration
- Distal nerve segment degenerates after axon transection
- Axon and myelin break down distal to injury
- Schwann cells proliferate and form tubes for regeneration
- Regeneration rate: 1 mm/day or 1 inch/month

## Common Peripheral Nerve Injuries

### Upper Limb
| Nerve | Common Injury | Clinical Sign |
|-------|--------------|--------------|
| Radial | Humerus shaft fracture | Wrist drop |
| Ulnar | Medial epicondyle fracture | Claw hand |
| Median (wrist) | Carpal tunnel, wrist laceration | Ape thumb deformity |
| Axillary | Shoulder dislocation | Deltoid paralysis |

### Lower Limb
| Nerve | Common Injury | Clinical Sign |
|-------|--------------|--------------|
| Common peroneal | Fibula neck fracture | Foot drop |
| Sciatic | Hip dislocation, injection injury | Foot drop + plantar weakness |
| Femoral | Pelvic fracture | Knee extension weakness |
| Tibial | Knee dislocation | Loss of plantar flexion |

> **Clinical Pearl**: Saturday night palsy (radial nerve compression from arm over chair) and injection palsy of sciatic nerve in the gluteal region are common in India.`,
        mnemonics: [
          { text: "Seddon's NAN: Neurapraxia, Axonotmesis, Neurotmesis (mild to severe)", explanation: "Three grades of nerve injury in order of severity" },
          { text: "1mm/day or 1 inch/month for nerve regeneration rate", explanation: "Standard regeneration rate after axonotmesis" },
          { text: "Wrist drop = Radial; Claw = Ulnar; Ape thumb = Median", explanation: "Three classic upper limb nerve injury deformities" }
        ],
        keyPoints: [
          "Neurapraxia: myelin only, no Wallerian degeneration, full recovery",
          "Axonotmesis: axon disrupted but endoneurium intact, regenerates 1mm/day",
          "Neurotmesis: complete transection, requires surgical repair",
          "Radial nerve: humerus fracture -> wrist drop",
          "Common peroneal: fibula neck fracture -> foot drop",
          "Wallerian degeneration occurs distal to injury site"
        ],
        textbookRefs: [
          { book: "Maheshwari & Mhaskar Essential Orthopaedics", chapter: "Peripheral Nerve Injuries", edition: "6th" },
          { book: "Campbell's Operative Orthopaedics", chapter: "Nerve Injuries", edition: "14th" }
        ]
      },
      {
        layer: 2,
        slug: "peripheral-nerve-injuries-layer-2-mechanism",
        title: "Peripheral Nerve Injuries - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed nerve anatomy, injury mechanisms, nerve conduction studies, electromyography, and regeneration process including Tinel sign progression.",
        contentMd: `# Peripheral Nerve Injuries - Mechanism

## Nerve Structure
- **Endoneurium**: Surrounds individual nerve fibers
- **Perineurium**: Surrounds fascicles (bundles of fibers)
- **Epineurium**: Surrounds entire nerve trunk
- **Vasa nervorum**: Blood supply to nerve

## Injury Mechanisms
| Mechanism | Example | Typical Grade |
|-----------|---------|--------------|
| Compression | Saturday night palsy | Neurapraxia |
| Traction/stretch | Brachial plexus injury | Axonotmesis |
| Laceration | Glass cut, knife wound | Neurotmesis |
| Fracture-associated | Humerus shaft -> radial | Variable |
| Injection injury | Gluteal injection -> sciatic | Variable |
| Ischemia | Compartment syndrome | Variable |

## Nerve Conduction Studies (NCS) and EMG

### NCS Findings
| Parameter | Neurapraxia | Axonotmesis | Neurotmesis |
|-----------|------------|-------------|-------------|
| Conduction across lesion | Blocked | Absent | Absent |
| Distal conduction | Normal | Absent (after 7-10 days) | Absent |
| Conduction velocity | Decreased | N/A | N/A |

### EMG Findings
| Finding | Significance |
|---------|-------------|
| Fibrillation potentials | Denervation (appears 2-3 weeks post-injury) |
| Positive sharp waves | Denervation |
| Nascent motor units | Early reinnervation |
| Giant polyphasic units | Reinnervation (collateral sprouting) |

## Regeneration Process
1. **Wallerian degeneration** (days 1-7): Distal axon + myelin break down
2. **Schwann cell proliferation**: Form Bands of Bungner (guidance tubes)
3. **Axonal sprouting**: Growth cone advances at ~1mm/day
4. **Reinnervation**: Axon reaches target muscle/sensory organ
5. **Maturation**: Myelination and functional recovery

## Tinel Sign
- Tapping over regenerating nerve produces tingling in its distribution
- **Advancing Tinel**: Sign progresses distally = good regeneration
- **Stationary Tinel**: Sign stays at injury site = poor regeneration
- Used to track nerve recovery over time

## Neuroma Formation
- After neurotmesis, if axons cannot find distal pathway
- Disorganized mass of axons, Schwann cells, and connective tissue
- **Painful neuroma**: Common complication; may need excision

## Order of Recovery After Nerve Injury
1. Motor recovery (proximal to distal muscles)
2. Sensory recovery: pain -> touch -> temperature -> proprioception
3. Sweating returns (sympathetic fibers recover early)`,
        mnemonics: [
          { text: "Fibrillations at 2-3 weeks = denervation on EMG", explanation: "EMG fibrillations appear 2-3 weeks after nerve injury" },
          { text: "Advancing Tinel = Good; Stationary Tinel = Bad", explanation: "Direction of Tinel sign progression indicates regeneration quality" }
        ],
        keyPoints: [
          "Nerve structure: endoneurium < perineurium < epineurium",
          "Wallerian degeneration occurs distal to injury within first week",
          "EMG fibrillations appear at 2-3 weeks indicating denervation",
          "Regeneration: 1mm/day along Bands of Bungner (Schwann cell tubes)",
          "Advancing Tinel sign indicates good nerve regeneration",
          "Neuroma forms when regenerating axons cannot find distal pathway"
        ],
        textbookRefs: [
          { book: "Maheshwari & Mhaskar Essential Orthopaedics", chapter: "Nerve Injury Pathology", edition: "6th" },
          { book: "Campbell's Operative Orthopaedics", chapter: "Nerve Repair", edition: "14th" }
        ]
      },
      {
        layer: 3,
        slug: "peripheral-nerve-injuries-layer-3-clinical",
        title: "Peripheral Nerve Injuries - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical examination of specific nerve injuries, surgical indications, nerve repair techniques, and rehabilitation principles.",
        contentMd: `# Peripheral Nerve Injuries - Clinical

## Clinical Examination by Nerve

### Radial Nerve
- **Motor test**: Wrist extension, finger MCP extension, thumb extension
- **Sensory**: 1st dorsal web space (anatomical snuffbox)
- **High injury (axilla)**: Loss of triceps + wrist extensors + finger extensors
- **Spiral groove injury**: Triceps spared (branches proximal); wrist/finger drop only
- **PIN injury (elbow)**: Finger drop without wrist drop, no sensory loss

### Ulnar Nerve
- **Motor test**: Finger abduction/adduction, Froment sign
- **Sensory**: Medial 1.5 fingers
- **Claw hand**: MCP hyperextension + IP flexion (ring and little fingers)
- **Paradox of ulnar nerve**: Higher injury = less clawing (FDP also lost)

### Median Nerve
- **Motor test**: Thumb opposition, pen-touching test
- **Sensory**: Lateral 3.5 fingers (palmar side)
- **Carpal tunnel**: Thenar atrophy, hand of benediction (when attempting fist)
- **Phalen test**: Sustained wrist flexion -> paresthesias in median distribution
- **Tinel sign**: Tapping over carpal tunnel reproduces symptoms

### Common Peroneal Nerve
- **Motor test**: Ankle dorsiflexion, foot eversion
- **Sensory**: Lateral leg and dorsum of foot
- **Foot drop**: Cannot dorsiflex foot; high-stepping gait
- **Cause**: Fibula neck fracture, tight cast, crossing legs

## Surgical Indications
| Indication | Timing |
|-----------|--------|
| Clean sharp laceration | Primary repair (within hours) |
| Closed injury (no improvement) | Explore at 3-6 months |
| Open dirty wound | Delayed repair (3-6 weeks) |
| Neuroma in continuity | NAP testing intraoperatively |

## Nerve Repair Techniques
- **Primary neurorrhaphy**: Direct end-to-end suture (best if tension-free)
- **Nerve grafting**: Sural nerve graft (donor) when gap >3cm
- **Nerve transfer**: Healthy nerve redirected to denervated muscle
- **Tendon transfer**: When nerve repair fails or is too delayed

## Rehabilitation
- Splinting to prevent contractures (dynamic splints)
- Electrical muscle stimulation to prevent denervation atrophy
- Graded physiotherapy as reinnervation occurs
- Sensory re-education (stereognosis training)

> **Clinical Pearl**: The ulnar paradox - higher ulnar nerve injuries show LESS clawing because the FDP to ring and little fingers (which causes IP flexion in claw) is also paralyzed.`,
        mnemonics: [
          { text: "Wrist drop = Radial; Foot drop = Common peroneal", explanation: "Two most commonly tested drop signs" },
          { text: "Ulnar paradox: higher injury = less clawing", explanation: "FDP paralysis at high injury prevents IP flexion component of claw" }
        ],
        keyPoints: [
          "Radial: wrist/finger drop; high vs low injury affects triceps",
          "Ulnar: claw hand, Froment sign; paradox - higher = less claw",
          "Median: thenar atrophy, hand of benediction, Phalen/Tinel positive",
          "Common peroneal: foot drop, high-stepping gait",
          "Primary repair for clean lacerations; explore at 3-6 months for closed injuries",
          "Nerve grafting (sural nerve donor) when gap >3cm"
        ],
        textbookRefs: [
          { book: "Maheshwari & Mhaskar Essential Orthopaedics", chapter: "Clinical Nerve Injuries", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Nerve Injuries", edition: "28th" }
        ]
      },
      {
        layer: 4,
        slug: "peripheral-nerve-injuries-layer-4-exam-prep",
        title: "Peripheral Nerve Injuries - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield comparison tables for Seddon/Sunderland, nerve-specific deformities, EMG findings, and surgical timing.",
        contentMd: `# Peripheral Nerve Injuries - Exam High Yield

## Nerve Injury Deformities
| Nerve | Deformity | Key Sign |
|-------|-----------|----------|
| Radial | Wrist drop | Cannot extend wrist/fingers |
| Ulnar | Claw hand | MCP hyperextension (ring, little) |
| Median (wrist) | Ape hand | Thenar atrophy, flat thenar |
| Median (elbow) | Hand of benediction | Cannot flex index/middle |
| Common peroneal | Foot drop | High-stepping gait |
| Axillary | Flattened deltoid | Regimental badge anesthesia |
| Long thoracic | Winged scapula | Push-wall test |

## EMG Timeline
| Time | Finding | Significance |
|------|---------|-------------|
| 0-2 weeks | Normal | Too early for denervation |
| 2-3 weeks | Fibrillations | Denervation confirmed |
| 3+ months | Nascent units | Early reinnervation |
| 6+ months | Polyphasic units | Reinnervation progressing |

## Nerve Injury Special Tests
| Test | Nerve | Positive Finding |
|------|-------|-----------------|
| Froment sign | Ulnar | Thumb IP flexion (FPL compensation) |
| Phalen test | Median | Tingling in median distribution |
| Tinel sign | Any | Tingling on tapping regenerating nerve |
| Card test | Ulnar | Cannot hold card between fingers |
| Pen-touching | Median | Cannot oppose thumb to finger tip |

## One-Liners
- Saturday night palsy: radial nerve at spiral groove
- Honeymoon palsy: radial nerve (partner sleeping on arm)
- Injection palsy: sciatic nerve (incorrect IM injection)
- Foot drop + inversion weakness: common peroneal (NOT sciatic)
- Regeneration rate: 1 mm/day (1 inch/month)
- Sural nerve: most common donor for nerve grafting
- Erb palsy: C5-C6 (shoulder); Klumpke: C8-T1 (hand)`,
        mnemonics: [
          { text: "Radial = Saturday night; Peroneal = Crossed legs", explanation: "Common compression mechanisms for these two nerves" },
          { text: "1 mm/day = nerve regeneration speed", explanation: "Use this to estimate recovery time based on distance to target muscle" }
        ],
        keyPoints: [
          "Wrist drop = radial; Claw = ulnar; Ape hand = median; Foot drop = peroneal",
          "EMG fibrillations at 2-3 weeks confirm denervation",
          "Froment sign tests ulnar nerve (adductor pollicis)",
          "Regeneration: 1mm/day; sural nerve is standard graft donor",
          "Advancing Tinel = good recovery; stationary = poor",
          "Ulnar paradox: higher injury shows less clawing"
        ],
        textbookRefs: [
          { book: "Maheshwari & Mhaskar Essential Orthopaedics", chapter: "Review", edition: "6th" }
        ]
      },
      {
        layer: 5,
        slug: "peripheral-nerve-injuries-layer-5-active-recall",
        title: "Peripheral Nerve Injuries - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for nerve injury classification, clinical signs, EMG interpretation, and surgical management.",
        contentMd: `# Peripheral Nerve Injuries - Active Recall

**Q1:** Name Seddon's three grades of nerve injury.
> Neurapraxia (myelin only), Axonotmesis (axon disrupted, endoneurium intact), Neurotmesis (complete transection)

**Q2:** What is Wallerian degeneration?
> Degeneration of nerve distal to injury site. Axon and myelin break down. Schwann cells proliferate to form Bands of Bungner for regeneration

**Q3:** Rate of nerve regeneration?
> 1 mm/day or 1 inch/month

**Q4:** Patient with humerus shaft fracture has wrist drop. Which nerve?
> Radial nerve (spiral groove of humerus)

**Q5:** Claw hand deformity indicates which nerve injury?
> Ulnar nerve. MCP hyperextension + IP flexion in ring and little fingers

**Q6:** What is the ulnar paradox?
> Higher ulnar nerve injury shows LESS clawing because FDP to ring/little (which causes IP flexion) is also paralyzed

**Q7:** What is Froment sign?
> Tests adductor pollicis (ulnar). Patient compensates weak adduction by flexing thumb IP using FPL (median nerve)

**Q8:** Fibula neck fracture causes injury to which nerve?
> Common peroneal nerve. Results in foot drop and loss of ankle dorsiflexion

**Q9:** When do EMG fibrillations appear after nerve injury?
> 2-3 weeks. Indicates denervation of muscle

**Q10:** What is advancing vs stationary Tinel sign?
> Advancing: tingling progresses distally (good regeneration). Stationary: stays at injury site (poor regeneration)

**Q11:** When should a closed nerve injury be surgically explored?
> At 3-6 months if no clinical or electrophysiological recovery

**Q12:** What nerve is the most common donor for grafting?
> Sural nerve (sensory nerve from posterior calf, easy to harvest, minimal morbidity)`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards covering classification, clinical signs, EMG, and surgery",
          "Tests Seddon and Sunderland classification",
          "Covers common nerve injuries with deformities",
          "Includes EMG timeline and Tinel sign interpretation"
        ],
        textbookRefs: [
          { book: "Maheshwari & Mhaskar Essential Orthopaedics", chapter: "Nerve Injuries", edition: "6th" }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PS-MOD-05-TOP-01: Child Psychiatry - ADHD & ASD
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "PS-MOD-05-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "adhd-asd-layer-1-foundation",
        title: "ADHD & Autism Spectrum Disorder - Foundation",
        estimatedMinutes: 20,
        summary: "ADHD presents with inattention, hyperactivity, and impulsivity before age 12. ASD presents with deficits in social communication and restricted/repetitive behaviors. Both are neurodevelopmental disorders.",
        contentMd: `# ADHD & Autism Spectrum Disorder - Foundation

## ADHD (Attention Deficit Hyperactivity Disorder)

### Definition
- Neurodevelopmental disorder with persistent inattention, hyperactivity, and impulsivity
- Onset before age 12; symptoms present in 2+ settings
- Prevalence: 5-7% in children (India: 1.6-12% in studies)

### DSM-5 Presentations
| Type | Core Symptoms |
|------|--------------|
| Predominantly inattentive | Difficulty sustaining attention, easily distracted, forgetful |
| Predominantly hyperactive-impulsive | Fidgeting, running/climbing, talking excessively, interrupting |
| Combined | Both inattention + hyperactivity-impulsivity |

### Diagnostic Criteria (6/9 symptoms needed)
**Inattention**: Fails to give close attention, difficulty sustaining attention, does not listen, fails to follow through, difficulty organizing, avoids sustained mental effort, loses things, easily distracted, forgetful

**Hyperactivity-Impulsivity**: Fidgets, leaves seat, runs/climbs, difficulty playing quietly, always on the go, talks excessively, blurts answers, cannot wait turn, interrupts

## ASD (Autism Spectrum Disorder)

### Definition
- Neurodevelopmental disorder with deficits in social communication/interaction AND restricted/repetitive behaviors
- Onset in early developmental period (usually recognized by 2-3 years)
- Prevalence: 1 in 100-150 children (India data limited)

### Two Core Domains (DSM-5)
**A. Social Communication/Interaction Deficits:**
- Reduced social-emotional reciprocity
- Deficits in nonverbal communication (eye contact, gestures, facial expression)
- Difficulty developing and maintaining relationships

**B. Restricted/Repetitive Behaviors (need 2/4):**
- Stereotyped motor movements or speech (hand flapping, echolalia)
- Insistence on sameness, rigid routines
- Highly restricted interests (abnormal intensity/focus)
- Hyper/hypo-reactivity to sensory input

### Severity Levels
| Level | Social Communication | Restricted/Repetitive |
|-------|---------------------|----------------------|
| Level 1 (Requiring support) | Difficulty initiating interactions | Inflexibility causes interference |
| Level 2 (Substantial support) | Marked deficits, limited initiation | Obvious to casual observer |
| Level 3 (Very substantial) | Severe deficits, very limited | Extreme difficulty with change |

> **Clinical Pearl**: In India, autism often presents late due to delayed recognition. Joint attention deficits (not following pointing, not showing objects) at 12-18 months are early red flags.`,
        mnemonics: [
          { text: "ADHD = Attention + Hyperactivity + Developmental onset (<12yr)", explanation: "Three core features: inattention, hyperactivity-impulsivity, childhood onset" },
          { text: "ASD = Social + Stereotyped (two core domains)", explanation: "Social communication deficits + restricted/repetitive behaviors" }
        ],
        keyPoints: [
          "ADHD: inattention + hyperactivity-impulsivity, onset before 12, present in 2+ settings",
          "Three ADHD presentations: inattentive, hyperactive-impulsive, combined",
          "ASD: social communication deficits + restricted/repetitive behaviors",
          "ASD severity: Level 1 (support) to Level 3 (very substantial support)",
          "Early ASD signs: no joint attention, no pointing, no pretend play by 18 months",
          "India: late recognition of autism due to awareness gaps"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 3: Developmental Disorders", edition: "10th" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Chapter 31: Child Psychiatry", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "adhd-asd-layer-2-mechanism",
        title: "ADHD & Autism Spectrum Disorder - Mechanism",
        estimatedMinutes: 30,
        summary: "Neurobiological basis of ADHD (prefrontal dopamine/norepinephrine deficits) and ASD (connectivity abnormalities, mirror neuron dysfunction), genetics, and pharmacological mechanisms.",
        contentMd: `# ADHD & ASD - Mechanism

## ADHD Neurobiology

### Dopamine Hypothesis
- Reduced dopamine in prefrontal cortex -> poor executive function
- Dopamine transporter (DAT) overactivity in striatum
- Methylphenidate blocks DAT -> increases synaptic dopamine

### Norepinephrine Hypothesis
- Deficient NE in prefrontal cortex
- Atomoxetine blocks NE reuptake -> improves attention
- Alpha-2 agonists (clonidine, guanfacine) enhance prefrontal NE signaling

### Brain Imaging
- Reduced prefrontal cortex volume and activity
- Smaller caudate nucleus and cerebellum
- Delayed cortical maturation (3-year lag in thickness)
- Reduced default mode network suppression

### Genetics
- Heritability: 70-80% (one of most heritable psychiatric disorders)
- Candidate genes: DAT1, DRD4, DRD5, SNAP25
- Polygenic: multiple small-effect genes

## ASD Neurobiology

### Connectivity Abnormalities
- Reduced long-range connectivity (between brain regions)
- Increased local connectivity (within regions)
- Result: poor integration of information across networks

### Mirror Neuron Dysfunction
- Reduced mirror neuron activity (Broca area, parietal cortex)
- Impaired ability to understand others' actions and emotions
- Basis for social communication deficits

### Brain Findings
- Accelerated brain growth in first 2 years (macrocephaly in some)
- Increased amygdala volume (anxiety, social processing)
- Reduced Purkinje cells in cerebellum
- Minicolumn abnormalities in cortex

### Genetics
- Heritability: 80-90%
- De novo mutations important (CHD8, SCN2A, SHANK3)
- Copy number variants (CNVs): 16p11.2 deletion/duplication
- Syndromic ASD: Fragile X, Tuberous sclerosis, Rett syndrome

## ADHD Pharmacology
| Drug | Mechanism | Type |
|------|-----------|------|
| Methylphenidate | DAT blockade | Stimulant (1st line) |
| Amphetamine | DA/NE release + reuptake block | Stimulant |
| Atomoxetine | Selective NE reuptake inhibitor | Non-stimulant |
| Clonidine | Alpha-2 agonist | Non-stimulant |
| Guanfacine | Alpha-2 agonist | Non-stimulant |

## ASD - No Core Pharmacotherapy
- No drug treats core social deficits
- Medications target comorbidities: irritability (risperidone, aripiprazole), ADHD symptoms, anxiety, sleep
- Behavioral therapy is primary intervention`,
        mnemonics: [
          { text: "ADHD = Dopamine Deficit in prefrontal cortex", explanation: "Methylphenidate works by blocking dopamine transporter to increase synaptic dopamine" },
          { text: "ASD = Connectivity + Mirror neuron problems", explanation: "Reduced long-range connections and mirror neuron dysfunction explain social deficits" }
        ],
        keyPoints: [
          "ADHD: reduced prefrontal dopamine and norepinephrine",
          "Methylphenidate blocks DAT; atomoxetine blocks NET",
          "ADHD heritability 70-80%; genes: DAT1, DRD4",
          "ASD: reduced long-range connectivity, mirror neuron dysfunction",
          "ASD: accelerated early brain growth, increased amygdala volume",
          "No drug treats core ASD social deficits; behavioral therapy is primary"
        ],
        textbookRefs: [
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Chapter 31: ADHD and ASD", edition: "12th" },
          { book: "KD Tripathi Essentials of Pharmacology", chapter: "Chapter 32", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "adhd-asd-layer-3-clinical",
        title: "ADHD & Autism Spectrum Disorder - Clinical Application",
        estimatedMinutes: 20,
        summary: "Assessment, diagnosis, multimodal treatment of ADHD (behavioral + pharmacological), early intervention for ASD, and India-specific challenges.",
        contentMd: `# ADHD & ASD - Clinical Management

## ADHD Assessment
1. **Clinical interview**: Parent, teacher, child reports
2. **Rating scales**: Conners, Vanderbilt, SNAP-IV
3. **Developmental history**: Milestones, academic performance
4. **Rule out**: Vision/hearing problems, learning disabilities, anxiety, mood disorders
5. **Comorbidities**: ODD (40%), anxiety (25%), learning disability (25%), conduct disorder

## ADHD Treatment (Multimodal)

### Behavioral Interventions
- Parent training in behavior management
- Classroom accommodations (preferential seating, extra time)
- Organizational skills training
- CBT for older children/adolescents

### Pharmacological
- **First line**: Methylphenidate (Ritalin) - stimulant
- **Dose**: Start low (5-10 mg), titrate to effect
- **Monitoring**: Height, weight, BP, heart rate
- **Side effects**: Appetite suppression, insomnia, growth deceleration
- **Non-stimulant alternative**: Atomoxetine (if stimulant contraindicated/ineffective)
- **Drug holiday**: Consider during school vacations to assess ongoing need

### Age-Based Approach
| Age | First Line | Second Line |
|-----|-----------|-------------|
| <6 years | Behavioral therapy ONLY | Consider methylphenidate if severe |
| 6-12 years | Methylphenidate + behavioral | Atomoxetine, guanfacine |
| >12 years | Methylphenidate + CBT | Atomoxetine, lisdexamfetamine |

## ASD Assessment
1. **Screening**: M-CHAT-R at 18 and 24 months
2. **Diagnostic**: ADOS-2 (gold standard), ADI-R
3. **Comprehensive evaluation**: Cognitive testing, speech-language, adaptive behavior
4. **Medical workup**: Hearing test, genetic testing (Fragile X, microarray)

## ASD Intervention
- **Applied Behavior Analysis (ABA)**: Gold standard behavioral therapy
- **Speech therapy**: For communication deficits
- **Occupational therapy**: Sensory processing, daily living skills
- **Social skills training**: Group-based programs
- **Early intervention**: Before age 3 gives best outcomes
- **Medications**: Only for comorbid symptoms (risperidone for irritability)

## India-Specific Challenges
- **ADHD**: Often dismissed as "naughty child" or "lack of discipline"
- **ASD**: Late diagnosis (average 4-5 years vs 2-3 years in Western countries)
- **Limited specialists**: Few child psychiatrists per population
- **Stigma**: Mental health stigma affects treatment seeking
- **Methylphenidate**: Available but underprescribed due to stimulant fears
- **ABA therapy**: Limited availability and expensive

> **Clinical Pearl**: In India, ADHD is often underdiagnosed because hyperactivity may be attributed to poor parenting or "laziness." Screening at school health checkups could improve early identification.`,
        mnemonics: [
          { text: "ADHD <6 = Behavior first; 6+ = Behavior + Methylphenidate", explanation: "Age-based treatment approach for ADHD" },
          { text: "ASD = ABA (Applied Behavior Analysis) is gold standard therapy", explanation: "Behavioral intervention is primary treatment for ASD" }
        ],
        keyPoints: [
          "ADHD: behavioral therapy first in <6yr; methylphenidate + behavioral in 6+",
          "Methylphenidate side effects: appetite loss, insomnia, growth deceleration",
          "ADHD comorbidities: ODD (40%), anxiety (25%), learning disabilities (25%)",
          "ASD screening: M-CHAT-R at 18 and 24 months",
          "ASD gold standard: ADOS-2 for diagnosis, ABA for treatment",
          "Early intervention (before 3 years) gives best ASD outcomes"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Developmental Disorders", edition: "10th" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Chapter 31", edition: "12th" }
        ]
      },
      {
        layer: 4,
        slug: "adhd-asd-layer-4-exam-prep",
        title: "ADHD & Autism Spectrum Disorder - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield comparison tables, diagnostic criteria thresholds, drug mechanisms, and screening tools for NEXT/NEET PG.",
        contentMd: `# ADHD & ASD - Exam High Yield

## ADHD vs ASD Comparison
| Feature | ADHD | ASD |
|---------|------|-----|
| Core deficit | Attention + executive function | Social communication |
| Onset recognition | School age (6-7yr) | Early childhood (2-3yr) |
| Social skills | Impaired by inattention | Fundamentally impaired |
| Repetitive behaviors | No | Yes (core feature) |
| First-line treatment | Methylphenidate | ABA therapy |
| Drug for core symptoms | Yes (stimulants) | No |
| Heritability | 70-80% | 80-90% |

## ADHD Drug Summary
| Drug | Class | Mechanism | Key Side Effect |
|------|-------|-----------|----------------|
| Methylphenidate | Stimulant | DAT block | Appetite loss, insomnia |
| Atomoxetine | Non-stimulant | NET block | GI upset, hepatotoxicity (rare) |
| Clonidine | Alpha-2 agonist | Prefrontal NE | Sedation, hypotension |
| Guanfacine | Alpha-2 agonist | Prefrontal NE | Sedation |

## ASD Associated Conditions
- Intellectual disability (30-40%)
- Epilepsy (20-30%)
- Fragile X syndrome (2-3%)
- Tuberous sclerosis (1-2%)
- ADHD symptoms (30-50%)

## One-Liners
- ADHD diagnosis needs 6/9 symptoms + onset <12yr + 2 settings
- M-CHAT-R: screening tool for ASD at 18 and 24 months
- ADOS-2: gold standard diagnostic tool for ASD
- Methylphenidate: first-line ADHD drug in children >6yr
- Risperidone: FDA-approved for ASD-associated irritability
- No drug holiday for atomoxetine (unlike stimulants)
- Fragile X: most common genetic cause of ASD + intellectual disability

## Previous Year Themes
- ADHD diagnostic criteria
- Methylphenidate mechanism
- ASD core features
- Difference between ADHD and ASD
- Screening tools for ASD
- Drug treatment of ADHD by age`,
        mnemonics: [
          { text: "Methylphenidate = DAT Blocker = 1st line ADHD in >6yr", explanation: "Blocks dopamine transporter, increases synaptic dopamine in prefrontal cortex" },
          { text: "M-CHAT for ASD; SNAP-IV for ADHD", explanation: "Key screening tools for each condition" }
        ],
        keyPoints: [
          "ADHD: 6/9 symptoms + <12yr onset + 2 settings",
          "Methylphenidate first-line >6yr; behavioral therapy alone <6yr",
          "ASD: social communication + restricted/repetitive (both needed)",
          "M-CHAT-R at 18 and 24 months; ADOS-2 for diagnosis",
          "Risperidone/aripiprazole for ASD irritability (not core symptoms)",
          "Fragile X: most common genetic cause of ASD + intellectual disability"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Review", edition: "10th" }
        ]
      },
      {
        layer: 5,
        slug: "adhd-asd-layer-5-active-recall",
        title: "ADHD & Autism Spectrum Disorder - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for ADHD and ASD diagnosis, treatment, drug mechanisms, and screening tools.",
        contentMd: `# ADHD & ASD - Active Recall

**Q1:** Three presentations of ADHD?
> Predominantly inattentive, predominantly hyperactive-impulsive, combined

**Q2:** Age of onset requirement for ADHD diagnosis?
> Before 12 years, symptoms present in at least 2 settings

**Q3:** First-line drug for ADHD in children >6 years?
> Methylphenidate (stimulant, blocks dopamine transporter)

**Q4:** What is the non-stimulant alternative for ADHD?
> Atomoxetine (selective norepinephrine reuptake inhibitor)

**Q5:** Main side effects of methylphenidate?
> Appetite suppression, insomnia, growth deceleration, tachycardia

**Q6:** Two core domains of ASD (DSM-5)?
> Social communication/interaction deficits AND restricted/repetitive behaviors

**Q7:** What screening tool for ASD? At what ages?
> M-CHAT-R at 18 months and 24 months

**Q8:** Gold standard diagnostic tool for ASD?
> ADOS-2 (Autism Diagnostic Observation Schedule)

**Q9:** What is ABA therapy?
> Applied Behavior Analysis: gold standard behavioral therapy for ASD. Uses positive reinforcement to teach social, communication, and adaptive skills

**Q10:** Is there a drug for core ASD symptoms?
> No. Medications only treat comorbidities (risperidone for irritability, methylphenidate for ADHD symptoms)

**Q11:** Most common genetic condition associated with ASD?
> Fragile X syndrome (FMR1 gene, CGG repeat expansion, X-linked)

**Q12:** What is the ADHD treatment approach for children under 6?
> Behavioral therapy ONLY as first-line. Pharmacotherapy considered only if severe and behavioral therapy insufficient`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards covering ADHD and ASD diagnosis, treatment, and screening",
          "Tests drug mechanisms and age-based treatment approaches",
          "Includes screening tools and gold standard assessments",
          "Reinforces India-specific challenges in diagnosis"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Developmental Disorders", edition: "10th" },
          { book: "Kaplan & Sadock's Synopsis of Psychiatry", chapter: "Chapter 31", edition: "12th" }
        ]
      }
    ]
  }
];
