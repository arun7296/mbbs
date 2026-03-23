export const clinicalCasesIndiaTropical2 = [
  {
    title: "MDR-TB with Treatment Failure and GeneXpert Rif Resistance",
    presentingComplaint: "32-year-old female with persistent cough, night sweats, and weight loss despite 6 months of anti-TB therapy",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 45,
    examTags: ["NEXT_STEP1", "NEET_PG", "RNTCP_Protocol"] as string[],
    patientProfile: {
      age: 32,
      sex: "Female",
      occupation: "Teacher",
      history: "Completed 6 months standard RIPE therapy; persistently symptomatic; GeneXpert MTB/RIF reported Rifampicin RESISTANT",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "32yo female presents with persistent productive cough and night sweats. She has been on standard anti-TB therapy (RIPE) for 6 months prescribed at a primary health center. Recent GeneXpert report shows MTB detected with rifampicin resistance. Gather detailed history of treatment adherence, side effects, and prior TB episodes.",
        availableActions: [
          {
            id: "h_adhere",
            text: "Ask detailed questions about adherence, missed doses, and DOTS supervision",
            isOptimal: true,
            findings: "Patient admits to missing doses on weekends; no DOTS provider at home",
            scoreDelta: 2,
          },
          {
            id: "h_sideeffects",
            text: "Enquire about GI side effects, neuropathy, or visual symptoms",
            isOptimal: true,
            findings: "Hepatotoxicity not mentioned; patient on antacids",
            scoreDelta: 1,
          },
          {
            id: "h_priorTB",
            text: "Ask about prior TB episodes and treatment outcomes",
            isOptimal: true,
            findings: "First episode of TB; no prior treatment history",
            scoreDelta: 1,
          },
          {
            id: "h_contacts",
            text: "Inquire about household contacts and their TB screening status",
            isOptimal: true,
            findings: "Husband and 2 children; husband on anti-TB therapy for sensitive TB",
            scoreDelta: 1,
          },
          {
            id: "h_symptoms",
            text: "Assess current symptoms: cough character, hemoptysis, dyspnea",
            isOptimal: true,
            findings: "Productive cough × 2 months post-treatment initiation; no hemoptysis; mild dyspnea on exertion",
            scoreDelta: 1,
          },
          {
            id: "h_comorbidities",
            text: "Screen for HIV, diabetes, and other immunocompromising conditions",
            isOptimal: true,
            findings: "Denies HIV risk; no diabetes; takes levothyroxine for hypothyroidism",
            scoreDelta: 1,
          },
          {
            id: "h_skip",
            text: "Proceed directly to examination without detailed history",
            isOptimal: false,
            findings: "Missed critical adherence and risk factors",
            scoreDelta: -1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Physical examination of a cachectic 32yo female with persistent cough. Recent GeneXpert shows rifampicin resistance. Examine respiratory system, general health status, and signs of drug toxicity.",
        availableActions: [
          {
            id: "e_vitals",
            text: "Record vital signs: respiratory rate, SpO2, temperature",
            isOptimal: true,
            findings:
              "RR 28/min, SpO2 94% on room air, Temp 37.8°C, HR 98/min, BP 110/70 mmHg",
            scoreDelta: 2,
          },
          {
            id: "e_cns",
            text: "Perform CNS examination for signs of drug-induced neuropathy (vibration, pinprick sensation)",
            isOptimal: true,
            findings:
              "Reduced vibration sense in lower limbs bilaterally; normal motor strength",
            scoreDelta: 1,
          },
          {
            id: "e_respiratory",
            text: "Detailed respiratory examination: breath sounds, consolidation, crackles",
            isOptimal: true,
            findings:
              "Bilateral crackles mid-zones; diminished breath sounds left upper lobe; no consolidation",
            scoreDelta: 2,
          },
          {
            id: "e_abdomen",
            text: "Abdominal examination for hepatosplenomegaly and liver size",
            isOptimal: true,
            findings: "Liver edge palpable 2 cm below costal margin; soft, non-tender; no splenomegaly",
            scoreDelta: 1,
          },
          {
            id: "e_nutritional",
            text: "Assess nutritional status: BMI, muscle wasting, edema",
            isOptimal: true,
            findings: "BMI 18.2 (low); mild generalized wasting; no peripheral edema",
            scoreDelta: 1,
          },
          {
            id: "e_lymph",
            text: "Examine peripheral lymph nodes for size and consistency",
            isOptimal: false,
            findings: "No significant lymphadenopathy",
            scoreDelta: 0,
          },
          {
            id: "e_skin",
            text: "Look for skin rashes (SJS, fixed drug eruption) or other cutaneous signs",
            isOptimal: true,
            findings: "No rashes or cutaneous lesions observed",
            scoreDelta: 1,
          },
          {
            id: "e_skip",
            text: "Skip examination; rely on lab findings alone",
            isOptimal: false,
            findings: "Missed clinical signs of drug toxicity and disease progression",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Investigations are needed to confirm MDR-TB, assess extent of disease, drug toxicity, and comorbidities. Patient already has positive GeneXpert MTB/RIF with rifampicin resistance reported. Plan further investigations per RNTCP/PMDT guidelines.",
        availableActions: [
          {
            id: "inv_genexpert",
            text: "Obtain repeat GeneXpert MTB/RIF from sputum on second day (confirm resistance)",
            isOptimal: true,
            findings: "MTB detected, Rifampicin RESISTANT (confirmed); Isoniazid sensitive",
            scoreDelta: 2,
          },
          {
            id: "inv_cxr",
            text: "Request chest X-ray to assess lung involvement and cavitary disease",
            isOptimal: true,
            findings:
              "Bilateral upper lobe infiltrates with cavitation left side; mild right-sided consolidation",
            scoreDelta: 2,
          },
          {
            id: "inv_lft",
            text: "Check liver function tests (ALT, AST, bilirubin) for drug-induced hepatotoxicity",
            isOptimal: true,
            findings:
              "ALT 78 U/L (mildly elevated), AST 65 U/L, Bilirubin 0.9 mg/dL; albumin 3.2 g/dL",
            scoreDelta: 2,
          },
          {
            id: "inv_rft",
            text: "Assess renal function (creatinine, eGFR) for second-line drug planning",
            isOptimal: true,
            findings: "Serum creatinine 0.8 mg/dL, eGFR >90 mL/min; normal renal function",
            scoreDelta: 1,
          },
          {
            id: "inv_hiv",
            text: "Perform HIV testing if not done recently (critical for treatment planning)",
            isOptimal: true,
            findings: "HIV serology negative; CD4 count not required",
            scoreDelta: 2,
          },
          {
            id: "inv_lsm",
            text: "Perform liquid sputum microscopy (Auramine-rhodamine stain) for bacillary load",
            isOptimal: true,
            findings: "3+ smear positive; high bacillary load indicating infectious disease",
            scoreDelta: 1,
          },
          {
            id: "inv_diabetic",
            text: "Screen for diabetes with fasting glucose and HbA1c",
            isOptimal: true,
            findings: "Fasting glucose 92 mg/dL, HbA1c 5.1%; no diabetes",
            scoreDelta: 1,
          },
          {
            id: "inv_culture",
            text: "Send sputum for TB culture and drug sensitivity testing (DST) at PMDT center",
            isOptimal: true,
            findings: "Culture pending; DST will be done on L-J medium for second-line drugs",
            scoreDelta: 1,
          },
          {
            id: "inv_skip",
            text: "Skip investigations and start PMDT regimen based on GeneXpert alone",
            isOptimal: false,
            findings: "Missed assessment of disease extent and drug safety parameters",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Based on persistent cough, treatment failure after 6 months of standard therapy, GeneXpert MTB/RIF showing rifampicin resistance, bilateral upper lobe infiltrates with cavitation, and high sputum smear positivity, establish the diagnosis. Classify per RNTCP categories.",
        availableActions: [
          {
            id: "d_mdr",
            text: "Diagnose MDR-TB (Multi-Drug Resistant TB): resistant to at least isoniazid AND rifampicin",
            isOptimal: true,
            findings:
              "Confirmed: GeneXpert shows Rif-R; patient on prior INH; meets definition of MDR-TB",
            scoreDelta: 3,
          },
          {
            id: "d_category",
            text: "Classify as 'Treatment Failure' case (RNTCP Category IV - MDR/XDR patient)",
            isOptimal: true,
            findings:
              "Patient has completed standard Category I therapy without microbiological conversion",
            scoreDelta: 2,
          },
          {
            id: "d_cavitary",
            text: "Diagnose extensive cavitary pulmonary TB with high infectivity",
            isOptimal: true,
            findings: "CXR shows bilateral cavitary disease; smear 3+; highly infectious",
            scoreDelta: 1,
          },
          {
            id: "d_xdr",
            text: "Suspect XDR-TB (additional fluoroquinolone or injectable resistance)",
            isOptimal: false,
            findings: "Not supported by current data; DST pending; premature assumption",
            scoreDelta: -1,
          },
          {
            id: "d_pneumonia",
            text: "Diagnose as community-acquired pneumonia unrelated to TB",
            isOptimal: false,
            findings: "Contradicts GeneXpert positivity and treatment history",
            scoreDelta: -3,
          },
          {
            id: "d_relapse",
            text: "Diagnose as TB relapse (recurrence after successful treatment)",
            isOptimal: false,
            findings: "Not applicable; patient never completed standard therapy",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "MDR-TB treatment failure case confirmed. Patient requires PMDT (Programmed Management of Drug-Resistant TB) regimen per RNTCP Category IV guidelines. Design intensive phase regimen with bedaquiline, considering prior drug exposure and current baseline status. Address drug toxicity and adherence.",
        availableActions: [
          {
            id: "t_refer",
            text: "Refer to District TB Center PMDT unit for enrollment and supervised therapy",
            isOptimal: true,
            findings:
              "Patient counseled on PMDT; enrollment paperwork initiated; assigned DOTS provider",
            scoreDelta: 2,
          },
          {
            id: "t_regimen",
            text: "Initiate PMDT regimen: Bedaquiline + Levofloxacin + Linezolid + Pyrazinamide + Ethionamide (5-drug intensive phase)",
            isOptimal: true,
            findings:
              "Bedaquiline 400 mg daily × 14 days, then 200 mg thrice weekly; Levofloxacin 750 mg daily; Linezolid 600 mg daily (6 months); PZA 2.5 g daily; Ethionamide 750 mg daily",
            scoreDelta: 3,
          },
          {
            id: "t_adjunct",
            text: "Add adjuvant medications: Pyridoxine (INH-sparing), B-complex, calcium, vitamin D",
            isOptimal: true,
            findings:
              "Pyridoxine 50 mg daily (neuropathy prevention); Vitamin B-complex; Calcium 1200 mg + Vitamin D 400 IU daily",
            scoreDelta: 1,
          },
          {
            id: "t_monitoring",
            text: "Plan intensive monitoring: monthly sputum smear microscopy, monthly LFTs, 3-monthly CXR, weight monitoring",
            isOptimal: true,
            findings:
              "Baseline sputum Day 1; follow-up Week 2, Month 1, 3, 6; LFT at baseline, Week 2, Month 1, 3; CXR at baseline and 3 months",
            scoreDelta: 2,
          },
          {
            id: "t_diet",
            text: "Prescribe high-protein, micronutrient-rich diet; nutritional counseling",
            isOptimal: true,
            findings:
              "Patient referred to nutritionist; advised 80 g protein daily; fortified meals provided at PMDT center",
            scoreDelta: 1,
          },
          {
            id: "t_infection",
            text: "Manage as hospitalized/day-care admission for first 2 weeks until smear conversion",
            isOptimal: true,
            findings: "Admitted to TB ward; isolation for 2 weeks; separate room from susceptible TB patients",
            scoreDelta: 2,
          },
          {
            id: "t_contacts",
            text: "Ensure contact investigation: screen husband and 2 children; start TPT for eligible contacts",
            isOptimal: true,
            findings:
              "Husband has drug-sensitive TB (on RIPE); children tested; 1 child close contact, given INH prophylaxis",
            scoreDelta: 1,
          },
          {
            id: "t_old",
            text: "Continue with older drugs (RIPE) expecting eventual response",
            isOptimal: false,
            findings: "Inappropriate; patient already failed standard therapy; will worsen resistance",
            scoreDelta: -3,
          },
          {
            id: "t_dosage",
            text: "Use standard PMDT dosages without dose adjustments for renal/hepatic function",
            isOptimal: true,
            findings: "Normal renal function; mild hepatotoxicity; doses adjusted if needed during follow-up",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Plan comprehensive follow-up for MDR-TB patient on PMDT. Monitor microbiological response, clinical improvement, drug toxicity, and adherence. Address the long duration of therapy and psychosocial support needs. Define milestones for treatment success.",
        availableActions: [
          {
            id: "f_smear",
            text: "Check sputum smear microscopy at Week 2, Month 1, 3, 6 for conversion assessment",
            isOptimal: true,
            findings:
              "Expected: smear negative by Month 2-3; indicates microbiological response and infectivity reduction",
            scoreDelta: 2,
          },
          {
            id: "f_culture",
            text: "Arrange liquid culture at 3-month and 6-month intervals to assess bacteriological cure",
            isOptimal: true,
            findings: "Culture conversion by Month 3-4 confirms effective therapy; guides regimen duration",
            scoreDelta: 2,
          },
          {
            id: "f_toxicity",
            text: "Monitor for drug-induced toxicity: hepatotoxicity, neuropathy, ototoxicity, hypothyroidism",
            isOptimal: true,
            findings:
              "Monthly LFTs; assess neuropathy (Levofloxacin, Linezolid risk); audiometry if linezolid >6 months; TSH monitoring",
            scoreDelta: 2,
          },
          {
            id: "f_psycho",
            text: "Provide psychological counseling and peer support for long treatment course (18-20 months)",
            isOptimal: true,
            findings:
              "Social worker counseling; monthly support group meetings; financial assistance for food/transport",
            scoreDelta: 1,
          },
          {
            id: "f_nutrition",
            text: "Reassess nutritional status monthly; provide food baskets and supplementary nutrition",
            isOptimal: true,
            findings: "Weight monitoring; target weight gain 5-10 kg over 6 months; nutritional supplement provision",
            scoreDelta: 1,
          },
          {
            id: "f_adherence",
            text: "Intensive DOTS supervision; identify barriers to adherence and intervene",
            isOptimal: true,
            findings:
              "Dedicated DOTS provider; daily supervision; SMS reminders; address transport, work loss issues",
            scoreDelta: 2,
          },
          {
            id: "f_xray",
            text: "Repeat chest X-ray at 3 months and 6 months to assess radiological improvement",
            isOptimal: true,
            findings:
              "Expected: gradual resolution of infiltrates and cavity healing; may not correlate perfectly with smear conversion",
            scoreDelta: 1,
          },
          {
            id: "f_extended",
            text: "Plan extended intensive phase if smear conversion delayed; reassess regimen at 6 months",
            isOptimal: true,
            findings: "If culture still positive at 6 months: consider regimen modifications or investigational drugs",
            scoreDelta: 1,
          },
          {
            id: "f_outcomes",
            text: "Define treatment outcomes per PMDT: cure (smear/culture negative + CXR improved), treatment complete, failure, loss to follow-up",
            isOptimal: true,
            findings:
              "Success target: cure or treatment complete; monitored at treatment end and 12 months post-treatment",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Acute Rheumatic Fever with Carditis and Migratory Polyarthritis",
    presentingComplaint: "10-year-old boy with migratory polyarthritis, fever, and new cardiac murmur 2 weeks after sore throat",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "NEET_PG", "Pediatrics"] as string[],
    patientProfile: {
      age: 10,
      sex: "Male",
      occupation: "Student",
      history: "Acute pharyngitis with fever 2 weeks ago; now presents with migratory joint pain, fever, and dyspnea",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "10-year-old boy with migratory joint pain affecting knees and ankles bilaterally, low-grade fever, and recent sore throat. Mother reports he had acute pharyngitis 2 weeks ago treated with home remedies (no antibiotics). Now complains of fatigue and dyspnea on exertion. Gather detailed history of preceding infection, joint symptoms, and constitutional manifestations.",
        availableActions: [
          {
            id: "h_pharyngitis",
            text: "Ask about preceding pharyngitis: onset, severity, treatment, antibiotic use",
            isOptimal: true,
            findings:
              "Acute pharyngitis 2 weeks prior; high fever (101-102°F); severe throat pain; treated with home remedies only; no antibiotics given",
            scoreDelta: 2,
          },
          {
            id: "h_arthritis",
            text: "Characterize joint symptoms: location, migration, duration, severity, swelling",
            isOptimal: true,
            findings:
              "Started with right knee pain 5 days ago; shifted to left ankle 2 days later; now bilateral ankles; pain migratory; non-suppurative",
            scoreDelta: 2,
          },
          {
            id: "h_cardio",
            text: "Ask about cardiac symptoms: dyspnea, chest pain, palpitations, orthopnea",
            isOptimal: true,
            findings:
              "Dyspnea on exertion (climbing stairs); denies orthopnea, chest pain, or palpitations; mother noticed fatigue",
            scoreDelta: 2,
          },
          {
            id: "h_fever",
            text: "Assess fever pattern: onset, temperature, duration, and associated malaise",
            isOptimal: true,
            findings: "Intermittent fever × 1 week (Tmax 38.5°C); no rigors; malaise present",
            scoreDelta: 1,
          },
          {
            id: "h_rash",
            text: "Inquire about rash, subcutaneous nodules, or other cutaneous manifestations",
            isOptimal: true,
            findings: "No rash mentioned; mother denies any skin lesions; no nodules",
            scoreDelta: 1,
          },
          {
            id: "h_chorea",
            text: "Ask about involuntary movements, emotional lability, or behavioral changes (Sydenham chorea)",
            isOptimal: true,
            findings: "No involuntary movements; no behavioral changes; mother denies any developmental concerns",
            scoreDelta: 1,
          },
          {
            id: "h_socioec",
            text: "Assess socioeconomic status, crowded living conditions, and previous infections",
            isOptimal: true,
            findings: "Lives in crowded urban area; lower-income family; siblings with recurrent infections",
            scoreDelta: 1,
          },
          {
            id: "h_skip",
            text: "Proceed to examination without detailed history",
            isOptimal: false,
            findings: "Missed critical temporal relationship and cardinal features",
            scoreDelta: -1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Physical examination of 10-year-old boy with fever, migratory polyarthritis, and dyspnea. Focus on cardiac examination for murmurs, heart failure signs, and joint examination for tenderness and swelling. Assess for other features of ARF.",
        availableActions: [
          {
            id: "e_vitals",
            text: "Record vital signs: HR, BP, RR, temperature, SpO2",
            isOptimal: true,
            findings: "HR 108/min (tachycardic), BP 100/60 mmHg, RR 24/min, Temp 38.2°C, SpO2 97%",
            scoreDelta: 2,
          },
          {
            id: "e_cardiac",
            text: "Perform detailed cardiac examination: auscultation, murmurs, S3 gallop, JVD",
            isOptimal: true,
            findings:
              "Apical systolic murmur (2/6) at apex; no S3 gallop; no JVD; regular rate and rhythm; mild tachycardia",
            scoreDelta: 3,
          },
          {
            id: "e_joints",
            text: "Examine affected joints: tenderness, swelling, range of motion, erythema",
            isOptimal: true,
            findings:
              "Bilateral ankle swelling with tenderness; knees with mild swelling; erythema over joint sites; warmth present; no effusion",
            scoreDelta: 2,
          },
          {
            id: "e_skin",
            text: "Look for erythema marginatum (non-pruritic, evanescent rash) or subcutaneous nodules",
            isOptimal: true,
            findings: "No erythema marginatum; no subcutaneous nodules palpable",
            scoreDelta: 1,
          },
          {
            id: "e_respiratory",
            text: "Assess lungs for signs of pulmonary edema or cardiopulmonary compromise",
            isOptimal: true,
            findings: "Clear bilateral breath sounds; no crackles; normal percussion",
            scoreDelta: 1,
          },
          {
            id: "e_abdomen",
            text: "Abdominal examination for organomegaly or free fluid",
            isOptimal: false,
            findings: "Soft, non-tender abdomen; no hepatosplenomegaly; normal bowel sounds",
            scoreDelta: 0,
          },
          {
            id: "e_skip",
            text: "Skip cardiac examination and focus only on joints",
            isOptimal: false,
            findings: "Missed critical cardiac findings indicating carditis",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Investigations to support ARF diagnosis per Jones criteria (2015 revised): ESR, CRP, throat culture/strep serology, ECG, echocardiography, and CBC. Assess for acute rheumatic heart disease (ARHD).",
        availableActions: [
          {
            id: "inv_esr",
            text: "Check ESR (Erythrocyte Sedimentation Rate) for inflammation assessment",
            isOptimal: true,
            findings: "ESR 68 mm/1st hour (markedly elevated); indicates significant inflammation",
            scoreDelta: 2,
          },
          {
            id: "inv_crp",
            text: "Perform CRP (C-Reactive Protein) to assess acute phase response",
            isOptimal: true,
            findings: "CRP 4.2 mg/dL (elevated); confirms acute inflammation",
            scoreDelta: 2,
          },
          {
            id: "inv_strep",
            text: "Perform rapid streptococcal antigen test or throat culture to document GAS infection",
            isOptimal: true,
            findings:
              "Rapid strep test positive (Group A Streptococcus); throat culture confirms GAS",
            scoreDelta: 2,
          },
          {
            id: "inv_ast",
            text: "Check ASO titer (Anti-Streptolysin O) for evidence of recent streptococcal infection",
            isOptimal: true,
            findings: "ASO titer 800 IU/mL (elevated; normal <400); confirms recent GAS infection",
            scoreDelta: 2,
          },
          {
            id: "inv_ecg",
            text: "Perform 12-lead ECG to assess for cardiomegaly, conduction abnormalities",
            isOptimal: true,
            findings:
              "Sinus tachycardia; normal PR interval; no prolongation; normal QT; no AV block",
            scoreDelta: 1,
          },
          {
            id: "inv_echo",
            text: "Order echocardiography (2D echo with Doppler) to assess cardiac valve involvement",
            isOptimal: true,
            findings:
              "Mild mitral regurgitation (jet width <2 cm, pathologic; not just morphologic); normal LV function; normal pericardium; no aortic involvement",
            scoreDelta: 3,
          },
          {
            id: "inv_cxr",
            text: "Perform chest X-ray to assess for cardiomegaly or pulmonary edema",
            isOptimal: true,
            findings: "Cardiothoracic ratio normal (0.48); normal pulmonary vasculature; no pulmonary edema",
            scoreDelta: 1,
          },
          {
            id: "inv_cbc",
            text: "Complete blood count for hemoglobin, WBC, platelet assessment",
            isOptimal: true,
            findings: "Hb 12.2 g/dL; WBC 11,500 (mild leukocytosis); platelets 320K",
            scoreDelta: 1,
          },
          {
            id: "inv_skip",
            text: "Diagnose based on clinical findings alone without investigations",
            isOptimal: false,
            findings: "Missed confirmation of streptococcal infection and cardiac involvement",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Based on 2015 revised Jones criteria: high-risk population (rheumatic fever endemic region), migratory polyarthritis, carditis with pathologic mitral regurgitation, elevated inflammatory markers, and GAS-positive throat culture, confirm ARF diagnosis. Initial ARF vs. recurrent ARF?",
        availableActions: [
          {
            id: "d_arf_initial",
            text: "Diagnose Initial Acute Rheumatic Fever meeting Jones criteria: GAS evidence + carditis + polyarthritis + elevated inflammatory markers",
            isOptimal: true,
            findings:
              "Meets major criteria: carditis (pathologic MR on echo) + polyarthritis (migratory); GAS evidence (positive culture + elevated ASO); high-risk population; ESR/CRP elevated",
            scoreDelta: 3,
          },
          {
            id: "d_severity",
            text: "Assess severity as moderate ARF (carditis present, stable hemodynamics, no heart failure)",
            isOptimal: true,
            findings:
              "Carditis present with pathologic MR; no signs of acute heart failure; normal LV function; suitable for out-patient management with close monitoring",
            scoreDelta: 2,
          },
          {
            id: "d_stage",
            text: "Classify cardiac disease stage: no prior ARF history, therefore RHD Stage A (high-risk, no RHD on echo)",
            isOptimal: true,
            findings:
              "No prior ARF episodes; echo shows initial valve involvement without structural sequelae; Stage A RHD risk",
            scoreDelta: 1,
          },
          {
            id: "d_hf",
            text: "Rule out acute heart failure (no pulmonary edema, normal CXR, normal LV function)",
            isOptimal: true,
            findings:
              "No signs of acute decompensation; normal cardiac output; suitable for conservative management",
            scoreDelta: 1,
          },
          {
            id: "d_pneumonia",
            text: "Misdiagnose as community-acquired pneumonia",
            isOptimal: false,
            findings: "Contradicts clear streptococcal evidence, cardiac findings, and Jones criteria",
            scoreDelta: -3,
          },
          {
            id: "d_reactive",
            text: "Diagnose as reactive arthritis or other viral arthritis",
            isOptimal: false,
            findings: "Ignores carditis, GAS evidence, and temporal relationship to pharyngitis",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Acute phase treatment of ARF with carditis: anti-inflammatory agents (aspirin), cardiac support, and long-term penicillin prophylaxis. Plan acute phase management and secondary prophylaxis regimen per WHO/AHA guidelines adapted for Indian context.",
        availableActions: [
          {
            id: "t_aspirin",
            text: "Initiate high-dose aspirin for anti-inflammatory effect (80-100 mg/kg/day in divided doses × 2 weeks, then taper)",
            isOptimal: true,
            findings:
              "Aspirin 1.2 g four times daily × 2 weeks (anti-inflammatory dose); then reduce to 500 mg four times daily × 2 weeks",
            scoreDelta: 2,
          },
          {
            id: "t_steroids",
            text: "Consider prednisolone if aspirin inadequate or carditis severe; reserve for moderate-to-severe carditis",
            isOptimal: true,
            findings:
              "Prednisolone 1 mg/kg/day × 1-2 weeks, then taper over 4-6 weeks (not required now; monitor response to aspirin first)",
            scoreDelta: 1,
          },
          {
            id: "t_penicillin",
            text: "Initiate long-term penicillin prophylaxis immediately: Benzathine penicillin G (BPG) 1.2 million units IM every 3 weeks",
            isOptimal: true,
            findings:
              "BPG 1.2 million units IM on Day 1; repeat every 3 weeks indefinitely (until age 21 minimum; carditis = lifelong prophylaxis)",
            scoreDelta: 3,
          },
          {
            id: "t_analgesics",
            text: "Prescribe paracetamol for pain relief in addition to aspirin (not instead of)",
            isOptimal: true,
            findings: "Paracetamol 15 mg/kg as needed for breakthrough pain",
            scoreDelta: 1,
          },
          {
            id: "t_cardiac",
            text: "Monitor for cardiac decompensation; prescribe diuretics only if heart failure signs develop",
            isOptimal: true,
            findings:
              "Currently no heart failure; monitor clinical status and CXR; furosemide not indicated at present",
            scoreDelta: 1,
          },
          {
            id: "t_rest",
            text: "Advise complete bed rest until clinical signs of inflammation resolve and ESR normalizes",
            isOptimal: true,
            findings: "Bed rest × 2-3 weeks; gradual mobilization as clinical improves; avoid strenuous activity for 6 months",
            scoreDelta: 1,
          },
          {
            id: "t_diet",
            text: "Prescribe low-sodium diet if any signs of cardiac involvement; ensure adequate nutrition",
            isOptimal: true,
            findings:
              "Low-sodium, balanced diet; adequate protein for healing; small frequent meals; adequate hydration",
            scoreDelta: 1,
          },
          {
            id: "t_nsaid",
            text: "Use only aspirin; avoid other NSAIDs (variable efficacy, toxicity risk)",
            isOptimal: true,
            findings: "Aspirin preferred; other NSAIDs avoided",
            scoreDelta: 1,
          },
          {
            id: "t_skip",
            text: "Skip aspirin; only use penicillin for prophylaxis",
            isOptimal: false,
            findings: "Missed acute phase anti-inflammatory treatment; inadequate control of acute inflammation",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Long-term follow-up of ARF with carditis: cardiac monitoring, penicillin prophylaxis adherence, prevention of recurrent attacks, and school/activity resumption. Assess for development of chronic RHD. Family education and counseling.",
        availableActions: [
          {
            id: "f_cardiac",
            text: "Plan cardiac follow-up: repeat echo at 1 month, 3 months, and 6 months to assess for progression to chronic RHD",
            isOptimal: true,
            findings:
              "Baseline echo with pathologic MR; repeat at 1, 3, 6 months; progression assessment for structural valve changes",
            scoreDelta: 2,
          },
          {
            id: "f_prophylaxis",
            text: "Ensure strict adherence to benzathine penicillin G prophylaxis: monthly IM injections for life (carditis = lifelong prophylaxis)",
            isOptimal: true,
            findings:
              "BPG 1.2 million units IM every 3-4 weeks; provide injection schedule; contact monthly for missed doses; mobile clinic visits",
            scoreDelta: 2,
          },
          {
            id: "f_clinical",
            text: "Reassess clinically at 1-2 weeks, 1 month, 3 months for resolution of carditis and arthritis",
            isOptimal: true,
            findings:
              "Acute phase review at 2 weeks; subsequent reviews at 1, 3, 6, 12 months; assess for recurrent attacks",
            scoreDelta: 2,
          },
          {
            id: "f_esr",
            text: "Monitor ESR/CRP at follow-up visits; return to normal indicates quiescence of acute inflammation",
            isOptimal: true,
            findings:
              "Baseline ESR 68; target normalization by 4-6 weeks; repeat at each visit; guides anti-inflammatory therapy duration",
            scoreDelta: 1,
          },
          {
            id: "f_school",
            text: "Provide clearance for school reattendance after acute phase (1 month), but restrict sports/vigorous activity × 6 months",
            isOptimal: true,
            findings:
              "Gradual return to normal activities; no competitive sports for 6 months; light activity after 4-6 weeks",
            scoreDelta: 1,
          },
          {
            id: "f_family",
            text: "Screen household contacts (siblings, parents) for GAS carriage and treat if culture-positive",
            isOptimal: true,
            findings:
              "Screen siblings with throat culture; if positive, treat with amoxicillin 250 mg TDS × 10 days to eliminate carriage",
            scoreDelta: 1,
          },
          {
            id: "f_education",
            text: "Counsel family on importance of penicillin adherence, prevention of streptococcal reinfection, and early recognition of ARF recurrence",
            isOptimal: true,
            findings:
              "Family education on injection schedule; warning signs (fever, joint pain, dyspnea); importance of annual echo if RHD develops",
            scoreDelta: 1,
          },
          {
            id: "f_rhd",
            text: "Define RHD risk trajectory: assess for chronic RHD development at 5-year and 10-year follow-up",
            isOptimal: true,
            findings:
              "Initial pathologic MR may progress to chronic RHD (MS, MR, AR); long-term echo surveillance; counsel on risks",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Filariasis with Acute Adenolymphangitis and Lymphedema",
    presentingComplaint: "40-year-old male from coastal Andhra Pradesh with fever, red streaking, and groin lymphadenopathy",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG", "Infectious_Disease"] as string[],
    patientProfile: {
      age: 40,
      sex: "Male",
      occupation: "Farmer",
      history: "Lives in endemic coastal region; presents with acute fever, red streaking in legs, and groin swelling",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "40-year-old farmer from coastal Andhra Pradesh with acute onset fever, red streaking along thighs, and tender groin lumps. Reports swollen legs. Lives in area endemic for filariasis (Wuchereria bancrofti). Gather history of residence, exposure, and symptom onset.",
        availableActions: [
          {
            id: "h_residence",
            text: "Confirm residence in endemic area; duration of stay in coastal Andhra Pradesh",
            isOptimal: true,
            findings:
              "Born and lived in Andhra Pradesh coast × 40 years; endemic area; no migration",
            scoreDelta: 2,
          },
          {
            id: "h_exposure",
            text: "Ask about mosquito bites, nocturnal exposure, and sleeping arrangements",
            isOptimal: true,
            findings:
              "Works outdoors in fields; sleeps in open/inadequate mosquito protection; frequent mosquito bites",
            scoreDelta: 1,
          },
          {
            id: "h_fever",
            text: "Characterize fever: onset, duration, pattern, associated symptoms",
            isOptimal: true,
            findings: "Acute fever × 3 days (Tmax 39.2°C); intermittent; chills present",
            scoreDelta: 1,
          },
          {
            id: "h_streaking",
            text: "Describe red streaking: location, onset, progression, association with lymphadenopathy",
            isOptimal: true,
            findings:
              "Red streaking from ankle up medial thigh × 2 days; associated tender groin nodes; bilateral leg swelling",
            scoreDelta: 2,
          },
          {
            id: "h_prior",
            text: "Ask about prior episodes of similar symptoms or chronic leg swelling",
            isOptimal: true,
            findings:
              "Recalls 2 episodes in past 3 years with fever + leg swelling; resolved spontaneously; now worsening",
            scoreDelta: 2,
          },
          {
            id: "h_skip",
            text: "Proceed without detailed history",
            isOptimal: false,
            findings: "Missed endemic exposure and prior episodes suggesting chronic filariasis",
            scoreDelta: -1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Physical examination of 40-year-old with fever and bilateral leg involvement. Focus on lymphadenopathy, red streaking, lymphedema, and signs of lymphangitis. Document acute inflammatory response.",
        availableActions: [
          {
            id: "e_vitals",
            text: "Record vital signs: temperature, HR, BP, RR",
            isOptimal: true,
            findings: "Temp 39°C, HR 102/min, BP 130/80 mmHg, RR 18/min",
            scoreDelta: 2,
          },
          {
            id: "e_lymph",
            text: "Examine groin lymph nodes: size, tenderness, consistency, bilateral involvement",
            isOptimal: true,
            findings:
              "Bilateral inguinal lymphadenopathy (1-2 cm); firm, tender, mobile; no suppuration",
            scoreDelta: 2,
          },
          {
            id: "e_streaking",
            text: "Assess red streaking: location, distribution, warmth, tenderness",
            isOptimal: true,
            findings:
              "Erythematous streaking from ankle toward groin bilaterally; warm to touch; tender on palpation",
            scoreDelta: 2,
          },
          {
            id: "e_edema",
            text: "Examine lower extremities for pitting vs. non-pitting edema, asymmetry",
            isOptimal: true,
            findings:
              "Bilateral leg edema below knee; pitting; mild thickening of skin; no pitting in feet",
            scoreDelta: 1,
          },
          {
            id: "e_skin",
            text: "Check skin for signs of secondary infection, ulceration, or chronic changes",
            isOptimal: true,
            findings: "Intact skin; no open lesions; no pigmentation changes yet",
            scoreDelta: 1,
          },
          {
            id: "e_systemic",
            text: "General examination: assess for malaise, toxicity, or systemic signs",
            isOptimal: true,
            findings: "Patient appears mildly ill; alert; normal mental status",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Investigations to confirm filariasis: nocturnal blood smear microscopy (10 PM-2 AM), antigen detection (ICT), CBC, USG abdomen and lower limbs for lymphatic involvement.",
        availableActions: [
          {
            id: "inv_smear",
            text: "Perform blood smear microscopy at night (10 PM-2 AM) for microfilariae detection (Wuchereria bancrofti nocturnal periodicity)",
            isOptimal: true,
            findings:
              "Nocturnal thick and thin smears: microfilariae (Wuchereria bancrofti) detected; density 50-100 mf/mL",
            scoreDelta: 3,
          },
          {
            id: "inv_ict",
            text: "Perform ICT (Immunochromatographic Test) for circulating filarial antigen",
            isOptimal: true,
            findings: "ICT positive for Wuchereria bancrofti antigen; rapid bedside confirmation",
            scoreDelta: 2,
          },
          {
            id: "inv_usg",
            text: "Ultrasound of groin and lower abdomen to visualize lymphatic involvement and 'dancing worms' sign",
            isOptimal: true,
            findings:
              "Dilated lymphatic vessels in spermatic cord region; 'dancing worms' sign in femoral vessels; dilated inguinal and iliac nodes",
            scoreDelta: 2,
          },
          {
            id: "inv_cbc",
            text: "Complete blood count for eosinophilia assessment",
            isOptimal: true,
            findings:
              "WBC 8,500; eosinophilia present (8%); RBC and platelets normal; mild anemia (Hb 12.8)",
            scoreDelta: 1,
          },
          {
            id: "inv_lft",
            text: "Liver function tests (routine screening in febrile patient)",
            isOptimal: false,
            findings: "ALT 28 U/L, AST 32 U/L, bilirubin 0.8 mg/dL; normal",
            scoreDelta: 0,
          },
          {
            id: "inv_skip",
            text: "Diagnose clinically without blood examination",
            isOptimal: false,
            findings: "Missed confirmation of microfilaremia; inadequate diagnostic certainty",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Based on endemic residence, nocturnal blood smear with Wuchereria bancrofti microfilariae, ICT antigen positivity, characteristic lymphangitis with red streaking, and USG findings, diagnose lymphatic filariasis. Acute adenolymphangitis stage.",
        availableActions: [
          {
            id: "d_filaria",
            text: "Diagnose lymphatic filariasis (Wuchereria bancrofti): confirmed by nocturnal microfilariae and antigen detection",
            isOptimal: true,
            findings:
              "Microfilaremia confirmed; ICT positive; endemic residence; classic clinical presentation",
            scoreDelta: 3,
          },
          {
            id: "d_stage",
            text: "Classify as adenolymphangitis (ALL) stage: acute inflammation of lymph nodes and vessels with fever",
            isOptimal: true,
            findings:
              "Acute fever with tender lymphadenopathy and lymphangitis; red streaking; classic ALL presentation",
            scoreDelta: 2,
          },
          {
            id: "d_chronic",
            text: "Recognize chronic lymphedema basis: prior episodes suggest chronic lymphatic damage underlying acute inflammation",
            isOptimal: true,
            findings:
              "History of recurrent episodes; mild leg edema even at baseline; progressing to chronic lymphedema stage",
            scoreDelta: 1,
          },
          {
            id: "d_secondary",
            text: "Rule out bacterial cellulitis; filariasis confirmed makes secondary bacterial infection unlikely currently",
            isOptimal: true,
            findings:
              "Absence of suppuration, fluctuance, and purulent discharge makes primary cellulitis unlikely",
            scoreDelta: 1,
          },
          {
            id: "d_skip",
            text: "Misdiagnose as cellulitis without considering filariasis",
            isOptimal: false,
            findings: "Missed underlying parasitic etiology; inappropriate antibiotic monotherapy",
            scoreDelta: -3,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Treatment of acute adenolymphangitis in lymphatic filariasis: antimicrofilarial drugs (DEC, albendazole), management of acute inflammation, secondary infection prevention, and lymphedema management. Follow NVBDCP guidelines.",
        availableActions: [
          {
            id: "t_dec",
            text: "Initiate DEC (Diethylcarbamazine) 6 mg/kg/day in 3 divided doses × 12 days for microfilaricide effect",
            isOptimal: true,
            findings: "DEC 50 mg TDS (assuming ~50 kg) × 12 days; kills circulating microfilariae",
            scoreDelta: 2,
          },
          {
            id: "t_albendazole",
            text: "Add albendazole 400 mg daily × 7-10 days for macrofilaricide and adjuvant effect",
            isOptimal: true,
            findings: "Albendazole 400 mg daily × 7 days; added effect on adult worms",
            scoreDelta: 1,
          },
          {
            id: "t_antiinflam",
            text: "Anti-inflammatory treatment: NSAIDs (Ibuprofen) for pain and fever; may reduce Jarisch-Herxheimer-like reaction",
            isOptimal: true,
            findings: "Ibuprofen 400 mg TDS × 5-7 days for fever and inflammation control",
            scoreDelta: 1,
          },
          {
            id: "t_antibiotics",
            text: "Prescribe antibiotics to cover secondary bacterial infection (common complication): amoxicillin-clavulanate or cephalosporin",
            isOptimal: true,
            findings:
              "Amoxicillin-clavulanate 625 mg TDS × 7 days as prophylaxis against secondary cellulitis",
            scoreDelta: 1,
          },
          {
            id: "t_limb",
            text: "Limb care: elevation, compression bandaging, gentle exercise, foot hygiene to prevent secondary infection and reduce edema",
            isOptimal: true,
            findings:
              "Elevate limbs above heart level; compression stocking if available; daily limb washing with soap; avoid walking barefoot",
            scoreDelta: 2,
          },
          {
            id: "t_counseling",
            text: "Counsel on repeated treatment and long-term management; may require 2-3 cycles of DEC/albendazole",
            isOptimal: true,
            findings:
              "Monthly DEC/albendazole cycles × 2-3 more to eliminate circulating microfilariae; NVBDCP mass drug administration participation",
            scoreDelta: 1,
          },
          {
            id: "t_skip",
            text: "Treat only with antibiotics; omit antimicrofilarial drugs",
            isOptimal: false,
            findings: "Missed specific parasitic therapy; recurrences inevitable without DEC/albendazole",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Long-term follow-up of lymphatic filariasis: repeat blood smear microscopy post-treatment, ongoing limb care, prevention of recurrent attacks, and participation in NVBDCP mass drug administration program. Assess for progression to chronic hydrocele/lymphedema.",
        availableActions: [
          {
            id: "f_smear",
            text: "Repeat nocturnal blood smear at 6 weeks post-treatment to assess microfilaremia clearance",
            isOptimal: true,
            findings:
              "6-week smear: microfilariae absent or markedly reduced; complete clearance expected by 3-4 months",
            scoreDelta: 2,
          },
          {
            id: "f_clinical",
            text: "Reassess clinically at 2 weeks, 1 month, and 3 months for resolution of acute symptoms and lymphedema progression",
            isOptimal: true,
            findings:
              "Acute inflammation resolves by 1 month; leg edema may persist; chronic lymphedema stage develops over months",
            scoreDelta: 1,
          },
          {
            id: "f_mda",
            text: "Enroll in NVBDCP MDA (Mass Drug Administration) program: annual DEC + albendazole to prevent community transmission",
            isOptimal: true,
            findings:
              "Annual single-dose DEC 6 mg/kg + albendazole 400 mg during MDA campaign period",
            scoreDelta: 2,
          },
          {
            id: "f_edema",
            text: "Long-term management of lymphedema: compression stockings, leg elevation, exercise, prevention of cellulitis",
            isOptimal: true,
            findings:
              "Chronic lymphedema management; compression stocking use; daily limb care; prompt treatment of cellulitis if develops",
            scoreDelta: 2,
          },
          {
            id: "f_prevention",
            text: "Mosquito prevention measures: bed nets, repellents, environmental sanitation to reduce vector breeding",
            isOptimal: true,
            findings:
              "Use insecticide-treated bed nets; indoor residual spraying; eliminate stagnant water breeding sites",
            scoreDelta: 1,
          },
          {
            id: "f_screening",
            text: "Screen family members for microfilaremia; advice on MDA participation for all",
            isOptimal: true,
            findings:
              "Screen spouse and children for ICT/smear; counsel on community MDA importance",
            scoreDelta: 1,
          },
          {
            id: "f_hydrocele",
            text: "Monitor for progression to hydrocele (if spermatic cord involvement develops); USG assessment",
            isOptimal: true,
            findings:
              "USG follow-up at 6 months if hydrocele signs emerge; surgical referral if significantly symptomatic",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Viper Snake Bite with Coagulopathy and WBCT Positive",
    presentingComplaint: "45-year-old farmer from Maharashtra with viper bite wound, systemic bleeding manifestations, and coagulopathy",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 50,
    examTags: ["NEXT_STEP1", "Emergency_Medicine", "Toxicology"] as string[],
    patientProfile: {
      age: 45,
      sex: "Male",
      occupation: "Farmer",
      history: "Viper bite to left ankle 4 hours ago while working in field; presented late; severe systemic manifestations",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "45-year-old farmer from Maharashtra presents 4 hours post-viper bite to left ankle. Reports severe bleeding from puncture wound, bleeding from gums, hematuria, and hematemesis. Gather details of bite location, time, snake type (if known), and first aid administered.",
        availableActions: [
          {
            id: "h_bite",
            text: "Confirm bite details: time, location, activity when bitten, snake identification if possible",
            isOptimal: true,
            findings:
              "Bite at 10 AM while working in sugarcane field; left ankle; snake believed to be viper (brown); 4 hours elapsed",
            scoreDelta: 2,
          },
          {
            id: "h_symptoms",
            text: "Characterize systemic symptoms: bleeding sites, severity, time of onset",
            isOptimal: true,
            findings:
              "Bleeding from bite wound immediate; gum bleeding × 2 hours; hematuria × 1.5 hours; hematemesis × 30 min",
            scoreDelta: 2,
          },
          {
            id: "h_firstaid",
            text: "Ask about first aid measures: tourniquet application, local incision, suction, herbal remedies",
            isOptimal: true,
            findings:
              "Traditional healer consulted; local incision made at bite site; tourniquet applied tightly × 2 hours; herbal paste applied",
            scoreDelta: 1,
          },
          {
            id: "h_transfer",
            text: "Assess delay in hospitalization and reason for late presentation",
            isOptimal: true,
            findings: "Consulted local healer first; brought to hospital 4 hours after bite",
            scoreDelta: 1,
          },
          {
            id: "h_prior",
            text: "Ask about prior snake bites or allergies to medications (potential serum reaction risk)",
            isOptimal: true,
            findings: "First snake bite; no known drug allergies; family history of allergy negative",
            scoreDelta: 1,
          },
          {
            id: "h_skip",
            text: "Proceed without detailed history of bite circumstance",
            isOptimal: false,
            findings: "Missed information on venom load and time elapsed critical for ASV dosing",
            scoreDelta: -1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Physical examination of envenomated patient with systemic coagulopathy. Document bite wound, assess for local tissue damage, hemorrhagic manifestations, hemodynamic status, and neurological involvement.",
        availableActions: [
          {
            id: "e_vitals",
            text: "Record vital signs: HR, BP, RR, temperature, assess perfusion",
            isOptimal: true,
            findings:
              "HR 110/min (tachycardia), BP 100/60 mmHg (hypotensive), RR 22/min, cold extremities; signs of hypovolemia",
            scoreDelta: 2,
          },
          {
            id: "e_bite",
            text: "Examine bite wound: puncture marks, fang marks, local swelling, tissue necrosis, compartment syndrome signs",
            isOptimal: true,
            findings:
              "Two puncture marks with erythema and swelling; edema extending above knee; wound clean; no obvious compartment syndrome (pain with passive stretch not extreme)",
            scoreDelta: 2,
          },
          {
            id: "e_bleeding",
            text: "Assess hemorrhagic manifestations: gum bleeding, petechiae, ecchymosis, blood in urine/stool",
            isOptimal: true,
            findings:
              "Active gum bleeding; no petechiae on trunk; ecchymosis around bite and along limb; dark urine suggests myoglobinuria; no melena",
            scoreDelta: 2,
          },
          {
            id: "e_neuro",
            text: "Perform CNS examination: ptosis, facial muscle weakness, respiratory effort (neurotoxic viper component)",
            isOptimal: true,
            findings:
              "No ptosis; no facial weakness; respiratory effort normal; no signs of neurotoxicity (yet; may develop)",
            scoreDelta: 1,
          },
          {
            id: "e_consciousness",
            text: "Assess level of consciousness and mental status",
            isOptimal: true,
            findings: "Awake, alert, oriented; anxious; no altered consciousness",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Investigations to assess envenomation severity and guide ASV dosing: WBCT (20-minute Whole Blood Clotting Test), coagulation profile, CBC, electrolytes, creatinine, urine myoglobin/hemoglobin, and baseline CXR.",
        availableActions: [
          {
            id: "inv_wbct",
            text: "Perform WBCT (Whole Blood Clotting Test): place 2 mL blood in clean glass tube at bedside; observe for clotting",
            isOptimal: true,
            findings:
              "WBCT 20-minute test: no clotting visible at 20 minutes (remains fluid); POSITIVE test indicating severe coagulopathy",
            scoreDelta: 3,
          },
          {
            id: "inv_pt",
            text: "Check PT-INR to assess extrinsic coagulation pathway involvement (most common in viper bite)",
            isOptimal: true,
            findings:
              "PT 40 seconds (control 12 sec); INR >7; markedly prolonged indicating severe coagulopathy",
            scoreDelta: 2,
          },
          {
            id: "inv_aptt",
            text: "Check aPTT (activated partial thromboplastin time) for intrinsic pathway assessment",
            isOptimal: true,
            findings: "aPTT >120 seconds (control 28 sec); markedly prolonged; consumption coagulopathy pattern",
            scoreDelta: 2,
          },
          {
            id: "inv_fib",
            text: "Check fibrinogen level (often depleted in viper envenomation)",
            isOptimal: true,
            findings:
              "Fibrinogen 85 mg/dL (normal 200-400); markedly low; consistent with DIC/consumption coagulopathy",
            scoreDelta: 2,
          },
          {
            id: "inv_cbc",
            text: "Complete blood count: hemoglobin, platelet count for bleeding risk assessment",
            isOptimal: true,
            findings:
              "Hb 10.2 g/dL (mild anemia from bleeding); Platelets 85K (thrombocytopenia from consumption)",
            scoreDelta: 1,
          },
          {
            id: "inv_rft",
            text: "Renal function: creatinine, BUN for potential venom-induced acute kidney injury",
            isOptimal: true,
            findings: "Creatinine 1.4 mg/dL (baseline ~1.0); BUN 35 mg/dL; early renal dysfunction",
            scoreDelta: 1,
          },
          {
            id: "inv_urine",
            text: "Urine examination: dipstick for blood/myoglobin; microscopy for RBC casts",
            isOptimal: true,
            findings:
              "Dark urine; dipstick positive for blood; urinalysis shows dark granular casts; confirms myoglobinuria",
            scoreDelta: 1,
          },
          {
            id: "inv_skip",
            text: "Omit WBCT; only do lab coagulation studies",
            isOptimal: false,
            findings: "WBCT is bedside test for ASV dosing decision-making; should not be skipped in resource-limited setting",
            scoreDelta: -1,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Based on viper bite with positive WBCT at 20 minutes, markedly prolonged PT-INR, thrombocytopenia, hypofibrinogenemia, systemic bleeding manifestations, and myoglobinuria, diagnose viper envenomation with consumption coagulopathy and secondary envenoming (systemic manifestations).",
        availableActions: [
          {
            id: "d_viper",
            text: "Confirm viper envenomation with systemic manifestations: positive WBCT + coagulopathy + bleeding",
            isOptimal: true,
            findings:
              "Clinical and hematologic evidence of systemic envenomation; dry bite ruled out",
            scoreDelta: 2,
          },
          {
            id: "d_coagulopathy",
            text: "Diagnose consumption coagulopathy (DIC pattern): low fibrinogen, high PT-INR, thrombocytopenia",
            isOptimal: true,
            findings:
              "DIC-like coagulopathy from venom procoagulant activity; indicative of severe envenomation",
            scoreDelta: 2,
          },
          {
            id: "d_severity",
            text: "Classify as SEVERE envenomation (NASI guidelines: Positive WBCT + systemic manifestations) requiring full ASV course",
            isOptimal: true,
            findings:
              "Meets severe envenomation criteria: systemic hemorrhage, coagulopathy, late presentation (>2 hours)",
            scoreDelta: 2,
          },
          {
            id: "d_myoglobin",
            text: "Recognize muscle breakdown component: hematuria and myoglobinuria suggest rhabdomyolysis risk",
            isOptimal: true,
            findings:
              "Dark urine with myoglobin casts; potential acute kidney injury risk; requires aggressive hydration",
            scoreDelta: 1,
          },
          {
            id: "d_skip",
            text: "Underestimate severity; classify as moderate envenomation",
            isOptimal: false,
            findings: "Missed severe coagulopathy pattern; inadequate ASV dosing consequence",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Management of severe viper envenomation with coagulopathy per NASI guidelines: immediate ASV (polyvalent snake antivenom) administration, correction of coagulopathy, supportive care, and monitoring for complications.",
        availableActions: [
          {
            id: "t_asv",
            text: "Administer polyvalent Indian snake antivenom (ASV) IV: initial dose based on NASI guidelines for severe envenomation",
            isOptimal: true,
            findings:
              "ASV 10 vials IV (100 mL, each vial 10 mL) diluted in 100 mL normal saline, infused IV over 30 minutes; repeat WBCT and coagulation studies after 30 minutes",
            scoreDelta: 3,
          },
          {
            id: "t_asvadditional",
            text: "Plan for additional ASV doses if WBCT remains positive after first dose; repeat up to maximum 300 mL (30 vials)",
            isOptimal: true,
            findings:
              "Reassess coagulation at 30 min; if still abnormal, give additional ASV vials; continue until WBCT normalizes",
            scoreDelta: 2,
          },
          {
            id: "t_ffp",
            text: "Transfuse FFP (Fresh Frozen Plasma) or cryoprecipitate for critical fibrinogen replacement and factor replacement",
            isOptimal: true,
            findings:
              "FFP 4 units (15 mL/kg) IV stat; repeat after ASV; cryoprecipitate if fibrinogen remains <100 mg/dL",
            scoreDelta: 2,
          },
          {
            id: "t_platelets",
            text: "Transfuse platelets if count <50K (particularly if ongoing bleeding or invasive procedures needed)",
            isOptimal: true,
            findings: "Platelet transfusion if remains <50K or active bleeding worsens",
            scoreDelta: 1,
          },
          {
            id: "t_fluids",
            text: "Aggressive IV fluid resuscitation for hypovolemia and rhabdomyolysis prevention (target urine output 200 mL/hr)",
            isOptimal: true,
            findings:
              "Ringer's lactate bolus 500 mL; then 150 mL/hr to maintain urine output; monitor for pulmonary edema",
            scoreDelta: 2,
          },
          {
            id: "t_immobilization",
            text: "Immobilize affected limb: splinting to reduce venom spread; elevate at heart level",
            isOptimal: true,
            findings:
              "Left ankle splinted; limb at heart level; no tourniquet currently (already past 4 hours); remove old tourniquet if still present",
            scoreDelta: 1,
          },
          {
            id: "t_antibiotics",
            text: "Empiric antibiotics for wound infection prevention (venom itself is not directly infectious; but puncture wound contamination risk)",
            isOptimal: true,
            findings:
              "Amoxicillin-clavulanate or cephalosporin for bite wound; coverage for anaerobes if tissue necrosis develops",
            scoreDelta: 1,
          },
          {
            id: "t_skip",
            text: "Skip ASV; only give blood products",
            isOptimal: false,
            findings: "Catastrophic error; ASV is definitive therapy; blood products alone insufficient",
            scoreDelta: -3,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Intensive monitoring post-ASV: repeat WBCT and coagulation profile every 30 minutes × 2 hours, then every 2-6 hours × 24 hours. Manage delayed systemic and local complications. Define criteria for clinical cure.",
        availableActions: [
          {
            id: "f_coagulation",
            text: "Repeat WBCT at 30 min post-first ASV; if still positive, repeat ASV dose; continue monitoring every 30 min until normal",
            isOptimal: true,
            findings:
              "30-min WBCT still positive; administer additional ASV 5 vials; repeat WBCT at 60 min",
            scoreDelta: 2,
          },
          {
            id: "f_labs",
            text: "Repeat PT-INR, fibrinogen, platelet count at 30 min, 1 hr, 2 hrs, then every 4-6 hrs × 24 hrs",
            isOptimal: true,
            findings:
              "Monitor coagulation parameters until normalization and stability achieved",
            scoreDelta: 2,
          },
          {
            id: "f_bleeding",
            text: "Monitor for ongoing bleeding: measure bleeding from wound, hematuria, hemoptysis, CNS bleeding signs",
            isOptimal: true,
            findings:
              "Bleeding from puncture wound should decrease post-ASV; hematuria and gum bleeding reassessed hourly",
            scoreDelta: 1,
          },
          {
            id: "f_neuro",
            text: "Serial neurological examination for development of neurotoxic manifestations (ptosis, bulbar weakness, respiratory paralysis)",
            isOptimal: true,
            findings: "Neurotoxicity not evident acutely; continue monitoring; escalate care if develops",
            scoreDelta: 2,
          },
          {
            id: "f_rhabdo",
            text: "Monitor for rhabdomyolysis complications: maintain high urine output (200+ mL/hr); check CK, uric acid, calcium trends",
            isOptimal: true,
            findings:
              "Aggressive hydration continued; target urine output 200 mL/hr; monitor for acute kidney injury; early dialysis if creatinine worsens",
            scoreDelta: 2,
          },
          {
            id: "f_compartment",
            text: "Assess for compartment syndrome development: pain progression, muscle tenderness, paresthesia; measure compartment pressures if clinical suspicion high",
            isOptimal: true,
            findings:
              "Monitor ankle/leg compartment; no current signs of compartment syndrome; will reassess 12-24 hours post-bite",
            scoreDelta: 1,
          },
          {
            id: "f_outcomes",
            text: "Define ASV effectiveness criteria: WBCT normalization within 6-12 hours post-first dose; coagulation parameters corrected; bleeding controlled",
            isOptimal: true,
            findings:
              "Target: WBCT normal by 2-3 hours, PT-INR <2, fibrinogen >150 mg/dL, platelets >100K, cessation of active bleeding",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Rabies Post-Exposure Prophylaxis Category III Dog Bite with Delay",
    presentingComplaint: "8-year-old child with multiple dog bite wounds and delayed presentation for rabies prophylaxis",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "Pediatrics", "Infectious_Disease"] as string[],
    patientProfile: {
      age: 8,
      sex: "Male",
      occupation: "Student",
      history: "Dog bite 8 days ago; presented with cellulitis; now requires urgent rabies PEP despite late presentation",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "8-year-old boy with dog bite injuries sustained 8 days ago while playing in neighborhood. Multiple bites on left arm and leg. Dog status (vaccination unknown, behavior changes, whereabouts) crucial. Child now presents with cellulitis around bite sites. Gather complete bite details and dog information.",
        availableActions: [
          {
            id: "h_bite",
            text: "Document bite details: time, date, location on body, number of bites, depth of wounds",
            isOptimal: true,
            findings:
              "Dog bite 8 days ago; multiple wounds on left forearm and calf; penetrating puncture wounds",
            scoreDelta: 2,
          },
          {
            id: "h_dog",
            text: "Assess dog status: breed, vaccination status, clinical signs of rabies, current whereabouts, access to medical history",
            isOptimal: true,
            findings:
              "Stray dog; vaccination status unknown; dog not captured; unknown behavioral change; cannot be quarantined for observation",
            scoreDelta: 2,
          },
          {
            id: "h_wound",
            text: "Ask about wound characteristics: severity, bleeding, contamination, first aid measures",
            isOptimal: true,
            findings:
              "Deep puncture wounds; bled moderately; child washed with soap and water at home; no medical first aid applied",
            scoreDelta: 1,
          },
          {
            id: "h_delay",
            text: "Understand reason for 8-day delay: why wasn't PEP initiated immediately",
            isOptimal: true,
            findings:
              "Family unaware of rabies risk; thought local wound care sufficient; brought to hospital only after cellulitis developed",
            scoreDelta: 1,
          },
          {
            id: "h_cellulitis",
            text: "Characterize cellulitis: onset, progression, fever, systemic signs",
            isOptimal: true,
            findings:
              "Cellulitis started Day 3; fever × 2 days; swelling, erythema progressing; this triggered hospital visit",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Physical examination of 8-year-old with multiple dog bite wounds and cellulitis. Assess wound depth, extent of cellulitis, regional lymphadenopathy, and systemic signs of infection or early rabies prodrome.",
        availableActions: [
          {
            id: "e_vitals",
            text: "Record vital signs: temperature, HR, RR, BP",
            isOptimal: true,
            findings: "Temp 37.8°C (low fever), HR 96/min, RR 20/min, BP 100/62 mmHg",
            scoreDelta: 1,
          },
          {
            id: "e_wounds",
            text: "Examine bite wounds: number, location, depth, wound characteristics, signs of healing",
            isOptimal: true,
            findings:
              "3 puncture wounds on left forearm; 2 on left calf; clean margins; minimal purulent drainage; early eschar formation on edges",
            scoreDelta: 2,
          },
          {
            id: "e_cellulitis",
            text: "Assess cellulitis: extent, erythema borders, warmth, pus, fluctuance, compartment signs",
            isOptimal: true,
            findings:
              "Erythematous cellulitis extending 8 cm around forearm wounds; warm, non-fluctuant; no compartment syndrome signs; lymphangitis streak visible",
            scoreDelta: 2,
          },
          {
            id: "e_lymph",
            text: "Examine regional lymph nodes: cervical, axillary, inguinal for size, tenderness",
            isOptimal: true,
            findings: "Left axillary lymphadenopathy (1-2 cm), tender, mobile; cervical nodes normal",
            scoreDelta: 1,
          },
          {
            id: "e_neuro",
            text: "Perform neurological examination: mental status, facial expression, swallowing, respiratory effort (early rabies signs)",
            isOptimal: true,
            findings:
              "Alert, cooperative; normal facial expression; normal swallowing; normal respiratory effort; no hydrophobia or aerophobia noted",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Limited investigations needed given clinical presentation. Wound culture for cellulitis management. Complete blood count. Assess category of bite exposure (Category III) and rabies risk stratification.",
        availableActions: [
          {
            id: "inv_culture",
            text: "Culture wound drainage for bacterial identification and antibiotic sensitivities",
            isOptimal: true,
            findings: "Culture swab from forearm wound; pending organism identification",
            scoreDelta: 1,
          },
          {
            id: "inv_cbc",
            text: "Complete blood count to assess severity of systemic infection response",
            isOptimal: true,
            findings: "WBC 12,000 (mild leukocytosis); Hb 13.5 g/dL; platelets 280K",
            scoreDelta: 1,
          },
          {
            id: "inv_rabies",
            text: "Document WHO rabies exposure category: Category III (bite with skin perforation)",
            isOptimal: true,
            findings: "Category III exposure: multiple bite wounds with skin penetration; highest risk",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Confirmed Category III rabies exposure from stray dog bite 8 days ago. Cellulitis complicating wounds. PEP must be initiated despite delay per NRCP (National Rabies Control Program) guidelines. Rabies is nearly 100% fatal once clinical symptoms appear; no contraindication to PEP even after 8 days if no symptoms.",
        availableActions: [
          {
            id: "d_category",
            text: "Confirm WHO Category III exposure: skin penetration (not just contact), from stray dog with unknown vaccination status",
            isOptimal: true,
            findings: "Multiple penetrating bite wounds; highest risk category; mandates immediate PEP and RIG",
            scoreDelta: 2,
          },
          {
            id: "d_risk",
            text: "Assess rabies risk as HIGH: stray dog, unknown vaccination, unknown status, cannot be quarantined",
            isOptimal: true,
            findings:
              "Cannot observe dog for 10 days; cannot assess for rabies; high-risk incident; PEP immediately indicated",
            scoreDelta: 2,
          },
          {
            id: "d_timing",
            text: "Note that 8-day delay is beyond ideal window but PEP NOT contraindicated; rabies incubation can be weeks to months",
            isOptimal: true,
            findings: "Begin PEP urgently; rabies hasn't manifested clinically yet; PEP effective even at this stage",
            scoreDelta: 2,
          },
          {
            id: "d_cellulitis",
            text: "Acknowledge cellulitis secondary; manage with antibiotics concurrently with rabies PEP",
            isOptimal: true,
            findings:
              "Cellulitis from wound contamination; separate issue; treatable with antibiotics while PEP ongoing",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Rabies post-exposure prophylaxis per NRCP guidelines: wound care with immediate scrubbing and viricidal agents, intramuscular rabies vaccine series, rabies immunoglobulin (RIG) administration per dose regimen, antibiotic coverage for cellulitis.",
        availableActions: [
          {
            id: "t_wound",
            text: "Immediate wound care: thorough scrubbing with soap and water, then viricidal agents (povidone-iodine 5% or alcohol 40-70%)",
            isOptimal: true,
            findings:
              "Wounds cleaned with soap and water × 5 minutes; povidone-iodine 5% applied to all puncture sites; repeat daily × 5 days",
            scoreDelta: 2,
          },
          {
            id: "t_rig",
            text: "Administer rabies immunoglobulin (RIG) intramuscularly as soon as possible: 20 IU/kg (RIG is human or equine)",
            isOptimal: true,
            findings:
              "Body weight ~25 kg; RIG dose = 25 × 20 = 500 IU; human RIG IM (preferred over equine); half infiltrated around bite sites, half IM in deltoid",
            scoreDelta: 3,
          },
          {
            id: "t_vaccine",
            text: "Initiate rabies vaccine (inactivated, cell-culture derived): 0.5 mL IM on Days 0, 3, 7, 14, 28 per NRCP post-exposure schedule",
            isOptimal: true,
            findings:
              "Day 0 (today): vaccine 0.5 mL IM in deltoid, left arm (contralateral to RIG if possible); repeat on Days 3, 7, 14, 28",
            scoreDelta: 3,
          },
          {
            id: "t_antibiotics",
            text: "Antibiotics for cellulitis: broad-spectrum agent covering common skin flora and anaerobes",
            isOptimal: true,
            findings:
              "Amoxicillin-clavulanate 375 mg TDS × 7-10 days (oral, outpatient); or cephalosporin if penicillin-allergic",
            scoreDelta: 1,
          },
          {
            id: "t_pain",
            text: "Analgesics and local wound care: paracetamol for fever and discomfort; keep wounds clean and dry",
            isOptimal: true,
            findings:
              "Paracetamol 15 mg/kg as needed; wound dressing change daily; sun protection for developing scars",
            scoreDelta: 1,
          },
          {
            id: "t_skip",
            text: "Defer PEP due to late presentation",
            isOptimal: false,
            findings: "Fatal error; rabies is nearly 100% fatal; PEP should never be withheld even after 8 days",
            scoreDelta: -3,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Close follow-up to ensure completion of rabies vaccine series and monitor for any signs of rabies development. Counsel on vaccine adherence, wound care, and when to seek urgent help.",
        availableActions: [
          {
            id: "f_vaccine",
            text: "Ensure adherence to 5-dose vaccine schedule: Day 0, 3, 7, 14, 28; track completion",
            isOptimal: true,
            findings:
              "Schedule reminder SMS/calls to parents for Days 3, 7, 14, 28 doses; verify administration at clinic visits",
            scoreDelta: 2,
          },
          {
            id: "f_cellulitis",
            text: "Monitor cellulitis resolution: repeat examination at 48-72 hours; assess antibiotic response",
            isOptimal: true,
            findings:
              "Cellulitis should improve with antibiotics; no fever, erythema regression expected within 3-5 days",
            scoreDelta: 1,
          },
          {
            id: "f_rabies",
            text: "Watch for any signs of rabies development (hydrophobia, aerophobia, unusual behavior, behavioral changes, excessive salivation)",
            isOptimal: true,
            findings:
              "Counsel family on rabies prodromal signs; seek immediate medical attention if any develop; rabies rare after complete PEP",
            scoreDelta: 2,
          },
          {
            id: "f_education",
            text: "Educate family on rabies prevention: avoid stray dogs, handle animal bites immediately, importance of PEP timeliness in future",
            isOptimal: true,
            findings:
              "Provide rabies awareness pamphlet; counsel on when to seek PEP (ANY bite, scratch, or exposure to potentially rabid animal)",
            scoreDelta: 1,
          },
          {
            id: "f_outcomes",
            text: "Document completion of PEP series; provide certificate; advise booster after 1 year if re-exposed",
            isOptimal: true,
            findings:
              "Certificate given on completion of 5-dose series; rabies immunity achieved; booster available if future exposure",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Acute Cholera in Flood Setting with Severe Dehydration and Shock",
    presentingComplaint: "5-year-old child with severe watery diarrhea (rice-water stools) and acute dehydration after flooding",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 45,
    examTags: ["NEXT_STEP1", "Pediatrics", "Emergency_Medicine"] as string[],
    patientProfile: {
      age: 5,
      sex: "Female",
      occupation: "Student",
      history: "Acute onset watery diarrhea × 6 hours in flood-affected area; severe dehydration signs; family members also affected",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "5-year-old girl with acute onset of profuse watery diarrhea for 6 hours in flood-affected district. Reports rice-water stools (characteristic of cholera), vomiting, and rapid deterioration. Lives in area with contaminated water supply due to flooding. Assess diarrheal onset, volume loss, and contacts.",
        availableActions: [
          {
            id: "h_onset",
            text: "Document diarrheal onset: time, symptoms, whether explosive or progressive",
            isOptimal: true,
            findings: "Sudden onset 6 hours ago; first stool watery, clear; rice-water appearance",
            scoreDelta: 2,
          },
          {
            id: "h_volume",
            text: "Estimate stool volume: child unable to quantify; ask parent for number and volume of stools",
            isOptimal: true,
            findings:
              "Approximately 10-12 watery stools in 6 hours; last stool 30 minutes ago; large volume each time",
            scoreDelta: 2,
          },
          {
            id: "h_vomit",
            text: "Ask about vomiting: presence, volume, timing relative to diarrhea",
            isOptimal: true,
            findings: "Vomiting present; 3-4 episodes starting 2 hours after diarrhea began",
            scoreDelta: 1,
          },
          {
            id: "h_urine",
            text: "Assess urine output: frequency, color, last micturition time",
            isOptimal: true,
            findings: "No urine passed in last 3 hours; previous urine concentrated (dark yellow)",
            scoreDelta: 1,
          },
          {
            id: "h_fluid",
            text: "Ask about fluid intake during illness: any oral rehydration attempted",
            isOptimal: true,
            findings:
              "Some ORS given at home (limited quantity); child unable to drink much due to vomiting",
            scoreDelta: 1,
          },
          {
            id: "h_contacts",
            text: "Inquire about illness in family/neighbors: multiple cases suggest outbreak",
            isOptimal: true,
            findings: "Mother has similar symptoms × 3 hours; 2 neighbors also affected; cluster suspicious for outbreak",
            scoreDelta: 2,
          },
          {
            id: "h_water",
            text: "Ask about water source: contamination from flooding or sewage",
            isOptimal: true,
            findings:
              "Water supply contaminated by flood; drinking water from tube wells uncertain safety; food also questionable",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Physical examination of severely dehydrated 5-year-old with acute cholera. Assess degree of dehydration (WHO Plan C likely), signs of shock, vital signs, and assess for complications.",
        availableActions: [
          {
            id: "e_vitals",
            text: "Record vital signs: HR, RR, BP, temperature, assess perfusion",
            isOptimal: true,
            findings:
              "HR 140/min (severe tachycardia), RR 32/min, BP 75/45 mmHg (hypotensive), Temp 36.8°C (normal); cool extremities",
            scoreDelta: 2,
          },
          {
            id: "e_dehydration",
            text: "Assess degree of dehydration: skin turgor, mucous membranes, anterior fontanelle, eyes, mental status",
            isOptimal: true,
            findings:
              "Skin turgor markedly reduced (skin tenting × >2 seconds); mucous membranes dry; sunken eyes; irritability; weak cry",
            scoreDelta: 3,
          },
          {
            id: "e_shock",
            text: "Assess for hypovolemic shock signs: cold extremities, weak pulses, altered perfusion, altered mental status",
            isOptimal: true,
            findings:
              "Cold extremities, weak radial pulse (barely palpable), capillary refill >2 seconds; lethargy despite not septic",
            scoreDelta: 2,
          },
          {
            id: "e_abdomen",
            text: "Abdominal examination: distention, tenderness, bowel sounds, rectal tone",
            isOptimal: true,
            findings:
              "Soft, non-distended abdomen; active bowel sounds; no tenderness; perianal skin inflamed from diarrhea",
            scoreDelta: 1,
          },
          {
            id: "e_neuro",
            text: "Neurological assessment: level of consciousness, irritability, or lethargy",
            isOptimal: true,
            findings:
              "Lethargic (response only to pain); indicates severe dehydration; capillary refill delayed",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Limited investigations in emergency context: confirm cholera diagnosis (stool culture, rapid test if available), assess electrolyte abnormalities and renal function. Establish baseline for fluid management monitoring.",
        availableActions: [
          {
            id: "inv_stool",
            text: "Stool culture on thiosulfate-citrate-bile-salts (TCBS) medium; microscopy for coma-shaped bacilli",
            isOptimal: true,
            findings:
              "Stool sample sent; culture pending (24-48 hr); microscopy will show gram-negative curved rods",
            scoreDelta: 1,
          },
          {
            id: "inv_rapid",
            text: "Rapid cholera test (if available at hospital): immunochromatographic test on stool",
            isOptimal: true,
            findings: "Rapid test positive for Vibrio cholerae O1; presumptive cholera case",
            scoreDelta: 2,
          },
          {
            id: "inv_electrolyte",
            text: "Serum electrolytes: sodium, potassium, chloride, bicarbonate (assess for metabolic acidosis)",
            isOptimal: true,
            findings:
              "Na 130 mEq/L (hyponatremia), K 2.8 mEq/L (hypokalemia), Cl 98 mEq/L, HCO3 12 mEq/L (metabolic acidosis)",
            scoreDelta: 2,
          },
          {
            id: "inv_rft",
            text: "Renal function: creatinine, BUN to assess acute kidney injury risk",
            isOptimal: true,
            findings:
              "Creatinine 1.2 mg/dL (elevated for age; baseline ~0.5), BUN 45 mg/dL (elevated); indicates dehydration-induced AKI risk",
            scoreDelta: 1,
          },
          {
            id: "inv_skip",
            text: "Skip investigations; diagnose and treat based on clinical grounds (acceptable in resource-limited settings during outbreaks)",
            isOptimal: true,
            findings: "Presumptive cholera case; begin treatment immediately; culture/serology confirmatory",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Clinical diagnosis of acute cholera: profuse watery (rice-water) diarrhea and vomiting causing severe dehydration and shock in flood-affected area with outbreak cluster. WHO Plan C (severe dehydration) indicated. Confirmed by stool rapid test.",
        availableActions: [
          {
            id: "d_cholera",
            text: "Diagnose acute cholera: characteristic rice-water diarrhea, severe dehydration, outbreak context, rapid test positive",
            isOptimal: true,
            findings:
              "Clinical diagnosis: profuse watery diarrhea, rapid onset, severe dehydration, flood setting; rapid test confirms",
            scoreDelta: 3,
          },
          {
            id: "d_severity",
            text: "Classify as WHO Plan C (Severe Dehydration): >10% fluid loss, signs of shock, altered mental status",
            isOptimal: true,
            findings:
              "Estimated fluid loss >10%; hypotension, weak pulses, lethargy; requires immediate IV rehydration per Plan C",
            scoreDelta: 2,
          },
          {
            id: "d_shock",
            text: "Recognize hypovolemic shock: hypotension, weak pulses, decreased perfusion; life-threatening",
            isOptimal: true,
            findings:
              "Clear signs of hypovolemic shock; immediate aggressive IV fluid resuscitation required",
            scoreDelta: 2,
          },
          {
            id: "d_complications",
            text: "Anticipate complications: severe electrolyte abnormalities, acute kidney injury, metabolic acidosis",
            isOptimal: true,
            findings:
              "Already has hypokalemia, hyponatremia, and metabolic acidosis; monitor for worsening AKI",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Emergency fluid resuscitation per WHO Plan C for severe cholera: rapid IV rehydration with Ringer's lactate, electrolyte replacement, antibiotic therapy (doxycycline or azithromycin), and continuous oral rehydration as tolerated.",
        availableActions: [
          {
            id: "t_iv",
            text: "Rapid IV bolus of Ringer's lactate: 100 mL/kg over 3-6 hours (target urine output 0.5-1 mL/kg/hr)",
            isOptimal: true,
            findings:
              "Child weight ~17 kg; bolus = 1700 mL RL; start two large-bore IVs; infuse 500 mL stat over 30 minutes, reassess",
            scoreDelta: 3,
          },
          {
            id: "t_electrolyte",
            text: "Add potassium and bicarbonate to IV fluids (or in ORS): address hypokalemia and acidosis",
            isOptimal: true,
            findings:
              "KCl 20 mEq/L in IV fluids; sodium bicarbonate 1-2 mmol/kg IV for severe acidosis (pH <7.2)",
            scoreDelta: 2,
          },
          {
            id: "t_ors",
            text: "Initiate or continue ORS once vomiting controlled and patient alert: WHO low-osmolarity ORS (sodium 75 mEq/L)",
            isOptimal: true,
            findings:
              "Start ORS 10-20 mL/kg/hr once IV bolus stabilizes; increase gradually as tolerated; continue until diarrhea stops",
            scoreDelta: 2,
          },
          {
            id: "t_antibiotics",
            text: "Antibiotics to shorten diarrhea duration and reduce transmission: doxycycline or azithromycin",
            isOptimal: true,
            findings:
              "Doxycycline 2-4 mg/kg/day × 3 days (or azithromycin 10 mg/kg daily × 3 days for children; doxycycline contraindicated <8 yr traditionally but acceptable in severe cholera)",
            scoreDelta: 2,
          },
          {
            id: "t_monitoring",
            text: "Continuous monitoring: HR, BP, urine output, stool output, weight trends, electrolytes",
            isOptimal: true,
            findings:
              "Insert Foley catheter to monitor urine output; target 0.5-1 mL/kg/hr; hourly vitals × 6-8 hr then q4h",
            scoreDelta: 2,
          },
          {
            id: "t_skip",
            text: "Treat with ORS alone without IV fluids",
            isOptimal: false,
            findings:
              "Fatal error in Plan C; shock requires urgent IV therapy; ORS inadequate for severe dehydration",
            scoreDelta: -3,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Intensive monitoring and reassessment during rehydration: transition from Plan C to maintenance fluids when stable, ongoing electrolyte monitoring, infection control measures to prevent transmission in outbreak setting, public health notification.",
        availableActions: [
          {
            id: "f_reassess",
            text: "Reassess hydration status at 30 min, 1 hr, 3 hrs post-initial bolus; adjust fluid plan if inadequate response",
            isOptimal: true,
            findings:
              "At 1 hr: BP improved to 90/50, HR decreased to 110, skin turgor better; continue IV at slower rate for ongoing losses",
            scoreDelta: 2,
          },
          {
            id: "f_labs",
            text: "Repeat electrolytes at 4 hours and 12 hours to guide K+ and Na+ replacement",
            isOptimal: true,
            findings: "Monitor sodium, potassium trends; adjust replacement accordingly",
            scoreDelta: 1,
          },
          {
            id: "f_diet",
            text: "Resume age-appropriate feeding once vomiting controlled: milk, soft foods (breastfeeding if applicable)",
            isOptimal: true,
            findings:
              "Breast feeding encouraged if applicable; soft foods (rice, yogurt) introduced after 24 hours",
            scoreDelta: 1,
          },
          {
            id: "f_infection",
            text: "Infection control: isolate patient, use contact precautions, ensure hand hygiene, safe waste disposal",
            isOptimal: true,
            findings:
              "Isolation ward assignment; staff PPE; segregated stool handling; disinfection of bed linen",
            scoreDelta: 2,
          },
          {
            id: "f_public",
            text: "Public health notification: report confirmed cholera to district health authority; initiate outbreak investigation",
            isOptimal: true,
            findings:
              "Notify authorities; implement water safety measures; coordinate vaccination campaign if indicated",
            scoreDelta: 1,
          },
          {
            id: "f_outcomes",
            text: "Define treatment endpoints: resolution of diarrhea, maintenance of oral intake, safe discharge with follow-up hygiene counseling",
            isOptimal: true,
            findings:
              "Discharge typically 24-48 hours after diarrhea cessation and stable hydration; counsel on water safety",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Leprosy Borderline Lepromatous Form with Neuritis and Delayed Diagnosis",
    presentingComplaint: "28-year-old male with multiple skin patches, nerve thickening, and delayed leprosy diagnosis after 6 months",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "NEET_PG", "NLEP_Protocol"] as string[],
    patientProfile: {
      age: 28,
      sex: "Male",
      occupation: "Laborer",
      history: "Multiple hypopigmented patches × 6 months, nerve thickening, delayed diagnosis; now presenting with Type 1 reaction signs",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "28-year-old male laborer with hypopigmented skin patches noted 6 months ago, initially dismissed as fungal infection. Recent onset of pain in skin lesions, nerve tenderness, and numbness in patches. Family from endemic district; delayed diagnosis. Gather details of symptom progression and prior treatment attempts.",
        availableActions: [
          {
            id: "h_lesions",
            text: "Characterize skin lesions: onset, number, distribution, sensory loss, progression",
            isOptimal: true,
            findings:
              "Started with 1-2 patches on face 6 months ago; slowly increased to 5-6 patches on face, trunk, arms; hypopigmented; well-defined",
            scoreDelta: 2,
          },
          {
            id: "h_sensory",
            text: "Ask about sensory loss: anesthesia in patches, loss of temperature/pain sensation",
            isOptimal: true,
            findings: "Patches have reduced sensation; noticed burning injury on hand unnoticed while working",
            scoreDelta: 2,
          },
          {
            id: "h_nerves",
            text: "Inquire about nerve involvement: pain in nerves, weakness, tingling in hands/feet",
            isOptimal: true,
            findings:
              "Left ulnar nerve tender × 2 weeks; some numbness in little and ring fingers; no weakness yet",
            scoreDelta: 2,
          },
          {
            id: "h_reaction",
            text: "Ask about Type 1 reaction signs: recent inflammation of lesions, nerve pain, systemic symptoms",
            isOptimal: true,
            findings: "Patches became red and inflamed × 1 week; nerve pain acute onset; mild fever, malaise",
            scoreDelta: 2,
          },
          {
            id: "h_prior",
            text: "Ask about prior treatment: antifungals, antibiotics, visits to other health workers",
            isOptimal: true,
            findings: "Treated with antifungal creams at private clinic × 3 months without improvement; no antibiotics given",
            scoreDelta: 1,
          },
          {
            id: "h_contact",
            text: "Assess household contacts: family size, other cases, nutritional status",
            isOptimal: true,
            findings: "Lives with mother and siblings; no known leprosy cases in family; lower socioeconomic status",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Physical examination of suspected leprosy case: characterize skin lesions, perform sensory testing, palpate peripheral nerves (thickening, tenderness), assess for motor weakness and deformities.",
        availableActions: [
          {
            id: "e_vitals",
            text: "Record vital signs: temperature, assess for systemic inflammation",
            isOptimal: true,
            findings: "Temp 37.2°C (mild fever); HR 88/min; no significant systemic signs",
            scoreDelta: 1,
          },
          {
            id: "e_lesions",
            text: "Examine skin lesions: number, size, color, borders, distribution, sensory testing (pinprick, touch, temperature)",
            isOptimal: true,
            findings:
              "5-6 hypopigmented patches (0.5-3 cm); well-demarcated borders; sensory loss in all patches (anesthesia to pinprick); no sensation loss beyond patch borders",
            scoreDelta: 2,
          },
          {
            id: "e_nerves",
            text: "Palpate peripheral nerves for thickening and tenderness: ulnar, median, radial, peroneal, posterior tibial",
            isOptimal: true,
            findings:
              "Left ulnar nerve thickened and tender; mild thickening of bilateral radial and peroneal nerves; no motor weakness currently",
            scoreDelta: 3,
          },
          {
            id: "e_sensation",
            text: "Test sensation in nerve distribution areas: pinprick, light touch, temperature",
            isOptimal: true,
            findings:
              "Anesthesia in left ulnar (little and ring finger dorsal surface); mild sensory loss in radial distribution",
            scoreDelta: 1,
          },
          {
            id: "e_muscle",
            text: "Assess intrinsic hand muscles for atrophy or weakness (ulnar nerve involvement assessment)",
            isOptimal: true,
            findings: "No obvious wasting; grip strength normal; intrinsics strength preserved (early stage)",
            scoreDelta: 1,
          },
          {
            id: "e_eyes",
            text: "Examine eyes for lagophthalmos, ectropion (facial nerve involvement in BL forms)",
            isOptimal: true,
            findings: "No lagophthalmos; normal eyelid closure; facial sensation normal",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Investigations to confirm leprosy diagnosis: slit-skin smear microscopy for acid-fast bacilli (AFB), skin biopsy if smear negative, confirm classification (Borderline Lepromatous), and baseline assessments for MDT.",
        availableActions: [
          {
            id: "inv_smear",
            text: "Slit-skin smear microscopy: take smears from multiple lesions and normal-looking skin, stain with Fite-Faraco or Auramine-rhodamine, count AFB",
            isOptimal: true,
            findings:
              "Multiple sites sampled (5-6 lesions); Fite-Faraco stain: AFB found in all lesions (2-4+ smear positivity); morphology consistent with M. leprae",
            scoreDelta: 3,
          },
          {
            id: "inv_biopsy",
            text: "Skin biopsy (if smear negative or uncertain): histopathology for inflammation pattern, AFB, classification",
            isOptimal: true,
            findings:
              "Biopsy from one lesion: granulomatous inflammation with epithelioid histiocytes; AFB numerous; pattern consistent with BL (borderline lepromatous) type",
            scoreDelta: 2,
          },
          {
            id: "inv_cbc",
            text: "Complete blood count for baseline assessment before MDT",
            isOptimal: true,
            findings: "Hb 13.2 g/dL, WBC 7500, platelets 220K; normal",
            scoreDelta: 1,
          },
          {
            id: "inv_lft",
            text: "Liver function tests and renal function (baseline for MDT drug monitoring)",
            isOptimal: true,
            findings:
              "ALT 28 U/L, AST 30 U/L, bilirubin 0.8 mg/dL, creatinine 0.9 mg/dL; all normal",
            scoreDelta: 1,
          },
          {
            id: "inv_contacts",
            text: "Arrange contact survey and screening of household members for early case detection",
            isOptimal: true,
            findings: "ASHA worker assigned; household contacts to be screened; no cases detected initially",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Diagnosis of Leprosy Borderline Lepromatous (BL) form: confirmed by slit-skin smear positivity (2-4+), multiple lesions with sensory loss, peripheral nerve thickening and neuritis, and histopathology showing granulomatous inflammation with numerous AFB. Type 1 reaction (reversal reaction) present.",
        availableActions: [
          {
            id: "d_leprosy",
            text: "Confirm diagnosis of leprosy: positive AFB smear, clinical signs, nerve involvement, histology",
            isOptimal: true,
            findings:
              "Definitive diagnosis: AFB-positive smear, multiple lesions, sensory loss, nerve thickening",
            scoreDelta: 2,
          },
          {
            id: "d_bl",
            text: "Classify as Borderline Lepromatous (BL): smear-positive (2-4+), moderate number of lesions, nerve involvement, histology consistent with BL",
            isOptimal: true,
            findings:
              "BL form: smear 2-4+, 5-6 lesions, clear sensory loss, moderate nerve involvement, granulomas with many bacilli",
            scoreDelta: 2,
          },
          {
            id: "d_reaction",
            text: "Recognize Type 1 reaction (reversal reaction): acute inflammation of lesions and nerves indicating immune response, common in BL",
            isOptimal: true,
            findings:
              "Recent acute inflammation of patches and nerve pain; consistent with Type 1 reaction occurring in BL form",
            scoreDelta: 2,
          },
          {
            id: "d_disability",
            text: "Assess current disability: Grade 0-2 scale; identify functional impact of neuritis",
            isOptimal: true,
            findings:
              "Grade 1 disability: sensory loss in affected areas; early motor involvement risk; needs intervention",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "MDT-MB (Multi-Drug Therapy Multibacillary) for Borderline Lepromatous leprosy per NLEP guidelines: 12-month regimen with rifampicin, dapsone, clofazimine, and steroids for Type 1 reaction management.",
        availableActions: [
          {
            id: "t_mdt",
            text: "Initiate MDT-MB (12-month regimen): Rifampicin 600 mg monthly supervised + daily dapsone 100 mg + monthly clofazimine 300 mg + daily clofazimine 50 mg",
            isOptimal: true,
            findings:
              "MDT-MB started: Rifampicin 600 mg supervised dose at clinic monthly; dapsone 100 mg + clofazimine 50 mg daily at home × 12 months; clofazimine 300 mg monthly supervised dose",
            scoreDelta: 3,
          },
          {
            id: "t_steroids",
            text: "Manage Type 1 reaction with prednisolone: 0.5-1 mg/kg/day, taper over 12-16 weeks",
            isOptimal: true,
            findings:
              "Prednisolone 20 mg daily (for ~25 kg = 0.8 mg/kg) × 4 weeks, then taper by 2.5 mg every 2 weeks; continue if neuritis worsens",
            scoreDelta: 2,
          },
          {
            id: "t_nerve",
            text: "Manage neuritis: analgesics, nerve rest, immobilization if significant inflammation; monitor for nerve function deterioration",
            isOptimal: true,
            findings:
              "Ibuprofen 400 mg TDS for pain; support/protection for ulnar nerve area; regular nerve palpation to detect worsening",
            scoreDelta: 2,
          },
          {
            id: "t_monitoring",
            text: "Monthly clinic visits for supervised therapy, clinical assessment, complications monitoring",
            isOptimal: true,
            findings:
              "Monthly visits to assess therapeutic response, drug side effects, reaction severity, nerve function",
            scoreDelta: 1,
          },
          {
            id: "t_counseling",
            text: "Counsel on medication adherence, reaction management expectations, disability prevention, social reintegration",
            isOptimal: true,
            findings:
              "Comprehensive counseling on 12-month MDT duration, expected cure, nerve care importance; psychosocial support",
            scoreDelta: 1,
          },
          {
            id: "t_skip",
            text: "Defer MDT; treat only with steroids for Type 1 reaction",
            isOptimal: false,
            findings: "Fatal error; MDT is definitive therapy; steroids only adjunctive for reaction management",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Long-term follow-up of MDT-treated leprosy: monthly clinical assessment during MDT, post-MDT surveillance, disability prevention and management, contact tracing and preventive therapy for household members.",
        availableActions: [
          {
            id: "f_mdt",
            text: "Supervised MDT monthly: assess clinical response, bacillary load reduction (repeat smear at 3, 6, 12 months)",
            isOptimal: true,
            findings:
              "Monthly supervised doses; smear repeat at 3 months (should show reduction); 6-month smear preferably negative",
            scoreDelta: 2,
          },
          {
            id: "f_reaction",
            text: "Monitor for Type 1 and Type 2 reactions throughout MDT and during post-MDT surveillance; manage with steroids as needed",
            isOptimal: true,
            findings:
              "Type 1 reaction expected to improve with prednisolone; monitor for Type 2 reaction (ENL) if develops",
            scoreDelta: 2,
          },
          {
            id: "f_nerve",
            text: "Serial nerve assessment: monitor for functional impairment, consider surgical intervention if severe compression (e.g., ulnar nerve decompression if worsening)",
            isOptimal: true,
            findings:
              "Monthly nerve examination; if deteriorating despite steroids, refer for surgical consultation",
            scoreDelta: 1,
          },
          {
            id: "f_disability",
            text: "Disability prevention: regular foot/hand care, prevent ulcers, provide supportive devices if needed",
            isOptimal: true,
            findings:
              "Daily foot/hand inspection counseling; heel protection; prevention of calluses and ulcers during ongoing therapy",
            scoreDelta: 2,
          },
          {
            id: "f_contacts",
            text: "Complete household contact screening; offer BCG to non-leprosy contacts; INH prophylaxis if indicated (household contacts under 5 or immunocompromised)",
            isOptimal: true,
            findings:
              "Contacts screened; no skin lesions detected; BCG offered; contacts advised on self-examination",
            scoreDelta: 1,
          },
          {
            id: "f_release",
            text: "Define cure criteria: sputum/lesion smear negative AND completion of MDT course; release from treatment",
            isOptimal: true,
            findings:
              "Target: smear negativity by 12 months + complete MDT course = cure declaration; post-MDT surveillance × 5 years",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "HIV/AIDS with Pneumocystis Pneumonia (PCP) and CD4 <100",
    presentingComplaint: "30-year-old truck driver with severe dyspnea, dry cough, fever, and CD4 count 85 cells/μL",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 45,
    examTags: ["NEXT_STEP1", "NEET_PG", "NACO_Guidelines"] as string[],
    patientProfile: {
      age: 30,
      sex: "Male",
      occupation: "Truck driver",
      history: "Known HIV for 2 years, not on ART; now CD4 <100; presents with PCP opportunistic infection",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "30-year-old truck driver with known HIV for 2 years (never on ART). Now presents with progressive dyspnea × 2 weeks, dry persistent cough, fever, night sweats, and fatigue. No prior opportunistic infections. Exposure history: heterosexual contact. Gather details of immune status, prior infections, and current symptomatology.",
        availableActions: [
          {
            id: "h_hiv",
            text: "Confirm HIV history: time of diagnosis, prior CD4 counts, why not on ART",
            isOptimal: true,
            findings:
              "HIV diagnosed 2 years ago; patient aware but never initiated ART; no prior counseling; CD4 history unknown",
            scoreDelta: 2,
          },
          {
            id: "h_respiratory",
            text: "Characterize respiratory symptoms: cough type, sputum, dyspnea onset and progression, SpO2 if measured",
            isOptimal: true,
            findings:
              "Dry cough × 2 weeks (non-productive); dyspnea insidious onset, progressively worsening; no sputum; SpO2 88% on room air",
            scoreDelta: 2,
          },
          {
            id: "h_systemic",
            text: "Assess constitutional symptoms: fever pattern, night sweats, weight loss, fatigue",
            isOptimal: true,
            findings:
              "Fever × 1 week (Tmax 38.8°C); drenching night sweats; weight loss 5 kg × 2 months; marked fatigue",
            scoreDelta: 1,
          },
          {
            id: "h_oi",
            text: "Ask about prior opportunistic infections or TB (may influence PCP risk assessment)",
            isOptimal: true,
            findings: "No prior OIs documented; TB history negative; first serious illness since HIV diagnosis",
            scoreDelta: 1,
          },
          {
            id: "h_prophylaxis",
            text: "Ask about OI prophylaxis (cotrimoxazole/TMP-SMX): none received because never on medical supervision",
            isOptimal: true,
            findings:
              "No PCP prophylaxis; no medical contact; explains extremely low CD4 and PCP presentation",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Physical examination of HIV-positive patient with severe immunosuppression and respiratory compromise. Assess respiratory status, SpO2, signs of hypoxemia, and overall nutritional/clinical status.",
        availableActions: [
          {
            id: "e_vitals",
            text: "Record vital signs: HR, BP, RR, SpO2, temperature",
            isOptimal: true,
            findings:
              "HR 110/min (tachycardia), BP 110/68 mmHg, RR 28/min (tachypnea), SpO2 88% on room air, Temp 38.5°C",
            scoreDelta: 2,
          },
          {
            id: "e_respiratory",
            text: "Detailed chest examination: breath sounds, crackles, consolidation, work of breathing",
            isOptimal: true,
            findings:
              "Bilateral fine crackles on basal auscultation; diminished breath sounds; no consolidation; intercostal/subcostal retractions",
            scoreDelta: 2,
          },
          {
            id: "e_nutritional",
            text: "Assess nutritional status: BMI, muscle wasting, skin turgor",
            isOptimal: true,
            findings:
              "BMI 18.5 (low-normal); moderate muscle wasting in shoulders and chest; skin over chest loose/redundant",
            scoreDelta: 1,
          },
          {
            id: "e_skin",
            text: "Look for skin manifestations of opportunistic infections: oral candidiasis, herpes zoster, KS lesions",
            isOptimal: true,
            findings:
              "Oral candidiasis present (white plaques on tongue and palate); no KS lesions; no rash",
            scoreDelta: 1,
          },
          {
            id: "e_neuro",
            text: "Brief neurological examination: meningitis signs, toxoplasmosis signs (unlikely with normal CT but good to check)",
            isOptimal: true,
            findings: "No neck stiffness; normal consciousness; focal neurological signs absent",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Investigations to confirm PCP diagnosis and assess severity: chest X-ray, ABG for oxygenation/pH, CD4 count confirmation, LDH (elevated in PCP), CBC, and LFTs. Consider PCR/serology if available.",
        availableActions: [
          {
            id: "inv_cxr",
            text: "Chest X-ray: bilateral diffuse ground-glass opacities or interstitial infiltrates (classic PCP pattern)",
            isOptimal: true,
            findings:
              "CXR shows bilateral perihilar ground-glass opacities with interstitial pattern; classic PCP appearance",
            scoreDelta: 2,
          },
          {
            id: "inv_abg",
            text: "Arterial blood gas: assess hypoxemia severity, pH for metabolic acidosis, A-a gradient",
            isOptimal: true,
            findings:
              "pH 7.35 (mild acidosis), PaO2 65 mmHg (hypoxemic), PaCO2 32 mmHg (respiratory compensation), A-a gradient 35 (elevated; >35 indicates PCP severity)",
            scoreDelta: 2,
          },
          {
            id: "inv_cd4",
            text: "CD4+ count: confirm severe immunosuppression (<100 cells/μL strongly suggests PCP)",
            isOptimal: true,
            findings:
              "CD4 85 cells/μL; HIV viral load >100,000 copies/mL (not on therapy); confirms severe immunosuppression",
            scoreDelta: 2,
          },
          {
            id: "inv_ldh",
            text: "LDH (Lactate Dehydrogenase): elevated in PCP (>400, often much higher); non-specific but supportive",
            isOptimal: true,
            findings:
              "LDH 520 U/L (elevated); marked elevation suggests active PCP with pulmonary inflammation",
            scoreDelta: 1,
          },
          {
            id: "inv_cbc",
            text: "CBC: evaluate hemoglobin, WBC count (expected low-normal due to HIV), platelet count",
            isOptimal: true,
            findings: "Hb 10.5 g/dL (anemia), WBC 3200 (lymphopenia), platelets 140K (low)",
            scoreDelta: 1,
          },
          {
            id: "inv_sputum",
            text: "Sputum induction (if available) for P. jirovecii PCR or silver stain (higher yield than expectorated sputum)",
            isOptimal: true,
            findings:
              "Induced sputum PCR positive for Pneumocystis jirovecii; direct visualization with silver stain also positive",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Diagnosis of Pneumocystis Pneumonia (PCP): CD4 <100, bilateral ground-glass infiltrates on CXR, hypoxemia with elevated A-a gradient, elevated LDH, and positive P. jirovecii PCR. AIDS-defining illness in untreated HIV.",
        availableActions: [
          {
            id: "d_pcp",
            text: "Confirm PCP diagnosis: CD4 <100, clinical/radiological findings, positive P. jirovecii PCR/stain",
            isOptimal: true,
            findings:
              "Definitive: CD4 85, classic CXR, hypoxemia, elevated LDH, PCR positive; PCP confirmed",
            scoreDelta: 3,
          },
          {
            id: "d_severity",
            text: "Assess PCP severity: A-a gradient 35 indicates moderate-severe disease; PaO2 65 indicates significant hypoxemia",
            isOptimal: true,
            findings:
              "Moderate-to-severe PCP: A-a gradient >30, PaO2 <70; requires hospitalization and aggressive treatment",
            scoreDelta: 2,
          },
          {
            id: "d_aids",
            text: "Confirm AIDS diagnosis: CD4 <200 with PCP = AIDS-defining illness; patient has advanced HIV",
            isOptimal: true,
            findings: "AIDS confirmed by OI presence and CD4 <50; this is first presentation of advanced disease",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Treatment of PCP in severely immunosuppressed patient: high-dose cotrimoxazole (TMP-SMX) as first-line, adjunctive prednisolone for moderate-severe disease, supportive oxygenation, and urgent ART initiation per NACO guidelines.",
        availableActions: [
          {
            id: "t_tmpsxmx",
            text: "High-dose TMP-SMX: 15-20 mg/kg/day (trimethoprim component) × 3 weeks for PCP treatment",
            isOptimal: true,
            findings:
              "TMP-SMX 3-4 DS tablets (double-strength) four times daily (120 mg TMP/kg/day); IV if oral intolerance; 21-day course",
            scoreDelta: 3,
          },
          {
            id: "t_steroids",
            text: "Adjunctive prednisolone for moderate-severe PCP (A-a gradient >30): 40 mg BD × 5 days, then taper",
            isOptimal: true,
            findings:
              "Prednisolone 40 mg twice daily × 5 days, then 40 mg daily × 5 days, then 20 mg daily × 11 days; reduces mortality by ~50% in moderate-severe disease",
            scoreDelta: 2,
          },
          {
            id: "t_oxygen",
            text: "Supplemental oxygen to maintain SpO2 >90%: may require high-flow nasal cannula or non-rebreather mask",
            isOptimal: true,
            findings:
              "Target SpO2 >90%; HFNC at 6 L/min; monitor closely; intubation criteria if SpO2 <88% despite HFNC",
            scoreDelta: 2,
          },
          {
            id: "t_art",
            text: "Initiate ART urgently: after clinical stabilization (usually within 2-4 weeks); standard NACO first-line regimen",
            isOptimal: true,
            findings:
              "TLE (Tenofovir + Lamivudine + Efavirenz) or TLD (Tenofovir + Lamivudine + Dolutegravir) per NACO; start after PCP treatment response evident",
            scoreDelta: 2,
          },
          {
            id: "t_prophylaxis",
            text: "Continue TMP-SMX prophylaxis lifelong once treatment complete: 1 DS tablet daily; prevents PCP recurrence",
            isOptimal: true,
            findings:
              "Once CD4 >200 on ART × 3 months, prophylaxis can be discontinued; but initially continue until immune reconstitution",
            scoreDelta: 1,
          },
          {
            id: "t_skip",
            text: "Defer PCP treatment; only initiate ART",
            isOptimal: false,
            findings: "Fatal error; PCP requires immediate specific treatment; ART cannot be sole therapy for acute PCP",
            scoreDelta: -3,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Intensive monitoring of PCP treatment response and ART initiation: clinical response to TMP-SMX (fever resolution, respiratory improvement), CD4 recovery, compliance with lifelong ART, and prevention of immune reconstitution inflammatory syndrome (IRIS).",
        availableActions: [
          {
            id: "f_clinical",
            text: "Monitor clinical response to TMP-SMX: fever resolution (by day 5-7), cough reduction, dyspnea improvement, SpO2 trending up",
            isOptimal: true,
            findings:
              "By Day 5-7: fever resolved, cough improving, SpO2 improving (target >92%); if no improvement by Day 10, consider resistance/alternative diagnosis",
            scoreDelta: 2,
          },
          {
            id: "f_labs",
            text: "Monitor LDH trend: should decline as inflammation improves (but less specific than clinical response)",
            isOptimal: true,
            findings:
              "LDH at Day 7-10 should be lower; follow trend to assess therapeutic response",
            scoreDelta: 1,
          },
          {
            id: "f_art",
            text: "Start ART after clinical improvement (ideally Day 10-14 of PCP therapy): monitor CD4 recovery and viral suppression",
            isOptimal: true,
            findings:
              "ART initiated once breathing improved and oral intake tolerated; CD4 expected to rise slowly; viral load undetectable expected by 12-24 weeks",
            scoreDelta: 2,
          },
          {
            id: "f_iris",
            text: "Watch for IRIS (Immune Reconstitution Inflammatory Syndrome): paradoxical worsening as CD4 recovers; manage with continued steroids if develops",
            isOptimal: true,
            findings:
              "IRIS risk if CD4 <50 at ART start; if worsening dyspnea/infiltrates days after ART start, consider IRIS; continue prednisolone",
            scoreDelta: 2,
          },
          {
            id: "f_adherence",
            text: "Intensified counseling on ART adherence: lifelong therapy, consequences of non-adherence, support group access",
            isOptimal: true,
            findings:
              "Patient counseling on ART regimen, importance of compliance, food/drug interactions; enrollment in community ART program; follow-up at 2, 4, 12 weeks",
            scoreDelta: 2,
          },
          {
            id: "f_oi",
            text: "Prophylaxis for other OIs once CD4 <50: MAC prophylaxis (azithromycin), TB-IRIS prevention if TB co-infection present",
            isOptimal: true,
            findings: "Azithromycin 1200 mg weekly prophylaxis; if TB co-infection: monitor for TB-IRIS",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Hepatitis E in Pregnancy with Jaundice and Fulminant Hepatic Failure Risk",
    presentingComplaint: "26-year-old pregnant woman at 28 weeks with jaundice, dark urine, pruritus, and abnormal LFTs",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 45,
    examTags: ["NEXT_STEP1", "Obstetrics", "Hepatology"] as string[],
    patientProfile: {
      age: 26,
      sex: "Female",
      occupation: "Homemaker",
      history: "Pregnant at 28 weeks; acute hepatitis E; high risk of fulminant hepatic failure and adverse fetal outcomes",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "26-year-old primigravida at 28 weeks of gestation presents with acute jaundice, dark urine, pale stools, and pruritus × 1 week. History of poor sanitation, contaminated water exposure in endemic area. Assess symptom progression and fetal well-being.",
        availableActions: [
          {
            id: "h_hepatitis",
            text: "Characterize hepatitis symptoms: jaundice onset, dark urine, pale stool color, pruritus, nausea/vomiting",
            isOptimal: true,
            findings:
              "Jaundice appeared suddenly × 7 days; dark cola-colored urine; pale stools; intense pruritus; multiple episodes vomiting",
            scoreDelta: 2,
          },
          {
            id: "h_exposure",
            text: "Ask about water source and food consumption: contaminated water, undercooked shellfish",
            isOptimal: true,
            findings:
              "Drinks well water without treatment; recent water quality concerns in locality; no known shellfish consumption",
            scoreDelta: 2,
          },
          {
            id: "h_contacts",
            text: "Ask about contact with hepatitis E cases or poor sanitation; family members with jaundice",
            isOptimal: true,
            findings: "No known HEV contact; poor neighborhood sanitation; mother-in-law had jaundice 1 month ago",
            scoreDelta: 1,
          },
          {
            id: "h_obstetric",
            text: "Assess fetal well-being: fetal movement, vaginal bleeding, abdominal pain, signs of preeclampsia",
            isOptimal: true,
            findings:
              "Fetal movements present but mother not carefully monitoring; no vaginal bleeding; mild RUQ abdominal pain (hepatic); no edema/headache yet",
            scoreDelta: 2,
          },
          {
            id: "h_prior",
            text: "Ask about prior hepatitis, liver disease, or alcohol use (risk factors for severe disease)",
            isOptimal: true,
            findings: "No prior hepatitis; no liver disease; denies alcohol use; no chronic diseases",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Physical examination of pregnant woman with acute hepatitis E. Assess degree of jaundice, hepatomegaly, ascites, encephalopathy signs, and fetal status including fundal height and fetal heart rate.",
        availableActions: [
          {
            id: "e_vitals",
            text: "Record vital signs: HR, BP, RR, temperature (assess for systemic infection)",
            isOptimal: true,
            findings:
              "HR 92/min, BP 130/80 mmHg (mild elevation), RR 16/min, Temp 37.2°C (normal); no acute sepsis signs",
            scoreDelta: 1,
          },
          {
            id: "e_jaundice",
            text: "Assess jaundice: icterus of sclera and skin, degree of pigmentation",
            isOptimal: true,
            findings: "Marked icterus; sclera deeply yellow; skin deeply icteric throughout body",
            scoreDelta: 1,
          },
          {
            id: "e_liver",
            text: "Abdominal examination: hepatomegaly size, tenderness, ascites, splenomegaly",
            isOptimal: true,
            findings:
              "Hepatomegaly 2-3 cm below costal margin; tender on palpation; mild ascites; no splenomegaly",
            scoreDelta: 2,
          },
          {
            id: "e_enceph",
            text: "Neurological examination: asterixis, mental status, orientation (signs of hepatic encephalopathy/FHF)",
            isOptimal: true,
            findings:
              "Alert, oriented; no asterixis; normal consciousness; no obvious encephalopathy yet (vigilance needed)",
            scoreDelta: 2,
          },
          {
            id: "e_obstetric",
            text: "Obstetric examination: fundal height, fetal heart rate, uterine contractions, signs of preeclampsia",
            isOptimal: true,
            findings:
              "Fundal height 28 cm (appropriate for 28 weeks); FHR 142 bpm (normal); no uterine contractions; reflexes normal (BP elevation but no edema/headache)",
            scoreDelta: 2,
          },
          {
            id: "e_bleeding",
            text: "Look for signs of coagulopathy: petechiae, ecchymosis, gum bleeding (FHF assessment)",
            isOptimal: true,
            findings: "No petechiae; no gum bleeding; no obvious coagulopathy signs yet",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Investigations for acute hepatitis E in pregnancy: anti-HEV IgM/IgG, liver function tests, coagulation profile, blood glucose, renal function, CBC, and ultrasound obstetric assessment.",
        availableActions: [
          {
            id: "inv_serogram",
            text: "Anti-HEV IgM serology (diagnostic for acute HEV infection; IgG indicates past exposure)",
            isOptimal: true,
            findings: "Anti-HEV IgM positive (diagnostic); anti-HEV IgG negative or low (acute infection)",
            scoreDelta: 3,
          },
          {
            id: "inv_lft",
            text: "Liver function tests: bilirubin, AST, ALT, ALP, albumin, PT-INR",
            isOptimal: true,
            findings:
              "Total bilirubin 8.5 mg/dL (markedly elevated), conjugated 6.8 mg/dL; AST 2800 U/L, ALT 3200 U/L (extremely elevated); ALP 280 U/L; albumin 3.1 g/dL (mild reduction); PT 16 seconds (INR 1.2, mildly prolonged)",
            scoreDelta: 2,
          },
          {
            id: "inv_pt",
            text: "Coagulation profile: PT-INR, aPTT, fibrinogen (assess for DIC/FHF)",
            isOptimal: true,
            findings:
              "PT-INR 1.2 (mildly prolonged); aPTT normal; fibrinogen 320 mg/dL (normal); platelet count 200K; no DIC yet",
            scoreDelta: 2,
          },
          {
            id: "inv_rft",
            text: "Renal function: creatinine, BUN, electrolytes (assess for hepatorenal syndrome risk)",
            isOptimal: true,
            findings:
              "Creatinine 0.9 mg/dL (normal), BUN 20 mg/dL (normal), Na 138, K 3.8, Cl 102 (normal); renal function preserved currently",
            scoreDelta: 1,
          },
          {
            id: "inv_glucose",
            text: "Blood glucose (severe hepatitis E can cause hypoglycemia; risk factor for FHF)",
            isOptimal: true,
            findings: "Fasting glucose 78 mg/dL (normal); monitor closely",
            scoreDelta: 1,
          },
          {
            id: "inv_cbc",
            text: "CBC: hemoglobin, WBC, platelets (assess for cytopenias)",
            isOptimal: true,
            findings: "Hb 10.2 g/dL (mild anemia, likely pregnancy-related), WBC 5800 (normal), platelets 200K (normal)",
            scoreDelta: 1,
          },
          {
            id: "inv_usg",
            text: "Ultrasound obstetric: fetal biometry, amniotic fluid volume, placental status, Doppler if indicated",
            isOptimal: true,
            findings:
              "Fetus 28 weeks; growth normal; AFI 10 cm (normal); placenta grade 1 (normal); umbilical artery Doppler normal",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Diagnosis of acute hepatitis E in pregnancy: anti-HEV IgM positive, extremely elevated transaminases (>1000), bilirubin >3 mg/dL, coagulopathy emerging (PT slightly prolonged). Major risk: fulminant hepatic failure and adverse pregnancy outcomes.",
        availableActions: [
          {
            id: "d_hev",
            text: "Confirm acute hepatitis E: anti-HEV IgM positive, elevated transaminases, clinical jaundice",
            isOptimal: true,
            findings:
              "Definitive diagnosis: anti-HEV IgM positive, AST/ALT >3000, jaundice, appropriate exposure history",
            scoreDelta: 3,
          },
          {
            id: "d_severity",
            text: "Assess severity: PT only mildly prolonged (INR 1.2) and albumin preserved suggest non-fulminant currently, but at high risk of progression",
            isOptimal: true,
            findings:
              "Bilirubin >5, AST/ALT >1000 indicate severe hepatitis; PT mildly prolonged suggests early FHF; close monitoring mandatory",
            scoreDelta: 2,
          },
          {
            id: "d_pregnancy",
            text: "Recognize increased risk in pregnancy: HEV in 3rd trimester carries 15-25% FHF risk (vs. 0.5-3% in non-pregnant); adverse fetal outcomes high",
            isOptimal: true,
            findings:
              "Patient at 28 weeks: elevated risk of FHF, preterm delivery, intrauterine fetal death, neonatal complications",
            scoreDelta: 2,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Management of acute hepatitis E in pregnancy: supportive care (fluid/electrolyte correction), monitoring for FHF, prophylaxis against complications, fetal monitoring, and counseling on high-risk pregnancy.",
        availableActions: [
          {
            id: "t_supportive",
            text: "Supportive management: rest, high-calorie diet, avoid hepatotoxic agents (acetaminophen, NSAIDs)",
            isOptimal: true,
            findings:
              "Bed rest; encourage oral intake; small frequent meals; fluid/electrolyte correction IV if needed; adequate glucose supply",
            scoreDelta: 2,
          },
          {
            id: "t_monitoring",
            text: "Daily clinical assessment: mental status, bleeding signs, vital signs, and weekly LFTs (especially PT-INR) until resolution",
            isOptimal: true,
            findings:
              "Daily bedside review for encephalopathy/FHF signs; PT-INR daily × 3 days then every 2-3 days; daily LFTs until improving",
            scoreDelta: 2,
          },
          {
            id: "t_lfhf",
            text: "Monitor closely for fulminant hepatic failure signs: altered mental status, PT >16 sec (INR >1.5), hypoglycemia, ascites progression",
            isOptimal: true,
            findings:
              "FHF criteria: PT-INR >1.5 + hepatic encephalopathy; if develop, urgent referral for liver transplant evaluation; ICU admission",
            scoreDelta: 2,
          },
          {
            id: "t_fetal",
            text: "Intensive fetal monitoring: NST daily/twice daily, Doppler if indicated, obstetric consultation",
            isOptimal: true,
            findings:
              "NST twice daily; reactive pattern currently; alert for fetal distress; coordinate with obstetrics for possible early delivery if FHF develops",
            scoreDelta: 2,
          },
          {
            id: "t_prophylaxis",
            text: "Prophylaxis: lactulose for constipation (prevents encephalopathy), avoid sedatives, treat coagulopathy if INR >2",
            isOptimal: true,
            findings:
              "Lactulose 15 mL BD; avoid benzodiazepines; FFP if INR >2; no use of warfarin/heparin (teratogenic/hemorrhage risk)",
            scoreDelta: 1,
          },
          {
            id: "t_delivery",
            text: "Plan for delivery: preterm delivery may be necessary if FHF develops or fetal distress evident; coordinate obstetric/hepatology teams",
            isOptimal: true,
            findings:
              "Vaginal delivery preferred if stable; caesarean if fetal distress; avoid operative delivery if coagulopathy severe",
            scoreDelta: 1,
          },
          {
            id: "t_skip",
            text: "No specific monitoring; assume spontaneous recovery",
            isOptimal: false,
            findings: "Dangerous; HEV in pregnancy requires intensive FHF surveillance; FHF develops rapidly",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Outcome tracking of acute hepatitis E in pregnancy: liver function recovery, fetal monitoring, delivery planning, and assessment of neonatal outcomes. Monitor for chronic HEV (rare in immunocompetent).",
        availableActions: [
          {
            id: "f_lft",
            text: "Serial LFTs and PT-INR: assess for resolution or progression to FHF; follow ALT/AST/bilirubin trends",
            isOptimal: true,
            findings:
              "LFTs expected to improve over weeks; ALT/AST should decline by 50% every 5-7 days if recovery; bilirubin takes longer to resolve",
            scoreDelta: 2,
          },
          {
            id: "f_fetal",
            text: "Continuous fetal monitoring: NST/CTG to detect fetal distress; deliver preterm if deterioration evident",
            isOptimal: true,
            findings:
              "NST tracking; if FHF develops or fetal distress, prepare for urgent delivery; timing depends on clinical evolution",
            scoreDelta: 2,
          },
          {
            id: "f_outcomes",
            text: "Track pregnancy outcomes: preterm delivery rate high; assess neonatal morbidity (prematurity complications, viral transmission)",
            isOptimal: true,
            findings:
              "If FHF develops: ~30-50% mortality; preterm delivery common; neonates may show evidence of HEV infection; follow neonatal status",
            scoreDelta: 2,
          },
          {
            id: "f_postpartum",
            text: "Postpartum follow-up: complete recovery expected in non-fulminant cases; monitor for postpartum hemorrhage risk (coagulopathy)",
            isOptimal: true,
            findings:
              "Postpartum recovery; breastfeeding generally safe (HEV rarely in breast milk); close monitoring for maternal hemorrhage if coagulopathy",
            scoreDelta: 1,
          },
          {
            id: "f_counseling",
            text: "Counsel on HEV transmission prevention: water sanitation, hygiene to protect family and infant",
            isOptimal: true,
            findings:
              "Clean water access essential; hand hygiene; no other family members should share eating utensils; infant infection rare but monitor",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Amoebic Liver Abscess with RUQ Pain and Anchovy Sauce Pus",
    presentingComplaint: "40-year-old chronic alcoholic with RUQ pain, fever, and imaging findings of liver abscess",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "Surgery", "Infectious_Disease"] as string[],
    patientProfile: {
      age: 40,
      sex: "Male",
      occupation: "Laborer",
      history: "Chronic alcohol use; poor hygiene; RUQ pain × 2 weeks; fever; hepatomegaly on exam",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "40-year-old male laborer with chronic alcohol use, presents with progressive RUQ pain × 2 weeks, intermittent fever, and fatigue. No diarrhea history (amoebic colitis often precedes abscess). Risk factors: poor hygiene, contaminated food/water exposure. Assess pain character and systemic symptoms.",
        availableActions: [
          {
            id: "h_pain",
            text: "Characterize RUQ pain: onset, location, character, radiation, severity, aggravating factors",
            isOptimal: true,
            findings:
              "Dull aching RUQ pain × 2 weeks; non-radiating; worse with movement/deep breathing; mild at rest",
            scoreDelta: 2,
          },
          {
            id: "h_fever",
            text: "Assess fever: pattern, temperature peaks, associated chills, duration",
            isOptimal: true,
            findings:
              "Intermittent fever × 1.5 weeks (Tmax 38.9°C); no rigors; worse in evenings; mild malaise",
            scoreDelta: 1,
          },
          {
            id: "h_gi",
            text: "Ask about GI symptoms: diarrhea (precursor to abscess), dysentery, abdominal distention",
            isOptimal: true,
            findings: "No diarrhea currently; no prior dysentery; normal bowel movements",
            scoreDelta: 1,
          },
          {
            id: "h_alcohol",
            text: "Document alcohol use: quantity, duration, liver disease signs (cirrhosis risk)",
            isOptimal: true,
            findings:
              "Chronic alcohol use × 10 years; 60-80 mL daily spirits; denies prior liver disease diagnosis but may have undiagnosed cirrhosis",
            scoreDelta: 1,
          },
          {
            id: "h_hygiene",
            text: "Ask about food/water exposure: contaminated water source, street food, sanitation",
            isOptimal: true,
            findings:
              "Poor hygiene; occasional street food; untreated water exposure in past; risk factors for amoebic infection",
            scoreDelta: 1,
          },
          {
            id: "h_weight",
            text: "Assess weight loss and general health status",
            isOptimal: true,
            findings: "Weight loss 3 kg × 2 months; generalized weakness",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Physical examination of patient with suspected liver abscess. Focus on RUQ tenderness, hepatomegaly, Rovsing sign, and signs of sepsis or peritonitis.",
        availableActions: [
          {
            id: "e_vitals",
            text: "Record vital signs: HR, BP, RR, temperature, assess for sepsis",
            isOptimal: true,
            findings: "HR 98/min, BP 115/70 mmHg, RR 18/min, Temp 38.4°C; no shock",
            scoreDelta: 1,
          },
          {
            id: "e_rua",
            text: "RUQ examination: hepatomegaly, tenderness, masses, Rovsing sign (RUQ rebound tenderness), guarding",
            isOptimal: true,
            findings:
              "Hepatomegaly (liver edge 3 cm below costal margin); RUQ tenderness; positive Rovsing sign; no rigid guarding",
            scoreDelta: 2,
          },
          {
            id: "e_abdomen",
            text: "General abdominal examination: distention, bowel sounds, rebound, masses",
            isOptimal: true,
            findings:
              "Soft abdomen; active bowel sounds; no generalized rebound; mass palpable in RUQ",
            scoreDelta: 1,
          },
          {
            id: "e_jaundice",
            text: "Look for jaundice (bilirubin elevation possible with large abscess)",
            isOptimal: true,
            findings: "Mild icterus; no deep jaundice",
            scoreDelta: 1,
          },
          {
            id: "e_pulm",
            text: "Examine lungs for right pleural involvement (amoebic abscess can erode into pleura)",
            isOptimal: true,
            findings: "Right basal crackles; no consolidation; pleural involvement suspected",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Investigations: ultrasound/CT abdomen to visualize abscess (size, location, contents), CBC, LFTs, blood culture, and serology (anti-amoebic antibodies).",
        availableActions: [
          {
            id: "inv_usg",
            text: "Ultrasound abdomen: confirms abscess location, size, characterization (echo-free/septate), and relation to surrounding structures",
            isOptimal: true,
            findings:
              "USG: Right lobe liver, subcapsular location, hypoechoic lesion 8 × 6 cm, well-defined borders, some internal echoes",
            scoreDelta: 2,
          },
          {
            id: "inv_ct",
            text: "CT abdomen with contrast: better characterization of abscess, density, involvement of adjacent structures, rule out loculation",
            isOptimal: true,
            findings:
              "CT: Right lobe abscess 8 × 6 cm, low-density central content (pus), enhancement of surrounding liver parenchyma",
            scoreDelta: 2,
          },
          {
            id: "inv_serology",
            text: "Anti-amoebic serology: IHA (Indirect Hemagglutination), IgG antibody (positive in liver abscess cases)",
            isOptimal: true,
            findings:
              "Anti-amoeba IHA positive (1:128); supports amoebic etiology; sensitivities 70-90% in liver abscess",
            scoreDelta: 2,
          },
          {
            id: "inv_cbc",
            text: "CBC: assess WBC, hemoglobin, platelets (infection response)",
            isOptimal: true,
            findings:
              "WBC 12,500 (mild leukocytosis), Hb 12.5 g/dL, platelets 220K; normal differential expected",
            scoreDelta: 1,
          },
          {
            id: "inv_lft",
            text: "LFTs: bilirubin, AST, ALT, ALP, albumin (assess for liver dysfunction)",
            isOptimal: true,
            findings:
              "AST 65 U/L, ALT 55 U/L (mildly elevated), ALP 120 U/L, bilirubin 1.2 mg/dL (normal), albumin 3.5 g/dL",
            scoreDelta: 1,
          },
          {
            id: "inv_culture",
            text: "Blood culture (if abscess rupture suspected or septic): may isolate secondary bacterial infection (E. coli, Staph)",
            isOptimal: true,
            findings:
              "Blood culture: no growth on 48-hour incubation; amoebic abscesses often sterile unless secondary infection",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Diagnosis of amoebic liver abscess: imaging findings (solitary right lobe abscess), anti-amoeba serology positive, clinical presentation (RUQ pain, fever, hepatomegaly), and risk factors (poor hygiene, alcohol).",
        availableActions: [
          {
            id: "d_abscess",
            text: "Confirm amoebic liver abscess: imaging (8 cm abscess), positive anti-amoeba serology, clinical findings",
            isOptimal: true,
            findings:
              "Definitive diagnosis: classic presentation, imaging findings, serology positive; amoebic etiology confirmed",
            scoreDelta: 3,
          },
          {
            id: "d_size",
            text: "Assess abscess size: 8 cm—large abscess; rupture risk present; high priority for intervention",
            isOptimal: true,
            findings:
              "Large abscess (>6 cm); high rupture risk; requires aspiration/drainage ± medical therapy",
            scoreDelta: 2,
          },
          {
            id: "d_location",
            text: "Note location: right lobe; subcapsular position increases rupture risk; pleural involvement possible",
            isOptimal: true,
            findings:
              "Right lobe, subcapsular; close to pleural surface; rupture would cause empyema/peritonitis risk high",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Management of amoebic liver abscess: medical therapy with metronidazole (invasive form), followed by luminal agent, and consideration of drainage (aspiration/percutaneous catheter drainage) for large/complicated abscesses.",
        availableActions: [
          {
            id: "t_metro",
            text: "Metronidazole for invasive amebiasis: 750 mg IV/PO three times daily × 7-10 days (or 2 g daily)",
            isOptimal: true,
            findings:
              "Metronidazole 750 mg TDS × 10 days; IV for first 2 days, then oral; covers invasive amoeba; reduces abscess inflammation",
            scoreDelta: 2,
          },
          {
            id: "t_luminal",
            text: "Luminal agent after invasive therapy: paromomycin 25-35 mg/kg/day × 7 days (to clear intestinal colonization)",
            isOptimal: true,
            findings:
              "Paromomycin 1.5 g TDS × 7 days after metronidazole course; prevents relapse from intestinal cysts",
            scoreDelta: 2,
          },
          {
            id: "t_drainage",
            text: "Percutaneous needle aspiration/catheter drainage for large (>5 cm) or complicated abscesses to confirm diagnosis and relieve pressure",
            isOptimal: true,
            findings:
              "Given size 8 cm and subcapsular location, drainage recommended; USG-guided aspiration; anchovy sauce-colored pus obtained (diagnostic)",
            scoreDelta: 2,
          },
          {
            id: "t_aspiration",
            text: "If aspiration performed: send pus for amoebic serology, bacterial culture, and keep drained if catheter left in situ",
            isOptimal: true,
            findings:
              "Pus aspirate: amoebic antigen positive (diagnostic), no bacterial growth (sterile), appearance consistent with amoebic pus",
            scoreDelta: 1,
          },
          {
            id: "t_antibiotics",
            text: "Broad-spectrum antibiotics (amoxicillin-clavulanate or cephalosporin) if secondary bacterial infection suspected or peritonitis",
            isOptimal: true,
            findings:
              "No fever/sepsis currently; antibiotics not essential but reasonable to add to prevent secondary infection",
            scoreDelta: 1,
          },
          {
            id: "t_surgery",
            text: "Surgery (open drainage) reserved for rupture, peritonitis, or failed percutaneous drainage",
            isOptimal: true,
            findings:
              "Currently no peritonitis; percutaneous drainage preferred; surgery if complications develop",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Follow-up of amoebic liver abscess: imaging surveillance to assess abscess resolution, clinical recovery (fever, pain resolution), completion of metronidazole + paromomycin course, and prevention counseling.",
        availableActions: [
          {
            id: "f_imaging",
            text: "Repeat ultrasound/CT at 4-6 weeks to document abscess resolution (may take weeks even with successful therapy)",
            isOptimal: true,
            findings:
              "Follow-up USG at 6 weeks: abscess size reduced to 4 cm; resolving; residual abscess may persist on imaging but be sterile",
            scoreDelta: 2,
          },
          {
            id: "f_clinical",
            text: "Monitor clinical response: fever resolution (expected by day 3-5), pain improvement, general status",
            isOptimal: true,
            findings:
              "By day 5: afebrile, RUQ pain improving, appetite returning; continue metronidazole to complete course",
            scoreDelta: 1,
          },
          {
            id: "f_drainage",
            text: "If percutaneous catheter placed: daily output monitoring, remove drain once output minimal (<10 mL daily) and patient clinically improving",
            isOptimal: true,
            findings:
              "Drain output initially 20-30 mL daily; decreases by day 5; remove drain at day 7-10 once output minimal",
            scoreDelta: 1,
          },
          {
            id: "f_prevention",
            text: "Counsel on prevention: water sanitation, food hygiene, avoid raw vegetables in endemic areas, alcohol reduction/cessation",
            isOptimal: true,
            findings:
              "Education on clean water access, hand hygiene, food safety; liver protection through alcohol cessation",
            scoreDelta: 1,
          },
          {
            id: "f_outcomes",
            text: "Define cure: clinical resolution + imaging follow-up showing abscess reduction/resolution; mortality low with appropriate therapy",
            isOptimal: true,
            findings:
              "Expected outcome: complete clinical recovery, imaging resolution over 4-6 weeks; mortality <1% with proper treatment",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Neurocysticercosis with New-Onset Seizures and Ring-Enhancing CT Lesion",
    presentingComplaint: "20-year-old with first seizure episode and CT findings of ring-enhancing lesion with central scolex",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 40,
    examTags: ["NEXT_STEP1", "Neurology", "Infectious_Disease"] as string[],
    patientProfile: {
      age: 20,
      sex: "Male",
      occupation: "Student",
      history: "First seizure episode; lives in endemic area; poor sanitation; imaging consistent with cysticercosis",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "20-year-old student presents with first generalized tonic-clonic seizure lasting 3 minutes, followed by post-ictal confusion. Lives in endemic area with poor sanitation. Assess seizure details, prior symptoms (headaches, focal deficits), and risk factors for neurocysticercosis.",
        availableActions: [
          {
            id: "h_seizure",
            text: "Characterize seizure: onset, type (tonic-clonic, focal, absence), duration, post-ictal state, any trigger",
            isOptimal: true,
            findings:
              "First seizure; generalized tonic-clonic; started with left arm jerking then generalized; lasted 3 minutes; post-ictal confusion × 30 min",
            scoreDelta: 2,
          },
          {
            id: "h_prior",
            text: "Ask about prior symptoms: headaches, visual changes, focal weakness, behavioral changes",
            isOptimal: true,
            findings:
              "Chronic intermittent headaches × 6 months (ignored); no focal deficits; no prior confusion/behavioral issues",
            scoreDelta: 2,
          },
          {
            id: "h_exposure",
            text: "Ask about pork consumption and sanitation: eating undercooked pork, poor household sanitation",
            isOptimal: true,
            findings:
              "Occasional pork consumption (undercooked suspect); poor household sanitation; shared living space with infected individual possible",
            scoreDelta: 2,
          },
          {
            id: "h_family",
            text: "Family history of seizures or neurocysticercosis",
            isOptimal: true,
            findings: "No family history of seizures; no known neurocysticercosis in family",
            scoreDelta: 1,
          },
          {
            id: "h_trauma",
            text: "Rule out head trauma as seizure cause: any recent falls or trauma",
            isOptimal: true,
            findings: "No recent head trauma; seizure unprovoked",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Neurological examination after first seizure. Assess consciousness, focal deficits, meningeal signs, and fundoscopy for papilledema (if increased ICP present).",
        availableActions: [
          {
            id: "e_consciousness",
            text: "Level of consciousness: assess GCS, orientation post-ictal",
            isOptimal: true,
            findings: "GCS 14 (mild post-ictal confusion); oriented to person/place, hesitant with time; expected to normalize",
            scoreDelta: 1,
          },
          {
            id: "e_motor",
            text: "Motor examination: strength in all limbs, pronator drift, focal deficits",
            isOptimal: true,
            findings: "Strength 5/5 bilaterally; no pronator drift; no focal weakness",
            scoreDelta: 1,
          },
          {
            id: "e_sensory",
            text: "Sensory examination: gross sensation intact; pinprick/vibration",
            isOptimal: true,
            findings: "Gross sensation intact; no sensory level",
            scoreDelta: 1,
          },
          {
            id: "e_cranial",
            text: "Cranial nerve examination: pupils, eye movements, facial symmetry",
            isOptimal: true,
            findings: "Pupils equal reactive; extraocular movements intact; facial symmetry preserved",
            scoreDelta: 1,
          },
          {
            id: "e_meningeal",
            text: "Meningeal signs: neck stiffness, Kernig sign, Brudzinski sign (rule out meningitis)",
            isOptimal: true,
            findings:
              "No neck stiffness; negative Kernig and Brudzinski; meningitis unlikely but vigilance needed",
            scoreDelta: 1,
          },
          {
            id: "e_fund",
            text: "Fundoscopy: assess for papilledema (increased ICP sign)",
            isOptimal: true,
            findings: "Optic discs sharp; no papilledema; no venous engorgement",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Investigations for seizure and suspected neurocysticercosis: non-contrast and contrast CT/MRI brain, serological tests (anticysticercal antibodies), CSF examination if neuromeningitis suspected, and EEG.",
        availableActions: [
          {
            id: "inv_ct",
            text: "Non-contrast and contrast CT head: ring-enhancing lesion with scolex (pathognomonic for cysticercosis)",
            isOptimal: true,
            findings:
              "CT: single ring-enhancing lesion (cyst) in left frontoparietal region with eccentric nodule (scolex); minimal cerebral edema; no hydrocephalus",
            scoreDelta: 3,
          },
          {
            id: "inv_mri",
            text: "MRI brain (more sensitive than CT): T2/FLAIR imaging shows cystic lesions; T1 post-gadolinium shows enhancement pattern",
            isOptimal: true,
            findings:
              "MRI: single cyst with scolex visible (pathognomonic); FLAIR shows minimal surrounding edema; no other lesions on full brain imaging",
            scoreDelta: 2,
          },
          {
            id: "inv_serology",
            text: "Anticysticercal antibody serology: IgG ELISA or immunoblot (positive in neurocysticercosis)",
            isOptimal: true,
            findings:
              "Serum anticysticercal antibody (IgG) positive; ELISA or immunoblot confirms cysticercosis",
            scoreDelta: 2,
          },
          {
            id: "inv_csf",
            text: "CSF analysis (lumbar puncture) if neuromeningitis suspected: cell count, protein, glucose, CSF anticysticercal antibodies",
            isOptimal: true,
            findings:
              "CSF: cell count mildly elevated (50/mm3, lymphocytes); protein 60 mg/dL; glucose 40 mg/dL (normal); anticysticercal antibody positive in CSF",
            scoreDelta: 1,
          },
          {
            id: "inv_eeg",
            text: "EEG: localizes seizure focus; may show focal slowing or spike-wave activity",
            isOptimal: true,
            findings: "EEG: focal slowing over left frontoparietal region; no acute spike-wave; may have focal abnormalities",
            scoreDelta: 1,
          },
          {
            id: "inv_cbc",
            text: "CBC: assess for eosinophilia (suggestive of parasitic infection)",
            isOptimal: true,
            findings: "WBC 8500; eosinophils 3% (mildly elevated); not marked eosinophilia",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Diagnosis of neurocysticercosis: new-onset seizure, ring-enhancing lesion with scolex on imaging (pathognomonic), positive anticysticercal serology, endemic area residence. Stage: active parenchymal cyst.",
        availableActions: [
          {
            id: "d_ncc",
            text: "Confirm neurocysticercosis: imaging findings (ring-enhancing lesion with scolex) pathognomonic; antibody serology positive",
            isOptimal: true,
            findings:
              "Definitive diagnosis: classic imaging findings, serology positive, clinical presentation; neurocysticercosis confirmed",
            scoreDelta: 3,
          },
          {
            id: "d_stage",
            text: "Stage the lesion: parenchymal cyst in vesicular stage (active, can cause seizure); scolex visible indicates viable cyst",
            isOptimal: true,
            findings:
              "Single vesicular parenchymal cyst with scolex; active stage; accounts for seizure presentation",
            scoreDelta: 2,
          },
          {
            id: "d_count",
            text: "Single lesion vs. multiple lesions: imaging shows single cyst (simpler management); check for other lesions in brain",
            isOptimal: true,
            findings:
              "Single focal lesion; full brain imaging done; no other lesions identified; simplifies treatment",
            scoreDelta: 1,
          },
          {
            id: "d_edema",
            text: "Assess degree of edema and mass effect: minimal edema, no mass effect, no midline shift (favorable)",
            isOptimal: true,
            findings:
              "Minimal cerebral edema; no mass effect; no hydrocephalus or midline shift; favorable prognostic signs",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Management of active parenchymal neurocysticercosis: antiparasitic therapy (albendazole), anticonvulsants for seizure control, corticosteroids to manage edema and prevent inflammation from cyst death, and monitoring for complications.",
        availableActions: [
          {
            id: "t_albend",
            text: "Albendazole for antiparasitic effect: 15 mg/kg/day in 2 divided doses × 7-10 days (kills the cyst)",
            isOptimal: true,
            findings:
              "Albendazole 400 mg BD × 7-10 days; converts cyst to degenerating stage; may temporarily worsen edema before improvement",
            scoreDelta: 2,
          },
          {
            id: "t_steroids",
            text: "Prednisolone or dexamethasone to manage cyst-related edema and inflammation, especially if albendazole started",
            isOptimal: true,
            findings:
              "Prednisolone 0.5-1 mg/kg/day (20 mg) × 1-2 weeks, then taper; or dexamethasone if severe edema; starts with or before albendazole",
            scoreDelta: 2,
          },
          {
            id: "t_aed",
            text: "Antiepileptic drugs for seizure control: first-line levetiracetam or phenytoin; prevent recurrent seizures",
            isOptimal: true,
            findings:
              "Levetiracetam 500 mg BD or phenytoin loading dose 15 mg/kg, then 5 mg/kg/day; seizure prevention crucial",
            scoreDelta: 2,
          },
          {
            id: "t_supportive",
            text: "Supportive care: adequate hydration, electrolyte monitoring if on anticonvulsants, contraception if AED is teratogenic",
            isOptimal: true,
            findings:
              "Supportive care; counsel on AED side effects; ensure adequate hydration; avoid hepatotoxic agents",
            scoreDelta: 1,
          },
          {
            id: "t_monitoring",
            text: "Close monitoring for acute complications: seizure recurrence, increased ICP signs, cyst rupture",
            isOptimal: true,
            findings:
              "Hospitalization for 2-3 days after albendazole start; monitor for increased ICP, breakthrough seizures; repeat imaging if deterioration",
            scoreDelta: 2,
          },
          {
            id: "t_skip",
            text: "Skip antiparasitic therapy; only give anticonvulsants",
            isOptimal: false,
            findings: "Suboptimal; albendazole eradicates cyst and prevents recurrence; AED alone insufficient long-term",
            scoreDelta: -1,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Long-term follow-up of neurocysticercosis: repeat imaging to assess cyst resolution (becomes calcified/atrophic), seizure control on AED, tapering corticosteroids and AED, and prevention counseling to avoid reinfection.",
        availableActions: [
          {
            id: "f_imaging",
            text: "Repeat CT/MRI at 3-6 months to document cyst evolution: shrinkage, calcification, resolution of edema",
            isOptimal: true,
            findings:
              "Follow-up MRI at 6 weeks: cyst shows signs of degeneration (heterogeneous enhancement); by 3 months: calcifying lesion evident",
            scoreDelta: 2,
          },
          {
            id: "f_seizure",
            text: "Assess seizure control: document if seizure-free on AED; may need dose adjustment or alternative AED if breakthrough seizures",
            isOptimal: true,
            findings:
              "Seizure-free × 6 months on levetiracetam 500 mg BD; continue AED × 2-3 years minimum or longer if multiple lesions",
            scoreDelta: 2,
          },
          {
            id: "f_steroids",
            text: "Taper prednisolone gradually: stop over 2-4 weeks once albendazole completed and cyst edema subsiding",
            isOptimal: true,
            findings:
              "Prednisolone tapered by week 2-4 post-albendazole; monitor for steroid withdrawal and recurrent inflammation",
            scoreDelta: 1,
          },
          {
            id: "f_aed",
            text: "Long-term AED continuation: reassess need at 2-3 years; may continue longer if recurrent seizures or multiple lesions",
            isOptimal: true,
            findings:
              "AED typically continued 2-3 years minimum; if imaging shows complete cyst resolution and seizure-free, can attempt withdrawal",
            scoreDelta: 1,
          },
          {
            id: "f_prevention",
            text: "Counsel on reinfection prevention: food hygiene, avoid undercooked pork, ensure household sanitation",
            isOptimal: true,
            findings:
              "Education on proper food preparation, hand hygiene, sanitation; prevent intestinal cysticercosis in family",
            scoreDelta: 1,
          },
          {
            id: "f_outcomes",
            text: "Define treatment success: seizure-free status, cyst resolution on imaging, normal neurological function",
            isOptimal: true,
            findings:
              "Expected outcome: >80% seizure control with proper AED + antiparasitic therapy; cyst resolution within 1-2 years",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Japanese Encephalitis in AES-Endemic Region with CSF Pleocytosis",
    presentingComplaint: "8-year-old from Gorakhpur with fever, altered consciousness, convulsions, and CSF findings suggestive of viral encephalitis",
    caseType: "Emergency",
    difficulty: "HARD" as const,
    estimatedMinutes: 45,
    examTags: ["NEXT_STEP1", "Pediatrics", "Neurology"] as string[],
    patientProfile: {
      age: 8,
      sex: "Male",
      occupation: "Student",
      history: "From Gorakhpur (JE endemic region); acute fever with seizures and altered consciousness; JE IgM positive on CSF",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "8-year-old boy from Gorakhpur, Uttar Pradesh (endemic JE region) presents with acute fever, headache, altered consciousness, and convulsions. Onset 3 days ago; progressive deterioration. Lives in area with heavy Culex mosquito breeding (irrigation channels, rice paddies). Assess exposure, symptom progression, and neurological manifestations.",
        availableActions: [
          {
            id: "h_fever",
            text: "Characterize fever: onset, pattern, Tmax, associated symptoms",
            isOptimal: true,
            findings:
              "Fever onset Day 1 (Tmax 39.8°C); sustained high fever × 3 days; chills; headache severe",
            scoreDelta: 2,
          },
          {
            id: "h_neuro",
            text: "Neurological symptoms: seizures, altered consciousness, behavioral changes, headache severity",
            isOptimal: true,
            findings:
              "Headache severe and progressive; altered consciousness starting Day 2 (confusion, difficulty speaking); convulsions Day 2-3; generalized tonic-clonic pattern",
            scoreDelta: 2,
          },
          {
            id: "h_vomit",
            text: "GI symptoms: nausea, vomiting (meningeal irritation signs)",
            isOptimal: true,
            findings:
              "Vomiting started Day 2; projectile pattern suggestive of increased ICP; child resistant to oral intake",
            scoreDelta: 1,
          },
          {
            id: "h_exposure",
            text: "Assess mosquito exposure: outdoor activities, sleeping arrangements, mosquito protection measures",
            isOptimal: true,
            findings:
              "Plays outdoors near rice paddies; sleeps without mosquito net; poor screening; lives in area with high Culex density",
            scoreDelta: 2,
          },
          {
            id: "h_vaccination",
            text: "JE vaccination history: prior doses, timing",
            isOptimal: true,
            findings: "No prior JE vaccination; not included in routine immunization at this time in region",
            scoreDelta: 2,
          },
          {
            id: "h_contacts",
            text: "Contact history: other family members or neighbors with similar illness (cluster)",
            isOptimal: true,
            findings:
              "Multiple cases in neighborhood; local health center report of AES outbreak; temporal clustering suggests vector-borne",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Neurological examination of child with suspected encephalitis. Assess consciousness level, meningeal signs, seizure activity, focal neurological deficits, and signs of increased ICP.",
        availableActions: [
          {
            id: "e_gcs",
            text: "Glasgow Coma Scale: assess level of consciousness, eye opening, verbal response, motor response",
            isOptimal: true,
            findings: "GCS 9 (E2V3M4); eyes open to pain only; inappropriate words; withdraws from pain",
            scoreDelta: 2,
          },
          {
            id: "e_meningeal",
            text: "Meningeal signs: neck stiffness, Kernig sign, Brudzinski sign (assess for meningeal involvement)",
            isOptimal: true,
            findings:
              "Mild neck stiffness (not rigid); Kernig sign positive bilaterally; Brudzinski sign positive; meningeal irritation present",
            scoreDelta: 2,
          },
          {
            id: "e_seizures",
            text: "Seizure assessment: type, duration, frequency, post-ictal state",
            isOptimal: true,
            findings:
              "Generalized tonic-clonic seizures; multiple episodes × 2 days; post-ictal confusion; now in status after arrival",
            scoreDelta: 2,
          },
          {
            id: "e_focal",
            text: "Focal neurological deficits: weakness, sensory loss, speech abnormalities (JE can cause focal involvement)",
            isOptimal: true,
            findings:
              "No obvious weakness; speech slurred (post-ictal + encephalopathy); no sensory level",
            scoreDelta: 1,
          },
          {
            id: "e_icp",
            text: "Signs of increased ICP: papilledema, dilated pupils, Cushing triad",
            isOptimal: true,
            findings:
              "No papilledema on fundoscopy; pupils equal reactive (no dilated); normal Cushing triad (HR/BP/breathing)",
            scoreDelta: 1,
          },
          {
            id: "e_vital",
            text: "Vital signs: temperature, HR, BP, RR (assess for systemic involvement)",
            isOptimal: true,
            findings: "Temp 39.5°C, HR 112/min, BP 105/65 mmHg, RR 20/min",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Investigations for suspected Japanese Encephalitis: lumbar puncture with CSF analysis (cell count, protein, glucose, JE serology), blood JE IgM, brain MRI/CT, CBC, and LFTs.",
        availableActions: [
          {
            id: "inv_lp",
            text: "Lumbar puncture: CSF analysis for pleocytosis (lymphocytic predominance expected in viral encephalitis)",
            isOptimal: true,
            findings:
              "CSF obtained; clear appearance (not xanthochromic); cell count 320/mm3 (lymphocyte predominance, ~85%); RBC <5",
            scoreDelta: 2,
          },
          {
            id: "inv_csfbio",
            text: "CSF biochemistry: protein, glucose, chloride (assess for viral vs. bacterial pattern)",
            isOptimal: true,
            findings:
              "Protein 85 mg/dL (mildly elevated), glucose 45 mg/dL (normal), chloride 115 mEq/L (normal); viral pattern (normal glucose, moderate protein elevation)",
            scoreDelta: 2,
          },
          {
            id: "inv_csf_je",
            text: "CSF JE-specific serology: IgM anti-JE antibody (highly specific for recent JE infection)",
            isOptimal: true,
            findings:
              "CSF JE IgM positive; CSF JE IgG negative; confirms recent JE infection in CNS",
            scoreDelta: 3,
          },
          {
            id: "inv_blood_je",
            text: "Serum JE-specific serology: IgM and IgG (confirm systemic JE infection)",
            isOptimal: true,
            findings:
              "Serum JE IgM positive (strong); IgG negative (acute infection); confirms JE viremia",
            scoreDelta: 2,
          },
          {
            id: "inv_mri",
            text: "MRI brain: assess for JE-typical lesions (thalamic, midbrain, brainstem involvement) and complications (hydrocephalus, edema)",
            isOptimal: true,
            findings:
              "MRI: bilateral thalamic hyperintensity on T2/FLAIR (classic JE finding); midbrain T2 hyperintensity; no hydrocephalus; minimal edema",
            scoreDelta: 2,
          },
          {
            id: "inv_eeg",
            text: "EEG: assess for seizure activity, focal abnormalities, generalized slowing",
            isOptimal: true,
            findings:
              "EEG: diffuse slow-wave activity (delta 0.5-3 Hz); seizure activity captured; no focal spike focus",
            scoreDelta: 1,
          },
          {
            id: "inv_cbc",
            text: "CBC: WBC count, differential, hemoglobin, platelets",
            isOptimal: true,
            findings:
              "WBC 12,500 (leukocytosis); neutrophil 75%; lymphocyte 20%; Hb 12 g/dL; platelets 250K",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Diagnosis of Japanese Encephalitis: JE IgM positive in CSF (highly specific), clinical presentation (fever, seizures, altered consciousness), endemic region (Gorakhpur), CSF pleocytosis with lymphocytic predominance, and MRI findings (thalamic involvement).",
        availableActions: [
          {
            id: "d_je",
            text: "Confirm Japanese Encephalitis: CSF JE IgM positive (definitive), serum JE IgM positive, clinical/epidemiological fit",
            isOptimal: true,
            findings:
              "Definitive diagnosis: CSF JE IgM positive + serum IgM positive + classic clinical presentation; JE encephalitis confirmed",
            scoreDelta: 3,
          },
          {
            id: "d_severity",
            text: "Assess severity: GCS 9 indicates moderate-to-severe encephalitis; seizures present; requires ICU management",
            isOptimal: true,
            findings:
              "GCS 9; altered consciousness; active seizures; severe disease; requires ICU-level monitoring and management",
            scoreDelta: 2,
          },
          {
            id: "d_complications",
            text: "Recognize potential complications: status epilepticus, increased ICP, pulmonary edema, secondary infections",
            isOptimal: true,
            findings:
              "Currently in post-ictal state; seizure control needed; monitor for status epilepticus; ICP management crucial",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Supportive care for Japanese Encephalitis (no specific antiviral proven effective): seizure control with antiepileptic drugs, management of cerebral edema, supportive respiratory care, ICU monitoring, and prevention of complications.",
        availableActions: [
          {
            id: "t_airway",
            text: "Secure airway and ensure adequate ventilation: intubation if GCS <8 or impending respiratory failure",
            isOptimal: true,
            findings:
              "GCS 9; at risk; prepare for intubation; secure airway now; protect from aspiration",
            scoreDelta: 2,
          },
          {
            id: "t_aed",
            text: "Anticonvulsants for seizure control: lorazepam (acute seizure management) followed by phenytoin or levetiracetam (maintenance)",
            isOptimal: true,
            findings:
              "Lorazepam 0.1 mg/kg IV (4 mg) for acute seizure; then phenytoin loading 15 mg/kg IV (250 mg), maintenance 5 mg/kg/day",
            scoreDelta: 2,
          },
          {
            id: "t_edema",
            text: "Management of cerebral edema: head elevation 30°, osmotic agents (mannitol, hypertonic saline) if increased ICP signs",
            isOptimal: true,
            findings:
              "Head of bed elevated 30°; mannitol 0.5-1 g/kg IV bolus × 4-6 hourly as needed; monitor ICP trends; avoid hyperthermia",
            scoreDelta: 2,
          },
          {
            id: "t_fluids",
            text: "Fluid management: maintain electrolytes, avoid hyponatremia (SIADH risk in encephalitis), careful fluid balance",
            isOptimal: true,
            findings:
              "Monitor Na, K carefully; maintain 2/3 maintenance fluids to prevent SIADH overload; 0.9% NS preferred",
            scoreDelta: 1,
          },
          {
            id: "t_supportive",
            text: "Supportive care: temperature control (avoid hyperthermia), pain control, nutrition, infection prevention",
            isOptimal: true,
            findings:
              "Antipyretics for fever control; tepid sponging if needed; nutritional support (NG feeding if intubated); prevent UTI, pneumonia",
            scoreDelta: 2,
          },
          {
            id: "t_steroids",
            text: "Corticosteroids: controversial; may reduce edema/inflammation but not standard; consider only if severe edema",
            isOptimal: true,
            findings:
              "Dexamethasone not routinely recommended but can consider if severe cerebral edema; 4 mg IV BD × 1-2 days",
            scoreDelta: 1,
          },
          {
            id: "t_skip",
            text: "Antiviral therapy (ribavirin) not recommended; no proven benefit in JE",
            isOptimal: true,
            findings: "Antivirals not standard treatment; supportive care is mainstay",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Intensive care and long-term follow-up: seizure control maintenance, neurological recovery assessment, rehabilitation for residual deficits, and public health measures for JE prevention.",
        availableActions: [
          {
            id: "f_icu",
            text: "ICU admission for continuous monitoring: vital signs, ICP (if monitor available), seizure surveillance, EEG monitoring",
            isOptimal: true,
            findings:
              "ICU admission; continuous cardiac, respiratory, neurological monitoring; EEG available for seizure detection",
            scoreDelta: 2,
          },
          {
            id: "f_recovery",
            text: "Monitor neurological recovery: improvement in consciousness, seizure control, motor/cognitive function",
            isOptimal: true,
            findings:
              "Expected recovery trajectory: seizures controlled by day 3-5; consciousness improves over 1-2 weeks; some residual deficits possible",
            scoreDelta: 2,
          },
          {
            id: "f_rehab",
            text: "Rehabilitation for residual deficits: physiotherapy, occupational therapy, speech therapy (if needed)",
            isOptimal: true,
            findings:
              "Long-term residual deficits possible (20-30% have neurological sequelae); rehabilitation crucial for functional recovery",
            scoreDelta: 1,
          },
          {
            id: "f_vaccination",
            text: "After recovery: discuss JE vaccination for prevention of future infection; counsel family on mosquito prevention",
            isOptimal: true,
            findings:
              "Post-recovery JE vaccination not recommended (immunity develops from infection); future prevention focus on vector control and vaccination of susceptibles",
            scoreDelta: 1,
          },
          {
            id: "f_public",
            text: "Public health response: report to health authorities, vector control measures (mosquito eradication in endemic areas)",
            isOptimal: true,
            findings:
              "Notify district health; coordinate vector control (DDT spraying, larval control); promote awareness in community",
            scoreDelta: 1,
          },
          {
            id: "f_outcomes",
            text: "Case-fatality rate in JE ~15-20%; neurological sequelae in 30-50% of survivors; early recognition and supportive care improve outcomes",
            isOptimal: true,
            findings:
              "Expected outcome: majority recover with variable degree of sequelae; mortality and morbidity reduced with proper ICU care",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Scrub Typhus in Tribal Population with Eschar and Positive Weil-Felix Test",
    presentingComplaint: "30-year-old tribal from Meghalaya with fever, eschar, rash, and positive Weil-Felix OXK test",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 35,
    examTags: ["NEXT_STEP1", "Infectious_Disease", "Dermatology"] as string[],
    patientProfile: {
      age: 30,
      sex: "Male",
      occupation: "Farmer/Tribal",
      history: "Lives in endemic scrub typhus region (Meghalaya); presents with fever, eschar, and rash characteristic of scrub typhus",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "30-year-old tribal from Meghalaya (endemic scrub typhus region) with fever × 1 week, headache, body aches, and appearance of skin lesions. Works in scrub jungle environment with high Trombiculid mite exposure. Assess occupation, environmental exposure, symptom progression.",
        availableActions: [
          {
            id: "h_fever",
            text: "Characterize fever: onset, pattern, Tmax, associated symptoms",
            isOptimal: true,
            findings:
              "Fever onset × 7 days; sustained high fever (Tmax 39.8°C); evening rise pattern; chills, sweats",
            scoreDelta: 1,
          },
          {
            id: "h_eschar",
            text: "Ask about skin lesion: location, onset relative to fever, itching, size",
            isOptimal: true,
            findings:
              "Noticed small painless nodule on thigh (where mite bite) × 10 days (before fever); developed into black eschar × 1 week",
            scoreDelta: 2,
          },
          {
            id: "h_rash",
            text: "Characterize rash: onset, distribution, character (maculopapular), duration",
            isOptimal: true,
            findings:
              "Rash started Day 4 of fever; maculopapular; trunk and proximal limbs; non-pruritic; fades on pressure",
            scoreDelta: 1,
          },
          {
            id: "h_systemic",
            text: "Systemic symptoms: headache, myalgia, joint pain, cough, GI symptoms",
            isOptimal: true,
            findings:
              "Severe headache; generalized myalgia; joint pain; mild cough; no GI symptoms; generalized malaise",
            scoreDelta: 1,
          },
          {
            id: "h_exposure",
            text: "Environmental exposure: occupation in scrub jungle, camping/fieldwork, recent outdoor activities",
            isOptimal: true,
            findings:
              "Works in scrub jungle; recent trip to forest; exposure to mites/chiggers likely; no vector protection measures",
            scoreDelta: 2,
          },
          {
            id: "h_prior",
            text: "Ask about prior scrub typhus or similar illness episodes",
            isOptimal: true,
            findings: "No prior known scrub typhus; first such illness",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Physical examination of patient with suspected scrub typhus. Focus on identification of eschar, rash distribution, lymphadenopathy (regional), and signs of systemic involvement.",
        availableActions: [
          {
            id: "e_vitals",
            text: "Record vital signs: temperature, HR, BP, RR",
            isOptimal: true,
            findings:
              "Temp 39.2°C, HR 102/min, BP 110/70 mmHg, RR 18/min; no hypotension",
            scoreDelta: 1,
          },
          {
            id: "e_eschar",
            text: "Examine eschar: location, size, character (black necrotic center, surrounding erythema, indurated)",
            isOptimal: true,
            findings:
              "Eschar on left thigh (site of mite bite); 1 cm diameter; black necrotic center (inoculation site); surrounding erythema; indurated; painless",
            scoreDelta: 3,
          },
          {
            id: "e_rash",
            text: "Examine rash: distribution (trunk, limbs), character (maculopapular, non-vesicular), blanching",
            isOptimal: true,
            findings:
              "Maculopapular rash on trunk and proximal arms; non-blanching; non-vesicular; distributed bilaterally",
            scoreDelta: 1,
          },
          {
            id: "e_lymph",
            text: "Palpate regional lymph nodes (draining area of eschar): size, tenderness",
            isOptimal: true,
            findings:
              "Left inguinal lymphadenopathy (regional to thigh eschar); nodes 1-2 cm; tender; discrete, mobile",
            scoreDelta: 2,
          },
          {
            id: "e_organs",
            text: "Examine for organ involvement: hepatomegaly, splenomegaly (scrub typhus can cause hepatitis)",
            isOptimal: true,
            findings:
              "Mild hepatomegaly (liver edge 1 cm below costal margin); liver non-tender; no splenomegaly",
            scoreDelta: 1,
          },
          {
            id: "e_respiratory",
            text: "Lung examination: assess for pneumonitis/ARDS (rare but serious complications)",
            isOptimal: true,
            findings: "Lungs clear bilaterally; no crackles; normal respiratory examination",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Investigations for scrub typhus diagnosis: Weil-Felix test (quick bedside), specific serology (ELISA anti-Orientia tsutsugamushi IgM), blood culture, CBC, and LFTs.",
        availableActions: [
          {
            id: "inv_weil",
            text: "Weil-Felix test (heterophile antibody test): OXK agglutination positive in scrub typhus (diagnostic but less specific)",
            isOptimal: true,
            findings:
              "Weil-Felix test: OXK positive (1:1280 titer); OX19 and OX2 negative (differentiates scrub typhus from spotted fevers)",
            scoreDelta: 2,
          },
          {
            id: "inv_serology",
            text: "Scrub typhus-specific serology: anti-Orientia tsutsugamushi IgM and IgG ELISA",
            isOptimal: true,
            findings:
              "Anti-OT IgM ELISA positive; IgG negative or low (acute infection); confirms scrub typhus",
            scoreDelta: 2,
          },
          {
            id: "inv_pcr",
            text: "PCR for Orientia tsutsugamushi (if available): highly specific; positive in blood during acute phase",
            isOptimal: true,
            findings: "PCR positive for OT (if available at reference lab); confirms diagnosis",
            scoreDelta: 1,
          },
          {
            id: "inv_cbc",
            text: "Complete blood count: assess for anemia, leukopenia, thrombocytopenia",
            isOptimal: true,
            findings:
              "WBC 6,500 (normal, not elevated as might be expected); platelets 150K (mild thrombocytopenia); Hb 12.8 g/dL",
            scoreDelta: 1,
          },
          {
            id: "inv_lft",
            text: "Liver function tests: assess for hepatitis (mild LFT elevation common in scrub typhus)",
            isOptimal: true,
            findings:
              "AST 78 U/L, ALT 65 U/L (mildly elevated); ALP 95 U/L; bilirubin 0.8 mg/dL (normal); albumin 3.8 g/dL",
            scoreDelta: 1,
          },
          {
            id: "inv_rft",
            text: "Renal function: assess for acute kidney injury risk (severe scrub typhus can cause renal involvement)",
            isOptimal: true,
            findings:
              "Creatinine 0.9 mg/dL (normal), BUN 18 mg/dL; renal function normal currently",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Diagnosis of scrub typhus: eschar (pathognomonic), positive Weil-Felix OXK, specific anti-OT IgM positive, endemic region (Meghalaya), clinical presentation (fever, rash, lymphadenopathy).",
        availableActions: [
          {
            id: "d_scrub",
            text: "Confirm scrub typhus: eschar (pathognomonic) + positive Weil-Felix + anti-OT IgM positive",
            isOptimal: true,
            findings:
              "Definitive diagnosis: classic eschar, positive serology, endemic region; scrub typhus confirmed",
            scoreDelta: 3,
          },
          {
            id: "d_severity",
            text: "Assess severity: uncomplicated scrub typhus (fever, rash, eschar, mild hepatitis); no organ failure",
            isOptimal: true,
            findings:
              "Mild disease: no ARDS, normal renal function, normal consciousness; good prognosis with treatment",
            scoreDelta: 1,
          },
          {
            id: "d_complications",
            text: "Recognize complications if develop: ARDS, acute kidney injury, meningitis (monitor for deterioration)",
            isOptimal: true,
            findings:
              "Currently uncomplicated; vigilant monitoring needed for potential complications",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Treatment of scrub typhus: specific antibiotic therapy (doxycycline is drug of choice), supportive care, and monitoring for complications.",
        availableActions: [
          {
            id: "t_doxy",
            text: "Doxycycline is first-line: 100 mg PO/IV twice daily × 7-10 days (effective against Orientia tsutsugamushi)",
            isOptimal: true,
            findings:
              "Doxycycline 100 mg BD × 10 days; fever expected to defervescence within 48 hours of starting; excellent response rate",
            scoreDelta: 3,
          },
          {
            id: "t_altbiotic",
            text: "Alternative antibiotics if doxycycline contraindicated: azithromycin 500 mg daily × 7-10 days or chloramphenicol",
            isOptimal: true,
            findings:
              "Doxycycline appropriate here; azithromycin alternative if allergy/pregnancy",
            scoreDelta: 1,
          },
          {
            id: "t_supportive",
            text: "Supportive care: antipyretics for fever, analgesics for myalgia, adequate hydration",
            isOptimal: true,
            findings:
              "Acetaminophen for symptomatic relief; ensure hydration; bed rest; monitor for complications",
            scoreDelta: 1,
          },
          {
            id: "t_monitoring",
            text: "Monitor for antibiotic response and complications: clinical improvement expected within 48 hrs; watch for organ involvement",
            isOptimal: true,
            findings:
              "Expected defervescence within 2 days; rash should improve within 1 week; monitor renal function, consciousness",
            scoreDelta: 1,
          },
          {
            id: "t_skip",
            text: "Treat only with supportive care without antibiotics",
            isOptimal: false,
            findings: "Suboptimal; specific antibiotic therapy essential for scrub typhus cure",
            scoreDelta: -2,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Follow-up of scrub typhus treatment: confirm clinical response to doxycycline, document complete recovery, and provide prevention counseling for future vector exposure.",
        availableActions: [
          {
            id: "f_response",
            text: "Monitor treatment response: fever resolution (48-72 hours), rash fading, symptom improvement",
            isOptimal: true,
            findings:
              "By Day 2-3: fever resolved, rash fading, myalgia improving; by Day 7: complete clinical recovery expected",
            scoreDelta: 2,
          },
          {
            id: "f_completion",
            text: "Ensure completion of full antibiotic course (7-10 days) to prevent relapse",
            isOptimal: true,
            findings:
              "Patient advised to complete full doxycycline course despite symptom improvement",
            scoreDelta: 1,
          },
          {
            id: "f_counseling",
            text: "Counseling on prevention: wear protective clothing when in scrub areas, use repellents, avoid mite-infested areas",
            isOptimal: true,
            findings:
              "Education on protective measures: long sleeves, trousers tucked in boots, DEET repellent; avoid lying on grass in endemic areas",
            scoreDelta: 1,
          },
          {
            id: "f_contacts",
            text: "Family/close contact screening for disease: scrub typhus not transmitted person-to-person; no isolation needed",
            isOptimal: true,
            findings:
              "No person-to-person transmission; contacts at no risk; standard precautions sufficient",
            scoreDelta: 1,
          },
          {
            id: "f_outcomes",
            text: "Expected outcome: complete clinical recovery with proper antibiotic treatment; mortality <1% if treated early; mortality high if untreated",
            isOptimal: true,
            findings:
              "Excellent prognosis with doxycycline; expected full recovery within 1-2 weeks",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
  {
    title: "Chikungunya Chronic Arthropathy with Persistent Polyarthralgia and CHIKV IgM Positivity",
    presentingComplaint: "45-year-old female with post-chikungunya chronic polyarthralgia affecting multiple joints × 3 months",
    caseType: "Emergency",
    difficulty: "MEDIUM" as const,
    estimatedMinutes: 30,
    examTags: ["NEXT_STEP1", "Rheumatology", "Infectious_Disease"] as string[],
    patientProfile: {
      age: 45,
      sex: "Female",
      occupation: "Homemaker",
      history: "Acute chikungunya fever 4 months ago; resolved, but now has chronic debilitating arthralgia affecting hands, feet, knees",
    },
    stages: [
      {
        stage: "HISTORY" as const,
        stageOrder: 1,
        prompt:
          "45-year-old female with history of acute chikungunya fever 4 months ago (confirmed at that time), presenting with persistent debilitating arthralgia in hands, feet, knees × 3 months. Initial fever resolved but joint pain has become chronic. Assess pain character, functional impact, and prior treatment.",
        availableActions: [
          {
            id: "h_acute",
            text: "Confirm prior acute chikungunya: fever, rash, joint pain, diagnostic confirmation",
            isOptimal: true,
            findings:
              "Acute illness 4 months ago: high fever (40°C) × 5 days, maculopapular rash on trunk/limbs, severe polyarthralgia; diagnosed as chikungunya (likely clinical)",
            scoreDelta: 2,
          },
          {
            id: "h_recovery",
            text: "Characterize symptom timeline: when pain improved after acute illness, then when it recurred",
            isOptimal: true,
            findings:
              "Acute phase resolved by Day 10 (fever gone), but joint pain persisted; improved gradually over weeks, then worsened again × 3 months",
            scoreDelta: 2,
          },
          {
            id: "h_joints",
            text: "Which joints affected: hands (PIP/MCP), feet, knees, other joints; asymmetric vs. symmetric",
            isOptimal: true,
            findings:
              "Hands (PIP and MCP joints), feet, knees predominantly; symmetric polyarthralgia; also shoulders/wrists",
            scoreDelta: 2,
          },
          {
            id: "h_severity",
            text: "Pain severity and functional impact: ability to work, activities of daily living, disability",
            isOptimal: true,
            findings:
              "Severe pain (7/10 at worst); unable to perform household chores, difficulty writing/holding objects; significant disability",
            scoreDelta: 2,
          },
          {
            id: "h_treatment",
            text: "Prior treatments tried: NSAIDs, other analgesics, physical therapy, response",
            isOptimal: true,
            findings:
              "NSAID therapy (naproxen, ibuprofen) provides partial relief only; PT not done; pain persists despite medications",
            scoreDelta: 1,
          },
          {
            id: "h_swelling",
            text: "Ask about joint swelling: present vs. absent (CHIKV arthropathy characterized by arthralgia rather than arthritis)",
            isOptimal: true,
            findings:
              "Minimal to no visible swelling; pain predominates over swelling; distinguishes from rheumatoid arthritis",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "EXAMINATION" as const,
        stageOrder: 2,
        prompt:
          "Physical examination of patient with chronic chikungunya arthropathy. Assess joint tenderness, swelling (or lack thereof), range of motion, and functional limitations.",
        availableActions: [
          {
            id: "e_hand",
            text: "Hand examination: palpate MCP and PIP joints for tenderness, swelling, erythema",
            isOptimal: true,
            findings:
              "MCP and PIP joints tender bilaterally; minimal swelling (not inflammatory-looking); no erythema; full ROM",
            scoreDelta: 2,
          },
          {
            id: "e_feet",
            text: "Feet examination: ankle and toe joints for tenderness and swelling",
            isOptimal: true,
            findings:
              "Ankles tender bilaterally; mild soft tissue swelling around ankles; pain with dorsiflexion; no erythema",
            scoreDelta: 1,
          },
          {
            id: "e_knees",
            text: "Knee examination: tenderness, effusion, range of motion, McMurray/Lachman signs",
            isOptimal: true,
            findings:
              "Knee tenderness; no obvious effusion on exam; full ROM achieved despite pain; McMurray negative; no ligamentous instability",
            scoreDelta: 1,
          },
          {
            id: "e_general",
            text: "General examination: assess for signs of systemic disease, skin manifestations (residual rash)",
            isOptimal: true,
            findings:
              "No residual rash; no skin manifestations; general health good; no systemic signs of active disease",
            scoreDelta: 1,
          },
          {
            id: "e_inflammation",
            text: "Assess for inflammatory signs: morning stiffness duration, warmth, erythema (vs. mechanical pain)",
            isOptimal: true,
            findings:
              "Morning stiffness ~30 min (less than seen in RA); no morning stiffness in afternoon; joint warmth absent",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "INVESTIGATION" as const,
        stageOrder: 3,
        prompt:
          "Investigations to confirm chikungunya etiology and exclude other causes of polyarthralgia: CHIKV IgM/IgG serology, rheumatoid serology (RF, anti-CCP), ANA, inflammatory markers (ESR, CRP).",
        availableActions: [
          {
            id: "inv_chikv",
            text: "Chikungunya serology: IgM and IgG antibodies (confirm recent/prior CHIKV infection)",
            isOptimal: true,
            findings:
              "CHIKV IgM positive (indicates recent infection, can persist 2-3 months); CHIKV IgG positive (indicates past infection/immunity)",
            scoreDelta: 2,
          },
          {
            id: "inv_rf",
            text: "Rheumatoid factor (RF) and anti-CCP antibodies: exclude rheumatoid arthritis diagnosis",
            isOptimal: true,
            findings: "RF negative; anti-CCP negative; excludes seropositive RA",
            scoreDelta: 1,
          },
          {
            id: "inv_ana",
            text: "Antinuclear antibody (ANA) screening: exclude SLE and other connective tissue disease",
            isOptimal: true,
            findings: "ANA negative; excludes systemic lupus erythematosus",
            scoreDelta: 1,
          },
          {
            id: "inv_esr",
            text: "ESR and CRP: assess for systemic inflammation (CHIKV arthropathy shows variable inflammatory markers)",
            isOptimal: true,
            findings:
              "ESR 18 mm/1st hour (normal to mildly elevated); CRP 0.8 mg/dL (normal); minimal inflammation on labs",
            scoreDelta: 1,
          },
          {
            id: "inv_xray",
            text: "X-rays of affected joints (hands, feet, knees): assess for structural damage vs. normal findings",
            isOptimal: true,
            findings:
              "X-rays: no erosions, no joint space narrowing, normal architecture; no degenerative changes; rules out RA/OA",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "DIAGNOSIS" as const,
        stageOrder: 4,
        prompt:
          "Diagnosis of post-chikungunya chronic arthropathy: prior acute chikungunya infection, persistent polyarthralgia (>3 months), minimal joint swelling, negative RA serology, CHIKV IgM positive, normal inflammatory markers.",
        availableActions: [
          {
            id: "d_chikv_chronic",
            text: "Confirm chikungunya chronic arthropathy: CHIKV IgM positive, prior acute infection, chronic arthralgia pattern",
            isOptimal: true,
            findings:
              "Definitive diagnosis: classic history of acute CHIKV, persistent arthralgia >3 months, IgM positivity; chronic arthropathy confirmed",
            scoreDelta: 2,
          },
          {
            id: "d_exclude_ra",
            text: "Exclude rheumatoid arthritis: RF and anti-CCP negative, minimal inflammation, no structural damage on imaging",
            isOptimal: true,
            findings:
              "RA excluded: serologically negative, no inflammatory features on exam, imaging normal",
            scoreDelta: 1,
          },
          {
            id: "d_type",
            text: "Classify as true arthralgia (pain) rather than arthritis (inflammation): distinguished by minimal swelling and normal inflammatory markers",
            isOptimal: true,
            findings:
              "Arthralgia without significant arthritis; pain predominates; not inflammatory in nature",
            scoreDelta: 1,
          },
          {
            id: "d_prognosis",
            text: "Note that chikungunya arthropathy can persist for months to years in some patients; chronicity variable",
            isOptimal: true,
            findings:
              "Chronic arthropathy may persist; gradual resolution expected over 1-2 years in majority, but some experience prolonged symptoms",
            scoreDelta: 1,
          },
        ],
      },
      {
        stage: "TREATMENT" as const,
        stageOrder: 5,
        prompt:
          "Management of post-chikungunya chronic arthropathy: NSAIDs for pain, physical therapy, supportive measures, and reassurance regarding long-term prognosis.",
        availableActions: [
          {
            id: "t_nsaid",
            text: "NSAIDs for pain management: ibuprofen 400-600 mg TDS or naproxen 500 mg BD as needed",
            isOptimal: true,
            findings:
              "Continue NSAID therapy; optimize dose and frequency; consider gastroprotection if chronic use needed",
            scoreDelta: 2,
          },
          {
            id: "t_pt",
            text: "Physical therapy and rehabilitation: gentle exercises, range of motion work, strengthen supporting muscles",
            isOptimal: true,
            findings:
              "PT referral: gentle joint mobilization, strengthening exercises, occupational therapy for functional improvement",
            scoreDelta: 2,
          },
          {
            id: "t_topical",
            text: "Topical analgesics: diclofenac gel or capsaicin cream applied to affected joints for local pain relief",
            isOptimal: true,
            findings:
              "Topical NSAIDs or capsaicin cream recommended for affected joint areas",
            scoreDelta: 1,
          },
          {
            id: "t_supplements",
            text: "Nutritional support: consider glucosamine/chondroitin (evidence limited but commonly used), omega-3 fatty acids",
            isOptimal: true,
            findings:
              "Glucosamine 1500 mg daily (though evidence limited); ensure adequate nutrition; omega-3 supplementation reasonable",
            scoreDelta: 1,
          },
          {
            id: "t_biologic",
            text: "Biologic agents (TNF inhibitors) may be considered in severe refractory cases, but not standard first-line",
            isOptimal: true,
            findings:
              "Not indicated initially; reserve for severe refractory cases unresponsive to NSAIDs/PT",
            scoreDelta: 1,
          },
          {
            id: "t_counseling",
            text: "Reassurance and counseling: explain benign course, possibility of gradual improvement, avoid unnecessary treatments",
            isOptimal: true,
            findings:
              "Counsel that arthropathy is self-limiting; no permanent joint damage; expect gradual improvement over months-years",
            scoreDelta: 1,
          },
          {
            id: "t_skip",
            text: "Prescribe immunosuppressive therapy without justification",
            isOptimal: false,
            findings: "Inappropriate; post-viral arthropathy typically responds to conservative management",
            scoreDelta: -1,
          },
        ],
      },
      {
        stage: "FOLLOWUP" as const,
        stageOrder: 6,
        prompt:
          "Long-term follow-up of post-chikungunya arthropathy: assess pain trajectory, functional recovery, need for ongoing therapy, and eventual resolution.",
        availableActions: [
          {
            id: "f_monitoring",
            text: "Periodic assessment (monthly initially, then every 3 months): track pain severity, functional ability, response to therapy",
            isOptimal: true,
            findings:
              "Follow-up visits: reassess pain scores, functional status, efficacy of current treatment regimen",
            scoreDelta: 1,
          },
          {
            id: "f_pain",
            text: "Monitor pain trajectory: expect gradual improvement over months; some patients experience delayed recovery",
            isOptimal: true,
            findings:
              "Pain expected to gradually improve; target 50% reduction in 3 months; further improvement over subsequent months",
            scoreDelta: 1,
          },
          {
            id: "f_function",
            text: "Track functional improvement: ability to perform ADLs, work capacity, quality of life",
            isOptimal: true,
            findings:
              "Functional assessment using disability scales; goal to restore ADL independence and work capacity",
            scoreDelta: 1,
          },
          {
            id: "f_imaging",
            text: "Repeat imaging (X-rays, USS) at 6-12 months if symptoms persist: confirm absence of structural damage",
            isOptimal: true,
            findings:
              "Imaging stability expected; no progressive structural changes; reassuring for patient",
            scoreDelta: 1,
          },
          {
            id: "f_outcomes",
            text: "Expected outcomes: majority experience significant improvement within 1-2 years; some have chronic symptoms (up to 30% persistent at 1 year)",
            isOptimal: true,
            findings:
              "Excellent long-term prognosis: no permanent joint damage; gradual functional recovery; employment resumption expected",
            scoreDelta: 1,
          },
        ],
      },
    ],
  },
];
