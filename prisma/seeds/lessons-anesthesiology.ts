import type { TopicLessons } from "./content-loader";

export const anesthesiologyLessons: TopicLessons[] = [
  {
    topicCode: "AS-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "stages-anesthesia-foundation",
        title: "Stages of Anesthesia & Agents - Foundation",
        estimatedMinutes: 25,
        summary: "Guedel's four stages of general anesthesia, anesthetic agent classification, and basic pharmacology.",
        contentMd: `# Stages of Anesthesia & Agents - Foundation

## Guedel's Stages of General Anesthesia

### Stage 1: Induction (Analgesia)
- **Duration**: From induction to loss of consciousness (5-30 seconds IV, minutes with inhalational)
- **Characteristics**:
  - Patient progressively sedated but initially conscious
  - Analgesia present, amnesia begins
  - Protective airway reflexes intact
  - Eyelash reflex present
- **Clinical**: Patient may respond to verbal commands initially

### Stage 2: Excitement (Delirium)
- **Duration**: Seconds to minutes (dangerous period)
- **Characteristics**:
  - Appears asleep with purposeful movements
  - Increased muscle tone, thrashing possible
  - Risk of airway obstruction, coughing, laryngospasm
  - Pupil dilation with rapid eye movements
  - Sympathetic hyperactivity (increased HR, BP, RR)
- **Clinical dangers**: Aspiration, airway obstruction, laryngospasm
- **Modern practice**: Minimized by smooth IV induction (propofol, etomidate)

### Stage 3: Surgical Anesthesia
- **Three planes** (I, II, III): Based on reflex depression
  - **Plane I**: Eyeball moves downward, corneal reflex disappears
  - **Plane II**: Eyes centered, conjunctival reflex gone, swallowing depressed
  - **Plane III**: Complete loss of swallowing, laryngeal reflex depressed, intercostal paralysis
- **Characteristics**:
  - Profound unconsciousness, no purposeful movement
  - Pupils constricted to midposition (miosis)
  - Regular respirations (slower, shallower)
  - Stabilized cardiovascular parameters
- **Duration**: Main surgical stage, maintained throughout procedure

### Stage 4: Overdosage (Medullary Depression)
- **Onset**: Excessive anesthetic dose or continued administration
- **Characteristics**:
  - Respiratory depression → apnea
  - Cardiovascular collapse (hypotension, bradycardia, arrhythmias)
  - Pupils greatly dilated (mydriasis)
  - Complete muscular relaxation
  - Loss of temperature regulation
- **Clinical**: Medical emergency requiring ventilatory/cardiovascular support
- **Modern practice**: Rare with monitoring (pulse oximetry, ETCO2, ECG)

## Anesthetic Agents Classification

### Intravenous Agents
- **Propofol**: Most common, white emulsion, rapid smooth induction
- **Etomidate**: Minimal hemodynamic effects, ideal for unstable patients
- **Thiopental**: Barbiturate, less used (longer recovery, hypotension)
- **Ketamine**: Dissociative, maintains airway reflexes, analgesic
- **Midazolam**: Benzodiazepine, mild sedation

### Volatile (Inhalational) Agents
- **Nitrous oxide (N2O)**: Gas, fast onset/offset, poor solo anesthetic
- **Isoflurane**: Moderate onset, stable, economical
- **Desflurane**: Rapid onset/offset, airway irritant
- **Sevoflurane**: Smooth onset, ideal for pediatrics`,
        mnemonics: [
          { text: "Guedel 1-4: Induction, Excitement, Surgical, Overdose", explanation: "Four stages of anesthesia progression" },
          { text: "Stage 2 = danger zone (laryngospasm, aspiration, arrhythmias)", explanation: "Most hazardous stage requiring vigilance" },
          { text: "Corneal reflex lost = Plane I, Eyes centered = Plane II", explanation: "Surgical plane reflex landmarks" },
          { text: "IV agents rapid (smooth), Inhalational gradual (safe)", explanation: "Induction method differences" },
          { text: "Propofol = P (Popular), Etomidate = E (Excellent hemodynamics)", explanation: "Agent selection mnemonics" },
          { text: "FIVE agents: Propofol, Etomidate, Thiopental, Ketamine, Midazolam", explanation: "Common IV induction agents" }
        ],
        keyPoints: [
          "Stage 2 (excitement) minimized by IV agents in modern practice",
          "Surgical anesthesia (Stage 3) subdivided by reflex loss progression",
          "Stage 4 (overdosage) = medical emergency with CNS/cardiac depression",
          "Inhalational agents slower but more gradual, better for smooth induction",
          "IV agents enable rapid, smooth induction, reducing Stage 2 duration",
          "Propofol most common IV induction in India (widely available, cost-effective)"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Stages and Planes of Anesthesia", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Induction of Anesthesia", edition: "6th" },
          { book: "Guyton & Hall", chapter: "Anesthesia and Pain Relief", edition: "12th" }
        ]
      },
      {
        layer: 2,
        slug: "stages-anesthesia-mechanism",
        title: "Stages of Anesthesia & Agents - Mechanism",
        estimatedMinutes: 30,
        summary: "GABA hypothesis, minimum alveolar concentration (MAC), pharmacokinetics of IV and volatile agents.",
        contentMd: `# Stages of Anesthesia & Agents - Mechanism

## GABA and Anesthetic Action

### GABA Hypothesis (Unified Mechanism)
- **Mechanism**: Most anesthetics enhance GABAergic inhibitory neurotransmission
- **GABA-A receptor**: Anesthetics increase chloride channel opening frequency/duration
- **Result**: Neuronal hyperpolarization → decreased excitability → CNS depression
- **Agent-specific**: Propofol, barbiturates, benzodiazepines, volatile agents all target GABA

### Ketamine Exception
- **Mechanism**: NMDA receptor antagonism (not GABA-mediated)
- **Result**: Dissociative anesthesia (consciousness without awareness)
- **Preserves**: Airway reflexes, spontaneous ventilation, analgesia

## Minimum Alveolar Concentration (MAC)

### Definition and Clinical Use
- **MAC**: Alveolar concentration at which 50% of patients show NO response to surgical incision
- **Clinical use**: Guides volatile agent dosing for maintenance anesthesia
- **Measurement**: % concentration in exhaled gas (varies by agent)

### MAC Values (in oxygen)
- **Nitrous oxide**: 104% (>100%, can't reach MAC alone; adjunct only)
- **Isoflurane**: 1.15% (economical, widely used)
- **Desflurane**: 6% (rapid emergence, expensive)
- **Sevoflurane**: 2% (smooth, pediatric favorite)

### MAC Interactions and Modifiers
- **Additivity**: Multiple agents' MACs add (e.g., N2O 0.5 MAC + iso 0.43 MAC = 0.93 MAC)
- **Hypothermia**: Decreases MAC 10% per 5°C drop (critical in Indian ORs with cool temperatures)
- **Increases MAC**: Hyperthermia, CNS stimulants (caffeine), acute tolerance
- **Decreases MAC**: Opioids, alcohol, sedatives, age >60, pregnancy (especially 3rd trimester), hypoxia, hypercarbia

### Depth of Anesthesia by MAC
| MAC Level | Clinical Effect |
|-----------|-----------------|
| 0.3 | Auditory evoked responses disappear |
| 0.5 | Loss of consciousness |
| 0.75 | Loss of protective airway reflexes |
| 1.0 | No response to surgical incision |
| 1.5+ | Profound CNS depression, overdosage risk |

## IV Agent Pharmacokinetics

### Propofol
- **Onset**: 30-45 seconds (rapid equilibration)
- **Distribution**: Lipophilic, rapid brain penetration
- **Metabolism**: Hepatic + extrahepatic (lungs, kidneys, tissues)
- **Recovery**: 5-10 minutes from bolus; longer with infusion (context-sensitive half-time)
- **Advantages**: Smooth induction, anti-emetic, reduces ICP, cerebral protection
- **Disadvantages**: Hypotension, pain on injection, hypertriglyceridemia with infusion
- **Clinical**: Induction agent of choice in India (widely available, economical)

### Etomidate
- **Onset**: 10-20 seconds (fastest IV agent)
- **Metabolism**: Rapid plasma esterase hydrolysis
- **Recovery**: 5-10 minutes (very rapid)
- **Advantages**: Minimal hemodynamic effects, minimal respiratory depression
- **Disadvantages**: Adrenal suppression (8-12 hours from single dose), no analgesia
- **Clinical**: Induction in hemodynamically unstable patients (sepsis, hemorrhage, shock)

### Ketamine
- **Onset**: 30 seconds IV
- **Mechanism**: NMDA antagonism (dissociative state)
- **Advantages**: Maintains airway reflexes, analgesic, minimal respiratory depression
- **Disadvantages**: Hallucinations/emergence reactions (especially adults), sympathomimetic effects
- **Clinical**: Pediatric induction, trauma/emergency (preserves airway + hemodynamics)

## Inhalational Agent Pharmacokinetics

### Solubility and Onset/Offset
- **Blood-gas partition coefficient** (solubility):
  - Nitrous oxide: 0.47 (very low = rapid onset/offset)
  - Desflurane: 0.42 (low = rapid emergence)
  - Sevoflurane: 0.69 (low-moderate)
  - Isoflurane: 1.4 (moderate)
- **Lower solubility = faster onset AND faster offset**
- **Recovery time**: Desflurane > Sevoflurane > Isoflurane for emergence

### Metabolism
- **Minimal metabolism**: N2O, desflurane, isoflurane (mostly exhalation)
- **Sevoflurane**: ~3% hepatic metabolism (slightly more)
- **No significant liver/kidney toxicity** at normal doses

### Maintenance Characteristics
- **Titratable**: Can adjust depth quickly by changing concentration
- **Predictable**: Minimal variability between patients
- **Stable**: Consistent anesthetic level with continued use`,
        mnemonics: [
          { text: "GABA = GABA-A receptor enhancement → chloride influx → hyperpolarization", explanation: "Universal anesthetic mechanism (except ketamine)" },
          { text: "MAC = 50% no-response at incision = clinical dosing target", explanation: "Definition and clinical use" },
          { text: "N2O MAC 104% = can't reach alone in 100% O2 (always adjunct)", explanation: "Unique property of nitrous oxide" },
          { text: "Etomidate = E for Excellent hemodynamics (but adrenal risk)", explanation: "Best for unstable patients" },
          { text: "Sevoflurane = S for Smooth pediatric induction", explanation: "Best for children" },
          { text: "Hypothermia decreases MAC: 10% per 5°C = use lower agent concentration", explanation: "Critical for Indian OR temperatures" }
        ],
        keyPoints: [
          "Most anesthetics potentiate GABA inhibitory neurotransmission",
          "Ketamine is exception (NMDA antagonist, dissociative, preserves airway)",
          "Propofol = most common induction (smooth, fast, anti-emetic)",
          "Etomidate = best for hemodynamic stability despite adrenal suppression risk",
          "Sevoflurane = best for smooth inhalational induction in children",
          "Volatile agent solubility inversely correlates with onset/offset speed"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Pharmacology of Anesthetic Agents", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Intravenous Anesthetics", edition: "6th" },
          { book: "Guyton & Hall", chapter: "Anesthetic Pharmacology", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "stages-anesthesia-clinical",
        title: "Stages of Anesthesia & Agents - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical selection of induction agents, patient-specific techniques, Indian context considerations, management of Stage 2.",
        contentMd: `# Stages of Anesthesia & Agents - Clinical

## Induction Agent Selection by Patient Status

### Healthy Adult
- **Agent**: Propofol 2-2.5 mg/kg IV
- **Advantages**: Smooth induction, rapid, anti-emetic, reduces ICP
- **Onset**: 30-45 seconds
- **Monitoring**: Expect mild-moderate hypotension (self-limited)
- **Recovery**: 5-10 minutes

### Elderly Patient (>65 years)
- **Agent**: Propofol 1-1.5 mg/kg IV (reduced dose)
- **Rationale**: Increased CNS sensitivity, reduced MAC (10-15% lower per decade >60)
- **Considerations**: More pronounced hypotension, bradycardia
- **Alternative**: Etomidate if cardiovascular concerns
- **Monitoring**: More aggressive fluid/vasopressor support needed

### Hemodynamically Unstable (Sepsis, Hemorrhage, Shock)
- **Agent**: Etomidate 0.2 mg/kg IV
- **Advantages**: Minimal hypotension, maintains HR/BP better than propofol
- **Monitoring**: Watch for myoclonic movements, brief apnea
- **Caution**: Single dose acceptable despite adrenal suppression; no repeated dosing

### Head Injury / Elevated Intracranial Pressure
- **Agent**: Propofol 1-2 mg/kg IV (cerebral protective)
- **Rationale**: Reduces ICP, maintains cerebral perfusion pressure
- **Avoid**: Volatile agents increase ICP (isoflurane minimal effect only)
- **Monitoring**: Aggressive ventilation control (ETCO2 32-35 mmHg)
- **Alternative**: Thiopental for additional cerebral protection

### Pediatric Patient
- **Inhalational induction**: Sevoflurane (smooth, non-irritating) over 5-10 minutes
- **IV induction**: Propofol 3 mg/kg (higher pediatric dose) or thiopental
- **Advantages**: Sevoflurane avoids emergence delirium, smooth airway
- **Consideration**: Inhalational takes longer but safer for anxious children
- **Avoid**: Desflurane (airway irritant, causes laryngospasm in children)

### Rapid Sequence Intubation (Full Stomach)
- **Agent**: Propofol 2-2.5 mg/kg IV + succinylcholine 1-1.5 mg/kg
- **Modified RSI**: Etomidate if hemodynamic concern + succinylcholine
- **Goal**: Loss of consciousness + paralysis within 30 seconds
- **Technique**: Cricoid pressure (Sellick maneuver) to occlude esophagus

## Stage 2 Minimization (Excitement Prevention)

### Modern Induction Techniques
1. **IV induction**: Propofol produces smooth transition, minimizes Stage 2
2. **Slow inhalational**: Gradual onset over minutes reduces excitement phase duration
3. **Avoid rapid inhalational**: Rapid desflurane/isoflurane = prolonged Stage 2 risk

### Managing Emergence Agitation
- **Cause**: Often with volatile agents (especially desflurane)
- **Prevention**: Opioids during surgery, smooth induction/offset
- **Treatment**: Reassurance, benzodiazepine (midazolam 1-2 mg IV)
- **Premedication**: Anxiolytics (midazolam 0.025-0.05 mg/kg) reduce emergence problems

## Volatile Agent Selection for Maintenance

### Isoflurane (Most Economical)
- **MAC**: 1.15%
- **Cost**: Cheapest volatile agent (first-line in resource-limited India)
- **Characteristics**: Moderate airway irritation, preserves airway reflexes
- **Use**: Standard agent for maintenance in most Indian settings

### Desflurane (Fastest Emergence)
- **MAC**: 6%
- **Cost**: Expensive (rarely used routinely in India)
- **Characteristics**: Rapid onset/offset, airway irritant
- **Use**: Outpatient surgery (faster recovery)
- **Technique**: Induce with sevoflurane, switch to desflurane after intubation

### Sevoflurane (Pediatric Standard)
- **MAC**: 2%
- **Characteristics**: Sweet-smelling, non-irritating, smooth induction
- **Use**: Pediatric induction (inhalational only), smooth maintenance
- **Disadvantage**: More expensive than isoflurane

### Nitrous Oxide (Always Used)
- **MAC**: 104% (can't reach MAC alone in 100% O2)
- **Use**: Adjunct with volatile agent (provides 0.5-0.75 MAC effect)
- **Advantages**: Reduces volatile agent by 30-50%, analgesic, inexpensive
- **Disadvantages**: Expands closed gas spaces, prolongs emergence slightly
- **Contraindications**: Bowel obstruction, pneumothorax, air embolism

## Indian Context Considerations

### Resource Availability
- **Most common induction**: Propofol + succinylcholine (available everywhere)
- **Backup induction**: Thiopental (still available, cost-effective)
- **Maintenance**: Isoflurane standard (cheaper than desflurane/sevoflurane)
- **Nitrous oxide**: Always added (cost-effective, reduces volatile requirements)

### Economic Factors
- **Volatile agents**: Significant cost difference; isoflurane routine unless specific indication
- **IV agents**: Propofol economical for induction + infusion maintenance
- **Temperature control**: Limited active warming; passive measures important
- **Hypothermia management**: Adjust volatile concentration downward (10% MAC reduction per 5°C)

### Common Challenges
- **Manual ventilation**: Common in smaller centers; propofol smoothness advantageous
- **Air quality**: Less sophisticated scavenging systems; prefer stable agents
- **Monitoring**: Basic monitoring (SpO2, ECG, NIBP); BIS less common`,
        mnemonics: [
          { text: "Healthy = Propofol 2-2.5, Elderly = Propofol 1-1.5, Unstable = Etomidate 0.2", explanation: "Induction dose selection rules" },
          { text: "Sevoflurane = smooth kids, Desflurane = fast emergence, Isoflurane = cheap", explanation: "Volatile agent selection rationale" },
          { text: "Nitrous oxide = always adjunct (0.5-0.75 MAC), reduces volatile by 30-50%", explanation: "Nitrous oxide utility in practice" },
          { text: "Stage 2 danger = SCARY (Spasm, Cough, Arrhythmia, Regurgitation, aspiraY)", explanation: "Dangers of excitement phase" },
          { text: "Cool OR (common in India) = MAC reduced → use lower agent concentration", explanation: "Temperature adjustment critical" },
          { text: "Propofol IV smooth, Sevoflurane inhalation smooth, Desflurane irritant", explanation: "Agent smoothness ranking" }
        ],
        keyPoints: [
          "Propofol 2-2.5 mg/kg standard; reduce in elderly to 1-1.5 mg/kg",
          "Etomidate best for hemodynamic instability despite adrenal suppression risk",
          "Sevoflurane smooth induction in children (inhalational only)",
          "Volatile agents titratable (can change depth quickly)",
          "Nitrous oxide ALWAYS added for MAC reduction and cost-benefit",
          "Hypothermia common in Indian ORs; account for 10% MAC reduction per 5°C"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Induction of Anesthesia", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Anesthetic Agent Selection", edition: "6th" }
        ]
      },
      {
        layer: 4,
        slug: "stages-anesthesia-exam-prep",
        title: "Stages of Anesthesia & Agents - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield facts, drug comparison tables, induction algorithms, contraindications, common exam patterns.",
        contentMd: `# Stages of Anesthesia & Agents - Exam Prep

## Quick Reference: IV Induction Agents Comparison
| Agent | Onset | Recovery | CVS Effect | Airway | Special Feature |
|-------|-------|----------|-----------|--------|-----------------|
| Propofol | 30-45s | 5-10min | ↓BP, ↓HR | Smooth | Anti-emetic, ICP↓ |
| Etomidate | 10-20s | 5-10min | Stable | Stable | Adrenal suppression |
| Thiopental | 10-20s | 10-20min | ↓↓BP | Smooth | Histamine release |
| Ketamine | 30s | 15-30min | ↑ or stable | Maintain | Dissociative, analgesia |
| Midazolam | 30-60s | 30-60min | Mild↓ | Mild↓ | Weak as solo agent |

## Quick Reference: Volatile Agents
| Agent | MAC | Onset | Offset | Cost | Best Use |
|-------|-----|-------|--------|------|----------|
| N2O | 104 | Fastest | Fastest | Cheap | Always adjunct |
| Desflurane | 6 | Fast | Fast | Expensive | Fast emergence |
| Isoflurane | 1.15 | Moderate | Moderate | Cheap | India standard |
| Sevoflurane | 2 | Smooth | Moderate | Expensive | Pediatric smooth |

## Contraindications to Agents

### Propofol Contraindicated In:
- Allergy to eggs (lipid emulsion base)
- Propofol infusion syndrome (prolonged infusion)
- Severe hemodynamic instability (relative)

### Etomidate Contraindicated In:
- Adrenal insufficiency history
- Status epilepticus (lowers seizure threshold)

### Desflurane Contraindicated In:
- Pediatric induction (airway irritant)
- Rapid concentration increases (laryngospasm risk)

### Nitrous Oxide Contraindicated In:
- Bowel obstruction/distension (gas expansion)
- Pneumothorax (expansion risk)
- Air embolism (bubble expansion)
- Open neural tube surgery (teratogenic risk)

## High-Yield Exam Facts

### Stage Recognition
- **Stage 1**: Induction → loss of consciousness (analgesia present)
- **Stage 2**: Excitement/delirium = MOST DANGEROUS (laryngospasm, aspiration)
- **Stage 3**: Surgical anesthesia with 3 planes (reflex landmarks)
- **Stage 4**: Overdosage = CNS/cardiac emergency

### Agent Selection Rules
- **Healthy**: Propofol (smooth, fast, anti-emetic)
- **Unstable**: Etomidate (excellent hemodynamics)
- **Elderly**: Reduced propofol (CNS sensitivity)
- **Peds gas**: Sevoflurane (smooth, non-irritating)
- **Trauma**: Ketamine (preserves airway, analgesic)

### Critical MAC Values
- N2O: 104% (>100% in 100% O2)
- Iso: 1.15% (economical)
- Desf: 6% (rapid)
- Sevo: 2% (smooth)

### Pharmacokinetic Facts
- **Lower solubility** = faster onset AND offset
- **Propofol**: Rapid, multiple metabolism sites (liver + others)
- **Etomidate**: Fastest IV onset, plasma esterase hydrolysis
- **Sevoflurane**: ~3% metabolized (mostly exhalation)
- **Hypothermia**: 10% MAC decrease per 5°C drop

## Induction Algorithm by Patient Type

| Patient Type | Agent | Dose | Key Point |
|--------------|-------|------|-----------|
| Healthy adult | Propofol | 2-2.5 mg/kg | Smooth, expect mild hypotension |
| Emergency/trauma | Etomidate | 0.2 mg/kg | Preserve hemodynamics |
| Elderly >65 | Propofol | 1-1.5 mg/kg | Reduced CNS clearance |
| Head injury | Propofol | 1-2 mg/kg | Cerebral protection, ICP↓ |
| Septic shock | Etomidate | 0.2 mg/kg | Minimal CV depression |
| Peds IV | Propofol | 3 mg/kg | Higher pediatric dose |
| Peds gas | Sevoflurane | Smooth induction | 5-10 minute gradual induction |
| Full stomach RSI | Propofol 2.5 + Sux 1.5 | mg/kg | Rapid airway control |

## Common Exam Question Patterns

**Q: Which agent for hemodynamically unstable?**
A: Etomidate (minimal CV depression)

**Q: Which agent causes adrenal suppression?**
A: Etomidate (8-12 hours from single dose)

**Q: Which stage has highest aspiration risk?**
A: Stage 2 (excitement/delirium)

**Q: Fastest IV induction onset?**
A: Etomidate (10-20 seconds)

**Q: Best pediatric smooth induction?**
A: Sevoflurane (inhalational) or Propofol (IV)

**Q: Which MAC >100%?**
A: Nitrous oxide (104%)

**Q: Volatile agent with lowest solubility?**
A: Nitrous oxide (0.47)

**Q: Hypothermia effect on MAC?**
A: Decreases MAC 10% per 5°C (use lower concentration)`,
        mnemonics: [
          { text: "PET = Propofol, Etomidate, Thiopental (IV agents trio)", explanation: "Common exam induction agents" },
          { text: "SEVO = S for Smooth, E for Emergence, V for Valid peds, O for Onset", explanation: "Sevoflurane properties" },
          { text: "Stage 2 = SCARY = Spasm, Cough, Arrhythmia, Regurgitation, aspiraY", explanation: "Dangers of excitement phase" },
          { text: "MAC 1.15 (iso), 6 (desf), 2 (sevo), 104 (N2O)", explanation: "MAC values to memorize" },
          { text: "Etomidate = E for Excellent hemodynamics (but adrenal risk)", explanation: "Best for unstable patients" },
          { text: "Hypothermia = COLD decreases MAC = use COLD concentration (lower)", explanation: "Temperature effect mnemonic" }
        ],
        keyPoints: [
          "IV agents: Propofol > Etomidate > Thiopental in modern use",
          "Stage 2 (excitement) = most dangerous, minimized with IV induction",
          "MAC understanding critical for volatile agent dosing",
          "Hypothermia patients: Use lower volatile concentration",
          "Rapid inhalational induction: Use sevoflurane (not desflurane)",
          "Induction time varies: IV agents 10-45s, inhalational 5-10min"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Pharmacology of Anesthetics", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Anesthetic Agents Summary", edition: "6th" }
        ]
      },
      {
        layer: 5,
        slug: "stages-anesthesia-active-recall",
        title: "Stages of Anesthesia & Agents - Active Recall",
        estimatedMinutes: 20,
        summary: "10 clinical scenarios testing stage recognition, agent selection, adverse effect management, and Stage 2 complications.",
        contentMd: `# Stages of Anesthesia & Agents - Active Recall

## Q1: Stage 2 Recognition and Rapid Sequence Intubation

**Scenario**: 45-year-old with full stomach (peptic ulcer perforation) receives propofol 2.5 mg/kg followed by succinylcholine 1.5 mg/kg. At 25 seconds post-propofol, patient shows brief purposeful arm movement before paralysis occurs. What stage is this and why important?

**Answer**: **Stage 2 (Excitement)** - Brief appearance during IV induction transition. **Why important**: (1) During this window, protective reflexes are disorganized → aspiration risk of gastric contents, (2) Succinylcholine correctly given within 30 seconds to secure airway before danger period, (3) Cricoid pressure (Sellick maneuver) applied to occlude esophagus = essential in full stomach. **Key learning**: Propofol IV induction minimizes Stage 2 duration BUT Stage 2 still briefly present; RSI technique protects against aspiration.

## Q2: Propofol Overdose in Elderly

**Scenario**: 82-year-old hypertensive woman receiving propofol 2.5 mg/kg IV. Within 30 seconds: BP 75/40 mmHg (baseline 160/95), HR 38, respiration shallow. Why exaggerated response?

**Answer**: **Propofol hypersensitivity in elderly**. **Mechanisms**: (1) Reduced clearance (hepatic/renal decline), (2) Elderly have 15% lower MAC requirement (increased CNS sensitivity), (3) Baseline antihypertensive medications blunt compensatory BP response, (4) Dose 2.5 mg/kg too high. **Prevention**: (1) Reduce dose to 1-1.5 mg/kg, (2) Slower IV push, (3) Preload with 500 mL IV fluid, (4) Consider etomidate if extremely unstable. **Management**: Fluid bolus, vasopressor (phenylephrine), leg elevation. **Learning**: Elderly require pharmacokinetic dose adjustment.

## Q3: Etomidate Adrenal Suppression in Septic Shock

**Scenario**: 55-year-old septic (BP 82/50 despite fluids/pressors) receives etomidate 0.2 mg/kg. 24 hours later, BP remains low; cortisol 6 mcg/dL (normal >20 at stress). Did etomidate cause this?

**Answer**: **Yes, etomidate-induced adrenal suppression confirmed**. **Mechanism**: Etomidate inhibits 11β-hydroxylase → cortisol synthesis blocked for 8-12 hours (effects persist 24h). **Why critical in sepsis**: Sepsis requires cortisol surge for vascular tone; suppression worsens hypotension. **Management**: (1) Hydrocortisone 50 mg IV q6h for 2-3 days, (2) Vasopressors intensified, (3) Recheck cortisol in 24h. **Clinical decision**: Single dose etomidate acceptable in emergency (benefit outweighs brief adrenal effect); NOT for repeated dosing.

## Q4: Ketamine Dissociation in Pediatric Trauma

**Scenario**: 6-year-old with femur fracture receives ketamine 1 mg/kg IV. After intubation, eyes open, patient appears awake but unresponsive to pain. Parent asks: "Is he conscious?" Explain dissociation.

**Answer**: **Dissociative anesthesia** - Disconnect between sensory input and perception. Patient **appears awake** (eyes open, muscle tone present) but **deeply dissociated** (amnestic, unaware, no pain sensation). **Key points**: (1) Protective airway reflexes MAINTAINED (unlike propofol), (2) Child won't remember procedure (amnesia), (3) Not truly conscious (deeply dissociated), (4) Cardiovascular stable (sympathomimetic), (5) Ideal for emergency trauma. **Parent reassurance**: "He's deeply asleep and won't remember or feel anything. His breathing is protected and we have full control." (6) **Post-op**: May have hallucinations (less in children <12). (7) **Prevention**: Quiet recovery, premedication with midazolam post-op.

## Q5: MAC Reduction in Hypothermia

**Scenario**: Hypothermic patient (32°C core) on isoflurane 1.5% (normal MAC 1.15%), HR 32. Why overdosed despite "normal" concentration?

**Answer**: **Hypothermia decreases MAC by 10% per 5°C drop**. At 32°C (6°C below normal 38°C): MAC reduced ~12% → isoflurane MAC becomes 1.15 × 0.88 = 1.01%. **Patient receiving 1.5%**: Actually receiving 1.5/1.01 = 1.49× MAC (severely overdosed!). **Consequences**: (1) Severe myocardial depression (bradycardia), (2) Profound hypotension, (3) Prolonged emergence, (4) Arrhythmia risk. **Management**: (1) Reduce isoflurane to 0.75%, (2) Passive + active rewarming, (3) EKG monitoring, (4) Caution with rapid rewarming (afterdrop). **Critical for India**: Cool OR temperatures common; must adjust volatile concentration downward.

## Q6: Sevoflurane vs Desflurane Induction in Child

**Scenario**: Operating room has both sevoflurane and desflurane. 4-year-old scheduled for tonsillectomy. Which agent and why?

**Answer**: **Sevoflurane** is correct. **Rationale**: (1) Non-irritating airways (smooth induction), (2) **Desflurane = pungent, causes airway irritation → laryngospasm/breath-holding in children**, (3) Sevoflurane allows gentle induction over 5-10 minutes without emergence problems, (4) Cost-effective. **Technique**: Sevoflurane increased gradually to 8% in O2/N2O mixture. **Post-op**: Smooth emergence without delirium. **If desflurane only**: Use IV propofol instead (faster, avoids airway irritation).

## Q7: Nitrous Oxide Expansion in Bowel Obstruction

**Scenario**: 35-year-old with acute small bowel obstruction receives GA with nitrous oxide. Intraoperatively, surgeon notes massively dilated loops. Why contraindicated?

**Answer**: **N2O expands closed gas spaces** (including bowel). **Mechanism**: N2O 35× more soluble in blood than nitrogen → diffuses into bowel lumen faster than nitrogen diffuses out → progressive distension. **At 75% N2O**: Bowel volume increases 3-4×. **Consequences**: (1) Tension physiology (increased pressure), (2) Impaired surgical exposure, (3) Risk of rupture/perforation, (4) Anastomotic leak risk, (5) Bacterial translocation. **Management**: (1) **AVOID N2O entirely**, (2) Use O2 + volatile agent ± opioids, (3) Consider IV maintenance instead. **Contraindications**: Bowel obstruction, pneumothorax, air embolism, open spinal surgery.

## Q8: Thiopental Histamine Release vs Propofol

**Scenario**: Anesthesiologist preparing to induce 50-year-old asthmatic. Has choice between thiopental and propofol. Which safer in asthma and why?

**Answer**: **Propofol** is safer. **Thiopental causes histamine release** (especially rapid IV) → bronchospasm risk in asthmatics. **Propofol advantages**: (1) No histamine release, (2) Mild bronchodilation (actually protective), (3) Anti-emetic. **Contraindication**: Thiopental avoided in asthmatics, allergic patients, or those on MAOIs. **Clinical**: Propofol preferred induction in India anyway (wider availability, economical).

## Q9: Rapid vs Slow Inhalational Induction Effects

**Scenario**: Pediatrician wants inhalational induction in anxious 5-year-old. Describes rapid concentration increase of desflurane. Why problematic?

**Answer**: **Rapid concentration increase = prolonged Stage 2**. **Problems**: (1) Desflurane pungent → coughing, breath-holding, laryngospasm, (2) Rapid increase worsens airway irritation, (3) Excitement phase prolonged 5-10 minutes, (4) Emergence delirium risk. **Correct technique**: (1) Use **sevoflurane (not desflurane)**, (2) Increase concentration **gradually** over 5-10 minutes, (3) Gentle handling, (4) Suction ready. **If laryngospasm occurs**: 100% O2, positive pressure via mask, may need succinylcholine.

## Q10: MAC Additivity in Volatile Agent Combinations

**Scenario**: Anesthesiologist uses 50% N2O + 0.5% isoflurane. Patient moves during incision. Is patient adequately anesthetized?

**Answer**: **No, inadequate MAC**. **Calculation**: N2O 50% provides 0.5 × 104% MAC = 0.52 MAC; Isoflurane 0.5% = (0.5/1.15) × 100 = 0.43 MAC. **Total**: 0.52 + 0.43 = 0.95 MAC (approaching but not reaching 1.0 MAC). **Management**: (1) Increase volatile concentration to 0.65% isoflurane = (0.65/1.15) = 0.56 MAC, giving total 0.52 + 0.56 = 1.08 MAC adequate, OR (2) Increase N2O to 60-70%, OR (3) Add opioids (reduce MAC by 20-30%). **Key learning**: MAC values add for multiple agents; must account for all contributions.`,
        mnemonics: [
          { text: "Stage 2 = windows of danger (laryngospasm, aspiration, arrhythmia)", explanation: "Why RSI technique essential" },
          { text: "Elderly = lower MAC, need lower propofol dose (1-1.5 not 2-2.5)", explanation: "Age adjustment critical" },
          { text: "Etomidate emergency choice BUT adrenal risk = single dose only", explanation: "Best hemodynamic but with caveat" },
          { text: "Ketamine = keeps airway intact (NMDA, not GABA)", explanation: "Unique advantage for trauma" },
          { text: "Cool patient = COLD concentration (lower volatile%, lower MAC)", explanation: "Hypothermia adjustment" },
          { text: "Sevo = Smooth kids, Desf = Danger kids (irritant), Iso = India cheap", explanation: "Volatile selection" }
        ],
        keyPoints: [
          "Stage 2 (excitement) brief but dangerous; RSI minimizes aspiration risk",
          "Elderly require 40-50% dose reduction of propofol",
          "Etomidate best hemodynamic stability but adrenal suppression risk",
          "Ketamine unique for preserving airway reflexes + analgesia",
          "Hypothermia causes MAC reduction; must lower agent concentration",
          "MAC values additive for multiple agents; calculate total MAC",
          "Sevoflurane smooth induction in children; desflurane = contraindication",
          "Nitrous oxide absolutely contraindicated in bowel obstruction"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Rapid Sequence Induction", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Clinical Management of Anesthesia", edition: "6th" }
        ]
      }
    ]
  }
];
