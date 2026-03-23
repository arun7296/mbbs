import type { TopicLessons } from "./content-loader";

export const ophthalmologyPart7Lessons: TopicLessons[] = [
  {
    topicCode: "OP-MOD-04-TOP-02",
    layers: [
      { layer: 1, slug: "retinal-detachment-armd-foundation", title: "Retinal Detachment & ARMD - Foundation", estimatedMinutes: 25, summary: "Types of RD (rhegmatogenous, tractional, exudative), ARMD epidemiology and pathophysiology.", contentMd: `# Retinal Detachment & ARMD - Foundation\n\n## Retinal Detachment Types\n\n**Rhegmatogenous (RRD)**: Retinal break (hole/tear) + vitreous traction = most common (90%)\n**Tractional (TRD)**: Fibrovascular membrane pulls retina (diabetes, proliferative disease)\n**Exudative (ERD)**: Fluid accumulation beneath retina (no break) - uveal processes, choroidal detachment\n\n## RRD Risk Factors\n\n**Age**: Increases with age (especially >50)\n**High myopia**: Axial length >26mm - significant risk\n**Prior RD**: Opposite eye 50% risk\n**Lattice degeneration**: Thinned retina\n**Vitreous traction**: PVD (posterior vitreous detachment)\n**Trauma**: Blunt or penetrating eye injury\n\n## Age-Related Macular Degeneration (ARMD)\n\n**Prevalence**: ~1/3 of adults >75 years\n**Types**: Dry (atrophic, 85%) vs Wet (neovascular, 15%)\n**Risk factors**: Age, smoking, UV exposure, genetics, family history\n**Leading cause**: Blindness in developed countries >60 years\n\n## ARMD Pathophysiology\n\n**Dry/Atrophic**: RPE atrophy, Bruch's membrane changes, drusen accumulation\n**Wet/Neovascular**: Abnormal choroidal neovascularization (CNV) breaks through Bruch's membrane`,
        mnemonics: [
          { text: "RD types: Rhegmatogenous (break), Tractional (pulling), Exudative (fluid)", explanation: "RD classification" },
          { text: "ARMD: Dry 85% (atrophic), Wet 15% (neovascular CNV)", explanation: "ARMD types" },
        ],
        keyPoints: [
          "RRD most common (90% of RD cases); caused by retinal break + traction",
          "High myopia major risk factor for RRD",
          "Prior RD: opposite eye 50% risk",
          "ARMD leading blindness cause >60 years in developed countries",
          "Dry ARMD: 85%; Wet ARMD: 15%; wet worse prognosis",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "10-11", edition: "7th" },
        ],
      },
      { layer: 2, slug: "retinal-detachment-armd-mechanism", title: "Retinal Detachment & ARMD - Mechanism", estimatedMinutes: 25, summary: "RRD pathophysiology, tractional mechanisms, ARMD molecular basis, CNV formation.", contentMd: `# Retinal Detachment & ARMD - Mechanism\n\n## Rhegmatogenous RD Formation\n\n**PVD (Posterior Vitreous Detachment)**: Vitreous separates from retina with age\n**Retinal break**: Hole (full-thickness break) or tear (tractional)\n**Vitreous traction**: PVD pulls on weakened retina → break formation\n**Liquefied vitreous**: Enters through break → seeps beneath retina → accumulation\n**Result**: Photoreceptor separation from RPE → death → vision loss\n\n## Tractional RD\n\n**Fibrovascular tissue**: Forms from neovascularization (diabetes, RVO)\n**Contracture**: Fibroblasts contract → mechanical pulling of retina\n**Progressive**: Pulls retina toward optic nerve/ciliary body\n**TRD risk**: Usually in eyes with severe proliferative disease\n\n## ARMD Pathophysiology: Dry\n\n**RPE dysfunction**: Age-related changes in retinal pigment epithelium\n**Drusen formation**: Lipid + protein accumulation between RPE and Bruch's membrane\n**Bruch's membrane**: Becomes thickened, calcified (reduced nutrient/waste exchange)\n**Photoreceptor degeneration**: From RPE dysfunction, loss of support\n**Geographic atrophy**: Large areas of RPE/photoreceptor loss\n\n## ARMD Pathophysiology: Wet\n\n**Choroidal neovascularization (CNV)**: Abnormal blood vessels invade from choroid\n**Mechanism**: VEGF overproduction (from hypoxia, inflammation)\n**Bruch's breaking**: CNV penetrates Bruch's membrane\n**Exudation**: Leakage from CNV causes fluid/blood accumulation\n**RPE damage**: From CNV invasion, inflammation\n**Scarring**: Chronic CNV causes scar formation (disciform scar)`,
        keyPoints: [
          "RRD: PVD → retinal break → vitreous enters → photoreceptor separation",
          "TRD: fibrovascular tissue contracture mechanically pulls retina",
          "Dry ARMD: RPE dysfunction, drusen, Bruch's membrane changes",
          "Wet ARMD: CNV from choroid breaks through Bruch's membrane",
          "VEGF triggers CNV formation in wet ARMD",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "10-11", edition: "7th" },
        ],
      },
      { layer: 3, slug: "retinal-detachment-armd-clinical", title: "Retinal Detachment & ARMD - Clinical", estimatedMinutes: 30, summary: "RRD presentation, examination findings, ARMD clinical features, imaging methods.", contentMd: `# Retinal Detachment & ARMD - Clinical\n\n## RRD Clinical Presentation\n\n**Symptoms**: Floaters (increased suddenly), photopsia (flashing lights), visual field defect (progressing)\n**Visual field loss**: Starts peripherally, progresses centrally as detachment extends\n**Macula off vs on**: If macula detached = worse vision/prognosis\n**Appearance**: Detached retina appears pale, elevated; moves with eye movements\n\n## RRD Examination\n\n**Dilated retina exam**: Identify retinal break and extent of detachment\n**Retinal break**: Usually near equator or posterior pole\n**Retinal folds**: Toward optic disc\n**Subretinal fluid**: Dark appearance (contrasts with detached retina)\n**Vitreous**: May show hemorrhage, inflammation\n\n## ARMD Clinical Features\n\n**Dry ARMD**: Drusen, RPE pigmentation changes, gradual vision loss\n**Wet ARMD**: Sudden vision loss, metamorphopsia (wavy lines), central scotoma\n**Metamorphopsia**: From CNV distorting retina\n**Amsler grid**: Patient-friendly screening for metamorphopsia\n\n## Imaging\n\n**RRD**: B-scan ultrasound (if view obscured), OCT (if possible)\n**ARMD**: OCT shows drusen, RPE changes, CNV, subretinal fluid\n**Dry ARMD**: Drusen visible on fundoscopy and OCT\n**Wet ARMD**: CNV location, subretinal/intraretinal fluid on OCT; FA shows leakage\n**ICG angiography**: Detects occult CNV not visible on FA`,
        keyPoints: [
          "RRD: floaters, photopsia, progressing visual field defect",
          "Macula-off RRD: worse prognosis than macula-on",
          "Dry ARMD: drusen, RPE changes, gradual vision loss",
          "Wet ARMD: sudden vision loss, metamorphopsia, CNV on imaging",
          "OCT essential for diagnosis and monitoring both conditions",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "10-11", edition: "7th" },
        ],
      },
      { layer: 4, slug: "retinal-detachment-armd-exam", title: "Retinal Detachment & ARMD - Exam Prep", estimatedMinutes: 20, summary: "RRD management, surgical indications, ARMD treatment strategies.", contentMd: `# Retinal Detachment & ARMD - Exam Prep\n\n## RRD Management\n\n**Urgent surgical treatment**: Required (pneumatic retinopexy, scleral buckle, vitrectomy)\n**Success rate**: >90% with appropriate surgery\n**Timing**: Better outcomes if treated within 7-10 days (prevent synechiae, better visual prognosis)\n**Macula status**: Macula-on better prognosis (≥90% recover good vision); macula-off <50% good vision\n**Follow-up**: Monitor opposite eye (50% develop RD)\n\n## Dry ARMD Management\n\n**Observation**: No proven treatment slows progression\n**Vitamins**: AREDS formula (lutein, zeaxanthin, vitamins C/E, zinc) for intermediate/advanced\n**Lifestyle**: UV protection, smoking cessation, healthy diet\n**Amsler grid**: Self-monitoring for transition to wet\n**Monitoring**: Regular eye exams\n\n## Wet ARMD Management\n\n**Anti-VEGF**: Intravitreal injections (bevacizumab, ranibizumab, aflibercept)\n**Laser**: Thermal laser (older, now rarely used)\n**Photodynamic therapy (PDT)**: Reduced role but still used\n**Success**: Anti-VEGF prevents vision loss in 95%; improves vision in ~30%\n**Monitoring**: Monthly OCT to assess response`,
        keyPoints: [
          "RRD urgent surgery needed; >90% success rate",
          "Macula-on RRD better prognosis (≥90% good vision)",
          "RRD opposite eye 50% risk; regular monitoring essential",
          "Dry ARMD: observe, AREDS vitamins, lifestyle modification",
          "Wet ARMD: anti-VEGF first-line; 95% prevent loss, 30% improve",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "10-11", edition: "7th" },
        ],
      },
      { layer: 5, slug: "retinal-detachment-armd-recall", title: "Retinal Detachment & ARMD - Active Recall", estimatedMinutes: 15, summary: "7 clinical cases on RRD and ARMD diagnosis, management, and prognosis.", contentMd: `# Active Recall: Retinal Detachment & ARMD\n\n**Q1**: Sudden floaters and photopsia in myopic patient (-8.0D), visual field defect superior temporal. RRD suspected. Urgency and management?\n> A: RRD emergency. Floaters + photopsia + field defect = active retinal break likely. Urgent dilated exam (confirm break/detachment), urgent referral to vitreoretinal surgeon. Surgery within 7-10 days preferable (prevent synechiae). If macula not detached: good prognosis (>90% good vision). Myopia risk factor; opposite eye at 50% risk of RD.\n\n**Q2**: Macula-off RRD diagnosed 2 weeks after symptoms. Visual prognosis?\n> A: Delayed presentation (2 weeks). Macula detached for prolonged period = photoreceptor damage likely. Visual prognosis guarded (<50% achieve 20/40 VA). Still requires urgent surgery (prevent further damage), but outcomes limited by duration of detachment.\n\n**Q3**: RRD repaired successfully. Counseling regarding opposite eye?\n> A: Opposite eye at 50% risk of RRD within 5-10 years. Recommend: prophylactic laser to weak areas (lattice degeneration) controversial (benefits unclear). Primarily: patient education on symptoms (floaters, photopsia, field defect), regular eye exams every 6-12 months, urgent evaluation if symptoms develop.\n\n**Q4**: 72-year-old with dry ARMD (intermediate stage, large drusen, RPE changes), VA 20/60. AREDS vitamins indicated?\n> A: Yes. AREDS formula (lutein, zeaxanthin, vitamins C/E, zinc) shown to slow progression by ~25% in intermediate/advanced AMD. Counsel: takes months to show benefit; regular monitoring for transition to wet AMD. Smoking cessation critical (increases CNV risk).\n\n**Q5**: Wet ARMD, recent CNV, VA 20/100. Subretinal fluid on OCT. Anti-VEGF or observation?\n> A: Anti-VEGF indicated (bevacizumab, ranibizumab, aflibercept). Monthly injections initially. Goal: prevent vision loss (95% effective); improve vision in ~30%. Start treatment urgent (vision can decline rapidly with wet AMD). Monthly OCT to assess fluid resolution and CNV response.\n\n**Q6**: Dry ARMD patient now reports metamorphopsia and sudden vision drop. Assessment?\n> A: Concerning for transition to wet ARMD (geographic atrophy progressed or CNV developed). Urgent dilated exam + OCT. If wet ARMD confirmed: anti-VEGF treatment indicated immediately. Metamorphopsia + vision drop = suspicious for CNV (requires treatment).\n\n**Q7**: Tractional RD in proliferative diabetic retinopathy (PDR). Management vs RRD?\n> A: TRD requires vitreoretinal surgery (different from RRD). First priority: treat underlying PDR (anti-VEGF, PRP to stabilize neovascularization). Surgery only if: (1) advancing TRD threatening macula, (2) failed medical therapy. TRD prognosis guarded (multiple pathology: retinopathy + detachment). Medical management primary; surgery secondary.`,
        mnemonics: [
          { text: "RRD: urgent surgery; macula-on >90% good; macula-off <50%", explanation: "RRD prognosis" },
          { text: "Wet ARMD: anti-VEGF 95% prevent loss, 30% improve", explanation: "Anti-VEGF efficacy" },
        ],
        keyPoints: [
          "RRD emergency; within 7-10 days for best outcomes",
          "Floaters + photopsia + field defect = RRD likely",
          "Macula status critical for prognosis",
          "Opposite eye 50% RD risk; requires monitoring",
          "Dry ARMD: AREDS vitamins slow progression ~25%",
          "Wet ARMD: anti-VEGF prevents loss in 95%",
          "Metamorphopsia in AMD suggests CNV (transition to wet)",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "10-11", edition: "7th" },
        ],
      },
    ],
  },
];
