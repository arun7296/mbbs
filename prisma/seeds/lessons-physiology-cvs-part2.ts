// 5-layer lessons for Physiology CVS Part 2: BP Regulation, Regional Circulation, Shock & Heart Failure
import type { TopicLessons } from "./content-loader";

export const physiologyCvsPart2Lessons: TopicLessons[] = [
  // ═══════════════════════════════════════════════════════════════
  // PY-MOD-03-TOP-05: Blood Pressure Regulation
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "PY-MOD-03-TOP-05",
    layers: [
      { layer: 1, slug: "layer-1-foundation", title: "Blood Pressure Regulation - Foundation", estimatedMinutes: 20,
        summary: "Blood pressure is the lateral force exerted by circulating blood on arterial walls. Normal BP is 120/80 mmHg. MAP = DBP + 1/3 pulse pressure. BP = CO x TPR. Regulation occurs through rapid neural (baroreceptor), intermediate humoral, and long-term renal mechanisms.",
        contentMd: `# Blood Pressure Regulation - Foundation

## Definition and Normal Values
- **Blood Pressure (BP)**: Lateral pressure exerted by blood on the walls of arteries
- **Systolic BP (SBP)**: Peak pressure during ventricular systole (normal: **120 mmHg**)
- **Diastolic BP (DBP)**: Minimum pressure during ventricular diastole (normal: **80 mmHg**)
- **Pulse Pressure (PP)**: SBP - DBP = 40 mmHg (reflects stroke volume and arterial compliance)
- **Mean Arterial Pressure (MAP)**: DBP + 1/3(SBP - DBP) = ~93 mmHg

## Fundamental Equation
\`\`\`
BP = Cardiac Output (CO) x Total Peripheral Resistance (TPR)
CO = Heart Rate (HR) x Stroke Volume (SV)
\`\`\`

## Determinants of Blood Pressure
1. **Cardiac Output**: Affected by HR, contractility, preload, afterload
2. **Total Peripheral Resistance**: Determined by arteriolar tone (primary regulator)
3. **Blood Volume**: Maintained by kidneys and hormonal systems
4. **Arterial Compliance**: Elasticity of large arteries; decreases with age (isolated systolic hypertension)
5. **Blood Viscosity**: Increased in polycythemia, decreased in anemia

## Classification of Blood Pressure (JNC 8 / Indian Guidelines)

| Category | Systolic (mmHg) | Diastolic (mmHg) |
|----------|----------------|-----------------|
| Normal | < 120 | < 80 |
| Elevated | 120-129 | < 80 |
| Stage 1 HTN | 130-139 | 80-89 |
| Stage 2 HTN | >= 140 | >= 90 |
| Hypertensive Crisis | > 180 | > 120 |

## Three Time-Based Regulatory Mechanisms
1. **Rapid (seconds-minutes)**: Baroreceptor reflex, chemoreceptor reflex, CNS ischemic response
2. **Intermediate (minutes-hours)**: Capillary fluid shift, renin-angiotensin vasoconstriction, stress relaxation
3. **Long-term (hours-days)**: Renal-body fluid pressure-natriuresis mechanism, aldosterone, ADH

## Measurement of Blood Pressure
- **Auscultatory method**: Sphygmomanometer with stethoscope over brachial artery
- **Korotkoff sounds**: Phase I (SBP) to Phase V (DBP - disappearance of sounds)
- Cuff width should be **40% of arm circumference**
- **Auscultatory gap**: Silent interval between Phase I and Phase II; common in elderly hypertensives`,
        mnemonics: [
          { text: "MAP = DBP + 1/3 PP (MAP Doubles Diastole's Proportion)", explanation: "Mean arterial pressure approximated by adding one-third of pulse pressure to diastolic pressure; diastole contributes ~2/3 of cardiac cycle duration" },
          { text: "BP = CO x TPR (Be Calm or Things Pile Rapidly)", explanation: "Blood pressure equals cardiac output times total peripheral resistance - the fundamental hemodynamic equation" }
        ],
        keyPoints: [
          "BP = CO x TPR is the fundamental hemodynamic equation",
          "MAP = DBP + 1/3(SBP - DBP), approximately 93 mmHg normally",
          "Arteriolar tone is the primary determinant of TPR",
          "Rapid regulation via baroreceptors; long-term via kidneys",
          "Korotkoff Phase I = systolic, Phase V = diastolic BP"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 14 - Overview of the Circulation; Biophysics of Pressure, Flow, and Resistance", edition: "14th" }] },

      { layer: 2, slug: "layer-2-mechanism", title: "Blood Pressure Regulation - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of baroreceptor reflex, chemoreceptor reflex, CNS ischemic response, renin-angiotensin-aldosterone system, and the renal-body fluid pressure-natriuresis mechanism for long-term BP control.",
        contentMd: `# Blood Pressure Regulation - Mechanisms

## 1. Baroreceptor Reflex (Rapid, seconds)
### Location of Baroreceptors
- **Carotid sinus** (at bifurcation of common carotid) - innervated by **Hering's nerve (branch of CN IX)**
- **Aortic arch** - innervated by **aortic nerve (branch of CN X/vagus)**

### Mechanism
1. Rise in BP stretches baroreceptors
2. Increased firing rate in afferent nerves (IX, X)
3. Signals reach **Nucleus Tractus Solitarius (NTS)** in medulla
4. NTS activates vagal (parasympathetic) center --> bradycardia
5. NTS inhibits vasomotor (sympathetic) center --> vasodilation
6. Net effect: Decreased HR + vasodilation = decreased BP

### Key Features
- Operating range: **60-180 mmHg** (most sensitive at normal MAP)
- **Buffer nerves**: Carotid sinus and aortic nerve dampen acute BP changes
- **Baroreceptor resetting**: Chronic hypertension resets to higher set-point within 1-2 days
- NOT effective for long-term BP control (resets)

## 2. Chemoreceptor Reflex
- **Peripheral chemoreceptors**: Carotid body (CN IX) and aortic body (CN X)
- Stimulated by: Low PaO2 (< 60 mmHg), high PaCO2, low pH
- Primary effect: Increase ventilation; secondary: reflex vasoconstriction raising BP
- Active mainly when BP < 80 mmHg

## 3. CNS Ischemic Response (Cushing Reaction)
- Activated when BP falls below **60 mmHg** (brain ischemia)
- Most powerful sympathetic activator (last-ditch mechanism)
- **Cushing reflex**: Raised ICP --> brain ischemia --> massive sympathetic discharge --> hypertension + reflex bradycardia
- Clinical significance: Cushing triad = **hypertension + bradycardia + irregular respiration**

## 4. Renin-Angiotensin-Aldosterone System (RAAS)

### Renin Release Stimuli (3 mechanisms)
1. **Intrarenal baroreceptor**: Low pressure in afferent arteriole
2. **Macula densa**: Low NaCl delivery to distal tubule
3. **Sympathetic stimulation**: Beta-1 receptors on JG cells

### Cascade
\`\`\`
Angiotensinogen (liver) --[Renin]--> Angiotensin I
Angiotensin I --[ACE (lungs)]--> Angiotensin II
\`\`\`

### Actions of Angiotensin II
- **Vasoconstriction** (potent, especially efferent arteriole)
- **Aldosterone secretion** from zona glomerulosa
- **ADH release** from posterior pituitary
- **Thirst stimulation** via subfornical organ
- **Sodium reabsorption** in proximal tubule (Na+/H+ exchanger)
- **Sympathetic facilitation** (central and peripheral)

## 5. Renal-Body Fluid Mechanism (Long-term)
- **Pressure-natriuresis**: Increased renal perfusion pressure increases sodium and water excretion
- This is the ONLY mechanism capable of infinite gain (returns BP exactly to set-point)
- Guyton's concept: Long-term BP is determined ENTIRELY by the kidney's pressure-natriuresis curve
- Shift of curve to right = essential hypertension (requires higher pressure for same sodium excretion)

## 6. Other Hormonal Mechanisms
- **ADH (Vasopressin)**: Water retention + vasoconstriction (V1 receptors)
- **ANP (Atrial Natriuretic Peptide)**: Released by atrial stretch; causes natriuresis and vasodilation
- **BNP**: Released from ventricles in heart failure
- **Endothelin**: Most potent vasoconstrictor (from endothelium)
- **Nitric Oxide (NO)**: Most important vasodilator from endothelium (via cGMP)
- **Prostacyclin (PGI2)**: Vasodilator from endothelium`,
        mnemonics: [
          { text: "BRACE for BP control: Baroreceptor, RAAS, ADH, CNS ischemic, Endothelial factors", explanation: "Five major mechanisms of blood pressure regulation from rapid to long-term" },
          { text: "Angiotensin II does SAVT: Sodium reabsorption, Aldosterone, Vasoconstriction, Thirst", explanation: "Four key actions of angiotensin II that raise blood pressure" }
        ],
        keyPoints: [
          "Baroreceptors in carotid sinus (CN IX) and aortic arch (CN X) mediate the rapid reflex",
          "NTS is the central relay station for baroreceptor afferents",
          "Baroreceptors reset in 1-2 days; NOT effective for long-term BP control",
          "RAAS cascade: Angiotensinogen -> (renin) -> Ang I -> (ACE in lungs) -> Ang II",
          "Pressure-natriuresis is the ONLY infinite-gain mechanism for long-term BP control",
          "Cushing triad = hypertension + bradycardia + irregular breathing (raised ICP)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 18 - Nervous Regulation of the Circulation and Rapid Control of Arterial Pressure", edition: "14th" }, { book: "Guyton & Hall", chapter: "Ch 19 - Role of the Kidneys in Long-Term Control of Arterial Pressure", edition: "14th" }] },

      { layer: 3, slug: "layer-3-clinical", title: "Blood Pressure Regulation - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical conditions related to blood pressure dysregulation including essential and secondary hypertension, orthostatic hypotension, and pharmacological targets for BP management.",
        contentMd: `# Blood Pressure - Clinical Application

## Essential (Primary) Hypertension
- Accounts for **95%** of all hypertension cases
- Multifactorial: genetic predisposition + environmental factors
- Pathophysiology: Rightward shift of pressure-natriuresis curve
- Risk factors: High salt intake, obesity, stress, family history, sedentary lifestyle
- Indian context: High prevalence in urban populations (25-30% adults); salt intake often exceeds 10 g/day

## Secondary Hypertension (5%)

| Cause | Mechanism | Clue |
|-------|-----------|------|
| Renal artery stenosis | RAAS activation | Young female (fibromuscular dysplasia), renal bruit |
| Pheochromocytoma | Excess catecholamines | Episodic HTN, palpitations, pallor, sweating |
| Conn syndrome | Excess aldosterone | Hypokalemia, metabolic alkalosis |
| Cushing syndrome | Excess cortisol | Moon face, central obesity, striae |
| Coarctation of aorta | Mechanical obstruction | Upper limb HTN, radio-femoral delay |
| Hyperthyroidism | Increased CO | Systolic HTN, wide pulse pressure |

## Orthostatic (Postural) Hypotension
- Drop of SBP >= 20 mmHg or DBP >= 10 mmHg within 3 minutes of standing
- Causes: Autonomic neuropathy (diabetes), drugs (alpha-blockers, antidepressants), dehydration
- Mechanism: Failure of baroreceptor-mediated vasoconstriction and tachycardia on standing
- Indian clinical relevance: Common in elderly diabetics and patients on anti-hypertensives

## Pharmacological Targets

| Drug Class | Mechanism | Example |
|-----------|-----------|---------|
| ACE inhibitors | Block Ang I to Ang II conversion | Enalapril, Ramipril |
| ARBs | Block AT1 receptors | Losartan, Telmisartan |
| Beta-blockers | Decrease HR and renin release | Atenolol, Metoprolol |
| CCBs | Vasodilation (block Ca2+ entry) | Amlodipine, Nifedipine |
| Diuretics | Reduce blood volume | Hydrochlorothiazide |
| Alpha-blockers | Vasodilation | Prazosin |

## Hypertensive Emergencies
- **Malignant hypertension**: DBP > 120 mmHg with target organ damage (papilledema, renal failure)
- Treatment: IV labetalol or sodium nitroprusside (avoid rapid drop > 25% in first hour)
- **Eclampsia**: Seizures in pregnancy with HTN; IV MgSO4 is drug of choice (Pritchard regimen used in India)

> **Clinical Pearl**: In Indian clinical practice, first-line treatment for uncomplicated hypertension is typically amlodipine or telmisartan. Fixed-dose combinations are widely used for better compliance.`,
        mnemonics: [
          { text: "ABCD of antihypertensives: ACE inhibitors/ARBs, Beta-blockers, Calcium channel blockers, Diuretics", explanation: "The four first-line classes of antihypertensive drugs" },
          { text: "PHEOCHROMOCYTOMA = Pressure (high), Headache, Excessive sweating, Orthostatic hypotension, Catecholamines elevated", explanation: "Key clinical features of pheochromocytoma causing secondary hypertension" }
        ],
        keyPoints: [
          "95% of hypertension is essential (primary); only 5% secondary",
          "Renal artery stenosis is the most common cause of secondary HTN",
          "Orthostatic hypotension = SBP drop >= 20 or DBP drop >= 10 within 3 minutes of standing",
          "Cushing triad differentiates raised ICP from other causes of hypertension",
          "IV MgSO4 is drug of choice for eclampsia in India (Pritchard regimen)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 19 - Dominant Role of the Kidneys in Long-Term Regulation", edition: "14th" }, { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 271 - Hypertensive Vascular Disease", edition: "21st" }] },

      { layer: 4, slug: "layer-4-exam-prep", title: "Blood Pressure Regulation - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield one-liners, comparison tables, and previous year question themes for blood pressure regulation.",
        contentMd: `# Exam Preparation - Blood Pressure Regulation

## One-Liners
- Normal BP: **120/80 mmHg**, MAP = **93 mmHg**
- Fundamental equation: **BP = CO x TPR**
- Baroreceptors location: **Carotid sinus (CN IX) and aortic arch (CN X)**
- Central relay for baroreceptor reflex: **Nucleus Tractus Solitarius (NTS)**
- Baroreceptors reset in: **1-2 days**
- Most powerful emergency pressor response: **CNS ischemic response**
- Cushing triad: **Hypertension + Bradycardia + Irregular breathing**
- ACE location: **Pulmonary vascular endothelium**
- Most potent vasoconstrictor: **Endothelin**
- Most important endothelial vasodilator: **Nitric Oxide (via cGMP)**
- Only mechanism with infinite gain: **Renal pressure-natriuresis**
- Most common cause of secondary HTN: **Renal artery stenosis**
- Drug of choice for eclampsia: **MgSO4 (Pritchard regimen)**
- Baroreceptor operating range: **60-180 mmHg**

## Comparison: Rapid vs Long-term BP Control

| Feature | Baroreceptor (Rapid) | Renal (Long-term) |
|---------|---------------------|-------------------|
| Response time | Seconds | Hours to days |
| Duration | Minutes (resets) | Permanent |
| Gain | Moderate | Infinite |
| Mechanism | Neural reflex | Pressure-natriuresis |
| Chronic HTN control | No (resets) | Yes (sole mechanism) |

## Comparison: Carotid Sinus vs Aortic Arch Baroreceptors

| Feature | Carotid Sinus | Aortic Arch |
|---------|--------------|-------------|
| Nerve | Hering's nerve (CN IX) | Aortic nerve (CN X) |
| Sensitivity | More sensitive | Less sensitive |
| Function | BP + HR control | Primarily BP control |
| Surgery relevance | Carotid endarterectomy | Aortic surgery |

## Previous Year Question Themes
- Baroreceptor reflex mechanism and resetting
- RAAS cascade and angiotensin II actions
- Cushing reflex vs baroreceptor reflex
- Classification of hypertension
- Pressure-natriuresis concept
- Secondary causes of hypertension`,
        mnemonics: [
          { text: "NTS = Nucleus of Tens and Nines (CN IX and X synapse here)", explanation: "Nucleus Tractus Solitarius receives afferents from glossopharyngeal (IX) and vagus (X) nerves carrying baroreceptor signals" }
        ],
        keyPoints: [
          "Baroreceptors reset in 1-2 days making them ineffective for chronic HTN control",
          "Pressure-natriuresis is the ONLY infinite-gain mechanism",
          "Cushing triad indicates raised intracranial pressure",
          "ACE is predominantly located in pulmonary vascular endothelium",
          "Endothelin is the most potent vasoconstrictor; NO is the key vasodilator"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 18-19", edition: "14th" }] },

      { layer: 5, slug: "layer-5-active-recall", title: "Blood Pressure Regulation - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on blood pressure regulation concepts.",
        contentMd: `# Active Recall - Blood Pressure Regulation

**Q1:** What is the fundamental hemodynamic equation for blood pressure?
> BP = Cardiac Output (CO) x Total Peripheral Resistance (TPR)

**Q2:** How is Mean Arterial Pressure (MAP) calculated?
> MAP = DBP + 1/3 (SBP - DBP); Normal value approximately 93 mmHg

**Q3:** Where are the baroreceptors located and what nerves innervate them?
> Carotid sinus (Hering's nerve, branch of CN IX) and Aortic arch (aortic nerve, branch of CN X)

**Q4:** What is the central relay station for baroreceptor afferents?
> Nucleus Tractus Solitarius (NTS) in the medulla

**Q5:** Why are baroreceptors ineffective for long-term BP control?
> They undergo resetting within 1-2 days to the new BP level, losing their corrective drive

**Q6:** Describe the RAAS cascade.
> Angiotensinogen (liver) -> Renin (JG cells) -> Angiotensin I -> ACE (lungs) -> Angiotensin II

**Q7:** Name four actions of Angiotensin II.
> Vasoconstriction, aldosterone secretion, ADH release, thirst stimulation, proximal tubule Na+ reabsorption, sympathetic facilitation

**Q8:** What is the only mechanism with infinite gain for BP control?
> Renal pressure-natriuresis mechanism (long-term control)

**Q9:** What is the Cushing triad and what does it indicate?
> Hypertension + Bradycardia + Irregular respiration; indicates raised intracranial pressure

**Q10:** At what BP does the CNS ischemic response get activated?
> When MAP falls below 60 mmHg (brain ischemia)

**Q11:** Name three stimuli for renin release.
> Low afferent arteriolar pressure, low NaCl at macula densa, beta-1 sympathetic stimulation of JG cells

**Q12:** What is the most common cause of secondary hypertension?
> Renal artery stenosis (fibromuscular dysplasia in young women, atherosclerosis in elderly)`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering BP equation, baroreceptors, RAAS, Cushing reflex, and hypertension",
          "Focus on mechanism-based understanding for NEXT pattern questions",
          "Review comparison tables from Layer 4 before attempting recall",
          "Practice drawing the RAAS cascade from memory",
          "Link each mechanism to its clinical drug target"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 14, 18, 19", edition: "14th" }] },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PY-MOD-03-TOP-06: Regional Circulation
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "PY-MOD-03-TOP-06",
    layers: [
      { layer: 1, slug: "layer-1-foundation", title: "Regional Circulation - Foundation", estimatedMinutes: 20,
        summary: "Different organs have specialized circulatory adaptations. Coronary circulation has maximal oxygen extraction at rest, cerebral circulation demonstrates autoregulation, and skeletal muscle blood flow increases dramatically during exercise.",
        contentMd: `# Regional Circulation - Foundation

## Overview
Different organs have unique circulatory features adapted to their metabolic demands. Key regional circulations tested in exams: coronary, cerebral, pulmonary, renal, splanchnic, cutaneous, and skeletal muscle.

## Coronary Circulation
- **Blood flow**: 250 mL/min at rest (5% of CO); can increase 4-5 fold during exercise
- **O2 extraction**: Highest of any organ (**65-70%** at rest); coronary sinus pO2 is only 20 mmHg
- **Unique feature**: Primarily flows during **diastole** (systolic compression of intramural vessels)
- **Left coronary artery**: LAD (anterior 2/3 of septum, anterior wall), LCx (lateral wall)
- **Right coronary artery**: SA node (60%), AV node (80-90%), posterior descending (in 85% - right dominance)
- **Coronary reserve**: Ability to increase flow up to 4-5 times resting level

## Cerebral Circulation
- **Blood flow**: 750 mL/min (15% of CO); ~50 mL/100g/min (gray matter: 80, white matter: 20)
- **O2 consumption**: 20% of total body O2 at rest (despite brain being only 2% of body weight)
- **Autoregulation range**: MAP **60-150 mmHg** (flow remains constant)
- **Circle of Willis**: Anastomotic ring at base of brain providing collateral flow
- **Blood-Brain Barrier (BBB)**: Tight junctions in cerebral capillaries; permeable to lipid-soluble substances, impermeable to most proteins and polar molecules
- **Monroe-Kellie doctrine**: Skull is a rigid box; increase in one component (brain/blood/CSF) must decrease another

## Pulmonary Circulation
- **Low pressure system**: Systolic 25 mmHg, Diastolic 8 mmHg, Mean 15 mmHg
- **Low resistance**: 1/10th of systemic resistance
- **Hypoxic vasoconstriction**: Unique to pulmonary vessels; alveolar hypoxia causes vasoconstriction (diverts blood to better-ventilated areas)
- **Zone concept (West)**: Zone 1 (PA > Pa > Pv), Zone 2 (Pa > PA > Pv), Zone 3 (Pa > Pv > PA)

## Renal Circulation
- **Blood flow**: 1200 mL/min (20-25% of CO - highest per gram of tissue)
- **Autoregulation range**: MAP **80-180 mmHg**
- **Two capillary beds**: Glomerular (high pressure, filtration) and peritubular (low pressure, reabsorption)
- **Cortex receives 90%** of renal blood flow; medulla only 10%

## Splanchnic Circulation
- **Blood flow**: 1500 mL/min (25% of CO) - largest blood reservoir in the body
- **Portal system**: Venous blood from GI tract passes through liver before systemic circulation
- **Hepatic artery**: 25% of liver blood flow (but 50% of O2 supply)
- **Portal vein**: 75% of liver blood flow (nutrient-rich, partially deoxygenated)

## Cutaneous Circulation
- Primary function: **Thermoregulation** (not nutrition)
- **AV anastomoses**: Present in fingertips, palms, earlobes; shunt blood for heat loss/conservation
- Sympathetic control predominates (vasoconstriction in cold, vasodilation in heat)`,
        mnemonics: [
          { text: "CORONARY flows in DIASTOLE (not systole) - remember Coronary = Counter-systolic", explanation: "Left coronary flow is maximal during diastole because systolic contraction compresses intramyocardial vessels" },
          { text: "Cerebral flow = FIFTY-FIFTY: 50 mL/100g/min flow, needs autoregulation 60-150 mmHg", explanation: "Brain receives ~50 mL/100g/min with autoregulation maintaining constant flow between MAP 60-150 mmHg" }
        ],
        keyPoints: [
          "Coronary O2 extraction is highest (65-70%); flow increase is the only way to increase O2 supply",
          "Left coronary blood flow is maximal during diastole",
          "Cerebral autoregulation operates between MAP 60-150 mmHg",
          "Pulmonary circulation is a low-pressure system with unique hypoxic vasoconstriction",
          "Renal blood flow is 20-25% of CO; highest per gram of any organ",
          "Splanchnic circulation is the largest blood reservoir"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 21 - Muscle Blood Flow and Cardiac Output During Exercise; Coronary Circulation", edition: "14th" }] },

      { layer: 2, slug: "layer-2-mechanism", title: "Regional Circulation - Mechanism", estimatedMinutes: 30,
        summary: "Detailed mechanisms of autoregulation in cerebral and coronary circulations, metabolic regulation, hypoxic pulmonary vasoconstriction, and the unique features of portal and fetal circulations.",
        contentMd: `# Regional Circulation - Mechanisms

## Autoregulation Mechanisms
Autoregulation maintains constant blood flow despite changes in perfusion pressure.

### Two Theories
1. **Myogenic mechanism (Bayliss effect)**: Increased transmural pressure stretches arteriolar smooth muscle, causing reflex contraction (reduced flow)
2. **Metabolic mechanism**: Tissue metabolites (adenosine, K+, CO2, H+) cause local vasodilation when flow is inadequate

### Autoregulation Ranges by Organ

| Organ | Autoregulation Range (MAP) | Key Metabolite |
|-------|---------------------------|----------------|
| Brain | 60-150 mmHg | CO2 (most potent) |
| Kidney | 80-180 mmHg | Myogenic + TGF |
| Heart | 60-140 mmHg | Adenosine |

## Coronary Circulation Regulation
- **Primary regulator**: Local metabolic factors (NOT neural)
- **Adenosine**: Most important coronary vasodilator; released during hypoxia/ischemia
- **O2 demand increases** --> adenosine release --> vasodilation --> increased flow
- **Sympathetic**: Alpha receptors (vasoconstriction) and Beta-2 receptors (vasodilation); net effect is vasodilation due to metabolic override
- **Coronary steal**: Dipyridamole/adenosine dilates normal vessels more than diseased ones, diverting blood AWAY from ischemic areas (used in stress testing)

## Cerebral Circulation Regulation
- **CO2 is the most potent regulator**: 1 mmHg rise in PaCO2 increases CBF by 2-4%
- **Mechanism**: CO2 crosses BBB --> forms H+ --> vasodilation
- **Hyperventilation**: Decreases PaCO2 --> cerebral vasoconstriction --> reduced ICP (used in neurosurgery)
- **O2**: Only significant below PaO2 of 50 mmHg (vasodilation)
- **Neurogenic regulation**: Minimal role; sympathetic mainly protects BBB at high pressures
- **Autoregulation is LOST in**: Stroke, trauma, severe hypotension, chronic hypertension (curve shifts right)

## Pulmonary Hypoxic Vasoconstriction
- **Unique response**: Opposite to systemic vessels (systemic hypoxia causes vasodilation)
- **Mechanism**: Hypoxia inhibits K+ channels in pulmonary smooth muscle --> depolarization --> Ca2+ entry --> contraction
- **Purpose**: Diverts blood from poorly ventilated to well-ventilated alveoli (V/Q matching)
- **Clinical significance**: Global hypoxia (high altitude) causes generalized pulmonary vasoconstriction --> pulmonary hypertension --> right heart failure (cor pulmonale)

## Renal Circulation Mechanisms
- **Tubuloglomerular feedback (TGF)**: Macula densa senses NaCl delivery; high NaCl --> afferent arteriolar constriction via adenosine
- **Myogenic mechanism**: Predominant in autoregulation
- **Prostaglandins (PGE2, PGI2)**: Maintain renal blood flow during stress; NSAIDs block these and can cause renal failure
- **Efferent arteriolar tone**: Controlled by angiotensin II; maintains GFR when renal perfusion drops

## Fetal Circulation (Special Regional Circulation)
- **Three shunts**: Ductus venosus (bypasses liver), Foramen ovale (R to L atrial shunt), Ductus arteriosus (PA to aorta)
- **Pulmonary vascular resistance HIGH** in fetus (lungs not ventilated, hypoxic vasoconstriction)
- At birth: First breath --> lung expansion --> fall in PVR --> closure of shunts
- **PDA closure**: Mediated by rising PaO2 and falling prostaglandins; indomethacin closes PDA, prostaglandin E1 keeps it open`,
        mnemonics: [
          { text: "CO2 Controls Cerebral flow (3 Cs)", explanation: "Carbon dioxide is the most potent regulator of cerebral blood flow; 1 mmHg rise in PaCO2 increases CBF by 2-4%" },
          { text: "Adenosine = A for Coronary Artery dilator", explanation: "Adenosine is the most important metabolic vasodilator in coronary circulation, released during ischemia" }
        ],
        keyPoints: [
          "CO2 is the most potent cerebral vasodilator (hyperventilation reduces ICP)",
          "Adenosine is the primary coronary vasodilator released during ischemia",
          "Pulmonary vessels constrict in hypoxia (opposite of systemic); this matches V/Q ratio",
          "Autoregulation involves myogenic (Bayliss) and metabolic mechanisms",
          "Fetal circulation has three shunts: ductus venosus, foramen ovale, ductus arteriosus",
          "Coronary steal phenomenon is the basis of dipyridamole stress testing"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 21 - Coronary Circulation; Ch 62 - Cerebral Blood Flow", edition: "14th" }, { book: "Ganong", chapter: "Ch 33 - Cardiovascular Regulatory Mechanisms", edition: "26th" }] },

      { layer: 3, slug: "layer-3-clinical", title: "Regional Circulation - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical conditions arising from derangements in regional circulations including coronary artery disease, stroke, portal hypertension, and fetal circulatory abnormalities.",
        contentMd: `# Regional Circulation - Clinical Application

## Coronary Artery Disease
- **Angina pectoris**: Myocardial O2 demand exceeds supply
- **Stable angina**: Predictable chest pain on exertion; relieved by rest or sublingual nitroglycerin
- **Unstable angina**: Rest pain or crescendo pattern; high risk for MI
- **STEMI**: Complete coronary occlusion; ST elevation on ECG; troponin elevated
- **LAD occlusion**: Anterior wall MI (most common, worst prognosis)
- **RCA occlusion**: Inferior wall MI, may cause heart block (supplies AV node in 80-90%)

## Cerebrovascular Disease
- **Stroke**: Sudden focal neurological deficit lasting > 24 hours
- **Ischemic stroke (85%)**: Thrombotic or embolic; middle cerebral artery most commonly affected
- **Hemorrhagic stroke (15%)**: Intracerebral (hypertensive) or subarachnoid (aneurysm at circle of Willis)
- **Transient Ischemic Attack (TIA)**: Resolves within 24 hours; warning sign for stroke
- **Autoregulation shift in chronic HTN**: Curve shifts right; cerebral ischemia occurs at higher MAPs than normal

## Portal Hypertension
- **Definition**: Portal venous pressure > 10 mmHg (normal 5-8 mmHg)
- **Most common cause in India**: Cirrhosis of liver (alcoholic or hepatitis B/C related)
- **Non-cirrhotic cause common in India**: Portal vein thrombosis, hepatic vein obstruction (Budd-Chiari)

### Portosystemic Anastomoses (Sites of collateral formation)

| Site | Systemic Vein | Clinical Manifestation |
|------|--------------|----------------------|
| Lower esophagus | Azygos system | Esophageal varices (hematemesis) |
| Rectum | Internal iliac | Hemorrhoids |
| Umbilicus | Superficial epigastric | Caput medusae |
| Retroperitoneal | Lumbar veins | Retroperitoneal varices |

## Fetal Circulatory Abnormalities
- **Patent Ductus Arteriosus (PDA)**: Continuous machinery murmur; treated with indomethacin (closes PDA) or surgical ligation
- **Persistent Foramen Ovale (PFO)**: Risk of paradoxical embolism
- **Eisenmenger syndrome**: Long-standing L-to-R shunt causes pulmonary hypertension --> reversal to R-to-L shunt --> cyanosis

## High-Altitude Physiology
- Chronic hypoxia --> pulmonary vasoconstriction --> pulmonary hypertension
- **High altitude pulmonary edema (HAPE)**: Non-cardiogenic; treated with descent, O2, nifedipine
- **Chronic mountain sickness (Monge disease)**: Polycythemia, pulmonary HTN, cor pulmonale
- Indian relevance: Common in soldiers posted to Siachen, Ladakh, and other high-altitude areas

> **Clinical Pearl**: In Indian emergency medicine, esophageal variceal bleeding is one of the most common GI emergencies. Initial management includes IV octreotide, endoscopic variceal ligation, and blood transfusion.`,
        mnemonics: [
          { text: "SAVE the varices sites: Stomach/esophagus (lower), Anus (hemorrhoids), Veins around umbilicus (caput medusae), Extra-retroperitoneal", explanation: "Four sites of portosystemic anastomosis where varices form in portal hypertension" },
          { text: "LAD = Leaves Anterior Dead (LAD occlusion causes anterior MI)", explanation: "LAD territory infarction causes anterior wall MI with worst prognosis among coronary occlusions" }
        ],
        keyPoints: [
          "LAD occlusion causes anterior wall MI with worst prognosis",
          "RCA supplies AV node in 80-90%; occlusion can cause heart block",
          "Middle cerebral artery is most commonly affected in ischemic stroke",
          "Esophageal varices are the most dangerous portosystemic anastomosis",
          "PDA has continuous machinery murmur; closed by indomethacin",
          "HAPE treated with descent, oxygen, and nifedipine"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 21 - Coronary Circulation", edition: "14th" }, { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 268 - Ischemic Heart Disease", edition: "21st" }] },

      { layer: 4, slug: "layer-4-exam-prep", title: "Regional Circulation - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield one-liners, comparison tables, and previous year exam themes for regional circulations.",
        contentMd: `# Exam Preparation - Regional Circulation

## One-Liners
- Coronary blood flow occurs mainly during: **Diastole**
- Highest O2 extraction at rest: **Heart (65-70%)**
- Most important coronary vasodilator: **Adenosine**
- Most potent cerebral vasodilator: **CO2**
- Cerebral autoregulation range: **MAP 60-150 mmHg**
- Renal autoregulation range: **MAP 80-180 mmHg**
- Renal blood flow: **1200 mL/min (20-25% of CO)**
- Unique feature of pulmonary vessels: **Hypoxic vasoconstriction**
- Normal pulmonary artery pressure: **25/8 mmHg (mean 15)**
- West zone with best perfusion: **Zone 3 (base of lung)**
- Largest blood reservoir in body: **Splanchnic circulation**
- Three fetal shunts: **Ductus venosus, foramen ovale, ductus arteriosus**
- Drug to close PDA: **Indomethacin**
- Drug to keep PDA open: **PGE1 (Alprostadil)**
- BBB absent at: **Area postrema, median eminence, OVLT**
- Coronary steal used in stress test: **Dipyridamole / Adenosine**

## Comparison: Coronary vs Cerebral vs Renal Circulation

| Feature | Coronary | Cerebral | Renal |
|---------|----------|---------|-------|
| % of CO | 5% | 15% | 20-25% |
| Flow (mL/min) | 250 | 750 | 1200 |
| O2 extraction | 65-70% | 35% | 7-8% |
| Key regulator | Adenosine | CO2 | Myogenic + TGF |
| Autoregulation | 60-140 | 60-150 | 80-180 |

## Comparison: Systemic vs Pulmonary Hypoxic Response

| Feature | Systemic Vessels | Pulmonary Vessels |
|---------|-----------------|-------------------|
| Response to hypoxia | Vasodilation | Vasoconstriction |
| Purpose | Increase O2 delivery | V/Q matching |
| Mechanism | Metabolic vasodilators | K+ channel inhibition |

## Previous Year Question Themes
- Coronary blood flow pattern during cardiac cycle
- Cerebral autoregulation and CO2 response
- Pulmonary hypoxic vasoconstriction mechanism
- Portal hypertension and portosystemic anastomoses
- Fetal circulation shunts and their closure
- Coronary steal phenomenon
- Blood-brain barrier and circumventricular organs`,
        mnemonics: [
          { text: "ACID causes cerebral vasodilation: Adenosine, CO2, Increased H+, Decreased O2", explanation: "Four factors that increase cerebral blood flow through vasodilation" }
        ],
        keyPoints: [
          "Heart has highest O2 extraction (65-70%); flow increase is the only way to meet demand",
          "Coronary flow is maximal in diastole; cerebral regulator is CO2",
          "Pulmonary hypoxic vasoconstriction is opposite to systemic response",
          "Indomethacin closes PDA; PGE1 keeps it open",
          "Renal blood flow is highest per unit weight (20-25% of CO)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 21, 38, 62", edition: "14th" }] },

      { layer: 5, slug: "layer-5-active-recall", title: "Regional Circulation - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on regional circulation concepts.",
        contentMd: `# Active Recall - Regional Circulation

**Q1:** During which phase of the cardiac cycle does coronary blood flow primarily occur?
> Diastole (systolic compression of intramyocardial vessels reduces flow during systole)

**Q2:** What is the most important metabolic vasodilator in the coronary circulation?
> Adenosine (released during hypoxia and ischemia)

**Q3:** Which organ has the highest O2 extraction at rest and what is the value?
> Heart; 65-70% O2 extraction at rest (coronary sinus pO2 only 20 mmHg)

**Q4:** What is the most potent regulator of cerebral blood flow?
> CO2 (PaCO2); 1 mmHg rise increases CBF by 2-4%

**Q5:** What is the autoregulation range for cerebral blood flow?
> MAP 60-150 mmHg

**Q6:** How is pulmonary vascular response to hypoxia different from systemic vessels?
> Pulmonary vessels constrict in hypoxia (systemic vessels dilate); this enables V/Q matching

**Q7:** What percentage of cardiac output goes to the kidneys?
> 20-25% (1200 mL/min) - highest per gram of tissue

**Q8:** Name the three fetal shunts and what they bypass.
> Ductus venosus (bypasses liver), Foramen ovale (R-to-L atrial shunt), Ductus arteriosus (PA to aorta bypass)

**Q9:** What drug closes a PDA and what drug keeps it open?
> Indomethacin (NSAID, inhibits prostaglandins) closes PDA; PGE1 (Alprostadil) keeps it open

**Q10:** Name four sites of portosystemic anastomosis.
> Lower esophagus (esophageal varices), Rectum (hemorrhoids), Umbilicus (caput medusae), Retroperitoneum

**Q11:** What is the coronary steal phenomenon?
> Dipyridamole/adenosine dilates normal coronary vessels more than diseased ones, diverting blood away from ischemic areas; used in pharmacological stress testing

**Q12:** What areas of the brain lack a blood-brain barrier?
> Circumventricular organs: Area postrema, median eminence, OVLT, subfornical organ, pineal gland`,
        mnemonics: [],
        keyPoints: [
          "12 recall questions covering coronary, cerebral, pulmonary, renal, and fetal circulations",
          "Focus on unique features of each regional circulation for NEXT pattern",
          "Practice comparing autoregulation ranges across organs",
          "Draw the fetal circulation with three shunts from memory",
          "Link regional physiology to clinical conditions"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 21, 38, 62", edition: "14th" }] },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PY-MOD-03-TOP-07: Shock & Heart Failure
  // ═══════════════════════════════════════════════════════════════
  {
    topicCode: "PY-MOD-03-TOP-07",
    layers: [
      { layer: 1, slug: "layer-1-foundation", title: "Shock & Heart Failure - Foundation", estimatedMinutes: 20,
        summary: "Shock is a state of inadequate tissue perfusion and cellular hypoxia. Classified into hypovolemic, cardiogenic, distributive, and obstructive types. Heart failure is the inability of the heart to pump sufficient blood to meet metabolic demands.",
        contentMd: `# Shock & Heart Failure - Foundation

## Shock - Definition
**Shock**: A life-threatening condition of circulatory failure resulting in inadequate tissue perfusion and cellular hypoxia. If untreated, leads to multi-organ failure and death.

## Classification of Shock

| Type | Mechanism | Examples |
|------|-----------|---------|
| **Hypovolemic** | Decreased blood volume | Hemorrhage, burns, dehydration, diarrhea |
| **Cardiogenic** | Pump failure | MI, arrhythmias, myocarditis, valvular disease |
| **Distributive** | Vasodilation, maldistribution | Septic, anaphylactic, neurogenic |
| **Obstructive** | Mechanical obstruction to flow | Tension pneumothorax, cardiac tamponade, PE |

## Hemodynamic Parameters in Shock

| Parameter | Hypovolemic | Cardiogenic | Septic (early) | Septic (late) |
|-----------|------------|-------------|----------------|---------------|
| CO | Decreased | Decreased | Increased (warm) | Decreased (cold) |
| SVR | Increased | Increased | Decreased | Increased |
| CVP | Decreased | Increased | Decreased | Variable |
| PCWP | Decreased | Increased | Decreased | Variable |

## Stages of Shock
1. **Compensated (Stage I)**: Baroreceptor activation, tachycardia, vasoconstriction; BP maintained
2. **Progressive (Stage II)**: Compensatory mechanisms failing; lactic acidosis, oliguria
3. **Irreversible (Stage III)**: Multi-organ failure, DIC, cell death; refractory to treatment

## Heart Failure - Definition
**Heart failure**: The heart cannot pump enough blood to meet body's metabolic demands at normal filling pressures. It is NOT a disease but a clinical syndrome.

## Types of Heart Failure

| Classification | Left Heart Failure | Right Heart Failure |
|---------------|-------------------|---------------------|
| Backward failure | Pulmonary congestion | Systemic venous congestion |
| Symptoms | Dyspnea, orthopnea, PND | JVP raised, hepatomegaly, edema |
| Causes | MI, HTN, aortic/mitral disease | Cor pulmonale, MS, left HF |
| X-ray | Pulmonary edema, Kerley B lines | Pleural effusion |

## Systolic vs Diastolic Heart Failure

| Feature | Systolic (HFrEF) | Diastolic (HFpEF) |
|---------|------------------|-------------------|
| Ejection Fraction | < 40% (reduced) | >= 50% (preserved) |
| Mechanism | Impaired contraction | Impaired relaxation/filling |
| Heart size | Dilated | Normal or hypertrophied |
| Common cause | Post-MI, DCM | HTN, HCM, elderly |

## Normal Values
- **Cardiac Output**: 5 L/min
- **Cardiac Index**: 2.5-4.0 L/min/m2
- **Ejection Fraction**: 55-70%
- **CVP**: 2-6 mmHg
- **PCWP**: 6-12 mmHg`,
        mnemonics: [
          { text: "SHOCK types = CHOD: Cardiogenic, Hypovolemic, Obstructive, Distributive", explanation: "Four major categories of circulatory shock classified by mechanism" },
          { text: "LEFT = LUNG (Left heart failure causes Lung congestion)", explanation: "Left ventricular failure leads to pulmonary congestion (backward failure); right failure causes systemic congestion" }
        ],
        keyPoints: [
          "Shock is inadequate tissue perfusion leading to cellular hypoxia",
          "Four types: Hypovolemic, Cardiogenic, Distributive, Obstructive",
          "Early septic shock has HIGH CO and LOW SVR (warm shock)",
          "Left HF causes pulmonary congestion; Right HF causes systemic venous congestion",
          "HFrEF = EF < 40% (systolic); HFpEF = EF >= 50% (diastolic)",
          "Three stages of shock: Compensated, Progressive, Irreversible"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 22 - Cardiac Failure; Ch 24 - Circulatory Shock", edition: "14th" }] },

      { layer: 2, slug: "layer-2-mechanism", title: "Shock & Heart Failure - Mechanism", estimatedMinutes: 30,
        summary: "Pathophysiological mechanisms of compensatory responses in shock, cellular injury in ischemia, the Frank-Starling mechanism in heart failure, and neurohormonal activation including sympathetic and RAAS systems.",
        contentMd: `# Shock & Heart Failure - Mechanisms

## Compensatory Mechanisms in Shock

### 1. Baroreceptor Reflex (Immediate)
- Decreased BP --> decreased baroreceptor firing --> sympathetic activation
- Effects: Tachycardia, vasoconstriction, increased contractility
- Maintains perfusion to brain and heart at expense of skin, gut, kidneys

### 2. Chemoreceptor Activation
- Tissue hypoxia and acidosis stimulate peripheral chemoreceptors
- Increases sympathetic drive and respiratory rate

### 3. Hormonal Responses
- **RAAS activation**: Angiotensin II (vasoconstriction), aldosterone (Na+ retention)
- **ADH release**: Water retention + vasoconstriction (V1 receptors)
- **Catecholamines**: Adrenal medulla releases epinephrine and norepinephrine
- **Cortisol**: Permissive role in vascular responsiveness

### 4. Transcapillary Fluid Shift
- Precapillary vasoconstriction reduces capillary hydrostatic pressure
- Interstitial fluid moves into capillaries (autotransfusion)
- Can restore up to 1 liter of fluid in hemorrhagic shock

## Cellular Mechanisms of Shock Injury
1. **ATP depletion**: Ischemia --> anaerobic glycolysis --> lactic acid production
2. **Na+/K+-ATPase failure**: Cell swelling, intracellular Na+ accumulation
3. **Calcium overload**: Mitochondrial damage, enzyme activation
4. **Free radical generation**: Reperfusion injury (xanthine oxidase pathway)
5. **Inflammatory cascade**: TNF-alpha, IL-1, IL-6, complement activation
6. **DIC**: Endothelial damage --> coagulation cascade --> consumption coagulopathy

## Positive Feedback Loops (Why Shock Becomes Irreversible)
- Cardiac depression --> decreased coronary flow --> more cardiac depression
- Gut ischemia --> bacterial translocation --> sepsis --> more vasodilation
- DIC --> bleeding + thrombosis --> organ failure
- Metabolic acidosis --> decreased cardiac contractility --> worse perfusion

## Heart Failure - Pathophysiology

### Frank-Starling Mechanism
- As preload increases, stroke volume increases (up to optimal sarcomere length of 2.2 micrometers)
- In heart failure: Curve is depressed and shifted to the right
- Increased preload produces diminishing returns; beyond optimal, further stretch decreases SV

### Neurohormonal Activation in Heart Failure
1. **Sympathetic nervous system**
   - Initially compensatory: increases HR and contractility
   - Chronic: Beta-1 receptor downregulation, catecholamine toxicity, arrhythmias

2. **RAAS activation**
   - Angiotensin II: Vasoconstriction, aldosterone, cardiac remodeling (hypertrophy, fibrosis)
   - Aldosterone: Na+/water retention, myocardial fibrosis, K+ loss

3. **ADH**: Water retention --> hyponatremia (poor prognostic sign in HF)

4. **Natriuretic peptides** (counter-regulatory)
   - ANP (atria) and BNP (ventricles): Vasodilation, natriuresis, suppress RAAS
   - **BNP/NT-proBNP**: Used as diagnostic and prognostic biomarker for HF

### Ventricular Remodeling
- Chronic volume overload --> eccentric hypertrophy (sarcomeres added in series, dilated ventricle)
- Chronic pressure overload --> concentric hypertrophy (sarcomeres added in parallel, thick walls)
- Maladaptive remodeling: Progressive dilation, wall thinning, fibrosis --> decompensation

## Specific Shock Mechanisms

### Septic Shock
- Bacterial endotoxin (LPS from gram-negative bacteria) triggers massive inflammatory response
- **NO overproduction** (iNOS): Profound vasodilation, refractory hypotension
- Cytokines (TNF-alpha, IL-1): Myocardial depression, capillary leak
- **Warm shock** (early): High CO, low SVR, warm extremities
- **Cold shock** (late): Low CO, high SVR, cold clammy extremities

### Anaphylactic Shock
- Type I hypersensitivity (IgE-mediated mast cell degranulation)
- Histamine, leukotrienes --> vasodilation, bronchospasm, capillary leak
- Treatment: IM **Epinephrine** (drug of choice), anterolateral thigh

### Neurogenic Shock
- Loss of sympathetic tone (spinal cord injury above T6)
- **Bradycardia + Hypotension** (distinguishes from hypovolemic shock which has tachycardia)
- Warm, dry skin (loss of vasoconstriction and sweating)`,
        mnemonics: [
          { text: "FRANK-STARLING: Filling Right And Naturally Kicks Stroke volume Till Achieving Required Length In Normal Geometry", explanation: "The Frank-Starling law states that increased venous return (preload) stretches cardiac muscle fibers, increasing the force of contraction and stroke volume up to optimal sarcomere length" },
          { text: "Neurogenic shock = BRAD and LOW (BRADycardia + LOW BP) vs Hypovolemic = TACHY and LOW", explanation: "Key distinguishing feature: neurogenic shock has bradycardia due to loss of sympathetic tone, while hypovolemic has reflex tachycardia" }
        ],
        keyPoints: [
          "Transcapillary fluid shift provides autotransfusion of up to 1 liter in hemorrhagic shock",
          "Positive feedback loops make shock irreversible: cardiac depression, gut translocation, DIC",
          "Frank-Starling curve is depressed and shifted right in heart failure",
          "Chronic neurohormonal activation (SNS, RAAS) is initially compensatory but becomes maladaptive",
          "BNP/NT-proBNP is the key biomarker for heart failure diagnosis",
          "Neurogenic shock has bradycardia (vs tachycardia in hypovolemic shock)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 22 - Cardiac Failure; Ch 24 - Circulatory Shock and Its Treatment", edition: "14th" }, { book: "Robbins Pathologic Basis of Disease", chapter: "Ch 4 - Hemodynamic Disorders", edition: "10th" }] },

      { layer: 3, slug: "layer-3-clinical", title: "Shock & Heart Failure - Clinical Application", estimatedMinutes: 20,
        summary: "Clinical presentation, diagnosis, and management of different types of shock and heart failure. Indian clinical context including tropical causes of shock and NYHA classification.",
        contentMd: `# Shock & Heart Failure - Clinical Application

## Clinical Assessment of Shock

### Signs of Shock
- **General**: Tachycardia, hypotension (SBP < 90 mmHg), weak thready pulse
- **Skin**: Cold, clammy, pale (except warm shock in early sepsis/neurogenic)
- **Mental status**: Restlessness --> confusion --> obtundation
- **Urine output**: Oliguria (< 0.5 mL/kg/hr indicates inadequate renal perfusion)
- **Metabolic**: Lactic acidosis (lactate > 2 mmol/L)

### Shock Index
- **Shock Index = HR / SBP** (normal 0.5-0.7)
- Value > 1.0 indicates significant shock
- Simple bedside tool especially useful in Indian peripheral hospitals

## Management Principles

### Hemorrhagic Shock (Most Common Surgical Emergency in India)
- **Class I**: < 15% blood loss; minimal tachycardia, crystalloid replacement
- **Class II**: 15-30%; tachycardia, narrow PP; crystalloid
- **Class III**: 30-40%; tachycardia, hypotension; crystalloid + blood
- **Class IV**: > 40%; profound shock; massive transfusion protocol

### Fluid Resuscitation
- **Crystalloids** (first line): Normal saline, Ringer's lactate
- **3:1 rule**: Replace 3 mL crystalloid for every 1 mL blood lost
- **Colloids**: Albumin, gelatin (limited evidence of superiority)
- Indian context: Ringer's lactate preferred over NS (less hyperchloremic acidosis)

### Septic Shock Management (Surviving Sepsis Campaign)
1. **Hour-1 bundle**: Blood cultures, lactate, broad-spectrum antibiotics, IV fluids (30 mL/kg crystalloid)
2. **Vasopressors**: Norepinephrine (first-line) to target MAP >= 65 mmHg
3. **If refractory**: Add vasopressin, then epinephrine
4. **Hydrocortisone**: For refractory septic shock (200 mg/day IV)
5. Indian context: Dengue shock syndrome is a common cause of distributive shock

### Anaphylactic Shock
- **IM Epinephrine 0.5 mg** (1:1000) into anterolateral thigh - FIRST and MOST IMPORTANT step
- IV fluids, antihistamines, steroids (secondary)
- Observation for biphasic reaction (4-6 hours)

## Heart Failure - Clinical

### NYHA Functional Classification

| Class | Description |
|-------|------------|
| I | No limitation of physical activity |
| II | Slight limitation; comfortable at rest; ordinary activity causes symptoms |
| III | Marked limitation; comfortable at rest; less than ordinary activity causes symptoms |
| IV | Unable to carry out any physical activity without discomfort; symptoms at rest |

### Key Investigations
- **BNP > 100 pg/mL** or **NT-proBNP > 300 pg/mL**: Suggests heart failure
- **Echocardiography**: Gold standard for assessing EF, wall motion, valvular function
- **Chest X-ray**: Cardiomegaly (CTR > 0.5), pulmonary venous congestion, Kerley B lines, pleural effusion

### Heart Failure Treatment (Guideline-Directed Medical Therapy)

| Drug Class | Mechanism | Benefit |
|-----------|-----------|---------|
| ACE inhibitors / ARBs | Reduce afterload, block RAAS | Reduce mortality |
| Beta-blockers (carvedilol, metoprolol, bisoprolol) | Block maladaptive SNS | Reduce mortality |
| Mineralocorticoid antagonists (spironolactone) | Block aldosterone | Reduce mortality |
| ARNI (sacubitril/valsartan) | Enhance natriuretic peptides + block RAAS | Superior to ACEi |
| SGLT2 inhibitors (dapagliflozin) | Reduce preload, cardioprotection | Reduce mortality |
| Diuretics (furosemide) | Reduce congestion | Symptom relief only |
| Digoxin | Positive inotrope | Symptom relief, no mortality benefit |

> **Clinical Pearl**: In Indian practice, rheumatic heart disease remains a significant cause of heart failure in young patients, unlike Western countries where ischemic and hypertensive heart disease predominate. Benzathine penicillin prophylaxis prevents rheumatic recurrence.`,
        mnemonics: [
          { text: "ABCDE of shock management: Airway, Breathing, Circulation (2 large-bore IV), Disability (neuro), Exposure", explanation: "Systematic approach to initial assessment and management of any patient in shock" },
          { text: "Heart failure FOUR pillars: ACEi/ARB/ARNI, Beta-blocker, MRA, SGLT2i (All Block Major Sodium)", explanation: "Four drug classes with proven mortality benefit in HFrEF" }
        ],
        keyPoints: [
          "Shock index (HR/SBP) > 1.0 indicates significant circulatory compromise",
          "Hemorrhagic shock Class III (30-40% loss) is where hypotension first appears",
          "Norepinephrine is first-line vasopressor in septic shock (target MAP >= 65)",
          "IM epinephrine is the first and most important treatment for anaphylaxis",
          "Four pillars of HFrEF: ACEi/ARNI, beta-blocker, MRA, SGLT2i - all reduce mortality",
          "Rheumatic heart disease remains a major cause of HF in young Indians"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 22, 24", edition: "14th" }, { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 252 - Heart Failure", edition: "21st" }] },

      { layer: 4, slug: "layer-4-exam-prep", title: "Shock & Heart Failure - Exam Prep", estimatedMinutes: 15,
        summary: "High-yield one-liners, comparison tables, and previous year themes for shock and heart failure.",
        contentMd: `# Exam Preparation - Shock & Heart Failure

## One-Liners
- Shock definition: **Inadequate tissue perfusion and cellular hypoxia**
- Most common type of shock in trauma: **Hypovolemic (hemorrhagic)**
- Most common cause of cardiogenic shock: **Acute MI**
- Early septic shock has: **High CO, Low SVR (warm shock)**
- Neurogenic shock unique feature: **Bradycardia + Hypotension**
- First-line vasopressor in septic shock: **Norepinephrine**
- Drug of choice for anaphylaxis: **IM Epinephrine (0.5 mg, 1:1000)**
- Irreversible shock positive feedback: **Cardiac depression cycle, gut translocation, DIC**
- HFrEF EF cutoff: **< 40%**
- HFpEF EF cutoff: **>= 50%**
- Best biomarker for HF: **BNP / NT-proBNP**
- Gold standard for HF diagnosis: **Echocardiography**
- Poor prognostic marker in HF: **Hyponatremia (dilutional, from excess ADH)**
- Frank-Starling optimal sarcomere length: **2.2 micrometers**
- Class IV NYHA: **Symptoms at rest**
- Shock index: **HR / SBP; > 1.0 = significant shock**

## Comparison: Types of Shock

| Feature | Hypovolemic | Cardiogenic | Septic (early) | Neurogenic |
|---------|------------|-------------|----------------|------------|
| HR | Increased | Increased | Increased | Decreased |
| BP | Decreased | Decreased | Decreased | Decreased |
| CO | Decreased | Decreased | Increased | Decreased |
| SVR | Increased | Increased | Decreased | Decreased |
| Skin | Cold, clammy | Cold, clammy | Warm, flushed | Warm, dry |
| JVP | Low | High | Low | Low |

## Comparison: Systolic vs Diastolic Heart Failure

| Feature | HFrEF (Systolic) | HFpEF (Diastolic) |
|---------|------------------|-------------------|
| EF | < 40% | >= 50% |
| Problem | Impaired contraction | Impaired relaxation |
| Heart size | Dilated | Normal/hypertrophied |
| S3 gallop | Common | Uncommon |
| S4 gallop | Uncommon | Common |
| Common cause | MI, DCM | HTN, HCM, elderly |
| Drug therapy | ACEi/ARNI, BB, MRA, SGLT2i | Control BP, diuretics, SGLT2i |

## Hemorrhagic Shock Classification

| Class | Blood Loss | HR | BP | Mental Status |
|-------|-----------|-----|-----|--------------|
| I | < 15% (< 750 mL) | Normal | Normal | Slightly anxious |
| II | 15-30% (750-1500) | > 100 | Normal | Anxious |
| III | 30-40% (1500-2000) | > 120 | Decreased | Confused |
| IV | > 40% (> 2000) | > 140 | Very low | Lethargic |

## Previous Year Question Themes
- Classification and hemodynamic parameters of different shock types
- Compensatory mechanisms in hemorrhagic shock
- Frank-Starling mechanism and its failure in HF
- RAAS and neurohormonal activation in heart failure
- Differences between cardiogenic and septic shock
- NYHA classification
- Management of septic shock and anaphylaxis`,
        mnemonics: [
          { text: "Class III = THIRTY percent blood loss = THIRTY percent chance of dying without blood", explanation: "Hemorrhagic shock class III begins at 30% blood loss; this is when hypotension appears and blood transfusion becomes necessary" }
        ],
        keyPoints: [
          "Neurogenic shock = bradycardia (key differentiator from other shock types)",
          "Hemorrhagic shock Class III = 30-40% blood loss = first time BP drops",
          "HFrEF (EF < 40%) has four mortality-reducing drug classes",
          "Hyponatremia is a poor prognostic marker in heart failure",
          "Early septic shock = warm shock (high CO, low SVR)"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 22, 24", edition: "14th" }] },

      { layer: 5, slug: "layer-5-active-recall", title: "Shock & Heart Failure - Active Recall", estimatedMinutes: 10,
        summary: "Flashcard-style Q&A for self-testing on shock and heart failure concepts.",
        contentMd: `# Active Recall - Shock & Heart Failure

**Q1:** Define shock.
> A state of inadequate tissue perfusion resulting in cellular hypoxia; if untreated leads to multi-organ failure and death

**Q2:** Name the four types of shock with one example each.
> Hypovolemic (hemorrhage), Cardiogenic (MI), Distributive (sepsis/anaphylaxis), Obstructive (cardiac tamponade)

**Q3:** What are the hemodynamic findings in early septic shock?
> High CO, low SVR, warm flushed skin (warm shock); low CVP; tachycardia

**Q4:** How does neurogenic shock differ from hypovolemic shock?
> Neurogenic: bradycardia + hypotension + warm dry skin (loss of sympathetic tone). Hypovolemic: tachycardia + hypotension + cold clammy skin

**Q5:** What is the 3:1 rule in fluid resuscitation?
> Replace 3 mL of crystalloid for every 1 mL of blood lost

**Q6:** What is the first-line vasopressor in septic shock?
> Norepinephrine; target MAP >= 65 mmHg

**Q7:** What is the drug of choice for anaphylactic shock?
> IM Epinephrine 0.5 mg (1:1000) into anterolateral thigh

**Q8:** State the Frank-Starling law.
> Increased preload (venous return) stretches cardiac muscle, increasing force of contraction and stroke volume, up to optimal sarcomere length of 2.2 micrometers

**Q9:** How does the Frank-Starling curve change in heart failure?
> The curve is depressed (lower SV for any given preload) and shifted to the right (higher filling pressures needed)

**Q10:** What are the four drug classes with mortality benefit in HFrEF?
> ACE inhibitors/ARNI, Beta-blockers (carvedilol/metoprolol/bisoprolol), Mineralocorticoid antagonists (spironolactone), SGLT2 inhibitors (dapagliflozin/empagliflozin)

**Q11:** What is the ejection fraction cutoff for HFrEF vs HFpEF?
> HFrEF: EF < 40% (reduced); HFpEF: EF >= 50% (preserved); EF 40-49% = HFmrEF (mildly reduced)

**Q12:** At what class of hemorrhagic shock does hypotension first appear?
> Class III (30-40% blood volume loss, 1500-2000 mL)

**Q13:** What is shock index and what value indicates significant shock?
> Shock Index = HR / SBP; value > 1.0 indicates significant circulatory compromise`,
        mnemonics: [],
        keyPoints: [
          "13 recall questions covering shock classification, mechanisms, management, and heart failure",
          "Focus on hemodynamic parameter differences between shock types",
          "Practice classifying hemorrhagic shock by percentage blood loss",
          "Know the four-pillar HFrEF therapy",
          "Understand compensatory mechanisms and why they become maladaptive"
        ],
        textbookRefs: [{ book: "Guyton & Hall", chapter: "Ch 22, 24", edition: "14th" }] },
    ],
  },
];
