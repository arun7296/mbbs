import type { TopicLessons } from "./content-loader";

export const ophthalmologyPart6Lessons: TopicLessons[] = [
  {
    topicCode: "OP-MOD-04-TOP-01",
    layers: [
      { layer: 1, slug: "diabetic-retinopathy-foundation", title: "Diabetic Retinopathy - Foundation", estimatedMinutes: 25, summary: "DR pathophysiology, classification (NPDR/PDR), risk factors, screening, epidemiology in India.", contentMd: `# Diabetic Retinopathy - Foundation\n\n## Epidemiology\n\n~1/3 of diabetics have DR. Leading cause blindness working-age adults. India: ~5 million with DR; prevalence increasing. Risk factors: Type 1>Type 2, duration >5yr, poor glycemic control, hypertension, dyslipidemia. Tight control reduces risk by 76%.\n\n## DR Pathophysiology\n\n**Sorbitol pathway**: Glucose → sorbitol → fructose; sorbitol accumulates → osmotic swelling\n**AGE formation**: Non-enzymatic glycosylation → protein crosslinks → structural damage\n**PKC activation**: Increases vascular permeability, reduces blood flow\n**Oxidative stress**: ROS damage endothelial cells\n**Microvascular changes**: Pericyte loss → capillary weakness → microaneurysms\n\n## DR Classification: NPDR\n\n**Mild**: Microaneurysms, retinal hemorrhages, hard exudates\n**Moderate**: More hemorrhages, cotton-wool spots, venous beading, IRMA\n**Severe**: 4-2s rule (≥2 of 4 findings in all quadrants), extensive microinfarcts\n\n## DR Classification: PDR\n\n**Early**: NVD or NVE, no vitreous hemorrhage\n**Advanced**: Extensive neovascularization, vitreous hemorrhage, traction detachment`,
        mnemonics: [
          { text: "DR pathology: Sorbitol ↑, AGE ↑, PKC ↑, oxidative stress ↑ → vascular damage", explanation: "Hyperglycemia mechanisms" },
          { text: "NPDR stages: Mild (microaneurysm) → Moderate (hemorrhages) → Severe (4-2s)", explanation: "Classification progression" },
        ],
        keyPoints: [
          "DR: ~1/3 diabetics affected; leading blindness cause in working age",
          "Hyperglycemia → sorbitol accumulation, AGE formation, oxidative stress",
          "NPDR: microaneurysms, hemorrhages, hard exudates; severe NPDR very high PDR risk",
          "PDR: neovascularization ± vitreous hemorrhage",
          "HbA1c tight control (<7%) reduces DR risk by 76%",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "9", edition: "7th" },
          { book: "Parsons' Diseases of the Eye", chapter: "11", edition: "23rd" },
        ],
      },
      { layer: 2, slug: "diabetic-retinopathy-mechanism", title: "Diabetic Retinopathy - Mechanism", estimatedMinutes: 30, summary: "BRB breakdown, neovascularization, macular edema pathophysiology, ischemia mechanisms.", contentMd: `# Diabetic Retinopathy - Mechanism\n\n## BRB Dysfunction\n\n**Normal**: Retinal vascular endothelial cells with tight junctions\n**Hyperglycemia**: VEGF increases → tight junction loss → increased permeability\n**Vascular permeability factors**: VEGF, angiopoietin 2, bradykinin, histamine\n**Result**: Plasma leakage → retinal edema, hard exudate formation\n\n## Microaneurysm Formation\n\nPericyte loss → basement membrane dysfunction → endothelial cell swelling → localized outpouching → microaneurysm formation\n\n## Retinal Ischemia & VEGF\n\n**Capillary occlusion**: Microinfarcts (cotton-wool spots)\n**Ischemic signal**: Hypoxia triggers VEGF production\n**Neovascular response**: New abnormal vessels form at disc/retina boundary\n**Paradox**: VEGF vessels fragile, leak, cause hemorrhage, traction detachment\n\n## Traction Detachment\n\n**Fibrovascular proliferation**: Neovascular tissue surrounded by fibrous tissue\n**Contractile**: Fibroblasts express smooth muscle actin\n**Mechanical pulling**: Contracture pulls retina forward → traction detachment\n\n## Diabetic Macular Edema\n\n**Mechanism**: BRB breakdown + hyperpermeability → fluid accumulation at macula\n**Cystoid changes**: Cyst-like fluid spaces in inner nuclear/outer plexiform layers\n**Photoreceptor disruption**: Chronic edema damages photoreceptor layer (worse prognosis)`,
        keyPoints: [
          "BRB breakdown from VEGF → endothelial junction loss",
          "Pericyte loss + endothelial cell swelling → microaneurysm formation",
          "Capillary occlusion → ischemia → cotton-wool spots (microinfarcts)",
          "VEGF from hypoxia triggers neovascularization (paradoxically abnormal vessels)",
          "Traction detachment from fibrovascular membrane contraction",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "9", edition: "7th" },
        ],
      },
      { layer: 3, slug: "diabetic-retinopathy-clinical", title: "Diabetic Retinopathy - Clinical", estimatedMinutes: 20, summary: "Fundoscopic findings, screening protocols, OCT imaging, monitoring for progression.", contentMd: `# Diabetic Retinopathy - Clinical\n\n## Fundoscopic Examination\n\n**Mild NPDR**: Microaneurysms, small hemorrhages, hard exudates\n**Moderate NPDR**: Multiple hemorrhages, cotton-wool spots, venous beading, IRMA\n**Severe NPDR**: 4-2s rule findings, extensive ischemia\n**PDR**: NVD/NVE, vitreous hemorrhage possible, fibrosis, rubeotic glaucoma\n\n## Clinically Significant DME (CSME)\n\n**Definition**: Hard exudates ≤500μm fovea OR retinal thickening ≤500μm OR thickening ≥1DD within 1DD fovea\n**OCT findings**: CST >300μm, intraretinal edema, cystoid pattern\n**Prognosis**: ELM (external limiting membrane) disruption = worse visual prognosis\n\n## Screening Protocols\n\n**At-risk no DR**: Annual exam\n**Mild NPDR**: Every 6-12 months\n**Moderate NPDR**: Every 3-6 months\n**Severe NPDR**: Every 1-3 months (urgent, likely needs treatment)\n**PDR**: Every 1-2 months initially\n\n## Imaging\n\n**Retinal photography**: Non-mydriatic or mydriatic cameras (screening programs)\n**OCT**: Assesses macular thickness, detects DME\n**FA (Fluorescein angiography)**: Shows perfusion, non-perfusion zones, leakage sites (for laser planning)`,
        keyPoints: [
          "Mild NPDR: microaneurysms, small hemorrhages, hard exudates",
          "Severe NPDR: 4-2s rule; very high PDR risk without treatment",
          "CSME: hard exudates ≤500μm fovea; treatment required",
          "OCT shows macular thickness, photoreceptor layer integrity",
          "Annual screening for all diabetics; more frequent if DR detected",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "9", edition: "7th" },
        ],
      },
      { layer: 4, slug: "diabetic-retinopathy-exam", title: "Diabetic Retinopathy - Exam Prep", estimatedMinutes: 20, summary: "Treatment indications, PRP, anti-VEGF therapy, glycemic control importance.", contentMd: `# Diabetic Retinopathy - Exam Prep\n\n## Treatment Indications\n\n**Mild-Moderate NPDR**: Observation + glycemic/BP control; <25% progress within 1 year\n**Severe NPDR**: PRP or anti-VEGF; ≥75% progress to PDR without treatment\n**PDR**: Anti-VEGF or PRP; anti-VEGF faster response, preserves vision better than PRP alone\n**CSME**: Anti-VEGF first-line (better vision than laser)\n**Vitreous hemorrhage**: Anti-VEGF initially; PPV if not clearing in 3-4 months\n\n## Panretinal Photocoagulation (PRP)\n\n**Mechanism**: Destroys peripheral ischemic retina → reduces VEGF\n**Technique**: 1500-3000 burns to peripheral retina\n**Complications**: Reduced peripheral vision, myopic shift, cataract progression\n**Success**: 95% prevent progression in early PDR\n\n## Anti-VEGF Therapy\n\n**Agents**: Bevacizumab, ranibizumab, aflibercept\n**Indications**: Severe NPDR, PDR, CSME\n**Dosing**: Monthly initially; then PRN or every 4-8 weeks\n**Advantages over PRP**: Better vision preservation, faster neovascular regression, peripheral vision preserved\n\n## Glycemic Control Importance\n\n**DCCT trial**: Intensive control (HbA1c <7%) → 76% DR reduction\n**BP control**: Every 10 mmHg SBP reduction → 15% progression reduction\n**Lipid management**: High triglycerides increase hard exudates`,
        keyPoints: [
          "Severe NPDR: 75% PDR risk without treatment; PRP/anti-VEGF indicated",
          "CSME: anti-VEGF first-line (better vision than laser)",
          "HbA1c tight control <7% reduces DR risk by 76%",
          "BP control critical: 10 mmHg reduction → 15% progression reduction",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "9", edition: "7th" },
        ],
      },
      { layer: 5, slug: "diabetic-retinopathy-recall", title: "Diabetic Retinopathy - Active Recall", estimatedMinutes: 15, summary: "8 clinical cases on DR classification, management, screening, prevention.", contentMd: `# Active Recall: Diabetic Retinopathy\n\n**Q1**: 55-year-old Type 2 diabetic, HbA1c 9.2%. Multiple dot/blot hemorrhages, cotton-wool spots all quadrants, venous beading, IRMA. DR classification and 1-year PDR risk?\n> A: Severe NPDR (4-2s rule met). 75% risk PDR within 1 year without treatment. Urgent: PRP or anti-VEGF. First optimize glycemic control (HbA1c target <7%).\n\n**Q2**: Moderate NPDR, no DME, HbA1c 11%. Management?\n> A: Observation if mild/moderate NPDR without DME (<25% progress to vision-threatening disease). Primary: optimize glycemic/BP control. Intensive control reduces progression. Monitor every 6-12 months.\n\n**Q3**: DME with CST 380μm, hard exudates 300μm fovea, VA 20/60. Treatment options?\n> A: Clinically significant DME. Anti-VEGF first-line (bevacizumab, ranibizumab, aflibercept). Monthly injections initially; expect ~40% improve, 50% stabilize. CST should decrease to normal (<250μm) over 3 months if responding.\n\n**Q4**: HbA1c 6.5% throughout pregnancy (Type 1 diabetic), finds mild NPDR at 10 weeks. DR progression risk?\n> A: Real risk of progression in pregnancy (hemodynamic changes, vascular permeability increase). Rapid progression possible (~25-30% of mild NPDR worsen). Critical: maintain tight glucose control throughout; frequent retinal exams (baseline, each trimester, 3 months postpartum).\n\n**Q5**: Patient with PDR and recent vitreous hemorrhage, vision worse than light perception. Assessment and treatment?\n> A: Cannot visualize retina (hemorrhage opaque). B-scan ultrasound for posterior status (check for retinal detachment). Empiric anti-VEGF injection to induce neovascular regression while awaiting clearing. If hemorrhage doesn't clear in 3-4 months: pars plana vitrectomy.\n\n**Q6**: Severe NPDR, patient asks about exercise. Recommendations?\n> A: High-intensity exercise may transiently increase IOP and vascular pressure (increase hemorrhage risk). Counsel: moderate exercise safe; avoid heavy lifting, Valsalva maneuvers. More important: control glycemia and BP. Anti-VEGF/PRP planned to reduce neovascularization risk (more protective than exercise restriction).\n\n**Q7**: Diabetic patient reports \"floaters\" and photopsia. Mild NPDR on last exam 3 months ago. Next steps?\n> A: Floaters + photopsia suggest possible retinal break or hemorrhage (new). Urgent dilated retinal exam. Risk: rapid DR progression between exams (can worsen from mild to severe NPDR). Detailed posterior exam, OCT, consider B-scan if vitreous haze obscures view.\n\n**Q8**: Type 2 diabetic with tight glycemic control (HbA1c 6.5%) but severe hypertension (BP 170/110), elevated triglycerides. DR risk reduction with BP/lipid management?\n> A: Even with tight glucose control, BP and lipids matter (independent risk factors). SBP reduction: every 10 mmHg → 15% DR progression reduction. Triglycerides: high levels increase hard exudate risk. BP target <130/80; lipid management important. Combined effect: glycemic + BP + lipid control gives maximum DR risk reduction.`,
        mnemonics: [
          { text: "Severe NPDR: 75% PDR risk without treatment; Mild/Moderate: <25%", explanation: "Treatment threshold" },
          { text: "DCCT: intensive glucose control → 76% DR reduction (legacy effect)", explanation: "Glycemic control evidence" },
        ],
        keyPoints: [
          "Mild NPDR: observe if no DME; monitor 6-12 months",
          "Severe NPDR: PRP or anti-VEGF mandatory (75% PDR risk)",
          "CSME: anti-VEGF first-line (better vision than laser)",
          "HbA1c tight control <7% reduces DR risk by 76%",
          "BP control critical: 10 mmHg reduction → 15% reduction",
          "Pregnancy: rapid DR progression possible; frequent monitoring critical",
        ],
        textbookRefs: [
          { book: "AK Khurana Comprehensive Ophthalmology", chapter: "9", edition: "7th" },
        ],
      },
    ],
  },
];
