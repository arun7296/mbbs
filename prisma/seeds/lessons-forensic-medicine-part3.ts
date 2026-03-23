import type { TopicLessons } from "./content-loader";

export const forensicMedicinePart3Lessons: TopicLessons[] = [
  {
    topicCode: "FM-MOD-02-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "death-postmortem-layer-1-foundation",
        title: "Death & Postmortem Changes - Foundation",
        estimatedMinutes: 25,
        summary: "Definition of death, early postmortem changes, and basic medico-legal aspects.",
        contentMd: `# Death & Postmortem Changes - Foundation

## Definition of Death

### Clinical Death
Cessation of cardiopulmonary function (heartbeat, breathing, circulation).
- Reversible if CPR initiated within 3-5 minutes
- Brain damage begins after 4-6 minutes without oxygen
- Window period varies with temperature and individual factors

### Brain Death
Complete and irreversible cessation of all brain function (cerebral and brainstem).
- Irreversible and permanent
- Requires specific diagnostic criteria and tests
- Legal equivalence to clinical death in most jurisdictions

## Early Postmortem Changes (First 24 Hours)

### Pallor Mortis (Pallor Death)
Blanching/paleness of skin after death.
- **Onset**: 15-30 minutes
- **Cause**: Loss of circulation and hemoglobin oxygenation
- **Appearance**: Pale, ashen skin; white appearance of face and lips
- **Forensic value**: Early indicator of death time

### Algor Mortis (Cold Death)
Cooling of body after death; body temperature decreases toward environment.
- **Rate**: ~1-1.5°F per hour (0.5-0.8°C/hour) in normal conditions
- **Onset**: Begins immediately
- **Follows**: Newton's law of cooling
- **Variations**: Environmental temperature, body size, clothing, cause of death affect rate

### Rigor Mortis (Stiffness of Death)
Muscular rigidity appearing after death.
- **Onset**: 2-6 hours after death
- **Complete**: 8-12 hours
- **Duration**: 24-48 hours (disappears with decomposition)
- **Pattern**: Eyelids → jaw → neck/trunk → arms → legs (cephalocaudal)
- **Cause**: ATP depletion; actin-myosin cannot relax

### Livor Mortis (Lividity)
Purple-red discoloration in dependent parts due to blood pooling.
- **Onset**: 30 minutes to 2 hours
- **Complete**: 8-12 hours
- **Fixed**: ~12 hours (becomes non-blanching)
- **Color**: Purple-red from deoxygenated hemoglobin
- **Significance**: Indicates body position at time of death

## Postmortem Interval (PMI) Estimation

Using early postmortem changes to estimate time of death:
- Pallor: 15-30 minutes
- Algor: 1-1.5°F/hour
- Rigor: Begins 2-6 hours, complete 8-12 hours
- Livor: Begins 30 min-2 hours, fixed ~12 hours

**Limitations**: Individual variation (±2-4 hours), environmental factors, body composition

## Medico-Legal Aspects

### Time of Death
- Estimated from postmortem changes
- Used for legal/insurance purposes
- Death certificate issued based on cause
- Important for establishing timeline of events

### Certificate of Death
- Documents cause of death
- Documents estimated time of death
- Legal requirement for registration
- Used by family for inheritance, insurance claims

### Body Identification
- Early postmortem changes used for preliminary identification
- Tattoos, birthmarks, scars examined
- Photography important
- Fingerprinting and DNA if needed`,
        mnemonics: [
          {
            text: "Early Postmortem Changes = Pallor, Algor, Rigor, Livor (PARL)",
            explanation: "Four cardinal changes in order of appearance"
          },
          {
            text: "Rigor Timeline = 2-6 hours onset, 8-12 hours complete, 24-48 hours duration",
            explanation: "Key timeline for rigor mortis"
          }
        ],
        keyPoints: [
          "Pallor mortis: Blanching within 15-30 minutes of death",
          "Algor mortis: Body cooling at ~1-1.5°F/hour (environmental factors modify rate)",
          "Rigor mortis: Muscle stiffness from 2-6 hours onset, complete by 8-12 hours",
          "Livor mortis: Purple-red discoloration in dependent parts; fixed ~12 hours",
          "Time of death estimation: Early postmortem changes valid first 24 hours (±2-4 hours accuracy)",
          "Livor position indicates body placement at time of death"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Death and Postmortem Changes", edition: "34th" }
        ]
      },
      {
        layer: 2,
        slug: "death-postmortem-layer-2-mechanism",
        title: "Death & Postmortem Changes - Mechanism",
        estimatedMinutes: 25,
        summary: "Biochemical mechanisms and detailed physiological changes after death.",
        contentMd: `# Death & Postmortem Changes - Mechanism

## Cellular Basis of Death

### Oxygen Deprivation Timeline
- **Brain**: 4-6 minutes tolerance (begins irreversible damage)
- **Heart**: 10-15 minutes tolerance
- **Kidney/liver/spleen**: 20-30 minutes tolerance
- **Muscle and skin**: 3-4 hours tolerance
- **Bone and cartilage**: 12-24+ hours tolerance

### Anaerobic Metabolism
After circulation stops:
- Cells shift to anaerobic metabolism (no oxygen)
- Lactic acid accumulates in tissues
- Cellular pH decreases (acidosis)
- ATP rapidly depleted
- No energy available for cellular processes

## Rigor Mortis: Biochemical Mechanism

### Muscle Physiology
- Normal muscle: ATP provides energy for muscle relaxation
- Contraction: Actin-myosin interaction
- Relaxation: ATP provides energy to break cross-bridges

### After Death
1. Circulation stops → oxygen delivery ceases
2. ATP production stops (no oxidative phosphorylation)
3. Lactic acid accumulates
4. Calcium accumulates in muscle
5. Actin-myosin cross-bridges form and lock
6. Muscles contract and cannot relax
7. Results in characteristic stiffness

### Sequence of Rigor Development
1. **Eyelids** (first affected, ~2-6 hours)
2. **Jaw and facial muscles**
3. **Neck and trunk muscles**
4. **Arms and hands**
5. **Legs and feet** (last affected)

### Factors Affecting Rigor Timeline

**Accelerating factors** (speed onset):
- High temperature environment
- Physical exertion before death
- Young age
- Fever before death
- Seizures or violent struggle

**Delaying factors** (slow onset):
- Cold environment
- Extreme old age
- Prolonged wasting illness
- Muscular dystrophy
- Heavy alcohol intoxication

## Algor Mortis: Heat Loss

### Newton's Law of Cooling
Temperature difference between body and environment determines cooling rate.
- Faster cooling: Larger temperature difference
- Slower cooling: Smaller temperature difference
- Rate decreases as body approaches environmental temperature

### Standard Cooling Rate
- Normal: 1-1.5°F per hour (0.5-0.8°C/hour)
- Based on 37°C body temperature, ~20°C environment
- Approximately 1/10-1/15 of body temperature drop per hour

### Factors Modifying Cooling Rate

**Increase cooling rate**:
- Cold environment (below body temperature)
- Thin body, minimal fat
- Minimal clothing or wet clothing
- High air circulation
- Sweating before death (wet body)

**Decrease cooling rate**:
- Hot environment
- Obese body (fat insulates)
- Heavy clothing or bedding
- Enclosed space, still air
- Decomposition (generates heat, slows cooling)

## Livor Mortis: Blood Pooling and Color

### Mechanism
- After circulation stops, blood settles in dependent vessels
- Red blood cells accumulate in lowest parts
- Hemoglobin loses oxygen → deoxygenation
- Oxyhemoglobin (bright red) → reduced hemoglobin (dark purple)
- Result: Purple-red discoloration

### Hemoglobin States and Colors
- **Oxyhemoglobin**: Bright red (living person)
- **Deoxygenated hemoglobin**: Dark purple (normal livor)
- **Carboxyhemoglobin**: Cherry-red (CO poisoning)
- **Sulfhemoglobin**: Greenish (H₂S poisoning)
- **Methemoglobin**: Brown (various poisonings)

### Special Conditions Affecting Color
- **Carbon monoxide poisoning**: Cherry-red or pink livor
- **Cyanide poisoning**: Pink-red (normal oxygen level, inability to use O₂)
- **Hydrogen sulfide poisoning**: Greenish appearance
- **Cold exposure/hypothermia**: Bright red (preserved oxyhemoglobin)
- **Drowning**: Bright cherry-red appearance

## Postmortem Interval (PMI) Estimation

### Early PMI (0-24 hours)
- Pallor mortis: 15-30 minutes
- Algor mortis: 1-1.5°F/hour (affected by environment)
- Rigor mortis: Begins 2-6 hours, complete 8-12 hours
- Livor mortis: Begins 30 min-2 hours, fixed ~12 hours

### Late PMI (>24 hours)
- Early postmortem changes become unreliable
- Decomposition interferes with assessment
- Use: Decomposition stage, entomology (insects), taphonomy
- Last known alive: Interview approach
- Witness statements about when person last seen`,
        mnemonics: [
          {
            text: "Rigor Sequence = Eyelids → Jaw → Neck/Trunk → Arms → Legs (descending)",
            explanation: "Cephalocaudal (head-to-toe) progression"
          },
          {
            text: "Livor Colors = Normal (purple) vs. CO (cherry-red) vs. H₂S (greenish)",
            explanation: "Color variations indicating different conditions"
          }
        ],
        keyPoints: [
          "Anaerobic metabolism begins immediately after circulation stops",
          "ATP depletion is key mechanism of rigor mortis formation",
          "Rigor sequence: Cephalocaudal (eyelids first, legs last)",
          "Algor mortis rate ~1-1.5°F/hour affected by environmental temperature",
          "Livor mortis: Deoxygenated hemoglobin in dependent vessels causes purple-red color",
          "Special colors indicate specific causes (CO = cherry-red, H₂S = greenish, hypothermia = bright red)"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Death and Postmortem Changes", edition: "34th" }
        ]
      },
      {
        layer: 3,
        slug: "death-postmortem-layer-3-clinical",
        title: "Death & Postmortem Changes - Clinical & Forensic Application",
        estimatedMinutes: 25,
        summary: "Application in forensic cases, time of death estimation, and postmortem examination.",
        contentMd: `# Death & Postmortem Changes - Clinical & Forensic Application

## Case Study 1: Time of Death Estimation

**Scenario**: Body found at 6 PM. Temperature 32°C (90°F); rigor mortis fully developed; livor mortis fixed.

**Calculation**:
- Temperature drop: 37°C to 32°C = 5°C
- Cooling rate: 0.5-0.8°C/hour (use 0.6°C/hour)
- Hours since death: 5°C ÷ 0.6°C/hr = 8.3 hours
- Death time: 6 PM - 8.3 hours ≈ 9:30 AM ± 2 hours
- **Estimated: 7:30 AM to 11:30 AM**

**Corroborating evidence**:
- Rigor mortis fully developed (consistent with 8+ hours)
- Livor mortis fixed (consistent with 12+ hours, but may not have been checked earlier)
- All indicators point to death approximately 8-10 hours before discovery

## Case Study 2: Body Position from Livor Pattern

**Scenario**: Body found lying on right side. Livor mortis appears predominantly on left side (upper surface).

**Analysis**:
- **Expected**: Livor should be on right side (dependent, against ground)
- **Actual**: Livor on left side (upper side)
- **Interpretation**: Body was initially on left side when livor mortis developed (0.5-2 hours); then repositioned to right side
- **Timing**: Repositioning occurred after livor developed but before fixation (<12 hours post-death)
- **Forensic significance**: Post-death body movement; suggests suspicious circumstances, concealment, or disturbed scene

## Case Study 3: Poisoning Indicated by Livor Color

**Scenario**: Body discovered with cherry-red livor mortis; no obvious cause of death on scene.

**Analysis**:
- **Cherry-red livor** indicates:
  - Carbon monoxide poisoning (carboxyhemoglobin formation) OR
  - Cyanide poisoning (normal oxygen saturation without oxygen delivery) OR
  - Hypothermia (preserved oxyhemoglobin)

**Investigation steps**:
1. Scene examination: Check for gas leak, closed garage, carbon monoxide source
2. Autopsy findings: Pulmonary edema, foam in airway
3. Blood carboxyhemoglobin level (CO poisoning usually >50%)
4. Blood cyanide level if CN⁻ suspected
5. Thermal history: Check for evidence of cold exposure (hypothermia)

**Forensic value**: Cherry-red livor mortis can point toward cause before toxicology results

## Case Study 4: Decomposition Complicating PMI Estimation

**Scenario**: Body discovered 4 days after death in warm environment. Decomposition visible; early postmortem changes obscured.

**Analysis**:
- **Early postmortem changes unreliable**: Pallor, algor, rigor, livor become obscured
- **Decomposition heat**: Generates own heat, interferes with algor mortis assessment
- **Rigor mortis**: Already dissolved (24-48 hours)
- **Temperature measurement**: Not useful for accurate PMI

**Alternative methods for PMI**:
- **Entomology**: Insect colonization (flies, larvae) indicates post-death interval
- **Taphonomy**: Decomposition stage (fresh, bloated, putrefaction, etc.)
- **Botanical evidence**: Plant growth, seed germination around body
- **Last known alive**: Interview approach; witnesses to when person last seen
- **Scene evidence**: Condition of food, decay of perishables

## Distinguishing Ante-, Peri-, and Postmortem Injuries

### Antemortem Injury (Before death)
**Vital reaction present** (tissue responds to living injury):
- Hemorrhage into tissues (requires active circulation)
- Inflammation and edema
- Clot formation at injury site
- Healing signs if survived hours/days (scabbing, callus)
- Associated swelling and bruising

**Example**: Blunt force trauma with bruising around impact site

### Perimortem Injury (Around time of death)
**Timing uncertain**: Just before or after death
- Vital reaction minimal or absent
- May show some features of both antemortem and postmortem
- Difficult to distinguish; requires careful autopsy

### Postmortem Injury (After death)
**NO vital reaction**:
- NO hemorrhage into tissues (blood doesn't flow)
- NO inflammation (tissue cannot respond)
- NO swelling or edema
- Edges of wound not inflamed
- Blood doesn't clot in dead tissue

**Examples**: Animal gnawing, decomposition, rough handling, autopsy trauma

## Autopsy Findings in Early Death

### External Examination
- Identification: Tattoos, scars, birthmarks
- Injuries: Location, size, type (document with photographs)
- Postmortem changes: Pallor, algor, rigor, livor status and pattern
- Decomposition stage: Bloating, discoloration, skin slippage
- Clothing and personal effects: Evidence collection

### Internal Examination Key Findings (Natural Deaths)
- **Heart**: Coronary artery disease, atherosclerosis, myocardial infarction
- **Lungs**: Pulmonary edema (fluid in lungs), aspiration
- **Brain**: Hemorrhage, tumor, evidence of anoxia
- **Liver/kidneys**: Cirrhosis, renal failure
- **Toxicology samples**: Blood, urine, gastric contents for drugs/poisons

## Legal Implications

### Death Certificate Requirements
- Cause of death (must be determined)
- Time of death (estimated from postmortem changes and history)
- Manner of death (natural, accidental, suicide, homicide, undetermined)

### Manner of Death
- **Natural**: From disease
- **Accidental**: Unintended injury or poisoning
- **Suicide**: Self-inflicted
- **Homicide**: Caused by another person
- **Undetermined**: Cannot establish despite investigation

### Presumption of Life
- Missing and unaccounted for >7 years: Presumed dead
- Based on circumstantial evidence, not postmortem changes
- Important for inheritance and legal matters`,
        mnemonics: [
          {
            text: "Cherry-Red Livor = CO (Carbon Monoxide) or Cyanide or Cold (Hypothermia)",
            explanation: "Three conditions causing cherry-red discoloration"
          }
        ],
        keyPoints: [
          "Algor mortis allows time of death estimation within ±2-4 hours in first 24 hours",
          "Livor position indicates body placement at time of death; mismatch suggests repositioning",
          "Cherry-red livor suggests CO/cyanide/hypothermia; greenish suggests H₂S",
          "After 24-48 hours, decomposition makes early postmortem changes unreliable",
          "Vital reaction distinguishes antemortem (bleeding, inflammation) from postmortem injury",
          "Autopsy integrates postmortem changes with scene findings and history"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Death and Postmortem Changes", edition: "34th" }
        ]
      },
      {
        layer: 4,
        slug: "death-postmortem-layer-4-exam",
        title: "Death & Postmortem Changes - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Key definitions and typical exam questions with answers.",
        contentMd: `# Death & Postmortem Changes - Exam Preparation

## Key Definitions

| Term | Definition | Timeline |
|------|-----------|----------|
| Pallor mortis | Blanching/paleness of skin after death | 15-30 min |
| Algor mortis | Cooling of body following death | Immediate; ~1-1.5°F/hr |
| Rigor mortis | Muscle stiffness after death | 2-6 hr onset; 8-12 hr complete |
| Livor mortis | Purple-red discoloration in dependent parts | 30 min-2 hr onset; fixed ~12 hr |
| PMI | Postmortem interval; time since death | Varies |

## Common Exam Questions & Answers

**Q1: What is pallor mortis and when does it appear?**
A: Pallor mortis is blanching/paleness of skin after death from loss of circulation and hemoglobin oxygenation. Appears within 15-30 minutes of death.

**Q2: Define algor mortis and its normal cooling rate.**
A: Algor mortis is progressive cooling of body following Newton's law of cooling. Normal rate: 1-1.5°F (0.5-0.8°C) per hour in standard conditions.

**Q3: What modifies the rate of algor mortis?**
A: Environmental temperature (major factor), body size, clothing, air circulation, decomposition heat, premortem fever or exertion.

**Q4: What is rigor mortis and when does it appear?**
A: Muscle stiffness after death from ATP depletion and actin-myosin cross-bridge locking. Begins 2-6 hours, complete 8-12 hours, lasts 24-48 hours.

**Q5: Sequence of rigor mortis spread.**
A: Cephalocaudal (head-to-toe): Eyelids → Jaw/face → Neck/trunk → Arms → Legs.

**Q6: What accelerates rigor mortis?**
A: Heat, physical exertion before death, young age, fever, seizures.

**Q7: What delays rigor mortis?**
A: Cold, extreme old age, chronic illness, muscle wasting, alcohol intoxication.

**Q8: Define livor mortis and when does it appear?**
A: Purple-red discoloration in dependent body parts from blood pooling and hemoglobin deoxygenation. Appears 30 min-2 hours, complete 8-12 hours, fixed ~12 hours.

**Q9: What does cherry-red livor indicate?**
A: Carbon monoxide poisoning (carboxyhemoglobin), cyanide poisoning, or hypothermia.

**Q10: What does greenish livor indicate?**
A: Hydrogen sulfide (H₂S) poisoning (sulfhemoglobin formation).

**Q11: If livor mortis on upper body instead of dependent area, what does it mean?**
A: Body was repositioned after livor developed but before fixation; suggests post-death body movement.

**Q12: How do you estimate time of death using algor mortis?**
A: Temperature drop ÷ cooling rate (~0.6°C/hour) = hours since death. Add ±2-4 hours for uncertainty.

**Q13: What are the four cardinal early postmortem changes?**
A: Pallor mortis, Algor mortis, Rigor mortis, Livor mortis (PARL).

**Q14: Difference between antemortem and postmortem injury.**
A: Antemortem: Shows vital reaction (hemorrhage, inflammation, healing). Postmortem: NO vital reaction (no bleeding, no inflammation).

**Q15: Why are early postmortem changes unreliable after 24 hours?**
A: Decomposition begins, generates heat (interferes with algor), rigor disappears, livor obscured by decomposition staining, individual variation increases.

## Important Exam Points

- **PARL**: Pallor, Algor, Rigor, Livor (order of importance)
- **Rigor timeline**: 2-6 hours onset, 8-12 hours complete
- **Cooling rate**: 1-1.5°F/hour (environmental factors crucial)
- **Livor becomes fixed**: ~12 hours (non-blanching after fixation)
- **Livor position**: Indicates body position at death
- **Early PMI accuracy**: ±2-4 hours (first 24 hours only)`,
        mnemonics: [
          {
            text: "PARL = Pallor (15-30 min), Algor (1-1.5°F/hr), Rigor (2-6 hr onset), Livor (30 min-2 hr)",
            explanation: "Early postmortem changes and approximate timeline"
          },
          {
            text: "Rigor Timeline = 2-6 hours onset, 8-12 hours complete, 24-48 hours duration",
            explanation: "Key timepoints for rigor mortis"
          }
        ],
        keyPoints: [
          "Pallor mortis: Loss of circulation; appears 15-30 minutes",
          "Algor mortis: ~1-1.5°F/hour cooling; environmental temperature is major modifier",
          "Rigor mortis: Onset 2-6 hours, complete 8-12 hours; sequence is cephalocaudal",
          "Livor mortis: Appears 30 min-2 hours, fixed ~12 hours; position indicates body placement",
          "Cherry-red livor: CO/cyanide/hypothermia; greenish: H₂S poisoning",
          "Time of death estimation: Valid ±2-4 hours in early PMI; unreliable after 24 hours"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Death and Postmortem Changes", edition: "34th" }
        ]
      },
      {
        layer: 5,
        slug: "death-postmortem-layer-5-active-recall",
        title: "Death & Postmortem Changes - Active Recall",
        estimatedMinutes: 15,
        summary: "Self-assessment flashcard Q&A for spaced repetition.",
        contentMd: `# Death & Postmortem Changes - Active Recall

## Flashcard Q&A

**Q1: What is pallor mortis and when does it appear after death?**
A: Pallor mortis is blanching/paleness of skin after death due to loss of circulation and hemoglobin oxygenation. It appears within 15-30 minutes of death, visible as pale, ashen appearance of skin and lips.

**Q2: Define algor mortis and give its standard cooling rate.**
A: Algor mortis is progressive cooling of body after death. Standard rate: approximately 1-1.5°F (0.5-0.8°C) per hour in normal ambient conditions.

**Q3: What factors increase the rate of algor mortis?**
A: (1) High environmental temperature. (2) Thin/lean body. (3) Minimal clothing or wet clothing. (4) High air circulation. (5) Premortem fever or exertion.

**Q4: What factors decrease the rate of algor mortis?**
A: (1) Cold environment. (2) Obese body (fat insulates). (3) Heavy clothing/bedding. (4) Enclosed, still space. (5) Decomposition (generates heat).

**Q5: What is rigor mortis and what causes it biochemically?**
A: Rigor mortis is muscle stiffness after death. Cause: ATP depletion prevents muscle relaxation; actin-myosin cross-bridges remain locked, causing contraction and stiffness.

**Q6: When does rigor mortis begin and how long does it last?**
A: Onset: 2-6 hours after death. Complete development: 8-12 hours. Duration: 24-48 hours (then disappears as tissues decompose).

**Q7: Describe the sequence of rigor mortis development through the body.**
A: Cephalocaudal (head-to-toe) sequence: (1) Eyelids. (2) Jaw and facial muscles. (3) Neck and trunk. (4) Arms and hands. (5) Legs and feet (last).

**Q8: What conditions accelerate rigor mortis onset?**
A: (1) Heat/high temperature. (2) Physical exertion before death. (3) Young age. (4) Premortem fever. (5) Seizures or violent struggle.

**Q9: What conditions delay rigor mortis onset?**
A: (1) Cold environment. (2) Extreme old age. (3) Prolonged wasting illness. (4) Muscular dystrophy. (5) Heavy alcohol intoxication.

**Q10: Define livor mortis and explain its purple-red color.**
A: Livor mortis is purple-red discoloration in dependent body parts from blood pooling. Color from deoxygenated hemoglobin: Oxyhemoglobin (bright red) loses oxygen, becomes deoxygenated hemoglobin (dark purple).

**Q11: When does livor mortis appear and when does it become fixed?**
A: Appears: 30 minutes to 2 hours after death. Complete: 8-12 hours. Becomes fixed (non-blanching): Approximately 12 hours. Before fixation, blanches with pressure; after fixation, does not blanch.

**Q12: What does cherry-red livor mortis indicate?**
A: Cherry-red livor indicates: (1) Carbon monoxide poisoning (carboxyhemoglobin). (2) Cyanide poisoning (inability to use oxygen). (3) Hypothermia (preserved oxyhemoglobin).

**Q13: What does greenish livor mortis indicate?**
A: Greenish livor mortis indicates hydrogen sulfide (H₂S) poisoning, from sulfhemoglobin formation.

**Q14: If livor mortis appears on upper side of body instead of dependent side, what does it suggest?**
A: Suggests body was in one position when livor developed, then repositioned after livor formed but before it became fixed. Indicates post-death body movement; suspicious circumstances.

**Q15: How do you calculate time of death using algor mortis?**
A: Measure current body temperature, calculate drop from normal (37°C), divide by cooling rate (~0.6°C/hour). Example: 5°C drop ÷ 0.6 = 8.3 hours since death. Add ±2-4 hours for uncertainty.

**Q16: What is postmortem interval (PMI)?**
A: Postmortem interval is time elapsed between death and discovery of body. Estimated using early postmortem changes in first 24 hours; after that, use decomposition, insects, and last known alive information.

**Q17: Why become early postmortem changes unreliable after 24-48 hours?**
A: (1) Decomposition begins and generates heat (interferes with algor assessment). (2) Rigor mortis disappears. (3) Livor mortis becomes obscured by decomposition staining. (4) Individual variation increases.

**Q18: What is antemortem injury and how does it differ from postmortem?**
A: Antemortem (before death): Shows vital reaction = hemorrhage into tissues, inflammation, swelling, possible healing. Postmortem (after death): NO vital reaction = no bleeding, no inflammation, no swelling.

**Q19: How do you distinguish bruising from livor mortis?**
A: Bruising: Hemorrhage into tissues, irregular borders, occurs at impact site. Livor mortis: No hemorrhage into tissues, follows vessel distribution, blanches initially (before fixation).

**Q20: What is clinical death vs. brain death?**
A: Clinical death: Cessation of heartbeat and breathing; reversible if CPR started within 3-5 minutes. Brain death: Complete irreversible cessation of all brain function; permanent and irreversible.`,
        mnemonics: [
          {
            text: "PARL = Pallor (15-30 min), Algor (1-1.5°F/hr), Rigor (2-6 hr), Livor (30 min-2 hr)",
            explanation: "Early postmortem changes with approximate timeline"
          },
          {
            text: "Cherry-Red Livor = CO (Carbon Monoxide) or Cyanide or Cold (Hypothermia)",
            explanation: "Three conditions causing cherry-red discoloration"
          }
        ],
        keyPoints: [
          "Pallor mortis: Blanching within 15-30 minutes; visible paleness quickly",
          "Algor mortis: ~1-1.5°F/hour; environmental temperature is major modifier",
          "Rigor mortis: Onset 2-6 hours, complete 8-12 hours; sequence cephalocaudal",
          "Livor mortis: Appears 30 min-2 hours, fixed ~12 hours; position indicates body placement",
          "Livor colors: Normal (purple), CO/cyanide (cherry-red), H₂S (greenish), hypothermia (bright red)",
          "Time of death: Accurate ±2-4 hours in first 24 hours; unreliable after decomposition begins"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Death and Postmortem Changes", edition: "34th" }
        ]
      }
    ]
  }
];
