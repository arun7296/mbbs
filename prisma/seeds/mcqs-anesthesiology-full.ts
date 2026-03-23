export const anesthesiologyMcqs = [
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male is scheduled for emergency appendectomy. During anesthetic induction with IV propofol and succinylcholine, he develops masseter muscle rigidity, increased end-tidal CO2 (ETCO2), and rising body temperature. What is the most immediate intervention?",
    clinicalVignette:
      "A 45-year-old male with signs of malignant hyperthermia during anesthetic induction.",
    options: [
      {
        id: "a",
        text: "Continue anesthesia with increased FiO2 and dantrolene preparation",
        isCorrect: false,
        explanation:
          "Continuation with volatile anesthetics will worsen MH. Immediate discontinuation of triggering agents is essential.",
      },
      {
        id: "b",
        text: "Immediately discontinue all triggering agents, hyperventilate with 100% O2, activate emergency protocol, administer IV dantrolene",
        isCorrect: true,
        explanation:
          "Malignant hyperthermia emergency requires: (1) IMMEDIATE cessation of volatile anesthetics and succinylcholine, (2) switch to non-triggering agents (propofol, non-depolarizing paralysis), (3) hyperventilation with 100% O2 to reduce ETCO2, (4) IV dantrolene (2.5 mg/kg rapid infusion, repeat every 5 minutes to max 10 mg/kg), (5) active cooling measures, (6) careful monitoring for complications.",
      },
      {
        id: "c",
        text: "Treat with aspirin and ice packs",
        isCorrect: false,
        explanation:
          "These measures are inadequate. Dantrolene is essential specific therapy.",
      },
      {
        id: "d",
        text: "Administer succinylcholine repeat dose if paralysis inadequate",
        isCorrect: false,
        explanation:
          "Succinylcholine is a triggering agent and absolutely contraindicated in MH.",
      },
    ],
    explanation:
      "Malignant hyperthermia is a pharmacogenetic disorder triggered by volatile anesthetics and succinylcholine. Pathophysiology: genetic mutations in ryanodine receptor (RYR1) or CACNA1S cause uncontrolled muscle calcium release. Clinical signs: (1) early: masseter rigidity, increased ETCO2, (2) late: hyperthermia (temperature rise can exceed 1-2°C per minute), rhabdomyolysis, hyperkalemia, cardiac dysrhythmias. Management: (1) cease triggering agents immediately, (2) discontinue surgery or use non-triggering anesthetics, (3) hyperventilate, (4) dantrolene IV (blocks calcium release), (5) active cooling, (6) aggressive fluid resuscitation, (7) monitor for complications (ARF, DIC, hyperkalemia). Mortality drops from 70% to <5% with dantrolene availability.",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-01-TOP-001",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 52", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male is intubated for mechanical ventilation post-op. He is on pressure-controlled (PC) mode with PEEP 10 cmH2O, respiratory rate 14 breaths/min, and plateau pressure 30 cmH2O. What is the primary physiological goal of PEEP in this setting?",
    clinicalVignette:
      "A 55-year-old male on PC-ventilation with PEEP, requiring assessment of ventilation strategy.",
    options: [
      {
        id: "a",
        text: "Improve oxygenation by preventing alveolar collapse and maintaining functional residual capacity",
        isCorrect: true,
        explanation:
          "PEEP maintains positive pressure at end-exhalation, preventing alveolar derecruitment (collapse) during expiration. This increases functional residual capacity (FRC) and improves oxygenation by: (1) opening collapsed alveoli, (2) reducing ventilation-perfusion mismatch, (3) improving compliance. In ARDS, higher PEEP required. This patient's plateau pressure of 30 cmH2O is appropriate for protective ventilation strategy.",
      },
      {
        id: "b",
        text: "Reduce respiratory rate requirements",
        isCorrect: false,
        explanation:
          "PEEP does not directly affect RR needs; RR is set based on minute ventilation and CO2 elimination.",
      },
      {
        id: "c",
        text: "Decrease work of breathing by reducing effort needed for inspiration",
        isCorrect: false,
        explanation:
          "PEEP actually increases work of breathing slightly. The benefit is oxygenation improvement.",
      },
      {
        id: "d",
        text: "Eliminate need for oxygen supplementation",
        isCorrect: false,
        explanation:
          "PEEP improves oxygenation but does not eliminate oxygen requirement.",
      },
    ],
    explanation:
      "PEEP (positive end-expiratory pressure) maintains positive airway pressure throughout expiration. Physiologic effects: (1) increases FRC and improves oxygenation, (2) reduces atelectrauma (collapse-reexpansion injury), (3) improves lung compliance, (4) increases intrathoracic pressure → reduces venous return (careful in hypotensive patients). Complications: (1) reduced cardiac output (increased intrathoracic pressure), (2) barotrauma (if excessive), (3) increased ICP. PEEP selection: individualized titration based on oxygenation needs and hemodynamics. Higher PEEP strategy (10-15 cmH2O) used in ARDS; lower PEEP (5 cmH2O) in normal patients. This patient's PEEP 10 with plateau pressure 30 suggests appropriate lung-protective ventilation.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-02-TOP-002",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 55", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "During general anesthesia, a 35-year-old female receives rocuronium 0.6 mg/kg for endotracheal intubation. Two hours later, she has not regained spontaneous breathing despite being off anesthetics for 30 minutes. Train-of-four monitoring shows no twitches. What is the most appropriate management?",
    clinicalVignette:
      "A 35-year-old female with prolonged neuromuscular blockade (no TOF twitches) after rocuronium.",
    options: [
      {
        id: "a",
        text: "Continue mechanical ventilation until spontaneous recovery occurs",
        isCorrect: false,
        explanation:
          "Waiting for spontaneous recovery risks prolonged ventilator dependence. Reversal should be attempted.",
      },
      {
        id: "b",
        text: "Administer sugammadex (specific rocuronium reversal agent) to reverse neuromuscular blockade",
        isCorrect: true,
        explanation:
          "Sugammadex is a selective relaxant binding agent (SRBA) that encapsulates rocuronium molecules, rapidly reversing blockade. Dosing: 16 mg/kg for complete blockade, 4 mg/kg for partial blockade. Onset: 1-3 minutes. This is the preferred reversal for rocuronium. Alternative: neostigmine + glycopyrrolate for spontaneous TOF recovery (not applicable here with zero twitch).",
      },
      {
        id: "c",
        text: "Administer neostigmine 5 mg IV",
        isCorrect: false,
        explanation:
          "Neostigmine is ineffective for deep blockade (zero TOF twitches). Sugammadex is indicated.",
      },
      {
        id: "d",
        text: "Perform tracheostomy for long-term ventilator support",
        isCorrect: false,
        explanation:
          "Tracheostomy is premature before attempting neuromuscular blockade reversal.",
      },
    ],
    explanation:
      "Neuromuscular blockade reversal is critical post-operatively to prevent respiratory complications. Two approaches: (1) Cholinesterase inhibitors (neostigmine): require spontaneous twitch recovery (train-of-four ratio >0.2) to be effective. Mechanism: increases acetylcholine at neuromuscular junction. Dosing: 5 mg IV with glycopyrrolate (anticholinergic). (2) Selective relaxant binding agents (sugammadex): encapsulate and inactivate rocuronium/vecuronium. Work regardless of blockade depth. Dosing: 4 mg/kg for moderate blockade, 16 mg/kg for deep blockade. Onset rapid (1-3 min). Sugammadex superior for deep blockade as in this case. Monitor with train-of-four to assess blockade depth and reversal efficacy.",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-03-TOP-003",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 34", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 40-year-old female undergoes general anesthesia with rapid sequence intubation (RSI) using propofol and succinylcholine. Immediately after intubation, she develops fasciculations, hyperkalemia (K+ 6.2 mEq/L), and peaked T-waves on ECG. What is the cause and management?",
    clinicalVignette:
      "A 40-year-old female with succinylcholine-induced hyperkalemia causing ECG changes.",
    options: [
      {
        id: "a",
        text: "Succinylcholine-induced potassium release from muscle fasciculations; treat with calcium gluconate, insulin-glucose, and hyperventilation",
        isCorrect: true,
        explanation:
          "Succinylcholine causes depolarization of muscle membrane with uncontrolled potassium efflux, raising serum K+ by 0.5-1 mEq/L (can exceed 2 mEq/L in disease states). Mechanism: succinylcholine activates nicotinic receptors → sustained depolarization → potassium leak from muscle. Management: (1) calcium gluconate (stabilizes cardiac membrane), (2) insulin 10 units + 25g dextrose (shifts K+ intracellularly), (3) hyperventilation (alkalosis shifts K+ intracellularly), (4) monitor ECG and K+ levels.",
      },
      {
        id: "b",
        text: "Anaphylactic reaction requiring epinephrine",
        isCorrect: false,
        explanation:
          "Anaphylaxis would present with bronchospasm, hypotension, rash. This is hyperkalemia.",
      },
      {
        id: "c",
        text: "Malignant hyperthermia requiring dantrolene",
        isCorrect: false,
        explanation:
          "MH presents with masseter rigidity and rising temperature. This is hyperkalemia.",
      },
      {
        id: "d",
        text: "Histamine release from propofol requiring H1/H2 blockers",
        isCorrect: false,
        explanation:
          "Propofol causes histamine release but not hyperkalemia.",
      },
    ],
    explanation:
      "Succinylcholine-induced hyperkalemia is a known side effect, normally mild (K+ increase 0.5-1 mEq/L). Severe hyperkalemia (>6 mEq/L) risks cardiac dysrhythmias manifesting as peaked T-waves, widened QRS, prolonged PR interval, eventually cardiac arrest. Risk factors for severe hyperkalemia: (1) Burns, (2) Crush injuries, (3) Myopathies, (4) Paralysis, (5) Renal failure, (6) Pseudocholinesterase deficiency. ECG changes: peaked T-waves (K+ 5.5-6.5) → widened QRS → loss of P wave → sine wave pattern → arrest. Management: calcium gluconate 10% 10-20 mL IV (cardiac membrane stabilization), insulin 10 units + 25g dextrose (intracellular shift), hyperventilation (alkalosis), furosemide, dialysis if renal failure.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-03-TOP-004",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 34", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old male receives 1% lidocaine 500 mg IV during attempted central line placement for perioperative monitoring. Within 5 minutes, he develops confusion, tremors, and brief seizure. What is the diagnosis and treatment?",
    clinicalVignette:
      "A 60-year-old male with seizure from local anesthetic toxicity after IV lidocaine administration.",
    options: [
      {
        id: "a",
        text: "Local anesthetic systemic toxicity (LAST) with CNS manifestations; treat with benzodiazepines and consider lipid emulsion",
        isCorrect: true,
        explanation:
          "Local anesthetic systemic toxicity occurs from excessive blood concentration of local anesthetic agents. CNS symptoms progress: (1) tingling/confusion (early), (2) tremors, (3) seizures, (4) coma. Cardiac symptoms: (1) dysrhythmias, (2) hypotension, (3) cardiac arrest (refractory). Management: (1) benzodiazepines for seizure control, (2) aggressive lipid emulsion therapy (20% lipid 1.5 mL/kg IV bolus, repeat every 3-5 minutes), (3) airway management if needed, (4) ACLS protocols adjusted for lipid emulsion context.",
      },
      {
        id: "b",
        text: "Stroke from air embolism; treat with hyperbaric oxygen",
        isCorrect: false,
        explanation:
          "While air embolism is a complication of central line placement, the temporal relationship to lidocaine administration suggests LAST.",
      },
      {
        id: "c",
        text: "Propofol infusion syndrome if propofol used",
        isCorrect: false,
        explanation:
          "Propofol syndrome occurs with prolonged high-dose propofol infusions, not lidocaine.",
      },
      {
        id: "d",
        text: "Anaphylactic reaction requiring epinephrine alone",
        isCorrect: false,
        explanation:
          "Anaphylaxis would present with urticaria and airway involvement. This is LAST.",
      },
    ],
    explanation:
      "Local anesthetic toxicity from IV administration or inadvertent intravascular injection. Risk factors: (1) overdose, (2) intravascular injection, (3) reduced clearance (liver failure, pregnancy), (4) certain agents (bupivacaine more toxic than lidocaine). Mechanism: toxicity to CNS and cardiac system from channel blockade. Lipid emulsion therapy is remarkably effective for LAST, binding lipophilic local anesthetics and removing them from neural/cardiac tissue. Protocol: (1) 20% lipid emulsion 1.5 mL/kg bolus over 1 minute, (2) repeat bolus every 3-5 minutes until seizure stops/hemodynamics improve, (3) continuous infusion 0.25 mL/kg/min, (4) max lipid 12 mL/kg in first 60 minutes. Resuscitation may require extended efforts (>1 hour with lipids). This patient requires immediate seizure control and lipid emulsion.",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-04-TOP-005",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 28", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old female is scheduled for elective gynecologic surgery under spinal anesthesia with bupivacaine 12 mg. Fifteen minutes after injection, she develops sudden onset dyspnea, hypotension (80/50), and loss of consciousness. What is the diagnosis and immediate management?",
    clinicalVignette:
      "A 45-year-old female with total spinal anesthesia (high block) after bupivacaine spinal injection.",
    options: [
      {
        id: "a",
        text: "Total spinal anesthesia from high block; treat with oxygen, airway management, vasopressors, and CPR if needed",
        isCorrect: true,
        explanation:
          "Total spinal anesthesia results from excessive cephalad spread of intrathecal agent, anesthetizing entire spinal cord plus brainstem and cranial nerves. Manifestations: (1) respiratory compromise (motor block to C1-4 affecting diaphragm), (2) cardiovascular collapse (sympathetic blockade), (3) loss of consciousness (brainstem involvement), (4) pupillary dilation. Management: (1) IMMEDIATELY secure airway (intubate), (2) 100% O2, (3) IV access and aggressive fluid resuscitation, (4) vasopressors (epinephrine, phenylephrine), (5) CPR if cardiac arrest, (6) supportive care until blockade recedes.",
      },
      {
        id: "b",
        text: "Anaphylactic reaction requiring epinephrine",
        isCorrect: false,
        explanation:
          "Anaphylaxis would present with urticaria, wheezing. This is total spinal anesthesia.",
      },
      {
        id: "c",
        text: "Myocardial infarction requiring cardiac catheterization",
        isCorrect: false,
        explanation:
          "While MI can cause hypotension/dyspnea, the rapid onset after spinal injection indicates total spinal.",
      },
      {
        id: "d",
        text: "Epidural hematoma requiring surgical evacuation",
        isCorrect: false,
        explanation:
          "Hematoma would develop over time, not immediately after spinal injection.",
      },
    ],
    explanation:
      "Total spinal anesthesia is a catastrophic complication of spinal anesthesia. Causes: (1) excessive intrathecal volume/concentration, (2) high injection level, (3) patient factors (obesity, pregnancy increasing ICP), (4) positional factors. Pathophysiology: blockade extends to brainstem affecting cranial nerves and respiratory centers. Clinical progression: (1) high sensory blockade, (2) respiratory failure (C3-4 involvement), (3) cardiovascular collapse (thoracic sympathetic blockade → unopposed parasympathetic), (4) unconsciousness, (5) death if untreated. Management requires immediate: (1) intubation and mechanical ventilation, (2) aggressive vasopressor support (epinephrine often required), (3) IV resuscitation, (4) potential cardiopulmonary resuscitation. Recovery depends on agent used (shorter-acting agents recover faster). Prevention: careful dose calculation, appropriate injection technique, careful monitoring.",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-05-TOP-006",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 46", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "During emergence from general anesthesia, a 35-year-old male with difficult airway history develops laryngospasm when anesthetic depth becomes shallow. His oxygen saturation drops to 78%. What is the most appropriate immediate management?",
    clinicalVignette:
      "A 35-year-old male with laryngospasm during emergence, desaturating to 78%.",
    options: [
      {
        id: "a",
        text: "Apply positive pressure ventilation with 100% O2; administer IV succinylcholine if spasm not relieved within 30-60 seconds",
        isCorrect: true,
        explanation:
          "Laryngospasm during emergence is caused by reflex airway closure triggered by irritation (secretions, manipulation, inadequate depth). Management: (1) STOP anesthetic stimulation (suction, handling), (2) apply positive pressure with 100% O2 via bag-mask (positive pressure relaxes vocal cords paradoxically), (3) allow patient to deeper anesthesia if possible, (4) if spasm persists >30-60 seconds with inadequate oxygenation, give IV succinylcholine 0.5-1 mg/kg (provides muscle relaxation to overcome spasm), (5) reintubate if needed after succinylcholine.",
      },
      {
        id: "b",
        text: "Force air through larynx by high-pressure jet ventilation",
        isCorrect: false,
        explanation:
          "Jet ventilation risks gas trapping and barotrauma. Gentle positive pressure is preferred.",
      },
      {
        id: "c",
        text: "Perform emergency cricothyrotomy",
        isCorrect: false,
        explanation:
          "Cricothyrotomy is extreme measure; usually avoided in non-operating room settings and reserved for complete airway failure.",
      },
      {
        id: "d",
        text: "Attempt manual jaw thrust alone without ventilation",
        isCorrect: false,
        explanation:
          "Jaw thrust alone insufficient; oxygenation required with positive pressure ventilation.",
      },
    ],
    explanation:
      "Laryngospasm is involuntary closure of vocal cords triggered by pharyngeal irritation during emergence from anesthesia. Risk factors: (1) light anesthesia during emergence, (2) airway manipulation, (3) secretions, (4) history of airway issues. Pathophysiology: reflex mediated by superior laryngeal nerve (sensory) and recurrent laryngeal nerve (motor). Clinical presentation: absent breath sounds, stridorous breathing, hypoxia. Paradoxically, positive pressure ventilation can relieve laryngospasm by pressure on arytenoid cartilages pushing them apart. Management: (1) stop triggering stimuli, (2) positive pressure with 100% O2 (attempts to relieve spasm), (3) deepen anesthesia if possible, (4) succinylcholine 0.5-1 mg/kg IV if spasm persists and oxygenation inadequate, (5) reintubation with succinylcholine if needed. Most episodes resolve with conservative management; succinylcholine reserved for refractory cases.",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-06-TOP-007",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 43", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male with unstable angina is brought to the operating room for emergency coronary artery bypass grafting. Which anesthetic agent is most appropriate for induction given his cardiac status?",
    clinicalVignette:
      "A 50-year-old male with coronary artery disease requiring induction for cardiac surgery.",
    options: [
      {
        id: "a",
        text: "Etomidate for its cardiovascular stability",
        isCorrect: true,
        explanation:
          "Etomidate maintains cardiovascular stability through: (1) minimal myocardial depression, (2) preserved baroreceptor reflexes, (3) minimal effect on systemic vascular resistance. Dosing: 0.2 mg/kg IV. Best for hemodynamically unstable patients (shock, cardiac disease). Limitation: single-dose adrenal suppression (transient cortisol insufficiency). For this cardiac patient, etomidate is preferred induction agent.",
      },
      {
        id: "b",
        text: "Propofol for rapid onset and smooth emergence",
        isCorrect: false,
        explanation:
          "Propofol causes myocardial depression and vasodilation → hypotension. Contraindicated in unstable cardiac patients.",
      },
      {
        id: "c",
        text: "Ketamine for analgesia and airway preservation",
        isCorrect: false,
        explanation:
          "While ketamine maintains airway reflexes, it increases catecholamine release → hypertension, tachycardia (risky in CAD).",
      },
      {
        id: "d",
        text: "Thiopental for rapid sequence intubation",
        isCorrect: false,
        explanation:
          "Thiopental causes myocardial depression, contraindicated in cardiac disease.",
      },
    ],
    explanation:
      "Choice of induction agent depends on hemodynamic status and clinical context. Agents comparison: (1) Propofol: smooth induction, but myocardial depression and vasodilation (avoid in shock), (2) Thiopental: older agent, myocardial depression, rarely used now, (3) Etomidate: cardiovascular stability (best for unstable patients), but adrenal suppression, (4) Ketamine: sympathomimetic effects (hypertension, tachycardia risk in CAD), but airway preservation and analgesia, (5) Midazolam: slower onset, for sedation. This cardiac patient with CAD needs minimal hemodynamic disturbance → etomidate is best choice. Alternative: ketamine acceptable if hypotensive. Avoid propofol and thiopental.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-01-TOP-008",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 16", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 32-year-old female at 8 months pregnant requires urgent appendectomy. She is scheduled for general anesthesia. What is the critical concern regarding rapid sequence intubation (RSI) in this patient?",
    clinicalVignette:
      "A 32-year-old female at 8 months gestation requiring emergency surgery with RSI.",
    options: [
      {
        id: "a",
        text: "Risk of aspiration of gastric contents; use cricoid pressure and modified RSI with cautious positive pressure ventilation to prevent fetal distress",
        isCorrect: true,
        explanation:
          "Pregnant patients have increased aspiration risk from: (1) elevated gastric pressure, (2) delayed gastric emptying, (3) reduced lower esophageal sphincter tone. RSI protocol: (1) cricoid pressure (Sellick maneuver) to occlude esophagus during apnea, (2) rapid induction and intubation, (3) pre-oxygenation (denitrogenation crucial), (4) careful application of positive pressure to avoid gastric insufflation and fetal distress, (5) succinylcholine preferred for rapid paralysis due to short duration.",
      },
      {
        id: "b",
        text: "Teratogenic effects of anesthetic drugs harming the fetus",
        isCorrect: false,
        explanation:
          "Anesthetics are generally safe in second/third trimester. Aspiration risk is the critical concern.",
      },
      {
        id: "c",
        text: "Placental insufficiency from hypercarbia during ventilation",
        isCorrect: false,
        explanation:
          "While hypercarbia should be avoided, aspiration is the acute threat.",
      },
      {
        id: "d",
        text: "No modifications needed to standard RSI protocol",
        isCorrect: false,
        explanation:
          "Pregnant patients require modifications for aspiration prevention.",
      },
    ],
    explanation:
      "Pregnancy increases anesthetic risk significantly. Physiologic changes: (1) delayed gastric emptying, (2) increased gastric pressure, (3) reduced lower esophageal sphincter tone, (4) decreased FRC (rapid desaturation during apnea), (5) airway edema increasing difficult airway risk. RSI modifications: (1) aggressive pre-oxygenation (4-5 minutes with 100% O2), (2) cricoid pressure (Sellick maneuver) from induction until cuff inflated, (3) rapid induction/intubation (minimize apnea time), (4) succinylcholine preferred for speed, (5) careful positive pressure ventilation (gentle to avoid gastric inflation and fetal distress), (6) left uterine displacement to prevent IVC compression. Regional anesthesia preferred when possible. General anesthesia for urgent appendectomy is indicated despite risks.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-07-TOP-009",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 58", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male with hypertension and diabetes develops intraoperative hypertensive crisis (BP 210/140 mmHg) and tachycardia (140 bpm). The patient is under general anesthesia with isoflurane. What is the most likely diagnosis?",
    clinicalVignette:
      "A 45-year-old male with hypertensive crisis and tachycardia during general anesthesia.",
    options: [
      {
        id: "a",
        text: "Inadequate anesthesia/analgesia with sympathetic hyperactivity; treat with increased anesthetic depth and opioids",
        isCorrect: true,
        explanation:
          "Intraoperative hypertension with tachycardia suggests light anesthesia or inadequate analgesia causing sympathetic response. Signs of inadequate anesthesia: (1) hypertension, (2) tachycardia, (3) lacrimation, (4) pupil dilation, (5) patient movement. Management: (1) increase volatile anesthetic concentration, (2) administer IV opioids (fentanyl), (3) assess airway/intubation issues, (4) rule out other causes (hypoxia, hypercapnia, hypothermia, distended bladder).",
      },
      {
        id: "b",
        text: "Malignant hyperthermia requiring dantrolene",
        isCorrect: false,
        explanation:
          "MH presents with masseter rigidity and rising temperature, not just hypertension.",
      },
      {
        id: "c",
        text: "Anaphylactic reaction requiring epinephrine",
        isCorrect: false,
        explanation:
          "Anaphylaxis presents with bronchospasm, urticaria, not isolated hypertension.",
      },
      {
        id: "d",
        text: "Sepsis from intraoperative contamination",
        isCorrect: false,
        explanation:
          "Sepsis develops over hours/days, not acutely during anesthesia.",
      },
    ],
    explanation:
      "Intraoperative hypertension and tachycardia indicate inadequate anesthesia (light anesthesia), causing sympathetic activation. Other causes to consider: (1) Hypoxia (check SpO2 and ETCO2), (2) Hypercapnia (verify ETCO2), (3) Malignant hyperthermia (check temperature, muscle rigidity), (4) Anaphylaxis (check rash, bronchospasm), (5) Inadequate paralysis (inadequate analgesia), (6) Hypothermia (paradoxically causes hypertension/tachycardia). Management: (1) increase anesthetic depth (volatile agent concentration), (2) administer opioids (fentanyl), (3) ensure adequate paralysis, (4) check and maintain normothermia, (5) rule out physiologic causes. If resistant to anesthesia increase, may need antihypertensive agents (nicardipine, hydralazine) but address underlying cause first.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-01-TOP-010",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 24", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 65-year-old male with COPD is recovering from general anesthesia and requires extubation. He has sluggish respiratory drive with elevated PaCO2 (55 mmHg). What is the major concern with extubation in this patient?",
    clinicalVignette:
      "A 65-year-old male with COPD post-op with elevated PaCO2 and weak respiratory drive.",
    options: [
      {
        id: "a",
        text: "Risk of hypoventilation and CO2 retention post-extubation; ensure adequate level of consciousness and respiratory drive before extubation",
        isCorrect: true,
        explanation:
          "COPD patients have baseline CO2 retention as part of their pathophysiology. Post-op anesthesia residually suppresses respiratory drive. Risk: extubation before adequate recovery → continued hypoventilation → severe hypercapnia. Extubation criteria: (1) adequate level of consciousness (eye-opening, command-following), (2) adequate respiratory drive (rate >10, regular), (3) adequate oxygenation (SpO2 >92%), (4) ability to cough and protect airway, (5) negative inspiratory force ≤-20 cmH2O, (6) vital capacity >15 mL/kg. This patient needs continued mechanical support until criteria met.",
      },
      {
        id: "b",
        text: "Immediate extubation to improve patient comfort",
        isCorrect: false,
        explanation:
          "Premature extubation risks reintubation and complications.",
      },
      {
        id: "c",
        text: "Extubate after 2 minutes of spontaneous breathing trial",
        isCorrect: false,
        explanation:
          "This patient needs adequate recovery, not rushed SBT.",
      },
      {
        id: "d",
        text: "Consider tracheostomy to avoid extubation",
        isCorrect: false,
        explanation:
          "Tracheostomy is not indicated if extubation criteria can be met.",
      },
    ],
    explanation:
      "Extubation readiness assessment is critical to prevent respiratory failure. COPD patients are at high risk for hypoventilation post-extubation because: (1) baseline ventilatory impairment, (2) anesthetic drugs residually depress ventilation, (3) pain and splinting reduce ventilation, (4) loss of positive airway pressure support. Extubation criteria developed to predict successful spontaneous ventilation: (1) consciousness (can open eyes, follow commands), (2) respiratory effort (RR 10-30, regular), (3) oxygenation (FiO2 ≤0.5 for SpO2 ≥92%), (4) mechanics (negative inspiratory force ≤-20 cmH2O, vital capacity >15 mL/kg), (5) airway reflexes (cough present), (6) hemodynamic stability. Spontaneous breathing trial (SBT) 30-120 minutes on minimal pressure support predicts extubation success. This patient's elevated PaCO2 and sluggish drive suggest inability to meet criteria.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-08-TOP-011",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 55", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 30-year-old female undergoes spinal anesthesia with 8 mg bupivacaine 0.5% for cesarean section. After 10 minutes, she develops numbness to T4 level sensory (cold test) with normal motor function. Which anesthetic stage is she in?",
    clinicalVignette:
      "A 30-year-old female with T4 sensory blockade but preserved motor function after spinal anesthesia.",
    options: [
      {
        id: "a",
        text: "Stage 1: Differential blockade with sensory > motor block",
        isCorrect: true,
        explanation:
          "Spinal anesthesia has differential blockade of nerve fibers based on myelination and diameter: (1) Preganglionic sympathetic fibers (B fibers) blocked first → vasodilation, (2) Temperature sensation (Aδ, C fibers) blocked next, (3) Touch/pressure sensation (Aβ fibers) blocked later, (4) Motor fibers (Aα) blocked last. This patient has sensory blockade to T4 with preserved motor → Stage 1 (differential blockade). As block progresses: Stage 2 = loss of all sensation, Stage 3 = motor blockade begins, Stage 4 = complete motor blockade.",
      },
      {
        id: "b",
        text: "Stage 2: Complete sensory blockade with motor blockade beginning",
        isCorrect: false,
        explanation:
          "Motor is still normal, so still in differential blockade phase.",
      },
      {
        id: "c",
        text: "Stage 3: Inadequate blockade requiring epidural supplement",
        isCorrect: false,
        explanation:
          "T4 sensory blockade is adequate for cesarean section even without motor blockade.",
      },
      {
        id: "d",
        text: "Stage 4: Complete blockade requiring intubation",
        isCorrect: false,
        explanation:
          "Motor function preserved, so not complete blockade.",
      },
    ],
    explanation:
      "Spinal anesthesia progression follows differential blockade phases based on fiber myelination. Myelinated fibers (sympathetic B fibers) blocked before unmyelinated fibers (pain C fibers) before large myelinated fibers (motor Aα). Classic progression: (1) vasodilation, (2) temperature loss (cold), (3) pain loss (pinprick), (4) touch loss (pressure), (5) motor blockade. This patient's T4 cold sensation with normal motor indicates early differential blockade. For cesarean section, T4-T6 sensory blockade sufficient for adequate anesthesia without motor blockade requirement. Complete motor blockade (Stage 4) needed only for procedures requiring muscle relaxation (e.g., major abdominal). Assessment: cold test (Aδ), pinprick (C fibers), touch (Aβ), motor testing (Aα).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-05-TOP-012",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 46", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male with severe aortic stenosis (valve area 0.8 cm²) is scheduled for hip replacement. Which anesthetic technique is most appropriate?",
    clinicalVignette:
      "A 50-year-old male with critical aortic stenosis requiring hip replacement.",
    options: [
      {
        id: "a",
        text: "General anesthesia with careful hemodynamic maintenance to preserve afterload and contractility",
        isCorrect: true,
        explanation:
          "Aortic stenosis (AS) creates fixed cardiac output due to stenotic valve obstruction. Hemodynamic principles: (1) severe AS cannot increase cardiac output with increased demand, (2) hypovolemia → hypotension (critical), (3) vasodilation (anesthetics) → hypotension → stroke, (4) tachycardia → reduced diastolic time → reduced coronary perfusion. Management: (1) avoid regional anesthesia (hypotension), (2) general anesthesia with careful agent selection (etomidate preferred), (3) maintain SVR, avoid hypotension, (4) bradycardia preferred (diastolic filling time), (5) maintain fluid balance, (6) avoid excessive positive pressure ventilation.",
      },
      {
        id: "b",
        text: "Spinal anesthesia for reduced operative time and blood loss",
        isCorrect: false,
        explanation:
          "Spinal causes vasodilation and hypotension—dangerous in fixed-output states like AS.",
      },
      {
        id: "c",
        text: "Epidural anesthesia with vasopressor prophylaxis",
        isCorrect: false,
        explanation:
          "Epidural also causes vasodilation; regional anesthesia generally contraindicated in severe AS.",
      },
      {
        id: "d",
        text: "Monitored anesthesia care with local infiltration only",
        isCorrect: false,
        explanation:
          "MAC insufficient for major surgery like hip replacement.",
      },
    ],
    explanation:
      "Aortic stenosis severely limits cardiac output due to fixed outflow obstruction (valve area <1 cm² is critical). Hemodynamic consequences: (1) pressure gradient across valve creates left ventricular hypertrophy, (2) increased myocardial O2 demand, (3) fixed cardiac output cannot increase with stress, (4) hypovolemia or vasodilation → hypotension → stroke/syncope/death. Anesthetic considerations: (1) regional anesthesia contraindicated (sympathectomy causes hypotension), (2) general anesthesia with careful agent selection: avoid myocardial depressants (propofol) and vasodilators, prefer etomidate, (3) maintain fluid volume, (4) maintain SVR (avoid hypotension), (5) bradycardia beneficial (increases diastolic filling time), (6) avoid tachycardia (reduces diastolic time and coronary perfusion). Invasive hemodynamic monitoring recommended (arterial line, central venous catheter).",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-07-TOP-013",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 27", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old female with asthma is undergoing elective surgery. Which muscle relaxant should be avoided due to increased risk of adverse effects?",
    clinicalVignette:
      "A 35-year-old female with asthma requiring muscle relaxant selection.",
    options: [
      {
        id: "a",
        text: "Mivacurium (histamine-releasing agent) causing bronchoconstriction risk",
        isCorrect: true,
        explanation:
          "Mivacurium releases histamine from mast cells, causing potential bronchospasm in asthmatic patients. Other histamine-releasing agents: atracurium (also releases histamine), curare (old). Histamine-releasing agents contraindicated in: (1) asthma, (2) COPD, (3) atopy, (4) previous anaphylaxis. Safe agents for asthmatics: (1) vecuronium, (2) rocuronium, (3) cisatracurium (ester metabolism, no histamine release), (4) pancuronium.",
      },
      {
        id: "b",
        text: "Rocuronium for rapid onset and recovery",
        isCorrect: false,
        explanation:
          "Rocuronium is safe in asthma (does not release histamine).",
      },
      {
        id: "c",
        text: "Vecuronium for intermediate duration without histamine release",
        isCorrect: false,
        explanation:
          "Vecuronium is safe; does not release histamine.",
      },
      {
        id: "d",
        text: "Cisatracurium for rapid ester metabolism",
        isCorrect: false,
        explanation:
          "Cisatracurium is safe; does not release histamine.",
      },
    ],
    explanation:
      "Histamine release from muscle relaxants can precipitate bronchoconstriction in asthmatics. Agents that release histamine: (1) mivacurium (direct release), (2) atracurium (dose-dependent release), (3) curare (older agent, rarely used). Mechanism: histamine binds H1/H2 receptors on airway smooth muscle → bronchoconstriction. Safe agents for asthmatic patients: (1) rocuronium (aminosteroidal, no histamine), (2) vecuronium (aminosteroidal, no histamine), (3) cisatracurium (benzylisoquinolinium compound, no histamine), (4) pancuronium (older agent, no histamine). Management of asthmatics during anesthesia: (1) premedication with anticholinergic (glycopyrrolate) and antihistamines, (2) use histamine-sparing agents, (3) maintain airway reflexes (ensure adequate depth), (4) have bronchodilators available (albuterol, magnesium sulfate).",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-03-TOP-014",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 34", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old male on chronic methadone therapy for opioid use disorder requires postoperative pain management after abdominal surgery. Which strategy is most appropriate?",
    clinicalVignette:
      "A 55-year-old male on methadone chronically requiring postoperative analgesia.",
    options: [
      {
        id: "a",
        text: "Continue methadone, add non-opioid analgesics and NSAIDs, use opioids for acute pain but higher doses may be needed due to opioid tolerance",
        isCorrect: true,
        explanation:
          "Chronic opioid/methadone therapy causes opioid tolerance requiring higher doses for analgesia. Management: (1) continue baseline methadone (withdrawal risk if stopped), (2) combine with non-opioid agents (acetaminophen, NSAIDs, ketamine, regional anesthesia), (3) use opioids for acute pain but expect higher requirements, (4) avoid abrupt opioid cessation (precipitates withdrawal). Regional anesthesia (epidural, peripheral nerve blocks) preferred when possible.",
      },
      {
        id: "b",
        text: "Discontinue methadone to reduce total opioid exposure",
        isCorrect: false,
        explanation:
          "Discontinuing methadone risks acute withdrawal (dangerous post-op), and doesn't reduce pain control needs.",
      },
      {
        id: "c",
        text: "Use only non-opioid analgesics avoiding additional opioids",
        isCorrect: false,
        explanation:
          "Non-opioids alone insufficient for major surgery pain in opioid-tolerant patients.",
      },
      {
        id: "d",
        text: "Use standard opioid doses with expectation of normal pain control",
        isCorrect: false,
        explanation:
          "Standard doses ineffective in opioid-tolerant patients; higher doses needed.",
      },
    ],
    explanation:
      "Opioid-tolerant patients (chronic methadone/buprenorphine/opioid therapy) require modified perioperative management. Key principles: (1) Continue baseline opioid therapy (avoid withdrawal), (2) Opioid tolerance requires higher doses for acute analgesia (no ceiling effect for tolerance), (3) Multimodal analgesia preferred: NSAIDs, acetaminophen, ketamine, regional blocks, (4) Buprenorphine creates special challenge (both opioid and antagonist properties) requiring temporary holding and postoperative restart. Withdrawal symptoms: anxiety, insomnia, agitation, mydriasis, tachycardia, hypertension. Regional anesthesia (epidural, nerve blocks) highly effective and avoids IV opioid dependence. Post-op pain management: combination of methadone + acute opioid dosing + multimodal therapy.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-09-TOP-015",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 38", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 28-year-old male undergoes lower limb orthopedic surgery under general anesthesia with neuromuscular blockade. Intraoperatively, he receives succinylcholine (1 mg/kg) and rocuronium (0.6 mg/kg). Six hours post-op, he remains intubated with no recovery of neuromuscular function (zero TOF twitches). What is the most likely diagnosis?",
    clinicalVignette:
      "A 28-year-old male with prolonged neuromuscular blockade beyond expected duration.",
    options: [
      {
        id: "a",
        text: "Pseudocholinesterase deficiency causing prolonged succinylcholine effect persisting 6 hours post-op",
        isCorrect: true,
        explanation:
          "Pseudocholinesterase (plasma cholinesterase) deficiency causes prolonged succinylcholine apnea. Genetics: homozygous atypical variant (dibucaine-resistant) can have blockade lasting hours instead of minutes. Pathophysiology: pseudocholinesterase normally hydrolyzes succinylcholine; deficiency → prolonged depolarization → prolonged blockade. Additional rocuronium blockade compounds the problem. Management: (1) continue mechanical ventilation, (2) serial TOF monitoring, (3) sugammadex for rocuronium when TOF recovers (or time-based), (4) genetic testing and family notification.",
      },
      {
        id: "b",
        text: "Inadequate neuromuscular blockade monitoring requiring dose verification",
        isCorrect: false,
        explanation:
          "TOF monitoring shows zero twitches, indicating deep blockade, not inadequate monitoring.",
      },
      {
        id: "c",
        text: "Malignant hyperthermia in delayed presentation",
        isCorrect: false,
        explanation:
          "MH would present acutely with fever and muscle rigidity, not delayed blockade recovery.",
      },
      {
        id: "d",
        text: "Inadequate sugammadex reversal attempt",
        isCorrect: false,
        explanation:
          "No reversal agent given; patient has two different blockading agents.",
      },
    ],
    explanation:
      "Succinylcholine duration is normally 5-10 minutes due to rapid plasma cholinesterase (pseudocholinesterase) hydrolysis. Pseudocholinesterase deficiency causes prolonged succinylcholine apnea: (1) genetic variants (atypical/dibucaine-resistant), (2) acquired deficiency (liver disease, malnutrition, certain medications). Presentation: prolonged neuromuscular blockade (hours) after standard succinylcholine dose. Diagnosis: (1) clinical (inability to reverse), (2) blood pseudocholinesterase levels, (3) dibucaine number testing (measures enzyme activity), (4) genetic testing. Management: (1) continued mechanical ventilation until blockade wears off spontaneously, (2) no reversal agent effective (unlike rocuronium with sugammadex), (3) supportive care, (4) notification of family (genetic screening), (5) avoidance of succinylcholine in future. This patient's additional rocuronium worsens situation but can eventually be reversed with sugammadex once succinylcholine effect clears.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-03-TOP-016",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 34", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 40-year-old male with septic shock requires intubation and mechanical ventilation. He is hypotensive (BP 85/50), tachycardic (130 bpm), and requires vasopressor support. Which induction agent is most appropriate?",
    clinicalVignette:
      "A 40-year-old male in septic shock requiring intubation with severe hypotension.",
    options: [
      {
        id: "a",
        text: "Etomidate for cardiovascular stability despite sepsis",
        isCorrect: true,
        explanation:
          "In septic shock with severe hypotension, etomidate is preferred due to: (1) minimal myocardial depression, (2) preserved baroreceptor reflexes, (3) minimal vasodilation, (4) maintenance of blood pressure. Caveat: single-dose adrenal suppression (transient cortisol insufficiency). Even with this risk, hemodynamic stability is critical in shock. Alternative: ketamine (sympathomimetic, raises BP/HR) but can increase catecholamine stress in sepsis.",
      },
      {
        id: "b",
        text: "Propofol for reduced inflammatory response",
        isCorrect: false,
        explanation:
          "Propofol causes myocardial depression and severe vasodilation—dangerous in shock.",
      },
      {
        id: "c",
        text: "Thiopental for rapid induction",
        isCorrect: false,
        explanation:
          "Thiopental causes myocardial depression, contraindicated in shock.",
      },
      {
        id: "d",
        text: "Midazolam for sedation without rapid induction",
        isCorrect: false,
        explanation:
          "Midazolam is slower; emergency intubation requires rapid-acting agent.",
      },
    ],
    explanation:
      "Septic shock presents with hypotension (BP <90 systolic), tachycardia, altered mental status from distributive shock (vasodilation, decreased SVR). Induction agent selection critical to maintain blood pressure. Comparison: (1) Propofol: myocardial depression + vasodilation → severe hypotension (dangerous in shock), (2) Thiopental: myocardial depression → hypotension, (3) Etomidate: preserved cardiovascular stability (best choice despite adrenal suppression), (4) Ketamine: sympathomimetic (increases BP/HR via catecholamine release, acceptable alternative). Concurrent management: (1) aggressive fluid resuscitation, (2) vasopressor support (epinephrine, norepinephrine), (3) antibiotics, (4) source control. Adrenal suppression from etomidate single dose usually minor; critical to maintain perfusion pressure initially.",
    difficulty: "HARD" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-01-TOP-017",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 16", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old male with coronary artery disease requires anesthesia for elective surgery. He is on aspirin, clopidogrel, and beta-blockers. When should surgical intervention be delayed for bleeding risk reduction?",
    clinicalVignette:
      "A 60-year-old male on dual antiplatelet therapy requiring elective surgery.",
    options: [
      {
        id: "a",
        text: "At least 5 days after discontinuing clopidogrel (if safe from cardiac standpoint) to allow platelet recovery",
        isCorrect: true,
        explanation:
          "Clopidogrel (P2Y12 inhibitor) causes irreversible platelet inhibition lasting the platelet lifespan (~7-10 days for full recovery). Surgical bleeding risk significantly increases on dual antiplatelet therapy (aspirin + clopidogrel). Management: (1) if elective surgery, discontinue clopidogrel 5 days pre-op (minimum, though 7 days better for complete recovery), (2) continue aspirin if possible (lower bleeding risk than clopidogrel), (3) coordinate with cardiology regarding risk/benefit for recent stents, (4) consider platelet transfusion if massive bleeding occurs. For recent stents (<12 months), stopping clopidogrel risks stent thrombosis—cardiology involvement essential.",
      },
      {
        id: "b",
        text: "Can proceed immediately with dual antiplatelet therapy; bleeding managed with transfusion",
        isCorrect: false,
        explanation:
          "Proceeding with dual therapy increases bleeding risk; coordination regarding medication timing important.",
      },
      {
        id: "c",
        text: "Delay only if on anticoagulation therapy (warfarin, DOACs)",
        isCorrect: false,
        explanation:
          "Antiplatelet agents also increase bleeding risk in surgery.",
      },
      {
        id: "d",
        text: "Continue all medications without delay; anesthesia management sufficient",
        isCorrect: false,
        explanation:
          "Anesthesia cannot overcome significantly increased surgical bleeding from dual antiplatelet therapy.",
      },
    ],
    explanation:
      "Antiplatelet agent management in perioperative period is critical balance between bleeding risk and thrombotic risk. Aspirin: irreversible platelet inhibition lasting platelet lifespan, modest increase in bleeding risk, usually continued perioperatively. Clopidogrel: irreversible platelet inhibition, significant increase in bleeding risk, need to balance against stent thrombosis risk. Guidelines: (1) Elective surgery: discontinue clopidogrel 5-7 days pre-op if safe (especially if no recent stents), (2) Urgent surgery on clopidogrel: proceed with surgery, accept increased bleeding, have transfusion available, (3) Recent stents (<12 months): very high risk stent thrombosis if clopidogrel stopped—coordinate with cardiology, consider continuing dual therapy or alternative approaches. Post-op: restart antiplatelet agents when bleeding controlled (typically 24 hours). Beta-blockers: continue perioperatively (withdrawal can cause ischemia).",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-10-TOP-018",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 31", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old female with end-stage renal disease (ESRD) on hemodialysis requires surgery. Which drug should be avoided or dosed carefully due to renal clearance dependence?",
    clinicalVignette:
      "A 50-year-old female with ESRD requiring anesthetic drug selection.",
    options: [
      {
        id: "a",
        text: "Morphine (renal metabolite accumulation causing prolonged effects) and atracurium-based agents safe",
        isCorrect: true,
        explanation:
          "ESRD affects anesthetic pharmacokinetics. Drugs to avoid/dose carefully: (1) morphine (active metabolites accumulate in renal failure), (2) meperidine (metabolite normeperidine neurotoxic), (3) cisatracurium (Hofmann elimination + ester metabolism, independent of renal function). Safe agents: (1) cisatracurium, (2) atracurium (ester metabolism + Hofmann), (3) fentanyl (hepatic metabolism), (4) propofol (hepatic metabolism). Avoid: morphine (metabolite accumulation), meperidine (normeperidine toxicity), aminoglycosides (nephrotoxicity and neuromuscular blockade).",
      },
      {
        id: "b",
        text: "Propofol at standard doses; requires dose reduction only if liver disease",
        isCorrect: false,
        explanation:
          "Propofol hepatic metabolism generally unaffected by renal disease; propofol acceptable.",
      },
      {
        id: "c",
        text: "Rocuronium at standard doses; renal clearance minimal",
        isCorrect: false,
        explanation:
          "Rocuronium has significant renal clearance; duration prolonged in ESRD.",
      },
      {
        id: "d",
        text: "Morphine acceptable at standard doses given good hemodynamic stability",
        isCorrect: false,
        explanation:
          "Morphine metabolites accumulate in ESRD regardless of hemodynamics.",
      },
    ],
    explanation:
      "ESRD affects anesthetic drug pharmacokinetics through: (1) Decreased renal clearance of drugs and active metabolites, (2) Altered volumes of distribution, (3) Decreased plasma protein binding (altered drug-binding), (4) Altered metabolism (uremia can affect metabolism), (5) Electrolyte abnormalities. Drugs requiring modification: (1) Morphine: active metabolites (morphine-3-glucuronide) accumulate → prolonged effects, respiratory depression, (2) Meperidine: normeperidine metabolite neurotoxic, (3) Codeine: poor metabolism in renal failure, (4) Rocuronium: 40% renal clearance → prolonged duration. Safe agents: (1) Cisatracurium/atracurium: Hofmann elimination + ester metabolism (independent of renal/hepatic function), (2) Fentanyl: hepatic metabolism with minimal renal clearance, (3) Thiopental: hepatic metabolism. Assessment: recent electrolytes (K+, Ca++, Mg++), hemoglobin, anemia (often present). Hemodialysis day: caution with fluid status changes.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-11-TOP-019",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 56", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 35-year-old male with type 2 diabetes undergoes elective cholecystectomy. His preoperative glucose is 240 mg/dL. After induction of anesthesia, what is the primary concern regarding glucose management intraoperatively?",
    clinicalVignette:
      "A 35-year-old male with type 2 diabetes and elevated fasting glucose requiring elective surgery.",
    options: [
      {
        id: "a",
        text: "Hyperglycemia during surgery increases infection risk and impairs wound healing; avoid excessive glucose and maintain reasonable control (180-220 mg/dL)",
        isCorrect: true,
        explanation:
          "Perioperative hyperglycemia increases: (1) surgical site infection risk (impaired immune function, neutrophil dysfunction), (2) impaired wound healing, (3) increased postoperative complications. Anesthesia induces hyperglycemia through: (1) stress hormone release (epinephrine, cortisol), (2) reduced insulin secretion, (3) increased hepatic gluconeogenesis. Management: (1) continue basal insulin/medications when possible, (2) monitor intraoperative glucose (check baseline, intraop q2h, post-op), (3) target range 140-180 mg/dL perioperatively (avoid both hypo and hyperglycemia), (4) insulin infusion if hyperglycemia severe, (5) careful management to avoid hypoglycemia.",
      },
      {
        id: "b",
        text: "Hypoglycemia is the primary risk requiring aggressive dextrose administration",
        isCorrect: false,
        explanation:
          "While hypoglycemia avoided, hyperglycemia is more common and concerning perioperatively.",
      },
      {
        id: "c",
        text: "Glucose control unimportant during surgery; manage postoperatively only",
        isCorrect: false,
        explanation:
          "Perioperative glucose control important for reducing complications.",
      },
      {
        id: "d",
        text: "Give normal dose of preoperative oral antidiabetic drugs on morning of surgery",
        isCorrect: false,
        explanation:
          "NPO status requires holding most oral agents; basal insulin may continue.",
      },
    ],
    explanation:
      "Perioperative glucose management in diabetic patients requires careful planning. Preoperative: (1) assess glycemic control (HbA1c), (2) hold most oral antidiabetic agents morning of surgery (NPO), (3) continue basal insulin at reduced dose (50% if long-acting), (4) monitor glucose. Intraoperative: (1) anesthesia causes hyperglycemia through stress hormone release, (2) monitor glucose q1-2h, (3) target 140-180 mg/dL reasonable compromise (avoid hypo and severe hyperglycemia), (4) start insulin infusion if glucose >250 mg/dL. Post-op: (1) resume medications when oral intake tolerated, (2) transition to home regimen, (3) monitor for hypo/hyperglycemia. Tight control (70-100 mg/dL) increases hypoglycemia risk without additional benefit in surgical setting. Balance needed between infection prevention and hypoglycemia avoidance.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-12-TOP-020",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 31", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 70-year-old male with multiple comorbidities undergoes major abdominal surgery. He receives volatile anesthetic (isoflurane), opioids (fentanyl), and nitrous oxide. What is the primary mechanism of inhalational anesthetic action?",
    clinicalVignette:
      "A 70-year-old male under general anesthesia with volatile anesthetic requiring understanding of mechanism.",
    options: [
      {
        id: "a",
        text: "Enhancement of GABAergic inhibitory neurotransmission and inhibition of NMDA glutamate receptors",
        isCorrect: true,
        explanation:
          "Volatile anesthetics work through: (1) enhancement of GABA-A receptor inhibitory effects (potentiation of chloride influx), (2) inhibition of NMDA glutamate receptors (reducing excitatory transmission). This dual mechanism produces CNS depression with hypnosis, amnesia, analgesia (mild), and muscle relaxation. Mechanism differs from opioids (mu receptor agonists) and benzodiazepines (GABA potentiation only).",
      },
      {
        id: "b",
        text: "Mu opioid receptor agonism producing analgesia and respiratory depression",
        isCorrect: false,
        explanation:
          "That is the mechanism of opioids (fentanyl), not volatile anesthetics.",
      },
      {
        id: "c",
        text: "NMDA receptor antagonism exclusively",
        isCorrect: false,
        explanation:
          "Volatile anesthetics have dual mechanism (GABA + NMDA), not NMDA alone.",
      },
      {
        id: "d",
        text: "Nonspecific CNS depression from membrane expansion",
        isCorrect: false,
        explanation:
          "Meyer-Overton theory (membrane expansion) is outdated; specific receptor mechanisms now understood.",
      },
    ],
    explanation:
      "Volatile anesthetics (isoflurane, sevoflurane, desflurane) produce anesthesia through specific receptor mechanisms: (1) GABA-A receptor potentiation: enhance inhibitory chloride influx (similar to benzodiazepines/barbiturates), (2) NMDA glutamate receptor inhibition: reduce excitatory neurotransmission, (3) possible glycine receptor modulation. These mechanisms combine to produce: (1) hypnosis (unconsciousness), (2) amnesia, (3) analgesia (mild), (4) muscle relaxation, (5) suppression of spinal reflexes. Minimum alveolar concentration (MAC): dose measure, ~1 MAC required for anesthesia in 50% of patients, ~1.3 MAC for 95%. This dual mechanism differs from opioids (pure analgesia without hypnosis) and benzodiazepines (hypnosis without analgesia). Multimodal anesthesia combines volatile (hypnosis) + opioid (analgesia) + muscle relaxant for balanced anesthetic effect.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-02-TOP-021",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 7", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 55-year-old female with left main coronary artery stenosis develops intraoperative myocardial ischemia (ST depression on ECG). Blood pressure is 95/60 mmHg and heart rate is 105 bpm. What is the primary intervention?",
    clinicalVignette:
      "A 55-year-old female with critical CAD developing intraoperative ischemia.",
    options: [
      {
        id: "a",
        text: "Increase anesthetic depth and improve hemodynamics (increase BP and heart rate optimization) to improve coronary perfusion",
        isCorrect: true,
        explanation:
          "Myocardial ischemia in patient with critical CAD reflects supply-demand mismatch. Management: (1) increase anesthetic depth to reduce myocardial O2 demand (reduce HR and contractility), (2) optimize hemodynamics to improve diastolic BP (coronary perfusion pressure), (3) maintain HR 50-60 bpm (increases diastolic time), (4) vasopressors (phenylephrine) to increase diastolic BP if needed, (5) reduce volatile anesthetic if excessive (negative inotrope), (6) add beta-blocker if tachycardic, (7) optimize oxygenation and ventilation (avoid hypoxia/hypercarbia), (8) notify surgeon, consider aborting surgery if unstable.",
      },
      {
        id: "b",
        text: "Administer aspirin IV immediately",
        isCorrect: false,
        explanation:
          "Aspirin helpful for ongoing ischemia but not acute treatment; focus on hemodynamics first.",
      },
      {
        id: "c",
        text: "Increase FiO2 only; continue surgery without hemodynamic intervention",
        isCorrect: false,
        explanation:
          "Hemodynamic optimization critical, not just oxygen.",
      },
      {
        id: "d",
        text: "Give nitroglycerin for vasodilation and ischemia relief",
        isCorrect: false,
        explanation:
          "Nitroglycerin causes further hypotension in already hypotensive patient.",
      },
    ],
    explanation:
      "Intraoperative myocardial ischemia indicates coronary blood flow inadequate for myocardial oxygen demand. Pathophysiology: (1) coronary perfusion pressure = diastolic aortic pressure - LVEDP, (2) in critical CAD, perfusion pressure inadequate despite normal pressures, (3) tachycardia reduces diastolic time reducing coronary filling. Management priorities: (1) Reduce myocardial O2 demand: increase anesthetic depth, reduce HR to 50-60 (beta-blocker, opioid), reduce contractility, (2) Improve coronary perfusion: increase diastolic BP with vasopressors if needed, (3) Optimize oxygen delivery: increase FiO2, maintain hematocrit, maintain CO, (4) Avoid triggers: prevent hypotension, tachycardia, hypoxia, hypercarbia. Ischemic episode management: notify surgeon about consideration of aborting surgery or continuing with maximum optimization. Post-op: aggressive cardiac monitoring, troponin evaluation, consider cardiology consultation.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-13-TOP-022",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 27", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 40-year-old male with chronic liver disease (Child-Pugh C cirrhosis) requires elective surgery. What is the expected pharmacokinetic change affecting anesthetic drugs?",
    clinicalVignette:
      "A 40-year-old male with advanced cirrhosis requiring anesthetic drug selection.",
    options: [
      {
        id: "a",
        text: "Decreased hepatic metabolism prolonging drug effects; use reduced doses of hepatically metabolized agents",
        isCorrect: true,
        explanation:
          "Cirrhosis causes hepatic dysfunction: (1) reduced hepatocyte function decreasing drug metabolism, (2) portal hypertension creating portosystemic shunts bypassing first-pass metabolism, (3) reduced albumin/protein binding capacity. Result: prolonged drug half-lives and increased effects. Drugs requiring dose reduction: (1) propofol (reduce dose 25-50%), (2) benzodiazepines (prolonged effect), (3) opioids (reduced clearance), (4) muscle relaxants (variable effects depending on elimination route). Safe agents: (1) cisatracurium/atracurium (Hofmann elimination, independent of hepatic/renal function), (2) volatile anesthetics (hepatic metabolism slight, generally acceptable), (3) succinylcholine (pseudocholinesterase often reduced in liver disease).",
      },
      {
        id: "b",
        text: "Increased hepatic metabolism requiring higher drug doses",
        isCorrect: false,
        explanation:
          "Liver disease decreases metabolism, not increases it.",
      },
      {
        id: "c",
        text: "Normal pharmacokinetics since liver disease causes only portal hypertension",
        isCorrect: false,
        explanation:
          "Liver disease affects both metabolism and hemodynamics.",
      },
      {
        id: "d",
        text: "Metabolism unchanged but increased renal clearance of drugs",
        isCorrect: false,
        explanation:
          "Renal function independent of liver disease (unless hepatorenal syndrome).",
      },
    ],
    explanation:
      "Cirrhosis has profound effects on anesthetic pharmacokinetics. Mechanisms: (1) Reduced hepatocyte enzyme activity: decreased metabolism of drugs, (2) Portosystemic shunting: drugs bypass hepatic metabolism entering systemic circulation directly, (3) Altered plasma protein binding: reduced albumin decreases binding of highly protein-bound drugs, increasing free (active) drug concentration, (4) Altered volumes of distribution: ascites, total body water changes affect drug distribution. Clinical implications: (1) prolonged drug effects requiring dose reduction, (2) increased sensitivity to sedatives/opioids, (3) coagulopathy increases bleeding risk, (4) encephalopathy worsens with sedation, (5) renal dysfunction may develop (hepatorenal syndrome). Drug selection: (1) cisatracurium/atracurium for paralysis, (2) avoid hepatically metabolized sedatives, (3) use reduced propofol doses, (4) careful opioid dosing, (5) volatile anesthetics acceptable. Preop: assess Child-Pugh score (prognosis, surgical risk), platelet count, INR, albumin, creatinine.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-11-TOP-023",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 56", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 25-year-old female with a family history of sudden cardiac death develops cardiac arrest during general anesthesia with succinylcholine and halothane. Autopsy later reveals long QT syndrome (LQTS). What was the primary risk factor for arrest during anesthesia?",
    clinicalVignette:
      "A 25-year-old female with undiagnosed LQTS developing cardiac arrest intraoperatively.",
    options: [
      {
        id: "a",
        text: "Succinylcholine-induced hyperkalemia and halothane sensitizing to dysrhythmias in LQTS patient",
        isCorrect: true,
        explanation:
          "Long QT syndrome is ion channelopathy causing prolonged QT interval with risk of torsades de pointes (polymorphic VT). Anesthetic risk factors: (1) succinylcholine releases potassium → hyperkalemia triggers dysrhythmias, (2) halothane increases dysrhythmia risk (sensitizes heart to catecholamines, increases QT), (3) sympathetic stimulation from inadequate depth/analgesia. LQTS precipitants: sudden acoustic stimuli, exercise, emotional stress, some drugs (antiarrhythmics, antibiotics). Anesthetic considerations: (1) screen for family history of SCD, syncope, (2) preop ECG in suspicious cases, (3) avoid triggering drugs (succinylcholine), (4) avoid halothane, (5) maintain adequate anesthesia depth, (6) minimize sympathetic stimulation, (7) have defibrillator ready.",
      },
      {
        id: "b",
        text: "Halothane hepatotoxicity alone causing hepatic failure",
        isCorrect: false,
        explanation:
          "Hepatic failure develops over days/weeks, not acute arrest.",
      },
      {
        id: "c",
        text: "Succinylcholine causing malignant hyperthermia",
        isCorrect: false,
        explanation:
          "MH presents with muscle rigidity and rising temperature, not primary dysrhythmia.",
      },
      {
        id: "d",
        text: "Inadequate anesthesia causing hypertension and coronary vasospasm",
        isCorrect: false,
        explanation:
          "Hypertension is secondary to underlying dysrhythmia/LQTS.",
      },
    ],
    explanation:
      "Long QT syndrome is inherited channelopathy causing prolonged ventricular repolarization (QT interval >460 ms in males, >470 ms in females). Risk: spontaneous torsades de pointes (polymorphic ventricular tachycardia) causing syncope or SCD. Anesthetic risks: (1) succinylcholine → hyperkalemia → dysrhythmia trigger, (2) halothane → increases QT prolongation and dysrhythmia risk, (3) sympathetic stimulation from inadequate anesthesia, (4) cold exposure, (5) certain drugs (metoclopramide, domperidone). Prevention in suspected/known LQTS: (1) preop ECG, (2) avoid succinylcholine, (3) avoid halothane, (4) maintain adequate anesthesia depth, (5) careful airway manipulation (avoid coughing/bucking), (6) maintain normothermia, (7) have emergency equipment ready. Anesthetic management: (1) etomidate or propofol for induction, (2) non-depolarizing paralysis (rocuronium), (3) volatile anesthetic (sevoflurane preferred over halothane), (4) avoid hyperkalemia, (5) maintain beta-blockade if on it.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-01-TOP-024",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 27", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old male scheduled for total hip replacement is classified as ASA Class III. What does this classification indicate regarding surgical risk?",
    clinicalVignette:
      "A 50-year-old male with multiple comorbidities requiring hip replacement.",
    options: [
      {
        id: "a",
        text: "Severe systemic disease with functional limitation increasing perioperative risk",
        isCorrect: true,
        explanation:
          "ASA Physical Status Classification: (1) ASA I = healthy, (2) ASA II = mild systemic disease, (3) ASA III = severe systemic disease limiting activity, (4) ASA IV = severe disease constant threat to life, (5) ASA V = moribund. Class III indicates significant comorbidities (e.g., diabetes with complications, CAD, COPD, obesity) that limit daily function. Higher ASA class correlates with increased perioperative morbidity/mortality. ASA III patients require: (1) careful preop assessment, (2) optimization of medical conditions, (3) modified anesthetic plan, (4) invasive monitoring for high-risk procedures, (5) ICU readiness post-op.",
      },
      {
        id: "b",
        text: "Minimal perioperative risk with normal organ function",
        isCorrect: false,
        explanation:
          "ASA III indicates significant disease; that is ASA I.",
      },
      {
        id: "c",
        text: "Emergency surgical status requiring immediate anesthesia",
        isCorrect: false,
        explanation:
          "ASA classification separate from urgency rating; both used in preop assessment.",
      },
      {
        id: "d",
        text: "Unsuitable for elective surgery and should be offered palliative care instead",
        isCorrect: false,
        explanation:
          "ASA III not contraindication to surgery; requires optimization and careful management.",
      },
    ],
    explanation:
      "ASA Physical Status Classification predicts perioperative risk based on preexisting medical conditions. Used since 1941 for risk stratification. Definitions: (1) ASA I: healthy individual, (2) ASA II: mild systemic disease (controlled hypertension, mild diabetes), (3) ASA III: severe systemic disease (uncontrolled HTN, CAD, COPD, obesity), (4) ASA IV: life-threatening disease (unstable angina, recent MI, sepsis), (5) ASA V: moribund patient (perforated viscus, massive trauma). Mortality risk increases with ASA class: ASA I ~0.1%, ASA II ~0.5%, ASA III ~1-3%, ASA IV ~10%+, ASA V up to 50%+. Urgency modifier: add 'E' for emergency surgery. ASA III hip replacement patient needs: (1) preop assessment/optimization, (2) comorbidity management, (3) appropriate anesthetic technique, (4) skilled anesthesia team, (5) post-op monitoring. Not contraindication to surgery but requires careful planning.",
    difficulty: "EASY" as const,
    bloomsLevel: "Recall",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-14-TOP-025",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 14", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old female with severe mitral stenosis requires emergency appendectomy. She presents with orthopnea, dyspnea on minimal exertion, and pulmonary rales. Which anesthetic approach is most appropriate?",
    clinicalVignette:
      "A 45-year-old female with critical mitral stenosis in pulmonary edema requiring emergency surgery.",
    options: [
      {
        id: "a",
        text: "Avoid intubation if possible, maintain spontaneous ventilation with careful fluid management to prevent pulmonary edema worsening",
        isCorrect: true,
        explanation:
          "Mitral stenosis (MS) with pulmonary edema presents high perioperative risk. Hemodynamic principles: (1) fixed mechanical obstruction at mitral valve, (2) increased left atrial pressure causes pulmonary edema, (3) tachycardia worsens stenosis by reducing diastolic filling time, (4) fluid overload increases pulmonary edema. Management: (1) maintain spontaneous ventilation if possible (positive pressure increases intrathoracic pressure, increases left atrial pressure, worsens edema), (2) slow induction if intubation needed, (3) maintain preload (hypovolemia worsens output), (4) avoid tachycardia (maintain bradycardia), (5) cautious fluid management, (6) maintain SVR, (7) invasive hemodynamic monitoring recommended.",
      },
      {
        id: "b",
        text: "Immediate intubation and aggressive fluid resuscitation",
        isCorrect: false,
        explanation:
          "Positive pressure ventilation and fluid overload worsen pulmonary edema in MS.",
      },
      {
        id: "c",
        text: "Spinal anesthesia for regional anesthesia benefits",
        isCorrect: false,
        explanation:
          "Spinal anesthesia causes sympathectomy → hypotension → inadequate valve closure → decompensation.",
      },
      {
        id: "d",
        text: "Aggressive diuresis preoperatively to clear pulmonary edema",
        isCorrect: false,
        explanation:
          "While diuresis helpful pre-op, emergency surgery cannot wait; must manage hemodynamically.",
      },
    ],
    explanation:
      "Mitral stenosis is mechanical obstruction to left ventricular filling. Hemodynamic consequences: (1) elevated left atrial pressure → pulmonary venous congestion → pulmonary edema, (2) reduced cardiac output, (3) fixed stroke volume cannot increase with demand, (4) tachycardia particularly problematic (less diastolic filling time through stenosed valve). Perioperative anesthetic management: (1) Preop: optimize diuretics, maintain normal rhythm (if AFib, rate control essential), beta-blockers, (2) Induction: maintain spontaneous ventilation if possible (avoid positive pressure), slow gentle induction, (3) Maintenance: avoid tachycardia (maintain bradycardia 50-60), avoid hypotension/hypovolemia, maintain SVR, (4) Avoid: positive pressure ventilation (increases left atrial pressure), fluid overload, tachycardia, hypotension. Regional anesthesia: risky (sympathectomy → hypotension). General anesthesia: high-risk, requires careful management, invasive monitoring recommended. Mortality in perioperative period increased in severe MS with pulmonary edema.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-13-TOP-026",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 27", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 60-year-old male with history of atrial fibrillation on rate-control medications develops significant bradycardia (HR 42 bpm) during general anesthesia. How should this be managed?",
    clinicalVignette:
      "A 60-year-old male with AFib developing intraoperative bradycardia.",
    options: [
      {
        id: "a",
        text: "Reduce anesthetic depth, administer IV glycopyrrolate or atropine if symptomatic (hypotension, low output)",
        isCorrect: true,
        explanation:
          "Bradycardia in anesthetized patient can result from: (1) deep anesthesia (especially volatile agents), (2) opioid effects, (3) vagal stimulation, (4) mechanical factors (traction, intubation). Management: (1) assess hemodynamics—if stable and no ST changes, observation acceptable, (2) reduce anesthetic depth if excessive, (3) discontinue opioid infusion if in progress, (4) if symptomatic (hypotension, reduced cardiac output), use anticholinergics (glycopyrrolate 0.1-0.2 mg IV or atropine 0.4 mg IV) or low-dose epinephrine infusion, (5) check for causes (hyperkalemia, heart block from medications).",
      },
      {
        id: "b",
        text: "Immediately administer epinephrine and place pacing catheter",
        isCorrect: false,
        explanation:
          "If hemodynamically stable, less aggressive approach appropriate; pacing reserved for refractory severe bradycardia.",
      },
      {
        id: "c",
        text: "Continue anesthesia without intervention if patient hemodynamically stable",
        isCorrect: true,
        explanation:
          "If bradycardia is asymptomatic (normal BP, adequate perfusion) and HR >40 bpm, observation acceptable. Intervention only if symptomatic.",
      },
      {
        id: "d",
        text: "Treat with calcium channel blocker to further slow heart rate",
        isCorrect: false,
        explanation:
          "Calcium channel blockers worsen bradycardia; anticholinergics or sympathomimetics needed.",
      },
    ],
    explanation:
      "Intraoperative bradycardia management depends on hemodynamic impact. Asymptomatic bradycardia (HR >40 bpm with normal BP/perfusion) can be observed. Symptomatic bradycardia management: (1) identify cause: (a) deep anesthesia, (b) opioid effects, (c) vagal stimulation, (d) medications (beta-blockers, calcium channel blockers), (e) hyperkalemia, (f) elevated ICP, (2) interventions: (a) reduce anesthetic depth, (b) stop opioid infusions, (c) reverse vagal stimuli (suction, traction), (d) anticholinergics: glycopyrrolate 0.1-0.2 mg IV or atropine 0.4 mg IV (onset 1-2 minutes), (e) sympathomimetics: epinephrine 0.1 mg IV or infusion, dopamine infusion, (f) pacing wire/transvenous pacing for refractory severe bradycardia. This patient on rate-control medications for AFib may be more bradycardia-prone; interaction with anesthetics significant. Continue beta-blockers perioperatively unless specifically held.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-13-TOP-027",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 37", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 70-year-old male with Parkinson's disease on levodopa undergoes spinal anesthesia. Postoperatively, he develops rigidity, tremor, and hyperthermia (38.9°C). What is the most likely diagnosis?",
    clinicalVignette:
      "A 70-year-old male with PD developing fever, rigidity, tremor post-operatively.",
    options: [
      {
        id: "a",
        text: "Neuroleptic malignant syndrome-like state from dopamine suppression during anesthesia/surgery",
        isCorrect: true,
        explanation:
          "Parkinson's disease involves dopamine deficiency in substantia nigra. Anesthesia suppresses dopamine further. Perioperative stress plus dopamine-reducing effect of anesthesia can precipitate NMS-like crisis with: (1) fever, (2) muscle rigidity, (3) tremor, (4) altered mental status, (5) autonomic instability. Management: (1) discontinue dopamine-blocking agents, (2) resume levodopa immediately if possible (most important), (3) supportive care (cooling, hydration), (4) dantrolene may help, (5) avoid antipsychotics. Prevention: (1) continue levodopa perioperatively if possible, (2) cautious use of antipsychotics, (3) avoid dopamine-blocking antiemetics (metoclopramide), use alternatives (ondansetron).",
      },
      {
        id: "b",
        text: "Malignant hyperthermia from spinal anesthesia",
        isCorrect: false,
        explanation:
          "MH triggered by volatile anesthetics and succinylcholine, not spinal. Spinal anesthesia is safe.",
      },
      {
        id: "c",
        text: "Sepsis from surgical contamination",
        isCorrect: false,
        explanation:
          "Sepsis develops over hours/days, not immediately. PD crisis more likely.",
      },
      {
        id: "d",
        text: "Thyroid storm from untreated hyperthyroidism",
        isCorrect: false,
        explanation:
          "No history of thyroid disease; Parkinsonism more consistent with PD crisis.",
      },
    ],
    explanation:
      "Parkinson's disease perioperative management requires special attention: (1) Continue levodopa throughout perioperative period (NPO status doesn't mean discontinue—coordinate with pharmacy), (2) Dopamine depletion from anesthesia/stress can precipitate Parkinsonian crisis resembling NMS, (3) Avoid antipsychotics and dopamine-blocking antiemetics. Medications to avoid in PD: (1) Metoclopramide (dopamine antagonist) → worsening PD/NMS-like crisis, (2) Prochlorperazine (antipsychotic) → blocks dopamine, (3) Haloperidol → antipsychotic effects, blocks dopamine. Safe antiemetics: (1) Ondansetron (5-HT3 antagonist), (2) Dexamethasone, (3) Diphenhydramine (anticholinergic, actually helpful in PD). Management of PD crisis post-op: (1) Resume levodopa immediately (may need nasogastric tube if NPO), (2) Supportive care with cooling, (3) Avoid antipsychotics, (4) Dantrolene considered for NMS-like features. This patient's triad of fever, rigidity, and tremor suggests PD crisis, not typical NMS (which is from dopamine-blocking drugs).",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-11-TOP-028",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 56", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 45-year-old male with hypertension and type 2 diabetes is scheduled for coronary artery bypass grafting. His ejection fraction is 30% (severely reduced). What is the primary anesthetic concern in this patient?",
    clinicalVignette:
      "A 45-year-old male with severe left ventricular dysfunction requiring CABG.",
    options: [
      {
        id: "a",
        text: "Severely reduced contractility cannot tolerate myocardial depression from anesthetics; maintain contractility and cardiac output",
        isCorrect: true,
        explanation:
          "Ejection fraction <35% indicates severe heart failure with markedly reduced contractility. Anesthetic management critical: (1) any myocardial depression from anesthetics may precipitate decompensation, (2) maintenance of cardiac output essential (CI >2 L/min/m²), (3) avoid negative inotropes (propofol, volatile agents at high concentrations, beta-blockers if possible), (4) prefer agents maintaining contractility (etomidate, ketamine), (5) opioids safe, (6) inotropic support (dobutamine, milrinone) often needed, (7) invasive hemodynamic monitoring essential (arterial line, CVP, possibly PAC), (8) maintain preload (careful fluid balance), (9) reduce afterload if elevated (SVR often high in heart failure).",
      },
      {
        id: "b",
        text: "Standard anesthetic induction safe; EF 30% is acceptable risk",
        isCorrect: false,
        explanation:
          "EF 30% is severely reduced, requiring modified management.",
      },
      {
        id: "c",
        text: "Propofol ideal for smooth induction in this patient",
        isCorrect: false,
        explanation:
          "Propofol depresses myocardium, contraindicated in severely reduced EF.",
      },
      {
        id: "d",
        text: "Spinal anesthesia preferred for reduced myocardial depression",
        isCorrect: false,
        explanation:
          "CABG requires general anesthesia with cardiopulmonary bypass.",
      },
    ],
    explanation:
      "Severe heart failure (EF <35%) represents high perioperative risk. Cardiac output (CO) = contractility × preload / afterload. In severe heart failure: contractility markedly reduced, requiring careful manipulation of preload/afterload to maintain CO. Anesthetic implications: (1) Induction: use agents minimizing myocardial depression (etomidate, ketamine preferred; avoid propofol, thiopental, benzodiazepines at high doses), (2) Maintain: avoid volatile agents at high concentrations, use opioid-based anesthesia, avoid excessive positive pressure ventilation, (3) Monitoring: invasive arterial line, CVP/PAC for hemodynamic guidance, TEE often used, (4) Inotropic support: have inotropes ready (dobutamine, milrinone, low-dose epinephrine), (5) Preload: careful fluid management (often volume-overloaded), (6) Afterload: reduce if elevated (vasodilators, low-dose NTG), (7) CABG use of cardiopulmonary bypass improves hemodynamics. Combined with coronary artery disease, mortality risk substantial; requires experienced team and ICU post-op monitoring.",
    difficulty: "HARD" as const,
    bloomsLevel: "Analysis",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-13-TOP-029",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 27", edition: "8th" },
    ],
  },
  {
    type: "MCQ_SINGLE" as const,
    stem: "A 50-year-old female with sleep apnea requires preoperative evaluation. What is the critical anesthetic concern with this condition?",
    clinicalVignette:
      "A 50-year-old female with moderate OSA scheduled for elective surgery.",
    options: [
      {
        id: "a",
        text: "Increased risk of perioperative airway obstruction and hypoxemia; modified anesthetic technique with careful airway management",
        isCorrect: true,
        explanation:
          "Obstructive sleep apnea (OSA) involves recurrent airway collapse during sleep causing oxygen desaturation, hypercapnia, and sleep disruption. Perioperative risks: (1) airway obstruction post-op (especially with opioids/sedatives), (2) delayed arousal from anesthesia, (3) hypoxemia (reduced baseline oxygenation), (4) difficult intubation (often associated with large neck circumference, micrognathia), (5) hypertension and arrhythmias. Management: (1) preop CPAP therapy, (2) avoid premedication (risk of airway obstruction), (3) careful airway assessment, (4) minimize opioids post-op (respiratory depression risk), (5) avoid sedatives, (6) encourage early mobilization, (7) continuous pulse oximetry post-op, (8) consider ICU monitoring, (9) maintain CPAP post-op.",
      },
      {
        id: "b",
        text: "Minimal anesthetic risk; sleep apnea does not affect perioperative outcome",
        isCorrect: false,
        explanation:
          "Sleep apnea significantly increases perioperative complications.",
      },
      {
        id: "c",
        text: "Standard anesthetic with normal opioid dosing acceptable",
        isCorrect: false,
        explanation:
          "Opioids increase airway obstruction risk in OSA patients.",
      },
      {
        id: "d",
        text: "Aggressive sedation needed to prevent airway obstruction",
        isCorrect: false,
        explanation:
          "Sedation worsens airway obstruction in OSA.",
      },
    ],
    explanation:
      "Sleep apnea increases anesthetic risk significantly. Pathophysiology: (1) recurrent airway collapse during sleep → oxygen desaturation, arousals, sleep fragmentation, (2) chronic hypoxemia → pulmonary hypertension, right heart strain, (3) upper airway anatomy predisposes to collapse (enlarged soft palate, tonsils, large tongue, micrognathia). Perioperative implications: (1) Difficult intubation likely (predict with Mallampati score, tongue size, neck circumference >17 inches), (2) Post-op airway obstruction (sedatives/opioids suppress protective reflexes), (3) Hypoxemia from combined effects, (4) Hypertension and dysrhythmias (atrial fibrillation common), (5) Delayed recovery from anesthesia. Management: (1) Preop: confirm OSA severity (STOP-BANG score), optimize with CPAP, (2) Avoid premedication (respiratory depression), (3) Careful airway planning, (4) Intraop: standard anesthetic with careful monitoring, (5) Post-op: minimize opioids, avoid sedatives, continuous pulse oximetry, CPAP continuation, consider ICU, early mobilization. Higher surgical risk in moderate-severe OSA.",
    difficulty: "MEDIUM" as const,
    bloomsLevel: "ProblemSolving",
    examTags: ["NEXT_STEP1" as const, "NEET_PG" as const],
    subjectCode: "AS",
    topicCode: "AS-MOD-11-TOP-030",
    textbookRefs: [
      { book: "Miller's Anesthesia", chapter: "Ch 31", edition: "8th" },
    ],
  },
];
