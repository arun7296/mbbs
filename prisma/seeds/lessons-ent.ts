import type { TopicLessons } from "./content-loader";

/**
 * 5-layer lessons for ENT Module EN-MOD-01: Ear.
 * Covers 5 topics x 5 layers = 25 lesson entries.
 * Primary ref: Dhingra Diseases of Ear, Nose and Throat 7th ed.
 * Secondary ref: PL Dhingra Textbook of ENT.
 */
export const entLessons: TopicLessons[] = [
  // ═══════════════════════════════════════════════════════════════
  // EN-MOD-01: EAR
  // ═══════════════════════════════════════════════════════════════

  // ─── Topic 1: Anatomy & Physiology of Ear ─────────────────────
  {
    topicCode: "EN-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "ear-anatomy-physiology-layer-1-foundation",
        title: "Anatomy & Physiology of Ear - Foundation",
        estimatedMinutes: 20,
        summary: "The ear is divided into external, middle, and inner ear. Each part plays a specific role in hearing and balance. Understanding the anatomy is fundamental to diagnosing otological disorders.",
        contentMd: `# Anatomy & Physiology of Ear

## External Ear

### Auricle (Pinna)
- Made of **elastic cartilage** covered by skin
- Parts: Helix, antihelix, tragus, antitragus, concha, lobule
- **Lobule** is the only part without cartilage (fibrofatty tissue)
- Blood supply: Superficial temporal artery, posterior auricular artery
- Nerve supply: Great auricular nerve (C2, C3), auriculotemporal nerve (V3)
- **Hitselberger sign**: Loss of sensation in concha (CN VII involvement in CPA tumors)

### External Auditory Canal (EAC)
- Total length: **24 mm** in adults
- **Outer 1/3 (8 mm)**: Cartilaginous, contains hair follicles, ceruminous glands, sebaceous glands
- **Inner 2/3 (16 mm)**: Bony, thin skin firmly adherent to periosteum
- **Isthmus**: Narrowest part at bony-cartilaginous junction
- Nerve supply: CN V3 (anterior wall), CN VII, CN X (Arnold nerve - posterior wall)

> **Clinical Pearl**: Stimulation of Arnold nerve (auricular branch of vagus) during ear syringing can cause cough or even vasovagal syncope (Arnold cough reflex).

## Middle Ear (Tympanic Cavity)

### Tympanic Membrane
- Size: **9 x 8 mm**, thickness 0.1 mm
- Layers: Outer squamous, middle fibrous, inner mucosal
- **Pars tensa** (lower 4/5): All 3 layers, attached to annulus
- **Pars flaccida** (Shrapnell membrane, upper 1/5): Lacks fibrous layer
- Landmarks: Handle of malleus, umbo, cone of light (antero-inferior)

### Ossicular Chain
| Ossicle | Attachment | Key Feature |
|---------|-----------|-------------|
| **Malleus** | Handle embedded in TM | Largest ossicle |
| **Incus** | Body articulates with malleus | Most commonly necrosed |
| **Stapes** | Footplate in oval window | Smallest bone in body |

### Middle Ear Boundaries
| Wall | Key Structure |
|------|--------------|
| Roof (Tegmen) | Tegmen tympani (thin bone separating from middle cranial fossa) |
| Floor (Jugular) | Jugular bulb |
| Anterior (Carotid) | Internal carotid artery, Eustachian tube opening |
| Posterior (Mastoid) | Aditus ad antrum, facial nerve (vertical segment) |
| Medial (Labyrinthine) | Promontory, oval window, round window |
| Lateral (Membranous) | Tympanic membrane |

### Eustachian Tube
- Length: **36 mm** (2/3 cartilaginous, 1/3 bony)
- Opens during swallowing, yawning (tensor veli palatini muscle)
- Functions: Ventilation, drainage, protection

## Inner Ear (Labyrinth)

### Bony Labyrinth
- **Cochlea**: 2.5 turns, contains perilymph
- **Vestibule**: Contains utricle and saccule
- **Semicircular canals**: 3 (lateral, superior, posterior)

### Membranous Labyrinth
- Contains **endolymph** (high K+, low Na+ - similar to intracellular fluid)
- **Organ of Corti**: Sensory organ of hearing on basilar membrane
  - Inner hair cells (IHC): ~3,500 (primary sensory transducers)
  - Outer hair cells (OHC): ~12,000 (cochlear amplifiers)

### Tonotopic Organization
- **Base of cochlea**: High frequency (20,000 Hz)
- **Apex of cochlea**: Low frequency (20 Hz)

> **Clinical Pearl**: Noise-induced hearing loss first affects 4000 Hz because the basal turn of cochlea is most exposed to acoustic trauma. Audiogram shows a characteristic 4 kHz dip.`,
        mnemonics: [
          { text: "MIS for ossicles (lateral to medial)", explanation: "Malleus (lateral, attached to TM) -> Incus (middle) -> Stapes (medial, in oval window). Stapes is the smallest bone in the body." },
          { text: "EAC 24: 8 Cart, 16 Bone", explanation: "External auditory canal is 24mm total. Outer 1/3 (8mm) is cartilaginous with glands, inner 2/3 (16mm) is bony." },
          { text: "PFTE for Eustachian tube", explanation: "Pressure equalization, Fluid drainage, Tensor veli palatini opens it, Eustachian tube is 36mm long." },
        ],
        keyPoints: [
          "External auditory canal: 24mm total; outer 1/3 cartilaginous, inner 2/3 bony",
          "Pars flaccida (Shrapnell membrane) lacks fibrous middle layer - site of attic cholesteatoma",
          "Arnold cough reflex: vagal stimulation during ear syringing causes cough/syncope",
          "Inner hair cells (3500) are primary sensory transducers; outer hair cells (12000) are amplifiers",
          "Tonotopic: base = high frequency, apex = low frequency",
          "Incus is the most commonly necrosed ossicle in chronic otitis media",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 1: Anatomy of Ear", edition: "7th" },
          { book: "PL Dhingra", chapter: "Anatomy and Physiology of Ear", edition: "7th" },
        ],
      },
      {
        layer: 2,
        slug: "ear-anatomy-physiology-layer-2-mechanism",
        title: "Anatomy & Physiology of Ear - Mechanism",
        estimatedMinutes: 30,
        summary: "Hearing involves sound conduction through the external and middle ear, transduction in the cochlea, and neural processing. Balance is maintained by the vestibular apparatus working with visual and proprioceptive inputs.",
        contentMd: `# Physiology of Hearing and Balance

## Sound Conduction Pathway
\`\`\`
Sound waves -> Pinna (collection) -> EAC (resonance 2-5 kHz)
  -> TM vibration -> Ossicular chain amplification
  -> Oval window -> Perilymph wave -> Basilar membrane
  -> Hair cell transduction -> CN VIII -> Auditory cortex
\`\`\`

## Transformer Mechanism of Middle Ear
The middle ear overcomes the impedance mismatch between air and fluid:

| Mechanism | Amplification |
|-----------|--------------|
| **Area ratio** (TM:Stapes footplate = 17:1) | ~25 dB |
| **Lever ratio** (Malleus:Incus = 1.3:1) | ~2.5 dB |
| **Total gain** | ~27-28 dB |

- Without this mechanism, **99.9% of sound energy** would be reflected at the air-fluid interface (30 dB loss)

## Cochlear Mechanics

### Travelling Wave Theory (von Bekesy)
- Sound enters via oval window -> creates travelling wave along basilar membrane
- Wave amplitude peaks at a specific location depending on frequency
- **Basilar membrane properties**: Narrow and stiff at base (high freq), wide and flexible at apex (low freq)

### Hair Cell Transduction
1. Basilar membrane vibration -> stereocilia deflection
2. Tip links open mechanically gated K+ channels
3. K+ influx from endolymph (high K+) -> depolarization
4. Ca2+ entry -> neurotransmitter release (glutamate)
5. CN VIII afferent firing

### Endocochlear Potential
- **Stria vascularis** generates +80 mV endocochlear potential
- Endolymph: High K+ (150 mEq/L), Low Na+ (1 mEq/L)
- Perilymph: Similar to ECF (High Na+, Low K+)
- Potential difference drives K+ into hair cells

## Auditory Pathway
\`\`\`
Organ of Corti -> Spiral ganglion -> CN VIII
  -> Cochlear nuclei (dorsal and ventral)
  -> Superior olivary complex (first binaural processing)
  -> Lateral lemniscus -> Inferior colliculus
  -> Medial geniculate body -> Auditory cortex (Heschl gyrus, area 41-42)
\`\`\`
- **Bilateral representation** after cochlear nuclei (explains why unilateral cortical lesions rarely cause deafness)

## Vestibular Physiology

### Semicircular Canals
- Detect **angular acceleration** (rotational movement)
- Arranged in 3 mutually perpendicular planes
- **Lateral canal**: 30 degrees from horizontal (head tilted forward)
- Cupula deflection -> hair cell stimulation in crista ampullaris
- **Ewald's first law**: Endolymph flow toward ampulla in lateral canal = excitatory

### Otolith Organs
- **Utricle**: Detects linear acceleration in horizontal plane
- **Saccule**: Detects linear acceleration in vertical plane (gravity)
- Otoconia (calcium carbonate crystals) on macula stimulate hair cells

### Vestibulo-Ocular Reflex (VOR)
- Stabilizes gaze during head movement
- 3-neuron arc: Vestibular nerve -> vestibular nuclei -> oculomotor nuclei
- **Nystagmus**: Rhythmic eye movements; fast component names the direction

> **Clinical Pearl**: Caloric testing uses the VOR principle. Cold water in the ear canal causes convection currents in the lateral SCC endolymph, producing nystagmus away from the stimulated ear (COWS - Cold Opposite, Warm Same).`,
        mnemonics: [
          { text: "COWS for caloric testing", explanation: "Cold = Opposite (nystagmus fast component away from cold ear), Warm = Same (fast component toward warm ear). Used to test vestibular function." },
          { text: "17:1 and 1.3:1 for middle ear amplification", explanation: "TM:Stapes area ratio = 17:1 (25 dB), Malleus:Incus lever ratio = 1.3:1 (2.5 dB), Total = ~28 dB gain." },
          { text: "BASe = High, APex = Low", explanation: "Base of cochlea processes high frequency sounds, apex processes low frequency. Remember: BASs guitar plays high notes fast." },
        ],
        keyPoints: [
          "Middle ear transformer mechanism provides ~28 dB gain (area ratio 17:1 + lever ratio 1.3:1)",
          "Stria vascularis maintains endocochlear potential (+80 mV) and endolymph composition",
          "Endolymph is high K+/low Na+ (like intracellular fluid); perilymph is high Na+/low K+",
          "Superior olivary complex is the first site of binaural processing (sound localization)",
          "Caloric testing: COWS - Cold Opposite, Warm Same (direction of fast nystagmus component)",
          "Semicircular canals detect angular acceleration; otolith organs detect linear acceleration and gravity",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 2: Physiology of Ear", edition: "7th" },
          { book: "PL Dhingra", chapter: "Physiology of Hearing and Balance", edition: "7th" },
        ],
      },
      {
        layer: 3,
        slug: "ear-anatomy-physiology-layer-3-clinical",
        title: "Anatomy & Physiology of Ear - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical applications of ear anatomy and physiology include understanding examination techniques, identifying anatomical landmarks during otoscopy, and correlating structural abnormalities with clinical presentations.",
        contentMd: `# Clinical Applications of Ear Anatomy & Physiology

## Otoscopic Examination
- **Normal TM appearance**: Pearly grey, translucent, cone of light at 5 o'clock (right ear)
- Identify: Handle of malleus, umbo, lateral process, pars flaccida, pars tensa

### Abnormal Otoscopic Findings
| Finding | Clinical Significance |
|---------|---------------------|
| Retracted TM | Eustachian tube dysfunction, negative middle ear pressure |
| Bulging TM | Acute otitis media (pus collection) |
| Blue TM | Hemotympanum (temporal bone fracture), glomus tumor |
| Amber colored | Serous otitis media (glue ear) |
| Perforation | CSOM, trauma, previous myringotomy |
| Attic crust | Cholesteatoma (attic region = pars flaccida) |

## Case 1: Eustachian Tube Dysfunction
- 25-year-old patient with ear fullness after an upper respiratory infection
- Reduced hearing, sensation of fluid in the ear
- Otoscopy: Retracted TM with absent cone of light, fluid level visible
- **Mechanism**: Mucosal edema blocks ET -> negative middle ear pressure -> fluid transudation
- **Treatment**: Nasal decongestants, autoinflation (Valsalva), myringotomy with grommet if persistent

## Case 2: Acoustic Trauma
- 30-year-old factory worker with bilateral hearing loss, worse at 4 kHz
- Tinnitus prominent
- Audiogram: Bilateral notch at 4000 Hz (Carhart notch of NIHL)
- **Mechanism**: Excessive noise damages outer hair cells at basal turn (4 kHz region)
- Indian context: Common in textile mills, construction, firecracker exposure during Diwali

## Case 3: Congenital Ear Anomalies
- **Microtia**: Underdeveloped pinna (grade I to IV/anotia)
- **Aural atresia**: Absent EAC, associated with middle ear malformations
- **Preauricular sinus**: Common congenital anomaly in Indian population, remnant of first branchial arch
- Treacher Collins syndrome: Bilateral microtia with mandibulofacial dysostosis

## Clinical Significance of Anatomical Relations

### Tegmen Tympani Complications
- Thin bone separating middle ear from middle cranial fossa
- Erosion leads to: Meningitis, brain abscess, CSF otorrhea

### Facial Nerve in Temporal Bone
- Most commonly injured nerve during ear surgery
- Course: IAC -> labyrinthine segment -> geniculate ganglion -> tympanic segment -> mastoid segment
- **Tympanic segment**: Most exposed (may be dehiscent in 50% of temporal bones)

### Jugular Bulb
- High jugular bulb: Risk during myringotomy (inferior quadrant)
- May present as vascular middle ear mass

> **Clinical Pearl**: During myringotomy, the incision is made in the antero-inferior quadrant of the TM to avoid the ossicular chain (superiorly), chorda tympani nerve (posteriorly), and high jugular bulb (inferiorly).`,
        mnemonics: [
          { text: "AI for myringotomy site", explanation: "Antero-Inferior quadrant of TM is the safe site for myringotomy. Avoids ossicles (superior), chorda tympani (posterior), jugular bulb (inferior)." },
          { text: "4K dip for NIHL", explanation: "Noise-Induced Hearing Loss characteristically shows a dip at 4 kHz on audiogram (4K = 4000 Hz). Basal turn outer hair cells are first affected." },
        ],
        keyPoints: [
          "Normal TM: pearly grey, translucent, cone of light at 5 o'clock (right ear)",
          "Myringotomy is performed in the antero-inferior quadrant (safest site)",
          "Facial nerve tympanic segment is dehiscent in up to 50% of temporal bones",
          "Noise-induced hearing loss shows a characteristic 4 kHz dip on audiogram",
          "Preauricular sinus is a common congenital anomaly in Indian population",
          "Tegmen tympani erosion can lead to intracranial complications (meningitis, abscess)",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 3: Clinical Examination of Ear", edition: "7th" },
          { book: "PL Dhingra", chapter: "Diseases of External Ear", edition: "7th" },
        ],
      },
      {
        layer: 4,
        slug: "ear-anatomy-physiology-layer-4-exam",
        title: "Anatomy & Physiology of Ear - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield points on ear anatomy and physiology for NEXT and NEET PG examinations covering commonly tested facts, comparison tables, and pattern recognition for MCQs.",
        contentMd: `# Exam Preparation - High Yield

## One-Liners
- Smallest bone in body: **Stapes**
- Most commonly necrosed ossicle in CSOM: **Incus (long process)**
- Nerve supply to pars flaccida: **Chorda tympani (CN VII)**
- Sensory nerve of external ear causing cough reflex: **Arnold nerve (auricular branch of CN X)**
- Endolymph is produced by: **Stria vascularis**
- Endocochlear potential: **+80 mV**
- Most common congenital ear anomaly: **Preauricular sinus**
- Tonotopy: Base of cochlea = **high frequency**, Apex = **low frequency**
- Eustachian tube opened by: **Tensor veli palatini (CN V3)**
- First site of binaural processing: **Superior olivary complex**
- Auditory cortex location: **Heschl gyrus (area 41-42), temporal lobe**
- Middle ear amplification: **~28 dB** (area ratio + lever ratio)
- Hair cells for hearing: **IHC ~3500** (sensory), **OHC ~12000** (amplifier)

## Comparison Tables

### External Auditory Canal
| Feature | Cartilaginous (Outer 1/3) | Bony (Inner 2/3) |
|---------|--------------------------|-------------------|
| Length | 8 mm | 16 mm |
| Glands | Ceruminous + sebaceous | None |
| Hair | Present | Absent |
| Skin | Thick, mobile | Thin, adherent |
| Infections | Furunculosis | Osteitis |

### Endolymph vs Perilymph
| Feature | Endolymph | Perilymph |
|---------|-----------|-----------|
| K+ | High (150 mEq/L) | Low (5 mEq/L) |
| Na+ | Low (1 mEq/L) | High (140 mEq/L) |
| Location | Membranous labyrinth | Between bony and membranous |
| Similar to | ICF | ECF |
| Produced by | Stria vascularis | Ultrafiltrate of CSF/blood |

## Previous Year Themes
- Ossicular chain and middle ear transformer mechanism
- Endolymph vs perilymph composition
- Boundaries of middle ear (especially medial wall structures)
- Facial nerve course in temporal bone
- Arnold nerve and cough reflex
- Tonotopic organization of cochlea

## Pattern Recognition
- Question about ear cough during wax removal -> **Arnold nerve (CN X)**
- Question about smallest bone -> **Stapes**
- Question about +80 mV potential -> **Endocochlear potential (stria vascularis)**
- Question about first binaural processing -> **Superior olivary complex**
- Question about ossicle necrosis in CSOM -> **Long process of incus**
- Blue tympanic membrane -> **Hemotympanum or glomus jugulare**`,
        mnemonics: [
          { text: "SIS for stapes facts", explanation: "Smallest bone, In oval window, Stapedius muscle (CN VII) attaches to it. Stapedial reflex protects against loud sounds." },
          { text: "Endo = Intra, Peri = Extra", explanation: "Endolymph resembles intracellular fluid (high K+), Perilymph resembles extracellular fluid (high Na+). Easy way to remember ionic composition." },
        ],
        keyPoints: [
          "Stapes is the smallest bone in the body; footplate sits in the oval window",
          "Arnold nerve (auricular branch of CN X) causes cough reflex during ear examination",
          "Endolymph: high K+/low Na+ (like ICF); Perilymph: high Na+/low K+ (like ECF)",
          "Incus long process is the most commonly necrosed ossicle in CSOM",
          "Middle ear transformer provides ~28 dB gain through area ratio and lever ratio",
          "Tensor veli palatini (CN V3) is the only muscle that opens the Eustachian tube",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapters 1-3: Ear Anatomy & Physiology", edition: "7th" },
          { book: "PL Dhingra", chapter: "Anatomy and Physiology of Ear", edition: "7th" },
        ],
      },
      {
        layer: 5,
        slug: "ear-anatomy-physiology-layer-5-active-recall",
        title: "Anatomy & Physiology of Ear - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A and self-test questions on ear anatomy and physiology for spaced repetition review.",
        contentMd: `# Active Recall - Ear Anatomy & Physiology

## Flashcard Q&A

**Q1**: What is the total length of the external auditory canal and its divisions?
**A1**: 24 mm total. Outer 1/3 (8 mm) is cartilaginous; inner 2/3 (16 mm) is bony.

**Q2**: Which part of the tympanic membrane lacks the fibrous middle layer?
**A2**: Pars flaccida (Shrapnell membrane) - upper 1/5 of TM.

**Q3**: What is the Arnold nerve and its clinical significance?
**A3**: Auricular branch of vagus (CN X). Stimulation during ear syringing causes cough reflex (Arnold cough reflex) or vasovagal syncope.

**Q4**: Name the three ossicles from lateral to medial.
**A4**: Malleus -> Incus -> Stapes. Stapes is the smallest bone in the body.

**Q5**: What is the endocochlear potential and which structure produces it?
**A5**: +80 mV, produced by the stria vascularis. It drives K+ ions into hair cells from endolymph.

**Q6**: Describe the ionic composition of endolymph vs perilymph.
**A6**: Endolymph: high K+ (150 mEq/L), low Na+ (like ICF). Perilymph: high Na+ (140 mEq/L), low K+ (like ECF).

**Q7**: What is the safe site for myringotomy and why?
**A7**: Antero-inferior quadrant. Avoids ossicles (superior), chorda tympani (posterior), and high jugular bulb (inferior).

**Q8**: Which ossicle is most commonly necrosed in CSOM?
**A8**: Long process of incus (poorest blood supply, exposed to chronic infection).

**Q9**: What is the COWS mnemonic in caloric testing?
**A9**: Cold = Opposite (nystagmus fast phase away from stimulated ear), Warm = Same (fast phase toward stimulated ear).

**Q10**: What is the function of outer hair cells?
**A10**: Cochlear amplification. They actively change length (electromotility) to enhance basilar membrane vibration and improve frequency selectivity.

**Q11**: Which muscle opens the Eustachian tube?
**A11**: Tensor veli palatini (supplied by CN V3 - mandibular division of trigeminal).

**Q12**: What does a 4 kHz dip on audiogram suggest?
**A12**: Noise-induced hearing loss (NIHL). Basal turn outer hair cells at 4 kHz region are most vulnerable to acoustic trauma.

## Quick Revision Bullets
- EAC: 24 mm (8 cart + 16 bone)
- TM: 9 x 8 mm, pars tensa (4/5) + pars flaccida (1/5)
- Ossicles: Malleus > Incus > Stapes
- Middle ear gain: ~28 dB
- Eustachian tube: 36 mm, opened by tensor veli palatini
- Cochlea: 2.5 turns, base = high freq, apex = low freq
- IHC: 3500 (sensory), OHC: 12000 (amplifier)
- Endolymph: high K+, Perilymph: high Na+
- Auditory cortex: Heschl gyrus (area 41-42)`,
        mnemonics: [
          { text: "MIS-SIN for ear anatomy", explanation: "M-Malleus, I-Incus, S-Stapes (ossicles) and S-Semicircular canals, I-utricle (I shape), N-saccule (N shape) for vestibular organs." },
          { text: "COWS for caloric nystagmus", explanation: "Cold-Opposite, Warm-Same direction of fast component of nystagmus." },
        ],
        keyPoints: [
          "External ear: pinna (elastic cartilage), EAC (24mm), lobule (no cartilage)",
          "Middle ear: 6 walls, 3 ossicles, 2 muscles (tensor tympani, stapedius)",
          "Inner ear: cochlea (hearing), vestibule + SCC (balance)",
          "Endolymph = intracellular-like fluid; perilymph = extracellular-like fluid",
          "Tonotopy: base = high frequency, apex = low frequency",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapters 1-3", edition: "7th" },
          { book: "PL Dhingra", chapter: "Anatomy and Physiology of Ear", edition: "7th" },
        ],
      },
    ],
  },

  // ─── Topic 2: Otitis Media: Acute & Chronic ──────────────────
  {
    topicCode: "EN-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "otitis-media-layer-1-foundation",
        title: "Otitis Media: Acute & Chronic - Foundation",
        estimatedMinutes: 20,
        summary: "Otitis media is inflammation of the middle ear cleft. It ranges from acute suppurative otitis media (ASOM) to chronic suppurative otitis media (CSOM) classified into tubotympanic (safe) and atticoantral (unsafe/dangerous) types.",
        contentMd: `# Otitis Media: Acute & Chronic

## Definition
Otitis media = inflammation of the middle ear cleft (includes tympanic cavity, Eustachian tube, mastoid antrum, and air cells)

## Classification
| Type | Subtypes |
|------|----------|
| **Acute Otitis Media (AOM)** | Acute suppurative OM (ASOM), Acute necrotizing OM |
| **Secretory OM (SOM)** | Serous OM, Mucoid OM (glue ear) |
| **Chronic Suppurative OM (CSOM)** | Tubotympanic (safe), Atticoantral (unsafe) |

## Acute Suppurative Otitis Media (ASOM)

### Etiology
- Most common in children (peak: 6 months to 2 years)
- **Organisms**: Streptococcus pneumoniae (MC), H. influenzae, Moraxella catarrhalis, Group A Streptococcus
- Predisposing: URI, short/horizontal ET in children, adenoid hypertrophy, cleft palate

### Stages (5 stages)
1. **Stage of tubal occlusion**: Retracted TM, negative pressure
2. **Stage of pre-suppuration**: Hyperemia, congestion of TM
3. **Stage of suppuration**: Bulging TM, pus formation, severe pain
4. **Stage of resolution**: Spontaneous or after treatment
5. **Stage of complication**: If infection spreads (mastoiditis, intracranial)

### Clinical Features
- Severe ear pain (otalgia), fever, hearing loss
- In children: pulling at ear, irritability, fever, feeding difficulty
- Otoscopy: Red, bulging TM with loss of landmarks

## Chronic Suppurative Otitis Media (CSOM)

### Definition
Persistent ear discharge through a perforated TM for **>6-12 weeks**

### Types
| Feature | Tubotympanic (Safe) | Atticoantral (Unsafe) |
|---------|--------------------|-----------------------|
| **Site** | Pars tensa (central perforation) | Pars flaccida / posterosuperior marginal |
| **Discharge** | Mucoid, non-foul | Scanty, foul-smelling |
| **Cholesteatoma** | Absent | Present |
| **Complications** | Less common | Common (intracranial) |
| **Treatment** | Conservative first | Mastoid surgery needed |
| **Other name** | Mucosal disease | Squamous disease |

## Secretory Otitis Media (Glue Ear)
- Accumulation of fluid in middle ear without acute infection
- Common in children with adenoid hypertrophy
- Flat tympanogram (Type B)
- Treatment: Adenoidectomy, grommet insertion

> **Clinical Pearl**: In Indian clinical practice, CSOM is extremely common due to poor hygiene, overcrowding, malnutrition, and lack of access to early antibiotic treatment. It remains one of the most common causes of hearing disability in India.`,
        mnemonics: [
          { text: "SAFE = Central, UNSAFE = Marginal/Attic", explanation: "Tubotympanic (safe) type has central pars tensa perforation. Atticoantral (unsafe) has marginal or attic perforation with cholesteatoma risk." },
          { text: "SHiMM for ASOM organisms", explanation: "Streptococcus pneumoniae (MC), H. influenzae, Moraxella catarrhalis, Mixed organisms. S. pneumoniae is the most common." },
          { text: "5 Stages of ASOM: TPSRC", explanation: "Tubal occlusion, Pre-suppuration, Suppuration, Resolution, Complication - the 5 stages of acute otitis media." },
        ],
        keyPoints: [
          "ASOM: most common organism is Streptococcus pneumoniae; peak age 6 months to 2 years",
          "CSOM tubotympanic (safe): central perforation, mucoid discharge, no cholesteatoma",
          "CSOM atticoantral (unsafe): marginal/attic perforation, foul discharge, cholesteatoma",
          "Secretory OM (glue ear): Type B tympanogram, common in children with adenoid hypertrophy",
          "CSOM defined as ear discharge through perforated TM lasting more than 6-12 weeks",
          "India has high prevalence of CSOM due to socioeconomic factors and delayed treatment",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 9: Acute Suppurative Otitis Media", edition: "7th" },
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 10: Chronic Suppurative Otitis Media", edition: "7th" },
        ],
      },
      {
        layer: 2,
        slug: "otitis-media-layer-2-mechanism",
        title: "Otitis Media: Acute & Chronic - Mechanism",
        estimatedMinutes: 30,
        summary: "The pathogenesis of otitis media involves Eustachian tube dysfunction leading to negative pressure and fluid accumulation. Cholesteatoma in unsafe CSOM involves keratinizing squamous epithelium with bone erosion through osteoclastic activity.",
        contentMd: `# Mechanisms of Otitis Media

## Pathogenesis of ASOM

### Route of Infection
1. **Via Eustachian tube** (most common): URI -> mucosal edema -> tubal blockage -> negative pressure -> transudation -> bacterial contamination
2. **Via perforated TM**: External contamination through pre-existing perforation
3. **Hematogenous**: Rare (measles, TB)

### Sequence of Events
\`\`\`
URI / Nasopharyngeal infection
  -> ET mucosal edema and obstruction
  -> Negative middle ear pressure (tubal occlusion stage)
  -> Transudation of fluid into middle ear
  -> Bacterial colonization of sterile transudate
  -> Acute suppurative inflammation
  -> Pus formation, TM bulging (suppuration stage)
  -> Spontaneous perforation OR resolution
\`\`\`

## Pathogenesis of CSOM

### Tubotympanic Type (Safe)
- Persistent infection through central perforation
- Mucosa thickens (granulation tissue, polyps)
- Middle ear mucosa undergoes **goblet cell metaplasia** -> mucoid discharge
- Tympanosclerosis may develop (hyalinization and calcification)

### Atticoantral Type (Unsafe) - Cholesteatoma

#### What is Cholesteatoma?
- **Not a tumor** - it is a cyst lined by keratinizing stratified squamous epithelium
- Contains desquamated keratin debris with a surrounding matrix of squamous epithelium
- Perimatrix: Chronic inflammatory tissue with osteoclasts

#### Theories of Origin
| Theory | Mechanism |
|--------|-----------|
| **Invagination (Wittmaack)** | Retraction pocket in pars flaccida due to negative pressure |
| **Immigration (Habermann)** | Squamous epithelium migrates through marginal perforation |
| **Squamous metaplasia (Wendt)** | Middle ear cuboidal epithelium transforms to squamous |
| **Basal cell hyperplasia (Ruedi)** | Basal cells of pars flaccida proliferate into middle ear |

#### Bone Erosion Mechanism
1. Pressure necrosis from expanding mass
2. **Osteoclastic resorption** mediated by:
   - Collagenase produced by cholesteatoma matrix
   - Prostaglandins (PGE2) and cytokines (IL-1, TNF-alpha)
   - Acid phosphatase from inflammatory cells
3. Enzymatic destruction of bone by proteolytic enzymes

## Complications of CSOM

### Intratemporal (Extracranial)
- **Mastoiditis** (MC complication)
- Petrositis (Gradenigo syndrome: CN VI palsy + retroorbital pain + otorrhea)
- Facial nerve paralysis
- Labyrinthitis (serous or suppurative)

### Intracranial
- **Extradural abscess** (MC intracranial complication)
- Subdural abscess
- Brain abscess (temporal lobe MC, then cerebellar)
- Meningitis (MC cause of death from CSOM complications)
- Lateral sinus thrombosis (sigmoid sinus)
- Otitic hydrocephalus

> **Clinical Pearl**: In India, intracranial complications of CSOM are still encountered frequently due to delayed presentation. Temporal lobe abscess presents with nominal aphasia (if dominant hemisphere) while cerebellar abscess presents with ataxia and dysdiadochokinesia.`,
        mnemonics: [
          { text: "WIBS for cholesteatoma theories", explanation: "Wittmaack (invagination), Immigration (Habermann), Basal cell hyperplasia (Ruedi), Squamous metaplasia (Wendt) - 4 theories of cholesteatoma origin." },
          { text: "FLIMPS for intracranial complications", explanation: "F-Facial palsy (extracranial), L-Lateral sinus thrombosis, I-Intracranial abscess, M-Meningitis, P-Petrositis, S-Subdural/extradural abscess." },
        ],
        keyPoints: [
          "ASOM pathogenesis: ET dysfunction -> negative middle ear pressure -> bacterial infection",
          "Cholesteatoma is keratinizing squamous epithelium, not a true tumor",
          "Invagination theory (Wittmaack): retraction pocket in pars flaccida is most accepted theory",
          "Bone erosion by cholesteatoma: osteoclastic resorption + enzymatic destruction (collagenase, PGE2)",
          "MC intracranial complication of CSOM: extradural abscess; MC cause of death: meningitis",
          "Temporal lobe abscess: MC intracranial abscess from otogenic source; cerebellar abscess: second MC",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 10: CSOM and Cholesteatoma", edition: "7th" },
          { book: "PL Dhingra", chapter: "Complications of CSOM", edition: "7th" },
        ],
      },
      {
        layer: 3,
        slug: "otitis-media-layer-3-clinical",
        title: "Otitis Media: Acute & Chronic - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical management of otitis media includes diagnosis through otoscopy and audiometry, medical management with antibiotics and ear toilet, and surgical options like myringoplasty, tympanoplasty, and mastoidectomy.",
        contentMd: `# Clinical Application - Otitis Media

## Case 1: ASOM in a Child
- 3-year-old with fever, ear pain, pulling at right ear after 5 days of cold
- Otoscopy: Red, bulging TM with loss of light reflex
- **Management**:
  - First-line antibiotic: **Amoxicillin** (80-90 mg/kg/day x 10 days)
  - Second-line: Amoxicillin-clavulanate
  - Analgesics: Paracetamol
  - Nasal decongestants
  - If TM bulging with severe pain: **Myringotomy** (incision at antero-inferior quadrant)

## Case 2: CSOM Tubotympanic
- 20-year-old with intermittent foul-smelling ear discharge for 2 years
- Hearing loss in affected ear
- Otoscopy: Central perforation in pars tensa, mucoid discharge
- Hearing test: Conductive hearing loss, 25-30 dB gap
- **Management**:
  - Dry ear precautions (keep water out)
  - Aural toilet (suction clearance)
  - Topical antibiotics: Ciprofloxacin ear drops
  - Once dry: **Myringoplasty / Tympanoplasty** (graft to close perforation)
  - Graft materials: Temporalis fascia (MC used), tragal perichondrium, cartilage

## Case 3: CSOM Atticoantral (Cholesteatoma)
- 35-year-old with scanty foul-smelling discharge, progressive hearing loss, dizziness
- Otoscopy: Attic perforation with whitish flaky debris, granulations
- CT temporal bone: Soft tissue in attic/antrum with bony erosion
- **Management**: SURGERY IS MANDATORY
  - **Modified radical mastoidectomy** (canal wall down)
  - **Atticotomy** for limited disease
  - Never treat with ear drops alone

### Surgical Procedures
| Surgery | Indication |
|---------|-----------|
| Myringoplasty | Close perforation (no ossicular involvement) |
| Tympanoplasty | Repair TM + reconstruct ossicular chain |
| Cortical mastoidectomy | Acute mastoiditis, intact canal wall |
| Modified radical mastoidectomy | Cholesteatoma, preserve hearing |
| Radical mastoidectomy | Extensive cholesteatoma, sacrifice hearing |

## Complications Requiring Emergency Intervention
- **Acute mastoiditis**: Post-auricular swelling, pushing pinna forward/outward; needs cortical mastoidectomy
- **Facial nerve palsy**: Urgent surgical decompression
- **Meningitis/brain abscess**: Neurosurgical + otological surgery
- **Lateral sinus thrombosis**: Presents with picket fence fever, Griesinger sign, Tobey-Ayer test positive

> **Clinical Pearl**: In Indian government hospitals, CSOM is the single most common reason for ENT outpatient visits. Community screening programs in rural India have shown CSOM prevalence of 5-8%, significantly higher than the WHO threshold of 4% for a country to take urgent action.`,
        mnemonics: [
          { text: "Amox for ASOM", explanation: "Amoxicillin 80-90 mg/kg/day is the first-line antibiotic for acute otitis media in children." },
          { text: "TF graft for myringoplasty", explanation: "Temporalis Fascia is the most commonly used graft material for tympanic membrane repair." },
        ],
        keyPoints: [
          "ASOM first-line treatment: Amoxicillin 80-90 mg/kg/day for 10 days",
          "Tubotympanic CSOM: conservative first (aural toilet, drops), then myringoplasty when dry",
          "Atticoantral CSOM (cholesteatoma): surgery mandatory - modified radical mastoidectomy",
          "Temporalis fascia is the MC graft material for myringoplasty",
          "Acute mastoiditis: post-auricular swelling pushing pinna forward; needs cortical mastoidectomy",
          "CSOM prevalence in India exceeds 4% WHO threshold for urgent public health action",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 10: Treatment of CSOM", edition: "7th" },
          { book: "PL Dhingra", chapter: "Surgical Treatment of CSOM", edition: "7th" },
        ],
      },
      {
        layer: 4,
        slug: "otitis-media-layer-4-exam",
        title: "Otitis Media: Acute & Chronic - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points covering differential diagnosis of safe vs unsafe CSOM, cholesteatoma theories, complications, and surgical procedures commonly asked in NEXT and NEET PG.",
        contentMd: `# Exam Preparation - Otitis Media

## One-Liners
- MC organism in ASOM: **Streptococcus pneumoniae**
- MC organism in CSOM: **Pseudomonas aeruginosa**
- MC complication of CSOM: **Mastoiditis**
- MC intracranial complication of CSOM: **Extradural abscess**
- MC cause of death in CSOM complications: **Meningitis**
- MC intracranial abscess from ear: **Temporal lobe abscess**
- MC graft for myringoplasty: **Temporalis fascia**
- Cholesteatoma is NOT a: **Neoplasm** (it is keratinizing squamous epithelium)
- Most accepted theory for cholesteatoma: **Invagination theory (Wittmaack)**
- Gradenigo syndrome triad: **CN VI palsy + retroorbital pain + otorrhea** (petrositis)
- Bezold abscess: **Pus tracks through mastoid tip into sternocleidomastoid (digastric) sheath**
- Citelli abscess: **Pus tracks through Trautmann triangle into posterior cranial fossa**
- Safe type CSOM perforation: **Central (pars tensa)**
- Unsafe type CSOM perforation: **Marginal or attic (pars flaccida)**

## Comparison: Safe vs Unsafe CSOM
| Feature | Tubotympanic (Safe) | Atticoantral (Unsafe) |
|---------|--------------------|-----------------------|
| Synonym | Mucosal disease | Squamous disease |
| Perforation | Central | Marginal / Attic |
| Discharge | Mucoid, non-foul | Scanty, foul-smelling |
| Cholesteatoma | Absent | Present |
| Polyp | Mucous polyp (pale) | Aural polyp (red, bleeds) |
| Granulations | Absent | Present |
| Complications | Uncommon | Common |
| X-ray finding | Sclerotic mastoid | Sclerotic with bone erosion |
| Treatment | Conservative -> surgery | Surgery mandatory |

## Previous Year Themes
- Differentiate safe vs unsafe CSOM
- Theories of cholesteatoma formation
- Complications of CSOM (intracranial vs extracranial)
- Indications for different mastoid surgeries
- ASOM stages and management
- Gradenigo syndrome components

## Pattern Recognition
- Foul discharge + attic perforation -> **Cholesteatoma (unsafe CSOM)**
- Post-auricular swelling pushing pinna -> **Acute mastoiditis**
- CN VI palsy + otorrhea + retroorbital pain -> **Gradenigo syndrome**
- Picket fence fever + ear discharge -> **Lateral sinus thrombosis**
- Child with bilateral ear fullness + flat tympanogram -> **Secretory OM (glue ear)**`,
        mnemonics: [
          { text: "Pneumo for Acute, Pseudo for Chronic", explanation: "S. pneumoniae is MC in ASOM; Pseudomonas aeruginosa is MC in CSOM. Remember: Acute = Pneumo, Chronic = Pseudo." },
          { text: "BEAM for mastoiditis complications", explanation: "Bezold (SCM), Extradural abscess, Acute mastoiditis, Meningitis - common complications asked in exams." },
        ],
        keyPoints: [
          "ASOM: S. pneumoniae; CSOM: Pseudomonas aeruginosa",
          "Cholesteatoma: not a tumor, keratinizing squamous epithelium with bone erosion",
          "Gradenigo syndrome: CN VI palsy + retroorbital pain + otorrhea (petrous apex)",
          "Bezold abscess: pus tracks through mastoid tip into neck via SCM sheath",
          "MC intracranial complication of CSOM: extradural abscess; MC cause of death: meningitis",
          "Safe CSOM: central perforation, mucoid discharge; Unsafe: marginal/attic, foul discharge, cholesteatoma",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapters 9-11: Otitis Media", edition: "7th" },
          { book: "PL Dhingra", chapter: "Otitis Media and Complications", edition: "7th" },
        ],
      },
      {
        layer: 5,
        slug: "otitis-media-layer-5-active-recall",
        title: "Otitis Media: Acute & Chronic - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for rapid revision of otitis media concepts for exam preparation.",
        contentMd: `# Active Recall - Otitis Media

## Flashcard Q&A

**Q1**: What is the most common organism causing ASOM?
**A1**: Streptococcus pneumoniae.

**Q2**: What is the most common organism in CSOM?
**A2**: Pseudomonas aeruginosa.

**Q3**: Differentiate safe and unsafe CSOM by perforation site.
**A3**: Safe (tubotympanic): central perforation in pars tensa. Unsafe (atticoantral): marginal or attic perforation in pars flaccida.

**Q4**: What is cholesteatoma?
**A4**: A cyst lined by keratinizing stratified squamous epithelium filled with keratin debris. It is NOT a neoplasm. It erodes bone through enzymatic and pressure-mediated osteoclastic resorption.

**Q5**: Name the 5 stages of ASOM.
**A5**: Tubal occlusion -> Pre-suppuration -> Suppuration -> Resolution -> Complication.

**Q6**: What is Gradenigo syndrome?
**A6**: Triad of CN VI palsy (lateral rectus paralysis) + retroorbital pain (CN V involvement) + otorrhea, caused by petrous apicitis.

**Q7**: What is the first-line antibiotic for ASOM in children?
**A7**: Amoxicillin 80-90 mg/kg/day for 10 days.

**Q8**: What is Bezold abscess?
**A8**: Pus from mastoid tracks through the mastoid tip into the sheath of sternocleidomastoid muscle, presenting as a neck swelling.

**Q9**: What graft is most commonly used for myringoplasty?
**A9**: Temporalis fascia.

**Q10**: What is the most common intracranial complication of CSOM?
**A10**: Extradural abscess. But the most common cause of death is meningitis.

**Q11**: What tympanogram pattern is seen in secretory otitis media?
**A11**: Type B (flat curve) - indicating fluid in the middle ear.

**Q12**: When is surgery mandatory in CSOM?
**A12**: In atticoantral (unsafe) type with cholesteatoma. Modified radical mastoidectomy is the procedure of choice.

## Quick Revision Bullets
- ASOM: S. pneumoniae, amoxicillin, myringotomy if needed
- CSOM safe: central perforation, mucoid discharge, myringoplasty
- CSOM unsafe: attic/marginal perforation, cholesteatoma, mastoidectomy mandatory
- Cholesteatoma: keratinizing squamous epithelium, NOT a tumor
- MC complication: mastoiditis; MC intracranial: extradural abscess
- Gradenigo = CN VI + retroorbital pain + otorrhea`,
        mnemonics: [
          { text: "SAFE = Central, UNSAFE = Marginal", explanation: "Quick way to remember the perforation types in CSOM classification." },
          { text: "TPSRC for ASOM stages", explanation: "Tubal occlusion, Pre-suppuration, Suppuration, Resolution, Complication." },
        ],
        keyPoints: [
          "ASOM: S. pneumoniae; CSOM: Pseudomonas",
          "Safe CSOM: central perforation; Unsafe: marginal/attic perforation",
          "Cholesteatoma = keratinizing squamous epithelium, not a neoplasm",
          "Surgery mandatory in unsafe CSOM with cholesteatoma",
          "Gradenigo syndrome: petrous apicitis triad",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapters 9-11", edition: "7th" },
          { book: "PL Dhingra", chapter: "Otitis Media", edition: "7th" },
        ],
      },
    ],
  },

  // ─── Topic 3: Deafness & Hearing Tests ────────────────────────
  {
    topicCode: "EN-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "deafness-hearing-tests-layer-1-foundation",
        title: "Deafness & Hearing Tests - Foundation",
        estimatedMinutes: 20,
        summary: "Deafness is classified into conductive, sensorineural, and mixed types. Tuning fork tests (Rinne, Weber, ABC) are bedside clinical tools that help differentiate the type. Audiometry provides objective measurement of hearing loss.",
        contentMd: `# Deafness & Hearing Tests

## Classification of Hearing Loss

### By Type
| Type | Site of Lesion | Examples |
|------|---------------|----------|
| **Conductive (CHL)** | External ear / Middle ear | Wax, CSOM, otosclerosis, TM perforation |
| **Sensorineural (SNHL)** | Cochlea / CN VIII / Central | Presbycusis, NIHL, ototoxicity, acoustic neuroma |
| **Mixed** | Both conductive + sensorineural | Advanced otosclerosis, CSOM with labyrinthitis |

### By Severity (WHO Classification)
| Grade | Hearing Level (dB) | Description |
|-------|-------------------|-------------|
| Normal | 0-25 dB | Normal hearing |
| Mild | 26-40 dB | Difficulty with soft speech |
| Moderate | 41-60 dB | Difficulty with normal speech |
| Severe | 61-80 dB | Difficulty with loud speech |
| Profound | >80 dB | Cannot hear even shouting |

## Tuning Fork Tests

### Rinne Test (512 Hz fork)
- Compares **air conduction (AC)** vs **bone conduction (BC)** in SAME ear
- **Rinne Positive**: AC > BC (Normal OR sensorineural loss)
- **Rinne Negative**: BC > AC (Conductive loss of >15-20 dB)
- **False Negative Rinne**: In severe unilateral SNHL, bone conduction heard by opposite ear

### Weber Test (512 Hz fork)
- Fork placed on **vertex** (forehead center)
- **Lateralizes to affected ear**: Conductive hearing loss
- **Lateralizes to better ear**: Sensorineural hearing loss

### Absolute Bone Conduction (ABC) Test
- Compares patient's BC with examiner's BC (assuming examiner has normal hearing)
- **Reduced**: Sensorineural component present
- **Normal**: Pure conductive loss

### Schwabach Test
- Compares duration of BC hearing between patient and examiner
- Prolonged Schwabach: Conductive loss
- Shortened Schwabach: Sensorineural loss

## Pure Tone Audiometry (PTA)
- Gold standard for hearing assessment
- Tests AC (250-8000 Hz) and BC (250-4000 Hz)
- **Air-bone gap**: Difference between AC and BC thresholds
  - Present in CHL (AC worse than BC)
  - Absent in SNHL (both equally affected)

## Tympanometry
| Type | Curve | Interpretation |
|------|-------|---------------|
| Type A | Normal peak at 0 daPa | Normal middle ear |
| Type As | Low amplitude peak | Otosclerosis, tympanosclerosis |
| Type Ad | High amplitude peak | Ossicular discontinuity |
| Type B | Flat curve | Middle ear effusion, TM perforation |
| Type C | Peak shifted to negative | Eustachian tube dysfunction |

> **Clinical Pearl**: In Indian primary health centers, tuning fork tests remain the most important bedside tool for hearing assessment, as audiometry may not be available. A 512 Hz fork is preferred because it tests the speech frequency range.`,
        mnemonics: [
          { text: "Rinne: AC > BC = Positive = Normal/SNHL", explanation: "Rinne positive means air conduction is better than bone conduction. This is normal or indicates sensorineural loss. Rinne negative (BC > AC) = conductive loss." },
          { text: "Weber lateralizes to Conductive side, away from Sensorineural side", explanation: "In Weber test, sound goes to the ear with conductive loss (bone conduction enhanced in blocked ear) and away from sensorineural loss (damaged cochlea cannot hear)." },
          { text: "ABCD for tympanometry", explanation: "A = normal, As = stiff (otosclerosis), Ad = discontinuity, B = blocked (effusion), C = negative pressure (ET dysfunction)." },
        ],
        keyPoints: [
          "Conductive loss: external/middle ear pathology; SNHL: cochlea/CN VIII/central pathology",
          "Rinne positive = AC > BC (normal or SNHL); Rinne negative = BC > AC (CHL >15 dB)",
          "Weber lateralizes to affected ear in CHL, to better ear in SNHL",
          "False negative Rinne occurs in dead ear (severe unilateral SNHL)",
          "Type B tympanogram = flat curve = middle ear effusion",
          "512 Hz tuning fork preferred for clinical testing (speech frequency range)",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 6: Hearing Tests", edition: "7th" },
          { book: "PL Dhingra", chapter: "Assessment of Hearing", edition: "7th" },
        ],
      },
      {
        layer: 2,
        slug: "deafness-hearing-tests-layer-2-mechanism",
        title: "Deafness & Hearing Tests - Mechanism",
        estimatedMinutes: 30,
        summary: "Understanding the mechanism behind different types of deafness involves comprehending the physiology of sound conduction and transduction. Advanced audiological tests including BERA, OAE, and speech audiometry help localize the site of lesion.",
        contentMd: `# Mechanisms of Hearing Loss & Advanced Tests

## Mechanism of Conductive Hearing Loss
- Any obstruction between sound source and oval window
- **External ear**: Wax impaction, foreign body, atresia, otitis externa
- **TM**: Perforation (reduces effective vibrating area), retraction
- **Ossicular chain**: Fixation (otosclerosis), discontinuity (trauma, necrosis)
- **Middle ear**: Fluid (SOM), mass (cholesteatoma), negative pressure
- Maximum conductive loss: **60 dB** (ossicular chain completely disrupted)

## Mechanism of Sensorineural Hearing Loss

### Cochlear (Sensory)
- Damage to hair cells (outer > inner)
- Causes: Noise, ototoxic drugs, presbycusis, Meniere disease
- Characteristics: **Recruitment** present (abnormal growth of loudness)
- OAE: Absent

### Retrocochlear (Neural)
- Damage to CN VIII or central pathways
- Causes: Acoustic neuroma (vestibular schwannoma), CPA tumors
- Characteristics: **Tone decay** present, poor speech discrimination
- ABR: Prolonged wave I-V interpeak latency

### Differentiating Cochlear vs Retrocochlear
| Test | Cochlear | Retrocochlear |
|------|----------|--------------|
| Recruitment (SISI) | Present (>70%) | Absent |
| Tone decay | Absent or mild | Significant (>30 dB) |
| Speech discrimination | Proportionate to PTA | Disproportionately poor |
| ABR | Normal latencies | Prolonged I-V latency |
| OAE | Absent | May be present |

## Advanced Audiological Tests

### Brainstem Evoked Response Audiometry (BERA/ABR)
- Objective hearing test (no patient cooperation needed)
- Records electrical activity from cochlea to brainstem
- **5 waves** (I-V): Generated from CN VIII to inferior colliculus
- Uses: Neonatal screening, threshold estimation, retrocochlear pathology
- Wave V: Most robust, last to disappear, used for threshold estimation

### Otoacoustic Emissions (OAE)
- Sound generated by **outer hair cells** (OHC electromotility)
- Types: Spontaneous (SOAE), Transient evoked (TEOAE), Distortion product (DPOAE)
- Present = OHC functioning = hearing likely normal (up to 30-40 dB)
- Used for: Neonatal hearing screening, monitoring ototoxicity

### Speech Audiometry
- Speech Reception Threshold (SRT): Intensity at which 50% of spondee words understood
- Speech Discrimination Score (SDS): % of phonetically balanced words correctly identified at comfortable level
- Rollover phenomenon: SDS decreases at higher intensities -> retrocochlear pathology

### Impedance Audiometry (Tympanometry + Stapedial Reflex)
- Stapedial reflex: Bilateral stapedius contraction at 70-100 dB above threshold
- Absent in: Otosclerosis, facial nerve palsy, severe SNHL, middle ear pathology

> **Clinical Pearl**: Under India's national neonatal hearing screening program, OAE is used as the first-tier screening test. Infants failing OAE are referred for BERA for diagnostic confirmation. Early detection before 6 months and intervention before 12 months is the goal.`,
        mnemonics: [
          { text: "BERA 5 waves: ECOLI", explanation: "I = CN VIII (distal), II = Cochlear nucleus, III = Superior Olivary complex, IV = Lateral Lemniscus, V = Inferior Colliculus. Wave V is most important clinically." },
          { text: "OAE = Outer hair cell Activity Emission", explanation: "OAE tests outer hair cell function. Present OAE = functioning OHC = hearing up to 30-40 dB likely normal. Used for neonatal screening." },
        ],
        keyPoints: [
          "Maximum conductive hearing loss possible is 60 dB (complete ossicular disruption)",
          "Recruitment = cochlear pathology (abnormal loudness growth); Tone decay = retrocochlear",
          "BERA: 5 waves (I-V), wave V most robust, used for threshold and retrocochlear diagnosis",
          "OAE tests outer hair cell function; used for neonatal hearing screening",
          "Rollover in speech audiometry suggests retrocochlear pathology (acoustic neuroma)",
          "India's neonatal screening: OAE first, then BERA for confirmation",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 7: Audiometry", edition: "7th" },
          { book: "PL Dhingra", chapter: "Special Tests of Hearing", edition: "7th" },
        ],
      },
      {
        layer: 3,
        slug: "deafness-hearing-tests-layer-3-clinical",
        title: "Deafness & Hearing Tests - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical approach to a patient with hearing loss involves history, examination, tuning fork tests, audiometry, and imaging to establish the type, degree, and cause of deafness.",
        contentMd: `# Clinical Application - Deafness

## Systematic Approach to Hearing Loss

### Step 1: History
- Duration: Sudden vs gradual vs progressive
- Unilateral vs bilateral
- Associated symptoms: Tinnitus, vertigo, discharge, otalgia
- Noise exposure, ototoxic drugs, family history
- Birth history (in children): Prematurity, jaundice, NICU stay

### Step 2: Examination
- Otoscopy: TM status, discharge, wax, masses
- Tuning fork tests: Rinne, Weber, ABC
- Cranial nerve examination (especially CN V, VII, VIII)

### Step 3: Investigations
- Pure tone audiometry + tympanometry
- BERA/OAE (if objective testing needed)
- CT/MRI temporal bone (if retrocochlear pathology suspected)

## Case 1: Presbycusis
- 65-year-old with progressive bilateral hearing loss, difficulty understanding speech in noisy environments
- Audiogram: Bilateral symmetric high-frequency SNHL (sloping pattern)
- **Mechanism**: Age-related degeneration of hair cells (sensory presbycusis), stria vascularis (metabolic), spiral ganglion neurons (neural)
- **Management**: Hearing aids (behind-the-ear type most common)

## Case 2: Sudden Sensorineural Hearing Loss
- 40-year-old with sudden unilateral hearing loss on waking, tinnitus
- ENT emergency - needs urgent treatment
- Audiogram: Unilateral SNHL >30 dB across 3 frequencies
- **Management**:
  - High-dose systemic steroids (prednisolone 1 mg/kg)
  - Intratympanic steroids if no improvement
  - Rule out: Acoustic neuroma (MRI with gadolinium)
  - Prognosis: ~50% recover spontaneously

## Case 3: Congenital Hearing Loss
- Infant fails neonatal hearing screening (OAE absent bilaterally)
- BERA confirms bilateral severe SNHL (>70 dB)
- Risk factors: Consanguineous marriage (common in India), TORCH infections, neonatal jaundice
- **Management pathway**:
  - Hearing aids trial by 6 months
  - If no benefit from hearing aids: **Cochlear implant** (ideally before 2-3 years)
  - Speech therapy essential post-implant

## Case 4: Drug-Induced Ototoxicity
- Patient on aminoglycosides (streptomycin/gentamicin) or cisplatin
- Bilateral high-frequency SNHL, tinnitus
- **At-risk drugs**: Aminoglycosides, loop diuretics, cisplatin, quinine, aspirin (high dose)
- Monitor with serial audiometry and OAE

> **Clinical Pearl**: India has one of the world's highest burdens of hearing disability. Consanguineous marriages, prevalent in many communities, contribute significantly to congenital SNHL. The government's RBSK (Rashtriya Bal Swasthya Karyakram) program includes screening for hearing disability in children aged 0-18 years.`,
        mnemonics: [
          { text: "ACE for ototoxic drugs", explanation: "Aminoglycosides (streptomycin, gentamicin), Cisplatin, and others (loop diuretics, quinine). These are the major ototoxic drug categories." },
          { text: "6-12 rule for congenital SNHL", explanation: "Detect by 6 months, intervene by 12 months for best speech and language outcomes in congenital hearing loss." },
        ],
        keyPoints: [
          "Presbycusis: bilateral symmetric high-frequency SNHL in elderly; hearing aids are mainstay",
          "Sudden SNHL is an ENT emergency: high-dose steroids within 72 hours",
          "Congenital SNHL: detect by 6 months, hearing aid trial, cochlear implant if severe bilateral",
          "Ototoxic drugs: aminoglycosides, cisplatin, loop diuretics, aspirin (high dose)",
          "Consanguineous marriage is a significant risk factor for congenital SNHL in India",
          "RBSK program screens for hearing disability in Indian children aged 0-18 years",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 8: Deafness", edition: "7th" },
          { book: "PL Dhingra", chapter: "Management of Hearing Loss", edition: "7th" },
        ],
      },
      {
        layer: 4,
        slug: "deafness-hearing-tests-layer-4-exam",
        title: "Deafness & Hearing Tests - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts on deafness classification, tuning fork tests interpretation, audiometric patterns, and clinical scenarios frequently tested in NEXT and NEET PG.",
        contentMd: `# Exam Preparation - Deafness & Hearing Tests

## One-Liners
- MC type of hearing loss worldwide: **Sensorineural**
- MC cause of CHL in adults: **Otosclerosis**
- MC cause of CHL in children: **Secretory otitis media**
- MC cause of SNHL in elderly: **Presbycusis**
- MC cause of bilateral SNHL in young adults: **Noise-induced**
- Tuning fork used for clinical testing: **512 Hz**
- Maximum CHL possible: **60 dB**
- Rinne negative = **CHL of at least 15-20 dB**
- False negative Rinne seen in: **Dead ear** (severe unilateral SNHL)
- Carhart notch: **Dip at 2 kHz on BC audiogram in otosclerosis**
- OAE tests function of: **Outer hair cells**
- BERA wave V generator: **Inferior colliculus (lateral lemniscus)**
- Recruitment indicates: **Cochlear pathology**
- Tone decay indicates: **Retrocochlear pathology**
- Rollover in speech audiometry: **Retrocochlear (acoustic neuroma)**

## Comparison: CHL vs SNHL
| Feature | CHL | SNHL |
|---------|-----|------|
| Rinne test | Negative | Positive |
| Weber | Lateralizes to affected ear | Lateralizes to better ear |
| ABC test | Normal | Reduced |
| Air-bone gap | Present | Absent |
| Recruitment | Absent | Present (cochlear) |
| Maximum loss | 60 dB | Any degree |

## Audiogram Patterns
| Pattern | Condition |
|---------|-----------|
| Low frequency CHL + Carhart notch | Otosclerosis |
| 4 kHz notch (SNHL) | Noise-induced hearing loss |
| High frequency sloping SNHL | Presbycusis |
| Flat SNHL | Meniere disease (early) |
| Cookie-bite (mid-frequency) | Genetic hearing loss |
| Rising (low frequency SNHL) | Meniere disease |

## Previous Year Themes
- Interpretation of Rinne and Weber tests
- Differentiating CHL from SNHL
- Audiogram pattern recognition
- BERA waves and their generators
- Tympanometry curve types
- False negative Rinne test

## Pattern Recognition
- Elderly + bilateral high frequency loss -> **Presbycusis**
- Factory worker + 4 kHz dip -> **NIHL**
- Young adult + progressive CHL + family history -> **Otosclerosis**
- Infant fails OAE bilateral -> **Congenital SNHL, do BERA**
- Sudden unilateral SNHL + tinnitus -> **ENT emergency, rule out acoustic neuroma**`,
        mnemonics: [
          { text: "Carhart's notch = 2 kHz in Otosclerosis", explanation: "BC audiogram shows a characteristic dip at 2 kHz in otosclerosis. This is an artifact of stapes fixation, not true sensorineural loss." },
          { text: "Rinne: Positive = Plus = Normal/SNHL", explanation: "Positive Rinne means AC is greater (plus) than BC. This is normal or SNHL. Negative Rinne = CHL." },
        ],
        keyPoints: [
          "512 Hz tuning fork preferred for clinical hearing tests",
          "Rinne negative = CHL of at least 15-20 dB; false negative in dead ear",
          "Carhart notch: 2 kHz dip on BC in otosclerosis (artifact of stapes fixation)",
          "BERA wave V: most robust wave, generated near inferior colliculus",
          "OAE: present = OHC working = hearing up to 30-40 dB normal",
          "Maximum possible conductive hearing loss: 60 dB",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapters 6-8", edition: "7th" },
          { book: "PL Dhingra", chapter: "Hearing Tests and Deafness", edition: "7th" },
        ],
      },
      {
        layer: 5,
        slug: "deafness-hearing-tests-layer-5-active-recall",
        title: "Deafness & Hearing Tests - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for rapid revision of hearing loss types, tuning fork tests, audiometry interpretation, and management approaches.",
        contentMd: `# Active Recall - Deafness & Hearing Tests

## Flashcard Q&A

**Q1**: What does Rinne negative indicate?
**A1**: Conductive hearing loss of at least 15-20 dB (bone conduction > air conduction in the same ear).

**Q2**: In Weber test, which ear does sound lateralize to in CHL?
**A2**: The affected (diseased) ear with conductive loss. In SNHL, it lateralizes to the better ear.

**Q3**: What is false negative Rinne?
**A3**: Occurs in severe unilateral SNHL (dead ear). BC appears better than AC because the opposite normal ear hears the BC stimulus via transcranial transmission.

**Q4**: What is the Carhart notch?
**A4**: A dip at 2 kHz on bone conduction audiogram in otosclerosis. It is an artifact of stapes fixation, not true SNHL. Disappears after successful stapedectomy.

**Q5**: What does OAE test?
**A5**: Outer hair cell function. Present OAE = OHC working = hearing likely normal up to 30-40 dB. Used for neonatal hearing screening.

**Q6**: Name the 5 BERA waves and their approximate generators.
**A6**: I = Distal CN VIII, II = Proximal CN VIII/cochlear nucleus, III = Superior olivary complex, IV = Lateral lemniscus, V = Inferior colliculus.

**Q7**: What is recruitment and what does it indicate?
**A7**: Abnormal growth of loudness. Small increase in stimulus intensity causes disproportionately large increase in perceived loudness. Indicates cochlear pathology (hair cell loss).

**Q8**: What is the maximum conductive hearing loss possible?
**A8**: 60 dB. Complete ossicular chain disruption. Greater loss suggests mixed or sensorineural component.

**Q9**: What type of tympanogram is seen in otosclerosis?
**A9**: Type As (low amplitude, stiff peak) - stapes fixation increases middle ear stiffness.

**Q10**: What audiogram pattern is seen in presbycusis?
**A10**: Bilateral symmetric high-frequency sloping SNHL. Both AC and BC equally affected with no air-bone gap.

**Q11**: What is the preferred tuning fork frequency for clinical tests and why?
**A11**: 512 Hz. It is in the speech frequency range and has an ideal balance between vibration time and tactile sensation.

**Q12**: How do you differentiate cochlear from retrocochlear SNHL?
**A12**: Cochlear: recruitment present, OAE absent, normal BERA latencies. Retrocochlear: tone decay present, rollover in speech audiometry, prolonged BERA I-V interpeak latency.

## Quick Revision Bullets
- CHL: external/middle ear; SNHL: cochlea/nerve; Mixed: both
- Rinne positive = AC > BC = Normal or SNHL
- Rinne negative = BC > AC = CHL (>15 dB)
- Weber: CHL -> lateralizes to affected; SNHL -> lateralizes to better
- Carhart notch: 2 kHz dip on BC in otosclerosis
- OAE: outer hair cell test; BERA: objective threshold + retrocochlear
- Type B tympanogram = effusion; Type As = otosclerosis
- Maximum CHL = 60 dB`,
        mnemonics: [
          { text: "AC > BC = Positive = Normal/SNHL", explanation: "Rinne positive test interpretation. If Weber also lateralizes away, confirms SNHL on the tested side." },
          { text: "5 BERA waves = ECOLI", explanation: "E-eighth nerve (I), C-cochlear nucleus (II), O-olivary complex (III), L-lateral lemniscus (IV), I-inferior colliculus (V)." },
        ],
        keyPoints: [
          "Rinne: AC vs BC same ear; Weber: which ear hears louder; ABC: BC vs examiner",
          "False negative Rinne: dead ear; Carhart notch: otosclerosis at 2 kHz",
          "BERA wave V: most important clinically; OAE: outer hair cell screening",
          "Recruitment = cochlear; Tone decay = retrocochlear",
          "Type As = stiff (otosclerosis); Type B = flat (effusion); Type C = negative pressure",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapters 6-8", edition: "7th" },
          { book: "PL Dhingra", chapter: "Hearing Assessment", edition: "7th" },
        ],
      },
    ],
  },

  // ─── Topic 4: Vertigo & Meniere's Disease ─────────────────────
  {
    topicCode: "EN-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "vertigo-menieres-layer-1-foundation",
        title: "Vertigo & Meniere's Disease - Foundation",
        estimatedMinutes: 20,
        summary: "Vertigo is an illusion of movement resulting from vestibular dysfunction. Meniere disease is characterized by episodic vertigo, fluctuating hearing loss, tinnitus, and aural fullness caused by endolymphatic hydrops.",
        contentMd: `# Vertigo & Meniere's Disease

## Definition
- **Vertigo**: Illusion of rotatory movement (patient or surroundings spinning)
- **Dizziness**: Non-specific term including lightheadedness, unsteadiness
- **Nystagmus**: Involuntary rhythmic eye movements; named by direction of fast component

## Classification of Vertigo
| Feature | Peripheral | Central |
|---------|-----------|---------|
| **Site** | Inner ear / CN VIII | Brainstem / Cerebellum |
| **Onset** | Sudden | Gradual |
| **Severity** | Severe, incapacitating | Mild to moderate |
| **Duration** | Seconds to hours | Days to weeks |
| **Hearing loss** | May be present | Usually absent |
| **Tinnitus** | Often present | Usually absent |
| **Nystagmus** | Horizontal/rotatory, fatigable | Vertical, non-fatigable |
| **Nausea/vomiting** | Severe | Mild |

## Common Causes

### Peripheral
1. **BPPV** (most common cause of vertigo overall)
2. **Meniere disease**
3. **Vestibular neuronitis** (acute viral)
4. **Labyrinthitis** (bacterial or viral)
5. **Acoustic neuroma**

### Central
1. Vertebrobasilar insufficiency
2. Brainstem stroke
3. Multiple sclerosis
4. Cerebellar tumors

## Benign Paroxysmal Positional Vertigo (BPPV)
- **MC cause of vertigo** in all age groups
- **Cause**: Displaced otoconia (calcium carbonate crystals) from utricle into semicircular canal (usually posterior)
- **Trigger**: Changes in head position
- **Duration**: Brief episodes (<1 minute)
- **Diagnosis**: Dix-Hallpike test (positive = vertigo + nystagmus with latency)
- **Treatment**: Epley maneuver (canalith repositioning)

## Meniere Disease

### Tetrad (Classic)
1. **Episodic vertigo** (lasting 20 min to several hours)
2. **Fluctuating sensorineural hearing loss** (low frequency initially)
3. **Tinnitus** (roaring/buzzing)
4. **Aural fullness** (sensation of pressure in ear)

### Pathology
- **Endolymphatic hydrops**: Distension of membranous labyrinth by excess endolymph
- Affects: Cochlear duct (hearing), saccule, utricle, semicircular canals (balance)

> **Clinical Pearl**: In India, many patients presenting with vertigo to ENT OPD have BPPV which can be effectively treated with the Epley maneuver in a single sitting without any medication. Awareness of this simple, cost-effective treatment is important for resource-limited settings.`,
        mnemonics: [
          { text: "Meniere's FEHT", explanation: "Fullness (aural), Episodic vertigo, Hearing loss (fluctuating, low freq SNHL), Tinnitus - the 4 cardinal features of Meniere disease." },
          { text: "BPPV = Brief Paroxysmal Positional Vertigo", explanation: "Brief episodes (<1 min), triggered by Position changes, diagnosed with Dix-Hallpike, treated with Epley maneuver." },
          { text: "DH test for BPPV, Epley for treatment", explanation: "Dix-Hallpike test diagnoses BPPV. Epley maneuver treats it by repositioning otoconia from posterior SCC back to utricle." },
        ],
        keyPoints: [
          "BPPV is the most common cause of vertigo; treated with Epley maneuver",
          "Meniere disease: episodic vertigo + fluctuating SNHL + tinnitus + aural fullness",
          "Meniere pathology: endolymphatic hydrops (excess endolymph distending membranous labyrinth)",
          "Peripheral vertigo: severe, sudden, with hearing loss/tinnitus; Central: mild, gradual, no deafness",
          "Vertical nystagmus suggests central cause; horizontal/rotatory suggests peripheral",
          "BPPV: otoconia displaced into posterior semicircular canal; Dix-Hallpike test diagnostic",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 13: Vertigo", edition: "7th" },
          { book: "PL Dhingra", chapter: "Meniere Disease and BPPV", edition: "7th" },
        ],
      },
      {
        layer: 2,
        slug: "vertigo-menieres-layer-2-mechanism",
        title: "Vertigo & Meniere's Disease - Mechanism",
        estimatedMinutes: 30,
        summary: "BPPV is caused by canalithiasis (free-floating otoconia in SCC). Meniere disease results from endolymphatic hydrops with reduced endolymph absorption. Vestibular testing includes caloric, ENG, and VNG.",
        contentMd: `# Mechanisms of Vertigo Disorders

## BPPV Pathophysiology

### Canalithiasis Theory (Most Accepted)
- Otoconia (calcium carbonate crystals) from utricular macula dislodge
- Free-floating in SCC (posterior canal MC - 85%)
- Head position change -> gravity moves otoconia -> endolymph flow -> cupula deflection -> vertigo

### Cupulolithiasis Theory
- Otoconia attached to cupula (making it gravity-sensitive)
- Less common form, may explain persistent positional nystagmus

### Dix-Hallpike Test Mechanics
1. Patient sits upright, head turned 45 degrees to tested side
2. Rapidly laid supine with head hanging 30 degrees below table
3. Positive: Upbeating torsional nystagmus with latency (2-5 sec), duration <60 sec, fatiguable
4. Tests posterior and anterior SCC

## Meniere Disease Pathophysiology

### Endolymphatic Hydrops
- **Primary defect**: Impaired endolymph absorption by endolymphatic sac
- Causes distension of entire membranous labyrinth
- Proposed mechanisms:
  1. Reduced endolymph absorption (endolymphatic sac dysfunction)
  2. Increased endolymph production
  3. Altered ion transport (aquaporin channel dysfunction)
  4. Autoimmune damage to endolymphatic sac

### Mechanism of Attacks
\`\`\`
Endolymph accumulates -> Membranous labyrinth distends
  -> Reissner membrane ruptures -> Endolymph mixes with perilymph
  -> K+ intoxication of hair cells and CN VIII
  -> Vertigo + hearing loss + tinnitus
  -> Membrane heals -> Attack resolves
  -> Repeated cycles -> Permanent damage
\`\`\`

### Hearing Loss Pattern
- Early: Low frequency SNHL (fluctuating, reversible)
- Late: All frequencies affected (permanent, irreversible)

## Vestibular Function Tests

### Caloric Test (Gold Standard for Unilateral Vestibular Function)
- Irrigation with warm (44 C) and cold (30 C) water
- **COWS**: Cold Opposite, Warm Same (direction of fast nystagmus)
- **Canal paresis**: Reduced response on one side (vestibular hypofunction)

### Electronystagmography (ENG) / Videonystagmography (VNG)
- Records nystagmus electrically (ENG) or with infrared cameras (VNG)
- Identifies peripheral vs central vestibular dysfunction

### Vestibular Evoked Myogenic Potential (VEMP)
- Tests otolith organ function
- Cervical VEMP (cVEMP): Saccular function
- Ocular VEMP (oVEMP): Utricular function

> **Clinical Pearl**: In Meniere disease, the glycerol dehydration test can support diagnosis. Oral glycerol reduces endolymphatic pressure, causing temporary hearing improvement (>10 dB at 2 frequencies).`,
        mnemonics: [
          { text: "POST for BPPV canal", explanation: "Posterior canal is the Most Common canal involved in BPPV (85%). Diagnosed by Dix-Hallpike, Treated by Epley." },
          { text: "Meniere membrane rupture cycle", explanation: "Hydrops -> Distension -> Rupture of Reissner membrane -> K+ poisoning of hair cells -> Attack -> Healing -> Repeat." },
        ],
        keyPoints: [
          "BPPV: canalithiasis (free otoconia in posterior SCC) is the most accepted theory",
          "Dix-Hallpike positive: upbeating torsional nystagmus with latency, fatigable, <60 sec",
          "Meniere pathology: endolymphatic hydrops -> Reissner membrane rupture -> K+ intoxication",
          "Early Meniere: low frequency fluctuating SNHL; Late: all frequencies, permanent",
          "Caloric test: gold standard for unilateral vestibular function assessment",
          "Glycerol dehydration test: temporary hearing improvement supports Meniere diagnosis",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 13: Vestibular Function Tests", edition: "7th" },
          { book: "PL Dhingra", chapter: "Vertigo and Its Investigation", edition: "7th" },
        ],
      },
      {
        layer: 3,
        slug: "vertigo-menieres-layer-3-clinical",
        title: "Vertigo & Meniere's Disease - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical management of vertigo involves accurate diagnosis, medical therapy with vestibular sedatives, and specific treatments like Epley maneuver for BPPV and salt restriction for Meniere disease.",
        contentMd: `# Clinical Application - Vertigo & Meniere's

## Case 1: BPPV
- 55-year-old woman with brief spinning episodes when turning in bed
- Each episode lasts 30-40 seconds, specific head positions trigger it
- No hearing loss, no tinnitus
- **Dix-Hallpike test**: Positive
- **Treatment**: Epley maneuver (80-90% success rate in single sitting)

## Case 2: Meniere Disease
- 40-year-old man with recurrent severe vertigo (2-4 hours) with left ear fullness, roaring tinnitus, hearing loss
- Audiogram: Left ear low-frequency SNHL
- **Management**:
  - **Acute attack**: Bed rest, vestibular sedatives (prochlorperazine, betahistine)
  - **Prophylaxis**: Salt restriction (<2g/day), diuretics, betahistine (16 mg TDS)
  - **Refractory**: Intratympanic gentamicin (chemical labyrinthectomy) or steroids
  - **Surgical**: Endolymphatic sac decompression, labyrinthectomy (last resort)

## Case 3: Vestibular Neuronitis
- 30-year-old with sudden severe vertigo, nausea, vomiting for 3 days
- No hearing loss (differentiates from labyrinthitis)
- **Cause**: Viral infection of vestibular nerve
- **Treatment**: Vestibular sedatives (short-term), then vestibular rehabilitation exercises

## Medical Therapy for Vertigo
| Drug | Class | Use |
|------|-------|-----|
| **Betahistine** | H1 agonist/H3 antagonist | Meniere disease (first-line prophylaxis) |
| Prochlorperazine | Phenothiazine | Acute vertigo (antiemetic) |
| Cinnarizine | Calcium channel blocker | Vestibular sedative |
| Dimenhydrinate | Antihistamine | Motion sickness, acute vertigo |

> **Clinical Pearl**: Betahistine is one of the most prescribed drugs in Indian ENT practice. It improves cochlear and vestibular blood flow and reduces endolymph production.`,
        mnemonics: [
          { text: "Epley for BPPV, Betahistine for Meniere", explanation: "Two key treatments: Epley maneuver for BPPV; Betahistine is first-line prophylaxis for Meniere disease." },
          { text: "Salt restriction in Meniere", explanation: "Less than 2g/day salt reduces endolymph volume. Combined with diuretics and betahistine." },
        ],
        keyPoints: [
          "BPPV: Epley maneuver is definitive treatment with 80-90% success rate",
          "Meniere acute: vestibular sedatives; Prophylaxis: salt restriction + betahistine + diuretics",
          "Vestibular neuronitis: sudden vertigo WITHOUT hearing loss; viral etiology",
          "Intratympanic gentamicin: chemical labyrinthectomy for refractory Meniere disease",
          "Vestibular rehabilitation exercises promote central compensation",
          "Betahistine: H1 agonist and H3 antagonist; first-line prophylaxis for Meniere disease",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 13: Management of Vertigo", edition: "7th" },
          { book: "PL Dhingra", chapter: "Meniere Disease Treatment", edition: "7th" },
        ],
      },
      {
        layer: 4,
        slug: "vertigo-menieres-layer-4-exam",
        title: "Vertigo & Meniere's Disease - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points on vertigo classification, BPPV diagnosis and treatment, Meniere disease features, and differentiating peripheral from central vertigo.",
        contentMd: `# Exam Preparation - Vertigo & Meniere's

## One-Liners
- MC cause of vertigo: **BPPV**
- MC canal involved in BPPV: **Posterior semicircular canal**
- Diagnostic test for BPPV: **Dix-Hallpike test**
- Treatment for BPPV: **Epley maneuver**
- Meniere disease pathology: **Endolymphatic hydrops**
- Meniere tetrad: **Vertigo + SNHL + Tinnitus + Aural fullness**
- Early hearing loss in Meniere: **Low frequency SNHL**
- Drug for Meniere prophylaxis: **Betahistine**
- Vestibular neuronitis: **Vertigo WITHOUT hearing loss** (viral)
- Labyrinthitis: **Vertigo WITH hearing loss**
- Vertical nystagmus: **Central cause** (never peripheral)
- Glycerol test positive: **Meniere disease**

## Comparison: BPPV vs Meniere vs Vestibular Neuronitis
| Feature | BPPV | Meniere | Vestibular Neuronitis |
|---------|------|---------|----------------------|
| Duration | Seconds (<1 min) | Hours (20 min-12 hr) | Days (24-72 hr) |
| Trigger | Head position | Spontaneous | Spontaneous |
| Hearing loss | No | Yes (low freq) | No |
| Tinnitus | No | Yes | No |
| Treatment | Epley | Betahistine | Vestibular rehab |

## Peripheral vs Central Vertigo
| Red Flags for Central | Suggests Peripheral |
|----------------------|-------------------|
| Vertical nystagmus | Horizontal/rotatory nystagmus |
| Non-fatigable | Fatigable |
| No latency | Latency present |
| Focal neurological deficits | Hearing loss/tinnitus |

## Pattern Recognition
- Brief positional vertigo + Dix-Hallpike positive -> **BPPV**
- Episodic vertigo + low-freq SNHL + tinnitus -> **Meniere**
- Sudden vertigo + no hearing loss + viral prodrome -> **Vestibular neuronitis**
- Vertigo + vertical nystagmus + neurological signs -> **Central cause**`,
        mnemonics: [
          { text: "Seconds=BPPV, Hours=Meniere, Days=Neuronitis", explanation: "Duration of vertigo helps differentiate the three common causes." },
          { text: "Central: Vertical, No fatigue, No latency", explanation: "Three key features differentiating central from peripheral vertigo." },
        ],
        keyPoints: [
          "BPPV: seconds duration, positional trigger, Dix-Hallpike, Epley treatment",
          "Meniere: hours duration, low-frequency SNHL, endolymphatic hydrops, betahistine",
          "Vestibular neuronitis: days duration, NO hearing loss, viral etiology",
          "Vertical nystagmus = central cause; never seen in peripheral vertigo",
          "Caloric test: COWS; absent response = vestibular hypofunction",
          "Duration is key: Seconds (BPPV), Hours (Meniere), Days (Neuronitis)",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 13", edition: "7th" },
          { book: "PL Dhingra", chapter: "Differential Diagnosis of Vertigo", edition: "7th" },
        ],
      },
      {
        layer: 5,
        slug: "vertigo-menieres-layer-5-active-recall",
        title: "Vertigo & Meniere's Disease - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for rapid revision of vertigo disorders, their diagnosis, and management.",
        contentMd: `# Active Recall - Vertigo & Meniere's Disease

## Flashcard Q&A

**Q1**: What is the most common cause of vertigo?
**A1**: Benign Paroxysmal Positional Vertigo (BPPV).

**Q2**: Which semicircular canal is most commonly involved in BPPV?
**A2**: Posterior semicircular canal (85% of cases).

**Q3**: Describe the Dix-Hallpike test.
**A3**: Patient sits upright, head turned 45 degrees. Rapidly laid supine with head hanging. Positive if upbeating torsional nystagmus with latency, fatigable, <60 seconds.

**Q4**: What is the Epley maneuver?
**A4**: Canalith repositioning procedure that moves otoconia from posterior SCC back to utricle. Success rate 80-90%.

**Q5**: What is the pathological basis of Meniere disease?
**A5**: Endolymphatic hydrops - distension of membranous labyrinth due to excess endolymph.

**Q6**: What are the 4 features of Meniere disease?
**A6**: Episodic vertigo (hours), fluctuating low-frequency SNHL, tinnitus, aural fullness.

**Q7**: How does vestibular neuronitis differ from labyrinthitis?
**A7**: Neuronitis: vertigo WITHOUT hearing loss. Labyrinthitis: vertigo WITH hearing loss.

**Q8**: What type of nystagmus suggests central cause?
**A8**: Vertical nystagmus, direction-changing, non-fatigable, without latency.

**Q9**: What is the first-line prophylactic drug for Meniere?
**A9**: Betahistine (H1 agonist / H3 antagonist, 16 mg TDS).

**Q10**: What is intratympanic gentamicin used for?
**A10**: Chemical labyrinthectomy in refractory Meniere disease. Selectively vestibulotoxic.

**Q11**: What is the duration of vertigo in BPPV, Meniere, and vestibular neuronitis?
**A11**: BPPV: seconds; Meniere: hours; Neuronitis: days.

**Q12**: What is the glycerol dehydration test?
**A12**: Oral glycerol improves hearing by >10 dB at 2 frequencies, supporting Meniere diagnosis.

## Quick Revision Bullets
- BPPV: MC vertigo, posterior SCC, Dix-Hallpike, Epley, seconds
- Meniere: endolymphatic hydrops, low-freq SNHL, hours, betahistine
- Neuronitis: viral, no hearing loss, days, vestibular rehab
- Peripheral: horizontal nystagmus, fatigable, latency
- Central: vertical nystagmus, non-fatigable, no latency`,
        mnemonics: [
          { text: "FEHT for Meniere tetrad", explanation: "Fullness, Episodic vertigo, Hearing loss, Tinnitus." },
          { text: "SHD for duration", explanation: "Seconds = BPPV, Hours = Meniere, Days = Neuronitis." },
        ],
        keyPoints: [
          "BPPV: most common vertigo, posterior SCC, Epley maneuver curative",
          "Meniere: endolymphatic hydrops, tetrad, betahistine prophylaxis",
          "Vestibular neuronitis: viral, no hearing loss, self-limiting",
          "Vertical nystagmus always indicates central pathology",
          "Duration is the key differentiator: seconds/hours/days",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 13", edition: "7th" },
          { book: "PL Dhingra", chapter: "Vertigo", edition: "7th" },
        ],
      },
    ],
  },

  // ─── Topic 5: Otosclerosis & Ear Tumors ───────────────────────
  {
    topicCode: "EN-MOD-01-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "otosclerosis-ear-tumors-layer-1-foundation",
        title: "Otosclerosis & Ear Tumors - Foundation",
        estimatedMinutes: 20,
        summary: "Otosclerosis is a localized bone disease of the otic capsule causing stapes fixation and conductive hearing loss. Ear tumors include acoustic neuroma, glomus tumors, and squamous cell carcinoma.",
        contentMd: `# Otosclerosis & Ear Tumors

## Otosclerosis

### Definition
- Primary disease of the **otic capsule** (bony labyrinth)
- Normal enchondral bone replaced by spongy vascular bone (otospongiosis) which matures to dense sclerotic bone

### Epidemiology
- Most common cause of CHL in young adults (20-40 years)
- Females > Males (2:1), bilateral in 70-80%
- Autosomal dominant with incomplete penetrance
- Aggravated by pregnancy (estrogen effect)

### Sites of Involvement
- **Fenestral (stapedial)**: Most common (80%). Involves fissula ante fenestram -> stapes fixation -> CHL
- **Cochlear (retrofenestral)**: Involves cochlear capsule -> SNHL component
- **Combined**: Mixed hearing loss

### Clinical Features
- Progressive hearing loss (bilateral)
- **Paracusis of Willis**: Hears better in noisy surroundings
- Tinnitus (low-pitched)
- **Schwartze sign**: Flamingo-pink promontory (active otospongiosis)

### Investigations
- Otoscopy: Normal TM (may show Schwartze sign)
- PTA: CHL with **Carhart notch at 2 kHz**
- Tympanometry: **Type As**
- Stapedial reflex: Absent

## Ear Tumors

### Acoustic Neuroma (Vestibular Schwannoma)
- Benign tumor of **Schwann cells of vestibular nerve (CN VIII)**
- MC tumor of **cerebellopontine angle** (80-90%)
- Unilateral; bilateral = **NF2 (chromosome 22)**

### Glomus Tumors (Paragangliomas)
| Type | Site | Presentation |
|------|------|-------------|
| **Glomus tympanicum** | Promontory | Pulsatile tinnitus, CHL |
| **Glomus jugulare** | Jugular bulb | CHL, cranial nerve palsies |

- **Rising sun sign**: Red mass behind TM
- **Brown sign**: Blanching on pneumatic otoscopy

### SCC of External Auditory Canal
- Rare; associated with chronic otitis externa
- Blood-stained discharge, pain, facial nerve palsy

> **Clinical Pearl**: In India, otosclerosis is common and often first noticed during pregnancy. Young women with progressive bilateral CHL and normal TM should be evaluated for otosclerosis.`,
        mnemonics: [
          { text: "Otosclerosis: Young Female + CHL + Normal TM", explanation: "Classic presentation: young woman (20-40) with progressive bilateral conductive hearing loss and normal tympanic membrane." },
          { text: "CAN for CPA tumors", explanation: "C = CN VIII (acoustic neuroma MC), A = Angle (CPA), N = NF2 if bilateral." },
          { text: "SCHWARTZE = pink promontory", explanation: "Schwartze sign: flamingo-pink promontory seen through TM in active otosclerosis." },
        ],
        keyPoints: [
          "Otosclerosis: MC cause of CHL in young adults; autosomal dominant, worse in pregnancy",
          "Fenestral type (80%): stapes fixation -> CHL; Cochlear type: SNHL component",
          "Carhart notch: 2 kHz dip on BC in otosclerosis; Type As tympanogram",
          "Schwartze sign: pink promontory in active otosclerosis",
          "Acoustic neuroma: MC CPA tumor, from vestibular nerve; bilateral = NF2",
          "Glomus tumors: pulsatile tinnitus, rising sun sign, Brown sign",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 12: Otosclerosis", edition: "7th" },
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 14: Tumors of Ear", edition: "7th" },
        ],
      },
      {
        layer: 2,
        slug: "otosclerosis-ear-tumors-layer-2-mechanism",
        title: "Otosclerosis & Ear Tumors - Mechanism",
        estimatedMinutes: 30,
        summary: "Otosclerosis involves abnormal bone remodeling at the otic capsule. Acoustic neuroma grows along CN VIII compressing adjacent structures. Glomus tumors arise from paraganglia.",
        contentMd: `# Mechanisms - Otosclerosis & Ear Tumors

## Otosclerosis Pathogenesis

### Bone Remodeling Cycle
\`\`\`
Normal otic capsule (enchondral bone, usually does not remodel)
  -> Abnormal osteoclastic resorption (otospongiosis phase)
  -> Replaced by immature spongy vascular bone
  -> Maturation to dense sclerotic bone
  -> Stapes footplate fixation -> CHL
\`\`\`

### Proposed Etiologies
| Theory | Evidence |
|--------|---------|
| **Genetic** | Autosomal dominant, multiple gene loci |
| **Viral (Measles)** | Measles virus RNA found in otosclerotic bone |
| **Autoimmune** | Antibodies against type II collagen |
| **Hormonal** | Worsened by pregnancy (estrogen) |

### Why Carhart Notch?
- Stapes fixation alters inertial component of bone conduction
- At 2 kHz, ossicular resonance contributes maximally to BC
- Fixed stapes loses this resonance -> apparent BC drop at 2 kHz
- **Artifact** -> disappears after successful stapedectomy

### Cochlear Otosclerosis
- Spongy bone invades cochlear endosteum
- Releases toxic enzymes into perilymph
- Damages hair cells -> SNHL component

## Acoustic Neuroma Pathogenesis

### Growth Pattern
\`\`\`
Arises from Schwann cells at Obersteiner-Redlich zone
  -> Grows within IAC -> expands IAC
  -> Extends into CPA cistern
  -> Compresses CN V, VII, cerebellum, brainstem
\`\`\`

### Stages
| Stage | Size | Features |
|-------|------|----------|
| I (Intracanalicular) | <1 cm | Unilateral SNHL, tinnitus |
| II (Cisternal) | 1-2.5 cm | + facial numbness (CN V) |
| III (Compressive) | 2.5-4 cm | Facial palsy, cerebellar signs |
| IV (Large) | >4 cm | Hydrocephalus, brainstem compression |

### NF2
- Gene: **NF2 on chromosome 22** (Merlin protein)
- Autosomal dominant, bilateral vestibular schwannomas

## Glomus Tumor Pathogenesis
- Arises from **paraganglia** (neural crest origin)
- Glomus tympanicum: from Jacobson nerve (CN IX) on promontory
- Glomus jugulare: from Arnold nerve (CN X) or jugular bulb
- **Chromaffin-negative** paragangliomas
- Locally destructive, rarely malignant (<5%)

> **Clinical Pearl**: In India, acoustic neuroma often presents late (Stage III-IV) due to delayed referral. Long-standing unilateral hearing loss developing facial numbness warrants urgent MRI.`,
        mnemonics: [
          { text: "22 for NF2", explanation: "NF2 gene on chromosome 22. NF2 = bilateral acoustic neuromas. 22 = Two-Two = bilateral." },
          { text: "Carhart = Artifact at 2 kHz", explanation: "Not true SNHL. Lost ossicular resonance at 2 kHz due to stapes fixation. Disappears after stapedectomy." },
        ],
        keyPoints: [
          "Otosclerosis: abnormal bone remodeling at otic capsule (normally does not remodel)",
          "Measles virus RNA found in otosclerotic bone; autosomal dominant",
          "Carhart notch: artifact due to lost ossicular resonance at 2 kHz",
          "Acoustic neuroma: arises at Obersteiner-Redlich zone, grows from IAC into CPA",
          "NF2: chromosome 22, bilateral acoustic neuromas, merlin protein",
          "Glomus tumors: paragangliomas from CN IX (Jacobson) or CN X (Arnold) nerves",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 12: Otosclerosis", edition: "7th" },
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 14: Ear Tumors", edition: "7th" },
        ],
      },
      {
        layer: 3,
        slug: "otosclerosis-ear-tumors-layer-3-clinical",
        title: "Otosclerosis & Ear Tumors - Clinical Application",
        estimatedMinutes: 20,
        summary: "Management of otosclerosis includes sodium fluoride and stapedectomy. Acoustic neuroma requires MRI diagnosis and microsurgical excision or Gamma Knife radiosurgery.",
        contentMd: `# Clinical Application - Otosclerosis & Ear Tumors

## Case 1: Otosclerosis
- 28-year-old woman with progressive bilateral hearing loss during pregnancy
- Paracusis of Willis present, Schwartze sign on otoscopy
- PTA: Bilateral CHL, Carhart notch at 2 kHz, Type As tympanometry

### Management
| Treatment | Indication |
|-----------|-----------|
| **Hearing aid** | Refuses surgery, mild loss |
| **Sodium fluoride** | Active otospongiosis, cochlear otosclerosis |
| **Stapedotomy** | Fenestral otosclerosis with cochlear reserve |

### Stapedotomy/Stapedectomy
- Stapes removed, prosthesis (Teflon piston) placed between incus and oval window
- **Success rate**: >90% air-bone gap closure
- **Risks**: SNHL (<1%), vertigo, perilymph fistula, facial nerve injury

## Case 2: Acoustic Neuroma
- 45-year-old with progressive unilateral SNHL, poor speech discrimination
- BERA: Prolonged I-V interpeak latency
- **MRI with gadolinium**: Enhancing CPA mass (gold standard)

### Management
| Approach | Indication |
|----------|-----------|
| Observation + serial MRI | Small (<1 cm), elderly |
| Microsurgical excision | Growing, symptomatic |
| Gamma Knife radiosurgery | <3 cm, elderly, residual |

### Surgical Approaches
- **Translabyrinthine**: Sacrifices hearing, best facial nerve exposure
- **Retrosigmoid**: Hearing preservation possible
- **Middle fossa**: Small intracanalicular, hearing preservation

## Case 3: Glomus Tympanicum
- 50-year-old with pulsatile tinnitus, mild CHL
- Rising sun sign, Brown sign positive
- **Management**: Surgical excision; angiography + embolization for large tumors

> **Clinical Pearl**: Stapedectomy in India is commonly performed as a day-care procedure under local anesthesia. It is highly cost-effective with excellent outcomes.`,
        mnemonics: [
          { text: "Stapedotomy preferred over Stapedectomy", explanation: "Small fenestra technique (stapedotomy) carries less risk of perilymph leak and SNHL." },
          { text: "MRI-GAD for acoustic neuroma", explanation: "MRI with Gadolinium is the gold standard for acoustic neuroma diagnosis." },
        ],
        keyPoints: [
          "Otosclerosis: stapedotomy with >90% success for air-bone gap closure",
          "Sodium fluoride for active otospongiosis and cochlear otosclerosis",
          "Acoustic neuroma: MRI with gadolinium (gold standard); BERA for screening",
          "Small acoustic neuroma: observe; Growing: surgery; Elderly: Gamma Knife",
          "Glomus tympanicum: surgical excision; embolization for large tumors",
          "Stapedectomy dead ear risk <1% but must be disclosed",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 12: Surgery for Otosclerosis", edition: "7th" },
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapter 14: Ear Tumor Management", edition: "7th" },
        ],
      },
      {
        layer: 4,
        slug: "otosclerosis-ear-tumors-layer-4-exam",
        title: "Otosclerosis & Ear Tumors - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts on otosclerosis, acoustic neuroma, and glomus tumors for NEXT and NEET PG.",
        contentMd: `# Exam Preparation - Otosclerosis & Ear Tumors

## One-Liners
- MC cause of CHL in young adults: **Otosclerosis**
- Otosclerosis inheritance: **Autosomal dominant, incomplete penetrance**
- Carhart notch: **2 kHz** (artifact, disappears post-stapedectomy)
- Tympanometry in otosclerosis: **Type As**
- Schwartze sign: **Pink promontory** (active otospongiosis)
- Paracusis of Willis: **Hears better in noise**
- MC CPA tumor: **Acoustic neuroma**
- Bilateral acoustic neuroma = **NF2 (chromosome 22)**
- Gold standard for acoustic neuroma: **MRI with gadolinium**
- MC feature of acoustic neuroma: **Unilateral progressive SNHL**
- BERA in acoustic neuroma: **Prolonged I-V interpeak latency**
- Hitselberger sign: **Loss of concha sensation** (CPA tumors)
- Rising sun sign: **Glomus tympanicum**
- Brown sign: **Glomus blanching on pneumatic otoscopy**

## Comparison: Otosclerosis vs CSOM
| Feature | Otosclerosis | CSOM |
|---------|-------------|------|
| TM | Normal (intact) | Perforated |
| Discharge | None | Present |
| Tympanometry | Type As | Type B |
| Age | 20-40 years | Any age |
| Surgery | Stapedectomy | Tympanoplasty |

## Comparison: CPA Tumors
| Feature | Acoustic Neuroma | Meningioma | Epidermoid |
|---------|-----------------|-----------|-----------|
| Origin | CN VIII Schwann cells | Arachnoid | Epithelial rest |
| Frequency | 80-90% | 5-10% | 5% |
| IAC widening | Yes | No | No |
| MRI | Intense enhancement | Dural tail | No enhancement |

## Pattern Recognition
- Young woman + CHL + normal TM + pregnancy -> **Otosclerosis**
- Unilateral SNHL + poor SDS + prolonged BERA I-V -> **Acoustic neuroma**
- Pulsatile tinnitus + red mass behind TM -> **Glomus tympanicum**
- Bilateral CPA masses -> **NF2**`,
        mnemonics: [
          { text: "NF1=17, NF2=22", explanation: "NF1 on chromosome 17 (neurofibromas), NF2 on chromosome 22 (bilateral acoustic neuromas)." },
          { text: "As = stiff = otosclerosis", explanation: "Type As tympanogram = reduced compliance = stiff = stapes fixation." },
        ],
        keyPoints: [
          "Otosclerosis: MC CHL in young adults, Type As, Carhart notch, stapedectomy",
          "Acoustic neuroma: MC CPA tumor, MRI-Gad, prolonged BERA I-V",
          "NF2: bilateral acoustic neuromas, chromosome 22",
          "Glomus tumors: paragangliomas, rising sun sign, Brown sign",
          "Carhart notch at 2 kHz is artifact; disappears post-stapedectomy",
          "Schwartze sign: active otospongiosis with increased vascularity",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapters 12, 14", edition: "7th" },
          { book: "PL Dhingra", chapter: "Otosclerosis and Ear Tumors", edition: "7th" },
        ],
      },
      {
        layer: 5,
        slug: "otosclerosis-ear-tumors-layer-5-active-recall",
        title: "Otosclerosis & Ear Tumors - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for rapid revision of otosclerosis and ear tumors.",
        contentMd: `# Active Recall - Otosclerosis & Ear Tumors

## Flashcard Q&A

**Q1**: What is otosclerosis?
**A1**: Primary disease of otic capsule where enchondral bone is replaced by spongy then sclerotic bone, causing stapes fixation and CHL.

**Q2**: What is the Carhart notch?
**A2**: Dip at 2 kHz on BC audiogram in otosclerosis. Artifact of lost ossicular resonance, not true SNHL. Disappears after stapedectomy.

**Q3**: What is paracusis of Willis?
**A3**: Patient hears better in noisy environments because others raise their voices above the conductive loss threshold.

**Q4**: What is the Schwartze sign?
**A4**: Flamingo-pink promontory seen through intact TM, indicating active otospongiosis.

**Q5**: What surgery treats fenestral otosclerosis?
**A5**: Stapedotomy (preferred) or stapedectomy. Prosthesis placed between incus and oval window. >90% success.

**Q6**: What is the most common CPA tumor?
**A6**: Acoustic neuroma (vestibular schwannoma), 80-90% of CPA tumors.

**Q7**: When are bilateral acoustic neuromas seen?
**A7**: NF2 (chromosome 22, merlin protein). Autosomal dominant.

**Q8**: Gold standard investigation for acoustic neuroma?
**A8**: MRI with gadolinium enhancement.

**Q9**: What is the rising sun sign?
**A9**: Red vascular mass behind inferior part of intact TM - glomus tympanicum.

**Q10**: What is Brown sign?
**A10**: Blanching of glomus tumor on pneumatic otoscopy.

**Q11**: What tympanometry is seen in otosclerosis?
**A11**: Type As (reduced compliance from stapes fixation).

**Q12**: Name surgical approaches for acoustic neuroma.
**A12**: Translabyrinthine (sacrifices hearing), Retrosigmoid (hearing preservation), Middle fossa (small intracanalicular).

## Quick Revision Bullets
- Otosclerosis: AD, young female, CHL, normal TM, Carhart 2 kHz, Type As
- Schwartze sign: pink promontory = active otospongiosis
- Stapedotomy: >90% success, <1% dead ear risk
- Acoustic neuroma: MC CPA tumor, MRI-Gad, BERA I-V prolonged
- NF2: bilateral, chromosome 22; NF1: chromosome 17
- Glomus: pulsatile tinnitus, rising sun, Brown sign`,
        mnemonics: [
          { text: "Young Female + Normal TM + CHL = Otosclerosis", explanation: "Classic clinical identification triad." },
          { text: "MIS: Most common Is Schwannoma (CPA)", explanation: "Acoustic neuroma is MC CPA tumor (80-90%)." },
        ],
        keyPoints: [
          "Otosclerosis: stapes fixation, Carhart notch artifact, Type As, stapedotomy",
          "Acoustic neuroma: MC CPA tumor, MRI gold standard, bilateral = NF2",
          "Glomus tumors: paragangliomas, pulsatile tinnitus, rising sun + Brown signs",
          "Stapedectomy: >90% success, <1% dead ear risk",
          "NF2: chromosome 22; NF1: chromosome 17",
        ],
        textbookRefs: [
          { book: "Dhingra Diseases of Ear, Nose and Throat", chapter: "Chapters 12, 14", edition: "7th" },
          { book: "PL Dhingra", chapter: "Otosclerosis and Ear Tumors", edition: "7th" },
        ],
      },
    ],
  },
];
