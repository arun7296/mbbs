export const clinicalCasesIndiaTropical = [
  {
    title: "Severe Falciparum Malaria with Cerebral Involvement",
    presentingComplaint: "28-year-old male from Odisha with altered consciousness and high fever",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
    patientProfile: {
      age: 28,
      sex: "Male",
      occupation: "Farmer",
      history: "Returned from paddy fields 2 weeks ago with intermittent fever. No antimalarial prophylaxis.",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "28yo male farmer from rural Odisha presents with 5-day history of high-grade fever with chills, now with altered consciousness for the past 12 hours. Wife reports fever spike to 104.5°F, vomiting, and confusion. No recent travel outside Odisha. Sleeps in open hut without mosquito net.",
        availableActions: [
          {
            id: "h_1",
            text: "Ask about fever pattern (remittent vs intermittent)",
            isOptimal: true,
            findings: "Intermittent fever with 48-hour periodicity (classic tertian pattern)",
            scoreDelta: 2,
          },
          {
            id: "h_2",
            text: "Ask about headache, photophobia, neck stiffness",
            isOptimal: true,
            findings: "Severe headache present, mild photophobia, no true meningeal signs yet",
            scoreDelta: 2,
          },
          {
            id: "h_3",
            text: "Ask about exposure to mosquitoes and antimalarial use",
            isOptimal: true,
            findings: "No mosquito protection, never took antimalarials. Lives in high-risk zone",
            scoreDelta: 2,
          },
          {
            id: "h_4",
            text: "Ask about jaundice or dark urine",
            isOptimal: true,
            findings: "Wife noticed dark urine since yesterday, mild yellowish tinge noted",
            scoreDelta: 2,
          },
          {
            id: "h_5",
            text: "Ask about previous malaria episodes",
            isOptimal: false,
            findings: "Had fever 3 years ago, not confirmed as malaria",
            scoreDelta: 0,
          },
          {
            id: "h_6",
            text: "Ask about recent trauma or head injury",
            isOptimal: false,
            findings: "No trauma history. This is unlikely differential in context",
            scoreDelta: -1,
          },
          {
            id: "h_7",
            text: "Ask about respiratory symptoms",
            isOptimal: false,
            findings: "No cough or breathlessness reported (rules out respiratory infection primarily)",
            scoreDelta: 0,
          },
          {
            id: "h_8",
            text: "Ask about seizure history or loss of consciousness during fever",
            isOptimal: true,
            findings: "Wife reports possible seizure-like movements during fever episode",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Patient appears acutely ill, febrile (39.8°C), tachycardic (112/min), BP 98/62 mmHg. Mild pallor noted. Oriented to person only, not place or time. No papular rash. Mild hepatosplenomegaly.",
        availableActions: [
          {
            id: "e_1",
            text: "Assess Glasgow Coma Scale (GCS)",
            isOptimal: true,
            findings: "GCS = 12/15 (E3V4M5). Eyes open to pain, verbal response confused, purposeful movements",
            scoreDelta: 2,
          },
          {
            id: "e_2",
            text: "Check for meningeal signs (Kernig's, Brudzinski's)",
            isOptimal: true,
            findings: "No neck stiffness, Kernig's and Brudzinski's negative. Rules out meningitis",
            scoreDelta: 1,
          },
          {
            id: "e_3",
            text: "Check pupil size and reactivity",
            isOptimal: true,
            findings: "Pupils 4mm, equal, reacting to light briskly. No signs of herniation",
            scoreDelta: 1,
          },
          {
            id: "e_4",
            text: "Perform fundoscopy for retinal changes",
            isOptimal: true,
            findings: "Retinal whitening visible, papilledema absent. Malarial retinopathy present",
            scoreDelta: 2,
          },
          {
            id: "e_5",
            text: "Assess liver size and consistency",
            isOptimal: true,
            findings: "Liver 2cm below costal margin, soft, tender. Spleen palpable 1.5cm below costal margin",
            scoreDelta: 1,
          },
          {
            id: "e_6",
            text: "Check for jaundice severity",
            isOptimal: true,
            findings: "Visible in sclera and skin. Suggests significant hemolysis",
            scoreDelta: 2,
          },
          {
            id: "e_7",
            text: "Look for petechial rash or bleeding manifestations",
            isOptimal: false,
            findings: "No petechiae. Rules out meningococcemia",
            scoreDelta: 0,
          },
          {
            id: "e_8",
            text: "Assess respiratory rate and breath sounds",
            isOptimal: false,
            findings: "RR 18/min, clear bilateral breath sounds. No acute pulmonary edema",
            scoreDelta: 0,
          },
          {
            id: "e_9",
            text: "Check for edema or skin turgor",
            isOptimal: false,
            findings: "Mild dehydration signs. Not specific to malaria",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Urgent investigations ordered in district hospital setting. Quick point-of-care tests available alongside standard lab.",
        availableActions: [
          {
            id: "i_1",
            text: "Peripheral blood smear with Giemsa staining",
            isOptimal: true,
            findings:
              "Multiple ring forms, some with Maurer's dots visible. Parasitemia 8.5%. Confirms Plasmodium falciparum",
            scoreDelta: 3,
          },
          {
            id: "i_2",
            text: "Rapid Diagnostic Test (RDT) for malaria",
            isOptimal: true,
            findings: "RDT positive for Pf-HRP2. Quick confirmation within 15 minutes",
            scoreDelta: 2,
          },
          {
            id: "i_3",
            text: "Complete Blood Count",
            isOptimal: true,
            findings:
              "Hb 9.2 g/dL, WBC 6800/μL, platelets 45,000/μL. Severe thrombocytopenia, moderate anemia",
            scoreDelta: 2,
          },
          {
            id: "i_4",
            text: "Liver Function Tests",
            isOptimal: true,
            findings:
              "Total bilirubin 4.2 mg/dL (direct 2.8), AST 580 IU/L, ALT 320 IU/L. Severe hepatic dysfunction",
            scoreDelta: 2,
          },
          {
            id: "i_5",
            text: "Renal Function Tests and electrolytes",
            isOptimal: true,
            findings:
              "Creatinine 1.8 mg/dL, BUN 35 mg/dL, K+ 4.2 mEq/L, Na+ 128 mEq/L. Acute kidney injury Stage 2, hyponatremia",
            scoreDelta: 2,
          },
          {
            id: "i_6",
            text: "Blood glucose level",
            isOptimal: true,
            findings: "Fasting glucose 52 mg/dL. Severe hypoglycemia contributing to altered sensorium",
            scoreDelta: 2,
          },
          {
            id: "i_7",
            text: "Arterial Blood Gas analysis",
            isOptimal: true,
            findings: "pH 7.28, HCO3- 18 mEq/L, lactate 4.2 mmol/L. Metabolic acidosis with high anion gap",
            scoreDelta: 2,
          },
          {
            id: "i_8",
            text: "CSF analysis via lumbar puncture",
            isOptimal: false,
            findings:
              "Pressure normal, cells 2/mm3, glucose 58 mg/dL (blood 52), protein 28 mg/dL. Excludes meningitis, normal CSF in CM",
            scoreDelta: 0,
          },
          {
            id: "i_9",
            text: "Blood cultures for bacterial infection",
            isOptimal: false,
            findings: "Negative. Malaria is sole cause",
            scoreDelta: 0,
          },
          {
            id: "i_10",
            text: "CT head to rule out intracranial pathology",
            isOptimal: false,
            findings: "Normal CT. Cerebral malaria is clinical diagnosis, not primarily imaging",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Based on findings: intermittent fever with 48-hour periodicity, altered mental status (GCS 12), malarial retinopathy on fundoscopy, multiple ring forms with Maurer's dots on PBS, RDT positive for Pf-HRP2, parasitemia 8.5%, thrombocytopenia, hepatic dysfunction, AKI, metabolic acidosis.",
        availableActions: [
          {
            id: "d_1",
            text: "Severe Falciparum Malaria with Cerebral Malaria",
            isOptimal: true,
            findings:
              "Definitive diagnosis. Patient meets criteria: P. falciparum parasitemia + altered consciousness + no other cause",
            scoreDelta: 5,
          },
          {
            id: "d_2",
            text: "Severe Falciparum Malaria with Acute Kidney Injury",
            isOptimal: true,
            findings:
              "Correct but incomplete. Multiple severe manifestations present. CM is most immediately life-threatening",
            scoreDelta: 2,
          },
          {
            id: "d_3",
            text: "Acute Bacterial Meningitis",
            isOptimal: false,
            findings: "Ruled out by negative meningeal signs, normal CSF, negative cultures",
            scoreDelta: -3,
          },
          {
            id: "d_4",
            text: "Dengue Hemorrhagic Fever with Encephalopathy",
            isOptimal: false,
            findings: "RDT negative for dengue, ring forms on PBS rule this out",
            scoreDelta: -2,
          },
          {
            id: "d_5",
            text: "Hepatic Encephalopathy",
            isOptimal: false,
            findings: "Bilirubin elevated but not >5 typically in hepatic encephalopathy. Malarial jaundice is conjugated",
            scoreDelta: -2,
          },
          {
            id: "d_6",
            text: "Leptospirosis with CNS involvement",
            isOptimal: false,
            findings: "Wrong clinical picture. Ring forms on PBS exclude this diagnosis",
            scoreDelta: -3,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Patient has severe malaria with cerebral involvement and multiple organ dysfunction. Hospital has IV artesunate available per NVBDCP protocol. Which treatment approach?",
        availableActions: [
          {
            id: "t_1",
            text: "IV Artesunate 2.4 mg/kg at 0, 12, 24 hours then daily",
            isOptimal: true,
            findings:
              "WHO/NVBDCP first-line for severe malaria. 35% mortality reduction vs quinine. First dose prepared",
            scoreDelta: 3,
          },
          {
            id: "t_2",
            text: "Immediate glucose correction: 50mL of 50% dextrose IV",
            isOptimal: true,
            findings: "Hypoglycemia (52 mg/dL) is reversible contributor to altered consciousness",
            scoreDelta: 2,
          },
          {
            id: "t_3",
            text: "Blood transfusion for anemia (Hb 9.2)",
            isOptimal: false,
            findings:
              "Mild-moderate anemia. Transfuse only if Hb <7 or symptomatic. RBC transfusion can worsen viscosity",
            scoreDelta: -1,
          },
          {
            id: "t_4",
            text: "Quinine IV (if artesunate unavailable) - 20 mg/kg loading dose",
            isOptimal: false,
            findings:
              "Second-line option. Artesunate superior. If no artesunate, give quinine. But artesunate available here",
            scoreDelta: 0,
          },
          {
            id: "t_5",
            text: "Fluid resuscitation: 1L normal saline rapidly",
            isOptimal: false,
            findings:
              "Careful fluid management needed. Patient at risk of cerebral edema and pulmonary edema. Target UOP 0.5-1 mL/kg/hr",
            scoreDelta: -1,
          },
          {
            id: "t_6",
            text: "Immediate cooling measures to bring down fever",
            isOptimal: false,
            findings:
              "Fever itself not harmful in malaria. Focus on antimalarial. Cooling may increase peripheral vasoconstriction",
            scoreDelta: -1,
          },
          {
            id: "t_7",
            text: "Initiate ICU monitoring with continuous pulse oximetry and BP monitoring",
            isOptimal: true,
            findings: "Essential for cerebral malaria. Risk of respiratory depression, seizures, acute pulmonary edema",
            scoreDelta: 2,
          },
          {
            id: "t_8",
            text: "Maintain seizure precautions and have anticonvulsants ready",
            isOptimal: true,
            findings: "Risk of seizures in CM. Keep levetiracetam or phenytoin at bedside",
            scoreDelta: 1,
          },
          {
            id: "t_9",
            text: "Start chloroquine 600mg base IV",
            isOptimal: false,
            findings:
              "Not for falciparum in India (resistance). Artesunate is correct choice",
            scoreDelta: -3,
          },
          {
            id: "t_10",
            text: "Broad-spectrum antibiotics (ceftriaxone + vancomycin)",
            isOptimal: false,
            findings:
              "Not primary treatment. May give empirically if meningitis not ruled out, but malaria is proven diagnosis",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "After 24 hours of IV artesunate: patient is now alert (GCS 15), fever subsided, parasitemia dropped to 2%. Now in recovery phase. What is the next step?",
        availableActions: [
          {
            id: "f_1",
            text: "Switch to oral artemether-lumefantrine when oral feeds tolerated",
            isOptimal: true,
            findings:
              "NVBDCP guideline: give artesunate minimum 3 days, then artemisinin-based combination therapy (ACT)",
            scoreDelta: 2,
          },
          {
            id: "f_2",
            text: "Check repeat blood smear for parasite clearance",
            isOptimal: true,
            findings: "Parasitemia now <1%. Confirm parasite clearance by day 7",
            scoreDelta: 2,
          },
          {
            id: "f_3",
            text: "Repeat LFTs and renal functions to assess recovery",
            isOptimal: true,
            findings:
              "Bilirubin down to 2.1, creatinine 1.3, slowly improving. Monitor for post-malarial acute kidney injury",
            scoreDelta: 1,
          },
          {
            id: "f_4",
            text: "Monitor for post-malarial complications like anemia, thrombocytosis",
            isOptimal: true,
            findings: "Hb dropped slightly (bone marrow recovery phase), platelets starting to rise",
            scoreDelta: 1,
          },
          {
            id: "f_5",
            text: "Assess for neurological deficits or persistent confusion",
            isOptimal: true,
            findings: "Patient fully alert, no focal deficits. Most cerebral malaria survivors recover completely",
            scoreDelta: 1,
          },
          {
            id: "f_6",
            text: "Discharge immediately to prevent hospital-acquired infections",
            isOptimal: false,
            findings:
              "Premature. Patient needs minimum 7-10 days inpatient care to complete artesunate, monitor complications",
            scoreDelta: -2,
          },
          {
            id: "f_7",
            text: "Start long-term antimalarial prophylaxis",
            isOptimal: false,
            findings:
              "Not indicated post-treatment. Prophylaxis is for travelers going to endemic area, not residents",
            scoreDelta: -1,
          },
          {
            id: "f_8",
            text: "Educate on malaria prevention: bed nets, insecticide-treated nets, indoor residual spraying",
            isOptimal: true,
            findings:
              "Critical. Prevention counseling for future. NVBDCP recommends universal bed net distribution",
            scoreDelta: 2,
          },
        ],
      },
    ],
  },
  {
    title: "Dengue Hemorrhagic Fever with Dengue Shock Syndrome",
    presentingComplaint: "22-year-old female from Delhi with platelet crisis and shock",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 22,
      sex: "Female",
      occupation: "IT Professional",
      history: "High-rise apartment in Delhi. Fever started 5 days ago. Used paracetamol for pain relief.",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "22yo female from South Delhi presents on day 5 of fever. Complained of severe headache, retro-orbital pain, and myalgias initially. Now reports sudden improvement in fever 12 hours ago but feeling faint and weak. Noticed bleeding from gums while brushing today. Stopped eating since yesterday. No comorbidities.",
        availableActions: [
          {
            id: "h_1",
            text: "Ask about typical dengue prodrome (fever, headache, myalgias, arthalgias)",
            isOptimal: true,
            findings: "Confirms classic dengue fever symptoms. Fever pattern matches day 3-5 critical phase",
            scoreDelta: 2,
          },
          {
            id: "h_2",
            text: "Ask about warning signs: persistent vomiting, abdominal pain, bleeding",
            isOptimal: true,
            findings:
              "Gum bleeding present, persistent nausea, right-sided abdominal pain reported. Hemorrhagic phase manifestations",
            scoreDelta: 3,
          },
          {
            id: "h_3",
            text: "Ask about fever lysis and clinical deterioration",
            isOptimal: true,
            findings:
              "Critical phase: fever reduced but signs of shock developing. Biphasic fever curve is classic",
            scoreDelta: 2,
          },
          {
            id: "h_4",
            text: "Ask about previous dengue infection",
            isOptimal: true,
            findings:
              "Patient recalls dengue-like illness 2 years ago. Secondary infection increases DH/DSS risk 10-fold",
            scoreDelta: 2,
          },
          {
            id: "h_5",
            text: "Ask about rash or bleeding elsewhere",
            isOptimal: true,
            findings: "Faint maculopapular rash appeared, petechiae on lower extremities",
            scoreDelta: 2,
          },
          {
            id: "h_6",
            text: "Ask about NSAIDs or anticoagulant use",
            isOptimal: true,
            findings: "Used ibuprofen on day 2 and 3 (contraindicated). This may have worsened bleeding tendency",
            scoreDelta: 2,
          },
          {
            id: "h_7",
            text: "Ask about tick bites or recent travel outside Delhi",
            isOptimal: false,
            findings: "No travel. Urban acquisition likely from Aedes mosquitoes in apartment complex",
            scoreDelta: 0,
          },
          {
            id: "h_8",
            text: "Ask about previous antiphospholipid syndrome or thrombotic history",
            isOptimal: false,
            findings: "No history. Not relevant to dengue hemorrhagic manifestations",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Patient appears anxious, pale, diaphoretic. Vitals: BP 88/56 mmHg (systolic <20 mmHg from baseline), HR 118/min, RR 24/min, Temp 37.8°C, O2 sat 98% RA. Capillary refill >2 seconds. Positive tourniquet test.",
        availableActions: [
          {
            id: "e_1",
            text: "Assess grade of shock (early vs established)",
            isOptimal: true,
            findings:
              "Narrow pulse pressure (32 mmHg). Tachycardia, tachypnea, cool extremities. Grade II-III shock",
            scoreDelta: 2,
          },
          {
            id: "e_2",
            text: "Perform tourniquet test properly (inflate cuff to MAP for 5 minutes)",
            isOptimal: true,
            findings:
              ">20 petechiae in one square inch. Positive tourniquet test confirms platelet dysfunction",
            scoreDelta: 1,
          },
          {
            id: "e_3",
            text: "Check for hepatomegaly",
            isOptimal: true,
            findings: "Liver edge 2cm below costal margin, tender. Consistent with dengue hepatitis",
            scoreDelta: 1,
          },
          {
            id: "e_4",
            text: "Examine for signs of bleeding: petechiae, ecchymosis, mucosal bleeding",
            isOptimal: true,
            findings:
              "Petechiae on legs, bleeding from gums, no frank GI bleeding yet, no hematuria reported",
            scoreDelta: 2,
          },
          {
            id: "e_5",
            text: "Assess urine output status",
            isOptimal: true,
            findings:
              "Last void 6 hours ago, small volume. Urine looks normal (no blood). Oliguria concerning in shock",
            scoreDelta: 1,
          },
          {
            id: "e_6",
            text: "Check for ascites by percussion and fluid wave",
            isOptimal: true,
            findings:
              "Mild shifting dullness. Plasma leak into third space is occurring. Critical phase sign",
            scoreDelta: 1,
          },
          {
            id: "e_7",
            text: "Look for scleral icterus or jaundice",
            isOptimal: false,
            findings: "No obvious jaundice. LFTs mildly elevated but not cholestatic pattern",
            scoreDelta: 0,
          },
          {
            id: "e_8",
            text: "Check for lymphadenopathy",
            isOptimal: false,
            findings: "No significant lymphadenopathy. Splenomegaly absent",
            scoreDelta: 0,
          },
          {
            id: "e_9",
            text: "Measure JVP and assess for pulmonary edema",
            isOptimal: false,
            findings: "JVP normal, no crackles. No fluid in lungs yet",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Urgent investigations at tertiary care hospital. Point-of-care testing available. Patient in emergency department.",
        availableActions: [
          {
            id: "i_1",
            text: "Dengue NS1 Antigen and IgM/IgG serology",
            isOptimal: true,
            findings: "NS1 positive (day 5 still positive), IgM positive confirms dengue. IgG positive suggests secondary infection",
            scoreDelta: 3,
          },
          {
            id: "i_2",
            text: "Complete Blood Count with platelet count",
            isOptimal: true,
            findings: "Hb 11.2 g/dL, WBC 3200/μL, platelet count 15,000/μL. Severe thrombocytopenia",
            scoreDelta: 3,
          },
          {
            id: "i_3",
            text: "Hematocrit estimation now and repeat in 24 hours",
            isOptimal: true,
            findings: "Current Hct 42% (baseline ~40%). >20% rise in Hct indicates plasma leak ongoing",
            scoreDelta: 2,
          },
          {
            id: "i_4",
            text: "Coagulation profile (PT, aPTT, fibrinogen)",
            isOptimal: true,
            findings: "PT 14 sec, aPTT 36 sec (mildly prolonged), fibrinogen 200 mg/dL. DIC not yet overt",
            scoreDelta: 2,
          },
          {
            id: "i_5",
            text: "Liver function tests",
            isOptimal: true,
            findings:
              "AST 180 IU/L, ALT 92 IU/L, bilirubin 1.1 mg/dL. Hepatitis present but not severe",
            scoreDelta: 1,
          },
          {
            id: "i_6",
            text: "Renal function and electrolytes",
            isOptimal: true,
            findings: "Urea 28 mg/dL, creatinine 1.0 (normal), K 4.1, Na 132 mEq/L. Mild hyponatremia from SIADH",
            scoreDelta: 1,
          },
          {
            id: "i_7",
            text: "Lactate level and blood gas analysis",
            isOptimal: true,
            findings: "Lactate 3.8 mmol/L (elevated), pH 7.32, HCO3 18 mEq/L. Metabolic acidosis from tissue hypoperfusion",
            scoreDelta: 2,
          },
          {
            id: "i_8",
            text: "Chest X-ray to assess for pleural effusion",
            isOptimal: true,
            findings: "Small bilateral pleural effusions visible. Indicates plasma leak phase ongoing",
            scoreDelta: 1,
          },
          {
            id: "i_9",
            text: "Abdominal ultrasound to assess for free fluid",
            isOptimal: true,
            findings: "Free fluid in pelvis and around liver. Ascites confirmed. Gallbladder wall edema noted",
            scoreDelta: 1,
          },
          {
            id: "i_10",
            text: "Blood culture and rapid bacterial detection",
            isOptimal: false,
            findings: "Negative. Dengue is viral, no bacterial superinfection",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Clinical picture: day 5 of fever with biphasic pattern, critical phase signs, shock (BP 88/56, narrow pulse pressure, HR 118), gum bleeding, petechiae, positive tourniquet test, severe thrombocytopenia (15,000), hemoconcentration, plasma leak on imaging, NS1 positive, IgM positive, secondary dengue infection.",
        availableActions: [
          {
            id: "d_1",
            text: "Dengue Hemorrhagic Fever - Dengue Shock Syndrome (DHF Grade IV / DSS)",
            isOptimal: true,
            findings:
              "Meets criteria: virologically confirmed dengue + hemorrhagic manifestations + plasma leak + shock. Worst grade of DHF",
            scoreDelta: 5,
          },
          {
            id: "d_2",
            text: "Dengue Hemorrhagic Fever Grade III without shock",
            isOptimal: false,
            findings:
              "Patient already in shock. This is DSS (Grade IV). More severe than Grade III",
            scoreDelta: 1,
          },
          {
            id: "d_3",
            text: "Dengue Fever with critical warning signs (not yet DHF)",
            isOptimal: false,
            findings: "Patient has crossed threshold to DHF. Bleeding manifestations and shock present",
            scoreDelta: -2,
          },
          {
            id: "d_4",
            text: "Septic shock from bacterial infection",
            isOptimal: false,
            findings: "Blood culture negative. Dengue is proven. Viral illness",
            scoreDelta: -3,
          },
          {
            id: "d_5",
            text: "Thrombotic thrombocytopenic purpura (TTP)",
            isOptimal: false,
            findings: "Platelets low but ADAMTS13 intact. Microangiopathic hemolytic anemia not prominent. Dengue fits better",
            scoreDelta: -2,
          },
          {
            id: "d_6",
            text: "Secondary infection - Leptospirosis comorbidity",
            isOptimal: false,
            findings: "Clinical picture purely consistent with dengue. No renal failure or conjunctival suffusion",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Patient in Dengue Shock Syndrome Grade IV. Ward management available per WHO/NVBDCP guidelines. IV lines secured, emergency response ready. What is the fluid management strategy?",
        availableActions: [
          {
            id: "t_1",
            text: "Fluid resuscitation: 20mL/kg Ringer's Lactate rapid IV bolus over 15-30 minutes",
            isOptimal: true,
            findings:
              "WHO guideline for shock management. Target restoration of perfusion, BP >90 systolic, urine output 0.5-1 mL/kg/hr",
            scoreDelta: 3,
          },
          {
            id: "t_2",
            text: "Monitor vital signs and urine output every 15 minutes during resuscitation",
            isOptimal: true,
            findings: "After bolus, BP rises to 96/64 mmHg, HR drops to 105. Urine output begins",
            scoreDelta: 2,
          },
          {
            id: "t_3",
            text: "If shock persists after 1-2 boluses, escalate to colloid (Albumin 5%, 10-20 mL/kg)",
            isOptimal: true,
            findings: "May need this if crystalloid-refractory shock. Consider after reassessment",
            scoreDelta: 1,
          },
          {
            id: "t_4",
            text: "Maintain meticulous fluid balance on intake-output chart",
            isOptimal: true,
            findings: "Critical to avoid fluid overload → pulmonary edema. Target 3mL/kg/day maintenance",
            scoreDelta: 1,
          },
          {
            id: "t_5",
            text: "Avoid NSAIDs completely. Use paracetamol max 15 mg/kg/dose for pain",
            isOptimal: true,
            findings: "NSAIDs worsen bleeding. Paracetamol safe. Patient education for future",
            scoreDelta: 1,
          },
          {
            id: "t_6",
            text: "Give platelet transfusion now as prophylactic measure",
            isOptimal: false,
            findings:
              "NVBDCP guideline: transfuse only if platelet <10,000 with bleeding OR <5,000 even without bleeding. This patient 15,000 - transfuse only if active bleeding worsens",
            scoreDelta: -2,
          },
          {
            id: "t_7",
            text: "Start broad-spectrum antibiotics empirically",
            isOptimal: false,
            findings:
              "Not indicated. Dengue is viral. No signs of bacterial super-infection. Avoid unnecessary antibiotics",
            scoreDelta: -1,
          },
          {
            id: "t_8",
            text: "Place urinary catheter to monitor urine output accurately",
            isOptimal: true,
            findings:
              "Foley catheter essential in shock for accurate UOP monitoring. Helps guide fluid therapy",
            scoreDelta: 1,
          },
          {
            id: "t_9",
            text: "Prepare for ICU transfer if shock worsens or complications develop",
            isOptimal: true,
            findings: "DSS can deteriorate rapidly. ICU bed reserved. Ready for vasopressors if needed",
            scoreDelta: 1,
          },
          {
            id: "t_10",
            text: "Give hypertonic saline for fluid restriction",
            isOptimal: false,
            findings:
              "No role in dengue shock management. Stick to Ringer's lactate or albumin",
            scoreDelta: -1,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "After 36 hours of fluid resuscitation: patient now hemodynamically stable, BP 108/70, HR 88, urine output adequate. Platelet count rising (78,000). Fever has completely subsided. Alert and eating oral fluids.",
        availableActions: [
          {
            id: "f_1",
            text: "Gradually reduce IV fluid rate once shock resolved and urine output maintained",
            isOptimal: true,
            findings:
              "Phase 2: recovery phase. Reduce to maintenance fluids to prevent pulmonary edema as capillary permeability normalizes",
            scoreDelta: 2,
          },
          {
            id: "f_2",
            text: "Switch to oral fluids: ORS, coconut water, soups (clear, not fatty)",
            isOptimal: true,
            findings: "Oral route preferred in recovery phase. Discontinue IV once oral intake adequate",
            scoreDelta: 1,
          },
          {
            id: "f_3",
            text: "Repeat CBC on day 7 to confirm platelet recovery",
            isOptimal: true,
            findings: "Platelet count now 180,000. Normal value achieved. Hb stable. Safe for discharge",
            scoreDelta: 1,
          },
          {
            id: "f_4",
            text: "Monitor for rare complications: secondary bacterial infection, myocarditis, encephalitis",
            isOptimal: true,
            findings:
              "Patient remains afebrile, no new symptoms. Complications rare but need vigilance",
            scoreDelta: 1,
          },
          {
            id: "f_5",
            text: "Counsel on activity restriction for 2 weeks post-discharge",
            isOptimal: true,
            findings:
              "Prevent sudden cardiac complications. Rest, avoid sports. Gradual return to activity",
            scoreDelta: 1,
          },
          {
            id: "f_6",
            text: "Educate on dengue prevention: bed nets, repellents, eliminating Aedes breeding sites",
            isOptimal: true,
            findings:
              "Secondary infection led to severe disease. Prevention critical for future",
            scoreDelta: 1,
          },
          {
            id: "f_7",
            text: "Give live dengue vaccine immediately before discharge",
            isOptimal: false,
            findings: "Cannot give. Vaccine contraindicated in acute dengue. Vaccinate 6 months post-recovery if desired",
            scoreDelta: -2,
          },
          {
            id: "f_8",
            text: "Discharge once fever-free ×24hrs with stable vitals and platelet count >50,000",
            isOptimal: true,
            findings: "Criteria met. Patient safe for home care. Follow-up clinic visit in 1 week",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Typhoid Fever with Intestinal Perforation",
    presentingComplaint: "18-year-old male with 3-week fever and acute abdomen",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
    patientProfile: {
      age: 18,
      sex: "Male",
      occupation: "Student",
      history: "Low socioeconomic background, drinks water from hand pump. Unvaccinated against typhoid.",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "18yo male student presents with 3-week history of fever. Initial complaint was sustained fever with rose spots, headache, and vague abdominal discomfort. On day 18-20 fever seemed to improve but now sudden acute sharp abdominal pain started 6 hours ago. Describes pain as severe, worse on movement. Last bowel movement was diarrhea 2 days ago.",
        availableActions: [
          {
            id: "h_1",
            text: "Ask about fever pattern: sustained vs remittent",
            isOptimal: true,
            findings:
              "Fever remained persistent at 39-40°C for 3 weeks. Classic step-ladder pattern then plateau (sustained fever in typhoid)",
            scoreDelta: 2,
          },
          {
            id: "h_2",
            text: "Ask about GI symptoms: abdominal pain, bowel changes, vomiting",
            isOptimal: true,
            findings:
              "Vague early abdominal pain, diarrhea initially (rose spots appearance), now acute severe periumbilical pain. Classic perforation sign",
            scoreDelta: 3,
          },
          {
            id: "h_3",
            text: "Ask about headache and rose spots",
            isOptimal: true,
            findings:
              "Severe frontal headache for 2 weeks, wife noticed pink maculopapular rash on chest week 2",
            scoreDelta: 2,
          },
          {
            id: "h_4",
            text: "Ask about food and water intake, source of infection",
            isOptimal: true,
            findings:
              "Drinks water from hand pump near his village. No prior typhoid vaccination. Likely source identified",
            scoreDelta: 1,
          },
          {
            id: "h_5",
            text: "Ask about prior antibiotic treatment",
            isOptimal: true,
            findings:
              "Self-treated with amoxicillin for 5 days (incomplete course, day 10-15). May have led to reduced bacterial load but didn't clear infection, causing complications",
            scoreDelta: 2,
          },
          {
            id: "h_6",
            text: "Ask about confusion or altered behavior",
            isOptimal: false,
            findings: "Initially had typhoid delirium day 10, now alert. Perforation pain now dominates picture",
            scoreDelta: 0,
          },
          {
            id: "h_7",
            text: "Ask about vomiting character and frequency",
            isOptimal: true,
            findings: "Minimal vomiting initially, now not vomiting (suggests paralytic ileus from perforation rather than mechanical obstruction)",
            scoreDelta: 1,
          },
          {
            id: "h_8",
            text: "Ask about past similar episodes or chronic diarrhea",
            isOptimal: false,
            findings: "No prior GI history. First episode of fever",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Patient appears acutely ill, in distress with pain. Vitals: Temp 39.2°C, BP 102/64 mmHg (lower than morning), HR 112/min, RR 26/min. Abdomen is rigid with guarding.",
        availableActions: [
          {
            id: "e_1",
            text: "Perform thorough abdominal examination: inspection, palpation, percussion, auscultation",
            isOptimal: true,
            findings:
              "Rigid 'board-like' abdomen, severe tenderness periumbilically, rebound tenderness present, absent bowel sounds. Classic peritonitis",
            scoreDelta: 3,
          },
          {
            id: "e_2",
            text: "Check for Rovsing's sign",
            isOptimal: false,
            findings: "Not particularly positive. Pain generalized, not localized to RLQ",
            scoreDelta: 0,
          },
          {
            id: "e_3",
            text: "Check for McBurney's point tenderness",
            isOptimal: false,
            findings: "Pain not specifically at McBurney's point. Periumbilical location suggests typhoid (ileal perforation)",
            scoreDelta: 0,
          },
          {
            id: "e_4",
            text: "Assess general appearance: whether septic, degree of distress",
            isOptimal: true,
            findings: "Septic appearance, tachycardic, tachypneic, appears unwell. Septic shock may develop",
            scoreDelta: 2,
          },
          {
            id: "e_5",
            text: "Check for rose spots on chest",
            isOptimal: true,
            findings: "Faint pink maculopapular rash visible on trunk. Supports typhoid diagnosis",
            scoreDelta: 1,
          },
          {
            id: "e_6",
            text: "Assess hydration status and mucous membranes",
            isOptimal: true,
            findings: "Dry mucous membranes, coated tongue, skin turgor decreased. Dehydration prominent",
            scoreDelta: 1,
          },
          {
            id: "e_7",
            text: "Check for hepatosplenomegaly",
            isOptimal: true,
            findings: "Liver palpable 1cm below costal margin, spleen not palpable (abdominal pain prevents deep palpation)",
            scoreDelta: 1,
          },
          {
            id: "e_8",
            text: "Perform DRE (digital rectal examination)",
            isOptimal: false,
            findings:
              "Not essential now. Abdominal rigidity indicates peritonitis regardless. DRE can worsen pain",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "District hospital setting. Investigations performed urgently to confirm perforation and establish diagnosis of typhoid.",
        availableActions: [
          {
            id: "i_1",
            text: "Chest X-ray erect (looking for free gas under diaphragm)",
            isOptimal: true,
            findings:
              "Free gas visible under right hemidiaphragm. Pathognomonic sign of perforation. Surgical emergency confirmed",
            scoreDelta: 3,
          },
          {
            id: "i_2",
            text: "Abdominal X-ray erect and supine",
            isOptimal: true,
            findings:
              "Multiple air-fluid levels indicating ileus, pneumoperitoneum, dilated bowel loops. Consistent with perforation",
            scoreDelta: 2,
          },
          {
            id: "i_3",
            text: "Blood culture from earlier (before presentation)",
            isOptimal: true,
            findings:
              "If available from 3 weeks prior: Salmonella typhi isolated. Documents bacteremia phase",
            scoreDelta: 1,
          },
          {
            id: "i_4",
            text: "Widal test (Slide agglutination or tube method)",
            isOptimal: true,
            findings:
              "O antigen titer 1:320 (high), H antigen 1:640 (suggests acute infection). Supports typhoid diagnosis",
            scoreDelta: 2,
          },
          {
            id: "i_5",
            text: "Blood culture from now (despite late presentation)",
            isOptimal: true,
            findings:
              "May be negative now (third week), but culture at disease onset is gold standard. Helps confirmation",
            scoreDelta: 1,
          },
          {
            id: "i_6",
            text: "Complete Blood Count",
            isOptimal: true,
            findings:
              "WBC 14,200/μL (elevated), Hb 10.8 g/dL (mild anemia from chronic illness), platelets 180,000",
            scoreDelta: 1,
          },
          {
            id: "i_7",
            text: "Renal function and electrolytes",
            isOptimal: true,
            findings: "Urea 32 mg/dL, creatinine 1.2 mg/dL, K 3.4 mEq/L (hypokalemia), Na 128 mEq/L (hyponatremia from SIADH)",
            scoreDelta: 1,
          },
          {
            id: "i_8",
            text: "Liver function tests",
            isOptimal: true,
            findings: "AST 95 IU/L, ALT 78 IU/L, bilirubin 1.8 mg/dL. Hepatitis present in typhoid",
            scoreDelta: 1,
          },
          {
            id: "i_9",
            text: "Stool culture (if diarrhea ongoing)",
            isOptimal: false,
            findings:
              "Stool culture in third week may yield organism, but has low sensitivity. Blood culture more sensitive",
            scoreDelta: 0,
          },
          {
            id: "i_10",
            text: "CT abdomen/pelvis with contrast",
            isOptimal: false,
            findings:
              "Not necessary once free gas seen on CXR. Time should not be wasted on CT. Need immediate surgery",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Clinical picture: 3-week fever with rose spots, sustained fever pattern, Widal positive, now acute abdomen with rigid abdomen, absent bowel sounds, free gas under diaphragm on CXR, pneumoperitoneum on AXR.",
        availableActions: [
          {
            id: "d_1",
            text: "Typhoid Fever (Salmonella typhi) with Intestinal Perforation",
            isOptimal: true,
            findings:
              "Definitive diagnosis. Typhoid confirmed by Widal + clinical picture + rose spots. Perforation proven by free gas on imaging",
            scoreDelta: 5,
          },
          {
            id: "d_2",
            text: "Acute Appendicitis with Perforation",
            isOptimal: false,
            findings:
              "No RLQ tenderness. Widal positive supports typhoid, not appendicitis. Rose spots present point to typhoid",
            scoreDelta: -2,
          },
          {
            id: "d_3",
            text: "Peptic Ulcer Disease with Perforation",
            isOptimal: false,
            findings:
              "Free gas present but no prior history of PUD. Rose spots and Widal not seen in PUD",
            scoreDelta: -2,
          },
          {
            id: "d_4",
            text: "Typhoid Fever without perforation (uncomplicated)",
            isOptimal: false,
            findings: "Free gas and acute peritoneal signs indicate perforation. This is complicated typhoid",
            scoreDelta: -3,
          },
          {
            id: "d_5",
            text: "Bacterial Peritonitis secondary to perforation (etiology non-specific)",
            isOptimal: true,
            findings:
              "Correct but incomplete diagnosis. Need to identify primary cause (typhoid) for appropriate treatment",
            scoreDelta: 2,
          },
          {
            id: "d_6",
            text: "Mesenteric Ischemia with intestinal necrosis",
            isOptimal: false,
            findings:
              "No sudden onset. 3-week fever precedes. Not ischemic picture. Typhoid makes sense temporally",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Diagnosis: Typhoid with intestinal perforation. Surgical emergency. Patient needs immediate laparotomy but also pre-operative resuscitation per standard protocols.",
        availableActions: [
          {
            id: "t_1",
            text: "Immediate NPO status, IV access (2 large-bore lines), start aggressive fluid resuscitation",
            isOptimal: true,
            findings:
              "Ringer's lactate or normal saline bolus 20mL/kg, then maintenance. Correct dehydration and hypokalemia",
            scoreDelta: 2,
          },
          {
            id: "t_2",
            text: "Start broad-spectrum antibiotics covering gram-negative and gram-positive organisms",
            isOptimal: true,
            findings:
              "Ceftriaxone 1g IV 12-hourly + gentamicin 5 mg/kg IV daily + metronidazole 400mg IV 8-hourly. Covers gram-negative + anaerobes",
            scoreDelta: 2,
          },
          {
            id: "t_3",
            text: "Correct electrolyte abnormalities: potassium and sodium",
            isOptimal: true,
            findings: "Add KCl to IV fluids once urine output confirmed. Correct hyponatremia cautiously",
            scoreDelta: 1,
          },
          {
            id: "t_4",
            text: "Insert nasogastric tube for decompression",
            isOptimal: true,
            findings: "Relieves abdominal distension, prevents aspiration, manages paralytic ileus",
            scoreDelta: 1,
          },
          {
            id: "t_5",
            text: "Insert urinary catheter to monitor UOP and assess renal function",
            isOptimal: true,
            findings: "Target UOP 0.5-1 mL/kg/hr. Guides ongoing fluid resuscitation",
            scoreDelta: 1,
          },
          {
            id: "t_6",
            text: "Consult surgery immediately for emergency laparotomy",
            isOptimal: true,
            findings:
              "Perforation confirmed. Time is critical. Surgical repair (primary vs diversion) decided in OR",
            scoreDelta: 3,
          },
          {
            id: "t_7",
            text: "Start fluoroquinolone (ciprofloxacin) as typhoid is susceptible",
            isOptimal: false,
            findings:
              "Fluoroquinolones good for uncomplicated typhoid, but this patient needs broad-spectrum coverage for peritonitis. Cephalosporin + gentamicin preferred",
            scoreDelta: 0,
          },
          {
            id: "t_8",
            text: "Give high-dose IV corticosteroids to reduce inflammation",
            isOptimal: false,
            findings:
              "Not indicated. Can worsen infection outcomes. Focus on antibiotics and surgery",
            scoreDelta: -1,
          },
          {
            id: "t_9",
            text: "Arrange ICU bed post-operatively for monitoring",
            isOptimal: true,
            findings: "Post-operative septic state expected. ICU care essential for recovery",
            scoreDelta: 1,
          },
          {
            id: "t_10",
            text: "Inform patient/family about surgery and potential fecal diversion",
            isOptimal: true,
            findings: "Informed consent critical. Ileostomy/colostomy possible depending on perforation location and viability",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Post-operative day 1: Emergency laparotomy performed. Perforation found in terminal ileum (classic typhoid perforation site). Primary repair done. Patient now in ICU on vasopressors. On day 5 post-op, fever settled, vitals stable.",
        availableActions: [
          {
            id: "f_1",
            text: "Continue broad-spectrum antibiotics for minimum 7-14 days post-perforation",
            isOptimal: true,
            findings:
              "Extended antibiotic course post-surgical perforation. De-escalate based on culture/sensitivities when available",
            scoreDelta: 2,
          },
          {
            id: "f_2",
            text: "Monitor wound for infection, drain output characteristics",
            isOptimal: true,
            findings: "Abdominal drain output decreasing. Serous, no purulence. Good prognostic sign",
            scoreDelta: 1,
          },
          {
            id: "f_3",
            text: "Gradually introduce oral feeding once bowel sounds return and flatus passed",
            isOptimal: true,
            findings: "Day 4: bowel sounds audible. Start clear fluids, advance as tolerated",
            scoreDelta: 1,
          },
          {
            id: "f_4",
            text: "Assess for post-operative complications: anastomotic leak, sepsis, prolonged ileus",
            isOptimal: true,
            findings: "Patient improving. No signs of leak. Abdominal exam benign",
            scoreDelta: 1,
          },
          {
            id: "f_5",
            text: "Plan transition to oral antibiotics once fully recovered (cefixime or ciprofloxacin for susceptible organisms)",
            isOptimal: true,
            findings:
              "Switch to oral cefixime 400mg 12-hourly once tolerating oral intake. Total 4 weeks antibiotics from presentation",
            scoreDelta: 1,
          },
          {
            id: "f_6",
            text: "Educate on water safety, sanitation, and vaccination",
            isOptimal: true,
            findings:
              "Patient to be vaccinated against typhoid. Counseling on water sources critical for prevention",
            scoreDelta: 1,
          },
          {
            id: "f_7",
            text: "Follow-up with surgery and infectious disease for optimization",
            isOptimal: true,
            findings: "Outpatient follow-up arranged. Wound check at 2 weeks, ID follow-up for antibiotic duration",
            scoreDelta: 1,
          },
          {
            id: "f_8",
            text: "Watch for chronic carrier state (5% of typhoid patients become carriers)",
            isOptimal: true,
            findings:
              "Counsel on importance of follow-up stool culture 1 month post-treatment to detect carrier status",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Kala-azar (Visceral Leishmaniasis) - Advanced Case",
    presentingComplaint: "12-year-old boy from Bihar with fever, massive splenomegaly, pancytopenia",
    caseType: "Ward",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 12,
      sex: "Male",
      occupation: "Student",
      history: "From Muzaffarpur district, Bihar (endemic area). Onset fever 4 months ago. Living in thatched roof house.",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "12yo boy from Muzaffarpur, Bihar presents with 4-month history of low-grade intermittent fever. Progressive abdominal enlargement noticed by mother for 3 months. Recently developed bleeding from gums, bruising easily. No recent travel outside Bihar. Lives in mud house with thatch roof.",
        availableActions: [
          {
            id: "h_1",
            text: "Ask about fever pattern: intermittent low-grade fever over months",
            isOptimal: true,
            findings:
              "Fever often evening rise, sometimes remittent, present for 4 months continuously. Classic pattern for VL",
            scoreDelta: 2,
          },
          {
            id: "h_2",
            text: "Ask about abdominal swelling and early satiety",
            isOptimal: true,
            findings:
              "Progressive abdominal enlargement, feels full quickly after meals. Mother concerned about 'liver disease'",
            scoreDelta: 2,
          },
          {
            id: "h_3",
            text: "Ask about weight loss and general decline",
            isOptimal: true,
            findings: "Weight loss noted, used to play now confined to bed mostly. Lethargy prominent",
            scoreDelta: 2,
          },
          {
            id: "h_4",
            text: "Ask about bleeding manifestations: gum bleeding, bruising, hematuria",
            isOptimal: true,
            findings: "Gum bleeding while brushing, bruises on shins appearing spontaneously. No visible hematuria yet",
            scoreDelta: 2,
          },
          {
            id: "h_5",
            text: "Ask about living conditions and sandfly exposure",
            isOptimal: true,
            findings:
              "Lives in mud house with poor walls, thatch roof. Sleeps in open area without nets. Ideal for Phlebotomus sandfly",
            scoreDelta: 2,
          },
          {
            id: "h_6",
            text: "Ask about recent travel to other endemic areas",
            isOptimal: false,
            findings: "No travel. Local transmission in Bihar is high (endemic)",
            scoreDelta: 0,
          },
          {
            id: "h_7",
            text: "Ask about respiratory symptoms or cough",
            isOptimal: false,
            findings: "No cough or dyspnea. Respiratory system not primarily involved",
            scoreDelta: 0,
          },
          {
            id: "h_8",
            text: "Ask about skin changes or rash",
            isOptimal: false,
            findings: "No rash. Skin examination normal except for pallor",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Child appears chronically ill, pale, and cachectic. Vitals: Temp 37.8°C, HR 96/min, RR 18/min, BP 95/58 mmHg. Weight 18 kg (low for age). Looks malnourished.",
        availableActions: [
          {
            id: "e_1",
            text: "Assess general appearance and degree of wasting",
            isOptimal: true,
            findings:
              "Wasted appearance, visible ribs and spine. Pallor of mucous membranes. Appears much sicker than vital signs suggest",
            scoreDelta: 2,
          },
          {
            id: "e_2",
            text: "Palpate spleen size and consistency",
            isOptimal: true,
            findings:
              "Massive splenomegaly: spleen extends 8cm below left costal margin, firm consistency, non-tender. Pathognomonic for VL",
            scoreDelta: 3,
          },
          {
            id: "e_3",
            text: "Palpate liver size",
            isOptimal: true,
            findings: "Hepatomegaly: liver 3cm below right costal margin, smooth, firm. Moderate hepatomegaly",
            scoreDelta: 2,
          },
          {
            id: "e_4",
            text: "Check for petechiae, ecchymoses, or active bleeding",
            isOptimal: true,
            findings:
              "Petechiae on lower extremities, ecchymoses on forearms. Bleeding gums evident. Indicates bone marrow involvement",
            scoreDelta: 2,
          },
          {
            id: "e_5",
            text: "Check for lymphadenopathy",
            isOptimal: true,
            findings: "Generalized lymphadenopathy: cervical, axillary, inguinal nodes enlarged (0.5-1cm)",
            scoreDelta: 1,
          },
          {
            id: "e_6",
            text: "Assess for edema (generalized, facial, pedal)",
            isOptimal: false,
            findings: "No peripheral edema. Not a feature of uncomplicated VL",
            scoreDelta: 0,
          },
          {
            id: "e_7",
            text: "Listen for hepatic rub or bruits",
            isOptimal: false,
            findings: "No rubs or bruits. Liver appears to be infiltrated by parasites, not inflamed",
            scoreDelta: 0,
          },
          {
            id: "e_8",
            text: "Check for abdominal masses beyond organomegaly",
            isOptimal: false,
            findings: "No other masses. Splenomegaly and hepatomegaly are findings",
            scoreDelta: 0,
          },
          {
            id: "e_9",
            text: "Assess mental status and neurological function",
            isOptimal: false,
            findings: "Alert and oriented. No neurological signs. Brain not involved",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "District hospital with basic lab facilities. Available tests: rK39 rapid test, CBC, rK39 ELISA, bone marrow examination, splenic aspiration.",
        availableActions: [
          {
            id: "i_1",
            text: "rK39 Rapid Immunochromatographic Test (point-of-care)",
            isOptimal: true,
            findings:
              "rK39 test POSITIVE (>95% sensitivity in India). Quick confirmation. Can be done at bedside",
            scoreDelta: 3,
          },
          {
            id: "i_2",
            text: "rK39 ELISA or IgG serology confirmation",
            isOptimal: true,
            findings:
              "rK39 ELISA: positive. IgG against Leishmania >1:1600. Confirms exposure and active infection",
            scoreDelta: 2,
          },
          {
            id: "i_3",
            text: "Complete Blood Count",
            isOptimal: true,
            findings:
              "Hb 8.2 g/dL (moderate anemia), WBC 2100/μL (severe leukopenia), platelets 35,000/μL (severe thrombocytopenia). Pancytopenia present",
            scoreDelta: 2,
          },
          {
            id: "i_4",
            text: "Bone marrow aspiration for LD bodies",
            isOptimal: true,
            findings:
              "Amastigotes (LD bodies) visible in macrophages. Diagnostic for VL. 85% sensitivity with proper technique",
            scoreDelta: 3,
          },
          {
            id: "i_5",
            text: "Splenic aspiration if bone marrow negative",
            isOptimal: true,
            findings:
              "Not needed here as bone marrow positive. But splenic aspiration: 99% sensitivity if performed (higher than BM)",
            scoreDelta: 1,
          },
          {
            id: "i_6",
            text: "Liver function tests",
            isOptimal: true,
            findings: "AST 110 IU/L, ALT 75 IU/L, albumin 2.8 g/dL (low). Hepatic involvement, protein malnutrition",
            scoreDelta: 1,
          },
          {
            id: "i_7",
            text: "Renal function and electrolytes",
            isOptimal: true,
            findings: "Creatinine 0.8 mg/dL, BUN 16 mg/dL. Normal renal function currently",
            scoreDelta: 1,
          },
          {
            id: "i_8",
            text: "Blood culture for bacterial super-infection",
            isOptimal: false,
            findings: "Negative. No current bacteremia, though risk exists due to immunosuppression",
            scoreDelta: 0,
          },
          {
            id: "i_9",
            text: "Thick and thin blood smear for parasites",
            isOptimal: false,
            findings:
              "Negative for parasites in blood (amastigotes are intracellular). Not useful for diagnosis",
            scoreDelta: 0,
          },
          {
            id: "i_10",
            text: "Immunological tests: CD4 count",
            isOptimal: false,
            findings:
              "Not routinely done. This is non-HIV case. CD4 would be expected low due to VL immunosuppression",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Clinical: 4-month fever, massive splenomegaly (8cm), hepatomegaly, pancytopenia (Hb 8.2, WBC 2100, platelets 35,000), from endemic Bihar area. Labs: rK39 positive, bone marrow LD bodies visible.",
        availableActions: [
          {
            id: "d_1",
            text: "Kala-azar (Visceral Leishmaniasis) - VL due to Leishmania donovani",
            isOptimal: true,
            findings:
              "Definitive diagnosis. All criteria met: endemic area (Bihar), massive splenomegaly, pancytopenia, positive rK39 and BM amastigotes",
            scoreDelta: 5,
          },
          {
            id: "d_2",
            text: "Chronic Leukemia (Chronic Myeloid Leukemia)",
            isOptimal: false,
            findings:
              "WBC low (2100), not elevated. CML would show WBC >100,000. rK39 would be negative",
            scoreDelta: -3,
          },
          {
            id: "d_3",
            text: "Chronic Liver Disease with cirrhosis",
            isOptimal: false,
            findings:
              "Liver function not severely abnormal. No ascites. Splenomegaly is massive (not typical of cirrhosis which shows mild splenomegaly)",
            scoreDelta: -2,
          },
          {
            id: "d_4",
            text: "Tuberculosis with dissemination",
            isOptimal: false,
            findings:
              "No cough, no pulmonary symptoms. Splenomegaly massive (miliary TB shows mild splenomegaly). rK39 negative in TB",
            scoreDelta: -2,
          },
          {
            id: "d_5",
            text: "Cutaneous Leishmaniasis",
            isOptimal: false,
            findings:
              "Wrong form. Cutaneous presents with skin ulcers. This is visceral form (internal organs involved)",
            scoreDelta: -3,
          },
          {
            id: "d_6",
            text: "Malaria with chronic manifestations",
            isOptimal: false,
            findings: "Duration too long for malaria (4 months of continuous fever). RDT/blood smear negative",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Patient with confirmed VL. First-line treatment options in India: Amphotericin B deoxycholate, Miltefosine, Liposomal Amphotericin B. No HIV co-infection.",
        availableActions: [
          {
            id: "t_1",
            text: "Amphotericin B deoxycholate: 0.75-1 mg/kg/day IV infusion for 15 days (total dose 15 mg/kg)",
            isOptimal: true,
            findings:
              "NVBDCP/WHO first-line for severe VL. Effective but nephrotoxic. Requires monitoring. Patient may experience rigors, fever",
            scoreDelta: 3,
          },
          {
            id: "t_2",
            text: "Miltefosine (Pentamidine-like): 100mg PO daily for 28 days (for <25kg) or 150mg for ≥25kg",
            isOptimal: true,
            findings:
              "Alternative first-line, oral, less toxic. Well-tolerated. Newer option. Can be used in resource-poor settings",
            scoreDelta: 2,
          },
          {
            id: "t_3",
            text: "Liposomal Amphotericin B: 3 mg/kg IV daily × 5 days",
            isOptimal: false,
            findings:
              "Effective and less nephrotoxic but extremely expensive. Not available in government facilities typically. Reserved for immunocompromised or treatment failures",
            scoreDelta: 0,
          },
          {
            id: "t_4",
            text: "Sodium stibogluconate (Pentostam): 20 mg/kg/day IV for 30 days (older drug)",
            isOptimal: false,
            findings:
              "Outdated due to drug resistance (>60% in Bihar). Not recommended now",
            scoreDelta: -2,
          },
          {
            id: "t_5",
            text: "Give supportive care: blood transfusion for anemia",
            isOptimal: true,
            findings:
              "Transfuse if Hb <7 or symptomatic. Patient Hb 8.2 not urgent but close monitoring needed",
            scoreDelta: 1,
          },
          {
            id: "t_6",
            text: "Platelet transfusion as prophylaxis before treatment",
            isOptimal: false,
            findings:
              "Not indicated. Platelet 35,000 not critical. Transfuse only if <10,000 or active bleeding",
            scoreDelta: -1,
          },
          {
            id: "t_7",
            text: "Nutritional support: high-calorie diet with protein supplements",
            isOptimal: true,
            findings: "Child malnourished (albumin 2.8). Nutritional rehabilitation essential during treatment",
            scoreDelta: 2,
          },
          {
            id: "t_8",
            text: "Monitor for drug toxicity: renal function if amphotericin, teratogenicity counseling if miltefosine",
            isOptimal: true,
            findings:
              "Daily U/E during amphotericin B. If miltefosine: counsel female patients on contraception (teratogenic)",
            scoreDelta: 1,
          },
          {
            id: "t_9",
            text: "Initiate ICU monitoring",
            isOptimal: false,
            findings: "Not critical now. Ward-level care sufficient. ICU if complications develop",
            scoreDelta: 0,
          },
          {
            id: "t_10",
            text: "Give concomitant anti-TB treatment",
            isOptimal: false,
            findings: "No TB suspected. TB-VL co-infection less common but possible. Not indicated here",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "After 15 days of amphotericin B: fever settled, appetite improving, splenomegaly reduced to 4cm, Hb risen to 9.2 g/dL. Creatinine slightly elevated to 1.1 (drug toxicity).",
        availableActions: [
          {
            id: "f_1",
            text: "Monitor clinical response: resolution of fever, reduction in organomegaly, improvement in cytopenias",
            isOptimal: true,
            findings:
              "Good response to treatment. Most patients show clinical improvement within 2-4 weeks",
            scoreDelta: 2,
          },
          {
            id: "f_2",
            text: "Perform follow-up rK39 test at 3-6 months",
            isOptimal: true,
            findings:
              "rK39 may remain positive for months even after cure (persists longer than parasite clearance)",
            scoreDelta: 1,
          },
          {
            id: "f_3",
            text: "Repeat CBC to assess recovery of bone marrow",
            isOptimal: true,
            findings: "WBC now 4800/μL, platelets 120,000. Recovery progressing well",
            scoreDelta: 1,
          },
          {
            id: "f_4",
            text: "Monitor renal function and adjust medications if creatinine rises further",
            isOptimal: true,
            findings: "Creatinine 1.1 acceptable. Continue monitoring daily. Continue amphotericin B carefully",
            scoreDelta: 1,
          },
          {
            id: "f_5",
            text: "Watch for Post-Kala-azar Dermal Leishmaniasis (PKDL) after treatment",
            isOptimal: true,
            findings:
              "Rare in India (<5%) but important. Hypopigmented/nodular rash on face/trunk post-treatment",
            scoreDelta: 1,
          },
          {
            id: "f_6",
            text: "Ensure completion of full treatment course (15 days amphotericin B or 28 days miltefosine)",
            isOptimal: true,
            findings: "Crucial to complete full course to prevent relapse. Default rates high in endemic areas",
            scoreDelta: 1,
          },
          {
            id: "f_7",
            text: "Educate family on prevention: bed nets, indoor residual spraying, environmental sanitation",
            isOptimal: true,
            findings:
              "Prevention crucial in endemic area. Thatch roof and mud house favor sandfly breeding. Need house improvement",
            scoreDelta: 1,
          },
          {
            id: "f_8",
            text: "Arrange long-term follow-up at 6 months for relapse assessment",
            isOptimal: true,
            findings: "Relapse rare (<5%) but can occur within first year. Follow-up clinic visit essential",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Leptospirosis (Weil's Disease) with Multi-organ Failure",
    presentingComplaint: "35-year-old paddy field worker from Kerala with jaundice, renal failure, hemorrhage",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "NEET_PG", "AIIMS"],
    patientProfile: {
      age: 35,
      sex: "Male",
      occupation: "Paddy field worker",
      history: "Wades through flooded rice fields daily. Lives in agricultural area near waterlogged fields.",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "35yo paddy field worker from Kottayam, Kerala presents with illness spanning 10 days. Started with sudden fever, headache, severe myalgias (especially calves), conjunctival redness on day 2. From day 5, developed jaundice, dark urine, and reduced urine output. Now on day 10 with hemoptysis and hematuria.",
        availableActions: [
          {
            id: "h_1",
            text: "Ask about fever pattern and severity of myalgias",
            isOptimal: true,
            findings:
              "High-grade fever (40-40.5°C), severe calf pain (leptospirosis classically affects muscles), body aches",
            scoreDelta: 2,
          },
          {
            id: "h_2",
            text: "Ask about biphasic fever pattern (septicemic then immune phase)",
            isOptimal: true,
            findings:
              "Fever 2-7 days, seemed to improve day 7-8, now fever back. Biphasic pattern classic for leptospirosis",
            scoreDelta: 2,
          },
          {
            id: "h_3",
            text: "Ask about jaundice onset and severity",
            isOptimal: true,
            findings: "Jaundice sudden on day 5, dark urine from that time. Suggests liver involvement",
            scoreDelta: 2,
          },
          {
            id: "h_4",
            text: "Ask about renal symptoms: oliguria, edema, changes in urine color",
            isOptimal: true,
            findings:
              "Urine output significantly reduced (last measured 300mL in 24 hours), urine dark/cola-colored. Acute kidney injury",
            scoreDelta: 2,
          },
          {
            id: "h_5",
            text: "Ask about bleeding manifestations: hemoptysis, hematuria, GI bleeding",
            isOptimal: true,
            findings: "Coughed up blood-stained sputum today, urine shows blood (hematuria), no GI bleed reported",
            scoreDelta: 3,
          },
          {
            id: "h_6",
            text: "Ask about occupational exposure to rat urine or floodwaters",
            isOptimal: true,
            findings:
              "Works in paddy fields, wades barefoot through water. High-risk occupation. Leptospires in floodwaters from infected animal urine",
            scoreDelta: 3,
          },
          {
            id: "h_7",
            text: "Ask about conjunctival redness (specific finding)",
            isOptimal: true,
            findings:
              "Noticed red eyes on day 2 by family members. Wife thought he had conjunctivitis initially",
            scoreDelta: 2,
          },
          {
            id: "h_8",
            text: "Ask about prior leptospirosis or similar illness",
            isOptimal: false,
            findings: "No prior history. First such illness",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Patient appears critically ill, icteric, diaphoretic. Vitals: Temp 39.1°C, BP 94/58 mmHg, HR 118/min, RR 28/min, O2 sat 92% on RA. Conjunctival redness without exudate.",
        availableActions: [
          {
            id: "e_1",
            text: "Assess jaundice severity and degree",
            isOptimal: true,
            findings:
              "Deep jaundice visible in sclera and skin. Suggests severe hyperbilirubinemia",
            scoreDelta: 2,
          },
          {
            id: "e_2",
            text: "Check for conjunctival redness (bilateral without exudate)",
            isOptimal: true,
            findings:
              "Bilateral conjunctival redness present, NO exudate. Pathognomonic finding in leptospirosis (conjunctivitis without exudate)",
            scoreDelta: 2,
          },
          {
            id: "e_3",
            text: "Examine for bleeding manifestations: petechiae, ecchymoses, mucosal bleeding",
            isOptimal: true,
            findings: "Hemoptysis visible, petechiae on lower extremities, oozing from gingival margins",
            scoreDelta: 2,
          },
          {
            id: "e_4",
            text: "Assess liver size and tenderness",
            isOptimal: true,
            findings: "Hepatomegaly 2cm below costal margin, markedly tender to palpation",
            scoreDelta: 1,
          },
          {
            id: "e_5",
            text: "Check kidney punch tenderness (CVA tenderness)",
            isOptimal: true,
            findings: "Bilateral flank tenderness with punch. Indicates renal involvement",
            scoreDelta: 1,
          },
          {
            id: "e_6",
            text: "Assess muscle tenderness (calf tenderness specific to leptospirosis)",
            isOptimal: true,
            findings:
              "Severe tenderness in calf muscles, unable to bear weight. Specific finding in leptospirosis",
            scoreDelta: 2,
          },
          {
            id: "e_7",
            text: "Check for signs of pulmonary involvement: crackles, consolidation",
            isOptimal: true,
            findings:
              "Bilateral crackles at bases. Pulmonary hemorrhage suspected (leptospirosis can cause ARDS)",
            scoreDelta: 2,
          },
          {
            id: "e_8",
            text: "Look for rash",
            isOptimal: false,
            findings: "No characteristic rash. Leptospirosis rarely has rash (unlike some other fever)",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Medical college hospital with ICU and advanced lab. Investigations for diagnosis and organ function assessment.",
        availableActions: [
          {
            id: "i_1",
            text: "Microscopic Agglutination Test (MAT) - serology standard",
            isOptimal: true,
            findings:
              "MAT titer 1:1600 (or ≥4-fold rise between paired sera). Gold standard. Confirms leptospirosis",
            scoreDelta: 3,
          },
          {
            id: "i_2",
            text: "IgM ELISA for leptospira (rapid, more readily available)",
            isOptimal: true,
            findings: "IgM positive. Rapid point-of-care confirmation within hours",
            scoreDelta: 2,
          },
          {
            id: "i_3",
            text: "Leptospira PCR from blood (if available)",
            isOptimal: true,
            findings:
              "Leptospira DNA detected in blood. PCR highly specific, best done first week of illness",
            scoreDelta: 2,
          },
          {
            id: "i_4",
            text: "Complete Blood Count",
            isOptimal: true,
            findings:
              "WBC 16,800/μL (elevated), Hb 10.5 g/dL (anemia from bleeding), platelets 42,000/μL (thrombocytopenia)",
            scoreDelta: 2,
          },
          {
            id: "i_5",
            text: "Coagulation Profile (PT, aPTT, fibrinogen, D-dimer)",
            isOptimal: true,
            findings:
              "PT prolonged, aPTT prolonged, fibrinogen low (280 mg/dL), D-dimer elevated. DIC suspected",
            scoreDelta: 2,
          },
          {
            id: "i_6",
            text: "Liver Function Tests",
            isOptimal: true,
            findings:
              "Total bilirubin 8.5 mg/dL (direct 6.2), AST 320 IU/L, ALT 280 IU/L. Hepatic dysfunction severe",
            scoreDelta: 2,
          },
          {
            id: "i_7",
            text: "Renal Function Tests",
            isOptimal: true,
            findings:
              "Creatinine 3.2 mg/dL, BUN 58 mg/dL, K 5.8 mEq/L. Acute kidney injury Stage 3 (KDIGO), hyperkalemia",
            scoreDelta: 2,
          },
          {
            id: "i_8",
            text: "Urine routine",
            isOptimal: true,
            findings:
              "RBCs numerous, casts present, protein 2+. Acute tubular necrosis picture",
            scoreDelta: 1,
          },
          {
            id: "i_9",
            text: "Blood glucose and lactate",
            isOptimal: true,
            findings: "Glucose 185 mg/dL (stress hyperglycemia), lactate 5.2 mmol/L (elevated from tissue hypoxia)",
            scoreDelta: 1,
          },
          {
            id: "i_10",
            text: "Chest X-ray",
            isOptimal: true,
            findings:
              "Bilateral alveolar infiltrates (pulmonary hemorrhage). Leptospirosis hemorrhagic pulmonary syndrome",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Clinical: paddy field worker from Kerala, biphasic fever, myalgias (especially calves), conjunctival redness without exudate, jaundice, dark urine, oliguria, hemoptysis, hematuria, hepatomegaly with tenderness, kidney punch tenderness. Labs: MAT 1:1600, IgM ELISA positive, leptospira PCR positive, thrombocytopenia, DIC, elevated LFTs, AKI Stage 3, bilateral pulmonary infiltrates.",
        availableActions: [
          {
            id: "d_1",
            text: "Leptospirosis (Weil's Disease) with Multi-organ Failure - Hemorrhagic Pulmonary Syndrome",
            isOptimal: true,
            findings:
              "Definitive diagnosis. All classic features of Weil's disease: biphasic fever, myalgia, conjunctivitis without exudate, jaundice, renal failure, hemorrhage, occupational exposure. Serologically confirmed.",
            scoreDelta: 5,
          },
          {
            id: "d_2",
            text: "Leptospirosis - Aseptic Meningitis form",
            isOptimal: false,
            findings:
              "Wrong form. Patient has hepatorenal syndrome, not meningitis. This is Weil's disease",
            scoreDelta: -2,
          },
          {
            id: "d_3",
            text: "Dengue Hemorrhagic Fever with shock",
            isOptimal: false,
            findings:
              "Conjunctival redness with exudate expected in dengue, not without exudate. Duration 10 days suggests leptospirosis. Calf myalgia specific to leptospirosis",
            scoreDelta: -2,
          },
          {
            id: "d_4",
            text: "Hepatitis E with fulminant liver failure",
            isOptimal: false,
            findings:
              "No focal hepatic encephalopathy yet. Renal failure equally severe (leptospirosis). Conjunctival redness not in hepatitis",
            scoreDelta: -2,
          },
          {
            id: "d_5",
            text: "Pulmonary Tuberculosis with dissemination",
            isOptimal: false,
            findings:
              "Acute presentation over 10 days. TB is chronic. Hemoptysis can occur but serologies point to leptospirosis",
            scoreDelta: -2,
          },
          {
            id: "d_6",
            text: "Sepsis from unidentified source",
            isOptimal: false,
            findings:
              "Blood cultures negative. Clinical presentation too specific for leptospirosis rather than generic sepsis",
            scoreDelta: -1,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Diagnosis: Leptospirosis with multi-organ failure (hepatorenal syndrome, DIC, pulmonary hemorrhage). ICU admission. What antibiotics and management?",
        availableActions: [
          {
            id: "t_1",
            text: "IV Penicillin G: 1.5-2 million units IV 6-hourly (high-dose for severe leptospirosis)",
            isOptimal: true,
            findings:
              "First-line for severe leptospirosis (Weil's disease). Most effective if given early. Continues to be effective",
            scoreDelta: 3,
          },
          {
            id: "t_2",
            text: "Alternative: IV Doxycycline: 100mg IV/PO twice daily if penicillin unavailable",
            isOptimal: true,
            findings:
              "Alternative agent, also effective. Used if penicillin allergy. Good CNS penetration",
            scoreDelta: 1,
          },
          {
            id: "t_3",
            text: "Aggressive fluid resuscitation for shock, aiming for urine output 0.5-1 mL/kg/hr",
            isOptimal: true,
            findings:
              "BP 94/58 indicates shock. Ringer's lactate carefully given (risk of hyperkalemia), target MAP >65 mmHg",
            scoreDelta: 2,
          },
          {
            id: "t_4",
            text: "Prepare for dialysis (hemodialysis for AKI Stage 3)",
            isOptimal: true,
            findings:
              "Creatinine 3.2, K 5.8. Likely need RRT. Contact nephrology. Dialysis improves survival in leptospirosis AKI",
            scoreDelta: 2,
          },
          {
            id: "t_5",
            text: "Fresh Frozen Plasma (FFP) or Platelets for active bleeding",
            isOptimal: true,
            findings:
              "DIC with coagulopathy and active hemoptysis. Give FFP 10-15 mL/kg for replacement. Platelets if <20,000",
            scoreDelta: 2,
          },
          {
            id: "t_6",
            text: "Mechanical ventilation if respiratory failure develops",
            isOptimal: true,
            findings:
              "Bilateral infiltrates, hemoptysis, O2 sat 92%. May need intubation if worsens. ARDS protocol",
            scoreDelta: 1,
          },
          {
            id: "t_7",
            text: "Avoid NSAIDs and nephrotoxic drugs",
            isOptimal: true,
            findings: "Worsen renal failure. Avoid aminoglycosides despite gram-negative coverage needed",
            scoreDelta: 1,
          },
          {
            id: "t_8",
            text: "Correct electrolytes carefully: manage hyperkalemia with calcium gluconate, insulin-dextrose",
            isOptimal: true,
            findings: "K 5.8 is dangerous. Calcium gluconate 10mL stat, insulin 10 units + 50mL dextrose",
            scoreDelta: 1,
          },
          {
            id: "t_9",
            text: "Start vasopressor support if shock persists after fluids",
            isOptimal: true,
            findings: "Noradrenaline infusion if MAP remains <65 after fluid resuscitation",
            scoreDelta: 1,
          },
          {
            id: "t_10",
            text: "Supportive measures: ICU monitoring, maintain strict fluid balance, monitor for complications",
            isOptimal: true,
            findings: "Intensive monitoring essential. Nursing care crucial for multi-organ failure",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "After 3 days of treatment: patient remains on ICU, on dialysis (3 sessions), now hemodynamically stable on vasopressors, platelets recovering, creatinine peaked at 3.8 then falling (2.1). Still requiring ventilator support but improving.",
        availableActions: [
          {
            id: "f_1",
            text: "Continue IV penicillin G for total 7-10 days of antibiotic course",
            isOptimal: true,
            findings:
              "Standard course for leptospirosis. De-escalate based on clinical improvement",
            scoreDelta: 2,
          },
          {
            id: "f_2",
            text: "Continue dialysis as needed until renal function recovers sufficiently",
            isOptimal: true,
            findings:
              "Creatinine falling, urine output increasing slightly. Monitor electrolytes carefully",
            scoreDelta: 1,
          },
          {
            id: "f_3",
            text: "Plan weaning off ventilator once respiratory status stable",
            isOptimal: true,
            findings: "Lung infiltrates improving on repeat CXR. Ventilator weaning protocol initiated",
            scoreDelta: 1,
          },
          {
            id: "f_4",
            text: "Continue coagulopathy monitoring and transfusion support as needed",
            isOptimal: true,
            findings: "PT improving, platelets now 85,000. DIC resolving. Continue monitoring",
            scoreDelta: 1,
          },
          {
            id: "f_5",
            text: "Assess for post-leptospirosis complications: myositis, aseptic meningitis, uveitis",
            isOptimal: true,
            findings:
              "Monitor for secondary complications. Some resolve with primary disease, others may persist",
            scoreDelta: 1,
          },
          {
            id: "f_6",
            text: "Plan renal follow-up: some patients develop chronic kidney disease",
            isOptimal: true,
            findings:
              "Renal recovery taking time. Close follow-up essential. Many recover fully, some progress to CKD",
            scoreDelta: 1,
          },
          {
            id: "f_7",
            text: "Educate on occupational safety once recovered",
            isOptimal: true,
            findings:
              "Counsel on use of protective gear (boots, gloves) when wading. Leptospirosis prevention critical",
            scoreDelta: 1,
          },
          {
            id: "f_8",
            text: "Arrange long-term follow-up with nephrology and infectious disease",
            isOptimal: true,
            findings: "Outpatient follow-up at 2 weeks, 1 month, and 3 months post-discharge",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Pulmonary Tuberculosis (Drug-Sensitive) - Diagnostic Challenge",
    presentingComplaint: "25-year-old migrant laborer with chronic cough and hemoptysis",
    caseType: "Ward",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "NEET_PG"],
    patientProfile: {
      age: 25,
      sex: "Male",
      occupation: "Migrant construction laborer",
      history: "Came from Jharkhand 3 months ago, lives in overcrowded dormitory, poor nutrition.",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "25yo male migrant laborer presents with 3-month history of productive cough. Initial dry cough, now expectoration of sputum. Weight loss of 8 kg reported. Fever in evening for past month. No hemoptysis initially, but 2 days ago coughed up blood-stained sputum. Denies contact with TB patients but lives in crowded dormitory.",
        availableActions: [
          {
            id: "h_1",
            text: "Ask about duration of cough (>2-3 weeks suggests TB)",
            isOptimal: true,
            findings: "Cough for 3 months. Chronic course compatible with TB",
            scoreDelta: 2,
          },
          {
            id: "h_2",
            text: "Ask about sputum characteristics",
            isOptimal: true,
            findings: "Sputum greenish, sometimes tinged with blood. Volume varying, worse in morning",
            scoreDelta: 1,
          },
          {
            id: "h_3",
            text: "Ask about systemic symptoms: fever pattern, night sweats, weight loss",
            isOptimal: true,
            findings:
              "Fever usually evening rise (classic TB pattern), night sweats soaking clothes, weight loss 8 kg in 3 months",
            scoreDelta: 3,
          },
          {
            id: "h_4",
            text: "Ask about hemoptysis details: amount, frequency",
            isOptimal: true,
            findings: "Small amount of blood in sputum only twice in 2 days. Not massive hemoptysis",
            scoreDelta: 1,
          },
          {
            id: "h_5",
            text: "Ask about living conditions and TB contact",
            isOptimal: true,
            findings:
              "Lives in dormitory with 15 others in one room, poor ventilation. No known TB contact but high-risk setting",
            scoreDelta: 2,
          },
          {
            id: "h_6",
            text: "Ask about prior TB or DOTS history",
            isOptimal: true,
            findings: "No prior TB history. Not on any anti-TB drugs currently",
            scoreDelta: 1,
          },
          {
            id: "h_7",
            text: "Ask about HIV status or risk factors",
            isOptimal: true,
            findings: "Not aware of HIV status. No known risk factors mentioned",
            scoreDelta: 1,
          },
          {
            id: "h_8",
            text: "Ask about respiratory symptoms: dyspnea, chest pain",
            isOptimal: false,
            findings: "Mild dyspnea on exertion, no pleuritic chest pain",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Patient appears lean, BMI 19.5 (low). Vitals: Temp 37.9°C (afternoon reading), HR 84/min, RR 18/min, BP 112/70 mmHg. Chest examination reveals crackles.",
        availableActions: [
          {
            id: "e_1",
            text: "Assess general appearance: wasting, pallor",
            isOptimal: true,
            findings: "Visible wasting, appears undernourished. Pallor present",
            scoreDelta: 1,
          },
          {
            id: "e_2",
            text: "Perform detailed respiratory examination: inspection, palpation, percussion, auscultation",
            isOptimal: true,
            findings:
              "Breath sounds diminished at apices bilaterally (indicates upper lobe involvement, classic TB location). Fine crackles heard at apices",
            scoreDelta: 2,
          },
          {
            id: "e_3",
            text: "Check for clubbing of fingers",
            isOptimal: false,
            findings: "No clubbing. TB doesn't cause clubbing (rules out chronic lung disease)",
            scoreDelta: 0,
          },
          {
            id: "e_4",
            text: "Assess for lymphadenopathy (cervical, supraclavicular)",
            isOptimal: false,
            findings: "No palpable lymph nodes. May be present but not palpable",
            scoreDelta: 0,
          },
          {
            id: "e_5",
            text: "Check for signs of malnutrition",
            isOptimal: true,
            findings: "Weight loss evident, muscle wasting present. Consistent with chronic disease",
            scoreDelta: 1,
          },
          {
            id: "e_6",
            text: "Look for hepatomegaly or splenomegaly",
            isOptimal: false,
            findings: "No organomegaly. Pulmonary TB only (no dissemination evident)",
            scoreDelta: 0,
          },
          {
            id: "e_7",
            text: "Check for signs of right heart failure",
            isOptimal: false,
            findings: "No edema, JVP normal. No evidence of cor pulmonale",
            scoreDelta: 0,
          },
          {
            id: "e_8",
            text: "Examine for skin tuberculosis (scrofuloderma) or other TB manifestations",
            isOptimal: false,
            findings: "No skin lesions. Pulmonary disease only",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "District hospital with RNTCP DOTS center. Diagnosis of pulmonary TB to be confirmed per NTEP (National TB Elimination Program) guidelines.",
        availableActions: [
          {
            id: "i_1",
            text: "Sputum smear microscopy (acid-fast bacilli - AFB) with Ziehl-Neelsen staining",
            isOptimal: true,
            findings:
              "AFB positive on first sputum sample (1+ on first, 2+ on second). Patient is 'smear-positive TB', infectious",
            scoreDelta: 3,
          },
          {
            id: "i_2",
            text: "CBNAAT/GeneXpert MTB/RIF (rapid test for TB and rifampicin resistance)",
            isOptimal: true,
            findings:
              "CBNAAT positive, MTB detected, RIF-susceptible result. Confirms TB and rules out MDR-TB. Result in 2 hours",
            scoreDelta: 3,
          },
          {
            id: "i_3",
            text: "Chest X-ray to visualize lung involvement",
            isOptimal: true,
            findings:
              "Bilateral upper lobe infiltrates, cavitation visible in right upper lobe. Classic TB appearance",
            scoreDelta: 2,
          },
          {
            id: "i_4",
            text: "Complete Blood Count",
            isOptimal: true,
            findings: "Hb 10.5 g/dL (mild anemia of chronic disease), WBC 8400/μL, platelets 250,000",
            scoreDelta: 1,
          },
          {
            id: "i_5",
            text: "Liver Function Tests (baseline before anti-TB drugs)",
            isOptimal: true,
            findings:
              "AST 38 IU/L, ALT 32 IU/L, bilirubin 0.9 mg/dL. Normal LFTs (important as anti-TB drugs are hepatotoxic)",
            scoreDelta: 1,
          },
          {
            id: "i_6",
            text: "Renal Function Tests (baseline before anti-TB drugs)",
            isOptimal: true,
            findings: "Creatinine 0.9 mg/dL, urea 22 mg/dL. Normal renal function",
            scoreDelta: 1,
          },
          {
            id: "i_7",
            text: "HIV testing (important for TB management)",
            isOptimal: true,
            findings:
              "HIV rapid test negative. CD4 count not needed as negative serology",
            scoreDelta: 2,
          },
          {
            id: "i_8",
            text: "Sputum culture and drug sensitivity testing (reference labs)",
            isOptimal: true,
            findings:
              "Sputum culture positive for MTB (reference lab). DST shows susceptible to all first-line drugs (HRZE susceptible)",
            scoreDelta: 1,
          },
          {
            id: "i_9",
            text: "Quantitative TST or IGRA",
            isOptimal: false,
            findings:
              "Not required for diagnosis. TB is already confirmed microbiologically",
            scoreDelta: 0,
          },
          {
            id: "i_10",
            text: "Vitamin B6 (pyridoxine) levels",
            isOptimal: false,
            findings:
              "Not routinely tested. But patient should receive B6 supplementation during isoniazid therapy",
            scoreDelta: 0,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Clinical: 3-month cough, hemoptysis, fever, night sweats, weight loss. Examination: apical crackles. Investigations: AFB 1+, CBNAAT MTB positive RIF-susceptible, bilateral upper lobe infiltrates with cavitation, HIV negative.",
        availableActions: [
          {
            id: "d_1",
            text: "Pulmonary Tuberculosis - Drug-Sensitive (DSPTB), Smear-Positive, Infectious",
            isOptimal: true,
            findings:
              "Definitive diagnosis. Confirmed by AFB+, CBNAAT+, classic CXR, clinical presentation. Smear-positive = infectious. RIF-susceptible = drug-sensitive",
            scoreDelta: 5,
          },
          {
            id: "d_2",
            text: "Smear-Negative TB with culture-positive disease",
            isOptimal: false,
            findings: "Patient is smear-positive, so not smear-negative TB",
            scoreDelta: -2,
          },
          {
            id: "d_3",
            text: "MDR-TB (Multidrug-Resistant TB)",
            isOptimal: false,
            findings: "CBNAAT shows RIF-susceptible. Not MDR. This is drug-sensitive TB",
            scoreDelta: -3,
          },
          {
            id: "d_4",
            text: "Bronchiectasis with hemoptysis",
            isOptimal: false,
            findings: "AFB positive. TB is proven. Hemoptysis from TB cavitation, not bronchiectasis",
            scoreDelta: -2,
          },
          {
            id: "d_5",
            text: "Chronic bronchitis",
            isOptimal: false,
            findings: "AFB+ rules out simple chronic bronchitis. TB is confirmed diagnosis",
            scoreDelta: -3,
          },
          {
            id: "d_6",
            text: "Aspergilloma (fungal lung infection)",
            isOptimal: false,
            findings: "AFB positive TB, not fungal. Aspergilloma can be secondary to TB but TB is primary",
            scoreDelta: -1,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Pulmonary TB-DS confirmed. Standard Category-I RNTCP DOTS regimen to be initiated per NTEP guidelines.",
        availableActions: [
          {
            id: "t_1",
            text: "Start Category-I RNTCP regimen: Intensive Phase (2 months): HRZE (Isoniazid, Rifampicin, Pyrazinamide, Ethambutol)",
            isOptimal: true,
            findings:
              "Standard first-line regimen. Fixed-dose combinations available. Weight-based dosing 50-60kg: standard doses",
            scoreDelta: 3,
          },
          {
            id: "t_2",
            text: "Continue with Continuation Phase (4 months): HR (Isoniazid + Rifampicin)",
            isOptimal: true,
            findings:
              "After 2 months intensive, switch to HR for 4 months. Total 6-month course for drug-sensitive TB",
            scoreDelta: 2,
          },
          {
            id: "t_3",
            text: "Enroll under RNTCP DOTS program (Directly Observed Therapy)",
            isOptimal: true,
            findings:
              "DOTS ensures adherence. Health worker observes patient taking each dose. Essential in migrant population",
            scoreDelta: 2,
          },
          {
            id: "t_4",
            text: "Add Pyridoxine (Vitamin B6): 25-50 mg daily during isoniazid therapy",
            isOptimal: true,
            findings: "Prevents isoniazid-induced peripheral neuropathy. Given with HRZE regimen",
            scoreDelta: 1,
          },
          {
            id: "t_5",
            text: "Monitor with sputum smear microscopy at 2 months of treatment",
            isOptimal: true,
            findings:
              "Smear should convert (become negative) by end of 2 months. If still positive = treatment failure",
            scoreDelta: 2,
          },
          {
            id: "t_6",
            text: "Nutrition support and dietary counseling",
            isOptimal: true,
            findings:
              "Patient malnourished. High-calorie, high-protein diet needed. TB facility may provide supplementary nutrition",
            scoreDelta: 1,
          },
          {
            id: "t_7",
            text: "Monthly LFT monitoring for drug-induced hepatotoxicity",
            isOptimal: true,
            findings:
              "All first-line drugs are hepatotoxic. Monitor at baseline, monthly during treatment",
            scoreDelta: 1,
          },
          {
            id: "t_8",
            text: "Baseline audiometry (for ethambutol optic toxicity risk monitoring)",
            isOptimal: false,
            findings:
              "Not standard at baseline. Ethambutol can cause optic neuritis. Counsel on symptoms to report",
            scoreDelta: 0,
          },
          {
            id: "t_9",
            text: "Isolation until smear conversion (typically 2 weeks, up to 2 months)",
            isOptimal: true,
            findings: "Patient infectious. Isolation precautions: separate room if hospitalized, mask at home",
            scoreDelta: 1,
          },
          {
            id: "t_10",
            text: "Start immediately without waiting for culture confirmation",
            isOptimal: true,
            findings:
              "Treatment should not be delayed. Start on CBNAAT result. Culture confirmation and DST are reference standard but slower",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Patient completes 2-month intensive phase on DOTS. Sputum smear now AFB negative (smear conversion successful). CXR shows improvement but infiltrates persistent. Now starting continuation phase (HR). What next?",
        availableActions: [
          {
            id: "f_1",
            text: "Continue HR (Isoniazid + Rifampicin) for 4 more months (total 6-month treatment)",
            isOptimal: true,
            findings:
              "Continuation phase standard. Patient responding well (smear conversion). Complete full course",
            scoreDelta: 2,
          },
          {
            id: "f_2",
            text: "Maintain DOTS directly observed therapy until treatment completion",
            isOptimal: true,
            findings:
              "Critical in migrant population prone to default. DOTS continuation ensures treatment success",
            scoreDelta: 1,
          },
          {
            id: "f_3",
            text: "Repeat sputum smear at 5 months (during continuation phase)",
            isOptimal: true,
            findings: "Should remain negative. Confirms sustained response",
            scoreDelta: 1,
          },
          {
            id: "f_4",
            text: "End-of-treatment chest X-ray (at 6 months)",
            isOptimal: true,
            findings:
              "May show residual fibrosis/scarring. Complete radiological clearing takes longer than bacteriological cure",
            scoreDelta: 1,
          },
          {
            id: "f_5",
            text: "Nutritional rehabilitation: continue high-protein diet",
            isOptimal: true,
            findings: "Weight recovery important. Monitor for re-feeding syndrome if severely malnourished",
            scoreDelta: 1,
          },
          {
            id: "f_6",
            text: "Contact tracing: identify persons with TB contact (family, dormitory mates)",
            isOptimal: true,
            findings:
              "All close contacts to be screened for TB. May need preventive therapy if TB-free but recent contact",
            scoreDelta: 1,
          },
          {
            id: "f_7",
            text: "Educate on preventing TB recurrence: adherence to full course, living conditions improvement",
            isOptimal: true,
            findings: "Recurrence risk high if moves back to dormitory. Advocate for better housing",
            scoreDelta: 1,
          },
          {
            id: "f_8",
            text: "Plan follow-up at 2 months, 4 months, and 6 months (end of treatment)",
            isOptimal: true,
            findings: "Regular monitoring ensures treatment success and identifies complications",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
];
