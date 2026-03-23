import type { TopicLessons } from "./content-loader";

export const ophthalmologyPart3Lessons: TopicLessons[] = [
  {
    topicCode: "OP-MOD-02-TOP-04",
    layers: [
      { layer: 1, slug: "cataract-foundation", title: "Cataract - Foundation", estimatedMinutes: 25, summary: "Definition, epidemiology, types, risk factors, classification systems.", contentMd: `# Cataract - Foundation\n\n## Definition & Epidemiology\n\nCataract = opacity of lens. Leading cause of blindness globally (~50% of blindness in developing countries). Age-related most common. Preventable/treatable with surgery.\n\n## Types of Cataract\n\n**By age of onset**:\n- Congenital: Present at birth, hereditary or acquired (TORCH, metabolic)\n- Developmental: Childhood, traumatic or metabolic\n- Acquired: Adult-onset (age-related, metabolic, toxic)\n\n**By location in lens**:\n- Nuclear: Nucleus becomes brown (sclerotic)\n- Cortical: Cortical fibers opaque (wedge-shaped opacities)\n- Posterior subcapsular: Posterior lens surface, dense opacities\n- Mixed: Combination types\n\n## Risk Factors\n\n**Age**: Strongest risk factor (incidence rises exponentially after age 60)\n**Smoking**: 2-3x increased risk\n**UV exposure**: Cumulative; protective sunglasses important\n**Corticosteroids**: Topical/systemic long-term use\n**Diabetes**: Especially Type 1; tight glucose control reduces risk\n**Trauma**: Blunt or penetrating eye injury\n**Radiation**: UV, ionizing radiation\n**Medications**: Corticosteroids, phenothiazines (chlorpromazine)\n**Systemic conditions**: Myotonic dystrophy, Marfan syndrome, hypoparathyroidism\n\n## Cataract Progression\n\n**Incipient**: Early opacification, no visual symptoms\n**Immature**: Opacity increasing, visual acuity decreases, fluid still in cortex\n**Mature**: Complete opacity, white appearance, vision severely blurred\n**Intumescent**: Swollen mature lens (fluid retention)\n**Hypermature**: Lens proteins leak, cortex liquefied, nucleus may sink`,
        mnemonics: [
          { text: "Cataract leading global cause blindness; age-related most common", explanation: "Epidemiology" },
          { text: "Risk factors: Smoking 2-3x, UV cumulative, corticosteroids long-term", explanation: "Modifiable risk factors" },
        ],
        keyPoints: [
          "Cataract leading cause blindness globally (~50% in developing countries)",
          "Age-related cataract most common type",
          "Nucleus, cortex, and posterior subcapsular main morphological types",
          "Age strongest risk factor; incidence rises after age 60",
          "Smoking 2-3x increased risk; modifiable risk factor",
          "UV exposure cumulative; protective sunglasses important",
          "Diabetes increases risk; tight glucose control protective",
          "Corticosteroids increase risk (both topical and systemic)",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "6", edition: "7th" },
          { book: "Parsons' Diseases of the Eye", chapter: "7", edition: "23rd" },
        ],
      },
      { layer: 2, slug: "cataract-mechanism", title: "Cataract - Mechanism", estimatedMinutes: 25, summary: "Lens protein denaturation, osmotic mechanisms, lipid peroxidation, molecular basis of opacity.", contentMd: `# Cataract - Mechanism\n\n## Protein Denaturation in Cataract\n\n**Alpha-crystallin aggregation**: Heat shock proteins normally prevent aggregation; with aging, aggregation increases\n**Beta/gamma-crystallin**: Cross-linking increases, protein denaturation accelerates\n**Insolubility**: Denatured proteins become insoluble, scatter light\n**Loss of transparency**: Protein aggregates scatter light, preventing clear transmission\n\n## Osmotic Swelling in Cortical Cataract\n\n**Sodium-potassium ATPase dysfunction**: Aging impairs pump efficiency\n**Osmotic imbalance**: Sodium accumulates in lens, water follows\n**Cortical swelling**: Cortical fibers swell, create spaces for light scattering\n**Fluid vacuoles**: Accumulation of fluid in cortex creates opacity\n\n## Lipid Peroxidation & Oxidative Stress\n\n**ROS generation**: Reactive oxygen species accumulate with age\n**Lipid damage**: Lens membrane lipids oxidized, peroxidation cascade\n**Antioxidant decline**: Glutathione, SOD, catalase activity decreases with age\n**Free radical damage**: Proteins and lipids damaged beyond repair\n\n## Age-Related Lens Changes\n\n**Cross-linking**: Disulfide bonds, non-enzymatic glycation increase\n**Elasticity loss**: Lens proteins lose elasticity (presbyopia, cataract)\n**Brunescence**: Nuclear lens darkens (browning from light absorption by oxidized proteins)\n**Hydration**: Cortical water content increases initially, then dehydrates`,
        mnemonics: [
          { text: "Cataract: Protein aggregation + osmotic swelling + oxidative damage → opacity", explanation: "Three mechanisms" },
        ],
        keyPoints: [
          "Lens protein aggregation primary mechanism of opacity",
          "Osmotic swelling from sodium pump dysfunction causes cortical opacity",
          "Oxidative stress and lipid peroxidation drive cataract formation",
          "Glutathione decline with age impairs antioxidant defense",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "6", edition: "7th" },
        ],
      },
      { layer: 3, slug: "cataract-clinical", title: "Cataract - Clinical", estimatedMinutes: 30, summary: "Clinical presentation, examination findings, imaging, management indications.", contentMd: `# Cataract - Clinical\n\n## Clinical Presentation\n\n**Vision loss**: Gradual, painless blurring of distance and near vision\n**Glare**: Particularly in bright sunlight or night driving (light scattering)\n**Monocular diplopia**: Double vision (multiple lens opacities refract differently)\n**Myopic shift**: Nuclear cataract increases refractive power (myopia develops)\n**Color changes**: Yellow/brown tint with age (nuclear brunescence)\n\n## Slit-Lamp Examination\n\n**Nuclear cataract**: Brown/amber discoloration of nucleus, hard lens\n**Cortical cataract**: Wedge-shaped opacities in cortex, spoke-like pattern\n**Posterior subcapsular**: Dense plaques at posterior capsule, affects near vision more than distance\n**Anterior subcapsular**: Opacities just inside anterior capsule (less common)\n\n## Vision Assessment\n\n**Distance VA**: Usually decreased\n**Refraction**: Nuclear cataract may show myopic shift\n**Glare testing**: Quantify visual disability\n**Contrast sensitivity**: Often reduced out of proportion to VA\n**APD**: Absent in uncomplicated cataract (both pupils respond equally)\n\n## Management Indications for Surgery\n\n**Vision-based**: VA reduced to <6/9 or 20/30 (driving threshold)\n**Occupational**: Based on patient's work/lifestyle demands\n**Monocular**: Better tolerance of lower VA; surgery often delayed\n**Medical**: Phacomorphic glaucoma (emergency), phacolytic glaucoma\n**Surgical planning**: Fellow eye status, patient expectations`,
        mnemonics: [
          { text: "Cataract slit-lamp: Nuclear (brown), Cortical (wedges), PSC (plaques)", explanation: "Morphology types" },
        ],
        keyPoints: [
          "Vision loss gradual, painless; glare prominent in nuclear cataract",
          "Nuclear cataract causes myopic shift (temporary vision improvement initially)",
          "Posterior subcapsular worst for near vision (reading problems early)",
          "Contrast sensitivity often reduced out of proportion to VA",
          "Surgery indications: VA <6/9 (20/30) or occupational needs",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "6", edition: "7th" },
        ],
      },
      { layer: 4, slug: "cataract-exam", title: "Cataract - Exam Prep", estimatedMinutes: 20, summary: "NEET-style management, surgical indications, prevention strategies.", contentMd: `# Cataract - Exam Prep\n\n## Key Facts\n1. Cataract leading cause global blindness (~50% in developing countries)\n2. Age-related most common type\n3. Smoking increases risk 2-3x\n4. UV exposure cumulative\n5. Diabetes increases risk; tight control protective\n6. Corticosteroids (long-term) increase risk\n7. Nuclear: myopic shift, brown discoloration\n8. Cortical: wedge opacities, spokes\n9. PSC: posterior plaques, near vision affected first\n10. Surgery indications: VA <6/9 (20/30) or occupational needs\n\n## Prevention Strategies\n\n**Modifiable risk factors**:\n- Smoking cessation (2-3x risk reduction)\n- UV protection (sunglasses with UV-A/UV-B blocks)\n- Tight glycemic control (diabetes)\n- Minimize corticosteroid use (when possible)\n- Healthy diet (antioxidant foods)\n- No evidence for vitamin supplements (AREDS studies)\n\n## Surgical Planning\n\n**Indications**: VA <6/9 (20/30), occupational needs, medical reasons\n**Fellow eye status**: Important in monocular cataract (higher threshold)\n**Patient expectations**: Must understand realistic outcomes\n**Lens implant selection**: Based on patient's refractive error, lifestyle`,
        mnemonics: [
          { text: "Cataract risk: Smoking 2-3x, UV cumulative, diabetes modifiable", explanation: "Risk factors" },
        ],
        keyPoints: [
          "Age-related cataract most common; preventable with UV protection",
          "Smoking 2-3x increased risk; modifiable",
          "Nuclear cataract: myopic shift, brown lens, glare",
          "Cortical cataract: wedge opacities, spokes",
          "PSC: posterior plaques, near vision early",
          "Surgery indications based on VA and occupational needs",
          "Prevention: UV protection, smoking cessation, glucose control",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "6", edition: "7th" },
        ],
      },
      { layer: 5, slug: "cataract-recall", title: "Cataract - Active Recall", estimatedMinutes: 15, summary: "10 clinical cases on cataract assessment, management, and surgical indications.", contentMd: `# Active Recall: Cataract\n\n**Q1**: 65-year-old smoker with age-related nuclear cataract, VA 6/9. Complains of glare in sunlight. Surgery indicated?\n> A: VA 6/9 meets driving threshold (just). However, glare complaint significant occupational impact (driving at night). Consider surgery despite borderline VA (patient-specific). Risk: smoking 2-3x increased; if failed surgery risk, may delay. Counsel benefits vs risks.\n\n**Q2**: 45-year-old on systemic corticosteroids (rheumatoid arthritis) develops early cataract. Management?\n> A: Corticosteroid-induced cataract. Discuss with rheumatologist tapering/alternative therapy if possible. If must continue: eye drops for comfort, consider switching to intra-articular injections (local effect, less systemic). Monitor closely (more aggressive progression). Surgery when VA threshold reached.\n\n**Q3**: 55-year-old Type 2 diabetic, HbA1c 10%, develops cataract. Prevention? Management?\n> A: Tight glucose control reduces risk (target <7% HbA1c). Already developed cataract (likely years of poor control). Current: manage medically (drops for symptoms); surgical indications same as non-diabetic. Prevent other eye: aggressive glucose management now.\n\n**Q4**: Patient with posterior subcapsular cataract, VA 6/6 distance but difficulty reading (presbyopia). Can near vision improve with cataract surgery?\n> A: PSC affects near vision preferentially (lens opacification near pupil center affects accommodation zone). Near VA likely worse than distance. After surgery (removal of PSC): near VA may improve, but presbyopia will require reading glasses (as if cataract not there). Overall benefit: better near vision after surgery vs before (PSC removed), but still needs correction for presbyopia.\n\n**Q5**: Diabetic patient with cataract, fellow eye with diabetic macular edema. Timing of cataract surgery?\n> A: Careful planning needed. If fellow eye vision limited (DME), must preserve this eye. Better to wait for DME treatment/improvement before cataract surgery (allows better visual outcome). If cataract mature and symptomatic: surgery before DME progresses further (prevents added vision loss from two sources). Coordinate with retina specialist.\n\n**Q6**: Patient on topical corticosteroids (for dry eye) for 5 years develops posterior subcapsular cataract. Alternative therapy?\n> A: Long-term topical corticosteroids risk for PSC (especially if high potency, frequent use). Alternatives: (1) Reduce steroid frequency/potency if dry eye permits; (2) Switch to NSAIDs (less cataract risk); (3) Use steroid-sparing agents (cyclosporine, lifitegrast); (4) Minimize duration. If cataract advanced: surgery indicated.\n\n**Q7**: 70-year-old with dense cataract, unable to see fundus. Complains of floaters and flashing lights. How to assess posterior pole?\n> A: Cannot visualize posterior pole due to cataract. Investigations: B-scan ultrasound (detects retinal detachment, posterior pathology), OCT if possible (may penetrate cataract with newer devices). Clinical: if floaters/flashing + dense cataract suspicious for retinal detachment. Counsel: cataract surgery necessary for retinal assessment; retinal pathology may limit visual prognosis (must discuss).\n\n**Q8**: Patient refuses cataract surgery (VA 6/18) saying \"vision adequate\". Counseling?\n> A: Respect patient autonomy; inform fully. Discuss: (1) VA expected decline without surgery; (2) Glare effects on driving; (3) Surgical risks/benefits (>95% good outcomes); (4) Reversibility (can be removed); (5) Timeline (no rush if stable); (6) Alternative: try updated glasses prescription (small benefit possible from myopic shift). Document discussion. Can revisit when patient ready or VA declines further.\n\n**Q9**: Young patient (40 years old) with congenital cataract in one eye, high myopia in same eye. Etiology?\n> A: Congenital cataract suggests intrauterine infection (TORCH), metabolic disorder, or genetic. Myopia in same eye may be related (developmental abnormality). Investigations: (1) Maternal history (intrauterine infection); (2) Systemic workup (metabolic, genetic); (3) Imaging (ultrasound if opacity dense); (4) Fellow eye assessment. Management: cataract surgery when visually significant; refractive correction afterward; visual rehabilitation may be needed (amblyopia risk if long-standing opacity).\n\n**Q10**: Nuclear cataract patient now myopic (+1.50D shift in refraction). \"Improvement\" in glasses? Why?\n> A: Nuclear sclerosis increases refractive power → myopic shift (similar to adding minus lens power). Patient may temporarily see better at distance without correction (or need weaker correction). This is temporary benefit; true cataract still progressing. Will eventually outgrow this benefit (as nucleus becomes very dense, light scattering exceeds refractive power gain). Counsel: myopic shift not improvement, but sign of progression. Eventually VA will decline.`,
        mnemonics: [
          { text: "Cataract types: Nuclear (brown, myopic shift), Cortical (wedges), PSC (near affected first)", explanation: "Morphology and clinical features" },
        ],
        keyPoints: [
          "Age-related cataract progressive; surgery when VA <6/9 (20/30) or occupational impact",
          "Posterior subcapsular affects near vision preferentially",
          "Nuclear cataract myopic shift (temporary benefit, then declines)",
          "Smoking 2-3x increased risk; modifiable risk factor",
          "Corticosteroids (long-term) increase risk; minimize when possible",
          "Prevention: UV protection, glucose control, smoking cessation",
          "Surgery indications patient-specific; occupational needs important",
          "Surgical outcomes excellent (>95% achieve good vision)",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "6", edition: "7th" },
        ],
      },
    ],
  },
];
