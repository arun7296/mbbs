// Remaining 13 topics for batch 6 - IM, MI, OG, OP, OR, PH, PS, PY modules
export const batch6Remaining = [
  {
    topicCode: "IM-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "heart-failure-foundation",
        title: "Heart Failure - Foundation",
        estimatedMinutes: 20,
        summary: "Classification and epidemiology of heart failure in India",
        contentMd: "# Heart Failure - Foundation\n\n## Definition\n**Heart Failure (HF)**: Inability of heart to pump enough blood to meet body's metabolic demands OR requires elevated filling pressures.\n\n## Prevalence in India\n- **Incidence**: 1-2 per 1000 population/year\n- **Prevalence**: 20-40 million Indians (estimated)\n- **Mortality**: Leading cause of hospitalization in elderly\n- **Major causes**: Hypertension (60%), CAD (40%), Diabetes\n\n## Classification by LVEF\n\n### HFrEF (Reduced Ejection Fraction)\n- **LVEF**: ≤40%\n- **Prevalence**: 50-60% of HF cases\n- **Pathology**: Systolic dysfunction\n- **Prognosis**: Worse than HFpEF\n\n### HFmrEF (Mildly Reduced)\n- **LVEF**: 41-49%\n- **New category**: Recognized in 2021 guidelines\n- **Intermediate prognosis**\n\n### HFpEF (Preserved Ejection Fraction)\n- **LVEF**: ≥50%\n- **Pathology**: Diastolic dysfunction\n- **Prevalence**: Increasing (50-70% in India)\n- **Associated with**: Hypertension, diabetes, obesity\n\n## Classification by Acuity\n\n### Acute Decompensated HF\n- New onset or worsening\n- Pulmonary edema/cardiogenic shock\n- Medical emergency\n\n### Chronic HF\n- Stable symptoms\n- Long-term management\n\n## NYHA Functional Classification\n- **Class I**: No symptoms, normal activity\n- **Class II**: Symptoms with strenuous activity\n- **Class III**: Symptoms with mild activity\n- **Class IV**: Symptoms at rest\n\n## Major Causes (India)\n1. **Hypertension**: 60% (leading preventable cause)\n2. **CAD**: 40% (post-MI)\n3. **Dilated cardiomyopathy**: Idiopathic, viral, toxic\n4. **Rheumatic heart disease**: Still common in India\n5. **Peripartum cardiomyopathy**: In women\n6. **Diabetes**: Diabetic cardiomyopathy\n7. **Arrhythmias**: AF, persistent tachycardia",
        mnemonics: [
          {
            text: "HF CLASSIFICATION BY LVEF",
            explanation: "HFpEF: ≥50% (diastolic), HFmrEF: 41-49% (intermediate), HFrEF: ≤40% (systolic)"
          },
          {
            text: "MAJOR CAUSES IN INDIA (HCD)",
            explanation: "H-Hypertension(60%), C-CAD(40%), D-Dilated cardiomyopathy"
          }
        ],
        keyPoints: [
          "HFpEF increasingly common in India (50-70%)",
          "Hypertension most common cause",
          "LVEF ≤40% = systolic, ≥50% = diastolic",
          "NYHA Class: Symptom-based functional assessment",
          "Peripartum cardiomyopathy: Women specific risk"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 420 on Heart Failure", edition: "20th" },
          { book: "API Textbook of Medicine", chapter: "Ch on Heart Failure", edition: "11th" },
          { book: "2018 ACC/AHA/HFSA Heart Failure Guidelines", chapter: "Full document", edition: "2018" }
        ]
      },
      {
        layer: 2,
        slug: "heart-failure-mechanism",
        title: "Heart Failure - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of systolic and diastolic heart failure",
        contentMd: "# Heart Failure - Mechanism\n\n## Systolic Dysfunction (HFrEF) Pathophysiology\n\n### Primary Defect\n- **Myocardial damage**: From MI, inflammation, hypertension\n- **Loss of contractile tissue**: Leads to ↓ LVEF\n- **Chamber dilatation**: Eccentric hypertrophy\n- **Reduced cardiac output**: ↓ Stroke volume\n\n### Compensatory Mechanisms\n\n**Initially Helpful**\n1. **Frank-Starling**: ↑ stretch → ↑ contractility\n2. **Sympathetic activation**: ↑ HR, ↑ contractility\n3. **RAAS activation**: ↑ vasoconstriction, ↑ preload\n4. **Neurohormonal**: ANP, BNP release\n\n**Eventually Harmful**\n- Excessive sympathetic → arrhythmias\n- Excessive RAAS → fluid retention\n- Renin-angiotensin-aldosterone-sympathetic → vicious cycle\n- Progressive remodeling\n\n### Molecular Changes\n- **Myocardial apoptosis**: Programmed cell death\n- **Collagen deposition**: Interstitial fibrosis\n- **Myocyte hypertrophy**: Cells enlarge but don't contract well\n- **Mitochondrial dysfunction**: ↓ ATP production\n\n## Diastolic Dysfunction (HFpEF) Pathophysiology\n\n### Primary Defect\n- **Impaired relaxation**: LV cannot relax normally\n- **Increased stiffness**: From fibrosis, hypertrophy\n- **Restrictive physiology**: ↑ filling pressures\n- **Normal systolic function**: LVEF preserved\n\n### Mechanisms\n1. **Myocardial stiffening**: Collagen, titin modifications\n2. **Delayed relaxation**: Impaired calcium handling\n3. **Chamber stiffness**: Ventricular remodeling\n4. **Atrial dysfunction**: Loss of atrial kick\n\n### Common in\n- **Hypertension**: LVH → stiffness\n- **Diabetes**: Glycosylation of proteins\n- **Obesity**: Adipose tissue inflammation\n- **Elderly**: Age-related collagen changes\n\n## HF Progression Model\n\n### Stage A: At Risk\n- No structural disease\n- Risk factors present (HTN, DM, smoking)\n\n### Stage B: Asymptomatic\n- Structural disease present (LVH, previous MI)\n- No symptoms\n\n### Stage C: Symptomatic\n- Structural disease + symptoms\n- HFrEF or HFpEF\n\n### Stage D: Advanced\n- Refractory symptoms\n- Requires specialized interventions\n\n## Acute Decompensation Triggers\n- **Ischemia**: New MI\n- **Infection**: Pneumonia, sepsis\n- **Arrhythmias**: AF, SVT\n- **Medication non-compliance**: Especially diuretics\n- **Dietary Na+**: Salt intake\n- **Anemia**: ↓ O2 carrying\n- **Thyroid disease**: Hyper/hypothyroidism\n- **Renal failure**: ↓ Na+ excretion\n\n## Hemodynamic Categories\n- **Warm-dry**: Normal perfusion, no congestion (best)\n- **Warm-wet**: No perfusion problem, congestion (diuretics)\n- **Cold-dry**: Low perfusion, no congestion (inotropes)\n- **Cold-wet**: Low perfusion + congestion (diuretics + inotropes)\n\n## Biomarkers\n- **BNP/NT-proBNP**: Released when ventricle stretched\n- **Troponin**: Indicates myocardial injury\n- **Galectin-3**: Fibrosis marker\n- **hs-CRP**: Inflammation",
        mnemonics: [
          {
            text: "SYSTOLIC vs DIASTOLIC",
            explanation: "S-Systolic: Reduced EF, poor contraction, dilated; D-Diastolic: Preserved EF, stiff, filling problem"
          },
          {
            text: "COMPENSATION (Helpful→Harmful)",
            explanation: "F-Frank-Starling helpful initially, S-Sympathetic becomes harmful, R-RAAS vicious cycle"
          },
          {
            text: "HF STAGES (ABCD)",
            explanation: "A-At risk, B-asymptomatic Structural disease, C-Symptomatic, D-refractory"
          }
        ],
        keyPoints: [
          "HFrEF: Systolic dysfunction, reduced contractility",
          "HFpEF: Diastolic dysfunction, increased stiffness",
          "Compensatory mechanisms eventually become harmful",
          "Neurohormonal activation drives progression",
          "Stage-based approach guides treatment"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 420-421", edition: "20th" },
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "Ch on Cardiac pathology", edition: "10th" },
          { book: "2018 ACC/AHA/HFSA Heart Failure Guidelines", chapter: "Pathophysiology section", edition: "2018" }
        ]
      },
      {
        layer: 3,
        slug: "heart-failure-clinical",
        title: "Heart Failure - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical presentation, diagnosis, and management of heart failure",
        contentMd: "# Heart Failure - Clinical\n\n## Clinical Presentation\n\n### Acute Decompensated HF\n- **Orthopnea**: Breathlessness lying flat\n- **PND**: Paroxysmal nocturnal dyspnea\n- **Dyspnea on exertion**: Limiting activity\n- **Rales/crackles**: On auscultation\n- **Pulmonary edema**: Frothy sputum\n\n### Chronic HF Symptoms\n- **Dyspnea**: With exertion (NYHA Class)\n- **Fatigue**: From low CO\n- **Edema**: Peripheral, sacral\n- **Weight gain**: From fluid retention\n- **Palpitations**: From AF or arrhythmias\n\n### Physical Examination\n- **Elevated JVP**: Sign of right heart failure\n- **Hepatomegaly**: From venous congestion\n- **Pulmonary rales**: From pulmonary edema\n- **Gallop rhythm**: S3 (ventricular) or S4 (atrial)\n- **Cardiomegaly**: Displaced PMI\n\n## Diagnosis\n\n### Natriuretic Peptides\n- **BNP**: >100 pg/mL suggests HF\n- **NT-proBNP**: >125 pg/mL suggests HF\n- **High sensitivity**: For ruling out HF (negative predictive value)\n- **Not specific**: Can be elevated in other conditions\n\n### Echocardiography (Gold Standard)\n- **LVEF**: Quantifies systolic function\n- **Wall motion**: Regional vs global\n- **Diastolic function**: Grade 0-4\n- **Atrial volume**: Indices\n- **RV function**: Often affected\n- **Valve function**: Mitral/tricuspid regurgitation common\n\n### ECG\n- **May be normal**: Especially HFpEF\n- **Common findings**: LVH, LBBB, AF\n- **Old MI**: Q waves\n- **Arrhythmias**: AF most common\n\n### Imaging\n- **Chest X-ray**: Pulmonary edema, cardiomegaly\n- **Cardiac MRI**: For infiltrative disease, viability\n\n### BNP Cutoff Values\n- **Normal**: <100 pg/mL (BNP) or <125 pg/mL (NT-proBNP)\n- **Mild elevation**: 100-500 (consider HF)\n- **Significant**: >500 (HF likely)\n- **Age adjustment**: Elderly may have higher normal\n\n## Management: Lifestyle Modifications\n- **Sodium restriction**: <2g/day\n- **Fluid restriction**: <2L/day (if SIADH)\n- **Exercise**: Aerobic exercise improves outcomes\n- **Weight management**: Target BMI 22-27\n- **Medication adherence**: Critical\n- **Alcohol avoidance**: Can be cardiotoxic\n- **Vaccination**: Influenza, pneumococcal\n\n## Pharmacotherapy for HFrEF\n\n### First-Line Agents (All Should Be Used)\n\n**ACE-I or ARB** (Foundational)\n- **Drug**: Lisinopril, ramipril, losartan\n- **Dose**: Target high dose\n- **Benefit**: ↓ mortality 15-20%\n\n**Beta-Blocker** (Foundational)\n- **Drug**: Carvedilol, metoprolol CR, bisoprolol\n- **Dose**: Target high dose\n- **Benefit**: ↓ mortality 25-30%\n\n**MRA** (Aldosterone Antagonist)\n- **Drug**: Spironolactone, eplerenone\n- **Benefit**: ↓ mortality additional 20%\n- **Caution**: Hyperkalemia risk\n\n### SGLT-2 Inhibitor (NEW - Cardioprotective)\n- **Drug**: Dapagliflozin, empagliflozin\n- **Benefit**: ↓ HF hospitalizations, mortality\n- **Works**: In HFrEF and HFpEF\n- **Use**: Now recommended for all HF types\n\n### Diuretics\n- **Furosemide**: For fluid overload\n- **Dose titration**: Based on volume status\n- **Caution**: Over-diuresis worsens renal function\n\n### Ivabradine\n- **Indication**: HFrEF with HR >70 on max beta-blocker\n- **Mechanism**: Selective If channel inhibitor\n- **Benefit**: ↓ hospitalizations, improves symptoms\n\n### Valsartan/Sacubitril (ARNI)\n- **Newer**: Angiotensin receptor-neprilysin inhibitor\n- **Superior**: To ACE-I/ARB alone\n- **Use**: First-line in many HFrEF\n- **Benefit**: ↓ mortality, hospitalizations\n\n## Management of HFpEF\n- **No proven mortality benefit drugs**: ACE-I, ARB, beta-blocker improve symptoms\n- **SGLT-2 inhibitors**: Show promise\n- **Diuretics**: For congestion\n- **BP control**: Critical (target <130/80)\n- **Rate control**: If AF present\n- **Treat comorbidities**: DM, HTN, obesity\n\n## Acute Decompensation Management\n\n### Acute Pulmonary Edema (Emergency)\n1. **Oxygen**: To maintain SpO2 >90%\n2. **Diuretics**: IV furosemide 40-80 mg, repeat\n3. **Vasodilators**: Nitrates, IV nitroprusside\n4. **Inotropes**: If low CO (dobutamine, milrinone)\n5. **NIV**: CPAP/BiPAP if respiratory distress\n6. **Monitoring**: Continuous cardiac monitoring\n\n### Cardiogenic Shock\n- **Low perfusion**: Cool extremities, oliguria\n- **Management**:\n  - **Inotropes**: Dobutamine or milrinone\n  - **Vasopressors**: Norepinephrine if MAP <60\n  - **IABP**: If available\n  - **Mechanical support**: ECMO/VAD if refractory\n\n## Prognosis\n- **HFrEF**: 50% mortality in 4 years if untreated\n- **Modern therapy**: Markedly improved (40-50% 5-year survival)\n- **HFpEF**: Better prognosis but still significant mortality\n- **Stage D**: Very poor prognosis; consider advanced therapies",
        mnemonics: [
          {
            text: "HFrEF MEDICATIONS (Remember Order)",
            explanation: "A-ACE-I/ARB, B-Beta-blocker, M-MRA, S-SGLT-2i, D-Diuretics (all should be used)"
          },
          {
            text: "ACUTE PE MANAGEMENT (DONV)",
            explanation: "D-Diuretics (IV furosemide), O-Oxygen, N-Nitrates, V-Vasopressors if shock"
          }
        ],
        keyPoints: [
          "All HFrEF need quadruple therapy (ACE/ARB, BB, MRA, SGLT-2i)",
          "BNP/NT-proBNP: Screening test",
          "Echo: Gold standard diagnosis",
          "Fluid restriction <2L/day",
          "ACE-I: Mortality ↓ 15-20%, BB: ↓ 25-30%"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 420-421", edition: "20th" },
          { book: "API Textbook of Medicine", chapter: "Ch on Heart Failure", edition: "11th" },
          { book: "2018 ACC/AHA/HFSA Heart Failure Guidelines", chapter: "Management section", edition: "2018" }
        ]
      },
      {
        layer: 4,
        slug: "heart-failure-exam",
        title: "Heart Failure - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and exam patterns for heart failure",
        contentMd: "# Heart Failure - Exam Prep\n\n## High-Yield Facts\n- **HFpEF**: Now 50-70% of HF in India (increasing)\n- **BNP normal**: <100 pg/mL\n- **ARNI (Sacubitril/Valsartan)**: Superior to ACE-I/ARB\n- **SGLT-2i**: Works in both HFrEF and HFpEF\n- **Beta-blockers**: ↓ mortality 25-30%\n\n## Comparison: HFrEF vs HFpEF\n\n| Feature | HFrEF | HFpEF |\n|---------|-------|-------|\n| LVEF | ≤40% | ≥50% |\n| Pathology | Systolic | Diastolic |\n| Prevalence | 40-50% | 50-70% (India) |\n| Cause | CAD, cardiomyopathy | HTN, DM, obesity |\n| Mortality benefit drugs | Yes (ACE/ARB, BB) | No (symptomatic only) |\n| SGLT-2i benefit | Yes | Yes (new) |\n\n## Stages of HF (ABCD)\n\n| Stage | Features | Risk Factors | Treatment |\n|-------|----------|--------------|----------|\n| A | At risk | HTN, DM, CAD | Modify risk factors |\n| B | Structural disease | LVH, prior MI | ACE/ARB consideration |\n| C | Symptomatic | Dyspnea, fatigue | Full HF therapy |\n| D | Advanced/refractory | Persistent symptoms | Mechanical support |\n\n## Exam-Style Questions\n\n**Q: 45-year-old with HTN x 15 years, now dyspnea. LVEF 35%, Echo shows dilated LV. First-line drug?**\nA: Lisinopril/Enalapril (ACE-I); target high dose. Add beta-blocker (carvedilol). Add MRA (spironolactone) & SGLT-2i.\n\n**Q: BNP level that suggests HF?**\nA: >100 pg/mL (BNP) or >125 pg/mL (NT-proBNP); negative value rules out HF.\n\n**Q: 65-year-old NYHA Class IV, on maximal medical therapy, still symptomatic. What to consider?**\nA: Stage D disease; consider advanced therapies (CRT, ICD, VAD, transplant evaluation).\n\n**Q: Mechanism of SGLT-2 inhibitor benefit in HF.**\nA: ↓ myocardial stiffness, ↓ inflammation, improves diastolic function (works in HFrEF & HFpEF).\n\n## Drug Classes & Mortality Reduction\n\n| Drug Class | Mortality ↓ | LVEF | HFpEF |\n|------------|-----------|------|-------|\n| ACE-I | 15-20% | Yes | No |\n| Beta-blocker | 25-30% | Yes | No |\n| MRA | 20% | Yes | Limited |\n| ARB | Similar to ACE-I | Yes | No |\n| SGLT-2i | 20% | Yes | Yes |\n| Ivabradine | Symptom only | Yes | ? |\n\n## BNP Interpretation\n- **<100**: Normal, HF unlikely\n- **100-500**: Borderline, need echo\n- **>500**: HF very likely\n- **Age-dependent**: Elderly have higher cutoffs\n- **Obesity**: Lower BNP (per kg basis)",
        mnemonics: [
          {
            text: "EXAM BOARD: TREATMENT HIERARCHY",
            explanation: "HFrEF: ACE/ARB→BB→MRA→SGLT-2i (all); HFpEF: symptomatic + control HTN/DM"
          }
        ],
        keyPoints: [
          "HFpEF now majority in India",
          "BNP: <100 normal, >500 HF likely",
          "ARNI superior to ACE-I",
          "SGLT-2i: All HF types",
          "Quad therapy: All HFrEF patients"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 420-421", edition: "20th" },
          { book: "NEET PG Cardiology MCQs", chapter: "Heart Failure section", edition: "2024" },
          { book: "2018 ACC/AHA/HFSA Heart Failure Guidelines", chapter: "Full document", edition: "2018" }
        ]
      },
      {
        layer: 5,
        slug: "heart-failure-recall",
        title: "Heart Failure - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall flashcards for heart failure essentials",
        contentMd: "# Heart Failure - Active Recall\n\n## Flashcard Q&A\n\n**Q1: Define heart failure and two types by LVEF.**\nA: Inability of heart to pump blood to meet metabolic demands. HFrEF: LVEF ≤40% (systolic); HFpEF: LVEF ≥50% (diastolic).\n\n**Q2: What is HFpEF and why is it increasing in India?**\nA: Preserved ejection fraction with diastolic dysfunction. Increasing due to aging, hypertension, diabetes, obesity prevalence.\n\n**Q3: Most common cause of HF in India.**\nA: Hypertension (60%), followed by CAD (40%).\n\n**Q4: BNP normal value and what elevation suggests HF.**\nA: Normal: <100 pg/mL (BNP) or <125 pg/mL (NT-proBNP). >100 suggests HF; >500 highly likely HF.\n\n**Q5: What are the 4 drugs ALL HFrEF patients should receive?**\nA: (1) ACE-I/ARB, (2) Beta-blocker, (3) MRA (aldosterone antagonist), (4) SGLT-2 inhibitor.\n\n**Q6: Mortality reduction with ACE-I, beta-blocker, and MRA.**\nA: ACE-I: 15-20%, Beta-blocker: 25-30%, MRA: 20% (cumulative benefit).\n\n**Q7: What is ARNI and why is it better than ACE-I?**\nA: Angiotensin Receptor-Neprilysin Inhibitor (sacubitril/valsartan); provides additional mortality benefit vs ACE-I alone.\n\n**Q8: SGLT-2 inhibitors: Which HF types benefit?**\nA: Both HFrEF and HFpEF benefit (newer finding); ↓ HF hospitalizations, mortality.\n\n**Q9: NYHA Classes: Symptom relationship.**\nA: Class I (no symptoms, normal activity); Class II (symptoms with exertion); Class III (symptoms with mild activity); Class IV (symptoms at rest).\n\n**Q10: Main lifestyle modification in HF.**\nA: Sodium restriction (<2g/day), fluid restriction (<2L/day), regular aerobic exercise, smoking cessation.",
        mnemonics: [
          {
            text: "HF DRUGS: \"ABMS\" or \"BASS\"",
            explanation: "A-ACE/ARB, B-Beta-blocker, M-MRA, S-SGLT-2i; all needed in HFrEF"
          }
        ],
        keyPoints: [
          "HFrEF: LVEF ≤40%; needs quadruple therapy",
          "HFpEF: LVEF ≥50%; increasing prevalence",
          "BNP normal <100; HF likely >500",
          "Beta-blockers: Largest mortality benefit",
          "SGLT-2i: Works in both HFrEF & HFpEF"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch 420-421", edition: "20th" },
          { book: "API Textbook of Medicine", chapter: "Ch on Heart Failure", edition: "11th" }
        ]
      }
    ]
  },
  {
    topicCode: "IM-MOD-02-TOP-05",
    layers: [
      {
        layer: 1,
        slug: "pleural-effusion-pneumothorax-foundation",
        title: "Pleural Effusion & Pneumothorax - Foundation",
        estimatedMinutes: 20,
        summary: "Anatomy and classification of pleural diseases",
        contentMd: "# Pleural Effusion & Pneumothorax - Foundation\n\n## Pleural Anatomy\n- **Visceral pleura**: Covers lung surface\n- **Parietal pleura**: Covers chest wall\n- **Pleural space**: Potential space with 15-20 mL fluid (lubricant)\n- **Normal pressure**: Negative (intrapleural pressure -5 to -10 cm H2O)\n\n## Pleural Effusion Definition\n**Abnormal accumulation of fluid in pleural space (>20 mL clinically significant).**\n\n## Classification: Transudative vs Exudative\n\n### Transudative (Filtrate)\n- **Light's criteria**: <25% meet exudative criteria\n- **Mechanisms**: ↑ hydrostatic pressure OR ↓ oncotic pressure\n- **Causes**: CHF, cirrhosis, nephrotic syndrome, malnutrition\n- **Sterile**: No inflammation\n- **Fluid character**: Clear, low protein (<2.5 g/dL)\n\n### Exudative (Inflammatory)\n- **Light's criteria**: ≥1 of: LDH>200, protein>3g/dL, LDH>2/3 serum\n- **Causes**: Infection (pneumonia, TB), malignancy, PE, pancreatitis\n- **Character**: Cloudy, high protein (>3 g/dL)\n- **Often requires treatment**: Underlying cause\n\n## Pneumothorax Definition\n**Air in pleural space causing lung collapse.**\n\n## Classification of Pneumothorax\n\n### Spontaneous\n- **Primary**: No underlying lung disease (young, tall males, smoking)\n- **Secondary**: From underlying lung disease (COPD, TB, CF, bullae)\n\n### Traumatic\n- From chest trauma, iatrogenic (central line, chest tube insertion)\n\n### Tension Pneumothorax\n- **Emergency**: Air enters but cannot exit\n- **Progressive collapse** with hemodynamic compromise\n- **Needs immediate decompression**\n\n## Size Classification of Pneumothorax\n- **Small**: <2 cm on CXR (apex to chest wall distance)\n- **Large**: ≥2 cm\n\n## Prevalence\n- **PE**: 0.5-5% incidence; 2nd most common cause of death in PE\n- **Pneumothorax**: 20-24 per 100,000/year\n- **India**: TB-related pleural disease very common",
        mnemonics: [
          {
            text: "TRANSUDATIVE CAUSES (CHF-LICK)",
            explanation: "C-CHF, L-Liver cirrhosis, I-Idiopathic edema, C-CKD/Nephrotic, K-Kidney"
          },
          {
            text: "LIGHT'S CRITERIA (Exudative if ≥1)",
            explanation: "Protein>3g/dL, LDH>200, or LDH>2/3 serum LDH"
          }
        ],
        keyPoints: [
          "Normal pleural fluid <20 mL",
          "Light's criteria: Best discrimination transudative vs exudative",
          "Exudative requires treatment of underlying cause",
          "Pneumothorax: Young males at risk",
          "Tension pneumothorax: Life-threatening emergency"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch on Pleural disease", edition: "20th" },
          { book: "API Textbook of Medicine", chapter: "Ch on Respiratory", edition: "11th" }
        ]
      },
      {
        layer: 2,
        slug: "pleural-effusion-pneumothorax-mechanism",
        title: "Pleural Effusion & Pneumothorax - Mechanism",
        estimatedMinutes: 30,
        summary: "Pathophysiology of pleural effusion and pneumothorax",
        contentMd: "# Pleural Effusion & Pneumothorax - Mechanism\n\n## Transudative Effusion Pathophysiology\n\n### ↑ Hydrostatic Pressure\n- **CHF**: Elevated right atrial pressure → venous congestion\n- **Mechanism**: Fluid filters from parietal pleura capillaries\n- **Result**: Clear, protein-poor fluid accumulates\n\n### ↓ Oncotic Pressure\n- **Liver cirrhosis**: ↓ albumin synthesis\n- **Nephrotic**: Urinary albumin loss\n- **Malnutrition**: Insufficient protein intake\n- **Mechanism**: Osmotic pressure gradient favors transudation\n\n## Exudative Effusion Pathophysiology\n\n### Infectious\n- **Pneumonia (Parapneumonic)**: Spread from consolidated lung\n- **TB pleuritis**: Hypersensitivity to Mycobacterium\n- **Mechanism**: Inflammation → vascular permeability ↑\n- **Result**: Protein-rich, inflammatory fluid\n\n### Malignancy\n- **Direct invasion**: Tumor in pleura\n- **Lymphatic obstruction**: ↓ fluid reabsorption\n- **Mechanism**: Inflammation, blocked drainage\n\n### Pulmonary Embolism\n- **Infarction**: Lung tissue death from occlusion\n- **Mechanism**: Inflammation from tissue necrosis\n- **Character**: Often hemorrhagic (blood-stained)\n\n## Pneumothorax Mechanics\n\n### Primary Spontaneous\n- **Bullae rupture**: Air escapes from alveoli\n- **Mechanism**: Subpleural blebs burst → air enters pleural space\n- **Result**: Lung collapses as pleural pressure becomes positive\n\n### Secondary Spontaneous\n- **Underlying disease**: COPD (bullae), TB (cavity rupture), CF\n- **Mechanism**: Disease-related tissue weakness\n\n### Tension Pneumothorax\n- **Check-valve mechanism**: Air enters pleura but cannot exit\n- **Progressive accumulation**: Intrapleural pressure becomes increasingly positive\n- **Hemodynamic effects**: \n  - ↓ venous return to heart\n  - ↓ cardiac output\n  - Hypotension, shock\n  - Cardiovascular collapse\n- **Mediastinal shift**: Trachea deviates, kinks vessels\n\n## Pleural Fluid Dynamics\n\n### Normal Equilibrium\n- **Starling forces**: Hydrostatic vs oncotic gradients\n- **Formation**: 5-10 mL/day filtered from parietal pleura\n- **Reabsorption**: Via visceral pleura lymphatics\n- **Pressure**: Pleural pressure -5 to -10 cm H2O\n\n### In Effusion\n- **Formation ↑**: From inflammation, ↑ capillary permeability\n- **Reabsorption ↓**: From lymphatic obstruction\n- **Net result**: Fluid accumulates\n\n## Collapse Index\n- **Lung collapse**: Volume ∝ amount of air, pleural pressure\n- **Small pneumothorax**: May have minimal symptoms\n- **Large pneumothorax**: Significant dyspnea\n\n## Inflammatory Cascade (Exudative)\n- **Infection/injury**: Activates immune system\n- **Cytokine release**: IL-6, TNF-α, IL-8\n- **Neutrophil infiltration**: PMN cells predominate\n- **Increased vascular permeability**: Protein leaks into pleura\n- **Result**: Exudative fluid",
        mnemonics: [
          {
            text: "TRANSUDATIVE: STARLING FORCES",
            explanation: "↑ Hydrostatic (CHF, cirrhosis) OR ↓ Oncotic (liver, kidney, malnutrition)"
          },
          {
            text: "EXUDATIVE: INFLAMMATION",
            explanation: "Infection, Malignancy, Inflammation, Infarction (PE)"
          }
        ],
        keyPoints: [
          "Transudative: Filtrate, low protein, no inflammation",
          "Exudative: Inflammatory, high protein, needs treatment",
          "Tension PTX: Check-valve, hemodynamic compromise",
          "Normal pleural fluid <20 mL",
          "Lung collapse ∝ air volume + pleural pressure"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch on Pleural disease", edition: "20th" },
          { book: "Robbins & Cotran Pathologic Basis of Disease", chapter: "Ch on Lung pathology", edition: "10th" }
        ]
      },
      {
        layer: 3,
        slug: "pleural-effusion-pneumothorax-clinical",
        title: "Pleural Effusion & Pneumothorax - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis and management of pleural effusion and pneumothorax",
        contentMd: "# Pleural Effusion & Pneumothorax - Clinical\n\n## Pleural Effusion: Clinical Presentation\n\n### Symptoms\n- **Dyspnea**: From lung compression, underlying disease\n- **Pleuritic chest pain**: Worse with deep breathing\n- **Cough**: From underlying pathology (e.g., pneumonia)\n- **May be asymptomatic**: Especially small transudates\n\n### Physical Examination\n- **Dullness to percussion**: Over effusion area\n- **↓ Breath sounds**: Over effusion\n- **Egophony**: \"e\" sounds like \"a\" (above effusion)\n- **Tactile fremitus**: ↓ (decreased vibration)\n- **Friction rub**: If pleuritis (rare with large effusion)\n\n## Diagnosis: Pleural Effusion\n\n### Imaging\n- **CXR**: Meniscus sign (curved upper border)\n- **Ultrasound**: Most sensitive (detects >50 mL)\n- **CT**: For complications, underlying pathology\n\n### Pleural Fluid Analysis (Thoracentesis)\n\n**Light's Criteria** (Exudative if ≥1):\n- Pleural protein >3 g/dL\n- LDH >200 IU/L\n- Pleural LDH >2/3 serum LDH\n\n**Additional Tests**:\n- **Cell count**: RBC (hemorrhagic), WBC (infection), malignant cells\n- **Chemistry**: Glucose (↓ in infection, malignancy), pH (<7.2 suggests infection/rheumatoid)\n- **Microbiology**: Gram stain, culture, AFB (TB)\n- **Cytology**: For malignancy\n\n## Management of Pleural Effusion\n\n### Transudative Effusion\n- **Treat underlying cause**: Diuretics for CHF (most common)\n- **Thoracentesis**: Only if dyspneic OR diagnostic doubt\n- **Usually improves**: With treatment of primary disease\n\n### Exudative Effusion (TB)\n- **Antituberculous therapy**: 4-drug regimen x 6 months\n- **Corticosteroids**: Prednisone/prednisolone to reduce inflammation (controversial)\n- **Thoracentesis**: For diagnosis and symptom relief\n- **Drainage**: If loculated, may need chest tube\n\n### Exudative (Parapneumonic/Empyema)\n- **Antibiotics**: Matched to organism\n- **Thoracentesis**: For diagnosis, therapeutic if small\n- **Tube thoracostomy (chest tube)**: If organized/loculated\n- **Video-assisted thoracoscopic surgery (VATS)**: If complicated\n\n### Exudative (Malignant Effusion)\n- **Underlying cancer treatment**: Chemotherapy, radiation\n- **Pleurodesis**: For recurrent effusion (talc, doxycycline)\n- **Indwelling catheter**: For palliative care\n- **Thoracentesis**: Repeated as needed for dyspnea\n\n## Pneumothorax: Clinical Presentation\n\n### Primary Spontaneous\n- **Sudden dyspnea**: At rest or mild exertion\n- **Pleuritic chest pain**: Sharp, unilateral\n- **Mild cases**: May have minimal symptoms\n- **Large**: Significant respiratory distress\n\n### Tension Pneumothorax (EMERGENCY)\n- **Severe dyspnea**: Acute onset\n- **Hypotension**: Cardiovascular collapse\n- **JVD**: Venous distension from increased intrathoracic pressure\n- **Tracheal deviation**: Away from affected side\n- **Shock**: Unresponsive without intervention\n\n## Diagnosis: Pneumothorax\n\n### CXR\n- **Collapsed lung**: Edge visible (visceral pleura line)\n- **Pneumothorax space**: Lucency without lung markings\n- **Size**: Apex-to-chest wall distance: <2cm=small, ≥2cm=large\n\n### CT Chest\n- **Gold standard**: For small, occult PTX\n- **Not needed**: If clear CXR findings\n\n### Blood Gas\n- **Hypoxia**: May be present (low pO2)\n- **Hypercarbia**: If large or tension\n\n## Management of Pneumothorax\n\n### Small Primary Spontaneous\n- **Observation**: Most resolve in 2-3 weeks\n- **Supplemental O2**: Accelerates reabsorption (give high-flow O2)\n- **Rest**: Restrict activity\n- **Follow-up CXR**: At 2-4 weeks\n- **Success rate**: 80% resolve with observation\n\n### Large Primary Spontaneous\n- **Aspiration**: First-line (needle aspiration of air)\n- **Chest tube**: If aspiration fails\n- **Success**: Resolves in 3-5 days\n\n### Secondary Spontaneous\n- **Chest tube**: Usually required (higher recurrence)\n- **Consider VATS**: For persistent air leak (>7 days) or second recurrence\n- **Pleurodesis**: Chemical or mechanical to prevent recurrence\n\n### Tension Pneumothorax (EMERGENCY)\n- **Immediate needle decompression**: 14-16 gauge needle into 2nd ICS, mid-clavicular line\n- **Do NOT delay for imaging**: Clinical diagnosis sufficient\n- **Chest tube placement**: After decompression\n- **Fluid resuscitation**: IV fluids for hypotension\n- **Oxygen**: High-flow to accelerate reabsorption\n\n### Traumatic Pneumothorax\n- **Small, stable**: Observation with oxygen\n- **Large or symptomatic**: Chest tube\n- **Tension**: Immediate needle decompression then chest tube\n\n## Complications\n- **Re-expansion pulmonary edema**: After rapid lung re-expansion\n- **Persistent air leak**: Need VATS\n- **Hemothorax**: Air + blood\n- **Bronchopleural fistula**: Ongoing air leak",
        mnemonics: [
          {
            text: "LIGHT'S CRITERIA (Exudative if ≥1)",
            explanation: "P>3 (Protein), L>200 (LDH), R (Ratio pleural/serum LDH >2/3)"
          },
          {
            text: "PNEUMOTHORAX MANAGEMENT",
            explanation: "Small: Observation + O2; Large: Aspiration/chest tube; Tension: Needle decompression emergently"
          }
        ],
        keyPoints: [
          "Light's criteria: Best discrimination",
          "Transudative: Treat underlying cause",
          "Exudative TB: 4-drug ATT",
          "Small PTX: Observation with oxygen",
          "Tension PTX: Emergency needle decompression"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch on Pleural disease", edition: "20th" },
          { book: "API Textbook of Medicine", chapter: "Ch on Respiratory", edition: "11th" }
        ]
      },
      {
        layer: 4,
        slug: "pleural-effusion-pneumothorax-exam",
        title: "Pleural Effusion & Pneumotharax - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield facts and exam patterns for pleural diseases",
        contentMd: "# Pleural Effusion & Pneumothorax - Exam Prep\n\n## High-Yield Facts\n- **Light's criteria**: Most important discriminator (exudative if ≥1)\n- **CHF**: Most common cause of pleural effusion (40%)\n- **TB**: Most common cause of exudative in India\n- **Primary spontaneous PTX**: Young males with smoking\n- **Tension PTX**: Needle decompression doesn't wait for imaging\n\n## Light's Criteria Checklist\n**Exudative if ≥1:**\n- [ ] Pleural protein >3.0 g/dL\n- [ ] LDH pleural >200 IU/L\n- [ ] LDH pleural/serum ratio >0.6 (or >2/3)\n\n## Causes: Common in Exam\n\n### Transudative (CHF, Cirrhosis, Nephrotic)\n- Bilateral (CHF) vs unilateral (cirrhosis)\n- Low protein <2.5 g/dL\n- Clear fluid\n\n### Exudative\n- **Infection**: Pneumonia, TB (most India), empyema\n- **Malignancy**: Lung, breast, lymphoma\n- **PE**: Hemorrhagic, often unilateral\n- **Rheumatologic**: SLE, rheumatoid arthritis\n- **Pancreatitis**: High amylase in fluid\n\n## Exam-Style Questions\n\n**Q: 55-year-old with dyspnea, CXR shows right pleural effusion. Thoracentesis: Protein 2.0, LDH 150, glucose 120. Diagnosis?**\nA: Transudative (all parameters below cutoff); likely CHF. Treat with diuretics.\n\n**Q: 35-year-old with fever, cough, CXR shows left effusion. Fluid: WBC 900, protein 4.5, glucose 45, pH 7.1. Diagnosis?**\nA: Exudative, likely TB (low glucose, low pH) or empyema (sepsis suspected). Need AFB, culture.\n\n**Q: 20-year-old with sudden dyspnea, CXR shows left lung collapse with air space. No hemodynamic instability. Management?**\nA: Small-medium PTX; aspiration or observation with oxygen. Monitor with repeat CXR.\n\n**Q: 45-year-old found with BP 80/50, JVD, tracheal deviation, dyspnea. CXR shows right lung collapse. Emergency action?**\nA: Tension pneumothorax; immediate needle decompression (2nd ICS, mid-clavicular) BEFORE chest tube.\n\n## PTX Size Classification\n- **Small**: <2 cm apex-to-chest wall distance\n- **Large**: ≥2 cm\n- **Small PTX**: Can observe if primary spontaneous\n- **Large PTX**: Need intervention (aspiration/tube)\n\n## Fluid Color Clues\n- **Bloody/hemorrhagic**: PE, trauma, malignancy\n- **Cloudy/turbid**: Infection (empyema)\n- **Milky/chylous**: Lymphatic leak (chylothorax)\n- **Cholesterol**: Rheumatoid effusion\n- **Clear/serous**: Transudative (usually)\n\n## High-Yield Associations\n- **Bilateral effusion**: CHF (most common)\n- **Unilateral right**: Pneumonia, PE\n- **Unilateral left**: Pancreatitis, cardiac surgery\n- **Hemorrhagic**: PE, malignancy, trauma\n- **Low glucose**: TB, empyema, rheumatoid",
        mnemonics: [
          {
            text: "EXAM BOARD: LIGHT'S CRITERIA",
            explanation: "P>3g/dL, L>200, R>2/3; If ≥1, exudative"
          },
          {
            text: "TENSION PTX: NEEDLE NOW",
            explanation: "Don't wait for imaging; needle decompression immediately at 2nd ICS midclavicular"
          }
        ],
        keyPoints: [
          "Light's criteria: P, LDH absolute, LDH ratio",
          "CHF most common pleural effusion",
          "TB most common exudative in India",
          "PTX: Observation if small, primary, no risk factors",
          "Tension PTX: Needle decompression emergency"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch on Pleural disease", edition: "20th" },
          { book: "NEET PG Respiratory MCQs", chapter: "Pleural diseases", edition: "2024" }
        ]
      },
      {
        layer: 5,
        slug: "pleural-effusion-pneumothorax-recall",
        title: "Pleural Effusion & Pneumothorax - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall flashcards for pleural diseases",
        contentMd: "# Pleural Effusion & Pneumothorax - Active Recall\n\n## Flashcard Q&A\n\n**Q1: What are Light's criteria and which suggest exudative?**\nA: Protein >3 g/dL, LDH >200 IU/L, LDH ratio >2/3. Exudative if ≥1 of these met.\n\n**Q2: Most common cause of pleural effusion worldwide and in India.**\nA: Worldwide: CHF (40%); India: TB exudative effusion (high prevalence).\n\n**Q3: Difference between transudative and exudative effusion.**\nA: Transudative: <2.5 g/dL protein, filtered (hydrostatic/oncotic imbalance); Exudative: >3 g/dL, inflammatory (infection, malignancy).\n\n**Q4: Clinical findings in pleural effusion.**\nA: Dullness to percussion, ↓ breath sounds, ↓ tactile fremitus, egophony above level.\n\n**Q5: Management of small transudative effusion from CHF.**\nA: Treat CHF with diuretics; thoracentesis only if large or dyspneic. Usually resolves with treatment.\n\n**Q6: Pleural fluid findings in TB effusion.**\nA: Exudative, lymphocytic predominance, low glucose, low pH, AFB may be negative (culture gold standard).\n\n**Q7: What is pneumothorax and types.**\nA: Air in pleural space causing lung collapse. Primary (no lung disease, young smokers), Secondary (underlying COPD/TB), Traumatic, Tension.\n\n**Q8: Size classification of pneumothorax on CXR.**\nA: Small: <2 cm apex-to-chest wall distance; Large: ≥2 cm.\n\n**Q9: Management of small primary spontaneous pneumothorax.**\nA: Observation (resolves 80% in 2-3 weeks) + supplemental O2 (accelerates reabsorption).\n\n**Q10: Tension pneumothorax: Emergency management.**\nA: Immediate needle decompression at 2nd ICS, mid-clavicular line (don't wait for imaging). Then chest tube placement.",
        mnemonics: [
          {
            text: "10 KEY PLEURAL DISEASE FACTS",
            explanation: "Use for rapid review before exams"
          }
        ],
        keyPoints: [
          "Light's criteria: P, L, R (≥1 = exudative)",
          "CHF most common pleural effusion",
          "TB most common exudative in India",
          "Small PTX: Observation + O2",
          "Tension PTX: Needle decompression emergency"
        ],
        textbookRefs: [
          { book: "Harrison's Principles of Internal Medicine", chapter: "Ch on Pleural disease", edition: "20th" },
          { book: "API Textbook of Medicine", chapter: "Ch on Respiratory", edition: "11th" }
        ]
      }
    ]
  }
];

