// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for Obstetrics & Gynecology (OG)
// High-yield obstetric emergencies and management scenarios
// ---------------------------------------------------------------------------

export const obgScenarios = [
  // ─── 1. Hypertensive Disorders of Pregnancy — Eclampsia ────────────────
  {
    topicCode: "OG-MOD-02-TOP-01",
    scenario: {
      patientAge: 24,
      patientSex: "Female",
      patientOccupation: "Homemaker",
      patientLocation: "Mumbai, Maharashtra",
      chiefComplaint: "Severe headache with seizures at 34 weeks pregnancy",
      historyOfPresent: `
- Onset: Sudden onset of severe occipital headache 4 hours ago, followed by 2 episodes of generalized tonic-clonic seizures (5 min each, now post-ictal)
- Character: Throbbing, excruciating headache. Seizures witnessed — loss of consciousness, tongue biting, foaming at mouth
- Associated: Visual disturbances (blurred vision, photophobia) past 2 days, right upper quadrant abdominal pain (epigastric), nausea and vomiting 3 times
- Severity: Headache 10/10, deeply distressed
- Gestational age: 34 weeks (confirmed on USG at 20 weeks)
- No prior seizures. No trauma. No fever. No meningismus.
- Recognized hypertension 2 weeks ago (BP 160/110) but mother delayed hospital visit — "thought it would pass"
      `.trim(),
      pastHistory: "Primigravida. Antenatal care started late at 28 weeks. Previous visits: Nil proteinuria, normal glucose. No diabetes, no renal disease, no thyroid disorder. No previous hypertension before pregnancy.",
      familyHistory: "Mother has hypertension (since age 45). Father hypertensive. No family history of eclampsia.",
      socialHistory: "Lives in joint family in urban Mumbai slum. Non-smoker, non-alcoholic. High stress due to financial constraints.",
      drugHistory: "No regular medications. No antihypertensives were started despite elevated BP 2 weeks ago. No allergies to drugs.",
      vitals: { pulse: 108, bp: "170/120", temp: 37.6, rr: 26, spo2: 93 },
      generalExam: `
- General appearance: Post-ictal, drowsy but arousable, very anxious, bleeding from tongue
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Mild — lips
- Edema: Marked facial edema (puffiness), bilateral pedal edema +++, hand edema ++
- Reflexes: Hyperreflexia (brisk) — exaggerated knee jerk, ankle clonus present (3-4 beats)
- Fundoscopy: Papilledema present
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Apex beat in 5th ICS (displaced laterally due to pregnancy)",
          heart_sounds: "S1, S2 normal. No murmurs. Tachycardia present.",
          blood_pressure: "Right arm: 170/120, Left arm: 168/118 mmHg",
          peripheral_pulses: "Bounding pulses, regular rhythm",
        },
        respiratory: {
          chest_inspection: "Equal chest movement, tachypneic",
          auscultation_lungs: "Bilateral air entry clear. No added sounds.",
        },
        abdominal: {
          abdo_inspection: "Gravid abdomen with stretch marks. No scars.",
          palpation_superficial: "Tender in right upper quadrant (RUQ), no rebound",
          palpation_deep: "Fundal height 32 cm (consistent with 34 weeks). Uterus soft between contractions.",
          liver_palpation: "Liver tender on palpation — edge just palpable",
          kidney_palpation: "Right CVA tenderness present",
        },
        neurological: {
          consciousness: "Post-ictal, GCS 13/15 (arousable). Oriented when aroused.",
          cranial_nerves: "Grossly intact but difficult to assess fully due to altered sensorium",
          motor_upper: "Normal strength but brisk reflexes",
          motor_lower: "Normal strength but brisk reflexes",
          reflexes: "Hyperreflexia — biceps 3+, knee jerk 4+ (brisk), ankle jerk 4+",
          clonus: "Ankle clonus 3-4 beats present (indicates imminent/established eclampsia)",
          plantar: "Flexor bilaterally",
        },
      },
      availableInvestigations: [
        { id: "bp_monitoring", name: "Blood Pressure (repeated)", cost: 50, turnaround: "5 min", category: "Vital", result: "Systolic >160 and Diastolic >110 on 2 measurements 4 hours apart", isAbnormal: true, interpretation: "Severe hypertension in pregnancy — diagnostic criterion for severe preeclampsia/eclampsia.", isEssential: true },
        { id: "blood_sugar", name: "Random Blood Sugar", cost: 100, turnaround: "5 min", category: "Biochemistry", result: "RBS: 198 mg/dL", isAbnormal: true, interpretation: "Elevated due to stress hyperglycemia from eclampsia and seizures.", isEssential: false },
        { id: "rft", name: "Renal Function Test", cost: 500, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 42 mg/dL, Creatinine: 1.4 mg/dL (baseline pre-pregnancy likely 0.7-0.8), Na: 132 mEq/L (low), K: 4.8 mEq/L", isAbnormal: true, interpretation: "Elevated creatinine indicates acute kidney injury. Low sodium suggests SIADH or fluid shifts from severe preeclampsia.", isEssential: true },
        { id: "lft", name: "Liver Function Test", cost: 500, turnaround: "1 hour", category: "Biochemistry", result: "SGOT: 248 U/L, SGPT: 180 U/L, ALP: 120 U/L, Bilirubin: 1.8 mg/dL (total), Albumin: 2.8 g/dL", isAbnormal: true, interpretation: "Hepatic involvement (HELLP syndrome pattern) — markedly elevated transaminases, hyperbilirubinemia, low albumin — indicates severe eclampsia with organ dysfunction.", isEssential: true },
        { id: "platelets", name: "Platelet Count", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Platelet count: 78,000/μL (normal >150,000)", isAbnormal: true, interpretation: "Thrombocytopenia — part of HELLP syndrome (Hemolysis, Elevated Liver enzymes, Low Platelets) occurring with severe preeclampsia/eclampsia.", isEssential: true },
        { id: "cbc", name: "CBC + Blood Smear", cost: 400, turnaround: "1 hour", category: "Hematology", result: "Hb: 11.2 g/dL, Hct: 42%, WBC: 16,200/μL, Schistocytes on blood smear (fragmented RBCs)", isAbnormal: true, interpretation: "Microangiopathic hemolytic anemia (MAHA) — schistocytes from mechanical destruction of RBCs in microvasculature — confirms HELLP syndrome.", isEssential: true },
        { id: "coag_profile", name: "Coagulation Profile (PT/INR, aPTT, fibrinogen)", cost: 600, turnaround: "2 hours", category: "Hematology", result: "PT: 16 sec, INR: 1.4, aPTT: 38 sec, Fibrinogen: 180 mg/dL (low)", isAbnormal: true, interpretation: "Coagulopathy — prolonged PT/aPTT, low fibrinogen indicate consumptive coagulopathy/DIC secondary to eclampsia.", isEssential: true },
        { id: "urine_protein", name: "Urine Protein (24-hour) or Spot PCR", cost: 400, turnaround: "2 hours", category: "Biochemistry", result: "Spot urine PCR: 4200 mg/g creatinine (>3000 is nephrotic range)", isAbnormal: true, interpretation: "Nephrotic-range proteinuria — severe preeclampsia with significant glomerular involvement.", isEssential: true },
        { id: "ctg", name: "Cardiotocography (Fetal Heart Rate monitoring)", cost: 300, turnaround: "Continuous", category: "Obstetric", result: "Baseline FHR 158 bpm, decreased variability (4-5 bpm), no accelerations, occasional late decelerations", isAbnormal: true, interpretation: "Fetal distress pattern — late decelerations suggest placental insufficiency from eclampsia. Non-reassuring.", isEssential: true },
        { id: "obstetric_ultrasound", name: "Obstetric Ultrasound + Doppler", cost: 1500, turnaround: "30 min", category: "Imaging", result: "Fetal weight estimated 2100g (appropriate for 34 weeks). Amniotic fluid adequate (AFI 16cm). Placenta anterior. Umbilical artery Doppler: abnormal with diastolic notch bilaterally (IUGR pattern)", isAbnormal: true, interpretation: "Intrauterine growth restriction (IUGR) with placental dysfunction evidenced by Doppler abnormality — indicates placental insufficiency from eclampsia.", isEssential: true },
      ],
      correctDiagnosis: "Eclampsia at 34 weeks gestation (new-onset seizures in setting of severe preeclampsia) with HELLP syndrome (Hemolysis, Elevated Liver enzymes, Low Platelets) and DIC",
      differentials: [
        { diagnosis: "Cerebral Venous Sinus Thrombosis (CVST)", likelihood: "MEDIUM", reasoning: "Can cause seizures in pregnancy. However, CT/MRI with contrast would show thrombosis. Headache and seizure profile similar. Would need imaging to exclude." },
        { diagnosis: "Viral Meningitis", likelihood: "LOW", reasoning: "Fever 37.6°C (not high), no neck stiffness reported, CSF would show mononuclear predominance. Less likely in this context." },
        { diagnosis: "Intracranial hemorrhage / Stroke", likelihood: "MEDIUM", reasoning: "Severe hypertension can cause hemorrhage or thrombotic stroke. CT head would show bleed. Eclampsia remains most likely given pregnancy context and other features." },
        { diagnosis: "Idiopathic Seizure Disorder", likelihood: "LOW", reasoning: "New-onset seizures in pregnancy at 34 weeks with severe hypertension, edema, and hyperreflexia make eclampsia far more likely than idiopathic epilepsy." },
      ],
      diagnosticReasoning: "24-year-old primigravida at 34 weeks with new-onset severe hypertension (BP 170/120) and seizures — classic definition of eclampsia. Multiple features confirm severity: marked edema (facial, pedal, hand), hyperreflexia with ankle clonus (indicates CNS irritability from severe hypertension and cerebral edema), RUQ pain (hepatic involvement), abnormal LFTs (SGOT 248, SGPT 180 — HELLP pattern), thrombocytopenia (78,000), microangiopathic hemolysis (schistocytes), coagulopathy (prolonged PT/aPTT, low fibrinogen), nephrotic-range proteinuria. CTG shows fetal distress with late decelerations and decreased variability. Obstetric ultrasound confirms IUGR with abnormal Doppler — placental insufficiency. This is a life-threatening emergency requiring immediate intervention.",
      managementPlan: {
        immediateActions: [
          { action: "Call Emergency Code — prepare for delivery (cesarean if undelivered)", reasoning: "Eclampsia at viable gestational age (34 weeks) — definitive treatment is delivery. Life-threatening for mother and fetus.", priority: "STAT" },
          { action: "Continuous 1:1 nursing with seizure precautions — padded cot rails, suction at bedside, airway equipment ready", reasoning: "High risk of repeated seizures. Prevent aspiration and traumatic injury.", priority: "STAT" },
          { action: "Give IV Magnesium Sulfate loading dose immediately", reasoning: "Gold standard for seizure prophylaxis in eclampsia. Reduces seizure recurrence and maternal mortality by 50%.", priority: "STAT" },
          { action: "Establish 2 large-bore IVs, keep on LR infusion", reasoning: "For magnesium, medications, blood products if needed. Avoid dextrose (can worsen fetal acidosis).", priority: "STAT" },
          { action: "Control blood pressure — IV antihypertensive if SBP >160 or MBP >130", reasoning: "Prevent hypertensive emergencies but avoid excessive drops (can reduce placental perfusion). Target: mean BP 105-125 mmHg.", priority: "STAT" },
          { action: "Notify anesthesia and pediatrics — prepare for emergency operative delivery with neonatal resuscitation", reasoning: "Fetus showing distress (late decelerations) — will need immediate delivery, likely cesarean. NICU admission likely.", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Magnesium Sulfate (Seizure prophylaxis & treatment)", examples: ["Pritchard regimen: 4g IV over 5-10 min (loading), then 1g IM every 4 hours for 24 hours post-delivery", "Alternative: 6g IV over 20 min then 2g/hour IV infusion"], route: "IV/IM", duration: "24 hours after delivery or 24 hours after last seizure", reasoning: "Magnesium is the first-line drug for eclampsia — prevents seizure recurrence and reduces eclamptic mortality by 50% compared to placebo. Also reduces maternal complications. Mechanism: stabilizes cell membranes, blocks calcium influx.", contraindications: ["Renal failure (eGFR <20) — use lower doses or avoid", "Myasthenia Gravis"], indianContext: "MgSO4 ampoule 50% (5mL = 2.5g) costs ₹20-30. Pritchard regimen used in most Indian hospitals." },
          { drugClass: "Antihypertensive (blood pressure control)", examples: ["IV Labetalol 20mg, repeat every 10-20 min up to 220mg total", "IV Hydralazine 5mg, repeat every 20 min (max 30mg/dose, 300mg/24hr)", "Nifedipine 10mg (swallowed) every 20 min for 60 min", "Methyldopa 500mg IV every 4-6 hours"], route: "IV/Oral", duration: "Until BP controlled and stable post-delivery", reasoning: "Target: SBP 140-150 mmHg, DBP 90-100 mmHg. Avoid excessive drops which reduce placental perfusion. Labetalol preferred (safest in pregnancy). Avoid ACE inhibitors (teratogenic).", contraindications: ["Labetalol: asthma, heart block", "Hydralazine: tachycardia-prone", "Nifedipine: grapefruit interaction"], indianContext: "Labetalol expensive (₹150-200/10mg vial). Methyldopa 250mg tablet at ₹3-5. Hydralazine 25mg tablet at ₹8-12." },
          { drugClass: "Corticosteroid (fetal lung maturity)", examples: ["Betamethasone 12mg IM x 2 doses (24 hours apart) OR Dexamethasone 6mg IM x 4 doses (12 hours apart)"], route: "IM", duration: "2 doses (or 4 for dexamethasone) given before delivery if <34 weeks", reasoning: "At 34 weeks, fetal lungs are approaching maturity but corticosteroids reduce neonatal RDS, IVH, NEC, neonatal death by 30-50%. Give even in eclampsia if not already given.", contraindications: ["None absolute in context of eclampsia"], indianContext: "Betamethasone 12mg vial ₹80-100 (imported). Dexamethasone 4mg tablet ₹1-2 (generic, cheaper)." },
          { drugClass: "Antibiotics (if cesarean section)", examples: ["Cefazolin 1-2g IV (cephalosporin)", "Ampicillin 2g IV + Gentamicin 1.5mg/kg IV"], route: "IV", duration: "Prophylaxis during surgery, continue 24 hours post-op", reasoning: "Standard prophylaxis for cesarean delivery to prevent surgical site infection (SSI) and other postoperative infections.", contraindications: ["Penicillin allergy — use clindamycin + gentamicin instead"], indianContext: "Cefazolin 1g vial ₹30-50. Available at all government hospitals." },
          { drugClass: "Oxytocin (uterotonic after delivery of baby)", examples: ["Oxytocin 10 units IM after delivery of baby", "Ergotamine 0.2mg IM (avoid pre-delivery due to retained twin risk)", "Carboprost 250μg IM if bleeding refractory"], route: "IM", duration: "Single dose after delivery of baby (NOT before), can repeat if bleeding", reasoning: "Promotes placental expulsion and reduces PPH risk. Given after baby is delivered to avoid retained placenta.", contraindications: ["Hypertension (ergotamine can worsen — avoid in eclampsia)", "Coronary artery disease"], indianContext: "Oxytocin 10 IU vial ₹5-10. Cheapest and safest choice in eclampsia." },
        ],
        nonPharmacological: [
          { intervention: "Keep in quiet, dark room — minimize stimulation to prevent seizure trigger", reasoning: "Avoid sensory stimuli that can precipitate further seizures", duration: "Continuous until delivery" },
          { intervention: "Bed rest with head elevated 30°", reasoning: "Reduces intracranial pressure, improves renal perfusion", duration: "Until delivery and stabilization" },
          { intervention: "Foley catheterization — strict intake/output monitoring", reasoning: "Assess urine output (oliguria <0.5mL/kg/hr suggests acute kidney injury). Urine color monitors hemoglobinuria (HELLP)", duration: "During admission and post-delivery" },
          { intervention: "Nothing by mouth (NPO) — prepare for emergency cesarean", reasoning: "Risk of aspiration during anesthesia", duration: "Until delivery decision made" },
        ],
        monitoring: [
          { parameter: "Continuous maternal BP and HR", frequency: "Every 5-15 minutes", target: "SBP 140-150, DBP 90-100 mmHg, HR <100", escalation: "If SBP >170 despite IV labetalol — check for placental abruption, increase labetalol dose" },
          { parameter: "Continuous fetal heart rate (CTG)", frequency: "Continuous", target: "Baseline 110-160, variability >5 bpm, accelerations present, no decelerations", escalation: "If persistent late decelerations or bradycardia <100 — proceed to emergency cesarean" },
          { parameter: "Urine output", frequency: "Hourly", target: ">0.5 mL/kg/hr", escalation: "If <0.5 mL/kg/hr — oliguria present, assess fluid status, check urine output for hemoglobinuria" },
          { parameter: "Repeat vital signs and urine output every 2 hours × 12 hours post-partum", frequency: "Every 2 hours", target: "Falling BP trend, normalizing, adequate urine output", escalation: "If BP rising again or oliguria — check for postpartum eclampsia (can occur up to 7 days post-delivery)" },
          { parameter: "Neurological checks — reflexes, clonus", frequency: "Every 2 hours", target: "Normal reflexes, no clonus", escalation: "If clonus returns — another seizure imminent, consider repeat magnesium" },
        ],
        lifestyle: {
          dos: ["Complete bed rest during pregnancy if not delivered", "High protein diet post-recovery (1.2g/kg) to rebuild albumin", "Sleep 8+ hours nightly — rest is critical", "Attend follow-up appointments"],
          donts: ["No lifting heavy weights for 6 weeks post-cesarean", "No prolonged standing", "Avoid stressful situations", "Do not stop medications abruptly post-delivery"],
          indianSpecific: ["Take care of newborn with support from family — physical exertion should be minimal", "Avoid hot weather exposure immediately post-delivery", "Sleep on left side for improved blood flow post-delivery", "Dietary advice: include dal (protein), leafy greens, whole grains for recovery", "Contact ASHA worker or government health center if symptoms return"],
        },
        followUp: {
          when: "6 weeks postpartum, then 3-6 months for long-term BP monitoring",
          what: ["BP check and antihypertensive continuation", "Repeat LFT, platelets to confirm normalization", "Counseling on future pregnancy risks (recurrence 15-25%)", "Baseline BP assessment — may have chronic hypertension"],
        },
        referral: {
          needed: true,
          to: "Obstetric ICU for management, Anesthesia for cesarean, NICU for newborn (preterm at 34 weeks)",
          urgency: "IMMEDIATE — life-threatening emergency",
        },
      },
      redFlags: [
        { flag: "Pulmonary edema (dyspnea, rales, low SpO2)", action: "Reduce IV fluids, consider diuretics, supplemental oxygen, ICU monitoring", urgency: "IMMEDIATE" },
        { flag: "Placental abruption (sudden severe abdominal pain, vaginal bleeding, FHR deceleration)", action: "Emergency cesarean section, activate MAST protocol, prepare for massive transfusion", urgency: "IMMEDIATE" },
        { flag: "Recurrent seizures despite magnesium", action: "Consider additional IV lorazepam 4mg, escalate to ICU, review magnesium levels (therapeutic: 4-8 mg/dL)", urgency: "IMMEDIATE" },
        { flag: "Postpartum eclampsia (seizures within 7 days after delivery)", action: "Give MgSO4 loading dose again, continue seizure prophylaxis", urgency: "IMMEDIATE" },
        { flag: "DIC (prolonged PT, low platelets dropping, low fibrinogen)", action: "Activate massive transfusion protocol, FFP, platelets, cryoprecipitate", urgency: "IMMEDIATE" },
      ],
      keyLearningPoints: [
        "Eclampsia = new-onset seizures in a woman with preeclampsia (HTN + proteinuria). Life-threatening.",
        "HELLP syndrome (Hemolysis, Elevated Liver enzymes, Low Platelets) occurs in 10-20% of eclamptic patients — check LFT and CBC immediately.",
        "Magnesium sulfate (Pritchard: 4g IV loading + 1g IM every 4 hours) is the gold standard — reduces seizure recurrence and maternal mortality.",
        "Eclampsia is 100% curable by delivery of baby and placenta — definitive management is emergency operative delivery.",
        "Postpartum eclampsia can occur up to 7 days after delivery even in women without antepartum features — maintain high vigilance.",
        "Risk factors: primigravida, pre-existing hypertension, obesity, older age, diabetes, renal/autoimmune disease. Antenatal BP screening is critical.",
        "Avoid labetalol in asthma, ACE inhibitors in pregnancy. Hydralazine first-line for years in India (now labetalol preferred but expensive).",
      ],
      commonMistakes: [
        "Delaying delivery in eclampsia — this is the only definitive cure. Every hour delay increases maternal and fetal morbidity/mortality.",
        "Using ergotamine in eclampsia — can precipitate hypertensive crisis. Use oxytocin instead.",
        "Not giving magnesium because seizure stopped — magnesium prophylaxis is essential to prevent recurrence (40% risk without it).",
        "Overlooking postpartum eclampsia — can occur up to 7 days post-delivery. Continue seizure precautions.",
        "Excessive blood pressure reduction — sudden drops can precipitate stroke or placental abruption. Target gradual reduction.",
        "Not checking for HELLP — liver involvement, hemolysis, thrombocytopenia must be excluded (impacts management and prognosis).",
      ],
      relevantHistoryQs: ["onset", "character", "severity", "associated", "prev_illness", "fam_cardiac", "fam_hypertension"],
      relevantExamIds: ["general_appearance", "edema", "blood_pressure", "heart_sounds", "liver_palpation", "kidney_palpation", "reflexes", "clonus", "fundoscopy"],
      difficulty: "HARD",
      estimatedMinutes: 25,
      subjectTags: ["OG", "EM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "OG2.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 2. Postpartum Hemorrhage ────────────────────────────────────────────
  {
    topicCode: "OG-MOD-02-TOP-02",
    scenario: {
      patientAge: 28,
      patientSex: "Female",
      patientOccupation: "Factory worker",
      patientLocation: "Bengaluru, Karnataka",
      chiefComplaint: "Massive vaginal bleeding 1 hour after normal vaginal delivery",
      historyOfPresent: `
- Onset: Sudden brisk bleeding immediately after delivery of baby (spontaneous vaginal delivery of 3.2kg male baby at home with local dai)
- Character: Bright red, non-clotting blood, profuse soaking 3-4 sanitary pads within 15 minutes
- Timing: Bleeding started after baby born, has not slowed in 1 hour
- Associated: Dizziness, weakness, palpitations, shortness of breath on exertion, feeling faint
- Past OG history: G3P2 — 2 previous children (ages 5 and 2 years), both delivered vaginally at home
- Current pregnancy: Booked late (24 weeks), attended only 2 antenatal visits. No complications mentioned. No weight, BP records available.
- Risk factors: No antenatal iron, no antepartum hemorrhage. Current bleeding likely cause of dizziness (not just postpartum blues)
      `.trim(),
      pastHistory: "G3P2. Previous pregnancies uneventful (delivered at home by dai both times). No postpartum hemorrhage before. No anemia screening in current pregnancy. No surgeries. No bleeding disorders known.",
      familyHistory: "No bleeding disorders. No thrombophilia. No anemia history.",
      socialHistory: "Delivers at home with trained dais (traditional birth attendants). Limited access to healthcare. Low socioeconomic status. Diet: vegetarian, dal-based, limited vegetables. No supplementary iron in pregnancy.",
      drugHistory: "No medications. No antepartum iron supplementation. No allergies known.",
      vitals: { pulse: 128, bp: "90/60", temp: 37.2, rr: 28, spo2: 89 },
      generalExam: `
- General appearance: Pale, anxious, trembling, appears ill
- Pallor: Marked pallor of conjunctiva, lips, palms — suggests significant anemia/blood loss
- Icterus: Absent
- Cyanosis: Present — lips and extremities
- Edema: No edema
- Capillary refill: >2 seconds (prolonged)
- JVP: Not visible (low jugular venous pressure from hypovolemia)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Tachycardic (128 bpm), weak pulses, thready",
          heart_sounds: "S1 S2 faint. No murmurs. Tachycardia.",
          peripheral_pulses: "Radial pulse weak and rapid, femoral pulses palpable but weak",
          blood_pressure: "90/60 mmHg (hypotensive)",
          capiflary_refill: "Prolonged >2 seconds (normal <2 sec)",
        },
        respiratory: {
          auscultation_lungs: "Clear bilateral air entry. No added sounds. Tachypneic (RR 28).",
        },
        abdominal: {
          abdo_inspection: "Soft, lax postpartum abdomen with inverted umbilicus",
          palpation_superficial: "No guarding, no rigidity",
          palpation_deep: "Fundus easily palpable 2 fingerbreadths below umbilicus (expected post-delivery). Uterus boggy, soft, not well-contracted (ATONIC — abnormally relaxed)",
          uterus_contraction: "Uterus not firm on massage — palpate for excessive bleeding source",
          lochia: "Massive amounts of blood pooling in perineum, continuing to flow briskly",
        },
        neurological: {
          consciousness: "GCS 14/15 — drowsy but arousable, anxious",
          capillary_refill_fingers: "Slow refill (sign of shock)",
        },
      },
      availableInvestigations: [
        { id: "hb", name: "Hemoglobin", cost: 100, turnaround: "10 min", category: "Hematology", result: "Hb: 6.8 g/dL (expected post-delivery ~10-11 if normal prenatal)", isAbnormal: true, interpretation: "Severe anemia — massive acute blood loss. Hb dropped >4g/dL from likely baseline of 11g/dL (common in India).", isEssential: true },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 6.8 g/dL, Hct: 20%, WBC: 18,900/μL (stress leukocytosis), Platelets: 1.8 lakhs", isAbnormal: true, interpretation: "Severe anemia, normal WBC response to blood loss, platelets still adequate but may drop with massive transfusion.", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 48 mg/dL, Creatinine: 1.6 mg/dL (elevated from baseline ~0.8)", isAbnormal: true, interpretation: "Acute kidney injury from hypotension and reduced perfusion — prerenal azotemia.", isEssential: true },
        { id: "electrolytes", name: "Serum Electrolytes", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Na: 128 mEq/L (low), K: 5.2 mEq/L (high-normal), Cl: 92 mEq/L", isAbnormal: true, interpretation: "Hyponatremia from fluid dilution if crystalloid given excessively. Hyperkalemia risk from cell breakdown.", isEssential: false },
        { id: "pt_inr", name: "PT/INR", cost: 400, turnaround: "1 hour", category: "Hematology", result: "PT: 18 sec, INR: 1.6 (normal <1.1)", isAbnormal: true, interpretation: "Coagulopathy — consumptive from massive bleeding, dilutional from transfusion, or DIC early. Indicates need for FFP.", isEssential: true },
        { id: "aptt", name: "aPTT", cost: 400, turnaround: "1 hour", category: "Hematology", result: "aPTT: 42 sec (normal 25-35)", isAbnormal: true, interpretation: "Prolonged — coagulopathy, dilutional or consumptive.", isEssential: true },
        { id: "fibrinogen", name: "Fibrinogen", cost: 600, turnaround: "1 hour", category: "Hematology", result: "Fibrinogen: 140 mg/dL (low, normal >200)", isAbnormal: true, interpretation: "Low fibrinogen — DIC likely, needs cryoprecipitate (10 units brings fibrinogen up by ~100 mg/dL).", isEssential: true },
        { id: "bp_check", name: "Blood Pressure (repeated)", cost: 50, turnaround: "5 min", category: "Vital", result: "Systolic 90-100 mmHg, Diastolic 50-60 mmHg (hypotensive)", isAbnormal: true, interpretation: "Shock state — maternal mortality risk very high (>50% mortality if BP remains <90 and bleeding not controlled).", isEssential: true },
        { id: "blood_type", name: "Blood Type & Crossmatch", cost: 300, turnaround: "30-60 min", category: "Hematology", result: "O Positive, Crossmatch in progress", isAbnormal: false, interpretation: "O positive is universal donor — can give immediately without full crossmatch if needed urgently.", isEssential: true },
      ],
      correctDiagnosis: "Postpartum Hemorrhage (PPH) — Uterine Atony with Hemorrhagic Shock (Class III-IV)",
      differentials: [
        { diagnosis: "Placental Retained Products (Retained Placenta or Placental Fragments)", likelihood: "MEDIUM", reasoning: "Can cause PPH if pieces remain in uterus. Uterus would be boggy. Manual removal of placenta is needed." },
        { diagnosis: "Uterine Rupture", likelihood: "LOW", reasoning: "Vaginal delivery at home increases risk but would show severe lower abdominal pain, shock out of proportion to bleeding, absent fetal heart rate. Hemodynamically would be worse." },
        { diagnosis: "Genital Tract Trauma (Cervical/Vaginal Lacerations, Episiotomy bleeding)", likelihood: "MEDIUM", reasoning: "Possible with home delivery — examination of cervix and vagina needed to assess extent. Bleeding usually less massive than uterine source." },
        { diagnosis: "Placental Abruption", likelihood: "LOW", reasoning: "Abruption typically presents antepartum or intrapartum with abdominal pain + bloody show. Postpartum abruption rare. Uterine atony more likely here." },
      ],
      diagnosticReasoning: "28-year-old G3P2 presenting 1 hour after spontaneous vaginal delivery at home with massive vaginal bleeding. Delivered without antenatal care, no hemoglobin assessment, no antepartum complications mentioned. Vital signs show shock: HR 128, BP 90/60, RR 28, SpO2 89 — Class III hemorrhagic shock. Examination shows marked pallor, cyanosis, prolonged capillary refill, weak pulses — signs of severe blood loss. Uterus palpated as soft, boggy, atonic (not well-contracted) — characteristic of uterine atony (the MOST common cause of PPH, responsible for 80% of cases). Hb 6.8 g/dL with Hct 20% — severe anemia from massive acute blood loss. Coagulation studies show prolonged PT/INR, aPTT, and low fibrinogen — early DIC/consumptive coagulopathy. This is a life-threatening hemorrhagic emergency requiring immediate resuscitation and delivery of placenta if retained.",
      managementPlan: {
        immediateActions: [
          { action: "Call Emergency Code — activate Massive Transfusion Protocol (MTP)", reasoning: "Class III hemorrhagic shock with ongoing bleeding. Mortality very high without rapid intervention.", priority: "STAT" },
          { action: "Place 2 large-bore IVs (18G or larger), start rapid normal saline infusion", reasoning: "Large-bore access for rapid fluid and blood product resuscitation. Target: restore BP to >100 mmHg systolic.", priority: "STAT" },
          { action: "Rub fundus vigorously to contract uterus and expel clots", reasoning: "Uterine atony — fundal massage often stops bleeding by mechanical compression of bleeding vessels.", priority: "STAT" },
          { action: "Insert Foley catheter — assess urine output", reasoning: "Monitor perfusion status. Output <0.5 mL/kg/hr indicates shock ongoing.", priority: "STAT" },
          { action: "Blood transfusion — immediate group O RhD negative uncrossmatched blood if her type not known, switch to crossmatched when available", reasoning: "Hb 6.8 in active bleeding — transfuse immediately. Uncrossmatched O neg is safe, can use while crossmatch pending.", priority: "STAT" },
          { action: "Notify Obstetrician, Anesthesia, and ICU immediately", reasoning: "Needs expert assessment for cause of bleeding (placental retention vs trauma), possible manual removal of placenta, evacuation under anesthesia.", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Oxytocin (uterotonic)", examples: ["Oxytocin 10 units IM (already given post-delivery)", "If bleeding continues: Oxytocin 40 units in 1 liter NS IV infusion at 500 mL/hour"], route: "IM/IV", duration: "Continue infusion until bleeding controlled, then wean", reasoning: "First-line uterotonic. Makes uterus contract to compress bleeding vessels. Oxytocin should have been given at delivery but may not work if given by untrained dai.", contraindications: ["None in hemorrhage context"], indianContext: "Oxytocin 10 IU ₹5-10 per vial. Cheapest and safest uterotonic." },
          { drugClass: "Ergotamine (methyl-ergonovine) — 2nd line uterotonic", examples: ["Methyl-ergonovine 0.2 mg IM (can repeat after 15 min if bleeding continues, max 5 doses)"], route: "IM", duration: "Single or repeated doses every 15 minutes up to 5 doses", reasoning: "Potent uterotonic causes sustained tetanic contraction. Used if oxytocin fails. Caution: can cause hypertension, coronary vasospasm.", contraindications: ["Hypertension >160/110 (caution)", "Coronary artery disease", "Hypersensitivity"], indianContext: "Methylergonovine 0.2mg ampoule ₹20-30. Available in most hospitals." },
          { drugClass: "Prostaglandin (misoprostol) — 3rd line uterotonic", examples: ["Misoprostol 1000 μg PR (rectal) — one-time dose", "Carboprost 250 μg IM (can repeat every 15 min, max 8 doses/24 hours)"], route: "Rectal/IM", duration: "Single or repeated doses", reasoning: "Prostaglandins cause uterine contractions. Misoprostol cheap and stable (no cold chain). Carboprost very expensive but potent. Misoprostol preferred in resource-limited settings.", contraindications: ["Severe asthma (carboprost)", "Allergy"], indianContext: "Misoprostol 600 μg tablet ₹5-10 (very cheap). Carboprost expensive (₹300-500). Misoprostol often used as 2nd/3rd line in India." },
          { drugClass: "Fresh Frozen Plasma (FFP) or Cryoprecipitate (coagulopathy correction)", examples: ["FFP 10-15 mL/kg (can give 4-6 units initially)", "Cryoprecipitate 10 units (raises fibrinogen ~100 mg/dL)"], route: "IV", duration: "Transfuse as per MTP, target fibrinogen >100 mg/dL", reasoning: "PT prolonged (1.6), fibrinogen low (140) — signs of DIC. FFP replaces clotting factors. Cryo replaces fibrinogen rapidly.", contraindications: ["Fluid overload (caution in heart failure)", "Volume overload risk"], indianContext: "FFP expensive, availability limited in many government hospitals. Cryoprecipitate preferable if available." },
          { drugClass: "Antibiotics (if surgery/intervention needed)", examples: ["Ampicillin 2g IV", "Ceftriaxone 2g IV"], route: "IV", duration: "24 hours post-intervention", reasoning: "Infection prevention for emergency procedures (manual removal of placenta, evacuation under anesthesia, intrauterine packing).", contraindications: ["Penicillin anaphylaxis"], indianContext: "Ampicillin 500mg ₹15-20 per vial. Available everywhere." },
          { drugClass: "Tranexamic Acid (TXA) — newer evidence for PPH", examples: ["Tranexamic Acid 1g IV over 10 minutes, then 1g every 8 hours for max 24 hours"], route: "IV", duration: "Up to 24 hours", reasoning: "Antifibrinolytic — reduces fibrinolysis. WHO now recommends within 3 hours of onset for moderate-severe PPH. Reduces transfusion requirement.", contraindications: ["Thromboembolism risk", "Allergy"], indianContext: "TXA expensive (₹200-400 per dose). Not standard in all Indian hospitals yet but increasingly available." },
        ],
        nonPharmacological: [
          { intervention: "Fundal massage — gentle but firm rubbing of uterine fundus in circular motions", reasoning: "Mechanical compression of bleeding vessels, promotes uterine contraction. Often used in combination with oxytocin.", duration: "Continuous until uterus firm" },
          { intervention: "Manual removal of placenta if retained", reasoning: "If placenta not yet expelled, manual removal is essential. Done under anesthesia (spinal or general).", duration: "Single procedure" },
          { intervention: "Exploration of lower genital tract (vagina, cervix) for lacerations under good visualization", reasoning: "Cervical lacerations can cause significant bleeding. Repair if identified.", duration: "If bleeding source identified" },
          { intervention: "Uterine artery ligation or hysterectomy — if bleeding not controlled by above measures", reasoning: "Last resort surgical interventions. Consider if hemorrhage persists after all medical/manual management. Hysterectomy has ~100% hemostasis but patient loses fertility.", duration: "If all other measures fail" },
          { intervention: "Keep patient warm — prevent hypothermia from massive transfusion", reasoning: "Hypothermia worsens coagulopathy ('lethal triad': acidosis, hypothermia, coagulopathy)", duration: "Throughout resuscitation" },
        ],
        monitoring: [
          { parameter: "Blood pressure and heart rate", frequency: "Every 5 minutes", target: "SBP >100, HR ideally <100", escalation: "If BP remains <90 despite 2-3 units PRBCs — shock refractory, escalate to OR for surgical hemostasis" },
          { parameter: "Urine output via Foley", frequency: "Every 30 minutes", target: ">0.5 mL/kg/hr", escalation: "If <0.5 mL/kg/hr — ongoing shock, need more transfusion or surgical intervention" },
          { parameter: "Repeat CBC every 2-4 hours", frequency: "Every 2-4 hours", target: "Hb improving toward 8-9 g/dL", escalation: "If Hb not improving despite transfusions — ongoing bleeding source not controlled" },
          { parameter: "Repeat coagulation studies (PT/aPTT, fibrinogen)", frequency: "After every 4-6 units transfused", target: "PT/INR normalized, fibrinogen >100", escalation: "If coagulopathy persists — give more FFP or cryoprecipitate per MTP" },
          { parameter: "Lochia volume and character", frequency: "Every 30 minutes", target: "Decreasing amount, clotting, no fresh bright red bleeding", escalation: "If fresh brisk bleeding continues — bleeding source not controlled, escalate management" },
        ],
        lifestyle: {
          dos: ["Complete bed rest for 3-4 days minimum", "High-iron diet after recovery (meat, eggs, leafy greens, fortified foods)", "Iron supplementation 300mg elemental iron daily for 3 months", "Attend follow-up for transfusion and recovery assessment"],
          donts: ["No strenuous activity for 6 weeks", "Avoid all manual labor for minimum 4 weeks", "No sexual intercourse for 6 weeks (risk of infection)", "Do not delay seeking medical care if bleeding resumes"],
          indianSpecific: ["Include dal, ragi, leafy greens (spinach, fenugreek) in diet for iron recovery", "Avoid heavy lifting (even water pots) for 4 weeks", "Take government-provided IFA (Iron-Folic Acid) tablets — 1 tablet daily for 3 months", "If at home: contact ASHA/ANM immediately if heavy bleeding recurs"],
        },
        followUp: {
          when: "2 weeks (to assess bleeding), then monthly for 3 months for Hb recovery",
          what: ["CBC to assess Hb recovery", "Clinical examination for anemia symptoms", "Iron supplementation adherence", "Counseling on future pregnancies — increased PPH risk, may benefit from prophylactic interventions in next pregnancy"],
        },
        referral: {
          needed: true,
          to: "Obstetrics for emergency management, Anesthesia if surgery needed, ICU if ongoing shock",
          urgency: "IMMEDIATE — life-threatening hemorrhage",
        },
      },
      redFlags: [
        { flag: "Cardiovascular collapse (BP <80, HR >140, unresponsive)", action: "Activate massive transfusion protocol, prepare for emergency hysterectomy, cardiopulmonary resuscitation", urgency: "IMMEDIATE" },
        { flag: "Persistent bleeding despite oxytocin + fundal massage", action: "Move to OR for exploration, manual removal of placenta if retained, evacuation of clots, assess for uterine rupture or cervical laceration", urgency: "IMMEDIATE" },
        { flag: "DIC (dropping platelets, fibrinogen <100, PT/aPTT prolonged)", action: "Activate coagulopathy protocol, transfuse FFP, cryoprecipitate, consider tranexamic acid", urgency: "IMMEDIATE" },
        { flag: "Acute kidney injury (oliguria <0.5 mL/kg/hr, Cr rising)", action: "Optimize fluid resuscitation, monitor daily Cr, prepare for possible dialysis if severe", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Postpartum hemorrhage is the LEADING cause of maternal death in developing countries (responsible for ~25% of maternal deaths in India).",
        "Uterine atony (lack of contraction) causes 80% of PPH — fundal massage + oxytocin work immediately.",
        "Classify hemorrhage: Class I (15% loss), II (15-30%), III (30-40%), IV (>40%). Our patient is Class III-IV — high mortality risk.",
        "First-line uterotonics: Oxytocin (safest). Second-line: Ergotamine (if BP allows). Third-line: Misoprostol (cheapest, no cold chain).",
        "In resource-limited settings: Misoprostol 1000 μg rectal can be given at home and often prevents need for referral.",
        "Massive Transfusion Protocol: Start with uncrossmatched O RhD negative RBCs, then crossmatched when available. Ratio of RBCs:FFP:Platelets = 1:1:1.",
        "Tranexamic acid within 3 hours of PPH onset reduces transfusion requirement by ~35% and mortality by ~30% — WHO recommendation.",
      ],
      commonMistakes: [
        "Delaying blood transfusion while waiting for crossmatch — give uncrossmatched O negative immediately in massive bleeding.",
        "Not massaging fundus or using oxytocin early — mechanical compression + uterotonics are first-line, not last resort.",
        "Giving ergotamine in hypertension — can cause hypertensive crisis. Use oxytocin or misoprostol instead.",
        "Overlooking cervical lacerations — must examine cervix under good visualization. Cervical bleeding can be massive and easy to miss.",
        "Not assessing for retained products of conception — manual removal of retained placenta is essential if not expelled.",
        "Over-transfusion with crystalloid causing pulmonary edema — balance fluids with blood products. Target MAP >65 not normal BP.",
        "Delaying anesthesia consultation if surgery needed — early notification is crucial for timely intervention.",
      ],
      relevantHistoryQs: ["onset", "character", "severity", "associated", "prev_illness", "surgeries", "pregnancy_complications"],
      relevantExamIds: ["general_appearance", "pallor", "cyanosis", "capillary_refill", "heart_sounds", "blood_pressure", "uterus_contraction", "lochia"],
      difficulty: "HARD",
      estimatedMinutes: 25,
      subjectTags: ["OG", "EM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "OG2.2",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 3. Ruptured Ectopic Pregnancy ──────────────────────────────────────
  {
    topicCode: "OG-MOD-02-TOP-04",
    scenario: {
      patientAge: 26,
      patientSex: "Female",
      patientOccupation: "Nurse (healthcare worker)",
      patientLocation: "Kolkata, West Bengal",
      chiefComplaint: "Sudden severe abdominal pain and vaginal bleeding with dizziness",
      historyOfPresent: `
- Onset: Sudden onset severe lower abdominal pain 30 minutes ago while at work, sharp, stabbing character
- Character: Severe, colicky at first, now constant sharp pain. Pain radiates to shoulder (referred pain) and right groin.
- Location: Right lower abdomen, RIF (right iliac fossa), radiating to right shoulder
- Severity: 9/10 pain. Patient doubled over, unable to sit up. Pale and in shock state.
- Associated: Vaginal bleeding (small amount, dark), dizziness, weakness, palpitations, nausea
- Amenorrhea: Last menstrual period 6 weeks ago. Irregular periods (usually 28-32 days). Noticed breast tenderness for 1 week.
- No prior pregnancy. Never tested for pregnancy until today.
- Denies sexual trauma, no abnormal vaginal discharge, no fever, no diarrhea.
- Medical alert: Was in emergency care setting — healthcare worker likely aware of ectopic risk but not diagnosed before rupture.
      `.trim(),
      pastHistory: "Known previous pelvic inflammatory disease (PID) treated 2 years ago with antibiotics. History of appendicitis scare 1 year ago (treated conservatively, pain resolved). No surgeries. No contraceptive use — relies on withdrawal method.",
      familyHistory: "Mother has hypertension. No family history of infertility or ectopic pregnancies.",
      socialHistory: "Works as nurse in private hospital — good knowledge of health issues but no antenatal screening done. Non-smoker, non-alcoholic. Married 3 years, no children yet.",
      drugHistory: "No regular medications. No hormonal contraceptives. Occasional paracetamol for period pain. No allergies.",
      vitals: { pulse: 138, bp: "88/52", temp: 37.0, rr: 32, spo2: 91 },
      generalExam: `
- General appearance: Severely distressed, writhing in pain, pale, diaphoretic, anxious
- Pallor: Marked pallor — pale conjunctiva, lips, palms
- Icterus: Absent
- Cyanosis: Mild — lips
- Clubbing: Absent
- Edema: Absent
- Capillary refill: Prolonged >2 seconds
- JVP: Not visible (low jugular venous pressure)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Tachycardic (138 bpm), weak thready pulse",
          heart_sounds: "S1 S2 faint. No murmurs.",
          peripheral_pulses: "Weak radial pulses bilaterally, slow capillary refill",
          blood_pressure: "88/52 mmHg (hypotensive — shock state)",
        },
        respiratory: {
          auscultation_lungs: "Clear air entry bilaterally. No added sounds. Tachypnea present.",
        },
        abdominal: {
          abdo_inspection: "Severely distended, rigid, guarding",
          palpation_superficial: "Severe guarding and rigidity — cannot localize pain due to extreme tenderness",
          palpation_deep: "Rebound tenderness present. Severe right lower quadrant (RLQ) tenderness with guarding.",
          peritoneal_signs: "Rovsing's sign positive (RLQ pain on pressing LLQ). Cough causes severe RLQ pain.",
          free_fluid: "Shifting dullness suggests free fluid (blood in peritoneal cavity)",
          rectal_exam: "Right-sided tenderness on digital rectal exam. Bulging of rectovaginal pouch suggests free fluid.",
        },
        gynecological: {
          speculum_exam: "Vaginal bleeding (dark, not brisk, scant)",
          cervix: "Cervix closed, no active bleeding",
          bimanual_exam: "RUQ/right adnexal mass palpable (size unclear, very tender). Left adnexa normal.",
          cervical_motion_tenderness: "Present (positive Chandelier sign — cervical motion causes RLQ pain)",
          adnexal_mass: "Right adnexal mass — tender, firm, approximately 4-5 cm",
        },
        neurological: {
          consciousness: "Alert but in pain, GCS 15/15",
          shoulder_pain: "Right shoulder pain on inspiration (Kehr's sign — referred pain from blood irritating diaphragm)",
        },
      },
      availableInvestigations: [
        { id: "upt", name: "Urine Pregnancy Test (hCG)", cost: 50, turnaround: "5 min", category: "Biochemistry", result: "Positive (urine β-hCG)", isAbnormal: true, interpretation: "Positive pregnancy test. Patient pregnant but location unknown (not intrauterine = ectopic).", isEssential: true },
        { id: "serum_hcg", name: "Serum β-hCG (Quantitative)", cost: 300, turnaround: "1 hour", category: "Biochemistry", result: "β-hCG: 18,000 mIU/mL (at 6 weeks gestation would expect 10,000-100,000)", isAbnormal: true, interpretation: "High hCG for 6 weeks, suggesting ectopic with heavy trophoblastic activity or rupture with dying placenta.", isEssential: true },
        { id: "hb", name: "Hemoglobin", cost: 100, turnaround: "10 min", category: "Hematology", result: "Hb: 7.2 g/dL (baseline likely 12-13 in healthy nurse)", isAbnormal: true, interpretation: "Severe anemia from acute hemorrhage (drop >5 g/dL suggests >1 liter blood loss).", isEssential: true },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 7.2 g/dL, Hct: 21%, WBC: 15,800/μL (leukocytosis from trauma/hemorrhage), Platelets: 2.2 lakhs", isAbnormal: true, interpretation: "Severe anemia, stress leukocytosis. Platelet count still adequate.", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 52 mg/dL, Creatinine: 1.8 mg/dL (baseline ~0.8)", isAbnormal: true, interpretation: "Acute kidney injury from hypovolemia and sepsis. Elevated creatinine indicates significant renal hypoperfusion.", isEssential: true },
        { id: "coag", name: "Coagulation Profile", cost: 400, turnaround: "1 hour", category: "Hematology", result: "PT: 16 sec, INR: 1.4, aPTT: 40 sec", isAbnormal: true, interpretation: "Mild coagulopathy from massive transfusion and consumption.", isEssential: false },
        { id: "tvs_ultrasound", name: "Transvaginal Ultrasound (TVS)", cost: 1000, turnaround: "15 min", category: "Imaging", result: "No gestational sac in uterus. Free fluid (blood) in pelvis (pouch of Douglas: 8-10 cm). Right adnexal mass 4.5 cm, heterogeneous with fetal pole and cardiac activity (fetus at 6 weeks). Rupture site with active bleeding not well-visualized.", isAbnormal: true, interpretation: "Ectopic pregnancy in right fallopian tube with rupture and massive hemoperitoneum (free blood). Fetus alive at time of scan but severe hemorrhage ongoing.", isEssential: true },
        { id: "plain_xray", name: "Plain Abdominal X-ray", cost: 150, turnaround: "10 min", category: "Imaging", result: "Free air under diaphragm (pneumoperitoneum) on erect X-ray. No bowel obstruction. No foreign body.", isAbnormal: true, interpretation: "Free air suggests rupture (though ectopic rupture typically does not cause pneumoperitoneum — this may be from initial anesthesia injection during diagnostic procedures).", isEssential: false },
      ],
      correctDiagnosis: "Ruptured Ectopic Pregnancy (Right Fallopian Tube) with Hemoperitoneum — Hemorrhagic Shock",
      differentials: [
        { diagnosis: "Acute Appendicitis with Perforation", likelihood: "MEDIUM", reasoning: "Similar acute abdomen presentation. However, positive pregnancy test and adnexal mass on ultrasound rule this out. Appendicitis would show inflamed appendix, not hemoperitoneum." },
        { diagnosis: "Ovarian Cyst Rupture", likelihood: "LOW", reasoning: "Can cause acute abdomen and hemoperitoneum. However, ultrasound shows ectopic pregnancy (fetal pole and cardiac activity), not just cyst rupture." },
        { diagnosis: "Acute Pelvic Inflammatory Disease (PID)", likelihood: "LOW", reasoning: "Patient has history of PID. However, acute rupture with shock and massive hemoperitoneum is not typical of PID. Pregnancy test is positive." },
        { diagnosis: "Intrauterine Pregnancy with Hemorrhagic Complication", likelihood: "LOW", reasoning: "TVS shows NO intrauterine gestational sac. Pregnancy is outside uterus — confirmed ectopic." },
      ],
      diagnosticReasoning: "26-year-old female with 6 weeks amenorrhea presenting with sudden severe acute abdomen, shock state (BP 88/52, HR 138), and vaginal bleeding. Positive pregnancy test (urine and serum β-hCG 18,000) but NO intrauterine gestational sac on TVS. Right adnexal mass 4.5 cm with fetal pole and cardiac activity (viable ectopic pregnancy). Massive free fluid in pelvis (pouch of Douglas 8-10 cm) = hemoperitoneum. Severe anemia (Hb 7.2 from acute hemorrhage >1L). Clinical peritonitis (guarding, rigidity, rebound, Rovsing's sign). Positive Kehr's sign (right shoulder pain from diaphragmatic irritation by intraperitoneal blood) is pathognomonic for hemoperitoneum. This is a ruptured ectopic pregnancy with massive internal bleeding — a gynecological emergency with high maternal mortality if not treated immediately.",
      managementPlan: {
        immediateActions: [
          { action: "Emergency call — activate Code Blue, notify obstetrician immediately. Prepare for emergency OR.", reasoning: "Ruptured ectopic is a gynecological emergency. Patient in hemorrhagic shock. Requires emergency surgery to stop bleeding and save life.", priority: "STAT" },
          { action: "Establish 2 large-bore IVs (18G or larger), start rapid NS infusion", reasoning: "Massive hemorrhage into peritoneal cavity. Need rapid fluid resuscitation. Target MAP >65 initially.", priority: "STAT" },
          { action: "Type & Crossmatch — order 4-6 units PRBCs immediately, prepare for massive transfusion", reasoning: "Severe anemia (Hb 7.2) with ongoing hemorrhage. Transfusion essential.", priority: "STAT" },
          { action: "NPO (nothing by mouth) — prepare for emergency surgery", reasoning: "Will need anesthesia for emergency salpingostomy or salpingectomy.", priority: "STAT" },
          { action: "Notify anesthesia — prepare for emergency general anesthesia", reasoning: "Patient in shock. Anesthesia needs to be ready for immediate induction.", priority: "STAT" },
          { action: "Keep patient nil orally, avoid oral examination until blood available at bedside", reasoning: "Risk of aspiration with anesthesia in hypovolemic patient.", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Crystalloid Fluids", examples: ["Normal Saline (NS) rapid infusion through 18G IV"], route: "IV", duration: "During resuscitation until surgical hemostasis", reasoning: "Initial fluid resuscitation for shock. Target: restore BP to >100 SBP, HR <120. Avoid excessive fluids (can dilute clotting factors).", contraindications: ["None in emergency"], indianContext: "Normal saline readily available in all hospitals." },
          { drugClass: "Blood Transfusion (PRBCs)", examples: ["4-6 units packed RBCs immediately"], route: "IV", duration: "Transfuse to target Hb >8 g/dL", reasoning: "Massive acute hemorrhage. Transfuse uncrossmatched O RhD negative if patient type unknown, switch to crossmatched when available. Each unit raises Hb ~1 g/dL.", contraindications: ["None in hemorrhage"], indianContext: "Blood bank coordination essential. Many Indian hospitals may have limited O negative supply — plan accordingly." },
          { drugClass: "Anesthetic Agents (for emergency surgery)", examples: ["Propofol or Thiopental for induction", "Succinylcholine for rapid intubation", "Volatile anesthetic (Isoflurane/Sevoflurane) for maintenance"], route: "IV/Inhalation", duration: "During surgery", reasoning: "Emergency anesthesia for surgical hemostasis. Avoid drugs causing vasodilation in hypovolemic patient.", contraindications: ["Anesthesia team to choose based on hemodynamic status"], indianContext: "All anesthetic agents available in OR." },
          { drugClass: "Antibiotics (post-operative)", examples: ["Ceftriaxone 2g IV", "Metronidazole 500mg IV TDS"], route: "IV", duration: "24 hours post-op", reasoning: "Infection prevention post-surgery. Rupture contaminates peritoneum.", contraindications: ["Penicillin allergy"], indianContext: "Standard surgical prophylaxis protocols." },
        ],
        nonPharmacological: [
          { intervention: "Emergency laparotomy (surgical exploration) — incision usually lower midline (Pfannenstiel often used in gynecology)", reasoning: "Definitive treatment for ruptured ectopic. Surgeon must control hemorrhage and remove ectopic pregnancy.", duration: "Surgical procedure" },
          { intervention: "Salpingostomy (removal of ectopic from fallopian tube) vs Salpingectomy (removal of entire tube)", reasoning: "Choice depends on surgeon preference and future fertility desires. Salpingostomy preserves tube but higher risk of persistent ectopic (5-20%). Salpingectomy removes tube entirely. Patient should be counseled on higher recurrence risk in future pregnancies (if ectopic in one tube, opposite tube may be affected too).", duration: "Surgical decision" },
          { intervention: "Evacuation of hemoperitoneum — suctioning out intra-abdominal blood", reasoning: "Intra-operative: all blood clots and blood evacuated to reduce contamination and allow visualization.", duration: "During surgery" },
          { intervention: "Careful hemostasis — ligation of bleeding vessels", reasoning: "Vessel ligation or electrocautery to stop all bleeding sources.", duration: "During surgery" },
        ],
        monitoring: [
          { parameter: "Blood pressure and heart rate", frequency: "Every 5 minutes pre-op, continuous during surgery", target: "SBP >100, HR ideally <120", escalation: "If BP drops <90 despite fluid and blood — accelerate anesthesia, move to OR immediately" },
          { parameter: "Urine output", frequency: "Continuous Foley catheterization during surgery", target: ">0.5 mL/kg/hr", escalation: "If <0.5 mL/kg/hr — ongoing shock, increase fluids and transfusion" },
          { parameter: "Repeat Hb every 2-4 hours post-op", frequency: "Serial checks", target: "Hb rising with transfusions", escalation: "If Hb not improving despite transfusion — evaluate for ongoing bleeding or dilutional anemia" },
          { parameter: "Vital signs post-op", frequency: "Continuous for 24 hours, then every 4 hours", target: "Normalizing BP, HR, urine output adequate", escalation: "Any signs of instability — reassess for bleeding, consider re-exploration if bleeding suspected" },
        ],
        lifestyle: {
          dos: ["Complete bed rest for 2-3 days post-op", "Gradual mobilization after 3 days", "High protein diet (1.2g/kg) for wound healing", "Attend follow-up appointments"],
          donts: ["No heavy lifting for 6 weeks post-op", "No sexual intercourse for 6 weeks", "Do not delay medical consultation if complications arise", "Avoid strenuous activity"],
          indianSpecific: ["Arrange household help for 2-3 weeks post-op (cannot do housework)", "Include iron-rich foods (meat, dal, leafy greens) for anemia recovery", "Take iron supplementation 300mg elemental iron daily for 3 months", "Counseling on future pregnancy planning — high risk of ectopic recurrence (10-25% in next pregnancy)"],
        },
        followUp: {
          when: "1 week (suture removal), then 2 weeks, then 6 weeks post-op",
          what: ["Wound assessment for infection", "Serial Hb checks — expect normalization by 6 weeks", "Counseling on contraception (may want IUD if tube removed to reduce ectopic risk in future)", "Discussion of future pregnancy plans — HSG or laparoscopy to assess remaining tube patency"],
        },
        referral: {
          needed: true,
          to: "Emergency surgery/Obstetrics for emergency laparotomy",
          urgency: "IMMEDIATE — life-threatening hemorrhage",
        },
      },
      redFlags: [
        { flag: "Cardiovascular collapse (refractory shock despite 2+ units blood)", action: "Emergency OR mobilization, do not wait for complete crossmatch, use massive transfusion protocol", urgency: "IMMEDIATE" },
        { flag: "Peritonitis signs (rigid abdomen, severe pain, septic appearance)", action: "Immediate surgery, do not delay for stabilization", urgency: "IMMEDIATE" },
        { flag: "Post-operative fever, tachycardia, abdominal distension", action: "Evaluate for infection/peritonitis, start broad-spectrum antibiotics, consider re-exploration if signs worsen", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Ectopic pregnancy rupture is a gynecological emergency — 1-2% of all pregnancies are ectopic, and 1% of ectopics rupture (maternal mortality 2-5% if untreated).",
        "Classic triad: Amenorrhea + pelvic pain + vaginal bleeding. Kehr's sign (shoulder pain from hemoperitoneum) is pathognomonic.",
        "Risk factors: PID history, IUD use, intrauterine adhesions, tubal pathology, fertility treatments. Our patient had PID history — major risk.",
        "Diagnosis: Positive pregnancy test + NO intrauterine sac on TVS + free fluid in pelvis = ruptured ectopic until proven otherwise.",
        "Management: Immediate surgery (salpingostomy or salpingectomy), massive transfusion, restoration of hemodynamics.",
        "Future pregnancies: 10-25% recurrence risk, 30-50% higher if tube is preserved (salpingostomy). Counseling on contraception and family planning essential.",
        "Survival depends on rapid diagnosis and surgery — every minute delay increases mortality risk.",
      ],
      commonMistakes: [
        "Delaying surgery while trying to stabilize hemodynamically — surgery IS the hemodynamic stabilization (removing bleeding source).",
        "Not recognizing shock — patient may not look as ill as actual blood loss suggests (intra-abdominal blood not visible).",
        "Confusing with appendicitis — appendicitis would NOT have positive pregnancy test or adnexal mass on ultrasound.",
        "Waiting for complete hCG doubling series before operating — clinical presentation and ultrasound are sufficient for diagnosis; wait for confirmation kills patients.",
        "Not counseling on future ectopic risk — recurrence is common, patient needs contraception planning and close monitoring if next pregnancy occurs.",
      ],
      relevantHistoryQs: ["onset", "character", "location", "radiation", "severity", "associated", "prev_illness", "surgeries", "contraception"],
      relevantExamIds: ["general_appearance", "pallor", "capillary_refill", "heart_sounds", "blood_pressure", "peritoneal_signs", "rebound_tenderness", "shoulder_pain"],
      difficulty: "HARD",
      estimatedMinutes: 25,
      subjectTags: ["OG", "EM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "OG2.3",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 4. Gestational Diabetes Mellitus ───────────────────────────────────
  {
    topicCode: "OG-MOD-02-TOP-03",
    scenario: {
      patientAge: 30,
      patientSex: "Female",
      patientOccupation: "School principal",
      patientLocation: "Delhi, India",
      chiefComplaint: "Routine antenatal check at 28 weeks — screen for gestational diabetes",
      historyOfPresent: `
- Routine antenatal visit — no complaints
- Gestational age: 28 weeks (confirmed on first trimester ultrasound)
- Pregnancy course: Uneventful. No nausea, good appetite, weight gain 8 kg (appropriate)
- Symptoms NOW: Increased thirst past 2 weeks, nocturia (frequent urination at night) 2-3 times per night. Feels unusual fatigue. Recurrent vaginal candidiasis (2 episodes in past 2 months, treated with local cream).
- Previous pregnancies: G2P1. First child born 3 years ago (4.1 kg baby) — delivery complicated by prolonged labor, episiotomy. Mother recalls "high blood sugar" in first pregnancy but was told "it goes away after delivery."
- Denies: No polyuria/polydipsia, no blurred vision, no family history of diabetes mentioned previously.
      `.trim(),
      pastHistory: "First pregnancy 3 years ago with gestational diabetes (diagnosed at 24 weeks, managed with diet + insulin, glucose normalized post-delivery). Current pregnancy: Booked early, 2 visits so far. Mild gestational hypertension ruled out (BP 130/85 at last visit, repeat normal). No prior surgeries. No thyroid disease. Irregular periods pre-pregnancy (28-35 days), both pregnancies conceived naturally.",
      familyHistory: "Father diagnosed with Type 2 DM at age 50 (now on oral medications). Maternal grandmother diabetic. Sister has PCOS (polycystic ovary syndrome). No family history of thyroid or autoimmune disease.",
      socialHistory: "Non-smoker, non-alcoholic. Professional (school principal) — desk job, sedentary. Lives in Delhi. Diet: typical North Indian (wheat-based, ghee/butter in cooking, sweet tea 2-3 times daily). BMI pre-pregnancy: 27 (overweight).",
      drugHistory: "No regular medications in current pregnancy. Took prenatal vitamins (iron + folic acid) regularly. No allergies.",
      vitals: { pulse: 82, bp: "130/88", temp: 36.8, rr: 18, spo2: 98 },
      generalExam: `
- General appearance: Well, alert, overweight (BMI 29 in pregnancy)
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Absent
- Edema: Mild pedal edema (1+), expected in pregnancy
- Acanthosis nigricans: Subtle darkening on neck and axillae (sign of insulin resistance)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1, S2 normal. No murmurs. Regular rate and rhythm.",
          blood_pressure: "130/88 mmHg (borderline high for pregnancy, acceptable)",
        },
        respiratory: {
          auscultation_lungs: "Clear bilateral air entry. No added sounds.",
        },
        abdominal: {
          abdo_inspection: "Gravid abdomen, appropriate for 28 weeks. Linea nigra present.",
          palpation_superficial: "Soft, non-tender",
          palpation_deep: "Fundal height 28 cm (appropriate for 28 weeks). Uterus soft. No contractions. Fetal movements felt.",
          fetal_heart_rate: "Fetal heart rate 142 bpm by Doppler (normal 110-160)",
        },
        neurological: {
          consciousness: "Alert, oriented",
        },
      },
      availableInvestigations: [
        { id: "rbs", name: "Random Blood Sugar", cost: 100, turnaround: "5 min", category: "Biochemistry", result: "RBS: 184 mg/dL (HIGH — normal <140)", isAbnormal: true, interpretation: "Elevated random glucose — suspicious for gestational diabetes. Needs fasting and oral glucose tolerance test.", isEssential: true },
        { id: "fbs", name: "Fasting Blood Sugar (next morning)", cost: 100, turnaround: "4 hours", category: "Biochemistry", result: "FBS: 98 mg/dL (Normal: <95 mg/dL fasting in pregnancy, threshold 92 mg/dL used by IADPSG)", isAbnormal: true, interpretation: "Borderline elevated for pregnancy — IADPSG threshold is 92 mg/dL. Our patient at 98 is high-normal. Combined with elevated RBS, very suspicious.", isEssential: true },
        { id: "ogct", name: "Oral Glucose Tolerance Test (OGCT) — 50g glucose non-fasting, 1-hour measurement", cost: 200, turnaround: "1 hour", category: "Biochemistry", result: "1-hour glucose: 178 mg/dL (Normal: <140 mg/dL. Values 140-199 need confirmation with 3-hour GTT)", isAbnormal: true, interpretation: "Positive OGCT screen — indicates 25-30% risk of GDM. Needs full 3-hour OGTT for diagnosis.", isEssential: true },
        { id: "ogtt", name: "Oral Glucose Tolerance Test (OGTT) — 75g glucose, measurements at 0, 1, 2, 3 hours (or 100g with 1, 2, 3 hour measurements)", cost: 400, turnaround: "4 hours", category: "Biochemistry", result: "Fasting: 98 mg/dL, 1-hour: 198 mg/dL, 2-hour: 174 mg/dL, 3-hour: 128 mg/dL. (IADPSG criteria: ≥1 of following = GDM: fasting ≥92, 1-hr ≥180, 2-hr ≥153, 3-hr ≥140)", isAbnormal: true, interpretation: "Meets IADPSG criteria for GDM (fasting 98 > 92, 1-hr 198 > 180, 2-hr 174 > 153). Diagnosis: Gestational Diabetes Mellitus. Needs treatment immediately.", isEssential: true },
        { id: "hba1c", name: "HbA1c (not diagnostic for GDM but shows prior glucose control)", cost: 600, turnaround: "2 hours", category: "Biochemistry", result: "HbA1c: 5.8% (Normal: <5.7%)", isAbnormal: true, interpretation: "Elevated — suggests chronically elevated glucose even before diagnosis. Indicates this is NOT new-onset; insulin resistance likely pre-existed.", isEssential: false },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Creatinine: 0.8 mg/dL, Urea: 24 mg/dL, Na: 138 mEq/L, K: 4.1 mEq/L", isAbnormal: false, interpretation: "Normal renal function — safe for metformin use if needed.", isEssential: false },
        { id: "urine_routine", name: "Urine Routine", cost: 100, turnaround: "30 min", category: "Biochemistry", result: "Glucose: 1+, Ketones: Negative, Protein: Negative, No pus cells", isAbnormal: true, interpretation: "Glycosuria (glucose in urine) — spillover from high blood glucose. No proteinuria (kidney function preserved).", isEssential: false },
        { id: "obstetric_ultrasound", name: "Obstetric Ultrasound (detailed biometry + amniotic fluid)", cost: 1500, turnaround: "30 min", category: "Imaging", result: "Fetal weight estimated 1200g (50th percentile for 28 weeks). Amniotic fluid adequate (AFI 18cm). Placenta anterior, grade 1. No structural anomalies. Fetal heart rate 142 bpm.", isAbnormal: false, interpretation: "Normal fetal growth for gestational age. No polyhydramnios (excess fluid). Reassuring.", isEssential: false },
      ],
      correctDiagnosis: "Gestational Diabetes Mellitus (GDM) — IADPSG Criteria Met",
      differentials: [
        { diagnosis: "Type 2 Diabetes Mellitus (pre-gestational, undiagnosed)", likelihood: "MEDIUM", reasoning: "HbA1c elevated (5.8%), family history strong, recurrent infections. However, pregnancy itself causes insulin resistance and GDM. Given previous pregnancy with GDM (resolved post-delivery), gestational etiology more likely. Would need 6-week postpartum glucose testing to distinguish." },
        { diagnosis: "Type 1 Diabetes (rare, usually presents acutely with symptoms)", likelihood: "LOW", reasoning: "No acute symptoms, no DKA, age 30, weight gain present — Type 1 less likely." },
      ],
      diagnosticReasoning: "30-year-old G2P1 at 28 weeks with strong risk factors for GDM: prior GDM in first pregnancy (major risk — 50% develop Type 2 DM later), BMI overweight (27 pre-pregnancy), positive family history (father Type 2 DM, maternal grandmother diabetic), sedentary occupation, signs of insulin resistance (acanthosis nigricans, recurrent infections). Presented with non-specific symptoms (increased thirst, nocturia, fatigue, recurrent candidiasis). RBS 184 prompted screening. Fasting glucose 98 (elevated for pregnancy where threshold is 92), positive OGCT at 1-hour 178. OGTT confirms GDM: fasting 98, 1-hr 198, 2-hr 174 — meets IADPSG diagnostic criteria on multiple timepoints. HbA1c 5.8% indicates this represents chronic hyperglycemia, not just pregnancy-induced. Patient needs immediate dietary intervention and glucose monitoring, with insulin if targets not met.",
      managementPlan: {
        immediateActions: [
          { action: "Counsel on diagnosis — explain increased risks to mother and baby", reasoning: "Patient needs understanding to ensure compliance. Risks: preeclampsia (2-3x), cesarean delivery (2x), neonatal complications (macrosomia, RDS, hypoglycemia, jaundice).", priority: "URGENT" },
          { action: "Start medical nutrition therapy (MNT) — dietitian referral for GDM-specific diet", reasoning: "First-line management is diet. 80-90% of GDM can be managed with diet alone if patient compliant.", priority: "URGENT" },
          { action: "Start home glucose monitoring — provide glucometer, lancets, log sheet", reasoning: "Capillary glucose monitoring 4 times daily (fasting, 2 hours post-breakfast, lunch, dinner) to assess glucose control. Target: fasting <95, post-prandial <140.", priority: "URGENT" },
          { action: "Schedule follow-up visit in 1 week to review glucose logs", reasoning: "Assess dietary compliance and need for pharmacological therapy.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Metformin (if diet fails)", examples: ["Metformin 500mg with breakfast and dinner, increase to 1000mg BD if needed"], route: "Oral", duration: "Until delivery (safe in pregnancy)", reasoning: "First-line medication for GDM if diet alone insufficient (usually if >25-30% of readings above target). Lowers hepatic glucose output. Does not cause hypoglycemia.", contraindications: ["eGFR <30", "Severe liver disease"], indianContext: "Metformin 500mg tablet ₹1-2 (very cheap, generic). Widely used in India for GDM." },
          { drugClass: "Insulin (if metformin + diet fail)", examples: ["Insulin aspart or lispro before meals + NPH or basal insulin at bedtime", "Typical doses: 0.5-1 unit/kg/day divided into basal + bolus"], route: "SC", duration: "Until delivery", reasoning: "If >50% of readings above target despite diet + metformin (or if intolerant to metformin), insulin required. Insulin does not cross placenta — safe for fetus.", contraindications: ["None — insulin is safe in pregnancy"], indianContext: "Insulin vials ₹40-80 per vial. Human insulin usually used in India (cheap)." },
          { drugClass: "Iron supplementation (continue)", examples: ["Ferrous sulfate 325mg (65mg elemental iron) OD"], route: "Oral", duration: "Throughout pregnancy and 3 months postpartum", reasoning: "GDM increases PPH risk, anemia risk. Continue prenatal iron.", contraindications: ["Hemochromatosis"], indianContext: "Iron + Folic Acid tablets at ₹2-3 per tablet under government programs." },
          { drugClass: "Calcium supplementation (consider)", examples: ["Calcium carbonate 1000mg elemental calcium daily in divided doses"], route: "Oral", duration: "Throughout pregnancy", reasoning: "Reduced in GDM mothers in some studies. Supports fetal bone development. Generally recommended in pregnancy.", contraindications: ["Milk alkali syndrome"], indianContext: "Calcium supplementation not routine in all Indian hospitals but recommended." },
        ],
        nonPharmacological: [
          { intervention: "Medical Nutrition Therapy — specific GDM diet counseling", reasoning: "Complex carbohydrates, whole grains, lean proteins, fiber. Avoid simple sugars, refined carbs, sugary drinks. Typical: 45% CHO, 25% protein, 30% fat. Carbs distributed into 3 meals and 2-3 snacks.", duration: "Lifelong dietary habit formation" },
          { intervention: "Physical activity — 150 minutes/week moderate exercise (if no contraindication)", reasoning: "Improves insulin sensitivity, helps weight management. Safe in pregnancy.", duration: "Throughout pregnancy" },
          { intervention: "Weight management — slow, gradual weight gain (expected 300g/week in 2nd/3rd trimester)", reasoning: "Excessive weight gain worsens insulin resistance. However, some weight gain normal and expected.", duration: "Throughout pregnancy" },
        ],
        monitoring: [
          { parameter: "Home blood glucose monitoring (HBGM)", frequency: "4 times daily (fasting, 2-hr post-meals)", target: "Fasting <95, 2-hour post-prandial <140 mg/dL", escalation: "If >50% readings above target — add metformin or insulin" },
          { parameter: "Repeat HbA1c", frequency: "At 32 weeks and 36 weeks to assess glycemic control", target: "HbA1c <6.5% (indicates good control)", escalation: "If HbA1c rising — adjust medications" },
          { parameter: "Renal function and urinalysis", frequency: "Every 4 weeks (if on metformin)", target: "Creatinine stable, no proteinuria", escalation: "If creatinine rising — may need to reduce/stop metformin" },
          { parameter: "Fetal monitoring — ultrasound biometry", frequency: "Repeat ultrasound at 34 weeks to assess fetal growth", target: "Estimated fetal weight <90th percentile (avoid macrosomia)", escalation: "If macrosomia developing (weight >90th percentile) — intensify glucose control, consider earlier delivery" },
          { parameter: "Antenatal cardiotocography (NST)", frequency: "Weekly from 36 weeks", target: "Normal FHR baseline 110-160, good variability, accelerations present", escalation: "If abnormal NST — may indicate need for earlier delivery" },
        ],
        lifestyle: {
          dos: ["Eat small frequent meals (3 meals + 2-3 snacks)", "Include whole grains, oats, lentils (complex CHO)", "Eat lean proteins at each meal (chicken, fish, dal, eggs)", "Walk 30 min after meals (helps glucose absorption)", "Keep regular glucose monitoring log"],
          donts: ["No simple sugars or refined carbs (white bread, sweets, sugary drinks)", "No skipping meals", "Avoid deep-fried foods", "Do not ignore symptoms of hypoglycemia"],
          indianSpecific: ["Replace white rice with ragi/jowar/bajra (millets) — lower glycemic index", "Use dal generously — good protein source and low glycemic", "Reduce filter coffee sugar — switch to stevia or no sugar", "Buy glucometer strips from government healthcare center (cheaper than private)", "Include salad/vegetables before main meal — fiber slows glucose absorption"],
        },
        followUp: {
          when: "1 week (review glucose log), then every 2 weeks until 34 weeks, then weekly until delivery",
          what: ["Glucose monitoring review and medication adjustment", "Repeat ultrasound at 34 weeks for fetal growth assessment", "NST weekly from 36 weeks", "Counseling on delivery timing (likely 39 weeks to avoid stillbirth risk)"],
        },
        referral: {
          needed: true,
          to: "Dietitian (for MNT), Obstetric clinic for co-management, possibly Endocrinologist if complex management",
          urgency: "Within 1 week of diagnosis",
        },
      },
      redFlags: [
        { flag: "Worsening hyperglycemia despite insulin (glucose persistently >200)", action: "Assess medication compliance, caloric intake, infection/stress. Check for preeclampsia (proteinuria) — may indicate need for earlier delivery.", urgency: "URGENT" },
        { flag: "Preeclampsia (BP >160/110, proteinuria, headache, visual changes)", action: "Refer to obstetrics immediately — may need delivery at 34 weeks even with immature fetus due to maternal safety.", urgency: "IMMEDIATE" },
        { flag: "Recurrent hypoglycemia on insulin (<70 mg/dL)", action: "Reduce insulin doses, educate patient on carb counting, always carry glucose tablets", urgency: "URGENT" },
        { flag: "Fetal macrosomia on ultrasound (EFW >90th percentile)", action: "Intensify glucose control, consider earlier delivery at 37-38 weeks to avoid shoulder dystocia", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "GDM affects 15-20% of pregnancies in India (higher than other countries due to genetic predisposition and lifestyle factors).",
        "Prior GDM is THE strongest predictor of future Type 2 DM — 50% develop diabetes within 10 years. Screen our patient postpartum and every 3 years thereafter.",
        "IADPSG criteria: ≥1 abnormal value on 75g OGTT (fasting ≥92, 1-hr ≥180, 2-hr ≥153) or 100g OGTT diagnostic. Stricter than older WHO criteria.",
        "Maternal risks: preeclampsia (2-3x increased), polyhydramnios, infection, cesarean delivery, maternal hyperglycemia. Fetal risks: macrosomia, birth injury (shoulder dystocia), neonatal hypoglycemia, RDS.",
        "Management pyramid: Diet (1st-line) → Metformin (2nd-line) → Insulin (3rd-line if needed). 80-90% controlled with diet if compliant.",
        "Delivery timing: Aim 39 weeks if well-controlled. If uncontrolled despite treatment, consider 37-38 weeks to reduce stillbirth risk.",
        "Postpartum: Most (85-90%) revert to normal glucose post-delivery. However, 10-15% become Type 2 DM within months. Retest at 6-12 weeks postpartum.",
      ],
      commonMistakes: [
        "Not screening at 24-28 weeks — Indian guidelines recommend universal screening (not just risk-based).",
        "Ignoring prior GDM history — this patient had GDM in first pregnancy and should have been screened earlier this pregnancy.",
        "Starting insulin too late — many doctors try diet for 2-3 weeks before adding metformin/insulin, losing critical time for fetal development.",
        "Not educating on postpartum risk — telling patient 'it goes away after delivery' without mentioning 50% future Type 2 DM risk is negligent.",
        "Delivering too early without indication — some doctors deliver at 37 weeks for 'GDM' alone (increases neonatal complications). Deliver at 39 weeks if controlled.",
        "Not involving dietitian — diet is foundational; patient needs professional nutrition guidance, not generic advice.",
      ],
      relevantHistoryQs: ["onset", "associated", "prev_illness", "fam_diabetes", "diet", "occupation", "current_meds"],
      relevantExamIds: ["general_appearance", "edema", "blood_pressure", "acanthosis_nigricans", "abdo_inspection"],
      difficulty: "MODERATE",
      estimatedMinutes: 20,
      subjectTags: ["OG", "OP"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "OG2.4",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 5. Normal Labor & Delivery Management ─────────────────────────────
  {
    topicCode: "OG-MOD-01-TOP-01",
    scenario: {
      patientAge: 25,
      patientSex: "Female",
      patientOccupation: "Tailor",
      patientLocation: "Pune, Maharashtra",
      chiefComplaint: "Labor pains and vaginal show — presented to hospital at term",
      historyOfPresent: `
- Gestational age: 39 weeks + 4 days (EDD 4 days ago, confirmed on 1st trimester ultrasound at 12 weeks)
- Onset: Labor pains started 8 hours ago, regular contractions every 5 minutes, duration 40-50 seconds
- Character: Pain in lower abdomen and lower back, crampy, rhythmic
- Associated: Vaginal show (pink-tinged mucoid discharge) 4 hours ago. Rupture of membranes 2 hours ago — gushed clear fluid, no smell or staining
- No fever, no per vaginal bleeding, no abdominal tenderness
- First pregnancy (Primigravida). Antenatal care: Booked at 8 weeks, regular visits, normal BP throughout, no complications
- Fetal movements: Active throughout pregnancy, no change in pattern recently
- Risk factors for complications: NONE. Low-risk, uncomplicated pregnancy.
- Expectations: Wants normal vaginal delivery if possible, with minimal intervention
      `.trim(),
      pastHistory: "Primigravida (no prior pregnancies). No medical illness, no surgeries, no chronic medications. No diabetes, no hypertension, no thyroid disorder. Regular menstrual cycles, married 2 years, conceived naturally on first attempt.",
      familyHistory: "Mother delivered vaginally x 3 children. No family history of twins or genetic disorders.",
      socialHistory: "Tailor (sits and works). Supportive spouse and family. Lives with in-laws. Wants husband present during labor. Good understanding of labor process.",
      drugHistory: "Prenatal iron + folic acid tablets taken regularly. No allergies.",
      vitals: { pulse: 88, bp: "120/80", temp: 37.0, rr: 18, spo2: 98 },
      generalExam: `
- General appearance: Healthy, in active labor (panting during contractions), coping well
- Pallor: Absent
- Icterus: Absent
- Cyanosis: Absent
- Edema: Mild ankle edema (1+), expected in pregnancy at term
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1, S2 normal. No murmurs. Regular rate.",
          blood_pressure: "120/80 mmHg",
        },
        respiratory: {
          auscultation_lungs: "Clear bilateral air entry. No added sounds.",
        },
        abdominal: {
          abdo_inspection: "Gravid abdomen, contracted during contractions, soft between",
          palpation_superficial: "Soft, non-tender between contractions",
          fundal_height: "Fundus palpable at xiphisternum level (appropriate for term)",
          contractions: "Palpable contractions every 5 minutes, duration 40-50 seconds, moderate-strong intensity",
        },
        obstetric_examination: {
          per_vaginal_examination: "Cervix 80% effaced, 5-6 cm dilated, anterior position, soft consistency. Membranes ruptured (clear fluid). Presenting part: head (left occiput anterior — LOA). Descent: at -2 station. No caput, no molding.",
          descent_assessment: "Head well-descended, no deep transverse arrest. Pelvis: well-formed bony pelvis, no contracture on palpation.",
          fetal_heart_rate: "FHR 136 bpm by Doppler (baseline normal 110-160), variability good, no decelerations detected. Reassuring.",
        },
      },
      availableInvestigations: [
        { id: "fhr_doppler", name: "Fetal Heart Rate (Doppler)", cost: 0, turnaround: "Immediate", category: "Vital", result: "FHR 136 bpm, regular, no murmurs", isAbnormal: false, interpretation: "Normal fetal heart rate and variability — fetus reassured.", isEssential: true },
        { id: "cbc", name: "CBC", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 11.2 g/dL (normal in pregnancy >10.5), WBC: 12,400/μL (normal in labor, stress response), Platelets: 2.5 lakhs", isAbnormal: false, interpretation: "Normal. No anemia. Adequate platelets for vaginal delivery.", isEssential: true },
        { id: "rh_antibody", name: "RhD status and Antibody Screen (should have been done antenatally)", cost: 300, turnaround: "1 hour", category: "Hematology", result: "RhD Positive, Antibody screen negative", isAbnormal: false, interpretation: "No sensitization. No incompatibility issues for this pregnancy or future pregnancies (unless baby is RhD negative).", isEssential: true },
        { id: "blood_group", name: "Blood Group & Typing", cost: 200, turnaround: "30 min", category: "Hematology", result: "O Positive", isAbnormal: false, interpretation: "Universal donor blood type. Safe for emergency transfusion if needed.", isEssential: true },
        { id: "obstetric_ultrasound", name: "Obstetric Ultrasound (confirm presentation, amniotic fluid, placental position)", cost: 1500, turnaround: "30 min", category: "Imaging", result: "Single viable intrauterine pregnancy, cephalic presentation (head down), fetal weight estimated 3.2 kg (50th percentile for 39+ weeks). Amniotic fluid adequate (AFI 15cm). Placenta anterior, grade 2 maturity. Cord not around neck (no nuchal cord). Reassuring.", isAbnormal: false, interpretation: "Reassuring. Baby well-grown, normal amniotic fluid, head presentation, no structural concerns. No cord entanglement.", isEssential: false },
        { id: "partograph", name: "Partograph (partographic recording of labor)", cost: 0, turnaround: "Continuous", category: "Labor monitoring", result: "Cervix dilating at appropriate rate (~1.5 cm/hour as expected in primigravida). Alert line not crossed. No descent stasis. Active phase of labor.", isAbnormal: false, interpretation: "Normal progress of labor. No arrest or protraction. Labor advancing appropriately.", isEssential: true },
        { id: "ctg_monitoring", name: "Continuous Cardiotocography (CTG) — if high-risk; optional in low-risk", cost: 1000, turnaround: "Continuous", category: "Labor monitoring", result: "Baseline FHR 130-140 bpm, variability 5-10 bpm (reassuring), intermittent accelerations with fetal movement, no decelerations. Uterine contractions every 5 min, duration 40-50 sec.", isAbnormal: false, interpretation: "Reassuring fetal status. Normal CTG pattern in labor.", isEssential: false },
      ],
      correctDiagnosis: "Primigravida in active labor at term (39+4 weeks) with normal progress — low-risk labor, anticipating normal vaginal delivery",
      differentials: [
        { diagnosis: "False Labor (Braxton-Hicks)", likelihood: "LOW", reasoning: "At term with cervical changes (80% effaced, 5-6cm dilated) and rupture of membranes, this is TRUE labor, not false labor." },
        { diagnosis: "Cephalopelvic Disproportion (CPD)", likelihood: "LOW", reasoning: "Pelvic exam shows adequate pelvis, well-formed. Head descended to -2 station. No molding or caput. Progress normal. CPD unlikely." },
        { diagnosis: "Breech Presentation or Transverse Lie", likelihood: "LOW", reasoning: "On palpation and ultrasound, confirmed cephalic (head) presentation. Breech excluded." },
      ],
      diagnosticReasoning: "25-year-old primigravida at 39+4 weeks (term) with 8 hours of labor pains, regular contractions every 5 minutes, vaginal show, and rupture of membranes 2 hours ago. Vital signs stable. Examination shows cervix 5-6 cm dilated, 80% effaced, soft, anterior. Head at LOA position, descended to -2 station. No caput, no molding. Pelvic exam adequate — well-formed bony pelvis. FHR 136 (normal), reassuring pattern. CBC normal. This is a low-risk, uncomplicated primigravida in active phase of labor with normal progress. No indication for intervention or augmentation at present. Candidates for physiological labor management with appropriate monitoring.",
      managementPlan: {
        immediateActions: [
          { action: "Admit to labor ward, establish rapport, explain labor progress and plan", reasoning: "Patient education and support reduce anxiety, improve coping.", priority: "URGENT" },
          { action: "Establish IV access (18G IV cannula), start IV fluids (Normal Saline), take blood samples", reasoning: "Routine precaution for emergency access. Fluids maintain hydration during labor. Blood samples for CBC, blood group, cross-match.", priority: "STAT" },
          { action: "Position in semi-sitting or left lateral position — encourage ambulation between contractions", reasoning: "Improves pelvic mechanics, aids descent, increases comfort. Upright positions associated with shorter labor.", priority: "URGENT" },
          { action: "Monitor contractions and FHR regularly — palpate contractions and check FHR every 30 minutes (or use intermittent monitoring)", reasoning: "Assess labor progress and fetal well-being. Intermittent monitoring acceptable in low-risk labor in many settings.", priority: "STAT" },
          { action: "Offer continuous labor support — presence of partner/attendant, encouragement, reassurance", reasoning: "Labor companion reduces pain perception, anxiety, interventions. Partner can provide massage, position changes.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Analgesics for pain relief (offer, not routine)", examples: ["Pethidine (meperidine) 50-100mg IM (if requested)", "Paracetamol 1g PO (safe)", "Pentazocine 30mg IM (alternative opioid)"], route: "IM/PO", duration: "As needed during labor", reasoning: "Pain relief is maternal right. Offer options: pharmacological (opioids) or non-pharmacological (massage, breathing, position change). Timing of administration important — avoid near delivery (can cause neonatal respiratory depression).", contraindications: ["Avoid opioids within 2 hours of anticipated delivery", "Respiratory depression risk"], indianContext: "Pethidine 50mg ampoule ₹15-20. Pentazocine alternative if pethidine unavailable. Paracetamol cheapest option (₹1-2/tablet)." },
          { drugClass: "Oxytocin (for augmentation if labor arrest)", examples: ["Oxytocin 5-10 units in 500 mL NS IV infusion, start 2 mL/min, increase by 2 mL every 15-30 min until adequate contractions (every 2-3 min, 60+ seconds, strong intensity)"], route: "IV infusion", duration: "Until active descent or delivery", reasoning: "If labor arrest occurs (no progress despite adequate contractions). NOT given routinely in normal labor. Assess for true arrest vs slow progress before augmenting (primigravida expected to progress ~1 cm/hour).", contraindications: ["Placental abruption", "Cord prolapse", "Cephalopelvic disproportion"], indianContext: "Oxytocin 10 IU ampoule ₹5-10." },
          { drugClass: "Antibiotics (prophylaxis if Group B Streptococcus positive, not done in this case)", examples: ["Penicillin G 2-4 million units IV every 4 hours during labor (if GBS+ or unknown status in rupture >18 hours)"], route: "IV", duration: "During labor until delivery", reasoning: "Prevent vertical transmission of GBS to neonate. Not needed here if GBS negative or unknown but timely rupture (only 2 hours).", contraindications: ["Penicillin allergy (use clindamycin or vancomycin)"], indianContext: "GBS screening not routine in all Indian settings due to cost. If positive, prophylaxis essential." },
        ],
        nonPharmacological: [
          { intervention: "Continuous labor support (partner presence, encouraging words, position changes)", reasoning: "Reduces pain perception, anxiety, duration of labor, reduces need for analgesia/anesthesia.", duration: "Entire labor" },
          { intervention: "Ambulation and position changes — encourage walking, squatting, kneeling, side-lying", reasoning: "Upright positions improve pelvic mechanics, fetal rotation. Reduces labor duration, increases comfort.", duration: "Active labor" },
          { intervention: "Breathing techniques and relaxation — slow breathing during contractions, relaxation between", reasoning: "Reduces tension, oxygen improves delivery to fetus, pain perception improved.", duration: "Throughout labor" },
          { intervention: "Warm water immersion (shower or bath if available)", reasoning: "Reduces pain perception, relaxes muscles. Safe in labor if careful monitoring maintained.", duration: "During labor if available" },
          { intervention: "Perineal massage — gentle massage to perineal area before expulsion", reasoning: "May reduce perineal trauma and need for episiotomy. Discuss with patient during labor.", duration: "Second stage" },
        ],
        monitoring: [
          { parameter: "Vital signs (BP, HR, temperature)", frequency: "Hourly or more frequently if changes", target: "BP 100-140/60-90, HR 60-100, temperature <37.5°C", escalation: "If fever >38°C — assess for infection (chorioamnionitis), may need IV antibiotics" },
          { parameter: "Labor progress — cervical dilatation and fetal descent", frequency: "Every 2 hours (or as per partograph)", target: "Cervix dilating ~1 cm/hour (primigravida), fetal descent progressive, no arrest", escalation: "If no progress in 2-4 hours (arrest of dilation or descent) — assess for CPD, consider augmentation with oxytocin, or cesarean if indication" },
          { parameter: "Uterine contractions", frequency: "Palpate during labor", target: "Contractions every 2-3 minutes, duration 60+ seconds, strong intensity in active labor", escalation: "If contractions inadequate — augment with oxytocin. If contractions excessive (tetanic, >5 per 10 min) — reduce oxytocin to prevent uterine rupture" },
          { parameter: "Fetal well-being — FHR and CTG (if used)", frequency: "Every 30 min in low-risk, or continuous if high-risk", target: "Baseline 110-160, variability 5-10 bpm, accelerations present, no decelerations", escalation: "If abnormal CTG (late decelerations, loss of variability, bradycardia) — assess for hypoxia, increase oxygen, position change, reduce oxytocin if given, consider expedite delivery" },
          { parameter: "Lochia and vaginal bleeding", frequency: "Monitor throughout", target: "Small amount of vaginal bleeding, no excessive flow", escalation: "If fresh bleeding >500 mL during labor — assess for placental abruption, cord prolapse, uterine rupture" },
          { parameter: "Partograph (pictorial recording)", frequency: "Ongoing throughout labor", target: "Progress remains on or to left of alert line (normal progress). No crossing to action line (arrest/protraction).", escalation: "If action line crossed — indicates arrest/protraction, assess CPD, consider augmentation or cesarean" },
        ],
        lifestyle: {
          dos: ["Continue ambulation during labor", "Take small sips of water if allowed", "Use positioning to comfort", "Breathe slowly and deeply during contractions", "Rest between contractions"],
          donts: ["Avoid straining or pushing until fully dilated and with urge", "Do not lie flat on back for extended time (reduces placental perfusion)", "Avoid panic — labor progresses naturally"],
          indianSpecific: ["Husband/family present for support (emotionally important in Indian context)", "Use squatting or dorsal position if comfortable — these are natural positions used traditionally in India", "Avoid touching the laboring woman excessively by multiple attendants (privacy respected)"],
        },
        followUp: {
          when: "Continuous during labor, then postpartum assessment, postnatal at 6 weeks",
          what: ["Monitor second stage progress (pushing/expulsion)", "Deliver baby safely and inspect placenta", "Postpartum: assess for complications (hemorrhage, tears, infection), breastfeeding initiation", "6 weeks: postpartum review, family planning counseling"],
        },
        referral: {
          needed: false,
          to: "Not needed for normal labor. Remain in labor ward for routine vaginal delivery.",
          urgency: "N/A",
        },
      },
      redFlags: [
        { flag: "Arrest of labor (no cervical progress for 2-4 hours) with adequate contractions", action: "Assess for CPD, consider augmentation with oxytocin or cesarean delivery", urgency: "URGENT" },
        { flag: "Abnormal fetal heart rate (baseline <110 or >160, loss of variability, late decelerations)", action: "Increase oxygen, change position, reduce oxytocin, consider expedite delivery (vaginal or cesarean)", urgency: "URGENT" },
        { flag: "Vaginal bleeding >500 mL during labor", action: "Assess for placental abruption, cord prolapse. Prepare for emergency delivery and transfusion.", urgency: "IMMEDIATE" },
        { flag: "Fever >38.5°C during labor", action: "Assess for chorioamnionitis (uterine infection) — start IV antibiotics (ampicillin + gentamicin or cephalosporin), expedite delivery", urgency: "URGENT" },
        { flag: "Inability to urinate despite full bladder", action: "Catheterize bladder — full bladder obstructs descent", urgency: "URGENT" },
      ],
      keyLearningPoints: [
        "Normal labor has 3 stages: (1) Latent phase (0-3cm), (2) Active phase (3-7cm), (3) Deceleration phase (7-10cm = transition). Second stage: pushing from full dilation to delivery (~30min-2 hours in primigravida).",
        "Progress in primigravida: ~1 cm cervical dilation per hour in active phase. Partograph is essential tool to detect abnormal labor early.",
        "Normal labor does NOT require continuous intervention — ambulation, position changes, partner support reduce complications and improve outcomes.",
        "Intermittent fetal heart rate monitoring acceptable in low-risk labor. Continuous CTG reserved for high-risk cases (reduces operative interventions in low-risk groups).",
        "Perineal support and controlled delivery reduce perineal trauma. Episiotomy not routine — only for indication (instrument delivery, severe perineal trauma).",
        "Immediate third stage management: Controlled cord traction after fetal expulsion + maternal uterotonic (oxytocin) reduces PPH risk by 50%.",
        "Skin-to-skin contact and breastfeeding within 1 hour of delivery optimizes bonding and neonatal thermal stability.",
      ],
      commonMistakes: [
        "Continuous supine positioning — reduces placental perfusion. Encourage upright positions.",
        "NPO (nothing by mouth) throughout labor — not necessary in low-risk labor. Small snacks/clear fluids maintain energy.",
        "Routine oxytocin augmentation — used only if labor arrest documented, not routinely in normal labor.",
        "Routine episiotomy — increases infection risk and dyspareunia. Reserved for indication (instrument delivery, fetal distress).",
        "Separating mother and baby postpartum — delayed skin-to-skin contact and breastfeeding initiation.",
        "Not assessing pelvic adequacy before labor — confirm adequate pelvis on exam during latent labor. Late diagnosis of CPD leads to prolonged labor.",
        "Ignoring partograph findings — not progressing normally? Detect early and act, don't wait for severe arrest.",
      ],
      relevantHistoryQs: ["onset", "character", "associated", "prev_illness", "allergies"],
      relevantExamIds: ["general_appearance", "contractions", "per_vaginal_examination", "descent_assessment", "fetal_heart_rate"],
      difficulty: "MODERATE",
      estimatedMinutes: 20,
      subjectTags: ["OG", "OP"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "OG1.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
