import type { TopicLessons } from "./content-loader";

export const radiologyPart4Lessons: TopicLessons[] = [
  {
    topicCode: "RD-MOD-02-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "cardiac-imaging-foundation",
        title: "Cardiac Imaging - Foundation",
        estimatedMinutes: 25,
        summary: "Echocardiography basics, cardiac MRI, CT angiography principles.",
        contentMd: `# Cardiac Imaging - Foundation

## Echocardiography Overview
### Types
- **Transthoracic echo (TTE)**: Standard; non-invasive
- **Transesophageal echo (TEE)**: High quality; during surgery/procedures
- **Stress echo**: With exercise or dobutamine
- **3D echo**: Volumetric assessment

### Cardiac Chambers & Dimensions
- **Left ventricle (LV)**: LVID (LV internal dimension) normal 4.5-5.5 cm diastole; dilated >5.5 cm
- **Left atrium (LA)**: Normal 2.4-4.0 cm
- **Right atrium (RA)**: Normal 2.6-4.2 cm
- **Right ventricle (RV)**: Normal 2.5-4.0 cm base

### Ejection Fraction (EF)
- **Definition**: % blood ejected from LV per beat
- **Normal**: >50%
- **Mild dysfunction**: 40-49%
- **Moderate dysfunction**: 30-39%
- **Severe dysfunction**: <30%

## Cardiac MRI Advantages
- **Tissue characterization**: Fibrosis, edema, scar (late gadolinium enhancement)
- **Functional assessment**: LV/RV volumes, EF
- **No radiation**: Non-ionizing
- **Myocardial viability**: LGE shows scar

## CT Angiography for Coronary
- **Coronary CTA**: For CAD assessment, sensitivity 95% for >50% stenosis
- **Radiation**: 1-2 mSv (lower than invasive angiography 5-7 mSv)
- **Heart rate control**: <60 bpm optimal
- **Calcium score**: Risk stratification (0=low, >400=high)

## Chest X-Ray Cardiac Assessment
- **Cardiothoracic ratio**: Normal <0.5; >0.5 = cardiomegaly
- **Pulmonary edema**: "Bat-wing" distribution; Kerley B lines`,
        mnemonics: [
          { text: "Echo chambers: LA, RA, LV, RV", explanation: "Normal LA 2.4-4.0, LV 4.5-5.5 (diastole), LVEF >50%" },
          { text: "EF: >50 normal, 40-49 mild, 30-39 moderate, <30 severe", explanation: "Dysfunction grading" },
          { text: "MRI: CFPM = Cine (function), Fibrosis (LGE), Perfusion, edema (T2)", explanation: "Cardiac MRI sequences" }
        ],
        keyPoints: [
          "Echocardiography standard for cardiac structure/function; LVEF >50% normal",
          "Cardiac MRI excellent for tissue characterization, viability, scarring",
          "Coronary CTA: 95% sensitivity; 1-2 mSv radiation",
          "Heart size on CXR: cardiothoracic ratio >0.5 = cardiomegaly",
          "Pulmonary edema: bat-wing distribution, Kerley B lines"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Cardiac Imaging", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "The Heart and Great Vessels", edition: "8th" }
        ]
      },
      {
        layer: 2,
        slug: "cardiac-pathologies",
        title: "Cardiac Imaging - Common Pathologies",
        estimatedMinutes: 30,
        summary: "Valvular disease, cardiomyopathy, ischemic heart disease on imaging.",
        contentMd: `# Cardiac Pathologies - Imaging Features

## Valvular Disease
### Mitral Stenosis
- **Echo**: Thickened, domed mitral valve; reduced opening
- **Severity**: MVA <1.5 cm² = severe
- **Associated**: LA enlargement, AF, pulmonary hypertension
- **CXR**: LA enlargement (straightened left border, splayed carina)

### Mitral Regurgitation
- **Echo**: Color Doppler flow into LA during systole
- **Severity**: Jet area, regurgitant volume, LA/LV size
- **Chronic**: LV dilates (eccentric hypertrophy)

### Aortic Stenosis
- **Echo**: Thickened aortic valve, reduced opening
- **Severity**: AVA <1.0 cm² = severe; mean gradient >40 mmHg
- **Associated**: LV hypertrophy initially; eventual dilation

### Aortic Regurgitation
- **Echo**: Widened color jet in LV (diastole)
- **Severity**: Jet width, holodiastolic reversal in abdominal aorta
- **Chronic**: LV dilation (eccentric hypertrophy)

## Cardiomyopathies
### Dilated Cardiomyopathy
- **Echo**: Global LV dilation (LVID >5.5), reduced EF (<40%)
- **Causes**: Ischemic, viral, idiopathic, toxic
- **Features**: Enlarged LA, functional MR, reduced LV strain
- **CXR**: Cardiomegaly, pulmonary edema

### Hypertrophic Cardiomyopathy
- **Echo**: Asymmetric LV hypertrophy; often septal predominance
- **SAM**: Systolic anterior motion of mitral valve (obstruction)
- **Risk**: Sudden cardiac death; syncope in young

### Restrictive Cardiomyopathy
- **Echo**: Normal LV size, diastolic dysfunction
- **Atria**: Markedly enlarged
- **Causes**: Amyloidosis, sarcoidosis, hemochromatosis

## Myocardial Infarction
### Acute MI
- **Echo**: Wall motion abnormality (hypokinesis/akinesis)
- **Troponin**: Elevated (highly specific)
- **Territory**: Follows vascular distribution (RCA, LAD, LCx)

### Chronic MI
- **Echo**: Thinning of affected wall; scar (bright on MRI LGE)
- **MRI**: Transmural LGE in infarct territory (diagnostic)
- **Viability**: MRI shows if segment salvageable

## Pericardial Disease
- **Effusion**: Fluid echo-free space around heart
- **Tamponade**: RA/RV diastolic collapse if hemodynamically significant
- **Constrictive pericarditis**: Thickened pericardium, restrictive pattern`,
        mnemonics: [
          { text: "Mitral stenosis: MVA <1.5 cm²; Aortic stenosis: AVA <1.0 cm²", explanation: "Severity cutoffs" },
          { text: "Dilated cardiomyopathy: LVID >5.5 cm, EF <40%", explanation: "Chamber dimensions" },
          { text: "Hypertrophic cardiomyopathy: asymmetric hypertrophy, SAM = obstruction", explanation: "Key features" }
        ],
        keyPoints: [
          "Valvular disease: MVA/AVA quantify severity; echo gold standard",
          "Dilated cardiomyopathy: global LV dilation, reduced EF, LA enlargement",
          "HCM: asymmetric hypertrophy with SAM causing LVOT obstruction",
          "Acute MI: wall motion abnormality in vascular territory",
          "MRI LGE: shows transmural scar (infarction), subendocardial edema (ischemia)"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Cardiac Pathology", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Cardiac Disease", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "cardiac-stress-ischemia",
        title: "Cardiac Imaging - Stress Testing & CAD Assessment",
        estimatedMinutes: 35,
        summary: "Stress echo, nuclear imaging, CTA for CAD, prognostic value.",
        contentMd: `# Cardiac Stress Testing - Physiology & Interpretation

## Stress Echocardiography
### Protocol
- **Baseline**: Resting echo with wall motion assessment
- **Stress induction**: Exercise or dobutamine
- **Monitoring**: ECG, BP, HR throughout
- **Post-stress echo**: Reassess wall motion in all segments

### Wall Motion Scoring
- **Normal**: Hyperkinetic motion (10-20% systolic excursion)
- **Hypokinesis**: Reduced motion (5-10% excursion)
- **Akinesis**: No motion
- **Dyskinesis**: Paradoxical outward motion

### Interpretation
- **Normal stress echo**: No new wall motion abnormalities; excellent prognosis
- **Ischemia**: New/worsening wall motion with stress; indicates significant CAD
- **Fixed scar**: Abnormal at baseline and stress (prior infarction)

## Nuclear Imaging (SPECT)
### Mechanism
- **Tracer**: Tc-99m sestamibi or Tl-201
- **Uptake**: Tracer distributes with myocardial blood flow
- **Ischemia**: Reduced uptake during stress; normalizes at rest (reversible)
- **Infarction**: Reduced uptake both stress and rest (fixed)

### Interpretation
- **Reversible defect**: Reduced stress, normal rest = ischemia (60-70% stenosis)
- **Fixed defect**: Reduced stress and rest = scar/infarction
- **Normal**: Uniform tracer distribution stress and rest

### Prognosis
- **Normal**: <1% cardiac events/year
- **Reversible defect**: 2-5% events/year (depends on size, severity)
- **Fixed defect**: <2% events/year (established scar)
- **Multivessel ischemia**: >5% events/year (high-risk)

## Coronary CTA for Calcium & Stenosis
### Calcium Score Risk Stratification
- **0**: No calcification; low risk
- **1-100**: Mild; intermediate risk
- **101-400**: Moderate; higher risk
- **>400**: Extensive; high risk

### CTA Stenosis Assessment
- **Sensitivity**: 95% for >50% stenosis
- **Specificity**: 86% for significant stenosis
- **Advantages**: Non-invasive; assess anatomic variants, left main disease
- **Limitations**: Radiation, motion artifact, calcification blooming

## Prognostic Value
- **Normal CTA**: <1% events/year
- **Significant stenosis**: Depends on vessel (LAD worse); may need intervention
- **Normal stress echo**: <1% events/year
- **Reversible ischemia**: 2-8% events/year`,
        mnemonics: [
          { text: "Stress echo: new wall motion = ischemia; normal = excellent prognosis", explanation: "Interpretation" },
          { text: "SPECT: reversible = ischemia, fixed = scar", explanation: "Defect classification" },
          { text: "CTA calcium: 0=low, 1-100=intermediate, 101-400=moderate, >400=high risk", explanation: "Risk stratification" }
        ],
        keyPoints: [
          "Stress echo: new wall motion abnormality indicates ischemia; normal <1% events/yr",
          "SPECT: reversible defect = ischemia; fixed = scar (no viability)",
          "Coronary CTA: 95% sensitivity for >50% stenosis; non-invasive alternative to angiography",
          "Calcium score risk stratification; 0=low, >400=high",
          "Prognostic value: normal <1%, reversible ischemia 2-8%, multivessel >5% events/year"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Cardiac Ischemia Imaging", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Coronary Artery Disease", edition: "8th" }
        ]
      },
      {
        layer: 4,
        slug: "cardiac-imaging-exam",
        title: "Cardiac Imaging - Exam Prep",
        estimatedMinutes: 20,
        summary: "High-yield facts, case analysis, critical thresholds.",
        contentMd: `# Cardiac Imaging - Exam Prep

## High-Yield Facts
- **LVEF normal**: >50% (40-49% mild dysfunction; 30-39% moderate; <30% severe)
- **Chamber dimensions**: LA normal 2.4-4.0 cm; LV normal 4.5-5.5 cm (diastole)
- **Valvular thresholds**: MVA <1.5 cm² severe; AVA <1.0 cm² severe
- **Cardiothoracic ratio**: Normal <0.5; >0.5 = cardiomegaly
- **MRI LGE**: Shows transmural scar (acute/chronic MI)
- **Stress test normal**: <1% cardiac events/year
- **Reversible ischemia**: 2-8% events/year (depends on size)
- **Coronary CTA sensitivity**: 95% for >50% stenosis

## Common Exam Questions
- "Normal LVEF?" = >50%
- "Severe mitral stenosis MVA?" = <1.5 cm²
- "Severe aortic stenosis AVA?" = <1.0 cm²
- "Asymmetric LV hypertrophy with SAM?" = Hypertrophic cardiomyopathy
- "Global LV dilation, reduced EF?" = Dilated cardiomyopathy
- "Tranmural scar on MRI LGE?" = Chronic myocardial infarction
- "New wall motion abnormality on stress echo?" = Ischemia (significant CAD)
- "Reversible SPECT defect?" = Ischemia (60-70% stenosis)
- "Fixed SPECT defect?" = Scar/infarction (no viability)
- "CTA coronary sensitivity?" = 95% for >50% stenosis`,
        mnemonics: [
          { text: "LVEF >50 normal, 40-49 mild, 30-39 moderate, <30 severe", explanation: "Dysfunction grading" },
          { text: "MVA <1.5, AVA <1.0 = severe valvular disease", explanation: "Severity thresholds" },
          { text: "LGE transmural = infarct, subendocardial = ischemia", explanation: "MRI patterns" },
          { text: "Stress echo normal <1%, reversible ischemia 2-8% events/year", explanation: "Prognosis" }
        ],
        keyPoints: [
          "LVEF >50% normal; assessment predicts prognosis",
          "Mitral stenosis MVA <1.5 cm²; aortic stenosis AVA <1.0 cm²",
          "Dilated cardiomyopathy: LVID >5.5 cm, EF <40%",
          "HCM: asymmetric hypertrophy, SAM, high-risk for SCD",
          "MRI LGE: transmural = infarction, subendocardial = ischemia"
        ],
        textbookRefs: [
          { book: "Grainger & Allison's Diagnostic Radiology", chapter: "Cardiac Assessment", edition: "7th" },
          { book: "Sutton's Textbook of Radiology", chapter: "Cardiac Imaging Pearls", edition: "8th" }
        ]
      },
      {
        layer: 5,
        slug: "cardiac-imaging-qa",
        title: "Cardiac Imaging - Active Recall Cases",
        estimatedMinutes: 20,
        summary: "Clinical scenarios: acute MI, cardiomyopathy, valvular disease, CAD assessment.",
        contentMd: `# Cardiac Imaging - Active Recall

## Q1: Acute Myocardial Infarction
**Q: 58-year-old male, acute chest pain, ST elevation in inferior leads. Echo shows regional wall motion abnormality (inferior wall hypokinesis). What's management?**

A: **Acute MI inferior wall** (RCA territory). **Management**: (1) Urgent coronary angiography + PCI if suitable, (2) Medications: aspirin, P2Y12 inhibitor, beta-blockers, ACE inhibitors, statins, (3) Oxygen if hypoxic, (4) Pain control, (5) Follow-up echo at 3-6 months to assess recovery + viability (MRI if uncertain). **Prognosis**: Depends on infarct size, collateral flow, extent of myocardium salvaged by revascularization.

## Q2: Dilated Cardiomyopathy
**Q: 45-year-old with dyspnea, orthopnea. Echo shows LVID 6.5 cm, EF 35%, LA enlargement. CXR shows cardiomegaly, pulmonary edema. Diagnosis and management?**

A: **Dilated cardiomyopathy with systolic heart failure**. **Echo findings**: LV severely dilated (LVID >5.5), EF severely reduced (35%), LA enlarged. **Management**: (1) ACE inhibitors + beta-blockers (proven mortality benefit), (2) Diuretics for volume overload, (3) ICD if EF <35% despite optimal therapy (mortality reduction), (4) Investigate cause (ischemic, viral, toxic, idiopathic), (5) Lifestyle modification (salt restriction, fluid limitation). **Prognosis**: Variable; depends on cause, response to therapy, EF recovery.

## Q3: Hypertrophic Cardiomyopathy
**Q: 28-year-old with syncope on exertion, family history sudden cardiac death. Echo shows asymmetric septal hypertrophy, SAM of mitral valve, LV outflow gradient 45 mmHg. Management?**

A: **Hypertrophic cardiomyopathy (HCM), obstructive form**. **Risk factors present**: Syncope (high-risk), family history SCD, high gradient (obstructive). **Management**: (1) Activity restriction (avoid strenuous exercise), (2) Beta-blockers or calcium channel blockers (first-line), (3) ICD if high-risk features (syncope, family history SCD, severe gradient >60, massive LVH), (4) Genetic testing (identify family members), (5) Avoid positive inotropes (worsen obstruction), (6) Surgical myectomy if refractory symptoms. **Prognosis**: Risk of SCD; ICD dramatically reduces mortality in high-risk patients.

## Q4: Stress Echo for CAD
**Q: 55-year-old with chest pain, baseline echo normal. Stress echo performed: normal at baseline, new wall motion abnormality in anterior wall with dobutamine stress. What does this indicate?**

A: **Ischemia in LAD territory** (anterior wall = LAD supplied). **Findings indicate**: Significant LAD stenosis (likely >70%) causing demand ischemia when heart rate/contractility increased. **Next steps**: (1) Coronary angiography for definitive diagnosis + revascularization, or (2) CTA if angiography not immediately available. **Prognosis**: Single vessel ischemia 2-5% events/year (varies with size, response to treatment). **vs normal stress echo**: <1% events/year (can safely defer catheterization).

## Q5: Valvular Disease - Severity Assessment
**Q: 60-year-old with new cardiac murmur. Echo shows thickened mitral valve, limited opening, MVA measured at 1.2 cm², LA enlargement, elevated pulmonary pressures (estimated RVSP 60 mmHg). Severity of stenosis and management?**

A: **Severe mitral stenosis** (MVA <1.5 cm²; 1.2 = severe). **Associated findings**: LA enlargement (from obstruction), pulmonary hypertension (from back-pressure). **Hemodynamic consequences**: Elevated left atrial pressure → pulmonary congestion → dyspnea. **Risk of AF**: High (LA stretch); if AF develops → rapid RVR (loss of LA contraction worsens hemodynamics). **Management**: (1) Activity restriction if symptomatic, (2) Diuretics for congestion, (3) Rate control if AF develops (beta-blockers), (4) Consider percutaneous balloon mitral commissurotomy (PBMC) if suitable anatomy + symptoms, or surgical mitral valve replacement if anatomy not suitable, (5) Anticoagulation if AF develops (thromboembolic risk). **Prognosis**: Progressive; surgical/interventional treatment needed when symptomatic.

## Q6: Coronary CTA for CAD
**Q: 50-year-old with atypical chest pain, low pretest probability. Calcium score 15. CTA shows no significant stenosis. Risk assessment and follow-up?**

A: **Low-risk CAD on CTA** (normal coronary arteries). **Findings**: (1) Minimal calcium burden (15 = low), (2) No significant stenosis on CTA, (3) Therefore: very low likelihood of significant CAD. **Risk**: <1% cardiac events/year (same as normal stress echo). **Management**: (1) Reassurance (coronary obstruction ruled out), (2) Continue preventive measures (exercise, healthy diet, smoking cessation), (3) Can safely defer catheterization, (4) Long-term follow-up: reassess if symptoms change. **Note**: Normal CTA excellent for excluding CAD in intermediate-risk patients (saves unnecessary catheterization).`
      }
    ]
  }
];
