export const regenBatch1Lessons = [
  {
    topicCode: "AS-MOD-01-TOP-01",
    layers: [
      {
        layer: 1,
        slug: "stages-anesthesia-agents-foundation",
        title: "Stages of Anesthesia & Agents - Foundation",
        estimatedMinutes: 20,
        summary: "Introduction to the classical stages of general anesthesia (induction, maintenance, emergence) and the pharmacological agents used at each stage.",
        contentMd: "# Stages of Anesthesia & Agents - Foundation\n\n## Definition of General Anesthesia\nGeneral anesthesia is a drug-induced reversible state of unconsciousness with amnesia, analgesia, muscle relaxation, and loss of protective airway reflexes.\n\n## Guedel's Stages of Anesthesia\nClassical teaching divides anesthesia into 4 stages:\n\n### Stage 1: Analgesia (Induction)\n- Patient remains conscious but develops analgesia\n- Amnesia develops\n- Protective airway reflexes intact\n- Duration: brief, 5-30 seconds\n- Eyes open, pupil normal\n\n### Stage 2: Delirium/Excitement\n- Loss of consciousness\n- Irregular breathing, muscle tone increased\n- Patient may struggle, cough, or vomit\n- Laryngeal and pharyngeal reflexes brisk\n- Shortest stage, bypass by IV induction\n- Tachycardia and hypertension\n\n### Stage 3: Surgical Anesthesia\n- Divided into planes 1-4 (respiratory)\n- Regular breathing, muscle relaxation\n- Loss of protective reflexes\n- Pupils constricted, react to light\n- Optimal stage for surgery\n\n### Stage 4: Medullary Depression\n- Severe respiratory depression\n- Cardiovascular collapse\n- Pupils dilated, fixed\n- Occurs with overdose\n- Medical emergency\n\n## Common Anesthetic Agents\n**Intravenous**: Propofol, Thiopental, Etomidate, Ketamine\n**Inhalational**: Sevoflurane, Isoflurane, Nitrous oxide\n**Opioids**: Fentanyl, Morphine, Remifentanil",
        mnemonics: [
          {
            text: "ASEA",
            explanation: "Analgesia, Surgical anesthesia, Excitement, Anesthesia (medullary depression) - wait, use SAME instead: Surgical, Analgesia, Medullary, Excitement"
          },
          {
            text: "SOAP",
            explanation: "Stage 1 Analgesia, Stage 2 Often dangerous, Stage 3 Anesthesia, Stage 4 Problem"
          }
        ],
        keyPoints: [
          "Stage 1: Analgesia with intact reflexes",
          "Stage 2: Excitement - avoid by using IV induction",
          "Stage 3: Surgical anesthesia with 4 planes",
          "Stage 4: Medullary depression - dangerous, avoid"
        ],
        textbookRefs: [
          { book: "Textbook of Anaesthesia for Postgraduates", chapter: "Ch 3", edition: "2nd" },
          { book: "Guyton & Hall Physiology", chapter: "Ch 54", edition: "14th" }
        ]
      },
      {
        layer: 2,
        slug: "stages-anesthesia-agents-mechanism",
        title: "Stages of Anesthesia & Agents - Mechanism",
        estimatedMinutes: 30,
        summary: "Neurophysiological mechanisms underlying anesthetic stages, agent pharmacokinetics, and receptor interactions.",
        contentMd: "# Stages of Anesthesia & Agents - Mechanism\n\n## Neurophysiological Basis of Anesthesia\nAnesthetics work via multiple mechanisms:\n- GABA-A receptor enhancement (most agents)\n- NMDA receptor antagonism (Ketamine)\n- Sodium/potassium channel modulation\n- Membrane fluidity changes\n\n## Pharmacokinetics of Common Agents\n\n| Agent | Route | Onset | Duration | Metabolism |\n|-------|-------|-------|----------|------------|\n| Propofol | IV | 30-40s | 5-10min | Hepatic |\n| Thiopental | IV | 10-20s | 20-30min | Hepatic |\n| Etomidate | IV | 10-20s | 5-10min | Ester hydrolysis |\n| Ketamine | IV/IM | 30s/1-2min | 10-15min | Hepatic |\n| Sevoflurane | Inhal | 2-3min | Variable | Minimal metabolism |\n| Isoflurane | Inhal | 7-10min | Variable | Minimal metabolism |\n\n## Stage-Specific Pharmacology\n\n### Stage 1 (Analgesia)\n- Threshold dose reached at limbic system\n- Analgesic effect via thalamic nuclei depression\n- Cortex still functioning\n- NO agents selectively produce Stage 1\n\n### Stage 2 (Excitement)\n- Differential depression: cortex depressed more than limbic system\n- Pyramidal tract disruption causes muscle rigidity\n- Brainstem reflexes intact causing hyperactivity\n- Most agents pass through this stage quickly\n\n### Stage 3 (Surgical Anesthesia)\n- Progressive cortical and subcortical depression\n- Medullary centers functioning\n- Different planes show progressive loss of reflexes\n- Corneal reflex lost in plane 2-3\n\n## Plane Classification (Stage 3)\n**Plane 1**: Intact corneal reflex, regular breathing\n**Plane 2**: Lost corneal reflex, intercostal paralysis begins\n**Plane 3**: Complete intercostal paralysis, diaphragm working\n**Plane 4**: Respiratory paralysis, cardiovascular depression\n\n## Emergence from Anesthesia\nReverse order of depression:\n- Brainstem recovers first\n- Subcortical structures\n- Cortex last to recover\n- Protective reflexes return before consciousness",
        mnemonics: [
          {
            text: "GABA",
            explanation: "Most anesthetics enhance GABA-A inhibitory neurotransmission"
          },
          {
            text: "KANES",
            explanation: "Ketamine - NMDA antagonist, others - GABA agonists, Nitrous - multiple sites, Etomidate/Esomeprazole - GABA"
          }
        ],
        keyPoints: [
          "GABA-A enhancement is primary mechanism for most agents",
          "Ketamine uniquely blocks NMDA receptors",
          "Propofol/Thiopental work faster via lipophilicity",
          "Planes of Stage 3 correlate with progressive reflex loss",
          "IV agents bypass Stage 2 excitement"
        ],
        textbookRefs: [
          { book: "Rang & Dale's Pharmacology", chapter: "Ch 48", edition: "9th" },
          { book: "Textbook of Anaesthesia", chapter: "Ch 2-4", edition: "5th" }
        ]
      },
      {
        layer: 3,
        slug: "stages-anesthesia-agents-clinical",
        title: "Stages of Anesthesia & Agents - Clinical",
        estimatedMinutes: 20,
        summary: "Clinical application of anesthetic agents, selection criteria for Indian patients, monitoring during different stages, and common complications.",
        contentMd: "# Stages of Anesthesia & Agents - Clinical\n\n## Clinical Application in Indian Settings\n\n### Premedication\n- Glycopyrrolate 0.2-0.4mg IV (preferred over atropine in India due to better stability)\n- Morphine/Pethidine for analgesia\n- Benzodiazepine for anxiolysis\n- Avoids Stage 2 excitement\n\n### Induction Agent Selection\n\n**Propofol (1-2.5 mg/kg IV)**\n- Gold standard in India\n- Rapid, smooth induction\n- Antiemetic properties\n- Reduces intracranial pressure\n- Caution: cardiovascular depression, pain on injection\n- Cost-effective at most Indian centers\n\n**Thiopental (3-5 mg/kg IV)**\n- Less expensive than Propofol\n- Longer context-sensitive half-time\n- Not suitable for asthmatics (histamine release)\n- More cardiovascular depression\n- Still used in resource-limited settings\n\n**Etomidate (0.2-0.3 mg/kg IV)**\n- Most stable cardiovascular agent\n- Single dose does not significantly affect adrenal function\n- Useful in hemodynamically unstable patients\n- Pain on injection\n\n**Ketamine (1-2 mg/kg IV, 4-5 mg/kg IM)**\n- Preserves airway reflexes better\n- Analgesic properties\n- Useful in trauma, emergency anesthesia\n- Increased ICP, increased secretions\n- Dissociative emergence phenomena (reduce with benzodiazepines)\n\n### Maintenance Agents\n\n**Sevoflurane (2-3% with 50% N2O)**\n- Non-irritant, rapid emergence\n- Organ safe\n- Cost prohibitive at most Indian centers\n- Used in pediatric anesthesia\n\n**Isoflurane (1-2%)**\n- More pungent, airway irritation\n- Neuromuscular blocking potentiation\n- More cardiovascular stable than sevoflurane\n\n**Nitrous Oxide (50-70%)**\n- Weak anesthetic, good analgesic\n- Rapid emergence\n- Risk of diffusion hypoxia\n- Risk of megaloblastic anemia with chronic use\n- Avoid in bowel obstruction, pneumothorax\n\n## Monitoring During Anesthetic Stages\n\n### Stage 1-2 Monitoring\n- Observe eye opening, speech, orientation\n- Monitor blood pressure, heart rate\n- Assess muscle tone\n\n### Stage 3 Monitoring (Surgical Anesthesia)\n- ECG for cardiac status\n- SpO2 and ETCO2\n- Blood pressure every 5-15 minutes\n- Temperature monitoring (hypothermia common)\n- Neuromuscular monitoring if using relaxants\n\n### Avoiding Stage 4\n- Maintain normal ventilation\n- Avoid excessive agent concentration\n- Monitor pupil size and reaction\n- Watch for cardiovascular instability\n\n## Common Complications During Stages\n\n**During Stage 2 (Excitement)**\n- Laryngospasm risk\n- Aspiration risk\n- Increased intracranial pressure\n- Tachycardia and hypertension\n- Involuntary movements\n\n**During Stage 3 (Surgical)**\n- Hypothermia\n- Cardiovascular depression (depth-dependent)\n- Muscle relaxation can lead to difficult reversal\n\n**During Emergence (Stage 3 → 1)**\n- Laryngospasm in Stage 2 again\n- Coughing, straining\n- Postoperative nausea and vomiting\n- Delirium (especially with ketamine)\n\n## Indian Clinical Context\n- Limited access to volatile agents in many centers\n- TIVA (Total IV Anesthesia) becoming popular\n- Manual ventilation still common\n- Consideration for power cuts and ICU availability",
        mnemonics: [
          {
            text: "SAKE",
            explanation: "Sevoflurane - safe, Anesthesia IV agents, Ketamine - dissociative, Etomidate - stable hemodynamics"
          },
          {
            text: "PETTI",
            explanation: "Propofol, Etomidate, Thiopental, Thiopental (repeat), IV induction agents"
          }
        ],
        keyPoints: [
          "Propofol is gold standard induction in most Indian centers",
          "Thiopental still widely used due to cost",
          "Ketamine useful in emergency/trauma settings",
          "Volatile agents expensive, TIVA increasingly used",
          "IV induction bypasses dangerous Stage 2",
          "Close monitoring during Stage 3 prevents Stage 4 complications"
        ],
        textbookRefs: [
          { book: "Clinical Practice of Anaesthesia", chapter: "Ch 15-20", edition: "4th" },
          { book: "Textbook of Anaesthesia for Postgraduates", chapter: "Ch 5-8", edition: "2nd" }
        ]
      },
      {
        layer: 4,
        slug: "stages-anesthesia-agents-exam",
        title: "Stages of Anesthesia & Agents - Exam Prep",
        estimatedMinutes: 15,
        summary: "Exam-focused content covering NEXT-pattern questions, high-yield facts, and commonly tested concepts.",
        contentMd: "# Stages of Anesthesia & Agents - Exam Prep\n\n## High-Yield Facts for Exams\n\n### Stage Characteristics (Quick Recall)\n| Stage | Consciousness | Airway Reflexes | Pupils | Clinical Use |\n|-------|----------------|------------------|--------|---------------|\n| 1 | Conscious | Present | Normal | Analgesia only |\n| 2 | Lost | Brisk | Normal | AVOID |\n| 3 | Unconscious | Lost | Constricted | SURGERY |\n| 4 | Deep coma | Lost | Dilated | DANGER |\n\n### Agent Comparison Chart\n\n**Cardiovascular Effects**\n- Propofol > Thiopental > Etomidate (least effect)\n- Ketamine INCREASES BP\n\n**Onset Time**\n- IV: Thiopental > Propofol ≈ Etomidate > Ketamine\n- IM: Ketamine fastest\n\n**Recovery**\n- Etomidate > Propofol > Thiopental > Isoflurane\n\n### Special Situations\n\n**Hypovolemic Shock**\n- Use: Etomidate or Ketamine\n- Avoid: Propofol, Thiopental\n\n**Asthma/COPD**\n- Use: Propofol, Etomidate, Ketamine\n- Avoid: Thiopental (histamine release), Desflurane (airway irritant)\n\n**Raised ICP**\n- Use: Propofol, Etomidate\n- Avoid: Ketamine, Isoflurane\n\n**Porphyria**\n- Avoid: Thiopental, Barbiturates\n- Use: Propofol, Etomidate, Ketamine\n\n**Anaphylaxis Risk**\n- Highest: Atracurium, Mivacurium, Cephalosporins\n- Thiopental: Low\n- Propofol: Very low (use soybean oil emulsion)\n\n## Common Exam Questions\n\n**Q: Which stage has laryngeal reflexes brisk?**\nA: Stage 2 (Excitement) - highest risk for laryngospasm\n\n**Q: Most rapid IV induction agent?**\nA: Thiopental (10-20s) but Propofol similar\n\n**Q: Agent preserving airway reflexes best?**\nA: Ketamine - maintains protective reflexes better than others\n\n**Q: Pupil changes in Stage 3 progression?**\nA: Constricted early, dilate as depth increases toward Stage 4\n\n**Q: Which agent causes pain on injection?**\nA: Ketamine and Etomidate (reduce with lidocaine pretreatment)\n\n**Q: Diffusion hypoxia risk with?**\nA: Nitrous oxide during emergence\n\n**Q: Megaloblastic anemia risk with?**\nA: Chronic nitrous oxide exposure\n\n## NEXT-Pattern Problem Solving\n\n**Scenario 1**: A 45-year-old trauma patient with severe hemorrhage is brought to OR. BP 80/50, HR 130. Best induction agent?\n- Wrong: Propofol (causes vasodilation and further BP drop)\n- Wrong: Thiopental (severe cardiovascular depression)\n- Correct: Etomidate (preserves hemodynamics) or reduced-dose Ketamine (maintains perfusion pressure)\n\n**Scenario 2**: 60-year-old with asthma scheduled for elective surgery. Which agent must be avoided?\n- Wrong: Propofol (actually good)\n- Correct: Thiopental (histamine release, bronchoconstriction)\n- Also acceptable: Avoid Desflurane (airway irritant)\n\n**Scenario 3**: Patient develops laryngospasm during induction (Stage 2). Management?\n- Stop induction agent\n- Increase oxygen, positive pressure\n- May need IV succinylcholine or IV Propofol\n- Have emergency equipment ready\n\n## Mnemonics for Exams\n\n**Stage Signs - SPACED**\n- **S**tage 1: Slight analgesia\n- **P**upils: Progressive changes\n- **A**irway: Lost in Stage 3\n- **C**onsciousness: Lost in Stage 2\n- **E**xcitement: Stage 2 (Eliminate)\n- **D**epression: Medullary (Stage 4)\n\n**Agent Choice - PEAK**\n- **P**ropofol: Gold standard\n- **E**tomidate: Hemodynamically stable\n- **A**voided: Thiopental (porphyria, asthma)\n- **K**etamine: Trauma/Emergency",
        mnemonics: [
          {
            text: "SPACED",
            explanation: "Stages progression: Slight analgesia, Pupils change, Airway reflexes lost, Consciousness lost, Excitement (Stage 2), Danger (medullary)"
          },
          {
            text: "PEAK",
            explanation: "Propofol, Etomidate, Avoid thiopental, Ketamine for trauma"
          }
        ],
        keyPoints: [
          "Stage 2 = Excitement = Highest complication risk",
          "Etomidate best for hemodynamic stability",
          "Propofol = gold standard, safe, most versatile",
          "Ketamine = trauma/emergency agent with preserved reflexes",
          "Thiopental = avoid in asthma, porphyria, hypovolemia",
          "IV induction preferred to bypass Stage 2"
        ],
        textbookRefs: [
          { book: "AIIMS Pattern MCQ in Anaesthesia", chapter: "Ch 3", edition: "2nd" },
          { book: "Jadavpur University Anesthesia Review", chapter: "Induction agents", edition: "Latest" }
        ]
      },
      {
        layer: 5,
        slug: "stages-anesthesia-agents-recall",
        title: "Stages of Anesthesia & Agents - Active Recall",
        estimatedMinutes: 10,
        summary: "Active recall questions and self-assessment to consolidate understanding of anesthetic stages and agents.",
        contentMd: "# Stages of Anesthesia & Agents - Active Recall\n\n## Quick Recall Questions\n\n**1. What characterizes Stage 2 of anesthesia?**\n[Answer: Excitement phase with intact brainstem reflexes but depressed cortex, causing involuntary movements, laryngeal hyperreactivity, tachycardia, hypertension. Most dangerous stage for complications like laryngospasm and aspiration.]\n\n**2. Name the 4 stages of anesthesia in order.**\n[Answer: 1) Analgesia, 2) Excitement (Delirium), 3) Surgical Anesthesia, 4) Medullary Depression]\n\n**3. Which induction agent has fastest onset?**\n[Answer: Thiopental (10-20 seconds) followed by Propofol (30-40 seconds)]\n\n**4. What is the mechanism of action of Propofol?**\n[Answer: Enhancement of GABA-A inhibitory neurotransmission]\n\n**5. Which agent is best choice in hypovolemic shock?**\n[Answer: Etomidate (preserves hemodynamics) or reduced-dose Ketamine]\n\n**6. Why avoid Thiopental in asthma patients?**\n[Answer: Histamine release causing bronchoconstriction]\n\n**7. What is diffusion hypoxia and with which agent?**\n[Answer: Rapid diffusion of N2O into blood can dilute alveolar O2. Occurs during emergence. Prevent by giving 100% O2 at end of surgery.]\n\n**8. Planes of Stage 3 surgical anesthesia - list features**\n[Answer: Plane 1 (corneal reflex present), Plane 2 (corneal reflex lost), Plane 3 (intercostal paralysis), Plane 4 (respiratory paralysis - DANGER)]\n\n**9. How does Ketamine differ from other IV agents?**\n[Answer: Maintains airway reflexes, analgesia, and sympathomimetic effects. Causes dissociative emergence phenomena.]\n\n**10. What is the order of recovery from anesthesia?**\n[Answer: Brainstem → Subcortical → Cortex. Protective reflexes return before consciousness.]\n\n## Scenario-Based Recall\n\n**Scenario A**: \"Patient in Stage 3, Plane 3 during surgery. Suddenly BP drops to 80/50, HR 130. What happened?\"\n[Possible answers: Over-deepening toward Plane 4, volatile agent overdose, anesthetic complications. Reduce agent depth immediately.]\n\n**Scenario B**: \"45-year-old for emergency appendicectomy, severely dehydrated. Which induction agent would you choose?\"\n[Answer: Etomidate (preserves BP) or reduced-dose Ketamine (maintains sympathomimetic tone)]\n\n**Scenario C**: \"Patient develops laryngospasm immediately after intubation. Which stage is this in?\"\n[Answer: Actually between Stage 2 and 3 - laryngeal reflexes very brisk. Immediate management needed.]\n\n## True/False Recall\n\n1. Stage 1 anesthesia involves complete loss of consciousness.\n[False - consciousness retained, only analgesia develops]\n\n2. Propofol is contraindicated in porphyria patients.\n[False - Propofol is safe; Thiopental is contraindicated]\n\n3. Nitrous oxide causes megaloblastic anemia with chronic exposure.\n[True - via vitamin B12 inactivation]\n\n4. Ketamine causes dose-dependent respiratory depression like propofol.\n[False - Ketamine maintains airway reflexes better]\n\n5. Stage 4 anesthesia is a desired endpoint during surgery.\n[False - Stage 4 is medullary depression; danger zone]\n\n6. Etomidate is safe in adrenal insufficiency after single dose.\n[True - but multiple doses or infusion can suppress cortisol]\n\n## Clinical Application Recall\n\n**Q: You are anesthesia tech assisting in OR. Monitor shows regular breathing, constricted pupils, patient not moving during surgical incision. What stage/plane is patient in?**\nA: Stage 3, Plane 2 or 3 (regular breathing = Plane 1-2, constricted pupils and no movement suggest Plane 2-3)\n\n**Q: After 2 hours of sevoflurane anesthesia, what is earliest sign of emergence (returning to consciousness)?**\nA: Return of protective airway reflexes first, then eye opening, then orientation\n\n**Q: Why is propofol preferred for induction in most Indian operating rooms despite higher cost?**\nA: Rapid, smooth induction; bypasses Stage 2 excitement; antiemetic; reduces ICP; cardiovascularly more stable than thiopental in elective patients\n\n## Fill-in-the-Blank Recall\n\n1. The most dangerous stage of anesthesia is Stage ___.\n[Answer: 2 (Excitement/Delirium)]\n\n2. ___ is the only agent that maintains airway reflexes relatively well.\n[Answer: Ketamine]\n\n3. ___ causes pain on injection and requires pretreatment with lidocaine.\n[Answer: Ketamine and Etomidate]\n\n4. In Stage 3, Plane ___ marks complete intercostal paralysis.\n[Answer: 3 or 4 (Plane 3 = complete intercostal paralysis, Plane 4 = respiratory paralysis)]\n\n5. ___ oxide should be avoided in patients with bowel obstruction or pneumothorax.\n[Answer: Nitrous (N2O)]\n\n6. The agent of choice in hemodynamically unstable patients is ___.\n[Answer: Etomidate]\n\n7. ___ is contraindicated in patients with acute intermittent porphyria.\n[Answer: Thiopental]",
        mnemonics: [
          {
            text: "RECOVER",
            explanation: "Recovery order: Reticular activating system, Everythng subcortical, Cortex last, Onset was reverse"
          },
          {
            text: "2BEWARE",
            explanation: "Stage 2: Beware of Laryngospasm, Aspiration, Excitement, Risk of complications"
          }
        ],
        keyPoints: [
          "Active recall: What defines each stage and plane",
          "Remember agents and when to use them",
          "Scenario thinking develops clinical judgment",
          "Stage 2 is most dangerous - know complications",
          "Recovery happens in reverse of induction",
          "Know contraindications for special patient populations"
        ],
        textbookRefs: [
          { book: "Self-Assessment Questions in Anaesthesia", chapter: "Ch 2", edition: "3rd" },
          { book: "Anaesthesia Review", chapter: "Self-assessment", edition: "Latest" }
        ]
      }
    ]
  },
  {
    topicCode: "AS-MOD-01-TOP-02",
    layers: [
      {
        layer: 1,
        slug: "airway-management-intubation-foundation",
        title: "Airway Management & Intubation - Foundation",
        estimatedMinutes: 20,
        summary: "Basic anatomy of the airway, airway assessment, and introduction to endotracheal intubation techniques.",
        contentMd: "# Airway Management & Intubation - Foundation\n\n## Anatomy of the Airway\n\n### Upper Airway Structures\n- **Nose/Mouth**: Entry points\n- **Pharynx**: Nasopharynx, oropharynx, laryngopharynx\n- **Larynx**: C3-C6, contains vocal cords\n- **Trachea**: C6-T1, cartilaginous rings\n- **Epiglottis**: Protects airway during swallowing\n- **Arytenoid cartilages**: Form vocal cord attachments\n\n### Laryngeal Anatomy\n- **Anterior commissure**: Where vocal cords meet anteriorly\n- **Posterior commissure**: Where vocal cords meet posteriorly\n- **Glottis**: Opening between vocal cords\n- **Rima glottidis**: Space for breathing\n- **Subglottis**: Below vocal cords to trachea\n\n### Innervation\n- **Superior laryngeal nerve**: Above vocal cords\n- **Recurrent laryngeal nerve**: Below vocal cords and motor\n- **Glossopharyngeal nerve**: Posterior pharynx\n- **Vagus nerve**: Main parasympathetic supply\n\n## Airway Assessment (Pre-intubation)\n\n### Airway Examination\n\n**Mouth Opening (Interincisor Distance)**\n- Normal: >4 cm\n- Difficult: <2 cm\n\n**Jaw Protrusion (Sterno-mental Distance)**\n- Normal: >12.5 cm\n- Difficult: <6 cm\n\n**Neck Extension (Thyro-mental Distance)**\n- Normal: >6.5 cm\n- Difficult: <6 cm\n\n**Mallampati Score (Visualized at Rest)**\n- Class 1: Soft palate, fauces, uvula, pillars visible\n- Class 2: Soft palate, fauces, uvula visible\n- Class 3: Soft palate, uvula visible\n- Class 4: Only soft palate visible\n- Higher class = difficult intubation\n\n**Dental Assessment**\n- Natural vs dentures\n- Protruding teeth\n- Short interdental distance\n\n## Types of Intubation\n\n### Oral Intubation\n- Most common\n- Tube through mouth, past vocal cords into trachea\n- Requires larger tube\n- Better visualization\n- More patient discomfort post-extubation\n\n### Nasal Intubation\n- Through nose into trachea\n- Smaller tube size\n- Better patient tolerance\n- Risk of epistaxis\n- Contraindicated: facial trauma, basilar skull fracture, coagulopathy\n\n### Fiber-optic Intubation\n- Under direct visualization with flexible scope\n- Awake intubation possible\n- Useful for difficult airway\n- Requires training and equipment\n\n## Endotracheal Tube Components\n\n**Tube Structure**\n- Proximal end: 15mm adapter to breathing circuit\n- Distal end: Bevel angle for direction\n- Cuff: Inflatable balloon for seal\n- Murphy eye: Side hole (patent distal lumen if main occluded)\n- Markings: Depth indicators at mouth/nose\n\n**Tube Sizing**\n- Adults: 7.0-8.5 mm internal diameter (women smaller, men larger)\n- Children: 4.0 mm (age 1), increasing with age\n- Formula: 16 + (age in years)/4 for children\n\n## Basics of Laryngoscopy\n\n**Direct Laryngoscopy**\n- Visualization of vocal cords under direct light\n- Straight blade vs curved blade\n- Cormack-Lehane grading\n\n**Indirect Laryngoscopy**\n- Video laryngoscope\n- Better visualization in difficult cases\n- Steeper learning curve\n\n**Cormack-Lehane Grades**\n- Grade 1: Full view of vocal cords\n- Grade 2: Partial view of vocal cords\n- Grade 3: Epiglottis only visible\n- Grade 4: Only soft palate visible\n- Grades 3-4 = difficult intubation",
        mnemonics: [
          {
            text: "DAMT",
            explanation: "Difficult Airway Management Triad: Distance (thyro-mental), Airway (Mallampati), Mouth opening, Teeth"
          },
          {
            text: "LEMON",
            explanation: "Laryngeal view, Evaluate Mallampati, Mandibular space, Obstruction, Neck (mobility)"
          }
        ],
        keyPoints: [
          "Airway anatomy critical for intubation planning",
          "Mallampati score predicts intubation difficulty",
          "Oral intubation most common in emergencies",
          "Nasal intubation contraindicated in skull base fractures",
          "Tube size matters for patient comfort and airway seal",
          "Cormack-Lehane grade determined at laryngoscopy"
        ],
        textbookRefs: [
          { book: "Clinical Practice of Anaesthesia", chapter: "Ch 29", edition: "4th" },
          { book: "Textbook of Airway Management", chapter: "Ch 1-3", edition: "2nd" }
        ]
      },
      {
        layer: 2,
        slug: "airway-management-intubation-mechanism",
        title: "Airway Management & Intubation - Mechanism",
        estimatedMinutes: 30,
        summary: "Physiological responses to laryngoscopy and intubation, airway reflex management, and intubation techniques.",
        contentMd: "# Airway Management & Intubation - Mechanism\n\n## Physiological Responses to Laryngoscopy\n\n### Mechanical Stimulation Effects\n- Laryngoscopy directly stimulates glossopharyngeal (CN IX) and vagal (CN X) afferents\n- Afferent pathway: Via vagus and glossopharyngeal nerves\n- Efferent pathway: Via sympathetic and parasympathetic systems\n\n### Sympathetic Response (Predominant)\n- **Catecholamine Release**: Epinephrine and norepinephrine surge\n- **Cardiovascular**: Hypertension (20-30 mmHg increase), tachycardia (15-25 bpm increase)\n- **Metabolic**: Hyperglycemia, increased metabolic rate\n- **Peak Response**: 30-60 seconds after laryngoscopy\n- **Duration**: Usually subsides within 5-10 minutes\n\n### Parasympathetic Response\n- **Vagal Stimulation**: Can cause bradycardia, hypotension\n- More common in children\n- Can be severe in response to hypoxia\n- Prevention: Adequate anesthesia depth\n\n### Reflex Responses\n\n**Laryngospasm**\n- Complete closure of vocal cords\n- Protective reflex against aspiration\n- Triggered by: Inadequate anesthesia, pharyngeal secretions, airway manipulation\n- Management: Remove stimulus, positive pressure oxygen, deepen anesthesia, succinylcholine if severe\n\n**Bronchoconstriction**\n- Airway hyperreactivity\n- More common in asthmatics\n- From histamine release or direct vagal stimulation\n- Management: Avoid triggering agents, use smooth induction agents\n\n**Coughing**\n- Irritation of lower airway\n- Common during intubation\n- Can increase intracranial pressure\n- Prevented by adequate anesthesia and topical local anesthetic\n\n## Attenuating Intubation Response\n\n### Pre-medication\n- Glycopyrrolate 0.2 mg IV: Prevents vagal response\n- Opioids: Attenuate hypertensive response\n- Alpha-2 agonists (Dexmedetomidine): Smooth the response\n\n### Topical Anesthesia\n- Lidocaine spray to pharynx and cords\n- Reduces afferent stimulation\n- Particularly useful in awake intubation\n\n### Adequate Anesthesia Depth\n- 3-4 minutes from induction to intubation\n- Allows anesthetic to work\n- Prevents \"light\" anesthesia response\n\n### Neuromuscular Blockade\n- Succinylcholine: Rapid onset, short duration (for RSI)\n- Non-depolarizing agents: Rocuronium (used for RSI instead of succinylcholine now)\n- Prevents patient movement, improves intubation conditions\n\n## Intubation Techniques\n\n### Direct Laryngoscopy (DL)\n\n**Straight Blade (Miller)**\n- Lifts epiglottis directly\n- Better for anterior larynx, large tongue\n- Better visualization of subglottis\n\n**Curved Blade (Macintosh)**\n- Lifts epiglottis indirectly by elevating pharyngeal tissues\n- Less traumatic\n- Better visualization of vocal cords at 3-4 mm opening\n- More commonly used\n\n**Technique Steps**\n1. Patient in \"sniffing position\" (pillow under head, head extended at atlanto-occipital joint)\n2. Insert blade gradually along right side of mouth\n3. Displace tongue leftward\n4. Identify landmarks (epiglottis, glottis)\n5. Insert tube through vocal cords\n6. Remove blade\n7. Inflate cuff, confirm position\n\n### Video Laryngoscopy\n- Camera at blade tip\n- Monitor visualization\n- Advantages: Better visualization in difficult cases, teaching tool\n- Disadvantages: Cost, learning curve, oropharyngeal manipulation still needed\n\n## Tube Placement Confirmation\n\n### Clinical Signs of Correct Placement\n- Bilateral chest wall movement\n- Bilateral breath sounds on auscultation\n- Absence of air sounds over epigastrium\n- Condensation in tube during exhalation\n- Improved oxygen saturation\n\n### Instrumental Confirmation\n\n**Capnography (Gold Standard)**\n- Detects CO2 in exhaled gas\n- Quantitative: Graph shows waveform\n- Provides respiratory rate monitoring\n\n**Chest X-ray**\n- Confirms final tube position\n- Tip should be 3-5 cm above carina\n- Prevents endobronchial intubation\n\n**Fiberoptic Visualization**\n- Direct visualization through tube\n- When in doubt about position\n\n## Prevention of Intubation Complications\n\n**Dental Trauma**\n- Gentle manipulation\n- Check for loose teeth pre-operatively\n- Careful blade positioning\n\n**Laryngeal Edema**\n- Minimize manipulation\n- Use appropriate sized tube\n- Gentle technique\n- Consider steroid prophylaxis if difficult intubation\n\n**Hoarseness/Sore Throat**\n- Proper cuff pressure (20-30 cm H2O)\n- Avoid overinflation\n- Lubricate tube\n- Minimal duration of intubation\n\n**Aspiration**\n- RSI: Cricoid pressure (controversial now)\n- Rapid sequence: Induction to cuff inflation quickly\n- Proper positioning and airway management",
        mnemonics: [
          {
            text: "SALAD",
            explanation: "Sympathetic response Attenuation: Location (topical), Anesthesia depth, Lidocaine, Analgesia (opioids), Drying agent"
          },
          {
            text: "SLAM",
            explanation: "Straight blade - Lift Epiglottis, Macintosh - displace pharynx (indirect)"
          }
        ],
        keyPoints: [
          "Laryngoscopy triggers catecholamine surge (sympathetic)",
          "Hypertension and tachycardia peak at 30-60 seconds",
          "Attenuate response with adequate anesthesia depth",
          "Laryngospasm = protective reflex requiring quick management",
          "Straight blade directly lifts epiglottis",
          "Curved blade lifts indirectly via pharyngeal tissues",
          "Capnography is gold standard for tube confirmation",
          "Proper cuff pressure prevents complications"
        ],
        textbookRefs: [
          { book: "Rang & Dale's Pharmacology", chapter: "Ch 48", edition: "9th" },
          { book: "Clinical Anaesthesia", chapter: "Ch 17-20", edition: "8th" }
        ]
      },
      {
        layer: 3,
        slug: "airway-management-intubation-clinical",
        title: "Airway Management & Intubation - Clinical",
        estimatedMinutes: 20,
        summary: "Difficult airway management, Indian clinical context, complications and management, and emergency airway techniques.",
        contentMd: "# Airway Management & Intubation - Clinical\n\n## Difficult Airway Management\n\n### Prediction of Difficult Airway\n\n**LEMON Score**\n- **L** - Mallampati score\n- **E** - Extent of mouth opening\n- **M** - Mandibular protrusion\n- **O** - Obstruction/Obesity\n- **N** - Neck mobility\nEach abnormality = difficult airway\n\n### Clinical Situations Predicting Difficulty\n\n**Anatomical Factors**\n- Mallampati Class 3-4\n- Limited mouth opening (<3 cm)\n- Short thyro-mental distance\n- Receding mandible\n- Macroglossia\n- Facial/nasal abnormalities\n\n**Systemic Factors**\n- Pregnancy (edema, weight gain)\n- Obesity (limited neck extension)\n- Acromegaly (large tongue)\n- Down syndrome (hypotonia)\n- Ankylosing spondylitis (limited neck mobility)\n- Cervical spine trauma\n- Rheumatoid arthritis (atlantoaxial subluxation risk)\n\n### Management of Known Difficult Airway\n\n**Pre-operative Planning**\n1. Assess severity: Is intubation mandatory?\n2. Awake intubation consideration\n3. Prepare: Have backup plans, equipment ready\n4. Inform patient and team\n\n**Techniques**\n\n**Awake Intubation**\n- Patient conscious and breathing spontaneously\n- Topical anesthesia of pharynx and larynx\n- Local anesthetic + mild sedation (remifentanil infusion)\n- Fiberoptic scope or video laryngoscope\n- No muscle relaxants used\n- Advantages: Maintains airway reflexes, breathing\n- Used in: Difficult airways, cervical spine injuries\n\n**Fiberoptic Intubation (Gold Standard for Difficult Airway)**\n- Flexible endoscope with camera\n- Can navigate difficult anatomy\n- Minimal manipulation needed\n- Training required\n\n**Video Laryngoscope**\n- Better visualization\n- Can manage anterior larynx better\n- Second-line if difficulty encountered\n\n## Rapid Sequence Induction (RSI)\n\n**Indications**\n- Emergency surgery with full stomach\n- Non-fasted patients\n- GER, obesity, pregnancy\n- Increased gastric contents\n\n**Technique**\n1. Pre-oxygenation (3 minutes 100% O2, or 8 breaths)\n2. Apply cricoid pressure (10 N awake, 30 N after loss of consciousness)\n3. Induction agent IV (Propofol 2 mg/kg or Ketamine 1 mg/kg)\n4. Succinylcholine (1-1.5 mg/kg) - NOW controversial, Rocuronium 1.2 mg/kg often preferred\n5. Intubate within 10 seconds if possible\n6. Confirm tube position\n7. Release cricoid pressure\n\n**Indian Modifications**\n- Succinylcholine still widely used (cost advantage)\n- Manual ventilation often avoided to prevent gastric insufflation\n- Awake fiberoptic common in difficult cases\n\n## Extubation (Removal of ET Tube)\n\n### Extubation Criteria\n- Protective airway reflexes present\n- Adequate oxygenation (SpO2 >94% on room air)\n- Spontaneous ventilation adequate\n- Neuromuscular blockade fully reversed\n- Patient alert and oriented\n- No ongoing need for airway protection\n\n### Extubation Technique\n1. Position: Left lateral decubitus, head extended\n2. Suction oropharynx and subglottis\n3. Deflate cuff completely\n4. Withdraw tube in one smooth motion at end of expiration\n5. Maintain oxygen delivery\n6. Monitor for laryngospasm\n\n### Post-extubation Care\n- Observe for stridor, respiratory distress\n- Humidified oxygen for 30-60 minutes\n- Voice assessment\n- Sore throat management\n\n## Common Intubation Complications\n\n### During Intubation\n\n**Dental Trauma**\n- Most common complication\n- More common with: difficult intubation, loose teeth, anterior teeth\n- Prevention: Gentle technique, careful blade positioning\n- Management: Locate tooth, notify dentist, document in records\n\n**Lip/Tongue/Pharyngeal Trauma**\n- From blade pressure or tube movement\n- Prevention: Gentle manipulation, proper positioning\n- Management: Local hemostasis, observe for infection\n\n**Esophageal Intubation**\n- Tube in esophagus instead of trachea\n- Detection: Absence of breath sounds, epigastric air sounds, capnography absent\n- Management: Remove tube immediately, reoxygenate, reintubate\n\n### Post-intubation\n\n**Sore Throat**\n- Mild: 40% of intubated patients\n- Severe: 5-20%\n- Prevention: Proper cuff pressure (20-30 cm H2O), lubrication, minimize duration\n- Management: Lozenges, analgesics\n\n**Hoarseness**\n- From vocal cord irritation\n- Usually resolves in 48-72 hours\n- Prevent: Gentle technique, proper cuff pressure\n\n**Laryngeal Stenosis**\n- Rare, more common with prolonged intubation (>10 days)\n- Presents with stridor after extubation\n- Prevention: Minimal duration, gentle technique\n- Management: Steroids, possible need for dilation or tracheostomy\n\n**Tracheal Stenosis**\n- From prolonged cuff pressure\n- Prevention: Proper cuff pressure, minimize duration\n- Presents weeks after extubation with dyspnea\n\n**Sinusitis**\n- From nasal intubation with prolonged duration\n- Prevention: Oral route preferred for long-term intubation\n- Management: Antibiotics, possible drainage\n\n## Emergency Airway Techniques (Emergency Room/ICU)\n\n### Cricothyrotomy\n- Surgical airway in can't intubate/can't oxygenate scenario\n- Needle cricothyrotomy (temporary)\n- Surgical cricothyrotomy (definitive)\n- Bypasses upper airway obstruction\n- Definitive airway within 30 minutes\n\n### Bag-Mask Ventilation (BMV)\n- Temporary oxygenation during difficult intubation\n- Two-person technique: head tilt, chin lift, seal mask\n- Prevents ARDS from gastric insufflation in RSI\n\n### Indian Clinical Context\n- Limited ICU/ventilator availability in many settings\n- Difficult airway common: TB (scarring), upper airway TB, malignancy\n- Manual ventilation still widely used\n- Prolonged intubation increases complication risk",
        mnemonics: [
          {
            text: "LEMON",
            explanation: "Look externally, Evaluate Mallampati, Mandible (protrusion), Obstruction, Neck (mobility)"
          },
          {
            text: "RSI",
            explanation: "Pre-oxygenation, cricoid pressure, Rapid induction, Succinylcholine/Rocuronium, Intubate quickly"
          }
        ],
        keyPoints: [
          "LEMON score predicts difficult airway",
          "Awake fiberoptic intubation is gold standard for known difficult airway",
          "RSI indicated for full stomach/emergency cases",
          "Cricoid pressure controversial now (may worsen view)",
          "Succinylcholine vs Rocuronium choice depends on setting",
          "Dental trauma most common complication",
          "Post-extubation sore throat common but usually self-limiting",
          "Emergency airway (cricothyrotomy) for can't intubate scenario"
        ],
        textbookRefs: [
          { book: "Difficult Airway Management", chapter: "Ch 2-5", edition: "2nd" },
          { book: "Clinical Practice of Anaesthesia", chapter: "Ch 29-30", edition: "4th" }
        ]
      },
      {
        layer: 4,
        slug: "airway-management-intubation-exam",
        title: "Airway Management & Intubation - Exam Prep",
        estimatedMinutes: 15,
        summary: "High-yield exam facts, NEXT-pattern scenarios, and commonly tested airway management concepts.",
        contentMd: "# Airway Management & Intubation - Exam Prep\n\n## High-Yield Facts\n\n### Mallampati Score Quick Reference\n| Class | Visibility | Difficulty |\n|-------|------------|------------|\n| 1 | Soft palate, fauces, uvula, pillars | Easy |\n| 2 | Soft palate, fauces, uvula | Easy |\n| 3 | Soft palate, uvula | Difficult |\n| 4 | Only soft palate | Very Difficult |\n\n### Thyro-mental Distance\n- **>6.5 cm**: Easy intubation\n- **6-6.5 cm**: Borderline\n- **<6 cm**: Difficult intubation\n\n### Tube Sizing\n- **Adults**: 7.5-8.5 mm ID (women 7.5-8, men 8-8.5)\n- **Children**: 4 mm at age 1 year\n- **Formula**: (16 + age)/4 mm for children\n\n### Cormack-Lehane Grades\n| Grade | Visibility | Intubation |\n|-------|------------|------------|\n| 1 | Full cords | Easy |\n| 2 | Partial cords | Easy-Moderate |\n| 3 | Epiglottis only | Difficult |\n| 4 | Soft palate only | Very Difficult |\n\n### Cardiovascular Response to Intubation\n- **Peak**: 30-60 seconds post-laryngoscopy\n- **BP increase**: 20-30 mmHg\n- **HR increase**: 15-25 bpm\n- **Mechanism**: Catecholamine release (sympathetic dominance)\n- **Prevention**: Adequate induction agent dose, opioids, topical anesthesia\n\n## Difficult Airway Algorithm (ASA)\n\n**1. Awake Intubation vs Intubation After Induction?**\n- Awake if: severe difficulty predicted, aspiration risk low, patient tolerates\n- Induction if: full stomach, need rapid airway\n\n**2. If Difficulty Encountered After Induction**\n- Call for help immediately\n- Maintain oxygenation (bag-mask ventilation)\n- Consider alternative plan:\n  - Video laryngoscope\n  - Alternative blade\n  - Fiberoptic scope\n  - Surgical airway if can't oxygenate\n\n## Exam-Focused Scenarios\n\n**Scenario 1**: \"60-year-old male with Mallampati 4, thyro-mental distance 5 cm, mouth opening 2 cm. How would you manage airway?\"\n- **Wrong**: Immediate induction and intubation attempt\n- **Correct**: Plan for awake fiberoptic intubation with topical anesthesia and mild sedation. Have backup plan ready.\n- **Key**: Pre-identification of difficulty allows safer management\n\n**Scenario 2**: \"During intubation attempt, patient becomes cyanotic. SpO2 80%. What's your immediate action?\"\n- **Correct**: Stop intubation attempt, remove laryngoscope, ventilate with 100% O2 via bag-mask for 30-60 seconds\n- **Next**: Reassess difficulty, consider alternative approach\n- **Avoid**: Repeated intubation attempts without intervening oxygenation\n\n**Scenario 3**: \"Post-extubation stridor in recovery room. What's management?\"\n- **First**: Sit patient upright, give humidified oxygen\n- **If mild**: Observe, steroids (dexamethasone 0.5 mg/kg)\n- **If severe**: Reintubate or consider emergency airway\n\n**Scenario 4**: \"RSI for trauma patient. Which agent for induction?\"\n- **Wrong**: Propofol (causes severe hypotension in trauma)\n- **Correct**: Ketamine (1 mg/kg) - maintains hemodynamics, analgesia, airway reflexes\n- **Alternative**: Etomidate (0.2 mg/kg) if hemodynamically unstable\n\n## Common Exam Questions\n\n**Q: What is the most common complication of intubation?**\nA: Dental trauma (1 in 1000-4500 intubations)\n\n**Q: Which sign confirms tracheal placement of ET tube?**\nA: Capnography (CO2 in exhaled gas) - gold standard. Clinical signs: bilateral breath sounds, no epigastric air, improved SpO2\n\n**Q: What is cricoid pressure and when is it used?**\nA: Pressure applied at 10 N awake, 30 N after loss of consciousness to compress esophagus and prevent gastric insufflation during RSI. [Note: Controversial - may worsen intubation view]\n\n**Q: Difference between straight and curved blade?**\nA: Straight (Miller) - directly lifts epiglottis, better subglottis view. Curved (Macintosh) - indirectly lifts via vallecula, better cords view, less traumatic.\n\n**Q: Which is the safest agent for RSI in hemodynamically unstable patient?**\nA: Ketamine (preserves hemodynamics) or Etomidate (most stable). Avoid Propofol (vasodilation)\n\n**Q: What is the tube position on chest X-ray?**\nA: Tube tip should be 3-5 cm above carina. Too high = nasal placement, too low = endobronchial intubation (usually right mainstem)\n\n**Q: Which complication increases with prolonged intubation?**\nA: Tracheal stenosis (>10 days), sinusitis (nasal route), laryngeal edema\n\n## NEXT-Pattern Problem Solving\n\n**Case Study 1: Preoperative Assessment**\n- 45-year-old for elective cholecystectomy\n- Mallampati 3, thyro-mental distance 6 cm, limited neck extension\n- What's your plan?\n- **Analysis**: Difficult airway predicted\n- **Solution**: Plan for video laryngoscope or fiberoptic standby. Discuss with patient. Have backup plan\n\n**Case Study 2: Intraoperative Crisis**\n- First intubation attempt unsuccessful (Grade 3 view)\n- Patient oxygen saturation dropping (86%)\n- What's immediate action?\n- **Problem**: Can't intubate, need to oxygenate\n- **Solution**: Withdraw tube, ventilate with 100% O2 via bag-mask for 1-2 minutes. Reassess with video laryngoscope or call for help\n\n**Case Study 3: Emergency Airway**\n- Trauma patient with massive facial trauma\n- Severe bleeding in oropharynx\n- Can't see vocal cords, can't oxygenate with bag-mask\n- What's definitive treatment?\n- **Answer**: Emergency surgical airway (cricothyrotomy or tracheostomy)\n\n## Mnemonics for Exams\n\n**LEMON** - Mallampati, Extent of mouth opening, Mandible, Obstruction, Neck mobility\n\n**DIFFICULT** \n- **D**istance (thyro-mental)\n- **I**ntubation ability\n- **F**acial anatomy\n- **F**ull stomach\n- **I**njury (C-spine)\n- **C**ongenital\n- **U**nderbite\n- **L**arge tongue\n- **T**rismus\n\n**ATI** - Airway (anatomy, assessment), Tube (size, placement), Intubation (technique, confirmation)\n\n**SOAP** - Signs of intubation success: Symmetric air entry, Observable chest rise, Absent epigastric sounds, Pupil reactivity\n\n## Quick References\n\n**Laryngospasm Management**\n1. Remove stimulus (painful stimuli, secretions)\n2. Positive pressure oxygen (breaks spasm)\n3. Deepen anesthesia\n4. If severe: IV succinylcholine 0.5-1 mg/kg\n\n**Esophageal Intubation**\n1. Suspect: No breath sounds, epigastric gurgling, no capnography\n2. Action: Immediately remove tube\n3. Reoxygenate with bag-mask\n4. Reintubate carefully\n\n**Post-extubation Stridor**\n1. Mild: Humidified O2, steroids, observe\n2. Severe: Reintubate, consider emergency airway",
        mnemonics: [
          {
            text: "LEMON",
            explanation: "Lymphoma? No - Look, Evaluate, Mandible, Obstruction, Neck"
          },
          {
            text: "ATI",
            explanation: "Airway assessment, Tube sizing, Intubation technique"
          }
        ],
        keyPoints: [
          "Mallampati Class 3-4 = difficult airway",
          "Dental trauma is most common complication",
          "Capnography is gold standard for tube confirmation",
          "RSI for full stomach - cricoid pressure controversial",
          "Awake fiberoptic for known difficult airway",
          "Video laryngoscope useful second-line tool",
          "Bag-mask ventilation bridges gaps between attempts",
          "Emergency cricothyrotomy for can't intubate/can't oxygenate"
        ],
        textbookRefs: [
          { book: "AIIMS Pattern MCQ in Anaesthesia", chapter: "Ch 4", edition: "2nd" },
          { book: "Examination MCQs in Anaesthesia", chapter: "Airway", edition: "3rd" }
        ]
      },
      {
        layer: 5,
        slug: "airway-management-intubation-recall",
        title: "Airway Management & Intubation - Active Recall",
        estimatedMinutes: 10,
        summary: "Active recall questions covering airway anatomy, assessment, intubation techniques, and emergency management.",
        contentMd: "# Airway Management & Intubation - Active Recall\n\n## Anatomy Quick Recall\n\n**Q1: What are the boundaries of the larynx?**\n[Answer: Superior - hyoid bone (C3), Inferior - cricoid cartilage (C6). Contains epiglottis, arytenoid cartilages, vocal cords, rima glottidis.]\n\n**Q2: Which nerves supply the larynx?**\n[Answer: Superior laryngeal nerve (above vocal cords - sensory, CN X), Recurrent laryngeal nerve (below vocal cords - motor, CN X)]\n\n**Q3: What is the glottis?**\n[Answer: The opening between the vocal cords through which air passes. Also called rima glottidis.]\n\n**Q4: Recurrent laryngeal nerve injury causes what?**\n[Answer: Vocal cord paralysis (usually bilateral in neonates, unilateral post-operative). Results in hoarseness or stridor.]\n\n## Assessment Questions\n\n**Q5: What is Mallampati score?**\n[Answer: Assessment of pharyngeal structures visible at rest with mouth wide open and tongue protruded. Grades 1-4, higher = more difficult intubation.]\n\n**Q6: What is the sniffing position?**\n[Answer: Patient's head extended at atlanto-occipital joint with pillow supporting neck. Aligns oral, pharyngeal, and laryngeal axes for optimal visualization.]\n\n**Q7: List three predictors of difficult airway.**\n[Answer: Limited mouth opening, short thyro-mental distance, high Mallampati score, large tongue, micrognathia, cervical spine limitation, obesity.]\n\n**Q8: What is sterno-mental distance and normal value?**\n[Answer: Distance from sternal notch to mentum. Normal >12.5 cm. Values <6 cm suggest difficult airway.]\n\n## Intubation Technique Questions\n\n**Q9: Describe the technique for straight blade (Miller) intubation.**\n[Answer: Advance blade along right side of mouth, displace tongue leftward, lift epiglottis DIRECTLY, visualize vocal cords, insert tube between cords. Technique is gentle, atraumatic entry.]\n\n**Q10: How does curved blade (Macintosh) differ?**\n[Answer: Curved blade does NOT lift epiglottis directly. Instead, tip of blade goes into vallecula (space between epiglottis and pharyngeal wall), indirectly lifting epiglottis and exposing vocal cords.]\n\n**Q11: What is meant by Cormack-Lehane Grade 2?**\n[Answer: Partial visualization of vocal cords (only posterior commissure visible). Usually allows successful intubation but takes more time/skill than Grade 1.]\n\n**Q12: What is Murphy eye on an ET tube?**\n[Answer: Patent side hole near the distal end of tube. If main opening becomes obstructed (mucus, blood), air can still pass through Murphy eye.]\n\n## Confirmation & Complications\n\n**Q13: What is the gold standard for confirming ET tube placement?**\n[Answer: Capnography (detects CO2 in exhaled gas). If present, tube is in trachea. Clinical signs: bilateral breath sounds, chest rise, no epigastric air sounds.]\n\n**Q14: How would you detect esophageal intubation?**\n[Answer: No capnography (or only transient), absent breath sounds, epigastric air sounds on auscultation. If suspected, remove tube immediately and reintubate.]\n\n**Q15: What causes sore throat post-intubation?**\n[Answer: Trauma to pharyngeal, laryngeal, or tracheal mucosa from tube movement or high cuff pressure. Prevention: proper cuff pressure (20-30 cm H2O), lubrication, minimal duration.]\n\n**Q16: What is laryngeal stenosis and when does it develop?**\n[Answer: Fibrotic narrowing of larynx, usually from prolonged intubation (>10 days). Presents as stridor weeks after extubation. Prevention: gentle technique, minimize duration.]\n\n## RSI & Emergency Airway\n\n**Q17: What is Rapid Sequence Induction and when is it used?**\n[Answer: Modified anesthesia technique for emergency/full stomach patients. Sequence: pre-oxygenation → cricoid pressure → rapid induction → rapid muscle relaxation → intubate within 10 seconds. Minimizes aspiration risk.]\n\n**Q18: Which muscle relaxant is traditionally used in RSI?**\n[Answer: Succinylcholine (depolarizing agent, onset 30 seconds, duration 5-10 minutes). NOW often replaced by Rocuronium 1.2 mg/kg (can be rapidly reversed with Sugammadex).]\n\n**Q19: What is cricoid pressure and is it always used?**\n[Answer: Applied pressure to compress esophagus during RSI. 10 N when awake, 30 N after loss of consciousness. Controversial now - may impair visualization by compressing larynx. Not universally recommended anymore.]\n\n**Q20: When would you use surgical airway (cricothyrotomy)?**\n[Answer: Emergency situation where you can't intubate AND can't oxygenate (can't intubate/can't oxygenate scenario). Bypasses upper airway obstruction for emergent oxygenation.]\n\n## Scenario-Based Recall\n\n**Scenario A**: \"You attempt oral intubation. After 3 attempts, patient is cyanotic (SpO2 78%). What's your next move?\"\n[Answer: STOP intubation attempts. Remove laryngoscope. Ventilate with 100% O2 via bag-mask for 1-2 minutes. Reassess with video laryngoscope or call for expert help. Do not repeatedly attempt without intervening oxygenation.]\n\n**Scenario B**: \"Patient extubated 2 hours ago. Now presents with stridor and respiratory distress. Management?\"\n[Answer: If mild stridor: humidified O2, dexamethasone 0.5 mg/kg IV, observe. If severe: reintubate (smaller tube), consider emergency airway, ICU observation.]\n\n**Scenario C**: \"Mallampati 4, mouth opening 2 cm, mentum to sternal notch 8 cm. Patient scheduled for emergency appendicectomy. What's your plan?\"\n[Answer: Severe difficult airway. Plan awake fiberoptic intubation with topical anesthesia. Discuss with surgeon about potential need for emergency surgical airway. Have backup plan and emergency equipment ready. Inform patient.]\n\n## True/False Recall\n\n1. Cormack-Lehane Grade 4 makes intubation impossible.\n[False - difficult but sometimes possible with techniques like external laryngeal manipulation or video laryngoscope]\n\n2. All patients with Mallampati 3 should have awake intubation.\n[False - Mallampati 3 is one risk factor among several. Full assessment needed.]\n\n3. Capnography is the most reliable sign of tracheal tube placement.\n[True - Gold standard. Present = tracheal, absent or very minimal = esophageal]\n\n4. Cricoid pressure improves intubation view in all patients.\n[False - Actually may worsen view by compressing larynx and reducing view quality]\n\n5. Sore throat is permanent after intubation.\n[False - Usually resolves within 48-72 hours]\n\n6. Dental trauma occurs in 1 in 1000-4500 intubations.\n[True - Most common complication]\n\n7. Video laryngoscope is first choice in all intubations.\n[False - Useful for difficult airways, but standard direct laryngoscopy is faster and first-line in most cases]\n\n## Fill-in-the-Blank Recall\n\n1. A thyro-mental distance of _____ cm or less suggests difficult intubation.\n[Answer: 6]\n\n2. The _____ nerve injury causes hoarseness from vocal cord paralysis.\n[Answer: Recurrent laryngeal nerve]\n\n3. The space where a curved blade tip is inserted is called the _____.\n[Answer: Vallecula]\n\n4. The maximum cuff pressure to avoid tracheal stenosis is _____ cm H2O.\n[Answer: 30]\n\n5. Tube placement tip should be _____ cm above the carina on chest X-ray.\n[Answer: 3-5]\n\n6. The complication of prolonged intubation (>10 days) is _____.\n[Answer: Tracheal stenosis or laryngeal stenosis]\n\n7. In RSI, the sequence is: pre-oxygenation, _____, induction, muscle relaxant, intubate.\n[Answer: Cricoid pressure]\n\n## Application Questions\n\n**Q: You see dental trauma after intubation. What's your immediate action?**\nA: Document location and type of tooth damage. Notify dentist immediately. Locate displaced tooth (may be in lungs - check X-ray). Record in anesthesia record with witness. Inform patient post-operatively. Advise on dental care.\n\n**Q: How do you differentiate between laryngospasm and bronchoconstriction?**\nA: Laryngospasm = stridor (high-pitched), visible \"rocking chest\" (no air moving), loss of breath sounds at all fields. Bronchoconstriction = wheezing (low-pitched), air movement audible in lungs. Management differs: laryngospasm needs airway management; bronchospasm needs bronchodilators.\n\n**Q: Patient has post-extubation stridor. When would you reintubate vs observe?**\nA: Observe with humidified O2 and steroids if stridor mild and patient comfortable. Reintubate if: severe respiratory distress, unable to maintain SpO2, drooling/dysphonia, cyanosis. Have emergency airway setup ready.",
        mnemonics: [
          {
            text: "CRACK",
            explanation: "Cuff pressure, Recall position (sniffing), Advancement (gentle), Confirmation (capnography), Keep learning"
          },
          {
            text: "SEAL",
            explanation: "Secure airway, Equipment ready, Always confirm, Learning from complications"
          }
        ],
        keyPoints: [
          "Straight blade lifts epiglottis directly",
          "Curved blade lifts via vallecula (indirect)",
          "Capnography = gold standard for confirmation",
          "Esophageal placement = remove immediately",
          "Difficult airway = awake fiberoptic or video laryngoscope",
          "RSI for full stomach - minimize aspiration risk",
          "Post-extubation stridor mild = observe with steroids",
          "Surgical airway for can't intubate/can't oxygenate"
        ],
        textbookRefs: [
          { book: "Self-Assessment in Anaesthesia", chapter: "Airway", edition: "Latest" },
          { book: "MCQ Reviews in Anaesthesia", chapter: "Ch 5", edition: "3rd" }
        ]
      }
    ]
  }
];
