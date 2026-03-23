import type { TopicLessons } from "./content-loader";

export const anesthesiologyPart5Lessons: TopicLessons[] = [
  {
    topicCode: "AS-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "airway-management-foundation",
        title: "Airway Management & Intubation - Foundation",
        estimatedMinutes: 25,
        summary: "Anatomy, difficult airway prediction, basic airway maneuvers, equipment.",
        contentMd: `# Airway Management & Intubation - Foundation

## Upper Airway Anatomy

### Anatomical Landmarks
- **Epiglottis**: Leaf-shaped cartilage protecting laryngeal inlet during swallowing
- **Arytenoid cartilages**: Pyramid-shaped; attach to vocal cords
- **Vocal cords**: White triangular structures; open during breathing, close during swallowing
- **Larynx (Voice Box)**: C3-C6 level; contains vocal cords
- **Trachea**: Begins at C6; supported by C-shaped cartilage rings; 10-12 cm long in adults

### Airway Dimensions (Adult)
- **Oral cavity**: Depth 6-7 cm
- **Pharynx**: Nasopharynx, oropharynx, laryngopharynx
- **Laryngeal inlet**: Narrowest point in adults; widest in children (subglottis)
- **Trachea**: 2-2.5 cm diameter; 2 cm deeper from larynx

## Difficult Airway Predictors (LEMON)

### L: Look Externally
- **Facial abnormalities**: Micrognathia (small jaw), macroglossia (large tongue)
- **Obstructive features**: Facial edema, trauma, burns
- **Body habitus**: Obesity, short neck

### E: Evaluate Mallampati Score
- **Class I**: All structures visible (easy)
- **Class II**: Soft palate and uvula visible (mild)
- **Class III**: Only soft palate visible (moderate)
- **Class IV**: Only hard palate visible (difficult)

### M: Measure Distances
- **Thyromental distance**: <6 cm → difficult (mandible too small)
- **Interincisor distance**: <3 cm or <3 fingers → limited mouth opening
- **Neck circumference**: >40 cm → obesity marker

### O: Obesity
- **BMI >40**: Increased risk difficult airway
- **Mechanism**: Short neck, airway edema, neck fat accumulation
- **Positioning**: Ramp positioning helpful (shoulder roll + head elevation)

### N: Neck Mobility
- **Limited extension**: Rheumatoid arthritis, ankylosing spondylitis, cervical fusion
- **Test**: Ask patient to extend neck; if limited, expect difficult intubation
- **Implication**: May need awake fiberoptic intubation

## Basic Airway Maneuvers

### Chin Lift
- **Purpose**: Elevate mandible to open airway; move tongue forward
- **Technique**: Place fingers under angle of mandible; lift upward gently
- **Caution**: Avoid soft tissue compression

### Jaw Thrust
- **Purpose**: Displace mandible forward to open airway
- **Technique**: Place fingers behind angle of mandible; push forward
- **Indication**: Suspected cervical spine injury (safer than head tilt)
- **Mechanism**: Moves tongue away from posterior pharynx

### Head Tilt
- **Purpose**: Extend head to straighten oral/pharyngeal axis
- **Technique**: Place hand on forehead; gently tilt head backward
- **Caution**: Avoid in cervical spine injury

## Airway Equipment

### Laryngoscopes

**Direct Laryngoscopy:**
- **Macintosh blade** (curved): Tip touches epiglottis; indirectly lifts for view
- **Miller blade** (straight): Lifts epiglottis directly
- **Light source**: Halogen or LED bulb at blade tip

**Video Laryngoscopy (VL):**
- **Advantages**: Indirect visualization; better view in difficult airway
- **Technique**: Blade tip in vallecula or epiglottis; view on monitor
- **Examples**: Glidescope, C-Mac, Pentax
- **Limitation**: Requires skill; can't intubate on first pass without adjuncts

### Endotracheal Tubes (ET Tubes)

**Size (Adult):**
- **Standard**: 7.5-8.5 mm internal diameter
- **Cuff**: Inflatable balloon to seal; prevents aspiration
- **Depth**: Insert 21-23 cm at teeth (males typically deeper)

**Placement Verification:**
- **Clinical**: Bilateral breath sounds, no epigastric sounds
- **Capnography**: Gold standard (CO2 detection)
- **CXR**: Tube position (should be 2-3 cm above carina)

### Difficult Airway Equipment

**Difficult Airway Cart Must Include:**
- Laryngoscopes (direct + video)
- Multiple ET tube sizes
- Fiberoptic bronchoscope (awake intubation)
- Lighted stylet
- Combitube (emergency airway)
- Laryngeal mask airway (LMA)
- Retrograde intubation kit
- Surgical airway kit (cricothyrotomy)`,
        mnemonics: [
          { text: "LEMON: Look, Evaluate Mallampati, Measure (thyromental/interincisor), Obesity, Neck mobility", explanation: "Difficult airway prediction" },
          { text: "Mallampati I-II = easy, III = moderate, IV = difficult", explanation: "Airway classification" },
          { text: "MAC curved blade, Miller straight blade; MAC indirectly lifts, Miller directly lifts", explanation: "Laryngoscope types" },
          { text: "ET tube depth: 21-23 cm at teeth; cuff inflates to seal", explanation: "Placement" },
        ],
        keyPoints: [
          "LEMON assessment predicts difficult airway; multiple positive features → awake fiberoptic",
          "Mallampati III-IV + limited mouth opening + short neck → high risk",
          "Jaw thrust preferred for cervical spine injury (avoids extension)",
          "Direct laryngoscopy: visualize cords directly; video laryngoscopy: indirect via monitor",
          "ET tube placement verified by capnography, bilateral breath sounds, CXR",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Airway Management", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Airway and Ventilation", edition: "6th" },
        ],
      },
      {
        layer: 2,
        slug: "intubation-technique",
        title: "Airway Management - Intubation Technique",
        estimatedMinutes: 30,
        summary: "Oral intubation, awake fiberoptic, RSI, blind nasal intubation, post-intubation complications.",
        contentMd: `# Airway Management - Intubation Technique

## Oral Endotracheal Intubation (Standard Technique)

### Patient Positioning (Sniffing Position)
- **Goal**: Align oral, pharyngeal, laryngeal axes
- **Achieve**: Head extension + neck flexion (bump/ramp under shoulders)
- **Benefit**: Improves laryngeal view 50-70%

### Step-by-Step Technique
1. **Preoxygenate**: 3-5 minutes 100% O2 (or 8 vital capacity breaths)
2. **Induction**: IV anesthetic agent (propofol, etomidate, ketamine)
3. **Paralysis**: Succinylcholine 1-1.5 mg/kg or rocuronium 1.2 mg/kg
4. **Wait**: 30-45 seconds for paralysis
5. **Laryngoscopy**: Insert blade, visualize cords
6. **Intubation**: Insert ET tube through cords to appropriate depth
7. **Confirmation**: Auscultate breath sounds, check capnography, secure with tape/tube holder

### Laryngoscopic Views (Cormack & Lehane)
- **Grade I**: Full view of vocal cords → easy intubation
- **Grade II**: Partial view of cords (arytenoids visible)
- **Grade III**: Epiglottis only visible → difficult
- **Grade IV**: Only soft palate visible → very difficult/failed

## Awake Fiberoptic Intubation

### Indications
- **Predicted difficult airway** (LEMON positive)
- **Cervical spine precautions** (emergency trauma)
- **Full stomach + difficult airway** (reduce aspiration risk)
- **Sleep apnea + difficult airway**

### Technique
1. **Topical anesthesia**: Lidocaine spray 10% to nasal passages, pharynx
2. **Mild sedation**: Midazolam 1-2 mg IV titrated (patient responsive)
3. **Fiberoptic scope insertion**: Via nose or mouth (nasal easier; oral if nasal obstruction)
4. **Landmark identification**: Identify tracheal rings, carina
5. **ET tube advancement**: Pass tube over scope, advance through cords
6. **Confirmation**: Check breath sounds, capnography

### Advantages
- **Patient breathing maintained** → no apnea risk
- **Cords visualized directly** → confirm correct placement
- **Aspiration risk reduced** → patient protective reflexes intact until intubated

### Disadvantages
- **Time-consuming**: 10-20 minutes (not suitable for emergency)
- **Technical skill required**: Requires practice
- **Post-sedation apnea risk**: If sedation used

## Rapid Sequence Intubation (RSI) - Full Stomach/Emergency

### Key Features
- **Goal**: Minimize aspiration risk during induction/intubation
- **Components**: Pre-oxygenation, cricoid pressure, rapid intubation

### Cricoid Pressure (Sellick Maneuver)
- **Technique**: Apply 10 N pressure to cricoid cartilage when patient loses consciousness
- **Purpose**: Compresses esophagus against cervical spine → prevents gastric reflux
- **Timing**: Apply during induction; release after cuff inflated or if unable to intubate

### RSI Sequence
1. **Preoxygenation**: 3-5 minutes (maximize FRC)
2. **Induction**: Rapid-onset agent (propofol 2 mg/kg, etomidate 0.2 mg/kg)
3. **Cricoid pressure**: 10 N applied (assistant applies at loss of consciousness)
4. **Paralysis**: Succinylcholine 1-1.5 mg/kg (fastest) or rocuronium 1.2 mg/kg
5. **Avoid mask ventilation**: If possible (distends stomach, increases aspiration risk)
6. **Intubation**: Once paralyzed; confirm tube placement
7. **Release cricoid**: After cuff inflated + tube position confirmed

## Blind Nasal Intubation

### Indications
- **Limited mouth opening**: Trismus, TMJ dysfunction
- **Cervical spine precaution** (relative)

### Technique
1. **Prepare nose**: Topical vasoconstrictor (phenylephrine) + lidocaine 10%
2. **Choose larger tube**: 6.5-7.5 mm (nasal anatomy narrower)
3. **Lubricate**: Use lidocaine gel on tube
4. **Insert slowly**: Along nasal floor (avoid septum)
5. **Feel breath**: Tube should move with patient breathing (indicates airway proximity)
6. **Advance gently**: During inspiration; feel "give" when past cords
7. **Confirmation**: Bilateral breath sounds, capnography, CXR

### Complications
- **Epistaxis**: Trauma to nasal mucosa (use vasconstrictor)
- **Tube obstruction**: Nasal secretions; can cause hypoxia

## Post-Intubation Management

### Tube Securement
- **Method**: Tape + tube holder (most secure)
- **Avoid**: Adhesive only (insufficient; high extubation risk)
- **Depth mark**: Document tube position (21-23 cm at teeth in adults)

### Cuff Management
- **Inflation**: Use minimum volume to seal (prevent aspiration)
- **Pressure**: Monitor cuff pressure (20-30 cm H2O); avoid excessive (tracheal injury)
- **Release**: Deflate at regular intervals (prevent tracheal necrosis)

### Ventilator Settings (Post-Intubation)
- **Mode**: Assist-control, synchronized intermittent mandatory ventilation
- **Tidal volume**: 6-8 mL/kg ideal body weight (lung protective)
- **Rate**: 12-16 breaths/min (avoid hyperventilation)
- **PEEP**: 5-8 cm H2O (prevent atelectasis)

## Complications

### During Intubation
- **Dental trauma**: Blade contact with teeth; use care
- **Lip/tongue laceration**: Blade insertion too forceful
- **Esophageal intubation**: ET tube in esophagus (check capnography)
- **Right mainstem intubation**: Tube too far; insert 21-23 cm

### Post-Intubation
- **Sore throat**: Common; usually self-limited
- **Hoarseness/vocal cord injury**: If tube too large or high cuff pressure
- **Tracheal stenosis**: Prolonged intubation >7 days; rare in short-term`,
        mnemonics: [
          { text: "Sniffing position: head extension + neck flexion (ramp under shoulders)", explanation: "Optimal laryngeal view" },
          { text: "Cormack grades I-II = easy, III = difficult, IV = very difficult", explanation: "Laryngoscopic view" },
          { text: "RSI: preoxygenation, induction, cricoid pressure, paralysis, intubation (PICPI)", explanation: "Sequence" },
          { text: "ET tube depth 21-23 cm at teeth; verify capnography + bilateral breath sounds", explanation: "Placement" },
        ],
        keyPoints: [
          "Awake fiberoptic: patient breathing maintained, excellent visualization, no aspiration risk",
          "RSI: for full stomach/emergency; cricoid pressure compresses esophagus to prevent reflux",
          "Sniffing position critical: aligns oral-pharyngeal-laryngeal axes → improves view",
          "Tube placement verified by capnography (gold standard), bilateral breath sounds, CXR",
          "Cuff pressure 20-30 cm H2O prevents aspiration while protecting tracheal mucosa",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Airway and Intubation", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Airway Management", edition: "6th" },
        ],
      },
      {
        layer: 3,
        slug: "airway-clinical-application",
        title: "Airway Management - Clinical Application",
        estimatedMinutes: 30,
        summary: "Failed intubation management, emergency airways, video laryngoscopy, difficult cases.",
        contentMd: `# Airway Management - Clinical Application

## Failed Intubation Algorithm

### Definition
- **Failed intubation**: Unable to visualize cords or pass tube after 3 attempts (or 10 minutes)

### Immediate Actions
1. **STOP intubation attempts**
2. **Reoxygenate**: Mask ventilation with 100% O2 (if possible)
3. **Call for help**: Senior anesthesiologist, ENT if available
4. **Reassess**: Why did attempt fail? (Swelling, malposition, equipment issue?)
5. **Alternative plan**: Use Plan B, C, D

### Plan B: Alternative Intubation Techniques
- **Video laryngoscopy**: Often provides better view than direct laryngoscopy
- **Lighted stylet**: Transvascular light approach; visualize glow at anterior neck
- **Flexible scope**: Fiberoptic (if time permits); slower but more control
- **Change blade**: Switch from Macintosh to Miller (or vice versa)

### Plan C: Ventilate via Alternative Airway
- **Laryngeal mask airway (LMA)**: Supraglottic device; allows ventilation without intubation
- **Combitube**: Allows ventilation via either esophageal or tracheal placement
- **Mask ventilation**: Gold standard if possible; avoid gastric distension (cricoid pressure)

### Plan D: Surgical Airway (Emergency Only)
- **Cricothyrotomy**: Scalpel through cricothyroid membrane → access trachea below obstruction
- **Indications**: Failed all other approaches + apneic patient (can't intubate, can't ventilate)
- **Temporary**: Bridge to more definitive airway

## Emergency Airway Management (Can't Intubate, Can't Ventilate)

### Definition
- **Immediate airway emergency**: Unable to maintain oxygenation via any method

### Management (CICO Protocol)
1. **Call for help immediately**
2. **100% O2, confirm apnea** (only if already paralyzed/sedated)
3. **Consider paralysis reversal**: If rocuronium used, give sugammadex 16 mg/kg IV
4. **Attempt intubation**: 1 attempt with best technique
5. **Surgical airway**: If above fails
   - **Cricothyrotomy** (standard): Scalpel through cricothyroid membrane
   - **Techniques**:
     - **Scalpel-finger-bougie**: Make incision, insert bougie, thread ET tube
     - **Seldinger kit**: Use guidewire, dilators, smaller tube over wire

## Video Laryngoscopy (VL) in Difficult Airway

### Advantages Over Direct Laryngoscopy
- **Indirect visualization**: Circumvents mouth opening/tongue obstruction
- **Better view**: 90%+ of cases have improved view vs direct
- **Less force**: Gentler blade insertion (reduced trauma risk)
- **Teaches**: Video monitor allows team learning/confirmation

### Limitations
- **Learning curve**: Requires practice to intubate on first pass
- **Hyperangulated blades**: Epiglottis lifted but cords not aligned → difficult intubation without adjuncts
- **Fogging**: Monitor view can fog; need anti-fog solution

### Technique
1. **Positioning**: Still use sniffing position
2. **Blade insertion**: Slower than direct; advance tip past epiglottis
3. **Identify cords**: View on monitor; manipulate to get best view
4. **Intubate**: Pass tube through cords under video guidance
5. **Confirmation**: Same as direct laryngoscopy

## Cervical Spine Injury - Airway Considerations

### Mechanism
- **Risk**: Intubation maneuvers extend neck → further cord injury

### Management
- **Assume spine injury** until proven otherwise (trauma patients)
- **Jaw thrust preferred**: Doesn't require neck extension
- **Awake fiberoptic intubation**: Gold standard (maintains breathing)
- **In-line stabilization**: Manual stabilization of head/neck during intubation
- **Rapid sequence intubation acceptable**: If unstable/emergency (prioritize breathing over spine)

### Equipment
- **Cervical collar**: Maintain throughout procedure
- **Manual in-line stabilization**: Assistant holds head/neck in neutral
- **Difficult airway cart**: Readily available

## Special Populations

### Obese Patients
- **Position**: Ramp positioning (20-30° head-up, shoulder roll)
- **Preoxygenation**: Longer (FRC reduced); 5-8 vital capacity breaths
- **Rapid sequence**: Often needed (aspiration risk)
- **Prediction**: Difficult airway common; prepare accordingly
- **Post-intubation**: Ensure adequate PEEP (prevent atelectasis)

### Pregnant Patients (>20 weeks)
- **Airway edema**: Common; smaller ET tubes required
- **Aspiration risk**: Increased; RSI standard
- **Positioning**: Left lateral tilt (prevent aortocaval compression)
- **Preoxygenation**: Longer (O2 consumption increased)
- **Desaturation faster**: Monitor closely

### Pediatric Patients
- **Anatomy**: Larger tongue, anterior larynx, funnel-shaped subglottis
- **Tube size**: Age-based formula (4 + age/4 for mm ID)
- **Uncuffed tubes**: <8 years old (cuff not needed due to subglottic narrowness)
- **Inhalational induction**: Sevoflurane common in children
- **Depth**: ~3 × tube size (in cm) from lips`,
        mnemonics: [
          { text: "Failed intubation: STOP, reoxygenate, call for help, reassess, Plan B/C/D", explanation: "Algorithm" },
          { text: "CICO (can't intubate, can't ventilate): call → O2 → reversal → intubate → cricothyrotomy", explanation: "Emergency sequence" },
          { text: "Video laryngoscopy: advantages over direct (indirect view, less force), disadvantages (learning curve)", explanation: "Comparison" },
          { text: "Difficult airway cart: laryngoscopes, tubes, LMA, fiberscope, lighted stylet, cricothyrotomy kit", explanation: "Essential equipment" },
        ],
        keyPoints: [
          "Failed intubation: never continue attempting; call for help, try alternatives (VL, LMA, etc)",
          "Surgical airway (cricothyrotomy) only for emergency (can't intubate, can't ventilate)",
          "Video laryngoscopy advantages: indirect visualization, better view, less force; disadvantages: learning curve",
          "Cervical spine injury: use jaw thrust, in-line stabilization, awake fiberoptic if possible",
          "Obese/pregnant patients: ramp positioning, longer preoxygenation, RSI, smaller tubes",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Difficult Airway Management", edition: "14th" },
          { book: "ASA Difficult Airway Algorithm", chapter: "Perioperative Care", edition: "2013" },
        ],
      },
      {
        layer: 4,
        slug: "airway-exam-prep",
        title: "Airway Management - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts, Cormack grades, LEMON assessment, failed airway algorithm.",
        contentMd: `# Airway Management - Exam Prep

## LEMON Assessment Quick Reference

| Component | Assessment | Difficult Indicator |
|-----------|------------|-------------------|
| **L**ook | Facial anatomy, edema, tongue size | Micrognathia, macroglossia, facial edema |
| **E**valuate Mallampati | Soft tissue obstruction | Class III or IV |
| **M**easure | Thyromental distance, interincisor | <6cm thyromental, <3cm interincisor |
| **O**besity | BMI, neck circumference | BMI >40, neck >40cm |
| **N**eck | Mobility, trauma, stiffness | Limited extension, fusion |

## Cormack & Lehane Grades

| Grade | View | Difficulty | Management |
|-------|------|-----------|------------|
| I | Full cords | Easy | Straightforward intubation |
| II | Partial cords (arytenoids) | Mild | Usually successful |
| III | Epiglottis only | Difficult | May need assistance, adjuncts |
| IV | Only soft palate | Very difficult | Consider awake fiberoptic, alternatives |

## High-Yield Airway Facts

**Preoxygenation:**
- 3-5 minutes 100% O2 (standard)
- 8 vital capacity breaths alternative
- Goal: Denitrogenate lungs, maximize FRC

**ET Tube Sizing:**
- Adult: 7.5-8.5 mm (females 7.5, males 8.0-8.5)
- Pediatric: 4 + (age/4) in mm ID
- Depth: 21-23 cm at teeth (adults); 3× tube size (peds)

**Succinylcholine (Depolarizing Paralytic):**
- Onset: 30-45 seconds (fastest)
- Duration: 5-10 minutes (short)
- Risks: Malignant hyperthermia, hyperkalemia
- Advantages: Rapid paralysis for emergency

**Rocuronium (Non-depolarizing):**
- Onset: 60-90 seconds (slower than succinylcholine)
- Duration: 30-40 minutes
- Reversal: Sugammadex 4-16 mg/kg IV (instant reversal available)
- Advantage: No malignant hyperthermia/hyperkalemia risk

## Common Exam Question Patterns

- **Patient with micrognathia, Mallampati IV → prediction?** → Difficult airway (LEMON positive); prepare awake fiberoptic
- **Thyromental distance 4.5 cm → expect?** → Difficult intubation (normal >6cm)
- **Failed intubation after 3 attempts → next step?** → Stop, reoxygenate, call for help, try video laryngoscopy
- **Can't intubate, can't ventilate for 5 minutes → do what?** → Cricothyrotomy (emergency surgical airway)
- **Cormack Grade IV on intubation → difficulty?** → Very difficult; try video laryngoscopy or adjuncts
- **Right mainstem intubation evidenced by no left breath sounds → management?** → Withdraw ET tube 1-2 cm; recheck breath sounds
- **ET tube at 28 cm depth in 180 cm tall male → position?** → Too deep (correct is 21-23 cm); withdraw to avoid mainstem

## Failed Airway Algorithm (ASA)

**Plan A: Initial Intubation Attempt**
- Direct laryngoscopy with Macintosh/Miller blade
- If Grade III-IV → proceed to Plan B

**Plan B: Alternative Techniques (awake intubation not yet attempted)**
- Video laryngoscopy (often succeeds)
- Flexible scope (slower but effective)
- Lighted stylet, retrograde intubation
- Change blade type/size

**Plan C: Non-intubating Techniques (if intubation unsuccessful)**
- Laryngeal mask airway (LMA)
- Combitube
- Mask ventilation with cricoid pressure

**Plan D: Emergency Surgical Airway (only if can't intubate AND can't ventilate)**
- Cricothyrotomy via scalpel-finger-bougie or Seldinger
- Last resort; time-sensitive

## Emergency Airway (CICO Protocol)

**Can't Intubate, Can't Oxygenate:**
1. **Call for help**
2. **100% O2, confirm apnea**
3. **Paralysis reversal** (if rocuronium → sugammadex 16 mg/kg)
4. **Attempt intubation** (1 try, best technique)
5. **Surgical airway** (cricothyrotomy if intubation fails)

**Cricothyrotomy Landmarks:**
- Cricoid cartilage: Below larynx, above trachea
- Cricothyroid membrane: Between cricoid + thyroid
- Insert scalpel horizontally into membrane, then advance bougie, thread ET tube`,
        mnemonics: [
          { text: "LEMON: Look (anatomy), Evaluate Mallampati, Measure (distances), Obesity, Neck", explanation: "Difficult airway prediction" },
          { text: "Cormack I-II easy, III difficult, IV very difficult", explanation: "Laryngoscopic view" },
          { text: "ET tube depth 21-23 cm (adults); if no left breath sounds → withdrew to mainstem", explanation: "Position" },
          { text: "Failed airway: Plan A (intubation) → Plan B (alternatives) → Plan C (ventilation) → Plan D (surgical)", explanation: "Algorithm" },
          { text: "CICO: Call → O2 → reversal (sugammadex) → intubate → cricothyrotomy", explanation: "Emergency sequence" },
        ],
        keyPoints: [
          "LEMON assessment guides difficult airway prediction; multiple positive features → awake fiberoptic",
          "Cormack Grade IV requires video laryngoscopy, lighted stylet, or awake fiberoptic",
          "Succinylcholine (fast, 30-45s) vs rocuronium (slower 60-90s) for induction paralysis",
          "ET tube depth 21-23 cm in adults; verify capnography + bilateral breath sounds",
          "Failed intubation: Plan B (video laryngoscopy), Plan C (LMA), Plan D (cricothyrotomy)",
          "CICO emergency: cricothyrotomy only if can't intubate AND can't ventilate",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Difficult Airway", edition: "14th" },
          { book: "ASA Difficult Airway Algorithm", chapter: "Perioperative Management", edition: "2013" },
        ],
      },
      {
        layer: 5,
        slug: "airway-active-recall",
        title: "Airway Management - Active Recall",
        estimatedMinutes: 15,
        summary: "10 clinical cases: difficult airway, failed intubation, emergency airway, special populations.",
        contentMd: `# Airway Management - Active Recall

## Q1: LEMON Assessment
**Q: 55-year-old, BMI 38, Mallampati IV, interincisor 2 cm, thyromental 5 cm. Predict airway difficulty?**

A: **Difficult airway (LEMON positive**: Obesity (O), Mallampati IV (E), limited interincisor (M), short thyromental (M). Multiple positive factors → **Recommend awake fiberoptic intubation** rather than standard induction. Risk of failed intubation > benefit of rapid intubation.

## Q2: Failed Intubation - Plan B
**Q: After direct laryngoscopy Cormack Grade IV, unable to pass tube. Tried 2 times already. What's next?**

A: **STOP direct laryngoscopy attempts.** **Plan B**: Try **video laryngoscopy** (often succeeds where direct fails due to indirect visualization). If VL also fails → **Plan C: LMA ventilation** to maintain oxygenation while reassessing. Avoid multiple direct laryngoscopy attempts (cause airway swelling).

## Q3: Emergency Surgical Airway
**Q: Patient apneic, unable to intubate despite VL attempt, cannot ventilate via mask/LMA. SpO2 68%. Immediate action?**

A: **Cricothyrotomy** (emergency surgical airway). **Landmarks**: Palpate cricoid below larynx; incise cricothyroid membrane horizontally. **Technique**: Scalpel-finger-bougie: (1) Make incision (1-2 cm), (2) Insert bougie through hole, (3) Thread 6.0 ET tube over bougie, (4) Remove bougie, inflate cuff, ventilate. **Time sensitive**: Do immediately when intubation fails + can't ventilate.

## Q4: Etiology of Failed Intubation
**Q: Routine intubation, Cormack Grade II initially (good view), but tube won't pass through cords. Why and what to do?**

A: **Possible causes**: (1) **Tracheal stenosis** (narrowing below cords), (2) **Vocal cord paralysis** (one or both), (3) **Swelling/edema** below larynx, (4) **Angle of tube/stylet prevents passage**. **Management**: (1) Withdraw tube, (2) Try **smaller tube size** (6.5 instead of 7.5), (3) Use **straight blade** (different angle approach), (4) Consider **awake fiberoptic** to assess anatomy. If emergency: use **LMA to maintain oxygenation** while assessing cause.

## Q5: Right Mainstem Intubation
**Q: Post-intubation: right breath sounds present, left breath sounds absent. ET tube at 28 cm. Patient desaturating. Diagnosis and management?**

A: **Right mainstem intubation** (tube too far; entered right mainstem bronchus → left lung not ventilated). **Clinical signs**: Absent left breath sounds, hypoxia, hyperinflated right hemithorax on CXR. **Management**: (1) **Withdraw ET tube** 2-3 cm (to ~24-25 cm in adult), (2) Recheck **bilateral breath sounds** (should improve immediately), (3) Check **capnography** on left side, (4) **CXR** to confirm position. **Prevention**: Always verify tube position by auscultation + capnography immediately post-intubation.

## Q6: Difficult Airway Prediction - Mallampati
**Q: Patient has Mallampati Class III. Is difficult intubation guaranteed? What other factors matter?**

A: **No guarantee; Mallampati alone insufficient.** Class III → **increased risk**, but not diagnostic. **Other LEMON factors** must be assessed: (1) Mouth opening adequate? (>3 fingers), (2) Thyromental distance >6 cm?, (3) Neck mobile?, (4) Normal jaw/tongue size? (5) No facial edema?. If other factors normal → **routine intubation safe**. Multiple LEMON positive factors → **difficult airway; prepare accordingly**.

## Q7: Awake Fiberoptic Intubation - Technique
**Q: 70-year-old predicted difficult airway, needs urgent surgery. Plan awake fiberoptic intubation. What's your approach?**

A: **Preparation**: (1) **NPO status** verified (can aspirate), (2) **Topical anesthesia**: Lidocaine 10% spray to nose/pharynx, (3) **Mild sedation**: Midazolam 1-2 mg IV titrated (goal: calm but responsive), (4) **Vasoconstrictor**: Phenylephrine nasal spray (reduces epistaxis). **Technique**: (1) Insert scope via **nose** (easier than mouth), (2) **Identify landmarks**: Epiglottis, vocal cords, tracheal rings, (3) **Thread ET tube** over scope, (4) **Advance tube** through cords, (5) **Confirm placement**: Capnography, bilateral breath sounds. **Advantage**: Patient breathing maintained throughout → no apnea risk; excellent visualization.

## Q8: Succinylcholine vs Rocuronium
**Q: Emergency intubation, full stomach. Choose succinylcholine or rocuronium for rapid paralysis. Why?**

A: **Succinylcholine preferred** for **emergency/RSI** because: (1) **Faster onset** (30-45 sec vs 60-90 sec rocuronium), (2) **Shorter duration** (5-10 min vs 30-40 min rocuronium) → if failed intubation, patient wakes quickly, (3) **Allows reattempts** if first attempt fails. **Risk**: Hyperkalemia, malignant hyperthermia. **Rocuronium** advantage: **Sugammadex reversal** (instant reversal, ~2 minutes), but slower onset disadvantage in emergency.

## Q9: Aspiration Risk - RSI Components
**Q: Patient with full stomach, GERD, BMI 45, needs emergency surgery. Design rapid sequence intubation. Key components?**

A: **RSI sequence** for **high aspiration risk**: (1) **Preoxygenation**: 5 minutes or 8 vital capacity breaths (maximize FRC), (2) **Cricoid pressure**: Assistant applies 10 N during induction (compress esophagus), (3) **No mask ventilation** if possible (distends stomach), (4) **Rapid induction**: Propofol 2 mg/kg (or etomidate if unstable), (5) **Rapid paralysis**: Succinylcholine 1.5 mg/kg, (6) **Quick intubation**: Once paralyzed, intubate immediately, (7) **Cuff inflation**: Release cricoid pressure after cuff inflated + tube position confirmed. **Goal**: Minimize aspiration risk by occluding esophagus with cricoid pressure + rapid intubation.

## Q10: Pediatric Airway - Size and Technique
**Q: 6-year-old needs intubation for emergency appendicitis. What ET tube size? Uncuffed or cuffed? Expected tube depth?**

A: **ET tube size** (age-based formula): **4 + (age/4)** = 4 + (6/4) = 4 + 1.5 = **5.5 mm ID**. **Uncuffed tube** standard <8 years (subglottis narrowest point; cuff not needed due to funnel shape; cuff risks tracheal injury). **Tube depth**: **3 × tube size (in cm)** = 3 × 5.5 = **16.5 cm** from lips. **Confirm placement**: Auscultate bilateral breath sounds (left axilla especially), capnography, CXR. **Note**: Pediatric airways different from adult (larger tongue, anterior larynx); smaller movements = big changes in tube position.`,
        mnemonics: [
          { text: "LEMON positive → difficult airway; multiple factors → awake fiberoptic intubation", explanation: "Prediction" },
          { text: "Failed intubation: Stop → Plan B (VL/alternatives) → Plan C (LMA) → Plan D (cricothyrotomy)", explanation: "Algorithm" },
          { text: "Cormack I-II easy, III difficult, IV very difficult/surgical airway", explanation: "View" },
          { text: "Right mainstem intubation: no left breath sounds, SpO2 down; withdraw tube 2-3 cm", explanation: "Management" },
          { text: "RSI: preoxygenation, cricoid pressure, rapid induction, succinylcholine, intubate ASAP", explanation: "Sequence" },
          { text: "Pediatric tube size: 4 + (age/4) mm; depth 3× tube size in cm; uncuffed <8y", explanation: "Calculation" },
        ],
        keyPoints: [
          "LEMON assessment identifies difficult airway; multiple factors → awake fiberoptic",
          "Failed intubation: Plan B (video laryngoscopy), Plan C (LMA), Plan D (cricothyrotomy if emergency)",
          "Succinylcholine for emergency/RSI (fast onset, short duration); rocuronium has sugammadex reversal",
          "RSI: preoxygenation → induction → cricoid pressure → paralysis → intubate (avoid masking if possible)",
          "ET tube depth: 21-23 cm (adults), 3× size in cm (children); verify capnography + bilateral breath sounds",
          "Pediatric tube uncuffed <8 years; size formula 4 + (age/4) mm",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Airway Management", edition: "14th" },
          { book: "ASA Difficult Airway Algorithm", chapter: "Perioperative Management", edition: "2013" },
        ],
      },
    ],
  },
];
