import type { TopicLessons } from "./content-loader";

/**
 * 5-layer lessons for final batch 2.
 * Covers: Organic & Plant Poisons (FM-MOD-06-TOP-03), Febrile Seizures & Epilepsy (PE-MOD-07-TOP-01).
 */
export const finalBatch2Lessons: TopicLessons[] = [
  // ═══════════════════════════════════════════════════════════════
  // FM-MOD-06-TOP-03: Organic & Plant Poisons
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "FM-MOD-06-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "organic-plant-poisons-layer-1-foundation",
        title: "Organic & Plant Poisons - Foundation",
        estimatedMinutes: 20,
        summary: "Organic poisons include organophosphorus compounds, carbamates, organochlorines, and plant-based poisons. Organophosphorus poisoning is the most common poisoning in India causing significant mortality.",
        contentMd: `# Organic & Plant Poisons - Foundation

## Classification
| Category | Examples |
|----------|---------|
| Organophosphorus (OP) | Malathion, parathion, chlorpyrifos, diazinon |
| Carbamates | Carbaryl, propoxur, aldicarb |
| Organochlorines | DDT, BHC (lindane), endosulfan |
| Pyrethroids | Allethrin, cypermethrin |
| Plant poisons | Aconite, oleander, abrus, datura, castor |

## Organophosphorus Poisoning (Most Important)

### Mechanism
- Irreversible inhibition of acetylcholinesterase (AChE)
- Accumulation of acetylcholine at all cholinergic synapses
- Affects: muscarinic, nicotinic, and CNS receptors

### Routes of Exposure
- **Ingestion**: Most common in suicidal attempts (India)
- **Dermal absorption**: Occupational exposure (farmers)
- **Inhalation**: Spray exposure

### Garlicky Odor
- Characteristic smell of OP compounds
- Important forensic clue

## Carbamate Poisoning
- **Mechanism**: Reversible inhibition of AChE
- Shorter duration than OP (hours vs days)
- Atropine effective; pralidoxime less useful (spontaneous reactivation)

## Organochlorine Poisoning
- **Mechanism**: CNS stimulation via GABA inhibition
- Banned in India but still encountered (endosulfan)
- Stored in body fat (lipophilic) -> chronic toxicity
- **Treatment**: Supportive; diazepam for seizures

## Common Plant Poisons in India
| Plant | Toxic Part | Active Principle | Effect |
|-------|-----------|-----------------|--------|
| Oleander (kaner) | All parts | Cardiac glycosides (oleandrin) | Cardiac arrhythmias |
| Aconite (mitha zahar) | Root | Aconitine | Cardiac arrhythmias, paresthesias |
| Abrus precatorius (rati) | Seeds | Abrin (toxalbumin) | GI hemorrhage, multi-organ failure |
| Datura (dhatura) | Seeds, leaves | Atropine, scopolamine | Anticholinergic syndrome |
| Castor (arandi) | Seeds | Ricin | GI hemorrhage, multi-organ failure |

> **Clinical Pearl**: OP poisoning is the leading cause of poisoning deaths in rural India, primarily through suicidal ingestion of agricultural pesticides.`,
        mnemonics: [
          { text: "DUMBELS for muscarinic effects of OP", explanation: "Diarrhea, Urination, Miosis, Bronchospasm/Bradycardia, Emesis, Lacrimation, Salivation" },
          { text: "OP = irreversible; Carbamate = reversible AChE inhibition", explanation: "Key difference in mechanism and duration of toxicity" }
        ],
        keyPoints: [
          "OP compounds irreversibly inhibit acetylcholinesterase",
          "Characteristic garlicky odor in OP poisoning",
          "Carbamates cause reversible AChE inhibition (shorter duration)",
          "Organochlorines: CNS stimulation via GABA inhibition, stored in fat",
          "Oleander cardiac glycosides cause fatal arrhythmias",
          "OP poisoning is leading cause of poisoning deaths in rural India"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine", chapter: "Chapter 21: Organic Poisons", edition: "34th" },
          { book: "KD Tripathi Essentials of Pharmacology", chapter: "Chapter 7: Cholinergic", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "organic-plant-poisons-layer-2-mechanism",
        title: "Organic & Plant Poisons - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of organophosphorus toxicity including cholinergic crisis, intermediate syndrome, OPIDN, and aging phenomenon. Plant poison mechanisms.",
        contentMd: `# Organic & Plant Poisons - Mechanism

## OP Poisoning: Cholinergic Crisis

### Muscarinic Effects (DUMBELS)
- **D**iarrhea, **U**rination, **M**iosis, **B**ronchospasm/Bradycardia
- **E**mesis, **L**acrimation, **S**alivation
- Due to ACh excess at parasympathetic effector organs

### Nicotinic Effects
- Muscle fasciculations, weakness, paralysis
- Tachycardia (sympathetic ganglia stimulation)
- Hypertension (adrenal medulla catecholamine release)

### CNS Effects
- Anxiety, confusion, seizures, coma
- Respiratory depression (central)

### Three Phases of OP Poisoning
1. **Acute cholinergic crisis** (hours): DUMBELS + nicotinic effects
2. **Intermediate syndrome** (24-96h): Proximal muscle weakness, respiratory failure
3. **OPIDN** (2-4 weeks): Distal sensorimotor neuropathy (organophosphate-induced delayed neuropathy)

### Aging Phenomenon
- OP-AChE bond becomes permanent over time (aging)
- Once aged, pralidoxime cannot reactivate the enzyme
- **Aging time varies**: Soman (2 min), Sarin (5h), Parathion (24-48h)
- Must give pralidoxime BEFORE aging occurs

## Treatment Mechanism

### Atropine
- Competitive muscarinic antagonist
- Blocks ACh at muscarinic receptors
- Does NOT affect nicotinic receptors
- Endpoint: drying of secretions (not pupil size)

### Pralidoxime (2-PAM)
- Reactivates AChE by cleaving OP-enzyme bond
- Must give BEFORE aging occurs
- Effective at nicotinic junctions (atropine is not)
- Give within 24-48 hours of exposure

## Oleander Poisoning Mechanism
- Cardiac glycosides (oleandrin) inhibit Na+/K+ ATPase
- Similar to digoxin toxicity
- Results: hyperkalemia, bradycardia, heart block, VT/VF
- Treatment: atropine for bradycardia, anti-digoxin Fab fragments

## Datura Poisoning
- Tropane alkaloids (atropine, scopolamine, hyoscyamine)
- Anticholinergic toxidrome: "Hot as a hare, Dry as a bone, Red as a beet, Blind as a bat, Mad as a hatter"
- Mydriasis, tachycardia, dry skin, urinary retention, delirium

## Abrus/Ricin Mechanism
- Toxalbumins: inhibit protein synthesis (ribosome inactivation)
- Cause hemorrhagic gastroenteritis -> multi-organ failure
- No specific antidote; supportive care only`,
        mnemonics: [
          { text: "DUMBELS: Diarrhea, Urination, Miosis, Bronchospasm, Emesis, Lacrimation, Salivation", explanation: "Muscarinic effects of cholinergic excess in OP poisoning" },
          { text: "Hot Dry Red Blind Mad for anticholinergic (Datura)", explanation: "Hot as hare, Dry as bone, Red as beet, Blind as bat, Mad as hatter" },
          { text: "Aging = permanent bond; Pralidoxime before aging", explanation: "Once OP-AChE ages, oximes cannot reactivate enzyme" }
        ],
        keyPoints: [
          "OP crisis: muscarinic (DUMBELS) + nicotinic (fasciculations) + CNS (seizures)",
          "Intermediate syndrome: proximal weakness at 24-96h, respiratory failure",
          "OPIDN: delayed neuropathy at 2-4 weeks",
          "Aging: OP-AChE bond becomes permanent; pralidoxime must be given before aging",
          "Oleander: cardiac glycoside toxicity similar to digoxin",
          "Datura: anticholinergic toxidrome"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine", chapter: "Chapter 21: OP Mechanism", edition: "34th" },
          { book: "KD Tripathi Essentials of Pharmacology", chapter: "Chapter 7: Cholinergic Poisoning", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "organic-plant-poisons-layer-3-clinical",
        title: "Organic & Plant Poisons - Clinical Application",
        estimatedMinutes: 20,
        summary: "Emergency management of OP poisoning (decontamination, atropinization, pralidoxime), oleander and datura poisoning management, and medicolegal aspects.",
        contentMd: `# Organic & Plant Poisons - Clinical Management

## OP Poisoning: Emergency Management

### Step 1: Decontamination
- Remove clothes, wash skin with soap and water
- Gastric lavage if <2 hours (protected airway)
- Activated charcoal if <1 hour
- Healthcare workers: wear gloves (dermal absorption risk)

### Step 2: Atropinization
- **Loading**: Atropine 2-5 mg IV bolus, double every 5 min until secretions dry
- **Endpoint**: Drying of bronchial secretions (NOT pupil size)
- **Maintenance**: Continuous infusion; may need large doses (100+ mg/day)
- **NOT tachycardia**: Tachycardia alone is NOT a reason to stop atropine

### Step 3: Pralidoxime (2-PAM)
- **Dose**: 1-2 g IV over 15-30 min, repeat every 6-8 hours
- **Timing**: Most effective within 24-48 hours (before aging)
- **Duration**: Continue for 24-48h or until clinical improvement
- **Contraindicated in**: Carbamate poisoning (controversial; some sources say not needed)

### Step 4: Supportive Care
- Secure airway (intubation if needed)
- Diazepam for seizures
- Monitor for intermediate syndrome (respiratory failure at 24-96h)
- ICU monitoring for at least 72 hours

## Oleander Poisoning Management
- Gastric lavage + activated charcoal
- Atropine for symptomatic bradycardia
- Anti-digoxin Fab fragments (Digibind) if available
- Temporary pacemaker for complete heart block
- Correct hyperkalemia (insulin-dextrose, calcium gluconate)

## Datura Poisoning Management
- Physostigmine (anticholinesterase) - specific antidote
- Dose: 0.5-2 mg IV slowly (may cause seizures if rapid)
- Supportive: cooling measures, benzodiazepines for agitation

## Medicolegal Aspects
- **OP poisoning**: Most common suicidal poison in India (agricultural workers)
- **Mandatory reporting**: All poisoning cases must be reported to police
- **Autopsy findings**: Garlicky odor in stomach contents, congested organs, pulmonary edema
- **Chemical analysis**: Send stomach contents, blood, urine for toxicology
- **Oleander**: Sections 302, 304A IPC if homicidal
- **Section 309 IPC**: Attempt to commit suicide (decriminalized in 2018 Mental Healthcare Act)

> **Clinical Pearl**: In OP poisoning, never use morphine (respiratory depression), aminophylline (cardiac arrhythmia), or succinylcholine (prolonged apnea due to AChE inhibition).`,
        mnemonics: [
          { text: "Atropine endpoint: DRY secretions (not pupils)", explanation: "Titrate atropine to drying of bronchial secretions; tachycardia/mydriasis are not endpoints" },
          { text: "No MAS in OP: No Morphine, Aminophylline, Succinylcholine", explanation: "Three drugs contraindicated in OP poisoning" }
        ],
        keyPoints: [
          "Decontaminate first: remove clothes, wash skin, gastric lavage",
          "Atropine endpoint: drying of secretions, NOT pupil size or heart rate",
          "Pralidoxime within 24-48h before aging occurs",
          "Monitor for intermediate syndrome (respiratory failure at 24-96h)",
          "Oleander: anti-digoxin Fab, atropine, pacemaker for heart block",
          "Contraindicated in OP: morphine, aminophylline, succinylcholine"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine", chapter: "Chapter 21: Treatment", edition: "34th" },
          { book: "KD Tripathi Essentials of Pharmacology", chapter: "Chapter 7", edition: "8th" }
        ]
      },
      {
        layer: 4,
        slug: "organic-plant-poisons-layer-4-exam-prep",
        title: "Organic & Plant Poisons - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield facts on OP poisoning phases, drug contraindications, plant poison features, and medicolegal aspects for forensic medicine exams.",
        contentMd: `# Organic & Plant Poisons - Exam High Yield

## OP Poisoning Summary
| Phase | Timing | Features |
|-------|--------|----------|
| Cholinergic crisis | Hours | DUMBELS + fasciculations + seizures |
| Intermediate syndrome | 24-96h | Proximal weakness, respiratory failure |
| OPIDN | 2-4 weeks | Distal neuropathy |

## Treatment Quick Reference
| Drug | Action | Endpoint |
|------|--------|---------|
| Atropine | Muscarinic antagonist | Dry secretions |
| Pralidoxime | AChE reactivator | Before aging |
| Diazepam | Anticonvulsant | Seizure control |

## Plant Poison One-Liners
| Plant | Toxic Principle | Fatal Effect |
|-------|----------------|-------------|
| Oleander | Oleandrin (glycoside) | Cardiac arrest |
| Aconite | Aconitine | VT/VF |
| Abrus | Abrin (toxalbumin) | Multi-organ failure |
| Datura | Atropine/scopolamine | Anticholinergic |
| Castor | Ricin | Multi-organ failure |
| Croton tiglium | Croton oil | Severe GI hemorrhage |
| Calotropis (madar) | Calotropin | Cardiac toxicity |

## Contraindicated Drugs in OP
- Morphine (respiratory depression)
- Aminophylline (cardiac arrhythmia)
- Succinylcholine (prolonged apnea - needs AChE for metabolism)

## Medicolegal Points
- Most common suicidal poison in India: OP compounds
- Garlicky odor: OP poisoning (autopsy finding)
- All poisoning cases: mandatory police reporting
- Section 309 IPC: suicide attempt (decriminalized 2018)

## Previous Year Themes
- DUMBELS mnemonic and its meaning
- Atropine vs pralidoxime mechanism
- Intermediate syndrome timing
- Aging phenomenon
- Oleander = cardiac glycoside
- Datura = anticholinergic toxidrome`,
        mnemonics: [
          { text: "SPACE = 3 phases: S=cholinergic crisis, P=intermediate, A=OPIDN", explanation: "Actually: cholinergic (hours), intermediate (24-96h), OPIDN (2-4 weeks)" },
          { text: "No MAS: Morphine, Aminophylline, Succinylcholine", explanation: "Three contraindicated drugs in OP poisoning" }
        ],
        keyPoints: [
          "Three phases: cholinergic crisis, intermediate syndrome, OPIDN",
          "Atropine endpoint = dry secretions; pralidoxime before aging",
          "Intermediate syndrome: respiratory failure at 24-96h",
          "Oleander = cardiac glycoside; datura = anticholinergic",
          "Most common suicidal poison in India: OP",
          "Contraindicated: morphine, aminophylline, succinylcholine"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine", chapter: "Chapter 21", edition: "34th" }
        ]
      },
      {
        layer: 5,
        slug: "organic-plant-poisons-layer-5-active-recall",
        title: "Organic & Plant Poisons - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A covering OP poisoning mechanisms, management, plant poisons, and medicolegal aspects.",
        contentMd: `# Organic & Plant Poisons - Active Recall

**Q1:** Mechanism of OP poisoning?
> Irreversible inhibition of acetylcholinesterase causing ACh accumulation at muscarinic, nicotinic, and CNS receptors

**Q2:** What are the muscarinic effects (DUMBELS)?
> Diarrhea, Urination, Miosis, Bronchospasm/Bradycardia, Emesis, Lacrimation, Salivation

**Q3:** What is intermediate syndrome?
> Proximal muscle weakness and respiratory failure occurring 24-96 hours after OP exposure, after initial cholinergic crisis resolves

**Q4:** What is the aging phenomenon?
> OP-AChE bond becomes permanent over time. Once aged, pralidoxime cannot reactivate the enzyme

**Q5:** Endpoint of atropine therapy in OP poisoning?
> Drying of bronchial secretions (NOT pupil size or heart rate)

**Q6:** When should pralidoxime be given?
> Within 24-48 hours of exposure, before aging of OP-AChE complex occurs

**Q7:** Name 3 drugs contraindicated in OP poisoning.
> Morphine (respiratory depression), Aminophylline (arrhythmia), Succinylcholine (prolonged apnea)

**Q8:** What is the toxic principle of oleander?
> Oleandrin (cardiac glycoside similar to digoxin). Causes fatal cardiac arrhythmias

**Q9:** What is datura poisoning toxidrome?
> Anticholinergic: "Hot as hare, Dry as bone, Red as beet, Blind as bat, Mad as hatter." Antidote: physostigmine

**Q10:** Most common suicidal poison in India?
> Organophosphorus compounds (agricultural pesticides in rural areas)

**Q11:** What is OPIDN?
> Organophosphate-Induced Delayed Neuropathy. Distal sensorimotor neuropathy at 2-4 weeks post-exposure

**Q12:** How does carbamate differ from OP poisoning?
> Carbamate causes reversible AChE inhibition (shorter duration). Atropine works; pralidoxime usually not needed`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards covering OP, carbamate, organochlorine, and plant poisons",
          "Tests mechanism, clinical phases, and management",
          "Includes medicolegal aspects relevant to forensic medicine",
          "Reinforces India-specific poisoning epidemiology"
        ],
        textbookRefs: [
          { book: "Reddy's Essentials of Forensic Medicine", chapter: "Chapter 21", edition: "34th" }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PE-MOD-07-TOP-01: Febrile Seizures & Epilepsy
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "PE-MOD-07-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "febrile-seizures-epilepsy-layer-1-foundation",
        title: "Febrile Seizures & Epilepsy - Foundation",
        estimatedMinutes: 20,
        summary: "Febrile seizures occur in children 6 months to 5 years during fever. Simple febrile seizures are benign with excellent prognosis. Epilepsy is defined as recurrent unprovoked seizures.",
        contentMd: `# Febrile Seizures & Epilepsy - Foundation

## Febrile Seizures

### Definition
- Seizures associated with fever (>38 degrees C) in children aged 6 months to 5 years
- No evidence of CNS infection or other defined cause
- Most common seizure disorder in children (2-5% prevalence)

### Classification
| Feature | Simple | Complex |
|---------|--------|---------|
| Duration | <15 min | >15 min |
| Type | Generalized | Focal features |
| Frequency | Single in 24h | Multiple in 24h |
| Recovery | Rapid | Prolonged postictal |
| Recurrence | 30% | 40-50% |
| Epilepsy risk | <1% | 3-10% |

### Risk Factors for Febrile Seizures
- Family history (15-20%)
- High fever (rapid rise more important than absolute temperature)
- Age <18 months (higher risk)
- Developmental delay
- Certain viral infections (HHV-6, influenza)

## Epilepsy

### Definition
- 2 or more unprovoked seizures >24 hours apart, OR
- 1 seizure with high recurrence risk (>60%), OR
- Diagnosis of an epilepsy syndrome

### Classification (ILAE 2017)
**By onset type:**
- **Focal**: One hemisphere (simple/complex/secondary generalized)
- **Generalized**: Both hemispheres (absence, tonic-clonic, myoclonic, atonic)
- **Unknown onset**: Insufficient information

### Common Pediatric Epilepsy Syndromes
| Syndrome | Age | Seizure Type | Prognosis |
|----------|-----|-------------|-----------|
| Childhood absence | 4-8 yr | Absence (staring) | Good, resolves by puberty |
| JME | 12-18 yr | Myoclonic + GTCS | Good but lifelong treatment |
| West syndrome | 3-12 mo | Infantile spasms | Poor |
| Lennox-Gastaut | 2-6 yr | Multiple types | Poor |
| Benign rolandic | 3-13 yr | Focal motor (face) | Excellent, resolves |

> **Clinical Pearl**: In India, 10 million people have epilepsy, making it a major neurological condition. Stigma remains a barrier to treatment.`,
        mnemonics: [
          { text: "Simple febrile: <15 min, generalized, single, rapid recovery", explanation: "Four features of simple febrile seizure" },
          { text: "West = Worst prognosis; Benign rolandic = Best prognosis", explanation: "Two ends of pediatric epilepsy prognosis spectrum" }
        ],
        keyPoints: [
          "Febrile seizures: 6 months to 5 years, fever >38C, no CNS infection",
          "Simple vs complex: duration, type, frequency, epilepsy risk",
          "Simple febrile: <1% epilepsy risk; complex: 3-10%",
          "Epilepsy: 2+ unprovoked seizures >24h apart",
          "ILAE 2017: focal, generalized, or unknown onset",
          "West syndrome: infantile spasms, poor prognosis"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 20: Seizures", edition: "10th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 611: Seizures in Children", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "febrile-seizures-epilepsy-layer-2-mechanism",
        title: "Febrile Seizures & Epilepsy - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of febrile seizures (temperature-dependent threshold, immature GABA), epileptogenesis, seizure classification, and pharmacology of antiepileptic drugs.",
        contentMd: `# Febrile Seizures & Epilepsy - Mechanism

## Febrile Seizure Pathophysiology
- Fever lowers seizure threshold (rapid rise > absolute temperature)
- Immature brain: GABAergic inhibitory system underdeveloped in children <5yr
- Genetic factors: mutations in SCN1A, GABRG2 sodium/GABA channel genes
- Cytokine role: IL-1beta, TNF-alpha increase neuronal excitability
- HHV-6 and rotavirus have direct neurotropic effects

## Epileptogenesis
1. **Initiating event**: Brain injury (trauma, infection, hypoxia)
2. **Latent period**: Molecular/cellular changes (days to years)
3. **Chronic epilepsy**: Recurrent spontaneous seizures

### Molecular Mechanisms
- Increased glutamate (excitatory) signaling
- Decreased GABA (inhibitory) signaling
- Ion channel dysfunction (Na+, Ca2+, K+)
- Synaptic reorganization (mossy fiber sprouting in hippocampus)
- Neuronal loss and gliosis

## Antiepileptic Drug Mechanisms
| Drug | Mechanism | Indication |
|------|-----------|------------|
| Sodium valproate | Na+ channel block + GABA increase | Generalized (1st line), absence |
| Carbamazepine | Na+ channel block | Focal seizures (1st line) |
| Phenytoin | Na+ channel block | Focal, GTCS, status epilepticus |
| Ethosuximide | T-type Ca2+ channel block | Absence seizures (1st choice) |
| Levetiracetam | SV2A protein modulation | Broad spectrum (focal + generalized) |
| Phenobarbital | GABA-A receptor potentiation | Neonatal seizures |
| Lamotrigine | Na+ channel block | Broad spectrum |
| Topiramate | Na+ block + GABA increase | Broad spectrum |

## Status Epilepticus
- Seizure lasting >5 minutes or 2+ seizures without recovery
- **Medical emergency**: Mortality 20% if untreated

### Treatment Protocol (Indian Guidelines)
1. **0-5 min**: Stabilize (ABC), IV access, check glucose
2. **5-20 min**: Benzodiazepine (lorazepam 0.1 mg/kg IV or diazepam 0.3 mg/kg IV)
3. **20-40 min**: Phenytoin 20 mg/kg IV (or fosphenytoin) or levetiracetam 20-40 mg/kg
4. **40-60 min**: Repeat phenytoin or valproate 20-30 mg/kg IV
5. **>60 min (refractory)**: Midazolam infusion or thiopental (ICU)

## EEG Patterns
| Syndrome | EEG Pattern |
|----------|-------------|
| Childhood absence | 3 Hz spike-and-wave |
| West syndrome | Hypsarrhythmia |
| JME | 4-6 Hz polyspike-and-wave |
| Benign rolandic | Centrotemporal spikes |
| Lennox-Gastaut | Slow spike-and-wave (<2.5 Hz) |`,
        mnemonics: [
          { text: "Ethosuximide for Absence (both start with vowels)", explanation: "Ethosuximide blocks T-type Ca2+ channels; first-choice for absence epilepsy" },
          { text: "VPA = Very Powerful Antiepileptic (valproate works for most types)", explanation: "Sodium valproate has broadest spectrum among traditional AEDs" },
          { text: "Status = Stabilize + Benzo + Phenytoin", explanation: "Three-step initial management of status epilepticus" }
        ],
        keyPoints: [
          "Febrile seizure: immature GABA + rapid fever rise + genetic susceptibility",
          "Epileptogenesis: excitation-inhibition imbalance (glutamate excess, GABA deficit)",
          "Ethosuximide is first-choice for absence; valproate is broadest spectrum",
          "Carbamazepine is first-line for focal; can worsen absence and myoclonic",
          "Status epilepticus: benzo first, then phenytoin/levetiracetam",
          "West syndrome EEG: hypsarrhythmia; absence: 3Hz spike-and-wave"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 20: Epilepsy", edition: "10th" },
          { book: "KD Tripathi Essentials of Pharmacology", chapter: "Chapter 30: Antiepileptics", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "febrile-seizures-epilepsy-layer-3-clinical",
        title: "Febrile Seizures & Epilepsy - Clinical Application",
        estimatedMinutes: 20,
        summary: "Management of febrile seizures (parental counseling, when to investigate), epilepsy workup, AED selection, and when to refer. Status epilepticus emergency management.",
        contentMd: `# Febrile Seizures & Epilepsy - Clinical

## Febrile Seizure Management

### Simple Febrile Seizure
- **Acute**: Usually self-limiting; place in recovery position
- **Investigations**: None needed for typical first simple febrile seizure in >12 month child
- **LP**: Consider if <12 months, incomplete immunization, or signs of meningitis
- **EEG**: NOT routinely indicated (will be abnormally slow post-seizure; misleading)
- **Imaging**: NOT needed for simple febrile seizures
- **Prophylaxis**: NOT routinely recommended

### Complex Febrile Seizure
- **Investigations**: Blood glucose, electrolytes, CBC
- **LP**: Lower threshold (especially <18 months)
- **EEG**: Consider if recurrent complex seizures
- **Imaging**: MRI brain if focal features
- **Prophylaxis**: Consider intermittent diazepam during febrile illness

### Parental Counseling (Most Important)
- Febrile seizures are NOT epilepsy
- Excellent prognosis (simple: <1% epilepsy risk)
- Fever control does NOT prevent febrile seizures
- First aid: recovery position, do not put anything in mouth
- Recurrence rate: 30% (higher if <18 months, family history)

## Epilepsy Workup
1. **Detailed history**: Seizure description, semiology, frequency, triggers
2. **EEG**: First-line investigation (interictal may be normal)
3. **MRI brain**: Structural cause (tumor, malformation, mesial temporal sclerosis)
4. **Blood tests**: Glucose, calcium, magnesium, renal/liver function
5. **Genetic testing**: If epilepsy syndrome suspected

## AED Selection by Seizure Type
| Seizure Type | First Line | Alternative |
|-------------|-----------|-------------|
| Focal | Carbamazepine, oxcarbazepine | Levetiracetam, lamotrigine |
| GTCS | Valproate | Levetiracetam, lamotrigine |
| Absence | Ethosuximide, valproate | Lamotrigine |
| Myoclonic | Valproate | Levetiracetam, clonazepam |
| Infantile spasms | ACTH, vigabatrin | Prednisolone |

## When to Stop AED
- Seizure-free for 2 years (children) or 3-5 years (adults)
- Normal EEG
- Gradual taper over 3-6 months
- Exception: JME (lifelong treatment)

## Status Epilepticus: Emergency Protocol
- ABC + IV access + glucose check
- Lorazepam 0.1 mg/kg IV (or rectal diazepam 0.5 mg/kg if no IV)
- If seizure continues: phenytoin 20 mg/kg IV over 20 min
- If refractory: midazolam infusion or thiopental (ICU)

> **Clinical Pearl**: Carbamazepine can worsen absence and myoclonic seizures. Never use carbamazepine in generalized epilepsy syndromes.`,
        mnemonics: [
          { text: "Simple febrile = Simple management (reassure parents)", explanation: "No EEG, no imaging, no prophylaxis needed for typical simple febrile seizure" },
          { text: "CBZ worsens Absence/Myoclonic (CAM rule)", explanation: "Carbamazepine worsens absence and myoclonic seizures" }
        ],
        keyPoints: [
          "Simple febrile seizure: no routine EEG, imaging, or prophylaxis",
          "LP if <12 months, incomplete immunization, or meningitis signs",
          "Parental counseling: febrile seizures are NOT epilepsy",
          "Carbamazepine first-line for focal; valproate for generalized",
          "Ethosuximide first-choice for absence seizures",
          "Status epilepticus: lorazepam first, then phenytoin"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 20: Management", edition: "10th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 611", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "febrile-seizures-epilepsy-layer-4-exam-prep",
        title: "Febrile Seizures & Epilepsy - Exam Preparation",
        estimatedMinutes: 15,
        summary: "High-yield comparison tables for febrile seizure types, epilepsy syndromes, EEG patterns, AED selection, and status epilepticus protocol.",
        contentMd: `# Febrile Seizures & Epilepsy - Exam High Yield

## Simple vs Complex Febrile Seizure
| Feature | Simple | Complex |
|---------|--------|---------|
| Duration | <15 min | >15 min |
| Type | Generalized | Focal/lateralized |
| Recurrence in 24h | No | Yes (multiple) |
| Epilepsy risk | <1% | 3-10% |
| EEG needed | No | Consider |
| Prophylaxis | No | Consider |

## Epilepsy Syndrome EEG Patterns
| Syndrome | EEG | Age |
|----------|-----|-----|
| Childhood absence | 3 Hz spike-wave | 4-8 yr |
| JME | 4-6 Hz polyspike-wave | 12-18 yr |
| West | Hypsarrhythmia | 3-12 mo |
| Lennox-Gastaut | Slow spike-wave (<2.5 Hz) | 2-6 yr |
| Benign rolandic | Centrotemporal spikes | 3-13 yr |

## AED Quick Reference
| Drug | Mechanism | Best For | Avoid In |
|------|-----------|----------|----------|
| Valproate | Na block + GABA | Generalized | Pregnancy (teratogenic) |
| Carbamazepine | Na block | Focal | Absence, myoclonic |
| Ethosuximide | T-Ca block | Absence | Focal, GTCS |
| Phenytoin | Na block | Status, focal | Absence |
| Levetiracetam | SV2A | Broad spectrum | - |
| Vigabatrin | GABA transaminase inhibitor | Infantile spasms (tuberous sclerosis) | Retinal toxicity |

## Status Epilepticus Protocol
| Time | Drug | Dose |
|------|------|------|
| 0-5 min | Lorazepam | 0.1 mg/kg IV |
| 5-20 min | Diazepam (alt) | 0.3 mg/kg IV |
| 20-40 min | Phenytoin | 20 mg/kg IV |
| 40-60 min | Valproate or levetiracetam | 20-40 mg/kg |
| >60 min | Midazolam infusion | ICU |

## One-Liners
- Febrile seizures: most common seizure disorder in children
- EEG NOT needed for simple febrile seizure
- Carbamazepine worsens absence and myoclonic
- ACTH = first-line for infantile spasms (West syndrome)
- JME: lifelong treatment (high relapse if AED stopped)
- Valproate: teratogenic (avoid in women of childbearing age)`,
        mnemonics: [
          { text: "3 Hz = Absence; Hypsarrhythmia = West; Centrotemporal = Rolandic", explanation: "Three most commonly tested EEG patterns in pediatrics" },
          { text: "West needs ACTH; Absence needs Ethosuximide; JME needs Valproate for life", explanation: "Three important treatment associations" }
        ],
        keyPoints: [
          "Simple febrile: <15 min, generalized, single, <1% epilepsy risk",
          "Absence EEG: 3 Hz spike-wave; West: hypsarrhythmia",
          "Carbamazepine worsens absence/myoclonic (never use in generalized)",
          "ACTH for infantile spasms; ethosuximide for absence",
          "Status: lorazepam -> phenytoin -> midazolam infusion",
          "Valproate teratogenic: avoid in pregnancy"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 20", edition: "10th" }
        ]
      },
      {
        layer: 5,
        slug: "febrile-seizures-epilepsy-layer-5-active-recall",
        title: "Febrile Seizures & Epilepsy - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard Q&A for febrile seizures, epilepsy syndromes, EEG patterns, AED selection, and status epilepticus management.",
        contentMd: `# Febrile Seizures & Epilepsy - Active Recall

**Q1:** Define febrile seizure.
> Seizure with fever (>38C) in child 6mo-5yr, no CNS infection, no defined cause

**Q2:** Simple vs complex febrile seizure differences?
> Simple: <15min, generalized, single in 24h, <1% epilepsy risk. Complex: >15min, focal, multiple, 3-10% epilepsy risk

**Q3:** Is EEG needed after simple febrile seizure?
> No. EEG is NOT routinely indicated (post-seizure slow waves are misleading)

**Q4:** When is LP needed in febrile seizure?
> Age <12 months, incomplete immunization, or clinical signs of meningitis

**Q5:** First-line drug for absence epilepsy?
> Ethosuximide (blocks T-type calcium channels)

**Q6:** Which AED is broadest spectrum?
> Sodium valproate (works for most generalized and focal seizures)

**Q7:** Why avoid carbamazepine in absence epilepsy?
> Carbamazepine worsens absence and myoclonic seizures

**Q8:** EEG pattern in childhood absence epilepsy?
> 3 Hz generalized spike-and-wave discharges

**Q9:** EEG pattern in West syndrome?
> Hypsarrhythmia (chaotic, high-amplitude, multifocal spikes)

**Q10:** Treatment of infantile spasms (West syndrome)?
> ACTH or vigabatrin (especially if tuberous sclerosis)

**Q11:** First drug in status epilepticus?
> Lorazepam 0.1 mg/kg IV (or diazepam 0.3 mg/kg IV if no lorazepam)

**Q12:** When can AEDs be stopped in children?
> After 2 years seizure-free with normal EEG. Taper over 3-6 months. Exception: JME needs lifelong treatment`,
        mnemonics: [],
        keyPoints: [
          "12 flashcards covering febrile seizures, epilepsy syndromes, and treatment",
          "Tests classification, EEG patterns, and AED selection",
          "Includes status epilepticus protocol",
          "Reinforces clinical decision-making for febrile seizure workup"
        ],
        textbookRefs: [
          { book: "OP Ghai Essential Pediatrics", chapter: "Chapter 20", edition: "10th" },
          { book: "Nelson Textbook of Pediatrics", chapter: "Chapter 611", edition: "21st" }
        ]
      }
    ]
  }
];
