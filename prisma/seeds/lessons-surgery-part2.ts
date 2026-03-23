import type { TopicLessons } from "./content-loader";

export const surgeryPart2Lessons: TopicLessons[] = [
  {
    topicCode: "SU-MOD-02-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "head-injury-layer-1-foundation",
        title: "Head Injury - Foundation",
        estimatedMinutes: 20,
        summary: "Classification of head injuries, GCS scoring, types of intracranial hemorrhage, and primary vs secondary brain injury.",
        contentMd: `# Head Injury - Foundation

## Classification
- **Primary injury**: Direct brain damage at time of impact (contusion, axonal shearing)
- **Secondary injury**: Subsequent damage from hypoxia, hypotension, raised ICP, herniation

## Glasgow Coma Scale (GCS)
| Component | Response | Score |
|-----------|----------|-------|
| Eye opening | Spontaneous/Voice/Pain/None | 4/3/2/1 |
| Verbal | Oriented/Confused/Inappropriate/Incomprehensible/None | 5/4/3/2/1 |
| Motor | Obeys/Localizes/Withdraws/Flexion/Extension/None | 6/5/4/3/2/1 |
- Mild: GCS 13-15, Moderate: 9-12, Severe: 3-8 (intubate if GCS <=8)

## Types of Intracranial Hemorrhage
- **Extradural (EDH)**: Middle meningeal artery tear; biconvex/lenticular on CT; lucid interval
- **Subdural (SDH)**: Bridging vein tear; crescent-shaped on CT; common in elderly/alcoholics
- **Subarachnoid (SAH)**: Berry aneurysm rupture; thunderclap headache; blood in cisterns on CT
- **Intracerebral hemorrhage**: Hypertensive; basal ganglia commonest site

## Types of Skull Fractures
- Linear (most common), Depressed, Basilar (Battle sign, raccoon eyes, CSF rhinorrhea/otorrhea)`,
        mnemonics: [
          { text: "GCS: Eye 4, Verbal 5, Motor 6", explanation: "Maximum GCS = 4+5+6 = 15; Minimum = 1+1+1 = 3" },
          { text: "EDH = Lenticular/Biconvex, SDH = Crescent", explanation: "EDH arterial (MMA), biconvex; SDH venous (bridging veins), crescent" },
        ],
        keyPoints: [
          "GCS <=8: Severe head injury requiring intubation and ventilation",
          "Extradural hematoma: Middle meningeal artery tear with lucid interval; biconvex CT",
          "Subdural hematoma: Bridging vein tear; crescent-shaped CT; common in elderly",
          "Basilar skull fracture signs: Battle sign (mastoid), raccoon eyes, CSF leak",
          "Primary brain injury cannot be reversed; treatment targets preventing secondary injury",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 28: Head Injuries", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 19: Head Injury", edition: "28th" },
        ],
      },
      {
        layer: 2,
        slug: "head-injury-layer-2-mechanism",
        title: "Head Injury - Mechanism",
        estimatedMinutes: 25,
        summary: "Pathophysiology of raised ICP, Monro-Kellie doctrine, brain herniation, and secondary brain injury cascade.",
        contentMd: `# Head Injury - Mechanism

## Monro-Kellie Doctrine
- Cranial vault is a fixed volume containing: Brain (80%) + CSF (10%) + Blood (10%)
- Increase in one component must be compensated by decrease in another
- Compensation mechanisms: CSF displacement into spinal canal → venous blood compression
- When compensation exhausted → exponential rise in ICP

## Intracranial Pressure (ICP)
- Normal: 5-15 mmHg; Treatment threshold: >20 mmHg
- Cerebral Perfusion Pressure (CPP) = MAP - ICP; Target CPP >60 mmHg
- Cushing triad (late sign of raised ICP): Hypertension + Bradycardia + Irregular respiration

## Brain Herniation Syndromes
- **Uncal (transtentorial)**: Ipsilateral pupil dilation (CN III compression), contralateral hemiparesis
- **Central/Downward**: Bilateral small pupils → bilateral fixed dilated pupils, decerebrate posturing
- **Tonsillar**: Cerebellar tonsils through foramen magnum → respiratory arrest, death
- **Subfalcine**: Cingulate gyrus under falx cerebri → contralateral leg weakness (ACA compression)

## Secondary Brain Injury Cascade
- Hypoxia (PaO2 <60) and Hypotension (SBP <90) are the two most preventable causes
- Glutamate excitotoxicity → calcium influx → mitochondrial dysfunction → cell death
- Cerebral edema: Vasogenic (BBB breakdown) and Cytotoxic (cell swelling)

## Extradural Hematoma Pathology
- Temporal bone fracture → middle meningeal artery tear → rapid arterial bleed
- Hematoma strips dura from inner table of skull → biconvex shape (does not cross suture lines)
- Classic: Lucid interval followed by rapid deterioration (ipsilateral pupil dilation)`,
        mnemonics: [
          { text: "Cushing triad: HBI", explanation: "Hypertension, Bradycardia, Irregular respiration (late sign of raised ICP)" },
          { text: "CPP = MAP - ICP", explanation: "Cerebral Perfusion Pressure must be maintained >60 mmHg" },
        ],
        keyPoints: [
          "Monro-Kellie doctrine: fixed cranial volume = brain + CSF + blood",
          "CPP = MAP - ICP; target CPP >60 mmHg in head injury",
          "Cushing triad (hypertension, bradycardia, irregular breathing) is a late sign of raised ICP",
          "Uncal herniation: ipsilateral pupil dilation (CN III) + contralateral hemiparesis",
          "Hypoxia and hypotension are the two most preventable causes of secondary brain injury",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 28", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 19", edition: "28th" },
        ],
      },
      {
        layer: 3,
        slug: "head-injury-layer-3-clinical",
        title: "Head Injury - Clinical",
        estimatedMinutes: 25,
        summary: "ATLS approach to head injury, CT indications, ICP management, and surgical intervention criteria.",
        contentMd: `# Head Injury - Clinical Management

## ATLS Primary Survey
- A (Airway + C-spine): Intubate if GCS <=8; maintain C-spine precautions
- B (Breathing): Target SpO2 >94%, PaO2 >60 mmHg
- C (Circulation): Prevent hypotension (SBP >90); head injury alone rarely causes hypotension
- D (Disability): GCS, pupil size/reactivity, lateralizing signs
- E (Exposure): Look for other injuries

## CT Head Indications (NICE Guidelines)
- GCS <13 at any point, GCS 13-14 at 2 hours post-injury
- Suspected open/depressed skull fracture, basilar skull fracture signs
- Post-traumatic seizure, focal neurological deficit
- >1 episode of vomiting, coagulopathy, age >65

## ICP Management (Staircase Approach)
1. Head elevation 30 degrees, sedation, analgesia
2. Osmotherapy: Mannitol 20% (0.5-1 g/kg) or Hypertonic saline 3%
3. CSF drainage via External Ventricular Drain (EVD)
4. Moderate hyperventilation (PaCO2 30-35 mmHg) - temporary measure only
5. Decompressive craniectomy (last resort)

## Surgical Indications
- **EDH**: Thickness >15 mm, midline shift >5 mm, or GCS deterioration
- **SDH**: Thickness >10 mm, midline shift >5 mm
- **Depressed fracture**: Depression greater than full thickness of skull, open fracture, neurological deficit

## Indian Context
- Road traffic accidents are the leading cause of head injury in India
- Two-wheeler accidents without helmet account for majority of severe TBI
- National Trauma Care policy emphasizes golden hour management`,
        mnemonics: [
          { text: "Mannitol dose: 0.5-1 g/kg", explanation: "20% Mannitol given as rapid IV infusion for acute raised ICP" },
          { text: "EDH surgery: 15-5 rule", explanation: "Thickness >15 mm or midline shift >5 mm requires surgical evacuation" },
        ],
        keyPoints: [
          "Intubate all patients with GCS <=8 (severe head injury)",
          "Head injury alone rarely causes hypotension - look for other bleeding sources",
          "Mannitol 20% (0.5-1 g/kg) is first-line osmotherapy for raised ICP",
          "EDH surgical indication: >15 mm thick or >5 mm midline shift",
          "Hyperventilation is only a temporary bridge measure - not sustained therapy",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 28", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 19", edition: "28th" },
        ],
      },
      {
        layer: 4,
        slug: "head-injury-layer-4-exam",
        title: "Head Injury - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield exam facts on head injury for NEXT pattern questions.",
        contentMd: `# Head Injury - Exam Prep

## Must-Know Facts
- GCS: Eye(4) + Verbal(5) + Motor(6) = 15; Severe <=8 → intubate
- Most common site of EDH: Temporal region (middle meningeal artery)
- EDH CT: Biconvex/lenticular (does NOT cross suture lines)
- SDH CT: Crescent-shaped (CAN cross suture lines)
- Lucid interval is classic for EDH (but only in 30-50% cases)
- Cushing triad: Hypertension + Bradycardia + Irregular respiration
- CPP = MAP - ICP; target CPP >60 mmHg
- Normal ICP: 5-15 mmHg; treat if >20 mmHg

## Common Exam Traps
- "Head injury + hypotension" → Look for OTHER injury (abdomen, pelvis, chest)
- "Bilateral fixed dilated pupils" → Central/transtentorial herniation
- "Ipsilateral pupil dilation + contralateral weakness" → Uncal herniation
- "Lucid interval then rapid deterioration" → EDH until proven otherwise

## CT Appearance Quick Reference
| Type | Shape | Crosses sutures | Vessel |
|------|-------|-----------------|--------|
| EDH | Biconvex | No | Middle meningeal artery |
| SDH | Crescent | Yes | Bridging veins |
| SAH | Blood in cisterns | N/A | Berry aneurysm |

## Basilar Skull Fracture Signs
- Battle sign: Bruising over mastoid (posterior fossa fracture)
- Raccoon eyes: Periorbital ecchymosis (anterior fossa fracture)
- CSF rhinorrhea (anterior fossa) or otorrhea (middle fossa)
- Halo sign: Double ring pattern of CSF + blood on filter paper`,
        mnemonics: [
          { text: "EDH: does NOT cross suture lines", explanation: "Dura is firmly attached at suture lines, preventing spread" },
          { text: "Battle + Raccoon = Basilar", explanation: "Battle sign (mastoid) and Raccoon eyes (periorbital) indicate basilar fracture" },
        ],
        keyPoints: [
          "EDH: biconvex CT, MMA, lucid interval, does NOT cross sutures",
          "SDH: crescent CT, bridging veins, CAN cross sutures",
          "GCS <=8 mandates intubation",
          "Cushing triad is a LATE sign of raised ICP",
          "Head injury alone does NOT cause hypotension - search for other injuries",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 28", edition: "6th" },
        ],
      },
      {
        layer: 5,
        slug: "head-injury-layer-5-active-recall",
        title: "Head Injury - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard Q&A for spaced repetition on head injury management.",
        contentMd: `# Active Recall - Head Injury

**Q1:** What is the GCS score threshold for severe head injury requiring intubation?
**A1:** GCS <=8 (Severe head injury). All patients with GCS <=8 require endotracheal intubation.

**Q2:** What artery is most commonly involved in extradural hematoma?
**A2:** Middle meningeal artery (from temporal bone fracture).

**Q3:** Describe the CT appearance of EDH vs SDH.
**A3:** EDH: Biconvex/lenticular (does NOT cross suture lines). SDH: Crescent-shaped (CAN cross suture lines).

**Q4:** What is the Monro-Kellie doctrine?
**A4:** The cranial vault has a fixed volume containing brain (80%), CSF (10%), and blood (10%). Increase in one must be compensated by decrease in another.

**Q5:** What is Cushing triad and what does it indicate?
**A5:** Hypertension + Bradycardia + Irregular respiration. It is a LATE sign of critically raised intracranial pressure.

**Q6:** What are the signs of basilar skull fracture?
**A6:** Battle sign (mastoid bruising), Raccoon eyes (periorbital ecchymosis), CSF rhinorrhea/otorrhea, hemotympanum.

**Q7:** What is the formula for cerebral perfusion pressure?
**A7:** CPP = MAP - ICP. Target CPP >60 mmHg.

**Q8:** What are the surgical indications for EDH evacuation?
**A8:** Thickness >15 mm, midline shift >5 mm, or GCS deterioration.

**Q9:** What type of herniation causes ipsilateral pupil dilation?
**A9:** Uncal (transtentorial) herniation - compression of CN III on the ipsilateral side.

**Q10:** Why is hypotension concerning in a head injury patient?
**A10:** Head injury alone rarely causes hypotension. Hypotension suggests another bleeding source (abdomen, pelvis, chest) and worsens secondary brain injury.

**Q11:** What is the first-line osmotherapy for raised ICP?
**A11:** Mannitol 20% (0.5-1 g/kg IV) or Hypertonic saline 3%.

**Q12:** What is the lucid interval and which condition is it classic for?
**A12:** Period of consciousness between initial concussion and subsequent deterioration. Classic for extradural hematoma (seen in 30-50% cases).`,
        mnemonics: [
          { text: "GCS severe: 3-8, moderate: 9-12, mild: 13-15", explanation: "Remember 8 is the critical threshold for intubation" },
          { text: "EDH: LENT (LENTicular shape, does NOT cross sutures)", explanation: "Biconvex/lenticular shape confined by dural attachment at sutures" },
        ],
        keyPoints: [
          "GCS <=8 = intubate; EDH = MMA, biconvex; SDH = bridging veins, crescent",
          "CPP = MAP - ICP; target >60 mmHg",
          "Cushing triad is a LATE sign - do not wait for it",
          "Hypotension + head injury → search for other bleeding source",
          "Mannitol 20% is first-line osmotherapy for acute raised ICP",
        ],
        textbookRefs: [
          { book: "SRB's Manual of Surgery", chapter: "Chapter 28", edition: "6th" },
          { book: "Bailey & Love's Short Practice of Surgery", chapter: "Chapter 19", edition: "28th" },
        ],
      },
    ],
  },
];
