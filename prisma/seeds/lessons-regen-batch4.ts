export const regenBatch4Lessons = [
  {
    topicCode: "IM-MOD-01-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "rheumatic-heart-disease-foundation",
        title: "Rheumatic Heart Disease - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of acute rheumatic fever (ARF) pathogenesis, epidemiology in India, and transition to chronic RHD.",
        contentMd: "# Rheumatic Heart Disease - Foundation\n\n## What is RHD?\nRHD is chronic valvular damage following group A streptococcal (GAS) pharyngitis and acute rheumatic fever (ARF). India has highest burden globally—15-20 million affected, particularly in low-income communities.\n\n## ARF Pathogenesis\nGAS pharyngitis (untreated or inadequately treated) → Molecular mimicry between streptococcal M protein and cardiac myosin → Cross-reactive autoimmune response → Carditis, arthritis, chorea.\n\n## Key Epidemiologic Features\n- Peak incidence: 5-14 years (poverty, crowding, malnutrition risk factors)\n- 2-3% of ARF cases progress to permanent RHD\n- Females > Males in RHD prevalence\n- Recurrent streptococcal infections increase RHD risk\n\n## Why India?\nHigh GAS prevalence due to poor sanitation, delayed antibiotics, malnutrition. RHD now rare in developed countries due to streptococcal screening and penicillin prophylaxis.\n\n## Clinical Significance\nRHD causes mitral stenosis (most common), mitral regurgitation, aortic valve disease → heart failure, atrial fibrillation, thromboembolic stroke.",
        mnemonics: [
          { text: "GAS to RHD: Step → Strep → Sequelae", explanation: "Remembers progression from Group A Streptococcus to Rheumatic Heart Disease" },
          { text: "ARF criteria (modified Jones): MAR-C-DAN", explanation: "Major: Migratory polyarthritis, Aortic/Mitral involvement, Rheumatic fever history, Chorea, DNA evidence of GAS" }
        ],
        keyPoints: [
          "GAS pharyngitis is the primary trigger; throat infection → immune-mediated cardiac damage",
          "Molecular mimicry: M protein epitopes cross-react with cardiac myosin",
          "ARF diagnosis requires evidence of preceding GAS and major/minor criteria",
          "RHD develops in subset of ARF survivors; repeat GAS infections worsen prognosis",
          "India bears 50% global RHD burden; endemic in resource-poor areas"
        ],
        textbookRefs: [
          { book: "Guyton and Hall", chapter: "Heart Valve Replacement", edition: "13th" },
          { book: "Robbins Pathology", chapter: "Rheumatic Fever and Rheumatic Heart Disease", edition: "10th" },
          { book: "Braunwald's Heart Disease", chapter: "Rheumatic Fever", edition: "12th" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Acute Rheumatic Fever", edition: "21st" }
        ]
      },
      {
        layer: 2,
        slug: "rheumatic-heart-disease-mechanism",
        title: "Rheumatic Heart Disease - Mechanism",
        estimatedMinutes: 25,
        summary: "Detailed pathophysiology of valve damage, immune cascade, and transition from acute inflammation to chronic fibrosis.",
        contentMd: "# RHD Mechanism - Pathophysiology\n\n## Molecular Mimicry - The Core Process\n1. GAS M protein contains epitopes homologous to cardiac myosin, tropomyosin, keratin\n2. B and T cells cross-react with cardiac autoantigens\n3. Resulting autoimmunity persists even after pathogen clearance\n4. Cardiac myosin-specific CD4+ T cells infiltrate myocardium\n\n## Acute Phase (ARF)\n**Pancarditis involvement:**\n- **Myocarditis**: Aschoff bodies (pathognomonic lesion) with central necrosis, surrounded by histiocytes (Anitschkow cells), giant cells (Aschoff cells)\n- **Endocarditis**: Verrucous inflammation along valve closure lines → valve edema, regurgitation\n- **Pericarditis**: Fibrinous inflammation, \"bread and butter\" appearance\n\n**Clinical correlate**: Carditis presents with new/changing murmurs, heart failure signs in acute phase.\n\n## Chronic Phase (RHD)\n**Valve remodeling:**\n1. Valve neovascularization with inflammatory cell infiltration\n2. Fibroblast proliferation and collagen deposition\n3. Valve thickening, commissural fusion, chordal shortening\n4. Calcification develops over years\n\n**Hemodynamic consequences:**\n- Mitral stenosis: Narrowed orifice (normal 4-6 cm²; MS when <2 cm²) → increased LA pressure → pulmonary congestion\n- Mitral regurgitation: Incomplete closure → systolic backflow to LA\n- Secondary phenomena: AF (dilated LA), LV dilatation, RV hypertrophy (pulmonary hypertension)\n\n## Immune Persistence\nAntigen-presenting cells continuously present cardiac myosin to T cells → chronic low-grade inflammation. Each new GAS infection amplifies autoimmune response, explaining why repeated streptococcal pharyngitis worsens RHD.",
        mnemonics: [
          { text: "Aschoff bodies: MAG triad", explanation: "Micritic necrosis, Anitschkow cells (histiocytes with central wavy ribbon), Giant cells (Aschoff cells)" },
          { text: "MS vs MR: 'FORCE' vs 'FLUX'", explanation: "MS = Flow obstruction (FORCE resisting flow), MR = Fluid backup (FLUX back into atrium)" }
        ],
        keyPoints: [
          "Aschoff bodies are hallmark of acute RF; composed of Anitschkow cells + giant cells + fibrinoid necrosis",
          "Valve damage is endocarditic initially → inflammatory edema; chronic inflammation → fibrosis + commissural fusion",
          "Mitral valve most severely affected due to highest LA pressures during systole",
          "Secondary calcification occurs years later, worsens stenosis",
          "Repeated GAS infections perpetuate autoimmune damage; each ARF episode increases RHD risk"
        ],
        textbookRefs: [
          { book: "Robbins Pathology", chapter: "The Heart", edition: "10th" },
          { book: "Kumar and Clark", chapter: "Cardiovascular Disease - Valvular Heart Disease", edition: "10th" },
          { book: "Braunwald's Heart Disease", chapter: "Rheumatic Fever and Infective Endocarditis", edition: "12th" }
        ]
      },
      {
        layer: 3,
        slug: "rheumatic-heart-disease-clinical",
        title: "Rheumatic Heart Disease - Clinical",
        estimatedMinutes: 30,
        summary: "Clinical presentation of mitral stenosis, mitral regurgitation, aortic valve disease; diagnosis and India-specific management.",
        contentMd: "# RHD - Clinical Presentation & Diagnosis\n\n## Mitral Stenosis (MS) - Most Common RHD\n\n**Symptoms:**\n- Dyspnea on exertion, orthopnea, paroxysmal nocturnal dyspnea (pulmonary congestion from elevated LA pressure)\n- Palpitations (AF common in advanced MS)\n- Hemoptysis (ruptured bronchial veins from chronic congestion)\n- Systemic thromboembolism risk (AF + LA thrombus)\n\n**Signs:**\n- Tapping apex beat (palpable first heart sound from stiff mitral valve)\n- Opening snap (early diastolic sound as stiffened valve abruptly opens)\n- Diastolic murmur (best heard at apex in left lateral position) - low-pitched, rumbling\n- Atrial fibrillation (irregular pulse) common\n- Right heart failure signs if severe (elevated JVP, hepatomegaly, peripheral edema)\n\n**Severity classification (by mitral valve area, MVA):**\n- Mild MS: MVA >2 cm²\n- Moderate MS: MVA 1-2 cm²\n- Severe MS: MVA <1 cm² (symptomatic)\n\n## Mitral Regurgitation (MR) - Secondary to RHD\n\n**Symptoms:**\n- Dyspnea, fatigue (low cardiac output)\n- Palpitations (hyperdynamic circulation)\n- May be asymptomatic initially\n\n**Signs:**\n- Hyperdynamic apex beat (displaced, heaving)\n- Systolic murmur at apex, radiating to axilla\n- No opening snap (unlike MS)\n- Prominent pulmonary component of S2 if pulmonary hypertension develops\n\n## Aortic Valve Disease in RHD\n**Aortic stenosis (AS) from RHD:**\n- Systolic ejection murmur at right upper sternal border\n- Narrow pulse pressure (low-output state)\n- Syncope, angina, dyspnea (triple presentation)\n\n**Aortic regurgitation (AR) from RHD:**\n- Early diastolic murmur\n- Wide pulse pressure (bounding pulses)\n- Hyperdynamic circulation\n\n## Diagnosis\n\n**Clinical suspicion:** History of ARF, endemic area (India), murmurs on auscultation.\n\n**Investigations:**\n1. **ECG**: AF (irregular rhythm, absent P waves), LA enlargement (broad bifid P in mitral stenosis), LV hypertrophy in MR\n2. **Chest X-ray**: LA enlargement (double contour at right heart border), Kerley B lines (pulmonary edema), calcification of mitral valve\n3. **Echocardiography (Gold standard)**: \n   - 2D echo: Leaflet morphology, commissural fusion, chordal shortening, calcification\n   - Doppler: Mitral valve area (MVA), gradient, regurgitation severity\n   - LA size, LV function assessment\n4. **Cardiac catheterization**: Invasive hemodynamics if intervention planned\n\n## India-Specific Clinical Context\n- RHD often diagnosed late (limited echo access in rural areas)\n- Many patients present with heart failure or stroke as first symptom\n- High AF prevalence → stroke prevention crucial\n- Pregnancy in RHD is high-risk (hemodynamic stress)\n- Access to surgery varies; many patients managed medically",
        mnemonics: [
          { text: "MS signs: TAP & SNAP", explanation: "Tapping apex, Opening snap; diastolic murmur" },
          { text: "MR signs: HOP & SOP", explanation: "Hyperdynamic apex, Systolic murmur; pulmonary edema possible" },
          { text: "RHD in India: CHAFE score", explanation: "Remember high stroke risk: C=Congestive HF, H=Hypertension, A=Age>75, F=Female, E=Ejection fraction <40%" }
        ],
        keyPoints: [
          "MS: Low-pitched diastolic rumble, opening snap, tapping apex; AF common",
          "MR: Holosystolic murmur, hyperdynamic apex, variable symptoms",
          "Echocardiography essential for diagnosis and severity assessment",
          "AF requires anticoagulation; stroke risk very high in MS + AF",
          "Pregnancy contraindicated in severe MS; hemodynamic demands dangerous"
        ],
        textbookRefs: [
          { book: "Braunwald's Heart Disease", chapter: "Mitral Stenosis and Mitral Regurgitation", edition: "12th" },
          { book: "Kumar and Clark", chapter: "Valvular Heart Disease", edition: "10th" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Valvular Heart Disease", edition: "21st" }
        ]
      },
      {
        layer: 4,
        slug: "rheumatic-heart-disease-exam-prep",
        title: "Rheumatic Heart Disease - Exam Prep",
        estimatedMinutes: 25,
        summary: "Management of RHD, prevention strategies, NMC competencies, and high-yield exam points.",
        contentMd: "# RHD - Management & Exam Essentials\n\n## Medical Management\n\n**Symptom control:**\n- Diuretics (furosemide) for pulmonary congestion\n- Beta-blockers (control ventricular rate in AF, reduce cardiac workload)\n- ACE inhibitors (reduce LA pressure in MR)\n- Digoxin (rate control, positive inotrope if systolic dysfunction)\n\n**Anticoagulation:**\n- Warfarin for AF (INR 2-3) - mandatory in RHD with AF\n- Direct oral anticoagulants (DOAC): Emerging but less studied in severe MS\n\n**Bacterial endocarditis prophylaxis:**\n- Amoxicillin before dental/invasive procedures (even after valve replacement)\n- Particularly important post-procedure\n\n## Interventional Management\n\n**Mitral stenosis:**\n1. Percutaneous transvenous mitral commissurotomy (PTMC) - first-line for suitable anatomy\n   - Indications: Symptomatic MS, MVA <1.5 cm², no LA thrombus, minimal MR\n   - Success rate >90% in India; cost-effective\n2. Mitral valve replacement (MVR) if PTMC fails or anatomy unsuitable\n\n**Mitral regurgitation:**\n- Surgical repair/replacement when symptomatic or LV dysfunction develops\n- Medical management (vasodilators) may temporize\n\n**Aortic valve disease:**\n- Surgical intervention if severe and symptomatic\n- Risk-benefit in Indian context (limited surgical facilities in rural areas)\n\n## Secondary Prophylaxis - Critical in India\n\n**Primary prevention (after ARF):**\n- Penicillin G benzathine IM 1.2 million units monthly × 5 years (or until age 21, whichever longer)\n- Prevents recurrent ARF, delays RHD progression\n- **Duration depends on:** Presence of carditis (10 years if carditis), without carditis (5 years)\n\n**NMC Competency:** IM4.1.2 - \"Diagnose and manage acute rheumatic fever and RHD\"\n\n## High-Yield Exam Points\n\n1. **Most common valve affected in RHD:** Mitral (75-80%), then aortic, tricuspid rare\n2. **Most common RHD in India:** Mitral stenosis\n3. **Aschoff body composition:** Central fibrinoid necrosis + Anitschkow cells + giant cells\n4. **MVA classification:** <2 cm² = severe; 1-2 cm² = moderate; >2 cm² = mild\n5. **MS murmur characteristics:** Low-pitched, diastolic, best heard at apex in left lateral position\n6. **Opening snap timing:** Correlates with severity—earlier snap = more severe MS\n7. **AF indication for anticoagulation:** Present in RHD with AF; CHA₂DS₂-VASc score mandatory\n8. **Pregnancy in RHD:** Mitral stenosis most dangerous; hemodynamic demands of pregnancy can precipitate pulmonary edema\n9. **PTMC vs MVR:** PTMC preferred first-line for suitable MS; less invasive, preserves native valve\n10. **Endocarditis prophylaxis:** Given before dental procedures indefinitely in RHD (even post-surgical repair)",
        mnemonics: [
          { text: "MS Complications: AFLAP", explanation: "Atrial Fibrillation, Left atrial Thrombus, Left atrial Appendage clot, Pulmonary edema" },
          { text: "RHD Prophylaxis Timing: PCN by Months", explanation: "Penicillin (G benzathine) every Month; duration depends on carditis presence" },
          { text: "Indications for PTMC: SNAP", explanation: "Symptomatic MS, No LA thrombus, Anatomy suitable (Wilkins score), Pliable valve" }
        ],
        keyPoints: [
          "PTMC is cost-effective first-line intervention in India for suitable MS; 90% success rate",
          "Penicillin prophylaxis duration: 10 years if carditis history, 5 years without",
          "Warfarin INR 2-3 mandatory if AF present; DOAC less studied in severe MS",
          "Pregnancy in severe MS is contraindicated; mortality risk significant",
          "Endocarditis prophylaxis for life in RHD, even after successful PTMC or MVR"
        ],
        textbookRefs: [
          { book: "NMC CBME Competencies", chapter: "IM4.1.2 - Acute Rheumatic Fever", edition: "2023" },
          { book: "Braunwald's Heart Disease", chapter: "Management of Mitral Stenosis", edition: "12th" },
          { book: "Kumar and Clark", chapter: "Management of RHD", edition: "10th" }
        ]
      },
      {
        layer: 5,
        slug: "rheumatic-heart-disease-active-recall",
        title: "Rheumatic Heart Disease - Active Recall",
        estimatedMinutes: 20,
        summary: "Spaced repetition practice and clinical scenarios for RHD mastery.",
        contentMd: "# RHD - Active Recall & Clinical Scenarios\n\n## Recall Questions\n\n**Q1: Pathophysiology**\nWhat is the molecular basis for cardiac autoimmunity in RHD? Answer: Molecular mimicry—GAS M protein epitopes cross-react with cardiac myosin, tropomyosin; T cells infiltrate myocardium causing Aschoff bodies.\n\n**Q2: Diagnosis**\nA 28-year-old woman with history of ARF presents with dyspnea. Echo shows MVA 1.2 cm², LA enlargement, no thrombus. What is the most appropriate next step? Answer: Percutaneous transvenous mitral commissurotomy (PTMC)—symptomatic, suitable anatomy, first-line in India.\n\n**Q3: Complications**\nWhy is AF particularly dangerous in mitral stenosis? Answer: LA dilation from elevated pressures → AF; AF → blood stasis in LAA → thrombus formation; systemic embolization risk, especially stroke.\n\n**Q4: Prevention**\nA 16-year-old had ARF with carditis 2 years ago. What is the duration of penicillin prophylaxis? Answer: 10 years (because of carditis history). Penicillin G benzathine 1.2 million units IM monthly × 10 years total.\n\n**Q5: Clinical Distinction**\nDistinguish MS from MR on physical examination. Answer: MS—tapping apex, opening snap, low-pitched diastolic murmur. MR—hyperdynamic apex, holosystolic murmur at apex radiating to axilla, no opening snap.\n\n## Clinical Scenarios\n\n**Scenario 1: Acute Presentation**\n25-year-old male from rural India presenting with acute dyspnea, fever, newly audible cardiac murmur. No prior ARF history. Elevated ESR, throat culture positive for GAS.\n- Diagnosis: Acute rheumatic fever with carditis\n- Management: High-dose aspirin, penicillin (IM benzathine 1.2 MU weekly × 4 weeks), close monitoring for HF\n- Long-term: Penicillin prophylaxis × 5 years minimum (no carditis in prior episode assumed)\n\n**Scenario 2: Chronic RHD with Complications**\n45-year-old woman with known MS (MVA 0.8 cm²) presenting with palpitations, irregular pulse, dyspnea at rest. ECG shows AF.\n- Diagnosis: Severe MS with new-onset AF\n- Acute management: Rate control (digoxin, beta-blocker), anticoagulation (warfarin INR 2-3), diuretics\n- Definitive: PTMC or MVR depending on anatomy (urgent echo for Wilkins score)\n- Long-term: Warfarin indefinitely, endocarditis prophylaxis\n\n**Scenario 3: Pregnancy Planning**\n32-year-old woman with RHD (moderate MS, MVA 1.5 cm²) requesting pregnancy advice.\n- Counseling: Pregnancy possible but high-risk; hemodynamic demands worsen MS symptoms\n- Optimization: Consider PTMC before pregnancy to improve MVA\n- If pregnant: Close cardiology monitoring, diuretics, anticoagulation, planned delivery at tertiary center\n- Risk factors: Arrhythmia, pulmonary edema, thromboembolic stroke\n\n**Scenario 4: Post-PTMC Follow-up**\nPatient 6 weeks post-PTMC for MS; reports residual dyspnea, echo shows mild residual stenosis (MVA 1.8 cm²).\n- Assessment: Partially successful PTMC; possible inadequate commissural splitting\n- Options: Repeat PTMC vs observation (depends on symptom burden)\n- Ongoing: Endocarditis prophylaxis for dental work, regular echo surveillance, stroke prevention if AF develops\n\n## Spaced Repetition Schedule\n- Day 1: Review all 5 layers\n- Day 3: Practice recall questions\n- Day 7: Clinical scenarios\n- Day 14: Integrate with other cardiac pathology\n- Day 30: High-yield summary review",
        mnemonics: [
          { text: "RHD Severity: MVA Rule", explanation: "Mild >2, Moderate 1-2, Severe <1 cm² mitral valve area" },
          { text: "MS Hemodynamics: LA→PH→RV", explanation: "Elevated LA pressure → Pulmonary Hypertension → Right Ventricular dilatation/failure" },
          { text: "PTMC Contraindications: LATe", explanation: "LA thrombus present, Anatomy unsuitable (Wilkins score >8), Thick mitral valve" }
        ],
        keyPoints: [
          "Aschoff bodies are pathognomonic for acute RF; persist for years as Aschoff nodules",
          "Secondary AF in RHD is indication for lifelong anticoagulation (warfarin INR 2-3)",
          "PTMC success depends on valve pliability (Wilkins score) and anatomy",
          "Pregnancy in severe MS risks pulmonary edema; optimize MVA pre-conception",
          "Endocarditis prophylaxis lifelong in RHD regardless of intervention success"
        ],
        textbookRefs: [
          { book: "NMC CBME Competencies", chapter: "IM4.1.2 and IM4.1.3", edition: "2023" },
          { book: "Braunwald's Heart Disease", chapter: "Comprehensive Mitral Stenosis Review", edition: "12th" }
        ]
      }
    ]
  },
  {
    topicCode: "IM-MOD-01-TOP-04",
    layers: [
      {
        layer: 1,
        slug: "hypertension-foundation",
        title: "Hypertension - Foundation",
        estimatedMinutes: 20,
        summary: "Definition, classification, epidemiology, and pathophysiology overview of hypertension in Indian population.",
        contentMd: "# Hypertension - Foundation\n\n## Definition\nSystolic BP ≥140 mmHg and/or diastolic BP ≥90 mmHg on at least two separate occasions. India uses WHO/ISH classification aligned with global standards.\n\n## BP Classification (2023 ESC Guidelines, adopted in India)\n- **Optimal**: <120/<80 mmHg\n- **Normal**: 120-129/<80 mmHg\n- **Elevated**: 130-139/80-89 mmHg\n- **Grade 1 Hypertension**: 140-159/90-99 mmHg\n- **Grade 2 Hypertension**: 160-179/100-109 mmHg\n- **Grade 3 Hypertension**: ≥180/≥110 mmHg\n- **Isolated Systolic Hypertension**: ≥140/<90 mmHg\n\n## Epidemiology in India\n- Prevalence: 30-40% in urban areas, 15-20% in rural areas\n- Rising trend with urbanization, obesity, sedentary lifestyle\n- Most common cardiovascular risk factor in India\n- Control rates <30% (many undiagnosed, unaware of diagnosis)\n- Major cause of stroke, MI, kidney disease, heart failure in India\n\n## Types of Hypertension\n\n**Primary (Essential) Hypertension: 90-95% of cases**\n- Multifactorial etiology: genetics, lifestyle, environmental factors\n- No single identified secondary cause\n\n**Secondary Hypertension: 5-10% of cases**\n- Identifiable cause: kidney disease, endocrine disorders, vascular disease\n- Examples: renovascular disease, hyperaldosteronism, pheochromocytoma, coarctation, sleep apnea\n\n## Pathophysiology Overview\nIncrease in systemic vascular resistance (SVR) and/or cardiac output (CO). BP = CO × SVR. In early hypertension, increased CO; in established disease, increased SVR dominates. Neurogenic factors (sympathetic overactivity), renin-angiotensin-aldosterone system (RAAS), endothelial dysfunction contribute.",
        mnemonics: [
          { text: "BP = CO × SVR", explanation: "Blood Pressure equals Cardiac Output times Systemic Vascular Resistance" },
          { text: "HTN Causes: NEVER", explanation: "Neurogenic (sympathetic), Endocrine, Vascular (renal), Etiology unknown (primary), Renal parenchymal" }
        ],
        keyPoints: [
          "Hypertension affects 30-40% of urban Indian population; mostly uncontrolled",
          "Primary HTN accounts for 90-95%; no identifiable cause",
          "BP ≥140/90 mmHg is diagnostic threshold; goal BP <130/80 in most patients",
          "Genetics + lifestyle factors (salt, obesity, alcohol) drive primary HTN",
          "Secondary HTN suggests specific underlying disease requiring targeted treatment"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Hypertension", edition: "21st" },
          { book: "Braunwald's Heart Disease", chapter: "Arterial Hypertension", edition: "12th" },
          { book: "Kumar and Clark", chapter: "Hypertension", edition: "10th" }
        ]
      },
      {
        layer: 2,
        slug: "hypertension-mechanism",
        title: "Hypertension - Mechanism",
        estimatedMinutes: 25,
        summary: "Detailed pathophysiology: sympathetic nervous system, RAAS, vascular remodeling, and end-organ effects.",
        contentMd: "# Hypertension - Pathophysiological Mechanisms\n\n## Sympathetic Nervous System Involvement\n\n**In early hypertension:**\n1. Increased sympathetic outflow from CNS\n2. Catecholamine release (epinephrine, norepinephrine)\n3. Alpha-adrenergic vasoconstriction → increased SVR\n4. Beta-adrenergic effects → increased heart rate, contractility → increased CO\n5. Result: BP elevation\n\n**Mediators:** Hypothalamus, brainstem nuclei; dysregulation in hypertension. Genetic predisposition + environmental triggers (stress, sodium, obesity).\n\n## Renin-Angiotensin-Aldosterone System (RAAS)\n\n**Cascade:**\n1. Renal juxtaglomerular cells release renin (triggered by low renal perfusion pressure, sympathetic activation, low sodium)\n2. Renin cleaves angiotensinogen → angiotensin I\n3. ACE (angiotensin-converting enzyme) converts angiotensin I → angiotensin II\n4. Angiotensin II effects:\n   - Vasoconstriction (via AT1 receptors)\n   - Aldosterone release → sodium reabsorption, potassium excretion\n   - Sympathetic activation\n   - ADH release → fluid retention\n5. Sodium + fluid retention → increased blood volume → elevated BP\n\n**In hypertension:** RAAS overactivity; in some patients (renovascular HTN), very high renin-dependent BP elevation.\n\n## Vascular and Structural Changes\n\n**Vascular remodeling (chronic hypertension):**\n1. Increased collagen deposition in arteriolar walls\n2. Increased media-to-lumen ratio (inward eutrophic remodeling)\n3. Endothelial dysfunction: Reduced nitric oxide (NO) bioavailability, increased reactive oxygen species (ROS)\n4. Arterial stiffness develops\n5. Result: Maintained elevation of BP even if initiating stimulus resolves (\"self-perpetuating\")\n\n## Sodium Sensitivity\nIn India, high dietary salt intake common. In genetically susceptible individuals:\n1. Impaired sodium excretion\n2. Salt retention → plasma volume expansion\n3. Pressure-natriuresis abnormal\n4. Persistent hypertension\n\n## Obesity and Insulin Resistance\nIncreasing obesity in India:\n1. Increased SNS activity\n2. RAAS activation (adipose tissue produces angiotensinogen)\n3. Insulin resistance → sodium retention, sympathetic activation\n4. Leptin resistance → abnormal CNS control of BP\n\n## End-Organ Damage Mechanisms\n\n**Heart:**\n- Increased SVR → LV hypertrophy (compensatory)\n- Myocardial fibrosis (angiotensin II, aldosterone mediated)\n- Diastolic dysfunction, then systolic if severe\n- AF risk (atrial dilatation, fibrosis)\n\n**Brain:**\n- Chronic hypertension → vessel wall thickening\n- Lipohyalinosis (in small penetrating arteries) → lacunar infarcts\n- Hypertensive encephalopathy: Break in blood-brain barrier, cerebral edema (if BP suddenly very elevated)\n\n**Kidneys:**\n- Afferent arteriole hyalinosis\n- Glomerular sclerosis\n- Progressive proteinuria, declining GFR\n- Can lead to end-stage renal disease (ESRD)\n\n**Blood vessels:**\n- Atherosclerotic plaque formation accelerated\n- Stroke, MI risk increased",
        mnemonics: [
          { text: "RAAS Cascade: RAN ACE AII Aldo", explanation: "Renin, Angiotensinogen, Angiotensin II, Aldosterone—remember the sequence and ACE inhibitor target" },
          { text: "HTN End-Organ Damage: HANK", explanation: "Heart (LVH, HF), Aorta (aneurysm), Neuro (stroke, ICH), Kidney (CKD)" },
          { text: "Endothelial Dysfunction: NO and ROS", explanation: "Reduced Nitric Oxide, Increased Reactive Oxygen Species—impaired vasodilation" }
        ],
        keyPoints: [
          "Early HTN: Increased CO from SNS; chronic HTN: Increased SVR from vascular remodeling",
          "RAAS amplifies HTN via vasoconstriction and sodium/fluid retention; ACE inhibitors block at angiotensin II step",
          "Vascular remodeling is self-perpetuating; explains why BP remains elevated even after trigger resolves",
          "Sodium sensitivity varies genetically; high salt intake worsens HTN in susceptible Indians",
          "End-organ damage (LVH, stroke, CKD) relates to duration and severity of HTN exposure"
        ],
        textbookRefs: [
          { book: "Guyton and Hall Textbook", chapter: "Arterial Pressure Regulation", edition: "13th" },
          { book: "Braunwald's Heart Disease", chapter: "Pathophysiology of Hypertension", edition: "12th" },
          { book: "Robbins Pathology", chapter: "Blood Vessels", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "hypertension-clinical",
        title: "Hypertension - Clinical",
        estimatedMinutes: 30,
        summary: "Clinical assessment, complications, secondary HTN screening, and Indian-specific presentation patterns.",
        contentMd: "# Hypertension - Clinical Assessment & Complications\n\n## Clinical Presentation\n\n**Most patients asymptomatic** - HTN often called \"silent killer.\"\n\n**Symptomatic presentations (late or severe):**\n- Headache (occipital, morning)\n- Dizziness, vertigo\n- Palpitations, chest discomfort\n- Dyspnea (if HF develops)\n- Epistaxis (nosebleeds)\n\n**Physical examination:**\n1. **BP measurement:** Multiple readings (≥2 separate visits); home BP monitoring helpful\n2. **Signs of end-organ damage:**\n   - Eyes: Fundoscopy for hypertensive retinopathy (flame hemorrhages, exudates, papilledema in malignant HTN)\n   - Heart: Displaced PMI (LVH), S4 gallop (diastolic dysfunction)\n   - Neurologic: Focal deficits (stroke), confusion (hypertensive encephalopathy)\n   - Peripheral: Pulse deficits (aortic dissection), bruits (renal artery stenosis)\n\n## Hypertensive Retinopathy (Fundoscopy)\n- **Grade 1:** Arteriolar narrowing\n- **Grade 2:** AV nicking, flame hemorrhages\n- **Grade 3:** Cotton-wool spots, hard exudates, optic disc swelling\n- **Grade 4:** Papilledema, retinal hemorrhages (malignant HTN)\n\n## Complications\n\n**Acute complications:**\n1. **Hypertensive Crisis:** BP >180/120 mmHg\n   - With symptoms/end-organ damage = Hypertensive Emergency (MI, stroke, ICH, pulmonary edema, eclampsia)\n   - Asymptomatic = Hypertensive Urgency\n2. **Acute Coronary Syndrome:** MI risk in HTN\n3. **Stroke:** Ischemic (lipohyalinosis in small vessels) or hemorrhagic (ICH)\n4. **Aortic Dissection:** Sudden severe chest pain radiating to back; type A is surgical emergency\n5. **Pulmonary Edema:** From acute LV failure\n6. **Hypertensive Encephalopathy:** Cerebral edema; confusion, seizures, coma\n\n**Chronic complications:**\n1. **Left Ventricular Hypertrophy (LVH):** Thickened LV wall; detected on echo, increases sudden cardiac death risk\n2. **Diastolic Heart Failure:** LVH → impaired diastolic filling → pulmonary congestion (no systolic dysfunction initially)\n3. **Systolic Heart Failure:** If HTN untreated long-term, can progress to systolic dysfunction\n4. **Atrial Fibrillation:** LA dilation from HTN-induced diastolic dysfunction\n5. **Chronic Kidney Disease:** Progressive proteinuria, declining GFR, potential for ESRD\n6. **Coronary Artery Disease & MI:** Accelerated atherosclerosis\n7. **Cerebrovascular Disease:** Stroke, TIA, vascular dementia\n8. **Aortic Aneurysm:** Weakened aortic wall\n\n## Screening for Secondary Hypertension\n\n**High-risk features suggesting secondary HTN:**\n- Young age (<30 years) with HTN\n- Sudden onset or resistant HTN (uncontrolled despite 3+ agents)\n- Severe HTN (Grade 3)\n- Focal findings on exam (bruits, pulse asymmetry)\n- Associated symptoms (episodic sweating, palpitations in pheochromocytoma; hypokalemia in hyperaldosteronism)\n\n**Initial workup for secondary HTN:**\n1. **Renal parenchymal disease:** Serum creatinine, urine dipstick (proteinuria), renal ultrasound\n2. **Renovascular disease (Renal artery stenosis):** Renal artery duplex ultrasound, CT angiography, captopril renography\n3. **Hyperaldosteronism:** Aldosterone-to-renin ratio, confirmatory tests\n4. **Pheochromocytoma:** 24-hour urine metanephrines, plasma free metanephrines\n5. **Cushing's syndrome:** 24-hour urine cortisol, dexamethasone suppression test\n6. **Thyroid disease:** TSH, thyroid antibodies\n7. **Sleep apnea:** Sleep study if symptoms (daytime somnolence, snoring, witnessed apneas)\n8. **Coarctation:** Leg BP lower than arm BP; echo, CT angiography\n\n## India-Specific Considerations\n- **High salt diet:** Dietary salt intake 10-12 g/day (goal <5 g/day); salt sensitivity common\n- **Low awareness:** Many hypertensives unaware of diagnosis; poor medication adherence\n- **Access disparities:** Rural areas lack home BP monitoring; diagnosis delayed\n- **Comorbidities:** High DM prevalence (HTN + DM = very high CV risk)\n- **Herbal remedies:** Some patients use unproven treatments; counseling needed",
        mnemonics: [
          { text: "HTN Complications: HHACCK", explanation: "Heart (LVH, HF, MI), Hypertensive emergency, Aortic dissection, Chronic kidney disease, Cerebrovascular (stroke)" },
          { text: "Retinopathy Grades: NASHG", explanation: "Narrowing (G1), AV nicking (G2), Soft exudates (G3), Hemorrhages & Papilledema (G4)" },
          { text: "Secondary HTN Screening: ACHES", explanation: "Aldosterone (hyperaldosteronism), Catecholamine (pheochromocytoma), Hormones (Cushing, thyroid), Endothelial (renal artery), Sleep (apnea)" }
        ],
        keyPoints: [
          "Most HTN patients asymptomatic; diagnosis requires BP measurement on separate visits",
          "Hypertensive emergency (HTN + end-organ damage) requires IV antihypertensives; hypertensive urgency can be managed orally",
          "LVH is marker of chronic HTN burden; associated with HF and sudden death risk",
          "Secondary HTN prevalence ~5-10%; always screen young or resistant HTN cases",
          "India-specific: High salt diet, low awareness, poor control rates drive morbidity"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Hypertension Management", edition: "21st" },
          { book: "Braunwald's Heart Disease", chapter: "Clinical Assessment of Hypertension", edition: "12th" },
          { book: "Kumar and Clark", chapter: "Hypertension and its Management", edition: "10th" }
        ]
      },
      {
        layer: 4,
        slug: "hypertension-exam-prep",
        title: "Hypertension - Exam Prep",
        estimatedMinutes: 25,
        summary: "Management algorithms, NMC competencies, drug classes, and lifestyle modifications.",
        contentMd: "# Hypertension - Management & Exam Essentials\n\n## Target Blood Pressure\n\n**General population:** <130/80 mmHg (based on 2023 ESC guidelines)\n**Elderly (>65 years):** <140/90 mmHg (or <130/80 if tolerated)\n**Chronic Kidney Disease:** <120/90 mmHg (to slow CKD progression)\n**Diabetes:** <130/80 mmHg (CV risk reduction)\n\n## Management Approach\n\n**Lifestyle modifications (first-line, all patients):**\n1. DASH diet (Dietary Approaches to Stop Hypertension): Fruits, vegetables, whole grains, low-fat dairy\n2. Sodium restriction: <5 g/day (major challenge in India; foods high in added salt)\n3. Weight loss: 5-10 kg loss reduces BP ~5 mmHg\n4. Aerobic exercise: 150 min/week moderate intensity\n5. Alcohol moderation: Limit to 1-2 drinks/day\n6. Smoking cessation: Absolute imperative\n7. Stress management: Yoga, meditation\n\n## Pharmacologic Management\n\n**Indications for drug therapy:**\n- Grade 1 HTN + high CV risk or evidence of end-organ damage → consider meds\n- Grade 1 HTN + low risk → 3 months lifestyle trial, then reassess\n- Grade 2-3 HTN → immediate drug therapy\n\n**Drug classes:**\n\n1. **ACE Inhibitors (e.g., lisinopril, ramipril)**\n   - Mechanism: Block ACE; reduce angiotensin II\n   - Benefits: Renal protection in CKD, cardioprotection (HF), reduce proteinuria\n   - Side effects: Dry cough (common), hyperkalemia, angioedema (rare)\n   - First-line in CKD, post-MI, heart failure\n\n2. **Angiotensin Receptor Blockers (e.g., losartan, olmesartan)**\n   - Mechanism: AT1 receptor blockade\n   - Similar benefits to ACE-I without cough\n   - Alternative if ACE-I intolerance\n\n3. **Beta-blockers (e.g., metoprolol, bisoprolol)**\n   - Mechanism: Reduce CO, SNS activity\n   - Benefits: Reduce MI risk, post-MI cardioprotection, AF rate control, reduce HF mortality\n   - Drawbacks: Fatigue, sexual dysfunction, avoid in asthma/COPD\n   - Indicated: Post-MI, angina, HF, AF\n\n4. **Calcium Channel Blockers (e.g., amlodipine, diltiazem)**\n   - Mechanism: Vascular smooth muscle relaxation\n   - Benefits: Effective, well-tolerated, no metabolic side effects\n   - Side effects: Peripheral edema, flushing, constipation (diltiazem, verapamil)\n   - First-line; combine with ACE-I for synergistic effect\n\n5. **Thiazide Diuretics (e.g., hydrochlorothiazide, chlorthalidone)**\n   - Mechanism: Sodium excretion, reduce plasma volume\n   - Benefits: Effective, inexpensive\n   - Drawbacks: Hypokalemia, hyperglycemia, hyperuricemia, sexual dysfunction\n   - First-line option; useful in HTN + edema\n\n6. **Loop diuretics (e.g., furosemide)**\n   - Reserved for HTN + heart failure or severe fluid overload\n   - Not first-line for HTN alone\n\n7. **Alpha-blockers (e.g., doxazosin)**\n   - Mechanism: Alpha-1 adrenergic blockade → vasodilation\n   - Useful if BPH coexists\n   - Not first-line; less cardioprotective\n\n8. **Direct Vasodilators (e.g., hydralazine, minoxidil)**\n   - Powerful but cause reflex SNS activation → tachycardia, fluid retention\n   - Reserved for resistant HTN, pregnancy (hydralazine)\n   - Combine with diuretic + beta-blocker\n\n**Combination therapy:**\n- Most patients require ≥2 drugs\n- Synergistic combinations: ACE-I + CCB, ACE-I + thiazide\n- Avoid: ACE-I + ARB (additive without additional benefit)\n\n## Resistant Hypertension\nBP uncontrolled despite ≥3 antihypertensives including diuretic.\n\n**Approach:**\n1. Confirm true resistance: Exclude \"pseudo-resistance\" (white coat HTN, poor adherence, incorrect BP technique)\n2. Exclude secondary causes: Full workup\n3. Review medications: Ensure adequate doses, adherence\n4. Identify aggravating factors: NSAIDs, oral contraceptives, excessive salt/alcohol, obstructive sleep apnea\n5. Consider specialist referral for advanced therapies (resistant HTN protocols)\n\n## NMC Competencies\n- **IM4.1.1:** Diagnose and manage hypertension\n- **IM4.1.4:** Manage hypertensive crisis\n- **IM4.2.1:** Manage chronic complications of HTN (stroke, MI, CKD)\n\n## High-Yield Exam Points\n1. **Goal BP:** <130/80 mmHg in most; <140/90 in elderly\n2. **Diagnosis:** ≥2 visits with BP ≥140/90\n3. **DASH diet + sodium restriction:** Most effective lifestyle modification\n4. **ACE-I:** First-line especially in CKD, post-MI, HF\n5. **CCB + ACE-I:** Synergistic; preferred combination\n6. **Beta-blockers:** Essential if MI, angina, HF, AF\n7. **HCTZ:** Inexpensive; watch for hypokalemia, hyperglycemia\n8. **Resistant HTN:** Defined as uncontrolled despite ≥3 agents; work up secondary causes\n9. **Hypertensive emergency vs urgency:** Emergency = end-organ damage, requires IV therapy\n10. **Aortic dissection:** Sudden BP spike + chest/back pain; immediate imaging, IV antihypertensives",
        mnemonics: [
          { text: "First-line HTN drugs: ABCD", explanation: "ACE-I, Beta-blockers, Calcium channel blockers, Diuretics" },
          { text: "ACE-I Benefits: REPS", explanation: "Renal protection, End-organ protection, Proteinuria reduction, Symptomatic HF benefit" },
          { text: "Thiazide Side Effects: HLY", explanation: "Hypokalemia, hyperglycemia, hyperLipidemia (↑cholesterol)" },
          { text: "Resistant HTN Approach: NO SALT", explanation: "Non-adherence (poor compliance), Other drugs (NSAIDs), Secondary causes, Adherence check, Lab verification, Thyroid/sleep apnea" }
        ],
        keyPoints: [
          "DASH diet + Na restriction most effective non-drug intervention; achieves ~8-10 mmHg reduction",
          "ACE-I preferred in CKD, post-MI, HF; CCB preferred in elderly, coronary disease",
          "Combination therapy (ACE-I + CCB or ACE-I + thiazide) superior to monotherapy in most",
          "Avoid ACE-I + ARB combination (additive renal effects without additional BP benefit)",
          "Resistant HTN: Always exclude poor adherence, pseudo-resistance, secondary causes, aggravating drugs"
        ],
        textbookRefs: [
          { book: "NMC CBME Competencies", chapter: "IM4.1.1 - Hypertension Diagnosis and Management", edition: "2023" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Antihypertensive Therapy", edition: "21st" },
          { book: "Braunwald's Heart Disease", chapter: "Drug Therapy for Hypertension", edition: "12th" }
        ]
      },
      {
        layer: 5,
        slug: "hypertension-active-recall",
        title: "Hypertension - Active Recall",
        estimatedMinutes: 20,
        summary: "Spaced repetition and clinical scenarios for HTN mastery.",
        contentMd: "# Hypertension - Active Recall & Clinical Cases\n\n## Recall Questions\n\n**Q1: Pathophysiology**\nExplain how chronic hypertension leads to ischemic stroke. Answer: Chronic HTN causes lipohyalinosis (hyaline deposition) in small penetrating arteries → lacunar infarcts; also accelerates atherosclerosis in larger vessels → plaque rupture, thrombosis, ischemic stroke.\n\n**Q2: Classification**\nBP = 168/102 mmHg. What grade of hypertension? Answer: Grade 2 HTN (systolic 160-179, diastolic 100-109).\n\n**Q3: Drug Mechanism**\nHow does lisinopril reduce blood pressure? Answer: ACE inhibitor blocks conversion of angiotensin I to angiotensin II → vasodilation, reduced SVR; aldosterone suppression → natriuresis (Na+ excretion), reduced plasma volume.\n\n**Q4: Complications**\nWhy is atrial fibrillation common in chronic HTN? Answer: LVH and diastolic dysfunction cause LA dilatation; enlarged LA → abnormal electrical substrate → AF onset.\n\n**Q5: Management**\nA 55-year-old patient on lisinopril 10 mg develops persistent dry cough. What is the best next step? Answer: Switch to ARB (e.g., losartan) or CCB. Dry cough is due to ACE inhibitor's accumulation of bradykinin; ARBs don't have this effect.\n\n## Clinical Scenarios\n\n**Scenario 1: Newly Diagnosed Hypertension**\n45-year-old man, BP 158/96 mmHg on two separate visits. No symptoms, no diabetes, normal renal function. Fundoscopy normal.\n- Classification: Grade 2 HTN, moderate CV risk (age, BP level)\n- Workup: 12-lead ECG (LVH?), echocardiogram (LVH assessment), microalbuminuria screening\n- Management: Discuss lifestyle (DASH, Na restriction, exercise, weight loss); start CCB (amlodipine 5 mg) or ACE-I (lisinopril 10 mg)\n- Follow-up: Recheck BP in 4 weeks; titrate drug if target not achieved\n- NMC Competency: IM4.1.1\n\n**Scenario 2: Resistant Hypertension**\n62-year-old woman with HTN × 8 years. Current regimen: Lisinopril 20 mg, amlodipine 10 mg, hydrochlorothiazide 25 mg. BP still 152/92. No other comorbidities noted.\n- Confirm true resistance: Home BP readings? Adherence okay?\n- Review drugs: Doses adequate; combination rational\n- Exclude secondary causes: Check renal function, aldosterone-to-renin ratio, sleep apnea symptoms\n- Identify aggravating factors: NSAIDs? OCPs? Excess alcohol? Salt intake?\n- Consider 4th agent: Add alpha-blocker (doxazosin) or direct vasodilator (hydralazine + diuretic)\n- Specialist referral if still uncontrolled\n\n**Scenario 3: Hypertensive Emergency**\n35-year-old with severe headache, BP 190/120 mmHg. Fundoscopy shows papilledema. Serum Cr mildly elevated.\n- Diagnosis: Hypertensive emergency (HTN + end-organ damage: papilledema = hypertensive retinopathy grade 4)\n- Management: Admit ICU; IV antihypertensives (IV labetalol, nicardipine, or sodium nitroprusside); goal to reduce BP by 10-20% in first 1-2 hours, then slower reduction\n- Investigation: Urinalysis (proteinuria?), CBC, metabolic panel, chest X-ray, head CT (rule out ICH, encephalopathy)\n- Target: BP ~140/90 by end of first 24 hours\n- Cause: Rule out secondary (renal disease, renovascular, endocrine, drugs)\n\n**Scenario 4: HTN in Pregnancy**\n32-year-old primigravida, 34 weeks. BP 155/100 mmHg. No edema, reflexes brisk, no symptoms.\n- Consider preeclampsia: Proteinuria? Thrombocytopenia? LFTs? Fetal well-being?\n- If preeclampsia confirmed: Urgent delivery consideration; antihypertensives to reduce maternal risk (methyldopa, labetalol, nifedipine safe in pregnancy; avoid ACE-I/ARB, atenolol)\n- Magnesium sulfate for seizure prophylaxis if severe\n- Delivery planned urgently to resolve preeclampsia\n\n**Scenario 5: HTN + CKD**\n58-year-old with HTN and CKD stage 3 (GFR 45). BP 142/88 on lisinopril 10 mg.\n- Goal BP: <120/90 to slow CKD progression\n- Management: Uptitrate lisinopril to 20-40 mg (RAAS blockade renal-protective)\n- Monitor: K+, Cr after dose increase (hyperkalemia risk, Cr may transiently increase)\n- Add CCB (amlodipine) if BP still not at goal; excellent renal safety\n- Encourage: DASH diet, Na <5 g/day, monitor fluid status\n- Regular: Annual UACR, annual GFR monitoring\n\n## Spaced Repetition Schedule\n- Day 1: Review all 5 layers; create concept map of HTN pathophysiology\n- Day 3: Practice recall questions; distinguish drug classes by mechanism\n- Day 7: Clinical scenarios; practice diagnosis and drug selection\n- Day 14: Integrate HTN management with DM, CKD, CAD complications\n- Day 30: High-yield summary; practice NEXT-pattern MCQs on HTN",
        mnemonics: [
          { text: "DASH Diet Components: Fruits, Veg, Grains, Lean, Low-fat Dairy", explanation: "FVGLLD mnemonic for DASH components" },
          { text: "ACE-I vs ARB: Cough vs Clear", explanation: "ACE-I causes persistent dry cough (bradykinin accumulation); ARB avoids this" },
          { text: "HTN End-Organ Damage: Think CRASH", explanation: "Coronary disease, Renal disease, Aortic aneurysm, Stroke, Heart (LVH, HF)" },
          { text: "Hypertensive Emergency Drugs: LNP", explanation: "Labetalol, Nicardipine, sNitroprusside IV agents for hypertensive emergency" }
        ],
        keyPoints: [
          "Hypertensive emergency requires IV antihypertensives; goal 10-20% BP reduction in first 1-2 hours",
          "DASH diet most effective lifestyle intervention; achieves ~8-10 mmHg reduction with sustained adherence",
          "ACE-I first-line in CKD, post-MI, HF; monitor K+, Cr after initiation",
          "Resistant HTN: Always exclude poor adherence, pseudo-resistance (white coat HTN), secondary causes, NSAIDs",
          "Goal BP <130/80 in most; <140/90 in elderly; <120/90 in CKD to slow progression"
        ],
        textbookRefs: [
          { book: "NMC CBME Competencies", chapter: "IM4.1.1 and IM4.1.4", edition: "2023" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Hypertension Crisis Management", edition: "21st" }
        ]
      }
    ]
  }
];
