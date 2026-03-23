import type { TopicLessons } from "./content-loader";

export const anesthesiologyPart3Lessons: TopicLessons[] = [
  {
    topicCode: "AS-MOD-05-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "acute-pain-management-foundation",
        title: "Acute Pain Management - Foundation",
        estimatedMinutes: 25,
        summary: "Pain pathophysiology, nociception vs pain, acute consequences, special populations.",
        contentMd: `# Acute Pain Management - Foundation

## Pain Physiology: Nociception vs Pain

### Nociception (4 Steps - Objective)
1. **Transduction**: Tissue injury → nociceptor activation (C fibers: slow/burning; A-delta: fast/sharp)
2. **Transmission**: Action potentials travel from periphery → dorsal horn → brain
3. **Modulation**: Spinal cord gates pain signals (descending inhibition via endogenous opioids, serotonin, norepinephrine)
4. **Perception**: Brain integrates signal with emotion, cognition, context → subjective pain experience

### Pain Definition (WHO)
- **Subjective**: "An unpleasant sensory and emotional experience associated with actual or potential tissue damage"
- **Key**: Can exist without nociception (phantom pain); nociception can exist without pain (anesthesia)

## Pain Classifications

### By Etiology
- **Nociceptive**: Somatic (bone, muscle, joint), visceral (organs)
- **Neuropathic**: Nerve injury (burning, shooting, tingling)
- **Functional**: No clear tissue injury; centralized pain (fibromyalgia, CRPS)

### By Duration
- **Acute**: <3 months (postoperative, trauma, acute illness)
- **Chronic**: >3 months (development risk 2-5% post-op if inadequately managed)

## Consequences of Acute Pain

### Physiologic Effects
- **Sympathetic activation**: Tachycardia, hypertension, diaphoresis, tremor
- **Neuroendocrine**: Cortisol ↑↑, ACTH ↑, catecholamines ↑, prolactin ↑
- **Respiratory**: Shallow breathing (splinting) → atelectasis risk, pneumonia risk
- **Metabolic**: Hyperglycemia, protein catabolism, increased metabolic rate
- **Cardiovascular**: Increased O2 demand, increased cardiac workload, MI risk in CAD patients
- **Immunologic**: Suppressed cell-mediated immunity, delayed wound healing
- **Coagulation**: Hypercoagulable (VTE risk)

### Clinical Consequences
- **Delayed healing**: Increased catabolic state opposes anabolism
- **Thromboembolic**: Immobility from pain → DVT/PE risk
- **Respiratory**: Splinting → reduced ventilation → pneumonia
- **Psychological**: Anxiety, depression, sleep deprivation
- **Transition to chronic pain**: Early aggressive management prevents

## Goals of Acute Pain Management

1. **Pain relief**: Enable function, sleep, psychological comfort
2. **Prevent complications**: DVT, pneumonia, delirium, cardiac events
3. **Prevent chronic pain transition**: Early aggressive = reduced risk
4. **Minimize side effects**: Nausea, respiratory depression, addiction
5. **Facilitate rehabilitation**: Early mobilization, PT, return to function

## Special Populations

### Elderly (>65 years)
- **Reduced metabolism**: Lower hepatic clearance; longer duration of action
- **Polypharmacy**: Drug interactions common; adjust doses
- **Increased sensitivity**: CNS effects magnified; delirium risk, respiratory depression risk
- **Comorbidities**: Cardiac, renal, hepatic disease affects dosing
- **Management**: Lower doses, longer intervals, careful monitoring, avoid anticholinergics

### Renal Impairment (GFR <30)
- **Morphine metabolites accumulate**: Active metabolites (M6G, M3G) → respiratory depression risk
- **Bupivacaine clearance impaired**: Risk of local anesthetic toxicity
- **Avoid**: Morphine, meperidine (toxic metabolites); long-acting agents
- **Use**: Fentanyl (no active metabolites), hydromorphone, oxycodone; adjust interval

### Hepatic Impairment (Child-Pugh B/C)
- **Reduced metabolism**: Risk of accumulation, higher bioavailability
- **Reduced protein synthesis**: Hypoalbuminemia → higher free drug levels
- **Avoid**: Acetaminophen (hepatotoxic if >2 g/day); morphine (slow metabolism)
- **Use**: Fentanyl (extrahepatic metabolism); adjust dose ↓ by 50%

### Obesity
- **Altered pharmacokinetics**: Lipophilic drugs (propofol, fentanyl) distribute to fat; prolonged duration
- **Dosing**: Weight-based dosing problematic; use ideal body weight or intermediate weights
- **Special**: Epidural/regional blocks preferred (avoid airway manipulation)

### Substance Use Disorder (Opioid Tolerance)
- **Higher baseline opioid requirement**: Continue baseline + acute pain dosing
- **Avoid withdrawal**: Never discontinue chronic opioids (precipitates withdrawal)
- **Concern**: Addiction vs medical need; treat pain, but monitor closely
- **Methadone**: Continue baseline; add short-acting for acute pain`,
        mnemonics: [
          { text: "Nociception = TTMP: Transduction, Transmission, Modulation, Perception", explanation: "4-step pathway" },
          { text: "Acute pain → splinting → pneumonia; aggressive management prevents", explanation: "Respiratory consequence" },
          { text: "Elderly/renal: reduce dose, extend interval; avoid morphine metabolites", explanation: "Special populations" },
          { text: "Goal: pain relief + prevent complications + enable rehab + prevent chronic transition", explanation: "Management objectives" },
        ],
        keyPoints: [
          "Pain = subjective experience; nociception = objective stimulus (can be dissociated)",
          "Acute pain consequences: splinting → pneumonia, immobility → VTE, → chronic pain transition",
          "Special populations: elderly/renal/hepatic need dose reduction; opioid-tolerant need higher doses",
          "Early aggressive management prevents transition to chronic pain",
          "Multimodal analgesia synergistic; reduces total opioid dose needed",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Postoperative Pain Management", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Pain Management", edition: "6th" },
        ],
      },
      {
        layer: 2,
        slug: "pain-assessment-who-ladder",
        title: "Acute Pain Management - Assessment & WHO Ladder",
        estimatedMinutes: 30,
        summary: "Pain assessment scales, WHO analgesic ladder, multimodal approach.",
        contentMd: `# Acute Pain Management - Assessment & WHO Ladder

## Pain Assessment Scales

### Numeric Rating Scale (NRS) - STANDARD
- **0-10 scale**: 0 = no pain, 10 = worst possible pain
- **Advantage**: Quantitative, easy, reproducible
- **Use**: Reassess after intervention; <4/10 target for postop
- **Most common** in clinical practice

### Verbal Rating Scale (VRS)
- **Descriptive**: None, mild, moderate, severe
- **Advantage**: Simple for cognitively impaired
- **Limitation**: Ordinal, not quantitative

### Visual Analog Scale (VAS)
- **10 cm line**: Patient marks pain intensity
- **Sensitive** to small changes; useful for research
- **Limitation**: Harder for elderly/confused patients

### Faces Pain Scale
- **6 faces** (happy to crying expression)
- **Use**: Pediatric, non-verbal, elderly with dementia
- **Age**: Validated 3+ years

### CRIES Score (Pediatric <6 years)
- **Crying, Requires O2, Increased vitals, Expression, Sleeplessness**
- **0-10 score**: Objective assessment in pre-verbal children
- **Useful**: First 24-48 hours post-op

## WHO Analgesic Ladder (3-Step Approach)

### Step 1: Mild Pain (1-3/10 NRS)

**Non-opioid agents:**
- **Acetaminophen (Paracetamol)**: 500-1000 mg Q4-6H (max 3-4 g/day to avoid hepatotoxicity)
- **NSAIDs**: Ibuprofen 400-800 mg Q6-8H, naproxen 250-500 mg Q12H
- **Topical**: Diclofenac gel, capsaicin cream (excellent local efficacy, minimal systemic)

**Adjuvants:**
- **Gabapentin**: 300-900 mg TID (for neuropathic component if present)
- **Duloxetine**: 30-60 mg daily (SNRI; for pain + mood)

**Non-pharmacologic:**
- Physical therapy, ice/heat, elevation, relaxation, distraction

### Step 2: Moderate Pain (4-6/10)

**Weak opioids:**
- **Tramadol**: 100-150 mg Q4-6H (max 400 mg/day; seizure risk >400 mg, MAOI interaction)
- **Codeine**: 30-60 mg Q4-6H (poor metabolism in ~10% population; metabolized to morphine by CYP2D6)
- **Hydrocodone**: 5-10 mg Q4-6H (combined with acetaminophen in Vicodin)
- **Combination preparations**: Tylenol #3 (acetaminophen 300 mg + codeine 30 mg)

**Plus non-opioid:** Continue acetaminophen or NSAID

**Adjuvants:** Gabapentin, pregabalin for neuropathic pain

### Step 3: Severe Pain (7-10/10)

**Strong opioids:**
- **Morphine**: 5-10 mg IV/SC Q2-4H (gold standard; rapid onset 5-10 min; good for acute)
- **Fentanyl**: 50-100 mcg IV; transdermal patch 25-100 mcg/72H (no active metabolites; lipophilic)
- **Hydromorphone**: 1-2 mg IV Q2-4H (more potent than morphine; good for opioid-tolerant)
- **Oxycodone**: 5-10 mg PO Q4-6H (good oral bioavailability; avoid IV - formulation risk)

**Dosing principle**: Pain-titrated; increase until adequate relief or side effects limit dose

**Long-acting vs immediate-release:**
- **Immediate-release**: Q4-6H dosing; adjust to effect (good for acute)
- **Long-acting (ER)**: Use only after pain controlled; for chronic pain (NOT acute post-op)

## Multimodal Analgesia Concept

### Rationale
- **Synergistic effects**: Different mechanisms → better pain control at lower doses
- **Reduced opioid requirement**: 30-50% less opioid needed; fewer side effects
- **Prevent tolerance**: Less opioid escalation needed over time

### Components of Multimodal Regimen
1. **Non-opioid baseline**: Acetaminophen ± NSAID
2. **Opioid PRN**: Titrated to effect
3. **Adjuvant**: Gabapentin, pregabalin, duloxetine
4. **Regional anesthesia**: Blocks, epidural (if suitable for procedure)
5. **Non-pharmacologic**: PT, relaxation, ice/heat

### Example Regimen (Post-op Day 1-2)
- **Base**: Acetaminophen 1 g Q6H + Ibuprofen 400 mg Q8H (if no contraindications)
- **Opioid**: Morphine 5 mg IV Q2-4H PRN (pain >4/10)
- **Adjuvant**: Gabapentin 300 mg Q8H (if neuropathic pain component)
- **Regional**: Epidural morphine 5 mg if major surgery (24+ hours analgesia)

## Opioid Side Effects and Management

| Side Effect | Incidence | Mechanism | Management |
|-------------|-----------|-----------|------------|
| **Constipation** | 80% (most common) | Opioid slows gut motility | Stool softener + osmotic laxative at initiation |
| **Nausea/vomiting** | 30% | Chemoreceptor trigger zone, vestibular | 5-HT3 antagonist (ondansetron), change opioid |
| **Respiratory depression** | 2-5% | CNS depression of respiratory center | Monitor RR; naloxone if RR <8 |
| **Sedation** | 20-30% | CNS depression | Usually resolves in 3-5 days; hold ETOH |
| **Pruritus** | 10% | Histamine release + opioid receptor | Antihistamine; change opioid |
| **Urinary retention** | 10% (post-op) | Opioid effects on bladder smooth muscle | Monitor I/O; catheter if needed |
| **Myosis** | Common | Opioid action on oculomotor nucleus | Monitor pupils; expected |

## Monitoring Parameters

- **Pain reassessment**: NRS Q1-2H initially; adjust analgesics
- **Vital signs**: BP, HR, RR (especially RR; should stay >10); SpO2
- **Sedation level**: Pasero Opioid-Induced Sedation Scale (0=alert to 3=sleep, unarousable)
- **Complications**: Constipation (daily), urinary retention (I/O), delirium
- **Function**: Ability to cough, move, mobilize`,
        mnemonics: [
          { text: "NRS 0-10 most common; reassess after intervention every 1-2 hours initially", explanation: "Assessment" },
          { text: "WHO Step 1 = non-opioid, Step 2 = weak opioid + non-opioid, Step 3 = strong opioid + adjuvant", explanation: "Ladder" },
          { text: "Opioid constipation 80% most common; prevent with stool softener + laxative AT initiation", explanation: "Side effect" },
          { text: "Multimodal = synergistic; 30-50% less opioid needed at same pain control", explanation: "Approach" },
        ],
        keyPoints: [
          "NRS 0-10 standard; reassess after intervention; target <4/10 postop",
          "WHO ladder: Step 1 (non-opioid) → Step 2 (weak opioid) → Step 3 (strong opioid)",
          "Multimodal approach: non-opioid baseline + opioid PRN + adjuvant + regional if suitable",
          "Opioid constipation most common (80%); prevent at initiation with docusate + osmotic laxative",
          "Respiratory depression rare (2-5%); monitor RR; maintain >10",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Pain Management", edition: "14th" },
          { book: "WHO Analgesic Ladder Guidelines", chapter: "Cancer Pain Relief", edition: "3rd" },
        ],
      },
      {
        layer: 3,
        slug: "acute-pain-regional-special-situations",
        title: "Acute Pain Management - Regional & Special Situations",
        estimatedMinutes: 30,
        summary: "Regional anesthesia for pain, epidural analgesia, opioid-sparing approaches, special cases.",
        contentMd: `# Acute Pain Management - Regional & Special Situations

## Regional Anesthesia Techniques for Postoperative Pain

### Peripheral Nerve Blocks
- **Single-injection blocks**: Femoral, interscalene, wrist blocks
- **Success rate**: 90-95%; duration 6-24 hours depending on agent/anatomy
- **Catheter-based blocks**: Placed intra-op, left in place 2-3 days
- **Infusion**: Local anesthetic bolus Q4-8H or continuous infusion pump
- **Advantage**: Excellent pain control, opioid-sparing, patient-directed

### Epidural Analgesia (Gold Standard for Major Surgery)
- **Agents**:
  - Epidural morphine 5-10 mg (single dose, 24h analgesia)
  - Epidural fentanyl 50-100 mcg + bupivacaine 0.125% (infusion)
  - Patient-controlled epidural analgesia (PCEA): Patient pushes button; pump delivers small bolus
- **Advantages**:
  - Excellent analgesia, less systemic opioid, faster mobilization
  - Reduced postop complications (pneumonia, VTE)
- **Complications**: Epidural hematoma (1:150,000); neuraxial infection (rare)
- **Contraindication**: Anticoagulation (timing-dependent)

### Spinal Morphine (Single-Dose Intrathecal)
- **Dose**: 0.1-0.5 mg preservative-free morphine intrathecal
- **Duration**: 12-24 hours pain relief
- **Risk**: Respiratory depression (delayed 8-24 hours post-injection)
- **Monitoring**: Vital signs, sedation score; naloxone available

## Specific Clinical Scenarios

### Postoperative Pain Management Timeline

**Immediate Post-op (PACU, 0-2 hours):**
- Assess pain, mental status, vitals
- **Analgesics**: IV morphine 2-3 mg Q10-15 min (titrate to effect) OR fentanyl 25-50 mcg IV
- Continue until pain <4/10 or side effects limit
- Avoid IM (unpredictable); oral only if awake/alert

**Ward (2-24 hours):**
- **Scheduled**: Acetaminophen 1g Q6H + NSAID Q8H
- **PRN opioid**: Morphine 5-10 mg IV/PO Q2-4H
- **Transition**: Start long-acting ONLY if pain >5/10 sustained (not early post-op)
- **Regional block**: If in place, reduces opioid need significantly

**Discharge (Days 1-14):**
- **First week**: Opioid + acetaminophen/NSAID
- **Second week**: Wean opioid; continue NSAID as needed
- **Avoid**: Long-term opioid use (addiction risk increases weekly)

### Trauma & Acute Injuries

**Goals**: Aggressive analgesia to prevent splinting, improve pulmonary function

- **Multimodal**: NSAIDs (if hemodynamically stable), acetaminophen, gabapentin
- **Opioid**: IV titration; use regional block if possible
- **Regional blocks**: Rib blocks (fractured ribs), intercostal nerve blocks
- **Special emphasis**: Incentive spirometry, coughing (pain-limited; prevent pneumonia)

### Burn Pain (Severe, Often Undertreated)

**Characteristics**: Severe nociceptive pain; tolerance develops quickly

- **Scheduled analgesia**: Acetaminophen, NSAIDs (early burn care)
- **Opioid**: Generous dosing; often need high doses
- **Procedure pain**: Pre-medication (morphine + anxiolytic before dressing changes)
- **Multimodal**: Ketamine useful for procedural pain; gabapentin
- **Non-pharmacologic**: Immersion in warm water reduces pain perception

### Pancreatitis Pain (Epigastric Severe Visceral)

**Key principle**: AVOID morphine (spasm of sphincter of Oddi worsens pain)

- **Use instead**: Hydromorphone, fentanyl (don't trigger sphincter spasm)
- **NSAIDs**: Avoid (worsen acute pancreatitis)
- **Adjuvant**: Gabapentin for neuropathic component if present

### Opioid-Naive vs Opioid-Tolerant Patients

**Opioid-Naive:**
- Starting doses: Lower; increase gradually
- Risk: Respiratory depression, oversedation
- Concern: First-time users sensitive to side effects

**Opioid-Tolerant** (chronic pain, substance use):
- Starting dose: 50-100% higher than opioid-naive
- Escalation: May need rapid titration for acute pain
- Concern: Addiction vs medical need (treat pain, but aware of risk)
- **Key**: Continue baseline chronic opioid (don't discontinue; precipitates withdrawal)

## Non-Pharmacologic Approaches

### Effective Modalities
- **Physical therapy**: Early mobilization, exercises reduce pain
- **Relaxation**: Deep breathing, meditation, guided imagery
- **Distraction**: Music, TV, family presence
- **Cold/heat**: Ice first 48h (reduces inflammation); heat after (muscle relaxation)
- **Acupuncture**: Some evidence for certain pain types
- **Hypnosis**: Adjunct for anxiety

### Psychological Management
- **Education**: Explain pain expected; reassurance reduces anxiety
- **Anxiety reduction**: Anxiolytics if severe; cognitive behavioral therapy
- **Sleep**: Adequate sleep promotes healing; ensure rest (avoid stimulation at night)
- **Family support**: Presence, encouragement facilitates coping`,
        mnemonics: [
          { text: "Regional anesthesia excellent for pain; opioid-sparing approach", explanation: "Preference" },
          { text: "Epidural morphine 5-10mg = 24h analgesia; monitor for delayed respiratory depression", explanation: "Key use" },
          { text: "Pancreatitis: AVOID morphine (sphincter spasm); use fentanyl/hydromorphone", explanation: "Contraindication" },
          { text: "Opioid-tolerant: continue baseline + acute pain dosing; avoid withdrawal", explanation: "Special population" },
        ],
        keyPoints: [
          "Regional anesthesia excellent for post-op pain; opioid-sparing, reduces complications",
          "Epidural morphine provides 24h analgesia; requires monitoring for delayed respiratory depression",
          "Pancreatitis: avoid morphine (sphincter of Oddi spasm); use fentanyl/hydromorphone instead",
          "Opioid-tolerant: continue baseline medication; add acute pain dosing (don't discontinue)",
          "Non-pharmacologic adjuncts essential: PT, relaxation, distraction, psychological support",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Regional Anesthesia for Analgesia", edition: "14th" },
          { book: "Sabiston Textbook of Surgery", chapter: "Perioperative Management", edition: "21st" },
        ],
      },
      {
        layer: 4,
        slug: "acute-pain-exam-prep",
        title: "Acute Pain Management - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts, case scenarios, WHO ladder application, complications.",
        contentMd: `# Acute Pain Management - Exam Prep

## WHO Ladder Quick Reference

| Step | Pain Level | Agents | Examples |
|------|-----------|--------|----------|
| 1 | 1-3/10 | Non-opioid ± adjuvant | Acetaminophen, NSAID, gabapentin |
| 2 | 4-6/10 | Weak opioid + non-opioid ± adjuvant | Tramadol, codeine + acetaminophen |
| 3 | 7-10/10 | Strong opioid + non-opioid ± adjuvant | Morphine, fentanyl, hydromorphone |

## High-Yield Facts

**Assessment:**
- NRS 0-10 most common; assess Q1-2H initially
- Target <4/10 postop for mobilization

**Pharmacology:**
- Acetaminophen max 3-4 g/day (hepatotoxicity risk)
- Morphine 5-10 mg IV Q2-4H titrated
- Tramadol max 400 mg/day (seizure risk >400)

**Special situations:**
- **Pancreatitis**: AVOID morphine (sphincter spasm); use fentanyl
- **Renal impairment**: Avoid morphine (metabolite accumulation); use fentanyl
- **Elderly**: Reduce dose 25-50%; longer intervals; avoid anticholinergics
- **Opioid-tolerant**: Higher starting dose; continue baseline

**Multimodal approach:**
- Reduces total opioid 30-50%
- Synergistic effects
- Fewer side effects

**Constipation:**
- 80% with opioids; prevent at initiation
- Stool softener (docusate) + osmotic laxative (miralax)
- Stimulant laxative if no BM x 3 days

## Common Exam Question Patterns

- **Moderate pain 5/10 management?** → WHO Step 2: weak opioid + non-opioid
- **Severe pain 8/10?** → WHO Step 3: strong opioid
- **Pancreatitis pain drug to AVOID?** → Morphine (sphincter of Oddi spasm)
- **Renal impairment opioid choice?** → Fentanyl (no active metabolites)
- **Opioid constipation prevention?** → Docusate + osmotic laxative at initiation
- **Respiratory depression threshold?** → RR <8 (monitor all opioid patients)
- **Multimodal benefit?** → Reduced opioid dose, fewer side effects, better pain control
- **Epidural morphine duration?** → 12-24 hours (monitor for delayed respiratory depression)

## Case Scenarios

### Case 1: Moderate Pain with Nausea
**Scenario**: POD1 femur ORIF, pain 5/10, nausea from IV morphine.

**Management:**
- Switch to less nauseating opioid (fentanyl or hydromorphone)
- Add antiemetic (ondansetron 4 mg IV, metoclopramide 10 mg Q8H)
- Continue acetaminophen + NSAID
- Consider femoral nerve block catheter if not already placed

### Case 2: Severe Pain Opioid-Tolerant
**Scenario**: 55-year-old chronic back pain on morphine ER 60 mg BID, now post-op with severe pain.

**Management:**
- Continue baseline morphine ER (prevent withdrawal)
- Add PRN opioid: morphine 10-20 mg Q2H (pain >4/10)
- Regional anesthesia preferred (epidural, blocks)
- Expect higher opioid requirement

### Case 3: Pancreatitis
**Scenario**: Acute pancreatitis, epigastric pain 9/10, amylase elevated.

**Management:**
- AVOID morphine (sphincter of Oddi spasm worsens pain)
- Use: Fentanyl 50-100 mcg IV OR hydromorphone 2-4 mg IV
- NSAIDs contraindicated
- Aggressive fluids`,
        mnemonics: [
          { text: "WHO ladder: Step 1 (non-opioid), Step 2 (weak opioid + non-opioid), Step 3 (strong opioid + adjuvant)", explanation: "Framework" },
          { text: "Pancreatitis: AVOID morphine; use Fentanyl/Hydromorphone", explanation: "Critical rule" },
          { text: "Opioid constipation 80%: prevent with docusate + osmotic laxative AT INITIATION", explanation: "Prevention" },
          { text: "Multimodal: reduces opioid by 30-50%, fewer side effects, synergistic", explanation: "Advantage" },
        ],
        keyPoints: [
          "WHO ladder: mild (non-opioid), moderate (weak opioid), severe (strong opioid)",
          "NRS <4/10 target postop for mobilization",
          "Pancreatitis: AVOID morphine (sphincter spasm); use fentanyl",
          "Opioid constipation prevention is key; use docusate + osmotic at initiation",
          "Multimodal reduces opioid requirement 30-50%",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Pain Management", edition: "14th" },
          { book: "WHO Cancer Pain Relief Guidelines", chapter: "Analgesic Ladder", edition: "3rd" },
        ],
      },
      {
        layer: 5,
        slug: "acute-pain-qa",
        title: "Acute Pain Management - Active Recall",
        estimatedMinutes: 15,
        summary: "10 clinical cases and flashcards testing WHO ladder, special situations, drug selection.",
        contentMd: `# Acute Pain Management - Active Recall

## Q1: WHO Ladder Application
**Q: Patient reports pain 5/10 on postop day 1. Currently on acetaminophen only. What's the next step?**

A: **Escalate to WHO Step 2** (moderate pain 4-6/10). Continue acetaminophen + add weak opioid: tramadol 100-150 mg Q4-6H OR codeine 30-60 mg Q4-6H. Could also add NSAID if no contraindication (max 3-4 days post-op in most). Reassess in 1-2 hours.

## Q2: Pancreatitis Pain - Critical Drug Avoidance
**Q: Patient with acute pancreatitis and severe pain. Ordered morphine 10 mg IV. Why is this contraindicated?**

A: **Morphine causes sphincter of Oddi spasm** - worsens pancreatitis pain, increases intracranial pressure, delays pain relief. **Avoid morphine entirely in pancreatitis.** Use instead: **Fentanyl 50-100 mcg IV** or **hydromorphone 2-4 mg IV** (don't trigger sphincter spasm). NSAIDs also contraindicated (worsen acute pancreatitis).

## Q3: Opioid Constipation Prevention
**Q: Patient started on morphine 10 mg IV Q3H for acute post-op pain. What must be prescribed concurrently?**

A: **Stool softener + osmotic laxative at initiation.** Opioid-induced constipation occurs in 80% (most common side effect). **Prescription**: Docusate 100-300 mg daily + miralax daily. If no BM x 3 days, add stimulant laxative (senna). This prevents constipation better than treating after it develops.

## Q4: Respiratory Depression Monitoring
**Q: How often should you monitor respiratory rate in post-op opioid patient? What RR triggers intervention?**

A: **Monitor RR Q1-2H initially**, then Q4H if stable. **Respiratory depression threshold: RR <8 or altered mental status.** At RR <8: (1) Stimulate patient, (2) Check O2 sat, (3) Apply O2, (4) Consider naloxone 0.4 mg IV if severe. Respiratory depression rare (2-5%) but serious.

## Q5: Renal Impairment - Opioid Selection
**Q: Patient with GFR 15 on chronic dialysis needs acute pain management. Which opioid to avoid and which to use?**

A: **AVOID morphine** (active metabolites M6G, M3G accumulate; respiratory depression risk). **Use: Fentanyl** (no active metabolites; extrahepatic metabolism; lipophilic). Alternative: hydromorphone (shorter-acting metabolites). Avoid: meperidine (toxic metabolite normeperidine).

## Q6: Elderly Patient Dosing
**Q: 82-year-old post-op hip fracture with pain 6/10. Typical morphine dose 10 mg IV, but elderly patient on multiple medications. What dosing adjustment?**

A: **Reduce by 25-50%**: Start morphine 5 mg IV Q4H (not 10 mg). Elderly have: reduced hepatic clearance, increased CNS sensitivity, polypharmacy interactions. Escalate slowly. Risk of oversedation, respiratory depression, delirium much higher than younger patients.

## Q7: Multimodal Analgesia Benefits
**Q: Why is multimodal analgesia superior to opioid monotherapy?**

A: **Synergistic effects**: Different mechanisms (opioid + non-opioid + adjuvant) work together. **Benefits**: (1) 30-50% reduction in total opioid dose, (2) Fewer side effects (less constipation, nausea, respiratory depression), (3) Better pain control at lower doses, (4) Prevents tolerance. Example: morphine 5 mg + acetaminophen + gabapentin = better pain control than morphine 10 mg alone.

## Q8: Epidural Morphine Complications
**Q: Patient received epidural morphine 5 mg for major abdominal surgery. What complication must be monitored for and when?**

A: **Delayed respiratory depression** (8-24 hours post-injection). Epidural morphine provides 24-hour analgesia BUT carries risk of respiratory depression developing hours after injection. **Monitoring**: Vital signs Q1H × 24H, sedation score, respiratory rate. **Naloxone** available for emergency. Mechanism: morphine diffuses from epidural space over hours → accumulates in CSF.

## Q9: Opioid-Tolerant Patient Post-op
**Q: 45-year-old on methadone 40 mg daily for pain management. Now post-op with acute severe pain. How manage?**

A: **CONTINUE baseline methadone 40 mg daily** (prevent withdrawal). **Add acute pain opioid separately**: Morphine 10-20 mg IV Q2H PRN (pain >4/10). Opioid-tolerant patients need 50-100% higher baseline + additional acute pain dosing. Monitor closely for addiction/aberrant behavior, but treat pain (medical need distinct from addiction).

## Q10: Transition from Acute to Chronic Pain
**Q: 3-week post-op patient still on opioids; pain 6/10. What's the risk of continuing high-dose opioids?**

A: **Risk of transition to chronic pain**, especially if pain inadequately controlled early. **Mechanism**: Neuroplasticity changes → central sensitization if pain persists. **Prevention**: Early aggressive multimodal management (first week especially critical). After 3 weeks: should be weaning off opioids, continuing non-opioid + PT. If pain still 6/10, reassess for complications (infection, hardware issues) rather than escalating opioids. Addiction risk increases weekly with continued opioid use.`,
        mnemonics: [
          { text: "WHO ladder: 1-3/10 = non-opioid, 4-6/10 = weak opioid, 7-10/10 = strong opioid", explanation: "Framework" },
          { text: "Pancreatitis pain: AVOID morphine (sphincter spasm); use Fentanyl/Hydromorphone (F-H)", explanation: "Critical rule" },
          { text: "Opioid constipation 80%: Docusate + osmotic laxative AT INITIATION (prevent)", explanation: "Prevention" },
          { text: "Elderly: reduce dose 25-50%, longer intervals, avoid anticholinergics (CNS risk)", explanation: "Special population" },
          { text: "Respiratory depression RR <8: stimulate, O2, consider naloxone", explanation: "Emergency response" },
          { text: "Epidural morphine: delayed respiratory depression 8-24h post-injection; monitor vitals Q1H", explanation: "Complication" },
        ],
        keyPoints: [
          "WHO ladder: non-opioid (1-3/10), weak opioid (4-6/10), strong opioid (7-10/10)",
          "Pancreatitis: AVOID morphine (sphincter of Oddi spasm); use fentanyl/hydromorphone",
          "Opioid constipation most common side effect (80%); prevent with docusate + laxative at initiation",
          "Elderly: reduce dose 25-50%; longer intervals; polypharmacy interactions",
          "Respiratory depression rare (2-5%); monitor RR; naloxone for RR <8",
          "Epidural morphine: 24h analgesia but delayed respiratory depression risk 8-24h",
          "Multimodal reduces opioid by 30-50%; synergistic, fewer side effects",
          "Opioid-tolerant: continue baseline + add acute pain dosing (don't discontinue)",
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Pain Management", edition: "14th" },
          { book: "WHO Cancer Pain Relief Guidelines", chapter: "Analgesic Ladder", edition: "3rd" },
        ],
      },
    ],
  },
];
