import type { TopicLessons } from "./content-loader";

export const ophthalmologyLessons: TopicLessons[] = [
  {
    topicCode: "OP-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "optics-image-formation-foundation",
        title: "Optics & Image Formation - Foundation",
        estimatedMinutes: 20,
        summary: "Basics of optical refraction, corneal power, lens accommodation, pupil function, and near reflex.",
        contentMd: `# Optics & Image Formation - Foundation

## Optical Properties of the Eye

### Refractive Components
- **Cornea**: 43 diopters (2/3 of eye's refractive power) - largest contributor
- **Lens**: 20 diopters at rest, can increase to 34D with accommodation
- **Aqueous humor**: Minimal refractive change
- **Vitreous**: Minimal refractive change
- **Total refractive power**: ~60 diopters
- **Focal length**: ~24mm (matches approximate retinal distance)

### Image Formation Process
1. Light enters eye at cornea (air-to-cornea interface, largest refraction)
2. Cornea bends light maximally (43D power)
3. Lens fine-tunes focus via accommodation (additional 0-14D)
4. Image forms on retina (inverted, real, magnified)
5. Photoreceptors detect image and send signals to brain

## Accommodation Mechanism

### Ciliary Muscle & Lens Changes
- **Ciliary muscle contraction**: Parasympathetic stimulation (CN III)
- **Zonular fiber relaxation**: Tension on zonules decreases
- **Lens thickening**: Elastic lens bulges equatorially
- **Lens power increase**: From 20D to 34D (increase of 14D possible in young)
- **Near reflex components**: Accommodation + convergence + miosis (ACM triad)

### Age-Related Changes
- **Age 8**: Accommodation amplitude ~14 diopters, near point 10cm
- **Age 25**: Accommodation amplitude ~10D, near point 10cm
- **Age 45**: Accommodation amplitude ~1-2D, near point >30cm (presbyopia symptomatic)
- **Age 65**: Accommodation amplitude ~0D, near point >100cm
- **Mechanism**: Lens nucleus becomes sclerotic (stiffens), loses elasticity

## Pupil Function

### Pupil Light Reflex
- **Afferent**: CN II (optic nerve) carries sensory input
- **Efferent**: CN III (oculomotor) carries parasympathetic fibers
- **Muscles**: Sphincter (circular, parasympathetic) constricts; dilator (radial, sympathetic) dilates
- **Normal response**: Bilateral equal constriction to light
- **Direct reflex**: Light in eye → constriction of same eye
- **Consensual**: Light in eye → constriction of opposite eye

### Near Reflex Components
1. **Accommodation**: Lens thickens (ciliary muscle contracts)
2. **Convergence**: Eyes turn inward (medial recti contract)
3. **Miosis**: Pupils constrict (sphincter muscle contracts)
- All three triggered together by near visual stimulus

## Key Optical Concepts
- **Diopter**: Unit of refractive power; 1D = 1 meter focal length
- **Myopia**: Light focuses in front of retina (concave lens correction)
- **Hyperopia**: Light focuses behind retina (convex lens correction)
- **Astigmatism**: Different meridians focus at different distances (cylindrical lens)`,
        mnemonics: [
          {
            text: "Cornea 43D + Lens 20D (rest) = 63D total refractive power",
            explanation: "Main refractive components of eye",
          },
          {
            text: "Accommodation triad: thickening (lens) + convergence (medial recti) + miosis (pupils)",
            explanation: "Three components of near response",
          },
          {
            text: "CN II → CN III: light reflex afferent to efferent pathway",
            explanation: "Pupillary light reflex neural pathway",
          },
          {
            text: "Age 45 presbyopia begins when accommodation amplitude drops below 2-3D",
            explanation: "Presbyopia onset correlation",
          },
        ],
        keyPoints: [
          "Cornea provides 2/3 of eye's refractive power (43D out of 60D)",
          "Lens accommodation ranges from 20D (rest) to 34D (maximally contracted)",
          "Image formed on retina is inverted, real, and magnified",
          "Accommodation involves ciliary muscle, lens, and pupil (accommodation triad)",
          "Pupillary light reflex mediated by CN II (afferent) and CN III (efferent)",
          "Near reflex involves accommodation, convergence, and miosis simultaneously",
          "Accommodation amplitude decreases predictably with age (presbyopia develops)",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "1", edition: "7th" },
          { book: "Parsons' Diseases of the Eye", chapter: "1", edition: "23rd" },
        ],
      },
      {
        layer: 2,
        slug: "optics-image-formation-mechanism",
        title: "Optics & Image Formation - Mechanism",
        estimatedMinutes: 25,
        summary: "Snell's law, corneal refraction physics, accommodation physiology, optical aberrations, and depth of field.",
        contentMd: `# Optics & Image Formation - Mechanism

## Refraction Principles: Snell's Law

### Law of Refraction
- **Formula**: n₁ sin θ₁ = n₂ sin θ₂
- **Air-to-cornea interface**: Largest refractive index change (air 1.0 to cornea 1.376)
- **Result**: Most bending occurs at cornea surface (first refracting surface)
- **Aqueous-to-lens**: Additional refraction at lens surfaces
- **Lens-to-vitreous**: Minimal additional refraction

### Focal Length & Focal Distance
- **Focal length**: Distance where parallel rays converge after refraction
- **Normal eye**: Focal length ~24mm (matches retinal distance)
- **Myopic eye**: Focal length shorter than axial length → image in front of retina
- **Hyperopic eye**: Focal length longer than axial length → image behind retina

## Accommodation Physiology

### Ciliary Muscle Anatomy & Action
1. **Ciliary muscle innervation**: Parasympathetic CN III (Edinger-Westphal nucleus)
2. **At rest**: Zonular tension pulls on lens capsule (lens stretched, flattened)
3. **Contraction**: Ciliary muscle contracts → reduces zonular tension
4. **Result**: Lens elasticity causes equatorial bulging → increases power
5. **Lens shape change**: From ~8.5mm diameter flattened to ~9.5mm diameter thickened

### Age-Related Accommodation Loss (Presbyopia)
- **Mechanism**: Lens nucleus becomes sclerotic with age (loses elasticity)
- **Age 8**: Amplitude ~14D, near point 10cm
- **Age 30**: Amplitude ~6D, near point 17cm
- **Age 45**: Amplitude ~1.5D, near point 67cm (presbyopia symptomatic)
- **Age 55**: Amplitude ~0.5D, near point >100cm
- **Age 65**: Amplitude ~0D (no accommodation possible)
- **Cause**: Lens protein crosslinks accumulate, reducing lens deformability

### Accommodation-Vergence Coupling
- **Neural linkage**: Accommodation command simultaneously triggers convergence
- **Anatomical substrate**: Medial subnuclei CN III for both functions
- **Consequence**: Cannot converge without accommodating (in normal eye)

## Optical Aberrations

### Types of Optical Aberrations

**Spherical Aberration**
- Peripheral rays focus differently than central rays
- Causes edge blur, loss of image quality
- Pupil size affects: smaller pupil reduces spherical aberration

**Chromatic Aberration**
- Different wavelengths (colors) focus at different distances
- Blue light focuses closer than red light
- Creates color fringing, especially at edges

**Astigmatism**
- Different meridians have different refractive power
- Can be corneal (most common), lenticular, or combined
- With-the-rule (vertical steeper) vs against-the-rule (horizontal steeper)

**Higher-Order Aberrations**
- Coma, trefoil: More complex distortions
- Less common than spherical/chromatic

## Depth of Field

### Concept & Clinical Significance
- **Definition**: Range where image remains acceptably sharp
- **Determined by**: Pupil size, refractive error, object distance
- **Pinhole effect**: Smaller pupil increases depth of field
- **Near reflex benefit**: Pupil constriction with accommodation increases depth of field

### Near Reflex Advantage
- **All three components together**: Accommodation + convergence + miosis
- **Result**: Allows clear focus at near with range of accommodation
- **Pupil constriction**: Reduces spherical aberration, increases depth of field
- **Convergence**: Eyes aligned for binocular vision

## Convergence

### Definition & Muscles
- **Definition**: Inward turning of eyes to maintain single binocular image
- **Muscles involved**: Medial recti (CN III medial subnuclei control both)
- **Amount varies**: From minimal at distance to maximal at near
- **Accommodation-convergence coupling**: 1 diopter accommodation triggers ~4 prism diopters convergence`,
        mnemonics: [
          {
            text: "Snell's law: n₁sinθ₁ = n₂sinθ₂ (air-cornea interface has largest n change)",
            explanation: "Refraction principle at optical interface",
          },
          {
            text: "Accommodation: parasympathetic → ciliary muscle → zonules relax → lens thickens",
            explanation: "Accommodation pathway and mechanism",
          },
          {
            text: "Age presbyopia: 8yr=14D, 25yr=10D, 45yr=2D, 65yr=0D (predictable decline)",
            explanation: "Accommodation loss with age",
          },
          {
            text: "Smaller pupil = greater depth of field (pinhole effect protects against blur)",
            explanation: "Pupil size effect on vision",
          },
        ],
        keyPoints: [
          "Cornea-air interface provides most refraction (n change 1.0→1.376)",
          "Lens accommodation decreases with age; presbyopia onset ~age 45",
          "Ciliary muscle contraction reduces zonular tension, allowing lens to thicken",
          "Accommodation amplitude: 14D (age 8) → 0D (age 65)",
          "Accommodation triad: lens thickening + convergence + miosis all together",
          "Optical aberrations (spherical, chromatic, astigmatism) degrade image quality",
          "Pupil constriction increases depth of field and reduces spherical aberration",
          "Near reflex brings accommodation, convergence, and miosis together",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "2", edition: "7th" },
          {
            book: "Parsons' Diseases of the Eye",
            chapter: "2",
            edition: "23rd",
          },
        ],
      },
      {
        layer: 3,
        slug: "optics-image-formation-clinical",
        title: "Optics & Image Formation - Clinical",
        estimatedMinutes: 25,
        summary: "Refraction testing, accommodation amplitude measurement, pupil examination, presbyopia assessment and management.",
        contentMd: `# Optics & Image Formation - Clinical

## Refraction Examination

### Distance Testing
- **Chart distance**: 6 meters (20 feet in US)
- **Eye chart types**: Landolt C, Snellen, logMAR
- **Procedure**: Occlude one eye, read smallest visible line
- **Notation**: 6/6 (20/20) = sees at 6m what normal sees at 6m; 6/60 = sees at 6m what normal sees at 60m
- **BSCVA**: Best spectacle/contact corrected visual acuity (endpoint of refraction)

### Objective Refraction
- **Retinoscopy**: Gold standard; light reflex movement indicates refractive error
- **Autorefraction**: Machine measures refraction automatically
- **A-scan ultrasound**: Measures axial length (in myopia or when refraction not possible)

### Subjective Refraction
- **Phoropter testing**: Patient views through lens combinations
- **Endpoint**: Best visual acuity with minimal lens power (least negative/most positive)
- **Red-green test**: Final refinement of spherical power
- **Astigmatism determination**: Axis and power of cylindrical lens

## Accommodation Assessment

### Near Point of Accommodation (NPA)
- **Measurement**: Distance at which patient first reports blur (accommodation amplitude limit)
- **Age 8**: ~10cm (14D accommodation)
- **Age 25**: ~10cm (10D accommodation)
- **Age 45**: ~30cm (2D accommodation) - presbyopia symptomatic threshold
- **Age 55+**: >100cm (minimal accommodation)
- **Formula**: Accommodation amplitude (D) = 100 / near point distance (cm)

### Accommodation Amplitude Calculation
- **Example**: If near point at 25cm, amplitude = 100/25 = 4 diopters
- **Clinical use**: Identifies when patient needs reading glasses
- **Expected by age**: Compare to age-predicted amplitude

### Accommodation Lag
- **Definition**: Difference between accommodation demand and actual accommodation
- **Occurs with**: High viewing distances or fatigue
- **Clinical relevance**: May contribute to presbyopic symptoms

## Pupil Examination

### Light Reflex Testing
- **Technique**: Shine light in eye; observe pupil constriction
- **Normal**: Bilateral equal constriction within 1 second
- **Abnormalities**:
  - **RAPD (relative afferent pupillary defect)**: Affected eye has weaker response (optic nerve lesion)
  - **Anisocoria**: Pupils unequal size (pathology or normal variation)
  - **Reactivity**: Should still constrict even if unequal size

### Accommodation Reflex Assessment
- **Test**: Ask patient to look at distant object, then at near object (25cm)
- **Expected response**: Pupils constrict (miosis) during accommodation
- **Component 1**: Accommodation (lens thickens)
- **Component 2**: Convergence (eyes turn inward)
- **Component 3**: Miosis (pupils constrict)
- **Dissociation**: Normal light reflex but absent accommodation suggests brainstem lesion (Argyll Robertson pupil in neurosyphilis)

## Presbyopia Assessment & Management

### Definition
- Age-related loss of accommodation from lens stiffening
- Becomes symptomatic ~age 40-45 when accommodation amplitude <2-3D
- Affects near vision specifically

### Symptoms
- Difficulty reading small print at normal distance (~33cm)
- Eye strain with prolonged near work
- Need to hold reading material at arm's length
- Worse in poor lighting (requires larger pupil for more light; but larger pupil has less depth of field)

### Management Strategies
1. **Reading glasses**: For near work, removed for distance
2. **Bifocals**: Distance prescription in top, near add in bottom
3. **Progressive lenses**: Gradual transition from distance to near
4. **Contact lenses**:
   - Monovision: Non-dominant eye set for near focus (dominant for distance)
   - Modified monovision: Both eyes corrected for distance, with mini-monovision add
5. **Surgical options** (emerging):
   - Corneal inlays: Small aperture placed in cornea for depth of field
   - Refractive lensotomy: Modification of lens shape
   - Implantable lens: Focus-adjustable IOL

### Presbyopic Bifocal/Progressive Add Calculation
- **Add power**: Depends on presbyopic amplitude loss and occupation
- **Typical**: +1.25D to +3.50D depending on near work demands
- **Occupational**: Computer workers may need less; readers need more`,
        mnemonics: [
          {
            text: "6/6 (20/20) = normal vision; patient sees at 6m what normal sees at 6m",
            explanation: "Visual acuity notation interpretation",
          },
          {
            text: "Accommodation amplitude (D) = 100 / near point distance (cm)",
            explanation: "Formula for calculating accommodation",
          },
          {
            text: "Age ~45 = presbyopia begins; accommodation amplitude drops below 2-3D",
            explanation: "Presbyopia onset timing",
          },
          {
            text: "Light reflex: CN II afferent → CN III efferent (parasympathetic to sphincter)",
            explanation: "Pupil light reflex pathway",
          },
        ],
        keyPoints: [
          "Visual acuity 6/6 = patient reads at 6m what standard eye reads at 6m",
          "Refraction determines refractive error magnitude and axis (sphero-cylindrical)",
          "Accommodation amplitude decreases predictably with age (presbyopia)",
          "Near point moves from 10cm (age 8) to >100cm (age 65)",
          "Presbyopia: lens stiffness reduces accommodation capacity",
          "Pupil light reflex tests CN II (afferent) and CN III (efferent) integrity",
          "Accommodation reflex dissociation suggests neurologic pathology",
          "Presbyopia management: glasses (simplest) → bifocals → progressives → surgical options",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "3", edition: "7th" },
          {
            book: "Parsons' Diseases of the Eye",
            chapter: "3",
            edition: "23rd",
          },
        ],
      },
      {
        layer: 4,
        slug: "optics-image-formation-exam",
        title: "Optics & Image Formation - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts on accommodation, presbyopia, refraction, visual acuity notation, and age-related changes.",
        contentMd: `# Optics & Image Formation - Exam Prep

## Key Facts
1. Cornea 43D (2/3 of power), Lens 20D at rest
2. Total refractive power ~60 diopters
3. Image on retina: inverted, real, magnified
4. Accommodation amplitude age 8: ~14D; age 45: ~2D; age 65: ~0D
5. Near point age 8: ~10cm; age 45: ~30cm; age 65: >100cm
6. Presbyopia becomes symptomatic age 40-45
7. Ciliary muscle: parasympathetic innervation (CN III)
8. Pupil constriction: CN III parasympathetic
9. Light reflex: CN II afferent, CN III efferent
10. Accommodation triad: lens thickening + convergence + miosis

## Accommodation Amplitude by Age
| Age | Amplitude (D) | Near Point |
|-----|---------------|-----------|
| 8   | 14            | 10cm      |
| 20  | 10            | 10cm      |
| 30  | 6             | 17cm      |
| 40  | 3             | 33cm      |
| 45  | 1.5           | 67cm      |
| 50  | 0.5           | >100cm    |
| 65  | 0             | >100cm    |

## Refraction Formulas
- **Accommodation (D) = 100 / near point distance (cm)**
- **Visual acuity**: 6/X = patient sees at 6m what normal sees at X meters
- **Diopter**: Unit of refractive power; inverse of focal length in meters

## Presbyopia Pearls
- Onset age: 40-45 years
- First symptom: Difficulty reading small print
- Progression: Stabilizes by age 55-60
- Management progression: Reading glasses → bifocals → progressives → surgical

## Pupil Innervation
- **Dilation (mydriasis)**: Radial muscle, sympathetic
- **Constriction (miosis)**: Sphincter muscle, parasympathetic (CN III)
- **Light reflex**: CN II (afferent) → CN III (efferent)
- **Accommodation reflex**: CN III to ciliary muscle + sphincter

## NEET-Style Quick Reference
- **Best visual acuity endpoint**: Least negative/most positive lens that gives clearest vision
- **Accommodation deficit**: Lost at rate ~0.5D per decade after age 8
- **Presbyopia**: When accommodation amplitude insufficient for patient's near work (typically <3D)
- **CN III palsy**: Mydriasis (dilated pupil) + accommodation paralysis
- **Argyll Robertson pupil**: Light reflex absent, accommodation present (neurosyphilis)`,
        mnemonics: [
          {
            text: "43D cornea, 20D lens = 63D power total",
            explanation: "Refractive power distribution",
          },
          {
            text: "Age ~45 presbyopia begins when accommodation ~2D",
            explanation: "Presbyopia onset criteria",
          },
          {
            text: "6/6 = normal; 6/60 = sees at 6m what normal sees at 60m",
            explanation: "Visual acuity notation",
          },
          {
            text: "CN II → CN III light reflex pathway",
            explanation: "Pupil pathway memory",
          },
        ],
        keyPoints: [
          "Cornea: 43D (2/3); Lens: 20D (1/3) of total 60D refractive power",
          "Accommodation amplitude predictable by age; presbyopia inevitable",
          "Presbyopia: lens stiffness reduces accommodation after age 40-45",
          "Near point doubles roughly every 10-15 years after age 8",
          "Accommodation formula: Amplitude (D) = 100/near point (cm)",
          "Light reflex tests afferent (CN II) and efferent (CN III) pathways",
          "Presbyopia management: correction essential for near work after age 45",
          "Visual acuity 6/6 = patient's eye matches normal eye performance",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "1-3", edition: "7th" },
          { book: "Parsons' Diseases of the Eye", chapter: "1-3", edition: "23rd" },
        ],
      },
      {
        layer: 5,
        slug: "optics-image-formation-recall",
        title: "Optics & Image Formation - Active Recall",
        estimatedMinutes: 20,
        summary: "10 clinical questions on accommodation, presbyopia calculations, refraction, and pupil examination.",
        contentMd: `# Active Recall: Optics & Image Formation

**Q1: Accommodation Amplitude Calculation**
A 38-year-old complains of difficulty reading at normal distance. Near point measured at 30cm. Calculate accommodation amplitude and interpret.
> **Answer**: Amplitude = 100/30 = 3.3 diopters. Normal for age 38 is ~4-5D. This patient shows early presbyopic symptoms (amplitude dropping below 4D), explains difficulty with near vision. Solution: reading glasses with +1.50 to +2.00D power for sustained near work.

**Q2: Presbyopia Onset & Management**
44-year-old seeing well at distance but struggling with fine print, especially in poor lighting. What's happening and management?
> **Answer**: Presbyopia onset (age 44 at threshold). Accommodation amplitude dropping below 2D. Lighting issue: larger pupil in poor light has less depth of field, so accommodation lag more noticeable. Management: Reading glasses (bifocals or progressives); improve lighting for near work; periodic accommodation breaks.

**Q3: Accommodation Amplitude vs Age**
If a 25-year-old has accommodation amplitude of 10D, at what age would this patient likely need reading glasses?
> **Answer**: Progressive loss ~0.5D per decade. Age 25: 10D; Age 35: 7.5D; Age 45: 5D; Age 55: 2.5D (presbyopic, needs glasses). Presbyopia symptomatic when amplitude <2-3D, typically age 45-50. This patient needs glasses when amplitude insufficient for occupational demands (~age 50 if office worker).

**Q4: Near Point Measurement**
Patient reports near point at 50cm. What is accommodation amplitude and what does this indicate?
> **Answer**: Amplitude = 100/50 = 2D. This indicates presbyopia present (accommodation <3D). Patient age likely 50+ years. For comparison: age 40 near point ~33cm (amplitude 3D, presbyopia barely starting); age 60 near point >100cm (amplitude ~0.5D or less). Management: reading glasses mandatory.

**Q5: Corneal vs Lenticular Refraction**
In total refractive power of 60D, cornea contributes 43D and lens 20D. Explain why cornea has such large contribution despite lens ability to change power.
> **Answer**: Air-cornea interface has largest refractive index change (1.0 to 1.376). Snell's law: n₁sinθ₁=n₂sinθ₂; larger Δn = larger angle change for parallel rays. Aqueous-lens and lens-vitreous interfaces have smaller Δn (aqueous 1.336 to lens 1.41, less change than air-cornea). Lens advantage: can change shape (accommodation), not total power. Cornea fixed (cannot change); laser LASIK exploits this to reshape cornea for refractive error.

**Q6: Accommodation Triad Components**
Describe the three components of the near reflex and anatomical substrate.
> **Answer**: (1) **Accommodation**: Lens thickens (ciliary muscle contracts via parasympathetic CN III); (2) **Convergence**: Eyes turn inward (medial recti contract, CN III medial subnuclei); (3) **Miosis**: Pupils constrict (sphincter muscle via CN III parasympathetic). **Anatomical substrate**: Medial longitudinal fasciculus connects accommodation/convergence centers to CN III medial subnuclei. Cannot accommodate without convergence (unlike presbyopic lens implants which decouple them). **Neural integration**: Frontal eye fields and midbrain coordinating centers drive all three together.

**Q7: CN III Palsy Effects**
CN III palsy causes mydriasis (dilated pupil) and accommodation loss. Explain both findings mechanistically.
> **Answer**: **Mydriasis**: CN III carries parasympathetic fibers to sphincter muscle. Loss of parasympathetic → sphincter paralyzed → unopposed sympathetic (dilator muscle) → pupil dilated. **Accommodation loss**: CN III also innervates ciliary muscle. Loss of parasympathetic → ciliary muscle cannot contract → zonules cannot relax → lens cannot thicken → accommodation impossible. **Clinical**: Both findings expected with CN III palsy; light reflex still responsive (CN II afferent pathway intact, but efferent CN III damaged).

**Q8: Argyll Robertson Pupil Dissociation**
Patient has normal light reflex but cannot accommodate. Pupil responds to light but not near stimulus. Where is lesion?
> **Answer**: Dissociation of light reflex (present) vs accommodation reflex (absent). **Anatomy**: Light reflex uses CN II→CN III pathway at level of pupil (midbrain dorsal level). Accommodation uses higher neural centers → CN III ciliary muscle (intermediate nucleus level). **Lesion location**: Dorsal midbrain (Sylvian aqueduct region) can selectively damage light reflex pathways while sparing accommodation pathways. **Classic condition**: Argyll Robertson pupil in neurosyphilis (dorsal midbrain involvement). **Result**: Pupils constrict to accommodation but not light (reverse of normal).

**Q9: Presbyopia & Occupational Management**
45-year-old computer programmer becoming presbyopic. How would refraction and correction differ from 45-year-old reader?
> **Answer**: **Both presbyopic** (accommodation amplitude ~1.5D). **Difference in near add power**: (1) **Computer worker**: Viewing distance ~65cm (accommodation demand ~1.5D). Near add +1.25 to +1.50D adequate. Can use same lens for screen and desk. (2) **Reader**: Viewing distance ~33cm (demand ~3D). Need stronger near add +2.50 to +3.00D. Bifocals or progressives with larger near zone needed. **Intermediate zone**: Computer workers benefit from intermediate correction (~50-60cm) in progressive lenses. **Occupational modification**: Computer worker can adjust screen distance if wearing wrong correction; reader cannot adjust book distance easily.

**Q10: Pupil Size & Depth of Field**
Why does squinting (reducing pupil) temporarily improve vision in a patient with uncorrected refractive error?
> **Answer**: **Pinhole effect**: Smaller pupil (miosis) acts like pinhole camera, increasing depth of field. **Mechanism**: With large pupil, spherical aberration of peripheral rays causes blur. Smaller pupil blocks peripheral rays (eliminates spherical aberration pathway). **Result**: Fewer rays = sharper image despite refractive error. **Clinical application**: Pinhole test used in refraction to confirm refractive error (if vision improves with pinhole, error is refractive, not organic). **Normal vision**: Near reflex uses miosis (pupil constriction) during accommodation partly for this depth of field benefit (plus reduces spherical aberration, allowing sharper accommodation).`,
        mnemonics: [
          {
            text: "Presbyopia arithmetic: Age ~40-45 onwards; 100/near point = accommodation D; <3D = presbyopic",
            explanation: "Presbyopia calculation and threshold",
          },
          {
            text: "Accommodation triad: Thickening + Turning + Tightening (of pupils)",
            explanation: "Three components mnemonic",
          },
          {
            text: "CN III effects: Mydriasis (no parasympathetic to dilator unopposed) + no accommodation (ciliary paralyzed)",
            explanation: "CN III palsy findings",
          },
          {
            text: "Argyll Robertson: Light present, accommodation absent (reversed from normal)",
            explanation: "Dissociation pattern",
          },
        ],
        keyPoints: [
          "Accommodation amplitude declines ~0.5D per decade after age 25",
          "Presbyopia symptomatic when accommodation amplitude <2-3D (typically age 45)",
          "Near point = 100/accommodation amplitude; useful for patient communication",
          "Accommodation triad: lens thickens + eyes converge + pupils constrict (CN III parasympathetic)",
          "Cornea-air interface (Δn largest) provides 2/3 refractive power despite lens variability",
          "CN III palsy: mydriasis (unopposed sympathetic) + accommodation loss (ciliary paralyzed)",
          "Squinting (pinhole effect) improves vision by increasing depth of field in refractive error",
          "Argyll Robertson pupil: light reflex lost, accommodation present (neurosyphilis)",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "1-3", edition: "7th" },
          { book: "Parsons' Diseases of the Eye", chapter: "1-3", edition: "23rd" },
        ],
      },
    ],
  },
];
