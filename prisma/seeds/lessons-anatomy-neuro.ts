// 5-layer lessons for all Neuroanatomy topics (AN-MOD-07)
import type { TopicLessons } from "./content-loader";

export const neuroLessons: TopicLessons[] = [
  // ─── Topic 1: Meninges, Ventricles & CSF ────────────────────
  {
    topicCode: "AN-MOD-07-TOP-01",
    layers: [
      { layer: 1, slug: "meninges-ventricles-csf-foundation", title: "Meninges, Ventricles & CSF - Foundation", estimatedMinutes: 20,
        summary: "The brain is covered by three meningeal layers (dura, arachnoid, pia), contains a ventricular system filled with CSF, and CSF circulates from ventricles to subarachnoid space for protection and homeostasis.",
        contentMd: `# Meninges, Ventricles & CSF

## Meningeal Layers (Outer to Inner)

| Layer | Key Features |
|-------|-------------|
| **Dura mater** | Tough, fibrous; 2 layers (periosteal + meningeal); forms dural folds and venous sinuses |
| **Arachnoid mater** | Delicate, avascular; gives arachnoid granulations for CSF absorption |
| **Pia mater** | Thin, vascular; closely adherent to brain surface; follows every sulcus and gyrus |

### Dural Folds
- **Falx cerebri**: Separates left and right cerebral hemispheres; attached to crista galli anteriorly
- **Tentorium cerebelli**: Separates cerebrum from cerebellum; has a tentorial notch (incisura)
- **Falx cerebelli**: Separates cerebellar hemispheres
- **Diaphragma sellae**: Covers pituitary fossa

### Meningeal Spaces
- **Epidural space**: Between skull and periosteal dura (potential space in cranium, real space in spinal canal)
- **Subdural space**: Between dura and arachnoid (potential space; site of subdural hematoma)
- **Subarachnoid space**: Between arachnoid and pia; contains CSF, cerebral arteries, and trabeculae

## Ventricular System
The brain has **4 ventricles** connected by narrow passages:
1. **Lateral ventricles** (2): C-shaped, one in each hemisphere; parts: anterior horn, body, atrium, posterior horn, inferior horn
2. **Third ventricle**: Midline, between the two thalami
3. **Fourth ventricle**: Between brainstem and cerebellum; diamond-shaped floor = rhomboid fossa

### Connections
- Lateral ventricle to 3rd ventricle: **Interventricular foramen (of Monro)**
- 3rd ventricle to 4th ventricle: **Cerebral aqueduct (of Sylvius)**
- 4th ventricle to subarachnoid space: **Foramina of Luschka** (2 lateral) + **Foramen of Magendie** (1 median)

## CSF Basics
- **Volume**: ~150 mL total (produced ~500 mL/day, turned over 3-4 times/day)
- **Produced by**: Choroid plexus (mainly in lateral ventricles)
- **Absorbed by**: Arachnoid granulations into superior sagittal sinus
- **Normal pressure**: 60-180 mm H2O (lumbar puncture)
- **Functions**: Cushion (buoyancy), nutrient transport, waste removal, maintains intracranial pressure`,
        mnemonics: [
          { text: "DAP for meningeal layers", explanation: "Dura, Arachnoid, Pia - outer to inner layers of meninges" },
          { text: "2 Ls and 1 M for 4th ventricle openings", explanation: "2 Lateral foramina of Luschka + 1 Median foramen of Magendie" }
        ],
        keyPoints: [
          "Dura mater has 2 layers (periosteal + meningeal); forms folds and venous sinuses",
          "Falx cerebri separates cerebral hemispheres; tentorium cerebelli separates cerebrum from cerebellum",
          "4 ventricles connected by foramen of Monro and aqueduct of Sylvius",
          "CSF produced by choroid plexus (~500 mL/day), absorbed by arachnoid granulations",
          "Normal CSF volume ~150 mL; pressure 60-180 mm H2O"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Head & Neck, Ch 20", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 3 - Meninges & CSF", edition: "10th" }
        ] },
      { layer: 2, slug: "meninges-ventricles-csf-mechanism", title: "Meninges, Ventricles & CSF - Mechanism", estimatedMinutes: 30,
        summary: "Detailed anatomy of dural venous sinuses, choroid plexus microstructure, CSF circulation pathway, and blood-brain barrier in relation to meninges and ventricular system.",
        contentMd: `# Detailed Anatomy & Mechanism

## Dural Venous Sinuses
Formed between periosteal and meningeal layers of dura; are valveless and lined by endothelium.

| Sinus | Location | Drains Into |
|-------|----------|-------------|
| Superior sagittal sinus | Upper border of falx cerebri | Confluence of sinuses (torcular Herophili) |
| Inferior sagittal sinus | Lower border of falx cerebri | Straight sinus |
| Straight sinus | Junction of falx cerebri + tentorium | Confluence of sinuses |
| Transverse sinus | Along tentorium | Sigmoid sinus |
| Sigmoid sinus | S-shaped, posterior cranial fossa | Internal jugular vein |
| Cavernous sinus | Lateral to sella turcica | Superior + inferior petrosal sinuses |

### Cavernous Sinus - Structures
**Passing THROUGH the sinus**: Internal carotid artery, Abducens nerve (CN VI)
**In the LATERAL WALL** (superior to inferior): CN III (Oculomotor), CN IV (Trochlear), CN V1 (Ophthalmic), CN V2 (Maxillary)

## CSF Circulation Pathway
\`\`\`
Choroid plexus (lateral ventricles)
    ↓
Lateral ventricles
    ↓ Foramen of Monro
Third ventricle
    ↓ Aqueduct of Sylvius
Fourth ventricle
    ↓ Foramina of Luschka (x2) + Magendie (x1)
Subarachnoid space (cisterns)
    ↓
Arachnoid granulations
    ↓
Superior sagittal sinus → venous system
\`\`\`

## Choroid Plexus Microstructure
- Modified ependymal cells with microvilli (brush border)
- Highly vascularized core of pia mater
- Tight junctions form the **blood-CSF barrier**
- Active secretion of CSF (not just filtration): Na+/K+ ATPase driven

## CSF Composition vs Plasma
| Parameter | CSF | Plasma |
|-----------|-----|--------|
| Protein | 15-45 mg/dL | 6000-8000 mg/dL |
| Glucose | 45-80 mg/dL (2/3 of plasma) | 70-110 mg/dL |
| Cells | 0-5 lymphocytes/uL | 4000-11000/uL |
| Chloride | 120-130 mEq/L | 95-105 mEq/L |
| Pressure | 60-180 mm H2O | - |

## Subarachnoid Cisterns
- **Cisterna magna** (cerebellomedullary): Largest; between cerebellum and medulla
- **Pontine cistern**: Ventral to pons; contains basilar artery
- **Interpeduncular cistern**: Between cerebral peduncles; contains circle of Willis
- **Lumbar cistern**: Below conus medullaris (L1-L2 to S2); site of lumbar puncture`,
        mnemonics: [
          { text: "O TOM CAT for cavernous sinus lateral wall", explanation: "O-Oculomotor (III), T-Trochlear (IV), O-Ophthalmic (V1), M-Maxillary (V2); CAT = Carotid Artery + aTrochlear (VI) pass THROUGH the sinus" },
          { text: "CSF pathway: L-M-3-A-4-LLM-S-AG-SSS", explanation: "Lateral ventricle -> Monro -> 3rd ventricle -> Aqueduct -> 4th ventricle -> Luschka/Luschka/Magendie -> Subarachnoid -> Arachnoid granulations -> Superior Sagittal Sinus" }
        ],
        keyPoints: [
          "Cavernous sinus: ICA and CN VI pass through; CN III, IV, V1, V2 in lateral wall",
          "CSF produced by choroid plexus via active secretion (Na+/K+ ATPase), not passive filtration",
          "CSF glucose = 2/3 of plasma glucose; protein much lower than plasma",
          "Cisterna magna is the largest subarachnoid cistern",
          "Lumbar puncture done at L3-L4 or L4-L5 (lumbar cistern below conus at L1-L2)"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Head & Neck, Ch 20", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 3 - Meninges & CSF", edition: "10th" }
        ] },
      { layer: 3, slug: "meninges-ventricles-csf-clinical", title: "Meninges, Ventricles & CSF - Clinical", estimatedMinutes: 20,
        summary: "Clinical correlations including types of hydrocephalus, meningitis, intracranial hemorrhage types, raised intracranial pressure, and lumbar puncture technique.",
        contentMd: `# Clinical Correlations

## Hydrocephalus
Abnormal accumulation of CSF within the ventricles.

| Type | Mechanism | Examples |
|------|-----------|---------|
| **Obstructive (Non-communicating)** | Block within ventricular system | Aqueductal stenosis, tumors blocking foramen of Monro, colloid cyst of 3rd ventricle |
| **Communicating** | Impaired absorption at arachnoid granulations | Post-meningitis, subarachnoid hemorrhage |
| **Normal Pressure Hydrocephalus (NPH)** | Chronic communicating; normal CSF pressure | Classic triad: Wet (incontinence), Wacky (dementia), Wobbly (gait ataxia) |

> **Clinical Pearl**: Aqueductal stenosis is the most common cause of congenital hydrocephalus. The aqueduct of Sylvius is the narrowest part of the ventricular system.

## Intracranial Hemorrhage Types

| Type | Source | Location | CT Appearance | Key Feature |
|------|--------|----------|---------------|-------------|
| **Epidural** | Middle meningeal artery | Between skull and dura | Biconvex (lens-shaped) | Lucid interval; does NOT cross suture lines |
| **Subdural** | Bridging veins | Between dura and arachnoid | Crescent-shaped | Crosses suture lines; common in elderly, shaken baby |
| **Subarachnoid** | Berry aneurysm rupture | Subarachnoid space | Blood in cisterns/sulci | Thunderclap headache; most common site = ACoA |
| **Intracerebral** | Charcot-Bouchard aneurysm | Within brain parenchyma | Hyperdense mass | Hypertensive bleed; most common site = putamen |

## Meningitis
- **Bacterial**: CSF shows high protein, low glucose, neutrophils; Gram stain positive
- **Viral**: CSF shows mild protein rise, normal glucose, lymphocytes
- **TB meningitis**: CSF shows high protein, very low glucose, lymphocytes; common in India; cobweb appearance
- **Kernig sign**: Pain on knee extension with hip flexed
- **Brudzinski sign**: Neck flexion causes hip/knee flexion

## Lumbar Puncture
- Site: **L3-L4 or L4-L5** interspace (below conus medullaris at L1-L2 in adults)
- **Landmark**: Highest point of iliac crests = L4 spinous process (Tuffier's line)
- Layers pierced: Skin -> Subcutaneous tissue -> Supraspinous ligament -> Interspinous ligament -> Ligamentum flavum -> Epidural space -> Dura -> Arachnoid -> Subarachnoid space
- **Contraindication**: Raised ICP with papilledema (risk of tonsillar herniation)

## Raised Intracranial Pressure
- **Cushing triad**: Hypertension + Bradycardia + Irregular respiration
- **Papilledema**: Swelling of optic disc due to raised ICP
- **Herniation syndromes**: Uncal (CN III palsy, ipsilateral pupil dilation), Tonsillar (coning → respiratory arrest)`,
        mnemonics: [
          { text: "WWW for Normal Pressure Hydrocephalus", explanation: "Wet (urinary incontinence), Wacky (dementia), Wobbly (gait disturbance) - the classic triad of NPH" },
          { text: "Epidural = LENS, Subdural = CRESCENT", explanation: "Epidural hematoma is biconvex/lens-shaped (middle meningeal artery); Subdural is crescent-shaped (bridging veins)" }
        ],
        keyPoints: [
          "Aqueductal stenosis = most common cause of congenital hydrocephalus",
          "Epidural hematoma: middle meningeal artery, lens-shaped, lucid interval, does NOT cross sutures",
          "Subdural hematoma: bridging veins, crescent-shaped, crosses suture lines",
          "LP at L3-L4; contraindicated in raised ICP with papilledema",
          "TB meningitis common in India: very low glucose, high protein, lymphocytes in CSF",
          "NPH triad: Wet, Wacky, Wobbly"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Clinical Anatomy", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 3 - Meninges & CSF", edition: "10th" }
        ] },
      { layer: 4, slug: "meninges-ventricles-csf-exam", title: "Meninges, Ventricles & CSF - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield points on meninges, ventricles, and CSF for NEXT/NEET PG examinations.",
        contentMd: `# Exam High Yield

## One-Liners
- Largest subarachnoid cistern: **Cisterna magna (cerebellomedullary cistern)**
- Narrowest part of ventricular system: **Aqueduct of Sylvius**
- Most common cause of congenital hydrocephalus: **Aqueductal stenosis**
- CSF is produced by: **Choroid plexus**
- CSF is absorbed by: **Arachnoid granulations** into superior sagittal sinus
- Normal CSF volume: **150 mL**; daily production: **500 mL**
- Structures passing THROUGH cavernous sinus: **ICA + CN VI (Abducens)**
- CN most commonly affected in cavernous sinus thrombosis: **CN VI (Abducens)** - longest intracavernous course
- Epidural hematoma artery: **Middle meningeal artery**
- Subdural hematoma vessels: **Bridging veins**
- SAH most common site: **Anterior communicating artery** (berry aneurysm)
- LP level in adults: **L3-L4**; in children: **L4-L5**
- Conus medullaris in adults ends at: **L1-L2**
- Falx cerebri attachment anteriorly: **Crista galli**
- Tentorium cerebelli: separates **cerebrum from cerebellum**
- NPH triad: **Wet, Wacky, Wobbly** (incontinence, dementia, gait ataxia)

## Comparison Table: Hemorrhage Types
| Feature | Epidural | Subdural | SAH |
|---------|----------|----------|-----|
| Source | Middle meningeal a. | Bridging veins | Berry aneurysm |
| CT shape | Biconvex/lens | Crescent | Blood in sulci |
| Crosses sutures | No | Yes | N/A |
| Classic history | Lucid interval | Elderly/trauma | Thunderclap headache |

## Comparison: CSF in Meningitis
| Type | Cells | Protein | Glucose | Special |
|------|-------|---------|---------|---------|
| Bacterial | Neutrophils | High | Low | Gram stain |
| Viral | Lymphocytes | Mildly high | Normal | PCR |
| TB | Lymphocytes | Very high | Very low | Cobweb, ADA |`,
        mnemonics: [
          { text: "6 through 6 in cavernous sinus", explanation: "CN VI passes THROUGH the cavernous sinus (along with ICA); it is the CN most affected in cavernous sinus thrombosis" },
          { text: "MMA = Epidural, BV = Subdural", explanation: "Middle Meningeal Artery rupture causes Epidural hematoma; Bridging Vein rupture causes Subdural hematoma" }
        ],
        keyPoints: [
          "Aqueduct of Sylvius = narrowest part; stenosis = most common congenital hydrocephalus",
          "CN VI passes through cavernous sinus and is first affected in cavernous sinus thrombosis",
          "Epidural = MMA, lens-shaped, no suture crossing; Subdural = bridging veins, crescent, crosses sutures",
          "CSF glucose in TB meningitis is very low; ADA is raised",
          "Conus medullaris at L1-L2 in adults; LP done at L3-L4"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 20", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 3", edition: "10th" }
        ] },
      { layer: 5, slug: "meninges-ventricles-csf-recall", title: "Meninges, Ventricles & CSF - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on meninges, ventricles, and CSF.",
        contentMd: `# Active Recall

**Q1:** Name the three meningeal layers from outer to inner.
> Dura mater, Arachnoid mater, Pia mater

**Q2:** What connects the lateral ventricle to the third ventricle?
> Interventricular foramen of Monro

**Q3:** Name the openings of the fourth ventricle into subarachnoid space.
> 2 lateral foramina of Luschka + 1 median foramen of Magendie

**Q4:** Where is CSF produced and where is it absorbed?
> Produced by choroid plexus; absorbed by arachnoid granulations into superior sagittal sinus

**Q5:** What is the CT appearance of epidural vs subdural hematoma?
> Epidural = biconvex/lens-shaped (does not cross sutures); Subdural = crescent-shaped (crosses sutures)

**Q6:** What structures pass THROUGH the cavernous sinus?
> Internal carotid artery and CN VI (Abducens nerve)

**Q7:** What is the classic triad of Normal Pressure Hydrocephalus?
> Wet (incontinence), Wacky (dementia), Wobbly (gait ataxia)

**Q8:** At what vertebral level is lumbar puncture performed in adults, and why?
> L3-L4 or L4-L5 interspace; because conus medullaris ends at L1-L2 in adults, so spinal cord is not at risk`,
        mnemonics: [],
        keyPoints: [
          "8 recall questions covering meninges, ventricles, CSF, and clinical correlations"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 20", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 3", edition: "10th" }
        ] },
    ],
  },
  // ─── Topic 2: Cerebrum: Lobes & Functional Areas ────────────
  {
    topicCode: "AN-MOD-07-TOP-02",
    layers: [
      { layer: 1, slug: "cerebrum-lobes-functional-areas-foundation", title: "Cerebrum: Lobes & Functional Areas - Foundation", estimatedMinutes: 20,
        summary: "The cerebrum has two hemispheres, each divided into frontal, parietal, temporal, occipital, and limbic lobes, with specific functional areas mapped by Brodmann numbers.",
        contentMd: `# Cerebrum: Lobes & Functional Areas

## Cerebral Hemispheres
- 2 hemispheres connected by **corpus callosum** (largest commissure)
- Surface covered by **cerebral cortex** (grey matter, 6 layers in neocortex)
- Each hemisphere has **3 surfaces**: superolateral, medial, inferior

## Lobes & Boundaries

| Lobe | Key Sulci/Boundaries | Key Gyri |
|------|---------------------|----------|
| **Frontal** | Anterior to central sulcus, above lateral sulcus | Precentral gyrus, superior/middle/inferior frontal gyri |
| **Parietal** | Behind central sulcus, above lateral sulcus, anterior to parieto-occipital sulcus | Postcentral gyrus, superior/inferior parietal lobules |
| **Temporal** | Below lateral sulcus | Superior/middle/inferior temporal gyri, transverse temporal gyri (Heschl) |
| **Occipital** | Posterior to parieto-occipital sulcus | Cuneus, lingual gyrus, around calcarine sulcus |
| **Limbic (hidden)** | Medial surface; cingulate + parahippocampal gyri | Cingulate gyrus, hippocampus |
| **Insula (hidden)** | Deep to lateral sulcus, covered by opercula | Insular cortex |

## Important Sulci
- **Central sulcus (of Rolando)**: Separates frontal from parietal lobe
- **Lateral sulcus (of Sylvius)**: Separates temporal from frontal/parietal lobes
- **Parieto-occipital sulcus**: Separates parietal from occipital lobe (medial surface)
- **Calcarine sulcus**: In occipital lobe (medial surface); primary visual cortex lies on its banks

## Key Functional Areas (Brodmann Areas)

| Function | Brodmann Area | Location |
|----------|--------------|----------|
| Primary motor cortex | Area 4 | Precentral gyrus |
| Premotor cortex | Area 6 | Anterior to precentral gyrus |
| Frontal eye field | Area 8 | Middle frontal gyrus |
| Broca's area (motor speech) | Areas 44, 45 | Inferior frontal gyrus (dominant hemisphere) |
| Primary somatosensory cortex | Areas 3, 1, 2 | Postcentral gyrus |
| Primary auditory cortex | Areas 41, 42 | Transverse temporal gyri (Heschl's gyri) |
| Wernicke's area (sensory speech) | Area 22 | Superior temporal gyrus (posterior part, dominant hemisphere) |
| Primary visual cortex | Area 17 | Banks of calcarine sulcus |
| Prefrontal cortex | Areas 9-12 | Anterior frontal lobe |

## Motor & Sensory Homunculus
- Somatotopic representation of body on precentral (motor) and postcentral (sensory) gyri
- **Inverted representation**: Leg on medial surface (supplied by ACA), trunk/arm/face on lateral surface (supplied by MCA)
- Disproportionate representation: Hand and face have the largest cortical area`,
        mnemonics: [
          { text: "Broca = Broken speech (44,45)", explanation: "Broca's area (areas 44,45) in inferior frontal gyrus controls motor speech; damage causes non-fluent/expressive aphasia (broken, effortful speech)" },
          { text: "Wernicke = Wordy but Wrong (22)", explanation: "Wernicke's area (area 22) in superior temporal gyrus handles language comprehension; damage causes fluent/receptive aphasia (wordy but meaningless speech)" }
        ],
        keyPoints: [
          "Central sulcus separates frontal (motor) from parietal (sensory) lobe",
          "Primary motor cortex = Area 4 (precentral gyrus); Primary sensory = Areas 3,1,2 (postcentral gyrus)",
          "Broca's area (44,45) = motor speech in inferior frontal gyrus; Wernicke's (22) = comprehension in superior temporal gyrus",
          "Primary visual cortex = Area 17 on banks of calcarine sulcus",
          "Motor/sensory homunculus is inverted: leg medially (ACA territory), face laterally (MCA territory)"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Head & Neck, Ch 21", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 8 - Cerebral Cortex", edition: "10th" }
        ] },
      { layer: 2, slug: "cerebrum-lobes-functional-areas-mechanism", title: "Cerebrum: Lobes & Functional Areas - Mechanism", estimatedMinutes: 30,
        summary: "Detailed cortical architecture, association areas, language circuitry, dominance, and white matter connections including the arcuate fasciculus and corpus callosum.",
        contentMd: `# Detailed Anatomy & Connections

## Cortical Architecture (Neocortex - 6 Layers)
| Layer | Name | Function |
|-------|------|----------|
| I | Molecular | Dendrites and axons (plexiform layer) |
| II | External granular | Small pyramidal cells; receives cortico-cortical connections |
| III | External pyramidal | Medium pyramidal cells; gives cortico-cortical (association/commissural) fibers |
| IV | Internal granular | Stellate cells; receives thalamocortical input (thick in sensory areas) |
| V | Internal pyramidal | Large pyramidal cells (Betz cells in area 4); gives corticospinal + corticobulbar fibers |
| VI | Multiform (polymorphic) | Gives corticothalamic projections |

> **Key Point**: Sensory cortex has thick layer IV (granular cortex). Motor cortex has thick layer V (agranular cortex with Betz giant pyramidal cells).

## Association Areas

| Area | Location | Function |
|------|----------|----------|
| Prefrontal cortex | Anterior frontal lobe | Personality, judgment, planning, executive function |
| Parietal association | Superior parietal lobule | Spatial awareness, sensory integration |
| Angular gyrus (Area 39) | Inferior parietal lobule | Reading, writing, calculation; damage = Gerstmann syndrome |
| Temporal association | Inferotemporal cortex | Visual recognition (faces, objects) |

## Language Circuitry (Dominant Hemisphere - Usually Left)
\`\`\`
Wernicke's area (Area 22) → Arcuate fasciculus → Broca's area (Areas 44,45) → Motor cortex → Speech
\`\`\`

### Aphasia Types
| Type | Lesion Site | Fluency | Comprehension | Repetition |
|------|------------|---------|---------------|------------|
| **Broca's (Expressive)** | Area 44,45 (inferior frontal) | Non-fluent | Intact | Impaired |
| **Wernicke's (Receptive)** | Area 22 (posterior superior temporal) | Fluent (but meaningless) | Impaired | Impaired |
| **Conduction** | Arcuate fasciculus | Fluent | Intact | Impaired |
| **Global** | Large MCA territory | Non-fluent | Impaired | Impaired |
| **Transcortical motor** | Around Broca's | Non-fluent | Intact | Intact |
| **Transcortical sensory** | Around Wernicke's | Fluent | Impaired | Intact |

## Cerebral Dominance
- **Left hemisphere dominant** in 95% of right-handers and 70% of left-handers
- Left hemisphere: Language, analytical, mathematical
- Right hemisphere: Spatial, musical, emotional prosody

## White Matter Connections
1. **Association fibers**: Connect areas within same hemisphere
   - Short (U-fibers): adjacent gyri
   - Long: Arcuate fasciculus, superior longitudinal fasciculus, uncinate fasciculus
2. **Commissural fibers**: Connect corresponding areas of two hemispheres
   - Corpus callosum (largest), anterior commissure, posterior commissure
3. **Projection fibers**: Connect cortex with subcortical structures
   - Internal capsule, corona radiata

## Corpus Callosum (Anterior to Posterior)
- **Rostrum** → **Genu** → **Body** → **Splenium**
- Genu connects prefrontal areas (forceps minor)
- Splenium connects occipital areas (forceps major)`,
        mnemonics: [
          { text: "RGB-S for corpus callosum parts", explanation: "Rostrum, Genu, Body, Splenium - from anterior to posterior" },
          { text: "Broca = BROKen, Wernicke = Wordy; Conduction = Can't Conduit (repeat)", explanation: "Broca's = broken non-fluent speech; Wernicke's = wordy meaningless fluent speech; Conduction = cannot repeat (arcuate fasciculus damaged)" }
        ],
        keyPoints: [
          "Motor cortex is agranular (thick layer V with Betz cells); sensory cortex is granular (thick layer IV)",
          "Language pathway: Wernicke's -> arcuate fasciculus -> Broca's -> motor cortex",
          "Conduction aphasia = arcuate fasciculus lesion; fluent speech, good comprehension, cannot repeat",
          "Corpus callosum: Rostrum -> Genu -> Body -> Splenium (anterior to posterior)",
          "Left hemisphere dominant for language in 95% of right-handers"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 21", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 8 - Cerebral Cortex", edition: "10th" }
        ] },
      { layer: 3, slug: "cerebrum-lobes-functional-areas-clinical", title: "Cerebrum: Lobes & Functional Areas - Clinical", estimatedMinutes: 20,
        summary: "Clinical syndromes from lesions of different lobes including frontal lobe syndrome, Gerstmann syndrome, temporal lobe epilepsy, and visual field defects from occipital lesions.",
        contentMd: `# Clinical Correlations

## Frontal Lobe Lesions
- **Prefrontal damage**: Personality change, disinhibition, poor judgment (classic case: Phineas Gage)
- **Broca's area lesion**: Non-fluent (expressive/motor) aphasia; patient knows what to say but cannot
- **Frontal eye field lesion**: Eyes deviate TOWARDS the lesion (destructive); AWAY from lesion in seizure (irritative)
- **Paracentral lobule lesion**: Loss of bladder/bowel control + lower limb weakness (ACA territory)

> **Clinical Pearl**: In frontal lobe tumors (e.g., meningioma of olfactory groove), anosmia may be the presenting complaint along with personality change.

## Parietal Lobe Lesions
- **Postcentral gyrus lesion**: Contralateral loss of fine touch, proprioception, two-point discrimination
- **Non-dominant parietal lesion**: Hemispatial neglect (patient ignores left side of world)
- **Gerstmann syndrome** (dominant angular gyrus lesion): 4 features:
  1. Agraphia (cannot write)
  2. Acalculia (cannot calculate)
  3. Finger agnosia (cannot identify fingers)
  4. Left-right confusion

## Temporal Lobe Lesions
- **Heschl's gyri (area 41,42) bilateral damage**: Cortical deafness
- **Wernicke's area lesion**: Receptive/fluent aphasia; patient speaks fluently but content is meaningless
- **Temporal lobe epilepsy**: Most common form of focal epilepsy; aura of deja vu, olfactory/gustatory hallucinations; involves hippocampus (mesial temporal sclerosis)
- **Bilateral hippocampal damage**: Anterograde amnesia (cannot form new memories)

## Occipital Lobe Lesions
- **Unilateral Area 17 lesion**: Contralateral homonymous hemianopia with macular sparing
- **Bilateral Area 17 lesion**: Cortical blindness (Anton syndrome if patient denies blindness)
- **Area 18,19 lesion**: Visual agnosia (cannot recognize objects by sight)

## Internal Capsule Lesion
- Most commonly affected by hemorrhagic stroke (lenticulostriate arteries)
- **Posterior limb**: Contains corticospinal tract, sensory fibers
- Dense lesion causes: Contralateral hemiplegia + hemianesthesia + homonymous hemianopia ("3 Hs")

## Disconnection Syndromes
- **Split-brain syndrome**: Corpus callosum transection; left hand unable to follow verbal commands (left hand does not receive language info from left hemisphere)
- **Alexia without agraphia**: Lesion of splenium + left occipital lobe; patient can write but cannot read`,
        mnemonics: [
          { text: "AAFL for Gerstmann syndrome", explanation: "Agraphia, Acalculia, Finger agnosia, Left-right confusion - from lesion of dominant angular gyrus" },
          { text: "3 Hs for internal capsule stroke", explanation: "Hemiplegia + Hemianesthesia + Homonymous Hemianopia - contralateral to the lesion" }
        ],
        keyPoints: [
          "Broca's lesion = non-fluent aphasia; Wernicke's lesion = fluent aphasia with poor comprehension",
          "Gerstmann syndrome (angular gyrus): agraphia, acalculia, finger agnosia, left-right confusion",
          "Temporal lobe epilepsy is the most common focal epilepsy; deja vu aura, mesial temporal sclerosis",
          "Internal capsule stroke (lenticulostriate arteries): 3 Hs - hemiplegia, hemianesthesia, hemianopia",
          "Anton syndrome = cortical blindness with denial of blindness (bilateral area 17 lesion)"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Clinical Anatomy", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 8 - Cerebral Cortex", edition: "10th" }
        ] },
      { layer: 4, slug: "cerebrum-lobes-functional-areas-exam", title: "Cerebrum: Lobes & Functional Areas - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield points on cerebral lobes and functional areas for NEXT/NEET PG.",
        contentMd: `# Exam High Yield

## One-Liners
- Primary motor cortex: **Area 4** (precentral gyrus)
- Primary somatosensory cortex: **Areas 3,1,2** (postcentral gyrus)
- Primary visual cortex: **Area 17** (calcarine sulcus banks)
- Primary auditory cortex: **Areas 41,42** (Heschl's gyri)
- Broca's area: **Areas 44,45** (inferior frontal gyrus)
- Wernicke's area: **Area 22** (posterior superior temporal gyrus)
- Frontal eye field: **Area 8**
- Largest commissure: **Corpus callosum**
- Largest cortical cell: **Betz cell** (layer V of area 4)
- Motor homunculus - leg representation: **Medial surface** (ACA territory)
- Motor homunculus - face representation: **Lateral surface** (MCA territory)
- Non-dominant parietal lobe lesion: **Hemispatial neglect**
- Temporal lobe epilepsy aura: **Deja vu**, olfactory/gustatory hallucinations
- Most common type of aphasia in MCA stroke: **Global aphasia** (if large) or **Broca's** (if superior division)

## Aphasia Comparison Table
| Feature | Broca's | Wernicke's | Conduction | Global |
|---------|---------|------------|------------|--------|
| Fluency | Non-fluent | Fluent | Fluent | Non-fluent |
| Comprehension | Intact | Impaired | Intact | Impaired |
| Repetition | Impaired | Impaired | Impaired | Impaired |
| Lesion | Area 44,45 | Area 22 | Arcuate fasciculus | Large MCA |

## Gerstmann Syndrome Components
- Agraphia + Acalculia + Finger agnosia + Left-right confusion
- Lesion: Dominant **angular gyrus** (Area 39)

## Visual Field Defects by Lesion Site
| Lesion | Defect |
|--------|--------|
| Optic nerve | Ipsilateral monocular blindness |
| Optic chiasm (central) | Bitemporal hemianopia |
| Optic tract | Contralateral homonymous hemianopia |
| Area 17 (one side) | Contralateral homonymous hemianopia with macular sparing |`,
        mnemonics: [
          { text: "4-312-17-4142 for primary cortical areas", explanation: "Motor=4, Sensory=3,1,2, Visual=17, Auditory=41,42 - the Brodmann areas you must memorize" },
          { text: "AAFL for Gerstmann", explanation: "Agraphia, Acalculia, Finger agnosia, Left-right confusion" }
        ],
        keyPoints: [
          "Area 4 = motor, 3/1/2 = sensory, 17 = visual, 41/42 = auditory, 44/45 = Broca's, 22 = Wernicke's",
          "Conduction aphasia = arcuate fasciculus lesion; fluent + good comprehension + cannot repeat",
          "Gerstmann = angular gyrus (dominant); AAFL",
          "Homunculus inverted: leg medial (ACA), face lateral (MCA)",
          "Hemispatial neglect = non-dominant parietal lobe lesion"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 21", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 8", edition: "10th" }
        ] },
      { layer: 5, slug: "cerebrum-lobes-functional-areas-recall", title: "Cerebrum: Lobes & Functional Areas - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for cerebrum lobes and functional areas.",
        contentMd: `# Active Recall

**Q1:** Which Brodmann area is the primary motor cortex, and where is it located?
> Area 4, located on the precentral gyrus

**Q2:** What sulcus separates the frontal lobe from the parietal lobe?
> Central sulcus (of Rolando)

**Q3:** Damage to Broca's area causes what type of aphasia?
> Non-fluent (expressive/motor) aphasia - patient cannot speak fluently but comprehension is intact

**Q4:** What is the arcuate fasciculus, and what happens when it is damaged?
> White matter tract connecting Wernicke's area to Broca's area; damage causes conduction aphasia (cannot repeat)

**Q5:** What are the 4 features of Gerstmann syndrome?
> Agraphia, Acalculia, Finger agnosia, Left-right confusion (angular gyrus lesion)

**Q6:** Where is the leg represented on the motor homunculus?
> Medial surface of the hemisphere (supplied by anterior cerebral artery)

**Q7:** What is Anton syndrome?
> Cortical blindness with denial of blindness, caused by bilateral Area 17 lesion

**Q8:** Name the parts of the corpus callosum from anterior to posterior.
> Rostrum, Genu, Body, Splenium`,
        mnemonics: [],
        keyPoints: [
          "8 recall questions covering Brodmann areas, aphasias, clinical syndromes, and cortical anatomy"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 21", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 8", edition: "10th" }
        ] },
    ],
  },
  // ─── Topic 3: Brainstem ─────────────────────────────────────
  {
    topicCode: "AN-MOD-07-TOP-03",
    layers: [
      { layer: 1, slug: "brainstem-foundation", title: "Brainstem - Foundation", estimatedMinutes: 20,
        summary: "The brainstem consists of midbrain, pons, and medulla oblongata. It contains cranial nerve nuclei, vital centers, ascending and descending tracts, and the reticular formation.",
        contentMd: `# Brainstem

## Overview
The brainstem connects the cerebrum to the spinal cord and cerebellum. It consists of 3 parts (superior to inferior):
1. **Midbrain** (mesencephalon)
2. **Pons** (metencephalon)
3. **Medulla oblongata** (myelencephalon)

## Midbrain
- Located between diencephalon and pons
- **Cerebral peduncles** (anterior): Contain corticospinal, corticobulbar, corticopontine tracts
- **Tectum** (posterior): 4 colliculi (superior 2 + inferior 2)
  - Superior colliculi: Visual reflexes
  - Inferior colliculi: Auditory reflexes
- **Cerebral aqueduct**: Passes through midbrain; connects 3rd to 4th ventricle
- **Key nuclei**: Red nucleus, substantia nigra, oculomotor (III) nucleus, trochlear (IV) nucleus

### Cranial Nerves at Midbrain
- **CN III (Oculomotor)**: Emerges from interpeduncular fossa
- **CN IV (Trochlear)**: Only CN to emerge from dorsal surface; crosses to opposite side

## Pons
- Lies between midbrain and medulla, anterior to cerebellum
- **Basis pontis** (ventral): Contains pontine nuclei + transverse pontine fibers (form middle cerebellar peduncle)
- **Tegmentum** (dorsal): Contains cranial nerve nuclei, ascending tracts, reticular formation
- Floor of 4th ventricle (upper part)

### Cranial Nerves at Pons
- **CN V (Trigeminal)**: Emerges from lateral surface of pons
- **CN VI (Abducens)**: Emerges at pontomedullary junction
- **CN VII (Facial)**: Emerges at pontomedullary junction (cerebellopontine angle)
- **CN VIII (Vestibulocochlear)**: Emerges at pontomedullary junction (lateral to VII)

## Medulla Oblongata
- Lowest part of brainstem; continuous with spinal cord at foramen magnum
- **Pyramids** (ventral): Contain corticospinal tracts; decussation at lower medulla
- **Olives**: Lateral to pyramids; contain inferior olivary nucleus
- **Gracile and cuneate tubercles**: Dorsal surface; relay stations for DCML pathway
- **Vital centers**: Respiratory, cardiovascular, vomiting centers

### Cranial Nerves at Medulla
- **CN IX (Glossopharyngeal)**: Emerges from groove between olive and inferior cerebellar peduncle
- **CN X (Vagus)**: Emerges below IX from same groove
- **CN XI (Accessory)**: Cranial root from medulla, spinal root from upper cervical cord
- **CN XII (Hypoglossal)**: Emerges between pyramid and olive`,
        mnemonics: [
          { text: "2-2-4-4 for cranial nerves at brainstem levels", explanation: "Midbrain: 2 nerves (III, IV); Pons: 4 nerves (V, VI, VII, VIII); Medulla: 4 nerves (IX, X, XI, XII)" },
          { text: "Rule of 4 for brainstem", explanation: "4 structures in medial medulla/pons/midbrain begin with M: Motor pathway (corticospinal), Medial lemniscus, Medial longitudinal fasciculus, Motor nucleus of CN" }
        ],
        keyPoints: [
          "Brainstem = midbrain + pons + medulla (superior to inferior)",
          "Midbrain: cerebral peduncles, tectum (4 colliculi), aqueduct, CN III and IV",
          "CN IV is the only cranial nerve to emerge from dorsal surface and cross to opposite side",
          "Pyramidal decussation occurs at lower medulla (75-90% fibers cross)",
          "Medulla contains vital centers: respiratory, cardiovascular, vomiting"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 22", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 5 - Brainstem", edition: "10th" }
        ] },
      { layer: 2, slug: "brainstem-mechanism", title: "Brainstem - Mechanism", estimatedMinutes: 30,
        summary: "Detailed anatomy of brainstem cross-sections at different levels, cranial nerve nuclei organization, cerebellar peduncles, and reticular formation.",
        contentMd: `# Detailed Brainstem Anatomy

## Cross-Section at Midbrain Levels

### Level of Superior Colliculus
- **Tectum**: Superior colliculus
- **Tegmentum**: Red nucleus, oculomotor (III) nucleus, substantia nigra, medial lemniscus
- **Basis**: Crus cerebri (corticospinal + corticopontine + corticobulbar tracts)
- **Aqueduct**: Central, surrounded by periaqueductal grey (PAG) - involved in pain modulation

### Level of Inferior Colliculus
- **Tectum**: Inferior colliculus (auditory relay)
- **Tegmentum**: Trochlear (IV) nucleus, lateral lemniscus (auditory), decussation of superior cerebellar peduncle

## Cross-Section at Pons

### Upper Pons
- Trigeminal nuclei: Motor (masticator) + Principal sensory
- Locus coeruleus (noradrenergic nucleus)
- Superior cerebellar peduncle

### Lower Pons
- Facial (VII) nucleus and nerve (wraps around abducens nucleus - facial colliculus)
- Abducens (VI) nucleus (beneath floor of 4th ventricle)
- Medial longitudinal fasciculus (MLF): Coordinates conjugate eye movements

## Cross-Section at Medulla

### Upper Medulla (open part - floor of 4th ventricle)
- Vestibular and cochlear nuclei
- Inferior cerebellar peduncle
- Nucleus ambiguus (CN IX, X, XI motor) - deep in reticular formation
- Solitary nucleus and tract (taste + visceral afferents for CN VII, IX, X)

### Lower Medulla (closed part)
- **Pyramids**: Corticospinal tract; decussation at this level
- **Gracile nucleus**: Relay for lower limb fine touch/proprioception (DCML)
- **Cuneate nucleus**: Relay for upper limb fine touch/proprioception (DCML)
- **Spinal nucleus of trigeminal**: Pain/temperature from face

## Cranial Nerve Nuclei Organization
General rule: Motor nuclei are **medial**, Sensory nuclei are **lateral** (in floor of 4th ventricle)

| Column | Type | Nuclei |
|--------|------|--------|
| **Somatic motor** (most medial) | GSE | Oculomotor (III), Trochlear (IV), Abducens (VI), Hypoglossal (XII) |
| **Branchiomotor** | SVE | Trigeminal motor (V), Facial (VII), Ambiguus (IX,X,XI) |
| **Parasympathetic** | GVE | Edinger-Westphal (III), Superior salivatory (VII), Inferior salivatory (IX), Dorsal vagal (X) |
| **Visceral sensory** | GVA/SVA | Solitary nucleus (VII, IX, X) |
| **General sensory** (most lateral) | GSA | Trigeminal nuclei (V) |
| **Special sensory** | SSA | Vestibular + Cochlear nuclei (VIII) |

## Cerebellar Peduncles
| Peduncle | Connects | Main Contents |
|----------|----------|---------------|
| **Superior** (brachium conjunctivum) | Midbrain ↔ Cerebellum | Major OUTPUT from cerebellum (dentate → red nucleus → thalamus) |
| **Middle** (brachium pontis) | Pons → Cerebellum | Largest; corticopontocerebellar INPUT |
| **Inferior** (restiform body) | Medulla ↔ Cerebellum | Spinocerebellar tracts, olivocerebellar fibers |

## Reticular Formation
- Core of brainstem; diffuse network of neurons
- **Functions**: Consciousness (ascending reticular activating system - ARAS), respiratory/cardiovascular centers, pain modulation, motor control
- Damage to ARAS → coma`,
        mnemonics: [
          { text: "SIM for cerebellar peduncles (Superior-Inferior-Middle)", explanation: "Superior = mainly Output from cerebellum; Inferior = spinocerebellar input; Middle = largest, pontocerebellar input" },
          { text: "Motor Medial, Sensory Lateral", explanation: "In the floor of 4th ventricle, motor CN nuclei are placed medially and sensory nuclei are placed laterally" }
        ],
        keyPoints: [
          "Red nucleus and substantia nigra are in midbrain tegmentum at level of superior colliculus",
          "Facial nerve wraps around abducens nucleus forming facial colliculus on floor of 4th ventricle",
          "Motor nuclei are medial, sensory nuclei are lateral in brainstem floor",
          "Middle cerebellar peduncle is the largest; carries corticopontocerebellar input",
          "Ascending reticular activating system (ARAS) maintains consciousness; damage causes coma"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 22", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 5 - Brainstem", edition: "10th" }
        ] },
      { layer: 3, slug: "brainstem-clinical", title: "Brainstem - Clinical", estimatedMinutes: 20,
        summary: "Clinical correlations including brainstem stroke syndromes, cranial nerve palsies, cerebellopontine angle tumors, and brainstem death criteria.",
        contentMd: `# Clinical Correlations

## Brainstem Stroke Syndromes

### Medial vs Lateral Brainstem Syndromes
- **Medial syndromes**: Affect motor pathway (corticospinal), medial lemniscus, and motor CN nuclei
- **Lateral syndromes**: Affect spinothalamic tract, sympathetic fibers, and cerebellar connections

### Key Named Syndromes

| Syndrome | Level | Artery | Features |
|----------|-------|--------|----------|
| **Weber syndrome** | Midbrain (medial) | PCA branches | Ipsilateral CN III palsy + Contralateral hemiplegia |
| **Benedikt syndrome** | Midbrain (tegmentum) | PCA branches | Ipsilateral CN III palsy + Contralateral tremor/chorea (red nucleus) |
| **Millard-Gubler syndrome** | Pons (medial) | Basilar branches | Ipsilateral CN VI + VII palsy + Contralateral hemiplegia |
| **Lateral medullary (Wallenberg) syndrome** | Medulla (lateral) | PICA | Most common brainstem stroke; see below |
| **Medial medullary syndrome** | Medulla (medial) | ASA branches | Ipsilateral CN XII palsy + Contralateral hemiplegia + Contralateral loss of proprioception |

### Wallenberg Syndrome (Lateral Medullary) - MOST IMPORTANT
Artery: **Posterior inferior cerebellar artery (PICA)**

Features:
- Ipsilateral: Horner syndrome, cerebellar ataxia, facial pain/temperature loss (spinal trigeminal nucleus), palatal/vocal cord paralysis (nucleus ambiguus), vestibular symptoms
- Contralateral: Body pain/temperature loss (spinothalamic tract)
- **Dysphagia**: Due to nucleus ambiguus involvement (CN IX, X)

> **Clinical Pearl**: In Wallenberg syndrome, pain/temperature loss is IPSILATERAL on face but CONTRALATERAL on body - this crossed pattern is pathognomonic.

## Cerebellopontine Angle (CPA) Tumors
- Most common CPA tumor: **Vestibular schwannoma (acoustic neuroma)**
- Affects CN VIII first (hearing loss, tinnitus), then CN VII (facial palsy), then CN V
- Can compress brainstem and cerebellum

## Brainstem Reflexes
| Reflex | Afferent | Efferent | Center |
|--------|----------|----------|--------|
| Corneal | CN V1 (ophthalmic) | CN VII (facial) | Pons |
| Gag | CN IX | CN X | Medulla |
| Pupillary light | CN II | CN III | Midbrain |
| Vestibulo-ocular | CN VIII | CN III, VI | Pons/medulla |

## Brainstem Death Criteria (Indian Context)
- Fixed, dilated pupils (no light reflex)
- No corneal reflex
- No vestibulo-ocular reflex (caloric test negative)
- No gag reflex
- No respiratory drive (apnea test)
- Must be tested by authorized panel as per Transplantation of Human Organs Act (THOA)`,
        mnemonics: [
          { text: "PICA Wall = Wallenberg", explanation: "PICA (Posterior Inferior Cerebellar Artery) occlusion causes Wallenberg syndrome (lateral medullary syndrome)" },
          { text: "Weber = III + Crossed hemiplegia", explanation: "Weber syndrome (medial midbrain) = Ipsilateral CN III palsy + Contralateral hemiplegia from cerebral peduncle involvement" }
        ],
        keyPoints: [
          "Wallenberg syndrome (lateral medullary): PICA occlusion; crossed pain/temperature loss (ipsilateral face, contralateral body)",
          "Weber syndrome (medial midbrain): CN III palsy + contralateral hemiplegia",
          "Most common CPA tumor: vestibular schwannoma; CN VIII affected first",
          "Facial colliculus on floor of 4th ventricle: facial nerve wrapping around abducens nucleus",
          "Brainstem death requires absence of all brainstem reflexes + apnea test"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Clinical Anatomy", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 5 - Brainstem", edition: "10th" }
        ] },
      { layer: 4, slug: "brainstem-exam", title: "Brainstem - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield brainstem anatomy points for NEXT/NEET PG examinations.",
        contentMd: `# Exam High Yield

## One-Liners
- Only CN to emerge from dorsal aspect: **CN IV (Trochlear)**
- Thinnest CN: **CN IV (Trochlear)**
- Longest intracranial CN: **CN IV (Trochlear)**
- CN with longest intracranial but shortest intradural course: **CN IV**
- CN that decussates: **CN IV (Trochlear)**
- Nucleus ambiguus supplies: **CN IX, X, XI (pharynx/larynx muscles)**
- Facial colliculus: **Facial nerve wrapping around abducens nucleus** on floor of 4th ventricle
- Most common brainstem stroke syndrome: **Wallenberg (lateral medullary)**
- Artery in Wallenberg: **PICA**
- Crossed sensory loss (face vs body) is seen in: **Lateral medullary syndrome**
- Weber syndrome: **Ipsilateral CN III + contralateral hemiplegia** (midbrain)
- Most common CPA tumor: **Vestibular schwannoma**
- ARAS damage causes: **Coma**
- Pyramidal decussation occurs at: **Lower medulla**
- Percentage of fibers that cross at pyramidal decussation: **75-90%**
- Middle cerebellar peduncle connects: **Pons to cerebellum**
- Largest cerebellar peduncle: **Middle (brachium pontis)**
- Substantia nigra pigment: **Neuromelanin** (dopaminergic neurons)

## Brainstem Syndromes Quick Reference
| Syndrome | Rule: Ipsilateral CN + Contralateral Long Tract |
|----------|------------------------------------------------|
| Weber | CN III + Hemiplegia |
| Millard-Gubler | CN VI + VII + Hemiplegia |
| Wallenberg | V, IX, X (ipsi) + Spinothalamic (contra) |
| Medial medullary | CN XII + Hemiplegia + DCML loss |

## CN Nuclei That Are NOT in Their Expected Level
- Mesencephalic nucleus of V is in the midbrain (not pons)
- Spinal nucleus of V extends down to C2 in spinal cord (not just medulla)
- Dorsal vagal nucleus is in medulla (floor of 4th ventricle)`,
        mnemonics: [
          { text: "Trochlear is TRIPLE unique", explanation: "CN IV: (1) Only CN from dorsal surface, (2) Only CN that decussates, (3) Longest intracranial course, (4) Thinnest CN" },
          { text: "PICA = Posterior Inferior Cerebellar Artery = Wallenberg", explanation: "PICA occlusion causes lateral medullary (Wallenberg) syndrome - the most commonly tested brainstem stroke" }
        ],
        keyPoints: [
          "CN IV: dorsal emergence, decussation, longest intracranial, thinnest",
          "Wallenberg (PICA): most common brainstem stroke; crossed sensory loss (face ipsilateral, body contralateral)",
          "Weber (midbrain medial): CN III + contralateral hemiplegia",
          "Middle cerebellar peduncle is the largest",
          "Pyramidal decussation at lower medulla: 75-90% fibers cross"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 22", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 5", edition: "10th" }
        ] },
      { layer: 5, slug: "brainstem-recall", title: "Brainstem - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for brainstem anatomy.",
        contentMd: `# Active Recall

**Q1:** Name the 3 parts of the brainstem from superior to inferior.
> Midbrain, Pons, Medulla oblongata

**Q2:** Which is the only cranial nerve to emerge from the dorsal surface of the brainstem?
> CN IV (Trochlear nerve)

**Q3:** What are the 4 colliculi of the midbrain and their functions?
> Superior colliculi (x2) - visual reflexes; Inferior colliculi (x2) - auditory reflexes

**Q4:** What is the facial colliculus?
> Elevation on the floor of the 4th ventricle formed by the facial nerve (CN VII) looping around the abducens nucleus (CN VI)

**Q5:** Which artery is occluded in Wallenberg syndrome, and what is the hallmark sign?
> PICA (Posterior Inferior Cerebellar Artery); hallmark = crossed sensory loss (ipsilateral face + contralateral body pain/temperature loss)

**Q6:** What structures form Weber syndrome?
> Ipsilateral CN III palsy + Contralateral hemiplegia (medial midbrain lesion)

**Q7:** What is the nucleus ambiguus and which cranial nerves does it supply?
> Motor nucleus deep in medullary reticular formation; supplies CN IX, X, XI (muscles of pharynx and larynx)

**Q8:** What is the function of the ascending reticular activating system (ARAS)?
> Maintains consciousness and wakefulness; bilateral damage causes coma`,
        mnemonics: [],
        keyPoints: [
          "8 recall questions covering brainstem parts, cranial nerves, syndromes, and nuclei"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 22", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 5", edition: "10th" }
        ] },
    ],
  },
  // ─── Topic 4: Cerebellum & Basal Ganglia ────────────────────
  {
    topicCode: "AN-MOD-07-TOP-04",
    layers: [
      { layer: 1, slug: "cerebellum-basal-ganglia-foundation", title: "Cerebellum & Basal Ganglia - Foundation", estimatedMinutes: 20,
        summary: "The cerebellum coordinates movement and balance while the basal ganglia modulate voluntary movement initiation. Both work with the motor cortex for smooth, purposeful movements.",
        contentMd: `# Cerebellum & Basal Ganglia

## CEREBELLUM

### Location & External Features
- Lies in the **posterior cranial fossa**, behind the pons and medulla
- Separated from cerebrum by **tentorium cerebelli**
- Connected to brainstem by 3 pairs of **cerebellar peduncles**
- Has 2 **hemispheres** + midline **vermis**

### Lobes (Anatomical Division)
| Lobe | Separation |
|------|-----------|
| Anterior lobe | Above primary fissure |
| Posterior lobe | Between primary and posterolateral fissures |
| Flocculonodular lobe | Below posterolateral fissure |

### Functional Division (Most Important)
| Division | Structure | Input | Function |
|----------|-----------|-------|----------|
| **Vestibulocerebellum** | Flocculonodular lobe | Vestibular nuclei | Balance, eye movements |
| **Spinocerebellum** | Vermis + paravermal (intermediate) zone | Spinocerebellar tracts | Posture, gait, limb coordination |
| **Cerebrocerebellum** (Neocerebellum) | Lateral hemispheres | Cerebral cortex (via pontine nuclei) | Planning, fine skilled movements |

### Deep Cerebellar Nuclei (Medial to Lateral)
1. **Fastigial** nucleus (most medial)
2. **Globose** nucleus
3. **Emboliform** nucleus
4. **Dentate** nucleus (largest, most lateral)

## BASAL GANGLIA

### Components
- **Caudate nucleus**: C-shaped, follows lateral ventricle
- **Putamen**: Lateral to globus pallidus
- **Globus pallidus**: Internal (GPi) and external (GPe) segments
- **Subthalamic nucleus** (STN): In diencephalon
- **Substantia nigra**: In midbrain; pars compacta (SNc, dopaminergic) and pars reticulata (SNr)

### Terminology
- **Striatum** = Caudate + Putamen (input nuclei)
- **Lentiform (Lenticular) nucleus** = Putamen + Globus pallidus
- **Corpus striatum** = Caudate + Lentiform nucleus
- **Neostriatum** = Caudate + Putamen
- The **internal capsule** separates the caudate from the lentiform nucleus`,
        mnemonics: [
          { text: "Don't Eat Greasy Food for deep cerebellar nuclei", explanation: "Dentate, Emboliform, Globose, Fastigial - from lateral to medial" },
          { text: "Put GP in Lentil soup for lentiform nucleus", explanation: "Lentiform (Lenticular) nucleus = PUTamen + Globus Pallidus" }
        ],
        keyPoints: [
          "Cerebellum: 3 functional divisions - vestibulocerebellum (balance), spinocerebellum (posture), cerebrocerebellum (planning)",
          "Deep cerebellar nuclei lateral to medial: Dentate, Emboliform, Globose, Fastigial",
          "Dentate is the largest cerebellar nucleus",
          "Striatum (caudate + putamen) = input nuclei of basal ganglia",
          "Lentiform nucleus = putamen + globus pallidus; separated from caudate by internal capsule"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 23, 24", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 6 - Cerebellum, Ch 7 - Basal Ganglia", edition: "10th" }
        ] },
      { layer: 2, slug: "cerebellum-basal-ganglia-mechanism", title: "Cerebellum & Basal Ganglia - Mechanism", estimatedMinutes: 30,
        summary: "Detailed cerebellar circuitry, basal ganglia direct and indirect pathways, dopaminergic modulation, and connections with thalamus and motor cortex.",
        contentMd: `# Detailed Circuitry

## CEREBELLAR CIRCUITRY

### Cerebellar Cortex Layers (Outer to Inner)
1. **Molecular layer**: Stellate and basket cells (inhibitory)
2. **Purkinje cell layer**: Large inhibitory neurons; ONLY output of cerebellar cortex
3. **Granular layer**: Granule cells (only excitatory neurons in cerebellar cortex)

### Key Principle
- **Purkinje cells are GABAergic (inhibitory)** and project to deep cerebellar nuclei
- Deep cerebellar nuclei are the FINAL OUTPUT of the cerebellum (excitatory)
- So cerebellum works by: Purkinje cells INHIBIT deep nuclei → deep nuclei OUTPUT

### Input Fibers
- **Climbing fibers**: From inferior olive → directly to Purkinje cells (powerful excitation)
- **Mossy fibers**: From all other sources → granule cells → parallel fibers → Purkinje cells

### Cerebellar Connections Summary
| Division | Input | Deep Nucleus | Output Target |
|----------|-------|-------------|---------------|
| Vestibulocerebellum | Vestibular | Fastigial (+ direct to vestibular nuclei) | Vestibular nuclei → eye movements, balance |
| Spinocerebellum (vermis) | Spinocerebellar | Fastigial | Reticular formation → posture |
| Spinocerebellum (intermediate) | Spinocerebellar | Globose + Emboliform (interposed) | Red nucleus → rubrospinal tract |
| Cerebrocerebellum | Corticopontine | Dentate | VL thalamus → motor cortex (planning) |

## BASAL GANGLIA CIRCUITRY

### Direct Pathway (Facilitates Movement)
\`\`\`
Cortex → Striatum (D1 receptors) → GPi/SNr [INHIBIT]
    → GPi/SNr → Thalamus (VL/VA) [LESS INHIBITION = MORE EXCITATION]
        → Thalamus → Motor Cortex → MOVEMENT
\`\`\`

### Indirect Pathway (Suppresses Unwanted Movement)
\`\`\`
Cortex → Striatum (D2 receptors) → GPe [INHIBIT]
    → GPe → STN [LESS INHIBITION = MORE EXCITATION of STN]
        → STN → GPi/SNr [EXCITE]
            → GPi/SNr → Thalamus [MORE INHIBITION = LESS EXCITATION]
                → Thalamus → Motor Cortex → SUPPRESSED MOVEMENT
\`\`\`

### Dopamine from Substantia Nigra (pars compacta)
- **D1 receptors** (direct pathway): Dopamine EXCITES → facilitates movement
- **D2 receptors** (indirect pathway): Dopamine INHIBITS → reduces suppression → facilitates movement
- **Net effect of dopamine**: Facilitates movement via BOTH pathways

### In Parkinson Disease (Dopamine Deficiency):
- Direct pathway: Less facilitation (less D1 activation) → less movement
- Indirect pathway: Less inhibition (less D2 activation) → more suppression → less movement
- **Result**: Hypokinesia, rigidity, tremor

### In Huntington Disease (Striatal Degeneration):
- Loss of indirect pathway neurons → less suppression of unwanted movements
- **Result**: Hyperkinesia (chorea)`,
        mnemonics: [
          { text: "Direct = DO movement, Indirect = INHIBIT movement", explanation: "Direct pathway (D1): facilitates desired movements by inhibiting GPi → releasing thalamus. Indirect pathway (D2): suppresses unwanted movements via STN excitation of GPi" },
          { text: "Purkinje = Purely Inhibitory (GABAergic)", explanation: "Purkinje cells are the sole output of cerebellar cortex and are inhibitory (GABAergic), projecting to deep cerebellar nuclei" }
        ],
        keyPoints: [
          "Purkinje cells are GABAergic (inhibitory) and the only output of cerebellar cortex",
          "Climbing fibers from inferior olive; mossy fibers from all other sources",
          "Dentate nucleus projects to VL thalamus then to motor cortex (cerebrocerebellum output)",
          "Direct pathway (D1): Striatum inhibits GPi → releases thalamus → facilitates movement",
          "Indirect pathway (D2): Striatum inhibits GPe → releases STN → excites GPi → inhibits thalamus → suppresses movement",
          "Dopamine facilitates movement via both D1 (excite direct) and D2 (inhibit indirect) pathways"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 23, 24", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 6, 7", edition: "10th" }
        ] },
      { layer: 3, slug: "cerebellum-basal-ganglia-clinical", title: "Cerebellum & Basal Ganglia - Clinical", estimatedMinutes: 20,
        summary: "Clinical syndromes: cerebellar lesion signs (DANISH), Parkinson disease, Huntington disease, hemiballismus, and Wilson disease in the Indian context.",
        contentMd: `# Clinical Correlations

## CEREBELLAR LESIONS

### General Rule
- Cerebellar lesions produce **IPSILATERAL** signs (unlike cerebral lesions which produce contralateral signs)
- **Vermis lesions**: Truncal ataxia, gait disturbance (wide-based gait)
- **Hemisphere lesions**: Limb ataxia, intention tremor, dysmetria

### Signs of Cerebellar Disease (DANISH)
- **D**ysdiadochokinesia (inability to perform rapid alternating movements)
- **A**taxia (limb and/or gait)
- **N**ystagmus (horizontal, towards side of lesion)
- **I**ntention tremor (absent at rest, appears during purposeful movement)
- **S**canning (staccato) speech
- **H**ypotonia + Pendular reflexes

### Cerebellar Lesion by Division
| Division Affected | Signs |
|-------------------|-------|
| Flocculonodular (vestibulocerebellum) | Truncal ataxia, nystagmus, vertigo |
| Vermis (spinocerebellum) | Wide-based gait, truncal ataxia; common in alcoholic cerebellar degeneration |
| Hemisphere (cerebrocerebellum) | Ipsilateral limb ataxia, intention tremor, dysmetria, dysdiadochokinesia |

> **Clinical Pearl**: Chronic alcoholism causes degeneration of the superior vermis (anterior lobe), leading to wide-based gait ataxia with relatively preserved upper limb coordination.

## BASAL GANGLIA DISORDERS

### Parkinson Disease
- **Pathology**: Loss of dopaminergic neurons in substantia nigra pars compacta
- **Histology**: Lewy bodies (alpha-synuclein inclusions)
- **Clinical features** (classic tetrad):
  1. Resting tremor (pill-rolling, 4-6 Hz)
  2. Rigidity (lead-pipe/cogwheel)
  3. Bradykinesia (slowness of movement)
  4. Postural instability
- **Treatment**: Levodopa + Carbidopa (gold standard in India)
- **Deep brain stimulation**: STN or GPi stimulation for refractory cases

### Huntington Disease
- **Genetics**: Autosomal dominant; CAG trinucleotide repeat expansion on chromosome 4 (huntingtin gene)
- **Pathology**: Atrophy of caudate nucleus and putamen (striatum)
- **Features**: Chorea (involuntary dance-like movements) + dementia + psychiatric symptoms
- **Anticipation**: Earlier onset and severity in successive generations

### Hemiballismus
- **Lesion**: Contralateral subthalamic nucleus (usually vascular)
- **Feature**: Violent, flinging movements of one side of body

### Wilson Disease (Hepatolenticular Degeneration)
- **Common in India**: Autosomal recessive; copper accumulation
- **Gene**: ATP7B on chromosome 13
- **Basal ganglia involvement**: Copper deposited in putamen and globus pallidus (lentiform nucleus)
- **Features**: Wing-beating tremor, dystonia, Kayser-Fleischer ring (copper in Descemet membrane)
- **Diagnosis**: Low ceruloplasmin, high urinary copper, KF ring on slit lamp`,
        mnemonics: [
          { text: "DANISH for cerebellar signs", explanation: "Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Scanning speech, Hypotonia - the 6 cardinal signs of cerebellar disease" },
          { text: "TRAP for Parkinson features", explanation: "Tremor (resting, pill-rolling), Rigidity (cogwheel), Akinesia/Bradykinesia, Postural instability" }
        ],
        keyPoints: [
          "Cerebellar lesions cause IPSILATERAL signs (unlike cerebral: contralateral)",
          "DANISH = 6 signs of cerebellar disease: Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Scanning speech, Hypotonia",
          "Parkinson disease: substantia nigra dopamine loss; TRAP (Tremor, Rigidity, Akinesia, Postural instability)",
          "Huntington disease: CAG repeat on chromosome 4; caudate/putamen atrophy; chorea + dementia",
          "Hemiballismus: contralateral subthalamic nucleus lesion",
          "Wilson disease: copper in lentiform nucleus; KF ring, wing-beating tremor (common in India)"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Clinical Anatomy", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 6, 7 - Clinical", edition: "10th" }
        ] },
      { layer: 4, slug: "cerebellum-basal-ganglia-exam", title: "Cerebellum & Basal Ganglia - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield points on cerebellum and basal ganglia for NEXT/NEET PG examinations.",
        contentMd: `# Exam High Yield

## One-Liners - Cerebellum
- Largest deep cerebellar nucleus: **Dentate**
- Only output neuron of cerebellar cortex: **Purkinje cell (GABAergic/inhibitory)**
- Only excitatory neuron in cerebellar cortex: **Granule cell**
- Climbing fibers originate from: **Inferior olivary nucleus**
- Largest cerebellar peduncle: **Middle (brachium pontis)**
- Cerebellar lesions produce: **IPSILATERAL signs**
- Vermis lesion: **Truncal ataxia, wide-based gait**
- Hemisphere lesion: **Limb ataxia, intention tremor, dysmetria**
- Alcoholic cerebellar degeneration affects: **Superior vermis (anterior lobe)**
- Flocculonodular lobe lesion: **Truncal ataxia + nystagmus (vestibulocerebellum)**

## One-Liners - Basal Ganglia
- Striatum: **Caudate + Putamen** (input nuclei)
- Lentiform nucleus: **Putamen + Globus pallidus**
- Output nuclei of basal ganglia: **GPi + SNr**
- Direct pathway uses: **D1 receptors** (facilitates movement)
- Indirect pathway uses: **D2 receptors** (suppresses movement)
- Parkinson disease pathology: **Loss of SNc dopaminergic neurons; Lewy bodies**
- Parkinson tremor: **Resting, pill-rolling, 4-6 Hz**
- Huntington disease: **CAG repeat, chromosome 4, caudate atrophy, chorea**
- Hemiballismus lesion: **Contralateral subthalamic nucleus**
- Wilson disease copper deposits in: **Lentiform nucleus (putamen + GP)**
- Wilson disease gene: **ATP7B, chromosome 13**

## Comparison: Hypokinetic vs Hyperkinetic Disorders
| Feature | Hypokinetic (e.g., Parkinson) | Hyperkinetic (e.g., Huntington, Hemiballismus) |
|---------|------------------------------|----------------------------------------------|
| Movement | Decreased | Increased/involuntary |
| Pathology | Dopamine deficiency (SNc) | Striatal loss / STN lesion |
| Tone | Rigidity | Hypotonia |
| Tremor | Resting | Absent or choreiform |

## Deep Cerebellar Nuclei (Medial to Lateral)
| Nucleus | Mnemonic Letter | Connected Division |
|---------|----------------|-------------------|
| Fastigial | F | Vestibulocerebellum (flocculonodular) |
| Globose | G | Spinocerebellum (intermediate) |
| Emboliform | E | Spinocerebellum (intermediate) |
| Dentate | D | Cerebrocerebellum (lateral hemisphere) |`,
        mnemonics: [
          { text: "FG-ED for deep nuclei medial to lateral", explanation: "Fastigial, Globose, Emboliform, Dentate - from medial to lateral" },
          { text: "CAG-4-Chorea for Huntington", explanation: "CAG trinucleotide repeat on Chromosome 4 causes Chorea in Huntington disease" }
        ],
        keyPoints: [
          "Dentate = largest cerebellar nucleus; Purkinje cell = only output of cerebellar cortex (inhibitory)",
          "Direct pathway: D1, facilitates; Indirect pathway: D2, suppresses",
          "Parkinson = SNc dopamine loss, Lewy bodies, TRAP features",
          "Huntington = CAG on chr 4, caudate atrophy, chorea + dementia",
          "Wilson disease = ATP7B chr 13, copper in lentiform nucleus, KF ring"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 23, 24", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 6, 7", edition: "10th" }
        ] },
      { layer: 5, slug: "cerebellum-basal-ganglia-recall", title: "Cerebellum & Basal Ganglia - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for cerebellum and basal ganglia.",
        contentMd: `# Active Recall

**Q1:** Name the 3 functional divisions of cerebellum and their main functions.
> Vestibulocerebellum (balance), Spinocerebellum (posture/gait), Cerebrocerebellum (planning/fine movements)

**Q2:** List the deep cerebellar nuclei from medial to lateral.
> Fastigial, Globose, Emboliform, Dentate

**Q3:** What is the only output neuron of the cerebellar cortex, and is it excitatory or inhibitory?
> Purkinje cell; it is inhibitory (GABAergic)

**Q4:** What are the components of the striatum and lentiform nucleus?
> Striatum = Caudate + Putamen; Lentiform nucleus = Putamen + Globus pallidus

**Q5:** Describe the direct pathway of basal ganglia.
> Cortex -> Striatum (D1) -> inhibits GPi/SNr -> releases thalamus -> excites motor cortex -> facilitates movement

**Q6:** What is the pathology in Parkinson disease and what are the 4 cardinal features?
> Loss of dopaminergic neurons in SNc + Lewy bodies; TRAP: Tremor (resting), Rigidity, Akinesia/Bradykinesia, Postural instability

**Q7:** What nucleus is damaged in hemiballismus?
> Contralateral subthalamic nucleus

**Q8:** What mnemonic helps remember cerebellar signs?
> DANISH: Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Scanning speech, Hypotonia`,
        mnemonics: [],
        keyPoints: [
          "8 recall questions covering cerebellar divisions, nuclei, basal ganglia pathways, and clinical disorders"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 23, 24", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 6, 7", edition: "10th" }
        ] },
    ],
  },
  // ─── Topic 5: Spinal Cord & Tracts ──────────────────────────
  {
    topicCode: "AN-MOD-07-TOP-05",
    layers: [
      { layer: 1, slug: "spinal-cord-tracts-foundation", title: "Spinal Cord & Tracts - Foundation", estimatedMinutes: 20,
        summary: "The spinal cord extends from foramen magnum to L1-L2 (conus medullaris), has grey matter (H-shaped) centrally and white matter peripherally, and carries ascending (sensory) and descending (motor) tracts.",
        contentMd: `# Spinal Cord & Tracts

## External Features
- Extends from foramen magnum to lower border of **L1 vertebra** (adult) / **L3** (newborn)
- **Conus medullaris**: Tapered lower end at L1-L2
- **Filum terminale**: Extension of pia mater from conus to coccyx
- **Cauda equina**: Bundle of nerve roots below conus medullaris
- **Length**: ~45 cm in adults

### Enlargements
- **Cervical enlargement** (C4-T1): For upper limb (brachial plexus)
- **Lumbar enlargement** (L1-S3): For lower limb (lumbosacral plexus)

### Spinal Segments: 31 pairs
- Cervical: 8 (C1-C8)
- Thoracic: 12 (T1-T12)
- Lumbar: 5 (L1-L5)
- Sacral: 5 (S1-S5)
- Coccygeal: 1

## Internal Structure (Cross-Section)

### Grey Matter (H-shaped / butterfly-shaped)
Central grey matter arranged in horns:
| Horn | Location | Contains | Function |
|------|----------|----------|----------|
| **Anterior (ventral) horn** | Anterior | Motor neurons (alpha + gamma) | Motor output to skeletal muscles |
| **Posterior (dorsal) horn** | Posterior | Sensory relay neurons | Receives sensory input |
| **Lateral horn** | C8-L2 (intermediolateral cell column) | Sympathetic preganglionic neurons | Sympathetic outflow |
| **Sacral parasympathetic** | S2-S4 | Parasympathetic neurons | Pelvic organ innervation |

### Rexed Laminae
Grey matter divided into 10 laminae (I-X):
- Laminae I-VI: Posterior horn (sensory)
- Lamina VII: Intermediate zone (includes Clarke's column at T1-L2)
- Laminae VIII-IX: Anterior horn (motor)
- Lamina X: Around central canal

### White Matter (3 Funiculi)
| Funiculus | Location | Key Tracts |
|-----------|----------|------------|
| **Posterior (dorsal)** | Between dorsal horns | Fasciculus gracilis + cuneatus (DCML pathway) |
| **Lateral** | Between dorsal and ventral horns | Lateral corticospinal, spinothalamic, spinocerebellar tracts |
| **Anterior (ventral)** | Between ventral horns | Anterior corticospinal, anterior spinothalamic tracts |

## Key Ascending Tracts (Sensory)
| Tract | Modality | Crosses At |
|-------|----------|-----------|
| **Dorsal column (DCML)** | Fine touch, vibration, proprioception, 2-point discrimination | Medulla (internal arcuate fibers) |
| **Lateral spinothalamic** | Pain and temperature | Spinal cord (anterior white commissure, 1-2 segments above entry) |
| **Anterior spinothalamic** | Crude touch and pressure | Spinal cord |

## Key Descending Tracts (Motor)
| Tract | Function | Crosses At |
|-------|----------|-----------|
| **Lateral corticospinal** | Voluntary skilled movements (limbs) | Pyramidal decussation (lower medulla); 75-90% fibers |
| **Anterior corticospinal** | Axial/trunk muscles | Spinal cord level (before synapse) |
| **Rubrospinal** | Flexor tone in upper limbs | Midbrain (ventral tegmental decussation) |`,
        mnemonics: [
          { text: "DCML = Discriminative touch, Conscious proprioception, Medial lemniscus, Lateral (dorsal) column", explanation: "DCML pathway carries fine/discriminative touch, vibration, conscious proprioception; travels in dorsal columns; crosses in medulla as internal arcuate fibers to medial lemniscus" },
          { text: "Lateral is Large and Limbs", explanation: "Lateral corticospinal tract is the LARGEST descending tract and controls LIMB movements (voluntary skilled)" }
        ],
        keyPoints: [
          "Spinal cord ends at L1-L2 in adults (L3 in newborns); conus medullaris",
          "Grey matter: anterior horn (motor), posterior horn (sensory), lateral horn (sympathetic C8-L2)",
          "DCML (dorsal column): fine touch, vibration, proprioception; crosses in medulla",
          "Lateral spinothalamic: pain and temperature; crosses in spinal cord at anterior white commissure",
          "Lateral corticospinal: largest motor tract; 75-90% fibers cross at pyramidal decussation"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 25", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 4 - Spinal Cord", edition: "10th" }
        ] },
      { layer: 2, slug: "spinal-cord-tracts-mechanism", title: "Spinal Cord & Tracts - Mechanism", estimatedMinutes: 30,
        summary: "Detailed pathway anatomy for DCML, spinothalamic, and corticospinal tracts with neuron order, relay stations, and somatotopic organization.",
        contentMd: `# Detailed Tract Anatomy

## DCML Pathway (Dorsal Column - Medial Lemniscus)

### 3-Neuron Pathway
| Neuron | Cell Body | Course |
|--------|-----------|--------|
| **1st order** | Dorsal root ganglion | Enters spinal cord → ascends in ipsilateral dorsal column |
| **2nd order** | Nucleus gracilis / cuneatus (medulla) | Internal arcuate fibers → CROSS midline → medial lemniscus |
| **3rd order** | VPL nucleus of thalamus | Thalamus → postcentral gyrus (areas 3,1,2) |

### Somatotopic Organization in Dorsal Columns
- **Fasciculus gracilis** (medial): Lower limb (below T6); relay in nucleus gracilis
- **Fasciculus cuneatus** (lateral): Upper limb (above T6); relay in nucleus cuneatus
- Mnemonic: **G**racilis = **G**round level (lower limb)

### Key Points
- DOES NOT cross in the spinal cord (crosses in medulla)
- Lesion causes IPSILATERAL loss below lesion level
- Tests: Tuning fork (vibration), Romberg test (proprioception), 2-point discrimination

## Spinothalamic Tract (Anterolateral System)

### Pain & Temperature (Lateral Spinothalamic)
| Neuron | Cell Body | Course |
|--------|-----------|--------|
| **1st order** | Dorsal root ganglion | Enters dorsal horn; may ascend/descend 1-2 segments (Lissauer's tract) |
| **2nd order** | Posterior horn (laminae I, II, V) | Crosses via anterior white commissure → lateral spinothalamic tract |
| **3rd order** | VPL nucleus of thalamus | Thalamus → postcentral gyrus |

### Somatotopic Organization
- In lateral spinothalamic tract: **sacral fibers are most lateral, cervical fibers are most medial**
- This is important in **syringomyelia** (central cord expansion) and **extramedullary tumors**

### Key Points
- Crosses 1-2 segments ABOVE the level of entry in spinal cord
- Lesion above crossing causes CONTRALATERAL loss of pain/temperature below lesion
- Central cord lesion (syringomyelia) first damages crossing fibers → bilateral loss at that level

## Corticospinal Tract (Pyramidal Tract)

### Course: Motor Cortex to Anterior Horn
\`\`\`
Primary motor cortex (Area 4, layer V - Betz cells)
    ↓
Corona radiata
    ↓
Posterior limb of internal capsule (somatotopy: Arm-Knee-Leg from front to back)
    ↓
Crus cerebri (middle 3/5 of cerebral peduncle)
    ↓
Basis pontis (scattered bundles)
    ↓
Pyramid of medulla
    ↓ DECUSSATION (75-90% cross)
Lateral corticospinal tract (crossed) → alpha motor neurons
(10-25% remain uncrossed → Anterior corticospinal tract → cross at spinal level)
\`\`\`

### Somatotopic Organization in Internal Capsule (Posterior Limb)
- Anterior part: Face, arm
- Posterior part: Trunk, leg
- Sensory fibers posterior to motor fibers

## Spinocerebellar Tracts (Proprioception to Cerebellum)
| Tract | Origin | Side | Peduncle |
|-------|--------|------|----------|
| **Posterior (dorsal)** spinocerebellar | Clarke's column (T1-L2) | Ipsilateral | Inferior cerebellar peduncle |
| **Anterior (ventral)** spinocerebellar | Spinal border cells | Contralateral (crosses twice) | Superior cerebellar peduncle |
| **Cuneocerebellar** | Accessory cuneate nucleus | Ipsilateral | Inferior cerebellar peduncle |

- Posterior spinocerebellar: Fastest conducting tract in the body
- Anterior spinocerebellar: Crosses twice (double-cross), so effectively ipsilateral`,
        mnemonics: [
          { text: "Gracilis = Ground (lower limb, medial)", explanation: "Fasciculus Gracilis carries lower limb sensation and is located medially in the dorsal column; Cuneatus carries upper limb and is lateral" },
          { text: "DCML crosses in Medulla; STT crosses in Spinal cord", explanation: "Key differentiator: DCML pathway decussates in medulla (internal arcuate fibers to medial lemniscus). Spinothalamic tract crosses in spinal cord (anterior white commissure)" }
        ],
        keyPoints: [
          "DCML: 3-neuron pathway; crosses in MEDULLA; gracilis (lower limb, medial) + cuneatus (upper limb, lateral)",
          "Spinothalamic: crosses in SPINAL CORD at anterior white commissure, 1-2 segments above entry",
          "Corticospinal: 75-90% fibers cross at pyramidal decussation; passes through posterior limb of internal capsule",
          "In lateral spinothalamic tract: sacral fibers are most lateral (lamination important for tumor localization)",
          "Posterior spinocerebellar tract: fastest conducting tract in the body; enters via inferior cerebellar peduncle"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 25", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 4 - Spinal Cord Tracts", edition: "10th" }
        ] },
      { layer: 3, slug: "spinal-cord-tracts-clinical", title: "Spinal Cord & Tracts - Clinical", estimatedMinutes: 20,
        summary: "Clinical syndromes of spinal cord lesions including Brown-Sequard, syringomyelia, subacute combined degeneration, anterior cord syndrome, and complete transection.",
        contentMd: `# Clinical Correlations

## Brown-Sequard Syndrome (Hemisection of Spinal Cord)
Most commonly caused by: Penetrating trauma (stab wounds)

| Side | Finding | Tract/Structure Involved |
|------|---------|--------------------------|
| **Ipsilateral** | LMN signs at level of lesion | Anterior horn cells |
| **Ipsilateral** | UMN signs below lesion | Lateral corticospinal tract |
| **Ipsilateral** | Loss of fine touch, vibration, proprioception below lesion | Dorsal column (DCML) |
| **Contralateral** | Loss of pain and temperature below lesion (1-2 segments lower) | Lateral spinothalamic tract |

> **Clinical Pearl**: The pain/temperature loss is contralateral because spinothalamic tract has ALREADY crossed at the spinal cord level. DCML loss is ipsilateral because it has NOT yet crossed (crosses in medulla).

## Syringomyelia
- **Pathology**: Fluid-filled cavity (syrinx) in central spinal cord, usually cervical
- **First fibers affected**: Crossing fibers of anterior white commissure (spinothalamic)
- **Result**: Bilateral loss of pain and temperature at affected levels ("cape-like" / "shawl-like" distribution in cervical syringomyelia)
- **Preserved**: Fine touch and proprioception (dorsal columns intact)
- **Dissociated sensory loss**: Pain/temperature lost but fine touch preserved at same level
- If syrinx expands: LMN signs in upper limbs (anterior horn), UMN signs in lower limbs (corticospinal)

## Subacute Combined Degeneration (Vitamin B12 Deficiency)
- Affects **dorsal columns + lateral corticospinal tracts**
- **DCML loss**: Loss of vibration, proprioception (positive Romberg test), sensory ataxia
- **Corticospinal damage**: UMN signs in legs (spasticity, extensor plantar)
- Common in India: vegetarian diet, tropical sprue, pernicious anemia

## Anterior Cord Syndrome (Anterior Spinal Artery Occlusion)
- **Damaged**: Corticospinal tracts (bilateral) + Spinothalamic tracts (bilateral) + Anterior horns
- **Spared**: Dorsal columns (supplied by posterior spinal arteries)
- **Result**: Bilateral motor paralysis + bilateral loss of pain/temperature; PRESERVED fine touch, vibration, proprioception

## Complete Spinal Cord Transection
### Spinal Shock (Immediate)
- Below lesion: Flaccid paralysis, areflexia, loss of all sensation, urinary retention, loss of autonomic function
- Duration: Days to weeks

### After Recovery from Spinal Shock
- **UMN signs below lesion**: Spastic paralysis, hyperreflexia, extensor plantar (Babinski positive)
- **LMN signs at level**: Flaccid, muscle wasting
- **Autonomic dysreflexia**: In lesions above T6; dangerous hypertension triggered by bladder distension

## Tabes Dorsalis (Neurosyphilis)
- Selective degeneration of dorsal columns and dorsal roots
- **Features**: Lightning pains, sensory ataxia (positive Romberg), Argyll Robertson pupil (accommodates but does not react to light)
- Loss of vibration, proprioception, deep tendon reflexes`,
        mnemonics: [
          { text: "Brown-Sequard: Same side = Motor + DCML; Opposite side = Pain/Temp", explanation: "In spinal cord hemisection: ipsilateral corticospinal (UMN) + DCML loss; contralateral spinothalamic (pain/temp) loss - because STT has already crossed" },
          { text: "SCD = Subacute Combined Degeneration = B12 = DC + CST", explanation: "Vitamin B12 deficiency causes combined degeneration of Dorsal Columns (DCML) + Corticospinal Tracts - common in Indian vegetarians" }
        ],
        keyPoints: [
          "Brown-Sequard: ipsilateral UMN + DCML loss; contralateral pain/temperature loss",
          "Syringomyelia: central cord cavity; dissociated sensory loss (pain/temp lost, touch preserved); cape distribution",
          "Subacute combined degeneration (B12): dorsal columns + corticospinal tracts; common in Indian vegetarians",
          "Anterior cord syndrome: bilateral motor paralysis + pain/temp loss; dorsal columns SPARED",
          "Tabes dorsalis (neurosyphilis): dorsal column loss + Argyll Robertson pupil"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Clinical Anatomy", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 4 - Clinical", edition: "10th" }
        ] },
      { layer: 4, slug: "spinal-cord-tracts-exam", title: "Spinal Cord & Tracts - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield points on spinal cord and tracts for NEXT/NEET PG examinations.",
        contentMd: `# Exam High Yield

## One-Liners
- Spinal cord ends in adults at: **Lower border of L1 (L1-L2)**
- Spinal cord ends in newborns at: **L3**
- Total spinal segments: **31** (8C, 12T, 5L, 5S, 1Co)
- Lateral horn found at: **C8-L2** (sympathetic preganglionic neurons)
- Sacral parasympathetic outflow: **S2-S4**
- DCML pathway crosses at: **Medulla** (internal arcuate fibers)
- Spinothalamic tract crosses at: **Spinal cord** (anterior white commissure)
- Largest descending tract: **Lateral corticospinal tract**
- Percentage crossing at pyramidal decussation: **75-90%**
- Fastest conducting tract: **Posterior spinocerebellar**
- Fasciculus gracilis carries: **Lower limb** sensation (below T6)
- Fasciculus cuneatus carries: **Upper limb** sensation (above T6)
- 3rd order neuron of DCML relay: **VPL thalamus**
- Clarke's column location: **T1-L2** (origin of posterior spinocerebellar tract)
- Dissociated sensory loss: **Syringomyelia** (pain/temp lost, touch preserved)
- Brown-Sequard contralateral loss: **Pain and temperature** (spinothalamic)
- Subacute combined degeneration vitamin: **B12**
- Anterior spinal artery syndrome spares: **Dorsal columns**
- Argyll Robertson pupil is seen in: **Tabes dorsalis (neurosyphilis)**

## Quick Comparison: Cord Syndromes
| Syndrome | Motor | DCML | Pain/Temp |
|----------|-------|------|-----------|
| Complete transection | Bilateral loss | Bilateral loss | Bilateral loss |
| Brown-Sequard | Ipsilateral loss | Ipsilateral loss | Contralateral loss |
| Anterior cord | Bilateral loss | Preserved | Bilateral loss |
| Posterior cord (tabes) | Preserved | Bilateral loss | Preserved |
| Syringomyelia | Late (if expands) | Preserved (early) | Bilateral at level |

## UMN vs LMN Lesion Signs
| Feature | UMN | LMN |
|---------|-----|-----|
| Tone | Spastic (clasp-knife) | Flaccid |
| Reflexes | Hyperreflexia | Hyporeflexia/areflexia |
| Babinski | Positive (extensor plantar) | Negative (flexor plantar) |
| Atrophy | Mild (disuse) | Severe (denervation) |
| Fasciculations | Absent | Present |`,
        mnemonics: [
          { text: "DCML = Medulla; STT = Spinal cord (crossing)", explanation: "The single most important fact: DCML crosses in medulla, spinothalamic crosses in spinal cord - this determines clinical findings in hemisection" },
          { text: "Gracilis = Ground, Cuneatus = Ceiling", explanation: "Gracilis (medial): Ground level = lower limb; Cuneatus (lateral): Ceiling = upper limb in the dorsal column" }
        ],
        keyPoints: [
          "DCML crosses in medulla; STT crosses in spinal cord - determines Brown-Sequard findings",
          "Cord ends at L1-L2 (adult), L3 (newborn); LP at L3-L4",
          "Syringomyelia = dissociated sensory loss (pain/temp lost, touch preserved)",
          "Anterior cord syndrome: motor + pain/temp lost bilaterally, dorsal columns spared",
          "SCD (B12 deficiency): dorsal columns + corticospinal tracts"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 25", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 4", edition: "10th" }
        ] },
      { layer: 5, slug: "spinal-cord-tracts-recall", title: "Spinal Cord & Tracts - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for spinal cord and tracts.",
        contentMd: `# Active Recall

**Q1:** At what vertebral level does the spinal cord end in adults?
> Lower border of L1 (L1-L2); this is the conus medullaris

**Q2:** Which tract carries fine touch, vibration, and proprioception, and where does it cross?
> DCML (Dorsal Column - Medial Lemniscus) pathway; crosses in the MEDULLA via internal arcuate fibers

**Q3:** Which tract carries pain and temperature, and where does it cross?
> Lateral spinothalamic tract; crosses in the SPINAL CORD at the anterior white commissure

**Q4:** In Brown-Sequard syndrome, which sensory modality is lost on the contralateral side and why?
> Pain and temperature (contralateral), because the spinothalamic tract has already crossed in the spinal cord

**Q5:** What is dissociated sensory loss and which condition classically causes it?
> Loss of pain/temperature with preservation of fine touch at the same level; caused by syringomyelia (central cord cavity disrupting crossing STT fibers)

**Q6:** What structures are damaged in subacute combined degeneration and what is the cause?
> Dorsal columns + lateral corticospinal tracts; caused by Vitamin B12 deficiency

**Q7:** What is spared in anterior cord syndrome and why?
> Dorsal columns are spared because they are supplied by posterior spinal arteries, not the anterior spinal artery

**Q8:** Which is the fastest conducting tract in the spinal cord?
> Posterior (dorsal) spinocerebellar tract`,
        mnemonics: [],
        keyPoints: [
          "8 recall questions covering spinal cord anatomy, tracts, and clinical syndromes"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 25", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 4", edition: "10th" }
        ] },
    ],
  },
  // ─── Topic 6: Blood Supply of Brain ─────────────────────────
  {
    topicCode: "AN-MOD-07-TOP-06",
    layers: [
      { layer: 1, slug: "blood-supply-brain-foundation", title: "Blood Supply of Brain - Foundation", estimatedMinutes: 20,
        summary: "The brain receives blood from the internal carotid arteries (anterior circulation) and vertebral arteries (posterior circulation), which anastomose at the circle of Willis on the base of the brain.",
        contentMd: `# Blood Supply of Brain

## Arterial Supply: Two Systems

### 1. Internal Carotid System (Anterior Circulation) - 80% of cerebral blood flow
- **Internal carotid artery (ICA)** enters skull through carotid canal
- Passes through cavernous sinus (S-shaped = carotid siphon)
- Terminal branches:
  - **Anterior cerebral artery (ACA)**
  - **Middle cerebral artery (MCA)** - largest terminal branch

### 2. Vertebrobasilar System (Posterior Circulation) - 20% of cerebral blood flow
- **Vertebral arteries** (from subclavian) ascend through foramen transversarium of C1-C6
- Enter skull through **foramen magnum**
- Unite at lower border of pons to form **basilar artery**
- Basilar artery terminates as **posterior cerebral arteries (PCA)** (x2)

## Circle of Willis
Anastomotic ring on the base of brain (interpeduncular fossa):

\`\`\`
        ACA ──── ACoA ──── ACA
         |                   |
        ICA                 ICA
         |                   |
        PCoA               PCoA
         |                   |
        PCA ──── BA ──── PCA
\`\`\`

### Components (in order)
1. **Anterior communicating artery (ACoA)**: Connects 2 ACAs
2. **Anterior cerebral arteries (ACA)** x2
3. **Internal carotid arteries** x2 (terminal part)
4. **Posterior communicating arteries (PCoA)** x2: Connect ICA to PCA
5. **Posterior cerebral arteries (PCA)** x2

## Cerebral Artery Territories

| Artery | Supplies |
|--------|----------|
| **ACA** | Medial surface of hemisphere (leg area of motor/sensory cortex), corpus callosum |
| **MCA** | Lateral surface of hemisphere (arm/face area, Broca, Wernicke, auditory cortex), insula, basal ganglia (lenticulostriate branches) |
| **PCA** | Occipital lobe (visual cortex), inferior temporal lobe, thalamus (via thalamogeniculate branches) |

## Venous Drainage
- **Superficial cerebral veins**: Drain cortical surface → dural venous sinuses
- **Deep cerebral veins**: Internal cerebral veins → Great vein of Galen → Straight sinus
- All venous blood → internal jugular veins
- **No valves** in cerebral veins and dural sinuses`,
        mnemonics: [
          { text: "MCA = Main Cerebral Artery", explanation: "MCA is the largest branch of ICA, supplies the largest territory (lateral surface), and is the most commonly affected artery in stroke" },
          { text: "ACA = Legs, MCA = Arms/Face, PCA = Eyes", explanation: "ACA supplies medial surface (leg cortex), MCA supplies lateral surface (arm/face cortex, language areas), PCA supplies occipital lobe (visual cortex)" }
        ],
        keyPoints: [
          "Brain receives blood from ICA (anterior, 80%) and vertebrobasilar (posterior, 20%) systems",
          "Circle of Willis: ACoA + 2 ACA + 2 ICA + 2 PCoA + 2 PCA (connects anterior and posterior systems)",
          "ACA: medial surface (leg); MCA: lateral surface (arm, face, language); PCA: occipital (vision)",
          "MCA is the largest terminal branch of ICA and most common site of stroke",
          "Lenticulostriate arteries (branches of MCA) supply basal ganglia; most common site of hypertensive bleed"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 26", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 9 - Blood Supply of CNS", edition: "10th" }
        ] },
      { layer: 2, slug: "blood-supply-brain-mechanism", title: "Blood Supply of Brain - Mechanism", estimatedMinutes: 30,
        summary: "Detailed anatomy of cerebral arteries, branches, territory boundaries, watershed zones, venous sinuses, and cerebral autoregulation.",
        contentMd: `# Detailed Vascular Anatomy

## Anterior Cerebral Artery (ACA) - Detailed
### Course
ICA terminal bifurcation → passes above optic chiasm → enters longitudinal fissure → curves around genu of corpus callosum

### Branches
- **Medial striate artery (of Heubner)**: Supplies head of caudate, anterior limb of internal capsule
- **Callosomarginal artery**: Supplies cingulate gyrus
- **Pericallosal artery**: Follows corpus callosum

### Territory
- Medial surface: From frontal pole to parieto-occipital sulcus
- Paracentral lobule (leg area of homunculus)
- Corpus callosum (anterior 4/5)

## Middle Cerebral Artery (MCA) - Detailed
### Course
ICA terminal bifurcation → lateral sulcus (Sylvian fissure) → divides into superior and inferior divisions

### Branches
- **Lenticulostriate arteries** (lateral striate): Supply putamen, lateral globus pallidus, internal capsule (posterior limb)
  - Called "arteries of stroke" or "Charcot arteries" - most common site of hypertensive intracerebral hemorrhage
- **Superior division**: Broca's area, precentral and postcentral gyri (arm/face)
- **Inferior division**: Wernicke's area, temporal lobe, angular gyrus

### Territory
- Lateral surface of hemisphere (most extensive)
- Insula
- Deep structures: Basal ganglia, internal capsule (via lenticulostriate)

## Posterior Cerebral Artery (PCA) - Detailed
### Course
Terminal bifurcation of basilar artery → curves around midbrain → reaches occipital lobe

### Branches
- **Thalamogeniculate**: Thalamus (VPL, VPM nuclei)
- **Thalamoperforating**: Medial thalamus, midbrain
- **Posterior choroidal**: Choroid plexus
- **Calcarine branch**: Primary visual cortex

### Territory
- Occipital lobe (visual cortex)
- Inferior temporal lobe
- Thalamus, midbrain

## Vertebral Artery Branches
- **Posterior inferior cerebellar artery (PICA)**: Largest branch; supplies lateral medulla + inferior cerebellum
- **Anterior spinal artery**: Supplies anterior 2/3 of spinal cord

## Basilar Artery Branches
- **Anterior inferior cerebellar artery (AICA)**: Supplies cerebellopontine angle, lower pons
- **Superior cerebellar artery (SCA)**: Supplies superior cerebellum, upper pons
- **Pontine branches**: Pons

## Watershed (Border Zone) Areas
Regions between two major arterial territories; most vulnerable to hypoperfusion.
| Watershed Zone | Between | Location |
|---------------|---------|----------|
| **Anterior** | ACA and MCA | Parasagittal cortex (upper limb proximal) |
| **Posterior** | MCA and PCA | Parieto-occipital region |
| **Internal** | Lenticulostriate and cortical MCA | Corona radiata, centrum semiovale |

> **Clinical Pearl**: Watershed infarcts cause "man in a barrel" syndrome (bilateral proximal arm weakness with sparing of hands and legs) due to parasagittal cortex ischemia.

## Cerebral Autoregulation
- Brain maintains constant blood flow over MAP range of **60-160 mmHg**
- Below 60 mmHg: ischemia; Above 160 mmHg: breakthrough vasodilation → edema
- CO2 is the most potent regulator: hypercapnia → vasodilation → increased flow
- Chronic hypertension shifts autoregulation curve to the right`,
        mnemonics: [
          { text: "Charcot arteries = Lenticulostriate = Stroke arteries", explanation: "Lenticulostriate arteries (branches of MCA) are called Charcot arteries or arteries of stroke because they are the most common site of hypertensive intracerebral hemorrhage" },
          { text: "PICA-AICA-SCA for cerebellar arteries (bottom to top)", explanation: "PICA (inferior cerebellum, lateral medulla), AICA (middle, CPA), SCA (superior cerebellum) - remember bottom to top" }
        ],
        keyPoints: [
          "Lenticulostriate arteries (MCA branches) = 'arteries of stroke'; supply putamen, GP, internal capsule",
          "ACA supplies medial surface including paracentral lobule (leg) and corpus callosum",
          "PCA supplies visual cortex and thalamus; PICA supplies lateral medulla",
          "Watershed zones are between two arterial territories; vulnerable to hypotension",
          "Cerebral autoregulation maintains flow at MAP 60-160 mmHg; CO2 is the most potent vasodilator"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 26", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 9 - Blood Supply of CNS", edition: "10th" }
        ] },
      { layer: 3, slug: "blood-supply-brain-clinical", title: "Blood Supply of Brain - Clinical", estimatedMinutes: 20,
        summary: "Stroke syndromes by arterial territory, berry aneurysm sites, transient ischemic attacks, and venous sinus thrombosis in the Indian context.",
        contentMd: `# Clinical Correlations

## Stroke Syndromes by Arterial Territory

### ACA Stroke
- **Motor**: Contralateral lower limb weakness (paracentral lobule)
- **Sensory**: Contralateral lower limb sensory loss
- **Personality changes**: Abulia (lack of will), apathy (prefrontal involvement)
- **Urinary incontinence** (paracentral lobule involvement)
- **Grasp reflex** may be present

### MCA Stroke (Most Common Stroke Territory)
- **Motor**: Contralateral face and upper limb weakness (sparing leg)
- **Sensory**: Contralateral face and upper limb sensory loss
- **Language**: Aphasia if dominant hemisphere (Broca's/Wernicke's/Global)
- **Neglect**: If non-dominant hemisphere (hemispatial neglect)
- **Homonymous hemianopia**: Contralateral (optic radiation involvement)
- **Gaze deviation**: Eyes deviate TOWARDS the lesion (look at the lesion)

### PCA Stroke
- **Visual**: Contralateral homonymous hemianopia WITH macular sparing (MCA supplies macular cortex partly)
- **Thalamic syndrome** (Dejerine-Roussy): Thalamic pain, contralateral sensory loss, ataxia
- **Memory loss**: If hippocampal involvement
- **Alexia without agraphia**: Left PCA + splenium involvement

### Basilar Artery Occlusion
- **Locked-in syndrome**: Patient conscious but quadriplegic and mute; can only move eyes vertically
- Bilateral pontine infarct (ventral pons)
- Reticular formation (ARAS) spared → consciousness preserved

### PICA Occlusion = Wallenberg Syndrome
(Covered in brainstem topic - lateral medullary syndrome)

## Berry (Saccular) Aneurysms
- Most common at **bifurcation points** of circle of Willis
- **Sites** (in order of frequency):
  1. **ACoA** (most common - 30-35%)
  2. **PCoA** (junction with ICA - 30%)
  3. **MCA bifurcation** (20%)
  4. **Basilar tip** (5%)
- Rupture → **Subarachnoid hemorrhage** (thunderclap headache)
- **PCoA aneurysm**: Compresses CN III → pupil-involving third nerve palsy (fixed, dilated pupil)

> **Clinical Pearl**: A sudden severe headache with CN III palsy (dilated pupil) is PCoA aneurysm until proven otherwise - neurosurgical emergency.

## Cerebral Venous Sinus Thrombosis (CVST)
- **Common in India**: Postpartum (most common cause in India), OCP use, dehydration, infections
- **Superior sagittal sinus thrombosis**: Headache, seizures, bilateral cortical infarcts (parasagittal)
- **Cavernous sinus thrombosis**: Proptosis, chemosis, ophthalmoplegia, CN III/IV/V1/V2/VI palsy
  - Common cause: Danger triangle of face infections (nose/upper lip → cavernous sinus via facial vein → ophthalmic veins)
- **Diagnosis**: MRI with venography (MRV); CT venography
- **Treatment**: Anticoagulation (even if hemorrhagic infarct)

## Transient Ischemic Attack (TIA)
- Brief neurological deficit that resolves within **24 hours** (usually minutes)
- Warning sign for impending stroke
- Common cause in India: Atherosclerosis of ICA, cardioembolism
- Amaurosis fugax: Transient monocular blindness (emboli to ophthalmic artery from ICA)`,
        mnemonics: [
          { text: "ACA = Leg; MCA = Arm+Face; PCA = Vision", explanation: "The most tested stroke localization: ACA territory affects leg (medial cortex), MCA affects face/arm and language (lateral cortex), PCA affects vision (occipital cortex)" },
          { text: "ACoA = Most common berry aneurysm site", explanation: "Anterior Communicating Artery is the single most common site for berry aneurysms (30-35%); PCoA is 2nd; rupture causes SAH" }
        ],
        keyPoints: [
          "MCA stroke is the most common: contralateral face + arm weakness, language if dominant, neglect if non-dominant",
          "ACA stroke: contralateral leg weakness + personality change + incontinence",
          "PCA stroke: contralateral homonymous hemianopia with macular sparing",
          "ACoA is most common berry aneurysm site; PCoA aneurysm compresses CN III (dilated pupil)",
          "CVST common in India: postpartum, OCP; danger triangle infections cause cavernous sinus thrombosis",
          "Locked-in syndrome: basilar artery occlusion; conscious but quadriplegic"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Clinical Anatomy", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 9 - Clinical", edition: "10th" }
        ] },
      { layer: 4, slug: "blood-supply-brain-exam", title: "Blood Supply of Brain - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield points on cerebral blood supply for NEXT/NEET PG examinations.",
        contentMd: `# Exam High Yield

## One-Liners
- Most common artery involved in stroke: **MCA**
- Arteries of stroke (Charcot arteries): **Lenticulostriate** (branches of MCA)
- Most common site of hypertensive intracerebral hemorrhage: **Putamen** (lenticulostriate arteries)
- Most common site of berry aneurysm: **ACoA (Anterior communicating artery)**
- Aneurysm causing CN III palsy: **PCoA (Posterior communicating artery)**
- Artery supplying leg area: **ACA**
- Artery supplying Broca's and Wernicke's: **MCA**
- Artery supplying visual cortex: **PCA**
- Locked-in syndrome: **Basilar artery** occlusion (ventral pons)
- Largest branch of vertebral artery: **PICA**
- PICA occlusion: **Wallenberg syndrome** (lateral medullary)
- Anterior spinal artery supplies: **Anterior 2/3 of spinal cord**
- Posterior spinal arteries supply: **Dorsal columns** (posterior 1/3)
- Macular sparing in PCA stroke because: **Dual blood supply from MCA and PCA**
- Watershed infarct: **Between 2 arterial territories**; cause = hypotension/cardiac arrest
- Circle of Willis: **ACoA, 2 ACA, 2 ICA (terminal), 2 PCoA, 2 PCA**
- Most common cause of CVST in India: **Postpartum/puerperal**
- Danger triangle infection → thrombosis of: **Cavernous sinus**
- CO2 effect on cerebral vessels: **Hypercapnia = vasodilation**

## Comparison: Cerebral Artery Strokes
| Feature | ACA | MCA | PCA |
|---------|-----|-----|-----|
| Motor | Contralateral leg | Contralateral face + arm | Usually minimal |
| Sensory | Contralateral leg | Contralateral face + arm | Thalamic pain (Dejerine-Roussy) |
| Vision | - | Homonymous hemianopia | Homonymous hemianopia + macular sparing |
| Language | - | Aphasia (dominant) | Alexia without agraphia (left PCA) |
| Other | Abulia, incontinence | Neglect (non-dominant) | Memory loss |

## Berry Aneurysm Sites (Frequency Order)
1. ACoA (30-35%) - most common
2. PCoA-ICA junction (30%)
3. MCA bifurcation (20%)
4. Basilar tip (5%)
5. Others (5-10%)`,
        mnemonics: [
          { text: "30-30-20 for aneurysm sites", explanation: "ACoA ~30%, PCoA ~30%, MCA ~20% - the three most common berry aneurysm sites accounting for 80% of cases" },
          { text: "PCoA → Pupil (CN III)", explanation: "Posterior Communicating Artery aneurysm compresses CN III causing a fixed dilated pupil - a neurosurgical emergency" }
        ],
        keyPoints: [
          "MCA = most common stroke artery; lenticulostriate = most common hypertensive bleed site (putamen)",
          "ACoA = most common berry aneurysm; PCoA aneurysm = CN III palsy",
          "Stroke territories: ACA=leg, MCA=arm/face/language, PCA=vision/thalamus",
          "Locked-in syndrome = basilar occlusion; patient conscious but quadriplegic",
          "CVST most common postpartum in India; cavernous sinus thrombosis from danger triangle"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 26", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 9", edition: "10th" }
        ] },
      { layer: 5, slug: "blood-supply-brain-recall", title: "Blood Supply of Brain - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for blood supply of brain.",
        contentMd: `# Active Recall

**Q1:** Name the components of the circle of Willis.
> ACoA, 2 ACAs, 2 ICAs (terminal part), 2 PCoAs, 2 PCAs (+ basilar artery forms it posteriorly)

**Q2:** Which artery supplies the lateral surface of the cerebral hemisphere and is most commonly involved in stroke?
> Middle cerebral artery (MCA)

**Q3:** What are the lenticulostriate arteries and why are they clinically important?
> Branches of MCA supplying basal ganglia and internal capsule; most common site of hypertensive intracerebral hemorrhage (Charcot arteries)

**Q4:** What is the most common site of a berry aneurysm?
> Anterior communicating artery (ACoA), accounting for 30-35% of cases

**Q5:** A patient presents with sudden headache and ipsilateral dilated pupil. Which artery aneurysm is suspected?
> Posterior communicating artery (PCoA) aneurysm compressing CN III

**Q6:** What are the clinical features of an MCA territory stroke?
> Contralateral face + arm weakness (leg spared), aphasia (dominant hemisphere), hemispatial neglect (non-dominant), homonymous hemianopia

**Q7:** What is locked-in syndrome and which artery is occluded?
> Basilar artery occlusion causing bilateral ventral pons infarct; patient is conscious but quadriplegic and mute (can only move eyes vertically)

**Q8:** What is the most common cause of cerebral venous sinus thrombosis in India?
> Postpartum/puerperal state; other causes include OCP use, dehydration, and infections of the danger triangle of face`,
        mnemonics: [],
        keyPoints: [
          "8 recall questions covering circle of Willis, cerebral arteries, aneurysms, and stroke syndromes"
        ],
        textbookRefs: [
          { book: "BD Chaurasia", chapter: "Vol 3 - Ch 26", edition: "8th" },
          { book: "Inderbir Singh Neuroanatomy", chapter: "Ch 9", edition: "10th" }
        ] },
    ],
  },
];
