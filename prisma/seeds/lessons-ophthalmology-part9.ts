import type { TopicLessons } from "./content-loader";

export const ophthalmologyPart9Lessons: TopicLessons[] = [
  {
    topicCode: "OP-MOD-05-TOP-03",
    layers: [
      { layer: 1, slug: "ocular-tumors-foundation", title: "Ocular Tumors - Foundation", estimatedMinutes: 25, summary: "Retinoblastoma epidemiology, intraocular vs extraocular tumors, eyelid/orbital malignancies.", contentMd: `# Ocular Tumors - Foundation\n\n## Retinoblastoma (RB)\n\n**Incidence**: ~1 per 15,000-20,000 live births\n**Age**: Usually diagnosed 18 months-5 years (90% <5 years)\n**Genetics**: 40% hereditary (bilateral, autosomal dominant RB1 gene), 60% sporadic\n**Presentation**: Leukocoria (white pupil) 80%, strabismus 20%\n**Global burden**: ~9,000 new cases/year; 5,000 blind from RB in developing countries\n**Survival**: >95% developed countries; <50% developing countries (late diagnosis)\n\n## Intraocular Tumors\n\n**Iris/ciliary body melanoma**: Adult age, rare\n**Choroidal melanoma**: Adult age, peak 60+ years, poor prognosis (50-year mortality ~50%)\n\n## Eyelid Tumors\n\n**BCC**: 80% of lid cancers, pearly nodule, central ulceration, excellent prognosis\n**SCC**: 15%, more aggressive than BCC\n**Sebaceous carcinoma**: 5%, aggressive, poor prognosis\n**Melanoma**: <5%, very aggressive\n\n## Orbital Tumors\n\n**Lymphoma**: Primary or systemic extension\n**Rhabdomyosarcoma**: Pediatric, sarcoma of extraocular muscles\n**Cavernous hemangioma**: Benign vascular, most common benign\n**Lacrimal tumors**: Often malignant`,
        mnemonics: [
          { text: "RB: Leukocoria 80%, Strabismus 20%, age <5 yrs", explanation: "RB presentation" },
          { text: "Lid tumors: BCC 80% (best prognosis), SCC 15%, Sebaceous 5% (worst)", explanation: "Eyelid cancer distribution" },
        ],
        keyPoints: [
          "RB most common pediatric intraocular malignancy",
          "Leukocoria (white pupil) classic RB presentation",
          "BCC eyelid most common; excellent prognosis",
          "Choroidal melanoma poor prognosis (50% mortality)",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "18", edition: "7th" },
          { book: "Parsons' Diseases of the Eye", chapter: "19", edition: "23rd" },
        ],
      },
      { layer: 2, slug: "ocular-tumors-mechanism", title: "Ocular Tumors - Mechanism", estimatedMinutes: 25, summary: "RB1 gene mutation, two-hit hypothesis, melanoma carcinogenesis, metastatic pathways.", contentMd: `# Ocular Tumors Pathophysiology\n\n## Retinoblastoma Genetics\n\n**RB1 gene**: Suppresses cell cycle progression (G1 to S phase)\n**Loss**: Removes growth brake; cells proliferate uncontrolled\n**Mutation types**: Deletions, point mutations, epigenetic silencing\n**95% RB patients**: Have RB1 mutations\n\n## Two-Hit Hypothesis\n\n**Hereditary (40%)**:\n- First mutation: Germline (inherited or de novo)\n- Second mutation: Somatic (acquired in retinal cells)\n- Result: Bilateral (70%) or unilateral\n\n**Sporadic (60%)**:\n- Two somatic mutations (both acquired)\n- Usually unilateral\n- No family history\n\n## Uveal Melanoma Pathophysiology\n\n**Carcinogenesis**: GNAQ/GNA11 mutations, monosomy 3 (worst prognosis)\n**Epithelioid vs spindle**: Epithelioid worse prognosis\n**Metastatic**: Usually to liver; 50-year mortality ~50%\n\n## Tumor Growth Progression\n\nIntraretinal → vitreous seeding → extraocular → metastatic\n\n## Eyelid Carcinoma\n\n**BCC**: Basal cell carcinoma, rarely metastasizes\n**SCC**: More aggressive, risk regional metastasis\n**Sebaceous**: High metastasis risk`,
        keyPoints: [
          "RB1 inactivation removes G1/S checkpoint; uncontrolled proliferation",
          "Hereditary RB 40%: germline + somatic mutations",
          "Sporadic RB 60%: two somatic mutations",
          "Uveal melanoma: GNAQ mutations, monosomy 3 predicts metastasis",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "18", edition: "7th" },
        ],
      },
      { layer: 3, slug: "ocular-tumors-clinical", title: "Ocular Tumors - Clinical", estimatedMinutes: 35, summary: "RB examination findings, imaging, staging, lid tumor appearance, orbital tumor management.", contentMd: `# Ocular Tumors Clinical Presentation\n\n## Retinoblastoma Examination\n\n**History**: <5 years, leukocoria, strabismus\n**Ophthalmoscopic**: White/tan mass, usually eccentric, may have calcification\n**Advanced**: Rubeosis iridis, hyphema, necrosis (cheese-like)\n**Extraocular**: Proptosis, periorbital edema\n\n## Imaging\n\n**B-scan ultrasound**: Gold standard initial (hyperechoic mass, calcification)\n**MRI**: Optic nerve involvement, extraocular extension\n**CT**: Calcification detection (90-95% RB have calcification)\n\n## Eyelid Tumor Appearance\n\n**BCC**: Pearly nodule, central ulceration, medial canthus (85%)\n**SCC**: Ulcerated nodule, less demarcated\n**Sebaceous**: Upper lid, yellow, painless, ptosis\n\n## Orbital Tumors\n\n**Cavernous hemangioma**: Axial proptosis, painless, benign\n**Rhabdomyosarcoma**: Acute proptosis, pediatric, aggressive\n**Lymphoma**: Painless proptosis, salmon-colored lesion possible`,
        keyPoints: [
          "RB typically age <5 years; leukocoria most common sign",
          "B-scan ultrasound gold standard for RB detection",
          "90-95% RB have calcification visible on imaging",
          "BCC most common eyelid cancer; excellent prognosis",
          "Sebaceous carcinoma aggressive; poor prognosis",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "18", edition: "7th" },
        ],
      },
      { layer: 4, slug: "ocular-tumors-exam", title: "Ocular Tumors - Exam Prep", estimatedMinutes: 25, summary: "RB treatment options, chemotherapy, radiation, enucleation, surgical margins for lid tumors.", contentMd: `# Ocular Tumors - Exam Prep\n\n## RB Treatment Hierarchy\n\n**Modern**: Chemotherapy first (IAC/IV) → globe-salvage approach\n**Chemotherapy**: Intra-arterial (IAC) 70-80% globe salvage; IV for metastatic\n**Radiation**: External beam (45 Gy) or brachytherapy (plaque)\n**Enucleation**: Reserved for massive tumor, neovascular glaucoma, failed chemotherapy\n**Systemic chemotherapy**: For metastatic disease\n\n## Globe Salvage Rate\n\n**Grades A-B**: 70-90% with chemotherapy + brachytherapy\n**Grades C-D**: ~70% with combined therapy\n**Enucleation**: Histopathology prognostic (optic nerve invasion, choroidal invasion)\n\n## Eyelid Tumor Management\n\n**BCC**: 3-5mm margin excision; Mohs surgery for exact margins\n**SCC**: 6-10mm margin (wider); regional lymph nodes if involved\n**Sebaceous**: 8-10mm margin + lymph node dissection (aggressive)\n**Reconstruction**: Full-thickness for large defects\n\n## Uveal Melanoma Management\n\n**Small**: Observe\n**Medium**: Brachytherapy (90% local control)\n**Large**: Enucleation (poor prognosis)\n**Adjuvant**: Emerging role for systemic therapy in high-risk features`,
        keyPoints: [
          "RB modern approach: chemotherapy first (globe salvage 70-90%)",
          "Enucleation reserved for massive/failed therapy",
          "BCC 3-5mm margin; excellent prognosis (98%)",
          "Sebaceous carcinoma aggressive; wide excision needed",
          "Uveal melanoma: size-based treatment; monosomy 3 worst prognosis",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "18", edition: "7th" },
        ],
      },
      { layer: 5, slug: "ocular-tumors-recall", title: "Ocular Tumors - Active Recall", estimatedMinutes: 15, summary: "7-10 RB and lid tumor clinical cases with treatment decisions and prognosis.", contentMd: `# Active Recall: Ocular Tumors\n\n**Q1**: 2-year-old with white pupil (leukocoria). B-scan shows 8mm mass with calcification. Grade B RB. Treatment and prognosis?\n> A: Grade B RB. Modern approach: intra-arterial chemotherapy (IAC) first-line (70-80% globe salvage). Adjunctive brachytherapy if incomplete response. Good prognosis: ~80% preserve eye and vision. Avoid external beam radiation (secondary malignancy risk in hereditary cases). Genetic testing (RB1 mutations common).\n\n**Q2**: Bilateral RB, 3 years old. Right 6mm (Grade A), Left 4mm (Grade A). RB1 germline mutation. Management?\n> A: Hereditary bilateral RB. Both eyes: IAC chemotherapy + brachytherapy (if needed). Hereditary implications: (1) Offspring 45% risk; (2) Lifelong surveillance for second malignancy (osteosarcoma, melanoma); (3) Avoid external beam radiation (increases secondary malignancy). Prognosis: ~80% globe salvage for both eyes with current therapy.\n\n**Q3**: RB with optic nerve invasion on histopathology post-enucleation. Next steps?\n> A: Optic nerve invasion high-risk feature. Metastasis risk: 5-10% despite modern therapy. Treatment: systemic chemotherapy (multiagent regimen). Surveillance: bone marrow, CT chest/abdomen, LP (CNS involvement risk). Prognosis: guarded; 5-year metastasis-free survival <50% even with therapy (improving with newer drugs).\n\n**Q4**: 62-year-old with 12mm nodular BCC at medial canthus. Mohs surgery planned. Why Mohs superior?\n> A: Mohs micrographic surgery: systematically removes tumor with complete margin assessment (unlike standard pathology which samples). Advantage: margin control, tissue sparing. BCC medial canthus common location. Outcome: <2% recurrence with Mohs vs 5-10% standard excision. Excellent prognosis (98% 5-year survival).\n\n**Q5**: Upper eyelid yellow lesion, biopsy confirms sebaceous carcinoma. Meibomian gland origin. Management?\n> A: Sebaceous carcinoma aggressive, high metastasis risk. Treatment: (1) Wide excision (8-10mm margins + full-thickness); (2) Regional lymph node dissection; (3) Systemic staging (CT chest/abdomen); (4) Systemic chemotherapy if advanced. Prognosis: poor (50-60% 5-year survival even with aggressive treatment). Requires close surveillance.\n\n**Q6**: 68-year-old uveal melanoma, 12mm basal diameter, 8mm height. Plaque brachytherapy. Prognosis?\n> A: Medium-size choroidal melanoma. Brachytherapy: 90% local control; vision often preserved if away from macula. Systemic prognosis: depends on genetic factors (monosomy 3 = high metastasis risk). Even with local control, 50-year mortality ~50% from systemic metastasis (usually liver). Genetic testing for risk stratification recommended.\n\n**Q7**: RB grade C (vitreous seeding), progresses despite IAC chemotherapy. Residual tumor. Options?\n> A: Failed chemotherapy response. Options: (1) Repeat IAC + brachytherapy; (2) External beam radiation (if not used); (3) Vitrectomy for tumor removal (selective); (4) Enucleation (if extensive). High-risk features (vitreous seeding) require escalation of therapy. Prognosis depends on response; enucleation may be necessary. Histopathology critical post-enucleation (guide systemic therapy).\n\n**Q8**: Cavernous hemangioma orbit, asymptomatic, 2cm, stable on serial imaging. Surgery or observation?\n> A: Benign cavernous hemangioma. No malignant potential. Observation appropriate if: asymptomatic, stable size, no vision threat. Surgery only if: rapidly enlarging, vision threatened, proptosis cosmetically unacceptable. Hemangioma often very slow-growing; observation safer than operative risk (orbital surgery complications).\n\n**Q9**: RB patient post-chemotherapy, age 10, developing secondary osteosarcoma (mandibular). Etiology?\n> A: Osteosarcoma in RB patient = second malignancy (expected risk in 5-10% of RB survivors, especially hereditary with chemotherapy/radiation). Likely related to: (1) RB1 mutation (increased cancer predisposition); (2) Chemotherapy exposure; (3) Possible radiation (if used). Management: oncology referral for osteosarcoma treatment. Lifelong surveillance for third malignancy.\n\n**Q10**: Rhabdomyosarcoma orbit in 6-year-old. Acute proptosis. Management priorities?\n> A: Orbital rhabdomyosarcoma pediatric emergency (aggressive sarcoma). Urgent: (1) Imaging (MRI for orbital extent, B-scan if orbital hemorrhage); (2) Biopsy confirmation; (3) Oncology/pediatric surgery referral; (4) Multiagent chemotherapy + radiation planned. Prognosis: historically poor, but improved with multimodal therapy (~60-70% 5-year survival with current protocols).`,
        mnemonics: [
          { text: "RB treatment modern: Chemotherapy (globe-salvage) → Brachytherapy → Enucleation (last)", explanation: "RB hierarchy" },
          { text: "Lid tumors: BCC 3-5mm, SCC 6-10mm, Sebaceous 8-10mm margins", explanation: "Surgical margins" },
        ],
        keyPoints: [
          "RB modern: chemotherapy first-line; 70-90% globe salvage",
          "Enucleation for massive/failed chemotherapy RB",
          "BCC eyelid excellent prognosis (98% 5-year survival)",
          "Sebaceous carcinoma aggressive; poor prognosis (50-60%)",
          "Uveal melanoma: monosomy 3 worst prognostic factor",
          "RB survivors lifelong malignancy surveillance (second/third malignancy risk)",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "18", edition: "7th" },
          { book: "Parsons' Diseases of the Eye", chapter: "19", edition: "23rd" },
        ],
      },
    ],
  },
];
