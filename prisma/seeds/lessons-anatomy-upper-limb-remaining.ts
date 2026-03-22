// 5-layer lessons for remaining Upper Limb topics (AN-MOD-01-TOP-06, 07, 08)
import type { TopicLessons } from "./content-loader";

export const upperLimbRemainingLessons: TopicLessons[] = [
  // ─── Topic 6: Forearm - Anterior & Posterior Compartments ──
  {
    topicCode: "AN-MOD-01-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "forearm-compartments-foundation",
        title: "Forearm: Anterior & Posterior Compartments - Foundation",
        estimatedMinutes: 20,
        summary:
          "The forearm has anterior (flexor-pronator) and posterior (extensor-supinator) compartments separated by the interosseous membrane. The anterior compartment has superficial and deep groups of muscles supplied mainly by the median nerve, while the posterior compartment is supplied by the radial nerve (posterior interosseous branch).",
        contentMd: `# Forearm: Anterior & Posterior Compartments

## Overview
The forearm extends from the elbow to the wrist. It is divided into:
- **Anterior (flexor) compartment** — 8 muscles in superficial and deep groups
- **Posterior (extensor) compartment** — 12 muscles in superficial and deep groups

The **interosseous membrane** connects the radius and ulna, separating the two compartments and transmitting forces from radius to ulna.

---

## Anterior Compartment (Flexor-Pronator)

### Superficial Group (4 muscles — common flexor origin: medial epicondyle)

| Muscle | Origin | Insertion | Action | Nerve |
|--------|--------|-----------|--------|-------|
| Pronator teres | Medial epicondyle + coronoid process | Mid-lateral radius | Pronation, weak flexion | Median |
| Flexor carpi radialis (FCR) | Medial epicondyle | Base of 2nd metacarpal | Flexion + abduction of wrist | Median |
| Palmaris longus | Medial epicondyle | Palmar aponeurosis | Flexion of wrist, tenses palmar aponeurosis | Median |
| Flexor carpi ulnaris (FCU) | Medial epicondyle + olecranon | Pisiform bone | Flexion + adduction of wrist | **Ulnar** |

> **Clinical Pearl:** Palmaris longus is absent in ~15% of the Indian population. It is used as a tendon graft donor (e.g., in tendon transfer surgeries).

### Intermediate Group (1 muscle)

| Muscle | Origin | Insertion | Action | Nerve |
|--------|--------|-----------|--------|-------|
| Flexor digitorum superficialis (FDS) | Medial epicondyle + radius + ulna | Middle phalanges (digits 2-5) | Flexion of PIP joints | Median |

### Deep Group (3 muscles)

| Muscle | Origin | Insertion | Action | Nerve |
|--------|--------|-----------|--------|-------|
| Flexor digitorum profundus (FDP) | Ulna + interosseous membrane | Distal phalanges (digits 2-5) | Flexion of DIP joints | **Lateral 2 digits: AIN (median)**, Medial 2 digits: Ulnar |
| Flexor pollicis longus (FPL) | Radius + interosseous membrane | Distal phalanx of thumb | Flexion of IP joint of thumb | AIN (median) |
| Pronator quadratus | Distal 1/4 ulna | Distal 1/4 radius | Pronation (main pronator) | AIN (median) |

> **Key Concept:** The **anterior interosseous nerve (AIN)** is a pure motor branch of the median nerve supplying the deep group: FPL, lateral half of FDP, and pronator quadratus.

---

## Posterior Compartment (Extensor-Supinator)

### Superficial Group (7 muscles — common extensor origin: lateral epicondyle)

| Muscle | Action | Nerve |
|--------|--------|-------|
| Brachioradialis | Flexion of elbow (in mid-prone position) | Radial |
| Extensor carpi radialis longus (ECRL) | Extension + abduction of wrist | Radial |
| Extensor carpi radialis brevis (ECRB) | Extension + abduction of wrist | PIN (radial) |
| Extensor digitorum | Extension of fingers (MCP) | PIN |
| Extensor digiti minimi | Extension of little finger | PIN |
| Extensor carpi ulnaris (ECU) | Extension + adduction of wrist | PIN |
| Anconeus | Assists triceps in extension | Radial |

### Deep Group (5 muscles)

| Muscle | Action | Nerve |
|--------|--------|-------|
| Supinator | Supination of forearm | PIN (radial) |
| Abductor pollicis longus (APL) | Abduction of thumb | PIN |
| Extensor pollicis brevis (EPB) | Extension of MCP of thumb | PIN |
| Extensor pollicis longus (EPL) | Extension of IP of thumb | PIN |
| Extensor indicis | Extension of index finger | PIN |

> **Key Concept:** The **posterior interosseous nerve (PIN)** is the deep branch of the radial nerve, a pure motor nerve that supplies all posterior compartment muscles except brachioradialis, ECRL, and anconeus.

---

## Nerve Courses in the Forearm

### Median Nerve
- Enters forearm between the 2 heads of **pronator teres**
- Passes under the FDS bridge (fibrous arch)
- Lies between FDS and FDP in the forearm
- Gives off **AIN** (anterior interosseous nerve)
- Enters hand through the **carpal tunnel**

### Ulnar Nerve
- Enters forearm between the 2 heads of **FCU**
- Lies between FCU and FDP
- Supplies: FCU and medial half of FDP
- Enters hand via **Guyon's canal** (superficial to flexor retinaculum)

### Radial Nerve
- Divides into superficial and deep branches at the level of the lateral epicondyle
- **Superficial branch**: purely sensory, runs under brachioradialis
- **Deep branch (PIN)**: winds around radius through the **supinator** (arcade of Frohse), purely motor`,
        mnemonics: [
          {
            text: "Pass, Fail, Pass, Fail for superficial flexors",
            explanation:
              "Pronator teres (median - Pass), FCR (median - Fail is wrong, use as memory hook), Palmaris longus (median), FCU (ulnar - the Fail/odd one out). The key point: 3 by median, 1 (FCU) by ulnar nerve.",
          },
          {
            text: "AIN = FPL + FDP(lateral) + PQ — All Indian Nerds study FPL, FDP, PQ",
            explanation:
              "Anterior Interosseous Nerve supplies Flexor Pollicis Longus, lateral half of Flexor Digitorum Profundus, and Pronator Quadratus. All three are deep muscles.",
          },
        ],
        keyPoints: [
          "Anterior compartment: 8 muscles in superficial (4), intermediate (1), and deep (3) groups",
          "Common flexor origin: medial epicondyle; common extensor origin: lateral epicondyle",
          "All superficial flexors are supplied by median nerve EXCEPT FCU (ulnar nerve)",
          "FDP has dual nerve supply: lateral half by AIN (median), medial half by ulnar",
          "Pronator quadratus is the chief pronator of the forearm",
          "Posterior interosseous nerve (PIN) is pure motor, supplies most extensors",
          "Median nerve enters forearm between 2 heads of pronator teres",
          "Ulnar nerve enters forearm between 2 heads of FCU",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 8-9 (Front of Forearm, Back of Forearm)",
            edition: "8th",
          },
        ],
      },
      {
        layer: 2,
        slug: "forearm-compartments-mechanism",
        title: "Forearm: Anterior & Posterior Compartments - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed mechanisms of pronation/supination, flexor tendon relationships, nerve course through forearm, and the anatomical snuffbox.",
        contentMd: `# Forearm - Mechanism

## Pronation and Supination

### Axis of Rotation
The axis passes through the center of the radial head proximally and the head of the ulna distally. The radius rotates around the relatively fixed ulna.

### Pronation
| Feature | Detail |
|---------|--------|
| Chief pronator | Pronator quadratus (all positions) |
| Accessory pronator | Pronator teres (against resistance) |
| Range | 0-85 degrees |
| Position of radius | Crosses OVER ulna |

### Supination
| Feature | Detail |
|---------|--------|
| Chief supinator (powerful) | Biceps brachii (when elbow flexed) |
| Accessory supinator | Supinator muscle (slow, unopposed) |
| Range | 0-90 degrees |
| Position of radius | Parallel to ulna |

> **Clinical Pearl:** Screws are designed to be tightened with supination (right hand rule) because supination is more powerful than pronation — that is why we "tighten" clockwise with the right hand.

---

## Flexor Tendon Arrangement at the Wrist

From superficial to deep at the carpal tunnel:
1. **FDS** tendons (superficial)
2. **FDP** tendons (deep)
3. **FPL** tendon (most lateral and deep)

### FDS Tendon Arrangement at the Wrist
The tendons stack in 2 rows:
- **Superficial pair**: Middle finger (3rd) and Ring finger (4th)
- **Deep pair**: Index finger (2nd) and Little finger (5th)

> **Mnemonic for FDS arrangement:** "3, 4 Superficial; 2, 5 Deep" — think of it as the middle pair on top.

### FDS-FDP Relationship (Camper's Chiasma)
- At the level of the proximal phalanx, the FDS tendon **splits** into two slips
- The FDP tendon passes through this split (the chiasma of Camper)
- FDS inserts on the middle phalanx; FDP continues to the distal phalanx

---

## Flexor Retinaculum (Transverse Carpal Ligament)

| Feature | Detail |
|---------|--------|
| Attachments | Scaphoid tubercle + trapezium (laterally); Pisiform + hook of hamate (medially) |
| Deep to it (carpal tunnel) | 4 FDS + 4 FDP + FPL tendons + Median nerve (total: 9 tendons + 1 nerve) |
| Superficial to it | Ulnar nerve + artery (Guyon's canal), palmaris longus tendon, palmar cutaneous branch of median nerve |

> **Key fact:** Exactly **10 structures** pass through the carpal tunnel: 9 tendons + median nerve.

---

## Anatomical Snuffbox

### Boundaries
- **Lateral (radial)**: APL + EPB tendons
- **Medial (ulnar)**: EPL tendon
- **Floor**: Scaphoid + trapezium

### Contents
- Radial artery (crosses the floor)
- Cephalic vein (superficial)
- Superficial branch of radial nerve

> **Clinical Pearl:** Tenderness in the anatomical snuffbox after a fall on outstretched hand (FOOSH) suggests **scaphoid fracture** until proven otherwise. The scaphoid is the most commonly fractured carpal bone.

---

## Extensor Retinaculum — 6 Compartments

The extensor retinaculum at the wrist creates 6 osseofibrous compartments:

| Compartment | Contents | Clinical Significance |
|-------------|----------|----------------------|
| 1st | APL + EPB | **De Quervain's tenosynovitis** |
| 2nd | ECRL + ECRB | — |
| 3rd | EPL | Ruptures in RA, Colles fracture |
| 4th | ED + EI | — |
| 5th | EDM | — |
| 6th | ECU | — |

> **Clinical Pearl:** **De Quervain's tenosynovitis** affects the 1st extensor compartment. Common in new mothers (repetitive thumb movements while holding the baby). **Finkelstein's test** is positive.

---

## Interosseous Membrane

- Strong fibrous sheet connecting radius and ulna
- Fibers run **obliquely downward and medially** from radius to ulna
- **Function**: Transmits forces from radius to ulna (e.g., during a fall on outstretched hand)
- Has an opening superiorly for the **posterior interosseous artery**`,
        mnemonics: [
          {
            text: "Carpal Tunnel = 9T + 1N (Nine Tendons plus one Nerve)",
            explanation:
              "4 FDS + 4 FDP + 1 FPL = 9 tendons, plus the median nerve. Ulnar nerve does NOT pass through the carpal tunnel.",
          },
          {
            text: "1-2-APE-2-1 for extensor compartments",
            explanation:
              "Compartment 1: (1 tendon pair) APL+EPB, 2: ECRL+ECRB, 3: (A-alone) EPL, 4: (P-pair) ED+EI, 5: (E-single) EDM, 6: ECU. Count of tendons: 2-2-1-2-1-1.",
          },
        ],
        keyPoints: [
          "Chief pronator: pronator quadratus; powerful supinator: biceps brachii",
          "FDS splits to let FDP pass through (Camper's chiasma) at the proximal phalanx",
          "Carpal tunnel: 9 tendons + median nerve; ulnar nerve is OUTSIDE",
          "Anatomical snuffbox floor: scaphoid and trapezium; radial artery crosses it",
          "Scaphoid fracture: tenderness in anatomical snuffbox after FOOSH",
          "De Quervain's tenosynovitis: 1st extensor compartment (APL + EPB)",
          "Interosseous membrane fibers run obliquely downward from radius to ulna",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 8-10 (Forearm and Hand)",
            edition: "8th",
          },
        ],
      },
      {
        layer: 3,
        slug: "forearm-compartments-clinical",
        title: "Forearm: Anterior & Posterior Compartments - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical correlations of forearm anatomy: nerve injuries (median, ulnar, AIN, PIN), compartment syndrome, Colles fracture, and tendon injuries relevant to Indian clinical practice.",
        contentMd: `# Forearm - Clinical Application

## Nerve Injuries in the Forearm

### Median Nerve Injury (at elbow/proximal forearm)
- **Motor loss**: Loss of pronation (pronator teres, PQ), loss of flexion at wrist (FCR), loss of FDS function, loss of FPL, lateral FDP
- **Sensory loss**: Lateral 3.5 digits (palmar aspect)
- **Deformity**: **Hand of benediction** (cannot flex index and middle fingers when making a fist)
- **Pointing index**: Cannot flex DIP of index finger (FDP lateral part lost)

### Anterior Interosseous Nerve (AIN) Syndrome (Kiloh-Nevin Syndrome)
- Pure motor nerve — **no sensory loss**
- Cannot make an **OK sign** (pinch between thumb and index finger)
- Lost: FPL (thumb IP flexion), lateral FDP (index DIP flexion), PQ (pronation)
- Test: Ask patient to pinch — the pinch is pulp-to-pulp instead of tip-to-tip

### Ulnar Nerve Injury at Elbow
- Enters forearm between 2 heads of FCU
- **Motor loss**: FCU (weak wrist flexion + adduction), medial half FDP (cannot flex DIP of ring and little fingers)
- All intrinsic hand muscles (interossei, medial 2 lumbricals, hypothenar) are lost
- **Deformity**: **Ulnar claw hand** (hyperextension at MCP + flexion at IP of ring and little fingers)
- **Sensory loss**: Medial 1.5 digits

> **Clinical Pearl:** Ulnar claw is MORE marked in LOW ulnar nerve lesion (at wrist) compared to high lesion (at elbow). This is the **"Ulnar Paradox"** — in high lesions, FDP to ring and little fingers is also paralyzed, so the clawing (which requires intact FDP) is less.

### Posterior Interosseous Nerve (PIN) Syndrome
- Pure motor — **no sensory loss** (like AIN)
- **Finger drop** (cannot extend MCP joints of fingers)
- Wrist drop is **incomplete** because ECRL (supplied by radial nerve proper, not PIN) is spared
- Wrist deviates radially on attempted extension

### Radial Nerve Injury (in forearm vs. arm)
| Feature | Arm (spiral groove) | Forearm (PIN) |
|---------|-------------------|---------------|
| Wrist drop | Complete | Incomplete (ECRL spared) |
| Finger drop | Present | Present |
| Sensory loss | Dorsum 1st web space | None |
| Brachioradialis | Lost | Spared |

---

## Compartment Syndrome of the Forearm

### Volkmann's Ischemic Contracture
- Most feared complication of **supracondylar fracture** in children
- Caused by brachial artery injury or tight cast/bandage
- Anterior compartment muscles undergo ischemic necrosis then fibrosis
- **Classical deformity**: Forearm pronated, wrist flexed, MCP hyperextended, IP flexed, thumb adducted
- **5 P's of compartment syndrome**: Pain (especially on passive stretch), Pallor, Pulselessness, Paresthesia, Paralysis

> **Clinical Pearl:** In Indian emergency departments, supracondylar fractures in children must be monitored closely. Passive extension of fingers causing severe pain is the earliest sign of developing compartment syndrome.

### Treatment
- **Fasciotomy** — emergency decompressive surgery
- Must be done within **6 hours** to prevent irreversible damage

---

## Colles Fracture
- Fracture of distal radius within 2.5 cm of wrist joint
- Common in elderly women (osteoporosis) after FOOSH
- **Dinner fork deformity** (lateral view)
- **Bayonet deformity** (AP view)
- Dorsal displacement, dorsal angulation, radial deviation, impaction, supination of distal fragment

### Complications
- Malunion (most common)
- Median nerve compression (acute carpal tunnel syndrome)
- EPL tendon rupture (3rd compartment)
- Sudeck's dystrophy (complex regional pain syndrome)

---

## De Quervain's Tenosynovitis
- Stenosing tenosynovitis of 1st extensor compartment (APL + EPB)
- Common in: new mothers, typists, manual workers
- **Finkelstein's test**: Thumb enclosed in fist, ulnar deviation of wrist produces pain over radial styloid
- Treatment: Rest, NSAIDs, corticosteroid injection, surgical decompression

---

## Pronator Teres Syndrome
- Median nerve compression between the 2 heads of pronator teres
- Pain in proximal forearm with weakness of median nerve-supplied muscles
- Differentiated from carpal tunnel: pronator teres and FCR are also weak`,
        mnemonics: [
          {
            text: "The Ulnar Paradox: LOW = MORE claw, HIGH = LESS claw",
            explanation:
              "In low ulnar nerve lesion (at wrist), FDP is intact so clawing in ring and little fingers is prominent. In high lesion (at elbow), FDP to medial 2 digits is also paralyzed, reducing the clawing.",
          },
          {
            text: "5 P's of compartment syndrome: Pain, Pallor, Pulselessness, Paresthesia, Paralysis",
            explanation:
              "Pain on passive stretch of fingers is the EARLIEST and most reliable sign. Pulselessness is a LATE sign.",
          },
        ],
        keyPoints: [
          "Hand of benediction: median nerve injury at elbow (cannot flex index and middle fingers)",
          "AIN syndrome: cannot make OK sign, no sensory loss (pure motor)",
          "Ulnar paradox: low lesion produces MORE clawing than high lesion",
          "PIN syndrome: finger drop without sensory loss, incomplete wrist drop",
          "Volkmann's ischemic contracture: forearm compartment syndrome, needs fasciotomy within 6 hours",
          "Colles fracture: dinner fork deformity, common in elderly women after FOOSH",
          "De Quervain's: 1st extensor compartment, positive Finkelstein's test",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 8-9 (Clinical Anatomy sections)",
            edition: "8th",
          },
        ],
      },
      {
        layer: 4,
        slug: "forearm-compartments-exam",
        title: "Forearm: Anterior & Posterior Compartments - Exam Preparation",
        estimatedMinutes: 15,
        summary:
          "High-yield exam points for NEXT/NEET PG on forearm anatomy, nerve injuries, and clinical presentations.",
        contentMd: `# Forearm - Exam Preparation

## One-Liner High Yield Facts

- Common flexor origin: **Medial epicondyle**
- Common extensor origin: **Lateral epicondyle**
- Only flexor supplied by ulnar nerve in the superficial group: **FCU**
- Nerve between 2 heads of pronator teres: **Median nerve**
- Nerve between 2 heads of FCU: **Ulnar nerve**
- Nerve through supinator (arcade of Frohse): **PIN (posterior interosseous nerve)**
- Chief pronator: **Pronator quadratus**
- Most powerful supinator: **Biceps brachii** (when elbow flexed)
- Muscle absent in 15% population: **Palmaris longus**
- Structures in carpal tunnel: **9 tendons + median nerve**
- Nerve NOT in carpal tunnel: **Ulnar nerve** (in Guyon's canal)
- Floor of anatomical snuffbox: **Scaphoid + Trapezium**
- Artery in anatomical snuffbox: **Radial artery**
- Most common carpal bone fractured: **Scaphoid**
- AIN supplies: **FPL + lateral FDP + Pronator quadratus**
- AIN syndrome test: **Cannot make OK sign (tip-to-tip pinch)**
- Ulnar paradox: **More clawing in distal (low) lesion**
- De Quervain's affects: **1st extensor compartment (APL + EPB)**
- De Quervain's test: **Finkelstein's test**
- Colles fracture deformity: **Dinner fork (lateral view)**
- Volkmann's contracture complication of: **Supracondylar fracture**
- Earliest sign of compartment syndrome: **Pain on passive stretch**
- FDS tendon arrangement at wrist (superficial pair): **Middle (3rd) and Ring (4th) fingers**

---

## Comparison Tables

### Median vs. Ulnar Nerve in Forearm

| Feature | Median Nerve | Ulnar Nerve |
|---------|-------------|-------------|
| Entry to forearm | Between 2 heads of pronator teres | Between 2 heads of FCU |
| Motor supply | FCR, PL, PT, FDS, FPL, lat FDP, PQ | FCU, medial FDP |
| Exit to hand | Carpal tunnel | Guyon's canal |
| Deformity if injured | Hand of benediction | Claw hand |
| Sensory loss | Lateral 3.5 digits (palm) | Medial 1.5 digits |

### Pronation vs. Supination

| Feature | Pronation | Supination |
|---------|-----------|------------|
| Chief muscle | Pronator quadratus | Biceps brachii |
| Accessory | Pronator teres | Supinator |
| Range | 85 degrees | 90 degrees |
| Radius position | Crosses over ulna | Parallel to ulna |

### AIN vs PIN Syndrome

| Feature | AIN Syndrome | PIN Syndrome |
|---------|-------------|-------------|
| Parent nerve | Median | Radial |
| Sensory loss | None | None |
| Motor loss | FPL, lat FDP, PQ | All extensors except ECRL, brachioradialis |
| Clinical test | Cannot make OK sign | Incomplete wrist drop + finger drop |

---

## Previous Year Question Themes
- Carpal tunnel contents (most repeated)
- Nerve supply of forearm muscles (median vs. ulnar)
- AIN syndrome presentation
- Colles fracture complications
- De Quervain's tenosynovitis
- Anatomical snuffbox boundaries and contents`,
        mnemonics: [
          {
            text: "Median = Middle entry (pronator teres), Ulnar = Ulnar entry (FCU)",
            explanation:
              "Each nerve enters the forearm between 2 heads of a muscle: median through pronator teres, ulnar through FCU.",
          },
          {
            text: "CTS contents: 4S + 4P + FPL + Median = 10",
            explanation:
              "4 FDS (Superficialis) + 4 FDP (Profundus) + 1 FPL + Median nerve = 10 structures in the carpal tunnel.",
          },
        ],
        keyPoints: [
          "FCU is the only superficial flexor supplied by ulnar nerve",
          "Carpal tunnel = 9 tendons + median nerve (most tested fact)",
          "AIN and PIN are both pure motor nerves with no sensory loss",
          "Ulnar paradox: more clawing in low (wrist) lesion",
          "Scaphoid is the most commonly fractured carpal bone",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 8-9",
            edition: "8th",
          },
        ],
      },
      {
        layer: 5,
        slug: "forearm-compartments-recall",
        title: "Forearm: Anterior & Posterior Compartments - Active Recall",
        estimatedMinutes: 10,
        summary:
          "Self-test flashcards covering forearm muscles, nerves, clinical correlations, and high-yield exam facts.",
        contentMd: `# Active Recall - Forearm

**Q1:** Name the 4 superficial flexors of the forearm and their common origin.
> Pronator teres, FCR, Palmaris longus, FCU. Common origin: medial epicondyle.

**Q2:** Which is the ONLY superficial flexor supplied by the ulnar nerve?
> Flexor carpi ulnaris (FCU).

**Q3:** What does the anterior interosseous nerve (AIN) supply?
> FPL, lateral half of FDP, and pronator quadratus (all deep muscles, pure motor).

**Q4:** How does a patient with AIN syndrome present?
> Cannot make an OK sign (tip-to-tip pinch). No sensory loss.

**Q5:** Name the structures passing through the carpal tunnel.
> 4 FDS tendons + 4 FDP tendons + FPL tendon + Median nerve = 10 structures.

**Q6:** Where does the ulnar nerve enter the forearm?
> Between the two heads of FCU.

**Q7:** What is the chief pronator of the forearm?
> Pronator quadratus (works in all positions).

**Q8:** What are the boundaries of the anatomical snuffbox?
> Lateral: APL + EPB. Medial: EPL. Floor: Scaphoid + Trapezium.

**Q9:** What is De Quervain's tenosynovitis and how is it tested?
> Stenosing tenosynovitis of 1st extensor compartment (APL + EPB). Tested by Finkelstein's test.

**Q10:** Explain the ulnar paradox.
> In LOW ulnar nerve lesion (at wrist), clawing is MORE prominent because FDP is intact. In HIGH lesion (at elbow), FDP is also paralyzed, so clawing is less.

**Q11:** What is the dinner fork deformity?
> Colles fracture — fracture of distal radius with dorsal displacement, seen on lateral view.

**Q12:** What is the earliest sign of forearm compartment syndrome?
> Pain on passive extension of fingers (passive stretch pain).`,
        mnemonics: [],
        keyPoints: [
          "12 active recall questions covering forearm anatomy, nerve injuries, and clinical correlations",
          "Focus on carpal tunnel contents, nerve courses, and clinical tests",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 8-9",
            edition: "8th",
          },
        ],
      },
    ],
  },

  // ─── Topic 7: Hand - Muscles & Spaces ─────────────────────
  {
    topicCode: "AN-MOD-01-TOP-07",
    layers: [
      {
        layer: 1,
        slug: "hand-muscles-spaces-foundation",
        title: "Hand: Muscles & Spaces - Foundation",
        estimatedMinutes: 20,
        summary:
          "The hand contains intrinsic muscles organized into thenar, hypothenar, adductor, lumbrical, and interosseous groups. The palmar spaces are potential spaces important in the spread of hand infections.",
        contentMd: `# Hand: Muscles & Spaces

## Intrinsic Muscles of the Hand
The intrinsic muscles are those that originate AND insert within the hand. They are divided into 4 groups.

---

## 1. Thenar Muscles (3 muscles — Lateral Eminence)

| Muscle | Origin | Insertion | Action | Nerve |
|--------|--------|-----------|--------|-------|
| Abductor pollicis brevis (APB) | Scaphoid, trapezium, flexor retinaculum | Lateral side of proximal phalanx of thumb | Abduction of thumb | Median (recurrent branch) |
| Flexor pollicis brevis (FPB) | Flexor retinaculum, trapezium | Lateral side of proximal phalanx of thumb | Flexion of MCP of thumb | Superficial head: Median; Deep head: Ulnar |
| Opponens pollicis | Flexor retinaculum, trapezium | Lateral border of 1st metacarpal | Opposition of thumb | Median (recurrent branch) |

> **Clinical Pearl:** The recurrent branch of the median nerve (motor branch) is superficial in the palm and vulnerable to injury. Damage causes loss of thumb opposition — the most important hand function. This is called **"ape hand"** deformity (thumb falls in line with other fingers).

---

## 2. Hypothenar Muscles (3 muscles — Medial Eminence)

| Muscle | Origin | Insertion | Action | Nerve |
|--------|--------|-----------|--------|-------|
| Abductor digiti minimi | Pisiform | Medial side of proximal phalanx of little finger | Abduction of little finger | Ulnar (deep branch) |
| Flexor digiti minimi brevis | Hook of hamate, flexor retinaculum | Medial side of proximal phalanx of little finger | Flexion of MCP of little finger | Ulnar (deep branch) |
| Opponens digiti minimi | Hook of hamate, flexor retinaculum | Medial border of 5th metacarpal | Opposition of little finger | Ulnar (deep branch) |

---

## 3. Adductor Pollicis

| Feature | Detail |
|---------|--------|
| Heads | Oblique head: capitate, 2nd-3rd metacarpal bases. Transverse head: 3rd metacarpal shaft |
| Insertion | Medial side of proximal phalanx of thumb |
| Action | Adduction of thumb |
| Nerve | Ulnar nerve (deep branch) |

> **Clinical Pearl:** Adductor pollicis is tested by **Froment's sign**. In ulnar nerve palsy, the patient compensates by using FPL (median nerve) to grip paper — the IP joint of the thumb flexes.

---

## 4. Lumbricals (4 muscles)

| Lumbrical | Origin | Insertion | Action | Nerve |
|-----------|--------|-----------|--------|-------|
| 1st and 2nd | FDP tendons (lateral 2) | Lateral side of extensor expansion (digits 2-3) | Flex MCP + Extend IP joints | **Median nerve** |
| 3rd and 4th | FDP tendons (medial 2, bipennate) | Lateral side of extensor expansion (digits 4-5) | Flex MCP + Extend IP joints | **Ulnar nerve** |

> **Key fact:** Lumbricals are unique — they originate from tendons (FDP) and insert into tendons (extensor expansion). They flex MCP and extend IP joints simultaneously.

---

## 5. Interossei (7 muscles)

### Palmar Interossei (4 muscles) — PAD (Palmar ADduct)
- **Action**: Adduct fingers toward the middle finger
- All unipennate
- Nerve: Ulnar nerve (deep branch)

### Dorsal Interossei (4 muscles) — DAB (Dorsal ABduct)
- **Action**: Abduct fingers away from the middle finger
- All bipennate
- Nerve: Ulnar nerve (deep branch)
- Also flex MCP and extend IP joints (like lumbricals)

> **Key Concept:** PAD-DAB: **P**almar **AD**duct, **D**orsal **AB**duct

---

## Palmar Spaces

### Thenar Space
- Between the adductor pollicis (posteriorly) and flexor tendons of index finger (anteriorly)
- Contains: 1st lumbrical and FDP/FDS tendons to index finger

### Midpalmar Space
- Between palmar aponeurosis (anteriorly) and interossei/metacarpals (posteriorly)
- Contains: FDP/FDS tendons to middle, ring, little fingers; 2nd-4th lumbricals

### Midpalmar and Thenar Spaces
- Separated by a septum from the 3rd metacarpal to the palmar aponeurosis
- Both communicate proximally with the **space of Parona** (in front of pronator quadratus)

### Pulp Spaces
- Closed fibrous compartments in the fingertips
- Fibrous septa connect skin to periosteum of the distal phalanx
- Infection (felon) increases pressure rapidly

---

## Synovial Sheaths of Flexor Tendons

### 2 Major Sheaths
1. **Common flexor sheath (ulnar bursa)**: Encloses FDS and FDP tendons
2. **Radial bursa**: Encloses FPL tendon

### Important Features
- The ulnar bursa extends from above the flexor retinaculum to mid-palm
- The radial bursa extends from above the flexor retinaculum to the distal phalanx of thumb
- **Little finger**: its digital sheath is continuous with the ulnar bursa
- **Thumb**: its digital sheath IS the radial bursa

> **Clinical Pearl:** This is why infections of the thumb or little finger can spread to the forearm (space of Parona) through their continuous sheaths — called **horseshoe abscess**.`,
        mnemonics: [
          {
            text: "PAD-DAB: Palmar ADduct, Dorsal ABduct",
            explanation:
              "Palmar interossei adduct (bring fingers together), Dorsal interossei abduct (spread fingers apart). Both are supplied by the ulnar nerve.",
          },
          {
            text: "LOAF muscles for median nerve in hand",
            explanation:
              "Lateral 2 Lumbricals, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis (superficial head). These are the ONLY muscles in the hand supplied by the median nerve; all others are ulnar.",
          },
        ],
        keyPoints: [
          "Thenar muscles (3): APB, FPB, Opponens pollicis — mainly median nerve (recurrent branch)",
          "Hypothenar muscles (3): ADM, FDMB, ODM — all ulnar nerve",
          "Lumbricals: unique origin from tendons, flex MCP + extend IP; 1st & 2nd = median, 3rd & 4th = ulnar",
          "PAD-DAB: Palmar interossei adduct, Dorsal interossei abduct; all ulnar nerve",
          "LOAF muscles = only median nerve-supplied muscles in the hand",
          "Adductor pollicis: ulnar nerve, tested by Froment's sign",
          "Horseshoe abscess: infection of thumb/little finger spreading via continuous synovial sheaths",
          "Felon: pulp space infection of fingertip, needs incision and drainage",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 10-11 (Palm, Dorsum of Hand)",
            edition: "8th",
          },
        ],
      },
      {
        layer: 2,
        slug: "hand-muscles-spaces-mechanism",
        title: "Hand: Muscles & Spaces - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed mechanisms of grip, extensor expansion, lumbrical-interosseous action, and deep branch of the ulnar nerve pathway through the hand.",
        contentMd: `# Hand - Mechanism

## The Extensor Expansion (Dorsal Digital Expansion)

This is a complex aponeurotic structure on the dorsum of each finger that integrates the actions of extrinsic extensors, lumbricals, and interossei.

### Structure
- **Central slip**: Inserts on the middle phalanx (extends PIP joint)
- **Lateral slips**: Unite to insert on the distal phalanx (extends DIP joint)
- **Wings**: Receive insertions of lumbricals and interossei

### Functional Significance
| Component | Action |
|-----------|--------|
| Extensor digitorum (ED) | Extends MCP joint primarily |
| Lumbricals + Interossei (via expansion) | Flex MCP + extend IP joints |
| Central slip | Extends PIP |
| Lateral slips | Extends DIP |

> **Key Concept:** The extensor digitorum alone CANNOT extend the IP joints. It only extends the MCP joint. Extension of IP joints requires lumbricals and interossei acting through the extensor expansion.

---

## Types of Grip

### Power Grip
- Fingers wrap around an object (e.g., holding a hammer)
- Requires: Extrinsic flexors (FDS, FDP) for finger flexion + intrinsic muscles for MCP flexion
- Wrist extensors (ECRL, ECRB, ECU) stabilize the wrist in extension during grip

### Precision (Pinch) Grip
- Thumb opposes fingertips (e.g., holding a pen)
- Requires: Thenar muscles (opposition), lumbricals, interossei
- Most important hand function — depends on **median nerve** (opposition)

### Key Grip (Lateral Pinch)
- Thumb presses against the lateral side of the index finger (e.g., holding a key)
- Requires: Adductor pollicis + 1st dorsal interosseous
- Tests ulnar nerve function (Froment's sign)

---

## Deep Branch of Ulnar Nerve — Course Through Hand

This is the most important motor nerve of the hand.

### Course
1. Enters hand via Guyon's canal (between pisiform and hook of hamate)
2. Divides into superficial (sensory) and **deep (motor)** branches
3. Deep branch curves around the hook of hamate
4. Passes between ADM and FDMB
5. Crosses the palm deep to flexor tendons
6. Ends by supplying adductor pollicis and deep head of FPB

### Muscles Supplied (in order of innervation)
1. Hypothenar muscles (ADM, FDMB, ODM)
2. 3rd and 4th lumbricals
3. All interossei (4 palmar + 4 dorsal)
4. Adductor pollicis
5. Deep head of FPB

> **Rule:** Ulnar nerve supplies ALL intrinsic hand muscles EXCEPT the LOAF muscles (which are median).

---

## Lumbrical-Interosseous Action

### The Writing Position (Intrinsic Plus)
- MCP flexed + IP extended
- Produced by lumbricals and interossei
- This is the position of function for splinting

### Claw Hand (Intrinsic Minus)
- MCP hyperextended (unopposed ED action) + IP flexed (unopposed FDP action)
- Results from ulnar nerve palsy
- Most marked in ring and little fingers

### Mechanism of Clawing
1. Loss of lumbricals/interossei → cannot flex MCP or extend IP
2. ED pulls MCP into hyperextension (unopposed)
3. FDP pulls IP into flexion (unopposed)
4. Result: claw deformity

---

## Dupuytren's Contracture

- Progressive fibrosis of the **palmar aponeurosis**
- Causes fixed flexion deformity of the MCP and PIP joints
- Ring and little fingers most commonly affected
- Associated with: alcoholism, diabetes, epilepsy medications, manual labor
- Common in North Indian population
- Treatment: Fasciotomy (partial) or fasciectomy

---

## Kanavel Signs of Flexor Tendon Sheath Infection

Four cardinal signs:
1. **Fusiform (sausage-shaped) swelling** of the finger
2. **Flexed posture** of the finger
3. **Tenderness along the flexor tendon sheath**
4. **Pain on passive extension** of the finger

> **Clinical Pearl:** Flexor tendon sheath infections are surgical emergencies in India. Delayed treatment leads to tendon necrosis and a stiff, useless finger. Emergency drainage within 24 hours is critical.`,
        mnemonics: [
          {
            text: "Ulnar nerve supplies all hand muscles except LOAF",
            explanation:
              "LOAF = Lateral 2 Lumbricals, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis (superficial head). Everything else in the hand = ulnar nerve.",
          },
          {
            text: "Kanavel's 4 Signs: Swelling-Flexion-Tenderness-Pain (SFTP)",
            explanation:
              "S = Sausage/fusiform swelling, F = Flexed posture, T = Tenderness along sheath, P = Pain on passive extension. Indicates flexor tendon sheath infection.",
          },
        ],
        keyPoints: [
          "Extensor digitorum alone extends MCP only; lumbricals and interossei extend IP joints via the expansion",
          "Deep branch of ulnar nerve supplies all intrinsic hand muscles except LOAF",
          "Claw hand mechanism: MCP hyperextended (ED unopposed) + IP flexed (FDP unopposed)",
          "Precision grip depends on median nerve (opposition); key grip tests ulnar nerve",
          "Wrist extensors stabilize the wrist during power grip",
          "Dupuytren's: fibrosis of palmar aponeurosis, ring and little fingers",
          "Kanavel signs: 4 cardinal signs of flexor tendon sheath infection",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 10-11",
            edition: "8th",
          },
        ],
      },
      {
        layer: 3,
        slug: "hand-muscles-spaces-clinical",
        title: "Hand: Muscles & Spaces - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical correlations of hand anatomy: nerve injuries producing characteristic deformities, hand infections, and surgical approaches relevant to Indian clinical practice.",
        contentMd: `# Hand - Clinical Application

## Nerve Injuries and Hand Deformities

### 1. Median Nerve Injury at Wrist (Carpal Tunnel Level)

| Feature | Detail |
|---------|--------|
| Muscles lost | LOAF: Lateral 2 lumbricals, Opponens pollicis, APB, FPB (superficial head) |
| Deformity | **Ape hand** (thumb cannot oppose, falls in line with fingers) |
| Sensory loss | Lateral 3.5 fingers (palmar side) |
| Test | Cannot touch thumb to little finger tip (lost opposition) |
| Thenar wasting | Present (APB atrophy is earliest and most visible sign) |

> **Clinical Pearl:** Carpal tunnel syndrome is the most common entrapment neuropathy. Very prevalent in Indian women (tailoring, grinding, manual work). Presents with nocturnal paresthesia of lateral 3.5 fingers. Tinel's sign and Phalen's test are positive.

### 2. Ulnar Nerve Injury at Wrist (Guyon's Canal)

| Feature | Detail |
|---------|--------|
| Muscles lost | All intrinsic hand muscles EXCEPT LOAF |
| Deformity | **Ulnar claw hand** (ring and little finger clawed) |
| Sensory loss | Medial 1.5 fingers |
| Tests | Froment's sign (+), Egawa's test (+), Card test (+) |
| Hypothenar wasting | Present |
| Guttering | Hollowing of dorsal interosseous spaces (especially 1st) |

### 3. Combined Median + Ulnar Nerve Injury at Wrist

| Feature | Detail |
|---------|--------|
| Muscles lost | ALL intrinsic hand muscles |
| Deformity | **Complete claw hand** (all 4 fingers clawed) |
| Also called | Hand of benediction is not the same (that is median at elbow) |
| Sensory loss | All fingers |

### 4. Radial Nerve Injury (at wrist level)
- Only sensory loss (dorsum of 1st web space)
- No motor loss in the hand (radial nerve has no motor supply to hand)

---

## Clinical Tests for Hand

| Test | Nerve Tested | Positive Finding |
|------|-------------|------------------|
| Froment's sign | Ulnar (adductor pollicis) | IP flexion of thumb while pinching (FPL compensation) |
| Phalen's test | Median (carpal tunnel) | Paresthesia on wrist flexion for 60 sec |
| Tinel's sign | Median (carpal tunnel) | Tingling on tapping over carpal tunnel |
| Egawa's test | Ulnar (interossei) | Cannot abduct middle finger side to side |
| Card test | Ulnar (3rd palmar interosseous) | Cannot grip card between ring and little finger |
| Ochsner's clasping test | AIN (median) | Index finger does not flex when clasping hands |
| Jeanne's sign | Ulnar (adductor pollicis) | MCP hyperextension of thumb during key pinch |
| Wartenberg's sign | Ulnar (3rd palmar interosseous) | Little finger abducted at rest (cannot adduct) |

---

## Hand Infections

### Felon (Pulp Space Infection)
- Closed compartment infection of the fingertip
- Fibrous septa between skin and distal phalanx create loculations
- Causes severe throbbing pain
- Can lead to **osteomyelitis of distal phalanx** if untreated
- Treatment: **Fishmouth incision** or lateral incision for drainage

### Paronychia
- Infection of the nail fold
- Most common hand infection
- Acute: Staphylococcus aureus
- Chronic: Candida (common in Indian housewives — wet work)
- Treatment: Incision along nail fold, may need partial nail removal

### Flexor Tendon Sheath Infection
- Kanavel signs (4 cardinal signs)
- Thumb and little finger sheaths communicate via continuous bursa
- Horseshoe abscess: spread between thumb and little finger via space of Parona
- Emergency surgical drainage required

### Web Space Infection
- Infection of the web spaces between fingers
- Characteristic: adjacent fingers held apart (cannot adduct)
- Dorsal swelling more than palmar (loose dorsal skin)

### Midpalmar and Thenar Space Infections
- **Midpalmar space**: loss of normal palmar concavity (palm becomes convex)
- **Thenar space**: swelling of thenar eminence, thumb held abducted
- Both require surgical drainage via separate incisions

---

## Trigger Finger (Stenosing Tenosynovitis)
- Thickening of the **A1 pulley** (at MCP joint level)
- Finger locks in flexion, then snaps straight
- Common in thumb (trigger thumb in infants), ring and middle fingers in adults
- Common in diabetics
- Treatment: Corticosteroid injection into the tendon sheath, surgical release of A1 pulley`,
        mnemonics: [
          {
            text: "Ape hand = median at wrist, Claw hand = ulnar at wrist",
            explanation:
              "Ape hand: loss of opposition (thumb falls in plane of palm) — median nerve at wrist. Claw hand: hyperextension at MCP + flexion at IP of ring and little fingers — ulnar nerve at wrist.",
          },
          {
            text: "WAFT for Wartenberg: Wartenberg = Abducted Finger (due to) Third palmar interosseous loss",
            explanation:
              "Wartenberg's sign: little finger remains abducted at rest because the 3rd palmar interosseous (adductor of little finger, supplied by ulnar nerve) is paralyzed.",
          },
        ],
        keyPoints: [
          "Ape hand deformity: median nerve injury at wrist, loss of thumb opposition",
          "Ulnar claw hand: ring and little fingers clawed, Froment's sign positive",
          "Carpal tunnel syndrome: most common entrapment neuropathy, Phalen's and Tinel's tests",
          "Froment's sign tests adductor pollicis (ulnar nerve)",
          "Felon: pulp space infection, risk of distal phalanx osteomyelitis, fishmouth incision",
          "Horseshoe abscess: thumb and little finger sheath infection spreading via space of Parona",
          "Trigger finger: A1 pulley thickening, common in diabetics",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 10-11 (Clinical Anatomy sections)",
            edition: "8th",
          },
        ],
      },
      {
        layer: 4,
        slug: "hand-muscles-spaces-exam",
        title: "Hand: Muscles & Spaces - Exam Preparation",
        estimatedMinutes: 15,
        summary:
          "High-yield exam points for NEXT/NEET PG on hand muscles, nerve injuries, deformities, and infections.",
        contentMd: `# Hand - Exam Preparation

## One-Liner High Yield Facts

- Muscles in the hand supplied by median nerve: **LOAF** (Lateral 2 lumbricals, Opponens pollicis, APB, FPB superficial head)
- All other intrinsic hand muscles: **Ulnar nerve**
- Nerve supply of adductor pollicis: **Ulnar nerve (deep branch)**
- Test for adductor pollicis: **Froment's sign**
- Ape hand deformity: **Median nerve injury at wrist**
- Claw hand deformity: **Ulnar nerve injury at wrist**
- Ulnar paradox: **Low lesion = more clawing**
- Pointing index sign: **Median nerve injury at elbow**
- Most important hand function: **Opposition of thumb (median nerve)**
- Palmar interossei action: **Adduction** (PAD)
- Dorsal interossei action: **Abduction** (DAB)
- Lumbricals action: **Flex MCP + extend IP simultaneously**
- Lumbricals origin: **FDP tendons** (unique: tendon to tendon)
- Most common hand infection: **Paronychia**
- Horseshoe abscess: **Communication between thumb (radial) and little finger (ulnar) synovial sheaths**
- Space of Parona: **In front of pronator quadratus** (forearm space communicating with hand spaces)
- Trigger finger: **A1 pulley thickening**
- Dupuytren's contracture affects: **Palmar aponeurosis** (ring and little fingers most common)
- Wartenberg's sign: **Little finger stays abducted** (ulnar nerve palsy)
- Jeanne's sign: **MCP hyperextension of thumb** during key pinch (ulnar palsy)
- Most common nerve injured in Guyon's canal: **Ulnar nerve (deep branch)**
- 1st dorsal interosseous wasting: **Early sign of ulnar nerve palsy**
- Carpal tunnel syndrome: nocturnal paresthesia, **Phalen's test** + **Tinel's sign**

---

## Comparison Tables

### Hand Deformities

| Deformity | Nerve Injured | Level | Key Feature |
|-----------|--------------|-------|-------------|
| Ape hand | Median | Wrist | Loss of opposition, thenar wasting |
| Hand of benediction | Median | Elbow | Cannot flex index + middle when making fist |
| Ulnar claw (ring + little) | Ulnar | Wrist | MCP hyperextension + IP flexion (ring, little) |
| Complete claw | Median + Ulnar | Wrist | All 4 fingers clawed |
| Wrist drop | Radial | Arm | Cannot extend wrist or fingers |

### Interossei Comparison

| Feature | Palmar Interossei | Dorsal Interossei |
|---------|------------------|-------------------|
| Number | 4 | 4 |
| Shape | Unipennate | Bipennate |
| Action | ADDuction (PAD) | ABDuction (DAB) |
| Nerve | Ulnar (deep branch) | Ulnar (deep branch) |
| Mnemonic | PAD | DAB |

### Clinical Tests Summary

| Test | What it Tests | Positive Finding |
|------|-------------|------------------|
| Froment's sign | Adductor pollicis (ulnar) | IP flexion of thumb during pinch |
| Phalen's test | Median at carpal tunnel | Paresthesia at 60 sec wrist flexion |
| Tinel's sign | Median at carpal tunnel | Tingling on tapping over flexor retinaculum |
| Wartenberg's sign | 3rd palmar interosseous (ulnar) | Abducted little finger at rest |
| Egawa's test | Interossei (ulnar) | Cannot abduct middle finger |

---

## Previous Year Question Themes
- LOAF muscles (very frequently asked)
- Froment's sign mechanism
- Ulnar vs. median nerve injury deformities
- Claw hand mechanism and ulnar paradox
- Horseshoe abscess pathway
- Carpal tunnel syndrome
- PAD-DAB concept`,
        mnemonics: [
          {
            text: "LOAF for median nerve in hand",
            explanation:
              "Lateral 2 Lumbricals, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis (superficial head). The most tested mnemonic for hand anatomy.",
          },
          {
            text: "Froment's = French paper = Ulnar nerve",
            explanation:
              "Froment's sign: patient asked to grip a paper between thumb and index finger. In ulnar nerve palsy, adductor pollicis is weak, so FPL (median) compensates causing IP flexion of thumb.",
          },
        ],
        keyPoints: [
          "LOAF = only median nerve-supplied muscles in hand (most tested)",
          "Froment's sign = ulnar nerve test (adductor pollicis)",
          "Ape hand = median at wrist; Claw hand = ulnar at wrist",
          "PAD-DAB for interossei actions",
          "Horseshoe abscess: thumb and little finger sheaths communicate",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 10-11",
            edition: "8th",
          },
        ],
      },
      {
        layer: 5,
        slug: "hand-muscles-spaces-recall",
        title: "Hand: Muscles & Spaces - Active Recall",
        estimatedMinutes: 10,
        summary:
          "Self-test flashcards covering hand muscles, nerve supply, deformities, infections, and clinical tests.",
        contentMd: `# Active Recall - Hand

**Q1:** What does LOAF stand for and which nerve supplies these muscles?
> Lateral 2 Lumbricals, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis (superficial head). All supplied by the median nerve (recurrent branch).

**Q2:** What is the action of palmar vs. dorsal interossei?
> PAD: Palmar ADduct (bring fingers together). DAB: Dorsal ABduct (spread fingers apart).

**Q3:** What is Froment's sign and what does it test?
> Patient grips paper between thumb and index finger. In ulnar nerve palsy, the IP joint of the thumb flexes (FPL compensation for weak adductor pollicis). Tests ulnar nerve.

**Q4:** What deformity results from median nerve injury at the wrist?
> Ape hand (simian hand) — loss of thumb opposition, thenar wasting. Thumb falls in the plane of the palm.

**Q5:** Explain the mechanism of ulnar claw hand.
> Loss of lumbricals (3rd, 4th) and interossei leads to unopposed ED action (MCP hyperextension) and unopposed FDP action (IP flexion) in ring and little fingers.

**Q6:** What is a horseshoe abscess?
> Infection spreading between the radial bursa (thumb) and ulnar bursa (little finger) through the space of Parona in the forearm, forming a U-shaped collection.

**Q7:** Name the 4 Kanavel signs of flexor tendon sheath infection.
> 1. Fusiform (sausage) swelling, 2. Flexed posture, 3. Tenderness along flexor sheath, 4. Pain on passive extension.

**Q8:** What is a felon? How is it treated?
> Pulp space infection of the fingertip. Risk of distal phalanx osteomyelitis. Treated by fishmouth incision or lateral incision for drainage.

**Q9:** Name the 3 thenar muscles and their nerve supply.
> APB, FPB (superficial head), Opponens pollicis — all by median nerve (recurrent branch). Deep head of FPB is ulnar.

**Q10:** What is Wartenberg's sign?
> Little finger remains abducted at rest due to paralysis of the 3rd palmar interosseous (ulnar nerve palsy).

**Q11:** What is trigger finger and which structure is affected?
> Stenosing tenosynovitis of the A1 pulley at the MCP joint level. Finger locks in flexion then snaps straight.

**Q12:** Which muscles extend the IP joints of the fingers?
> Lumbricals and interossei (acting through the extensor expansion). Extensor digitorum alone CANNOT extend IP joints.`,
        mnemonics: [],
        keyPoints: [
          "12 active recall questions covering all major hand anatomy concepts",
          "Emphasis on nerve injuries, deformities, clinical tests, and hand infections",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 10-11",
            edition: "8th",
          },
        ],
      },
    ],
  },

  // ─── Topic 8: Joints of Upper Limb ────────────────────────
  {
    topicCode: "AN-MOD-01-TOP-08",
    layers: [
      {
        layer: 1,
        slug: "upper-limb-joints-foundation",
        title: "Joints of Upper Limb - Foundation",
        estimatedMinutes: 20,
        summary:
          "The upper limb joints include the elbow joint complex (humeroulnar, humeroradial, proximal radioulnar), distal radioulnar joint, wrist joint, and joints of the hand (CMC, MCP, IP joints). The carrying angle and its clinical significance are important concepts.",
        contentMd: `# Joints of Upper Limb

## 1. Elbow Joint

### Type
**Compound synovial joint** — 3 articulations share one joint capsule:
1. **Humeroulnar** (trochlea + trochlear notch) — hinge joint
2. **Humeroradial** (capitulum + radial head) — ball-and-socket (functionally hinge)
3. **Proximal radioulnar** (radial head + radial notch of ulna) — pivot joint

### Movements
| Movement | Range | Muscles |
|----------|-------|---------|
| Flexion | 0-150 degrees | Brachialis (main), Biceps, Brachioradialis |
| Extension | 150-0 degrees | Triceps (main), Anconeus |

> **Key Concept:** Brachialis is the **workhorse of elbow flexion** (works in all positions of forearm). Biceps is most effective when forearm is supinated. Brachioradialis is most effective in mid-prone position.

### Ligaments
| Ligament | Attachments | Function |
|----------|-------------|----------|
| Medial (Ulnar) collateral | Medial epicondyle to coronoid + olecranon | Resists valgus stress |
| Lateral (Radial) collateral | Lateral epicondyle to annular ligament | Resists varus stress |
| Annular ligament | Encircles radial head, attached to radial notch of ulna | Holds radial head in place |

### Carrying Angle
- **Definition**: Angle between the long axis of the arm and forearm when elbow is fully extended and forearm supinated
- **Normal values**: Males ~5-10 degrees, Females ~10-15 degrees (valgus angle)
- **Clinical significance**: Increased in females (wider pelvis), allows the forearm to clear the hips during walking while carrying objects

> **Clinical Pearl:** Abnormal carrying angle: **cubitus valgus** (increased, >15 degrees) — associated with tardy ulnar nerve palsy. **Cubitus varus** (decreased/reversed, gun-stock deformity) — most common deformity after supracondylar fracture in children.

---

## 2. Proximal Radioulnar Joint
- **Type**: Synovial pivot joint
- **Articulation**: Head of radius rotates within the ring formed by annular ligament + radial notch of ulna
- **Movement**: Pronation and supination
- Shares the joint capsule with the elbow joint

---

## 3. Distal Radioulnar Joint
- **Type**: Synovial pivot joint
- **Articulation**: Head of ulna with ulnar notch of radius
- **Articular disc** (triangular fibrocartilage complex — TFCC): separates the distal ulna from the carpal bones
- **Movement**: Pronation and supination (radius rotates around ulna)

---

## 4. Wrist Joint (Radiocarpal Joint)

### Type
Synovial **condyloid (ellipsoid)** joint

### Articulation
- **Proximal**: Distal end of radius + articular disc (TFCC)
- **Distal**: Scaphoid, lunate, triquetral (proximal row of carpals)

> **Key fact:** The ulna does NOT directly articulate with the carpal bones. The articular disc intervenes.

### Movements
| Movement | Range | Muscles |
|----------|-------|---------|
| Flexion | 80 degrees | FCR, FCU, Palmaris longus |
| Extension | 70 degrees | ECRL, ECRB, ECU |
| Abduction (radial deviation) | 15 degrees | FCR, ECRL, ECRB, APL |
| Adduction (ulnar deviation) | 35 degrees | FCU, ECU |

> **Key fact:** Ulnar deviation (adduction) has greater range than radial deviation (abduction) because the radial styloid extends more distally than the ulnar styloid.

### Ligaments
- Palmar radiocarpal (strongest)
- Dorsal radiocarpal
- Radial collateral
- Ulnar collateral

---

## 5. Carpal Joints (Intercarpal + Midcarpal)

### Midcarpal Joint
- Between proximal and distal rows of carpal bones
- Compound joint: partly condyloid (medially), partly sellar (laterally)
- Contributes to wrist flexion/extension

### Carpal Bones Arrangement (2 rows of 4)
- **Proximal row (lateral to medial)**: Scaphoid, Lunate, Triquetral, Pisiform
- **Distal row (lateral to medial)**: Trapezium, Trapezoid, Capitate, Hamate

---

## 6. Carpometacarpal (CMC) Joints

### 1st CMC Joint (Thumb)
- **Type**: Synovial **saddle (sellar)** joint
- **Articulation**: Trapezium + 1st metacarpal
- Allows **opposition** — the most important movement of the hand
- Movements: Flexion, extension, abduction, adduction, opposition, circumduction

### 2nd-5th CMC Joints
- **Type**: Synovial plane joints
- Limited gliding movements
- 5th CMC has slightly more mobility (allows cupping of the palm)

---

## 7. Metacarpophalangeal (MCP) Joints

- **Type**: Synovial **condyloid** joints
- **Movements**: Flexion (90 degrees), extension (30-45 degrees), abduction, adduction, circumduction
- **Collateral ligaments**: Taut in flexion, lax in extension
- **Deep transverse metacarpal ligament**: connects heads of 2nd-5th metacarpals (prevents splaying)

> **Clinical Pearl:** MCP joints should always be splinted in **flexion** (90 degrees) because collateral ligaments are taut in flexion and lax in extension. Splinting in extension leads to shortening of collateral ligaments and permanent stiffness.

---

## 8. Interphalangeal (IP) Joints

- **Type**: Synovial **hinge** joints
- **Movements**: Flexion and extension only
- **PIP**: Proximal interphalangeal
- **DIP**: Distal interphalangeal
- Thumb has only 1 IP joint
- **Collateral ligaments**: Taut in extension (opposite of MCP)`,
        mnemonics: [
          {
            text: "Some Lovers Try Positions That They Can't Handle",
            explanation:
              "Carpal bones lateral to medial, proximal row then distal: Scaphoid, Lunate, Triquetral, Pisiform, Trapezium, Trapezoid, Capitate, Hamate.",
          },
          {
            text: "Carrying angle: VALGUS is Van (increased), VARUS is Car (decreased/gun-stock)",
            explanation:
              "Cubitus valgus = increased carrying angle (associated with tardy ulnar nerve palsy). Cubitus varus = decreased/reversed angle (gun-stock deformity after supracondylar fracture in children).",
          },
        ],
        keyPoints: [
          "Elbow: compound joint with 3 articulations sharing one capsule",
          "Carrying angle: 5-10 degrees in males, 10-15 degrees in females",
          "Cubitus valgus: tardy ulnar nerve palsy; Cubitus varus: supracondylar fracture complication",
          "Wrist joint: radius + articular disc with scaphoid, lunate, triquetral; ulna does NOT directly articulate",
          "1st CMC joint: saddle joint at trapezium, allows thumb opposition",
          "MCP joints: splint in flexion (collateral ligaments taut in flexion)",
          "IP joints: hinge joints, only flexion and extension",
          "Annular ligament holds the radial head in place at proximal radioulnar joint",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 4, 7, 12 (Joints of Upper Limb)",
            edition: "8th",
          },
        ],
      },
      {
        layer: 2,
        slug: "upper-limb-joints-mechanism",
        title: "Joints of Upper Limb - Mechanism",
        estimatedMinutes: 30,
        summary:
          "Detailed mechanisms of elbow stability, radioulnar joint mechanics, wrist kinematics, and the unique mechanism of thumb opposition at the 1st CMC joint.",
        contentMd: `# Joints of Upper Limb - Mechanism

## Elbow Joint Stability

### Primary Stabilizers
| Structure | Role |
|-----------|------|
| Humeroulnar articulation | Primary bony stability (olecranon locks into olecranon fossa) |
| Medial (ulnar) collateral ligament | Primary restraint against valgus stress (most important ligament of elbow) |
| Lateral collateral ligament complex | Restraint against varus stress and posterolateral rotatory instability |

### Secondary Stabilizers
- Radial head (secondary valgus restraint — becomes primary if MCL is torn)
- Common flexor-pronator mass (dynamic valgus stabilizer)
- Joint capsule (resists distraction)

> **Key Concept:** The medial collateral ligament (MCL) is the most important ligament of the elbow for stability. Its anterior band is the strongest component and resists valgus stress during the late cocking phase of throwing.

---

## Mechanism of Pronation and Supination

### The Radioulnar Joints Work as a Unit
- Proximal radioulnar joint (pivot) + Distal radioulnar joint (pivot) + Interosseous membrane
- The radius rotates around the relatively fixed ulna
- In supination: radius and ulna are parallel
- In pronation: radius crosses over ulna

### Axis of Rotation
- Passes through the center of the radial head (proximally) to the base of the ulnar styloid (distally)
- The axis is oblique, not vertical

### Interosseous Membrane Role
- Fibers run obliquely: from radius (above) to ulna (below)
- Transmits force from radius to ulna (e.g., during push-ups, FOOSH)
- The oblique cord (superior) runs in the opposite direction

---

## Wrist Kinematics

### Contributions to Total Wrist Motion
| Movement | Radiocarpal Joint | Midcarpal Joint |
|----------|------------------|-----------------|
| Flexion | 50 degrees | 50 degrees (equal contribution) |
| Extension | 35 degrees | 50 degrees (midcarpal contributes more) |
| Radial deviation | 8 degrees | 7 degrees |
| Ulnar deviation | 15 degrees | 20 degrees |

### Dart-Throwing Motion
- Most functional wrist motion occurs in an oblique plane (radial extension to ulnar flexion)
- This motion occurs mainly at the midcarpal joint
- Important concept in wrist rehabilitation

### Scaphoid Biomechanics
- The scaphoid bridges both carpal rows (proximal and distal)
- Acts as a link bone between the two rows
- This is why it fractures so commonly — it transmits forces between rows
- Blood supply enters distally (dorsal branch of radial artery) → proximal pole has poor blood supply → risk of **avascular necrosis (AVN)**

---

## 1st CMC Joint — Mechanism of Opposition

Opposition is a complex movement that involves 3 component movements:
1. **Abduction** (at right angles to the palm)
2. **Medial rotation** (the thumb rotates so the pulp faces the fingers)
3. **Flexion** (at the CMC and MCP joints)

### The Saddle Joint Mechanism
- The trapezium and 1st metacarpal have reciprocally concavo-convex (saddle-shaped) surfaces
- This allows 2 degrees of freedom plus axial rotation
- The 2 axes are: flexion-extension and abduction-adduction
- The rotation component (during opposition) is partly due to the shape of the articular surfaces and partly to muscle action (opponens pollicis)

> **Key Concept:** The 1st CMC joint is the only saddle joint in the body that is functionally important. Damage to this joint or its motor supply (median nerve) results in severe hand disability.

---

## MCP Joint Mechanics

### Collateral Ligament Behavior
| Position | Collateral Ligament | Reason |
|----------|-------------------|--------|
| Flexion | **Taut** | Metacarpal head is wider anteriorly (cam effect) |
| Extension | **Lax** | Narrower posterior surface of metacarpal head |

This is why:
- **MCP joints should be splinted in flexion** (Position of Safe Immobilization = POSI)
- If splinted in extension, collateral ligaments shorten → permanent stiffness

### Position of Safe Immobilization (POSI)
| Joint | Position | Reason |
|-------|----------|--------|
| MCP | 70-90 degrees flexion | Collateral ligaments taut, prevents shortening |
| IP | Full extension (0 degrees) | Collateral ligaments taut in extension at IP |
| Wrist | 20-30 degrees extension | Functional position |

> **Clinical Pearl:** The "Edinburgh position" (intrinsic plus position) is the safe position for hand splinting: wrist extended, MCP flexed, IP extended. This is the position that prevents joint contractures.

---

## Triangular Fibrocartilage Complex (TFCC)

### Components
- Articular disc (triangular fibrocartilage)
- Meniscus homologue
- Ulnar collateral ligament
- Dorsal and palmar radioulnar ligaments
- Extensor carpi ulnaris subsheath

### Functions
1. Cushions forces across the ulnocarpal joint
2. Stabilizes the distal radioulnar joint
3. Allows smooth rotation during pronation/supination
4. Bears ~20% of axial load across the wrist (radius bears 80%)`,
        mnemonics: [
          {
            text: "MCP Flexion = Taut ligaments = Safe position (Think: Fist = Fixed)",
            explanation:
              "MCP collateral ligaments are taut in flexion due to the cam-shaped metacarpal head. Always splint MCP joints in flexion to prevent contracture.",
          },
          {
            text: "Scaphoid = S for Supplied distally, S for Susceptible to AVN proximally",
            explanation:
              "Scaphoid blood supply enters from the distal pole (dorsal branch of radial artery). The proximal pole has poor supply, making it vulnerable to avascular necrosis after fracture.",
          },
        ],
        keyPoints: [
          "Medial collateral ligament is the most important elbow ligament (resists valgus stress)",
          "Pronation/supination: radius rotates around the fixed ulna via proximal and distal radioulnar joints",
          "Scaphoid bridges both carpal rows, blood supply from distal to proximal — risk of AVN",
          "1st CMC joint: only functionally important saddle joint, allows thumb opposition",
          "MCP collateral ligaments: taut in flexion (cam effect), lax in extension",
          "POSI: MCP in flexion, IP in extension, wrist in 20-30 degrees extension",
          "TFCC separates ulna from carpals, bears 20% of wrist axial load",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 4, 7, 12",
            edition: "8th",
          },
        ],
      },
      {
        layer: 3,
        slug: "upper-limb-joints-clinical",
        title: "Joints of Upper Limb - Clinical Application",
        estimatedMinutes: 20,
        summary:
          "Clinical anatomy of upper limb joint injuries: elbow dislocations, pulled elbow, fractures around the wrist, and hand joint disorders relevant to Indian clinical practice.",
        contentMd: `# Joints of Upper Limb - Clinical Application

## Elbow Injuries

### Elbow Dislocation
- **Most common type**: Posterior dislocation (olecranon displaced posteriorly)
- Mechanism: FOOSH with elbow slightly flexed
- **Structures at risk**: Ulnar nerve, brachial artery, median nerve
- **Most commonly injured nerve**: Ulnar nerve (behind the medial epicondyle)

### Pulled Elbow (Nursemaid's Elbow)
- **Subluxation of the radial head** from the annular ligament
- Common in children aged **2-5 years** (annular ligament is loose)
- Mechanism: Sudden pull on the child's outstretched arm (e.g., parent pulling child's hand while crossing road)
- Child holds the arm in **pronation and slight flexion**, refuses to supinate
- Treatment: **Supination with gentle pressure on radial head** (immediate reduction)

> **Clinical Pearl:** Pulled elbow is extremely common in Indian outpatient clinics. History of a parent pulling the child's hand in a crowded market or crossing a busy road is classic. Reduction is simple and dramatic — the child immediately starts using the arm.

### Lateral Epicondylitis (Tennis Elbow)
- Degenerative tendinopathy of the **common extensor origin** (especially ECRB)
- Pain on lateral aspect of elbow, worsened by gripping
- **Cozen's test**: Pain on resisted wrist extension with pronated forearm
- Common in manual laborers, housewives (wringing clothes), cricket players in India
- Treatment: Rest, NSAIDs, physiotherapy, corticosteroid injection, PRP

### Medial Epicondylitis (Golfer's Elbow)
- Tendinopathy of the **common flexor origin**
- Pain on medial aspect of elbow
- Test: Pain on resisted wrist flexion with supinated forearm
- Less common than lateral epicondylitis

### Olecranon Bursitis (Student's Elbow)
- Inflammation of the olecranon bursa
- Due to repeated pressure on the elbow (leaning on desk while studying)
- Fluctuant swelling over the olecranon

---

## Wrist and Carpal Injuries

### Scaphoid Fracture
- **Most commonly fractured carpal bone**
- Mechanism: FOOSH
- **Tenderness in anatomical snuffbox**
- X-ray may be **negative initially** — repeat at 2 weeks or do MRI
- **Complication**: Avascular necrosis (AVN) of proximal pole (blood supply enters distally)
- Treatment: Thumb spica cast (includes the thumb); surgical fixation for displaced fractures

### Lunate Dislocation
- Most commonly dislocated carpal bone
- Mechanism: Hyperextension injury of wrist
- The lunate displaces anteriorly (volarly)
- Can compress the **median nerve** in the carpal tunnel
- Perilunate dislocation: all carpals except lunate move posteriorly

### Colles Fracture vs. Smith Fracture

| Feature | Colles Fracture | Smith Fracture |
|---------|----------------|----------------|
| Distal fragment | Dorsal displacement | Volar (palmar) displacement |
| Mechanism | FOOSH (fall on dorsiflexed hand) | Fall on palmar-flexed hand |
| Deformity | Dinner fork (lateral view) | Garden spade (reverse Colles) |
| Common in | Elderly women (osteoporosis) | Young adults |

### Barton Fracture
- Intra-articular fracture-dislocation of the distal radius
- Dorsal Barton (more common) or volar Barton
- Treatment: ORIF (operative fixation required)

---

## Hand Joint Disorders

### Bennett Fracture
- Intra-articular fracture of the base of the **1st metacarpal**
- The small medial fragment stays in place (attached to trapezium by ligament)
- The shaft fragment displaces laterally and proximally (pulled by APL)
- Treatment: ORIF for anatomical reduction

### Boxer's Fracture
- Fracture of the neck of the **5th metacarpal**
- Mechanism: Punch with a closed fist
- Apex dorsal angulation
- Common in young males (altercations)

### Gamekeeper's Thumb (Skier's Thumb)
- Injury to the ulnar collateral ligament of the **1st MCP joint**
- Causes instability of the thumb during pinch grip
- Stener lesion: UCL gets displaced superficial to the adductor aponeurosis (prevents healing)
- Treatment: Surgical repair if Stener lesion present

### Mallet Finger (Baseball Finger)
- Rupture of the extensor tendon at the **DIP joint**
- Due to forced flexion of the extended DIP (e.g., ball hitting the fingertip in cricket)
- Results in flexion deformity at DIP (cannot actively extend)
- Treatment: Splint DIP in extension for 6-8 weeks

### Boutonniere Deformity
- Rupture of the **central slip** of the extensor expansion at PIP level
- PIP flexion + DIP hyperextension
- The lateral bands slip volarly (below the PIP axis) → become flexors of PIP

### Swan Neck Deformity
- PIP hyperextension + DIP flexion
- Due to tightness of intrinsic muscles or volar plate laxity
- Seen in rheumatoid arthritis

### Trigger Finger
- Thickening of the **A1 pulley** causing catching/locking of the flexor tendon
- Finger locks in flexion, then snaps straight
- Common in diabetics
- Treatment: Steroid injection, surgical release of A1 pulley`,
        mnemonics: [
          {
            text: "Colles = Dorsal, Smith = Solar (Volar) — remember S for Smith and Solar/South (volar side)",
            explanation:
              "Colles fracture: dorsal displacement of distal fragment (dinner fork). Smith fracture: volar displacement (reverse Colles, garden spade deformity).",
          },
          {
            text: "Boutonniere = Bent PIP + straight DIP, Swan neck = Straight PIP + bent DIP (opposite patterns)",
            explanation:
              "Boutonniere: PIP flexed + DIP hyperextended (central slip rupture). Swan neck: PIP hyperextended + DIP flexed (intrinsic tightness/RA). They are mirror-image deformities.",
          },
        ],
        keyPoints: [
          "Pulled elbow: radial head subluxation in children 2-5 years, reduce with supination",
          "Lateral epicondylitis (tennis elbow): common extensor origin, Cozen's test",
          "Scaphoid fracture: most common carpal fracture, AVN of proximal pole, anatomical snuffbox tenderness",
          "Lunate: most commonly dislocated carpal bone, may compress median nerve",
          "Colles = dorsal displacement (dinner fork), Smith = volar displacement (garden spade)",
          "Bennett fracture: intra-articular 1st metacarpal base fracture, needs ORIF",
          "Mallet finger: extensor tendon rupture at DIP, splint in extension",
          "Boutonniere (PIP flexed + DIP extended) vs. Swan neck (PIP extended + DIP flexed)",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 4, 7, 12 (Clinical Anatomy sections)",
            edition: "8th",
          },
        ],
      },
      {
        layer: 4,
        slug: "upper-limb-joints-exam",
        title: "Joints of Upper Limb - Exam Preparation",
        estimatedMinutes: 15,
        summary:
          "High-yield exam points for NEXT/NEET PG on upper limb joints, fractures, dislocations, and deformities.",
        contentMd: `# Joints of Upper Limb - Exam Preparation

## One-Liner High Yield Facts

- Elbow joint type: **Compound synovial (3 articulations in 1 capsule)**
- 3 articulations in elbow: **Humeroulnar (hinge), Humeroradial, Proximal radioulnar (pivot)**
- Most important elbow ligament: **Medial collateral ligament (resists valgus)**
- Carrying angle in males: **5-10 degrees**; females: **10-15 degrees**
- Cubitus valgus complication: **Tardy ulnar nerve palsy**
- Cubitus varus: **Gun-stock deformity** (most common complication of supracondylar fracture)
- Pulled elbow: **Radial head subluxation** (children 2-5 years)
- Treatment of pulled elbow: **Supination with pressure on radial head**
- Tennis elbow: **Lateral epicondylitis** (common extensor origin, ECRB)
- Tennis elbow test: **Cozen's test**
- Wrist joint type: **Condyloid (ellipsoid)**
- Bones articulating at wrist: **Radius + articular disc WITH scaphoid, lunate, triquetral**
- Ulna does NOT articulate with: **Carpal bones** (TFCC intervenes)
- 1st CMC joint type: **Saddle (sellar)**
- 1st CMC articulation: **Trapezium + 1st metacarpal**
- Most commonly fractured carpal bone: **Scaphoid**
- Scaphoid complication: **AVN of proximal pole**
- Test for scaphoid fracture: **Anatomical snuffbox tenderness**
- Most commonly dislocated carpal bone: **Lunate** (anterior/volar)
- Colles fracture: **Dorsal displacement** (dinner fork deformity)
- Smith fracture: **Volar displacement** (garden spade deformity)
- Bennett fracture: **Intra-articular fracture of 1st metacarpal base**
- Boxer's fracture: **Fracture of 5th metacarpal neck**
- Mallet finger: **Extensor tendon rupture at DIP**
- Boutonniere deformity: **Central slip rupture** (PIP flexed + DIP extended)
- Swan neck deformity: **PIP hyperextended + DIP flexed** (RA)
- MCP joint should be splinted in: **Flexion** (collateral ligaments taut)
- IP joint should be splinted in: **Extension**
- POSI wrist position: **20-30 degrees extension**
- TFCC function: **Stabilizes DRUJ, bears 20% of wrist load**
- Carpal bones proximal row: **Scaphoid, Lunate, Triquetral, Pisiform**
- Carpal bones distal row: **Trapezium, Trapezoid, Capitate, Hamate**

---

## Comparison Tables

### Elbow Epicondylitis

| Feature | Lateral (Tennis) | Medial (Golfer's) |
|---------|-----------------|-------------------|
| Common extensor/flexor | Extensor origin | Flexor origin |
| Tendon most affected | ECRB | Pronator teres, FCR |
| Test | Cozen's (resisted wrist extension) | Resisted wrist flexion |
| More common | Yes | No |

### Fractures Around the Wrist

| Fracture | Bone | Displacement | Deformity | Key Feature |
|----------|------|-------------|-----------|-------------|
| Colles | Distal radius | Dorsal | Dinner fork | Elderly women, FOOSH |
| Smith | Distal radius | Volar | Garden spade | Reverse Colles |
| Barton | Distal radius | Intra-articular | — | Fracture-dislocation |
| Scaphoid | Scaphoid | Waist | — | AVN proximal pole |
| Bennett | 1st metacarpal base | Intra-articular | — | Needs ORIF |
| Boxer's | 5th metacarpal neck | Apex dorsal | — | Punch injury |

### Finger Deformities

| Deformity | PIP | DIP | Cause |
|-----------|-----|-----|-------|
| Mallet finger | Normal | Flexed | Extensor tendon rupture at DIP |
| Boutonniere | Flexed | Hyperextended | Central slip rupture |
| Swan neck | Hyperextended | Flexed | Intrinsic tightness / RA |

---

## Previous Year Question Themes
- Carrying angle values and clinical significance
- Pulled elbow mechanism and treatment
- Carpal bone fractures and dislocations (scaphoid, lunate)
- Colles vs. Smith fracture comparison
- MCP vs. IP splinting positions
- Finger deformities (mallet, boutonniere, swan neck)
- 1st CMC joint type and function`,
        mnemonics: [
          {
            text: "Some Lovers Try Positions That They Can't Handle",
            explanation:
              "Carpal bones from lateral to medial, proximal row then distal: Scaphoid, Lunate, Triquetral, Pisiform, Trapezium, Trapezoid, Capitate, Hamate. Most tested carpal bone mnemonic.",
          },
          {
            text: "Mallet = DIP droops (M for Most distal), Boutonniere = PIP Bends (B for Bend at PIP)",
            explanation:
              "Mallet finger: DIP cannot extend (most distal joint affected). Boutonniere: PIP is bent/flexed (central slip rupture at PIP level).",
          },
        ],
        keyPoints: [
          "Carrying angle: cubitus valgus = tardy ulnar palsy, cubitus varus = gun-stock deformity",
          "Scaphoid: most fractured carpal, AVN of proximal pole",
          "Lunate: most dislocated carpal bone",
          "Colles = dorsal (dinner fork), Smith = volar (garden spade)",
          "MCP splint in flexion, IP splint in extension (POSI)",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 4, 7, 12",
            edition: "8th",
          },
        ],
      },
      {
        layer: 5,
        slug: "upper-limb-joints-recall",
        title: "Joints of Upper Limb - Active Recall",
        estimatedMinutes: 10,
        summary:
          "Self-test flashcards covering upper limb joints, carrying angle, fractures, dislocations, and deformities.",
        contentMd: `# Active Recall - Joints of Upper Limb

**Q1:** Name the 3 articulations within the elbow joint.
> Humeroulnar (hinge), Humeroradial, Proximal radioulnar (pivot). All share one capsule.

**Q2:** What is the normal carrying angle and how does it differ between sexes?
> Males: 5-10 degrees. Females: 10-15 degrees (valgus angle when elbow extended and forearm supinated).

**Q3:** What is cubitus valgus and its complication?
> Increased carrying angle (>15 degrees). Associated with tardy ulnar nerve palsy (ulnar nerve stretched behind medial epicondyle).

**Q4:** What is pulled elbow and how is it treated?
> Subluxation of radial head from annular ligament in children 2-5 years. Treated by supination with gentle pressure on the radial head.

**Q5:** What type of joint is the wrist joint and which bones articulate?
> Condyloid (ellipsoid) joint. Proximal: radius + articular disc (TFCC). Distal: scaphoid, lunate, triquetral. Ulna does NOT directly articulate.

**Q6:** What type of joint is the 1st CMC joint and why is it important?
> Saddle (sellar) joint between trapezium and 1st metacarpal. Allows thumb opposition — the most important hand function.

**Q7:** Why should MCP joints be splinted in flexion?
> Collateral ligaments are taut in flexion (due to cam-shaped metacarpal head). Splinting in extension allows ligament shortening and permanent stiffness.

**Q8:** What is the most commonly fractured carpal bone and its complication?
> Scaphoid. Complication: AVN of the proximal pole (blood supply enters distally).

**Q9:** Name the carpal bones in order (proximal row, lateral to medial; then distal row).
> Proximal: Scaphoid, Lunate, Triquetral, Pisiform. Distal: Trapezium, Trapezoid, Capitate, Hamate.

**Q10:** How do you differentiate Colles from Smith fracture?
> Colles: dorsal displacement, dinner fork deformity (FOOSH in elderly). Smith: volar displacement, garden spade deformity (fall on palmar-flexed hand).

**Q11:** What is the difference between boutonniere and swan neck deformity?
> Boutonniere: PIP flexed + DIP hyperextended (central slip rupture). Swan neck: PIP hyperextended + DIP flexed (RA, intrinsic tightness). They are mirror images.

**Q12:** What is mallet finger and how is it treated?
> Rupture of extensor tendon at DIP joint. DIP remains flexed, cannot actively extend. Treatment: splint DIP in extension for 6-8 weeks.

**Q13:** What is Cozen's test and what does it diagnose?
> Pain on resisted wrist extension with pronated forearm. Diagnoses lateral epicondylitis (tennis elbow).

**Q14:** What is the POSI for hand splinting?
> MCP: 70-90 degrees flexion. IP: full extension. Wrist: 20-30 degrees extension. Prevents joint contractures.`,
        mnemonics: [],
        keyPoints: [
          "14 active recall questions covering all major upper limb joint concepts",
          "Focus on carrying angle, fractures, dislocations, splinting positions, and deformities",
        ],
        textbookRefs: [
          {
            book: "BD Chaurasia",
            chapter: "Upper Limb - Ch 4, 7, 12",
            edition: "8th",
          },
        ],
      },
    ],
  },
];
