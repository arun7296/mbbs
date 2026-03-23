import type { TopicLessons } from "./content-loader";

export const ophthalmologyPart4Lessons: TopicLessons[] = [
  {
    topicCode: "OP-MOD-03-TOP-02",
    layers: [
      { layer: 1, slug: "angle-closure-glaucoma-foundation", title: "Angle Closure Glaucoma - Foundation", estimatedMinutes: 25, summary: "Definition, anatomy, classification (narrow angle, acute, chronic), epidemiology.", contentMd: `# Angle Closure Glaucoma - Foundation\n\nAngle closure glaucoma (ACG) = iris blocks trabecular meshwork, preventing aqueous drainage. Prevalence ~0.6-1% developed countries, 2-5% Asia (higher in Asians). Female predominance (2:1-4:1). Typically >50 years.\n\n## Anatomical Predisposition\n\n**Shallow anterior chamber depth (ACD) <2.5mm** (especially <2.0mm)\n**Short axial length (hyperopic eyes)**\n**Steep iris curvature**\n**Forward lens position**\n**Narrow angles on gonioscopy (Shaffer Grade 0-2)**\n\n## Angle Closure Classification\n\n**Narrow angle**: Asymptomatic, normal IOP, no ONH damage (Shaffer 0-2)\n**Acute ACG**: Emergency - IOP 40-80 mmHg, corneal edema, pain, halos\n**Chronic ACG**: Gradual closure with anterior synechiae, vision loss\n\n## Pupil Block Mechanism\n\nMost common (50%): iris-lens contact impedes aqueous flow from posterior to anterior chamber, pressure differential pushes iris forward (iris bombé)`,
        mnemonics: [
          { text: "ACG 'Risk F-words': Female, Far-sighted, Forty-plus, Flat iris, Far-east", explanation: "Risk factors" },
        ],
        keyPoints: [
          "ACG iris blocks TM, prevents aqueous drainage",
          "Female, age >50, hyperopia, Asian higher risk",
          "Shallow ACD <2.5mm (especially <2.0mm) risk factor",
          "Acute ACG emergency; IOP 40-80 mmHg",
          "Pupil block most common mechanism (50%)",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "8", edition: "7th" },
          { book: "Parsons' Diseases of the Eye", chapter: "9", edition: "23rd" },
        ],
      },
      { layer: 2, slug: "angle-closure-glaucoma-mechanism", title: "Angle Closure Glaucoma - Mechanism", estimatedMinutes: 30, summary: "Pupil block physiology, iris bombé, synechiae formation, phacomorphic vs phacolytic.", contentMd: `# Angle Closure Glaucoma - Mechanism\n\n## Pupil Block Physiology\n\n**Normal**: Posterior chamber pressure 0.5-2 mmHg higher than anterior\n**In predisposed**: Resistance exaggerated, posterior pressure may exceed anterior by 5-10 mmHg\n**Result**: Iris pushed forward (iris bombé)\n**Angle closure cascade**: Angle narrows → TM obstructed → IOP spikes\n\n## Iris Bombé\n\nIris bowed forward throughout. Appearance: iris dome-shaped. Anterior chamber extremely shallow peripherally. Slit-lamp: iris apex touches cornea.\n\n## Anterior Synechiae\n\n**Formation**: Repeated angle closure → ischemic damage → inflammation → fibroblast infiltration → scar tissue\n**Reversibility**: Appositional closure reversible; synechial closure permanent (adhesions)\n**Timeline**: Synechiae form within hours-days of closure\n**Consequence**: Even if iridotomy done, synechial regions won't open\n\n## Phacomorphic vs Phacolytic\n\n**Phacomorphic**: Intumescent cataract pushes iris forward → angle closure (pupil block component)\n**Phacolytic**: Mature cataract proteins leak → TM obstruction (angles remain open on gonioscopy)`,
        keyPoints: [
          "Pupil block: posterior pressure > anterior → iris pushed forward",
          "Synechiae permanent adhesions; form within hours-days of closure",
          "Early treatment prevents synechiae formation",
          "Phacomorphic: angle closed; Phacolytic: angles open",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "8", edition: "7th" },
        ],
      },
      { layer: 3, slug: "angle-closure-glaucoma-clinical", title: "Angle Closure Glaucoma - Clinical", estimatedMinutes: 30, summary: "Acute ACG presentation, emergency management, chronic ACG, peripheral iridotomy.", contentMd: `# Angle Closure Glaucoma - Clinical\n\n## Acute ACG Presentation\n\n**Ocular**: Severe pain, blurred vision, halos, red eye, corneal edema (opaque)\n**Pupil**: Fixed mid-dilated\n**IOP**: 40-80 mmHg (often unmeasurable due to edema)\n**Systemic**: Nausea, vomiting, headache (may be misdiagnosed as GI or migraine)\n\n## Emergency Management\n\n**Medical (first)**: Lower IOP before laser (corneal edema must clear)\n- **Osmotic**: Mannitol 1g/kg IV or glycerol 1g/kg PO\n- **Acetazolamide**: 500mg IV/PO\n- **Topical**: Timolol, dorzolamide, brimonidine, prednisolone acetate hourly\n- **Avoid pilocarpine initially** (worsens angle closure)\n\n**Definitive**: Laser peripheral iridotomy within 24 hours (bypasses pupil block)\n\n## Chronic ACG\n\n**Gradual vision loss**, anterior synechiae on gonioscopy, variable angle narrowing\n**Often late diagnosis** with significant ONH damage already\n\n## Peripheral Iridotomy\n\n**Location**: Upper 11-1 o'clock (avoids visual axis)\n**Success**: 80% prevent acute attack in narrow angle suspects\n**20% residual closure**: Plateau iris syndrome (anterior ciliary body placement)`,
        keyPoints: [
          "Acute ACG: emergency; IOP 40-80, corneal edema, fixed mid-dilated pupil",
          "Emergency: osmotic agent + acetazolamide + topical agents → laser iridotomy",
          "Avoid pilocarpine acutely (wrong direction of angle closure)",
          "Peripheral iridotomy 80% effective; 20% residual closure (plateau iris)",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "8", edition: "7th" },
        ],
      },
      { layer: 4, slug: "angle-closure-glaucoma-exam", title: "Angle Closure Glaucoma - Exam Prep", estimatedMinutes: 20, summary: "Management priorities, medication contraindications, surgical indications.", contentMd: `# Angle Closure Glaucoma - Exam Prep\n\n## Key Facts\n1. ACG iris blocks TM (vs POAG = TM dysfunction)\n2. Female, age >50, hyperopia, Asian higher risk\n3. Shallow ACD <2.5mm risk; <2.0mm very high risk\n4. Acute ACG emergency: IOP 40-80, corneal edema, pain\n5. Pupil block most common (50%)\n6. Emergency: osmotic agent → acetazolamide → topical → laser\n7. Peripheral iridotomy: creates posterior-anterior communication\n8. Synechiae irreversible; prevention better than treatment\n9. Avoid anticholinergics (mydriasis triggers closure)\n10. Gonioscopy mandatory (open vs closed angles)\n\n## Contraindicated Medications\n\n**Anticholinergics** (atropine, antihistamines, TCAs): ABSOLUTE contraindication\n**Sympathomimetics** (phenylephrine, pseudoephedrine): Relative contraindication\n**Safe alternatives**: PGAs, beta-blockers, alpha-2 agonists, CAIs\n\n## Surgical Indications\n\n**Peripheral iridotomy**: All narrow angles (Shaffer 0-2), phakic eyes\n**Trabeculectomy**: If iridotomy fails or residual closure\n**Enucleation**: Absolute glaucoma with pain (last resort)`,
        keyPoints: [
          "Acute ACG: IOP emergency; corneal edema blocks laser visualization",
          "Avoid anticholinergics (absolute contraindication)",
          "Peripheral iridotomy 80% prevent acute attack; 20% plateau iris",
          "Early treatment prevents synechiae formation",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "8", edition: "7th" },
        ],
      },
      { layer: 5, slug: "angle-closure-glaucoma-recall", title: "Angle Closure Glaucoma - Active Recall", estimatedMinutes: 15, summary: "8 clinical cases on ACG management, emergency treatment, and surgical planning.", contentMd: `# Active Recall: Angle Closure Glaucoma\n\n**Q1**: 65-year-old with sudden severe eye pain, halos, IOP 68 mmHg, cornea opaque, fixed mid-dilated pupil. Diagnosis and first step?\n> A: Acute angle-closure glaucoma. FIRST step: Medical IOP reduction (cannot do laser if cornea too opaque). IV Mannitol + acetazolamide + topical agents. Once corneal edema clears and IOP <40, proceed to laser iridotomy.\n\n**Q2**: Narrow angle suspect (Shaffer Grade 1-2), needs cataract surgery. Prophylactic iridotomy indicated?\n> A: Yes. Iridotomy before cataract surgery eliminates pupil block risk. Cataract surgery alters AC anatomy; better to have iridotomy already done.\n\n**Q3**: RB patient develops anterior synechiae after acute ACG. Why angles don't fully open despite patent iridotomy?\n> A: Anterior synechiae = permanent scars (iris adhered to TM via fibrous tissue). Even with iridotomy (pressure equalized), mechanics prevent iris separation in affected regions. Synechiae irreversible; early treatment within 24 hours prevents formation.\n\n**Q4**: Patient develops hyphema after laser iridotomy. Management?\n> A: Expected complication (iris vessel bleeding). Continue topical steroids, avoid NSAIDs (increase bleeding). Monitor IOP (hyphema can obstruct angles). Most self-limited (RBCs reabsorb in 1-2 weeks).\n\n**Q5**: Narrow angle patient refuses iridotomy. Counseling?\n> A: Discuss ~1% annual risk of acute attack without iridotomy. 50% develop second eye involvement within 5-10 years if untreated. Recommend iridotomy as preventive measure (low risk, high benefit). If refuses: document discussion; annual gonioscopy surveillance.\n\n**Q6**: Narrow angle patient on atropine drops prescribed by general medicine. Eye pain developed. Etiology?\n> A: Atropine (anticholinergic) causes mydriasis → angle closure in susceptible patient. Absolute contraindication in narrow angles. Remove atropine, treat acute closure. Educate about medication risks.\n\n**Q7**: Plateau iris syndrome suspected (residual closure despite patent iridotomy). Management?\n> A: Argon laser peripheral iridoplasty (pull iris away from angle) or cyclophotocoagulation (reduce aqueous). Rarely: surgical ciliary body repositioning. ~5% of primary ACG cases.\n\n**Q8**: Chronic ACG with extensive anterior synechiae, IOP 35 mmHg on maximum medical therapy. Next step?\n> A: Trabeculectomy indicated (medical therapy insufficient). Success rate lower than POAG (residual synechiae), but vision-saving. Counsel: surgery may not normalize IOP, but usually improves control.`,
        mnemonics: [
          { text: "Acute ACG: Osmotic → Acetazolamide → Topical → Laser (OATL)", explanation: "Treatment sequence" },
        ],
        keyPoints: [
          "Acute ACG emergency: lower IOP medically before laser (corneal edema blocks visualization)",
          "Avoid anticholinergics (absolute contraindication in narrow angles)",
          "Synechiae form within hours-days; irreversible",
          "Peripheral iridotomy 80% prevent acute attack",
          "Early treatment (within 24 hours) prevents synechiae, better prognosis",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "8", edition: "7th" },
        ],
      },
    ],
  },
];
