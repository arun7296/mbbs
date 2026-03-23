import type { TopicLessons } from "./content-loader";

export const anesthesiologyPart2Lessons: TopicLessons[] = [
  {
    topicCode: "AS-MOD-02-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "spinal-epidural-foundation",
        title: "Spinal & Epidural Anesthesia - Foundation",
        estimatedMinutes: 25,
        summary: "Anatomical basis, technique, agents, complications, contraindications.",
        contentMd: `# Spinal & Epidural Anesthesia - Foundation

## Spinal Anesthesia (Subarachnoid Block)

### Anatomy
- **Injection site**: Cerebrospinal fluid (CSF) in subarachnoid space (L3-L4, L4-L5 common)
- **Needle path**: Skin → subcutaneous → ligamentum flavum → dura mater → arachnoid → CSF
- **Dermatome coverage**: Anesthesia extends based on agent spread in CSF
- **Duration**: Dependent on local anesthetic agent (lidocaine 1-2 hours, bupivacaine 3-4 hours)

### Technique
- **Position**: Patient sitting or lateral decubitus (knee-chest position aids midline identification)
- **Needle**: 25-27 gauge (thinner = lower CSF leak risk), inserted at slight cephalad angle
- **Dura puncture**: "Pop" or "click" felt when needle penetrates dura
- **CSF confirmation**: Clear colorless fluid (not blood, not synovial fluid)
- **Dosing**: Lidocaine 50-75 mg, bupivacaine 7.5-15 mg (varies by height, pregnancy, obesity)

### Baricity and Spread
- **Hyperbaric** (dextrose added): Heavier than CSF; spreads downward (foot end)
- **Hypobaric** (less dextrose): Lighter than CSF; spreads upward (head)
- **Isobaric** (equal density): Minimal spread; localized to injection site
- **Patient position post-injection**: Controls block height (head-up restricts cephalad spread)
- **Block onset**: 10-15 minutes for complete sensory level

## Epidural Anesthesia

### Anatomy
- **Injection site**: Epidural space (outside dura mater, between dura and ligamentum flavum)
- **Access levels**: L1-L2, L2-L3, L3-L4, L4-L5 (lower levels safer than spinal; less meningitis risk)
- **Needle entry**: Loss of resistance at epidural space (characteristic hallmark)
- **Catheter**: Threading 3-5 cm into epidural space allows repeat dosing/continuous infusion

### Technique - Loss of Resistance
- **Needle**: 17-18 gauge Tuohy needle (blunt bevel reduces dural puncture risk)
- **Loss of resistance method**: Syringe filled with air or saline; sudden loss when epidural space entered
- **Catheter**: Threaded 3-5 cm; secured with tape, labeled clearly
- **Higher dosing**: Much larger than spinal (lidocaine 300-500 mg, bupivacaine 75-150 mg; diffusion across dura slower)
- **Onset time**: 20-30 minutes for full effect (slower than spinal due to dural diffusion)

### Epidural Advantages
- **Continuous dosing**: Catheter allows repeat injection or infusion pump
- **Flexibility**: Block intensity adjustable during surgery
- **Lower PDPH risk**: Dura intact (no CSF leakage)
- **Postoperative analgesia**: Catheter left in place 24-48 hours for pain relief

## Local Anesthetic Agents

### Lidocaine (Xylocaine)
- **Duration**: 1-2 hours (short-acting)
- **Onset**: 5-10 minutes
- **Use**: Spinal for short procedures (<1 hour); epidural for repeated dosing

### Bupivacaine (Marcaine)
- **Duration**: 3-4 hours (long-acting)
- **Onset**: 5-15 minutes (slightly slower than lidocaine)
- **Use**: Preferred for spinal (longer effect); epidural continuous infusion
- **Concern**: Cardiotoxicity if overdosed (avoid high doses; controversial in obstetrics)

### Ropivacaine
- **Duration**: 3-4 hours
- **Advantage**: Less cardiotoxic than bupivacaine
- **Disadvantage**: More expensive; less commonly used in India

## Immediate Complications

### Spinal-Specific
- **Bloody tap**: Blood in CSF (traumatic puncture; usually inconsequential)
- **Post-dural puncture headache (PDPH)**: CSF leak through dura hole
- **High spinal block**: Unintended extension to respiratory muscles (emergency)

### Epidural-Specific
- **Dural puncture**: Needle inadvertently enters dura (may cause PDPH; ~50% risk)
- **Subdural injection**: Agent in subdural space (unilateral block, unpredictable spread)
- **Vascular puncture**: Needle enters blood vessel (risk of intravascular injection, toxicity)

### Both Techniques
- **Hypotension**: Sympathetic blockade → vasodilation + venous pooling
- **Bradycardia**: High blockade (T1-T4) blocks cardiac accelerator fibers
- **Nausea/vomiting**: From acute hypotension
- **Infection**: Poor sterile technique (meningitis, epidural abscess - rare but serious)`,
        mnemonics: [
          { text: "Spinal = subarachnoid (IN CSF), Epidural = outside dura", explanation: "Location difference" },
          { text: "Spinal faster onset (10-15 min), Epidural slower (20-30 min)", explanation: "Onset comparison" },
          { text: "Hyperbaric spreads DOWN, hypobaric spreads UP, isobaric stays put", explanation: "Baricity effects" },
          { text: "Spinal PDPH 10%, epidural PDPH <1% unless accidental dural puncture", explanation: "Headache risk" },
        ],
        keyPoints: [
          "Spinal: Direct CSF injection, thin needle, faster onset, single-shot, higher PDPH risk",
          "Epidural: Diffusion across dura, thick needle, slower onset, catheter allows continuous dosing",
          "Local anesthetic choice: Lidocaine (1-2h) for short, bupivacaine (3-4h) for longer procedures",
          "Baricity controls spread direction; patient position post-injection critical for block height",
          "Hypotension major complication of both; sympathetic blockade is primary mechanism",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Regional Anesthesia", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Spinal and Epidural Blocks", edition: "6th" },
        ],
      },
      {
        layer: 2,
        slug: "spinal-epidural-mechanism",
        title: "Spinal & Epidural Anesthesia - Mechanism",
        estimatedMinutes: 30,
        summary: "Sodium channel blockade, differential fiber blockade, sympathetic effects, PDPH pathophysiology.",
        contentMd: `# Spinal & Epidural Anesthesia - Mechanism

## Local Anesthetic Mechanism: Sodium Channel Blockade

### Action
- **Primary effect**: Local anesthetics block voltage-gated sodium channels in nerve membranes
- **Result**: Prevents depolarization → blocks action potential propagation → sensory loss
- **Differential blockade**: Autonomic (smallest) > sensory > motor (largest) fibers blocked first
- **Recovery order**: Reverse of blockade → motor recovery first, then sensory, then autonomic

### Nerve Fiber Sensitivity (by size)
| Fiber Type | Size | Function | Blockade Order |
|-----------|------|----------|----------------|
| B (autonomic) | Smallest | Sympathetic preganglionic | 1st (most sensitive) |
| A-delta | Small | Pain, temperature | 2nd |
| A-beta | Medium | Pressure, touch | 3rd |
| A-alpha (motor) | Largest | Skeletal muscle | 4th (least sensitive) |

## Sympathetic Blockade Pathophysiology

### Initial Phase (0-5 minutes)
- **Vasodilation**: Loss of sympathetic tone → arteriolar dilation → decreased systemic vascular resistance (SVR)
- **Venous pooling**: Unopposed parasympathetic tone → veins dilate → decreased venous return
- **Preload reduction**: Decreased cardiac filling → reduced stroke volume
- **Hypotension**: SBP drops 20-40 mmHg acutely; MAP falls 10-15 mmHg
- **Reflex response**: Baroreceptor-mediated sympathetic surge (if mild hypotension)

### Cardiovascular Compensation (5-15 minutes)
- **Baroreceptor reflex**: Sympathetic tone increases in non-blocked dermatomes (head, neck, upper extremities)
- **Catecholamine release**: Epinephrine, norepinephrine increase to maintain BP
- **Cardiac output**: Initially maintained despite preload reduction (via increased contractility)
- **Limitation**: Cannot fully compensate for extensive sympathetic blockade; hypotension often persists

### High Spinal Block Consequences (T4 or higher)
- **Cardiac accelerator fibers blocked**: T1-T4 sympathetic fibers responsible for HR increase
- **Unopposed vagal tone**: Parasympathetic dominance → profound bradycardia (HR <40)
- **Double hit**: Hypotension + bradycardia = cardiovascular collapse risk
- **Emergency**: Requires immediate intubation + vasopressor/inotrope support

## Dural Puncture Headache (PDPH) Pathophysiology

### CSF Leakage
- **Mechanism**: Needle/catheter punctures dura mater → CSF leaks into epidural space
- **Volume loss**: CSF production ~20 mL/hour but leakage often exceeds production
- **CSF pressure**: Intracranial hypotension develops (normally 5-15 cm H2O)

### Intracranial Hypotension Effects
- **Brain sagging**: Brain descends due to reduced CSF buoyancy
- **Meningeal traction**: Dura, arachnoid stretched → activation of pain fibers
- **Cranial nerve traction**: CN I-XII stretched → neurologic symptoms possible
- **Timeline**: Develops 24-48 hours post-puncture (can be delayed weeks)

### Positional Nature
- **Upright position**: Gravity worsens brain sagging → severe headache
- **Supine position**: Gravity reduces traction → symptom relief (within minutes)
- **Valsalva effect**: Increased intracranial pressure → worsens headache
- **Coughing/straining**: Same mechanism; exacerbates pain

## Baricity Effects on Block Distribution

### Hyperbaric Solution
- **Specific gravity**: >1.008 (heavier than CSF due to dextrose)
- **Spread pattern**: Spreads to dependent (lower) areas
- **Patient positioning**: Supine or head-down = caudal spread (feet); head-up = rostral spread (head)
- **Clinical use**: Cesarean section (spread to sacral), lower extremity surgery

### Hypobaric Solution
- **Specific gravity**: <1.003 (lighter than CSF)
- **Spread pattern**: Spreads to non-dependent (upper) areas
- **Patient positioning**: Head-up = cephalad spread (head); head-down = prevents spread
- **Clinical use**: Upper abdominal, chest procedures

### Isobaric Solution
- **Specific gravity**: ~1.005 (equal to CSF)
- **Spread pattern**: Minimal gravity effect; stays near injection site
- **Clinical use**: Predictable, localized block (useful if spread control critical)

## Pharmacokinetics

### Spinal Anesthetic Absorption
- **Slow absorption**: Limited vascular uptake from CSF (poor blood flow)
- **Duration prolonged**: Agent remains in CSF longer than IV administration
- **Metabolism**: Slowly absorbed into blood → hepatic metabolism (amide agents) or pseudocholinesterase (ester agents)
- **Peak plasma levels**: 30-60 minutes post-injection (delayed vs IV)
- **Systemic toxicity**: Less likely with spinal due to slow absorption

### Epidural Anesthetic Absorption
- **Faster absorption**: Through dura into CSF + systemic vascular absorption
- **Epidural fat**: Acts as depot; delays systemic absorption
- **Peak levels**: 10-20 minutes post-injection (faster than spinal)
- **Systemic toxicity risk**: Higher if large doses; intravascular injection increases risk`,
        mnemonics: [
          { text: "B-A-A-A: Autonomic → sensory (A-delta) → sensory (A-beta) → motor (A-alpha)", explanation: "Blockade sequence" },
          { text: "Sympathetic block = vasodilation + venous pooling = hypotension + reflex tachy", explanation: "CV pathophysiology" },
          { text: "High spinal (T4+) = bradycardia + hypotension (blocks cardiac accelerator)", explanation: "Emergency condition" },
          { text: "PDPH = intracranial hypotension from CSF leak; worse sitting, better lying flat", explanation: "Positional headache" },
        ],
        keyPoints: [
          "Sodium channel blockade → differential fiber blockade; autonomic most sensitive, motor least sensitive",
          "Sympathetic blockade causes vasodilation + venous pooling = hypotension + initial reflex tachycardia",
          "High spinal blocks (T4+) = profound bradycardia from loss of cardiac accelerator fibers + unopposed vagus",
          "PDPH from CSF leakage causing intracranial hypotension; meningeal traction activates pain fibers",
          "Baricity controls block distribution; position patient pre-injection and maintain position 10-15 minutes",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Regional Anesthesia Pharmacology", edition: "14th" },
          { book: "Guyton & Hall", chapter: "Neurophysiology of Local Anesthetics", edition: "13th" },
        ],
      },
      {
        layer: 3,
        slug: "spinal-epidural-clinical",
        title: "Spinal & Epidural Anesthesia - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical patient selection, technique pearls, hypotension management, Indian context.",
        contentMd: `# Spinal & Epidural Anesthesia - Clinical

## Patient Selection: Spinal vs Epidural vs General

### Spinal Anesthesia Ideal For
- **Duration <2 hours**: Single-shot technique; repeated dosing risky
- **Lower abdominal**: Cesarean section (spinal standard in India), hysterectomy, appendectomy
- **Lower extremity**: Hip/knee replacement, femur fracture, below-knee amputation
- **Perineal**: Hemorrhoidectomy, prostatectomy
- **Urological**: TURP, cystoscopy
- **Advantages**: Fast onset, predictable, avoids airway manipulation, no intubation

### Epidural Anesthesia Ideal For
- **Duration >2 hours**: Catheter allows continuous dosing
- **Labor analgesia**: Standard in tertiary centers; patient-controlled epidural analgesia (PCEA)
- **Postoperative analgesia**: Catheter left 24-48 hours for pain management
- **High-risk airway**: Maintains spontaneous ventilation (no airway compromise)
- **Thoracic surgery**: Thoracotomy, esophagectomy (provides analgesia for rib/pleural trauma)
- **Advantages**: Flexible, continuous, lower PDPH risk, excellent postop pain control

### Contraindications to Neuraxial Block

#### Absolute
- **Patient refusal**: Paramount (autonomy)
- **Infection at insertion site**: Risk of meningitis/epidural abscess (skin, soft tissue infection)
- **Anticoagulation/severe coagulopathy**: INR >2, platelets <50,000, on warfarin/heparin
- **Hemodynamic instability**: Relative (spinal worsens; epidural safer but still risky)

#### Relative
- **Sepsis**: Controversial (risk of seeding meningitis; epidural safer than spinal)
- **Uncontrolled hypertension**: Risk of intracranial hemorrhage
- **Obesity**: Difficult landmark anatomy; still possible with experience

## Practical Technique

### Spinal Block Step-by-Step
1. **Positioning**: Sitting (easier, better midline) or lateral decubitus (knee-chest position)
2. **Landmarks**: PSIS at L4; count up/down to identify L3-L4 or L4-L5
3. **Sterile prep**: Chlorhexidine/povidone-iodine prep, sterile drape
4. **Local infiltration**: 1% lidocaine subcutaneous to minimize pain
5. **Needle insertion**: 25-27 G needle, slight cephalad angle (perpendicular to skin)
6. **Dura puncture**: Feel "pop" or sudden loss of resistance when dura penetrated
7. **CSF confirmation**: Clear colorless fluid (not blood, not synovial); do NOT inject if uncertain
8. **Agent injection**: Slowly (1 mL per second) to allow proper CSF mixing/spread
9. **Needle removal**: Withdraw needle; apply dressing
10. **Patient positioning**: Supine if hyperbaric (increases spread), head-elevated if hypobaric

### Epidural Block Step-by-Step
1. **Positioning**: Sitting (better midline) or lateral decubitus (hips flexed 90°)
2. **Landmarks**: L3 spinous process at iliac crest level; palpate carefully
3. **Sterile prep**: Chlorhexidine/povidone-iodine; larger sterile field than spinal
4. **Local infiltration**: 1% lidocaine deeper, through ligaments
5. **Needle insertion**: 17-18 G Tuohy needle, 45° angle toward midline (facilitates catheter threading)
6. **Loss of resistance**: Syringe (air or saline) attached to needle; sudden loss when epidural space entered
7. **Catheter insertion**: Thread 3-5 cm into epidural space (distance beyond needle tip)
8. **Secure catheter**: Tape securely (multiple anchoring points), label clearly with level/date
9. **Test dose**: 3 mL with 1:200,000 epinephrine to test for intravascular placement (watch for HR increase)
10. **Initial injection**: 8-12 mL, assess block height at 20-30 minutes before proceeding

## Management of Common Intraoperative Problems

### Hypotension During Spinal (SBP <90 or >20% drop)
- **Prevention**: Preload 500-1000 mL crystalloid 15-20 minutes before block
- **Immediate treatment**:
  1. **Elevate legs**: Increases venous return (20-30° reverse Trendelenburg)
  2. **IV fluid bolus**: 500-1000 mL crystalloid rapidly
  3. **Reassess**: If BP improves, no vasopressor needed
  4. **Vasopressor**: Phenylephrine 50-100 mcg IV (preferred; pure alpha-1) OR ephedrine 5-10 mg (less preferred; beta effects)
- **Prophylaxis**: Fluids + low-dose ephedrine infusion effective but not routine

### Bradycardia During Spinal (HR <50)
- **Assess**: If associated with hypotension, likely high block (T4+) with cardiac accelerator fiber blockade
- **Emergency treatment**:
  1. **Atropine**: 0.4-0.6 mg IV (anticholinergic; increases HR)
  2. **Fluid bolus**: 500-1000 mL IV
  3. **Vasopressor**: Phenylephrine or epinephrine
  4. **Intubation**: If RR shallow (respiratory muscle paralysis from very high block)

### Dural Puncture Headache (Develops 24-48 hours)
- **Symptoms**: Worst headache of life, worse with sitting/standing, better lying flat
- **Conservative treatment** (first 48 hours):
  - Bed rest (but mobilization safe if mild)
  - Aggressive IV hydration
  - NSAIDs (ibuprofen, aspirin)
  - Caffeine 500 mg IV (provides 4-6 hour relief; bridges to definitive treatment)
- **Epidural blood patch** (gold standard if conservative fails):
  - 15-20 mL autologous blood injected into epidural space
  - Seals dura hole; 70-90% success rate
  - Relief often immediate
  - Can repeat if first fails

### Failed Block (Inadequate Anesthesia)
- **Causes**: Misdirection, patient movement, insufficient dose, wrong agent concentration
- **Clinical signs**: Motor blockade absent or inadequate sensory level at incision time
- **Options**:
  1. **Supplemental epidural**: If time permits (20-30 minutes for onset)
  2. **Convert to general anesthesia**: Fastest, safest option
  3. **Re-attempt spinal**: Higher PDPH risk; usually avoided

## Indian Context Considerations

### High-Volume Setting
- **Cost-effectiveness**: Spinal/epidural much cheaper than general (no volatile gas, less drug)
- **Cesarean section**: Spinal standard throughout India (not general anesthesia)
- **Postoperative pain**: Epidural catheters increasingly common in tertiary centers

### Resource Limitations
- **Ultrasound guidance**: Limited availability; landmark-based technique predominant
- **Monitoring**: Often minimal (lack of BP cuff, pulse oximetry); clinical vigilance essential
- **Vasopressor**: Limited phenylephrine availability; ephedrine or adrenaline used instead
- **Facilities**: Smaller centers lack ICU beds; shorter anesthesia recovery preferred

### Training & Skills
- **Spinal high proficiency**: Widely taught, standardized technique, predictable outcomes
- **Epidural underutilized**: Requires more training; fewer trained anesthesiologists in smaller centers
- **Regional anesthesia courses**: Increasing availability; still not standard training everywhere`,
        mnemonics: [
          { text: "Spinal = quick (10-15 min), short duration (1-4h); Epidural = slow (20-30 min), continuous", explanation: "Clinical timing" },
          { text: "Hypotension = Elevate legs, Fluids, Vasopressor (sequence)", explanation: "Treatment algorithm" },
          { text: "PDPH = Positional (worse sitting, better flat), positional (lie down); EBP = gold standard", explanation: "Headache management" },
          { text: "India: Spinal standard for cesarean; epidural limited by training/cost", explanation: "Regional practice patterns" },
        ],
        keyPoints: [
          "Spinal ideal for short procedures; epidural for long/continuous analgesia",
          "Preload fluids reduces hypotension incidence to <5%",
          "High spinal block (T4+) is emergency requiring intubation + resuscitation",
          "PDPH develops 24-48h; conservative management first; EBP if refractory",
          "Indian practice: Spinal standard for cesarean; epidural underutilized despite advantages",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Regional Anesthesia Clinical Application", edition: "14th" },
          { book: "IAA Textbook of Anaesthesia", chapter: "Regional Anesthesia Standards", edition: "3rd" },
        ],
      },
      {
        layer: 4,
        slug: "spinal-epidural-exam-prep",
        title: "Spinal & Epidural Anesthesia - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, drug tables, complication pearls, exam question patterns.",
        contentMd: `# Spinal & Epidural Anesthesia - Exam Prep

## Quick Reference: Spinal vs Epidural

| Feature | Spinal | Epidural |
|---------|--------|----------|
| **Site** | Subarachnoid (CSF) | Epidural space (outside dura) |
| **Needle gauge** | 25-27 G (thin) | 17-18 G (thick/Tuohy) |
| **Onset** | 10-15 min | 20-30 min |
| **Duration** | 1-4 hours | 1-2 hours (single shot); continuous with catheter |
| **PDPH risk** | 10-15% (develops 24-48h) | <1% (unless dural puncture) |
| **Hypotension** | Marked, sudden (20-40 mmHg) | Gradual, less severe |
| **Catheter** | No (single shot) | Yes (continuous) |
| **Cost** | Cheaper | More expensive (catheter, drugs) |
| **Common use** | Cesarean, lower limb, <2h | Labor, >2h surgery, postop analgesia |

## Local Anesthetic Drugs

| Agent | Spinal Dose | Epidural Dose | Duration | Notes |
|-------|-------------|---------------|----------|-------|
| Lidocaine | 50-75 mg | 300-500 mg | 1-2 hours | Fastest onset; short duration |
| Bupivacaine | 7.5-15 mg | 75-150 mg | 3-4 hours | Preferred for longer; cardiotoxicity concern |
| Ropivacaine | 10-15 mg | 100-200 mg | 3-4 hours | Less cardiotoxic; more expensive |

## Baricity Effects (CRITICAL)

- **Hyperbaric** (added dextrose, SG >1.008): Spreads DOWN (to feet/sacrum); patient head-up = restricts cephalad spread
- **Hypobaric** (SG <1.003): Spreads UP (to head); patient head-down = restricts cephalad spread
- **Isobaric** (SG ~1.005): Minimal spread; stays near injection site

## High-Yield Facts

**Technique:**
- Spinal fastest onset (10-15 min vs epidural 20-30 min)
- Loss of resistance = hallmark of epidural space entry
- Needle gauge: Spinal thin (25-27 G), epidural thick (17-18 G Tuohy)

**Physiology:**
- Sympathetic blockade = vasodilation + venous pooling = hypotension + reflex tachycardia
- High spinal (T4+) = blocks cardiac accelerator fibers → profound bradycardia + hypotension
- PDPH caused by CSF leakage → intracranial hypotension → meningeal traction

**Complications:**
- PDPH 10-15% with spinal, <1% with epidural (unless dural puncture)
- PDPH positional: worse sitting (gravity worsens), better lying flat
- Hypotension managed: legs up → fluids → vasopressor (phenylephrine preferred)
- High block emergency: intubate + atropine + fluids + vasopressor

**Contraindications:**
- Absolute: Refusal, infection at site, anticoagulation/severe coagulopathy, unstable hemodynamics
- Relative: Sepsis, uncontrolled hypertension, obesity

## Exam Question Patterns

- **Needle gauge for spinal?** → 25-27 G (thin = less PDPH)
- **Onset time comparison?** → Spinal 10-15 min, epidural 20-30 min
- **PDPH mechanism?** → CSF leak through dura hole; intracranial hypotension; meningeal traction
- **Hypotension in spinal cause?** → Sympathetic blockade (vasodilation + ↓ venous return)
- **Which block continuous?** → Epidural (catheter)
- **High spinal problem?** → Respiratory paralysis (T2+), profound bradycardia (T1-T4)
- **Loss of resistance indicates?** → Entry into epidural space
- **Baricity defines?** → Specific gravity relative to CSF (affects spread direction)
- **Absolute contraindication?** → Infection at site, anticoagulation, patient refusal
- **Best agent for long spinal?** → Bupivacaine (3-4 hours vs lidocaine 1-2 hours)
- **PDPH treatment?** → Conservative first (bed rest, fluids, caffeine); EBP if refractory
- **Phenylephrine vs ephedrine in spinal?** → Phenylephrine (alpha-1 specific, no tachycardia); ephedrine has beta effects

## Complication Management Algorithms

**Hypotension (SBP <90 or >20% drop):**
1. Elevate legs (20-30°)
2. IV fluid bolus 500-1000 mL
3. If no improvement: Phenylephrine 50-100 mcg IV OR ephedrine 5-10 mg IV

**Bradycardia (HR <50, especially with hypotension):**
1. Atropine 0.4-0.6 mg IV
2. Fluid bolus 1000 mL
3. Vasopressor (phenylephrine or epinephrine)
4. Prepare intubation if RR shallow

**PDPH (24-48 hours post-procedure):**
1. Conservative (48h): Bed rest, hydration, NSAIDs, caffeine 500 mg IV
2. If refractory: Epidural blood patch (15-20 mL autologous blood)`,
        mnemonics: [
          { text: "SED = Spinal (small needle, Early onset, Dural puncture risk)", explanation: "Spinal characteristics" },
          { text: "Sympathetic block = Vasodilation + Venous pooling = Hypotension", explanation: "Mechanism" },
          { text: "High block = T4+, Respiratory paralysis + profound Bradycardia (emergency)", explanation: "Danger" },
          { text: "PDPH = Positional, Dural, Puncture, Headache; EBP = cure", explanation: "Headache" },
          { text: "Phenylephrine = α-1 (pure vasoconstriction), Ephedrine = α + β (may cause tachycardia)", explanation: "Vasopressor choice" },
        ],
        keyPoints: [
          "Spinal: 10-15 min onset, thin needle, 1-4h duration, 10-15% PDPH; epidural: 20-30 min, thick needle, continuous, <1% PDPH",
          "Hypotension managed: elevate legs → fluids → vasopressor (phenylephrine)",
          "High spinal (T4+) = respiratory paralysis + severe bradycardia; intubate + resuscitate immediately",
          "PDPH: positional headache 24-48h; conservative first (fluids, caffeine); EBP 70-90% success",
          "Baricity critical: hyperbaric spreads down, hypobaric spreads up, isobaric stays put",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Regional Anesthesia Summary", edition: "14th" },
          { book: "AANA Textbook", chapter: "Spinal and Epidural Anesthesia", edition: "7th" },
        ],
      },
      {
        layer: 5,
        slug: "spinal-epidural-active-recall",
        title: "Spinal & Epidural Anesthesia - Active Recall",
        estimatedMinutes: 20,
        summary: "8 clinical cases: hypotension, high block, dural puncture, failed block, catheter malposition, baricity, PDPH, selection.",
        contentMd: `# Spinal & Epidural Anesthesia - Active Recall

## Q1: Spinal Hypotension Management
**Q: 35-year-old female for cesarean section receives spinal with bupivacaine 12 mg. 5 minutes post-injection: BP 85/45 (baseline 120/80), HR 95. Abdomen not prepped. What's happening and immediate management?**

A: **Hypotension from sympathetic blockade** - vasodilation + venous pooling. **Immediate management**: (1) **Elevate legs** (increases venous return; reverse Trendelenburg 20-30°), (2) **IV fluid bolus** 500-1000 mL crystalloid rapidly, (3) **Call surgeon** - delay incision until BP recovers, (4) **Reassess**: If BP improves with fluids alone, no vasopressor needed. If persistent SBP <90: Phenylephrine 50-100 mcg IV (alpha-1 specific; causes pure vasoconstriction without tachycardia). **Why phenylephrine over ephedrine**: Ephedrine has beta effects (may increase HR excessively); phenylephrine cleaner for this scenario. **Prevention**: Preload 1000 mL IV fluid 15-20 minutes pre-block reduces hypotension incidence to <5%. **Key point**: Hypotension self-limited; prophylaxis more cost-effective than treatment post-hoc.

## Q2: High Spinal Block Emergency
**Q: Hip fracture repair under spinal. 20 minutes post-injection: BP 70/40, HR 35 (severe bradycardia), dyspneic (RR shallow, difficulty breathing), voice hoarse, pupils constricted. Diagnosis and emergency management?**

A: **HIGH SPINAL BLOCK (T1-T4 level or above)** - blocking cardiac accelerator fibers + respiratory muscles. **Key findings**: (1) Profound hypotension + severe bradycardia (HR <50) = hallmark, (2) Respiratory distress (intercostal paralysis → shallow breathing), (3) Altered voice (vagus nerve CN X involvement), (4) Miosis (parasympathetic dominance). **Mechanism**: Loss of T1-T4 sympathetic fibers → unopposed vagal effects → profound bradycardia. **EMERGENCY MANAGEMENT**: (1) **Intubate immediately** + 100% O2 + mechanical ventilation (respiratory muscles paralyzed), (2) **Atropine 0.4-0.6 mg IV** (anticholinergic; blocks vagal bradycardia), (3) **IV fluid bolus** 1000 mL rapid, (4) **Vasopressor**: Epinephrine 0.5 mg IM or IV phenylephrine (cardiac support), (5) **Call ICU** - senior anesthesiologist needed. **Prevention**: (1) Calculate dose based on patient height/age/weight, (2) Lower doses, (3) Patient position control (head-elevated if hyperbaric; restricts cephalad spread), (4) Slower injection. **Outcome**: Most recover fully once intubated + supported; block eventually regresses (duration of agent determines).

## Q3: Accidental Dural Puncture in Epidural Attempt
**Q: During epidural catheter placement for labor analgesia, anesthesiologist reports "unexpected CSF aspirated through needle." Diagnosis, management, and prognosis?**

A: **ACCIDENTAL DURAL PUNCTURE during epidural attempt** - needle passed through dura into subarachnoid space. **PDPH risk**: ~50% develop PDPH (depends on needle size; 17 G epidural needle → higher PDPH risk than spinal). **Immediate management**: (1) **Remove needle** - pull back (confirm you're out of CSF), (2) **Reattempt epidural** at different interspace (L2-L3 if original attempt was L3-L4), OR (3) **Convert to spinal** (already have dural puncture; can inject local anesthetic into subarachnoid space if patient agrees). **Patient counseling**: "We made a small tear in the membrane around your spinal cord. Headache may develop in the next 1-2 days - it will be worse when sitting up, better when lying flat. If it develops, tell us - we have effective treatment." **PDPH treatment if develops**: (1) Conservative (48 hours): Bed rest, hydration, NSAIDs, caffeine 500 mg IV, (2) If persistent: Epidural blood patch (15-20 mL autologous blood injected into epidural space; seals dura tear; 70-90% effective). **Timing**: Can do EBP anytime after PDPH confirmed; don't need to wait past 48 hours. **Prognosis**: EBP highly effective; symptom relief often immediate.

## Q4: Failed Spinal Block - Inadequate Anesthesia
**Q: Spinal anesthesia for hemorrhoidectomy. 30 minutes post-injection: patient reports pain during initial incision. Surgical team looks to anesthesiologist. Leg movement still intact (should be paralyzed). What's likely and options?**

A: **FAILED SPINAL BLOCK** - inadequate or absent blockade. **Possible causes**: (1) Needle misdirected (didn't reach subarachnoid), (2) Patient moved during injection, (3) Inadequate dose given, (4) Wrong agent/concentration used, (5) CSF not actually aspirated (synovial fluid mistaken for CSF). **Clinical sign**: Motor blockade absent (leg movement intact) → sensory blockade also inadequate. **Options available**: (1) **Supplemental epidural anesthesia**: Reposition patient, place epidural catheter, inject local anesthetic; takes 20-30 minutes (too slow if surgery imminent), (2) **Convert to general anesthesia**: Intubate, provide general anesthesia (fastest, safest option), (3) **Attempt second spinal**: Higher PDPH risk (multiple dural punctures); usually avoided. **Clinical decision**: Most would convert to general anesthesia (safest, fastest). **Prevention of failure**: (1) Landmark palpation carefully (PSIS at L4), (2) Position patient correctly (sitting for optimal midline), (3) Confirm clear colorless CSF before injection (not blood, not synovial), (4) Use correct dose, (5) Verify block: test sensory level (temperature loss to ice cube) + motor block (can't lift legs) before incision.

## Q5: Epidural Catheter Malposition - Subdural Injection
**Q: Epidural labor analgesia. After 10 mL bupivacaine injection, patient reports ONLY left-sided numbness; right side sensation intact. What's likely diagnosis?**

A: **SUBDURAL INJECTION** - catheter/needle entered subdural space (between dura and arachnoid) instead of epidural. **Characteristic findings**: (1) **Unilateral block** (only left side), (2) **Slow onset** (30-60 minutes vs 15-20 minutes for proper epidural), (3) **Unpredictable spread**, (4) **Variable motor block**, (5) **Often incomplete anesthesia**. **Why unilateral**: Subdural space narrow (~potential space); agent doesn't diffuse widely as it would in spacious epidural space. **Mechanism of error**: Needle catheter entered between dura and arachnoid at angle; didn't fully traverse dura. **Management**: (1) **STOP further injections** through this catheter, (2) **Remove catheter**, (3) **Reattempt epidural** at different level (L2-L3 if original L3-L4), (4) **Monitor closely**: If any respiratory distress (could be unrecognized high block), prepare intubation. **Why not leave it**: Unilateral block inadequate for labor (patient in pain on right side); need bilateral coverage. **Prevention**: (1) Proper needle insertion technique (loss of resistance clear, not gradual), (2) Slow injection (resistance should remain), (3) Test dosing: 3 mL with 1:200,000 epinephrine first; observe for unilateral signs before full dose, (4) Catheter behavior: should thread smoothly without resistance.

## Q6: Baricity and Unexpected High Block
**Q: Hip surgery under spinal with hyperbaric bupivacaine 12 mg. Patient positioned supine immediately post-injection. Block extends to T1 (chest) unexpectedly - above surgical requirement. Why? Risks? Prevention?**

A: **BARICITY EFFECT** - hyperbaric solution (dextrose-containing) heavier than CSF; spreads to dependent (lower) areas. **Why unexpected high block**: (1) Hyperbaric agent should spread downward in supine patient (to sacrum/lumbar), but (2) Patient likely moved/elevated head within 10-15 minutes post-injection, OR (3) Head-down tilt applied by surgery staff, causing cephalad migration, (4) Block spread further than calculated due to position changes. **Clinical consequence**: T1-T2 level = intercostal paralysis → respiratory compromise risk. **Risk assessment**: If T4+ involved, also cardiac accelerator fiber blockade → bradycardia. **Prevention**: (1) **Position patient BEFORE injection** and maintain position for 10-15 minutes, (2) **Clear communication**: Tell surgery/recovery staff "no head movements for next 15 minutes; critical for block control", (3) **Head-elevated position** if hypobaric solution used (spreads upward anyway), (4) **Head-down position** if hyperbaric (keeps agent low), (5) **Consider isobaric** if anxious about spread control (minimal gravity effect; stays near injection site). **Management if high block occurs**: (1) Reassure patient, (2) Monitor respiratory rate closely, (3) Supplemental O2, (4) Intubate if RR <10 or SpO2 <90%, (5) Block eventually regresses (duration of agent). **Key point**: Position changes in first 10-15 minutes critical for baricity effects.

## Q7: PDPH Diagnosis and Management Timeline
**Q: Cesarean section with spinal 48 hours ago. Now: worst headache of life, worse with sitting/standing, neck stiffness, concerned about meningitis. Differentiate PDPH from infection? Management timeline?**

A: **LIKELY POST-DURAL PUNCTURE HEADACHE (PDPH)**, but rule out meningitis. **Differential features**:
- **PDPH**: Positional (better lying flat, worse sitting), worse with Valsalva/coughing, develops 24-48h post-procedure, neck stiffness from meningeal traction (not infection), NO fever, no photophobia
- **Meningitis**: Non-positional headache, HIGH fever, CSF shows elevated WBC/protein/positive cultures, meningeal signs (photophobia, neck rigidity from inflammation)

**Diagnostic approach**: (1) **Check temperature**: If febrile >38.5°C, meningitis more likely, (2) **Repeat positional test**: Lie patient flat; if PDPH, symptoms improve dramatically within 5 minutes, (3) **Lumbar puncture if meningitis suspected**: CSF elevated lymphocytes, elevated protein, negative cultures. **PDPH management timeline** (first attempt conservative):
- **Hours 0-48**: Bed rest (though mobilization safe if mild), aggressive IV hydration (3L/day), NSAIDs (ibuprofen, aspirin), caffeine 500 mg IV (provides 4-6h relief)
- **After 48 hours**: If symptoms persist despite conservative care, **Epidural blood patch** (gold standard):
  - 15-20 mL autologous blood injected into epidural space (seals dura tear)
  - 70-90% first-time success rate
  - Relief often immediate (within 5-10 minutes post-injection)
  - Can repeat if first attempt fails (90%+ cumulative success)

**Prognosis**: EBP highly effective; most patients return to normal within 24 hours post-procedure.

## Q8: Spinal vs Epidural Selection for Long Surgery
**Q: 56-year-old for open prostate cancer surgery (3-4 hour procedure). Why might epidural be preferred over spinal? Discuss advantages of epidural.**

A: **EPIDURAL PREFERRED for this 3-4 hour case** because:

1. **Duration**: Spinal agents (lidocaine 1-2h, bupivacaine 3-4h) inadequate for 3-4 hour surgery; would need re-dosing or conversion to general. Epidural catheter allows **continuous infusion** (titrate local anesthetic + opioid as needed throughout).

2. **Continuous analgesia**: Epidural catheter remains in place 24-48 hours for **postoperative pain relief** (reduces opioid use, side effects, complications).

3. **Hemodynamic stability**: Epidural onset **gradual** (20-30 min) → slower sympathetic blockade → less precipitous hypotension. Spinal = sudden hypotension (20-40 mmHg immediately).

4. **Flexibility**: During surgery, can **adjust block intensity** (increase concentration/rate if inadequate; decrease if too high). Spinal = fixed dose; no adjustment.

5. **Postoperative recovery**: Better pain control → faster mobilization, reduced DVT/PE risk, better pulmonary function.

**Why NOT spinal**: (1) Spinal agents don't last 3-4 hours adequately, (2) Re-dosing requires second dural puncture (PDPH risk), (3) Conversion to general defeats purpose of regional, (4) Single-shot spinal inadequate planning for this duration.

**Clinical pearl**: **Epidural superior for prolonged surgery (>2 hours); spinal better for short procedures (<2 hours)**.

**Additional considerations**: If patient has significant cardiac comorbidities, epidural safer (maintains spontaneous ventilation, avoids intubation risk).`,
        mnemonics: [
          { text: "Hypotension = Elevate legs, Fluids, Vasopressor (E-F-V sequence)", explanation: "Management algorithm" },
          { text: "High spinal = Intubate, Atropine, fluids, Vasopressor (IAVP)", explanation: "Emergency response" },
          { text: "PDPH = Positional (worse sitting), Dural puncture, Puncture headache; EBP = cure", explanation: "Headache management" },
          { text: "Baricity BEFORE injection, position AFTER injection for 10-15 min critical", explanation: "Prevention strategy" },
          { text: "Spinal = short (<2h), Epidural = long (>2h) procedures", explanation: "Selection guide" },
        ],
        keyPoints: [
          "Hypotension: legs up → fluids → vasopressor (phenylephrine); prevent with preload",
          "High spinal (T4+) emergency: intubate + atropine + fluids + vasopressor immediately",
          "Dural puncture: 50% PDPH risk; conservative first, EBP if refractory",
          "Failed block: convert to general (safest, fastest); prevention = careful landmark + CSF confirmation",
          "Epidural malposition (subdural): unilateral block; remove catheter + reattempt",
          "Baricity: position BEFORE injection; maintain position 10-15 min critical",
          "Spinal ideal <2h, epidural ideal >2h; selection based on surgery duration",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Regional Anesthesia Case Management", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Regional Anesthesia Complications", edition: "6th" },
        ],
      },
    ],
  },
];
