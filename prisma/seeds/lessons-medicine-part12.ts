import type { TopicLessons } from "./content-loader";

export const medicineLessonsPartXX: TopicLessons[] = [
  {
    topicCode: "IM-MOD-07-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "neuropathy-gbs-layer-1-foundation",
        title: "Peripheral Neuropathy & GBS - Foundation",
        estimatedMinutes: 20,
        summary: "Peripheral nervous system anatomy, nerve fiber types, classification of neuropathies, axonal vs demyelinating distinctions, and common causes in Indian population.",
        contentMd: `# Peripheral Neuropathy & GBS - Foundation

## Peripheral Nervous System Anatomy

### Nerve Structure
- **Axon**: Conducts action potentials; varies in diameter (0.5-100 μm)
- **Myelin sheath**: Insulating layer; speeds conduction (saltatory conduction)
- **Node of Ranvier**: Gap between myelin segments (unmyelinated axons lack nodes)
- **Schwann cell**: Each wraps around single axon (myelinated) or groups unmyelinated axons
- **Endoneurium**: Connective tissue around individual axons
- **Perineurium**: Wraps fascicles; provides blood-nerve barrier
- **Epineurium**: Outermost sheath surrounding entire nerve

### Nerve Fiber Types

| Type | Diameter | Conduction | Functions | Myelination |
|------|----------|-----------|-----------|-------------|
| **A-alpha** | 70-120 μm | 70-120 m/s | Motor, proprioception | Heavily myelinated |
| **A-beta** | 30-70 μm | 30-70 m/s | Touch, pressure | Myelinated |
| **A-gamma** | 15-30 μm | 15-30 m/s | Motor (spindle) | Myelinated |
| **A-delta** | 5-12 μm | 5-30 m/s | Sharp pain, cold | Lightly myelinated |
| **B** | 1-3 μm | 3-15 m/s | Preganglionic autonomic | Myelinated |
| **C** | 0.5-1 μm | 0.5-2 m/s | Slow pain, warmth | Unmyelinated |

Memory: Large A-fibers are myelinated and fast; small C-fibers are unmyelinated and slow.

## Classification of Peripheral Neuropathies

### By Distribution Pattern:
1. **Mononeuropathy**: Single nerve affected (trauma, compression, vasculitis)
   - Example: Carpal tunnel (median), foot drop (common peroneal)
2. **Mononeuritis Multiplex**: Multiple individual nerves asymmetrically (vasculitis, sarcoidosis, leprosy)
3. **Polyneuropathy**: Bilateral, symmetrical, distal-to-proximal (diabetes, B12 deficiency, alcoholism)
   - Common in India: diabetes, nutritional, toxic

### By Pathophysiology:
1. **Demyelinating**: Affects myelin sheath; slows conduction; preserves axon
   - Myelin regenerates within weeks
   - Examples: GBS, CIDP, diphtheritic neuropathy
2. **Axonal**: Affects axon itself; results in degeneration
   - Slower recovery (weeks to months)
   - Examples: Diabetic neuropathy, toxic neuropathy, B12 deficiency

### By Onset:
1. **Acute**: GBS (days), toxic (hours-days)
2. **Subacute**: CIDP (weeks), nutritional deficiencies
3. **Chronic**: Diabetic neuropathy, hereditary (years)

## Common Causes in India

### Infectious:
- **Leprosy** (Hansen's disease): Most common cause globally; major public health issue in India
  - Affects peripheral nerves; thickened nerves palpable
  - Causes sensory-motor loss in stocking-glove distribution
- **TB**: Tuberculosis mononeuritis multiplex, spinal TB

### Metabolic:
- **Diabetes Mellitus**: Most common cause in developed countries; rapidly increasing in India
  - Type 2 DM more common
  - Affects A-delta and C fibers first
- **Malnutrition/Vitamin B12 deficiency**: Common in India
  - Vegetarian diet + pernicious anemia
  - Affects B12 absorption; causes paresthesias

### Toxic:
- **Alcoholism**: Common in India; causes nutritional + toxic neuropathy
- **Chemotherapy**: Cisplatin, vincristine, taxanes

### Autoimmune:
- **GBS** (Guillain-Barré Syndrome): Post-infectious; ascending paralysis
- **CIDP** (Chronic Inflammatory Demyelinating Polyneuropathy)

### Other:
- **Hereditary**: Charcot-Marie-Tooth disease (CMT)
- **Post-infectious**: After dengue, Zika, enteroviral infection (India endemic)

## Axonal vs Demyelinating: Key Differences

| Feature | Demyelinating | Axonal |
|---------|--------------|--------|
| **Site of lesion** | Myelin sheath | Axon |
| **Conduction velocity** | Markedly reduced (<20 m/s) | Mildly reduced |
| **Compound action potential** | Preserved amplitude, prolonged latency | Reduced amplitude |
| **Blocks** | Conduction block present | No conduction block |
| **Recovery** | Weeks (myelin regeneration) | Months (axonal regrowth, 1 mm/day) |
| **Examples** | GBS, CIDP | Diabetic, B12 deficiency |`,
        mnemonics: [
          { text: "ABC Fibers: A is myelinated and fast; B is preganglionic; C is unmyelinated and slow", explanation: "A-alpha 120 m/s, B autonomic, C pain 0.5-2 m/s" },
          { text: "Neuropathy Types: DMA", explanation: "Demyelinating (myelin affected), Mononeuropathy (single), Axonal (axon affected), Mononeuritis multiplex" },
          { text: "Common Indian Causes: LDD-B3A", explanation: "Leprosy, Diabetes, Deficiency (B12) | Alcohol, TB, Post-infectious" }
        ],
        keyPoints: [
          "Peripheral nerves consist of myelinated and unmyelinated axons organized into fascicles",
          "A-fibers are large, myelinated, fast; C-fibers are small, unmyelinated, slow",
          "Three distribution patterns: mononeuropathy (single), polyneuropathy (symmetrical), mononeuritis multiplex (asymmetrical multiple)",
          "Demyelinating neuropathies affect myelin; axonal neuropathies affect the axon itself",
          "Most common causes in India: leprosy, diabetes, B12 deficiency, alcoholism, TB",
          "Demyelinating lesions recover in weeks; axonal lesions recover in months (1 mm/day regrowth)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "427: Diseases of the Peripheral Nervous System", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "10: Neurology - Peripheral Neuropathies", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "26: Disorders of the Peripheral Nervous System", edition: "24th" }
        ]
      },

      {
        layer: 2,
        slug: "neuropathy-gbs-layer-2-mechanism",
        title: "Peripheral Neuropathy & GBS - Mechanism",
        estimatedMinutes: 30,
        summary: "Wallerian degeneration, segmental demyelination, GBS pathogenesis, molecular mimicry, anti-ganglioside antibodies, diabetic neuropathy mechanisms, and nerve conduction study basics.",
        contentMd: `# Peripheral Neuropathy & GBS - Mechanism

## Wallerian Degeneration vs Segmental Demyelination

### Wallerian Degeneration (Axonal)
**Process**: When axon is completely severed or dies, the distal segment degenerates.

1. **Phase 0-6 hours**: Minimal change; structural continuity lost
2. **Phase 1-3 days**:
   - Axon degenerates distal to injury
   - Myelin sheath breaks down
   - Schwann cells activate
3. **Phase 1-3 weeks**:
   - Macrophages invade, clear debris (phagocytosis)
   - Schwann cells proliferate, form "bands of Büngner" (guide for regenerating axon)
   - Axon sprouts from proximal stump (regeneration at 1 mm/day)
4. **Phase 3-6 months**: Slow axonal regrowth along bands of Büngner

**Clinical consequence**: Recovery takes months; permanent loss if axon severely damaged.

### Segmental Demyelination (Demyelinating)
**Process**: Myelin sheath damaged but axon remains intact.

1. **Acute phase**:
   - Myelin lamellae disrupted
   - Inflammation around myelin sheath
   - Conduction blocked at site of demyelination
2. **Remyelination phase (days-weeks)**:
   - Schwann cells proliferate
   - New myelin laid down (internodal distance shorter, less mature)
   - Conduction restored
3. **Recovery phase (weeks)**:
   - Full restoration of function
   - Shorter internodal distances persist (mild prolongation of latencies)

**Clinical consequence**: Recovery rapid (days-weeks); conduction block resolves quickly.

## GBS Pathogenesis: Guillain-Barré Syndrome

### Triggers:
1. **C. jejuni infection**: Most common; serotypes O19 and O41 have ganglioside-like epitopes
2. **Other infections**: Campylobacter, EBV, CMV, Zika, dengue (in India), Mycoplasma
3. **Vaccinations**: Flu vaccine, HPV vaccine (rare)
4. **Surgery/trauma**: Trigger immune response

### Molecular Mimicry Mechanism:
1. **Pathogen epitopes resemble nerve gangliosides**: Bacterial LPS of C. jejuni mimics GM1, GD1a gangliosides
2. **Immune response priming**: T cells and B cells activated against bacterial antigen
3. **Cross-reactivity**: Antibodies recognize similar ganglioside epitopes on nerve
4. **Nerve attack**: Anti-ganglioside antibodies target nerve membrane

### Pathophysiology:
1. **Antibody-mediated demyelination**: IgG and IgM against myelin proteins and gangliosides
   - Anti-GQ1b: Miller Fisher variant
   - Anti-GM1: AMAN variant
   - Anti-MADSAM: Multifocal acquisition of conduction blocks
2. **Complement activation**: C3, C5 lead to myelin lysis
3. **Macrophage infiltration**: Around myelin sheaths (demyelination)
4. **Conduction block**: At demyelinated segments; loss of saltatory conduction

### Types of GBS:

| Variant | Mechanism | Features | Frequency |
|---------|-----------|----------|-----------|
| **AIDP** (Acute Inflammatory Demyelinating Polyneuropathy) | Demyelinating | Ascending paralysis, areflexia, respiratory involvement | 90% worldwide |
| **AMAN** (Acute Motor Axonal Neuropathy) | Axonal | Motor-only, serotypes O19/O41, faster recovery | 5-10% worldwide, higher in Asia |
| **AMSAN** (Acute Motor-Sensory Axonal Neuropathy) | Axonal | Motor + sensory axonal damage | 5% |
| **Miller Fisher** (MFS) | Demyelinating | Ophthalmoplegia, ataxia, areflexia (NOT paralysis) | 5% worldwide |

## Chronic Inflammatory Demyelinating Polyneuropathy (CIDP)

**Mechanism**: Similar to GBS but chronic; T-cell mediated rather than antibody-mediated.
- Progressive demyelination over weeks to months
- Recurrent episodes
- Treatment: Corticosteroids, IVIG, plasmapheresis

## Diabetic Neuropathy Mechanisms

### Metabolic Mechanisms:

1. **Polyol Pathway Hyperactivity**:
   - Excess glucose → glucose reduced to sorbitol by aldose reductase
   - Sorbitol accumulates in Schwann cells (cannot cross cell membrane)
   - Osmotic stress → cell damage, myelin breakdown
   - Depletion of NADPH → impaired myelin synthesis

2. **Advanced Glycation End Products (AGEs)**:
   - Hyperglycemia → glucose reacts with amino groups (non-enzymatic)
   - Forms AGEs (irreversible cross-links)
   - Cross-links on collagen, proteins in basement membrane
   - Myelin stiffness, reduced conduction

3. **Oxidative Stress**:
   - Hyperglycemia → ↑ ROS production (mitochondrial)
   - Depletion of antioxidants (superoxide dismutase, catalase)
   - Free radical damage to myelin, axons

4. **Microvascular Dysfunction**:
   - Thickened basement membrane
   - Endothelial dysfunction; reduced blood flow
   - Ischemia of nerve → demyelination

### Result:
- **Small fiber neuropathy first**: C-fibers and A-delta affected initially (pain, temperature sensation)
- **Large fiber involvement later**: A-fibers affected (weakness, proprioception loss)
- **Predominantly axonal damage** (some demyelination)

## Nerve Conduction Studies (NCS) - Basics

### Measurement Technique:
- **Stimulating electrode**: Applied to skin over nerve; depolarizes axons
- **Recording electrode**: Over muscle (CMAP) or sensory nerve (SNAP)
- **Parameters measured**:
  1. **Amplitude**: Height of action potential (μV or mV) - reflects axon count
  2. **Conduction velocity**: Distance / time (m/s) - reflects myelin integrity
  3. **Latency**: Time from stimulus to response (ms) - reflects entire conduction path
  4. **F-wave**: Antidromic conduction to motor neuron, reflects proximal conduction

### NCS Findings in Demyelination (GBS):
- ↓ Conduction velocity (<50% normal)
- ↑ Distal latency (>150% normal)
- Conduction blocks (sudden drop in CMAP amplitude)
- Preserved CMAP amplitude (axons intact)
- Prolonged F-wave latency

### NCS Findings in Axonal Damage:
- ↓ CMAP or SNAP amplitude (axons lost)
- Conduction velocity mildly reduced (not markedly)
- No conduction blocks
- May have denervation potentials on EMG

### Electrodiagnostic Criteria for GBS:
- Slowing in 2+ nerves: CV <80% predicted, distal latency >120% predicted
- Conduction block in 1+ nerve (demyelinating)
- Prolonged F-wave latency
- Absence of denervation (differentiates from axonal)`,
        mnemonics: [
          { text: "Wallerian vs Segmental: Wallerian=weeks (axon dies), Segmental=days (myelin recovers)", explanation: "Complete axon injury takes months to recover; demyelination recovers in days-weeks" },
          { text: "GBS Pathogenesis: CIM", explanation: "Campylobacter (molecular mimicry) → Immune response → Myelin attack" },
          { text: "GBS Types: AIDP=90% demyelinating, AMAN=axonal, MFS=ophthalmoplegia", explanation: "AIDP most common; AMAN in Asia; Miller Fisher = ataxia+ophthalmoplegia" },
          { text: "Diabetic Neuropathy: PAGERS", explanation: "Polyol pathway, AGE, ROS, ER stress, Sorbitol" },
          { text: "NCS Demyelination: Slow-Block-Preserve", explanation: "Slowed velocity, conduction Blocks, Amplitude Preserved (axons intact)" }
        ],
        keyPoints: [
          "Wallerian degeneration: axon dies distally; recovery slow (months) via axonal regrowth at 1 mm/day",
          "Segmental demyelination: myelin sheath damaged; recovery fast (days-weeks) via remyelination",
          "GBS pathogenesis: post-infectious (Campylobacter jejuni), molecular mimicry of gangliosides, antibody + complement-mediated demyelination",
          "GBS variants: AIDP (90%, demyelinating, ascending), AMAN (5-10%, axonal, Asia-prevalent), Miller Fisher (ophthalmoplegia, ataxia)",
          "Diabetic neuropathy: polyol pathway, AGE cross-links, oxidative stress, microvascular disease cause axonal damage",
          "Small C-fibers affected first in diabetes (pain sensation), large A-fibers later (weakness, proprioception)",
          "NCS in demyelination: slowed velocity, conduction blocks, preserved amplitude; NCS in axonal: reduced amplitude, no blocks"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "427: Peripheral Neuropathies & 428: Guillain-Barré Syndrome", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "10: Neurological Disorders - Peripheral Neuropathies", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "26: Peripheral Nervous System Disorders", edition: "24th" }
        ]
      },

      {
        layer: 3,
        slug: "neuropathy-gbs-layer-3-clinical",
        title: "Peripheral Neuropathy & GBS - Clinical",
        estimatedMinutes: 25,
        summary: "GBS clinical features, ascending paralysis, autonomic dysfunction, respiratory failure, GBS variants, albuminocytological dissociation, NCS/EMG findings, treatment modalities, and Indian neuropathy contexts.",
        contentMd: `# Peripheral Neuropathy & GBS - Clinical

## Guillain-Barré Syndrome (GBS): Clinical Presentation

### Prodrome (1-4 weeks before onset):
- **Viral symptoms**: Fever, URI symptoms, diarrhea (especially Campylobacter)
- Timing varies: may be days to weeks before neurological symptoms

### Acute Phase (Days 1-4):
- **Onset**: Rapid (hours to days), bilateral, symmetrical
- **Progression**: Ascending (legs → trunk → arms → cranial nerves → respiratory)
- **Speed**: Peak weakness usually by day 7-10
- **Paralysis pattern**:
  - Feet → legs → thighs → buttocks → trunk → hands
  - Proximal muscles often more affected than distal

### Motor Features:
1. **Ascending Paralysis**: Lower limbs affected first
   - Difficulty walking → wheelchair → bedbound within days
   - Proximal muscles may be more severely affected
2. **Severity**: Ranges from mild weakness to complete paralysis (5-10% require ventilator)
3. **Muscles**: All voluntary muscles affected; proximal > distal in some

### Sensory Features:
- Usually mild or absent (pain/paresthesias common initially)
- Stocking-glove distribution of paresthesias
- Proprioception may be mildly affected
- **Most important**: Sensory level absent (differentiates from spinal cord lesion)

### Reflexes:
- **Areflexia**: Loss of deep tendon reflexes, particularly early sign
- Universally present by clinical diagnosis
- Helps differentiate from myopathy (preserved reflexes in myopathy)

### Autonomic Dysfunction (10-30% of patients):
**Cardiovascular:**
- Tachycardia, bradycardia (parasympathetic dysfunction)
- Hypertension or hypotension (labile BP)
- Arrhythmias, sudden cardiac death (rare)
- Orthostatic hypotension

**Other:**
- Urinary retention
- Constipation/diarrhea
- Pupillary changes
- Anhidrosis or hyperhidrosis

### Respiratory Involvement:
- **Critical**: Occurs in 25-30% of severe cases
- Diaphragmatic weakness → need for mechanical ventilation
- Assess: FVC (forced vital capacity), NIF (negative inspiratory force)
- Intubation criteria: FVC <15 mL/kg or NIF >-30 cm H2O

### Cranial Nerve Involvement:
- **Facial weakness**: Bilateral in 50% (CN VII)
- **Oculomotor involvement**: Less common (CN III, IV, VI)
- **Bulbar symptoms**: Dysarthria, dysphagia in severe cases
- **Miller Fisher Variant**: Ophthalmoplegia, ataxia, areflexia (NOT paralysis)

## GBS Variants

### AIDP (Acute Inflammatory Demyelinating Polyneuropathy)
- **Frequency**: 90% worldwide; 60-70% in Asia
- **Mechanism**: Demyelinating (antibodies against myelin proteins)
- **Features**: Ascending paralysis, areflexia, preserved sensory
- **NCS**: Demyelination pattern (slowing, blocks)
- **Recovery**: Good; 80% independent at 3 months

### AMAN (Acute Motor Axonal Neuropathy)
- **Frequency**: 5-10% worldwide; 30% in Asia/China
- **Mechanism**: Axonal (anti-GM1, anti-GD1a antibodies)
- **Features**: Pure motor involvement; preserved sensory
- **NCS**: Axonal pattern (reduced CMAP, no blocks)
- **Trigger**: Campylobacter serotypes O19, O41
- **Recovery**: Variable; sometimes worse prognosis than AIDP

### AMSAN (Acute Motor-Sensory Axonal Neuropathy)
- **Frequency**: 5% worldwide
- **Mechanism**: Axonal (motor and sensory)
- **Features**: Motor + sensory deficits
- **Prognosis**: Worse than AIDP

### Miller Fisher Syndrome (MFS)
- **Frequency**: 5% worldwide
- **Triad**: Ophthalmoplegia + ataxia + areflexia
- **Features**: NO paralysis (differentiates from GBS)
  - All cranial nerve involvement (CN III, IV, VI)
  - Ataxia from sensory loss (proprioception)
  - Preserved limb strength
- **Antibodies**: Anti-GQ1b (100%)
- **Recovery**: Excellent, rapid (2-4 weeks)

## CSF Findings: Albuminocytological Dissociation
**Classic finding in GBS**:
- **Protein**: ↑↑ elevated (100-1000 mg/dL; normal <45)
- **Cell count**: Normal or mildly elevated (<10 cells/μL; normal <5)
- **Glucose**: Normal
- **Timing**: Protein rises over first 1-2 weeks; peaks week 3-4

Why? Demyelination with blood-nerve barrier breakdown → protein leaks in; immune cells less prominent.

## Nerve Conduction Studies (NCS) in GBS

### Findings in AIDP (Demyelinating):
- ↓ Conduction velocity in 2+ nerves (<80% predicted)
- ↑ Distal latency (>120% normal)
- **Conduction blocks**: Key finding in 50% at presentation, increases to 80% by week 3
  - Block defined as >50% amplitude reduction across short segment
- Prolonged F-wave latency (>120% predicted)
- Preserved CMAP amplitude initially (axons intact)
- Progressive changes over first 3-4 weeks

### Findings in AMAN (Axonal):
- ↓ CMAP amplitude (reduced, not slowed)
- Conduction velocity normal or mildly reduced
- No conduction blocks
- No F-wave prolongation
- Motor nerve fibers damaged

### Early NCS:
- May be normal in first 3 days
- Abnormalities peak week 2-3
- Serial NCS more useful than single study

## EMG Findings:
- **Acute phase**: Motor unit action potentials (MUAPs) present
- **Denervation (in AMAN/AMSAN)**: Fibrillation potentials, positive waves
- **No denervation in AIDP** (myelin intact)

## Acute Management of GBS

### Immediate:
1. **Respiratory monitoring**: FVC daily; intubate if FVC <15 mL/kg
2. **ICU care**: Autonomic monitoring, cardiac monitoring (arrhythmia risk)
3. **Supportive care**: DVT prophylaxis, nutrition, pain management

### Specific Treatment:
1. **IVIG** (Intravenous Immunoglobulin): Standard treatment
   - **Dose**: 2 g/kg over 3-5 days (400 mg/kg/day)
   - **Mechanism**: Anti-idiotype antibodies, blocks B-cell/complement
   - **Timing**: Most effective if started within 2 weeks
   - **Efficacy**: 50% improvement in disability score

2. **Plasma Exchange** (Plasmapheresis):
   - **Efficacy**: Equivalent to IVIG (removes antibodies, cytokines)
   - **Limitation**: Requires vascular access, more cumbersome
   - **Use**: When IVIG unavailable or contraindicated
   - **Dose**: 40-50 mL/kg x 5 exchanges

3. **Combinations**: IVIG + plasmapheresis may be better than either alone
4. **Corticosteroids**: NOT effective; may worsen outcomes
5. **No clear benefit**: Anticoagulation, immunosuppression

## Peripheral Neuropathy - Indian Contexts

### Leprosy Neuropathy (Hansen's Disease)
**Epidemiology**: India still endemic; ~120,000 cases annually

**Pathophysiology**:
- *Mycobacterium leprae* infects Schwann cells and macrophages
- Direct nerve invasion causes demyelination and axonal loss
- Immune-mediated inflammation (Type 1, Type 2 reactions)

**Clinical Features**:
- **Palpable thickened nerves**: Ulnar, posterior tibial, great auricular
- **Glove-stocking sensory loss**: Early sign
- **Motor deficits**: Radial nerve (wrist drop), ulnar (claw hand), peroneal (foot drop)
- **Diagnostic**: Hypopigmented/erythematous skin lesions with sensory loss + thickened nerves

**Types**:
- Tuberculoid: Few lesions, localized neuropathy
- Lepromatous: Many lesions, diffuse involvement
- Borderline: Intermediate

### Diabetic Neuropathy in India
**Rising prevalence**: India has highest absolute number of diabetics globally

**Types**:
1. **Distal Sensorimotor Polyneuropathy**: Most common (90%)
   - Distal > proximal; lower limbs > upper
   - Paresthesias, pain, eventually anesthesia
2. **Autonomic Neuropathy**: Orthostatic hypotension, GI, urinary dysfunction
3. **Mononeuropathies**: Cranial nerves, radiculopathies
4. **Focal Entrapment**: Carpal tunnel, tarsal tunnel

**Prevention**: Tight glycemic control (HbA1c <7%) reduces risk by 75%

### B12 Deficiency Neuropathy (India Endemic)
**Causes**: Vegetarian diet, pernicious anemia, gastrectomy, fish tapeworm

**Pathophysiology**:
- B12 required for methylation reactions
- Deficiency → impaired myelin synthesis
- Affects dorsal columns and lateral corticospinal tracts primarily

**Features**:
- **Paresthesias**: Hands, feet (stocking-glove)
- **Ataxia**: From posterior column involvement (proprioception loss)
- **Spasticity**: From corticospinal tract involvement
- **Subacute combined degeneration**: Classic triad

**Diagnosis**: ↓ B12 (<200 pmol/L), ↑ MMA, ↑ homocysteine

**Treatment**: B12 replacement (IM cyanocobalamin); if treated early, recovery good

### Alcoholic Neuropathy
**Common in India**: Male predominance; mixed nutritional + toxic

**Mechanism**: Thiamine deficiency + direct ethanol toxicity

**Features**:
- Distal sensorimotor polyneuropathy
- Often painful
- Can be reversible if alcohol stopped early`,
        mnemonics: [
          { text: "GBS Progression: FLEARs", explanation: "Feet (legs) → Limbs → Elemental weakness → Ascending → Respiratory (FVC)" },
          { text: "GBS Diagnosis: Ascending + Areflexia + AlbuminoC", explanation: "Ascending paralysis + absent reflexes + CSF protein elevated with normal cells" },
          { text: "GBS Variants: AIDP=90%, AMAN=Asia, Miller Fisher=MFA", explanation: "AIDP most common; AMAN has anti-GM1; Miller Fisher has ophthalmoplegia+ataxia" },
          { text: "GBS Treatment: IVIG vs Plasma in days-weeks", explanation: "IVIG 2g/kg or plasmapheresis; both equivalent; start within 2 weeks" },
          { text: "Indian Neuropathies: LDD-AB", explanation: "Leprosy, Diabetes, Deficiency (B12) | Alcohol, TB endemic" }
        ],
        keyPoints: [
          "GBS: acute ascending paralysis + areflexia after infection (C. jejuni, viral); peak weakness days 7-10",
          "Autonomic dysfunction in 10-30%: labile BP, arrhythmias, urinary retention; 25-30% need ventilator",
          "Miller Fisher variant: ophthalmoplegia+ataxia+areflexia but NO paralysis; anti-GQ1b positive",
          "Albuminocytological dissociation: CSF protein ↑↑ (100-1000) with normal cells; classic for GBS",
          "AIDP (90%): demyelinating, good prognosis; AMAN (Asia): axonal, anti-GM1 antibodies; MFS: excellent recovery",
          "Conduction blocks on NCS: key finding in demyelinating GBS; absent in axonal variants",
          "IVIG 2 g/kg or plasmapheresis: both equivalent; start within 2 weeks; corticosteroids contraindicated",
          "Leprosy in India: palpable thickened nerves + hypopigmented lesions; direct Schwann cell invasion",
          "Diabetic neuropathy: small C-fibers first; tight glycemic control reduces risk 75%",
          "B12 deficiency: causes dorsal column disease; paresthesias + ataxia + spasticity; India endemic"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "428: Guillain-Barré Syndrome", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "10: Guillain-Barré Syndrome & Peripheral Neuropathies", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "26: Guillain-Barré Syndrome", edition: "24th" }
        ]
      },

      {
        layer: 4,
        slug: "neuropathy-gbs-layer-4-exam",
        title: "Peripheral Neuropathy & GBS - Exam Prep",
        estimatedMinutes: 20,
        summary: "Comprehensive exam-focused review covering NEXT-pattern MCQs, clinical vignettes, differential diagnoses of acute flaccid paralysis, NCS interpretation, and key examination questions.",
        contentMd: `# Peripheral Neuropathy & GBS - Exam Preparation

## Differential Diagnosis of Acute Flaccid Paralysis (AFP)

### Neurological Causes:

1. **GBS (Guillain-Barré Syndrome)**
   - **Features**: Ascending, areflexia, albuminocytological dissociation
   - **NCS**: Demyelination (blocks, slowing)
   - **Recovery**: Days-weeks from peak
   - **Key discriminator**: Post-infectious prodrome, demyelinating pattern

2. **Spinal Cord Disorders** (differentiate from GBS)
   - **Poliomyelitis**: Anterior horn cell damage → asymmetrical, preserved sensation
   - **Spinal cord compression**: Sensory level, saddle anesthesia, preserved reflexes above level
   - **Transverse myelitis**: Sensory level, retained reflexes, autonomic dysfunction (bowel/bladder)

3. **Motor Neuron Disease (MND)**
   - **Features**: Chronic onset; mixed upper + lower motor neuron signs
   - **NCS**: Denervation without demyelination
   - **Timing**: Weeks-months, not acute

4. **Myasthenia Gravis**
   - **Features**: Fluctuating weakness, better with rest; ocular involvement
   - **Reflexes**: Preserved (NMJ disorder, not nerve)
   - **NCS**: Normal; EMG shows brief MUAP duration

5. **Myopathy** (Toxic, Inflammatory)
   - **Features**: Proximal > distal; reflexes preserved early
   - **CK**: ↑ elevated
   - **NCS/EMG**: Short duration MUAP (myopathic pattern)

### Non-Neurological Causes:
- **Severe hypokalemia**: Weakness with preserved reflexes; ECG changes
- **Hypophosphatemia, hypomagnesemia**: Similar presentation
- **Botulism**: Descending paralysis (unlike GBS); fixed pupils; autonomic

## High-Yield GBS Facts for Exams

### Diagnostic Criteria:
- **Progressive weakness** in limbs + trunk (usually ascending)
- **Areflexia** (essential; if not present, diagnose with caution)
- **Minimal or absent sensory signs**
- **Features suggestive of demyelination** on NCS/EMG OR **albuminocytological dissociation**

### CSF Findings (NOT always done; not essential for diagnosis):
- **Protein**: 45-400+ mg/dL (↑↑)
- **Cells**: <10/μL (normal; may be slightly elevated)
- **Glucose**: Normal (normal CSF glucose)
- **Sterile**: Culture/gram stain negative
- **Timing**: Protein may be normal in first week; peaks week 3-4

### NCS/EMG Criteria for Demyelination:
1. **Slowing** in 2+ nerves: CV <80% predicted, distal latency >120%
2. **Conduction blocks** in 1+ nerve (50% reduction over short segment)
3. **Prolonged F-wave latency** (>120% normal)
4. **Preserved compound action potential amplitude** (axons intact)
5. **Absence of denervation** on EMG (no fibrillations in AIDP)

### Prognosis Indicators:
- **Good prognosis**: Demyelinating (AIDP), motor-only, young age, rapid recovery onset
- **Poor prognosis**: Axonal (AMAN/AMSAN), age >60, respiratory involvement, antecedent cancer
- **Mortality**: 3-5% (respiratory failure, arrhythmias); 80% walk independently by 3 months if AIDP

## Exam Vignettes

### Case 1: Classic GBS
**Scenario**: 25-year-old male with diarrhea 2 weeks ago. Now presents with inability to walk; ascending weakness over 3 days. On exam: weak legs and arms; no reflexes bilaterally; normal sensation; normal cranial nerves.
**Question**: Most likely diagnosis and next step?
**Answer**: GBS (AIDP). NCS to confirm demyelination. IVIG 2 g/kg IV over 3-5 days.
**High-yield point**: Post-infectious prodrome + ascending + areflexia + preserved sensation = classic GBS

### Case 2: Miller Fisher Variant
**Scenario**: 30-year-old with bilateral eye movement abnormalities (ophthalmoplegia), unsteady gait (ataxia), but NO weakness in limbs. Absent reflexes.
**Question**: Diagnosis?
**Answer**: Miller Fisher syndrome. Anti-GQ1b antibodies. NCS shows demyelination (or normal). Prognosis excellent.
**High-yield point**: Triad of ophthalmoplegia + ataxia + areflexia WITHOUT paralysis = Miller Fisher (not GBS)

### Case 3: Diabetic Polyneuropathy
**Scenario**: 55-year-old with diabetes x10 years (HbA1c 9%). Complains of tingling in feet for 6 months, progressive. On exam: stocking-glove sensory loss; weak ankle dorsiflexion; absent reflexes (except knee jerk).
**Question**: Type of neuropathy?
**Answer**: Distal sensorimotor polyneuropathy (axonal). NCS shows reduced CMAP/SNAP amplitudes. Tight glycemic control.
**High-yield point**: Distal > proximal; small fibers first (pain/temperature); large fibers later (weakness)

### Case 4: Leprosy Neuropathy (India)
**Scenario**: 35-year-old with 3 hypopigmented skin lesions + anesthesia in those patches. On exam: palpable thickened ulnar nerve; weakness in ulnar distribution (claw hand); posterior tibial nerve also thickened.
**Question**: Diagnosis? Nerve conduction?
**Answer**: Leprosy (tuberculoid form); axonal neuropathy from direct nerve invasion. Treat with MDT (multi-drug therapy).
**High-yield point**: Palpable thickened nerves + hypopigmented lesions = leprosy until proven otherwise (India)

### Case 5: Spinal Cord vs GBS
**Scenario**: 40-year-old with acute paraplegia; sensory loss up to T10 level; hyperreflexia below level; absent anal reflex.
**Question**: GBS or spinal cord?
**Answer**: Spinal cord compression (sensory level, hyperreflexia, sphincter involvement). NOT GBS.
**High-yield point**: Sensory level + hyperreflexia = spinal cord; GBS has areflexia + no sensory level

## NCS Interpretation Quick Reference

### Pattern Recognition:

**Demyelinating (GBS-AIDP, CIDP):**
- Slow CV + Blocks + Prolonged latencies + Preserved amplitude
- **EMG**: No denervation

**Axonal (Diabetic, AMAN):**
- Reduced amplitude + No blocks + Mildly slow CV
- **EMG**: May have denervation (fibrillations)

**Myopathic (Muscular dystrophy, myositis):**
- Normal CV + Short duration MUAP + No denervation (if acute)
- **EMG**: Brief MUAP

### Key Measurements:
- **CV < 50 m/s**: Severe demyelination
- **Amplitude < 20% of lower limit normal**: Significant axonal loss
- **Distal latency > 150% normal**: Marked demyelination
- **Conduction block**: >50% CMAP reduction across segment

## Medication Doses (India-Relevant)

### IVIG for GBS:
- **Dose**: 2 g/kg total body weight, divided over 3-5 days
  - 400 mg/kg/day x 5 days OR 1 g/kg on days 1-2
- **Cost**: High; limited availability in many Indian centers

### Plasma Exchange:
- **Dose**: 40-50 mL/kg per exchange
- **Exchanges**: 5 exchanges over 1-2 weeks
- **Advantage**: More available; lower cost
- **Disadvantage**: Need vascular access; more cumbersome

### B12 Replacement:
- **Cyanocobalamin IM**: 1000 mcg weekly x 8 weeks, then monthly
- **Folic acid**: Often given together (synergistic effect)

## Common Exam Questions Patterns

**Pattern 1: Clinical Diagnosis**
- Ascending paralysis + areflexia → GBS
- Ophthalmoplegia without paralysis → Miller Fisher
- Palpable thickened nerves → Leprosy
- Sensory level + hyperreflexia → Spinal cord

**Pattern 2: NCS Interpretation**
- Demyelination blocks vs axonal loss
- Which nerve is affected based on EMG

**Pattern 3: Management**
- IVIG vs plasma exchange
- When to intubate (FVC <15 mL/kg)
- Ventilator weaning criteria

**Pattern 4: Complications**
- Autonomic: arrhythmias, hypotension
- Respiratory: need for ICU
- Secondary: DVT, infection`,
        mnemonics: [
          { text: "Acute Paralysis DDx: GBS vs Spinal vs Motor Neuron", explanation: "GBS: ascending + areflexia + no level | Spinal: level + hyperreflexia | MND: chronic + mixed UMN/LMN" },
          { text: "GBS Diagnosis: AAA", explanation: "Ascending paralysis, Areflexia, Albuminocytological dissociation" },
          { text: "Miller Fisher: MFA", explanation: "Motionless eyes (ophthalmoplegia), ataxia, areflexia — NO paralysis" },
          { text: "NCS Demyelination: SBP", explanation: "Slowing, conduction Blocks, amplitude Preserved" },
          { text: "NCS Axonal: RAD", explanation: "Reduced amplitude, no blocks, mildly reduced conduction Distance/time" }
        ],
        keyPoints: [
          "GBS diagnosis: ascending paralysis + areflexia + minimal sensory signs + albuminocytological dissociation",
          "Demyelinating GBS: conduction blocks on NCS; good prognosis; 80% walk independent by 3 months",
          "Axonal GBS (AMAN): anti-GM1 antibodies; more common in Asia; variable prognosis",
          "Miller Fisher: ophthalmoplegia + ataxia + areflexia WITHOUT paralysis; anti-GQ1b; excellent prognosis",
          "Spinal cord vs GBS: sensory level + hyperreflexia + sphincter = spinal cord; areflexia + no level = GBS",
          "IVIG 2 g/kg over 3-5 days or plasmapheresis: both equivalent; start within 2 weeks of symptom onset",
          "Intubation criteria: FVC <15 mL/kg or NIF >-30 cm H2O; 25-30% require mechanical ventilation",
          "NCS interpretation: demyelination has blocks + slowing; axonal has reduced amplitude",
          "Diabetic neuropathy: axonal type; tight glycemic control (HbA1c <7%) reduces risk",
          "Leprosy neuropathy: palpable thickened nerves + hypopigmented lesions; India endemic; treat with MDT"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "428: Guillain-Barré Syndrome", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "10: GBS & Peripheral Neuropathy", edition: "11th" },
          { book: "Neurology MCQ Books: NEET-PG Pattern", chapter: "Peripheral Neuropathy & GBS", edition: "Latest" }
        ]
      },

      {
        layer: 5,
        slug: "neuropathy-gbs-layer-5-active-recall",
        title: "Peripheral Neuropathy & GBS - Active Recall",
        estimatedMinutes: 15,
        summary: "Flashcard-based active recall for rapid learning and retention of critical GBS and neuropathy concepts.",
        contentMd: `# Peripheral Neuropathy & GBS - Active Recall Flashcards

**Q1: What is the classic presentation of Guillain-Barré syndrome?**
A: Ascending bilateral paralysis (legs → arms → trunk) with areflexia (absent reflexes) over 3-14 days, often preceded by gastrointestinal or respiratory infection 1-4 weeks prior. No fever. Paresthesias common but objective sensory loss minimal.

**Q2: What is albuminocytological dissociation and why is it important in GBS?**
A: CSF finding with markedly elevated protein (100-1000 mg/dL) but normal or mildly elevated cell count (<10/μL). Represents demyelination with blood-nerve barrier breakdown. Classic for GBS but may be absent in first week.

**Q3: Name the main GBS variants and their distinguishing features.**
A: AIDP (90% worldwide): demyelinating, best prognosis. AMAN (5-10%, higher in Asia): axonal, anti-GM1 antibodies. AMSAN: motor-sensory axonal. Miller Fisher: ophthalmoplegia + ataxia + areflexia WITHOUT paralysis, anti-GQ1b.

**Q4: What are the respiratory failure criteria in GBS and when to intubate?**
A: Monitor FVC (forced vital capacity) daily. Intubate if FVC <15 mL/kg or NIF (negative inspiratory force) >-30 cm H2O. 25-30% of severe GBS cases require mechanical ventilation.

**Q5: Explain the autonomic dysfunction in GBS and its clinical importance.**
A: 10-30% develop autonomic involvement: tachycardia, bradycardia, hypertension, hypotension, arrhythmias (including sudden cardiac death), urinary retention. Requires ICU monitoring; vasopressor support may be needed. Important cause of mortality.

**Q6: What is molecular mimicry in GBS and how does it relate to C. jejuni?**
A: Campylobacter jejuni serotypes O19 and O41 have ganglioside-like lipopolysaccharides (LPS) on their surface. Immune system makes antibodies against bacterial antigen, which cross-react with nerve gangliosides (GM1, GD1a, GQ1b), leading to demyelination.

**Q7: How do conduction blocks appear on NCS and why are they specific for demyelination?**
A: Conduction block is >50% reduction in CMAP amplitude when stimulus applied distal vs proximal to block site. Specific for demyelination because intact axons can conduct impulses around demyelinated segment. Absent in axonal neuropathies.

**Q8: Compare and contrast segmental demyelination vs Wallerian degeneration.**
A: Demyelination: myelin sheath damaged, axon intact; recovery in days-weeks via myelin regeneration. Wallerian: axon dies distally; recovery slow (months) via axonal regrowth at 1 mm/day. GBS is demyelination; severe trauma is Wallerian.

**Q9: What are the mechanisms of diabetic neuropathy?**
A: Four mechanisms: (1) Polyol pathway hyperactivity → sorbitol accumulation → osmotic stress. (2) Advanced glycation end products (AGEs) → protein cross-links → stiffness. (3) Oxidative stress → ROS → free radical damage. (4) Microvascular dysfunction → nerve ischemia.

**Q10: Why are small fibers (C-fibers) affected before large fibers in diabetic neuropathy?**
A: Small unmyelinated C-fibers have high metabolic demand and are supplied by small blood vessels with poor collateral circulation. Ischemia and metabolic dysfunction affect small fibers first; large myelinated A-fibers (motor, proprioception) affected later.

**Q11: What is the treatment approach to acute GBS and what is the evidence?**
A: IVIG (2 g/kg over 3-5 days) or plasmapheresis (40-50 mL/kg, 5 exchanges) are first-line; both equally effective. Start within 2 weeks of symptom onset. Combination may be superior. Corticosteroids contraindicated (worsen outcomes). Supportive care critical.

**Q12: Compare AIDP and AMAN: which has better prognosis and why?**
A: AIDP has better prognosis because demyelination recovers faster (myelin regenerates in weeks); 80% independent at 3 months. AMAN is axonal; axonal recovery slower (regrowth 1 mm/day); variable prognosis; sometimes worse outcomes.

**Q13: What is Miller Fisher syndrome and how does it differ from typical GBS?**
A: Miller Fisher: ophthalmoplegia (CN palsies), ataxia (from sensory loss), areflexia — but NO paralysis. Bilateral eye movement problems are hallmark. Anti-GQ1b antibodies 100%. Prognosis excellent, recovery rapid (2-4 weeks).

**Q14: Describe the typical NCS findings in demyelinating GBS (AIDP).**
A: Slowed conduction velocity <80% predicted; distal latency >120% normal; conduction blocks (50% amplitude drop) in 1+ nerve; preserved CMAP amplitude (axons intact); prolonged F-wave latency. Denervation potentials ABSENT on EMG (axons preserved).

**Q15: What are the NCS findings in axonal GBS (AMAN) and how do they differ from AIDP?**
A: Reduced CMAP or SNAP amplitude (axons lost); conduction velocity normal or only mildly reduced; NO conduction blocks; F-waves normal or mildly prolonged; may have denervation potentials on EMG (fibrillations). Motor nerves primarily affected.

**Q16: Describe leprosy neuropathy in the Indian context.**
A: Mycobacterium leprae invades nerves; causes demyelination and axonal loss. Clinical: palpable thickened nerves (ulnar, posterior tibial); stocking-glove sensory loss; motor deficits (radial nerve wrist drop, ulnar claw hand, peroneal foot drop). Hypopigmented or erythematous skin lesions with anesthesia. Treat with multi-drug therapy (MDT).

**Q17: What is the pathophysiology of B12 deficiency neuropathy?**
A: Vitamin B12 required for methylation reactions and myelin synthesis. Deficiency → impaired myelin synthesis → dorsal column and lateral corticospinal tract involvement. Causes subacute combined degeneration with paresthesias, ataxia, spasticity. Early treatment reversible; delayed treatment permanent.

**Q18: How do you differentiate spinal cord disease from GBS clinically?**
A: Spinal cord: sensory level, hyperreflexia below level, sphincter involvement (saddle anesthesia), upper motor neuron signs. GBS: no sensory level, areflexia (absent reflexes), preserved sensation, lower motor neuron signs. Level absence is key differentiator.

**Q19: What are the critical complications of GBS requiring ICU monitoring?**
A: Respiratory failure (need ventilator), autonomic dysfunction (arrhythmias, BP swings), sudden cardiac death (rare), secondary infections (aspiration, UTI), DVT/PE, pain. Monitoring essential for mortality reduction.

**Q20: Explain the role of nerve conduction studies in GBS diagnosis and prognosis.**
A: NCS confirms demyelination (blocks, slowing) vs axonal pattern. Early NCS (first 3 days) may be normal; abnormalities peak week 2-3. Serial NCS shows progression. Demyelinating pattern (AIDP) predicts good prognosis; axonal (AMAN) predicts variable/worse prognosis.

**Q21: What is the difference between conduction velocity and distal latency in demyelinating disease?**
A: Conduction velocity = distance/time (m/s); measures speed of conduction. Distal latency = time from stimulus to response (ms); measures time to reach recording site. Both ↑ (slowed) in demyelination. Conduction velocity <50 m/s suggests severe demyelination.

**Q22: Why is early diagnosis and treatment of GBS important?**
A: Early IVIG/plasmapheresis (within 2 weeks) reduces duration of paralysis, shortens ICU stay, and improves outcomes. Delayed treatment less effective. Respiratory support improves survival. Early detection of respiratory failure prevents mortality.

**Q23: What is the mechanism of action of IVIG in GBS?**
A: IVIG contains anti-idiotype antibodies that block pathogenic antibodies, inhibit complement activation, modulate B-cell and T-cell function, reduce inflammatory cytokine production. Mechanism not fully understood but proven effective.

**Q24: How does C. jejuni infection lead to AMAN (axonal GBS)?**
A: C. jejuni serotypes O19, O41 have LPS epitopes mimicking GM1 ganglioside. Immune system produces IgG and IgM against bacterial LPS; antibodies cross-react with nerve GM1. Antibody + complement attack axonal membranes → axonal degeneration → motor weakness.`,
        mnemonics: [
          { text: "GBS Diagnosis: GAAP", explanation: "Guillain-Barré → Ascending paralysis → Areflexia → Post-infectious (usually)" },
          { text: "GBS Variants: AIDP=Demyelinating, AMAN=Axonal, MFS=Motionless eyes", explanation: "AIDP 90% (good prognosis); AMAN 5-10% Asia (axonal); MFS ophthalmoplegia no paralysis" },
          { text: "Albuminocytological Dissociation: Protein UP protein, Cells normal", explanation: "CSF protein 100-1000 (↑↑), cells <10/μL (normal) = classic GBS" },
          { text: "Demyelination NCS: SCP", explanation: "Slowing, Conduction blocks, amplitude Preserved" },
          { text: "Axonal NCS: RAM", explanation: "Reduced Amplitude, no blocks (unlike demyelination), Mildly slow velocity" },
          { text: "GBS Treatment: Two choices — IVIG or Plasma", explanation: "IVIG 2 g/kg (5 days) or Plasmapheresis (5 exchanges); start within 2 weeks" },
          { text: "Respiratory Failure: FVC <15 mL/kg or NIF >-30", explanation: "Intubate to prevent death; 25-30% of GBS need ventilation" },
          { text: "Diabetic Neuropathy: PARM", explanation: "Polyol pathway, AGE, ROS, Microvascular disease" },
          { text: "Small vs Large Fiber: Small first (pain/temp gone), Large later (weakness)", explanation: "C-fibers affected first in diabetes; A-fibers later" },
          { text: "Leprosy: Thick Nerves + Hypo Lesions", explanation: "Palpable thickened nerves + hypopigmented skin with anesthesia = leprosy" }
        ],
        keyPoints: [
          "GBS: acute ascending paralysis + areflexia + post-infectious prodrome + albuminocytological dissociation",
          "AIDP (90%): demyelinating, good prognosis; AMAN: axonal, anti-GM1, higher in Asia; Miller Fisher: ophthalmoplegia + ataxia without paralysis",
          "Conduction blocks on NCS are pathognomonic for demyelination; absent in axonal neuropathies",
          "IVIG (2 g/kg) or plasmapheresis: both equally effective; start within 2 weeks; corticosteroids contraindicated",
          "Respiratory monitoring critical: intubate if FVC <15 mL/kg or NIF >-30 cm H2O; 25-30% require ventilation",
          "Autonomic dysfunction in 10-30%: arrhythmias, BP instability, urinary retention; requires ICU monitoring",
          "Miller Fisher: anti-GQ1b positive; ophthalmoplegia distinctive; excellent prognosis (2-4 weeks recovery)",
          "Diabetic neuropathy: polyol pathway + AGE + oxidative stress + ischemia; small C-fibers first, then large fibers",
          "Leprosy neuropathy endemic in India: palpable thickened nerves + hypopigmented lesions + stocking-glove sensory loss",
          "B12 deficiency: dorsal column disease; paresthesias + ataxia + spasticity; early treatment reversible"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "428: Guillain-Barré Syndrome", edition: "21st" },
          { book: "API Textbook of Medicine", chapter: "10: GBS & Peripheral Neuropathies", edition: "11th" },
          { book: "Davidson's Principles and Practice of Medicine", chapter: "26: Peripheral Nervous System Disorders", edition: "24th" }
        ]
      }
    ]
  }
];
