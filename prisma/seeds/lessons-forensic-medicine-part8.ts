import type { TopicLessons } from "./content-loader";

export const forensicMedicinePart8Lessons: TopicLessons[] = [
  {
    topicCode: "FM-MOD-02-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "time-since-death-layer-1-foundation",
        title: "Estimation of Time Since Death - Foundation",
        estimatedMinutes: 25,
        summary: "Postmortem interval estimation using early and late postmortem changes, factors affecting accuracy.",
        contentMd: `# Estimation of Time Since Death - Foundation

## Definition of Postmortem Interval (PMI)

Postmortem interval is time elapsed between death and discovery of body (or examination).

## Early Postmortem Changes (0-24 Hours)

### Pallor Mortis
- **Timeline**: 15-30 minutes after death
- **Basis**: Loss of circulation and hemoglobin oxygenation
- **Appearance**: Pale, ashen skin appearance
- **Forensic value**: Earliest indicator of death

### Algor Mortis (Body Cooling)
- **Timeline**: Begins immediately; continuous process
- **Standard rate**: 1-1.5°F per hour (0.5-0.8°C/hour) in normal conditions
- **Formula**: Temperature drop ÷ cooling rate = hours since death
- **Limitations**: Variable with environmental temperature, body size, clothing

### Rigor Mortis (Muscle Stiffness)
- **Onset**: 2-6 hours after death
- **Complete development**: 8-12 hours
- **Duration**: 24-48 hours (then disappears with decomposition)
- **Sequence**: Cephalocaudal (eyelids first, legs last)
- **Factors**: Heat accelerates, cold delays onset

### Livor Mortis (Discoloration)
- **Timeline**: Appears 30 minutes to 2 hours
- **Complete**: 8-12 hours
- **Fixed (non-blanching)**: ~12 hours
- **Basis**: Blood pooling in dependent parts, hemoglobin deoxygenation

## PMI Estimation Steps

### Early PMI (First 24 Hours)
1. **Measure body temperature**
2. **Calculate temperature drop** from normal (37°C)
3. **Divide by cooling rate** (~0.5-0.8°C/hour)
4. **Add environmental correction factors**
5. **Add ±2-4 hours** for uncertainty
6. **Corroborate with other indicators**

### Accuracy Range
- Early PMI estimation: Within ±2-4 hours
- Multiple indicators increase accuracy
- Single indicator unreliable

## Late Postmortem Changes (>24 Hours)

### Decomposition Stages
- **Fresh**: Within 24 hours; early decomposition
- **Bloated**: 1-3 days; gases accumulate; skin discoloration (greenish)
- **Putrefaction**: 3-7 days; active decay; foul odor; tissue breakdown
- **Decay**: 7+ days; advanced tissue breakdown; skeletal appearance
- **Skeletonization**: Weeks-months; bone exposure

### Environmental Factors Affecting Rate
- **Temperature**: Warm increases rate; cold slows rate
- **Humidity**: High humidity increases rate
- **Access**: Insect activity accelerates decomposition
- **Clothing/burial**: Protected vs. exposed
- **Water environment**: Aquatic decomposition faster

## Factors Affecting PMI Estimation Accuracy

### Environmental Factors
- **Temperature**: Major modifier of algor mortis rate
- **Humidity**: Affects decomposition rate
- **Air circulation**: Affects cooling rate
- **Sunlight exposure**: Accelerates decomposition

### Body Factors
- **Body size**: Larger bodies cool slower
- **Body composition**: Fat insulates; slows cooling
- **Clothing**: Slows cooling; protects from insects
- **Premortem health**: Fever, illness, exertion affect baseline

### Other Factors
- **Cause of death**: Affects temperature and decomposition
- **Time of discovery**: May be days/weeks after death
- **Last known alive**: Important corroborating evidence

## Methods for Extended PMI (>24-48 Hours)

When early postmortem changes unreliable:
- **Decomposition staging**: Based on visible changes
- **Entomology**: Insect evidence (fly larvae, maggots)
- **Taphonomy**: Environmental factors and body condition
- **Botanical evidence**: Plant growth, seed germination
- **Last known alive**: Witness statements about when person last seen

## Special Cases

### Factors Accelerating Death Recognition (Shortening PMI Estimation)
- High temperature (heat hastens all processes)
- Wet environment
- Exposed body (insect activity)
- Severe trauma or disease before death

### Factors Delaying Death Recognition (Extending PMI Uncertainty)
- Cold environment (slows all processes)
- Bodies in water (slower decomposition)
- Protective clothing or burial
- Access to refrigeration or freezing`,
        mnemonics: [
          {
            text: "Early PMI Indicators = Pallor (15-30 min), Algor (1-1.5°F/hr), Rigor (2-6 hr), Livor (30 min-2 hr)",
            explanation: "Timeline for early postmortem changes"
          },
          {
            text: "Decomposition Stages = Fresh → Bloated → Putrefaction → Decay → Skeletonization",
            explanation: "Sequence of late postmortem changes"
          }
        ],
        keyPoints: [
          "Early PMI estimation: ±2-4 hours accuracy in first 24 hours using early postmortem changes",
          "Algor mortis: ~1-1.5°F/hour cooling; environmental temperature is major modifier",
          "Rigor mortis: Onset 2-6 hours, complete 8-12 hours, duration 24-48 hours",
          "Temperature measurement: Calculate temperature drop, divide by cooling rate",
          "After 24-48 hours: Early postmortem changes unreliable; use decomposition and entomology",
          "Multiple indicators needed for accurate estimation; single indicator insufficient"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Estimation of Time Since Death", edition: "34th" }
        ]
      },
      {
        layer: 2,
        slug: "time-since-death-layer-2-mechanism",
        title: "Estimation of Time Since Death - Mechanism & Calculations",
        estimatedMinutes: 25,
        summary: "Mathematical calculations, decomposition mechanics, and environmental modifications of PMI estimation.",
        contentMd: `# Estimation of Time Since Death - Mechanism & Calculations

## Algor Mortis Calculations

### Newton's Law of Cooling
Temperature difference between body and environment determines cooling rate.

**Formula**:
- Temperature drop ÷ cooling rate = hours since death
- Example: 37°C (normal) to 32°C = 5°C drop
- Cooling rate: ~0.6°C/hour
- Calculation: 5°C ÷ 0.6°C/hr = 8.3 hours ≈ 8 hours since death

### Temperature Conversion
- Fahrenheit: 1-1.5°F per hour cooling
- Celsius: 0.5-0.8°C per hour cooling
- Formula: °F = (°C × 9/5) + 32

### Standard Rate Basis
Based on:
- Normal body temperature: 37°C (98.6°F)
- Normal environmental temperature: ~20°C (68°F)
- Temperature difference: 17°C (30°F)
- Cooling continues until body temperature equals environment

### Henssge Method (More Accurate)
Corrects for environmental factors:
- **Formula**: PMI = (37 - body temperature) ÷ [R × (1 + W + C)]
- **R**: Rectal temperature drop rate (0.5-1.0°C/hour)
- **W**: Weight correction factor (obesity = slower cooling)
- **C**: Clothing/covering factor (insulation value)

## Rigor Mortis Development

### Biochemical Timeline

**Phase 1**: 0-2 hours
- Lactic acid begins accumulating
- ATP depletion starts
- Minimal external evidence

**Phase 2**: 2-6 hours (Rigor onset)
- ATP significantly depleted
- Actin-myosin cross-bridges form
- Visible stiffness appears (eyelids first)

**Phase 3**: 6-12 hours (Rigor completion)
- Rigor progresses cephalocaudal
- Complete stiffness by 8-12 hours
- Maximum intensity

**Phase 4**: 12-48 hours (Rigor persistence)
- Rigor maintained as tissues remain intact
- Intensity remains constant

**Phase 5**: >48 hours (Rigor resolution)
- Decomposition begins
- Rigor mortis disappears as tissues break down
- No longer reliable indicator

## Livor Mortis Fixation

### Color Development Timeline

**0-30 minutes**: No visible discoloration

**30 minutes to 2 hours**: Purple-red color appears in dependent areas
- Caused by blood pooling in gravity-dependent vessels
- Hemoglobin deoxygenation

**2-8 hours**: Color intensifies; becomes more widespread

**8-12 hours**: Livor becomes complete in dependent areas

**~12 hours onwards**: Fixation occurs
- No longer blanches with pressure (fixed)
- Permanent discoloration even if pressure applied

### Special Colors and Causes

**Cherry-red livor**:
- Carbon monoxide poisoning (carboxyhemoglobin)
- Cyanide poisoning (cannot utilize oxygen)
- Hypothermia (preserved oxyhemoglobin)

**Greenish discoloration**:
- Hydrogen sulfide (H₂S) poisoning (sulfhemoglobin)
- Begins ~24 hours; starts in abdomen area

**Pink or bright appearance**:
- Hypothermia
- Cold exposure
- Preserved oxyhemoglobin

## Decomposition Progression

### Fresh Stage (0-3 days)
- **Visible changes**: Pallor, early livor, rigor mortis
- **Bacterial activity**: Begins in GI tract
- **Skin changes**: Early discoloration may appear
- **Odor**: Minimal

### Early Putrefaction/Bloated Stage (2-6 days)
- **Gas production**: Bacterial fermentation produces gases
- **Distension**: Abdomen and tissues swell from gas
- **Discoloration**: Greenish appearance starts at right lower abdomen (cecum area)
- **Skin slippage**: Outer layer of skin separates
- **Odor**: Foul smell from bacterial byproducts
- **Rigor**: Disappears as tissues begin breaking down

### Advanced Putrefaction (5-7 days)
- **Tissue breakdown**: Accelerated decomposition
- **Color**: Body becomes darker green/brown to black
- **Bloating**: May rupture from gas pressure
- **Marbling**: Visible venous network discoloration
- **Odor**: Intense, overwhelming
- **Insects**: Fly larvae (maggots) prominent

### Skeletonization and Decay (2-8 weeks+)
- **Soft tissue loss**: Removed by insects, animals, decomposition
- **Bone exposure**: Progressive skeletal appearance
- **Mummification**: In dry environment, tissues may dry rather than decompose
- **Adipocere formation**: In wet environment, fat converted to wax-like substance

### Factors Modifying Decomposition Rate

**Accelerating decomposition**:
- High temperature
- Humidity and moisture
- Insect and animal access
- Wet environment
- Large body surface area
- Trauma or wounds

**Slowing decomposition**:
- Low temperature (cold slows all processes ~50% per 10°C drop)
- Dry environment
- Protected/buried body
- Minimal insect access
- Clothing and wrapping
- Water environment (much slower than air)

## Entomological Evidence (Forensic Entomology)

### Insect Evidence Timeline
- **0-24 hours**: Flies locate body; lay eggs
- **24-48 hours**: Eggs hatch (first instar larvae)
- **3-5 days**: Larvae grow and move through body
- **1-2 weeks**: Larvae pupate
- **2-3 weeks**: Adult flies emerge

### PMI from Insect Larval Development
- Can estimate PMI based on larval stage and temperature
- Requires identifying fly species (species-specific development times)
- Temperature data crucial (development accelerated by heat)
- Can estimate within hours-days with proper analysis

### Environmental Decomposition (Taphonomy)
- Animal activity (scavenging, gnawing)
- Plant growth around body
- Soil disturbance patterns
- Moisture and humidity changes
- Weathering of remains`,
        mnemonics: [
          {
            text: "Algor Calculation = Temperature drop ÷ 0.6°C/hour = hours since death",
            explanation: "Basic formula for time estimation from cooling"
          },
          {
            text: "Decomposition Rate = Doubles with ~10°C temperature increase; Halves with ~10°C decrease",
            explanation: "Temperature sensitivity of decomposition"
          }
        ],
        keyPoints: [
          "Algor mortis: ~0.5-0.8°C/hour cooling; use Henssge method for environmental corrections",
          "Rigor mortis: Onset 2-6 hours, complete 8-12 hours, lasts 24-48 hours",
          "Livor mortis fixed ~12 hours; special colors indicate specific poisonings",
          "Decomposition: Accelerated by heat, humidity, insect access; slowed by cold, dry",
          "Green discoloration starts abdomen area ~24 hours; indicates advanced decomposition",
          "Entomology: Insect larval stage can estimate PMI within hours-days in warm conditions"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Estimation of Time Since Death", edition: "34th" }
        ]
      },
      {
        layer: 3,
        slug: "time-since-death-layer-3-clinical",
        title: "Estimation of Time Since Death - Case Applications",
        estimatedMinutes: 25,
        summary: "Real-world cases with PMI calculations, environmental factors, and forensic scenario analysis.",
        contentMd: `# Estimation of Time Since Death - Case Applications

## Case Study 1: Early PMI Estimation (Within 24 Hours)

**Scenario**: Body discovered at 6:00 PM Monday. Temperature 31°C. Rigor mortis fully developed. Livor mortis fixed.

**Analysis**:

1. **Algor Mortis Calculation**:
   - Current body temperature: 31°C
   - Normal body temperature: 37°C
   - Temperature drop: 6°C
   - Cooling rate: 0.6°C/hour
   - Hours since death: 6°C ÷ 0.6 = 10 hours
   - Estimated death time: 6:00 PM - 10 hours = 8:00 AM ± 2-3 hours
   - **Range: 5:00 AM to 11:00 AM**

2. **Rigor Mortis Corroboration**:
   - Rigor fully developed and complete
   - Timeline: Complete in 8-12 hours
   - Supports death approximately 10+ hours ago
   - Consistent with ~8:00 AM death

3. **Livor Mortis Corroboration**:
   - Livor mortis is fixed (non-blanching)
   - Fixed approximately 12 hours post-death
   - Suggests death >12 hours ago
   - Less reliable if not documented early

**Conclusion**: Death estimated approximately 8:00 AM Monday ± 2-3 hours

## Case Study 2: Extended PMI with Decomposition (>24 Hours)

**Scenario**: Body discovered 3 days after death. Significant decomposition visible. Warm environment (30°C ambient).

**Analysis**:

1. **Early postmortem changes unreliable**:
   - Algor mortis: Decomposition heat interferes; body temperature unreliable
   - Rigor mortis: Already disappeared (24-48 hours maximum)
   - Livor mortis: Obscured by decomposition discoloration

2. **Decomposition Stage**:
   - Visible: Bloating, greenish discoloration from abdomen spreading
   - Skin slippage present
   - Stage: Advanced putrefaction/early decay
   - Rate: Accelerated (warm environment 30°C)

3. **Entomological Evidence**:
   - Fly larvae (maggots) present and active
   - Larval stage: Second/third instar (3-5 days development)
   - Ambient temperature: 30°C (accelerates development)
   - **PMI estimate from insects**: 2-4 days

4. **Last Known Alive**:
   - Witness: Person last seen Friday morning (~3 days)
   - Corroborates entomological PMI estimate

**Conclusion**: Death estimated approximately 2-3 days prior to discovery (Friday or Saturday)

## Case Study 3: Cold Environment Delaying Decomposition

**Scenario**: Body found in winter (ambient temp -5°C) after 2 weeks. Minimal decomposition. Body relatively well-preserved.

**Analysis**:

1. **Temperature Effect**:
   - Cold environment: -5°C (massive temperature difference from body)
   - Algor mortis: Cooling dramatically slowed at these temperatures
   - Decomposition: Reduced ~50% for every 10°C drop
   - Result: Body preservation, slow decomposition

2. **Early Postmortem Changes Persist**:
   - Rigor mortis: May still be present (not fully decomposed at these temps)
   - Livor mortis: Preserved but less visible due to other discoloration

3. **Decomposition Stage**:
   - Stage: Fresh or early putrefaction
   - Much less advanced than would be expected for 2 weeks in warm environment
   - Color and odor: Minimal for time elapsed

4. **Last Known Alive**:
   - Person missing 2 weeks
   - Recent disappearance established

**Conclusion**: Cold environment delayed decomposition significantly. PMI estimates require environmental correction factors. Death estimated 1-2 weeks prior (consistent with missing person timeframe).

## Case Study 4: Warm Environment Accelerating Decomposition

**Scenario**: Body found in closed vehicle (heated to ~40°C) 2 days after death during hot summer.

**Analysis**:

1. **Accelerated Decomposition**:
   - Enclosed vehicle temperature: 40°C (much warmer than ambient 25°C)
   - Decomposition rate: Approximately doubled compared to normal environment
   - Stage: Should be early putrefaction/bloated stage
   - Actual finding: Advanced putrefaction; significant gas production, bloating

2. **Insect Activity**:
   - Flies readily locate body in open/semi-open vehicle
   - Larval colonization: Rapid in warm conditions
   - Development accelerated: ~1 day faster than normal

3. **Body Temperature Assessment**:
   - Body now at environmental temperature (~40°C)
   - Algor mortis calculation: Not applicable (time-dependent, no longer cooling)

4. **Last Known Alive**:
   - Person last seen in vehicle 2 days prior

**Conclusion**: Warm enclosed environment accelerated decomposition significantly. Death estimated 1.5-2.5 days prior (consistent with last seen). Requires PMI adjustment for temperature.

## Case Study 5: Aquatic Decomposition

**Scenario**: Body recovered from river after estimated 1 week. Water temperature 15°C.

**Analysis**:

1. **Water Environment Effects**:
   - Decomposition in water: Slower than air (anaerobic conditions)
   - Temperature: 15°C (cool, further slows processes)
   - Submersion time: Approximately 1 week

2. **Visible Changes**:
   - Adipocere formation: Waxy appearance from fat hydrolysis
   - Skin wrinkling (washerwoman effect)
   - Bloating: May be reduced (water pressure)
   - Discoloration: Greenish and brown

3. **Insect Evidence**:
   - Limited in aquatic environment
   - Aquatic insects (if present) have different development times
   - Less reliable for PMI than terrestrial insects

4. **Entanglement/Plant Growth**:
   - Algae growth on body
   - Water plant attachment

**Conclusion**: Aquatic environment with cool temperature significantly slowed decomposition. Body preservation better than similar terrestrial PMI would suggest. Estimated 1 week in water.

## Scene Considerations Affecting PMI Estimation

### Scene Investigation
- **Temperature data**: Ambient temperature at scene
- **Weather records**: Temperature, humidity over preceding days
- **Body location**: Exposed, buried, indoor, vehicle
- **Insect/animal activity**: Evidence of scavenging or colonization
- **Recent disturbance**: Recent movement or manipulation

### Interview Information
- **Last known alive**: When was person last confirmed alive?
- **Last communication**: Last phone call, text, email
- **Routine patterns**: When did person normally appear?
- **Missing person report**: Timeline of disappearance
- **Witness statements**: Observations from last known location`,
        mnemonics: [
          {
            text: "Early PMI = Temperature drop ÷ 0.6 = hours ± 2-4 hours uncertainty",
            explanation: "Basic formula with accuracy range"
          },
          {
            text: "Late PMI = Decomposition stage + Entomology + Last known alive = Best estimate",
            explanation: "Multiple methods for extended PMI"
          }
        ],
        keyPoints: [
          "Temperature-based PMI: Accurate ±2-4 hours in first 24 hours",
          "After 24-48 hours: Decomposition stage + entomology + last known alive",
          "Temperature modifier: Decomposition rate ~doubles per 10°C temperature increase",
          "Water environment: Decomposition much slower; adipocere formation common",
          "Cold environment: Preservation excellent; decomposition dramatically slowed",
          "Multiple indicators needed; single method unreliable for extended PMI"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Estimation of Time Since Death", edition: "34th" }
        ]
      },
      {
        layer: 4,
        slug: "time-since-death-layer-4-exam",
        title: "Estimation of Time Since Death - Exam Preparation",
        estimatedMinutes: 20,
        summary: "Key formulas, definitions, and typical exam questions with answers.",
        contentMd: `# Estimation of Time Since Death - Exam Preparation

## Key Definitions

| Term | Definition |
|------|-----------|
| PMI (Postmortem Interval) | Time between death and discovery |
| Algor Mortis | Body cooling following death |
| Early PMI | Estimation within first 24 hours |
| Late PMI | Estimation after 24-48 hours |
| Decomposition | Tissue breakdown by bacteria and insects |
| Adipocere | Waxy substance from fat hydrolysis (aquatic) |
| Taphonomy | Environmental effects on body after death |

## Early PMI Calculation Formula

**Basic Formula**:
- **PMI = (37°C - body temperature) ÷ 0.6°C/hour**
- Add ±2-4 hours for uncertainty

**Example**:
- Body temperature: 32°C
- Temperature drop: 37 - 32 = 5°C
- Hours since death: 5 ÷ 0.6 = 8.3 hours
- **Estimated PMI: ~8 hours ± 2-3 hours = 5-11 hours**

## Early Postmortem Changes Timeline

| Change | Onset | Complete | Duration |
|--------|-------|----------|----------|
| Pallor mortis | 15-30 min | — | Variable |
| Algor mortis | Immediate | — | Continuous |
| Rigor mortis | 2-6 hours | 8-12 hours | 24-48 hours |
| Livor mortis | 30 min-2 hr | 8-12 hours | Persists (fixed ~12 hr) |

## Decomposition Stages

| Stage | Timeline | Key Features |
|-------|----------|--------------|
| Fresh | 0-3 days | Pallor, rigor, livor; minimal odor |
| Putrefaction | 2-6 days | Gas production; bloating; greenish discoloration; foul odor |
| Advanced decay | 5-7 days | Significant tissue breakdown; dark color; marbling |
| Skeletonization | 2-8+ weeks | Bone exposure; soft tissue loss; minimal odor |

## Common Exam Questions

**Q1: What is postmortem interval (PMI)?**
A: Time elapsed between death and discovery of body (or examination). Estimated using early postmortem changes (first 24 hours) or late changes (decomposition, entomology) for extended PMI.

**Q2: What is algor mortis and its cooling rate?**
A: Algor mortis is body cooling after death. Standard rate: 1-1.5°F per hour or 0.5-0.8°C per hour in normal conditions.

**Q3: How do you calculate PMI using algor mortis?**
A: (37°C - body temperature) ÷ 0.6°C/hour = hours since death. Add ±2-4 hours for uncertainty due to environmental factors.

**Q4: What factors decrease rate of algor mortis?**
A: Cold environment, obese body, heavy clothing/bedding, enclosed space, decomposition heat generation.

**Q5: What factors increase rate of algor mortis?**
A: Hot environment, thin body, minimal clothing, high air circulation, premortem fever/exertion.

**Q6: What is rigor mortis timeline?**
A: Onset 2-6 hours after death. Complete in 8-12 hours. Duration 24-48 hours (then disappears with decomposition).

**Q7: What factors accelerate rigor mortis?**
A: Heat, physical exertion before death, young age, fever, seizures.

**Q8: What factors delay rigor mortis?**
A: Cold, extreme old age, chronic illness, muscle wasting, alcohol intoxication.

**Q9: When does livor mortis become fixed?**
A: Approximately 12 hours after death. Before fixation, blanches with pressure; after fixation, does not blanch.

**Q10: What colors can livor mortis appear and what do they indicate?**
A: Normal purple = standard; Cherry-red = CO/cyanide/hypothermia; Greenish = H₂S poisoning.

**Q11: What decomposition stages exist and their timelines?**
A: Fresh (0-3 days), Putrefaction (2-6 days), Advanced decay (5-7 days), Skeletonization (2-8+ weeks).

**Q12: What causes greenish discoloration in decomposition?**
A: Bacterial production of hydrogen sulfide and other gases. Starts in abdomen area (~24 hours); spreads with decomposition.

**Q13: What is adipocere and when does it form?**
A: Waxy substance from fat hydrolysis. Forms in wet/aquatic environment. Takes weeks to form; indicates water immersion.

**Q14: How does temperature affect decomposition rate?**
A: Decomposition rate approximately doubles with each 10°C temperature increase. Cold dramatically slows all processes.

**Q15: When are early postmortem changes unreliable for PMI?**
A: After 24-48 hours when decomposition begins. Rigor disappears, algor becomes meaningless (body at environmental temp), livor obscured.

## Important Formulas

- **Algor Mortis**: PMI = (37 - body temp) ÷ 0.6°C/hr
- **Temperature Conversion**: °C to °F = (°C × 9/5) + 32
- **Decomposition Rate**: Doubles per ~10°C temperature increase
- **Accuracy**: ±2-4 hours within first 24 hours`,
        mnemonics: [
          {
            text: "Early PMI Formula = (37 - body temp) ÷ 0.6 = hours ± 2-4",
            explanation: "Basic calculation for time since death"
          },
          {
            text: "Decomposition Stages = Fresh → Putrefaction → Decay → Skeletonization",
            explanation: "Sequence of late postmortem changes"
          }
        ],
        keyPoints: [
          "Early PMI: Temperature-based formula accurate ±2-4 hours in first 24 hours",
          "Algor mortis: ~0.5-0.8°C/hour cooling rate; environmental temperature major modifier",
          "Rigor mortis: Onset 2-6 hours, complete 8-12 hours, duration 24-48 hours",
          "Late PMI: Decomposition stage + insect development + last known alive",
          "Decomposition: Temperature doubles rate per ~10°C increase",
          "Multiple indicators needed; single method unreliable for accurate PMI"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Estimation of Time Since Death", edition: "34th" }
        ]
      },
      {
        layer: 5,
        slug: "time-since-death-layer-5-active-recall",
        title: "Estimation of Time Since Death - Active Recall",
        estimatedMinutes: 15,
        summary: "Self-assessment flashcard Q&A for spaced repetition.",
        contentMd: `# Estimation of Time Since Death - Active Recall

## Flashcard Q&A

**Q1: What is postmortem interval (PMI) and how is it estimated?**
A: PMI is time elapsed between death and discovery/examination. Estimated using early postmortem changes (first 24 hours) or late changes like decomposition and entomology for extended PMI.

**Q2: What is algor mortis and give the standard cooling rate.**
A: Algor mortis is progressive cooling of body following death. Standard rate: approximately 1-1.5°F per hour or 0.5-0.8°C per hour in normal ambient conditions (~20°C).

**Q3: How do you calculate PMI using body temperature?**
A: Formula: PMI = (37°C - body temperature) ÷ 0.6°C/hour. Example: Body 31°C, drop = 6°C, hours = 6 ÷ 0.6 = 10 hours since death. Add ±2-4 hours uncertainty.

**Q4: What environmental factors decrease algor mortis cooling rate?**
A: (1) Cold environment. (2) Obese body (insulation). (3) Heavy clothing/bedding. (4) Enclosed/still space. (5) Decomposition heat generation.

**Q5: What environmental factors increase algor mortis cooling rate?**
A: (1) Hot environment. (2) Thin body. (3) Minimal clothing or wet. (4) High air circulation. (5) Premortem fever or exertion.

**Q6: What is rigor mortis timeline (onset, complete, duration)?**
A: Onset: 2-6 hours after death. Complete development: 8-12 hours. Duration: 24-48 hours (then disappears as tissues decompose).

**Q7: Describe sequence of rigor mortis spread through body.**
A: Cephalocaudal (head-to-toe) sequence: (1) Eyelids. (2) Jaw and facial muscles. (3) Neck and trunk. (4) Arms and hands. (5) Legs and feet (last affected).

**Q8: What conditions accelerate rigor mortis onset?**
A: (1) Heat/high temperature. (2) Physical exertion before death. (3) Young age. (4) Premortem fever. (5) Seizures or violent struggle.

**Q9: What conditions delay rigor mortis onset?**
A: (1) Cold environment. (2) Extreme old age. (3) Prolonged wasting illness. (4) Muscular dystrophy. (5) Heavy alcohol intoxication.

**Q10: When does livor mortis become fixed and what does this mean?**
A: Becomes fixed approximately 12 hours after death. Fixed means non-blanching (does not blanch when pressed). Before fixation, blanches with pressure; after fixation, permanent discoloration.

**Q11: What special colors of livor mortis indicate and their causes?**
A: Cherry-red: CO poisoning or cyanide or hypothermia. Greenish: Hydrogen sulfide (H₂S) poisoning. Pink/bright: Hypothermia or cold exposure.

**Q12: What are the decomposition stages and their timelines?**
A: (1) Fresh (0-3 days): Minimal changes. (2) Putrefaction (2-6 days): Bloating, greenish discoloration. (3) Advanced decay (5-7 days): Significant tissue breakdown. (4) Skeletonization (2-8+ weeks): Bone exposure.

**Q13: What causes greenish discoloration during decomposition?**
A: Bacterial production of hydrogen sulfide from tissue breakdown. Starts in abdomen area around 24 hours; gradually spreads with ongoing decomposition.

**Q14: What is adipocere and when does it form?**
A: Adipocere is waxy substance formed from fat hydrolysis (saponification). Forms in wet environments (bodies in water). Takes weeks to form; indicates water immersion and preservation.

**Q15: How does ambient temperature affect decomposition rate?**
A: Decomposition rate approximately doubles with each 10°C temperature increase above baseline. Conversely, it halves with each 10°C decrease. Cold dramatically slows all decomposition processes.

**Q16: Why are early postmortem changes unreliable after 24-48 hours?**
A: (1) Algor mortis: Body reaches environmental temperature; no longer cooling. (2) Rigor mortis: Disappears as tissues decompose. (3) Livor mortis: Obscured by decomposition discoloration. (4) Individual variation increases.

**Q17: What is forensic entomology and how is it used for PMI?**
A: Forensic entomology studies insect colonization of bodies. PMI estimated from larval stage and development time. Requires identifying fly species (species-specific development) and temperature data.

**Q18: How does water environment affect decomposition?**
A: Decomposition in water much slower than air (anaerobic conditions). Cool water temperature further slows processes. Adipocere formation common. Preservation better than similar terrestrial PMI.

**Q19: What is taphonomy in forensic context?**
A: Taphonomy is study of environmental effects on body after death. Includes animal scavenging, plant growth, soil disturbance, weather effects, water immersion - all modify decomposition rate and body appearance.

**Q20: How would you estimate PMI for body found 5 days after death in warm weather?**
A: (1) Early postmortem changes unreliable (disappeared after 24-48 hours). (2) Assess decomposition stage: Should be advanced putrefaction/early decay. (3) Look for insect evidence (fly larvae development). (4) Consider last known alive. (5) Combine all indicators for best estimate.`,
        mnemonics: [
          {
            text: "Algor Formula = (37 - body temp) ÷ 0.6 = hours ± 2-4 hours",
            explanation: "Temperature-based PMI calculation"
          },
          {
            text: "Decomposition Rate = Doubles per 10°C increase; Halves per 10°C decrease",
            explanation: "Temperature effect on decomposition"
          }
        ],
        keyPoints: [
          "Early PMI: Temperature-based formula accurate ±2-4 hours in first 24 hours",
          "Algor mortis: ~0.5-0.8°C/hour; environmental temperature is major modifier",
          "Rigor mortis: Onset 2-6 hours, complete 8-12 hours, lasts 24-48 hours",
          "Late PMI: Decomposition stage + entomology + last known alive combined",
          "Temperature effect: Doubles decomposition rate per ~10°C temperature increase",
          "Multiple indicators: Single method unreliable; use all available evidence"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine & Toxicology", chapter: "Estimation of Time Since Death", edition: "34th" }
        ]
      }
    ]
  }
];
