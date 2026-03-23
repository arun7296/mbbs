export const newBatch7Lessons = [
  {
    topicCode: "OG-MOD-03-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "instrumental-delivery-foundation",
        title: "Instrumental Delivery - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of instrumental delivery methods, indications, and prerequisites in obstetrics.",
        contentMd: "# Instrumental Delivery - Foundation\n\n## Definition\nInstrumental delivery refers to vaginal delivery with assistance using forceps or vacuum extraction. Essential obstetric intervention per WHO guidelines.\n\n## Types of Instruments\n- **Forceps**: Metal instruments with cephalic curve\n- **Vacuum**: Cup-shaped device creating suction\n\n## Indications\n- Prolonged second stage of labour\n- Fetal distress (non-reassuring FHR patterns)\n- Maternal exhaustion\n- Maternal medical conditions (cardiac disease, hypertension)\n\n## Prerequisites for Safe Application\n- Full cervical dilatation\n- Ruptured membranes\n- Empty bladder\n- Engaged head (at least 2+ station)\n- Known position of head\n- Empty uterus (singleton)\n\n## Current Indian Practice\nNICU and FIGO guidelines recommend instrumental delivery for fetal distress and prolonged labour per NMC CBME standards.",
        mnemonics: [
          {
            text: "FORCE",
            explanation: "Fetal distress, Obstruction (prolonged labour), Respiratory (maternal exhaustion), Cardiac/medical conditions, Exhaustion of mother"
          },
          {
            text: "SAFE",
            explanation: "Second stage assessment, Amniotic membranes ruptured, Full dilatation, Engaged head at 2+ station"
          }
        ],
        keyPoints: [
          "Forceps: metallic, bipolar application",
          "Vacuum: suction-based, operator-dependent",
          "Requires full cervical dilatation",
          "Fetal head must be engaged",
          "Contraindicated in cephalopelvic disproportion"
        ],
        textbookRefs: [
          { book: "Williams Obstetrics", chapter: "17", edition: "25th" },
          { book: "NICU Guidelines on Instrumental Delivery", chapter: "Operative Obstetrics", edition: "2023" }
        ]
      },
      {
        layer: 2,
        slug: "instrumental-delivery-mechanism",
        title: "Instrumental Delivery - Mechanism",
        estimatedMinutes: 30,
        summary: "Mechanisms, classification, technique, and biomechanics of forceps and vacuum delivery.",
        contentMd: "# Instrumental Delivery - Mechanism\n\n## Classification of Forceps Delivery (ACOG)\n\n### Outlet Forceps\n- Scalp visible at introitus without separating labia\n- Sagittal suture in OA or rotation <45°\n- Lowest station (+3 or more)\n\n### Mid-Forceps\n- Head engaged but not on perineum\n- Station between +2 and +3\n- Scalp not visible\n- Now CONTRAINDICATED by ACOG (increased maternal-fetal morbidity)\n\n### High Forceps\n- Head not engaged\n- CONTRAINDICATED - requires cesarean delivery\n\n## Vacuum Extraction\n- Soft cup preferred over rigid cup\n- Maximum 3 pulls per contraction\n- Maximum 3 cup detachments (pop-offs)\n- Total application time <20 minutes\n- Success rate: 60-70% with proper selection\n\n## Mechanism of Descent\n- Traction applied parallel to pelvic curve\n- Flexion maintained throughout\n- Traction during contractions optimizes force\n- Restitution and external rotation occur naturally\n\n## Comparing Forceps vs Vacuum\n- Forceps: direct traction, better control, steeper learning curve\n- Vacuum: operator-friendly, less maternal trauma potential, higher failure rates",
        mnemonics: [
          {
            text: "OMS",
            explanation: "Outlet (visible scalp), Mid (now abandoned), S=Safety concerns"
          }
        ],
        keyPoints: [
          "Outlet delivery safest, highest success",
          "Mid-forceps now contraindicated globally",
          "Vacuum: 3-3-20 rule (pulls, pop-offs, time)",
          "Traction always parallel to pelvic curve",
          "Fetal head flexion essential"
        ],
        textbookRefs: [
          { book: "ACOG Obstetric Care Consensus", chapter: "2", edition: "2016" },
          { book: "Cunningham's Obstetrics", chapter: "18", edition: "26th" }
        ]
      },
      {
        layer: 3,
        slug: "instrumental-delivery-clinical",
        title: "Instrumental Delivery - Clinical Application",
        estimatedMinutes: 20,
        summary: "Clinical scenarios, complications, maternal-fetal outcomes, and complications in Indian settings.",
        contentMd: "# Instrumental Delivery - Clinical Application\n\n## Indications Encountered in Labour Ward\n\n### Fetal Indications\n- Category II FHR patterns (prolonged deceleration, variable deceleration with concerning features)\n- Scalp stimulation test positive but non-reassuring\n- Acidosis suspected (fetal scalp pH <7.20)\n\n### Maternal Indications\n- Exhaustion after prolonged pushing (>2 hours in nulliparas, >1 hour in multiparas)\n- Hypertensive emergency requiring expedited delivery\n- Cardiac disease with hemodynamic compromise\n- Pulmonary disease with respiratory reserve exhaustion\n\n## Complications\n\n### Maternal\n- Perineal trauma (3rd/4th degree tears)\n- Bladder/urethral injury\n- Symphysis pubis trauma\n- Postpartum hemorrhage (higher risk with failed attempt)\n\n### Fetal\n- Cephalohematoma\n- Subgaleal hemorrhage (serious, vacuum-related)\n- Retinal hemorrhages\n- Brachial plexus injury (rare)\n- Facial/scalp lacerations\n\n## Clinical Decision-Making\n- Assess pelvic adequacy clinically (diagonal conjugate >12.5 cm suggests adequate pelvis)\n- Confirm non-reassuring FHR pattern objectively\n- Consider assisted vaginal delivery vs cesarean based on operator skill, station, position",
        mnemonics: [
          {
            text: "TRAP",
            explanation: "Tear (perineal), Retained blood, Acidosis, Pudendal block needed"
          }
        ],
        keyPoints: [
          "Failed first/second pull = abandon attempt",
          "Subgaleal hemorrhage is obstetric emergency",
          "3rd degree tear rate: 5-10% with forceps",
          "Pudendal block mandatory if no epidural",
          "Informed consent: discuss fetal scalp marks"
        ],
        textbookRefs: [
          { book: "Ian Donald's Practical Obstetric Problems", chapter: "15", edition: "7th" },
          { book: "FIGO Guidelines Assisted Vaginal Delivery", chapter: "2023", edition: "Current" }
        ]
      },
      {
        layer: 4,
        slug: "instrumental-delivery-exam",
        title: "Instrumental Delivery - Exam Preparation",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ concepts, common exam questions, and clinical reasoning.",
        contentMd: "# Instrumental Delivery - Exam Preparation\n\n## High-Yield Concepts for NEXT\n\n### Problem-Solving Scenarios\n- G2P1 at 20 minutes second stage with Category II FHR (what next?) - instrumental delivery if trained operator\n- Nullipara with prolonged second stage, adequate pelvis, operator available - outlet forceps vs push further?\n- Failed vacuum extraction in OA position - convert to forceps (if trained) or cesarean\n\n### Analysis Questions\n- Compare risk-benefit: vacuum (higher failure, lower maternal trauma) vs forceps (lower failure, higher perineal trauma)\n- Indications for pudendal vs epidural anesthesia\n- Why mid-forceps abandoned: no maternal-fetal benefit over cesarean, unacceptable fetal injury rates\n\n### Recall\n- Definition: vaginal delivery with instrument assistance\n- Prerequisite: full dilatation, rupture of membranes, engagement\n- Contraindication: suspected CPD, unengaged head, prematurity <34 weeks (relative)\n- Maternal complications: perineal tears, hemorrhage\n- Fetal: cephalohematoma, subgaleal bleed, retinal hemorrhage\n\n## Key Discriminators\n- Outlet forceps safe and effective (success >95%)\n- Vacuum safer for maternal outcome but higher failure rate\n- Conversion from failed vacuum to cesarean preferred over abandoned attempt complications",
        mnemonics: [
          {
            text: "VEF",
            explanation: "Vacuum: Easy learning, Failure higher, Forceps: Better success, Fetal injury from vacuum less"
          }
        ],
        keyPoints: [
          "Outlet delivery always safe if criteria met",
          "Mid-forceps absolute contraindication",
          "Failed instrumental = cesarean delivery",
          "Maternal choice influences decision making",
          "Skill-dependent outcomes"
        ],
        textbookRefs: [
          { book: "NMC CBME Curriculum - Obstetrics", chapter: "Operative Delivery", edition: "2020" },
          { book: "NEJM Review of Assisted Vaginal Delivery", chapter: "Current Evidence", edition: "2022" }
        ]
      },
      {
        layer: 5,
        slug: "instrumental-delivery-recall",
        title: "Instrumental Delivery - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall facts and clinical mnemonics for rapid retrieval.",
        contentMd: "# Instrumental Delivery - Active Recall\n\n## Rapid-Fire Facts\n\n1. **Outlet forceps**: scalp visible without separating labia, rotation <45°, success >95%\n2. **Mid-forceps**: CONTRAINDICATED (ACOG, WHO guidelines)\n3. **Vacuum 3-3-20**: 3 pulls, 3 detachments, 20 minutes max\n4. **Prerequisites**: full dilation, ruptured membranes, head engaged (≥2 station), known position\n5. **Indications**: prolonged 2nd stage (>2h nullipara, >1h multipara), fetal distress, maternal exhaustion\n6. **Contraindications**: suspected CPD, unengaged head, prematurity <34w, suspected bone disease (osteogenesis imperfecta)\n7. **Maternal complications**: 3rd/4th tear (5-10%), hemorrhage, bladder injury\n8. **Fetal complications**: cephalohematoma, subgaleal hemorrhage (emergency), retinal hemorrhage\n9. **Pudendal block**: infiltrates lateral vaginal wall at ischial spine\n10. **Failed delivery**: convert to cesarean within 15-20 minutes\n\n## One-Liners\n- Outlet = safe. Mid = not done. High = cesarean.\n- Vacuum fails → cesarean. Forceps fail → reconsider application.\n- Fetal distress + adequate pelvis + engaged head + trained operator = instrument trial.\n- Subgaleal bleed = neonatal emergency (blood loss, coagulopathy risk).",
        mnemonics: [
          {
            text: "SAFE BIRTH",
            explanation: "Second stage, Adequate pelvis, Full dilation, Empty bladder, Brow assessment, Indications clear, Rupture confirmed, Trained operator, Head engaged"
          }
        ],
        keyPoints: [
          "Outlet delivery success >95%, safest option",
          "Inform parents: scalp marks, cephalohematoma risk",
          "Failed attempt = avoid repeat, go to cesarean",
          "Subgaleal hemorrhage rare but serious",
          "Skill maintenance essential"
        ],
        textbookRefs: [
          { book: "Obstetric Care Guidelines Quick Reference", chapter: "Assisted Delivery", edition: "2023" }
        ]
      }
    ]
  },
  {
    topicCode: "OP-MOD-05-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "blindness-npcb-foundation",
        title: "Blindness & NPCB - Foundation",
        estimatedMinutes: 20,
        summary: "Definition of blindness, classification, global burden, and NPCB overview.",
        contentMd: "# Blindness & National Programme for Control of Blindness - Foundation\n\n## Definitions (WHO)\n\n### Visual Acuity Classification\n- **Normal**: ≥6/6 or ≥20/20\n- **Low vision**: <6/18 to ≥3/60 (visual acuity or field defect)\n- **Blindness**: <3/60 or visual field <10° in best eye\n- **Economic blindness**: inability to perform usual occupation due to vision loss\n\n## Burden of Blindness in India\n- India: ~12 million blind (globally 43 million)\n- Leading causes: cataract (66%), corneal scarring (11%), refractive errors (7%)\n- Preventable/treatable: 80% of all blindness\n- Age-related: prevalence increases after 60 years\n\n## Global Impact\n- Economic loss: $411 billion annually (WHO)\n- Developing nations: higher burden due to untreated conditions\n- Quality of life: severe impact on employment, independence, mental health\n\n## NPCB Overview\n- Launched: 1976 in India\n- Focus: prevention, treatment, rehabilitation\n- Target: eliminate avoidable blindness\n- Integration with NPCDCS and NRHM",
        mnemonics: [
          {
            text: "SAFE",
            explanation: "Surgery (cataract), Antibiotics (trachoma), Facial cleanliness, Environmental improvement"
          }
        ],
        keyPoints: [
          "Blindness defined as VA <3/60 in better eye",
          "80% blindness preventable/treatable in India",
          "Cataract: 66% of blind in India",
          "Economic burden: $411 billion globally",
          "NPCB integrated with national health programs"
        ],
        textbookRefs: [
          { book: "KDT Ophthalmology", chapter: "13", edition: "8th" },
          { book: "Park's Textbook of Public Health", chapter: "11", edition: "27th" }
        ]
      },
      {
        layer: 2,
        slug: "blindness-npcb-mechanism",
        title: "Blindness & NPCB - Epidemiology & Mechanisms",
        estimatedMinutes: 30,
        summary: "Causes of blindness, pathophysiology, risk factors, and epidemiological patterns.",
        contentMd: "# Blindness & NPCB - Epidemiology & Mechanisms\n\n## Leading Causes of Blindness (India-specific)\n\n### Anterior Segment\n- **Cataract**: 66% (protein aggregation, oxidative stress)\n- **Corneal scarring**: 11% (trachoma, Stevens-Johnson, chemical burn)\n- **Refractive error**: 7% (uncorrected myopia, hyperopia)\n- **Pterygium**: degenerative wing-like growth\n\n### Posterior Segment\n- **Diabetic retinopathy**: 3-5% (microvascular occlusion, neovascularization)\n- **Age-related macular degeneration**: 2-3% (lipofuscin accumulation, drusen)\n- **Retinitis pigmentosa**: 1-2% (photoreceptor degeneration)\n\n### Optic Nerve\n- **Glaucoma**: 5-7% (elevated IOP, optic nerve damage)\n- **Optic atrophy**: post-infection, post-trauma\n\n## Risk Factors (NPCB Framework)\n- Age >60 years\n- Diabetes mellitus (RR 25 for DR)\n- Hypertension\n- Prolonged UV exposure\n- Poor nutrition (Vitamin A deficiency)\n- Female gender (higher cataract prevalence)\n- Lower socioeconomic status\n- Limited healthcare access\n\n## Pathophysiology Examples\n- **Cataract**: osmotic stress, calcium influx, protein cross-linking\n- **DR**: hyperglycemia → PKC activation, VEGF release, vascular permeability\n- **Glaucoma**: chronic IOP elevation → RGC apoptosis",
        mnemonics: [
          {
            text: "CDGR",
            explanation: "Cataract 66%, Diabetic retinopathy, Glaucoma, Refractive errors"
          }
        ],
        keyPoints: [
          "Cataract: most common (66%), highly treatable",
          "Diabetes: 25x increased risk for blindness",
          "Age: exponential increase after 60 years",
          "Female preponderance: hormonal factors",
          "Urban-rural divide: access to treatment"
        ],
        textbookRefs: [
          { book: "Bowling's Ophthalmology", chapter: "1-2", edition: "6th" },
          { book: "National Health Survey Data - Vision Loss", chapter: "NPCB Report 2023", edition: "Current" }
        ]
      },
      {
        layer: 3,
        slug: "blindness-npcb-clinical",
        title: "Blindness & NPCB - Clinical Management & Program",
        estimatedMinutes: 20,
        summary: "Clinical assessment, NPCB strategies, prevention, screening, and treatment.",
        contentMd: "# Blindness & NPCB - Clinical Management & Program\n\n## Clinical Assessment of Vision Loss\n- **Visual acuity**: Snellen chart, E-chart, or illiterate E\n- **Visual field**: confrontation, perimetry if abnormal\n- **Slit-lamp examination**: anterior segment pathology\n- **Dilated fundoscopy**: posterior segment assessment\n- **IOP measurement**: glaucoma screening\n- **Refraction**: rule out correctable error\n\n## NPCB Strategies (VISION 2020)\n\n### Primary Prevention\n- Nutrition: Vitamin A supplementation (250,000 IU twice yearly for children <5y)\n- Health education: UV protection, smoking cessation, diabetic control\n- Improved sanitation: reduce trachoma transmission\n- Eye protection: occupational safety\n\n### Secondary Prevention\n- Community screening camps (annual in high-risk areas)\n- School eye screening (age 6-15 years)\n- Workplace screening (industrial settings)\n- Antenatal care: ROP prevention in neonates\n\n### Tertiary Prevention\n- **Cataract surgery**: target 100,000+ surgeries/year in India\n- **DR management**: laser photocoagulation, anti-VEGF (bevacizumab locally)\n- **Glaucoma**: medication, laser, surgery\n- **Corneal grafting**: for scarring\n\n### Rehabilitation\n- Low vision aids: magnifiers, spectacles, contact lenses\n- Counseling: acceptance, mobility, vocational training\n- Integration: workplace adaptations\n\n## Coverage Goals (NPCB 2023)\n- Cataract surgical coverage: 80%\n- Screening coverage: 40% of population\n- Treatment availability: all district hospitals",
        mnemonics: [
          {
            text: "VISION2020",
            explanation: "Vision - primary/secondary/tertiary prevention, Integrated approach, Screening camps, Infrastructure, Operating theaters (surgery), Nutrition (Vit A)"
          }
        ],
        keyPoints: [
          "Vitamin A: prevents 250,000 childhood blindness cases/year",
          "Cataract surgery: cost-effective (cost:benefit 1:40)",
          "Screening: annual in rural areas, biennial in urban",
          "Mobile units: reach underserved populations",
          "ROP prevention: oxygen saturation monitoring in NICU"
        ],
        textbookRefs: [
          { book: "NPCB Strategy Document", chapter: "2023 Update", edition: "Current" },
          { book: "WHO Guidelines VISION 2020", chapter: "Prevention", edition: "2022" }
        ]
      },
      {
        layer: 4,
        slug: "blindness-npcb-exam",
        title: "Blindness & NPCB - Exam Preparation",
        estimatedMinutes: 15,
        summary: "NEXT-pattern questions, examination focus, and clinical problem-solving.",
        contentMd: "# Blindness & NPCB - Exam Preparation\n\n## Problem-Solving (60%)\n\n### Scenario 1\n\"60-year-old diabetic with gradual vision loss. VA 6/36. What is most likely diagnosis and NPCB intervention?\"\n- **Answer**: Diabetic retinopathy (early nonproliferative). Intervention: glycemic control, laser if advanced, anti-VEGF if macular edema.\n\n### Scenario 2\n\"10-year-old with recurrent eye infections, corneal scarring. NPCB focus?\"\n- **Answer**: Trachoma. Prevention: antibiotics (azithromycin), facial cleanliness, water access (SAFE strategy).\n\n## Analysis (30%)\n\n### Why is cataract surgery most cost-effective intervention?\n- ROI: 1 cataract surgery (₹1500-3000) restores vision, person works 10-15 more years\n- Prevents falls, improves quality of life, reduces depression\n- Surgical infrastructure already exists\n\n### Comparing prevention strategies: cost-effectiveness\n- Vitamin A: cost ₹30/dose, prevents blindness in 1 child per 1000 (NNT 1000)\n- School screening: identifies refractive error (NNT 10 for meaningful intervention)\n- Workplace screening: high yield in young adults\n\n## Recall (10%)\n- Blindness: VA <3/60 in better eye\n- Leading cause India: cataract (66%)\n- Preventable: 80%\n- Vitamin A dose: 250,000 IU twice yearly\n- Trachoma SAFE: Surgery, Antibiotics, Facial cleanliness, Environmental improvement\n- NPCB target: 100,000 cataract surgeries/year",
        mnemonics: [
          {
            text: "NPCB",
            explanation: "National Programme, Prevention focus, Blindness elimination, Community screening"
          }
        ],
        keyPoints: [
          "Cataract: most common, most treatable (success >98%)",
          "DR: diabetes increases blindness risk 25x",
          "SAFE strategy: reduces trachoma by 50% in 5 years",
          "School screening: reach 10 million children/year",
          "Vitamin A: cost-effective in endemic regions"
        ],
        textbookRefs: [
          { book: "NMC CBME - Public Health Ophthalmology", chapter: "Prevention Programs", edition: "2023" },
          { book: "Indian Journal of Ophthalmology - NPCB Review", chapter: "2023", edition: "Current" }
        ]
      },
      {
        layer: 5,
        slug: "blindness-npcb-recall",
        title: "Blindness & NPCB - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid-fire facts and clinical pearls for quick retention.",
        contentMd: "# Blindness & NPCB - Active Recall\n\n## Key Facts (Rapid)\n\n1. **Blindness definition**: VA <3/60 in better eye (WHO)\n2. **India statistics**: 12 million blind, 66% cataract\n3. **Global statistics**: 43 million blind, 80% preventable\n4. **Economic cost**: $411 billion annual loss globally\n5. **NPCB launch**: 1976, integrated with NRHM\n6. **Vitamin A dose**: 250,000 IU twice yearly for children <5y\n7. **Cataract surgery**: target 100,000+/year, cost ₹1500-3000\n8. **DR risk**: diabetes increases blindness risk 25-fold\n9. **Glaucoma detection**: IOP >21 mmHg + optic disc cupping\n10. **ROP prevention**: oxygen saturation 85-95% in NICU\n11. **SAFE strategy**: Surgery, Antibiotics (azithromycin), Facial cleanliness, Environmental water\n12. **Screening interval**: annual rural, biennial urban\n13. **School screening age**: 6-15 years\n14. **Corneal scarring causes**: trachoma, SJS, chemical burn\n15. **Female preponderance**: 3:2 for cataract (hormonal)\n\n## One-Liners\n- Cataract: 66% → surgery fixes 98%\n- Diabetes: control glucose, prevent DR\n- VISION 2020 = prevention at all levels\n- NPCB = equity + access + quality\n- Vitamin A = cheapest blindness prevention",
        mnemonics: [
          {
            text: "BLIND-CHECK",
            explanation: "Best corrected VA, Low vision assessment, Incidence tracking, No preventable blindness, Diagnosis confirmed, Counseling offered, Head tilt (testing visual field), Early intervention, Corneal assessment, Knowledge of programs"
          }
        ],
        keyPoints: [
          "3/60 = legally blind (not 6/60)",
          "Cataract: surgery cost-effective, high success",
          "Vitamin A: prevents 250,000 childhood cases/year globally",
          "NPCB covers screening + treatment + rehabilitation",
          "Urban-rural gap: 2:1 cataract surgery access"
        ],
        textbookRefs: [
          { book: "Quick Reference - NPCB 2023", chapter: "Key Indicators", edition: "Current" }
        ]
      }
    ]
  },
  {
    topicCode: "OR-MOD-05-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "rheumatoid-arthritis-foundation",
        title: "Rheumatoid Arthritis - Foundation",
        estimatedMinutes: 20,
        summary: "Definition, epidemiology, clinical presentation, and diagnostic criteria of rheumatoid arthritis.",
        contentMd: "# Rheumatoid Arthritis - Foundation\n\n## Definition\nRheumatoid arthritis (RA): chronic systemic autoimmune disease causing symmetric polyarticular inflammation with potential for joint destruction and extra-articular manifestations.\n\n## Epidemiology (India)\n- Prevalence: 0.3-1.2% (urban), lower in rural areas\n- Age: peak onset 40-60 years (can occur at any age)\n- Gender: female:male = 3:1 (hormonal factors)\n- Incidence: 20-30 per 100,000 annually\n- Global: 25 million affected, leading disability cause in developed nations\n\n## Pathophysiology Overview\n- Autoimmune disease: T-cell and B-cell activation\n- Immune complex deposition in synovium\n- Cytokine-mediated inflammation (TNF-α, IL-6)\n- Progressive joint cartilage and bone destruction\n- Systemic vascular and organ involvement\n\n## Clinical Features\n\n### Articular\n- **Onset**: insidious (weeks to months) or acute\n- **Pattern**: symmetric (hands, feet, knees, ankles)\n- **Morning stiffness**: >60 minutes (prognostic indicator)\n- **Joint pain, swelling, warmth**: worse with activity\n- **Functional impairment**: progresses to disability\n\n### Extra-articular (15-30% at diagnosis)\n- Rheumatoid nodules (subcutaneous)\n- Pulmonary (interstitial lung disease)\n- Cardiac (pericarditis, myocarditis)\n- Ocular (scleritis, episcleritis)\n- Hematologic (anemia, thrombocytosis)",
        mnemonics: [
          {
            text: "RATCHET",
            explanation: "Rheumatoid nodules, Anemia, Thrombocytosis, Cardiac involvement, Heart rate elevation, Extra-articular, Tissue destruction"
          }
        ],
        keyPoints: [
          "Symmetric polyarthritis (hallmark)",
          "Morning stiffness >60 min (diagnostic)",
          "Female:male = 3:1",
          "Progressive joint destruction without treatment",
          "Early remission critical for long-term function"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "326", edition: "21st" },
          { book: "Robbins & Kumar Pathology", chapter: "13", edition: "9th" }
        ]
      },
      {
        layer: 2,
        slug: "rheumatoid-arthritis-mechanism",
        title: "Rheumatoid Arthritis - Pathogenesis & Immunology",
        estimatedMinutes: 30,
        summary: "Immunologic mechanisms, genetic factors, environmental triggers, and inflammatory cascade.",
        contentMd: "# Rheumatoid Arthritis - Pathogenesis & Immunology\n\n## Genetic Predisposition\n- **HLA-DR4**: present in 70% of RA patients (vs 25% healthy)\n- **Anti-CCP antibodies**: more specific than RF (96%), present before symptom onset\n- **Rheumatoid Factor (RF)**: IgM antibodies against IgG Fc (positive in 70-80%)\n- **Genetic loci**: PTPN22, STAT4, IL2RA (polygenic inheritance)\n\n## Immunologic Cascade\n\n### Phase 1: Initiation\n- Environmental trigger (infection, smoking, molecular mimicry)\n- Abnormal HLA presentation to T cells\n- Breaking of self-tolerance (loss of regulatory T cells)\n\n### Phase 2: Activation\n- T-helper cell activation\n- B-cell stimulation → plasma cell production\n- Autoantibody generation (RF, anti-CCP, anti-collagen)\n- Immune complex formation\n\n### Phase 3: Synovial Inflammation\n- Immune complex deposition in synovium\n- Complement activation (C5a chemotaxis)\n- Macrophage infiltration\n- Cytokine production: TNF-α, IL-1, IL-6, IL-8, GM-CSF\n\n### Phase 4: Tissue Destruction\n- Fibroblast-like synovial cells (FLS) activation\n- RANKL expression → osteoclast differentiation\n- Matrix metalloproteinase (MMP) production → cartilage erosion\n- Pannus formation → bone destruction\n- Angiogenesis supporting inflamed synovium\n\n## Environmental Triggers\n- **Smoking**: 15x increased risk, impairs B-cell tolerance\n- **Infections**: EBV, Mycobacterium tuberculosis (molecular mimicry)\n- **Silica exposure**: occupational risk\n- **Female reproductive factors**: pregnancy remission, postpartum relapse",
        mnemonics: [
          {
            text: "PANNUS",
            explanation: "Prolifer ation of FLS, Angiogenesis, Netosis (neutrophil), Neovascularization, Upregulation of cytokines, Systemic effects"
          }
        ],
        keyPoints: [
          "HLA-DR4: 70% of RA patients",
          "Anti-CCP: more specific than RF (96% vs 80%)",
          "TNF-α: central cytokine (targets for biologic therapy)",
          "Pannus: invades cartilage, erodes bone",
          "Early intervention crucial to prevent damage"
        ],
        textbookRefs: [
          { book: "Textbook of Rheumatology (Kelley & Firestein)", chapter: "8-10", edition: "11th" },
          { book: "Immunology (Kuby)", chapter: "13", edition: "9th" }
        ]
      },
      {
        layer: 3,
        slug: "rheumatoid-arthritis-clinical",
        title: "Rheumatoid Arthritis - Clinical Management",
        estimatedMinutes: 20,
        summary: "Diagnosis, investigation, treatment strategies, and management algorithms.",
        contentMd: "# Rheumatoid Arthritis - Clinical Management\n\n## Diagnostic Criteria (ACR/EULAR 2010)\nScore ≥6/10 diagnostic:\n- Joint involvement (0-4): small joints vs large\n- Serology (0-3): RF/anti-CCP positive (high or low)\n- Acute phase reactants (0-3): ESR >40 or CRP >10\n- Symptom duration (0-1): ≥6 weeks\n\n## Investigations\n- **Serology**: RF, anti-CCP (both before and at diagnosis)\n- **Inflammatory markers**: ESR, CRP (severity, prognosis)\n- **Imaging**: X-ray hands/feet (baseline, erosions indicate poor prognosis)\n- **Ultrasound**: synovitis detection (early, erosions)\n- **Exclude other conditions**: TB, HBV, HCV (infection risk with biologics)\n\n## Treatment Strategy (Treat-to-Target)\n\n### First-line: DMARDs\n- **Methotrexate**: 15-25 mg/week (PO or SC), gold standard\n  - Monitor: LFT, CBC, renal function monthly\n  - Toxicity: hepatotoxicity, myelosuppression\n  - Efficacy: 60-70% achieve remission\n- **Sulfasalazine**: 3-4 g/day (especially India, cost-effective)\n- **Hydroxychloroquine**: 200-400 mg/day (mild disease)\n- **Combination therapy**: MTX + Sulfasalazine + Hydroxychloroquine (triple therapy)\n\n### Second-line: Biologics (If inadequate response to DMARD)\n- **TNF inhibitors**: etanercept, infliximab, adalimumab, certolizumab\n  - Most effective, rapid response (4-12 weeks)\n  - Cost: ₹2000-5000/month in India\n  - Toxicity: infection risk (TB reactivation), malignancy risk\n- **IL-6 inhibitors**: tocilizumab (SC/IV)\n- **JAK inhibitors**: baricitinib (emerging in India)\n- **B-cell depletion**: rituximab (anti-CD20)\n\n### NSAIDs + Corticosteroids (Adjunctive)\n- NSAIDs: for symptom relief (not disease-modifying)\n- Corticosteroids: low-dose (<7.5 mg/day) (oral or intra-articular)\n- Avoid: prolonged high-dose steroids (bone loss, infection risk)\n\n## Target: Remission or Low Disease Activity\n- DAS28 <2.6 (remission) or <3.2 (low activity)\n- CRP <3 mg/dL, ESR <20\n- Reassess every 1-3 months\n- Escalate if target not met",
        mnemonics: [
          {
            text: "TREAT",
            explanation: "TNF-alpha inhibitors, Response monitoring, Early intensive therapy, Assess every 1-3 months, Target remission"
          }
        ],
        keyPoints: [
          "Methotrexate: gold standard DMARD",
          "Early intervention: prevents 50% of erosions",
          "Biologic therapy: 60-80% remission with TNF inhibitors",
          "Monitor TB risk: IGRA before biologics",
          "NSAIDs alone: inadequate, causes damage progression"
        ],
        textbookRefs: [
          { book: "EULAR Management Guidelines 2023", chapter: "Recommendations", edition: "Current" },
          { book: "ACR Rheumatoid Arthritis Management", chapter: "Treatment", edition: "2022" }
        ]
      },
      {
        layer: 4,
        slug: "rheumatoid-arthritis-exam",
        title: "Rheumatoid Arthritis - Exam Preparation",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ concepts, differential diagnosis, and clinical reasoning.",
        contentMd: "# Rheumatoid Arthritis - Exam Preparation\n\n## Problem-Solving (60%)\n\n### Scenario 1\n\"40-year-old female with 8-week history of symmetric joint pain (hands, knees), morning stiffness 90 minutes. RF positive, CRP 25 mg/dL. What is treatment?\"\n- **Answer**: Start DMARD immediately (methotrexate 15 mg/week), target remission in 3 months. Do not use NSAIDs alone. Screen for TB before considering biologics.\n\n### Scenario 2\n\"Patient on methotrexate for 6 months, still has elevated DAS28. Next step?\"\n- **Answer**: Add biologic (TNF inhibitor) or switch to combination DMARD therapy. Recheck TB status before biologic initiation.\n\n## Analysis (30%)\n\n### Why early DMARD therapy crucial?\n- Irreversible bone erosions can occur within first 6 months\n- Early remission → 80% prevention of joint damage\n- Late start → cumulative disability, worse prognosis\n- Cost-benefit: DMARD cost offset by reduced joint replacements\n\n### Comparing treatment options\n- Methotrexate vs Sulfasalazine: similar efficacy, MTX higher toxicity but faster\n- Biologic vs conventional DMARD: biologic faster (4-12 weeks), higher cost, infection risk\n- Monotherapy vs combination: combination superior for refractory cases\n\n## Recall (10%)\n- RA: female 3:1, symmetric polyarthritis\n- Diagnostic: ACR/EULAR score ≥6/10\n- RF positive: 70-80%, anti-CCP more specific (96%)\n- Gold standard: methotrexate\n- Biologic response: TNF inhibitors (60-80% remission)\n- Avoid: NSAIDs monotherapy, prolonged high-dose steroids\n- Monitor: LFT/CBC monthly (DMARD toxicity)",
        mnemonics: [
          {
            text: "START",
            explanation: "Serology check (RF, anti-CCP), Treatment early (DMARD), Assess monthly, Remission target, TB screen before biolofics"
          }
        ],
        keyPoints: [
          "Early DMARD: prevents 50-80% of erosions",
          "Methotrexate: 15-25 mg/week, monitor LFT",
          "Biologic: consider if inadequate response at 12 weeks",
          "RF/anti-CCP: prognostic (positive = worse prognosis)",
          "Pregnancy: methotrexate contraindicated, switch to sulfasalazine/biologic"
        ],
        textbookRefs: [
          { book: "NMC CBME - Rheumatology", chapter: "Inflammatory Arthritis", edition: "2023" },
          { book: "Indian Rheumatology Association Guidelines", chapter: "RA Management", edition: "2022" }
        ]
      },
      {
        layer: 5,
        slug: "rheumatoid-arthritis-recall",
        title: "Rheumatoid Arthritis - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid-fire facts and clinical pearls for exam success.",
        contentMd: "# Rheumatoid Arthritis - Active Recall\n\n## Key Facts\n\n1. **Definition**: chronic autoimmune polyarthritis (symmetric)\n2. **Female:male**: 3:1 (hormonal)\n3. **Age of onset**: 40-60 years typical\n4. **Prevalence India**: 0.3-1.2%\n5. **Pathognomonic feature**: morning stiffness >60 minutes\n6. **Most common joints**: PIP, MCP, wrist, knee, ankle\n7. **Deformity**: swan-neck (PIP hyperextension), boutonniere (PIP flexion)\n8. **RF positive**: 70-80%, but 20-30% seronegative\n9. **Anti-CCP**: 96% specific, appears before RF\n10. **HLA-DR4**: present in 70%, genetic predisposition\n11. **Diagnostic score**: ACR/EULAR ≥6/10\n12. **Gold standard DMARD**: methotrexate\n13. **Methotrexate dose**: 15-25 mg/week\n14. **Biologic onset**: 4-12 weeks (vs 6-8 weeks for DMARD)\n15. **TNF inhibitor remission**: 60-80%\n16. **Early remission**: prevents 50% of erosions\n17. **TB reactivation risk**: 3-5x with TNF inhibitors\n18. **Monitor**: LFT/CBC monthly (DMARD), TB IGRA (before biologic)\n19. **Erosions timeline**: can occur within 6 months of onset\n20. **Extra-articular**: nodules (25%), lung (5%), cardiac (1%)\n\n## One-Liners\n- RA = symmetric polyarthritis + RF/anti-CCP + morning stiffness\n- Early DMARD = prevent erosions\n- MTX gold standard = check LFT monthly\n- Biologic if inadequate response at 12 weeks\n- TB screening = mandatory before TNF inhibitors\n- Remission = target, not low activity\n- Pregnancy = stop MTX, switch therapy\n- NSAIDs alone = disease progression (incorrect)\n\n## High-Yield Differentials\n- **SLE**: ANA+, malar rash, photosensitivity (vs RA nodules)\n- **Psoriatic arthritis**: asymmetric, nail pitting, skin plaques\n- **Gout**: monoarticular, male, acute (vs RA polyarticular, female)\n- **Osteoarthritis**: age >50, asymmetric, <30 min AM stiffness",
        mnemonics: [
          {
            text: "DAMAGE",
            explanation: "DMARD early, Assess monthly, Monitor TB, Assessment score (DAS28), Get biologics if needed, Ensure remission target"
          }
        ],
        keyPoints: [
          "Morning stiffness >60 min = hallmark",
          "Symmetric PIP/MCP involvement = classic",
          "Early aggressive DMARD = best long-term outcome",
          "Methotrexate: first choice (efficacy, cost)",
          "Biologic: add if inadequate DMARD response"
        ],
        textbookRefs: [
          { book: "Quick Reference - RA 2023", chapter: "Essentials", edition: "Current" }
        ]
      }
    ]
  },
  {
    topicCode: "PH-MOD-05-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "antimalarial-drugs-foundation",
        title: "Antimalarial Drugs - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of malaria, drug classes, parasite lifecycle, and classification of antimalarials.",
        contentMd: "# Antimalarial Drugs - Foundation\n\n## Malaria Background\n\n### Global Burden\n- 627 million cases annually (Africa 96%)\n- 627,000 deaths (mostly children <5 years)\n- India: 1-2 million cases/year (endemic states: northeast, jharkhand)\n- Parasites: Plasmodium falciparum, vivax, malariae, ovale\n\n### Parasite Lifecycle\n1. **Mosquito stage** (exo-erythrocytic)\n   - Sporogony: parasites develop in mosquito (10-14 days)\n   - Gametocytes ingested during blood meal\n2. **Liver stage** (erythrocytic)\n   - Sporozoites → hepatocytes (pre-erythrocytic)\n   - Schizont formation (7-30 days depending on species)\n3. **Blood stage** (erythrocytic)\n   - RBC invasion, trophozoite development\n   - Hemoglobin digestion (malaria pigment: hemozoin)\n   - RBC rupture → fever, hemolysis\n4. **Sexual stage**\n   - Gametocytes for mosquito transmission\n\n## Drug Classification by Stage\n\n### Causal Prophylactics (Liver stage)\n- Atovaquone-proguanil (tissue schizonticidal)\n- Primaquine (hypnozoiticide for P. vivax/ovale)\n\n### Suppressive/Schizonticidal (Blood stage)\n- Chloroquine (most rapid clinical response)\n- Amodiaquine\n- Quinine/Quinidine\n\n### Sporontocidal (Block transmission)\n- Primaquine (gametocytocidal)\n- Sulfonamides\n\n### Combination Therapy\n- Artemisinin + partner (artemether, artesunate)\n- ACT: artemisinin-combination therapy (WHO recommendation)",
        mnemonics: [
          {
            text: "CHAPS",
            explanation: "Chloroquine (schizonticidal), Hypnozoiticide (primaquine), Artemisinin (fast), Proguanil (causal), Sulfonamides (transmission)"
          }
        ],
        keyPoints: [
          "Plasmodium: 4 species infect humans",
          "Lifecycle: 2-3 weeks from bite to fever",
          "Malaria pigment: hemozoin (parasite metabolite)",
          "RBC hemolysis → anemia, jaundice",
          "ACT = gold standard treatment"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology", chapter: "59", edition: "10th" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "202", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "antimalarial-drugs-mechanism",
        title: "Antimalarial Drugs - Mechanisms & Pharmacology",
        estimatedMinutes: 30,
        summary: "Mechanism of action, drug properties, efficacy, and resistance patterns.",
        contentMd: "# Antimalarial Drugs - Mechanisms & Pharmacology\n\n## Individual Drugs\n\n### Chloroquine\n- **Mechanism**: intercalates DNA, increases RBC pH, inhibits heme detoxification\n- **Stage**: schizonticidal (blood-stage)\n- **Dosing**: 1.5 g loading, 0.75 g at 6, 24, 48 hours\n- **Efficacy**: P. vivax (>99%), P. falciparum (variable based on resistance)\n- **Resistance**: widespread in P. falciparum (Africa, SE Asia, India)\n- **SE**: retinopathy (chronic use), myopathy, pruritus (dark-skinned), QT prolongation\n- **Status India**: restricted due to resistance\n\n### Artemisinin Derivatives\n- **Mechanism**: peroxide bridge activation (ROS generation), damages parasite proteins\n- **Stage**: rapid blood schizonticidal action\n- **Drugs**: artemether (IM), artesunate (IV, IM, PO), artemotil\n- **Efficacy**: >95% for all species, including drug-resistant\n- **Onset**: fever clearance <24 hours (fastest acting)\n- **Elimination**: rapid (short half-life 1-3 hours)\n- **Resistance**: emerging in SE Asia (delayed clearance)\n- **Advantage**: very low toxicity profile\n\n### Artemisinin-Combination Therapy (ACT)\n- **Rationale**: prevent resistance (dual action), improve efficacy\n- **Examples**: artemether + lumefantrine, artesunate + amodiaquine\n- **Efficacy**: cure rates >95%\n- **WHO recommendation**: first-line for P. falciparum\n- **Duration**: 3 days\n\n### Primaquine\n- **Mechanism**: oxidative stress (NADPH-dependent), targets hypnozoites\n- **Stage**: hypnozoiticide (liver), gametocytocidal\n- **Dosing**: 0.25-0.5 mg/kg/day × 14 days\n- **Indication**: P. vivax, P. ovale (prevent relapse)\n- **Toxicity**: hemolysis in G6PD deficiency (severe in <30% activity)\n- **Efficacy**: prevents 85-95% relapses\n- **G6PD testing**: mandatory before use\n\n### Atovaquone-Proguanil (Malarone)\n- **Mechanism**: proguanil (DHFR inhibition), atovaquone (electron transport)\n- **Stage**: tissue + blood schizonticidal\n- **Dosing**: 1000/400 mg daily × 3 days\n- **Efficacy**: 95% for all species\n- **Use**: severe disease (IV artesunate preferred), chemoprophylaxis\n- **Cost**: high (not affordable in endemic countries)\n\n## Resistance Patterns\n- **P. falciparum**: chloroquine resistance widespread (DHFR mutations), artemisinin resistance emerging (K13 mutations)\n- **P. vivax**: chloroquine resistance in SE Asia, India\n- **Management**: use ACT, avoid monotherapy, ensure adequate primaquine for hypnozoites",
        mnemonics: [
          {
            text: "ACTA",
            explanation: "Artemisinin-Combination (gold standard), Chloroquine (restricted - resistance), Tissues + blood (atovaquone), Artemether + lumefantrine (example ACT)"
          }
        ],
        keyPoints: [
          "Artemisinin: fastest acting (<24 hours)",
          "ACT: WHO first-line (cure >95%)",
          "Chloroquine: resistance widespread (avoid monotherapy)",
          "Primaquine: only drug for hypnozoites (G6PD check mandatory)",
          "Resistance: DHFR mutations (proguanil), K13 mutations (artemisinin)"
        ],
        textbookRefs: [
          { book: "Rang & Dale's Pharmacology", chapter: "48", edition: "9th" },
          { book: "WHO Treatment Guidelines Malaria", chapter: "2023", edition: "Current" }
        ]
      },
      {
        layer: 3,
        slug: "antimalarial-drugs-clinical",
        title: "Antimalarial Drugs - Clinical Use & Management",
        estimatedMinutes: 20,
        summary: "Treatment algorithms, severe malaria, chemoprophylaxis, and drug selection.",
        contentMd: "# Antimalarial Drugs - Clinical Use & Management\n\n## Treatment Algorithms (India-Based)\n\n### Uncomplicated P. falciparum\n- **First-line**: Artemether (80 mg IM) × 3 days, then ACT (artemether-lumefantrine) × 3 days\n- **Alternative**: Artesunate (4 mg/kg) daily × 3 days\n- **Follow-up**: ensure primaquine given if co-infected with P. vivax\n\n### Uncomplicated P. vivax\n- **First-line**: Chloroquine (1.5 g stat, 0.75 g at +6, +24, +48 hrs) if sensitive (test), or ACT\n- **Add primaquine**: 0.25 mg/kg/day × 14 days (after G6PD screening)\n- **Pregnancy**: avoid primaquine (teratogenic)\n\n### Severe Malaria (Cerebral, Pulmonary Edema, Acute Kidney Injury)\n- **First-line**: IV artesunate (2.4 mg/kg at 0, 12, 24 hrs, then daily)\n- **Efficacy**: 35% mortality reduction vs IV quinine\n- **Follow-up**: switch to oral ACT when tolerated\n- **Supportive care**: blood transfusion (Hb <7), dialysis if needed, glucose monitoring\n\n## Chemoprophylaxis (for travelers)\n\n### High-Risk Areas (P. falciparum, drug-resistant)\n- **Atovaquone-Proguanil**: 1000/400 mg daily (start 1-2 days before, continue 7 days after)\n- **Doxycycline**: 100 mg daily (start 1-2 days before, continue 4 weeks after)\n- **Efficacy**: 95-99%\n\n### Low-Risk Areas\n- **Chloroquine**: 500 mg weekly (less effective but cheaper)\n- **Chloroquine + Proguanil**: 500 mg + 100 mg weekly\n\n## Drug Selection (Tailored)\n- **Pregnancy**: chloroquine (if sensitive), ACT (artemether safe per WHO), avoid primaquine\n- **G6PD deficiency**: avoid primaquine (use 8-aminoquinolines cautiously)\n- **Severe renal disease**: avoid proguanil (accumulation)\n- **Cardiac arrhythmias**: avoid quinine (QT prolongation)\n\n## Drug Interactions\n- **Rifampicin**: reduces artemisinin levels (TB co-infection)\n- **Antiretrovirals**: reduce atovaquone-proguanil efficacy (HIV+ patients)\n- **Anticonvulsants**: induce metabolism of antimalarials",
        mnemonics: [
          {
            text: "SEVERE",
            explanation: "Start artesunate IV, Ensure supportive care, Vitals monitored, Early transfusion (Hb <7), Renal function, Exchange blood (severe)"
          }
        ],
        keyPoints: [
          "Uncomplicated P.f: ACT × 3 days (cure >95%)",
          "Uncomplicated P.v: chloroquine + primaquine",
          "Severe malaria: IV artesunate (35% mortality reduction)",
          "Pregnancy: ACT safe, avoid primaquine",
          "G6PD: screen before primaquine (risk hemolysis)"
        ],
        textbookRefs: [
          { book: "NVBDCP Treatment Guidelines India", chapter: "Malaria", edition: "2023" },
          { book: "RCTA Antimalarial Guidelines", chapter: "Clinical Management", edition: "2022" }
        ]
      },
      {
        layer: 4,
        slug: "antimalarial-drugs-exam",
        title: "Antimalarial Drugs - Exam Preparation",
        estimatedMinutes: 15,
        summary: "NEXT-pattern questions, differential diagnosis, and clinical problem-solving.",
        contentMd: "# Antimalarial Drugs - Exam Preparation\n\n## Problem-Solving (60%)\n\n### Scenario 1\n\"28-year-old with fever (39°C), headache, RDT positive for P. falciparum. Neurologic exam normal, Hb 9 g/dL. Treatment?\"\n- **Answer**: Uncomplicated malaria. Start artemether 80 mg IM × 3 days, then ACT (artemether-lumefantrine) × 3 days. Monitor Hb; transfuse if <7 g/dL.\n\n### Scenario 2\n\"35-year-old with fever, altered mental status, seizures. Blood smear: 5% parasitemia. Management?\"\n- **Answer**: Severe falciparum malaria (cerebral). Start IV artesunate 2.4 mg/kg immediately. ICU admission. Manage seizures, avoid cerebral edema. Switch to oral ACT when conscious.\n\n### Scenario 3\n\"32-year-old with P. vivax malaria, G6PD deficiency test (10% activity). Primaquine dosing?\"\n- **Answer**: High-risk hemolysis (G6PD <30%). Use primaquine 0.75 mg base/kg once weekly × 8 weeks (lower dose, longer duration). Monitor CBC. Consider transfusion if severe anemia develops.\n\n## Analysis (30%)\n\n### Why ACT preferred over chloroquine monotherapy?\n- Chloroquine resistance widespread (DHFR mutations)\n- ACT combination prevents resistance (dual mechanism)\n- Faster clinical response (fever <24 hours)\n- Higher cure rates (>95% vs 50-70% chloroquine in resistant areas)\n- Cost-benefit in endemic countries\n\n### Artemisinin vs Chloroquine mechanism\n- Artemisinin: peroxide bridge → ROS, damages proteins (rapid)\n- Chloroquine: DNA intercalation, heme detoxification (slower but reliable)\n- Resistance: K13 mutations (artemisinin) vs DHFR mutations (chloroquine)\n\n## Recall (10%)\n- RDT positive = suspicious for malaria (confirm with blood smear)\n- Uncomplicated: <1% parasitemia, no end-organ involvement\n- Severe: >5% parasitemia OR cerebral/pulmonary/renal symptoms\n- G6PD <30% = high hemolysis risk with primaquine\n- ACT = artemisinin + partner drug (lumefantrine, amodiaquine, piperaquine)\n- Primaquine = only hypnozoiticide (prevents relapse)\n- IV artesunate = gold standard severe malaria",
        mnemonics: [
          {
            text: "ACUTE",
            explanation: "Artemether/Artesunate (first-line), Confirmed by smear/PCR, Uncomplicated vs severe, Treatment based on species, Ensure follow-up"
          }
        ],
        keyPoints: [
          "ACT: WHO first-line uncomplicated malaria",
          "IV artesunate: severe malaria (mortality reduction 35%)",
          "Primaquine: G6PD screen mandatory",
          "Resistance: DHFR (chloroquine), K13 (artemisinin)",
          "Fever clearance: <24 hours with artemisinin"
        ],
        textbookRefs: [
          { book: "NMC CBME - Pharmacology", chapter: "Antimalarials", edition: "2023" },
          { book: "MCQ Pharmacology for Exams", chapter: "Antimalarials", edition: "2023" }
        ]
      },
      {
        layer: 5,
        slug: "antimalarial-drugs-recall",
        title: "Antimalarial Drugs - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid-fire facts and clinical pearls for quick retrieval.",
        contentMd: "# Antimalarial Drugs - Active Recall\n\n## Key Facts\n\n1. **Malaria parasite**: Plasmodium (4 species infect humans)\n2. **Vector**: Anopheles mosquito (female, night feeding)\n3. **Global burden**: 627 million cases, 627,000 deaths/year\n4. **India endemic states**: northeast, jharkhand, chhattisgarh\n5. **Lifecycle**: mosquito (exo-erythrocytic) → liver (pre-erythrocytic) → blood (erythrocytic)\n6. **Fever pattern**: P. vivax/ovale (48h), P. malariae (72h), P. falciparum (irregular)\n7. **Diagnosis**: RDT (rapid), blood smear (gold standard)\n8. **Uncomplicated**: <1% parasitemia, no end-organ involvement\n9. **Severe**: >5% parasitemia OR cerebral/pulmonary/renal/severe anemia\n10. **Chloroquine**: schizonticidal, resistance widespread (DHFR mutations)\n11. **Artemisinin**: fastest acting (<24 hours), ROS mechanism\n12. **ACT**: artemisinin + partner (lumefantrine, amodiaquine, piperaquine)\n13. **Primaquine**: hypnozoiticide (P. vivax/ovale only), gametocytocidal\n14. **Primaquine dose**: 0.25-0.5 mg/kg/day × 14 days (standard), 0.75 mg/kg weekly × 8 weeks (G6PD <30%)\n15. **G6PD risk**: hemolysis if <30% enzyme activity\n16. **Atovaquone-proguanil**: tissue + blood schizonticidal, expensive\n17. **IV artesunate**: gold standard severe malaria, 35% mortality reduction\n18. **Cure rate ACT**: >95% uncomplicated\n19. **Artemisinin resistance**: K13 mutations (SE Asia), delayed parasite clearance\n20. **Pregnancy**: ACT safe, avoid primaquine (teratogenic)\n\n## One-Liners\n- RDT+ malaria = confirm blood smear\n- Uncomplicated P.f = ACT × 3 days\n- Uncomplicated P.v = chloroquine + primaquine\n- Severe malaria = IV artesunate immediately\n- Primaquine = G6PD screen first\n- Resistance = K13 (artemisinin), DHFR (chloroquine)\n- Fever clearance = <24 hours with artemisinin\n- Pregnancy = ACT OK, primaquine NO\n\n## High-Yield Differentials\n- **Dengue**: thrombocytopenia (malaria normal platelets), rash\n- **Typhoid**: rose spots, splenomegaly, toxicity severe\n- **TB**: subacute onset, weight loss, night sweats",
        mnemonics: [
          {
            text: "FAST",
            explanation: "Falciparum (most severe), Artemisinin (fastest), Severe = artesunate IV, Traveler prophylaxis (atovaquone-proguanil or doxycycline)"
          }
        ],
        keyPoints: [
          "RDT: rapid (positive <1 min)",
          "Blood smear: gold standard (identifies species, parasitemia %)",
          "ACT: cure rates >95%, WHO first-line",
          "Primaquine: only drug for hypnozoites",
          "IV artesunate: life-saving in severe malaria"
        ],
        textbookRefs: [
          { book: "Quick Reference - Antimalarials 2023", chapter: "Essentials", edition: "Current" }
        ]
      }
    ]
  },
  {
    topicCode: "PH-MOD-06-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "drugs-for-gout-foundation",
        title: "Drugs for Gout - Foundation",
        estimatedMinutes: 20,
        summary: "Gout pathophysiology, types, clinical presentation, and uric acid metabolism.",
        contentMd: "# Drugs for Gout - Foundation\n\n## Gout Overview\n\n### Definition\nGout: acute inflammatory arthritis caused by monosodium urate (MSU) crystal deposition in joints, triggered by hyperuricemia (serum uric acid >6.8 mg/dL).\n\n### Epidemiology\n- Prevalence: 1-2% (higher in developed nations, increasing in India)\n- Male:female = 9:1 (females post-menopausal)\n- Age: typically >40 years (can occur earlier with genetic factors)\n- Risk factors: alcohol, dietary purines, obesity, thiazide diuretics, renal disease\n\n### Pathophysiology\n\n#### Uric Acid Metabolism\n- **Source**: purine metabolism (dietary + endogenous)\n- **Pathway**: adenosine/guanosine → inosine/guanosine → hypoxanthine → xanthine → uric acid\n- **Enzyme**: xanthine oxidase (final step)\n- **Excretion**: 70% kidneys (glomerular filtration + secretion), 30% gut\n- **Hyperuricemia**: overproduction (10%) OR underexcretion (90%)\n\n#### Crystal Formation\n- MSU crystallization: pH-dependent (lower pH → precipitation)\n- Triggers: dehydration, acidosis, cold (joint temperature), trauma\n- Leukocyte infiltration: NLRP3 inflammasome activation\n- IL-1β release: acute inflammatory cascade\n\n### Clinical Types\n\n#### Acute Gout\n- Sudden onset severe arthritis (often first MTP joint)\n- Peak at 24-48 hours\n- Resolves spontaneously in 7-10 days\n\n#### Chronic Tophaceous Gout\n- Multiple tophi (urate deposits)\n- Chronic joint damage, bone erosion\n- Risk: years of recurrent acute attacks\n\n#### Asymptomatic Hyperuricemia\n- Serum UA >6.8 mg/dL without attacks\n- Only treat if high risk (renal disease, frequent attacks)",
        mnemonics: [
          {
            text: "PURINE",
            explanation: "Purines → inosine, Uric acid → MSU crystals, Renal excretion, Inflammation via IL-1β, Nodular deposits (tophi), Eventually chronic gout"
          }
        ],
        keyPoints: [
          "MSU crystals: trigger acute arthritis",
          "Hyperuricemia: >6.8 mg/dL (solubility limit)",
          "Male dominance: 9:1 (testosterone protective in females)",
          "First MTP joint: classic presentation",
          "NLRP3 inflammasome: IL-1β release (key cytokine)"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "327", edition: "21st" },
          { book: "KDT Pharmacology", chapter: "57", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "drugs-for-gout-mechanism",
        title: "Drugs for Gout - Mechanisms & Classification",
        estimatedMinutes: 30,
        summary: "Drug classification, mechanisms of action, pharmacology, and efficacy.",
        contentMd: "# Drugs for Gout - Mechanisms & Classification\n\n## Acute Gout Attack Management\n\n### NSAIDs (First-line)\n- **Drugs**: indomethacin (50 mg TID), naproxen (500 mg BID), celecoxib (400 mg BID)\n- **Mechanism**: inhibit COX-1/COX-2 → reduce prostaglandins, decrease leukocyte migration\n- **Dosing**: start high dose, taper as inflammation resolves (7-10 days)\n- **Efficacy**: 80-90% pain relief within 12-24 hours\n- **SE**: GI upset (use with PPI), renal function decline\n- **Contraindications**: active GI bleed, severe renal disease (CrCl <30)\n\n### Colchicine\n- **Mechanism**: prevents microtubule polymerization → inhibits leukocyte chemotaxis, NLRP3 inflammasome activation\n- **Dosing**: 0.5 mg 2-4 hourly until pain relief/GI side effects (max 6 mg/day)\n- **Efficacy**: 75% effective if started within 12 hours of attack onset\n- **SE**: diarrhea, nausea (GI toxicity dose-limiting)\n- **Low-dose colchicine**: 0.5 mg daily (prevention)\n- **Renal disease**: reduce dose (accumulation risk)\n\n### Corticosteroids (If NSAID/colchicine contraindicated)\n- **Route**: oral prednisolone 30 mg daily × 5 days (taper)\n- **Mechanism**: suppress inflammation (NF-κB inhibition)\n- **Efficacy**: 85-90% (slower than NSAIDs, takes 12-24 hours)\n- **SE**: immunosuppression, hyperglycemia\n\n## Chronic Gout Management (Urate-Lowering Therapy)\n\n### Xanthine Oxidase Inhibitors\n\n#### Allopurinol (First-line)\n- **Mechanism**: inhibits xanthine oxidase → reduces uric acid production\n- **Dosing**: start 100 mg/day, titrate to target UA <6 mg/dL (max 800 mg/day)\n- **Efficacy**: reduces UA by 60-70%, prevents 80% of attacks (with prophylaxis)\n- **Onset**: 2-4 weeks to effect\n- **SE**: hypersensitivity (0.3%, serious: Stevens-Johnson, hepatotoxicity)\n- **HLA-B*5801 screening**: recommended (high-risk groups)\n- **Cost**: very cheap (₹50-100/month)\n\n#### Febuxostat\n- **Mechanism**: selective xanthine oxidase inhibitor (non-purine)\n- **Dosing**: 40-80 mg daily\n- **Efficacy**: similar to allopurinol (UA target 60-70% reduction)\n- **Advantage**: non-purine, faster onset (1-2 weeks)\n- **SE**: cardiac toxicity (increased CV events in trials), hepatotoxicity\n- **Cost**: expensive (₹200-400/month)\n- **Use**: allopurinol intolerance or inadequate response\n\n### Uricosuric Agents\n\n#### Probenecid\n- **Mechanism**: increases renal uric acid excretion (URAT1 inhibitor)\n- **Dosing**: 250 mg BID, titrate to 1-2 g/day (UA target)\n- **Efficacy**: 50-60% UA reduction\n- **SE**: acute gout (paradoxical increase early), nephrolithiasis (volume expansion)\n- **Contraindication**: serum creatinine >2 mg/dL, history of uric acid stones\n- **Advantage**: cheap, oral\n\n#### Lesinurad\n- **Mechanism**: URAT1/OAT4 inhibitor (urate excretion)\n- **Dosing**: 400 mg daily\n- **Efficacy**: 50-60% UA reduction\n- **Newer agent**: better renal safety\n- **Cost**: expensive (not widely available India)\n\n### Uricase\n\n#### Pegloticase\n- **Mechanism**: breaks down uric acid → allantoin (water-soluble)\n- **Route**: IV infusion 8 mg × 2 doses (2 weeks apart)\n- **Efficacy**: 100% UA reduction (most effective)\n- **Use**: refractory gout, tophaceous disease, severe hyperuricemia\n- **SE**: immunogenicity (antibody formation), infusion reactions\n- **Cost**: very expensive (₹50,000+ per dose)\n\n## Prophylaxis During ULT Initiation\n- **Duration**: minimum 6 months (prevent paradoxical crystal shedding)\n- **Agents**: low-dose colchicine (0.5 mg daily) OR low-dose NSAIDs\n- **Rationale**: crystal dissolution → acute attacks (prevent with prophylaxis)",
        mnemonics: [
          {
            text: "ACUTE-CHRONIC",
            explanation: "Acute: NSAIDs, Colchicine, Corticosteroids; Chronic: ULT (allopurinol, febuxostat, probenecid), Uricase (pegloticase), Tophaceous disease"
          }
        ],
        keyPoints: [
          "Acute gout: NSAIDs first-line (efficacy 80-90%)",
          "Colchicine: efficacy 75% if within 12 hours",
          "Allopurinol: gold standard chronic (xanthine oxidase inhibition)",
          "Prophylaxis: mandatory during ULT initiation (6 months)",
          "Target UA: <6 mg/dL (refractory <5 mg/dL)"
        ],
        textbookRefs: [
          { book: "Rang & Dale's Pharmacology", chapter: "27", edition: "9th" },
          { book: "American College of Rheumatology Gout Guidelines", chapter: "2020", edition: "Updated" }
        ]
      },
      {
        layer: 3,
        slug: "drugs-for-gout-clinical",
        title: "Drugs for Gout - Clinical Management",
        estimatedMinutes: 20,
        summary: "Treatment algorithms, management strategies, drug interactions, and special populations.",
        contentMd: "# Drugs for Gout - Clinical Management\n\n## Acute Gout Attack Protocol\n\n### Step 1: Confirm Diagnosis\n- **Joint aspiration**: MSU crystals (negatively birefringent under polarized microscopy)\n- **Serum UA**: may be <6.8 mg/dL during acute attack (don't withhold treatment)\n- **Exclude infection**: Gram stain, culture if doubt\n\n### Step 2: Select Anti-inflammatory\n- **NSAID**: indomethacin 50 mg TID OR naproxen 500 mg BID × 7-10 days (FIRST-LINE)\n  - Start high, taper as pain improves\n  - With PPI (omeprazole 20 mg daily) for GI protection\n- **Colchicine**: 0.5 mg 2-4 hourly (max 6 mg/day) if NSAID contraindicated\n  - More effective if <12 hours from onset\n  - Monitor GI tolerance (diarrhea common)\n- **Prednisolone**: 30 mg daily × 5 days (taper) if NSAID + colchicine contraindicated\n  - Best for renal insufficiency (CrCl <30)\n\n### Step 3: Start ULT (If Recurrent Attacks)\n- Indicator for ULT: 2+ attacks/year, tophi, renal disease, uric acid stones\n- Start allopurinol 100 mg daily, titrate by 100 mg every 2-4 weeks\n- **Target serum UA**: <6 mg/dL (goal), <5 mg/dL (refractory cases)\n- **Prophylaxis**: colchicine 0.5 mg daily OR indomethacin 25 mg daily × 6 months (prevent paradoxical attacks)\n\n### Step 4: Modify Risk Factors\n- Diet: reduce purine-rich foods (red meat, organ meat, seafood, alcohol)\n- Weight: lose weight if obese (improves UA, improves insulin sensitivity)\n- Fluid: increase water intake (2-3 L/day) to maintain urine output\n- Medications: discontinue/replace thiazides, loop diuretics, low-dose aspirin\n- Comorbidities: control hypertension, diabetes, dyslipidemia\n\n## Special Populations\n\n### Renal Insufficiency\n- **CrCl 30-60**: reduce allopurinol to 100 mg/day (start)\n- **CrCl <30**: avoid allopurinol (use febuxostat or pegloticase)\n- **Uric acid stones**: aggressive hydration + alkalization (urine pH >6)\n\n### Pregnancy\n- **Acute attack**: NSAIDs (avoid 3rd trimester), prednisolone safe\n- **Colchicine**: avoid (teratogenic potential)\n- **Chronic ULT**: defer until postpartum (no evidence of benefit)\n\n### Asymptomatic Hyperuricemia\n- **Treatment**: generally NOT recommended\n- **Exception**: renal disease, uric acid stones, initiating chemotherapy (TLS risk)\n\n## Drug Interactions\n- **Allopurinol + azathioprine**: increased 6-MP toxicity (xanthine oxidase required for metabolism)\n- **Allopurinol + ampicillin**: increased ampicillin rash (unrelated to hypersensitivity)\n- **Probenecid + penicillins**: decreased antibiotic excretion\n- **Colchicine + CYP3A4 inhibitors**: increased toxicity (clarithromycin, ketoconazole)",
        mnemonics: [
          {
            text: "ATTACK",
            explanation: "Anti-inflammatory chosen, Titrate ULT, Target UA <6, Avoid risk factors, Control comorbidities, Keep prophylaxis 6 months"
          }
        ],
        keyPoints: [
          "Joint aspiration: diagnostic (MSU crystals)",
          "NSAIDs: first-line acute (start high, taper)",
          "Prophylaxis: mandatory with ULT (prevents paradoxical attacks)",
          "Allopurinol: titrate to target UA <6 mg/dL",
          "Risk factor modification: essential (diet, weight, fluids)"
        ],
        textbookRefs: [
          { book: "EULAR Gout Guidelines 2023", chapter: "Management", edition: "Current" },
          { book: "ACR Gout Management", chapter: "Treatment", edition: "2020" }
        ]
      },
      {
        layer: 4,
        slug: "drugs-for-gout-exam",
        title: "Drugs for Gout - Exam Preparation",
        estimatedMinutes: 15,
        summary: "NEXT-pattern questions, clinical reasoning, differential diagnosis.",
        contentMd: "# Drugs for Gout - Exam Preparation\n\n## Problem-Solving (60%)\n\n### Scenario 1\n\"45-year-old male with acute first MTP joint pain, swelling, warmth. UA 8.5 mg/dL, WBC 12,000. Treatment?\"\n- **Answer**: NSAIDs first-line (indomethacin 50 mg TID × 7 days). Confirm with joint aspiration (MSU crystals). Start colchicine prophylaxis. Exclude infection.\n\n### Scenario 2\n\"65-year-old with recurrent gout (3 attacks/year), CrCl 40. Best ULT?\"\n- **Answer**: Allopurinol 100 mg daily (renally excreted, requires dose adjustment). Target UA <6 mg/dL. Add colchicine 0.5 mg daily × 6 months (prophylaxis). Monitor renal function.\n\n### Scenario 3\n\"55-year-old with gout, allergy to allopurinol (rash). Alternative ULT?\"\n- **Answer**: Febuxostat 40 mg daily (non-purine xanthine oxidase inhibitor, no cross-reactivity). Monitor liver function and cardiac risk. Prophylaxis ongoing.\n\n## Analysis (30%)\n\n### Why prophylaxis mandatory with ULT?\n- Crystal dissolution in serum → paradoxical shedding into joints\n- Causes acute attacks in first 6 months (20-30% risk)\n- Colchicine/NSAID prevents (IL-1β suppression, leukocyte inhibition)\n- Without prophylaxis: poor compliance with ULT\n\n### Comparing acute attack treatments\n- NSAIDs: fastest (4-6 hours), cost-effective, contraindicated with renal disease\n- Colchicine: best if <12 hours (preventive), GI toxicity limits use\n- Steroids: slowest (12-24 hours), safest in renal disease\n- IL-1β inhibitors (canakinumab): expensive, reserved for refractory cases\n\n## Recall (10%)\n- MSU crystals: negatively birefringent (needle-shaped)\n- Allopurinol: xanthine oxidase inhibitor, reduce UA 60-70%\n- Colchicine: microtubule inhibition, efficacy 75% if <12 hours\n- Probenecid: uricosuric (increase renal UA excretion)\n- Target UA: <6 mg/dL (saturation solubility)\n- Prophylaxis: 6 months minimum with ULT\n- First MTP joint: classic presentation (bunion risk)",
        mnemonics: [
          {
            text: "ACUTE-ULT",
            explanation: "Anti-inflammatory (NSAID/colchicine/steroid), Confirm MSU, Urate-lowering therapy if recurrent, Test renal function, Escalate if severe"
          }
        ],
        keyPoints: [
          "NSAID: first-line acute (indomethacin 50 mg TID)",
          "Colchicine: 0.5 mg 2-4 hourly (max 6 mg/day)",
          "Allopurinol: titrate to UA <6 mg/dL",
          "Prophylaxis: colchicine 0.5 mg daily × 6 months",
          "Risk factors: alcohol, purines, obesity, thiazides"
        ],
        textbookRefs: [
          { book: "NMC CBME - Pharmacology Gout", chapter: "Management", edition: "2023" },
          { book: "Exam-Focused Pharmacology", chapter: "Gout Drugs", edition: "2023" }
        ]
      },
      {
        layer: 5,
        slug: "drugs-for-gout-recall",
        title: "Drugs for Gout - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid-fire facts and clinical pearls.",
        contentMd: "# Drugs for Gout - Active Recall\n\n## Key Facts\n\n1. **Gout definition**: MSU crystal arthritis (hyperuricemia >6.8 mg/dL)\n2. **Epidemiology**: 1-2% prevalence, 9:1 male:female\n3. **Pathophysiology**: NLRP3 inflammasome → IL-1β release\n4. **Acute onset**: first MTP joint classic (sudden severe pain)\n5. **Diagnosis**: joint aspiration (MSU crystals, negatively birefringent)\n6. **Serum UA in acute**: may be <6.8 mg/dL (don't delay treatment)\n7. **NSAID first-line acute**: indomethacin 50 mg TID (80-90% efficacy)\n8. **Colchicine**: 0.5 mg 2-4 hourly (75% efficacy if <12 hours)\n9. **Colchicine SE**: diarrhea dose-limiting\n10. **Steroids**: 30 mg prednisolone daily × 5 days (safest in renal disease)\n11. **Allopurinol**: xanthine oxidase inhibitor, 60-70% UA reduction\n12. **Allopurinol start**: 100 mg daily, titrate by 100 mg every 2-4 weeks\n13. **Allopurinol target**: UA <6 mg/dL\n14. **Febuxostat**: selective xanthine oxidase inhibitor (non-purine alternative)\n15. **Probenecid**: uricosuric (increase renal excretion)\n16. **Pegloticase**: uricase (breaks UA → allantoin, 100% effective)\n17. **Prophylaxis**: colchicine 0.5 mg daily OR NSAID × 6 months (prevent paradoxical attacks)\n18. **Recurrent gout**: indicator for ULT (2+ attacks/year)\n19. **Risk factor modification**: reduce alcohol, purines, weight loss\n20. **Cost**: allopurinol cheapest (₹50-100/month), pegloticase expensive (₹50,000+/dose)\n\n## One-Liners\n- Gout = MSU crystals → acute arthritis\n- Acute = NSAID first (indomethacin 50 mg TID)\n- Prophylaxis = mandatory with ULT (prevent attacks)\n- Allopurinol = titrate to UA <6 mg/dL\n- Risk factors = alcohol, purines, obesity, thiazides\n- Renal disease = avoid allopurinol (use febuxostat)\n- Target = remission + normal UA + no prophylaxis needed\n\n## High-Yield Comparisons\n- **NSAID vs colchicine acute**: NSAID faster (4-6h), colchicine better <12h\n- **Allopurinol vs febuxostat**: allopurinol cheap/first-line, febuxostat if intolerant\n- **Prophylaxis**: colchicine (cheaper, GI SE) vs NSAID (safer)\n- **Refractory gout**: pegloticase (most effective, very expensive)",
        mnemonics: [
          {
            text: "GOUT-FIX",
            explanation: "Gout acute = NSAIDs, Out of acute = ULT, Urate <6 target, Target remission, Flexi management, In prophylaxis 6mo, X-ray for tophi"
          }
        ],
        keyPoints: [
          "First MTP joint: classic presentation",
          "NSAID: indomethacin 50 mg TID acute",
          "Allopurinol: titrate slowly (100 mg every 2-4 weeks)",
          "Prophylaxis: colchicine 0.5 mg daily × 6 months",
          "UA <6 mg/dL: prevents crystal formation"
        ],
        textbookRefs: [
          { book: "Quick Reference - Gout 2023", chapter: "Essentials", edition: "Current" }
        ]
      }
    ]
  },
  {
    topicCode: "PH-MOD-06-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "immunosuppressants-foundation",
        title: "Immunosuppressants - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of immunosuppression, mechanisms, indications, and drug classification.",
        contentMd: "# Immunosuppressants - Foundation\n\n## Immunosuppression Overview\n\n### Definition\nImmunosuppression: pharmacologic reduction of immune response, used to prevent allograft rejection and manage autoimmune diseases.\n\n### Immune System Targets\n1. **T-cell activation**: calcineurin inhibitors (cyclosporine, tacrolimus)\n2. **Proliferation**: antimetabolites (azathioprine, mycophenolate)\n3. **B-cell depletion**: monoclonal antibodies (rituximab, basiliximab)\n4. **Co-stimulation blockade**: abatacept, belatacept\n5. **Cytokine signaling**: JAK inhibitors, mTOR inhibitors\n\n## Clinical Indications\n\n### Transplantation\n- **Solid organ**: kidney, heart, liver, lung, pancreas\n- **Post-transplant**: prevent acute/chronic rejection\n- **Maintenance therapy**: long-term immunosuppression\n\n### Autoimmune Diseases\n- Systemic lupus erythematosus (SLE)\n- Rheumatoid arthritis (RA)\n- Inflammatory bowel disease (IBD)\n- Autoimmune hepatitis\n- Vasculitis\n\n### Hematologic Disorders\n- Immune thrombocytopenia (ITP)\n- Autoimmune hemolytic anemia (AIHA)\n- Aplastic anemia\n\n## Immunosuppressant Mechanism Categories\n\n### Calcineurin Inhibitors\n- Target: T-cell receptor signaling\n- Examples: cyclosporine, tacrolimus\n- Effect: block IL-2 production (T-cell activation inhibition)\n\n### Antimetabolites\n- Target: DNA/RNA synthesis (cell division)\n- Examples: azathioprine, mycophenolate mofetil (MMF)\n- Effect: selective T- and B-cell proliferation inhibition\n\n### Biologic Agents\n- Target: specific cells/cytokines\n- Examples: monoclonal antibodies (rituximab, infliximab), fusion proteins (abatacept)\n- Effect: cell depletion or signaling blockade\n\n### mTOR Inhibitors\n- Target: mammalian target of rapamycin (cell proliferation)\n- Examples: sirolimus, everolimus\n- Effect: inhibit T-cell and B-cell proliferation\n\n### Corticosteroids\n- Target: broad immune suppression\n- Examples: prednisolone, methylprednisolone\n- Effect: NF-κB inhibition, cytokine suppression",
        mnemonics: [
          {
            text: "CABAL",
            explanation: "Calcineurin inhibitors, Antimetabolites, Biologic agents, Azathioprine/mTOR inhibitors, Low-dose corticosteroids"
          }
        ],
        keyPoints: [
          "T-cell activation: calcineurin inhibitor target",
          "Proliferation: antimetabolite effect",
          "B-cell depletion: monoclonal antibody action",
          "Solid organ transplant: requires combination therapy",
          "Autoimmune disease: balance efficacy vs toxicity"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "319", edition: "21st" },
          { book: "KDT Pharmacology", chapter: "56", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "immunosuppressants-mechanism",
        title: "Immunosuppressants - Pharmacology & Mechanisms",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms, drug properties, pharmacokinetics, and efficacy.",
        contentMd: "# Immunosuppressants - Pharmacology & Mechanisms\n\n## Calcineurin Inhibitors\n\n### Cyclosporine (Cyclosporin A, CsA)\n- **Mechanism**: binds cyclophilin → inhibits calcineurin → blocks NFAT dephosphorylation → prevents IL-2 transcription\n- **Action**: T-cell activation inhibition (CD4+ and CD8+ cells)\n- **Dosing**: 1-10 mg/kg/day (divided doses or once-daily formulations)\n- **Route**: IV, PO, topical\n- **Bioavailability**: variable (15-40%), food-dependent\n- **Metabolism**: CYP3A4 (extensive, drug interactions common)\n- **Efficacy**: prevents acute rejection (60-70% improvement)\n- **SE**: nephrotoxicity (dose-limiting, 25-50%), hypertension, hirsutism, gingival hyperplasia, neurotoxicity\n- **Monitoring**: trough levels (100-300 ng/mL), renal function\n\n### Tacrolimus (FK-506)\n- **Mechanism**: similar to cyclosporine (binds FK-binding protein, same downstream effect)\n- **Potency**: 100-1000x more potent than cyclosporine\n- **Dosing**: 0.05-0.1 mg/kg/day (lower doses due to potency)\n- **Route**: IV, PO\n- **Efficacy**: superior to cyclosporine (acute rejection reduction 40-50%)\n- **SE**: nephrotoxicity (similar to CsA, but less), hyperglycemia (more than CsA), neurotoxicity\n- **Advantage**: no hirsutism/gingival hyperplasia (cosmetic advantage)\n- **Monitoring**: trough levels (5-15 ng/mL), renal function, glucose\n\n## Antimetabolites\n\n### Azathioprine (AZA)\n- **Mechanism**: purine analog → metabolized to 6-mercaptopurine (6-MP) → inhibits inosine monophosphate dehydrogenase (IMPDH) → T/B-cell proliferation inhibition\n- **Dosing**: 1-3 mg/kg/day\n- **Efficacy**: 60-70% rejection prevention (often combined with calcineurin inhibitors)\n- **SE**: myelosuppression (leukopenia, thrombocytopenia), hepatotoxicity, nausea, increased infection risk, malignancy (2-5x)\n- **TPMT testing**: genotype before use (TPMT deficiency → severe toxicity)\n- **Monitoring**: CBC, LFT monthly\n- **Cost**: very cheap (₹30-50/month)\n\n### Mycophenolate Mofetil (MMF)\n- **Mechanism**: prodrug (converted to mycophenolic acid) → selective IMPDH inhibition → preferential T/B-cell proliferation inhibition (vs fibroblasts)\n- **Advantage**: more selective than AZA (lower malignancy risk)\n- **Dosing**: 1-2 g/day (divided BID)\n- **Efficacy**: superior to AZA (1.3-fold better graft survival)\n- **SE**: diarrhea (40%, dose-limiting), nausea, leukopenia, infection risk\n- **Drug interaction**: binds to mycophenolic acid acyl glucuronide (MPAG) → reduced efficacy with antacids\n- **Monitoring**: CBC monthly\n- **Cost**: expensive (₹200-300/month)\n\n## mTOR Inhibitors\n\n### Sirolimus (Rapamycin)\n- **Mechanism**: binds FKBP-12 → inhibits mTOR → blocks T/B-cell proliferation (G1 to S transition)\n- **Advantage**: non-nephrotoxic (can replace calcineurin inhibitor)\n- **Dosing**: loading 15 mg, then 2-5 mg/day (trough target 4-12 ng/mL)\n- **SE**: hyperlipidemia (50%), thrombocytopenia, pneumonitis, delayed wound healing\n- **Efficacy**: similar to calcineurin inhibitors (used as alternative, not first-line)\n- **Monitoring**: trough levels, lipid panel, CBC\n\n## Biologic Agents\n\n### Rituximab (anti-CD20 monoclonal antibody)\n- **Mechanism**: depletes B cells (CD20+ cells) → reduces autoantibody production\n- **Dosing**: 375 mg/m² IV weekly × 4 weeks\n- **Efficacy**: 60-70% response in B-cell malignancy, autoimmune disease\n- **SE**: infusion reactions, increased infection risk (PCP prophylaxis recommended), cytopenia\n- **Use**: SLE, RA, ITP, vasculitis\n- **Cost**: ₹10,000-20,000 per dose\n\n### Basiliximab (anti-IL-2 receptor monoclonal antibody)\n- **Mechanism**: blocks IL-2 receptor on T cells → reduces T-cell activation\n- **Dosing**: 20 mg IV on day 0 and day 4 post-transplant\n- **Efficacy**: used induction therapy (immediate post-transplant)\n- **SE**: minimal (monoclonal antibodies generally safe)\n- **Use**: transplant induction\n\n## Corticosteroids\n\n### Mechanism\n- **Target**: broad immunosuppression (NF-κB inhibition, cytokine suppression)\n- **Effect**: inhibit T-cell activation, antigen presentation, cytokine production (IL-2, TNF-α, IL-6)\n- **Dosing**: high-dose induction (methylprednisolone 500-1000 mg IV daily × 3-5 days), maintenance (prednisolone <7.5 mg/day)\n- **SE**: infection, metabolic effects (hyperglycemia, osteoporosis), psychosis\n- **Use**: all transplant and autoimmune settings (usually with other agents)",
        mnemonics: [
          {
            text: "CAN-TRIM",
            explanation: "Cyclosporine/Calcineurin, Azathioprine/Antimetabolites, NSaid/Nephrotoxic, Tacrolimus, Rituximab, Immunosuppression, mTOR inhibitors"
          }
        ],
        keyPoints: [
          "Cyclosporine/Tacrolimus: calcineurin inhibitors (T-cell target)",
          "AZA/MMF: antimetabolites (proliferation inhibition)",
          "Tacrolimus: 100-1000x more potent than cyclosporine",
          "MMF: more selective than AZA (lower malignancy risk)",
          "Sirolimus: non-nephrotoxic mTOR inhibitor"
        ],
        textbookRefs: [
          { book: "Rang & Dale's Pharmacology", chapter: "52", edition: "9th" },
          { book: "Textbook of Transplantation (Abramowicz)", chapter: "9-12", edition: "6th" }
        ]
      },
      {
        layer: 3,
        slug: "immunosuppressants-clinical",
        title: "Immunosuppressants - Clinical Applications",
        estimatedMinutes: 20,
        summary: "Clinical protocols, transplant regimens, drug combinations, monitoring, and complications.",
        contentMd: "# Immunosuppressants - Clinical Applications\n\n## Transplant Immunosuppressive Regimen\n\n### Induction Therapy (Day 0-4 post-transplant)\n- **High-dose corticosteroids**: methylprednisolone 500-1000 mg IV daily × 3-5 days\n- **Monoclonal antibody**: basiliximab (anti-IL-2) OR antithymocyte globulin (ATG) × 2 doses\n- **Rationale**: maximum immunosuppression during highest rejection risk\n\n### Maintenance Therapy (Long-term)\n- **Triple therapy** (most common):\n  1. **Calcineurin inhibitor**: cyclosporine (3-8 mg/kg/day) OR tacrolimus (0.05-0.1 mg/kg/day)\n  2. **Antimetabolite**: mycophenolate (1-2 g/day) OR azathioprine (1-2 mg/kg/day)\n  3. **Low-dose corticosteroid**: prednisolone (5-7.5 mg/day, taper)\n\n- **Dual therapy** (selected cases):\n  - Calcineurin inhibitor + antimetabolite (if intolerant to steroids)\n  - Tacrolimus + MMF (omit steroids in stable patients)\n\n- **mTOR inhibitor regimen** (non-nephrotoxic alternative):\n  - Sirolimus + cyclosporine (or tacrolimus at lower dose) + antimetabolite\n\n## Drug Monitoring & Dose Adjustment\n\n### Therapeutic Drug Monitoring (TDM)\n- **Cyclosporine**: trough 100-300 ng/mL (varies by center, assay)\n- **Tacrolimus**: trough 5-15 ng/mL (earlier phase), 5-10 ng/mL (late phase)\n- **Sirolimus**: trough 4-12 ng/mL\n- **Timing**: measure at 5-7 days post-dose change, then monthly\n\n### Renal Function\n- **Baseline creatinine**: mandatory before starting calcineurin inhibitor\n- **Frequency**: monthly × 3 months, then quarterly\n- **Criterion for change**: increase >30% or stable but elevated (consider switching to sirolimus)\n\n### Hematologic Monitoring\n- **CBC**: baseline, 2 weeks, 1 month, then quarterly\n- **Target**: WBC >3,000 (AZA/MMF toxicity detection)\n\n### Hepatic Function\n- **LFT**: baseline, 2 weeks, 1 month, then quarterly\n- **Note**: asymptomatic elevation common (does not always require dose change)\n\n## Complication Management\n\n### Acute Rejection\n- **Diagnosis**: rise in creatinine, oliguria, allograft tenderness\n- **Confirmation**: biopsy (Banff classification)\n- **Management**: high-dose IV methylprednisolone (500-1000 mg daily × 3 days)\n- **If steroid-resistant**: ATG, rituximab (anti-CD20), or higher calcineurin inhibitor dose\n\n### Opportunistic Infections\n- **Risk**: increased with cumulative immunosuppression\n- **Common**: CMV (most common viral), PCP, fungal infections\n- **Prevention**: prophylaxis in high-risk patients\n  - **TMP-SMX**: PCP prophylaxis (1 DS tablet daily)\n  - **Valganciclovir**: CMV prophylaxis (900 mg daily × 3-6 months)\n  - **Antifungal**: fluconazole if high-risk\n\n### Drug Toxicity Management\n- **Cyclosporine nephrotoxicity**: reduce dose, switch to sirolimus OR antimetabolite-based regimen\n- **MMF diarrhea**: reduce dose, switch to AZA, or use divided dosing\n- **Myelosuppression**: reduce dose of AZA/MMF, monitor CBC\n- **Hirsutism/gingival hyperplasia (CsA)**: switch to tacrolimus\n\n## Special Populations\n\n### Pregnancy\n- **Safe agents**: corticosteroids, calcineurin inhibitors (continue current dose)\n- **Avoid**: mycophenolate (teratogenic), sirolimus (teratogenic)\n- **Monitoring**: more frequent TDM (pregnancy alters drug metabolism)\n\n### Renal Dysfunction (pre-transplant)\n- **Choice**: avoid calcineurin inhibitor-heavy regimens\n- **Option**: sirolimus + antimetabolite (if living donor) + steroid\n\n### Malignancy Risk\n- **Increased**: cumulative dose-dependent (especially AZA, CNI)\n- **Monitoring**: annual skin cancer screening, consider switching to MMF/sirolimus (lower malignancy risk)",
        mnemonics: [
          {
            text: "TRIPLE-T",
            explanation: "Tacrolimus/calcineurin, Rituximab/antimetabolite, Immunosuppression monitoring, Prednisone, Long-term maintenance, Efficacy >95%"
          }
        ],
        keyPoints: [
          "Triple therapy: calcineurin + antimetabolite + steroid (standard)",
          "Induction: high-dose steroid + monoclonal antibody",
          "TDM: mandatory (prevent rejection, toxicity)",
          "Renal function: monthly monitoring (nephrotoxicity risk)",
          "Infections: CMV/PCP prophylaxis essential"
        ],
        textbookRefs: [
          { book: "Textbook of Transplantation (Abramowicz)", chapter: "13", edition: "6th" },
          { book: "KDIGO Transplant Guidelines", chapter: "Immunosuppression", edition: "2023" }
        ]
      },
      {
        layer: 4,
        slug: "immunosuppressants-exam",
        title: "Immunosuppressants - Exam Preparation",
        estimatedMinutes: 15,
        summary: "NEXT-pattern questions, clinical problem-solving, differential diagnosis.",
        contentMd: "# Immunosuppressants - Exam Preparation\n\n## Problem-Solving (60%)\n\n### Scenario 1\n\"45-year-old recipient, post-renal transplant day 5. Creatinine 1.8 (baseline 1.5), urine output 1 L/day. On tacrolimus (trough 8 ng/mL) + MMF + prednisolone. Diagnosis?\"\n- **Answer**: Acute rejection (most common at day 5). Confirm with biopsy. Start high-dose methylprednisolone 500-1000 mg IV daily × 3 days. If steroid-resistant, escalate to ATG/rituximab.\n\n### Scenario 2\n\"3 months post-transplant, patient develops severe diarrhea. On MMF 2 g/day. Management?\"\n- **Answer**: MMF-induced diarrhea (40% incidence). Reduce MMF to 1 g/day or switch to AZA 2 mg/kg/day. Supportive care. Ensure adequate hydration.\n\n### Scenario 3\n\"Cyclosporine trough 350 ng/mL (target 100-300), creatinine 2.0 (rising). Next step?\"\n- **Answer**: Cyclosporine nephrotoxicity (dose-dependent). Reduce dose 20-30% OR switch to sirolimus (non-nephrotoxic). Monitor renal function. Check for reversibility (may improve with dose reduction).\n\n## Analysis (30%)\n\n### Why triple therapy standard over dual therapy?\n- Synergistic action: each drug targets different immune pathway\n- Rejection risk: dual therapy alone inadequate (higher acute rejection rates)\n- Lower toxicity: lower individual drug doses possible with combination\n- Cost-benefit: prevent rejection outweighs drug toxicity risk\n\n### Comparing immunosuppressive agents\n- **Tacrolimus vs cyclosporine**: tacrolimus more potent (100-1000x), fewer cosmetic SE, similar nephrotoxicity\n- **MMF vs AZA**: MMF more selective (lower malignancy risk), but more SE (diarrhea), more expensive\n- **Sirolimus vs calcineurin**: non-nephrotoxic but slower onset, hyperlipidemia risk\n\n## Recall (10%)\n- Triple therapy: calcineurin + antimetabolite + steroid\n- Cyclosporine trough: 100-300 ng/mL\n- Tacrolimus trough: 5-15 ng/mL\n- Acute rejection: rise in creatinine + allograft tenderness\n- MMF: 1-2 g/day (divided BID)\n- Azathioprine: 1-3 mg/kg/day\n- Sirolimus: 2-5 mg/day (non-nephrotoxic alternative)\n- Induction: steroid + monoclonal antibody (day 0-4)\n- CMV prophylaxis: valganciclovir (high-risk)\n- Mycophenolate contraindication: pregnancy (teratogenic)",
        mnemonics: [
          {
            text: "RENAL",
            explanation: "Rejection diagnosed, Ensure TDM monitoring, Nephrotoxicity risk (calcineurin), Azathioprine/antimetabolite choice, Low-dose steroid maintenance"
          }
        ],
        keyPoints: [
          "Tacrolimus: 0.05-0.1 mg/kg/day, trough 5-15 ng/mL",
          "MMF: 1-2 g/day, selective IMPDH inhibitor",
          "Acute rejection: high-dose steroid pulse (500-1000 mg IV × 3d)",
          "CMV prophylaxis: mandatory (valganciclovir 900 mg daily)",
          "Pregnancy: avoid mycophenolate (teratogenic)"
        ],
        textbookRefs: [
          { book: "NMC CBME - Pharmacology Immunosuppression", chapter: "Transplant Drugs", edition: "2023" },
          { book: "Exam-Focused Clinical Pharmacology", chapter: "Immunosuppressants", edition: "2023" }
        ]
      },
      {
        layer: 5,
        slug: "immunosuppressants-recall",
        title: "Immunosuppressants - Active Recall",
        estimatedMinutes: 10,
        summary: "Rapid-fire facts and clinical pearls.",
        contentMd: "# Immunosuppressants - Active Recall\n\n## Key Facts\n\n1. **Immunosuppression purpose**: prevent allograft rejection, manage autoimmune disease\n2. **T-cell target**: calcineurin inhibitors (cyclosporine, tacrolimus)\n3. **Proliferation target**: antimetabolites (AZA, MMF)\n4. **B-cell target**: rituximab (anti-CD20)\n5. **Triple therapy**: calcineurin + antimetabolite + steroid (gold standard)\n6. **Induction therapy**: high-dose steroid + monoclonal antibody (day 0-4)\n7. **Cyclosporine mechanism**: binds cyclophilin → blocks IL-2 production\n8. **Cyclosporine dosing**: 1-10 mg/kg/day (PO divided)\n9. **Cyclosporine trough**: 100-300 ng/mL\n10. **Cyclosporine SE**: nephrotoxicity (25-50%), hypertension, hirsutism, gingival hyperplasia\n11. **Tacrolimus mechanism**: binds FK-binding protein (same downstream as CsA)\n12. **Tacrolimus potency**: 100-1000x more potent than cyclosporine\n13. **Tacrolimus dosing**: 0.05-0.1 mg/kg/day\n14. **Tacrolimus trough**: 5-15 ng/mL\n15. **AZA mechanism**: purine analog → 6-MP → IMPDH inhibition\n16. **AZA dosing**: 1-3 mg/kg/day\n17. **AZA TPMT testing**: mandatory before use (TPMT deficiency → toxicity)\n18. **MMF mechanism**: selective IMPDH inhibitor (T/B-cell specific)\n19. **MMF dosing**: 1-2 g/day (divided BID)\n20. **MMF SE**: diarrhea (40%, dose-limiting)\n21. **Sirolimus mechanism**: mTOR inhibitor (non-nephrotoxic)\n22. **Sirolimus dosing**: 2-5 mg/day (trough 4-12 ng/mL)\n23. **Sirolimus advantage**: non-nephrotoxic (can replace calcineurin)\n24. **Rituximab**: anti-CD20 monoclonal antibody (B-cell depletion)\n25. **Acute rejection**: creatinine rise, oliguria, tenderness\n26. **Acute rejection treatment**: high-dose methylprednisolone 500-1000 mg IV × 3 days\n27. **CMV prophylaxis**: valganciclovir 900 mg daily (high-risk patients)\n28. **PCP prophylaxis**: TMP-SMX 1 DS tablet daily\n29. **Mycophenolate pregnancy**: contraindicated (teratogenic)\n30. **Monitoring**: TDM, CBC, LFT, renal function (monthly initially)\n\n## One-Liners\n- Triple therapy = calcineurin + antimetabolite + steroid\n- Tacrolimus > cyclosporine (potency, fewer cosmetic effects)\n- MMF > AZA (selectivity, lower malignancy)\n- Acute rejection = high-dose steroid pulse\n- TDM = mandatory (prevent rejection, toxicity)\n- CMV/PCP prophylaxis = essential\n- Mycophenolate = pregnancy contraindicated\n- Sirolimus = non-nephrotoxic mTOR inhibitor\n\n## High-Yield Comparisons\n- **Cyclosporine vs tacrolimus**: equal efficacy, tacrolimus more potent, fewer cosmetic effects\n- **AZA vs MMF**: equal efficacy, MMF more selective (lower malignancy), more expensive\n- **Induction vs maintenance**: induction aggressive (high-dose), maintenance lower doses\n- **Rejection treatment**: steroid-responsive (70%), steroid-resistant (ATG/rituximab)\n\n## Rapid Recall\n- **Calcineurin inhibitors block**: IL-2 transcription (NFAT dephosphorylation)\n- **Antimetabolites target**: IMPDH (nucleotide synthesis inhibition)\n- **mTOR inhibitors prevent**: G1→S transition (cell cycle arrest)\n- **Monoclonal antibodies deplete**: target cells (B cells, T cells)\n- **Corticosteroids suppress**: NF-κB (broad cytokine suppression)",
        mnemonics: [
          {
            text: "IMMUNOSUPPRESSION",
            explanation: "Induction (steroid+monoclonal), Maintenance (triple therapy), Monitoring (TDM), Urgent rejection management, No infection (prophylaxis), Observation post-tx, Steroid taper, Understand drug interactions, Prevent complications, Prevention (monitor renal)"
          }
        ],
        keyPoints: [
          "Tacrolimus: most potent calcineurin inhibitor",
          "MMF: most selective antimetabolite",
          "Induction: high-dose steroid + monoclonal antibody",
          "Maintenance: triple therapy standard",
          "Monitoring: TDM + CBC + LFT + renal function"
        ],
        textbookRefs: [
          { book: "Quick Reference - Immunosuppressants 2023", chapter: "Essentials", edition: "Current" }
        ]
      }
    ]
  }
];
