import type { TopicLessons } from "./content-loader";

/**
 * 5-layer lessons for Anatomy remaining topics.
 * Covers Brachial Plexus (AN-MOD-01-TOP-05).
 * Primary ref: BD Chaurasia Upper Limb 8th ed, Netter's Atlas 6th ed.
 */
export const anatomyRemainingLessons: TopicLessons[] = [
  // ─── Topic: Brachial Plexus (AN-MOD-01-TOP-05) ─────────────────
  {
    topicCode: "AN-MOD-01-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "brachial-plexus-layer-1-foundation",
        title: "Brachial Plexus - Foundation",
        estimatedMinutes: 20,
        summary: "The brachial plexus is formed from ventral rami of C5-T1 and supplies motor and sensory innervation to the upper limb. It is organized into roots, trunks, divisions, cords, and terminal branches.",
        contentMd: `# Brachial Plexus - Foundation

## Formation
- **Nerve roots**: Ventral rami of C5, C6, C7, C8, T1
- **Location**: Emerges between anterior and middle scalene muscles (interscalene triangle)
- **Course**: Posterior triangle of neck -> behind clavicle -> axilla -> upper limb

## Organization (5 Levels)

### Roots (5)
- C5, C6, C7, C8, T1 ventral rami
- Lie between anterior and middle scalene muscles
- Prefixed plexus: C4-C8; Postfixed plexus: C6-T2

### Trunks (3)
| Trunk | Formation | Location |
|-------|-----------|----------|
| **Upper** | C5 + C6 | Posterior triangle of neck |
| **Middle** | C7 alone | Posterior triangle of neck |
| **Lower** | C8 + T1 | Behind clavicle |

### Divisions (6)
- Each trunk splits into **anterior** and **posterior** divisions
- Anterior divisions supply flexor compartments
- Posterior divisions supply extensor compartments

### Cords (3)
| Cord | Formation | Named by relation to |
|------|-----------|---------------------|
| **Lateral** | Anterior divisions of upper + middle trunks | Lateral to 2nd part of axillary artery |
| **Medial** | Anterior division of lower trunk | Medial to 2nd part of axillary artery |
| **Posterior** | All 3 posterior divisions | Posterior to 2nd part of axillary artery |

### Terminal Branches (5)
1. **Musculocutaneous nerve** (lateral cord) - C5, C6, C7
2. **Median nerve** (lateral + medial cords) - C5-T1
3. **Ulnar nerve** (medial cord) - C8, T1
4. **Radial nerve** (posterior cord) - C5-T1
5. **Axillary nerve** (posterior cord) - C5, C6

## Relations
- Subclavian artery lies anterior and inferior to plexus
- Subclavian vein is separated by anterior scalene from plexus
- Axillary artery is surrounded by the three cords in the axilla

> **Clinical Pearl**: The brachial plexus is palpable in the posterior triangle of the neck, between the sternocleidomastoid and trapezius muscles. This is the site for interscalene nerve block.`,
        mnemonics: [
          { text: "Robert Taylor Drinks Cold Beer", explanation: "Roots, Trunks, Divisions, Cords, Branches - order of plexus components" },
          { text: "5-3-6-3-5", explanation: "5 roots, 3 trunks, 6 divisions, 3 cords, 5 terminal branches" },
          { text: "LMU for lateral cord branches", explanation: "Lateral pectoral, Musculocutaneous, lateral head of Median" }
        ],
        keyPoints: [
          "Brachial plexus: ventral rami of C5-T1",
          "3 trunks: Upper (C5+C6), Middle (C7), Lower (C8+T1)",
          "Cords named by relation to 2nd part of axillary artery",
          "5 terminal branches: musculocutaneous, median, ulnar, radial, axillary",
          "Anterior divisions supply flexors; posterior divisions supply extensors"
        ],
        textbookRefs: [
          { book: "BD Chaurasia Human Anatomy", chapter: "Upper Limb - Chapter 2", edition: "8th" },
          { book: "Netter's Atlas of Human Anatomy", chapter: "Upper Limb - Brachial Plexus", edition: "7th" }
        ]
      },
      {
        layer: 2,
        slug: "brachial-plexus-layer-2-mechanism",
        title: "Brachial Plexus - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed branching pattern, course of each terminal nerve, segmental innervation of muscles, dermatome maps, and branches arising at each level of the plexus.",
        contentMd: `# Brachial Plexus - Detailed Anatomy

## Branches from Roots
| Branch | Root | Muscle Supplied |
|--------|------|----------------|
| Dorsal scapular nerve | C5 | Rhomboid major, minor; levator scapulae |
| Long thoracic nerve | C5, C6, C7 | Serratus anterior |
| Nerve to subclavius | C5, C6 | Subclavius |
| Phrenic nerve contribution | C5 (partial) | Diaphragm (via phrenic) |

## Branches from Trunks
- **Suprascapular nerve** (upper trunk, C5-C6): Supraspinatus + Infraspinatus
- **Nerve to subclavius** (upper trunk): Subclavius muscle

## Branches from Cords

### Lateral Cord (C5, C6, C7)
| Branch | Supply |
|--------|--------|
| Lateral pectoral nerve | Pectoralis major (clavicular head) |
| Musculocutaneous nerve | Coracobrachialis, biceps brachii, brachialis |
| Lateral root of median nerve | Joins medial root to form median nerve |

### Medial Cord (C8, T1)
| Branch | Supply |
|--------|--------|
| Medial pectoral nerve | Pectoralis major + minor |
| Medial cutaneous nerve of arm | Skin of medial arm |
| Medial cutaneous nerve of forearm | Skin of medial forearm |
| Ulnar nerve | FCU, medial FDP, most intrinsic hand muscles |
| Medial root of median nerve | Joins lateral root |

### Posterior Cord (C5-T1)
| Branch | Supply |
|--------|--------|
| Upper subscapular nerve | Subscapularis (upper part) |
| Thoracodorsal nerve | Latissimus dorsi |
| Lower subscapular nerve | Subscapularis (lower) + teres major |
| Axillary nerve | Deltoid, teres minor |
| Radial nerve | Triceps, anconeus, brachioradialis, all extensors |

## Terminal Nerve Courses

### Musculocutaneous Nerve (C5-C7)
- Pierces coracobrachialis -> courses between biceps and brachialis
- Supplies: coracobrachialis, biceps brachii, brachialis (BBC)
- Continues as lateral cutaneous nerve of forearm

### Median Nerve (C5-T1)
- Formed by union of lateral and medial roots anterior to axillary artery
- Crosses brachial artery from lateral to medial in mid-arm
- Enters cubital fossa medial to brachial artery and biceps tendon
- Passes through pronator teres and FDS arch
- Gives anterior interosseous nerve in forearm
- Enters hand via carpal tunnel

### Ulnar Nerve (C8-T1)
- Passes posterior to medial epicondyle (cubital tunnel)
- Enters hand via Guyon canal (ulnar tunnel)
- Divides into superficial and deep branches in hand

### Radial Nerve (C5-T1)
- Largest branch of brachial plexus
- Winds around humerus in spiral groove
- Divides into superficial (sensory) and posterior interosseous (motor) branches at elbow

### Axillary Nerve (C5-C6)
- Passes through quadrilateral space with posterior circumflex humeral artery
- Wraps around surgical neck of humerus

## Segmental Innervation
| Root | Key Muscles | Key Reflex |
|------|------------|------------|
| C5 | Deltoid, supraspinatus, infraspinatus, biceps | Biceps reflex |
| C6 | Brachioradialis, wrist extensors | Brachioradialis reflex |
| C7 | Triceps, wrist flexors, finger extensors | Triceps reflex |
| C8 | Finger flexors (FDP), hand intrinsics | Finger jerk |
| T1 | Hand intrinsics (interossei, lumbricals) | None reliable |

## Dermatomes of Upper Limb
| Dermatome | Area |
|-----------|------|
| C5 | Lateral shoulder (regimental badge area) |
| C6 | Thumb and lateral forearm |
| C7 | Middle finger, dorsum of hand |
| C8 | Little finger, medial forearm |
| T1 | Medial arm and axilla |`,
        mnemonics: [
          { text: "BBC for musculocutaneous", explanation: "Biceps, Brachialis, Coracobrachialis - all supplied by musculocutaneous nerve" },
          { text: "LOAF for median nerve in hand", explanation: "Lumbricals 1-2, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis - median nerve hand muscles" },
          { text: "Radial nerve = all extensors", explanation: "Remember: posterior cord -> posterior compartment -> extensors" }
        ],
        keyPoints: [
          "Long thoracic nerve (C5-C7) supplies serratus anterior; injury causes winging of scapula",
          "Suprascapular nerve supplies supraspinatus and infraspinatus (shoulder abduction + external rotation)",
          "Musculocutaneous pierces coracobrachialis and supplies BBC muscles",
          "Median nerve enters hand through carpal tunnel; ulnar through Guyon canal",
          "Radial nerve is the largest branch; winds in spiral groove of humerus",
          "C5 = shoulder, C6 = elbow flexion, C7 = elbow extension, C8-T1 = hand",
          "Axillary nerve passes through quadrilateral space"
        ],
        textbookRefs: [
          { book: "BD Chaurasia Human Anatomy", chapter: "Upper Limb - Chapters 2-5", edition: "8th" },
          { book: "Gray's Anatomy", chapter: "Brachial Plexus", edition: "42nd" },
          { book: "Netter's Atlas of Human Anatomy", chapter: "Upper Limb Nerves", edition: "7th" }
        ]
      },
      {
        layer: 3,
        slug: "brachial-plexus-layer-3-clinical",
        title: "Brachial Plexus - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical injuries of the brachial plexus include Erb-Duchenne palsy (upper trunk), Klumpke palsy (lower trunk), individual nerve injuries, and thoracic outlet syndrome.",
        contentMd: `# Brachial Plexus - Clinical Correlations

## Erb-Duchenne Palsy (Upper Trunk Injury: C5-C6)

### Mechanism
- Birth injury: forceful lateral flexion of head away from shoulder during delivery
- Adults: fall on shoulder, motorcycle accidents

### Clinical Features
- **Waiter's tip position**: arm adducted, medially rotated, forearm pronated, wrist flexed
- **Lost movements**: shoulder abduction (deltoid), lateral rotation (infraspinatus), elbow flexion (biceps), supination
- **Reflexes lost**: biceps jerk, brachioradialis jerk
- **Sensory loss**: lateral arm and forearm (C5-C6 dermatome)

### Prognosis
- Generally good in birth injuries with conservative management
- Physiotherapy and splinting in functional position

## Klumpke Palsy (Lower Trunk Injury: C8-T1)

### Mechanism
- Forceful abduction of arm above head (clutching during fall)
- Birth injury: breech delivery with arm trapped overhead

### Clinical Features
- **Claw hand**: MCP hyperextension + IP flexion (due to loss of intrinsics)
- **Lost movements**: all intrinsic hand muscles, grip strength markedly reduced
- **Horner syndrome**: if T1 sympathetic fibers involved (ptosis, miosis, anhidrosis, enophthalmos)
- **Sensory loss**: medial arm and hand (C8-T1 dermatome)

### Prognosis
- Worse than Erb palsy; often requires surgical intervention

## Individual Nerve Injuries

### Radial Nerve (Spiral Groove)
- **Cause**: mid-shaft humerus fracture, Saturday night palsy (arm over chair)
- **Signs**: wrist drop, finger drop, loss of extension at MCP joints
- **Sensory loss**: 1st dorsal web space (anatomical snuffbox area)
- **Triceps spared** if injury is below spiral groove

### Axillary Nerve
- **Cause**: anterior shoulder dislocation, surgical neck fracture of humerus
- **Signs**: deltoid paralysis (loss of arm abduction 15-90 degrees), regimental badge anesthesia
- **Test**: abduction against resistance with arm at 90 degrees

### Musculocutaneous Nerve
- **Cause**: anterior shoulder dislocation, stab wounds
- **Signs**: weakness of elbow flexion (biceps, brachialis), loss of lateral forearm sensation

### Long Thoracic Nerve
- **Cause**: mastectomy, axillary lymph node dissection, stab wounds, heavy backpacks
- **Sign**: winging of scapula (medial border protrudes when pushing against wall)

### Median Nerve (Carpal Tunnel)
- **Cause**: repetitive strain, pregnancy, hypothyroidism, acromegaly, RA
- **Signs**: thenar atrophy, hand of benediction (inability to flex index and middle fingers)
- **Tests**: Phalen test (wrist flexion 60s), Tinel sign (tapping over carpal tunnel)

### Ulnar Nerve (Cubital Tunnel)
- **Cause**: medial epicondyle fracture, prolonged elbow flexion, cubital tunnel compression
- **Signs**: claw hand (4th and 5th fingers), hypothenar atrophy, Froment sign positive
- **Froment sign**: patient compensates weak adductor pollicis by flexing thumb IP joint (FPL - median nerve)

## Thoracic Outlet Syndrome
- Compression of lower trunk (C8-T1) or subclavian vessels between scalene muscles and 1st rib
- Causes: cervical rib, Pancoast tumor, scalene hypertrophy
- **Neurogenic TOS**: ulnar paresthesias, intrinsic hand weakness
- **Vascular TOS**: pale/cold hand, Raynaud phenomenon

> **Clinical Pearl**: Cervical rib is present in 0.5% of population but symptomatic in only 10% of those. Most common presentation is neurogenic (95%).`,
        mnemonics: [
          { text: "Erb's = Elevator broken (shoulder and elbow)", explanation: "Cannot abduct shoulder or flex elbow - waiter's tip position" },
          { text: "Klumpke = Klaw hand + possible Horner", explanation: "Lower trunk C8-T1 injury causes claw hand; T1 sympathetic damage causes Horner syndrome" },
          { text: "WRIST drop = Radial nerve", explanation: "Radial nerve injury at spiral groove of humerus causes wrist and finger drop" }
        ],
        keyPoints: [
          "Erb palsy: C5-C6, waiter's tip, birth injury or shoulder trauma, good prognosis",
          "Klumpke palsy: C8-T1, claw hand, may have Horner syndrome, worse prognosis",
          "Radial nerve at spiral groove: wrist drop, spares triceps if distal",
          "Axillary nerve: anterior dislocation, regimental badge anesthesia",
          "Long thoracic nerve injury: winging of scapula",
          "Carpal tunnel syndrome: median nerve, Phalen and Tinel tests positive"
        ],
        textbookRefs: [
          { book: "BD Chaurasia Human Anatomy", chapter: "Clinical Anatomy - Upper Limb", edition: "8th" },
          { book: "Maheshwari & Mhaskar Essential Orthopaedics", chapter: "Peripheral Nerve Injuries", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Upper Limb Nerve Injuries", edition: "28th" }
        ]
      },
      {
        layer: 4,
        slug: "brachial-plexus-layer-4-exam-prep",
        title: "Brachial Plexus - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield facts on brachial plexus formation, branching, clinical injuries, and nerve testing for NEXT/NEET PG examinations.",
        contentMd: `# Brachial Plexus - Exam High Yield

## Rapid Recall Table: Formation
| Level | Count | Details |
|-------|-------|---------|
| Roots | 5 | C5, C6, C7, C8, T1 |
| Trunks | 3 | Upper (C5+C6), Middle (C7), Lower (C8+T1) |
| Divisions | 6 | Anterior + Posterior from each trunk |
| Cords | 3 | Lateral, Medial, Posterior |
| Branches | 5 | Musculocutaneous, Median, Ulnar, Radial, Axillary |

## High-Yield One-Liners
- Cords named by relation to **2nd part of axillary artery**
- **Erb's point**: junction of C5-C6 at upper trunk (site of Erb palsy)
- **Largest branch**: radial nerve (from posterior cord)
- **Only nerve piercing a muscle**: musculocutaneous (pierces coracobrachialis)
- **Saturday night palsy**: radial nerve in spiral groove
- **Honeymoon palsy**: radial nerve compression in sleep
- **Backpack palsy**: long thoracic nerve (winging)
- **Crutch palsy**: radial nerve in axilla (high radial injury - triceps also affected)

## Injury Comparison Table
| Injury | Root | Position | Key Sign | Associated |
|--------|------|----------|----------|------------|
| Erb palsy | C5-C6 | Waiter's tip | Lost abduction + flexion | Birth trauma |
| Klumpke palsy | C8-T1 | Claw hand | Lost intrinsics | Horner syndrome |
| Radial N (spiral groove) | C5-T1 | Wrist drop | Finger drop | Humerus # |
| Axillary N | C5-C6 | Flattened deltoid | Regimental badge | Shoulder dislocation |
| Long thoracic N | C5-C7 | Winged scapula | Push wall test | Mastectomy |

## Frequently Tested Associations
| Structure | Nerve | Test/Sign |
|-----------|-------|-----------|
| Serratus anterior | Long thoracic (C5-C7) | Push against wall |
| Deltoid | Axillary (C5-C6) | Abduct against resistance |
| Biceps | Musculocutaneous (C5-C6) | Biceps reflex |
| Triceps | Radial (C7-C8) | Triceps reflex |
| Thenar muscles | Median (C8-T1) | Pen touching test |
| Interossei | Ulnar (C8-T1) | Card test |
| Adductor pollicis | Ulnar (C8-T1) | Froment sign |

## Previous Year Themes
- Formation of brachial plexus (roots, trunks, divisions, cords)
- Erb vs Klumpke palsy differentiation
- Saturday night palsy mechanism
- Winging of scapula - nerve involved
- Carpal tunnel syndrome - nerve, tests
- Froment sign - nerve and muscle tested
- Claw hand - nerve and mechanism
- Regimental badge anesthesia - nerve

## Common MCQ Traps
- Middle trunk = C7 alone (not C6+C7)
- Median nerve has NO branches in arm (all branches in forearm and hand)
- Ulnar nerve passes POSTERIOR to medial epicondyle (not anterior)
- Hand of benediction (median) vs Claw hand (ulnar): both affect hand but different mechanisms
- In claw hand (ulnar), ring and little fingers are clawed; in hand of benediction (median), index and middle cannot flex`,
        mnemonics: [
          { text: "5-3-6-3-5 for plexus structure", explanation: "5 roots, 3 trunks, 6 divisions, 3 cords, 5 terminal branches" },
          { text: "MARMU for cord branches", explanation: "Medial: medial pectoral + ulnar + medial cutaneous nerves; Lateral: lateral pectoral + musculocutaneous; Posterior: radial + axillary + thoracodorsal + subscapular" },
          { text: "All Posterior divisions form Posterior cord", explanation: "Posterior cord receives all 3 posterior divisions (C5-T1) making radial nerve the largest" }
        ],
        keyPoints: [
          "5-3-6-3-5: roots, trunks, divisions, cords, terminal branches",
          "Erb point = C5-C6 junction at upper trunk",
          "Radial nerve is largest branch of brachial plexus",
          "Median nerve has no branches in the arm",
          "Ulnar nerve passes posterior to medial epicondyle",
          "Froment sign tests adductor pollicis (ulnar nerve)",
          "Hand of benediction (median) vs claw hand (ulnar) - different mechanisms"
        ],
        textbookRefs: [
          { book: "BD Chaurasia Human Anatomy", chapter: "Upper Limb - Chapter 2", edition: "8th" },
          { book: "Rajesh Kaushal Review of Anatomy", chapter: "Brachial Plexus MCQs", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "brachial-plexus-layer-5-active-recall",
        title: "Brachial Plexus - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on brachial plexus anatomy and clinical correlations.",
        contentMd: `# Brachial Plexus - Active Recall

**Q1:** What are the 5 roots of the brachial plexus?
> C5, C6, C7, C8, T1 (ventral rami)

**Q2:** How many trunks, divisions, cords, and terminal branches are there?
> 3 trunks, 6 divisions, 3 cords, 5 terminal branches (5-3-6-3-5)

**Q3:** Name the 3 cords and what they are named in relation to.
> Lateral, Medial, Posterior - named by their relation to the 2nd part of the axillary artery

**Q4:** What are the 5 terminal branches and their parent cords?
> Musculocutaneous (lateral), Median (lateral + medial), Ulnar (medial), Radial (posterior), Axillary (posterior)

**Q5:** Which nerve injury causes waiter's tip position?
> Erb-Duchenne palsy: upper trunk injury (C5-C6). Arm adducted, medially rotated, forearm pronated

**Q6:** What is Klumpke palsy? What additional syndrome may be associated?
> Lower trunk injury (C8-T1) causing claw hand. Horner syndrome (ptosis, miosis, anhidrosis) if T1 sympathetic fibers are damaged

**Q7:** A patient with mid-shaft humerus fracture presents with wrist drop. Which nerve is injured?
> Radial nerve at spiral groove of humerus

**Q8:** Which nerve injury causes winging of scapula? How do you test?
> Long thoracic nerve (C5-C7, supplies serratus anterior). Test: push against wall - medial border of scapula protrudes

**Q9:** Anterior shoulder dislocation can damage which nerve? What is the sensory sign?
> Axillary nerve (C5-C6). Regimental badge anesthesia over lateral deltoid region

**Q10:** Which nerve is compressed in carpal tunnel syndrome? Name 2 clinical tests.
> Median nerve. Tests: Phalen test (sustained wrist flexion) and Tinel sign (tapping over flexor retinaculum)

**Q11:** What is Froment sign and which nerve does it test?
> Froment sign: patient cannot hold paper between thumb and index using adductor pollicis (ulnar nerve). Compensates by flexing thumb IP joint using FPL (median nerve)

**Q12:** Differentiate claw hand from hand of benediction.
> Claw hand (ulnar nerve injury): MCP hyperextension + IP flexion in ring and little fingers. Hand of benediction (median nerve injury): inability to flex index and middle fingers when making a fist`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering formation, branches, and clinical injuries",
          "Tests segmental innervation knowledge (C5 = shoulder, C8-T1 = hand)",
          "Covers all major nerve injuries with diagnostic signs",
          "Differentiates Erb vs Klumpke palsy",
          "Includes clinical tests: Phalen, Tinel, Froment, push-wall test"
        ],
        textbookRefs: [
          { book: "BD Chaurasia Human Anatomy", chapter: "Upper Limb - Chapter 2", edition: "8th" },
          { book: "Netter's Atlas of Human Anatomy", chapter: "Brachial Plexus", edition: "7th" }
        ]
      }
    ]
  }
];
