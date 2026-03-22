// 5-layer lessons for all Head & Neck topics (AN-MOD-06)
import type { TopicLessons } from "./content-loader";

export const headNeckLessons: TopicLessons[] = [
  // ─── Topic 1: Scalp, Temple & Face ─────────────────────────
  {
    topicCode: "AN-MOD-06-TOP-01",
    layers: [
      { layer: 1, slug: "scalp-temple-face-foundation", title: "Scalp, Temple & Face - Foundation", estimatedMinutes: 20,
        summary: "The scalp has 5 layers, the temple houses the temporalis muscle, and the face is supplied by muscles of facial expression innervated by the facial nerve (CN VII).",
        contentMd: `# Scalp, Temple & Face

## Layers of the Scalp (SCALP mnemonic)
The scalp extends from the supraorbital margin anteriorly to the superior nuchal line posteriorly, and to the zygomatic arch laterally.

| Layer | Structure | Key Features |
|-------|-----------|--------------|
| S | Skin | Thick, hair-bearing, rich in sebaceous glands |
| C | Connective tissue (superficial fascia) | Dense, fibrous, contains vessels & nerves; bleeds profusely when cut |
| A | Aponeurosis (epicranial/galea aponeurotica) | Connects frontalis (anterior) to occipitalis (posterior) |
| L | Loose areolar tissue | **Dangerous layer** - allows spread of infection; emissary veins pass through |
| P | Pericranium (periosteum) | Firmly attached to bone at suture lines |

## Key Points about Scalp Layers
- First 3 layers (S, C, A) move together as a single unit
- Vessels and nerves run in the **connective tissue layer (C)**
- The loose areolar layer is called the **dangerous layer of the scalp** because:
  - Pus/blood can spread easily in this plane
  - Emissary veins connect scalp veins to intracranial dural venous sinuses
  - Infection can spread intracranially

## Muscles of Facial Expression
All muscles of facial expression are derived from the **2nd pharyngeal arch** and supplied by the **facial nerve (CN VII)**.

### Around the Eye (Orbicularis Oculi)
- **Orbital part**: Forceful closure (squinting)
- **Palpebral part**: Gentle closure (blinking)
- **Lacrimal part (Horner's muscle)**: Aids lacrimal drainage

### Around the Mouth
| Muscle | Action |
|--------|--------|
| Orbicularis oris | Closes lips, purses lips |
| Buccinator | Compresses cheek against teeth (trumpet player muscle) |
| Levator labii superioris | Elevates upper lip |
| Zygomaticus major | Draws angle of mouth upward and laterally (smiling) |
| Depressor anguli oris | Draws angle of mouth downward (frowning) |
| Mentalis | Protrudes lower lip, wrinkles chin |
| Platysma | Depresses mandible, tenses neck skin |

### Around the Nose
- **Nasalis**: Compressor naris + dilator naris
- **Procerus**: Wrinkles nose bridge

## Blood Supply of the Face
- **Facial artery** (chief artery of face): Branch of external carotid; enters face by crossing the mandible at the anterior border of masseter
- Course: Inferior labial → superior labial → lateral nasal → angular artery (terminal branch, anastomoses with ophthalmic artery)
- **Superficial temporal artery**: Supplies temple and scalp
- **Transverse facial artery**: From superficial temporal, supplies parotid region

## Sensory Supply of Face (Trigeminal Nerve - CN V)
| Division | Area | Key Nerve |
|----------|------|-----------|
| V1 (Ophthalmic) | Forehead, upper eyelid, nose bridge | Supraorbital, supratrochlear |
| V2 (Maxillary) | Cheek, upper lip, lower eyelid | Infraorbital |
| V3 (Mandibular) | Lower face, chin, temple | Mental, auriculotemporal |`,
        mnemonics: [
          { text: "SCALP for layers of scalp", explanation: "S-Skin, C-Connective tissue (dense), A-Aponeurosis (galea aponeurotica), L-Loose areolar tissue (dangerous layer), P-Pericranium (periosteum)" },
          { text: "Buccinator is the BUCCal trumpet muscle", explanation: "Buccinator keeps food between the teeth during chewing and is used in blowing (trumpet player muscle). Pierced by parotid duct. Supplied by buccal branch of facial nerve (CN VII)" }
        ],
        keyPoints: [
          "Scalp has 5 layers: SCALP (Skin, Connective tissue, Aponeurosis, Loose areolar, Pericranium)",
          "Loose areolar tissue is the dangerous layer - allows spread of infection intracranially via emissary veins",
          "All muscles of facial expression are supplied by facial nerve (CN VII) and derived from 2nd pharyngeal arch",
          "Facial artery is the chief artery of the face - crosses mandible at anterior border of masseter",
          "Sensory supply of face is by trigeminal nerve (CN V): V1-forehead, V2-cheek, V3-lower face",
          "Buccinator is pierced by the parotid duct"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 1-2", edition: "8th" }] },

      { layer: 2, slug: "scalp-temple-face-mechanism", title: "Scalp, Temple & Face - Mechanism", estimatedMinutes: 30,
        summary: "Detailed blood supply, venous drainage, and nerve pathways of the scalp and face with dangerous connections to intracranial structures.",
        contentMd: `# Detailed Anatomy of Scalp, Temple & Face

## Arterial Supply of the Scalp
The scalp receives blood from 5 arteries on each side (3 from external carotid, 2 from internal carotid):

| Artery | Source | Area Supplied |
|--------|--------|---------------|
| Supratrochlear | Ophthalmic (ICA) | Medial forehead |
| Supraorbital | Ophthalmic (ICA) | Lateral forehead |
| Superficial temporal | ECA (terminal branch) | Temple, lateral scalp |
| Posterior auricular | ECA | Behind ear |
| Occipital | ECA | Posterior scalp |

> **Clinical Pearl**: Rich anastomosis between ICA and ECA branches explains profuse scalp bleeding even from small cuts

## Venous Drainage and Dangerous Connections
Scalp veins connect superficial veins to intracranial dural venous sinuses via **emissary veins** passing through the loose areolar layer:

- **Supratrochlear/Supraorbital veins** → ophthalmic veins → cavernous sinus
- **Superficial temporal vein** → retromandibular vein → IJV
- **Posterior auricular vein** → EJV
- **Emissary veins** (valveless) → dural venous sinuses

> **Danger**: These connections are valveless, allowing bidirectional flow - scalp infections can spread to intracranial sinuses causing **cavernous sinus thrombosis**

## Deep Facial Vein - The Dangerous Connection
The facial vein connects to the pterygoid venous plexus via the **deep facial vein**. This provides a valveless pathway:
- Facial vein → deep facial vein → pterygoid venous plexus → cavernous sinus
- This is why the area between the nose and upper lip is called the **"dangerous triangle of the face"**

## Temple (Temporal Region)
- **Temporal fossa** bounded by superior temporal line above and zygomatic arch below
- Contains **temporalis muscle**:
  - Origin: Floor of temporal fossa and temporal fascia
  - Insertion: Coronoid process and anterior border of ramus of mandible
  - Action: Elevates mandible (closing jaw), posterior fibers retract mandible
  - Nerve: Deep temporal nerves (branches of mandibular nerve V3)
- **Temporal fascia**: Strong fascia splitting into 2 layers near zygomatic arch, enclosing superficial temporal fat pad

## Retromandibular Vein
Formed by union of superficial temporal and maxillary veins within the parotid gland:
- Anterior division + facial vein → common facial vein → IJV
- Posterior division + posterior auricular vein → EJV`,
        mnemonics: [
          { text: "SOS-PO for scalp arteries", explanation: "From anterior to posterior: Supratrochlear, Supraorbital (from ICA), Superficial temporal, Posterior auricular, Occipital (from ECA)" },
          { text: "Dangerous Triangle NOSE to LIP", explanation: "The dangerous triangle of the face extends from the root of the nose to the corners of the mouth - infection here can spread to cavernous sinus via valveless veins" }
        ],
        keyPoints: [
          "5 arteries supply each side of the scalp: 2 from ICA (supratrochlear, supraorbital), 3 from ECA (superficial temporal, posterior auricular, occipital)",
          "Emissary veins are valveless - allow bidirectional flow between scalp and intracranial sinuses",
          "Dangerous triangle of face: infections near nose/upper lip can spread to cavernous sinus",
          "Deep facial vein connects facial vein to pterygoid venous plexus",
          "Temporalis muscle elevates and retracts mandible, supplied by deep temporal nerves (V3)",
          "Retromandibular vein is formed within the parotid gland"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 1-2", edition: "8th" }] },

      { layer: 3, slug: "scalp-temple-face-clinical", title: "Scalp, Temple & Face - Clinical", estimatedMinutes: 20,
        summary: "Clinical conditions of the scalp and face including scalp lacerations, infections, Bell's palsy, cavernous sinus thrombosis, and facial nerve injuries.",
        contentMd: `# Clinical Correlations

## Scalp Lacerations
- **Profuse bleeding** because arteries are held open by dense connective tissue layer (cannot retract and constrict)
- Best controlled by **applying pressure to the wound edges** or suturing all layers together
- Black eye (subgaleal hemorrhage) can track into the eyelid through the loose areolar layer

## Scalp Infections
- Superficial infections (in connective tissue layer): **Localized**, as dense septa limit spread
- Deep infections (in loose areolar tissue): **Spread widely** - called dangerous layer
- Can track to eyelids (causing swelling) and intracranially via emissary veins

## Cavernous Sinus Thrombosis
- **Life-threatening condition** from facial infections spreading via valveless veins
- Commonly from infections of the dangerous triangle of face (nose, upper lip)
- Route: Facial vein → deep facial vein → pterygoid plexus → cavernous sinus
- Features: Proptosis, ophthalmoplegia, visual loss, headache, high fever

## Bell's Palsy (Lower Motor Neuron Facial Palsy)
- Idiopathic inflammation of facial nerve in the facial canal
- **Entire half of face affected** (both upper and lower)
- Cannot close eye, cannot wrinkle forehead on affected side
- Loss of taste on anterior 2/3 of tongue on affected side
- Treatment: Corticosteroids within 72 hours; eye care to prevent corneal damage

## UMN vs LMN Facial Nerve Lesion
| Feature | UMN Lesion | LMN Lesion (Bell's) |
|---------|------------|---------------------|
| Forehead | Spared (bilateral cortical supply) | Involved (cannot wrinkle) |
| Eye closure | Normal | Impaired |
| Lower face | Contralateral weakness | Ipsilateral complete paralysis |
| Cause | Stroke, tumor | Bell's palsy, parotid surgery |

## Dangerous Triangle of Face
- Bounded by root of nose and two corners of mouth
- Squeezing a pimple here can push infection intracranially
- In India, common cause: Infected nasal boil (furunculosis) spreading to cavernous sinus`,
        mnemonics: [
          { text: "Bell's palsy: Bell rings on the WHOLE side", explanation: "LMN facial palsy affects the entire ipsilateral face (forehead + lower face), unlike UMN where forehead is spared due to bilateral cortical supply" },
          { text: "SCALP bleeds from C layer vessels being held open", explanation: "Dense Connective tissue holds arteries open preventing retraction - hence profuse bleeding in scalp lacerations" }
        ],
        keyPoints: [
          "Scalp bleeds profusely because arteries are held open by dense connective tissue",
          "Loose areolar tissue (L layer) is the dangerous layer - infections spread widely",
          "Cavernous sinus thrombosis can result from facial infections via valveless veins",
          "Bell's palsy: LMN lesion affects entire ipsilateral face including forehead",
          "UMN facial palsy spares the forehead (bilateral cortical supply to upper face)"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Clinical Anatomy", edition: "8th" }] },

      { layer: 4, slug: "scalp-temple-face-exam", title: "Scalp, Temple & Face - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG points on scalp layers, facial blood supply, dangerous triangle, and facial nerve lesions.",
        contentMd: `# Exam High Yield

## One-Liners
- Dangerous layer of scalp: **Loose areolar tissue**
- Scalp arteries lie in: **Connective tissue (2nd layer)**
- Nerve supply of muscles of facial expression: **Facial nerve (CN VII)**
- Chief artery of face: **Facial artery**
- Terminal branch of facial artery: **Angular artery**
- Dangerous triangle of face: Between **nose and corners of mouth**
- Cavernous sinus thrombosis route: **Facial vein → deep facial vein → pterygoid plexus → cavernous sinus**
- Muscle pierced by parotid duct: **Buccinator**
- Sensory nerve of face: **Trigeminal nerve (CN V)**
- Motor nerve of face: **Facial nerve (CN VII)**
- Forehead spared in: **UMN facial nerve lesion**
- Forehead involved in: **LMN facial nerve lesion (Bell's palsy)**
- Bell's palsy treatment: **Corticosteroids within 72 hours**
- Emissary veins are: **Valveless**
- Scalp layers that move together: **Skin, Connective tissue, Aponeurosis (first 3)**
- Blood supply of scalp from ICA: **Supratrochlear + supraorbital arteries**

## Comparison Table: UMN vs LMN Facial Palsy
| Feature | UMN | LMN |
|---------|-----|-----|
| Forehead | Spared | Involved |
| Side | Contralateral lower face | Ipsilateral whole face |
| Common cause | Stroke | Bell's palsy |
| Taste | Normal | Lost (ant 2/3) |`,
        mnemonics: [
          { text: "Face Motor = VII, Face Sensory = V", explanation: "Facial nerve (CN VII) is motor to facial expression muscles; Trigeminal nerve (CN V) is sensory to the face. Easy to confuse in MCQs." },
          { text: "UMN spares Upper face", explanation: "In UMN lesion, upper face (forehead) is spared because it receives bilateral cortical supply; in LMN, entire half is affected" }
        ],
        keyPoints: [
          "Dangerous layer = loose areolar tissue (4th layer of scalp)",
          "Dangerous triangle of face: nose to mouth corners - infections reach cavernous sinus",
          "Emissary veins are valveless - bidirectional flow",
          "Facial nerve = motor to face; Trigeminal = sensory to face",
          "UMN facial palsy spares forehead; LMN affects entire half"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 1-2", edition: "8th" }] },

      { layer: 5, slug: "scalp-temple-face-recall", title: "Scalp, Temple & Face - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style self-test questions covering scalp layers, facial blood supply, and facial nerve lesions.",
        contentMd: `# Active Recall

**Q1:** Name the 5 layers of the scalp.
> Skin, Connective tissue (dense), Aponeurosis (galea aponeurotica), Loose areolar tissue, Pericranium (periosteum) - SCALP

**Q2:** Why is the loose areolar tissue called the dangerous layer?
> It allows wide spread of infection and connects to intracranial venous sinuses via valveless emissary veins

**Q3:** Why does the scalp bleed profusely?
> Arteries in the dense connective tissue layer are held open by fibrous septa and cannot retract

**Q4:** What is the dangerous triangle of the face?
> Area between the root of the nose and corners of the mouth - infections here can spread to the cavernous sinus via valveless veins

**Q5:** How do you differentiate UMN from LMN facial nerve palsy?
> UMN: forehead spared (bilateral cortical supply), contralateral lower face weakness. LMN: entire ipsilateral face affected including forehead

**Q6:** Name the 5 arteries supplying each side of the scalp.
> Supratrochlear, Supraorbital (from ICA), Superficial temporal, Posterior auricular, Occipital (from ECA)

**Q7:** Which muscle is pierced by the parotid duct?
> Buccinator

**Q8:** What nerve provides motor supply to all muscles of facial expression?
> Facial nerve (CN VII)`,
        mnemonics: [],
        keyPoints: ["8 recall questions covering scalp layers, blood supply, dangerous triangle, and facial nerve lesions"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 1-2", edition: "8th" }] },
    ],
  },

  // ─── Topic 2: Parotid Region & Facial Nerve ────────────────
  {
    topicCode: "AN-MOD-06-TOP-02",
    layers: [
      { layer: 1, slug: "parotid-facial-nerve-foundation", title: "Parotid Region & Facial Nerve - Foundation", estimatedMinutes: 20,
        summary: "The parotid gland is the largest salivary gland, and the facial nerve (CN VII) passes through it dividing into 5 terminal branches.",
        contentMd: `# Parotid Region & Facial Nerve

## Parotid Gland
- **Largest salivary gland** (serous secretion only)
- Located in the **retromandibular fossa** (behind ramus of mandible)
- Weighs approximately 25g
- Enclosed in a capsule derived from investing layer of deep cervical fascia

## External Features
- Wedge-shaped with 3 surfaces:
  - **Superficial (lateral)**: Overlies masseter and ramus of mandible
  - **Anteromedial**: Grooves posterior border of ramus of mandible
  - **Posteromedial**: Related to mastoid process and sternocleidomastoid

## Structures Passing Through the Parotid Gland
From superficial to deep:
1. **Facial nerve (CN VII)** - most superficial
2. **Retromandibular vein** - middle
3. **External carotid artery** - deepest

> **Important**: The facial nerve divides the gland into superficial and deep lobes

## Parotid (Stensen's) Duct
- Emerges from anterior border of gland
- Crosses masseter, turns medially at anterior border of masseter
- Pierces **buccinator** and buccal mucosa
- Opens opposite the **upper 2nd molar tooth**
- Length: ~5 cm, Diameter: ~3 mm

## Facial Nerve (CN VII) - Overview
- Emerges from the **stylomastoid foramen**
- Enters parotid gland and divides into **5 terminal branches**

## Five Terminal Branches (in order, superior to inferior)
| Branch | Muscles Supplied |
|--------|-----------------|
| **T**emporal | Frontalis, orbicularis oculi (upper), corrugator supercilii |
| **Z**ygomatic | Orbicularis oculi (lower part) |
| **B**uccal | Buccinator, orbicularis oris (upper) |
| **M**arginal mandibular | Muscles of lower lip, mentalis |
| **C**ervical | Platysma |`,
        mnemonics: [
          { text: "To Zanzibar By Motor Car", explanation: "5 branches of facial nerve in order: Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical" },
          { text: "Facial nerve is the most SUPERFICIAL structure in the parotid", explanation: "From superficial to deep in parotid: Facial nerve → Retromandibular vein → External carotid artery. Remember as 'Face is superficial'" }
        ],
        keyPoints: [
          "Parotid gland is the largest salivary gland (purely serous)",
          "Structures through parotid (superficial to deep): Facial nerve, Retromandibular vein, External carotid artery",
          "Facial nerve divides parotid into superficial and deep lobes",
          "5 terminal branches of facial nerve: Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical",
          "Parotid duct opens opposite upper 2nd molar tooth",
          "Parotid duct pierces buccinator muscle"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 4", edition: "8th" }] },

      { layer: 2, slug: "parotid-facial-nerve-mechanism", title: "Parotid Region & Facial Nerve - Mechanism", estimatedMinutes: 30,
        summary: "Complete course of the facial nerve from pons to face, intrapetrous course, and detailed parotid gland relations.",
        contentMd: `# Detailed Anatomy

## Complete Course of Facial Nerve (CN VII)
The facial nerve has the most complex course of any cranial nerve:

### 1. Intracranial Course
- **Origin**: Motor nucleus in pons (motor root) + nervus intermedius (sensory + parasympathetic)
- Exits brainstem at **cerebellopontine angle**
- Enters **internal acoustic meatus** with CN VIII (vestibulocochlear)

### 2. Intrapetrous (Intratemporal) Course
Inside the facial canal in the petrous temporal bone, the nerve makes 2 bends:

| Segment | Direction | Branch Given |
|---------|-----------|-------------|
| Labyrinthine | Lateral, above cochlea | Greater petrosal nerve (at geniculate ganglion) |
| Tympanic | Posterior, on medial wall of middle ear | Nerve to stapedius |
| Mastoid | Downward | Chorda tympani (5 mm above stylomastoid foramen) |

- **Geniculate ganglion**: Located at the first bend (genu); contains cell bodies of taste fibers
- **Greater petrosal nerve**: Parasympathetic to lacrimal gland (via pterygopalatine ganglion)
- **Chorda tympani**: Taste to anterior 2/3 tongue + parasympathetic to submandibular and sublingual glands

### 3. Extracranial Course
- Exits via **stylomastoid foramen**
- Gives branches to: posterior belly of digastric, stylohyoid, posterior auricular muscles
- Enters parotid gland → 5 terminal branches

## Relations of Parotid Gland
### Structures Emerging from Borders
- **Anterior border**: Parotid duct, branches of facial nerve, transverse facial artery
- **Medial (deep) surface**: Related to carotid sheath structures (ICA, IJV, vagus nerve, and last 4 cranial nerves)

### Fascial Relations
- Parotid capsule is from investing layer of deep cervical fascia
- Capsule sends septa into the gland → parotid surgery difficult without nerve injury
- **Parotid bed**: Contains styloid process and its muscles (styloglossus, stylopharyngeus, stylohyoid)

## Nerve Supply of Parotid Gland
- **Secretomotor (parasympathetic)**: CN IX → lesser petrosal nerve → otic ganglion → auriculotemporal nerve → parotid gland
- **Sympathetic**: From superior cervical ganglion (vasomotor)
- **Sensory**: Auriculotemporal nerve (branch of V3)

> **Note**: Although the auriculotemporal nerve carries parasympathetic fibers to the parotid, these fibers originate from CN IX (NOT CN V3)`,
        mnemonics: [
          { text: "LTM for facial nerve segments in petrous bone", explanation: "Labyrinthine (Greater petrosal nerve) → Tympanic (Nerve to stapedius) → Mastoid (Chorda tympani). The segments go L-T-M like a reversed ATM" },
          { text: "CN IX supplies parotid (9th for the 9th letter P)", explanation: "Parasympathetic secretomotor supply to parotid is from CN IX (Glossopharyngeal), NOT CN VII. Route: CN IX → lesser petrosal nerve → otic ganglion → auriculotemporal nerve" }
        ],
        keyPoints: [
          "Facial nerve course: Pons → CP angle → internal acoustic meatus → facial canal (3 segments) → stylomastoid foramen → parotid",
          "Geniculate ganglion at first bend gives greater petrosal nerve (parasympathetic to lacrimal gland)",
          "Chorda tympani: taste anterior 2/3 tongue + secretomotor to submandibular and sublingual glands",
          "Secretomotor supply to parotid is from CN IX (NOT CN VII) via otic ganglion",
          "Parotid gland has septa from its capsule making surgery risky for facial nerve",
          "Auriculotemporal nerve carries post-ganglionic parasympathetic fibers to parotid (from otic ganglion)"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 4, 9", edition: "8th" }] },

      { layer: 3, slug: "parotid-facial-nerve-clinical", title: "Parotid Region & Facial Nerve - Clinical", estimatedMinutes: 20,
        summary: "Clinical conditions: parotid tumors, Frey's syndrome, facial nerve palsy types, mumps, and parotid surgery complications.",
        contentMd: `# Clinical Correlations

## Parotid Tumors
- **Pleomorphic adenoma (80%)**: Most common parotid tumor, benign, in superficial lobe
- **Warthin's tumor**: 2nd most common benign tumor; bilateral in 10%
- **Mucoepidermoid carcinoma**: Most common malignant parotid tumor
- Parotid tumors are important because of the **facial nerve** running through the gland
- Superficial parotidectomy: Removal of superficial lobe with preservation of facial nerve

## Facial Nerve Injury in Parotid Surgery
- **Most commonly injured branch**: Marginal mandibular branch (runs superficially along lower border of mandible)
- Injury causes drooping of angle of mouth on affected side
- Temporal branch injury: Cannot raise eyebrow
- Buccal branch: Least important clinically (has anastomoses with zygomatic branch)

## Frey's Syndrome (Gustatory Sweating)
- Occurs after parotid surgery
- **Mechanism**: Regenerating parasympathetic fibers (secretomotor to parotid) aberrantly innervate sweat glands in skin
- **Result**: Sweating and flushing over the parotid region while eating
- Treatment: Application of antiperspirant, botulinum toxin injection

## Mumps (Epidemic Parotitis)
- Viral infection (paramyxovirus) causing bilateral parotid swelling
- Common in Indian children; important because of complications:
  - **Orchitis** (post-pubertal males) → risk of infertility
  - Pancreatitis, meningitis, deafness (rare)
- Parotid duct opening may appear red and swollen

## Bell's Palsy (Review)
- LMN facial palsy: entire ipsilateral face affected
- Cannot wrinkle forehead, cannot close eye (lagophthalmos)
- Loss of corneal reflex on affected side
- Loss of taste on anterior 2/3 of tongue (chorda tympani involvement)

## Facial Nerve Lesion - Localization by Level
| Level | Features Lost |
|-------|--------------|
| Cerebellopontine angle | All functions + CN VIII involvement (deafness) |
| Facial canal (above chorda tympani) | Motor + taste + hyperacusis (nerve to stapedius involved) |
| At stylomastoid foramen | Motor only (taste intact) |
| Within parotid | Partial motor (some branches only) |`,
        mnemonics: [
          { text: "Marginal Mandibular Most Morbid in surgery", explanation: "The marginal mandibular branch is the most commonly injured branch during parotid surgery because it courses superficially along the lower border of the mandible" },
          { text: "Frey = French fries make you SWEAT", explanation: "Frey's syndrome: eating causes sweating over parotid region due to aberrant regeneration of parasympathetic fibers to sweat glands after parotid surgery" }
        ],
        keyPoints: [
          "Pleomorphic adenoma is the most common parotid tumor (80%, benign)",
          "Marginal mandibular branch is most commonly injured in parotid surgery",
          "Frey's syndrome: gustatory sweating due to aberrant parasympathetic regeneration after parotid surgery",
          "Mumps: bilateral parotid swelling; orchitis is a serious complication in post-pubertal males",
          "Facial nerve lesion can be localized based on which functions are lost"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 4, Clinical", edition: "8th" }] },

      { layer: 4, slug: "parotid-facial-nerve-exam", title: "Parotid Region & Facial Nerve - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG points on parotid gland and facial nerve anatomy.",
        contentMd: `# Exam High Yield

## One-Liners
- Largest salivary gland: **Parotid**
- Parotid duct opens opposite: **Upper 2nd molar**
- Parotid duct pierces: **Buccinator**
- Most superficial structure in parotid: **Facial nerve**
- Deepest structure in parotid: **External carotid artery**
- Facial nerve exits skull via: **Stylomastoid foramen**
- Facial nerve enters skull via: **Internal acoustic meatus**
- Geniculate ganglion is the ganglion of: **Facial nerve (CN VII)**
- Chorda tympani carries: **Taste (ant 2/3 tongue) + parasympathetic to submandibular/sublingual glands**
- Secretomotor supply of parotid: **CN IX via otic ganglion**
- Most common parotid tumor: **Pleomorphic adenoma (benign)**
- Most common malignant parotid tumor: **Mucoepidermoid carcinoma**
- Most commonly injured nerve branch in parotid surgery: **Marginal mandibular**
- Frey's syndrome is caused by: **Aberrant parasympathetic regeneration to sweat glands**
- Mumps complication in adult males: **Orchitis**
- Nerve to stapedius is from: **Facial nerve (tympanic segment)**
- Hyperacusis indicates lesion at: **Above nerve to stapedius (in facial canal)**
- Greater petrosal nerve synapses in: **Pterygopalatine ganglion**

## Frequently Tested Comparison
| Salivary Gland | Duct Opens | Duct Name | Secretion | Parasympathetic |
|----------------|-----------|-----------|-----------|-----------------|
| Parotid | Upper 2nd molar | Stensen's | Serous | CN IX (otic ganglion) |
| Submandibular | Sublingual papilla | Wharton's | Mixed (serous > mucous) | CN VII (submandibular ganglion) |
| Sublingual | Sublingual fold | Rivinus | Mixed (mucous > serous) | CN VII (submandibular ganglion) |`,
        mnemonics: [
          { text: "9 for Parotid, 7 for the Rest", explanation: "CN IX is secretomotor to Parotid gland; CN VII is secretomotor to Submandibular and Sublingual glands (and lacrimal gland)" },
          { text: "To Zanzibar By Motor Car", explanation: "Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical - the 5 terminal branches of facial nerve" }
        ],
        keyPoints: [
          "Parotid: purely serous, CN IX secretomotor, Stensen's duct at upper 2nd molar",
          "Facial nerve is most superficial structure in parotid",
          "Marginal mandibular branch most at risk in parotid surgery",
          "Chorda tympani = taste anterior 2/3 tongue + submandibular/sublingual parasympathetic",
          "Pleomorphic adenoma = most common parotid tumor"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 4, 9", edition: "8th" }] },

      { layer: 5, slug: "parotid-facial-nerve-recall", title: "Parotid Region & Facial Nerve - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style self-test on parotid gland and facial nerve.",
        contentMd: `# Active Recall

**Q1:** Name the 3 structures passing through the parotid gland from superficial to deep.
> Facial nerve (superficial), Retromandibular vein (middle), External carotid artery (deep)

**Q2:** Where does the parotid duct open?
> Opposite the upper 2nd molar tooth, after piercing the buccinator muscle

**Q3:** Name the 5 terminal branches of the facial nerve.
> Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical

**Q4:** What nerve provides secretomotor supply to the parotid gland?
> CN IX (Glossopharyngeal) via lesser petrosal nerve → otic ganglion → auriculotemporal nerve

**Q5:** What is Frey's syndrome?
> Gustatory sweating over parotid region after parotid surgery, due to aberrant regeneration of parasympathetic fibers to sweat glands

**Q6:** Name the 3 segments of the facial nerve in the petrous temporal bone.
> Labyrinthine, Tympanic, Mastoid

**Q7:** What does chorda tympani carry?
> Taste from anterior 2/3 of tongue + parasympathetic fibers to submandibular and sublingual glands

**Q8:** Which facial nerve branch is most commonly injured in parotid surgery?
> Marginal mandibular branch`,
        mnemonics: [],
        keyPoints: ["8 recall questions covering parotid gland anatomy, facial nerve course and branches"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 4, 9", edition: "8th" }] },
    ],
  },

  // ─── Topic 3: Oral Cavity, Tongue & Palate ─────────────────
  {
    topicCode: "AN-MOD-06-TOP-03",
    layers: [
      { layer: 1, slug: "oral-cavity-tongue-palate-foundation", title: "Oral Cavity, Tongue & Palate - Foundation", estimatedMinutes: 20,
        summary: "The oral cavity is divided into vestibule and oral cavity proper. The tongue has intrinsic and extrinsic muscles, and the palate separates the oral and nasal cavities.",
        contentMd: `# Oral Cavity, Tongue & Palate

## Divisions of Oral Cavity
1. **Vestibule**: Space between teeth/gums and lips/cheeks
2. **Oral cavity proper**: Space within the dental arches

## Tongue - Overview
The tongue is a muscular organ important for taste, speech, mastication, and swallowing.

### Parts of the Tongue
- **Anterior 2/3 (oral part)**: In oral cavity, separated from posterior 1/3 by sulcus terminalis
- **Posterior 1/3 (pharyngeal part)**: In oropharynx, has lingual tonsil
- **Sulcus terminalis**: V-shaped groove with **foramen cecum** at its apex (embryological remnant of thyroglossal duct)

### Papillae of the Tongue
| Papilla | Location | Taste Buds | Features |
|---------|----------|------------|----------|
| Circumvallate | In front of sulcus terminalis | Yes (most) | 8-12 in V-arrangement |
| Fungiform | Tip and lateral margins | Yes | Mushroom-shaped, red |
| Filiform | Dorsum (most numerous) | **No** | Conical, for friction |
| Foliate | Lateral margins (poorly developed in humans) | Yes | Leaf-like folds |

### Muscles of the Tongue
**Extrinsic muscles** (change position):
| Muscle | Action | Nerve |
|--------|--------|-------|
| Genioglossus | Protrudes tongue | Hypoglossal (CN XII) |
| Hyoglossus | Depresses tongue | Hypoglossal (CN XII) |
| Styloglossus | Retracts and elevates tongue | Hypoglossal (CN XII) |
| Palatoglossus | Elevates posterior tongue | **Vagus (CN X)** via pharyngeal plexus |

> **Key Point**: All tongue muscles are supplied by hypoglossal nerve (CN XII) EXCEPT palatoglossus (supplied by CN X)

**Intrinsic muscles** (change shape): Superior longitudinal, Inferior longitudinal, Transverse, Vertical - all by CN XII

## Nerve Supply of the Tongue
| Area | Sensation (General) | Taste (Special) | Motor |
|------|-------------------|-----------------|-------|
| Anterior 2/3 | Lingual nerve (V3) | Chorda tympani (CN VII) | CN XII (all except palatoglossus) |
| Posterior 1/3 | CN IX | CN IX | CN X (palatoglossus) |
| Epiglottic region | CN X (internal laryngeal) | CN X | |

## Palate
- **Hard palate**: Formed by maxilla (palatine process) + palatine bone (horizontal plate)
- **Soft palate**: Muscular, hangs from posterior edge of hard palate
- **Muscles of soft palate**: Tensor veli palatini, Levator veli palatini, Palatoglossus, Palatopharyngeus, Musculus uvulae`,
        mnemonics: [
          { text: "All tongue muscles by XII except PaLatoGlossus by X", explanation: "All extrinsic and intrinsic tongue muscles are supplied by hypoglossal nerve (CN XII). The ONLY exception is palatoglossus, which is supplied by CN X (vagus) via pharyngeal plexus" },
          { text: "V3 touch, VII taste for anterior 2/3; IX does both for posterior 1/3", explanation: "Anterior 2/3: lingual nerve (V3) for sensation, chorda tympani (VII) for taste. Posterior 1/3: glossopharyngeal (IX) does both sensation AND taste" }
        ],
        keyPoints: [
          "Sulcus terminalis divides tongue into anterior 2/3 (oral) and posterior 1/3 (pharyngeal)",
          "Foramen cecum at apex of sulcus terminalis marks the embryological origin of thyroid gland",
          "All tongue muscles supplied by CN XII except palatoglossus (CN X)",
          "Anterior 2/3 tongue: sensation by lingual nerve (V3), taste by chorda tympani (CN VII)",
          "Posterior 1/3 tongue: both sensation and taste by CN IX",
          "Filiform papillae are most numerous but have NO taste buds"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 5", edition: "8th" }] },

      { layer: 2, slug: "oral-cavity-tongue-palate-mechanism", title: "Oral Cavity, Tongue & Palate - Mechanism", estimatedMinutes: 30,
        summary: "Detailed blood supply, lymphatic drainage of the tongue, palatal muscles and their actions, and the mechanism of swallowing.",
        contentMd: `# Detailed Anatomy

## Blood Supply of the Tongue
- **Lingual artery** (branch of external carotid artery): chief artery of tongue
- Branches: Dorsal lingual, deep lingual (ranine artery), sublingual
- **Deep lingual (ranine) artery**: Runs along inferior surface of tongue, visible through mucosa
- Venous drainage: Lingual veins → internal jugular vein

## Lymphatic Drainage of the Tongue
This is very high-yield due to tongue carcinoma:

| Part of Tongue | Lymph Drainage |
|----------------|---------------|
| Tip | Submental nodes (bilateral) |
| Anterior 2/3 (lateral margin) | Submandibular nodes (ipsilateral) → deep cervical |
| Posterior 1/3 | Deep cervical nodes (bilateral) |

> **Clinical Pearl**: Posterior 1/3 tumors have WORST prognosis because of bilateral lymphatic drainage

## Muscles of the Soft Palate
| Muscle | Action | Nerve |
|--------|--------|-------|
| Tensor veli palatini | Tenses soft palate, opens auditory tube | Mandibular nerve (V3) |
| Levator veli palatini | Elevates soft palate (closes nasopharynx during swallowing) | CN X (pharyngeal plexus) |
| Palatoglossus | Elevates tongue, narrows oropharyngeal isthmus | CN X (pharyngeal plexus) |
| Palatopharyngeus | Depresses soft palate, narrows pharynx | CN X (pharyngeal plexus) |
| Musculus uvulae | Shortens and elevates uvula | CN X (pharyngeal plexus) |

> **Key Point**: All soft palate muscles are supplied by CN X (pharyngeal plexus) EXCEPT **tensor veli palatini** (V3 - mandibular nerve)

## Mechanism of Swallowing (Deglutition)
The soft palate plays a crucial role:
1. **Oral phase (voluntary)**: Tongue pushes bolus posteriorly against hard palate
2. **Pharyngeal phase (involuntary)**: Levator veli palatini elevates soft palate → closes nasopharyngeal isthmus (prevents nasal regurgitation)
3. **Esophageal phase**: Peristalsis carries bolus to stomach

## Hard Palate - Foramina and Nerves
| Foramen | Nerve | Area Supplied |
|---------|-------|---------------|
| Incisive foramen | Nasopalatine nerve | Anterior hard palate (premaxilla) |
| Greater palatine foramen | Greater palatine nerve (V2) | Hard palate (posterior to premaxilla) |
| Lesser palatine foramen | Lesser palatine nerve (V2) | Soft palate |

## Blood Supply of Palate
- **Greater palatine artery** (from maxillary artery): Chief artery of hard palate
- **Ascending palatine artery** (from facial artery): Supplies soft palate
- **Lesser palatine artery**: Supplies soft palate and tonsil`,
        mnemonics: [
          { text: "Tensor veli palatini: TENsor = V TEN-sor (V3)", explanation: "All soft palate muscles are supplied by vagus (CN X) via pharyngeal plexus, EXCEPT tensor veli palatini which is supplied by V3 (mandibular nerve). Think TEN-sor = V-3 (ten has 3 letters)" },
          { text: "Tip drains to subMENTAL, Think TIP of the CHIN", explanation: "Tip of tongue drains to submental lymph nodes (bilateral). Lateral margin → submandibular. Posterior 1/3 → deep cervical (bilateral, worst prognosis)" }
        ],
        keyPoints: [
          "Lingual artery (from ECA) is the chief artery of the tongue",
          "Tip of tongue drains bilaterally to submental nodes",
          "Posterior 1/3 tongue tumors have worst prognosis due to bilateral deep cervical drainage",
          "All soft palate muscles by CN X pharyngeal plexus EXCEPT tensor veli palatini (V3)",
          "Levator veli palatini closes nasopharynx during swallowing",
          "Greater palatine artery supplies the hard palate"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 5, 7", edition: "8th" }] },

      { layer: 3, slug: "oral-cavity-tongue-palate-clinical", title: "Oral Cavity, Tongue & Palate - Clinical", estimatedMinutes: 20,
        summary: "Clinical conditions: tongue carcinoma, hypoglossal nerve palsy, cleft palate, ranula, and oral submucous fibrosis.",
        contentMd: `# Clinical Correlations

## Tongue Carcinoma
- **Most common site**: Lateral margin of anterior 2/3 (area of maximum trauma from teeth)
- **Most common type**: Squamous cell carcinoma
- Risk factors in India: **Tobacco chewing (gutka, khaini, paan)**, betel nut, smoking, alcohol, poor oral hygiene
- **Metastasis**: To submandibular and deep cervical lymph nodes
- Posterior 1/3 tumors → bilateral deep cervical nodes → worse prognosis

## Hypoglossal Nerve (CN XII) Palsy
- **Unilateral lesion**: Tongue deviates to the AFFECTED side on protrusion (due to unopposed action of opposite genioglossus)
- **Signs**: Wasting and fasciculations on affected side (LMN lesion)
- Common causes in India: Posterior fossa tumors, neck surgery, carotid endarterectomy

> **Clinical Pearl**: On protrusion, tongue deviates toward the paralyzed side. Remember: "Tongue LICKS the wound" (goes to the affected side)

## Gag Reflex
- **Afferent**: CN IX (glossopharyngeal) - sensory from posterior 1/3 tongue and oropharynx
- **Efferent**: CN X (vagus) - motor to pharyngeal muscles
- Tests both CN IX and CN X integrity

## Cleft Palate
- **Failure of fusion** of palatine shelves during development (weeks 7-12)
- Associated with cleft lip (failure of fusion of maxillary and medial nasal processes)
- Causes: Genetic, teratogens (anticonvulsants, smoking in pregnancy)
- **Problems**: Feeding difficulties, nasal regurgitation, speech defects, recurrent ear infections
- Common in Indian population; requires multidisciplinary management

## Ranula
- **Mucous retention cyst** in floor of mouth from sublingual gland
- Appears as a blue, translucent swelling in floor of mouth
- Named because it looks like a frog's belly (rana = frog)

## Oral Submucous Fibrosis (OSMF)
- **Premalignant condition** common in India
- Caused by **areca nut (supari/betel nut)** chewing
- Progressive fibrosis of oral mucosa → trismus (restricted mouth opening)
- Burning sensation, blanching of oral mucosa
- Important public health issue in India`,
        mnemonics: [
          { text: "Tongue LICKS the wound", explanation: "In unilateral hypoglossal nerve palsy, the tongue deviates toward the affected (paralyzed) side on protrusion - as if licking a wound" },
          { text: "Lateral margin = most common site for tongue CA", explanation: "Lateral margin of anterior 2/3 is where the tongue contacts irregular teeth most, leading to chronic irritation. In India, gutka/paan chewing is the main risk factor" }
        ],
        keyPoints: [
          "Tongue carcinoma: most common on lateral margin of anterior 2/3, SCC type, tobacco chewing is chief risk factor in India",
          "CN XII palsy: tongue deviates to affected side on protrusion",
          "Gag reflex: afferent = CN IX, efferent = CN X",
          "Cleft palate: failure of fusion of palatine shelves (weeks 7-12)",
          "Oral submucous fibrosis: premalignant condition from areca nut/betel nut chewing, common in India"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 5, Clinical", edition: "8th" }] },

      { layer: 4, slug: "oral-cavity-tongue-palate-exam", title: "Oral Cavity, Tongue & Palate - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG points on oral cavity, tongue, and palate anatomy.",
        contentMd: `# Exam High Yield

## One-Liners
- Motor supply of tongue: **CN XII (all except palatoglossus by CN X)**
- Sensation anterior 2/3 tongue: **Lingual nerve (V3)**
- Taste anterior 2/3 tongue: **Chorda tympani (CN VII)**
- Posterior 1/3 tongue sensation AND taste: **CN IX**
- Most numerous papillae: **Filiform (no taste buds)**
- Papillae with most taste buds: **Circumvallate**
- Foramen cecum represents: **Embryological origin of thyroid (thyroglossal duct)**
- Chief artery of tongue: **Lingual artery (ECA branch)**
- Tongue deviates to affected side in: **CN XII palsy (on protrusion)**
- Most common site for tongue CA: **Lateral margin, anterior 2/3**
- Tip of tongue lymph drains to: **Submental nodes (bilateral)**
- All palate muscles by CN X except: **Tensor veli palatini (V3)**
- Gag reflex afferent: **CN IX**; efferent: **CN X**
- Closes nasopharynx during swallowing: **Levator veli palatini**
- Ranula arises from: **Sublingual gland**
- Hard palate nerve supply: **Greater palatine + nasopalatine nerves (V2)**
- OSMF caused by: **Areca nut (betel nut) chewing**
- Worst prognosis tongue CA: **Posterior 1/3 (bilateral LN drainage)**

## Key Comparison
| Feature | Anterior 2/3 Tongue | Posterior 1/3 Tongue |
|---------|---------------------|---------------------|
| Development | 1st arch (tuberculum impar + lateral lingual swellings) | 3rd and 4th arch (hypobranchial eminence) |
| General sensation | Lingual nerve (V3) | CN IX |
| Taste | Chorda tympani (CN VII) | CN IX |
| Lymph drainage | Submental (tip), Submandibular (margin) | Deep cervical (bilateral) |`,
        mnemonics: [
          { text: "FiFo = no taste, FUngi and CircumVallate = taste", explanation: "Filiform and Foliate papillae: filiform has NO taste buds (most numerous). Fungiform (tip/margins) and Circumvallate (in front of sulcus terminalis) have taste buds" },
          { text: "XII deviates to the XII-de (side) of lesion", explanation: "Hypoglossal nerve (XII) palsy causes tongue deviation to the side of lesion on protrusion" }
        ],
        keyPoints: [
          "All tongue muscles by CN XII except palatoglossus (CN X)",
          "Ant 2/3: V3 sensation, VII taste; Post 1/3: IX for both",
          "Filiform papillae: most numerous, NO taste buds",
          "All palate muscles by CN X except tensor veli palatini (V3)",
          "Tongue CA: lateral margin, SCC, bilateral drainage from posterior 1/3"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 5", edition: "8th" }] },

      { layer: 5, slug: "oral-cavity-tongue-palate-recall", title: "Oral Cavity, Tongue & Palate - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test questions on oral cavity, tongue, and palate anatomy.",
        contentMd: `# Active Recall

**Q1:** Which papillae are most numerous but lack taste buds?
> Filiform papillae

**Q2:** What does the foramen cecum represent embryologically?
> The point of origin of the thyroglossal duct (thyroid gland origin)

**Q3:** Name the only tongue muscle NOT supplied by CN XII.
> Palatoglossus (supplied by CN X via pharyngeal plexus)

**Q4:** In CN XII palsy, which side does the tongue deviate to on protrusion?
> Toward the affected (paralyzed) side

**Q5:** What is the nerve supply of taste to the anterior 2/3 of the tongue?
> Chorda tympani (branch of CN VII), hitchhiking on the lingual nerve (V3)

**Q6:** Where do lymphatics from the tip of the tongue drain?
> Submental lymph nodes (bilateral drainage)

**Q7:** Which is the only soft palate muscle NOT supplied by CN X?
> Tensor veli palatini (supplied by mandibular nerve V3)

**Q8:** What is oral submucous fibrosis and its cause?
> Premalignant fibrosis of oral mucosa caused by areca nut (betel nut/supari) chewing, leading to trismus`,
        mnemonics: [],
        keyPoints: ["8 recall questions covering tongue muscles, nerve supply, papillae, lymph drainage, and palate"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 5", edition: "8th" }] },
    ],
  },

  // ─── Topic 4: Pharynx & Larynx ─────────────────────────────
  {
    topicCode: "AN-MOD-06-TOP-04",
    layers: [
      { layer: 1, slug: "pharynx-larynx-foundation", title: "Pharynx & Larynx - Foundation", estimatedMinutes: 20,
        summary: "The pharynx is a muscular tube common to respiratory and digestive systems. The larynx is the voice box containing vocal cords and cartilages, guarded by the recurrent laryngeal nerve.",
        contentMd: `# Pharynx & Larynx

## Pharynx - Overview
The pharynx is a musculomembranous tube extending from the base of skull to C6 (lower border of cricoid cartilage).

### Divisions of the Pharynx
| Division | Extent | Communication |
|----------|--------|---------------|
| Nasopharynx | Base of skull to soft palate | Nasal cavity (choanae), middle ear (auditory tube) |
| Oropharynx | Soft palate to upper border of epiglottis | Oral cavity (oropharyngeal isthmus) |
| Laryngopharynx | Epiglottis to lower border of cricoid (C6) | Larynx (laryngeal inlet), esophagus |

### Pharyngeal Muscles
**Circular muscles (Constrictors):** Arranged like 3 overlapping cups

| Constrictor | Origin | Nerve |
|-------------|--------|-------|
| Superior | Pterygomandibular raphe, medial pterygoid plate | CN X (pharyngeal plexus) |
| Middle | Hyoid bone (greater + lesser horns) | CN X (pharyngeal plexus) |
| Inferior | Thyroid + cricoid cartilage | CN X (pharyngeal plexus) + recurrent laryngeal nerve |

**Longitudinal muscles (Elevators):**
| Muscle | Action | Nerve |
|--------|--------|-------|
| Stylopharyngeus | Elevates pharynx | **CN IX** (only muscle supplied by CN IX) |
| Salpingopharyngeus | Elevates pharynx, opens auditory tube | CN X |
| Palatopharyngeus | Elevates pharynx, depresses palate | CN X |

## Larynx - Overview
The larynx (voice box) extends from C3-C6, connects pharynx to trachea.

### Cartilages of the Larynx
**Unpaired:**
- **Thyroid** (largest): Shield-shaped, forms Adam's apple
- **Cricoid** (only complete ring): Signet ring-shaped
- **Epiglottis**: Leaf-shaped, elastic cartilage, guards laryngeal inlet

**Paired:**
- **Arytenoid**: Sit on cricoid; have vocal process + muscular process
- **Corniculate**: On apex of arytenoid
- **Cuneiform**: In aryepiglottic fold

### Vocal Cords
| Feature | True Vocal Cords | False Vocal Cords (Vestibular Folds) |
|---------|-----------------|--------------------------------------|
| Composition | Vocal ligament + vocalis muscle | Vestibular ligament |
| Color | Pearly white (avascular) | Pink (vascular) |
| Function | Phonation | Protection |
| Space between | Rima glottidis (narrowest part) | Rima vestibuli |`,
        mnemonics: [
          { text: "StylophaRYNGeus = only muscle of CN IX (GlossophaRYNGeal)", explanation: "Stylopharyngeus is the ONLY muscle supplied by the glossopharyngeal nerve (CN IX). Both have 'pharyngeus' in common with CN IX" },
          { text: "Cricoid = only COMPLETE RING", explanation: "Cricoid cartilage is the only complete cartilaginous ring in the airway. Shaped like a signet ring - narrow anteriorly, broad lamina posteriorly" }
        ],
        keyPoints: [
          "Pharynx has 3 parts: Nasopharynx, Oropharynx, Laryngopharynx",
          "All pharyngeal muscles supplied by CN X (pharyngeal plexus) except stylopharyngeus (CN IX)",
          "Stylopharyngeus is the only muscle supplied by CN IX",
          "Cricoid is the only complete cartilaginous ring in the airway",
          "True vocal cords are pearly white (avascular), used for phonation",
          "Rima glottidis (between true cords) is the narrowest part of the larynx in adults"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 6-7", edition: "8th" }] },

      { layer: 2, slug: "pharynx-larynx-mechanism", title: "Pharynx & Larynx - Mechanism", estimatedMinutes: 30,
        summary: "Detailed anatomy of laryngeal muscles, recurrent laryngeal nerve course, Killian's dehiscence, and mechanism of phonation.",
        contentMd: `# Detailed Anatomy

## Intrinsic Muscles of the Larynx
| Muscle | Action on Vocal Cords | Nerve |
|--------|----------------------|-------|
| Posterior cricoarytenoid | **Abducts** (opens) | Recurrent laryngeal nerve |
| Lateral cricoarytenoid | Adducts (closes) | Recurrent laryngeal nerve |
| Transverse arytenoid | Adducts (closes) | Recurrent laryngeal nerve |
| Oblique arytenoid | Adducts, closes inlet | Recurrent laryngeal nerve |
| Thyroarytenoid (vocalis) | Relaxes vocal cords | Recurrent laryngeal nerve |
| Cricothyroid | **Tenses** vocal cords (increases pitch) | **External laryngeal nerve (SLN)** |

> **Key Point**: ALL intrinsic laryngeal muscles are supplied by the **recurrent laryngeal nerve** EXCEPT **cricothyroid** (by external branch of superior laryngeal nerve)

> **Key Point**: **Posterior cricoarytenoid** is the ONLY abductor of the vocal cords (the "safety muscle" of the larynx)

## Recurrent Laryngeal Nerve (RLN)
### Course
- **Right RLN**: Hooks around right subclavian artery, ascends in tracheoesophageal groove
- **Left RLN**: Hooks around arch of aorta (ligamentum arteriosum), ascends in tracheoesophageal groove
- Left RLN is longer → more vulnerable to injury

### Relations Important in Thyroid Surgery
- RLN ascends in the tracheoesophageal groove
- Closely related to the **inferior thyroid artery** at the lower pole of thyroid
- The nerve may pass anterior to, posterior to, or between the branches of the inferior thyroid artery
- Enters the larynx by passing deep to the inferior constrictor at the cricothyroid joint

## Superior Laryngeal Nerve (SLN)
- **External branch (motor)**: Supplies cricothyroid muscle (tensor of vocal cord)
- **Internal branch (sensory)**: Pierces thyrohyoid membrane, sensory to larynx above vocal cords

## Killian's Dehiscence
- A weak area in the posterior pharyngeal wall between:
  - **Thyropharyngeus** (oblique fibers of inferior constrictor) above
  - **Cricopharyngeus** (horizontal fibers of inferior constrictor) below
- Site of formation of **pharyngeal (Zenker's) diverticulum**

## Piriform Fossa
- Recess on either side of the laryngeal inlet in the laryngopharynx
- Bounded by: Thyroid cartilage laterally, aryepiglottic fold medially
- Foreign bodies (fish bones) commonly lodge here
- **Internal laryngeal nerve** runs beneath its mucosa → can be blocked here for laryngeal anesthesia

## Mechanism of Phonation
1. Vocal cords adducted (closed) by lateral cricoarytenoid and transverse arytenoid
2. Expired air passes between closed vocal cords → vibration
3. Pitch controlled by cricothyroid (tenses vocal cords = higher pitch)
4. Volume controlled by force of expiration`,
        mnemonics: [
          { text: "PCA = Posterior CricoArytenoid = only ABductor", explanation: "Posterior cricoarytenoid is the ONLY muscle that OPENS the vocal cords (abduction). All other muscles are adductors or tensors. Called the 'safety muscle' - bilateral PCA paralysis = airway emergency" },
          { text: "CricoThyroid = external SLN = Tenses = high piTCH", explanation: "Cricothyroid is the only intrinsic laryngeal muscle supplied by the external branch of SLN (not RLN). It TENSES vocal cords to increase pitch" }
        ],
        keyPoints: [
          "All intrinsic laryngeal muscles by RLN except cricothyroid (external branch of SLN)",
          "Posterior cricoarytenoid is the ONLY abductor of vocal cords (safety muscle)",
          "Left RLN hooks around arch of aorta; right RLN around right subclavian artery",
          "Left RLN is longer and more vulnerable to injury",
          "Killian's dehiscence: weak spot between thyropharyngeus and cricopharyngeus → Zenker's diverticulum",
          "Piriform fossa: common site for lodging of foreign bodies; internal laryngeal nerve runs beneath mucosa"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 6-7", edition: "8th" }] },

      { layer: 3, slug: "pharynx-larynx-clinical", title: "Pharynx & Larynx - Clinical", estimatedMinutes: 20,
        summary: "Clinical conditions: RLN injury, vocal cord paralysis, tracheostomy, Zenker's diverticulum, and laryngeal cancer.",
        contentMd: `# Clinical Correlations

## Recurrent Laryngeal Nerve Injury
Most common cause: **Thyroid surgery** (nerve runs close to inferior thyroid artery)

### Unilateral RLN Injury
- Affected cord lies in **cadaveric (intermediate) position**
- Hoarseness of voice (breathy voice)
- Opposite cord compensates over time → voice may improve

### Bilateral RLN Injury
- Both cords in adducted (median) position
- **Stridor and respiratory distress** (airway obstruction)
- Voice may be near normal but airway is compromised
- Requires emergency **tracheostomy**

> **Paradox**: Bilateral RLN injury → voice is better but breathing is worse (cords adducted)

### Causes of RLN Palsy
- Thyroid surgery (most common surgical cause)
- Left RLN: compressed by **carcinoma of lung (left hilum)**, aortic aneurysm, enlarged left atrium
- Right RLN: compressed by apex of right lung tumors (less common)

## External Laryngeal Nerve Injury
- Damaged during superior thyroid artery ligation in thyroidectomy
- Causes loss of cricothyroid function → cannot tense vocal cord
- **"Voice fatigue"** - cannot raise pitch (loss of high-pitched voice)
- Called the **"nerve of the opera singer"** (important for singing high notes)

## Tracheostomy
- **Emergency (cricothyrotomy)**: Through cricothyroid membrane (below thyroid, above cricoid cartilage)
- **Surgical tracheostomy**: Usually at 2nd-4th tracheal rings
- **Isthmus of thyroid** overlies 2nd-4th tracheal rings (must be retracted or divided)
- Structures at risk: Inferior thyroid veins, thyroidea ima artery (if present), brachiocephalic vein (in children)

## Zenker's Diverticulum (Pharyngeal Pouch)
- Pulsion diverticulum through **Killian's dehiscence**
- Presents in elderly with: Dysphagia, regurgitation of undigested food, halitosis, neck swelling (left side commonly)
- **Gurgling** after meals; can be emptied by pressure

## Laryngeal Cancer
- Most common site: **Glottis (true vocal cords)** → presents EARLY with hoarseness
- Supraglottic: Late presentation, worse prognosis (rich lymphatic drainage)
- Subglottic: Rarest; worst prognosis
- Risk factors: Smoking, alcohol, GERD
- Glottic cancer has BEST prognosis because vocal cords have poor lymphatic drainage → late metastasis`,
        mnemonics: [
          { text: "Bilateral RLN: Better voice, BAD breathing", explanation: "In bilateral RLN injury, cords are adducted (median position): voice may be near normal but airway is severely compromised. Unilateral injury: hoarseness but no airway compromise" },
          { text: "Nerve of the opera singer = external SLN", explanation: "External branch of superior laryngeal nerve supplies cricothyroid (tensor of vocal cords). Injury causes inability to sing high notes - hence called the nerve of the opera singer" }
        ],
        keyPoints: [
          "Unilateral RLN injury: hoarseness, cord in cadaveric position",
          "Bilateral RLN injury: stridor, respiratory distress, needs tracheostomy",
          "External laryngeal nerve = nerve of the opera singer (cricothyroid for high pitch)",
          "Left RLN commonly compressed by lung carcinoma or aortic aneurysm",
          "Glottic cancer has best prognosis (poor lymphatics → late metastasis)"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 6-7, Clinical", edition: "8th" }] },

      { layer: 4, slug: "pharynx-larynx-exam", title: "Pharynx & Larynx - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG points on pharynx and larynx anatomy.",
        contentMd: `# Exam High Yield

## One-Liners
- Only muscle supplied by CN IX: **Stylopharyngeus**
- Only complete ring in airway: **Cricoid cartilage**
- Only abductor of vocal cords: **Posterior cricoarytenoid (PCA)**
- Only intrinsic laryngeal muscle NOT by RLN: **Cricothyroid (external SLN)**
- Nerve of the opera singer: **External branch of SLN**
- Narrowest part of adult larynx: **Rima glottidis (between true vocal cords)**
- Narrowest part of infant larynx: **Subglottic region (cricoid ring)**
- Left RLN hooks around: **Arch of aorta**
- Right RLN hooks around: **Right subclavian artery**
- Killian's dehiscence is between: **Thyropharyngeus and cricopharyngeus**
- Foreign body in laryngopharynx lodges in: **Piriform fossa**
- Sensory nerve of larynx above vocal cords: **Internal laryngeal nerve**
- Sensory nerve of larynx below vocal cords: **Recurrent laryngeal nerve**
- Bilateral RLN injury: **Stridor (adducted cords), needs tracheostomy**
- Unilateral RLN injury: Cord in **cadaveric (intermediate) position**
- Most common site of laryngeal cancer: **Glottis (true vocal cords)**
- Tracheostomy site: **2nd-4th tracheal rings**
- Cricothyrotomy membrane is between: **Thyroid and cricoid cartilages**
- True vocal cords are avascular hence: **Pearly white**

## Comparison: RLN vs External SLN Injury
| Feature | RLN Injury | External SLN Injury |
|---------|-----------|---------------------|
| Muscle affected | All intrinsic except cricothyroid | Cricothyroid only |
| Voice | Hoarseness | Voice fatigue, loss of high pitch |
| Position of cord | Cadaveric (unilateral) | Normal |
| Risk during | Thyroidectomy (near ITA) | Ligation of superior thyroid artery |`,
        mnemonics: [
          { text: "Adult Rima, Infant CRicoid", explanation: "Narrowest part of larynx: in Adults = Rima glottidis (between true cords); in Infants = CRicoid (subglottic, hence use uncuffed ET tubes in children)" },
          { text: "Left RLN = Longer, Loops around Aorta", explanation: "Left RLN has a longer course, hooks around the arch of aorta. More vulnerable to pathology: lung CA, aortic aneurysm, enlarged left atrium (mitral stenosis)" }
        ],
        keyPoints: [
          "PCA = only abductor of vocal cords",
          "Cricothyroid = only muscle by external SLN (not RLN)",
          "Stylopharyngeus = only muscle by CN IX",
          "Left RLN longer, hooks around aorta",
          "Adult narrowest = rima glottidis; Infant narrowest = subglottic (cricoid)"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 6-7", edition: "8th" }] },

      { layer: 5, slug: "pharynx-larynx-recall", title: "Pharynx & Larynx - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test on pharynx and larynx anatomy.",
        contentMd: `# Active Recall

**Q1:** Name the only abductor of the vocal cords.
> Posterior cricoarytenoid (PCA) - the "safety muscle"

**Q2:** Which intrinsic laryngeal muscle is supplied by the external branch of SLN (not RLN)?
> Cricothyroid (tensor of vocal cords)

**Q3:** What is the only muscle supplied by CN IX?
> Stylopharyngeus

**Q4:** What happens in bilateral RLN injury?
> Both vocal cords adducted → stridor and respiratory distress (may need tracheostomy). Paradoxically, voice may be near normal

**Q5:** Where does the left RLN hook around?
> Arch of aorta (at ligamentum arteriosum)

**Q6:** What is Killian's dehiscence and its clinical significance?
> Weak area between thyropharyngeus and cricopharyngeus (parts of inferior constrictor) - site of Zenker's (pharyngeal) diverticulum

**Q7:** What is the narrowest part of the larynx in adults vs infants?
> Adults: Rima glottidis (between true vocal cords). Infants: Subglottic region (cricoid ring)

**Q8:** Why is the external laryngeal nerve called the nerve of the opera singer?
> It supplies cricothyroid, which tenses vocal cords for high-pitched sounds. Injury causes inability to sing high notes`,
        mnemonics: [],
        keyPoints: ["8 recall questions covering laryngeal muscles, nerve supply, RLN course, and clinical correlations"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 6-7", edition: "8th" }] },
    ],
  },

  // ─── Topic 5: Neck - Triangles & Root ──────────────────────
  {
    topicCode: "AN-MOD-06-TOP-05",
    layers: [
      { layer: 1, slug: "neck-triangles-foundation", title: "Neck: Triangles & Root - Foundation", estimatedMinutes: 20,
        summary: "The neck is divided by the sternocleidomastoid into anterior and posterior triangles, each with important subdivisions containing vital neurovascular structures.",
        contentMd: `# Neck: Triangles & Root

## Sternocleidomastoid (SCM)
The key landmark that divides the neck into 2 major triangles:
- **Origin**: Sternal head (manubrium) + Clavicular head (medial 1/3 clavicle)
- **Insertion**: Mastoid process + superior nuchal line
- **Nerve**: Spinal accessory nerve (CN XI) + C2, C3
- **Actions**: Unilateral: turns face to opposite side. Bilateral: flexes neck

## Anterior Triangle
- **Boundaries**: Midline (anterior), SCM (posterior), mandible (superior)
- **Subdivisions**:

| Triangle | Boundaries | Key Contents |
|----------|-----------|-------------|
| Submental | Anterior belly of digastric (both sides), hyoid | Submental lymph nodes |
| Digastric (Submandibular) | Anterior + posterior belly of digastric, mandible | Submandibular gland, facial artery, hypoglossal nerve |
| Carotid | Superior belly omohyoid, SCM, posterior belly digastric | Carotid bifurcation, CN X, CN XII, internal jugular vein |
| Muscular | Superior belly omohyoid, SCM, midline | Thyroid gland, infrahyoid (strap) muscles |

## Posterior Triangle
- **Boundaries**: SCM (anterior), Trapezius (posterior), Clavicle (inferior)
- **Floor**: Prevertebral muscles covered by prevertebral fascia
- **Roof**: Investing layer of deep cervical fascia

### Contents of Posterior Triangle
- **Spinal accessory nerve (CN XI)**: Crosses triangle superficially
- **Trunks of brachial plexus**: In the lower part
- **Subclavian artery (3rd part)**: In the lower part
- **External jugular vein**: Crosses superficially
- **Cervical plexus branches**: Lesser occipital, great auricular, transverse cervical, supraclavicular nerves

## Carotid Sheath
A fascial tube containing:
- **Internal carotid artery** (or common carotid below bifurcation)
- **Internal jugular vein** (lateral to artery)
- **Vagus nerve (CN X)** (between and posterior to artery and vein)
- **Deep cervical lymph nodes**

> Note: Sympathetic trunk is NOT inside the carotid sheath (it lies posterior to it, in the prevertebral fascia)`,
        mnemonics: [
          { text: "SCM divides neck into A and P triangles", explanation: "Sternocleidomastoid is the KEY landmark: Anterior triangle is in front of SCM (contains carotid system), Posterior triangle is behind SCM (contains brachial plexus, accessory nerve)" },
          { text: "Carotid sheath: I-AVN (I Have Nerves)", explanation: "Internal carotid/Common carotid Artery, internal jugular Vein, vagus Nerve (CN X). Sympathetic trunk is OUTSIDE the carotid sheath" }
        ],
        keyPoints: [
          "SCM divides neck into anterior and posterior triangles",
          "Anterior triangle subdivisions: Submental, Digastric, Carotid, Muscular",
          "Posterior triangle: CN XI crosses superficially, brachial plexus trunks in lower part",
          "Carotid sheath contains: ICA/CCA, IJV, vagus nerve (CN X), deep cervical nodes",
          "Sympathetic trunk is NOT in the carotid sheath",
          "Carotid bifurcation is at the upper border of thyroid cartilage (C3-C4 level)"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 8-9", edition: "8th" }] },

      { layer: 2, slug: "neck-triangles-mechanism", title: "Neck: Triangles & Root - Mechanism", estimatedMinutes: 30,
        summary: "Detailed anatomy of cervical fascia layers, subclavian artery branches, root of the neck structures, and scalene muscles.",
        contentMd: `# Detailed Anatomy

## Cervical Fascia
### Superficial Cervical Fascia
- Contains platysma, cutaneous nerves, superficial veins, superficial lymph nodes

### Deep Cervical Fascia (3 layers)
| Layer | Encloses | Clinical Significance |
|-------|---------|---------------------|
| Investing | SCM, Trapezius, Parotid, Submandibular glands | Forms roof of posterior triangle |
| Pretracheal | Thyroid, Trachea, Esophagus, Infrahyoid muscles | Infection can spread to superior mediastinum |
| Prevertebral | Prevertebral muscles, Vertebral column, Brachial plexus | Retropharyngeal abscess can track to posterior mediastinum |

### Carotid Sheath
- Derived from all 3 layers of deep cervical fascia

## Carotid System
- **Common carotid artery**: Bifurcates at upper border of thyroid cartilage (C3-C4)
  - **External carotid**: Has 8 branches (supplies face, scalp, neck)
  - **Internal carotid**: No branches in the neck; enters skull through carotid canal

### External Carotid Artery - 8 Branches
| Branch | Mnemonic Letter |
|--------|----------------|
| Superior thyroid | S |
| Ascending pharyngeal | A |
| Lingual | L |
| Facial | F |
| Occipital | O |
| Posterior auricular | P |
| Maxillary (terminal) | M |
| Superficial temporal (terminal) | A |

## Root of the Neck
The root of the neck is the junction between neck and thorax:

### Subclavian Artery (3 parts based on scalenus anterior)
| Part | Relation to Scalenus Anterior | Branches |
|------|------------------------------|----------|
| 1st | Medial | Vertebral artery, Internal thoracic, Thyrocervical trunk |
| 2nd | Behind | Costocervical trunk |
| 3rd | Lateral | (Usually no branch; sometimes dorsal scapular) |

### Scalene Muscles
| Muscle | Important Relations |
|--------|-------------------|
| Scalenus anterior | Phrenic nerve on its anterior surface; subclavian vein anterior, subclavian artery posterior |
| Scalenus medius | Roots of brachial plexus emerge between anterior and medius |
| Scalenus posterior | Least important clinically |

### Thoracic Duct
- Arches over left subclavian artery at root of neck
- Enters junction of left subclavian vein and left IJV
- Drains entire body EXCEPT right upper limb, right thorax, right head and neck

## Phrenic Nerve (C3, C4, C5)
- Runs on anterior surface of scalenus anterior
- Passes over 1st part of subclavian artery (between it and subclavian vein)
- Chief motor nerve to diaphragm`,
        mnemonics: [
          { text: "SALFOPMA for ECA branches", explanation: "Superior thyroid, Ascending pharyngeal, Lingual, Facial, Occipital, Posterior auricular, Maxillary, (superficial temporal). Some Anatomists Like Freaking Out Poor Medical Apprentices" },
          { text: "C3, C4, C5 keeps the diaphragm alive", explanation: "Phrenic nerve (C3, C4, C5) is the motor nerve to the diaphragm. Runs on anterior surface of scalenus anterior. Injury causes diaphragmatic paralysis" }
        ],
        keyPoints: [
          "Deep cervical fascia has 3 layers: investing, pretracheal, prevertebral",
          "ECA has 8 branches; ICA has NO branches in the neck",
          "Subclavian artery 1st part gives: vertebral, internal thoracic, thyrocervical trunk",
          "Brachial plexus roots emerge between scalenus anterior and medius",
          "Phrenic nerve (C3,4,5) runs on anterior surface of scalenus anterior",
          "Thoracic duct enters left venous angle (left subclavian vein + left IJV junction)"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 8-9", edition: "8th" }] },

      { layer: 3, slug: "neck-triangles-clinical", title: "Neck: Triangles & Root - Clinical", estimatedMinutes: 20,
        summary: "Clinical correlations: carotid artery disease, torticollis, accessory nerve injury, cervical lymphadenopathy, and thoracic outlet syndrome.",
        contentMd: `# Clinical Correlations

## Spinal Accessory Nerve (CN XI) Injury
- Most vulnerable in the **posterior triangle** where it crosses superficially
- Damaged during: Lymph node biopsy in posterior triangle, radical neck dissection
- **Result**: Trapezius paralysis → shoulder droop, inability to shrug, winging of scapula (different from serratus anterior winging)

## Torticollis (Wry Neck)
- **Congenital muscular torticollis**: Fibrosis of SCM (usually after birth trauma)
- Head tilts to affected side, face rotated to opposite side
- **Treatment**: Physiotherapy; surgical release if conservative treatment fails
- Common cause for pediatric surgery referral in India

## Carotid Body and Carotid Sinus
- **Carotid body** (at bifurcation): Chemoreceptor (detects changes in O2, CO2, pH)
- **Carotid sinus** (beginning of ICA): Baroreceptor (detects blood pressure changes)
- Both innervated by CN IX (sinus nerve of Hering)
- **Carotid sinus hypersensitivity**: Pressure on carotid sinus → bradycardia, syncope

## Cervical Lymphadenopathy
Very common clinical presentation in India:
- **Tuberculous lymphadenitis (scrofula)**: Most common cause of chronic cervical lymphadenopathy in India
- Presents as matted, painless nodes, may form cold abscess, collar-stud abscess
- **Virchow's node (left supraclavicular)**: Enlarged in gastric/abdominal malignancy (Troisier's sign)
- **Jugulo-digastric node**: Commonly enlarged in tonsillitis

## Subclavian Steal Syndrome
- Stenosis/occlusion of proximal subclavian artery (before vertebral artery origin)
- Blood flows retrograde in vertebral artery to supply the arm
- Causes vertebrobasilar insufficiency: dizziness, syncope on exercising the arm

## Internal Jugular Vein Cannulation
- Central venous access commonly performed in ICUs across India
- Landmark: Triangle between 2 heads of SCM (sternal and clavicular) at apex
- **Right IJV preferred** because it provides a straight path to the SVC`,
        mnemonics: [
          { text: "Virchow's node = Left supraclavicular = stomach cancer", explanation: "Virchow's node (signal node) is the left supraclavicular lymph node. Enlargement (Troisier's sign) suggests abdominal malignancy, especially gastric carcinoma, via thoracic duct drainage" },
          { text: "CN XI crosses Posterior triangle Superficially = vulnerable", explanation: "Spinal accessory nerve (CN XI) crosses the posterior triangle superficially. At risk during lymph node biopsy → trapezius paralysis → shoulder droop" }
        ],
        keyPoints: [
          "CN XI injury in posterior triangle → trapezius paralysis, shoulder droop",
          "Congenital torticollis: SCM fibrosis, head tilts to affected side",
          "Virchow's node (left supraclavicular) = Troisier's sign = abdominal malignancy",
          "TB lymphadenitis is the most common cause of chronic cervical lymphadenopathy in India",
          "Right IJV preferred for central venous catheterization (straight path to SVC)"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 8-9, Clinical", edition: "8th" }] },

      { layer: 4, slug: "neck-triangles-exam", title: "Neck: Triangles & Root - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG points on neck triangles, root of neck, and cervical fascia.",
        contentMd: `# Exam High Yield

## One-Liners
- SCM nerve supply: **CN XI (spinal accessory) + C2, C3**
- Carotid bifurcation level: **Upper border of thyroid cartilage (C3-C4)**
- Contents of carotid sheath: **ICA/CCA, IJV, CN X, deep cervical nodes**
- NOT in carotid sheath: **Sympathetic trunk**
- CN XI crosses which triangle: **Posterior triangle (superficially)**
- CN XI injury causes: **Trapezius paralysis, shoulder droop**
- ECA branches: **8 (SALFOPMA)**
- ICA branches in neck: **None**
- Phrenic nerve root value: **C3, C4, C5**
- Phrenic nerve runs on: **Anterior surface of scalenus anterior**
- Brachial plexus roots emerge between: **Scalenus anterior and medius**
- Thoracic duct opens into: **Left venous angle (left subclavian + IJV junction)**
- Virchow's node location: **Left supraclavicular fossa**
- Virchow's node suggests: **Abdominal malignancy (Troisier's sign)**
- Most common chronic cervical LAP in India: **Tuberculous lymphadenitis**
- Infection in pretracheal space spreads to: **Superior mediastinum**
- Infection in retropharyngeal space (prevertebral) spreads to: **Posterior mediastinum**
- Subclavian artery 1st part branches: **Vertebral, internal thoracic, thyrocervical trunk**
- Congenital torticollis: **Fibrosis of SCM, head tilts to affected side**`,
        mnemonics: [
          { text: "Some Anatomists Like Freaking Out Poor Medical Apprentices", explanation: "8 branches of ECA: Superior thyroid, Ascending pharyngeal, Lingual, Facial, Occipital, Posterior auricular, Maxillary, (superficial temporal as) Apprentices" },
          { text: "VIT for 1st part subclavian artery", explanation: "Vertebral artery, Internal thoracic artery, Thyrocervical trunk - the 3 branches from the 1st part of subclavian artery (medial to scalenus anterior)" }
        ],
        keyPoints: [
          "Carotid sheath: ICA, IJV, CN X (sympathetic trunk is outside)",
          "8 ECA branches; ICA has NO branches in the neck",
          "C3,4,5 = phrenic nerve, on scalenus anterior",
          "Virchow's node = left supraclavicular = abdominal malignancy",
          "VIT = 1st part subclavian branches"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 8-9", edition: "8th" }] },

      { layer: 5, slug: "neck-triangles-recall", title: "Neck: Triangles & Root - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test questions on neck triangles and root of neck.",
        contentMd: `# Active Recall

**Q1:** Name the 4 subdivisions of the anterior triangle.
> Submental, Digastric (submandibular), Carotid, Muscular

**Q2:** What are the contents of the carotid sheath?
> ICA/CCA, Internal jugular vein, Vagus nerve (CN X), Deep cervical lymph nodes. Sympathetic trunk is NOT included

**Q3:** At what level does the common carotid artery bifurcate?
> Upper border of thyroid cartilage (C3-C4 level)

**Q4:** What nerve is at risk during lymph node biopsy in the posterior triangle?
> Spinal accessory nerve (CN XI) - crosses superficially

**Q5:** What is the root value of the phrenic nerve and where does it run?
> C3, C4, C5 - runs on the anterior surface of scalenus anterior

**Q6:** Name the 3 branches of the 1st part of the subclavian artery.
> Vertebral artery, Internal thoracic artery, Thyrocervical trunk (VIT)

**Q7:** What is Virchow's node and what does its enlargement indicate?
> Left supraclavicular lymph node; enlargement (Troisier's sign) indicates abdominal malignancy, especially gastric carcinoma

**Q8:** Between which muscles do the roots of the brachial plexus emerge?
> Between scalenus anterior and scalenus medius (interscalene gap)`,
        mnemonics: [],
        keyPoints: ["8 recall questions covering neck triangles, carotid sheath, root of neck, and clinical correlations"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 8-9", edition: "8th" }] },
    ],
  },

  // ─── Topic 6: Thyroid & Parathyroid Glands ─────────────────
  {
    topicCode: "AN-MOD-06-TOP-06",
    layers: [
      { layer: 1, slug: "thyroid-parathyroid-foundation", title: "Thyroid & Parathyroid Glands - Foundation", estimatedMinutes: 20,
        summary: "The thyroid gland is the largest endocrine gland, consisting of two lobes connected by an isthmus. The parathyroids are 4 small glands on the posterior surface of the thyroid.",
        contentMd: `# Thyroid & Parathyroid Glands

## Thyroid Gland
- **Largest endocrine gland** (20-30g)
- Butterfly-shaped, located in front of trachea at C5-T1 level
- Develops from **foramen cecum** of tongue (thyroglossal duct)

### Parts
- **2 Lobes**: Pear-shaped, extending from oblique line of thyroid cartilage to 6th tracheal ring
- **Isthmus**: Connects the 2 lobes, overlies 2nd-4th tracheal rings
- **Pyramidal lobe** (50% of people): Extends upward from isthmus, represents remnant of thyroglossal duct
- **Levator glandulae thyroideae**: Fibrous/muscular band from pyramidal lobe to hyoid

### Capsules
- **True capsule**: Condensation of gland's own connective tissue
- **False capsule (surgical capsule)**: From pretracheal fascia; contains vessels between true and false capsules

### Relations
| Surface | Key Relations |
|---------|--------------|
| Anterolateral | Sternothyroid, sternohyoid, SCM |
| Posteromedial | Trachea, esophagus (left lobe), RLN in tracheoesophageal groove |
| Posterior | Parathyroid glands, inferior thyroid artery |

### Blood Supply
| Artery | Source | Supplies |
|--------|--------|---------|
| Superior thyroid | First branch of ECA | Upper pole |
| Inferior thyroid | Thyrocervical trunk (subclavian) | Lower pole |
| Thyroidea ima (10%) | Brachiocephalic trunk or aortic arch | Isthmus |

### Venous Drainage
- **Superior thyroid vein** → IJV
- **Middle thyroid vein** → IJV
- **Inferior thyroid veins** → Left brachiocephalic vein

## Parathyroid Glands
- Usually **4 glands** (2 superior + 2 inferior), each weighing 30-40mg
- Located on **posterior surface of thyroid** (between true and false capsules)
- **Superior parathyroids**: More constant in position, at level of cricoid cartilage
- **Inferior parathyroids**: Variable position (may be ectopic - in thymus, mediastinum)
- Blood supply: **Inferior thyroid artery** (supplies BOTH superior and inferior parathyroids)

> **Key Surgical Point**: Ligation of inferior thyroid artery can compromise blood supply to ALL 4 parathyroid glands`,
        mnemonics: [
          { text: "Superior thyroid artery = 1st branch of External Carotid", explanation: "The superior thyroid artery is the first anterior branch of the external carotid artery, supplying the upper pole of the thyroid gland. Accompanied by the external laryngeal nerve" },
          { text: "All 4 parathyroids fed by Inferior Thyroid Artery", explanation: "The inferior thyroid artery (from thyrocervical trunk) supplies both superior and inferior parathyroid glands. Ligation during thyroidectomy risks hypoparathyroidism" }
        ],
        keyPoints: [
          "Thyroid is the largest endocrine gland, develops from foramen cecum (thyroglossal duct)",
          "Isthmus overlies 2nd-4th tracheal rings",
          "Blood supply: superior thyroid (ECA), inferior thyroid (thyrocervical trunk), thyroidea ima (10%)",
          "ALL 4 parathyroid glands are supplied by the inferior thyroid artery",
          "Parathyroids lie between true and false capsules of thyroid",
          "Inferior parathyroids are more variable in position than superior"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 10", edition: "8th" }] },

      { layer: 2, slug: "thyroid-parathyroid-mechanism", title: "Thyroid & Parathyroid Glands - Mechanism", estimatedMinutes: 30,
        summary: "Detailed relations of the thyroid during surgery, recurrent laryngeal nerve course relative to inferior thyroid artery, and Berry's ligament.",
        contentMd: `# Detailed Anatomy

## Surgical Anatomy of Thyroid

### Berry's Ligament (Ligament of Berry)
- Thickening of pretracheal fascia attaching thyroid to cricoid cartilage and upper tracheal rings
- **Most important surgical landmark**: RLN passes deep to or through Berry's ligament
- Area of maximum risk for RLN injury during thyroidectomy

### Recurrent Laryngeal Nerve and Inferior Thyroid Artery
The relationship between RLN and inferior thyroid artery (ITA) is variable and clinically crucial:

| Relationship | Frequency |
|-------------|-----------|
| RLN posterior to ITA | Most common |
| RLN anterior to ITA | Less common |
| RLN between branches of ITA | Variable |

> **Surgical Rule**: The ITA is the key landmark for identifying the RLN. The RLN is found in the tracheoesophageal groove, near the crossing of the ITA

### Non-Recurrent Laryngeal Nerve
- Rare variant (0.5-1% on right side; extremely rare on left)
- Right non-recurrent laryngeal nerve associated with **aberrant right subclavian artery (arteria lusoria)**
- Very vulnerable during surgery because it takes an unexpected direct course

## Thyroid Gland Movements
- **Moves with swallowing** (deglutition): Because it is attached to the trachea by pretracheal fascia
- This is a key clinical test to confirm thyroid swelling

## Strap Muscles (Infrahyoid Muscles)
| Muscle | Action | Nerve |
|--------|--------|-------|
| Sternohyoid | Depresses hyoid | Ansa cervicalis (C1-C3) |
| Sternothyroid | Depresses thyroid cartilage | Ansa cervicalis (C1-C3) |
| Thyrohyoid | Elevates thyroid or depresses hyoid | C1 via hypoglossal |
| Omohyoid | Depresses hyoid, tenses deep cervical fascia | Ansa cervicalis (C1-C3) |

### Surgical Steps in Thyroidectomy
1. Skin-crease incision (Kocher's collar incision) 2 cm above sternal notch
2. Divide platysma, elevate subplatysmal flaps
3. Divide strap muscles in midline (linea alba of neck)
4. Ligate **superior thyroid artery close to gland** (to avoid external laryngeal nerve)
5. Identify and preserve **RLN** in tracheoesophageal groove
6. Identify and preserve **parathyroid glands** (between true and false capsules)
7. Ligate **inferior thyroid artery** away from gland (to preserve parathyroid blood supply)

## Development
- Thyroid develops from **foramen cecum** at the junction of anterior 2/3 and posterior 1/3 of tongue
- Descends via **thyroglossal duct** (normally obliterated)
- Thyroglossal duct remnant → thyroglossal cyst (moves with tongue protrusion AND swallowing)`,
        mnemonics: [
          { text: "Berry's ligament = Beware of RLN", explanation: "Berry's ligament is where the RLN is most at risk during thyroidectomy. The nerve passes deep to or through this ligament near the cricoid cartilage" },
          { text: "ITA = Identifier of the RLN; ITA = feeder of Parathyroids", explanation: "The inferior thyroid artery serves dual purpose surgically: (1) Key landmark for finding the RLN, (2) Chief blood supply to all 4 parathyroid glands" }
        ],
        keyPoints: [
          "Berry's ligament attaches thyroid to cricoid - area of maximum risk for RLN injury",
          "RLN most commonly passes posterior to the inferior thyroid artery",
          "Thyroid moves with swallowing (attached to trachea via pretracheal fascia)",
          "Superior thyroid artery ligated close to gland to avoid external laryngeal nerve",
          "Inferior thyroid artery ligated away from gland to preserve parathyroid blood supply",
          "Thyroglossal cyst moves with both swallowing AND tongue protrusion"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 10", edition: "8th" }] },

      { layer: 3, slug: "thyroid-parathyroid-clinical", title: "Thyroid & Parathyroid Glands - Clinical", estimatedMinutes: 20,
        summary: "Clinical conditions: thyroidectomy complications, thyroglossal cyst, goiter, parathyroid disorders, and their relevance in Indian clinical practice.",
        contentMd: `# Clinical Correlations

## Complications of Thyroidectomy
| Complication | Structure Injured | Result |
|-------------|-------------------|--------|
| Hoarseness | Recurrent laryngeal nerve | Vocal cord paralysis (cadaveric position) |
| Voice fatigue (loss of high pitch) | External laryngeal nerve | Cannot tense vocal cord (cricothyroid) |
| Hypoparathyroidism | Parathyroid glands (removed/devascularized) | Hypocalcemia → tetany, Chvostek's/Trousseau's signs |
| Hemorrhage | Thyroid vessels | Respiratory distress from neck hematoma |
| Thyroid storm | Excess thyroid hormone release | Tachycardia, fever, altered mental status |

## Signs of Hypocalcemia (Post-Thyroidectomy)
- **Chvostek's sign**: Tapping facial nerve at angle of jaw → twitching of facial muscles
- **Trousseau's sign**: BP cuff inflation above systolic → carpopedal spasm (main d'accoucheur)
- Perioral numbness, tingling in extremities
- Most common cause: Inadvertent removal of or damage to parathyroid blood supply

## Thyroglossal Cyst
- Most common midline neck swelling in children
- Occurs anywhere along thyroglossal duct tract (foramen cecum to isthmus)
- **Most common site**: Below the hyoid bone
- **Key sign**: Moves with both swallowing AND tongue protrusion
- Treatment: **Sistrunk's operation** (removal of cyst + central part of hyoid bone + tract up to foramen cecum)

## Goiter (Thyroid Enlargement)
- Very common in India, especially in **iodine-deficient areas** (Himalayan belt, North-East India)
- **Endemic goiter**: Due to iodine deficiency
- **Retrosternal goiter**: Extension of thyroid below thoracic inlet → can cause dyspnea, SVC obstruction
- On examination: Moves with swallowing, does NOT move with tongue protrusion (unlike thyroglossal cyst)

## Lingual Thyroid
- Thyroid tissue remaining at the foramen cecum (failure of descent)
- May be the ONLY thyroid tissue in the body
- **Important**: Always perform a thyroid scan before surgical removal

## Parathyroid Adenoma
- Most common cause of primary hyperparathyroidism
- Elevated PTH → hypercalcemia → "bones, stones, groans, moans, and psychic overtones"
- Inferior parathyroids may be ectopic (within thymus in superior mediastinum)`,
        mnemonics: [
          { text: "Thyroglossal cyst: Tongue AND Swallow movement", explanation: "Thyroglossal cyst moves with both tongue protrusion (attached to foramen cecum via tract) AND swallowing (attached to trachea). Thyroid swelling moves ONLY with swallowing" },
          { text: "Chvostek = Cheek tap; Trousseau = Tourniquet (BP cuff)", explanation: "Signs of hypocalcemia after thyroidectomy. Chvostek: tap facial nerve → facial twitch. Trousseau: inflate BP cuff → carpopedal spasm" }
        ],
        keyPoints: [
          "RLN injury: most feared complication of thyroidectomy → vocal cord paralysis",
          "Hypoparathyroidism after thyroidectomy → hypocalcemia → Chvostek and Trousseau signs",
          "Thyroglossal cyst: moves with swallowing AND tongue protrusion, Sistrunk's operation",
          "Endemic goiter common in iodine-deficient areas of India (Himalayan belt)",
          "Always scan for thyroid tissue before removing lingual thyroid"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 10, Clinical", edition: "8th" }] },

      { layer: 4, slug: "thyroid-parathyroid-exam", title: "Thyroid & Parathyroid Glands - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG points on thyroid and parathyroid anatomy.",
        contentMd: `# Exam High Yield

## One-Liners
- Thyroid develops from: **Foramen cecum** (thyroglossal duct)
- Isthmus overlies: **2nd-4th tracheal rings**
- Superior thyroid artery source: **1st branch of ECA**
- Inferior thyroid artery source: **Thyrocervical trunk (subclavian)**
- All parathyroids supplied by: **Inferior thyroid artery**
- Thyroid moves with: **Swallowing only** (pretracheal fascia attachment)
- Thyroglossal cyst moves with: **Swallowing AND tongue protrusion**
- Thyroglossal cyst treatment: **Sistrunk's operation (cyst + central hyoid + tract)**
- Most common site of thyroglossal cyst: **Below the hyoid bone**
- Berry's ligament attaches thyroid to: **Cricoid cartilage + upper tracheal rings**
- Nerve at risk at Berry's ligament: **Recurrent laryngeal nerve**
- External laryngeal nerve at risk during: **Superior thyroid artery ligation**
- Nerve of opera singer: **External laryngeal nerve**
- Ligation rule - superior thyroid artery: **Close to gland** (avoid ext. laryngeal nerve)
- Ligation rule - inferior thyroid artery: **Away from gland** (preserve parathyroid blood supply)
- Thyroidea ima artery present in: **10% of people**
- Non-recurrent RLN associated with: **Aberrant right subclavian artery (arteria lusoria)**
- Chvostek's sign: **Facial nerve tap → facial muscle twitch** (hypocalcemia)
- Trousseau's sign: **BP cuff → carpopedal spasm** (hypocalcemia)
- Kocher's incision: **Collar incision 2 cm above sternal notch** for thyroidectomy`,
        mnemonics: [
          { text: "Superior = close to gland; Inferior = far from gland", explanation: "During thyroidectomy: Ligate superior thyroid artery CLOSE to gland (external laryngeal nerve runs with it but separates higher up). Ligate inferior thyroid artery FAR from gland (to preserve parathyroid blood supply)" },
          { text: "Bones Stones Groans Moans Overtones", explanation: "Features of hyperparathyroidism (hypercalcemia): Bones (osteitis fibrosa), Stones (renal calculi), Groans (abdominal pain), Moans (depression), Psychic overtones (psychiatric symptoms)" }
        ],
        keyPoints: [
          "Thyroid from foramen cecum via thyroglossal duct",
          "ITA supplies all 4 parathyroids and is key landmark for RLN",
          "Berry's ligament = danger zone for RLN",
          "Superior thyroid artery: ligate close; Inferior thyroid artery: ligate far",
          "Thyroglossal cyst moves with tongue protrusion + swallowing"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 10", edition: "8th" }] },

      { layer: 5, slug: "thyroid-parathyroid-recall", title: "Thyroid & Parathyroid Glands - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test on thyroid and parathyroid anatomy.",
        contentMd: `# Active Recall

**Q1:** Where does the thyroid gland develop from?
> Foramen cecum at the junction of anterior 2/3 and posterior 1/3 of the tongue, descending via the thyroglossal duct

**Q2:** What is the blood supply to all 4 parathyroid glands?
> Inferior thyroid artery (from thyrocervical trunk of subclavian artery)

**Q3:** What is Berry's ligament and why is it surgically important?
> Thickening of pretracheal fascia attaching thyroid to cricoid cartilage. The RLN passes deep to it - area of maximum risk for nerve injury

**Q4:** How do you distinguish a thyroglossal cyst from a thyroid swelling clinically?
> Thyroglossal cyst moves with both swallowing AND tongue protrusion. Thyroid swelling moves only with swallowing

**Q5:** What are the signs of post-thyroidectomy hypocalcemia?
> Chvostek's sign (facial nerve tap → facial twitch) and Trousseau's sign (BP cuff → carpopedal spasm)

**Q6:** What nerve is at risk during ligation of the superior thyroid artery?
> External laryngeal nerve (nerve of the opera singer - supplies cricothyroid)

**Q7:** Why is the inferior thyroid artery ligated away from the gland?
> To preserve the blood supply to the parathyroid glands (all 4 parathyroids are supplied by the inferior thyroid artery)

**Q8:** What is Sistrunk's operation?
> Surgical removal of thyroglossal cyst along with the central part of the hyoid bone and the thyroglossal tract up to the foramen cecum`,
        mnemonics: [],
        keyPoints: ["8 recall questions covering thyroid development, blood supply, surgical anatomy, and complications"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 10", edition: "8th" }] },
    ],
  },

  // ─── Topic 7: Cranial Nerves ───────────────────────────────
  {
    topicCode: "AN-MOD-06-TOP-07",
    layers: [
      { layer: 1, slug: "cranial-nerves-foundation", title: "Cranial Nerves - Foundation", estimatedMinutes: 20,
        summary: "There are 12 pairs of cranial nerves arising from the brain. They have sensory, motor, or mixed functions and exit through specific foramina of the skull.",
        contentMd: `# Cranial Nerves - Overview

## The 12 Cranial Nerves
| Number | Name | Type | Function Summary |
|--------|------|------|-----------------|
| I | Olfactory | Sensory | Smell |
| II | Optic | Sensory | Vision |
| III | Oculomotor | Motor | Eye movements (most), pupil constriction, accommodation |
| IV | Trochlear | Motor | Superior oblique muscle |
| V | Trigeminal | Mixed | Facial sensation, muscles of mastication |
| VI | Abducens | Motor | Lateral rectus muscle |
| VII | Facial | Mixed | Facial expression, taste (ant 2/3), lacrimation, salivation |
| VIII | Vestibulocochlear | Sensory | Hearing and balance |
| IX | Glossopharyngeal | Mixed | Taste (post 1/3), parotid secretion, pharyngeal sensation |
| X | Vagus | Mixed | Pharynx, larynx, thorax, abdomen (parasympathetic) |
| XI | Accessory | Motor | SCM, trapezius |
| XII | Hypoglossal | Motor | All tongue muscles (except palatoglossus) |

## Type of Each Nerve (Mnemonic)
- **S**ensory: I, II, VIII
- **M**otor: III, IV, VI, XI, XII
- **B**oth (Mixed): V, VII, IX, X

## Skull Foramina and Cranial Nerve Exit
| Foramen | Nerves |
|---------|--------|
| Cribriform plate | CN I (olfactory) |
| Optic canal | CN II (optic), ophthalmic artery |
| Superior orbital fissure | CN III, IV, V1, VI, ophthalmic veins |
| Foramen rotundum | V2 (maxillary) |
| Foramen ovale | V3 (mandibular) |
| Internal acoustic meatus | CN VII, VIII |
| Jugular foramen | CN IX, X, XI |
| Hypoglossal canal | CN XII |
| Foramen magnum | CN XI (spinal root, ascending) |

## Origin from Brain
| Part of Brain | Nerves |
|---------------|--------|
| Cerebrum | I (telencephalon), II (diencephalon) |
| Midbrain | III (ventral), IV (dorsal - only CN to exit dorsally) |
| Pons | V, VI, VII, VIII |
| Medulla | IX, X, XI, XII |`,
        mnemonics: [
          { text: "Oh Oh Oh To Touch And Feel Very Good Velvet AH", explanation: "12 cranial nerves in order: Olfactory, Optic, Oculomotor, Trochlear, Trigeminal, Abducens, Facial, Vestibulocochlear, Glossopharyngeal, Vagus, Accessory, Hypoglossal" },
          { text: "Some Say Marry Money But My Brother Says Big Brains Matter More", explanation: "Type of each nerve: Sensory, Sensory, Motor, Motor, Both, Motor, Both, Sensory, Both, Both, Motor, Motor" }
        ],
        keyPoints: [
          "12 cranial nerves: 3 sensory (I, II, VIII), 5 motor (III, IV, VI, XI, XII), 4 mixed (V, VII, IX, X)",
          "CN IV (trochlear) is the only CN that exits from the dorsal aspect of brainstem",
          "Jugular foramen transmits CN IX, X, XI together",
          "Superior orbital fissure transmits CN III, IV, V1, VI",
          "Pons gives origin to CN V, VI, VII, VIII",
          "CN X (vagus) has the longest course of any cranial nerve"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 11", edition: "8th" }] },

      { layer: 2, slug: "cranial-nerves-mechanism", title: "Cranial Nerves - Mechanism", estimatedMinutes: 30,
        summary: "Detailed course, distribution, and nuclei of key cranial nerves with emphasis on clinical testing methods.",
        contentMd: `# Detailed Cranial Nerve Anatomy

## CN III (Oculomotor)
- **Nuclei**: Oculomotor nucleus (motor) + Edinger-Westphal nucleus (parasympathetic)
- **Supplies**: All extraocular muscles EXCEPT superior oblique (IV) and lateral rectus (VI)
- Muscles: Superior rectus, Inferior rectus, Medial rectus, Inferior oblique + Levator palpebrae superioris
- **Parasympathetic**: Constricts pupil (sphincter pupillae) + accommodation (ciliary muscle) via ciliary ganglion
- **Complete CN III palsy**: Ptosis, eye deviated "down and out" (SO4 + LR6 unopposed), dilated fixed pupil

## CN V (Trigeminal)
The largest cranial nerve; has 3 divisions:
| Division | Foramen | Key Function |
|----------|---------|-------------|
| V1 (Ophthalmic) | Superior orbital fissure | Sensation: forehead, upper eyelid, nose bridge; corneal reflex (afferent) |
| V2 (Maxillary) | Foramen rotundum | Sensation: cheek, upper lip, upper teeth, palate |
| V3 (Mandibular) | Foramen ovale | Sensation: lower face, chin + Motor: muscles of mastication |

- **Motor**: Muscles of mastication (masseter, temporalis, medial & lateral pterygoids), also tensor tympani, tensor veli palatini, mylohyoid, anterior belly of digastric
- **Corneal reflex**: Afferent = V1 (ophthalmic), Efferent = VII (facial - orbicularis oculi)

## CN IX (Glossopharyngeal)
- Exits skull via **jugular foramen**
- **Motor**: Stylopharyngeus (only muscle by CN IX)
- **Sensory**: Posterior 1/3 of tongue (general + taste), oropharynx, carotid body/sinus
- **Parasympathetic**: Secretomotor to parotid (via otic ganglion)
- **Gag reflex afferent**

## CN X (Vagus)
- Longest cranial nerve; exits via jugular foramen
- **Motor**: All pharyngeal muscles (via pharyngeal plexus) except stylopharyngeus (IX); all laryngeal muscles (via RLN) except cricothyroid (external SLN); all palate muscles except tensor veli palatini (V3)
- **Parasympathetic**: Heart, lungs, gut up to splenic flexure
- **Sensory**: External ear (Arnold's nerve), larynx, thorax, abdomen

## CN XI (Accessory)
- **Spinal root** (from C1-C5 spinal cord): Supplies SCM + Trapezius
- **Cranial root**: Joins vagus (considered part of vagus by some authorities)
- Exits via jugular foramen; crosses posterior triangle superficially

## CN XII (Hypoglossal)
- Exits via **hypoglossal canal**
- Supplies all tongue muscles EXCEPT palatoglossus (CN X)
- Lies on hyoglossus muscle in the neck
- **Clinical test**: Ask patient to protrude tongue → deviates to affected side in LMN lesion

## Clinical Testing Summary
| CN | Test |
|----|------|
| I | Smell identification (each nostril separately) |
| II | Visual acuity, visual fields, fundoscopy |
| III, IV, VI | Eye movements, pupil reflexes |
| V | Facial sensation (3 divisions), jaw deviation, corneal reflex |
| VII | Facial movements (wrinkle forehead, close eyes, show teeth) |
| VIII | Hearing (Rinne, Weber), balance |
| IX, X | Gag reflex, palatal movements, voice |
| XI | Shrug shoulders (trapezius), turn head (SCM) |
| XII | Tongue protrusion (deviation?) |`,
        mnemonics: [
          { text: "LR6 SO4 rest 3", explanation: "Lateral Rectus by CN VI (abducens), Superior Oblique by CN IV (trochlear), all remaining extraocular muscles by CN III (oculomotor)" },
          { text: "CN III palsy = Down and Out eye + Ptosis + dilated pupil", explanation: "In complete CN III palsy: eye deviates down (superior oblique, CN IV) and out (lateral rectus, CN VI). Ptosis (levator palpebrae). Dilated pupil (loss of parasympathetic)" }
        ],
        keyPoints: [
          "CN III: all extraocular muscles except SO4 and LR6; parasympathetic to pupil and ciliary muscle",
          "CN V: largest CN; V1/V2 sensory only, V3 mixed (motor to muscles of mastication)",
          "Corneal reflex: afferent V1, efferent VII",
          "CN X: motor to all pharyngeal muscles (except stylopharyngeus), all laryngeal (except cricothyroid), all palatal (except tensor veli palatini)",
          "CN XII: all tongue muscles except palatoglossus; tongue deviates to affected side",
          "CN IV is the only CN to exit dorsally from the brainstem"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 11", edition: "8th" }] },

      { layer: 3, slug: "cranial-nerves-clinical", title: "Cranial Nerves - Clinical", estimatedMinutes: 20,
        summary: "Clinical presentations of cranial nerve lesions, including CN III palsy, trigeminal neuralgia, jugular foramen syndrome, and cranial nerve examination findings.",
        contentMd: `# Clinical Correlations

## CN III (Oculomotor) Palsy
- **Complete palsy**: Ptosis, dilated pupil, eye "down and out"
- **Medical (pupil-sparing)**: Diabetes mellitus (microvascular ischemia of nerve center sparing peripheral parasympathetic fibers)
- **Surgical (pupil-involving)**: Posterior communicating artery aneurysm compressing nerve from outside (parasympathetic fibers run on surface)

> **Key Rule**: A 3rd nerve palsy with a dilated pupil = compressive lesion (aneurysm) until proven otherwise - SURGICAL EMERGENCY

## Trigeminal Neuralgia (Tic Douloureux)
- Severe, stabbing facial pain in V2/V3 distribution
- Triggered by touch, chewing, talking, brushing teeth
- Most common cause: Vascular compression by superior cerebellar artery
- Treatment: Carbamazepine (first-line), microvascular decompression
- Common presentation in Indian clinical exams

## Jugular Foramen Syndrome (Vernet's Syndrome)
- Compression of CN IX, X, XI at jugular foramen
- Causes: Glomus jugulare tumor, skull base fracture
- Features: Loss of gag reflex (IX), vocal cord paralysis (X), trapezius/SCM weakness (XI)

## Bulbar vs Pseudobulbar Palsy
| Feature | Bulbar (LMN) | Pseudobulbar (UMN) |
|---------|-------------|-------------------|
| Lesion | Nuclei/nerves of IX, X, XII | Bilateral UMN to these nuclei |
| Tongue | Wasted, fasciculations | Spastic, small |
| Jaw jerk | Normal/absent | Exaggerated |
| Emotional lability | Absent | Present |
| Speech | Nasal | Spastic (hot potato voice) |

## Internuclear Ophthalmoplegia (INO)
- Lesion of medial longitudinal fasciculus (MLF)
- On attempted lateral gaze: Failure of adduction of ipsilateral eye + nystagmus of abducting eye
- Common cause: Multiple sclerosis (bilateral INO in young patient)

## CN VII (Facial Nerve) Palsy - Localization
| Level | Additional Features |
|-------|-------------------|
| CP angle | Deafness (CN VIII), cerebellar signs |
| Above geniculate ganglion | Loss of lacrimation (greater petrosal) |
| Above nerve to stapedius | Hyperacusis |
| Above chorda tympani | Loss of taste (anterior 2/3 tongue) |
| At stylomastoid foramen | Pure motor (no taste loss, no hyperacusis) |

## Arnold's Nerve (Auricular Branch of Vagus)
- Sensory to external ear canal and part of tympanic membrane
- Stimulation → cough reflex (Arnold's cough reflex)
- Explains coughing during ear examination with otoscope`,
        mnemonics: [
          { text: "Pupil-involving CN III palsy = PComm Aneurysm = Emergency", explanation: "When CN III palsy involves the pupil (dilated, fixed), suspect posterior communicating artery aneurysm compressing parasympathetic fibers on the nerve surface. Pupil-sparing = microvascular (diabetes)" },
          { text: "Bulbar = Bottom (LMN), Pseudobulbar = Pair of UMN", explanation: "Bulbar palsy is LMN (at the level of the brainstem nuclei/nerves). Pseudobulbar is bilateral UMN. Pseudobulbar has exaggerated jaw jerk and emotional lability" }
        ],
        keyPoints: [
          "Pupil-involving CN III palsy = posterior communicating artery aneurysm until proven otherwise",
          "Pupil-sparing CN III palsy = microvascular (diabetes mellitus)",
          "Trigeminal neuralgia: V2/V3 distribution, carbamazepine is first-line treatment",
          "Jugular foramen syndrome (Vernet's): involves CN IX, X, XI",
          "Facial nerve lesion localization based on associated deficits (taste, hyperacusis, lacrimation)"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 11, Clinical", edition: "8th" }] },

      { layer: 4, slug: "cranial-nerves-exam", title: "Cranial Nerves - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG points on cranial nerve anatomy.",
        contentMd: `# Exam High Yield

## One-Liners
- Only CN to exit from dorsal brainstem: **CN IV (trochlear)**
- Thinnest cranial nerve: **CN IV (trochlear)**
- Longest intracranial course: **CN IV (trochlear)**
- Largest cranial nerve: **CN V (trigeminal)**
- Longest cranial nerve: **CN X (vagus)**
- CN that passes through cavernous sinus: **CN III, IV, V1, V2, VI**
- CN embedded in lateral wall of cavernous sinus: **III, IV, V1, V2**
- CN running through center of cavernous sinus: **CN VI (with ICA)**
- CN most commonly affected by raised ICP: **CN VI (long intracranial course)**
- Corneal reflex: Afferent **V1**, Efferent **VII**
- Gag reflex: Afferent **IX**, Efferent **X**
- Jaw jerk: Afferent + Efferent = **V3**
- Light reflex: Afferent **II**, Efferent **III**
- Accommodation reflex: Afferent **II**, Efferent **III**
- Arnold's nerve: Auricular branch of **vagus (CN X)** → cough during ear exam
- Weber's test lateralizes to: **Affected ear in conductive, normal ear in sensorineural**
- Rinne's test: **BC > AC** in conductive loss
- Muscles of mastication nerve: **V3 (mandibular)**
- Parasympathetic ganglia of head: **Ciliary (III), Pterygopalatine (VII), Otic (IX), Submandibular (VII)**

## Key Foramina Table (Most Tested)
| Foramen | Contents |
|---------|----------|
| Superior orbital fissure | III, IV, V1, VI |
| Foramen rotundum | V2 |
| Foramen ovale | V3 |
| Foramen spinosum | Middle meningeal artery |
| Jugular foramen | IX, X, XI, IJV |
| Hypoglossal canal | XII |
| Stylomastoid foramen | VII (exits) |`,
        mnemonics: [
          { text: "4 Parasympathetic ganglia: Ciliary-Pterygopalatine-Otic-Submandibular", explanation: "Relay stations for cranial parasympathetic fibers: Ciliary (CN III → pupil constriction), Pterygopalatine (CN VII → lacrimal), Otic (CN IX → parotid), Submandibular (CN VII → submandibular/sublingual)" },
          { text: "CN VI is the FALSE localizing sign in raised ICP", explanation: "CN VI has the longest intracranial course and is most vulnerable to raised intracranial pressure, leading to lateral rectus palsy even without a direct lesion - hence called a false localizing sign" }
        ],
        keyPoints: [
          "CN IV: only dorsal exit, thinnest, longest intracranial course",
          "CN V: largest; CN X: longest",
          "CN VI runs through center of cavernous sinus, false localizing sign in raised ICP",
          "4 parasympathetic ganglia: ciliary (III), pterygopalatine (VII), otic (IX), submandibular (VII)",
          "Key foramina: SOF (III,IV,V1,VI), rotundum (V2), ovale (V3), jugular (IX,X,XI)"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 11", edition: "8th" }] },

      { layer: 5, slug: "cranial-nerves-recall", title: "Cranial Nerves - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test on cranial nerve anatomy.",
        contentMd: `# Active Recall

**Q1:** Name the 12 cranial nerves in order.
> Olfactory, Optic, Oculomotor, Trochlear, Trigeminal, Abducens, Facial, Vestibulocochlear, Glossopharyngeal, Vagus, Accessory, Hypoglossal

**Q2:** Which CN exits from the dorsal surface of the brainstem?
> CN IV (trochlear) - the only cranial nerve to do so

**Q3:** What are the contents of the superior orbital fissure?
> CN III, CN IV, CN V1 (ophthalmic), CN VI, and ophthalmic veins

**Q4:** In complete CN III palsy, describe the eye position and pupil.
> Eye is deviated "down and out" (lateral rectus + superior oblique unopposed), ptosis, dilated fixed pupil

**Q5:** What is the difference between pupil-sparing and pupil-involving CN III palsy?
> Pupil-sparing: microvascular (diabetes), ischemia of nerve center. Pupil-involving: compressive lesion (PComm aneurysm), parasympathetic fibers on surface affected first

**Q6:** Which cranial nerve is a false localizing sign in raised ICP?
> CN VI (abducens) - has the longest intracranial course and runs through the cavernous sinus

**Q7:** Name the 4 parasympathetic ganglia of the head and their associated cranial nerves.
> Ciliary (CN III), Pterygopalatine (CN VII), Otic (CN IX), Submandibular (CN VII)

**Q8:** What is the afferent and efferent limb of the corneal reflex?
> Afferent: CN V1 (ophthalmic division of trigeminal). Efferent: CN VII (facial nerve - orbicularis oculi)`,
        mnemonics: [],
        keyPoints: ["8 recall questions covering all 12 cranial nerves, foramina, clinical testing, and lesion patterns"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 11", edition: "8th" }] },
    ],
  },

  // ─── Topic 8: Orbit & Eye ─────────────────────────────────
  {
    topicCode: "AN-MOD-06-TOP-08",
    layers: [
      { layer: 1, slug: "orbit-eye-foundation", title: "Orbit & Eye - Foundation", estimatedMinutes: 20,
        summary: "The orbit is a pyramidal bony cavity housing the eyeball, extraocular muscles, nerves, and vessels. Understanding the extraocular muscles and their innervation is fundamental.",
        contentMd: `# Orbit & Eye

## Bony Orbit
- Shape: Pyramid with apex posteriorly (at optic canal) and base anteriorly (orbital margin)
- **7 bones** form the orbit: Maxilla, Zygomatic, Frontal, Ethmoid, Lacrimal, Sphenoid (greater + lesser wings), Palatine

### Walls of the Orbit
| Wall | Bones | Important Relations |
|------|-------|-------------------|
| Roof | Frontal, Lesser wing of sphenoid | Anterior cranial fossa, frontal sinus |
| Floor | Maxilla, Zygomatic, Palatine | Maxillary sinus (blow-out fracture) |
| Medial | Ethmoid (lamina papyracea), Lacrimal, Maxilla, Sphenoid | Ethmoidal sinuses (thinnest wall) |
| Lateral | Zygomatic, Greater wing of sphenoid | Temporal fossa, middle cranial fossa |

> **Clinical Pearl**: Medial wall (lamina papyracea) is the THINNEST wall - ethmoidal sinusitis can spread to the orbit

### Openings of the Orbit
| Opening | Location | Contents |
|---------|----------|----------|
| Optic canal | Apex (lesser wing of sphenoid) | CN II, ophthalmic artery |
| Superior orbital fissure | Between greater and lesser wing of sphenoid | CN III, IV, V1, VI, ophthalmic veins |
| Inferior orbital fissure | Between maxilla and greater wing of sphenoid | V2 (infraorbital nerve), inferior ophthalmic vein |

## Extraocular Muscles
| Muscle | Origin | Insertion | Action | Nerve |
|--------|--------|-----------|--------|-------|
| Superior rectus | Common tendinous ring | Superior sclera | Elevation, adduction, intorsion | CN III |
| Inferior rectus | Common tendinous ring | Inferior sclera | Depression, adduction, extorsion | CN III |
| Medial rectus | Common tendinous ring | Medial sclera | Adduction | CN III |
| Lateral rectus | Common tendinous ring | Lateral sclera | Abduction | CN VI |
| Superior oblique | Body of sphenoid | Superolateral sclera (via trochlea) | Depression, abduction, intorsion | CN IV |
| Inferior oblique | Floor of orbit (maxilla) | Inferolateral sclera | Elevation, abduction, extorsion | CN III |
| Levator palpebrae superioris | Lesser wing of sphenoid | Upper eyelid | Elevates upper eyelid | CN III + sympathetic (Muller's) |

> **Annulus of Zinn (Common Tendinous Ring)**: Origin of 4 recti muscles at apex of orbit; CN II, III, VI and nasociliary nerve pass through it

## Optic Nerve (CN II)
- Not a true nerve but a tract of the brain (covered by meninges and CSF)
- Length: ~4 cm (intraocular 1mm, intraorbital 25mm, intracanalicular 9mm, intracranial 10mm)
- Central retinal artery (branch of ophthalmic artery) enters the nerve inferiorly

## Lacrimal Apparatus
- **Lacrimal gland**: In superolateral part of orbit (lacrimal fossa)
- Secretomotor supply: CN VII (parasympathetic via greater petrosal nerve → pterygopalatine ganglion)
- Tears flow: Lacrimal gland → conjunctival sac → lacrimal puncta → canaliculi → lacrimal sac → nasolacrimal duct → inferior meatus of nose`,
        mnemonics: [
          { text: "LR6 SO4 rest 3", explanation: "Lateral Rectus = CN VI, Superior Oblique = CN IV, all remaining extraocular muscles = CN III. The most important mnemonic for eye muscle innervation" },
          { text: "My Little Eye Sits in a Pyramid of 7 bones", explanation: "7 bones of the orbit: Maxilla, Lacrimal, Ethmoid, Sphenoid, Zygomatic, Frontal, Palatine" }
        ],
        keyPoints: [
          "Orbit is formed by 7 bones; medial wall (lamina papyracea) is thinnest",
          "LR6, SO4, rest 3 - lateral rectus by CN VI, superior oblique by CN IV, rest by CN III",
          "Superior oblique passes through the trochlea (pulley) before inserting",
          "Optic nerve is a brain tract covered by meninges (not a true peripheral nerve)",
          "Lacrimal gland secretomotor supply: CN VII via pterygopalatine ganglion",
          "Annulus of Zinn: origin of 4 recti; transmits CN II, III, VI, nasociliary nerve"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 3", edition: "8th" }, { book: "AK Khurana", chapter: "Anatomy of Eye", edition: "8th" }] },

      { layer: 2, slug: "orbit-eye-mechanism", title: "Orbit & Eye - Mechanism", estimatedMinutes: 30,
        summary: "Detailed anatomy of extraocular muscle actions, the pupillary light reflex pathway, blood supply of the orbit, and the cavernous sinus.",
        contentMd: `# Detailed Anatomy

## Testing Extraocular Muscles
Each muscle has a position where it acts as the SOLE agonist:

| Muscle | Test Position (Direction of Gaze) |
|--------|----------------------------------|
| Superior rectus | Look UP and OUT |
| Inferior rectus | Look DOWN and OUT |
| Medial rectus | Look IN (medially) |
| Lateral rectus | Look OUT (laterally) |
| Superior oblique | Look DOWN and IN |
| Inferior oblique | Look UP and IN |

> **Clinical Pearl**: To test superior oblique (CN IV), ask patient to look DOWN and IN. Failure = CN IV palsy (patient tilts head to compensate)

## Pupillary Light Reflex Pathway
1. Light falls on retina → impulse via **CN II (optic nerve)**
2. Optic nerve → optic chiasma → optic tract
3. Synapse at **pretectal nucleus** (in midbrain)
4. Pretectal nucleus sends fibers to BOTH **Edinger-Westphal (EW) nuclei** (bilateral)
5. EW nucleus → parasympathetic fibers via **CN III** → ciliary ganglion → short ciliary nerves
6. **Sphincter pupillae** contracts → pupil constricts (miosis)

### Direct and Consensual Response
- **Direct**: Pupil constricts in the eye receiving light (same side pathway)
- **Consensual**: Opposite pupil also constricts (because pretectal nucleus projects to both EW nuclei)

## Sympathetic Pathway to the Eye
1. Hypothalamus → brainstem → intermediolateral column C8-T2 (ciliospinal center of Budge)
2. Preganglionic neuron → superior cervical ganglion
3. Postganglionic → travel along ICA → enter orbit → long ciliary nerves
4. Supply: **Dilator pupillae** (mydriasis), **Muller's muscle** (smooth muscle of LPS), blood vessels

## Blood Supply of Orbit
- **Ophthalmic artery** (branch of ICA): Chief artery of the orbit
- Branches: Central retinal artery, lacrimal, posterior ciliary, supraorbital, supratrochlear, anterior/posterior ethmoidal
- **Central retinal artery**: End artery - occlusion causes sudden painless loss of vision

## Cavernous Sinus
A dural venous sinus on either side of the sella turcica:

### Contents
**In the lateral wall (superior to inferior)**: CN III → CN IV → V1 → V2
**Through the center**: CN VI + Internal carotid artery (ICA)

### Tributaries
- Superior and inferior ophthalmic veins
- Superficial middle cerebral vein
- Sphenoparietal sinus

### Drains Into
- Superior and inferior petrosal sinuses → IJV

> **Clinical**: Cavernous sinus thrombosis causes involvement of CN III, IV, V1, V2, VI + ICA → ophthalmoplegia, proptosis, chemosis`,
        mnemonics: [
          { text: "SO4 tests: look DOWN and IN", explanation: "To isolate superior oblique (CN IV) action, the patient looks DOWN and IN. CN IV palsy: cannot look down when eye is adducted, head tilts away from affected side" },
          { text: "Cavernous sinus lateral wall: 3-4-V1-V2; Center: 6+ICA", explanation: "Lateral wall from top to bottom: CN III, CN IV, V1 (ophthalmic), V2 (maxillary). Center of sinus: CN VI and internal carotid artery bathed in venous blood" }
        ],
        keyPoints: [
          "Superior oblique tests: look down and in; inferior oblique: up and in",
          "Pupillary light reflex: CN II (afferent) → pretectal nucleus → EW nucleus → CN III (efferent)",
          "Consensual reflex: because pretectal nucleus projects to BOTH EW nuclei",
          "Central retinal artery is an end artery - occlusion = sudden painless vision loss",
          "Cavernous sinus lateral wall: III, IV, V1, V2; center: VI + ICA",
          "Sympathetic pathway to eye: hypothalamus → C8-T2 → superior cervical ganglion → long ciliary nerves"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 3, 12", edition: "8th" }, { book: "AK Khurana", chapter: "Neuro-ophthalmology", edition: "8th" }] },

      { layer: 3, slug: "orbit-eye-clinical", title: "Orbit & Eye - Clinical", estimatedMinutes: 20,
        summary: "Clinical conditions: Horner's syndrome, orbital fractures, CN palsies affecting the eye, papilledema, and common ophthalmic emergencies.",
        contentMd: `# Clinical Correlations

## Horner's Syndrome (Sympathetic Pathway Disruption)
Interruption of sympathetic supply to the eye at any level:

### Classic Triad
1. **Miosis** (constricted pupil - loss of dilator pupillae)
2. **Ptosis** (partial - loss of Muller's muscle only, ~2mm)
3. **Anhydrosis** (loss of sweating on affected side of face)

### Additional Features
- Enophthalmos (apparent, due to narrowed palpebral fissure)
- Loss of ciliospinal reflex

### Causes (by level)
| Level | Cause |
|-------|-------|
| Central (1st order) | Stroke (lateral medullary syndrome), syringomyelia |
| Preganglionic (2nd order) | Pancoast tumor (lung apex), thyroid surgery, neck trauma |
| Postganglionic (3rd order) | Cavernous sinus lesion, carotid artery dissection, cluster headache |

> **Indian Context**: Pancoast tumor is an important cause; also cervical rib surgery and thyroidectomy complications

## Blow-Out Fracture of Orbit
- Sudden increase in intraorbital pressure (e.g., cricket ball injury, fist)
- Weakest wall (floor) fractures → orbital contents herniate into maxillary sinus
- **Inferior rectus entrapped** → restricted upgaze (diplopia on looking up)
- Infraorbital nerve damaged → numbness of cheek

## CN III Palsy - Types
| Type | Pupil | Cause | Mechanism |
|------|-------|-------|-----------|
| Surgical | Dilated, fixed | PComm aneurysm | Compression of surface parasympathetic fibers |
| Medical | Spared | Diabetes mellitus | Central ischemia, surface fibers spared |

## CN IV (Trochlear) Palsy
- Cannot depress eye when adducted (cannot look down and in)
- **Head tilt**: Away from affected side (compensatory)
- Difficulty reading (looking down) and going downstairs
- Diplopia is maximal looking down and toward the nose

## CN VI (Abducens) Palsy
- Cannot abduct the eye (lateral rectus paralysis)
- Eye turns inward (convergent squint)
- **False localizing sign** in raised ICP (long intracranial course)

## Papilledema
- Swelling of optic disc due to raised intracranial pressure
- Mechanism: Raised CSF pressure transmitted along meninges surrounding optic nerve → compresses central retinal vein
- Signs: Blurred disc margins, engorgement of retinal veins, loss of venous pulsation
- Visual acuity preserved initially (unlike optic neuritis)

## Central Retinal Artery Occlusion (CRAO)
- **Ophthalmic emergency** - sudden painless loss of vision
- Cherry-red spot at macula (fovea has no inner retinal layers, supplied by choroidal circulation)
- End artery - no collateral supply
- Causes: Embolism (carotid atherosclerosis), giant cell arteritis
- Window of treatment: First few hours`,
        mnemonics: [
          { text: "Horner's = Miosis, Ptosis (partial), Anhydrosis", explanation: "Sympathetic disruption causes: Miosis (loss of dilator pupillae), Ptosis (partial, 2mm, loss of Muller's muscle), Anhydrosis (loss of facial sweating on affected side). Also enophthalmos (apparent)" },
          { text: "CN IV palsy: tilt Away, trouble looking Down stairs", explanation: "In CN IV (trochlear) palsy, patient compensates by tilting head AWAY from affected side. Has trouble looking DOWN and IN (reading, going downstairs)" }
        ],
        keyPoints: [
          "Horner's syndrome: miosis, partial ptosis, anhydrosis (sympathetic disruption)",
          "Blow-out fracture: floor of orbit fractures, inferior rectus trapped, restricted upgaze",
          "CN III surgical palsy (pupil-involving) = PComm aneurysm emergency",
          "CN VI palsy is a false localizing sign in raised ICP",
          "Central retinal artery occlusion: sudden painless vision loss, cherry-red spot"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 3, Clinical", edition: "8th" }, { book: "AK Khurana", chapter: "Neuro-ophthalmology", edition: "8th" }] },

      { layer: 4, slug: "orbit-eye-exam", title: "Orbit & Eye - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield NEXT/NEET PG points on orbit and eye anatomy.",
        contentMd: `# Exam High Yield

## One-Liners
- Thinnest wall of orbit: **Medial wall (lamina papyracea of ethmoid)**
- Weakest wall of orbit: **Floor (maxilla)** → blow-out fracture
- Muscles through annulus of Zinn: **4 recti (SR, IR, MR, LR)**
- Nerve NOT passing through annulus of Zinn: **CN IV (trochlear), frontal, lacrimal**
- Superior oblique passes through: **Trochlea (pulley on frontal bone)**
- Test for superior oblique: **Look down and in**
- CN IV palsy head tilt: **Away from affected side**
- LR6 SO4 rest: **3 (CN III)**
- Central retinal artery is: **End artery (branch of ophthalmic artery)**
- Cherry red spot at macula: **Central retinal artery occlusion**
- Horner's syndrome triad: **Miosis, partial ptosis, anhydrosis**
- Ptosis in Horner's: **Partial (2mm)** due to loss of Muller's muscle only
- Ptosis in CN III palsy: **Complete** (loss of levator palpebrae superioris)
- Pupillary light reflex afferent: **CN II**; efferent: **CN III**
- Parasympathetic ganglion in orbit: **Ciliary ganglion**
- Sensory nerve of cornea: **Nasociliary nerve (V1) → long ciliary nerves**
- Lacrimal gland secretomotor: **CN VII (greater petrosal → pterygopalatine ganglion)**
- Cavernous sinus contains (center): **CN VI + ICA**
- Papilledema is due to: **Raised intracranial pressure (compressed central retinal vein)**
- Orbit bones: **7 bones (Maxilla, Zygomatic, Frontal, Ethmoid, Lacrimal, Sphenoid, Palatine)**

## Comparison: Ptosis Types
| Type | Degree | Muscle Affected | Cause |
|------|--------|----------------|-------|
| CN III palsy | Complete | LPS (striated) | Aneurysm, diabetes |
| Horner's syndrome | Partial (2mm) | Muller's muscle (smooth) | Sympathetic lesion |
| Myasthenia gravis | Variable, fatigable | NMJ of LPS | Autoimmune |`,
        mnemonics: [
          { text: "Complete ptosis = CN III; Partial ptosis = Horner's", explanation: "CN III palsy causes complete ptosis (levator palpebrae superioris is striated, supplied by CN III). Horner's causes partial ptosis (only Muller's muscle, smooth muscle, is lost)" },
          { text: "Cherry RED spot = Central Retinal artery END artery", explanation: "Central retinal artery occlusion causes a cherry-red spot at the macula because the fovea is supplied by choroidal circulation and appears red against the pale ischemic retina" }
        ],
        keyPoints: [
          "Thinnest orbital wall = medial (lamina papyracea); weakest = floor",
          "LR6 SO4 rest 3; SO tests: look down and in",
          "Central retinal artery is an end artery; occlusion → cherry-red spot",
          "Horner's = partial ptosis (Muller's); CN III palsy = complete ptosis (LPS)",
          "Cavernous sinus center: CN VI + ICA"
        ],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 3", edition: "8th" }, { book: "AK Khurana", chapter: "Anatomy of Eye", edition: "8th" }] },

      { layer: 5, slug: "orbit-eye-recall", title: "Orbit & Eye - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard self-test on orbit and eye anatomy.",
        contentMd: `# Active Recall

**Q1:** Name the innervation of extraocular muscles using the mnemonic.
> LR6 (Lateral Rectus = CN VI), SO4 (Superior Oblique = CN IV), rest 3 (all others = CN III)

**Q2:** How do you test the superior oblique muscle?
> Ask the patient to look DOWN and IN. Failure indicates CN IV palsy

**Q3:** What are the 3 features of Horner's syndrome?
> Miosis (constricted pupil), partial ptosis (loss of Muller's muscle), anhydrosis (loss of sweating on affected side)

**Q4:** Describe the pupillary light reflex pathway.
> Light → Retina → CN II → Optic tract → Pretectal nucleus → Both Edinger-Westphal nuclei → CN III → Ciliary ganglion → Short ciliary nerves → Sphincter pupillae → Miosis

**Q5:** What is the clinical significance of the central retinal artery?
> It is an end artery. Occlusion causes sudden painless loss of vision with cherry-red spot at macula

**Q6:** What are the contents of the cavernous sinus?
> Lateral wall (top to bottom): CN III, IV, V1, V2. Center: CN VI and internal carotid artery

**Q7:** In a blow-out fracture of the orbit, which muscle is entrapped and what is the clinical sign?
> Inferior rectus is entrapped in the fractured floor → restricted upgaze and diplopia on looking up

**Q8:** What is the secretomotor supply to the lacrimal gland?
> CN VII (facial nerve) via greater petrosal nerve → pterygopalatine ganglion → zygomatic nerve → lacrimal nerve → lacrimal gland`,
        mnemonics: [],
        keyPoints: ["8 recall questions covering extraocular muscles, pupillary reflex, Horner's syndrome, orbit anatomy, and clinical conditions"],
        textbookRefs: [{ book: "BD Chaurasia", chapter: "Head & Neck - Ch 3", edition: "8th" }, { book: "AK Khurana", chapter: "Anatomy of Eye", edition: "8th" }] },
    ],
  },
];
