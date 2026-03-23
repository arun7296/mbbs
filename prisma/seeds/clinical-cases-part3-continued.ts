export const clinicalCasesPart3Continued = [
  {
    title: "Organophosphorus Poisoning - Atropine & PAM Protocol",
    subjectCode: "FM",
    topicCode: "FM-MOD-TOX-OP",
    difficulty: "HARD" as const,
    patientProfile: {
      age: 28,
      gender: "male",
      chiefComplaint: "Unconscious, excessive salivation, pinpoint pupils",
      history: "Found at agricultural farm with pesticide container. Wife unsure of dose/time."
    },
    stages: [
      {
        stage: 1,
        name: "Rapid Assessment & History",
        narrative: "28-year-old male brought to ED unconscious, brought from farm. Severe salivation, pinpoint pupils. Likely organophosphorus poisoning.",
        availableActions: [
          {
            id: "h1",
            text: "Determine time of exposure (critical for prognosis)",
            isOptimal: true,
            findings: "Wife estimates 3-4 hours before arriving at hospital (so ~30 min ago). Critical for treatment window.",
            scoreDelta: 12
          },
          {
            id: "h2",
            text: "Identify the specific organophosphorus compound if possible",
            isOptimal: true,
            findings: "Pesticide bottle found near patient. Label: Monocrotophos (MOC). High cholinesterase inhibitor.",
            scoreDelta: 10
          },
          {
            id: "h3",
            text: "Ask about suicidal intent vs accidental exposure",
            isOptimal: true,
            findings: "Wife states accidental spillage while handling pesticide. History of depression but no active suicidal ideation.",
            scoreDelta: 5
          },
          {
            id: "h4",
            text: "Ask about initial symptoms reported by family",
            isOptimal: true,
            findings: "Wife reports: initial excessive salivation, muscle twitching, then patient became unconscious.",
            scoreDelta: 8
          },
          {
            id: "h5",
            text: "Determine if patient vomited or had seizures",
            isOptimal: true,
            findings: "Wife reports patient vomited twice and had brief muscle convulsions before unconsciousness.",
            scoreDelta: 5
          },
          {
            id: "h6",
            text: "Check if any prehospital decontamination performed",
            isOptimal: true,
            findings: "No decontamination done. Patient still wearing contaminated clothes.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 2,
        name: "Physical Examination - SLUDGE Syndrome",
        narrative: "Perform systematic exam. Patient unconscious, responding only to pain. Vitals: BP 88/55, HR 120, RR 12 (shallow), SpO2 88%, Temp 37°C.",
        availableActions: [
          {
            id: "pe1",
            text: "Assess SLUDGE symptoms (Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis)",
            isOptimal: true,
            findings: "Excessive salivation (profuse), lacrimation, incontinence of urine noted. Severe cholinergic excess.",
            scoreDelta: 12
          },
          {
            id: "pe2",
            text: "Check pupils",
            isOptimal: true,
            findings: "Pupils pinpoint (1-2mm), unreactive. Pathognomonic for organophosphorus poisoning.",
            scoreDelta: 10
          },
          {
            id: "pe3",
            text: "Assess respiratory status",
            isOptimal: true,
            findings: "Shallow breathing, RR 12 (bradypnea), wheezing heard bilaterally. Bronchospasm present.",
            scoreDelta: 12
          },
          {
            id: "pe4",
            text: "Check muscle tone and fasciculations",
            isOptimal: true,
            findings: "Muscles flaccid (not in acute phase). No visible fasciculations currently.",
            scoreDelta: 8
          },
          {
            id: "pe5",
            text: "Assess level of consciousness",
            isOptimal: true,
            findings: "Unconscious, GCS 8/15 (E2V2M4). No response to verbal commands.",
            scoreDelta: 8
          },
          {
            id: "pe6",
            text: "Check for cyanosis",
            isOptimal: true,
            findings: "Slight cyanosis noted. SpO2 88%. Respiratory depression and bronchospasm causing hypoxia.",
            scoreDelta: 10
          }
        ]
      },
      {
        stage: 3,
        name: "Investigations",
        narrative: "Order urgent investigations to confirm diagnosis and assess severity.",
        availableActions: [
          {
            id: "inv1",
            text: "Red blood cell cholinesterase level (most specific)",
            isOptimal: true,
            findings: "RBC cholinesterase 15% of normal (severely depressed). Confirms significant organophosphorus exposure.",
            scoreDelta: 15
          },
          {
            id: "inv2",
            text: "Serum pseudocholinesterase",
            isOptimal: true,
            findings: "Plasma cholinesterase 20% of normal. Also severely depressed.",
            scoreDelta: 10
          },
          {
            id: "inv3",
            text: "ABG - assess oxygenation and ventilation",
            isOptimal: true,
            findings: "pH 7.25, pCO2 55, pO2 65, HCO3 20. Respiratory acidosis + hypoxia. Respiratory failure evident.",
            scoreDelta: 12
          },
          {
            id: "inv4",
            text: "Chest X-ray",
            isOptimal: true,
            findings: "CXR: bilateral alveolar infiltrates, pulmonary edema pattern. Cholinergic pulmonary edema.",
            scoreDelta: 10
          },
          {
            id: "inv5",
            text: "ECG",
            isOptimal: true,
            findings: "ECG: sinus bradycardia (HR 55), normal QTc. Cholinergic bradycardia.",
            scoreDelta: 5
          },
          {
            id: "inv6",
            text: "Basic metabolic panel",
            isOptimal: true,
            findings: "Electrolytes normal. Glucose 110 mg/dL normal.",
            scoreDelta: 3
          }
        ]
      },
      {
        stage: 4,
        name: "Diagnosis & Severity",
        narrative: "Confirm diagnosis and classify severity.",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Acute severe organophosphorus poisoning (Monocrotophos)",
            isOptimal: true,
            findings: "Clinical presentation (SLUDGE, pinpoint pupils) + cholinesterase levels confirm diagnosis.",
            scoreDelta: 15
          },
          {
            id: "d2",
            text: "Classify as SEVERE: respiratory depression, pulmonary edema, altered consciousness",
            isOptimal: true,
            findings: "GCS 8, RR 12 (bradypnea), SpO2 88%, CXR with pulmonary edema. Life-threatening.",
            scoreDelta: 12
          },
          {
            id: "d3",
            text: "Assess for respiratory failure requiring intubation",
            isOptimal: true,
            findings: "Current SpO2 88%, RR 12, RBC cholinesterase severely depressed. Will need ventilator support.",
            scoreDelta: 10
          },
          {
            id: "d4",
            text: "Evaluate for nicotinic vs muscarinic predominance",
            isOptimal: true,
            findings: "Mixed presentation: muscarinic (SLUDGE, pinpoint pupils) + nicotinic (flaccid paralysis potential).",
            scoreDelta: 8
          },
          {
            id: "d5",
            text: "Assess prognosis based on cholinesterase levels",
            isOptimal: true,
            findings: "RBC cholinesterase <15% = severe poisoning. Prognosis guarded but treatable.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 5,
        name: "Treatment - Atropine & PAM",
        narrative: "Initiate definitive treatment: atropine and pralidoxime.",
        availableActions: [
          {
            id: "t1",
            text: "Decontamination: Remove clothes, wash skin with soap & water",
            isOptimal: true,
            findings: "Remove contaminated clothes. Wash skin thoroughly. Prevent continued absorption.",
            scoreDelta: 10
          },
          {
            id: "t2",
            text: "Intubate and ventilate (airway management FIRST)",
            isOptimal: true,
            findings: "GCS 8, RR 12, SpO2 88%. Intubate with rapid-sequence induction. Secure airway before atropine.",
            scoreDelta: 15
          },
          {
            id: "t3",
            text: "Administer ATROPINE - titrate to effect",
            isOptimal: true,
            findings: "Give 2-5 mg IV bolus, repeat every 5-10 min until signs of atropinization (dry mouth, HR >80). Use large doses - may need 100+ mg total.",
            scoreDelta: 20
          },
          {
            id: "t4",
            text: "Administer PRALIDOXIME (PAM) - 2-PAM",
            isOptimal: true,
            findings: "Give 1 g IV over 15-30 min (or 600 mg IM if no IV access). Reactivates cholinesterase. Must give EARLY (within 24-48 hours).",
            scoreDelta: 15
          },
          {
            id: "t5",
            text: "Manage seizures if present - benzodiazepines",
            isOptimal: true,
            findings: "If seizures occur, give lorazepam 2-4 mg IV. Seizures from hypoxia/cholinergic excess.",
            scoreDelta: 8
          },
          {
            id: "t6",
            text: "Avoid depolarizing agents (succinylcholine) for intubation",
            isOptimal: true,
            findings: "Use rocuronium (non-depolarizing) instead. Succinylcholine can cause prolonged paralysis in OP poisoning.",
            scoreDelta: 10
          }
        ]
      },
      {
        stage: 6,
        name: "ICU Management & Follow-up",
        narrative: "Continued intensive care and monitoring.",
        availableActions: [
          {
            id: "fu1",
            text: "Continue atropine infusion to maintain atropinization",
            isOptimal: true,
            findings: "Start atropine infusion 0.02-0.1 mg/kg/hour after boluses achieve atropinization.",
            scoreDelta: 10
          },
          {
            id: "fu2",
            text: "Repeat PAM every 4-6 hours or as per response",
            isOptimal: true,
            findings: "PAM dose: 1g IV every 4-6 hours for first 24-48 hours, then taper based on response.",
            scoreDelta: 8
          },
          {
            id: "fu3",
            text: "Monitor cholinesterase levels and adjust treatment",
            isOptimal: true,
            findings: "Recheck RBC cholinesterase every 24 hours. Titrate atropine/PAM based on recovery.",
            scoreDelta: 8
          },
          {
            id: "fu4",
            text: "Supportive care: mechanical ventilation, ICU monitoring",
            isOptimal: true,
            findings: "Ventilate for 5-7 days. Wean as cholinesterase recovers and patient improves.",
            scoreDelta: 8
          },
          {
            id: "fu5",
            text: "Watch for intermediate syndrome (days 1-3)",
            isOptimal: true,
            findings: "Can develop axonal dysfunction leading to weakness. Support breathing until recovery.",
            scoreDelta: 5
          },
          {
            id: "fu6",
            text: "Psychiatric evaluation and counseling before discharge",
            isOptimal: true,
            findings: "History of depression. Requires psychiatric assessment and suicide prevention plan.",
            scoreDelta: 8
          }
        ]
      }
    ],
    learningObjectives: [
      "Recognize acute organophosphorus poisoning: SLUDGE syndrome and pinpoint pupils",
      "Calculate and administer correct doses of atropine (large, titrated to effect)",
      "Administer pralidoxime (PAM) early - reactivates cholinesterase",
      "Manage respiratory failure and pulmonary edema",
      "Avoid depolarizing neuromuscular blockers",
      "Monitor for complications: intermediate syndrome, recurrence"
    ],
    keyTeachingPoints: [
      "OP poisoning = cholinesterase inhibition → excessive acetylcholine → SLUDGE + pinpoint pupils",
      "Atropine blocks muscarinic effects (not nicotinic). Start 2-5 mg, repeat until dry mouth/HR >80.",
      "PAM reactivates cholinesterase - must give early (within 24-48 hours). 1g IV q4-6h.",
      "Intubate for airway protection - respiratory failure common from bronchospasm and pulmonary edema",
      "Cholinesterase levels guide severity and recovery",
      "RBC cholinesterase <20% = severe poisoning requiring high-dose atropine and ICU support"
    ]
  },
  {
    title: "Psoriasis Flare - PASI Score & Treatment Ladder",
    subjectCode: "DR",
    topicCode: "DR-MOD-DERM-PSO",
    difficulty: "MEDIUM" as const,
    patientProfile: {
      age: 42,
      gender: "female",
      chiefComplaint: "Sudden worsening of skin rash, severe itching",
      history: "Known psoriasis x 8 years, recently stressed due to work. Was controlled on topical steroids."
    },
    stages: [
      {
        stage: 1,
        name: "History Taking",
        narrative: "42-year-old female with psoriasis presents with acute flare. Concerned about severity.",
        availableActions: [
          {
            id: "h1",
            text: "Determine trigger for acute flare",
            isOptimal: true,
            findings: "Patient admits severe work stress past 2 weeks. No recent infection, medication change, or trauma.",
            scoreDelta: 10
          },
          {
            id: "h2",
            text: "Ask about extent and distribution of rash",
            isOptimal: true,
            findings: "Rash spread to arms, legs, trunk. Previously just on elbows and knees.",
            scoreDelta: 8
          },
          {
            id: "h3",
            text: "Ask about pruritus severity",
            isOptimal: true,
            findings: "Severe itching, 8/10 intensity. Sleep disrupted. Scratching worsens lesions.",
            scoreDelta: 8
          },
          {
            id: "h4",
            text: "Ask about current medications",
            isOptimal: true,
            findings: "Was using betamethasone dipropionate cream BID. Ran out 2 weeks ago, hasn't refilled.",
            scoreDelta: 8
          },
          {
            id: "h5",
            text: "Ask about systemic symptoms (fever, joint pain, nail changes)",
            isOptimal: true,
            findings: "Denies fever. Mild joint pain in fingers (possible psoriatic arthropathy).",
            scoreDelta: 5
          },
          {
            id: "h6",
            text: "Ask about family history of psoriasis",
            isOptimal: true,
            findings: "Mother has psoriasis. Strong family history.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 2,
        name: "Dermatological Examination",
        narrative: "Perform detailed skin examination to assess severity using PASI criteria.",
        availableActions: [
          {
            id: "pe1",
            text: "Document distribution: head, trunk, limbs",
            isOptimal: true,
            findings: "Head: no scalp involvement. Trunk: 30% covered. Upper limbs: 20%. Lower limbs: 25%.",
            scoreDelta: 8
          },
          {
            id: "pe2",
            text: "Assess erythema (redness)",
            isOptimal: true,
            findings: "Bright erythema present. Grade 3-4/4 (severe redness).",
            scoreDelta: 8
          },
          {
            id: "pe3",
            text: "Assess induration (thickening)",
            isOptimal: true,
            findings: "Plaques firm and thickened. Grade 3/4.",
            scoreDelta: 8
          },
          {
            id: "pe4",
            text: "Assess scaling",
            isOptimal: true,
            findings: "Thick, adherent silvery scale. Grade 4/4 (maximum).",
            scoreDelta: 8
          },
          {
            id: "pe5",
            text: "Check for nail pitting and onycholysis",
            isOptimal: true,
            findings: "Nail pitting noted on thumbs and fingernails. No onycholysis yet.",
            scoreDelta: 5
          },
          {
            id: "pe6",
            text: "Assess for Koebner phenomenon",
            isOptimal: true,
            findings: "Lesions visible on arms where patient scratches. Positive Koebner sign.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 3,
        name: "PASI Scoring & Severity Assessment",
        narrative: "Calculate PASI score to quantify severity.",
        availableActions: [
          {
            id: "inv1",
            text: "Calculate PASI score systematically",
            isOptimal: true,
            findings: "PASI score calculation: Head (10%) + Trunk (30%) + Upper limbs (20%) + Lower limbs (25%) = 85% BSA. Erythema 4, Induration 3, Scaling 4. PASI score: 22/72.",
            scoreDelta: 15
          },
          {
            id: "inv2",
            text: "Estimate body surface area (BSA) involved",
            isOptimal: true,
            findings: "Using rule of 9s: Head 5%, Trunk 30%, Upper limbs 20%, Lower limbs 25% = 80% BSA affected.",
            scoreDelta: 10
          },
          {
            id: "inv3",
            text: "Assess quality of life impact (DLQI)",
            isOptimal: true,
            findings: "DLQI score calculated: sleep affected, work impact, emotional distress. DLQI 18/30 (moderate-severe).",
            scoreDelta: 8
          },
          {
            id: "inv4",
            text: "Check for systemic involvement (arthralgia, fever)",
            isOptimal: true,
            findings: "Mild finger joint pain. No fever. No systemic inflammation evident.",
            scoreDelta: 5
          },
          {
            id: "inv5",
            text: "Consider blood tests to rule out infection trigger",
            isOptimal: true,
            findings: "CBC and CRP ordered: normal WBC, CRP <3 mg/L. No acute infection.",
            scoreDelta: 5
          },
          {
            id: "inv6",
            text: "Assess for secondary infection of skin (impetiginization)",
            isOptimal: true,
            findings: "No pustules, no purulent drainage. No signs of secondary infection.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 4,
        name: "Diagnosis & Classification",
        narrative: "Formulate diagnosis and determine treatment category.",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Chronic plaque psoriasis, acute flare, severe (PASI >12)",
            isOptimal: true,
            findings: "PASI 22 = severe psoriasis. >80% BSA involvement.",
            scoreDelta: 15
          },
          {
            id: "d2",
            text: "Identify flare trigger: psychological stress",
            isOptimal: true,
            findings: "Temporal relation to work stress. Koebner phenomenon evident.",
            scoreDelta: 10
          },
          {
            id: "d3",
            text: "Classify as moderate-to-severe requiring systemic therapy",
            isOptimal: true,
            findings: "PASI 22, 80% BSA, DLQI 18. Not adequate for topical therapy alone.",
            scoreDelta: 12
          },
          {
            id: "d4",
            text: "Assess for contraindications to systemic therapy",
            isOptimal: true,
            findings: "No active infection, no TB, no severe kidney/liver disease. Eligible for systemic therapy.",
            scoreDelta: 8
          },
          {
            id: "d5",
            text: "Consider if phototherapy is an option",
            isOptimal: true,
            findings: "Patient willing. NBUVB or PUVA could be adjunctive therapy.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 5,
        name: "Treatment Plan - Stepwise Ladder",
        narrative: "Implement treatment according to severity ladder.",
        availableActions: [
          {
            id: "t1",
            text: "Restart potent topical corticosteroid for limited areas",
            isOptimal: true,
            findings: "Betamethasone dipropionate 0.05% cream BID for accessible areas (arms, legs). Not for large areas.",
            scoreDelta: 8
          },
          {
            id: "t2",
            text: "Start systemic therapy: Methotrexate as first-line",
            isOptimal: true,
            findings: "Methotrexate 10-15 mg weekly (PO or SC). First-line systemic agent. Assess renal/liver function first.",
            scoreDelta: 15
          },
          {
            id: "t3",
            text: "Alternative: TNF inhibitor (etanercept or adalimumab)",
            isOptimal: true,
            findings: "If methotrexate contraindicated: etanercept 50 mg SC weekly. More expensive but faster acting.",
            scoreDelta: 12
          },
          {
            id: "t4",
            text: "Add NBUVB phototherapy 2-3 times weekly",
            isOptimal: true,
            findings: "Refer to phototherapy. NBUVB synergizes with systemic therapy.",
            scoreDelta: 10
          },
          {
            id: "t5",
            text: "Manage pruritus: antihistamine (cetirizine) and emollients",
            isOptimal: true,
            findings: "Cetirizine 10 mg daily for itch. Emollient cream TDS. Reduces scratching and Koebner effect.",
            scoreDelta: 8
          },
          {
            id: "t6",
            text: "Refer for stress management and psychological support",
            isOptimal: true,
            findings: "Work stress triggered flare. Recommend counseling or stress-reduction techniques.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 6,
        name: "Monitoring & Follow-up",
        narrative: "Monitor treatment response and adjust therapy.",
        availableActions: [
          {
            id: "fu1",
            text: "Check liver and renal function before methotrexate (baseline)",
            isOptimal: true,
            findings: "LFT and RFT normal. Safe to start methotrexate.",
            scoreDelta: 8
          },
          {
            id: "fu2",
            text: "Monitor PASI score at 4 and 12 weeks",
            isOptimal: true,
            findings: "At 4 weeks: PASI improved to 18 (20% reduction). At 12 weeks: PASI 8 (75% reduction - PASI75).",
            scoreDelta: 10
          },
          {
            id: "fu3",
            text: "Monthly monitoring with LFTs while on methotrexate",
            isOptimal: true,
            findings: "LFTs remain normal. Continue methotrexate 10 mg weekly.",
            scoreDelta: 8
          },
          {
            id: "fu4",
            text: "Check response at 12 weeks; escalate if PASI50 not achieved",
            isOptimal: true,
            findings: "PASI 75 achieved. Excellent response. Continue current therapy.",
            scoreDelta: 8
          },
          {
            id: "fu5",
            text: "Educate on long-term maintenance and flare triggers",
            isOptimal: true,
            findings: "Counsel: avoid stress, maintain skin care, recognize triggers, take meds regularly.",
            scoreDelta: 5
          },
          {
            id: "fu6",
            text: "Plan discontinuation or maintenance therapy in remission",
            isOptimal: true,
            findings: "After 12 months remission, discuss tapering vs. maintenance. Most need continued therapy.",
            scoreDelta: 5
          }
        ]
      }
    ],
    learningObjectives: [
      "Calculate PASI score to assess psoriasis severity",
      "Identify triggers for psoriasis flares (stress, infection, medication)",
      "Apply treatment ladder: topical → phototherapy → systemic",
      "Select appropriate systemic therapy (methotrexate vs. biologic)",
      "Monitor efficacy using PASI response (PASI50, PASI75)",
      "Manage quality of life impact and psychological factors"
    ],
    keyTeachingPoints: [
      "PASI >12 or >10% BSA = moderate-to-severe requiring systemic therapy",
      "PASI75 = 75% reduction in PASI score, excellent response",
      "Methotrexate: first-line systemic; TNF inhibitors faster but more expensive",
      "Phototherapy (NBUVB) synergizes with systemic therapy",
      "Stress is major trigger - psychological support important",
      "Koebner phenomenon: lesions appear at trauma sites - counsel to avoid scratching"
    ]
  },
  {
    title: "Schizophrenia First Episode - Antipsychotic Initiation",
    subjectCode: "PS",
    topicCode: "PS-MOD-PSYCH-SZ",
    difficulty: "MEDIUM" as const,
    patientProfile: {
      age: 21,
      gender: "male",
      chiefComplaint: "Bizarre behavior, talking to himself, withdrawn",
      history: "No prior psychiatric history. Acute onset 3 weeks ago. Family concerned, brought by parents."
    },
    stages: [
      {
        stage: 1,
        name: "Psychiatric History & Symptom Assessment",
        narrative: "21-year-old male with acute onset psychotic symptoms. Take detailed psychiatric history.",
        availableActions: [
          {
            id: "h1",
            text: "Assess positive symptoms (hallucinations, delusions)",
            isOptimal: true,
            findings: "Patient reports hearing voices commanding him to harm himself. Believes neighbors are spying on him.",
            scoreDelta: 12
          },
          {
            id: "h2",
            text: "Assess negative symptoms (withdrawal, flat affect)",
            isOptimal: true,
            findings: "Stopped attending college. Withdrawn from friends. Speaks in monotone with little emotional expression.",
            scoreDelta: 10
          },
          {
            id: "h3",
            text: "Assess cognitive symptoms (disorganization)",
            isOptimal: true,
            findings: "Speech tangential and disorganized. Difficulty concentrating. Jumping between topics.",
            scoreDelta: 8
          },
          {
            id: "h4",
            text: "Obtain timeline: when did symptoms start",
            isOptimal: true,
            findings: "Acute onset 3 weeks ago. Parents report he was fine before. No gradual decline.",
            scoreDelta: 8
          },
          {
            id: "h5",
            text: "Ask about substance use (cannabis, stimulants, hallucinogens)",
            isOptimal: true,
            findings: "Denies regular use. Tried cannabis once at college party 4 weeks ago.",
            scoreDelta: 10
          },
          {
            id: "h6",
            text: "Ask about family history of psychiatric illness",
            isOptimal: true,
            findings: "Paternal uncle hospitalized for 'mental illness' years ago. No clear diagnosis confirmed.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 2,
        name: "Mental Status Examination",
        narrative: "Perform detailed mental status exam to document severity.",
        availableActions: [
          {
            id: "pe1",
            text: "Assess appearance and behavior",
            isOptimal: true,
            findings: "Disheveled, poor hygiene. Paces restlessly. Responds to internal stimuli (gestures at air).",
            scoreDelta: 8
          },
          {
            id: "pe2",
            text: "Assess speech",
            isOptimal: true,
            findings: "Speech rapid, loud, tangential. Difficult to follow. Occasionally coherent but derails.",
            scoreDelta: 8
          },
          {
            id: "pe3",
            text: "Assess mood and affect",
            isOptimal: true,
            findings: "Mood: anxious and suspicious. Affect: restricted, inappropriate to content (laughs at nothing).",
            scoreDelta: 8
          },
          {
            id: "pe4",
            text: "Assess thought content and form",
            isOptimal: true,
            findings: "Thought form: disorganized, loose associations. Delusions of reference and persecution evident.",
            scoreDelta: 10
          },
          {
            id: "pe5",
            text: "Assess hallucinations",
            isOptimal: true,
            findings: "Auditory hallucinations: hears 2-3 voices, commenting on his actions. No visual hallucinations.",
            scoreDelta: 10
          },
          {
            id: "pe6",
            text: "Assess insight and judgment",
            isOptimal: true,
            findings: "Lacks insight into illness. Believes voices are real. Poor judgment about safety.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 3,
        name: "Investigations & Medical Workup",
        narrative: "Rule out organic causes and baseline investigations before antipsychotic.",
        availableActions: [
          {
            id: "inv1",
            text: "Urine drug screen",
            isOptimal: true,
            findings: "Negative for cannabis, amphetamines, cocaine, opioids, benzodiazepines.",
            scoreDelta: 12
          },
          {
            id: "inv2",
            text: "Thyroid function (TSH, T3, T4)",
            isOptimal: true,
            findings: "TSH 2.5 mIU/L, T4 normal. Rules out thyroid psychosis.",
            scoreDelta: 8
          },
          {
            id: "inv3",
            text: "Full blood count",
            isOptimal: true,
            findings: "WBC 7200, Hb 14.2, Platelets 230k. All normal. Baseline for agranulocytosis monitoring.",
            scoreDelta: 8
          },
          {
            id: "inv4",
            text: "Metabolic panel (glucose, lipid profile)",
            isOptimal: true,
            findings: "Fasting glucose 95, cholesterol 180, LDL 110, triglycerides 100. Normal baseline.",
            scoreDelta: 8
          },
          {
            id: "inv5",
            text: "Prolactin level (baseline before antipsychotic)",
            isOptimal: true,
            findings: "Prolactin 12 ng/mL (normal for male). Baseline for monitoring antipsychotic side effects.",
            scoreDelta: 8
          },
          {
            id: "inv6",
            text: "MRI brain (rule out structural/organic causes)",
            isOptimal: true,
            findings: "MRI brain: no lesions, no tumor, no evidence of encephalitis. Structurally normal.",
            scoreDelta: 10
          }
        ]
      },
      {
        stage: 4,
        name: "Diagnosis & Assessment",
        narrative: "Formulate psychiatric diagnosis.",
        availableActions: [
          {
            id: "d1",
            text: "Diagnose: Schizophrenia, first episode (DSM-5 criteria)",
            isOptimal: true,
            findings: "2+ psychotic symptoms >1 month. Functional decline. Criterion met for schizophrenia.",
            scoreDelta: 15
          },
          {
            id: "d2",
            text: "Rule out schizophreniform disorder (symptoms <6 months)",
            isOptimal: true,
            findings: "Symptoms only 3 weeks - could be schizophreniform. But needs >1 month. Likely schizophrenia.",
            scoreDelta: 8
          },
          {
            id: "d3",
            text: "Assess suicide risk (command hallucinations to harm self)",
            isOptimal: true,
            findings: "Patient reports command hallucinations to harm self. High risk for suicide. Requires inpatient admission.",
            scoreDelta: 12
          },
          {
            id: "d4",
            text: "Assess danger to others",
            isOptimal: true,
            findings: "No specific threats to harm others identified. But paranoid beliefs about neighbors present.",
            scoreDelta: 8
          },
          {
            id: "d5",
            text: "Document level of functioning (GAF/SOFAS)",
            isOptimal: true,
            findings: "SOFAS 35/100. Severe impairment. Unable to work/school, poor hygiene, needs supervision.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 5,
        name: "Antipsychotic Initiation",
        narrative: "Initiate first-generation or second-generation antipsychotic.",
        availableActions: [
          {
            id: "t1",
            text: "Admit to inpatient psychiatric unit for safety",
            isOptimal: true,
            findings: "Suicidal ideation with command hallucinations, poor insight, functional impairment. Requires hospitalization.",
            scoreDelta: 12
          },
          {
            id: "t2",
            text: "Start second-generation antipsychotic (e.g., risperidone or olanzapine)",
            isOptimal: true,
            findings: "Risperidone 2 mg daily started (preferred over first-generation due to lower EPS risk in first episode).",
            scoreDelta: 15
          },
          {
            id: "t3",
            text: "Educate patient and family about medication, side effects, adherence",
            isOptimal: true,
            findings: "Explained benefits, side effects (weight gain, sexual dysfunction, EPS), importance of adherence.",
            scoreDelta: 10
          },
          {
            id: "t4",
            text: "Monitor for extrapyramidal side effects (EPS)",
            isOptimal: true,
            findings: "Day 3: mild tremor noted. Give benztropine 1 mg daily for EPS prophylaxis.",
            scoreDelta: 10
          },
          {
            id: "t5",
            text: "Monitor metabolic side effects (weight, glucose, lipids)",
            isOptimal: true,
            findings: "Baseline weight 68 kg. Check weight weekly. Monitor for metabolic syndrome development.",
            scoreDelta: 8
          },
          {
            id: "t6",
            text: "Manage agitation/anxiety with benzodiazepine if needed",
            isOptimal: true,
            findings: "Patient anxious and agitated. Give lorazepam 2 mg TID for acute agitation. Taper as antipsychotic takes effect.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 6,
        name: "Follow-up & Long-term Management",
        narrative: "Monitor response and transition to community care.",
        availableActions: [
          {
            id: "fu1",
            text: "Reassess symptoms weekly during hospitalization",
            isOptimal: true,
            findings: "Week 1: hallucinations decreased, more coherent. Week 2: voices less frequent, less paranoid.",
            scoreDelta: 10
          },
          {
            id: "fu2",
            text: "Optimize risperidone dose based on response",
            isOptimal: true,
            findings: "By week 2, increase risperidone to 3 mg daily (80% of patients respond by 4-6 weeks at 4-8 mg).",
            scoreDelta: 8
          },
          {
            id: "fu3",
            text: "Assess for medication side effects and manage",
            isOptimal: true,
            findings: "Weight gain 2 kg at week 2. Continue diet/exercise counseling. Monitor glucose.",
            scoreDelta: 8
          },
          {
            id: "fu4",
            text: "Involve family in treatment planning and education",
            isOptimal: true,
            findings: "Family psychoeducation sessions on schizophrenia, medication adherence, relapse signs.",
            scoreDelta: 8
          },
          {
            id: "fu5",
            text: "Plan discharge with outpatient follow-up and psychosocial support",
            isOptimal: true,
            findings: "Discharge at week 3 after symptom improvement. Weekly psychiatry follow-up, case management, vocational rehab.",
            scoreDelta: 10
          },
          {
            id: "fu6",
            text: "Long-term: maintain antipsychotic, target remission, prevent relapse",
            isOptimal: true,
            findings: "Risperidone 4-6 mg daily maintenance. Regular monitoring. Goal: return to work/school in 6-12 months.",
            scoreDelta: 8
          }
        ]
      }
    ],
    learningObjectives: [
      "Recognize first-episode psychosis: positive, negative, cognitive symptoms",
      "Perform comprehensive psychiatric assessment and differential diagnosis",
      "Rule out organic causes (drugs, medical illness, brain pathology)",
      "Assess suicide and safety risks",
      "Select and initiate appropriate antipsychotic therapy",
      "Monitor for side effects and optimize medication",
      "Plan psychosocial interventions and long-term management"
    ],
    keyTeachingPoints: [
      "First-episode schizophrenia requires rapid intervention - early treatment improves outcomes",
      "Second-generation antipsychotics preferred in first episode (lower EPS risk than first-gen)",
      "Response to antipsychotic takes 4-6 weeks - need patience and optimization",
      "Suicide risk high in first-episode psychosis - assess carefully, hospitalize if needed",
      "Family psychoeducation and medication adherence crucial for preventing relapse",
      "Metabolic monitoring essential - weight gain and diabetes risk with antipsychotics"
    ]
  },
  {
    title: "Spinal Cord Injury - ASIA Classification & Steroids Controversy",
    subjectCode: "OR",
    topicCode: "OR-MOD-SPINE-SCI",
    difficulty: "HARD" as const,
    patientProfile: {
      age: 35,
      gender: "male",
      chiefComplaint: "Paralysis of lower limbs after motor vehicle accident",
      history: "MVC at 8 AM, brought to ED at 8:45 AM. Loss of consciousness brief. Now paralyzed below waist."
    },
    stages: [
      {
        stage: 1,
        name: "Rapid Assessment & History",
        narrative: "35-year-old male with acute SCI from motor vehicle accident, now ~3 hours post-injury. Assess mechanism and neurological status.",
        availableActions: [
          {
            id: "h1",
            text: "Determine exact time of injury (critical for steroids window)",
            isOptimal: true,
            findings: "Injury at 08:00, ED arrival 08:45, now 11:00. Window for high-dose methylprednisolone is <8 hours from injury.",
            scoreDelta: 12
          },
          {
            id: "h2",
            text: "Ask about mechanism of injury",
            isOptimal: true,
            findings: "Head-on collision, significant impact. Patient ejected from vehicle.",
            scoreDelta: 8
          },
          {
            id: "h3",
            text: "Ask about loss of consciousness and head injury",
            isOptimal: true,
            findings: "Brief LOC, ~5 minutes. Now alert. Possible head injury - needs CT.",
            scoreDelta: 8
          },
          {
            id: "h4",
            text: "Ask about initial sensation in lower limbs",
            isOptimal: true,
            findings: "Patient reports complete loss of sensation below waist immediately after injury.",
            scoreDelta: 8
          },
          {
            id: "h5",
            text: "Ask about pain at injury site",
            isOptimal: true,
            findings: "Severe pain in lower back/lumbar region. No arm pain or upper limb weakness.",
            scoreDelta: 5
          },
          {
            id: "h6",
            text: "Ask about any recovery or change since injury",
            isOptimal: true,
            findings: "No improvement in lower limb movement or sensation over past 3 hours.",
            scoreDelta: 5
          }
        ]
      },
      {
        stage: 2,
        name: "Neurological Examination - ASIA Assessment",
        narrative: "Perform detailed neuro exam to determine ASIA Impairment Scale (AIS) classification.",
        availableActions: [
          {
            id: "pe1",
            text: "Test upper limb motor and sensation",
            isOptimal: true,
            findings: "Arms: normal strength 5/5 bilaterally, normal sensation C5-T1. No upper motor weakness.",
            scoreDelta: 8
          },
          {
            id: "pe2",
            text: "Test lower limb motor strength (hip, knee, ankle)",
            isOptimal: true,
            findings: "Right lower limb: 0/5 throughout (no movement hip, knee, ankle). Left lower limb: 0/5.",
            scoreDelta: 10
          },
          {
            id: "pe3",
            text: "Test light touch sensation in lower limbs",
            isOptimal: true,
            findings: "Complete loss of light touch from L1 downward bilaterally.",
            scoreDelta: 10
          },
          {
            id: "pe4",
            text: "Test pinprick sensation in lower limbs",
            isOptimal: true,
            findings: "Complete loss of pinprick sensation from L1 downward.",
            scoreDelta: 10
          },
          {
            id: "pe5",
            text: "Test sacral sensation and rectal tone",
            isOptimal: true,
            findings: "No sensation at S1 (lateral thigh) or S4-5 (perianal area). Anal tone reduced.",
            scoreDelta: 8
          },
          {
            id: "pe6",
            text: "Assess deep tendon reflexes",
            isOptimal: true,
            findings: "Biceps/triceps normal. Patellar reflex absent bilaterally. Absent ankle jerks. Spinal shock present.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 3,
        name: "Investigations & Imaging",
        narrative: "Order imaging to determine level and extent of SCI.",
        availableActions: [
          {
            id: "inv1",
            text: "Urgent CT spine (cervical, thoracic, lumbar)",
            isOptimal: true,
            findings: "CT shows L1 vertebral body fracture with retropulsion into spinal canal. Cord compression evident.",
            scoreDelta: 15
          },
          {
            id: "inv2",
            text: "MRI spine (gold standard for cord injury assessment)",
            isOptimal: true,
            findings: "MRI shows complete cord transection at L1 level. Severe cord edema. Hemorrhage in center of cord.",
            scoreDelta: 15
          },
          {
            id: "inv3",
            text: "CT head to rule out traumatic brain injury",
            isOptimal: true,
            findings: "CT head: small subdural hematoma <5mm. No acute intracranial bleeding. Stable.",
            scoreDelta: 8
          },
          {
            id: "inv4",
            text: "X-ray chest to assess for other injuries",
            isOptimal: true,
            findings: "CXR: left rib fractures (ribs 5-7). No pneumothorax or hemothorax.",
            scoreDelta: 5
          },
          {
            id: "inv5",
            text: "Blood count and coagulation profile",
            isOptimal: true,
            findings: "Hb 11.8 (some blood loss from injuries). Coagulation normal. No anticoagulation needed for small subdural.",
            scoreDelta: 5
          },
          {
            id: "inv6",
            text: "Urinalysis and bladder scan",
            isOptimal: true,
            findings: "Bladder scan shows 450 mL retention. Needs catheterization. No gross hematuria.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 4,
        name: "ASIA Classification & Prognosis",
        narrative: "Classify injury severity using ASIA scale.",
        availableActions: [
          {
            id: "d1",
            text: "Classify as ASIA A (Complete): no motor/sensory below injury level",
            isOptimal: true,
            findings: "Complete loss of motor and sensory function below L1. No sacral sparing. ASIA A classification.",
            scoreDelta: 15
          },
          {
            id: "d2",
            text: "Determine neurological level: L1",
            isOptimal: true,
            findings: "Lowest spinal level with intact motor+sensory = L1. Injury level = L1.",
            scoreDelta: 10
          },
          {
            id: "d3",
            text: "Assess prognosis: complete cord transection very poor outcome",
            isOptimal: true,
            findings: "Complete transection with cord hemorrhage: prognosis very poor. <10% chance of meaningful recovery.",
            scoreDelta: 12
          },
          {
            id: "d4",
            text: "Identify comorbid injuries: head, rib fractures",
            isOptimal: true,
            findings: "Small SDH (stable, observe), rib fractures (pain control, pulmonary hygiene).",
            scoreDelta: 5
          },
          {
            id: "d5",
            text: "Assess neurogenic shock risk (SCI above T6)",
            isOptimal: true,
            findings: "L1 injury below T6, so no neurogenic shock expected. Spinal shock (reflex absence) present.",
            scoreDelta: 8
          }
        ]
      },
      {
        stage: 5,
        name: "High-Dose Methylprednisolone - Controversial",
        narrative: "Discuss steroid use - controversial, but within 8-hour window.",
        availableActions: [
          {
            id: "t1",
            text: "Discuss NASCIS 3 trial findings: modest benefit, significant complications",
            isOptimal: true,
            findings: "NASCIS 3 showed modest benefit (mean recovery ~9% better) but increased infection/mortality. Many centers avoid.",
            scoreDelta: 12
          },
          {
            id: "t2",
            text: "Decide whether to give high-dose methylprednisolone",
            isOptimal: true,
            findings: "Within 3-hour window. Discuss with patient/family. Modest benefit vs. infection risk. Proceed with steroids if agreeable.",
            scoreDelta: 12
          },
          {
            id: "t3",
            text: "If giving steroids: 30 mg/kg bolus over 15 min, then 5.4 mg/kg/hr x 23 hours",
            isOptimal: true,
            findings: "Patient 85 kg: 2550 mg bolus over 15 min, then 460 mg/hr for 23 hours.",
            scoreDelta: 12
          },
          {
            id: "t4",
            text: "Prepare for urgent surgical intervention if indicated",
            isOptimal: true,
            findings: "Cord compression at L1. Likely needs surgical decompression/fusion. Call neurosurgery.",
            scoreDelta: 15
          },
          {
            id: "t5",
            text: "Prevent complications: DVT prophylaxis, pressure ulcer care",
            isOptimal: true,
            findings: "Start enoxaparin 40 mg daily for DVT prophylaxis. Turn q2h, pressure relief.",
            scoreDelta: 10
          },
          {
            id: "t6",
            text: "Catheterize bladder and manage neurogenic bladder",
            isOptimal: true,
            findings: "Insert Foley catheter for retention. Long-term: consider intermittent cath vs. suprapubic catheter.",
            scoreDelta: 10
          }
        ]
      },
      {
        stage: 6,
        name: "Long-term Rehabilitation & Follow-up",
        narrative: "Plan surgical and rehabilitation management.",
        availableActions: [
          {
            id: "fu1",
            text: "Neurosurgery evaluation: laminectomy + fusion for L1 fracture/compression",
            isOptimal: true,
            findings: "Neurosurgeon recommends urgent L1 laminectomy and fusion. Proceed with surgery.",
            scoreDelta: 12
          },
          {
            id: "fu2",
            text: "Monitor for spinal cord swelling and reassess neuro status",
            isOptimal: true,
            findings: "At 24 hours: cord edema peak on imaging. Neuro status unchanged. Consistent with complete injury.",
            scoreDelta: 8
          },
          {
            id: "fu3",
            text: "Manage complications: infection prophylaxis, pressure ulcer prevention",
            isOptimal: true,
            findings: "Antibiotic coverage for surgery. Aggressive skin care. Prevent respiratory infections.",
            scoreDelta: 8
          },
          {
            id: "fu4",
            text: "Refer to spinal cord injury rehabilitation center",
            isOptimal: true,
            findings: "After surgery stabilization, transfer to SCI rehabilitation unit. Specialized care improves outcomes.",
            scoreDelta: 10
          },
          {
            id: "fu5",
            text: "Plan psychosocial support and counseling",
            isOptimal: true,
            findings: "Patient faces life-altering injury. Psychiatric, psychological support critical. Discuss long-term goals.",
            scoreDelta: 8
          },
          {
            id: "fu6",
            text: "Long-term: focus on mobility, independence, vocational rehab",
            isOptimal: true,
            findings: "Paralyzed. Focus: wheelchair independence, bladder/bowel management, return to work in adapted capacity.",
            scoreDelta: 8
          }
        ]
      }
    ],
    learningObjectives: [
      "Recognize acute spinal cord injury presentation",
      "Perform ASIA neuro exam to classify severity",
      "Distinguish complete (ASIA A) from incomplete injuries",
      "Understand controversy around high-dose methylprednisolone (NASCIS 3)",
      "Manage acute SCI: immobilization, bladder, DVT prophylaxis",
      "Plan surgical intervention and rehabilitation"
    ],
    keyTeachingPoints: [
      "ASIA A = Complete SCI: no motor/sensory below injury level. Very poor prognosis.",
      "Neurological level = lowest level with intact motor+sensory function",
      "High-dose methylprednisolone within 8 hours: NASCIS 3 showed modest benefit (9%) but increased complications",
      "Many centers avoid steroids - insufficient benefit vs. infection/side effect risk",
      "Urgent MRI to assess cord integrity, cord hemorrhage, compression",
      "Surgery may help if cord compression/retropulsion; less helpful for complete transection",
      "Spinal shock: reflexes absent initially, return over days-weeks"
    ]
  }
];
