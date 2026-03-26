export const medicineLecturesPart1: Array<{
  topicCode: string;
  contentMd: string;
  estimatedMinutes: number;
}> = [
  {
    topicCode: "IM-MOD-01-TOP-01",
    contentMd: `# Ischemic Heart Disease & Myocardial Infarction

Ischemic heart disease (IHD) remains the leading cause of death in India, accounting for 25-30% of urban mortality. The pathophysiology centers on the mismatch between coronary blood supply and myocardial oxygen demand, typically due to atherosclerotic narrowing of epicardial coronaries.

## Pathophysiology

Atherosclerosis develops through progressive intimal injury, lipid accumulation, and smooth muscle proliferation. The atherosclerotic plaque consists of a lipid core surrounded by a fibrous cap. When plaque ruptures, platelets aggregate and thrombus forms, acutely occluding the vessel. The resultant myocardial infarction (MI) shows a predictable evolution: hyperemia (0-4 hours), coagulation necrosis (12-24 hours), early granulation (3-7 days), scar formation (2-8 weeks).

## Clinical Features

**Unstable Angina & NSTEMI**: Chest pain at rest or minimal exertion, lasting >20 minutes. ECG shows ST depression or T-wave changes. Troponin I/T is negative in unstable angina but elevated in NSTEMI.

**STEMI**: Chest pain is more severe and prolonged. ECG shows ST elevation in anatomically contiguous leads—anterior (LAD), inferior (RCA/LCx), posterior, or right ventricular involvement. Associated symptoms include dyspnea, diaphoresis, palpitations, nausea.

> 🎓 **Professor's Note**: The "golden window" for reperfusion is 12 hours from symptom onset, but maximum benefit occurs within the first 3 hours. In India, door-to-balloon time should be <90 minutes for primary PCI.

## Diagnosis & Management

Troponin is the gold standard biomarker; serial measurements (baseline, 3h, 6h) aid diagnosis. ECG is performed within 10 minutes of presentation. Coronary angiography with PCI is preferred reperfusion strategy (primary PCI). Fibrinolysis (streptokinase, alteplase) is acceptable when PCI unavailable, particularly in rural settings.

Medical management: dual antiplatelet therapy (aspirin + P2Y12 inhibitor), anticoagulation (unfractionated heparin or LMWH), beta-blockers, ACE inhibitors, statins (high-intensity), and nitrates for symptom relief.

> 💡 **Memory Trick**: MONA—Morphine, Oxygen, Nitrates, Aspirin—for acute MI symptom management.

## Complications

Mechanical: free wall rupture, ventricular septal defect, papillary muscle rupture with acute mitral regurgitation. Electrical: ventricular fibrillation, bradycardia, heart block. Hemodynamic: cardiogenic shock (mortality >50%), acute decompensated heart failure.

> ⚡ **Exam Alert**: STEMI anterior wall (LAD) → first diagonal and septal perforators blocked; inferior STEMI (RCA dominant) → AV nodal artery occluded → high-degree AV block risk.

## Secondary Prevention

Lifestyle modification: smoking cessation, dietary fat reduction (<7% saturated fat), exercise 150 min/week moderate intensity, weight loss if BMI >25. Pharmacotherapy: ACE inhibitor/ARB, beta-blocker, statin (LDL target <70 mg/dL), antiplatelet therapy for life, aldosterone antagonist if EF <40%.

> 🏥 **Clinical Pearl**: In tropical regions, always screen for COPD, anemia, and thyroid disease as they precipitate acute IHD. High-altitude populations show earlier age of presentation.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapter 244.
`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "IM-MOD-01-TOP-02",
    contentMd: `# Heart Failure

Heart failure (HF) is a complex clinical syndrome where structural or functional cardiac impairment prevents the heart from pumping sufficient blood to meet metabolic demands. Prevalence in India is 1.3-4.6 million cases, rising with urbanization.

## Pathophysiology & Classification

HF traditionally classified as systolic (reduced EF <40%) or diastolic (preserved EF >50%). Current framework stratifies by EF: HFrEF (EF ≤40%), HFmrEF (41-49%), HFpEF (≥50%). The 4-stage classification (Stage A: at-risk, B: structural disease, C: symptoms, D: refractory) guides intervention timing.

Compensatory mechanisms—sympathetic activation, renin-angiotensin-aldosterone system (RAAS), natriuretic peptides—initially maintain cardiac output but eventually become maladaptive, causing ventricular remodeling, fibrosis, and progressive dysfunction.

> 🎓 **Professor's Note**: The Indian guidelines emphasize early detection of Stage A/B using BNP/NT-proBNP screening in at-risk populations (hypertensive, diabetic, post-MI).

## Etiology

**HFrEF**: Coronary artery disease (60%), hypertension (30%), idiopathic/dilated cardiomyopathy, alcoholic cardiomyopathy, peripartum cardiomyopathy (postpartum syndrome unique in women).

**HFpEF**: Hypertension (70%), obesity, diabetes, restrictive cardiomyopathy, constrictive pericarditis, atrial fibrillation.

Regional differences: RHD-induced HF is declining but remains significant in rural India.

## Clinical Features

Dyspnea on exertion, orthopnea, paroxysmal nocturnal dyspnea. Systemic congestion: peripheral edema, hepatic congestion, ascites. Low output symptoms: fatigue, exercise intolerance. Physical exam: elevated JVP, S3 gallop (ventricular), pulmonary crackles, hepatomegaly.

> 💡 **Memory Trick**: CHAMP—Congestion, Hypoperfusion, Arrhythmia, Mitral regurgitation, Pulmonary edema—common decompensation triggers.

## Diagnosis & Prognosis

Echocardiography is the gold standard for EF assessment and etiology. BNP >35 pg/mL or NT-proBNP >125 pg/mL supports HF diagnosis. Chest X-ray shows Kerley B lines, interstitial edema, Bat's wing opacities. NYHA class predicts prognosis: Class IV has 40% annual mortality.

> ⚡ **Exam Alert**: Acute decompensated HF with preserved EF often requires diuretics for symptom relief; inotropic support contraindicated (worsens diastolic function).

## Management Framework

**HFrEF**: ACE-I/ARB (first-line), beta-blockers (carvedilol, metoprolol), aldosterone antagonists, SGLT2 inhibitors (dapagliflozin, empagliflozin show 25% mortality reduction), ARNi (sacubitril/valsartan). Diuretics for congestion; restrict sodium <2g/day, fluid <1.5-2L/day.

**HFpEF**: No mortality-reducing therapy proven; diuretics for symptoms, BP control, rate control in AF.

Devices: ICD for primary prevention if EF <35%, CRT for QRS >120ms with low EF.

> 🏥 **Clinical Pearl**: In Indian HF cohorts, infectious myocarditis (viral, tuberculous) causes 10-15% of dilated cardiomyopathy. Always investigate TB history and TB serology.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapters 245-247.
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-01-TOP-03",
    contentMd: `# Rheumatic Heart Disease

Rheumatic heart disease (RHD) affects 5-15 million Indians, disproportionately affecting low socioeconomic groups and rural populations. It results from autoimmune sequelae of acute rheumatic fever (ARF), which itself follows Group A Streptococcal (GAS) pharyngitis.

## Acute Rheumatic Fever: Pathophysiology

ARF incidence is 0.5-1% after untreated GAS pharyngitis. Molecular mimicry between streptococcal antigens and myocardial proteins triggers cross-reactive antibodies. Immune complexes deposit in myocardium, causing carditis with inflammation of all three layers: endocarditis (valve inflammation), myocarditis (ventricular dysfunction), pericarditis (pleuritic pain).

Recurrence risk is 30-50% if subsequent GAS infection occurs; hence secondary prophylaxis is critical.

> 🎓 **Professor's Note**: Major criteria (Jones' revised 2015): carditis, polyarthritis, chorea, erythema marginatum, subcutaneous nodules. Plus 2 minor or 1 major + 2 minor + documented prior ARF or RHD = ARF diagnosis.

## Chronic RHD: Valve Lesions

Repeated inflammation causes fibrosis, calcification, and leaflet distortion. **Mitral stenosis** (most common, 65% of RHD): obstruction to LV inflow increases LA pressure, causing pulmonary congestion, AF, and thromboemboli. **Mitral regurgitation**: incompetent leaflets allow backflow; often eccentric jet. **Aortic stenosis**: aortic valve calcifies; rarely pure AS, usually AS + AR. **Tricuspid involvement**: results from RV dilation in mitral stenosis.

Pathognomonic finding: **Carey Coombs lesion** (verrucous endocarditis causing MR in acute carditis).

## Clinical Features

**Acute ARF**: Polyarthritis (knees, ankles, elbows—migratory, asymmetric), carditis, cardio-pulmonary edema, chorea (involuntary movements, emotional lability). Fever, elevated ESR/CRP.

**Chronic RHD**: Dyspnea, palpitations, fatigue, orthopnea. Mitral stenosis: opening snap, diastolic rumble, AF-related pulse irregularity. Mitral regurgitation: systolic murmur at apex, hyperdynamic LV. ASD also common (secondary to septal defects from endocarditis).

> 💡 **Memory Trick**: Mitral stenosis murmur: "OS-LS" (opening snap, late diastolic sound). MR murmur: pan-systolic, radiates to axilla.

## Diagnosis

Chest X-ray: cardiac silhouette enlargement, pulmonary congestion, prosthetic valve or calcification. ECG: AF, LVH, RVH depending on severity. **Echocardiography**: gold standard—measures valve areas, gradients, regurgitation severity, EF, LA size, evidence of thrombosis.

> ⚡ **Exam Alert**: Asymptomatic severe MS (area <1.0 cm²) is an indication for intervention; don't wait for symptoms.

## Management Strategy

**Primary prevention**: Antibiotics (benzathine penicillin G 12 lac units IM single dose or oral amoxicillin 50 mg/kg × 10 days) for GAS pharyngitis within 9 days of symptom onset.

**Secondary prophylaxis** (after ARF): benzathine penicillin G 12 lac units IM every 3-4 weeks × 10 years (or until age 21, whichever later) if RHD present. Oral erythromycin if penicillin allergy.

**Tertiary management**: Anticoagulation (warfarin INR 2-3) if AF or prior thromboembolism. Diuretics/ACE inhibitors for symptoms. Surgical intervention (mitral stenosis: balloon mitral valvotomy, surgical commissurotomy, valve replacement; MR: repair or replacement).

> 🏥 **Clinical Pearl**: India's DOTS program concept applies to secondary prophylaxis too—patient compliance is low; supervised injection days improve adherence significantly.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapter 256; Indian guidelines on RHD.
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-01-TOP-04",
    contentMd: `# Hypertension

Hypertension affects >250 million Indians (prevalence 33% urban, 25% rural) and accounts for 45% of cardiovascular deaths. Blood pressure is defined as <120/80 (normal), 120-139/<90 (elevated), 140-159/90-99 (stage 1), ≥160/≥100 (stage 2), or >180/>120 (hypertensive crisis).

## Classification & Pathophysiology

**Essential hypertension** (95% of cases): multifactorial—genetic predisposition (60% heritable), sodium sensitivity, RAAS activation, sympathetic overdrive, endothelial dysfunction, vascular remodeling.

**Secondary hypertension** (5%): renal (glomerulonephritis, polycystic kidney, renal artery stenosis), endocrine (pheochromocytoma, thyroid disease, Cushing syndrome, hyperaldosteronism), coarctation of aorta, pregnancy (preeclampsia), medications (NSAIDs, oral contraceptives, decongestants, anabolic steroids), obstructive sleep apnea.

> 🎓 **Professor's Note**: White-coat hypertension (elevated clinic BP, normal home BP) affects 20-30% of diagnosed patients. Always obtain out-of-office readings (home monitoring, ambulatory BP) before treatment initiation.

## Pathophysiology of Complications

Chronic HTN causes left ventricular hypertrophy (LVH) with diastolic dysfunction, coronary ischemia, arrhythmias. Endothelial injury accelerates atherosclerosis in coronaries, carotids, peripherals. Renal injury: glomerulosclerosis, proteinuria, progressive CKD. Hypertensive retinopathy: flame hemorrhages, cotton-wool spots, papilledema (malignant hypertension).

## Clinical Presentation & Diagnosis

Most patients are asymptomatic; HTN discovered incidentally. Hypertensive urgency (SBP >180 and/or DBP >120 without end-organ damage) vs. emergency (with stroke, MI, ACS, pulmonary edema, encephalopathy). Headache, dizziness, epistaxis are not specific.

Diagnosis requires ≥2 measurements on ≥2 occasions. Home BP monitoring (average of 3 readings, twice daily × 5-7 days) is preferred for diagnosis and monitoring. Target BP is <130/80 for most; <140/90 acceptable for >65 years.

> 💡 **Memory Trick**: "ABCDE" antihypertensives—ACE inhibitors, Beta-blockers, Calcium-channel blockers, Diuretics, Others (ARBs, aldosterone antagonists, direct vasodilators).

## Non-Pharmacological Management

Weight loss (1 mmHg reduction per 1 kg lost), sodium restriction (<2.3g/day, optimal <1.5g), DASH diet (rich in fruits, vegetables, low-fat dairy), exercise (150 min/week aerobic + resistance), alcohol limitation, smoking cessation. Stress management; Indian yoga/meditation studies show 5-10 mmHg reduction.

> ⚡ **Exam Alert**: Uncontrolled HTN on single agent warrants assessment for secondary causes, medication adherence, and white-coat effect before escalating therapy.

## Pharmacological Management

First-line agents: ACE inhibitors (lisinopril, enalapril), ARBs (losartan, olmesartan), calcium-channel blockers (amlodipine, diltiazem), thiazide diuretics (hydrochlorothiazide). Beta-blockers (metoprolol, atenolol) if concurrent IHD, post-MI, AF. Aldosterone antagonists (spironolactone) in resistant HTN or CKD with albuminuria.

Combination therapy is often needed; fixed-dose combinations improve adherence. Treat to target within 3-6 months; more gradual reduction if cerebrovascular disease to avoid stroke.

> 🏥 **Clinical Pearl**: In India, secondary HTN from renal artery stenosis (atherosclerotic, fibromuscular dysplasia) is underdiagnosed. Screen duplex ultrasound or CT angiography in young hypertensives, rapid onset, or renal insufficiency.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapter 241; Indian guidelines on HTN management.
`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "IM-MOD-01-TOP-05",
    contentMd: `# Arrhythmias

Cardiac arrhythmias affect 1-2% of the general population and increase with age. They result from abnormal impulse generation (automaticity) or abnormal impulse conduction (reentry). Classification: sinus node dysfunction, atrial arrhythmias (AF, flutter, PSVT), ventricular arrhythmias (PVCs, VT, VF), bradyarrhythmias (AV block, sinus bradycardia).

## Supraventricular Arrhythmias

**Atrial Fibrillation (AF)**: Most common arrhythmia, prevalence 0.3-2% in India, rising with age. Pathophysiology: ectopic activity (often pulmonary veins) + reentry within dilated atria triggered by structural disease (HTN, HF, valve disease, IHD), metabolic (thyroid, electrolytes), inflammatory (pericarditis, myocarditis, infection), or drugs (theophylline, sympathomimetics). Rapid ventricular rate → hemodynamic compromise (palpitations, dyspnea, syncope, HF). Thromboemboli risk: CHA₂DS₂-VASc score predicts stroke (≥2 → anticoagulation).

> 🎓 **Professor's Note**: Paroxysmal AF (self-terminating) has same stroke risk as persistent; anticoagulate if CHA₂DS₂-VASc ≥2 regardless of AF pattern.

**Atrial Flutter**: Regular rhythm at 150 bpm (atypical: 100-250). Saw-tooth baseline flutter waves. Usually 2:1 AV conduction. Treatment: rate control or rhythm control.

**PSVT**: Most common is atrioventricular reentrant tachycardia (AVNRT) or AVRT. Presents with sudden-onset tachycardia (150-250 bpm), chest discomfort, dyspnea. ECG: narrow QRS (unless aberrant conduction).

## Ventricular Arrhythmias

**Premature Ventricular Contractions (PVCs)**: Isolated PVCs are benign; frequent (>30/min) or complex (couplets, triplets, runs) require evaluation for structural disease. Multifocal PVCs increase risk of sudden death post-MI.

**Ventricular Tachycardia (VT)**: Sustained VT (>30 seconds or hemodynamically unstable) is life-threatening. Causes: post-MI scar (re-entrant), dilated cardiomyopathy, channelopathies (Long QT, Brugada), catecholaminergic. Pulseless VT → cardiac arrest → ACLS.

**Ventricular Fibrillation (VF)**: Chaotic rhythm, no cardiac output; immediate defibrillation ± ACLS.

> 💡 **Memory Trick**: Torsades de Pointes—"twisting of the points," polymorphic VT in Long QT; triggered by catecholamines, hypokalemia, hypomagnesemia, drugs (antiarrhythmics, antipsychotics).

## Bradyarrhythmias

**Sinus Bradycardia**: HR <60 bpm. Physiologic (athletes) or pathologic (sick sinus syndrome, AV nodal disease, hypothyroidism, increased ICP, medication—beta-blockers, digoxin, verapamil). Symptoms (presyncope, syncope, fatigue) trigger pacemaker insertion.

**Heart Block**: First-degree (PR >200 ms, asymptomatic). Second-degree: Type I (PR prolongation then dropped beat, Wenckebach) vs. Type II (sudden PR dropped beat, often 2:1 conduction, at His level or infra-His). Third-degree (complete block): P waves and QRS dissociated; narrow QRS indicates junctional escape (rate 40-60), wide QRS indicates ventricular escape (rate 20-40, hemodynamically unstable → pacemaker).

> ⚡ **Exam Alert**: Inferior STEMI often causes transient second-degree Type I block (AV nodal ischemia) → usually resolves. Anterior STEMI causing infra-His block → permanent; requires pacemaker.

## Diagnosis & Management

**ECG**: 12-lead at rest, Holter (24-48h), event monitor (7-30 days), treadmill (exercise-induced). Electrophysiology study (EPS) for diagnostic uncertainty or ablation planning.

**AF/Flutter**: Rate control (beta-blockers, calcium-channel blockers, digoxin); rhythm control (flecainide, sotalol, amiodarone) or ablation (PVI for paroxysmal, cavotricuspid isthmus ablation for flutter). Anticoagulation (warfarin INR 2-3, or DOAC—dabigatran, rivaroxaban, apixaban—if CHA₂DS₂-VASc ≥2 or female with ≥1 risk factor).

**PSVT**: Vagal maneuvers (Valsalva, carotid massage), adenosine IV, beta-blockers, ablation.

**VT**: Amiodarone, defibrillator, ICD (primary prevention if EF ≤35%, secondary if sustained VT/VF survived).

> 🏥 **Clinical Pearl**: In India, rheumatic AF is common; combine rhythm control with anticoagulation and valve consideration. Postoperative AF after cardiac surgery is frequent; prophylactic beta-blockers reduce incidence.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapters 233-238.
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-01-TOP-06",
    contentMd: `# Infective Endocarditis

Infective endocarditis (IE) is inflammation of the endocardium, typically the heart valves, caused by bacteremia. Incidence in India is 5-15 per million annually, with significant variation by healthcare access and RHD prevalence. Mortality remains 15-30% despite antibiotics.

## Risk Factors & Pathophysiology

Predisposing conditions: structural heart disease (RHD 50-60%, VSD, PDA, coarctation), prosthetic valves, degenerative valve disease, IVDU. Bacteremia sources: dental procedures, poor dental hygiene, skin/soft tissue infection, genitourinary instrumentation, GI endoscopy.

Pathophysiology: bacteremia seeds valve endothelium (abnormal flow creates turbulence), bacteria adhere (tissue factor, fibrin, platelets), microcolonies form encased in vegetations (fibrin + WBC + bacteria). Valve destruction, perforation, cusp rupture result. Septic emboli lodge in organs (brain, kidney, spleen, lung).

## Causative Organisms

**Streptococci** (60%): viridans (alpha-hemolytic, oral flora), S. aureus (beta-hemolytic, IVDU/skin source, acute course), S. bovis (GI source, associated with colon cancer). **Enterococci**: genitourinary source, often resistant. **HACEK organisms**: gram-negative fastidious bacteria (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella). **Culture-negative IE** (5-10%): Bartonella, Coxiella, Legionella, fungi.

> 🎓 **Professor's Note**: In tropical India, consider fungal endocarditis (Aspergillus, Histoplasma) and mycobacterial IE in immunocompromised patients. TB-associated IE is emerging.

## Clinical Features

Subacute presentation (weeks): low-grade fever, fatigue, malaise, arthralgias. Acute presentation (days): high fever, septic picture, hemodynamic collapse.

**Cardiac findings**: New or changing murmur (vegetations distort valves; aortic regurgitation from VSD/cusp perforation). **Embolic phenomena**: splinter hemorrhages (nailbed), Osler nodes (painful nodules, fingertips), Janeway lesions (painless erythematous macules, palms/soles), petechiae, conjunctival hemorrhages. **Immune phenomena**: Roth spots (retinal hemorrhages with white center), glomerulonephritis (hematuria, RBC casts), splenomegaly.

Complications: HF (acute AR from vegetation or perforation), abscess/fistula formation, septic emboli to brain (stroke, brain abscess), septic shock.

> 💡 **Memory Trick**: Duke criteria major points: blood culture positive + echocardiographic evidence of vegetation/abscess/prosthetic dehiscence; minor points include fever, vascular phenomena, immunologic phenomena, ECG conduction defects.

## Diagnosis

**Blood cultures**: 2-3 sets before antibiotics; sensitivity 90% if not pretreated. **ECG**: AV block suggests abscess formation. **TTE** (transthoracic echo): sensitivity 60%, visualizes vegetations, valve destruction, pericardial effusion. **TEE** (transesophageal): sensitivity 90%, superior for prosthetic valve IE, small vegetations, abscesses.

**Duke Criteria**: ≥2 major or 1 major + 3 minor or 5 minor = definite IE; 1 major + 1 minor or 3 minor = possible IE.

> ⚡ **Exam Alert**: Culture-negative IE occurs in ~10%; consider prior antibiotics, fastidious organisms, fungal IE. Serology (Q fever—Coxiella, Bartonella) or PCR (16S rRNA) may aid diagnosis.

## Management

**Empiric antibiotics** pending cultures: benzylpenicillin + gentamicin (or ceftriaxone if meningitis concern) for native valve, vancomycin for prosthetic valve or penicillin allergy. Duration: 4-6 weeks IV. **Monitored switch**: Culture results guide organism-specific therapy—penicillin for streptococci, nafcillin for S. aureus (avoid fluoroquinolones), combination therapy for enterococci.

**Surgical indications**: Prosthetic valve dysfunction, large vegetation (>10 mm, fungal), recurrent emboli despite antibiotics, annular abscess, acute severe AR/MR with HF, fistula formation.

**Prevention**: Antibiotic prophylaxis for high-risk patients (prosthetic valve, prior IE, complex cyanotic heart disease) undergoing dental procedures (amoxicillin 2g oral 1h before, or cephalexin/clindamycin if penicillin allergy). NOTE: prophylaxis not recommended for other procedures or low-risk conditions.

> 🏥 **Clinical Pearl**: In India, RHD-associated IE carries worse prognosis due to delayed diagnosis and advanced valve destruction at presentation. Community awareness of dental hygiene and prompt treatment of RHD reduces IE incidence.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapter 257.
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-02-TOP-01",
    contentMd: `# COPD & Emphysema

Chronic obstructive pulmonary disease (COPD) affects 30-60 million Indians; prevalence 4-6% in urban areas, higher in rural areas due to biomass exposure. COPD results from persistent airflow limitation caused by emphysema (alveolar destruction) and/or chronic bronchitis (chronic productive cough ≥3 months/year × 2 years).

## Pathophysiology

**Smoking** (primary cause in developed nations): oxidative stress, neutrophil infiltration, mucus hypersecretion, ciliary dysfunction. **Occupational/environmental exposure** (India): biomass fuels (wood, cow dung), air pollution, occupational dusts (silica, cotton). **Alpha-1 antitrypsin deficiency**: genetic (autosomal recessive), causes early-onset emphysema (age 30-40).

Mechanisms: inflammation → mucus plug formation, bacterial colonization → chronic airway infection. Emphysema: progressive alveolar destruction → loss of elastic recoil, airway collapse during expiration (air trapping), hyperinflation, increased work of breathing. Cor pulmonale: chronic hypoxia → pulmonary vasoconstriction → RV hypertrophy/failure.

> 🎓 **Professor's Note**: Classify COPD by GOLD: FEV₁/FVC <0.70 confirms airflow obstruction. Grade 1 (mild: FEV₁ ≥80%), Grade 2 (moderate: 50-79%), Grade 3 (severe: 30-49%), Grade 4 (very severe: <30%).

## Clinical Features

**Chronic bronchitis**: productive cough (copious sputum, morning predominance), dyspnea, wheezing. **Emphysema**: dyspnea (often with minimal cough), cachexia, pursed-lip breathing, pink puffing (pale, thin, hyperinflated—"pink puffer").

Exam findings: barrel chest, hyperresonance on percussion, diminished breath sounds, prolonged expiration, use of accessory muscles. Cyanosis indicates hypoxemia. Cor pulmonale: peripheral edema, hepatomegaly, elevated JVP.

Acute exacerbation: increased dyspnea, sputum volume/purulence, fever (if infection), hypoxemia, hypercapnia.

> 💡 **Memory Trick**: Type A (emphysematous/"Pink Puffer")—thin, dyspneic, normal O₂; Type B (bronchitic/"Blue Bloater")—obese, cyanotic, cor pulmonale. Most patients are overlap.

## Diagnosis

**Spirometry**: FEV₁/FVC <0.70 confirms obstruction; FEV₁ reversibility <12% post-bronchodilator (distinguishes from asthma, which improves >12%). **Chest X-ray**: hyperinflation (increased AP diameter, flattened diaphragm), vascular pruning in emphysema, bronchial thickening (bronchitic pattern). **CT HRCT**: mosaic perfusion, bronchial wall thickening, emphysematous destruction pattern.

**ABG**: normal initially; chronic hypoxemia (PaO₂ <80 mmHg), hypercapnia (PaCO₂ >45 mmHg) in advanced disease. **Pulse oximetry**: O₂ sat ≥92% baseline; target 88-92% to avoid CO₂ retention.

> ⚡ **Exam Alert**: FEV₁ is the best single predictor of mortality; BODE index (Body mass, Obstruction, Dyspnea, Exercise capacity) improves prognostic accuracy.

## Management

**Smoking cessation** (only intervention slowing FEV₁ decline). **Pharmacotherapy**: short-acting bronchodilators (albuterol, ipratropium) for symptom relief; long-acting (tiotropium, salmeterol-fluticasone, umeclidinium) for maintenance. **Inhaled corticosteroids** (fluticasone, budesonide) if frequent exacerbations; not monotherapy (increased pneumonia risk).

**Exacerbation management**: oxygen to target SpO₂ 88-92%, antibiotics if bacterial infection (purulent sputum, fever, elevated WBC), systemic corticosteroids (prednisone 40mg daily × 5 days), bronchodilators, respiratory support (non-invasive ventilation if hypercapnic respiratory failure).

**Rehabilitation**: pulmonary rehabilitation improves dyspnea, exercise capacity, QoL. **Vaccines**: influenza annually, pneumococcal (PPSV23 + PCV13), pertussis. **O₂ therapy**: continuous if PaO₂ <55 mmHg or 55-59 mmHg with cor pulmonale/polycythemia; improves survival.

**Lung volume reduction surgery**: selected emphysema patients (upper lobe destruction, low exercise capacity).

> 🏥 **Clinical Pearl**: India's biomass exposure—particularly in women using indoor traditional stoves—is an underappreciated COPD driver. "Smoker's paradox": some smokers develop minimal airflow obstruction (genetic protection); others develop severe COPD despite modest exposure.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapter 257; GOLD COPD report.
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-02-TOP-02",
    contentMd: `# Bronchial Asthma

Asthma affects 20-30 million Indians, with increasing prevalence particularly in urban children. It is a heterogeneous syndrome characterized by reversible airflow obstruction, airway inflammation, and bronchial hyperresponsiveness.

## Pathophysiology & Endotypes

**Allergic asthma** (extrinsic, 80% of cases): environmental allergens (pollen, dust mites, pet dander, fungi) trigger IgE-mediated degranulation of mast cells in airways → type 2 inflammation (IL-4, IL-5, IL-13), eosinophil recruitment, mucus production, smooth muscle contraction.

**Non-allergic asthma** (intrinsic, 20%): virus infection, aspirin/NSAIDs, cold air, exercise, occupational exposure (latex, isocyanates), gestational factors.

**Asthma phenotypes**: atopic/allergic, non-allergic, occupational, aspirin-exacerbated respiratory disease (AERD), exercise-induced bronchoconstriction. **Eosinophilic asthma**: high sputum/blood eosinophils; type 2 inflammation. **Type 2-low asthma**: neutrophilic or paucigranulocytic (steroid-resistant).

Airway remodeling (chronic asthma): smooth muscle hypertrophy, collagen deposition in subepithelial layer, mucus gland proliferation.

> 🎓 **Professor's Note**: Asthma-COPD overlap (ACO): fixed airflow obstruction + reversible component; both smoking and allergic history. Prevalence 15-20% in COPD patients; poorer outcomes than either alone.

## Clinical Features

**Acute exacerbation**: dyspnea (often nocturnal), wheezing (may be silent if severe), chest tightness, cough (especially at night, with play/cold). Peak flow decreases. Severe: stridor, accessory muscle use, inability to speak, cyanosis, altered mental status → life-threatening.

**Exam findings**: wheezing (polyphonic), prolonged expiration, decreased air movement in severe cases. Peak expiratory flow (PEF) reduced.

Triggers vary: allergens, infections (RSV, influenza, parainfluenza), exercise, cold air, emotional stress, occupational exposure.

> 💡 **Memory Trick**: GINA classification—Step 1: intermittent SABA; Step 2: low-dose ICS; Step 3: low-dose ICS-LABA; Step 4: medium-high ICS-LABA; Step 5: add biologics/oral corticosteroids.

## Diagnosis

**Spirometry**: FEV₁/FVC <0.70 (if obstruction); reversibility: FEV₁ increase ≥12% and ≥200 mL post-bronchodilator = asthma. **Methacholine challenge**: increased responsiveness (PC20 <16 mg/mL) supports asthma if spirometry normal. **Chest X-ray**: hyperinflation in acute exacerbation, rules out pneumonia. **Peak flow monitoring**: variability >20% diagnostic. **Eosinophil count**: elevated in allergic asthma, guides biologic therapy.

> ⚡ **Exam Alert**: Absence of wheezing in acute asthma exacerbation indicates severe airflow limitation ("silent chest")—treat aggressively as imminent respiratory failure.

## Severity & Control Classification

**Intermittent vs. persistent** (mild, moderate, severe) asthma. **Controlled vs. uncontrolled** (ACT score ≤19 = uncontrolled; daytime symptoms ≤2 days/week, nighttime awakenings ≤2x/month = controlled).

## Acute Exacerbation Management

**Mild-moderate**: SABA (albuterol 2-4 puffs q20min × 1h) ± systemic corticosteroids (prednisone 40-60 mg), oxygen to SpO₂ ≥90%, reassess. **Severe/life-threatening**: continuous SABA, ipratropium, IV magnesium sulfate, systemic corticosteroids, oxygen, consider IV epinephrine, non-invasive ventilation, ICU admission. Avoid triggers (NSAIDs, beta-blockers).

## Chronic Management

**Maintenance therapy**: inhaled corticosteroids (ICS) foundation therapy—fluticasone, budesonide (reduces exacerbations, mortality). **LABA** (salmeterol, formoterol): never as monotherapy (increased mortality). **ICS-LABA combinations**: fluticasone-salmeterol, budesonide-formoterol (superior to separate inhalers). **LTRA** (montelukast, zafirlukast): alternative to low-dose ICS or add-on for asthma/rhinitis overlap.

**Biologic agents** (type 2-high asthma): anti-IgE (omalizumab) for allergic asthma, anti-IL-5 (mepolizumab, reslizumab) for eosinophilic, anti-IL-4R (dupilumab) for atopic.

**Non-pharmacologic**: allergen avoidance, weight loss, exercise, smoking cessation (including secondhand), immunotherapy (SCIT/SLIT) for allergic asthma.

> 🏥 **Clinical Pearl**: In India, asthma-tuberculosis coinfection occurs; active TB screening and separation of TB patients prevents exacerbations in asthmatic cohorts. Humidity and indoor air quality improvement reduces tropical mold-related asthma.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapter 257; GINA guidelines.
`,
    estimatedMinutes: 10,
  },
  {
    topicCode: "IM-MOD-02-TOP-03",
    contentMd: `# Pneumonia

Community-acquired pneumonia (CAP) is the leading cause of infection-related mortality in India, accounting for 1.4 million deaths annually. It is characterized by acute lower respiratory tract infection with consolidation on imaging.

## Etiology & Epidemiology

**Typical pathogens**: Streptococcus pneumoniae (most common, 30%), Haemophilus influenzae, Moraxella, Staphylococcus aureus (healthcare-associated, MRSA). **Atypical**: Mycoplasma, Chlamydia, Legionella. **Viral**: influenza, parainfluenza, RSV, COVID-19. **Fungal/TB**: histoplasmosis, coccidioidomycosis (regional), pulmonary TB (India-endemic).

Risk factors: age >65, COPD, diabetes, immunosuppression, smoking, aspiration risk (dysphagia, alcohol use), previous pneumonia.

> 🎓 **Professor's Note**: **HAP** (hospital-acquired): onset >48h after hospitalization; gram-negative rods (Pseudomonas, Acinetobacter), S. aureus more common. **VAP** (ventilator-associated): risk in ICU; similar organisms as HAP. **HCAP** (healthcare-associated): antibiotic exposure, recent hospitalization, long-term care facility.

## Pathophysiology & Pathogenesis

Bacterial aspiration from oropharynx → colonization → invasion of lower airways → alveolar inflammation (consolidation), exudation, impaired gas exchange. Bacterial virulence factors: adhesins, toxins (pneumolysin—S. pneumoniae), evasion of immune response. Immune response: PMN infiltration, macrophage activation, cytokine release. Resolving phase: organized pneumonia, fibroblasts proliferate, consolidation clears.

## Clinical Features

**Prodrome**: upper respiratory symptoms (cough, rhinorrhea), malaise. **Acute onset**: fever, productive cough (purulent/rusty sputum), dyspnea, pleuritic chest pain. **Severe**: hypoxemia, altered mental status (confusion, delirium), sepsis.

Exam: fever, tachypnea, tachycardia, hypoxemia. Focal crackles, bronchial breath sounds over consolidated lung; percussion dullness; egophony (E→A), pectoriloquy.

**CURB-65 score** predicts mortality: Confusion, Urea >7, Respiratory rate ≥30, BP SBP ≤90/DBP ≤60, age >65 (each = 1 point). 0-1 = low risk (outpatient), 2 = intermediate (consider admission), 3-5 = high risk (ICU).

> 💡 **Memory Trick**: "Rusty sputum"—classic for pneumococcal pneumonia; purulent/green—more typical H. influenzae/gram-negatives; scanty—atypical (Mycoplasma).

## Diagnosis

**Chest X-ray**: consolidation (alveolar filling—air bronchograms), atypical pattern (bronchial wall thickening—mycoplasma, viral), cavitation (TB, staph with abscess). **CT**: better sensitivity for infiltrates, abscess, effusion, complications. **CBC**: leukocytosis (typical) or leukopenia (poor prognosis—overwhelmed immune). **Metabolic panel**: hyponatremia (SIADH—atypical pathogens), renal dysfunction.

**Sputum culture & Gram stain**: organisms, antibiotic sensitivities (obtain before antibiotics). **Blood culture**: positive in 15-20% (guides therapy, indicates bacteremia/sepsis). **Respiratory pathogen PCR**: multiplex panel for viral/atypical (Mycoplasma, Chlamydia, Legionella); increasingly used. **Procalcitonin**: elevated in bacterial pneumonia, guides antibiotic de-escalation.

> ⚡ **Exam Alert**: Non-responsive pneumonia (persistent fever, infiltrates after 48-72h antibiotics) suggests inadequate coverage, resistant organism, abscess, empyema, or non-infectious diagnosis (malignancy, PE, drug reaction).

## Management by CAP Severity

**Outpatient (CURB-65 0-1)**: Amoxicillin or doxycycline (if penicillin allergy) × 5-7 days. Fluoroquinolone (levofloxacin, moxifloxacin) if atypical coverage needed. **Hospitalized (CURB-65 2)**: Ceftriaxone ± azithromycin (covers atypical) OR fluoroquinolone. **Severe/ICU (CURB-65 3-5)**: Ceftriaxone (or cefotaxime) + vancomycin (MRSA coverage) ± fluoroquinolone. Add antifungal (amphotericin B, fluconazole) if immunocompromised.

**Supportive**: oxygen to SpO₂ ≥90%, IV fluids, analgesia. Monitor response (defervescence by 48-72h). Switch IV→oral when tolerating PO, improving clinically (step-down therapy). Duration: typically 5-7 days (mild-moderate), 7-14 days (severe).

**Complications**: bacteremia, sepsis, hypoxemic respiratory failure (mechanical ventilation), abscess, empyema (chest tube/drainage), myocarditis, DIC.

> 🏥 **Clinical Pearl**: India's TB prevalence makes tuberculosis a frequent mimicker; always obtain sputum AFB, TB-LAMP, or GeneXpert MTB/RIF in CAP workup, especially in endemic areas or with risk factors. Fungal pneumonia (histoplasmosis endemic in some regions) can present as CAP.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapter 256; Indian CAP guidelines.
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-02-TOP-04",
    contentMd: `# Pulmonary Tuberculosis

Pulmonary tuberculosis (TB) remains a leading infectious cause of mortality in India, with 2.7 million new cases annually (highest global burden). TB is caused by Mycobacterium tuberculosis and is spread via airborne droplet nuclei.

## Epidemiology & Risk Factors

India accounts for 27% of global TB burden. Transmission: close/prolonged contact with untreated TB case, particularly in crowded settings (prisons, homeless shelters, healthcare facilities). Risk factors: HIV/AIDS, immunosuppression, malnutrition, COPD, diabetes, smoking, alcohol. Latent TB infection (LTBI) affects 1 billion globally; ~10% progress to active TB over lifetime.

## Pathophysiology

Inhalation of droplet nuclei (1-5 µm) → lodge in terminal alveoli → initial infection triggers granuloma formation (epithelioid macrophages, Langhans giant cells, lymphocytes). **Ghon focus**: initial parenchymal infiltrate. **Ghon complex**: Ghon focus + caseous hilar lymphadenitis + lymphangitis. Primary TB (usually self-limited in immunocompetent): 90% LTBI. Reactivation TB: post-primary TB in apical-posterior segments (high PO₂ favors M. tuberculosis).

Caseous necrosis → cavity formation (walls lined by epithelioid cells) → infectious bacilli shed in sputum.

> 🎓 **Professor's Note**: TB-HIV coinfection: CD4 <200 → atypical presentation (minimal cavitation, diffuse infiltrates, mediastinal adenopathy); high mortality if TB not treated with ART simultaneously.

## Clinical Features

**Insidious onset**: low-grade fever (afternoon/evening), night sweats (drenching, soaking clothes), weight loss, fatigue, malaise × weeks to months. **Respiratory**: chronic cough (>3 weeks, initially dry, then productive), hemoptysis (from erosion into pulmonary artery—"Rasmussen's aneurysm"), chest pain (pleuritic if pleural involvement), dyspnea.

**Exam findings**: often minimal; possible crackles (apical or upper lobes), bronchial breath sounds if consolidation/cavity. Lymph node enlargement in TB lymphadenitis (especially hilar/mediastinal).

> 💡 **Memory Trick**: TB triad—fever (usually afternoon), night sweats, weight loss—mandates chest imaging + TB screening.

## Diagnosis

**Chest X-ray**: **Apical-posterior segment infiltration** (classic), cavitary lesion (wall irregular, air-fluid level), tree-in-bud opacities (endobronchial disease), pleural effusion, hilar lymphadenopathy. **CT HRCT**: better delineation of cavities, extent, complications.

**Sputum smear microscopy (AFB)**: Ziehl-Neelsen or auramine-rhodamine stain. Positive sputum (acid-fast bacilli visible) = **smear-positive TB** (highly infectious). **Culture**: gold standard; mycobacterial culture (Löwenstein-Jensen, MGIT) × 2-8 weeks; growth confirms TB + permits drug susceptibility testing (DST).

**Molecular tests**: **GeneXpert MTB/RIF** (WHO-endorsed, India's primary test)—PCR-based, rapid (2h), detects TB + rifampicin resistance; **TB-LAMP**, **CBNAAT**. **Tuberculin skin test (TST)**: induration ≥5 mm (if HIV+), ≥10 mm (immunocompetent) suggests TB infection (LTBI vs. active TB requires clinical correlation); false negative if immunocompromised.

**IGRA** (interferon-gamma release assay): QuantiFERON-TB Gold; detects TB-specific immunity; more specific than TST, unaffected by BCG vaccination.

> ⚡ **Exam Alert**: Smear-negative, culture-positive TB (lower bacillary load) is diagnosed by GeneXpert/culture and empiric treatment begun if clinical/radiologic suspicion high.

## Classification & Management

**Drug-susceptible TB**: 6-month DOTS (Directly Observed Therapy, Short-course)—**2HRZE / 4HR** (isoniazid, rifampicin, pyrazinamide, ethambutol × 2 months, then isoniazid + rifampicin × 4 months). Cure rate >85%.

**MDR-TB** (rifampicin + isoniazid resistant): **20-month regimen** per WHO (bedaquiline, linezolid, levofloxacin, moxifloxacin, pyrazinamide, ethionamide, para-aminosalicylic acid). **XDR-TB** (MDR + fluoroquinolone/injectable resistance): newer agents (bedaquiline, linezolid, delamanid, moxifloxacin).

**DOTS adherence**: India's National TB Elimination Program (NTEP) provides free drugs; ASHA (health worker) supervises every dose to ensure completion, prevent relapse/resistance. Nutritional support (protein, micronutrients) improves outcomes.

**Monitoring**: sputum conversion (smear/culture negative) typically by 2 weeks; CXR improvement by 2-4 months. Adverse effects: isoniazid (peripheral neuropathy—give pyridoxine), rifampicin (enzyme inducer, orange urine), pyrazinamide (gout, hyperuricemia), ethambutol (optic neuritis—color blindness). Hepatotoxicity monitoring (LFTs baseline, if abnormal symptoms).

**LTBI treatment** (if TB contacts, immunocompromised, recent TST conversion): isoniazid 9 months OR rifampicin 4 months.

> 🏥 **Clinical Pearl**: TB-diabetes is emerging as major comorbidity in India; bidirectional screening (TB patients screened for diabetes, diabetics for TB) improves outcomes. Drug interactions (rifampicin reduces oral contraceptive efficacy, antiretrovirals) must be managed.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapter 217; India's TB Guidelines (NTEP, WHO).
`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-02-TOP-05",
    contentMd: `# Pleural Effusion & Pneumothorax

Pleural effusion (fluid accumulation between visceral and parietal pleura) is common, with 1 million cases annually in India. Pneumothorax (air in pleural space) causes partial lung collapse; prevalence 16-20 per 100,000.

## Pleural Effusion: Etiology & Pathophysiology

**Transudates** (ultrafiltrate; protein <30 g/L, LDH <200 IU/L): HF (most common, 40%), cirrhosis, nephrotic syndrome, hypoalbuminemia. **Exudates** (inflammatory/malignant fluid; protein >30 g/L, LDH >200, protein ratio >0.5): infection (parapneumonic, empyema, TB, fungal), malignancy (lung cancer, metastatic, mesothelioma), PE, pancreatitis, rheumatologic (SLE, RA, dressler syndrome post-MI).

**Hemothorax**: blood (trauma, anticoagulation). **Chylothorax**: lymphatic fluid (lymph protein, triglyceride >110 mg/dL; malignancy, post-cardiac surgery, lymphatic obstruction).

Pathophysiology: increased capillary hydrostatic pressure (HF) → ultrafiltration; increased capillary permeability (inflammation/malignancy) or lymphatic obstruction → exudate.

> 🎓 **Professor's Note**: **Light's criteria** to differentiate transudate vs. exudate—pleural/serum protein ratio >0.5, pleural/serum LDH ratio >0.6, pleural LDH >200 IU/L (≥2 = exudate). 10% false positive.

## Clinical Features

**Small effusion** (<1 cm on decubitus film): often asymptomatic. **Larger effusion**: dyspnea, pleuritic chest pain (if inflammatory), cough, orthopnea.

Exam: decreased breath sounds, dullness to percussion (fluid), egophony above effusion (consolidated lung above). Pulses paradoxus (large effusion compressing heart).

**Complicated parapneumonia/empyema**: fever, sepsis, loculation, lung abscess.

## Diagnosis

**Chest X-ray**: blunting of costophrenic angle (>250 mL needed for visualization), homogeneous opacity with curved superior border (meniscus sign). **Lateral decubitus film**: layering effect if free fluid (mobile); loculated if loculation present. **CT**: better delineation, loculation, underlying lung pathology.

**Ultrasound**: sensitive for small effusions, guides thoracentesis. **Thoracentesis**: diagnostic (cell count, glucose, protein, LDH, triglyceride, cytology, bacterial culture, AFB/TB-LAMP, Gram stain) and therapeutic if large/dyspneic.

> 💡 **Memory Trick**: Exudate features—high LDH, high protein, positive cultures, glucose <60 (empyema/esophageal rupture), cholesterol crystals, eosinophilia.

**Pleural fluid analysis**: PMN predominance (acute bacterial, early TB); lymphocytic (TB—>50%, malignancy, viral); hemorrhagic (malignancy, trauma, PE, coagulopathy); turbid/purulent (empyema).

> ⚡ **Exam Alert**: Glucose <60 mg/dL in pleural fluid → empyema or esophageal rupture (gram-negative, anaerobes); rheumatoid factor low in RA pleuritis.

## Management: Transudates

Treat underlying cause: diuretics + sodium restriction for HF, paracentesis for cirrhosis, corticosteroids for nephrotic syndrome. Pleural effusion usually reabsorbs once cardiac/renal function improves.

## Management: Exudates

**Parapneumonic/empyema**: antibiotics (duration per pneumonia management). **Uncomplicated parapneumonic** (low-risk: pH >7.0, glucose >40, negative culture): antibiotics alone. **Complicated parapneumonic** (intermediate-risk: pH 7.0-7.2, glucose 40-60, low LDH): antibiotics ± drainage if loculated. **Empyema** (high-risk: pH <7.0, glucose <40, positive culture, gram-negative rods): antibiotics + drainage (catheter tube thoracostomy or VATS—video-assisted thoracoscopic surgery). Fibrinolytic agents (tissue plasminogen activator) or surgical decortication for loculated collections.

**Malignant effusion**: pleurodesis (talc, doxycycline, bleomycin—chemical irritant causing adhesion of visceral/parietal pleura) if recurrent, symptomatic; tunneled pleural catheter for palliation. Chemotherapy if chemosensitive tumor.

**TB pleuritis**: antituberculous therapy (same 6-month regimen); effusion reabsorbs over months. Corticosteroids (prednisone/prednisolone) may hasten resolution in acute symptomatic TB pleuritis.

**PE-related effusion**: usually small, unilateral, right-sided; anticoagulation.

## Pneumothorax

**Spontaneous primary**: young, tall males (smoking); rupture of apical bleb. **Secondary**: COPD, asthma, CF, TB cavitary disease, malignancy (lymphangitic), PCP (immunocompromised), connective tissue disease (Marfan, EDS).

**Traumatic**: chest injury, mechanical ventilation (barotrauma), post-procedure (central line, lung biopsy).

Pathophysiology: air enters pleural space → loss of negative pressure → partial/complete lung collapse → decreased vital capacity, hypoxemia, impaired gas exchange.

> 🏥 **Clinical Pearl**: **Tension pneumothorax** (progressive air accumulation, mediastinal shift)—dyspnea, hypotension, tachycardia, asymmetric breath sounds, hypoxemia → **needle decompression** (14-16 gauge needle 2nd intercostal midclavicular) emergently, then chest tube.

## Diagnosis & Management

**Chest X-ray**: visceral pleural line, absent lung markings peripheral to line, mediastinal shift (tension). **CT**: sensitivity >90% for small pneumothorax.

**Asymptomatic small primary spontaneous pneumothorax** (<2 cm, no dyspnea): observation × 2-4 weeks (air reabsorption). **Symptomatic or large (>2 cm)**: aspiration or chest tube (pigtail catheter preferred if first episode; chest tube if failure or tension). **Persistent air leak or recurrence** (2nd ipsilateral or any contralateral): chemical pleurodesis or VATS pleurectomy.

**Secondary pneumothorax**: higher failure rate; consider earlier tube placement/pleurodesis. **Tension**: emergent needle decompression, then definitive management.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapter 259.
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-03-TOP-01",
    contentMd: `# GERD & Peptic Ulcer Disease

Gastroesophageal reflux disease (GERD) affects 20-40% of Indians; peptic ulcer disease (PUD) affects 5-10%. Both are chronic inflammatory conditions affecting mucosal integrity.

## GERD: Pathophysiology

Transient lower esophageal sphincter (LES) relaxation (most common, 60%), reduced LES pressure, or impaired gastric emptying allow gastric acid/pepsin reflux into esophagus. Esophageal mucosal injury depends on frequency, duration, pH of refluxate. Barrett's esophagus (metaplastic columnar epithelium replacing squamous) is premalignant; 0.2-0.5% annual progression to adenocarcinoma.

Risk factors: obesity (increased intra-abdominal pressure), smoking, alcohol, fatty foods, chocolate, mint (relax LES), NSAIDs, pregnancy, scleroderma, post-fundoplication.

> 🎓 **Professor's Note**: GERD in India is rising with urbanization; lifestyle (processed foods, stress, smoking) and H. pylori eradication (removes gastritis-mediated protection) are contributors.

## GERD: Clinical Features & Diagnosis

**Symptoms**: heartburn (retrosternal burning), regurgitation (acid taste), dysphagia, odynophagia (painful swallowing), voice hoarseness, chronic cough (aspiration), asthma exacerbation.

**Diagnosis**: clinical (typical GERD symptoms) often sufficient. **Upper endoscopy**: if alarm features (dysphagia, weight loss, anemia, melena) or treatment failure; visualizes erosive esophagitis, Barrett's, gastric malignancy. **pH-impedance monitoring**: confirms pathologic reflux if diagnosis uncertain. **Barium swallow**: rarely needed; shows hiatal hernia.

> 💡 **Memory Trick**: "ALARM" features—Anemia, Loss of weight, Alarm symptoms (dysphagia, vomiting), Recurrent/persistent symptoms despite PPI, Melena/hematemesis → endoscopy.

## GERD: Management

**Lifestyle**: weight loss (if BMI >25), avoid acidic/spicy foods, elevate head of bed 30°, cessation of smoking/alcohol, wait 3h post-meal before lying down.

**Pharmacotherapy**: **PPI** (omeprazole, esomeprazole, pantoprazole 20-40 mg daily) most effective; reduces acid secretion >90%; long-term use concerns (B12 deficiency, hypomagnesemia, fracture risk, Clostridium difficile—weigh risk/benefit). **H₂-receptor antagonist** (ranitidine, famotidine) less effective; useful if PPI intolerance. **Antacids** (calcium carbonate, magnesium hydroxide) provide short-lived relief.

**Surgical**: fundoplication (Nissen procedure) for medication-refractory GERD with confirmed pathologic reflux; endoscopic radiofrequency/injectable implants emerging.

## PUD: Pathophysiology

**H. pylori** (60-90% of ulcers): gram-negative bacterium colonizes antrum → chronic inflammation → achlorhydria (gastric cancer risk). Produces urease → ammonia → mucosal damage + immune response (Th1-dominant). **NSAIDs** (10-25% of ulcers): inhibit prostaglandins → loss of mucus/HCO₃⁻ protection, reduced mucosal blood flow. **Zollinger-Ellison syndrome** (<1%): gastrinoma → severe recurrent ulcers, chronic diarrhea.

Stress ulcers (post-surgery, sepsis, severe burn) from mucosal ischemia/acid back-diffusion.

## PUD: Clinical Features & Diagnosis

**Symptoms**: epigastric pain (burning, gnawing), relieved by antacids/food (gastric ulcer = pain during/after eating; duodenal ulcer = pain 2-3h after eating or nocturnal). **Complications**: perforation (acute severe periumbilical/right-sided pain, peritonitis, pneumoperitoneum on imaging), hemorrhage (melena, coffee-ground vomitus, anemia, hypotension).

**Diagnosis**: upper endoscopy (visualizes ulcer, location, H. pylori status via biopsy, malignancy exclusion—all gastric ulcers require biopsy to rule out malignancy). **H. pylori testing**: serology (IgG antibody, screening), stool antigen (diagnosis, post-treatment confirmation), urea breath test (13C-urea, confirmatory). Endoscopic biopsy (rapid urease test, histology, culture).

> ⚡ **Exam Alert**: Gastric ulcer biopsy always to exclude malignancy; duodenal ulcers rarely malignant (so biopsies reserved for atypical features).

## PUD: Management

**H. pylori eradication**: 14-day triple therapy—PPI (omeprazole 20 mg bd) + amoxicillin 1g bd + clarithromycin 500 mg bd OR quadruple therapy (PPI + bismuth + tetracycline + metronidazole × 10-14 days) if clarithromycin resistance suspected. Success rate >90% with good adherence. Confirm eradication (breath test, stool antigen ≥4 weeks post-treatment).

**NSAID-induced PUD**: discontinue NSAID; PPI × 4-8 weeks (duodenal) or 8-12 weeks (gastric). If NSAID continuation necessary, add PPI or switch to selective COX-2 inhibitor (celecoxib) + PPI.

**Complications—hemorrhage**: endoscopic hemostasis (cautery, clips, injection), blood transfusion, IV fluid resuscitation; surgery if unstoppable bleeding. **Perforation**: NPO, IV fluids, antibiotics (broad-spectrum), urgent surgery (patch ± vagotomy, though now rare post-PPI).

> 🏥 **Clinical Pearl**: India's H. pylori prevalence 40-50% (higher in low-income groups); "test-and-treat" strategy for uninvestigated dyspepsia recommended in primary care to reduce disease burden.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapter 285.
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-03-TOP-02",
    contentMd: `# Inflammatory Bowel Disease

Inflammatory bowel disease (IBD) comprises ulcerative colitis (UC) and Crohn's disease (CD), affecting 500,000-1 million Indians (rising incidence). Both are chronic relapsing-remitting inflammatory conditions.

## UC vs. CD: Pathophysiology

**UC**: mucosal inflammation limited to colon/rectum; continuous, diffuse distribution. Crypt abscess, goblet cell depletion, surface ulceration, pseudopolyps (regenerative islands). Microbiota dysbiosis + impaired barrier function + aberrant immune response (Th1/Th17 bias).

**CD**: transmural inflammation (all layers), anywhere GI tract (mouth to anus; terminal ileum favored). Skip lesions (discontinuous involvement), fissuring ulcers, cobblestone mucosa, fistulas, strictures. Altered innate immunity (NOD2 mutations), increased intestinal permeability.

Both: familial clustering (genetic), environmental triggers (smoking—protective in UC, harmful in CD; sanitation, diet), dysbiosis.

> 🎓 **Professor's Note**: India's IBD burden increasing with Westernization; younger age of onset (20-40) and higher CD proportion than Western cohorts in some Indian series.

## Clinical Features

**UC**: bloody diarrhea (mild: 4-5 stools, moderate: 5-6, severe: >6), tenesmus, urgency, abdominal cramping, fever/systemic symptoms. **Toxic megacolon** (severe): abdominal distention, absent bowel sounds, fever, leukocytosis—medical emergency.

**CD**: non-bloody diarrhea, abdominal pain (colicky, post-prandial), weight loss, fever. **Perianal disease**: fistulas, skin tags, abscesses. Extraintestinal manifestations: arthritis, uveitis, pyoderma gangrenosum, erythema nodosum, primary sclerosing cholangitis.

> 💡 **Memory Trick**: UC = **bloody** diarrhea + continuous colonic inflammation; CD = **non-bloody** diarrhea + transmural + skip lesions + fistulas.

## Diagnosis

**Colonoscopy + biopsy**: gold standard. UC shows continuous erythema/friability, crypt distortion. CD shows cobblestone, fissuring ulcers, skip lesions, aphthous ulcers. Ileal involvement diagnostic of CD.

**Inflammatory markers**: elevated CRP, ESR (CD > UC). **Fecal calprotectin**: >250 µg/g = intestinal inflammation; monitors disease activity.

**Imaging**: **Barium follow-through** (CD—string sign from stricture, fistulas, mesenteric fat stranding). **CT enterography** or **MR enterography** (superior; shows transmural inflammation, complications, extraintestinal manifestations).

> ⚡ **Exam Alert**: Severe colitis (>10 stools/day, fever, anemia, elevated CRP) is medical emergency; IV corticosteroids, cyclosporine/infliximab if steroid-refractory.

## Management: UC

**Induction (active disease)**: **5-ASA compounds** (mesalamine, sulfasalazine) per os ± enema/suppository (top-down therapy); **corticosteroids** (prednisone 40-60 mg tapering × 8-12 weeks) if moderate-severe. **Immunosuppressants** (azathioprine, 6-MP) reduce relapse. **Biologic agents** (TNF inhibitors—infliximab, adalimumab; anti-IL12/23—ustekinumab) for steroid-refractory/dependent disease.

**Maintenance**: 5-ASA (prevents relapse), azathioprine, biologics.

**Colectomy**: curative for medically refractory UC; indicated if toxic megacolon, perforation, or intractable symptoms. Subtotal colectomy with IPAA (ileal pouch-anal anastomosis) preserves continence.

## Management: CD

Similar anti-inflammatory induction (5-ASA, corticosteroids). **Exclusive enteral nutrition** (polymeric formula, nasogastric × 6-8 weeks) can induce remission in pediatric CD (less effective in adults).

**Fistulizing CD**: infliximab + azathioprine (closes fistulas in 40-60%). Surgical drainage/seton if abscess/sepsis.

**Stricturing CD**: endoscopic dilation (short strictures), sometimes need surgery if refractory.

**Maintenance**: azathioprine, TNF inhibitors.

## Complications & Monitoring

**Colitis-associated colorectal cancer** (UC/CD colonic involvement): lifetime risk 2-15%; colonoscopic surveillance every 1-2 years starting at 8-10 years of disease/8 years of age (higher risk if concurrent primary sclerosing cholangitis). **Osteoporosis**: from corticosteroid use + malabsorption; DEXA screening.

**Nutritional deficiency**: iron (bleeding), B₁₂ (terminal ileum disease), calcium/vitamin D, folate; supplement as needed. **Drug monitoring**: azathioprine (TPMT testing to reduce toxicity), thiopurine metabolites (adjust dose). **Infection screening**: TB (purified protein derivative, IGRA before TNF inhibitors), hepatitis B/C, syphilis, HIV.

> 🏥 **Clinical Pearl**: India's high TB prevalence mandates screening before biologics; TB reactivation risk 15-25% without prophylaxis. Drug interactions (sulfasalazine reduces folate) require management.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapter 297.
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-03-TOP-03",
    contentMd: `# Hepatitis & Cirrhosis

Hepatitis (inflammation of liver parenchyma) causes 2 million deaths annually in India; cirrhosis (end-stage fibrosis with portal hypertension) affects 10-15 million. Etiology: viral (HBV, HCV, HAV, HDV, HEV), alcohol, autoimmune, metabolic, drugs.

## Viral Hepatitis: Virology & Epidemiology

**Hepatitis A (HAV)**: fecal-oral, acute only (no chronic), recovered = immune. Prevalence 50-100% in India (mostly asymptomatic childhood infection). **B (HBV)**: blood/sexual, 5% become chronic (higher if infected age <5). India has 40-130 million chronic HBV. **C (HCV)**: blood (IVDU, transfusion, nosocomial), 70-80% become chronic. India 6-12 million HCV. **D (HDV)**: defective virus requiring HBV; blood/sexual. **E (HEV)**: fecal-oral, zoonotic (pigs, contaminated water), usually acute; 15-25% mortality in pregnant women in India.

> 🎓 **Professor's Note**: India is endemic for HBV and HCV; HEV from poor sanitation (cholera-like seasonality); HAV still common in unimmunized populations.

## Pathophysiology: Acute Hepatitis

Viral invasion of hepatocytes → replication → immune-mediated cytotoxicity (CD8+ T cells) + inflammation → hepatocyte necrosis, sinusoidal congestion, cholestasis. Fulminant hepatic failure (FHF): >80% hepatocyte loss → encephalopathy, coagulopathy, renal failure, cerebral edema.

## Clinical Features: Acute Hepatitis

**Prodrome** (1-2 weeks): malaise, anorexia, myalgias, headache. **Icteric phase**: jaundice (bilirubin >2.5), dark urine (conjugated), pale stools. **Exam**: hepatomegaly (tender), splenomegaly, lymphadenopathy.

Serum markers: ALT/AST >1000 IU/L, bilirubin elevated, PT/INR prolonged (synthetic dysfunction in FHF).

**FHF signs**: encephalopathy (grade I disorientation to grade IV coma), bleeding (GI hemorrhage), hypoglycemia, lactic acidosis, cerebral edema (osmotic agents—mannitol), renal failure (hepatorenal syndrome).

> 💡 **Memory Trick**: Icteric phase = peak aminotransferases, systemic symptoms improve as aminotransferases fall (immune clearance phase).

## Diagnosis

**Serology**: HAV (IgM anti-HAV = acute; IgG = immunity). **HBV**: HBsAg (active infection), HBcAb IgM (acute), HBeAg (high replication), HBeAb (lower replication), anti-HBs (immunity post-infection/vaccination). **HCV**: anti-HCV (exposure; confirm with HCV RNA PCR for active infection). **HDV**: anti-HDV (exposure); only if HBsAg+. **HEV**: anti-HEV IgM (acute).

**Imaging**: ultrasound for hepatic architecture, cirrhosis stigmata (coarse echotexture, nodular surface, splenomegaly, ascites, portal vein diameter).

> ⚡ **Exam Alert**: ALT/AST ratio <1 in viral hepatitis; ALT predominance in acute viral, AST predominance suggests cirrhosis/alcoholic liver disease.

## Chronic Hepatitis B & C

**HBV**: 90% clear acute infection; 5% become chronically infected (higher if younger at acquisition). Natural history: immune tolerance (high HBV DNA, normal ALT, minimal inflammation) → immune clearance (ALT flares, decreasing HBV DNA) → inactive carrier (HBsAg+, HBV DNA <2000 IU/mL, normal ALT) or cirrhosis.

**HCV**: 70% chronic after acute infection. Slow fibrosing (~20% develop cirrhosis in 20 years).

## Management: Acute Hepatitis

**Supportive**: rest, nutrition, acetaminophen avoided, alcohol prohibited. Most acute viral hepatitis self-limited; no specific antivirals for HAV, HEV. **HBV acute**: supportive; fulminant → ICU, transplant evaluation. **HCV acute**: spontaneous clearance 15-45%; early treatment (direct-acting antivirals—DAAs) improves clearance if needed.

**Immunization**: HAV (2 doses), HBV (3 doses, check anti-HBs after).

## Management: Chronic Hepatitis

**HBV**: **Nucleos(t)ide analogues** (entecavir, tenofovir) suppress HBV DNA, prevent progression to cirrhosis. **Interferon-alpha** (pegylated) induces HBeAg seroconversion but high side-effects. Treat if HBeAg+ with ALT >2x ULN or HBeAg- with ALT >2x ULN + HBV DNA >2000 IU/mL, OR cirrhosis (any HBV DNA level).

**HCV**: **Direct-acting antivirals** (sofosbuvir + daclatasvir, sofosbuvir + ledipasvir, glecaprevir/pibrentasvir) cure >95% of chronic HCV; 12-week treatment.

**Hepatitis D**: requires HBV suppression; limited DAA efficacy; interferon-alpha under investigation.

**Hepatitis E**: self-limited; supportive care; ribavirin if immunocompromised.

## Cirrhosis: Pathophysiology

Progressive fibrosis (myofibroblast activation) → bridging → nodule formation → portal hypertension (resistance to portal blood flow, increased sinusoidal pressure). Complications: ascites (splanchnic vasodilation + sodium retention), esophageal varices (collateral portal-systemic), hepatic encephalopathy (ammonia shunting), hepatorenal syndrome (renal failure despite normal renal parenchyma), spontaneous bacterial peritonitis, hepatocellular carcinoma.

## Cirrhosis: Clinical Features & Management

**Compensated**: asymptomatic, maintain synthetic function. **Decompensated**: ascites, variceal hemorrhage, encephalopathy, jaundice, coagulopathy.

**Ascites management**: sodium restriction (<2g/day), diuretics (spironolactone, furosemide), paracentesis if tense. **Variceal prophylaxis**: non-selective beta-blockers (propranolol, carvedilol) reduce variceal pressure, prevent first variceal bleed. **Variceal hemorrhage**: blood transfusion, antibiotics (ceftriaxone), octreotide (vasoconstrictive), endoscopic sclerotherapy ± ligation.

**Encephalopathy**: precipitant identification (infection, medication, constipation, bleeding), lactulose (osmotic laxative), rifaxomimin (nonabsorbed antibiotic), branched-chain amino acids. **HCC screening**: ultrasound ± alpha-fetoprotein every 6 months if cirrhosis.

**Transplant evaluation**: MELD score (model for end-stage liver disease); if MELD >15, consider transplant listing.

> 🏥 **Clinical Pearl**: India's cirrhosis burden from HBV, HCV, alcohol, and malnutrition; transplant availability limited; early antiviral therapy (HBV/HCV) prevents progression in many—population-level screening critical.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapters 289-294.
`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-03-TOP-04",
    contentMd: `# Jaundice & Acute Liver Failure

Jaundice (hyperbilirubinemia >2.5 mg/dL causing yellowing of skin/sclera) is classified by mechanism: **unconjugated** (impaired uptake/conjugation), **conjugated** (impaired excretion/cholestasis), **mixed**. Acute liver failure (ALF) is loss of synthetic function (INR >1.5) and encephalopathy within 26 weeks of illness onset, without prior liver disease.

## Unconjugated Hyperbilirubinemia

**Hemolysis**: increased RBC destruction → unconjugated bilirubin overload; indirect hyperbilirubinemia, elevated LDH, low haptoglobin, elevated reticulocyte count. **Gilbert syndrome**: benign familial unconjugated hyperbilirubinemia (mild, <6 mg/dL); autosomal recessive; reduced bilirubin UDP-glucuronosyl transferase (UGT1A1) activity. **Crigler-Najjar syndrome**: severe UGT1A1 deficiency; kernicterus risk.

## Conjugated Hyperbilirubinemia & Cholestasis

**Hepatic injury** (viral hepatitis, alcoholic hepatitis, drug-induced, pregnancy—gestational cholestasis): impaired conjugate excretion, bile duct inflammation/damage. Elevated ALT (hepatocellular) with elevated ALP/bilirubin (cholestasis component).

**Cholestasis without hepatic inflammation** (primary biliary cholangitis—PBC; primary sclerosing cholangitis—PSC; drug-induced, pregnancy cholestasis, sepsis): predominantly cholestatic pattern (ALP/GGT > ALT/AST).

> 🎓 **Professor's Note**: **PBC**: autoimmune destruction of intrahepatic bile ducts; anti-mitochondrial antibody (AMA). **PSC**: inflammation/fibrosis of extrahepatic/intrahepatic bile ducts; associated with IBD; increased cholangiocarcinoma risk.

## Biliary Obstruction (Obstructive Jaundice)

**Intrahepatic cholestasis**: pregnancy, drugs (anabolic steroids, contraceptives, TPN), sepsis, PBC/PSC.

**Extrahepatic cholestasis**: gallstones (choledocholithiasis—right upper quadrant pain, fever, Charcot's triad: fever, jaundice, RUQ pain), pancreatic cancer (painless jaundice), pancreatitis (biliary tree compression), biliary stricture.

Diagnostic approach: ultrasound (visualizes stones, duct dilation); MRCP (magnetic resonance cholangiopancreatography) or ERCP (endoscopic retrograde cholangiopancreatography—therapeutic if obstruction).

## Acute Liver Failure: Etiology & Pathophysiology

**Drug-induced** (30-40% in developed nations; acetaminophen most common): dose-dependent (toxic metabolite—NAPQI) or idiosyncratic (immune-mediated). **Viral** (50-60% in developing countries; HBV, HEV—India endemic; HCV rare in ALF): direct hepatocytotoxicity.

**Other**: autoimmune hepatitis, Wilson disease (young, hemolytic anemia, Kayser-Fleischer rings, low ceruloplasmin), Budd-Chiari syndrome (hepatic vein thrombosis—abrupt onset, ascites, hepatomegaly), sepsis, massive hepatic necrosis from any cause.

Pathophysiology: massive hepatocyte death → loss of synthetic function (coagulation factors), impaired detoxification (ammonia accumulation—encephalopathy), metabolic derangements (hypoglycemia, acidosis, hyperammonemia).

> 💡 **Memory Trick**: ALF triad—**encephalopathy + coagulopathy (INR >1.5) + hypoglycemia** = medical emergency requiring transplant evaluation.

## Clinical Features: ALF

**Prodrome**: nonspecific (malaise, jaundice, abdominal pain). **Fulminant phase**: altered mental status (disorientation → confusion → stupor → coma), bleeding (GI hemorrhage, coagulopathy), hypoglycemia, fever, hypotension, acute kidney injury, hypoxemia (pulmonary edema), cerebral edema (increased ICP → cerebral herniation).

**Exam**: hepatomegaly (early, may shrink as necrosis progresses—"shrinking liver"), splenomegaly, ascites, fever, jaundice, foetor hepaticus (characteristic musty breath), asterixis (flapping tremor).

> ⚡ **Exam Alert**: Hyperammonemia doesn't correlate with encephalopathy severity; encephalopathy reflects multiple toxins (manganese, false neurotransmitters, endotoxin) not just ammonia.

## Diagnosis

**Liver function tests**: markedly elevated transaminases (>1000 IU/L), elevated bilirubin, elevated ALP, profound prolonged PT/INR, low albumin (synthetic dysfunction).

**Serum ammonia**: elevated (>100 µmol/L); though prognostic, not diagnostic threshold.

**Imaging**: ultrasound (assess liver size, echotexture, exclude Budd-Chiari); CT (rule out malignancy, massive ascites/edema).

**Etiologic workup**: acetaminophen level (if ALF within 24h of ingestion), autoimmune (ANA, anti-smooth muscle antibody), viral serology (HAV IgM, HBsAg/IgM, HCV antibody, HEV IgM), ceruloplasmin (Wilson disease), prothrombin time/INR (synthetic function), lactate (tissue hypoxia marker).

## Management

**Supportive**: ICU setting. **Glucose**: maintain 100-150 mg/dL (avoid hypoglycemia—mortality risk). **Coagulopathy**: transfuse FFP only if active bleeding or invasive procedure (FFP increases fluid overload; vitamin K unlikely to help in ALF).

**Encephalopathy**: lactulose (osmotic laxative, reduce ammonia absorption), rifaxomimin (nonabsorbed antibiotic), avoid sedatives (mask encephalopathy progression), discontinue hepatotoxic drugs, optimize glucose/electrolytes. **Cerebral edema**: elevate head 30°, osmotic therapy (mannitol 1g/kg IV), maintain normothermia.

**Specific treatments**: acetaminophen ALF → **N-acetylcysteine** (loading 150 mg/kg, then 12.5 mg/kg/h × 4h, then 6.25 mg/kg/h continuous); improves survival if given early. **Autoimmune hepatitis** → corticosteroids if confirmed. **Herpes simplex virus (HSV) hepatitis** → acyclovir (empiric if high suspicion, immunocompromised).

**Transplant**: **King's College criteria** (encephalopathy grade III/IV + INR >6.5, OR any encephalopathy + INR >3.5 + age <10 or >40 + etiology drug/HELLP/unknown, OR acetaminophen toxicity + pH <7.3) indicate poor prognosis; transplant candidacy evaluation urgent.

> 🏥 **Clinical Pearl**: India's ALF burden from HEV (pregnant women, malnutrition) and HBV; transplant capacity extremely limited; supportive care and specific antiviral (for HBV/HEV if available) critical. N-acetylcysteine increasingly used empirically given safety profile.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapters 290-291.
`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-03-TOP-05",
    contentMd: `# Acute & Chronic Pancreatitis

Pancreatitis (inflammation of pancreatic parenchyma) has incidence 10-50 per 100,000 in India; etiologies vary by geography and socioeconomic status.

## Acute Pancreatitis: Etiology & Pathophysiology

**Gallstones** (50-60%): stone migration obstructs pancreatic duct → increased intraductal pressure, duct disruption, pancreatic duct reflux of bile. **Alcohol** (25-35%): toxic metabolite (acetaldehyde), oxidative stress, ductal plugging, premature zymogen activation. **Other** (15-20%): post-ERCP, hypertriglyceridemia, hypercalcemia, medications (sulfamethoxazole, pentamidine, azathioprine, corticosteroids, thiazides), trauma, scorpion venom (India-endemic), viral (mumps, coxsackievirus), autoimmune.

Pathophysiology: ductal obstruction or acinar cell injury → activation of trypsinogen to trypsin (within pancreas) → cascade of enzyme activation → autodigestion (lipase, amylase, phospholipase A₂ → fat necrosis, hemorrhage, edema).

> 🎓 **Professor's Note**: India's scorpion sting pancreatitis (Mesobuthus tamulus venom—neurogenic inflammation) is underrecognized; seasonal variation (monsoon). Also consider tropical pancreatitis (idiopathic, linked to malnutrition, cassava toxin in some regions).

## Clinical Features: Acute Pancreatitis

**Onset**: sudden epigastric/periumbilical pain radiating to back (characteristic), severe, constant. Associated: nausea, vomiting, abdominal distention. **Shock state**: hypotension, tachycardia, dehydration (third-space loss into pancreas/peritoneum).

**Exam**: epigastric tenderness (may have peritoneal signs if hemorrhagic), Cullen sign (periumbilical ecchymosis—severe), Grey Turner sign (flank ecchymosis—severe), fever, altered mental status (severe).

**Systemic complications** (severe pancreatitis): ARDS (respiratory failure), acute kidney injury, coagulopathy (DIC), multiorgan failure.

## Diagnosis: Acute Pancreatitis

**Serum lipase**: most sensitive (rises 4-8h, peaks 24-72h, detectable 8-14 days); elevation >3x upper normal = pancreatitis (if clinical picture fits). **Amylase**: less sensitive (normal in alcoholic, post-lipase normalization), but useful adjunct. **Ratios**: lipase/amylase >3 suggests alcoholic pancreatitis; lipase/amylase <2 suggests biliary pancreatitis.

**Imaging**: ultrasound (gallstones, duct dilation, pancreatic edema); CT (pancreatic necrosis, fluid collections, complications, Balthazar score grades severity). **MRCP**: if biliary cause suspected.

**Severity scoring**: **BISAP score** (BUN, INR, imbalanced glucose, age, pleural effusion) predicts mortality; CT severity index (extent necrosis + organ failure) grades complications.

> 💡 **Memory Trick**: Lipase specificity for pancreas >amylase (salivary glands, macrophages produce amylase, raising false positive).

> ⚡ **Exam Alert**: Hypertriglyceridemia (>1000-1500 mg/dL) causes lipemia pseudonormals in blood gas/chemistry; consider if hypertriglyceridemic pancreatitis suspected (lactescent serum).

## Management: Acute Pancreatitis

**Mild pancreatitis** (BISAP 0-1): NPO, IV fluids (aggressive hydration—LR preferred, target urine output 0.5-1 mL/kg/h), analgesia (opioids, avoid morphine if possible—increases sphincter of Oddi tone), monitor.

**Moderate-severe** (BISAP ≥2): ICU admission, aggressive fluid resuscitation (avoid overload—increases mortality), vasopressors if needed, prophylactic antibiotics controversial (not routinely; consider if necrosis >30% + signs of organ failure). **Feeding**: early enteral nutrition (NG tube or oral if tolerating) reduces infection, mortality vs. TPN.

**ERCP with sphincterotomy**: if biliary obstruction (elevated bilirubin, dilated CBD on imaging); within 72h of onset if cholangitis; within 24h if cholangitis/jaundice.

**Pancreatic necrosis** with infection: antibiotics (fluoroquinolone + metronidazole penetrate necrotic tissue), consider intervention (percutaneous drainage, necrosectomy) if sepsis/clinical deterioration despite antibiotics (preferably delayed >4 weeks).

**Hypertriglyceridemia-associated**: plasma exchange, insulin drip (activate lipoprotein lipase), fibrates.

## Chronic Pancreatitis: Etiology & Pathophysiology

**Alcohol** (60-70%): most common in Western/urban India; recurrent inflammation → chronic fibrosis, atrophy, ductal dilation, intraductal stone formation. **Tropical/idiopathic** (common in India, especially southern states): linked to malnutrition, cassava consumption, recurrent infections; appears in young patients without alcohol history. **Genetic** (CFTR, PRSS1 mutations—cystic fibrosis, hereditary pancreatitis, familial pancreatitis).

Pathophysiology: repeated injury → chronic inflammation → fibrosis → ductal stricture/stones → acinar atrophy → exocrine insufficiency (steatorrhea, malabsorption) and endocrine insufficiency (diabetes).

> 🎓 **Professor's Note**: Tropical pancreatitis often diagnosed late (fibrosis/atrophy on imaging); presents with diabetes + steatorrhea + pancreatic calcification; prognosis better than alcohol-related.

## Clinical Features: Chronic Pancreatitis

**Pain**: chronic epigastric pain (may improve with disease progression as gland atrophies), radiating to back, worse with fatty foods/alcohol. **Malabsorption**: steatorrhea (fatty, foul-smelling stools), weight loss, deficiency of fat-soluble vitamins (A, D, E, K), B₁₂ deficiency. **Diabetes**: hyperglycemia, often brittle (unstable glucose from loss of islet reserve).

**Complications**: pseudocyst (pancreatic duct disruption → fluid collection), splenic vein thrombosis (variceal bleeding), cholestasis (common bile duct stricture). **Pancreatic cancer** risk 4-fold increased (screening controversy).

## Diagnosis: Chronic Pancreatitis

**Imaging**: CT (pancreatic atrophy, fibrosis, calcification—Cambridge classification), MRCP (ductal dilation, stricture, stones). **Secretin stimulation test** (secretin → pancreatic secretion) quantifies exocrine function (gold standard but invasive, rarely used).

**Fecal elastase** (<200 µg/g = exocrine insufficiency); assess malabsorption. **Glucose tolerance** (diabetes screening).

## Management: Chronic Pancreatitis

**Pain**: narcotic analgesics (often needed chronically; addiction risk); pancreatic enzymes (replace exocrine loss); alcohol cessation absolutely critical. **Endocrine**: insulin if diabetes develops. **Exocrine insufficiency**: pancreatic enzyme replacement (lipase 25,000-40,000 units with meals); acid suppression (PPI) improves enzyme efficacy.

**Complications**: pseudocyst drainage (if symptomatic/infected); splenic vein thrombosis management (anticoagulation vs. observation); strict alcohol abstinence (only intervention slowing progression).

**ERCP**: if ductal obstruction/stones causing pain (stent placement, stone extraction).

**Surgical**: consider if refractory pain (lateral pancreaticojejunostomy—ductal decompression) or persistent obstruction.

> 🏥 **Clinical Pearl**: India's tropical pancreatitis—often younger patients, rural/low-income, late diagnosis; management focuses on pain control, endocrine/exocrine replacement, prevention of complications. Diabetes screening important in all chronic pancreatitis, especially tropical form (prevalence 15-40%).

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapters 299-300.
`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-04-TOP-01",
    contentMd: `# Acute Kidney Injury

Acute kidney injury (AKI) is abrupt loss of renal function (hours to days), characterized by rising serum creatinine/BUN and/or oliguria (urine output <0.5 mL/kg/h). Prevalence in hospitalized patients 10-20%; community-acquired 1-7%.

## Etiology: RIFLE Classification

**Prerenal** (55-60%): inadequate renal perfusion from decreased cardiac output (HF, sepsis, hemorrhage), hypovolemia (diarrhea, vomiting, diuretics), or vasodilation (NSAIDs, ACE inhibitors, hepatorenal syndrome). Rapidly reversible if perfusion restored.

**Intrinsic renal** (35-40%): **acute tubular necrosis (ATN)** most common—nephrotoxins (aminoglycosides, amphotericin B, contrast media, NSAIDs), rhabdomyolysis (muscle injury → myoglobin precipitation in renal tubules), sepsis-induced. **Glomerulonephritis** (ANCA vasculitis, post-infectious, lupus), **interstitial nephritis** (drug allergy—beta-lactams, NSAIDs, PPIs; infection; autoimmune), **vascular** (thrombotic microangiopathy, renal artery stenosis).

**Postrenal** (5-10%): obstruction below kidney—bilateral ureteral obstruction (stones, tumors, retroperitoneal fibrosis), single kidney obstruction, urinary retention (BPH, spinal cord injury). Reversible if obstruction relieved.

## RIFLE Classification & Staging

**Risk**: Cr 1.5x baseline. **Injury**: Cr 2x baseline. **Failure**: Cr 3x baseline OR Cr >4 mg/dL with acute rise >0.5. **Loss**: Persistent AKI >4 weeks. **End-stage**: ESRD >3 months.

Modern KDIGO classification adds urine output criteria: Stage 1 (Cr 1.5-1.9x, UOP <0.5 mL/kg/h × 6-12h), Stage 2 (Cr 2-2.9x, UOP <0.5 mL/kg/h × 12-24h), Stage 3 (Cr ≥3x or ≥4 mg/dL, UOP <0.3 mL/kg/h × 24h or anuria ≥12h).

## Pathophysiology & Diagnosis

**Prerenal**: reversible, characterized by low urine sodium (<20 mEq/L), high urine osmolality (>500 mOsm/kg), low **FeNa** (fractional excretion of sodium <1%), elevated BUN/Cr ratio (>20).

**ATN**: FeNa >2%, muddy brown casts, epithelial casts in urine (pathognomonic). Rhabdomyolysis: elevated CK (often >5000 IU/L), cola-colored urine (myoglobinuria), elevated potassium (hyperkalemia risk), phosphate/urate elevation.

**Postrenal**: hydronephrosis on imaging, elevated creatinine post-void residual >100 mL (retention).

> 🎓 **Professor's Note**: FeNa = (urine Na × serum Cr) / (serum Na × urine Cr); valuable in oliguria to distinguish prerenal (FeNa <1%) from intrinsic renal (FeNa >2%). Unreliable if concurrent diuretics.

## Clinical Features & Complications

Oliguria vs. non-oliguric AKI. **Hyperkalemia** (peaked T waves, QRS widening, cardiac arrhythmias, cardiac arrest if >6.5); emergency treatment. **Metabolic acidosis** (anion gap); respiratory compensation (Kussmaul breathing if severe). **Pulmonary edema** (fluid overload), **uremia** (nausea, pericarditis, encephalopathy), **hyponatremia** (dilutional if oliguric + fluids given), **hypocalcemia** with hyperphosphatemia (precipitation in tissues).

> 💡 **Memory Trick**: **Hyperkalemia ECG changes**—peaked T, widened QRS, lost P, "sine wave"—progress to cardiac arrest.

## Management

**Fluid status assessment**: physical exam (JVP, edema, lung crackles), daily weights. **Prerenal AKI**: IV fluid bolus (0.5-1L crystalloid over 15-30 min); reassess after. Hold diuretics, NSAIDs. Discontinue/reduce ACE-I if symptomatic hypotension.

**ATN/intrinsic**: avoid nephrotoxins; if rhabdomyolysis—aggressive hydration (target urine output >200 mL/h to prevent myoglobin precipitation), sodium bicarbonate (alkalinize urine), allopurinol. Monitor glucose, phosphate, calcium.

**Hyperkalemia**: **immediate** (if ECG changes): calcium gluconate 10% IV (stabilizes cardiac membrane), insulin + glucose IV (shifts K into cells), beta-2 agonist (albuterol), sodium bicarbonate (if acidotic). **Delayed**: diuretics (furosemide), cation exchange resin (sodium polystyrene sulfonate—GI K removal), **hemodialysis** (urgent if life-threatening hyperkalemia or contraindication to other therapies).

**Renal replacement therapy**: indications—severe hyperkalemia refractory to medical management, severe acidosis (pH <7.15), pulmonary edema refractory to diuretics, uremia (pericarditis, encephalopathy), volume overload in oliguric AKI. Modalities: **intermittent hemodialysis** (3-4 sessions/week), **continuous veno-venous hemofiltration (CVVH)** (gentler, better hemodynamic tolerance in sepsis/shock), **peritoneal dialysis** (if central lines unavailable).

**Monitoring**: daily Cr, BUN, electrolytes, acid-base, fluid balance. Foley catheter if postrenal obstruction suspected.

> ⚡ **Exam Alert**: Rising Cr may lag behind GFR drop by 24-48h; urine output and electrolytes more immediately reflective. Cr can normalize quickly in recoverin

g phase before tubular regeneration complete.

## Prognosis & Prevention of CKD Progression

AKI survival 50-70% if non-septic; lower if sepsis or multiorgan failure. Recovery of renal function occurs in 30-50% within 2-4 weeks; prolonged oliguric AKI predicts worse outcomes.

Risk stratification: APACHE score, SOFA score predict mortality. Strategies to reduce progression to CKD: tight glucose control, avoid secondary insults (nephrotoxins, hypotension), early nutritional support.

> 🏥 **Clinical Pearl**: India's AKI burden includes endemic factors—heat-related (summer dehydration, exertional rhabdomyolysis), infections (dengue—thrombocytopenia, hemorrhage; leptospirosis—direct tubulotoxicity), herbal remedies (aristolochic acid nephropathy), snake bite (venom direct tubulotoxicity). Epidemiologic differences guide prevention.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapter 319.
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-04-TOP-02",
    contentMd: `# Chronic Kidney Disease

Chronic kidney disease (CKD) affects 195 million globally; India burden 3-10% depending on region. CKD is progressive loss of renal function over months to years, leading to ESRD requiring renal replacement therapy.

## Definition & Classification

CKD stages by **GFR (glomerular filtration rate)**: Stage 1 (GFR >90, kidney damage); Stage 2 (GFR 60-89, mild loss); Stage 3a (GFR 45-59, mild-moderate loss); Stage 3b (GFR 30-44, moderate-severe loss); Stage 4 (GFR 15-29, severe loss); Stage 5 (GFR <15, kidney failure). Plus albuminuria classification: A1 (<30 mg/day), A2 (30-300), A3 (>300).

GFR estimated via **eGFR** (MDRD or CKD-EPI equation from serum creatinine, age, gender, race) or **cystatin C** (less affected by muscle mass, dietary factors).

## Etiology

**Hypertension** (35%): chronic elevation damages glomeruli. **Diabetes** (30%): glucose-induced glomerular injury, nodular (Kimmelstiel-Wilson) sclerosis. **Glomerulonephritis** (10-15%): IgA nephropathy (India, especially pediatric), post-infectious (acute post-streptococcal GN—children/adolescents, typically self-limited), lupus nephritis, ANCA vasculitis. **Polycystic kidney disease** (genetic, painless hematuria, hypertension, progression to ESRD).

Other: interstitial nephritis (chronic drug use—NSAIDs, lithium), urinary obstruction (stones, BPH), recurrent UTI (reflux nephropathy in children), tropical sclerosing encapsulating peritonitis (rare, endemic in tropics).

> 🎓 **Professor's Note**: India's CKD epidemiology emphasizes diabetes (rising 2-3% annually), hypertension, and post-infectious GN (IgA nephropathy); environmental factors (aristolochic acid in herbal remedies, heavy metals) contribute.

## Pathophysiology

Initial renal injury → loss of functional nephrons. Remaining nephrons undergo compensatory hyperfiltration (elevated glomerular pressure, SNGFR)—protective short-term but causes progressive injury long-term. Fibrosis (TGF-β, angiotensin II, aldosterone) → epithelial-mesenchymal transition → tubular atrophy, scarring. Vicious cycle of progressively declining GFR unless intervention.

## Clinical Features

Early CKD often asymptomatic (discovered via elevated creatinine/proteinuria on screening). Progressive: nocturia (loss of concentrating ability), edema (if nephrotic-range proteinuria), hypertension (if not already present).

Late CKD (Stage 4-5): **uremic symptoms**—anorexia, nausea, malaise, pruritus (phosphate elevation, uremic toxins), muscle cramps, bone pain (secondary hyperparathyroidism), fatigue (anemia from decreased EPO production). **Metabolic complications**: anemia (hemoglobin often 7-10 g/dL at stage 4-5; EPO deficiency, iron loss, shortened RBC lifespan, bleeding), **secondary hyperparathyroidism** (phosphate retention → hypocalcemia → PTH rise → bone turnover increased—osteitis fibrosa cystica if untreated), **mineral bone disease** (vascular calcification, soft tissue calcification), **hypertension** (sodium/volume expansion, RAAS activation), **dyslipidemia** (LDL increased, HDL decreased, triglyceride elevated—cardiovascular risk).

> 💡 **Memory Trick**: CKD complications—**ABCD**: Anemia, Bone disease, Cardiovascular disease, Diabetes progression. All amenable to intervention.

## Diagnosis & Monitoring

**Serum creatinine**: baseline/trend key; remember eGFR limitations (race correction being revised, muscle mass variations). **Urinalysis + microscopy**: proteinuria/hematuria suggests glomerular disease. **24-h urine protein** or **urine albumin-to-creatinine ratio (UACR)**: quantifies proteinuria (>30 mg/day = albuminuria; >300 = nephrotic). **Renal biopsy**: indicated if proteinuria unexplained, rapid GFR decline, or hematuria suggesting glomerulonephritis.

**Imaging**: renal ultrasound (assess size—atrophic kidneys suggest chronic process, cysts in PKD, obstruction).

> ⚡ **Exam Alert**: Serum creatinine does NOT indicate GFR accurately; eGFR preferable but still estimates. Cystatin C-based eGFR or creatinine-cystatin C combo equation increasingly recommended (less race/muscle dependent).

## Management: Slowing CKD Progression

**Glycemic control**: HbA1c target 7-8% (intensive control offers modest GFR preservation in early CKD; hypoglycemia risk increases as GFR declines).

**Blood pressure**: target <120/80 (ACCORD trial data). **ACE inhibitors/ARBs**: reduce proteinuria, slow progression independent of BP lowering. **SGLT2 inhibitors** (empagliflozin, dapagliflozin): ~30% GFR slope reduction + cardioprotection; now standard in CKD + diabetes.

**Dietary modifications**: protein restriction (0.6-0.8 g/kg/day slows progression moderately), sodium <2.3 g/day, phosphate restriction (as GFR declines—dietary or binders), potassium caution (if hyperkalemia tendency).

**Anemia management**: iron supplementation (oral, then IV if GFR <30 and iron deficient), EPO-stimulating agents (ESA—darbepoetin, epoetin; target Hgb 10-11.5 g/dL; higher targets increase thrombosis risk).

**Bone disease**: phosphate binders (calcium carbonate, sevelamer, lanthanum—if phosphate >5.5 mg/dL, Stage 4-5). Calcitriol (active vitamin D—if hypocalcemia + hyperparathyroidism). Calcimimetics (cinacalcet—if PTH >300 pg/mL). Monitor PTH, calcium, phosphate regularly.

**Cardiovascular**: statins (LDL-lowering), blood pressure management, smoking cessation. Beta-blockers/ACE-I for cardioprotection if HF present.

**Medication adjustments**: reduce doses of renally cleared drugs (aminoglycosides, NSAIDs, ACE-I, ARBs) as GFR declines. Avoid contrast media if possible (contrast nephropathy risk).

## Renal Replacement Therapy (RRT)

When eGFR <15 (Stage 5), plan for RRT initiation. **Hemodialysis**: thrice weekly × 4h (conventional) or nocturnal/twice-weekly (less conventional in India due to cost/infrastructure). **Peritoneal dialysis** (PD): continuous ambulatory (CAPD) or automated (APD); gentler, preserves residual function longer; contraindicated if abdominal adhesions/peritonitis history.

**Renal transplantation**: best long-term outcome (graft survival 10-15 years, patient survival longer than dialysis); requires HLA matching, immunosuppression, surgery capability—limited availability in India.

> 🏥 **Clinical Pearl**: India's CKD patient 80% stage 5 at first presentation; RRT access disparate (dialysis expensive ~INR 2000-4000/session × 3x/week; transplant waiting lists years-long). Early referral to nephrology, BP/glycemic control, SGLT2i/ACE-I critical to delay ESRD.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapters 314-318.
`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-04-TOP-03",
    contentMd: `# Nephrotic & Nephritic Syndrome

Nephrotic syndrome (NS) and nephritic syndrome (NiS) represent distinct patterns of glomerular injury with different etiologies, presentations, and outcomes.

## Nephrotic Syndrome: Definition & Features

**Diagnostic criteria**: proteinuria >3.5 g/day (or >3 g/day in children), hypoalbuminemia (<2.5 g/dL), edema (periorbital, lower extremity, ascites), hyperlipidemia (elevated cholesterol, triglycerides).

**Pathophysiology**: glomerular injury increases permeability to plasma proteins → urinary protein loss → intravascular volume depletion → sodium/water retention (aldosterone activation) + oncotic pressure loss → edema. Hyperlipidemia results from increased hepatic synthesis (compensatory) and increased serum lipoproteins (albuminuria loss → reduced oncotic pressure).

## Nephrotic Syndrome: Primary Causes (80%)

**Minimal change disease (MCD)**: most common in children (90% childhood NS); light microscopy normal, electron microscopy shows podocyte foot process effacement. Selective proteinuria (loss of smaller proteins, preserves large proteins like IgM). Excellent prognosis; responsive to corticosteroids. Associated with allergies, lymphomas.

**Focal segmental glomerulosclerosis (FSGS)**: segmental sclerosis within some glomeruli; light microscopy may miss in early disease; EM shows foot process effacement. Proteinuria often >10 g/day; hematuria common (unlike MCD). Progresses slowly to ESRD (50% at 10 years if untreated); responds partially to corticosteroids + immunosuppressants.

**Membranous nephropathy**: basement membrane thickening + subepithelial immune complex deposition; "spike and dome" appearance. Selective proteinuria. Adults (peak 40-60y). Secondary causes common (malignancy 10-15%, SLE, drugs—NSAIDs, lithium). Natural history variable (30% spontaneous remission, 40% persistent NS, 30% ESRD at 10 years).

**Membranoproliferative glomerulonephritis (MPGN)**: endocapillary (post-infectious) vs. membranoproliferative (more severe). Associated with hepatitis C (especially MPGN cryoglobulinemia), post-infectious GN (streptococcal), SLE.

> 🎓 **Professor's Note**: India predominance of secondary causes (TB, malaria, leprosy) in adults; primary GN more common in children. Post-infectious GN (streptococcal, staphylococcal) can present as NS or NiS.

## Nephrotic Syndrome: Complications

**Infections**: loss of immunoglobulins → immunodeficiency. **Thrombosis**: loss of anticoagulants (protein C, protein S, antithrombin), increased clotting factors → venous thromboembolism (pulmonary embolism, DVT, renal vein thrombosis—flank pain, hematuria, acute renal insufficiency). **Hyperlipidemia**: cardiovascular risk (atherosclerosis).

**Acute kidney injury**: hypovolemia-related (excessive diuresis), interstitial nephritis (drug reaction). **Malnutrition**: protein malabsorption despite proteinuria (often adequate dietary intake).

## Nephrotic Syndrome: Management

**General**: sodium restriction (<2 g/day), control hypertension (ACE-I/ARB first-line, target <125/75), diuretics if edema symptomatic.

**Specific to primary cause**:

- **MCD**: corticosteroids (prednisone 1 mg/kg/day × 4-6 weeks then taper); 85-90% remission. Relapses common; second course of steroids or cyclosporine if steroid-dependent.
- **FSGS**: corticosteroids (higher dose, longer duration), cyclosporine (60% remission if steroid-resistant), mycophenolate mofetil alternative.
- **Membranous**: observation initially (many spontaneously remit); immunosuppression (steroids + cyclophosphamide or calcineurin inhibitor) if persistent/progressive proteinuria or declining GFR.
- **Secondary**: treat underlying cause (TB antituberculous therapy, SLE immunosuppression, drug discontinuation).

**Hyperlipidemia**: statins (rosuvastatin, atorvastatin) reduce cardiovascular risk. **Thrombosis prophylaxis**: consider anticoagulation (warfarin or DOAC) if high-risk (severe proteinuria >10 g/day, low albumin <2 g/dL, thrombotic history, or imaging findings of thrombosis).

> 💡 **Memory Trick**: "Nephrotic" = **PRO**tein loss (renal protein wasting) → nephrotic syndrome. "Nephritic" = hematuria + inflammation (blood in urine, dysmorphic RBCs).

## Nephritic Syndrome: Definition & Features

**Diagnostic criteria**: hematuria (>5 RBC/hpf, often dysmorphic—deformed RBCs indicating glomerular origin), proteinuria (usually <3.5 g/day; if >3.5, called nephrotic-nephritic overlap), hypertension, azotemia (elevated Cr/BUN), RBC casts (pathognomonic for glomerulonephritis).

**Pathophysiology**: immune-mediated glomerular inflammation (antibodies, immune complexes, ANCA) → glomerular damage, proliferation, crescent formation (Bowman's capsule rupture + cellular proliferation) → rapid GFR decline.

## Nephritic Syndrome: Causes

**Post-infectious GN** (post-streptococcal GN most common globally; staphylococcal post-wound infection in India): latency 1-3 weeks post-infection; acute presentation with nephritic features. **IgA nephropathy** (India endemic, especially Southeast Asia; most common GN globally): presents with recurrent hematuria or nephritic features; light microscopy shows IgA deposition. **Lupus nephritis** (Class IV most common): SLE with dysmorphic hematuria, RBC casts, proteinuria, hypertension, renal insufficiency.

**ANCA-associated vasculitis** (granulomatosis with polyangiitis—GPA; microscopic polyangiitis—MPA): p-ANCA (MPO) or c-ANCA (PR3); presents with pulmonary hemorrhage + glomerulonephritis + rapidly progressive renal failure (RPGN). **Anti-GBM disease** (Goodpasture syndrome): pulmonary hemorrhage + RPGN; anti-GBM antibodies.

## Nephritic Syndrome: Management

**IgA nephropathy**: supportive (BP control, ACE-I/ARB); immunosuppression (corticosteroids, mycophenolate) if rapidly progressive. **Post-infectious GN**: supportive; most children remit spontaneously; adults slower recovery.

**Lupus nephritis**: corticosteroids (high-dose IV methylprednisolone induction) + immunosuppressants (cyclophosphamide—induction, then azathioprine or mycophenolate for maintenance).

**ANCA vasculitis**: urgent immunosuppression—high-dose corticosteroids + cyclophosphamide (or rituximab) ± plasmapheresis if severe/RPGN; induction 3-4 months, then maintenance azathioprine/rituximab.

**Anti-GBM disease**: plasmapheresis (remove circulating antibodies) + high-dose corticosteroids + cyclophosphamide; prognosis poor if dialysis-dependent at presentation (>50% ESRD).

> ⚡ **Exam Alert**: RPGN (rapidly progressive GN) = crescent formation, GFR decline >50% in <3 months; requires urgent diagnosis (serology—ANCA, anti-GBM, ANA; renal biopsy) and immunosuppression to prevent ESRD.

> 🏥 **Clinical Pearl**: India's high IgA nephropathy prevalence (10-15% of primary GN) mandates screening hematuria in all at-risk populations. Post-infectious GN declining (improved sanitation, antibiotics) but still seen post-dental procedures, skin infections. Lupus nephritis predominantly affects young women.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapters 320-322.
`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-04-TOP-04",
    contentMd: `# Urinary Tract Infections

Urinary tract infections (UTIs) affect 150-250 million annually worldwide; India burden 5-10% in community. UTIs range from asymptomatic bacteriuria to severe urosepsis.

## Classification & Epidemiology

**Uncomplicated UTI**: lower urinary tract infection in non-pregnant women without structural/functional abnormality. **Complicated UTI**: presence of abnormal urinary tract (obstruction, reflux, neurogenic bladder, catheter), immunocompromise, pregnancy, or upper tract involvement. **Asymptomatic bacteriuria**: presence of ≥10⁵ CFU/mL bacteria without symptoms.

**Cystitis**: bladder infection (lower UTI). **Pyelonephritis**: upper UTI involving renal parenchyma (fever, flank pain, systemic toxicity). **Urosepsis**: sepsis syndrome with UTI source (hypotension, altered mental status, end-organ dysfunction).

Prevalence: women >> men (anatomic—short urethra, proximity to anus); post-menopausal women higher incidence (estrogen loss reduces lactobacilli, vaginal flora shifts toward uropathogens).

## Etiology

**Most common**: **Escherichia coli** (80-85% uncomplicated UTI); gram-negative rod with uropathogenic fimbriae (P fimbriae, type I pili) → adhesion to uroepithelium. Other: **Staphylococcus saprophyticus** (15% uncomplicated cystitis, young women), **Klebsiella**, **Proteus**, **Pseudomonas** (complicated UTI).

> 🎓 **Professor's Note**: Virulence factors—P fimbriae (adherence), hemolysin/cytotoxins (tissue damage), iron scavenging systems. Anatomic predisposition—female urethra 4 cm vs. male 20 cm; post-void residual urine (incomplete bladder emptying) → bacterial proliferation.

## Pathophysiology

Bacterial ascension from perineum → urethra → bladder → ureters → renal pelvis. Mucosal attachment → invasion of urothelial cells (some intracellular), local inflammation (cytokine release), tissue damage. Host factors: bladder emptying dysfunction, vesicoureteral reflux (VUR), obstruction, neurogenic bladder (diabetes, spinal cord injury), pregnancy, immunosuppression facilitate infection.

## Clinical Features

**Cystitis (lower UTI)**: dysuria (painful micturition), urinary frequency, urgency, suprapubic pain, dark urine (hematuria). Fever absent or low-grade. **Pyelonephritis**: fever (often >38.5°C), flank/costovertebral angle (CVA) tenderness, nausea, vomiting, headache, malaise, possible tachycardia/hypotension (sepsis). **Urosepsis**: hypotension, altered mental status, signs of septic shock (poor perfusion, oliguria).

**Asymptomatic bacteriuria**: no urinary symptoms despite positive urine culture; screen pregnant women (→ treat if pregnant to prevent pyelonephritis), not screen non-pregnant unless urologic intervention planned.

> 💡 **Memory Trick**: **CUSI**—Cystitis: **C**ystitis (lower), **U**rgency, **S**uprapubic; **Pyelonephritis**: **F**ever (upper), **F**lank pain, **Fever** (systemic).

## Diagnosis

**Urinalysis**: nitrites (gram-negative bacteria—E. coli), leukocyte esterase (pyuria—WBCs), pyuria (>5 WBC/hpf), hematuria (>5 RBC/hpf). **Urine culture**: gold standard; ≥10⁵ CFU/mL = significant bacteriuria (≥10² CFU/mL in symptomatic women with pyuria acceptable). **Urine Gram stain**: gram-negative rods (E. coli likely).

**Imaging**: renal ultrasound/CT if pyelonephritis (rule out complications—abscess, obstruction); VCUG (voiding cystourethrogram) in children with VUR history or recurrent UTI (guides prophylaxis/surgery); post-void residual ultrasound assessment (if retention suspected).

> ⚡ **Exam Alert**: Urine dipstick nitrites ~50% sensitive (only gram-negative organisms produce nitrites); negative dipstick doesn't exclude UTI. Pyuria + symptoms = treat even if cultures pending; definitive culture results guide narrowing therapy.

## Management

**Uncomplicated cystitis (non-pregnant women)**: **first-line empiric** (before culture): fluoroquinolone (levofloxacin 500 mg × 3 days) OR trimethoprim-sulfamethoxazole (TMP-SMX) double-strength × 3 days (if resistance <20%) OR nitrofurantoin 100 mg × 5-7 days (contraindicated if renal impairment, pregnancy near term).

**Pyelonephritis**: **outpatient** (mild-moderate, no sepsis): fluoroquinolone (levofloxacin 750 mg daily × 7 days) OR cephalosporin (cefixime × 7-14 days). **Hospitalized** (septic, vomiting, renal impairment): IV ceftriaxone ± gentamicin or IV fluoroquinolone; switch to oral when tolerating (total 14 days).

**Complicated UTI**: empiric broader coverage pending cultures (fluoroquinolone, extended-spectrum cephalosporin, or piperacillin-tazobactam if Pseudomonas concern). Duration 10-14 days.

**Asymptomatic bacteriuria**: treat only if **pregnant** (reduces pyelonephritis risk) or undergoing **urologic instrumentation**.

**Recurrent UTI prevention**: behavioral (increased fluid intake, postcoital voiding, avoid spermicide), topical estrogen (post-menopausal women), cranberry products (modest benefit), D-mannose supplement (limited evidence). Continuous prophylaxis (TMP-SMX 1/2 strength daily or trimethoprim daily, or nitrofurantoin 50-100 mg daily × 6-12 months) if ≥2 uncomplicated UTI/year or ≥3 in previous year.

**Catheter-associated UTI (CAUTI)**: avoid catheters when possible; if necessary, aseptic insertion, prompt removal. Catheterized patients—don't treat asymptomatic bacteriuria; treat if symptomatic (fever, CVA tenderness, sepsis). Avoid prophylactic antibiotics (encourage resistance).

> 🏥 **Clinical Pearl**: India's UTI burden complicated by higher rates of VUR (pediatric), neurogenic bladder (spinal dysraphism, spinal cord injury), obstructive uropathy (stones, BPH). Fluoroquinolone resistance increasing (15-30% in many regions); local antibiograms guide empiric therapy. Community awareness of adequate fluid intake, voiding habits reduces UTI incidence.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapter 315.
`,
    estimatedMinutes: 11,
  },
  {
    topicCode: "IM-MOD-05-TOP-01",
    contentMd: `# Diabetes Mellitus

Diabetes mellitus affects 77 million Indians (prevalence 10-15% urban, 4-8% rural); India projected to have highest diabetes burden globally by 2030. It is a metabolic disorder of glucose homeostasis due to pancreatic beta-cell dysfunction and/or insulin resistance.

## Pathophysiology & Classification

**Type 1 (5-10%)**: autoimmune destruction of pancreatic beta cells → absolute insulin deficiency. Genetic predisposition (HLA-DR3/DR4), environmental triggers (viral infection, dietary factors) activate immune attack. Presents acutely (ketoacidosis, polyuria, polydipsia, weight loss) in children/young adults.

**Type 2 (90-95%)**: genetic predisposition + environmental factors (obesity, sedentary lifestyle, aging) → progressive beta-cell dysfunction and insulin resistance. Insulin resistance (impaired glucose uptake in muscle/adipose tissue, decreased hepatic glucose suppression) precedes hyperglycemia; compensatory hyperinsulinemia masks glucose elevation until beta cells fail. Insidious presentation; often asymptomatic until complications manifest. India's rising type 2 incidence linked to urbanization, diet (high refined carbohydrates), obesity epidemic.

**Gestational diabetes mellitus (GDM)**: glucose intolerance first recognized in pregnancy (2nd-3rd trimester); resolves post-partum in 70% but indicates future type 2 risk (50% progress within 20 years).

**Secondary diabetes**: pancreatic disease (chronic pancreatitis, hemochromatosis, cystic fibrosis), endocrine (Cushing syndrome, pheochromocytoma, hyperthyroidism, acromegaly), medications (corticosteroids, atypical antipsychotics, thiazides), infections (congenital rubella), genetic (maturity-onset diabetes of youth—MODY, neonatal diabetes).

> 🎓 **Professor's Note**: India's type 2 phenotype includes higher rates of lean diabetes (normal/low BMI with central adiposity and insulin resistance); attributed to genetic predisposition + intrauterine malnutrition hypothesis.

## Diagnosis

**Random glucose ≥200 mg/dL + symptoms** (polyuria, polydipsia, weight loss, fatigue) = diabetes. **Fasting glucose ≥126 mg/dL** (fasting = 8h without caloric intake). **2h glucose ≥200 mg/dL on 75g oral glucose tolerance test (OGTT)**. **HbA1c ≥6.5%** (represents 3-month average glucose).

**Prediabetes**: fasting glucose 100-125 mg/dL, 2h OGTT 140-199 mg/dL, or HbA1c 5.7-6.4%.

Screening: all adults ≥45y (earlier if risk factors—obesity, family history, GDM, PCOS, autoimmune disease).

## Acute Complications

**Diabetic ketoacidosis (DKA)**: type 1 diabetes (or new-onset type 2) with severe hyperglycemia (>250 mg/dL), ketonemia/ketonuria, metabolic acidosis (pH <7.3, HCO₃ <15), osmotic diuresis (dehydration, electrolyte losses). Triggers: infection, medication non-adherence, new diabetes diagnosis. Presents: polyuria, polydipsia, Kussmaul respiration (deep, rapid), fruity breath (acetone), altered mental status, coma. **Management**: IV fluids (aggressive, 1L/h initially, target volume repletion), insulin (10 IU/h IV infusion, adjusted by glucose response), electrolyte replacement (K+, phosphate—monitor closely), bicarbonate controversial (only if pH <6.9). Mortality 1-5%.

**Hyperosmolar hyperglycemic state (HHS)**: type 2 diabetes with extreme hyperglycemia (often >600 mg/dL), hyperosmolality, minimal ketosis (residual insulin prevents lipolysis). Dehydration profound (10-15L deficit). Triggers: infection, medication non-adherence, inadequate fluid intake (elderly). Mortality 5-15% (higher than DKA, often elderly with comorbidities).

**Hypoglycemia** (<70 mg/dL): insulin excess (over-injection, meal delay, exercise), medications (sulfonylureas, meglitinides), liver disease, sepsis, critical illness. Symptoms: tremor, sweating, palpitations, anxiety (adrenergic), progressing to confusion, seizures, coma if severe. **Treatment**: 15g fast-acting carbohydrates (glucose tablets, juice), recheck in 15min, repeat if needed.

> 💡 **Memory Trick**: **DKA vs. HHS**—DKA: young, type 1, **KEtonemia**, pH <7.3, moderate dehydration. HHS: elderly, type 2, minimal ketosis, severe hyperosmolality, profound dehydration (more fluid deficit than DKA).

## Chronic Complications & Management

**Glycemic control**: HbA1c target 7% (individualized; <6.5% in early disease without comorbidities, 7-8% in elderly/comorbid). Tight control (HbA1c <6%) increases hypoglycemia, mortality in some populations—less aggressive in high-risk.

**Pharmacotherapy (type 2)**:
- **Metformin** (first-line): reduces hepatic glucose production, improves insulin sensitivity; associated with weight loss, cardiovascular benefit; lactic acidosis risk (rare, avoid if eGFR <30).
- **SGLT2 inhibitors** (empagliflozin, dapagliflozin): block renal glucose reabsorption, promote glycosuria; reduce HbA1c 1-1.5%, cardiovascular benefit, prevent CKD progression, reduce HF hospitalization; monitor urinary tract infections, genital mycotic infections, diabetic ketoacidosis (rare).
- **GLP-1 receptor agonists** (liraglutide, dulaglutide, semaglutide): slow gastric emptying, enhance insulin secretion glucose-dependent; reduce HbA1c 1-2%, weight loss (2-5 kg), cardiovascular/renal protection; injectable.
- **Sulfonylureas** (glibenclamide, glipizide): stimulate insulin secretion; hypoglycemia risk, weight gain; declining use.
- **Thiazolidinediones** (pioglitazone): improve insulin sensitivity; weight gain, fluid retention, bladder cancer risk (pioglitazone)—reduced use.
- **DPP-4 inhibitors** (sitagliptin): increase incretin levels; weight neutral, hypoglycemia uncommon; modest HbA1c reduction.

**Combination therapy**: most require 2-3 agents to achieve targets. **Insulin**: type 1 requires from diagnosis (basal-bolus or pump therapy); type 2 at ESRD or advanced failure. Target glucose 130-160 mg/dL preprandial, <180 postprandial (avoid hypoglycemia).

**Diabetic retinopathy**: proliferative (neovascularization, vitreous hemorrhage, retinal detachment) vs. non-proliferative (microaneurysms, hemorrhages, hard exudates). Screening annually with dilated retinal exam; laser photocoagulation if proliferative or macular edema.

**Diabetic nephropathy**: microalbuminuria (30-300 mg/day) progresses to overt proteinuria (>300 mg/day), declining GFR. ACE-I/ARB reduce proteinuria, slow decline; SGLT2i additional benefit. Monitor eGFR, UACR annually.

**Diabetic neuropathy**: distal, symmetrical, predominantly sensory (feet—loss of protective sensation, foot ulcers, infections); also autonomic (impotence, gastroparesis, orthostatic hypotension) and mononeuropathies. Management: tight glycemic control, pain relief (gabapentin, pregabalin, duloxetine), foot care (inspect daily, proper footwear), vascular assessment.

**Diabetic foot**: combination of neuropathy (loss of sensation) + vasculopathy (reduced perfusion) + infection → ulcer formation, gangrene. Prevention: podiatry care, callus removal, amputation prevention. **Charcot arthropathy**: neuropathic joint destruction (foot swelling, deformity despite preserved function); immobilization.

**Cardiovascular**: diabetes accelerates atherosclerosis; target BP <130/80, LDL <70 mg/dL. Aspirin (75-100 mg daily) if cardiovascular disease; no primary prevention in low-risk.

> ⚡ **Exam Alert**: Tight glycemic control (HbA1c <6%) increases hypoglycemia risk, all-cause mortality in some populations (ACCORD trial); individualize targets—elderly, long duration diabetes, limited life expectancy less stringent; young, good renal function, motivated 6-7% reasonable.

> 🏥 **Clinical Pearl**: India's diabetes epidemic driven by genetic predisposition, rapid urbanization (dietary shift, physical inactivity), obesity, aging population. Healthcare gaps—many undiagnosed, late presentations with advanced complications (retinopathy, nephropathy, amputation already present). Emphasis on community screening, awareness, affordable medications, structured diabetes education critical.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapters 370-373.
`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-05-TOP-02",
    contentMd: `# Thyroid Disorders

Thyroid disorders affect 40-60 million Indians; prevalence 10-15% (higher in iodine-deficient regions despite salt iodization). Thyroid produces T4 (thyroxine, 90%) and T3 (triiodothyronine, 10%), regulated by TSH from anterior pituitary.

## Hyperthyroidism: Etiology

**Graves' disease** (70-80%): autoimmune, TSH receptor antibodies (TRAb) stimulate thyroid → thyroid hormone overproduction. More common in women (10:1 female:male), peak age 20-50y. May be triggered by infection, stress, pregnancy, iodine excess.

**Thyroiditis** (subacute, postpartum, silent): inflammation → release of preformed thyroid hormones → transient hyperthyroidism. Subacute (viral, painful thyroid) vs. postpartum (autoimmune, painless). "Thyroiditis phase" lasts weeks; usually self-limited.

**Toxic multinodular goiter** (TMG), **toxic adenoma**: autonomous thyroid nodule(s) produce thyroid hormone independent of TSH.

**Iodine-induced** (iodine-excess, Jod-Basedow): in iodine-deficient regions given excess iodine (contrast media, amiodarone, iodinated antiseptics) → thyroid hormone surge in pre-existing MNG.

**Thyroid hormone overdose**: excessive levothyroxine replacement.

> 🎓 **Professor's Note**: India's regional variation—iodine-deficient areas (Himalayan region, non-coastal) have higher prevalence of simple goiter, toxic MNG; iodine-sufficient areas show more Graves disease pattern.

## Hyperthyroidism: Clinical Features

**Constitutional**: weight loss (despite good appetite), heat intolerance, sweating, fatigue, emotional lability, irritability. **Cardiovascular**: palpitations, tachycardia (even at rest), widened pulse pressure (elevated systolic, reduced diastolic from T3-induced vasodilation), atrial fibrillation (10-20%, thromboemboli risk), angina (elderly). **Neuromuscular**: tremor, proximal muscle weakness, hyperreflexia. **Eye** (Graves): exophthalmos (proptosis, lid lag, lid retraction, ophthalmoplegia—autoimmune inflammation of orbital tissues), conjunctival injection.

**Thyroid storm**: life-threatening hyperadrenergic state (fever, tachycardia >140, cardiac arrhythmias, altered mental status, abdominal pain, shock). Triggers: infection, medication non-adherence, stress, anesthesia. **Management**: urgent beta-blockers (propranolol), antithyroid drugs (PTU, methimazole), iodine (Lugol solution or SSKI—inhibits hormone release), supportive care, ICU admission.

> 💡 **Memory Trick**: **Thyroid storm** = **FACTS**—Fever, Arrhythmias, CNS dysfunction, Tachycardia >140, Shock.

## Hyperthyroidism: Diagnosis & Management

**Labs**: TSH suppressed (<0.1), free T4 elevated, free T3 elevated. **TRAb** (TSH receptor antibody) in Graves (specific). **Thyroid ultrasound/uptake** imaging: Graves shows diffuse uptake, toxic nodule shows focal uptake, thyroiditis shows low uptake.

**Antithyroid drugs**: **Propylthiouracil (PTU)** (blocks synthesis + peripheral conversion T4→T3) vs. **Methimazole** (blocks synthesis only). PTU preferred in pregnancy/first trimester (methimazole teratogenic—methimazole embryopathy). Side effects: agranulocytosis (0.3%), rash, liver toxicity (PTU hepatotoxicity higher). **Beta-blockers** (propranolol, atenolol) control adrenergic symptoms while awaiting drug effect.

**Radioactive iodine (RAI)**: 131I ablation of hyperactive thyroid; effects gradual (weeks); hypothyroidism risk 80% over 10y (requires lifelong levothyroxine). Avoid in pregnancy, breastfeeding.

**Surgery** (thyroidectomy): curative; operative risk (recurrent laryngeal nerve injury—hoarseness, hypoparathyroidism—hypocalcemia), reserved for Graves refractory to medical management, toxic nodule, pregnancy if antithyroid drugs fail.

## Hypothyroidism: Etiology

**Autoimmune** (Hashimoto thyroiditis, 90%): anti-TPO, anti-thyroglobulin antibodies destroy thyroid. Female predominance (10:1), peak age 40-60y, associated with other autoimmune (celiac, type 1 diabetes, Addison).

**Iodine deficiency** (endemic cretinism in iodine-deficient regions; now rare in iodized salt areas but still present in remote India). **Post-thyroidectomy/RAI**: iatrogenic. **Medications**: lithium (blocks T4 release), amiodarone (iodine-induced, blocks conversion T4→T3, hypothyroidism 5-10%), propranolol (reduces conversion), interferon-alpha. **Pituitary/hypothalamic dysfunction**: secondary hypothyroidism (TSH low, T4 low).

## Hypothyroidism: Clinical Features

**Constitutional**: fatigue, cold intolerance, weight gain, depression, memory impairment, slowed speech. **Cardiovascular**: bradycardia, reduced cardiac output, diastolic hypertension, angina (if coronary disease). **Neuromuscular**: muscle aching, weakness, slowed reflexes (delayed relaxation phase—"hung up reflexes"). **Skin**: dry, coarse, myxedematous (nonpitting edema from hyaluronic acid deposition—typical in face, eyelids, hands). **GI**: constipation, ileus in severe. **Reproductive**: menorrhagia, infertility.

**Myxedema coma**: severe hypothyroidism with altered mental status (confusion, psychosis, coma), hypothermia, bradycardia, hypoventilation, hyponatremia. Mortality 20-50%. Triggers: infection, medication, cold exposure, anesthesia. **Management**: IV levothyroxine (500 µg loading, then 50-100 µg daily), IV T3 (liothyronine) 10-20 µg q4-6h (combines both hormones), supportive (warming passive, avoid external heat—peripheral vasodilation worsens central redistribution), fluid restriction (hyponatremia), oxygen, ICU.

## Hypothyroidism: Diagnosis & Management

**Labs**: TSH elevated (>4.5), free T4 low. **Subclinical hypothyroidism**: TSH elevated, T4 normal; treat if TSH >10 or <10 with symptoms/goal conception/autoimmune.

**Levothyroxine** (T4): oral, absorbed in proximal small intestine (take on empty stomach, 30-60 min before food); target TSH 1-2.5 mIU/L. **Dosing**: 1.6 µg/kg/day (~100 µg average); elderly start lower (25-50 µg daily). Monitor TSH 6-8 weeks post-initiation/dose change. **Combination T4/T3** (liothyronine 5 µg daily): some patients report improved symptoms (controversial evidence).

**Levothyroxine interactions**: iron/calcium/aluminum-containing antacids, PPIs reduce absorption (separate by 4h). **Drug-induced hypothyroidism**: withdraw if possible (lithium taper over weeks); amiodarone continue (benefit >risk often).

**Pregnancy**: increase levothyroxine 25-30% (increased volume distribution); TSH target <2.5 first trimester (reduced free T4 teratogenic). Screen TSH in pregnancy planning.

> ⚡ **Exam Alert**: Subclinical hypothyroidism (TSH elevated, T4 normal) treatment controversial—no clear benefit in general population; consider treatment if TSH >10, symptoms, desire pregnancy, cardiovascular disease, or age >65y.

## Thyroiditis Variants

**Subacute (viral) thyroiditis**: post-viral (mumps, coxsackievirus, EBV), triphasic (hyperthyroid 1-2 weeks, hypothyroid 4-6 weeks, recovery). ESR very elevated (>50). Treatment: NSAIDs (aspirin), beta-blockers for symptoms, corticosteroids (prednisone 40 mg daily × 1-2 weeks taper) if severe.

**Postpartum thyroiditis**: autoimmune, occurs 1-4 months postpartum, transient hyperthyroidism followed by hypothyroidism (permanent in 30%); antepartum TPO/thyroglobulin antibodies predict. TSH suppression + elevated free T4 early, then inverse pattern late.

**Silent thyroiditis**: painless, similar triphasic pattern to subacute; likely viral or post-interferon/checkpoint inhibitor therapy.

**Acute suppurative**: rare, bacterial/fungal infection; presents as acute thyroiditis (fever, focal tenderness, thyroid abscess). Imaging: ultrasound/CT shows abscess; needle aspiration for culture. Treatment: antibiotics + possible drainage.

> 🏥 **Clinical Pearl**: India's iodine-sufficient areas (post-salt iodization program) show declining simple goiter; however, pockets of deficiency remain (remote regions, high-altitude); emphasis on ensuring adequate iodized salt access. Autoimmune thyroid disease increasing (Graves, Hashimoto)—likely environmental + genetic factors in urban centers. Screen TSH in all adults ≥35y (or earlier if symptoms, family history).

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapters 374-377.
`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-05-TOP-03",
    contentMd: `# Adrenal Disorders

Adrenal gland disorders affect 0.5-2% of general population. The adrenal cortex produces three hormones: **glucocorticoids** (cortisol, regulates glucose, stress response), **mineralocorticoids** (aldosterone, sodium-water balance), **androgens** (DHEA, androstenedione, minimal contribution to circulating androgens).

## Cushing Syndrome: Definition & Etiology

**Cushing syndrome**: clinical manifestation of glucocorticoid excess from any source. **ACTH-dependent** (Cushing disease, 70%): pituitary adenoma secretes ACTH → adrenal stimulation; **ACTH-independent** (30%): adrenal tumor (adenoma, carcinoma) or ectopic ACTH source (small-cell lung cancer, carcinoid, medullary thyroid cancer—ectopic ACTH syndrome, 10-15% of ACTH-dependent).

Iatrogenic Cushing: exogenous corticosteroid use (most common overall, but not usually called "Cushing syndrome").

## Cushing Syndrome: Clinical Features

**Characteristic features**: centripetal obesity (fat redistribution to face, dorsal neck—"buffalo hump," supraclavicular fossae), proximal muscle weakness, purple striae (abdominal), easy bruising, hypertension (cortisol → sodium retention, vasopressin effect), hypokalemia (mineralocorticoid excess in adrenal Cushing), glucose intolerance/diabetes (cortisol antagonizes insulin).

**Psychiatric**: depression, anxiety, psychosis. **Dermatologic**: hirsutism (androgen excess), acne, skin atrophy, hyperpigmentation (high ACTH—melanocyte-stimulating hormone effect in Cushing disease). **Reproductive**: amenorrhea (women), impotence (men). **Metabolic**: osteoporosis (cortisol suppresses bone formation), hyperlipidemia.

> 🎓 **Professor's Note**: Ectopic ACTH (from lung cancer typically) presents differently—rapid onset, severe hypokalemia, glucose intolerance, less typical Cushingoid appearance; often diagnosed as malignancy first.

## Cushing Syndrome: Diagnosis

**Screening**: 24-h urinary free cortisol (>50 µg/day suggestive) or late-night salivary cortisol (>5-7 µg/dL elevated; saliva collected 11 PM–midnight; diurnal rhythm preserved normally). **Dexamethasone suppression test (DST)**: low-dose DST (1 mg at 11 PM → measure 8 AM cortisol; >1.8 µg/dL suggests Cushing); high-dose DST (8 mg dex at 11 PM) distinguishes pituitary (Cushing disease, suppression occurs → cortisol <50% of baseline) vs. adrenal (no suppression) vs. ectopic (no suppression).

**ACTH level**: differentiates ACTH-dependent (ACTH >20 pg/mL) vs. ACTH-independent (ACTH <5 pg/mL). **Imaging**: pituitary MRI (look for adenoma in Cushing disease; 50% are microadenomas, not always visible), adrenal CT (adenoma vs. carcinoma size, appearance), chest CT (ectopic ACTH search—lung primary).

> 💡 **Memory Trick**: **Late-night salivary cortisol**—most convenient, preserves diurnal rhythm (normal cortisol suppressed at night, elevated in Cushing). **UFC**—requires 24h urine collection (cumbersome but non-invasive). **Low-dose DST**—best initial screening test.

## Cushing Syndrome: Management

**Pituitary adenoma** (Cushing disease): **Transsphenoidal surgery** (neurosurgery, curability 80-90% if microadenoma, lower if macroadenoma or invasive). **Radiation** (if surgery fails or incomplete). **Medical** (if surgery not pursued/failed): ketoconazole (blocks 11β-hydroxylase, reduces cortisol, refractory in 25%), metyrapone (blocks final cortisol synthesis step), mitotane (adrenolytic, palliative in carcinoma, slow onset, multiple side effects), cabergoline (dopamine agonist, response 30%).

**Adrenal tumor**: **Adrenalectomy** (surgery, curative for adenoma; carcinoma has poor prognosis despite resection). **Mitotane** (adjuvant for carcinoma, improves survival).

**Ectopic ACTH**: treat underlying malignancy (chemotherapy, surgery if feasible). **Medical**: ketoconazole, metyrapone (rapid cortisol control if malignancy refractory or urgent symptoms).

**Monitoring**: morning cortisol goal <5-10 µg/dL (slightly suppressed from normal to prevent relapse). Gradual lowering (abrupt cessation → acute adrenal insufficiency risk).

## Addison Disease (Adrenal Insufficiency)

**Primary adrenal insufficiency**: destruction of >90% adrenal cortex → deficiency of cortisol, aldosterone, androgens.

**Etiology**: **autoimmune** (70%, anti-21-hydroxylase antibodies), **tuberculosis** (25% globally, higher in India—TB adrenitis), **other** (fungal—histoplasmosis in tropical regions, CMV in HIV, sepsis—Waterhouse-Friderichsen syndrome, amyloidosis, hemorrhage, medications—ketoconazole, mitotane, etomidate in ICU).

**Secondary/tertiary**: pituitary/hypothalamic disease → low ACTH → low cortisol (aldosterone preserved because renin drives aldosterone synthesis independently of ACTH).

## Addison Disease: Clinical Features

**Insidious onset**: fatigue, malaise, anorexia, weight loss, myalgias. **Hypotension** (postural), **hyponatremia** (cortisol and aldosterone deficiency), **hyperkalemia** (aldosterone deficiency reduces renal K+ excretion), **hypoglycemia** (cortisol insufficiency).

**Hyperpigmentation**: elevated ACTH (melanocyte-stimulating hormone effect) → darkening of skin, scars, areolae (characteristic, only in primary, not secondary).

**Addisonian crisis**: severe hypotension (refractory to fluids), hyperkalemia, hyponatremia, altered mental status, shock. Triggered by infection, medication non-adherence, surgery, stress. Mortality 100% if untreated.

## Addison Disease: Diagnosis

**Basal morning cortisol**: if <3 µg/dL with compatible symptoms = primary adrenal insufficiency. **ACTH level**: elevated (>100 pg/mL) in primary; low/low-normal in secondary.

**Cosyntropin stimulation test** (ACTH analog 250 µg IV): measures adrenal reserve. Normal response: cortisol >18-20 µg/dL at 30-60 min; blunted response (<18) suggests adrenal insufficiency.

**Aldosterone/renin ratio**: aldosterone low, renin elevated (secondary hyperreninemia) in primary; both low in secondary.

**TB screening**: TB serology, chest X-ray, GeneXpert MTB/RIF; adrenal CT shows calcification if TB (specific for granulomatous destruction).

> ⚡ **Exam Alert**: Addisonian crisis is medical emergency—give **empiric IV hydrocortisone 50-100 mg stat, then q6h × 24h**, IV fluids (normal saline), treat hyperkalemia (insulin + glucose, calcium gluconate if ECG changes), identify trigger. Transition to maintenance once stable.

## Addison Disease: Management

**Replacement**: glucocorticoid (hydrocortisone 15-20 mg daily, split dose—morning 10 mg, afternoon 5-10 mg; or prednisone 5-7.5 mg daily) + mineralocorticoid (fludrocortisone 0.05-0.1 mg daily). **Stress coverage**: increase glucocorticoid 2-3-fold during infection, surgery, emotional stress.

**Monitoring**: clinical response (blood pressure, weight, fatigue), electrolytes (target K+ 4-5, Na+ >135), ACTH level (goal mildly elevated, 150-250 pg/mL, indicates adequate replacement without over-replacement).

> 🏥 **Clinical Pearl**: India's TB burden makes TB adrenitis important cause of Addison disease, particularly in endemic areas (South India, high TB prevalence regions); TB testing mandatory in all Addison diagnoses. Autoimmune Addison increasing in urban centers (Western diet, environmental triggers hypothesis). Patient education on stress dosing, medical alert identification critical to prevent crises.

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapters 378-380.
`,
    estimatedMinutes: 12,
  },
  {
    topicCode: "IM-MOD-05-TOP-04",
    contentMd: `# Pituitary Disorders

The pituitary gland (anterior and posterior lobes) controls growth, thyroid, adrenal, reproductive axes via hormone secretion. Pituitary disorders affect 0.1-0.2% of population; prevalence higher if screening with MRI.

## Anterior Pituitary Physiology

**GnRH** (hypothalamus) → **FSH/LH** (gonadotropins) → reproductive hormones (testosterone, estrogen). **TRH** → **TSH** → thyroid hormones. **CRH** → **ACTH** → cortisol. **Growth hormone-releasing hormone (GHRH)** → **GH** → IGF-1 (growth, metabolism). **Dopamine** (tonic inhibition) suppresses **prolactin** (lactation, reproductive).

## Anterior Pituitary Adenomas

Most common pituitary pathology; 10% of brain tumors. Classified by size (microadenoma <10 mm, macroadenoma >10 mm) and hormone secretion.

**Prolactinoma** (40%): elevated prolactin → galactorrhea, amenorrhea, sexual dysfunction. **GH-secreting** (20%): acromegaly (if adult; gigantism if pre-closure epiphysis). **ACTH-secreting** (10%): Cushing disease. **TSH-secreting** (1%): thyroid hormone excess. **LH/FSH-secreting** (5%): rare, variable symptoms. **Non-functioning** (25%): mass effect only (headache, visual field defects—bitemporal hemianopsia from optic chiasm compression).

## Acromegaly

**Pathophysiology**: excess GH (usually pituitary adenoma) → elevated IGF-1 → skeletal overgrowth, metabolic effects.

**Clinical features**: coarsening of facial features (enlarged nose, lips, ears), prognathism (jaw prominence), hand/foot enlargement (widened shoes), increased hat size, skin thickening. **Systemic**: hypertension (30-50%), diabetes (15-30%), sleep apnea (70%, from pharyngeal narrowing), carpal tunnel syndrome, arthropathy (large joints), cardiomegaly (HF), hyperhidrosis. **Headache**, visual field defects (macroadenoma). Increased malignancy risk (colon cancer screening warranted).

**Diagnosis**: random GH >5 ng/mL, IGF-1 elevated for age; **oral glucose tolerance test (OGTT)** shows failure of GH suppression to <1 ng/mL at 2h (normal suppression confirms acromegaly if combined with elevated IGF-1). **MRI pituitary** shows adenoma (90%).

**Management**: **Transsphenoidal surgery** (first-line, curative if microadenoma; 60-70% cure macroadenoma). **Medical**: somatostatin analogues (octreotide IM monthly, lanreotide) reduce GH/IGF-1 (~60-70% normalize IGF-1); **GH receptor antagonist** (pegvisomant) antagonizes GH action (IGF-1 normalization in 90%); **dopamine agonist** (cabergoline—response 20-25%). **Radiation** (external beam or Gamma Knife) if surgery fails, slow-acting (years).

> 🎓 **Professor's Note**: Acromegaly diagnosis often delayed (average 9-10 years from symptom onset); subtle changes dismissed as "aging." Screen at symptom presentation.

## GH Deficiency (Growth Hormone Deficiency)

**Etiology**: pituitary tumor, pituitary surgery/radiation, idiopathic hypopituitarism, empty sella syndrome.

**Adults**: fatigue, decreased strength, reduced exercise capacity, increased fat mass, decreased bone density (osteoporosis risk). **Children**: growth failure (height <-2 SD), slow growth velocity.

**Diagnosis**: random GH not useful (GH secretion episodic, peak during sleep). **IGF-1 low** for age/sex. **Stimulation test**: insulin tolerance test (induces hypoglycemia → GH surge), GHRH + arginine. **GH <3 ng/mL** on stimulation = deficiency.

**Management**: **GH replacement** (daily SC injection, recombinant human GH); careful monitoring (improves bone density, muscle mass, exercise capacity, sense of well-being; increased mortality if excessive—avoid supraphysiologic dosing).

## Prolactin Disorders

**Hyperprolactinemia** (elevated prolactin >25 ng/mL): **prolactinoma** (most common pathologic cause), pregnancy, hypothyroidism (TRH stimulates prolactin), medications (dopamine antagonists—antipsychotics, metoclopramide; SSRIs; opioids), pituitary stalk compression (any mass → loss of dopamine inhibition), idiopathic.

**Clinical features**: galactorrhea (inappropriate breast secretion), amenorrhea (hypogonadism from dopamine inhibition of GnRH), infertility, sexual dysfunction, headache (if prolactinoma macroadenoma).

**Diagnosis**: prolactin >200 ng/mL highly suggestive prolactinoma; MRI shows adenoma (90%).

**Management**: **dopamine agonist** (bromocriptine, cabergoline preferred for better tolerability and efficacy—90% normalize prolactin, reduce tumor size 30-50%). **Surgery** (if medication intolerance, aggressive tumor, apoplexy). **Radiation** rare.

> 💡 **Memory Trick**: **Causes of hyperprolactinemia**: **H-PHAT**—Hypothyroidism, **P**rolactinoma, **H**ypogonadism/stress/pregnancy, **A**ntipsychotics/antidepressants, **T**herapeutic (dopamine antagonists).

## Hypopituitarism

**Causes**: pituitary tumor (mass effect, compression of normal pituitary), pituitary surgery/radiation, apoplexy (hemorrhage into adenoma—sudden, severe headache, visual loss, hypotension), trauma, Sheehan syndrome (postpartum hemorrhage → pituitary necrosis → secondary amenorrhea, lactation failure, hypothyroidism), hemochromatosis, sarcoidosis, TB, lymphocytic hypophysitis (autoimmune).

**Deficiencies**: progressive loss (GH first, then FSH/LH, TSH, ACTH last). Presents with symptoms of each hormone lack (fatigue, growth failure, hypogonadism, hypothyroidism, adrenal insufficiency).

**Diagnosis**: low hormone levels + low/low-normal ACTH/TSH (secondary) + MRI pituitary (show mass/atrophy/inflammation).

**Management**: replace each hormone—**hydrocortisone** (first, to prevent addisonian crisis), **levothyroxine**, **GH** (adults), **gonadotropin replacement** (testosterone or estrogen/progesterone).

## Posterior Pituitary Disorders

**Arginine vasopressin (ADH/antidiuretic hormone)** regulation: osmolality, blood volume. Deficiency → **central diabetes insipidus** (excessive dilute urine, polydipsia). Excess → **SIADH** (inappropriate secretion → hyponatremia).

**Central DI**: pituitary/hypothalamic disease → ADH deficiency → polyuria (5-20 L/day), polydipsia, hypernatremia (if fluid intake insufficient). Urine osmolality <300 mOsm/kg (inappropriately dilute despite hypernatremia). **Treatment**: **desmopressin** (ADH analog, intranasal or SC); dosing titrated to urine output/thirst.

**SIADH**: euvolemic hyponatremia (Na <130 mEq/L) from ADH excess (malignancy—lung cancer, CNS disease, medications—SSRIs, vincristine, carbamazepine). Urine osmolality elevated inappropriately (>200 despite hyposmolal plasma). **Treatment**: fluid restriction (500 mL/day), treat underlying cause, vaptans (ADH antagonists) if refractory; correct hyponatremia slowly (5-10 mEq/L/day to avoid osmotic demyelination).

> ⚡ **Exam Alert**: Acute hyponatremia (<130 mEq/L, symptom onset <48h)—seizures, coma risk; requires hypertonic saline (3%) carefully (1-2 mEq/L/h increase, monitor Na q2-4h). Chronic hyponatremia—more gradual correction to avoid osmotic demyelination syndrome.

> 🏥 **Clinical Pearl**: India's pituitary disorder spectrum includes TB-related hypopituitarism (TB of sella/pituitary granulomas), pituitary apoplexy often misdiagnosed as acute stroke (sudden severe headache, ophthalmoplegia, hypotension), prolactinoma most frequent pathologic diagnosis (dopamine agonists widely available, accessible management). Acromegaly often diagnosed late (patient assumes aging). GH deficiency rarely recognized in adults (insurance/availability issues limit treatment access).

**Ref**: Harrison's Principles of Internal Medicine (21st ed), Chapters 381-387.
`,
    estimatedMinutes: 12,
  },
];
