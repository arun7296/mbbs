import type { TopicLessons } from "./content-loader";

export const ophthalmologyPart2Lessons: TopicLessons[] = [
  {
    topicCode: "OP-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "presbyopia-contact-lenses-foundation",
        title: "Presbyopia & Contact Lenses - Foundation",
        estimatedMinutes: 20,
        summary: "Definition of presbyopia, causes, symptoms, contact lens types for presbyopia, and basics of contact lens materials.",
        contentMd: `# Presbyopia & Contact Lenses - Foundation

## Presbyopia Overview

Presbyopia is age-related loss of accommodation from lens nucleus sclerosis. Begins ~age 40-45. Universal condition affecting all sighted individuals. Caused by lens protein crosslinks, fiber compression, and ciliary muscle weakening.

## Symptoms of Presbyopia

- Difficulty reading small print at normal distance (~33cm)
- Eye strain with prolonged near work
- Need to hold reading material at arm's length
- Blurred vision at intermediate distances
- Worse in poor lighting

## Contact Lens Types for Presbyopia

**Monovision**: Non-dominant eye set for near (-1.50 to -2.00D); dominant for distance
**Multifocal**: Multiple optical zones for all distances
**Bifocal**: Upper distance, lower near zones (requires RGP rigid material)

## Contact Lens Materials

**Soft lenses**: Hydrogel, comfortable immediately, shorter lifespan (6-12 months)
**RGP lenses**: More oxygen permeable, durable (1-2 years), requires adaptation`,
        mnemonics: [
          { text: "Presbyopia rule of 45: begins age 40-45", explanation: "Presbyopia onset" },
          { text: "Monovision: Non-dominant for Near", explanation: "Correction assignment" },
        ],
        keyPoints: [
          "Presbyopia universal; affects all sighted individuals",
          "Onset age 40-45 when accommodation amplitude drops below 2-3D",
          "Lens nucleus sclerosis primary cause",
          "Monovision simplest contact lens solution",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "4", edition: "7th" },
        ],
      },
      {
        layer: 2,
        slug: "presbyopia-contact-lenses-mechanism",
        title: "Presbyopia & Contact Lenses - Mechanism",
        estimatedMinutes: 25,
        summary: "Lens protein changes, accommodation loss mechanism, contact lens optical principles, multifocal designs.",
        contentMd: `# Presbyopia & Contact Lenses - Mechanism

## Lens Protein Biochemistry

Alpha-crystallin protein undergoes age-dependent protein crosslinking. Advanced glycation end products (AGE) form from non-enzymatic glycosylation. Disulfide bonds increase with age. Result: elastic modulus increases, lens stiffens.

## Contact Lens Optical Principles

**Monovision**: Induce -1.50 to -2.00D myopia in non-dominant eye for near vision. Brain learns to use appropriate eye for distance vs near. Binocular depth perception reduced.

**Multifocal designs**:
- **Simultaneous vision**: Multiple focal zones visible simultaneously; requires neural adaptation
- **Alternating vision**: Different zones for distance (upper) vs near (lower); lens moves with eyelid

## RGP vs Soft Lens Properties

RGP: High oxygen permeability (100-150 Dk), durable (1-2 years), less comfortable initially, superior bifocal designs
Soft: Lower oxygen permeability (20-170 Dk), immediately comfortable, shorter lifespan (6-12 months)`,
        mnemonics: [
          { text: "Presbyopia: Lens stiffness ↑ + crosslinks ↑ → accommodation ↓", explanation: "Biochemical basis" },
        ],
        keyPoints: [
          "Lens nucleus sclerosis from protein crosslinks and fiber compression",
          "Monovision works via neural adaptation",
          "RGP superior for bifocal designs; soft better comfort initially",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "4-5", edition: "7th" },
        ],
      },
      {
        layer: 3,
        slug: "presbyopia-contact-lenses-clinical",
        title: "Presbyopia & Contact Lenses - Clinical",
        estimatedMinutes: 30,
        summary: "Presbyopia patient assessment, contact lens fitting, management options, problem-solving.",
        contentMd: `# Presbyopia & Contact Lenses - Clinical

## Presbyopia Patient Assessment

**History**: Work demands (computer/reading/distance), symptom onset, progression rate
**Examination**: Distance VA, refraction, near point of accommodation, near VA, pupil size
**Amplitude calculation**: Amplitude (D) = 100 / near point distance (cm)

## Contact Lens Fitting

**Monovision**: Non-dominant eye gets near power (-1.50 to -2.00D). Adaptation: 1-2 weeks. Success: ~70-80%
**Multifocal**: Multiple focal zones. Adaptation: 1-4 weeks. Better binocular vision than monovision.
**Bifocal**: RGP lenses with segment. Superior optics. Requires precise alignment.

## Problem-Solving

**Inadequate near**: Increase add power, change design, switch to bifocal
**Inadequate distance**: Reduce near power (monovision), change multifocal type
**Intermediate blur**: Monovision expected; multifocals better, or use progressive glasses concurrently
**Adaptation failure**: Return to spectacles (acceptable outcome; 10-20% cannot adapt)`,
        keyPoints: [
          "Presbyopia assessment: near point measurement and amplitude calculation",
          "Monovision 70-80% success; reduced stereopsis trade-off",
          "Multifocal better binocular vision; more expensive, longer adaptation",
          "10-20% patients cannot adapt to contact lens presbyopia correction",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "4-5", edition: "7th" },
        ],
      },
      {
        layer: 4,
        slug: "presbyopia-contact-lenses-exam",
        title: "Presbyopia & Contact Lenses - Exam Prep",
        estimatedMinutes: 20,
        summary: "NEET-style management, contact lens selection, presbyopia correction options.",
        contentMd: `# Presbyopia & Contact Lenses - Exam Prep

## Key Facts on Presbyopia
- Onset: 40-45 years
- Cause: Lens nucleus sclerosis, protein crosslinks
- Progression: Until age 55-60 (then stabilizes)
- Loss rate: ~0.5D per decade
- Near point: 10cm (age 8) → 100cm (age 65)

## Presbyopia Correction Options
- Reading glasses (simplest, most common)
- Bifocals/progressives (better for variable distance needs)
- Monovision contacts (70-80% success; reduced stereopsis)
- Multifocal contacts (better binocular vision; more expensive)
- Bifocal RGP contacts (superior optics; less comfortable initially)

## Contact Lens Selection Criteria
- **Monovision suitable**: Office workers, readers, general population (not pilots/surgeons)
- **Multifocal suitable**: Wants binocular vision, willing to adapt longer
- **Bifocal suitable**: Failed monovision/multifocal, needs excellent optics

## Presbyopic IOL (Post-Cataract)
- Accommodating IOLs: Limited effectiveness
- Multifocal IOLs: ~85% patient satisfaction; loss of contrast trade-off`,
        keyPoints: [
          "Presbyopia onset age 40-45 when accommodation <2-3D",
          "Accommodation amplitude decreases ~0.5D per decade",
          "Monovision: 70-80% success; non-dominant eye for near",
          "Multifocal contacts: better binocular vision; longer adaptation",
          "Adaptation failure (10-20%): return to spectacles",
          "Presbyopic IOL post-cataract: accommodating or multifocal options",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "4-5", edition: "7th" },
        ],
      },
      {
        layer: 5,
        slug: "presbyopia-contact-lenses-recall",
        title: "Presbyopia & Contact Lenses - Active Recall",
        estimatedMinutes: 15,
        summary: "10 clinical cases on presbyopia assessment, contact lens selection, problem-solving.",
        contentMd: `# Active Recall: Presbyopia & Contact Lenses

**Q1**: 48-year-old, near point 40cm. Calculate accommodation amplitude.
> A: 100/40 = 2.5D. Yes, presbyopic (<3D). Management: reader glasses +1.50-2.00D for near work.

**Q2**: Presbyopic office worker, wants contacts. Right dominant eye. Monovision suitable?
> A: Yes, suitable. Right eye distance; left eye near add (-1.50 to -2.00D). Success 70-80%. Counsel reduced depth perception, 1-2 week adaptation.

**Q3**: Monovision failed (4-week trial). Options?
> A: Multifocal contacts (maintains binocular vision, longer adaptation 1-4 weeks). If still fail: spectacles (bifocals/progressives) gold standard.

**Q4**: Multifocal patient reports computer blur (65cm distance).
> A: Expected (intermediate zone compromised in simultaneous vision). Solutions: progressive glasses + contacts, try bifocal RGP, adjust monitor distance.

**Q5**: Age 50, near point 100cm. Interpret.
> A: Amplitude 1D (severe). Requires strong reader +3.00-4.00D. Correction mandatory. Progressive lenses recommended for variable distances.

**Q6**: Age 44 newly presbyopic. When stabilizes?
> A: Age 55-60 (next 10-15 years of progression). Needs updates every 1-2 years. By age 60, minimal change expected.

**Q7**: Monovision vs multifocal trade-offs?
> A: Monovision: simple, cost-effective, reduced depth perception. Multifocal: better binocular vision, expensive, contrast loss, longer adaptation. Choose by priorities.

**Q8**: Poor soft multifocal adaptation. Try RGP bifocals - why superior?
> A: RGP lenses move with eyelid (true alternating vision), better bifocal segment separation, sharper optics, more durable. Trade-off: less comfortable initially.

**Q9**: Tried monovision (3 weeks) and multifocal (4 weeks), neither works. Prior good contact lens tolerance (myopic correction).
> A: ~10-20% cannot adapt presbyopic modifications despite good myopic contact lens history. Different neurological adaptation. Return to spectacles (bifocals/progressives) gold standard.

**Q10**: Management difference: age 45 early presbyopia vs age 65 established presbyopia?
> A: Age 45: weak accommodation remains (smaller add), contact lens updates needed every 1-2 years, shorter-term solutions. Age 65: no accommodation (stable correction), strong add needed, permanent correction, stable prescription.`,
        keyPoints: [
          "Presbyopia amplitude: 100/near point = accommodation D; <3D = presbyopic",
          "Monovision non-dominant near; 70-80% success; reduced depth trade-off",
          "Multifocal better binocular vision; longer adaptation; contrast loss",
          "RGP bifocals superior optics due to lens movement and segment separation",
          "Intermediate vision weak with monovision; use progressive glasses concurrently",
          "Adaptation failure (10-20%): expected outcome; return to spectacles",
          "Early presbyopia needs updates every 1-2 years; established presbyopia stable",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "4-5", edition: "7th" },
        ],
      },
    ],
  },
];
