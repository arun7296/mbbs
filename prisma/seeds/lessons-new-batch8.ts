export const newBatch8Lessons = [
  {
    topicCode: "PH-MOD-08-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "gi-pharmacology-foundation",
        title: "GI Pharmacology - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of GI drugs including antacids, H2 blockers, PPIs, prokinetics, and laxatives with mechanisms and uses in Indian clinical practice.",
        contentMd: "# GI Pharmacology - Foundation\n\n## Introduction\nGastrointestinal pharmacology encompasses drugs affecting acid secretion, motility, and mucosal protection. Key drugs include antacids, H2 receptor antagonists, proton pump inhibitors (PPIs), prokinetics, laxatives, and anti-diarrheal agents.\n\n## Major Drug Categories\n- **Acid-suppressants**: Antacids (CaCO3, MgOH), H2 blockers (ranitidine), PPIs (omeprazole)\n- **Prokinetics**: Metoclopramide, domperidone, domperidone\n- **Laxatives**: Osmotic, stimulant, stool softeners\n- **Anti-diarrheals**: Loperamide, bismuth compounds",
        mnemonics: [
          {
            text: "PPIs (APE)",
            explanation: "Omeprazole, Lansoprazole, Pantoprazole - all reduce gastric acid by inhibiting H+/K+ ATPase"
          },
          {
            text: "H2 blockers (RACF)",
            explanation: "Ranitidine, Famotidine, Cimetidine - competitive H2 receptor antagonists"
          }
        ],
        keyPoints: [
          "PPIs are gold standard for GERD and PUD in India",
          "Antacids provide rapid relief but short duration",
          "Prokinetics improve gastric emptying in functional dyspepsia",
          "NMC: Essential for undergraduate competency in common GI disorders"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology", chapter: "GI Pharmacology", edition: "27" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Acid Peptic Disease", edition: "21" }
        ]
      },
      {
        layer: 2,
        slug: "gi-pharmacology-mechanism",
        title: "GI Pharmacology - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms of action for PPIs, H2 blockers, prokinetics, and their effects on gastric acid regulation and motility.",
        contentMd: "# GI Pharmacology - Mechanism\n\n## Acid Suppression Mechanisms\n**Proton Pump Inhibitors (PPIs)**\n- Irreversibly inhibit H+/K+ ATPase in gastric parietal cells\n- Reduce acid secretion by 90%+\n- Require acid activation (prodrugs activated in acidic environment)\n- Longer duration of action allows once-daily dosing\n\n**H2 Receptor Antagonists**\n- Competitive blockade of H2 receptors on parietal cells\n- Block histamine-mediated acid secretion\n- Reversible action with shorter duration\n- Good for mild-moderate acid reflux\n\n## Prokinetic Mechanisms\n**Metoclopramide**\n- D2 dopamine receptor antagonist\n- Enhances acetylcholine effects on gastric smooth muscle\n- Improves gastric emptying and prevents reflux\n\n**Domperidone**\n- D2 antagonist with minimal CNS penetration (preferred in India)\n- Similar prokinetic effects without neurological side effects",
        mnemonics: [
          {
            text: "PPI = Permanent Inhibitor",
            explanation: "PPIs irreversibly inhibit H+/K+ ATPase, requiring new pump synthesis for recovery"
          },
          {
            text: "H2 = Histamine 2 (competitive)",
            explanation: "H2 blockers reversibly compete with histamine at H2 receptors"
          }
        ],
        keyPoints: [
          "PPIs are prodrugs activated only in acidic environment",
          "H2 blockers have shorter onset but less potent acid suppression",
          "Domperidone preferred over metoclopramide in India due to safety profile",
          "Prokinetics contraindicated in mechanical obstruction"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology", chapter: "GI Pharmacology - Mechanisms", edition: "27" },
          { book: "Robbins Pathologic Basis of Disease", chapter: "GI Pathology", edition: "10" }
        ]
      },
      {
        layer: 3,
        slug: "gi-pharmacology-clinical",
        title: "GI Pharmacology - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical applications in peptic ulcer disease, GERD, functional dyspepsia, and Indian treatment guidelines.",
        contentMd: "# GI Pharmacology - Clinical\n\n## GERD Management\n- **Mild**: Antacids + lifestyle modification\n- **Moderate-Severe**: PPI once daily (omeprazole 20 mg, pantoprazole 40 mg)\n- **Maintenance**: Lower PPI doses or H2 blockers\n\n## Peptic Ulcer Disease\n**H. pylori positive** (most common in India)\n- Triple therapy: PPI + amoxicillin + clarithromycin × 7 days\n- Confirm eradication with urea breath test\n\n**NSAID-induced**\n- PPI for 4-8 weeks\n- Discontinue NSAID if possible\n\n## Functional Dyspepsia\n- Domperidone 10 mg TDS (preferred in India)\n- Trial of H2 blocker or low-dose PPI\n- Empirical H. pylori eradication in endemic areas\n\n## Constipation Management\n- **First-line**: Osmotic laxatives (polyethylene glycol, lactulose)\n- **Second-line**: Stimulant laxatives (senna, bisacodyl)\n- Avoid chronic use of stimulant laxatives",
        mnemonics: [
          {
            text: "GERD Management (CAP)",
            explanation: "Conventional antacids, Acid suppression (H2 or PPI), Prokinetics for severe cases"
          },
          {
            text: "H. pylori triple therapy (PAC)",
            explanation: "PPI, Amoxicillin, Clarithromycin × 7 days"
          }
        ],
        keyPoints: [
          "H. pylori eradication is standard in India (high prevalence)",
          "PPI use >1 year: monitor B12, Mg, Ca levels",
          "Laxative abuse causes melanosis coli and dependence",
          "Domperidone safer than metoclopramide (no tardive dyskinesia risk)"
        ],
        textbookRefs: [
          { book: "API Textbook of Medicine", chapter: "GI Infections and PUD", edition: "11" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Peptic Ulcer Disease", edition: "21" }
        ]
      },
      {
        layer: 4,
        slug: "gi-pharmacology-exam",
        title: "GI Pharmacology - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ concepts, common exam questions, and NMC competency focus for GI pharmacology.",
        contentMd: "# GI Pharmacology - Exam Prep\n\n## NEXT-Pattern Concepts\n**Problem-Solving (60%)**\n- 45-year-old with epigastric pain and H. pylori: Choose triple therapy\n- Child with persistent vomiting: Recommend domperidone over metoclopramide\n- NSAID user: PPI prophylaxis indication\n\n**Analysis (30%)**\n- Why PPIs require acid activation (prodrug mechanism)\n- Explain H. pylori eradication failure and treatment modification\n- Analyze PPI long-term adverse effects and monitoring\n\n**Recall (10%)**\n- Definition of PUD, GERD classification\n- Standard H. pylori regimens\n- Common side effects of each drug class\n\n## Key Exam Points\n- Omeprazole 20 mg daily is standard GERD dose\n- Ranitidine 150 mg BID for moderate GERD\n- Metoclopramide: risk of tardive dyskinesia with prolonged use\n- Domperidone: no CNS effects (preferred in pediatrics and India)",
        mnemonics: [
          {
            text: "PPI side effects (HBM)",
            explanation: "Hypomagnesemia, B12 deficiency, Malabsorption of other drugs"
          }
        ],
        keyPoints: [
          "H. pylori triple therapy: 7-14 days duration",
          "PPI + NSAID: preferred combination for at-risk patients",
          "Antacids: avoid with other drugs (absorption interaction)",
          "NMC: Competency in GERD and PUD management essential"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology", chapter: "GI Drugs - Exam Focus", edition: "27" },
          { book: "NEET PG Medicine Review", chapter: "Gastroenterology", edition: "2025" }
        ]
      },
      {
        layer: 5,
        slug: "gi-pharmacology-recall",
        title: "GI Pharmacology - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall facts, flashcards, and spaced repetition questions on GI pharmacology.",
        contentMd: "# GI Pharmacology - Active Recall\n\n## Quick Recall Facts\n1. **PPI**: Irreversible H+/K+ ATPase inhibitor, once daily, 90% acid suppression\n2. **H2 blocker**: Reversible histamine antagonist, BID-QID dosing\n3. **Metoclopramide**: Dopamine antagonist, risk of tardive dyskinesia >3 months\n4. **Domperidone**: D2 antagonist, no CNS penetration, preferred in India\n5. **H. pylori triple**: PPI + amoxicillin + clarithromycin × 7-14 days\n\n## Spaced Repetition Questions\n- Which drug is activated only in acidic environment? (PPI)\n- Why is domperidone preferred over metoclopramide in children? (No CNS effects)\n- Standard dose of omeprazole for GERD? (20 mg daily)\n- How long to confirm H. pylori eradication after treatment? (4 weeks, urea breath test)",
        mnemonics: [
          {
            text: "GI Drugs Quick List (HPMLDR)",
            explanation: "H2 blockers, PPIs, Metoclopramide/Domperidone, Laxatives, Antacids"
          }
        ],
        keyPoints: [
          "PPI: once daily, irreversible, needs new synthesis for recovery",
          "Domperidone: India's prokinetic choice",
          "H. pylori eradication: standard in endemic areas",
          "Long-term PPI: monitor B12, Mg, Ca, and drug interactions"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology Quick Review", chapter: "GI Drugs", edition: "27" }
        ]
      }
    ]
  },
  {
    topicCode: "PH-MOD-08-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "respiratory-pharmacology-foundation",
        title: "Respiratory Pharmacology - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of respiratory drugs including bronchodilators, corticosteroids, antihistamines, and cough suppressants used in asthma and COPD.",
        contentMd: "# Respiratory Pharmacology - Foundation\n\n## Major Drug Categories\n- **Bronchodilators**: Beta-2 agonists, muscarinic antagonists, methylxanthines\n- **Corticosteroids**: Inhaled (ICS), oral, IV steroids\n- **Antileukotrienes**: Montelukast, zafirlukast\n- **Antihistamines**: First-gen, second-gen\n- **Cough suppressants**: Codeine, dextromethorphan\n\n## Common Conditions Treated\n- Asthma (acute and chronic)\n- COPD (Chronic Obstructive Pulmonary Disease)\n- Allergic rhinitis\n- Cough management\n\n## Route of Administration\n- Inhaled: Direct to lungs, minimal systemic effects\n- Oral: Convenient but slower onset\n- IV: Emergency management only",
        mnemonics: [
          {
            text: "SABA vs LABA",
            explanation: "Short-Acting Beta-2 Agonists (albuterol) vs Long-Acting Beta-2 Agonists (salmeterol, formoterol)"
          },
          {
            text: "ICS (Inhaled Corticosteroids)",
            explanation: "Beclomethasone, fluticasone, budesonide - first-line anti-inflammatory"
          }
        ],
        keyPoints: [
          "Beta-2 agonists: primary bronchodilators in asthma",
          "ICS: most effective anti-inflammatory agents",
          "Combination therapy (ICS+LABA) for moderate-severe asthma",
          "NMC: Essential for asthma and COPD management competency"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology", chapter: "Respiratory Pharmacology", edition: "27" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Asthma and COPD", edition: "21" }
        ]
      },
      {
        layer: 2,
        slug: "respiratory-pharmacology-mechanism",
        title: "Respiratory Pharmacology - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed mechanisms of action for bronchodilators, corticosteroids, and their effects on airway physiology.",
        contentMd: "# Respiratory Pharmacology - Mechanism\n\n## Beta-2 Agonist Mechanism\n- Bind to beta-2 adrenergic receptors on bronchial smooth muscle\n- Activate G-protein coupled adenylyl cyclase pathway\n- Increase cAMP levels → smooth muscle relaxation → bronchodilation\n- Onset: 5-15 minutes (SABA), 10-20 minutes (LABA)\n\n## Muscarinic Antagonist Mechanism\n**Ipratropium, tiotropium**\n- Block M3 muscarinic receptors on bronchial smooth muscle\n- Prevent acetylcholine-induced bronchoconstriction\n- Slower onset than beta-2 agonists\n- Useful in COPD (vagal overdrive component)\n\n## Inhaled Corticosteroid Mechanism\n- Bind glucocorticoid receptors → translocate to nucleus\n- Suppress NF-κB transcription factor\n- Reduce IL-4, IL-5, TNF-α, eotaxin production\n- Decrease eosinophil infiltration and airway inflammation\n- Effect peaks at 2-4 weeks of consistent use\n\n## Antileukotriene Mechanism\n**Montelukast, zafirlukast**\n- Competitively block cysteinyl leukotriene receptors (CysLT1)\n- Inhibit leukotriene-mediated bronchoconstriction and inflammation",
        mnemonics: [
          {
            text: "Beta-2 = cAMP = Bronchodilation",
            explanation: "Beta-2 agonists increase cAMP, causing smooth muscle relaxation"
          },
          {
            text: "ICS = Anti-inflammatory (not bronchodilator initially)",
            explanation: "Corticosteroids reduce inflammation over days/weeks, not acute relief"
          }
        ],
        keyPoints: [
          "SABA: immediate relief (albuterol 5-15 min onset)",
          "LABA: maintenance therapy (salmeterol, formoterol 12-24 hrs)",
          "ICS: baseline anti-inflammatory, must use regularly",
          "Never use LABA monotherapy (increased mortality in asthma)"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology", chapter: "Respiratory Drugs - Mechanisms", edition: "27" },
          { book: "Robbins Pathologic Basis of Disease", chapter: "Lung Pathology", edition: "10" }
        ]
      },
      {
        layer: 3,
        slug: "respiratory-pharmacology-clinical",
        title: "Respiratory Pharmacology - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical applications in asthma, COPD, allergic rhinitis, and emergency management per Indian guidelines.",
        contentMd: "# Respiratory Pharmacology - Clinical\n\n## Asthma Management (GINA-India adapted)\n**Mild Intermittent**\n- SABA as needed (albuterol 2 puffs Q4-6H)\n\n**Mild Persistent**\n- Low-dose ICS daily (beclomethasone 200 mcg/day)\n- SABA as needed\n\n**Moderate Persistent**\n- Medium-dose ICS (fluticasone 250-500 mcg/day) + LABA\n- SABA as needed\n\n**Severe Persistent**\n- High-dose ICS (fluticasone 500+ mcg/day) + LABA + add-on (montelukast/theophylline)\n\n## COPD Management\n- **SABA**: Salbutamol for acute symptoms\n- **LAMA**: Tiotropium once daily (maintenance)\n- **Combination**: LAMA + LABA (tiotropium + salmeterol)\n- **Exacerbation**: ICS + antibiotics + systemic corticosteroids\n\n## Acute Asthma/COPD Exacerbation\n- SABA nebulized (albuterol 2.5-5 mg Q15-20 min × 1 hour)\n- Ipratropium added to SABA for better bronchodilation\n- Systemic corticosteroids (prednisolone 40-60 mg daily × 5-7 days)\n- Oxygen to maintain SpO2 >90%\n\n## Allergic Rhinitis\n- Intranasal ICS spray (mometasone, fluticasone)\n- Second-generation antihistamines (cetirizine, fexofenadine)",
        mnemonics: [
          {
            text: "Asthma Ladder (STEP approach)",
            explanation: "Step 1: SABA, Step 2: ICS, Step 3: ICS+LABA, Step 4-5: Add montelukast/theophylline"
          },
          {
            text: "COPD Triple: LAMA+LABA+ICS",
            explanation: "For exacerbation-prone severe COPD"
          }
        ],
        keyPoints: [
          "Never prescribe LABA without ICS in asthma",
          "Salbutamol rescue inhaler: essential in all asthma patients",
          "Spacer improves drug delivery (patient compliance important)",
          "Technique: shake, inhale slowly, hold breath 10 seconds"
        ],
        textbookRefs: [
          { book: "API Textbook of Medicine", chapter: "Asthma and COPD", edition: "11" },
          { book: "GINA Guidelines 2025", chapter: "Asthma Management", edition: "2025" }
        ]
      },
      {
        layer: 4,
        slug: "respiratory-pharmacology-exam",
        title: "Respiratory Pharmacology - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ concepts, common exam scenarios, and NMC competency focus.",
        contentMd: "# Respiratory Pharmacology - Exam Prep\n\n## NEXT-Pattern Concepts\n**Problem-Solving (60%)**\n- 8-year-old with intermittent asthma: Recommend albuterol inhaler PRN\n- Patient on LABA monotherapy: Educate on need for concurrent ICS\n- COPD exacerbation: SABA + ipratropium + systemic steroids\n\n**Analysis (30%)**\n- Explain why LABA monotherapy increases mortality in asthma\n- Analyze beta-2 agonist mechanism (cAMP pathway)\n- Compare ICS vs SABA: timing and indication\n\n**Recall (10%)**\n- Definition of asthma, COPD\n- Standard first-line therapy\n- Common drug names and doses\n\n## High-Yield Exam Points\n- Albuterol (salbutamol) 2 puffs Q4-6H for acute relief\n- Beclomethasone 200 mcg/day is typical low-dose ICS\n- Salmeterol onset 10-20 min, duration 12 hours\n- Systemic steroids for exacerbation: prednisolone 40-60 mg/day",
        mnemonics: [
          {
            text: "Asthma Red Flags (LABA)",
            explanation: "LABA monotherapy is contraindicated - always pair with ICS"
          }
        ],
        keyPoints: [
          "SABA: rescue therapy, used as needed",
          "ICS: baseline therapy, used daily",
          "LABA: never monotherapy, always combine with ICS",
          "NMC: Competency in asthma classification and stepwise management"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology", chapter: "Respiratory Drugs - Exam", edition: "27" },
          { book: "NEET PG Medicine Review", chapter: "Pulmonology", edition: "2025" }
        ]
      },
      {
        layer: 5,
        slug: "respiratory-pharmacology-recall",
        title: "Respiratory Pharmacology - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick recall facts, flashcard questions, and spaced repetition on respiratory drugs.",
        contentMd: "# Respiratory Pharmacology - Active Recall\n\n## Quick Recall Facts\n1. **SABA**: Albuterol/salbutamol, onset 5-15 min, rescue inhaler\n2. **LABA**: Salmeterol/formoterol, onset 10-20 min, maintenance therapy\n3. **ICS**: Beclomethasone/fluticasone/budesonide, anti-inflammatory, baseline\n4. **LAMA**: Tiotropium, anticholinergic, once-daily COPD maintenance\n5. **Never**: LABA monotherapy in asthma (mortality risk)\n6. **Acute exacerbation**: SABA + ipratropium + systemic steroids\n\n## Spaced Repetition Questions\n- Which beta-2 agonist for acute asthma? (Salbutamol/albuterol)\n- Why is ICS never monotherapy for acute attacks? (Slow onset, anti-inflammatory not acute relief)\n- Standard low-dose ICS for mild asthma? (Beclomethasone 200 mcg/day)\n- COPD maintenance: LAMA, LABA, or LAMA+LABA? (LAMA+LABA for better control)\n- How to give high-dose SABA in exacerbation? (Nebulized, Q15-20 min)",
        mnemonics: [
          {
            text: "Respiratory Drugs (BASILICA)",
            explanation: "Beta-2 agonists, Anticholinergics, Steroids (ICS), IL-receptors (montelukast), Laxatives, IgE blockers"
          }
        ],
        keyPoints: [
          "Salbutamol: universal SABA choice in India",
          "Spacer technique: essential for inhaler efficacy",
          "Exacerbation = SABA + anticholinergic + systemic steroid",
          "ICS: takes 2-4 weeks for full effect, use daily"
        ],
        textbookRefs: [
          { book: "KDT Pharmacology Quick Review", chapter: "Respiratory Drugs", edition: "27" }
        ]
      }
    ]
  },
  {
    topicCode: "PS-MOD-04-TOP-03",
    layers: [
      {
        layer: 1,
        slug: "delirium-dementia-foundation",
        title: "Delirium & Dementia - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of delirium and dementia: definitions, epidemiology, etiology, and clinical differentiation for Indian psychiatric practice.",
        contentMd: "# Delirium & Dementia - Foundation\n\n## Delirium Definition\n- Acute onset confusion with altered consciousness, attention deficit\n- Fluctuating course (worse in evenings - sundowning)\n- Reversible if underlying cause addressed\n- Common in hospitalized patients, ICU, post-surgery\n\n## Dementia Definition\n- Chronic progressive cognitive decline\n- Loss of multiple cognitive domains (memory, language, visuospatial)\n- Irreversible (usually)\n- Gradual insidious onset\n- Preserved consciousness initially\n\n## Key Differences\n| Feature | Delirium | Dementia |\n|---------|----------|----------|\n| Onset | Acute (hours-days) | Gradual (months-years) |\n| Consciousness | Altered | Preserved |\n| Attention | Severely impaired | Relatively preserved early |\n| Fluctuation | Marked | Stable |\n| Reversibility | Often | Rarely |\n\n## Common Causes in India\n**Delirium**: Infections (UTI, pneumonia), metabolic (hyponatremia, hepatic), medication, withdrawals\n**Dementia**: Alzheimer's, vascular dementia, Lewy body, frontotemporal",
        mnemonics: [
          {
            text: "Delirium: ACUTE and REVERSIBLE",
            explanation: "Acute onset, fluctuating, reversible - contrast with dementia"
          },
          {
            text: "Dementia: GRADUAL and IRREVERSIBLE",
            explanation: "Gradual onset, progressive, usually irreversible"
          }
        ],
        keyPoints: [
          "Delirium is common in hospitalized elderly (20-30%)",
          "Dementia affects 5-7% of Indian population >60 years",
          "Delirium often masks underlying dementia",
          "NMC: Competency in delirium screening and dementia assessment essential"
        ],
        textbookRefs: [
          { book: "Textbook of Psychiatry", chapter: "Organic Mental Disorders", edition: "7" },
          { book: "API Textbook of Medicine", chapter: "Delirium and Dementia", edition: "11" }
        ]
      },
      {
        layer: 2,
        slug: "delirium-dementia-mechanism",
        title: "Delirium & Dementia - Mechanism",
        estimatedMinutes: 30,
        summary: "Neurobiology of delirium (inflammation, neurotransmitter dysregulation) and mechanisms of dementia subtypes.",
        contentMd: "# Delirium & Dementia - Mechanism\n\n## Delirium Pathophysiology\n**Neurochemical Basis**\n- Cholinergic deficiency: reduced acetylcholine activity\n- Dopamine excess: hyperactivity of dopaminergic pathways\n- GABA/glutamate imbalance: excitotoxicity\n- Serotonin dysregulation\n\n**Inflammatory Hypothesis**\n- Infection/stress triggers IL-6, TNF-α release\n- Blood-brain barrier disruption\n- Microglial activation\n- Cytokine-mediated neuronal dysfunction\n\n## Dementia Pathophysiology\n**Alzheimer's Disease (60% of dementia)**\n- Amyloid-beta (Aβ) accumulation: extracellular plaques\n- Tau protein tangles: intracellular neurofibrillary tangles\n- Neuronal loss in hippocampus and cortex\n- Progressive cognitive decline\n\n**Vascular Dementia (20% of dementia)**\n- Recurrent strokes or chronic cerebral hypoperfusion\n- White matter lesions\n- Small vessel disease\n\n**Lewy Body Dementia (10% of dementia)**\n- Alpha-synuclein accumulation (Lewy bodies)\n- Parkinsonism + dementia + visual hallucinations\n\n**Frontotemporal Dementia (5% of dementia)**\n- Tau and TDP-43 pathology\n- Early behavioral/language changes",
        mnemonics: [
          {
            text: "Delirium: Choline DOWN, Dopamine UP",
            explanation: "Cholinergic deficiency and dopaminergic excess underlie delirium"
          },
          {
            text: "Alzheimer's: Amyloid + Tau = Tangles",
            explanation: "Aβ plaques externally, tau tangles internally"
          }
        ],
        keyPoints: [
          "Delirium: reversible if underlying cause treated",
          "Alzheimer's: progressive neurodegeneration, irreversible",
          "Vascular dementia: step-wise decline after each stroke",
          "Lewy body: Parkinsonism distinguishes from Alzheimer's"
        ],
        textbookRefs: [
          { book: "Neuroanatomy and Neuropathology", chapter: "Dementia Neuropathology", edition: "3" },
          { book: "Harrison's Principles", chapter: "Cognitive Disorders", edition: "21" }
        ]
      },
      {
        layer: 3,
        slug: "delirium-dementia-clinical",
        title: "Delirium & Dementia - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical assessment, diagnostic tools (CAM, MMSE, MoCA), management strategies per Indian guidelines.",
        contentMd: "# Delirium & Dementia - Clinical\n\n## Delirium Assessment\n**CAM (Confusion Assessment Method)**\n- Acute onset + fluctuating course + inattention + disorganized thinking\n- Presence of all 4 features = delirium\n\n**Clinical Types**\n- Hyperactive: agitation, hallucinations, combativeness\n- Hypoactive: lethargy, withdrawn (often missed)\n- Mixed: fluctuating between hyper and hypo\n\n**Management**\n1. **Identify cause**: Infection (UTI, pneumonia), metabolic (glucose, sodium), drugs (benzodiazepines, anticholinergics), hypoxia\n2. **Non-pharmacological**: Reorientation, familiar faces, adequate sleep, mobility, minimize ICU delirium\n3. **Pharmacological**: Low-dose haloperidol (if severe agitation) - not curative, only symptomatic\n\n## Dementia Assessment\n**Cognitive Screening**\n- MMSE (Mini-Mental State Exam): Score <23 suggests dementia\n- MoCA (Montreal Cognitive Assessment): More sensitive, includes executive function\n- ADAS-cog: For Alzheimer's severity tracking\n\n**Diagnostic Workup**\n- Detailed history from informant (family)\n- MRI/CT: Rule out reversible causes (normal pressure hydrocephalus, subdural hematoma)\n- Labs: B12, folate, thyroid, syphilis serology\n- Neuropsychological testing for subtype classification\n\n**Management**\n- **Cognitive**: Cholinesterase inhibitors (donepezil 5-10 mg), memantine in moderate-severe\n- **Behavioral**: Antipsychotics for psychosis, SSRIs for depression\n- **Caregiver support**: Counseling, respite care\n- **Lifestyle**: Cognitive stimulation, physical exercise, Mediterranean diet",
        mnemonics: [
          {
            text: "Delirium Causes (I-CHOP-ENN)",
            explanation: "Infection, Cardiac, Hypoxia, Opioids/drugs, Poisons, Encephalitis, Nutritional, Neurologic"
          },
          {
            text: "Dementia: Aβ + tau = Alzheimer's",
            explanation: "Amyloid plaques + tau tangles = core Alzheimer's pathology"
          }
        ],
        keyPoints: [
          "CAM: bedside delirium screening (sensitive and specific)",
          "Delirium: treat underlying cause, not the delirium itself",
          "Dementia: MMSE for screening, MRI to rule out structural causes",
          "Cholinesterase inhibitors: modest benefit, used in early-moderate Alzheimer's"
        ],
        textbookRefs: [
          { book: "Textbook of Psychiatry", chapter: "Dementia Assessment", edition: "7" },
          { book: "API Textbook of Medicine", chapter: "Cognitive Disorders", edition: "11" }
        ]
      },
      {
        layer: 4,
        slug: "delirium-dementia-exam",
        title: "Delirium & Dementia - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ focus, common exam scenarios, and NMC competency expectations.",
        contentMd: "# Delirium & Dementia - Exam Prep\n\n## NEXT-Pattern Concepts\n**Problem-Solving (60%)**\n- 72-year-old ICU patient: acute confusion, fluctuating, inattention → delirium workup\n- 65-year-old with 2-year progressive memory loss → dementia evaluation\n- Hyperactive delirium in post-op: manage agitation while identifying cause\n\n**Analysis (30%)**\n- Why delirium has better prognosis than dementia\n- Explain cholinergic deficiency in delirium vs Aβ in Alzheimer's\n- Compare CAM vs MMSE use (when to screen vs diagnose)\n\n**Recall (10%)**\n- Definition and key differences\n- MMSE score interpretation\n- Common medications causing delirium (anticholinergics, benzodiazepines)\n\n## High-Yield Exam Points\n- Delirium: acute, reversible, fluctuating, altered consciousness\n- Dementia: gradual, irreversible, progressive, preserved consciousness\n- CAM criteria: acute + fluctuation + inattention + disorganization\n- Hypoactive delirium: often missed (lethargy without agitation)",
        mnemonics: [
          {
            text: "Delirium vs Dementia Comparison (ACUTE vs GRADUAL)",
            explanation: "ACUTE onset/fluctuation/reversible vs GRADUAL onset/progressive/irreversible"
          }
        ],
        keyPoints: [
          "NMC: Screen elderly for delirium in hospital settings",
          "Delirium prevention: early mobilization, adequate oxygenation, sleep",
          "Dementia: early diagnosis improves caregiver preparation",
          "Behavioral management: first-line for both conditions"
        ],
        textbookRefs: [
          { book: "NEET PG Psychiatry Review", chapter: "Organic Disorders", edition: "2025" },
          { book: "API Textbook", chapter: "Cognitive Disorders - Exam Focus", edition: "11" }
        ]
      },
      {
        layer: 5,
        slug: "delirium-dementia-recall",
        title: "Delirium & Dementia - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard facts, spaced repetition, and quick recall on delirium and dementia differentiation.",
        contentMd: "# Delirium & Dementia - Active Recall\n\n## Quick Recall Facts\n1. **Delirium**: Acute confusion, altered consciousness, fluctuating, reversible\n2. **Dementia**: Gradual decline, preserved consciousness, progressive, irreversible\n3. **CAM**: Acute + fluctuation + inattention + disorganization = delirium\n4. **MMSE**: <23 suggests dementia, but 15-20 min to administer\n5. **Alzheimer's**: Amyloid plaques + tau tangles, progressive memory loss\n6. **Vascular dementia**: Step-wise decline after strokes, risk factor modification\n7. **Hypoactive delirium**: Often missed, appears lethargic not agitated\n\n## Spaced Repetition Questions\n- What is the key feature distinguishing delirium from dementia? (Acute vs gradual onset, reversibility)\n- Patient with fluctuating confusion + inattention in hospital: diagnosis? (Delirium)\n- MMSE score 20 in elderly: interpret? (Suggests dementia, needs further workup)\n- Which dementia type has Lewy bodies? (Lewy body dementia - with Parkinsonism)\n- Cause of hypoactive delirium most commonly missed? (Lethargy without obvious agitation)\n- First investigation in suspected dementia? (MRI/CT to rule out reversible causes)",
        mnemonics: [
          {
            text: "Delirium Workup (ICES)",
            explanation: "Infection, Cardiac, Encephalitis, Sedatives/Steroids"
          },
          {
            text: "Dementia Workup (VITAMINS-FA)",
            explanation: "Vascular, Infection, Toxic, Autoimmune, Metabolic, Inflammatory, Neoplastic, Structural, Frontotemporal, Alzheimer's"
          }
        ],
        keyPoints: [
          "Delirium: rule out infection, metabolic derangement, medications",
          "Dementia: early diagnosis, neuroimaging, cognitive drugs, caregiver support",
          "Overlap: dementia patients at high risk for delirium (be cautious with sedation)",
          "Prevention: early mobilization, adequate sleep, orientation strategies"
        ],
        textbookRefs: [
          { book: "Textbook of Psychiatry Quick Review", chapter: "Organic Disorders", edition: "7" }
        ]
      }
    ]
  },
  {
    topicCode: "PS-MOD-05-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "child-psychiatry-adhd-autism-foundation",
        title: "Child Psychiatry: ADHD & Autism - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of ADHD and Autism Spectrum Disorder in children: definitions, epidemiology, symptomatology, and differential diagnosis.",
        contentMd: "# Child Psychiatry: ADHD & Autism - Foundation\n\n## ADHD (Attention-Deficit/Hyperactivity Disorder)\n**Core Features**\n- Inattention: difficulty focusing, disorganized, forgetful\n- Hyperactivity: restlessness, excessive talking, fidgeting\n- Impulsivity: interrupting, acting without thinking\n\n**Presentation Types**\n- Predominantly inattentive\n- Predominantly hyperactive-impulsive\n- Combined presentation\n\n## Autism Spectrum Disorder (ASD)\n**Core Features**\n- Persistent deficits in social communication\n- Restricted, repetitive patterns of behavior/interests\n- Symptoms present from early childhood\n- Variable severity (mild to severe)\n\n## Epidemiology (India)\n- ADHD: 2-5% of school-age children\n- Autism: 1 in 100 children (increasing trend)\n- Male predominance in both\n- Often co-occurring (ADHD + autism in 30-50% of autism cases)\n\n## Diagnostic Age\n- ADHD: Symptoms by age 12, usually diagnosed 6-12 years\n- Autism: Early signs by 18-24 months, diagnosis by age 3-4 years",
        mnemonics: [
          {
            text: "ADHD: Inattention, Hyperactivity, Impulsivity",
            explanation: "IHI - core ADHD triad"
          },
          {
            text: "Autism: Social deficit + Restricted interests",
            explanation: "Core autism features"
          }
        ],
        keyPoints: [
          "ADHD: neurodevelopmental disorder affecting attention and impulse control",
          "Autism: lifelong developmental difference in social communication",
          "Overlap: 30-50% of autism have ADHD co-occurrence",
          "NMC: Screen for ADHD and autism in developmental assessment"
        ],
        textbookRefs: [
          { book: "Textbook of Child and Adolescent Psychiatry", chapter: "ADHD and ASD", edition: "6" },
          { book: "DSM-5 Diagnostic Manual", chapter: "Neurodevelopmental Disorders", edition: "5" }
        ]
      },
      {
        layer: 2,
        slug: "child-psychiatry-adhd-autism-mechanism",
        title: "Child Psychiatry: ADHD & Autism - Mechanism",
        estimatedMinutes: 30,
        summary: "Neurobiology of ADHD (catecholamine hypothesis, prefrontal cortex dysfunction) and autism (connectivity, developmental cascade).",
        contentMd: "# Child Psychiatry: ADHD & Autism - Mechanism\n\n## ADHD Neurobiology\n**Catecholamine Hypothesis**\n- Reduced dopamine and noradrenaline in prefrontal cortex\n- Prefrontal cortex (PFC) controls attention, executive function, impulse control\n- Hypoactivity in PFC → inattention, hyperactivity, impulsivity\n- Genetic: DRD4, DAT1, COMT genes involved\n\n**Brain Structure & Function**\n- Smaller anterior cingulate cortex (attention regulation)\n- Reduced prefrontal-striatal connectivity\n- Delayed cortical maturation (3-4 years behind peers)\n- Abnormal reward processing in nucleus accumbens\n\n## Autism Neurobiology\n**Neural Connectivity Theory**\n- **Weak Central Coherence**: Detail-focused, poor integration of big picture\n- **Underconnectivity**: Reduced long-range neural connections\n- **Local Overconnectivity**: Increased local circuit activity\n- **Mirror neuron dysfunction**: Impaired social imitation and empathy\n\n**Developmental Cascade**\n- Early atypical sensory processing\n- Reduced social orienting (eye contact, joint attention)\n- Impaired theory of mind development\n- Cascading deficits in social communication\n\n**Genetic & Environmental**\n- Genetic: CHD8, PTEN, TSC1/2 genes\n- Environmental: Advanced parental age, prenatal infections, prematurity",
        mnemonics: [
          {
            text: "ADHD: Dopamine DOWN in PFC",
            explanation: "Prefrontal cortex hypoactivity causes inattention and impulse control problems"
          },
          {
            text: "Autism: Weak Central Coherence",
            explanation: "Focus on details, difficulty integrating whole picture"
          }
        ],
        keyPoints: [
          "ADHD: catecholamine deficiency in PFC",
          "Autism: connectivity differences, not deficiency",
          "ADHD: stimulant medications increase dopamine/noradrenaline",
          "Autism: no medication for core symptoms, behavioral intervention primary"
        ],
        textbookRefs: [
          { book: "Neurodevelopmental Psychiatry", chapter: "ADHD and Autism Biology", edition: "2" },
          { book: "Journal of Neurodevelopmental Disorders", chapter: "ASD Neurobiology", edition: "2025" }
        ]
      },
      {
        layer: 3,
        slug: "child-psychiatry-adhd-autism-clinical",
        title: "Child Psychiatry: ADHD & Autism - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical assessment, diagnosis per DSM-5, Indian adaptation, and evidence-based interventions.",
        contentMd: "# Child Psychiatry: ADHD & Autism - Clinical\n\n## ADHD Assessment\n**Diagnostic Criteria (DSM-5)**\n- 6+ symptoms of inattention or hyperactivity-impulsivity\n- Symptoms present before age 12\n- Symptoms in 2+ settings (home, school)\n- Functional impairment\n\n**Structured Instruments**\n- Conners Rating Scale (parent/teacher)\n- SNAP-IV (4 subscales: inattention, hyperactivity, impulsivity, oppositional)\n- IQ and achievement testing (rule out learning disorder)\n\n**Management**\n1. **Behavioral**: Parent training, school-based interventions, classroom accommodations\n2. **Pharmacological**: Stimulants (methylphenidate 5-60 mg), atomoxetine (non-stimulant)\n3. **Academic**: IEP (Individualized Education Plan), tutoring\n\n## Autism Assessment\n**Diagnostic Criteria (DSM-5)**\n- Social communication deficits + restricted/repetitive behaviors\n- Early childhood onset (not necessarily diagnosed early)\n- Functional impairment\n\n**Screening Tools**\n- Modified Checklist for Autism (M-CHAT): age 16-30 months\n- ADOS-2 (Autism Diagnostic Observation Schedule): gold standard\n- Social Communication Questionnaire (SCQ)\n\n**Management (Comprehensive)**\n1. **Behavioral therapy**: ABA (Applied Behavior Analysis), speech therapy, OT\n2. **Educational**: Special education, autism-friendly classroom\n3. **Comorbidity management**: ADHD, anxiety, sensory issues\n4. **Family support**: Parent counseling, sibling support\n- **Medications**: No core autism treatment; manage comorbid ADHD, anxiety, aggression",
        mnemonics: [
          {
            text: "ADHD Diagnosis: 6+ symptoms × 2+ settings before age 12",
            explanation: "DSM-5 criteria"
          },
          {
            text: "Autism Diagnosis: Social deficit + Restricted behaviors from childhood",
            explanation: "DSM-5 criteria"
          }
        ],
        keyPoints: [
          "ADHD: Behavioral intervention first, medication if inadequate response",
          "Autism: Early intervention (speech, OT, ABA) crucial for outcomes",
          "Comorbidity: ADHD + autism in 30-50% of autism cases",
          "Indian context: School-based interventions often limited, family support critical"
        ],
        textbookRefs: [
          { book: "Clinical Child Psychiatry", chapter: "ADHD and ASD Management", edition: "4" },
          { book: "Indian Academy of Pediatrics", chapter: "ADHD and ASD Screening", edition: "2024" }
        ]
      },
      {
        layer: 4,
        slug: "child-psychiatry-adhd-autism-exam",
        title: "Child Psychiatry: ADHD & Autism - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ scenarios, differential diagnosis, and NMC competency focus.",
        contentMd: "# Child Psychiatry: ADHD & Autism - Exam Prep\n\n## NEXT-Pattern Concepts\n**Problem-Solving (60%)**\n- 7-year-old: inattention at school, difficulty completing tasks, fidgeting → ADHD vs learning disorder\n- 3-year-old: not making eye contact, repetitive play, speech delay → autism assessment\n- Child on methylphenidate: decreased appetite, monitor growth\n\n**Analysis (30%)**\n- Why stimulants improve ADHD (dopamine hypothesis)\n- Explain why early intervention improves autism outcomes\n- Differentiate hypoactive ADHD from depression (both have poor focus)\n\n**Recall (10%)**\n- ADHD prevalence (2-5%), autism prevalence (1/100)\n- Standard methylphenidate dose range\n- Core autism diagnostic features\n\n## Differential Diagnosis\n- **ADHD vs Learning Disorder**: Normal intelligence but academic underachievement (learning disorder); IQ testing differentiates\n- **ADHD vs Anxiety**: Both have poor concentration; anxiety has worry, physical symptoms\n- **Autism vs ADHD**: Autism has social deficits + restricted interests; ADHD has attention/impulse issues\n- **Autism vs Social Anxiety**: Anxiety improves in familiar settings; autism deficits persist",
        mnemonics: [
          {
            text: "ADHD High-Yield (DMI)",
            explanation: "Dopamine hypothesis, Methylphenidate treatment, Inattention/Hyperactivity/Impulsivity"
          }
        ],
        keyPoints: [
          "NMC: Screen for ADHD and autism in pediatric/school health settings",
          "Stimulant monitoring: BP, HR, growth, appetite",
          "Autism: no medication for core symptoms",
          "Early diagnosis and intervention improve long-term outcomes"
        ],
        textbookRefs: [
          { book: "NEET PG Psychiatry Review", chapter: "Child Psychiatry", edition: "2025" },
          { book: "API Textbook of Pediatrics", chapter: "Neurodevelopmental Disorders", edition: "12" }
        ]
      },
      {
        layer: 5,
        slug: "child-psychiatry-adhd-autism-recall",
        title: "Child Psychiatry: ADHD & Autism - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick flashcard facts, spaced repetition questions on ADHD and autism.",
        contentMd: "# Child Psychiatry: ADHD & Autism - Active Recall\n\n## Quick Recall Facts\n1. **ADHD**: Inattention + hyperactivity/impulsivity, 2-5% prevalence, male >female\n2. **Autism**: Social + communication deficits + restricted behaviors, 1/100 prevalence\n3. **ADHD diagnosis**: 6+ symptoms × 2+ settings before age 12\n4. **Autism diagnosis**: Core deficits from early childhood\n5. **Methylphenidate**: Standard ADHD treatment, 5-60 mg/day, increases dopamine\n6. **Atomoxetine**: Non-stimulant ADHD medication (noradrenaline reuptake inhibitor)\n7. **Autism core treatment**: Behavioral therapy (ABA), speech, OT - no medication for core\n8. **Co-occurrence**: 30-50% of autism cases have comorbid ADHD\n\n## Spaced Repetition Questions\n- ADHD most common age of diagnosis? (6-12 years)\n- Autism early signs at age: (18-24 months)\n- Why are stimulants effective in ADHD? (Increase dopamine in prefrontal cortex)\n- Most important early intervention for autism? (Speech therapy, ABA, before age 3)\n- Methylphenidate side effect monitoring: (Growth, appetite, BP, HR)\n- Core feature differentiating autism from ADHD? (Social deficits + restricted behaviors vs attention/impulse)\n- Non-stimulant ADHD medication: (Atomoxetine)\n- ADHD symptom in multiple settings meaning? (Both home and school)\n\n## Memory Aids\n- **ADHD onset**: Before age 12 (key diagnostic criterion)\n- **Autism**: Social communication + restricted behaviors (dual deficit)\n- **Stimulant**: Increases dopamine (PFC activation)\n- **Behavioral therapy**: First-line for both ADHD and autism",
        mnemonics: [
          {
            text: "ADHD vs Autism Quick (IHI vs Social+Restricted)",
            explanation: "ADHD = Inattention/Hyperactivity/Impulsivity; Autism = Social deficits + Restricted behaviors"
          }
        ],
        keyPoints: [
          "ADHD: Behavioral first, stimulant if inadequate response",
          "Autism: Early intervention crucial (before age 3)",
          "Monitor stimulant-treated ADHD: growth, appetite, vital signs",
          "Both conditions: school-based accommodations essential in India"
        ],
        textbookRefs: [
          { book: "Child Psychiatry Quick Review", chapter: "ADHD and Autism", edition: "6" }
        ]
      }
    ]
  },
  {
    topicCode: "PY-MOD-02-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "red-blood-cells-hemoglobin-foundation",
        title: "Red Blood Cells & Hemoglobin - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of RBC structure, hemoglobin composition, oxygen transport, and RBC lifecycle in the context of NMC competencies.",
        contentMd: "# Red Blood Cells & Hemoglobin - Foundation\n\n## RBC Structure\n- **Shape**: Biconcave disc (increased surface area for gas exchange)\n- **Size**: 7-8 micrometers diameter\n- **Lifespan**: 120 days\n- **Composition**: Cytoplasm with hemoglobin, no nucleus (mature RBCs)\n- **Membrane**: Phospholipid bilayer with spectrin skeleton (structural integrity)\n\n## Hemoglobin Composition\n- **Molecular weight**: 64,500 Da\n- **Structure**: 4 subunits (2 alpha, 2 beta globin chains)\n- **Heme groups**: 4 iron-containing prosthetic groups\n- **Oxygen capacity**: Each Hb can carry 4 O2 molecules\n- **Normal levels**: Men 13.5-17.5 g/dL, Women 12-15.5 g/dL\n\n## Functions\n- **Oxygen transport**: From lungs to tissues\n- **Carbon dioxide transport**: From tissues to lungs (70% via bicarbonate)\n- **Buffering**: Important buffer system (Henderson-Hasselbalch)\n- **Oxygen delivery**: Regulated by 2,3-DPG (aids dissociation at tissues)\n\n## RBC Hierarchy\n- Hematopoietic stem cell → Proerythroblast → Erythroblast → Reticulocyte → Mature RBC",
        mnemonics: [
          {
            text: "Hemoglobin: Heme + Globin",
            explanation: "Iron-containing heme + protein globin chains"
          },
          {
            text: "RBC lifespan: 120 days",
            explanation: "Standard RBC survival in circulation"
          }
        ],
        keyPoints: [
          "RBC: main oxygen transporter in blood",
          "Hemoglobin: 4 subunits with cooperative oxygen binding",
          "Biconcave shape: increases surface area for flexibility through capillaries",
          "NMC: Competency in normal RBC physiology and hemoglobin function"
        ],
        textbookRefs: [
          { book: "Guyton's Physiology of the Human Body", chapter: "Red Blood Cells", edition: "14" },
          { book: "KDT Hematology", chapter: "RBC and Hemoglobin", edition: "12" }
        ]
      },
      {
        layer: 2,
        slug: "red-blood-cells-hemoglobin-mechanism",
        title: "Red Blood Cells & Hemoglobin - Mechanism",
        estimatedMinutes: 30,
        summary: "Oxygen-hemoglobin binding kinetics, cooperative binding, oxygen dissociation curve, and factors affecting oxygen delivery.",
        contentMd: "# Red Blood Cells & Hemoglobin - Mechanism\n\n## Oxygen-Hemoglobin Binding\n**Cooperative Binding (Allosteric Effect)**\n- First O2 binding to deoxyhemoglobin is difficult (T state → R state transition)\n- Subsequent O2 binding progressively easier (positive cooperativity)\n- This creates S-shaped (sigmoidal) oxygen-hemoglobin dissociation curve\n- Enhances oxygen loading in lungs and unloading at tissues\n\n## Oxygen Dissociation Curve\n**Factors shifting curve RIGHT (↓ Hb affinity, ↑ O2 release)**\n- ↓ pH (acidosis): Bohr effect\n- ↑ CO2 (hypercapnia): Bohr effect\n- ↑ 2,3-DPG: Chronic hypoxia, altitude, anemia adaptation\n- ↑ Temperature: Fever, exercise\n\n**Factors shifting curve LEFT (↑ Hb affinity, ↓ O2 release)**\n- ↑ pH (alkalosis)\n- ↓ CO2 (hypocapnia)\n- ↓ 2,3-DPG: Transfused stored blood, carbon monoxide poisoning\n- ↓ Temperature: Hypothermia\n\n## Carbon Dioxide Transport\n- **70%**: As bicarbonate (HCO3-) via carbonic anhydrase\n- **20%**: Bound to Hb (carbaminohemoglobin)\n- **10%**: Dissolved in plasma\n\n## RBC Production (Erythropoiesis)\n- **Stimulus**: Erythropoietin (EPO) from kidney (90%), liver (10%)\n- **Bone marrow**: Site of RBC production\n- **Duration**: Proerythroblast → mature RBC: 7 days\n- **Requirement**: Iron, B12, folate, vitamin C, copper\n- **Reticulocyte**: Intermediate stage, contains remnant ribosomes",
        mnemonics: [
          {
            text: "Bohr Effect: Acid RIGHT",
            explanation: "Acidosis shifts O2 dissociation curve right (lower affinity, better unloading)"
          },
          {
            text: "2,3-DPG: Altitude Adaptation",
            explanation: "Increased 2,3-DPG in chronic hypoxia improves oxygen unloading"
          }
        ],
        keyPoints: [
          "Cooperative binding: sigmoidal O2 curve allows efficient loading and unloading",
          "Bohr effect: pH and CO2 regulate oxygen delivery to tissues",
          "2,3-DPG: increases in chronic hypoxia and altitude (physiologic adaptation)",
          "Stored blood has low 2,3-DPG: poor oxygen delivery in early massive transfusion"
        ],
        textbookRefs: [
          { book: "Guyton's Physiology", chapter: "Oxygen Transport", edition: "14" },
          { book: "Robbins Pathologic Basis of Disease", chapter: "Hematologic Pathology", edition: "10" }
        ]
      },
      {
        layer: 3,
        slug: "red-blood-cells-hemoglobin-clinical",
        title: "Red Blood Cells & Hemoglobin - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical applications: anemia classification, hemoglobin disorders, RBC indices, and management strategies.",
        contentMd: "# Red Blood Cells & Hemoglobin - Clinical\n\n## RBC Indices (CBC Parameters)\n- **MCV (Mean Corpuscular Volume)**: Microcytic (<80), normocytic (80-100), macrocytic (>100)\n- **MCH (Mean Corpuscular Hemoglobin)**: Hemoglobin content per RBC\n- **MCHC (Mean Corpuscular Hemoglobin Concentration)**: Hemoglobin concentration\n- **RDW (Red Cell Distribution Width)**: Variation in RBC size\n\n## Anemia Classification\n**Microcytic (MCV <80)**\n- Iron deficiency: Most common (60% of anemias in India)\n- Thalassemia\n- Anemia of chronic disease\n- Lead poisoning (basophilic stippling)\n\n**Normocytic (MCV 80-100)**\n- Acute blood loss\n- Hemolysis: Sickle cell, G6PD deficiency, autoimmune\n- Chronic kidney disease (EPO deficiency)\n\n**Macrocytic (MCV >100)**\n- B12 deficiency: Pernicious anemia, vegan diet, post-gastrectomy\n- Folate deficiency: Malnutrition, alcoholism, pregnancy\n- Hypothyroidism, reticulocytosis (elevated young RBCs)\n\n## Hemoglobinopathies\n**Sickle Cell Disease**\n- HbS polymerizes under hypoxia → vaso-occlusive crises\n- Hemolytic anemia, pain crises, organ damage\n- Diagnosis: Hemoglobin electrophoresis\n\n**Thalassemia**\n- Beta-globin deficiency → ineffective erythropoiesis\n- Thalassemia major: severe anemia, requires transfusion\n- Thalassemia minor: mild anemia, trait carrier\n\n## Clinical Management\n- **Iron deficiency**: Oral ferrous sulfate 325 mg daily, treat source\n- **B12 deficiency**: IM cyanocobalamin 1000 mcg monthly\n- **Folate deficiency**: Oral folic acid 1 mg daily, address cause",
        mnemonics: [
          {
            text: "Anemia Workup: MCV classification → Reticulocyte count",
            explanation: "First classify by size, then assess bone marrow response"
          },
          {
            text: "Hemoglobin Disorders (STC)",
            explanation: "Sickle cell, Thalassemia, Unstable hemoglobins"
          }
        ],
        keyPoints: [
          "Iron deficiency anemia: most common in India (dietary, blood loss)",
          "Microcytic anemia: iron deficiency vs thalassemia (RDW helps differentiate)",
          "Sickle cell: crisis triggered by hypoxia, dehydration, infection, cold",
          "B12/folate deficiency: megaloblastic anemia with neurologic manifestations"
        ],
        textbookRefs: [
          { book: "API Textbook of Medicine", chapter: "Anemia", edition: "11" },
          { book: "KDT Hematology", chapter: "Hemoglobin Disorders", edition: "12" }
        ]
      },
      {
        layer: 4,
        slug: "red-blood-cells-hemoglobin-exam",
        title: "Red Blood Cells & Hemoglobin - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ concepts, lab interpretation, and NMC competency focus.",
        contentMd: "# Red Blood Cells & Hemoglobin - Exam Prep\n\n## NEXT-Pattern Concepts\n**Problem-Solving (60%)**\n- 35-year-old woman: Hb 9 g/dL, MCV 65, low ferritin → iron deficiency anemia\n- Patient with B12 level 120 pg/mL: IM cyanocobalamin indicated\n- Child with jaundice, hemolysis, reticulocytosis → hemolytic anemia workup\n\n**Analysis (30%)**\n- Explain why microcytic anemia occurs in iron deficiency\n- Analyze oxygen dissociation curve shifts in chronic hypoxia\n- Interpret CBC results: differentiate iron deficiency from thalassemia trait\n\n**Recall (10%)**\n- Normal hemoglobin range (men/women)\n- RBC lifespan (120 days)\n- Bone marrow RBC production rate\n- Common hemoglobinopathies\n\n## High-Yield Exam Facts\n- Hb normal: Men 13.5-17.5, Women 12-15.5 g/dL\n- MCV <80 microcytic, 80-100 normocytic, >100 macrocytic\n- Reticulocyte count: marker of bone marrow response to anemia\n- Sickle cell diagnosis: Hemoglobin electrophoresis\n- Iron studies: Ferritin, TIBC, serum iron differentiate from thalassemia",
        mnemonics: [
          {
            text: "CBC Interpretation (MCV, MCH, RDW, Retic)",
            explanation: "Classify anemia by size, then assess bone marrow response"
          }
        ],
        keyPoints: [
          "NMC: Classify anemia by MCV and manage appropriately",
          "Iron deficiency: oral ferrous sulfate, address underlying cause",
          "Megaloblastic anemia: B12 or folate deficiency (check levels)",
          "Hemolytic anemia: elevated indirect bilirubin, elevated LDH, low haptoglobin"
        ],
        textbookRefs: [
          { book: "NEET PG Medicine Review", chapter: "Hematology", edition: "2025" },
          { book: "API Textbook", chapter: "Anemia - Exam Focus", edition: "11" }
        ]
      },
      {
        layer: 5,
        slug: "red-blood-cells-hemoglobin-recall",
        title: "Red Blood Cells & Hemoglobin - Active Recall",
        estimatedMinutes: 10,
        summary: "Flashcard facts, spaced repetition, and quick recall on RBC and hemoglobin physiology.",
        contentMd: "# Red Blood Cells & Hemoglobin - Active Recall\n\n## Quick Recall Facts\n1. **Hb normal**: Men 13.5-17.5, Women 12-15.5 g/dL\n2. **RBC lifespan**: 120 days (reticulocyte becomes mature in 1 day)\n3. **Hemoglobin**: 4 subunits (2 alpha, 2 beta), 4 heme groups\n4. **Oxygen binding**: Sigmoidal curve due to cooperative binding\n5. **2,3-DPG**: Increases in altitude/chronic hypoxia, shifts curve RIGHT\n6. **Bohr effect**: Low pH/high CO2 shifts curve RIGHT (better O2 unloading)\n7. **CO2 transport**: 70% as HCO3-, 20% as carbaminohemoglobin, 10% dissolved\n8. **MCV <80**: Microcytic (iron deficiency, thalassemia)\n9. **MCV >100**: Macrocytic (B12/folate deficiency)\n\n## Spaced Repetition Questions\n- What maintains RBC biconcave shape? (Spectrin skeleton)\n- Site of EPO production? (90% kidney, 10% liver)\n- Why is 2,3-DPG increased at altitude? (Physiologic adaptation for oxygen unloading)\n- Sickle hemoglobin polymerizes under what condition? (Hypoxia/deoxygenation)\n- Iron deficiency anemia: first parameter affected? (Ferritin drops before Hb)\n- B12 deficiency: mechanism of neurologic symptoms? (Myelin damage in dorsal columns)\n- How to differentiate iron deficiency from thalassemia trait? (RDW high in Fe def, normal in thal trait)\n- Hemolytic anemia: indirect bilirubin, LDH, haptoglobin pattern? (↑ indirect bili, ↑ LDH, ↓ haptoglobin)",
        mnemonics: [
          {
            text: "Anemia Differential (Quick: MCV → Retic)",
            explanation: "Classify by MCV size first, then assess reticulocyte response"
          },
          {
            text: "Hemoglobin facts (4-4-120)",
            explanation: "4 subunits, 4 heme groups, 120-day lifespan"
          }
        ],
        keyPoints: [
          "RBC: oxygen transport, CO2 removal, buffering capacity",
          "Hemoglobin curve: sigmoidal due to cooperative binding",
          "Anemia classification: microcytic, normocytic, macrocytic",
          "Iron deficiency: most common anemia in India, ferrous sulfate first-line"
        ],
        textbookRefs: [
          { book: "Physiology Quick Review", chapter: "Blood and Oxygen Transport", edition: "3" }
        ]
      }
    ]
  },
  {
    topicCode: "SU-MOD-06-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "obstructive-jaundice-foundation",
        title: "Obstructive Jaundice - Foundation",
        estimatedMinutes: 20,
        summary: "Overview of obstructive jaundice: definitions, etiology, pathophysiology, and classification of causes.",
        contentMd: "# Obstructive Jaundice - Foundation\n\n## Definition\n**Obstructive Jaundice (Cholestasis)**\n- Mechanical obstruction of bile flow (biliary tree or hepatic ducts)\n- Accumulation of conjugated (direct) bilirubin in blood\n- Causes clinical and biochemical cholestasis\n\n## Pathophysiology\n1. Bile duct obstruction → back-pressure in biliary tree\n2. Regurgitation of conjugated bilirubin into bloodstream\n3. Elevated direct bilirubin (>50% of total bilirubin)\n4. Dark urine (water-soluble conjugated bilirubin excreted by kidney)\n5. Pale/clay-colored stools (absent bile in intestines)\n\n## Classification of Obstructive Jaundice\n**Extrahepatic (90% of cases)**\n- Bile duct stones (choledocholithiasis) - most common\n- Pancreatic cancer (head of pancreas compressing CBD)\n- Bile duct strictures/injuries\n- Parasitic infections (roundworms, flukes in tropical regions)\n- Pancreatitis causing CBD compression\n\n**Intrahepatic (cholestasis without anatomic obstruction)**\n- Pregnancy-related cholestasis\n- Drugs (estrogen, antibiotics, anabolic steroids)\n- Sepsis, critical illness\n- Primary biliary cirrhosis (PBC), primary sclerosing cholangitis (PSC)\n- Cirrhosis from any cause\n\n## Clinical Presentation\n- **Symptoms**: Jaundice, dark urine, pale stools, pruritus, abdominal pain\n- **Signs**: Icterus (yellow skin/sclera), hepatomegaly, palpable gallbladder (Courvoisier sign)",
        mnemonics: [
          {
            text: "Obstructive jaundice: Direct bilirubin elevated",
            explanation: "Conjugated bilirubin backs up into blood"
          },
          {
            text: "Pale stools + dark urine = obstructive jaundice",
            explanation: "No bile in GI tract → pale stools; conjugated bili in urine → dark"
          }
        ],
        keyPoints: [
          "Obstructive jaundice: direct/conjugated bilirubin >50% of total",
          "Most common cause: choledocholithiasis (bile duct stones)",
          "Pancreatic cancer: painless progressive jaundice (Courvoisier sign)",
          "NMC: Distinguish obstructive from hepatic jaundice (competency essential)"
        ],
        textbookRefs: [
          { book: "SRB's Clinical Surgery", chapter: "Jaundice and Biliary Obstruction", edition: "15" },
          { book: "API Textbook of Medicine", chapter: "Jaundice", edition: "11" }
        ]
      },
      {
        layer: 2,
        slug: "obstructive-jaundice-mechanism",
        title: "Obstructive Jaundice - Mechanism",
        estimatedMinutes: 30,
        summary: "Detailed pathophysiology of bile flow obstruction, bilirubin metabolism, and biochemical changes.",
        contentMd: "# Obstructive Jaundice - Mechanism\n\n## Bilirubin Metabolism (Normal)\n1. **Production**: Unconjugated bilirubin from heme breakdown (1-1.5 g/day)\n2. **Transport**: Unconjugated bilirubin travels to liver bound to albumin\n3. **Conjugation**: Liver UDP-glucuronosyltransferase conjugates bilirubin\n4. **Excretion**: Conjugated bilirubin secreted into bile canaliculi\n5. **Biliary transport**: Through hepatic ducts → common bile duct → duodenum\n\n## In Obstruction\n**Bile Duct Obstruction Effects**\n- Back-pressure increases in intrahepatic ducts\n- Increased pressure forces conjugated bilirubin back into hepatic sinusoids\n- Bile canalicular rupture (cholestasis hepatitis)\n- Regurgitation of bile salts, cholesterol into bloodstream\n\n## Biochemical Changes\n**In Obstructive Jaundice**\n- ↑ Direct (conjugated) bilirubin: >50% of total (>2 mg/dL)\n- ↑ Alkaline phosphatase (ALP): 4-10 fold increase (canalicular enzyme)\n- ↑ Gamma-glutamyl transferase (GGT): Confirms liver origin of ALP\n- ↑ ALT/AST: Mild elevation (cholestatic pattern, not hepatocellular)\n- ↑ Bile acids: Causes pruritus (bile salt accumulation)\n\n## Consequences of Obstruction\n**Ascending Cholangitis**\n- Bacterial infection of obstructed biliary tree\n- Fever + jaundice + right upper quadrant pain (Charcot triad)\n- Can progress to sepsis (Reynold's pentad: +hypotension, confusion)\n- Medical emergency requiring biliary drainage\n\n**Secondary Biliary Cirrhosis**\n- Chronic obstruction (>4 weeks) → chronic cholestasis\n- Bile duct proliferation and fibrosis\n- Progressive cirrhosis if obstruction not relieved\n\n**Vitamin K Malabsorption**\n- Absent bile salts in intestine → reduced fat-soluble vitamin absorption\n- ↑ Prothrombin time (PT), bleeding risk\n- Requires vitamin K supplementation",
        mnemonics: [
          {
            text: "Charcot Triad: Fever + Jaundice + RUQ pain",
            explanation: "Ascending cholangitis until proven otherwise"
          },
          {
            text: "Obstructive Jaundice: Direct bili + ALP + normal/mildly ↑ transaminases",
            explanation: "Cholestatic pattern of liver tests"
          }
        ],
        keyPoints: [
          "Obstructive jaundice: direct bilirubin elevated due to back-pressure",
          "ALP markedly elevated (canalicular enzyme), AST/ALT mildly elevated",
          "Ascending cholangitis: fever + jaundice + pain = medical emergency",
          "Vitamin K malabsorption: prolonged PT, risk of bleeding"
        ],
        textbookRefs: [
          { book: "Robbins Pathologic Basis of Disease", chapter: "Liver Pathology", edition: "10" },
          { book: "Harrison's Principles of Internal Medicine", chapter: "Biliary Tract Disease", edition: "21" }
        ]
      },
      {
        layer: 3,
        slug: "obstructive-jaundice-clinical",
        title: "Obstructive Jaundice - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical diagnosis, imaging workup, and management strategies per Indian surgical guidelines.",
        contentMd: "# Obstructive Jaundice - Clinical\n\n## Clinical Assessment\n**History & Examination**\n- Pain character: Colicky pain suggests stones; progressive suggests malignancy\n- Courvoisier sign: Palpable non-tender gallbladder = malignancy (stone GB usually shrunken)\n- Charcot triad: Fever + jaundice + pain = ascending cholangitis\n\n## Diagnostic Workup\n**Liver Function Tests**\n- Serum bilirubin: Direct >50% of total (>2 mg/dL) confirms cholestasis\n- Alkaline phosphatase: 4-10 fold elevation (liver/biliary origin)\n- GGT: Elevated (distinguishes biliary/liver ALP from bone ALP)\n- PT: Prolonged (vitamin K malabsorption), improves with vitamin K injection\n\n**Imaging Studies**\n1. **Ultrasound**: First-line imaging\n   - Shows dilated intrahepatic and extrahepatic ducts\n   - Identifies gallstones, CBD stones (80% sensitivity)\n   - Rules out hepatomegaly, portal hypertension\n\n2. **CT scan**: Better for pancreatic assessment\n   - Pancreatic cancer, pancreatitis, CBD anatomy\n\n3. **MRCP**: Magnetic resonance cholangiopancreatography\n   - High sensitivity for CBD stones (95%)\n   - Non-invasive, no radiation, excellent biliary anatomy\n\n4. **ERCP**: Endoscopic retrograde cholangiopancreatography\n   - Therapeutic (stone extraction) + diagnostic\n   - Invasive, 3-5% pancreatitis risk\n\n## Management Strategies\n**Choledocholithiasis (CBD stones)**\n- **ERCP with sphincterotomy + stone extraction**: Gold standard\n- **Open CBD exploration + stone removal**: If ERCP fails or unavailable\n\n**Pancreatic Cancer (head)**\n- Palliative bypass: Hepaticojejunostomy (if non-resectable)\n- Resective: Whipple procedure (pancreaticoduodenectomy) if resectable\n\n**Bile Duct Stricture**\n- Balloon dilation or stent placement (ERCP)\n- Surgical reconstruction if complex\n\n**Acute Ascending Cholangitis**\n- **Emergency**: Biliary drainage (ERCP + stent or percutaneous)\n- IV antibiotics (broad-spectrum)\n- Fluid resuscitation\n- Address underlying obstruction (stones, malignancy) after acute phase\n\n**Pre-operative Preparation**\n- Vitamin K 10 mg IV daily × 2-3 days (improves PT)\n- Correction of coagulopathy\n- IV fluids (avoid overload → ascites)\n- Antibiotics if infected bile",
        mnemonics: [
          {
            text: "Obstructive Jaundice Management (US → MRCP → ERCP)",
            explanation: "Ultrasound first-line, MRCP diagnostic gold standard, ERCP therapeutic"
          },
          {
            text: "Ascending Cholangitis: Fever + Jaundice + Pain = Drain Biliary Tree",
            explanation: "Emergency ERCP ± percutaneous drainage"
          }
        ],
        keyPoints: [
          "Ultrasound: first-line imaging (cost-effective, no radiation)",
          "MRCP: best diagnostic imaging (95% sensitivity for CBD stones)",
          "ERCP: therapeutic gold standard for choledocholithiasis",
          "Vitamin K correction: essential pre-operatively for PT/INR"
        ],
        textbookRefs: [
          { book: "SRB's Clinical Surgery", chapter: "Bile Duct Obstruction - Management", edition: "15" },
          { book: "API Textbook of Medicine", chapter: "Biliary Tract Disease", edition: "11" }
        ]
      },
      {
        layer: 4,
        slug: "obstructive-jaundice-exam",
        title: "Obstructive Jaundice - Exam Prep",
        estimatedMinutes: 15,
        summary: "NEXT-pattern MCQ scenarios, differential diagnosis, and NMC surgical competency.",
        contentMd: "# Obstructive Jaundice - Exam Prep\n\n## NEXT-Pattern Concepts\n**Problem-Solving (60%)**\n- 55-year-old with RUQ pain, fever, jaundice → ascending cholangitis, emergency ERCP\n- 65-year-old painless progressive jaundice, palpable GB (Courvoisier) → pancreatic cancer\n- Conjugated hyperbilirubinemia + high ALP + mildly elevated transaminases → obstructive pattern\n\n**Analysis (30%)**\n- Explain why direct bilirubin elevates in obstruction (back-pressure)\n- Compare imaging: ultrasound vs MRCP vs ERCP (indications)\n- Analyze vitamin K deficiency mechanism (bile salts, fat-soluble absorption)\n\n**Recall (10%)**\n- Definition of obstructive jaundice\n- Charcot triad (fever + jaundice + pain)\n- Common causes (stones, cancer, strictures)\n\n## Differential Diagnosis Table\n| Feature | Obstructive | Hepatic | Hemolytic |\n|---------|-------------|---------|----------|\n| Direct bili | >50% of total | Variable | <50% of total |\n| ALP | Markedly ↑ | Mildly ↑ | Normal |\n| AST/ALT | Mildly ↑ | Markedly ↑ | Normal |\n| Urine color | Dark | Dark | Normal |\n| Stool color | Pale | Normal | Normal |\n\n## High-Yield Points\n- Choledocholithiasis: ERCP + sphincterotomy gold standard\n- Ascending cholangitis: Emergency drainage + antibiotics\n- Pancreatic cancer: Painless jaundice + Courvoisier sign\n- Vitamin K correction: Improves PT pre-operatively",
        mnemonics: [
          {
            text: "Jaundice Differential (Direct%, ALP, AST/ALT)",
            explanation: "Obstructive: high direct%, very high ALP, mild transaminases"
          }
        ],
        keyPoints: [
          "NMC: Competency in diagnosis and management of obstructive jaundice",
          "ERCP: therapeutic gold standard for choledocholithiasis and cholangitis",
          "Courvoisier sign: painless jaundice + palpable GB = malignancy",
          "Preoperative: vitamin K, correct coagulopathy, IV fluids (avoid overload)"
        ],
        textbookRefs: [
          { book: "NEET PG Surgery Review", chapter: "Biliary Obstruction", edition: "2025" },
          { book: "API Textbook", chapter: "Jaundice - Exam Focus", edition: "11" }
        ]
      },
      {
        layer: 5,
        slug: "obstructive-jaundice-recall",
        title: "Obstructive Jaundice - Active Recall",
        estimatedMinutes: 10,
        summary: "Quick flashcard facts, spaced repetition questions, and clinical pearls.",
        contentMd: "# Obstructive Jaundice - Active Recall\n\n## Quick Recall Facts\n1. **Definition**: Mechanical bile flow obstruction → conjugated hyperbilirubinemia\n2. **Direct bilirubin**: >50% of total, usually >2 mg/dL\n3. **ALP**: Markedly elevated (4-10 fold) - canalicular enzyme\n4. **Most common cause**: Choledocholithiasis (bile duct stones)\n5. **Imaging first-line**: Ultrasound (cost, no radiation)\n6. **Diagnostic gold standard**: MRCP (95% sensitivity for stones)\n7. **Therapeutic gold standard**: ERCP + sphincterotomy (CBD stones)\n8. **Charcot triad**: Fever + jaundice + RUQ pain = ascending cholangitis\n9. **Courvoisier sign**: Palpable non-tender GB = malignancy (not stone)\n10. **Vitamin K**: Corrects coagulopathy (PT/INR) pre-operatively\n\n## Spaced Repetition Questions\n- Why is direct bilirubin elevated in obstruction? (Back-pressure regurgitation)\n- Imaging for obstructive jaundice first-line? (Ultrasound)\n- Fever + jaundice + RUQ pain: diagnosis and emergency management? (Ascending cholangitis, ERCP)\n- CBD stone: procedure of choice? (ERCP + sphincterotomy)\n- Painless progressive jaundice + palpable GB: diagnosis? (Pancreatic cancer - Courvoisier sign)\n- PT/INR elevated in obstructive jaundice: reason? (Vitamin K malabsorption, bile salt deficit)\n- How to correct PT before surgery? (Vitamin K 10 mg IV daily × 2-3 days)\n- Most common cause of obstructive jaundice in India? (Choledocholithiasis/CBD stones)\n- When is MRCP used? (Diagnostic confirmation, CBD anatomy, pre-ERCP planning)\n- What is secondary biliary cirrhosis? (Chronic obstruction >4 weeks → fibrosis → cirrhosis)",
        mnemonics: [
          {
            text: "Obstructive Jaundice: Direct bili + High ALP + Pale stools",
            explanation: "Key clinical and biochemical features"
          },
          {
            text: "Management Ladder: US → MRCP → ERCP",
            explanation: "Screening, diagnosis, therapy"
          }
        ],
        keyPoints: [
          "Obstructive jaundice: always distinguish from hepatic and hemolytic",
          "Choledocholithiasis: ERCP treatment, >90% success rate",
          "Ascending cholangitis: emergency, risk of sepsis, drain biliary system",
          "Vitamin K essential pre-operatively (corrects PT in 48-72 hours)"
        ],
        textbookRefs: [
          { book: "Surgery Quick Review", chapter: "Biliary Obstruction", edition: "2" }
        ]
      }
    ]
  }
];
