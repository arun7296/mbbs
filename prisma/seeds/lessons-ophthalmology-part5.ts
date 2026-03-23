import type { TopicLessons } from "./content-loader";

export const ophthalmologyPart5Lessons: TopicLessons[] = [
  {
    topicCode: "OP-MOD-03-TOP-03",
    layers: [
      { layer: 1, slug: "secondary-congenital-glaucoma-foundation", title: "Secondary & Congenital Glaucoma - Foundation", estimatedMinutes: 20, summary: "Secondary glaucoma types, exfoliation syndrome, pigment dispersion, neovascular glaucoma, congenital glaucoma.", contentMd: `# Secondary & Congenital Glaucoma - Foundation\n\n## Secondary Glaucoma Types\n\n**Exfoliation syndrome (XFS)**: Fibrillar material on lens, TM obstruction (10% >60yr)\n**Pigment dispersion (PDS)**: Rubbing of zonules releases pigment (young myopes)\n**Neovascular glaucoma (NVG)**: New vessels from ischemia (DR, CRAO)\n**Steroid-induced**: From topical/systemic corticosteroids (5-10%, 30-40% if responders)\n**Trauma**: Hyphema, angle recession, phacolytic/phacomorphic\n**Uveitic**: From inflammation\n\n## Congenital Glaucoma\n\n**Incidence**: 1 per 5,000-15,000 births\n**Pathology**: Maldeveloped TM\n**Classic triad**: Epiphora (tearing), Photophobia (light sensitivity), Blepharospasm (lid spasm)\n**Signs**: Cloudy cornea (edema), buphthalmos (enlarged eye), optic nerve cupping\n**Management**: Surgical (goniotomy, trabeculotomy)\n**Critical window**: <1 year surgery for best outcomes`,
        mnemonics: [
          { text: "XFS = exfoliation; PDS = pigment; NVG = ischemia-related", explanation: "Secondary glaucoma types" },
          { text: "Congenital triad: Epiphora, Photophobia, Blepharospasm (EPB)", explanation: "Infantile glaucoma" },
        ],
        keyPoints: [
          "XFS most common identifiable glaucoma cause; 50% develop glaucoma",
          "PDS in young myopes; 50% develop glaucoma",
          "NVG from ischemia (DR, CRAO)",
          "Steroid glaucoma reversible with discontinuation",
          "Congenital: maldeveloped angle; surgery critical <1 year",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "8", edition: "7th" },
        ],
      },
      { layer: 2, slug: "secondary-congenital-mechanism", title: "Secondary & Congenital Glaucoma - Mechanism", estimatedMinutes: 25, summary: "XFS pathophysiology, PDS mechanisms, NVG pathophysiology, congenital angle maldevelopment.", contentMd: `# Secondary & Congenital Glaucoma - Mechanism\n\n## Exfoliation Syndrome\n\nFibrillar protein-polysaccharide complexes deposit on lens, zonules, TM from multiple tissues. Pigment co-deposits → TM obstruction → outflow facility reduced. IOP elevation from drainage obstruction.\n\n## Pigment Dispersion\n\n**Reverse pupil block**: Posterior chamber pressure > anterior → iris pushed back\n**Zonule rubbing**: Iris-lens contact damages iris pigment epithelium\n**Krukenberg spindle**: Vertical pigment band on endothelium (from pigment pumping)\n**Iris transillumination defects**: Mid-peripheral radial holes\n\n## Neovascular Glaucoma\n\n**Trigger**: Retinal ischemia → VEGF production\n**Stages**: Rubeosis iridis (stage 1) → angle involvement (stage 2) → synechiae/closure (stage 3)\n**IOP elevation**: From fibrovascular membrane contracture, TM obstruction\n\n## Congenital Glaucoma\n\nMaldeveloped TM from neural crest cell migration abnormality. Autosomal recessive (CYP1B1 gene). IOP elevation from birth → corneal edema, scleral stretching (buphthalmos), optic nerve damage.`,
        keyPoints: [
          "XFS: material accumulation + pigment → TM obstruction",
          "PDS: iris-lens contact → zonule rubbing → pigment release",
          "NVG: retinal ischemia → VEGF → neovascularization → angle closure",
          "Congenital: angle maldevelopment → reduced TM function from birth",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "8", edition: "7th" },
        ],
      },
      { layer: 3, slug: "secondary-congenital-clinical", title: "Secondary & Congenital Glaucoma - Clinical", estimatedMinutes: 25, summary: "Clinical diagnosis of secondary glaucomas, congenital glaucoma presentation, imaging, management.", contentMd: `# Secondary & Congenital Glaucoma - Clinical\n\n## Exfoliation Syndrome\n\n**Slit-lamp**: Granular material on lens, zonules, pupil, TM appears darker\n**IOP**: Often higher than POAG\n**Gonioscopy**: TM appears darker, exfoliative material visible\n**Management**: More aggressive (target IOP 30-40% reduction)\n\n## Pigmentary Glaucoma\n\n**Diagnostic features**: Krukenberg spindle, iris transillumination defects, TM dark pigmentation\n**Age**: Young myopes (20-40 years)\n**50% develop glaucoma** from pigment obstruction\n\n## Neovascular Glaucoma\n\n**Rubeosis iridis**: Fine vessels on iris surface\n**Stages**: Rubeosis (no angle involvement, IOP normal) → angle involvement (IOP rise) → synechiae (very high IOP)\n**Management**: Treat underlying ischemia (PRP for DR), cyclophotocoagulation for pain\n\n## Congenital Glaucoma Diagnosis\n\n**Classic presentation**: Epiphora, photophobia, blepharospasm, cloudy cornea\n**Signs**: Buphthalmos (>13mm horizontal corneal diameter suspicious), optic nerve cupping\n**Tests**: IOP (requires anesthesia), gonioscopy (immature TM), ultrasound (axial length >26mm)\n**Emergency**: If IOP >25-30 mmHg with symptoms\n\n## Surgical Management\n\n**Goniotomy**: Divides angle tissue under gonioscopic visualization (50-90% success <1 year)\n**Trabeculotomy**: External approach\n**Timing critical**: <1 year age 80% success; >5 years <50% vision preserved`,
        keyPoints: [
          "XFS: granular material on lens + darker TM; aggressive glaucoma",
          "PDS: Krukenberg spindle + iris holes; 50% develop glaucoma",
          "NVG: treat underlying ischemia (PRP) + manage angle closure",
          "Congenital: epiphora-photophobia-blepharospasm triad; surgery <1 year critical",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "8", edition: "7th" },
        ],
      },
      { layer: 4, slug: "secondary-congenital-exam", title: "Secondary & Congenital Glaucoma - Exam Prep", estimatedMinutes: 15, summary: "Management priorities, differential diagnosis, surgical indications.", contentMd: `# Secondary & Congenital Glaucoma - Exam Prep\n\n## Key Facts\n1. XFS most common identifiable glaucoma cause globally\n2. PDS in young myopes; 50% develop glaucoma\n3. NVG from ocular ischemia (treat underlying first)\n4. Steroid glaucoma reversible with discontinuation\n5. Congenital: maldeveloped angle; surgery first-line\n6. Goniotomy 50-90% success if <1 year age\n7. Congenital surgery >5 years age: <50% retain functional vision\n\n## Steroid Glaucoma\n\n**Management**: Reduce/discontinue steroid if possible\n**Reversibility**: IOP normalizes after discontinuation\n**If must continue**: Switch to weaker steroid or NSAIDs\n**Monitoring**: Check IOP every 2 weeks if high doses\n\n## NVG Management Priorities\n\n1. Treat underlying ischemia (PRP for DR, most important)\n2. Manage angle closure (cyclophotocoagulation if advanced)\n3. Pain relief (last resort: enucleation if blind + pain)`,
        keyPoints: [
          "XFS target IOP 30-40% reduction (more aggressive than POAG)",
          "PDS avoid strenuous exercise (may cause IOP spikes)",
          "NVG: treat ischemia (PRP) is priority; angle closure management secondary",
          "Steroid glaucoma reversible; discontinue steroid first",
          "Congenital surgery timing critical: <1 year 80% success",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "8", edition: "7th" },
        ],
      },
      { layer: 5, slug: "secondary-congenital-recall", title: "Secondary & Congenital Glaucoma - Active Recall", estimatedMinutes: 15, summary: "7 clinical cases on secondary and congenital glaucoma management.", contentMd: `# Active Recall: Secondary & Congenital Glaucoma\n\n**Q1**: 70-year-old with white granular material on lens, darker TM on gonioscopy, IOP 34. Diagnosis and management?\n> A: Exfoliation syndrome. More aggressive than POAG; target IOP 30-40% reduction. Start PGA (superior efficacy in XFS). Lower threshold for laser/surgery.\n\n**Q2**: 35-year-old myope with Krukenberg spindle and iris transillumination defects, IOP normal. Risk of glaucoma?\n> A: PDS (pigment dispersion syndrome). Currently no glaucoma (50% eventual risk). Monitor: annual IOP checks, periodic VF testing. ~50% develop pigmentary glaucoma (elevated IOP + damage). Counsel: avoid strenuous exercise (may cause IOP spikes).\n\n**Q3**: DR patient develops rubeosis iridis, IOP 18 (normal), angle open. Urgent treatment?\n> A: NVG stage 1 (rubeosis only). Most urgent: panretinal photocoagulation (PRP) to reduce ischemia/VEGF. This prevents progression to angle involvement. Not glaucoma yet; managing ischemia prevents glaucoma.\n\n**Q4**: 2-month-old with excessive tearing, light sensitivity, cloudy cornea, horizontal corneal diameter 13.5mm. Diagnosis and management?\n> A: Congenital glaucoma (infantile glaucoma). Classic triad + buphthalmos (enlarged eye). Urgent: IOP measurement under anesthesia + gonioscopy (immature TM). Surgical: goniotomy preferred (50-90% success if <1 year). Emergency if IOP >25 mmHg. Late diagnosis poor prognosis.\n\n**Q5**: Rheumatoid arthritis patient on systemic corticosteroids develops IOP rise from 16 to 28 mmHg. Management?\n> A: Steroid-induced glaucoma. Primary: discuss with rheumatologist tapering/alternative. If must continue: medical glaucoma therapy (PGAs, beta-blockers). Reversible: IOP normalizes after steroid discontinuation (timeline weeks-months). Monitor IOP every 2 weeks if high doses continued.\n\n**Q6**: PDS patient with IOP 40 mmHg, VF loss detected. Pigmentary glaucoma diagnosis. Monovision contacts failed (can't adapt). Next step?\n> A: Contact lenses contraindicated given IOP control needed. Try medical therapy (PGAs first-line, similar to POAG). Consider laser (argon peripheral iridoplasty, though benefit limited). If medical therapy insufficient: GDD surgery (better long-term than trabeculectomy for PG). Avoid strenuous exercise.\n\n**Q7**: XFS patient with IOP 32 mmHg on single agent (timolol), fellow eye untreated. Fellow eye findings?\n> A: XFS bilateral in >50% within 5-10 years. Fellow eye at risk. Prophylactic: start glaucoma therapy even if IOP normal (lower threshold for XFS). Screen fellow eye frequently (every 3-6 months). Counsel: 50% bilateral progression risk within 5-10 years.`,
        mnemonics: [
          { text: "XFS: exfoliative material on lens + darker TM; aggressive (30-40% reduction target)", explanation: "XFS management approach" },
          { text: "PDS: Krukenberg spindle + iris holes; 50% glaucoma risk; avoid exercise", explanation: "PDS characteristics" },
          { text: "NVG priorities: PRP (treat ischemia) → then manage angle closure", explanation: "NVG management hierarchy" },
        ],
        keyPoints: [
          "XFS: aggressive glaucoma; target IOP 30-40% reduction",
          "PDS: 50% develop glaucoma; exercise-induced IOP spikes possible",
          "NVG: treat underlying ischemia (PRP) is first priority",
          "Steroid glaucoma: reversible; discontinue steroid if possible",
          "Congenital: surgery <1 year for best outcomes (80%)",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "8", edition: "7th" },
        ],
      },
    ],
  },
];
