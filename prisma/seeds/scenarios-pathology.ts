// ---------------------------------------------------------------------------
// Clinical Decision Simulator — Seed Scenarios for Pathology (PA)
// 3 scenarios covering hematologic and renal pathology
// ---------------------------------------------------------------------------

export const pathologyScenarios = [
  // ─── 1. Iron Deficiency Anemia (Microcytic Hypochromic) ──────────────────
  {
    topicCode: "PA-MOD-03-TOP-01",
    scenario: {
      patientAge: 42,
      patientSex: "Female",
      patientOccupation: "Housewife",
      patientLocation: "Delhi, NCR",
      chiefComplaint: "Persistent fatigue and shortness of breath for 8 months",
      historyOfPresent: `
- Onset: Gradual onset 8 months ago, progressive
- Character: Fatigue worsening, now unable to climb stairs without breathlessness
- Associated: Dyspnea on mild exertion (walking ~50m), palpitations during household work
- Bleeding: Heavy menstrual bleeding (menorrhagia) for past 4 years — changing pads/tampons every 1-2 hours on heavy days
- Associated: Giddiness on standing, cold intolerance, brittle nails (horizontal ridges)
- Appetite: Cravings for ice, chalk, and raw rice (pica)
- No hemoptysis, no hematochezia, no melena
      `.trim(),
      pastHistory: "Uterine fibroids diagnosed 3 years ago on ultrasound — advised hysterectomy but refused. No other illnesses. No surgeries. No blood transfusions.",
      familyHistory: "Mother has Type 2 DM. No family history of anemia or bleeding disorders.",
      socialHistory: "Housewife, sedentary. No smoking, no alcohol. Vegetarian diet — rice, dal, green vegetables. No meat or fish intake for religious reasons. Limited fruit intake. Monthly income ~₹25,000 — budget-conscious, limited variety in diet.",
      drugHistory: "No regular medications. Takes Paracetamol for headache. No iron supplementation in past.",
      vitals: { pulse: 96, bp: "120/76", temp: 37.0, rr: 18, spo2: 96 },
      generalExam: `
- General appearance: Pale, tired-looking, overweight
- Pallor: Marked pallor of palms, conjunctivae, nail beds
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Koilonychia: Spoon-shaped nails present bilaterally
- Glossitis: Tongue slightly smooth with reduced papillae
- Angular cheilitis: Absent
      `.trim(),
      systemicExam: {
        cardiovascular: {
          apex_beat: "Apex beat in 5th ICS, mid-clavicular line — normal",
          heart_sounds: "S1, S2 normal. No S3 or S4.",
          murmurs: "No murmurs detected",
          peripheral_pulses: "All pulses palpable, regular, bounding (high-output state)",
          blood_pressure: "120/76 mmHg",
        },
        respiratory: {
          chest_inspection: "Bilateral equal chest movements",
          trachea: "Trachea central",
          percussion: "Resonant bilaterally",
          auscultation_lungs: "Clear bilateral air entry. No added sounds.",
          vocal_resonance: "Normal vocal resonance bilaterally",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft, non-distended",
          palpation_superficial: "No tenderness",
          palpation_deep: "No organomegaly",
          liver_palpation: "Liver not palpable",
          spleen_palpation: "Spleen not palpable",
          bowel_sounds: "Normal bowel sounds",
        },
        neurological: {
          consciousness: "GCS 15/15 — fully conscious and oriented",
          cranial_nerves: "All cranial nerves intact",
          reflexes: "Deep tendon reflexes normal and symmetrical",
          plantar: "Plantar reflex — flexor bilaterally (normal)",
        },
      },
      availableInvestigations: [
        { id: "cbc", name: "Complete Blood Count", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 7.2 g/dL, RBC: 5.8 million/μL (elevated), MCV: 62 fL (microcytic), MCH: 18 pg (hypochromic), MCHC: 28 g/dL, WBC: 7,200/μL (normal), Platelets: 3.2 lakhs (elevated)", isAbnormal: true, interpretation: "Microcytic hypochromic anemia with elevated RBC count and elevated platelets — classic iron deficiency pattern. Anemia grade II-III (Hb 7.2 g/dL).", isEssential: true },
        { id: "ips", name: "Iron Profile (Serum Iron, TIBC, Ferritin, Transferrin Saturation)", cost: 1200, turnaround: "2 hours", category: "Biochemistry", result: "Serum Iron: 32 μg/dL (Normal: 60-170), TIBC: 420 μg/dL (Normal: 250-425), Ferritin: 8 ng/mL (Normal: 15-200), Transferrin Saturation: 8% (Normal: 20-50%)", isAbnormal: true, interpretation: "All iron markers depleted — confirms iron deficiency. Ferritin <12 is diagnostic of iron deficiency anemia.", isEssential: true },
        { id: "pbs", name: "Peripheral Blood Smear", cost: 150, turnaround: "30 min", category: "Hematology", result: "Microcytic RBCs with hypochromia, pencil cells (target appearance), occasional Howell-Jolly bodies. RBC morphology shows marked variation (anisocytosis) and shape variation (poikilocytosis).", isAbnormal: true, interpretation: "Confirms microcytic hypochromic RBCs. Pencil cells are characteristic of severe iron deficiency. No schistocytes or spherocytes.", isEssential: true },
        { id: "pf", name: "Prothrombin Factor (PT/INR)", cost: 300, turnaround: "1 hour", category: "Hematology", result: "PT: 12.5 sec, INR: 1.0, aPTT: 29 sec", isAbnormal: false, interpretation: "Normal coagulation — rules out coagulopathy despite elevated platelets.", isEssential: false },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 28 mg/dL, Creatinine: 0.9 mg/dL, Na: 138 mEq/L, K: 3.9 mEq/L", isAbnormal: false, interpretation: "Normal renal function — rules out chronic kidney disease anemia.", isEssential: false },
        { id: "tft", name: "Thyroid Function Test", cost: 700, turnaround: "2 hours", category: "Biochemistry", result: "TSH: 2.1 mIU/L (Normal: 0.4-4.0), Free T4: 8.2 pg/mL (Normal: 7.5-10.5)", isAbnormal: false, interpretation: "Normal thyroid function — rules out hypothyroidism as cause of fatigue.", isEssential: false },
        { id: "celiac", name: "Tissue Transglutaminase IgA (Anti-tTG) Antibody", cost: 900, turnaround: "1 hour", category: "Immunology", result: "Anti-tTG IgA: 1.2 U/mL (Normal: <7)", isAbnormal: false, interpretation: "Negative — celiac disease ruled out as cause of iron malabsorption.", isEssential: false },
        { id: "ott_b12", name: "Vitamin B12 and Folate Levels", cost: 1500, turnaround: "2 hours", category: "Biochemistry", result: "B12: 420 pg/mL (Normal: 200-900), Folate: 6.8 ng/mL (Normal: >5.4)", isAbnormal: false, interpretation: "Normal B12 and folate — rules out megaloblastic component to anemia.", isEssential: false },
        { id: "abs_ultrasound", name: "Abdominal Ultrasound", cost: 800, turnaround: "30 min", category: "Imaging", result: "Multiple fibroids in uterus — largest measuring 5.2 cm, causing significant distortion of uterine cavity. No free fluid. Ovaries normal. Other abdominal organs normal.", isAbnormal: true, interpretation: "Confirms uterine fibroids as the likely source of chronic blood loss leading to iron deficiency anemia.", isEssential: true },
        { id: "fecal_occult", name: "Fecal Occult Blood Test", cost: 200, turnaround: "24 hours", category: "Stool", result: "Negative", isAbnormal: false, interpretation: "No gastrointestinal blood loss — menorrhagia is the sole source of bleeding.", isEssential: true },
      ],
      correctDiagnosis: "Iron Deficiency Anemia (Severe) secondary to Menorrhagia from Uterine Fibroids",
      differentials: [
        { diagnosis: "Anemia of Chronic Disease", likelihood: "LOW", reasoning: "ACD typically shows high ferritin despite low iron. Here ferritin is <12 — diagnostic of absolute iron deficiency." },
        { diagnosis: "Thalassemia Minor (Trait)", likelihood: "LOW", reasoning: "β-thalassemia trait shows high RBC count (correct) and microcytosis, BUT ferritin is elevated/normal and RDW normal. Our patient has normal RDW, but iron studies prove iron deficiency." },
        { diagnosis: "Megaloblastic Anemia", likelihood: "LOW", reasoning: "Caused by B12/folate deficiency. Here B12 and folate are normal. PBS would show macrocytes with hypersegmented neutrophils (absent here)." },
        { diagnosis: "Lead Poisoning", likelihood: "LOW", reasoning: "Occupational exposure unlikely (housewife). Would cause basophilic stippling on PBS and elevated lead levels." },
      ],
      diagnosticReasoning: "42-year-old vegetarian housewife with 8-month history of progressive fatigue and dyspnea. Key finding: 4-year history of menorrhagia from known uterine fibroids. Examination shows marked pallor, koilonychia (spoon nails), and glossitis. CBC shows severe microcytic hypochromic anemia (Hb 7.2, MCV 62, MCH 18) with elevated RBC count and elevated platelets — classic iron deficiency pattern. Iron profile confirms depleted iron stores: ferritin 8 ng/mL, low serum iron, high TIBC. PBS shows pencil cells. Abdominal ultrasound confirms uterine fibroids. Fecal occult blood negative — rules out GI bleeding. This is classic iron deficiency anemia from chronic menorrhagia.",
      managementPlan: {
        immediateActions: [
          { action: "Start Iron supplementation immediately", reasoning: "Hb 7.2 requires urgent repletion. Iron is first-line treatment for iron deficiency anemia.", priority: "STAT" },
          { action: "Transfuse if Hb <5 g/dL or symptomatic with cardiopulmonary compromise", reasoning: "Hb 7.2 is severe but patient is compensating (HR 96, BP stable). Avoid transfusion if possible to prevent iron overload and sensitization.", priority: "ASSESS" },
          { action: "Take detailed menstrual history and gynecologic evaluation", reasoning: "Confirm source of bleeding — fibroids are confirmed but need gynecology consultation for definitive management.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Iron Supplement (Ferrous)", examples: ["Ferrous Sulfate 325mg (65mg elemental iron) OD with Vitamin C", "Ferrous Fumarate 200mg OD"], route: "Oral", duration: "3-6 months (until Hb normalizes + 6 months more for iron store replenishment)", reasoning: "Oral iron is first-line. Ferrous salts better absorbed than ferric. Vitamin C enhances absorption. Expected rise: 1 g/dL Hb per 2-3 weeks if compliant.", contraindications: ["Hemochromatosis", "Active GI bleeding"], indianContext: "Ferrous Sulfate 325mg at ₹5-8/tablet in Jan Aushadhi. Generic brands very affordable. Also available as Ferrous Fumarate." },
          { drugClass: "Vitamin C supplement", examples: ["Ascorbic Acid 500mg OD with iron"], route: "Oral", duration: "Along with iron for 3-6 months", reasoning: "Enhances iron absorption in acidic stomach environment. Essential to maximize bioavailability of iron.", contraindications: ["Glucose-6-phosphate dehydrogenase (G6PD) deficiency"], indianContext: "Vitamin C tablets at ₹2-3/tablet." },
          { drugClass: "Folic Acid supplement", examples: ["Folic Acid 5mg OD"], route: "Oral", duration: "3-6 months", reasoning: "Iron deficiency may be accompanied by mild folate deficiency. Also needed for RBC synthesis during iron repletion.", contraindications: ["Pernicious anemia (B12 deficiency)"], indianContext: "Folic Acid 5mg tablets at ₹1-2/tablet." },
          { drugClass: "Tranexamic Acid (if no contraindication)", examples: ["Tranexamic Acid 1-1.5g BD on heavy menstrual days"], route: "Oral", duration: "On days of menstrual bleeding", reasoning: "Reduces menorrhagia by 30-50% through antifibrinolytic action. Can reduce iron requirement and improve symptoms.", contraindications: ["Thrombophilia", "History of VTE"], indianContext: "Tranexamic Acid 500mg at ₹8-15/tablet. Cost during cycle: ~₹100-200 per month." },
        ],
        nonPharmacological: [
          { intervention: "Dietary counseling for iron-rich foods", reasoning: "Enhance dietary intake of iron alongside supplementation. Patient is vegetarian — needs plant-based iron sources.", duration: "Ongoing" },
          { intervention: "Encourage vitamin C intake in diet", reasoning: "Citrus fruits, tomatoes, leafy greens enhance iron absorption.", duration: "Daily" },
        ],
        monitoring: [
          { parameter: "Hemoglobin level", frequency: "Repeat CBC at 4 weeks, then at 8 weeks", target: "Target Hb >12 g/dL. Expected rise ~1 g/dL per 2-3 weeks if compliant.", escalation: "If no rise by 4 weeks — assess compliance, malabsorption, or ongoing bleeding." },
          { parameter: "Iron studies", frequency: "After Hb normalizes (typically 8-12 weeks), check iron studies", target: "Ferritin >50 ng/mL (repleted stores), Serum Iron >80 μg/dL", escalation: "Continue supplementation for 6 more months after Hb normalization to replenish iron stores." },
          { parameter: "GI symptoms", frequency: "Every 2 weeks", target: "Tolerance to iron — monitor for constipation/abdominal discomfort", escalation: "If GI intolerance — reduce dose, divide dose, or switch to ferric formulation or IV iron." },
          { parameter: "Menstrual bleeding assessment", frequency: "Monthly", target: "Reduction in severity with tranexamic acid", escalation: "If uncontrolled menorrhagia despite tranexamic acid — refer for gynecologic intervention (hysterectomy, myomectomy, or endometrial ablation)." },
        ],
        lifestyle: {
          dos: ["Eat iron-rich vegetarian foods: fortified cereals, leafy greens (spinach, fenugreek), legumes, nuts", "Take iron supplement with vitamin C source (citrus juice, tomato) for better absorption", "Take iron on empty stomach (morning) for best absorption", "Continue iron supplementation for full 6-12 months even after symptoms improve", "Regular exercise as tolerated after Hb improves"],
          donts: ["Don't take iron with tea, coffee, or milk — they inhibit absorption", "Don't take iron with calcium or antacids — reduces bioavailability", "Don't skip doses — compliance is critical for success", "Avoid unproven supplements or folk remedies for anemia"],
          indianSpecific: ["Jaggery (gur) is rich in iron — include in diet but not as sole source", "Leafy greens (palak, methi, amaranth) are excellent iron sources in India", "Fortified wheat flour/rice available through PDS — switch to fortified grains", "Consult local Anganwadi worker for dietary advice tailored to local foods", "If iron supplementation causes severe constipation — very common in India — try dividing dose or using ferrous fumarate instead"],
        },
        followUp: {
          when: "1 week (phone check for tolerance), 4 weeks (first labs), 8 weeks (second labs), then 6-12 weeks until iron stores replete",
          what: ["CBC to monitor Hb rise", "Repeat iron studies after Hb normalizes", "Gynecology review to decide on fibroid management (myomectomy, hysterectomy, or endometrial ablation)"],
        },
        referral: {
          needed: true,
          to: "Gynecology — for management of uterine fibroids (definitive treatment of bleeding source)",
          urgency: "URGENT (after anemia is partially corrected)",
        },
      },
      redFlags: [
        { flag: "Dyspnea at rest or signs of heart failure (orthopnea, PND)", action: "Consider urgent transfusion — anemia is now limiting oxygen delivery", urgency: "IMMEDIATE" },
        { flag: "Sudden severe menorrhagia with Hb drop despite iron supplementation", action: "Assess for acute bleeding source — GI bleed, vaginal bleed — may need endoscopy or urgent gynecology evaluation", urgency: "URGENT" },
        { flag: "No rise in Hb after 4 weeks of iron supplementation", action: "Assess compliance, malabsorption (celiac?), ongoing blood loss > iron intake, or wrong diagnosis", urgency: "URGENT" },
        { flag: "Signs of cardiac compromise (SOB at rest, orthopnea)", action: "Transfuse to Hb >8 g/dL — high-output state may precipitate decompensation", urgency: "IMMEDIATE" },
      ],
      keyLearningPoints: [
        "Microcytic hypochromic anemia = iron deficiency until proven otherwise",
        "Ferritin <12 ng/mL is virtually diagnostic of iron deficiency anemia",
        "Menorrhagia from uterine fibroids is THE most common cause of iron deficiency in non-pregnant females in developed countries; in India, it's combined with dietary insufficiency",
        "Iron supplementation causes ~1 g/dL rise in Hb per 2-3 weeks in responders",
        "Oral iron must be given for 6-12 months total: (1) to raise Hb, and (2) to replenish iron stores (ferritin)",
        "Vegetarian diet requires careful counseling — plant-based iron (non-heme) is less bioavailable than heme iron from meat",
        "Always rule out GI bleeding as cause of iron deficiency in males and post-menopausal females (fecal occult blood, consider endoscopy if no obvious source)",
      ],
      commonMistakes: [
        "Stopping iron supplementation once symptoms resolve — iron stores still depleted, relapse likely",
        "Prescribing iron without vitamin C — bioavailability is significantly reduced",
        "Giving iron with antacids or PPI — reduces absorption to <20%",
        "Not assessing compliance — many patients can't tolerate oral iron GI side effects; switching to ferrous fumarate or dividing dose helps",
        "Missing the bleeding source — in this case, fibroids were obvious, but always do fecal occult blood to rule out GI bleeding",
        "Not referring to gynecology — iron supplementation treats anemia but not the underlying menorrhagia; definitive treatment needed",
        "Transfusing unnecessarily — Hb 7.2 is severe but patient is compensating. Transfusion should be reserved for Hb <5 or cardiopulmonary compromise",
      ],
      relevantHistoryQs: ["onset", "associated", "severity", "bleeding_menstrual", "dietary_intake", "occupation", "prev_illness", "pica"],
      relevantExamIds: ["pallor", "koilonychia", "glossitis", "heart_sounds", "peripheral_pulses", "auscultation_lungs"],
      difficulty: "MEDIUM",
      estimatedMinutes: 22,
      subjectTags: ["PA", "IM"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "PA1.1",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 2. Chronic Myeloid Leukemia (CML) ──────────────────────────────────
  {
    topicCode: "PA-MOD-03-TOP-03",
    scenario: {
      patientAge: 38,
      patientSex: "Male",
      patientOccupation: "Bank manager",
      patientLocation: "Mumbai, Maharashtra",
      chiefComplaint: "Fatigue and abdominal fullness for 3 months, incidental finding of high WBC count",
      historyOfPresent: `
- Onset: Gradual onset 3 months ago
- Fatigue: Progressive fatigue affecting work productivity
- Associated: Early satiety (after eating small meals), dull left-sided abdominal ache
- Bleeding: Mild gum bleeding while brushing teeth, occasional small red spots on skin (petechiae)
- No fever, no night sweats, no weight loss
- Incidental: Found to have high WBC count on routine blood test done for workplace health check — referred to hospital
      `.trim(),
      pastHistory: "No significant past illness. No surgeries. No tuberculosis. No chronic diseases. No radiation exposure. No occupational exposure to chemicals.",
      familyHistory: "No family history of malignancy or blood disorders. Parents alive and well.",
      socialHistory: "Bank manager — sedentary job. Non-smoker, non-drinker. Lives in urban apartment with family. Spouse and 2 children. Good socioeconomic status.",
      drugHistory: "No regular medications. Takes occasional multivitamins. No drug allergies. No herbal medicines.",
      vitals: { pulse: 88, bp: "128/82", temp: 37.0, rr: 16, spo2: 98 },
      generalExam: `
- General appearance: Well-built, slightly pale, not in distress
- Pallor: Mild pallor of conjunctivae
- Icterus: Absent
- Cyanosis: Absent
- Clubbing: Absent
- Petechiae: Small petechiae on lower extremities
- Ecchymoses: A few small bruises on forearms
- Hepatosplenomegaly: Not apparent on inspection
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1, S2 normal. No murmurs.",
          peripheral_pulses: "All pulses palpable and regular",
          blood_pressure: "128/82 mmHg",
        },
        respiratory: {
          chest_inspection: "Bilateral equal chest movements",
          auscultation_lungs: "Clear bilateral air entry. No added sounds.",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft, mildly distended",
          palpation_superficial: "No tenderness",
          palpation_deep: "Liver not palpable. Spleen palpable 4 cm below left costal margin — firm, non-tender.",
          bowel_sounds: "Normal bowel sounds",
        },
        neurological: {
          consciousness: "GCS 15/15 — alert and oriented",
          reflexes: "Deep tendon reflexes normal",
        },
      },
      availableInvestigations: [
        { id: "cbc", name: "Complete Blood Count", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 9.8 g/dL, RBC: 3.2 million/μL, MCV: 82 fL (normocytic), WBC: 68,500/μL (markedly elevated), Blasts: 2% (normal <5% in peripheral blood), Basophils: 8%, Eosinophils: 7%, Myelocytes: 15%, Neutrophils: 58%, Platelets: 4.2 lakhs (elevated)", isAbnormal: true, interpretation: "Markedly elevated WBC with left shift (immature forms present). Elevated basophils and eosinophils are characteristic of CML. Mild anemia. Elevated platelets.", isEssential: true },
        { id: "pbs", name: "Peripheral Blood Smear", cost: 150, turnaround: "30 min", category: "Hematology", result: "Marked leukocytosis with WBC differential: Neutrophils 58%, Myelocytes 15%, Metamyelocytes 8%, Bands 10%, Lymphocytes 6%, Monocytes 2%, Basophils 8%, Eosinophils 7%. Blasts <5%. RBCs normocytic, normochromic. Platelets mildly increased.", isAbnormal: true, interpretation: "Full spectrum of myeloid maturation present — myeloid left shift. Elevated basophils and eosinophils specific for CML. <5% blasts indicates chronic phase.", isEssential: true },
        { id: "bcr_abl", name: "BCR-ABL Fusion (Molecular: qPCR)", cost: 5000, turnaround: "24-48 hours", category: "Molecular", result: "BCR-ABL p210 fusion transcript detected — POSITIVE. Quantitation: 45,000 copies/μL (International Scale 45% of ABL control)", isAbnormal: true, interpretation: "PATHOGNOMONIC for chronic myeloid leukemia. BCR-ABL fusion gene is present in 95% of CML cases. p210 is typical CML protein. Quantitation baseline for treatment monitoring.", isEssential: true },
        { id: "cytogenetics", name: "Cytogenetics (Karyotype)", cost: 3000, turnaround: "2-3 weeks", category: "Cytogenetics", result: "Karyotype: 46,XY,t(9;22)(q34;q11.2) in 20/20 metaphases — Philadelphia chromosome (Ph+) 100%", isAbnormal: true, interpretation: "Philadelphia chromosome (Ph) translocation is present in 95% of CML. Confirms diagnosis. Important for prognosis and therapy selection.", isEssential: true },
        { id: "ldo", name: "Leukocyte Differential and Oxidative Burst (NBT test)", cost: 400, turnaround: "1 hour", category: "Hematology", result: "WBC differential as above. Nitroblue tetrazolium (NBT) test — normal (positive). Suggests normal neutrophil oxidative function — rules out chronic granulomatous disease.", isAbnormal: false, interpretation: "Normal oxidative burst rules out chronic granulomatous disease which can mimic CML presentation.", isEssential: false },
        { id: "lcr", name: "Lactate Dehydrogenase (LDH) and Uric Acid", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "LDH: 480 U/L (Normal: 140-280), Uric Acid: 8.2 mg/dL (Normal: 3.5-7.2)", isAbnormal: true, interpretation: "Elevated LDH and uric acid reflect high cell turnover from myeloproliferation. Risk of tumor lysis syndrome if not managed carefully.", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 32 mg/dL, Creatinine: 1.0 mg/dL, Na: 140 mEq/L, K: 4.1 mEq/L", isAbnormal: false, interpretation: "Normal renal function — baseline before starting tyrosine kinase inhibitor therapy. Important for drug dose adjustment.", isEssential: true },
        { id: "lft", name: "Liver Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "AST: 28 U/L, ALT: 24 U/L, Alkaline Phosphatase: 72 U/L, Bilirubin: 0.8 mg/dL", isAbnormal: false, interpretation: "Normal liver function — baseline before starting TKI. Important as imatinib is hepatically metabolized.", isEssential: true },
        { id: "bone_marrow", name: "Bone Marrow Aspiration and Biopsy", cost: 2000, turnaround: "3 days", category: "Hematology", result: "BMA: Cellularity 95% (hypercellular) with marked myeloid predominance (M:E ratio 10:1). Myeloid maturation series present. Blasts 2%. Megakaryocytes increased. BMBx: Fibrosis 1/4 (minimal reticulin fibrosis).", isAbnormal: true, interpretation: "Bone marrow is hypercellular with myeloid predominance and normal maturation — consistent with chronic phase CML. Minimal fibrosis good prognostic sign (not accelerated phase).", isEssential: true },
        { id: "abdominal_ultrasound", name: "Abdominal Ultrasound", cost: 800, turnaround: "30 min", category: "Imaging", result: "Spleen: 15 cm (normal <12 cm) — mild splenomegaly. Liver: Normal size and echotexture. No ascites. Portal vein Doppler: Normal flow.", isAbnormal: true, interpretation: "Mild splenomegaly consistent with CML (spleen infiltrated with leukemic cells). No features of portal hypertension.", isEssential: false },
      ],
      correctDiagnosis: "Chronic Myeloid Leukemia (CML), Chronic Phase — BCR-ABL positive, Philadelphia chromosome positive",
      differentials: [
        { diagnosis: "Chronic Myeloproliferative Neoplasm — Polycythemia Vera (PV)", likelihood: "LOW", reasoning: "PV has elevated RBC/Hb, not anemia. WBC elevation is usually <50,000. No basophilia/eosinophilia. No BCR-ABL." },
        { diagnosis: "Essential Thrombocythemia (ET)", likelihood: "LOW", reasoning: "ET has striking thrombocytosis (>600,000) as primary abnormality. WBC <30,000 usually. No basophilia. No BCR-ABL." },
        { diagnosis: "Leukemoid Reaction", likelihood: "LOW", reasoning: "Seen with infections/malignancy. Resolves with treatment of underlying cause. No shift to myelocytes. No basophilia/eosinophilia. No BCR-ABL." },
        { diagnosis: "Acute Myeloid Leukemia (AML)", likelihood: "LOW", reasoning: "AML has >20% blasts. Here only 2% blasts — chronic phase. Cytogenetics would show different abnormalities." },
      ],
      diagnosticReasoning: "38-year-old male presenting with 3-month history of fatigue and early satiety. Found to have markedly elevated WBC (68,500) on routine blood test. Examination shows mild splenomegaly (4 cm), petechiae, and mild anemia. CBC shows marked leukocytosis with myeloid left shift — full spectrum of myeloid maturation from myelocytes to neutrophils. Characteristic features: elevated basophils (8%) and eosinophils (7%), <5% blasts (chronic phase). BCR-ABL fusion gene detected by qPCR — PATHOGNOMONIC. Cytogenetics confirms Philadelphia chromosome (Ph+) translocation t(9;22). Bone marrow shows hypercellular myeloid predominance with normal maturation. This is CLASSIC chronic phase CML.",
      managementPlan: {
        immediateActions: [
          { action: "Initiate allopurinol or febuxostat to prevent tumor lysis syndrome", reasoning: "Elevated LDH and uric acid indicate high cell turnover. Prophylaxis prevents fatal hyperuricemia and renal failure.", priority: "STAT" },
          { action: "Increase oral hydration — 2-3 liters/day", reasoning: "Promotes renal clearance of uric acid and prevents urate crystal precipitation in renal tubules.", priority: "URGENT" },
          { action: "Start tyrosine kinase inhibitor (TKI) therapy", reasoning: "Imatinib mesylate is gold standard first-line for chronic phase CML. Targets BCR-ABL protein.", priority: "STAT" },
          { action: "Monitor for tumor lysis syndrome in first 72 hours", reasoning: "High cell burden — rapid lysis can cause hyperkalemia, hyperphosphatemia, hyperuricemia, acute kidney injury.", priority: "URGENT" },
        ],
        pharmacological: [
          { drugClass: "Tyrosine Kinase Inhibitor (TKI)", examples: ["Imatinib Mesylate 400mg OD", "Alternative if resistant: Dasatinib 100mg OD or Nilotinib 600mg daily (in divided doses)"], route: "Oral", duration: "Lifelong", reasoning: "Imatinib specifically inhibits BCR-ABL tyrosine kinase, the pathogenic protein in CML. Achieves complete cytogenetic response (CCyR) in 90% and major molecular response (MMR) in 85% within 12 months if compliant.", contraindications: ["Pregnancy (teratogenic)"], indianContext: "Imatinib generic available at ₹2,000-4,000/month through government programs and NGOs. Much cheaper than brand Glivec (₹20,000+/month). Jan Aushadhi program provides at ₹3,000/month." },
          { drugClass: "Xanthine Oxidase Inhibitor", examples: ["Allopurinol 300-500mg daily", "Febuxostat 80mg daily (if allopurinol contraindicated)"], route: "Oral", duration: "3-6 months (until uric acid normalized and stable on TKI)", reasoning: "Prevents hyperuricemia and tumor lysis syndrome. Given prophylactically before starting TKI to prevent urate crystal nephropathy.", contraindications: ["Allopurinol hypersensitivity"], indianContext: "Allopurinol 300mg at ₹2-4/tablet. Febuxostat 80mg at ₹30-50/tablet. Allopurinol preferred due to cost." },
          { drugClass: "Rasburicase (if severe hyperuricemia develops)", examples: ["Rasburicase 0.2 mg/kg IV", "Single dose usually effective"], route: "IV", duration: "One-time as needed", reasoning: "Converts uric acid to allantoin (more soluble). Used if allopurinol fails or as emergency treatment. Very effective but expensive.", contraindications: ["G6PD deficiency"], indianContext: "Rasburicase very expensive in India (~₹15,000-20,000 per vial). Usually reserved for severe cases. May not be available in all centers." },
          { drugClass: "Hydroxyurea (if TKI not available or as bridge therapy)", examples: ["Hydroxyurea 1-2g daily in divided doses"], route: "Oral", duration: "Until TKI available", reasoning: "Older agent, reduces WBC burden rapidly. Used as bridge or in resource-limited settings. Less effective than TKI but cheaper.", contraindications: ["Pregnancy"], indianContext: "Hydroxyurea 500mg at ₹3-5/tablet. Affordable alternative if TKI expensive." },
        ],
        nonPharmacological: [
          { intervention: "Adequate hydration (2-3 liters/day)", reasoning: "Maintains urine output, promotes uric acid clearance, prevents crystal nephropathy", duration: "Especially important first 72 hours" },
          { intervention: "Avoid purine-rich foods during initial treatment", reasoning: "Reduces exogenous uric acid load", duration: "Until uric acid normalized" },
          { intervention: "Regular blood pressure monitoring", reasoning: "TKIs can cause hypertension — needs monitoring", duration: "Monthly initially" },
        ],
        monitoring: [
          { parameter: "BCR-ABL qPCR (by International Scale)", frequency: "At 3 months, 6 months, 12 months, then every 3-6 months", target: "Major molecular response (MMR) = BCR-ABL/ABL <0.1% within 12 months of starting TKI", escalation: "If BCR-ABL remains >1% at 6 months — assess compliance, resistance, check for BCR-ABL mutations" },
          { parameter: "Cytogenetics (Karyotype or FISH)", frequency: "At 3 months and 6 months", target: "Complete cytogenetic response (CCyR) = no Ph+ metaphases by 6 months", escalation: "If not achieved by 6 months — consider TKI-resistant disease, may need second-generation TKI" },
          { parameter: "Full blood count (CBC)", frequency: "Every 2-4 weeks initially, then every 3 months once stable", target: "Normalization of WBC to <10,000 within 2-4 weeks. Hb >12 g/dL, Platelets <500,000", escalation: "Persistently elevated WBC — assess compliance, or consider resistance" },
          { parameter: "Uric acid and LDH", frequency: "Weekly for first month, then monthly", target: "Uric acid <6 mg/dL, LDH normalized", escalation: "Rising uric acid — increase allopurinol, increase hydration, or escalate to rasburicase" },
          { parameter: "Renal function and electrolytes", frequency: "Weekly for first month, then monthly", target: "Creatinine <1.2, K 3.5-5.0", escalation: "Rising creatinine — suspect tumor lysis syndrome or TKI toxicity" },
          { parameter: "Liver function", frequency: "Monthly for first 3 months, then every 3 months", target: "ALT/AST <2x upper limit of normal", escalation: "Elevated transaminases — may need to hold TKI temporarily" },
        ],
        lifestyle: {
          dos: ["Take imatinib exactly as prescribed — compliance is critical for response", "Maintain hydration — drink 2-3 liters water daily", "Regular follow-up blood tests without missing appointments", "Report any bleeding, severe bruising, or infections immediately", "Maintain diary of imatinib doses to ensure compliance"],
          donts: ["Don't stop imatinib suddenly — can cause rapid leukemia progression", "Don't take imatinib with food — take on empty stomach or light meal for better absorption", "Avoid grapefruit and grapefruit juice — inhibit imatinib metabolism", "Don't use NSAIDs — increase bleeding risk (already thrombocytopenic)"],
          indianSpecific: ["If cost is barrier — contact Jan Aushadhi or NGOs (CML awareness groups) for subsidized imatinib", "Don't switch generics without informing doctor — some generics have lower bioavailability", "Seek treatment at tertiary centers — CML management complex, needs expert hematology input", "Counsel spouse/family about genetic counseling — CML not inherited, but spouse should know for support"],
        },
        followUp: {
          when: "2 weeks (early check), then every month for first 3 months, then every 3-6 months based on response",
          what: ["BCR-ABL qPCR every 3 months", "Cytogenetics at 3 and 6 months", "CBC every month initially", "Uric acid, LDH, renal function monthly", "Assess response milestones: Complete hematologic response (CHR) by week 2-4, Complete cytogenetic response (CCyR) by 6 months, Major molecular response (MMR) by 12 months"],
        },
        referral: {
          needed: true,
          to: "Hematology/Oncology — specialized CML management",
          urgency: "URGENT (within 1 week to initiate TKI)",
        },
      },
      redFlags: [
        { flag: "Sudden severe hyperkalemia with ECG changes", action: "Suspect tumor lysis syndrome — emergency: calcium gluconate IV, glucose-insulin, diuretics, dialysis if K >7", urgency: "IMMEDIATE" },
        { flag: "Acute rise in creatinine with oliguria", action: "Acute kidney injury from uric acid nephropathy or tumor lysis — fluid resuscitation, consider dialysis", urgency: "IMMEDIATE" },
        { flag: "BCR-ABL remains >1% at 6 months despite TKI", action: "Assess BCR-ABL mutation testing — may have resistant mutation, switch to second-generation TKI", urgency: "URGENT" },
        { flag: "Sudden severe infections or fever", action: "Despite elevated WBC, these are immature cells — patient is immunocompromised. Start antibiotics, blood cultures", urgency: "URGENT" },
        { flag: "Progression to blast phase (>20% blasts)", action: "Catastrophic — needs combination chemotherapy + TKI + allo-HSCT evaluation ASAP", urgency: "IMMEDIATE" },
      ],
      keyLearningPoints: [
        "Philadelphia chromosome t(9;22) present in 95% of CML — pathognomonic for disease",
        "BCR-ABL fusion gene is the driver mutation — tyrosine kinase inhibitor targets this specific protein",
        "CML has three phases: chronic (>5 years if untreated), accelerated (6-12 months), blast crisis (weeks) — diagnosis of chronic phase is favorable",
        "Imatinib achieves cure-level remission in 90%+ of chronic phase patients if compliant with therapy",
        "Response milestones: CHR (normalization of WBC) by 2-4 weeks, CCyR (no Ph+ by karyotype) by 6 months, MMR (BCR-ABL <0.1%) by 12 months",
        "Elevated basophils and eosinophils are CHARACTERISTIC of CML — not seen in other myeloproliferative neoplasms or leukemoid reactions",
        "Tumor lysis syndrome is a medical emergency — allopurinol prophylaxis BEFORE starting TKI is critical",
      ],
      commonMistakes: [
        "Confusing CML with leukemoid reaction — leukemoid reaction doesn't have basophilia/eosinophilia and no BCR-ABL",
        "Mistaking CML for acute leukemia because of high WBC — the <5% blasts indicate chronic phase, not acute",
        "Not starting allopurinol BEFORE TKI — many patients die of tumor lysis syndrome in first 72 hours",
        "Not checking BCR-ABL at baseline or during follow-up — response monitoring is critical for treatment adjustment",
        "Poor patient compliance with imatinib — some patients skip doses thinking daily medication indefinitely is unnecessary. Non-compliance leads to resistance.",
        "Not counseling on imatinib absorption — taking with food reduces bioavailability. Grapefruit juice inhibits metabolism.",
        "Not referring to tertiary center — CML management complex, needs experienced hematologist. Incorrect TKI choice leads to resistance.",
      ],
      relevantHistoryQs: ["onset", "associated", "bleeding", "occupational_exposure", "radiation", "fever", "weight_loss"],
      relevantExamIds: ["pallor", "petechiae", "ecchymoses", "splenomegaly", "heart_sounds"],
      difficulty: "HARD",
      estimatedMinutes: 25,
      subjectTags: ["PA", "IM", "ONC"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "PA1.2",
      maxScore: 100,
      passingScore: 60,
    },
  },

  // ─── 3. Acute Glomerulonephritis (Post-Streptococcal) ──────────────────────
  {
    topicCode: "PA-MOD-04-TOP-01",
    scenario: {
      patientAge: 8,
      patientSex: "Male",
      patientOccupation: "Student",
      patientLocation: "Rural Karnataka",
      chiefComplaint: "Dark/cola-colored urine and facial puffiness for 2 days",
      historyOfPresent: `
- Onset: Acute onset 2 days ago
- Urine: "Dark brown like cola" — decreased urine output, notice reduced frequency compared to baseline
- Facial swelling: Puffiness around eyes, worse in morning
- Associated: Mild fever (38.5°C), headache, mild abdominal discomfort
- No dysuria, no frequency
- Recent illness: Sore throat 2 weeks ago — presented with fever and white throat patches, given local remedy (honey, ginger)
- No rash, no joint pain, no previous kidney problems
      `.trim(),
      pastHistory: "No significant past illness. No recurrent urinary tract infections. No diabetes. Up-to-date with routine vaccinations (though incomplete — missed some due to poor healthcare access in rural area).",
      familyHistory: "No family history of kidney disease. No family history of autoimmune disease.",
      socialHistory: "Student, living with parents in rural village. 4 siblings — two brothers also have current sore throat. Shares clothes, utensils with siblings. Attends village school. Lives near pond where children play and bathe.",
      drugHistory: "No regular medications. Local remedies used for sore throat (honey, turmeric, ginger, neem). No known drug allergies.",
      vitals: { pulse: 92, bp: "102/66", temp: 38.5, rr: 22, spo2: 98 },
      generalExam: `
- General appearance: Well-nourished, slightly ill-looking, alert
- Pallor: Mild pallor present
- Icterus: Absent
- Facial edema: Bilateral periorbital edema, worse over eyes
- Edema: Dependent edema at ankles, sacrum when upright
- Rash: Absence of petechial/purpuric rash (rules out post-streptococcal glomerulonephritis with vasculitis)
      `.trim(),
      systemicExam: {
        cardiovascular: {
          heart_sounds: "S1, S2 normal. No S3 or S4.",
          murmurs: "No murmurs detected",
          peripheral_pulses: "All pulses palpable and regular",
          blood_pressure: "102/66 mmHg (slightly elevated for age 8; normal systolic <100)",
          jvp: "Normal — no raised JVP",
        },
        respiratory: {
          chest_inspection: "Bilateral equal chest movements",
          percussion: "Resonant bilaterally",
          auscultation_lungs: "Clear bilateral air entry. No crackles. No wheeze.",
        },
        abdominal: {
          abdo_inspection: "Abdomen soft, non-distended",
          palpation_superficial: "Mild diffuse tenderness",
          palpation_deep: "No organomegaly",
          kidney_palpation: "Both kidneys palpable — tender on bimanual compression",
          bowel_sounds: "Normal bowel sounds",
        },
        neurological: {
          consciousness: "GCS 15/15 — alert, not confused",
          headache: "Present but no focal neurologic signs",
          reflexes: "Deep tendon reflexes normal",
        },
      },
      availableInvestigations: [
        { id: "urinalysis", name: "Urinalysis (Dipstick + Microscopy)", cost: 150, turnaround: "30 min", category: "Urine", result: "Color: Dark brown/cola. Protein: 3+ (>1g/dL). Blood: 3+ (RBCs 50-100/hpf). WBCs: 5-10/hpf. Casts: RBC casts 8-10/hpf, Hyaline casts 15-20/hpf. Bacteria: Absent (not UTI).", isAbnormal: true, interpretation: "Hematuria with proteinuria and RBC casts = glomerulonephritis. RBC casts are pathognomonic for glomerulonephritis (not present in lower UTI). Cola-colored urine from myoglobin or hemoglobin from RBCs.", isEssential: true },
        { id: "24h_uop", name: "24-hour Urine Protein", cost: 200, turnaround: "Next day", category: "Urine", result: "Protein excretion: 0.8 g/24 hours (Normal: <0.15g/24h)", isAbnormal: true, interpretation: "Subnephrotic proteinuria (nephrotic = >3.5g). Typical for post-streptococcal GN which is usually <1g/day.", isEssential: true },
        { id: "uf_creatinine", name: "Urine Creatinine Clearance (from 24-hour urine)", cost: 200, turnaround: "Next day", category: "Urine", result: "Creatinine clearance: 58 mL/min/1.73m² (Normal for age 8: 100-150)", isAbnormal: true, interpretation: "Reduced glomerular filtration rate indicating acute kidney injury stage 1-2. Early renal dysfunction from glomerulonephritis.", isEssential: true },
        { id: "rft", name: "Renal Function Test", cost: 400, turnaround: "1 hour", category: "Biochemistry", result: "Urea: 48 mg/dL (Normal: 15-40 for children), Creatinine: 1.2 mg/dL (Normal for age 8: 0.4-0.8), Na: 136 mEq/L, K: 4.8 mEq/L, Cl: 102 mEq/L", isAbnormal: true, interpretation: "Elevated urea and creatinine — indicates acute kidney injury (AKI) from glomerulonephritis. Not severe yet (stage 2), but requires monitoring.", isEssential: true },
        { id: "cbc", name: "Complete Blood Count", cost: 300, turnaround: "1 hour", category: "Hematology", result: "Hb: 11.2 g/dL (mild anemia for age), WBC: 8,200/μL (normal), Platelets: 2.8 lakhs (normal)", isAbnormal: true, interpretation: "Mild anemia — either from hemodilution (edema) or mild hemolysis from hematuria. Normal WBC rules out sepsis.", isEssential: false },
        { id: "ast", name: "Antistreptolysin O Titer (ASO titer)", cost: 800, turnaround: "2 hours", category: "Serology", result: "ASO titer: 820 IU/mL (Normal: <200 IU/mL)", isAbnormal: true, interpretation: "Markedly elevated — confirms recent Streptococcus pyogenes infection. Rises 1-2 weeks after pharyngitis, peaks at 3-4 weeks. Diagnostic of post-streptococcal GN.", isEssential: true },
        { id: "throat_culture", name: "Throat Culture for Streptococcus", cost: 400, turnaround: "48 hours", category: "Microbiology", result: "Negative (infection 2 weeks ago — organism likely cleared)", isAbnormal: false, interpretation: "Negative because infection was 2 weeks prior. By this time, the organism is usually cleared. Elevated ASO titer more reliable.", isEssential: false },
        { id: "serology", name: "Complement Levels (C3, C4, CH50)", cost: 1500, turnaround: "2 hours", category: "Immunology", result: "C3: 0.42 g/L (Normal: 0.9-1.8), C4: 0.35 g/L (Normal: 0.1-0.4), CH50: 45% (Normal: >50%)", isAbnormal: true, interpretation: "Selective C3 depletion is CHARACTERISTIC of post-streptococcal GN. Low C3 suggests alternate pathway complement activation. C3 typically normalizes by 8-12 weeks.", isEssential: true },
        { id: "renal_biopsy", name: "Renal Biopsy (not done acutely, but if diagnosis unclear)", cost: 5000, turnaround: "3-5 days", category: "Histology", result: "Not done in this case (classic presentation, not needed). If done would show: Light microscopy — proliferative GN with subepithelial immune deposits. Immunofluorescence — IgG, IgM, C3 deposits in granular pattern. EM — 'humps' (subepithelial deposits).", isAbnormal: false, interpretation: "Classic subepithelial 'humps' on electron microscopy are pathognomonic for post-streptococcal GN, but not needed for diagnosis.", isEssential: false },
        { id: "bp_home", name: "Home Blood Pressure Monitoring (Serial)", cost: 0, turnaround: "Daily", category: "Vital", result: "Day 1: 102/66. Day 2: 108/72. Day 3 (on treatment): 104/68.", isAbnormal: true, interpretation: "Mild hypertension (>95th percentile for age 8) — common in acute GN from volume overload. Improves with salt restriction and diuretics.", isEssential: true },
      ],
      correctDiagnosis: "Acute Glomerulonephritis (Post-Streptococcal) with Acute Kidney Injury Stage 2",
      differentials: [
        { diagnosis: "IgA Nephropathy", likelihood: "LOW", reasoning: "Most common GN worldwide but usually presents with isolated hematuria or recurrent episodes. Post-streptococcal GN has more acute presentation with rapid onset edema, hypertension. ASO titer would be normal. IgA levels elevated (not checked here but would be)." },
        { diagnosis: "Lupus Nephritis (SLE)", likelihood: "LOW", reasoning: "Would have systemic lupus features (ANA+, low complement C3 AND C4, rash, arthritis). Child is boy (SLE rare in boys). ASO titer negative." },
        { diagnosis: "Membranoproliferative GN", likelihood: "LOW", reasoning: "MPGN also has low C3 but usually persistent, not transient. Presents with nephrotic syndrome (>3.5g protein) — our patient has subnephrotic. Different serologies." },
        { diagnosis: "Acute Tubular Necrosis (ATN)", likelihood: "LOW", reasoning: "Presents with muddy brown casts and epithelial cells. No RBC casts (not glomerular). Usually from sepsis or nephrotoxic drugs — absent here." },
      ],
      diagnosticReasoning: "8-year-old boy with acute onset (2 days) cola-colored hematuria and facial edema. History of pharyngitis 2 weeks prior. Examination shows periorbital edema, mild hypertension (102/66, elevated for age), kidney tenderness. Urinalysis shows hematuria with RBC casts (pathognomonic for glomerulonephritis) and proteinuria. Creatinine elevated at 1.2 (normal 0.4-0.8 for age) — AKI stage 2. ASO titer markedly elevated at 820 (recent streptococcal infection). C3 selectively depleted (characteristic of post-streptococcal GN). This is CLASSIC acute post-streptococcal glomerulonephritis.",
      managementPlan: {
        immediateActions: [
          { action: "Fluid and salt restriction", reasoning: "Main cause of edema and hypertension is volume overload from reduced urine output. Restrict fluids to insensible losses + measured urine output. Strict sodium diet (<2g/day).", priority: "STAT" },
          { action: "Start diuretics if volume overload worsens", reasoning: "If breathing becomes difficult (pulmonary edema) or BP rises significantly, furosemide needed. Monitor for overdiuresis → AKI worsening.", priority: "URGENT" },
          { action: "Monitor blood pressure closely", reasoning: "Risk of hypertensive complications (seizures, encephalopathy, pulmonary edema). Check BP daily. Contact pediatrician if systolic >120 for age.", priority: "STAT" },
          { action: "Avoid NSAIDs", reasoning: "NSAIDs worsen renal function in AKI. Avoid — will reduce GFR further.", priority: "STAT" },
        ],
        pharmacological: [
          { drugClass: "Diuretic (if needed)", examples: ["Furosemide 1-2 mg/kg/dose OD-BD if volume overload develops"], route: "Oral or IV", duration: "Until edema resolves (typically 1-2 weeks)", reasoning: "Reduces fluid overload and hypertension. Use cautiously to avoid electrolyte imbalance or AKI worsening from excessive diuresis.", contraindications: ["Severe hypokalemia", "Acute AKI with rising creatinine"], indianContext: "Furosemide 20mg tablet at ₹1-2. Affordable." },
          { drugClass: "Antihypertensive (if systolic >120 for age)", examples: ["Enalapril 0.1-0.5 mg/kg/day in 1-2 doses", "Or Labetalol if crisis"], route: "Oral", duration: "Until BP controlled (weeks to months)", reasoning: "ACE inhibitor provides renal protection. Reduces intraglomerular pressure. Also aids resolution of proteinuria.", contraindications: ["Hyperkalemia", "Bilateral renal artery stenosis (rare)"], indianContext: "Enalapril 5mg at ₹3-5 in generics." },
          { drugClass: "Antibiotic for strep throat", examples: ["Amoxicillin 250mg BD-TDS for 10 days (though infection is past, still recommended to eradicate carriage)", "Or Penicillin V 250mg QID"], route: "Oral", duration: "10 days", reasoning: "Although acute pharyngitis is 2 weeks past, antibiotic still given to eradicate Strep carriage and prevent rheumatic fever. Secondary prophylaxis may be needed if recurrent episodes.", contraindications: ["Penicillin allergy — use Cephalexin or Azithromycin"], indianContext: "Amoxicillin 250mg/5mL suspension at ₹10-15 for 30mL bottle. Pediatric dose cost ~₹50 for 10-day course." },
          { drugClass: "Potassium binder (if hyperkalemia develops)", examples: ["Sodium polystyrene sulfonate (Kayexalate) 1g/kg/dose"], route: "Oral", duration: "As needed for hyperkalemia", reasoning: "K+ rises due to AKI from reduced GFR. If K >5.5 — consider Kayexalate.", contraindications: ["Severe constipation"], indianContext: "Kayexalate expensive in India (~₹500+ per packet). Often not available in rural areas." },
        ],
        nonPharmacological: [
          { intervention: "Strict fluid and salt restriction", reasoning: "MOST important intervention. Restrict fluids to insensible losses (300-400 mL/day in children) + measured urine output. Eliminate added salt.", duration: "Throughout acute phase (1-2 weeks)" },
          { intervention: "Bed rest during acute phase", reasoning: "Reduces metabolic demand and renal workload. Also reduces risk of falls from hypertension/headache.", duration: "First 1-2 weeks" },
          { intervention: "Monitor intake and output strictly", reasoning: "Calculate daily balance. If output declining — increase concern for worsening AKI.", duration: "Daily" },
          { intervention: "Low-protein diet if urea >60", reasoning: "Reduce protein intake if azotemia develops. Lowers urea production.", duration: "If needed" },
        ],
        monitoring: [
          { parameter: "Daily weight and fluid balance", frequency: "Daily", target: "Weight loss of 0.5 kg/day as edema resolves", escalation: "If weight static or increasing — reassess fluid intake/output" },
          { parameter: "Blood pressure and pulse", frequency: "Daily", target: "BP <95th percentile for age and height (for age 8: systolic <115)", escalation: "If systolic >120 — start antihypertensive, increase fluid restriction" },
          { parameter: "Serum creatinine and urea", frequency: "Every 2-3 days initially, then weekly", target: "Creatinine returns to normal (<0.8) within 2-4 weeks. Urea normalizes. If worsening → suspicion of rapidly progressive GN", escalation: "If creatinine rising despite fluid restriction — consider RPGN, may need immunosuppression" },
          { parameter: "Serum electrolytes (Na, K, Cl)", frequency: "Every 2-3 days initially", target: "K 3.5-5.0 (hyperkalemia risk), Na 135-145 (hyponatremia if over-restricted fluids)", escalation: "If K >6 — restrict K in diet, consider Kayexalate or insulin-glucose. If Na <130 — free water restriction." },
          { parameter: "Urinalysis", frequency: "Weekly", target: "Hematuria gradually decreasing over 2-4 weeks. RBC casts disappear. Proteinuria decreases.", escalation: "If hematuria worsening — rare, may indicate RPGN" },
          { parameter: "C3 complement level", frequency: "At 4 weeks", target: "C3 normalizes to >0.9 g/L by 8-12 weeks", escalation: "If C3 remains low at 12 weeks — reconsider diagnosis, may not be PSGN" },
        ],
        lifestyle: {
          dos: ["Complete bedrest for 1-2 weeks", "Maintain strict salt restriction (<2g/day) — avoid pickles, salted snacks common in India", "Drink fluids only as prescribed", "Seek medical help if increased breathing difficulty, severe headache, seizures", "Follow-up urine testing to document resolution of hematuria"],
          donts: ["No strenuous exercise or sports for 3-6 months (even after clinically improved)", "Avoid NSAIDs (ibuprofen, naproxen) — worsen kidney injury", "No excess protein intake", "Don't use herbal remedies for hypertension — stick to prescribed medication"],
          indianSpecific: ["Avoid popular salted snacks: chakli, namkeen, papad, pickles, sauce", "Use low-salt cooking — minimal oil, no added salt, avoid MSG", "If family is vegetarian — still adequate protein with dal, paneer, but limit to maintenance needs", "Explain to family that edema is temporary — will resolve with treatment. Don't believe folk remedies.", "Ensure completion of antibiotic course even if feeling better — important for secondary prophylaxis"],
        },
        followUp: {
          when: "1 week, 2 weeks, 4 weeks, 8 weeks, then at 3 months and 6 months",
          what: ["Clinical assessment for edema/hypertension resolution", "Urinalysis to document clearance of RBCs/casts", "Serum creatinine and electrolytes", "C3 complement at 4 weeks (should normalize by 8-12 weeks)", "Blood pressure check at each visit", "Repeat ultrasound if AKI severe or worsening"],
        },
        referral: {
          needed: true,
          to: "Pediatric Nephrology — for management of GN and AKI, and to rule out rapidly progressive GN",
          urgency: "URGENT (within 1 week) if not already under nephrology, especially for AKI monitoring",
        },
      },
      redFlags: [
        { flag: "Rapid rise in creatinine (doubling within days) despite fluid restriction", action: "Suspect rapidly progressive GN (RPGN) — ANCA-negative RPGN occurs in post-streptococcal GN. May need immunosuppression or biopsy.", urgency: "URGENT" },
        { flag: "Seizures or severe hypertensive headache", action: "Hypertensive encephalopathy — emergency. Give antihypertensive IV (labetalol/hydralazine), admit to ICU", urgency: "IMMEDIATE" },
        { flag: "Severe breathing difficulty (orthopnea, crackles on exam)", action: "Pulmonary edema from volume overload — IV furosemide, consider ICU, may need ventilation", urgency: "IMMEDIATE" },
        { flag: "Severe hyperkalemia (K >6.5 mEq/L) with ECG changes (peaked T waves)", action: "Cardiac arrhythmia risk — emergency: IV calcium gluconate, insulin-glucose infusion, beta-agonists, consider dialysis", urgency: "IMMEDIATE" },
        { flag: "Anuria (no urine output) for >12 hours", action: "Suspect rapidly progressive disease or acute tubular necrosis superimposed — check BP, consider ultrasound for obstruction, may need dialysis", urgency: "IMMEDIATE" },
      ],
      keyLearningPoints: [
        "Post-streptococcal glomerulonephritis (PSGN) is THE most common glomerulonephritis in children worldwide",
        "Presents 10-14 days AFTER Group A Streptococcal pharyngitis (or 3-6 weeks after pyoderma)",
        "Classic triad: Hematuria (often cola-colored), Hypertension, Edema — remember as 'Acute Nephritic Syndrome'",
        "RBC casts in urinalysis are PATHOGNOMONIC for glomerulonephritis (distinguish from lower UTI which has WBC casts)",
        "Elevated ASO titer + low C3 complement = diagnostic for PSGN",
        "Prognosis: Excellent in children (>95% recover fully). Most adults also recover but may have residual renal dysfunction",
        "Treatment is supportive: fluid/salt restriction, diuretics, antihypertensives. Antibiotics don't change GN course but prevent rheumatic fever",
      ],
      commonMistakes: [
        "Confusing PSGN with IgA nephropathy — IgA presents with recurrent hematuria over months, not acute edema/hypertension",
        "Treating as UTI because of hematuria and fever — urinalysis differentiates: RBC casts = GN, WBC casts/bacteria = UTI",
        "Over-aggressive diuresis → worsens AKI and electrolyte abnormalities. Gentle fluid restriction preferred over loop diuretics",
        "Using NSAIDs for pain/fever — contraindicated in AKI, worsens renal function",
        "Not checking C3 levels — low C3 at baseline helps confirm PSGN diagnosis",
        "Unnecessarily prolonging bed rest — children often recover by 2-4 weeks. Can return to normal activity once edema/hypertension resolved and urinalysis normalizing.",
        "Missing that PSGN can progress to rapidly progressive GN (rare but occurs in ~5%) — need vigilant monitoring of creatinine",
      ],
      relevantHistoryQs: ["onset", "recent_infection", "sore_throat_duration", "urine_color", "edema_timing", "fever", "breathing_difficulty"],
      relevantExamIds: ["facial_edema", "blood_pressure", "kidney_palpation", "heart_sounds", "auscultation_lungs"],
      difficulty: "MEDIUM",
      estimatedMinutes: 20,
      subjectTags: ["PA", "PD"],
      examRelevance: ["NEXT_STEP1", "NEET_PG", "CLINICAL_EXAM"],
      nmcCompetencyCode: "PA2.1",
      maxScore: 100,
      passingScore: 60,
    },
  },
];
