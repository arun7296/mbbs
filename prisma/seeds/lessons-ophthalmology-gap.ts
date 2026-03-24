import { TopicLessons } from "./types";

export const ophthalmologyGapLessons: TopicLessons[] = [
  // ============================================================
  // OP-MOD-04-TOP-05: Neuro-Ophthalmology
  // ============================================================
  {
    topicCode: "OP-MOD-04-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "neuro-ophthalmology-foundation",
        title: "Neuro-Ophthalmology — Foundation",
        estimatedMinutes: 20,
        summary: "Fundamentals of pupillary reflexes, visual field defects, cranial nerve palsies, and nystagmus.",
        contentMd: `# Neuro-Ophthalmology — Foundation

## Pupillary Reflexes

### Light Reflex Pathway
Retina → Optic nerve → Optic chiasm → Optic tract → Pretectal nucleus (midbrain) → Bilateral Edinger-Westphal nucleus → CN III → Ciliary ganglion → Short ciliary nerves → Sphincter pupillae

**Direct**: Same eye constricts
**Consensual**: Opposite eye constricts (because pretectal nucleus projects bilaterally)

### RAPD (Relative Afferent Pupillary Defect / Marcus Gunn Pupil)
- Swinging flashlight test
- Affected eye dilates when light swung to it (instead of constricting)
- Indicates: Optic nerve disease (optic neuritis, CRVO, advanced glaucoma)
- NOT seen in cataract (afferent pathway intact)

### Near Reflex
Convergence + Accommodation + Miosis
- Pathway: Cortex → Edinger-Westphal → CN III

### Argyll Robertson Pupil
- Small, irregular pupils
- Absent light reflex, INTACT near reflex ("Accommodation Reflex Present" — ARP)
- Classical: Neurosyphilis
- "Prostitute's pupil" — accommodates but doesn't react (to light)

## Visual Field Defects
| Lesion Site | Field Defect |
|-------------|--------------|
| Optic nerve | Monocular visual loss (ipsilateral) |
| Optic chiasm (center) | Bitemporal hemianopia |
| Optic tract | Contralateral homonymous hemianopia |
| Temporal lobe (Meyer's loop) | Contralateral superior quadrantanopia ("pie in the sky") |
| Parietal lobe | Contralateral inferior quadrantanopia ("pie on the floor") |
| Occipital cortex | Contralateral homonymous hemianopia with macular sparing |

## Cranial Nerve Palsies Affecting the Eye

### CN III (Oculomotor) Palsy
- Eye: "Down and out" (lateral rectus + superior oblique unopposed)
- Ptosis (levator palpebrae)
- Dilated fixed pupil (if complete — pupil-involving)
- Causes: Posterior communicating artery aneurysm (pupil-involving), diabetes (pupil-sparing)

### CN IV (Trochlear) Palsy
- Defective depression in adduction (superior oblique)
- Head tilt to OPPOSITE side (compensatory)
- Most common cause: Head trauma (longest intracranial course)
- Bielschowsky test positive

### CN VI (Abducens) Palsy
- Defective lateral gaze (lateral rectus)
- Most common cranial nerve palsy
- Causes: Raised ICP (false localizing sign), diabetes, MS

## Nystagmus
Involuntary rhythmic oscillation of eyes.
- **Jerk nystagmus**: Fast + slow phase; named by FAST phase direction
- **Pendular nystagmus**: Equal speed in both directions (e.g., congenital, miners')
- **Optokinetic nystagmus**: Normal physiological response (OKN drum)`,
        mnemonics: ["Argyll Robertson = ARP (Accommodation Reflex Present, light reflex absent)", "CN III palsy: 'Down and Out with a Dilated pupil'", "Meyer's loop (Temporal) = Superior defect = 'PIE IN THE SKY'"],
        keyPoints: ["RAPD: optic nerve disease, detected by swinging flashlight test", "Argyll Robertson pupil: neurosyphilis, near reflex intact, light reflex absent", "CN III palsy: down & out, ptosis, dilated pupil if PComA aneurysm", "CN IV: longest course, trauma most common cause", "CN VI: most common CN palsy, false localizing sign in raised ICP"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 20", "Parsons' Diseases of the Eye Ch 21"],
      },
      {
        layer: 2,
        slug: "neuro-ophthalmology-mechanism",
        title: "Neuro-Ophthalmology — Mechanism",
        estimatedMinutes: 25,
        summary: "Anatomical and physiological basis of neuro-ophthalmic signs.",
        contentMd: `# Neuro-Ophthalmology — Mechanism

## Why Pupil is Spared in Diabetic CN III Palsy
- In diabetes, the ischemia affects the CORE of the nerve (motor fibers)
- Parasympathetic pupillary fibers run PERIPHERALLY (on the outer surface of CN III)
- Peripheral fibers have collateral blood supply → spared in ischemia
- In PComA aneurysm: COMPRESSION affects outer fibers FIRST → pupil-involving early

## Anatomy of Visual Pathway
1. **Retinal ganglion cell axons** → optic nerve
2. **Optic chiasm**: Nasal fibers cross, temporal fibers stay ipsilateral
   - Pituitary tumor compresses chiasm from below → bitemporal hemianopia
3. **Optic tract**: Contains ipsilateral temporal + contralateral nasal fibers
4. **Lateral geniculate nucleus (LGN)**: Thalamic relay
5. **Optic radiation**:
   - Meyer's loop (temporal) → inferior retina → superior visual field
   - Parietal fibers → superior retina → inferior visual field
6. **Primary visual cortex** (area 17, calcarine sulcus)
   - Macular representation is large and has dual blood supply → macular sparing in PCA stroke

## Internuclear Ophthalmoplegia (INO)
- Lesion of MLF (medial longitudinal fasciculus)
- Affected side: Failure of ADDUCTION on attempted lateral gaze
- Contralateral eye: Abduction nystagmus
- Convergence preserved (different pathway)
- **Bilateral INO in young adult** = Multiple Sclerosis
- **Unilateral INO in elderly** = Vascular (brainstem stroke)

## Horner Syndrome
Lesion of sympathetic pathway anywhere from hypothalamus to eye:
- **Miosis** (loss of dilator pupillae)
- **Partial ptosis** (loss of Müller's muscle, 1–2 mm)
- **Anhidrosis** (if preganglionic lesion — loss of facial sweating)
- **Enophthalmos** (apparent)

Three-neuron pathway:
1. Central (hypothalamus → C8-T2): Stroke, syringomyelia
2. Preganglionic (C8-T2 → superior cervical ganglion): Pancoast tumor, thyroid surgery
3. Postganglionic (SCG → eye): Carotid dissection, cluster headache

Cocaine test: Does NOT dilate Horner pupil (confirms diagnosis)
Hydroxyamphetamine test: Dilates in central/preganglionic, NOT in postganglionic (localizes)

## Papilledema vs Optic Neuritis vs Optic Atrophy
| Feature | Papilledema | Optic Neuritis | Optic Atrophy |
|---------|-------------|----------------|---------------|
| Disc | Swollen, hyperemic | May be swollen (papillitis) or normal (retrobulbar) | Pale, white |
| Vision | Initially normal (early) | Reduced acutely | Reduced |
| Pupil | Normal (bilateral) | RAPD present | RAPD present |
| Pain | Headache, transient visual obscurations | Pain on eye movement | No pain |
| Bilateral | Usually yes | Usually unilateral | Can be either |
| Cause | Raised ICP | MS, infections | End-stage optic nerve damage |`,
        mnemonics: ["Horner's: Miosis, Ptosis (partial), Anhidrosis = 'MPA' (My Pupil's Affected)", "INO: 'In New Orleans, MLF doesn't work' — failure of adduction"],
        keyPoints: ["Diabetic CN III: pupil spared (ischemia affects core, not periphery)", "PComA aneurysm CN III: pupil involved (compression affects periphery first)", "Bilateral INO in young = MS; unilateral in elderly = stroke", "Horner's: miosis + partial ptosis + anhidrosis", "Cocaine test confirms Horner's; hydroxyamphetamine localizes it"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 20", "Parsons' Ch 21", "Snell's Neuroanatomy Ch 8"],
      },
      {
        layer: 3,
        slug: "neuro-ophthalmology-clinical",
        title: "Neuro-Ophthalmology — Clinical Application",
        estimatedMinutes: 25,
        summary: "Clinical examination, investigation, and management of neuro-ophthalmic conditions.",
        contentMd: `# Neuro-Ophthalmology — Clinical Application

## Pupil Examination
1. **Size**: Normal 3–4 mm in room light
2. **Shape**: Round vs irregular (posterior synechiae, Argyll Robertson)
3. **Direct light reflex**: Shine light → same eye constricts
4. **Consensual reflex**: Shine light → opposite eye constricts
5. **Swinging flashlight test**: Detects RAPD
6. **Near reflex**: Convergence + miosis

## CN III Palsy Workup
- **Pupil-involving** (especially with headache): EMERGENCY — rule out PComA aneurysm
  - CT angiography or MR angiography URGENTLY
  - If negative → catheter angiography
- **Pupil-sparing** (complete palsy in patient >50 with diabetes/hypertension):
  - Likely microvascular — observe for 3 months
  - Daily pupil checks (can evolve to pupil-involving)
  - If no improvement by 3 months → imaging

## Visual Field Testing
- **Confrontation**: Quick bedside test, count fingers in quadrants
- **Perimetry**: Humphrey visual field (automated, gold standard for glaucoma)
- **Goldmann perimetry**: Kinetic, useful for neurological field defects
- **Amsler grid**: Central field (macular disease)

## Management of Specific Conditions

### Papilledema
- Treat underlying cause (raised ICP)
- Urgent neuroimaging (CT/MRI) → if normal → LP (measure opening pressure)
- Idiopathic intracranial hypertension (IIH/pseudotumor cerebri):
  - Typical: Obese young woman with headache
  - Treatment: Weight loss + acetazolamide; surgical shunting if refractory

### Optic Neuritis
- 50% associated with MS (especially retrobulbar type)
- ONTT (Optic Neuritis Treatment Trial) findings:
  - IV methylprednisolone speeds recovery but does NOT change final visual outcome
  - Oral prednisone ALONE increases recurrence (do NOT use alone)
  - IV methylprednisolone 1g/day × 3 days → oral taper
- MRI brain: If ≥2 white matter lesions → high risk of MS

### Horner Syndrome
- History and targeted investigation:
  - Chest X-ray (Pancoast tumor)
  - CT/MRI neck (carotid dissection)
  - MRI brain/spine (central cause)
- Pharmacological testing: Cocaine (confirms) → hydroxyamphetamine (localizes)

## Indian Clinical Context
- Diabetic CN III palsy: Very common given diabetes epidemic in India
- Pancoast tumor causing Horner's: Consider in smokers (high tobacco use in India)
- Trachoma-related corneal opacification and papillary conjunctivitis still prevalent in rural India — distinguish from papilledema
- NPCB (National Programme for Control of Blindness) includes neuro-ophthalmology training`,
        mnemonics: ["CN III pupil-involving = EMERGENCY angiogram; pupil-sparing = observe 3 months"],
        keyPoints: ["Pupil-involving CN III = PComA aneurysm until proven otherwise", "ONTT: IV methylprednisolone speeds recovery; oral steroids alone increase recurrence", "IIH: obese young woman, treat with weight loss + acetazolamide", "Swinging flashlight test detects RAPD", "Horner's workup: CXR + CT/MRI neck + brain MRI"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 20", "Parsons' Ch 21"],
      },
      {
        layer: 4,
        slug: "neuro-ophthalmology-exam",
        title: "Neuro-Ophthalmology — Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam facts for neuro-ophthalmology.",
        contentMd: `# Neuro-Ophthalmology — Exam Prep

## NEXT High-Yield Points
1. **RAPD** = optic nerve disease (NOT cataract, NOT refractive error)
2. **Argyll Robertson pupil** = neurosyphilis = near reflex present, light reflex absent
3. **CN III pupil-involving** = PComA aneurysm emergency
4. **CN III pupil-sparing** = likely microvascular (diabetes)
5. **CN IV** = most common trauma-related palsy (longest intracranial course)
6. **CN VI** = false localizing sign in raised ICP
7. **Bilateral INO in young** = Multiple Sclerosis
8. **Bitemporal hemianopia** = chiasmal compression (pituitary adenoma)
9. **Homonymous hemianopia with macular sparing** = PCA territory stroke
10. **IIH** = obese young woman, papilledema, normal MRI, raised CSF pressure

## Common NEXT Traps
- Optic neuritis: Do NOT give oral steroids alone (increases recurrence per ONTT)
- RAPD is absent in bilateral symmetric optic nerve disease
- Horner syndrome has PARTIAL ptosis (1-2 mm), NOT complete ptosis (that's CN III)
- Papilledema is usually BILATERAL; papillitis (optic neuritis) is usually unilateral
- Weber syndrome = CN III palsy + contralateral hemiplegia (midbrain stroke)
- Foster Kennedy syndrome = ipsilateral optic atrophy + contralateral papilledema (frontal lobe tumor)

## Syndrome Quick Reference
| Syndrome | Features |
|----------|----------|
| Weber | CN III palsy + contralateral hemiplegia |
| Benedict | CN III palsy + contralateral tremor |
| Parinaud | Upgaze palsy + convergence-retraction nystagmus |
| Foster Kennedy | Ipsilateral atrophy + contralateral papilledema |
| Horner | Miosis + partial ptosis + anhidrosis |
| Adie tonic pupil | Dilated pupil, sluggish/absent light reflex, sector palsy on slit lamp |`,
        mnemonics: ["Foster Kennedy: 'Foster the FRONT lobe tumor' — ipsilateral atrophy, contralateral papilledema"],
        keyPoints: ["RAPD not in cataract", "CN III: pupil involvement differentiates aneurysm from diabetes", "Oral steroids alone contraindicated in optic neuritis", "Foster Kennedy: olfactory groove meningioma", "Parinaud: dorsal midbrain lesion (pinealoma)"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 20", "Parsons' Ch 21"],
      },
      {
        layer: 5,
        slug: "neuro-ophthalmology-recall",
        title: "Neuro-Ophthalmology — Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for neuro-ophthalmology.",
        contentMd: `# Neuro-Ophthalmology — Active Recall

**Q: What test detects RAPD?**
A: Swinging flashlight test — affected pupil dilates when light is swung to it.

**Q: What is Argyll Robertson pupil and what is it pathognomonic for?**
A: Small irregular pupils with absent light reflex but intact near reflex. Pathognomonic for neurosyphilis.

**Q: A patient with sudden onset ptosis, dilated fixed pupil, and eye deviated down-and-out — what is the diagnosis and most important cause to rule out?**
A: CN III palsy with pupil involvement. Rule out PComA aneurysm — this is a neurosurgical emergency.

**Q: Why is the pupil spared in diabetic CN III palsy?**
A: Pupillary parasympathetic fibers run peripherally on CN III and have collateral blood supply; diabetic ischemia affects the core of the nerve.

**Q: What visual field defect results from a pituitary tumor?**
A: Bitemporal hemianopia (compression of optic chiasm from below).

**Q: What is INO and what causes bilateral INO in a young adult?**
A: Internuclear ophthalmoplegia — failure of adduction on lateral gaze due to MLF lesion. Bilateral INO in young = Multiple Sclerosis.

**Q: What are the features of Horner syndrome?**
A: Miosis + partial ptosis (1-2mm) + anhidrosis (if preganglionic). Enophthalmos (apparent).

**Q: What is the ONTT recommendation for optic neuritis treatment?**
A: IV methylprednisolone 1g/day × 3 days then oral taper. Do NOT give oral steroids alone (increases recurrence).

**Q: What is Foster Kennedy syndrome?**
A: Ipsilateral optic atrophy + contralateral papilledema — caused by frontal lobe tumor (olfactory groove meningioma).

**Q: What nerve palsy is a false localizing sign in raised ICP?**
A: CN VI (abducens) palsy.`,
        mnemonics: ["PComA = Pupil-Concerning-aneurysm = pupil-involving CN III"],
        keyPoints: ["RAPD: swinging flashlight test", "Argyll Robertson: neurosyphilis", "Pupil-involving CN III = aneurysm", "Bilateral INO in young = MS", "ONTT: IV steroids, NOT oral alone"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 20"],
      },
    ],
  },

  // ============================================================
  // OP-MOD-02-TOP-06: Scleral & Orbital Diseases
  // ============================================================
  {
    topicCode: "OP-MOD-02-TOP-06",
    layers: [
      {
        layer: 1,
        slug: "scleral-orbital-foundation",
        title: "Scleral & Orbital Diseases — Foundation",
        estimatedMinutes: 20,
        summary: "Overview of scleritis, episcleritis, orbital cellulitis, and proptosis.",
        contentMd: `# Scleral & Orbital Diseases — Foundation

## Episcleritis vs Scleritis
| Feature | Episcleritis | Scleritis |
|---------|-------------|-----------|
| Severity | Mild, self-limiting | Severe, vision-threatening |
| Pain | Mild discomfort | Deep, boring pain (worse at night) |
| Redness | Sectoral, bright red | Violaceous (bluish-red) hue |
| Blanching (phenylephrine 2.5%) | Blanches | Does NOT blanch |
| Scleral thinning | No | Yes (can lead to scleromalacia) |
| Systemic association | Usually none | RA (most common), Wegener's, SLE |
| Treatment | NSAIDs, artificial tears | Systemic NSAIDs, immunosuppression |

## Types of Scleritis
- **Anterior diffuse**: Most common, best prognosis
- **Anterior nodular**: Tender nodule
- **Anterior necrotizing with inflammation**: Most severe, scleral necrosis
- **Anterior necrotizing without inflammation** (scleromalacia perforans): Painless, in longstanding RA
- **Posterior scleritis**: Rare, can cause exudative retinal detachment

## Orbital Diseases

### Proptosis (Exophthalmos)
Protrusion of eyeball beyond orbital rim.

**Most common cause in adults**: Thyroid eye disease (Graves' ophthalmopathy)
**Most common cause in children**: Orbital cellulitis

### Classification by Onset
- **Acute**: Orbital cellulitis, hemorrhage, cavernous sinus thrombosis
- **Subacute**: Inflammatory pseudotumor, lymphoma
- **Chronic**: Thyroid eye disease, meningioma, dermoid

### Orbital Cellulitis
- **Preseptal** (periorbital): Anterior to orbital septum, eyelid only, NO proptosis, NO visual loss
- **Postseptal** (orbital): Posterior to septum, proptosis, restricted motility, visual risk
- Most common source: Ethmoidal sinusitis (especially in children)
- Most common organism: Staph aureus, Streptococcus
- Treatment: IV antibiotics (ceftriaxone + metronidazole); CT scan; surgical drainage if abscess

### Graves' Ophthalmopathy
- Most common cause of unilateral AND bilateral proptosis in adults
- Autoimmune: TSH receptor antibodies stimulate orbital fibroblasts → GAG deposition, edema, fibrosis of extraocular muscles
- **Inferior rectus** most commonly affected (restriction → limitation of upgaze)
- NOSPECS classification for grading severity
- Treatment: Smoking cessation, lubricants, IV methylprednisolone, orbital decompression for severe cases`,
        mnemonics: ["Episcleritis BLANCHES with phenylephrine; Scleritis does NOT ('Scleritis is STUBBORN')", "Graves' muscles: 'I'M SLow' = Inferior rectus > Medial > Superior > Lateral (order of involvement)"],
        keyPoints: ["Phenylephrine 2.5% test differentiates episcleritis (blanches) from scleritis (doesn't)", "Scleritis: deep boring pain, associated with RA", "Orbital cellulitis: ethmoid sinusitis most common source", "Graves': most common cause of proptosis in adults", "Inferior rectus most commonly affected in Graves'"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 7, 19", "Parsons' Ch 8, 22"],
      },
      {
        layer: 2,
        slug: "scleral-orbital-mechanism",
        title: "Scleral & Orbital Diseases — Mechanism",
        estimatedMinutes: 20,
        summary: "Pathogenesis of scleral inflammation, orbital autoimmunity, and infection spread.",
        contentMd: `# Scleral & Orbital Diseases — Mechanism

## Scleritis Pathogenesis
- Sclera: Avascular collagen tissue, depends on overlying episcleral vessels
- Type III hypersensitivity: Immune complex deposition in scleral stroma
- Necrotizing type: Vasculitis → ischemia → collagen necrosis
- Scleromalacia perforans: Granulomatous destruction without active inflammation — the "quiet killer" in RA
- Scleral thinning → uveal tissue shows through → "blue sclera" appearance

## Route of Orbital Infection
- Ethmoid sinuses separated from orbit by **lamina papyracea** (paper-thin bone)
- Infection spreads via valveless ophthalmic veins or directly through bone
- Chandler classification of orbital complications of sinusitis:
  1. Preseptal cellulitis
  2. Orbital cellulitis
  3. Subperiosteal abscess
  4. Orbital abscess
  5. Cavernous sinus thrombosis

## Graves' Ophthalmopathy Mechanism
- TSH receptor antibodies cross-react with fibroblasts in orbital connective tissue
- Fibroblasts → differentiate into adipocytes (fat expansion) and produce glycosaminoglycans (GAG)
- GAG deposition is hydrophilic → water absorption → edema and swelling
- Extraocular muscles: Lymphocytic infiltration → fibrosis (late stage)
- Muscle enlargement compresses optic nerve at orbital apex → dysthyroid optic neuropathy (DON)
- Venous congestion → chemosis, periorbital edema

## Cavernous Sinus Thrombosis
- Life-threatening complication of orbital/facial infection
- Spread: Valveless ophthalmic veins → cavernous sinus
- Contains: CN III, IV, V1, V2, VI, internal carotid artery
- Clinical: Bilateral proptosis, ophthalmoplegia, chemosis, decreased vision
- Mortality without treatment: Very high`,
        mnemonics: ["Chandler: 'Pre-Orbital-Sub-Orbital-Cavernous' (POSOC) — severity ladder from mild to lethal"],
        keyPoints: ["Scleritis: type III hypersensitivity with immune complex deposition", "Lamina papyracea: paper-thin bone between ethmoid sinus and orbit", "Graves': TSH-R antibodies → orbital fibroblast activation → GAG deposition", "Cavernous sinus receives valveless ophthalmic veins", "Dysthyroid optic neuropathy: muscle enlargement compresses optic nerve at apex"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 7, 19", "Parsons' Ch 8, 22"],
      },
      {
        layer: 3,
        slug: "scleral-orbital-clinical",
        title: "Scleral & Orbital Diseases — Clinical Application",
        estimatedMinutes: 25,
        summary: "Diagnosis and management of scleral and orbital conditions.",
        contentMd: `# Scleral & Orbital Diseases — Clinical Application

## Scleritis Workup
1. Slit lamp examination (violaceous hue, scleral thinning)
2. Phenylephrine 2.5% blanching test
3. B-scan ultrasonography (posterior scleritis: fluid in Tenon's space — "T sign")
4. Systemic workup: ESR, CRP, RF, ANA, ANCA, uric acid
5. Rheumatology referral

### Scleritis Treatment
- **Non-necrotizing**: Oral NSAIDs (flurbiprofen 100 mg TID); if refractory → oral prednisolone
- **Necrotizing**: Systemic immunosuppression (methotrexate, azathioprine, cyclophosphamide for Wegener's)
- **Scleromalacia perforans**: Treatment of underlying RA; surgical scleral patch graft if perforation imminent

## Orbital Cellulitis Management
1. **Clinical assessment**: Vision, proptosis, motility, pupil reactions
2. **CT scan orbits with contrast**: Mandatory — identifies abscess, sinus disease
3. **Blood cultures**: Before starting antibiotics
4. **IV antibiotics**: Ceftriaxone + metronidazole (or ampicillin-sulbactam)
5. **Surgical drainage**: If subperiosteal/orbital abscess, vision deteriorating, or no improvement in 48 hours
6. **ENT referral**: For sinus drainage

### Preseptal vs Postseptal — Clinical Differentiation
| Feature | Preseptal | Postseptal |
|---------|-----------|------------|
| Proptosis | Absent | Present |
| Eye movements | Full | Restricted |
| Vision | Normal | May be reduced |
| Pain on eye movement | Absent | Present |
| Pupil | Normal | May have RAPD |

## Graves' Ophthalmopathy Management
### Mild (lubricants + observation)
- Artificial tears, sleeping with head elevated
- Smoking cessation (MOST important modifiable factor)

### Moderate-Severe (active inflammation)
- IV methylprednisolone pulse therapy (500 mg/week × 6 weeks, then 250 mg/week × 6 weeks)
- If steroid-refractory: orbital radiotherapy, tocilizumab, teprotumumab

### Sight-Threatening (dysthyroid optic neuropathy)
- EMERGENCY: IV methylprednisolone 1g/day × 3 days
- If no response in 2 weeks: Emergency orbital decompression surgery
- Decompression: Removal of orbital walls to increase orbital volume

### Rehabilitative Surgery (after stable inactive phase)
- Sequence: Decompression → Strabismus surgery → Eyelid surgery (D-S-L order)

## Indian Context
- Orbital cellulitis from sinusitis common in children — often presents late in rural areas
- Mucormycosis-related orbital disease: Increased awareness post-COVID-19 (rhino-orbital-cerebral mucormycosis in diabetics)
- Graves' disease: Common in Indian population; requires thyroid function monitoring`,
        mnemonics: ["Graves' surgery order: 'DSL' = Decompression, Strabismus, Lid (always in this sequence)"],
        keyPoints: ["CT orbit mandatory in orbital cellulitis — look for abscess", "Preseptal: no proptosis, full movements; postseptal: proptosis + restricted movements", "Graves' active: IV methylprednisolone pulse therapy", "DON = emergency → IV steroids → decompression if no response", "Rehabilitative surgery sequence: D-S-L"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 7, 19", "Parsons' Ch 8, 22"],
      },
      {
        layer: 4,
        slug: "scleral-orbital-exam",
        title: "Scleral & Orbital Diseases — Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points for scleral and orbital diseases.",
        contentMd: `# Scleral & Orbital Diseases — Exam Prep

## NEXT High-Yield Points
1. **Phenylephrine test**: Episcleritis blanches, scleritis doesn't
2. **Scleritis most common systemic association**: Rheumatoid arthritis
3. **Scleromalacia perforans**: Painless necrotizing scleritis in longstanding RA
4. **Most common cause of proptosis in adults**: Graves' disease
5. **Most common cause of proptosis in children**: Orbital cellulitis
6. **Source of orbital cellulitis**: Ethmoid sinusitis (via lamina papyracea)
7. **Graves' most affected muscle**: Inferior rectus
8. **B-scan "T sign"**: Posterior scleritis (fluid in Tenon's space)
9. **Chandler classification**: 5 stages of orbital complications of sinusitis
10. **Cavernous sinus thrombosis**: Bilateral proptosis + ophthalmoplegia = life-threatening

## Common Traps
- Preseptal cellulitis does NOT need CT urgently; postseptal DOES
- In Graves', the muscle BELLY is enlarged but TENDON is spared (unlike orbital myositis where tendon is also involved)
- Graves' can occur in euthyroid state (euthyroid Graves' ophthalmopathy)
- Mucormycosis: Black eschar on palate/turbinate in diabetic/immunocompromised — orbital involvement is sight AND life-threatening
- Orbital pseudotumor (idiopathic orbital inflammation): Responds dramatically to steroids ("steroid-responsive proptosis")`,
        mnemonics: ["Graves' muscle: belly enlarged, tendon spared (like a fat snake with a thin tail)"],
        keyPoints: ["Phenylephrine differentiates: blanch = episcleritis", "RA → scleritis → scleromalacia perforans", "Graves': muscle belly enlarged, tendon spared", "Orbital pseudotumor: dramatic steroid response", "Mucormycosis: black eschar + diabetes = emergency"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 7, 19"],
      },
      {
        layer: 5,
        slug: "scleral-orbital-recall",
        title: "Scleral & Orbital Diseases — Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for scleral and orbital diseases.",
        contentMd: `# Scleral & Orbital Diseases — Active Recall

**Q: How do you differentiate episcleritis from scleritis clinically?**
A: Phenylephrine 2.5% test — episcleritis blanches, scleritis does not. Also, scleritis has deep boring pain and violaceous hue.

**Q: What is scleromalacia perforans?**
A: Painless necrotizing scleritis without inflammation, seen in longstanding rheumatoid arthritis. Can lead to scleral perforation.

**Q: What is the most common cause of proptosis in adults?**
A: Graves' ophthalmopathy (thyroid eye disease).

**Q: What muscle is most commonly affected in Graves' ophthalmopathy?**
A: Inferior rectus → restricts upgaze.

**Q: How does orbital cellulitis spread from sinusitis?**
A: Via the lamina papyracea (paper-thin bone between ethmoid sinus and orbit) through valveless veins.

**Q: What differentiates preseptal from postseptal cellulitis?**
A: Postseptal has proptosis, restricted eye movements, and possible visual compromise. Preseptal has only eyelid swelling with normal eye function.

**Q: What is the "T sign" on B-scan ultrasound?**
A: Fluid in Tenon's space — pathognomonic for posterior scleritis.

**Q: What is the most feared complication of orbital cellulitis?**
A: Cavernous sinus thrombosis — bilateral proptosis, ophthalmoplegia, can be fatal.

**Q: What is the rehabilitation surgery sequence in Graves' ophthalmopathy?**
A: D-S-L: Decompression first, then Strabismus surgery, then Lid surgery.

**Q: What is orbital pseudotumor and how does it respond to treatment?**
A: Idiopathic orbital inflammation — responds dramatically to systemic corticosteroids.`,
        mnemonics: ["'T' for Tenon's = T sign on B-scan = posterior scleritis"],
        keyPoints: ["Phenylephrine test is key differentiator", "Graves': inferior rectus, muscle belly not tendon", "Lamina papyracea → infection route", "Cavernous sinus thrombosis is life-threatening", "Orbital pseudotumor = steroid-responsive"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 7, 19"],
      },
    ],
  },

  // ============================================================
  // OP-MOD-05-TOP-04: Ocular Pharmacology & Therapeutics
  // ============================================================
  {
    topicCode: "OP-MOD-05-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "ocular-pharmacology-foundation",
        title: "Ocular Pharmacology — Foundation",
        estimatedMinutes: 20,
        summary: "Overview of ophthalmic drug delivery, mydriatics, miotics, and anti-glaucoma drugs.",
        contentMd: `# Ocular Pharmacology — Foundation

## Routes of Ophthalmic Drug Delivery
- **Topical**: Eye drops (most common), ointments
- **Subconjunctival**: Higher drug levels (antibiotics, steroids)
- **Intravitreal**: Direct injection into vitreous (anti-VEGF, antibiotics)
- **Retrobulbar/Peribulbar**: Anesthesia for surgery
- **Systemic**: When topical insufficient (IV antibiotics for endophthalmitis)

## Mydriatics (Dilate Pupil)

### Parasympatholytics (Cycloplegics)
| Drug | Onset | Duration | Use |
|------|-------|----------|-----|
| Atropine 1% | 30-40 min | 7-14 days | Cycloplegic refraction in children, uveitis |
| Homatropine 2% | 30-60 min | 1-3 days | Uveitis, fundoscopy |
| Cyclopentolate 1% | 30-60 min | 24 hours | Cycloplegic refraction |
| Tropicamide 1% | 20-30 min | 4-6 hours | Fundoscopy (routine) |

### Sympathomimetics
- **Phenylephrine 2.5–10%**: α1 agonist, mydriasis without cycloplegia
- Used with tropicamide for wide dilation before fundoscopy

## Miotics (Constrict Pupil)
- **Pilocarpine 1–4%**: Direct parasympathomimetic, contracts ciliary muscle → opens trabecular meshwork → reduces IOP
- Used in: Acute angle closure glaucoma (initial management)
- Side effects: Brow ache, myopia, dim vision

## Anti-Glaucoma Drugs (IOP-Lowering)
| Class | Example | Mechanism | Notes |
|-------|---------|-----------|-------|
| Prostaglandin analogues | Latanoprost 0.005% | ↑ Uveoscleral outflow | FIRST LINE for POAG; once daily; iris color change |
| Beta-blockers | Timolol 0.5% | ↓ Aqueous production | Contraindicated: asthma, bradycardia, heart block |
| Alpha-2 agonists | Brimonidine 0.2% | ↓ Production + ↑ uveoscleral outflow | Can cross BBB → drowsiness in children |
| CAIs (topical) | Dorzolamide 2% | ↓ Aqueous production | Alternative add-on |
| CAIs (systemic) | Acetazolamide 250mg | ↓ Aqueous production | Acute attacks; side effects: tingling, metabolic acidosis |

## Anti-Infective Ophthalmic Drugs
- **Fluoroquinolones** (moxifloxacin, ofloxacin): Broad-spectrum, first-line for bacterial keratitis
- **Natamycin 5%**: First-line for fungal keratitis (most common ophthalmic antifungal)
- **Acyclovir 3% ointment**: Herpes simplex keratitis
- **Fortified antibiotics**: Cefazolin + tobramycin for severe bacterial ulcers`,
        mnemonics: ["Mydriatics durations: 'A Hot Cup of Tea' = Atropine (longest, 14d) > Homatropine (3d) > Cyclopentolate (24h) > Tropicamide (shortest, 6h)", "POAG first-line: 'Prostaglandin = Primary' (Latanoprost)"],
        keyPoints: ["Latanoprost: first-line POAG, once daily, increases uveoscleral outflow", "Timolol: contraindicated in asthma/bradycardia", "Atropine: longest-acting cycloplegic (7-14 days)", "Natamycin 5%: first-line fungal keratitis", "Pilocarpine: emergency use in acute angle closure glaucoma"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 24", "Parsons' Ch 25"],
      },
      {
        layer: 2,
        slug: "ocular-pharmacology-mechanism",
        title: "Ocular Pharmacology — Mechanism",
        estimatedMinutes: 20,
        summary: "Pharmacological mechanisms of ophthalmic drugs and aqueous humor dynamics.",
        contentMd: `# Ocular Pharmacology — Mechanism

## Aqueous Humor Dynamics
- **Production**: Ciliary epithelium (70% active secretion via Na-K ATPase, 20% ultrafiltration, 10% diffusion)
- **Outflow**: Two pathways:
  - **Trabecular (conventional)**: 90% of outflow → Schlemm's canal → aqueous veins (pressure-dependent)
  - **Uveoscleral (unconventional)**: 10% of outflow → through ciliary muscle to suprachoroidal space (pressure-independent)
- **IOP**: Balance of production vs outflow (normal: 10–21 mmHg)

## Drug Mechanisms

### Prostaglandin Analogues (Latanoprost)
- FP receptor agonist on ciliary muscle
- Remodels extracellular matrix in ciliary muscle → widens intermuscular spaces
- Increases uveoscleral outflow (doubles it)
- Side effects: Iris pigmentation (melanogenesis), eyelash growth, periorbital fat atrophy

### Beta-Blockers (Timolol)
- Blocks β2 receptors on ciliary epithelium
- Reduces cAMP → decreases Na-K ATPase activity → reduces aqueous secretion
- Reduces aqueous production by 20-50%
- Systemic absorption via nasolacrimal duct → bronchospasm, bradycardia
- **Punctal occlusion for 2 minutes after instilling** reduces systemic absorption

### Alpha-2 Agonists (Brimonidine)
- Dual mechanism: Decreases aqueous production (via ciliary body α2 receptors) AND increases uveoscleral outflow
- Also neuroprotective (may protect retinal ganglion cells)
- Brimonidine crosses BBB → CNS depression in children <2 years (use contraindicated)

### Carbonic Anhydrase Inhibitors
- Inhibit CA-II in ciliary epithelium → decreased HCO₃⁻ secretion → decreased aqueous production
- Systemic (acetazolamide): Also acts on kidneys → metabolic acidosis, hypokalemia, paresthesias
- Topical (dorzolamide, brinzolamide): Fewer systemic side effects
- Contraindicated in sulfonamide allergy

### Anti-VEGF Agents (Intravitreal)
- **Ranibizumab**, **Bevacizumab** (off-label), **Aflibercept**
- Block VEGF → reduce neovascularization and vascular permeability
- Used in: Wet ARMD, diabetic macular edema, CRVO macular edema, ROP
- Risk: Endophthalmitis (0.02-0.05% per injection)`,
        mnemonics: ["Aqueous outflow: 'Trabecular 90%, Uveoscleral 10%' = 9:1 ratio", "Timolol absorption prevention: 'Press and Count to 120' (punctal occlusion 2 min)"],
        keyPoints: ["Trabecular outflow: 90%, pressure-dependent; uveoscleral: 10%, pressure-independent", "Latanoprost increases uveoscleral outflow via matrix remodeling", "Timolol systemic absorption via nasolacrimal duct → punctal occlusion", "Brimonidine contraindicated in children <2 years (CNS depression)", "Anti-VEGF: ranibizumab, bevacizumab, aflibercept for wet ARMD"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 24, 9", "Parsons' Ch 25"],
      },
      {
        layer: 3,
        slug: "ocular-pharmacology-clinical",
        title: "Ocular Pharmacology — Clinical Application",
        estimatedMinutes: 20,
        summary: "Practical prescribing, drug combinations, and adverse effects management.",
        contentMd: `# Ocular Pharmacology — Clinical Application

## POAG Treatment Ladder
1. **First-line**: Prostaglandin analogue (latanoprost 0.005% once at night)
2. **Add-on**: Beta-blocker (timolol 0.5% BD) or alpha-2 agonist (brimonidine BD)
3. **Triple therapy**: PG + β-blocker + CAI (dorzolamide)
4. **Maximum medical therapy failure** → Laser (SLT) or surgery (trabeculectomy)

## Acute Angle Closure Glaucoma — Drug Management
Sequence of drugs given:
1. **Pilocarpine 2%** → constricts pupil → opens drainage angle
2. **Timolol 0.5%** → reduces aqueous production
3. **Oral/IV acetazolamide** → rapid IOP reduction
4. **IV mannitol** → osmotic agent for very high IOP (>50 mmHg)
5. **Definitive**: Laser peripheral iridotomy (after IOP controlled)

## Corticosteroid Use in Ophthalmology
### Indications
- Uveitis (topical prednisolone acetate 1%)
- Post-surgical inflammation
- Allergic conjunctivitis (short course)
- Corneal graft rejection prophylaxis

### Steroid Complications in the Eye
- **Steroid-induced glaucoma**: Increased IOP (in ~30% of population — "steroid responders")
  - Mechanism: Decreased trabecular outflow due to GAG deposition in trabecular meshwork
  - Onset: 2–6 weeks of topical steroids
  - Reversible on stopping (usually)
- **Posterior subcapsular cataract**: With prolonged systemic or topical use
- **Delayed wound healing**: Risk of corneal melting in infectious keratitis

### Safer Steroid Alternatives
- Loteprednol, fluorometholone: "Soft steroids" — lower risk of IOP rise
- NSAIDs (ketorolac, nepafenac): Alternative for mild inflammation

## Important Drug Interactions & Precautions
| Drug | Precaution |
|------|-----------|
| Timolol | Avoid in asthma, COPD, bradycardia, heart block |
| Brimonidine | Avoid in children <2 years |
| Acetazolamide | Avoid in sulfonamide allergy, pregnancy |
| Atropine | Avoid in narrow angle (precipitates acute glaucoma) |
| Steroids | Monitor IOP; avoid in undiagnosed red eye |

## Indian Context
- Generic ophthalmic drugs are affordable and widely available
- Natamycin for fungal keratitis — India has high prevalence of fungal corneal ulcers (agricultural injuries)
- Bevacizumab used widely off-label (much cheaper than ranibizumab in India)
- Steroid misuse is rampant — over-the-counter steroid drops → steroid glaucoma is a significant problem`,
        mnemonics: ["AACG drugs in order: 'PTAM' = Pilocarpine, Timolol, Acetazolamide, Mannitol"],
        keyPoints: ["Latanoprost at night (once daily) is POAG first-line", "AACG sequence: pilocarpine → timolol → acetazolamide → mannitol", "Steroid-induced glaucoma: 2-6 weeks onset, reversible", "Atropine contraindicated in narrow angles", "Bevacizumab: cheaper anti-VEGF widely used in India"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 24, 9", "Parsons' Ch 25, 11"],
      },
      {
        layer: 4,
        slug: "ocular-pharmacology-exam",
        title: "Ocular Pharmacology — Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points for ocular pharmacology.",
        contentMd: `# Ocular Pharmacology — Exam Prep

## NEXT High-Yield Points
1. **First-line POAG**: Latanoprost (prostaglandin analogue)
2. **Shortest-acting cycloplegic**: Tropicamide (4–6 hours)
3. **Longest-acting cycloplegic**: Atropine (7–14 days)
4. **Best cycloplegic for children's refraction**: Atropine (most reliable in accommodative children)
5. **Timolol contraindications**: Asthma, COPD, heart block, bradycardia
6. **Natamycin**: First-line fungal keratitis
7. **Steroid glaucoma**: IOP rise after 2–6 weeks of topical steroids
8. **Pilocarpine**: First drug in acute angle closure
9. **Brimonidine**: Avoid <2 years (CNS depression, apnea)
10. **Anti-VEGF endophthalmitis risk**: ~0.02–0.05% per injection

## Common NEXT Traps
- Latanoprost side effect: IRIS COLOR CHANGE (increased melanin) — not reversible
- Timolol: PUNCTAL OCCLUSION reduces systemic absorption
- Acetazolamide causes metabolic ACIDOSIS (not alkalosis) — loss of bicarbonate
- Atropine in narrow angle → precipitates ACUTE angle closure (contraindicated!)
- Steroid drops in herpes simplex keratitis → WORSENING (never use steroids without antiviral cover)
- Phenylephrine: mydriasis WITHOUT cycloplegia (sympathomimetic, doesn't affect accommodation)

## Drug Table for Quick Review
| Drug | Route | First-line For |
|------|-------|---------------|
| Latanoprost | Topical OD (night) | POAG |
| Timolol | Topical BD | POAG add-on |
| Pilocarpine | Topical | Acute angle closure (initial) |
| Acetazolamide | Oral/IV | Acute IOP reduction |
| Natamycin 5% | Topical | Fungal keratitis |
| Moxifloxacin | Topical | Bacterial keratitis/conjunctivitis |
| Prednisolone acetate 1% | Topical | Uveitis |
| Atropine 1% | Topical | Cycloplegic refraction in children |`,
        mnemonics: ["Latanoprost iris change: 'Late at night, iris gets dark' (dark iris color, given at night)"],
        keyPoints: ["Latanoprost: first-line POAG, iris color change", "Atropine: longest cycloplegic, contraindicated in narrow angles", "Timolol: punctal occlusion 2 min after instillation", "Natamycin for fungal keratitis", "Never steroids alone in herpes keratitis"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 24"],
      },
      {
        layer: 5,
        slug: "ocular-pharmacology-recall",
        title: "Ocular Pharmacology — Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for ocular pharmacology.",
        contentMd: `# Ocular Pharmacology — Active Recall

**Q: What is the first-line drug for POAG?**
A: Latanoprost 0.005% (prostaglandin analogue) — once daily at night.

**Q: Which cycloplegic has the shortest duration?**
A: Tropicamide (4–6 hours).

**Q: Why is timolol contraindicated in asthma?**
A: It's a non-selective β-blocker; β2 blockade in lungs → bronchospasm.

**Q: How can systemic absorption of timolol eye drops be reduced?**
A: Punctal occlusion (press on inner canthus) for 2 minutes after instillation.

**Q: What is the first drug given in acute angle closure glaucoma?**
A: Pilocarpine 2% (miotic → opens drainage angle).

**Q: What is the first-line treatment for fungal keratitis?**
A: Natamycin 5% eye drops.

**Q: What is steroid-induced glaucoma and when does it occur?**
A: IOP elevation occurring 2–6 weeks after topical steroid use, due to decreased trabecular outflow from GAG deposition.

**Q: Why is atropine contraindicated in narrow angle glaucoma?**
A: Mydriasis from atropine → iris pushed forward → blocks drainage angle → acute angle closure.

**Q: What is the irreversible side effect of latanoprost?**
A: Iris color change (darkening due to increased melanin in melanocytes).

**Q: Why should topical steroids NEVER be used alone in herpes simplex keratitis?**
A: Steroids suppress immunity → virus replicates unchecked → corneal melting and perforation.

**Q: Name 3 anti-VEGF agents used intravitreally.**
A: Ranibizumab, bevacizumab (off-label), aflibercept.`,
        mnemonics: ["POAG first-line = Latanoprost = 'L for Lasting pressure control'"],
        keyPoints: ["Latanoprost OD at night for POAG", "Tropicamide shortest, atropine longest cycloplegic", "Pilocarpine first in AACG", "Natamycin for fungal keratitis", "Steroids + herpes = disaster"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 24"],
      },
    ],
  },

  // ============================================================
  // OP-MOD-05-TOP-05: Systemic Diseases & the Eye
  // ============================================================
  {
    topicCode: "OP-MOD-05-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "systemic-diseases-eye-foundation",
        title: "Systemic Diseases & the Eye — Foundation",
        estimatedMinutes: 20,
        summary: "Ocular manifestations of diabetes, hypertension, autoimmune diseases, and HIV.",
        contentMd: `# Systemic Diseases & the Eye — Foundation

## Diabetes Mellitus & the Eye
- **Diabetic retinopathy**: Leading cause of blindness in working age adults
- **Cataract**: Earlier onset; "snowflake" cataract in type 1 (rare)
- **Refractive changes**: Fluctuating vision with blood sugar changes (lens swelling)
- **Cranial nerve palsies**: CN III (pupil-sparing), CN VI
- **Glaucoma**: Neovascular glaucoma (NVG) from proliferative diabetic retinopathy
- **Xanthelasma**: Yellowish lipid deposits on eyelids (dyslipidemia association)

## Hypertension & the Eye
### Keith-Wagener-Barker Classification
| Grade | Fundus Finding |
|-------|----------------|
| I | Arteriolar narrowing, silver wiring |
| II | AV nipping (arteriovenous crossing changes) |
| III | Flame-shaped hemorrhages, cotton wool spots, hard exudates |
| IV | Papilledema (with above findings) — malignant hypertension |

### Key Signs
- **Silver/copper wiring**: Thickened arteriolar wall reflects light
- **AV nipping**: Arteriole compresses venule at crossing (Gunn sign, Salus sign)
- **Macular star**: Hard exudates arranged in a star pattern around fovea

## Autoimmune Diseases
| Disease | Ocular Manifestation |
|---------|---------------------|
| Rheumatoid arthritis | Scleritis, keratoconjunctivitis sicca (dry eye) |
| SLE | Cotton wool spots, retinal vasculitis |
| Ankylosing spondylitis | Acute anterior uveitis (most common extra-articular manifestation) |
| Sarcoidosis | Bilateral granulomatous uveitis (mutton-fat KPs) |
| Graves' disease | Thyroid eye disease, proptosis |
| Wegener's (GPA) | Necrotizing scleritis, orbital granuloma |
| Sjögren syndrome | Severe dry eye (keratoconjunctivitis sicca) |

## HIV/AIDS & the Eye
- **CMV retinitis**: Most common ocular opportunistic infection (CD4 <50)
  - "Pizza pie" or "cottage cheese and ketchup" fundus appearance
  - Treatment: IV ganciclovir or intravitreal ganciclovir implant
- **HIV retinopathy**: Cotton wool spots (most common ocular finding in HIV)
- **Herpes zoster ophthalmicus**: CN V1 involvement, risk of keratitis/uveitis
- **Kaposi sarcoma**: Conjunctival or eyelid lesion

## Other Systemic Conditions
- **Vitamin A deficiency**: Night blindness → Bitot spots → keratomalacia → corneal ulcer
- **Wilson disease**: Kayser-Fleischer ring (copper deposition in Descemet's membrane)
- **Marfan syndrome**: Superotemporal lens subluxation
- **Homocystinuria**: Inferonasal lens subluxation`,
        mnemonics: ["Lens subluxation: 'Marfan UP and OUT, Homocystinuria DOWN and IN'", "CMV retinitis: 'Pizza pie appearance at CD4 <50'", "KWB grading: 'Narrowing → Nipping → hemorrhages → papilledema' (1-2-3-4)"],
        keyPoints: ["Diabetic retinopathy: leading cause of blindness in working-age adults", "KWB Grade IV = papilledema = malignant hypertension", "Ankylosing spondylitis: acute anterior uveitis (HLA-B27)", "CMV retinitis at CD4 <50; most common HIV ocular OI", "Vitamin A deficiency → Bitot spots → keratomalacia"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 22", "Parsons' Ch 24"],
      },
      {
        layer: 2,
        slug: "systemic-diseases-eye-mechanism",
        title: "Systemic Diseases & the Eye — Mechanism",
        estimatedMinutes: 20,
        summary: "Pathophysiology of ocular damage in systemic diseases.",
        contentMd: `# Systemic Diseases & the Eye — Mechanism

## Diabetic Retinopathy Pathogenesis
- Chronic hyperglycemia → 4 metabolic pathways activated:
  1. **Polyol pathway**: Glucose → sorbitol (aldose reductase) → osmotic damage to pericytes
  2. **AGE pathway**: Advanced glycation end-products → vascular damage
  3. **PKC pathway**: Protein kinase C activation → VEGF upregulation
  4. **Hexosamine pathway**: Altered gene transcription

- **Pericyte loss** → earliest histological change → microaneurysms
- Pericyte loss → loss of autoregulation → capillary damage → non-perfusion
- Non-perfusion → retinal ischemia → VEGF release → neovascularization
- Neovascularization → vitreous hemorrhage, tractional retinal detachment, NVG

## Hypertensive Retinopathy Mechanism
- **Phase 1 (Vasospastic)**: Arteriolar vasoconstriction → narrowing
- **Phase 2 (Sclerotic)**: Chronic hypertension → intimal thickening, hyaline degeneration → silver/copper wiring
- **Phase 3 (Exudative)**: Severe hypertension → breakdown of blood-retinal barrier → hemorrhages, exudates
- **Phase 4 (Papilledema)**: Malignant hypertension → optic disc edema

## HLA-B27 and Uveitis
- HLA-B27 is present in >90% of ankylosing spondylitis patients
- HLA-B27 molecule triggers immune response: molecular mimicry with bacterial antigens (Klebsiella)
- Acute anterior uveitis: Non-granulomatous, fibrinous, often unilateral alternating
- Associated conditions: AS, reactive arthritis, psoriatic arthritis, IBD

## Vitamin A Deficiency — Ocular Changes (Xerophthalmia)
WHO Classification:
- **XN**: Night blindness (earliest symptom)
- **X1A**: Conjunctival xerosis
- **X1B**: Bitot spots (foamy white triangular spots on conjunctiva — keratinized epithelium + Corynebacterium xerosis)
- **X2**: Corneal xerosis
- **X3A**: Corneal ulcer (<1/3 cornea)
- **X3B**: Keratomalacia (≥1/3 cornea — liquefactive necrosis)
- **XS**: Corneal scar
- **XF**: Xerophthalmic fundus

Treatment: Vitamin A supplementation (WHO schedule: 200,000 IU on day 0, day 1, day 14)`,
        mnemonics: ["Diabetic retinopathy pathways: 'PAGH' = Polyol, AGE, PKC (Protein Kinase C), Hexosamine", "Xerophthalmia: 'Night → Dry → Spots → Ulcer → Melt' (progressive severity)"],
        keyPoints: ["Pericyte loss is earliest change in diabetic retinopathy", "VEGF release from ischemic retina drives neovascularization", "HLA-B27 associated with acute anterior uveitis", "Bitot spots: keratinized conjunctival epithelium in vitamin A deficiency", "Vitamin A: 200,000 IU on days 0, 1, and 14"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 13, 22", "Parsons' Ch 15, 24"],
      },
      {
        layer: 3,
        slug: "systemic-diseases-eye-clinical",
        title: "Systemic Diseases & the Eye — Clinical Application",
        estimatedMinutes: 20,
        summary: "Screening protocols, referral guidelines, and management of ocular complications.",
        contentMd: `# Systemic Diseases & the Eye — Clinical Application

## Diabetic Eye Screening
- **Type 1 DM**: First screening at 5 years after diagnosis, then annually
- **Type 2 DM**: Screening at diagnosis (may have retinopathy already), then annually
- **Pregnancy**: Screen in 1st trimester and each trimester thereafter
- **Method**: Dilated fundoscopy or digital fundus photography (telemedicine option)

### When to Refer Urgently
- Sudden vision loss
- Rubeosis iridis (neovascularization of iris)
- Vitreous hemorrhage
- New vessel formation anywhere

## Hypertension Screening
- Fundoscopy part of target organ damage assessment
- KWB Grade III-IV → urgent BP control + ophthalmology referral
- Macular star pattern → rule out malignant hypertension, neuroretinitis

## Managing Uveitis in Systemic Disease
### Acute Anterior Uveitis (HLA-B27)
- Cycloplegic (homatropine/atropine) — prevents posterior synechiae
- Topical prednisolone acetate 1% — frequent instillation then taper
- Investigate: HLA-B27, sacroiliac joint X-ray, ESR/CRP

### Sarcoid Uveitis
- Bilateral granulomatous: Mutton-fat KPs, iris nodules (Busacca, Koeppe)
- Workup: ACE levels, chest X-ray (bilateral hilar lymphadenopathy), serum calcium
- Treatment: Topical + systemic steroids; steroid-sparing immunosuppression if chronic

## Vitamin A Deficiency — Indian Context
- **National Vitamin A Prophylaxis Programme**: 9 doses of vitamin A (1 lakh IU at 9 months, then 2 lakh IU every 6 months from 16 months to 5 years)
- **Risk factors in India**: Malnutrition, measles, chronic diarrhea
- **Management of xerophthalmia**:
  - XN/X1A/X1B: Oral vitamin A 200,000 IU (day 0, 1, 14)
  - X2/X3: Above + topical antibiotics, eye patching
  - Keratomalacia: Ophthalmology emergency — may need corneal transplant

## HIV Ocular Management
- All HIV patients with CD4 <100: Routine dilated fundoscopy every 3 months
- CMV retinitis: Sight-threatening — start IV ganciclovir or valganciclovir immediately + ART
- ART initiation may cause immune recovery uveitis (IRU) — paradoxical worsening as immune system recovers`,
        mnemonics: ["DM screening: 'Type 1 at 5 years, Type 2 at diagnosis' (T1D later because onset known)"],
        keyPoints: ["Type 2 DM: screen at diagnosis (may already have retinopathy)", "KWB Grade III-IV: urgent referral", "HLA-B27 uveitis: cycloplegics + topical steroids", "Indian Vitamin A programme: 9 doses from 9 months to 5 years", "CMV retinitis: sight-threatening, start ganciclovir immediately"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 13, 22", "ICO Guidelines"],
      },
      {
        layer: 4,
        slug: "systemic-diseases-eye-exam",
        title: "Systemic Diseases & the Eye — Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam points for ocular manifestations of systemic diseases.",
        contentMd: `# Systemic Diseases & the Eye — Exam Prep

## NEXT High-Yield Points
1. **Earliest change in diabetic retinopathy**: Pericyte loss → microaneurysms
2. **Most common ocular finding in HIV**: Cotton wool spots (HIV retinopathy)
3. **CMV retinitis CD4 level**: <50 cells/µL
4. **Bitot spots**: Vitamin A deficiency (keratinized epithelium)
5. **KWB Grade IV**: Papilledema = malignant hypertension
6. **Most common extra-articular manifestation of AS**: Acute anterior uveitis
7. **Kayser-Fleischer ring**: Wilson disease (copper in Descemet's membrane)
8. **Marfan lens subluxation**: Superotemporal
9. **Homocystinuria lens subluxation**: Inferonasal
10. **Sarcoidosis eye**: Bilateral granulomatous uveitis with mutton-fat KPs

## Common NEXT Traps
- Cotton wool spots in HIV ≠ CMV retinitis (cotton wool spots are benign HIV retinopathy)
- Diabetic CN III: pupil SPARED (unlike PComA aneurysm)
- Neovascular glaucoma (NVG) in diabetes: Intractable, painful — poor prognosis
- Macular star: Can be hypertension, papilledema, OR neuroretinitis (Bartonella) — not pathognomonic
- Immune recovery uveitis: Paradoxical worsening after ART initiation in HIV
- Cherry red spot: CRAO, Tay-Sachs, Niemann-Pick, Gaucher's

## Rapid Association Table
| Sign | Disease |
|------|---------|
| Kayser-Fleischer ring | Wilson disease |
| Sunflower cataract | Wilson disease |
| Band keratopathy | Hypercalcemia, JIA |
| Cherry red spot | CRAO, Tay-Sachs |
| Roth spots | Infective endocarditis, leukemia |
| Bitot spots | Vitamin A deficiency |
| Blue sclera | Osteogenesis imperfecta |
| Angioid streaks | Pseudoxanthoma elasticum, Paget's, sickle cell |
| Lens subluxation (up) | Marfan syndrome |
| Lens subluxation (down) | Homocystinuria |`,
        mnemonics: ["Cherry Red Spot: 'Tay-Sachs Needs Gaucher's CRAO' (most common causes)", "Blue Sclera: 'OI makes Blue sclera' (Osteogenesis Imperfecta)"],
        keyPoints: ["Pericyte loss = earliest diabetic retinopathy change", "CMV retinitis at CD4 <50", "Marfan up, homocystinuria down (lens subluxation)", "KF ring = Wilson's", "Roth spots = endocarditis/leukemia"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 22", "Parsons' Ch 24"],
      },
      {
        layer: 5,
        slug: "systemic-diseases-eye-recall",
        title: "Systemic Diseases & the Eye — Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for systemic diseases and the eye.",
        contentMd: `# Systemic Diseases & the Eye — Active Recall

**Q: What is the earliest histological change in diabetic retinopathy?**
A: Pericyte loss → leads to microaneurysm formation.

**Q: What does KWB Grade IV fundoscopy indicate?**
A: Papilledema — indicates malignant hypertension.

**Q: What is the most common ocular manifestation of HIV?**
A: Cotton wool spots (HIV retinopathy — benign, non-sight-threatening).

**Q: At what CD4 count does CMV retinitis occur?**
A: CD4 <50 cells/µL.

**Q: What is the direction of lens subluxation in Marfan syndrome vs Homocystinuria?**
A: Marfan: superotemporal (UP and OUT). Homocystinuria: inferonasal (DOWN and IN).

**Q: What is a Kayser-Fleischer ring and which disease is it associated with?**
A: Copper deposition in Descemet's membrane of the cornea — Wilson disease.

**Q: What is the most common extra-articular manifestation of ankylosing spondylitis?**
A: Acute anterior uveitis (HLA-B27 associated).

**Q: What is the WHO treatment schedule for xerophthalmia?**
A: Vitamin A 200,000 IU on day 0, day 1, and day 14.

**Q: What are Roth spots associated with?**
A: Infective endocarditis (white-centered retinal hemorrhages) — also seen in leukemia.

**Q: When should a Type 2 diabetic be first screened for retinopathy?**
A: At the time of diagnosis (retinopathy may already be present).

**Q: What is immune recovery uveitis?**
A: Paradoxical inflammatory reaction in the eye after ART initiation in HIV patients with prior CMV retinitis.`,
        mnemonics: ["DM screening: 'Type 2 at Two (diagnosis = day 0), Type 1 at Five'"],
        keyPoints: ["Pericyte loss earliest in DR", "KWB IV = papilledema = malignant HTN", "CMV at CD4 <50", "Marfan up, homocystinuria down", "Type 2 DM: screen at diagnosis"],
        textbookRefs: ["AK Khurana Ophthalmology Ch 22"],
      },
    ],
  },
];
