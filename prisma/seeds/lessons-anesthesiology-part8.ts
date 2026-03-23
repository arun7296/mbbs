import type { TopicLessons } from "./content-loader";

export const anesthesiologyLessonsPart8: TopicLessons[] = [
  {
    topicCode: "AS-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "muscle-relaxants-reversal-foundation",
        title: "Muscle Relaxants & Reversal - Foundation",
        estimatedMinutes: 25,
        summary: "Neuromuscular blocking agents (NMBAs) mechanism, classification into depolarizing and non-depolarizing agents, pharmacology of succinylcholine and non-depolarizing agents.",
        contentMd: `# Muscle Relaxants & Reversal - Foundation

## Overview of Neuromuscular Blocking Agents

### Mechanism of Action
- **Site**: Neuromuscular junction (motor end plate)
- **Target**: Nicotinic acetylcholine receptors on skeletal muscle
- **Effect**: Prevent acetylcholine (ACh) binding → flaccid paralysis
- **Clinical use**: Facilitate intubation, provide surgical relaxation, reduce patient movement

### Classification

#### Depolarizing Agents (Succinylcholine)
- **Mechanism**: Mimic ACh, cause persistent depolarization of muscle membrane
- **Effect**: Initial visible fasciculations, then paralysis
- **Duration**: Short (5-10 minutes, pseudocholinesterase metabolism)

#### Non-Depolarizing Agents
- **Mechanism**: Competitive antagonism of ACh receptors
- **Effect**: Flaccid paralysis without fasciculations
- **Classes**: Benzylisoquinolinium (atracurium, cisatracurium) and Aminosteroid (rocuronium, vecuronium, pancuronium)
- **Duration**: 30-90 minutes depending on agent and elimination

## Succinylcholine (Depolarizing Agent)
- **Onset**: 30-40 seconds IV (fastest neuromuscular blocker)
- **Duration**: 5-10 minutes (pseudocholinesterase metabolism)
- **Clinical use**: Rapid sequence intubation, short procedures
- **Complications**: Fasciculations, hyperkalemia (especially burn/paralyzed patients), malignant hyperthermia trigger, myalgia

## Non-Depolarizing Agents
- **Onset**: 60-120 seconds IV
- **Duration**: 30-90 minutes by agent
- **Advantages**: No fasciculations, no hyperkalemia risk, reversible
- **Most common**: Rocuronium (hepatic elimination, reliable)`,
        mnemonics: [
          { text: "Depolarizing = Succinylcholine = Fasciculations", explanation: "Visible muscle movement distinguishes depolarizers" },
          { text: "Succinylcholine = FAST (30-40s) + SHORT (5-10min) = RSI ideal", explanation: "Best for rapid intubation" },
          { text: "Non-depolarizing = Competitive blockade = NO fasciculations", explanation: "Blocks ACh access smoothly" },
          { text: "Succinylcholine hyperkalemia risk: Burns 15-year window, paralyzed, crush injury", explanation: "Absolute contraindications" },
          { text: "TOF = Train-of-Four = 2 Hz stimulation = assess blockade depth", explanation: "Standard monitoring method" },
          { text: "Rocuronium > Vecuronium > Cisatracurium by frequency of use", explanation: "Agent popularity ranking" }
        ],
        keyPoints: [
          "Depolarizing agents produce visible fasciculations; non-depolarizing do not",
          "Succinylcholine: fastest onset but shortest duration, many complications",
          "Non-depolarizing: slower onset but longer duration, safer profile",
          "Succinylcholine contraindicated in malignant hyperthermia history",
          "Hyperkalemia greatest risk in burns, paralyzed, crush injury patients",
          "TOF monitoring essential for blockade assessment",
          "Non-depolarizing agents reversible by anticholinesterase or sugammadex"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Neuromuscular Blocking Agents", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Muscle Relaxants", edition: "6th" }
        ]
      },
      {
        layer: 2,
        slug: "muscle-relaxants-reversal-mechanism",
        title: "Muscle Relaxants & Reversal - Mechanism",
        estimatedMinutes: 30,
        summary: "Pharmacokinetics of blocking agents, reversal mechanisms by anticholinesterase and sugammadex, neuromuscular monitoring interpretation.",
        contentMd: `# Muscle Relaxants & Reversal - Mechanism

## Rocuronium Pharmacokinetics (Most Common)
- **Onset**: 60-90 seconds
- **Duration**: 30-40 minutes
- **Metabolism**: Hepatic (70%), organ-independent (30%)
- **Organ failure**: Prolonged duration (accumulation risk)

## Vecuronium & Cisatracurium
- **Vecuronium**: Hepatic (50%) + renal (30%) elimination
- **Cisatracurium**: Hofmann degradation (temperature/pH-dependent, organ-independent)
- **Cisatracurium advantage**: No accumulation in organ failure

## Anticholinesterase Reversal (Neostigmine)
- **Mechanism**: Inhibits acetylcholinesterase → ACh accumulates → competes with blocker
- **Effectiveness**: Partial (30-50% reversal only)
- **Dose**: 2.5-5 mg IV
- **Onset**: 5-10 minutes
- **Requirement**: MUST precede with anticholinergic (glycopyrrolate 0.2 mg) to prevent cholinergic crisis

## Sugammadex Reversal (Encapsulation)
- **Mechanism**: Encapsulates steroid-based agents (rocuronium, vecuronium) via β-cyclodextrin
- **Effectiveness**: Complete (90-95%) regardless of blockade depth
- **Onset**: 2-3 minutes (faster than neostigmine)
- **Limitation**: Steroid agents only (NOT atracurium, cisatracurium)
- **Doses**: 2 mg/kg shallow, 3 mg/kg moderate, 4 mg/kg deep blockade
- **Advantage**: No anticholinergic needed, complete recovery any depth

## Train-of-Four Monitoring
- **Interpretation**: 4/4 (no blockade), 1-3/4 (partial), 0/4 (complete blockade)
- **Fade**: Progressive weakening indicates partial blockade, reversible
- **Clinical targets**: 0-1/4 for intubation, 1-2/4 during surgery, 4/4 for discharge
- **Limitations of tactile**: Subjective, unreliable; objective TOF preferred`,
        mnemonics: [
          { text: "Rocuronium = Hepatic 70%, organ-independent 30% = organ-dependent drug", explanation: "Accumulation risk in failure" },
          { text: "Cisatracurium = COLD/Chemistry Hofmann = organ-INdependent perfect for failure", explanation: "Unique metabolic advantage" },
          { text: "Neostigmine = Partial (30-50%) + anticholinergic MUST precede (glycopyrrolate 0.2)", explanation: "Traditional reversal limitations" },
          { text: "Sugammadex = Complete (90-95%) steroid only = 2/3/4 mg/kg shallow/mod/deep", explanation: "Modern agent advantages" },
          { text: "TOF 4/4 = safe discharge, 0/4 = deep blockade, fade = reversible blockade", explanation: "Monitoring interpretation" },
          { text: "Cholinergic crisis: neostigmine WITHOUT anticholinergic = bronchospasm/bradycardia", explanation: "Sequence critical error" }
        ],
        keyPoints: [
          "Rocuronium most common; hepatic metabolism causes accumulation risk",
          "Cisatracurium organ-independent; ideal in hepatic/renal failure",
          "Anticholinesterase reversal partial; requires anticholinergic premedication",
          "Sugammadex complete reversal but steroid agents only",
          "TOF monitoring objective; fade indicates reversible blockade",
          "Cholinergic crisis if neostigmine given before anticholinergic",
          "Post-operative residual curarization (PORC) risk with neostigmine reversal"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Pharmacokinetics of Muscle Relaxants", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Neuromuscular Blockade Reversal", edition: "6th" }
        ]
      },
      {
        layer: 3,
        slug: "muscle-relaxants-reversal-clinical",
        title: "Muscle Relaxants & Reversal - Clinical",
        estimatedMinutes: 35,
        summary: "Clinical agent selection, dosing strategies, reversal protocols, special situations, Indian practice context.",
        contentMd: `# Muscle Relaxants & Reversal - Clinical

## Intubation: Agent Selection

### Rapid Sequence Intubation (Full Stomach)
- **Agent**: Succinylcholine 1-1.5 mg/kg IV
- **Rationale**: Fastest onset (30-40 seconds) for aspiration protection
- **Checks**: Verify no MH history, no hyperkalemia risk (burns, paralyzed, crush)

### Alternative RSI (Succinylcholine Contraindicated)
- **Agent**: Rocuronium 1.2 mg/kg IV
- **Onset**: 60-90 seconds (acceptable alternative)
- **Advantages**: No hyperkalemia, no MH, reversible

## Maintenance Dosing Strategies

### Single Bolus (Short Cases <1 hour)
- **Rocuronium** 1.2 mg/kg (lasts 30-40 min)
- **Simple**: No redosing needed

### Redosing by TOF (Longer Cases)
- **Trigger**: Redose when TOF returns to 1-2/4
- **Agent**: Rocuronium 0.5-0.75 mg/kg (50% intubating dose)
- **Monitoring**: Maintain 1-2/4 throughout surgery
- **Advantage**: Better surgical conditions, faster recovery

### Continuous Infusion (Very Long Cases)
- **Rocuronium**: 0.3-0.6 mg/kg/hr (accumulation risk)
- **Better**: Cisatracurium (organ-independent, no accumulation)

## Reversal Protocols

### Anticholinesterase (Neostigmine)
**Sequence critical**:
1. Glycopyrrolate 0.2 mg IV (anticholinergic FIRST)
2. Wait 2-3 minutes
3. Neostigmine 2.5-5 mg IV
- **Effectiveness**: Partial (30-50%)
- **Risk**: Post-operative residual curarization

### Sugammadex
- **Prerequisites**: Rocuronium or vecuronium used
- **Dosing**: 2 mg/kg (shallow), 3 mg/kg (moderate), 4 mg/kg (deep)
- **Result**: Complete recovery in 2-3 minutes
- **No anticholinergic needed**
- **Limitation**: Expensive, limited availability in India

## Special Situations

### Succinylcholine Pseudocholinesterase Deficiency
- **Result**: Prolonged apnea (hours, not minutes)
- **Management**: Mechanical ventilation + fresh frozen plasma
- **Family**: Genetic testing needed

### Malignant Hyperthermia History
- **Avoid**: Succinylcholine + volatile anesthetics
- **Use**: Propofol + non-depolarizing agent (TIVA)

### Organ Failure (Hepatic/Renal)
- **Rocuronium**: Accumulation risk; single dose only
- **Preferred**: Cisatracurium (organ-independent)

### Obesity
- **Dosing**: Based on ideal body weight (NOT total)
- **Rationale**: Distribution to lean body mass

## Indian Clinical Context
- **Standard agents**: Rocuronium (common), succinylcholine (RSI), neostigmine (reversal)
- **Sugammadex**: Expensive, limited availability
- **Monitoring**: Basic TOF monitors, tactile assessment common
- **Resource**: TOF guidance better than clinical assessment`,
        mnemonics: [
          { text: "Succinylcholine RSI = 1-1.5 mg/kg IV = 30-40s onset", explanation: "First RSI choice" },
          { text: "Rocuronium alternative = 1.2 mg/kg = 60-90s acceptable", explanation: "When succinylcholine contraindicated" },
          { text: "Redosing = when TOF 1-2/4 = rocuronium 0.5-0.75 mg/kg = maintain good relaxation", explanation: "TOF-guided dosing" },
          { text: "Neostigmine = Glycopyrrolate 0.2 FIRST (2-3 min) THEN Neostigmine = sequence critical", explanation: "Anticholinergic BEFORE anticholinesterase" },
          { text: "Sugammadex = Rocuronium/Vecuronium only = 2/3/4 mg/kg = no anticholinergic", explanation: "Complete reversal advantages" },
          { text: "Organ failure = avoid rocuronium redosing = use cisatracurium or single rocuronium dose", explanation: "Special dosing strategy" }
        ],
        keyPoints: [
          "Succinylcholine fastest for RSI but assess contraindications",
          "Rocuronium acceptable alternative when succinylcholine contraindicated",
          "TOF-guided redosing better than single bolus for long cases",
          "Anticholinesterase reversal partial; needs anticholinergic premedication",
          "Sugammadex complete reversal but expensive, limited India availability",
          "Cisatracurium preferred in organ failure (organ-independent)",
          "Pseudocholinesterase deficiency = prolonged apnea; FFP + mechanical ventilation"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Muscle Relaxant Dosing and Reversal", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Practical Neuromuscular Management", edition: "6th" }
        ]
      },
      {
        layer: 4,
        slug: "muscle-relaxants-reversal-exam-prep",
        title: "Muscle Relaxants & Reversal - Exam Prep",
        estimatedMinutes: 25,
        summary: "High-yield comparison tables, dosing protocols, complications, reversal decisions, exam question patterns.",
        contentMd: `# Muscle Relaxants & Reversal - Exam Prep

## Quick Reference: Muscle Relaxant Comparison

| Agent | Type | Onset | Duration | Key Feature |
|-------|------|-------|----------|-------------|
| Succinylcholine | Depolarizing | 30-40s | 5-10 min | Fastest, fasciculations |
| Rocuronium | Non-depol | 60-90s | 30-40 min | Most common, organ-dependent |
| Vecuronium | Non-depol | 90-120s | 30-45 min | Less common, organ-dependent |
| Cisatracurium | Non-depol | 90-120s | 40-60 min | Organ-independent (Hofmann) |
| Pancuronium | Non-depol | 60-90s | 60-90 min | Vagolytic, rarely used |

## Succinylcholine Complications
- **Fasciculations**: ICP/IOP ↑
- **Hyperkalemia**: Especially burn, paralyzed, crush (15-year risk)
- **Malignant hyperthermia**: Trigger agent
- **Myalgia**: 30-80% incidence (prevent with priming dose)
- **Bradycardia**: Especially children

## Reversal Agents Comparison

| Agent | Onset | Duration | Effectiveness | Special |
|-------|-------|----------|---------------|---------|
| Neostigmine | 5-10 min | 30-60 min | Partial (30-50%) | Anticholinergic required |
| Sugammadex | 2-3 min | Sustained | Complete (90-95%) | Steroid agents only |

## High-Yield Facts
- **Fastest onset**: Succinylcholine (30-40s)
- **Most common**: Rocuronium (hepatic metabolism)
- **Organ-independent**: Cisatracurium (Hofmann degradation)
- **Best RSI**: Succinylcholine (if no contraindications)
- **Alternative RSI**: Rocuronium (60-90s acceptable)
- **Myalgia prevention**: Priming dose (0.01 mg/kg rocuronium)
- **Neostigmine sequence**: Glycopyrrolate FIRST, then neostigmine
- **Sugammadex**: Works ANY blockade depth but rocuronium/vecuronium only
- **PORC risk**: Neostigmine reversal (partial); sugammadex eliminates risk
- **Cisatracurium**: First choice organ failure

## Common Exam Questions

**Q: Fastest onset agent?**
A: Succinylcholine (30-40 seconds)

**Q: Most common non-depolarizing?**
A: Rocuronium

**Q: Organ-independent agent?**
A: Cisatracurium (Hofmann degradation)

**Q: Myalgia prevention?**
A: Priming dose 0.01 mg/kg rocuronium

**Q: Neostigmine without glycopyrrolate → ?**
A: Cholinergic crisis (bronchospasm, bradycardia, salivation)

**Q: Sugammadex works for atracurium?**
A: No, only steroid agents (rocuronium, vecuronium)

**Q: TOF 4/4 indicates?**
A: Full recovery, safe for discharge

**Q: Succinylcholine contraindication?**
A: Malignant hyperthermia history, burn/paralyzed/crush (hyperkalemia)

**Q: Cisatracurium advantage?**
A: Organ-independent; safe in hepatic/renal failure

**Q: PORC cause?**
A: Partial neostigmine reversal (30-50%)`,
        mnemonics: [
          { text: "SUCCh = Succinylcholine = Sucker depolarizer + fasciculations", explanation: "Depolarizing mechanism" },
          { text: "ROCK = Rocuronium = Routine most common agent", explanation: "Standard non-depolarizing" },
          { text: "CIS = Cisatracurium = Cold/Chemistry Hofmann = organ INdependent", explanation: "Unique advantage" },
          { text: "TOF = Train-of-Four = 4 pulses = assess blockade progression", explanation: "Monitoring standard" },
          { text: "NEO = Neostigmine = Needs anticholinergic first THEN neo, partial reversal", explanation: "Sequence and limitation" },
          { text: "SUGAM = Sugammadex = Steroid only = complete (no anticholinergic)", explanation: "Specificity and advantage" }
        ],
        keyPoints: [
          "Succinylcholine: fastest but complications (hyperkalemia, MH, myalgia)",
          "Rocuronium: most common, hepatic metabolism, accumulation in organ failure",
          "Cisatracurium: organ-independent, best for hepatic/renal failure",
          "Neostigmine: partial reversal (30-50%); anticholinergic MUST precede",
          "Sugammadex: complete reversal (90-95%) steroid agents only",
          "Myalgia prevention: 0.01 mg/kg rocuronium priming dose",
          "PORC: post-operative residual curarization risk with neostigmine",
          "TOF monitoring: guide redosing and discharge decisions"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Muscle Relaxant Complications", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Neuromuscular Management", edition: "6th" }
        ]
      },
      {
        layer: 5,
        slug: "muscle-relaxants-reversal-active-recall",
        title: "Muscle Relaxants & Reversal - Active Recall",
        estimatedMinutes: 20,
        summary: "10 clinical scenarios testing agent selection, complications, reversal strategies, monitoring interpretation.",
        contentMd: `# Muscle Relaxants & Reversal - Active Recall

## Q1: Succinylcholine in Burns

**Scenario**: 28-year-old with 20% body burn 2 weeks ago. Needs intubation for wound debridement. Anesthesiologist considers succinylcholine. Is this safe?

**Answer**: **NO. Absolutely contraindicated**. Burn patients release potassium from damaged muscle cells. Succinylcholine triggers massive additional K+ release → life-threatening hyperkalemia → cardiac arrhythmias, arrest. Risk window = **15 years post-burn**. **Use instead**: Rocuronium 1.2 mg/kg IV (60-90s onset acceptable). **No hyperkalemia risk**, no MH risk, reversible with sugammadex.

## Q2: Succinylcholine Myalgia

**Scenario**: 22-year-old healthy athletic male receives succinylcholine for RSI. Post-op severe muscle pain. How prevent?

**Answer**: **Priming with small rocuronium dose**. Give rocuronium 0.01 mg/kg (0.7 mg for 70 kg) 5 minutes BEFORE succinylcholine. Inhibits 70% fasciculations → myalgia risk reduced from 30-80% to <10%. **Mechanism**: Small blockade prevents wild fasciculations. **Note**: Intubation onset slightly delayed but acceptable.

## Q3: Rocuronium Accumulation in Organ Failure

**Scenario**: 65-year-old cirrhotic (Child-Pugh C) + renal failure (Cr 3.5). Receives rocuronium 1.2 mg/kg, then 0.5 mg/kg redoses q45 min × 4 doses. At end, TOF 0/4. Why prolonged blockade?

**Answer**: **Rocuronium organ accumulation**. Hepatic 70% (failed in cirrhosis) + renal 30% (failed) = severely impaired metabolism. Repeated dosing → accumulation, prolonged duration (hours instead of 40 min). **Management**: (1) Sugammadex 4 mg/kg for complete reversal OR (2) Mechanical ventilation until spontaneous recovery. **Prevention**: Use cisatracurium (organ-independent) for organ failure instead.

## Q4: Neostigmine Cholinergic Crisis

**Scenario**: Anesthesiologist gives neostigmine 5 mg for reversal, but forgets glycopyrrolate first. Within 1 minute: bronchospasm, salivation, HR 35. What happened?

**Answer**: **Cholinergic crisis** (unopposed muscarinic effects). Neostigmine inhibits acetylcholinesterase → ACh accumulates. No anticholinergic to block muscarinic effects → bronchospasm, salivation, bradycardia. **Correct sequence**: (1) **Glycopyrrolate 0.2 mg FIRST**, (2) Wait 2-3 min, (3) Neostigmine 5 mg. **Management**: Atropine 0.5 mg IV for cholinergic reversal.

## Q5: Sugammadex for Deep Blockade

**Scenario**: Patient has TOF 0/4 with post-tetanic potentiation (very deep blockade). Can sugammadex reverse this?

**Answer**: **YES, completely**. Sugammadex main advantage = works at ANY blockade depth. **Dosing**: 4 mg/kg for deep blockade. **Onset**: 2-3 minutes complete recovery (TOF 4/4). **Contrast to neostigmine**: Neostigmine FAILS at deep blockade (cannot work if no TOF present).

## Q6: Pseudocholinesterase Deficiency

**Scenario**: Patient receives succinylcholine 1.5 mg/kg. At 20 minutes, NO spontaneous breathing or movement (should wear off by 5-10 min). Diagnosis?

**Answer**: **Pseudocholinesterase deficiency** (rare genetic). Patient lacks plasma esterase enzyme → succinylcholine persists hours. **Management**: (1) Continue mechanical ventilation, (2) Fresh frozen plasma 2-4 units (contains normal enzyme), (3) Supportive care. (4) **Genetic counseling for family**. Duration: may need 4-12 hours ventilation. Incidence: ~1:2500.

## Q7: TOF-Guided Redosing

**Scenario**: 4-hour surgery on rocuronium. At 90 minutes, surgeon complains inadequate relaxation. TOF shows 4/4 (complete recovery). Why inadequate if TOF normal?

**Answer**: **Blockade worn off; patient needs redose**. **Correct approach**: Maintain TOF **1-2/4** throughout surgery (adequate relaxation + faster recovery), not waiting for 4/4. **Management**: (1) Redose rocuronium 0.5 mg/kg, (2) Recheck TOF q 10-15 min, (3) Redose when TOF returns to 1-2/4. **Strategy**: Intermittent dosing by TOF much better than single bolus for long cases.

## Q8: Malignant Hyperthermia

**Scenario**: Family history MH. Scheduled for surgery. Plan: propofol 2 mg/kg + rocuronium 1.2 mg/kg + sevoflurane 2% + N2O. Safe?

**Answer**: **NOT SAFE - sevoflurane trigger agent**. Volatile anesthetics trigger MH in susceptible patients. **Correct plan**: (1) Propofol IV (safe), (2) Rocuronium OK (non-depolarizing), (3) **AVOID sevoflurane**, (4) Use TIVA (propofol infusion 50-200 mcg/kg/min) OR isoflurane/desflurane if volatile needed. (5) **AVOID succinylcholine**. **If MH crisis**: Dantrolene 2.5 mg/kg IV, aggressive cooling, treat acidosis/hyperkalemia.

## Q9: Post-operative Residual Curarization (PORC)

**Scenario**: Patient extubated with TOF 3/4 (neostigmine reversal). In PACU: weakness, shallow breathing, can't lift head. Diagnosis?

**Answer**: **Post-operative residual curarization**. Neostigmine only partial (30-50%) reversal → TOF <4/4 at discharge = PORC risk. Patient has residual blockade in PACU. **Management**: (1) Reintubate if needed, (2) Sugammadex 2-3 mg/kg for rapid complete recovery (if available), (3) Mechanical ventilation until recovery. **Prevention**: (1) Use sugammadex (ensures TOF 4/4), OR (2) Confirm TOF 4/4 before discharge if using neostigmine.

## Q10: Cisatracurium in Liver Failure

**Scenario**: 58-year-old end-stage liver disease (INR 8, albumin 2). Why cisatracurium preferred over rocuronium?

**Answer**: **Organ-independent metabolism**. Cisatracurium: Hofmann degradation (temperature/pH-dependent) + ester hydrolysis = organ-independent. Rocuronium: 70% hepatic (severely impaired in cirrhosis) → prolonged duration, accumulation. **Advantages cisatracurium**: (1) Predictable duration despite liver failure, (2) No accumulation, (3) Single-bolus safe. **Dosing**: Cisatracurium 0.2 mg/kg (similar rocuronium), onset 90-120s. **Reversal**: Neostigmine OK (benzyl agent); sugammadex ineffective (benzyl, not steroid).`,
        mnemonics: [
          { text: "BURNS = 15-year Succinylcholine contraindication (hyperkalemia)", explanation: "Absolute avoid window" },
          { text: "MYALGIA prevention = Priming 0.01 mg/kg rocuronium BEFORE succinylcholine", explanation: "Fasciculation reduction" },
          { text: "ROCURONIUM organ failure = single dose strategy = avoid accumulation", explanation: "Dosing modification" },
          { text: "NEO sequence = Glycopyrrolate 0.2 FIRST (2-3 min) THEN Neostigmine = critical order", explanation: "Cholinergic crisis prevention" },
          { text: "SUGAMMADEX = ANY depth works = 4 mg/kg deep = complete reversal steroid only", explanation: "Flexibility advantage" },
          { text: "PSEUDOCHOLINESTERASE = Succinylcholine apnea = FFP + ventilation = family screening", explanation: "Genetic deficiency" }
        ],
        keyPoints: [
          "Succinylcholine absolute contraindication: burns (15-year window), malignant hyperthermia",
          "Hyperkalemia risk: burns, paralyzed, crush injury patients",
          "Myalgia prevention: priming dose 0.01 mg/kg rocuronium before succinylcholine",
          "Rocuronium accumulation in organ failure; single dose or cisatracurium preferred",
          "Neostigmine sequence critical: anticholinergic FIRST then anticholinesterase",
          "Sugammadex complete reversal any depth but rocuronium/vecuronium only",
          "PORC (post-operative residual curarization) eliminated by sugammadex",
          "Cisatracurium organ-independent; ideal in hepatic/renal failure"
        ],
        textbookRefs: [
          { book: "Lee's Synopsis of Anaesthesia", chapter: "Clinical Scenarios in Neuromuscular Management", edition: "14th" },
          { book: "Aitkenhead's Textbook of Anaesthesia", chapter: "Problem-Solving in Muscle Relaxant Use", edition: "6th" }
        ]
      }
    ]
  }
];
